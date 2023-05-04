import{d as _,o as s,e as n,f,j as u,m as d,t as c,u as t,v as m,l as p,q as B,k as y}from"./vue.esm-bundler-9a4beff8.js";import{E as l,a as v,d as x,b as h,_ as o}from"./ui-typography-43c7c98a.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as w}from"./ui-badge-ffdf7bbb.js";import{_ as z}from"./ui-list-item-1e091b95.js";import{_ as A,E as F}from"./ui-button-d6fd4a81.js";import{_ as U,E as X}from"./ui-icon-ee9e3f6c.js";const O={class:"ui-card-result"},I={class:"grid border border-secondary-alt-400 rounded-2xl overflow-hidden bg-white"},L={class:"ui-card-result__header grid gap-xs justify-between items-center rounded-lg bg-secondary-alt-200 p-xs m-xs mb-sm"},N={class:"p-sm w-full overflow-hidden bg-white"},E=_({__name:"ui-card-result",props:{header:null,exclusiveText:null,exclusiveTextBottom:null,exclusiveClickAction:{type:Function},exclusiveBottomClickAction:{type:Function}},setup(e){return(g,i)=>(s(),n("div",O,[e.exclusiveText?(s(),n("div",{key:0,class:"bg-primary rounded-2xl px-sm pb-lg -mb-lg",onClick:i[0]||(i[0]=(...r)=>e.exclusiveClickAction&&e.exclusiveClickAction(...r))},[f(t(o),{class:"py-xs","line-height":"",size:t(l).XXS,kind:t(v).WHITE,align:t(x).CENTER,weight:t(h).SEMI_BOLD},{default:u(()=>[d(c(e.exclusiveText),1)]),_:1},8,["size","kind","align","weight"])])):m("",!0),p("div",I,[p("div",L,[e.header?(s(),B(t(o),{key:0,"line-height":"",class:"flex-1 line-clamp",size:t(l).SM,weight:t(h).SEMI_BOLD},{default:u(()=>[d(c(e.header),1)]),_:1},8,["size","weight"])):m("",!0),y(g.$slots,"sidebar",{},void 0,!0)]),p("main",N,[y(g.$slots,"default",{},void 0,!0)])]),e.exclusiveTextBottom?(s(),n("div",{key:1,class:"bg-secondary rounded-2xl px-sm pt-lg -mt-lg",onClick:i[1]||(i[1]=(...r)=>e.exclusiveBottomClickAction&&e.exclusiveBottomClickAction(...r))},[f(t(o),{class:"py-xs",size:t(l).XXS,kind:t(v).WHITE,align:t(x).CENTER,"line-height":""},{default:u(()=>[d(c(e.exclusiveTextBottom),1)]),_:1},8,["size","kind","align"])])):m("",!0)]))}});const k=C(E,[["__scopeId","data-v-c9de1fe8"]]);E.__docgenInfo={exportName:"default",displayName:"ui-card-result",description:"",tags:{},props:[{name:"header",required:!1,type:{name:"string"}},{name:"exclusiveText",required:!1,type:{name:"string"}},{name:"exclusiveTextBottom",required:!1,type:{name:"string"}},{name:"exclusiveClickAction",required:!1,type:{name:"TSFunctionType"}},{name:"exclusiveBottomClickAction",required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"sidebar"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-result/ui-card-result.vue"]};const Y={title:"Components/ui-card-result",component:k,argTypes:{exclusiveText:{control:{type:"boolean"},description:"Whether to show the exclusive text"},exclusiveTextBottom:{control:{type:"boolean"},description:"Whether to show the exclusive text"}},args:{slot:"default text",exclusiveText:!0,exclusiveTextBottom:!0}},R=e=>({components:{UiCardResult:k,UiTypography:o,UiBadge:w,UiListItem:z,UiButton:A,UiIcon:U},setup(){return{args:e,ETypographySizes:l,ETextWeight:h,ETextAlign:x,EButtonTypes:F,ESize:X}},template:`
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

        `}),a=R.bind({});var b,T,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(S=(T=a.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,Y as default};
//# sourceMappingURL=ui-card-result.stories-d9fc55c3.js.map
