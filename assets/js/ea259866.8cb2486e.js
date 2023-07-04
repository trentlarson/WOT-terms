"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[5425],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=s(t),m=o,f=y["".concat(p,".").concat(m)]||y[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[y]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9847:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={},i=void 0,c={unversionedId:"Terms/glossary/cryptonym",id:"Terms/glossary/cryptonym",title:"cryptonym",description:"Definition",source:"@site/docs/Terms/glossary/cryptonym.md",sourceDirName:"Terms/glossary",slug:"/Terms/glossary/cryptonym",permalink:"/docs/Terms/glossary/cryptonym",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cryptographic-strength",permalink:"/docs/Terms/glossary/cryptographic-strength"},next:{title:"custodial-agent",permalink:"/docs/Terms/glossary/custodial-agent"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"KERI related",id:"keri-related",level:2}],l={toc:s},y="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(y,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A code name, call sign or cryptonym is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_word_(figure_of_speech)"},"code word")," or name used, sometimes clandestinely, to refer to another name, word, project, or person.\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_name"},"Wikipedia")),(0,o.kt)("h2",{id:"keri-related"},"KERI related"),(0,o.kt)("p",null,"A cryptographic pseudonymous identifier represented by a string of characters derived from a random or pseudo-random secret seed or salt via a one-way cryptographic function with a sufficiently high degree of cryptographic strength (e.g. 128 bits, see appendix on ",(0,o.kt)("a",{parentName:"p",href:"cryptographic-strength"},"cryptographic strength"),". A cryptonym is a type of primitive.\\\nDue the ",(0,o.kt)("a",{parentName:"p",href:"entropy"},"entropy")," in its ",(0,o.kt)("a",{parentName:"p",href:"derivation"},"derivation"),", a cryptonym is a universally unique identifier and only the ",(0,o.kt)("a",{parentName:"p",href:"controller"},"controller")," of the secret ",(0,o.kt)("a",{parentName:"p",href:"salt"},"salt")," or ",(0,o.kt)("a",{parentName:"p",href:"seed"},"seed")," from which the cryptonym is derived may prove control over the cryptonym. Therefore the derivation function MUST be associated with the cryptonym and MAY be encoded as part of the cryptonym itself.\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md"},"Smith, ietf-keri draft")))}d.isMDXComponent=!0}}]);