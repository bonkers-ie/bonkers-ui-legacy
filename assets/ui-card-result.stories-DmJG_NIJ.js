(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-card-result__header[data-v-9bdcca83]{grid-template-columns:1fr auto}.line-clamp[data-v-9bdcca83]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{a as r,b as o,c as y,E as g,_ as l}from"./index-2d-qg1vH.js";import{d as z,o as s,c as p,e as f,w as c,h as m,t as d,u as e,g as u,a as x,f as C,b}from"./vue.esm-bundler-GDL5RDDy.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as w}from"./ui-badge-CQIjg9QX.js";import{_ as B}from"./ui-list-item-DeCOoAZV.js";import{_ as A,E as D}from"./ui-button-Dek033vI.js";import"./index-BMi5bGjf.js";import{_ as N,E as X}from"./ui-icon-TvJ-ioVV.js";const O={class:"ui-card-result"},M={class:"relative grid overflow-hidden rounded-2xl border border-secondary-alt-500 bg-white"},U={class:"ui-card-result__header m-xxs mb-sm grid items-center justify-between gap-xxs rounded-xl bg-secondary-alt-200 p-xxs"},F={class:"w-full overflow-hidden bg-white p-sm pt-0"},T=z({__name:"ui-card-result",props:{header:{},exclusiveText:{},exclusiveTextBottom:{},exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(h){return(i,t)=>(s(),p("div",O,[i.exclusiveText?(s(),p("div",{key:0,class:"-mb-xl rounded-2xl bg-primary px-sm pb-xl",onClick:t[0]||(t[0]=(...n)=>i.exclusiveClickAction&&i.exclusiveClickAction(...n))},[f(e(l),{class:"py-xxs","line-height":"",size:e(r).XXS,kind:e(o).WHITE,align:e(y).CENTER,weight:e(g).SEMI_BOLD},{default:c(()=>[m(d(i.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):u("",!0),x("div",M,[x("div",U,[i.header?(s(),C(e(l),{key:0,"line-height":"",class:"line-clamp flex-1",size:e(r).SM,weight:e(g).BOLD,kind:e(o).SECONDARY},{default:c(()=>[m(d(i.header),1)]),_:1},8,["size","weight","kind"])):u("",!0),b(i.$slots,"sidebar",{},void 0,!0)]),x("main",F,[b(i.$slots,"default",{},void 0,!0)])]),i.exclusiveTextBottom?(s(),p("div",{key:1,class:"-mt-xl rounded-2xl border border-secondary-alt-500 bg-secondary-alt-200 px-sm pt-xl",onClick:t[1]||(t[1]=(...n)=>i.exclusiveBottomClickAction&&i.exclusiveBottomClickAction(...n))},[f(e(l),{class:"py-xxs",size:e(r).XXS,kind:e(o).SECONDARY,align:e(y).CENTER,"line-height":""},{default:c(()=>[m(d(i.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):u("",!0)]))}}),k=_(T,[["__scopeId","data-v-9bdcca83"]]);T.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const H={title:"Components/ui-card-result",component:k,argTypes:{header:{control:{type:"text"},description:"Header text"},exclusiveText:{control:{type:"text"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"text"},description:"Whether to show the exclusive text"}},args:{header:"header header header",exclusiveText:"Only available on bonkers.ie",exclusiveTextBottom:"Only available on bonkers.ie"}},a={render:h=>({components:{UiCardResult:k,UiTypography:l,UiBadge:w,UiListItem:B,UiButton:A,UiIcon:N},setup(){return{args:h,ETypographySizes:r,ETextWeight:g,ETextAlign:y,EButtonTypes:D,ESize:X,EColors:o}},template:`
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
                        class="flex gap-xxs items-center mb-xxs"
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

                    <div class="flex flex-wrap gap-xxs mb-sm">
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
                            class="mb-xxxs items-center"
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
                            <p class="mb-xxxs">€1004.63</p>
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

            `})};var v,E,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
                        class="flex gap-xxs items-center mb-xxs"
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

                    <div class="flex flex-wrap gap-xxs mb-sm">
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
                            class="mb-xxxs items-center"
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
                            <p class="mb-xxxs">€1004.63</p>
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
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,H as default};
