(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(r),O=n,d=l["".concat(b,".").concat(O)]||l[O]||m[O]||a;return r?c.a.createElement(d,o(o({ref:t},p),{},{components:r})):c.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,b=new Array(a);b[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var p=2;p<a;p++)b[p]=r[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},335:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),a=(r(0),r(1253)),b={id:"core.connectionexception",title:"Class: ConnectionException",sidebar_label:"ConnectionException",hide_title:!0},o={unversionedId:"api/classes/core.connectionexception",id:"api/classes/core.connectionexception",isDocsHomePage:!1,title:"Class: ConnectionException",description:"Class: ConnectionException",source:"@site/docs/api/classes/core.connectionexception.md",slug:"/api/classes/core.connectionexception",permalink:"/docs/next/api/classes/core.connectionexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.connectionexception.md",version:"current",sidebar_label:"ConnectionException",sidebar:"API",previous:{title:"Class: Connection",permalink:"/docs/next/api/classes/core.connection"},next:{title:"Class: ConstraintViolationException",permalink:"/docs/next/api/classes/core.constraintviolationexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],p={toc:i};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"class-connectionexception"},"Class: ConnectionException"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ConnectionException"),Object(a.b)("p",null,"Base class for all connection related errors detected in the driver."),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),Object(a.b)("em",{parentName:"a"},"DriverException"))),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"ConnectionException")))),Object(a.b)("h2",{id:"constructors"},"Constructors"),Object(a.b)("h3",{id:"constructor"},"constructor"),Object(a.b)("p",null,"+"," ",Object(a.b)("strong",{parentName:"p"},"new ConnectionException"),"(",Object(a.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connectionexception"}),Object(a.b)("em",{parentName:"a"},"ConnectionException"))),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"previous")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Error")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connectionexception"}),Object(a.b)("em",{parentName:"a"},"ConnectionException"))),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"code"},"code"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"code"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#code"}),"code")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"errmsg"},"errmsg"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"errmsg"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#errmsg"}),"errmsg")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"errno"},"errno"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"errno"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#errno"}),"errno")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"message"},"message"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#message"}),"message")),Object(a.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#name"}),"name")),Object(a.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | (",Object(a.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(a.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Optional override for formatting stack traces"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"}),"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#preparestacktrace"}),"prepareStackTrace")),Object(a.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#sqlmessage"}),"sqlMessage")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sqlstate"},"sqlState"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"sqlState"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#sqlstate"}),"sqlState")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/e227717/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"stack"},"stack"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"stack"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#stack"}),"stack")),Object(a.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception#stacktracelimit"}),"stackTraceLimit")),Object(a.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(a.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(a.b)("em",{parentName:"p"},"object"),", ",Object(a.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("p",null,"Create .stack property on a target object"),Object(a.b)("h4",{id:"parameters-1"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"targetObject")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("em",{parentName:"td"},"object"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("p",null,"Inherited from: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.driverexception"}),"DriverException")),Object(a.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}s.isMDXComponent=!0}}]);