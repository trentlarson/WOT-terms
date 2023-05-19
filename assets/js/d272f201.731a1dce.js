"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,d=p["".concat(l,".").concat(h)]||p[h]||f[h]||a;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},65336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"terms/glossary/keri-agreement-algorithm-for-control-establishment",id:"terms/glossary/keri-agreement-algorithm-for-control-establishment",title:"keri-agreement-algorithm-for-control-establishment",description:"Definition",source:"@site/docs/terms/glossary/keri-agreement-algorithm-for-control-establishment.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/keri-agreement-algorithm-for-control-establishment",permalink:"/WOT-terms/docs/terms/glossary/keri-agreement-algorithm-for-control-establishment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"keep",permalink:"/WOT-terms/docs/terms/glossary/keep"},next:{title:"keri-command-line-interface",permalink:"/WOT-terms/docs/terms/glossary/keri-command-line-interface"}},l={},c=[],m={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"##Definition\nAgreement on an event in a key event log ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/KEL"},"KEL")," means each ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/witness"},"witness")," has observed the same version of the event and each witness\u2019 ",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/receipt"},"receipt")," has been received by every other witness."),(0,o.kt)("p",null,"Control establishment means that the set of agreeing witnesses along with the controller, of the identifier and associated keypairs, create a verifiable way to establish control authority for an identifier by reading all of the events in the KEL that have been agreed upon by the witnesses and the controller."),(0,o.kt)("p",null,"Acronyms: 'KA",(0,o.kt)("sup",null,"2"),"CE' '",(0,o.kt)("a",{parentName:"p",href:"/WOT-terms/docs/terms/glossary/KA2CE"},"KA2CE"),"' and 'KAACE'."),(0,o.kt)("h1",{id:"whitepaper-definition"},"Whitepaper definition:"),(0,o.kt)("p",null,'Agreement with KA2CE is as follows:\n"... the controller first creates its own receipt of the event and then promulgates the receipted event to witnesses in order to gather their promulgated receipts.\\\nIn this algorithm, an agreement consists of a specific version of an event with verifiable receipts\n(signatures) from the controller and a set of witnesses.\\\nA state of agreement about a version of an event with respect to set of witnesses means that each witness in that set has witnessed the same version of that event and each witness\u2019 receipt in that set has been promulgated to every other witness in that set."\\\nSource ',"[KERI Whitepaper Section 11.4.2 Agreement]"),(0,o.kt)("h1",{id:"additional-definition"},"Additional Definition"),(0,o.kt)("p",null,"A newly invented algorithm that is a simplification of PBFT class algorithms, separation of control of distributed consensus using distinct promulgation (witness) and confirmation (watcher) networks (new invention) but many non-BFT consensus algorithms do something similar and one BFT algorithm Stellar does something similar but not the same."),(0,o.kt)("p",null,"What if PBFT and Stellar had a baby that was missing liveness and total ordering but had safety and was completely decentralized, portable, and permission less? It would be named KERI.\\\n(SamMSmith)"))}f.isMDXComponent=!0}}]);