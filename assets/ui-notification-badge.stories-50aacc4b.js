import{U as a,E as n}from"./index-3dbbfdf1.js";import"./vue.esm-bundler-5815757d.js";const c={title:"Components/ui-notification-badge",component:a,argTypes:{origin:{control:{type:"select"},options:Object.values(n),description:"The Element origin"}},args:{slot:"1",origin:n.OFFSET_TOP_RIGHT}},s=r=>({components:{UiNotificationBadge:a},setup(){return{args:r}},template:`
        <div class="relative rounded-full bg-primary w-lg h-lg">
            <ui-notification-badge :origin="args.origin">
                {{args.slot}}
            </ui-notification-badge>
        </div>
        `}),i=s.bind({});var t,e,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    UiNotificationBadge
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <div class="relative rounded-full bg-primary w-lg h-lg">
            <ui-notification-badge :origin="args.origin">
                {{args.slot}}
            </ui-notification-badge>
        </div>
        \`
})`,...(o=(e=i.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const d=["Default"];export{i as Default,d as __namedExportsOrder,c as default};
//# sourceMappingURL=ui-notification-badge.stories-50aacc4b.js.map
