import{S as e,i as t,s,H as n,e as a,t as i,a as l,c as o,b as c,d as r,g as h,f as d,h as u,j as f,k as m,E as g,n as p,u as v,y as w,p as E,o as y,l as k,q as $,x as L,I as S,J as x,K as A,L as C,M as G}from"./client.e7ea6059.js";function b(e,t,s){const n=e.slice();return n[10]=t[s],n}function I(e){let t,s,n,p,v,w,E,y,k,$,L,S,A=e[10].metadata.title+"",C=e[10].html+"";return{c(){t=a("section"),s=a("h2"),n=i(A),p=l(),v=a("small"),w=a("a"),E=i("edit this section"),k=l(),L=l(),this.h()},l(e){t=o(e,"SECTION",{id:!0,class:!0});var a=c(t);s=o(a,"H2",{class:!0});var i=c(s);n=r(i,A),p=h(i),v=o(i,"SMALL",{class:!0});var l=c(v);w=o(l,"A",{href:!0,target:!0,rel:!0});var u=c(w);E=r(u,"edit this section"),u.forEach(d),l.forEach(d),i.forEach(d),k=h(a),L=h(a),a.forEach(d),this.h()},h(){u(w,"href",y="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file),u(w,"target","_blank"),u(w,"rel","nofollow"),u(v,"class","svelte-1097mf0"),u(s,"class","svelte-1097mf0"),$=new x(L),u(t,"id",S=e[10].slug),u(t,"class","svelte-1097mf0")},m(e,a){f(e,t,a),m(t,s),m(s,n),m(s,p),m(s,v),m(v,w),m(w,E),m(t,k),$.m(C,t),m(t,L)},p(e,s){1&s&&A!==(A=e[10].metadata.title+"")&&g(n,A),1&s&&y!==(y="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file)&&u(w,"href",y),1&s&&C!==(C=e[10].html+"")&&$.p(C),1&s&&S!==(S=e[10].slug)&&u(t,"id",S)},d(e){e&&d(t)}}}function T(e){let t,s,i,r,g,S,x,T,j,M;function q(t){e[3].call(null,t)}let B={sections:e[0]};void 0!==e[2]&&(B.activeGuideSection=e[2]),S=new n({props:B}),A.push(()=>C(S,"activeGuideSection",q));let R=e[0],D=[];for(let t=0;t<R.length;t+=1)D[t]=I(b(e,R,t));return{c(){t=a("meta"),s=a("meta"),i=a("link"),r=l(),g=a("sidebar"),p(S.$$.fragment),T=l(),j=a("div");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){const n=v('[data-svelte="svelte-1u1w7sg"]',document.head);t=o(n,"META",{name:!0,content:!0}),s=o(n,"META",{name:!0,content:!0}),i=o(n,"LINK",{rel:!0,href:!0}),n.forEach(d),r=h(e),g=o(e,"SIDEBAR",{class:!0});var a=c(g);w(S.$$.fragment,a),a.forEach(d),T=h(e),j=o(e,"DIV",{id:!0,class:!0});var l=c(j);for(let e=0;e<D.length;e+=1)D[e].l(l);l.forEach(d),this.h()},h(){document.title="LayerCake - Guide",u(t,"name","og:title"),u(t,"content","Layer Cake — Guide"),u(s,"name","twitter:title"),u(s,"content","Layer Cake — Guide"),u(i,"rel","stylesheet"),u(i,"href","hljs.css"),u(g,"class","svelte-1097mf0"),u(j,"id","container"),u(j,"class","content svelte-1097mf0")},m(n,a){m(document.head,t),m(document.head,s),m(document.head,i),f(n,r,a),f(n,g,a),E(S,g,null),f(n,T,a),f(n,j,a);for(let e=0;e<D.length;e+=1)D[e].m(j,null);e[4](j),M=!0},p(e,[t]){const s={};if(1&t&&(s.sections=e[0]),!x&&4&t&&(x=!0,s.activeGuideSection=e[2],G(()=>x=!1)),S.$set(s),1&t){let s;for(R=e[0],s=0;s<R.length;s+=1){const n=b(e,R,s);D[s]?D[s].p(n,t):(D[s]=I(n),D[s].c(),D[s].m(j,null))}for(;s<D.length;s+=1)D[s].d(1);D.length=R.length}},i(e){M||(y(S.$$.fragment,e),M=!0)},o(e){k(S.$$.fragment,e),M=!1},d(n){d(t),d(s),d(i),n&&d(r),n&&d(g),$(S),n&&d(T),n&&d(j),L(D,n),e[4](null)}}}async function j({params:e,query:t}){return this.fetch("api/guide").then(e=>e.json()).then(e=>({sections:e}))}function M(e,t,s){let n,a,{sections:i}=t,l=[],o="introduction",c=[];function r(){if(n){const{top:e}=n.getBoundingClientRect();l=[].map.call(c,t=>t.getBoundingClientRect().top-e)}}function h(){const e=-window.scrollY;let t=c.length;for(;t--;)if(l[t]+e<100){const e=c[t],{id:n}=e;return void(n!==o&&(s(2,a=n),o=n))}}return S(()=>{if("undefined"!=typeof window){c=n.querySelectorAll("[id]"),o=window.location.hash.slice(1),s(2,a=o),r(),h(),window.addEventListener("scroll",h,!0),window.addEventListener("resize",r,!0);setTimeout(r,1e3),setTimeout(r,5e3)}}),e.$set=e=>{"sections"in e&&s(0,i=e.sections)},[i,n,a,function(e){a=e,s(2,a)},function(e){A[e?"unshift":"push"](()=>{n=e,s(1,n)})}]}export default class extends e{constructor(e){super(),t(this,e,M,T,s,{sections:0})}}export{j as preload};