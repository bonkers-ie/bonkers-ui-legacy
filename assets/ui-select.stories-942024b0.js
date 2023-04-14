import{d as k,c as x,o as r,e as S,k as n,q as c,j as p,m as b,t as g,u as s,v as f,l as d,y as M,K as V,A as O,g as B,a as E}from"./vue.esm-bundler-9a4beff8.js";import{E as v,_ as h,a as z}from"./ui-typography-43c7c98a.js";const D={class:"ui-select"},N={class:"absolute right-sm top-1/2 -translate-y-1/2"},u=k({__name:"ui-select",props:{modelValue:null,heading:null,subLabel:null,disabled:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:a}){const o=e,i=x({get(){return o.modelValue},set(t){a("update:modelValue",t)}});return(t,m)=>(r(),S("div",D,[n(t.$slots,"heading",{},()=>[e.heading?(r(),c(s(h),{key:0,class:"mb-xs",size:s(v).MD},{default:p(()=>[b(g(e.heading),1)]),_:1},8,["size"])):f("",!0)]),d("div",{class:B(["relative rounded-lg border bg-white border-secondary-alt-500 hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none bg-secondary-alt-200 border-secondary-alt-300"]])},[M(d("select",{"onUpdate:modelValue":m[0]||(m[0]=w=>O(i)?i.value=w:null),class:"appearance-none bg-transparent border-0 m-0 outline-0 w-full p-sm cursor-pointer italic text-secondary-alt"},[n(t.$slots,"default")],512),[[V,s(i)]]),d("div",N,[n(t.$slots,"postfix-icon")])],2),n(t.$slots,"subLabel",{},()=>[e.subLabel?(r(),c(s(h),{key:0,size:s(v).SM,kind:s(z).SECONDARY_ALT,class:"mt-xs"},{default:p(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):f("",!0)])]))}});u.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const $={title:"Components/ui-select",component:u,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{disabled:!1}},T=e=>({components:{UiSelect:u},setup(){const a=["Option 1","Option 2","Option 3"],o=E(a[0]);return{args:e,valueModel:o,list:a}},template:`
        <ui-select v-bind="args" v-model="valueModel" heading="Heading" subLabel="Sub Label">
            <template #postfix-icon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z" fill="currentColor"/>
                </svg>
            </template>

            <option
                v-for="item in list"
                :key="item"
                :value="item"
            >
                {{ item }}
            </option>
        </ui-select>
    `}),l=T.bind({});var y,C,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
            <template #postfix-icon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 6.8125L8.5 11.2812C8.34375 11.4375 8.15625 11.5 8 11.5C7.8125 11.5 7.625 11.4375 7.46875 11.3125L2.71875 6.8125C2.40625 6.53125 2.40625 6.0625 2.6875 5.75C2.96875 5.4375 3.4375 5.4375 3.75 5.71875L8 9.71875L12.2188 5.71875C12.5312 5.4375 13 5.4375 13.2812 5.75C13.5625 6.0625 13.5625 6.53125 13.25 6.8125Z" fill="currentColor"/>
                </svg>
            </template>

            <option
                v-for="item in list"
                :key="item"
                :value="item"
            >
                {{ item }}
            </option>
        </ui-select>
    \`
})`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const A=["Default"];export{l as Default,A as __namedExportsOrder,$ as default};
//# sourceMappingURL=ui-select.stories-942024b0.js.map
