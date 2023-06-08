import{b as Ba,d as Ua,r as Ha,s as Wa}from"./chunk-KSYMO6G6-7e7db57b.js";import{s as Ga}from"./index-d475d2ea.js";import{s as Ka,u as Ee,c as $,r as Xn,n as Va,d as Ft,i as Re,h as Dt,p as vt,a as qa,w as Qn}from"./vue.esm-bundler-fe4d70d2.js";const{start:Xa}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:Qa}=Ga;Qa.STORYBOOK_ENV="vue3";var Za=Xa(Ba,{decorateStory:Ua,render:Ha});Za.clientApi;var qn;typeof module<"u"&&((qn=module==null?void 0:module.hot)==null||qn.decline());/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ue=typeof window<"u";function Ja(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const R=Object.assign;function pt(e,t){const n={};for(const a in t){const r=t[a];n[a]=G(r)?r.map(e):e(r)}return n}const Se=()=>{},G=Array.isArray,er=/\/$/,tr=e=>e.replace(er,"");function ht(e,t,n="/"){let a,r={},i="",o="";const f=t.indexOf("#");let s=t.indexOf("?");return f<s&&f>=0&&(s=-1),s>-1&&(a=t.slice(0,s),i=t.slice(s+1,f>-1?f:t.length),r=e(i)),f>-1&&(a=a||t.slice(0,f),o=t.slice(f,t.length)),a=ir(a??t,n),{fullPath:a+(i&&"?")+i+o,path:a,query:r,hash:o}}function nr(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function on(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ar(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&pe(t.matched[a],n.matched[r])&&Zn(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pe(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rr(e[n],t[n]))return!1;return!0}function rr(e,t){return G(e)?sn(e,t):G(t)?sn(t,e):e===t}function sn(e,t){return G(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function ir(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=n.length-1,o,f;for(o=0;o<a.length;o++)if(f=a[o],f!==".")if(f==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+a.slice(o-(o===a.length?1:0)).join("/")}var _e;(function(e){e.pop="pop",e.push="push"})(_e||(_e={}));var Oe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Oe||(Oe={}));function or(e){if(!e)if(ue){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),tr(e)}const sr=/^[^#]+#/;function lr(e,t){return e.replace(sr,"#")+t}function fr(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const rt=()=>({left:window.pageXOffset,top:window.pageYOffset});function cr(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=fr(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ln(e,t){return(history.state?history.state.position-t:-1)+e}const At=new Map;function ur(e,t){At.set(e,t)}function mr(e){const t=At.get(e);return At.delete(e),t}let dr=()=>location.protocol+"//"+location.host;function Jn(e,t){const{pathname:n,search:a,hash:r}=t,i=e.indexOf("#");if(i>-1){let f=r.includes(e.slice(i))?e.slice(i).length:1,s=r.slice(f);return s[0]!=="/"&&(s="/"+s),on(s,"")}return on(n,e)+a+r}function vr(e,t,n,a){let r=[],i=[],o=null;const f=({state:m})=>{const p=Jn(e,location),w=n.value,O=t.value;let S=0;if(m){if(n.value=p,t.value=m,o&&o===w){o=null;return}S=O?m.position-O.position:0}else a(p);r.forEach(v=>{v(n.value,w,{delta:S,type:_e.pop,direction:S?S>0?Oe.forward:Oe.back:Oe.unknown})})};function s(){o=n.value}function c(m){r.push(m);const p=()=>{const w=r.indexOf(m);w>-1&&r.splice(w,1)};return i.push(p),p}function l(){const{history:m}=window;m.state&&m.replaceState(R({},m.state,{scroll:rt()}),"")}function u(){for(const m of i)m();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:s,listen:c,destroy:u}}function fn(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?rt():null}}function pr(e){const{history:t,location:n}=window,a={value:Jn(e,n)},r={value:t.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(s,c,l){const u=e.indexOf("#"),m=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+s:dr()+e+s;try{t[l?"replaceState":"pushState"](c,"",m),r.value=c}catch(p){console.error(p),n[l?"replace":"assign"](m)}}function o(s,c){const l=R({},t.state,fn(r.value.back,s,r.value.forward,!0),c,{position:r.value.position});i(s,l,!0),a.value=s}function f(s,c){const l=R({},r.value,t.state,{forward:s,scroll:rt()});i(l.current,l,!0);const u=R({},fn(a.value,s,null),{position:l.position+1},c);i(s,u,!1),a.value=s}return{location:a,state:r,push:f,replace:o}}function hr(e){e=or(e);const t=pr(e),n=vr(e,t.state,t.location,t.replace);function a(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=R({location:"",base:e,go:a,createHref:lr.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function gr(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),hr(e)}function br(e){return typeof e=="string"||e&&typeof e=="object"}function ea(e){return typeof e=="string"||typeof e=="symbol"}const ee={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ta=Symbol("");var cn;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(cn||(cn={}));function he(e,t){return R(new Error,{type:e,[ta]:!0},t)}function V(e,t){return e instanceof Error&&ta in e&&(t==null||!!(e.type&t))}const un="[^/]+?",yr={sensitive:!1,strict:!1,start:!0,end:!0},kr=/[.+*?^${}()[\]/\\]/g;function wr(e,t){const n=R({},yr,t),a=[];let r=n.start?"^":"";const i=[];for(const c of e){const l=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const m=c[u];let p=40+(n.sensitive?.25:0);if(m.type===0)u||(r+="/"),r+=m.value.replace(kr,"\\$&"),p+=40;else if(m.type===1){const{value:w,repeatable:O,optional:S,regexp:v}=m;i.push({name:w,repeatable:O,optional:S});const h=v||un;if(h!==un){p+=10;try{new RegExp(`(${h})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${h}): `+C.message)}}let A=O?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(A=S&&c.length<2?`(?:/${A})`:"/"+A),S&&(A+="?"),r+=A,p+=20,S&&(p+=-8),O&&(p+=-20),h===".*"&&(p+=-50)}l.push(p)}a.push(l)}if(n.strict&&n.end){const c=a.length-1;a[c][a[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function f(c){const l=c.match(o),u={};if(!l)return null;for(let m=1;m<l.length;m++){const p=l[m]||"",w=i[m-1];u[w.name]=p&&w.repeatable?p.split("/"):p}return u}function s(c){let l="",u=!1;for(const m of e){(!u||!l.endsWith("/"))&&(l+="/"),u=!1;for(const p of m)if(p.type===0)l+=p.value;else if(p.type===1){const{value:w,repeatable:O,optional:S}=p,v=w in c?c[w]:"";if(G(v)&&!O)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const h=G(v)?v.join("/"):v;if(!h)if(S)m.length<2&&(l.endsWith("/")?l=l.slice(0,-1):u=!0);else throw new Error(`Missing required param "${w}"`);l+=h}}return l||"/"}return{re:o,score:a,keys:i,parse:f,stringify:s}}function xr(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ar(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const i=xr(a[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-a.length)===1){if(mn(a))return 1;if(mn(r))return-1}return r.length-a.length}function mn(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Er={type:0,value:""},Sr=/[a-zA-Z0-9_]/;function Or(e){if(!e)return[[]];if(e==="/")return[[Er]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,a=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let f=0,s,c="",l="";function u(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:l,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=s}for(;f<e.length;){if(s=e[f++],s==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:s==="/"?(c&&u(),o()):s===":"?(u(),n=1):m();break;case 4:m(),n=a;break;case 1:s==="("?n=2:Sr.test(s)?m():(u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--);break;case 2:s===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+s:n=3:l+=s;break;case 3:u(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&f--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}function Pr(e,t,n){const a=wr(Or(e.path),n),r=R(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cr(e,t){const n=[],a=new Map;t=pn({strict:!1,end:!0,sensitive:!1},t);function r(l){return a.get(l)}function i(l,u,m){const p=!m,w=Rr(l);w.aliasOf=m&&m.record;const O=pn(t,l),S=[w];if("alias"in l){const A=typeof l.alias=="string"?[l.alias]:l.alias;for(const C of A)S.push(R({},w,{components:m?m.record.components:w.components,path:C,aliasOf:m?m.record:w}))}let v,h;for(const A of S){const{path:C}=A;if(u&&C[0]!=="/"){const _=u.record.path,L=_[_.length-1]==="/"?"":"/";A.path=u.record.path+(C&&L+C)}if(v=Pr(A,u,O),m?m.alias.push(v):(h=h||v,h!==v&&h.alias.push(v),p&&l.name&&!vn(v)&&o(l.name)),w.children){const _=w.children;for(let L=0;L<_.length;L++)i(_[L],v,m&&m.children[L])}m=m||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&s(v)}return h?()=>{o(h)}:Se}function o(l){if(ea(l)){const u=a.get(l);u&&(a.delete(l),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(l);u>-1&&(n.splice(u,1),l.record.name&&a.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function f(){return n}function s(l){let u=0;for(;u<n.length&&Ar(l,n[u])>=0&&(l.record.path!==n[u].record.path||!na(l,n[u]));)u++;n.splice(u,0,l),l.record.name&&!vn(l)&&a.set(l.record.name,l)}function c(l,u){let m,p={},w,O;if("name"in l&&l.name){if(m=a.get(l.name),!m)throw he(1,{location:l});O=m.record.name,p=R(dn(u.params,m.keys.filter(h=>!h.optional).map(h=>h.name)),l.params&&dn(l.params,m.keys.map(h=>h.name))),w=m.stringify(p)}else if("path"in l)w=l.path,m=n.find(h=>h.re.test(w)),m&&(p=m.parse(w),O=m.record.name);else{if(m=u.name?a.get(u.name):n.find(h=>h.re.test(u.path)),!m)throw he(1,{location:l,currentLocation:u});O=m.record.name,p=R({},u.params,l.params),w=m.stringify(p)}const S=[];let v=m;for(;v;)S.unshift(v.record),v=v.parent;return{name:O,path:w,params:p,matched:S,meta:Nr(S)}}return e.forEach(l=>i(l)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:f,getRecordMatcher:r}}function dn(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Rr(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_r(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _r(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="boolean"?n:n[a];return t}function vn(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Nr(e){return e.reduce((t,n)=>R(t,n.meta),{})}function pn(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}function na(e,t){return t.children.some(n=>n===e||na(e,n))}const aa=/#/g,Ir=/&/g,Tr=/\//g,Mr=/=/g,Lr=/\?/g,ra=/\+/g,zr=/%5B/g,jr=/%5D/g,ia=/%5E/g,Fr=/%60/g,oa=/%7B/g,Dr=/%7C/g,sa=/%7D/g,$r=/%20/g;function $t(e){return encodeURI(""+e).replace(Dr,"|").replace(zr,"[").replace(jr,"]")}function Yr(e){return $t(e).replace(oa,"{").replace(sa,"}").replace(ia,"^")}function Et(e){return $t(e).replace(ra,"%2B").replace($r,"+").replace(aa,"%23").replace(Ir,"%26").replace(Fr,"`").replace(oa,"{").replace(sa,"}").replace(ia,"^")}function Br(e){return Et(e).replace(Mr,"%3D")}function Ur(e){return $t(e).replace(aa,"%23").replace(Lr,"%3F")}function Hr(e){return e==null?"":Ur(e).replace(Tr,"%2F")}function Je(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Wr(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(ra," "),o=i.indexOf("="),f=Je(o<0?i:i.slice(0,o)),s=o<0?null:Je(i.slice(o+1));if(f in t){let c=t[f];G(c)||(c=t[f]=[c]),c.push(s)}else t[f]=s}return t}function hn(e){let t="";for(let n in e){const a=e[n];if(n=Br(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(G(a)?a.map(i=>i&&Et(i)):[a&&Et(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Gr(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=G(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const Kr=Symbol(""),gn=Symbol(""),Yt=Symbol(""),la=Symbol(""),St=Symbol("");function xe(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ne(e,t,n,a,r){const i=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((o,f)=>{const s=u=>{u===!1?f(he(4,{from:n,to:t})):u instanceof Error?f(u):br(u)?f(he(2,{from:t,to:u})):(i&&a.enterCallbacks[r]===i&&typeof u=="function"&&i.push(u),o())},c=e.call(a&&a.instances[r],t,n,s);let l=Promise.resolve(c);e.length<3&&(l=l.then(s)),l.catch(u=>f(u))})}function gt(e,t,n,a){const r=[];for(const i of e)for(const o in i.components){let f=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Vr(f)){const c=(f.__vccOpts||f)[t];c&&r.push(ne(c,n,a,i,o))}else{let s=f();r.push(()=>s.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Ja(c)?c.default:c;i.components[o]=l;const m=(l.__vccOpts||l)[t];return m&&ne(m,n,a,i,o)()}))}}return r}function Vr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bn(e){const t=Re(Yt),n=Re(la),a=$(()=>t.resolve(Ee(e.to))),r=$(()=>{const{matched:s}=a.value,{length:c}=s,l=s[c-1],u=n.matched;if(!l||!u.length)return-1;const m=u.findIndex(pe.bind(null,l));if(m>-1)return m;const p=yn(s[c-2]);return c>1&&yn(l)===p&&u[u.length-1].path!==p?u.findIndex(pe.bind(null,s[c-2])):m}),i=$(()=>r.value>-1&&Zr(n.params,a.value.params)),o=$(()=>r.value>-1&&r.value===n.matched.length-1&&Zn(n.params,a.value.params));function f(s={}){return Qr(s)?t[Ee(e.replace)?"replace":"push"](Ee(e.to)).catch(Se):Promise.resolve()}return{route:a,href:$(()=>a.value.href),isActive:i,isExactActive:o,navigate:f}}const qr=Ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bn,setup(e,{slots:t}){const n=Xn(bn(e)),{options:a}=Re(Yt),r=$(()=>({[kn(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[kn(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Dt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Xr=qr;function Qr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zr(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!G(r)||r.length!==a.length||a.some((i,o)=>i!==r[o]))return!1}return!0}function yn(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const kn=(e,t,n)=>e??t??n,Jr=Ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Re(St),r=$(()=>e.route||a.value),i=Re(gn,0),o=$(()=>{let c=Ee(i);const{matched:l}=r.value;let u;for(;(u=l[c])&&!u.components;)c++;return c}),f=$(()=>r.value.matched[o.value]);vt(gn,$(()=>o.value+1)),vt(Kr,f),vt(St,r);const s=qa();return Qn(()=>[s.value,f.value,e.name],([c,l,u],[m,p,w])=>{l&&(l.instances[u]=c,p&&p!==l&&c&&c===m&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!pe(l,p)||!m)&&(l.enterCallbacks[u]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=r.value,l=e.name,u=f.value,m=u&&u.components[l];if(!m)return wn(n.default,{Component:m,route:c});const p=u.props[l],w=p?p===!0?c.params:typeof p=="function"?p(c):p:null,S=Dt(m,R({},w,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(u.instances[l]=null)},ref:s}));return wn(n.default,{Component:S,route:c})||S}}});function wn(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ei=Jr;function ti(e){const t=Cr(e.routes,e),n=e.parseQuery||Wr,a=e.stringifyQuery||hn,r=e.history,i=xe(),o=xe(),f=xe(),s=Ka(ee);let c=ee;ue&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=pt.bind(null,d=>""+d),u=pt.bind(null,Hr),m=pt.bind(null,Je);function p(d,y){let g,x;return ea(d)?(g=t.getRecordMatcher(d),x=y):x=d,t.addRoute(x,g)}function w(d){const y=t.getRecordMatcher(d);y&&t.removeRoute(y)}function O(){return t.getRoutes().map(d=>d.record)}function S(d){return!!t.getRecordMatcher(d)}function v(d,y){if(y=R({},y||s.value),typeof d=="string"){const E=ht(n,d,y.path),j=t.resolve({path:E.path},y),we=r.createHref(E.fullPath);return R(E,j,{params:m(j.params),hash:Je(E.hash),redirectedFrom:void 0,href:we})}let g;if("path"in d)g=R({},d,{path:ht(n,d.path,y.path).path});else{const E=R({},d.params);for(const j in E)E[j]==null&&delete E[j];g=R({},d,{params:u(E)}),y.params=u(y.params)}const x=t.resolve(g,y),N=d.hash||"";x.params=l(m(x.params));const z=nr(a,R({},d,{hash:Yr(N),path:x.path})),P=r.createHref(z);return R({fullPath:z,hash:N,query:a===hn?Gr(d.query):d.query||{}},x,{redirectedFrom:void 0,href:P})}function h(d){return typeof d=="string"?ht(n,d,s.value.path):R({},d)}function A(d,y){if(c!==d)return he(8,{from:y,to:d})}function C(d){return D(d)}function _(d){return C(R(h(d),{replace:!0}))}function L(d){const y=d.matched[d.matched.length-1];if(y&&y.redirect){const{redirect:g}=y;let x=typeof g=="function"?g(d):g;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=h(x):{path:x},x.params={}),R({query:d.query,hash:d.hash,params:"path"in x?{}:d.params},x)}}function D(d,y){const g=c=v(d),x=s.value,N=d.state,z=d.force,P=d.replace===!0,E=L(g);if(E)return D(R(h(E),{state:typeof E=="object"?R({},N,E.state):N,force:z,replace:P}),y||g);const j=g;j.redirectedFrom=y;let we;return!z&&ar(a,x,g)&&(we=he(16,{to:j,from:x}),rn(x,x,!0,!1)),(we?Promise.resolve(we):De(j,x)).catch(Y=>V(Y)?V(Y,2)?Y:ut(Y):ct(Y,j,x)).then(Y=>{if(Y){if(V(Y,2))return D(R({replace:P},h(Y.to),{state:typeof Y.to=="object"?R({},N,Y.to.state):N,force:z}),y||j)}else Y=nn(j,x,!0,P,N);return tn(j,x,Y),Y})}function ye(d,y){const g=A(d,y);return g?Promise.reject(g):Promise.resolve()}function H(d){const y=Ye.values().next().value;return y&&typeof y.runWithContext=="function"?y.runWithContext(d):d()}function De(d,y){let g;const[x,N,z]=ni(d,y);g=gt(x.reverse(),"beforeRouteLeave",d,y);for(const E of x)E.leaveGuards.forEach(j=>{g.push(ne(j,d,y))});const P=ye.bind(null,d,y);return g.push(P),ce(g).then(()=>{g=[];for(const E of i.list())g.push(ne(E,d,y));return g.push(P),ce(g)}).then(()=>{g=gt(N,"beforeRouteUpdate",d,y);for(const E of N)E.updateGuards.forEach(j=>{g.push(ne(j,d,y))});return g.push(P),ce(g)}).then(()=>{g=[];for(const E of d.matched)if(E.beforeEnter&&!y.matched.includes(E))if(G(E.beforeEnter))for(const j of E.beforeEnter)g.push(ne(j,d,y));else g.push(ne(E.beforeEnter,d,y));return g.push(P),ce(g)}).then(()=>(d.matched.forEach(E=>E.enterCallbacks={}),g=gt(z,"beforeRouteEnter",d,y),g.push(P),ce(g))).then(()=>{g=[];for(const E of o.list())g.push(ne(E,d,y));return g.push(P),ce(g)}).catch(E=>V(E,8)?E:Promise.reject(E))}function tn(d,y,g){for(const x of f.list())H(()=>x(d,y,g))}function nn(d,y,g,x,N){const z=A(d,y);if(z)return z;const P=y===ee,E=ue?history.state:{};g&&(x||P?r.replace(d.fullPath,R({scroll:P&&E&&E.scroll},N)):r.push(d.fullPath,N)),s.value=d,rn(d,y,g,P),ut()}let ke;function Da(){ke||(ke=r.listen((d,y,g)=>{const x=v(d),N=L(x);if(N){D(R(N,{replace:!0}),x).catch(Se);return}c=x;const z=s.value;ue&&ur(ln(z.fullPath,g.delta),rt()),De(x,z).catch(P=>V(P,12)?P:V(P,2)?(D(P.to,x).then(E=>{V(E,20)&&!g.delta&&g.type===_e.pop&&r.go(-1,!1)}).catch(Se),Promise.reject()):(g.delta&&r.go(-g.delta,!1),ct(P,x,z))).then(P=>{P=P||nn(x,z,!1),P&&(g.delta&&!V(P,8)?r.go(-g.delta,!1):g.type===_e.pop&&V(P,20)&&r.go(-1,!1)),tn(x,z,P)}).catch(Se)}))}let ft=xe(),an=xe(),$e;function ct(d,y,g){ut(d);const x=an.list();return x.length?x.forEach(N=>N(d,y,g)):console.error(d),Promise.reject(d)}function $a(){return $e&&s.value!==ee?Promise.resolve():new Promise((d,y)=>{ft.add([d,y])})}function ut(d){return $e||($e=!d,Da(),ft.list().forEach(([y,g])=>d?g(d):y()),ft.reset()),d}function rn(d,y,g,x){const{scrollBehavior:N}=e;if(!ue||!N)return Promise.resolve();const z=!g&&mr(ln(d.fullPath,0))||(x||!g)&&history.state&&history.state.scroll||null;return Va().then(()=>N(d,y,z)).then(P=>P&&cr(P)).catch(P=>ct(P,d,y))}const mt=d=>r.go(d);let dt;const Ye=new Set,Ya={currentRoute:s,listening:!0,addRoute:p,removeRoute:w,hasRoute:S,getRoutes:O,resolve:v,options:e,push:C,replace:_,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:f.add,onError:an.add,isReady:$a,install(d){const y=this;d.component("RouterLink",Xr),d.component("RouterView",ei),d.config.globalProperties.$router=y,Object.defineProperty(d.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(s)}),ue&&!dt&&s.value===ee&&(dt=!0,C(r.location).catch(N=>{}));const g={};for(const N in ee)g[N]=$(()=>s.value[N]);d.provide(Yt,y),d.provide(la,Xn(g)),d.provide(St,s);const x=d.unmount;Ye.add(d),d.unmount=function(){Ye.delete(d),Ye.size<1&&(c=ee,ke&&ke(),ke=null,s.value=ee,dt=!1,$e=!1),x()}}};function ce(d){return d.reduce((y,g)=>y.then(()=>H(g)),Promise.resolve())}return Ya}function ni(e,t){const n=[],a=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const f=t.matched[o];f&&(e.matched.find(c=>pe(c,f))?a.push(f):n.push(f));const s=e.matched[o];s&&(t.matched.find(c=>pe(c,s))||r.push(s))}return[n,a,r]}function xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xn(Object(n),!0).forEach(function(a){F(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function et(e){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(e)}function ai(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function An(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ri(e,t,n){return t&&An(e.prototype,t),n&&An(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bt(e,t){return oi(e)||li(e,t)||fa(e,t)||ci()}function ze(e){return ii(e)||si(e)||fa(e)||fi()}function ii(e){if(Array.isArray(e))return Ot(e)}function oi(e){if(Array.isArray(e))return e}function si(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function li(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,f;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(s){i=!0,f=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw f}}return a}}function fa(e,t){if(e){if(typeof e=="string")return Ot(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(e,t)}}function Ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function fi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ci(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var En=function(){},Ut={},ca={},ua=null,ma={mark:En,measure:En};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(ca=document),typeof MutationObserver<"u"&&(ua=MutationObserver),typeof performance<"u"&&(ma=performance)}catch{}var ui=Ut.navigator||{},Sn=ui.userAgent,On=Sn===void 0?"":Sn,ae=Ut,T=ca,Pn=ua,Be=ma;ae.document;var J=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",da=~On.indexOf("MSIE")||~On.indexOf("Trident/"),Ue,He,We,Ge,Ke,X="___FONT_AWESOME___",Pt=16,va="fa",pa="svg-inline--fa",le="data-fa-i2svg",Ct="data-fa-pseudo-element",mi="data-fa-pseudo-element-pending",Ht="data-prefix",Wt="data-icon",Cn="fontawesome-i2svg",di="async",vi=["HTML","HEAD","STYLE","SCRIPT"],ha=function(){try{return!0}catch{return!1}}(),I="classic",M="sharp",Gt=[I,M];function je(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[I]}})}var Ne=je((Ue={},F(Ue,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),F(Ue,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ue)),Ie=je((He={},F(He,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F(He,M,{solid:"fass",regular:"fasr",light:"fasl"}),He)),Te=je((We={},F(We,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F(We,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),We)),pi=je((Ge={},F(Ge,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F(Ge,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ge)),hi=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ga="fa-layers-text",gi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bi=je((Ke={},F(Ke,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F(Ke,M,{900:"fass",400:"fasr",300:"fasl"}),Ke)),ba=[1,2,3,4,5,6,7,8,9,10],yi=ba.concat([11,12,13,14,15,16,17,18,19,20]),ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Me=new Set;Object.keys(Ie[I]).map(Me.add.bind(Me));Object.keys(Ie[M]).map(Me.add.bind(Me));var wi=[].concat(Gt,ze(Me),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(ba.map(function(e){return"".concat(e,"x")})).concat(yi.map(function(e){return"w-".concat(e)})),Pe=ae.FontAwesomeConfig||{};function xi(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ai(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ei=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ei.forEach(function(e){var t=Bt(e,2),n=t[0],a=t[1],r=Ai(xi(n));r!=null&&(Pe[a]=r)})}var ya={styleDefault:"solid",familyDefault:"classic",cssPrefix:va,replacementClass:pa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pe.familyPrefix&&(Pe.cssPrefix=Pe.familyPrefix);var ge=b(b({},ya),Pe);ge.autoReplaceSvg||(ge.observeMutations=!1);var k={};Object.keys(ya).forEach(function(e){Object.defineProperty(k,e,{enumerable:!0,set:function(n){ge[e]=n,Ce.forEach(function(a){return a(k)})},get:function(){return ge[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){ge.cssPrefix=t,Ce.forEach(function(n){return n(k)})},get:function(){return ge.cssPrefix}});ae.FontAwesomeConfig=k;var Ce=[];function Si(e){return Ce.push(e),function(){Ce.splice(Ce.indexOf(e),1)}}var te=Pt,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oi(e){if(!(!e||!J)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return T.head.insertBefore(t,a),e}}var Pi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Le(){for(var e=12,t="";e-- >0;)t+=Pi[Math.random()*62|0];return t}function be(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kt(e){return e.classList?be(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ka(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ci(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ka(e[n]),'" ')},"").trim()}function it(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Vt(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function Ri(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(f)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:c}}function _i(e){var t=e.transform,n=e.width,a=n===void 0?Pt:n,r=e.height,i=r===void 0?Pt:r,o=e.startCentered,f=o===void 0?!1:o,s="";return f&&da?s+="translate(".concat(t.x/te-a/2,"em, ").concat(t.y/te-i/2,"em) "):f?s+="translate(calc(-50% + ".concat(t.x/te,"em), calc(-50% + ").concat(t.y/te,"em)) "):s+="translate(".concat(t.x/te,"em, ").concat(t.y/te,"em) "),s+="scale(".concat(t.size/te*(t.flipX?-1:1),", ").concat(t.size/te*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ni=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wa(){var e=va,t=pa,n=k.cssPrefix,a=k.replacementClass,r=Ni;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(f,".".concat(a))}return r}var Rn=!1;function bt(){k.autoAddCss&&!Rn&&(Oi(wa()),Rn=!0)}var Ii={mixout:function(){return{dom:{css:wa,insertCss:bt}}},hooks:function(){return{beforeDOMElementCreation:function(){bt()},beforeI2svg:function(){bt()}}}},Q=ae||{};Q[X]||(Q[X]={});Q[X].styles||(Q[X].styles={});Q[X].hooks||(Q[X].hooks={});Q[X].shims||(Q[X].shims=[]);var W=Q[X],xa=[],Ti=function e(){T.removeEventListener("DOMContentLoaded",e),tt=1,xa.map(function(t){return t()})},tt=!1;J&&(tt=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),tt||T.addEventListener("DOMContentLoaded",Ti));function Mi(e){J&&(tt?setTimeout(e,0):xa.push(e))}function Fe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?ka(e):"<".concat(t," ").concat(Ci(a),">").concat(i.map(Fe).join(""),"</").concat(t,">")}function _n(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Li=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},yt=function(t,n,a,r){var i=Object.keys(t),o=i.length,f=r!==void 0?Li(n,r):n,s,c,l;for(a===void 0?(s=1,l=t[i[0]]):(s=0,l=a);s<o;s++)c=i[s],l=f(l,t[c],c,t);return l};function zi(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Rt(e){var t=zi(e);return t.length===1?t[0].toString(16):null}function ji(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function _t(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Nn(t);typeof W.hooks.addPack=="function"&&!r?W.hooks.addPack(e,Nn(t)):W.styles[e]=b(b({},W.styles[e]||{}),i),e==="fas"&&_t("fa",t)}var Ve,qe,Xe,me=W.styles,Fi=W.shims,Di=(Ve={},F(Ve,I,Object.values(Te[I])),F(Ve,M,Object.values(Te[M])),Ve),qt=null,Aa={},Ea={},Sa={},Oa={},Pa={},$i=(qe={},F(qe,I,Object.keys(Ne[I])),F(qe,M,Object.keys(Ne[M])),qe);function Yi(e){return~wi.indexOf(e)}function Bi(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Yi(r)?r:null}var Ca=function(){var t=function(i){return yt(me,function(o,f,s){return o[s]=yt(f,i,{}),o},{})};Aa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var f=i[2].filter(function(s){return typeof s=="number"});f.forEach(function(s){r[s.toString(16)]=o})}return r}),Ea=t(function(r,i,o){if(r[o]=o,i[2]){var f=i[2].filter(function(s){return typeof s=="string"});f.forEach(function(s){r[s]=o})}return r}),Pa=t(function(r,i,o){var f=i[2];return r[o]=o,f.forEach(function(s){r[s]=o}),r});var n="far"in me||k.autoFetchSvg,a=yt(Fi,function(r,i){var o=i[0],f=i[1],s=i[2];return f==="far"&&!n&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:s}),r},{names:{},unicodes:{}});Sa=a.names,Oa=a.unicodes,qt=ot(k.styleDefault,{family:k.familyDefault})};Si(function(e){qt=ot(e.styleDefault,{family:k.familyDefault})});Ca();function Xt(e,t){return(Aa[e]||{})[t]}function Ui(e,t){return(Ea[e]||{})[t]}function se(e,t){return(Pa[e]||{})[t]}function Ra(e){return Sa[e]||{prefix:null,iconName:null}}function Hi(e){var t=Oa[e],n=Xt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return qt}var Qt=function(){return{prefix:null,iconName:null,rest:[]}};function ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?I:n,r=Ne[a][e],i=Ie[a][e]||Ie[a][r],o=e in W.styles?e:null;return i||o||null}var In=(Xe={},F(Xe,I,Object.keys(Te[I])),F(Xe,M,Object.keys(Te[M])),Xe);function st(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},F(t,I,"".concat(k.cssPrefix,"-").concat(I)),F(t,M,"".concat(k.cssPrefix,"-").concat(M)),t),o=null,f=I;(e.includes(i[I])||e.some(function(c){return In[I].includes(c)}))&&(f=I),(e.includes(i[M])||e.some(function(c){return In[M].includes(c)}))&&(f=M);var s=e.reduce(function(c,l){var u=Bi(k.cssPrefix,l);if(me[l]?(l=Di[f].includes(l)?pi[f][l]:l,o=l,c.prefix=l):$i[f].indexOf(l)>-1?(o=l,c.prefix=ot(l,{family:f})):u?c.iconName=u:l!==k.replacementClass&&l!==i[I]&&l!==i[M]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var m=o==="fa"?Ra(c.iconName):{},p=se(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||p||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!me.far&&me.fas&&!k.autoFetchSvg&&(c.prefix="fas")}return c},Qt());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&f===M&&(me.fass||k.autoFetchSvg)&&(s.prefix="fass",s.iconName=se(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=re()||"fas"),s}var Wi=function(){function e(){ai(this,e),this.definitions={}}return ri(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){n.definitions[f]=b(b({},n.definitions[f]||{}),o[f]),_t(f,o[f]);var s=Te[I][f];s&&_t(s,o[f]),Ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,s=o.iconName,c=o.icon,l=c[2];n[f]||(n[f]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(n[f][u]=c)}),n[f][s]=c}),n}}]),e}(),Tn=[],de={},ve={},Gi=Object.keys(ve);function Ki(e,t){var n=t.mixoutsTo;return Tn=e,de={},Object.keys(ve).forEach(function(a){Gi.indexOf(a)===-1&&delete ve[a]}),Tn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),et(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){n[o]||(n[o]={}),n[o][f]=r[o][f]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){de[o]||(de[o]=[]),de[o].push(i[o])})}a.provides&&a.provides(ve)}),n}function Nt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=de[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=de[e]||[];r.forEach(function(i){i.apply(null,n)})}function Z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ve[e]?ve[e].apply(null,t):void 0}function It(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||re();if(t)return t=se(n,t)||t,_n(_a.definitions,n,t)||_n(W.styles,n,t)}var _a=new Wi,Vi=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,fe("noAuto")},qi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(fe("beforeI2svg",t),Z("pseudoElements2svg",t),Z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Mi(function(){Qi({autoReplaceSvgRoot:n}),fe("watch",t)})}},Xi={icon:function(t){if(t===null)return null;if(et(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:se(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ot(t[0]);return{prefix:a,iconName:se(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(hi))){var r=st(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:se(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=re();return{prefix:i,iconName:se(i,t)||t}}}},U={noAuto:Vi,config:k,dom:qi,parse:Xi,library:_a,findIconDefinition:It,toHtml:Fe},Qi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(W.styles).length>0||k.autoFetchSvg)&&J&&k.autoReplaceSvg&&U.dom.i2svg({node:a})};function lt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Fe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(J){var a=T.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Zi(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Vt(o)&&n.found&&!a.found){var f=n.width,s=n.height,c={x:f/s/2,y:.5};r.style=it(b(b({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ji(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:o}),children:a}]}]}function Zt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,f=e.symbol,s=e.title,c=e.maskId,l=e.titleId,u=e.extra,m=e.watchable,p=m===void 0?!1:m,w=a.found?a:n,O=w.width,S=w.height,v=r==="fak",h=[k.replacementClass,i?"".concat(k.cssPrefix,"-").concat(i):""].filter(function(H){return u.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(u.classes).join(" "),A={children:[],attributes:b(b({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(S)})},C=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/S*16*.0625,"em")}:{};p&&(A.attributes[le]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||Le())},children:[s]}),delete A.attributes.title);var _=b(b({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:f,styles:b(b({},C),u.styles)}),L=a.found&&n.found?Z("generateAbstractMask",_)||{children:[],attributes:{}}:Z("generateAbstractIcon",_)||{children:[],attributes:{}},D=L.children,ye=L.attributes;return _.children=D,_.attributes=ye,f?Ji(_):Zi(_)}function Mn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,f=e.watchable,s=f===void 0?!1:f,c=b(b(b({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[le]="");var l=b({},o.styles);Vt(r)&&(l.transform=_i({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var u=it(l);u.length>0&&(c.style=u);var m=[];return m.push({tag:"span",attributes:c,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function eo(e){var t=e.content,n=e.title,a=e.extra,r=b(b(b({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=it(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kt=W.styles;function Tt(e){var t=e[0],n=e[1],a=e.slice(4),r=Bt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var to={found:!1,width:512,height:512};function no(e,t){!ha&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mt(e,t){var n=t;return t==="fa"&&k.styleDefault!==null&&(t=re()),new Promise(function(a,r){if(Z("missingIconAbstract"),n==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kt[t]&&kt[t][e]){var o=kt[t][e];return a(Tt(o))}no(e,t),a(b(b({},to),{},{icon:k.showMissingIcons&&e?Z("missingIconAbstract")||{}:{}}))})}var Ln=function(){},Lt=k.measurePerformance&&Be&&Be.mark&&Be.measure?Be:{mark:Ln,measure:Ln},Ae='FA "6.4.0"',ao=function(t){return Lt.mark("".concat(Ae," ").concat(t," begins")),function(){return Na(t)}},Na=function(t){Lt.mark("".concat(Ae," ").concat(t," ends")),Lt.measure("".concat(Ae," ").concat(t),"".concat(Ae," ").concat(t," begins"),"".concat(Ae," ").concat(t," ends"))},Jt={begin:ao,end:Na},Qe=function(){};function zn(e){var t=e.getAttribute?e.getAttribute(le):null;return typeof t=="string"}function ro(e){var t=e.getAttribute?e.getAttribute(Ht):null,n=e.getAttribute?e.getAttribute(Wt):null;return t&&n}function io(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function oo(){if(k.autoReplaceSvg===!0)return Ze.replace;var e=Ze[k.autoReplaceSvg];return e||Ze.replace}function so(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function lo(e){return T.createElement(e)}function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?so:lo:n;if(typeof e=="string")return T.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ia(o,{ceFn:a}))}),r}function fo(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ze={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Ia(r),n)}),n.getAttribute(le)===null&&k.keepOriginalSource){var a=T.createComment(fo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Kt(n).indexOf(k.replacementClass))return Ze.replace(t);var r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(f,s){return s===k.replacementClass||s.match(r)?f.toSvg.push(s):f.toNode.push(s),f},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(f){return Fe(f)}).join(`
`);n.setAttribute(le,""),n.innerHTML=o}};function jn(e){e()}function Ta(e,t){var n=typeof t=="function"?t:Qe;if(e.length===0)n();else{var a=jn;k.mutateApproach===di&&(a=ae.requestAnimationFrame||jn),a(function(){var r=oo(),i=Jt.begin("mutate");e.map(r),i(),n()})}}var en=!1;function Ma(){en=!0}function zt(){en=!1}var nt=null;function Fn(e){if(Pn&&k.observeMutations){var t=e.treeCallback,n=t===void 0?Qe:t,a=e.nodeCallback,r=a===void 0?Qe:a,i=e.pseudoElementsCallback,o=i===void 0?Qe:i,f=e.observeMutationsRoot,s=f===void 0?T:f;nt=new Pn(function(c){if(!en){var l=re();be(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!zn(u.addedNodes[0])&&(k.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&k.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&zn(u.target)&&~ki.indexOf(u.attributeName))if(u.attributeName==="class"&&ro(u.target)){var m=st(Kt(u.target)),p=m.prefix,w=m.iconName;u.target.setAttribute(Ht,p||l),w&&u.target.setAttribute(Wt,w)}else io(u.target)&&r(u.target)})}}),J&&nt.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function co(){nt&&nt.disconnect()}function uo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],f=i.slice(1);return o&&f.length>0&&(a[o]=f.join(":").trim()),a},{})),n}function mo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=st(Kt(e));return r.prefix||(r.prefix=re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ui(r.prefix,e.innerText)||Xt(r.prefix,Rt(e.innerText))),!r.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function vo(e){var t=be(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(a||Le()):(t["aria-hidden"]="true",t.focusable="false")),t}function po(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=mo(e),a=n.iconName,r=n.prefix,i=n.rest,o=vo(e),f=Nt("parseNodeAttributes",{},e),s=t.styleParser?uo(e):[];return b({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},f)}var ho=W.styles;function La(e){var t=k.autoReplaceSvg==="nest"?Dn(e,{styleParser:!1}):Dn(e);return~t.extra.classes.indexOf(ga)?Z("generateLayersText",e,t):Z("generateSvgReplacementMutation",e,t)}var ie=new Set;Gt.map(function(e){ie.add("fa-".concat(e))});Object.keys(Ne[I]).map(ie.add.bind(ie));Object.keys(Ne[M]).map(ie.add.bind(ie));ie=ze(ie);function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();var n=T.documentElement.classList,a=function(u){return n.add("".concat(Cn,"-").concat(u))},r=function(u){return n.remove("".concat(Cn,"-").concat(u))},i=k.autoFetchSvg?ie:Gt.map(function(l){return"fa-".concat(l)}).concat(Object.keys(ho));i.includes("fa")||i.push("fa");var o=[".".concat(ga,":not([").concat(le,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=be(e.querySelectorAll(o))}catch{}if(f.length>0)a("pending"),r("complete");else return Promise.resolve();var s=Jt.begin("onTree"),c=f.reduce(function(l,u){try{var m=La(u);m&&l.push(m)}catch(p){ha||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,u){Promise.all(c).then(function(m){Ta(m,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),s(),l()})}).catch(function(m){s(),u(m)})})}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;La(e).then(function(n){n&&Ta([n],t)})}function bo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:It(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:It(r||{})),e(a,b(b({},n),{},{mask:r}))}}var yo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?K:a,i=n.symbol,o=i===void 0?!1:i,f=n.mask,s=f===void 0?null:f,c=n.maskId,l=c===void 0?null:c,u=n.title,m=u===void 0?null:u,p=n.titleId,w=p===void 0?null:p,O=n.classes,S=O===void 0?[]:O,v=n.attributes,h=v===void 0?{}:v,A=n.styles,C=A===void 0?{}:A;if(t){var _=t.prefix,L=t.iconName,D=t.icon;return lt(b({type:"icon"},t),function(){return fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),k.autoA11y&&(m?h["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(w||Le()):(h["aria-hidden"]="true",h.focusable="false")),Zt({icons:{main:Tt(D),mask:s?Tt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:L,transform:b(b({},K),r),symbol:o,title:m,maskId:l,titleId:w,extra:{attributes:h,styles:C,classes:S}})})}},ko={mixout:function(){return{icon:bo(yo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$n,n.nodeCallback=go,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?T:a,i=n.callback,o=i===void 0?function(){}:i;return $n(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,f=a.prefix,s=a.transform,c=a.symbol,l=a.mask,u=a.maskId,m=a.extra;return new Promise(function(p,w){Promise.all([Mt(r,f),l.iconName?Mt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var S=Bt(O,2),v=S[0],h=S[1];p([n,Zt({icons:{main:v,mask:h},prefix:f,iconName:r,transform:s,symbol:c,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,f=n.styles,s=it(f);s.length>0&&(r.style=s);var c;return Vt(o)&&(c=Z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},wo={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return lt({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(f){Array.isArray(f)?f.map(function(s){o=o.concat(s.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(ze(i)).join(" ")},children:o}]})}}}},xo={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,f=o===void 0?[]:o,s=a.attributes,c=s===void 0?{}:s,l=a.styles,u=l===void 0?{}:l;return lt({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),eo({content:n.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(ze(f))}})})}}}},Ao={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?K:r,o=a.title,f=o===void 0?null:o,s=a.classes,c=s===void 0?[]:s,l=a.attributes,u=l===void 0?{}:l,m=a.styles,p=m===void 0?{}:m;return lt({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:a}),Mn({content:n,transform:b(b({},K),i),title:f,extra:{attributes:u,styles:p,classes:["".concat(k.cssPrefix,"-layers-text")].concat(ze(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,f=null,s=null;if(da){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();f=l.width/c,s=l.height/c}return k.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Mn({content:n.innerHTML,width:f,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},Eo=new RegExp('"',"ug"),Yn=[1105920,1112319];function So(e){var t=e.replace(Eo,""),n=ji(t,0),a=n>=Yn[0]&&n<=Yn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Rt(r?t[0]:t),isSecondary:a||r}}function Bn(e,t){var n="".concat(mi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=be(e.children),o=i.filter(function(D){return D.getAttribute(Ct)===t})[0],f=ae.getComputedStyle(e,t),s=f.getPropertyValue("font-family").match(gi),c=f.getPropertyValue("font-weight"),l=f.getPropertyValue("content");if(o&&!s)return e.removeChild(o),a();if(s&&l!=="none"&&l!==""){var u=f.getPropertyValue("content"),m=~["Sharp"].indexOf(s[2])?M:I,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ie[m][s[2].toLowerCase()]:bi[m][c],w=So(u),O=w.value,S=w.isSecondary,v=s[0].startsWith("FontAwesome"),h=Xt(p,O),A=h;if(v){var C=Hi(O);C.iconName&&C.prefix&&(h=C.iconName,p=C.prefix)}if(h&&!S&&(!o||o.getAttribute(Ht)!==p||o.getAttribute(Wt)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var _=po(),L=_.extra;L.attributes[Ct]=t,Mt(h,p).then(function(D){var ye=Zt(b(b({},_),{},{icons:{main:D,mask:Qt()},prefix:p,iconName:A,extra:L,watchable:!0})),H=T.createElement("svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=ye.map(function(De){return Fe(De)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Oo(e){return Promise.all([Bn(e,"::before"),Bn(e,"::after")])}function Po(e){return e.parentNode!==document.head&&!~vi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ct)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Un(e){if(J)return new Promise(function(t,n){var a=be(e.querySelectorAll("*")).filter(Po).map(Oo),r=Jt.begin("searchPseudoElements");Ma(),Promise.all(a).then(function(){r(),zt(),t()}).catch(function(){r(),zt(),n()})})}var Co={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Un,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;k.searchPseudoElements&&Un(r)}}},Hn=!1,Ro={mixout:function(){return{dom:{unwatch:function(){Ma(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){Fn(Nt("mutationObserverCallbacks",{}))},noAuto:function(){co()},watch:function(n){var a=n.observeMutationsRoot;Hn?zt():Fn(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],f=i.slice(1).join("-");if(o&&f==="h")return a.flipX=!0,a;if(o&&f==="v")return a.flipY=!0,a;if(f=parseFloat(f),isNaN(f))return a;switch(o){case"grow":a.size=a.size+f;break;case"shrink":a.size=a.size-f;break;case"left":a.x=a.x-f;break;case"right":a.x=a.x+f;break;case"up":a.y=a.y-f;break;case"down":a.y=a.y+f;break;case"rotate":a.rotate=a.rotate+f;break}return a},n)},_o={mixout:function(){return{parse:{transform:function(n){return Wn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Wn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,f={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:f,inner:u,path:m};return{tag:"g",attributes:b({},p.outer),children:[{tag:"g",attributes:b({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:b(b({},a.icon.attributes),p.path)}]}]}}}},wt={x:0,y:0,width:"100%",height:"100%"};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function No(e){return e.tag==="g"?e.children:[e]}var Io={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?st(r.split(" ").map(function(o){return o.trim()})):Qt();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,f=n.maskId,s=n.transform,c=i.width,l=i.icon,u=o.width,m=o.icon,p=Ri({transform:s,containerWidth:u,iconWidth:c}),w={tag:"rect",attributes:b(b({},wt),{},{fill:"white"})},O=l.children?{children:l.children.map(Gn)}:{},S={tag:"g",attributes:b({},p.inner),children:[Gn(b({tag:l.tag,attributes:b(b({},l.attributes),p.path)},O))]},v={tag:"g",attributes:b({},p.outer),children:[S]},h="mask-".concat(f||Le()),A="clip-".concat(f||Le()),C={tag:"mask",attributes:b(b({},wt),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:No(m)},C]};return a.push(_,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(h,")")},wt)}),{children:a,attributes:r}}}},To={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||f.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(f),a.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Mo={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Lo=[Ii,ko,wo,xo,Ao,Co,Ro,_o,Io,To,Mo];Ki(Lo,{mixoutsTo:U});U.noAuto;U.config;var zo=U.library;U.dom;var jt=U.parse;U.findIconDefinition;U.toHtml;var jo=U.icon;U.layer;U.text;U.counter;function Kn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kn(Object(n),!0).forEach(function(a){B(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function at(e){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fo(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Do(e,t){if(e==null)return{};var n=Fo(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},za={exports:{}};(function(e){(function(t){var n=function(v,h,A){if(!c(h)||u(h)||m(h)||p(h)||s(h))return h;var C,_=0,L=0;if(l(h))for(C=[],L=h.length;_<L;_++)C.push(n(v,h[_],A));else{C={};for(var D in h)Object.prototype.hasOwnProperty.call(h,D)&&(C[v(D,A)]=n(v,h[D],A))}return C},a=function(v,h){h=h||{};var A=h.separator||"_",C=h.split||/(?=[A-Z])/;return v.split(C).join(A)},r=function(v){return w(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(h,A){return A?A.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var h=r(v);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(v,h){return a(v,h).toLowerCase()},f=Object.prototype.toString,s=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return f.call(v)=="[object Array]"},u=function(v){return f.call(v)=="[object Date]"},m=function(v){return f.call(v)=="[object RegExp]"},p=function(v){return f.call(v)=="[object Boolean]"},w=function(v){return v=v-0,v===v},O=function(v,h){var A=h&&"process"in h?h.process:h;return typeof A!="function"?v:function(C,_){return A(C,v,_)}},S={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,h){return n(O(r,h),v)},decamelizeKeys:function(v,h){return n(O(o,h),v,h)},pascalizeKeys:function(v,h){return n(O(i,h),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})($o)})(za);var Yo=za.exports,Bo=["class","style"];function Uo(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Yo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function Ho(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(s){return ja(s)}),r=Object.keys(e.attributes||{}).reduce(function(s,c){var l=e.attributes[c];switch(c){case"class":s.class=Ho(l);break;case"style":s.style=Uo(l);break;default:s.attrs[c]=l}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,f=Do(n,Bo);return Dt(e.tag,q(q(q({},t),{},{class:r.class,style:q(q({},r.style),o)},r.attrs),f),a)}var Fa=!1;try{Fa=!0}catch{}function Wo(){if(!Fa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?B({},e,t):{}}function Go(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},B(t,"fa-".concat(e.size),e.size!==null),B(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),B(t,"fa-pull-".concat(e.pull),e.pull!==null),B(t,"fa-swap-opacity",e.swapOpacity),B(t,"fa-bounce",e.bounce),B(t,"fa-shake",e.shake),B(t,"fa-beat",e.beat),B(t,"fa-fade",e.fade),B(t,"fa-beat-fade",e.beatFade),B(t,"fa-flash",e.flash),B(t,"fa-spin-pulse",e.spinPulse),B(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Vn(e){if(e&&at(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jt.icon)return jt.icon(e);if(e===null)return null;if(at(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ko=Ft({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=$(function(){return Vn(t.icon)}),i=$(function(){return xt("classes",Go(t))}),o=$(function(){return xt("transform",typeof t.transform=="string"?jt.transform(t.transform):t.transform)}),f=$(function(){return xt("mask",Vn(t.mask))}),s=$(function(){return jo(r.value,q(q(q(q({},i.value),o.value),f.value),{},{symbol:t.symbol,title:t.title}))});Qn(s,function(l){if(!l)return Wo("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var c=$(function(){return s.value?ja(s.value.abstract[0],{},a):null});return function(){return c.value}}}),Vo={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},qo={prefix:"far",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};zo.add(qo,Vo);const Xo=ti({history:gr(),routes:[]});Wa(e=>{e.use(Xo),e.component("font-awesome-icon",Ko)});const es={darkMode:!1,stylePreview:!0,actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:{default:"Bonkers",values:[{name:"Bonkers",value:"url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)"},{name:"Light",value:"#ffffff"},{name:"Dark",value:"#202124"}]},layout:"padded",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};export{es as parameters};
//# sourceMappingURL=preview-f46242cd.js.map
