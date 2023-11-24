import{e as y,o as n,g as b,k as l,u as e,n as o,l as h,m as T,t as x,j as C}from"./vue.esm-bundler-5815757d.js";import{d as _}from"./index-7014e7a9.js";import{U as w}from"./index-8738b0a4.js";import{E}from"./ui-icon-253a2a48.js";import{d as N,a as k,b as R}from"./ui-typography-7e42daed.js";const S={class:"ui-result-card-range flex w-full flex-col items-center rounded-3xl border-4 border-secondary-alt-300 bg-secondary-alt-200 p-md text-secondary-500"},f=y({__name:"ui-result-card-range",props:{iconName:{},title:{},size:{},description:{}},setup(t){return(r,U)=>(n(),b("div",S,[r.iconName?(n(),l(e(_),{key:0,class:"mb-md",size:e(E).MD,"icon-name":r.iconName},null,8,["size","icon-name"])):o("",!0),r.title?(n(),l(e(w),{key:1,class:"mb-xs",size:e(N).MD,weight:e(k).SEMI_BOLD,align:e(R).CENTER},{default:h(()=>[T(x(r.title),1)]),_:1},8,["size","weight","align"])):o("",!0),C(r.$slots,"default")]))}});f.__docgenInfo={exportName:"default",displayName:"ui-result-card-range",description:"",tags:{},props:[{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-result-card-range/ui-result-card-range.vue"]};const z=f,i=z,M={title:"Components/ui-result-card-range",component:i,argTypes:{slot:{control:{type:"text"},description:"The slot text or component"},title:{control:{type:"text"},description:"The title text"}},args:{title:"This is a Title",slot:"This is the body"}},v=t=>({components:{UiResultCardRange:i},setup(){return{args:t}},template:`
        <ui-result-card-range :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>
    `}),D=t=>({components:{UiResultCardRange:i},setup(){return{args:t}},template:`
    <div class="ui-result-card-range grid gap-sm w-full">

        <ui-result-card-range style="grid-column: 1 / 1"
            :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>

        <ui-result-card-range style="grid-column: 2 / 2"
             :icon-name="['far', 'face-smile']" :title="args.title">
             {{args.slot}}

        </ui-result-card-range>

        <ui-result-card-range style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

                <b>25/02/2022</b>
                <b>→</b>
                <b>26/01/2023</b>

        </ui-result-card-range>
    </div>
    `}),a=v.bind({}),s=D.bind({});var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    UiResultCardRange
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <ui-result-card-range :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>
    \`
})`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,g,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    UiResultCardRange
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
    <div class="ui-result-card-range grid gap-sm w-full">

        <ui-result-card-range style="grid-column: 1 / 1"
            :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>

        <ui-result-card-range style="grid-column: 2 / 2"
             :icon-name="['far', 'face-smile']" :title="args.title">
             {{args.slot}}

        </ui-result-card-range>

        <ui-result-card-range style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

                <b>25/02/2022</b>
                <b>→</b>
                <b>26/01/2023</b>

        </ui-result-card-range>
    </div>
    \`
})`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const A=["SingleCard","FullCard"];export{s as FullCard,a as SingleCard,A as __namedExportsOrder,M as default};
//# sourceMappingURL=ui-result-card-range.stories-5d20cd06.js.map
