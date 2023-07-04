"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[3981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"Terms/glossary/parside",id:"Terms/glossary/parside",title:"parside",description:"Definition",source:"@site/docs/Terms/glossary/parside.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/parside",permalink:"/docs/Terms/glossary/parside",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pad",permalink:"/docs/Terms/glossary/pad"},next:{title:"partial-pre-rotation",permalink:"/docs/Terms/glossary/partial-pre-rotation"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Background",id:"background",level:2},{value:"Design ideas Feb 2023",id:"design-ideas-feb-2023",level:2},{value:"Related",id:"related",level:2},{value:"Working",id:"working",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"is a bunch of generators. Responsible for pulling out a stream of bits from a CESR stream and parse it.\nSam Smith suggested for Parside to not iterate stuff, only parse chunks delimited by the ",(0,a.kt)("a",{parentName:"p",href:"count-code"},"count code"),". (Source Cesride: meeting Feb 2 2023)"),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"CESR primitives are self-framing (which is relatively new). That means that you can construct your parser modually. We can dispatch the parsing of the stream to an entity. The ",(0,a.kt)("a",{parentName:"p",href:"strip-parameter"},"strip parameter")," tells us what part will be parsed be which code."),(0,a.kt)("h2",{id:"design-ideas-feb-2023"},"Design ideas Feb 2023"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Parside should be concerned with parsing group codes, ",(0,a.kt)("a",{parentName:"li",href:"cesride"},"cesride")," concerned with parsing primitives."),(0,a.kt)("li",{parentName:"ol"},"Parside will contain a ",(0,a.kt)("a",{parentName:"li",href:"count-code"},"count code")," at the beginning of the stream, each cesr primitive is self framing, JSON is not; hence the ",(0,a.kt)("a",{parentName:"li",href:"version-string"},"Version string"),"."),(0,a.kt)("li",{parentName:"ol"},'Parside could "load" the tables it supports for dynamically loaded code tables'),(0,a.kt)("li",{parentName:"ol"},"Parside could look at how/if we can return an interator/generator")),(0,a.kt)("p",null,"Source Cesride: meeting Feb 2 2023 notes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cesride parses the CESR primitives")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parside parses the ",(0,a.kt)("a",{parentName:"p",href:"group-code"},"group codes"))),(0,a.kt)("p",null,"| TBW |"),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"version-code"},"Version code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"version-string"},"Version string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"strip-parameter"},"Strip parameter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cesride"},"Cesride")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"sniffer"},"Sniffer"))),(0,a.kt)("p",null,"Source Cesride: meeting Feb 2 2023"),(0,a.kt)("h2",{id:"working"},"Working"),(0,a.kt)("p",null,"Parside should start with a default version for CESR. Anytime it gets a version count code it changes the version and also elevates to the top level (the version count code must appear at the top level). The version count code determines which CESR table to load when parsing the stream. The ",(0,a.kt)("a",{parentName:"p",href:"sniffer"},"sniffer")," detects if CESR binary, CESR Text, JSON, CBOR, MGPK. If any of the last three then the parser regexes to find the version string inside the JSON, CBOR, and MGPK and from the version string extracts the number of characters/bytes that is the length of the JSON, CBOR, or MGPK. The parser then resumes sniffing. When the sniff is CESR then when at the top level looks for the CESR version count code or any other count codes. The interpretation of the count codes is dependent on the version count code that is why the Parser has to start with a default version count code because the stream may not begin with a version code or may have resumed after a cold restart. When a count code is parsed then the parser may descend into parsing whats inside group for a group count code which may recursively nest down a ways.\\\nSource Slack Cesride thread: Feb 2 2023"))}u.isMDXComponent=!0}}]);