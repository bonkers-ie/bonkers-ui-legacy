import{e as f,A as g,f as h,o as r,g as k,p as t,k as l,u as a,n as u,l as y,j as E,s as c}from"./vue.esm-bundler-64289e35.js";import{E as b,_ as w}from"./ui-icon-d8412fa6.js";import{d as o,a as R,_}from"./ui-typography-32a544b7.js";var i=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(i||{}),n=(e=>(e.PRIMARY="primary",e.ERROR="error",e.ACCENT="accent",e))(n||{});const v={class:"ui-badge relative overflow-hidden text-white"},z={class:"relative z-[1] flex content-center items-center gap-xxs px-xs py-xxs"},M=f({__name:"ui-badge",props:{size:{},kind:{},icon:{},elipsis:{type:Boolean}},setup(e){const d=e,m=g(),p=h(()=>{switch(d.size){case i.MEDIUM:return o.XS;case i.LARGE:return o.SM;case i.SMALL:default:return o.XXS}});return(s,S)=>(r(),k("div",v,[t("div",z,[s.icon?(r(),l(a(w),{key:0,size:a(b).SM,"icon-name":s.icon},null,8,["size","icon-name"])):u("",!0),a(m).default?(r(),l(a(_),{key:1,size:p.value,weight:a(R).SEMI_BOLD,class:c(["whitespace-nowrap",[s.elipsis&&"overflow-hidden text-ellipsis"]]),"line-height":""},{default:y(()=>[E(s.$slots,"default")]),_:3},8,["size","weight","class"])):u("",!0)]),t("div",{class:c(["absolute left-0 top-0 h-full w-full rounded-full",[(!s.kind||s.kind===a(n).PRIMARY)&&"bg-primary-600",s.kind===a(n).ERROR&&"bg-error-600",s.kind===a(n).ACCENT&&"bg-accent-600",s.elipsis&&"max-w-full"]])},null,2)]))}});M.__docgenInfo={exportName:"default",displayName:"ui-badge",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"EBadgeSize"}},{name:"kind",required:!1,type:{name:"EBadgeKind"}},{name:"icon",required:!1,type:{name:"TIconName"}},{name:"elipsis",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-badge/ui-badge.vue"]};export{n as E,M as _,i as a};
//# sourceMappingURL=ui-badge-2af84af5.js.map
