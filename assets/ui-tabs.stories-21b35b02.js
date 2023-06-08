import{d as y,c as V,o as u,e as d,H as h,I as x,g as k,l as m,z as E,F as w,f as C,j as D,m as N,q as S,u as a,a as c}from"./vue.esm-bundler-fe4d70d2.js";import{E as z,a as p,b as q,_ as B}from"./ui-typography-3ebb5017.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const O={class:"ui-tabs bg-secondary-alt-200 rounded-full grid grid-flow-col"},A={class:"block cursor-pointer py-xs px-md"},F=["value","name"],f=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:l}){const n=r,s=V({get(){return n.modelValue},set(t){l("update:modelValue",t)}});return(t,i)=>(u(),d("ul",O,[(u(!0),d(h,null,x(t.tabs,e=>(u(),d("li",{key:e,class:k(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",A,[E(m("input",{"onUpdate:modelValue":i[0]||(i[0]=T=>s.value=T),type:"radio",class:"appearance-none absolute",value:e,name:t.name},null,8,F),[[w,s.value]]),C(a(B),{is:"span",size:a(z).XS,kind:s.value===e?a(p).SECONDARY_500:a(p).SECONDARY_400,weight:a(q).SEMI_BOLD},{default:D(()=>[N(S(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}});const g=I(f,[["__scopeId","data-v-d2fc1aac"]]);f.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:g,argTypes:{}},M=r=>({components:{UiTabs:g},setup(){const l=c("Tab1"),n=c("Tab1");return{args:r,value:l,value2:n}},template:`
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
//# sourceMappingURL=ui-tabs.stories-21b35b02.js.map
