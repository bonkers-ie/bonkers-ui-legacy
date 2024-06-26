import{d as S,c as w,o as E,a as H,k as z,v as N,b as d,l as t,f as a,h as b,w as c,i as f,t as g,n as C,r as D}from"./vue.esm-bundler-DHcM-i38.js";import{U}from"./ui-radio-DYlTn4SQ.js";import{d as l,E as u,a as B,U as h}from"./index-CbBMWzUC.js";import"./align-CojEiJiX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const R=U,T=["for"],q=["id","value","disabled"],p=S({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:{},subHeader:{},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:m}){const k=s,V=m,r=w({get(){return k.modelValue},set(e){V("update:modelValue",e)}});return(e,o)=>(E(),H("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[z(d("input",{id:e.name+e.value,"onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"peer absolute appearance-none"},null,8,q),[[N,r.value]]),d("div",{class:C(["ui-plain-radio__content rounded-xxxxl box-border grid size-full cursor-pointer grid-flow-col items-center justify-start gap-sm border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xxs peer-checked:active:before:-left-xxs peer-checked:active:before:-right-xxs peer-checked:active:before:-top-xxs peer-focus:before:-bottom-xxs peer-focus:before:-left-xxs peer-focus:before:-right-xxs peer-focus:before:-top-xxs peer-active:before:-bottom-xxxs peer-active:before:-left-xxxs peer-active:before:-right-xxxs peer-active:before:-top-xxxs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[t(a(R),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=i=>r.value=i),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),d("span",null,[b(e.$slots,"header",{},()=>[t(a(h),{size:a(l).SM,kind:a(u).SECONDARY,weight:a(B).SEMI_BOLD,"line-height":""},{default:c(()=>[f(g(e.header),1)]),_:1},8,["size","kind","weight"])]),b(e.$slots,"subHeader",{},()=>[t(a(h),{size:a(l).XS,kind:a(u).SECONDARY_ALT},{default:c(()=>[f(g(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,T))}});p.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const G={title:"Components/ui-plain-radio",component:p,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},n={render:s=>({components:{UiPlainRadio:p},setup(){return{modelValue:D("1"),args:s,ETypographySizes:l,EColors:u}},template:`
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
        `})};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
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
  })
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,G as default};
