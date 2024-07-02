import{d as N,c as V,o as i,a as n,k as M,v as A,b as f,f as a,l as m,n as s,g as D,w as U,h as O,r as w}from"./vue.esm-bundler-CeLExAbV.js";import{d as T,E as F,U as I,_ as L}from"./index-CO95GXBw.js";import{E as b}from"./ui-icon-D1gIbnXD.js";import{u as y}from"./index-4l9Ij6O5.js";import{I as R}from"./CONSTANTS-DufeqkT1.js";var r=(o=>(o.DEFAULT="default",o.MINIMAL="minimal",o.COMPACT="compact",o))(r||{});const P=["name","value","disabled"],q={key:0},B={key:1},$={key:2},u=N({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},iconName:{default:void 0},disabled:{type:Boolean},radioSize:{default:r.DEFAULT}},emits:["update:modelValue"],setup(o,{emit:l}){const C=o,k=l,p=V({get(){return C.modelValue},set(e){k("update:modelValue",e)}});return(e,c)=>(i(),n("label",{class:s(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[M(f("input",{"onUpdate:modelValue":c[0]||(c[0]=E=>p.value=E),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,P),[[A,p.value]]),f("div",{class:s(["ui-radio-fancy__content rounded-xxxxl box-border size-full cursor-pointer border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xxs peer-checked:active:before:-left-xxs peer-checked:active:before:-right-xxs peer-checked:active:before:-top-xxs peer-focus:before:-bottom-xxs peer-focus:before:-left-xxs peer-focus:before:-right-xxs peer-focus:before:-top-xxs peer-active:before:-bottom-xxxs peer-active:before:-left-xxxs peer-active:before:-right-xxxs peer-active:before:-top-xxxs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===a(r).MINIMAL&&"flex gap-sm align-middle",e.radioSize===a(r).COMPACT&&"grid cursor-pointer grid-flow-col px-md"]])},[e.radioSize===a(r).DEFAULT&&e.iconName?(i(),n("div",q,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).MINIMAL&&e.iconName?(i(),n("div",B,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).COMPACT?(i(),n("div",$)):D("",!0),m(a(I),{size:a(T).SM,kind:a(F).SECONDARY,class:"pt-xxxs"},{default:U(()=>[O(e.$slots,"default")]),_:3},8,["size","kind"])],2)],2))}});u.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!1,type:{name:"TIconName"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};const K={title:"Components/ui-radio-fancy",component:u,argTypes:{disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(r),description:"The radio kinds"}},args:{disabled:!1}},d={args:{iconName:R,default:"Description",invertOrder:!1,disabled:!1,radioSize:r.DEFAULT}},t={args:{default:"1",radioSize:r.COMPACT},render:o=>({components:{UiRadioFancy:u,UiTypography:L},setup(){const l=w("1");return{args:o,ETypographySizes:T,modelValue:l}},template:`
        <div class="flex gap-sm">
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
        `,args:{default:"1",radioSize:r.COMPACT}})};var v,g,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT,
    default: "Description",
    invertOrder: false,
    disabled: false,
    radioSize: ERadioSizes.DEFAULT
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var z,S,x;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        <div class="flex gap-sm">
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
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const Q=["Default","Compact"];export{t as Compact,d as Default,Q as __namedExportsOrder,K as default};
