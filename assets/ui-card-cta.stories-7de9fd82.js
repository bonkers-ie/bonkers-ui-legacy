import{d as y,o as s,e as d,l as h,k as o,f as i,j as n,q as v,u as e,v as l,g as c}from"./vue.esm-bundler-9a4beff8.js";import{a as m,b as C,_ as p,E as k}from"./ui-typography-43c7c98a.js";import{E as w,_ as E}from"./ui-icon-ee9e3f6c.js";import{U as N}from"./ui-icon-wrapper-9cbb4628.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const T=["disabled"],_=y({__name:"ui-card-cta",props:{invertOrder:{type:Boolean},disabled:{type:Boolean},iconName:null},setup(a){return(t,S)=>(s(),d("button",{class:"ui-card-cta w-full outline-0 border border-secondary-alt-500 rounded-2xl p-sm shadow-md bg-white hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:bg-secondary-alt-200 disabled:pointer-events-none",disabled:a.disabled},[h("span",{class:c(["ui-card-cta__wrapper w-full grid gap-sm items-center",[a.invertOrder&&"ui-card-cta_inverted"]])},[o(t.$slots,"icon",{},()=>[i(e(N),null,{default:n(()=>[a.iconName?(s(),v(e(E),{key:0,"icon-name":a.iconName,size:e(w).MD,class:"text-secondary-700"},null,8,["icon-name","size"])):l("",!0)]),_:1})],!0),t.$slots.title&&t.$slots.description?(s(),d("span",{key:0,class:c(["w-full",a.invertOrder&&"order-first"])},[i(e(p),{kind:e(m).SECONDARY,weight:e(C).SEMI_BOLD,class:"mb-xxs","line-height":""},{default:n(()=>[o(t.$slots,"title",{},void 0,!0)]),_:3},8,["kind","weight"]),i(e(p),{kind:e(m).SECONDARY_300,size:e(k).SM,"line-height":""},{default:n(()=>[o(t.$slots,"description",{},void 0,!0)]),_:3},8,["kind","size"])],2)):l("",!0)],2)],8,T))}});const g=O(_,[["__scopeId","data-v-b0ebe78d"]]);_.__docgenInfo={exportName:"default",displayName:"ui-card-cta",description:"",tags:{},props:[{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconName",required:!1,type:{name:"TIconName"}}],slots:[{name:"icon"},{name:"title"},{name:"description"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-cta/ui-card-cta.vue"]};const q={title:"Components/ui-card-cta",component:g,argTypes:{invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The full width size"}},args:{slot:"Description",invertOrder:!1,disabled:!1}},z=a=>({components:{UiCardCta:g},setup(){return{args:a}},template:`
        <ui-card-cta v-bind="args" :icon-name="['far', 'face-smile']">
            <template #title>
                Title
            </template>

            <template #description>
                {{args.slot}}
            </template>
        </ui-card-cta>
        `}),r=z.bind({});var u,f,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    UiCardCta
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <ui-card-cta v-bind="args" :icon-name="['far', 'face-smile']">
            <template #title>
                Title
            </template>

            <template #description>
                {{args.slot}}
            </template>
        </ui-card-cta>
        \`
})`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,q as default};
//# sourceMappingURL=ui-card-cta.stories-7de9fd82.js.map
