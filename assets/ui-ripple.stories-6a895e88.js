import{d as b,a as l,o as u,e as c,k as w,f as B,j as k,I as R,J as U,T,E as C,l as S}from"./vue.esm-bundler-d669bd99.js";import{_ as E}from"./ui-button-adb5bde9.js";import{_ as N}from"./ui-typography-8f06c7f1.js";const $=["onAnimationend"],A=S("circle",{cx:"50",cy:"50",r:"50"},null,-1),D=[A],p=b({__name:"ui-ripple",setup(i){const s=l([]),a=l(),h=l(),y=e=>{if(a.value){const t=a.value.getBoundingClientRect();s.value.push({x:e.clientX-t.left,y:e.clientY-t.top,id:Math.random().toString(36).substr(2,9)})}},x=e=>{s.value=s.value.filter(t=>t.id!==e)};return(e,t)=>(u(),c("div",{ref_key:"tiBtn",ref:a,class:"ui-ripple",onClick:y},[w(e.$slots,"default"),B(T,null,{default:k(()=>[(u(!0),c(R,null,U(s.value,r=>(u(),c("svg",{ref_for:!0,ref:h.value,key:r.id,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",class:"ripple",style:C({top:r.y+"px",left:r.x+"px"}),fill:"currentColor",onAnimationend:V=>x(r.id)},D,44,$))),128))]),_:1})],512))}});p.__docgenInfo={exportName:"default",displayName:"ui-ripple",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-ripple/ui-ripple.vue"]};const G={title:"Components/ui-ripple",component:p,argTypes:{},args:{}},F=i=>({components:{UiRipple:p},setup(){return{args:i}},template:`
        <div
            :style="{
                width: '500px',
                height: '500px',
                border: '2px solid red',
            }"
             class="relative">
            <ui-ripple v-bind="args" />
        </div>
        `}),I=i=>({components:{UiRipple:p,UiButton:E,UiTypography:N},setup(){return{args:i}},template:`
        <div class="flex">
        <ui-button class="relative">
            <ui-typography is="div">
                <ui-ripple v-bind="args" />
                hello world
            </ui-typography>
        </ui-button>
        </div>
        `}),n=F.bind({}),o=I.bind({});var d,m,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(_=(m=n.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const J=["Default","WithButton"];export{n as Default,o as WithButton,J as __namedExportsOrder,G as default};
//# sourceMappingURL=ui-ripple.stories-6a895e88.js.map
