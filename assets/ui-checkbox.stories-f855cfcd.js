import{d as x,x as g,c as j,o as i,e as c,y as w,z as E,u as t,l as n,A as V,g as m,k as _,v as C,B as T,C as B,a as N}from"./vue.esm-bundler-9a4beff8.js";import{E as o}from"./align-e22983df.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const O=e=>(T("data-v-675cda64"),e=e(),B(),e),A=["value","disabled"],q=O(()=>n("svg",{class:"ui-checkbox__icon text-white",width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round"})],-1)),D=[q],I={key:0,class:"ui-checkbox__slot-wrapper"},f=x({__name:"ui-checkbox",props:{modelValue:{type:[Boolean,Array]},justify:null,invertOrder:{type:Boolean},disabled:{type:Boolean},value:null},emits:["update:modelValue"],setup(e,{emit:a}){const k=e,d=g(),r=j({get(){return k.modelValue},set(l){a("update:modelValue",l)}});return(l,u)=>(i(),c("label",{class:m(["ui-checkbox grid cursor-pointer",[t(d).default&&"items-center gap-sm",(!e.justify||e.justify===t(o).START)&&"justify-start",e.justify===t(o).END&&"justify-end",e.justify===t(o).AROUND&&"justify-around",e.justify===t(o).BETWEEN&&"justify-between",e.justify===t(o).EVENLY&&"justify-evenly",e.justify===t(o).CENTER&&"justify-center",e.disabled&&"ui-checkbox_disabled"]])},[w(n("input",{"onUpdate:modelValue":u[0]||(u[0]=v=>V(r)?r.value=v:null),class:"appearance-none absolute",type:"checkbox",value:e.value,disabled:e.disabled},null,8,A),[[E,t(r)]]),n("span",{class:m(["ui-checkbox_custom w-md h-md flex items-center justify-center border border-secondary-alt-500 rounded relative hover:border-secondary-alt-700",e.invertOrder&&"order-last"])},D,2),t(d).default?(i(),c("span",I,[_(l.$slots,"default",{},void 0,!0)])):C("",!0)],2))}});const y=S(f,[["__scopeId","data-v-675cda64"]]);f.__docgenInfo={exportName:"default",displayName:"ui-checkbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"unknown"}]}]}},{name:"justify",required:!1,type:{name:"EJustify"}},{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["unknown"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-checkbox/ui-checkbox.vue"]};const $={title:"Components/ui-checkbox",component:y,argTypes:{justify:{control:{type:"select"},options:Object.values(o),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},modelValue:{control:{type:"boolean"},description:"The Element disabled state"}},args:{slot:"Some text",justify:o.START,invertOrder:!1,disabled:!1,modelValue:!1}},R=e=>({components:{UiCheckbox:y},setup(){const a=N(!0);return{args:e,modelValue:a}},template:`
        <ui-checkbox v-bind="args" v-model="modelValue">
            ${e.slot}
        </ui-checkbox>
    `}),s=R.bind({});var p,b,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const z=["Default"];export{s as Default,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=ui-checkbox.stories-f855cfcd.js.map
