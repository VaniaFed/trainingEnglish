webpackJsonp([0],[function(n,t){},function(n,t){},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(1),u=(e.n(o),e(0));e.n(u);window.onload=function(){var n,t=function(n,t,e){var o=document.createElement("button");o.classList.add(t),o.innerHTML=n,e.appendChild(o)},e=function(){console.log(n,this.innerHTML),this.textContent==n&&alert("Success")},o=[],u=document.getElementsByClassName("item__num"),c={countColumns:0,countLines:0};!function(n,t){t<4?(n.countColumns=3,n.countLines=2):t<6?(n.countColumns=4,n.countLines=3):(n.countColumns=4,n.countLines=4)}(c,9),function(n,t){for(var e=t.countLines*t.countColumns-1;e>=0;e--)!function(t){n[e]=Math.round(1+9999*Math.random())}(n[e])}(o,c),n=o[Math.round(0+Math.random()*(c.countColumns*c.countLines-1))],function(n,e,o){!function(n){document.querySelector(".current_num").innerHTML=n}(o);for(var u=0,c=0;c<n.countLines;c++){var i=document.getElementsByClassName("container__work__inner"),s=document.createElement("div");s.classList.add("item__row"),i[0].appendChild(s);for(var r=0;r<n.countColumns;r++)t(e[u++],"item__num",s)}}(c,o,n);for(var i=0;i<u.length;i++)u[i].addEventListener("click",e)}}],[2]);