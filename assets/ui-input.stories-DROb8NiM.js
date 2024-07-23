import{_ as s,E as g,a,b as l}from"./ui-input-Bvsj6PDH.js";import{d as h,o as y,c as x,g as f,r as m}from"./vue.esm-bundler-BFiz2kkF.js";import"./index-C2WyQs_d.js";const _=["width","height"],b=f("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),I=[b],v=h({__name:"icon",props:{size:{}},setup(t){return(e,L)=>(y(),x("svg",{width:e.size,height:e.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},I,8,_))}});v.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const w={title:"Components/ui-input",component:s,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(g),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(a),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},autocomplete:{control:{type:"select"},option:Object.values(l),description:"The Element autocomplete state"},heading:{control:{type:"text"}},maxlength:{control:{type:"text"}},minlength:{control:{type:"text"}}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:a.TEXT,autocomplete:l.OFF,heading:"heading",maxlength:"5",minlength:"1"}},n={render:t=>({components:{UiInput:s},setup(){const e=m("");return{args:t,valueModel:e}},template:`
            <ui-input v-bind="args" v-model="valueModel" />
        `})},o={render:t=>({components:{UiInput:s,Icon:v},setup(){const e=m("");return{args:t,valueModel:e}},template:`
            <div :style="{
                display: 'grid',
                gridGap: '12px'
            }">
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:prefix-icon>
                        <span class="text-secondary-alt"> € </span>
                    </template>
                </ui-input>
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:prefix-icon>
                        <Icon :size="16" class="text-secondary-alt" />
                    </template>
                </ui-input>
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:postfix-icon>
                        <Icon :size="16"  class="text-secondary-alt" />
                    </template>
                </ui-input>
            </div>
        `})};var i,r,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput
    },
    setup() {
      const valueModel = ref("");
      return {
        args,
        valueModel
      };
    },
    template: /*html*/\`
            <ui-input v-bind="args" v-model="valueModel" />
        \`
  })
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInput,
      Icon
    },
    setup() {
      const valueModel = ref("");
      return {
        args,
        valueModel
      };
    },
    template: /*html*/\`
            <div :style="{
                display: 'grid',
                gridGap: '12px'
            }">
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:prefix-icon>
                        <span class="text-secondary-alt"> € </span>
                    </template>
                </ui-input>
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:prefix-icon>
                        <Icon :size="16" class="text-secondary-alt" />
                    </template>
                </ui-input>
                <ui-input v-bind="args" v-model="valueModel">
                    <template v-slot:postfix-icon>
                        <Icon :size="16"  class="text-secondary-alt" />
                    </template>
                </ui-input>
            </div>
        \`
  })
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Default","AllInputs"];export{o as AllInputs,n as Default,z as __namedExportsOrder,w as default};
