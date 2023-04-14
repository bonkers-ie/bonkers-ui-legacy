import{d as y,c as V,o as r,e as u,H as x,I as h,g as k,u as e,l as m,y as E,F as w,A as C,f as D,j as N,m as S,t as z,a as c}from"./vue.esm-bundler-9a4beff8.js";import{E as A,a as p,b as B,_ as I}from"./ui-typography-43c7c98a.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const R={class:"ui-tabs bg-secondary-alt-200 rounded-full grid grid-flow-col"},q={class:"block cursor-pointer py-xs px-md"},F=["value","name"],v=y({__name:"ui-tabs",props:{tabs:null,modelValue:null,name:{default:"default"}},emits:["update:modelValue"],setup(a,{emit:l}){const n=a,s=V({get(){return n.modelValue},set(d){l("update:modelValue",d)}});return(d,i)=>(r(),u("ul",R,[(r(!0),u(x,null,h(a.tabs,t=>(r(),u("li",{key:t,class:k(["rounded-full text-center",[e(s)===t&&"bg-white"]])},[m("label",q,[E(m("input",{"onUpdate:modelValue":i[0]||(i[0]=T=>C(s)?s.value=T:null),type:"radio",class:"appearance-none absolute",value:t,name:a.name},null,8,F),[[w,e(s)]]),D(e(I),{is:"span",size:e(A).XS,kind:e(s)===t?e(p).SECONDARY_500:e(p).SECONDARY_400,weight:e(B).SEMI_BOLD},{default:N(()=>[S(z(t),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}});const g=O(v,[["__scopeId","data-v-d2fc1aac"]]);v.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const j={title:"Components/ui-tabs",component:g,argTypes:{}},M=a=>({components:{UiTabs:g},setup(){const l=c("Tab1"),n=c("Tab1");return{args:a,value:l,value2:n}},template:`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    `}),o=M.bind({});var b,_,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,j as default};
//# sourceMappingURL=ui-tabs.stories-27064776.js.map
