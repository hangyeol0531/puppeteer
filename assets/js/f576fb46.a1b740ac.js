/*! For license information please see f576fb46.a1b740ac.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67017],{43559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),o=t(28453);const i={},s="Request Interception",a={id:"guides/network-interception",title:"Request Interception",description:"Once request interception is enabled, every request will stall unless it's",source:"@site/versioned_docs/version-23.3.1/guides/network-interception.md",sourceDirName:"guides",slug:"/guides/network-interception",permalink:"/guides/network-interception",draft:!1,unlisted:!1,tags:[],version:"23.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Debugging",permalink:"/guides/debugging"},next:{title:"Headless mode",permalink:"/guides/headless-modes"}},c={},d=[{value:"Multiple Intercept Handlers and Asynchronous Resolutions",id:"multiple-intercept-handlers-and-asynchronous-resolutions",level:2},{value:"Cooperative Intercept Mode",id:"cooperative-intercept-mode",level:2},{value:"Cooperative Request Continuation",id:"cooperative-request-continuation",level:2},{value:"Upgrading to Cooperative Intercept Mode for package maintainers",id:"upgrading-to-cooperative-intercept-mode-for-package-maintainers",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"request-interception",children:"Request Interception"})}),"\n",(0,r.jsx)(n.p,{children:"Once request interception is enabled, every request will stall unless it's\ncontinued, responded or aborted."}),"\n",(0,r.jsx)(n.p,{children:"An example of a na\xefve request interceptor that aborts all image requests:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (interceptedRequest.isInterceptResolutionHandled()) return;\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"multiple-intercept-handlers-and-asynchronous-resolutions",children:"Multiple Intercept Handlers and Asynchronous Resolutions"}),"\n",(0,r.jsxs)(n.p,{children:["By default Puppeteer will raise a ",(0,r.jsx)(n.code,{children:"Request is already handled!"})," exception if\n",(0,r.jsx)(n.code,{children:"request.abort"}),", ",(0,r.jsx)(n.code,{children:"request.continue"}),", or ",(0,r.jsx)(n.code,{children:"request.respond"})," are called after any\nof them have already been called."]}),"\n",(0,r.jsxs)(n.p,{children:["Always assume that an unknown handler may have already called\n",(0,r.jsx)(n.code,{children:"abort/continue/respond"}),". Even if your handler is the only one you registered,\n3rd party packages may register their own handlers. It is therefore important to\nalways check the resolution status using\n",(0,r.jsx)(n.a,{href:"../api/puppeteer.httprequest.isinterceptresolutionhandled",children:"request.isInterceptResolutionHandled"}),"\nbefore calling ",(0,r.jsx)(n.code,{children:"abort/continue/respond"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Importantly, the intercept resolution may get handled by another listener while\nyour handler is awaiting an asynchronous operation. Therefore, the return value\nof ",(0,r.jsx)(n.code,{children:"request.isInterceptResolutionHandled"})," is only safe in a synchronous code\nblock. Always execute ",(0,r.jsx)(n.code,{children:"request.isInterceptResolutionHandled"})," and\n",(0,r.jsx)(n.code,{children:"abort/continue/respond"})," ",(0,r.jsx)(n.strong,{children:"synchronously"})," together."]}),"\n",(0,r.jsx)(n.p,{children:"This example demonstrates two synchronous handlers working together:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.continue();\n});\n\n/*\nThis second handler will return before calling request.abort because request.continue was already\ncalled by the first handler.\n*/\npage.on('request', interceptedRequest => {\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.abort();\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"This example demonstrates asynchronous handlers working together:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n\n  // It is not strictly necessary to return a promise, but doing so will allow Puppeteer to await this handler.\n  return new Promise(resolve => {\n    // Continue after 500ms\n    setTimeout(() => {\n      // Inside, check synchronously to verify that the intercept wasn't handled already.\n      // It might have been handled during the 500ms while the other handler awaited an async op of its own.\n      if (interceptedRequest.isInterceptResolutionHandled()) {\n        resolve();\n        return;\n      }\n      interceptedRequest.continue();\n      resolve();\n    }, 500);\n  });\n});\npage.on('request', async interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n\n  await someLongAsyncOperation();\n  // The interception *MIGHT* have been handled by the first handler, we can't be sure.\n  // Therefore, we must check again before calling continue() or we risk Puppeteer raising an exception.\n  if (interceptedRequest.isInterceptResolutionHandled()) return;\n  interceptedRequest.continue();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For finer-grained introspection (see Cooperative Intercept Mode below), you may\nalso call\n",(0,r.jsx)(n.a,{href:"../api/puppeteer.httprequest.interceptresolutionstate",children:"request.interceptResolutionState"}),"\nsynchronously before using ",(0,r.jsx)(n.code,{children:"abort/continue/respond"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is the example above rewritten using ",(0,r.jsx)(n.code,{children:"request.interceptResolutionState"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"/*\nThis first handler will succeed in calling request.continue because the request interception has never been resolved.\n*/\npage.on('request', interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  const {action} = interceptedRequest.interceptResolutionState();\n  if (action === InterceptResolutionAction.AlreadyHandled) return;\n\n  // It is not strictly necessary to return a promise, but doing so will allow Puppeteer to await this handler.\n  return new Promise(resolve => {\n    // Continue after 500ms\n    setTimeout(() => {\n      // Inside, check synchronously to verify that the intercept wasn't handled already.\n      // It might have been handled during the 500ms while the other handler awaited an async op of its own.\n      const {action} = interceptedRequest.interceptResolutionState();\n      if (action === InterceptResolutionAction.AlreadyHandled) {\n        resolve();\n        return;\n      }\n      interceptedRequest.continue();\n      resolve();\n    }, 500);\n  });\n});\npage.on('request', async interceptedRequest => {\n  // The interception has not been handled yet. Control will pass through this guard.\n  if (\n    interceptedRequest.interceptResolutionState().action ===\n    InterceptResolutionAction.AlreadyHandled\n  )\n    return;\n\n  await someLongAsyncOperation();\n  // The interception *MIGHT* have been handled by the first handler, we can't be sure.\n  // Therefore, we must check again before calling continue() or we risk Puppeteer raising an exception.\n  if (\n    interceptedRequest.interceptResolutionState().action ===\n    InterceptResolutionAction.AlreadyHandled\n  )\n    return;\n  interceptedRequest.continue();\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cooperative-intercept-mode",children:"Cooperative Intercept Mode"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"request.abort"}),", ",(0,r.jsx)(n.code,{children:"request.continue"}),", and ",(0,r.jsx)(n.code,{children:"request.respond"})," can accept an\noptional ",(0,r.jsx)(n.code,{children:"priority"})," to work in Cooperative Intercept Mode. When all handlers are\nusing Cooperative Intercept Mode, Puppeteer guarantees that all intercept\nhandlers will run and be awaited in order of registration. The interception is\nresolved to the highest-priority resolution. Here are the rules of Cooperative\nIntercept Mode:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All resolutions must supply a numeric ",(0,r.jsx)(n.code,{children:"priority"})," argument to\n",(0,r.jsx)(n.code,{children:"abort/continue/respond"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If any resolution does not supply a numeric ",(0,r.jsx)(n.code,{children:"priority"}),", Legacy Mode is active\nand Cooperative Intercept Mode is inactive."]}),"\n",(0,r.jsx)(n.li,{children:"Async handlers finish before intercept resolution is finalized."}),"\n",(0,r.jsx)(n.li,{children:'The highest priority interception resolution "wins", i.e. the interception is\nultimately aborted/responded/continued according to which resolution was given\nthe highest priority.'}),"\n",(0,r.jsxs)(n.li,{children:["In the event of a tie, ",(0,r.jsx)(n.code,{children:"abort"})," > ",(0,r.jsx)(n.code,{children:"respond"})," > ",(0,r.jsx)(n.code,{children:"continue"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For standardization, when specifying a Cooperative Intercept Mode priority use\n",(0,r.jsx)(n.code,{children:"0"})," or ",(0,r.jsx)(n.code,{children:"DEFAULT_INTERCEPT_RESOLUTION_PRIORITY"})," (exported from ",(0,r.jsx)(n.code,{children:"HTTPRequest"}),")\nunless you have a clear reason to use a higher priority. This gracefully prefers\n",(0,r.jsx)(n.code,{children:"respond"})," over ",(0,r.jsx)(n.code,{children:"continue"})," and ",(0,r.jsx)(n.code,{children:"abort"})," over ",(0,r.jsx)(n.code,{children:"respond"})," and allows other handlers\nto work cooperatively. If you do intentionally want to use a different priority,\nhigher priorities win over lower priorities. Negative priorities are allowed.\nFor example, ",(0,r.jsx)(n.code,{children:"continue({}, 4)"})," would win over ",(0,r.jsx)(n.code,{children:"continue({}, -2)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To preserve backward compatibility, any handler resolving the intercept without\nspecifying ",(0,r.jsx)(n.code,{children:"priority"})," (Legacy Mode) causes immediate resolution. For Cooperative\nIntercept Mode to work, all resolutions must use a ",(0,r.jsx)(n.code,{children:"priority"}),". In practice, this\nmeans you must still test for ",(0,r.jsx)(n.code,{children:"request.isInterceptResolutionHandled"})," because a\nhandler beyond your control may have called ",(0,r.jsx)(n.code,{children:"abort/continue/respond"})," without a\npriority (Legacy Mode)."]}),"\n",(0,r.jsxs)(n.p,{children:["In this example, Legacy Mode prevails and the request is aborted immediately\nbecause at least one handler omits ",(0,r.jsx)(n.code,{children:"priority"})," when resolving the intercept:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Final outcome: immediate abort()\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Legacy Mode: interception is aborted immediately.\n  request.abort('failed');\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n  // Control will never reach this point because the request was already aborted in Legacy Mode\n\n  // Cooperative Intercept Mode: votes for continue at priority 0.\n  request.continue({}, 0);\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, Legacy Mode prevails and the request is continued because at\nleast one handler does not specify a ",(0,r.jsx)(n.code,{children:"priority"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Final outcome: immediate continue()\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 0.\n  request.abort('failed', 0);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Control reaches this point because the request was cooperatively aborted which postpones resolution.\n\n  // { action: InterceptResolutionAction.Abort, priority: 0 }, because abort @ 0 is the current winning resolution\n  console.log(request.interceptResolutionState());\n\n  // Legacy Mode: intercept continues immediately.\n  request.continue({});\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.AlreadyHandled }, because continue in Legacy Mode was called\n  console.log(request.interceptResolutionState());\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, Cooperative Intercept Mode is active because all handlers\nspecify a ",(0,r.jsx)(n.code,{children:"priority"}),". ",(0,r.jsx)(n.code,{children:"continue()"})," wins because it has a higher priority than\n",(0,r.jsx)(n.code,{children:"abort()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Final outcome: cooperative continue() @ 5\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 10\n  request.abort('failed', 0);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to continue at priority 5\n  request.continue(request.continueRequestOverrides(), 5);\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.Continue, priority: 5 }, because continue @ 5 > abort @ 0\n  console.log(request.interceptResolutionState());\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, Cooperative Intercept Mode is active because all handlers\nspecify ",(0,r.jsx)(n.code,{children:"priority"}),". ",(0,r.jsx)(n.code,{children:"respond()"})," wins because its priority ties with\n",(0,r.jsx)(n.code,{children:"continue()"}),", but ",(0,r.jsx)(n.code,{children:"respond()"})," beats ",(0,r.jsx)(n.code,{children:"continue()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Final outcome: cooperative respond() @ 15\npage.setRequestInterception(true);\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to abort at priority 10\n  request.abort('failed', 10);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to continue at priority 15\n  request.continue(request.continueRequestOverrides(), 15);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to respond at priority 15\n  request.respond(request.responseForRequest(), 15);\n});\npage.on('request', request => {\n  if (request.isInterceptResolutionHandled()) return;\n\n  // Cooperative Intercept Mode: votes to respond at priority 12\n  request.respond(request.responseForRequest(), 12);\n});\npage.on('request', request => {\n  // { action: InterceptResolutionAction.Respond, priority: 15 }, because respond @ 15 > continue @ 15 > respond @ 12 > abort @ 10\n  console.log(request.interceptResolutionState());\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cooperative-request-continuation",children:"Cooperative Request Continuation"}),"\n",(0,r.jsxs)(n.p,{children:["Puppeteer requires ",(0,r.jsx)(n.code,{children:"request.continue()"})," to be called explicitly or the request\nwill hang. Even if your handler means to take no special action, or 'opt out',\n",(0,r.jsx)(n.code,{children:"request.continue()"})," must still be called."]}),"\n",(0,r.jsx)(n.p,{children:"With the introduction of Cooperative Intercept Mode, two use cases arise for\ncooperative request continuations: Unopinionated and Opinionated."}),"\n",(0,r.jsxs)(n.p,{children:["The first case (common) is that your handler means to opt out of doing anything\nspecial the request. It has no opinion on further action and simply intends to\ncontinue by default and/or defer to other handlers that might have an opinion.\nBut in case there are no other handlers, we must call ",(0,r.jsx)(n.code,{children:"request.continue()"})," to\nensure that the request doesn't hang."]}),"\n",(0,r.jsxs)(n.p,{children:["We call this an ",(0,r.jsx)(n.strong,{children:"Unopinionated continuation"})," because the intent is to continue\nthe request if nobody else has a better idea. Use\n",(0,r.jsx)(n.code,{children:"request.continue({...}, DEFAULT_INTERCEPT_RESOLUTION_PRIORITY)"})," (or ",(0,r.jsx)(n.code,{children:"0"}),") for\nthis type of continuation."]}),"\n",(0,r.jsxs)(n.p,{children:["The second case (uncommon) is that your handler actually does have an opinion\nand means to force continuation by overriding a lower-priority ",(0,r.jsx)(n.code,{children:"abort()"})," or\n",(0,r.jsx)(n.code,{children:"respond()"})," issued elsewhere. We call this an ",(0,r.jsx)(n.strong,{children:"Opinionated continuation"}),". In\nthese rare cases where you mean to specify an overriding continuation priority,\nuse a custom priority."]}),"\n",(0,r.jsxs)(n.p,{children:["To summarize, reason through whether your use of ",(0,r.jsx)(n.code,{children:"request.continue"})," is just\nmeant to be default/bypass behavior vs falling within the intended use case of\nyour handler. Consider using a custom priority for in-scope use cases, and a\ndefault priority otherwise. Be aware that your handler may have both Opinionated\nand Unopinionated cases."]}),"\n",(0,r.jsx)(n.h2,{id:"upgrading-to-cooperative-intercept-mode-for-package-maintainers",children:"Upgrading to Cooperative Intercept Mode for package maintainers"}),"\n",(0,r.jsx)(n.p,{children:"If you are package maintainer and your package uses intercept handlers, you can\nupdate your intercept handlers to use Cooperative Intercept Mode. Suppose you\nhave the following existing handler:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"page.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort();\n  else interceptedRequest.continue();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use Cooperative Intercept Mode, upgrade ",(0,r.jsx)(n.code,{children:"continue()"})," and ",(0,r.jsx)(n.code,{children:"abort()"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"page.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort('failed', 0);\n  else\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      0\n    );\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"With those simple upgrades, your handler now uses Cooperative Intercept Mode\ninstead."}),"\n",(0,r.jsx)(n.p,{children:"However, we recommend a slightly more robust solution because the above\nintroduces several subtle issues:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Backward compatibility."})," If any handler still uses a Legacy Mode\nresolution (ie, does not specify a priority), that handler will resolve the\ninterception immediately even if your handler runs first. This could cause\ndisconcerting behavior for your users because suddenly your handler is not\nresolving the interception and a different handler is taking priority when\nall the user did was upgrade your package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hard-coded priority."})," Your package user has no ability to specify the\ndefault resolution priority for your handlers. This can become important when\nthe user wishes to manipulate the priorities based on use case. For example,\none user might want your package to take a high priority while another user\nmight want it to take a low priority."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To resolve both of these issues, our recommended approach is to export a\n",(0,r.jsx)(n.code,{children:"setInterceptResolutionConfig()"})," from your package. The user can then call\n",(0,r.jsx)(n.code,{children:"setInterceptResolutionConfig()"})," to explicitly activate Cooperative Intercept\nMode in your package so they aren't surprised by changes in how the interception\nis resolved. They can also optionally specify a custom priority using\n",(0,r.jsx)(n.code,{children:"setInterceptResolutionConfig(priority)"})," that works for their use case:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Defaults to undefined which preserves Legacy Mode behavior\nlet _priority = undefined;\n\n// Export a module configuration function\nexport const setInterceptResolutionConfig = (priority = 0) =>\n  (_priority = priority);\n\n/**\n * Note that this handler uses `DEFAULT_INTERCEPT_RESOLUTION_PRIORITY` to \"pass\" on this request. It is important to use\n * the default priority when your handler has no opinion on the request and the intent is to continue() by default.\n */\npage.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  )\n    interceptedRequest.abort('failed', _priority);\n  else\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      DEFAULT_INTERCEPT_RESOLUTION_PRIORITY // Unopinionated continuation\n    );\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"If your package calls for more fine-grained control over resolution priorities,\nuse a config pattern like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface InterceptResolutionConfig {\n  abortPriority?: number;\n  continuePriority?: number;\n}\n\n// This approach supports multiple priorities based on situational\n// differences. You could, for example, create a config that\n// allowed separate priorities for PNG vs JPG.\nconst DEFAULT_CONFIG: InterceptResolutionConfig = {\n  abortPriority: undefined, // Default to Legacy Mode\n  continuePriority: undefined, // Default to Legacy Mode\n};\n\n// Defaults to undefined which preserves Legacy Mode behavior\nlet _config: Partial<InterceptResolutionConfig> = {};\n\nexport const setInterceptResolutionConfig = (\n  config: InterceptResolutionConfig\n) => (_config = {...DEFAULT_CONFIG, ...config});\n\npage.on('request', interceptedRequest => {\n  if (request.isInterceptResolutionHandled()) return;\n  if (\n    interceptedRequest.url().endsWith('.png') ||\n    interceptedRequest.url().endsWith('.jpg')\n  ) {\n    interceptedRequest.abort('failed', _config.abortPriority);\n  } else {\n    // Here we use a custom-configured priority to allow for Opinionated\n    // continuation.\n    // We would only want to allow this if we had a very clear reason why\n    // some use cases required Opinionated continuation.\n    interceptedRequest.continue(\n      interceptedRequest.continueRequestOverrides(),\n      _config.continuePriority // Why would we ever want priority!==0 here?\n    );\n  }\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above solutions ensure backward compatibility while also allowing the user\nto adjust the importance of your package in the resolution chain when\nCooperative Intercept Mode is being used. Your package continues to work as\nexpected until the user has fully upgraded their code and all third party\npackages to use Cooperative Intercept Mode. If any handler or package still uses\nLegacy Mode, your package can still operate in Legacy Mode too."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);