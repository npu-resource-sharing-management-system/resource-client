import{s as h,t as $,q as C,k,l as x,H as b,m as T,o as p,c as f,a as d,d as w,v as _,y as g,b as y,T as S,P as B,w as V,Q as I,r as R,n as U,z as E,A as P,p as D}from"./.pnpm-633f8ad3.js";import{u as M,a as O}from"./index-ad81b65d.js";import{_ as L}from"./index-63e98a3e.js";import{_ as q}from"./index-627991da.js";const z=a=>{C({duration:0,forbidClick:!0,message:a})},A=async()=>{z("正在加载您的个人信息");try{const{data:a}=await L.get("/api/user/info");return a}catch(a){h({type:"danger",message:`首页初始化失败,${a.message}`})}finally{$()}return null},H={__name:"NavBar",setup(a){const o=k(),n=x("carpooling"),s=M(),{currentUser:t}=b(s),i=O(),{nav:l}=b(i),u=async()=>{const c=await A();c.code===2e3?s.$patch(e=>{e.currentUser=c.result.result}):h({type:"danger",message:`首页初始化失败,${c.msg},请刷新页面重试`})},v=(c,e)=>{i.$patch(r=>{r.nav.currentNav=c,r.nav.to=e})};return T(async()=>{t.value.user.isDeleted===1&&t.value.driver.isDeleted===1&&await u(),n.value=l.value.currentNav,await o.push(l.value.to)}),(c,e)=>{const r=S,N=B;return p(),f(N,{modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=m=>n.value=m)},{default:d(()=>[w(t).user.isDeleted===0?(p(),f(r,{key:0,name:"passenger",icon:"shop-o",to:"/main/passenger",onClick:e[0]||(e[0]=m=>v("passenger","/main/passenger"))},{default:d(()=>[_(" 我要拼车 ")]),_:1})):g("",!0),w(t).driver.isDeleted===0?(p(),f(r,{key:1,name:"driver",icon:"logistics",to:"/main/driver",onClick:e[1]||(e[1]=m=>v("driver","/main/driver"))},{default:d(()=>[_(" 我要发车 ")]),_:1})):g("",!0),y(r,{name:"carpooling",icon:"todo-list-o",to:"/main/carpooling",onClick:e[2]||(e[2]=m=>v("carpooling","/main/carpooling"))},{default:d(()=>[_(" 我的行程 ")]),_:1}),y(r,{name:"my",icon:"user-o",to:"/main/my",onClick:e[3]||(e[3]=m=>v("my","/main/my"))},{default:d(()=>[_(" 我的 ")]),_:1})]),_:1},8,["modelValue"])}}};const Q=a=>(E("data-v-08253bb7"),a=a(),P(),a),j={class:"main-page-container"},F=Q(()=>D("div",{class:"empty-content"},null,-1)),G={__name:"MainPage",setup(a){const o=x(!1),n=k(),s=["/main/carpooling","/main/passenger/passenger-home","/main/driver/driver-home","/main/my/my-home"];let t;return V(()=>n.currentRoute.value.path,i=>{t=0,o.value=s.indexOf(i)!==-1}),I((i,l,u)=>{s.indexOf(l.path)===-1?n.go(0):u()}),T(()=>{s.indexOf(n.currentRoute.value.path)!==-1&&(o.value=!0),t=0}),window.onscroll=function(){s.indexOf(n.currentRoute.value.path)!==-1&&(document.documentElement.scrollTop-t>30&&o.value?(o.value=!1,t=document.documentElement.scrollTop):t-document.documentElement.scrollTop>30&&!o.value&&(o.value=!0,t=document.documentElement.scrollTop))},(i,l)=>{const u=R("router-view");return p(),U("div",j,[y(u,{class:"main-router-container"}),F,o.value?(p(),f(H,{key:0,class:"nav-container"})):g("",!0)])}}},Y=q(G,[["__scopeId","data-v-08253bb7"]]);export{Y as default};
