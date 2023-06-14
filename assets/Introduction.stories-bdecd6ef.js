import{r as x,M as h}from"./chunk-PCJTTTQV-d6ee6652.js";import{u as d}from"./index-2500802e.js";import"./iframe-4978cc4e.js";import"../sb-preview/runtime.js";import"./index-da93d2ef.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var m={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=x,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,y=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function c(o,t,n){var r,s={},p=null,l=null;n!==void 0&&(p=""+n),t.key!==void 0&&(p=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)b.call(t,r)&&!k.hasOwnProperty(r)&&(s[r]=t[r]);if(o&&o.defaultProps)for(r in t=o.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:f,type:o,key:p,ref:l,props:s,_owner:y.current}}a.Fragment=u;a.jsx=c;a.jsxs=c;m.exports=a;var e=m.exports;function w(o={}){const{wrapper:t}=Object.assign({},d(),o.components);return t?e.jsx(t,{...o,children:e.jsx(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},d(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Example/Introduction"}),`
`,e.jsx("style",{children:`
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
`,e.jsx(r.h1,{id:"welcome-to-bonkersie-ui-storybook",children:"Welcome to Bonkers.ie UI Storybook"}),`
`,e.jsxs(r.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e.jsx(r.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e.jsxs(r.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e.jsx(r.code,{children:"src/components"}),` directory to learn how they work.
We recommend building UIs with a `,e.jsx(r.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(r.strong,{children:"component-driven"})})," process starting with atomic components."]}),`
`,e.jsx("div",{className:"subheading",children:"Configure"}),`
`,e.jsxs("div",{className:"tip-wrapper",children:[e.jsx("span",{className:"tip",children:"Tip"}),`
`,e.jsx("a",{href:"https://storybook.js.org/docs/vue/essentials/controls#annotation",children:"#Controls argument types here!"})]}),`
`,e.jsx("div",{className:"tip-wrapper",children:e.jsxs(r.p,{children:[e.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e.jsx("code",{children:"src/stories/Introduction.stories.mdx"})]})})]})}}const _=()=>{throw new Error("Docs-only story")};_.parameters={docsOnly:!0};const i={title:"Example/Introduction",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:w};const M=["__page"];export{M as __namedExportsOrder,_ as __page,i as default};
//# sourceMappingURL=Introduction.stories-bdecd6ef.js.map
