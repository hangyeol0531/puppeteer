/*! For license information please see 197413c8.867449dd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71493],{36212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(74848),n=r(28453);const s={sidebar_label:"WaitForOptions"},o="WaitForOptions interface",l={id:"api/puppeteer.waitforoptions",title:"WaitForOptions interface",description:"Signature",source:"@site/../docs/api/puppeteer.waitforoptions.md",sourceDirName:"api",slug:"/api/puppeteer.waitforoptions",permalink:"/next/api/puppeteer.waitforoptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"WaitForOptions"},sidebar:"api",previous:{title:"WaitForNetworkIdleOptions",permalink:"/next/api/puppeteer.waitfornetworkidleoptions"},next:{title:"WaitForSelectorOptions",permalink:"/next/api/puppeteer.waitforselectoroptions"}},a={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"waitforoptions-interface",children:"WaitForOptions interface"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForOptions\n"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Default"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"signal",children:"signal"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"AbortSignal"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"A signal object that allows you to cancel the call."})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"timeout",children:"timeout"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"number"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(t.p,{children:"Maximum wait time in milliseconds. Pass 0 to disable the timeout."}),(0,i.jsxs)(t.p,{children:["The default value can be changed by using the ",(0,i.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," or ",(0,i.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," methods."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"30000"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"waituntil",children:"waitUntil"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/next/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,i.jsx)(t.a,{href:"/next/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired."})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"'load'"})})})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},21020:(e,t,r)=>{var i=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,s={},c=null,p=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:p,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);