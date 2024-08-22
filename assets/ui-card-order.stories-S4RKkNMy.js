import{a as n,E as c,U as d,_,b as I}from"./index-2d-qg1vH.js";import{E as y,_ as S}from"./ui-icon-TvJ-ioVV.js";import{I as T}from"./CONSTANTS-Kjtq_aRX.js";import{d as x,o as g,c as z,a,e as i,w as o,u as e,b as r,f as b,h as p,t as l,g as v}from"./vue.esm-bundler-GDL5RDDy.js";import{u as C}from"./index-BMi5bGjf.js";import{d as O}from"./index-DWQXD_7c.js";import{E as U}from"./ui-icon-wrapper-BbWLVwXO.js";import{_ as D,a as L}from"./ui-badge-CQIjg9QX.js";import"./ui-ber-rank-B1g6KSoz.js";import"./ui-button-Dek033vI.js";import"./ui-input-CCOgr0BJ.js";import"./ui-list-item-DeCOoAZV.js";import"./ui-modal-DPX7S8D4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-notification-badge-B6gEmCzq.js";import"./ui-snackbar-CZum_oMh.js";import"./ui-table-row-C3Jo_qJX.js";const A={class:"ui-card-order relative grid gap-xxs whitespace-nowrap rounded-2xl border border-secondary-alt-500 bg-white p-sm"},N={class:"flex gap-xxs"},B={class:"flex w-full justify-end"},H={class:"grid"},m=x({__name:"ui-card-order",props:{icon:{},title:{},contentHeader:{},description:{}},setup(u){return(t,M)=>(g(),z("div",A,[a("div",N,[i(e(O),{class:"rounded-full",kind:e(U).PRIMARY},{default:o(()=>[i(e(C),{"icon-name":t.icon,size:e(y).MD},null,8,["icon-name","size"])]),_:1},8,["kind"]),a("div",null,[r(t.$slots,"title",{},()=>[t.title?(g(),b(e(d),{key:0,size:e(n).SM,weight:e(c).BOLD,"line-height":""},{default:o(()=>[p(l(t.title),1)]),_:1},8,["size","weight"])):v("",!0)]),r(t.$slots,"subtitle")]),a("div",B,[r(t.$slots,"providersImage")])]),a("div",H,[i(e(d),{size:e(n).XS,weight:e(c).SEMI_BOLD,"line-height":""},{default:o(()=>[r(t.$slots,"contentHeader",{},()=>[p(l(t.contentHeader),1)])]),_:3},8,["size","weight"]),i(e(d),{size:e(n).XS,"line-height":""},{default:o(()=>[r(t.$slots,"descriptions",{},()=>[p(l(t.description),1)])]),_:3},8,["size"]),r(t.$slots,"footer")])]))}});m.__docgenInfo={exportName:"default",displayName:"ui-card-order",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}},{name:"contentHeader",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"subtitle"},{name:"providersImage"},{name:"contentHeader"},{name:"descriptions"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-order/ui-card-order.vue"]};const ee={title:"Components/ui-card-order",component:m,argTypes:{title:{control:{type:"text"},description:"The title text"},contentHeader:{control:{type:"text"},description:"The contentHeader text"}},args:{title:"Gas & Electricity",contentHeader:"Electric Ireland - Smart EV 20%"}},s={render:u=>({components:{UiCardOrder:m,UiTypography:_,UiBadge:D,UiIcon:S},setup(){return{args:u,ICON_DEFAULT:T,ETypographySizes:n,ETextWeight:c,EColors:I,ESize:y,EBadgeSize:L}},template:`
            <ui-card-order
                :title="args.title"
                :icon="ICON_DEFAULT"
                :contentHeader="args.contentHeader"
            >
                <template v-slot:subtitle>
                    <ui-badge
                        :size="EBadgeSize.SMALL"
                        :icon="ICON_DEFAULT"
                    >
                        badge text
                    </ui-badge>
                </template>

                <template v-slot:providersImage >
                    <div class="size-xxxl bg-secondary-300 rounded-lg" />
                </template>

                <template v-slot:descriptions>
                    <p>Order Ref: RGPKM3</p>
                    <p>Start date: 03/04/24 &bull; End date: 02/04/25</p>
                </template>

                <template v-slot:footer>
                    <ui-typography
                        underline
                        :size='ETypographySizes.XS'
                        :kind='EColors.PRIMARY_600'
                        :weight='ETextWeight.SEMI_BOLD'
                        lineHeight
                        class="flex items-center gap-xxs"
                    >
                        <span>See details</span>

                        <ui-icon
                            :kind="EColors.PRIMARY_600"
                            :icon-name="ICON_DEFAULT"
                        />
                    </ui-typography>
                </template>
            </ui-card-order>
        `})};var h,E,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCardOrder,
      UiTypography,
      UiBadge,
      UiIcon
    },
    setup() {
      return {
        args,
        ICON_DEFAULT,
        ETypographySizes,
        ETextWeight,
        EColors,
        ESize,
        EBadgeSize
      };
    },
    template: /*html*/\`
            <ui-card-order
                :title="args.title"
                :icon="ICON_DEFAULT"
                :contentHeader="args.contentHeader"
            >
                <template v-slot:subtitle>
                    <ui-badge
                        :size="EBadgeSize.SMALL"
                        :icon="ICON_DEFAULT"
                    >
                        badge text
                    </ui-badge>
                </template>

                <template v-slot:providersImage >
                    <div class="size-xxxl bg-secondary-300 rounded-lg" />
                </template>

                <template v-slot:descriptions>
                    <p>Order Ref: RGPKM3</p>
                    <p>Start date: 03/04/24 &bull; End date: 02/04/25</p>
                </template>

                <template v-slot:footer>
                    <ui-typography
                        underline
                        :size='ETypographySizes.XS'
                        :kind='EColors.PRIMARY_600'
                        :weight='ETextWeight.SEMI_BOLD'
                        lineHeight
                        class="flex items-center gap-xxs"
                    >
                        <span>See details</span>

                        <ui-icon
                            :kind="EColors.PRIMARY_600"
                            :icon-name="ICON_DEFAULT"
                        />
                    </ui-typography>
                </template>
            </ui-card-order>
        \`
  })
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const te=["Default"];export{s as Default,te as __namedExportsOrder,ee as default};
