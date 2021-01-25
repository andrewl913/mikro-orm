(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return o}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),O=i(a),s=b,o=O["".concat(c,".").concat(s)]||O[s]||j[s]||r;return a?n.a.createElement(o,p(p({ref:t},l),{},{components:a})):n.a.createElement(o,p({ref:t},l))}));function o(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:b,c[1]=p;for(var l=2;l<r;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},544:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return i}));var b=a(3),n=a(7),r=(a(0),a(1253)),c={id:"knex.databasetable",title:"Class: DatabaseTable",sidebar_label:"DatabaseTable",hide_title:!0},p={unversionedId:"api/classes/knex.databasetable",id:"version-4.4/api/classes/knex.databasetable",isDocsHomePage:!1,title:"Class: DatabaseTable",description:"Class: DatabaseTable",source:"@site/versioned_docs/version-4.4/api/classes/knex.databasetable.md",slug:"/api/classes/knex.databasetable",permalink:"/docs/api/classes/knex.databasetable",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/knex.databasetable.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567456,sidebar_label:"DatabaseTable",sidebar:"version-4.4/API",previous:{title:"Class: DatabaseSchema",permalink:"/docs/api/classes/knex.databaseschema"},next:{title:"Class: EntityManager<D>",permalink:"/docs/api/classes/knex.entitymanager"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"columns",id:"columns",children:[]},{value:"foreignKeys",id:"foreignkeys",children:[]},{value:"indexes",id:"indexes",children:[]},{value:"name",id:"name",children:[]},{value:"schema",id:"schema",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getColumn",id:"getcolumn",children:[]},{value:"getColumns",id:"getcolumns",children:[]},{value:"getEntityDeclaration",id:"getentitydeclaration",children:[]},{value:"getIndexes",id:"getindexes",children:[]},{value:"getPropertyDeclaration",id:"getpropertydeclaration",children:[]},{value:"getPropertyDefaultValue",id:"getpropertydefaultvalue",children:[]},{value:"getPropertyName",id:"getpropertyname",children:[]},{value:"getPropertyType",id:"getpropertytype",children:[]},{value:"getReferenceType",id:"getreferencetype",children:[]},{value:"init",id:"init",children:[]}]}],l={toc:m};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-databasetable"},"Class: DatabaseTable"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".DatabaseTable"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DatabaseTable"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new DatabaseTable"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"schema?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schema?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.databasetable"}),Object(r.b)("em",{parentName:"a"},"DatabaseTable"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L9"}),"packages/knex/src/schema/DatabaseTable.ts:9")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"columns"},"columns"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("strong",{parentName:"p"},"columns"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L7"}),"packages/knex/src/schema/DatabaseTable.ts:7")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"foreignkeys"},"foreignKeys"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("strong",{parentName:"p"},"foreignKeys"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.foreignkey"}),Object(r.b)("em",{parentName:"a"},"ForeignKey")),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L9"}),"packages/knex/src/schema/DatabaseTable.ts:9")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"indexes"},"indexes"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("strong",{parentName:"p"},"indexes"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.index"}),Object(r.b)("em",{parentName:"a"},"Index")),"[]"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L8"}),"packages/knex/src/schema/DatabaseTable.ts:8")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"schema"},"schema"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"schema"),": ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"getcolumn"},"getColumn"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getColumn"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L18"}),"packages/knex/src/schema/DatabaseTable.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getcolumns"},"getColumns"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getColumns"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"[]"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"[]"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L14"}),"packages/knex/src/schema/DatabaseTable.ts:14")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getentitydeclaration"},"getEntityDeclaration"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getEntityDeclaration"),"(",Object(r.b)("inlineCode",{parentName:"p"},"namingStrategy"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy")),", ",Object(r.b)("inlineCode",{parentName:"p"},"schemaHelper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"namingStrategy")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaHelper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(r.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L58"}),"packages/knex/src/schema/DatabaseTable.ts:58")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getindexes"},"getIndexes"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getIndexes"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.index"}),Object(r.b)("em",{parentName:"a"},"Index")),"[]",">"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.index"}),Object(r.b)("em",{parentName:"a"},"Index")),"[]",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L22"}),"packages/knex/src/schema/DatabaseTable.ts:22")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpropertydeclaration"},"getPropertyDeclaration"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getPropertyDeclaration"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),", ",Object(r.b)("inlineCode",{parentName:"p"},"namingStrategy"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy")),", ",Object(r.b)("inlineCode",{parentName:"p"},"schemaHelper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(r.b)("inlineCode",{parentName:"p"},"compositeFkIndexes"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<{ ",Object(r.b)("inlineCode",{parentName:"p"},"keyName"),": ",Object(r.b)("em",{parentName:"p"},"string"),"  }",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/core.entityschema"}),Object(r.b)("em",{parentName:"a"},"EntitySchema")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("em",{parentName:"p"},"undefined"),">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"namingStrategy")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaHelper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"compositeFkIndexes")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<{ ",Object(r.b)("inlineCode",{parentName:"td"},"keyName"),": ",Object(r.b)("em",{parentName:"td"},"string"),"  }",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schema")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/core.entityschema"}),Object(r.b)("em",{parentName:"a"},"EntitySchema")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(r.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(r.b)("em",{parentName:"td"},"any"),">",", ",Object(r.b)("em",{parentName:"td"},"undefined"),">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L91"}),"packages/knex/src/schema/DatabaseTable.ts:91")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpropertydefaultvalue"},"getPropertyDefaultValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getPropertyDefaultValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"schemaHelper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),", ",Object(r.b)("inlineCode",{parentName:"p"},"propType"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"raw?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaHelper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper"))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column"))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"propType")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"raw")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"boolean")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L157"}),"packages/knex/src/schema/DatabaseTable.ts:157")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpropertyname"},"getPropertyName"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getPropertyName"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L133"}),"packages/knex/src/schema/DatabaseTable.ts:133")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getpropertytype"},"getPropertyType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getPropertyType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"namingStrategy"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy")),", ",Object(r.b)("inlineCode",{parentName:"p"},"schemaHelper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper")),", ",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),", ",Object(r.b)("inlineCode",{parentName:"p"},"defaultType?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"namingStrategy")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/core.namingstrategy"}),Object(r.b)("em",{parentName:"a"},"NamingStrategy"))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaHelper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.schemahelper"}),Object(r.b)("em",{parentName:"a"},"SchemaHelper"))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column"))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"defaultType")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"'string'")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L143"}),"packages/knex/src/schema/DatabaseTable.ts:143")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getreferencetype"},"getReferenceType"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getReferenceType"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/enums/core.referencetype"}),Object(r.b)("em",{parentName:"a"},"ReferenceType"))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/enums/core.referencetype"}),Object(r.b)("em",{parentName:"a"},"ReferenceType"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L121"}),"packages/knex/src/schema/DatabaseTable.ts:121")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"init"),"(",Object(r.b)("inlineCode",{parentName:"p"},"cols"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"indexes"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.index"}),Object(r.b)("em",{parentName:"a"},"Index")),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"pks"),": ",Object(r.b)("em",{parentName:"p"},"string"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"fks"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.foreignkey"}),Object(r.b)("em",{parentName:"a"},"ForeignKey")),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"enums"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"p"},"string"),"[]",">","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"cols")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.column"}),Object(r.b)("em",{parentName:"a"},"Column")),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"indexes")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.index"}),Object(r.b)("em",{parentName:"a"},"Index")),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"pks")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"fks")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.foreignkey"}),Object(r.b)("em",{parentName:"a"},"ForeignKey")),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enums")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(r.b)("em",{parentName:"a"},"Dictionary")),"<",Object(r.b)("em",{parentName:"td"},"string"),"[]",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/schema/DatabaseTable.ts#L35"}),"packages/knex/src/schema/DatabaseTable.ts:35")))}i.isMDXComponent=!0}}]);