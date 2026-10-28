// =====================================================================
//  lanelings.com: video de portada, heroes (filtro + destacado), datos de
//  la ultima version de la app, redes y elegir idioma. Sin dependencias.
// =====================================================================
(function () {
  'use strict';
  // ---- redes: se muestran solo cuando hay link (pegar aca la invitacion de Discord y el perfil de TikTok)
  var LINKS = { discord: '', tiktok: 'https://www.tiktok.com/@lanelings' };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var BASE = document.body.getAttribute('data-base') || '';
  var T = {}; try { T = JSON.parse($('#i18n').textContent); } catch (e) { /* sin textos */ }
  var L = T.lang || document.documentElement.lang || 'es';
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* modo privado */ } }
  };
  // ---- de donde vienen (anuncios): utm_* del link se guarda (lo lee el juego para su registro) y se avisa
  //      la visita y los clics importantes al mismo lugar que los registros de partidas. Id anonimo, sin IP.
  var TRK = 'https://lanelings-brain.netlify.app/.netlify/functions/logs';
  var pid = store.get('lanelings_pid');
  if (!pid || !/^[a-z0-9]{6,16}$/.test(pid)) { pid = Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 6); store.set('lanelings_pid', pid); }
  var utm = null;
  try {
    var q = new URLSearchParams(location.search);
    if (q.get('utm_source')) { utm = { s: q.get('utm_source'), m: q.get('utm_medium') || '', c: q.get('utm_campaign') || '', ct: q.get('utm_content') || '', t: new Date().toISOString() }; store.set('lanelings_utm', JSON.stringify(utm)); }
    else utm = JSON.parse(store.get('lanelings_utm') || 'null');
  } catch (e) { /* sin utm */ }
  var visit = Math.random().toString(36).slice(2, 10);
  var track = function (kind) {
    try {
      var meta = { player: pid, kind: kind, build: 'web', mode: utm ? utm.s : 'directo', hero: utm ? utm.c : '', session: 'web-' + visit, desktop: false };
      var body = JSON.stringify(['META', meta]) + '\n' + JSON.stringify(['V', { kind: kind, utm: utm, lang: L, path: location.pathname, ref: document.referrer.slice(0, 120), phone: /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ''), w: screen.width, h: screen.height }]) + '\n';
      if (navigator.sendBeacon) navigator.sendBeacon(TRK, new Blob([body], { type: 'text/plain' }));
    } catch (e) { /* nada */ }
  };
  track('visita');
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('.js-play, #dlBtn, [data-a="share"], [data-a="copy"]') : null;
    if (!el) return;
    track(el.id === 'dlBtn' ? 'descarga' : el.getAttribute('data-a') ? 'movil_link' : 'jugar');
  }, true);

  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var fmt = function (s, o) { return String(s).replace(/\{(\w)\}/g, function (m, k) { return o[k] != null ? o[k] : m; }); };

  // ---- idioma: el elegido se recuerda y el juego abre en el mismo idioma (misma pagina: lanelings.com)
  $$('.lang-opt').forEach(function (a) {
    a.addEventListener('click', function () { var l = a.getAttribute('hreflang'); store.set('lanelings_site_lang', l); store.set('moba_lang', l); });
  });

  // ---- "Jugar gratis": ya eligio el navegador (el juego no vuelve a preguntar navegador o app;
  //      ver needsGate en moba2/src/core/gate.ts)
  $$('.js-play').forEach(function (a) {
    a.addEventListener('click', function () {
      try { sessionStorage.setItem('lanelings_from_site', 'web'); } catch (e) { /* modo privado */ }
      if (!store.get('lanelings_platform')) store.set('lanelings_platform', 'web');
      if (!store.get('moba_lang')) store.set('moba_lang', L);   // primera vez: el juego en el idioma del sitio
    });
  });

  // ---- celular o tablet: el juego necesita mouse y teclado. La pagina se ve igual, pero "Jugar" y "Descargar"
  //      explican que es en la PC y ofrecen copiar/mandarse el link (no se abre el juego ni baja el .exe)
  var ua = navigator.userAgent || '';
  var PHONE = /Android|iPhone|iPad|iPod|Mobile|Silk|Kindle/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (PHONE) {
    document.documentElement.classList.add('is-phone');
    var LINK = 'https://lanelings.com/' + (L === 'es' ? '' : 'en/');
    var dlg = document.createElement('div');
    dlg.className = 'pc-only'; dlg.hidden = true; dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true'); dlg.setAttribute('aria-labelledby', 'pcT');
    dlg.innerHTML = '<div class="pc-scrim"></div><div class="pc-box"><h2 id="pcT">' + esc(T.pcT) + '</h2><p>' + esc(T.pcD) + '</p>' +
      '<div class="pc-btns">' + (navigator.share ? '<button type="button" class="btn btn-gold btn-lg" data-a="share">' + esc(T.pcShare) + '</button>' : '') +
      '<button type="button" class="btn ' + (navigator.share ? 'btn-dark' : 'btn-gold') + ' btn-lg" data-a="copy">' + esc(T.pcCopy) + '</button></div>' +
      '<button type="button" class="pc-close" data-a="close">' + esc(T.pcClose) + '</button></div>';
    document.body.appendChild(dlg);
    var close = function () { dlg.hidden = true; };
    dlg.addEventListener('click', function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-a');
      if (e.target.classList.contains('pc-scrim') || a === 'close') close();
      else if (a === 'share') navigator.share({ title: 'Lanelings', text: T.pcT, url: LINK }).catch(function () { /* cancelado */ });
      else if (a === 'copy') {
        var ok = function () { e.target.textContent = T.pcCopied; };
        if (navigator.clipboard) navigator.clipboard.writeText(LINK).then(ok, function () { /* sin permiso */ }); else ok();
      }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    var block = function (el) { el.addEventListener('click', function (e) { e.preventDefault(); e.stopImmediatePropagation(); dlg.hidden = false; }, true); };
    // solo las acciones (jugar / bajar el .exe): los links del menu y del pie a #descargar siguen llevando a la seccion
    $$('.js-play, .hero-cta a[href="#descargar"], #dlBtn').forEach(block);
    $$('.js-play .btn-main').forEach(function (s) { s.textContent = T.pcBtn; });
    $$('.js-play.btn-sm').forEach(function (s) { s.textContent = T.pcBtn; });
    var dlb = $('#dlBtn'); if (dlb) dlb.lastChild.textContent = T.pcDl;
  }

  // ---- barra de arriba: fondo al bajar, menu en celular
  var nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
  var onScroll = function () { nav.classList.toggle('solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (burger) burger.addEventListener('click', function () { var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  $$('#navLinks a').forEach(function (a) { a.addEventListener('click', function () { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }); });

  // ---- video de portada: se pide DESPUES de cargar la pagina (el poster es lo primero que se ve);
  //      nada de video con "ahorro de datos" o "reducir movimiento"
  var vid = $('#heroVideo'), tog = $('#vidToggle');
  var conn = navigator.connection || {};
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function startVideo() {
    if (!vid || reduce || conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '')) return;
    var webm = document.createElement('source'); webm.src = vid.getAttribute('data-webm'); webm.type = 'video/webm';
    var mp4 = document.createElement('source'); mp4.src = vid.getAttribute('data-mp4'); mp4.type = 'video/mp4';
    vid.appendChild(webm); vid.appendChild(mp4); vid.preload = 'auto'; vid.muted = true;
    vid.addEventListener('playing', function () { vid.classList.add('ready'); if (tog) tog.hidden = false; }, { once: true });
    vid.load(); var p = vid.play(); if (p && p.catch) p.catch(function () { /* sin autoplay: queda el poster */ });
    // fuera de pantalla no gasta
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) {
      if (tog && tog.getAttribute('aria-pressed') === 'true') return;
      es.forEach(function (e) { if (e.isIntersecting) { var q = vid.play(); if (q && q.catch) q.catch(function () {}); } else vid.pause(); });
    }).observe(vid);
  }
  if (tog) tog.addEventListener('click', function () {
    var paused = tog.getAttribute('aria-pressed') !== 'true';
    tog.setAttribute('aria-pressed', paused ? 'true' : 'false'); tog.setAttribute('aria-label', paused ? T.play : T.pause);
    if (paused) vid.pause(); else vid.play();
  });
  if (document.readyState === 'complete') setTimeout(startVideo, 200);
  else window.addEventListener('load', function () { setTimeout(startVideo, 200); });

  // ---- heroes: filtro por rol + heroe destacado con sus habilidades
  var grid = $('#heroGrid'), feat = $('#featHero'), HEROES = null, cur = 'rana';
  function loadHeroes(cb) {
    if (HEROES) return cb();
    fetch(BASE + 'media/heroes/heroes.json').then(function (r) { return r.json(); }).then(function (d) { HEROES = {}; d.forEach(function (h) { HEROES[h.key] = h; }); cb(); }).catch(function () { /* queda lo escrito en el HTML */ });
  }
  function tx(h) {
    var es = L === 'es';
    return { title: es ? h.title : h.titleEn, role: es ? h.role : h.roleEn,
      abil: h.abil.map(function (a) { return { key: a.key, name: es ? a.name : a.nameEn, desc: es ? a.desc : a.descEn, passive: a.passive }; }) };
  }
  function spr(h, s) {
    return '<span class="spr" style="--w:' + h.w * s + 'px;--h:' + h.h * s + 'px;--n:' + h.n + ';--t:' + h.n * h.ms + 'ms;background-image:url(' + BASE + 'media/heroes/' + h.key + '.png)" role="img" aria-label="' + esc(fmt(T.sprite, { n: h.name, t: tx(h).title })) + '"></span>';
  }
  // escala entera del destacado: que entre en el escenario (alto ~270, ancho ~340)
  function bigScale(h) { return Math.max(2, Math.min(window.innerWidth < 600 ? 3 : 4, Math.floor(270 / h.h), Math.floor(340 / h.w))); }
  function abDesc(a) {
    return '<p class="ab-name">' + esc(a.name) + ' <span>' + a.key + (a.passive ? ' · ' + T.passive : a.key === 'R' ? ' · ' + T.ult : '') + '</span></p><p class="ab-text">' + esc(a.desc) + '</p>';
  }
  function showHero(k) {
    var h = HEROES[k]; if (!h) return; cur = k; var x = tx(h);
    var big = bigScale(h);
    feat.innerHTML = '<div class="fh-stage">' + spr(h, big) + '</div><div class="fh-info"><p class="fh-role">' + esc(x.role) + '</p><h3 class="fh-name">' + esc(h.name) + '</h3><p class="fh-title">' + esc(x.title) + '</p>' +
      '<h4 class="fh-ab-h">' + esc(T.abil) + '</h4><ul class="abil">' + x.abil.map(function (a, i) {
        return '<li><button type="button" class="ab' + (i ? '' : ' on') + '" data-i="' + i + '" aria-pressed="' + (i ? 'false' : 'true') + '"><img src="' + BASE + 'media/abil/' + h.key + '_' + a.key + '.png" width="64" height="64" alt="' + esc(fmt(T.icon, { a: a.name, n: h.name })) + '" decoding="async"><span class="ab-key">' + a.key + '</span></button></li>';
      }).join('') + '</ul><div class="ab-desc">' + abDesc(x.abil[0]) + '</div></div>';
    $$('.hcard', grid).forEach(function (b) { var on = b.getAttribute('data-key') === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
  }
  if (grid) grid.addEventListener('click', function (ev) {
    var b = ev.target.closest('.hcard'); if (!b) return;
    var k = b.getAttribute('data-key');
    loadHeroes(function () { showHero(k); if (window.innerWidth < 1020) feat.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); });
  });
  if (feat) feat.addEventListener('click', function (ev) {
    var b = ev.target.closest('.ab'); if (!b) return;
    loadHeroes(function () {
      var a = tx(HEROES[cur]).abil[+b.getAttribute('data-i')];
      $$('.ab', feat).forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      $('.ab-desc', feat).innerHTML = abDesc(a);
    });
  });
  $$('.role').forEach(function (r) {
    r.addEventListener('click', function () {
      var role = r.getAttribute('data-role');
      $$('.role').forEach(function (x) { var on = x === r; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      var first = null;
      $$('li', grid).forEach(function (li) { var show = !role || li.getAttribute('data-role') === role; li.classList.toggle('off', !show); if (show && !first) first = li; });
      // si el destacado quedo fuera del filtro, se muestra el primero del rol
      var curLi = $('.hcard[data-key="' + cur + '"]', grid);
      if (role && first && curLi && curLi.parentNode.classList.contains('off')) loadHeroes(function () { showHero($('.hcard', first).getAttribute('data-key')); });
    });
  });

  // ---- app de Windows: version y tamaño de la ultima version (datos de la publicacion), guardado un rato
  var meta = $('#dlMeta');
  function showRel(r) {
    if (!r || !meta) return;
    var mb = r.size ? ' · ' + (r.size / 1048576).toFixed(0) + ' MB' : '';
    meta.textContent = T.version + ' ' + r.tag.replace(/^v/, '') + mb + ' · ' + meta.getAttribute('data-req');
  }
  if (meta) {
    meta.setAttribute('data-req', meta.textContent);
    var cached = null; try { cached = JSON.parse(sessionStorage.getItem('lanelings_rel') || 'null'); } catch (e) { /* nada */ }
    if (cached) showRel(cached);
    else if (window.fetch) fetch('https://api.github.com/repos/ivorojas/lanelings/releases/latest', { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || !j.tag_name) return;
        var a = (j.assets || []).filter(function (x) { return x.name === 'Lanelings-Setup.exe'; })[0];
        var rel = { tag: j.tag_name, size: a ? a.size : 0 };
        try { sessionStorage.setItem('lanelings_rel', JSON.stringify(rel)); } catch (e) { /* nada */ }
        showRel(rel);
      }).catch(function () { /* sin datos: queda el requisito */ });
  }

  // ---- redes (ocultas hasta tener link)
  var any = false;
  [['discord', '#lnkDiscord'], ['discord', '#heroDiscord'], ['discord', '#footDiscord'], ['tiktok', '#lnkTiktok'], ['tiktok', '#footTiktok']].forEach(function (p) {
    var el = $(p[1]); if (el && LINKS[p[0]]) { el.href = LINKS[p[0]]; el.hidden = false; any = true; }
  });
  if (any) { $('#comunidad').hidden = false; $$('.js-com').forEach(function (a) { a.hidden = false; }); }
})();
