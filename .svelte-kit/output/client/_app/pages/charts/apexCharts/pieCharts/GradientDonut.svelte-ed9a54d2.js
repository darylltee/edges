import{S as g,i as y,s as x,e as C,c as v,a as S,d as h,b as u,g as _,N as c,v as b}from"../../../../chunks/vendor-d89f02e8.js";function w(o){let e;return{c(){e=C("div"),this.h()},l(t){e=v(t,"DIV",{id:!0,class:!0,dir:!0}),S(e).forEach(h),this.h()},h(){u(e,"id","gradientdountpiechart"),u(e,"class","apex-charts"),u(e,"dir","ltr")},m(t,a){_(t,e,a)},p:c,i:c,o:c,d(t){t&&h(e)}}}function A(o,e,t){let{dataColors:a}=e;function p(r){return r.map(function(n){var i=n.replace(" ","");if(i.indexOf(",")===-1){var s=getComputedStyle(document.documentElement).getPropertyValue(i);return s.indexOf("#")!==-1&&(s=s.replace(" ","")),s||i}else{var d=n.split(",");if(d.length===2){var l=getComputedStyle(document.documentElement).getPropertyValue(d[0]);return l="rgba("+l+","+d[1]+")",l}else return i}})}var f=p(a),m={chart:{height:300,type:"donut"},series:[44,55,41,17,15],plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!1},fill:{type:"gradient"},legend:{position:"bottom",formatter(r,n){return r+" - "+n.w.globals.series[n.seriesIndex]}},title:{text:"Gradient Donut with custom Start-angle",style:{fontWeight:500}},colors:f};return b(()=>{new ApexCharts(document.querySelector("#gradientdountpiechart"),m).render()}),o.$$set=r=>{"dataColors"in r&&t(0,a=r.dataColors)},[a]}class D extends g{constructor(e){super();y(this,e,A,w,x,{dataColors:0})}}export{D as default};
