import{d as f,o as n,e as b,q as l,u as r,v as i,j as y,m as x,t as h,k as C}from"./vue.esm-bundler-9a4beff8.js";import{E as T,_}from"./ui-icon-ee9e3f6c.js";import{E as w,b as R,d as E,_ as N}from"./ui-typography-43c7c98a.js";const k={class:"ui-result-card-range w-full flex flex-col items-center border border-secondary-alt-300 bg-secondary-alt-200 rounded-2xl text-secondary-500 p-md"},s=f({__name:"ui-result-card-range",props:{iconName:null,title:null,size:null,description:null},setup(e){return(p,S)=>(n(),b("div",k,[e.iconName?(n(),l(r(_),{key:0,class:"rounded-full mb-md",size:r(T).MD,"icon-name":e.iconName},null,8,["size","icon-name"])):i("",!0),e.title?(n(),l(r(N),{key:1,class:"mb-xs",size:r(w).MD,weight:r(R).BOLD,align:r(E).CENTER},{default:y(()=>[x(h(e.title),1)]),_:1},8,["size","weight","align"])):i("",!0),C(p.$slots,"default")]))}});s.__docgenInfo={exportName:"default",displayName:"ui-result-card-range",description:"",tags:{},props:[{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-result-card-range/ui-result-card-range.vue"]};const U={title:"Components/ui-result-card-range",component:s,argTypes:{slot:{control:{type:"text"},description:"The slot text or component"},title:{control:{type:"text"},description:"The title text"}},args:{title:"This is a Title",slot:"This is the body"}},z=e=>({components:{UiResultCardRange:s},setup(){return{args:e}},template:`
        <ui-result-card-range :icon-name="['far', 'face-smile']" :title="args.title">
            {{args.slot}}
        </ui-result-card-range>
    `}),v=e=>({components:{UiResultCardRange:s},setup(){return{args:e}},template:`
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
    `}),t=z.bind({}),a=v.bind({});var o,c,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
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
})`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["singleCard","FullCard"];export{a as FullCard,j as __namedExportsOrder,U as default,t as singleCard};
//# sourceMappingURL=ui-result-card-range.stories-81fa7b78.js.map
