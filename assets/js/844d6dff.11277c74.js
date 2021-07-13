(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54127],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77884:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},p="Interface: MigrationSource<TMigrationSpec>",l={unversionedId:"api/interfaces/knex.knex-1.migrationsource",id:"version-4.5/api/interfaces/knex.knex-1.migrationsource",isDocsHomePage:!1,title:"Interface: MigrationSource<TMigrationSpec>",description:"knex.Knex.MigrationSource",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrationsource.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.migrationsource",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1626149124,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Migration",permalink:"/docs/api/interfaces/knex.knex-1.migration"},next:{title:"Migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Methods",id:"methods",children:[{value:"getMigration",id:"getmigration",children:[]},{value:"getMigrationName",id:"getmigrationname",children:[]},{value:"getMigrations",id:"getmigrations",children:[]}]}],c={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-migrationsourcetmigrationspec"},"Interface: MigrationSource<TMigrationSpec",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MigrationSource"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TMigrationSpec"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getmigration"},"getMigration"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigration"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},(0,i.kt)("em",{parentName:"a"},"Migration"))),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2117"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmigrationname"},"getMigrationName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigrationName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"migration")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2116"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getmigrations"},"getMigrations"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getMigrations"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"loadExtensions"),": readonly ",(0,i.kt)("em",{parentName:"p"},"string"),"[]): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"loadExtensions")),(0,i.kt)("td",{parentName:"tr",align:"left"},"readonly ",(0,i.kt)("em",{parentName:"td"},"string"),"[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2115"))}s.isMDXComponent=!0}}]);