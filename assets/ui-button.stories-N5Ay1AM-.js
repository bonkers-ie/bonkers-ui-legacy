import{_ as o,E as t,a as i}from"./ui-button-Jz46TVZo.js";import{_ as c,E as m}from"./ui-icon-El7tnX69.js";import"./vue.esm-bundler-26GhoP0B.js";const y={title:"Components/ui-button",component:o,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The button kinds"},size:{control:{type:"select"},options:Object.values(i),description:"The button sizes"},fullWidth:{control:{type:"boolean"},description:"The full width size"},disabled:{control:{type:"boolean"},description:"Disabled state"},default:{control:{type:"text"},description:"The slot text or component"},prefix:{control:{type:"boolean"}},postfix:{control:{type:"boolean"}}},args:{kind:t.PRIMARY,size:i.MEDIUM,fullWidth:!1,disabled:!1,default:"default text",prefix:!1,postfix:!1}},e={render:s=>({components:{UiButton:o,UiIcon:c},setup(){return{args:s,ESize:m}},template:`
            <ui-button v-bind="args">
                <template #prefix v-if="args.prefix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                         :size="ESize.SM"
                    />
                </template>
                ${s.default}
                <template #postfix v-if="args.postfix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                        :size="ESize.SM"
                    />
                </template>
            </ui-button>`})},n={render:()=>({components:{UiButton:o},setup(){return{EButtonSizes:i,EButtonTypes:t}},template:`
            <div :style="{
                display: 'flex',
                flexWrap: 'wrap'
            }"
            >
            <div
                :style="{margin: '10px'}"
                v-for="kind in EButtonTypes"
                :key="kind"
            >
                <ui-button
                    :kind="kind"
                    :size="EButtonSizes.MEDIUM"
                >
                    {{ kind }}
                </ui-button>
            </div>
            </div>
        `})};var r,a,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiButton,
      UiIcon
    },
    setup() {
      return {
        args,
        ESize
      };
    },
    template: /*html*/\`
            <ui-button v-bind="args">
                <template #prefix v-if="args.prefix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                         :size="ESize.SM"
                    />
                </template>
                \${args.default}
                <template #postfix v-if="args.postfix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                        :size="ESize.SM"
                    />
                </template>
            </ui-button>\`
  })
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,u,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiButton
    },
    setup() {
      return {
        EButtonSizes,
        EButtonTypes
      };
    },
    template: /*html*/\`
            <div :style="{
                display: 'flex',
                flexWrap: 'wrap'
            }"
            >
            <div
                :style="{margin: '10px'}"
                v-for="kind in EButtonTypes"
                :key="kind"
            >
                <ui-button
                    :kind="kind"
                    :size="EButtonSizes.MEDIUM"
                >
                    {{ kind }}
                </ui-button>
            </div>
            </div>
        \`
  })
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const z=["Primary","Buttons"];export{n as Buttons,e as Primary,z as __namedExportsOrder,y as default};
