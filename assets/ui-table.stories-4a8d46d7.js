import{d as b,o,e as h,k as r,g as f,u as l,q as c,j as d,v as T}from"./vue.esm-bundler-9a4beff8.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as n,E as u,b as g,a as y}from"./ui-typography-43c7c98a.js";var a=(t=>(t.SECONDARY="secondary",t))(a||{});const w=b({__name:"ui-table-row",props:{kind:null},setup(t){return(e,i)=>(o(),h("tr",{class:f(["ui-table-row text-center",[t.kind===l(a).SECONDARY&&"bg-secondary-alt-200"]])},[r(e.$slots,"default",{},void 0,!0)],2))}});const E=k(w,[["__scopeId","data-v-97952db0"]]);w.__docgenInfo={exportName:"default",displayName:"ui-table-row",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ERowKind"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-row/ui-table-row.vue"]};const _=b({__name:"ui-table-cell",props:{align:null,weight:null},setup(t){return(e,i)=>(o(),c(l(n),{is:"td",size:l(u).SM,align:t.align,weight:t.weight,class:"p-sm"},{default:d(()=>[r(e.$slots,"default"),e.$slots.subtext?(o(),c(l(n),{key:0,size:l(u).XXS,weight:l(g).SEMI_BOLD,class:f(["flex flex-col gap-xxs",e.$slots.default&&"pt-sm"]),kind:l(y).PRIMARY_ALT_700},{default:d(()=>[r(e.$slots,"subtext")]),_:3},8,["size","weight","kind","class"])):T("",!0)]),_:3},8,["size","align","weight"]))}});_.__docgenInfo={exportName:"default",displayName:"ui-table-cell",description:"",tags:{},props:[{name:"align",required:!1,type:{name:"ETextAlign"}},{name:"weight",required:!1,type:{name:"ETextWeight"}}],slots:[{name:"default"},{name:"subtext"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-table/ui-table-cell/ui-table-cell.vue"]};const D={title:"Components/ui-table",argTypes:{kind:{control:{type:"select"},options:["empty"].concat(Object.values(a)),description:"The row kind"}},args:{kind:a.SECONDARY}},L=t=>({components:{UiTableRow:E,UiTableCell:_,UiTypography:n},setup(){const e={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},i=[e,e,e,e,e,{...e,extraText:!0}];return{ETextWeight:g,ETypographySizes:u,ERowKind:a,args:t,list:i}},template:`
        <table class='w-full'>
                <ui-table-row v-for="(row, index) in list"
                                            :key="index"
                                            rounded
                                            :kind="index % 2 === 0 && args.kind">
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
        </table>
    `}),s=L.bind({});var p,x,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`(args: MyComponentProps) => ({
  components: {
    // UiTable,
    UiTableRow,
    UiTableCell,
    UiTypography
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
      ERowKind,
      args,
      list
    };
  },
  template: /*html*/\`
        <table class='w-full'>
                <ui-table-row v-for="(row, index) in list"
                                            :key="index"
                                            rounded
                                            :kind="index % 2 === 0 && args.kind">
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
        </table>
    \`
})`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,D as default};
//# sourceMappingURL=ui-table.stories-4a8d46d7.js.map
