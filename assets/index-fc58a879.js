import{u as L,o as O,c as P,w as v,a as k,b as A,r as I,C as y,d as b,e as w,f as R,s as T,g as V,h as D}from"./.pnpm-d319e11e.js";let p,N=(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();let d,f,h,_,u,s,g,m;p=(r,n)=>{const o=r.__vccOpts||r;for(const[t,e]of n)o[t]=e;return o},d={__name:"App",setup(r){const n=L();return(o,t)=>{const e=I("router-view"),a=y;return O(),P(a,{class:"config-provider",theme:A(n)?"dark":"light"},{default:v(()=>[k(e)]),_:1},8,["theme"])}}},f=p(d,[["__scopeId","data-v-32ac731c"]]),h="modulepreload",_=function(r,n){return new URL(r,n).href},u={},s=function(r,n,o){if(!n||n.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(n.map(e=>{if(e=_(e,o),e in u)return;u[e]=!0;const a=e.endsWith(".css"),E=a?'[rel="stylesheet"]':"";if(o)for(let l=t.length-1;l>=0;l--){const c=t[l];if(c.href===e&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":h,a||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),a)return new Promise((l,c)=>{i.addEventListener("load",l),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},g=[{path:"/",name:"default",redirect:"/login"},{path:"/login",name:"login",component:()=>s(()=>import("./UserLogin-70bf4921.js"),["./UserLogin-70bf4921.js",".pnpm-d319e11e.js",".pnpm-96288cbb.css","./validatorUtil-8c6b39c0.js","./UserLogin-4a5e5be8.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u767B\u5F55"}},{path:"/register",name:"register",component:()=>s(()=>import("./UserRegister-d76576d1.js"),["./UserRegister-d76576d1.js",".pnpm-d319e11e.js",".pnpm-96288cbb.css","./validatorUtil-8c6b39c0.js","./UserRegister-31275a5c.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6CE8\u518C"}},{path:"/oauth/alipay/success",name:"oauth-success",component:()=>s(()=>import("./OAuthSuccess-773abc74.js"),["./OAuthSuccess-773abc74.js",".pnpm-d319e11e.js",".pnpm-96288cbb.css","./OAuthSuccess-bab16393.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u6210\u529F"}},{path:"/oauth/alipay/failure",name:"oauth-failure",component:()=>s(()=>import("./OAuthFailure-0a3c0cf5.js"),["./OAuthFailure-0a3c0cf5.js",".pnpm-d319e11e.js",".pnpm-96288cbb.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u5931\u8D25"}},{path:"/main",name:"main",component:()=>s(()=>import("./MainPage-c859bb64.js"),["./MainPage-c859bb64.js",".pnpm-d319e11e.js",".pnpm-96288cbb.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E3B\u9875"}}],m=b({history:w(),routes:g}),m.beforeEach((r,n,o)=>{if(r.meta.title&&(document.title=r.meta.title),r.path==="/login"||r.path==="/register"||r.path==="/oauth/alipay/success"||r.path==="/oauth/alipay/failure")return o();if(!R.get("token"))return T({type:"danger",message:"\u8BF7\u5148\u767B\u5F55"}),o("/login");o()}),V(f).use(D()).use(m).use(y).mount("#app")})();export{p as _,N as __tla};
