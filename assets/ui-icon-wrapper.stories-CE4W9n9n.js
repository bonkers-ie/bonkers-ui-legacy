import{U as a,E as p,a as e}from"./ui-icon-wrapper-CgI6lp_P.js";import"./index-CZYo2hQv.js";import{_ as t,E as c}from"./ui-notification-badge-AlXVIqm2.js";import{_ as d}from"./ui-icon-anBeZGyU.js";import"./vue.esm-bundler-DHcM-i38.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Components/ui-icon-wrapper",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(p),description:"The Icon Wrapper kinds"},size:{control:{type:"select"},options:Object.values(e),description:"The Icon Wrapper sizes"},default:{control:{type:"text"}}},args:{default:"icon",size:e.DEFAULT}},i={render:s=>({components:{UiIconWrapper:a,UiIcon:d,UiNotificationBadge:t},setup(){return{args:s,EBadgeOrigin:c,EIconWrapperSizes:e,EIconWrapperTypes:p}},template:`
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
            `})};var n,r,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,f as default};
