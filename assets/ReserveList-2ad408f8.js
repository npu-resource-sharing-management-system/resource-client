import{l as B,m as p,o as D,s as a,a as d,n as k,d as s,e as P,p as _,x as r,b as t,X as x,N as V,O as $,Y as E,c as b,v as c,y as G,R as z,Z as A,B as T,P as q,E as F}from"./.pnpm-ef8d297c.js";import{a as M,b as O,c as S}from"./index-2ef72c9d.js";import{_ as X}from"./index-f8813b5b.js";import"./index-95c6f037.js";const Y={style:{"text-align":"center"}},Z={class:"reserve-list-container"},j={__name:"ReserveList",setup(H){const m=B(),f=p(),g=p([]),l=p({}),v=async()=>{const e=await M(f.value);e!==null&&e.code===2e3?l.value=e.carpooling:e!==null?a({type:"danger",message:`加载行程具体信息失败,${e.msg}`}):a({type:"danger",message:"加载行程具体信息失败,请检查网络连接"})},y=async()=>{const e=await O(f.value);e!==null?e.code===2e3?g.value=e.result.list:a({type:"danger",message:"获取申请列表失败"+e.msg}):a({type:"danger",message:"获取申请列表失败"})};D(async()=>{const e=document.getElementById("van-tab");e!==null&&(e.style.display="none"),f.value=m.currentRoute.value.query.carpoolingId,await v(),l.value.leftPassengerNo===0&&a({type:"warning",message:"当前行程已满员"}),await y()});const w=async(e,i)=>{if(l.value.leftPassengerNo===0){a({type:"warning",message:"当前行程已满员"});return}const n=await S({orderId:e,pass:i});n!==null?n.code===2e3?(a({type:"success",message:"操作成功"}),await v(),await y()):a({type:"danger",message:"操作失败"+n.msg}):a({type:"danger",message:"操作失败"})};return(e,i)=>{const C=V,n=z,u=A,N=T,h=q,I=F,L=$;return d(),k(x,null,[s(C,{title:"拼车申请列表","left-text":"返回","left-arrow":"",onClickLeft:i[0]||(i[0]=o=>P(m).go(-1))}),_("div",Y,[_("h5",null,"当前行程剩余座位:"+r(l.value.leftPassengerNo),1)]),_("div",Z,[s(L,{finished:"","finished-text":"没有更多申请了"},{default:t(()=>[(d(!0),k(x,null,E(g.value,o=>(d(),b(I,{inset:"",key:o},{default:t(()=>[s(h,{class:"apply-item"},{default:t(()=>[s(n,null,{default:t(()=>[_("b",null,"乘客用户名: "+r(o.passengerName),1)]),_:2},1024),s(n,null,{default:t(()=>[c(" 申请时间: "+r(o.applyTime),1)]),_:2},1024),s(n,null,{default:t(()=>[s(u,{span:"12"},{default:t(()=>[c(" 订单号: "+r(o.orderId),1)]),_:2},1024),s(u,{span:"12"},{default:t(()=>[c(" 乘客号: "+r(o.passengerId),1)]),_:2},1024)]),_:2},1024),s(n,null,{default:t(()=>[s(u,{span:"12"},{default:t(()=>[l.value.leftPassengerNo!==0?(d(),b(N,{key:0,size:"mini",type:"success",icon:"success",onClick:R=>w(o.orderId,!0)},{default:t(()=>[c(" 同意 ")]),_:2},1032,["onClick"])):G("",!0)]),_:2},1024),s(u,{span:"12"},{default:t(()=>[s(N,{size:"mini",type:"danger",icon:"cross",onClick:R=>w(o.orderId,!1)},{default:t(()=>[c(" 拒绝 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])],64)}}},W=X(j,[["__scopeId","data-v-8b36e32c"]]);export{W as default};