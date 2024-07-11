import{d as V,i as M,o as i,c as n,q as x,v as A,g as f,a,l as m,k as s,f as D,w as U,e as O,r as w}from"./vue.esm-bundler-Bywgp341.js";import{a as C,b as F,U as I,_ as L}from"./index-CEd4KI44.js";import{E as b}from"./ui-icon-BTwu2D6P.js";import{u as y}from"./index-zc_atqq8.js";import{I as R}from"./CONSTANTS-DsDzjTaK.js";import"./ui-badge-Cc0MW7Fd.js";import"./ui-ber-rank-DCWbMNer.js";import"./ui-button-BLNXhkga.js";import"./ui-icon-wrapper-DshTefkb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-oWN1qhGF.js";import"./ui-list-item-DCrGZ8rq.js";import"./ui-modal-Bj9LcZl3.js";import"./ui-notification-badge-DHhPj850.js";import"./ui-snackbar-BcRDLarS.js";import"./ui-table-row-D55lSHOw.js";var r=(o=>(o.DEFAULT="default",o.MINIMAL="minimal",o.COMPACT="compact",o))(r||{});const q=["name","value","disabled"],P={key:0},B={key:1},$={key:2},p=V({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},iconName:{default:void 0},disabled:{type:Boolean},radioSize:{default:r.DEFAULT}},emits:["update:modelValue"],setup(o,{emit:l}){const k=o,N=l,u=M({get(){return k.modelValue},set(e){N("update:modelValue",e)}});return(e,c)=>(i(),n("label",{class:s(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[x(f("input",{"onUpdate:modelValue":c[0]||(c[0]=E=>u.value=E),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,q),[[A,u.value]]),f("div",{class:s(["ui-radio-fancy__content box-border size-full cursor-pointer rounded-lg border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-2xl before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xxs peer-checked:active:before:-left-xxs peer-checked:active:before:-right-xxs peer-checked:active:before:-top-xxs peer-focus:before:-bottom-xxs peer-focus:before:-left-xxs peer-focus:before:-right-xxs peer-focus:before:-top-xxs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===a(r).MINIMAL&&"flex gap-sm align-middle",e.radioSize===a(r).COMPACT&&"grid cursor-pointer grid-flow-col px-md"]])},[e.radioSize===a(r).DEFAULT&&e.iconName?(i(),n("div",P,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).MINIMAL&&e.iconName?(i(),n("div",B,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).COMPACT?(i(),n("div",$)):D("",!0),m(a(I),{size:a(C).SM,kind:a(F).SECONDARY,class:"pt-xxxs"},{default:U(()=>[O(e.$slots,"default")]),_:3},8,["size","kind"])],2)],2))}});p.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!1,type:{name:"TIconName"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};const ne={title:"Components/ui-radio-fancy",component:p,argTypes:{disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(r),description:"The radio kinds"}},args:{disabled:!1}},d={args:{iconName:R,default:"Description",invertOrder:!1,disabled:!1,radioSize:r.DEFAULT}},t={args:{default:"1",radioSize:r.COMPACT},render:o=>({components:{UiRadioFancy:p,UiTypography:L},setup(){const l=w("1");return{args:o,ETypographySizes:C,modelValue:l}},template:`
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
        `,args:{default:"1",radioSize:r.COMPACT}})};var g,v,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT,
    default: "Description",
    invertOrder: false,
    disabled: false,
    radioSize: ERadioSizes.DEFAULT
  }
}`,...(h=(v=d.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var z,S,T;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const se=["Default","Compact"];export{t as Compact,d as Default,se as __namedExportsOrder,ne as default};
