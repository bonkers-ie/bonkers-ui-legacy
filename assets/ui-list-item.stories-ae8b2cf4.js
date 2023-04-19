import{_ as r,E as e,a as i,b as n}from"./ui-list-item-1e091b95.js";import{I as m}from"./CONSTANTS-3fd880c0.js";import"./vue.esm-bundler-9a4beff8.js";import"./ui-icon-ee9e3f6c.js";import"./ui-typography-43c7c98a.js";const E={title:"Components/ui-list-item",component:r,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(i),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},slot:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:e.DEFAULT,size:i.SM,spacing:n.DEFAULT,slot:"default slot"}},t=a=>({components:{UiListItem:r},setup(){return{args:a,ICON_DEFAULT:m}},template:`
            <ul>
                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" />

                <ui-list-item :icon="ICON_DEFAULT" :spacing="args.spacing">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" />
            </ul>
    `});var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    UiListItem
  },
  setup() {
    return {
      args,
      ICON_DEFAULT
    };
  },
  template: /*html*/\`
            <ul>
                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" />

                <ui-list-item :icon="ICON_DEFAULT" :spacing="args.spacing">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" />
            </ul>
    \`
})`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,E as default};
//# sourceMappingURL=ui-list-item.stories-ae8b2cf4.js.map
