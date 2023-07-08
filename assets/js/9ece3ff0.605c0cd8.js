"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[14783],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},l),{},{components:t})):r.createElement(y,i({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={},i="Docusaurus process",s={unversionedId:"How we did/Docusaurus-process",id:"How we did/Docusaurus-process",title:"Docusaurus process",description:"",source:"@site/docs/How we did/Docusaurus-process.md",sourceDirName:"How we did",slug:"/How we did/Docusaurus-process",permalink:"/WOT-terms/docs/How we did/Docusaurus-process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create search index",permalink:"/WOT-terms/docs/How we did/Create-search-index"},next:{title:"Check and accept PR production Edusite locally",permalink:"/WOT-terms/docs/How we did/check-and-accept-PR-production-Edusite-locally"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-process"},"Docusaurus process"),(0,o.kt)("mermaid",{value:'\nflowchart TD\n\nsubgraph server-side\nStart\n\n--\x3e A["Import Google Sheet data\\ninto .md file (Node.js)"]\n\nA --\x3e B["Run Docsaurus Build"]\n\nB --\x3e C["Deploy to GitHub Pages"]\nend\n\nsubgraph client-side-JavaScript-plugins\ncrossLinks["Add functionality:\\nCross links"]\n--\x3e insertVideo\n--\x3e insertSubtitles["Insert Subtitles"]\n--\x3e dynamicTables["Add functionality:\\nDynamic Tables"]\n--\x3e elementGoFullScreen["Add functionality:\\nmake overview table go full screen"]\n--\x3e writeChanges["Add functionality:\\nwrite changes to Overview"]\n--\x3e horizontalScrollHint["Add functionality:\\nHorizontal Scroll Hint"]\n--\x3e showDefinitionsOnClick["Add functionality:\\nShow inline definitions On Click"]\n--\x3e addDataTypes["Add knowledge level and\\ntype category as html attrib\\nto &lt;article&gt;"]\n--\x3e showGPTsummary["Add functionality:\\nShow GPT summary"]\n--\x3e PageReady["Page ready to view"]\n--\x3e End\n\n\nend\n\nserver-side --\x3e client-side-JavaScript-plugins\n\n'}))}p.isMDXComponent=!0}}]);