import{a as c,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();c.defaults.baseURL="https://pixabay.com/api/";const p="50358414-c92bcdcb4052cd5a2ab490d79";function m(n){const o={params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}};return c.get("",o).then(e=>e.data).catch(e=>{throw console.log(e),e})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                />
            </a>
            <div class="image-info">
                <p><b>Likes:</b> ${e.likes}</p>
                <p><b>Views:</b> ${e.views}</p>
                <p><b>Comments:</b> ${e.comments}</p>
                <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const d=document.querySelector(".form"),w=d.elements["search-text"];d.addEventListener("submit",v);function v(n){n.preventDefault();const o=w.value.trim();if(o===""){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),g(),m(o).then(e=>{if(e.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
