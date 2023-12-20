(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-bab25249]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{e as V,f as h,o as u,g as i,I as k,J as x,q as E,j as m,t as C,v as w,C as D,n as N,A as S,z,l as a,b as p}from"./vue.esm-bundler-0aijNq6S.js";import{U}from"./index-x7TYTibA.js";import{d as q,E as c,a as A}from"./ui-typography-dWkvwKnc.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";const I={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},O={class:"block cursor-pointer px-md py-xs"},M=["value","name"],g=V({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,_=r,s=h({get(){return l.modelValue},set(t){_("update:modelValue",t)}});return(t,d)=>(u(),i("ul",I,[(u(!0),i(k,null,x(t.tabs,e=>(u(),i("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",O,[C(m("input",{"onUpdate:modelValue":d[0]||(d[0]=y=>s.value=y),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,M),[[w,s.value]]),D(a(U),{is:"span",size:a(q).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(A).SEMI_BOLD},{default:N(()=>[z(S(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),T=B(g,[["__scopeId","data-v-bab25249"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const J={title:"Components/ui-tabs",component:T,argTypes:{}},R=o=>({components:{UiTabs:T},setup(){const r=p("Tab1"),l=p("Tab1");return{args:o,value:r,value2:l}},template:`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    `}),n=R.bind({});var b,v,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    UiTabs
  },
  setup() {
    const value = ref("Tab1");
    const value2 = ref("Tab1");
    return {
      args,
      value,
      value2
    };
  },
  template: \`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    \`
})`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const W=["Default"];export{n as Default,W as __namedExportsOrder,J as default};
