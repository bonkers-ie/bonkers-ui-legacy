import{_ as a,E as i,a as e,b as n}from"./ui-list-item-DeCOoAZV.js";import{I as m}from"./CONSTANTS-Kjtq_aRX.js";import"./vue.esm-bundler-GDL5RDDy.js";import"./index-BMi5bGjf.js";import"./ui-icon-TvJ-ioVV.js";import"./index-2d-qg1vH.js";import"./ui-badge-CQIjg9QX.js";import"./ui-ber-rank-B1g6KSoz.js";import"./ui-button-Dek033vI.js";import"./ui-icon-wrapper-BbWLVwXO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-CCOgr0BJ.js";import"./ui-modal-DPX7S8D4.js";import"./ui-notification-badge-B6gEmCzq.js";import"./ui-snackbar-CZum_oMh.js";import"./ui-table-row-C3Jo_qJX.js";const A={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(e),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},default:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:i.DEFAULT,size:e.SM,spacing:n.DEFAULT,default:"default slot"}},t={render:l=>({components:{UiListItem:a},setup(){return{args:l,ICON_DEFAULT:m}},template:`
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
