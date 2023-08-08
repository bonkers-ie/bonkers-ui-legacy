import{U as p,E as n,a as s}from"./ui-icon-wrapper-213aec77.js";import{_ as t}from"./ui-icon-685efca2.js";import{_ as c,E as m}from"./ui-notification-badge-28759da7.js";import"./vue.esm-bundler-1832156e.js";import"./_plugin-vue_export-helper-c27b6911.js";const f={title:"Components/ui-icon-wrapper",component:p,argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"The Icon Wrapper kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The Icon Wrapper sizes"}},args:{slot:"icon"}},d=e=>({components:{UiIconWrapper:p,UiIcon:t,UiNotificationBadge:c},setup(){return{args:e,EBadgeOrigin:m,EIconWrapperSizes:s,EIconWrapperTypes:n}},template:`
        <ui-icon-wrapper :kind="EIconWrapperTypes.PRIMARY" v-bind="args" class="mb-sm">
            <p> ${e.slot} </p>
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
        `}),i=d.bind({});var r,o,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
            <p> \${args.slot} </p>
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
})`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,f as default};
//# sourceMappingURL=ui-icon-wrapper.stories-5c4351d4.js.map
