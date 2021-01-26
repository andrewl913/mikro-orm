(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(1253)),c={id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",hide_title:!0},i={unversionedId:"api/enums/core.changesettype",id:"version-4.4/api/enums/core.changesettype",isDocsHomePage:!1,title:"Enumeration: ChangeSetType",description:"Enumeration: ChangeSetType",source:"@site/versioned_docs/version-4.4/api/enums/core.changesettype.md",slug:"/api/enums/core.changesettype",permalink:"/docs/api/enums/core.changesettype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/enums/core.changesettype.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611648941,sidebar_label:"ChangeSetType",sidebar:"version-4.4/API",previous:{title:"Enumeration: Cascade",permalink:"/docs/api/enums/core.cascade"},next:{title:"Enumeration: EventType",permalink:"/docs/api/enums/core.eventtype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enumeration-changesettype"},"Enumeration: ChangeSetType"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".ChangeSetType"),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"create"},"CREATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CREATE"),': = "create"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L28"}),"packages/core/src/unit-of-work/ChangeSet.ts:28")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"delete"},"DELETE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DELETE"),': = "delete"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L30"}),"packages/core/src/unit-of-work/ChangeSet.ts:30")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"update"},"UPDATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"UPDATE"),': = "update"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/unit-of-work/ChangeSet.ts#L29"}),"packages/core/src/unit-of-work/ChangeSet.ts:29")))}s.isMDXComponent=!0}}]);