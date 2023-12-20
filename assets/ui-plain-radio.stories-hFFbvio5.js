import{e as x,f as w,o as E,g as C,t as H,v as z,j as l,C as p,l as a,p as b,n as c,z as f,A as g,q as N,b as D}from"./vue.esm-bundler-0aijNq6S.js";import{U as T}from"./ui-radio-QZiP1Jg5.js";import{U as s}from"./index-x7TYTibA.js";import{d as t,E as h,a as U}from"./ui-typography-dWkvwKnc.js";import"./align-qS2OfZfs.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const q=T,B=["for"],R=["id","value","disabled"],u=x({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:{},subHeader:{},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(i,{emit:m}){const V=i,S=m,r=w({get(){return V.modelValue},set(e){S("update:modelValue",e)}});return(e,o)=>(E(),C("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[H(l("input",{id:e.name+e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>r.value=d),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"peer absolute appearance-none"},null,8,R),[[z,r.value]]),l("div",{class:N(["ui-plain-radio__content box-border grid h-full w-full cursor-pointer grid-flow-col items-center justify-start gap-sm rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[p(a(q),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=d=>r.value=d),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),l("span",null,[b(e.$slots,"header",{},()=>[p(a(s),{size:a(t).SM,kind:a(h).SECONDARY,weight:a(U).SEMI_BOLD,"line-height":""},{default:c(()=>[f(g(e.header),1)]),_:1},8,["size","kind","weight"])]),b(e.$slots,"subHeader",{},()=>[p(a(s),{size:a(t).XS,kind:a(h).SECONDARY_ALT},{default:c(()=>[f(g(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,B))}});u.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const I={title:"Components/ui-plain-radio",component:u,ETypographySizes:t,EColors:s,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},A=i=>({components:{UiPlainRadio:u},setup(){return{modelValue:D("1"),args:i,ETypographySizes:t,EColors:s}},template:`
        <div :style="{display: 'grid', gridGap: '5px'}">
            <ui-plain-radio
                v-for="item in 2"
                :name="String(item)"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                :header="args.header"
                :sub-header="args.subHeader"
                title="title"
                :disabled="args.disabled"
            >
            </ui-plain-radio>
        </div>
    `}),n=A.bind({});var v,y,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    UiPlainRadio
  },
  setup() {
    const modelValue = ref("1");
    return {
      modelValue,
      args,
      ETypographySizes,
      EColors
    };
  },
  template: /*html*/\`
        <div :style="{display: 'grid', gridGap: '5px'}">
            <ui-plain-radio
                v-for="item in 2"
                :name="String(item)"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                :header="args.header"
                :sub-header="args.subHeader"
                title="title"
                :disabled="args.disabled"
            >
            </ui-plain-radio>
        </div>
    \`
})`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const L=["Default"];export{n as Default,L as __namedExportsOrder,I as default};
