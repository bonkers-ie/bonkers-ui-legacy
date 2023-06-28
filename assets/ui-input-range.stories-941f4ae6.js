import{d as M,c as p,w as S,a as f,o as T,e as C,z as E,D as B,l as r,E as d,B as R,C as q}from"./vue.esm-bundler-fe4d70d2.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const F=a=>(R("data-v-2f917cd6"),a=a(),q(),a),P={class:"ui-input-range relative h-lg py-xs box-content"},N=["min","max","step"],U=F(()=>r("div",{class:"h-xs w-full bg-secondary-alt rounded absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none"},null,-1)),x=M({__name:"ui-input-range",props:{modelValue:{},min:{},max:{},step:{}},emits:["update:modelValue"],setup(a,{emit:l}){const e=a,o=p({get(){return e.modelValue},set(n){l("update:modelValue",n)}});S(()=>[e.min,e.max],()=>{o.value<+e.min?o.value=+e.min:o.value>+e.max&&(o.value=+e.max)});const u=f(),m=p(()=>Math.round((+e.modelValue-+e.min)/(+e.max-+e.min)*100)),h=n=>{if(u.value){const t="clientX",{left:i,width:y}=u.value.getBoundingClientRect(),V="touches"in n?n.touches[0][t]:n[t],w=Math.min(Math.max((V-i)/y,0),1)||0,k=parseFloat(String(e.min))+w*(+e.max-+e.min),I=Math.round(k/+e.step)*+e.step;return parseFloat(Math.min(I,+e.max).toFixed(2))}},b=n=>{const t=h(n);t&&(o.value=t)};return(n,t)=>(T(),C("div",P,[E(r("input",{ref_key:"track",ref:u,"onUpdate:modelValue":t[0]||(t[0]=i=>o.value=i),class:"appearance-none absolute top-0 left-0 cursor-pointer bg-transparent w-full h-full",type:"range",min:n.min,max:n.max,step:n.step,onTouchmove:b},null,40,N),[[B,o.value,void 0,{number:!0}]]),U,r("div",{class:"h-xs bg-primary rounded absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none",style:d({width:m.value+"%"})},null,4),r("div",{class:"ui-input-range__thumb w-xs h-xs bg-primary absolute border-white rounded-full box-content -translate-y-1/2 -translate-x-1/2 pointer-events-none",style:d({left:m.value+"%"})},null,4)]))}});const _=D(x,[["__scopeId","data-v-2f917cd6"]]);x.__docgenInfo={exportName:"default",displayName:"ui-input-range",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"min",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input-range/ui-input-range.vue"]};const H={title:"Components/ui-input-range",component:_,argTypes:{min:{control:{type:"number"},description:"The Element min value"},max:{control:{type:"number"},description:"The Element max value"},step:{control:{type:"number"},description:"The Element max value"}},args:{min:0,max:100,step:1}},z=a=>({components:{UiInputRange:_},setup(){const l=f(50);return{args:a,modelValue:l}},template:`
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
//# sourceMappingURL=ui-input-range.stories-941f4ae6.js.map
