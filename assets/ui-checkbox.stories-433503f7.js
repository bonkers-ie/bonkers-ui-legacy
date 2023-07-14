import{d as _,u as g,b as j,o as u,e as c,p as x,z as E,f as a,n as p,i as t,k as V,j as w,A as T,B as C,a as S}from"./vue.esm-bundler-a43e9918.js";import{E as s}from"./align-e22983df.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const N=o=>(T("data-v-1bc5e146"),o=o(),C(),o),O=["value","disabled"],A=N(()=>a("svg",{class:"ui-checkbox__icon text-white",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round"})],-1)),q=[A],D={key:0,class:"ui-checkbox__slot-wrapper"},y=_({__name:"ui-checkbox",props:{modelValue:{type:[Boolean,Array]},justify:{},invertOrder:{type:Boolean},disabled:{type:Boolean},value:{}},emits:["update:modelValue"],setup(o,{emit:r}){const v=o,l=g(),i=j({get(){return v.modelValue},set(e){r("update:modelValue",e)}});return(e,d)=>(u(),c("label",{class:p(["ui-checkbox grid cursor-pointer",[t(l).default&&"items-center gap-sm",(!e.justify||e.justify===t(s).START)&&"justify-start",e.justify===t(s).END&&"justify-end",e.justify===t(s).AROUND&&"justify-around",e.justify===t(s).BETWEEN&&"justify-between",e.justify===t(s).EVENLY&&"justify-evenly",e.justify===t(s).CENTER&&"justify-center",e.disabled&&"ui-checkbox_disabled"]])},[x(a("input",{"onUpdate:modelValue":d[0]||(d[0]=k=>i.value=k),class:"absolute appearance-none",type:"checkbox",value:e.value,disabled:e.disabled},null,8,O),[[E,i.value]]),a("span",{class:p(["ui-checkbox_custom relative flex h-md w-md items-center justify-center rounded border border-secondary-alt-500 hover:border-secondary-alt-700",e.invertOrder&&"order-last"])},q,2),t(l).default?(u(),c("span",D,[V(e.$slots,"default",{},void 0,!0)])):w("",!0)],2))}});const f=B(y,[["__scopeId","data-v-1bc5e146"]]);y.__docgenInfo={exportName:"default",displayName:"ui-checkbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"unknown"}]}]}},{name:"justify",required:!1,type:{name:"EJustify"}},{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["TSTypeQuery"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-checkbox/ui-checkbox.vue"]};const M={title:"Components/ui-checkbox",component:f,argTypes:{justify:{control:{type:"select"},options:Object.values(s),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},modelValue:{control:{type:"boolean"},description:"The Element disabled state"}},args:{slot:"Some text",justify:s.START,invertOrder:!1,disabled:!1,modelValue:!1}},I=o=>({components:{UiCheckbox:f},setup(){const r=S(!0);return{args:o,modelValue:r}},template:`
        <ui-checkbox v-bind="args" v-model="modelValue">
            ${o.slot}
        </ui-checkbox>
    `}),n=I.bind({});var m,b,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,M as default};
//# sourceMappingURL=ui-checkbox.stories-433503f7.js.map
