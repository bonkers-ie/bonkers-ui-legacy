import{d as _,x as b,o,e as h,u as e,q as i,j as m,k as a,v as p}from"./vue.esm-bundler-9a4beff8.js";import{b as S,d as u,_ as c}from"./ui-typography-43c7c98a.js";const w={class:"ui-card-simple rounded-3xl shadow-md py-md px-sm bg-white"},r=_({__name:"ui-card-simple",setup(n){const l=b();return(s,x)=>(o(),h("div",w,[e(l).title?(o(),i(e(c),{key:0,weight:e(S).BOLD,align:e(u).CENTER,class:"pb-md"},{default:m(()=>[a(s.$slots,"title")]),_:3},8,["weight","align"])):p("",!0),a(s.$slots,"default"),e(l).footerSubtitle?(o(),i(e(c),{key:1,align:e(u).CENTER},{default:m(()=>[a(s.$slots,"footerSubtitle")]),_:3},8,["align"])):p("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footerSubtitle"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const T={title:"Components/ui-card-simple",component:r,argTypes:{},args:{slot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},k=n=>({components:{UiCardSimple:r},setup(){return{args:n}},template:`

        <ui-card-simple>
            <template v-slot:title>
                I want to borrow for
            </template>
            <p class="mb-md text-center">
                {{args.slot}}
            </p>
            <template v-slot:footerSubtitle>
                Type in or adjust the amount
            </template>
        </ui-card-simple>
    `}),t=k.bind({});var d,f,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    UiCardSimple
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`

        <ui-card-simple>
            <template v-slot:title>
                I want to borrow for
            </template>
            <p class="mb-md text-center">
                {{args.slot}}
            </p>
            <template v-slot:footerSubtitle>
                Type in or adjust the amount
            </template>
        </ui-card-simple>
    \`
})`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,T as default};
//# sourceMappingURL=ui-card-simple.stories-e178b55a.js.map
