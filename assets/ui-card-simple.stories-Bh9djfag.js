import{d as b,u as h,o as s,a as _,f as e,e as i,w as m,h as o,g as p}from"./vue.esm-bundler-DHcM-i38.js";import{a as w,b as u,U as d}from"./index-CbBMWzUC.js";const S={class:"ui-card-simple rounded-3xl bg-white px-sm py-md shadow-md"},r=b({__name:"ui-card-simple",setup(n){const l=h();return(a,y)=>(s(),_("div",S,[e(l).title?(s(),i(e(d),{key:0,weight:e(w).BOLD,align:e(u).CENTER,class:"pb-md"},{default:m(()=>[o(a.$slots,"title")]),_:3},8,["weight","align"])):p("",!0),o(a.$slots,"default"),e(l).footerSubtitle?(s(),i(e(d),{key:1,align:e(u).CENTER},{default:m(()=>[o(a.$slots,"footerSubtitle")]),_:3},8,["align"])):p("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footerSubtitle"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const k={title:"Components/ui-card-simple",component:r,argTypes:{default:{control:{type:"text"}}},args:{default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},t={render:n=>({components:{UiCardSimple:r},setup(){return{args:n}},template:`

            <ui-card-simple>
                <template v-slot:title>
                    I want to borrow for
                </template>
                <p class="mb-md text-center">
                    {{args.default}}
                </p>
                <template v-slot:footerSubtitle>
                    Type in or adjust the amount
                </template>
            </ui-card-simple>
        `})};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
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
                    {{args.default}}
                </p>
                <template v-slot:footerSubtitle>
                    Type in or adjust the amount
                </template>
            </ui-card-simple>
        \`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,k as default};
