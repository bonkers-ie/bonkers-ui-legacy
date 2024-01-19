(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-card-result__header[data-v-c7aa8ae2]{grid-template-columns:1fr auto}.line-clamp[data-v-c7aa8ae2]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as a,E as r,b as g,a as x,_ as o}from"./ui-typography-a0Uot2md.js";import{e as z,o as s,g as p,z as f,n as c,s as m,t as d,l as e,m as u,j as y,k as C,p as b}from"./vue.esm-bundler-26GhoP0B.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";import{_ as w}from"./ui-badge-4_BIxhnp.js";import{_ as B}from"./ui-list-item-XyzpBi39.js";import{_ as A,E as D}from"./ui-button-Jz46TVZo.js";import{_ as N,E as X}from"./ui-icon-El7tnX69.js";import"./index-umElUeEY.js";import"./index-hJfbsusS.js";const O={class:"ui-card-result"},M={class:"relative grid overflow-hidden rounded-2xl border border-secondary-alt-400 bg-white"},U={class:"ui-card-result__header m-xs mb-sm grid items-center justify-between gap-xs rounded-lg bg-secondary-alt-200 p-xs"},F={class:"w-full overflow-hidden bg-white p-sm pt-0"},T=z({__name:"ui-card-result",props:{header:{},exclusiveText:{},exclusiveTextBottom:{},exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(h){return(i,t)=>(s(),p("div",O,[i.exclusiveText?(s(),p("div",{key:0,class:"-mb-lg rounded-2xl bg-primary px-sm pb-lg",onClick:t[0]||(t[0]=(...l)=>i.exclusiveClickAction&&i.exclusiveClickAction(...l))},[f(e(o),{class:"py-xs","line-height":"",size:e(a).XXS,kind:e(r).WHITE,align:e(g).CENTER,weight:e(x).SEMI_BOLD},{default:c(()=>[m(d(i.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):u("",!0),y("div",M,[y("div",U,[i.header?(s(),C(e(o),{key:0,"line-height":"",class:"line-clamp flex-1",size:e(a).SM,weight:e(x).BOLD,kind:e(r).SECONDARY},{default:c(()=>[m(d(i.header),1)]),_:1},8,["size","weight","kind"])):u("",!0),b(i.$slots,"sidebar",{},void 0,!0)]),y("main",F,[b(i.$slots,"default",{},void 0,!0)])]),i.exclusiveTextBottom?(s(),p("div",{key:1,class:"-mt-lg rounded-2xl border border-secondary-alt-400 bg-secondary-alt-200 px-sm pt-lg",onClick:t[1]||(t[1]=(...l)=>i.exclusiveBottomClickAction&&i.exclusiveBottomClickAction(...l))},[f(e(o),{class:"py-xs",size:e(a).XXS,kind:e(r).SECONDARY,align:e(g).CENTER,"line-height":""},{default:c(()=>[m(d(i.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):u("",!0)]))}}),k=_(T,[["__scopeId","data-v-c7aa8ae2"]]);T.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const H={title:"Components/ui-card-result",component:k,argTypes:{header:{control:{type:"text"},description:"Header text"},exclusiveText:{control:{type:"text"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"text"},description:"Whether to show the exclusive text"}},args:{header:"header header header",exclusiveText:"Only available on bonkers.ie",exclusiveTextBottom:"Only available on bonkers.ie"}},n={render:h=>({components:{UiCardResult:k,UiTypography:o,UiBadge:w,UiListItem:B,UiButton:A,UiIcon:N},setup(){return{args:h,ETypographySizes:a,ETextWeight:x,ETextAlign:g,EButtonTypes:D,ESize:X,EColors:r}},template:`
            <ui-card-result
                v-bind="args"
            >
                <template #sidebar>
                    <div class="flex gap-sm">
                        <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
                            Special offer text
                        </ui-typography>

                        <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
                            Special offer text
                        </ui-typography>
                    </div>
                </template>

                <template #default>
                    <div
                        class="flex gap-xs items-center mb-xs"
                    >
                        <ui-icon
                            class="text-primary"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />

                        <ui-icon
                            class="text-primary"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />

                        <ui-icon
                            class="text-secondary-alt-300"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />
                    </div>

                    <div class="flex flex-wrap gap-xs mb-sm">
                        <ui-badge
                            v-for="item in ['Free bank tranfers']"
                            :icon="['far', 'face-smile']"
                            :key="item"
                        >
                            {{ item }}
                        </ui-badge>

                        <ui-badge
                            :icon="['far', 'face-smile']"
                            more
                        >
                            more...
                        </ui-badge>
                    </div>

                    <ul>
                        <ui-list-item
                            v-for="item in 4"
                            class="mb-xxs items-center"
                            :key="item"
                            :icon="['far', 'face-smile']"
                            icon-class="text-secondary-alt"
                        >
                            <p>
                                <ui-typography is="span" :weight="ETextWeight.BOLD">
                                    {{item}}
                                </ui-typography>

                                <span> Feature item</span>
                            </p>
                        </ui-list-item>
                    </ul>

                    <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm mb-sm">
                        <ui-typography underline :size="ETypographySizes.SM" :kind="EColors.ACCENT">
                            Full Details
                        </ui-typography>

                        <ui-typography
                            class="text-right"
                            :weight="ETextWeight.BOLD"
                            :size="ETypographySizes.XL"
                            :kind="EColors.SECONDARY"
                        >
                            <p class="mb-xxs">€1004.63</p>
                            <ui-typography
                                :size="ETypographySizes.XS"
                                :kind="EColors.SECONDARY_400"
                            >
                                Monthly fee
                            </ui-typography>
                        </ui-typography>
                    </div>
                    <ui-button full-width>Some text</ui-button>
                </template>
            </ui-card-result>

            `})};var v,E,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCardResult,
      UiTypography,
      UiBadge,
      UiListItem,
      UiButton,
      UiIcon
    },
    setup() {
      return {
        args,
        ETypographySizes,
        ETextWeight,
        ETextAlign,
        EButtonTypes,
        ESize,
        EColors
      };
    },
    template: /*html*/\`
            <ui-card-result
                v-bind="args"
            >
                <template #sidebar>
                    <div class="flex gap-sm">
                        <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
                            Special offer text
                        </ui-typography>

                        <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center p-sm text-center">
                            Special offer text
                        </ui-typography>
                    </div>
                </template>

                <template #default>
                    <div
                        class="flex gap-xs items-center mb-xs"
                    >
                        <ui-icon
                            class="text-primary"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />

                        <ui-icon
                            class="text-primary"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />

                        <ui-icon
                            class="text-secondary-alt-300"
                            :size="ESize.SM"
                            :icon-name="['far', 'face-smile']"
                        />
                    </div>

                    <div class="flex flex-wrap gap-xs mb-sm">
                        <ui-badge
                            v-for="item in ['Free bank tranfers']"
                            :icon="['far', 'face-smile']"
                            :key="item"
                        >
                            {{ item }}
                        </ui-badge>

                        <ui-badge
                            :icon="['far', 'face-smile']"
                            more
                        >
                            more...
                        </ui-badge>
                    </div>

                    <ul>
                        <ui-list-item
                            v-for="item in 4"
                            class="mb-xxs items-center"
                            :key="item"
                            :icon="['far', 'face-smile']"
                            icon-class="text-secondary-alt"
                        >
                            <p>
                                <ui-typography is="span" :weight="ETextWeight.BOLD">
                                    {{item}}
                                </ui-typography>

                                <span> Feature item</span>
                            </p>
                        </ui-list-item>
                    </ul>

                    <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm mb-sm">
                        <ui-typography underline :size="ETypographySizes.SM" :kind="EColors.ACCENT">
                            Full Details
                        </ui-typography>

                        <ui-typography
                            class="text-right"
                            :weight="ETextWeight.BOLD"
                            :size="ETypographySizes.XL"
                            :kind="EColors.SECONDARY"
                        >
                            <p class="mb-xxs">€1004.63</p>
                            <ui-typography
                                :size="ETypographySizes.XS"
                                :kind="EColors.SECONDARY_400"
                            >
                                Monthly fee
                            </ui-typography>
                        </ui-typography>
                    </div>
                    <ui-button full-width>Some text</ui-button>
                </template>
            </ui-card-result>

            \`
  })
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,H as default};
