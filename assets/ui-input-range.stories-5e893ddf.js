import{d as M,c as p,a as _,o as S,e as T,z as C,D as E,l as s,E as d,B,C as R}from"./vue.esm-bundler-fe4d70d2.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const z=t=>(B("data-v-5ee46d7f"),t=t(),R(),t),D={class:"ui-input-range relative h-lg mx-xs py-xs box-content"},F=["min","max","step"],P=z(()=>s("div",{class:"ui-input-range__line h-xs w-full bg-secondary-alt rounded absolute left-0 -z-10 -translate-y-1/2"},null,-1)),f=M({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(t,{emit:r}){const e=t,u=p({get(){return e.modelValue},set(n){r("update:modelValue",n)}}),l=_(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),h=n=>{if(l.value){const a="clientX",{left:i,width:y}=l.value.getBoundingClientRect(),V="touches"in n?n.touches[0][a]:n[a],k=Math.min(Math.max((V-i)/y,0),1)||0,I=parseFloat(String(e.min))+k*(+e.max-+e.min),w=Math.round(I/+e.step)*+e.step;return parseFloat(Math.min(w,+e.max).toFixed(2))}},b=n=>{u.value=h(n)||0};return(n,a)=>(S(),T("div",D,[C(s("input",{ref_key:"track",ref:l,"onUpdate:modelValue":a[0]||(a[0]=i=>u.value=i),class:"appearance-none absolute top-0 left-0 cursor-pointer bg-transparent w-full h-full",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:b},null,40,F),[[E,u.value,void 0,{number:!0}]]),P,s("div",{class:"ui-input-range__line h-xs bg-primary rounded absolute left-0 -z-10 -translate-y-1/2",style:d({width:m.value+"%"})},null,4),s("div",{class:"ui-input-range__thumb w-xs h-xs bg-primary absolute border-white rounded-full box-content -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:d({left:m.value+"%"})},null,4)]))}});const x=q(f,[["__scopeId","data-v-5ee46d7f"]]);f.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const O={title:"Components/ui-input-range",component:x,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},N=t=>({components:{UiInputRange:x},setup(){const r=_(50);return{args:t,modelValue:r}},template:`
        <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        <div>{{ modelValue }}</div>
    `}),o=N.bind({});var c,g,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
  template: \`
        <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        <div>{{ modelValue }}</div>
    \`
})`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,O as default};
//# sourceMappingURL=ui-input-range.stories-5e893ddf.js.map
