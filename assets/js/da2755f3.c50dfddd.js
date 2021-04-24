(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1026:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},875:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1026)),i={id:"core.initoptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/core.initoptions",id:"version-4.5/api/interfaces/core.initoptions",isDocsHomePage:!1,title:"Interface: InitOptions<T>",description:"Interface: InitOptions",source:"@site/versioned_docs/version-4.5/api/interfaces/core.initoptions.md",slug:"/api/interfaces/core.initoptions",permalink:"/docs/api/interfaces/core.initoptions",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1619274759,formattedLastUpdatedAt:"4/24/2021",sidebar_label:"InitOptions",sidebar:"version-4.5/API",previous:{title:"Interface: IndexOptions<T>",permalink:"/docs/api/interfaces/core.indexoptions"},next:{title:"Interface: LoadedCollection<T, P>",permalink:"/docs/api/interfaces/core.loadedcollection"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Properties",id:"properties",children:[{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"where",id:"where",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-initoptionst"},"Interface: InitOptions<T",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".InitOptions"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"T"))))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"orderby"},"orderBy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"orderBy"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.queryordermap"},Object(o.b)("em",{parentName:"a"},"QueryOrderMap"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L378"},"packages/core/src/entity/Collection.ts:378")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"populate"},"populate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"populate"),": readonly ",Object(o.b)("em",{parentName:"p"},"string"),"[] ","|"," readonly keyof T[] ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy"},Object(o.b)("em",{parentName:"a"},"LoadStrategy"))," ","|"," ",Object(o.b)("em",{parentName:"p"},"PopulateChildren"),"<T",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L377"},"packages/core/src/entity/Collection.ts:377")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"where"},"where"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"where"),": ",Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core#filterquery"},Object(o.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/Collection.ts#L379"},"packages/core/src/entity/Collection.ts:379")))}b.isMDXComponent=!0}}]);