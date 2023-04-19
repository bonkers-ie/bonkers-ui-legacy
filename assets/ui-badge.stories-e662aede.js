import{_ as r,E as s,a as t}from"./ui-badge-ffdf7bbb.js";import"./vue.esm-bundler-9a4beff8.js";import"./ui-icon-ee9e3f6c.js";import"./ui-typography-43c7c98a.js";const g={title:"Components/ui-badge",component:r,argTypes:{kind:{control:{type:"select"},options:Object.values(s),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(t),description:"The Element size"}},args:{slot:"default text",kind:s.PRIMARY,size:t.SMALL}},c=n=>({components:{UiBadge:r},setup(){return{args:n}},template:`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    `}),e=c.bind({});var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    UiBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    \`
})`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,g as default};
//# sourceMappingURL=ui-badge.stories-e662aede.js.map
