import{d as w,o as r,c as a,g as t,a as L,e as b,u as i,f as d,w as c,h as l,t as m}from"./vue.esm-bundler-BD_Ybmc6.js";import{a as u,E as C,U as g}from"./index-C-PnJtVA.js";import{u as k}from"./index-DC8R61pj.js";import{I as A}from"./CONSTANTS-DS3UuEb3.js";import"./ui-icon-DDKEQqeg.js";import"./ui-badge-tx0QK-pt.js";import"./ui-ber-rank-CYlCw3Sp.js";import"./ui-button-BO9TpgYs.js";import"./ui-icon-wrapper-BZuM4xna.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ui-input-BC36Fajx.js";import"./ui-list-item-Dbdvbfj3.js";import"./ui-modal-G0S5mKpZ.js";import"./ui-notification-badge-sFNI5A4g.js";import"./ui-snackbar-BOYN5Zpm.js";import"./ui-table-row-k0lY5LGq.js";const I={class:"flex-none overflow-hidden rounded-2xl border border-secondary-alt-300 bg-white"},T=["src"],v={class:"relative grid gap-xxxs px-xs py-sm text-secondary-400"},D={key:0,class:"absolute -top-md left-xs flex size-fit rounded-full border-2 border-white bg-gradient-to-b from-primary to-primary-alt p-xxs"},n=w({__name:"ui-media-card",props:{icon:{},image:{},title:{},description:{}},setup(p){return(e,M)=>(r(),a("div",I,[e.image?(r(),a("img",{key:0,class:"h-[100px] w-full object-cover",src:e.image,alt:"Information"},null,8,T)):t("",!0),L("div",v,[e.icon?(r(),a("div",D,[b(i(k),{"icon-name":e.icon,class:"text-white"},null,8,["icon-name"])])):t("",!0),e.title?(r(),d(i(g),{key:1,size:i(u).SM,weight:i(C).BOLD,"line-height":""},{default:c(()=>[l(m(e.title),1)]),_:1},8,["size","weight"])):t("",!0),e.description?(r(),d(i(g),{key:2,size:i(u).XXS,"line-height":""},{default:c(()=>[l(m(e.description),1)]),_:1},8,["size"])):t("",!0)])]))}});n.__docgenInfo={exportName:"default",displayName:"ui-media-card",description:"",tags:{},props:[{name:"icon",required:!1,type:{name:"TIconName"}},{name:"image",required:!1,type:{name:"string"}},{name:"title",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-media-card/ui-media-card.vue"]};const S="https://upload.wikimedia.org/wikipedia/commons/0/0d/Stock_Price_Listing_Numbers_on_a_Korean_Newspaper.jpg",J={title:"Components/ui-media-card",component:n,argTypes:{title:{control:{type:"text"},description:"The title text"},description:{control:{type:"text"},description:"The subtitle text"}},args:{title:"This is a Title",description:"This is a Subtitle",image:S,icon:A}},o={},s={render:p=>({components:{UiMediaCard:n},setup(){return{args:p,PLACEHOLDER_IMAGE:S}},template:`
            <div class="grid gap-xxs w-[344px] grid-cols-2">
                <ui-media-card :title="args.title" :icon="args.icon" :description="args.description" :image="PLACEHOLDER_IMAGE" />
                <ui-media-card :title="args.title" description="Super long description Super long description Super long description Super long description Super long description Super long description Super long description" :image="PLACEHOLDER_IMAGE" />
            </div>
        `})};var _,f,h;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var E,x,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiMediaCard
    },
    setup() {
      return {
        args,
        PLACEHOLDER_IMAGE
      };
    },
    template: /*html*/\`
            <div class="grid gap-xxs w-[344px] grid-cols-2">
                <ui-media-card :title="args.title" :icon="args.icon" :description="args.description" :image="PLACEHOLDER_IMAGE" />
                <ui-media-card :title="args.title" description="Super long description Super long description Super long description Super long description Super long description Super long description Super long description" :image="PLACEHOLDER_IMAGE" />
            </div>
        \`
  })
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const Q=["Default","Variant"];export{o as Default,s as Variant,Q as __namedExportsOrder,J as default};
