import{k as S,l as d,H as $,m as z,o as m,n as w,b as e,d as _,a,c as C,y as F,V as U,s as b,N as G,E as M,O as q,a5 as H,B as O,D as P,p as c,x as p,a3 as j,I as A,a4 as J,R as K,P as Q}from"./.pnpm-c62345a9.js";import{b as W,c as X}from"./index-6127ae00.js";import{u as Y}from"./index-01ed37e0.js";import{_ as Z}from"./index-92aeb057.js";import"./index-8e3cc4cb.js";const ee={class:"message-div"},te={__name:"ChatDetail",setup(ae){const v=S();let u;const s=d({}),f=d("加载中..."),V=Y(),{currentUser:I}=$(V),i=d(""),g=async()=>{const l=await W();l.code===2e3?(s.value=l.result.list.find(t=>t.toUserVo.id===u),f.value=s.value.toUserVo.username):b({type:"danger",message:`获取聊天详情失败,${l.msg}`})},T=async()=>{const l={toUserId:u,message:i.value},t=await X(l);t.code===2e3?(i.value="",await g()):b({type:"danger",message:`发送失败,${t.msg}`})};let n;z(async()=>{n=0,u=v.currentRoute.value.query.toUserId,await g()});const r=d(!0);return window.onscroll=function(){document.documentElement.scrollTop<5&&(n=0),document.documentElement.scrollTop-n>30&&r.value?(r.value=!1,n=document.documentElement.scrollTop):n-document.documentElement.scrollTop>5&&!r.value&&(r.value=!0,n=document.documentElement.scrollTop)},(l,t)=>{const k=G,x=j,B=A,y=J,D=K,E=Q,h=M,N=q,R=O,L=P;return m(),w(U,null,[e(k,{title:f.value,"left-text":"返回","left-arrow":"",onClickLeft:t[0]||(t[0]=o=>_(v).go(-1))},null,8,["title"]),e(N,{finished:!0,"finished-text":"没有更多聊天了"},{default:a(()=>[(m(!0),w(U,null,H(s.value.chats,o=>(m(),C(h,{style:{"margin-top":"2%"},key:o,inset:""},{default:a(()=>[e(E,{class:"chatItem"},{default:a(()=>[e(D,null,{default:a(()=>[e(y,{span:"8",class:"avatar-col"},{default:a(()=>[e(B,{round:"",width:"3rem",height:"3rem",src:o.fromUserId===_(u)?s.value.toUserVo.avatar:_(I).user.userImage},{loading:a(()=>[e(x,{type:"spinner",size:"20"})]),_:2},1032,["src"]),c("div",null,[c("strong",null,p(o.fromUserId===s.value.toUserVo.id?s.value.toUserVo.username:"您"),1)])]),_:2},1024),e(y,{span:"16",class:"chat-col"},{default:a(()=>[c("div",null,[c("div",ee,p(o.message),1),c("div",null,p(o.sendTime),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),r.value?(m(),C(h,{key:0,class:"chat-input",inset:""},{default:a(()=>[e(L,{center:"",label:"您的留言","label-align":"center",rows:"1",modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=o=>i.value=o)},{button:a(()=>[e(R,{size:"small",type:"primary",icon:"guide-o",onClick:T})]),_:1},8,["modelValue"])]),_:1})):F("",!0)],64)}}},ce=Z(te,[["__scopeId","data-v-b8e9cb48"]]);export{ce as default};
