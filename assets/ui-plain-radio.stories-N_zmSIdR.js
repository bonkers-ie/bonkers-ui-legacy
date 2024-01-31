import{e as S,f as w,o as E,g as H,x as z,y as D,j as t,z as i,l as a,p as b,n as c,s as f,t as g,q as N,b as C}from"./vue.esm-bundler-mcobj_hi.js";import{U as q}from"./ui-radio-xtuSmWE8.js";import{d as h}from"./index-EPInav8r.js";import{d as l,E as u,a as B}from"./ui-typography-nQUZKoWO.js";import"./align-qS2OfZfs.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const R=q,T=["for"],U=["id","value","disabled"],p=S({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:{},subHeader:{},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(s,{emit:m}){const V=s,x=m,r=w({get(){return V.modelValue},set(e){x("update:modelValue",e)}});return(e,o)=>(E(),H("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[z(t("input",{id:e.name+e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>r.value=d),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"peer absolute appearance-none"},null,8,U),[[D,r.value]]),t("div",{class:N(["ui-plain-radio__content box-border grid size-full cursor-pointer grid-flow-col items-center justify-start gap-sm rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[i(a(R),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=d=>r.value=d),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),t("span",null,[b(e.$slots,"header",{},()=>[i(a(h),{size:a(l).SM,kind:a(u).SECONDARY,weight:a(B).SEMI_BOLD,"line-height":""},{default:c(()=>[f(g(e.header),1)]),_:1},8,["size","kind","weight"])]),b(e.$slots,"subHeader",{},()=>[i(a(h),{size:a(l).XS,kind:a(u).SECONDARY_ALT},{default:c(()=>[f(g(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,T))}});p.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const j={title:"Components/ui-plain-radio",component:p,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},n={render:s=>({components:{UiPlainRadio:p},setup(){return{modelValue:C("1"),args:s,ETypographySizes:l,EColors:u}},template:`
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
        `})};var v,y,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,j as default};
