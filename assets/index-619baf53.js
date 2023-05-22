import{u as I,w as v,o as O,r as P,a as A,c as R,b as T,d as D,e as V,C as y,f as b,g as k,h as w,s as C,i as B,j as N,k as S}from"./.pnpm-33e9fd8e.js";let _,c,$=(async()=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();let u,d,h,E,s,e,g,f;_=(a,n)=>{const o=a.__vccOpts||a;for(const[r,t]of n)o[r]=t;return o},u={__name:"App",setup(a){const n=I();return v(n,o=>{console.log(o),o?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),O(()=>{console.log(n.value),n.value?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),(o,r)=>{const t=P("router-view"),i=y;return A(),R(i,{id:"config-provider",class:"config-provider",theme:V(n)?"dark":"light"},{default:T(()=>[D(t)]),_:1},8,["theme"])}}},d=_(u,[["__scopeId","data-v-983ca336"]]),h="modulepreload",E=function(a,n){return new URL(a,n).href},s={},e=function(a,n,o){if(!n||n.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=E(t,o),t in s)return;s[t]=!0;const i=t.endsWith(".css"),L=i?'[rel="stylesheet"]':"";if(o)for(let p=r.length-1;p>=0;p--){const l=r[p];if(l.href===t&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${L}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":h,i||(m.as="script",m.crossOrigin=""),m.href=t,document.head.appendChild(m),i)return new Promise((p,l)=>{m.addEventListener("load",p),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>a())},g=[{path:"/",name:"default",redirect:"/login"},{path:"/login",name:"login",component:()=>e(()=>import("./UserLogin-54dd954b.js"),["./UserLogin-54dd954b.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-85061a81.js","./jsencrypt-443c2eff.js","./validatorUtil-fa8d24ca.js","./UserLogin-01483b03.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u767B\u5F55"}},{path:"/register",name:"register",component:()=>e(()=>import("./UserRegister-ac2a8ad9.js"),["./UserRegister-ac2a8ad9.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./validatorUtil-fa8d24ca.js","./index-85061a81.js","./ocrUtil-7c716f07.js","./jsencrypt-443c2eff.js","./UserRegister-3a881eb5.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6CE8\u518C"}},{path:"/privacy",name:"privacy",component:()=>e(()=>import("./PrivacyPolicy-492efc84.js"),["./PrivacyPolicy-492efc84.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./PrivacyPolicy-35888c71.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u9690\u79C1\u653F\u7B56"}},{path:"/oauth/alipay/success",name:"oauth-success",component:()=>e(()=>import("./OAuthSuccess-d2d4c083.js"),["./OAuthSuccess-d2d4c083.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./OAuthSuccess-5186863b.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u6210\u529F"}},{path:"/oauth/alipay/failure",name:"oauth-failure",component:()=>e(()=>import("./OAuthFailure-79184945.js"),["./OAuthFailure-79184945.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./OAuthFailure-47e7bd30.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u5931\u8D25"}},{path:"/main/home",name:"main-home",component:()=>e(()=>import("./MainPage-2b50f23c.js"),["./MainPage-2b50f23c.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-e4285400.js","./index-4c19bd2a.js","./index-85061a81.js","./MainPage-a2537600.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E3B\u9875"},redirect:"/main/carpooling",children:[{path:"/main/carpooling",name:"main-carpooling",component:()=>e(()=>import("./CarpoolingMain-89c1cd30.js"),["./CarpoolingMain-89c1cd30.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-e4285400.js"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u62FC\u8F66\u5927\u5385"},children:[{path:"passenger-order",name:"main-carpooling-passenger-order",component:()=>e(()=>import("./PassengerOrder-bf098c9a.js"),["./PassengerOrder-bf098c9a.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-298f05d4.js","./index-85061a81.js","./PassengerOrder-88fbdf3d.css"],import.meta.url)},{path:"driver-carpooling",name:"main-carpooling-driver-carpooling",component:()=>e(()=>import("./DriverCarpooling-57f6faec.js"),["./DriverCarpooling-57f6faec.js","./index-298f05d4.js","./index-85061a81.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css"],import.meta.url)},{path:"order-detail",name:"main-carpooling-order-detail",component:()=>e(()=>import("./OrderDetail-9a2d3ade.js"),["./OrderDetail-9a2d3ade.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-298f05d4.js","./index-85061a81.js","./OrderDetail-3b0255e8.css"],import.meta.url)}]},{path:"/main/passenger",name:"main-passenger-main",component:()=>e(()=>import("./PassengerMain-637486fa.js"),["./PassengerMain-637486fa.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E58\u5BA2\u4E3B\u9875"},redirect:"/main/passenger/passenger-home",children:[{path:"passenger-home",name:"main-passenger-home",component:()=>e(()=>import("./PassengerHome-3f7c1483.js"),["./PassengerHome-3f7c1483.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-298f05d4.js","./index-85061a81.js","./PassengerHome-f78d3b8c.css"],import.meta.url)},{path:"carpooling-detail",name:"main-carpooling-detail",component:()=>e(()=>import("./CarpoolingDetail-d935fe46.js"),["./CarpoolingDetail-d935fe46.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-298f05d4.js","./index-85061a81.js","./index-e4285400.js","./CarpoolingDetail-d042af83.css"],import.meta.url)}]},{path:"/main/driver",name:"main-driver-main",component:()=>e(()=>import("./DriverMain-ea17b345.js"),["./DriverMain-ea17b345.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u53F8\u673A\u4E3B\u9875"},redirect:"/main/driver/driver-home",children:[{path:"driver-home",name:"main-driver-home",component:()=>e(()=>import("./DriverHome-8e2d9ac4.js"),["./DriverHome-8e2d9ac4.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-e4285400.js","./index-85061a81.js","./DriverHome-f0320eac.css"],import.meta.url)},{path:"preview-map",name:"main-preview-map",component:()=>e(()=>import("./PreviewMap-5e71eae8.js"),["./PreviewMap-5e71eae8.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./PreviewMap-0b92b63c.css"],import.meta.url)},{path:"fee-policy",name:"main-fee-policy",component:()=>e(()=>import("./FeePolicy-765a0ceb.js"),["./FeePolicy-765a0ceb.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./FeePolicy-fed6f534.css"],import.meta.url)}]},{path:"/main/my",name:"main-my-main",component:()=>e(()=>import("./MyMain-57f262d4.js"),["./MyMain-57f262d4.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6211\u7684\u4E3B\u9875"},redirect:"/main/my/my-home",children:[{path:"my-home",name:"main-my-home",component:()=>e(()=>import("./MyHome-ecfdc906.js"),["./MyHome-ecfdc906.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-e4285400.js","./index-957f215d.js","./index-85061a81.js","./MyHome-6589555d.css"],import.meta.url)},{path:"my-chats/list",name:"main-my-chats-list",component:()=>e(()=>import("./ChatsList-d85bdec9.js"),["./ChatsList-d85bdec9.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-957f215d.js","./index-85061a81.js","./ChatsList-3ffb019d.css"],import.meta.url)},{path:"my-chats/detail",name:"main-my-chats-detail",component:()=>e(()=>import("./ChatDetail-51a76900.js"),["./ChatDetail-51a76900.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./index-957f215d.js","./index-85061a81.js","./index-e4285400.js","./ChatDetail-2faa132b.css"],import.meta.url)},{path:"revise-info",name:"main-revise-info",component:()=>e(()=>import("./ReviseInfo-fb11a77d.js").then(async a=>(await a.__tla,a)),["./ReviseInfo-fb11a77d.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./validatorUtil-fa8d24ca.js","./index-85061a81.js","./ocrUtil-7c716f07.js","./index-e4285400.js","./index-4c19bd2a.js","./ReviseInfo-c9f57e8d.css"],import.meta.url)},{path:"bind-alipay/success",name:"main-handle-alipay",component:()=>e(()=>import("./BindAlipaySuccess-69426eb7.js"),["./BindAlipaySuccess-69426eb7.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./BindAlipaySuccess-8779bc45.css"],import.meta.url)},{path:"bind-alipay/failure",name:"main-handle-alipay-failure",component:()=>e(()=>import("./BindAlipayFailure-80b6e819.js"),["./BindAlipayFailure-80b6e819.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css","./BindAlipayFailure-9bed01bf.css"],import.meta.url)}]}]},{path:"/404",name:"NotFound",component:()=>e(()=>import("./NotFound-e2a236dc.js"),["./NotFound-e2a236dc.js",".pnpm-33e9fd8e.js",".pnpm-79eb3f6a.css"],import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],c=b({history:k(),routes:g}),f=["/login","/register","/oauth/alipay/success","/oauth/alipay/failure","/privacy","/main/my/bind-alipay/success","/main/my/bind-alipay/failure","/404"],c.beforeEach((a,n,o)=>{if(a.meta.title&&(document.title=a.meta.title),f.includes(a.path))return o();if(!w.get("token"))return C({type:"danger",message:"\u8BF7\u5148\u767B\u5F55"}),o("/login");o()}),B(d).use(N().use(S)).use(c).use(y).mount("#app")})();export{_,$ as __tla,c as r};
