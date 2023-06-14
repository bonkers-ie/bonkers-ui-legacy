import{_ as i,E as t,a as s}from"./ui-badge-905cc928.js";import"./vue.esm-bundler-fe4d70d2.js";import"./ui-icon-05de86ac.js";import"./ui-typography-3ebb5017.js";const g={title:"Components/ui-badge",component:i,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The Element size"},more:{control:{type:"boolean"},description:"The Element more"}},args:{slot:"default text",kind:t.PRIMARY,size:s.SMALL,more:!1}},l=n=>({components:{UiBadge:i},setup(){return{args:n}},template:`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    `}),e=l.bind({});var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,g as default};
//# sourceMappingURL=ui-badge.stories-7d593a71.js.map
