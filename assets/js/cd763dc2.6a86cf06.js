(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{710:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(874)),o={title:"Naming Strategy"},l={unversionedId:"naming-strategy",id:"naming-strategy",isDocsHomePage:!1,title:"Naming Strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/docs/naming-strategy.md",slug:"/naming-strategy",permalink:"/docs/next/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/naming-strategy.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611065669,sidebar:"docs",previous:{title:"Entity Generator",permalink:"/docs/next/entity-generator"},next:{title:"Property Validation",permalink:"/docs/next/property-validation"}},c=[{value:"Naming Strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[]},{value:"Naming Strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[]},{value:"NamingStrategy API",id:"namingstrategy-api",children:[]}],m={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies you can choose from:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MongoDriver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),Object(i.b)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also extend ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractNamingStrategy")," which implements one method for you - ",Object(i.b)("inlineCode",{parentName:"p"},"getClassName()"),"\nthat is used to map entity file name to class name.")),Object(i.b)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming Strategy in mongo driver"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",Object(i.b)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),Object(i.b)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming Strategy in SQL drivers"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(i.b)("h2",{id:"namingstrategy-api"},"NamingStrategy API"),Object(i.b)("h4",{id:"namingstrategygetclassnamefile-string-separator-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.getClassName(file: string, separator?: string): string")),Object(i.b)("p",null,"Return a name of the class based on its file name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyclasstotablenameentityname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.classToTableName(entityName: string): string")),Object(i.b)("p",null,"Return a table name for an entity class."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategypropertytocolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.propertyToColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyreferencecolumnname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.referenceColumnName(): string")),Object(i.b)("p",null,"Return the default reference column name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoincolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a join column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string")),Object(i.b)("p",null,"Return a join table name. This is used as default value for ",Object(i.b)("inlineCode",{parentName:"p"},"pivotTable"),". "),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string")),Object(i.b)("p",null,"Return the foreign key column name for the given parameters."),Object(i.b)("hr",null))}s.isMDXComponent=!0},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,u=b["".concat(o,".").concat(p)]||b[p]||g[p]||i;return n?a.a.createElement(u,l(l({ref:t},m),{},{components:n})):a.a.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);