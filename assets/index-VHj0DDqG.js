(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))y(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const a of h.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&y(a)}).observe(document,{childList:!0,subtree:!0});function l(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function y(p){if(p.ep)return;p.ep=!0;const h=l(p);fetch(p.href,h)}})();const ot="modulepreload",ut=function(i){return"/"+i},Er={},Br=function(c,l,y){let p=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),a=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));p=Promise.all(l.map(u=>{if(u=ut(u),u in Er)return;Er[u]=!0;const d=u.endsWith(".css"),B=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${B}`))return;const E=document.createElement("link");if(E.rel=d?"stylesheet":ot,d||(E.as="script",E.crossOrigin=""),E.href=u,a&&E.setAttribute("nonce",a),document.head.appendChild(E),d)return new Promise((_,b)=>{E.addEventListener("load",_),E.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}return p.then(()=>c()).catch(h=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=h,window.dispatchEvent(a),!a.defaultPrevented)throw h})};var Dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ct(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Mt(i){if(i.__esModule)return i;var c=i.default;if(typeof c=="function"){var l=function y(){return this instanceof y?Reflect.construct(c,arguments,this.constructor):c.apply(this,arguments)};l.prototype=c.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(i).forEach(function(y){var p=Object.getOwnPropertyDescriptor(i,y);Object.defineProperty(l,y,p.get?p:{enumerable:!0,get:function(){return i[y]}})}),l}var _r={exports:{}},H={},Ar={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=Symbol.for("react.element"),ft=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),lt=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),ht=Symbol.for("react.provider"),at=Symbol.for("react.context"),yt=Symbol.for("react.forward_ref"),dt=Symbol.for("react.suspense"),wt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),gr=Symbol.iterator;function mt(i){return i===null||typeof i!="object"?null:(i=gr&&i[gr]||i["@@iterator"],typeof i=="function"?i:null)}var Ur={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rr=Object.assign,Sr={};function D(i,c,l){this.props=i,this.context=c,this.refs=Sr,this.updater=l||Ur}D.prototype.isReactComponent={};D.prototype.setState=function(i,c){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,c,"setState")};D.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Cr(){}Cr.prototype=D.prototype;function tr(i,c,l){this.props=i,this.context=c,this.refs=Sr,this.updater=l||Ur}var er=tr.prototype=new Cr;er.constructor=tr;Rr(er,D.prototype);er.isPureReactComponent=!0;var Ir=Array.isArray,br=Object.prototype.hasOwnProperty,nr={current:null},Tr={key:!0,ref:!0,__self:!0,__source:!0};function kr(i,c,l){var y,p={},h=null,a=null;if(c!=null)for(y in c.ref!==void 0&&(a=c.ref),c.key!==void 0&&(h=""+c.key),c)br.call(c,y)&&!Tr.hasOwnProperty(y)&&(p[y]=c[y]);var u=arguments.length-2;if(u===1)p.children=l;else if(1<u){for(var d=Array(u),B=0;B<u;B++)d[B]=arguments[B+2];p.children=d}if(i&&i.defaultProps)for(y in u=i.defaultProps,u)p[y]===void 0&&(p[y]=u[y]);return{$$typeof:V,type:i,key:h,ref:a,props:p,_owner:nr.current}}function Et(i,c){return{$$typeof:V,type:i.type,key:c,ref:i.ref,props:i.props,_owner:i._owner}}function ir(i){return typeof i=="object"&&i!==null&&i.$$typeof===V}function Bt(i){var c={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(l){return c[l]})}var Fr=/\/+/g;function Z(i,c){return typeof i=="object"&&i!==null&&i.key!=null?Bt(""+i.key):c.toString(36)}function v(i,c,l,y,p){var h=typeof i;(h==="undefined"||h==="boolean")&&(i=null);var a=!1;if(i===null)a=!0;else switch(h){case"string":case"number":a=!0;break;case"object":switch(i.$$typeof){case V:case ft:a=!0}}if(a)return a=i,p=p(a),i=y===""?"."+Z(a,0):y,Ir(p)?(l="",i!=null&&(l=i.replace(Fr,"$&/")+"/"),v(p,c,l,"",function(B){return B})):p!=null&&(ir(p)&&(p=Et(p,l+(!p.key||a&&a.key===p.key?"":(""+p.key).replace(Fr,"$&/")+"/")+i)),c.push(p)),1;if(a=0,y=y===""?".":y+":",Ir(i))for(var u=0;u<i.length;u++){h=i[u];var d=y+Z(h,u);a+=v(h,c,l,d,p)}else if(d=mt(i),typeof d=="function")for(i=d.call(i),u=0;!(h=i.next()).done;)h=h.value,d=y+Z(h,u++),a+=v(h,c,l,d,p);else if(h==="object")throw c=String(i),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.");return a}function W(i,c,l){if(i==null)return i;var y=[],p=0;return v(i,y,"","",function(h){return c.call(l,h,p++)}),y}function gt(i){if(i._status===-1){var c=i._result;c=c(),c.then(function(l){(i._status===0||i._status===-1)&&(i._status=1,i._result=l)},function(l){(i._status===0||i._status===-1)&&(i._status=2,i._result=l)}),i._status===-1&&(i._status=0,i._result=c)}if(i._status===1)return i._result.default;throw i._result}var U={current:null},Y={transition:null},It={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:Y,ReactCurrentOwner:nr};function Lr(){throw Error("act(...) is not supported in production builds of React.")}x.Children={map:W,forEach:function(i,c,l){W(i,function(){c.apply(this,arguments)},l)},count:function(i){var c=0;return W(i,function(){c++}),c},toArray:function(i){return W(i,function(c){return c})||[]},only:function(i){if(!ir(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};x.Component=D;x.Fragment=st;x.Profiler=pt;x.PureComponent=tr;x.StrictMode=lt;x.Suspense=dt;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=It;x.act=Lr;x.cloneElement=function(i,c,l){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var y=Rr({},i.props),p=i.key,h=i.ref,a=i._owner;if(c!=null){if(c.ref!==void 0&&(h=c.ref,a=nr.current),c.key!==void 0&&(p=""+c.key),i.type&&i.type.defaultProps)var u=i.type.defaultProps;for(d in c)br.call(c,d)&&!Tr.hasOwnProperty(d)&&(y[d]=c[d]===void 0&&u!==void 0?u[d]:c[d])}var d=arguments.length-2;if(d===1)y.children=l;else if(1<d){u=Array(d);for(var B=0;B<d;B++)u[B]=arguments[B+2];y.children=u}return{$$typeof:V,type:i.type,key:p,ref:h,props:y,_owner:a}};x.createContext=function(i){return i={$$typeof:at,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:ht,_context:i},i.Consumer=i};x.createElement=kr;x.createFactory=function(i){var c=kr.bind(null,i);return c.type=i,c};x.createRef=function(){return{current:null}};x.forwardRef=function(i){return{$$typeof:yt,render:i}};x.isValidElement=ir;x.lazy=function(i){return{$$typeof:xt,_payload:{_status:-1,_result:i},_init:gt}};x.memo=function(i,c){return{$$typeof:wt,type:i,compare:c===void 0?null:c}};x.startTransition=function(i){var c=Y.transition;Y.transition={};try{i()}finally{Y.transition=c}};x.unstable_act=Lr;x.useCallback=function(i,c){return U.current.useCallback(i,c)};x.useContext=function(i){return U.current.useContext(i)};x.useDebugValue=function(){};x.useDeferredValue=function(i){return U.current.useDeferredValue(i)};x.useEffect=function(i,c){return U.current.useEffect(i,c)};x.useId=function(){return U.current.useId()};x.useImperativeHandle=function(i,c,l){return U.current.useImperativeHandle(i,c,l)};x.useInsertionEffect=function(i,c){return U.current.useInsertionEffect(i,c)};x.useLayoutEffect=function(i,c){return U.current.useLayoutEffect(i,c)};x.useMemo=function(i,c){return U.current.useMemo(i,c)};x.useReducer=function(i,c,l){return U.current.useReducer(i,c,l)};x.useRef=function(i){return U.current.useRef(i)};x.useState=function(i){return U.current.useState(i)};x.useSyncExternalStore=function(i,c,l){return U.current.useSyncExternalStore(i,c,l)};x.useTransition=function(){return U.current.useTransition()};x.version="18.3.1";Ar.exports=x;var Pr=Ar.exports;const jt=ct(Pr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=Pr,_t=Symbol.for("react.element"),At=Symbol.for("react.fragment"),Ut=Object.prototype.hasOwnProperty,Rt=Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,St={key:!0,ref:!0,__self:!0,__source:!0};function $r(i,c,l){var y,p={},h=null,a=null;l!==void 0&&(h=""+l),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(a=c.ref);for(y in c)Ut.call(c,y)&&!St.hasOwnProperty(y)&&(p[y]=c[y]);if(i&&i.defaultProps)for(y in c=i.defaultProps,c)p[y]===void 0&&(p[y]=c[y]);return{$$typeof:_t,type:i,key:h,ref:a,props:p,_owner:Rt.current}}H.Fragment=At;H.jsx=$r;H.jsxs=$r;_r.exports=H;var Ct=_r.exports,Or={},z={};z.byteLength=kt;z.toByteArray=Pt;z.fromByteArray=Nt;var k=[],C=[],bt=typeof Uint8Array<"u"?Uint8Array:Array,rr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var N=0,Tt=rr.length;N<Tt;++N)k[N]=rr[N],C[rr.charCodeAt(N)]=N;C[45]=62;C[95]=63;function Nr(i){var c=i.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=i.indexOf("=");l===-1&&(l=c);var y=l===c?0:4-l%4;return[l,y]}function kt(i){var c=Nr(i),l=c[0],y=c[1];return(l+y)*3/4-y}function Lt(i,c,l){return(c+l)*3/4-l}function Pt(i){var c,l=Nr(i),y=l[0],p=l[1],h=new bt(Lt(i,y,p)),a=0,u=p>0?y-4:y,d;for(d=0;d<u;d+=4)c=C[i.charCodeAt(d)]<<18|C[i.charCodeAt(d+1)]<<12|C[i.charCodeAt(d+2)]<<6|C[i.charCodeAt(d+3)],h[a++]=c>>16&255,h[a++]=c>>8&255,h[a++]=c&255;return p===2&&(c=C[i.charCodeAt(d)]<<2|C[i.charCodeAt(d+1)]>>4,h[a++]=c&255),p===1&&(c=C[i.charCodeAt(d)]<<10|C[i.charCodeAt(d+1)]<<4|C[i.charCodeAt(d+2)]>>2,h[a++]=c>>8&255,h[a++]=c&255),h}function $t(i){return k[i>>18&63]+k[i>>12&63]+k[i>>6&63]+k[i&63]}function Ot(i,c,l){for(var y,p=[],h=c;h<l;h+=3)y=(i[h]<<16&16711680)+(i[h+1]<<8&65280)+(i[h+2]&255),p.push($t(y));return p.join("")}function Nt(i){for(var c,l=i.length,y=l%3,p=[],h=16383,a=0,u=l-y;a<u;a+=h)p.push(Ot(i,a,a+h>u?u:a+h));return y===1?(c=i[l-1],p.push(k[c>>2]+k[c<<4&63]+"==")):y===2&&(c=(i[l-2]<<8)+i[l-1],p.push(k[c>>10]+k[c>>4&63]+k[c<<2&63]+"=")),p.join("")}var or={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */or.read=function(i,c,l,y,p){var h,a,u=p*8-y-1,d=(1<<u)-1,B=d>>1,E=-7,_=l?p-1:0,b=l?-1:1,R=i[c+_];for(_+=b,h=R&(1<<-E)-1,R>>=-E,E+=u;E>0;h=h*256+i[c+_],_+=b,E-=8);for(a=h&(1<<-E)-1,h>>=-E,E+=y;E>0;a=a*256+i[c+_],_+=b,E-=8);if(h===0)h=1-B;else{if(h===d)return a?NaN:(R?-1:1)*(1/0);a=a+Math.pow(2,y),h=h-B}return(R?-1:1)*a*Math.pow(2,h-y)};or.write=function(i,c,l,y,p,h){var a,u,d,B=h*8-p-1,E=(1<<B)-1,_=E>>1,b=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,R=y?0:h-1,M=y?1:-1,j=c<0||c===0&&1/c<0?1:0;for(c=Math.abs(c),isNaN(c)||c===1/0?(u=isNaN(c)?1:0,a=E):(a=Math.floor(Math.log(c)/Math.LN2),c*(d=Math.pow(2,-a))<1&&(a--,d*=2),a+_>=1?c+=b/d:c+=b*Math.pow(2,1-_),c*d>=2&&(a++,d/=2),a+_>=E?(u=0,a=E):a+_>=1?(u=(c*d-1)*Math.pow(2,p),a=a+_):(u=c*Math.pow(2,_-1)*Math.pow(2,p),a=0));p>=8;i[l+R]=u&255,R+=M,u/=256,p-=8);for(a=a<<p|u,B+=p;B>0;i[l+R]=a&255,R+=M,a/=256,B-=8);i[l+R-M]|=j*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(i){const c=z,l=or,y=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=u,i.SlowBuffer=Mr,i.INSPECT_MAX_BYTES=50;const p=2147483647;i.kMaxLength=p,u.TYPED_ARRAY_SUPPORT=h(),!u.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function h(){try{const e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),e.foo()===42}catch{return!1}}Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}});function a(e){if(e>p)throw new RangeError('The value "'+e+'" is invalid for option "size"');const r=new Uint8Array(e);return Object.setPrototypeOf(r,u.prototype),r}function u(e,r,t){if(typeof e=="number"){if(typeof r=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(e)}return d(e,r,t)}u.poolSize=8192;function d(e,r,t){if(typeof e=="string")return b(e,r);if(ArrayBuffer.isView(e))return M(e);if(e==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(T(e,ArrayBuffer)||e&&T(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(T(e,SharedArrayBuffer)||e&&T(e.buffer,SharedArrayBuffer)))return j(e,r,t);if(typeof e=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(n!=null&&n!==e)return u.from(n,r,t);const o=Dr(e);if(o)return o;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]=="function")return u.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}u.from=function(e,r,t){return d(e,r,t)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array);function B(e){if(typeof e!="number")throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function E(e,r,t){return B(e),e<=0?a(e):r!==void 0?typeof t=="string"?a(e).fill(r,t):a(e).fill(r):a(e)}u.alloc=function(e,r,t){return E(e,r,t)};function _(e){return B(e),a(e<0?0:J(e)|0)}u.allocUnsafe=function(e){return _(e)},u.allocUnsafeSlow=function(e){return _(e)};function b(e,r){if((typeof r!="string"||r==="")&&(r="utf8"),!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);const t=ur(e,r)|0;let n=a(t);const o=n.write(e,r);return o!==t&&(n=n.slice(0,o)),n}function R(e){const r=e.length<0?0:J(e.length)|0,t=a(r);for(let n=0;n<r;n+=1)t[n]=e[n]&255;return t}function M(e){if(T(e,Uint8Array)){const r=new Uint8Array(e);return j(r.buffer,r.byteOffset,r.byteLength)}return R(e)}function j(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');let n;return r===void 0&&t===void 0?n=new Uint8Array(e):t===void 0?n=new Uint8Array(e,r):n=new Uint8Array(e,r,t),Object.setPrototypeOf(n,u.prototype),n}function Dr(e){if(u.isBuffer(e)){const r=J(e.length)|0,t=a(r);return t.length===0||e.copy(t,0,0,r),t}if(e.length!==void 0)return typeof e.length!="number"||Q(e.length)?a(0):R(e);if(e.type==="Buffer"&&Array.isArray(e.data))return R(e.data)}function J(e){if(e>=p)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+p.toString(16)+" bytes");return e|0}function Mr(e){return+e!=e&&(e=0),u.alloc(+e)}u.isBuffer=function(r){return r!=null&&r._isBuffer===!0&&r!==u.prototype},u.compare=function(r,t){if(T(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),T(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(r)||!u.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;let n=r.length,o=t.length;for(let f=0,s=Math.min(n,o);f<s;++f)if(r[f]!==t[f]){n=r[f],o=t[f];break}return n<o?-1:o<n?1:0},u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<r.length;++n)t+=r[n].length;const o=u.allocUnsafe(t);let f=0;for(n=0;n<r.length;++n){let s=r[n];if(T(s,Uint8Array))f+s.length>o.length?(u.isBuffer(s)||(s=u.from(s)),s.copy(o,f)):Uint8Array.prototype.set.call(o,s,f);else if(u.isBuffer(s))s.copy(o,f);else throw new TypeError('"list" argument must be an Array of Buffers');f+=s.length}return o};function ur(e,r){if(u.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||T(e,ArrayBuffer))return e.byteLength;if(typeof e!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const t=e.length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let o=!1;for(;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return mr(e).length;default:if(o)return n?-1:K(e).length;r=(""+r).toLowerCase(),o=!0}}u.byteLength=ur;function jr(e,r,t){let n=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,r>>>=0,t<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Xr(this,r,t);case"utf8":case"utf-8":return sr(this,r,t);case"ascii":return zr(this,r,t);case"latin1":case"binary":return Jr(this,r,t);case"base64":return Yr(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Kr(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}u.prototype._isBuffer=!0;function P(e,r,t){const n=e[r];e[r]=e[t],e[t]=n}u.prototype.swap16=function(){const r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<r;t+=2)P(this,t,t+1);return this},u.prototype.swap32=function(){const r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<r;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this},u.prototype.swap64=function(){const r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<r;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this},u.prototype.toString=function(){const r=this.length;return r===0?"":arguments.length===0?sr(this,0,r):jr.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(r){if(!u.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0},u.prototype.inspect=function(){let r="";const t=i.INSPECT_MAX_BYTES;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},y&&(u.prototype[y]=u.prototype.inspect),u.prototype.compare=function(r,t,n,o,f){if(T(r,Uint8Array)&&(r=u.from(r,r.offset,r.byteLength)),!u.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(t===void 0&&(t=0),n===void 0&&(n=r?r.length:0),o===void 0&&(o=0),f===void 0&&(f=this.length),t<0||n>r.length||o<0||f>this.length)throw new RangeError("out of range index");if(o>=f&&t>=n)return 0;if(o>=f)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,o>>>=0,f>>>=0,this===r)return 0;let s=f-o,w=n-t;const I=Math.min(s,w),g=this.slice(o,f),F=r.slice(t,n);for(let m=0;m<I;++m)if(g[m]!==F[m]){s=g[m],w=F[m];break}return s<w?-1:w<s?1:0};function cr(e,r,t,n,o){if(e.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Q(t)&&(t=o?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(o)return-1;t=e.length-1}else if(t<0)if(o)t=0;else return-1;if(typeof r=="string"&&(r=u.from(r,n)),u.isBuffer(r))return r.length===0?-1:fr(e,r,t,n,o);if(typeof r=="number")return r=r&255,typeof Uint8Array.prototype.indexOf=="function"?o?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):fr(e,[r],t,n,o);throw new TypeError("val must be string, number or Buffer")}function fr(e,r,t,n,o){let f=1,s=e.length,w=r.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(e.length<2||r.length<2)return-1;f=2,s/=2,w/=2,t/=2}function I(F,m){return f===1?F[m]:F.readUInt16BE(m*f)}let g;if(o){let F=-1;for(g=t;g<s;g++)if(I(e,g)===I(r,F===-1?0:g-F)){if(F===-1&&(F=g),g-F+1===w)return F*f}else F!==-1&&(g-=g-F),F=-1}else for(t+w>s&&(t=s-w),g=t;g>=0;g--){let F=!0;for(let m=0;m<w;m++)if(I(e,g+m)!==I(r,m)){F=!1;break}if(F)return g}return-1}u.prototype.includes=function(r,t,n){return this.indexOf(r,t,n)!==-1},u.prototype.indexOf=function(r,t,n){return cr(this,r,t,n,!0)},u.prototype.lastIndexOf=function(r,t,n){return cr(this,r,t,n,!1)};function qr(e,r,t,n){t=Number(t)||0;const o=e.length-t;n?(n=Number(n),n>o&&(n=o)):n=o;const f=r.length;n>f/2&&(n=f/2);let s;for(s=0;s<n;++s){const w=parseInt(r.substr(s*2,2),16);if(Q(w))return s;e[t+s]=w}return s}function Vr(e,r,t,n){return G(K(r,e.length-t),e,t,n)}function Gr(e,r,t,n){return G(tt(r),e,t,n)}function Wr(e,r,t,n){return G(mr(r),e,t,n)}function vr(e,r,t,n){return G(et(r,e.length-t),e,t,n)}u.prototype.write=function(r,t,n,o){if(t===void 0)o="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")o=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,o===void 0&&(o="utf8")):(o=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const f=this.length-t;if((n===void 0||n>f)&&(n=f),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let s=!1;for(;;)switch(o){case"hex":return qr(this,r,t,n);case"utf8":case"utf-8":return Vr(this,r,t,n);case"ascii":case"latin1":case"binary":return Gr(this,r,t,n);case"base64":return Wr(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vr(this,r,t,n);default:if(s)throw new TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),s=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Yr(e,r,t){return r===0&&t===e.length?c.fromByteArray(e):c.fromByteArray(e.slice(r,t))}function sr(e,r,t){t=Math.min(e.length,t);const n=[];let o=r;for(;o<t;){const f=e[o];let s=null,w=f>239?4:f>223?3:f>191?2:1;if(o+w<=t){let I,g,F,m;switch(w){case 1:f<128&&(s=f);break;case 2:I=e[o+1],(I&192)===128&&(m=(f&31)<<6|I&63,m>127&&(s=m));break;case 3:I=e[o+1],g=e[o+2],(I&192)===128&&(g&192)===128&&(m=(f&15)<<12|(I&63)<<6|g&63,m>2047&&(m<55296||m>57343)&&(s=m));break;case 4:I=e[o+1],g=e[o+2],F=e[o+3],(I&192)===128&&(g&192)===128&&(F&192)===128&&(m=(f&15)<<18|(I&63)<<12|(g&63)<<6|F&63,m>65535&&m<1114112&&(s=m))}}s===null?(s=65533,w=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|s&1023),n.push(s),o+=w}return Hr(n)}const lr=4096;function Hr(e){const r=e.length;if(r<=lr)return String.fromCharCode.apply(String,e);let t="",n=0;for(;n<r;)t+=String.fromCharCode.apply(String,e.slice(n,n+=lr));return t}function zr(e,r,t){let n="";t=Math.min(e.length,t);for(let o=r;o<t;++o)n+=String.fromCharCode(e[o]&127);return n}function Jr(e,r,t){let n="";t=Math.min(e.length,t);for(let o=r;o<t;++o)n+=String.fromCharCode(e[o]);return n}function Xr(e,r,t){const n=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);let o="";for(let f=r;f<t;++f)o+=nt[e[f]];return o}function Kr(e,r,t){const n=e.slice(r,t);let o="";for(let f=0;f<n.length-1;f+=2)o+=String.fromCharCode(n[f]+n[f+1]*256);return o}u.prototype.slice=function(r,t){const n=this.length;r=~~r,t=t===void 0?n:~~t,r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<r&&(t=r);const o=this.subarray(r,t);return Object.setPrototypeOf(o,u.prototype),o};function A(e,r,t){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}u.prototype.readUintLE=u.prototype.readUIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||A(r,t,this.length);let o=this[r],f=1,s=0;for(;++s<t&&(f*=256);)o+=this[r+s]*f;return o},u.prototype.readUintBE=u.prototype.readUIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||A(r,t,this.length);let o=this[r+--t],f=1;for(;t>0&&(f*=256);)o+=this[r+--t]*f;return o},u.prototype.readUint8=u.prototype.readUInt8=function(r,t){return r=r>>>0,t||A(r,1,this.length),this[r]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(r,t){return r=r>>>0,t||A(r,2,this.length),this[r]|this[r+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(r,t){return r=r>>>0,t||A(r,2,this.length),this[r]<<8|this[r+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(r,t){return r=r>>>0,t||A(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])},u.prototype.readBigUInt64LE=L(function(r){r=r>>>0,O(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&q(r,this.length-8);const o=t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24,f=this[++r]+this[++r]*2**8+this[++r]*2**16+n*2**24;return BigInt(o)+(BigInt(f)<<BigInt(32))}),u.prototype.readBigUInt64BE=L(function(r){r=r>>>0,O(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&q(r,this.length-8);const o=t*2**24+this[++r]*2**16+this[++r]*2**8+this[++r],f=this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n;return(BigInt(o)<<BigInt(32))+BigInt(f)}),u.prototype.readIntLE=function(r,t,n){r=r>>>0,t=t>>>0,n||A(r,t,this.length);let o=this[r],f=1,s=0;for(;++s<t&&(f*=256);)o+=this[r+s]*f;return f*=128,o>=f&&(o-=Math.pow(2,8*t)),o},u.prototype.readIntBE=function(r,t,n){r=r>>>0,t=t>>>0,n||A(r,t,this.length);let o=t,f=1,s=this[r+--o];for(;o>0&&(f*=256);)s+=this[r+--o]*f;return f*=128,s>=f&&(s-=Math.pow(2,8*t)),s},u.prototype.readInt8=function(r,t){return r=r>>>0,t||A(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]},u.prototype.readInt16LE=function(r,t){r=r>>>0,t||A(r,2,this.length);const n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n},u.prototype.readInt16BE=function(r,t){r=r>>>0,t||A(r,2,this.length);const n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n},u.prototype.readInt32LE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},u.prototype.readInt32BE=function(r,t){return r=r>>>0,t||A(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},u.prototype.readBigInt64LE=L(function(r){r=r>>>0,O(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&q(r,this.length-8);const o=this[r+4]+this[r+5]*2**8+this[r+6]*2**16+(n<<24);return(BigInt(o)<<BigInt(32))+BigInt(t+this[++r]*2**8+this[++r]*2**16+this[++r]*2**24)}),u.prototype.readBigInt64BE=L(function(r){r=r>>>0,O(r,"offset");const t=this[r],n=this[r+7];(t===void 0||n===void 0)&&q(r,this.length-8);const o=(t<<24)+this[++r]*2**16+this[++r]*2**8+this[++r];return(BigInt(o)<<BigInt(32))+BigInt(this[++r]*2**24+this[++r]*2**16+this[++r]*2**8+n)}),u.prototype.readFloatLE=function(r,t){return r=r>>>0,t||A(r,4,this.length),l.read(this,r,!0,23,4)},u.prototype.readFloatBE=function(r,t){return r=r>>>0,t||A(r,4,this.length),l.read(this,r,!1,23,4)},u.prototype.readDoubleLE=function(r,t){return r=r>>>0,t||A(r,8,this.length),l.read(this,r,!0,52,8)},u.prototype.readDoubleBE=function(r,t){return r=r>>>0,t||A(r,8,this.length),l.read(this,r,!1,52,8)};function S(e,r,t,n,o,f){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<f)throw new RangeError('"value" argument is out of bounds');if(t+n>e.length)throw new RangeError("Index out of range")}u.prototype.writeUintLE=u.prototype.writeUIntLE=function(r,t,n,o){if(r=+r,t=t>>>0,n=n>>>0,!o){const w=Math.pow(2,8*n)-1;S(this,r,t,n,w,0)}let f=1,s=0;for(this[t]=r&255;++s<n&&(f*=256);)this[t+s]=r/f&255;return t+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(r,t,n,o){if(r=+r,t=t>>>0,n=n>>>0,!o){const w=Math.pow(2,8*n)-1;S(this,r,t,n,w,0)}let f=n-1,s=1;for(this[t+f]=r&255;--f>=0&&(s*=256);)this[t+f]=r/s&255;return t+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,1,255,0),this[t]=r&255,t+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,2,65535,0),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=r&255,t+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4};function pr(e,r,t,n,o){xr(r,n,o,e,t,7);let f=Number(r&BigInt(4294967295));e[t++]=f,f=f>>8,e[t++]=f,f=f>>8,e[t++]=f,f=f>>8,e[t++]=f;let s=Number(r>>BigInt(32)&BigInt(4294967295));return e[t++]=s,s=s>>8,e[t++]=s,s=s>>8,e[t++]=s,s=s>>8,e[t++]=s,t}function hr(e,r,t,n,o){xr(r,n,o,e,t,7);let f=Number(r&BigInt(4294967295));e[t+7]=f,f=f>>8,e[t+6]=f,f=f>>8,e[t+5]=f,f=f>>8,e[t+4]=f;let s=Number(r>>BigInt(32)&BigInt(4294967295));return e[t+3]=s,s=s>>8,e[t+2]=s,s=s>>8,e[t+1]=s,s=s>>8,e[t]=s,t+8}u.prototype.writeBigUInt64LE=L(function(r,t=0){return pr(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeBigUInt64BE=L(function(r,t=0){return hr(this,r,t,BigInt(0),BigInt("0xffffffffffffffff"))}),u.prototype.writeIntLE=function(r,t,n,o){if(r=+r,t=t>>>0,!o){const I=Math.pow(2,8*n-1);S(this,r,t,n,I-1,-I)}let f=0,s=1,w=0;for(this[t]=r&255;++f<n&&(s*=256);)r<0&&w===0&&this[t+f-1]!==0&&(w=1),this[t+f]=(r/s>>0)-w&255;return t+n},u.prototype.writeIntBE=function(r,t,n,o){if(r=+r,t=t>>>0,!o){const I=Math.pow(2,8*n-1);S(this,r,t,n,I-1,-I)}let f=n-1,s=1,w=0;for(this[t+f]=r&255;--f>=0&&(s*=256);)r<0&&w===0&&this[t+f+1]!==0&&(w=1),this[t+f]=(r/s>>0)-w&255;return t+n},u.prototype.writeInt8=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=r&255,t+1},u.prototype.writeInt16LE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,2,32767,-32768),this[t]=r&255,this[t+1]=r>>>8,t+2},u.prototype.writeInt16BE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=r&255,t+2},u.prototype.writeInt32LE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,4,2147483647,-2147483648),this[t]=r&255,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},u.prototype.writeInt32BE=function(r,t,n){return r=+r,t=t>>>0,n||S(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=r&255,t+4},u.prototype.writeBigInt64LE=L(function(r,t=0){return pr(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),u.prototype.writeBigInt64BE=L(function(r,t=0){return hr(this,r,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ar(e,r,t,n,o,f){if(t+n>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function yr(e,r,t,n,o){return r=+r,t=t>>>0,o||ar(e,r,t,4),l.write(e,r,t,n,23,4),t+4}u.prototype.writeFloatLE=function(r,t,n){return yr(this,r,t,!0,n)},u.prototype.writeFloatBE=function(r,t,n){return yr(this,r,t,!1,n)};function dr(e,r,t,n,o){return r=+r,t=t>>>0,o||ar(e,r,t,8),l.write(e,r,t,n,52,8),t+8}u.prototype.writeDoubleLE=function(r,t,n){return dr(this,r,t,!0,n)},u.prototype.writeDoubleBE=function(r,t,n){return dr(this,r,t,!1,n)},u.prototype.copy=function(r,t,n,o){if(!u.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!o&&o!==0&&(o=this.length),t>=r.length&&(t=r.length),t||(t=0),o>0&&o<n&&(o=n),o===n||r.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),r.length-t<o-n&&(o=r.length-t+n);const f=o-n;return this===r&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,n,o):Uint8Array.prototype.set.call(r,this.subarray(n,o),t),f},u.prototype.fill=function(r,t,n,o){if(typeof r=="string"){if(typeof t=="string"?(o=t,t=0,n=this.length):typeof n=="string"&&(o=n,n=this.length),o!==void 0&&typeof o!="string")throw new TypeError("encoding must be a string");if(typeof o=="string"&&!u.isEncoding(o))throw new TypeError("Unknown encoding: "+o);if(r.length===1){const s=r.charCodeAt(0);(o==="utf8"&&s<128||o==="latin1")&&(r=s)}}else typeof r=="number"?r=r&255:typeof r=="boolean"&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,r||(r=0);let f;if(typeof r=="number")for(f=t;f<n;++f)this[f]=r;else{const s=u.isBuffer(r)?r:u.from(r,o),w=s.length;if(w===0)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(f=0;f<n-t;++f)this[f+t]=s[f%w]}return this};const $={};function X(e,r,t){$[e]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(o){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:o,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}X("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),X("ERR_INVALID_ARG_TYPE",function(e,r){return`The "${e}" argument must be of type number. Received type ${typeof r}`},TypeError),X("ERR_OUT_OF_RANGE",function(e,r,t){let n=`The value of "${e}" is out of range.`,o=t;return Number.isInteger(t)&&Math.abs(t)>2**32?o=wr(String(t)):typeof t=="bigint"&&(o=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(o=wr(o)),o+="n"),n+=` It must be ${r}. Received ${o}`,n},RangeError);function wr(e){let r="",t=e.length;const n=e[0]==="-"?1:0;for(;t>=n+4;t-=3)r=`_${e.slice(t-3,t)}${r}`;return`${e.slice(0,t)}${r}`}function Qr(e,r,t){O(r,"offset"),(e[r]===void 0||e[r+t]===void 0)&&q(r,e.length-(t+1))}function xr(e,r,t,n,o,f){if(e>t||e<r){const s=typeof r=="bigint"?"n":"";let w;throw r===0||r===BigInt(0)?w=`>= 0${s} and < 2${s} ** ${(f+1)*8}${s}`:w=`>= -(2${s} ** ${(f+1)*8-1}${s}) and < 2 ** ${(f+1)*8-1}${s}`,new $.ERR_OUT_OF_RANGE("value",w,e)}Qr(n,o,f)}function O(e,r){if(typeof e!="number")throw new $.ERR_INVALID_ARG_TYPE(r,"number",e)}function q(e,r,t){throw Math.floor(e)!==e?(O(e,t),new $.ERR_OUT_OF_RANGE("offset","an integer",e)):r<0?new $.ERR_BUFFER_OUT_OF_BOUNDS:new $.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${r}`,e)}const Zr=/[^+/0-9A-Za-z-_]/g;function rt(e){if(e=e.split("=")[0],e=e.trim().replace(Zr,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function K(e,r){r=r||1/0;let t;const n=e.length;let o=null;const f=[];for(let s=0;s<n;++s){if(t=e.charCodeAt(s),t>55295&&t<57344){if(!o){if(t>56319){(r-=3)>-1&&f.push(239,191,189);continue}else if(s+1===n){(r-=3)>-1&&f.push(239,191,189);continue}o=t;continue}if(t<56320){(r-=3)>-1&&f.push(239,191,189),o=t;continue}t=(o-55296<<10|t-56320)+65536}else o&&(r-=3)>-1&&f.push(239,191,189);if(o=null,t<128){if((r-=1)<0)break;f.push(t)}else if(t<2048){if((r-=2)<0)break;f.push(t>>6|192,t&63|128)}else if(t<65536){if((r-=3)<0)break;f.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((r-=4)<0)break;f.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return f}function tt(e){const r=[];for(let t=0;t<e.length;++t)r.push(e.charCodeAt(t)&255);return r}function et(e,r){let t,n,o;const f=[];for(let s=0;s<e.length&&!((r-=2)<0);++s)t=e.charCodeAt(s),n=t>>8,o=t%256,f.push(o),f.push(n);return f}function mr(e){return c.toByteArray(rt(e))}function G(e,r,t,n){let o;for(o=0;o<n&&!(o+t>=r.length||o>=e.length);++o)r[o+t]=e[o];return o}function T(e,r){return e instanceof r||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===r.name}function Q(e){return e!==e}const nt=function(){const e="0123456789abcdef",r=new Array(256);for(let t=0;t<16;++t){const n=t*16;for(let o=0;o<16;++o)r[n+o]=e[t]+e[o]}return r}();function L(e){return typeof BigInt>"u"?it:e}function it(){throw new Error("BigInt not supported")}})(Or);window.Buffer=Or.Buffer;typeof global>"u"&&(window.global=window);(async()=>{const i=await Br(()=>import("./client-Dw9dSbEx.js").then(l=>l.c),[]),c=await Br(()=>import("./App-BvShbQHf.js"),[]);i.createRoot(document.getElementById("root")).render(Ct.jsx(c.default,{}))})();export{jt as R,z as b,Dt as c,Mt as g,or as i,Ct as j,Pr as r};
