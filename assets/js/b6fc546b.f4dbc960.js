/*! For license information please see b6fc546b.f4dbc960.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85021],{60224:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=r(74848),t=r(28453);const i={sidebar_label:"ElementHandle.press"},d="ElementHandle.press() method",l={id:"api/puppeteer.elementhandle.press",title:"ElementHandle.press() method",description:"Focuses the element, and then uses Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-23.3.1/api/puppeteer.elementhandle.press.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.press",permalink:"/api/puppeteer.elementhandle.press",draft:!1,unlisted:!1,tags:[],version:"23.3.1",frontMatter:{sidebar_label:"ElementHandle.press"},sidebar:"api",previous:{title:"ElementHandle.isVisible",permalink:"/api/puppeteer.elementhandle.isvisible"},next:{title:"ElementHandle.screenshot",permalink:"/api/puppeteer.elementhandle.screenshot"}},a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"elementhandlepress-method",children:"ElementHandle.press() method"})}),"\n",(0,s.jsxs)(n.p,{children:["Focuses the element, and then uses ",(0,s.jsx)(n.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,s.jsx)(n.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"key"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Name of key to press, such as ",(0,s.jsx)(n.code,{children:"ArrowLeft"}),". See ",(0,s.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Readonly<",(0,s.jsx)(n.a,{href:"/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"key"})," is a single character and no modifier keys besides ",(0,s.jsx)(n.code,{children:"Shift"})," are being held down, a ",(0,s.jsx)(n.code,{children:"keypress"}),"/",(0,s.jsx)(n.code,{children:"input"})," event will also be generated. The ",(0,s.jsx)(n.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"})," Modifier keys DO affect ",(0,s.jsx)(n.code,{children:"elementHandle.press"}),". Holding down ",(0,s.jsx)(n.code,{children:"Shift"})," will type the text in upper case."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var s,i={},p=null,o=null;for(s in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(o=n.ref),n)d.call(n,s)&&!a.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:p,ref:o,props:i,_owner:l.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);