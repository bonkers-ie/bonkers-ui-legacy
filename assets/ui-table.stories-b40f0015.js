(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".ui-table-row[data-v-97952db0] td:first-child{border-top-left-radius:var(--xs);border-bottom-left-radius:var(--xs);text-align:left}.ui-table-row[data-v-97952db0] td:last-child{border-top-right-radius:var(--xs);border-bottom-right-radius:var(--xs);text-align:right}.ui-table__secondary[data-v-fa615ea7] tr:nth-child(odd){background-color:var(--color-secondary-alt-200)}.ui-table__secondary-inverted[data-v-fa615ea7] tr:nth-child(2n){background-color:var(--color-secondary-alt-200)}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import{e as d,o,g as x,j as r,s as p,u as a,k as c,l as m,n as y}from"./vue.esm-bundler-5815757d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{d as n,a as w,E as D}from"./ui-typography-7e42daed.js";import{U as u}from"./index-8738b0a4.js";var T=(t=>(t.SECONDARY="secondary",t))(T||{});const E=d({__name:"ui-table-row",props:{kind:{}},setup(t){return(e,s)=>(o(),x("tr",{class:p(["ui-table-row text-center",[e.kind===a(T).SECONDARY&&"bg-secondary-alt-200"]])},[r(e.$slots,"default",{},void 0,!0)],2))}});const v=g(E,[["__scopeId","data-v-97952db0"]]);E.__docgenInfo={exportName:"default",displayName:"ui-table-row",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ERowKind"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-row/ui-table-row.vue"]};const N=v,k=d({__name:"ui-table-cell",props:{align:{},weight:{}},setup(t){return(e,s)=>(o(),c(a(u),{is:"td",size:a(n).SM,align:e.align,weight:e.weight,class:"p-sm"},{default:m(()=>[r(e.$slots,"default"),e.$slots.subtext?(o(),c(a(u),{key:0,size:a(n).XXS,weight:a(w).SEMI_BOLD,class:p(["flex flex-col gap-xxs",e.$slots.default&&"pt-sm"]),kind:a(D).PRIMARY_ALT_700},{default:m(()=>[r(e.$slots,"subtext")]),_:3},8,["size","weight","kind","class"])):y("",!0)]),_:3},8,["size","align","weight"]))}});k.__docgenInfo={exportName:"default",displayName:"ui-table-cell",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"ETextAlign"}},{name:"weight",required:!1,type:{name:"ETextWeight"}}],slots:[{name:"default"},{name:"subtext"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-cell/ui-table-cell.vue"]};const R=k;var l=(t=>(t.DEFAULT="default",t.SECONDARY="secondary",t.SECONDARY_INVERTED="secondary-inverted",t))(l||{});const h=d({__name:"ui-table",props:{kind:{default:l.SECONDARY_INVERTED}},setup(t){return(e,s)=>(o(),x("table",{class:p(["ui-table rounded-lg",e.kind===a(l).SECONDARY&&"ui-table__secondary",e.kind===a(l).SECONDARY_INVERTED&&"ui-table__secondary-inverted"])},[r(e.$slots,"default",{},void 0,!0)],2))}});const S=g(h,[["__scopeId","data-v-fa615ea7"]]);h.__docgenInfo={exportName:"default",displayName:"ui-table",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ETableKind"},defaultValue:{func:!1,value:"ETableKind.SECONDARY_INVERTED"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table.vue"]};const U={title:"Components/ui-table",argTypes:{kind:{control:{type:"select"},options:Object.values(l),description:"The row kind"}},args:{kind:l.DEFAULT}},C=t=>({components:{UiTableRow:N,UiTableCell:R,UiTypography:u,UiTable:S},setup(){const e={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},s=[e,e,e,e,e,{...e,extraText:!0}];return{ETextWeight:w,ETypographySizes:n,args:t,list:s}},template:`
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
    `}),i=C.bind({});var b,_,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(f=(_=i.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,U as default};
//# sourceMappingURL=ui-table.stories-b40f0015.js.map
