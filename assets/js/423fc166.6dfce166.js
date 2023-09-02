"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[48066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"glossary/web-of-trust",id:"glossary/web-of-trust",title:"web-of-trust",description:"Definition",source:"@site/docs/04_glossary/web-of-trust.md",sourceDirName:"04_glossary",slug:"/glossary/web-of-trust",permalink:"/WOT-terms/docs/glossary/web-of-trust",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"watcher",permalink:"/WOT-terms/docs/glossary/watcher"},next:{title:"well-known\xa0witnesses",permalink:"/WOT-terms/docs/glossary/well-known\xa0witnesses"}},c={},l=[{value:"Definition",id:"definition",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"In cryptography, a web of trust is a concept used in ",(0,o.kt)("a",{parentName:"p",href:"pgp"},"PGP"),", ",(0,o.kt)("a",{parentName:"p",href:"gig"},"GnuPG"),", and other ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenPGP"),"-compatible systems to establish the authenticity of the binding between a public key and its owner.\\\nIts ",(0,o.kt)("em",{parentName:"p"},"decentralized")," trust model is an alternative to the centralized trust model of a public key infrastructure (",(0,o.kt)("inlineCode",{parentName:"p"},"PKI"),"), which relies exclusively on a certificate authority (or a hierarchy of such). As with computer networks, there are many independent webs of trust, and any user (through their identity certificate) can be a part of, and a link between, multiple webs. The web of trust concept was first put forth by PGP creator Phil Zimmermann in 1992 in the manual for PGP."),(0,o.kt)("img",{src:"https://github.com/WebOfTrust/keri/raw/main/images/web-of-trust.png",alt:"Web of trust illustration",border:"0",width:"500"}),(0,o.kt)("p",null,"More on ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_of_trust"},"Wikipedia")))}f.isMDXComponent=!0}}]);