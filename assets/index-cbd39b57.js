import{e as T,o as t,g as m,u as s,n as i,j as d,k as r,s as u,p as y,l as f,m as E,t as S}from"./vue.esm-bundler-5815757d.js";import{d as C}from"./index-7014e7a9.js";import{U as p}from"./index-8738b0a4.js";import{E as M}from"./ui-icon-253a2a48.js";import{a as c}from"./ui-typography-7e42daed.js";var o=(a=>(a.DEFAULT="DEFAULT",a.PROGRESS="PROGRESS",a))(o||{}),l=(a=>(a.DEFAULT="DEFAULT",a.COMPACT="COMPACT",a))(l||{}),n=(a=>(a.SM="SM",a.MD="MD",a))(n||{});const k={key:0,class:"ui-list-item__line absolute left-xs top-sm h-full w-xxs -translate-x-2/4 bg-primary-300 group-last:hidden"},g=T({__name:"ui-list-item",props:{icon:{default:void 0},title:{default:""},kind:{default:o.DEFAULT},size:{default:n.SM},spacing:{default:l.COMPACT},iconClass:{default:""}},setup(a){return(e,D)=>(t(),m("li",{class:u(["ui-list-item group relative grid grid-flow-col justify-start gap-xs text-secondary",[e.size===s(n).SM&&"text-sm",e.size===s(n).MD&&"text-md",e.spacing===s(l).DEFAULT&&"pb-sm",e.spacing===s(l).COMPACT&&"pb-xs"]])},[e.kind===s(o).PROGRESS?(t(),m("div",k)):i("",!0),d(e.$slots,"icon",{},()=>[e.icon?(t(),r(s(C),{key:0,class:u(["bg-white",e.iconClass]),"icon-name":e.icon,size:s(M).SM},null,8,["class","icon-name","size"])):i("",!0)]),y("div",null,[e.title?(t(),r(s(p),{key:0,weight:s(c).SEMI_BOLD},{default:f(()=>[E(S(e.title),1)]),_:1},8,["weight"])):i("",!0),e.$slots.default?(t(),r(s(p),{key:1,class:u([e.title&&"mt-xxs"]),weight:s(c).LIGHT},{default:f(()=>[d(e.$slots,"default")]),_:3},8,["class","weight"])):i("",!0)])],2))}});g.__docgenInfo={exportName:"default",displayName:"ui-list-item",description:"",tags:{},props:[{name:"icon",required:!1,type:{name:"TIconName"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"kind",required:!1,type:{name:"EListItemTypes"},defaultValue:{func:!1,value:"EListItemTypes.DEFAULT"}},{name:"size",required:!1,type:{name:"EListItemSize"},defaultValue:{func:!1,value:"EListItemSize.SM"}},{name:"spacing",required:!1,type:{name:"EListItemSpacing"},defaultValue:{func:!1,value:"EListItemSpacing.COMPACT"}},{name:"iconClass",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-list-item/ui-list-item.vue"]};const v=g,z=v;export{o as E,z as U,n as a,l as b};
//# sourceMappingURL=index-cbd39b57.js.map
