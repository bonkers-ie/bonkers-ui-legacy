import{d as S,o as i,e as o,f as h,j as r,m as n,t as d,u as e,v as u,l as m,q as E,k as g}from"./vue.esm-bundler-9a4beff8.js";import{E as a,a as f,d as c,b as p,_ as l}from"./ui-typography-43c7c98a.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./ui-badge-ffdf7bbb.js";import{_ as B}from"./ui-list-item-1e091b95.js";import{_ as z,E as C}from"./ui-button-d6fd4a81.js";import{_ as U,E as X}from"./ui-icon-ee9e3f6c.js";const O={class:"ui-card-result"},I={key:0,class:"bg-primary rounded-2xl px-sm pb-lg -mb-lg"},L={class:"grid border border-secondary-alt-400 rounded-2xl overflow-hidden bg-white"},N={class:"ui-card-result__header grid gap-xs justify-between items-center rounded-lg bg-secondary-alt-200 p-xs m-xs mb-sm"},R={class:"p-sm w-full overflow-hidden bg-white"},D={key:1,class:"bg-secondary rounded-2xl px-sm pt-lg -mt-lg"},_=S({__name:"ui-card-result",props:{header:null,exclusiveText:null,exclusiveTextBottom:null},setup(t){return(x,j)=>(i(),o("div",O,[t.exclusiveText?(i(),o("div",I,[h(e(l),{class:"py-xs","line-height":"",size:e(a).XXS,kind:e(f).WHITE,align:e(c).CENTER,weight:e(p).SEMI_BOLD},{default:r(()=>[n(d(t.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):u("",!0),m("div",L,[m("div",N,[t.header?(i(),E(e(l),{key:0,"line-height":"",class:"flex-1 line-clamp",size:e(a).SM,weight:e(p).SEMI_BOLD},{default:r(()=>[n(d(t.header),1)]),_:1},8,["size","weight"])):u("",!0),g(x.$slots,"sidebar",{},void 0,!0)]),m("main",R,[g(x.$slots,"default",{},void 0,!0)])]),t.exclusiveTextBottom?(i(),o("div",D,[h(e(l),{class:"py-xs",size:e(a).XXS,kind:e(f).WHITE,align:e(c).CENTER,"line-height":""},{default:r(()=>[n(d(t.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):u("",!0)]))}});const T=k(_,[["__scopeId","data-v-2aa3dc8e"]]);_.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const H={title:"Components/ui-card-result",component:T,argTypes:{exclusiveText:{control:{type:"boolean"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"boolean"},description:"Whether to show the exclusive text"}},args:{slot:"default text",exclusiveText:!0,exclusiveTextBottom:!0}},F=t=>({components:{UiCardResult:T,UiTypography:l,UiBadge:w,UiListItem:B,UiButton:z,UiIcon:U},setup(){return{args:t,ETypographySizes:a,ETextWeight:p,ETextAlign:c,EButtonTypes:C,ESize:X}},template:`
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
                <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center">
                    Special offer text
                </ui-typography>
            </template>

            <template #default>
                <div class="flex flex-wrap gap-xs mb-xs">
                    <ui-badge
                        v-for="item in ['10% annual overpayment allowance', 'Flexibility built in', 'Flexibility built in!', 'Flexibility built inas', 'lorem5 aslijdhsdoi ashjd oiahsjdoi ']"
                        :icon="['far', 'face-smile']"
                        :key="item"
                    >
                        {{ item }}
                    </ui-badge>
                </div>

                <ul>
                    <ui-list-item
                        v-for="item in 5"
                        class="mb-xs"
                        :key="item"
                        :icon="['far', 'face-smile']"
                        :title="'Feature item ' + item"
                    />
                </ul>

                <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm">
                    <ui-typography
                        :weight="ETextWeight.BOLD"
                        :size="ETypographySizes.XXL"
                    >
                        €1004.63 p/m
                    </ui-typography>

                    <div class="flex gap-sm">
                        <ui-button :kind="EButtonTypes.SECONDARY_OVERLAY">
                            <template #prefix>
                                <ui-icon
                                    :icon-name="['far', 'face-smile']"
                                    :size="ESize.SM"
                                />
                            </template>
                        </ui-button>

                        <ui-button full-width>Some text</ui-button>
                    </div>
                </div>

            </template>
        </ui-card-result>

        `}),s=F.bind({});var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
      ESize
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
                <ui-typography :size='ETypographySizes.XXS' line-height :style="{height: '64px', width: '64px', border: '1px solid black'}" class="flex items-center">
                    Special offer text
                </ui-typography>
            </template>

            <template #default>
                <div class="flex flex-wrap gap-xs mb-xs">
                    <ui-badge
                        v-for="item in ['10% annual overpayment allowance', 'Flexibility built in', 'Flexibility built in!', 'Flexibility built inas', 'lorem5 aslijdhsdoi ashjd oiahsjdoi ']"
                        :icon="['far', 'face-smile']"
                        :key="item"
                    >
                        {{ item }}
                    </ui-badge>
                </div>

                <ul>
                    <ui-list-item
                        v-for="item in 5"
                        class="mb-xs"
                        :key="item"
                        :icon="['far', 'face-smile']"
                        :title="'Feature item ' + item"
                    />
                </ul>

                <div :style="{display: 'grid', gridTemplateColumns: '1fr 1fr'}" class="items-center gap-sm">
                    <ui-typography
                        :weight="ETextWeight.BOLD"
                        :size="ETypographySizes.XXL"
                    >
                        €1004.63 p/m
                    </ui-typography>

                    <div class="flex gap-sm">
                        <ui-button :kind="EButtonTypes.SECONDARY_OVERLAY">
                            <template #prefix>
                                <ui-icon
                                    :icon-name="['far', 'face-smile']"
                                    :size="ESize.SM"
                                />
                            </template>
                        </ui-button>

                        <ui-button full-width>Some text</ui-button>
                    </div>
                </div>

            </template>
        </ui-card-result>

        \`
})`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const G=["Default"];export{s as Default,G as __namedExportsOrder,H as default};
//# sourceMappingURL=ui-card-result.stories-f34c896e.js.map
