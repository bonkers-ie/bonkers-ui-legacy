const __vite__fileDeps=["assets/index-BJIqVN78.js","assets/index-DLFvWlwe.js","assets/index-DzNGryp7.js","assets/iframe-Ds8MKZkc.js","assets/index-CcisS4Rv.js","assets/index-DXimoRZY.js","assets/index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as d}from"./iframe-Ds8MKZkc.js";import{r as h,R as o,d as c,C as E,A as R,H as x,D as y}from"./index-DzNGryp7.js";import"../sb-preview/runtime.js";import"./index-CcisS4Rv.js";import"./index-DXimoRZY.js";import"./index-DrFu-skq.js";var u={},i=h;u.createRoot=i.createRoot,u.hydrateRoot=i.hydrateRoot;var n=new Map,D=({callback:e,children:t})=>{let r=c.useRef();return c.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t,r)=>{let s=await w(t,r);return new Promise(a=>{s.render(o.createElement(D,{callback:()=>a(null)},e))})},v=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},w=async(e,t)=>{let r=n.get(e);return r||(r=u.createRoot(e,t),n.set(e,r)),r},f={code:E,a:R,...x},g=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},O=class{constructor(){this.render=async(e,t,r)=>{let s={...f,...t==null?void 0:t.components},a=y;return new Promise((m,p)=>{d(()=>import("./index-BJIqVN78.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>m())})},this.unmount=e=>{v(e)}}};export{O as DocsRenderer,f as defaultComponents};
