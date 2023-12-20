(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".max-height[data-v-f3e5c3af]{max-height:calc(100vh - var(--md))}.max-width[data-v-f3e5c3af]{max-width:calc(100vw - var(--md))}.backdrop-color[data-v-e497a16b]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{e as _,o as s,g as r,p as i,m as n,k as m,n as u,l as o,q as v,z as w,A as E,x as U,y as x,j as T}from"./vue.esm-bundler-0aijNq6S.js";import{U as d}from"./index-x7TYTibA.js";import{a as c,b as p,d as I}from"./ui-typography-dWkvwKnc.js";import{_ as y}from"./_plugin-vue_export-helper-x3n3nnut.js";import{U as $}from"./index-GV89Ok2V.js";import{d as B}from"./index-7cJsCGdg.js";import{E as b}from"./ui-icon-5FFHX_Lo.js";var a=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(a||{});const M={key:0,class:"mb-sm mt-md"},N={key:2,class:"mt-auto w-full"},S=_({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:a.SM}},setup(e){return(t,G)=>(s(),r("div",{class:v(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[t.modalSize===o(a).SM&&"h-fit max-w-[24rem]",t.modalSize===o(a).MD&&"h-fit max-w-[32rem]",t.modalSize===o(a).LG&&"h-fit max-w-[40rem]",t.modalSize===o(a).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(s(),r("div",M,[i(t.$slots,"icon",{},void 0,!0)])):n("",!0),i(t.$slots,"title",{},()=>[t.title?(s(),m(o(d),{key:0,class:"my-md",weight:o(c).BOLD,align:o(p).CENTER,size:o(I).LG},{default:u(()=>[w(E(t.title),1)]),_:1},8,["weight","align","size"])):n("",!0)],!0),t.$slots.default?(s(),m(o(d),{key:1,is:"div",weight:o(c).REGULAR,align:o(p).CENTER,"line-height":"",class:"mb-md w-full overflow-y-auto text-secondary"},{default:u(()=>[i(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):n("",!0),t.$slots.footer?(s(),r("div",N,[i(t.$slots,"footer",{},void 0,!0)])):n("",!0)],2))}}),k=y(S,[["__scopeId","data-v-f3e5c3af"]]);S.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const z={},V=e=>(U("data-v-e497a16b"),e=e(),x(),e),C=V(()=>T("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function D(e,t){return s(),r("div",null,[C,i(e.$slots,"default",{},void 0,!0)])}const L=y(z,[["render",D],["__scopeId","data-v-e497a16b"]]);z.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const O=L,Y={title:"Components/ui-modal",component:k,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(a),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:b.SM}},R=e=>({components:{UiModal:k,UiBackdrop:O,UiButton:$,UiIcon:B,UiTypography:d},setup(){return{args:e,ESize:b}},template:`
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
            `}),l=R.bind({});var f,g,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const H=["Default"];export{l as Default,H as __namedExportsOrder,Y as default};
