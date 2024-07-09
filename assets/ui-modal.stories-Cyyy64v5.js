(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".backdrop-color[data-v-60be34bb]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import{U as s,E as o}from"./ui-modal-BuE3fmjv.js";import{_ as l}from"./ui-button-074J3Tp3.js";import{o as c,c as d,e as p,p as m,h as u,g as f}from"./vue.esm-bundler-B9OAKqIP.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-B2laYFUM.js";import{_ as b}from"./index-C4rX16NO.js";import{_ as k,E as g}from"./ui-icon-B078q3KJ.js";const i={},y=e=>(m("data-v-60be34bb"),e=e(),u(),e),S=y(()=>f("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-sm transition-all"},null,-1));function h(e,x){return c(),d("div",null,[S,p(e.$slots,"default",{},void 0,!0)])}const z=_(i,[["render",h],["__scopeId","data-v-60be34bb"]]);i.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const M={title:"Components/ui-modal",component:s,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},default:{control:{type:"text"},description:"The modal body text"}},args:{title:"Password Updated",default:"You can now use your new security info to sign in to your account",modalSize:o.SM}},t={render:e=>({components:{UiModal:s,UiBackdrop:z,UiButton:l,UiIcon:k,UiTypography:b},setup(){return{args:e,ESize:g}},template:`
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
                `})};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,M as default};
