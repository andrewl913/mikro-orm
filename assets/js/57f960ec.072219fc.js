(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,d=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return r?a.a.createElement(d,o(o({ref:t},p),{},{components:r})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},451:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(1253)),c={id:"countoptions",title:"Interface: CountOptions<T>",sidebar_label:"CountOptions"},o={unversionedId:"api/interfaces/countoptions",id:"version-4.3/api/interfaces/countoptions",isDocsHomePage:!1,title:"Interface: CountOptions<T>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/interfaces/countoptions.md",slug:"/api/interfaces/countoptions",permalink:"/docs/4.3/api/interfaces/countoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/countoptions.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567456,sidebar_label:"CountOptions",sidebar:"version-4.3/API",previous:{title:"Interface: ConnectionOptions",permalink:"/docs/4.3/api/interfaces/connectionoptions"},next:{title:"Interface: DeleteOptions<T>",permalink:"/docs/4.3/api/interfaces/deleteoptions"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"filters",id:"filters",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"schema",id:"schema",children:[]}]}],p={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"T"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CountOptions"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"cache"},"cache"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"cache"),": boolean ","|"," number ","|"," ","[string, number]"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L111"}),"packages/core/src/drivers/IDatabaseDriver.ts:111"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"filters"},"filters"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"filters"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"<","boolean ","|"," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"> ","|"," string[] ","|"," boolean"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L107"}),"packages/core/src/drivers/IDatabaseDriver.ts:107"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"groupby"},"groupBy"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"groupBy"),": string ","|"," string[]"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L109"}),"packages/core/src/drivers/IDatabaseDriver.ts:109"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"having"},"having"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"having"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#qbfilterquery"}),"QBFilterQuery"),"<","T>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L110"}),"packages/core/src/drivers/IDatabaseDriver.ts:110"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"schema"},"schema"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"schema"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L108"}),"packages/core/src/drivers/IDatabaseDriver.ts:108"))))}s.isMDXComponent=!0}}]);