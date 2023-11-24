import{e as M,f as A,o as i,g as n,q as O,y as U,p as c,u as a,E as m,s,n as w,l as x,j as F,b as I}from"./vue.esm-bundler-5815757d.js";import{U as C}from"./index-8738b0a4.js";import{E as f}from"./ui-icon-253a2a48.js";import{d as T,E as L}from"./ui-typography-7e42daed.js";import{d as b}from"./index-7014e7a9.js";import{I as q}from"./CONSTANTS-3fd880c0.js";var r=(o=>(o.DEFAULT="default",o.MINIMAL="minimal",o.COMPACT="compact",o))(r||{});const P=["name","value","disabled"],R={key:0},B={key:1},j={key:2},k=M({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},iconName:{default:void 0},disabled:{type:Boolean},radioSize:{default:r.DEFAULT}},emits:["update:modelValue"],setup(o,{emit:l}){const N=o,V=l,p=A({get(){return N.modelValue},set(e){V("update:modelValue",e)}});return(e,u)=>(i(),n("label",{class:s(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[O(c("input",{"onUpdate:modelValue":u[0]||(u[0]=D=>p.value=D),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,P),[[U,p.value]]),c("div",{class:s(["ui-radio-fancy__content box-border h-full w-full cursor-pointer rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===a(r).MINIMAL&&"flex gap-sm align-middle",e.radioSize===a(r).COMPACT&&"grid cursor-pointer grid-flow-col px-md"]])},[e.radioSize===a(r).DEFAULT&&e.iconName?(i(),n("div",R,[m(a(b),{"icon-name":e.iconName,size:a(f).MD,class:s(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).MINIMAL&&e.iconName?(i(),n("div",B,[m(a(b),{"icon-name":e.iconName,size:a(f).MD,class:s([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).COMPACT?(i(),n("div",j)):w("",!0),m(a(C),{size:a(T).SM,kind:a(L).SECONDARY,class:"pt-xxs"},{default:x(()=>[F(e.$slots,"default")]),_:3},8,["size","kind"])],2)],2))}});k.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!1,type:{name:"TIconName"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};const E=k,Q={title:"Components/ui-radio-fancy",component:E,argTypes:{disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(r),description:"The radio kinds"}}},d={args:{iconName:q,default:"Description",invertOrder:!1,disabled:!1,radioSize:r.DEFAULT}},t={args:{default:"1",radioSize:r.COMPACT},render:o=>({components:{UiRadioFancy:E,UiTypography:C},setup(){const l=I("1");return{args:o,ETypographySizes:T,modelValue:l}},template:`
        <div class="flex gap-sm" :style="{}">
            <ui-radio-fancy v-for="item in 2"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"
                :radioSize="args.radioSize"
                :disabled="args.disabled"
            >
                <ui-typography :size="ETypographySizes.MD">
                    {{item}}
                </ui-typography>
            </ui-radio-fancy>
        </div>
        `,args:{default:"1",radioSize:r.COMPACT}})};var y,v,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT,
    default: "Description",
    invertOrder: false,
    disabled: false,
    radioSize: ERadioSizes.DEFAULT
  }
}`,...(g=(v=d.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,z,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    default: "1",
    radioSize: ERadioSizes.COMPACT
  },
  render: args => ({
    components: {
      UiRadioFancy,
      UiTypography
    },
    setup() {
      const modelValue = ref("1");
      return {
        args,
        ETypographySizes,
        modelValue
      };
    },
    template: /*html*/\`
        <div class="flex gap-sm" :style="{}">
            <ui-radio-fancy v-for="item in 2"
                :key="item"
                :value="String(item)"
                v-model="modelValue"
                name="radio" title="title"
                :radioSize="args.radioSize"
                :disabled="args.disabled"
            >
                <ui-typography :size="ETypographySizes.MD">
                    {{item}}
                </ui-typography>
            </ui-radio-fancy>
        </div>
        \`,
    args: {
      default: "1",
      radioSize: ERadioSizes.COMPACT
    }
  })
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const W=["Default","Compact"];export{t as Compact,d as Default,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=ui-radio-fancy.stories-e905d9a6.js.map
