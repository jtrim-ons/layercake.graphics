import{c as t,d as n,e as s,f as e,g as i,s as c,h as a,S as o,k as r,I as u,E as l,l as f,m as h,J as v,o as g,F as d,p as m,t as p,D as k,U as x,M as b,b as E,n as G}from"./index.8a861496.js";function S(t,n,s){var e=t.slice();return e[8]=n[s],e}function A(t,n,s){var e=t.slice();return e[5]=n[s],e}function I(t){var n,s,e,i,c=t[8].title+"";return{c:function(){n=r("a"),s=u(c),this.h()},l:function(t){n=f(t,"A",{class:!0,href:!0});var e=h(n);s=v(e,c),e.forEach(g),this.h()},h:function(){m(n,"class",e="subsection "+(t[8].slug===t[0]?"active":"")+" svelte-k3tiex"),m(n,"href","/guide#"+t[8].slug)},m:function(e,c){p(e,n,c),k(n,s),i=x(n,"click",t[2])},p:function(t,s){1&s&&e!==(e="subsection "+(t[8].slug===t[0]?"active":"")+" svelte-k3tiex")&&m(n,"class",e)},d:function(t){t&&g(n),i()}}}function L(t){for(var n,s,e,i,c,a,o,E=t[5].metadata.title+"",G=t[5].subsections,A=[],L=0;L<G.length;L+=1)A[L]=I(S(t,G,L));return{c:function(){n=r("li"),s=r("a"),e=u(E),c=l();for(var t=0;t<A.length;t+=1)A[t].c();a=l(),this.h()},l:function(t){n=f(t,"LI",{class:!0});var i=h(n);s=f(i,"A",{class:!0,href:!0});var o=h(s);e=v(o,E),o.forEach(g),c=d(i);for(var r=0;r<A.length;r+=1)A[r].l(i);a=d(i),i.forEach(g),this.h()},h:function(){m(s,"class",i="section "+(t[5].slug===t[0]?"active":"")+" svelte-k3tiex"),m(s,"href","/guide#"+t[5].slug),m(n,"class","svelte-k3tiex")},m:function(i,r){p(i,n,r),k(n,s),k(s,e),k(n,c);for(var u=0;u<A.length;u+=1)A[u].m(n,null);k(n,a),o=x(s,"click",t[2])},p:function(t,e){if(1&e&&i!==(i="section "+(t[5].slug===t[0]?"active":"")+" svelte-k3tiex")&&m(s,"class",i),7&e){var c;for(G=t[5].subsections,c=0;c<G.length;c+=1){var o=S(t,G,c);A[c]?A[c].p(o,e):(A[c]=I(o),A[c].c(),A[c].m(n,a))}for(;c<A.length;c+=1)A[c].d(1);A.length=G.length}},d:function(t){t&&g(n),b(A,t),o()}}}function U(t){for(var n,s=t[1],e=[],i=0;i<s.length;i+=1)e[i]=L(A(t,s,i));return{c:function(){n=r("ul");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=f(t,"UL",{class:!0});for(var s=h(n),i=0;i<e.length;i+=1)e[i].l(s);s.forEach(g),this.h()},h:function(){m(n,"class","guide-toc svelte-k3tiex")},m:function(t,s){p(t,n,s);for(var i=0;i<e.length;i+=1)e[i].m(n,null)},p:function(t,i){var c=E(i,1)[0];if(7&c){var a;for(s=t[1],a=0;a<s.length;a+=1){var o=A(t,s,a);e[a]?e[a].p(o,c):(e[a]=L(o),e[a].c(),e[a].m(n,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},i:G,o:G,d:function(t){t&&g(n),b(e,t)}}}function j(t,n,s){var e=n.open,i=n.activeGuideSection,c=n.sections,a=void 0===c?[]:c,o=a.map((function(t){return{metadata:t.metadata,subsections:t.subsections,slug:t.slug}}));return t.$set=function(t){"open"in t&&s(3,e=t.open),"activeGuideSection"in t&&s(0,i=t.activeGuideSection),"sections"in t&&s(4,a=t.sections)},[i,o,function(){s(3,e=!1)},e,a]}var D=function(r){function u(t){var o;return n(this,u),o=s(this,e(u).call(this)),i(a(o),t,j,U,c,{open:3,activeGuideSection:0,sections:4}),o}return t(u,o),u}();export{D as G};