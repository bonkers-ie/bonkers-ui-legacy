(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-tabs[data-v-bab25249]{padding:2px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{e as V,f as h,o as u,g as i,F as x,C as E,s as k,p as m,q as C,y as w,E as D,l as N,m as S,t as U,u as a,b as p}from"./vue.esm-bundler-5815757d.js";import{U as q}from"./index-8738b0a4.js";import{d as z,E as b,a as B}from"./ui-typography-7e42daed.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const A={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xs"},I=["value","name"],f=V({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:l}){const n=r,T=l,s=h({get(){return n.modelValue},set(t){T("update:modelValue",t)}});return(t,d)=>(u(),i("ul",A,[(u(!0),i(x,null,E(t.tabs,e=>(u(),i("li",{key:e,class:k(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[C(m("input",{"onUpdate:modelValue":d[0]||(d[0]=y=>s.value=y),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[w,s.value]]),D(a(q),{is:"span",size:a(z).XS,kind:s.value===e?a(b).SECONDARY_500:a(b).SECONDARY_400,weight:a(B).SEMI_BOLD},{default:N(()=>[S(U(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}});const g=O(f,[["__scopeId","data-v-bab25249"]]);f.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const X={title:"Components/ui-tabs",component:g,argTypes:{}},M=r=>({components:{UiTabs:g},setup(){const l=p("Tab1"),n=p("Tab1");return{args:r,value:l,value2:n}},template:`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    `}),o=M.bind({});var c,v,_;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,X as default};
//# sourceMappingURL=ui-tabs.stories-e119e39b.js.map
