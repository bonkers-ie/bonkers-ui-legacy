(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-8192ff30]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as y,m as h,o as u,c as i,F as x,A as k,n as E,a as m,s as w,v as C,e as D,f as N,j as S,t as U,u as a,r as p}from"./vue.esm-bundler-C-KwxiLQ.js";import{a as z,b as c,E as A,U as B}from"./index-C9LKT771.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xxs"},I=["value","name"],g=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:l}){const n=r,T=l,s=h({get(){return n.modelValue},set(t){T("update:modelValue",t)}});return(t,d)=>(u(),i("ul",q,[(u(!0),i(x,null,k(t.tabs,e=>(u(),i("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[w(m("input",{"onUpdate:modelValue":d[0]||(d[0]=V=>s.value=V),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[C,s.value]]),D(a(B),{is:"span",size:a(z).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(A).SEMI_BOLD},{default:N(()=>[S(U(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),_=O(g,[["__scopeId","data-v-8192ff30"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:_},o={render:r=>({components:{UiTabs:_},setup(){const l=p("Tab1"),n=p("Tab1");return{args:r,value:l,value2:n}},template:`
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
            <br/>
            <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
        `})};var b,v,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,Y as default};
