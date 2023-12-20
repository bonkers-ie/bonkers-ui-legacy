(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".ui-table-row[data-v-97952db0] td:first-child{border-top-left-radius:var(--xs);border-bottom-left-radius:var(--xs);text-align:left}.ui-table-row[data-v-97952db0] td:last-child{border-top-right-radius:var(--xs);border-bottom-right-radius:var(--xs);text-align:right}.ui-table__secondary[data-v-fa615ea7] tr:nth-child(odd){background-color:var(--color-secondary-alt-200)}.ui-table__secondary-inverted[data-v-fa615ea7] tr:nth-child(2n){background-color:var(--color-secondary-alt-200)}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import{e as d,o as i,g as _,p as o,q as p,l as a,k as c,n as m,m as y}from"./vue.esm-bundler-0aijNq6S.js";import{_ as g}from"./_plugin-vue_export-helper-x3n3nnut.js";import{d as r,a as w,E as D}from"./ui-typography-dWkvwKnc.js";import{U as u}from"./index-x7TYTibA.js";var E=(t=>(t.SECONDARY="secondary",t))(E||{});const T=d({__name:"ui-table-row",props:{kind:{}},setup(t){return(e,l)=>(i(),_("tr",{class:p(["ui-table-row text-center",[e.kind===a(E).SECONDARY&&"bg-secondary-alt-200"]])},[o(e.$slots,"default",{},void 0,!0)],2))}}),N=g(T,[["__scopeId","data-v-97952db0"]]);T.__docgenInfo={exportName:"default",displayName:"ui-table-row",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ERowKind"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-row/ui-table-row.vue"]};const S=N,k=d({__name:"ui-table-cell",props:{align:{},weight:{}},setup(t){return(e,l)=>(i(),c(a(u),{is:"td",size:a(r).SM,align:e.align,weight:e.weight,class:"p-sm"},{default:m(()=>[o(e.$slots,"default"),e.$slots.subtext?(i(),c(a(u),{key:0,size:a(r).XXS,weight:a(w).SEMI_BOLD,class:p(["flex flex-col gap-xxs",e.$slots.default&&"pt-sm"]),kind:a(D).PRIMARY_ALT_700},{default:m(()=>[o(e.$slots,"subtext")]),_:3},8,["size","weight","kind","class"])):y("",!0)]),_:3},8,["size","align","weight"]))}});k.__docgenInfo={exportName:"default",displayName:"ui-table-cell",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"ETextAlign"}},{name:"weight",required:!1,type:{name:"ETextWeight"}}],slots:[{name:"default"},{name:"subtext"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-cell/ui-table-cell.vue"]};const R=k;var n=(t=>(t.DEFAULT="default",t.SECONDARY="secondary",t.SECONDARY_INVERTED="secondary-inverted",t))(n||{});const h=d({__name:"ui-table",props:{kind:{default:n.SECONDARY_INVERTED}},setup(t){return(e,l)=>(i(),_("table",{class:p(["ui-table rounded-lg",e.kind===a(n).SECONDARY&&"ui-table__secondary",e.kind===a(n).SECONDARY_INVERTED&&"ui-table__secondary-inverted"])},[o(e.$slots,"default",{},void 0,!0)],2))}}),v=g(h,[["__scopeId","data-v-fa615ea7"]]);h.__docgenInfo={exportName:"default",displayName:"ui-table",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ETableKind"},defaultValue:{func:!1,value:"ETableKind.SECONDARY_INVERTED"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table.vue"]};const U={title:"Components/ui-table",argTypes:{kind:{control:{type:"select"},options:Object.values(n),description:"The row kind"}},args:{kind:n.DEFAULT}},C=t=>({components:{UiTableRow:S,UiTableCell:R,UiTypography:u,UiTable:v},setup(){const e={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},l=[e,e,e,e,e,{...e,extraText:!0}];return{ETextWeight:w,ETypographySizes:r,args:t,list:l}},template:`
        <ui-table class='w-full' :kind="args.kind">
                <ui-table-row v-for="(row, index) in list"
                                            :key="index"
                                            rounded>
                    <ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
                            {{row.text1}}
                    </ui-table-cell>

                    <ui-table-cell>
                        {{row.text2}}
                    </ui-table-cell>

                    <ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
                            {{row.text3}}
                            <template #subtext v-if="row.extraText">
                                <p>23.620 cent x</p>
                                <p>4,200 kWh</p>
                            </template>
                    </ui-table-cell>
                </ui-table-row>
        </ui-table>
    `}),s=C.bind({});var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args: MyComponentProps) => ({
  components: {
    // UiTable,
    UiTableRow,
    UiTableCell,
    UiTypography,
    UiTable
  },
  setup() {
    const defaultList = {
      text1: "some text",
      text2: "some text2",
      text3: "some text3",
      extraText: false
    };
    const list = [defaultList, defaultList, defaultList, defaultList, defaultList, {
      ...defaultList,
      extraText: true
    }];
    return {
      ETextWeight,
      ETypographySizes,
      args,
      list
    };
  },
  template: /*html*/\`
        <ui-table class='w-full' :kind="args.kind">
                <ui-table-row v-for="(row, index) in list"
                                            :key="index"
                                            rounded>
                    <ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
                            {{row.text1}}
                    </ui-table-cell>

                    <ui-table-cell>
                        {{row.text2}}
                    </ui-table-cell>

                    <ui-table-cell :weight='ETextWeight.SEMI_BOLD'>
                            {{row.text3}}
                            <template #subtext v-if="row.extraText">
                                <p>23.620 cent x</p>
                                <p>4,200 kWh</p>
                            </template>
                    </ui-table-cell>
                </ui-table-row>
        </ui-table>
    \`
})`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,U as default};
