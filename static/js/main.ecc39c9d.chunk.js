(this["webpackJsonpdesafio-natural-pic"]=this["webpackJsonpdesafio-natural-pic"]||[]).push([[0],{135:function(t,e,c){},157:function(t,e,c){},165:function(t,e){},169:function(t,e){},184:function(t,e){},48:function(t,e,c){},755:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(125),r=c(38),s=c(126),i=c(7),j=(c(135),c(127)),o=c.n(j),l=c(17),u=c(3),d=(c(157),c(2));function b(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(l.b,{to:"/",children:" Home "})," | ",Object(d.jsx)(l.b,{to:"/favoritos",children:" Favoritos "})]})}var O=Object(a.createContext)([]);c(48);function f(t){var e=t.imageId,c=t.flag,n=Object(a.useState)(!1),r=Object(i.a)(n,2),s=r[0],j=r[1];return Object(a.useEffect)((function(){JSON.parse(localStorage.getItem("heartList")).map((function(t){t.id===e&&j(t.liked)}))}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("svg",{width:"40px",viewBox:"0 0 24 24",className:"heart",children:Object(d.jsx)("path",{fill:!0===s?"red":"white",d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})})})}function h(t){var e=t.images,c=Object(a.useState)({}),n=Object(i.a)(c,2),r=n[0],s=n[1];return Object(d.jsx)("div",{className:"galeria grid-columns-5 p-3",children:e?e.map((function(t){return Object(d.jsxs)("div",{className:"galeria foto svg",children:[Object(d.jsxs)("div",{onClick:function(){return function(t){var e=JSON.parse(localStorage.getItem("heartList")),c=[];e.map((function(e){e.id===t&&(e.liked=!e.liked),c.push(e)})),localStorage.setItem("heartList",JSON.stringify(c)),s(new Date)}(t.id)},className:"heart",children:[Object(d.jsx)(f,{imageId:t.id,flag:r}),Object(d.jsxs)("p",{className:"text",children:[" ",t.alt," "]})]}),Object(d.jsx)("img",{src:t.src.tiny,alt:t.alt})]},t.id)})):null})}function x(){var t=Object(a.useContext)(O).data;return Object(d.jsxs)("div",{id:"Home",children:[Object(d.jsx)("h1",{children:"Natural Pic"}),Object(d.jsx)(h,{images:t})]})}function m(){var t=Object(a.useState)(JSON.parse(localStorage.getItem("heartList"))),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){var t=c.filter((function(t){return t.liked}));n(t)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Fotos favoritas"}),Object(d.jsx)("div",{className:"p-3 galeria grid-columns-5",children:c.map((function(t){return Object(d.jsx)("div",{className:"galeria foto svg",children:Object(d.jsx)("img",{src:t.src.tiny,alt:t.alt})},t.id)}))})]})}c(159);function v(){var t=Object(a.useState)({data:[]}),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(s.a)(Object(r.a)().mark((function t(){var e;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("../fotos.json");case 2:e=t.sent,n({data:e.data.photos}),localStorage.setItem("heartList",JSON.stringify(e.data.photos));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(O.Provider,{value:c,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",element:Object(d.jsx)(x,{})}),Object(d.jsx)(u.a,{path:"/favoritos",element:Object(d.jsx)(m,{})})]})]})})})}var p=document.getElementById("root");Object(n.createRoot)(p).render(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(v,{})}))}},[[755,1,2]]]);
//# sourceMappingURL=main.ecc39c9d.chunk.js.map