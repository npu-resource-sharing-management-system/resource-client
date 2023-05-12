import{k as de,l as y,w as oe,o as d,m as q,b as m,a as n,p as f,s as l,q as b,F as ue,d as N,c as o,t as v,x as u,n as $,y as ce,z as me,A as pe,B as ve,E as ge,G as ye,U as fe,D as be}from"./.pnpm-64d71ea9.js";import{e as ke,v as F,b as A,a as he,c as Ve}from"./validatorUtil-0619a6e9.js";import{_ as V}from"./index-73442fa0.js";import{_ as we}from"./index-37c31092.js";const Y=async c=>{const g=B(c.content,c.file.name),a=new FormData;return a.append("file",g),await V.post("/api/auth/register/ocr/idCard",a)},_e=async c=>{const g=B(c.content,c.file.name),a=new FormData;return a.append("file",g),await V.post("/api/auth/register/ocr/drivingLicense",a)},H=async c=>{const g=B(c.content,c.file.name),a=new FormData;return a.append("file",g),await V.post("/api/auth/register/ocr/vehicleLicense",a)};function B(c,g){let a=c.split(","),w=a[0].match(/:(.*?);/)[1],k=window.atob(a[1]),h=k.length,U=new Uint8Array(h);for(;h--;)U[h]=k.charCodeAt(h);return new File([U],g,{type:w})}const M=c=>(ce("data-v-38fb231e"),c=c(),me(),c),xe={class:"register-form"},De=M(()=>$("h3",{class:"title"},"西工大拼车平台——注册",-1)),Ce=M(()=>$("h5",null,"用户角色选择(可多选)",-1)),Ne={key:4},$e=M(()=>$("a",null,"您确认注册则代表您认可我们的",-1)),Pe={class:"submit-login-btn"},Ee={__name:"UserRegister",setup(c){const g=de(),a=y({username:"",password:"",email:"",isDriver:!1,isPassenger:!1,driversPersonalId:"",driversName:"",driversLicenseNo:"",driversLicenseType:"",driversPlateNo:"",driversVehicleType:"",driversExpireDate:""}),w=y(!0),k=y({phone:"",code:""}),h=y(""),U=async()=>{if(!F(a.value.username)){l({type:"danger",message:"手机号格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求验证码发送中"});const s={phone:a.value.username};try{const{data:e}=await V.post("/api/auth/sendsms",s);if(e.code!==null&&e.code===2e3){l({type:"success",message:"验证码已发送"}),h.value="300s",w.value=!1;let t=300;const r=setInterval(()=>{t--,h.value=t+"s",t===0&&(clearInterval(r),w.value=!0)},1e3)}else l({type:"danger",message:`验证码发送失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}},_=y(!1),K=async()=>{if(k.value.phone=a.value.username,!A(k.value.code)||!F(k.value.phone)){l({type:"danger",message:"格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求验证码验证中"});try{const{data:s}=await V.post("/api/auth/checksms",k.value);s.code!==null&&s.code===2e3?(l({type:"success",message:"验证码验证成功"}),_.value=!0):l({type:"danger",message:`验证码验证失败,${s.msg},请重试`})}catch(s){l({type:"danger",message:`服务器异常${s},请通知管理员`})}finally{b()}},x=y({mail:"",code:""}),P=y(!1),L=y(!0),T=y(""),Q=async()=>{if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(a.value.email)){l({type:"danger",message:"邮箱格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求验证码发送中"});const s={email:a.value.email};try{const{data:e}=await V.post("/api/auth/sendmail",s);if(e.code!==null&&e.code===2e3){l({type:"success",message:"验证码已发送"}),T.value="300s",L.value=!1;let t=300;const r=setInterval(()=>{t--,T.value=t+"s",t===0&&(clearInterval(r),L.value=!1)},1e3)}else l({type:"danger",message:`验证码发送失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}},W=async()=>{if(x.value.mail=a.value.email,!A(x.value.code)||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(x.value.code)){l({type:"danger",message:"格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求邮箱验证中"});try{const{data:s}=await V.post("/api/auth/checkmail",x.value);s.code!==null&&s.code===2e3?(l({type:"success",message:"邮箱验证成功"}),P.value=!0):l({type:"danger",message:`邮箱验证失败,${s.msg},请重试`})}catch(s){l({type:"danger",message:`服务器异常${s},请通知管理员`})}finally{b()}},E=y([]),p=y(!1);let O=!1,J=!1,Z=!1,G=!1,j=!1;const z=s=>(console.log(s.file.type),s.content.size>10*1024*1024?(l({type:"danger",message:"文件大小不能超过10M"}),!1):/image\/(png|jpg|jpeg|JPG|PNG)/.test(s.file.type)?!0:(l({type:"danger",message:"文件格式不正确"}),!1)),X=async s=>{if(z(s)){f({duration:0,forbidClick:!0,message:"正在识别身份证"});try{const{data:e}=await Y(s);if(e.code===2e3){const t=JSON.parse(e.data);if(t.data.face!==null){const r=t.data.face;if(r.warning.isCopy!==0||r.warning.isReshoot!==0){l({type:"danger",message:"识别到翻拍或复制。请识别原件身份证"});return}a.value.driversName=r.data.name,a.value.driversPersonalId=r.data.idNumber,O=!0}else l({type:"danger",message:"身份证识别失败,请重试"})}else l({type:"danger",message:`身份证识别失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}}},ee=async s=>{if(z(s)){f({duration:0,forbidClick:!0,message:"正在识别身份证"});try{const{data:e}=await Y(s);if(e.code===2e3){const t=JSON.parse(e.data);if(t.data.back!==null){const r=t.data.back;if(r.warning.isCopy!==0||r.warning.isReshoot!==0){l({type:"danger",message:"识别到翻拍或复制。请识别原件身份证"});return}r.data.validPeriod.split("-")[1]==="长期"?r.data.validPeriod="2999-12-31":a.value.driversExpireDate=r.data.validPeriod.split("-")[1].replace(/(\d{4})\.(\d{2})\.(\d{2})/,"$1-$2-$3"),J=!0}else l({type:"danger",message:"请识别身份证反面"})}else l({type:"danger",message:`身份证识别失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}}},ae=async s=>{if(z(s))a.value.driversName===""&&l({type:"danger",message:"请先识别身份证信息"});else return;f({duration:0,forbidClick:!0,message:"正在识别驾驶证"});try{const{data:e}=await _e(s);if(e.code===2e3){const t=JSON.parse(e.data);if(t.data.face!==null){if(t.data.face.data.name!==a.value.driversName||t.data.face.data.licenseNumber!==a.value.driversPersonalId){l({type:"danger",message:"驾驶证与身份证所属人不一致,请更新材料"});return}a.value.driversLicenseNo=t.data.face.data.licenseNumber,a.value.driversLicenseType=t.data.face.data.approvedType;const r=t.data.face.data.validPeriod.split("至")[1];a.value.driversExpireDate===""?a.value.driversExpireDate=r:a.value.driversExpireDate=a.value.driversExpireDate>r?r:a.value.driversExpireDate,Z=!0}else l({type:"danger",message:"驾驶证识别失败,请重试"})}else l({type:"danger",message:`驾驶证识别失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}},le=async s=>{if(z(s)){f({duration:0,forbidClick:!0,message:"正在识别行驶证"});try{const{data:e}=await H(s);if(e.code===2e3){const t=JSON.parse(e.data);if(t.data.face!==null){if(t.data.face.data.owner!==a.value.driversName){l({type:"danger",message:"行驶证与身份证所属人不一致或身份信息为空,请更新材料"});return}else t.data.face.data.useNature!=="非营运"&&l({type:"warning",message:"行驶证非营运,我们建议您更新材料"});a.value.driversPlateNo=t.data.face.data.licensePlateNumber,a.value.driversVehicleType=t.data.face.data.model+" "+t.data.face.data.vehicleType,G=!0}}else l({type:"danger",message:"行驶证识别失败,请重试"})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}}},te=async s=>{if(z(s)){f({duration:0,forbidClick:!0,message:"正在识别行驶证"});try{const{data:e}=await H(s);if(e.code===2e3){const t=JSON.parse(e.data);if(t.data.back!==null){if(t.data.back.data.inspectionRecord===null){l({type:"danger",message:"行驶证未年检,请更新材料"});return}const r=t.data.back.data.inspectionRecord,S=/有效期至(\d{1,4}年\d{1,2}月)/g,D=r.match(S);if(D===null){l({type:"danger",message:"行驶证年检信息解析失败,请更新材料"});return}D.sort((R,i)=>{const ie=R.match(/\d{1,4}年\d{1,2}月/)[0],ne=i.match(/\d{1,4}年\d{1,2}月/)[0];return ie>ne?1:-1});const I=D[D.length-1].match(/\d{1,4}年\d{1,2}月/)[0].replace("年","-").replace("月","-01");a.value.driversExpireDate===""?a.value.driversExpireDate=I:a.value.driversExpireDate=a.value.driversExpireDate>I?I:a.value.driversExpireDate,j=!0}}else l({type:"danger",message:"行驶证识别失败,请重试"})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{b()}}};oe(E,s=>{p.value=!!s.includes("isDriver")});const se=()=>a.value.isDriver&&(a.value.driversName===""||a.value.driversPersonalId===""||a.value.driversVehicleType===""||a.value.driversExpireDate===""||a.value.driversPlateNo==="")?(l({type:"danger",message:"请完善司机信息"}),!1):_.value?!P.value&&a.value.email!==""?(l({type:"danger",message:"请先完成邮箱校验"}),!1):a.value.isDriver&&(!O||!J||!Z||!G||!j)?(l({type:"danger",message:"请先有关证照校验"}),!1):!0:(l({type:"danger",message:"请先完成手机号校验"}),!1),re=async()=>{f({duration:0,forbidClick:!0,message:"正在提交注册信息,我们推荐您完成注册后及时绑定支付宝。"});try{if(E.value.indexOf("isDriver")!==-1?a.value.isDriver=!0:E.value.indexOf("isPassenger")!==-1&&(a.value.isPassenger=!0),!a.value.isDriver&&!a.value.isPassenger){l({type:"danger",message:"请选择用户角色"});return}if(!se())return;a.value.password=ke(a.value.password);const{data:s}=await V.post("/api/auth/register/user",a.value);s.code===2e3?(l({type:"success",message:"注册成功,请您登录"}),await g.push("/login")):l({type:"danger",message:s.message})}catch(s){l({type:"danger",message:`服务器异常${s},请通知管理员`})}finally{b()}};return(s,e)=>{const t=pe,r=ve,S=ge,D=ye,C=fe,I=be,R=ue;return d(),q("div",xe,[De,m(R,{onSubmit:e[19]||(e[19]=i=>re())},{default:n(()=>[m(I,{inset:"",style:{padding:"1%"}},{default:n(()=>[m(t,{modelValue:a.value.username,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value.username=i),name:"手机号",label:"手机号",placeholder:"请输入手机号",type:"tel",clearable:"",rules:[{validator:N(F),message:"请输入正确的手机号码"}],disabled:_.value},null,8,["modelValue","rules","disabled"]),_.value?u("",!0):(d(),o(t,{key:0,modelValue:k.value.code,"onUpdate:modelValue":e[2]||(e[2]=i=>k.value.code=i),center:"",clearable:"",type:"digit",label:"短信验证码",placeholder:"请输入验证码",rules:[{validator:N(A),message:"应为4位数字"}]},{button:n(()=>[w.value?(d(),o(r,{key:0,size:"small",type:"primary",onClick:e[1]||(e[1]=i=>U()),disabled:_.value},{default:n(()=>[v(" 发送验证码 ")]),_:1},8,["disabled"])):w.value?u("",!0):(d(),o(r,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":h.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])),_.value?u("",!0):(d(),o(r,{key:1,plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"},onClick:e[3]||(e[3]=i=>K())},{default:n(()=>[v("验证手机号码")]),_:1})),m(t,{modelValue:a.value.password,"onUpdate:modelValue":e[4]||(e[4]=i=>a.value.password=i),name:"密码",label:"密码",type:"password",placeholder:"请设置密码",autocomplete:"off",rules:[{validator:N(he),message:"应为4-16位数字/字母/下划线"}]},null,8,["modelValue","rules"]),m(t,{modelValue:a.value.email,"onUpdate:modelValue":e[5]||(e[5]=i=>a.value.email=i),center:"",clearable:"",label:"邮箱",placeholder:"请输入邮箱(非强制)",disabled:P.value},null,8,["modelValue","disabled"]),P.value?u("",!0):(d(),o(t,{key:2,modelValue:x.value.code,"onUpdate:modelValue":e[7]||(e[7]=i=>x.value.code=i),center:"",clearable:"",type:"digit",label:"邮箱验证码",placeholder:"请输入验证码",rules:[{required:!1,validator:N(Ve),message:"应为4位数字"}]},{button:n(()=>[L.value?(d(),o(r,{key:0,size:"small",type:"primary",onClick:e[6]||(e[6]=i=>Q())},{default:n(()=>[v(" 发送验证码 ")]),_:1})):L.value?u("",!0):(d(),o(r,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":T.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])),P.value?u("",!0):(d(),o(r,{key:3,plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"},onClick:e[8]||(e[8]=i=>W())},{default:n(()=>[v("验证邮箱")]),_:1})),Ce,m(D,{modelValue:E.value,"onUpdate:modelValue":e[9]||(e[9]=i=>E.value=i),direction:"horizontal",class:"checkbox-area"},{default:n(()=>[m(S,{name:"isPassenger"},{default:n(()=>[v("我希望拼车-乘客")]),_:1}),m(S,{name:"isDriver"},{default:n(()=>[v("我可以搭人-司机")]),_:1})]),_:1},8,["modelValue"]),p.value?(d(),q("h5",Ne,"请您补充以下信息")):u("",!0),p.value?(d(),o(C,{key:5,style:{width:"60%",margin:"0 auto"},"after-read":X},{default:n(()=>[m(r,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[v(" 拍摄您的身份证-正面-以自动识别 ")]),_:1})]),_:1})):u("",!0),p.value?(d(),o(C,{key:6,style:{width:"60%",margin:"1% auto"},"after-read":ee},{default:n(()=>[m(r,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[v(" 拍摄您的身份证-背面-以自动识别 ")]),_:1})]),_:1})):u("",!0),p.value?(d(),o(t,{key:7,modelValue:a.value.driversPersonalId,"onUpdate:modelValue":e[10]||(e[10]=i=>a.value.driversPersonalId=i),center:"",disabled:"",clearable:"",label:"身份证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(t,{key:8,modelValue:a.value.driversName,"onUpdate:modelValue":e[11]||(e[11]=i=>a.value.driversName=i),center:"",disabled:"",clearable:"",label:"真实姓名",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(C,{key:9,style:{width:"60%",margin:"1% auto"},"after-read":ae},{default:n(()=>[m(r,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[v(" 拍摄您的驾驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),p.value?(d(),o(t,{key:10,modelValue:a.value.driversLicenseNo,"onUpdate:modelValue":e[12]||(e[12]=i=>a.value.driversLicenseNo=i),center:"",disabled:"",clearable:"",label:"驾驶证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(t,{key:11,modelValue:a.value.driversLicenseType,"onUpdate:modelValue":e[13]||(e[13]=i=>a.value.driversLicenseType=i),center:"",disabled:"",clearable:"",label:"准驾类型",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(C,{key:12,style:{width:"60%",margin:"1% auto"},"after-read":le},{default:n(()=>[m(r,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[v(" 拍摄您的行驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),p.value?(d(),o(C,{key:13,style:{width:"60%",margin:"1% auto"},"after-read":te},{default:n(()=>[m(r,{plain:"",block:"",type:"primary",size:"small"},{default:n(()=>[v(" 拍摄您的行驶证-副页-以自动识别 ")]),_:1})]),_:1})):u("",!0),p.value?(d(),o(t,{key:14,modelValue:a.value.driversPlateNo,"onUpdate:modelValue":e[14]||(e[14]=i=>a.value.driversPlateNo=i),center:"",disabled:"",clearable:"",label:"车牌号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(t,{key:15,modelValue:a.value.driversVehicleType,"onUpdate:modelValue":e[15]||(e[15]=i=>a.value.driversVehicleType=i),center:"",disabled:"",clearable:"",autosize:"",type:"textarea",label:"车型",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),p.value?(d(),o(t,{key:16,modelValue:a.value.driversExpireDate,"onUpdate:modelValue":e[16]||(e[16]=i=>a.value.driversExpireDate=i),center:"",disabled:"",clearable:"",label:"证照最早过期时间",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0)]),_:1}),$("p",null,[$e,$("a",{style:{color:"#5CA0FF"},onClick:e[17]||(e[17]=i=>N(g).push("/privacy"))},"隐私政策")]),$("div",Pe,[m(r,{plain:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[v(" 注册 ")]),_:1}),m(r,{plain:"",block:"",type:"success",onClick:e[18]||(e[18]=i=>N(g).push("/login"))},{default:n(()=>[v(" 返回登录页 ")]),_:1})])]),_:1})])}}},Se=we(Ee,[["__scopeId","data-v-38fb231e"]]);export{Se as default};