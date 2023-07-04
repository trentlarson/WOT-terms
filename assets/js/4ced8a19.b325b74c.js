"use strict";(self.webpackChunkwot_terms_docusaurus=self.webpackChunkwot_terms_docusaurus||[]).push([[8744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="Check and accept PR production Edusite locally",c={unversionedId:"How we did/check-and-accept-PR-production-Edusite-locally",id:"How we did/check-and-accept-PR-production-Edusite-locally",title:"Check and accept PR production Edusite locally",description:"- fix-mdfiles is the name of the PR.",source:"@site/docs/How we did/check-and-accept-PR-production-Edusite-locally.md",sourceDirName:"How we did",slug:"/How we did/check-and-accept-PR-production-Edusite-locally",permalink:"/docs/How we did/check-and-accept-PR-production-Edusite-locally",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change source filename if unusable or unpractical",permalink:"/docs/How we did/change-source-filename-if-unusable"},next:{title:"Create an online table to link terms to resources",permalink:"/docs/How we did/create-terms-link-table"}},i={},s=[{value:"Pull the proposed changes in",id:"pull-the-proposed-changes-in",level:2},{value:"Test",id:"test",level:2},{value:"After succesfull test  merge result",id:"after-succesfull-test--merge-result",level:2},{value:"After merge push to production environment",id:"after-merge-push-to-production-environment",level:2},{value:"Result: PR remotely accepted",id:"result-pr-remotely-accepted",level:2},{value:"Clean up",id:"clean-up",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"check-and-accept-pr-production-edusite-locally"},"Check and accept PR production Edusite locally"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git stash \ngit status\ngit fetch upstream main\ngit log\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fix-mdfiles")," is the name of the PR."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testSC1")," is the acronym of the developer that I use in this example.")),(0,a.kt)("h2",{id:"pull-the-proposed-changes-in"},"Pull the proposed changes in"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git checkout -b testSC1  \ngit fetch upstream\ngit merge upstream/fix-mdfiles\n")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("p",null,"Now the changes that the PR proposes have been locally applied to the new branch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"npm run build\nnpm run serve\n")),(0,a.kt)("p",null,"Now you can locally test the site at the address that look something like ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/WOT-terms/"),". The result of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run serve")," will tell you the exact URL."),(0,a.kt)("h2",{id:"after-succesfull-test--merge-result"},"After succesfull test  merge result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git checkout main\ngit merge testSC1\n")),(0,a.kt)("h2",{id:"after-merge-push-to-production-environment"},"After merge push to production environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git push -u upstream main\n")),(0,a.kt)("h2",{id:"result-pr-remotely-accepted"},"Result: PR remotely accepted"),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SkPSW_L6i.png",alt:null})),(0,a.kt)("h2",{id:"clean-up"},"Clean up"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git stash pop\ngit branch -D testSC1\n")))}d.isMDXComponent=!0}}]);