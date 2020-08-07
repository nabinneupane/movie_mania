(this["webpackJsonpmovie-review-app"]=this["webpackJsonpmovie-review-app"]||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),c=a.n(r),o=a(37),m=a(17),s=a(132),i=function(e){var t=e.handleInput,a=e.searchItems;return l.a.createElement(s.a,{className:"mx-auto w-75 p-2 my-4",style:{backgroundColor:"darkgrey"}},l.a.createElement(m.a,{sm:12,md:12},l.a.createElement("header",{className:" text-center p-0 my-3 display-4  font-weight-bolder border-bottom border-success "},"Search a Movie")),l.a.createElement("section",null,l.a.createElement("input",{type:"text",className:"form-control form-control-lg w-75 mx-auto my-3",placeholder:" Enter a movie name....",onChange:t,onKeyPress:a})))},u=a(22),d=a(31),E=function(e){var t=e.input,a=e.open;return l.a.createElement(m.a,{md:4,sm:5,className:" d-flex flex-wrap pb-3 mb-5 ",onClick:function(){return a(t.imdbID)}},l.a.createElement(d.a,{className:"mx-auto flex-fill shadow text-white bg-secondary border-light "},l.a.createElement(d.a.Header,null,l.a.createElement(d.a.Title,{className:"text-center"}," ",t.Title," "),l.a.createElement("a",{href:"#",className:"stretched-link"})),"N/A"!==t.Poster?l.a.createElement(d.a.Img,{className:"img-bottom img-fluid mx-auto",src:t.Poster,alt:"Card Img"}):l.a.createElement("div",{className:"text-white mx-auto p-2 justify-content-center"},"No Preview....")))},p=a(28),g=function(e){var t=e.arr,a=e.open;return l.a.createElement(u.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},"undefined"===typeof t?l.a.createElement(p.a,{className:"h3 mx-auto text-dark  py-5 my-5"},"Oops... There are no films with corresponding name. Please try a new one..."):t.map((function(e){return l.a.createElement(E,{key:e.imdbID,input:e,open:a})}))))},f=a(19),N=a(78),b=function(e){var t=e.selected,a=e.close,n="http://imdb.com/title/"+t.imdbID;return l.a.createElement(f.a,{style:{backgroundColor:"linen"},keyboard:"false",backdrop:"static",id:t.imdbID,show:!0,tabIndex:"-1",size:"lg",role:"dialog","aria-hidden":"true",datatoggle:"modal",onHide:a,autoFocus:!0,animated:"true",centered:!0},l.a.createElement(f.a.Dialog,{role:"document"},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,{className:"mx-auto mb-2"},t.Title," ",l.a.createElement("span",null," (",t.Year,")")))),l.a.createElement(f.a.Body,{className:"p-2"},l.a.createElement(p.a,{className:"d-flex justify-content-center p-3 "},l.a.createElement(m.a,{md:5},"N/A"!==t.Poster?l.a.createElement("img",{src:t.Poster,className:"thumbnail ",alt:"movie poster"}):l.a.createElement("div",{className:" my-5 py-5 text-muted"},"No image to Display.....")),l.a.createElement(m.a,null,l.a.createElement("ul",{className:"list-group list-group-flush"},"N/A"!==t.Genre&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Genre: "),l.a.createElement("span",null," ",t.Genre," ")),"N/A"!==t.Language&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Language: "),l.a.createElement("span",null," ",t.Language," ")),"N/A"!==t.Released&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Released: "),l.a.createElement("span",null," ",t.Released)),"N/A"!==t.Rated&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Rated: "),l.a.createElement("span",null," ",t.Rated," ")),"N/A"!==t.imdbRating&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," IMDB Rating: "),l.a.createElement("span",null," ",t.imdbRating," ")),"N/A"!==t.Director&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Director: "),l.a.createElement("span",null," ",t.Director," ")),"N/A"!==t.Writer&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Writer: "),l.a.createElement("span",null," ",t.Writer," ")),"N/A"!==t.Actors&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Actors: "),l.a.createElement("span",null," ",t.Actors," ")),"N/A"!==t.Production&&l.a.createElement("li",{className:"list-group-item"},l.a.createElement("strong",null," Production: "),l.a.createElement("span",null," ",t.Production," "))))),l.a.createElement(f.a.Title,{className:"display-4 border-top p-2"},"Plot"),l.a.createElement("p",{className:"text-muted"},"N/A"===t.Plot?"No plot to display":t.Plot)),l.a.createElement(f.a.Footer,{className:"mx-auto"},l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View IMDB"),l.a.createElement(N.a,{variant:"secondary",datadismiss:"modal",onClick:a},"Close")))},h=a(71),y=a.n(h),v=a(42),x=a.n(v);a(102).config();var w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),s=m[0],d=m[1],E=Object(n.useState)({}),p=Object(o.a)(E,2),f=p[0],N=p[1],h="//www.omdbapi.com/?apikey="+y.a.REACT_APP_API_KEY_OMDB;return l.a.createElement(u.a,{fluid:!0},l.a.createElement(i,{handleInput:function(e){var t=e.target.value;r(t)},searchItems:function(e){if("Enter"===e.key){var t=h+"&s="+a;x()(t).then((function(e){var t=e.data.Search;d(t)})).catch((function(e){console.log("Error is: ",e),d([])}))}}}),l.a.createElement(g,{arr:s,open:function(e){var t=h+"&i="+e;x()(t).then((function(e){var t=e.data;N(t)}))}}),"undefined"!=typeof f.Title&&l.a.createElement(b,{selected:f,close:function(){N({})}}))},k=a(47),A=function(){return l.a.createElement(u.a,{className:"p-0",fluid:!0},l.a.createElement(k.a,{bg:"dark",variant:"dark ",className:"border-light",expand:"lg"},l.a.createElement(k.a.Brand,{className:"mx-auto "},"Movie Mania ")))},P=a(46),I=function(){return l.a.createElement(P.d,{className:"bg-dark text-light mt-auto position-absolute w-100 mt-5 ",style:{bottom:0}},l.a.createElement("div",{className:"footer-copyright text-center py-3 "},l.a.createElement(P.c,{fluid:!0,style:{fontSize:"20px"}},"\xa9 ",(new Date).getFullYear()," Copyright: Nabin Neupane")))};var D=function(){return l.a.createElement("div",{style:{backgroundColor:"linen"},className:"min-vh-100 position-relative"},l.a.createElement(A,null),l.a.createElement(w,null),l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(125);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t){e.exports={REACT_APP_API_KEY_OMDB:"7430f6bb"}},79:function(e,t,a){e.exports=a(126)}},[[79,1,2]]]);
//# sourceMappingURL=main.1b513211.chunk.js.map