// src/lib/useAuth.ts

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ENDPOINTS } from '../shared/endpoints';
import { MyResponse } from 'src/types/Types';

const API_URL = ENDPOINTS.api.BaseUrl;

const baseConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Correctly positioned and boolean value
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Optionally check session validity on hook mount

  }, []);

  const checkSession = async () => {
    try {
      // This could be a call to a `/session` endpoint that verifies the session
      await axios.get(`${API_URL}${ENDPOINTS.api.CheckSession}`, baseConfig);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Session check failed:', error);
      setIsLoggedIn(false);
    }
  };

  const signUp = async (username: string, password: string, email: string) => {
    if (!username || !password || !email) {
      throw new Error('All fields are required');
    }
    try {
      await axios.post(`${API_URL}${ENDPOINTS.api.SignUp}`, { username, password, email }, baseConfig);
      // Handle post-signup logic (e.g., auto-login or redirect to login page)
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };
  const refreshTokenIfNeeded = async (): Promise<MyResponse<number>> => {
    let response: MyResponse<number> = { status: 200, error: [], message: 'Token refresh' };
    const accessToken = localStorage.getItem('AccessToken');
    const refreshToken = localStorage.getItem('RefreshToken');
    const expiresAt = localStorage.getItem('ExpiresAt');
    if (!accessToken) {
      response.error.push('No access token found');
    }
    if (!refreshToken) {
      response.error.push('No refresh token found');
    }
    if (!expiresAt || isNaN(parseInt(expiresAt))) {
      response.error.push('No expiry time found');
    }
    if (response.status !== 200 || !accessToken || !refreshToken || !expiresAt) {
      response.status = 401;
      return response;
    }

    const isTokenExpired = new Date().getTime() > parseInt(expiresAt);
    if (!accessToken || isTokenExpired) {
      try {
        const postResponse = await axios.post(`${API_URL}${ENDPOINTS.api.RefreshToken}`, { refreshToken }, baseConfig);
        // Assuming the response contains the new access token and its expiry time
        localStorage.setItem('AccessToken', postResponse.data.AccessToken);
        setExpiresAt(postResponse.data.ExpiresIn);
        console.log('Token refreshed successfully');
        response.status = 200;
        return response; // Indicate that the session was successfully refreshed
      } catch (error) {
        console.error('Token refresh failed:', error);
        setIsLoggedIn(false);
        return response; // Indicate that the session could not be refreshed
      }
    }
    return response; // Token is valid and not expired
  };
  const setExpiresAt = (expiresIn: string) => {
    const expiresAt = getExpiresAt(expiresIn);
    if (expiresAt) localStorage.setItem('ExpiresAt', expiresAt);
  }
  const getExpiresAt = (expiresIn: string) => {
    const expiresInNumber = parseInt(expiresIn);
    if (isNaN(expiresInNumber)) return null;
    const expiresAt = new Date().getTime() + expiresInNumber * 1000;
    return expiresAt.toString(10);
  }

  const getAuthConfig = async (): Promise<MyResponse<any>> => {
    // Ensure refreshTokenIfNeeded is awaited to complete the refresh before proceeding
    const refreshResponse = await refreshTokenIfNeeded();
    if (refreshResponse.status !== 200) return refreshResponse;

    const accessToken = localStorage.getItem('AccessToken');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    let response: MyResponse<any> = {
      status: 200, message: 'Get auth config', error: [], data: {
        ...baseConfig, // Spread the existing config to keep content-type
        headers: {
          ...baseConfig.headers, // Spread any existing headers
          'Authorization': `Bearer ${accessToken}`, // Add the Authorization header with the Access Token
        }
      }
    };
    // Include the Access Token in the Authorization header
    return response;
  };

  const setUser = async (profile: string) => {
    // Set the user profile string for the current logged in user
    try {
      const authConfig = await getAuthConfig();
      await axios.post(`${API_URL}${ENDPOINTS.api.SetUser}`, { profile }, authConfig.data);
    } catch (error) {
      console.error('Error setting user profile:', error);
    }
  }

  const saveLog = async (key: string, content: string, extension: string = 'json'): Promise<MyResponse<any>> => {
    try {
      const authConfig = await getAuthConfig();
      await axios.post(`${API_URL}${ENDPOINTS.api.SaveLog}`, { key, content, extension }, authConfig.data);
      return { status: 200, data: null, error: [], message: 'Log saved successfully' };
    } catch (error) {
      console.error('Error saving log:', error);
      return { status: 404, message: 'Error saving log', error: ['Error saving log'] };
    }
  }

  const getLog = async (key: string, limit: number = 10): Promise<MyResponse<any>> => {
    try {
      const authConfig = await getAuthConfig();
      // Prepare the query parameters
      const params = {
        key: key,
        limit: limit, 
      };
      // Make the request with the params object
      const response = await axios.get(`${API_URL}${ENDPOINTS.api.GetLog}`, {
        headers: authConfig.data.headers, // Assuming authConfig.data contains headers
        params
      });
      return { status: 200, message: 'Log fetched successfully', data: response.data, error: [] };
    } catch (error: any) {
      return {
        status: 404,
        message: 'Error fetching log',
        error: ['Error fetching log', error.message],
        data: null
      };
    }
  }

  const getFile = async (key: string, extension: string = 'json'): Promise<MyResponse<any>> => {
    try {
      const authConfig = await getAuthConfig();
      const response = await axios.get(`${API_URL}${ENDPOINTS.api.GetFile}`, {
        headers: authConfig.data.headers, // Assuming authConfig.data contains headers
        params: { key, extension }
      });
      return { status: 200, message: 'File fetched successfully', data: response.data, error: [] };
    } catch (error: any) {
      return {
        status: 404,
        message: 'Error fetching file',
        error: ['Error fetching file', error.message],
        data: null
      };
    }
  }

  const putFile = async (key: string, content: string, extension: string = 'json'): Promise<MyResponse<any>> => {
    try {
      const authConfig = await getAuthConfig();
      await axios.post(`${API_URL}${ENDPOINTS.api.PutFile}`, { key, content, extension }, authConfig.data);
      return { status: 200, data: null, error: [], message: 'File saved successfully' };
    } catch (error) {
      console.error('Error saving file:', error);
      return { status: 404, message: 'Error saving file', error: ['Error saving file'] };
    }
  }

  const listLog = async () => {
    try {
      const authConfig = await getAuthConfig();
      const response = await axios.get(`${API_URL}${ENDPOINTS.api.ListLog}`, authConfig.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching log:', error);
      return null;
    }
  }

  const getUser = async (): Promise<MyResponse<any>> => {
    try {
      // Make the request with the Access Token
      const authConfig = await getAuthConfig();
      if (authConfig.status !== 200) return authConfig;
      const request = axios.get(`${API_URL}${ENDPOINTS.api.GetUser}`, authConfig.data);
      const response = await request;
      return { data: response.data, message: 'User fetched successfully', status: 200, error: [] }; // Contains username, attributes, etc.
    } catch (error: any) {
      return {
        status: 401,
        message: 'Error fetching current user',
        error: ['Error fetching current user', error.message],
        data: null
      };
    }
  };

  const signIn = async (username: string, password: string): Promise<MyResponse<any>> => {
    if (!username || !password) {
      throw new Error('All fields are required');
    }
    try {
      const response = await axios.post(`${API_URL}${ENDPOINTS.api.SignIn}`, { username, password });
      // The API should set an HttpOnly cookie directly, no need to handle tokens here
      console.log('Login successful:', response.data);
      setIsLoggedIn(true);
      localStorage.setItem('AccessToken', response.data.AccessToken);
      localStorage.setItem('RefreshToken', response.data.RefreshToken);
      localStorage.setItem('IdToken', response.data.IdToken);
      localStorage.setItem('SignedInAs', username);
      setExpiresAt(response.data.ExpiresIn);
      return { data: response.data, message: 'Login successful', status: 200, error: [] }; // Contains username, attributes, etc. response.data; // Return session data if needed
    } catch (error) {
      return {
        status: 401,
        message: 'Login failed',
        error: ['Login failed'],
        data: null
      }
    }
  };

  const signOut = async () => {
    try {
      await axios.get(`${API_URL}${ENDPOINTS.api.SignOut}`);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
      await axios.post(`${API_URL}${ENDPOINTS.api.ChangePassword}`, { oldPassword, newPassword });
    } catch (error) {
      console.error('Password change failed:', error);
      throw error;
    }
  };

  return { isLoggedIn, login: signIn, logout: signOut, signUp, getUser, checkSession, changePassword, setUser, saveLog, getLog, listLog, getFile, putFile };
};