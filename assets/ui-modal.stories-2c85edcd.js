import{e as v,o as s,g as n,j as i,n as l,k as m,l as u,u as o,s as z,m as w,t as E,D as x,E as $,p as T}from"./vue.esm-bundler-8de1b0f8.js";import{a as c,b as p,d as U,_ as d}from"./ui-typography-103e2fbe.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as I}from"./ui-button-7367bfc3.js";import{E as h,_ as M}from"./ui-icon-747cc613.js";var a=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(a||{});const B={key:0,class:"mb-sm mt-md"},N={key:2,class:"mt-auto w-full"},b=v({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:a.SM}},setup(e){return(t,R)=>(s(),n("div",{class:z(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[t.modalSize===o(a).SM&&"h-fit max-w-[24rem]",t.modalSize===o(a).MD&&"h-fit max-w-[32rem]",t.modalSize===o(a).LG&&"h-fit max-w-[40rem]",t.modalSize===o(a).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(s(),n("div",B,[i(t.$slots,"icon",{},void 0,!0)])):l("",!0),i(t.$slots,"title",{},()=>[t.title?(s(),m(o(d),{key:0,class:"my-md",weight:o(c).BOLD,align:o(p).CENTER,size:o(U).LG},{default:u(()=>[w(E(t.title),1)]),_:1},8,["weight","align","size"])):l("",!0)],!0),t.$slots.default?(s(),m(o(d),{key:1,is:"div",weight:o(c).REGULAR,align:o(p).CENTER,"line-height":"",class:"mb-md w-full overflow-y-auto text-secondary"},{default:u(()=>[i(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):l("",!0),t.$slots.footer?(s(),n("div",N,[i(t.$slots,"footer",{},void 0,!0)])):l("",!0)],2))}});const S=y(b,[["__scopeId","data-v-f3e5c3af"]]);b.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const k={},V=e=>(x("data-v-e497a16b"),e=e(),$(),e),C=V(()=>T("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function D(e,t){return s(),n("div",null,[C,i(e.$slots,"default",{},void 0,!0)])}const L=y(k,[["render",D],["__scopeId","data-v-e497a16b"]]);k.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const A={title:"Components/ui-modal",component:S,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(a),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:h.SM}},O=e=>({components:{UiModal:S,UiBackdrop:L,UiButton:I,UiIcon:M,UiTypography:d},setup(){return{args:e,ESize:h}},template:`
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
            `}),r=O.bind({});var f,_,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(g=(_=r.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const F=["Default"];export{r as Default,F as __namedExportsOrder,A as default};
//# sourceMappingURL=ui-modal.stories-2c85edcd.js.map
