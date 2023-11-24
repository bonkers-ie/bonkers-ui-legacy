import{e as y,f as x,o as k,g as V,q as _,y as w,p as i,E,l as S,j as T,u as t,b as N}from"./vue.esm-bundler-5815757d.js";import{U as p}from"./index-8738b0a4.js";import{d as c,b as u}from"./ui-typography-7e42daed.js";const B={class:"ui-radio-compact relative"},C=["name","value","disabled"],U={class:"ui-radio-compact_content box-border grid cursor-pointer items-center justify-items-center rounded-xl border border-secondary-alt-500 bg-white before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs"},f=y({__name:"ui-radio-compact",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:r}){const g=o,v=r,n=x({get(){return g.modelValue},set(e){v("update:modelValue",e)}});return(e,s)=>(k(),V("label",B,[_(i("input",{"onUpdate:modelValue":s[0]||(s[0]=h=>n.value=h),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,C),[[w,n.value]]),i("div",U,[E(t(p),{class:"px-md py-sm",size:t(c).MD,"line-height":"",align:t(u).CENTER},{default:S(()=>[T(e.$slots,"default")]),_:3},8,["size","align"])])]))}});f.__docgenInfo={exportName:"default",displayName:"ui-radio-compact",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-compact/ui-radio-compact.vue"]};const b=f,R={title:"Components/ui-radio-compact",component:b,argTypes:{}},a={args:{default:"1"},render:o=>({components:{UiRadioCompact:b,UiTypography:p},setup(){const r=N("1");return{args:o,ETypographySizes:c,ETextAlign:u,modelValue:r}},template:`
        <div class="flex flex-row gap-sm align-middle" :style="{}">
            <ui-radio-compact v-for="item in 8"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"

            >
                    {{item}}
                </ui-radio-compact>

        </div>
        `,args:{default:"1"}})};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    default: "1"
  },
  render: args => ({
    components: {
      UiRadioCompact,
      UiTypography
    },
    setup() {
      const modelValue = ref("1");
      return {
        args,
        ETypographySizes,
        ETextAlign,
        modelValue
      };
    },
    template: /*html*/\`
        <div class="flex flex-row gap-sm align-middle" :style="{}">
            <ui-radio-compact v-for="item in 8"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"

            >
                    {{item}}
                </ui-radio-compact>

        </div>
        \`,
    args: {
      default: "1"
    }
  })
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,R as default};
//# sourceMappingURL=ui-radio-compact.stories-0f3a20fd.js.map
