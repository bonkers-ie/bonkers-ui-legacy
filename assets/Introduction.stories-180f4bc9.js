import{r as h,M as g}from"./chunk-S4VUQJ4A-21596a72.js";import{u as m}from"./index-b62f3d8e.js";import"./iframe-29f352cd.js";import"../sb-preview/runtime.js";import"./index-6f68f3f0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var c={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=h,u=Symbol.for("react.element"),b=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,k=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function x(t,e,p){var o,n={},a=null,l=null;p!==void 0&&(a=""+p),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(l=e.ref);for(o in e)y.call(e,o)&&!w.hasOwnProperty(o)&&(n[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:u,type:t,key:a,ref:l,props:n,_owner:k.current}}i.Fragment=b;i.jsx=x;i.jsxs=x;c.exports=i;var r=c.exports;function d(t){const e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},m(),t.components);return r.jsxs(r.Fragment,{children:[r.jsx(g,{title:"Example/Introduction"}),`
`,r.jsx("style",{children:`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }

  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }


  `}),`
`,r.jsx(e.h1,{id:"welcome-to-bonkersie-ui-storybook",children:"Welcome to Bonkers.ie UI Storybook"}),`
`,r.jsxs(e.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,r.jsx(e.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,r.jsxs(e.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,r.jsx(e.code,{children:"src/components"}),` directory to learn how they work.
We recommend building UIs with a `,r.jsx(e.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:r.jsx(e.strong,{children:"component-driven"})})," process starting with atomic components."]}),`
`,r.jsx("div",{className:"subheading",children:"Configure"}),`
`,r.jsxs("div",{className:"tip-wrapper",children:[r.jsx("span",{className:"tip",children:"Tip"}),r.jsx("a",{href:"https://storybook.js.org/docs/vue/essentials/controls#annotation",children:"#Controls argument types here!"})]}),`
`,r.jsx("div",{className:"tip-wrapper",children:r.jsxs(e.p,{children:[r.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,r.jsx("code",{children:"src/stories/Introduction.stories.mdx"})]})})]})}function _(t={}){const{wrapper:e}=Object.assign({},m(),t.components);return e?r.jsx(e,{...t,children:r.jsx(d,{...t})}):d(t)}const j=()=>{throw new Error("Docs-only story")};j.parameters={docsOnly:!0};const s={title:"Example/Introduction",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:_};const M=["__page"];export{M as __namedExportsOrder,j as __page,s as default};
//# sourceMappingURL=Introduction.stories-180f4bc9.js.map
