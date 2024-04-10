(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("input[type=range][data-v-196548ca]::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:10px;width:10px;transform:scale(4);background-color:transparent;border:0;box-shadow:none}input[type=range][data-v-196548ca]::-moz-range-thumb{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;border:0;box-shadow:none}.ui-input-range__thumb[data-v-196548ca]{top:50%;border-width:12px;box-shadow:0 0 0 4px var(--color-primary)}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{d as S,c as p,y as T,r as x,o as q,a as C,k as E,z,b as r,j as d,p as B,q as F}from"./vue.esm-bundler-BKa0CVN1.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R=a=>(B("data-v-196548ca"),a=a(),F(),a),D={class:"ui-input-range relative box-content h-lg py-xs"},N=["min","max","step"],U=R(()=>r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs w-full -translate-y-1/2 rounded bg-secondary-alt"},null,-1)),f=S({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,h=l,o=p({get(){return e.modelValue},set(n){h("update:modelValue",n)}});T(()=>[e.min,e.max],()=>{o.value<+e.min?o.value=+e.min:o.value>+e.max&&(o.value=+e.max)});const u=x(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),y=n=>{if(u.value){const t="clientX",{left:i,width:V}=u.value.getBoundingClientRect(),k="touches"in n?n.touches[0][t]:n[t],w=Math.min(Math.max((k-i)/V,0),1)||0,I=parseFloat(String(e.min))+w*(+e.max-+e.min),M=Math.round(I/+e.step)*+e.step;return parseFloat(Math.min(M,+e.max).toFixed(2))}},_=n=>{const t=y(n);t&&(o.value=t)};return(n,t)=>(q(),C("div",D,[E(r("input",{ref_key:"track",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:_},null,40,N),[[z,o.value,void 0,{number:!0}]]),U,r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs -translate-y-1/2 rounded bg-primary",style:d({width:m.value+"%"})},null,4),r("div",{class:"ui-input-range__thumb pointer-events-none absolute box-content size-xs -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-primary",style:d({left:m.value+"%"})},null,4)]))}}),b=P(f,[["__scopeId","data-v-196548ca"]]);f.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const j={title:"Components/ui-input-range",component:b,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},s={render:a=>({components:{UiInputRange:b},setup(){const l=x(50);return{args:a,modelValue:l}},template:`
            <div :style="{border: '1px solid'}">
                <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
            </div>
            <div>{{ modelValue }}</div>
        `})};var c,v,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
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
  })
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,j as default};
