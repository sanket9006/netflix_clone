(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(15),i=n.n(a),r=(n(21),n(4)),s=n.n(r),o=n(5),l=n(3),u=n(16),d=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3/"}),b=(n(41),n(0));var f=function(e){var t=e.title,n=e.fetchURL,a=e.isbigger,i=e.islarger,r=Object(c.useState)([]),u=Object(l.a)(r,2),f=u[0],g=u[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("".concat(n));case 2:t=e.sent,g(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"posters",children:f.map((function(e){return Object(b.jsx)("img",{className:"poster \n                          ".concat(a?"land_poster":"","                           \n                          ").concat(i&&"land_larger"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.backdrop_path:e.poster_path)})}))})]})},g="79565fa54c00c9f99ff2a9463280da86",h={fetchTrending:"trending/all/week?api_key=".concat(g),fetchDiscoverHindi:"discover/movie?api_key=".concat(g,"&with_original_language=hi"),fetchDiscoverTe:"discover/movie?api_key=".concat(g,"&with_original_language=te"),fetchDiscoverKn:"discover/movie?api_key=".concat(g,"&with_original_language=kn")},j=(n(43),function(){var e,t,n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(h.fetchTrending);case 2:return t=e.sent,e.next=5,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("div",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center center"},children:Object(b.jsxs)("div",{className:"banner_contents",children:[Object(b.jsx)("h2",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.original_title)}),Object(b.jsx)("button",{className:"banner_btn",children:"Play"}),Object(b.jsx)("button",{className:"banner_btn",children:"Watch Trailer"}),Object(b.jsx)("p",{className:"bannner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})})}),p=(n(44),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)}))}),[]),Object(b.jsxs)("div",{className:"navbar ".concat(n?"nav_black":""),style:{padding:"10px"},children:[Object(b.jsx)("img",{className:"netflix-logo",alt:"netflix-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}),Object(b.jsx)("img",{className:"user-logo",alt:"user-logo",src:"https://img.icons8.com/officel/80/000000/login-as-user.png"})]})});var v=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsx)(j,{}),Object(b.jsx)(f,{title:"Trending Now",fetchURL:h.fetchTrending,isbigger:!0}),Object(b.jsx)(f,{title:"Top Hindi Movies",fetchURL:h.fetchDiscoverHindi,islarger:!0}),Object(b.jsx)(f,{title:"Top Telugu Movies",fetchURL:h.fetchDiscoverTe}),Object(b.jsx)(f,{title:"Top Kannada Movies",fetchURL:h.fetchDiscoverKn})]})};i.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3fbcf1bd.chunk.js.map