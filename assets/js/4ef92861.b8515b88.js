(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),O=r,j=m["".concat(c,".").concat(O)]||m[O]||s[O]||b;return a?n.a.createElement(j,p(p({ref:t},l),{},{components:a})):n.a.createElement(j,p({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<b;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},411:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(1253)),c={id:"cli.clihelper",title:"Class: CLIHelper",sidebar_label:"CLIHelper",hide_title:!0},p={unversionedId:"api/classes/cli.clihelper",id:"version-4.4/api/classes/cli.clihelper",isDocsHomePage:!1,title:"Class: CLIHelper",description:"Class: CLIHelper",source:"@site/versioned_docs/version-4.4/api/classes/cli.clihelper.md",slug:"/api/classes/cli.clihelper",permalink:"/docs/api/classes/cli.clihelper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/cli.clihelper.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567456,sidebar_label:"CLIHelper",sidebar:"version-4.4/API",previous:{title:"Class: CLIConfigurator",permalink:"/docs/api/classes/cli.cliconfigurator"},next:{title:"Class: AbstractNamingStrategy",permalink:"/docs/api/classes/core.abstractnamingstrategy"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dump",id:"dump",children:[]},{value:"dumpDependencies",id:"dumpdependencies",children:[]},{value:"dumpTable",id:"dumptable",children:[]},{value:"getConfigPaths",id:"getconfigpaths",children:[]},{value:"getConfiguration",id:"getconfiguration",children:[]},{value:"getDriverDependencies",id:"getdriverdependencies",children:[]},{value:"getModuleVersion",id:"getmoduleversion",children:[]},{value:"getNodeVersion",id:"getnodeversion",children:[]},{value:"getORM",id:"getorm",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-clihelper"},"Class: CLIHelper"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/cli"}),"cli"),".CLIHelper"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CLIHelper"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new CLIHelper"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/cli.clihelper"}),Object(b.b)("em",{parentName:"a"},"CLIHelper"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/cli.clihelper"}),Object(b.b)("em",{parentName:"a"},"CLIHelper"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"dump"},"dump"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dump"),"(",Object(b.b)("inlineCode",{parentName:"p"},"text"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"text")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L42"}),"packages/cli/src/CLIHelper.ts:42")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dumpdependencies"},"dumpDependencies"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dumpDependencies"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L55"}),"packages/cli/src/CLIHelper.ts:55")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dumptable"},"dumpTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"dumpTable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options"),": { ",Object(b.b)("inlineCode",{parentName:"p"},"columns"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"p"},"empty"),": ",Object(b.b)("em",{parentName:"p"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"p"},"rows"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[][]","  }): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{ ",Object(b.b)("inlineCode",{parentName:"td"},"columns"),": ",Object(b.b)("em",{parentName:"td"},"string"),"[] ; ",Object(b.b)("inlineCode",{parentName:"td"},"empty"),": ",Object(b.b)("em",{parentName:"td"},"string")," ; ",Object(b.b)("inlineCode",{parentName:"td"},"rows"),": ",Object(b.b)("em",{parentName:"td"},"string"),"[][]","  }")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L83"}),"packages/cli/src/CLIHelper.ts:83")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconfigpaths"},"getConfigPaths"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfigPaths"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L51"}),"packages/cli/src/CLIHelper.ts:51")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getconfiguration"},"getConfiguration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getConfiguration"),"<D",">","(",Object(b.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"D")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),", D",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),"\\",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"validate")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"...")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<D",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L9"}),"packages/cli/src/CLIHelper.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getdriverdependencies"},"getDriverDependencies"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getDriverDependencies"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L33"}),"packages/cli/src/CLIHelper.ts:33")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmoduleversion"},"getModuleVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getModuleVersion"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L74"}),"packages/cli/src/CLIHelper.ts:74")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getnodeversion"},"getNodeVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getNodeVersion"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L29"}),"packages/cli/src/CLIHelper.ts:29")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorm"},"getORM"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getORM"),"(",Object(b.b)("inlineCode",{parentName:"p"},"warnWhenNoEntities?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"opts?"),": ",Object(b.b)("em",{parentName:"p"},"Partial"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">","): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(b.b)("em",{parentName:"a"},"MikroORM")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"warnWhenNoEntities?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"opts")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"Partial"),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.configuration"}),Object(b.b)("em",{parentName:"a"},"Configuration")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"...")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.mikroorm"}),Object(b.b)("em",{parentName:"a"},"MikroORM")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.idatabasedriver"}),Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.connection"}),Object(b.b)("em",{parentName:"a"},"Connection")),">",">",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/cli/src/CLIHelper.ts#L13"}),"packages/cli/src/CLIHelper.ts:13")))}o.isMDXComponent=!0}}]);