import{d as r,E as o,b as g,a as x,_ as l}from"./ui-typography-debf4260.js";import{d as z,o as s,e as p,q as f,w as c,l as d,m,i as e,j as u,f as y,g as _,k as v}from"./vue.esm-bundler-a43e9918.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as B}from"./ui-badge-13376140.js";import{_ as w}from"./ui-list-item-02ae92d9.js";import{_ as A,E as D}from"./ui-button-c366786e.js";import{_ as N,E as X}from"./ui-icon-88d80b57.js";const O={class:"ui-card-result"},M={class:"relative grid overflow-hidden rounded-2xl border border-secondary-alt-400 bg-white"},R={class:"ui-card-result__header m-xs mb-sm grid items-center justify-between gap-xs rounded-lg bg-secondary-alt-200 p-xs"},U={class:"w-full overflow-hidden bg-white p-sm pt-0"},T=z({__name:"ui-card-result",props:{header:{},exclusiveText:{},exclusiveTextBottom:{},exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(h){return(i,t)=>(s(),p("div",O,[i.exclusiveText?(s(),p("div",{key:0,class:"-mb-lg rounded-2xl bg-primary px-sm pb-lg",onClick:t[0]||(t[0]=(...n)=>i.exclusiveClickAction&&i.exclusiveClickAction(...n))},[f(e(l),{class:"py-xs","line-height":"",size:e(r).XXS,kind:e(o).WHITE,align:e(g).CENTER,weight:e(x).BOLD},{default:c(()=>[d(m(i.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):u("",!0),y("div",M,[y("div",R,[i.header?(s(),_(e(l),{key:0,"line-height":"",class:"line-clamp flex-1",size:e(r).SM,weight:e(x).SEMI_BOLD,kind:e(o).SECONDARY},{default:c(()=>[d(m(i.header),1)]),_:1},8,["size","weight","kind"])):u("",!0),v(i.$slots,"sidebar",{},void 0,!0)]),y("main",U,[v(i.$slots,"default",{},void 0,!0)])]),i.exclusiveTextBottom?(s(),p("div",{key:1,class:"-mt-lg rounded-2xl border border-secondary-alt-400 bg-secondary-alt-200 px-sm pt-lg",onClick:t[1]||(t[1]=(...n)=>i.exclusiveBottomClickAction&&i.exclusiveBottomClickAction(...n))},[f(e(l),{class:"py-xs",size:e(r).XXS,kind:e(o).SECONDARY,align:e(g).CENTER,"line-height":""},{default:c(()=>[d(m(i.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):u("",!0)]))}});const k=C(T,[["__scopeId","data-v-67064916"]]);T.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const j={title:"Components/ui-card-result",component:k,argTypes:{exclusiveText:{control:{type:"boolean"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"boolean"},description:"Whether to show the exclusive text"}},args:{slot:"default text",exclusiveText:!0,exclusiveTextBottom:!0}},F=h=>({components:{UiCardResult:k,UiTypography:l,UiBadge:B,UiListItem:w,UiButton:A,UiIcon:N},setup(){return{args:h,ETypographySizes:r,ETextWeight:x,ETextAlign:g,EButtonTypes:D,ESize:X,EColors:o}},template:`
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

        `}),a=F.bind({});var b,S,E;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,j as default};
//# sourceMappingURL=ui-card-result.stories-19234d88.js.map
