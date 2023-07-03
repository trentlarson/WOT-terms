"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={},o="Check and accept PR production Edusite locally",c={unversionedId:"How we did/check-and-accept-PR-production-Edusite-locally",id:"How we did/check-and-accept-PR-production-Edusite-locally",title:"Check and accept PR production Edusite locally",description:"- fix-mdfiles is the name of the PR.",source:"@site/docs/How we did/check-and-accept-PR-production-Edusite-locally.md",sourceDirName:"How we did",slug:"/How we did/check-and-accept-PR-production-Edusite-locally",permalink:"/WOT-terms/docs/How we did/check-and-accept-PR-production-Edusite-locally",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change source filename if unusable or unpractical",permalink:"/WOT-terms/docs/How we did/change-source-filename-if-unusable"},next:{title:"Create an online table to link terms to resources",permalink:"/WOT-terms/docs/How we did/create-terms-link-table"}},i={},s=[{value:"Pull the proposed changes in",id:"pull-the-proposed-changes-in",level:2},{value:"Test",id:"test",level:2},{value:"After succesfull test  merge result",id:"after-succesfull-test--merge-result",level:2},{value:"After merge push to production environment",id:"after-merge-push-to-production-environment",level:2},{value:"Result: PR remotely accepted",id:"result-pr-remotely-accepted",level:2},{value:"Clean up",id:"clean-up",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-and-accept-pr-production-edusite-locally"},"Check and accept PR production Edusite locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git stash \ngit status\ngit fetch upstream main\ngit log\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fix-mdfiles")," is the name of the PR."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testSC1")," is the acronym of the developer that I use in this example.")),(0,a.kt)("h2",{id:"pull-the-proposed-changes-in"},"Pull the proposed changes in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git checkout -b testSC1  \ngit fetch upstream\ngit merge upstream/fix-mdfiles\n")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"Now the changes that the PR proposes have been locally applied to the new branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"npm run build\nnpm run serve\n")),(0,a.kt)("p",null,"Now you can locally test the site at the address that look something like ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/WOT-terms/"),". The result of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run serve")," will tell you the exact URL."),(0,a.kt)("h2",{id:"after-succesfull-test--merge-result"},"After succesfull test  merge result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git checkout main\ngit merge testSC1\n")),(0,a.kt)("h2",{id:"after-merge-push-to-production-environment"},"After merge push to production environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git push -u upstream main\n")),(0,a.kt)("h2",{id:"result-pr-remotely-accepted"},"Result: PR remotely accepted"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SkPSW_L6i.png",alt:null})),(0,a.kt)("h2",{id:"clean-up"},"Clean up"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git stash pop\ngit branch -D testSC1\n")))}d.isMDXComponent=!0}}]);