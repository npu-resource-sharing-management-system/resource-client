import{k as p,o,m as d,b as _,a as k,P as y,n as r,L as g,c as s,d as a,H as h,p as v,g as w}from"./.pnpm-64d71ea9.js";import{_ as f}from"./index-73442fa0.js";const C=r("h3",null,"使用van-row做的用户信息card",-1),x=r("h2",null,"用户信息在pinia里",-1),$={__name:"MyHome",setup(B){const t=p(),l=async()=>{v({duration:3,forbidClick:!0,message:"正在退出登录"});try{c(),await f.post("/api/auth/loginuser/logout")}catch{}w.remove("token"),await t.push("/login")},c=()=>{window.sessionStorage.removeItem("carpoolingCache"),window.sessionStorage.removeItem("currentUser")};return(m,e)=>{const n=h,u=g;return o(),d(y,null,[C,x,_(u,null,{default:k(()=>[(o(),s(n,{key:1,title:"我的聊天",onClick:e[0]||(e[0]=i=>a(t).push("/main/my/my-chats"))})),(o(),s(n,{key:2,title:"个人信息维护",onClick:e[1]||(e[1]=i=>a(t).push("/main/my/revise-info"))})),(o(),s(n,{key:3,title:"支付宝与解绑",onClick:e[2]||(e[2]=i=>a(t).push("/main/my/handle-alipay"))})),(o(),s(n,{key:4,title:"退出登录",onClick:l}))]),_:1})],64)}}};export{$ as default};