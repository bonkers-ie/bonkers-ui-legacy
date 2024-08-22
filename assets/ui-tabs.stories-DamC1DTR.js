(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-8192ff30]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as y,k as h,o as u,c as i,F as k,z as x,n as E,a as m,m as w,v as C,e as D,w as N,h as S,t as z,u as a,r as p}from"./vue.esm-bundler-GDL5RDDy.js";import{a as U,b as c,E as B,U as O}from"./index-2d-qg1vH.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xxs"},I=["value","name"],g=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:l}){const n=r,T=l,s=h({get(){return n.modelValue},set(t){T("update:modelValue",t)}});return(t,d)=>(u(),i("ul",A,[(u(!0),i(k,null,x(t.tabs,e=>(u(),i("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[w(m("input",{"onUpdate:modelValue":d[0]||(d[0]=V=>s.value=V),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[C,s.value]]),D(a(O),{is:"span",size:a(U).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(B).SEMI_BOLD},{default:N(()=>[S(z(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),_=q(g,[["__scopeId","data-v-8192ff30"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:_},o={render:r=>({components:{UiTabs:_},setup(){const l=p("Tab1"),n=p("Tab1");return{args:r,value:l,value2:n}},template:`
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,Y as default};
