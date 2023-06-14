import{d as M,c as p,a as _,o as S,e as T,z as C,D as E,l as s,E as d,B,C as R}from"./vue.esm-bundler-fe4d70d2.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const D=t=>(B("data-v-867e8e13"),t=t(),R(),t),F={class:"ui-input-range relative h-lg py-xs box-content"},P=["min","max","step"],N=D(()=>s("div",{class:"h-xs w-full bg-secondary-alt rounded absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"},null,-1)),b=M({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(t,{emit:r}){const e=t,l=p({get(){return e.modelValue},set(n){r("update:modelValue",n)}}),i=_(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),x=n=>{if(i.value){const a="clientX",{left:u,width:f}=i.value.getBoundingClientRect(),V="touches"in n?n.touches[0][a]:n[a],I=Math.min(Math.max((V-u)/f,0),1)||0,k=parseFloat(String(e.min))+I*(+e.max-+e.min),w=Math.round(k/+e.step)*+e.step;return parseFloat(Math.min(w,+e.max).toFixed(2))}},y=n=>{l.value=x(n)||0};return(n,a)=>(S(),T("div",F,[C(s("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>l.value=u),class:"appearance-none absolute top-0 left-0 cursor-pointer bg-transparent w-full h-full",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:y},null,40,P),[[E,l.value,void 0,{number:!0}]]),N,s("div",{class:"h-xs bg-primary rounded absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none",style:d({width:m.value+"%"})},null,4),s("div",{class:"ui-input-range__thumb w-xs h-xs bg-primary absolute border-white rounded-full box-content -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:d({left:m.value+"%"})},null,4)]))}});const h=q(b,[["__scopeId","data-v-867e8e13"]]);b.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const O={title:"Components/ui-input-range",component:h,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},U=t=>({components:{UiInputRange:h},setup(){const r=_(50);return{args:t,modelValue:r}},template:`
        <div :style="{border: '1px solid'}">
            <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        </div>
        <div>{{ modelValue }}</div>
    `}),o=U.bind({});var c,v,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,O as default};
//# sourceMappingURL=ui-input-range.stories-3dd2b90e.js.map
