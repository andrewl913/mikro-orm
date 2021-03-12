(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),i=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=i(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(a),j=n,o=d["".concat(l,".").concat(j)]||d[j]||O[j]||b;return a?r.a.createElement(o,c(c({ref:t},m),{},{components:a})):r.a.createElement(o,c({ref:t},m))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var m=2;m<b;m++)l[m]=a[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},542:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(8),b=(a(0),a(1052)),l={id:"knex.knex.batchinsertbuilder",title:"Interface: BatchInsertBuilder<TRecord, TResult>",sidebar_label:"BatchInsertBuilder",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.batchinsertbuilder",id:"version-4.4/api/interfaces/knex.knex.batchinsertbuilder",isDocsHomePage:!1,title:"Interface: BatchInsertBuilder<TRecord, TResult>",description:"Interface: BatchInsertBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.batchinsertbuilder.md",slug:"/api/interfaces/knex.knex.batchinsertbuilder",permalink:"/docs/api/interfaces/knex.knex.batchinsertbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.batchinsertbuilder.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1615563018,sidebar_label:"BatchInsertBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: AsymmetricAggregation<TRecord, TResult, TValue>",permalink:"/docs/api/interfaces/knex.knex.asymmetricaggregation"},next:{title:"Interface: ChainableInterface<T>",permalink:"/docs/api/interfaces/knex.knex.chainableinterface"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"Symbol.toStringTag",id:"symboltostringtag",children:[]}]},{value:"Methods",id:"methods",children:[{value:"catch",id:"catch",children:[]},{value:"finally",id:"finally",children:[]},{value:"returning",id:"returning",children:[]},{value:"then",id:"then",children:[]},{value:"transacting",id:"transacting",children:[]}]}],m={toc:p};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-batchinsertbuildertrecord-tresult"},"Interface: BatchInsertBuilder<TRecord, TResult",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".BatchInsertBuilder"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TRecord")),Object(b.b)("td",{parentName:"tr",align:null},"{}"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"number"),"[]")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"ResolveResult"),"<TResult",">",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"BatchInsertBuilder")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"symboltostringtag"},"[Symbol.toStringTag]"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"[Symbol.toStringTag]"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"catch"},"catch"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"catch"),"<TResult",">","(",Object(b.b)("inlineCode",{parentName:"p"},"onrejected?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"reason"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => TResult ","|"," ",Object(b.b)("em",{parentName:"p"},"PromiseLike"),"<TResult",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"Resolve"),"<TResult",">"," ","|"," TResult",">"),Object(b.b)("p",null,"Attaches a callback for only the rejection of the Promise."),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"never"))))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"onrejected?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"td"},"reason"),": ",Object(b.b)("em",{parentName:"td"},"any"),") => TResult ","|"," ",Object(b.b)("em",{parentName:"td"},"PromiseLike"),"<TResult",">"),Object(b.b)("td",{parentName:"tr",align:null},"The callback to execute when the Promise is rejected.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"Resolve"),"<TResult",">"," ","|"," TResult",">"),Object(b.b)("p",null,"A Promise for the completion of the callback."),Object(b.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1448"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"finally"},"finally"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"finally"),"(",Object(b.b)("inlineCode",{parentName:"p"},"onfinally?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," () => ",Object(b.b)("em",{parentName:"p"},"void"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",">"),Object(b.b)("p",null,"Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\nresolved value cannot be modified from the callback."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"onfinally?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"null")," ","|"," () => ",Object(b.b)("em",{parentName:"td"},"void")),Object(b.b)("td",{parentName:"tr",align:null},"The callback to execute when the Promise is settled (fulfilled or rejected).")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",">"),Object(b.b)("p",null,"A Promise for the completion of the callback."),Object(b.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es2018.promise.d.ts:31"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"returning"},"returning"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"returning"),"(",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("em",{parentName:"p"},"**): ["),"BatchInsertBuilder",Object(b.b)("em",{parentName:"p"},"](/docs/api/interfaces/knex.knex.batchinsertbuilder)<TRecord, "),"DeferredKeySelection",Object(b.b)("em",{parentName:"p"},"<TRecord, "),"never",Object(b.b)("em",{parentName:"p"},", "),"false",Object(b.b)("em",{parentName:"p"},", {}, "),"false",Object(b.b)("em",{parentName:"p"},", {}, "),"never*",">","[]",">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"column")),Object(b.b)("td",{parentName:"tr",align:null},"***")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"DeferredKeySelection"),"<TRecord, ",Object(b.b)("em",{parentName:"p"},"never"),", ",Object(b.b)("em",{parentName:"p"},"false"),", {}, ",Object(b.b)("em",{parentName:"p"},"false"),", {}, ",Object(b.b)("em",{parentName:"p"},"never"),">","[]",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1541"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"column"),": TKey): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TKey")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"SetSingle"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, TKey","\\",">, ",Object(b.b)("em",{parentName:"td"},"true"),"\\",">[]")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"column")),Object(b.b)("td",{parentName:"tr",align:null},"TKey")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1542"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"returning"),"<TKey, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"columns"),": readonly TKey[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TKey")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},"-"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"SetSingle"),"<",Object(b.b)("em",{parentName:"td"},"AddAliases"),"<",Object(b.b)("em",{parentName:"td"},"AddKey"),"<",Object(b.b)("em",{parentName:"td"},"SetBase"),"<",Object(b.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},Object(b.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(b.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, TKey","\\",">, {}","\\",">, ",Object(b.b)("em",{parentName:"td"},"false"),"\\",">[]")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"columns")),Object(b.b)("td",{parentName:"tr",align:null},"readonly TKey[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1552"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"returning"),"<TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"column"),": ",Object(b.b)("em",{parentName:"p"},"unknown")," ",Object(b.b)("em",{parentName:"p"},"extends")," TRecord ? ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(b.b)("em",{parentName:"p"},"string"),"[] : ",Object(b.b)("em",{parentName:"p"},"never"),"): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">[]")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"column")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"unknown")," ",Object(b.b)("em",{parentName:"td"},"extends")," TRecord ? ",Object(b.b)("em",{parentName:"td"},"string")," ","|"," readonly ",Object(b.b)("em",{parentName:"td"},"string"),"[] : ",Object(b.b)("em",{parentName:"td"},"never"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult2",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1562"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"then"},"then"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"then"),"<TResult1, TResult2",">","(",Object(b.b)("inlineCode",{parentName:"p"},"onfulfilled?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"value"),": ",Object(b.b)("em",{parentName:"p"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",Object(b.b)("em",{parentName:"p"},"PromiseLike"),"<TResult1",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"onrejected?"),": ",Object(b.b)("em",{parentName:"p"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"p"},"reason"),": ",Object(b.b)("em",{parentName:"p"},"any"),") => TResult2 ","|"," ",Object(b.b)("em",{parentName:"p"},"PromiseLike"),"<TResult2",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),Object(b.b)("p",null,"Attaches callbacks for the resolution and/or rejection of the Promise."),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult1")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"Resolve"),"<TResult","\\",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"TResult2")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"never"))))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"onfulfilled?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"td"},"value"),": ",Object(b.b)("em",{parentName:"td"},"Resolve"),"<TResult",">",") => TResult1 ","|"," ",Object(b.b)("em",{parentName:"td"},"PromiseLike"),"<TResult1",">"),Object(b.b)("td",{parentName:"tr",align:null},"The callback to execute when the Promise is resolved.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"onrejected?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"null")," ","|"," (",Object(b.b)("inlineCode",{parentName:"td"},"reason"),": ",Object(b.b)("em",{parentName:"td"},"any"),") => TResult2 ","|"," ",Object(b.b)("em",{parentName:"td"},"PromiseLike"),"<TResult2",">"),Object(b.b)("td",{parentName:"tr",align:null},"The callback to execute when the Promise is rejected.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<TResult1 ","|"," TResult2",">"),Object(b.b)("p",null,"A Promise for the completion of which ever callback is executed."),Object(b.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:1441"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"transacting"},"transacting"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"transacting"),"(",Object(b.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.transaction"},Object(b.b)("em",{parentName:"a"},"Transaction")),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"any"),">","): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"trx")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex.transaction"},Object(b.b)("em",{parentName:"a"},"Transaction")),"<",Object(b.b)("em",{parentName:"td"},"any"),", ",Object(b.b)("em",{parentName:"td"},"any"),">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.batchinsertbuilder"},Object(b.b)("em",{parentName:"a"},"BatchInsertBuilder")),"<TRecord, TResult",">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1539"))}i.isMDXComponent=!0}}]);