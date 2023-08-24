import{e as x,f as S,o as w,g as E,q as H,x as C,p as n,y as u,u as a,j as b,l as c,m as f,t as g,s as N,b as _}from"./vue.esm-bundler-1895b176.js";import{_ as z}from"./ui-radio-b02b8fd8.js";import{d as i,E as h,a as q,_ as d}from"./ui-typography-f714da9c.js";import"./align-e22983df.js";const B=["for"],D=["id","value","disabled"],p=x({__name:"ui-plain-radio",props:{modelValue:{type:[String,Number,Boolean]},header:{},subHeader:{},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:m}){const V=t,r=S({get(){return V.modelValue},set(e){m("update:modelValue",e)}});return(e,o)=>(w(),E("label",{class:"ui-plain-radio relative mb-sm",for:e.name+e.value},[H(n("input",{id:e.name+e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),value:e.value,name:"ui-plain-radio",type:"radio",disabled:e.disabled,class:"peer absolute appearance-none"},null,8,D),[[C,r.value]]),n("div",{class:N(["ui-plain-radio__content box-border grid h-full w-full cursor-pointer grid-flow-col items-center justify-start gap-sm rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled"])},[u(a(z),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=l=>r.value=l),value:e.value.toString(),name:e.name,disabled:e.disabled,class:"pointer-events-none"},null,8,["modelValue","value","name","disabled"]),n("span",null,[b(e.$slots,"header",{},()=>[u(a(d),{size:a(i).SM,kind:a(h).SECONDARY,weight:a(q).SEMI_BOLD,"line-height":""},{default:c(()=>[f(g(e.header),1)]),_:1},8,["size","kind","weight"])]),b(e.$slots,"subHeader",{},()=>[u(a(d),{size:a(i).XS,kind:a(h).SECONDARY_ALT},{default:c(()=>[f(g(e.subHeader),1)]),_:1},8,["size","kind"])])])],2)],8,B))}});p.__docgenInfo={exportName:"default",displayName:"ui-plain-radio",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"header",required:!1,type:{name:"string"}},{name:"subHeader",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"header"},{name:"subHeader"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-plain-radio/ui-plain-radio.vue"]};const $={title:"Components/ui-plain-radio",component:p,ETypographySizes:i,EColors:d,argTypes:{disabled:{control:{type:"boolean"}},header:{control:{type:"text"}},subHeader:{control:{type:"text"}}},args:{disabled:!1,header:"Header",subHeader:"SubHeader"}},T=t=>({components:{UiPlainRadio:p},setup(){return{modelValue:_("1"),args:t,ETypographySizes:i,EColors:d}},template:`
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
    `}),s=T.bind({});var v,y,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const A=["Default"];export{s as Default,A as __namedExportsOrder,$ as default};
//# sourceMappingURL=ui-plain-radio.stories-af32a4b4.js.map
