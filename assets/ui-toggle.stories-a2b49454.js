import{e as C,f as x,o as i,g as d,j as u,z as p,l as m,m as c,t as g,u as o,p as a,q as B,G as E,s as _,D as S,E as q,b as O}from"./vue.esm-bundler-64289e35.js";import{a as D,_ as h,d as I}from"./ui-typography-32a544b7.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const y=t=>(S("data-v-3224dfa9"),t=t(),q(),t),M={class:"ui-toggle"},N={class:"ui-input__input-wrapper relative block h-md"},L=["value"],U=y(()=>a("span",{class:"ui-toggle__bg-block block h-md w-lg rounded-full bg-secondary-alt"},null,-1)),$={class:"ui-toggle__dot absolute top-0 block rounded-full bg-white"},A=y(()=>a("path",{d:"M1 4.40106L6.60071 10.1135L15.1694 1.71245",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round"},null,-1)),H=[A],w=C({__name:"ui-toggle",props:{header:{},title:{},modelValue:{type:[Boolean,Array]},disabled:{type:Boolean},invertOrder:{type:Boolean},alignCenter:{type:Boolean},value:{}},emits:["update:modelValue"],setup(t,{emit:l}){const V=t,n=x({get(){return V.modelValue},set(e){l("update:modelValue",e)}});return(e,r)=>(i(),d("div",M,[u(e.$slots,"header",{},()=>[p(o(h),{"line-height":"",class:"mb-sm",weight:o(D).SEMI_BOLD},{default:m(()=>[c(g(e.header),1)]),_:1},8,["weight"])],!0),a("label",{class:_(["flex cursor-pointer gap-sm rounded-full",[e.disabled&&"ui-toggle_disabled pointer-events-none",e.invertOrder&&"flex-row-reverse",e.alignCenter&&"items-center"]])},[a("span",N,[B(a("input",{"onUpdate:modelValue":r[0]||(r[0]=T=>n.value=T),type:"checkbox",class:"absolute h-0 w-0 appearance-none border-0",value:e.value},null,8,L),[[E,n.value]]),U,a("span",$,[(i(),d("svg",{class:_(["ui-toggle__check-icon absolute",e.disabled?"text-primary-300":"text-primary"]),width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H,2))])]),u(e.$slots,"title",{},()=>[p(o(h),{size:o(I).SM,class:"w-full","line-height":""},{default:m(()=>[c(g(e.title),1)]),_:1},8,["size"])],!0)],2)]))}});const k=z(w,[["__scopeId","data-v-3224dfa9"]]);w.__docgenInfo={exportName:"default",displayName:"ui-toggle",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"Array",elements:[{name:"unknown"}]}]}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"invertOrder",required:!1,type:{name:"boolean"}},{name:"alignCenter",required:!1,type:{name:"boolean"}},{name:"value",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["unknown"]}}],slots:[{name:"header"},{name:"title"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-toggle/ui-toggle.vue"]};const J={title:"Components/ui-toggle",component:k,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"},alignCenter:{control:{type:"boolean"},description:"The Elements center align state"},invertOrder:{control:{type:"boolean"},description:"The Element order state"}},args:{slot:"default text",disabled:!1,invertOrder:!1,alignCenter:!1}},j=t=>({components:{UiToggle:k},setup(){const l=O(!1);return{args:t,modelValue:l}},template:`
        <ui-toggle v-bind="args" v-model="modelValue" header="Header" :title="args.slot" />
    `}),s=j.bind({});var f,b,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    UiToggle
  },
  setup() {
    const modelValue = ref(false);
    return {
      args,
      modelValue
    };
  },
  template: \`
        <ui-toggle v-bind="args" v-model="modelValue" header="Header" :title="args.slot" />
    \`
})`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=ui-toggle.stories-a2b49454.js.map
