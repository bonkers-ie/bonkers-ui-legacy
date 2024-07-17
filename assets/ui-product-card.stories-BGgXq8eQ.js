import{d as z,o as r,c as _,b as o,w as l,j as d,t as u,a as e,f as c,e as p,g as S}from"./vue.esm-bundler-Bywgp341.js";import{a as m,E as C,c as g,U as f,b as k}from"./index-CEd4KI44.js";import{_ as U,E as D}from"./ui-badge-Cc0MW7Fd.js";import"./index-zc_atqq8.js";import{_ as T,E as w}from"./ui-icon-BTwu2D6P.js";const F=U,N={class:"relative flex flex-col gap-sm rounded-2xl border border-secondary-alt-300 bg-white px-xs py-sm"},O={class:"grid gap-xxs"},n=z({__name:"ui-product-card",props:{badgeText:{},title:{},subtitle:{}},setup(i){return(t,P)=>(r(),_("div",N,[t.badgeText?(r(),o(e(F),{key:0,class:"!absolute -top-xxs right-xs",kind:e(D).ACCENT_ALT,rounded:""},{default:l(()=>[d(u(t.badgeText),1)]),_:1},8,["kind"])):c("",!0),p(t.$slots,"header"),S("div",O,[p(t.$slots,"title",{},()=>[t.title?(r(),o(e(f),{key:0,size:e(m).MD,weight:e(C).BOLD,align:e(g).LEFT,"line-height":""},{default:l(()=>[d(u(t.title),1)]),_:1},8,["size","weight","align"])):c("",!0)]),p(t.$slots,"subtitle",{},()=>[t.subtitle?(r(),o(e(f),{key:0,size:e(m).XS,align:e(g).LEFT,kind:e(k).SECONDARY_400,"line-height":""},{default:l(()=>[d(u(t.subtitle),1)]),_:1},8,["size","align","kind"])):c("",!0)])])]))}});n.__docgenInfo={exportName:"default",displayName:"ui-product-card",description:"",tags:{},props:[{name:"badgeText",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}}],slots:[{name:"header"},{name:"title"},{name:"subtitle"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-product-card/ui-product-card.vue"]};const V={title:"Components/ui-product-card",component:n,argTypes:{title:{control:{type:"text"},description:"The title text"},subtitle:{control:{type:"text"},description:"The subtitle text"}},args:{title:"This is a Title",subtitle:"This is a Subtitle"}},a={render:i=>({components:{UiProductCard:n,UiIcon:T},setup(){return{args:i,ESize:w}},template:`
            <ui-product-card :title="args.title" :subtitle="args.subtitle">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-sm flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.LG"></ui-icon>
                    </div>
                </template>
            </ui-product-card>
        `})},s={render:i=>({components:{UiProductCard:n,UiIcon:T},setup(){return{args:i,ESize:w}},template:`
        <div class="grid grid-cols-2 gap-xs w-[412px]">
            <ui-product-card :title="args.title" :subtitle="args.subtitle">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-sm flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
                    </div>
                </template>
            </ui-product-card>

            <ui-product-card :title="args.title" :subtitle="args.subtitle" badgeText="UP TO €586 OFF">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-xxs flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
                    </div>
                </template>
            </ui-product-card>
        </div>
        `})};var b,x,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiProductCard,
      UiIcon
    },
    setup() {
      return {
        args,
        ESize
      };
    },
    template: /*html*/\`
            <ui-product-card :title="args.title" :subtitle="args.subtitle">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-sm flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.LG"></ui-icon>
                    </div>
                </template>
            </ui-product-card>
        \`
  })
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,y,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiProductCard,
      UiIcon
    },
    setup() {
      return {
        args,
        ESize
      };
    },
    template: /*html*/\`
        <div class="grid grid-cols-2 gap-xs w-[412px]">
            <ui-product-card :title="args.title" :subtitle="args.subtitle">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-sm flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
                    </div>
                </template>
            </ui-product-card>

            <ui-product-card :title="args.title" :subtitle="args.subtitle" badgeText="UP TO €586 OFF">
                <template v-slot:header>
                    <div class="rounded-full bg-primary p-xxs flex w-fit text-white">
                        <ui-icon :icon-name="['far', 'face-smile']" :size="ESize.MD"></ui-icon>
                    </div>
                </template>
            </ui-product-card>
        </div>
        \`
  })
}`,...(E=(y=s.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const $=["Default","Variants"];export{a as Default,s as Variants,$ as __namedExportsOrder,V as default};
