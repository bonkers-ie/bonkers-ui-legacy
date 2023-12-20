(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ui-card-result__header[data-v-99edfa3c]{grid-template-columns:1fr auto}.line-clamp[data-v-99edfa3c]{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{d as a,E as r,b as g,a as h}from"./ui-typography-dWkvwKnc.js";import{e as z,o as s,g as p,C as f,n as c,z as d,A as m,l as e,m as u,j as y,k as C,p as v}from"./vue.esm-bundler-0aijNq6S.js";import{U as o}from"./index-x7TYTibA.js";import{_ as B}from"./_plugin-vue_export-helper-x3n3nnut.js";import{_ as w}from"./ui-badge-7bCmM-UD.js";import{U as _}from"./index-1PMXliNc.js";import{U as A,E as D}from"./index-GV89Ok2V.js";import{d as N}from"./index-7cJsCGdg.js";import{E as X}from"./ui-icon-5FFHX_Lo.js";const O={class:"ui-card-result"},U={class:"relative grid overflow-hidden rounded-2xl border border-secondary-alt-400 bg-white"},M={class:"ui-card-result__header m-xs mb-sm grid items-center justify-between gap-xs rounded-lg bg-secondary-alt-200 p-xs"},F={class:"w-full overflow-hidden bg-white p-sm pt-0"},T=z({__name:"ui-card-result",props:{header:{},exclusiveText:{},exclusiveTextBottom:{},exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(x){return(t,i)=>(s(),p("div",O,[t.exclusiveText?(s(),p("div",{key:0,class:"-mb-lg rounded-2xl bg-primary px-sm pb-lg",onClick:i[0]||(i[0]=(...l)=>t.exclusiveClickAction&&t.exclusiveClickAction(...l))},[f(e(o),{class:"py-xs","line-height":"",size:e(a).XXS,kind:e(r).WHITE,align:e(g).CENTER,weight:e(h).SEMI_BOLD},{default:c(()=>[d(m(t.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):u("",!0),y("div",U,[y("div",M,[t.header?(s(),C(e(o),{key:0,"line-height":"",class:"line-clamp flex-1",size:e(a).SM,weight:e(h).BOLD,kind:e(r).SECONDARY},{default:c(()=>[d(m(t.header),1)]),_:1},8,["size","weight","kind"])):u("",!0),v(t.$slots,"sidebar",{},void 0,!0)]),y("main",F,[v(t.$slots,"default",{},void 0,!0)])]),t.exclusiveTextBottom?(s(),p("div",{key:1,class:"-mt-lg rounded-2xl border border-secondary-alt-400 bg-secondary-alt-200 px-sm pt-lg",onClick:i[1]||(i[1]=(...l)=>t.exclusiveBottomClickAction&&t.exclusiveBottomClickAction(...l))},[f(e(o),{class:"py-xs",size:e(a).XXS,kind:e(r).SECONDARY,align:e(g).CENTER,"line-height":""},{default:c(()=>[d(m(t.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):u("",!0)]))}}),k=B(T,[["__scopeId","data-v-99edfa3c"]]);T.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const R=w,J={title:"Components/ui-card-result",component:k,argTypes:{exclusiveText:{control:{type:"boolean"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"boolean"},description:"Whether to show the exclusive text"}},args:{slot:"default text",exclusiveText:!0,exclusiveTextBottom:!0}},L=x=>({components:{UiCardResult:k,UiTypography:o,UiBadge:R,UiListItem:_,UiButton:A,UiIcon:N},setup(){return{args:x,ETypographySizes:a,ETextWeight:h,ETextAlign:g,EButtonTypes:D,ESize:X,EColors:r}},template:`
        <ui-card-result
            v-bind="args"
            header="Some header Some header Some header Some header Some header Some header"
            :exclusive-text="args.exclusiveText
                ? 'Only available on bonkers.ie'
                : undefined"
            :exclusive-text-bottom="args.exclusiveTextBottom
                ? 'The price changes made available on 04/04/2022 has been factored into your results'
                : undefined"
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

        `}),n=L.bind({});var b,S,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
            header="Some header Some header Some header Some header Some header Some header"
            :exclusive-text="args.exclusiveText
                ? 'Only available on bonkers.ie'
                : undefined"
            :exclusive-text-bottom="args.exclusiveTextBottom
                ? 'The price changes made available on 04/04/2022 has been factored into your results'
                : undefined"
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
})`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,J as default};
