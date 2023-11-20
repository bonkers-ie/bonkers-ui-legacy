import{_ as i,E as r,a,b as p,c,d as l}from"./ui-typography-1589d420.js";import"./vue.esm-bundler-052d1dbc.js";const u={title:"Components/ui-typography",component:i,argTypes:{is:{control:{type:"text"},description:"The Element component or tag"},kind:{control:{type:"select"},options:Object.values(r),description:"The Element kinds"},weight:{control:{type:"select"},options:Object.values(a),description:"The Element weights"},align:{control:{type:"select"},options:Object.values(p),description:"The Element align"},textTransform:{control:{type:"select"},options:Object.values(c),description:"The Element transform"},lineHeight:{control:{type:"boolean"},description:"The Element line height 1.6"},underline:{control:{type:"boolean"},description:"The Element underline"},size:{control:{type:"select"},options:Object.values(l),description:"The Element sizes"}},args:{slot:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",underline:!1}},m=t=>({components:{UiTypography:i},setup(){return{args:t}},template:`
        <ui-typography v-bind="args">
            ${t.slot}
        </ui-typography>
    `}),e=m.bind({});e.args={size:l.MD,weight:a.REGULAR,align:p.LEFT,lineHeight:!0,kind:r.PRIMARY,is:"p"};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    UiTypography
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
        <ui-typography v-bind="args">
            \${args.slot}
        </ui-typography>
    \`
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,u as default};
//# sourceMappingURL=ui-typography.stories-b18442da.js.map
