import{S as v,i as y,s as M,e as C,c as w,a as S,d as h,b as d,g as T,N as c,v as B}from"../../../../chunks/vendor-d89f02e8.js";function D(u){let e;return{c(){e=C("div"),this.h()},l(r){e=w(r,"DIV",{id:!0,class:!0,dir:!0}),S(e).forEach(h),this.h()},h(){d(e,"id","simplebubblechart"),d(e,"class","apex-charts"),d(e,"dir","ltr")},m(r,s){T(r,e,s)},p:c,i:c,o:c,d(r){r&&h(e)}}}function _(u,e,r){let{dataColors:s}=e;function b(n){return n.map(function(m){var t=m.replace(" ","");if(t.indexOf(",")===-1){var a=getComputedStyle(document.documentElement).getPropertyValue(t);return a.indexOf("#")!==-1&&(a=a.replace(" ","")),a||t}else{var i=m.split(",");if(i.length===2){var l=getComputedStyle(document.documentElement).getPropertyValue(i[0]);return l="rgba("+l+","+i[1]+")",l}else return t}})}var f=b(s);const o=(n,m,t)=>{for(var a=0,i=[];a<m;){var l=Math.floor(Math.random()*750)+1,x=Math.floor(Math.random()*(t.max-t.min+1))+t.min,g=Math.floor(Math.random()*(75-15+1))+15;i.push([l,x,g]),a++}return i};var p={chart:{height:350,type:"bubble",toolbar:{show:!1}},series:[{name:"Bubble1",data:o(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:o(new Date("12 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:o(new Date("13 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:o(new Date("14 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],dataLabels:{enabled:!1},fill:{opacity:.8},title:{text:"Simple Bubble Chart",style:{fontWeight:500}},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},colors:f};return B(()=>{new ApexCharts(document.querySelector("#simplebubblechart"),p).render()}),u.$$set=n=>{"dataColors"in n&&r(0,s=n.dataColors)},[s]}class G extends v{constructor(e){super();y(this,e,_,D,M,{dataColors:0})}}export{G as default};
