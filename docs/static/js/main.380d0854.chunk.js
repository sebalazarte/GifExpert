(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),i=a.n(r),s=a(2),u=a(9),j=a(0),l=function(e){var t=e.setCategorias,a=e.setLimite,c=Object(n.useState)(""),r=Object(s.a)(c,2),i=r[0],l=r[1],o=Object(n.useState)(10),d=Object(s.a)(o,2),b=d[0],m=d[1];return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),l("")),b.length>0&&a(b)},children:Object(j.jsxs)("div",{className:"row g-3",children:[Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("label",{className:"input-group-text",children:"Buscar"}),Object(j.jsx)("input",{id:"txtBuscar",type:"text",value:i,onChange:function(e){l(e.target.value)},className:"form-control",placeholder:"ingrese para buscar...",required:!0}),Object(j.jsx)("label",{className:"input-group-text",children:"Limite"}),Object(j.jsx)("input",{id:"txtCantidad",type:"number",value:b,onChange:function(e){m(e.target.value)},className:"form-control cantidad"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Buscar"})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),t([])},className:"btn btn-danger",children:"Limpiar"})})]})})})},o=a(10),d=a(6),b=a.n(d),m=a(8),p=function(){var e=Object(m.a)(b.a.mark((function e(t,a){var n,c,r,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(a,"&api_key=2k5QHQccKC7CXWuApE4wQJrcEMlsbQ8c"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,i=r.data,s=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,a=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounceIn",children:[Object(j.jsx)("img",{src:a,alt:t}),Object(j.jsx)("p",{children:t})]})},h=function(e){var t=e.category,a=function(e,t){var a=Object(n.useState)({data:[],loading:!0}),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){p(e,t).then((function(e){i({data:e,loading:!1})}))}),[e,t]),r}(t,e.limit),c=a.data,r=a.loading;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__faden",children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(O,Object(o.a)({},e),e.id)}))})]})},x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(20),i=Object(s.a)(r,2),u=i[0],o=i[1];return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h1",{children:"Gif Expert App"}),Object(j.jsx)("hr",{}),Object(j.jsx)(l,{setCategorias:c,setLimite:o}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)(h,{category:e,limit:u},e)}))})]})};a(17);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.380d0854.chunk.js.map