"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[7549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(n),c=r,g=h["".concat(p,".").concat(c)]||h[c]||m[c]||a;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66424:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={layout:"default",Title:"HowTo",tags:["KERI","ACDC"],permalink:"/hwt_embed-github-hosted-image-in-github-wiki-page.html",sidebar:"all_lvl3_wot_sidebar",folder:null},o="Embed a Github-hosted image in a Github wiki page",l={type:"mdx",permalink:"/howtos/hwt_embed-github-hosted-image-in-github-wiki-page",source:"@site/src/pages/howtos/hwt_embed-github-hosted-image-in-github-wiki-page.md",title:"Embed a Github-hosted image in a Github wiki page",description:"Issue",frontMatter:{layout:"default",Title:"HowTo",tags:["KERI","ACDC"],permalink:"/hwt_embed-github-hosted-image-in-github-wiki-page.html",sidebar:"all_lvl3_wot_sidebar",folder:null}},p=[{value:"Issue",id:"issue",level:2},{value:"Confusion",id:"confusion",level:2},{value:"How to do it the right way?",id:"how-to-do-it-the-right-way",level:2},{value:"Resume",id:"resume",level:2}],u={toc:p},s="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embed-a-github-hosted-image-in-a-github-wiki-page"},"Embed a Github-hosted image in a Github wiki page"),(0,r.kt)("h2",{id:"issue"},"Issue"),(0,r.kt)("p",null,"The URL of an image hosted on Github is not what it seems."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Example"),"\\\nThe link the image was broken here: ",(0,r.kt)("a",{parentName:"p",href:"https://trustoverip.github.io/acdc/glossary#prefix"},"https://trustoverip.github.io/acdc/glossary#prefix"),', it did not show an image. However, copying the image link results in "',(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png%22"},'https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"'),", and if you paste this link, you do get an image!")),(0,r.kt)("p",null,"What's going on here? And why is this relevant?"),(0,r.kt)("p",null,"We are better off knowing what the difference between 'raw' and 'generated' in Github means, so we can move faster and more be efficient. Read on."),(0,r.kt)("h2",{id:"confusion"},"Confusion"),(0,r.kt)("p",null,"When you check an image into Github, and then browse to the image's path in the repo, github doesn't display the raw picture."),(0,r.kt)("p",null,"Rather, it displays ",(0,r.kt)("strong",{parentName:"p"},"a generated html page")," that includes a bunch of Github framing so you can see the repo, the version history, etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Example continued"),"\\\nIf you look at the wiki page for the glossary entry in question: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/acdc/wiki//prefix"},"https://github.com/trustoverip/acdc/wiki//prefix"),", you will see that the URL of the image is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"},"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png"),".")),(0,r.kt)("p",null,'Even though that URL ends with "png", what it returns is not a raw PNG, but an actual web page.'),(0,r.kt)("h2",{id:"how-to-do-it-the-right-way"},"How to do it the right way?"),(0,r.kt)("p",null,"To embed an image properly in a github wiki page (whether the wiki page is a terms wiki or not), ",(0,r.kt)("strong",{parentName:"p"},"you need to get the URL for the raw image file"),". You can get this done by"),(0,r.kt)("p",null,"THREE different ways!"),(0,r.kt)("p",null,"A."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'clicking the button that says "Download" and'),(0,r.kt)("li",{parentName:"ol"},'right-clicking the image and choose "Copy Image Address"')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example result: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/WebOfTrust/keri/main/images/prefix.png"))),(0,r.kt)("p",null,"OR"),(0,r.kt)("p",null,"B."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'right-clicking on the button that says "Download" and'),(0,r.kt)("li",{parentName:"ol"},'choosing "Copy Link"')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example result: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/WebOfTrust/keri/raw/main/images/prefix.png"))),(0,r.kt)("p",null,"Either way will work. Here's the proof :), that I've deleted already:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/B1l9wwX-09.png",alt:null})),(0,r.kt)("p",null,"C. Just add ",(0,r.kt)("inlineCode",{parentName:"p"},"?raw=true")," to the URL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"example result: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true"},"https://github.com/WebOfTrust/keri/blob/main/images/prefix.png?raw=true"))),(0,r.kt)("p",null,"Either way will work. And here is the proof, that I've already deleted of course from the production environment:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/S15bh7Z09.png",alt:null})),(0,r.kt)("h2",{id:"resume"},"Resume"),(0,r.kt)("p",null,"I think this will fix your broken image links and resolve the ",(0,r.kt)("a",{parentName:"p",href:"#issue"},"issue")," mentioned above."))}h.isMDXComponent=!0}}]);