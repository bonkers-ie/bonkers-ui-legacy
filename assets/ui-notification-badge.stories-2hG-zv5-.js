import{_ as a,E as i}from"./ui-notification-badge-uCRp5LLA.js";import"./vue.esm-bundler-26GhoP0B.js";const d={title:"Components/ui-notification-badge",component:a,argTypes:{origin:{control:{type:"select"},options:Object.values(i),description:"The Element origin"},default:{control:{type:"text"}}},args:{default:"1",origin:i.OFFSET_TOP_RIGHT}},e={render:r=>({components:{UiNotificationBadge:a},setup(){return{args:r}},template:`
            <div class="relative rounded-full bg-primary w-lg h-lg">
                <ui-notification-badge :origin="args.origin">
                    {{args.default}}
                </ui-notification-badge>
            </div>
            `})};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
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
                    {{args.default}}
                </ui-notification-badge>
            </div>
            \`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,d as default};
