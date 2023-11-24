(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.ripple{position:absolute;will-change:transform,opacity;transform:translate3d(-50%,-50%,0) scale(0);mix-blend-mode:screen;animation:ripple 1s ease-out forwards,fade 1s ease-out forwards;z-index:1}@keyframes ripple{0%{transform:translate3d(-50%,-50%,0) scale(0)}80%{transform:translate3d(-50%,-50%,0) scale(10)}to{transform:translate3d(-50%,-50%,0) scale(10)}}@keyframes fade{0%{opacity:1}to{opacity:0}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{e as b,b as l,o as u,g as c,j as w,E as B,l as U,F as R,C as k,T as C,G as T,p as S}from"./vue.esm-bundler-5815757d.js";import{U as E}from"./index-556f8357.js";import{U as N}from"./index-8738b0a4.js";import"./ui-typography-7e42daed.js";const F=["onAnimationend"],A=S("circle",{cx:"50",cy:"50",r:"50"},null,-1),D=[A],p=b({__name:"ui-ripple",setup(i){const r=l([]),a=l(),h=l(),y=e=>{if(a.value){const t=a.value.getBoundingClientRect();r.value.push({x:e.clientX-t.left,y:e.clientY-t.top,id:Math.random().toString(36).substr(2,9)})}},x=e=>{r.value=r.value.filter(t=>t.id!==e)};return(e,t)=>(u(),c("div",{ref_key:"tiBtn",ref:a,class:"ui-ripple",onClick:y},[w(e.$slots,"default"),B(C,null,{default:U(()=>[(u(!0),c(R,null,k(r.value,s=>(u(),c("svg",{ref_for:!0,ref:h.value,key:s.id,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",class:"ripple",style:T({top:s.y+"px",left:s.x+"px"}),fill:"currentColor",onAnimationend:W=>x(s.id)},D,44,F))),128))]),_:1})],512))}});p.__docgenInfo={exportName:"default",displayName:"ui-ripple",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-ripple/ui-ripple.vue"]};const L={title:"Components/ui-ripple",component:p,argTypes:{}},G=i=>({components:{UiRipple:p},setup(){return{args:i}},template:`
        <div
            :style="{
                width: '500px',
                height: '500px',
                border: '2px solid red',
            }"
             class="relative">
            <ui-ripple v-bind="args" />
        </div>
        `}),V=i=>({components:{UiRipple:p,UiButton:E,UiTypography:N},setup(){return{args:i}},template:`
        <div class="flex">
        <ui-button class="relative">
            <ui-typography is="div">
                <ui-ripple v-bind="args" />
                hello world
            </ui-typography>
        </ui-button>
        </div>
        `}),n=G.bind({}),o=V.bind({});var d,m,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    UiRipple
  },
  setup() {
    return {
      args
    };
  },
  template: \`
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
})`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,_,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
  template: \`
        <div class="flex">
        <ui-button class="relative">
            <ui-typography is="div">
                <ui-ripple v-bind="args" />
                hello world
            </ui-typography>
        </ui-button>
        </div>
        \`
})`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const M=["Default","WithButton"];export{n as Default,o as WithButton,M as __namedExportsOrder,L as default};
//# sourceMappingURL=ui-ripple.stories-ca3b1c85.js.map
