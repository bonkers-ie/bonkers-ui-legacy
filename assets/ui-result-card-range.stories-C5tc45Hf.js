import{d as f,o as s,c as b,g as l,u as e,h as o,f as y,j as h,t as x,b as T}from"./vue.esm-bundler-C-KwxiLQ.js";import{u as v}from"./index-PqVpD0OJ.js";import{a as C,E as N,c as _,U as w}from"./index-C9LKT771.js";import{E}from"./ui-icon-BaIdPYCX.js";const S={class:"ui-result-card-range flex w-full flex-col items-center rounded-3xl border-4 border-secondary-alt-300 bg-secondary-alt-200 p-md text-secondary-500"},n=f({__name:"ui-result-card-range",props:{iconName:{},title:{}},setup(i){return(r,k)=>(s(),b("div",S,[r.iconName?(s(),l(e(v),{key:0,class:"mb-md",size:e(E).MD,"icon-name":r.iconName},null,8,["size","icon-name"])):o("",!0),r.title?(s(),l(e(w),{key:1,class:"mb-xxs",size:e(C).MD,weight:e(N).SEMI_BOLD,align:e(_).CENTER},{default:y(()=>[h(x(r.title),1)]),_:1},8,["size","weight","align"])):o("",!0),T(r.$slots,"default")]))}});n.__docgenInfo={exportName:"default",displayName:"ui-result-card-range",description:"",tags:{},props:[{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-result-card-range/ui-result-card-range.vue"]};const I={title:"Components/ui-result-card-range",component:n,argTypes:{default:{control:{type:"text"},description:"The slot text or component"},title:{control:{type:"text"},description:"The title text"}},args:{title:"This is a Title",default:"This is the body"}},a={args:{iconName:["far","face-smile"]}},t={render:i=>({components:{UiResultCardRange:n},setup(){return{args:i}},template:`
        <div class="ui-result-card-range grid gap-sm w-full">

            <ui-result-card-range style="grid-column: 1 / 1"
                v-bind="args"
                 :icon-name="['far', 'face-smile']" :title="args.title">
                {{args.default}}
            </ui-result-card-range>

            <ui-result-card-range style="grid-column: 2 / 2"
                v-bind="args"
                 :icon-name="['far', 'face-smile']" :title="args.title">
                 {{args.default}}

            </ui-result-card-range>

            <ui-result-card-range v-bind="args"
                style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

                    <b>25/02/2022</b>
                    <b>→</b>
                    <b>26/01/2023</b>

            </ui-result-card-range>
        </div>
        `})};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    iconName: ["far", "face-smile"]
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiResultCardRange
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
        <div class="ui-result-card-range grid gap-sm w-full">

            <ui-result-card-range style="grid-column: 1 / 1"
                v-bind="args"
                 :icon-name="['far', 'face-smile']" :title="args.title">
                {{args.default}}
            </ui-result-card-range>

            <ui-result-card-range style="grid-column: 2 / 2"
                v-bind="args"
                 :icon-name="['far', 'face-smile']" :title="args.title">
                 {{args.default}}

            </ui-result-card-range>

            <ui-result-card-range v-bind="args"
                style="grid-column: 1 / 3; flex-direction: row; justify-content: space-between;">

                    <b>25/02/2022</b>
                    <b>→</b>
                    <b>26/01/2023</b>

            </ui-result-card-range>
        </div>
        \`
  })
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const U=["SingleCard","FullCard"];export{t as FullCard,a as SingleCard,U as __namedExportsOrder,I as default};
