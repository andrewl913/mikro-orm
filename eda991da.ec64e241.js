(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{744:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(1),b=a(6),n=(a(0),a(806)),p={id:"type",title:"Class: Type<JSType, DBType>",sidebar_label:"Type"},c={unversionedId:"api/classes/type",id:"version-4.2/api/classes/type",isDocsHomePage:!1,title:"Class: Type<JSType, DBType>",description:"Type parameters",source:"@site/versioned_docs/version-4.2/api/classes/type.md",slug:"/api/classes/type",permalink:"/docs/api/classes/type",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/type.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1603704239,sidebar_label:"Type",sidebar:"version-4.2/API",previous:{title:"Class: TsMorphMetadataProvider",permalink:"/docs/api/classes/tsmorphmetadataprovider"},next:{title:"Class: UnderscoreNamingStrategy",permalink:"/docs/api/classes/underscorenamingstrategy"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"types",id:"types",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],o={rightToc:l};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/datetype"}),"DateType")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/timetype"}),"TimeType")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/biginttype"}),"BigIntType")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/blobtype"}),"BlobType")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/arraytype"}),"ArrayType")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/jsontype"}),"JsonType")))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"types"},"types"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"types"),": Map","<","any, any> = new Map()"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L6"}),"packages/core/src/types/Type.ts:6"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L26"}),"packages/core/src/types/Type.ts:26"))),Object(n.b)("p",null,"How should the raw database values be compared? Used in ",Object(n.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),", ",Object(n.b)("inlineCode",{parentName:"p"},"fromQuery?"),": boolean): DBType"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L11"}),"packages/core/src/types/Type.ts:11"))),Object(n.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType ","|"," DBType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," DBType"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType ","|"," DBType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),"): JSType"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L18"}),"packages/core/src/types/Type.ts:18"))),Object(n.b)("p",null,"Converts a value from its database representation to its JS representation of this type."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType ","|"," DBType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," JSType"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),"): string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L41"}),"packages/core/src/types/Type.ts:41"))),Object(n.b)("p",null,"Gets the SQL declaration snippet for a field of this type."),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": JSType, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform"),"): JSType ","|"," DBType"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L34"}),"packages/core/src/types/Type.ts:34"))),Object(n.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/platform"}),"Platform"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," JSType ","|"," DBType"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<","JSType, DBType>(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>>): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/type"}),"Type"),"<","JSType, DBType>"))}i.isMDXComponent=!0},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),i=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=i(a),O=r,j=s["".concat(p,".").concat(O)]||s[O]||m[O]||n;return a?b.a.createElement(j,c(c({ref:t},o),{},{components:a})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<n;o++)p[o]=a[o];return b.a.createElement.apply(null,p)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);