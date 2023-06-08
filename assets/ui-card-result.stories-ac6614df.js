import{E as r,a as o,d as g,b as h,_ as l}from"./ui-typography-3ebb5017.js";import{d as _,o as s,e as p,f,j as c,m,q as u,u as e,x as d,l as y,v as z,k as S}from"./vue.esm-bundler-fe4d70d2.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as B}from"./ui-badge-e8b78726.js";import{_ as w}from"./ui-list-item-13abeab2.js";import{_ as A,E as D}from"./ui-button-c8638be6.js";import{_ as O,E as N}from"./ui-icon-05de86ac.js";const X={class:"ui-card-result"},R={class:"grid relative border border-secondary-alt-400 rounded-2xl overflow-hidden bg-white"},M={class:"ui-card-result__header grid gap-xs justify-between items-center rounded-lg bg-secondary-alt-200 p-xs m-xs mb-sm"},L={class:"p-sm pt-0 w-full overflow-hidden bg-white"},T=_({__name:"ui-card-result",props:{header:{},exclusiveText:{},exclusiveTextBottom:{},exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(x){return(i,t)=>(s(),p("div",X,[i.exclusiveText?(s(),p("div",{key:0,class:"bg-primary rounded-2xl px-sm pb-lg -mb-lg",onClick:t[0]||(t[0]=(...n)=>i.exclusiveClickAction&&i.exclusiveClickAction(...n))},[f(e(l),{class:"py-xs","line-height":"",size:e(r).XXS,kind:e(o).WHITE,align:e(g).CENTER,weight:e(h).SEMI_BOLD},{default:c(()=>[m(u(i.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):d("",!0),y("div",R,[y("div",M,[i.header?(s(),z(e(l),{key:0,"line-height":"",class:"flex-1 line-clamp",size:e(r).SM,weight:e(h).SEMI_BOLD,kind:e(o).SECONDARY},{default:c(()=>[m(u(i.header),1)]),_:1},8,["size","weight","kind"])):d("",!0),S(i.$slots,"sidebar",{},void 0,!0)]),y("main",L,[S(i.$slots,"default",{},void 0,!0)])]),i.exclusiveTextBottom?(s(),p("div",{key:1,class:"bg-secondary-alt-200 rounded-2xl px-sm pt-lg -mt-lg border border-secondary-alt-400",onClick:t[1]||(t[1]=(...n)=>i.exclusiveBottomClickAction&&i.exclusiveBottomClickAction(...n))},[f(e(l),{class:"py-xs",size:e(r).XXS,kind:e(o).SECONDARY,align:e(g).CENTER,"line-height":""},{default:c(()=>[m(u(i.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):d("",!0)]))}});const k=C(T,[["__scopeId","data-v-319e3b62"]]);T.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const V={title:"Components/ui-card-result",component:k,argTypes:{exclusiveText:{control:{type:"boolean"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"boolean"},description:"Whether to show the exclusive text"}},args:{slot:"default text",exclusiveText:!0,exclusiveTextBottom:!0}},U=x=>({components:{UiCardResult:k,UiTypography:l,UiBadge:B,UiListItem:w,UiButton:A,UiIcon:O},setup(){return{args:x,ETypographySizes:r,ETextWeight:h,ETextAlign:g,EButtonTypes:D,ESize:N,EColors:o}},template:`
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

                    <div
                        class="flex gap-xs items-center justify-center"
                        :style="{marginLeft: 'auto'}"
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

                <ui-typography class="mb-sm" underline :size="ETypographySizes.SM" :kind="EColors.SECONDARY">
                    Some link
                </ui-typography>

                <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm">
                    <ui-typography
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

                    <ui-button full-width>Some text</ui-button>
                </div>
            </template>
        </ui-card-result>

        `}),a=U.bind({});var v,b,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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

                    <div
                        class="flex gap-xs items-center justify-center"
                        :style="{marginLeft: 'auto'}"
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

                <ui-typography class="mb-sm" underline :size="ETypographySizes.SM" :kind="EColors.SECONDARY">
                    Some link
                </ui-typography>

                <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm">
                    <ui-typography
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

                    <ui-button full-width>Some text</ui-button>
                </div>
            </template>
        </ui-card-result>

        \`
})`,...(E=(b=a.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,V as default};
//# sourceMappingURL=ui-card-result.stories-ac6614df.js.map
