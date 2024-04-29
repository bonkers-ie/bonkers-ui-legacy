(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-bab25249]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as y,c as h,o as u,a as d,F as k,B as x,n as E,b as m,k as w,v as D,l as C,w as N,i as S,t as B,f as a,r as p}from"./vue.esm-bundler-B4SQYQ1t.js";import{d as z}from"./index-Cci8dJ4U.js";import{d as O,E as c,a as q}from"./ui-typography-CFnpkGZs.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},I={class:"block cursor-pointer px-md py-xs"},M=["value","name"],g=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,T=r,s=h({get(){return l.modelValue},set(t){T("update:modelValue",t)}});return(t,i)=>(u(),d("ul",F,[(u(!0),d(k,null,x(t.tabs,e=>(u(),d("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",I,[w(m("input",{"onUpdate:modelValue":i[0]||(i[0]=V=>s.value=V),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,M),[[D,s.value]]),C(a(z),{is:"span",size:a(O).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(q).SEMI_BOLD},{default:N(()=>[S(B(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),_=A(g,[["__scopeId","data-v-bab25249"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const W={title:"Components/ui-tabs",component:_},n={render:o=>({components:{UiTabs:_},setup(){const r=p("Tab1"),l=p("Tab1");return{args:o,value:r,value2:l}},template:`
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
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const X=["Default"];export{n as Default,X as __namedExportsOrder,W as default};
