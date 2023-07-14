import{d as k,b as V,o as t,e as d,p as A,v as F,f as c,i as r,q as n,n as i,j as N,w as x,k as D,a as E}from"./vue.esm-bundler-a43e9918.js";import{d as w,E as M,_ as R}from"./ui-typography-debf4260.js";import{E as f,_ as b}from"./ui-icon-88d80b57.js";var o=(a=>(a.DEFAULT="default",a.MINIMAL="minimal",a))(o||{});const T=["name","value","disabled"],L={key:0},U={key:1},l=k({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:{},value:{type:[String,Number,Boolean]},iconName:{},disabled:{type:Boolean},radioSize:{default:o.DEFAULT}},emits:["update:modelValue"],setup(a,{emit:m}){const S=a,u=V({get(){return S.modelValue},set(e){m("update:modelValue",e)}});return(e,p)=>(t(),d("label",{class:i(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[A(c("input",{"onUpdate:modelValue":p[0]||(p[0]=z=>u.value=z),type:"radio",name:e.name,value:e.value,class:"group peer absolute appearance-none",disabled:e.disabled},null,8,T),[[F,u.value]]),c("div",{class:i(["ui-radio-fancy__content box-border h-full w-full cursor-pointer rounded-xl border border-secondary-alt-500 bg-white p-sm before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 hover:border-secondary-alt-700 peer-checked:border-transparent peer-checked:shadow-selected-shadow peer-checked:hover:shadow-border-selected peer-checked:active:shadow-border-primary peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:active:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs peer-focus:before:-top-xs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-active:before:-top-xxs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===r(o).DEFAULT&&"default",e.radioSize===r(o).MINIMAL&&"flex gap-sm align-middle"]])},[e.radioSize===r(o).DEFAULT?(t(),d("div",L,[n(r(b),{"icon-name":e.iconName,size:r(f).MD,class:i(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===r(o).MINIMAL?(t(),d("div",U,[n(r(b),{"icon-name":e.iconName,size:r(f).MD,class:i([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):N("",!0),n(r(R),{size:r(w).SM,kind:r(M).SECONDARY,class:"pt-xxs"},{default:x(()=>[D(e.$slots,"default")]),_:3},8,["size","kind"])],2)],2))}});l.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};var h=(a=>(a.FAR="far",a.FAS="fas",a.FAB="fab",a.FAL="fal",a.FAD="fad",a.FAT="fat",a.BRANDS="fa-brands",a))(h||{});const O={title:"Components/ui-radio-fancy",component:l,argTypes:{invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(o),description:"The radio kinds"}},args:{slot:"Description",invertOrder:!1,disabled:!1,radioSize:o.DEFAULT}},B=a=>({components:{UiRadioFancy:l},setup(){return{modelValue:E("1"),EIconType:h,args:a,ERadioSizes:o}},template:`
        <div class="grid gap-sm" :style="{'grid-template-columns': 'repeat(auto-fit, minmax(160px, 1fr))'}">
            <ui-radio-fancy v-for="item in 2" :key="item" :value="String(item)" v-model="modelValue" name="radio" title="title" :icon-name="[EIconType.FAR, 'face-smile']" :radioSize="args.radioSize" :disabled="args.disabled">
                {{args.slot}}
            </ui-radio-fancy>
        </div>
    `}),s=B.bind({});var v,y,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    UiRadioFancy
  },
  setup() {
    const modelValue = ref("1");
    return {
      modelValue,
      EIconType,
      args,
      ERadioSizes
    };
  },
  template: /*html*/\`
        <div class="grid gap-sm" :style="{'grid-template-columns': 'repeat(auto-fit, minmax(160px, 1fr))'}">
            <ui-radio-fancy v-for="item in 2" :key="item" :value="String(item)" v-model="modelValue" name="radio" title="title" :icon-name="[EIconType.FAR, 'face-smile']" :radioSize="args.radioSize" :disabled="args.disabled">
                {{args.slot}}
            </ui-radio-fancy>
        </div>
    \`
})`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const $=["Default"];export{s as Default,$ as __namedExportsOrder,O as default};
//# sourceMappingURL=ui-radio-fancy.stories-09b5fcdd.js.map
