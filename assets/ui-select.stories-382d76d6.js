import{e as S,f as _,o as r,g as w,j as n,k as p,l as c,m as b,t as g,u as s,n as f,p as t,q as M,v as V,s as O,b as E}from"./vue.esm-bundler-052d1dbc.js";import{d as v,_ as h,E as z}from"./ui-typography-964d56a3.js";const B={class:"ui-select"},D={class:"absolute right-sm top-1/2 -translate-y-1/2"},N=t("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z",fill:"currentColor"})],-1),d=S({__name:"ui-select",props:{modelValue:{},heading:{},subLabel:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:a}){const i=l,u=_({get(){return i.modelValue},set(e){a("update:modelValue",e)}});return(e,m)=>(r(),w("div",B,[n(e.$slots,"heading",{},()=>[e.heading?(r(),p(s(h),{key:0,class:"mb-xs",size:s(v).MD},{default:c(()=>[b(g(e.heading),1)]),_:1},8,["size"])):f("",!0)]),t("div",{class:O(["relative rounded-lg border border-secondary-alt-500 bg-white hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none border-secondary-alt-300 bg-secondary-alt-200"]])},[M(t("select",{"onUpdate:modelValue":m[0]||(m[0]=k=>u.value=k),class:"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent p-sm italic text-secondary-alt outline-0"},[n(e.$slots,"default")],512),[[V,u.value]]),t("div",D,[n(e.$slots,"postfix-icon",{},()=>[N])])],2),n(e.$slots,"subLabel",{},()=>[e.subLabel?(r(),p(s(h),{key:0,size:s(v).SM,kind:s(z).SECONDARY_ALT,class:"mt-xs"},{default:c(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):f("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const x={title:"Components/ui-select",component:d,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{disabled:!1}},T=l=>({components:{UiSelect:d},setup(){const a=["Option 1","Option 2","Option 3"],i=E(a[0]);return{args:l,valueModel:i,list:a}},template:`
        <ui-select v-bind="args" v-model="valueModel" heading="Heading" subLabel="Sub Label">
            <option
                v-for="item in list"
                :key="item"
                :value="item"
            >
                {{ item }}
            </option>
        </ui-select>
    `}),o=T.bind({});var y,L,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,x as default};
//# sourceMappingURL=ui-select.stories-382d76d6.js.map
