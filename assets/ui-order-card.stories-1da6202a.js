import{d as E,c as h,o as i,e as b,f as T,u as e,g as s,q as o,j as l,v as d,k as m}from"./vue.esm-bundler-9a4beff8.js";import{E as x,_ as L}from"./ui-icon-ee9e3f6c.js";import{a as g,E as c,b as u,_ as p}from"./ui-typography-43c7c98a.js";var a=(t=>(t.DEFAULT="DEFAULT",t.WARNING="WARNING",t))(a||{});const f=E({__name:"ui-order-card",props:{iconName:null,kind:{default:a.DEFAULT}},setup(t){const w=t,A=h(()=>{switch(w.kind){case a.WARNING:return g.WARNING_700;default:return g.PRIMARY_700}});return(r,D)=>(i(),b("div",{class:s(["ui-order-card relative text-center rounded-md pt-md mt-sm",[t.kind===e(a).DEFAULT&&"text-white bg-primary-300",t.kind===e(a).WARNING&&"bg-warning-300 text-warning-700"]])},[T(e(L),{"icon-name":t.iconName,size:e(x).LG,class:s(["absolute top-0 left-1/2 bg-primary-300 rounded-full -translate-x-1/2 -translate-y-1/2",[t.kind===e(a).DEFAULT&&"text-white",t.kind===e(a).WARNING&&"bg-warning-300 text-white"]])},null,8,["icon-name","size","class"]),r.$slots.title?(i(),o(e(p),{key:0,class:s(["pt-sm",[t.kind===e(a).DEFAULT&&"text-primary-700",t.kind===e(a).WARNING&&"text-warning-700"]]),kind:e(A),size:e(c).XL,weight:e(u).BOLD},{default:l(()=>[m(r.$slots,"title")]),_:3},8,["class","kind","size","weight"])):d("",!0),r.$slots.textBody?(i(),o(e(p),{key:1,class:s(["mb-sm p-sm",[t.kind===e(a).DEFAULT&&"text-primary-700",t.kind===e(a).WARNING&&"text-warning-700"]]),size:e(c).MD,weight:e(u).REGULAR},{default:l(()=>[m(r.$slots,"textBody")]),_:3},8,["class","size","weight"])):d("",!0),r.$slots.footer?(i(),o(e(p),{key:2,class:s(["py-sm text-white rounded-b-lg",[t.kind===e(a).DEFAULT&&"bg-primary-700",t.kind===e(a).WARNING&&"bg-warning-700"]]),size:e(c).XXS,weight:e(u).REGULAR},{default:l(()=>[m(r.$slots,"footer")]),_:3},8,["class","size","weight"])):d("",!0)],2))}});f.__docgenInfo={exportName:"default",displayName:"ui-order-card",description:"",tags:{},props:[{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"kind",required:!1,type:{name:"EOrderCardTypes"},defaultValue:{func:!1,value:"EOrderCardTypes.DEFAULT"}}],slots:[{name:"title"},{name:"textBody"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-order-card/ui-order-card.vue"]};const W={title:"Components/ui-order-card",component:f,argTypes:{kind:{control:{type:"select"},options:Object.values(a),description:"The Element kinds"}},args:{slot:"But we still need your gas and electricity meter readings before processing it.",kind:a.DEFAULT}},R=t=>({components:{UiOrderCard:f},setup(){return{args:t}},template:`
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


    `}),n=R.bind({});var k,y,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,W as default};
//# sourceMappingURL=ui-order-card.stories-1da6202a.js.map
