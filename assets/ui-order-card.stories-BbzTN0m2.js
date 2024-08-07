import{d as E,k as h,o as s,c as b,e as T,u as e,n as o,f as n,w as d,g as l,b as m}from"./vue.esm-bundler-Cm5lky60.js";import{E as U}from"./ui-icon-CvXCGWkG.js";import{b as f,a as p,E as u,U as c}from"./index-DSDrJ6QP.js";import{u as B}from"./index-hPfmctDV.js";var r=(a=>(a.DEFAULT="DEFAULT",a.WARNING="WARNING",a))(r||{});const g=E({__name:"ui-order-card",props:{iconName:{},kind:{default:r.DEFAULT}},setup(a){const w=a,A=h(()=>{switch(w.kind){case r.WARNING:return f.WARNING_700;default:return f.PRIMARY_700}});return(t,L)=>(s(),b("div",{class:o(["ui-order-card relative mt-sm rounded-md pt-md text-center",[t.kind===e(r).DEFAULT&&"bg-primary-300 text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-warning-700"]])},[T(e(B),{"icon-name":t.iconName,size:e(U).LG,class:o(["absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300",[t.kind===e(r).DEFAULT&&"text-white",t.kind===e(r).WARNING&&"bg-warning-300 text-white"]])},null,8,["icon-name","size","class"]),t.$slots.title?(s(),n(e(c),{key:0,class:o(["pt-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),kind:A.value,size:e(p).XL,weight:e(u).BOLD},{default:d(()=>[m(t.$slots,"title")]),_:3},8,["class","kind","size","weight"])):l("",!0),t.$slots.textBody?(s(),n(e(c),{key:1,class:o(["mb-sm p-sm",[t.kind===e(r).DEFAULT&&"text-primary-700",t.kind===e(r).WARNING&&"text-warning-700"]]),size:e(p).MD,weight:e(u).REGULAR},{default:d(()=>[m(t.$slots,"textBody")]),_:3},8,["class","size","weight"])):l("",!0),t.$slots.footer?(s(),n(e(c),{key:2,class:o(["rounded-b-xl py-sm text-white",[t.kind===e(r).DEFAULT&&"bg-primary-700",t.kind===e(r).WARNING&&"bg-warning-700"]]),size:e(p).XXS,weight:e(u).REGULAR},{default:d(()=>[m(t.$slots,"footer")]),_:3},8,["class","size","weight"])):l("",!0)],2))}});g.__docgenInfo={exportName:"default",displayName:"ui-order-card",description:"",tags:{},props:[{name:"iconName",required:!0,type:{name:"TIconName"}},{name:"kind",required:!1,type:{name:"EOrderCardTypes"},defaultValue:{func:!1,value:"EOrderCardTypes.DEFAULT"}}],slots:[{name:"title"},{name:"textBody"},{name:"footer"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-order-card/ui-order-card.vue"]};const G={title:"Components/ui-order-card",component:g,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The Element kinds"},textBody:{control:{type:"text"}},title:{control:{type:"text"}},footer:{control:{type:"text"}}},args:{title:"Thank you for your order!",textBody:"But we still need your gas and electricity meter readings before processing it.",footer:"footer: But we still need your gas and electricity meter readings before processing it.",kind:r.DEFAULT}},i={render:a=>({components:{UiOrderCard:g},setup(){return{args:a}},template:`
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
        `})};var y,k,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const z=["Default"];export{i as Default,z as __namedExportsOrder,G as default};
