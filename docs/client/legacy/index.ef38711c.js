import{M as t,N as e,a as n,b as a,d as r,e as i,i as s,s as c,f as o,S as u,R as l,g as f,t as h,h as d,j as m,k as v,l as p,n as g,m as w,o as y,T as E,p as k,q as $,O as R,v as S,A as L,F as x,x as A,B as b,w as C,r as G,y as T,E as j,U as B,V as D,W as I,X as M}from"./client.e072e418.js";function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=a(t);if(e){var s=a(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return r(this,n)}}function N(t,e,n){var a=t.slice();return a[10]=e[n],a}function O(t){var e,n,a,r,i,s,c,o,u,l,S,L,x=t[10].metadata.title+"",A=t[10].html+"";return{c:function(){e=f("section"),n=f("h2"),a=h(x),r=d(),i=f("small"),s=f("a"),c=h("edit this section"),u=d(),S=d(),this.h()},l:function(t){e=m(t,"SECTION",{id:!0,class:!0});var o=v(e);n=m(o,"H2",{class:!0});var l=v(n);a=p(l,x),r=g(l),i=m(l,"SMALL",{class:!0});var f=v(i);s=m(f,"A",{href:!0,target:!0,rel:!0});var h=v(s);c=p(h,"edit this section"),h.forEach(w),f.forEach(w),l.forEach(w),u=g(o),S=g(o),o.forEach(w),this.h()},h:function(){y(s,"href",o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file),y(s,"target","_blank"),y(s,"rel","nofollow"),y(i,"class","svelte-1097mf0"),y(n,"class","svelte-1097mf0"),l=new E(S),y(e,"id",L=t[10].slug),y(e,"class","svelte-1097mf0")},m:function(t,o){k(t,e,o),$(e,n),$(n,a),$(n,r),$(n,i),$(i,s),$(s,c),$(e,u),l.m(A,e),$(e,S)},p:function(t,n){1&n&&x!==(x=t[10].metadata.title+"")&&R(a,x),1&n&&o!==(o="https://github.com/mhkeller/layercake-examples/edit/master/src/content/guide/"+t[10].file)&&y(s,"href",o),1&n&&A!==(A=t[10].html+"")&&l.p(A),1&n&&L!==(L=t[10].slug)&&y(e,"id",L)},d:function(t){t&&w(e)}}}function V(t){var e,n,a,r,i,s,c,o,u,h;function p(e){t[3].call(null,e)}var E={sections:t[0]};void 0!==t[2]&&(E.activeGuideSection=t[2]),s=new l({props:E}),D.push((function(){return I(s,"activeGuideSection",p)}));for(var R=t[0],B=[],q=0;q<R.length;q+=1)B[q]=O(N(t,R,q));return{c:function(){e=f("meta"),n=f("meta"),a=f("link"),r=d(),i=f("sidebar"),S(s.$$.fragment),o=d(),u=f("div");for(var t=0;t<B.length;t+=1)B[t].c();this.h()},l:function(t){var c=L('[data-svelte="svelte-1u1w7sg"]',document.head);e=m(c,"META",{name:!0,content:!0}),n=m(c,"META",{name:!0,content:!0}),a=m(c,"LINK",{rel:!0,href:!0}),c.forEach(w),r=g(t),i=m(t,"SIDEBAR",{class:!0});var l=v(i);x(s.$$.fragment,l),l.forEach(w),o=g(t),u=m(t,"DIV",{id:!0,class:!0});for(var f=v(u),h=0;h<B.length;h+=1)B[h].l(f);f.forEach(w),this.h()},h:function(){document.title="LayerCake - Guide",y(e,"name","og:title"),y(e,"content","Layer Cake — Guide"),y(n,"name","twitter:title"),y(n,"content","Layer Cake — Guide"),y(a,"rel","stylesheet"),y(a,"href","hljs.css"),y(i,"class","svelte-1097mf0"),y(u,"id","container"),y(u,"class","content svelte-1097mf0")},m:function(c,l){$(document.head,e),$(document.head,n),$(document.head,a),k(c,r,l),k(c,i,l),A(s,i,null),k(c,o,l),k(c,u,l);for(var f=0;f<B.length;f+=1)B[f].m(u,null);t[4](u),h=!0},p:function(t,e){var n=b(e,1)[0],a={};if(1&n&&(a.sections=t[0]),!c&&4&n&&(c=!0,a.activeGuideSection=t[2],M((function(){return c=!1}))),s.$set(a),1&n){var r;for(R=t[0],r=0;r<R.length;r+=1){var i=N(t,R,r);B[r]?B[r].p(i,n):(B[r]=O(i),B[r].c(),B[r].m(u,null))}for(;r<B.length;r+=1)B[r].d(1);B.length=R.length}},i:function(t){h||(C(s.$$.fragment,t),h=!0)},o:function(t){G(s.$$.fragment,t),h=!1},d:function(c){w(e),w(n),w(a),c&&w(r),c&&w(i),T(s),c&&w(o),c&&w(u),j(B,c),t[4](null)}}}function z(t){return F.apply(this,arguments)}function F(){return(F=t(e.mark((function t(n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.params,n.query,t.abrupt("return",this.fetch("api/guide").then((function(t){return t.json()})).then((function(t){return{sections:t}})));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function H(t,e,n){var a,r,i=e.sections,s=[],c="introduction",o=[];function u(){if(a){var t=a.getBoundingClientRect().top;s=[].map.call(o,(function(e){return e.getBoundingClientRect().top-t}))}}function l(){for(var t=-window.scrollY,e=o.length;e--;)if(s[e]+t<100){var a=o[e].id;return void(a!==c&&(n(2,r=a),c=a))}}return B((function(){if("undefined"!=typeof window){o=a.querySelectorAll("[id]"),c=window.location.hash.slice(1),n(2,r=c),u(),l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",u,!0);setTimeout(u,1e3),setTimeout(u,5e3)}})),t.$set=function(t){"sections"in t&&n(0,i=t.sections)},[i,a,r,function(t){n(2,r=t)},function(t){D[t?"unshift":"push"]((function(){n(1,a=t)}))}]}var K=function(t){n(a,u);var e=q(a);function a(t){var n;return i(this,a),n=e.call(this),s(o(n),t,H,V,c,{sections:0}),n}return a}();export default K;export{z as preload};