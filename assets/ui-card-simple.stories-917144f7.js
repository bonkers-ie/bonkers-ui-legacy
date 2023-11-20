import{e as _,A as b,o as a,g as h,u as e,k as i,l as m,j as o,n as p}from"./vue.esm-bundler-052d1dbc.js";import{a as S,b as c,_ as u}from"./ui-typography-1589d420.js";const w={class:"ui-card-simple rounded-3xl bg-white px-sm py-md shadow-md"},n=_({__name:"ui-card-simple",setup(r){const l=b();return(s,x)=>(a(),h("div",w,[e(l).title?(a(),i(e(u),{key:0,weight:e(S).BOLD,align:e(c).CENTER,class:"pb-md"},{default:m(()=>[o(s.$slots,"title")]),_:3},8,["weight","align"])):p("",!0),o(s.$slots,"default"),e(l).footerSubtitle?(a(),i(e(u),{key:1,align:e(c).CENTER},{default:m(()=>[o(s.$slots,"footerSubtitle")]),_:3},8,["align"])):p("",!0)]))}});n.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footerSubtitle"}],sourceFiles:["/mnt/e/Projects/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const k={title:"Components/ui-card-simple",component:n,argTypes:{},args:{slot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},C=r=>({components:{UiCardSimple:n},setup(){return{args:r}},template:`

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
    `}),t=C.bind({});var d,f,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,k as default};
//# sourceMappingURL=ui-card-simple.stories-917144f7.js.map
