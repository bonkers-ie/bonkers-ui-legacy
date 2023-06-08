import{d as k,c as S,o as i,e as M,k as a,v as m,j as c,m as b,q as g,u as t,x as v,l as r,z as V,K as _,g as x,a as O}from"./vue.esm-bundler-fe4d70d2.js";import{E as f,_ as h,a as z}from"./ui-typography-3ebb5017.js";const B={class:"ui-select"},E={class:"absolute right-sm top-1/2 -translate-y-1/2"},d=k({__name:"ui-select",props:{modelValue:{},heading:{},subLabel:{},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:s}){const l=o,u=S({get(){return l.modelValue},set(e){s("update:modelValue",e)}});return(e,p)=>(i(),M("div",B,[a(e.$slots,"heading",{},()=>[e.heading?(i(),m(t(h),{key:0,class:"mb-xs",size:t(f).MD},{default:c(()=>[b(g(e.heading),1)]),_:1},8,["size"])):v("",!0)]),r("div",{class:x(["relative rounded-lg border bg-white border-secondary-alt-500 hover:border-secondary-alt-700",[e.disabled&&"pointer-events-none bg-secondary-alt-200 border-secondary-alt-300"]])},[V(r("select",{"onUpdate:modelValue":p[0]||(p[0]=w=>u.value=w),class:"appearance-none bg-transparent border-0 m-0 outline-0 w-full p-sm cursor-pointer italic text-secondary-alt"},[a(e.$slots,"default")],512),[[_,u.value]]),r("div",E,[a(e.$slots,"postfix-icon")])],2),a(e.$slots,"subLabel",{},()=>[e.subLabel?(i(),m(t(h),{key:0,size:t(f).SM,kind:t(z).SECONDARY_ALT,class:"mt-xs"},{default:c(()=>[b(g(e.subLabel),1)]),_:1},8,["size","kind"])):v("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-select",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"heading",required:!1,type:{name:"string"}},{name:"subLabel",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"heading"},{name:"default"},{name:"postfix-icon"},{name:"subLabel"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-select/ui-select.vue"]};const q={title:"Components/ui-select",component:d,argTypes:{disabled:{control:{type:"boolean"},description:"The Element disabled state"}},args:{disabled:!1}},D=o=>({components:{UiSelect:d},setup(){const s=["Option 1","Option 2","Option 3"],l=O(s[0]);return{args:o,valueModel:l,list:s}},template:`
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
    `}),n=D.bind({});var y,C,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,q as default};
//# sourceMappingURL=ui-select.stories-62992738.js.map
