(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".max-height[data-v-f3e5c3af]{max-height:calc(100vh - var(--md))}.max-width[data-v-f3e5c3af]{max-width:calc(100vw - var(--md))}.backdrop-color[data-v-e497a16b]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{e as v,o as s,g as n,j as i,n as l,k as u,l as m,u as o,s as z,m as w,t as E,z as U,A as x,p as T}from"./vue.esm-bundler-5815757d.js";import{U as d}from"./index-8738b0a4.js";import{a as c,b as p,d as B}from"./ui-typography-7e42daed.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{U as I}from"./index-556f8357.js";import{d as M}from"./index-7014e7a9.js";import{E as h}from"./ui-icon-253a2a48.js";var a=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(a||{});const $={key:0,class:"mb-sm mt-md"},N={key:2,class:"mt-auto w-full"},b=v({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:a.SM}},setup(e){return(t,G)=>(s(),n("div",{class:z(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[t.modalSize===o(a).SM&&"h-fit max-w-[24rem]",t.modalSize===o(a).MD&&"h-fit max-w-[32rem]",t.modalSize===o(a).LG&&"h-fit max-w-[40rem]",t.modalSize===o(a).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(s(),n("div",$,[i(t.$slots,"icon",{},void 0,!0)])):l("",!0),i(t.$slots,"title",{},()=>[t.title?(s(),u(o(d),{key:0,class:"my-md",weight:o(c).BOLD,align:o(p).CENTER,size:o(B).LG},{default:m(()=>[w(E(t.title),1)]),_:1},8,["weight","align","size"])):l("",!0)],!0),t.$slots.default?(s(),u(o(d),{key:1,is:"div",weight:o(c).REGULAR,align:o(p).CENTER,"line-height":"",class:"mb-md w-full overflow-y-auto text-secondary"},{default:m(()=>[i(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):l("",!0),t.$slots.footer?(s(),n("div",N,[i(t.$slots,"footer",{},void 0,!0)])):l("",!0)],2))}});const S=y(b,[["__scopeId","data-v-f3e5c3af"]]);b.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const k={},V=e=>(U("data-v-e497a16b"),e=e(),x(),e),C=V(()=>T("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function D(e,t){return s(),n("div",null,[C,i(e.$slots,"default",{},void 0,!0)])}const L=y(k,[["render",D],["__scopeId","data-v-e497a16b"]]);k.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const O=L,Y={title:"Components/ui-modal",component:S,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(a),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:h.SM}},R=e=>({components:{UiModal:S,UiBackdrop:O,UiButton:I,UiIcon:M,UiTypography:d},setup(){return{args:e,ESize:h}},template:`
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
            `}),r=R.bind({});var f,_,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(g=(_=r.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,Y as default};
//# sourceMappingURL=ui-modal.stories-2f848628.js.map
