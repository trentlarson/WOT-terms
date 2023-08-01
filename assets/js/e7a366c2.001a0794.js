"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[64315],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Source and Destination for Search",s={unversionedId:"How we did/Source-and-destination-for-search",id:"How we did/Source-and-destination-for-search",title:"Source and Destination for Search",description:"Designing an Improved Search and Indexing System for Docusaurus KERISSE. The objective is to create a process that is as automatic as possible. The topic is External resources in any form. Example: KERI for Muggles in Pdf format. The challenge is that this type of format is not very suitable to extract text from. On the other hand it is very well suited for end-users to pop up as a search result.",source:"@site/docs/How we did/Source-and-destination-for-search.md",sourceDirName:"How we did",slug:"/How we did/Source-and-destination-for-search",permalink:"/WOT-terms/docs/How we did/Source-and-destination-for-search",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docusaurus process",permalink:"/WOT-terms/docs/How we did/Docusaurus-process"},next:{title:"Chatbots",permalink:"/WOT-terms/docs/How we did/chatbots"}},c={},l=[{value:"Objective",id:"objective",level:2},{value:"Current Situation",id:"current-situation",level:2},{value:"Design Decision",id:"design-decision",level:2},{value:"Acknowledgement",id:"acknowledgement",level:4}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-and-destination-for-search"},"Source and Destination for Search"),(0,o.kt)("p",null,"Designing an Improved Search and Indexing System for Docusaurus KERISSE. The objective is to create a process that is as automatic as possible. The topic is ",(0,o.kt)("strong",{parentName:"p"},"External resources in any form"),". Example: KERI for Muggles in Pdf format. The challenge is that this type of format is not very suitable to extract text from. On the other hand it is very well suited for end-users to pop up as a search result."),(0,o.kt)("p",null,"Meeting Date: August 1 2023"),(0,o.kt)("p",null,"Attendees: Kor Dwarshuis, Henk van Cann"),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"The primary motivation for our design modifications is twofold: Firstly, our resources need to be effectively indexed to facilitate efficient searching. Secondly, these resources must be suitably referenced in the search results."),(0,o.kt)("p",null,"To streamline this process, we are considering two types of data inputs: direct and indirect. We aspire to integrate the ",(0,o.kt)("inlineCode",{parentName:"p"},"direct")," input with git, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"indirect")," input would comprise various formats that external parties deliver (PPT, KEY, TXT, WORD, WP, whatever)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user-friendly output could be indirect input or an extract / modification of this. For example the indriect input of our KERI for Muggles example is a Google Doc ",(0,o.kt)("inlineCode",{parentName:"p"},"Slides")," file on the web. The user-friendly output could be a ",(0,o.kt)("inlineCode",{parentName:"p"},"pdf")," generated with Google Docs from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Slides")," file.")),(0,o.kt)("h2",{id:"current-situation"},"Current Situation"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/HyUgpI8o2.png",alt:"Tab Handmade of WOT-term Google sheet"})),(0,o.kt)("p",null,"Our existing system includes a 'WOT-Terms' sheet that contains a 'Handmade' tab. This tab features resources specified in a 'Source' column and their corresponding 'Destination' column."),(0,o.kt)("p",null,"The objective is to automatically extract information from this sheet, inclusive of metadata, and perform subsequent actions or provide functionalities based on it. We envisage these inputs being accessible via a URL for practicality."),(0,o.kt)("p",null,"Moreover, it is intended that the source data becomes searchable through the so-called 'document' in Typesense."),(0,o.kt)("h2",{id:"design-decision"},"Design Decision"),(0,o.kt)("p",null,"After deliberating on the current situation, the following decisions were made:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firstly, we recognized that the manually created entry that forms a link between a search term and a 'Destination' URL is performing as expected and requires no changes."),(0,o.kt)("li",{parentName:"ul"},"Second, the source data will need to be manually extracted from a designated collection directory outside the repository. We then manually convert (or export) this data into a readable format within the repository. This process allows us to generate a URL and include these sources within the purview of git version control."),(0,o.kt)("li",{parentName:"ul"},"Third, we decided that the content population process doesn't always have to be manual. We could leverage Puppeteer to scrape the information by incorporating the source URLs from the 'Handmade' tab into a sitemap. This solution has the added advantage of nicely segmenting the data. However, a prerequisite for this is that the data must be in HTML format for Puppeteer to recognize and process it. Consequently, we need to ",(0,o.kt)("strong",{parentName:"li"},"export the data as HTML")," rather than plain text."),(0,o.kt)("li",{parentName:"ul"},"Lastly, we will report the URL located in the 'Handmade' tab of the WOT sheet. This reporting will enable the URL to be processed automatically, thereby increasing the system's overall efficiency.")),(0,o.kt)("h4",{id:"acknowledgement"},"Acknowledgement"),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://www.openai.com/research/chatgpt"},"ChatGPT")," for enhancing this text."))}p.isMDXComponent=!0}}]);