(this.webpackJsonpapp_react=this.webpackJsonpapp_react||[]).push([[0],{39:function(n,e,t){n.exports=t(66)},66:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(34),i=t.n(o),l=t(10),c=t(1),u=t(11),p=t.n(u),m=t(22),s=t(18),d=t(16),f=t(3),b=t(4);function g(){var n=Object(f.a)(["\n    font-size:16pt;\n    color:#000;\n"]);return g=function(){return n},n}function h(){var n=Object(f.a)(["\n    width:150px;\n    height:150px;\n    box-shadow:0px 0px 5px 3px #f0f0f0;\n    border:1px solid;\n    border-radius:8px;\n    box-sizing:border-box;\n    margin-top:30px;\n    padding:12px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    flex-direction:column;\n\n    \n    h3 {\n        margin-top:-15px;\n        margin-bottom:5px;\n    }\n    a {\n        text-decoration:none;\n        color:lightcoral;\n        font-size:12pt;\n        margin-bottom:20px;\n    }\n"]);return h=function(){return n},n}function x(){var n=Object(f.a)(["\n    display:grid;\n    grid-template-columns:repeat(4,1fr);\n    max-width:700px;\n    margin-left:30px;\n"]);return x=function(){return n},n}function v(){var n=Object(f.a)(["\n    background-color:lightcoral;\n    color:#fff;\n    padding:11px 22px;\n    border:0;\n    border-radius:3px;\n    margin-left:5px;\n"]);return v=function(){return n},n}function E(){var n=Object(f.a)(["\n    width:700px;\n    padding:10px 10px;\n    border:2px solid lightcoral;\n    border-radius:2px;   \n"]);return E=function(){return n},n}function y(){var n=Object(f.a)(["\n    font-size:26pt;\n    color:lightcoral;\n    margin:30px 0;\n"]);return y=function(){return n},n}function j(){var n=Object(f.a)(["\n    max-width:1024px;\n    padding-left:15px;\n    padding-right:15px;\n    margin:0 auto;\n    font-family:'Roboto', sans-serif;\n"]);return j=function(){return n},n}var O=b.b.div(j()),k=b.b.h1(y()),w=b.b.input(E()),S=b.b.a(v()),q=b.b.div(x()),_=b.b.div(h()),z=b.b.h3(g()),J=t(38),I=t.n(J).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon/"});var F=function(){var n=Object(a.useState)(""),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)([]),c=Object(d.a)(i,2),u=c[0],f=c[1];function b(){return(b=Object(s.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,I.get("".concat(t)).then((function(n){var e;u?(f([].concat(Object(m.a)(u),[n.data])),e=JSON.stringify([].concat(Object(m.a)(u),[n.data])),localStorage.setItem("@pokemon",e)):(f([n.data]),e=JSON.stringify([n.data]),localStorage.setItem("@pokemon",e))}));case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(a.useEffect)((function(){if(u!==[]){var n=localStorage.getItem("@pokemon"),e=JSON.parse(n);f(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(k,null,"Pokemon Api"),r.a.createElement(w,{onChange:function(n){return o(n.target.value)},value:t}),r.a.createElement(S,{href:"#",onClick:function(n){return b.apply(this,arguments)}},"Search"),r.a.createElement(q,null,u&&u.map((function(n,e){return r.a.createElement(_,{key:n.id},r.a.createElement("img",{src:n.sprites.front_default,alt:"Foto do pokemon"}),r.a.createElement(z,null,n.name),r.a.createElement(l.b,{to:"/profile/".concat(n.name)},"Ver detalhes"))})))))};function N(){var n=Object(f.a)(["\n    font-size:26pt;\n    text-align:center;\n"]);return N=function(){return n},n}function R(){var n=Object(f.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n"]);return R=function(){return n},n}function C(){var n=Object(f.a)(["\n    display:grid;\n    grid-template-columns:300px 100px;\n    background-color:#f0f0f0;\n    padding:20px;\n    margin-top:20px;\n    border-radius:8px;\n\n    h4 {\n        margin-top:10px;\n        margin-bottom:10px;\n    }\n\n    strong {\n        \n    }\n"]);return C=function(){return n},n}function H(){var n=Object(f.a)(["\n    max-width:1024px;\n    padding-left:15px;\n    padding-right:15px;\n    margin:0 auto;\n    font-family:'Roboto', sans-serif;\n    margin-top:80px;\n\n    a {\n        display:inherit;\n        text-align:center;\n        margin:20px 0;\n        text-decoration:none;\n        color:lightcoral;\n    }\n"]);return H=function(){return n},n}var L=b.b.div(H()),M=b.b.div(C()),T=b.b.ul(R()),V=b.b.h2(N());var A=function(){var n=Object(a.useState)([]),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(c.e)().name;return Object(a.useEffect)((function(){function n(){return(n=Object(s.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.get("".concat(i)).then((function(n){o([n.data])}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,t&&t.map((function(n){return r.a.createElement(L,{key:n.id},r.a.createElement(T,null,r.a.createElement("li",null,r.a.createElement("img",{src:n.sprites.front_default})),r.a.createElement("li",null,r.a.createElement("img",{src:n.sprites.back_default})),r.a.createElement("li",null,r.a.createElement("img",{src:n.sprites.front_female})),r.a.createElement("li",null,r.a.createElement("img",{src:n.sprites.back_female}))),r.a.createElement(V,null,n.name),r.a.createElement(M,null,r.a.createElement("div",null,r.a.createElement("h4",null,"Height"),r.a.createElement("strong",null,n.height)),r.a.createElement("div",null,r.a.createElement("h4",null,"Weight"),r.a.createElement("strong",null,n.weight)),r.a.createElement("div",null,r.a.createElement("h4",null,"Skills"),r.a.createElement("strong",null,n.abilities[0].ability.name,", ",n.abilities[1].ability.name)),r.a.createElement("div",null,r.a.createElement("h4",null,"Type"),r.a.createElement("strong",null,n.types[0].type.name))),r.a.createElement(l.b,{to:"/"},"Voltar"))})))};var B=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{component:F,path:"/pokemon_app",exact:!0}),r.a.createElement(c.a,{component:A,path:"/profile/:name"}))};var D=function(){return r.a.createElement(B,null)};function P(){var n=Object(f.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n#root {\n\tdisplay:flex;\n}\n\n"]);return P=function(){return n},n}var U=Object(b.a)(P());i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null),r.a.createElement(D,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b46c8857.chunk.js.map