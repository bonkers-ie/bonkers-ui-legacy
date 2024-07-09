(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.ripple{position:absolute;will-change:transform,opacity;transform:translate3d(-50%,-50%,0) scale(0);mix-blend-mode:screen;animation:ripple 1s ease-out forwards,fade 1s ease-out forwards;z-index:1}@keyframes ripple{0%{transform:translate3d(-50%,-50%,0) scale(0)}80%{transform:translate3d(-50%,-50%,0) scale(10)}to{transform:translate3d(-50%,-50%,0) scale(10)}}@keyframes fade{0%{opacity:1}to{opacity:0}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as b,r as l,o as u,a as c,h as w,l as B,w as k,F as R,A as U,j as C,T,b as S}from"./vue.esm-bundler-CeLExAbV.js";import{_ as N}from"./ui-button-CZcbH8Cl.js";import{_ as $}from"./index-Cp3NuEg2.js";const A=["onAnimationend"],E=S("circle",{cx:"50",cy:"50",r:"50"},null,-1),F=[E],p=b({__name:"ui-ripple",setup(n){const r=l([]),a=l(),_=l(),y=e=>{if(a.value){const t=a.value.getBoundingClientRect();r.value.push({x:e.clientX-t.left,y:e.clientY-t.top,id:Math.random().toString(36).substr(2,9)})}},x=e=>{r.value=r.value.filter(t=>t.id!==e)};return(e,t)=>(u(),c("div",{ref_key:"tiBtn",ref:a,class:"ui-ripple",onClick:y},[w(e.$slots,"default"),B(T,null,{default:k(()=>[(u(!0),c(R,null,U(r.value,i=>(u(),c("svg",{ref_for:!0,ref:_.value,key:i.id,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",class:"ripple",style:C({top:i.y+"px",left:i.x+"px"}),fill:"currentColor",onAnimationend:W=>x(i.id)},F,44,A))),128))]),_:1})],512))}});p.__docgenInfo={exportName:"default",displayName:"ui-ripple",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-ripple/ui-ripple.vue"]};const I={title:"Components/ui-ripple",component:p},D=n=>({components:{UiRipple:p},setup(){return{args:n}},template:`
        <div
            :style="{
                width: '500px',
                height: '500px',
                border: '2px solid red',
            }"
             class="relative">
            <ui-ripple v-bind="args" />
        </div>
        `}),V=n=>({components:{UiRipple:p,UiButton:N,UiTypography:$},setup(){return{args:n}},template:`
        <div class="flex">
            <ui-button class="relative">
                <ui-typography is="div">
                    <ui-ripple v-bind="args" />
                    hello world
                </ui-typography>
            </ui-button>
        </div>
        `}),s=D.bind({}),o=V.bind({});var d,m,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    UiRipple
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <div
            :style="{
                width: '500px',
                height: '500px',
                border: '2px solid red',
            }"
             class="relative">
            <ui-ripple v-bind="args" />
        </div>
        \`
})`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    UiRipple,
    UiButton,
    UiTypography
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <div class="flex">
            <ui-button class="relative">
                <ui-typography is="div">
                    <ui-ripple v-bind="args" />
                    hello world
                </ui-typography>
            </ui-button>
        </div>
        \`
})`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const L=["Default","WithButton"];export{s as Default,o as WithButton,L as __namedExportsOrder,I as default};
