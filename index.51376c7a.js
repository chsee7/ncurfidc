import{u as W,b as A,f as D,d as M,_ as S,__tla as $}from"./index.e45d322f.js";import{g as j,__tla as q}from"./vehicle.e0363ed9.js";import{W as d}from"./wartermark.e1e98732.js";import{K as m,az as z,aI as B,aD as C,h as G,a1 as J,k as P,o as V,a as E,b as a,X as i,u as n,aG as K,aH as O}from"./vue.8ac1a007.js";let u,R=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{const l=e=>(K("data-v-a4b10d5c"),e=e(),O(),e),v={class:"contentBox"},b={class:"card-box"},_={class:"card-line"},f=l(()=>a("div",{class:"label"},"\u8F66\u724C\u53F7",-1)),k={class:"value"},h={class:"card-line"},w=l(()=>a("div",{class:"label"},"\u8F66\u4E3B\u59D3\u540D",-1)),y={class:"value"},p={class:"card-line"},g=l(()=>a("div",{class:"label"},"\u5165\u7F51\u65F6\u95F4",-1)),x={class:"value"},N=m({name:"VehicleInfo"}),I=m({...N,emits:["refresh"],setup(e,{emit:X}){const T=W(),{themeConfig:t}=z(T);A(),B();const Y=C(),o=G(!1),r=J({bikeImageJson:"",bikeLicenseNumber:"",networkAccessTime:"",ownerName:""});P(async()=>{const{uuid:c}=Y.query;H(c)});const H=async c=>{try{o.value=!0;const{data:s}=await j({rfid:c}),L=D(new Date,"YYYY-mm-dd HH:MM:SS");t.value.wartermarkText=`${s.bikeLicenseNumber}#${L}`,t.value.isWartermark=!0,t.value.isWartermark?d.set(t.value.wartermarkText):d.del(),Object.assign(r,s)}catch(s){M().error(s.msg)}finally{o.value=!1}};return(c,s)=>(V(),E("div",v,[a("div",b,[a("div",_,[f,a("div",k,i(n(r).bikeLicenseNumber),1)]),a("div",h,[w,a("div",y,i(n(r).ownerName),1)]),a("div",p,[g,a("div",x,i(n(r).networkAccessTime),1)])])]))}});u=S(I,[["__scopeId","data-v-a4b10d5c"]])});export{R as __tla,u as default};
