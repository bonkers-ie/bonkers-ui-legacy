import{_ as a,E as i,a as e,b as n}from"./ui-list-item-0RCZhsQ3.js";import{I as m}from"./CONSTANTS-Cf1Q4lil.js";import"./vue.esm-bundler-Dt7u_LQR.js";import"./index-Dn34UTOZ.js";import"./ui-icon-rVXr54Jy.js";import"./index-xwvS6dOf.js";import"./ui-badge-DRpHt3Yi.js";import"./ui-ber-rank-DTuUa1Fr.js";import"./ui-button-1NC6EiXz.js";import"./ui-icon-wrapper-Do2d1Urq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-DqgKajUf.js";import"./ui-modal-2SzyD_T_.js";import"./ui-notification-badge-Ybsj0UfI.js";import"./ui-snackbar-BbyHo2-Q.js";import"./ui-table-row-LM0LtwIm.js";const A={title:"Components/ui-list-item",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The Element kind"},size:{control:{type:"select"},options:Object.values(e),description:"The Element size"},spacing:{control:{type:"select"},options:Object.values(n),description:"The Element spacing"},title:{control:{type:"text"},description:"The Element title"},default:{control:{type:"text"},description:"The slot text or component"}},args:{title:"default text",kind:i.DEFAULT,size:e.SM,spacing:n.DEFAULT,default:"default slot"}},t={render:l=>({components:{UiListItem:a},setup(){return{args:l,ICON_DEFAULT:m}},template:`
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
