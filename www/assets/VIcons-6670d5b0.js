import{i as r}from"./index-8a626086.js";import{d as c,bc as l,aP as u,ay as e,S as m,T as d,R as p,aN as v}from"./vendor-bfdd7a88.js";const f=Object.values(v),b=c({name:"VIcons",props:{size:{type:Number,default:100}},emits:["select"],setup(i,{emit:o}){const a=l([]),t=r(Object.values(f),i.size),n=()=>{a.value=[...a.value,...t.shift()],t.length&&requestAnimationFrame(()=>{n()})};return u(()=>{n()}),()=>e(p,{cols:10,xGap:2,yGap:2},()=>a.value.map(s=>e(m,{},()=>e("div",{class:"v-icon",onClick(){o("select",s.name)}},[e(d,{size:20,component:s,depth:2}),e("span",{class:"v-icon-text",title:s.name},s.name)]))))}});export{b as default};
