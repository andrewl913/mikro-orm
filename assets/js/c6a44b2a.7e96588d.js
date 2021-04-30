(window.webpackJsonp=window.webpackJsonp||[]).push([[730],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(a),d=r,O=s["".concat(b,".").concat(d)]||s[d]||m[d]||c;return a?n.a.createElement(O,o(o({ref:t},i),{},{components:a})):n.a.createElement(O,o({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},803:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),c=(a(0),a(1026)),b={id:"core.changeset",title:"Class: ChangeSet<T>",sidebar_label:"ChangeSet",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.changeset",id:"version-4.5/api/classes/core.changeset",isDocsHomePage:!1,title:"Class: ChangeSet<T>",description:"Class: ChangeSet",source:"@site/versioned_docs/version-4.5/api/classes/core.changeset.md",slug:"/api/classes/core.changeset",permalink:"/docs/api/classes/core.changeset",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619759211,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"ChangeSet",sidebar:"version-4.5/API",previous:{title:"Class: BlobType",permalink:"/docs/api/classes/core.blobtype"},next:{title:"Class: ChangeSetComputer",permalink:"/docs/api/classes/core.changesetcomputer"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"collection",id:"collection",children:[]},{value:"entity",id:"entity",children:[]},{value:"name",id:"name",children:[]},{value:"originalEntity",id:"originalentity",children:[]},{value:"payload",id:"payload",children:[]},{value:"persisted",id:"persisted",children:[]},{value:"rootName",id:"rootname",children:[]},{value:"type",id:"type",children:[]}]}],i={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-changesett"},"Class: ChangeSet<T",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".ChangeSet"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(c.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ChangeSet"),"<T",">","(",Object(c.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(c.b)("inlineCode",{parentName:"p"},"type"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/enums/core.changesettype"},Object(c.b)("em",{parentName:"a"},"ChangeSetType")),", ",Object(c.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},Object(c.b)("em",{parentName:"a"},"ChangeSet")),"<T",">"),Object(c.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(c.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"entity")),Object(c.b)("td",{parentName:"tr",align:"left"},"T")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"type")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/enums/core.changesettype"},Object(c.b)("em",{parentName:"a"},"ChangeSetType")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"payload")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},Object(c.b)("em",{parentName:"a"},"ChangeSet")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L3"},"packages/core/src/unit-of-work/ChangeSet.ts:3")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"collection"},"collection"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"collection"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L19"},"packages/core/src/unit-of-work/ChangeSet.ts:19")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"entity"},"entity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"entity"),": T"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L21"},"packages/core/src/unit-of-work/ChangeSet.ts:21")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L17"},"packages/core/src/unit-of-work/ChangeSet.ts:17")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"originalentity"},"originalEntity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"originalEntity"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L24"},"packages/core/src/unit-of-work/ChangeSet.ts:24")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"payload"},"payload"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"payload"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(c.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L22"},"packages/core/src/unit-of-work/ChangeSet.ts:22")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"persisted"},"persisted"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"persisted"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L23"},"packages/core/src/unit-of-work/ChangeSet.ts:23")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rootname"},"rootName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"rootName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L18"},"packages/core/src/unit-of-work/ChangeSet.ts:18")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/api/enums/core.changesettype"},Object(c.b)("em",{parentName:"a"},"ChangeSetType"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/unit-of-work/ChangeSet.ts#L20"},"packages/core/src/unit-of-work/ChangeSet.ts:20")))}l.isMDXComponent=!0}}]);