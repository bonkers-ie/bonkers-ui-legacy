import{_ as i,E as n,a as t}from"./ui-badge-DrE3B724.js";import"./vue.esm-bundler-DHcM-i38.js";import"./index-CZYo2hQv.js";import"./ui-icon-anBeZGyU.js";import"./index-CbBMWzUC.js";const u={title:"Components/ui-badge",component:i,argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"The Element kinds"},size:{control:{type:"select"},options:Object.values(t),description:"The Element size"},default:{control:{type:"text"}}},args:{kind:n.PRIMARY,size:t.SMALL,default:"hello"}},e={render:o=>({components:{UiBadge:i},setup(){return{args:o}},template:`
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,u as default};
