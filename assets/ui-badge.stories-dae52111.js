import{_ as r,E as t,a as s}from"./ui-badge-0371b574.js";import"./vue.esm-bundler-5815757d.js";import"./index-7014e7a9.js";import"./ui-icon-253a2a48.js";import"./index-8738b0a4.js";import"./ui-typography-7e42daed.js";const f={title:"Components/ui-badge",component:r,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The Element size"}},args:{slot:"default text",kind:t.PRIMARY,size:s.SMALL}},l=n=>({components:{UiBadge:r},setup(){return{args:n}},template:`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    `}),e=l.bind({});var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    UiBadge
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    \`
})`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
//# sourceMappingURL=ui-badge.stories-dae52111.js.map
