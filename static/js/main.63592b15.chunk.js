(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{26:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(17),i=n.n(a),r=(n(26),n(5)),s=n.n(r),o=n(6),l=n(4),d=n(18),u=n(21),b=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3/"}),f=(n(58),n(0));var h=function(e){var t=e.title,n=e.fetchURL,a=e.isbigger,i=e.islarger,r=Object(c.useState)([]),u=Object(l.a)(r,2),h=u[0],j=u[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("".concat(n));case 2:t=e.sent,j(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("div",{className:"posters",children:h.map((function(e){return Object(f.jsx)("img",{className:"poster \n                          ".concat(a?"land_poster":"","                           \n                          ").concat(i&&"land_larger"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.backdrop_path:e.poster_path)})}))}),Object(f.jsx)(d.a,{id:"EYy02ZTmJ2I",opts:{width:"100%",height:"400px",autoplay:1}})]})},j="79565fa54c00c9f99ff2a9463280da86",g={fetchTrending:"trending/all/week?api_key=".concat(j),fetchDiscoverHindi:"discover/movie?api_key=".concat(j,"&with_original_language=hi"),fetchDiscoverTe:"discover/movie?api_key=".concat(j,"&with_original_language=te"),fetchDiscoverKn:"discover/movie?api_key=".concat(j,"&with_original_language=kn")},p=(n(60),function(){var e,t,n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(g.fetchTrending);case 2:return t=e.sent,e.next=5,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsx)("div",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundSize:"cover",backgroundPosition:"center center"},children:Object(f.jsxs)("div",{className:"banner_contents",children:[Object(f.jsx)("h2",{className:"banner_title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.original_title)}),Object(f.jsx)("button",{className:"banner_btn",children:"Play"}),Object(f.jsx)("button",{className:"banner_btn",children:"Watch Trailer"}),Object(f.jsx)("p",{className:"bannner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})})}),v=(n(61),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)}))}),[]),Object(f.jsxs)("div",{className:"navbar ".concat(n?"nav_black":""),style:{padding:"10px"},children:[Object(f.jsx)("img",{className:"netflix-logo",alt:"netflix-logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}),Object(f.jsx)("img",{className:"user-logo",alt:"user-logo",src:"https://img.icons8.com/officel/80/000000/login-as-user.png"})]})});var m=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(v,{}),Object(f.jsx)(p,{}),Object(f.jsx)(h,{title:"Trending Now",fetchURL:g.fetchTrending,isbigger:!0}),Object(f.jsx)(h,{title:"Top Hindi Movies",fetchURL:g.fetchDiscoverHindi,islarger:!0}),Object(f.jsx)(h,{title:"Top Telugu Movies",fetchURL:g.fetchDiscoverTe}),Object(f.jsx)(h,{title:"Top Kannada Movies",fetchURL:g.fetchDiscoverKn})]})};i.a.render(Object(f.jsx)(m,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.63592b15.chunk.js.map