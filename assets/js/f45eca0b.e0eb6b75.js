/*! For license information please see f45eca0b.e0eb6b75.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27373],{2272:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(74848),s=t(28453);const o={sidebar_label:"Mouse.drop"},d="Mouse.drop() method",i={id:"api/puppeteer.mouse.drop",title:"Mouse.drop() method",description:"Performs a dragenter, dragover, and drop in sequence.",source:"@site/../docs/api/puppeteer.mouse.drop.md",sourceDirName:"api",slug:"/api/puppeteer.mouse.drop",permalink:"/next/api/puppeteer.mouse.drop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Mouse.drop"},sidebar:"api",previous:{title:"Mouse.dragOver",permalink:"/next/api/puppeteer.mouse.dragover"},next:{title:"Mouse.move",permalink:"/next/api/puppeteer.mouse.move"}},a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"mousedrop-method",children:"Mouse.drop() method"})}),"\n",(0,n.jsx)(r.p,{children:"Performs a dragenter, dragover, and drop in sequence."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract drop(target: Point, data: Protocol.Input.DragData): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"target"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/next/api/puppeteer.point",children:"Point"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"point to drop on"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"data"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Protocol.Input.DragData"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"drag data containing items and operations mask"})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,o={},p=null,c=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)d.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function d(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);