"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,h=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,s={unversionedId:"terms/glossary/rotation-event",id:"terms/glossary/rotation-event",title:"rotation-event",description:"Definition",source:"@site/docs/terms/glossary/rotation-event.md",sourceDirName:"terms/glossary",slug:"/terms/glossary/rotation-event",permalink:"/WOT-terms/docs/terms/glossary/rotation-event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rotation-authority",permalink:"/WOT-terms/docs/terms/glossary/rotation-authority"},next:{title:"rotation",permalink:"/WOT-terms/docs/terms/glossary/rotation"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"The inner working",id:"the-inner-working",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"establishment-event"},"establishment event")," representing a transfer of root control authority of an identifier from the current set of controlling keys to new set committed to in the prior establishment event (inception or rotation) as the pre-rotated key pair set.\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SmithSamuelM/Papers/blob/master/whitepapers/KERI_WP_2.x.web.pdf"},"KERI Whitepaper Section 7.21 page 46")),(0,o.kt)("p",null,"This event provides the information needed to change the key-state including a change to the set of ",(0,o.kt)("a",{parentName:"p",href:"authoritative"},"authoritative")," keypairs for an ",(0,o.kt)("a",{parentName:"p",href:"autonomic-identifier"},"AID"),".\\\nSource ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/ietf-keri/blob/main/draft-ssmith-keri.md#basic-terminology"},"Sam Smith")),(0,o.kt)("h2",{id:"the-inner-working"},"The inner working"),(0,o.kt)("p",null,"We start with a ",(0,o.kt)("a",{parentName:"p",href:"root-of-trust"},"root-of-trust")," in public/private key-pair that is bound to an identifier derived from the key-pair. From this key-pair and then we can rotate controlling authority to other key-pairs with signed rotation messages (events). These rotation messages are witnessed by witnesses designated in the inception event and any subsequent rotation events. Upon completion of successful witnessing a receipt message is sent back to the identity controller performing the rotation and the controller keeps track of these receipts in a ",(0,o.kt)("a",{parentName:"p",href:"key-event-receipt-log"},"key event receipt log"),'.\\\nThe infrastructure needed to keep track of these key events including inception events, rotation events, and non-establishment events is key event receipt infrastructure, thus the acronym "KERI": ',(0,o.kt)("a",{parentName:"p",href:"key-event-receipt-infrastructure-(KERI)"},"Key Event Receipt Infrastructure"),".\\\n",(0,o.kt)("em",{parentName:"p"},"(SamASmith)")))}m.isMDXComponent=!0}}]);