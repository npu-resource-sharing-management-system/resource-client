import{s as h,q as $,p as C,k as x,l as k,M as b,K as N,o as p,c as f,a as d,d as w,t as _,x as g,b as y,T as S,N as B,w as V,O as I,r as R,m as U,y as E,z as M,n as O}from"./.pnpm-64d71ea9.js";import{u as D,a as P}from"./index-2e271261.js";import{_ as L}from"./index-73442fa0.js";import{_ as q}from"./index-37c31092.js";const z=a=>{C({duration:0,forbidClick:!0,message:a})},K=async()=>{z("正在加载您的个人信息");try{const{data:a}=await L.get("/api/user/info");return a}catch(a){h({type:"danger",message:`首页初始化失败,${a.message}`})}finally{$()}return null},j={__name:"NavBar",setup(a){const o=x(),n=k("carpooling"),s=D(),{currentUser:t}=b(s),i=P(),{nav:l}=b(i),u=async()=>{const c=await K();c.code===2e3?s.$patch(e=>{e.currentUser=c.result.result}):h({type:"danger",message:`首页初始化失败,${c.msg},请刷新页面重试`})},v=(c,e)=>{i.$patch(r=>{r.nav.currentNav=c,r.nav.to=e})};return N(async()=>{t.value.user.isDeleted===1&&t.value.driver.isDeleted===1&&await u(),n.value=l.value.currentNav,await o.push(l.value.to)}),(c,e)=>{const r=S,T=B;return p(),f(T,{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=m=>n.value=m)},{default:d(()=>[w(t).user.isDeleted===0?(p(),f(r,{key:0,name:"passenger",icon:"shop-o",to:"/main/passenger",onClick:e[0]||(e[0]=m=>v("passenger","/main/passenger"))},{default:d(()=>[_(" 我要拼车 ")]),_:1})):g("",!0),w(t).driver.isDeleted===0?(p(),f(r,{key:1,name:"driver",icon:"logistics",to:"/main/driver",onClick:e[1]||(e[1]=m=>v("driver","/main/driver"))},{default:d(()=>[_(" 我要发车 ")]),_:1})):g("",!0),y(r,{name:"carpooling",icon:"todo-list-o",to:"/main/carpooling",onClick:e[2]||(e[2]=m=>v("carpooling","/main/carpooling"))},{default:d(()=>[_(" 我的行程 ")]),_:1}),y(r,{name:"my",icon:"user-o",to:"/main/my",onClick:e[3]||(e[3]=m=>v("my","/main/my"))},{default:d(()=>[_(" 我的 ")]),_:1})]),_:1},8,["modelValue"])}}};const A=a=>(E("data-v-08253bb7"),a=a(),M(),a),F={class:"main-page-container"},G=A(()=>O("div",{class:"empty-content"},null,-1)),H={__name:"MainPage",setup(a){const o=k(!1),n=x(),s=["/main/carpooling","/main/passenger/passenger-home","/main/driver/driver-home","/main/my/my-home"];let t;return V(()=>n.currentRoute.value.path,i=>{t=0,o.value=s.indexOf(i)!==-1}),I((i,l,u)=>{s.indexOf(l.path)===-1?n.go(0):u()}),N(()=>{s.indexOf(n.currentRoute.value.path)!==-1&&(o.value=!0),t=0}),window.onscroll=function(){s.indexOf(n.currentRoute.value.path)!==-1&&(document.documentElement.scrollTop-t>30&&o.value?(o.value=!1,t=document.documentElement.scrollTop):t-document.documentElement.scrollTop>30&&!o.value&&(o.value=!0,t=document.documentElement.scrollTop))},(i,l)=>{const u=R("router-view");return p(),U("div",F,[y(u,{class:"main-router-container"}),G,o.value?(p(),f(j,{key:0,class:"nav-container"})):g("",!0)])}}},Y=q(H,[["__scopeId","data-v-08253bb7"]]);export{Y as default};
