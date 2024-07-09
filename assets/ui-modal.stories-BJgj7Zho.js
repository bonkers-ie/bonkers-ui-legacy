(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".max-height[data-v-e9747c9f]{max-height:calc(100vh - var(--md))}.max-width[data-v-e9747c9f]{max-width:calc(100vw - var(--md))}.backdrop-color[data-v-60be34bb]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import{d as k,o as n,a as r,h as s,g as i,e as d,w as u,f as a,n as w,i as z,t as v,p as E,q as x,b as U}from"./vue.esm-bundler-CeLExAbV.js";import{a as m,b as c,d as T,U as p,_ as $}from"./index-Cp3NuEg2.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as I}from"./ui-button-CZcbH8Cl.js";import"./index-4l9Ij6O5.js";import{_ as N,E as B}from"./ui-icon-D1gIbnXD.js";var o=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(o||{});const M={key:0},C={key:2,class:"mt-auto w-full"},_=k({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:o.SM}},setup(e){return(t,R)=>(n(),r("div",{class:w(["ui-modal max-height max-width inset-0 z-10 flex w-full flex-col items-center gap-md overflow-y-scroll rounded-2xl bg-white p-md shadow-md",[t.modalSize===a(o).SM&&"h-fit max-w-[24rem]",t.modalSize===a(o).MD&&"h-fit max-w-[32rem]",t.modalSize===a(o).LG&&"h-fit max-w-[40rem]",t.modalSize===a(o).RESPONSIVE&&"h-full"]])},[t.$slots.icon?(n(),r("div",M,[s(t.$slots,"icon",{},void 0,!0)])):i("",!0),s(t.$slots,"title",{},()=>[t.title?(n(),d(a(p),{key:0,weight:a(m).BOLD,align:a(c).CENTER,size:a(T).LG},{default:u(()=>[z(v(t.title),1)]),_:1},8,["weight","align","size"])):i("",!0)],!0),t.$slots.default?(n(),d(a(p),{key:1,is:"div",weight:a(m).REGULAR,align:a(c).CENTER,"line-height":"",class:"w-full overflow-y-auto text-secondary"},{default:u(()=>[s(t.$slots,"default",{},void 0,!0)]),_:3},8,["weight","align"])):i("",!0),t.$slots.footer?(n(),r("div",C,[s(t.$slots,"footer",{},void 0,!0)])):i("",!0)],2))}}),S=y(_,[["__scopeId","data-v-e9747c9f"]]);_.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const b={},L=e=>(E("data-v-60be34bb"),e=e(),x(),e),O=L(()=>U("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function V(e,t){return n(),r("div",null,[O,s(e.$slots,"default",{},void 0,!0)])}const D=y(b,[["render",V],["__scopeId","data-v-60be34bb"]]);b.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const X={title:"Components/ui-modal",component:S,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},default:{control:{type:"text"},description:"The modal body text"}},args:{title:"Password Updated",default:"You can now use your new security info to sign in to your account",modalSize:o.SM}},l={render:e=>({components:{UiModal:S,UiBackdrop:D,UiButton:I,UiIcon:N,UiTypography:$},setup(){return{args:e,ESize:B}},template:`
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
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const j=["Default"];export{l as Default,j as __namedExportsOrder,X as default};
