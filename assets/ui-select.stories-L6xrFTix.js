import{e as w,f as M,o as r,g as V,p as n,k as p,n as c,z as b,A as g,l as t,m as f,j as s,t as _,B as O,q as z,b as B}from"./vue.esm-bundler-0aijNq6S.js";import{U as v}from"./index-x7TYTibA.js";import{d as h,E}from"./ui-typography-dWkvwKnc.js";const T={class:"ui-select"},D={class:"absolute right-sm top-1/2 -translate-y-1/2"},N=s("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})],-1),d=w({__name:"ui-select",props:{modelValue:{},heading:{},subLabel:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:a}){const i=l,k=a,u=M({get(){return i.modelValue},set(e){k("update:modelValue",e)}});return(e,m)=>(r(),V("div",T,[n(e.$slots,"heading",{},()=>[e.heading?(r(),p(t(v),{key:0,class:"mb-xs",size:t(h).MD},{default:c(()=>[b(g(e.heading),1)]),_:1},8,["size"])):f("",!0)]),s("div",{class:z(["relative rounded-lg border border-secondary-alt-500 bg-white hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none border-secondary-alt-300 bg-secondary-alt-200"]])},[_(s("select",{"onUpdate:modelValue":m[0]||(m[0]=S=>u.value=S),class:"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent p-sm italic text-secondary-alt outline-0"},[n(e.$slots,"default")],512),[[O,u.value]]),s("div",D,[n(e.$slots,"postfix-icon",{},()=>[N])])],2),n(e.$slots,"subLabel",{},()=>[e.subLabel?(r(),p(t(v),{key:0,size:t(h).SM,kind:t(E).SECONDARY_ALT,class:"mt-xs"},{default:c(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):f("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const A={title:"Components/ui-select",component:d,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{disabled:!1}},q=l=>({components:{UiSelect:d},setup(){const a=["Option 1","Option 2","Option 3"],i=B(a[0]);return{args:l,valueModel:i,list:a}},template:`
        <ui-select v-bind="args" v-model="valueModel" heading="Heading" subLabel="Sub Label">
            <option
                v-for="item in list"
                :key="item"
                :value="item"
            >
                {{ item }}
            </option>
        </ui-select>
    `}),o=q.bind({});var y,L,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
        <ui-select v-bind="args" v-model="valueModel" heading="Heading" subLabel="Sub Label">
            <option
                v-for="item in list"
                :key="item"
                :value="item"
            >
                {{ item }}
            </option>
        </ui-select>
    \`
})`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,A as default};
