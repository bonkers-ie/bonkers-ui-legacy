(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-bab25249]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as y,c as h,o as u,a as i,F as k,A as x,n as E,b as m,k as w,v as C,l as D,w as N,i as S,t as U,f as a,r as p}from"./vue.esm-bundler-DHcM-i38.js";import{d as z,E as c,a as A,U as B}from"./index-CxkkgehU.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xs"},I=["value","name"],g=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,T=r,s=h({get(){return l.modelValue},set(t){T("update:modelValue",t)}});return(t,d)=>(u(),i("ul",q,[(u(!0),i(k,null,x(t.tabs,e=>(u(),i("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[w(m("input",{"onUpdate:modelValue":d[0]||(d[0]=V=>s.value=V),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[C,s.value]]),D(a(B),{is:"span",size:a(z).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(A).SEMI_BOLD},{default:N(()=>[S(U(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}}),_=O(g,[["__scopeId","data-v-bab25249"]]);g.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:_},n={render:o=>({components:{UiTabs:_},setup(){const r=p("Tab1"),l=p("Tab1");return{args:o,value:r,value2:l}},template:`
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
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const W=["Default"];export{n as Default,W as __namedExportsOrder,Y as default};
