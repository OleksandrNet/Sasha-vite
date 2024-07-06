import"./assets/styles-757c9a7f.js";const r=document.querySelector(".js-content"),s=[],c=[],d=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[1,5,9],[3,5,7],[3,6,9]];let n="X";r.addEventListener("click",f);r.insertAdjacentHTML("afterbegin",h());function f(t){if(t.target.textContent!=="")return;const e=Number(t.target.dataset.id),i=3;let o=!1;if(t.target.textContent=n,n==="X"?(s.push(e),o=s.length>=i?l(s):!1):(c.push(e),o=c.length>=i?l(c):!1),o){basicLightbox.create(`
        <div class="box">
            <h2>Гравець - (${n}) переміг 👍</h2>
        </div>
    `).show(),u();return}if([...r.children].every(a=>a.textContent!=="")){basicLightbox.create(`
        <div class="box">
            <h2>😰 Нічія</h2>
        </div>
    `).show(),u();return}n=n==="X"?"O":"X"}function l(t){return d.some(e=>e.every(i=>t.includes(i)))}function u(){r.innerHTML=h(),n="X",c.splice(0),s.splice(0)}function h(){let t="";for(let e=1;e<=9;e+=1)t+=`<li class="item" data-id="${e}"></li>`;return t}
//# sourceMappingURL=commonHelpers.js.map
