import{_ as s,E as e}from"./ui-snackbar-BOYN5Zpm.js";import"./vue.esm-bundler-BD_Ybmc6.js";import"./index-C-PnJtVA.js";const p={title:"Components/ui-snackbar",component:s,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"The button kinds"},title:{controls:{type:"text"}},articleSlot:{controls:{type:"text"}}},args:{articleSlot:"This is an article",title:"This is a title",kind:e.DEFAULT}},t={render:o=>({components:{UiSnackbar:s},setup(){return{args:o}},template:`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        `})};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSnackbar
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        \`
  })
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,p as default};
