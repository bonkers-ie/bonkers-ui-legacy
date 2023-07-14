import{d as y,o as r,e as d,f as v,k as s,q as o,w as i,g as h,i as a,j as l,n as c}from"./vue.esm-bundler-a43e9918.js";import{E as p,_ as m,d as C}from"./ui-typography-debf4260.js";import{E as k,_ as N}from"./ui-icon-88d80b57.js";import{U as w}from"./ui-icon-wrapper-e38962e5.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const O=["disabled"],b=y({__name:"ui-card-cta",props:{invertOrder:{type:Boolean},disabled:{type:Boolean},iconName:{}},setup(n){return(e,S)=>(r(),d("button",{class:"ui-card-cta w-full rounded-2xl border border-secondary-alt-500 bg-white p-sm shadow-md outline-0 hover:border-secondary-700 focus:shadow-border-primary active:bg-secondary-alt-200 disabled:pointer-events-none disabled:bg-secondary-alt-200",disabled:e.disabled},[v("span",{class:c(["ui-card-cta__wrapper grid w-full items-center gap-sm",[e.invertOrder&&"ui-card-cta_inverted"]])},[s(e.$slots,"icon",{},()=>[o(a(w),null,{default:i(()=>[e.iconName?(r(),h(a(N),{key:0,"icon-name":e.iconName,size:a(k).SM,class:"text-secondary-400"},null,8,["icon-name","size"])):l("",!0)]),_:1})],!0),e.$slots.title&&e.$slots.description?(r(),d("span",{key:0,class:c(["w-full",e.invertOrder&&"order-first"])},[o(a(m),{kind:a(p).SECONDARY_400,class:"mb-xxs","line-height":""},{default:i(()=>[s(e.$slots,"title",{},void 0,!0)]),_:3},8,["kind"]),o(a(m),{kind:a(p).SECONDARY_300,size:a(C).SM,"line-height":""},{default:i(()=>[s(e.$slots,"description",{},void 0,!0)]),_:3},8,["kind","size"])],2)):l("",!0)],2)],8,O))}});const g=E(b,[["__scopeId","data-v-34a253d1"]]);b.__docgenInfo={exportName:"default",displayName:"ui-card-cta",description:"",tags:{},props:[{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"iconName",required:!1,type:{name:"TIconName"}}],slots:[{name:"icon"},{name:"title"},{name:"description"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-cta/ui-card-cta.vue"]};const I={title:"Components/ui-card-cta",component:g,argTypes:{invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The full width size"}},args:{slot:"Description",invertOrder:!1,disabled:!1}},z=n=>({components:{UiCardCta:g},setup(){return{args:n}},template:`
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
})`,...(_=(f=t.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,I as default};
//# sourceMappingURL=ui-card-cta.stories-67ff2c3f.js.map
