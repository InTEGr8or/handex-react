// shared/endpoints.ts

export const ENDPOINTS = {
    aws: {
        cognito: {
            url: 'https://cognito-idp.us-east-1.amazonaws.com',
        },
        s3: {
            url: 'https://s3.amazonaws.com',
            bucketName: 'handterm',
        },
    },
    api: {
        SignUp: '/signUp',
        GetLog: '/getLog',
        SaveLog: '/saveLog',
        SignIn: '/signIn',
        SignOut: '/signOut',
        ChangePassword: '/changePassword',
        TokenHandler: '/tokenHandler',
        RefreshSession: '/refreshSession',
        CheckSession: '/checkSession',
        GetUser: '/getUser',
    }

} as const