import{U as a,E as p,a as s}from"./index-QX-aoQTD.js";import{d as t}from"./index-7cJsCGdg.js";import{U as c,E as d}from"./index-S5upXqaR.js";import"./vue.esm-bundler-0aijNq6S.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./ui-icon-5FFHX_Lo.js";const I={title:"Components/ui-icon-wrapper",component:a,argTypes:{kind:{control:{type:"select"},options:Object.values(p),description:"The Icon Wrapper kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The Icon Wrapper sizes"}},args:{slot:"icon"}},m=e=>({components:{UiIconWrapper:a,UiIcon:t,UiNotificationBadge:c},setup(){return{args:e,EBadgeOrigin:d,EIconWrapperSizes:s,EIconWrapperTypes:p}},template:`
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
        `}),i=m.bind({});var n,r,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const w=["Default"];export{i as Default,w as __namedExportsOrder,I as default};
