import{M as _,o as e,m as u,b as m,a as i,P as d,n as t,Q as p,d as a,c as n,x as r,R as h}from"./.pnpm-64d71ea9.js";import{u as f}from"./index-2e271261.js";const b=t("h1",null,"我的行程",-1),k=t("h2",null,"展示司机的所有行程列表",-1),x=t("h2",null,"或者展示乘客的所有订单列表",-1),N={__name:"MyCarpooling",setup(B){const c=f(),{currentUser:s}=_(c);return(g,v)=>{const o=h,l=p;return e(),u(d,null,[m(l,null,{default:i(()=>[a(s).user.isDeleted===0?(e(),n(o,{key:0,title:"乘客-订单",name:"order"})):r("",!0),a(s).driver.isDeleted===0?(e(),n(o,{key:1,title:"司机-行程",name:"carpooling"})):r("",!0)]),_:1}),b,k,x],64)}}};export{N as default};
