import{d as T,o as i,e as I,k as s,l as p,g as w,u as t,v as f,j as v,m as g,q as b,x as h,a as S}from"./vue.esm-bundler-fe4d70d2.js";import{E as y,_ as L,a as C}from"./ui-typography-3ebb5017.js";var n=(a=>(a.PRIMARY="PRIMARY",a.SECONDARY="SECONDARY",a.ERROR="ERROR",a))(n||{}),u=(a=>(a.TEXT="text",a.NUMBER="number",a.TEL="tel",a.PASSWORD="password",a.EMAIL="email",a.DATE="date",a))(u||{});const _={class:"ui-input"},q=["autocomplete","value","pattern","type","placeholder","maxlength","minlength"],d=T({__name:"ui-input",props:{placeholder:{default:""},modelValue:{default:""},disabled:{type:Boolean},kind:{default:n.SECONDARY},heading:{default:void 0},subLabel:{default:void 0},type:{default:u.TEXT},pattern:{default:void 0},maxlength:{default:void 0},minlength:{default:void 0},focusHandler:{type:Function,default:()=>{}},autocomplete:{default:"off"}},emits:["update:modelValue"],setup(a){return(e,l)=>(i(),I("div",_,[s(e.$slots,"header",{},()=>[e.heading?(i(),f(t(L),{key:0,class:"mb-xs",size:t(y).MD},{default:v(()=>[g(b(e.heading),1)]),_:1},8,["size"])):h("",!0)]),p("label",{class:w(["ui-input__wrapper flex w-full rounded-lg border bg-white items-center p-sm gap-xs",[e.kind===t(n).SECONDARY&&"border-secondary-alt-500 hover:border-secondary-alt-700",e.kind===t(n).PRIMARY&&"border-primary",e.kind===t(n).ERROR&&"border-error",e.disabled&&"border-secondary-alt-300 bg-secondary-alt-200"]])},[s(e.$slots,"prefix-icon"),p("input",{autocomplete:e.autocomplete,value:e.modelValue,pattern:e.pattern,class:"bg-transparent border-0 outline-none w-full placeholder:text-secondary-alt placeholder:italic",type:e.type,placeholder:e.placeholder,maxlength:e.maxlength,minlength:e.minlength,onInput:l[0]||(l[0]=m=>{var c;return e.$emit("update:modelValue",(c=m.target)==null?void 0:c.value)}),onFocus:l[1]||(l[1]=m=>e.focusHandler||(()=>{}))},null,40,q),s(e.$slots,"postfix-icon")],2),s(e.$slots,"subLabel",{},()=>[e.subLabel?(i(),f(t(L),{key:0,"line-height":"",size:t(y).SM,kind:t(C).SECONDARY_ALT,class:"mt-xs"},{default:v(()=>[g(b(e.subLabel),1)]),_:1},8,["size","kind"])):h("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-input",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"kind",required:!1,type:{name:"EInputKinds"},defaultValue:{func:!1,value:"EInputKinds.SECONDARY"}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",required:!1,type:{name:"EInputType"},defaultValue:{func:!1,value:"EInputType.TEXT"}},{name:"pattern",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"maxlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"focusHandler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"()=>undefined"}},{name:"autocomplete",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"off"'}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"prefix-icon"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input/ui-input.vue"]};const z=["width","height"],N=p("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),O=[N],A=T({__name:"icon",props:{size:{}},setup(a){return(e,l)=>(i(),I("svg",{width:e.size,height:e.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},O,8,z))}});A.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const B={title:"Components/ui-input",component:d,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(n),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(u),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:u.TEXT}},D=a=>({components:{UiInput:d},setup(){const e=S("");return{args:a,valueModel:e}},template:`
        <ui-input v-bind="args" v-model="valueModel" heading="Heading" sub-label="Sub Label" pattern="[\\d]{9}" />
    `}),$=a=>({components:{UiInput:d,Icon:A},setup(){const e=S("");return{args:a,valueModel:e}},template:`
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
    `}),o=D.bind({}),r=$.bind({});var M,R,k;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(k=(R=o.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var E,V,x;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(x=(V=r.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const F=["Default","AllInputs"];export{r as AllInputs,o as Default,F as __namedExportsOrder,B as default};
//# sourceMappingURL=ui-input.stories-e2b07ae6.js.map
