const a=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}};a();const i=document,f=i.querySelector("#bmore"),m=i.querySelector("#bmenu"),p=i.querySelector(".links"),y=i.querySelector(".menu ");f.addEventListener("click",o=>{o.preventDefault(),y.classList.toggle("show")});m.addEventListener("click",o=>{o.preventDefault(),p.classList.toggle("show")});const c=[{id:"PyMlV5_HRWk"},{id:"XCbMVbeKlCg"},{id:"Fmdb-KmlzD8"},{id:"lOthvD1rMbQ"},{id:"nXDk86lQhto"}];i.querySelector("#slider");const g=i.querySelector("#current"),h=i.querySelector("#videos-container"),v=i.querySelector("#next"),b=i.querySelector("#prev");let e=0;v.addEventListener("click",o=>{let r=e;console.log("changed: ",r),e=e+1<c.length?e+1:e,console.log("current: ",e),e!==r&&s(c[e].id)});b.addEventListener("click",o=>{let r=e;e=e-1>=0?e-1:e,e!==r&&s(c[e].id)});s(c[e].id);L();function s(o){g.innerHTML=`<iframe width="100%" height="720" src="https://www.youtube.com/embed/${o}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}function L(){const o=c.map((r,l)=>`
    <div class="item">
      <a href="#" data-id="${l}">
        <img src="https://i3.ytimg.com/vi/${r.id}/mqdefault.jpg" />
      </a>
    </div>`);console.log("html: ",o.join("")),h.innerHTML=o.join(""),document.querySelectorAll(".item a").forEach(r=>{r.addEventListener("click",l=>{l.preventDefault(),e=+r.getAttribute("data-id"),s(c[e].id)})})}