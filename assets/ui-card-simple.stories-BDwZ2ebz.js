import{d as f,k as v,o as s,c as C,u as e,g as d,f as g,b as o,h as u}from"./vue.esm-bundler-C-KwxiLQ.js";import{E as S,c as p,U as y,_,a as z,b}from"./index-C9LKT771.js";import{_ as B,a as A}from"./ui-button-Hemy7zAZ.js";import{_ as w,E as D}from"./ui-badge-Chech2P1.js";import"./index-PqVpD0OJ.js";import"./ui-icon-BaIdPYCX.js";const I={class:"ui-card-simple relative grid gap-sm rounded-3xl border border-secondary-alt-500 bg-white p-sm"},a=f({__name:"ui-card-simple",setup(i){const l=v();return(r,N)=>(s(),C("div",I,[e(l).title?(s(),d(e(y),{key:0,weight:e(S).BOLD,align:e(p).CENTER},{default:g(()=>[o(r.$slots,"title")]),_:3},8,["weight","align"])):u("",!0),o(r.$slots,"default"),e(l).footer?(s(),d(e(y),{key:1,align:e(p).CENTER},{default:g(()=>[o(r.$slots,"footer")]),_:3},8,["align"])):u("",!0)]))}});a.__docgenInfo={exportName:"default",displayName:"ui-card-simple",description:"",tags:{},slots:[{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-card-simple/ui-card-simple.vue"]};const W={title:"Components/ui-card-simple",component:a,argTypes:{default:{control:{type:"text"}}},args:{default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},n={render:i=>({components:{UiCardSimple:a},setup(){return{args:i}},template:`

            <ui-card-simple>
                <template v-slot:title>
                    I want to borrow for
                </template>
                <p class="mb-md text-center">
                    {{args.default}}
                </p>
                <template v-slot:footer>
                    Type in or adjust the amount
                </template>
            </ui-card-simple>
        `})},t={render:i=>({components:{UiCardSimple:a,UiTypography:_,UiButton:B,UiBadge:w},setup(){return{args:i,ETextWeight:S,ETextAlign:p,ETypographySizes:z,EColors:b,EButtonSizes:A,EBadgeKind:D}},template:`

        <div class="grid grid-cols-2 gap-xxs w-[448px]">
            <ui-card-simple>
                <div class="grid gap-xxs justify-items-center">
                    <div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

                    <ui-typography
                        :weight="ETextWeight.SEMI_BOLD"
                        :align="ETextAlign.CENTER"
                        :size="ETypographySizes.XS"
                        lineHeight
                    >
                        Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
                    </ui-typography>

                    <div>
                        <ui-typography
                            :weight="ETextWeight.SEMI_BOLD"
                            :align="ETextAlign.CENTER"
                            lineHeight
                        >
                            €77.00*
                        </ui-typography>

                        <ui-typography
                            :align="ETextAlign.CENTER"
                            :size="ETypographySizes.XS"
                            lineHeight
                            :kind="EColors.SECONDARY_300"
                        >
                            monthly
                        </ui-typography>
                    </div>

                    <ui-badge
                        :kind="EBadgeKind.ACCENT_ALT"
                        rounded
                    >
                        Save €150 on first year
                    </ui-badge>

                    <ui-button fullWidth :size="EButtonSizes.MEDIUM">
                        <ui-typography
                            :size="ETypographySizes.XS"
                        >
                            SEE DETAILS
                        </ui-typography>
                    </ui-button>
                </div>
            </ui-card-simple>

            <ui-card-simple>
            <div class="grid gap-xxs justify-items-center">
            <div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

            <ui-typography
                :weight="ETextWeight.SEMI_BOLD"
                :align="ETextAlign.CENTER"
                :size="ETypographySizes.XS"
                lineHeight
            >
                Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
            </ui-typography>

            <div>
                <ui-typography
                    :weight="ETextWeight.SEMI_BOLD"
                    :align="ETextAlign.CENTER"
                    lineHeight
                >
                    €77.00*
                </ui-typography>

                <ui-typography
                    :align="ETextAlign.CENTER"
                    :size="ETypographySizes.XS"
                    lineHeight
                    :kind="EColors.SECONDARY_300"
                >
                    monthly
                </ui-typography>
            </div>

            <ui-button fullWidth :size="EButtonSizes.MEDIUM">
                <ui-typography
                    :size="ETypographySizes.XS"
                >
                    SEE DETAILS
                </ui-typography>
            </ui-button>

            </div>
                </ui-card-simple>
            </div>
        `})};var E,h,m;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCardSimple
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`

            <ui-card-simple>
                <template v-slot:title>
                    I want to borrow for
                </template>
                <p class="mb-md text-center">
                    {{args.default}}
                </p>
                <template v-slot:footer>
                    Type in or adjust the amount
                </template>
            </ui-card-simple>
        \`
  })
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var c,T,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCardSimple,
      UiTypography,
      UiButton,
      UiBadge
    },
    setup() {
      return {
        args,
        ETextWeight,
        ETextAlign,
        ETypographySizes,
        EColors,
        EButtonSizes,
        EBadgeKind
      };
    },
    template: /*html*/\`

        <div class="grid grid-cols-2 gap-xxs w-[448px]">
            <ui-card-simple>
                <div class="grid gap-xxs justify-items-center">
                    <div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

                    <ui-typography
                        :weight="ETextWeight.SEMI_BOLD"
                        :align="ETextAlign.CENTER"
                        :size="ETypographySizes.XS"
                        lineHeight
                    >
                        Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
                    </ui-typography>

                    <div>
                        <ui-typography
                            :weight="ETextWeight.SEMI_BOLD"
                            :align="ETextAlign.CENTER"
                            lineHeight
                        >
                            €77.00*
                        </ui-typography>

                        <ui-typography
                            :align="ETextAlign.CENTER"
                            :size="ETypographySizes.XS"
                            lineHeight
                            :kind="EColors.SECONDARY_300"
                        >
                            monthly
                        </ui-typography>
                    </div>

                    <ui-badge
                        :kind="EBadgeKind.ACCENT_ALT"
                        rounded
                    >
                        Save €150 on first year
                    </ui-badge>

                    <ui-button fullWidth :size="EButtonSizes.MEDIUM">
                        <ui-typography
                            :size="ETypographySizes.XS"
                        >
                            SEE DETAILS
                        </ui-typography>
                    </ui-button>
                </div>
            </ui-card-simple>

            <ui-card-simple>
            <div class="grid gap-xxs justify-items-center">
            <div class="card-image w-xxxl h-xxxl bg-secondary-300"></div>

            <ui-typography
                :weight="ETextWeight.SEMI_BOLD"
                :align="ETextAlign.CENTER"
                :size="ETypographySizes.XS"
                lineHeight
            >
                Virgin Media - 500 Fibre Broadband, TV and Unlimited Irish Landline
            </ui-typography>

            <div>
                <ui-typography
                    :weight="ETextWeight.SEMI_BOLD"
                    :align="ETextAlign.CENTER"
                    lineHeight
                >
                    €77.00*
                </ui-typography>

                <ui-typography
                    :align="ETextAlign.CENTER"
                    :size="ETypographySizes.XS"
                    lineHeight
                    :kind="EColors.SECONDARY_300"
                >
                    monthly
                </ui-typography>
            </div>

            <ui-button fullWidth :size="EButtonSizes.MEDIUM">
                <ui-typography
                    :size="ETypographySizes.XS"
                >
                    SEE DETAILS
                </ui-typography>
            </ui-button>

            </div>
                </ui-card-simple>
            </div>
        \`
  })
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const H=["Default","Featured"];export{n as Default,t as Featured,H as __namedExportsOrder,W as default};
