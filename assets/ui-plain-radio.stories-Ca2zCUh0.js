import{d as S,i as w,o as E,c as H,q as z,v as N,g as d,l as t,a,e as b,w as c,j as f,t as g,k as C,r as D}from"./vue.esm-bundler-Bywgp341.js";import{U}from"./ui-radio-8-ccftIl.js";import{a as l,b as u,E as q,U as h}from"./index-CEd4KI44.js";import"./align-CojEiJiX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=U,R=["for"],T=["id","value","disabled"],p=S({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:{},subHeader:{},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:m}){const k=s,V=m,r=w({get(){return k.modelValue},set(e){V("update:modelValue",e)}});return(e,o)=>(E(),H("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[z(d("input",{id:e.name+e.value,"onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"peer absolute appearance-none"},null,8,T),[[N,r.value]]),d("div",{class:C(["ui-plain-radio__content box-border grid size-full cursor-pointer grid-flow-col items-center justify-start gap-sm rounded-lg border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-2xl before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xxs peer-checked:active:before:-left-xxs peer-checked:active:before:-right-xxs peer-checked:active:before:-top-xxs peer-focus:before:-bottom-xxs peer-focus:before:-left-xxs peer-focus:before:-right-xxs peer-focus:before:-top-xxs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[t(a(B),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=i=>r.value=i),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),d("span",null,[b(e.$slots,"header",{},()=>[t(a(h),{size:a(l).SM,kind:a(u).SECONDARY,weight:a(q).SEMI_BOLD,"line-height":""},{default:c(()=>[f(g(e.header),1)]),_:1},8,["size","kind","weight"])]),b(e.$slots,"subHeader",{},()=>[t(a(h),{size:a(l).XS,kind:a(u).SECONDARY_ALT},{default:c(()=>[f(g(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,R))}});p.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const j={title:"Components/ui-plain-radio",component:p,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},n={render:s=>({components:{UiPlainRadio:p},setup(){return{modelValue:D("1"),args:s,ETypographySizes:l,EColors:u}},template:`
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
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,j as default};
