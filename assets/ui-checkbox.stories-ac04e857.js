import{e as _,A as g,f as j,o as u,g as c,q as x,G as E,p as a,s as p,u as o,j as V,n as w,D as T,E as C,b as S}from"./vue.esm-bundler-052d1dbc.js";import{E as s}from"./align-e22983df.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const B=t=>(T("data-v-1bc5e146"),t=t(),C(),t),O=["value","disabled"],A=B(()=>a("svg",{class:"ui-checkbox__icon text-white",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round"})],-1)),q=[A],D={key:0,class:"ui-checkbox__slot-wrapper"},f=_({__name:"ui-checkbox",props:{modelValue:{type:[Boolean,Array]},justify:{},invertOrder:{type:Boolean},disabled:{type:Boolean},value:{}},emits:["update:modelValue"],setup(t,{emit:r}){const v=t,l=g(),d=j({get(){return v.modelValue},set(e){r("update:modelValue",e)}});return(e,i)=>(u(),c("label",{class:p(["ui-checkbox grid cursor-pointer",[o(l).default&&"items-center gap-sm",(!e.justify||e.justify===o(s).START)&&"justify-start",e.justify===o(s).END&&"justify-end",e.justify===o(s).AROUND&&"justify-around",e.justify===o(s).BETWEEN&&"justify-between",e.justify===o(s).EVENLY&&"justify-evenly",e.justify===o(s).CENTER&&"justify-center",e.disabled&&"ui-checkbox_disabled"]])},[x(a("input",{"onUpdate:modelValue":i[0]||(i[0]=k=>d.value=k),class:"absolute appearance-none",type:"checkbox",value:e.value,disabled:e.disabled},null,8,O),[[E,d.value]]),a("span",{class:p(["ui-checkbox_custom relative flex h-md w-md items-center justify-center rounded border border-secondary-alt-500 hover:border-secondary-alt-700",e.invertOrder&&"order-last"])},q,2),o(l).default?(u(),c("span",D,[V(e.$slots,"default",{},void 0,!0)])):w("",!0)],2))}});const h=N(f,[["__scopeId","data-v-1bc5e146"]]);f.__docgenInfo={exportName:"default",displayName:"ui-checkbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"unknown"}]}]}},{name:"justify",required:!1,type:{name:"EJustify"}},{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["TSTypeQuery"]}}],slots:[{name:"default"}],sourceFiles:["/mnt/e/Projects/bonkers-ui/src/components/ui-checkbox/ui-checkbox.vue"]};const M={title:"Components/ui-checkbox",component:h,argTypes:{justify:{control:{type:"select"},options:Object.values(s),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},modelValue:{control:{type:"boolean"},description:"The Element disabled state"}},args:{slot:"Some text",justify:s.START,invertOrder:!1,disabled:!1,modelValue:!1}},I=t=>({components:{UiCheckbox:h},setup(){const r=S(!0);return{args:t,modelValue:r}},template:`
        <ui-checkbox v-bind="args" v-model="modelValue">
            ${t.slot}
        </ui-checkbox>
    `}),n=I.bind({});var m,b,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    UiCheckbox
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    const modelValue = ref(true);
    return {
      args,
      modelValue
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
        <ui-checkbox v-bind="args" v-model="modelValue">
            \${args.slot}
        </ui-checkbox>
    \`
})`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,M as default};
//# sourceMappingURL=ui-checkbox.stories-ac04e857.js.map
