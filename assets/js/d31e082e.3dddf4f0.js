/*! For license information please see d31e082e.3dddf4f0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34357],{25398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(74848),o=t(28453);const s={},a="PDF generation",i={id:"guides/pdf-generation",title:"PDF generation",description:"For printing PDFs use Page.pdf().",source:"@site/../docs/guides/pdf-generation.md",sourceDirName:"guides",slug:"/guides/pdf-generation",permalink:"/next/guides/pdf-generation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Screenshots",permalink:"/next/guides/screenshots"},next:{title:"Chrome Extensions",permalink:"/next/guides/chrome-extensions"}},p={},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pdf-generation",children:"PDF generation"})}),"\n",(0,r.jsxs)(n.p,{children:["For printing PDFs use ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,r.jsx)(n.code,{children:"Page.pdf()"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://news.ycombinator.com', {\n  waitUntil: 'networkidle2',\n});\n// Saves the PDF to hn.pdf.\nawait page.pdf({\n  path: 'hn.pdf',\n});\n\nawait browser.close();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.pdf",children:(0,r.jsx)(n.code,{children:"Page.pdf()"})})," waits for fonts to be loaded."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!p.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);