import{n as h,s as g,p as w,k as f,K as b,H as k,o as n,c as l,a as r,d as p,q as m,v as d,b as _,T as N,M as T,j as x,w as V,r as B,l as U,N as C}from"./.pnpm-1a6af7b3.js";import{u as $}from"./index-56df1392.js";import{_ as M}from"./index-6006b37a.js";const R=async()=>{h({duration:0,forbidClick:!0,message:"正在加载您的个人信息"});try{const{data:a}=await M.get("/api/user/info");return a}catch(a){g({type:"danger",message:`首页初始化失败,${a.message}`})}finally{w()}},D={__name:"NavBar",setup(a){const t=f(0),c=$(),{currentUser:s}=b(c),i=async()=>{const o=await R();o.code===2e3?c.$patch(e=>{e.currentUser=o.result.result}):g({type:"danger",message:`首页初始化失败,${o.msg},请刷新页面重试`})};return console.log(s),k(async()=>{await i()}),(o,e)=>{const u=N,v=T;return n(),l(v,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=y=>t.value=y)},{default:r(()=>[p(s).user.isDeleted===0?(n(),l(u,{key:0,icon:"shop-o",to:"/main/passenger"},{default:r(()=>[m(" 我要拼车 ")]),_:1})):d("",!0),p(s).driver.isDeleted===0?(n(),l(u,{key:1,icon:"logistics",to:"/main/driver"},{default:r(()=>[m(" 我要发车 ")]),_:1})):d("",!0),_(u,{icon:"todo-list-o",to:"/main/carpooling"},{default:r(()=>[m("我的行程")]),_:1}),_(u,{icon:"user-o",to:"/main/my"},{default:r(()=>[m("我的")]),_:1})]),_:1},8,["modelValue"])}}},S={__name:"MainPage",setup(a){const t=f(!0),c=x(),s=["/main/carpooling","/main/passenger","/main/passenger/passenger-home","/main/driver","/main/driver/driver-home","/main/my","/main/my/my-home"];return V(()=>c.currentRoute.value.path,i=>{t.value=s.includes(i)}),(i,o)=>{const e=B("router-view");return n(),U(C,null,[_(e),t.value?(n(),l(D,{key:0})):d("",!0)],64)}}};export{S as default};
