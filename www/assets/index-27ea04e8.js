import{d as f,r as ue,o as v,c as w,w as c,u,N as D,a as r,z as pe,b as de,_ as fe,e as $,f as M,g as j,h as ge,i as me,j as be,k as ve,l as ye,m as he,n as Ne,p as we,q as Se,s as Ce,t as Ie,v as B,x as Pe,y as Te,A as Ee,B as xe,C as Oe,D as Le,E as Ae,F as De,G as $e,H as Me,I as je,J as Be,K as ke,L as Re,M as Ue,O as Ve,P as ze,Q as Fe,R as He,S as Ge,T as qe,U as C,V as I,W as We,X as Ke,Y as Ze,Z as Je,$ as Ye,a0 as Qe,a1 as Xe,a2 as et,a3 as tt,a4 as ot,a5 as k,a6 as nt,a7 as at,a8 as st,a9 as lt,aa as _t,ab as rt,ac as it,ad as ct,ae as ut,af as pt,ag as R,ah as dt,ai as ft,aj as gt,ak as mt,al as bt,am as vt,an as yt,ao as ht,ap as Nt,aq as wt,ar as St,as as Ct,at as It,au as Pt,av as Tt,aw as Et,ax as y,ay as P,az as xt,aA as U,aB as Ot,aC as b,aD as Lt,aE as T,aF as At,aG as Dt,aH as V,aI as $t,aJ as Mt,aK as jt,aL as Bt,aM as kt,aN as Rt}from"./vendor-0b8471c8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const z={common:{primaryColor:"#2f59a3",primaryColorHover:"#3E76D6",primaryColorPressed:"#213E70",primaryColorSuppl:"#3E76D6",successColor:"#2f59a3",successColorHover:"#3E76D6",successColorPressed:"#213E70",successColorSuppl:"#3E76D6",infoColor:"#53976f",infoColorHover:"#6FC995",infoColorPressed:"#376349",infoColorSuppl:"#6FC995",warningColor:"#be7f49",warningColorHover:"#D99152",warningColorPressed:"#734D2C",warningColorSuppl:"#D99152",errorColor:"#c34f28",errorColorHover:"#F56433",errorColorPressed:"#8F3A1E",errorColorSuppl:"#F56433"},Radio:{buttonColorActive:"#2f59a3",buttonTextColorActive:"#fff"}},Ut=f({name:"App",inheritAttrs:!0}),Vt=f({...Ut,setup(e){return(t,a)=>{const l=fe,n=ue("RouterView"),o=$,s=M,d=j,p=D;return v(),w(p,{locale:u(pe),"date-locale":u(de),"theme-overrides":u(z)},{default:c(()=>[r(l),r(d,null,{default:c(()=>[r(s,null,{default:c(()=>[r(o,null,{default:c(()=>[r(n)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}});const zt="modulepreload",Ft=function(e){return"/lcaas-form/"+e},E={},N=function(t,a,l){if(!a||a.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(a.map(o=>{if(o=Ft(o),o in E)return;E[o]=!0;const s=o.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!l)for(let i=n.length-1;i>=0;i--){const g=n[i];if(g.href===o&&(!s||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const _=document.createElement("link");if(_.rel=s?"stylesheet":zt,s||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),s)return new Promise((i,g)=>{_.addEventListener("load",i),_.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Ht=[{path:"/",name:"Editor",component:()=>N(()=>import("./Editor-06648e6c.js"),["assets/Editor-06648e6c.js","assets/vendor-0b8471c8.js","assets/Editor-01653665.css"]),meta:{title:"编辑器"}}],Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),qt=[{path:"/Preview",name:"Preview",component:()=>N(()=>import("./Preview-ef448f47.js"),["assets/Preview-ef448f47.js","assets/vendor-0b8471c8.js"]),meta:{title:"预览器"}}],Wt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"})),x=Object.assign({"./modules/editor.ts":Gt,"./modules/preview.ts":Wt}),F=[];Object.keys(x).forEach(e=>{const t=x[e].default||{},a=Array.isArray(t)?[...t]:[t];F.push(...a)});function Kt(){return F}function Zt(e){e.afterEach(t=>{const{title:a}=t.meta;document.title=a||document.title}),e.onError(t=>{console.error("路由错误",t)})}const Jt=Kt(),{VITE_BUILD_PUBLIC_PATH:Yt}={VITE_APP_TITLE:"表单引擎",VITE_BUILD_API_URL:"/api",VITE_BUILD_ANALYZER:"false",VITE_BUILD_CHUNKS:"false",VITE_BUILD_PUBLIC_PATH:"/lcaas-form",VITE_BUILD_OUTPUT_DIR:"../../www",VITE_BUILD_COMPRESS:"gzip",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/lcaas-form",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Qt={path:"/:path(.*)*",name:"ErrorPage",component:()=>N(()=>import("./Page404-c891cbdf.js"),["assets/Page404-c891cbdf.js","assets/vendor-0b8471c8.js","assets/Page404-5ef53a3f.css"]),meta:{title:"404"}},Xt=[...Jt,Qt],S=ge({history:me(Yt),routes:Xt,strict:!0,scrollBehavior:()=>({left:0,top:0})});async function eo(e){e.use(S),Zt(S)}const to=be();function oo(e){e.use(to)}const no=ye({components:[he,Ne,we,Se,Ce,Ie,B,Pe,Te,Ee,xe,Oe,Le,D,Ae,De,$e,Me,M,je,Be,ke,Re,Ue,Ve,ze,Fe,He,Ge,qe,C,I,We,Ke,Ze,Je,Ye,Qe,Xe,et,tt,j,ot,$,k,nt,at,st,lt,_t,rt,it,ct,ut,pt,R,dt,ft,gt,mt,bt,vt,yt,ht,Nt,wt,St,Ct,It,Pt,Tt,Et]});function ao(e){const{message:t,loadingBar:a,app:l}=ve(["message","loadingBar"],{configProviderProps:{tag:"aside",themeOverrides:z}});window.$loadingBar=a,window.$message=t,window.$asideApp=l,e.use(no)}const so=f({props:{name:{type:String,required:!0,default:""},prefix:{type:String,default:""},size:{type:[Number,String],default:()=>14},color:{type:String,default:"#666"}},setup(e){return{symbolId:y(()=>e.prefix?`#${e.prefix}-${e.name}`:`#${e.name}`)}},render(){const{symbolId:e,color:t,size:a}=this;return P("svg",{class:"svg-icon","aria-hidden":!0,style:{width:`${a}px`,height:`${a}px`}},[P("use",{"xlink:href":e,fill:t})])}}),lo=e=>{e.component("svg-icon",so)};function _o(e){lo(e)}function Mo(){return(globalThis||window).crypto.randomUUID()}function jo(e=""){return e+(globalThis||window).performance.now().toString(36).replace(".","")}function ro(e){const t=e.split("/").at(-1),a=e.split(t).at(0),[l,...n]=t.split(".").reverse();return{dir:a,base:t,ext:`.${l}`,name:n.reverse().join(".")}}const io=e=>!e||/^[1-9]\d*$/.test(e);function Bo(e,t=1){const a=[];for(let l=0;l<e.length;l+=t)a.push(e.slice(l,l+t));return a}const co=f({name:"InputUnit",inheritAttrs:!0}),uo=f({...co,props:{value:{},suffix:{default:void 0},options:{default:void 0}},emits:["update:value"],setup(e,{emit:t}){const a=e,l=y({get(){const{value:o}=xt(a);return(""+o.value).replaceAll(/[a-zA-Z]*/g,"")},set(o){const s=o?`${o}${n.value}`:"";t("update:value",s)}}),n=y({get(){const{value:o="",options:s}=a;return s?.length?(""+o).replaceAll(/[0-9]*/g,"")||s[0].value:""},set(o){const s=l.value?`${l.value}${o}`:"";t("update:value",s)}});return(o,s)=>{const d=C,p=R,_=I;return v(),w(_,null,{default:c(()=>[r(d,{value:u(l),"onUpdate:value":s[0]||(s[0]=i=>b(l)?l.value=i:null),"allow-input":u(io)},{suffix:c(()=>[U(Ot(o.suffix),1)]),_:1},8,["value","allow-input"]),o.options?.length?(v(),w(p,{key:0,value:u(n),"onUpdate:value":s[1]||(s[1]=i=>b(n)?n.value=i:null),style:{width:"10em"},options:o.options},null,8,["value","options"])):Lt("",!0)]),_:1})}}}),po=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),fo=e=>(jt("data-v-e5c12b6b"),e=e(),Bt(),e),go={class:"select-icon-header"},mo=fo(()=>V("div",{class:"title"},"选择图标",-1)),bo=f({name:"SelectIcon",inheritAttrs:!0}),vo=f({...bo,props:{value:{}},emits:["update:value"],setup(e,{emit:t}){const a=e,l=$t(()=>N(()=>import("./VIcons-6e25c8e0.js"),["assets/VIcons-6e25c8e0.js","assets/vendor-0b8471c8.js"])),n=T(!1),o=T(),s=y({get(){return a.value},set(p){t("update:value",p)}}),d=p=>{n.value=!1,s.value=p};return(p,_)=>{const i=C,g=B,re=I,ie=Mt,ce=k;return v(),At(Dt,null,[r(re,null,{default:c(()=>[r(i,{value:u(s),"onUpdate:value":_[0]||(_[0]=m=>b(s)?s.value=m:null),readonly:"",placeholder:"请选择"},null,8,["value"]),r(g,{type:"primary",onClick:_[1]||(_[1]=()=>n.value=!0)},{default:c(()=>[U("选择")]),_:1})]),_:1}),r(ce,{show:u(n),"onUpdate:show":_[3]||(_[3]=m=>b(n)?n.value=m:null),preset:"card",title:"选择图标","mask-closable":!1,"display-directive":"show",style:{width:"920px"}},{header:c(()=>[V("div",go,[mo,r(i,{value:u(o),"onUpdate:value":_[2]||(_[2]=m=>b(o)?o.value=m:null)},null,8,["value"])])]),default:c(()=>[r(ie,{style:{"max-height":"800px"}},{default:c(()=>[r(u(l),{onSelect:d})]),_:1})]),_:1},8,["show"])],64)}}});const yo=(e,t)=>{const a=e.__vccOpts||e;for(const[l,n]of t)a[l]=n;return a},ho=yo(vo,[["__scopeId","data-v-e5c12b6b"]]),No=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"})),H={__uuid__:"",__vModel__:"",label:"单行文本",tag:"n-input-group",tagType:"input",__layout__:{span:24},__config__:{},__slot__:{default:{prefix:"",suffix:""},preLabel:"",sufLabel:""}},G={__uuid__:"",__vModel__:"",label:"多行文本",tag:"n-input",tagType:"textarea",__layout__:{span:24},__config__:{type:"textarea"},__slot__:{prefix:"",suffix:""}},q={__uuid__:"",__vModel__:"",label:"密码",tag:"n-input",tagType:"password",__layout__:{span:24},__config__:{type:"password","show-password-on":"mousedown"},__slot__:{prefix:"",suffix:""}},W={__uuid__:"",__vModel__:"",label:"计数器",tag:"n-input-number",tagType:"number",__layout__:{span:24},__config__:{},__slot__:{"add-icon":"","minus-icon":"",prefix:"",suffix:""}},wo={input:H,textarea:G,password:q,number:W},So=Object.freeze(Object.defineProperty({__proto__:null,default:wo,input:H,number:W,password:q,textarea:G},Symbol.toStringTag,{value:"Module"})),K={__uuid__:"",__vModel__:"",label:"下拉选择",tag:"n-select",tagType:"select",__layout__:{span:24},__config__:{options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},__slot__:{}},Z={__uuid__:"",__vModel__:"",label:"级联选择",tag:"n-cascader",tagType:"cascader",__layout__:{span:24},__config__:{options:[{label:"选项A",value:"A",children:[{label:"选项A-1",value:"A-1"},{label:"选项A-2",value:"A-2"}]},{label:"选项B",value:"B",children:[{label:"选项B-1",value:"B-1"},{label:"选项B-2",value:"B-2"}]}]},__slot__:{}},J={__uuid__:"",__vModel__:"",label:"单选",tag:"n-radio-group",tagType:"radio",__layout__:{span:24},__config__:{},__slot__:{default:{type:"radio",space:{},options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]}}},Y={__uuid__:"",__vModel__:"",label:"复选框",tag:"n-checkbox-group",tagType:"checkbox",__layout__:{span:24},__config__:{},__slot__:{default:{type:"radio",space:{},options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]}}},Q={__uuid__:"",__vModel__:"",label:"滑动选择",tag:"n-slider",tagType:"slider",__layout__:{span:24},__config__:{},__slot__:{thumb:""}},X={__uuid__:"",__vModel__:"",label:"日期选择",tag:"n-date-picker",tagType:"date",__layout__:{span:24},__config__:{},__slot__:{}},ee={__uuid__:"",__vModel__:"",label:"时间选择",tag:"n-time-picker",tagType:"time",__layout__:{span:24},__config__:{},__slot__:{}},te={__uuid__:"",__vModel__:"",label:"评分",tag:"n-rate",tagType:"rate",__layout__:{span:24},__config__:{},__slot__:{default:""}},oe={__uuid__:"",__vModel__:"",label:"颜色选择",tag:"n-color-picker",tagType:"color",__layout__:{span:24},__config__:{},__slot__:{label:""}},Co={select:K,cascader:Z,radio:J,checkbox:Y,switch:{__uuid__:"",__vModel__:"",label:"开关",tag:"n-switch",tagType:"switch",__layout__:{span:24},__config__:{},__slot__:{checked:"",unchecked:"",icon:"","checked-icon":"","unchecked-icon":""}},slider:Q,date:X,time:ee,rate:te,color:oe},Io=Object.freeze(Object.defineProperty({__proto__:null,cascader:Z,checkbox:Y,color:oe,date:X,default:Co,radio:J,rate:te,select:K,slider:Q,time:ee},Symbol.toStringTag,{value:"Module"})),ne=[{label:"字段名",path:"__vModel__",component:"n-input",props:{maxlength:100}},{label:"标题",path:"label",component:"n-input",props:{maxlength:100}},{label:"表单栅格",path:"__layout__.span",component:"n-slider",props:{min:1,max:24}},{label:"展示标签",path:"__layout__.showLabel",component:"n-switch",props:{"default-value":!0}},{label:"标签位置",path:"__layout__.labelPlacement",component:"n-radio-group",props:{},slot:{type:"button",space:{},options:[{value:"left",label:"左置"},{value:"top",label:"上置"}]}},{label:"标签对齐",path:"__layout__.labelAlign",component:"n-radio-group",props:{},slot:{type:"button",space:{},options:[{value:"left",label:"左对齐"},{value:"right",label:"右对齐"}]}},{label:"标签宽度",path:"__layout__.labelWidth",component:"input-unit",props:{options:[{value:"px",label:"px"},{value:"em",label:"em"}]}},{label:"默认值",path:"__config__.defaultValue",component:"n-input",props:{}},{label:"禁用",path:"__config__.disabled",component:"n-switch",props:{}}],Po={common:ne},To=Object.freeze(Object.defineProperty({__proto__:null,common:ne,default:Po},Symbol.toStringTag,{value:"Module"})),ae=[{label:"前缀",path:"__slot__.preLabel",component:"n-input",props:{}},{label:"后缀",path:"__slot__.sufLabel",component:"n-input",props:{}},{label:"前图标",path:"__slot__.default.prefix",component:"SelectIcon",props:{}},{label:"后图标",path:"__slot__.default.suffix",component:"SelectIcon",props:{}},{label:"最大长度",path:"__config__.maxlength",component:"input-unit",props:{suffix:"字符"}},{label:"能否清空",path:"__config__.clearable",component:"n-switch",props:{}},{label:"是否圆角",path:"__config__.round",component:"n-switch",props:{}},{label:"显示字数",path:"__config__.showCount",component:"n-switch",props:{}}],se=[{label:"前缀",path:"__slot__.prefix",component:"SelectIcon",props:{}},{label:"后缀",path:"__slot__.suffix",component:"SelectIcon",props:{}}],Eo={input:ae,textarea:se},xo=Object.freeze(Object.defineProperty({__proto__:null,default:Eo,input:ae,textarea:se},Symbol.toStringTag,{value:"Module"})),ko=Symbol("leftDraggable"),Ro=Symbol("centerDraggable"),le={"input-type":{title:"输入型组件",list:[]},"select-type":{title:"选择型组件",list:[]}},O=Object.assign({"./render/input-type.json":So,"./render/select-type.json":Io}),_e={};Object.keys(O).forEach(e=>{const{name:t}=ro(e),a=O[e].default||{},l=Object.keys(a).map(n=>({text:a[n].label,icon:a[n].tagType}));le[t].list=l,Object.assign(_e,a)});async function Uo(){return Object.values(le)}function Vo(e){return _e[e]}const L=Object.assign({"./fields/common.json":To,"./fields/input-type.json":xo}),Oo={};Object.keys(L).forEach(e=>{const t=L[e].default||{};Object.assign(Oo,t)});const h={},A=Object.assign({"/src/components/global/InputUnit.vue":po,"/src/components/global/SelectIcon.vue":No});Object.keys(A).forEach(e=>{const t=A[e].default||{};h[t.name]=t});console.log(h);function Lo(e){Object.keys(h).forEach(t=>{e.component(t,h[t])}),Object.values(kt).map(t=>{e.component(t.name,t)})}function Ao(e){ao(e),_o(e),Lo(e)}async function Do(){const e=Rt(Vt);Ao(e),window.$loadingBar.start(),oo(e),await eo(e),await S.isReady(),window.$loadingBar.finish(),e.mount("#LcaasFormEditor")}Do();export{yo as _,Vo as a,Mo as b,jo as c,uo as d,_e as e,Oo as f,Uo as g,Ro as h,Bo as i,ko as r};
