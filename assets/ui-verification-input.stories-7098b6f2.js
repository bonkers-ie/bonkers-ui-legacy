import{d as H,a as k,o as p,e as l,l as c,H as m,I as F,k as N,B as S,C as D}from"./vue.esm-bundler-9a4beff8.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const w=n=>(S("data-v-d3f744fa"),n=n(),D(),n),B={class:"inputs grid"},E=["type","onInput"],P=w(()=>c("div",{class:"bottom-wrapper"},null,-1)),y=H({__name:"ui-verification-input",props:{inputsCount:null,type:null},emits:["onFiled"],setup(n,{emit:d}){const o=n,a=k([]),f=()=>{const t=a.value.map(e=>e==null?void 0:e.value).join("");d("onFiled",t)},I=(t,e)=>{var s;e<o.inputsCount&&((s=a.value[e+1])==null||s.focus()),e===o.inputsCount-1&&f()},h=t=>{t.target&&t.target.select()},b=t=>{var s,i;t.preventDefault();const e=(s=t.clipboardData)==null?void 0:s.getData("text");e&&e.length===o.inputsCount&&((i=a.value[o.inputsCount-1])==null||i.focus(),a.value.forEach((r,x)=>{r&&(r.value=e[x])}),f())};return(t,e)=>(p(),l(m,null,[c("div",B,[(p(!0),l(m,null,F(n.inputsCount,(s,i)=>(p(),l("div",{key:i,class:"input-wrapper"},[c("input",{ref_for:!0,ref_key:"inputsRefs",ref:a,type:n.type||"text",maxlength:"1",placeholder:"•",onInput:r=>I(r,i),onFocus:h,onPaste:b},null,40,E),P]))),128))]),N(t.$slots,"button",{},void 0,!0)],64))}});const C=V(y,[["__scopeId","data-v-d3f744fa"]]);y.__docgenInfo={exportName:"default",displayName:"ui-verification-input",description:"",tags:{},props:[{name:"inputsCount",required:!0,type:{name:"number"}},{name:"type",required:!1,type:{name:'"text"'}}],events:[{name:"onFiled"}],slots:[{name:"button"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-verification-input/ui-verification-input.vue"]};const U={title:"Components/ui-verification-input",component:C,argTypes:{inputsCount:{control:{type:"number"},description:"Number of inputs"},type:{control:{type:"select"},options:["text"],description:"Inputs type"}},args:{inputsCount:4,type:"text"}},T=n=>({components:{UiVerificationInput:C},setup(){return{args:n,filedHandler:o=>{console.log("=--->",o)}}},template:`
        <ui-verification-input @onFiled="filedHandler" :className="args.className" :inputsCount="args.inputsCount" :type="args.type"/>
    `}),u=T.bind({});var _,g,v;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`(args: MyComponentProps) => ({
  components: {
    UiVerificationInput
  },
  setup() {
    const filedHandler = (payload: string) => {
      console.log("=--->", payload);
    };
    return {
      args,
      filedHandler
    };
  },
  template: \`
        <ui-verification-input @onFiled="filedHandler" :className="args.className" :inputsCount="args.inputsCount" :type="args.type"/>
    \`
})`,...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Default"];export{u as Default,j as __namedExportsOrder,U as default};
//# sourceMappingURL=ui-verification-input.stories-7098b6f2.js.map
