import{d as I,o as u,e as T,k as s,l as c,g as A,u as t,q as f,j as v,m as g,t as b,v as h,a as S}from"./vue.esm-bundler-9a4beff8.js";import{E as y,_ as x,a as C}from"./ui-typography-43c7c98a.js";var n=(e=>(e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.ERROR="ERROR",e))(n||{}),r=(e=>(e.TEXT="text",e.NUMBER="number",e.TEL="tel",e.PASSWORD="password",e.EMAIL="email",e))(r||{});const z={class:"ui-input"},N=["value","pattern","type","placeholder","maxlength","minlength"],d=I({__name:"ui-input",props:{placeholder:{default:""},modelValue:{default:""},disabled:{type:Boolean},kind:{default:n.SECONDARY},heading:{default:void 0},subLabel:{default:void 0},type:{default:r.TEXT},pattern:{default:void 0},maxlength:{default:void 0},minlength:{default:void 0},focusHandler:{type:Function,default:()=>{}}},emits:["update:modelValue"],setup(e){return(a,l)=>(u(),T("div",z,[s(a.$slots,"header",{},()=>[e.heading?(u(),f(t(x),{key:0,class:"mb-xs",size:t(y).MD},{default:v(()=>[g(b(e.heading),1)]),_:1},8,["size"])):h("",!0)]),c("label",{class:A(["ui-input__wrapper flex w-full rounded-lg border bg-white items-center p-sm gap-xs",[e.kind===t(n).SECONDARY&&"border-secondary-alt-500 hover:border-secondary-alt-700",e.kind===t(n).PRIMARY&&"border-primary",e.kind===t(n).ERROR&&"border-error",e.disabled&&"border-secondary-alt-300 bg-secondary-alt-200"]])},[s(a.$slots,"prefix-icon"),c("input",{value:e.modelValue,pattern:e.pattern,class:"bg-transparent border-0 outline-none w-full placeholder:text-secondary-alt placeholder:italic",type:e.type,placeholder:e.placeholder,maxlength:e.maxlength,minlength:e.minlength,onInput:l[0]||(l[0]=p=>{var m;return a.$emit("update:modelValue",(m=p.target)==null?void 0:m.value)}),onFocus:l[1]||(l[1]=(...p)=>e.focusHandler&&e.focusHandler(...p))},null,40,N),s(a.$slots,"postfix-icon")],2),s(a.$slots,"subLabel",{},()=>[e.subLabel?(u(),f(t(x),{key:0,size:t(y).SM,kind:t(C).SECONDARY_ALT,class:"mt-xs"},{default:v(()=>[g(b(e.subLabel),1)]),_:1},8,["size","kind"])):h("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-input",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"kind",required:!1,type:{name:"EInputKinds"},defaultValue:{func:!1,value:"EInputKinds.SECONDARY"}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",required:!1,type:{name:"EInputType"},defaultValue:{func:!1,value:"EInputType.TEXT"}},{name:"pattern",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"maxlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"focusHandler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"()=>undefined"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"prefix-icon"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input/ui-input.vue"]};const q=["width","height"],O=c("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),D=[O],w=I({__name:"icon",props:{size:null},setup(e){return(a,l)=>(u(),T("svg",{width:e.size,height:e.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},D,8,q))}});w.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const H={title:"Components/ui-input",component:d,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(n),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(r),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:r.TEXT}},Y=e=>({components:{UiInput:d},setup(){const a=S("");return{args:e,valueModel:a}},template:`
        <ui-input v-bind="args" v-model="valueModel" heading="Heading" sub-label="Sub Label" pattern="[\\d]{9}" />
    `}),$=e=>({components:{UiInput:d,Icon:w},setup(){const a=S("");return{args:e,valueModel:a}},template:`
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
    `}),i=Y.bind({}),o=$.bind({});var L,M,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
        <ui-input v-bind="args" v-model="valueModel" heading="Heading" sub-label="Sub Label" pattern="[\\\\d]{9}" />
    \`
})`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,E,V;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const F=["Default","AllInputs"];export{o as AllInputs,i as Default,F as __namedExportsOrder,H as default};
//# sourceMappingURL=ui-input.stories-e13a2c92.js.map
