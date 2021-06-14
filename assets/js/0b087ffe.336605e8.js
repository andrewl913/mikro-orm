(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66922],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return i},kt:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),c=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=c(e.components);return n.createElement(m.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=c(t),d=r,b=k["".concat(m,".").concat(d)]||k[d]||o[d]||s;return t?n.createElement(b,p(p({ref:a},i),{},{components:t})):n.createElement(b,p({ref:a},i))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=k;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<s;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},64417:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return i}});var n=t(74034),r=t(79973),s=(t(67294),t(3905)),p={id:"knex.databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/classes/knex.databaseschema",id:"version-4.5/api/classes/knex.databaseschema",isDocsHomePage:!1,title:"Class: DatabaseSchema",description:"knex.DatabaseSchema",source:"@site/versioned_docs/version-4.5/api/classes/knex.databaseschema.md",sourceDirName:"api/classes",slug:"/api/classes/knex.databaseschema",permalink:"/docs/api/classes/knex.databaseschema",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1623656597,formattedLastUpdatedAt:"6/14/2021",sidebar_label:"DatabaseSchema",frontMatter:{id:"knex.databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: CriteriaNodeFactory",permalink:"/docs/api/classes/knex.criterianodefactory"},next:{title:"Class: DatabaseTable",permalink:"/docs/api/classes/knex.databasetable"}},m=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"tables",id:"tables",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addTable",id:"addtable",children:[]},{value:"getTable",id:"gettable",children:[]},{value:"getTables",id:"gettables",children:[]},{value:"create",id:"create",children:[]}]}],c={toc:m};function i(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".DatabaseSchema"),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"+"," ",(0,s.kt)("strong",{parentName:"p"},"new DatabaseSchema"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databaseschema"},(0,s.kt)("em",{parentName:"a"},"DatabaseSchema"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databaseschema"},(0,s.kt)("em",{parentName:"a"},"DatabaseSchema"))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"tables"},"tables"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"tables"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable")),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseSchema.ts#L9"},"packages/knex/src/schema/DatabaseSchema.ts:9")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"addtable"},"addTable"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"addTable"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,s.kt)("em",{parentName:"p"},"string"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"schema"),": ",(0,s.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("em",{parentName:"p"},"string"),"): ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"schema")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"undefined")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"null")," ","|"," ",(0,s.kt)("em",{parentName:"td"},"string"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseSchema.ts#L11"},"packages/knex/src/schema/DatabaseSchema.ts:11")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gettable"},"getTable"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getTable"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,s.kt)("em",{parentName:"p"},"string"),"): ",(0,s.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,s.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"string"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable"))),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseSchema.ts#L22"},"packages/knex/src/schema/DatabaseSchema.ts:22")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gettables"},"getTables"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getTables"),"(): ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable")),"[]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databasetable"},(0,s.kt)("em",{parentName:"a"},"DatabaseTable")),"[]"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseSchema.ts#L18"},"packages/knex/src/schema/DatabaseSchema.ts:18")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"create"},"create"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static"),(0,s.kt)("strong",{parentName:"p"},"create"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"connection"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,s.kt)("em",{parentName:"a"},"AbstractSqlConnection")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"helper"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.schemahelper"},(0,s.kt)("em",{parentName:"a"},"SchemaHelper")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,s.kt)("em",{parentName:"a"},"Configuration")),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,s.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,s.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databaseschema"},(0,s.kt)("em",{parentName:"a"},"DatabaseSchema")),">"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"connection")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.abstractsqlconnection"},(0,s.kt)("em",{parentName:"a"},"AbstractSqlConnection")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"helper")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/classes/knex.schemahelper"},(0,s.kt)("em",{parentName:"a"},"SchemaHelper")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"config")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,s.kt)("em",{parentName:"a"},"Configuration")),"<",(0,s.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,s.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,s.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,s.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.databaseschema"},(0,s.kt)("em",{parentName:"a"},"DatabaseSchema")),">"),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/schema/DatabaseSchema.ts#L26"},"packages/knex/src/schema/DatabaseSchema.ts:26")))}i.isMDXComponent=!0}}]);