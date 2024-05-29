import{d as v,c as h,o as y,a as x,k as V,v as k,b as d,l as _,w,h as E,f as t,r as S}from"./vue.esm-bundler-DHcM-i38.js";import{d as p,b as u,U as T,_ as C}from"./index-CxkkgehU.js";const N={class:"ui-radio-compact relative"},U=["name","value","disabled"],B={class:"ui-radio-compact_content box-border grid cursor-pointer items-center justify-items-center rounded-xl border border-secondary-alt-500 bg-white before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs"},n=v({__name:"ui-radio-compact",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},disabled:{type:Boolean}},emits:["update:modelValue"],setup(a,{emit:r}){const b=a,f=r,s=h({get(){return b.modelValue},set(e){f("update:modelValue",e)}});return(e,i)=>(y(),x("label",N,[V(d("input",{"onUpdate:modelValue":i[0]||(i[0]=g=>s.value=g),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,U),[[k,s.value]]),d("div",B,[_(t(T),{class:"px-md py-sm",size:t(p).MD,"line-height":"",align:t(u).CENTER},{default:w(()=>[E(e.$slots,"default")]),_:3},8,["size","align"])])]))}});n.__docgenInfo={exportName:"default",displayName:"ui-radio-compact",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-compact/ui-radio-compact.vue"]};const q={title:"Components/ui-radio-compact",component:n},o={render:a=>({components:{UiRadioCompact:n,UiTypography:C},setup(){const r=S("1");return{args:a,ETypographySizes:p,ETextAlign:u,modelValue:r}},template:`
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
            <br/>
            modelValue: {{modelValue}}
        `,args:{default:"1"}})};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
            <br/>
            modelValue: {{modelValue}}
        \`,
    args: {
      default: "1"
    }
  })
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,q as default};
