import{d as _,u as b,o as a,e as h,i as e,g as i,w as m,k as o,j as p}from"./vue.esm-bundler-a43e9918.js";import{a as w,b as u,_ as c}from"./ui-typography-debf4260.js";const S={class:"ui-card-simple rounded-3xl bg-white px-sm py-md shadow-md"},r=_({__name:"ui-card-simple",setup(n){const l=b();return(s,C)=>(a(),h("div",S,[e(l).title?(a(),i(e(c),{key:0,weight:e(w).BOLD,align:e(u).CENTER,class:"pb-md"},{default:m(()=>[o(s.$slots,"title")]),_:3},8,["weight","align"])):p("",!0),o(s.$slots,"default"),e(l).footerSubtitle?(a(),i(e(c),{key:1,align:e(u).CENTER},{default:m(()=>[o(s.$slots,"footerSubtitle")]),_:3},8,["align"])):p("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footerSubtitle"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const T={title:"Components/ui-card-simple",component:r,argTypes:{},args:{slot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},k=n=>({components:{UiCardSimple:r},setup(){return{args:n}},template:`

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
})`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,T as default};
//# sourceMappingURL=ui-card-simple.stories-c46b6395.js.map
