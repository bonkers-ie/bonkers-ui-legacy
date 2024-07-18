import{U as p,E as n,a as e}from"./ui-icon-wrapper-Do2d1Urq.js";import"./index-Dn34UTOZ.js";import{_ as t,E as c}from"./ui-notification-badge-Ybsj0UfI.js";import{_ as d}from"./ui-icon-rVXr54Jy.js";import"./vue.esm-bundler-Dt7u_LQR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/ui-icon-wrapper",component:p,argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"The Icon Wrapper kinds"},size:{control:{type:"select"},options:Object.values(e),description:"The Icon Wrapper sizes"},default:{control:{type:"text"}}},args:{default:"icon",size:e.DEFAULT}},i={render:s=>({components:{UiIconWrapper:p,UiIcon:d,UiNotificationBadge:t},setup(){return{args:s,EBadgeOrigin:c,EIconWrapperSizes:e,EIconWrapperTypes:n}},template:`
            <ui-icon-wrapper :kind="EIconWrapperTypes.PRIMARY" v-bind="args" class="mb-sm">
                <p> {{args.default}} </p>
                <UiNotificationBadge :origin=EBadgeOrigin.OFFSET_TOP_RIGHT>
                    1
                </UiNotificationBadge>
            </ui-icon-wrapper>

            <ui-icon-wrapper :kind="EIconWrapperTypes.SECONDARY" v-bind="args" class="mb-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/640px-Emblem-person-blue.svg.png" width="20" height="20" />
            </ui-icon-wrapper>

            <ui-icon-wrapper v-bind="args">
                <ui-icon :icon-name="['far', 'face-smile']" :size=EIconWrapperSizes.SM :style="{color: 'black'}" />
                <UiNotificationBadge slot="badge" :origin=EBadgeOrigin.DEFAULT>
                    2
                </UiNotificationBadge>
            </ui-icon-wrapper>
            `})};var r,o,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiIconWrapper,
      UiIcon,
      UiNotificationBadge
    },
    setup() {
      return {
        args,
        EBadgeOrigin,
        EIconWrapperSizes,
        EIconWrapperTypes
      };
    },
    template: /*html*/\`
            <ui-icon-wrapper :kind="EIconWrapperTypes.PRIMARY" v-bind="args" class="mb-sm">
                <p> {{args.default}} </p>
                <UiNotificationBadge :origin=EBadgeOrigin.OFFSET_TOP_RIGHT>
                    1
                </UiNotificationBadge>
            </ui-icon-wrapper>

            <ui-icon-wrapper :kind="EIconWrapperTypes.SECONDARY" v-bind="args" class="mb-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/640px-Emblem-person-blue.svg.png" width="20" height="20" />
            </ui-icon-wrapper>

            <ui-icon-wrapper v-bind="args">
                <ui-icon :icon-name="['far', 'face-smile']" :size=EIconWrapperSizes.SM :style="{color: 'black'}" />
                <UiNotificationBadge slot="badge" :origin=EBadgeOrigin.DEFAULT>
                    2
                </UiNotificationBadge>
            </ui-icon-wrapper>
            \`
  })
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,f as default};
