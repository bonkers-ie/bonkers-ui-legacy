import{_ as r,E as n}from"./ui-icon-5FFHX_Lo.js";import"./vue.esm-bundler-0aijNq6S.js";const m={title:"Components/ui-icon",component:r,argTypes:{size:{control:{type:"select"},options:Object.values(n),description:"The Element size"}},args:{size:n.LG}},i=a=>({components:{UiIcon:r},setup(){return{args:a}},template:`
        <ui-icon v-bind="args" :icon-name="['far', 'face-smile']" />
    `}),e=i.bind({});var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    UiIcon
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
        <ui-icon v-bind="args" :icon-name="['far', 'face-smile']" />
    \`
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,m as default};
