import{Z as A,_ as I,u as L,k as D,$ as S,w as T,K as q,p as x,s as h,q as _,V as B,o as C,m as E,b as K,d as G,a0 as N,a1 as U,y as V,z,n as O}from"./.pnpm-64d71ea9.js";import{_ as W}from"./index-37c31092.js";window._AMapSecurityConfig={serviceHost:"https://amap.wangminan.me/_AMapService/backup"};const j=async()=>await A.load({key:"488832cc9add2a49a6f41bf8b8dbf109",version:"2.0",plugins:["AMap.Driving","AMap.Geocoder","AMap.Geolocation","AMap.ToolBar"]}),w=async c=>{const{data:l}=await I.get("https://sts.wangminan.me/amap"),s={key:l.WebApiKey,address:c,city:"西安"},n=await(await fetch(`https://restapi.amap.com/v3/geocode/geo?key=${s.key}&address=${s.address}&city=${s.city}`,{method:"GET"})).json();if(n.info!=="OK")throw new Error("获取经纬度失败");return n.geocodes[0].location.split(",")};const F=c=>(V("data-v-da404070"),c=c(),z(),c),H={class:"container"},J=F(()=>O("div",{id:"carpooling-route-map"},null,-1)),Z={__name:"PreviewMap",setup(c){const l=L(),s=D();let i=S(null),n,u,d,g="",m={waypoints:[]};const y=async()=>{const t=await w(s.currentRoute.value.query.departurePoint);u=new n.LngLat(t[0],t[1]);const e=await w(s.currentRoute.value.query.arrivePoint);if(d=new n.LngLat(e[0],e[1]),g=s.currentRoute.value.query.passingPoint,g!==""){const o=g.split(",");for(const a of o){const r=await w(a);m.waypoints.push(new n.LngLat(r[0],r[1]))}}};function k(t){const e=$(t),o=new n.Marker({position:e[0],icon:"https://webapi.amap.com/theme/v1.3/markers/n/start.png",map:i.value}),a=new n.Marker({position:e[e.length-1],icon:"https://webapi.amap.com/theme/v1.3/markers/n/end.png",map:i.value}),r=new n.Polyline({path:e,isOutline:!0,outlineColor:"#ffeeee",borderWeight:2,strokeWeight:5,strokeColor:"#0091ff",lineJoin:"round"});r.setMap(i),i.value.setFitView([o,a,r])}function $(t){const e=[];let o=0,a=t.steps.length;for(;o<a;o++){const r=t.steps[o];let p=0,v=r.path.length;for(;p<v;p++)e.push(r.path[p])}return e}const f=async t=>{i.value=new t.Map("carpooling-route-map",{resizeEnable:!0,mapStyle:l.value?"amap://styles/dark":"amap://styles/normal",viewMode:"3D",zoom:15,center:[108.764362,34.028885]}),new t.Driving({policy:t.DrivingPolicy.LEAST_TIME,map:i.value}).search(u,d,m,function(o,a){o==="complete"?a.routes&&a.routes.length&&k(a.routes[0]):h({type:"danger",message:"路线规划失败，请检查输入地点是否在西安市范围内"})})};T(l,async t=>{console.log(t),await y(),await f(n)});const M=async()=>{const t=N({duration:0,forbidClick:!0,message:"注意: 由于URI SDK只允许一个途经点，因此如果您填入了多个途经点，我们默认使用第一个作为参数。"});let e=4;const o=setInterval(()=>{if(e--,e)t.message=`倒计时 ${e} 秒 
 注意: 由于URI SDK只允许一个途经点，因此如果您填入了多个途经点，我们默认使用只第一个作为参数。`;else{clearInterval(o),_();const a=`${u.lng},${u.lat},${s.currentRoute.value.query.departurePoint}`,r=`${d.lng},${d.lat},${s.currentRoute.value.query.arrivePoint}`,p=`${m.waypoints[0].lng},${m.waypoints[0].lat},${s.currentRoute.value.query.passingPoint}`,v="car",P=0,b="gaode",R=1;console.log(a),console.log(r),window.location.href=`https://uri.amap.com/navigation?' +
                    'policy=${P}&from=${a}&to=${r}&via=${p}&mode=${v}' +
                    '&coordinate=${b}&callnative=${R}`}},1e3)};return q(async()=>{x({duration:0,forbidClick:!0,message:"正在加载地图..."});try{n=await j(),await y(),await f(n)}catch{h({type:"danger",message:"地图加载失败"})}finally{_()}}),B(()=>{document.getElementById("carpooling-route-map").remove()}),(t,e)=>{const o=U;return C(),E("div",H,[K(o,{title:"行程预览","left-text":"返回","right-text":"使用高德地图打开","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>G(s).go(-1)),onClickRight:e[1]||(e[1]=a=>M())}),J])}}},Y=W(Z,[["__scopeId","data-v-da404070"]]);export{Y as default};