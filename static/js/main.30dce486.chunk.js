(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(5),c=n.n(o),r=n(2),a=n(1),s=(n(4),n(0)),i={red:"color-red",green:"color-green",blue:"color-blue"},u=function(t){var e=t.goods;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",className:i[t.color],children:t.name},t.id)}))})};function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(!1),i=Object(r.a)(c,2),l=i[0],b=i[1],j=Object(a.useState)(!1),f=Object(r.a)(j,2),h=f[0],O=f[1],m=Object(a.useState)(!1),g=Object(r.a)(m,2),p=g[0],y=g[1];return Object(a.useEffect)((function(){l&&d().then(o),h&&d().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then(o),p&&d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}),[l,h,p]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){b(!0),O(!1),y(!1)},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){b(!1),O(!0),y(!1)},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){b(!1),O(!1),y(!0)},children:"Load red goods"}),Object(s.jsx)(u,{goods:n})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},4:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.30dce486.chunk.js.map