(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("input[type=range][data-v-5633207c]::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:10px;width:10px;transform:scale(4);background-color:transparent;border:0;box-shadow:none}input[type=range][data-v-5633207c]::-moz-range-thumb{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:transparent;border:0;box-shadow:none}.ui-input-range__thumb[data-v-5633207c]{top:50%;border-width:12px;box-shadow:0 0 0 4px var(--color-primary)}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import{d as S,k as p,x as T,r as x,o as q,c as C,m as E,y as B,a as r,q as d,p as F,j as P}from"./vue.esm-bundler-GDL5RDDy.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const z=a=>(F("data-v-5633207c"),a=a(),P(),a),D={class:"ui-input-range relative box-content h-xl py-xxs"},N=["min","max","step"],U=z(()=>r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xxs w-full -translate-y-1/2 rounded bg-secondary-alt"},null,-1)),f=S({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,b=l,o=p({get(){return e.modelValue},set(n){b("update:modelValue",n)}});T(()=>[e.min,e.max],()=>{o.value<+e.min?o.value=+e.min:o.value>+e.max&&(o.value=+e.max)});const u=x(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),y=n=>{if(u.value){const t="clientX",{left:i,width:V}=u.value.getBoundingClientRect(),k="touches"in n?n.touches[0][t]:n[t],w=Math.min(Math.max((k-i)/V,0),1)||0,I=parseFloat(String(e.min))+w*(+e.max-+e.min),M=Math.round(I/+e.step)*+e.step;return parseFloat(Math.min(M,+e.max).toFixed(2))}},_=n=>{const t=y(n);t&&(o.value=t)};return(n,t)=>(q(),C("div",D,[E(r("input",{ref_key:"track",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"absolute left-0 top-0 size-full cursor-pointer appearance-none bg-transparent",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:_},null,40,N),[[B,o.value,void 0,{number:!0}]]),U,r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xxs -translate-y-1/2 rounded bg-primary",style:d({width:m.value+"%"})},null,4),r("div",{class:"ui-input-range__thumb pointer-events-none absolute box-content size-xxs -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-primary",style:d({left:m.value+"%"})},null,4)]))}}),h=R(f,[["__scopeId","data-v-5633207c"]]);f.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const j={title:"Components/ui-input-range",component:h,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},s={render:a=>({components:{UiInputRange:h},setup(){const l=x(50);return{args:a,modelValue:l}},template:`
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
