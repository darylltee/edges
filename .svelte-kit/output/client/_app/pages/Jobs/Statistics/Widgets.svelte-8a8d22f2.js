import{S as Y,i as Z,s as tt,w as H,x as J,y as K,q as C,o as k,B as O,l as Q,g as T,p as et,J as rt,d as m,a6 as at,n as ot,ay as lt,k as v,m as b,e as d,t as D,c as h,a as _,h as I,b as g,I as i,N as st}from"../../../chunks/vendor-d89f02e8.js";import{M as R}from"../../../chunks/appsJobs-c6b9c838.js";import nt from"./Charts.svelte-ce968b1e.js";import"../../../chunks/img-2-d003c89a.js";import"../../../chunks/img-4-f8adc4d4.js";import"../../../chunks/img-7-4861de06.js";import"../../../chunks/img-5-9ef0dff2.js";import"../../../chunks/img-2-674a1784.js";import"../../../chunks/img-3-127a32b6.js";import"../../../chunks/img-4-5ac753e7.js";import"../../../chunks/img-6-7ff883ab.js";import"../../../chunks/img-7-06bdf5b0.js";import"../../../chunks/img-8-ebcd4c34.js";import"../../../chunks/img-9-995f69e7.js";import"../../../chunks/avatar-1-413c6ccd.js";import"../../../chunks/avatar-2-5b5618a1.js";import"../../../chunks/avatar-4-3a2dbf60.js";import"../../../chunks/avatar-5-c7d43f40.js";import"../../../chunks/avatar-6-ef07d98c.js";import"../../../chunks/avatar-7-46aa251f.js";import"../../../chunks/avatar-8-f9de7a45.js";import"../../../chunks/avatar-9-f5d371f4.js";import"../../../chunks/avatar-10-def8cdb7.js";import"../../../chunks/slack-e58caefb.js";import"../../../chunks/mail_chimp-bb8391d0.js";import"../../../chunks/bitbucket-59cc1b30.js";function U(n,e,s){const r=n.slice();return r[0]=e[s],r}function it(n){let e,s,r,t=n[0].lable+"",c,o,l,a,x=" ",S,V,E,W,z=n[0].number+"",j,q,F=" ",B,M,P,w,f,y;return f=new nt({props:{seriesData:n[0].series,dataColors:n[0].chartColor,id:n[0].id}}),{c(){e=d("div"),s=d("div"),r=d("h5"),c=D(t),o=v(),l=d("p"),a=d("span"),S=D(x),V=v(),E=d("i"),W=v(),j=D(z),q=v(),B=D(F),M=D(`
                vs. previous month`),P=v(),w=d("div"),H(f.$$.fragment),this.h()},l(p){e=h(p,"DIV",{class:!0});var $=_(e);s=h($,"DIV",{class:!0});var A=_(s);r=h(A,"H5",{class:!0});var G=_(r);c=I(G,t),G.forEach(m),o=b(A),l=h(A,"P",{class:!0});var N=_(l);a=h(N,"SPAN",{class:!0});var u=_(a);S=I(u,x),V=b(u),E=h(u,"I",{class:!0}),_(E).forEach(m),W=b(u),j=I(u,z),q=b(u),u.forEach(m),B=I(N,F),M=I(N,`
                vs. previous month`),N.forEach(m),A.forEach(m),P=b($),w=h($,"DIV",{});var L=_(w);J(f.$$.fragment,L),L.forEach(m),$.forEach(m),this.h()},h(){g(r,"class","mb-3"),g(E,"class",n[0].icon+"align-middle"),g(a,"class","badge bg-light text-"+n[0].badgeColor+" mb-0"),g(l,"class","mb-0 text-muted"),g(s,"class","flex-grow-1 p-3"),g(e,"class","d-flex")},m(p,$){T(p,e,$),i(e,s),i(s,r),i(r,c),i(s,o),i(s,l),i(l,a),i(a,S),i(a,V),i(a,E),i(a,W),i(a,j),i(a,q),i(l,B),i(l,M),i(e,P),i(e,w),K(f,w,null),y=!0},p:st,i(p){y||(C(f.$$.fragment,p),y=!0)},o(p){k(f.$$.fragment,p),y=!1},d(p){p&&m(e),O(f)}}}function ct(n){let e,s,r;return e=new lt({props:{class:"card card-height-100",$$slots:{default:[it]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment),s=v()},l(t){J(e.$$.fragment,t),s=b(t)},m(t,c){K(e,t,c),T(t,s,c),r=!0},p(t,c){const o={};c&8&&(o.$$scope={dirty:c,ctx:t}),e.$set(o)},i(t){r||(C(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){O(e,t),t&&m(s)}}}function X(n){let e,s;return e=new at({props:{class:"col-xl-3 col-md-6",$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){H(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,t){K(e,r,t),s=!0},p(r,t){const c={};t&8&&(c.$$scope={dirty:t,ctx:r}),e.$set(c)},i(r){s||(C(e.$$.fragment,r),s=!0)},o(r){k(e.$$.fragment,r),s=!1},d(r){O(e,r)}}}function mt(n){let e,s,r=R.jobWidgets,t=[];for(let o=0;o<r.length;o+=1)t[o]=X(U(n,r,o));const c=o=>k(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=Q()},l(o){for(let l=0;l<t.length;l+=1)t[l].l(o);e=Q()},m(o,l){for(let a=0;a<t.length;a+=1)t[a].m(o,l);T(o,e,l),s=!0},p(o,[l]){if(l&0){r=R.jobWidgets;let a;for(a=0;a<r.length;a+=1){const x=U(o,r,a);t[a]?(t[a].p(x,l),C(t[a],1)):(t[a]=X(x),t[a].c(),C(t[a],1),t[a].m(e.parentNode,e))}for(ot(),a=r.length;a<t.length;a+=1)c(a);et()}},i(o){if(!s){for(let l=0;l<r.length;l+=1)C(t[l]);s=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)k(t[l]);s=!1},d(o){rt(t,o),o&&m(e)}}}class Mt extends Y{constructor(e){super();Z(this,e,null,mt,tt,{})}}export{Mt as default};
