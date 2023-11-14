import{e as M,f as P,o as p,g as E,j as d,p as f,s as Y,u as s,k as b,l as y,m as h,t as N,n as R,b as V}from"./vue.esm-bundler-052d1dbc.js";import{d as L,_,E as x}from"./ui-typography-964d56a3.js";var l=(e=>(e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.ERROR="ERROR",e))(l||{}),t=(e=>(e.TEXT="text",e.NUMBER="number",e.TEL="tel",e.PASSWORD="password",e.EMAIL="email",e.DATE="date",e))(t||{}),r=(e=>(e.OFF="off",e.ON="on",e.NAME="name",e.GIVEN_NAME="given-name",e.ADDITIONAL_NAME="additional-name",e.FAMILY_NAME="family-name",e.HONORIFIC_PREFIX="honorific-prefix",e.NICKNAME="nickname",e.EMAIL="email",e.USERNAME="username",e.NEW_PASSWORD="new-password",e.CURRENT_PASSWORD="current-password",e.ORGANIZATION_TITLE="organization-title",e.ORGANIZATION="organization",e.STREET_ADDRESS="street-address",e.SHIPPING="shipping",e.BUILDING="building",e.ADDRESS_LINE1="address-line1",e.ADDRESS_LINE2="address-line2",e.ADDRESS_LINE3="address-line3",e.ADDRESS_LEVEL4="address-level4",e.ADDRESS_LEVEL3="address-level3",e.ADDRESS_LEVEL2="address-level2",e.ADDRESS_LEVEL1="address-level1",e.COUNTRY="country",e.COUNTRY_NAME="country-name",e.POSTAL_CODE="postal-code",e.CC_NAME="cc-name",e.CC_GIVEN_NAME="cc-given-name",e.CC_ADDITIONAL_NAME="cc-additional-name",e.CC_FAMILY_NAME="cc-family-name",e.CC_NUMBER="cc-number",e.CC_EXP="cc-exp",e.CC_EXP_MONTH="cc-exp-month",e.CC_EXP_YEAR="cc-exp-year",e.CC_CSC="cc-csc",e.CC_TYPE="cc-type",e.TRANSACTION_CURRENCY="transaction-currency",e.TRANSACTION_AMOUNT="transaction-amount",e.LANGUAGE="language",e.BIRTHDAY="bday",e.BIRTHDAY_DAY="bday-day",e.BIRTHDAY_MONTH="bday-month",e.BIRTHDAY_YEAR="bday-year",e.SEX="sex",e.TEL="tel",e.TEL_COUNTRY_CODE="tel-country-code",e.TEL_NATIONAL="tel-national",e.TEL_AREA_CODE="tel-area-code",e.TEL_LOCAL="tel-local",e.TEL_EXTENSION="tel-extension",e.IMPP="impp",e.URL="url",e.PHOTO="photo",e.WEBAUTHN="webauthn",e))(r||{});const A={class:"ui-input"},w=["autocomplete","name","value","pattern","type","placeholder","maxlength","minlength"],m=M({__name:"ui-input",props:{placeholder:{default:""},modelValue:{default:""},disabled:{type:Boolean},kind:{default:l.SECONDARY},heading:{default:void 0},subLabel:{default:void 0},type:{default:t.TEXT},pattern:{default:void 0},maxlength:{default:void 0},minlength:{default:void 0},focusHandler:{type:Function,default:()=>{}},autocomplete:{default:void 0},name:{default:void 0}},emits:["update:modelValue"],setup(e){const n=e,c=P(()=>{switch(n.type){case t.PASSWORD:return r.CURRENT_PASSWORD;case t.EMAIL:return r.EMAIL;default:return}});return(a,i)=>(p(),E("div",A,[d(a.$slots,"header",{},()=>[a.heading?(p(),b(s(_),{key:0,class:"mb-xs",size:s(L).MD,"line-height":""},{default:y(()=>[h(N(a.heading),1)]),_:1},8,["size"])):R("",!0)]),f("label",{class:Y(["ui-input__wrapper flex w-full items-center gap-xs rounded-lg border bg-white p-sm",[a.kind===s(l).SECONDARY&&"border-secondary-alt-500 hover:border-secondary-alt-700",a.kind===s(l).PRIMARY&&"border-primary",a.kind===s(l).ERROR&&"border-error",a.disabled&&"border-secondary-alt-300 bg-secondary-alt-200"]])},[d(a.$slots,"prefix-icon"),f("input",{autocomplete:a.autocomplete||c.value,name:a.name||a.autocomplete||c.value,value:a.modelValue,pattern:a.pattern,class:"w-full border-0 bg-transparent outline-none placeholder:italic placeholder:text-secondary-alt",type:a.type,placeholder:a.placeholder,maxlength:a.maxlength,minlength:a.minlength,onInput:i[0]||(i[0]=v=>{var g;return a.$emit("update:modelValue",(g=v.target)==null?void 0:g.value)}),onFocus:i[1]||(i[1]=v=>a.focusHandler||void 0)},null,40,w),d(a.$slots,"postfix-icon")],2),d(a.$slots,"subLabel",{},()=>[a.subLabel?(p(),b(s(_),{key:0,"line-height":"",size:s(L).SM,kind:s(x).SECONDARY_ALT,class:"mt-xs"},{default:y(()=>[h(N(a.subLabel),1)]),_:1},8,["size","kind"])):R("",!0)])]))}});m.__docgenInfo={exportName:"default",displayName:"ui-input",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"kind",required:!1,type:{name:"EInputKinds"},defaultValue:{func:!1,value:"EInputKinds.SECONDARY"}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",required:!1,type:{name:"EInputType"},defaultValue:{func:!1,value:"EInputType.TEXT"}},{name:"pattern",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"maxlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"focusHandler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"()=>undefined"}},{name:"autocomplete",required:!1,type:{name:"EAutocomplete"},defaultValue:{func:!1,value:"undefined"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"prefix-icon"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input/ui-input.vue"]};const U=["width","height"],z=f("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),H=[z],k=M({__name:"icon",props:{size:{}},setup(e){return(n,c)=>(p(),E("svg",{width:n.size,height:n.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},H,8,U))}});k.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const X={title:"Components/ui-input",component:m,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(l),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(t),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},autocomplete:{control:{type:"select"},option:Object.values(r),description:"The Element autocomplete state"}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:t.TEXT,autocomplete:r.OFF}},q=e=>({components:{UiInput:m},setup(){const n=V("");return{args:e,valueModel:n}},template:`
        <ui-input v-bind="args" v-model="valueModel" heading="Heading" sub-label="Sub Label" pattern="[\\d]{9}" />
    `}),B=e=>({components:{UiInput:m,Icon:k},setup(){const n=V("");return{args:e,valueModel:n}},template:`
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
    `}),u=q.bind({}),o=B.bind({});var T,C,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var S,O,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(D=(O=o.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const $=["Default","AllInputs"];export{o as AllInputs,u as Default,$ as __namedExportsOrder,X as default};
//# sourceMappingURL=ui-input.stories-cd2610ee.js.map
