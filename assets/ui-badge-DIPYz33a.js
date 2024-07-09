import{d as m,u as p,c as f,o as t,a as g,b as R,e as i,f as a,g as l,w as y,n as A,h as M}from"./vue.esm-bundler-CeLExAbV.js";import{u as h}from"./index-4l9Ij6O5.js";import{E as k}from"./ui-icon-D1gIbnXD.js";import{d as o,a as S,U as b}from"./index-Cp3NuEg2.js";var s=(e=>(e.SMALL="small",e.MEDIUM="medium",e.LARGE="large",e))(s||{}),n=(e=>(e.PRIMARY="primary",e.ERROR="error",e.WARNING="warning",e.ACCENT="accent",e.PRIMARY_ALT="primary-alt",e.SECONDARY="secondary",e))(n||{});const E={class:"relative z-[1] flex content-center items-center gap-xxxs px-xxs py-xxxs"},I=m({__name:"ui-badge",props:{size:{default:s.SMALL},kind:{default:n.PRIMARY},icon:{},rounded:{type:Boolean,default:!1}},setup(e){const u=e,d=p(),c=f(()=>{switch(u.size){case s.MEDIUM:return o.XS;case s.LARGE:return o.SM;case s.SMALL:default:return o.XXS}});return(r,w)=>(t(),g("div",{class:A(["ui-badge relative inline-flex overflow-hidden rounded",{"bg-primary-100 text-primary-700":r.kind===a(n).PRIMARY,"bg-error-300 text-error-700":r.kind===a(n).ERROR,"bg-warning-300 text-warning-700":r.kind===a(n).WARNING,"bg-accent-300 text-accent-700":r.kind===a(n).ACCENT,"bg-primary-300 text-primary-800":r.kind===a(n).PRIMARY_ALT,"bg-white text-secondary-300 outline outline-1 outline-secondary-alt-300":r.kind===a(n).SECONDARY,"rounded-full":r.rounded}])},[R("div",E,[r.icon?(t(),i(a(h),{key:0,size:a(k).SM,"icon-name":r.icon},null,8,["size","icon-name"])):l("",!0),a(d).default?(t(),i(a(b),{key:1,size:c.value,weight:a(S).SEMI_BOLD,class:"whitespace-nowrap","line-height":""},{default:y(()=>[M(r.$slots,"default")]),_:3},8,["size","weight"])):l("",!0)])],2))}});I.__docgenInfo={exportName:"default",displayName:"ui-badge",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"EBadgeSize"},defaultValue:{func:!1,value:"EBadgeSize.SMALL"}},{name:"kind",required:!1,type:{name:"EBadgeKind"},defaultValue:{func:!1,value:"EBadgeKind.PRIMARY"}},{name:"icon",required:!0,type:{name:"TIconName"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-badge/ui-badge.vue"]};export{n as E,I as _,s as a};
