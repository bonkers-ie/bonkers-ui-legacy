import{e as y,f as V,o as u,g as d,F as x,C as h,s as E,p as m,q as C,x as k,y as D,l as N,m as S,t as w,u as a,b as p}from"./vue.esm-bundler-052d1dbc.js";import{d as q,E as c,a as z,_ as B}from"./ui-typography-1589d420.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const A={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xs"},I=["value","name"],f=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(l,{emit:r}){const n=l,s=V({get(){return n.modelValue},set(t){r("update:modelValue",t)}});return(t,i)=>(u(),d("ul",A,[(u(!0),d(x,null,h(t.tabs,e=>(u(),d("li",{key:e,class:E(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[C(m("input",{"onUpdate:modelValue":i[0]||(i[0]=T=>s.value=T),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[k,s.value]]),D(a(B),{is:"span",size:a(q).XS,kind:s.value===e?a(c).SECONDARY_500:a(c).SECONDARY_400,weight:a(z).SEMI_BOLD},{default:N(()=>[S(w(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}});const g=O(f,[["__scopeId","data-v-bab25249"]]);f.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/mnt/e/Projects/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:g,argTypes:{}},M=l=>({components:{UiTabs:g},setup(){const r=p("Tab1"),n=p("Tab1");return{args:l,value:r,value2:n}},template:`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    `}),o=M.bind({});var b,_,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,Y as default};
//# sourceMappingURL=ui-tabs.stories-bfd05540.js.map
