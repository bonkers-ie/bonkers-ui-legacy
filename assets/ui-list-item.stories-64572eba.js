import{U as a,E as i,a as e,b as n}from"./index-cbd39b57.js";import{I as c}from"./CONSTANTS-3fd880c0.js";import"./vue.esm-bundler-5815757d.js";import"./index-7014e7a9.js";import"./ui-icon-253a2a48.js";import"./index-8738b0a4.js";import"./ui-typography-7e42daed.js";const L={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(e),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},slot:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:i.DEFAULT,size:e.SM,spacing:n.DEFAULT,slot:"default slot"}},t=r=>({components:{UiListItem:a},setup(){return{args:r,ICON_DEFAULT:c}},template:`
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
})`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,L as default};
//# sourceMappingURL=ui-list-item.stories-64572eba.js.map
