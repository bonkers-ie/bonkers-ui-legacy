import{_ as s,E as i,a as o}from"./ui-button-DYS8xTuD.js";import"./index-hPfmctDV.js";import{_ as c,E as m}from"./ui-icon-CvXCGWkG.js";import"./vue.esm-bundler-Cm5lky60.js";const z={title:"Components/ui-button",component:s,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The button kinds"},size:{control:{type:"select"},options:Object.values(o),description:"The button sizes"},fullWidth:{control:{type:"boolean"},description:"The full width size"},disabled:{control:{type:"boolean"},description:"Disabled state"},default:{control:{type:"text"},description:"The slot text or component"},prefix:{control:{type:"boolean"}},postfix:{control:{type:"boolean"}}},args:{kind:i.PRIMARY,size:o.MEDIUM,fullWidth:!1,disabled:!1,default:"default text",prefix:!1,postfix:!1}},e={render:n=>({components:{UiButton:s,UiIcon:c},setup(){return{args:n,ESize:m}},template:`
            <ui-button v-bind="args">
                <template #prefix v-if="args.prefix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                         :size="ESize.SM"
                    />
                </template>
                <template #default>
                    ${n.default}
                </template>
                <template #postfix v-if="args.postfix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                        :size="ESize.SM"
                    />
                </template>
            </ui-button>`})},t={render:()=>({components:{UiButton:s},setup(){return{EButtonSizes:o,EButtonTypes:i}},template:`
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
        `})};var a,r,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
                <template #default>
                    \${args.default}
                </template>
                <template #postfix v-if="args.postfix">
                    <ui-icon
                        :icon-name="['far', 'face-smile']"
                        :size="ESize.SM"
                    />
                </template>
            </ui-button>\`
  })
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const E=["Primary","Buttons"];export{t as Buttons,e as Primary,E as __namedExportsOrder,z as default};
