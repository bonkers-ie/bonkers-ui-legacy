import{d as S,c as d,a as x,o as T,e as C,y as E,D as R,u as m,l as r,A as B,E as c,B as q,C as D}from"./vue.esm-bundler-9a4beff8.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const P=n=>(q("data-v-5ee46d7f"),n=n(),D(),n),z={class:"ui-input-range relative h-lg mx-xs py-xs box-content"},N=["min","max","step"],U=P(()=>r("div",{class:"ui-input-range__line h-xs w-full bg-secondary-alt rounded absolute left-0 -z-10 -translate-y-1/2"},null,-1)),_=S({__name:"ui-input-range",props:{modelValue:null,min:null,max:null,step:null},emits:["update:modelValue"],setup(n,{emit:u}){const e=n,o=d({get(){return e.modelValue},set(t){u("update:modelValue",t)}}),l=x(),p=d(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),b=t=>{if(l.value){const a="clientX",{left:i,width:V}=l.value.getBoundingClientRect(),k="touches"in t?t.touches[0][a]:t[a],I=Math.min(Math.max((k-i)/V,0),1)||0,w=parseFloat(String(e.min))+I*(+e.max-+e.min),M=Math.round(w/+e.step)*+e.step;return parseFloat(Math.min(M,+e.max).toFixed(2))}},y=t=>{o.value=b(t)||0};return(t,a)=>(T(),C("div",z,[E(r("input",{ref_key:"track",ref:l,"onUpdate:modelValue":a[0]||(a[0]=i=>B(o)?o.value=i:null),class:"appearance-none absolute top-0 left-0 cursor-pointer bg-transparent w-full h-full",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:y},null,40,N),[[R,m(o),void 0,{number:!0}]]),U,r("div",{class:"ui-input-range__line h-xs bg-primary rounded absolute left-0 -z-10 -translate-y-1/2",style:c({width:m(p)+"%"})},null,4),r("div",{class:"ui-input-range__thumb w-xs h-xs bg-primary absolute border-white rounded-full box-content -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:c({left:m(p)+"%"})},null,4)]))}});const h=F(_,[["__scopeId","data-v-5ee46d7f"]]);_.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const H={title:"Components/ui-input-range",component:h,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},L=n=>({components:{UiInputRange:h},setup(){const u=x(50);return{args:n,modelValue:u}},template:`
        <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        <div>{{ modelValue }}</div>
    `}),s=L.bind({});var g,v,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,H as default};
//# sourceMappingURL=ui-input-range.stories-fc133925.js.map
