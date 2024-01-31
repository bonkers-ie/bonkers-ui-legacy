import{_ as l,E as e,a as i,b as n}from"./ui-list-item-MA3olil4.js";import{I as c}from"./CONSTANTS-xk2BJiFJ.js";import"./vue.esm-bundler-mcobj_hi.js";import"./index-EoXSGRkF.js";import"./ui-icon-ShhSiY0y.js";import"./index-EPInav8r.js";import"./ui-typography-nQUZKoWO.js";const L={title:"Components/ui-list-item",component:l,argTypes:{kind:{control:{type:"select"},options:Object.values(e),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(i),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},default:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:e.DEFAULT,size:i.SM,spacing:n.DEFAULT,default:"default slot"}},t={render:r=>({components:{UiListItem:l},setup(){return{args:r,ICON_DEFAULT:c}},template:`
                <ul>
                    <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" icon-class="text-secondary-alt" />

                    <ui-list-item :icon="ICON_DEFAULT" :kind="args.kind" :spacing="args.spacing">
                        text only
                    </ui-list-item>

                    <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                        {{ args.default }}
                    </ui-list-item>

                    <ui-list-item v-bind="args" icon-class="text-secondary-alt" :icon="ICON_DEFAULT" />
                </ul>
        `})};var s,o,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiListItem
    },
    setup() {
      return {
        args,
        ICON_DEFAULT
      };
    },
    template: /*html*/\`
                <ul>
                    <ui-list-item v-bind="args" :icon="ICON_DEFAULT" title="title only" icon-class="text-secondary-alt" />

                    <ui-list-item :icon="ICON_DEFAULT" :kind="args.kind" :spacing="args.spacing">
                        text only
                    </ui-list-item>

                    <ui-list-item v-bind="args" v-for= "item in 5" :key="item" :icon="ICON_DEFAULT">
                        {{ args.default }}
                    </ui-list-item>

                    <ui-list-item v-bind="args" icon-class="text-secondary-alt" :icon="ICON_DEFAULT" />
                </ul>
        \`
  })
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,L as default};
