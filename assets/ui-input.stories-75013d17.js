import{e as I,o as d,g as T,j as r,p as m,s as z,u as n,k as g,l as b,m as h,t as y,n as L,b as w}from"./vue.esm-bundler-64289e35.js";import{d as M,_ as R,E as N}from"./ui-typography-32a544b7.js";var l=(a=>(a.PRIMARY="PRIMARY",a.SECONDARY="SECONDARY",a.ERROR="ERROR",a))(l||{}),s=(a=>(a.TEXT="text",a.NUMBER="number",a.TEL="tel",a.PASSWORD="password",a.EMAIL="email",a.DATE="date",a))(s||{});const O={class:"ui-input"},_=["autocomplete","value","pattern","type","placeholder","maxlength","minlength"],p=I({__name:"ui-input",props:{placeholder:{default:""},modelValue:{default:""},disabled:{type:Boolean},kind:{default:l.SECONDARY},heading:{default:void 0},subLabel:{default:void 0},type:{default:s.TEXT},pattern:{default:void 0},maxlength:{default:void 0},minlength:{default:void 0},focusHandler:{type:Function,default:()=>{}},autocomplete:{default:""}},emits:["update:modelValue"],setup(a){const t=a,c=()=>{if(t.autocomplete!=="")return t.autocomplete;switch(t.type){case s.PASSWORD:return"current-password";case s.EMAIL:return"email";default:return"off"}};return(e,o)=>(d(),T("div",O,[r(e.$slots,"header",{},()=>[e.heading?(d(),g(n(R),{key:0,class:"mb-xs",size:n(M).MD},{default:b(()=>[h(y(e.heading),1)]),_:1},8,["size"])):L("",!0)]),m("label",{class:z(["ui-input__wrapper flex w-full items-center gap-xs rounded-lg border bg-white p-sm",[e.kind===n(l).SECONDARY&&"border-secondary-alt-500 hover:border-secondary-alt-700",e.kind===n(l).PRIMARY&&"border-primary",e.kind===n(l).ERROR&&"border-error",e.disabled&&"border-secondary-alt-300 bg-secondary-alt-200"]])},[r(e.$slots,"prefix-icon"),m("input",{autocomplete:c(),value:e.modelValue,pattern:e.pattern,class:"w-full border-0 bg-transparent outline-none placeholder:italic placeholder:text-secondary-alt",type:e.type,placeholder:e.placeholder,maxlength:e.maxlength,minlength:e.minlength,onInput:o[0]||(o[0]=f=>{var v;return e.$emit("update:modelValue",(v=f.target)==null?void 0:v.value)}),onFocus:o[1]||(o[1]=f=>e.focusHandler||(()=>{}))},null,40,_),r(e.$slots,"postfix-icon")],2),r(e.$slots,"subLabel",{},()=>[e.subLabel?(d(),g(n(R),{key:0,"line-height":"",size:n(M).SM,kind:n(N).SECONDARY_ALT,class:"mt-xs"},{default:b(()=>[h(y(e.subLabel),1)]),_:1},8,["size","kind"])):L("",!0)])]))}});p.__docgenInfo={exportName:"default",displayName:"ui-input",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"kind",required:!1,type:{name:"EInputKinds"},defaultValue:{func:!1,value:"EInputKinds.SECONDARY"}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",required:!1,type:{name:"EInputType"},defaultValue:{func:!1,value:"EInputType.TEXT"}},{name:"pattern",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"maxlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"focusHandler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"()=>undefined"}},{name:"autocomplete",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"prefix-icon"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input/ui-input.vue"]};const q=["width","height"],D=m("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),$=[D],C=I({__name:"icon",props:{size:{}},setup(a){return(t,c)=>(d(),T("svg",{width:t.size,height:t.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},$,8,q))}});C.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const H={title:"Components/ui-input",component:p,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(l),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(s),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:s.TEXT}},P=a=>({components:{UiInput:p},setup(){const t=w("");return{args:a,valueModel:t}},template:`
        <ui-input v-bind="args" v-model="valueModel" heading="Heading" sub-label="Sub Label" pattern="[\\d]{9}" />
    `}),Y=a=>({components:{UiInput:p,Icon:C},setup(){const t=w("");return{args:a,valueModel:t}},template:`
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
    `}),u=P.bind({}),i=Y.bind({});var k,E,V;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(V=(E=u.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var A,S,x;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const U=["Default","AllInputs"];export{i as AllInputs,u as Default,U as __namedExportsOrder,H as default};
//# sourceMappingURL=ui-input.stories-75013d17.js.map
