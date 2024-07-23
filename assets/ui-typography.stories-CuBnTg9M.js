import{_ as r,b as a,E as p,c as l,d as c,a as n}from"./index-C2WyQs_d.js";import"./vue.esm-bundler-BFiz2kkF.js";const u={title:"Components/ui-typography",component:r,argTypes:{is:{control:{type:"text"},description:"The Element component or tag"},kind:{control:{type:"select"},options:Object.values(a),description:"The Element kinds"},weight:{control:{type:"select"},options:Object.values(p),description:"The Element weights"},align:{control:{type:"select"},options:Object.values(l),description:"The Element align"},textTransform:{control:{type:"select"},options:Object.values(c),description:"The Element transform"},lineHeight:{control:{type:"boolean"},description:"The Element line height 1.6"},underline:{control:{type:"boolean"},description:"The Element underline"},size:{control:{type:"select"},options:Object.values(n),description:"The Element sizes"},default:{control:{type:"text"}}},args:{default:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",underline:!1,size:n.LG,lineHeight:!0,textTransform:void 0,align:void 0,weight:void 0,is:"p"}},e={render:t=>({components:{UiTypography:r},setup(){return{args:t}},template:`
            <ui-typography v-bind="args">
                ${t.default}
            </ui-typography>
        `})};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTypography
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
            <ui-typography v-bind="args">
                \${args.default}
            </ui-typography>
        \`
  })
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,u as default};
