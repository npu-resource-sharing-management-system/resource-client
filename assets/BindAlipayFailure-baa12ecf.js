import{k as a,m as o,s as t,o as c,n as _,z as n,A as d,p}from"./.pnpm-f0908098.js";import{_ as i}from"./index-25e647bd.js";const r=e=>(n("data-v-bcd691da"),e=e(),d(),e),u={class:"welcome-banner"},l=r(()=>p("h1",null,"正在处理绑定信息",-1)),m=[l],h={__name:"BindAlipayFailure",setup(e){const s=a();return o(async()=>{t({type:"danger",message:"由于支付宝服务器原因绑定失败,请稍后重试"}),setTimeout(async()=>{await s.push("/main/home")},3e3)}),(y,f)=>(c(),_("div",u,m))}},b=i(h,[["__scopeId","data-v-bcd691da"]]);export{b as default};