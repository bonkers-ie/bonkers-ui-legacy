import{d as E,c as k,o as p,a as V,h as d,b as c,n as y,f as s,e as h,w as N,i as R,t as b,g as L,r as x}from"./vue.esm-bundler-BKa0CVN1.js";import{d as I}from"./index-CPrWUFHI.js";import{d as T,E as w}from"./ui-typography-Bbl87Fj8.js";var l=(e=>(e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.ERROR="ERROR",e))(l||{}),r=(e=>(e.TEXT="text",e.NUMBER="number",e.TEL="tel",e.PASSWORD="password",e.EMAIL="email",e.DATE="date",e))(r||{}),t=(e=>(e.OFF="off",e.ON="on",e.NAME="name",e.GIVEN_NAME="given-name",e.ADDITIONAL_NAME="additional-name",e.FAMILY_NAME="family-name",e.HONORIFIC_PREFIX="honorific-prefix",e.NICKNAME="nickname",e.EMAIL="email",e.USERNAME="username",e.NEW_PASSWORD="new-password",e.CURRENT_PASSWORD="current-password",e.ORGANIZATION_TITLE="organization-title",e.ORGANIZATION="organization",e.STREET_ADDRESS="street-address",e.SHIPPING="shipping",e.BUILDING="building",e.ADDRESS_LINE1="address-line1",e.ADDRESS_LINE2="address-line2",e.ADDRESS_LINE3="address-line3",e.ADDRESS_LEVEL4="address-level4",e.ADDRESS_LEVEL3="address-level3",e.ADDRESS_LEVEL2="address-level2",e.ADDRESS_LEVEL1="address-level1",e.COUNTRY="country",e.COUNTRY_NAME="country-name",e.POSTAL_CODE="postal-code",e.CC_NAME="cc-name",e.CC_GIVEN_NAME="cc-given-name",e.CC_ADDITIONAL_NAME="cc-additional-name",e.CC_FAMILY_NAME="cc-family-name",e.CC_NUMBER="cc-number",e.CC_EXP="cc-exp",e.CC_EXP_MONTH="cc-exp-month",e.CC_EXP_YEAR="cc-exp-year",e.CC_CSC="cc-csc",e.CC_TYPE="cc-type",e.TRANSACTION_CURRENCY="transaction-currency",e.TRANSACTION_AMOUNT="transaction-amount",e.LANGUAGE="language",e.BIRTHDAY="bday",e.BIRTHDAY_DAY="bday-day",e.BIRTHDAY_MONTH="bday-month",e.BIRTHDAY_YEAR="bday-year",e.SEX="sex",e.TEL="tel",e.TEL_COUNTRY_CODE="tel-country-code",e.TEL_NATIONAL="tel-national",e.TEL_AREA_CODE="tel-area-code",e.TEL_LOCAL="tel-local",e.TEL_EXTENSION="tel-extension",e.IMPP="impp",e.URL="url",e.PHOTO="photo",e.WEBAUTHN="webauthn",e))(t||{});const A=["autocomplete","name","value","pattern","type","placeholder","maxlength","minlength"],f=E({__name:"ui-input",props:{placeholder:{default:""},modelValue:{default:""},disabled:{type:Boolean,default:!1},kind:{default:l.SECONDARY},heading:{default:void 0},subLabel:{default:void 0},type:{default:r.TEXT},pattern:{default:void 0},maxlength:{default:void 0},minlength:{default:void 0},focusHandler:{type:Function,default:()=>{}},autocomplete:{default:void 0},name:{default:void 0}},emits:["update:modelValue"],setup(e){const a=e,m=k(()=>{switch(a.type){case r.PASSWORD:return t.CURRENT_PASSWORD;case r.EMAIL:return t.EMAIL;default:return}});return(n,i)=>(p(),V("div",{class:y(["ui-input",[n.disabled&&"pointer-events-none"]])},[d(n.$slots,"header",{},()=>[n.heading?(p(),h(s(I),{key:0,class:"mb-xs",size:s(T).MD,"line-height":""},{default:N(()=>[R(b(n.heading),1)]),_:1},8,["size"])):L("",!0)]),c("label",{class:y(["ui-input__wrapper flex w-full items-center gap-xs rounded-lg border bg-white p-sm",[n.kind===s(l).SECONDARY&&"border-secondary-alt-500 hover:border-secondary-alt-700",n.kind===s(l).PRIMARY&&"border-primary",n.kind===s(l).ERROR&&"border-error",n.disabled&&"border-secondary-alt-300 bg-secondary-alt-200"]])},[d(n.$slots,"prefix-icon"),c("input",{autocomplete:n.autocomplete||m.value,name:n.name||n.autocomplete||m.value,value:n.modelValue,pattern:n.pattern,class:"w-full border-0 bg-transparent outline-none placeholder:italic placeholder:text-secondary-alt",type:n.type,placeholder:n.placeholder,maxlength:n.maxlength,minlength:n.minlength,onInput:i[0]||(i[0]=v=>{var g;return n.$emit("update:modelValue",(g=v.target)==null?void 0:g.value)}),onFocus:i[1]||(i[1]=v=>n.focusHandler||void 0)},null,40,A),d(n.$slots,"postfix-icon")],2),d(n.$slots,"subLabel",{},()=>[n.subLabel?(p(),h(s(I),{key:0,"line-height":"",size:s(T).SM,kind:s(w).SECONDARY_ALT,class:"mt-xs"},{default:N(()=>[R(b(n.subLabel),1)]),_:1},8,["size","kind"])):L("",!0)])],2))}});f.__docgenInfo={exportName:"default",displayName:"ui-input",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:'""'}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"kind",required:!1,type:{name:"EInputKinds"},defaultValue:{func:!1,value:"EInputKinds.SECONDARY"}},{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"type",required:!1,type:{name:"EInputType"},defaultValue:{func:!1,value:"EInputType.TEXT"}},{name:"pattern",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"maxlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"minlength",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"focusHandler",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"()=>undefined"}},{name:"autocomplete",required:!1,type:{name:"EAutocomplete"},defaultValue:{func:!1,value:"undefined"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"prefix-icon"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-input/ui-input.vue"]};const P=["width","height"],U=c("path",{d:"M50 0L60.9065 23.6694L85.3553 14.6447L76.3306 39.0935L100 50L76.3306 60.9065L85.3553 85.3553L60.9065 76.3306L50 100L39.0935 76.3306L14.6447 85.3553L23.6694 60.9065L0 50L23.6694 39.0935L14.6447 14.6447L39.0935 23.6694L50 0Z"},null,-1),z=[U],Y=E({__name:"icon",props:{size:{}},setup(e){return(a,m)=>(p(),V("svg",{width:a.size,height:a.size,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},z,8,P))}});Y.__docgenInfo={exportName:"default",displayName:"icon",description:"",tags:{},props:[{name:"size",required:!0,type:{name:"number"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/_samples/icon.vue"]};const H={title:"Components/ui-input",component:f,argTypes:{placeholder:{control:{type:"text"},description:"Placeholder"},kind:{control:{type:"select"},options:Object.values(l),description:"The input kinds"},type:{control:{type:"select"},options:Object.values(r),description:"The input type"},disabled:{control:{type:"boolean"},description:"The Element disabled state"},autocomplete:{control:{type:"select"},option:Object.values(t),description:"The Element autocomplete state"},heading:{control:{type:"text"}},maxlength:{control:{type:"text"}},minlength:{control:{type:"text"}}},args:{placeholder:"Placeholder",kind:void 0,disabled:!1,type:r.TEXT,autocomplete:t.OFF,heading:"heading",maxlength:"5",minlength:"1"}},u={render:e=>({components:{UiInput:f},setup(){const a=x("");return{args:e,valueModel:a}},template:`
            <ui-input v-bind="args" v-model="valueModel" />
        `})},o={render:e=>({components:{UiInput:f,Icon:Y},setup(){const a=x("");return{args:e,valueModel:a}},template:`
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
        `})};var C,_,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(_=u.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var D,O,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const G=["Default","AllInputs"];export{o as AllInputs,u as Default,G as __namedExportsOrder,H as default};
