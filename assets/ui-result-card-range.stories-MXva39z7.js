import{d as f,o as n,a as b,e as l,f as e,g as o,w as y,i as h,t as x,h as v}from"./vue.esm-bundler-B4SQYQ1t.js";import{d as w}from"./index-DpKOHcH_.js";import{d as C}from"./index-Cci8dJ4U.js";import{E as N}from"./ui-icon-CN4b7xFD.js";import{d as T,a as _,b as E}from"./ui-typography-CFnpkGZs.js";const S={class:"ui-result-card-range flex w-full flex-col items-center rounded-3xl border-4 border-secondary-alt-300 bg-secondary-alt-200 p-md text-secondary-500"},s=f({__name:"ui-result-card-range",props:{iconName:{},title:{}},setup(i){return(r,k)=>(n(),b("div",S,[r.iconName?(n(),l(e(w),{key:0,class:"mb-md",size:e(N).MD,"icon-name":r.iconName},null,8,["size","icon-name"])):o("",!0),r.title?(n(),l(e(C),{key:1,class:"mb-xs",size:e(T).MD,weight:e(_).SEMI_BOLD,align:e(E).CENTER},{default:y(()=>[h(x(r.title),1)]),_:1},8,["size","weight","align"])):o("",!0),v(r.$slots,"default")]))}});s.__docgenInfo={exportName:"default",displayName:"ui-result-card-range",description:"",tags:{},props:[{name:"iconName",required:!1,type:{name:"TIconName"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-result-card-range/ui-result-card-range.vue"]};const I={title:"Components/ui-result-card-range",component:s,argTypes:{default:{control:{type:"text"},description:"The slot text or component"},title:{control:{type:"text"},description:"The title text"}},args:{title:"This is a Title",default:"This is the body"}},a={args:{iconName:["far","face-smile"]}},t={render:i=>({components:{UiResultCardRange:s},setup(){return{args:i}},template:`
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
        `})};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    iconName: ["far", "face-smile"]
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const M=["SingleCard","FullCard"];export{t as FullCard,a as SingleCard,M as __namedExportsOrder,I as default};
