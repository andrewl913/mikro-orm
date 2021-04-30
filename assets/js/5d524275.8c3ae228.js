(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),o=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=o(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=o(a),O=r,j=i["".concat(p,".").concat(O)]||i[O]||s[O]||n;return a?b.a.createElement(j,c(c({ref:t},m),{},{components:a})):b.a.createElement(j,c({ref:t},m))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var m=2;m<n;m++)p[m]=a[m];return b.a.createElement.apply(null,p)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},407:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),b=a(8),n=(a(0),a(1026)),p={id:"core.biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/core.biginttype",id:"version-4.5/api/classes/core.biginttype",isDocsHomePage:!1,title:"Class: BigIntType",description:"Class: BigIntType",source:"@site/versioned_docs/version-4.5/api/classes/core.biginttype.md",slug:"/api/classes/core.biginttype",permalink:"/docs/api/classes/core.biginttype",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619759211,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"BigIntType",sidebar:"version-4.5/API",previous:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/api/classes/core.baseentity"},next:{title:"Class: BlobType",permalink:"/docs/api/classes/core.blobtype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],m={toc:l};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-biginttype"},"Class: BigIntType"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".BigIntType"),Object(n.b)("p",null,"This type will automatically convert string values returned from the database to native JS bigints."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(n.b)("em",{parentName:"a"},"Type")),"<string ","|"," bigint ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," undefined, string ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," undefined",">"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"BigIntType")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new BigIntType"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.biginttype"},Object(n.b)("em",{parentName:"a"},"BigIntType"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.biginttype"},Object(n.b)("em",{parentName:"a"},"BigIntType"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"How should the raw database values be compared? Used in ",Object(n.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/Type.ts#L36"},"packages/core/src/types/Type.ts:36")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"bigint"),"): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"td"},"null")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"bigint"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/BigIntType.ts#L10"},"packages/core/src/types/BigIntType.ts:10")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/Type.ts#L25"},"packages/core/src/types/Type.ts:25")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"bigint"),"): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"td"},"null")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"bigint"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/BigIntType.ts#L18"},"packages/core/src/types/BigIntType.ts:18")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/Type.ts#L30"},"packages/core/src/types/Type.ts:30")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/BigIntType.ts#L26"},"packages/core/src/types/BigIntType.ts:26")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"bigint"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"bigint")),Object(n.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"td"},"null")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string")," ","|"," ",Object(n.b)("em",{parentName:"td"},"bigint"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," ",Object(n.b)("em",{parentName:"p"},"bigint")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/Type.ts#L44"},"packages/core/src/types/Type.ts:44")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#constructor"},Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#constructor"},Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.type"},Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.type"},"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/types/Type.ts#L56"},"packages/core/src/types/Type.ts:56")))}o.isMDXComponent=!0}}]);