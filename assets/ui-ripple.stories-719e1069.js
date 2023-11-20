import{e as b,b as l,o as u,g as c,j as B,y as w,l as R,F as U,C,z as T,T as k,p as S}from"./vue.esm-bundler-052d1dbc.js";import{_ as N}from"./ui-button-d28a86b5.js";import{_ as $}from"./ui-typography-1589d420.js";const E=["onAnimationend"],F=S("circle",{cx:"50",cy:"50",r:"50"},null,-1),j=[F],p=b({__name:"ui-ripple",setup(i){const s=l([]),a=l(),y=l(),h=e=>{if(a.value){const t=a.value.getBoundingClientRect();s.value.push({x:e.clientX-t.left,y:e.clientY-t.top,id:Math.random().toString(36).substr(2,9)})}},x=e=>{s.value=s.value.filter(t=>t.id!==e)};return(e,t)=>(u(),c("div",{ref_key:"tiBtn",ref:a,class:"ui-ripple",onClick:h},[B(e.$slots,"default"),w(k,null,{default:R(()=>[(u(!0),c(U,null,C(s.value,n=>(u(),c("svg",{ref_for:!0,ref:y.value,key:n.id,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",class:"ripple",style:T({top:n.y+"px",left:n.x+"px"}),fill:"currentColor",onAnimationend:D=>x(n.id)},j,44,E))),128))]),_:1})],512))}});p.__docgenInfo={exportName:"default",displayName:"ui-ripple",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/mnt/e/Projects/bonkers-ui/src/components/ui-ripple/ui-ripple.vue"]};const I={title:"Components/ui-ripple",component:p,argTypes:{}},z=i=>({components:{UiRipple:p},setup(){return{args:i}},template:`
        <div
            :style="{
                width: '500px',
                height: '500px',
                border: '2px solid red',
            }"
             class="relative">
            <ui-ripple v-bind="args" />
        </div>
        `}),A=i=>({components:{UiRipple:p,UiButton:N,UiTypography:$},setup(){return{args:i}},template:`
        <div class="flex">
        <ui-button class="relative">
            <ui-typography is="div">
                <ui-ripple v-bind="args" />
                hello world
            </ui-typography>
        </ui-button>
        </div>
        `}),r=z.bind({}),o=A.bind({});var d,m,_;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(_=(m=r.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const L=["Default","WithButton"];export{r as Default,o as WithButton,L as __namedExportsOrder,I as default};
//# sourceMappingURL=ui-ripple.stories-719e1069.js.map
