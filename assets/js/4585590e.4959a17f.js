(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(r),u=n,d=l["".concat(i,".").concat(u)]||l[u]||m[u]||c;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},370:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(1253)),i={id:"core.eventargs",title:"Interface: EventArgs<T>",sidebar_label:"EventArgs",hide_title:!0},o={unversionedId:"api/interfaces/core.eventargs",id:"api/interfaces/core.eventargs",isDocsHomePage:!1,title:"Interface: EventArgs<T>",description:"Interface: EventArgs",source:"@site/docs/api/interfaces/core.eventargs.md",slug:"/api/interfaces/core.eventargs",permalink:"/docs/next/api/interfaces/core.eventargs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.eventargs.md",version:"current",sidebar_label:"EventArgs",sidebar:"API",previous:{title:"Interface: EnumOptions<T>",permalink:"/docs/next/api/interfaces/core.enumoptions"},next:{title:"Interface: EventSubscriber<T>",permalink:"/docs/next/api/interfaces/core.eventsubscriber"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"changeSet",id:"changeset",children:[]},{value:"em",id:"em",children:[]},{value:"entity",id:"entity",children:[]}]}],s={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-eventargst"},"Interface: EventArgs<T",">"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".EventArgs"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"EventArgs"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"changeset"},"changeSet"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"changeSet"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," | ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.changeset"}),Object(c.b)("em",{parentName:"a"},"ChangeSet")),"<T",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/24881dc/packages/core/src/events/EventSubscriber.ts#L9"}),"packages/core/src/events/EventSubscriber.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"em"},"em"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"em"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.entitymanager"}),Object(c.b)("em",{parentName:"a"},"EntityManager")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.idatabasedriver"}),Object(c.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/core.connection"}),Object(c.b)("em",{parentName:"a"},"Connection")),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/24881dc/packages/core/src/events/EventSubscriber.ts#L8"}),"packages/core/src/events/EventSubscriber.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"entity"},"entity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"entity"),": T"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/24881dc/packages/core/src/events/EventSubscriber.ts#L7"}),"packages/core/src/events/EventSubscriber.ts:7")))}p.isMDXComponent=!0}}]);