(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),l=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O=function(e){var t=l(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=l(a),j=r,s=O["".concat(c,".").concat(j)]||O[j]||m[j]||n;return a?b.a.createElement(s,o(o({ref:t},p),{},{components:a})):b.a.createElement(s,o({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},532:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),b=a(7),n=(a(0),a(1253)),c={id:"core.mikroorm",title:"Class: MikroORM<D>",sidebar_label:"MikroORM",hide_title:!0},o={unversionedId:"api/classes/core.mikroorm",id:"version-4.4/api/classes/core.mikroorm",isDocsHomePage:!1,title:"Class: MikroORM<D>",description:"Class: MikroORM",source:"@site/versioned_docs/version-4.4/api/classes/core.mikroorm.md",slug:"/api/classes/core.mikroorm",permalink:"/docs/api/classes/core.mikroorm",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.mikroorm.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567456,sidebar_label:"MikroORM",sidebar:"version-4.4/API",previous:{title:"Class: MetadataValidator",permalink:"/docs/api/classes/core.metadatavalidator"},next:{title:"Class: MongoNamingStrategy",permalink:"/docs/api/classes/core.mongonamingstrategy"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"logger",id:"logger",children:[]},{value:"metadata",id:"metadata",children:[]}]},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"connect",id:"connect",children:[]},{value:"getEntityGenerator",id:"getentitygenerator",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMigrator",id:"getmigrator",children:[]},{value:"getSchemaGenerator",id:"getschemagenerator",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"init",id:"init",children:[]}]}],p={toc:i};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-mikroormd"},"Class: MikroORM<D",">"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".MikroORM"),Object(n.b)("p",null,"Helper class for bootstrapping the MikroORM."),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"D")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver"))),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")))))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"MikroORM"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new MikroORM"),"<D",">","(",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#options"}),Object(n.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<D",">","): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(n.b)("em",{parentName:"a"},"MikroORM")),"<D",">"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"D")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#options"}),Object(n.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<D",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(n.b)("em",{parentName:"a"},"MikroORM")),"<D",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L47"}),"packages/core/src/MikroORM.ts:47")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"config"},"config"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"config"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<D",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L16"}),"packages/core/src/MikroORM.ts:16")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"driver"},"driver"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"driver"),": D"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L18"}),"packages/core/src/MikroORM.ts:18")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"em"},"em"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"em"),": D[",Object(n.b)("em",{parentName:"p"},"typeof")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#entitymanagertype"}),Object(n.b)("em",{parentName:"a"},"EntityManagerType")),"] & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymanager"}),Object(n.b)("em",{parentName:"a"},"EntityManager")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L15"}),"packages/core/src/MikroORM.ts:15")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"logger"},"logger"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"logger"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.logger"}),Object(n.b)("em",{parentName:"a"},"Logger"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L19"}),"packages/core/src/MikroORM.ts:19")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L17"}),"packages/core/src/MikroORM.ts:17")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"close"},"close"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"close"),"(",Object(n.b)("inlineCode",{parentName:"p"},"force?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Closes the database connection."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"force")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"void"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L94"}),"packages/core/src/MikroORM.ts:94")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"connect"},"connect"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"connect"),"(): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<D",">"),Object(n.b)("p",null,"Connects to the database."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<D",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L69"}),"packages/core/src/MikroORM.ts:69")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getentitygenerator"},"getEntityGenerator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getEntityGenerator"),"<T",">","(): T"),Object(n.b)("p",null,"Gets the EntityGenerator."),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IEntityGenerator"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IEntityGenerator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L115"}),"packages/core/src/MikroORM.ts:115")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadata"},"getMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getMetadata"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Gets the MetadataStorage."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L101"}),"packages/core/src/MikroORM.ts:101")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmigrator"},"getMigrator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getMigrator"),"<T",">","(): T"),Object(n.b)("p",null,"Gets the Migrator."),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IMigrator"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IMigrator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L124"}),"packages/core/src/MikroORM.ts:124")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getschemagenerator"},"getSchemaGenerator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getSchemaGenerator"),"<T",">","(): T"),Object(n.b)("p",null,"Gets the SchemaGenerator."),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISchemaGenerator"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISchemaGenerator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L108"}),"packages/core/src/MikroORM.ts:108")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isconnected"},"isConnected"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isConnected"),"(): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"boolean"),">"),Object(n.b)("p",null,"Checks whether the database connection is active."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("em",{parentName:"p"},"boolean"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L87"}),"packages/core/src/MikroORM.ts:87")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"init"),"<D",">","(",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#options"}),Object(n.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<D",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"connect?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(n.b)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),Object(n.b)("p",null,"Initialize the ORM, load entity metadata, create EntityManager and connect to the database.\nIf you omit the ",Object(n.b)("inlineCode",{parentName:"p"},"options")," parameter, your CLI config will be used."),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"D")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(n.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#options"}),Object(n.b)("em",{parentName:"a"},"Options")),"<D",">"," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(n.b)("em",{parentName:"a"},"Configuration")),"<D",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"connect")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(n.b)("em",{parentName:"a"},"MikroORM")),"<D",">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/MikroORM.ts#L25"}),"packages/core/src/MikroORM.ts:25")))}l.isMDXComponent=!0}}]);