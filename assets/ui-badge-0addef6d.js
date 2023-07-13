import{d as f,y as g,c as h,o as r,e as k,l as t,v as l,u as a,x as u,j as y,k as E,g as c}from"./vue.esm-bundler-d669bd99.js";import{E as b,_ as v}from"./ui-icon-e124efe1.js";import{E as o,b as w,_ as R}from"./ui-typography-8f06c7f1.js";var i=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(i||{}),n=(e=>(e.PRIMARY="primary",e.ERROR="error",e.ACCENT="accent",e))(n||{});const _={class:"ui-badge relative overflow-hidden text-white"},z={class:"relative z-[1] flex content-center items-center gap-xxs px-xs py-xxs"},S=f({__name:"ui-badge",props:{size:{},kind:{},icon:{},elipsis:{type:Boolean}},setup(e){const d=e,m=g(),p=h(()=>{switch(d.size){case i.MEDIUM:return o.XS;case i.LARGE:return o.SM;case i.SMALL:default:return o.XXS}});return(s,M)=>(r(),k("div",_,[t("div",z,[s.icon?(r(),l(a(v),{key:0,size:a(b).XS,"icon-name":s.icon},null,8,["size","icon-name"])):u("",!0),a(m).default?(r(),l(a(R),{key:1,size:p.value,weight:a(w).SEMI_BOLD,class:c(["whitespace-nowrap",[s.elipsis&&"overflow-hidden text-ellipsis"]]),"line-height":""},{default:y(()=>[E(s.$slots,"default")]),_:3},8,["size","weight","class"])):u("",!0)]),t("div",{class:c(["absolute left-0 top-0 h-full w-full rounded-full",[(!s.kind||s.kind===a(n).PRIMARY)&&"bg-primary-600",s.kind===a(n).ERROR&&"bg-error-600",s.kind===a(n).ACCENT&&"bg-accent-600",s.elipsis&&"max-w-full"]])},null,2)]))}});S.__docgenInfo={exportName:"default",displayName:"ui-badge",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"EBadgeSize"}},{name:"kind",required:!1,type:{name:"EBadgeKind"}},{name:"icon",required:!1,type:{name:"TIconName"}},{name:"elipsis",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-badge/ui-badge.vue"]};export{n as E,S as _,i as a};
//# sourceMappingURL=ui-badge-0addef6d.js.map
