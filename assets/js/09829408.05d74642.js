/*! For license information please see 09829408.05d74642.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42651],{18510:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(74848),t=n(28453);const i={sidebar_label:"Keyboard.down"},o="Keyboard.down() method",d={id:"api/puppeteer.keyboard.down",title:"Keyboard.down() method",description:"Dispatches a keydown event.",source:"@site/versioned_docs/version-23.3.1/api/puppeteer.keyboard.down.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.down",permalink:"/api/puppeteer.keyboard.down",draft:!1,unlisted:!1,tags:[],version:"23.3.1",frontMatter:{sidebar_label:"Keyboard.down"},sidebar:"api",previous:{title:"Keyboard",permalink:"/api/puppeteer.keyboard"},next:{title:"Keyboard.press",permalink:"/api/puppeteer.keyboard.press"}},a={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"keyboarddown-method",children:"Keyboard.down() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Dispatches a ",(0,s.jsx)(r.code,{children:"keydown"})," event."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract down(\n    key: KeyInput,\n    options?: Readonly<KeyDownOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"key"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Name of key to press, such as ",(0,s.jsx)(r.code,{children:"ArrowLeft"}),". See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/api/puppeteer.keydownoptions",children:"KeyDownOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,s.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,s.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,s.jsx)(r.code,{children:"keypress"}),"/",(0,s.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,s.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated. If ",(0,s.jsx)(r.code,{children:"key"})," is a modifier key, ",(0,s.jsx)(r.code,{children:"Shift"}),", ",(0,s.jsx)(r.code,{children:"Meta"}),", ",(0,s.jsx)(r.code,{children:"Control"}),", or ",(0,s.jsx)(r.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["After the key is pressed once, subsequent calls to ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," will have ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Modifier keys DO influence ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),". Holding down ",(0,s.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,p=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,s)&&!a.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:p,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(96540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);