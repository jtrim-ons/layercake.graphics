import{B as t,C as n,D as s,E as e,a as i,s as a,F as c,S as o,e as r,I as u,x as l,b as f,d as h,J as v,f as g,y as d,g as m,T as p,j as x,w as k,L as b,G,n as E}from"./index.2107e488.js";function S(t,n,s){var e=t.slice();return e[8]=n[s],e}function L(t,n,s){var e=t.slice();return e[5]=n[s],e}function j(t){var n,s,e,i,a=t[8].title+"";return{c:function(){n=r("a"),s=u(a),this.h()},l:function(t){n=f(t,"A",{class:!0,href:!0});var e=h(n);s=v(e,a),e.forEach(g),this.h()},h:function(){m(n,"class",e="subsection "+(t[8].slug===t[0]?"active":"")+" svelte-k3tiex"),m(n,"href","/guide#"+t[8].slug),i=p(n,"click",t[2])},m:function(t,e){x(t,n,e),k(n,s)},p:function(t,s){1&s&&e!==(e="subsection "+(t[8].slug===t[0]?"active":"")+" svelte-k3tiex")&&m(n,"class",e)},d:function(t){t&&g(n),i()}}}function A(t){for(var n,s,e,i,a,c,o,G=t[5].metadata.title+"",E=t[5].subsections,L=[],A=0;A<E.length;A+=1)L[A]=j(S(t,E,A));return{c:function(){n=r("li"),s=r("a"),e=u(G),a=l();for(var t=0;t<L.length;t+=1)L[t].c();c=l(),this.h()},l:function(t){n=f(t,"LI",{class:!0});var i=h(n);s=f(i,"A",{class:!0,href:!0});var o=h(s);e=v(o,G),o.forEach(g),a=d(i);for(var r=0;r<L.length;r+=1)L[r].l(i);c=d(i),i.forEach(g),this.h()},h:function(){m(s,"class",i="section "+(t[5].slug===t[0]?"active":"")+" svelte-k3tiex"),m(s,"href","/guide#"+t[5].slug),m(n,"class","svelte-k3tiex"),o=p(s,"click",t[2])},m:function(t,i){x(t,n,i),k(n,s),k(s,e),k(n,a);for(var o=0;o<L.length;o+=1)L[o].m(n,null);k(n,c)},p:function(t,e){if(1&e&&i!==(i="section "+(t[5].slug===t[0]?"active":"")+" svelte-k3tiex")&&m(s,"class",i),7&e){var a;for(E=t[5].subsections,a=0;a<E.length;a+=1){var o=S(t,E,a);L[a]?L[a].p(o,e):(L[a]=j(o),L[a].c(),L[a].m(n,c))}for(;a<L.length;a+=1)L[a].d(1);L.length=E.length}},d:function(t){t&&g(n),b(L,t),o()}}}function I(t){for(var n,s=t[1],e=[],i=0;i<s.length;i+=1)e[i]=A(L(t,s,i));return{c:function(){n=r("ul");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=f(t,"UL",{class:!0});for(var s=h(n),i=0;i<e.length;i+=1)e[i].l(s);s.forEach(g),this.h()},h:function(){m(n,"class","guide-toc svelte-k3tiex")},m:function(t,s){x(t,n,s);for(var i=0;i<e.length;i+=1)e[i].m(n,null)},p:function(t,i){var a=G(i,1)[0];if(7&a){var c;for(s=t[1],c=0;c<s.length;c+=1){var o=L(t,s,c);e[c]?e[c].p(o,a):(e[c]=A(o),e[c].c(),e[c].m(n,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=s.length}},i:E,o:E,d:function(t){t&&g(n),b(e,t)}}}function w(t,n,s){var e=n.open,i=n.activeGuideSection,a=n.sections,c=void 0===a?[]:a,o=c.map((function(t){return{metadata:t.metadata,subsections:t.subsections,slug:t.slug}}));return t.$set=function(t){"open"in t&&s(3,e=t.open),"activeGuideSection"in t&&s(0,i=t.activeGuideSection),"sections"in t&&s(4,c=t.sections)},[i,o,function(){s(3,e=!1)},e,c]}var y=function(r){function u(t){var o;return n(this,u),o=s(this,e(u).call(this)),i(c(o),t,w,I,a,{open:3,activeGuideSection:0,sections:4}),o}return t(u,o),u}();export{y as G};
