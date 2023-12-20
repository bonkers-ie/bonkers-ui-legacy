import{e as b,u as _,o,g as h,l as e,k as i,n as m,p as a,m as p}from"./vue.esm-bundler-0aijNq6S.js";import{U as u}from"./index-x7TYTibA.js";import{a as S,b as c}from"./ui-typography-dWkvwKnc.js";const w={class:"ui-card-simple rounded-3xl bg-white px-sm py-md shadow-md"},r=b({__name:"ui-card-simple",setup(n){const l=_();return(s,y)=>(o(),h("div",w,[e(l).title?(o(),i(e(u),{key:0,weight:e(S).BOLD,align:e(c).CENTER,class:"pb-md"},{default:m(()=>[a(s.$slots,"title")]),_:3},8,["weight","align"])):p("",!0),a(s.$slots,"default"),e(l).footerSubtitle?(o(),i(e(u),{key:1,align:e(c).CENTER},{default:m(()=>[a(s.$slots,"footerSubtitle")]),_:3},8,["align"])):p("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footerSubtitle"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const E={title:"Components/ui-card-simple",component:r,argTypes:{},args:{slot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},k=n=>({components:{UiCardSimple:r},setup(){return{args:n}},template:`

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
})`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,E as default};
