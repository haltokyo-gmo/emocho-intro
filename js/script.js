!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){"use strict";var o=function(t){Array.prototype.forEach.call(document.querySelectorAll("nav a.is-active"),function(t){t.classList.remove("is-active")}),Array.prototype.forEach.call(document.querySelectorAll('nav a[href="'+t+'"]'),function(t){t.classList.add("is-active")}),location.hash=t};Array.prototype.forEach.call(document.querySelectorAll("nav a"),function(t){t.addEventListener("click",function(){o(t.getAttribute("href"))})});var n=document.querySelector("main");n.addEventListener("scroll",function(t){var e=t.target.scrollTop,r="#top";if(Array.prototype.forEach.call(document.querySelectorAll("article"),function(t){e>t.offsetTop-10&&(r="#"+t.id)}),r!==location.hash){Array.prototype.forEach.call(document.querySelectorAll("nav a.is-active"),function(t){t.classList.remove("is-active")}),Array.prototype.forEach.call(document.querySelectorAll('nav a[href="'+r+'"]'),function(t){t.classList.add("is-active")});var o=location.hash.length>0?location.href.replace(/#.*$/,r):location.href+r;history.replaceState(null,"EMO-CHO introduction",o)}}),location.hash.length>0&&o(location.hash)}]);