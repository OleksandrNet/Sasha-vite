import"./assets/styles-757c9a7f.js";const o={startBtn:document.querySelector(".js-start"),container:document.querySelector(".js-container")};document.querySelector("img");o.startBtn.addEventListener("click",a);function a(){const c=[...o.container.children].map(e=>s());Promise.allSettled(c).then(e=>{e.forEach((t,r)=>{o.container.children[r].textContent="",setTimeout(()=>{o.container.children[r].textContent=t.value||t.reason,r===e.length-1&&(console.log(n),basicLightbox.create(`
            <h1>${n?"Вітаю, ти виграла 🥳":"Спробуй ще разочок ❤️"}
            
            </h1>`).show())},675*r)});const n=e.every(({status:t})=>t==="fulfilled")||e.every(({status:t})=>t==="rejected")})}function s(){return new Promise((c,e)=>{const n=Math.random()*100;n>.5&&n<49?c("👌"):e("😈")})}
//# sourceMappingURL=commonHelpers2.js.map
