import{S as I,i as N,s as S,e as k,k as G,w as L,J as P,c as b,d as c,m as q,x as T,a as B,b as v,K as W,L as p,g as y,y as J,q as K,o as O,B as R,M as E,t as H,h as M,j as A}from"../chunks/vendor-56fadfd3.js";import{B as z}from"../chunks/Bg-9caaafe1.js";function D(u){return document.title=""+(u[1]+" | GunnHacks 8.0"),{c:E,l:E,m:E,d:E}}function F(u){return{c(){this.h()},l(e){this.h()},h(){document.title="Page not found | GunnHacks 8.0"},m:E,d:E}}function Q(u){let e,n,a,l,r,o=u[0].message+"",f;return{c(){e=k("h2"),n=k("strong"),a=H(u[1]),l=H(":"),r=G(),f=H(o),this.h()},l(i){e=b(i,"H2",{class:!0});var t=B(e);n=b(t,"STRONG",{});var _=B(n);a=M(_,u[1]),l=M(_,":"),_.forEach(c),r=q(t),f=M(t,o),t.forEach(c),this.h()},h(){v(e,"class","svelte-1vyrt96")},m(i,t){y(i,e,t),p(e,n),p(n,a),p(n,l),p(e,r),p(e,f)},p(i,t){t&2&&A(a,i[1]),t&1&&o!==(o=i[0].message+"")&&A(f,o)},d(i){i&&c(e)}}}function U(u){let e,n,a,l,r,o,f,i;return{c(){e=k("h2"),n=H("We couldn't find the page you requested!"),a=G(),l=k("p"),r=H("Check your url and try again?"),o=G(),f=k("a"),i=H("Go home"),this.h()},l(t){e=b(t,"H2",{class:!0});var _=B(e);n=M(_,"We couldn't find the page you requested!"),_.forEach(c),a=q(t),l=b(t,"P",{class:!0});var g=B(l);r=M(g,"Check your url and try again?"),g.forEach(c),o=q(t),f=b(t,"A",{href:!0});var m=B(f);i=M(m,"Go home"),m.forEach(c),this.h()},h(){v(e,"class","svelte-1vyrt96"),v(l,"class","svelte-1vyrt96"),v(f,"href","/")},m(t,_){y(t,e,_),p(e,n),y(t,a,_),y(t,l,_),p(l,r),y(t,o,_),y(t,f,_),p(f,i)},p:E,d(t){t&&c(e),t&&c(a),t&&c(l),t&&c(o),t&&c(f)}}}function V(u){let e,n,a,l,r,o,f,i,t;function _(s,h){return s[1]===404?F:D}let g=_(u),m=g(u);a=new z({});function w(s,h){return s[1]===404?U:Q}let j=w(u),d=j(u);return{c(){m.c(),e=k("meta"),n=G(),L(a.$$.fragment),l=G(),r=k("main"),o=k("img"),i=G(),d.c(),this.h()},l(s){const h=P('[data-svelte="svelte-1j09kym"]',document.head);m.l(h),e=b(h,"META",{name:!0,content:!0}),h.forEach(c),n=q(s),T(a.$$.fragment,s),l=q(s),r=b(s,"MAIN",{class:!0});var C=B(r);o=b(C,"IMG",{src:!0,alt:!0,class:!0}),i=q(C),d.l(C),C.forEach(c),this.h()},h(){v(e,"name","description"),v(e,"content","Make, Build, Create & Learn. It\u2019s GunnHacks 8.0, Gunn\u2019s 24\u2011hour high school hackathon."),W(o.src,f="lambda-sad.png")||v(o,"src",f),v(o,"alt","lambda frown"),v(o,"class","svelte-1vyrt96"),v(r,"class","svelte-1vyrt96")},m(s,h){m.m(document.head,null),p(document.head,e),y(s,n,h),J(a,s,h),y(s,l,h),y(s,r,h),p(r,o),p(r,i),d.m(r,null),t=!0},p(s,[h]){g!==(g=_(s))&&(m.d(1),m=g(s),m&&(m.c(),m.m(e.parentNode,e))),j===(j=w(s))&&d?d.p(s,h):(d.d(1),d=j(s),d&&(d.c(),d.m(r,null)))},i(s){t||(K(a.$$.fragment,s),t=!0)},o(s){O(a.$$.fragment,s),t=!1},d(s){m.d(s),c(e),s&&c(n),R(a,s),s&&c(l),s&&c(r),d.d()}}}function $(u){return{props:u}}function X(u,e,n){let{error:a}=e,{status:l}=e;return u.$$set=r=>{"error"in r&&n(0,a=r.error),"status"in r&&n(1,l=r.status)},[a,l]}class x extends I{constructor(e){super();N(this,e,X,V,S,{error:0,status:1})}}export{x as default,$ as load};
