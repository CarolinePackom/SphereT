(self.webpackChunksp_t3=self.webpackChunksp_t3||[]).push([[41],{41:function(n){n.exports=function(){"use strict";var u=document,l=u.createTextNode.bind(u);function s(n,r,t){n.style.setProperty(r,t)}function f(n,r){return n.appendChild(r)}function p(n,r,t,e){var i=u.createElement("span");r&&(i.className=r);if(t){!e&&i.setAttribute("data-"+r,t);i.textContent=t}return n&&f(n,i)||i}function h(n,r){return n.getAttribute("data-"+r)}function v(n,r){return!n||n.length==0?[]:n.nodeName?[n]:[].slice.call(n[0].nodeName?n:(r||u).querySelectorAll(n))}function o(n){var r=[];for(;n--;)r[n]=[];return r}function d(n,r){n&&n.some(r)}function c(r){return function(n){return r[n]}}function a(n,r,t){var e="--"+r;var i=e+"-index";d(t,function(n,r){if(Array.isArray(n))d(n,function(n){s(n,i,r)});else s(n,i,r)});s(n,e+"-total",t.length)}var m={};function g(r,n,t){var e=t.indexOf(r);if(e==-1){t.unshift(r);d(m[r].depends,function(n){g(n,r,t)})}else{var i=t.indexOf(n);t.splice(e,1);t.splice(i,0,r)}return t}function n(n,r,t,e){return{by:n,depends:r,key:t,split:e}}function t(n){return g(n,0,[]).map(c(m))}function r(n){m[n.by]=n}function w(n,e,i,u,o){n.normalize();var c=[];var a=document.createDocumentFragment();if(u)c.push(n.previousSibling);var s=[];v(n.childNodes).some(function(n){if(n.tagName&&!n.hasChildNodes()){s.push(n);return}if(n.childNodes&&n.childNodes.length){s.push(n);c.push.apply(c,w(n,e,i,u,o));return}var r=n.wholeText||"";var t=r.trim();if(t.length){if(r[0]===" ")s.push(l(" "));d(t.split(i),function(n,r){if(r&&o)s.push(p(a,"whitespace"," ",o));var t=p(a,e,n);c.push(t);s.push(t)});if(r[r.length-1]===" ")s.push(l(" "))}});d(s,function(n){f(a,n)});n.innerHTML="";f(n,a);return c}var y=0;function e(n,r){for(var t in r)n[t]=r[t];return n}var i="words",b=n(i,y,"word",function(n){return w(n,"word",/\s+/,0,1)}),N="chars",k=n(N,[i],"char",function(n,t,r){var e=[];d(r[i],function(n,r){e.push.apply(e,w(n,"char","",t.whitespace&&r))});return e});function x(r){r=r||{};var c=r.key;return v(r.target||"[data-splitting]").map(function(i){var u=i["🍌"];if(!r.force&&u)return u;u=i["🍌"]={el:i};var n=t(r.by||h(i,"splitting")||N);var o=e({},r);d(n,function(n){if(n.split){var r=n.by;var t=(c?"-"+c:"")+n.key;var e=n.split(i,o,u);t&&a(i,t,e);u[r]=e;i.classList.add(r)}});i.classList.add("splitting");return u})}function C(n){n=n||{};var r=n.target=p();r.innerHTML=n.content;x(n);return r.outerHTML}function T(n,r,t){var e=v(r.matching||n.children,n);var i={};d(e,function(n){var r=Math.round(n[t]);(i[r]||(i[r]=[])).push(n)});return Object.keys(i).map(Number).sort(L).map(c(i))}function L(n,r){return n-r}x.html=C;var A=n("lines",[i],"line",function(n,r,t){return T(n,{matching:t[i]},"offsetTop")}),M=n("items",y,"item",function(n,r){return v(r.matching||n.children,n)}),S=n("rows",y,"row",function(n,r){return T(n,r,"offsetTop")}),H=n("cols",y,"col",function(n,r){return T(n,r,"offsetLeft")}),O=n("grid",["rows","cols"]),R="layout",_=n(R,y,y,function(n,r){var t=r.rows=+(r.rows||h(n,"rows")||1);var e=r.columns=+(r.columns||h(n,"columns")||1);r.image=r.image||h(n,"image")||n.currentSrc||n.src;if(r.image){var i=v("img",n)[0];r.image=i&&(i.currentSrc||i.src)}if(r.image)s(n,"background-image","url("+r.image+")");var u=t*e;var o=[];var c=p(y,"cell-grid");while(u--){var a=p(c,"cell");p(a,"cell-inner");o.push(a)}f(n,c);return o}),j=n("cellRows",[R],"row",function(n,r,t){var e=r.rows;var i=o(e);d(t[R],function(n,r,t){i[Math.floor(r/(t.length/e))].push(n)});return i}),q=n("cellColumns",[R],"col",function(n,r,t){var e=r.columns;var i=o(e);d(t[R],function(n,r){i[r%e].push(n)});return i}),z=n("cells",["cellRows","cellColumns"],"cell",function(n,r,t){return t[R]});return(x.add=r)(b),r(k),r(A),r(M),r(S),r(H),r(O),r(_),r(j),r(q),r(z),x}()}}]);