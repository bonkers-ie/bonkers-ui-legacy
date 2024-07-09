import{d as k,o as f,a as g,h as s,n as b,f as a,l as o,w as l,i as h,t as S}from"./vue.esm-bundler-CeLExAbV.js";import{d as u,U as c}from"./index-Cp3NuEg2.js";var r=(e=>(e.DEFAULT="default",e.PRIMARY="primary",e.WARNING="warning",e.ERROR="error",e.SECONDARY="secondary",e))(r||{});const i=k({__name:"ui-snackbar",props:{title:{},kind:{default:r.DEFAULT}},setup(e){return(t,y)=>(f(),g("div",{class:b(["ui-snackbar flex w-full justify-between rounded-xl p-sm shadow-md",[t.kind===a(r).DEFAULT&&"bg-white",t.kind===a(r).PRIMARY&&"bg-primary text-white",t.kind===a(r).WARNING&&"bg-warning text-white",t.kind===a(r).ERROR&&"bg-error text-white",t.kind===a(r).SECONDARY&&"bg-secondary text-white"]])},[s(t.$slots,"default",{},()=>[o(a(c),{size:a(u).SM,"line-height":""},{default:l(()=>[s(t.$slots,"titleSlot",{},()=>[h(S(t.title),1)])]),_:3},8,["size"]),o(a(c),{size:a(u).XS,"line-height":""},{default:l(()=>[s(t.$slots,"articleSlot")]),_:3},8,["size"])])],2))}});i.__docgenInfo={exportName:"default",displayName:"ui-snackbar",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"kind",required:!1,type:{name:"ESnackbarTypes"},defaultValue:{func:!1,value:"ESnackbarTypes.DEFAULT"}}],slots:[{name:"default"},{name:"titleSlot"},{name:"articleSlot"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-snackbar/ui-snackbar.vue"]};const A={title:"Components/ui-snackbar",component:i,argTypes:{kind:{control:{type:"select"},options:Object.values(r),description:"The button kinds"},title:{controls:{type:"text"}},articleSlot:{controls:{type:"text"}}},args:{articleSlot:"This is an article",title:"This is a title",kind:r.DEFAULT}},n={render:e=>({components:{UiSnackbar:i},setup(){return{args:e}},template:`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        `})};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiSnackbar
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
            <ui-snackbar v-bind="args">
                <template #articleSlot>{{args.articleSlot}}</template>
            </ui-snackbar>
        \`
  })
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,A as default};
