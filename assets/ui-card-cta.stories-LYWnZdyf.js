import{I as y}from"./CONSTANTS-xk2BJiFJ.js";import{e as N,o as i,g as S,j as n,p as o,z as s,n as t,k as h,l as a,m as k,q as d,s as l,t as c}from"./vue.esm-bundler-26GhoP0B.js";import{d as m}from"./index-hJfbsusS.js";import{d as C}from"./index-umElUeEY.js";import{U as D}from"./ui-icon-wrapper-6GCNJNeJ.js";import{E as p,d as E}from"./ui-typography-a0Uot2md.js";import{E as O}from"./ui-icon-El7tnX69.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const _=D,v=["disabled"],g=N({__name:"ui-card-cta",props:{invertOrder:{type:Boolean},disabled:{type:Boolean},iconName:{},title:{},description:{}},setup(w){return(e,z)=>(i(),S("button",{class:"ui-card-cta group w-full rounded-2xl border border-secondary-alt-500 bg-white p-sm text-left shadow-md outline-0 hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:pointer-events-none disabled:bg-secondary-alt-200",disabled:e.disabled},[n("span",{class:d(["group-disabled:opcity-50 grid w-full items-center gap-sm",{"grid-cols-[auto,1fr]":!e.invertOrder,"grid-cols-[1fr,auto]":e.invertOrder}])},[o(e.$slots,"iconSlot",{},()=>[s(a(_),null,{default:t(()=>[e.iconName?(i(),h(a(C),{key:0,"icon-name":e.iconName,size:a(O).SM,class:"text-secondary-400"},null,8,["icon-name","size"])):k("",!0)]),_:1})]),n("span",{class:d(["w-full",e.invertOrder&&"order-first"])},[o(e.$slots,"titleSlot",{},()=>[s(a(m),{kind:a(p).SECONDARY_400,class:"mb-xxs","line-height":""},{default:t(()=>[l(c(e.title),1)]),_:1},8,["kind"])]),o(e.$slots,"descriptionSlot",{},()=>[s(a(m),{kind:a(p).SECONDARY_300,size:a(E).SM,"line-height":""},{default:t(()=>[l(c(e.description),1)]),_:1},8,["kind","size"])])],2)],2)],8,v))}});g.__docgenInfo={exportName:"default",displayName:"ui-card-cta",description:"",tags:{},props:[{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"iconSlot"},{name:"titleSlot"},{name:"descriptionSlot"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-cta/ui-card-cta.vue"]};const F={title:"Components/ui-card-cta",component:g,args:{invertOrder:!1,disabled:!1,title:"Title",description:"Description"}},r={args:{iconName:y}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,F as default};
