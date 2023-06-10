import{u as L,w as I,o as O,r as P,a as A,c as R,b as T,d as D,e as V,C as y,f as b,g as k,h as w,s as C,i as B,j as N,k as S}from"./.pnpm-ba0d9b51.js";let s,c,$=(async()=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();let u,d,h,g,_,e,E,f;s=(a,n)=>{const o=a.__vccOpts||a;for(const[r,t]of n)o[r]=t;return o},u={__name:"App",setup(a){const n=L();return I(n,o=>{console.log(o),o?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),O(()=>{console.log(n.value),n.value?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),(o,r)=>{const t=P("router-view"),i=y;return A(),R(i,{id:"config-provider",class:"config-provider",theme:V(n)?"dark":"light"},{default:T(()=>[D(t)]),_:1},8,["theme"])}}},d=s(u,[["__scopeId","data-v-60512b25"]]),h="modulepreload",g=function(a,n){return new URL(a,n).href},_={},e=function(a,n,o){if(!n||n.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=g(t,o),t in _)return;_[t]=!0;const i=t.endsWith(".css"),v=i?'[rel="stylesheet"]':"";if(o)for(let p=r.length-1;p>=0;p--){const l=r[p];if(l.href===t&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${v}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":h,i||(m.as="script",m.crossOrigin=""),m.href=t,document.head.appendChild(m),i)return new Promise((p,l)=>{m.addEventListener("load",p),m.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>a())},E=[{path:"/",name:"default",redirect:"/login"},{path:"/login",name:"login",component:()=>e(()=>import("./UserLogin-1786307c.js"),["./UserLogin-1786307c.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-efafad75.js","./jsencrypt-2b7cbb5d.js","./validatorUtil-fa8d24ca.js","./UserLogin-01483b03.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u767B\u5F55"}},{path:"/register",name:"register",component:()=>e(()=>import("./UserRegister-45fc4e22.js"),["./UserRegister-45fc4e22.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./validatorUtil-fa8d24ca.js","./index-efafad75.js","./ocrUtil-55ca91d6.js","./jsencrypt-2b7cbb5d.js","./UserRegister-e1081f0c.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6CE8\u518C"}},{path:"/privacy",name:"privacy",component:()=>e(()=>import("./PrivacyPolicy-1baf60e7.js"),["./PrivacyPolicy-1baf60e7.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./PrivacyPolicy-35888c71.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u9690\u79C1\u653F\u7B56"}},{path:"/oauth/alipay/success",name:"oauth-success",component:()=>e(()=>import("./OAuthSuccess-1e220292.js"),["./OAuthSuccess-1e220292.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./OAuthSuccess-5186863b.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u6210\u529F"}},{path:"/oauth/alipay/failure",name:"oauth-failure",component:()=>e(()=>import("./OAuthFailure-305b9030.js"),["./OAuthFailure-305b9030.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./OAuthFailure-47e7bd30.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u5931\u8D25"}},{path:"/main/home",name:"main-home",component:()=>e(()=>import("./MainPage-c25d4e6a.js"),["./MainPage-c25d4e6a.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-7f8e3267.js","./index-1d6f4369.js","./index-efafad75.js","./MainPage-0b38a036.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E3B\u9875"},redirect:"/main/carpooling/home",children:[{path:"/main/carpooling/home",name:"main-carpooling",component:()=>e(()=>import("./CarpoolingMain-3bcd1a77.js"),["./CarpoolingMain-3bcd1a77.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-7f8e3267.js"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u62FC\u8F66\u5927\u5385"},children:[{path:"/main/carpooling/passenger-order",name:"main-carpooling-passenger-order",component:()=>e(()=>import("./PassengerOrder-f9b9cb21.js"),["./PassengerOrder-f9b9cb21.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-ee434d00.js","./index-efafad75.js","./PassengerOrder-8a660155.css"],import.meta.url)},{path:"/main/carpooling/driver-carpooling",name:"main-carpooling-driver-carpooling",component:()=>e(()=>import("./DriverCarpooling-b9f0b462.js"),["./DriverCarpooling-b9f0b462.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-74bd0f2c.js","./index-efafad75.js","./DriverCarpooling-664d2a10.css"],import.meta.url)},{path:"/main/carpooling/order-detail",name:"main-carpooling-order-detail",component:()=>e(()=>import("./OrderDetail-a840b583.js"),["./OrderDetail-a840b583.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-ee434d00.js","./index-efafad75.js","./OrderDetail-a173a185.css"],import.meta.url)},{path:"/main/carpooling/carpooling-detail-driver",name:"main-carpooling-detail-driver",component:()=>e(()=>import("./CarpoolingDetail-5767accb.js"),["./CarpoolingDetail-5767accb.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-74bd0f2c.js","./index-efafad75.js","./index-7f8e3267.js","./CarpoolingDetail-8fe75a63.css"],import.meta.url)},{path:"/main/carpooling/carpooling-reserve-list",name:"main-carpooling-reserve-list",component:()=>e(()=>import("./ReserveList-c906a1fe.js"),["./ReserveList-c906a1fe.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-74bd0f2c.js","./index-efafad75.js","./ReserveList-ef68c780.css"],import.meta.url)}]},{path:"/main/passenger",name:"main-passenger-main",component:()=>e(()=>import("./PassengerMain-6f7d3a42.js"),["./PassengerMain-6f7d3a42.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E58\u5BA2\u4E3B\u9875"},redirect:"/main/passenger/passenger-home",children:[{path:"passenger-home",name:"main-passenger-home",component:()=>e(()=>import("./PassengerHome-7e3b943a.js"),["./PassengerHome-7e3b943a.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-ee434d00.js","./index-efafad75.js","./PassengerHome-c9bcf5a6.css"],import.meta.url)},{path:"carpooling-detail",name:"main-carpooling-detail",component:()=>e(()=>import("./CarpoolingDetail-fdc858f0.js"),["./CarpoolingDetail-fdc858f0.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-ee434d00.js","./index-efafad75.js","./index-7f8e3267.js","./CarpoolingDetail-e14b2762.css"],import.meta.url)}]},{path:"/main/driver",name:"main-driver-main",component:()=>e(()=>import("./DriverMain-701512df.js"),["./DriverMain-701512df.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u53F8\u673A\u4E3B\u9875"},redirect:"/main/driver/driver-home",children:[{path:"driver-home",name:"main-driver-home",component:()=>e(()=>import("./DriverHome-0da89be4.js"),["./DriverHome-0da89be4.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-7f8e3267.js","./index-74bd0f2c.js","./index-efafad75.js","./DriverHome-e9b0f655.css"],import.meta.url)},{path:"preview-map",name:"main-preview-map",component:()=>e(()=>import("./PreviewMap-0e96df02.js"),["./PreviewMap-0e96df02.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./PreviewMap-171a76c0.css"],import.meta.url)},{path:"fee-policy",name:"main-fee-policy",component:()=>e(()=>import("./FeePolicy-1f7781ac.js"),["./FeePolicy-1f7781ac.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./FeePolicy-fed6f534.css"],import.meta.url)}]},{path:"/main/my",name:"main-my-main",component:()=>e(()=>import("./MyMain-0512b39f.js"),["./MyMain-0512b39f.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6211\u7684\u4E3B\u9875"},redirect:"/main/my/my-home",children:[{path:"my-home",name:"main-my-home",component:()=>e(()=>import("./MyHome-526dfb77.js"),["./MyHome-526dfb77.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-7f8e3267.js","./index-a5283b64.js","./index-efafad75.js","./MyHome-1b07859e.css"],import.meta.url)},{path:"my-chats/list",name:"main-my-chats-list",component:()=>e(()=>import("./ChatsList-e5b5c060.js"),["./ChatsList-e5b5c060.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-a5283b64.js","./index-efafad75.js","./ChatsList-645c9ecb.css"],import.meta.url)},{path:"my-chats/detail",name:"main-my-chats-detail",component:()=>e(()=>import("./ChatDetail-d30c3332.js"),["./ChatDetail-d30c3332.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-a5283b64.js","./index-efafad75.js","./index-7f8e3267.js","./ChatDetail-b11093d8.css"],import.meta.url)},{path:"revise-info",name:"main-revise-info",component:()=>e(()=>import("./ReviseInfo-bd45c068.js").then(async a=>(await a.__tla,a)),["./ReviseInfo-bd45c068.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./validatorUtil-fa8d24ca.js","./index-efafad75.js","./ocrUtil-55ca91d6.js","./index-7f8e3267.js","./index-1d6f4369.js","./ReviseInfo-e5be9fd6.css"],import.meta.url)},{path:"bind-alipay/success",name:"main-handle-alipay",component:()=>e(()=>import("./BindAlipaySuccess-70c1c079.js"),["./BindAlipaySuccess-70c1c079.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./index-1d6f4369.js","./index-efafad75.js","./index-7f8e3267.js","./BindAlipaySuccess-eb788943.css"],import.meta.url)},{path:"bind-alipay/failure",name:"main-handle-alipay-failure",component:()=>e(()=>import("./BindAlipayFailure-eff5c3bd.js"),["./BindAlipayFailure-eff5c3bd.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css","./BindAlipayFailure-108b0c38.css"],import.meta.url)}]}]},{path:"/404",name:"NotFound",component:()=>e(()=>import("./NotFound-94e47967.js"),["./NotFound-94e47967.js",".pnpm-ba0d9b51.js",".pnpm-dfb6d4c3.css"],import.meta.url),meta:{title:"\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"}},{path:"/:catchAll(.*)",redirect:"/404"}],c=b({history:k(),routes:E}),f=["/login","/register","/oauth/alipay/success","/oauth/alipay/failure","/privacy","/main/my/bind-alipay/success","/main/my/bind-alipay/failure","/404"],c.beforeEach((a,n,o)=>{if(a.meta.title&&(document.title=a.meta.title),f.includes(a.path))return o();if(!w.get("token"))return C({type:"danger",message:"\u8BF7\u5148\u767B\u5F55"}),o("/login");o()}),B(d).use(N().use(S)).use(c).use(y).mount("#app")})();export{s as _,$ as __tla,c as r};
