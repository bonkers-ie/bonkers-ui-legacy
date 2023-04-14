import{d as S,c as w,o as E,e as H,y as C,F as N,u as a,l as n,A as b,f as u,k as c,j as f,m as g,t as h,g as z,a as B}from"./vue.esm-bundler-9a4beff8.js";import{_ as D}from"./ui-radio-9cf915fe.js";import{E as s,a as v,b as R,_ as d}from"./ui-typography-43c7c98a.js";import"./align-e22983df.js";const T=["for"],q=["id","value","disabled"],m=S({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:null,subHeader:null,name:null,value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const V=e,r=w({get(){return V.modelValue},set(o){p("update:modelValue",o)}});return(o,t)=>(E(),H("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[C(n("input",{id:e.name+e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>b(r)?r.value=l:null),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"appearance-none absolute peer"},null,8,q),[[N,a(r)]]),n("div",{class:z(["ui-plain-radio__content grid grid-flow-col justify-start items-center gap-sm box-border w-full h-full py-sm px-sm border border-secondary-alt-500 bg-white hover:border-secondary-alt-700 cursor-pointer rounded-xl before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 peer-checked:border-transparent peer-checked:active:shadow-border-primary peer-checked:active:before:-top-xs peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:hover:shadow-border-selected peer-checked:shadow-selected-shadow peer-active:before:-top-xxs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-focus:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[u(a(D),{modelValue:a(r),"onUpdate:modelValue":t[1]||(t[1]=l=>b(r)?r.value=l:null),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),n("span",null,[c(o.$slots,"header",{},()=>[u(a(d),{size:a(s).SM,kind:a(v).SECONDARY,weight:a(R).SEMI_BOLD,"line-height":""},{default:f(()=>[g(h(e.header),1)]),_:1},8,["size","kind","weight"])]),c(o.$slots,"subHeader",{},()=>[u(a(d),{size:a(s).XS,kind:a(v).SECONDARY_ALT},{default:f(()=>[g(h(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,T))}});m.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const P={title:"Components/ui-plain-radio",component:m,ETypographySizes:s,EColors:d,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},A=e=>({components:{UiPlainRadio:m},setup(){return{modelValue:B("1"),args:e,ETypographySizes:s,EColors:d}},template:`
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
    `}),i=A.bind({});var y,x,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,P as default};
//# sourceMappingURL=ui-plain-radio.stories-8ee1a8cb.js.map
