import{S as rt,i as ct,s as ot,a6 as nt,w as Ae,x as je,y as we,q as oe,o as _e,B as Pe,ay as ft,aJ as it,az as ut,k as j,m as w,g as ae,d as l,e as n,t as I,c as f,a as i,h as A,b as s,I as e,N as dt,H as xe,j as Ie,J as st,f as ht,n as _t,p as vt,aN as pt}from"../../chunks/vendor-d89f02e8.js";function Ze(_,t,o){const a=_.slice();return a[1]=t[o],a}function et(_,t,o){const a=_.slice();return a[1]=t[o],a}function mt(_){let t,o,a,r,c,h;return{c(){t=n("h4"),o=I("Active Projects"),a=j(),r=n("div"),c=n("a"),h=I("Export Report"),this.h()},l(u){t=f(u,"H4",{class:!0});var $=i(t);o=A($,"Active Projects"),$.forEach(l),a=w(u),r=f(u,"DIV",{class:!0});var O=i(r);c=f(O,"A",{href:!0,class:!0});var x=i(c);h=A(x,"Export Report"),x.forEach(l),O.forEach(l),this.h()},h(){s(t,"class","card-title flex-grow-1 mb-0"),s(c,"href",null),s(c,"class","btn btn-soft-secondary btn-sm"),s(r,"class","flex-shrink-0")},m(u,$){ae(u,t,$),e(t,o),ae(u,a,$),ae(u,r,$),e(r,c),e(c,h)},p:dt,d(u){u&&l(t),u&&l(a),u&&l(r)}}}function tt(_){let t,o,a,r,c;return{c(){t=n("div"),o=n("a"),a=n("img"),c=j(),this.h()},l(h){t=f(h,"DIV",{class:!0});var u=i(t);o=f(u,"A",{href:!0,class:!0});var $=i(o);a=f($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(l),c=w(u),u.forEach(l),this.h()},h(){xe(a.src,r=_[1].assImg)||s(a,"src",r),s(a,"alt",""),s(a,"class","rounded-circle avatar-xxs"),s(o,"href",null),s(o,"class","d-inline-block"),s(t,"class","avatar-group-item")},m(h,u){ae(h,t,u),e(t,o),e(o,a),e(t,c)},p(h,u){u&1&&!xe(a.src,r=h[1].assImg)&&s(a,"src",r)},d(h){h&&l(t)}}}function at(_){let t,o,a=_[1].projectName+"",r,c,h,u,$,O,x,V=_[1].projectLead+"",se,be,U,Q,C,L,W=_[1].percentage+"",le,J,R,ne,B,q,H,y,P,X=_[1].badge+"",M,re,fe,N,Z=_[1].dueDate+"",ce,ie,m;R=new pt({props:{class:"progress-sm flex-grow-1 rounded",color:"primary",value:_[1].percentage}});let S=_[1].subItem,E=[];for(let d=0;d<S.length;d+=1)E[d]=tt(et(_,S,d));return{c(){t=n("tr"),o=n("td"),r=I(a),c=j(),h=n("td"),u=n("img"),O=j(),x=n("a"),se=I(V),U=j(),Q=n("td"),C=n("div"),L=n("div"),le=I(W),J=j(),Ae(R.$$.fragment),ne=j(),B=n("td"),q=n("div");for(let d=0;d<E.length;d+=1)E[d].c();H=j(),y=n("td"),P=n("span"),M=I(X),fe=j(),N=n("td"),ce=I(Z),ie=j(),this.h()},l(d){t=f(d,"TR",{});var v=i(t);o=f(v,"TD",{class:!0});var k=i(o);r=A(k,a),k.forEach(l),c=w(v),h=f(v,"TD",{});var g=i(h);u=f(g,"IMG",{src:!0,class:!0,alt:!0}),O=w(g),x=f(g,"A",{href:!0,class:!0});var ee=i(x);se=A(ee,V),ee.forEach(l),g.forEach(l),U=w(v),Q=f(v,"TD",{});var ve=i(Q);C=f(ve,"DIV",{class:!0});var z=i(C);L=f(z,"DIV",{class:!0});var Y=i(L);le=A(Y,W),Y.forEach(l),J=w(z),je(R.$$.fragment,z),z.forEach(l),ve.forEach(l),ne=w(v),B=f(v,"TD",{});var pe=i(B);q=f(pe,"DIV",{class:!0});var me=i(q);for(let ue=0;ue<E.length;ue+=1)E[ue].l(me);me.forEach(l),pe.forEach(l),H=w(v),y=f(v,"TD",{});var te=i(y);P=f(te,"SPAN",{class:!0});var F=i(P);M=A(F,X),F.forEach(l),te.forEach(l),fe=w(v),N=f(v,"TD",{class:!0});var ge=i(N);ce=A(ge,Z),ge.forEach(l),ie=w(v),v.forEach(l),this.h()},h(){s(o,"class","fw-medium"),xe(u.src,$=_[1].img)||s(u,"src",$),s(u,"class","avatar-xxs rounded-circle me-1"),s(u,"alt",""),s(x,"href",be=null),s(x,"class","text-reset"),s(L,"class","flex-shrink-0 me-1 text-muted fs-13"),s(C,"class","d-flex align-items-center"),s(q,"class","avatar-group flex-nowrap"),s(P,"class",re="badge badge-soft-"+_[1].badgeClass),s(N,"class","text-muted")},m(d,v){ae(d,t,v),e(t,o),e(o,r),e(t,c),e(t,h),e(h,u),e(h,O),e(h,x),e(x,se),e(t,U),e(t,Q),e(Q,C),e(C,L),e(L,le),e(C,J),we(R,C,null),e(t,ne),e(t,B),e(B,q);for(let k=0;k<E.length;k+=1)E[k].m(q,null);e(t,H),e(t,y),e(y,P),e(P,M),e(t,fe),e(t,N),e(N,ce),e(t,ie),m=!0},p(d,v){(!m||v&1)&&a!==(a=d[1].projectName+"")&&Ie(r,a),(!m||v&1&&!xe(u.src,$=d[1].img))&&s(u,"src",$),(!m||v&1)&&V!==(V=d[1].projectLead+"")&&Ie(se,V),(!m||v&1)&&W!==(W=d[1].percentage+"")&&Ie(le,W);const k={};if(v&1&&(k.value=d[1].percentage),R.$set(k),v&1){S=d[1].subItem;let g;for(g=0;g<S.length;g+=1){const ee=et(d,S,g);E[g]?E[g].p(ee,v):(E[g]=tt(ee),E[g].c(),E[g].m(q,null))}for(;g<E.length;g+=1)E[g].d(1);E.length=S.length}(!m||v&1)&&X!==(X=d[1].badge+"")&&Ie(M,X),(!m||v&1&&re!==(re="badge badge-soft-"+d[1].badgeClass))&&s(P,"class",re),(!m||v&1)&&Z!==(Z=d[1].dueDate+"")&&Ie(ce,Z)},i(d){m||(oe(R.$$.fragment,d),m=!0)},o(d){_e(R.$$.fragment,d),m=!1},d(d){d&&l(t),Pe(R),st(E,d)}}}function gt(_){let t,o,a,r,c,h,u,$,O,x,V,se,be,U,Q,C,L,W,le,J,R,ne,B,q,H,y,P,X,M,re,fe,N,Z,ce,ie,m,S,E,d,v,k,g,ee,ve,z,Y,pe,me,te,F,ge,ue,$e,de,Le,Te,he=_[0],D=[];for(let p=0;p<he.length;p+=1)D[p]=at(Ze(_,he,p));const lt=p=>_e(D[p],1,1,()=>{D[p]=null});return{c(){t=n("div"),o=n("table"),a=n("thead"),r=n("tr"),c=n("th"),h=I("Project Name"),u=j(),$=n("th"),O=I("Project Lead"),x=j(),V=n("th"),se=I("Progress"),be=j(),U=n("th"),Q=I("Assignee"),C=j(),L=n("th"),W=I("Status"),le=j(),J=n("th"),R=I("Due Date"),ne=j(),B=n("tbody");for(let p=0;p<D.length;p+=1)D[p].c();q=j(),H=n("div"),y=n("div"),P=n("div"),X=I("Showing "),M=n("span"),re=I("5"),fe=I(" of "),N=n("span"),Z=I("25"),ce=I(" Results"),ie=j(),m=n("ul"),S=n("li"),E=n("a"),d=I("\u2190"),v=j(),k=n("li"),g=n("a"),ee=I("1"),ve=j(),z=n("li"),Y=n("a"),pe=I("2"),me=j(),te=n("li"),F=n("a"),ge=I("3"),ue=j(),$e=n("li"),de=n("a"),Le=I("\u2192"),this.h()},l(p){t=f(p,"DIV",{class:!0});var T=i(t);o=f(T,"TABLE",{class:!0});var b=i(o);a=f(b,"THEAD",{class:!0});var De=i(a);r=f(De,"TR",{});var G=i(r);c=f(G,"TH",{scope:!0});var Ne=i(c);h=A(Ne,"Project Name"),Ne.forEach(l),u=w(G),$=f(G,"TH",{scope:!0});var Se=i($);O=A(Se,"Project Lead"),Se.forEach(l),x=w(G),V=f(G,"TH",{scope:!0});var Ve=i(V);se=A(Ve,"Progress"),Ve.forEach(l),be=w(G),U=f(G,"TH",{scope:!0});var Ce=i(U);Q=A(Ce,"Assignee"),Ce.forEach(l),C=w(G),L=f(G,"TH",{scope:!0});var Re=i(L);W=A(Re,"Status"),Re.forEach(l),le=w(G),J=f(G,"TH",{scope:!0,style:!0});var Be=i(J);R=A(Be,"Due Date"),Be.forEach(l),G.forEach(l),De.forEach(l),ne=w(b),B=f(b,"TBODY",{});var qe=i(B);for(let He=0;He<D.length;He+=1)D[He].l(qe);qe.forEach(l),b.forEach(l),T.forEach(l),q=w(p),H=f(p,"DIV",{class:!0});var ke=i(H);y=f(ke,"DIV",{class:!0});var ye=i(y);P=f(ye,"DIV",{class:!0});var Ee=i(P);X=A(Ee,"Showing "),M=f(Ee,"SPAN",{class:!0});var Ge=i(M);re=A(Ge,"5"),Ge.forEach(l),fe=A(Ee," of "),N=f(Ee,"SPAN",{class:!0});var Je=i(N);Z=A(Je,"25"),Je.forEach(l),ce=A(Ee," Results"),Ee.forEach(l),ye.forEach(l),ie=w(ke),m=f(ke,"UL",{class:!0});var K=i(m);S=f(K,"LI",{class:!0});var Me=i(S);E=f(Me,"A",{href:!0,class:!0});var ze=i(E);d=A(ze,"\u2190"),ze.forEach(l),Me.forEach(l),v=w(K),k=f(K,"LI",{class:!0});var Oe=i(k);g=f(Oe,"A",{href:!0,class:!0});var Ue=i(g);ee=A(Ue,"1"),Ue.forEach(l),Oe.forEach(l),ve=w(K),z=f(K,"LI",{class:!0});var Ye=i(z);Y=f(Ye,"A",{href:!0,class:!0});var Fe=i(Y);pe=A(Fe,"2"),Fe.forEach(l),Ye.forEach(l),me=w(K),te=f(K,"LI",{class:!0});var Ke=i(te);F=f(Ke,"A",{href:!0,class:!0});var Qe=i(F);ge=A(Qe,"3"),Qe.forEach(l),Ke.forEach(l),ue=w(K),$e=f(K,"LI",{class:!0});var We=i($e);de=f(We,"A",{href:!0,class:!0});var Xe=i(de);Le=A(Xe,"\u2192"),Xe.forEach(l),We.forEach(l),K.forEach(l),ke.forEach(l),this.h()},h(){s(c,"scope","col"),s($,"scope","col"),s(V,"scope","col"),s(U,"scope","col"),s(L,"scope","col"),s(J,"scope","col"),ht(J,"width","10%"),s(a,"class","bg-light text-muted"),s(o,"class","table table-nowrap table-centered align-middle"),s(t,"class","table-responsive table-card"),s(M,"class","fw-semibold"),s(N,"class","fw-semibold"),s(P,"class","text-muted"),s(y,"class","flex-shrink-0"),s(E,"href",null),s(E,"class","page-link"),s(S,"class","page-item disabled"),s(g,"href",null),s(g,"class","page-link"),s(k,"class","page-item"),s(Y,"href",null),s(Y,"class","page-link"),s(z,"class","page-item active"),s(F,"href",null),s(F,"class","page-link"),s(te,"class","page-item"),s(de,"href",null),s(de,"class","page-link"),s($e,"class","page-item"),s(m,"class","pagination pagination-separated pagination-sm mb-0"),s(H,"class","align-items-center mt-xl-3 mt-4 justify-content-between d-flex")},m(p,T){ae(p,t,T),e(t,o),e(o,a),e(a,r),e(r,c),e(c,h),e(r,u),e(r,$),e($,O),e(r,x),e(r,V),e(V,se),e(r,be),e(r,U),e(U,Q),e(r,C),e(r,L),e(L,W),e(r,le),e(r,J),e(J,R),e(o,ne),e(o,B);for(let b=0;b<D.length;b+=1)D[b].m(B,null);ae(p,q,T),ae(p,H,T),e(H,y),e(y,P),e(P,X),e(P,M),e(M,re),e(P,fe),e(P,N),e(N,Z),e(P,ce),e(H,ie),e(H,m),e(m,S),e(S,E),e(E,d),e(m,v),e(m,k),e(k,g),e(g,ee),e(m,ve),e(m,z),e(z,Y),e(Y,pe),e(m,me),e(m,te),e(te,F),e(F,ge),e(m,ue),e(m,$e),e($e,de),e(de,Le),Te=!0},p(p,T){if(T&1){he=p[0];let b;for(b=0;b<he.length;b+=1){const De=Ze(p,he,b);D[b]?(D[b].p(De,T),oe(D[b],1)):(D[b]=at(De),D[b].c(),oe(D[b],1),D[b].m(B,null))}for(_t(),b=he.length;b<D.length;b+=1)lt(b);vt()}},i(p){if(!Te){for(let T=0;T<he.length;T+=1)oe(D[T]);Te=!0}},o(p){D=D.filter(Boolean);for(let T=0;T<D.length;T+=1)_e(D[T]);Te=!1},d(p){p&&l(t),st(D,p),p&&l(q),p&&l(H)}}}function $t(_){let t,o,a,r;return t=new it({props:{class:"d-flex align-items-center",$$slots:{default:[mt]},$$scope:{ctx:_}}}),a=new ut({props:{$$slots:{default:[gt]},$$scope:{ctx:_}}}),{c(){Ae(t.$$.fragment),o=j(),Ae(a.$$.fragment)},l(c){je(t.$$.fragment,c),o=w(c),je(a.$$.fragment,c)},m(c,h){we(t,c,h),ae(c,o,h),we(a,c,h),r=!0},p(c,h){const u={};h&64&&(u.$$scope={dirty:h,ctx:c}),t.$set(u);const $={};h&65&&($.$$scope={dirty:h,ctx:c}),a.$set($)},i(c){r||(oe(t.$$.fragment,c),oe(a.$$.fragment,c),r=!0)},o(c){_e(t.$$.fragment,c),_e(a.$$.fragment,c),r=!1},d(c){Pe(t,c),c&&l(o),Pe(a,c)}}}function Et(_){let t,o;return t=new ft({props:{$$slots:{default:[$t]},$$scope:{ctx:_}}}),{c(){Ae(t.$$.fragment)},l(a){je(t.$$.fragment,a)},m(a,r){we(t,a,r),o=!0},p(a,r){const c={};r&65&&(c.$$scope={dirty:r,ctx:a}),t.$set(c)},i(a){o||(oe(t.$$.fragment,a),o=!0)},o(a){_e(t.$$.fragment,a),o=!1},d(a){Pe(t,a)}}}function bt(_){let t,o;return t=new nt({props:{xl:7,$$slots:{default:[Et]},$$scope:{ctx:_}}}),{c(){Ae(t.$$.fragment)},l(a){je(t.$$.fragment,a)},m(a,r){we(t,a,r),o=!0},p(a,[r]){const c={};r&65&&(c.$$scope={dirty:r,ctx:a}),t.$set(c)},i(a){o||(oe(t.$$.fragment,a),o=!0)},o(a){_e(t.$$.fragment,a),o=!1},d(a){Pe(t,a)}}}function Dt(_,t,o){let{activeProjects:a}=t;return _.$$set=r=>{"activeProjects"in r&&o(0,a=r.activeProjects)},[a]}class At extends rt{constructor(t){super();ct(this,t,Dt,bt,ot,{activeProjects:0})}}export{At as default};
