import{k as a,K as c,s as o,g as n,o as u,m as _,y as r,z as p,n as d}from"./.pnpm-64d71ea9.js";import{_ as i}from"./index-37c31092.js";const m=e=>(r("data-v-726fae44"),e=e(),p(),e),h={class:"welcome-banner"},l=m(()=>d("h1",null,"正在处理登录信息",-1)),f=[l],y={__name:"OAuthSuccess",setup(e){const s=a();return c(()=>{const t=s.currentRoute.value.query.token;t===void 0?(o({type:"danger",message:"登录失败,3s后跳转回登录页面",duration:3e3}),setTimeout(()=>{s.push("/login")},3e3)):(n.set("token",t),o({type:"success",message:"登录成功,3s后执行跳转",duration:3e3}),setTimeout(()=>{s.push("/main/home")},3e3))}),(t,g)=>(u(),_("div",h,f))}},S=i(y,[["__scopeId","data-v-726fae44"]]);export{S as default};