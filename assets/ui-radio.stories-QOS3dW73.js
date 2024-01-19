import{U as i}from"./ui-radio-XP1OStPF.js";import{b as t}from"./vue.esm-bundler-26GhoP0B.js";import{E as a}from"./align-qS2OfZfs.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const p={title:"Components/ui-radio",component:i,argTypes:{justify:{control:{type:"select"},options:Object.values(a),description:"The Element justify"},invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},default:{control:{type:"text"}}},args:{default:"Some text",justify:a.START,invertOrder:!1,disabled:!1}},e={render:l=>({components:{UiRadio:i},setup(){const n=t("value4");return{args:l,modelValue:n}},template:`
            <div :style="{display: 'grid', gridGap: '3px'}">
                <ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" disabled value="value4" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
            </div>
        `})};var d,r,o;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiRadio
    },
    setup() {
      const modelValue = ref("value4");
      return {
        args,
        modelValue
      };
    },
    // And then the \`args\` are bound to your component with \`v-bind="args"\`
    template: /*html*/\`
            <div :style="{display: 'grid', gridGap: '3px'}">
                <ui-radio v-bind="args" name="radio" value="value1" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" value="value2" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" value="value3" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
                <ui-radio v-bind="args" name="radio" disabled value="value4" v-model="modelValue">
                    {{args.default}}
                </ui-radio>
            </div>
        \`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,p as default};
