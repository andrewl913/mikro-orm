(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=s(a),O=r,j=m["".concat(c,".").concat(O)]||m[O]||i[O]||n;return a?b.a.createElement(j,p(p({ref:t},o),{},{components:a})):b.a.createElement(j,p({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<n;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},599:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),b=a(7),n=(a(0),a(1253)),c={id:"arraytype",title:"Class: ArrayType<T>",sidebar_label:"ArrayType"},p={unversionedId:"api/classes/arraytype",id:"version-4.3/api/classes/arraytype",isDocsHomePage:!1,title:"Class: ArrayType<T>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/classes/arraytype.md",slug:"/api/classes/arraytype",permalink:"/docs/4.3/api/classes/arraytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/arraytype.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567456,sidebar_label:"ArrayType",sidebar:"version-4.3/API",previous:{title:"Class: ArrayCriteriaNode",permalink:"/docs/4.3/api/classes/arraycriterianode"},next:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/4.3/api/classes/baseentity"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"hydrate",id:"hydrate",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],o={toc:l};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","T[] ","|"," null, string ","|"," null>"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"ArrayType")),Object(n.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/enumarraytype"}),"EnumArrayType")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new ArrayType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"hydrate?"),": (i: string) => T): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/arraytype"}),"ArrayType")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L7"}),"packages/core/src/types/ArrayType.ts:7"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hydrate")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(i: string) => T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"i => i as T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/arraytype"}),"ArrayType")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"hydrate"},"hydrate"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"hydrate"),": (i: string) => T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L9"}),"packages/core/src/types/ArrayType.ts:9"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#compareastype"}),"compareAsType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L41"}),"packages/core/src/types/ArrayType.ts:41"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[] ","|"," null, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),", ",Object(n.b)("inlineCode",{parentName:"p"},"fromQuery?"),": boolean): string ","|"," null"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#converttodatabasevalue"}),"convertToDatabaseValue"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L13"}),"packages/core/src/types/ArrayType.ts:13"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[] ","|"," null")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string ","|"," null"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[] ","|"," string ","|"," null, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),"): T[] ","|"," null"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#converttojsvalue"}),"convertToJSValue"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L29"}),"packages/core/src/types/ArrayType.ts:29"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[] ","|"," string ","|"," null")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T[] ","|"," null"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),"): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#getcolumntype"}),"getColumnType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L49"}),"packages/core/src/types/ArrayType.ts:49"))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T[]): T[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#tojson"}),"toJSON"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/ArrayType.ts#L45"}),"packages/core/src/types/ArrayType.ts:45"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<","JSType, DBType>(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>>): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#gettype"}),"getType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>"))}s.isMDXComponent=!0}}]);