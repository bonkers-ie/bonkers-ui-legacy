import{d as z,c as k,o as s,e as n,y as V,F as A,u as a,l as f,A as F,f as l,g as t,v as N,j as D,k as E,a as w}from"./vue.esm-bundler-9a4beff8.js";import{E as M,a as R,b as T,_ as L}from"./ui-typography-43c7c98a.js";import{E as b,_ as p}from"./ui-icon-ee9e3f6c.js";var r=(e=>(e.DEFAULT="default",e.MINIMAL="minimal",e))(r||{});const B=["name","value","disabled"],U={key:0},C={key:1},m=z({__name:"ui-radio-fancy",props:{modelValue:{type:[String,Number,Boolean]},name:null,value:{type:[String,Number,Boolean]},iconName:null,disabled:{type:Boolean},radioSize:{default:r.DEFAULT}},emits:["update:modelValue"],setup(e,{emit:c}){const h=e,o=k({get(){return h.modelValue},set(d){c("update:modelValue",d)}});return(d,u)=>(s(),n("label",{class:t(["ui-radio-fancy relative",e.disabled&&"pointer-events-none"])},[V(f("input",{"onUpdate:modelValue":u[0]||(u[0]=S=>F(o)?o.value=S:null),type:"radio",name:e.name,value:e.value,class:"peer group appearance-none absolute",disabled:e.disabled},null,8,B),[[A,a(o)]]),f("div",{class:t(["ui-radio-fancy__content box-border w-full h-full py-sm px-sm border border-secondary-alt-500 bg-white hover:border-secondary-alt-700 cursor-pointer rounded-xl before:absolute before:-z-10 before:box-border before:rounded-[16px] before:bg-primary-300 peer-checked:border-transparent peer-checked:active:shadow-border-primary peer-checked:active:before:-top-xs peer-checked:active:before:-bottom-xs peer-checked:active:before:-left-xs peer-checked:active:before:-right-xs peer-checked:hover:shadow-border-selected peer-checked:shadow-selected-shadow peer-active:before:-top-xxs peer-active:before:-bottom-xxs peer-active:before:-left-xxs peer-active:before:-right-xxs peer-focus:before:-top-xs peer-focus:before:-bottom-xs peer-focus:before:-left-xs peer-focus:before:-right-xs",[e.disabled&&"pointer-events-none border-secondary-alt-400 peer-checked:shadow-border-primary-disabled",e.radioSize===a(r).DEFAULT&&"default",e.radioSize===a(r).MINIMAL&&"flex gap-sm align-middle"]])},[e.radioSize===a(r).DEFAULT?(s(),n("div",U,[l(a(p),{"icon-name":e.iconName,size:a(b).MD,class:t(["mb-md peer-checked:text-primary-500",[e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"]])},null,8,["icon-name","size","class"])])):e.radioSize===a(r).MINIMAL?(s(),n("div",C,[l(a(p),{"icon-name":e.iconName,size:a(b).MD,class:t([e.value===e.modelValue&&"text-primary",e.disabled&&"text-secondary-alt-400",e.disabled&&e.value===e.modelValue&&"text-primary-300"])},null,8,["icon-name","size","class"])])):N("",!0),l(a(L),{size:a(M).SM,kind:a(R).SECONDARY,weight:a(T).SEMI_BOLD,class:"pt-xxs"},{default:D(()=>[E(d.$slots,"default")]),_:3},8,["size","kind","weight"])],2)],2))}});m.__docgenInfo={exportName:"default",displayName:"ui-radio-fancy",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"radioSize",required:!1,type:{name:"ERadioSizes"},defaultValue:{func:!1,value:"ERadioSizes.DEFAULT"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-radio-fancy/ui-radio-fancy.vue"]};var x=(e=>(e.FAR="far",e.FAS="fas",e.FAB="fab",e.FAL="fal",e.FAD="fad",e.FAT="fat",e.BRANDS="fa-brands",e))(x||{});const j={title:"Components/ui-radio-fancy",component:m,argTypes:{invertOrder:{control:{type:"boolean"},description:"The Element order"},disabled:{control:{type:"boolean"},description:"The full width size"},radioSize:{control:{type:"select"},options:Object.values(r),description:"The radio kinds"}},args:{slot:"Description",invertOrder:!1,disabled:!1,radioSize:r.DEFAULT}},q=e=>({components:{UiRadioFancy:m},setup(){return{modelValue:w("1"),EIconType:x,args:e,ERadioSizes:r}},template:`
        <div class="grid gap-sm" :style="{'grid-template-columns': 'repeat(auto-fit, minmax(160px, 1fr))'}">
            <ui-radio-fancy v-for="item in 2" :key="item" :value="String(item)" v-model="modelValue" name="radio" title="title" :icon-name="[EIconType.FAR, 'face-smile']" :radioSize="args.radioSize" :disabled="args.disabled">
                {{args.slot}}
            </ui-radio-fancy>
        </div>
    `}),i=q.bind({});var y,v,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,j as default};
//# sourceMappingURL=ui-radio-fancy.stories-16b06e68.js.map
