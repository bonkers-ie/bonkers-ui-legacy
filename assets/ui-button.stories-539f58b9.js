import{_ as n,E as i,a as s}from"./ui-button-adb5bde9.js";import{_ as c,E as m}from"./ui-icon-e124efe1.js";import"./vue.esm-bundler-d669bd99.js";const z={title:"Components/ui-button",component:n,argTypes:{kind:{control:{type:"select"},options:Object.values(i),description:"The button kinds"},size:{control:{type:"select"},options:Object.values(s),description:"The button sizes"},fullWidth:{control:{type:"boolean"},description:"The full width size"},disabled:{control:{type:"boolean"},description:"Disabled state"},slot:{control:{type:"text"},description:"The slot text or component"},hasPrefix:{control:{type:"boolean"}},hasPostfix:{control:{type:"boolean"}}},args:{slot:"default text",hasPrefix:!1,hasPostfix:!1}},f=o=>({components:{UiButton:n,UiIcon:c},setup(){return{args:o,ESize:m}},template:`
        <ui-button :kind="args.kind"
                   :size="args.size"
                   :fullWidth="args.fullWidth"
                   :disabled="args.disabled"
        >
            <template #prefix v-if="args.hasPrefix">
                <ui-icon
                    :icon-name="['far', 'face-smile']"
                    :size="ESize.SM"
                />
            </template>
            ${o.slot}
            <template #postfix v-if="args.hasPostfix">
                <ui-icon
                    :icon-name="['far', 'face-smile']"
                    :size="ESize.SM"
                />
            </template>
        </ui-button>`}),h=()=>({components:{UiButton:n},setup(){return{EButtonSizes:s,EButtonTypes:i}},template:`
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
    `}),e=f.bind({});e.args={...e,kind:i.PRIMARY,size:s.MEDIUM,fullWidth:!1,disabled:!1};const t=h.bind({});var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    UiButton,
    UiIcon
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args,
      ESize
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: /*html*/\`
        <ui-button :kind="args.kind"
                   :size="args.size"
                   :fullWidth="args.fullWidth"
                   :disabled="args.disabled"
        >
            <template #prefix v-if="args.hasPrefix">
                <ui-icon
                    :icon-name="['far', 'face-smile']"
                    :size="ESize.SM"
                />
            </template>
            \${args.slot}
            <template #postfix v-if="args.hasPostfix">
                <ui-icon
                    :icon-name="['far', 'face-smile']"
                    :size="ESize.SM"
                />
            </template>
        </ui-button>\`
})`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
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
})`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["Primary","Buttons"];export{t as Buttons,e as Primary,x as __namedExportsOrder,z as default};
//# sourceMappingURL=ui-button.stories-539f58b9.js.map
