import{e as E,f as h,o,g as T,z as b,u as e,s,k as n,l,n as d,j as m}from"./vue.esm-bundler-1832156e.js";import{E as L,_ as R}from"./ui-icon-685efca2.js";import{E as g,d as p,a as u,_ as c}from"./ui-typography-de25f69d.js";var r=(a=>(a.DEFAULT="DEFAULT",a.WARNING="WARNING",a))(r||{});const f=E({__name:"ui-order-card",props:{iconName:{},kind:{default:r.DEFAULT}},setup(a){const w=a,A=h(()=>{switch(w.kind){case r.WARNING:return g.WARNING_700;default:return g.PRIMARY_700}});return(t,U)=>(o(),T("div",{class:s(["ui-order-card relative mt-sm rounded-md pt-md text-center",[t.kind===e(r).DEFAULT&&"bg-primary-300 text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-warning-700"]])},[b(e(R),{"icon-name":t.iconName,size:e(L).LG,class:s(["absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300",[t.kind===e(r).DEFAULT&&"text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-white"]])},null,8,["icon-name","size","class"]),t.$slots.title?(o(),n(e(c),{key:0,class:s(["pt-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),kind:A.value,size:e(p).XL,weight:e(u).BOLD},{default:l(()=>[m(t.$slots,"title")]),_:3},8,["class","kind","size","weight"])):d("",!0),t.$slots.textBody?(o(),n(e(c),{key:1,class:s(["mb-sm p-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),size:e(p).MD,weight:e(u).REGULAR},{default:l(()=>[m(t.$slots,"textBody")]),_:3},8,["class","size","weight"])):d("",!0),t.$slots.footer?(o(),n(e(c),{key:2,class:s(["rounded-b-lg py-sm text-white",[t.kind===e(r).DEFAULT&&"bg-primary-700",t.kind===e(r).WARNING&&"bg-warning-700"]]),size:e(p).XXS,weight:e(u).REGULAR},{default:l(()=>[m(t.$slots,"footer")]),_:3},8,["class","size","weight"])):d("",!0)],2))}});f.__docgenInfo={exportName:"default",displayName:"ui-order-card",description:"",tags:{},props:[{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"kind",required:!1,type:{name:"EOrderCardTypes"},defaultValue:{func:!1,value:"EOrderCardTypes.DEFAULT"}}],slots:[{name:"title"},{name:"textBody"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-order-card/ui-order-card.vue"]};const W={title:"Components/ui-order-card",component:f,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The Element kinds"}},args:{slot:"But we still need your gas and electricity meter readings before processing it.",kind:r.DEFAULT}},D=a=>({components:{UiOrderCard:f},setup(){return{args:a}},template:`
        <ui-order-card v-bind="args" :iconName="['far', 'face-smile']">
            <template #title>
                Thank you for your order!
            </template>

            <template #textBody>
                {{args.slot}}
            </template>

            <template #footer>
                We’ll send a confirmation email to william.moran@bonkers.ie
            </template>
        </ui-order-card>


    `}),i=D.bind({});var k,y,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    UiOrderCard
  },
  setup() {
    return {
      args
    };
  },
  template: /*html*/\`
        <ui-order-card v-bind="args" :iconName="['far', 'face-smile']">
            <template #title>
                Thank you for your order!
            </template>

            <template #textBody>
                {{args.slot}}
            </template>

            <template #footer>
                We’ll send a confirmation email to william.moran@bonkers.ie
            </template>
        </ui-order-card>


    \`
})`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,W as default};
//# sourceMappingURL=ui-order-card.stories-a81909c2.js.map
