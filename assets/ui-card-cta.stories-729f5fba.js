import{I as y}from"./CONSTANTS-3fd880c0.js";import{e as N,o as i,g as _,p as n,j as s,y as o,l as t,k as S,u as a,n as h,s as l,m as d,t as c}from"./vue.esm-bundler-1895b176.js";import{E as m,_ as p,d as k}from"./ui-typography-84ab155b.js";import{E as C,_ as O}from"./ui-icon-e8740ef7.js";import{U as v}from"./ui-icon-wrapper-0e9df003.js";import"./_plugin-vue_export-helper-c27b6911.js";const D=["disabled"],g=N({__name:"ui-card-cta",props:{invertOrder:{type:Boolean},disabled:{type:Boolean},iconName:{},title:{},description:{}},setup(E){return(e,w)=>(i(),_("button",{class:"ui-card-cta group w-full rounded-2xl border border-secondary-alt-500 bg-white p-sm text-left shadow-md outline-0 hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:pointer-events-none disabled:bg-secondary-alt-200",disabled:e.disabled},[n("span",{class:l(["group-disabled:opcity-50 grid w-full items-center gap-sm",{"grid-cols-[auto,1fr]":!e.invertOrder,"grid-cols-[1fr,auto]":e.invertOrder}])},[s(e.$slots,"iconSlot",{},()=>[o(a(v),null,{default:t(()=>[e.iconName?(i(),S(a(O),{key:0,"icon-name":e.iconName,size:a(C).SM,class:"text-secondary-400"},null,8,["icon-name","size"])):h("",!0)]),_:1})]),n("span",{class:l(["w-full",e.invertOrder&&"order-first"])},[s(e.$slots,"titleSlot",{},()=>[o(a(p),{kind:a(m).SECONDARY_400,class:"mb-xxs","line-height":""},{default:t(()=>[d(c(e.title),1)]),_:1},8,["kind"])]),s(e.$slots,"descriptionSlot",{},()=>[o(a(p),{kind:a(m).SECONDARY_300,size:a(k).SM,"line-height":""},{default:t(()=>[d(c(e.description),1)]),_:1},8,["kind","size"])])],2)],2)],8,D))}});g.__docgenInfo={exportName:"default",displayName:"ui-card-cta",description:"",tags:{},props:[{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"iconSlot"},{name:"titleSlot"},{name:"descriptionSlot"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-cta/ui-card-cta.vue"]};const A={title:"Components/ui-card-cta",component:g},r={args:{iconName:y,slot:"Description",invertOrder:!1,disabled:!1,title:"Title",description:"Description"}};var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT,
    slot: "Description",
    invertOrder: false,
    disabled: false,
    title: "Title",
    description: "Description"
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,A as default};
//# sourceMappingURL=ui-card-cta.stories-729f5fba.js.map
