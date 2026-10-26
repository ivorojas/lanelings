const r="https://github.com/ivorojas/lanelings/releases/latest/download/Lanelings-Setup.exe",d=(()=>{try{return localStorage.getItem("moba_lang")==="es"}catch{return!1}})(),e=(n,o)=>d?o:n;function g(){if(window.lanelingsDesktop)return!1;try{if(new URLSearchParams(location.search).has("sala"))return!1}catch{}return/Windows/i.test(navigator.userAgent||"")}function p(){return new Promise(n=>{const o=document.createElement("style");o.textContent=`
.lg-gate{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:16px;font-family:Nunito,system-ui,sans-serif;color:#eadcc0;
  background:radial-gradient(ellipse at 50% 35%,#2a2040 0%,#120e1c 60%,#07050c 100%);}
.lg-box{width:min(760px,100%);text-align:center}
.lg-name{font-family:Cinzel,serif;font-weight:900;font-size:clamp(40px,7vw,78px);letter-spacing:.06em;color:#f2d48a;margin:0;
  text-shadow:0 3px 0 #5a3a12,0 6px 18px rgba(0,0,0,.7)}
.lg-sub{font-family:Cinzel,serif;font-weight:700;letter-spacing:.2em;font-size:clamp(11px,1.4vw,14px);color:#b8a8d8;margin:6px 0 34px}
.lg-cards{display:grid;grid-template-columns:1fr 1fr;gap:18px}
@media (max-width:620px){.lg-cards{grid-template-columns:1fr}}
.lg-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;padding:26px 18px 22px;border-radius:10px;cursor:pointer;
  border:2px solid #4a3a6a;background:linear-gradient(180deg,#221a34,#16101f);color:inherit;font:inherit;text-decoration:none;
  box-shadow:0 0 0 1px #000,0 10px 24px rgba(0,0,0,.55);transition:transform .12s,border-color .12s,box-shadow .12s}
.lg-card:hover{transform:translateY(-3px);border-color:#d4a650;box-shadow:0 0 0 1px #000,0 14px 30px rgba(0,0,0,.6),0 0 22px rgba(212,166,80,.25)}
.lg-card.rec{border-color:#8a6a2a}
.lg-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:#d4a650;color:#2a1a04;font-weight:800;font-size:12px;padding:2px 10px;border-radius:9px;letter-spacing:.04em}
.lg-ico{width:46px;height:46px;color:#f2d48a}
.lg-cn{font-family:Cinzel,serif;font-weight:700;font-size:20px;color:#f6ead0}
.lg-cs{font-size:13.5px;color:#a89cc0;line-height:1.35;max-width:300px}
.lg-note{margin-top:22px;font-size:13px;color:#8a80a8}
.lg-dl{margin-top:22px;font-size:15px;color:#9fe0a0;min-height:20px}`,document.head.appendChild(o);const s='<svg class="lg-ico" viewBox="0 0 16 16"><path d="M1 2.6 6.6 1.8v5.5H1zM7.4 1.7 15 .6v6.7H7.4zM1 8.1h5.6v5.5L1 12.8zM7.4 8.1H15v6.8l-7.6-1.1z" fill="currentColor"/></svg>',i='<svg class="lg-ico" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6.3"/><ellipse cx="8" cy="8" rx="2.7" ry="6.3"/><path d="M1.9 5.6h12.2M1.9 10.4h12.2"/></g></svg>',a=document.createElement("div");a.className="lg-gate",a.innerHTML=`<div class="lg-box">
  <h1 class="lg-name">LANELINGS</h1>
  <div class="lg-sub">${e("5 VS 5 ARENA","ARENA 5 CONTRA 5")}</div>
  <div class="lg-cards">
    <button type="button" class="lg-card" data-k="web">${i}<span class="lg-cn">${e("Play in browser","Jugar en el navegador")}</span><span class="lg-cs">${e("Right now, nothing to install","Al instante, sin instalar nada")}</span></button>
    <a class="lg-card rec" data-k="dl" href="${r}"><span class="lg-badge">${e("Recommended","Recomendado")}</span>${s}<span class="lg-cn">${e("Download for Windows","Descargar para Windows")}</span><span class="lg-cs">${e("More FPS with your graphics card, updates itself, play bots offline","Más FPS con tu placa de video, se actualiza sola y juega sin internet contra bots")}</span></a>
  </div>
  <div class="lg-dl"></div>
  <div class="lg-note">${e("Online rooms are shared: friends join from the browser or the app","Las salas online son las mismas: tus amigos entran desde el navegador o desde la app")}</div>
</div>`,document.body.appendChild(a);const c=()=>{a.remove(),o.remove(),n()};a.querySelector('[data-k="web"]').addEventListener("click",()=>{try{localStorage.setItem("lanelings_platform","web")}catch{}c()}),a.querySelector('[data-k="dl"]').addEventListener("click",l=>{l.preventDefault();try{localStorage.setItem("lanelings_platform","download")}catch{}try{const t=document.createElement("a");t.href=r,t.rel="noopener",document.body.appendChild(t),t.click(),t.remove()}catch{location.href=r}a.querySelector(".lg-dl").textContent=e("Downloading... open the installer when it finishes. Or play in the browser meanwhile.","Descargando... abre el instalador cuando termine. O juega en el navegador mientras tanto.")})})}export{p as gate,g as needsGate};
