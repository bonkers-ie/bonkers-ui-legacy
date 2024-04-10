import{d as x,M as h}from"./index-nd3WP2Mt.js";import{u as d}from"./index-D9itnsn5.js";import"./iframe-BXZBVdi0.js";import"../sb-preview/runtime.js";import"./index-D6puyI63.js";import"./index-B_J8iUie.js";import"./index-DrFu-skq.js";var m={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=x,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,y=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function c(r,e,a){var o,n={},s=null,p=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(p=e.ref);for(o in e)b.call(e,o)&&!k.hasOwnProperty(o)&&(n[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)n[o]===void 0&&(n[o]=e[o]);return{$$typeof:f,type:r,key:s,ref:p,props:n,_owner:y.current}}i.Fragment=u;i.jsx=c;i.jsxs=c;m.exports=i;var t=m.exports;function l(r){const e={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",...d(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"Example/Introduction"}),`
`,t.jsx("style",{children:`
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
`,t.jsx(e.h1,{id:"welcome-to-bonkersie-ui-storybook",children:"Welcome to Bonkers.ie UI Storybook"}),`
`,t.jsxs(e.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t.jsx(e.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,t.jsxs(e.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t.jsx(e.code,{children:"src/components"}),` directory to learn how they work.
We recommend building UIs with a `,t.jsx(e.a,{href:"https://componentdriven.org",rel:"nofollow",children:t.jsx(e.strong,{children:"component-driven"})})," process starting with atomic components."]}),`
`,t.jsx("div",{className:"subheading",children:"Configure"}),`
`,t.jsxs("div",{className:"tip-wrapper",children:[t.jsx("span",{className:"tip",children:"Tip"}),t.jsx("a",{href:"https://storybook.js.org/docs/vue/essentials/controls#annotation",children:"#Controls argument types here!"})]}),`
`,t.jsx("div",{className:"tip-wrapper",children:t.jsxs(e.p,{children:[t.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,t.jsx("code",{children:"src/stories/Introduction.stories.mdx"})]})})]})}function C(r={}){const{wrapper:e}={...d(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(l,{...r})}):l(r)}export{C as default};
