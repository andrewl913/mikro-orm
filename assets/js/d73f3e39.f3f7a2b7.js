(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65621],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),k=s(n),d=r,u=k["".concat(p,".").concat(d)]||k[d]||m[d]||o;return n?a.createElement(u,i(i({ref:e},c),{},{components:n})):a.createElement(u,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21987:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"core.notnullconstraintviolationexception",title:"Class: NotNullConstraintViolationException",sidebar_label:"NotNullConstraintViolationException",custom_edit_url:null,hide_title:!0},l="Class: NotNullConstraintViolationException",p={unversionedId:"api/classes/core.notnullconstraintviolationexception",id:"version-4.5/api/classes/core.notnullconstraintviolationexception",isDocsHomePage:!1,title:"Class: NotNullConstraintViolationException",description:"core.NotNullConstraintViolationException",source:"@site/versioned_docs/version-4.5/api/classes/core.notnullconstraintviolationexception.md",sourceDirName:"api/classes",slug:"/api/classes/core.notnullconstraintviolationexception",permalink:"/docs/api/classes/core.notnullconstraintviolationexception",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1626149124,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"core.notnullconstraintviolationexception",title:"Class: NotNullConstraintViolationException",sidebar_label:"NotNullConstraintViolationException",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"NotFoundError",permalink:"/docs/api/classes/core.notfounderror"},next:{title:"NullCacheAdapter",permalink:"/docs/api/classes/core.nullcacheadapter"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],c={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-notnullconstraintviolationexception"},"Class: NotNullConstraintViolationException"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".NotNullConstraintViolationException"),(0,o.kt)("p",null,"Exception for a NOT NULL constraint violation detected in the driver."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"ConstraintViolationException"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"NotNullConstraintViolationException")))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new NotNullConstraintViolationException"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"previous"),": Error): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.notnullconstraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"NotNullConstraintViolationException"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"previous")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.notnullconstraintviolationexception"},(0,o.kt)("em",{parentName:"a"},"NotNullConstraintViolationException"))),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"code"},"code"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"code"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#code"},"code")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errmsg"},"errmsg"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errmsg"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errmsg"},"errmsg")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errno"},"errno"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errno"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#errno"},"errno")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"message"},"message"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"message"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#message"},"message")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"name"},"name"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"name"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#name"},"name")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Optional override for formatting stack traces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"see"))," ",(0,o.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,o.kt)("h4",{id:"type-declaration"},"Type declaration:"),(0,o.kt)("p",null,"\u25b8 (",(0,o.kt)("inlineCode",{parentName:"p"},"err"),": Error, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Error")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,o.kt)("td",{parentName:"tr",align:"left"},"CallSite[]")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"any")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#preparestacktrace"},"prepareStackTrace")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlmessage"},"sqlMessage"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlMessage"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlmessage"},"sqlMessage")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sqlstate"},"sqlState"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sqlState"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#sqlstate"},"sqlState")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stack"},"stack"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"stack"),": ",(0,o.kt)("em",{parentName:"p"},"string")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stack"},"stack")),(0,o.kt)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception#stacktracelimit"},"stackTraceLimit")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"targetObject"),": ",(0,o.kt)("em",{parentName:"p"},"object"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Create .stack property on a target object"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"void")),(0,o.kt)("p",null,"Inherited from: ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.constraintviolationexception"},"ConstraintViolationException")),(0,o.kt)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}m.isMDXComponent=!0}}]);