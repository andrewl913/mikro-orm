(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1051:function(e,o,n){"use strict";n.d(o,"a",(function(){return p})),n.d(o,"b",(function(){return m}));var t=n(0),a=n.n(t);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var o=a.a.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},p=function(e){var o=b(e.components);return a.a.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.a.createElement(a.a.Fragment,{},o)}},u=a.a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=t,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,l(l({ref:o},s),{},{components:n})):a.a.createElement(m,l({ref:o},s))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},218:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return r})),n.d(o,"metadata",(function(){return l})),n.d(o,"toc",(function(){return c})),n.d(o,"default",(function(){return b}));var t=n(3),a=n(8),i=(n(0),n(1051)),r={title:"Collections"},l={unversionedId:"collections",id:"version-2.7/collections",isDocsHomePage:!1,title:"Collections",description:"OneToMany and ManyToMany collections are stored in a Collection wrapper. It implements",source:"@site/versioned_docs/version-2.7/collections.md",slug:"/collections",permalink:"/docs/2.7/collections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/collections.md",version:"2.7",lastUpdatedBy:"Yousuf Hasan",lastUpdatedAt:1613462227,sidebar:"version-2.7/docs",previous:{title:"Using entity constructors",permalink:"/docs/2.7/entity-constructors"},next:{title:"Unit of Work and transactions",permalink:"/docs/2.7/unit-of-work"}},c=[{value:"OneToMany collections",id:"onetomany-collections",children:[]},{value:"ManyToMany collections",id:"manytomany-collections",children:[{value:"Unidirectional",id:"unidirectional",children:[]},{value:"Bidirectional",id:"bidirectional",children:[]}]},{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]}],s={toc:c};function b(e){var o=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:o,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"OneToMany")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",Object(i.b)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements\niterator so you can use ",Object(i.b)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it. "),Object(i.b)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items.\nKeep in mind that this approach will not check if the collection is initialed, while using ",Object(i.b)("inlineCode",{parentName:"p"},"get"),"\nmethod will throw error in this case."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that array access in ",Object(i.b)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, you\ncannot add new items to ",Object(i.b)("inlineCode",{parentName:"p"},"Collection")," this way. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.findOne(Author, '...', ['books']); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before you can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectID\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n")),Object(i.b)("h2",{id:"onetomany-collections"},"OneToMany collections"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",Object(i.b)("inlineCode",{parentName:"p"},"fk")," attribute:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @ManyToOne()\n  author: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books = new Collection<Book>(this);\n\n}\n")),Object(i.b)("h2",{id:"manytomany-collections"},"ManyToMany collections"),Object(i.b)("p",null,"As opposed to SQL databases, with MongoDB we do not need to have join tables for ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations.\nAll references are stored as an array of ",Object(i.b)("inlineCode",{parentName:"p"},"ObjectID"),"s on owning entity. "),Object(i.b)("h3",{id:"unidirectional"},"Unidirectional"),Object(i.b)("p",null,"Unidirectional ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, and marked explicitly as ",Object(i.b)("inlineCode",{parentName:"p"},"owner"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => Book, owner: true })\nbooks = new Collection<Book>(this);\n")),Object(i.b)("h3",{id:"bidirectional"},"Bidirectional"),Object(i.b)("p",null,"Bidirectional ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store),\nmarked by ",Object(i.b)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),Object(i.b)("p",null,"And on the inversed side we define it with ",Object(i.b)("inlineCode",{parentName:"p"},"mappedBy")," attribute poining back to the owner:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),Object(i.b)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),Object(i.b)("p",null,"When you use one of ",Object(i.b)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),Object(i.b)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),Object(i.b)("p",null,"Same applies for ",Object(i.b)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}b.isMDXComponent=!0}}]);