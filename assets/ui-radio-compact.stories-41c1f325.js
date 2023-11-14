import{e as v,f as h,o as x,g as y,q as k,x as _,p as d,y as V,l as w,j as E,u as t,b as S}from"./vue.esm-bundler-052d1dbc.js";import{d as c,b as u,_ as f}from"./ui-typography-964d56a3.js";const T={class:"ui-radio-compact relative"},N=["name","value","disabled"],B={class:"ui-radio-compact_content box-border grid cursor-pointer items-center justify-items-center rounded-xl border border-secondary-alt-500 bg-white before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs"},n=v({__name:"ui-radio-compact",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:r}){const b=o,s=h({get(){return b.modelValue},set(e){r("update:modelValue",e)}});return(e,i)=>(x(),y("label",T,[k(d("input",{"onUpdate:modelValue":i[0]||(i[0]=g=>s.value=g),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,N),[[_,s.value]]),d("div",B,[V(t(f),{class:"px-md py-sm",size:t(c).MD,"line-height":"",align:t(u).CENTER},{default:w(()=>[E(e.$slots,"default")]),_:3},8,["size","align"])])]))}});n.__docgenInfo={exportName:"default",displayName:"ui-radio-compact",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-compact/ui-radio-compact.vue"]};const z={title:"Components/ui-radio-compact",component:n,argTypes:{}},a={args:{default:"1"},render:o=>({components:{UiRadioCompact:n,UiTypography:f},setup(){const r=S("1");return{args:o,ETypographySizes:c,ETextAlign:u,modelValue:r}},template:`
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
        `,args:{default:"1"}})};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const U=["Default"];export{a as Default,U as __namedExportsOrder,z as default};
//# sourceMappingURL=ui-radio-compact.stories-41c1f325.js.map
