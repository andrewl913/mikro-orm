(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{373:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(874)),o={id:"settings",title:"Interface: Settings",sidebar_label:"Settings"},c={unversionedId:"api/interfaces/settings",id:"version-4.3/api/interfaces/settings",isDocsHomePage:!1,title:"Interface: Settings",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/settings.md",slug:"/api/interfaces/settings",permalink:"/docs/api/interfaces/settings",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/settings.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611065669,sidebar_label:"Settings",sidebar:"version-4.3/API",previous:{title:"Interface: SerializedPrimaryKeyOptions<T>",permalink:"/docs/api/interfaces/serializedprimarykeyoptions"},next:{title:"Interface: Table",permalink:"/docs/api/interfaces/table"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[]},{value:"tsConfigPath",id:"tsconfigpath",children:[]},{value:"useTsNode",id:"usetsnode",children:[]}]}],p={toc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Settings"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"configpaths"},"configPaths"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"configPaths"),": string[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/ConfigurationLoader.ts#L93"}),"packages/core/src/utils/ConfigurationLoader.ts:93"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"tsconfigpath"},"tsConfigPath"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"tsConfigPath"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/ConfigurationLoader.ts#L92"}),"packages/core/src/utils/ConfigurationLoader.ts:92"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usetsnode"},"useTsNode"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useTsNode"),": boolean"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/utils/ConfigurationLoader.ts#L91"}),"packages/core/src/utils/ConfigurationLoader.ts:91"))))}b.isMDXComponent=!0},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,f=l["".concat(o,".").concat(d)]||l[d]||u[d]||a;return r?i.a.createElement(f,c(c({ref:t},p),{},{components:r})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);