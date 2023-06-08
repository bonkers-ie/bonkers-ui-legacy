import{d as y,o as r,e as d,l as h,k as s,f as o,j as i,v,u as a,x as l,g as c}from"./vue.esm-bundler-fe4d70d2.js";import{a as p,b as C,_ as m,E as k}from"./ui-typography-3ebb5017.js";import{E as w,_ as E}from"./ui-icon-05de86ac.js";import{U as N}from"./ui-icon-wrapper-817ed969.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const T=["disabled"],b=y({__name:"ui-card-cta",props:{invertOrder:{type:Boolean},disabled:{type:Boolean},iconName:{}},setup(n){return(e,S)=>(r(),d("button",{class:"ui-card-cta w-full outline-0 border border-secondary-alt-500 rounded-2xl p-sm shadow-md bg-white hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:bg-secondary-alt-200 disabled:pointer-events-none",disabled:e.disabled},[h("span",{class:c(["ui-card-cta__wrapper w-full grid gap-sm items-center",[e.invertOrder&&"ui-card-cta_inverted"]])},[s(e.$slots,"icon",{},()=>[o(a(N),null,{default:i(()=>[e.iconName?(r(),v(a(E),{key:0,"icon-name":e.iconName,size:a(w).MD,class:"text-secondary-700"},null,8,["icon-name","size"])):l("",!0)]),_:1})],!0),e.$slots.title&&e.$slots.description?(r(),d("span",{key:0,class:c(["w-full",e.invertOrder&&"order-first"])},[o(a(m),{kind:a(p).SECONDARY,weight:a(C).SEMI_BOLD,class:"mb-xxs","line-height":""},{default:i(()=>[s(e.$slots,"title",{},void 0,!0)]),_:3},8,["kind","weight"]),o(a(m),{kind:a(p).SECONDARY_300,size:a(k).SM,"line-height":""},{default:i(()=>[s(e.$slots,"description",{},void 0,!0)]),_:3},8,["kind","size"])],2)):l("",!0)],2)],8,T))}});const g=O(b,[["__scopeId","data-v-b0ebe78d"]]);b.__docgenInfo={exportName:"default",displayName:"ui-card-cta",description:"",tags:{},props:[{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconName",required:!1,type:{name:"TIconName"}}],slots:[{name:"icon"},{name:"title"},{name:"description"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-cta/ui-card-cta.vue"]};const q={title:"Components/ui-card-cta",component:g,argTypes:{invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The full width size"}},args:{slot:"Description",invertOrder:!1,disabled:!1}},z=n=>({components:{UiCardCta:g},setup(){return{args:n}},template:`
        <ui-card-cta v-bind="args" :icon-name="['far', 'face-smile']">
            <template #title>
                Title
            </template>

            <template #description>
                {{args.slot}}
            </template>
        </ui-card-cta>
        `}),t=z.bind({});var u,f,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,q as default};
//# sourceMappingURL=ui-card-cta.stories-aebcae9d.js.map
