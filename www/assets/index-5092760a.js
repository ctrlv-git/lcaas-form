import{d,r as u_,o as v,c as w,w as r,u as g,N as k,a as u,z as i_,b as r_,_ as c_,e as E,f as L,g as A,h as g_,i as p_,j as d_,k as f_,l as b_,m as y_,n as v_,p as h_,q as m_,s as w_,t as T_,v as V,x as M_,y as S_,A as I_,B as N_,C as C_,D as P_,E as x_,F as R_,G as $_,H as O_,I as k_,J as E_,K as L_,L as A_,M as V_,O as B_,P as D_,Q as j_,R as U_,S as q_,T as z_,U as S,V as I,W as H_,X as F_,Y as W_,Z as G_,$ as K_,a0 as Z_,a1 as J_,a2 as Y_,a3 as Q_,a4 as X_,a5 as B,a6 as _e,a7 as ee,a8 as te,a9 as le,aa as oe,ab as ae,ac as ne,ad as se,ae as ue,af as ie,ag as D,ah as re,ai as ce,aj as ge,ak as pe,al as de,am as fe,an as be,ao as ye,ap as ve,aq as he,ar as me,as as we,at as Te,au as Me,av as Se,aw as Ie,ax as h,ay as N,az as Ne,aA as j,aB as Ce,aC as U,aD as y,aE as Pe,aF as C,aG as xe,aH as Re,aI as q,aJ as $e,aK as Oe,aL as ke,aM as Ee,aN as Le,aO as Ae}from"./vendor-bfdd7a88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}})();const z={common:{primaryColor:"#2f59a3",primaryColorHover:"#466ab7",primaryColorPressed:"#6585d5",primaryColorSuppl:"#466ab7",successColor:"#2f59a3",successColorHover:"#466ab7",successColorPressed:"#6585d5",successColorSuppl:"#466ab7",infoColor:"#53976f",infoColorHover:"#327650",infoColorPressed:"#4a8d66",infoColorSuppl:"#327650",warningColor:"#dda400",warningColorHover:"#916400",warningColorPressed:"#FFC107",warningColorSuppl:"#916400",errorColor:"#c34f28",errorColorHover:"#F56433",errorColorPressed:"#8F3A1E",errorColorSuppl:"#F56433"},Radio:{buttonColorActive:"#2f59a3",buttonTextColorActive:"#fff"}},Ve=d({name:"App",inheritAttrs:!0}),Be=d({...Ve,setup(_){return(e,l)=>{const a=c_,o=u_("RouterView"),t=E,n=L,p=A,c=k;return v(),w(c,{locale:g(i_),"date-locale":g(r_),"theme-overrides":g(z)},{default:r(()=>[u(a),u(p,null,{default:r(()=>[u(n,null,{default:r(()=>[u(t,null,{default:r(()=>[u(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}});const De="modulepreload",je=function(_){return"/lcaas-form/"+_},P={},m=function(e,l,a){if(!l||l.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(l.map(t=>{if(t=je(t),t in P)return;P[t]=!0;const n=t.endsWith(".css"),p=n?'[rel="stylesheet"]':"";if(!!a)for(let i=o.length-1;i>=0;i--){const f=o[i];if(f.href===t&&(!n||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":De,n||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),n)return new Promise((i,f)=>{s.addEventListener("load",i),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},Ue=[{path:"/",name:"Editor",component:()=>m(()=>import("./Editor-184dc84f.js"),["assets/Editor-184dc84f.js","assets/vendor-bfdd7a88.js","assets/Editor-bd1579ae.css"]),meta:{title:"编辑器"}}],qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),ze=[{path:"/Preview",name:"Preview",component:()=>m(()=>import("./Preview-2f2a2211.js"),["assets/Preview-2f2a2211.js","assets/vendor-bfdd7a88.js"]),meta:{title:"预览器"}}],He=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"})),x=Object.assign({"./modules/editor.ts":qe,"./modules/preview.ts":He}),H=[];Object.keys(x).forEach(_=>{const e=x[_].default||{},l=Array.isArray(e)?[...e]:[e];H.push(...l)});function Fe(){return H}function We(_){_.afterEach(e=>{const{title:l}=e.meta;document.title=l||document.title}),_.onError(e=>{console.error("路由错误",e)})}const Ge=Fe(),{VITE_BUILD_PUBLIC_PATH:Ke}={VITE_APP_TITLE:"表单引擎",VITE_BUILD_API_URL:"/api",VITE_BUILD_ANALYZER:"false",VITE_BUILD_CHUNKS:"false",VITE_BUILD_PUBLIC_PATH:"/lcaas-form",VITE_BUILD_OUTPUT_DIR:"../../www",VITE_BUILD_COMPRESS:"gzip",VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE:"false",BASE_URL:"/lcaas-form",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Ze={path:"/:path(.*)*",name:"ErrorPage",component:()=>m(()=>import("./Page404-c9ba9853.js"),["assets/Page404-c9ba9853.js","assets/vendor-bfdd7a88.js","assets/Page404-5ef53a3f.css"]),meta:{title:"404"}},Je=[...Ge,Ze],T=g_({history:p_(Ke),routes:Je,strict:!0,scrollBehavior:()=>({left:0,top:0})});async function Ye(_){_.use(T),We(T)}const Qe=d_();function Xe(_){_.use(Qe)}const _t=b_({components:[y_,v_,h_,m_,w_,T_,V,M_,S_,I_,N_,C_,P_,k,x_,R_,$_,O_,L,k_,E_,L_,A_,V_,B_,D_,j_,U_,q_,z_,S,I,H_,F_,W_,G_,K_,Z_,J_,Y_,Q_,A,X_,E,B,_e,ee,te,le,oe,ae,ne,se,ue,ie,D,re,ce,ge,pe,de,fe,be,ye,ve,he,me,we,Te,Me,Se,Ie]});function et(_){const{message:e,loadingBar:l,app:a}=f_(["message","loadingBar"],{configProviderProps:{tag:"aside",themeOverrides:z}});window.$loadingBar=l,window.$message=e,window.$asideApp=a,_.use(_t)}const tt=d({props:{name:{type:String,required:!0,default:""},prefix:{type:String,default:""},size:{type:[Number,String],default:()=>14},color:{type:String,default:"#666"}},setup(_){return{symbolId:h(()=>_.prefix?`#${_.prefix}-${_.name}`:`#${_.name}`)}},render(){const{symbolId:_,color:e,size:l}=this;return N("svg",{class:"svg-icon","aria-hidden":!0,style:{width:`${l}px`,height:`${l}px`}},[N("use",{"xlink:href":_,fill:e})])}}),lt=_=>{_.component("svg-icon",tt)};function ot(_){lt(_)}function Zt(){return(globalThis||window).crypto.randomUUID()}function Jt(_=""){return _+(globalThis||window).performance.now().toString(36).replace(".","")}function at(_){const e=_.split("/").at(-1),l=_.split(e).at(0),[a,...o]=e.split(".").reverse();return{dir:l,base:e,ext:`.${a}`,name:o.reverse().join(".")}}const nt=_=>!_||/^[1-9]\d*$/.test(_);function Yt(_,e=1){const l=[];for(let a=0;a<_.length;a+=e)l.push(_.slice(a,a+e));return l}function st(_,e,l="value"){for(let a=0;a<_.length;a++)if(_[a][l]===e[l]){_.splice(a,1);break}else _[a].children&&st(_[a].children,e)}const ut=d({name:"InputUnit",inheritAttrs:!0}),it=d({...ut,props:{value:{},suffix:{default:void 0},options:{default:void 0}},emits:["update:value"],setup(_,{emit:e}){const l=_,a=h({get(){const{value:t}=Ne(l);return(""+t.value).replaceAll(/[a-zA-Z]*/g,"")},set(t){const n=t?`${t}${o.value}`:"";e("update:value",n)}}),o=h({get(){const{value:t="",options:n}=l;return n?.length?(""+t).replaceAll(/[0-9]*/g,"")||n[0].value:""},set(t){const n=a.value?`${a.value}${t}`:"";e("update:value",n)}});return(t,n)=>{const p=S,c=D,s=I;return v(),w(s,null,{default:r(()=>[u(p,U({value:g(a),"onUpdate:value":n[0]||(n[0]=i=>y(a)?a.value=i:null)},t.$attrs,{"allow-input":g(nt)}),{suffix:r(()=>[j(Ce(t.suffix),1)]),_:1},16,["value","allow-input"]),t.options?.length?(v(),w(c,{key:0,value:g(o),"onUpdate:value":n[1]||(n[1]=i=>y(o)?o.value=i:null),style:{width:"10em"},options:t.options},null,8,["value","options"])):Pe("",!0)]),_:1})}}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),ct=_=>(ke("data-v-58a57c57"),_=_(),Ee(),_),gt={class:"select-icon-header"},pt=ct(()=>q("div",{class:"title"},"选择图标",-1)),dt=d({name:"SelectIcon",inheritAttrs:!1}),ft=d({...dt,props:{value:{}},emits:["update:value"],setup(_,{emit:e}){const l=_,a=$e(()=>m(()=>import("./VIcons-e7de3fcd.js"),["assets/VIcons-e7de3fcd.js","assets/vendor-bfdd7a88.js"])),o=C(!1),t=C(),n=h({get(){return l.value},set(c){e("update:value",c)}}),p=c=>{o.value=!1,n.value=c};return(c,s)=>{const i=S,f=V,a_=I,n_=Oe,s_=B;return v(),xe(Re,null,[u(a_,null,{default:r(()=>[u(i,U({value:g(n),"onUpdate:value":s[0]||(s[0]=b=>y(n)?n.value=b:null),clearable:"",readonly:"",placeholder:"请选择"},c.$attrs),null,16,["value"]),u(f,{type:"primary",onClick:s[1]||(s[1]=()=>o.value=!0)},{default:r(()=>[j("选择")]),_:1})]),_:1}),u(s_,{show:g(o),"onUpdate:show":s[3]||(s[3]=b=>y(o)?o.value=b:null),preset:"card",title:"选择图标","mask-closable":!1,"display-directive":"show",style:{width:"920px"}},{header:r(()=>[q("div",gt,[pt,u(i,{value:g(t),"onUpdate:value":s[2]||(s[2]=b=>y(t)?t.value=b:null)},null,8,["value"])])]),default:r(()=>[u(n_,{style:{"max-height":"800px","padding-right":"10px"}},{default:r(()=>[u(g(a),{onSelect:p})]),_:1})]),_:1},8,["show"])],64)}}});const bt=(_,e)=>{const l=_.__vccOpts||_;for(const[a,o]of e)l[a]=o;return l},yt=bt(ft,[["__scopeId","data-v-58a57c57"]]),vt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),F={__uuid__:"",__vModel__:"",label:"单行文本",tag:"n-input-group",tagType:"Input",__layout__:{span:24},__config__:{},__slot__:{default:{prefix:"",suffix:""},preLabel:"",sufLabel:""},__rules__:[]},W={__uuid__:"",__vModel__:"",label:"多行文本",tag:"n-input",tagType:"Textarea",__layout__:{span:24},__config__:{type:"textarea",autosize:{minRows:3,maxRows:3}},__slot__:{prefix:"",suffix:""},__rules__:[]},G={__uuid__:"",__vModel__:"",label:"密码",tag:"n-input-group",tagType:"Password",__layout__:{span:24},__config__:{type:"password","show-password-on":"mousedown"},__slot__:{default:{prefix:"","password-invisible-icon":"","password-visible-icon":""},preLabel:"",sufLabel:""},__rules__:[]},ht={Input:F,Textarea:W,Password:G,Number:{__uuid__:"",__vModel__:"",label:"计数器",tag:"n-input-number",tagType:"Number",__layout__:{span:24},__config__:{},__slot__:{"add-icon":"","minus-icon":"",prefix:"",suffix:""},__rules__:[]}},mt=Object.freeze(Object.defineProperty({__proto__:null,Input:F,Password:G,Textarea:W,default:ht},Symbol.toStringTag,{value:"Module"})),K={__uuid__:"",__vModel__:"",label:"下拉选择",tag:"n-select",tagType:"Select",__layout__:{span:24},__config__:{options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},__slot__:{},__rules__:[]},Z={__uuid__:"",__vModel__:"",label:"级联选择",tag:"n-cascader",tagType:"Cascader",__layout__:{span:24},__config__:{options:[{label:"选项A",value:"A",children:[{label:"选项A-1",value:"A-1",children:[{label:"选项A-1-1",value:"A-1-1"},{label:"选项A-1-2",value:"A-1-2"}]},{label:"选项A-2",value:"A-2"}]},{label:"选项B",value:"B",children:[{label:"选项B-1",value:"B-1"},{label:"选项B-2",value:"B-2"}]}]},__slot__:{},__rules__:[]},J={__uuid__:"",__vModel__:"",label:"单选",tag:"n-radio-group",tagType:"Radio",__layout__:{span:24},__config__:{},__slot__:{default:{type:"radio",space:{},options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]}},__rules__:[]},Y={__uuid__:"",__vModel__:"",label:"复选框",tag:"n-checkbox-group",tagType:"Checkbox",__layout__:{span:24},__config__:{},__slot__:{default:{type:"radio",space:{},options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]}},__rules__:[]},Q={__uuid__:"",__vModel__:"",label:"开关",tag:"n-switch",tagType:"Switch",__layout__:{span:24},__config__:{},__slot__:{checked:"",unchecked:"",icon:"","checked-icon":"","unchecked-icon":""},__rules__:[]},X={__uuid__:"",__vModel__:"",label:"滑动选择",tag:"n-slider",tagType:"Slider",__layout__:{span:24},__config__:{},__slot__:{thumb:""},__rules__:[]},__={__uuid__:"",__vModel__:"",label:"时间选择",tag:"n-time-picker",tagType:"Time",__layout__:{span:24},__config__:{},__slot__:{},__rules__:[]},e_={__uuid__:"",__vModel__:"",label:"评分",tag:"n-rate",tagType:"Rate",__layout__:{span:24},__config__:{},__slot__:{default:""},__rules__:[]},t_={__uuid__:"",__vModel__:"",label:"颜色选择",tag:"n-color-picker",tagType:"Color",__layout__:{span:24},__config__:{},__slot__:{label:""},__rules__:[]},wt={Select:K,Cascader:Z,Radio:J,Checkbox:Y,Switch:Q,Slider:X,Date:{__uuid__:"",__vModel__:"",label:"日期选择",tag:"n-date-picker",tagType:"Date",__layout__:{span:24},__config__:{},__slot__:{}},Time:__,Rate:e_,Color:t_},Tt=Object.freeze(Object.defineProperty({__proto__:null,Cascader:Z,Checkbox:Y,Color:t_,Radio:J,Rate:e_,Select:K,Slider:X,Switch:Q,Time:__,default:wt},Symbol.toStringTag,{value:"Module"})),Mt=[{__vModel__:"__vModel__",label:"字段名",tag:"n-input",tagType:"Input",__layout__:{},__config__:{placeholder:"请输入字段名",required:!0},__slot__:{},__rules__:[]},{__vModel__:"label",label:"标题",tag:"n-input",tagType:"Input",__layout__:{},__config__:{placeholder:"请输入标题",required:!0},__slot__:{},__rules__:[]},{__vModel__:"__layout__.span",label:"表单栅格",tag:"n-slider",tagType:"Slider",__layout__:{},__config__:{min:1,max:24},__slot__:{},__rules__:[]},{__vModel__:"__layout__.showLabel",label:"展示标签",tag:"n-switch",tagType:"Switch",__layout__:{},__config__:{"default-value":!0},__slot__:{},__rules__:[]},{__vModel__:"__layout__.labelPlacement",label:"标签位置",tag:"n-radio-group",tagType:"Radio",__layout__:{},__config__:{"default-value":"left"},__slot__:{default:{type:"button",space:{},options:[{value:"left",label:"左置"},{value:"top",label:"上置"}]}},__rules__:[]},{__vModel__:"__layout__.labelAlign",label:"标签对齐",tag:"n-radio-group",tagType:"Radio",__layout__:{},__config__:{"default-value":"left"},__slot__:{default:{type:"button",space:{},options:[{value:"left",label:"左对齐"},{value:"right",label:"右对齐"}]}},__rules__:[]},{__vModel__:"__layout__.labelWidth",label:"标签宽度",tag:"input-unit",tagType:"Input",__layout__:{},__config__:{options:[{value:"px",label:"px"},{value:"em",label:"em"}],clearable:!0},__slot__:{},__rules__:[]},{__vModel__:"__config__.defaultValue",label:"默认值",tag:"n-input",tagType:"Input",__layout__:{},__config__:{clearable:!0},__slot__:{},__rules__:[]},{__vModel__:"__config__.disabled",label:"禁用",tag:"n-switch",tagType:"Switch",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],St=[{__uuid__:"__config__.required",__vModel__:"__config__.required",label:"是否必填",tag:"n-switch",tagType:"Switch",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{"__layout__.showRequireMark"(_,e){e.__layout__.showRequireMark=_}}},{__uuid__:"__layout__.showRequireMark",__vModel__:"__layout__.showRequireMark",label:"展示星号",tag:"n-switch",tagType:"Switch",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{"__config__.required"(_,e){e.__layout__.showRequireMark=_}}},{__uuid__:"__rules__",__vModel__:"__rules__",label:"添加规则",tag:"WidgetRegExp",tagType:"Custom",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{}}],It=Object.freeze(Object.defineProperty({__proto__:null,common:Mt,rules:St},Symbol.toStringTag,{value:"Module"})),Nt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"前缀",tag:"n-input",tagType:"Input",__vModel__:"__slot__.preLabel",__layout__:{},__config__:{placeholder:"请输入前缀",clearable:!0},__slot__:{},__rules__:[]},{label:"后缀",tag:"n-input",tagType:"Input",__vModel__:"__slot__.sufLabel",__layout__:{},__config__:{placeholder:"请输入后缀",clearable:!0},__slot__:{},__rules__:[]},{label:"前图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.prefix",__layout__:{},__config__:{placeholder:"请选择前图标",clearable:!0},__slot__:{},__rules__:[]},{label:"后图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.suffix",__layout__:{},__config__:{placeholder:"请选择后图标",clearable:!0},__slot__:{},__rules__:[]},{label:"最大长度",tag:"input-unit",tagType:"InputUnit",__vModel__:"__config__.maxlength",__layout__:{},__config__:{placeholder:"允许最大字符长度",suffix:"字符",clearable:!0},__slot__:{},__rules__:[]},{label:"是否圆角",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.round",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"显示字数",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showCount",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],Ct=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"最小行数",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.autosize.minRows",__layout__:{},__config__:{defaultValue:3,buttonPlacement:"both",min:1,max:99,step:0},__slot__:{},__rules__:[]},{label:"最大行数",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.autosize.maxRows",__layout__:{},__config__:{defaultValue:3,buttonPlacement:"both",min:1,max:99,step:0},__slot__:{},__rules__:[]},{label:"最大长度",tag:"input-unit",tagType:"InputUnit",__vModel__:"__config__.maxlength",__layout__:{},__config__:{placeholder:"允许最大字符长度",suffix:"字符",clearable:!0},__slot__:{},__rules__:[]},{label:"显示字数",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showCount",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],Pt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"前缀",tag:"n-input",tagType:"Input",__vModel__:"__slot__.preLabel",__layout__:{},__config__:{placeholder:"请输入前缀",clearable:!0},__slot__:{},__rules__:[]},{label:"后缀",tag:"n-input",tagType:"Input",__vModel__:"__slot__.sufLabel",__layout__:{},__config__:{placeholder:"请输入后缀",clearable:!0},__slot__:{},__rules__:[]},{label:"前图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.prefix",__layout__:{},__config__:{placeholder:"请选择前图标",clearable:!0},__slot__:{},__rules__:[]},{label:"关闭图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.password-invisible-icon",__layout__:{},__config__:{placeholder:"密码关闭时图标",clearable:!0},__slot__:{},__rules__:[]},{label:"打开图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.password-visible-icon",__layout__:{},__config__:{placeholder:"密码打开时图标",clearable:!0},__slot__:{},__rules__:[]},{label:"最大长度",tag:"input-unit",tagType:"InputUnit",__vModel__:"__config__.maxlength",__layout__:{},__config__:{placeholder:"允许最大字符长度",suffix:"字符",clearable:!0},__slot__:{},__rules__:[]},{label:"是否圆角",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.round",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],xt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"前图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.default.prefix",__layout__:{},__config__:{placeholder:"请选择前图标",clearable:!0},__slot__:{},__rules__:[]},{label:"后图标",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.suffix",__layout__:{},__config__:{placeholder:"请选择后图标",clearable:!0},__slot__:{},__rules__:[]},{label:"增加按钮",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.add-icon",__layout__:{},__config__:{placeholder:"增加按钮的图标",clearable:!0},__slot__:{},__rules__:[]},{label:"减少按钮",tag:"select-icon",tagType:"SelectIcon",__vModel__:"__slot__.minus-icon",__layout__:{},__config__:{placeholder:"减少按钮的图标",clearable:!0},__slot__:{},__rules__:[]},{label:"最大值",tag:"n-input",tagType:"Input",__vModel__:"__config__.max",__layout__:{},__config__:{allowInput:_=>!_||/^[-]?\d+(\.\d+)?$/.test(_),placeholder:"允许最大值",clearable:!0},__slot__:{},__rules__:[]},{label:"最小值",tag:"n-input",tagType:"Input",__vModel__:"__config__.min",__layout__:{},__config__:{allowInput:_=>!_||/^[-]?\d+(\.\d+)?$/.test(_),placeholder:"允许最小值",clearable:!0},__slot__:{},__rules__:[]},{label:"步长",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.step",__layout__:{},__config__:{placeholder:"请输入步长",clearable:!0,buttonPlacement:"both",min:1,setp:1},__slot__:{},__rules__:[]},{label:"精度",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.precision",__layout__:{},__config__:{placeholder:"请输入精度",clearable:!0,buttonPlacement:"both",min:0,max:9,setp:1},__slot__:{},__rules__:[]},{label:"显示按钮",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showButton",__layout__:{},__config__:{"default-value":!0},__slot__:{},__rules__:[]},{label:"按钮位置",tag:"n-radio-group",tagType:"Radio",__vModel__:"__config__.buttonPlacement",__layout__:{},__config__:{"default-value":"right"},__slot__:{default:{type:"button",space:{},options:[{value:"both",label:"两边"},{value:"right",label:"右侧"}]}},__rules__:[]},{label:"显示边框",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.bordered",__layout__:{},__config__:{"default-value":!0},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],Rt=Object.freeze(Object.defineProperty({__proto__:null,Input:Nt,Number:xt,Password:Pt,Textarea:Ct},Symbol.toStringTag,{value:"Module"}));class $t{events=new Map;constructor(){this.events.clear()}$on(e,l){if(this.events.has(e)){const a=this.events.get(e);this.events.set(e,[...a,l])}else this.events.set(e,[l])}$emit(e,...l){this.events.has(e)&&this.events.get(e).forEach(o=>{o(...l)})}$off(e){return this.events.delete(e)}}const Ot=new $t,kt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"是否过滤",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.filterable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"动态选项",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.tag",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{"__config__.filterable"(_,e){e.__config__.filterable=_}}},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否多选",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.multiple",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"标签数自适应",tag:"n-checkbox",tagType:"Checkbox",hidden:_=>{const{__config__:{multiple:e}}=_;return!!e},__vModel__:"__config__.maxTagCount",__layout__:{},__config__:{checkedValue:"responsive",uncheckedValue:null},__slot__:{},__rules__:[]},{__uuid__:"__config__.options",__vModel__:"__config__.options",label:"添加选项",tag:"WidgetOptions",tagType:"Custom",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{}}],Et=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"勾选策略",tag:"n-radio-group",tagType:"Radio",__vModel__:"__config__.checkStrategy",__layout__:{},__config__:{"default-value":"all"},__slot__:{default:{type:"button",space:{},options:[{value:"all",label:"全部"},{value:"parent",label:"父节点"},{value:"child",label:"子节点"}]}},__rules__:[]},{label:"显示路径",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showPath",__layout__:{},__config__:{"default-value":!0},__slot__:{},__rules__:[]},{label:"是否过滤",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.filterable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否多选",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.multiple",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"标签数自适应",tag:"n-checkbox",tagType:"Checkbox",hidden:_=>{const{__config__:{multiple:e}}=_;return!!e},__vModel__:"__config__.maxTagCount",__layout__:{},__config__:{checkedValue:"responsive",uncheckedValue:null},__slot__:{},__rules__:[]},{label:"关联选项",tag:"n-switch",tagType:"Switch",hidden:_=>{const{__config__:{multiple:e}}=_;return!!e},__vModel__:"__config__.cascade",__layout__:{},__config__:{"default-value":!0},__slot__:{},__rules__:[]},{__uuid__:"__config__.options",__vModel__:"__config__.options",label:"添加选项",tag:"WidgetTreeOptions",tagType:"Custom",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{}}],Lt=[{label:"选项样式",tag:"n-radio-group",tagType:"Radio",__vModel__:"__slot__.default.type",__layout__:{},__config__:{"default-value":"radio"},__slot__:{default:{type:"button",space:{},options:[{value:"radio",label:"默认"},{value:"button",label:"按钮"}]}},__rules__:[]},{__uuid__:"__slot__.default.options",__vModel__:"__slot__.default.options",label:"添加选项",tag:"WidgetOptions",tagType:"Custom",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{}}],At=[{label:"最大数量",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.max",__layout__:{},__config__:{placeholder:"可被勾选的最大数量",clearable:!0,buttonPlacement:"both",min:1,setp:1},__slot__:{},__rules__:[]},{label:"最小数量",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.min",__layout__:{},__config__:{placeholder:"可被勾选的最小数量",clearable:!0,buttonPlacement:"both",min:1,setp:1},__slot__:{},__rules__:[]},{__uuid__:"__slot__.default.options",__vModel__:"__slot__.default.options",label:"添加选项",tag:"WidgetOptions",tagType:"Custom",__layout__:{},__config__:{},__slot__:{},__rules__:[],__emits__:{}}],Vt=[{label:"开启描述",tag:"n-input",tagType:"Input",__vModel__:"__slot__.checked",__layout__:{},__config__:{placeholder:"请输入开启描述",clearable:!0},__slot__:{},__rules__:[]},{label:"关闭描述",tag:"n-input",tagType:"Input",__vModel__:"__slot__.unchecked",__layout__:{},__config__:{placeholder:"请输入关闭描述",clearable:!0},__slot__:{},__rules__:[]},{label:"是否圆形",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.round",__layout__:{},__config__:{defaultValue:!0},__slot__:{},__rules__:[]},{label:"按钮动画",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.rubberBand",__layout__:{},__config__:{defaultValue:!0},__slot__:{},__rules__:[]}],Bt=[{label:"最大值",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.max",__layout__:{},__config__:{placeholder:"最大值",defaultValue:100,buttonPlacement:"both"},__slot__:{},__rules__:[]},{label:"最小值",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.min",__layout__:{},__config__:{placeholder:"最小值",defaultValue:1,buttonPlacement:"both"},__slot__:{},__rules__:[]},{label:"步长",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.step",__layout__:{},__config__:{placeholder:"步长",defaultValue:1,buttonPlacement:"both"},__slot__:{},__rules__:[]},{label:"范围选择",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.range",__layout__:{},__config__:{defaultValue:!1},__slot__:{},__rules__:[],__emits__:{changeDefaultValue(_,e){const{__config__:l}=e,{max:a,min:o}=l,t=_?[o||0,a||100]:o;l.defaultValue=t,Ot.$emit("slider:range",e)}}}],Dt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"日期类型",tag:"n-select",tagType:"Select",__vModel__:"__config__.type",__layout__:{},__config__:{defaultValue:"date",options:[{label:"日期时间(datetime)",value:"datetime"},{label:"日(date)",value:"date"},{label:"月(month)",value:"month"},{label:"年(year)",value:"year"},{label:"季度(quarter)",value:"quarter"}]},__slot__:{},__rules__:[]},{label:"时间格式",tag:"n-input",tagType:"Input",__vModel__:"__config__.valueFormat",__layout__:{},__config__:{placeholder:"例如: yyyy-MM-dd HH:mm:ss",clearable:!0},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"禁用输入框",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.inputReadonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],jt=[{label:"占位提示",tag:"n-input",tagType:"Input",__vModel__:"__config__.placeholder",__layout__:{},__config__:{placeholder:"请输入占位提示",clearable:!0},__slot__:{},__rules__:[]},{label:"时间格式",tag:"n-input",tagType:"Input",__vModel__:"__config__.valueFormat",__layout__:{},__config__:{placeholder:"例如: HH:mm:ss",clearable:!0},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"禁用输入框",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.inputReadonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],Ut=[{label:"允许半选",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.allowHalf",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"前图标",tag:"n-color-picker",tagType:"Color",__vModel__:"__config__.color",__layout__:{},__config__:{defaultValue:"#FFCC33"},__slot__:{},__rules__:[]},{label:"图标个数",tag:"n-input-number",tagType:"Number",__vModel__:"__config__.count",__layout__:{},__config__:{defaultValue:5,clearable:!0,buttonPlacement:"both",min:1,precision:0,setp:1},__slot__:{},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],qt=[{label:"展示透明度",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showAlpha",__layout__:{},__config__:{defaultValue:!0},__slot__:{},__rules__:[]},{label:"展示预览块",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.showPreview",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"支持颜色格式",tag:"n-checkbox-group",tagType:"Checkbox",__vModel__:"__config__.modes",__layout__:{},__config__:{defaultValue:["rgb","hex","hsl"]},__slot__:{default:{type:"button",space:{},options:[{label:"rgb",value:"rgb"},{label:"hex",value:"hex"},{label:"hsl",value:"hsl"},{label:"hsv",value:"hsv"}]}},__rules__:[]},{label:"能否清空",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.clearable",__layout__:{},__config__:{},__slot__:{},__rules__:[]},{label:"是否只读",tag:"n-switch",tagType:"Switch",__vModel__:"__config__.readonly",__layout__:{},__config__:{},__slot__:{},__rules__:[]}],zt=Object.freeze(Object.defineProperty({__proto__:null,Cascader:Et,Checkbox:At,Color:qt,Date:Dt,Radio:Lt,Rate:Ut,Select:kt,Slider:Bt,Switch:Vt,Time:jt},Symbol.toStringTag,{value:"Module"})),Qt=Symbol("leftDraggable"),Xt=Symbol("centerDraggable"),l_={"input-type":{title:"输入型组件",list:[]},"select-type":{title:"选择型组件",list:[]}},R=Object.assign({"./render/input-type.json":mt,"./render/select-type.json":Tt}),o_={};Object.keys(R).forEach(_=>{const{name:e}=at(_),l=R[_].default||{},a=Object.keys(l).map(o=>({text:l[o].label,icon:l[o].tagType}));l_[e].list=a,Object.assign(o_,l)});async function _l(){return Object.values(l_)}function el(_){return o_[_]}const $=Object.assign({"./fields/common.ts":It,"./fields/input-type.ts":Rt,"./fields/select-type.ts":zt}),Ht={};Object.keys($).forEach(_=>{const e=$[_]||{};Object.assign(Ht,e)});const M={},O=Object.assign({"/src/components/global/InputUnit.vue":rt,"/src/components/global/SelectIcon.vue":vt});Object.keys(O).forEach(_=>{const e=O[_].default||{};M[e.name]=e});function Ft(_){Object.keys(M).forEach(e=>{_.component(e,M[e])}),Object.values(Le).map(e=>{_.component(e.name,e)})}function Wt(_){et(_),ot(_),Ft(_)}async function Gt(){const _=Ae(Be);Wt(_),window.$loadingBar.start(),Xe(_),await Ye(_),await T.isReady(),window.$loadingBar.finish(),_.mount("#LcaasFormEditor")}Gt();export{bt as _,el as a,Zt as b,Jt as c,it as d,Ot as e,Ht as f,_l as g,Xt as h,Yt as i,Qt as r,st as t};