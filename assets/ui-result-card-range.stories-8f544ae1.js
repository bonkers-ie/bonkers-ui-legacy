import{d as f,o as i,e as b,v as l,u as e,x as o,j as y,m as _,q as h,k as x}from"./vue.esm-bundler-d669bd99.js";import{E as C,_ as T}from"./ui-icon-e124efe1.js";import{E as w,b as E,d as R,_ as N}from"./ui-typography-8f06c7f1.js";const k={class:"ui-result-card-range flex w-full flex-col items-center rounded-3xl border-4 border-secondary-alt-300 bg-secondary-alt-200 p-md text-secondary-500"},n=f({__name:"ui-result-card-range",props:{iconName:{},title:{},size:{},description:{}},setup(t){return(r,S)=>(i(),b("div",k,[r.iconName?(i(),l(e(T),{key:0,class:"mb-md",size:e(C).MD,"icon-name":r.iconName},null,8,["size","icon-name"])):o("",!0),r.title?(i(),l(e(N),{key:1,class:"mb-xs",size:e(w).MD,weight:e(E).SEMI_BOLD,align:e(R).CENTER},{default:y(()=>[_(h(r.title),1)]),_:1},8,["size","weight","align"])):o("",!0),x(r.$slots,"default")]))}});n.__docgenInfo={exportName:"default",displayName:"ui-result-card-range",description:"",tags:{},props:[{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-result-card-range/ui-result-card-range.vue"]};const U={title:"Components/ui-result-card-range",component:n,argTypes:{slot:{control:{type:"text"},description:"The slot text or component"},title:{control:{type:"text"},description:"The title text"}},args:{title:"This is a Title",slot:"This is the body"}},z=t=>({components:{UiResultCardRange:n},setup(){return{args:t}},template:`
        <ui-result-card-range :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>
    `}),v=t=>({components:{UiResultCardRange:n},setup(){return{args:t}},template:`
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
    `}),a=z.bind({}),s=v.bind({});var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const j=["singleCard","FullCard"];export{s as FullCard,j as __namedExportsOrder,U as default,a as singleCard};
//# sourceMappingURL=ui-result-card-range.stories-8f544ae1.js.map
