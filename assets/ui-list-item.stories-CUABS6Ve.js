import{_ as a,E as i,a as e,b as n}from"./ui-list-item-Dbdvbfj3.js";import{I as m}from"./CONSTANTS-BnlUZ2HU.js";import"./vue.esm-bundler-BD_Ybmc6.js";import"./index-DC8R61pj.js";import"./ui-icon-DDKEQqeg.js";import"./index-C-PnJtVA.js";import"./ui-badge-tx0QK-pt.js";import"./ui-ber-rank-CYlCw3Sp.js";import"./ui-button-BO9TpgYs.js";import"./ui-icon-wrapper-BZuM4xna.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-BC36Fajx.js";import"./ui-modal-G0S5mKpZ.js";import"./ui-notification-badge-sFNI5A4g.js";import"./ui-snackbar-BOYN5Zpm.js";import"./ui-table-row-k0lY5LGq.js";const A={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(e),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},default:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:i.DEFAULT,size:e.SM,spacing:n.DEFAULT,default:"default slot"}},t={render:l=>({components:{UiListItem:a},setup(){return{args:l,ICON_DEFAULT:m}},template:`
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
        `})};var s,o,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,A as default};
