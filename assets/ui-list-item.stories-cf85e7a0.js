import{_ as a,E as e,a as i,b as n}from"./ui-list-item-0d49dd8b.js";import{I as c}from"./CONSTANTS-3fd880c0.js";import"./vue.esm-bundler-1832156e.js";import"./ui-icon-685efca2.js";import"./ui-typography-633a1041.js";const E={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(i),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},slot:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:e.DEFAULT,size:i.SM,spacing:n.DEFAULT,slot:"default slot"}},t=r=>({components:{UiListItem:a},setup(){return{args:r,ICON_DEFAULT:c}},template:`
            <ul>
                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" icon-class="text-secondary-alt" />

                <ui-list-item :icon="ICON_DEFAULT" :kind="args.kind" :spacing="args.spacing">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" icon-class="text-secondary-alt" :icon="ICON_DEFAULT" />
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
                <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" icon-class="text-secondary-alt" />

                <ui-list-item :icon="ICON_DEFAULT" :kind="args.kind" :spacing="args.spacing">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" icon-class="text-secondary-alt" :icon="ICON_DEFAULT" />
            </ul>
    \`
})`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,E as default};
//# sourceMappingURL=ui-list-item.stories-cf85e7a0.js.map
