import{e as H,b as N,o as u,g as c,p as l,F as m,C as k,j as x,D as S,E as D}from"./vue.esm-bundler-64289e35.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const w=n=>(S("data-v-c13dfde7"),n=n(),D(),n),E={class:"inputs grid"},B=["type","onInput"],P=w(()=>l("div",{class:"bottom-wrapper"},null,-1)),y=H({__name:"ui-verification-input",props:{inputsCount:{},type:{}},emits:["onFiled"],setup(n,{emit:d}){const o=n,a=N([]),f=()=>{const e=a.value.map(t=>t==null?void 0:t.value).join("");d("onFiled",e)},b=(e,t)=>{var s;t<o.inputsCount&&((s=a.value[t+1])==null||s.focus()),t===o.inputsCount-1&&f()},h=e=>{e.target&&e.target.select()},I=e=>{var s,i;e.preventDefault();const t=(s=e.clipboardData)==null?void 0:s.getData("text");t&&t.length===o.inputsCount&&((i=a.value[o.inputsCount-1])==null||i.focus(),a.value.forEach((r,F)=>{r&&(r.value=t[F])}),f())};return(e,t)=>(u(),c(m,null,[l("div",E,[(u(!0),c(m,null,k(e.inputsCount,(s,i)=>(u(),c("div",{key:i,class:"input-wrapper"},[l("input",{ref_for:!0,ref_key:"inputsRefs",ref:a,type:e.type||"text",maxlength:"1",placeholder:"•",onInput:r=>b(r,i),onFocus:h,onPaste:I},null,40,B),P]))),128))]),x(e.$slots,"button",{},void 0,!0)],64))}});const C=V(y,[["__scopeId","data-v-c13dfde7"]]);y.__docgenInfo={exportName:"default",displayName:"ui-verification-input",description:"",tags:{},props:[{name:"inputsCount",required:!0,type:{name:"number"}},{name:"type",required:!1,type:{name:'"text"'}}],events:[{name:"onFiled"}],slots:[{name:"button"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-verification-input/ui-verification-input.vue"]};const R={title:"Components/ui-verification-input",component:C,argTypes:{inputsCount:{control:{type:"number"},description:"Number of inputs"},type:{control:{type:"select"},options:["text"],description:"Inputs type"}},args:{inputsCount:4,type:"text"}},T=n=>({components:{UiVerificationInput:C},setup(){return{args:n,filedHandler:o=>{console.log("=--->",o)}}},template:`
        <ui-verification-input @onFiled="filedHandler" :className="args.className" :inputsCount="args.inputsCount" :type="args.type"/>
    `}),p=T.bind({});var _,g,v;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const U=["Default"];export{p as Default,U as __namedExportsOrder,R as default};
//# sourceMappingURL=ui-verification-input.stories-4d9538eb.js.map
