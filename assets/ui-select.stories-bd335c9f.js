import{e as k,f as S,o as i,g as M,j as n,k as p,l as c,m as b,t as g,u as t,n as v,p as r,q as V,v as _,s as x,b as O}from"./vue.esm-bundler-1832156e.js";import{d as f,_ as h,E as B}from"./ui-typography-de25f69d.js";const E={class:"ui-select"},z={class:"absolute right-sm top-1/2 -translate-y-1/2"},d=k({__name:"ui-select",props:{modelValue:{},heading:{},subLabel:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:s}){const l=o,u=S({get(){return l.modelValue},set(e){s("update:modelValue",e)}});return(e,m)=>(i(),M("div",E,[n(e.$slots,"heading",{},()=>[e.heading?(i(),p(t(h),{key:0,class:"mb-xs",size:t(f).MD},{default:c(()=>[b(g(e.heading),1)]),_:1},8,["size"])):v("",!0)]),r("div",{class:x(["relative rounded-lg border border-secondary-alt-500 bg-white hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none border-secondary-alt-300 bg-secondary-alt-200"]])},[V(r("select",{"onUpdate:modelValue":m[0]||(m[0]=w=>u.value=w),class:"m-0 w-full cursor-pointer appearance-none border-0 bg-transparent p-sm italic text-secondary-alt outline-0"},[n(e.$slots,"default")],512),[[_,u.value]]),r("div",z,[n(e.$slots,"postfix-icon")])],2),n(e.$slots,"subLabel",{},()=>[e.subLabel?(i(),p(t(h),{key:0,size:t(f).SM,kind:t(B).SECONDARY_ALT,class:"mt-xs"},{default:c(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):v("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const q={title:"Components/ui-select",component:d,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{disabled:!1}},D=o=>({components:{UiSelect:d},setup(){const s=["Option 1","Option 2","Option 3"],l=O(s[0]);return{args:o,valueModel:l,list:s}},template:`
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
    `}),a=D.bind({});var y,C,L;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const $=["Default"];export{a as Default,$ as __namedExportsOrder,q as default};
//# sourceMappingURL=ui-select.stories-bd335c9f.js.map
