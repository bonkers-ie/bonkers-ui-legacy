(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".max-height[data-v-f3e5c3af]{max-height:calc(100vh - var(--md))}.max-width[data-v-f3e5c3af]{max-width:calc(100vw - var(--md))}.backdrop-color[data-v-e497a16b]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{e as b,o as s,g as r,p as n,m as i,k as d,n as m,l as a,q as z,s as v,t as w,B as E,C as x,j as $}from"./vue.esm-bundler-26GhoP0B.js";import{d as u}from"./index-hJfbsusS.js";import{a as c,b as p,d as T,_ as U}from"./ui-typography-a0Uot2md.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";import{_ as I}from"./ui-button-Jz46TVZo.js";import{_ as B,E as N}from"./ui-icon-El7tnX69.js";var o=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(o||{});const M={key:0,class:"mb-sm mt-md"},C={key:2,class:"mt-auto w-full"},y=b({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:o.SM}},setup(e){return(t,R)=>(s(),r("div",{class:z(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[t.modalSize===a(o).SM&&"h-fit max-w-[24rem]",t.modalSize===a(o).MD&&"h-fit max-w-[32rem]",t.modalSize===a(o).LG&&"h-fit max-w-[40rem]",t.modalSize===a(o).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(s(),r("div",M,[n(t.$slots,"icon",{},void 0,!0)])):i("",!0),n(t.$slots,"title",{},()=>[t.title?(s(),d(a(u),{key:0,class:"my-md",weight:a(c).BOLD,align:a(p).CENTER,size:a(T).LG},{default:m(()=>[v(w(t.title),1)]),_:1},8,["weight","align","size"])):i("",!0)],!0),t.$slots.default?(s(),d(a(u),{key:1,is:"div",weight:a(c).REGULAR,align:a(p).CENTER,"line-height":"",class:"mb-md w-full overflow-y-auto text-secondary"},{default:m(()=>[n(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):i("",!0),t.$slots.footer?(s(),r("div",C,[n(t.$slots,"footer",{},void 0,!0)])):i("",!0)],2))}}),S=_(y,[["__scopeId","data-v-f3e5c3af"]]);y.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const k={},D=e=>(E("data-v-e497a16b"),e=e(),x(),e),L=D(()=>$("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function O(e,t){return s(),r("div",null,[L,n(e.$slots,"default",{},void 0,!0)])}const V=_(k,[["render",O],["__scopeId","data-v-e497a16b"]]);k.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const F={title:"Components/ui-modal",component:S,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},default:{control:{type:"text"},description:"The modal body text"}},args:{title:"Password Updated",default:"You can now use your new security info to sign in to your account",modalSize:o.SM}},l={render:e=>({components:{UiModal:S,UiBackdrop:V,UiButton:I,UiIcon:B,UiTypography:U},setup(){return{args:e,ESize:N}},template:`
                <ui-modal
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        :title="args.title"
                        :modalSize="args.modalSize"
                    >
                        <template #icon>
                            <ui-icon class="text-primary"  :icon-name="['far', 'circle-check']" :size=ESize.XL  />
                        </template>

                        <template #default>
                            {{args.default}}
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
                `})};var f,h,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
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
                            {{args.default}}
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
  })
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const X=["Default"];export{l as Default,X as __namedExportsOrder,F as default};
