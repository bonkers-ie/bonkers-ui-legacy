import{e as g,f as y,o as v,g as h,q as x,y as _,p as i,z as k,l as E,j as V,u as d,b as T}from"./vue.esm-bundler-1832156e.js";import{d as c,_ as u,b as z}from"./ui-typography-de25f69d.js";const S={class:"ui-radio-compact relative"},w=["name","value","disabled"],C={class:"ui-radio-compact_content box-border grid cursor-pointer items-center justify-items-center rounded-xl border border-secondary-alt-500 bg-white before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs"},t=g({__name:"ui-radio-compact",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:r}){const b=o,n=y({get(){return b.modelValue},set(e){r("update:modelValue",e)}});return(e,s)=>(v(),h("label",S,[x(i("input",{"onUpdate:modelValue":s[0]||(s[0]=f=>n.value=f),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,w),[[_,n.value]]),i("div",C,[k(d(u),{size:d(c).MD},{default:E(()=>[V(e.$slots,"default")]),_:3},8,["size"])])]))}});t.__docgenInfo={exportName:"default",displayName:"ui-radio-compact",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-compact/ui-radio-compact.vue"]};const D={title:"Components/ui-radio-compact",component:t,argTypes:{}},a={args:{default:"1"},render:o=>({components:{UiRadioCompact:t,UiTypography:u},setup(){const r=T("1");return{args:o,ETypographySizes:c,ETextAlign:z,modelValue:r}},template:`
        <div class="flex gap-sm align-middle" :style="{}">
            <ui-radio-compact v-for="item in 8"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"

            >
                <ui-typography :size="ETypographySizes.MD" :align="ETextAlign.CENTER">
                    {{item}}
                </ui-typography>
            </ui-radio-compact>
        </div>
        `,args:{default:"1"}})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        <div class="flex gap-sm align-middle" :style="{}">
            <ui-radio-compact v-for="item in 8"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"

            >
                <ui-typography :size="ETypographySizes.MD" :align="ETextAlign.CENTER">
                    {{item}}
                </ui-typography>
            </ui-radio-compact>
        </div>
        \`,
    args: {
      default: "1"
    }
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,D as default};
//# sourceMappingURL=ui-radio-compact.stories-b51c4da8.js.map
