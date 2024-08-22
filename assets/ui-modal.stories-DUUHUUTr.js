(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".backdrop-color[data-v-b88cb1e9]{background-color:#0000007f}")),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import{U as i,E as o}from"./ui-modal-DPX7S8D4.js";import{_ as n}from"./ui-button-Dek033vI.js";import{o as c,c as d,b as p,p as m,j as u,a as f}from"./vue.esm-bundler-GDL5RDDy.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BMi5bGjf.js";import{_ as b}from"./index-2d-qg1vH.js";import{_ as k,E as y}from"./ui-icon-TvJ-ioVV.js";const l={},S=e=>(m("data-v-b88cb1e9"),e=e(),u(),e),g=S(()=>f("div",{class:"backdrop-color fixed inset-0 z-0 backdrop-blur-min transition-all"},null,-1));function h(e,x){return c(),d("div",null,[g,p(e.$slots,"default",{},void 0,!0)])}const z=_(l,[["render",h],["__scopeId","data-v-b88cb1e9"]]);l.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const M={title:"Components/ui-modal",component:i,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(o),description:"The modal kinds"},default:{control:{type:"text"},description:"The modal body text"}},args:{title:"Password Updated",default:"You can now use your new security info to sign in to your account",modalSize:o.SM}},t={render:e=>({components:{UiModal:i,UiBackdrop:z,UiButton:n,UiIcon:k,UiTypography:b},setup(){return{args:e,ESize:y}},template:`
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
                `})};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,M as default};
