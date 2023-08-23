import{e as M,f as p,w as S,b,o as T,g as E,q,I as C,p as r,z as d,D as R,E as B}from"./vue.esm-bundler-8de1b0f8.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const F=a=>(R("data-v-5ac339bd"),a=a(),B(),a),P={class:"ui-input-range relative box-content h-lg py-xs"},N=["min","max","step"],U=F(()=>r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs w-full -translate-y-1/2 rounded bg-secondary-alt"},null,-1)),x=M({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,o=p({get(){return e.modelValue},set(n){l("update:modelValue",n)}});S(()=>[e.min,e.max],()=>{o.value<+e.min?o.value=+e.min:o.value>+e.max&&(o.value=+e.max)});const u=b(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),_=n=>{if(u.value){const t="clientX",{left:i,width:y}=u.value.getBoundingClientRect(),V="touches"in n?n.touches[0][t]:n[t],w=Math.min(Math.max((V-i)/y,0),1)||0,k=parseFloat(String(e.min))+w*(+e.max-+e.min),I=Math.round(k/+e.step)*+e.step;return parseFloat(Math.min(I,+e.max).toFixed(2))}},h=n=>{const t=_(n);t&&(o.value=t)};return(n,t)=>(T(),E("div",P,[q(r("input",{ref_key:"track",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"absolute left-0 top-0 h-full w-full cursor-pointer appearance-none bg-transparent",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:h},null,40,N),[[C,o.value,void 0,{number:!0}]]),U,r("div",{class:"pointer-events-none absolute left-0 top-1/2 h-xs -translate-y-1/2 rounded bg-primary",style:d({width:m.value+"%"})},null,4),r("div",{class:"ui-input-range__thumb pointer-events-none absolute box-content h-xs w-xs -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-primary",style:d({left:m.value+"%"})},null,4)]))}});const f=D(x,[["__scopeId","data-v-5ac339bd"]]);x.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const H={title:"Components/ui-input-range",component:f,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},z=a=>({components:{UiInputRange:f},setup(){const l=b(50);return{args:a,modelValue:l}},template:`
        <div :style="{border: '1px solid'}">
            <ui-input-range v-bind="args" v-model:modelValue="modelValue"/>
        </div>
        <div>{{ modelValue }}</div>
    `}),s=z.bind({});var c,v,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,H as default};
//# sourceMappingURL=ui-input-range.stories-16b528ea.js.map
