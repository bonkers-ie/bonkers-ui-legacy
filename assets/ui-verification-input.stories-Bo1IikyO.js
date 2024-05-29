(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".inputs[data-v-c13dfde7]{grid-template-columns:repeat(auto-fill,38px);grid-gap:24px}.inputs .input-wrapper[data-v-c13dfde7]{position:relative;height:58px}.inputs input[data-v-c13dfde7]{width:100%;border:none;text-align:center;font-size:36px;font-weight:700;outline:none}.inputs .input-wrapper .bottom-wrapper[data-v-c13dfde7]{position:absolute;bottom:0;width:100%;height:5px;background-color:var(--color-secondary-300);border-radius:3px;transition:background-color .3s ease-in-out}.inputs input:focus~.bottom-wrapper[data-v-c13dfde7]{background-color:var(--color-primary)}.inputs input[data-v-c13dfde7]::-moz-placeholder{font-size:55px;color:var(--color-secondary-300);opacity:1;transform:scale(1);-moz-transition:opacity .3s ease-in-out,transform .3s ease-in-out;transition:opacity .3s ease-in-out,transform .3s ease-in-out}.inputs input[data-v-c13dfde7]::placeholder{font-size:55px;color:var(--color-secondary-300);opacity:1;transform:scale(1);transition:opacity .3s ease-in-out,transform .3s ease-in-out}.inputs input[data-v-c13dfde7]:focus::-moz-placeholder{opacity:0;transform:scale(0)}.inputs input[data-v-c13dfde7]:focus::placeholder{opacity:0;transform:scale(0)}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{d as N,r as k,o as u,a as c,b as l,F as m,A as S,h as x,p as D,q as w}from"./vue.esm-bundler-DHcM-i38.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q=n=>(D("data-v-c13dfde7"),n=n(),w(),n),B={class:"inputs grid"},E=["type","onInput"],P=q(()=>l("div",{class:"bottom-wrapper"},null,-1)),y=N({__name:"ui-verification-input",props:{inputsCount:{},type:{}},emits:["onFiled"],setup(n,{emit:d}){const o=n,h=d,a=k([]),f=()=>{const e=a.value.map(t=>t==null?void 0:t.value).join("");h("onFiled",e)},b=(e,t)=>{var s;t<o.inputsCount&&((s=a.value[t+1])==null||s.focus()),t===o.inputsCount-1&&f()},I=e=>{e.target&&e.target.select()},F=e=>{var s,r;e.preventDefault();const t=(s=e.clipboardData)==null?void 0:s.getData("text");t&&t.length===o.inputsCount&&((r=a.value[o.inputsCount-1])==null||r.focus(),a.value.forEach((i,H)=>{i&&(i.value=t[H])}),f())};return(e,t)=>(u(),c(m,null,[l("div",B,[(u(!0),c(m,null,S(e.inputsCount,(s,r)=>(u(),c("div",{key:r,class:"input-wrapper"},[l("input",{ref_for:!0,ref_key:"inputsRefs",ref:a,type:e.type||"text",maxlength:"1",placeholder:"•",onInput:i=>b(i,r),onFocus:I,onPaste:F},null,40,E),P]))),128))]),x(e.$slots,"button",{},void 0,!0)],64))}}),C=V(y,[["__scopeId","data-v-c13dfde7"]]);y.__docgenInfo={exportName:"default",displayName:"ui-verification-input",description:"",tags:{},props:[{name:"inputsCount",required:!0,type:{name:"number"}},{name:"type",required:!1,type:{name:'"text"'}}],events:[{name:"onFiled"}],slots:[{name:"button"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-verification-input/ui-verification-input.vue"]};const U={title:"Components/ui-verification-input",component:C,argTypes:{inputsCount:{control:{type:"number"},description:"Number of inputs"},type:{control:{type:"select"},options:["text"],description:"Inputs type"}},args:{inputsCount:4,type:"text"}},p={render:n=>({components:{UiVerificationInput:C},setup(){return{args:n,filedHandler:o=>{console.log("=--->",o)}}},template:`
            <ui-verification-input @onFiled="filedHandler" :className="args.className" :inputsCount="args.inputsCount" :type="args.type"/>
        `})};var g,v,_;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
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
  })
}`,...(_=(v=p.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const j=["Default"];export{p as Default,j as __namedExportsOrder,U as default};
