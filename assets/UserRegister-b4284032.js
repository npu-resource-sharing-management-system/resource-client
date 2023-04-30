import{i as P,j as v,A as S,o as s,k as N,a as o,w as a,F as E,b as g,c as r,p as m,q as u,l as c,v as L,x as B,m as F,s as x,n as $,y as R,B as q,D as A,E as G,U as j,z as H}from"./.pnpm-666ef1f2.js";import{v as J,b as K,c as M,_ as O}from"./validatorUtil-0daa244f.js";import{_ as Q}from"./index-8c19187b.js";const h=b=>(L("data-v-dc2d3630"),b=b(),B(),b),W={class:"register-form"},X=h(()=>c("h3",{class:"title"},"西工大拼车平台——注册",-1)),Y=h(()=>c("h5",null,"用户角色选择(可多选)",-1)),Z={key:0},ee=h(()=>c("a",null,"您确认注册则代表您认可我们的",-1)),le={class:"submit-login-btn"},ae={__name:"UserRegister",setup(b){const z=P(),t=v({username:"",password:"",email:"",isDriver:!1,isPassenger:!1,driversPersonalId:"",driversName:"",driversLicenseNo:"",driversLicenseType:"",driversPlateNo:"",driversVehicleType:"",driversExpireDate:""}),p=v(!0),_=v({phone:"",code:""}),V=v(""),U=async()=>{F({duration:0,forbidClick:!0,message:"请求验证码发送中"});const f={phone:t.value.username};try{const{data:e}=await O.post("/api/auth/sendsms",f);if(e.code!==null&&e.code===2e3){x({type:"success",message:"验证码已发送"}),V.value="300s",p.value=!1;let d=300;const i=setInterval(()=>{d--,V.value=d+"s",d===0&&(clearInterval(i),p.value=!0)},1e3)}else x({type:"danger",message:`验证码发送失败,${e.msg},请重试`})}catch(e){x({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{$()}},k=v([]),n=v(!1);S(k,f=>{n.value=!!f.includes("isDriver")});const C=()=>{};return(f,e)=>{const d=R,i=q,w=A,D=G,y=j,T=H,I=E;return s(),N("div",W,[X,o(I,{onSubmit:e[15]||(e[15]=l=>C())},{default:a(()=>[o(T,{inset:"",style:{padding:"1%"}},{default:a(()=>[o(d,{modelValue:t.value.username,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value.username=l),name:"手机号",label:"手机号",placeholder:"请输入手机号",type:"tel",clearable:"",rules:[{validator:g(J),message:"请输入正确的手机号码"}]},null,8,["modelValue","rules"]),o(d,{modelValue:_.value.code,"onUpdate:modelValue":e[2]||(e[2]=l=>_.value.code=l),center:"",clearable:"",type:"digit",label:"短信验证码",placeholder:"请输入验证码",rules:[{validator:g(K),message:"应为4位数字"}]},{button:a(()=>[p.value?(s(),r(i,{key:0,size:"small",type:"primary",onClick:e[1]||(e[1]=l=>U())},{default:a(()=>[m(" 发送验证码 ")]),_:1})):p.value?u("",!0):(s(),r(i,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":V.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"]),o(i,{plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"}},{default:a(()=>[m("验证手机号码")]),_:1}),o(d,{modelValue:t.value.email,"onUpdate:modelValue":e[3]||(e[3]=l=>t.value.email=l),center:"",clearable:"",label:"邮箱",placeholder:"请输入邮箱(非强制)"},null,8,["modelValue"]),o(d,{modelValue:_.value.code,"onUpdate:modelValue":e[5]||(e[5]=l=>_.value.code=l),center:"",clearable:"",type:"digit",label:"邮箱验证码",placeholder:"请输入验证码",rules:[{required:!1,validator:g(M),message:"应为4位数字"}]},{button:a(()=>[p.value?(s(),r(i,{key:0,size:"small",type:"primary",onClick:e[4]||(e[4]=l=>U())},{default:a(()=>[m(" 发送验证码 ")]),_:1})):p.value?u("",!0):(s(),r(i,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":V.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"]),o(i,{plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"}},{default:a(()=>[m("验证邮箱")]),_:1}),Y,o(D,{modelValue:k.value,"onUpdate:modelValue":e[6]||(e[6]=l=>k.value=l),direction:"horizontal",class:"checkbox-area"},{default:a(()=>[o(w,{name:"isPassenger"},{default:a(()=>[m("我希望拼车-乘客")]),_:1}),o(w,{name:"isDriver"},{default:a(()=>[m("我可以搭人-司机")]),_:1})]),_:1},8,["modelValue"]),n.value?(s(),N("h5",Z,"请您补充以下信息")):u("",!0),n.value?(s(),r(y,{key:1,style:{width:"60%",margin:"0 auto"}},{default:a(()=>[o(i,{plain:"",block:"",type:"primary",size:"small"},{default:a(()=>[m(" 拍摄您的身份证-正面-以自动识别 ")]),_:1})]),_:1})):u("",!0),n.value?(s(),r(y,{key:2,style:{width:"60%",margin:"1% auto"}},{default:a(()=>[o(i,{plain:"",block:"",type:"primary",size:"small"},{default:a(()=>[m(" 拍摄您的身份证-背面-以自动识别 ")]),_:1})]),_:1})):u("",!0),n.value?(s(),r(d,{key:3,modelValue:t.value.driversPersonalId,"onUpdate:modelValue":e[7]||(e[7]=l=>t.value.driversPersonalId=l),center:"",disabled:"",clearable:"",label:"身份证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(d,{key:4,modelValue:t.value.driversName,"onUpdate:modelValue":e[8]||(e[8]=l=>t.value.driversName=l),center:"",disabled:"",clearable:"",label:"真实姓名",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(y,{key:5,style:{width:"60%",margin:"1% auto"}},{default:a(()=>[o(i,{plain:"",block:"",type:"primary",size:"small"},{default:a(()=>[m(" 拍摄您的驾驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),n.value?(s(),r(d,{key:6,modelValue:t.value.driversLicenseNo,"onUpdate:modelValue":e[9]||(e[9]=l=>t.value.driversLicenseNo=l),center:"",disabled:"",clearable:"",label:"驾驶证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(d,{key:7,modelValue:t.value.driversLicenseType,"onUpdate:modelValue":e[10]||(e[10]=l=>t.value.driversLicenseType=l),center:"",disabled:"",clearable:"",label:"准驾类型",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(y,{key:8,style:{width:"60%",margin:"1% auto"}},{default:a(()=>[o(i,{plain:"",block:"",type:"primary",size:"small"},{default:a(()=>[m(" 拍摄您的行驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),n.value?(s(),r(y,{key:9,style:{width:"60%",margin:"1% auto"}},{default:a(()=>[o(i,{plain:"",block:"",type:"primary",size:"small"},{default:a(()=>[m(" 拍摄您的行驶证-副页-以自动识别 ")]),_:1})]),_:1})):u("",!0),n.value?(s(),r(d,{key:10,modelValue:t.value.driversPlateNo,"onUpdate:modelValue":e[11]||(e[11]=l=>t.value.driversPlateNo=l),center:"",disabled:"",clearable:"",label:"车牌号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(d,{key:11,modelValue:t.value.driversVehicleType,"onUpdate:modelValue":e[12]||(e[12]=l=>t.value.driversVehicleType=l),center:"",disabled:"",clearable:"",label:"车牌号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),n.value?(s(),r(d,{key:12,modelValue:t.value.driversExpireDate,"onUpdate:modelValue":e[13]||(e[13]=l=>t.value.driversExpireDate=l),center:"",disabled:"",clearable:"",label:"证照最早过期时间",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0)]),_:1}),c("p",null,[ee,c("a",{style:{color:"#5CA0FF"},onClick:e[14]||(e[14]=l=>g(z).push("/privacy"))},"隐私政策")]),c("div",le,[o(i,{plain:"",block:"",type:"primary","native-type":"submit"},{default:a(()=>[m(" 注册 ")]),_:1})])]),_:1})])}}},re=Q(ae,[["__scopeId","data-v-dc2d3630"]]);export{re as default};