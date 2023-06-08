import{d as v,o as s,e as n,k as i,x as l,v as m,j as u,u as a,g as z,m as w,q as E,B as x,C as $,l as T}from"./vue.esm-bundler-fe4d70d2.js";import{b as c,d as p,E as U,_ as d}from"./ui-typography-3ebb5017.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as B}from"./ui-button-c8638be6.js";import{E as h,_ as I}from"./ui-icon-05de86ac.js";var o=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(o||{});const M={key:0,class:"mt-md mb-sm"},N={key:2,class:"w-full mt-auto"},b=v({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:o.SM}},setup(e){return(t,R)=>(s(),n("div",{class:z(["ui-modal flex flex-col items-center w-full z-10 inset-0 rounded-2xl shadow-md p-md bg-white overflow-y-scroll max-height max-width",[t.modalSize===a(o).SM&&"h-fit max-w-[24rem]",t.modalSize===a(o).MD&&"h-fit max-w-[32rem]",t.modalSize===a(o).LG&&"h-fit max-w-[40rem]",t.modalSize===a(o).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(s(),n("div",M,[i(t.$slots,"icon",{},void 0,!0)])):l("",!0),i(t.$slots,"title",{},()=>[t.title?(s(),m(a(d),{key:0,class:"my-md",weight:a(c).BOLD,align:a(p).CENTER,size:a(U).LG},{default:u(()=>[w(E(t.title),1)]),_:1},8,["weight","align","size"])):l("",!0)],!0),t.$slots.default?(s(),m(a(d),{key:1,is:"div",weight:a(c).REGULAR,align:a(p).CENTER,"line-height":"",class:"w-full text-secondary mb-md overflow-y-auto"},{default:u(()=>[i(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):l("",!0),t.$slots.footer?(s(),n("div",N,[i(t.$slots,"footer",{},void 0,!0)])):l("",!0)],2))}});const S=y(b,[["__scopeId","data-v-d8852dbf"]]);b.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const k={},C=e=>(x("data-v-a4dfa28a"),e=e(),$(),e),V=C(()=>T("div",{class:"backdrop-color fixed backdrop-blur-sm transition-all inset-0 z-0"},null,-1));function L(e,t){return s(),n("div",null,[V,i(e.$slots,"default",{},void 0,!0)])}const O=y(k,[["render",L],["__scopeId","data-v-a4dfa28a"]]);k.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const A={title:"Components/ui-modal",component:S,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:h.SM}},D=e=>({components:{UiModal:S,UiBackdrop:O,UiButton:B,UiIcon:I,UiTypography:d},setup(){return{args:e,ESize:h}},template:`
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
            `}),r=D.bind({});var f,_,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
//# sourceMappingURL=ui-modal.stories-7d16edd3.js.map
