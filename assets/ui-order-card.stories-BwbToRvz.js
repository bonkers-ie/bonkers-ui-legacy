import{d as E,c as h,o,a as T,l as b,f as e,n,e as i,w as d,g as l,h as m}from"./vue.esm-bundler-CeLExAbV.js";import{E as U}from"./ui-icon-D1gIbnXD.js";import{E as f,d as p,a as u,U as c}from"./index-CO95GXBw.js";import{u as B}from"./index-4l9Ij6O5.js";var r=(a=>(a.DEFAULT="DEFAULT",a.WARNING="WARNING",a))(r||{});const g=E({__name:"ui-order-card",props:{iconName:{},kind:{default:r.DEFAULT}},setup(a){const w=a,A=h(()=>{switch(w.kind){case r.WARNING:return f.WARNING_700;default:return f.PRIMARY_700}});return(t,L)=>(o(),T("div",{class:n(["ui-order-card relative mt-sm rounded-md pt-md text-center",[t.kind===e(r).DEFAULT&&"bg-primary-300 text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-warning-700"]])},[b(e(B),{"icon-name":t.iconName,size:e(U).LG,class:n(["absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300",[t.kind===e(r).DEFAULT&&"text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-white"]])},null,8,["icon-name","size","class"]),t.$slots.title?(o(),i(e(c),{key:0,class:n(["pt-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),kind:A.value,size:e(p).XL,weight:e(u).BOLD},{default:d(()=>[m(t.$slots,"title")]),_:3},8,["class","kind","size","weight"])):l("",!0),t.$slots.textBody?(o(),i(e(c),{key:1,class:n(["mb-sm p-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),size:e(p).MD,weight:e(u).REGULAR},{default:d(()=>[m(t.$slots,"textBody")]),_:3},8,["class","size","weight"])):l("",!0),t.$slots.footer?(o(),i(e(c),{key:2,class:n(["rounded-b-xl py-sm text-white",[t.kind===e(r).DEFAULT&&"bg-primary-700",t.kind===e(r).WARNING&&"bg-warning-700"]]),size:e(p).XXS,weight:e(u).REGULAR},{default:d(()=>[m(t.$slots,"footer")]),_:3},8,["class","size","weight"])):l("",!0)],2))}});g.__docgenInfo={exportName:"default",displayName:"ui-order-card",description:"",tags:{},props:[{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"kind",required:!1,type:{name:"EOrderCardTypes"},defaultValue:{func:!1,value:"EOrderCardTypes.DEFAULT"}}],slots:[{name:"title"},{name:"textBody"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-order-card/ui-order-card.vue"]};const G={title:"Components/ui-order-card",component:g,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The Element kinds"},textBody:{control:{type:"text"}},title:{control:{type:"text"}},footer:{control:{type:"text"}}},args:{title:"Thank you for your order!",textBody:"But we still need your gas and electricity meter readings before processing it.",footer:"footer: But we still need your gas and electricity meter readings before processing it.",kind:r.DEFAULT}},s={render:a=>({components:{UiOrderCard:g},setup(){return{args:a}},template:`
            <ui-order-card v-bind="args" :iconName="['far', 'face-smile']">
                <template #title>
                    {{args.title}}
                </template>

                <template #textBody>
                    {{args.textBody}}
                </template>

                <template #footer>
                    {{args.footer}}
                </template>
            </ui-order-card>
        `})};var y,k,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
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
                    {{args.title}}
                </template>

                <template #textBody>
                    {{args.textBody}}
                </template>

                <template #footer>
                    {{args.footer}}
                </template>
            </ui-order-card>
        \`
  })
}`,...(N=(k=s.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const z=["Default"];export{s as Default,z as __namedExportsOrder,G as default};
