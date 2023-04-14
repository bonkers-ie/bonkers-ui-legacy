import{d as y,o as l,e as h,l as r,k as i,f as b,j as m,u as t,g as k,q as z,m as x,t as v,v as w,B as E,C as T}from"./vue.esm-bundler-9a4beff8.js";import{b as c,d as u,E as U,_ as n}from"./ui-typography-43c7c98a.js";import{_ as B}from"./ui-button-d6fd4a81.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{E as _,_ as I}from"./ui-icon-ee9e3f6c.js";var a=(e=>(e.SM="sm",e.MD="md",e.LG="lg",e.RESPONSIVE="responsive",e))(a||{});const M={class:"mt-md mb-sm"},V={class:"w-full mt-auto"},d=y({__name:"ui-modal",props:{title:{default:void 0},modalSize:{default:a.SM}},setup(e){return(o,R)=>(l(),h("div",{class:k(["ui-modal absolute m-auto flex flex-col items-center z-10 inset-0 rounded-2xl shadow-md p-md bg-white overflow-y-scroll",[e.modalSize===t(a).SM&&"h-fit max-h-[24rem] max-w-[24rem]",e.modalSize===t(a).MD&&"h-fit max-h-[32rem] max-w-[32rem]",e.modalSize===t(a).LG&&"h-fit max-h-[40rem] max-w-[40rem]",e.modalSize===t(a).RESPONSIVE&&"h-5/6 w-11/12"]])},[r("div",M,[i(o.$slots,"icon")]),i(o.$slots,"title",{},()=>[e.title?(l(),z(t(n),{key:0,class:"my-md",weight:t(c).BOLD,align:t(u).CENTER,size:t(U).LG},{default:m(()=>[x(v(e.title),1)]),_:1},8,["weight","align","size"])):w("",!0)]),b(t(n),{weight:t(c).REGULAR,align:t(u).CENTER,"line-height":"",class:"text-secondary mb-md"},{default:m(()=>[i(o.$slots,"default")]),_:3},8,["weight","align"]),r("div",V,[i(o.$slots,"footer")])],2))}});d.__docgenInfo={exportName:"default",displayName:"ui-modal",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"modalSize",required:!1,type:{name:"EModalSizes"},defaultValue:{func:!1,value:"EModalSizes.SM"}}],slots:[{name:"icon"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-modal.vue"]};const S={},$=e=>(E("data-v-a4dfa28a"),e=e(),T(),e),C=$(()=>r("div",{class:"backdrop-color fixed backdrop-blur-sm transition-all inset-0 z-0"},null,-1));function L(e,o){return l(),h("div",null,[C,i(e.$slots,"default",{},void 0,!0)])}const O=N(S,[["render",L],["__scopeId","data-v-a4dfa28a"]]);S.__docgenInfo={displayName:"ui-backdrop",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-modal/ui-backdrop/ui-backdrop.vue"]};const A={title:"Components/ui-modal",component:d,argTypes:{title:{control:{type:"text"},description:"The modal title text"},modalSize:{control:{type:"select"},options:Object.values(a),description:"The modal kinds"},modalVisible:{control:{type:"boolean"},description:"Control Modal Visibility"}},args:{title:"Password Updated",body:"You can now use your new security info to sign in to your account",modalSize:_.SM}},D=e=>({components:{UiModal:d,UiBackdrop:O,UiButton:B,UiIcon:I,UiTypography:n},setup(){return{args:e,ESize:_}},template:`
            <ui-modal
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
            `}),s=D.bind({});var p,f,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,A as default};
//# sourceMappingURL=ui-modal.stories-045beded.js.map
