"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[2538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={},s=void 0,a={unversionedId:"terms/glossary/witness",id:"terms/glossary/witness",title:"witness",description:"Definition",source:"@site/docs/terms/glossary/witness.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/witness",permalink:"/WOT-terms/docs/terms/glossary/witness",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"well-known\xa0witnesses",permalink:"/WOT-terms/docs/terms/glossary/well-known\xa0witnesses"},next:{title:"zero-trust",permalink:"/WOT-terms/docs/terms/glossary/zero-trust"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"KERI witness confusing",id:"keri-witness-confusing",level:2},{value:"Operational description in KERI",id:"operational-description-in-keri",level:2}],p={toc:c},f="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"In KERI and ACDC context, a witness is an entity or component designated (trusted) by the controller of an identifier. The primary role of a witness is to verify, sign, and keep events associated with an identifier. A witness is the controller of its own self-referential identifier which may or may not be the same as the identifier to which it is a witness.\\"),(0,i.kt)("p",null,"An identifier witness therefore is part of its ",(0,i.kt)("a",{parentName:"p",href:"trust-domain"},"trust basis")," and may be controlled (but not necessarily so) by its ",(0,i.kt)("a",{parentName:"p",href:"controller"},"controller"),". The purpose of a pool of witnesses is to protect the controller from external exploit of its identifier.\\\nThe term ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"backer"},"Backer"))," and ",(0,i.kt)("em",{parentName:"p"},"Witness")," are closely related in KERI but not synonyms or interchangeable."),(0,i.kt)("h2",{id:"keri-witness-confusing"},"KERI witness confusing"),(0,i.kt)("p",null,"Be sure to understand the narrow KERI definition of Witness well. You could easily be confused, for there are dozens of papers that use the term Witness in a similar way to KERI; for example ",(0,i.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/document/8644609"},"https://ieeexplore.ieee.org/document/8644609")," or 'segregated witness' in bitcoin, but it's far from the same concept.\\\nMore in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"whitepaper")),(0,i.kt)("h2",{id:"operational-description-in-keri"},"Operational description in KERI"),(0,i.kt)("p",null,"Entity that may receive, verify, and store key events for an identifier. Each witness controls its own identifier used to sign key event messages, a controller is a special case of a witness.\\\nSource ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")))}u.isMDXComponent=!0}}]);