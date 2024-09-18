/*! For license information please see 2ad2eac4.8f8f3519.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86197],{33795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=r(74848),s=r(28453);const o={sidebar_label:"HTTPResponse.content"},p="HTTPResponse.content() method",i={id:"api/puppeteer.httpresponse.content",title:"HTTPResponse.content() method",description:"Promise which resolves to a buffer with response body.",source:"@site/versioned_docs/version-23.3.1/api/puppeteer.httpresponse.content.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.content",permalink:"/api/puppeteer.httpresponse.content",draft:!1,unlisted:!1,tags:[],version:"23.3.1",frontMatter:{sidebar_label:"HTTPResponse.content"},sidebar:"api",previous:{title:"HTTPResponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer"},next:{title:"HTTPResponse.frame",permalink:"/api/puppeteer.httpresponse.frame"}},c={},a=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"httpresponsecontent-method",children:"HTTPResponse.content() method"})}),"\n",(0,n.jsx)(t.p,{children:"Promise which resolves to a buffer with response body."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class HTTPResponse {\n  abstract content(): Promise<Uint8Array>;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<Uint8Array>"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,h=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)p.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:h,props:o,_owner:i.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>p,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function p(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:p(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);