"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,b=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={},a=void 0,s={unversionedId:"terms/glossary/establishment-event",id:"terms/glossary/establishment-event",title:"establishment-event",description:"Definition",source:"@site/docs/terms/glossary/establishment-event.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/establishment-event",permalink:"/WOT-terms/docs/terms/glossary/establishment-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"escrow",permalink:"/WOT-terms/docs/terms/glossary/escrow"},next:{title:"extensible-business-reporting-language",permalink:"/WOT-terms/docs/terms/glossary/extensible-business-reporting-language"}},l={},c=[{value:"Definition",id:"definition",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A key creation or rotation event that establishes or transfers control authority for an identifier. "),(0,i.kt)("p",null,"Establishment events indicate which key pairs are authoritative (controlling) for an identifier at a given point in time."),(0,i.kt)("p",null,"The subset of a ",(0,i.kt)("a",{parentName:"p",href:"key-event-log"},"key event log")," (KEL) that are establishment events are an ordered subsequence of the full KEL."),(0,i.kt)("p",null,"For a non-transferable identifier this is one authoritative key pair and it never changes so there will only ever be one establishment event, the inception event."),(0,i.kt)("p",null,"For transferable identifiers there can be multiple establishment events which would include the initial rotation event and any subsequent rotation events."),(0,i.kt)("p",null,"Source ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")))}m.isMDXComponent=!0}}]);