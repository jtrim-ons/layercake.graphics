import{S as e,i as t,s,G as n,e as a,t as i,a as l,d as o,f as c,g as r,j as h,h as d,l as u,H as f,m,n as g,C as p,b as v,v as w,k as E,o as k,r as y,p as $,u as L,x as S,F as C,I as G,J as b,K as x}from"./client.1e3b7523.js";function A(e,t,s){const n=e.slice();return n[10]=t[s],n}function I(e){let t,s,n,v,w,E,k,y,$,L,S,C,G=e[10].metadata.title+"",b=e[10].html+"";return{c(){t=a("section"),s=a("h2"),n=i(G),v=l(),w=a("small"),E=a("a"),k=i("edit this section"),$=l(),S=l(),this.h()},l(e){t=o(e,"SECTION",{id:!0,class:!0});var a=c(t);s=o(a,"H2",{class:!0});var i=c(s);n=r(i,G),v=h(i),w=o(i,"SMALL",{class:!0});var l=c(w);E=o(l,"A",{href:!0,target:!0,rel:!0});var u=c(E);k=r(u,"edit this section"),u.forEach(d),l.forEach(d),i.forEach(d),$=h(a),S=h(a),a.forEach(d),this.h()},h(){u(E,"href",y="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file),u(E,"target","_blank"),u(E,"rel","nofollow"),u(w,"class","svelte-1097mf0"),u(s,"class","svelte-1097mf0"),L=new f(b,S),u(t,"id",C=e[10].slug),u(t,"class","svelte-1097mf0")},m(e,a){m(e,t,a),g(t,s),g(s,n),g(s,v),g(s,w),g(w,E),g(E,k),g(t,$),L.m(t),g(t,S)},p(e,s){1&s&&G!==(G=e[10].metadata.title+"")&&p(n,G),1&s&&y!==(y="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+e[10].file)&&u(E,"href",y),1&s&&b!==(b=e[10].html+"")&&L.p(b),1&s&&C!==(C=e[10].slug)&&u(t,"id",C)},d(e){e&&d(t)}}}function T(e){let t,s,i,r,f,p,C,T,j;function B(t){e[8].call(null,t)}let M={sections:e[0]};void 0!==e[2]&&(M.activeGuideSection=e[2]);const R=new n({props:M});G.push(()=>b(R,"activeGuideSection",B));let q=e[0],D=[];for(let t=0;t<q.length;t+=1)D[t]=I(A(e,q,t));return{c(){t=a("meta"),s=a("meta"),i=a("link"),r=l(),f=a("sidebar"),v(R.$$.fragment),C=l(),T=a("div");for(let e=0;e<D.length;e+=1)D[e].c();this.h()},l(e){const n=w('[data-svelte="svelte-1u1w7sg"]',document.head);t=o(n,"META",{name:!0,content:!0}),s=o(n,"META",{name:!0,content:!0}),i=o(n,"LINK",{rel:!0,href:!0}),n.forEach(d),r=h(e),f=o(e,"SIDEBAR",{class:!0});var a=c(f);E(R.$$.fragment,a),a.forEach(d),C=h(e),T=o(e,"DIV",{id:!0,class:!0});var l=c(T);for(let e=0;e<D.length;e+=1)D[e].l(l);l.forEach(d),this.h()},h(){document.title="LayerCake - Guide",u(t,"name","og:title"),u(t,"content","Layer Cake — Guide"),u(s,"name","twitter:title"),u(s,"content","Layer Cake — Guide"),u(i,"rel","stylesheet"),u(i,"href","hljs.css"),u(f,"class","svelte-1097mf0"),u(T,"id","container"),u(T,"class","content svelte-1097mf0")},m(n,a){g(document.head,t),g(document.head,s),g(document.head,i),m(n,r,a),m(n,f,a),k(R,f,null),m(n,C,a),m(n,T,a);for(let e=0;e<D.length;e+=1)D[e].m(T,null);e[9](T),j=!0},p(e,[t]){const s={};if(1&t&&(s.sections=e[0]),!p&&4&t&&(p=!0,s.activeGuideSection=e[2],x(()=>p=!1)),R.$set(s),1&t){let s;for(q=e[0],s=0;s<q.length;s+=1){const n=A(e,q,s);D[s]?D[s].p(n,t):(D[s]=I(n),D[s].c(),D[s].m(T,null))}for(;s<D.length;s+=1)D[s].d(1);D.length=q.length}},i(e){j||(y(R.$$.fragment,e),j=!0)},o(e){$(R.$$.fragment,e),j=!1},d(n){d(t),d(s),d(i),n&&d(r),n&&d(f),L(R),n&&d(C),n&&d(T),S(D,n),e[9](null)}}}async function j({params:e,query:t}){return this.fetch("api/guide").then(e=>e.json()).then(e=>({sections:e}))}function B(e,t,s){let n,a,{sections:i}=t,l=[],o="introduction",c=[];function r(){if(n){const{top:e}=n.getBoundingClientRect();l=[].map.call(c,t=>t.getBoundingClientRect().top-e)}}function h(){const e=-window.scrollY;let t=c.length;for(;t--;)if(l[t]+e<100){const e=c[t],{id:n}=e;return void(n!==o&&(s(2,a=n),o=n))}}return C(()=>{if("undefined"!=typeof window){c=n.querySelectorAll("[id]"),o=window.location.hash.slice(1),s(2,a=o),r(),h(),window.addEventListener("scroll",h,!0),window.addEventListener("resize",r,!0);setTimeout(r,1e3),setTimeout(r,5e3)}}),e.$set=e=>{"sections"in e&&s(0,i=e.sections)},[i,n,a,l,o,c,r,h,function(e){a=e,s(2,a)},function(e){G[e?"unshift":"push"](()=>{s(1,n=e)})}]}export default class extends e{constructor(e){super(),t(this,e,B,T,s,{sections:0})}}export{j as preload};
