if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BTbn81Qf.css",revision:null},{url:"assets/index-HNS4mfEh.js",revision:null},{url:"index.html",revision:"30ca555075a41481e149ba152a72e15d"},{url:"registerSW.js",revision:"f436f97c5d7d2fa474e52ef344700ed3"},{url:"manifest.webmanifest",revision:"93fbe62d5f40078451a6e4ad04b4b1b5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
