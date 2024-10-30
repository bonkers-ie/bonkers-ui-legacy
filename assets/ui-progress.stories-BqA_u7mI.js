import{d,m,o,c as g,a as u,x as f,g as x,f as _,j as T,t as h,u as s,h as y}from"./vue.esm-bundler-C-KwxiLQ.js";import{b,c as v,E as k,_ as w}from"./index-C9LKT771.js";const E={class:"ui-progress"},S={class:"relative h-xxs w-full overflow-hidden rounded-xl bg-primary-200"},n=d({__name:"ui-progress",props:{min:{default:0},max:{default:100},current:{default:0},progressText:{default:""}},setup(r){const e=r,c=m(()=>(e.current-e.min)/(e.max-e.min)*100);return(a,V)=>(o(),g("div",E,[u("div",S,[u("div",{class:"ui-progress__bar-fill absolute left-0 top-0 z-10 h-full rounded-xl bg-primary-alt-700 transition-all duration-300",style:f({width:c.value+"%"})},null,4)]),a.progressText?(o(),x(s(w),{key:0,kind:s(b).PRIMARY_ALT_700,align:s(v).RIGHT,weight:s(k).SEMI_BOLD,class:"mt-xxs"},{default:_(()=>[T(h(a.progressText),1)]),_:1},8,["kind","align","weight"])):y("",!0)]))}});n.__docgenInfo={exportName:"default",displayName:"ui-progress",description:"",tags:{},props:[{name:"min",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"current",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"progressText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-progress/ui-progress.vue"]};const N={title:"Components/ui-progress",component:n,argTypes:{min:{control:{type:"number"},description:"The minimum value"},max:{control:{type:"number"},description:"The maximum value"},current:{control:{type:"number"}},progressText:{control:{type:"text"}}},args:{min:0,max:10,current:3,progressText:"Step 3 of 10"}},t={args:{current:4},render:r=>({components:{UiProgress:n},setup:()=>{const e=m(()=>`Step ${r.current} of ${r.max}`);return{args:r,progressText:e}},template:'<ui-progress v-bind="args" :progressText="progressText"></ui-progress>'})};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    current: 4
  },
  render: args => ({
    components: {
      UiProgress
    },
    setup: () => {
      const progressText = computed(() => {
        return \`Step \${args.current} of \${args.max}\`;
      });
      return {
        args,
        progressText
      };
    },
    template: /*html*/\`<ui-progress v-bind="args" :progressText="progressText"></ui-progress>\`
  })
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,N as default};
