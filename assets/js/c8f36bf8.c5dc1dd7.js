"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[27553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(a),u=i,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),i=(a(67294),a(3905));const o={},r="Insights into the KERI Development Toolbox",s={unversionedId:"concepts/keri-dev-env",id:"concepts/keri-dev-env",title:"Insights into the KERI Development Toolbox",description:"Discover the whys and hows of the development tools that power the KERI system.",source:"@site/docs/06_concepts/keri-dev-env.md",sourceDirName:"06_concepts",slug:"/concepts/keri-dev-env",permalink:"/WOT-terms/docs/concepts/keri-dev-env",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/WOT-terms/docs/concepts/concepts"},next:{title:"Education",permalink:"/WOT-terms/docs/category/education"}},l={},h=[{value:"The KERI Approach",id:"the-keri-approach",level:2},{value:"What is Slack",id:"what-is-slack",level:3},{value:"Why is it relevant for the KERI Suite",id:"why-is-it-relevant-for-the-keri-suite",level:4},{value:"Why Slack and not something else?",id:"why-slack-and-not-something-else",level:4},{value:"What is Sphinx?",id:"what-is-sphinx",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc",level:4},{value:"Why Sphinx and not something else?",id:"why-sphinx-and-not-something-else",level:4},{value:"What is Swagger and OpenAPI?",id:"what-is-swagger-and-openapi",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-1",level:4},{value:"Why Swagger / OpenAPI and not something else?",id:"why-swagger--openapi-and-not-something-else",level:4},{value:"What exactly is a REST API?",id:"what-exactly-is-a-rest-api",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-2",level:4},{value:"Why REST API and not something else?",id:"why-rest-api-and-not-something-else",level:4},{value:"What is a REST API wrapper?",id:"what-is-a-rest-api-wrapper",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-3",level:4},{value:"Why REST API wrapper and not something else?",id:"why-rest-api-wrapper-and-not-something-else",level:4},{value:"What is Postman?",id:"what-is-postman",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-4",level:4},{value:"Why Postman and not something else?",id:"why-postman-and-not-something-else",level:4},{value:"What is Paw?",id:"what-is-paw",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-5",level:4},{value:"Why Paw and not something else?",id:"why-paw-and-not-something-else",level:4},{value:"What is XBRL?",id:"what-is-xbrl",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-6",level:4},{value:"Why XBRL and not something else?",id:"why-xbrl-and-not-something-else",level:4},{value:"What is Arelle?",id:"what-is-arelle",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-7",level:4},{value:"Why Arelle and not something else?",id:"why-arelle-and-not-something-else",level:4},{value:"What is Docker?",id:"what-is-docker",level:2},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-8",level:4},{value:"Why Docker and not something else?",id:"why-docker-and-not-something-else",level:4},{value:"What is NTRU?",id:"what-is-ntru",level:2},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-9",level:4},{value:"Why NTRU and not something else?",id:"why-ntru-and-not-something-else",level:4},{value:"What is CAXE?",id:"what-is-caxe",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-10",level:4},{value:"Why CAXE and not something else?",id:"why-caxe-and-not-something-else",level:4},{value:"What is Github Actions?",id:"what-is-github-actions",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-11",level:4},{value:"Why Github Actions and not something else?",id:"why-github-actions-and-not-something-else",level:4},{value:"What is Git Flow?",id:"what-is-git-flow",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-12",level:4},{value:"Why GIT Flow and not something else?",id:"why-git-flow-and-not-something-else",level:4},{value:"What is DidComm?",id:"what-is-didcomm",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-13",level:4},{value:"Why DIDComm and not something else?",id:"why-didcomm-and-not-something-else",level:4},{value:"Java",id:"java",level:2},{value:"What is Cesr4j",id:"what-is-cesr4j",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-14",level:4},{value:"Why Cesr4j and not something else?",id:"why-cesr4j-and-not-something-else",level:4},{value:"What is Bazel?",id:"what-is-bazel",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-15",level:4},{value:"Why Bazel and not something else?",id:"why-bazel-and-not-something-else",level:4},{value:"What is WebAuth?",id:"what-is-webauth",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-16",level:4},{value:"Why WebAuth and not something else?",id:"why-webauth-and-not-something-else",level:4},{value:"What is IPEX?",id:"what-is-ipex",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-17",level:4},{value:"Why IPEX and not something else?",id:"why-ipex-and-not-something-else",level:4},{value:"Keripy",id:"keripy",level:2},{value:"What is Pypi?",id:"what-is-pypi",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-18",level:4},{value:"Why Pypi and not something else?",id:"why-pypi-and-not-something-else",level:4},{value:"KEEP",id:"keep",level:2},{value:"What is NPM?",id:"what-is-npm",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-19",level:4},{value:"Why NPM and not something else?",id:"why-npm-and-not-something-else",level:4},{value:"KeriOX",id:"keriox",level:2},{value:"What is Dart?",id:"what-is-dart",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-20",level:4},{value:"Why Dart and not something else?",id:"why-dart-and-not-something-else",level:4},{value:"KeriML",id:"keriml",level:2},{value:"What is KeriML?",id:"what-is-keriml",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-21",level:4},{value:"Why KeriML and not something else?",id:"why-keriml-and-not-something-else",level:4},{value:"HIO",id:"hio",level:2},{value:"What is HIO?",id:"what-is-hio",level:3},{value:"Why is it relevant for KERI, CESR and/or ACDC?",id:"why-is-it-relevant-for-keri-cesr-andor-acdc-22",level:4},{value:"Why KeriML and not something else?",id:"why-keriml-and-not-something-else-1",level:4}],d={toc:h},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insights-into-the-keri-development-toolbox"},"Insights into the KERI Development Toolbox"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discover the whys and hows of the development tools that power the KERI system.")),(0,i.kt)("p",null,"Please note, this document ",(0,i.kt)("strong",{parentName:"p"},"will not")," delve into:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cypher Libraries used across different KERI implementations. ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"For more insights, visit: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keripy/blob/development/ref/CypherSuites.md"},"CypherSuites KeriPy")))),(0,i.kt)("li",{parentName:"ul"},"Coding Style Guides for various KERI implementations.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"For further details, visit: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keripy/blob/development/ref/PythonStyleGuide.md"},"Style Guide for KeriPy"))))),(0,i.kt)("h2",{id:"the-keri-approach"},"The KERI Approach"),(0,i.kt)("p",null,"The selection of development tools often aligns with a few common motivations. Typically, they possess the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open-source nature"),(0,i.kt)("li",{parentName:"ul"},"Lack of patent restrictions"),(0,i.kt)("li",{parentName:"ul"},"Best-in-class functionality"),(0,i.kt)("li",{parentName:"ul"},"Universal applicability"),(0,i.kt)("li",{parentName:"ul"},"Proven performance over time")),(0,i.kt)("p",null,"These essential attributes underpin the creation of Autonomic Identifier systems, and will not be reiterated throughout this document. Instead, our spotlight will be on the unique considerations that influenced our choices, setting them apart from other alternatives in the domain."),(0,i.kt)("p",null,"In the following sections, we'll delve into the key tools employed in the KERI Suite. Each tool's section will answer three critical questions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"What is {tool X}?")," - An overview of the tool."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Why is it relevant for the KERI Suite?")," - An explanation of how the tool fits into the KERI ecosystem and enhances our operations."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Why {tool X} and not something else?")," - A rationale of why this specific tool was chosen over other alternatives in the field.")),(0,i.kt)("p",null,"Through this structured approach, we aim to provide clear insights into our development choices and their impact on the KERI Suite."),(0,i.kt)("h3",{id:"what-is-slack"},"What is Slack"),(0,i.kt)("h4",{id:"why-is-it-relevant-for-the-keri-suite"},"Why is it relevant for the KERI Suite"),(0,i.kt)("h4",{id:"why-slack-and-not-something-else"},"Why Slack and not something else?"),(0,i.kt)("p",null,"Concerning the vanished Slack History, I\u2019ve got this update:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I\u2019ve requested Slack to give us a rebate to the standard Slack Pro price of US$ 420 per month\u2026 Let\u2019s see where Slack comes up with.")),(0,i.kt)("p",null,"And this request for KERI Suite Slack users:\nAnticipating on a future where we don\u2019t like to burn too much money on a Slack paywall to just have continuous access to our history:  let\u2019s move discussions from Slack (as soon as they take off) to Github Discussion and link them from Slack.\nUse Slack just for chat, announcements, notifications and planning stuff?"),(0,i.kt)("p",null,"You to Everyone (10 Aug 2023, 15:26)\nDiscussions -> GH Discussions\nQuestions & Answers -> GH discussions\nBugs & feature requests -> GH Issues"),(0,i.kt)("h3",{id:"what-is-sphinx"},"What is Sphinx?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/Sphinx.png?raw=true",alt:"Sphinx-logo"})," Sphinx is a documentation generator or a tool that translates a set of plain text source files into various output formats, automatically producing cross-references, indices, etc. That is, if you have a directory containing a bunch of reStructuredText or Markdown documents, Sphinx can generate a series of HTML files, a PDF file (via LaTeX), man pages and much more.\\ Sphinx experience is a great asset for a GNU\xa0Linux technical writer.",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.sphinx-doc.org/en/master/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"KERI's first implementation is in Python. Documenting the why of the code is human effort. Documenting ",(0,i.kt)("em",{parentName:"p"},"what the code does")," is easily achieved with Sphinx, in multiple output formats."),(0,i.kt)("h4",{id:"why-sphinx-and-not-something-else"},"Why Sphinx and not something else?"),(0,i.kt)("p",null,"Best suited for documenting Python-code as you go as a developer.\\\nSphinx uses reStructuredText as its markup language, and many of its strengths come from the power and straightforwardness of reStructuredText and its parsing and translating suite, the Docutils."),(0,i.kt)("h3",{id:"what-is-swagger-and-openapi"},"What is Swagger and OpenAPI?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/swagger.png?raw=true",alt:"swagger-logo"}),"Formerly known as Swagger, OpenAPI\xa0has a long and established history. In 2010, Swagger started as an open source specification for designing and documenting RESTful APIs. In 2015, the Swagger project was acquired by SmartBear Software. The Swagger Specification was donated to the Linux foundation and renamed the OpenAPI.",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/blog/api-strategy/difference-between-swagger-and-openapi/"},"Difference")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-1"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"KERI is trustless and is a multi layered identity-system generator. A full-functioning KERI install uses many different nodes to talk to (Witnesses, watchers, wallets). RESTfull APIs are best suited for this task."),(0,i.kt)("h4",{id:"why-swagger--openapi-and-not-something-else"},"Why Swagger / OpenAPI and not something else?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/openapi.png?raw=true",alt:"openapi-logo"}),(0,i.kt)("p",null,"OpenAPI (former Swagger, before version 2.0) is more important than the company Swagger to KERI, CESR and ACDC. It's open sourced and has many ready-usable extensions in JSON available."),(0,i.kt)("h3",{id:"what-exactly-is-a-rest-api"},"What exactly is a REST API?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/restapi.png?raw=true",alt:"restapi-logo"})," There are numerous types of APIs, making it difficult for new developers to differentiate between each kind. In particular, REpresentational State Transfer (REST) is a software architectural style that developers apply to web APIs. REST APIs provide simple, uniform interfaces because they can be used to make data, content, algorithms, media, and other digital resources available through web URLs. Essentially, REST APIs are the most common APIs used across the web today",(0,i.kt)("p",null,"To make the API service RESTful, six guiding constraints must be satisfied:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use of a uniform interface (UI): To have a uniform interface, multiple architectural constraints are required to guide the behavior of components. Additionally, resources should be unique so they are identifiable through a single URL."),(0,i.kt)("li",{parentName:"ol"},"Client-server based: The uniform interface separates user concerns from data storage concerns. The client\u2019s domain concerns UI and request-gathering, while the server\u2019s domain concerns focus on data access, workload management, and security. The separation of client and server enables each to be developed and enhanced independently of the other."),(0,i.kt)("li",{parentName:"ol"},"Stateless operations: Request from client to server must contain all of the information necessary so that the server can understand and process it accordingly. The server can\u2019t hold any information about the client state."),(0,i.kt)("li",{parentName:"ol"},"RESTful resource caching: Data within a response to a request must be labeled as cache-able or non-cache-able."),(0,i.kt)("li",{parentName:"ol"},"Layered system: REST allows for an architecture composed of hierarchical layers. In doing so, each component cannot see beyond the immediate layer with which they are interacting."),(0,i.kt)("li",{parentName:"ol"},"Code on demand: Because REST APIs download and execute code in the form of applets or scripts, there\u2019s more client functionality. Oftentimes, a server will send back a static representation of resources in the form of XML or JSON. Servers can also send executable codes to the client when necessary.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.postman.com/rest-api-examples/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-2"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"KERI is multi layered and has duplicity detection as one of its main consensus mechanisms."),(0,i.kt)("h4",{id:"why-rest-api-and-not-something-else"},"Why REST API and not something else?"),(0,i.kt)("p",null,"Stateless REST APIs are vital for the implementation of the KERI design."),(0,i.kt)("h3",{id:"what-is-a-rest-api-wrapper"},"What is a REST API wrapper?"),(0,i.kt)("p",null,"A Wrapper Class (or the Wrapper Pattern) is where you declare a Class as a container for an sObject to extend the functionality only for display or processing purposes (i.e. you don't intend for that attribute to be persisted) - the classic example is a checkbox to select records. I would say that a DTO is a slightly dumbed down version of such a wrapper (used in conventional OOP to pass structured data between the layers)\nA REST Api wrapper is something slightly different. For example Salesforce exposes a REST Api and if you were to invoke that say from C#, you would have to perform a set of common steps such as login, query, etc. To make this available in C# by abstracting the innards of the actual REST calls to salesforce and exposing only the developer relevant detail, you could write a rest wrapper which performs these commonly used functions - creates requests, parses responses, etc"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://salesforce.stackexchange.com/questions/5834/can-somebody-explain-what-is-a-rest-api-wrapper"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-3"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"KERI will be written in multiple programming languages. A wrapper is able to expose the result of API calls cross boundary (exceeding the developers direct intentions) or viewable / shareable a different programming language."),(0,i.kt)("h4",{id:"why-rest-api-wrapper-and-not-something-else"},"Why REST API wrapper and not something else?"),(0,i.kt)("p",null,"It's simply the most obvious solution for the applications mentioned above."),(0,i.kt)("h3",{id:"what-is-postman"},"What is Postman?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/postman.png?raw=true",alt:"postman-logo"}),"Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs\u2014faster. [source](https://www.postman.com)",(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-4"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"It is a sophisticated EDI for KERI APIs."),(0,i.kt)("h4",{id:"why-postman-and-not-something-else"},"Why Postman and not something else?"),(0,i.kt)("p",null,"| TBW |"),(0,i.kt)("h3",{id:"what-is-paw"},"What is Paw?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/paw.png?raw=true",alt:"paw-logo"}),(0,i.kt)("p",null,"Paw is a full-featured HTTP client that lets you test and describe the APIs you build or consume. It has a beautiful native macOS interface to compose requests, inspect server responses, generate client code and export API definitions."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://paw.cloud"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-5"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Source tracking"),(0,i.kt)("h4",{id:"why-paw-and-not-something-else"},"Why Paw and not something else?"),(0,i.kt)("p",null,"| TBW |"),(0,i.kt)("h3",{id:"what-is-xbrl"},"What is XBRL?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/XBRL.png?raw=true",alt:"XBRL-logo"}),(0,i.kt)("p",null,"XBRL is the open international standard for digital business reporting, managed by a global not for profit consortium, XBRL International. We are \xa0committed to improving reporting in the public interest.\xa0XBRL is used around the world, in more than 50 countries. Millions of XBRL documents are created every year, replacing older, paper-based reports with more useful, more effective and more accurate\xa0digital versions.\nIn a nutshell, XBRL\xa0provides a language in which reporting terms can be authoritatively defined. Those terms can then be used to uniquely represent the contents of financial statements or other kinds of compliance, performance and business reports. XBRL lets reporting information move between organizations rapidly, accurately and digitally."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.xbrl.org/the-standard/what/an-introduction-to-xbrl/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-6"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"It's especially relevant for the GLEIF vLEI implementation of KERI and ACDC."),(0,i.kt)("h4",{id:"why-xbrl-and-not-something-else"},"Why XBRL and not something else?"),(0,i.kt)("p",null,"It is ",(0,i.kt)("em",{parentName:"p"},"the")," open international standard for digital business reporting."),(0,i.kt)("h3",{id:"what-is-arelle"},"What is Arelle?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/Arelle.png?raw=true",alt:"Arelle-logo"}),(0,i.kt)("p",null,"Arelle is a project to provide the XBRL community with an easy to use open source platform for XBRL. It supports XBRL and its extension features in an extensible manner. It does this in a compact yet robust framework that can be used as a desktop application and can be integrated with other applications and languages utilizing its web service."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://arelle.org/arelle/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-7"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Continuous Development Continuous Integration on Github"),(0,i.kt)("h4",{id:"why-arelle-and-not-something-else"},"Why Arelle and not something else?"),(0,i.kt)("p",null,"It is most probanly the only one out there"),(0,i.kt)("h2",{id:"what-is-docker"},"What is Docker?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/Docker.png?raw=true",alt:"Docker-logo"}),(0,i.kt)("p",null,"Docker is an open source platform for building, deploying, and managing containerized applications. Learn about containers, how they compare to virtual machines (VM), and why Docker is so widely adopted and used.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/docker"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-8"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"With Docker containerization the KERI development team is able to deliver a working stack for testing and demonstration purposes with a clear list of components and their versions in a confined environment."),(0,i.kt)("h4",{id:"why-docker-and-not-something-else"},"Why Docker and not something else?"),(0,i.kt)("p",null,"Docker is the most adopted and has various deployment options."),(0,i.kt)("h2",{id:"what-is-ntru"},"What is NTRU?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/ntru.png?raw=true",alt:"ntru-logo"}),(0,i.kt)("p",null,"NTRU is an open-source public-key crypto-system that uses lattice-based cryptography to encrypt and decrypt data. It consists of two algorithms: NTRUEncrypt, which is used for encryption, and NTRUSign, which is used for digital signatures. Unlike other popular public-key crypto-systems, it is resistant to attacks using Schnorr's algorithm. NTRUEncrypt was patented, but it was placed in the public domain in 2017. NTRUSign is patented, but it can be used by software under the GPL."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NTRU"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-9"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"It might be an alternative to our Libsodium libs. But... - Looks like NTRUSign is broken. - NTRUEncrypt is usable. - pqNTRUSign uses large signature sizes so is not immediately suitable for IOT\n",(0,i.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/CSRC/media/Events/Second-PQC-Standardization-Conference/documents/accepted-papers/grobschadl-lighteight-implmentation-NTRUE.pdf"},"More info")),(0,i.kt)("h4",{id:"why-ntru-and-not-something-else"},"Why NTRU and not something else?"),(0,i.kt)("p",null,"It not as computational dense as alternatives. It is newer."),(0,i.kt)("h3",{id:"what-is-caxe"},"What is CAXE?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/caxe.png?raw=true",alt:"caxe-logo"}),"It's Credential Attribute XBRL Extraction. An XBRL with ACDCs in it.",(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/caxe"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-10"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"XBRL is the open international standard for digital business reporting. To extend the field of application of ACDC and KERI in reporting, we'd like to offer this."),(0,i.kt)("h4",{id:"why-caxe-and-not-something-else"},"Why CAXE and not something else?"),(0,i.kt)("p",null,"It's custom made for ACDC and KERI, there's nothing else."),(0,i.kt)("h3",{id:"what-is-github-actions"},"What is Github Actions?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/gh-actions.png?raw=true",alt:"gh-actions-logo"}),(0,i.kt)("p",null,"GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triage-ing work the way you want.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-11"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"{TBW}"),(0,i.kt)("h4",{id:"why-github-actions-and-not-something-else"},"Why Github Actions and not something else?"),(0,i.kt)("p",null,"Hosted runners for every major OS make it easy to build and test all your projects. Run directly on a VM or inside a container. Use your own VMs, in the cloud or on-prem, with self-hosted runners."),(0,i.kt)("h3",{id:"what-is-git-flow"},"What is Git Flow?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/gitflow.png?raw=true",alt:"gitflow-logo"}),(0,i.kt)("p",null,"Git flow is a popular Git branching strategy aimed at simplifying release management, and was introduced by software developer Vincent Driessen in 2010. Fundamentally, Git flow involves isolating your work into different types of Git branches."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/learn/git/git-flow"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-12"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Multiple developers active and growing developers community needs simple but secure branching."),(0,i.kt)("h4",{id:"why-git-flow-and-not-something-else"},"Why GIT Flow and not something else?"),(0,i.kt)("p",null,"More secure than the easier versioning ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/learn/git/git-flow#github-flow"},"Github Flow")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitkraken.com/learn/git/git-flow#gitlab-flow"},"GitLab Flow")),(0,i.kt)("h3",{id:"what-is-didcomm"},"What is DidComm?"),(0,i.kt)("p",null,"Powerful, high-trust, self-sovereign interactions over any transport"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://didcomm.org/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-13"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"To build KERI Tunnels"),(0,i.kt)("h4",{id:"why-didcomm-and-not-something-else"},"Why DIDComm and not something else?"),(0,i.kt)("p",null,"It's the intended layer two of DID technology supported by Decentralized Identity Foundation (DIF) and the Trust over IP foundation (ToIP)."),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/Java_logo.png?raw=true",alt:"Java-logo"}),(0,i.kt)("h3",{id:"what-is-cesr4j"},"What is Cesr4j"),(0,i.kt)("p",null,"IT's a JavaEE library for CESR encoding"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/cesr4j"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-14"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"CESR is the main serialization tool for KERI. To extend the field of application of CESR we'd like to offer an JavaEE library."),(0,i.kt)("h4",{id:"why-cesr4j-and-not-something-else"},"Why Cesr4j and not something else?"),(0,i.kt)("p",null,"It's custom made for CESR and KERI, there's nothing else."),(0,i.kt)("h3",{id:"what-is-bazel"},"What is Bazel?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/bazel-logo.png?raw=true",alt:"bazel-logo"}),(0,i.kt)("p",null,"Bazel is an open-source build and test tool that scalably supports multi-language and multi-platform projects."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bazel.build/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-15"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"One tool, multiple languages: Build and test using Java, C++, Go, Android, iOS and many other languages and platforms. Bazel runs on Windows, macOS, and Linux."),(0,i.kt)("h4",{id:"why-bazel-and-not-something-else"},"Why Bazel and not something else?"),(0,i.kt)("p",null,"It replaces ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven"),".Rebuild only what is necessary. Fast, incremental builds with Bazel's advanced local and distributed caching, optimized dependency analysis, and parallel execution."),(0,i.kt)("h3",{id:"what-is-webauth"},"What is WebAuth?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/webauth.png?raw=true",alt:"webauth-logo"}),(0,i.kt)("p",null,"WebAuthn is a new standard for authentication, which is published by the World Wide Web Consortium and is supported by the FIDO alliance."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.loginradius.com/blog/identity/webauth-secures-user-login/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-16"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"It's not yet relevant, it's been proposed to support it in the future."),(0,i.kt)("h4",{id:"why-webauth-and-not-something-else"},"Why WebAuth and not something else?"),(0,i.kt)("p",null,"| TBW |"),(0,i.kt)("h3",{id:"what-is-ipex"},"What is IPEX?"),(0,i.kt)("p",null,"Issuance and Exchange Protocol Specification for ACDC"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-ipex"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-17"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Provides a uniform mechanism for the issuance and presentation of ACDCs in a securely attributable manner."),(0,i.kt)("h4",{id:"why-ipex-and-not-something-else"},"Why IPEX and not something else?"),(0,i.kt)("p",null,"It's a greatly simplified exchange protocol. The simplification has two primary advantages. The first is enhanced security. A well-delimited protocol can be designed and analyzed to minimize and mitigate attack mechanisms. The second is convenience. A standard simple protocol is easier to implement, support, update, understand, and adopt. The tooling is more consistent."),(0,i.kt)("h2",{id:"keripy"},"Keripy"),(0,i.kt)("h3",{id:"what-is-pypi"},"What is Pypi?"),(0,i.kt)("p",null,"The Python Package Index (PyPI) is a repository of software for the Python programming language.\\\nPyPI helps you find and install software developed and shared by the Python community. Learn about installing packages. Package authors use PyPI to distribute their software. Learn how to package your Python code for PyPI.\\\n",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-18"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"The team wants to distribute KERI uniformly and as broad as possible."),(0,i.kt)("h4",{id:"why-pypi-and-not-something-else"},"Why Pypi and not something else?"),(0,i.kt)("p",null,"It's the best of breed and most commonly used in the Python community."),(0,i.kt)("h2",{id:"keep"},"KEEP"),(0,i.kt)("h3",{id:"what-is-npm"},"What is NPM?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/npm.png?raw=true",alt:"npm-logo"}),(0,i.kt)("p",null,"NPM is two things: first and foremost, it is an ",(0,i.kt)("em",{parentName:"p"},"online repository")," for the publishing of open-source Node.js projects; second, it is a ",(0,i.kt)("em",{parentName:"p"},"command-line utility")," for interacting with said repository that aids in package installation, version management, and dependency management.\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-19"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"For the Node.js implementation of KERI it comes in handy. Also KEEP has been build in Node.js."),(0,i.kt)("h4",{id:"why-npm-and-not-something-else"},"Why NPM and not something else?"),(0,i.kt)("p",null,"It's the number one solution for Node.js."),(0,i.kt)("h2",{id:"keriox"},"KeriOX"),(0,i.kt)("h3",{id:"what-is-dart"},"What is Dart?"),(0,i.kt)("img",{className:"inline-small-start",src:"https://github.com/WebOfTrust/keri/blob/main/images/dart.png?raw=true",alt:"dart-logo"}),(0,i.kt)("p",null,"Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications.\nIt is an object-oriented, class-based, garbage-collected language with C-style syntax.It can compile to either native code or JavaScript, and supports interfaces, mixins, abstract classes, reified generics and type inference."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dart"},"Source")),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-20"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Not yet, we might want to support it, it's been proposed in the past."),(0,i.kt)("h4",{id:"why-dart-and-not-something-else"},"Why Dart and not something else?"),(0,i.kt)("p",null,"| TBW |"),(0,i.kt)("h2",{id:"keriml"},"KeriML"),(0,i.kt)("h3",{id:"what-is-keriml"},"What is KeriML?"),(0,i.kt)("p",null,"KIMI Keri Interactive Mobile Interface, pronounced \u201cCaramel\u201d"),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-21"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Keep repackage Electron app to invoke python backend IIW demos (April 2022) on UX/UI"),(0,i.kt)("h4",{id:"why-keriml-and-not-something-else"},"Why KeriML and not something else?"),(0,i.kt)("p",null,"It's been subject to name squating, it's pending."),(0,i.kt)("h2",{id:"hio"},"HIO"),(0,i.kt)("h3",{id:"what-is-hio"},"What is HIO?"),(0,i.kt)("p",null,"Weightless Hierarchical asynchronous coroutines and I/O in Python.\\\nRich Flow Based Programming Hierarchical Structured Concurrency with Asynchronous IO."),(0,i.kt)("h4",{id:"why-is-it-relevant-for-keri-cesr-andor-acdc-22"},"Why is it relevant for KERI, CESR and/or ACDC?"),(0,i.kt)("p",null,"Choosing HIO fits the asynchronous nature of KERI. See more at Github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ioflo/hio"},"Repository")),(0,i.kt)("h4",{id:"why-keriml-and-not-something-else-1"},"Why KeriML and not something else?"),(0,i.kt)("p",null,"The minimal sufficient means design principle of KERI and the leading KERIpy implementation."))}p.isMDXComponent=!0}}]);