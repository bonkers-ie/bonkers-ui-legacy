import{_ as o,E as t,a as s}from"./ui-badge-7bCmM-UD.js";import"./vue.esm-bundler-0aijNq6S.js";import"./index-7cJsCGdg.js";import"./ui-icon-5FFHX_Lo.js";import"./index-x7TYTibA.js";import"./ui-typography-dWkvwKnc.js";const f={title:"Components/ui-badge",component:o,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The Element size"}},args:{slot:"default text",kind:t.PRIMARY,size:s.SMALL}},l=r=>({components:{UiBadge:o},setup(){return{args:r}},template:`
        <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
            {{ args.slot }}
        </ui-badge>
    `}),e=l.bind({});var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
