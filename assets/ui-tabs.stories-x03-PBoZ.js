(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-bab25249]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{e as y,f as h,o as u,g as d,I as x,J as k,q as E,j as m,x as D,y as w,z as C,n as N,s as S,t as z,l as a,b as p}from"./vue.esm-bundler-26GhoP0B.js";import{d as q}from"./index-hJfbsusS.js";import{d as B,E as c,a as I}from"./ui-typography-a0Uot2md.js";import{_ as O}from"./_plugin-vue_export-helper-x3n3nnut.js";const A={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},M={class:"block cursor-pointer px-md py-xs"},R=["value","name"],g=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,T=r,s=h({get(){return l.modelValue},set(t){T("update:modelValue",t)}});return(t,i)=>(u(),d("ul",A,[(u(!0),d(x,null,k(t.tabs,e=>(u(),d("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",M,[D(m("input",{"onUpdate:modelValue":i[0]||(i[0]=V=>s.value=V),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,R),[[w,s.value]]),C(a(q),{is:"span",size:a(B).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(I).SEMI_BOLD},{default:N(()=>[S(z(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),_=O(g,[["__scopeId","data-v-bab25249"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const j={title:"Components/ui-tabs",component:_},n={render:o=>({components:{UiTabs:_},setup(){const r=p("Tab1"),l=p("Tab1");return{args:o,value:r,value2:l}},template:`
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
            <br/>
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
        `})};var b,v,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
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
    template: /*html*/\`
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
            <br/>
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
        \`
  })
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,j as default};
