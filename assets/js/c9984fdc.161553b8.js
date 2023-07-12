"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[53070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,y=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"glossary/watcher",id:"glossary/watcher",title:"watcher",description:"Definition",source:"@site/docs/glossary/watcher.md",sourceDirName:"glossary",slug:"/glossary/watcher",permalink:"/WOT-terms/docs/glossary/watcher",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"wallet",permalink:"/WOT-terms/docs/glossary/wallet"},next:{title:"web-of-trust",permalink:"/WOT-terms/docs/glossary/web-of-trust"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"KERI operational",id:"keri-operational",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"KERI alternative to total global ordering and consensus protocols is a mechanism called ",(0,a.kt)("a",{parentName:"p",href:"duplicity"},"duplicity")," detection. In the ",(0,a.kt)("a",{parentName:"p",href:"verifiers"},"verification")," and ",(0,a.kt)("a",{parentName:"p",href:"validation"},"validation")," ",(0,a.kt)("strong",{parentName:"p"},"watchers are all that matter"),'; they guarantee that logs are immutable by one very simple rule: "',(0,a.kt)("a",{parentName:"p",href:"first-seen"},"first seen"),' wins".'),(0,a.kt)("h2",{id:"keri-operational"},"KERI operational"),(0,a.kt)("p",null,"This would be a set of watchers (that the validators trust) that record any and all copies of key event logs (KEL) that they see. Because these watchers can be anyone and anywhere, any controller of a public identifier is at peril should they choose to publish inconsistent copies of their KEL. This removes the incentive to be duplicitous."))}f.isMDXComponent=!0}}]);