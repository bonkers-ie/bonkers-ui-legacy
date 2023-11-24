(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("input[type=range][data-v-5ac339bd]::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:10px;width:10px;transform:scale(4);background-color:transparent;border:0;box-shadow:none}input[type=range][data-v-5ac339bd]::-moz-range-thumb{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;border:0;box-shadow:none}.ui-input-range__thumb[data-v-5ac339bd]{top:50%;border-width:12px;box-shadow:0 0 0 4px var(--color-primary)}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{e as S,f as p,w as T,b,o as q,g as C,q as E,I as R,p as r,G as d,z as B,A as F}from"./vue.esm-bundler-5815757d.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const D=a=>(B("data-v-5ac339bd"),a=a(),F(),a),N={class:"ui-input-range relative box-content h-lg py-xs"},U=["min","max","step"],z=D(()=>r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs w-full -translate-y-1/2 rounded bg-secondary-alt"},null,-1)),x=S({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,_=l,o=p({get(){return e.modelValue},set(n){_("update:modelValue",n)}});T(()=>[e.min,e.max],()=>{o.value<+e.min?o.value=+e.min:o.value>+e.max&&(o.value=+e.max)});const u=b(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),h=n=>{if(u.value){const t="clientX",{left:i,width:V}=u.value.getBoundingClientRect(),w="touches"in n?n.touches[0][t]:n[t],k=Math.min(Math.max((w-i)/V,0),1)||0,I=parseFloat(String(e.min))+k*(+e.max-+e.min),M=Math.round(I/+e.step)*+e.step;return parseFloat(Math.min(M,+e.max).toFixed(2))}},y=n=>{const t=h(n);t&&(o.value=t)};return(n,t)=>(q(),C("div",N,[E(r("input",{ref_key:"track",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"absolute left-0 top-0 h-full w-full cursor-pointer appearance-none bg-transparent",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:y},null,40,U),[[R,o.value,void 0,{number:!0}]]),z,r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs -translate-y-1/2 rounded bg-primary",style:d({width:m.value+"%"})},null,4),r("div",{class:"ui-input-range__thumb pointer-events-none absolute box-content h-xs w-xs -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-primary",style:d({left:m.value+"%"})},null,4)]))}});const f=P(x,[["__scopeId","data-v-5ac339bd"]]);x.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const G={title:"Components/ui-input-range",component:f,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},L=a=>({components:{UiInputRange:f},setup(){const l=b(50);return{args:a,modelValue:l}},template:`
        <div :style="{border: '1px solid'}">
            <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        </div>
        <div>{{ modelValue }}</div>
    `}),s=L.bind({});var c,v,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    UiInputRange
  },
  setup() {
    const modelValue = ref(50);
    return {
      args,
      modelValue
    };
  },
  template: /*html*/\`
        <div :style="{border: '1px solid'}">
            <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        </div>
        <div>{{ modelValue }}</div>
    \`
})`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=ui-input-range.stories-3d241e7b.js.map
