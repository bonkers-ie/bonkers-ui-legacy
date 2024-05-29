import{d as M,c as S,o as r,a as V,h as a,e as p,w as c,i as b,t as g,f as t,g as f,b as s,k as _,s as O,n as E,r as x}from"./vue.esm-bundler-DHcM-i38.js";import{d as v,U as h,E as z}from"./index-CxkkgehU.js";const B={class:"ui-select"},D={class:"absolute right-sm top-1/2 -translate-y-1/2"},N=s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})],-1),d=M({__name:"ui-select",props:{modelValue:{},heading:{},subLabel:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:n}){const i=l,k=n,u=S({get(){return i.modelValue},set(e){k("update:modelValue",e)}});return(e,m)=>(r(),V("div",B,[a(e.$slots,"heading",{},()=>[e.heading?(r(),p(t(h),{key:0,class:"mb-xs",size:t(v).MD},{default:c(()=>[b(g(e.heading),1)]),_:1},8,["size"])):f("",!0)]),s("div",{class:E(["relative rounded-lg border border-secondary-alt-500 bg-white hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none border-secondary-alt-300 bg-secondary-alt-200"]])},[_(s("select",{"onUpdate:modelValue":m[0]||(m[0]=w=>u.value=w),class:"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent p-sm italic text-secondary-alt outline-0"},[a(e.$slots,"default")],512),[[O,u.value]]),s("div",D,[a(e.$slots,"postfix-icon",{},()=>[N])])],2),a(e.$slots,"subLabel",{},()=>[e.subLabel?(r(),p(t(h),{key:0,size:t(v).SM,kind:t(z).SECONDARY_ALT,class:"mt-xs"},{default:c(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):f("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const q={title:"Components/ui-select",component:d,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"},heading:{control:{type:"text"}},subLabel:{control:{type:"text"}}},args:{disabled:!1,heading:"Heading",subLabel:"subLabel"}},o={render:l=>({components:{UiSelect:d},setup(){const n=["Option 1","Option 2","Option 3"],i=x(n[0]);return{args:l,valueModel:i,list:n}},template:`
            <ui-select v-bind="args" v-model="valueModel" >
                <option
                    v-for="item in list"
                    :key="item"
                    :value="item"
                >
                    {{ item }}
                </option>
            </ui-select>
        `})};var y,C,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSelect
    },
    setup() {
      const list = ["Option 1", "Option 2", "Option 3"];
      const valueModel = ref(list[0]);
      return {
        args,
        valueModel,
        list
      };
    },
    template: /*html*/\`
            <ui-select v-bind="args" v-model="valueModel" >
                <option
                    v-for="item in list"
                    :key="item"
                    :value="item"
                >
                    {{ item }}
                </option>
            </ui-select>
        \`
  })
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,q as default};
