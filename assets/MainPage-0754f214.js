import{k as N,l as f,H as x,m as T,o as p,c as g,a as v,v as _,y,b as w,s as S,T as $,Q as B,w as C,S as V,r as E,n as I,z as P,A as R,p as U}from"./.pnpm-f0908098.js";import{u as D,a as M}from"./index-f4a27562.js";import{g as O}from"./index-23c0c468.js";import{_ as z}from"./index-25e647bd.js";import"./index-46d97138.js";const A={__name:"NavBar",setup(l){const o=N(),t=f("carpooling"),n=D(),{currentUser:a}=x(n),r=M(),{nav:u}=x(r),c=async()=>{const i=await O();i.code===2e3?n.$patch(e=>{e.currentUser=i.result.result}):S({type:"danger",message:`首页初始化失败,${i.msg},请刷新页面重试`})},d=(i,e)=>{r.$patch(s=>{s.nav.currentNav=i,s.nav.to=e})},h=f(!1),k=f(!1);return T(async()=>{a.value.user.isDeleted===1&&a.value.driver.isDeleted===1&&await c(),h.value=a.value.user.isDriver,k.value=a.value.user.isPassenger,t.value=u.value.currentNav,await o.push(u.value.to)}),(i,e)=>{const s=$,b=B;return p(),g(b,{modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=m=>t.value=m)},{default:v(()=>[k.value?(p(),g(s,{key:0,name:"passenger",icon:"shop-o",to:"/main/passenger",onClick:e[0]||(e[0]=m=>d("passenger","/main/passenger"))},{default:v(()=>[_(" 我要拼车 ")]),_:1})):y("",!0),h.value?(p(),g(s,{key:1,name:"driver",icon:"logistics",to:"/main/driver",onClick:e[1]||(e[1]=m=>d("driver","/main/driver"))},{default:v(()=>[_(" 我要发车 ")]),_:1})):y("",!0),w(s,{name:"carpooling",icon:"todo-list-o",to:"/main/carpooling",onClick:e[2]||(e[2]=m=>d("carpooling","/main/carpooling"))},{default:v(()=>[_(" 我的行程 ")]),_:1}),w(s,{name:"my",icon:"user-o",to:"/main/my",onClick:e[3]||(e[3]=m=>d("my","/main/my"))},{default:v(()=>[_(" 我的 ")]),_:1})]),_:1},8,["modelValue"])}}};const H=l=>(P("data-v-42211081"),l=l(),R(),l),L={class:"main-page-container"},Q=H(()=>U("div",{class:"empty-content"},null,-1)),j={__name:"MainPage",setup(l){const o=f(!1),t=N(),n=["/main/carpooling","/main/passenger/passenger-home","/main/driver/driver-home","/main/my/my-home","/main/carpooling/passenger-order","/main/carpooling/driver-carpooling"];let a;return C(()=>t.currentRoute.value.path,r=>{a=0,o.value=n.indexOf(r)!==-1}),V((r,u,c)=>{n.indexOf(u.path)===-1?t.go(0):c()}),T(()=>{n.indexOf(t.currentRoute.value.path)!==-1&&(o.value=!0),a=0}),window.onscroll=function(){n.indexOf(t.currentRoute.value.path)!==-1&&(document.documentElement.scrollTop<5&&(o.value=!0),document.documentElement.scrollTop-a>10&&o.value?(o.value=!1,a=document.documentElement.scrollTop):a-document.documentElement.scrollTop>10&&!o.value&&(o.value=!0,a=document.documentElement.scrollTop))},(r,u)=>{const c=E("router-view");return p(),I("div",L,[w(c,{class:"main-router-container"}),Q,o.value?(p(),g(A,{key:0,class:"nav-container"})):y("",!0)])}}},W=z(j,[["__scopeId","data-v-42211081"]]);export{W as default};
