import{e as V,f as M,o as i,g as n,q as A,y as D,p as f,u as a,z as m,s,n as O,l as U,j as w,b as x}from"./vue.esm-bundler-1832156e.js";import{d as T,E as F,_ as k}from"./ui-typography-633a1041.js";import{E as b,_ as y}from"./ui-icon-685efca2.js";import{I}from"./CONSTANTS-3fd880c0.js";var r=(o=>(o.DEFAULT="default",o.MINIMAL="minimal",o.COMPACT="compact",o))(r||{});const L=["name","value","disabled"],q={key:0},P={key:1},R={key:2},u=V({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},iconName:{default:void 0},disabled:{type:Boolean},radioSize:{default:r.DEFAULT}},emits:["update:modelValue"],setup(o,{emit:l}){const E=o,p=M({get(){return E.modelValue},set(e){l("update:modelValue",e)}});return(e,c)=>(i(),n("label",{class:s(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[A(f("input",{"onUpdate:modelValue":c[0]||(c[0]=N=>p.value=N),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,L),[[D,p.value]]),f("div",{class:s(["ui-radio-fancy__content box-border h-full w-full cursor-pointer rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===a(r).MINIMAL&&"flex gap-sm align-middle",e.radioSize===a(r).COMPACT&&"grid cursor-pointer grid-flow-col px-md"]])},[e.radioSize===a(r).DEFAULT&&e.iconName?(i(),n("div",q,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).MINIMAL&&e.iconName?(i(),n("div",P,[m(a(y),{"icon-name":e.iconName,size:a(b).MD,class:s([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).COMPACT?(i(),n("div",R)):O("",!0),m(a(k),{size:a(T).SM,kind:a(F).SECONDARY,class:"pt-xxs"},{default:U(()=>[w(e.$slots,"default")]),_:3},8,["size","kind"])],2)],2))}});u.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!1,type:{name:"TIconName"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};const G={title:"Components/ui-radio-fancy",component:u,argTypes:{disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(r),description:"The radio kinds"}}},d={args:{iconName:I,default:"Description",invertOrder:!1,disabled:!1,radioSize:r.DEFAULT}},t={args:{default:"1",radioSize:r.COMPACT},render:o=>({components:{UiRadioFancy:u,UiTypography:k},setup(){const l=x("1");return{args:o,ETypographySizes:T,modelValue:l}},template:`
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
        `,args:{default:"1",radioSize:r.COMPACT}})};var v,g,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: ICON_DEFAULT,
    default: "Description",
    invertOrder: false,
    disabled: false,
    radioSize: ERadioSizes.DEFAULT
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var z,S,C;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const H=["Default","Compact"];export{t as Compact,d as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=ui-radio-fancy.stories-ac562a06.js.map
