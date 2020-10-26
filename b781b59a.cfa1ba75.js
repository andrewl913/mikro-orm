(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{585:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(6),b=(a(0),a(806)),i={id:"migrator",title:"Class: Migrator",sidebar_label:"Migrator"},c={unversionedId:"api/classes/migrator",id:"version-4.2/api/classes/migrator",isDocsHomePage:!1,title:"Class: Migrator",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/migrator.md",slug:"/api/classes/migrator",permalink:"/docs/api/classes/migrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/migrator.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1603704239,sidebar_label:"Migrator",sidebar:"version-4.2/API",previous:{title:"Class: MigrationStorage",permalink:"/docs/api/classes/migrationstorage"},next:{title:"Class: MikroORM<D>",permalink:"/docs/api/classes/mikroorm"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"generator",id:"generator",children:[]},{value:"options",id:"options",children:[]},{value:"runner",id:"runner",children:[]},{value:"schemaGenerator",id:"schemagenerator",children:[]},{value:"storage",id:"storage",children:[]},{value:"umzug",id:"umzug",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"getSchemaDiff",id:"getschemadiff",children:[]},{value:"getStorage",id:"getstorage",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"prefix",id:"prefix",children:[]},{value:"resolve",id:"resolve",children:[]},{value:"runInTransaction",id:"runintransaction",children:[]},{value:"runMigrations",id:"runmigrations",children:[]},{value:"up",id:"up",children:[]},{value:"validateInitialMigration",id:"validateinitialmigration",children:[]}]}],p={rightToc:o};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Migrator"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Migrator"),"(",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrator"}),"Migrator")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L20"}),"packages/migrations/src/Migrator.ts:20"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrator"}),"Migrator")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": Configuration","<","IDatabaseDriver","<","Connection>> = this.em.config"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L16"}),"packages/migrations/src/Migrator.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": AbstractSqlDriver","<","AbstractSqlConnection> = this.em.getDriver()"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L14"}),"packages/migrations/src/Migrator.ts:14"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"em"},"em"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"em"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L22"}),"packages/migrations/src/Migrator.ts:22"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"generator"},"generator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"generator"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationgenerator"}),"MigrationGenerator")," = new MigrationGenerator(this.driver, this.config.getNamingStrategy(), this.options)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L19"}),"packages/migrations/src/Migrator.ts:19"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions")," = this.config.get('migrations')"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L17"}),"packages/migrations/src/Migrator.ts:17"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runner"},"runner"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"runner"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationrunner"}),"MigrationRunner")," = new MigrationRunner(this.driver, this.options, this.config)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L18"}),"packages/migrations/src/Migrator.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"schemagenerator"},"schemaGenerator"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"schemaGenerator"),": SchemaGenerator = new SchemaGenerator(this.em)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L15"}),"packages/migrations/src/Migrator.ts:15"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"storage"},"storage"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"storage"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationstorage"}),"MigrationStorage")," = new MigrationStorage(this.driver, this.options)"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L20"}),"packages/migrations/src/Migrator.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"umzug"},"umzug"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"umzug"),": Umzug"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L13"}),"packages/migrations/src/Migrator.ts:13"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createmigration"},"createMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"blank?"),": boolean, ",Object(b.b)("inlineCode",{parentName:"p"},"initial?"),": boolean): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationresult"}),"MigrationResult"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L41"}),"packages/migrations/src/Migrator.ts:41"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"blank")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationresult"}),"MigrationResult"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L92"}),"packages/migrations/src/Migrator.ts:92"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L76"}),"packages/migrations/src/Migrator.ts:76"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPendingMigrations"),"(): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L82"}),"packages/migrations/src/Migrator.ts:82"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getschemadiff"},"getSchemaDiff"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSchemaDiff"),"(",Object(b.b)("inlineCode",{parentName:"p"},"blank"),": boolean, ",Object(b.b)("inlineCode",{parentName:"p"},"initial"),": boolean): Promise","<","string[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L118"}),"packages/migrations/src/Migrator.ts:118"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"blank")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getstorage"},"getStorage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getStorage"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationstorage"}),"MigrationStorage")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L96"}),"packages/migrations/src/Migrator.ts:96"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationstorage"}),"MigrationStorage")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialize"},"initialize"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"initialize"),"(",Object(b.b)("inlineCode",{parentName:"p"},"MigrationClass"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#constructor"}),"Constructor"),"<","Migration>, ",Object(b.b)("inlineCode",{parentName:"p"},"name?"),": string): object"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L108"}),"packages/migrations/src/Migrator.ts:108"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"MigrationClass")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#constructor"}),"Constructor"),"<","Migration>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"down")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"() => Promise","<","void>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"up")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"() => Promise","<","void>")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prefix"},"prefix"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"prefix"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": T): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L142"}),"packages/migrations/src/Migrator.ts:142"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," { from?: string ; migrations?: string[] ; to?: string ; transaction?: ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#transaction"}),"Transaction"),"  }")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"resolve"},"resolve"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"resolve"),"(",Object(b.b)("inlineCode",{parentName:"p"},"file"),": string): object"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L100"}),"packages/migrations/src/Migrator.ts:100"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"down")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"() => Promise","<","void>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"up")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"() => Promise","<","void>")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runintransaction"},"runInTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"runInTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#transaction"}),"Transaction"),", ",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"up",'"'," ","|"," ",'"',"down",'"',", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": string ","|"," string[] ","|"," undefined ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<","Migration[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L182"}),"packages/migrations/src/Migrator.ts:182"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"trx")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#transaction"}),"Transaction"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"up",'"'," ","|"," ",'"',"down",'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," undefined ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","Migration[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runmigrations"},"runMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"runMigrations"),"(",Object(b.b)("inlineCode",{parentName:"p"},"method"),": ",'"',"up",'"'," ","|"," ",'"',"down",'"',", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<","Migration[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L167"}),"packages/migrations/src/Migrator.ts:167"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"method")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"',"up",'"'," ","|"," ",'"',"down",'"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","Migration[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"up"),"(",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L88"}),"packages/migrations/src/Migrator.ts:88"))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"validateinitialmigration"},"validateInitialMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"validateInitialMigration"),"(): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migrator.ts#L67"}),"packages/migrations/src/Migrator.ts:67"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}l.isMDXComponent=!0},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),O=r,j=m["".concat(i,".").concat(O)]||m[O]||s[O]||b;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<b;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);