import{d as y,b as V,o as u,e as i,F as h,G as x,n as k,f as m,p as E,v as w,q as C,w as D,l as N,m as S,i as a,a as p}from"./vue.esm-bundler-a43e9918.js";import{d as q,E as b,a as z,_ as B}from"./ui-typography-debf4260.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const A={class:"ui-tabs grid grid-flow-col rounded-full bg-secondary-alt-200"},F={class:"block cursor-pointer px-md py-xs"},I=["value","name"],f=y({__name:"ui-tabs",props:{tabs:{},modelValue:{},name:{default:"default"}},emits:["update:modelValue"],setup(r,{emit:l}){const n=r,s=V({get(){return n.modelValue},set(t){l("update:modelValue",t)}});return(t,d)=>(u(),i("ul",A,[(u(!0),i(h,null,x(t.tabs,e=>(u(),i("li",{key:e,class:k(["rounded-full text-center",[s.value===e&&"bg-white"]])},[m("label",F,[E(m("input",{"onUpdate:modelValue":d[0]||(d[0]=T=>s.value=T),type:"radio",class:"absolute appearance-none",value:e,name:t.name},null,8,I),[[w,s.value]]),C(a(B),{is:"span",size:a(q).XS,kind:s.value===e?a(b).SECONDARY_500:a(b).SECONDARY_400,weight:a(z).SEMI_BOLD},{default:D(()=>[N(S(e),1)]),_:2},1032,["size","kind","weight"])])],2))),128))]))}});const g=O(f,[["__scopeId","data-v-bab25249"]]);f.__docgenInfo={exportName:"default",displayName:"ui-tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-tabs/ui-tabs.vue"]};const Y={title:"Components/ui-tabs",component:g,argTypes:{}},M=r=>({components:{UiTabs:g},setup(){const l=p("Tab1"),n=p("Tab1");return{args:r,value:l,value2:n}},template:`
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2', 'Tab3']" v-model:modelValue="value" />
        <br/>
        <ui-tabs v-bind="args" :tabs="['Tab1', 'Tab2']" v-model:modelValue="value2" />
    `}),o=M.bind({});var c,_,v;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(v=(_=o.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,Y as default};
//# sourceMappingURL=ui-tabs.stories-73006db5.js.map
