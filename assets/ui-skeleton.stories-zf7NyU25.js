import{e as f,l as k,o,g as l,j as e,I as a,J as i,K as x,q as p}from"./vue.esm-bundler-26GhoP0B.js";var t=(s=>(s.RESULT_CARD="RESULT_CARD",s.FILTER_MENU="FILTER_MENU",s))(t||{});const g={key:0,class:"ui-skeleton-card animate-pulse rounded-2xl border-2 border-secondary-alt-300 p-xs"},v=x('<div class="ui-skeleton-card__header flex items-center justify-between rounded-lg bg-secondary-alt-200 p-xs"><div class="flex w-full flex-col items-start"><div class="ui-skeleton-card__content__text my-xs h-md w-full rounded-md bg-secondary-alt-300"></div><div class="ui-skeleton-card__content__text h-md w-5/6 rounded-md bg-secondary-alt-300"></div></div><div class="ui-skeleton-card__header__image my-xxs ml-sm h-xl w-xxl rounded-xl bg-secondary-alt-300"></div></div>',1),y={class:"ui-skeleton-card__content flex flex-col items-start justify-start rounded-lg pt-sm"},b=e("div",{class:"ui-skeleton-card__footer flex flex-row justify-between"},[e("div",{class:"ui-skeleton-card__footer__text h-md w-1/4 self-end rounded-lg bg-secondary-alt-300"}),e("div",{class:"ui-skeleton-card__footer__text h-lg w-1/4 rounded-lg bg-secondary-alt-300"})],-1),h=e("div",{class:"ui-skeleton-card__button mt-xs flex h-md w-full items-center justify-center rounded-lg bg-secondary-alt-300 py-md"},null,-1),w={key:1,class:"ui-skeleton-menu mb-sm flex animate-pulse flex-row items-center justify-between"},R=e("div",{class:"ui-skeleton-menu__result-count h-sm w-full max-w-xxl rounded-md bg-secondary-alt-300"},null,-1),E={class:"ui-skeleton-menu__filters relative flex h-lg w-xxl flex-row gap-x-sm"},d=f({__name:"ui-skeleton",props:{kind:{default:t.RESULT_CARD}},setup(s){const m=s;return(S,T)=>m.kind===k(t).RESULT_CARD?(o(),l("div",g,[v,e("div",y,[(o(),l(a,null,i(["w-1/2","w-1/3","w-2/3","w-3/4"],n=>e("div",{key:n,class:p([`${n}`,"ui-skeleton-card__content__text mb-xs h-md rounded-md bg-secondary-alt-300"])},null,2)),64))]),b,h])):(o(),l("div",w,[R,e("div",E,[(o(),l(a,null,i(2,n=>e("div",{key:n,class:"ui-skeleton-menu__filters__item relative w-xl rounded-md bg-secondary-alt-300"})),64))])]))}});d.__docgenInfo={exportName:"default",displayName:"ui-skeleton",description:"",tags:{},props:[{name:"kind",required:!1,type:{name:"ESkeletonKind"},defaultValue:{func:!1,value:"ESkeletonKind.RESULT_CARD"}}],sourceFiles:["/home/runner/work/bonkers-ui/bonkers-ui/src/components/ui-skeleton/ui-skeleton.vue"]};const L={title:"Components/ui-skeleton",component:d,argTypes:{kind:{control:{type:"select"},options:Object.values(t),description:"The skeleton kind"}},args:{kind:t.RESULT_CARD},render:s=>({components:{UiSkeleton:d},setup(){return{args:s}},template:`
            <ui-skeleton v-bind="args" />
        `,args:{kind:t.RESULT_CARD}})},r={};var c,u,_;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(_=(u=r.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const U=["Default"];export{r as Default,U as __namedExportsOrder,L as default};
