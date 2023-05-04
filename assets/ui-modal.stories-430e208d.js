import{d as b,o as s,e as n,k as i,v as l,q as u,j as c,u as t,g as k,m as z,t as w,B as v,C as x,l as E}from"./vue.esm-bundler-9a4beff8.js";import{b as p,d as f,E as $,_ as d}from"./ui-typography-43c7c98a.js";import{_ as T}from"./ui-button-d6fd4a81.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{E as _,_ as B}from"./ui-icon-ee9e3f6c.js";var o=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(o||{});const I={key:0,class:"mt-md mb-sm"},M={key:2,class:"w-full mt-auto"},m=b({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:o.SM}},setup(e){return(a,D)=>(s(),n("div",{class:k(["ui-modal flex flex-col items-center w-full z-10 inset-0 rounded-2xl shadow-md p-md bg-white overflow-y-scroll",[e.modalSize===t(o).SM&&"h-fit max-h-[24rem] max-w-[24rem]",e.modalSize===t(o).MD&&"h-fit max-h-[32rem] max-w-[32rem]",e.modalSize===t(o).LG&&"h-fit max-h-[40rem] max-w-[40rem]",e.modalSize===t(o).RESPONSIVE&&"h-5/6 w-11/12"]])},[a.$slots.icon?(s(),n("div",I,[i(a.$slots,"icon")])):l("",!0),i(a.$slots,"title",{},()=>[e.title?(s(),u(t(d),{key:0,class:"my-md",weight:t(p).BOLD,align:t(f).CENTER,size:t($).LG},{default:c(()=>[z(w(e.title),1)]),_:1},8,["weight","align","size"])):l("",!0)]),a.$slots.default?(s(),u(t(d),{key:1,is:"div",weight:t(p).REGULAR,align:t(f).CENTER,"line-height":"",class:"w-full text-secondary mb-md overflow-y-auto"},{default:c(()=>[i(a.$slots,"default")]),_:3},8,["weight","align"])):l("",!0),a.$slots.footer?(s(),n("div",M,[i(a.$slots,"footer")])):l("",!0)],2))}});m.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const S={},N=e=>(v("data-v-a4dfa28a"),e=e(),x(),e),C=N(()=>E("div",{class:"backdrop-color fixed backdrop-blur-sm transition-all inset-0 z-0"},null,-1));function V(e,a){return s(),n("div",null,[C,i(e.$slots,"default",{},void 0,!0)])}const L=U(S,[["render",V],["__scopeId","data-v-a4dfa28a"]]);S.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const j={title:"Components/ui-modal",component:m,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:_.SM}},O=e=>({components:{UiModal:m,UiBackdrop:L,UiButton:T,UiIcon:B,UiTypography:d},setup(){return{args:e,ESize:_}},template:`
            <ui-modal
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    :title="args.title"
                    :modalSize="args.modalSize"
                >
                    <template #icon>
                        <ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
                    </template>

                    <template #default>
                        {{args.body}}
                    </template>

                    <template #footer>
                        <ui-button
                            fullWidth
                        >
                            Ok
                        </ui-button>
                    </template>
            </ui-modal>

            <ui-backdrop />
            `}),r=O.bind({});var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    UiModal,
    UiBackdrop,
    UiButton,
    UiIcon,
    UiTypography
  },
  setup() {
    return {
      args,
      ESize
    };
  },
  template: /*html*/\`
            <ui-modal
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    :title="args.title"
                    :modalSize="args.modalSize"
                >
                    <template #icon>
                        <ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
                    </template>

                    <template #default>
                        {{args.body}}
                    </template>

                    <template #footer>
                        <ui-button
                            fullWidth
                        >
                            Ok
                        </ui-button>
                    </template>
            </ui-modal>

            <ui-backdrop />
            \`
})`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const A=["Default"];export{r as Default,A as __namedExportsOrder,j as default};
//# sourceMappingURL=ui-modal.stories-430e208d.js.map
