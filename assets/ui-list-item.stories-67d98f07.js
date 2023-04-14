import{_ as n,E as e,a as i,b as s}from"./ui-list-item-50bd3bf2.js";import"./vue.esm-bundler-9a4beff8.js";import"./ui-icon-ee9e3f6c.js";import"./ui-typography-43c7c98a.js";const f={title:"Components/ui-list-item",component:n,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(i),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(s),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},slot:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:e.DEFAULT,size:i.SM,spacing:s.DEFAULT,slot:"default slot"}},m=r=>({components:{UiListItem:n},setup(){return{args:r}},template:`
            <ul>
                <ui-list-item v-bind="args" :icon="['far', 'face-smile']" title="title only">
                    {{args.slot}}
                </ui-list-item>

                <ui-list-item v-bind="args" :icon="['far', 'face-smile']">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="['far', 'face-smile']">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" class="compact-list-item"  :icon="['far', 'face-smile']" />
            </ul>
    `}),t=m.bind({});var l,o,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    UiListItem
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
            <ul>
                <ui-list-item v-bind="args" :icon="['far', 'face-smile']" title="title only">
                    {{args.slot}}
                </ui-list-item>

                <ui-list-item v-bind="args" :icon="['far', 'face-smile']">
                    text only
                </ui-list-item>

                <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="['far', 'face-smile']">
                    {{ args.title }}
                </ui-list-item>

                <ui-list-item v-bind="args" class="compact-list-item"  :icon="['far', 'face-smile']" />
            </ul>
    \`
})`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,f as default};
//# sourceMappingURL=ui-list-item.stories-67d98f07.js.map
