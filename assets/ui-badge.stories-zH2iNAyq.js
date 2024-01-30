import{_ as i,E as t,a as n}from"./ui-badge-Iv_V5K44.js";import"./vue.esm-bundler-Cwk8bBuE.js";import"./index-7u150JUb.js";import"./ui-icon-TZfT8jFa.js";import"./index-Us8SXqR_.js";import"./ui-typography-a6mHC5LA.js";const g={title:"Components/ui-badge",component:i,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(n),description:"The Element size"},default:{control:{type:"text"}}},args:{kind:t.PRIMARY,size:n.SMALL,default:"hello"}},e={render:o=>({components:{UiBadge:i},setup(){return{args:o}},template:`
            <ui-badge :icon="['far', 'face-smile']" v-bind="args" class="inline-flex">
                {{args.default}}
            </ui-badge>
        `})};var a,s,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
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
                {{args.default}}
            </ui-badge>
        \`
  })
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,g as default};
