(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function f(){var s=document.querySelector(".yachts-list"),i=document.querySelector(".rotate-left"),c=document.querySelector(".rotate-right"),n=0,e=setInterval(function(){t(s,1)},1e4);i.addEventListener("click",function(){t(s,-1),clearInterval(e)}),c.addEventListener("click",function(){t(s,1),clearInterval(e)});function t(r,l){var o=r.children,a=o[0],u=o[o.length-1];l===1?n=(n+1)%o.length:n=(n-1+o.length)%o.length,r.style.transition="transform 0.5s ease-in-out",r.style.transform="translateX(-"+n*a.offsetWidth+"px)",r.insertBefore(u,a),setTimeout(function(){r.style.transition="none",r.style.transform="translateX(0)"},500)}}document.addEventListener("DOMContentLoaded",function(){f()});
//# sourceMappingURL=commonHelpers.js.map
