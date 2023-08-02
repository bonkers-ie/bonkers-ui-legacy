import{e as d,o,g as x,j as r,s as p,u as a,k as c,l as m,n as y}from"./vue.esm-bundler-64289e35.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as n,d as u,a as w,E as v}from"./ui-typography-32a544b7.js";var E=(t=>(t.SECONDARY="secondary",t))(E||{});const T=d({__name:"ui-table-row",props:{kind:{}},setup(t){return(e,l)=>(o(),x("tr",{class:p(["ui-table-row text-center",[e.kind===a(E).SECONDARY&&"bg-secondary-alt-200"]])},[r(e.$slots,"default",{},void 0,!0)],2))}});const D=g(T,[["__scopeId","data-v-97952db0"]]);T.__docgenInfo={exportName:"default",displayName:"ui-table-row",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ERowKind"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-row/ui-table-row.vue"]};const k=d({__name:"ui-table-cell",props:{align:{},weight:{}},setup(t){return(e,l)=>(o(),c(a(n),{is:"td",size:a(u).SM,align:e.align,weight:e.weight,class:"p-sm"},{default:m(()=>[r(e.$slots,"default"),e.$slots.subtext?(o(),c(a(n),{key:0,size:a(u).XXS,weight:a(w).SEMI_BOLD,class:p(["flex flex-col gap-xxs",e.$slots.default&&"pt-sm"]),kind:a(v).PRIMARY_ALT_700},{default:m(()=>[r(e.$slots,"subtext")]),_:3},8,["size","weight","kind","class"])):y("",!0)]),_:3},8,["size","align","weight"]))}});k.__docgenInfo={exportName:"default",displayName:"ui-table-cell",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"ETextAlign"}},{name:"weight",required:!1,type:{name:"ETextWeight"}}],slots:[{name:"default"},{name:"subtext"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-cell/ui-table-cell.vue"]};var s=(t=>(t.DEFAULT="default",t.SECONDARY="secondary",t.SECONDARY_INVERTED="secondary-inverted",t))(s||{});const h=d({__name:"ui-table",props:{kind:{default:s.SECONDARY_INVERTED}},setup(t){return(e,l)=>(o(),x("table",{class:p(["ui-table rounded-lg",e.kind===a(s).SECONDARY&&"ui-table__secondary",e.kind===a(s).SECONDARY_INVERTED&&"ui-table__secondary-inverted"])},[r(e.$slots,"default",{},void 0,!0)],2))}});const N=g(h,[["__scopeId","data-v-fa615ea7"]]);h.__docgenInfo={exportName:"default",displayName:"ui-table",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ETableKind"},defaultValue:{func:!1,value:"ETableKind.SECONDARY_INVERTED"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table.vue"]};const I={title:"Components/ui-table",argTypes:{kind:{control:{type:"select"},options:Object.values(s),description:"The row kind"}},args:{kind:s.DEFAULT}},S=t=>({components:{UiTableRow:D,UiTableCell:k,UiTypography:n,UiTable:N},setup(){const e={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},l=[e,e,e,e,e,{...e,extraText:!0}];return{ETextWeight:w,ETypographySizes:u,args:t,list:l}},template:`
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
    `}),i=S.bind({});var _,b,f;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`(args: MyComponentProps) => ({
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
})`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const O=["Default"];export{i as Default,O as __namedExportsOrder,I as default};
//# sourceMappingURL=ui-table.stories-caf4e80d.js.map
