(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(4),r=t.n(l),o=(t(10),t(2)),i=t(1),s=t.n(i);var m=function(){var e=Object(n.useState)(s()().add(30,"days")),a=Object(o.a)(e,1)[0],t=function(e){return e<10?"0".concat(e):e},l=function(){var e=a.valueOf()-s()().valueOf();return{days:t(Math.floor(e/864e5)),hours:t(Math.floor(e%864e5/36e5)),minutes:t(Math.floor(e%36e5/6e4)),seconds:t(Math.floor(e%6e4/1e3))}},r=Object(n.useState)(l()),i=Object(o.a)(r,2),m=i[0],u=i[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){return u(l())}),1e3),c.a.createElement("div",{className:"App"},c.a.createElement("section",{className:"section-center"},c.a.createElement("article",{className:"gift-img"},c.a.createElement("img",{src:"./gift.jpeg",alt:"gift"})),c.a.createElement("article",{className:"gift-info"},c.a.createElement("h3",null,"old iphone giveaway"),c.a.createElement("h4",{className:"giveaway"},"giveaway ends on ",s()(a).format("LLLL")),c.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit molestiae cum libero atque ut voluptate qui consectetur aliquid incidunt voluptatem quos, dolore, non commodi quaerat aliquam eligendi, quisquam totam blanditiis."),c.a.createElement("div",{className:"deadline"},c.a.createElement("div",{className:"deadline-format"},c.a.createElement("div",null,c.a.createElement("h4",{className:"days"},m.days),c.a.createElement("span",null,"days"))),c.a.createElement("div",{className:"deadline-format"},c.a.createElement("div",null,c.a.createElement("h4",{className:"hours"},m.hours),c.a.createElement("span",null,"hours"))),c.a.createElement("div",{className:"deadline-format"},c.a.createElement("div",null,c.a.createElement("h4",{className:"minutes"},m.minutes),c.a.createElement("span",null,"mins"))),c.a.createElement("div",{className:"deadline-format"},c.a.createElement("div",null,c.a.createElement("h4",{className:"seconds"},m.seconds),c.a.createElement("span",null,"secs")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports=t(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.1293e615.chunk.js.map