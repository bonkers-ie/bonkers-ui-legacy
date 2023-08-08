import{e as y,f as v,o as h,g as x,q as _,y as E,p as d,z as k,l as T,j as V,u as t,b as z}from"./vue.esm-bundler-1832156e.js";import{d as u,b as c,_ as b}from"./ui-typography-de25f69d.js";const S={class:"ui-radio-compact relative"},C=["name","value","disabled"],N={class:"ui-radio-compact_content box-border flex cursor-pointer rounded-2xl border border-secondary-alt-500 bg-white px-md before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs"},n=y({__name:"ui-radio-compact",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:r}){const f=o,s=v({get(){return f.modelValue},set(e){r("update:modelValue",e)}});return(e,i)=>(h(),x("label",S,[_(d("input",{"onUpdate:modelValue":i[0]||(i[0]=g=>s.value=g),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,C),[[E,s.value]]),d("div",N,[k(t(b),{size:t(u).MD,align:t(c).CENTER},{default:T(()=>[V(e.$slots,"default")]),_:3},8,["size","align"])])]))}});n.__docgenInfo={exportName:"default",displayName:"ui-radio-compact",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-compact/ui-radio-compact.vue"]};const B={title:"Components/ui-radio-compact",component:n,argTypes:{}},a={args:{default:"1"},render:o=>({components:{UiRadioCompact:n,UiTypography:b},setup(){const r=z("1");return{args:o,ETypographySizes:u,ETextAlign:c,modelValue:r}},template:`
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,B as default};
//# sourceMappingURL=ui-radio-compact.stories-b8b1b870.js.map
