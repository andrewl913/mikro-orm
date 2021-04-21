(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1026:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return u}));var t=a(0),o=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=t,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||r;return a?o.a.createElement(u,s(s({ref:n},l),{},{components:a})):o.a.createElement(u,s({ref:n},l))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},204:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return p}));var t=a(3),o=a(8),r=(a(0),a(1026)),i={title:"Cascading persist, merge and remove",sidebar_label:"Cascading"},s={unversionedId:"cascading",id:"version-2.7/cascading",isDocsHomePage:!1,title:"Cascading persist, merge and remove",description:"When persisting or removing entity, all your references are by default cascade persisted.",source:"@site/versioned_docs/version-2.7/cascading.md",slug:"/cascading",permalink:"/docs/2.7/cascading",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/cascading.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1618991972,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"Cascading",sidebar:"version-2.7/docs",previous:{title:"Transactions and concurrency",permalink:"/docs/2.7/transactions"},next:{title:"Smart Nested Populate",permalink:"/docs/2.7/nested-populate"}},c=[{value:"Cascade persist",id:"cascade-persist",children:[]},{value:"Cascade merge",id:"cascade-merge",children:[]},{value:"Cascade remove",id:"cascade-remove",children:[]},{value:"Orphan removal",id:"orphan-removal",children:[]}],l={toc:c};function p(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When persisting or removing entity, all your references are by default cascade persisted.\nThis means that by persisting any entity, ORM will automatically persist all of its\nassociations. "),Object(r.b)("p",null,"You can control this behaviour via ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," attribute of ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToMany"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"@OneToMany")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToOne")," fields."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"New entities without primary key will be always persisted, regardless of ",Object(r.b)("inlineCode",{parentName:"p"},"cascade")," value. ")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"// cascade persist & merge is default value\n@OneToMany({ entity: () => Book, mappedBy: 'author' })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.MERGE] })\nbooks = new Collection<Book>(this);\n\n// only cascade remove\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// cascade persist and remove (but not merge)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n\n// no cascade\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [] })\nbooks = new Collection<Book>(this);\n\n// cascade all (persist, merge and remove)\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.ALL] })\nbooks = new Collection<Book>(this);\n\n// same as previous definition\n@OneToMany({ entity: () => Book, mappedBy: 'author', cascade: [Cascade.PERSIST, Cascade.MERGE, Cascade.REMOVE] })\nbooks = new Collection<Book>(this);\n")),Object(r.b)("h2",{id:"cascade-persist"},"Cascade persist"),Object(r.b)("p",null,"Here is example of how cascade persist works:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 'id', ['author', 'tags']);\nbook.author.name = 'Foo Bar';\nbook.tags[0].name = 'new name 1';\nbook.tags[1].name = 'new name 2';\nawait orm.em.persistAndFlush(book); // all book tags and author will be persisted too\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When cascade persisting collections, keep in mind only fully initialized collections\nwill be cascade persisted.")),Object(r.b)("h2",{id:"cascade-merge"},"Cascade merge"),Object(r.b)("p",null,"When you want to merge entity and all its associations, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.MERGE"),". This\ncomes handy when you want to clear identity map (e.g. when importing large number of entities),\nbut you also have to keep your parent entities managed (because otherwise they would be considered\nas new entities and insert-persisted, which would fail with non-unique identifier)."),Object(r.b)("p",null,"In following example, without having ",Object(r.b)("inlineCode",{parentName:"p"},"Author.favouriteBook")," set to cascade merge, you would\nget an error because it would be cascade-inserted with already taken ID. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const a1 = new Author(...);\na1.favouriteBook = new Book('the best', ...);\nawait orm.em.persistAndFlush(a1); // cascade persists favourite book as well\n\nfor (let i = 1; i < 1000; i++) {\n  const book = new Book('...', a1);\n  orm.em.persistLater(book);\n  \n  // persist every 100 records\n  if (i % 100 === 0) {\n    await orm.em.flush();\n    orm.em.clear(); // this makes both a1 and his favourite book detached\n    orm.em.merge(a1); // so we need to merge them to prevent cascade-inserts\n    \n    // without cascade merge, you would need to manually merge all his associations\n    orm.em.merge(a1.favouriteBook); // not needed with Cascade.MERGE\n  }\n}\n\nawait orm.em.flush();\n")),Object(r.b)("h2",{id:"cascade-remove"},"Cascade remove"),Object(r.b)("p",null,"Cascade remove works same way as cascade persist, just for removing entities. Following\nexample assumes that ",Object(r.b)("inlineCode",{parentName:"p"},"Book.publisher")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that cascade remove for collections can be inefficient as it will fire 1 query\nfor each entity in collection.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.removeEntity(book); // this will also remove book.publisher\n")),Object(r.b)("p",null,"Keep in mind that cascade remove ",Object(r.b)("strong",{parentName:"p"},"can be dangerous")," when used on ",Object(r.b)("inlineCode",{parentName:"p"},"@ManyToOne")," fields,\nas cascade removed entity can stay referenced in another entities that were not removed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"const publisher = new Publisher(...);\n// all books with same publisher\nbook1.publisher = book2.publisher = book3.publisher = publisher;\nawait orm.em.removeEntity(book1); // this will remove book1 and its publisher\n\n// but we still have reference to removed publisher here\nconsole.log(book2.publisher, book3.publisher);\n")),Object(r.b)("h2",{id:"orphan-removal"},"Orphan removal"),Object(r.b)("p",null,"In addition to ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", there is also additional and more aggressive remove\ncascading mode which can be specified using the ",Object(r.b)("inlineCode",{parentName:"p"},"orphanRemoval")," flag of the ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToOne"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"@OneToMany")," properties:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"export class Author {\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books = new Collection<Book>(this);\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"orphanRemoval")," flag behaves just like ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," for remove operation, so specifying\nboth is redundant.")),Object(r.b)("p",null,"With simple ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE"),", you wound need to remove the ",Object(r.b)("inlineCode",{parentName:"p"},"Author")," entity to cascade\nthe operation down to all loaded ",Object(r.b)("inlineCode",{parentName:"p"},"Book"),"s. By enabling orphan removal on the collection,\n",Object(r.b)("inlineCode",{parentName:"p"},"Book"),"s will be also removed when they get disconnected from the collection (either via\n",Object(r.b)("inlineCode",{parentName:"p"},"remove()"),", or by replacing collection items via ",Object(r.b)("inlineCode",{parentName:"p"},"set()"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"await author.books.set([book1, book2]); // replace whole collection\nawait author.books.remove(book1); // remove book from collection\nawait orm.em.persistAndFlush(author); // book1 will be removed, as well as all original items (before we called `set()`)\n")),Object(r.b)("p",null,"In this example, no ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," would be removed with simple ",Object(r.b)("inlineCode",{parentName:"p"},"Cascade.REMOVE")," as no remove operation\nwas executed. "))}p.isMDXComponent=!0}}]);