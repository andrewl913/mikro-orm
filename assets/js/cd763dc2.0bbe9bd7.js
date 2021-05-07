(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80289],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return g},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,d=u["".concat(m,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38861:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m},default:function(){return g}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={title:"Naming Strategy"},l={unversionedId:"naming-strategy",id:"naming-strategy",isDocsHomePage:!1,title:"Naming Strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/docs/naming-strategy.md",sourceDirName:".",slug:"/naming-strategy",permalink:"/docs/next/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/naming-strategy.md",version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1620414899,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"Naming Strategy"},sidebar:"docs",previous:{title:"Entity Generator",permalink:"/docs/next/entity-generator"},next:{title:"Property Validation",permalink:"/docs/next/property-validation"}},m=[{value:"Naming Strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[]},{value:"Naming Strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[]},{value:"NamingStrategy API",id:"namingstrategy-api",children:[]}],s={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies you can choose from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),(0,i.kt)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also extend ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractNamingStrategy")," which implements one method for you - ",(0,i.kt)("inlineCode",{parentName:"p"},"getClassName()"),"\nthat is used to map entity file name to class name.")),(0,i.kt)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming Strategy in mongo driver"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),(0,i.kt)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming Strategy in SQL drivers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,i.kt)("h2",{id:"namingstrategy-api"},"NamingStrategy API"),(0,i.kt)("h4",{id:"namingstrategygetclassnamefile-string-separator-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.getClassName(file: string, separator?: string): string")),(0,i.kt)("p",null,"Return a name of the class based on its file name."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyclasstotablenameentityname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.classToTableName(entityName: string): string")),(0,i.kt)("p",null,"Return a table name for an entity class."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategypropertytocolumnnamepropertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.propertyToColumnName(propertyName: string): string")),(0,i.kt)("p",null,"Return a column name for a property."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyreferencecolumnname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.referenceColumnName(): string")),(0,i.kt)("p",null,"Return the default reference column name."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjoincolumnnamepropertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinColumnName(propertyName: string): string")),(0,i.kt)("p",null,"Return a join column name for a property."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string")),(0,i.kt)("p",null,"Return a join table name. This is used as default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"pivotTable"),". "),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string")),(0,i.kt)("p",null,"Return the foreign key column name for the given parameters."),(0,i.kt)("hr",null))}g.isMDXComponent=!0}}]);