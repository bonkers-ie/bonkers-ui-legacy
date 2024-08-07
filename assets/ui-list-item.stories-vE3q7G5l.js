import{_ as a,E as i,a as e,b as n}from"./ui-list-item-DDBg1qkp.js";import{I as m}from"./CONSTANTS-S6WLjT1j.js";import"./vue.esm-bundler-Cm5lky60.js";import"./index-hPfmctDV.js";import"./ui-icon-CvXCGWkG.js";import"./index-DSDrJ6QP.js";import"./ui-badge-CStOVQBS.js";import"./ui-ber-rank-DDqWcxxx.js";import"./ui-button-DYS8xTuD.js";import"./ui-icon-wrapper-CSqRByv3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-D0_iu_n5.js";import"./ui-modal-B3jBMCOV.js";import"./ui-notification-badge-Cf2TJ7L_.js";import"./ui-snackbar-vgm46w77.js";import"./ui-table-row-u-6wJwnW.js";const A={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(e),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},default:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:i.DEFAULT,size:e.SM,spacing:n.DEFAULT,default:"default slot"}},t={render:l=>({components:{UiListItem:a},setup(){return{args:l,ICON_DEFAULT:m}},template:`
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
