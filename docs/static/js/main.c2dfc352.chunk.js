(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/logo.aa0623fe.png"},27:function(e,t,a){e.exports=a.p+"static/media/line-up.94c04511.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/info.562de2fa.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/camping.3bbf6387.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/tickets.ce8fffaf.jpg"},33:function(e,t,a){e.exports=a(60)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),s=a(5),i=a(3),o=a(2),u=a.n(o),m=a(4),d=a(6),p=(a(39),a(14)),E=a.n(p),f={apiKey:"AIzaSyBWSP637M1Oq59rD2TShiqeXuaqgMhWtMw",authDomain:"eindwerkpgm.firebaseapp.com",databaseURL:"https://eindwerkpgm.firebaseio.com",projectId:"eindwerkpgm",storageBucket:"eindwerkpgm.appspot.com",messagingSenderId:"165213126873",appId:"1:165213126873:web:26b3eb8d2fb204fe9bbec8"},v=r.a.createContext(null),b=function(){return Object(n.useContext)(v)},g=function(e){var t=e.children,a=Object(n.useState)(E.a.apps.length?E.a.app():E.a.initializeApp(f)),c=Object(d.a)(a,1)[0];return r.a.createElement(v.Provider,{value:{app:c}},t)},h=r.a.createContext(null),k=function(e){var t=e.children,a=Object(n.useState)(JSON.parse(localStorage.getItem("react-firebase:currentUser"))),c=Object(d.a)(a,2),l=c[0],s=c[1],i=b().app.auth();Object(n.useEffect)((function(){var e=i.onAuthStateChanged((function(e){localStorage.setItem("react-firebase:currentUser",JSON.stringify(e)),s(e)}));return function(){e()}}),[]);var o=function(){var e=Object(m.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("react-firebase:currentUser",null),e.next=3,i.signOut();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{currentUser:l,signInWithEmailAndPassword:o,signOut:p}},t)},y=a(9),N=(a(41),r.a.createContext(null)),w=function(){return Object(n.useContext)(N)},x=function(e){var t=e.children,a=b().app.firestore(),n=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("messages").orderBy("createdAt","desc"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(y.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("bookmarks").orderBy("createdAt","desc"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(y.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.collection("bookmarks").doc(t);case 2:return n=e.sent,e.next=5,n.get();case 5:return r=e.sent,e.abrupt("return",Object(y.a)({uid:r.id},r.data()));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("pokemons").orderBy("name","asc"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(y.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.collection("bookmarks"),e.next=3,n.add(t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.collection("music").orderBy("name","asc"),e.next=3,t.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(y.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.collection("music").doc(t);case 2:return n=e.sent,e.next=5,n.get();case 5:return r=e.sent,e.abrupt("return",Object(y.a)({uid:r.id},r.data()));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N.Provider,{value:{addBookmark:i,getTheArtist:d,getMusic:o,getBookmarks:c,getBookmark:l,getMessages:n,getPokemons:s}},t)},j=(Object(n.createContext)(),a(32)),O=function(e){var t=e.component,a=e.layout,n=Object(j.a)(e,["component","layout"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return function(e,t,a){return t?r.a.createElement(t,a,r.a.createElement(e,a)):r.a.createElement(e,a)}(t,a,e)}}))},S=(a(48),function(e){e.children;return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("div",{className:"container footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Made by Jaimy Van Gyseghem")),r.a.createElement("div",null,r.a.createElement("a",{href:""},"Algemene voorwaarde "),r.a.createElement("a",{href:""},"Privacy Policy "),r.a.createElement("a",{href:""},"Disclaimer"))))}),C=a(26),I=a.n(C),P=a(27),B=a.n(P),M=a(28),_=a.n(M),T=a(29),A=a.n(T),F=a(30),L=a.n(F),D=(a(49),function(e){e.children;return r.a.createElement("header",{className:"app-header "},r.a.createElement("nav",{className:"navbar navbar-light navigation"},r.a.createElement("h1",{className:"centerLogo"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{onClick:{style:document.body.style.backgroundImage="../static/images/homebackground.jpg"},className:"logo",src:I.a}))),r.a.createElement("button",{onClick:function(e){document.body.classList.toggle("is-navigation-open")},className:"hamburger",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"navbarContent collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("div",{className:"navbarDesign"},r.a.createElement("ul",{className:"allItems"},r.a.createElement("li",{className:"navCat leftSide"},r.a.createElement(s.c,{to:"/home",className:"nav-link",activeClassName:"active"},r.a.createElement("p",null,"Line up"),r.a.createElement("img",{className:"animate__animated animate__bounce",src:B.a}))),r.a.createElement("li",{className:"navCat rightSide"},r.a.createElement(s.c,{to:"/info",className:"nav-link",activeClassName:"active"},r.a.createElement("p",null,"Info"),r.a.createElement("img",{src:_.a}))),r.a.createElement("li",{className:"navCat leftSide"},r.a.createElement(s.c,{to:"/camping",className:"nav-link",activeClassName:"active"},r.a.createElement("p",null,"Camping"),r.a.createElement("img",{src:A.a}))),r.a.createElement("li",{className:"navCat rightSide"},r.a.createElement(s.c,{to:"/tickets",className:"nav-link",activeClassName:"active"},r.a.createElement("p",null,"Tickets"),r.a.createElement("img",{onClick:{style:document.body.style.backgroundImage="../../static/images/background.jpg"},src:L.a}))))))))}),W=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(D,null),r.a.createElement("main",{className:"app-main"},t),r.a.createElement(S,null))},J=(a(50),function(e){var t,a=e.artist;return r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{onClick:function(){return document.body.style.backgroundImage='url("https://jaimyvangyseghem.github.io/apiArtists/static/images/homebackground.png")'},className:"back",to:"/"},r.a.createElement("p",null,"Go back ")," "),console.log(a),a?r.a.createElement("div",{key:a.uid},(t=a.picture_back,document.body.style.backgroundImage="url(".concat(t,")"),document.body.style.backgroundPosition="center",void(document.body.style.backgroundAttachment="fixed")),r.a.createElement("div",{"data-id":a.uid},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 artistInfo"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+a.yt}),r.a.createElement("h1",null,a.name),r.a.createElement("h3",null,a.stage)),r.a.createElement("div",{className:"col-4 sideInfo"},r.a.createElement("img",{src:a.logo}),r.a.createElement("h2",null,"Latest albums"),r.a.createElement("ul",{id:"padding"},a.albums.map((function(e){return r.a.createElement("li",null,e)}))))),r.a.createElement("div",{id:"padding",className:"bio col-12"},r.a.createElement("h1",null,"Biography"),r.a.createElement("p",null,a.bio)),r.a.createElement("div",{className:"musicLinks"},r.a.createElement("div",null,r.a.createElement("h2",null,"Spotify"),r.a.createElement("a",{target:"_blank",href:a.spotify_music},r.a.createElement("button",null,"Listen now!"))),r.a.createElement("div",null,r.a.createElement("h2",null,"SoundCloud"),r.a.createElement("a",{target:"_blank",href:a.soundcloud_music},r.a.createElement("button",null,"Listen now!"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Deezer"),r.a.createElement("a",{target:"_blank",href:a.deezer_music}," ",r.a.createElement("button",null,"Listen now!")))),r.a.createElement("div",{className:"button detailButton"},r.a.createElement(s.b,{to:"/tickets"},r.a.createElement("button",{className:"tickets"},"Buy Tickets"))))):r.a.createElement("p",null,"No artist."))}),U=(a(51),function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],l=w().getMusic;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"button"},r.a.createElement(s.b,{to:"/tickets"},r.a.createElement("button",{className:"tickets"},"Buy Tickets"))),r.a.createElement("div",{className:"row"},a?a.map((function(e){return r.a.createElement("div",{className:"col-4 images",key:e.uid},r.a.createElement(s.b,{to:"/line_up/:id".replace(":id",e.uid)},r.a.createElement("img",{src:e.picture_xl}),r.a.createElement("h2",null,e.name)))})):r.a.createElement("p",null,"No artist.")))}),V=function(e){e.children;return r.a.createElement("div",{className:"page page--bookmarks"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"Bookmarks"))),r.a.createElement(U,null)))},z=a(31),q=function(e){Object(z.a)(e);var t=Object(i.g)().id,a=Object(n.useState)(null),c=Object(d.a)(a,2),l=c[0],s=c[1],o=w().getTheArtist;return Object(n.useEffect)((function(){l||function(){var e=Object(m.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(J,{artist:l}))},G=(a(52),function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=(t[0],t[1]),c=w().getMusic;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(U,null))}),H=(a(53),function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],l=w().getMessages;return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement("div",{className:"row messages-list"},a?a.map((function(e){return r.a.createElement("div",{className:"col-12",key:e.uid},r.a.createElement("article",{className:"row message","data-id":e.uid},r.a.createElement("span",{className:"col-3 message__sender"},e.sender),r.a.createElement("div",{className:"col-9 message__body"},e.content)))})):r.a.createElement("p",null,"No messages"))}),K=function(e){e.children;return r.a.createElement("div",{className:"page page--messages"},r.a.createElement("section",{className:"pt-4 pt-md-11"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",null,"Messages"))),r.a.createElement(H,null))))},R=(a(54),a(55),function(){return r.a.createElement("div",{className:"container ticketContainer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},r.a.createElement("div",{className:"leftSide col-12"},r.a.createElement("h2",{className:"ticketTitle"},"Day ticket"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Friday, Saturday or Sunday ticket"),r.a.createElement("li",null,"10 MetalFest coupons")),r.a.createElement("hr",null),r.a.createElement("div",{class:"centerbtn"},r.a.createElement("button",{class:"ticket"},"Buy ticket")))),r.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},r.a.createElement("div",{className:"leftSide col-12"},r.a.createElement("h2",{className:"ticketTitle"},"Day ticket VIP"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Friday, Saturday or Sunday VIP ticket"),r.a.createElement("li",null,"30 MetalFest coupons"),r.a.createElement("li",null,"MetalFest T-shirt"),r.a.createElement("li",null,"Camping Ticket ")),r.a.createElement("hr",null),r.a.createElement("div",{class:"centerbtn"},r.a.createElement("button",{class:"ticket"},"Buy ticket")))),r.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},r.a.createElement("div",{className:"rightSide col-12"},r.a.createElement("h2",{className:"ticketTitle"},"Combitickets"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Entry ticket for Friday, Saterday and Sunday"),r.a.createElement("li",null,"50 MetalFest coupons"),r.a.createElement("li",null,"Camping Ticket"),r.a.createElement("li",null,"Camping Ticket ")),r.a.createElement("hr",null),r.a.createElement("div",{class:"centerbtn"},r.a.createElement("button",{class:"ticket"},"Buy ticket")))),r.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},r.a.createElement("div",{className:"rightSide col-12"},r.a.createElement("h2",{className:"ticketTitle"},"Combitickets VIP "),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"Entry ticket for Friday, Saterday and Sunday"),r.a.createElement("li",null,"75 MetalFest coupons "),r.a.createElement("li",null,"MetalFest T-shirt"),r.a.createElement("li",null,"Mystery goodyback "),r.a.createElement("li",null,"Mystery goodyback "),r.a.createElement("li",null,"Camping Ticket")),r.a.createElement("hr",null),r.a.createElement("div",{class:"centerbtn"},r.a.createElement("button",{class:"ticket"},"Buy ticket"))))))}),X=function(e){e.children;return r.a.createElement("div",null,r.a.createElement(R,null))},$=a(13),Q=function(e){e.children;var t=Object(n.useState)({txtEmail:"",txtPassword:""}),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useContext)(h),i=(s.currentUser,s.signInWithEmailAndPassword),o=(s.signOut,function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i(c.txtEmail,c.txtPassword);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(Object(y.a)({},c,Object($.a)({},t.target.name,t.target.value)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page page--sign-in"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"},r.a.createElement("form",{onSubmit:function(e){return o(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"txtEmail"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"txtEmail",name:"txtEmail","aria-describedby":"emailHelp",onChange:p,value:c.txtEmail}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"txtPassword"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"txtPassword",name:"txtPassword",onChange:p,value:c.txtPassword})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In"))))))};a(56);var Y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g,null,r.a.createElement(k,null,r.a.createElement(x,null,r.a.createElement(s.a,{basename:"/eindwerk-JaimyVanGyseghem"},r.a.createElement(i.d,null,r.a.createElement(O,{exact:!0,path:"/",layout:W,component:G}),r.a.createElement(i.a,{from:"/home",to:"/"}),r.a.createElement(O,{exact:!0,path:"/info",layout:W,component:K}),r.a.createElement(O,{exact:!0,path:"/camping",layout:W,component:V}),r.a.createElement(O,{exact:!0,path:"/line_up/:id",layout:W,component:q}),r.a.createElement(O,{exact:!0,path:"/tickets",layout:W,component:X}),r.a.createElement(O,{exact:!0,path:"/auth/sigin",layout:W,component:Q})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57),a(58);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c2dfc352.chunk.js.map