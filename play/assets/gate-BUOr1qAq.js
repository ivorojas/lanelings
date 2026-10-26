const d="https://github.com/ivorojas/lanelings/releases/latest/download/Lanelings-Setup.exe",g=(()=>{try{return localStorage.getItem("moba_lang")==="es"}catch{return!1}})(),i=(e,t)=>g?t:e;function p(){if(window.lanelingsDesktop)return!1;try{if(new URLSearchParams(location.search).has("sala"))return!1}catch{}try{if(sessionStorage.getItem("lanelings_from_site")==="web")return sessionStorage.removeItem("lanelings_from_site"),!1}catch{}return/Windows/i.test(navigator.userAgent||"")}function h(){return new Promise(e=>{const t=document.createElement("style");t.textContent=`
.lg-gate{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;font-family:Nunito,system-ui,sans-serif;color:#eadcc0;
  background:radial-gradient(ellipse at 50% 35%,#2a2040 0%,#120e1c 60%,#07050c 100%);}
.lg-box{width:min(760px,100%);text-align:center}
.lg-name{font-family:Cinzel,serif;font-weight:900;font-size:clamp(40px,7vw,78px);letter-spacing:.06em;color:#f2d48a;margin:0;
  text-shadow:0 3px 0 #5a3a12,0 6px 18px rgba(0,0,0,.7)}
.lg-logo{display:block;margin:0 auto;width:398px;height:138px;image-rendering:pixelated;filter:drop-shadow(0 4px 10px rgba(0,0,0,.55))}
@media (min-width:1700px) and (min-height:950px){.lg-logo{width:597px;height:207px}}
.lg-sub{font-family:Cinzel,serif;font-weight:700;letter-spacing:.2em;font-size:clamp(11px,1.4vw,14px);color:#b8a8d8;margin:6px 0 34px}
.lg-cards{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media (max-width:620px){.lg-cards{grid-template-columns:1fr}}
.lg-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;padding:26px 18px 22px;border-radius:10px;cursor:pointer;
  border:2px solid #4a3a6a;background:linear-gradient(180deg,#221a34,#16101f);color:inherit;font:inherit;text-decoration:none;
  box-shadow:0 0 0 1px #000,0 10px 24px rgba(0,0,0,.55);transition:transform .12s,border-color .12s,box-shadow .12s}
.lg-card:hover{transform:translateY(-3px);border-color:#d4a650;box-shadow:0 0 0 1px #000,0 14px 30px rgba(0,0,0,.6),0 0 22px rgba(212,166,80,.25)}
.lg-card.rec{border-color:#8a6a2a}
.lg-chrome{opacity:.75;font-size:.92em}
.lg-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:#d4a650;color:#2a1a04;font-weight:800;font-size:12px;padding:2px 10px;border-radius:9px;letter-spacing:.04em}
.lg-ico{width:46px;height:46px;color:#f2d48a}
.lg-cn{font-family:Cinzel,serif;font-weight:700;font-size:20px;color:#f6ead0}
.lg-cs{font-size:13.5px;color:#a89cc0;line-height:1.35;max-width:300px}
.lg-note{margin-top:22px;font-size:13px;color:#8a80a8}
.lg-dl{margin-top:22px;font-size:15px;color:#9fe0a0;min-height:20px}`,document.head.appendChild(t);const r='<svg class="lg-ico" viewBox="0 0 16 16"><path d="M1 2.6 6.6 1.8v5.5H1zM7.4 1.7 15 .6v6.7H7.4zM1 8.1h5.6v5.5L1 12.8zM7.4 8.1H15v6.8l-7.6-1.1z" fill="currentColor"/></svg>',s='<svg class="lg-ico" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6.3"/><ellipse cx="8" cy="8" rx="2.7" ry="6.3"/><path d="M1.9 5.6h12.2M1.9 10.4h12.2"/></g></svg>',n=document.createElement("div");n.className="lg-gate",n.innerHTML=`<div class="lg-box">
  <h1 class="lg-name"><picture><source media="(min-width:1700px) and (min-height:950px)" srcset="assets/brand/logo-hd.png"><img class="lg-logo" src="assets/brand/logo.png" width="398" height="138" alt="LANELINGS"></picture></h1>
  <div class="lg-sub">${i("5 VS 5 ARENA","ARENA 5 CONTRA 5")}</div>
  <div class="lg-cards">
    <button type="button" class="lg-card" data-k="web">${s}<span class="lg-cn">${i("Play in browser","Jugar en el navegador")}</span><span class="lg-cs">${i("Right now, nothing to install","Al instante, sin instalar nada")}</span><span class="lg-cs lg-chrome">${i("Works best on Google Chrome","Funciona mejor en Google Chrome")}</span></button>
    <a class="lg-card rec" data-k="dl" href="${d}"><span class="lg-badge">${i("Recommended","Recomendado")}</span>${r}<span class="lg-cn">${i("Download for Windows","Descargar para Windows")}</span><span class="lg-cs">${i("More FPS with your graphics card, updates itself, play bots offline","Más FPS con tu placa de video, se actualiza sola y juega sin internet contra bots")}</span></a>
  </div>
  <div class="lg-dl"></div>
  <div class="lg-note">${i("Online rooms are shared: friends join from the browser or the app","Las salas online son las mismas: tus amigos entran desde el navegador o desde la app")}</div>
</div>`,document.body.appendChild(n);const l=()=>{n.remove(),t.remove(),e()};n.querySelector('[data-k="web"]').addEventListener("click",()=>{try{localStorage.setItem("lanelings_platform","web")}catch{}l()}),n.querySelector('[data-k="dl"]').addEventListener("click",o=>{o.preventDefault();try{localStorage.setItem("lanelings_platform","download")}catch{}try{const a=document.createElement("a");a.href=d,a.rel="noopener",document.body.appendChild(a),a.click(),a.remove()}catch{location.href=d}n.querySelector(".lg-dl").textContent=i("Downloading... open the installer when it finishes. Or play in the browser meanwhile.","Descargando... abre el instalador cuando termine. O juega en el navegador mientras tanto.")})})}function m(){if(window.lanelingsDesktop)return!1;const e=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle/i.test(e)||/Macintosh/.test(e)&&navigator.maxTouchPoints>1}function u(){let e=!0;try{const o=localStorage.getItem("moba_lang");e=o?o==="es":!/^en/i.test(navigator.language||"")}catch{}const t=(o,a)=>e?a:o,r=location.href,s=document.createElement("style");s.textContent=`
.lg-ph{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;font-family:Nunito,system-ui,sans-serif;color:#eadcc0;
  background:radial-gradient(ellipse at 50% 35%,#2a2040 0%,#120e1c 60%,#07050c 100%);text-align:center}
.lg-ph .b{width:min(440px,100%)}
.lg-ph h1{font-family:Cinzel,serif;font-weight:900;font-size:40px;letter-spacing:.06em;color:#f2d48a;margin:0 0 4px;text-shadow:0 3px 0 #5a3a12,0 6px 18px rgba(0,0,0,.7)}
.lg-ph h2{font-family:Cinzel,serif;font-size:19px;color:#f6ead0;margin:22px 0 10px}
.lg-ph p{margin:0 0 22px;line-height:1.45;color:#d8cbb0}
.lg-ph button{display:block;width:100%;margin:0 0 10px;padding:14px;border-radius:8px;font:inherit;font-weight:800;font-size:16px;cursor:pointer;border:2px solid #8a6a2a}
.lg-ph .g{background:linear-gradient(180deg,#e8c070,#b98a34);color:#2a1a04}
.lg-ph .d{background:#1c1529;color:#eadcc0;border-color:#4a3a6a}`,document.head.appendChild(s);const n=document.createElement("div");n.className="lg-ph";const l=!!navigator.share;return n.innerHTML=`<div class="b"><h1>LANELINGS</h1>
  <h2>${t("This game is played on a computer","Este juego se juega en la computadora")}</h2>
  <p>${t("You need a mouse and keyboard. Open this same link on your PC: it works in the browser or with the Windows app.","Necesitas mouse y teclado. Abre este mismo link en tu PC: funciona en el navegador o con la app para Windows.")}</p>
  ${l?`<button type="button" class="g" data-a="share">${t("Send it to me","Mandármelo")}</button>`:""}
  <button type="button" class="${l?"d":"g"}" data-a="copy">${t("Copy the link","Copiar el link")}</button>
  <button type="button" class="d" data-a="site">${t("See the website","Ver la página del juego")}</button></div>`,document.body.appendChild(n),n.addEventListener("click",o=>{const a=o.target,c=a.getAttribute&&a.getAttribute("data-a");c==="share"?navigator.share({title:"Lanelings",url:r}).catch(()=>{}):c==="copy"?navigator.clipboard?.writeText(r).then(()=>{a.textContent=t("Link copied","Link copiado")},()=>{}):c==="site"&&(location.href="https://lanelings.com/"+(e?"":"en/"))}),new Promise(()=>{})}export{h as gate,m as isPhone,p as needsGate,u as phoneScreen};
