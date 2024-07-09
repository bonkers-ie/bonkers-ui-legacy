import{E as l,U as o,_ as u,a as x}from"./ui-table-row-DxZ2NkEN.js";import{_ as p,E as c,a as d}from"./index-C4rX16NO.js";import"./vue.esm-bundler-B9OAKqIP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={title:"Components/ui-table",argTypes:{kind:{control:{type:"select"},options:Object.values(l),description:"The row kind"}},args:{kind:l.DEFAULT}},t={render:s=>({components:{UiTableRow:o,UiTableCell:u,UiTypography:p,UiTable:x},setup(){const e={text1:"some text",text2:"some text2",text3:"some text3",extraText:!1},r=[e,e,e,e,e,{...e,extraText:!0}];return{ETextWeight:c,ETypographySizes:d,args:s,list:r}},template:`
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
        `})};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
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
  })
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,w as default};
