import{U as a,E as p,a as e}from"./ui-icon-wrapper-Dxo4kmFV.js";import{_ as t}from"./ui-icon-lWAUSRk1.js";import{_ as c,E as d}from"./ui-notification-badge-Ryl9WIx6.js";import"./vue.esm-bundler-WCJNj6rQ.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const b={title:"Components/ui-icon-wrapper",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(p),description:"The Icon Wrapper kinds"},size:{control:{type:"select"},options:Object.values(e),description:"The Icon Wrapper sizes"},default:{control:{type:"text"}}},args:{default:"icon",size:e.DEFAULT}},i={render:s=>({components:{UiIconWrapper:a,UiIcon:t,UiNotificationBadge:c},setup(){return{args:s,EBadgeOrigin:d,EIconWrapperSizes:e,EIconWrapperTypes:p}},template:`
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
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["Default"];export{i as Default,f as __namedExportsOrder,b as default};
