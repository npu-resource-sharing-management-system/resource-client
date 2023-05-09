import{u as L,w as v,r as O,o as P,c as I,a as A,b as R,d as T,C as E,e as D,f as V,g as b,s as k,h as w,i as N}from"./.pnpm-cbfa755c.js";let _,C=(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();let u,d,h,f,s,n,g,c;_=(r,o)=>{const a=r.__vccOpts||r;for(const[t,e]of o)a[t]=e;return a},u={__name:"App",setup(r){const o=L();return v(o,a=>{console.log(a),a?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),(a,t)=>{const e=O("router-view"),i=E;return P(),I(i,{id:"config-provider",class:"config-provider",theme:T(o)?"dark":"light"},{default:A(()=>[R(e)]),_:1},8,["theme"])}}},d=_(u,[["__scopeId","data-v-861e8314"]]),h="modulepreload",f=function(r,o){return new URL(r,o).href},s={},n=function(r,o,a){if(!o||o.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=f(e,a),e in s)return;s[e]=!0;const i=e.endsWith(".css"),y=i?'[rel="stylesheet"]':"";if(a)for(let p=t.length-1;p>=0;p--){const l=t[p];if(l.href===e&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":h,i||(m.as="script",m.crossOrigin=""),m.href=e,document.head.appendChild(m),i)return new Promise((p,l)=>{m.addEventListener("load",p),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},g=[{path:"/",name:"default",redirect:"/login"},{path:"/login",name:"login",component:()=>n(()=>import("./UserLogin-17b31e38.js"),["./UserLogin-17b31e38.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./index-fe957e2a.js","./validatorUtil-14f1ba53.js","./UserLogin-8b835927.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u767B\u5F55"}},{path:"/register",name:"register",component:()=>n(()=>import("./UserRegister-5bc07194.js"),["./UserRegister-5bc07194.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./validatorUtil-14f1ba53.js","./index-fe957e2a.js","./UserRegister-ba8b2c32.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6CE8\u518C"}},{path:"/privacy",name:"privacy",component:()=>n(()=>import("./PrivacyPolicy-f5a85867.js"),["./PrivacyPolicy-f5a85867.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./PrivacyPolicy-7721c626.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u9690\u79C1\u653F\u7B56"}},{path:"/oauth/alipay/success",name:"oauth-success",component:()=>n(()=>import("./OAuthSuccess-343c0791.js"),["./OAuthSuccess-343c0791.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./OAuthSuccess-3264717e.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u6210\u529F"}},{path:"/oauth/alipay/failure",name:"oauth-failure",component:()=>n(()=>import("./OAuthFailure-661c0020.js"),["./OAuthFailure-661c0020.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u5931\u8D25"}},{path:"/main/home",name:"main-home",component:()=>n(()=>import("./MainPage-9ae93a18.js"),["./MainPage-9ae93a18.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./index-fe957e2a.js"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E3B\u9875"},redirect:"/main/carpooling",children:[{path:"/main/carpooling",name:"main-carpooling",component:()=>n(()=>import("./MyCarpooling-ec933610.js"),["./MyCarpooling-ec933610.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u62FC\u8F66\u5927\u5385"}},{path:"/main/passenger",name:"main-passenger-main",component:()=>n(()=>import("./PassengerMain-2298c253.js"),["./PassengerMain-2298c253.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E58\u5BA2\u4E3B\u9875"},redirect:"/main/passenger/passenger-home",children:[{path:"/main/passenger/passenger-home",name:"main-passenger-home",component:()=>n(()=>import("./PassengerHome-bc6ba696.js"),["./PassengerHome-bc6ba696.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url)}]},{path:"/main/driver",name:"main-driver-main",component:()=>n(()=>import("./DriverMain-4c209adc.js"),["./DriverMain-4c209adc.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u53F8\u673A\u4E3B\u9875"},redirect:"/main/driver/driver-home",children:[{path:"/main/driver/driver-home",name:"main-driver-home",component:()=>n(()=>import("./DriverHome-446eb81a.js"),["./DriverHome-446eb81a.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url)}]},{path:"/main/my",name:"main-my-main",component:()=>n(()=>import("./MyMain-bec57515.js"),["./MyMain-bec57515.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6211\u7684\u4E3B\u9875"},redirect:"/main/my/my-home",children:[{path:"/main/my/my-home",name:"main-my-home",component:()=>n(()=>import("./MyHome-b71b0e9b.js"),["./MyHome-b71b0e9b.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css","./index-fe957e2a.js"],import.meta.url)},{path:"/main/my/my-chats",name:"main-my-chats",component:()=>n(()=>import("./MyChats-376b49c8.js"),["./MyChats-376b49c8.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url)},{path:"/main/my/revise-info",name:"main-revise-info",component:()=>n(()=>import("./ReviseInfo-56d1242d.js"),["./ReviseInfo-56d1242d.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url)},{path:"/main/my/handle-alipay",name:"main-handle-alipay",component:()=>n(()=>import("./HandleAlipay-287a5f50.js"),["./HandleAlipay-287a5f50.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url)}]}]},{path:"/404",name:"NotFound",component:()=>n(()=>import("./NotFound-9e45a9b6.js"),["./NotFound-9e45a9b6.js",".pnpm-cbfa755c.js",".pnpm-fc99e033.css"],import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],c=D({history:V(),routes:g}),c.beforeEach((r,o,a)=>{if(r.meta.title&&(document.title=r.meta.title),r.path==="/login"||r.path==="/register"||r.path==="/oauth/alipay/success"||r.path==="/oauth/alipay/failure"||r.path==="/privacy")return a();if(!b.get("token"))return k({type:"danger",message:"\u8BF7\u5148\u767B\u5F55"}),a("/login");a()}),w(d).use(N()).use(c).use(E).mount("#app")})();export{_,C as __tla};
