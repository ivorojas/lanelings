const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CEU-5tam.js","./webworkerAll-Bloapk1J.js","./CanvasPool-D_WUmpVZ.js","./colorToUniform-C11GFyen.js","./bundler-f8xN-zuO.js","./App-Dcqx1kSr.js","./index-Bhn8FheW.js","./index-B-Ux4aE2.css","./WebGPURenderer-B8UhEoBs.js","./SharedSystems-CO-Os31o.js","./WebGLRenderer-BPY_3CyC.js"])))=>i.map(i=>d[i]);
import{S as w,w as P,q,M as N,r as y,u as Z,v as He,x as ep,T as Tu,y as np,z as rp,A as a1,B as g3,l as gd,p as er,b as x3,C as M3,D as b3,E as v3,F as w3,G as S3,j as dn,n as op,h as _3,s as A3,H as T3,I as K0,J as R3,g as co,t as Ol,K as C3,c as wn,L as P3,f as Ps,o as I3,Z as xd,N as O3,i as Is,O as ip,P as Nr,Q as z3,R as F3,d as wa,m as ap,V as sp,e as lp,U as s1,W as up,X as l1,Y as E3,_ as L3,$ as k3,a0 as Md,a as D3,a1 as U3,a2 as X3,a3 as G3}from"./App-Dcqx1kSr.js";import{_ as Ru}from"./index-Bhn8FheW.js";import{g as fp}from"./bundler-f8xN-zuO.js";const H={},Pe={},Qe={},Cu={},Qo={proj:(e,t,n,r,o,i)=>!1,hit:e=>!1,shoot:e=>!1,laser:e=>!1},Sa={},_a={},N3=performance.now(),Os=()=>Math.round((performance.now()-N3)/100)/10,hs=typeof window<"u"?window.lanelingsDesktop:null,xo=[],u1={},bd=e=>{let t=u1[e];return t===void 0&&(t=u1[e]=xo.length,xo.push(e)),t};let Yl=new Float64Array(64),Wc=new Float64Array(64),zs=new Float64Array(64);function rn(e){Wc[bd(e)]=performance.now()}function on(e){const t=bd(e),n=Wc[t];n&&(Yl[t]+=performance.now()-n,Wc[t]=0)}function cp(e,t){const n=bd(e);let r=0;return function(...o){const i=r++?0:performance.now();try{return t.apply(this,o)}finally{--r||(Yl[n]+=performance.now()-i)}}}const Pu=[],f1={};let qc=new Float64Array(48),Vc=new Float64Array(48),Iu=[],hp=[];function Ou(e,t=1,n){let r=f1[e];r===void 0&&(r=f1[e]=Pu.length,Pu.push(e)),qc[r]+=t,n&&Iu.length<12&&Iu.push(e+":"+n)}let cf={};function lr(e,t){cf[e]=t}const hf=900,dp=new Float32Array(hf),mp=new Float32Array(hf);let vl=0,zf=0,c1=0,zl=0,c0=0;const ds=[];let wl=0,zu=0,Yc=0,Kc=0,jc=0,Qc=0,Zc=0,Jc=[],j0=0,Fl=0,Fu=0,vd=0;const th=new Float64Array(64),da=[],El=[],Eu={};let Lu={},ku=0;function B3(e){Lu={...Lu,...e}}function Cn(e,t){El.push([Os(),e,String(t).slice(0,400)]),El.length>4e3&&El.splice(0,800),a0(["E",Os(),e,String(t).slice(0,400)])}function $3(e){const t=performance.now();if(zl=c1?Math.max(0,H3()):0,zs.set(Yl),Yl.fill(0),Vc.set(qc),qc.fill(0),hp=Iu,Iu=[],c1=t,!zf){zf=t;return}zf=t,dp[vl]=e,mp[vl]=zl,vl=(vl+1)%hf;const n=performance.memory;let r=0;if(n){const o=n.usedJSHeapSize;c0&&o<c0-4e6&&(r=Math.round((c0-o)/1e6)),c0=o}wl++,Zc+=zl,Jc.push(e);for(let o=0;o<xo.length;o++)th[o]+=zs[o];e>zu&&(zu=e),e>33&&Yc++,e>50&&Kc++,e>100&&jc++,e>50&&W3(e,r),t-j0>=1e3&&q3(t)}function H3(){let e=0;for(let t=0;t<xo.length;t++)xo[t].includes("/")||(e+=Yl[t]);return e}function W3(e,t){const n={};for(let i=0;i<xo.length;i++)zs[i]>=.5&&(n[xo[i]]=Math.round(zs[i]*10)/10);const r={};for(let i=0;i<Pu.length;i++)Vc[i]&&(r[Pu[i]]=Vc[i]);const o={t:Os(),ms:Math.round(e),work:Math.round(zl*10)/10,outside:Math.round(e-zl),parts:n,cnt:r,notes:hp.slice(0,12),gc:t,world:{...cf},vis:document.visibilityState,focus:document.hasFocus(),loaf:K3()};da.push(o),da.length>1500&&da.splice(0,300),Z0.push(o),Z0.length>20&&Z0.shift(),a0(["H",o])}function q3(e){const t=j0?(e-j0)/1e3:1,n=Jc.sort((s,l)=>s-l),r=n.length?n[Math.min(n.length-1,Math.floor(n.length*.95))]:0,o=performance.memory,i=[Os(),Math.round(wl/t),Math.round(zu),Yc,Kc,Math.round(Qc/t),Math.round(Fl),Math.round(r),Math.round(Zc/Math.max(1,wl)*10)/10,jc,o?Math.round(o.usedJSHeapSize/1e6):-1,Math.round(Fu)];ds.push(i),ds.length>3600&&ds.shift();const a={};for(let s=0;s<xo.length;s++){const l=th[s]/Math.max(1,wl);l>=.2&&(a[xo[s]]=Math.round(l*10)/10)}a0(["S",i,a,{...cf}]),th.fill(0),wl=0,zu=0,Yc=0,Kc=0,jc=0,Qc=0,Zc=0,Jc=[],j0=e}let Ff=0;function V3(){Qc++;const e=performance.now();if(Ff){const t=e-Ff;Fu=Fu*.9+Math.abs(t-33)*.1,t>250&&Cn("red",`foto tarde: ${Math.round(t)} ms sin fotos del anfitrion`)}Ff=e}function Y3(e){Fl=Fl?Fl*.8+e*.2:e}const Q0=[];function K3(){const e=performance.now();return Q0.filter(t=>e-(t.start+t.dur)<400).slice(-3)}try{new PerformanceObserver(t=>{for(const n of t.getEntries()){const r=(n.scripts||[]).slice(0,4).map(o=>({fn:o.sourceFunctionName||o.invoker||"",src:String(o.sourceURL||"").split("/").pop(),ms:Math.round(o.duration)}));Q0.push({start:n.startTime,dur:Math.round(n.duration),block:Math.round(n.blockingDuration||0),render:n.renderStart?Math.round(n.startTime+n.duration-n.renderStart):0,style:Math.round(n.styleAndLayoutStart?n.startTime+n.duration-n.styleAndLayoutStart:0),scripts:r}),Q0.length>80&&Q0.shift()}}).observe({type:"long-animation-frame",buffered:!1})}catch{}try{new PerformanceObserver(t=>{for(const n of t.getEntries())vd++,n.duration>120&&Cn("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}if(typeof window<"u"){document.addEventListener("visibilitychange",()=>Cn("ventana","pestaña "+document.visibilityState)),window.addEventListener("blur",()=>Cn("ventana","perdio el foco (alt-tab u otra ventana)")),window.addEventListener("focus",()=>Cn("ventana","volvio el foco")),window.addEventListener("resize",()=>Cn("ventana",`tamaño ${innerWidth}x${innerHeight}`)),document.addEventListener("fullscreenchange",()=>Cn("ventana",document.fullscreenElement?"pantalla completa":"salio de pantalla completa")),window.addEventListener("error",t=>Cn("error",(t.message||"")+" @"+String(t.filename||"").split("/").pop()+":"+t.lineno)),window.addEventListener("unhandledrejection",t=>Cn("error","promesa: "+String(t.reason&&(t.reason.stack||t.reason.message)||t.reason).slice(0,300)));const e=t=>{t.__telw||(t.__telw=1,t.addEventListener("webglcontextlost",()=>Cn("gpu","se perdio el contexto WebGL ("+(t.id||t.className||"canvas")+")")),t.addEventListener("webglcontextrestored",()=>Cn("gpu","se recupero el contexto WebGL")))};setInterval(()=>{document.querySelectorAll("canvas").forEach(t=>e(t))},3e3)}async function j3(){const e=navigator,t={browser:navigator.userAgent,cores:e.hardwareConcurrency,memGB:e.deviceMemory,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,window:`${innerWidth}x${innerHeight}`,lang:navigator.language};t.hz=await new Promise(n=>{const r=[],o=i=>{if(r.push(i),r.length<40)requestAnimationFrame(o);else{const a=r.slice(1).map((s,l)=>s-r[l]).sort((s,l)=>s-l);n(Math.round(1e3/a[Math.floor(a.length/2)]))}};requestAnimationFrame(o)});try{if(e.getBattery){const n=await e.getBattery();t.battery={charging:n.charging,level:Math.round(n.level*100)}}}catch{}try{hs&&hs.sysInfo&&(t.desktop=await hs.sysInfo())}catch{}return t}let Du=null;j3().then(e=>{Du=e,a0(["SYS",e])}).catch(()=>{});let Z0=[];function Q3(){const e=ds.slice(-5);if(!e.length)return null;const t=r=>Math.round(e.reduce((o,i)=>o+i[r],0)/e.length),n={fps:t(1),worst:Math.max(...e.map(r=>r[2])),slow:e.reduce((r,o)=>r+o[3],0),snaps:t(5),ping:t(6),p95:t(7),mem:t(10),jit:t(11),lt:vd,err:El.filter(r=>r[1]==="error").length,sys:h1?void 0:Du,hitches:Z0.splice(0).map(r=>({t:r.t,ms:r.ms,work:r.work,outside:r.outside,parts:r.parts,cnt:r.cnt,gc:r.gc,loaf:r.loaf.slice(0,1)}))};return Du&&(h1=!0),n}let h1=!1;function Z3(e,t){const n=Eu[e]=Eu[e]||{sys:null,rows:[],hitches:[]};if(t.sys&&(n.sys=t.sys),t.hitches){for(const a of t.hitches)n.hitches.push(a);n.hitches.length>600&&n.hitches.splice(0,100)}const{hitches:r,sys:o,...i}=t;n.rows.push([Os(),i]),n.rows.length>800&&n.rows.shift(),a0(["P",e,i,t.hitches||[],t.sys||null])}let ms=[];function a0(e){ms.push(e),ms.length>2e4&&ms.splice(0,5e3)}const Ll=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+"_"+Math.floor(Math.random()*1e4);let Ef=null;function J3(){return Ef||(Ef=new Promise(e=>{try{const t=indexedDB.open("lanelings_logs",1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains("chunks")||n.createObjectStore("chunks",{autoIncrement:!0}).createIndex("match","match")},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null)}catch{e(null)}})),Ef}let ka=!1;function J0(){if(ka||!ms.length)return;ka=!0;const e=ms.splice(0,ms.length),t={id:Ll,...Lu},n=e.map(r=>JSON.stringify(r)).join(`
`)+`
`;try{hs&&hs.appendLog&&hs.appendLog(Ll,n,t)}catch{}J3().then(r=>{if(!r){ka=!1;return}try{const o=r.transaction("chunks","readwrite");o.objectStore("chunks").add({match:Ll,t:Date.now(),head:t,lines:n}),o.oncomplete=()=>{ka=!1,t5(r)},o.onerror=()=>{ka=!1}}catch{ka=!1}})}let d1=!1;function t5(e){if(!d1){d1=!0;try{const t=e.transaction("chunks","readwrite").objectStore("chunks"),n=new Set,r=[];t.openCursor().onsuccess=o=>{const i=o.target.result;if(i){r.push([i.key,i.value.match]),n.add(i.value.match),i.continue();return}const a=new Set([...n].sort().slice(-12));for(const[s,l]of r)a.has(l)||t.delete(s)}}catch{}}}const e5=e=>window.requestIdleCallback?window.requestIdleCallback(e,{timeout:4e3}):setTimeout(e,50);typeof window<"u"&&(setInterval(()=>e5(J0),12e3),window.addEventListener("pagehide",J0),window.addEventListener("beforeunload",J0));function m1(){ku++,Cn("marca",'el jugador marco "aca se trabo" (#'+ku+")")}function n5(){return{gap:dp,work:mp,pos:vl,ring:hf,secs:ds.slice(-1)[0]||null,ping:Fl,jitter:Fu,hitches:da.length,last:da.slice(-1)[0]||null,gauges:cf,marks:ku,parts:(()=>{const e=[];for(let t=0;t<xo.length;t++)zs[t]>=.3&&e.push([xo[t],zs[t]]);return e.sort((t,n)=>n[1]-t[1]).slice(0,10)})()}}function r5(){const e={...Lu,id:Ll,sys:Du,durationS:Os(),longTasks:vd,hitchCount:da.length,marks:ku},t=["LANELINGS LOG v2",JSON.stringify(e),"","# por segundo: t, fps, peor ms, cuadros>33, >50, fotos/s, ping, p95 ms, trabajo medio ms, >100, memoria MB, jitter"];for(const n of ds)t.push(n.join(","));t.push("",'# tirones (cuadro >50 ms): ms total, trabajo del juego, "outside" = esperando placa/navegador/Windows, partes, contadores, gc MB, mundo, navegador');for(const n of da)t.push(JSON.stringify(n));t.push("","# eventos: t, tipo, texto");for(const n of El)t.push(n.join(" | "));for(const n in Eu){const r=Eu[n];t.push("","# invitado "+n+" — sistema: "+JSON.stringify(r.sys));for(const[o,i]of r.rows)t.push(o+" "+JSON.stringify(i));t.push("# tirones del invitado "+n);for(const o of r.hitches)t.push(JSON.stringify(o))}return t.join(`
`)}function o5(){J0();const e=r5(),t="lanelings-log-"+Ll+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}var un=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(un||{});const eh=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},h0=(e,t)=>eh(e).priority??t,Xi={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(eh).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(eh).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,a)=>h0(a.value,n)-h0(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>h0(i,n)-h0(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},i5={extension:{type:un.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Ru(()=>import("./browserAll-CEU-5tam.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},a5={extension:{type:un.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Ru(()=>import("./webworkerAll-Bloapk1J.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class En{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new En(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var Lf={exports:{}},p1;function s5(){return p1||(p1=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||l,h),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)t.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,m=new Array(d);h<d;h++)m[h]=c[h].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(u,f,c,h,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var g=this._events[p],x=arguments.length,b,M;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,h),!0;case 5:return g.fn.call(g.context,f,c,h,d),!0;case 6:return g.fn.call(g.context,f,c,h,d,m),!0}for(M=1,b=new Array(x-1);M<x;M++)b[M-1]=arguments[M];g.fn.apply(g.context,b)}else{var v=g.length,S;for(M=0;M<v;M++)switch(g[M].once&&this.removeListener(u,g[M].fn,void 0,!0),x){case 1:g[M].fn.call(g[M].context);break;case 2:g[M].fn.call(g[M].context,f);break;case 3:g[M].fn.call(g[M].context,f,c);break;case 4:g[M].fn.call(g[M].context,f,c,h);break;default:if(!b)for(S=1,b=new Array(x-1);S<x;S++)b[S-1]=arguments[S];g[M].fn.apply(g[M].context,b)}}return!0},s.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},s.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},s.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var p=0,g=[],x=m.length;p<x;p++)(m[p].fn!==f||h&&!m[p].once||c&&m[p].context!==c)&&g.push(m[p]);g.length?this._events[d]=g.length===1?g[0]:g:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(Lf)),Lf.exports}var l5=s5();const Gi=fp(l5),u5=Math.PI*2,f5=180/Math.PI,Fs=Math.PI/180;class Po{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new Po(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return kf.x=0,kf.y=0,kf}}const kf=new Po;class tn{constructor(t=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,a){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new Po;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new Po;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=t.x,c=t.y;return n.x=a*u*f+-i*u*c+(l*i-s*a)*u,n.y=r*u*c+-o*u*f+(-l*r+s*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*u+o*c,this.b=r*f+o*h,this.c=i*u+a*c,this.d=i*f+a*h,this.tx=s*u+l*c+n.tx,this.ty=s*f+l*h+n.ty,this}setTransform(t,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(u5-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(a.x*n+a.y*o),t.position.y=this.ty+(a.x*r+a.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=t*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=t/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new tn;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return h5.identity()}static get shared(){return c5.identity()}}const c5=new tn,h5=new tn,Ki=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ji=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Qi=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Zi=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],nh=[],pp=[],d0=Math.sign;function d5(){for(let e=0;e<16;e++){const t=[];nh.push(t);for(let n=0;n<16;n++){const r=d0(Ki[e]*Ki[n]+Qi[e]*ji[n]),o=d0(ji[e]*Ki[n]+Zi[e]*ji[n]),i=d0(Ki[e]*Qi[n]+Qi[e]*Zi[n]),a=d0(ji[e]*Qi[n]+Zi[e]*Zi[n]);for(let s=0;s<16;s++)if(Ki[s]===r&&ji[s]===o&&Qi[s]===i&&Zi[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new tn;t.set(Ki[e],ji[e],Qi[e],Zi[e],0,0),pp.push(t)}}d5();const nn={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Ki[e],uY:e=>ji[e],vX:e=>Qi[e],vY:e=>Zi[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>nh[e][t],sub:(e,t)=>nh[e][nn.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?nn.S:nn.N:Math.abs(t)*2<=Math.abs(e)?e>0?nn.E:nn.W:t>0?e>0?nn.SE:nn.SW:e>0?nn.NE:nn.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=pp[nn.inv(t)];o.tx=n,o.ty=r,e.append(o)}},m0=[new Po,new Po,new Po,new Po];class fr{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new fr(0,0,0,0)}clone(){return new fr(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,c=s-u,h=s+i+u,d=l-u,m=l+a+u,p=s+f,g=s+i-f,x=l+f,b=l+a-f;return t>=c&&t<=h&&n>=d&&n<=m&&!(t>p&&t<g&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const O=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>O}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=m0[0].set(t.left,t.top),l=m0[1].set(t.left,t.bottom),u=m0[2].set(t.right,t.top),f=m0[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const h=c*(l.y-s.y),d=c*(s.x-l.x),m=h*r+d*i,p=h*o+d*i,g=h*r+d*a,x=h*o+d*a;if(Math.max(m,p,g,x)<=h*s.x+d*s.y||Math.min(m,p,g,x)>=h*f.x+d*f.y)return!1;const b=c*(s.y-u.y),M=c*(u.x-s.x),v=b*r+M*i,S=b*o+M*i,_=b*r+M*a,T=b*o+M*a;return!(Math.max(v,S,_,T)<=b*s.x+M*s.y||Math.min(v,S,_,T)>=b*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new fr),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Df={default:-1};function cr(e="default"){return Df[e]===void 0&&(Df[e]=-1),++Df[e]}const y1={},pr="8.0.0",lR="8.3.4";function Zt(e,t,n=3){if(y1[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),y1[t]=!0}const yp=()=>{};function g1(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function x1(e){return!(e&e-1)&&!!e}function m5(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const M1=Object.create(null);function p5(e){const t=M1[e];return t===void 0&&(M1[e]=cr("resource")),t}const gp=class xp extends Gi{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...xp.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Zt(pr,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=p5(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};gp.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let y5=gp;const Mp=class bp extends Gi{constructor(t={}){super(),this.options=t,this.uid=cr("textureSource"),this._resourceType="textureSource",this._resourceId=cr("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...bp.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new y5(m5(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=cr("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=cr("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=x1(this.pixelWidth)&&x1(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Mp.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let yr=Mp;class wd extends yr{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}wd.extension=un.TextureSource;const b1=new tn;class g5{constructor(t,n){this.mapCoord=new tn,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],a=t[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(b1.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(b1));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class Xt extends Gi{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=cr("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new fr,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new yr,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new g5(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,c=l/2,h=i+f,d=a+c;u=nn.add(u,nn.NW),t.x0=h+f*nn.uX(u),t.y0=d+c*nn.uY(u),u=nn.add(u,2),t.x1=h+f*nn.uX(u),t.y1=d+c*nn.uY(u),u=nn.add(u,2),t.x2=h+f*nn.uX(u),t.y2=d+c*nn.uY(u),u=nn.add(u,2),t.x3=h+f*nn.uX(u),t.y3=d+c*nn.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Zt(pr,"Texture.baseTexture is now Texture.source"),this._source}}Xt.EMPTY=new Xt({label:"EMPTY",source:new yr({label:"EMPTY"})});Xt.EMPTY.destroy=yp;Xt.WHITE=new Xt({source:new wd({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Xt.WHITE.destroy=yp;function x5(e,t,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*o-r,e.maxX=e.minX+s,e.minY=a.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const v1=new tn;class Li{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=v1,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new fr);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=v1,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,m=this.maxX,p=this.maxY,g=a*t+l*n+f,x=s*t+u*n+c;g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*r+l*n+f,x=s*r+u*n+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*t+l*o+f,x=s*t+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*r+l*o+f,x=s*r+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),this.minX=h,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:c}=t;let h=a*n+l*r+f,d=s*n+u*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=a*o+l*r+f,d=s*o+u*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*n+l*i+f,d=s*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*o+l*i+f,d=s*o+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Li(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const g=t[p],x=t[p+1],b=u*g+c*x+d,M=f*g+h*x+m;i=b<i?b:i,a=M<a?M:a,s=b>s?b:s,l=M>l?M:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var M5={grad:.9,turn:360,rad:360/(2*Math.PI)},Uo=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Gn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Qr=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},vp=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},w1=function(e){return{r:Qr(e.r,0,255),g:Qr(e.g,0,255),b:Qr(e.b,0,255),a:Qr(e.a)}},Uf=function(e){return{r:Gn(e.r),g:Gn(e.g),b:Gn(e.b),a:Gn(e.a,3)}},b5=/^#([0-9a-f]{3,8})$/i,p0=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},wp=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),a=i-Math.min(t,n,r),s=a?i===t?(n-r)/a:i===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},Sp=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),a=r*(1-n),s=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},S1=function(e){return{h:vp(e.h),s:Qr(e.s,0,100),l:Qr(e.l,0,100),a:Qr(e.a)}},_1=function(e){return{h:Gn(e.h),s:Gn(e.s),l:Gn(e.l),a:Gn(e.a,3)}},A1=function(e){return Sp((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},kl=function(e){return{h:(t=wp(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},v5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,w5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,S5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,rh={string:[[function(e){var t=b5.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Gn(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Gn(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=S5.exec(e)||_5.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:w1({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=v5.exec(e)||w5.exec(e);if(!t)return null;var n,r,o=S1({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(M5[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return A1(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return Uo(t)&&Uo(n)&&Uo(r)?w1({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!Uo(t)||!Uo(n)||!Uo(r))return null;var a=S1({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return A1(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!Uo(t)||!Uo(n)||!Uo(r))return null;var a=function(s){return{h:vp(s.h),s:Qr(s.s,0,100),v:Qr(s.v,0,100),a:Qr(s.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Sp(a)},"hsv"]]},T1=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},A5=function(e){return typeof e=="string"?T1(e.trim(),rh.string):typeof e=="object"&&e!==null?T1(e,rh.object):[null,void 0]},Xf=function(e,t){var n=kl(e);return{h:n.h,s:Qr(n.s+100*t,0,100),l:n.l,a:n.a}},Gf=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},R1=function(e,t){var n=kl(e);return{h:n.h,s:n.s,l:Qr(n.l+100*t,0,100),a:n.a}},oh=function(){function e(t){this.parsed=A5(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Gn(Gf(this.rgba),2)},e.prototype.isDark=function(){return Gf(this.rgba)<.5},e.prototype.isLight=function(){return Gf(this.rgba)>=.5},e.prototype.toHex=function(){return t=Uf(this.rgba),n=t.r,r=t.g,o=t.b,a=(i=t.a)<1?p0(Gn(255*i)):"","#"+p0(n)+p0(r)+p0(o)+a;var t,n,r,o,i,a},e.prototype.toRgb=function(){return Uf(this.rgba)},e.prototype.toRgbString=function(){return t=Uf(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return _1(kl(this.rgba))},e.prototype.toHslString=function(){return t=_1(kl(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=wp(this.rgba),{h:Gn(t.h),s:Gn(t.s),v:Gn(t.v),a:Gn(t.a,3)};var t},e.prototype.invert=function(){return bo({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),bo(Xf(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),bo(Xf(this.rgba,-t))},e.prototype.grayscale=function(){return bo(Xf(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),bo(R1(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),bo(R1(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?bo({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Gn(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=kl(this.rgba);return typeof t=="number"?bo({h:t,s:n.s,l:n.l,a:n.a}):Gn(n.h)},e.prototype.isEqual=function(t){return this.toHex()===bo(t).toHex()},e}(),bo=function(e){return e instanceof oh?e:new oh(e)},C1=[],T5=function(e){e.forEach(function(t){C1.indexOf(t)<0&&(t(oh,rh),C1.push(t))})};function R5(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));p<c&&(c=p,h=m)}return h}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}T5([R5]);const Es=class Sl{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Sl)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=Sl._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=Sl.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=bo(t);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Sl||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Es.shared=new Es;Es._temp=new Es;Es.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Un=Es;const C5={cullArea:null,cullable:!1,cullableChildren:!0};class Sd{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class P5{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Sd(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Uu=new P5,I5={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Zt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function O5(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const z5={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}O5(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Zt(pr,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class P1{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class F5{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return Uu.get(r.maskClass,t)}return t}returnMaskEffect(t){Uu.return(t)}}const ih=new F5;Xi.handleByList(un.MaskEffect,ih._effectClasses);const E5={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),ih.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=ih.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new P1);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new P1),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},L5={label:null,get name(){return Zt(pr,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Zt(pr,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},hr=new Sd(tn),Ls=new Sd(Li);function _p(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=hr.get().identity(),r=_d(e,o)):r=tn.IDENTITY,Ap(e,n,r,t),o&&hr.return(o),n.isValid||n.set(0,0,0,0),n}function Ap(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=hr.get(),o.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=Ls.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)Ap(e.children[s],t,o,r)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,tn.IDENTITY),Ls.return(t)}r||hr.return(o)}function _d(e,t){const n=e.parent;return n&&(_d(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function k5(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const I1=16777215;function O1(e,t){return e===I1?t:t===I1?e:k5(e,t)}function tu(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const D5={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=_d(this,hr.get().identity());return e.appendFrom(this.localTransform,n),hr.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?tu(this.renderGroup.worldColor):this.parentRenderGroup?tu(O1(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=O1(t,n.localColor),n=n.parent;return tu(t)}};let Nf=0;const z1=500;function ri(...e){Nf!==z1&&(Nf++,Nf===z1?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function Tp(e,t,n){return t.clear(),n||(n=tn.IDENTITY),Rp(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function Rp(e,t,n,r,o){let i;if(o)i=hr.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=hr.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=Ls.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)Rp(l[u],t,i,r,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);a.addBounds(t,tn.IDENTITY),Ls.return(t)}hr.return(i)}function Cp(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,o.children.length&&Cp(o,t)}return t.didChange}const U5=new tn,X5={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Li});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),Cp(this,e),e.didChange&&Tp(this,e.localBounds,U5),e.localBounds},getBounds(e,t){return _p(this,e,t||new Li)}},G5={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},N5={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(B5))}};function B5(e,t){return e._zIndex-t._zIndex}const $5={getGlobalPosition(e=new Po,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(hr.get(),n);return t=r.apply(e,t),hr.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(hr.get(),r);return n=o.applyInverse(e,n),hr.return(o),n}};class H5{constructor(){this.uid=cr("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let W5=0;class q5{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new yr({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new Xt({source:o,label:`texturePool_${W5++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),a=Math.ceil(n*r-1e-6);i=g1(i),a=g1(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const Er=new q5;class V5{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new tn,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new H5,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Er.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new tn),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new tn),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new tn),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Y5(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const Bf=new En(null),$f=new En(null),Hf=new En(null,1,1),F1=1,K5=2,Wf=4;class ze extends Gi{constructor(t={}){super(),this.uid=cr("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new tn,this.relativeGroupTransform=new tn,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new En(this,0,0),this._scale=Hf,this._pivot=$f,this._skew=Bf,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Y5(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(ze.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Zt(pr,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Uu.get(V5,this),this.groupTransform=tn.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Uu.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new tn),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*f5}set angle(t){this.rotation=t*Fs}get pivot(){return this._pivot===$f&&(this._pivot=new En(this,0,0)),this._pivot}set pivot(t){this._pivot===$f&&(this._pivot=new En(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Bf&&(this._skew=new En(this,0,0)),this._skew}set skew(t){this._skew===Bf&&(this._skew=new En(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Hf&&(this._scale=new En(this,1,1)),this._scale}set scale(t){this._scale===Hf&&(this._scale=new En(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=F1,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=Un.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=F1,this._onUpdate())}get tint(){return tu(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=K5,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Wf,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Wf,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Wf,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}ze.mixin(z5);ze.mixin($5);ze.mixin(G5);ze.mixin(X5);ze.mixin(E5);ze.mixin(L5);ze.mixin(N5);ze.mixin(C5);ze.mixin(I5);ze.mixin(D5);class Ad extends ze{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Li(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class pn extends Ad{constructor(t=Xt.EMPTY){t instanceof Xt&&(t={texture:t});const{texture:n=Xt.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new En({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof Xt?new pn(t):new pn(Xt.from(t,n))}set texture(t){t||(t=Xt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return x5(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Zt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const j5=new Li;function Pp(e,t,n){const r=j5;e.measurable=!0,_p(e,n,r),t.addBoundsMask(r),e.measurable=!1}function Ip(e,t,n){const r=Ls.get();e.measurable=!0;const o=hr.get().identity(),i=Op(e,n,o);Tp(e,r,i),e.measurable=!1,t.addBoundsMask(r),hr.return(o),Ls.return(r)}function Op(e,t,n){return e?(e!==t&&(Op(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(ri("Mask bounds, renderable is not inside the root container"),n)}class zp{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof pn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||Pp(this.mask,t,n)}addLocalBounds(t,n){Ip(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof pn}}zp.extension=un.MaskEffect;class Fp{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Fp.extension=un.MaskEffect;class Ep{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){Pp(this.mask,t,n)}addLocalBounds(t,n){Ip(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof ze}}Ep.extension=un.MaskEffect;const Q5={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let E1=Q5;const ki={get(){return E1},set(e){E1=e}};class Td extends yr{constructor(t){t.resource||(t.resource=ki.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Td.extension=un.TextureSource;class Rd extends yr{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=ki.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,ri("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Rd.extension=un.TextureSource;var ah=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(ah||{});class qf{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const Lp=class Pr{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new qf(null,null,1/0),this.deltaMS=1/Pr.targetFPMS,this.elapsedMS=1/Pr.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=ah.NORMAL){return this._addListener(new qf(t,n,r))}addOnce(t,n,r=ah.NORMAL){return this._addListener(new qf(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Pr.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,Pr.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Pr._shared){const t=Pr._shared=new Pr;t.autoStart=!0,t._protected=!0}return Pr._shared}static get system(){if(!Pr._system){const t=Pr._system=new Pr;t.autoStart=!0,t._protected=!0}return Pr._system}};Lp.targetFPMS=.06;let y0=Lp,Vf;async function Z5(){return Vf??(Vf=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Vf}const df=class kp extends yr{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...kp.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=y0.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Z5(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(y0.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(y0.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(y0.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};df.extension=un.TextureSource;df.defaultOptions={...yr.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};df.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let J5=df;const qa=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class tM{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||ri(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=qa(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&ri("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){ri(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const na=new tM,sh=[];Xi.handleByList(un.TextureSource,sh);function Dp(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<sh.length;o++){const i=sh[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function eM(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&na.has(r))return na.get(r);const i=new Xt({source:Dp(o)});return i.on("destroy",()=>{na.has(r)&&na.remove(r)}),t||na.set(r,i),i}function nM(e,t=!1){return typeof e=="string"?na.get(e):e instanceof yr?new Xt({source:e}):eM(e,t)}Xt.from=nM;yr.from=Dp;Xi.add(zp,Fp,Ep,J5,Rd,Td,wd);var Up=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(Up||{});function ao(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function nl(e){return e.split("?")[0].split("#")[0]}function rM(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oM(e,t,n){return e.replace(new RegExp(rM(t),"g"),n)}function iM(e,t){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const Kl={toPosix(e){return oM(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){ao(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(ao(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=nl(this.toPosix(t??ki.get().getBaseUrl())),o=nl(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?Kl.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(ao(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=iM(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return ao(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(ao(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(ao(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){ao(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){ao(e),t&&ao(t),e=nl(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){ao(e),e=nl(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){ao(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=nl(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Xp(e,t,n,r,o){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?Xp(e.replace(r[n],s),t,n+1,r,o):o.push(e.replace(r[n],s))}}function aM(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),Xp(e,o,0,n,r)}else r.push(e);return r}const L1=e=>!Array.isArray(e);class Gp{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return qa(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&ri("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&ri(`[Resolver] already has key: ${i} overwriting`)},qa(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=qa(a).map(d=>typeof d=="string"?aM(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){p=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:c,data:s,format:l,loadParser:u}),h.push(p)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=L1(t);t=qa(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=L1(t);t=qa(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=Kl.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??sM(t.src),t}}Gp.RETINA_PREFIX=/@([0-9\.]+)x/;function sM(e){return e.split(".").pop().split("?").shift().split("#").shift()}const k1=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},Np=class _l{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof Xt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=_l.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=_l.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new fr(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new fr(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new fr(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new fr(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new Xt({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*_l.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*_l.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Np.BATCH_SIZE=1e3;let D1=Np;const lM=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Bp(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=Kl.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=Bp([`${o}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const uM={extension:un.Asset,cache:{test:e=>e instanceof D1,getCacheableAssets:(e,t)=>Bp(e,t,!1)},resolver:{extension:{type:un.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&lM.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(Gp.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:un.LoadParser,priority:Up.Normal,name:"spritesheetLoader"},async testParse(e,t){return Kl.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=Kl.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof Xt)a=r;else{const u=k1(i+(o??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new D1(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;t.data?.ignoreMultiPack||(h=k1(h,t.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Xi.add(uM);const Yf=Object.create(null),U1=Object.create(null);function Cd(e,t){let n=U1[e];return n===void 0&&(Yf[t]===void 0&&(Yf[t]=1),U1[e]=n=Yf[t]++),n}let g0;function fM(){return(!g0||g0?.isContextLost())&&(g0=ki.get().createCanvas().getContext("webgl",{})),g0}let x0;function cM(){if(!x0){x0="mediump";const e=fM();e&&e.getShaderPrecisionFormat&&(x0=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return x0}function hM(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${e}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${e}
        `}function dM(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function mM(e,t){return t?`#version 300 es
${e}`:e}const pM={},yM={};function gM(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?pM:yM;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function xM(e,t){return t?e.replace("#version 300 es",""):e}const Kf={stripVersion:xM,ensurePrecision:dM,addProgramDefines:hM,setProgramName:gM,insertVersion:mM},jf=Object.create(null),$p=class lh{constructor(t){t={...lh.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:cM()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(Kf).forEach(a=>{const s=r[a];o=Kf[a](o,s,!0),i=Kf[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=Cd(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return jf[n]||(jf[n]=new lh(t)),jf[n]}};$p.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let fe=$p;const X1={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function MM(e){return X1[e]??X1.float32}const bM={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function vM({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=bM[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:MM(l).stride,offset:0,instance:!1,start:0}}}}return n}function Qf(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(c=>{const h=c.match(l)[1],d=c.match(s).reduce((m,p)=>{const[g,x]=p.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var Al=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Al||{});function wM({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Al.VERTEX|Al.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Al.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Al.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function SM({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function _M(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const Zf=Object.create(null);class ae{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=Qf(n.source);this.structsAndGroups=s}else{const s=Qf(r.source),l=Qf(n.source);this.structsAndGroups=_M(s,l)}this.layout=o??SM(this.structsAndGroups),this.gpuLayout=i??wM(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Cd(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=vM(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Zf[n]||(Zf[n]=new ae(t)),Zf[n]}}const Hp=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],AM=Hp.reduce((e,t)=>(e[t]=!0,e),{});function TM(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Wp=class qp{constructor(t,n){this._touched=0,this.uid=cr("uniform"),this._resourceType="uniformGroup",this._resourceId=cr("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...qp.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!AM[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Hp.join(", ")}`);i.value??(i.value=TM(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Cd(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Wp.defaultOptions={ubo:!1,isStatic:!1};let mf=Wp;class Jf{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var Xu=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(Xu||{});class pf extends Gi{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=Xu.WEBGPU),r&&(a|=Xu.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const c=s[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new Jf,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new mf(h));const d=l[c];d&&(o[d.group]||(o[d.group]=new Jf,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new Jf,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=ae.from(n)),r&&(a=fe.from(r)),new pf({gpuProgram:i,glProgram:a,...o})}}const RM={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},tc=0,ec=1,nc=2,rc=3,oc=4,ic=5,uh=class Vp{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<tc)}set blend(t){!!(this.data&1<<tc)!==t&&(this.data^=1<<tc)}get offsets(){return!!(this.data&1<<ec)}set offsets(t){!!(this.data&1<<ec)!==t&&(this.data^=1<<ec)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<nc)}set culling(t){!!(this.data&1<<nc)!==t&&(this.data^=1<<nc)}get depthTest(){return!!(this.data&1<<rc)}set depthTest(t){!!(this.data&1<<rc)!==t&&(this.data^=1<<rc)}get depthMask(){return!!(this.data&1<<ic)}set depthMask(t){!!(this.data&1<<ic)!==t&&(this.data^=1<<ic)}get clockwiseFrontFace(){return!!(this.data&1<<oc)}set clockwiseFrontFace(t){!!(this.data&1<<oc)!==t&&(this.data^=1<<oc)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=RM[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Vp;return t.depthTest=!1,t.blend=!0,t}};uh.default2d=uh.for2d();let Yp=uh;const Kp=class fh extends pf{constructor(t){t={...fh.defaultOptions,...t},super(t),this.enabled=!0,this._state=Yp.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=ae.from(n)),r&&(a=fe.from(r)),new fh({gpuProgram:i,glProgram:a,...o})}};Kp.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ge=Kp;const ch=[];Xi.handleByNamedList(un.Environment,ch);async function CM(e){if(!e)for(let t=0;t<ch.length;t++){const n=ch[t];if(n.value.test()){await n.value.load();return}}}let rl;function PM(){if(typeof rl=="boolean")return rl;try{rl=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{rl=!1}return rl}var M0={exports:{}},G1;function IM(){if(G1)return M0.exports;G1=1,M0.exports=e,M0.exports.default=e;function e(L,k,D){D=D||2;var $=k&&k.length,W=$?k[0]*D:L.length,tt=t(L,0,W,D,!0),rt=[];if(!tt||tt.next===tt.prev)return rt;var yt,Wt,Bt,We,Ie,te,Rn;if($&&(tt=l(L,k,tt,D)),L.length>80*D){yt=Bt=L[0],Wt=We=L[1];for(var Ce=D;Ce<W;Ce+=D)Ie=L[Ce],te=L[Ce+1],Ie<yt&&(yt=Ie),te<Wt&&(Wt=te),Ie>Bt&&(Bt=Ie),te>We&&(We=te);Rn=Math.max(Bt-yt,We-Wt),Rn=Rn!==0?32767/Rn:0}return r(tt,rt,D,yt,Wt,Rn,0),rt}function t(L,k,D,$,W){var tt,rt;if(W===K(L,k,D,$)>0)for(tt=k;tt<D;tt+=$)rt=E(tt,L[tt],L[tt+1],rt);else for(tt=D-$;tt>=k;tt-=$)rt=E(tt,L[tt],L[tt+1],rt);return rt&&v(rt,rt.next)&&(U(rt),rt=rt.next),rt}function n(L,k){if(!L)return L;k||(k=L);var D=L,$;do if($=!1,!D.steiner&&(v(D,D.next)||M(D.prev,D,D.next)===0)){if(U(D),D=k=D.prev,D===D.next)break;$=!0}else D=D.next;while($||D!==k);return k}function r(L,k,D,$,W,tt,rt){if(L){!rt&&tt&&d(L,$,W,tt);for(var yt=L,Wt,Bt;L.prev!==L.next;){if(Wt=L.prev,Bt=L.next,tt?i(L,$,W,tt):o(L)){k.push(Wt.i/D|0),k.push(L.i/D|0),k.push(Bt.i/D|0),U(L),L=Bt.next,yt=Bt.next;continue}if(L=Bt,L===yt){rt?rt===1?(L=a(n(L),k,D),r(L,k,D,$,W,tt,2)):rt===2&&s(L,k,D,$,W,tt):r(n(L),k,D,$,W,tt,1);break}}}}function o(L){var k=L.prev,D=L,$=L.next;if(M(k,D,$)>=0)return!1;for(var W=k.x,tt=D.x,rt=$.x,yt=k.y,Wt=D.y,Bt=$.y,We=W<tt?W<rt?W:rt:tt<rt?tt:rt,Ie=yt<Wt?yt<Bt?yt:Bt:Wt<Bt?Wt:Bt,te=W>tt?W>rt?W:rt:tt>rt?tt:rt,Rn=yt>Wt?yt>Bt?yt:Bt:Wt>Bt?Wt:Bt,Ce=$.next;Ce!==k;){if(Ce.x>=We&&Ce.x<=te&&Ce.y>=Ie&&Ce.y<=Rn&&x(W,yt,tt,Wt,rt,Bt,Ce.x,Ce.y)&&M(Ce.prev,Ce,Ce.next)>=0)return!1;Ce=Ce.next}return!0}function i(L,k,D,$){var W=L.prev,tt=L,rt=L.next;if(M(W,tt,rt)>=0)return!1;for(var yt=W.x,Wt=tt.x,Bt=rt.x,We=W.y,Ie=tt.y,te=rt.y,Rn=yt<Wt?yt<Bt?yt:Bt:Wt<Bt?Wt:Bt,Ce=We<Ie?We<te?We:te:Ie<te?Ie:te,gi=yt>Wt?yt>Bt?yt:Bt:Wt>Bt?Wt:Bt,el=We>Ie?We>te?We:te:Ie>te?Ie:te,o1=p(Rn,Ce,k,D,$),i1=p(gi,el,k,D,$),we=L.prevZ,Se=L.nextZ;we&&we.z>=o1&&Se&&Se.z<=i1;){if(we.x>=Rn&&we.x<=gi&&we.y>=Ce&&we.y<=el&&we!==W&&we!==rt&&x(yt,We,Wt,Ie,Bt,te,we.x,we.y)&&M(we.prev,we,we.next)>=0||(we=we.prevZ,Se.x>=Rn&&Se.x<=gi&&Se.y>=Ce&&Se.y<=el&&Se!==W&&Se!==rt&&x(yt,We,Wt,Ie,Bt,te,Se.x,Se.y)&&M(Se.prev,Se,Se.next)>=0))return!1;Se=Se.nextZ}for(;we&&we.z>=o1;){if(we.x>=Rn&&we.x<=gi&&we.y>=Ce&&we.y<=el&&we!==W&&we!==rt&&x(yt,We,Wt,Ie,Bt,te,we.x,we.y)&&M(we.prev,we,we.next)>=0)return!1;we=we.prevZ}for(;Se&&Se.z<=i1;){if(Se.x>=Rn&&Se.x<=gi&&Se.y>=Ce&&Se.y<=el&&Se!==W&&Se!==rt&&x(yt,We,Wt,Ie,Bt,te,Se.x,Se.y)&&M(Se.prev,Se,Se.next)>=0)return!1;Se=Se.nextZ}return!0}function a(L,k,D){var $=L;do{var W=$.prev,tt=$.next.next;!v(W,tt)&&S(W,$,$.next,tt)&&C(W,tt)&&C(tt,W)&&(k.push(W.i/D|0),k.push($.i/D|0),k.push(tt.i/D|0),U($),U($.next),$=L=tt),$=$.next}while($!==L);return n($)}function s(L,k,D,$,W,tt){var rt=L;do{for(var yt=rt.next.next;yt!==rt.prev;){if(rt.i!==yt.i&&b(rt,yt)){var Wt=z(rt,yt);rt=n(rt,rt.next),Wt=n(Wt,Wt.next),r(rt,k,D,$,W,tt,0),r(Wt,k,D,$,W,tt,0);return}yt=yt.next}rt=rt.next}while(rt!==L)}function l(L,k,D,$){var W=[],tt,rt,yt,Wt,Bt;for(tt=0,rt=k.length;tt<rt;tt++)yt=k[tt]*$,Wt=tt<rt-1?k[tt+1]*$:L.length,Bt=t(L,yt,Wt,$,!1),Bt===Bt.next&&(Bt.steiner=!0),W.push(g(Bt));for(W.sort(u),tt=0;tt<W.length;tt++)D=f(W[tt],D);return D}function u(L,k){return L.x-k.x}function f(L,k){var D=c(L,k);if(!D)return k;var $=z(D,L);return n($,$.next),n(D,D.next)}function c(L,k){var D=k,$=L.x,W=L.y,tt=-1/0,rt;do{if(W<=D.y&&W>=D.next.y&&D.next.y!==D.y){var yt=D.x+(W-D.y)*(D.next.x-D.x)/(D.next.y-D.y);if(yt<=$&&yt>tt&&(tt=yt,rt=D.x<D.next.x?D:D.next,yt===$))return rt}D=D.next}while(D!==k);if(!rt)return null;var Wt=rt,Bt=rt.x,We=rt.y,Ie=1/0,te;D=rt;do $>=D.x&&D.x>=Bt&&$!==D.x&&x(W<We?$:tt,W,Bt,We,W<We?tt:$,W,D.x,D.y)&&(te=Math.abs(W-D.y)/($-D.x),C(D,L)&&(te<Ie||te===Ie&&(D.x>rt.x||D.x===rt.x&&h(rt,D)))&&(rt=D,Ie=te)),D=D.next;while(D!==Wt);return rt}function h(L,k){return M(L.prev,L,k.prev)<0&&M(k.next,L,L.next)<0}function d(L,k,D,$){var W=L;do W.z===0&&(W.z=p(W.x,W.y,k,D,$)),W.prevZ=W.prev,W.nextZ=W.next,W=W.next;while(W!==L);W.prevZ.nextZ=null,W.prevZ=null,m(W)}function m(L){var k,D,$,W,tt,rt,yt,Wt,Bt=1;do{for(D=L,L=null,tt=null,rt=0;D;){for(rt++,$=D,yt=0,k=0;k<Bt&&(yt++,$=$.nextZ,!!$);k++);for(Wt=Bt;yt>0||Wt>0&&$;)yt!==0&&(Wt===0||!$||D.z<=$.z)?(W=D,D=D.nextZ,yt--):(W=$,$=$.nextZ,Wt--),tt?tt.nextZ=W:L=W,W.prevZ=tt,tt=W;D=$}tt.nextZ=null,Bt*=2}while(rt>1);return L}function p(L,k,D,$,W){return L=(L-D)*W|0,k=(k-$)*W|0,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,L|k<<1}function g(L){var k=L,D=L;do(k.x<D.x||k.x===D.x&&k.y<D.y)&&(D=k),k=k.next;while(k!==L);return D}function x(L,k,D,$,W,tt,rt,yt){return(W-rt)*(k-yt)>=(L-rt)*(tt-yt)&&(L-rt)*($-yt)>=(D-rt)*(k-yt)&&(D-rt)*(tt-yt)>=(W-rt)*($-yt)}function b(L,k){return L.next.i!==k.i&&L.prev.i!==k.i&&!R(L,k)&&(C(L,k)&&C(k,L)&&O(L,k)&&(M(L.prev,L,k.prev)||M(L,k.prev,k))||v(L,k)&&M(L.prev,L,L.next)>0&&M(k.prev,k,k.next)>0)}function M(L,k,D){return(k.y-L.y)*(D.x-k.x)-(k.x-L.x)*(D.y-k.y)}function v(L,k){return L.x===k.x&&L.y===k.y}function S(L,k,D,$){var W=T(M(L,k,D)),tt=T(M(L,k,$)),rt=T(M(D,$,L)),yt=T(M(D,$,k));return!!(W!==tt&&rt!==yt||W===0&&_(L,D,k)||tt===0&&_(L,$,k)||rt===0&&_(D,L,$)||yt===0&&_(D,k,$))}function _(L,k,D){return k.x<=Math.max(L.x,D.x)&&k.x>=Math.min(L.x,D.x)&&k.y<=Math.max(L.y,D.y)&&k.y>=Math.min(L.y,D.y)}function T(L){return L>0?1:L<0?-1:0}function R(L,k){var D=L;do{if(D.i!==L.i&&D.next.i!==L.i&&D.i!==k.i&&D.next.i!==k.i&&S(D,D.next,L,k))return!0;D=D.next}while(D!==L);return!1}function C(L,k){return M(L.prev,L,L.next)<0?M(L,k,L.next)>=0&&M(L,L.prev,k)>=0:M(L,k,L.prev)<0||M(L,L.next,k)<0}function O(L,k){var D=L,$=!1,W=(L.x+k.x)/2,tt=(L.y+k.y)/2;do D.y>tt!=D.next.y>tt&&D.next.y!==D.y&&W<(D.next.x-D.x)*(tt-D.y)/(D.next.y-D.y)+D.x&&($=!$),D=D.next;while(D!==L);return $}function z(L,k){var D=new G(L.i,L.x,L.y),$=new G(k.i,k.x,k.y),W=L.next,tt=k.prev;return L.next=k,k.prev=L,D.next=W,W.prev=D,$.next=D,D.prev=$,tt.next=$,$.prev=tt,$}function E(L,k,D,$){var W=new G(L,k,D);return $?(W.next=$.next,W.prev=$,$.next.prev=W,$.next=W):(W.prev=W,W.next=W),W}function U(L){L.next.prev=L.prev,L.prev.next=L.next,L.prevZ&&(L.prevZ.nextZ=L.nextZ),L.nextZ&&(L.nextZ.prevZ=L.prevZ)}function G(L,k,D){this.i=L,this.x=k,this.y=D,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(L,k,D,$){var W=k&&k.length,tt=W?k[0]*D:L.length,rt=Math.abs(K(L,0,tt,D));if(W)for(var yt=0,Wt=k.length;yt<Wt;yt++){var Bt=k[yt]*D,We=yt<Wt-1?k[yt+1]*D:L.length;rt-=Math.abs(K(L,Bt,We,D))}var Ie=0;for(yt=0;yt<$.length;yt+=3){var te=$[yt]*D,Rn=$[yt+1]*D,Ce=$[yt+2]*D;Ie+=Math.abs((L[te]-L[Ce])*(L[Rn+1]-L[te+1])-(L[te]-L[Rn])*(L[Ce+1]-L[te+1]))}return rt===0&&Ie===0?0:Math.abs((Ie-rt)/rt)};function K(L,k,D,$){for(var W=0,tt=k,rt=D-$;tt<D;tt+=$)W+=(L[rt]-L[tt])*(L[tt+1]+L[rt+1]),rt=tt;return W}return e.flatten=function(L){for(var k=L[0][0].length,D={vertices:[],holes:[],dimensions:k},$=0,W=0;W<L.length;W++){for(var tt=0;tt<L[W].length;tt++)for(var rt=0;rt<k;rt++)D.vertices.push(L[W][tt][rt]);W>0&&($+=L[W-1].length,D.holes.push($))}return D},M0.exports}var OM=IM();const uR=fp(OM);var jp=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(jp||{});class zM{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](t,n,r,o,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const FM=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Qp=class Zp extends Gi{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...FM,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await CM(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...Zp.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof ze&&(r={container:r},n&&(Zt(pr,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:Un.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=jp.ALL);const{clear:r,clearColor:o,target:i}=t;Un.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,Un.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new zM(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!PM())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Qp.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Jp=Qp,b0;function EM(e){return b0!==void 0||(b0=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??Jp.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ki.get().getWebGLRenderingContext())return!1;let r=ki.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),b0}let v0;async function LM(e={}){return v0!==void 0||(v0=await(async()=>{const t=ki.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),v0}const N1=["webgl","webgpu","canvas"];async function kM(e){let t=[];e.preference?(t.push(e.preference),N1.forEach(i=>{i!==e.preference&&t.push(i)})):t=N1.slice();let n,r={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await LM()){const{WebGPURenderer:s}=await Ru(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-B8UhEoBs.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgpu};break}else if(a==="webgl"&&EM(e.failIfMajorPerformanceCaveat??Jp.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await Ru(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-BPY_3CyC.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgl};break}else if(a==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const ty="8.6.6";class ey{static init(){globalThis.__PIXI_APP_INIT__?.(this,ty)}static destroy(){}}ey.extension=un.Application;class DM{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,ty)}destroy(){this._renderer=null}}DM.extension={type:[un.WebGLSystem,un.WebGPUSystem],name:"initHook",priority:-10};const ny=class hh{constructor(...t){this.stage=new ze,t[0]!==void 0&&Zt(pr,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await kM(t),hh._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Zt(pr,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=hh._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};ny._plugins=[];let Dl=ny;Xi.handleByList(un.Application,Dl._plugins);Xi.add(ey);var nr=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(nr||{});class ps extends Gi{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:a}=t;super(),this.uid=cr("buffer"),this._resourceType="buffer",this._resourceId=cr("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const s=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:s,label:i},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&nr.STATIC)}set static(t){t?this.descriptor.usage|=nr.STATIC:this.descriptor.usage&=~nr.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=cr("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function ry(e,t){if(!(e instanceof ps)){let n=t?nr.INDEX:nr.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=nr.INDEX|nr.COPY_DST):(e=new Float32Array(e),n=nr.VERTEX|nr.COPY_DST)),e=new ps({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function UM(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,a=1/0,s=-1/0,l=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,c=(r.stride||2*4)/u;for(let h=f;h<o.length;h+=c){const d=o[h],m=o[h+1];d>s&&(s=d),m>l&&(l=m),d<i&&(i=d),m<a&&(a=m)}return n.minX=i,n.minY=a,n.maxX=s,n.maxY=l,n}function XM(e){return(e instanceof ps||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=ry(e.buffer,!1),e}class oy extends Gi{constructor(t={}){super(),this.uid=cr("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Li,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=XM(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=ry(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,UM(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var iy=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,GM=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,B1=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const ay=class sy extends ge{constructor(t){t={...sy.defaultOptions,...t};const n=ae.from({vertex:{source:B1,entryPoint:"mainVertex"},fragment:{source:B1,entryPoint:"mainFragment"}}),r=fe.from({vertex:iy,fragment:GM,name:"alpha-filter"}),{alpha:o,...i}=t,a=new mf({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};ay.defaultOptions={alpha:1};let NM=ay;const ly={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},BM=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function $M(e){const t=ly[e],n=t.length;let r=BM,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const HM=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function WM(e,t){const n=Math.ceil(e/2);let r=HM,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function qM(e,t){const n=WM(t,e),r=$M(t);return fe.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var VM=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function YM(e,t){const n=ly[t],r=n.length,o=[],i=[],a=[];for(let c=0;c<t;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,e?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:t-c-1,d=n[h].toString();a[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=VM.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return ae.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const uy=class fy extends ge{constructor(t){t={...fy.defaultOptions,...t};const n=qM(t.horizontal,t.kernelSize),r=YM(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=Er.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===Xu.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,r,o),Er.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};uy.defaultOptions={strength:8,quality:4,kernelSize:5};let $1=uy;var KM=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`,H1=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
  };
  
fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`;class jM extends ge{constructor(t={}){const n=new mf({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),r=ae.from({vertex:{source:H1,entryPoint:"mainVertex"},fragment:{source:H1,entryPoint:"mainFragment"}}),o=fe.from({vertex:iy,fragment:KM,name:"color-matrix-filter"});super({...t,gpuProgram:r,glProgram:o,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let r=t;n&&(this._multiply(r,this.matrix,t),r=this._colorMatrix(r)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=r,this.resources.colorMatrixUniforms.update()}_multiply(t,n,r){return t[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],t[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],t[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],t[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],t[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],t[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],t[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],t[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],t[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],t[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],t[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],t[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],t[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],t[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],t[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],t[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],t[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],t[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],t[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],t[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}tint(t,n){const[r,o,i]=Un.shared.setValue(t).toArray(),a=[r,0,0,0,0,0,o,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)}greyscale(t,n){const r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const r=Math.cos(t),o=Math.sin(t),i=Math.sqrt,a=1/3,s=i(a),l=r+(1-r)*a,u=a*(1-r)-s*o,f=a*(1-r)+s*o,c=a*(1-r)+s*o,h=r+a*(1-r),d=a*(1-r)-s*o,m=a*(1-r)-s*o,p=a*(1-r)+s*o,g=r+a*(1-r),x=[l,u,f,0,0,c,h,d,0,0,m,p,g,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const r=(t||0)+1,o=-.5*(r-1),i=[r,0,0,0,o,0,r,0,0,o,0,0,r,0,o,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const r=t*2/3+1,o=(r-1)*-.5,i=[r,o,o,0,0,o,r,o,0,0,o,o,r,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,r,o,i){t||(t=.2),n||(n=.15),r||(r=16770432),o||(o=3375104);const a=Un.shared,[s,l,u]=a.setValue(r).toArray(),[f,c,h]=a.setValue(o).toArray(),d=[.3,.59,.11,0,0,s,l,u,t,0,f,c,h,n,0,s-f,l-c,u-h,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)}predator(t,n){const r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function W1(e,t,n,r,o,i,a,s){const l=a-n,u=s-r,f=o-n,c=i-r,h=e-n,d=t-r,m=l*l+u*u,p=l*f+u*c,g=l*h+u*d,x=f*f+c*c,b=f*h+c*d,M=1/(m*x-p*p),v=(x*g-p*b)*M,S=(m*b-p*g)*M;return v>=0&&S>=0&&v+S<1}const cy=class hy extends oy{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Zt(pr,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...hy.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),a=n.shrinkBuffersToFit,s=new ps({data:r,label:"attribute-mesh-positions",shrinkToFit:a,usage:nr.VERTEX|nr.COPY_DST}),l=new ps({data:o,label:"attribute-mesh-uvs",shrinkToFit:a,usage:nr.VERTEX|nr.COPY_DST}),u=new ps({data:i,label:"index-mesh-buffer",shrinkToFit:a,usage:nr.INDEX|nr.COPY_DST});super({attributes:{aPosition:{buffer:s,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};cy.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let dy=cy;class QM extends Ad{constructor(...t){let n=t[0];n instanceof oy&&(Zt(pr,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Zt(pr,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:a,state:s,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??Xt.WHITE,this.state=s??Yp.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=a??!1}get material(){return Zt(pr,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=Xt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof dy?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const a=this.geometry.getIndex().data,s=a.length;for(let l=0;l+2<s;l+=i){const u=a[l]*2,f=a[l+1]*2,c=a[l+2]*2;if(W1(n,r,o[u],o[u+1],o[f],o[f+1],o[c],o[c+1]))return!0}}else{const a=o.length/2;for(let s=0;s+2<a;s+=i){const l=s*2,u=(s+1)*2,f=(s+2)*2;if(W1(n,r,o[l],o[l+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class ZM{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new tn,this.observer=n,this.position=new En(this,0,0),this.scale=new En(this,1,1),this.pivot=new En(this,0,0),this.skew=new En(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const my=class eu extends Ad{constructor(...t){let n=t[0]||{};n instanceof Xt&&(n={texture:n}),t.length>1&&(Zt(pr,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...eu.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new En({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new ZM({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=c??!1}static from(t,n={}){return typeof t=="string"?new eu({texture:na.get(t),...n}):new eu({texture:t,...n})}get uvRespectAnchor(){return ri("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){ri("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=Xt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};my.defaultOptions={texture:Xt.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let JM=my;const ol=new Map;function t4(e,t){if(!ol.has(e)){const n=new Xt({source:new Td({resource:e,...t})}),r=()=>{ol.get(e)===n&&ol.delete(e)};n.once("destroy",r),n.source.once("destroy",r),ol.set(e,n)}return ol.get(e)}const py=class yy{constructor(t={}){if(this.uid=cr("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...yy.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new yr({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof Xt||t.depthStencilTexture instanceof yr?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new yr({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};py.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let e4=py;class Pd extends Xt{static create(t){return new Pd({source:new yr(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const Id=class gy{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...gy.defaultOptions,...t},t.view&&(Zt(pr,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new fr(0,0,t.width,t.height),this.canvas=t.canvas||ki.get().createCanvas(),this.antialias=!!t.antialias,this.texture=t4(this.canvas,t),this.renderTarget=new e4({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Id.extension={type:[un.WebGLSystem,un.WebGPUSystem,un.CanvasSystem],name:"view",priority:0};Id.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let n4=Id;Xi.add(i5,a5);const ee={},ks={},ac=new Map,Ur={},yf={},xy=e=>(yf[e]?"assets/pk/":"assets/")+e+".png";function dh(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function r4(e){const t=window.MAP;Object.assign(ee,window.META,t.decometa||{});for(const s of Object.keys(ee)){const l=ee[s].gear;if(l)for(const u in l)for(const f of l[u])ee[s+"__"+u+f]=ee[s]}try{Object.assign(yf,await(await fetch("assets/pk/index.json")).json())}catch{}const n=Object.keys(ee),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>e(++i/o);await Promise.all([...n.map(async s=>{const l=await dh(xy(s));if(Ur[s]=l,l.naturalWidth){const u=Xt.from(l);u.source.scaleMode="nearest",ks[s]=u}a()}),...r.map(async s=>{Ur[s]=await dh("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function gf(e){return!!ks[e]}function o4(){return Object.values(ks)}const q1=new Set;function My(e){ks[e]||q1.has(e)||!ee[e]||(q1.add(e),Ou("sheetLoad",1,e),dh(xy(e)).then(t=>{if(Ur[e]=t,t.naturalWidth){const n=Xt.from(t);n.source.scaleMode="nearest",ks[e]=n}}))}function i4(e){for(const t of e){const n=ee[t]&&ee[t].gear;n&&n.w&&n.w.includes(0)&&My(t+"__w0")}}function by(e,t,n,r){let o=0,i=0;if(e.anims&&t){const a=e.anims[t]||e.anims.idle||e.anims.walk||Object.values(e.anims)[0],s=e.dirs||1,l=s>=16?(n%16+16)%16:s>1?Math.round(n/2)%s:0;o=a.row+l,i=(r%a.n+a.n)%a.n}else e.frames&&e.frames>1&&(i=(r%e.frames+e.frames)%e.frames);return[o,i]}function vy(e,t,n){const r=ee[e],o=yf[e];if(o){if(n>=o.cols||t>=o.rows)return null;const a=(t*o.cols+n)*6,s=o.f;return s[a+2]?[s[a],s[a+1],s[a+2],s[a+3],s[a+4],s[a+5]]:null}const i=Ur[e];return!r||!i||(n+1)*r.fw>i.naturalWidth||(t+1)*r.fh>i.naturalHeight?null:[n*r.fw,t*r.fh,r.fw,r.fh,0,0]}const a4=null;function _i(e,t,n,r){const o=ee[e],i=ks[e];if(o&&!i&&e.includes("__"))return My(e),null;if(!o||!i)return null;const[a,s]=by(o,t,n,r),l=e+"|"+a+"|"+s;let u=ac.get(l);if(u===void 0){const f=vy(e,a,s);if(!f)return ac.set(l,a4),null;u=yf[e]?new Xt({source:i.source,frame:new fr(f[0],f[1],f[2],f[3]),orig:new fr(0,0,o.fw,o.fh),trim:new fr(f[4],f[5],f[2],f[3])}):new Xt({source:i.source,frame:new fr(f[0],f[1],o.fw,o.fh)}),ac.set(l,u)}return u}function nu(e,t,n){const r=ee[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function s4(){const e=Ur.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),a=Math.min(t,e.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,o,r,i,a,0,0,i,a);const l=Xt.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const F=Math.round,at=Math.PI*2,ue=e=>1-(1-e)*(1-e);function sr(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=F(n-a*o/2),u=F(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++){const h=t[c];for(let d=0;d<a;d++)h[d]===f&&e.fillRect(l+d*o,u+c*o,o,o)}}}function ar(e){const t=ee[e.sprite];return(t?t.ay:50)*(e.scale||1)/N.ZK}function en(e){const t=e.uid!==void 0?Z(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const l4=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],u4={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function f4(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=y(-.35,.35);et.sfx("item_crit",t,n,.9),A({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.55),u=Math.min(1,a*3.5);i.globalAlpha=a<.45?1:(1-a)/.55;for(let f=0;f<=26;f++){const c=f/26;if(c>u)break;const h=o-Math.PI/2+r*(-1.35+2.7*c),d=u-c,m=F(2+7*Math.sin(Math.PI*c));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(F(s+Math.cos(h)*36-m/2),F(l+10+Math.sin(h)*24-m/2),m,m)}if(a<.3){const f=1-a/.3,c=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(F(s-c),F(l)-1,F(c*2),3),i.fillRect(F(s)-1,F(l-c*.7),3,F(c*1.4)),i.fillStyle="#ff5a3a";for(let h=0;h<4;h++){const d=c*.55;i.fillRect(F(s+(h&1?d:-d)*.7)-2,F(l+(h&2?d:-d)*.5)-2,4,4)}}}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.22),u=1.5-.95*l*l;if(!s.hit&&l>=1){s.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*at,p=y(1.5,3.5);I(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*at,p=y(1,2.5);I(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,y(1.5,3),.6,"#f2e4c4",2,9,!1)}Q(4)}const[f,c]=P(t,n,u);i.globalAlpha=a<.6?1:(1-a)/.4;const h=l>=1&&a<.35?(Math.random()-.5)*3:0;sr(i,l4,f+h,c-6,3,u4)}})}function c4(e){const t=[e.x,e.y];for(const a of String(e.pts||"").split(";")){const s=a.split(",");s.length===2&&s[0]!==""&&t.push(+s[0],+s[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;et.sfx("item_chain",t[2],t[3],1),I(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),A({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(a,s,l){const u=s*i,f=Math.floor(w.T*28);for(;l.sp<n&&u>=l.sp*o;){const c=t[l.sp*2+2],h=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*at,p=y(2,4.5);I(c,h,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}a.lineJoin="miter";for(let c=0;c<n;c++){const h=u-c*o;if(h<0)break;const d=Math.max(0,1-h/.38);if(d<=0)continue;const[m,p]=P(t[c*2],t[c*2+1],c?.5:.7),[g,x]=P(t[c*2+2],t[c*2+3],.5),b=g-m,M=x-p,v=Math.hypot(b,M)||1,S=-M/v,_=b/v,T=Math.min(16,4+v*.1),R=7;a.beginPath(),a.moveTo(m,p);for(let G=1;G<R;G++){const K=(q(r+c*31+G*7+f*13)-.5)*2*T;a.lineTo(m+b*G/R+S*K,p+M*G/R+_*K)}a.lineTo(g,x),a.globalAlpha=d*.4,a.strokeStyle="#5a7aff",a.lineWidth=8,a.stroke(),a.globalAlpha=d*.85,a.strokeStyle="#9ae0ff",a.lineWidth=3.5,a.stroke(),a.globalAlpha=d,a.strokeStyle="#ffffff",a.lineWidth=1.5,a.stroke();const C=2+(q(r+c)*3|0),O=(q(r+c*31+C*7+f*13)-.5)*2*T,z=q(r+c*5+f)<.5?1:-1,E=m+b*C/R+S*O,U=p+M*C/R+_*O;if(a.beginPath(),a.moveTo(E,U),a.lineTo(E+S*z*12+b/v*7,U+_*z*12+M/v*7),a.lineTo(E+S*z*17+b/v*17,U+_*z*17+M/v*17),a.globalAlpha=d*.75,a.strokeStyle="#bfeaff",a.lineWidth=1.5,a.stroke(),h<.16){const G=1-h/.16,K=4+G*11;a.globalAlpha=G,a.fillStyle="#e8f6ff",a.fillRect(F(g-K),F(x)-1,F(K*2),3),a.fillRect(F(g)-1,F(x-K),3,F(K*2)),a.fillStyle="#7ac8ff",a.fillRect(F(g)-4,F(x)-4,8,8)}}}}),Q(2)}const h4=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],d4={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function m4(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*at;et.sfx("item_bash",t,n,1),A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.24),u=1.9-1.35*l*l;if(!s.hit&&l>=1){s.hit=!0,A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,ft(t,n,.3+1.3*ue(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,ft(t,n,.25+.8*ue(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const g=o+p/7*at;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,M=g+(q(o+p*9+x)-.5)*.7,[v,S]=P(t+Math.cos(M)*b,n+Math.sin(M)*b);x?d.lineTo(v,S):d.moveTo(v,S)}d.stroke()}}}),A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=P(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const M=b/10*at;d.fillRect(F(p+Math.cos(M)*x)-2,F(g+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*at,p=y(1.5,4);I(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,y(.6,1.8),y(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*at,p=y(1,3);I(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,y(2,4),.8,"#7a7468",3,12,!1)}Q(5)}const[f,c]=P(t,n,u),h=l>=1&&a<.34?2:0;i.globalAlpha=a<.6?1:(1-a)/.4,i.translate(F(f),F(c-14+h)),i.rotate(r*.9*(1-l)),sr(i,h4,0,0,3,d4)}})}function p4(e,t,n,r,o){for(let i=0;i<9;i++){const a=r*6+i*.7+o,s=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(F(t+Math.cos(a)*s)-1,F(n-4+Math.sin(a)*s*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const a=-r*4+i*Math.PI,s=F(t+Math.cos(a)*18),l=F(n-2+Math.sin(a)*5);e.fillStyle="#ff9a3a",e.fillRect(s-3,l-1,7,3),e.fillRect(s-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(s,l,1,1)}}const y4=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],g4={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function x4(e){et.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;A({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){en(o);const i=.32,a=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let s=0;s<14;s++){const l=s/14*at+t,u=a*(.65+.35*q(t+s)),[f,c]=P(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[h,d]=P(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,p]=P(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=s%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,c),n.lineTo(m,p),n.lineTo(h,d),n.closePath(),n.fill()}ft(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),a=i?ar(i):.8,s=r<.06?2:r<.14?4:3,[l,u]=P(o.x,o.y,a+.32+r*.15),f=r<.7?1:(1-r)/.3;mt(!0);const c=Ht();c.globalAlpha=f*(.35+.2*Math.sin(r*40)),c.fillStyle="#ff2a1a",c.fillRect(F(l-22),F(u-18),44,36),c.globalAlpha=1,mt(!1),n.globalAlpha=f,sr(n,y4,l,u,s,g4)}});for(let n=0;n<26;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.1,.6),y(-.4,.4),y(-.4,.4),y(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);Q(3)}const M4=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],b4={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function v4(e){et.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;A({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),a=i?ar(i):.8,[s,l]=P(o.x,o.y,a+.45),u=P(o.x,o.y,0)[1],f=t*1.9*ue(Math.min(1,r/.3)),c=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const h=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,g=s+m*h-p*d,x=l+m*d+p*h,b=r<.7?3:2;n.globalAlpha=c;for(let M=0;M<=14;M++){const v=M/14,S=x+(u-x)*v,_=g+Math.sin(w.T*22+M)*1.5+t*v*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(F(_)-1,F(S),b,F((u-x)/14)+1)}Math.random()<.6&&I(o.x+y(-.2,.2),o.y+y(-.2,.2),.02,y(-1,1),y(-1,1),y(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=c,n.translate(F(s),F(l)),n.rotate(f),sr(n,M4,0,0,3,b4)}}),A({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*ue(Math.min(1,r/.45)),a=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=a,ft(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=a*.6,ft(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function w4(e,t,n){const[r,o]=P(t.x,t.y,ar(t)*.55),i=t.scale||1;for(let a=0;a<4;a++){const s=n*3.2+a*at/4+t.id,l=F(r+Math.cos(s)*22*i),u=F(o+Math.sin(s)*8*i+Math.sin(n*5+a)*2);e.globalAlpha=Math.sin(s)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&I(t.x+y(-.3,.3),t.y+y(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function S4(e){et.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,a){const s=Z(a.uid);s&&!s.dead&&(a.ex=s.x,a.ey=s.y);const[l,u]=P(t,n,.5),[f,c]=P(a.ex,a.ey,.6),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const M=(b-1)*.9+.3*Math.sin(r+b),v=Math.min(1,i*1.4-b*.1);if(!(v<=0))for(let S=0;S<7;S++){const _=v-S*.045;if(_<0)break;const T=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+b*2+w.T*10)*3,R=l+h*_+p*T,C=u+d*_+g*T-Math.sin(_*Math.PI)*14,O=S===0?4:S<3?3:2;o.globalAlpha=(1-S/7)*x,S===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(F(R-5),F(C-5),10,10),o.globalAlpha=x),o.fillStyle=S===0?"#ff8a96":S<3?"#e0203a":"#8a0a1e",o.fillRect(F(R-O/2),F(C-O/2),O,O)}}if(!a.pop&&i>.72){a.pop=!0;for(let b=0;b<4;b++)I(a.ex+y(-.2,.2),a.ey+y(-.2,.2),.6,0,0,y(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const ma=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function _4(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;et.sfx("item_hex",t,n,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(a,s){const[l,u]=P(r,o,.7),[f,c]=P(t,n,.7),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=Math.min(1,s*2.6);a.globalAlpha=s<.6?1:(1-s)/.4;for(let b=0;b<=30;b++){const M=b/30;if(M>x)break;const v=Math.sin(M*at*2.5-s*9)*8*(1-M*.6);a.fillStyle=ma[(b+(s*24|0))%3],a.fillRect(F(l+h*M+p*v)-1,F(u+d*M+g*v)-1,3,3)}}}),A({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(a,s,l){const[u,f]=P(t,n,.6),c=Math.min(1,s/.42),h=s<.55?1:(1-s)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);mt(!0);const m=Ht();for(let x=0;x<20;x++){const b=c-x*.025;if(b<0)break;const M=d(b),v=F(5-x*.2);m.globalAlpha=(1-x/20)*h,m.fillStyle=ma[x<3?0:x<9?1:2],m.fillRect(F(u+Math.cos(M)*42-v/2),F(f+Math.sin(M)*24-v/2),v,v)}m.globalAlpha=1,mt(!1),a.globalAlpha=h;const p=d(c);for(let x=0;x<11;x++){const b=p-i*x*.07,M=1+x*.55,v=42-M/2,S=u+Math.cos(b)*v,_=f+Math.sin(b)*v*.58;a.fillStyle="#2a1040",a.fillRect(F(S-M/2),F(_-M/2),F(M)+1,F(M)+1),a.fillStyle="#f0e0ff",a.fillRect(F(u+Math.cos(b)*43)-1,F(f+Math.sin(b)*25)-1,2,2)}const g=p-i*.75;for(let x=38;x>10;x-=2)a.fillStyle=x%4?"#4a2a18":"#6a4024",a.fillRect(F(u+Math.cos(g)*x)-1,F(f+Math.sin(g)*x*.58)-1,3,3);if(!l.poof&&s>=.36){l.poof=!0;for(let x=0;x<9;x++)A({type:"puff",x:t+y(-.5,.5),y:n+y(-.5,.5),r:y(14,24),dur:y(.6,1),col:[176,128,236]});A({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*at,M=y(1,3);I(t,n,.6,Math.cos(b)*M,Math.sin(b)*M,y(.5,2.5),.6,ma[x%4],3,1,!0)}for(let x=0;x<6;x++)I(t+y(-.3,.3),n+y(-.3,.3),.3,0,0,y(.8,1.6),.7,"#a8e070",3,-.5,!1);Q(3)}}})}function A4(e,t){const[n,r]=P(e.x,e.y,ar(e)+.22+Math.sin(t*3+e.id)*.03);mt(!0);const o=Ht();for(let i=0;i<12;i++){const a=t*5+i*.55+e.id,s=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=ma[i%3],o.fillRect(F(n+Math.cos(a)*s)-1,F(r+Math.sin(a)*s*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const a=-t*2.5+i*Math.PI,s=F(n+Math.cos(a)*16),l=F(r+4+Math.sin(a)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=ma[0],o.fillRect(s-2,l,5,1),o.fillRect(s,l-2,1,5)}o.globalAlpha=1,mt(!1),Math.random()<.1&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,y(.6,1.2),.6,ma[2],2,-.3,!0)}function T4(e){for(let t=0;t<5;t++)A({type:"puff",x:e.x+y(-.35,.35),y:e.y+y(-.35,.35),r:y(12,20),dur:y(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*at,r=y(1,2.5);I(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,2),.5,ma[t%3],2,1,!0)}}const Xo=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],R4=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],C4={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function P4(e){et.sfx("item_refresh",e.x,e.y,1),A({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){en(r);const o=.45+.85*ue(n),[i,a]=P(r.x,r.y),s=o*N.HW*Math.SQRT2*1.08,l=o*N.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,ft(r.x,r.y,o,Xo[1],null,3),t.fillStyle=Xo[2];for(let u=0;u<16;u++){const f=u/16*at-n*5;t.fillRect(F(i+Math.cos(f)*s)-2,F(a+Math.sin(f)*l)-2,5,4)}ft(r.x,r.y,o*.6,Xo[0],null,1.5,[4,4])}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),[i,a]=P(r.x,r.y,(o?ar(o):.8)*.55),s=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*at-n*6,f=l%2===0,c=f?4:2;t.fillStyle=f?Xo[0]:Xo[2],t.fillRect(F(i+Math.cos(u)*s)-c/2,F(a+Math.sin(u)*s)-c/2,c,c)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?Xo[1]:Xo[0];for(let c=3;c<f;c+=2)t.fillRect(F(i+Math.cos(u)*c)-1,F(a+Math.sin(u)*c)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,A({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:Xo[1],w:4});for(let l=0;l<20;l++)I(r.x+y(-.4,.4),r.y+y(-.4,.4),y(.2,.9),y(-.6,.6),y(-.6,.6),y(1.5,3),.6,Xo[l%3],3,0,!0)}}}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),[i,a]=P(r.x,r.y,(o?ar(o):.8)*.55),s=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(F(i),F(a)),t.rotate(Math.PI*s*s*(3-2*s)),sr(t,R4,0,0,3,C4)}}),Q(2)}function wy(e,t,n,r,o){const i=F(t),a=F(n);e.fillStyle=r,e.fillRect(i-3,a,2,3),e.fillRect(i+1,a,2,3),e.fillRect(i-2,a+2,4,2),e.fillStyle=o,e.fillRect(i-1,a+2,2,1)}function I4(e){et.sfx("item_immune",e.x,e.y,1);const t=Math.random()*at;A({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),[a,s]=P(o.x,o.y,(i?ar(i):.8)*.45),l=ue(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const c=f/18*at+t+(1-l)*1.5,h=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),wy(n,a+Math.cos(c)*h,s+Math.sin(c)*h*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(a,s,32*u+6*(1-f),38*u+6*(1-f),0,0,at),n.stroke()}}}),A({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);Q(2)}function O4(e,t){const n=e.scale||1,[r,o]=P(e.x,e.y,ar(e)*.45),i=30*n,a=36*n;mt(!0);const s=Ht();s.globalAlpha=.5+.1*Math.sin(t*4),s.strokeStyle="#ffcc40",s.lineWidth=2,s.fillStyle="rgba(255,200,60,0.07)",s.beginPath(),s.ellipse(r,o,i,a,0,0,at),s.fill(),s.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,c=i*Math.sqrt(Math.max(0,1-f/a*(f/a)))-4;for(let h=-c+(u&1?5:0);h<=c;h+=10){const d=Math.max(0,1-Math.abs(h-l+f*.5)/16);s.globalAlpha=.16+.6*d,wy(s,r+h,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}s.globalAlpha=1,mt(!1)}function z4(e){et.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*at+y(-.25,.25),t[r*4+1]=y(.8,1.6),t[r*4+2]=y(-14,14),t[r*4+3]=y(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*at+y(-.4,.4);A({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=en(i),[s,l]=P(i.x,i.y,(a?ar(a):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(s,l,16*f,0,at),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s,l,13*f,0,at),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(s-2*f,l,8*f,0,at),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s+2*f,l-2*f,7*f,0,at),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(s,l),r.lineTo(s+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(s+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}mt(!0);const c=Ht(),h=s-14+o/.45*28;c.globalAlpha=.8,c.fillStyle="#ffffff";for(let d=-3;d<=3;d++)c.fillRect(F(h+d*.6),F(l+d*3)-1,2,3);mt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const c=Math.random()*at,h=y(1.5,3.5);I(i.x,i.y,.7,Math.cos(c)*h,Math.sin(c)*h,y(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){mt(!0);const f=Ht();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const c=10+u*60;f.fillRect(F(s-c),F(l)-1,F(c*2),3),f.fillRect(F(s)-1,F(l-c*.6),3,F(c*1.2)),mt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const c=t[f*4],h=u*t[f*4+1]*40,d=t[f*4+3],m=s+Math.cos(c)*(h+8),p=l+Math.sin(c)*(h+8)*.7+u*u*50,g=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(g),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const w0=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function F4(e){et.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,a=Math.random()*9,s=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;A({type:"ring",x:t,y:n,r:.8,dur:.35,col:w0[1],w:4});for(let c=0;c<8;c++)I(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(.3,1),.5,"#c8b48a",3,3,!1);A({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(c,h){const d=h*s,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[g,x]=P(t,n,.3),[b,M]=P(r,o,.3),v=(u-f)*N.HW,S=(u+f)*N.HH;for(let _=0;_<5;_++){const T=(_-2)*.22,R=(_-2)*6;for(let C=p;C<=m;C+=.025){const O=T+Math.sin(C*18+_*1.3+a)*.08,z=(C-p)/(m-p);c.globalAlpha=z*(_===2?1:.7),c.fillStyle=w0[z>.85?0:_===2?1:2],c.fillRect(F(g+(b-g)*C+v*O)-1,F(x+(M-x)*C+S*O+R)-1,3,2)}}for(let _=0;_<3;_++){const T=.25+_*.3;if(T<p||T>m)continue;const R=g+(b-g)*T+v*(_-1)*.35,C=x+(M-x)*T+S*(_-1)*.35-10;c.globalAlpha=1-(T-p)/Math.max(.01,m-p)*.5;for(let O=0;O<9;O++){const z=w.T*9+O*.75+_,E=2+O*1.2;c.fillStyle=w0[O<3?0:1],c.fillRect(F(R+Math.cos(z)*E)-1,F(C+Math.sin(z)*E*.6)-1,2,2)}}}});for(let c=0;c<14;c++){const h=Math.random();I(t+(r-t)*h,n+(o-n)*h,y(.1,.6),(r-t)/l*y(1,3),(o-n)/l*y(1,3),y(.2,1),y(.4,.8),w0[c%3],2,0,!0)}}const sc=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function E4(e,t){const[r,o]=P(e.x,e.y),i=2.8*N.HW*Math.SQRT2,a=2.8*N.HH*Math.SQRT2;mt(!0);const s=Ht();s.globalAlpha=.07,s.fillStyle="#ff8a2a",s.beginPath(),s.ellipse(r,o,i*.97,a*.97,0,0,at),s.fill(),s.globalAlpha=.22+.06*Math.sin(t*3+e.id),s.strokeStyle="#ff9a3a",s.lineWidth=2,s.setLineDash([10,7]),s.lineDashOffset=-t*24,s.beginPath(),s.ellipse(r,o,i,a,0,0,at),s.stroke(),s.setLineDash([]),s.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*at+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),c=F(3+f*4);s.globalAlpha=.25+.45*f,s.fillStyle=f>.75?sc[0]:sc[1],s.fillRect(F(r+Math.cos(u)*i)-2,F(o+Math.sin(u)*a)-c,4,c)}if(s.globalAlpha=1,mt(!1),Math.random()<.35){const l=Math.random()*at,u=Math.sqrt(Math.random())*2.8;I(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,y(.8,1.6),y(.6,1),sc[Math.random()*4|0],2,-.3,!0,.97)}}const Ds={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},V1={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},Ul=2,lc={};function Sy(e,t){const n=e+(t?"o":"c");if(lc[n])return lc[n];let r=Ds[e]||Ds.obs;const o=V1[e]||V1.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const a=document.createElement("canvas");a.width=r[0].length*Ul,a.height=r.length*Ul;const s=a.getContext("2d");return sr(s,r,a.width/2,a.height/2,Ul,o),lc[n]=a}function Od(e){const t=Ds[e]||Ds.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*Ul}function xf(e,t){return(t+e.id*1.37)%4.2>.14}function L4(e,t,n){const r=w.T,o=Ht(),i=window.SIM;if(o.globalAlpha=.35,ft(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const a=Math.max(0,e.until-n),s=e.kind==="obs"?360:300,[l,u]=P(e.x,e.y);o.globalAlpha=a<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*N.HW*Math.SQRT2,.34*N.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+at*Math.min(1,a/s)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&ft(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),ft(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function k4(e,t){const n=w.T,[r,o]=P(e.x,e.y),i=o-Od(e.kind);if(xf(e,n)){mt(!0);const a=Ht(),s=.6+.4*Math.sin(n*3+e.id);a.globalAlpha=.25*s,a.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",a.fillRect(F(r)-7,F(i)-5,14,10),a.globalAlpha=.6*s,a.fillRect(F(r)-3,F(i)-2,6,4),a.globalAlpha=1,mt(!1)}if(!t){const a=Ht(),s=F(o-(Ds[e.kind]||Ds.obs).length*Ul-8+Math.sin(n*5)*2),l=F(r);a.fillStyle="#120c1a",a.fillRect(l-5,s-2,11,4),a.fillRect(l-3,s+2,7,2),a.fillRect(l-1,s+4,3,2),a.fillStyle="#ff4a3a",a.fillRect(l-4,s-1,9,2),a.fillRect(l-2,s+1,5,2),a.fillRect(l,s+3,1,2)}}function D4(e,t,n,r){const o=Sy(t,!0),[i,a]=P(n,r);e.globalAlpha=.6+.15*Math.sin(w.T*6),e.drawImage(o,F(i-o.width/2),F(a-o.height)),e.globalAlpha=1}function U4(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;et.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)I(r,o,.05,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);A({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,a){const[s,l]=P(r,o),u=l-Od(t?"obs":"sen"),f=6+26*ue(a),c=10*Math.sin(Math.min(1,a*2.2)*Math.PI*.5)*(1-a*.5);i.globalAlpha=1-a,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let h=-8;h<=8;h++){const d=h/8,m=c*(1-d*d);i.fillRect(F(s+d*f)-1,F(u-m)-1,3,2),i.fillRect(F(s+d*f)-1,F(u+m)-1,3,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,a){i.globalAlpha=.5*(1-a),ft(r,o,(t?n.WARD_VISION:n.SENTRY_R)*ue(a),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)I(r+y(-.15,.15),o+y(-.15,.15),.5,0,0,y(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function X4(e){const t=e.kind!=="sen",n=e.x,r=e.y;et.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*at,a=y(1,3);I(n,r,y(.2,.5),Math.cos(i)*a,Math.sin(i)*a,y(1.5,3.5),y(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)A({type:"puff",x:n+y(-.3,.3),y:r+y(-.3,.3),r:y(10,16),dur:y(.5,.8),col:[150,140,130]});A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[a,s]=P(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*at+i*2;o.fillRect(F(a+Math.cos(f)*l)-1,F(s+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(F(a)-3,F(s)-3,6,6))}})}const jl=["#fff2c8","#ffd080","#ffa040","#c86a10"];function G4(e){et.sfx("mon_howl",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),[a,s]=P(o.x,o.y,(i?ar(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?jl[1]:jl[0];for(let c=-Math.PI*.86;c<=-Math.PI*.14;c+=.1)n.fillRect(F(a+Math.cos(c)*f)-1,F(s+Math.sin(c)*f*.7)-1,3,2)}}}),A({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=w.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||A({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const a=Z(i.uid);if(!a||a.dead||He(a))return;const s=w.T,[l,u]=P(a.x,a.y,ar(a)*.72),f=o>.85?(1-o)/.15:1,c=.7+.3*Math.sin(s*14+a.id),h=a.scale||1;r.globalAlpha=.35*f*c,r.fillStyle="#ff2010",r.fillRect(F(l-9*h),F(u-4),F(18*h),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(F(l-5*h)-1,F(u)-1,3,2),r.fillRect(F(l+5*h)-1,F(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(F(l-5*h),F(u)-1,1,1),r.fillRect(F(l+5*h),F(u)-1,1,1),Math.random()<.12&&I(a.x+y(-.3,.3),a.y+y(-.3,.3),.3,0,0,y(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function N4(e){const t=w.T,n=Ht(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,ft(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let s=0;s<10;s++){const l=q(i*7+s),u=q(i*3+s*5),f=l*at+t*.25*(s%2?1:-1),c=e.r*(.2+.6*u),[h,d]=P(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.15+.1*Math.sin(t+s)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+s))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=s%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(h,d,m,m*.6,0,0,at),n.fill()}mt(!0);const a=Ht();for(let s=0;s<9;s++){const l=(t*.45+q(i+s*11))%1,u=q(i*5+s)*at,f=e.r*.8*q(i+s*3),[c,h]=P(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);a.globalAlpha=Math.sin(l*Math.PI)*o,a.fillStyle=s%2?"#e0b8ff":"#d8ffa0",a.fillRect(F(c)-1,F(h)-1,2,2)}a.globalAlpha=1,mt(!1),n.globalAlpha=1}function B4(e){et.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;A({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,ft(e.x,e.y,t*ue(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,ft(e.x,e.y,t*.7*ue(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*at,o=y(.5,1.6)*t;I(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function $4(e){et.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*at;A({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,a){i.globalAlpha=(1-a)*.8,ft(t,n,r*ue(Math.min(1,a*4)),"#6a4a24",null,5*(1-a)+1),i.globalAlpha=(1-a)*.35,ft(t,n,r,null,"#3a2814"),i.globalAlpha=1-a,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let s=0;s<10;s++){const l=o+s/10*at;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,c=l+(q(o+s*9+u)-.5)*.5,[h,d]=P(t+Math.cos(c)*f,n+Math.sin(c)*f);u?i.lineTo(h,d):i.moveTo(h,d)}i.stroke()}}}),A({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,a){const s=a<.15?ue(a/.15):a>.7?(1-a)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*at,c=u?r*(.85+.15*q(o+l)):r*.45,[h,d]=P(t+Math.cos(f)*c,n+Math.sin(f)*c),m=(u?34:24)*s*(.8+.4*q(o+l*3)),p=(q(o+l*7)-.5)*22,g=h+p,x=d-m,b=h-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(h,d),i.quadraticCurveTo(b,M,g,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(F(g)-2,F(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(F(g),F(x)-2,2,1)}}});for(let i=0;i<30;i++){const a=Math.random()*at,s=y(.5,2.5);I(t+Math.cos(a)*r*.8,n+Math.sin(a)*r*.8,.1,Math.cos(a)*s,Math.sin(a)*s,y(1,3),y(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}Q(6)}const H4=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],W4={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function q4(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(et.sfx("camp_"+t,e.x,e.y,1),t==="pack"){A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),[a,s]=P(o.x,o.y,(i?ar(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,sr(n,H4,a,s,r<.1?2:3,W4);const[l,u]=P(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=jl[1];for(let f=-1;f<=1;f++)for(let c=0;c<8;c++)n.fillRect(F(l+f*8-10+c*3),F(u-12+c*3),2,2)}}});for(let n=0;n<18;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(1,2.2),.8,jl[n%4],3,0,!0)}else if(t==="spore"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=en(o),[a,s]=P(o.x,o.y,(i?ar(i):.8)*.5),l=ue(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*at+l*5,c=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(F(a+Math.cos(f)*c)-2,F(s+Math.sin(f)*c*.6)-2,4,4)}}}),A({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)A({type:"puff",x:e.x+y(-.6,.6),y:e.y+y(-.6,.6),r:y(8,14),dur:y(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=en(i),[s,l]=P(i.x,i.y,(a?ar(a):.8)*.4),u=ue(Math.min(1,o/.45)),f=a&&a.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let c=0;c<10;c++){const h=c/10*at,d=(70*(1-u)+24)*f,m=F(s+Math.cos(h)*d),p=F(l+Math.sin(h)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,Q(2);for(let c=0;c<10;c++)I(i.x+y(-.4,.4),i.y+y(-.4,.4),.4,y(-1,1),y(-1,1),y(1,2),.6,c%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function V4(e,t,n){if(t.camp_bark){const[r,o]=P(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,a=i*N.HW*Math.SQRT2,s=i*N.HH*Math.SQRT2,l=Ht();for(let u=0;u<12;u++){const f=u/12*at;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(F(r+Math.cos(f)*a)-2,F(o+Math.sin(f)*s)-1,4,3)}}if(t.camp_pack){mt(!0);const r=Ht(),[o,i]=P(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=jl[2];for(let a=0;a<3;a++){const s=n*.8+a*at/3,l=o+Math.cos(s)*26,u=i+Math.sin(s)*13;for(let f=-1;f<=1;f++)for(let c=0;c<4;c++)r.fillRect(F(l+f*4-4+c*2),F(u-3+c*2),2,1)}r.globalAlpha=1,mt(!1)}if(t.camp_spore){mt(!0);const r=Ht(),[o,i]=P(e.x,e.y,ar(e)*.5);for(let a=0;a<4;a++){const s=n*(.9+a*.2)+a*1.7+e.id,l=o+Math.cos(s)*20+Math.sin(n*1.7+a)*5,u=i+Math.sin(s*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+a),r.fillStyle=a%2?"#e0b8ff":"#c8f090",r.fillRect(F(l)-1,F(u)-1,2,2)}r.globalAlpha=1,mt(!1)}}function Us(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function jn(e){return ar(e)*.68}const ru=(e,t,n,r)=>!!t[n],Y4=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],K4={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},uc=["#ff5a6a","#5ab4ff"];function j4(e){et.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*at,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*at+y(-.25,.25),r[o*3+1]=y(24,48),r[o*3+2]=o/t*.2;A({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=en(a),[l,u]=P(a.x,a.y,(s?jn(s):.6)+.22),f=l+20,c=i<.28?-.8+1.7*ue(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(F(f),F(u)),o.rotate(c),sr(o,Y4,0,0,3,K4)}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=en(a),l=s?jn(s):.6,[u,f]=P(a.x,a.y,l+.45),c=u+30,[h,d]=P(a.x,a.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(F(c-p),F(f)-1,F(p*2),2),o.fillRect(F(c)-1,F(f-p),2,F(p*2))}}for(let m=0;m<t;m++){const p=uc[m&1];for(let g=2;g>=0;g--){const x=(i-.24-r[m*3+2])/.58-g*.035;if(x<=0||x>1)continue;const b=r[m*3],M=Math.sin(x*Math.PI),v=c+(h-c)*x+Math.cos(b)*34*M,S=f+(d-f)*x+Math.sin(b)*12*M-r[m*3+1]*M;if(g){o.globalAlpha=.5/g,o.fillStyle=p,o.fillRect(F(v)-1,F(S)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(F(v)-4,F(S)-4,8,8),o.globalAlpha=1,o.fillRect(F(v)-2,F(S)-2,4,4),o.fillStyle="#ffffff",o.fillRect(F(v)-1,F(S)-2,2,1)}}!a.land&&i>.84&&(a.land=!0,A({type:"custom",layer:"ground",add:!0,dur:.55,x:a.x,y:a.y,uid:a.uid,draw(m,p,g){en(g),m.globalAlpha=1-p,m.lineDashOffset=p*30,ft(g.x,g.y,.35+.5*ue(p),uc[0],null,3,[5,5]),m.lineDashOffset=-p*30,ft(g.x,g.y,.3+.42*ue(p),uc[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),dt(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const Ci=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function Q4(e){et.sfx("item_phase",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),i=o&&o.scale||1,a=P(r.x,r.y,0)[1],s=P(r.x,r.y,(o?jn(o):.8)*1.05)[1],l=P(r.x,r.y)[0],u=8,f=1-n,c=F(26*i);for(let h=0;h<u;h++){const d=F(s+(a-s)*(h+.5)/u),m=Math.sin(h*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=Ci[1],t.fillRect(F(l-c/2+m-3),d-1,c,3),t.fillStyle=Ci[2],t.fillRect(F(l-c/2-m+3),d-1,c,3)}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){en(r);const o=.28*ue(n),i=.45+.45*n;t.globalAlpha=1-n,ft(r.x-o,r.y+o,i,Ci[1],null,2),ft(r.x+o,r.y-o,i,Ci[2],null,2)}}),dt(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function Z4(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,a=Math.hypot(o,i);if(a<.003||a>1)return;const s=o/a,l=i/a,[u,f]=P(e.x,e.y),[c,h]=P(e.x-s,e.y-l),d=Math.hypot(c-u,h-f)||1,m=(c-u)/d,p=(h-f)/d,g=jn(e)*N.ZK,x=e.scale||1;mt(!0);const b=Ht();for(let M=0;M<5;M++){const v=g*(.15+M*.17),S=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,T=f-v+p*8;for(let R=0;R<S;R+=2){const C=1-R/S;b.globalAlpha=.55*C,b.fillStyle=Ci[1],b.fillRect(F(_+m*R),F(T+p*R)-2,2,1),b.fillStyle=Ci[2],b.fillRect(F(_+m*R),F(T+p*R)+1,2,1)}}if(b.globalAlpha=1,mt(!1),Math.random()<.35){const M=Math.random()<.5;I(e.x-s*.2+(M?.06:-.06),e.y-l*.2-(M?.06:-.06),.02,0,0,0,.45,M?Ci[1]:Ci[2],3,0,!0)}}const xi=["#ffffff","#a8d0ff","#4a8aff","#26349a"],S0=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function mh(e,t,n,r,o){const i=S0[(r%S0.length+S0.length)%S0.length],a=F(t)-o*1.5,s=F(n)-o*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(a+u*o,s+l*o,o,o)}const J4=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],tb={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function eb(e){et.sfx("item_arcane",e.x,e.y,1);const t=e.radius||Us("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(a,s,l){en(l);const u=Math.min(1,s/.12),f=.95*u,[c,h]=P(l.x,l.y),d=f*.8*N.HW*Math.SQRT2,m=f*.8*N.HH*Math.SQRT2;a.globalAlpha=s<.7?1:(1-s)/.3,ft(l.x,l.y,f,xi[1],null,2),ft(l.x,l.y,f*.62,xi[2],null,2),a.fillStyle=xi[0];for(let p=0;p<10;p++){const g=p/10*at+s*2.4;mh(a,c+Math.cos(g)*d,h+Math.sin(g)*m,p,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(a,s){const l=t*ue(s),[u,f]=P(n,r),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=40;a.globalAlpha=(1-s)*.35,ft(n,r,l,xi[2],null,2),a.globalAlpha=1-s*s;for(let m=0;m<d;m++){const p=m/d*at;a.fillStyle=m%4?xi[1]:xi[0],mh(a,u+Math.cos(p)*c,f+Math.sin(p)*h,m*7+(s*12|0),2)}}});const i=w.game;if(i)for(const a of i.heroes||[]){if(a.dead||a.team!==e.team)continue;const s=Math.hypot(a.x-n,a.y-r);s>t||A({type:"custom",layer:"top",dur:.7,delay:ue(s/t)*o*.85,x:a.x,y:a.y,uid:a.id,draw(l,u,f){const c=en(f),h=c?jn(c):.8,d=Math.min(1,u/.4),[m,p]=P(f.x,f.y,h+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),sr(l,J4,m,p,2,tb);return}const g=(u-.4)/.6;l.globalAlpha=1-g,l.fillStyle=xi[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),M=4+g*14;l.fillRect(F(m+Math.cos(b)*M)-1,F(p+Math.sin(b)*M*.8+g*g*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)I(f.x+y(-.2,.2),f.y+y(-.2,.2),h*.8,0,0,y(-.6,-.2),.5,xi[x%3],2,0,!0)}}})}dt(n,r,2.6,5933823,.85,1),Q(2)}const nb=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],rb={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},ob=[0,1,2,3].map(e=>nb.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function ib(e){et.sfx("item_clarity",e.x,e.y,1),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),[i,a]=P(r.x,r.y,(o?jn(o):.6)*.85+Math.min(1,n*5)*.08),s=i+26*(o&&o.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(F(s),F(a)),t.rotate(-l),sr(t,ob[u],0,0,3,rb),!r.pop&&n>.12&&(r.pop=!0,I(r.x,r.y,(o?jn(o):.8)+.5,y(-.6,.6),y(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),A({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),i=o?jn(o):.8,a=o&&o.scale||1;for(let s=0;s<8;s++){const l=n*1.6-s*.075;if(l<0||l>1)continue;const u=s*2.4+l*4,[f,c]=P(r.x,r.y,i*(.1+l*1.1)),h=F(f+Math.cos(u)*20*a),d=F(c+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(h-1,d-2,3,1),t.fillRect(h-1,d+2,3,1),t.fillRect(h-2,d-1,1,3),t.fillRect(h+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(h-1,d-1,1,1)):(t.fillRect(h-3,d,2,1),t.fillRect(h+2,d,2,1),t.fillRect(h,d-3,1,2),t.fillRect(h,d+2,1,2))}}}),dt(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const ab=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],sb={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},_0=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function lb(e){et.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;A({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(a,s,l){const u=s*l.dur;if(u<o){const p=u/o,[g,x]=P(t,n,.9+p*(2.1-p)*1.2);a.translate(F(g),F(x)),a.rotate(p*7),sr(a,ab,0,0,3,sb);return}const f=(u-o)/.25,[c,h]=P(t,n,2.2);if(!l.burst){l.burst=!0,Q(2);for(let p=0;p<70;p++){const g=Math.random()*at,x=y(.5,3.4);I(t,n,2.2,Math.cos(g)*x,Math.sin(g)*x,y(-.4,1),y(1.1,1.8),_0[p%4],p%5?2:3,1.4,!0,.95)}}mt(!0);const d=Ht();d.globalAlpha=1-f,d.fillStyle=_0[1];const m=6+f*30;d.fillRect(F(c-m),F(h)-1,F(m*2),2),d.fillRect(F(c)-1,F(h-m),2,F(m*2)),d.fillRect(F(c)-4,F(h)-4,8,8),mt(!1)}}),A({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(a,s){const l=r*ue(s),[u,f]=P(t,n),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=72,m=Math.floor(w.T*20);for(let p=0;p<d;p++){const g=q(i+p*3+m);if(g<.3)continue;const x=p/d*at+q(i+p)*.08,b=1-q(i+p*7)*.06;a.globalAlpha=(1-s)*g,a.fillStyle=_0[p%4];const M=g>.85?3:2;a.fillRect(F(u+Math.cos(x)*c*b)-1,F(f+Math.sin(x)*h*b)-1,M,M)}}}),A({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(a,s){const l=s*1.8;for(let u=0;u<26;u++){const f=q(i+u*11)*at,c=Math.sqrt(q(i+u*5))*r,h=ue(c/r)*.9+q(i+u)*.3,d=(l-h)/.5;if(d<0||d>1)continue;const[m,p]=P(t+Math.cos(f)*c,n+Math.sin(f)*c,.3+q(i+u*13)*.8),g=F(2+5*Math.sin(d*Math.PI));a.globalAlpha=Math.sin(d*Math.PI),a.fillStyle=_0[u%4],a.fillRect(F(m)-g,F(p),g*2+1,1),a.fillRect(F(m),F(p)-g,1,g*2+1)}}}),dt(t,n,3,16773312,.9,.6,{delay:o})}const ub=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],fb={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function cb(e){et.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;A({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l&&!l.dead?jn(l):.8,[f,c]=P(t,n,u*.55),h=w.T;if(a<.3){mt(!0);const d=Ht(),m=a/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const g=36-p*8;d.fillRect(F(f-r*(10+p*8+m*10)),F(c-g/2),p?2:3,g)}mt(!1)}i.globalAlpha=a<.65?1:(1-a)/.35;for(let d=0;d<3;d++){const m=ue(Math.min(1,a*1.3)),p=r*(d===1?-.4:1),g=f+p*m*(26+d*10)+Math.sin(a*14+d*2+o)*4,x=c-4-m*(24+d*9)+Math.sin(a*21+d)*3;sr(i,ub[Math.floor(h*22)+d&1],g,x,d===1?2:3,fb)}}})}const Mo=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function hb(e,t,n,r,o){for(let i=0;i<6;i++){const a=o+i/6*at,s=Math.cos(a),l=Math.sin(a)*.5;for(let u=0;u<=r;u+=2)e.fillRect(F(t+s*u)-1,F(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+s*r*u,c=n+l*r*u,h=r*(.32-u*.18);for(const d of[-1,1]){const m=a+d*.9,p=Math.cos(m),g=Math.sin(m)*.5;for(let x=2;x<=h;x+=2)e.fillRect(F(f+p*x)-1,F(c+g*x)-1,2,2)}}}}function db(e){et.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Us("frost_guard","radius",4.5),o=Math.random()*99,i=.55,a=1.25,s=72,l=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),c=[];for(let h=0;h<s;h++)l[h]=h/s*at+(q(o+h)-.5)*.06,u[h]=14+q(o+h*7)*18,f[h]=(q(o+h*3)-.5)*.12,c.push(h);c.sort((h,d)=>Math.sin(l[h])-Math.sin(l[d])),A({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(h,d){const[m,p]=P(t,n),g=ue(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;h.globalAlpha=.22*x,ft(t,n,r*g,null,"rgba(170,225,255,1)"),h.globalAlpha=.7*x,ft(t,n,r*g,Mo[2],null,2,[3,4]),h.globalAlpha=.85*x,h.fillStyle=Mo[1];for(let b=0;b<12;b++){const M=o+b/12*at,v=r*g*(.55+.4*q(o+b));for(let S=.3;S<v;S+=.22){const[_,T]=P(t+Math.cos(M)*S,n+Math.sin(M)*S);if(h.fillRect(F(_)-1,F(T)-1,2,2),(S*10|0)%2){const[R,C]=P(t+Math.cos(M+.5)*(S+.12),n+Math.sin(M+.5)*(S+.12));h.fillRect(F(R),F(C),2,1);const[O,z]=P(t+Math.cos(M-.5)*(S+.12),n+Math.sin(M-.5)*(S+.12));h.fillRect(F(O),F(z),2,1)}}}h.globalAlpha=x,h.fillStyle=d<.12?Mo[0]:Mo[1],hb(h,m,p,26,o+d*1.2)}}),A({type:"custom",layer:"top",dur:a,x:t,y:n,draw(h,d){const m=d*a,p=ue(Math.min(1,m/i)),g=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(a-i-.2)):1,b=(M,v,S,_,T)=>{h.fillStyle=Mo[4],h.beginPath(),h.moveTo(M-_-1,v+1),h.lineTo(M-_*.6,v-S*.7),h.lineTo(M+T,v-S-1),h.lineTo(M+_*.6,v-S*.7),h.lineTo(M+_+1,v+1),h.closePath(),h.fill(),h.fillStyle=Mo[2],h.beginPath(),h.moveTo(M-_,v),h.lineTo(M-_*.6+1,v-S*.7),h.lineTo(M+T,v-S),h.lineTo(M,v),h.closePath(),h.fill(),h.fillStyle=Mo[3],h.beginPath(),h.moveTo(M,v),h.lineTo(M+T,v-S),h.lineTo(M+_*.6-1,v-S*.7),h.lineTo(M+_,v),h.closePath(),h.fill(),h.fillStyle=Mo[0],h.fillRect(F(M+T)-1,F(v-S),2,3),h.fillStyle=Mo[1],h.fillRect(F(M-_*.5),F(v-S*.6),1,F(S*.45))};h.globalAlpha=1;for(const M of c){const v=l[M],S=Math.cos(v),_=Math.sin(v),T=u[M]*(.55+.45*p)*x;if(T<2)continue;const[R,C]=P(t+S*g*(.84+f[M]),n+_*g*(.84+f[M]));b(R,C,T*.5,3+T*.08,S*2);const[O,z]=P(t+S*g*(1+f[M]),n+_*g*(1+f[M]));b(O,z,T,3+T*.12,S*3),m<i&&!(M&3)&&(h.globalAlpha=.85,h.fillStyle=Mo[0],h.fillRect(F(O)-4,F(z)-1,8,2),h.globalAlpha=1)}}});for(let h=0;h<46;h++){const d=Math.random()*at,m=Math.sqrt(Math.random())*r;I(t+Math.cos(d)*m,n+Math.sin(d)*m,y(.8,1.8),y(-.3,.3),y(-.3,.3),y(-.2,.1),y(1,1.6),h%3?"#ffffff":"#c8f0ff",2,.25,h%4===0,.97)}dt(t,n,r*1.05,9102591,.95,.9),Q(4)}const Br=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function mb(e){et.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),a=Math.min(.38,.12+i*.04),s=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:a+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(a+.05)/a),[c,h]=P(t,n,.65),[d,m]=P(r,o,.55),p=d-c,g=m-h,x=Math.hypot(p,g)||1,b=p/x,M=g/x,v=-M,S=b,_=c+p*f,T=h+g*f;for(let R=0;R<2;R++)for(let C=0;C<22;C++){const O=C*5,z=Math.sin(C*.7-w.T*28+s+R*Math.PI)*(2+C*.45),E=C<6?3:2;l.globalAlpha=(1-C/22)*.85,l.fillStyle=Br[C<5?1:C<13?2:3],l.fillRect(F(_-b*(O+40)+v*z-E/2),F(T-M*(O+40)+S*z-E/2),E,E)}l.globalAlpha=.28,l.fillStyle=Br[2];for(let R=0;R<44;R+=4)l.fillRect(F(_-b*R)-4,F(T-M*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?Br[0]:R<30?Br[1]:Br[2],l.fillRect(F(_-b*R+v*.5)-1,F(T-M*R+S*.5)-1,3,3);for(let R=0;R<14;R++){const C=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?Br[0]:Br[1];for(let O=-C;O<=C;O+=1.5)l.fillRect(F(_+b*(12-R)+v*O),F(T+M*(12-R)+S*O),2,2)}l.fillStyle=Br[0];for(let R=-4;R<=4;R++)l.fillRect(F(_-b*36+v*R*1.5)-1,F(T-M*36+S*R*1.5)-1,2,2)}}),A({type:"custom",layer:"top",add:!0,dur:.85,delay:a,x:r,y:o,draw(l,u,f){const[c,h]=P(r,o,.55);if(!f.hit){f.hit=!0,Q(3);for(let d=0;d<14;d++){const m=Math.random()*at,p=y(1,3);I(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,y(.2,1.5),.45,Br[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=Br[0];for(let p=-m;p<=m;p+=2){const g=m-Math.abs(p);l.fillRect(F(c+p),F(h-g*.7),2,2),l.fillRect(F(c+p),F(h+g*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*at+u*3.2+s,p=6+ue(u)*26,g=c+Math.cos(m)*p,x=h+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const M=m-b*.25,v=p-b*2;l.fillStyle=Br[b===0?0:b<2?1:2],l.fillRect(F(c+Math.cos(M)*v)-1,F(h+Math.sin(M)*v*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=Br[0],l.fillRect(F(g)-1,F(x)-1,3,3)}}}),dt(r,o,1.6,8060880,.85,.5,{delay:a}),dt(t,n,1,8060880,.4,.25)}const ts=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function pb(e){et.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,a]=P(t,n),s=(.35+1.25*ue(o))*N.HW*Math.SQRT2,l=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const c=l+u*at/4+f,h=s*(1-f*.25);r.fillStyle=f<.3?ts[0]:ts[3],r.fillRect(F(i+Math.cos(c)*h)-1,F(a+Math.sin(c)*h*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*at,i=y(1,2.2);I(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,y(1.5,3),y(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function _y(e,t,n,r){const o=w.T-(t._cyS||w.T),i=Math.min(1,o/.3),[a,s]=P(t.x,t.y),l=2.5*N.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(a-9*u,s),e.lineTo(a-43*u,s-l),e.lineTo(a+43*u,s-l),e.lineTo(a+9*u,s),e.closePath(),e.fill());for(let c=0;c<f;c++){const h=c/(f-1),d=s-l*h,m=(9+h*34)*u+Math.sin(n*3+c)*2,p=m*.32,g=n*(8-h*3)+c*.9,x=a+Math.sin(n*2.2+h*3)*h*6;for(let b=0;b<at;b+=.12){const M=b+g,v=Math.sin(M);if(v>0!==r)continue;const S=(b*3/at+c*.37)%1;S>.72||(e.globalAlpha=(r?.9:.55)*(1-h*.3),e.fillStyle=S<.18?ts[0]:S<.45?ts[1]:ts[2],e.fillRect(F(x+Math.cos(M)*m)-2,F(d+v*p)-1,4,3))}}for(let c=0;c<6;c++){const h=n*6.5+c*1.05,d=Math.sin(h);if(d>0!==r)continue;const m=(n*.55+c*.17)%1,p=s-l*m,g=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=c%2?"#6aa040":"#8a6a40",e.fillRect(F(a+Math.cos(h)*g)-1,F(p+d*g*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,ft(t.x,t.y,.55,ts[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function yb(e){for(let t=0;t<6;t++)A({type:"puff",x:e.x+y(-.4,.4),y:e.y+y(-.4,.4),r:y(12,20),dur:y(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*at,r=y(1,2.5);I(e.x,e.y,y(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,y(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const gb=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],xb={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function Mb(e){et.sfx("item_reflect",e.x,e.y,1),A({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),i=o&&o.scale||1,[a,s]=P(r.x,r.y,(o?jn(o):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*at+n*1.2,c=34*i*Math.max(0,l),h=a+Math.cos(f)*c,d=s+Math.sin(f)*c*.55;t.save(),t.translate(F(h),F(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),sr(t,gb,0,0,2,xb),t.restore()}if(n>.3&&n<.6){mt(!0);const u=Ht(),f=(n-.3)/.3*at;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(F(a+Math.cos(f)*34*i)-3,F(s+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(F(a+Math.cos(f)*34*i)-1,F(s+Math.sin(f)*34*i*.55)-3,2,6),mt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*at,r=y(1,2.5);I(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}dt(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function bb(e,t,n){const r=t.scale||1,[o,i]=P(t.x,t.y,jn(t)*.4),a=26*r,s=(n*1.4+t.id)%at;for(let l=0;l<6;l++){const u=n*1.6+l/6*at,f=Math.sin(u),c=F(o+Math.cos(u)*a),h=F(i+f*a*.4),d=Math.abs(((u-s)%at+at)%at)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(c-2,h-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(c-1,h-4,2,7),e.fillStyle="#d02a3a",e.fillRect(c+1,h-2,1,4)}e.globalAlpha=1}const vr=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function vb(e){et.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Us("veil_discord","radius",3),o=.5,i=Math.random()*9,a=96;w.game,Us("veil_discord","dur",14),A({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(s,l){const u=Math.min(1,l*(o+.14)/o),f=2.4*(1-u*u),c=Math.max(0,(l-.78)/.22),h=.6*N.ZK*(1-c);if(!(h<2))for(let d=0;d<2;d++)for(let m=0;m<a;m++){const p=m/a*at,g=Math.sin(p);if(g>0!=(d===1))continue;const[x,b]=P(t+Math.cos(p)*r,n+g*r,f+.6),M=h*(.78+.22*q(i+m)),v=Math.sin(m*1.3+w.T*4)*.5+.5;s.globalAlpha=d?.92:.5,s.fillStyle=vr[3],s.fillRect(F(x)-2,F(b)-1,5,2);for(let S=0;S<M;S+=3){const _=Math.sin(S*.1+w.T*7+m*.4)*(S/M)*3;s.fillStyle=S<3?vr[0]:v>.66?vr[1]:v>.25?vr[2]:vr[3],s.fillRect(F(x+_)-2,F(b+S),4,3)}}}}),A({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(s,l){const[u,f]=P(t,n),c=r*N.HW*Math.SQRT2,h=r*N.HH*Math.SQRT2;s.globalAlpha=.35*(1-l),ft(t,n,r*(.9+.1*l),null,vr[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){s.globalAlpha=(1-m)*.9,s.fillStyle=d?vr[1]:vr[0];for(let p=0;p<at;p+=.05){const g=(.3+.75*m)*(1+Math.sin(p*7+d*2+w.T*6)*.06);s.fillRect(F(u+Math.cos(p)*c*g)-1,F(f+Math.sin(p)*h*g)-1,3,2)}}}}}),A({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(s,l,u){if(!u.done){u.done=!0,Q(3);for(let f=0;f<10;f++){const c=f/10*at;A({type:"puff",x:t+Math.cos(c)*r*.9,y:n+Math.sin(c)*r*.9,r:y(12,20),dur:y(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const c=Math.random()*at,h=Math.sqrt(Math.random())*r;I(t+Math.cos(c)*h,n+Math.sin(c)*h,.1,0,0,y(.6,1.6),y(.6,1),vr[f%3],2,-.2,!0)}}}}),dt(t,n,r*1.1,13656319,.7,.9,{delay:o})}function wb(e,t,n){const[r,o]=P(t.x,t.y,jn(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,a=F(11*i);for(let s=-a;s<=a;s+=2){const l=(s+a)/(a*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+F(5*q(t.id+s*3))+Math.sin(l*Math.PI)*3,c=F(o-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=vr[3],e.fillRect(F(r+s)-1,c-1,3,f+2),e.fillStyle=s/2%2?vr[2]:vr[1],e.fillRect(F(r+s),c,2,f),e.fillStyle=vr[0],e.fillRect(F(r+s),c,2,1)}Math.random()<.04&&I(t.x+y(-.15,.15),t.y+y(-.15,.15),jn(t)+.05,0,0,-.3,.6,vr[2],2,1,!1)}const Y1=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],K1={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function Sb(e){et.sfx("item_mekansm",e.x,e.y,1),A({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),[i,a]=P(r.x,r.y,(o?jn(o):.6)+.12),s=n<.12?ue(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(F(i-24*s),F(a)),t.rotate(l),sr(t,Y1,0,0,F(4*s)||1,K1),t.restore(),t.save(),t.translate(F(i+4*s),F(a-16*s)),t.rotate(-l*1.33+.35),sr(t,Y1,0,0,F(3*s)||1,K1),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)A({type:"puff",x:r.x+y(-.2,.2),y:r.y+y(-.2,.2),r:y(8,12),dur:y(.5,.8),col:[235,235,240]})}}}),A({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=en(r),i=o?jn(o):.8,a=o&&o.scale||1;for(let s=0;s<2;s++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*at*2+s*Math.PI,[c,h]=P(r.x,r.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":s?"#ffe07a":"#8aff9a",t.fillRect(F(c+Math.cos(f)*24*a-d/2),F(h+Math.sin(f)*8*a-d/2),d,d)}if(n>.45){const s=(n-.45)/.55,[l,u]=P(r.x,r.y,i+.1+s*.5);t.globalAlpha=1-s,t.fillStyle="#c8ffd0",t.fillRect(F(l)-1,F(u)-5,3,11),t.fillRect(F(l)-5,F(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(F(l),F(u),1,1)}}}),dt(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const _b=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),Ab={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},Da=["#fff6c0","#ffd24a","#d89a20"];function Tb(e){et.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?Z(e.uid):null,o=r?r.x:t,i=r?r.y:n,a=.34;A({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(s,l){const[u,f]=P(o,i,.6),[c,h]=P(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;s.globalAlpha=Math.sin(m*Math.PI)*.9,s.fillStyle=Da[d%2],s.fillRect(F(u+(c-u)*m)-1,F(f+(h-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(s,l,u){const f=Math.min(1,l/a),c=2.3-1.4*ue(f),[h,d]=P(t,n,c);if(s.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,sr(s,_b,h+(f<1?Math.sin(l*30)*1.5:0),d,4,Ab),!u.hit&&f>=1){u.hit=!0,Q(3);for(let m=0;m<22;m++){const p=Math.random()*at,g=y(.6,2.4);I(t,n,.5,Math.cos(p)*g,Math.sin(p)*g,y(2.5,4.5),y(.7,1.1),Da[m%3],3,9,m%3===0,.97)}A({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[g,x]=P(t,n);for(let v=0;v<9;v++){const S=(v-4)*5+Math.sin(v*2.7)*2,_=(60+70*q(v*3.1))*Math.min(1,p*4+.1),T=x-_-p*30;for(let R=0;R<_;R+=3){const C=1-R/_;m.globalAlpha=(1-p)*(1-C*.85),m.fillStyle=R<6?Da[0]:Da[1],m.fillRect(F(g+S),F(T+R),2,2)}}const b=F(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=F(x-34);m.globalAlpha=1-p,m.fillStyle=Da[0],m.fillRect(F(g)-b,M,b*2,2),m.fillRect(F(g)-1,M-b,2,b*2),m.fillRect(F(g)-3,M-2,6,6)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,ft(t,n,.3+1.1*ue(p),Da[1],null,3,[2,3])}})}}}),dt(t,n,2,16765514,1,.7,{delay:a})}function Rb(e){et.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=Us("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),a=new Float32Array(r+1);for(let s=0;s<r;s++){const l=s/r*at+.6;i[s]=t+Math.cos(l)*1.1,a[s]=n+Math.sin(l)*1.1}i[r]=t,a[r]=n,A({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(s,l){s.globalAlpha=1-l,s.lineDashOffset=w.T*30,ft(t,n,.5+1*ue(l),"#c8d0e0",null,2,[4,6]),s.lineDashOffset=0,ft(t,n,.4+.8*ue(l),"#9ad8ff",null,1.5)}}),A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,l,u){const f=ue(Math.min(1,l/.42)),c=Math.max(0,(l-.48)/.45);for(let h=0;h<=r;h++){const d=t+(i[h]-t)*f,m=n+(a[h]-n)*f,[p,g]=P(d,m,.05),x=(1-f)*4*Math.PI+h,b=F(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,v=F(g-M),S=F(M*Math.min(1,c));if(S>=M)continue;s.globalAlpha=1,s.fillStyle="#2a3040",s.fillRect(F(p)-b-2,v+S-2,b*2+4,M-S+2),s.fillStyle="#c8d0e0",s.fillRect(F(p)-b-1,v+S-1,b*2+2,M-S),s.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",s.fillRect(F(p)-b+1,v+S+1,b*2-2,M-S-4),s.fillStyle="#ffffff";const _=(w.T*40+h*13+o*10)%(M+20)-10;for(let T=0;T<4;T++){const R=F(v+_+T*2);R>v+S&&R<v+M-3&&s.fillRect(F(p)-b+2+T,R,Math.max(1,F(b*.5)),1)}c>0&&Math.random()<.7&&I(d+y(-.12,.12),m+y(-.12,.12),(M-S)/N.ZK,y(-.2,.2),y(-.2,.2),y(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let h=0;h<=r;h++)A({type:"custom",layer:"top",add:!0,dur:.25,x:i[h],y:a[h],draw(d,m,p){const[g,x]=P(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(F(g)-18,F(x)-22,36,2),d.fillRect(F(g)-18,F(x)+6,36,2),d.fillRect(F(g)-1,F(x)-30,2,44)}})}}}),dt(t,n,2,10148095,.75,.8)}const $r=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function Cb(e){et.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,a=Us("abyssal_blade","stun",2),s=Math.random()*99,l=28,u=new Float32Array(l);for(let h=0;h<l;h++)u[h]=(h%2?.34:.5)+q(s+h)*.14;A({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(h,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const g=m-p*.06;if(g<0)break;const[x,b]=P(t+(r-t)*g,n+(o-n)*g,.5+Math.sin(g*Math.PI)*1.1),M=F(10-p);h.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),h.fillStyle=$r[2],h.fillRect(F(x)-M/2-1,F(b)-M/2-1,M+2,M+2),h.fillStyle=$r[0],h.fillRect(F(x)-M/2,F(b)-M/2,M,M)}}});const f=a+.35,c=h=>h<i?0:h<i+.12?ue((h-i)/.12):h>f-.3?Math.max(0,(f-h)/.3):1;A({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(h,d,m){const p=d*f,g=c(p);if(g<=0)return;if(!m.hit&&p>=i){m.hit=!0,Q(6);for(let M=0;M<18;M++){const v=Math.random()*at,S=y(1.5,3.5);I(r,o,.3,Math.cos(v)*S,Math.sin(v)*S,y(1,3),.5,M%3?$r[3]:$r[2],3,6,!0)}}h.fillStyle=$r[1];for(let M=0;M<8;M++){const v=s+M/8*at;for(let S=.45;S<.45+.5*g;S+=.07){const _=v+(q(s+M*5+(S*20|0))-.5)*.5,[T,R]=P(r+Math.cos(_)*S,o+Math.sin(_)*S);h.fillRect(F(T)-1,F(R)-1,2,2)}}h.beginPath();for(let M=0;M<=l;M++){const v=M%l/l*at,[S,_]=P(r+Math.cos(v)*u[M%l]*g,o+Math.sin(v)*u[M%l]*g);M?h.lineTo(F(S),F(_)):h.moveTo(F(S),F(_))}h.fillStyle=$r[0],h.fill();for(let M=0;M<l;M++){const v=M/l*at,S=(M+1)/l*at,[_,T]=P(r+Math.cos(v)*u[M]*g,o+Math.sin(v)*u[M]*g),[R,C]=P(r+Math.cos(S)*u[(M+1)%l]*g,o+Math.sin(S)*u[(M+1)%l]*g);for(let O=0;O<1;O+=.2)h.fillStyle=Math.sin(v)<0?$r[3]:$r[2],h.fillRect(F(_+(R-_)*O)-1,F(T+(C-T)*O)-1,2,2)}const[x,b]=P(r,o);for(let M=0;M<10;M++){const v=(w.T*.9+M/10)%1,S=M*2.4+v*5,_=(1-v)*22*g;h.globalAlpha=v,h.fillStyle=$r[3],h.fillRect(F(x+Math.cos(S)*_)-1,F(b+Math.sin(S)*_*.5)-1,2,2)}}}),A({type:"custom",layer:"top",dur:f,x:r,y:o,draw(h,d){const m=d*f,p=c(m);if(p<=0)return;const[g,x]=P(r,o,.42),b=ue(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const v=M/5*at+s,[S,_]=P(r+Math.cos(v)*.36*p,o+Math.sin(v)*.36*p),T=Math.sin(w.T*6+M*1.7)*2,R=S+(g-S)*.55*b+T,C=_-(_-x)*b*p-8*b,O=S+Math.cos(v)*16*b,z=_-(_-x)*.7*b*p;for(let E=0;E<2;E++)for(let U=0;U<=1;U+=.06){const G=1-U,K=G*G*S+2*G*U*O+U*U*R,L=G*G*_+2*G*U*z+U*U*C,k=U<.5?5:U<.8?4:3;E?(h.fillStyle=U>.85?$r[3]:$r[2],h.fillRect(F(K)-1,F(L)-1,2,2)):(h.fillStyle=$r[0],h.fillRect(F(K-k/2)-1,F(L-k/2)-1,k+2,k+2))}}}}),dt(r,o,1.6,9059071,.6,.6,{delay:i})}const Di={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},Xs={blue:6996223,red:16743002,neutral:16765514};function Pb(e){et.sfx("tp_start",e.x,e.y,1);const t=Z(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=Di[r]||Di.blue,i=e.ex===void 0?e.x:e.ex,a=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:w.T,dur:n,ex:i,ey:a,team:r});const s=l=>{const u=Z(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};A({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=P(i,a),m=w.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,ft(i,a,1.05,o[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,ft(i,a,.8,o[1],null,3,[7,5]),l.lineDashOffset=-m*40,ft(i,a,.5,o[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const M=b/4*at+Math.PI/4,v=(m*(1.2+c*1.5)+b*.25)%1,S=1.65-v*.75,[_,T]=P(i+Math.cos(M)*S,a+Math.sin(M)*S);l.globalAlpha=p*Math.sin(v*Math.PI),l.fillStyle=o[1];const R=h-_,C=d-T,O=Math.hypot(R,C)||1,z=-C/O,E=R/O;for(let U=0;U<6;U++)l.fillRect(F(_+R/O*U+z*(6-U))-1,F(T+C/O*U+E*(6-U))-1,2,2),l.fillRect(F(_+R/O*U-z*(6-U))-1,F(T+C/O*U-E*(6-U))-1,2,2)}l.globalAlpha=p,l.fillStyle=o[0];const g=.8*N.HW*Math.SQRT2,x=.8*N.HH*Math.SQRT2;for(let b=0;b<8;b++){const M=b/8*at-m*.6;mh(l,h+Math.cos(M)*g*1.18,d+Math.sin(M)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,dt(i,a,1.2+.6*c,Xs[r]||Xs.blue,.35+.4*c,.32))}}),A({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=P(i,a),m=40+120*c,p=F(3+5*c+Math.sin(w.T*18)*1);for(let g=0;g<m;g+=3)l.globalAlpha=(1-g/m)*(.35+.5*c),l.fillStyle=g%12<3?o[0]:o[1],l.fillRect(F(h)-p,F(d-g)-3,p*2,3);for(let g=0;g<5;g++){const x=(w.T*.8+g/5)%1,b=w.T*4+g*1.3;l.globalAlpha=Math.sin(x*Math.PI)*c,l.fillStyle=o[0],l.fillRect(F(h+Math.cos(b)*14)-1,F(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function Ay(e,t,n){const r=w.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),a=Di[o.team||e.team]||Di.blue,s=e.scale||1;if(!t){const[l,u]=P(e.x,e.y),f=.8*N.HW*Math.SQRT2*s,c=.8*N.HH*Math.SQRT2*s;mt(!0);const h=Ht();h.globalAlpha=.6,ft(e.x,e.y,.8*s,a[3],null,2);for(let d=0;d<at*i;d+=.07){const m=d-Math.PI/2;h.globalAlpha=.95,h.fillStyle=d>at*i-.3?a[0]:a[1],h.fillRect(F(l+Math.cos(m)*f)-1,F(u+Math.sin(m)*c)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,g=d*at/3+p*3-r*(2+i*4);h.globalAlpha=1-p*.7,h.fillStyle=m<3?a[0]:m<7?a[1]:a[2],h.fillRect(F(l+Math.cos(g)*f*(1-p*.8))-1,F(u+Math.sin(g)*c*(1-p*.8))-1,3,3)}h.globalAlpha=1,mt(!1),j1(e,i,a,s,!1),(e._tpL||0)<r-.25&&(e._tpL=r,dt(e.x,e.y,1.1+i,Xs[o.team||e.team]||Xs.blue,.4+.45*i,.32,{uid:e.id}));return}j1(e,i,a,s,!0),Math.random()<.3+i*.4&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(0,.4),0,0,y(1.2,2.4),.5,a[Math.random()*3|0],2,-.5,!0)}function j1(e,t,n,r,o){const i=w.T,a=jn(e),[s,l]=P(e.x,e.y);mt(!0);const u=Ht();for(let f=0;f<3;f++){const c=(i*(.8+t*1.4)+f/3)%1,h=l-c*a*1.15*N.ZK,d=(24-c*8)*r,m=d*.32;u.globalAlpha=Math.sin(c*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<at;p+=.2)Math.sin(p)>0===o&&u.fillRect(F(s+Math.cos(p)*d)-1,F(h+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,mt(!1)}function Ib(e){const t=Z(e.uid),n=e.team||t&&t.team||"blue",r=Di[n]||Di.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),et.sfx("tp_end",o,i,1),A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(a,s){const[l,u]=P(e.x,e.y),f=F(16*(1-s))+1,c=60+140*s;for(let h=0;h<c;h+=3)a.globalAlpha=(1-s)*(1-h/c),a.fillStyle=h<c*s?r[0]:r[1],a.fillRect(F(l)-f,F(u-h)-3,f*2,3);a.globalAlpha=1-s,ft(e.x,e.y,.9*(1-s)+.05,r[1],null,3)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(a,s,l){const[u,f]=P(o,i),c=Math.min(1,s/.14),h=f-320,d=h+(f-h)*c,m=F(s<.14?10:10+14*(1-(s-.14)/.86)*Math.sin(Math.min(1,(s-.14)*4)*Math.PI));if(a.globalAlpha=s<.45?1:(1-s)/.55,a.fillStyle=r[1],a.fillRect(F(u)-m,F(h),m*2,F(d-h)),a.fillStyle=r[0],a.fillRect(F(u)-F(m*.4),F(h),F(m*.8),F(d-h)),!l.hit&&c>=1){l.hit=!0,Q(4);for(let p=0;p<26;p++){const g=Math.random()*at,x=y(1.5,4);I(o,i,.2,Math.cos(g)*x,Math.sin(g)*x,y(.5,2.5),.55,r[p%3],3,3,!0)}A({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,g){p.globalAlpha=1-g,ft(o,i,.3+1.6*ue(g),r[1],null,6*(1-g)+1),ft(o,i,.2+1*ue(g),r[0],null,2,[3,3])}})}}}),dt(o,i,2.6,Xs[n]||Xs.blue,1,.65)}function Ob(e){const t=Z(e.uid),n=t&&t.team||"blue",r=Di[n]||Di.blue;t&&(t._tp=null),et.sfx("tp_cancel",e.x,e.y,1),A({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[a,s]=P(e.x,e.y);for(let l=0;l<3;l++){const u=(1-ue(Math.min(1,i*2)))*(20+l*22),f=22+i*10,c=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let h=0;h<at;h+=.22)q(l*31+h*7)<c||o.fillRect(F(a+Math.cos(h)*f)-1,F(s-u+Math.sin(h)*f*.32+(i>.5?(i-.5)*30*q(h*13+l):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*at,a=y(.8,2);I(e.x,e.y,y(.3,1),Math.cos(i)*a,Math.sin(i)*a,y(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)A({type:"puff",x:e.x+y(-.3,.3),y:e.y+y(-.3,.3),r:y(10,14),dur:y(.4,.6),col:[140,140,150]})}function Ty(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function zb(e,t,n){const r=w.game&&w.game.player,o=r===e,[i,a]=P(e.x,e.y),s=e.scale||1,l=Ht();if(t&2){const u=.75*N.HW*Math.SQRT2*s,f=.75*N.HH*Math.SQRT2*s,c=(n*2+e.id)%at;for(let h=0;h<7;h++){const d=h/7*at-n*.5,m=F(i+Math.cos(d)*u),p=F(a+Math.sin(d)*f),g=Math.abs(((d-c)%at+at)%at)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=g?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=g?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}o&&(l.globalAlpha=.12,ft(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,ft(e.x,e.y,.5*s,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,o&&(l.globalAlpha=.1,ft(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*N.HW*Math.SQRT2*s,f=.95*N.HH*Math.SQRT2*s;mt(!0);const c=Ht();for(let h=0;h<5;h++){const d=n*.7+h/5*at,m=F(i+Math.cos(d)*u),p=F(a+Math.sin(d)*f-3-Math.sin(n*2+h)*2);c.globalAlpha=.65,c.fillStyle="#c8f0ff",c.fillRect(m-2,p,5,1),c.fillRect(m,p-2,1,5),c.fillRect(m-1,p-1,1,1),c.fillRect(m+1,p+1,1,1),c.fillRect(m+1,p-1,1,1),c.fillRect(m-1,p+1,1,1)}c.globalAlpha=1,mt(!1),o&&(l.globalAlpha=.12,ft(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&I(e.x+y(-.5,.5),e.y+y(-.5,.5),y(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function Fb(e,t,n){const[r,o]=P(t.x,t.y,jn(t)+.12),i=F(r-14*(t.scale||1)),a=F(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,a-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,a-6,4,3);for(let s=0;s<9;s++){const l=F(Math.sin(n*7-s*.7+t.id)*2),u=F(10-s*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+s*2,a-3+l,2,u+2),e.fillStyle=s%3?"#c03050":"#ff6a7a",e.fillRect(i+2+s*2,a-2+l,2,u)}e.globalAlpha=1}function Eb(e,t){t.banner&&Math.random()<.025&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function Lb(e){const t=w.game&&w.game.player,n=e.uid!==void 0?Z(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&He(n))return!0;switch(e.type){case"item_crit":return f4(e),!0;case"item_chain":return c4(e),!0;case"item_bash":return m4(e),!0;case"item_berserk":return x4(e),!0;case"item_bloodlust":return v4(e),!0;case"item_drain":return S4(e),!0;case"item_hex":return _4(e),!0;case"item_refresh":return P4(e),!0;case"item_immune":return I4(e),!0;case"item_spellblock":return z4(e),!0;case"item_push":return F4(e),!0;case"ward_place":return t&&e.team===t.team&&U4(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&X4(e),!0;case"mon_howl":return G4(e),!0;case"mon_spores":return B4(e),!0;case"mon_rootslam":return $4(e),!0;case"camp_buff":return q4(e),!0;case"item_wand":return j4(e),!0;case"item_phase":return Q4(e),!0;case"item_arcane":return eb(e),!0;case"item_clarity":return ib(e),!0;case"item_dust":return lb(e),!0;case"item_evade":return cb(e),!0;case"item_frostwave":return db(e),!0;case"item_lance":return mb(e),!0;case"item_cyclone":return pb(e),!0;case"item_reflect":return Mb(e),!0;case"item_veil":return vb(e),!0;case"item_mekansm":return Sb(e),!0;case"item_midas":return Tb(e),!0;case"item_mirror":return Rb(e),!0;case"item_abyss":return Cb(e),!0;case"tp_start":return Pb(e),!0;case"tp_end":return Ib(e),!0;case"tp_cancel":return Ob(e),!0}return!1}function kb(e){const t=e.status||{},n=w.T;(e.aura||e.auraFx)&&E4(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&V4(e,t,n);const r=Ty(e);if(r&&zb(e,r,n),(t.banner||t.cuirass||t.frostAura)&&Eb(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=w.T),_y(Ht(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,yb(e)),t.tp?Ay(e,!1):e._tp&&w.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),ru(e,t,"phase")?Z4(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);mt(!0);const i=Ht();i.globalAlpha=.3+.25*o,ft(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,mt(!1),Math.random()<.3&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),.05,0,0,y(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function Db(e,t){const n=t.status||{},r=w.T;n.bloodlust&&w4(e,t,r),n.immune&&O4(t,r),n.cyclone&&_y(e,t,r,!0),n.tp&&Ay(t,!0),ru(t,n,"reflect")&&bb(e,t,r),ru(t,n,"veil")&&wb(e,t,r),Ty(t)&1&&Fb(e,t,r),ru(t,n,"clarity")&&Math.random()<.05&&I(t.x+y(-.25,.25),t.y+y(-.25,.25),jn(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(A4(t,r),t._hexV=1):t._hexV&&(t._hexV=0,T4(t))}const et={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},Tn={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let ph=null;const Ql=e=>Tn[ph&&ph[e]||e]||Tn.fire,Wr=e=>{const t=Ql(e);return t[Math.random()*t.length|0]};let fo=[],Aa=[],Gs=[],Ir=[],Gu=1,yh=1;function Ub(){return{parts:fo.length,efx:Aa.length,decals:Gs.length,amb:Ir.length,dynL:oi.length}}function Tl(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function Ry(){fo=[],Aa=[],Gs=[],Ir=[],oi.length=0}const oi=[],Xb=64,A0=new Map;function zd(e){if(typeof e=="number")return e;let t=A0.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return A0.size>500&&A0.clear(),A0.set(e,t),t}function dt(e,t,n,r,o=.8,i=.4,a){oi.length>=Xb&&oi.shift(),oi.push({x:e,y:t,r:n,col:zd(r),a:o,life:i,max:i,uid:a&&a.uid||0,delay:a&&a.delay||0})}function Gb(e,t,n=1){let r=0;for(let o=oi.length-1;o>=0&&r<t;o--){const i=oi[o];if(i.delay>0)continue;const a=i.life/i.max,s=i.a*n*Math.min(1,a*1.6);let l=i.x,u=i.y;if(i.uid){const f=Z(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*a),i.col,s),r++}}const fc=new Map,Oa=192,Ua=new Float32Array(Oa),cc=new Float32Array(Oa),hc=new Float32Array(Oa),dc=new Float32Array(Oa),mc=new Float32Array(Oa),pc=new Float32Array(Oa);function Nb(e,t,n=1){fc.clear();let r=0;for(const o of fo){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let a=fc.get(i);if(a===void 0){if(r>=Oa)continue;a=r++,fc.set(i,a),Ua[a]=cc[a]=hc[a]=dc[a]=mc[a]=pc[a]=0}const s=o.life/o.max*o.size,l=zd(o.col);Ua[a]+=s,cc[a]+=o.x*s,hc[a]+=o.y*s,dc[a]+=(l>>16&255)*s,mc[a]+=(l>>8&255)*s,pc[a]+=(l&255)*s}for(let o=0;o<t;o++){let i=-1,a=6;for(let h=0;h<r;h++)Ua[h]>a&&(a=Ua[h],i=h);if(i<0)break;const s=Ua[i];Ua[i]=0;let l=dc[i]/s,u=mc[i]/s,f=pc[i]/s;const c=Math.max(l,u,f,1);l=l/c*255,u=u/c*255,f=f/c*255,e(cc[i]/s,hc[i]/s,1.1+Math.min(2.2,Math.sqrt(s)*.28),l<<16|u<<8|f,Math.min(.85,s*.018)*n)}}const yc={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function I(e,t,n,r,o,i,a,s,l=2,u=0,f=!1,c=.94){Gu<1&&Math.random()>Gu||fo.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:c})}function Ge(e,t,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;I(e,t,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,a*(.6+Math.random()*.6),Wr(r),u+(Math.random()<.3?1:0),4,l)}}function Q(e){w.cam.shake=Math.max(w.cam.shake,e*yh)}let Fd="";function A(e){return e.t=0,e.tag=Fd||e.type,Aa.push(e),Bb(e),e}function Bb(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":dt(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":dt(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":dt(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":dt(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":dt(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&dt(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":dt(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function So(e){e.t=0,Gs.push(e)}const Q1={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},Z1=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),$b=new Set(["gato","zorra"]),Hb={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function J1(e){const t=Ql(e.col&&Tn[e.col]?e.col:"gold"),n=e.uid?Z(e.uid):null;if(e.type==="windup"){et.sfx(Hb[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";A({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,r&&e.radius)ft(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(o&&e.radius)ft(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!o&&e.range){const c=e.ex-u,h=e.ey-f,d=Math.hypot(c,h)||1,m=Math.min(e.range,d)*a,[p,g]=P(u,f,.1),[x,b]=P(u+c/d*m,f+h/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,g),i.lineTo(x,b),i.stroke(),i.setLineDash([])}ft(u,f,.35+.35*a,t[0],null,2)}}),A({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=Z(s.uid),[u,f]=P(l?l.x:s.x,l?l.y:s.y,.75);for(let c=0;c<10;c++){const h=c/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[c%t.length],i.fillRect(Math.round(u+Math.cos(h)*d-2),Math.round(f+Math.sin(h)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(Ge(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),et.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(A({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const a=Z(i.uid);if(!a||!a.channel&&o>.05){i.t=i.dur;return}const s=e.radius||1.2,l=w.T;r.globalAlpha=.7,ft(i.x,i.y,s,t[1],null,3),ft(i.x,i.y,s*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[c,h]=P(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(c-3),Math.round(h-3),6,6)}n&&Math.random()<.5&&I(n.x,n.y,.9,y(-.5,.5),y(-.5,.5),y(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),et.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?A({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(Ge(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),et.sfx("deny",e.x,e.y,.4)):Ge(e.x,e.y,.6,e.col&&Tn[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function t2(e,t){const n=t?Z(t):null,r=n&&n.status&&n.status.transform;if(!r||!r.mount)return e;const o=window.AUDIO_EPIC;return o&&o.has&&o.has(e+"_m")?e+"_m":e}function Wb(e){const t=Ql(e.type.slice(5)&&Tn[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;A({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(a,s,l){const[u,f]=P(l.x,l.y,.55),c=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-c/2),Math.round(f-c/2),Math.round(c),Math.round(c)),a.fillStyle=t[1];for(let h=0;h<6;h++){const d=h/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*c),Math.round(f+Math.sin(d)*c*.7),3,3)}}});for(let a=0;a<10;a++)I(o,i,.5,n*y(1.5,4)+y(-.8,.8),r*y(1.5,4)+y(-.8,.8),y(0,1),.3,t[a%t.length],3,0,!0);Q(1.5)}function qb(){Vb(),Fd=""}function Vb(){const e=w.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0,Fd=(n.hero?n.hero+":":"")+n.type+(n.key?":"+n.key:"");const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(Gu=r?1:.4,yh=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const u=n.hero&&n.key?H[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&et.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),u)try{if(u(n)!==!1)continue}catch(f){console.error(f)}J1(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){J1(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&Wb(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?H[o]:void 0,a=o&&n.type!=="heal"&&!n.impact,s=o&&Sa[n.type]?Sa[n.type](n):void 0,l=s!==void 0?s:o?a?"ab_"+o:n.impact&&!i?Q1[n.type]:null:Q1[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&et.babble(n.hero,"ult",n.x,n.y),l&&et.sfx(l,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const u=t[n.hero]&&t[n.hero].abil[n.key],f=u&&yc[u.fx],c=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;f!==void 0&&dt(n.x+(n.ux||0)*c,n.y+(n.uy||0)*c,n.radius?n.radius*1.15+.5:c?n.range*.85+.6:1.6,f,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(u){console.error(u)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(Lb(n))continue}catch(u){console.error(u);continue}if(!o&&n.hero&&typeof n.type=="string"&&H[n.hero+"_ev_"+n.type])try{if(H[n.hero+"_ev_"+n.type](n)!==!1)continue}catch(u){console.error(u);continue}switch(n.type){case"fire":{A({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let u=0;u<90;u++){const f=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,c=(.4+Math.random())*n.range*2.4;I(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(f)*c,Math.sin(f)*c,Math.random()*1.2,.5,Wr("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}So({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),Q(3);break}case"quake":{A({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),A({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let u=0;u<50;u++){const f=Math.random()*6.28,c=Math.random()*n.range*2.5;I(n.x,n.y,.1,Math.cos(f)*c,Math.sin(f)*c,1+Math.random()*2,.7,Wr("quake"),3,6,!1)}Q(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const u=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;yc[n.type]!==void 0&&dt(n.x,n.y,n.radius*1.2+.4,yc[n.type],n.type==="firering"?1:.75,.6),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:Ql(u)[1],w:7}),A({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:Ql(u)[0],w:3,delay:.08}),n.type==="roar"&&(A({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),Q(8)),n.type==="firering"&&(A({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),Q(9),So({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&So({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&So({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const f=n.type==="spores"?40:90;for(let c=0;c<f;c++){const h=Math.random()*Math.PI*2,d=n.radius*(1.6+Math.random()*1.6);I(n.x,n.y,.2,Math.cos(h)*d,Math.sin(h)*d,Math.random()*2,.6,Wr(u),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let c=0;c<14;c++)A({type:"puff",x:n.x+y(-1,1)*n.radius*.7,y:n.y+y(-1,1)*n.radius*.7,r:y(14,26),dur:y(.7,1.3),col:[140,210,90]});break}case"heal":A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let u=0;u<16;u++)I(n.x+y(-.4,.4),n.y+y(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Wr("heal"),3,0,!0);break;case"shield":case"stoneskin":A({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":A({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let u=0;u<12;u++)A({type:"puff",x:n.x+y(-.6,.6),y:n.y+y(-.6,.6),r:y(12,22),dur:y(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const u=n.type==="firedash"?"fire":"dust",f=n.ex||n.x+(n.ux||0)*(n.range||0),c=n.ey||n.y+(n.uy||0)*(n.range||0);for(let h=0;h<30;h++){const d=h/30;I(n.x+(f-n.x)*d+y(-.2,.2),n.y+(c-n.y)*d+y(-.2,.2),.15,y(-.5,.5),y(-.5,.5),y(.3,1.2),.5+d*.4,Wr(u),4,0,u==="fire")}A({type:"streak",x:n.x,y:n.y,ex:f,ey:c,dur:.35,col:u==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const u=n.ex||n.x,f=n.ey||n.y;A({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),A({type:"flash",x:u,y:f,r:1.1,dur:.3,col:"rgba(220,170,255,"}),A({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.3,col:"#d8a8ff"}),Ge(n.x,n.y,.4,"arcane",16,2,.5),Ge(u,f,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let u=0;u<20;u++){const f=Math.random()*6.28,c=Math.random()*n.radius;I(n.x+Math.cos(f)*c,n.y+Math.sin(f)*c,.1,0,0,2,.6,Wr("arcane"),2,0,!0)}break;case"starfall":for(let u=0;u<18;u++)A({type:"meteor",x:n.x+y(-1,1)*n.radius*.8,y:n.y+y(-1,1)*n.radius*.8,dur:.35,delay:u*.02});A({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),Ge(n.x,n.y,.2,"arcane",70,6,.8,3),So({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),Q(10);break;case"slash":A({type:"xslash",x:n.x,y:n.y,dur:.35}),Ge(n.x,n.y,.5,"blood",20,4,.5,2,!1),Ge(n.x,n.y,.5,"slash",14,4,.4),Q(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.kind==="minion"||n.proj)){let f=n.proj&&n.pkey||"A";f==="V"&&(f="A",n.volley=1);const c=e._off!==void 0;if(f==="A"&&Qe[n.hero]){let d=!1;if(!(n.proj&&Z1.has(n.hero+"_A"))||c)try{d=Qe[n.hero](n)===!0}catch(m){console.error(m)}!d&&(!$b.has(n.hero)||c)&&et.sfx(t2("atk_"+n.hero,n.uid),n.x,n.y,n.big?1:.8);break}if(f!=="A"&&Z1.has(n.hero+"_"+f)&&!c){et.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);break}const h=f!=="A"?H[n.hero+"_"+f+"_hit"]:void 0;if(h){et.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);try{h(n)}catch(d){console.error(d)}break}}if(!n.hero){let f=!1;try{f=Qo.hit(n)}catch(c){console.error(c)}if(f){f!=="snd"&&et.sfx(n.big?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8);break}}const u=n.col&&Tn[n.col]?n.col:n.hero==="dragon"?"fire":"slash";A({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Tn[u][0]}),Ge(n.x,n.y,.45,u,n.big?10:5,n.big?3:2,.35,1.5,!0,2),et.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&Q(2);break}case"shoot":if(n.kind==="hero"&&n.hero){et.sfx(t2("shot_"+n.hero,n.uid),n.x,n.y,.6);break}if(!n.hero){let u=!1;try{u=Qo.shoot(n)}catch(f){console.error(f)}if(u)break}et.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":if(!n.hero){let u=!1;try{u=Qo.hit(n)}catch(f){console.error(f)}if(u)break}A({type:"jaws",x:n.x,y:n.y,dur:.35}),Ge(n.x,n.y,.3,"bite",24,3,.5),Q(5);break;case"transform":{if(n.hero&&H[n.hero+"_T"]){et.sfx("tf_"+n.hero,n.x,n.y,1);try{H[n.hero+"_T"](n)}catch(c){console.error(c)}break}const u=n.kind==="fire",f=u?[255,140,50]:[255,220,90];A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:f}),A({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:u?"#ff9a3a":"#ffe070",w:6}),Ge(n.x,n.y,.6,u?"fire":"gold",70,5,.9,3,!0,4),Q(n.uid===(e.player&&e.player.id)?10:4),et.sfx("roar",n.x,n.y,.8);break}case"levelup":A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),A({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":if(n.kind==="hero"&&Object.keys(H).some(u=>{if(!u.endsWith("_death"))return!1;try{return H[u](n)===!0}catch(f){return console.error(f),!1}}))break;n.kind==="hero"?(n.sprite&&et.babble(n.sprite==="slime"&&(Z(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),Ge(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),A({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),et.sfx("death",n.x,n.y)):n.kind==="minion"?(Ge(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),et.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(Ge(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),et.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let u=0;u<26;u++){const f=Math.random()*6.28,c=y(1.5,5);I(n.x+y(-.3,.3),n.y+y(-.3,.3),y(.8,2.2),Math.cos(f)*c,Math.sin(f)*c,y(3,9),y(1.2,2),Wr("stone"),Math.random()*4+4|0,14,!1,.97)}for(let u=0;u<14;u++)A({type:"puff",x:n.x+y(-1.2,1.2),y:n.y+y(-1.2,1.2),r:y(26,46),dur:y(1.2,2.2),col:[150,140,130]});A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),So({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),et.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),et.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&et.say(n.monster==="serpent"?"serpent":"boss"),Ge(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let u=0;u<30;u++)I(n.x,n.y,1,y(-4,4),y(-4,4),y(3,8),1.4,Wr("stone"),5,12,!1);A({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),A({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),Q(14);break;case"killbanner":{const u=e.player,f=u&&n.uid===u.id;if(A({type:"wisp",x:n.x,y:n.y,dur:1.6}),Ge(n.x,n.y,.8,"gold",f?40:14,4,.9,3,!0,3),!n.hero)break;const c=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],h=n.big===1,d=n.big===2,m=n.dur||0,p=h?"first":n.skill>=2?"multi":d?"ace":m>=7?"godlike":m>=5?"unstoppable":m===4?"rampage":m===3?"spree":"kill",x=p==="multi"?c[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[p],b=u&&n.team===u.team;et.banner(x,b?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(h||d||n.skill>=2||f));const M=u&&u.heroKey===n.kind&&u.dead&&n.team!==u.team,v=["","","double","triple","quadra","penta"];et.say(p==="first"?"first_blood":p==="multi"?v[Math.min(5,n.skill)]:p==="kill"?M?"you_died":b?"kill":"ally_killed":p),f&&Q(6);break}case"runespawn":et.say("rune");break;case"chrono":A({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(u,f,c){u.globalAlpha=.35*(f>.9?(1-f)*10:1),ft(c.x,c.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[h,d]=P(c.x,c.y,0);for(let m=0;m<12;m++){const p=m/12*6.283;u.fillStyle="#ffffff",u.fillRect(Math.round(h+Math.cos(p)*n.radius*46),Math.round(d+Math.sin(p)*n.radius*23),3,3)}}}),Q(5);break;case"hook_pull":A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),Ge(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":A({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),Ge(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),Q(3);break;case"pet_fade":if(Object.keys(H).some(u=>{if(!u.endsWith("_petfade"))return!1;try{return H[u](n)===!0}catch(f){return console.error(f),!1}}))break;Ge(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":et.sfx("item_blink",n.x,n.y),Ge(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),Ge(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":et.sfx("item_shield",n.x,n.y,.7),A({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),Ge(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":et.sfx("item_purge",n.x,n.y),A({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),Ge(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":et.sfx("item_invis",n.x,n.y),Ge(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":et.sfx("item_drum",n.x,n.y);for(let u=0;u<3;u++)A({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:u*.14});Q(3);break;case"item_freeze":et.sfx("item_freeze",n.ex,n.ey),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),Ge(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const u=e.player;if(!u||n.team!==u.team)break;const f=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let c=0;c<3;c++)A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:f,w:4,delay:c*.18});A({type:"pingmark",x:n.x,y:n.y,dur:3,col:f,kind:n.kind}),et.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":{let u=!1;try{u=Qo.laser(n)}catch(f){console.error(f)}if(u){et.sfx("tower",n.ex,n.ey,.7);break}}A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),Ge(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),et.sfx("tower",n.ex,n.ey,.7);break;case"rooted":A({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const u=e.player&&e.winner===e.player.team;et.play(u?"victory":"defeat",1),et.say(u?"victory":"defeat")}else et.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":A({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}Gu=1,yh=1,ph=null}function Yb(e){for(const t of fo)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);Tl(fo,t=>t.life>0),fo.length>2500&&fo.splice(0,fo.length-2500);for(const t of Aa)t.t+=e;Tl(Aa,t=>t.t<t.dur+(t.delay||0));for(const t of Gs)t.t+=e;Tl(Gs,t=>t.t<t.dur);for(const t of oi)t.delay>0?t.delay-=e:t.life-=e;Tl(oi,t=>t.life>0),w.cam.shake=Math.max(0,w.cam.shake-e*30)}let gc=6,Xa=0;function Kb(e,t,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=N,f=window.MAP,c=w.T;if(gc-=e,gc<=0&&(Xa=y(.6,1),gc=y(8,16)),Xa=Math.max(0,Xa-e*.25),w.wind=.35+.15*Math.sin(c*.4)+Xa,Xa>.3&&Math.random()<Xa*.9){const h=n+Math.random()*o,m=t-20-u,p=(m/a+h/s)/2,g=(h/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];Ir.push({k:"leaf",x:p,y:g,z:y(.4,2.2),ph:Math.random()*6,life:y(2.5,4),col:x,sp:y(9,15)})}if(Ir.length<70&&Math.random()<.8){const h=t+Math.random()*r,d=n+Math.random()*o,m=h-u,p=d,g=(m/a+p/s)/2,x=(p/s-m/a)/2;if(g>1&&x>1&&g<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(g)];b===0||b===4?Ir.push({k:"fly",x:g,y:x,z:y(.2,.9),ph:Math.random()*6,life:y(4,9),vx:y(-.3,.3),vy:y(-.3,.3)}):b===3&&Ir.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:y(.4,1),max:1})}}for(const h of Ir)h.life-=e,h.k==="leaf"&&(h.x+=h.sp*e*.5,h.y-=h.sp*e*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=y(-.6,.6)*e,h.vy+=y(-.6,.6)*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=Math.sin(c*2+h.ph)*.003);if(Tl(Ir,h=>h.life>0),Ir.length>160&&Ir.splice(0,Ir.length-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,m]=P(h.x,h.y);d>t&&d<t+r&&m>n&&m<n+o+100&&I(h.x+y(-.4,.4),h.y+y(-.4,.4),1.4,y(-.3,.3),y(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let X,ou,wi=null;function e2(e,t){X=ou=e,wi=t||null}function Oe(e){if(!wi){X.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(X===wi)return;wi.setTransform(ou.getTransform()),wi.globalAlpha=ou.globalAlpha,wi.globalCompositeOperation="lighter",wi.imageSmoothingEnabled=!1,X=wi}else X=ou}function ft(e,t,n,r,o,i=2,a){const{HW:s,HH:l}=N,[u,f]=P(e,t);X.beginPath(),X.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(X.fillStyle=o,X.fill()),r&&(X.lineWidth=i,X.strokeStyle=r,a&&X.setLineDash(a),X.stroke(),X.setLineDash([]))}function xc(e,t,n){X.beginPath(),e.forEach(([r,o],i)=>{const[a,s]=P(r,o);i?X.lineTo(a,s):X.moveTo(a,s)}),X.closePath(),X.fillStyle=n,X.fill(),X.strokeStyle=t,X.lineWidth=2,X.stroke()}function jb(){for(const e of Gs){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];ft(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&ft(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&ft(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function Cy(e,t){if(t>1)return;e.add&&Oe(!0),X.save();const n=performance.now();try{e.draw(X,t,e)}catch(o){console.error(o)}const r=performance.now()-n;r>2&&Ou("fxSlow",1,(e.tag||e.type)+" "+r.toFixed(1)+"ms"),X.restore(),e.add&&Oe(!1)}function mt(e){Oe(e)}function Ht(){return X}function Qb(){const{HW:e}=N;for(const t of Aa){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&Cy(t,r);continue}if(t.type==="ring")X.globalAlpha=Math.max(0,1-r),ft(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),X.globalAlpha=1;else if(t.type==="cone"){const[o,i]=P(t.x,t.y),a=Math.atan2(t.uy,t.ux);X.save(),Oe(!0),X.globalAlpha=Math.max(0,.75*(1-r)),X.beginPath(),X.moveTo(o,i);for(let f=0;f<=16;f++){const c=a-t.angle+2*t.angle*f/16,h=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=P(t.x+Math.cos(c)*h,t.y+Math.sin(c)*h);X.lineTo(d,m)}X.closePath();const[s,l]=P(t.x+t.ux*t.range,t.y+t.uy*t.range),u=X.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),X.fillStyle=u,X.fill(),Oe(!1),X.restore()}else if(t.type==="cracks"){X.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,X.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(t.angle,3)*1.6;X.beginPath();let[s,l]=P(t.x,t.y);X.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,c=a+(q(t.seed+i*7+u)-.5)*.6;[s,l]=P(t.x+Math.cos(c)*f,t.y+Math.sin(c)*f),X.lineTo(s,l)}X.stroke()}}else if(t.type==="flash"){const[o,i]=P(t.x,t.y,.3),a=t.r*e*1.3;Oe(!0);const s=X.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,t.col+.8*(1-r)+")"),s.addColorStop(1,t.col+"0)"),X.fillStyle=s,X.fillRect(o-a,i-a,a*2,a*2),Oe(!1)}else if(t.type==="streak"){const[o,i]=P(t.x,t.y,.4),[a,s]=P(t.ex,t.ey,.4);Oe(!0),X.strokeStyle=t.col,X.globalAlpha=Math.max(0,.9*(1-r)),X.lineWidth=8*(1-r)+1,X.beginPath(),X.moveTo(o,i),X.lineTo(a,s),X.stroke(),X.globalAlpha=1,Oe(!1)}else if(t.type==="puff"){const[o,i]=P(t.x,t.y,.3+r*.4),a=t.col;X.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=t.r*(.6+r*.7);X.beginPath(),X.ellipse(o,i,s,s*.75,0,0,7),X.fill()}}Py("ground")}function Py(e){for(const t in Cu){X.save();try{Cu[t](e)}catch(n){console.error(n)}Oe(!1),X.restore()}}function Zb(){const e=w.T;for(const t of Aa){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&Cy(t,r);continue}const o=t.uid?Z(t.uid):null,i=o?o.x:t.x,a=o?o.y:t.y;if(t.type==="pillar"){const[s,l]=P(i,a),u=t.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));Oe(!0);const h=X.createLinearGradient(s,l,s,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),X.fillStyle=h,X.fillRect(s-18,l-f,36,f),Oe(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=P(i,a,.35),u=t.col;Oe(!0),X.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,X.lineWidth=2,X.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,X.beginPath(),X.ellipse(s,l,34,38,0,0,7),X.fill(),X.stroke();for(let f=0;f<6;f++){const c=e*1.5+f*1.05;X.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,X.fillRect(s+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}Oe(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[s,l]=P(i,a,.3);X.strokeStyle="rgba(160,255,190,0.7)",X.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;X.beginPath(),X.ellipse(s,l,26,12,0,f,f+1.4),X.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[s,l]=P(i,a);X.strokeStyle="#4a7a2a",X.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;X.beginPath(),X.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),X.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),X.stroke()}X.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;X.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=P(t.x,t.y,3*(1-r));Oe(!0),X.strokeStyle="rgba(240,200,255,0.9)",X.lineWidth=4,X.beginPath(),X.moveTo(s-18,l-50),X.lineTo(s,l),X.stroke(),X.fillStyle="#ffffff",X.fillRect(s-3,l-3,6,6),Oe(!1)}else if(t.type==="xslash"){const[s,l]=P(t.x,t.y,.5),u=40*Math.min(1,r*3);X.globalAlpha=Math.max(0,1-r),X.strokeStyle="#ffffff",X.lineWidth=6,X.beginPath(),X.moveTo(s-u,l-u),X.lineTo(s+u,l+u),X.moveTo(s+u,l-u),X.lineTo(s-u,l+u),X.stroke(),X.strokeStyle="#ff4040",X.lineWidth=2,X.stroke(),X.globalAlpha=1}else if(t.type==="spark"){const[s,l]=P(t.x,t.y,.45),u=(t.big?16:10)*(1-r);Oe(!0),X.fillStyle=t.col,X.fillRect(s-u,l-1,u*2,3),X.fillRect(s-1,l-u,3,u*2),X.fillRect(s-u*.5,l-u*.5,u,u),Oe(!1)}else if(t.type==="jaws"){const[s,l]=P(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));X.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",X.lineWidth=5,X.beginPath(),X.arc(s,l-u,24,.2,Math.PI-.2),X.stroke(),X.beginPath(),X.arc(s,l+u,24,Math.PI+.2,-.2),X.stroke()}else if(t.type==="pingmark"){const[s,l]=P(t.x,t.y,.9+Math.sin(e*6)*.05);Jb(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),X.beginPath(),X.moveTo(s,l+14),X.lineTo(s-9,l-2),X.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),X.closePath(),X.fill(),X.stroke(),X.fillStyle="#120c1a",X.font="bold 13px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",s,l-6),X.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=P(t.x,t.y,.5+r*2);Oe(!0),X.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",X.beginPath(),X.arc(s+Math.sin(r*12)*6,l,7,0,7),X.fill(),Oe(!1)}}Py("top")}function Jb(e,t){X.globalAlpha=t,X.fillStyle=e,X.strokeStyle="#120c1a",X.lineWidth=2}function tv(){const{HW:e,HH:t,OX:n,ZK:r}=N;for(const o of fo){if(o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r;X.globalAlpha=Math.min(1,o.life/o.max*1.5),X.fillStyle=o.col,X.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}X.globalAlpha=1,Oe(!0);for(const o of fo){if(!o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r,s=Math.min(1,o.life/o.max*1.5);X.globalAlpha=s*.35,X.fillStyle=o.col,X.fillRect(Math.round(i-o.size),Math.round(a-o.size),o.size*2,o.size*2),X.globalAlpha=s,X.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}X.globalAlpha=1,Oe(!1)}function ev(){const e=w.T,{HW:t,HH:n,OX:r,ZK:o}=N;for(const i of Ir){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;X.fillStyle="#00000040",X.fillRect(a-l/2+2,s+2,l,3),X.fillStyle=i.col,X.fillRect(a-l/2,s,l,3)}Oe(!0);for(const i of Ir){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);X.fillStyle=`rgba(210,255,120,${.25*l})`,X.fillRect(a-3,s-3,6,6),X.fillStyle=`rgba(250,255,200,${.9*l})`,X.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));X.fillStyle=`rgba(255,255,255,${.7*l})`,X.fillRect(a-1,s,3,1),X.fillRect(a,s-1,1,3)}}Oe(!1)}function nv(e){if(typeof e!="string"||!/^\d+[QWERAV]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function rv(){const{HW:e,HH:t}=N,n=w.T;for(const r of w.game.projs){const o=r.z||.45,[i,a]=P(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=nv(r.look||r.fx),u=l?Pe[l]:void 0;if(u){X.save();try{u(X,r,i,a,s,n)}catch(c){console.error(c)}X.restore(),Oe(!1);continue}if(!l){X.save();let c=!1;try{c=Qo.proj(X,r,i,a,s,n)}catch(h){console.error(h)}if(X.restore(),Oe(!1),c)continue}const f=Tn[r.fx]||Tn.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;X.save(),X.translate(i,a),X.rotate(s),X.fillStyle="#3a2a1a",X.fillRect(-c,-2,c,4),X.fillStyle="#e8d8b0",X.fillRect(-c,-1,c,2),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(5,0),X.lineTo(-2,-4),X.lineTo(-2,4),X.fill(),X.fillStyle="#e05050",X.fillRect(-c-3,-3,5,2),X.fillRect(-c-3,1,5,2),X.restore(),r.skill&&I(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")X.save(),X.translate(i,a),X.rotate(n*25),X.fillStyle="#1a1020",X.fillRect(-9,-3,18,6),X.fillStyle="#e0e8f0",X.fillRect(-8,-2,14,4),X.fillStyle="#c8a040",X.fillRect(-10,-3,4,6),X.restore();else if(r.fx==="root")X.fillStyle="#5a3a20",X.beginPath(),X.arc(i,a,7,0,7),X.fill(),X.fillStyle="#8ad050",X.beginPath(),X.arc(i+3,a-3,4,0,7),X.fill(),I(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;Oe(!0);const h=X.createRadialGradient(i,a,0,i,a,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),X.fillStyle=h,X.fillRect(i-c*2.4,a-c*2.4,c*4.8,c*4.8),Oe(!1),X.fillStyle=f[0],X.fillRect(i-3,a-3,6,6),Math.random()<.8&&I(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const Lt=Math.round,Dn=Math.PI*2;let gt=0,xt=0;function ke(e,t,n=0){gt=(e-t)*N.HW+N.OX,xt=(e+t)*N.HH-n*N.ZK}function Ct(e,t,n,r,o){e.fillStyle=o,e.fillRect(Lt(t-r/2),Lt(n-r/2),r,r)}function Me(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Lt(t+(r-t)*l/s-i/2),Lt(n+(o-n)*l/s-i/2),i,i)}function gh(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Lt(t-a/2),Lt(n+i*o),Lt(a),Math.max(1,Lt(2*o)))}}const fi=e=>e<0?0:e>1?1:e,oo=e=>1-(1-e)*(1-e),xr=(e,t)=>e<t?1:(1-e)/(1-t),n2={b:{d:"#1a3c78",m:"#3c86e0",l:"#8cc8ff",w:"#dcefff"},r:{d:"#7a1a18",m:"#d8443a",l:"#ff9a84",w:"#ffe6dc"},n:{d:"#4a4a52",m:"#8a8a96",l:"#c8c8d0",w:"#ececf0"}},r2={b:{k:"#0e3a66",d:"#1e6ab0",m:"#4ab8f0",l:"#a8ecff",w:"#e2faff",n:7001343},r:{k:"#6a1a08",d:"#c0401a",m:"#ff8a3a",l:"#ffd08a",w:"#fff2d6",n:16751178}},Mf=e=>r2[e]||r2.b,s0=e=>n2[e]||n2.n,Ar={k:"#2e1c0e",d:"#4a2e18",m:"#7a5030",l:"#b08050"},Zr={d:"#4a5260",m:"#9aa6b4",l:"#dfe6ee"},Ns=["#d8c8a8","#b8a07a","#8a7454"],ov=["#8a7a6a","#5a4e44","#b4a490"],es={d:"#7a0e1a",m:"#c41e34",l:"#ff5a70"},Mc={d:"#3a1a40",m:"#7a3a80",fang:"#f4e8ee"},il={d:"#2a2a7a",m:"#4a5ad0",l:"#8a9af0",spot:"#a8f0ff"},Ga={bark:"#4a3420",barkL:"#7a5a34",leaf:["#3e7a2a","#5aa040","#8ad050"]},Hi={k:"#12302e",shell:"#2a9a8a",shellL:"#5ad0b8",tip:"#e08a2a",tipL:"#ffc070"},Go={d:"#2a8a6a",m:"#5ac8a0",l:"#a8f0d0",w:"#e0fff2"},Hr={k:"#24242c",d:"#3e3e48",m:"#62626e",l:"#8a8a96",cr:"#9a5ae8",crL:"#d8b8ff",n:11565823},Mi={jaw:"#6a4aa0",jawL:"#a07ad8",fang:"#f6eef6",foam:"#e8fbff",wat:["#c8f4f0","#6ac0d0","#2a80a0"]},uo={y:"#ffc83a",k:"#2a1a10",wing:"#e8f4ff",honey:"#ffb020",honeyL:"#ffe080",venom:"#c8e050"},Or={k:"#16608a",d:"#2aa6c8",m:"#6ee2f4",l:"#c4f6ff",w:"#f4fdff",n:7267060},al={k:"#3a342a",d:"#746c5c",m:"#a49c8a",l:"#d6cfc0",moss:["#8ac050","#5a8a34"]},T0={d:"#4a4a18",m:"#a8a030",l:"#d8d070"},R0=new Map;function wo(e){let t=R0.get(e);if(t)return t;const n=e.charCodeAt(0)===64?e.slice(1):e,r=n.indexOf(".");return t=r<0?{b:n,t:"n"}:{b:n.slice(0,r),t:n.slice(r+1)||"n"},R0.size>200&&R0.clear(),R0.set(e,t),t}const iu=e=>e==="blue"?"b":e==="red"?"r":"n";function Iy(e){if(e.type==="bite")return wo("serpent.n");if(typeof e.sprite=="string"&&e.sprite.indexOf(".")>0)return wo(e.sprite);if(e.col==="tower_blue"||e.col==="tower_red")return wo(e.col==="tower_red"?"tw.r":"tw.b");const t=e.uid?Z(e.uid):null;if(t&&!t.heroKey){const n=iu(t.team);if(t.kind==="tower")return wo("tw."+n);if(t.kind==="monster"||t.pet)return wo((t.sprite||"slime")+"."+n);if(t.kind==="minion")return wo((t.siege?"sg":e.proj?"mr":"mm")+"."+n)}return e.kind==="tower"?wo("tw."+iu(e.team)):e.kind==="minion"?wo((e.proj?"mr":"mm")+"."+iu(e.team)):null}let no=1,mo=0,Oy=0,zy=0,bf=1,xh=!1;function pi(e){const t=e.uid?Z(e.uid):null;let n=0,r=0;if(xh=!!t,bf=t&&t.scale||1,t){Oy=t.x,zy=t.y;const i=e.x-t.x,a=e.y-t.y;n=(i-a)*N.HW,r=(i+a)*N.HH}const o=Math.hypot(n,r);if(o<.001){const i=Math.random()*Dn;no=Math.cos(i),mo=Math.sin(i)}else no=n/o,mo=r/o}function iv(e,t){const n=e.x,r=e.y,o=s0(t);pi(e);const i=no,a=mo,s=-a,l=i;A({type:"custom",layer:"top",dur:.22,x:n,y:r,draw(u,f){ke(n,r,.42);const c=f<.35?oo(f/.35):1-(f-.35)/.65,h=-12+c*14;u.globalAlpha=xr(f,.55);const d=gt+i*(h-22),m=xt+a*(h-22),p=gt+i*(h-5),g=xt+a*(h-5);if(Me(u,d,m,p,g,2,Ar.m),Me(u,p,g,gt+i*h,xt+a*h,3,Zr.m),Ct(u,gt+i*h,xt+a*h,2,Zr.l),Ct(u,d+i*4+s*2,m+a*4+l*2,3,o.m),Ct(u,d+i*2+s*4,m+a*2+l*4,2,o.l),f>.25&&f<.6){const x=Lt(6*(1-(f-.25)/.35))+1;u.fillStyle=Zr.l,u.fillRect(Lt(gt-x),Lt(xt)-1,x*2,2),u.fillRect(Lt(gt)-1,Lt(xt-x),2,x*2),Ct(u,gt,xt,3,o.w)}}}),I(n,r,.45,y(-.8,.8),y(-.8,.8),y(1,2),.3,o.m,2,9,!1),I(n,r,.45,y(-.8,.8),y(-.8,.8),y(1,2),.3,Ar.l,2,9,!1),I(n,r,.05,y(-.4,.4),y(-.4,.4),.4,.35,Ns[0],3,0,!1,.9)}function av(e,t,n,r,o,i,a){const s=Math.cos(o),l=Math.sin(o),u=-l,f=s,c=(t.id||0)*1.9,h=s0(a);Me(e,n-s*15,r-l*15,n-s*3,r-l*3,2,Ar.m),Ct(e,n-s*9+u,r-l*9+f,1,Ar.l),Me(e,n-s*3,r-l*3,n+s*2,r+l*2,3,Zr.m),Ct(e,n+s*3,r+l*3,2,Zr.l);for(let d=0;d<4;d++){const m=15+d*2.5,p=Math.sin(i*30+c-d*.9)*(1+d*.8);Ct(e,n-s*m+u*p,r-l*m+f*p,2,d<2?h.m:h.l)}}function sv(e,t){const n=e.x,r=e.y,o=s0(t);pi(e);const i=no,a=mo,s=y(9,14),l=-y(9,14);A({type:"custom",layer:"top",dur:.5,x:n,y:r,draw(u,f){if(ke(n,r,.42),u.globalAlpha=xr(f,.6),f<.16){const h=Math.sin(f*120)*1.5;Me(u,gt-i*18,xt-a*18+h,gt-i*3,xt-a*3,2,Ar.m),Ct(u,gt-i*2,xt-a*2,3,Zr.m),Ct(u,gt,xt,4,o.l);return}const c=(f-.16)/.84;for(let h=0;h<2;h++){const d=h?l:s,m=gt-i*(h?14:6)+d*c*1.6,p=xt-a*(h?14:6)-14*c+46*c*c,g=Math.atan2(a,i)+d*c*.9,x=Math.cos(g)*5,b=Math.sin(g)*5;Me(u,m-x,p-b,m+x,p+b,2,h?Ar.m:Ar.l),h?Ct(u,m-x,p-b,2,o.m):Ct(u,m+x,p+b,2,Zr.m)}}}),I(n,r,.45,y(-1,1),y(-1,1),y(1,2),.3,Ar.l,2,10,!1),I(n,r,.45,y(-1,1),y(-1,1),y(1.5,2.5),.35,o.m,2,8,!1)}function lv(e,t,n,r,o,i,a){const s=Math.cos(o),l=Math.sin(o),u=-l,f=s,c=s0(a);Me(e,n-s*22,r-l*22,n-s*4,r-l*4,4,Ar.k),Me(e,n-s*22,r-l*22,n-s*4,r-l*4,2,Ar.m),Me(e,n-s*5+u*4,r-l*5+f*4,n-s*5-u*4,r-l*5-f*4,2,Zr.d),Me(e,n-s*3+u*3,r-l*3+f*3,n-s*3-u*3,r-l*3-f*3,2,Zr.m),Me(e,n-s*1+u*2,r-l*1+f*2,n-s*1-u*2,r-l*1-f*2,2,Zr.m),Ct(e,n+s*2,r+l*2,2,Zr.l);for(const h of[-1,1])Me(e,n-s*22,r-l*22,n-s*17+u*4*h,r-l*17+f*4*h,2,c.m),Ct(e,n-s*23+u*3*h,r-l*23+f*3*h,2,c.l);Math.random()<.4&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.3,.5,Math.random()<.5?"#b4b4c4":"#80808e",3,-.5,!1,.9)}function uv(e,t){const n=e.x,r=e.y,o=s0(t),i=Math.random()*Dn;A({type:"custom",layer:"ground",dur:.7,x:n,y:r,draw(a,s){ke(n,r),a.globalAlpha=xr(s,.4)*.85;for(let u=0;u<5;u++){const f=i+u/5*Dn+(u&1?.3:-.2),c=10+u%3*5;Me(a,gt,xt,gt+Math.cos(f)*c,xt+Math.sin(f)*c*.5,2,Ar.k),Me(a,gt+Math.cos(f)*c,xt+Math.sin(f)*c*.5,gt+Math.cos(f+.4)*(c+6),xt+Math.sin(f+.4)*(c+6)*.5,2,Ar.d)}const l=8+oo(fi(s*1.5))*30;a.globalAlpha=(1-s)*.9;for(let u=0;u<16;u++){const f=i+u/16*Dn;Ct(a,gt+Math.cos(f)*l,xt+Math.sin(f)*l*.5,u&1?4:3,Ns[u%3])}}}),A({type:"custom",layer:"top",dur:.16,x:n,y:r,draw(a,s){ke(n,r,.45);const l=Lt(12*(1-s))+2;a.fillStyle=Zr.l,a.fillRect(Lt(gt-l),Lt(xt)-1,l*2,3),a.fillRect(Lt(gt)-1,Lt(xt-l),3,l*2),Ct(a,gt,xt,5,o.l)}});for(let a=0;a<4;a++)I(n,r,.4,y(-2,2),y(-2,2),y(2,4),y(.4,.6),a&1?Ar.m:Ar.l,3,14,!1,.96);for(let a=0;a<3;a++)I(n+y(-.2,.2),r+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.2,.6),.6,Ns[a],5,0,!1,.9);Q(1.5)}function fv(e){for(let t=0;t<4;t++)I(e.x+y(-.15,.15),e.y+y(-.15,.15),.35,y(-.6,.6),y(-.6,.6),y(.2,.8),.5,t&1?"#b4b4c4":Ns[0],4,-.3,!1,.9)}function Fy(e,t,n,r,o,i,a){const s=Mf(a),l=Math.cos(o),u=Math.sin(o),f=-u,c=l;mt(!0);const h=Ht();for(let d=1;d<=5;d++){const m=8+d*5,p=Math.sin(i*26+d*1.3)*1.5;h.globalAlpha=.6-d*.1,Ct(h,n-l*m+f*p,r-u*m+c*p,5-(d>>1),d<3?s.m:s.d)}h.globalAlpha=.3,Me(h,n-l*6,r-u*6,n+l*4,r+u*4,12,s.d),h.globalAlpha=1,mt(!1),Me(e,n-l*5,r-u*5,n+l*2,r+u*2,7,s.k),Me(e,n-l*9,r-u*9,n+l*7,r+u*7,4,s.d),Me(e,n-l*4,r-u*4,n+l*3,r+u*3,5,s.m),Me(e,n-l*10,r-u*10,n+l*9,r+u*9,2,s.l),Ct(e,n+f*1+l*2,r+c*1+u*2,2,s.w),(i*30|0)%3===0&&Math.random()<.6&&I(t.x,t.y,t.z||1.3,y(-.3,.3),y(-.3,.3),y(-.3,.3),.3,s.l,2,0,!0)}function cv(e,t){const n=e.x,r=e.y,o=Mf(t),i=Math.random()*Dn,a=y(-1,1);A({type:"custom",layer:"top",add:!0,dur:.38,x:n,y:r,draw(s,l){ke(n,r,.45);const u=gt,f=xt;if(l<.35){const h=1-l/.35,d=Lt(14*h)+2;s.globalAlpha=h,s.fillStyle=o.l,s.fillRect(Lt(u-d),Lt(f)-1,d*2,3),s.fillRect(Lt(u)-1,Lt(f-d),3,d*2),Ct(s,u,f,Lt(6*h)+2,o.w)}s.globalAlpha=xr(l,.5);const c=5+oo(l)*24;for(let h=0;h<6;h++){const d=i+h/6*Dn,m=u+Math.cos(d)*c,p=f+Math.sin(d)*c*.7+20*l*l,g=h+a*3+l*9|0;Ct(s,m,p,3,h&1?o.l:o.m),Ct(s,m+(g&1?2:-2),p-2,2,o.d)}}}),A({type:"custom",layer:"ground",add:!0,dur:.42,x:n,y:r,draw(s,l){ke(n,r);const u=8+oo(l)*24,f=u/2;s.globalAlpha=(1-l)*.9,Me(s,gt-u,xt,gt,xt-f,2,o.m),Me(s,gt,xt-f,gt+u,xt,2,o.m),Me(s,gt+u,xt,gt,xt+f,2,o.m),Me(s,gt,xt+f,gt-u,xt,2,o.m),Ct(s,gt-u,xt,3,o.l),Ct(s,gt+u,xt,3,o.l),Ct(s,gt,xt-f,3,o.l),Ct(s,gt,xt+f,3,o.l)}});for(let s=0;s<3;s++)I(n,r,.5,y(-.8,.8),y(-.8,.8),y(1,2),.35,s?o.l:o.m,2,3,!0);dt(n,r,1.1,o.n,.65,.22)}function hv(e,t){const n=e.x,r=e.y,o=Mf(t);A({type:"custom",layer:"top",add:!0,dur:.24,x:n,y:r,draw(i,a){ke(n,r,1.3);const s=1-a,l=Lt(16*s)+3;i.globalAlpha=s,i.fillStyle=o.m,i.fillRect(Lt(gt-l),Lt(xt)-1,l*2,3),i.fillRect(Lt(gt)-1,Lt(xt-l*1.4),3,Lt(l*2.8)),Ct(i,gt,xt,Lt(7*s)+2,o.l);const u=4+a*16;for(let f=0;f<6;f++){const c=f/6*Dn+.5;Ct(i,gt+Math.cos(c)*u,xt+Math.sin(c)*u*.8,2,o.l)}}}),dt(n,r,1.4,o.n,.55,.2)}function dv(e){const t=e.team==="red"?"r":"b",n=Mf(t),r=e.x,o=e.y,i=e.ex,a=e.ey;A({type:"custom",layer:"top",add:!0,dur:.3,x:r,y:o,draw(s,l){ke(r,o,1);const u=gt,f=xt;ke(i,a,.45);const c=gt,h=xt,d=9,m=1-l;let p=u,g=f;for(let x=1;x<=d;x++){const b=x/d,M=x<d?(Math.random()-.5)*12*m:0,v=u+(c-u)*b+M,S=f+(h-f)*b-M*.5;s.globalAlpha=.35*m,Me(s,p,g,v,S,8,n.d),s.globalAlpha=m,Me(s,p,g,v,S,3,n.m),Me(s,p,g,v,S,1,n.w),p=v,g=S}}}),A({type:"custom",layer:"ground",add:!0,dur:.45,x:i,y:a,draw(s,l){ke(i,a);const u=10+l*22;s.globalAlpha=1-l;for(let f=0;f<12;f++){const c=f/12*Dn+l*2;Ct(s,gt+Math.cos(c)*u,xt+Math.sin(c)*u*.5,f&1?2:4,f&1?n.l:n.m)}}});for(let s=0;s<6;s++)I(i,a,.4,y(-1.5,1.5),y(-1.5,1.5),y(1,3),.45,s&1?n.l:n.m,2,5,!0);dt(i,a,1.4,n.n,.8,.3)}function mv(e){const t=e.x,n=e.y;pi(e);const r=bf>1.15,o=r?4:3,i=r?30:22,a=Math.random()<.5?1:-1,s=.62*a,l=.78,u=.78,f=-.62*a;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(c,h){ke(t,n,.5);const d=fi(h*4.5);c.globalAlpha=xr(h,.45);for(let m=0;m<o;m++){const p=(m-(o-1)/2)*6,g=i-Math.abs(m-(o-1)/2)*4,x=gt+u*p-s*g/2,b=xt+f*p-l*g/2,M=x+s*g*d,v=b+l*g*d;Me(c,x+1,b+2,M+1,v+2,2,es.d),Me(c,x,b,M,v,2,"#f2e2cc")}}});for(let c=0;c<3;c++)I(t,n,.5,y(-1,1),y(-1,1),y(.5,1.5),.45,ov[c],2,3,!1,.9);I(t,n,.45,y(-.8,.8),y(-.8,.8),y(1,2),.35,es.m,2,10,!1),r&&Q(1)}function pv(e){const t=e.x,n=e.y;pi(e);const r=xh?Oy:t,o=xh?zy:n;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(i,a){ke(t,n,.5);const s=gt,l=xt;if(a<.4){const u=Lt(9*(1-fi(a*4))),f=a<.25?1:(.4-a)/.15;i.globalAlpha=f;for(const c of[-1,1]){const h=s+c*5;i.fillStyle=Mc.d,i.fillRect(Lt(h-3),Lt(l-u-6),6,2),i.fillRect(Lt(h-3),Lt(l+u+4),6,2),i.fillStyle=Mc.fang,i.fillRect(Lt(h-2),Lt(l-u-4),4,2),i.fillRect(Lt(h-1),Lt(l-u-2),2,3),i.fillRect(Lt(h-1),Lt(l+u+1),2,3)}}for(let u=0;u<3;u++){const f=fi((a-.18-u*.08)/.55);if(f<=0||f>=1)continue;const c=t+(r-t)*f,h=n+(o-n)*f;ke(c,h,.5+Math.sin(f*Math.PI)*.35),i.globalAlpha=1,Ct(i,gt,xt,3,u?es.m:es.l),Ct(i,gt,xt-2,1,es.l)}}}),I(t,n,.45,y(-.6,.6),y(-.6,.6),y(.5,1.5),.4,es.d,2,10,!1),I(t,n,.5,y(-.4,.4),y(-.4,.4),y(.2,.6),.35,Mc.m,2,0,!1,.9)}function yv(e){const t=e.x,n=e.y;pi(e);const r=bf>1.1,o=r?1.4:1,i=[y(-8,-3),y(-3,1),y(3,8),y(-6,-1),y(-1,3),y(1,6),y(-2,2),y(-6,-3)];A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(a,s){ke(t,n,.45+s*.25),a.globalAlpha=xr(s,.3)*.85;for(let l=0;l<4;l++){const u=(3+oo(fi(s*2-l*.12))*(6+l))*o;a.fillStyle=l===3?il.l:l&1?il.m:il.d,gh(a,gt+i[l]*o*1.6,xt+i[l+4]*o-s*6*l,u,.8)}s<.2&&(a.globalAlpha=1,Ct(a,gt,xt,4,il.spot))}});for(let a=0;a<3;a++)I(t+y(-.2,.2),n+y(-.2,.2),.5,y(-.3,.3),y(-.3,.3),y(.4,.9),y(.6,.9),il.spot,2,-.2,!0,.95)}function gv(e){const t=e.x,n=e.y;pi(e);const r=no>=0?1:-1;A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(o,i){ke(t,n,.5);const a=gt-r*6,s=xt+4,l=fi(i*3.2),u=-Math.PI/2-r*1.2;o.globalAlpha=xr(i,.5);const f=8,c=24;for(let h=0;h<=f*l;h++){const d=u+r*(h/f)*1.9,m=a+Math.cos(d)*c,p=s+Math.sin(d)*c*.8;Ct(o,m,p,5,Ga.bark),Ct(o,m-1,p-1,2,Ga.barkL),h===(f*l|0)&&(Ct(o,m+3,p-3,4,Ga.leaf[1]),Ct(o,m-3,p-4,3,Ga.leaf[2]))}}}),A({type:"custom",layer:"ground",dur:.5,delay:.09,x:t,y:n,draw(o,i){ke(t,n);const a=8+oo(i)*26;o.globalAlpha=(1-i)*.85;for(let s=0;s<14;s++){const l=s/14*Dn;Ct(o,gt+Math.cos(l)*a,xt+Math.sin(l)*a*.5,s&1?3:4,Ns[(s>>1)%3])}}});for(let o=0;o<4;o++)I(t+y(-.2,.2),n+y(-.2,.2),.8,y(-.8,.8),y(-.8,.8),y(.5,1.2),y(.8,1.1),Ga.leaf[o%3],3,1.6,!1,.9);for(let o=0;o<2;o++)I(t,n,.45,y(-1.5,1.5),y(-1.5,1.5),y(1.5,2.5),.4,Ga.barkL,2,12,!1);Q(1.2)}function xv(e){const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){ke(t,n,.45);const i=1-fi(o*4);r.globalAlpha=xr(o,.55);for(const a of[-1,1]){const s=gt+a*(10+i*8),l=xt;for(let u=0;u<6;u++){const f=-Math.PI/2+u/5*(Math.PI/2)*1.1,c=s-a*Math.cos(f)*10,h=l+Math.sin(f)*8;Ct(r,c,h,u<3?4:3,Hi.k),Ct(r,c,h,2,u<3?Hi.shell:Hi.tip)}Ct(r,s-a*10,l+1,2,Hi.tipL)}if(o>.22&&o<.45){r.fillStyle=Hi.tipL;const a=Lt((.45-o)*30);r.fillRect(Lt(gt-a),Lt(xt)-1,a*2,2),r.fillRect(Lt(gt)-1,Lt(xt-a),2,a*2)}}});for(let r=0;r<3;r++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.2),.35,r?Hi.shellL:Hi.tip,2,10,!1)}function Mv(e){const t=e.x,n=e.y,r=Math.random()*Dn;A({type:"custom",layer:"ground",dur:.8,x:t,y:n,draw(o,i){ke(t,n);const a=(i<.15?i/.15:1-(i-.15)*.5)*12;o.globalAlpha=xr(i,.4)*.6,o.fillStyle=Go.d,gh(o,gt,xt,a+2,.5),o.fillStyle=Go.m,gh(o,gt-2,xt-1,a,.5),Ct(o,gt-a*.4,xt-2,2,Go.w)}}),A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(o,i){ke(t,n,.42);const a=4+oo(i)*16,s=i<.5?4:3;o.globalAlpha=xr(i,.5);for(let l=0;l<6;l++){const u=r+l/6*Dn,f=gt+Math.cos(u)*a,c=xt+Math.sin(u)*a*.7+8*i*i;Ct(o,f,c,s,Go.m),Ct(o,f-1,c-1,2,Go.l)}i<.3&&(Ct(o,gt,xt,6,Go.m),Ct(o,gt-1,xt-1,3,Go.w))}});for(let o=0;o<3;o++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1.5,2.8),.45,o?Go.m:Go.l,3,12,!1)}function bv(e){const t=e.x,n=e.y;pi(e);const r=bf>1.3,o=Math.random()*Dn;A({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,a){ke(t,n),i.globalAlpha=xr(a,.4)*.8;for(let s=0;s<3;s++){const l=o+s*2.1,u=r?20:14;Me(i,gt,xt,gt+Math.cos(l)*u,xt+Math.sin(l)*u*.5,2,Hr.k),Ct(i,gt+Math.cos(l)*u,xt+Math.sin(l)*u*.5,2,Hr.cr)}}}),A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){ke(t,n,.45);const s=gt,l=xt;if(i.globalAlpha=xr(a,.5),a<.3){const f=1-a/.3,c=Lt((r?14:10)*(.6+f*.4));i.fillStyle=Hr.k,i.fillRect(Lt(s-c/2-no*6*f)-1,Lt(l-c/2-mo*6*f)-1,c+2,c+2),i.fillStyle=Hr.m,i.fillRect(Lt(s-c/2-no*6*f),Lt(l-c/2-mo*6*f),c,c),i.fillStyle=Hr.l,i.fillRect(Lt(s-c/2-no*6*f),Lt(l-c/2-mo*6*f),c,2)}const u=6+oo(a)*20;for(let f=0;f<5;f++){const c=o+f/5*Dn,h=s+Math.cos(c)*u,d=l+Math.sin(c)*u*.6-12*Math.sin(a*Math.PI);Ct(i,h,d,3,f&1?Hr.cr:Hr.crL),Ct(i,h,d+2,2,Hr.cr)}}});for(let i=0;i<3;i++)I(t,n,.4,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,i?Hr.d:Hr.m,4,14,!1,.95);I(t,n,.5,y(-.6,.6),y(-.6,.6),y(1,2),.4,Hr.crL,2,4,!0),dt(t,n,.8,Hr.n,.4,.18),Q(r?2:1)}function vv(e){const t=e.x,n=e.y,r=Math.random()*Dn,o=window.SIM&&window.SIM.MONSTERS&&window.SIM.MONSTERS.serpent,i=o&&o.aoe||1.3;A({type:"custom",layer:"top",dur:.42,x:t,y:n,draw(a,s){ke(t,n,.5);const l=gt,u=xt,f=22*(1-oo(fi(s*3)));a.globalAlpha=xr(s,.45);for(const c of[-1,1]){const h=u+c*(f+6);for(let d=0;d<=10;d++){const m=d/10*Math.PI,p=l-Math.cos(m)*24,g=h+c*Math.sin(m)*8;Ct(a,p,g,5,Mi.jaw),Ct(a,p,g-c,2,Mi.jawL),d%2===1&&d<10&&(a.fillStyle=Mi.fang,a.fillRect(Lt(p-1),Lt(c<0?g+2:g-7),3,5))}}}}),A({type:"custom",layer:"ground",dur:.6,delay:.1,x:t,y:n,draw(a,s){ke(t,n);const l=(.3+oo(s)*.7)*i*N.HW*Math.SQRT2;a.globalAlpha=(1-s)*.9;for(let u=0;u<20;u++){const f=r+u/20*Dn;Ct(a,gt+Math.cos(f)*l,xt+Math.sin(f)*l*.5,u&1?3:4,u&1?Mi.foam:Mi.wat[1])}a.globalAlpha=(1-s)*.5;for(let u=0;u<10;u++){const f=r+u/10*Dn+.3;Ct(a,gt+Math.cos(f)*l*.7,xt+Math.sin(f)*l*.35,3,Mi.wat[2])}}});for(let a=0;a<10;a++){const s=Math.random()*Dn,l=y(1,3);I(t,n,.3,Math.cos(s)*l,Math.sin(s)*l,y(2,4),.55,Mi.wat[a%3],3,12,!1)}for(let a=0;a<2;a++)I(t,n,.5,y(-1,1),y(-1,1),y(1,2),.4,Mi.jawL,2,8,!1);Q(4)}function wv(e,t,n,r,o,i){const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*2.3;for(let h=1;h<=3;h++)e.globalAlpha=.6-h*.15,Ct(e,n-a*(8+h*4),r-s*(8+h*4)+Math.sin(i*25+f+h)*1.5,2,uo.honeyL);e.globalAlpha=1;for(let h=0;h<4;h++)Ct(e,n-a*(7-h*2),r-s*(7-h*2),3,h&1?uo.k:uo.y);Me(e,n+a*1,r+s*1,n+a*5,r+s*5,1,uo.k);const c=Math.sin(i*70+f)>0?3:2;e.globalAlpha=.75,Ct(e,n-a*4+l*c,r-s*4+u*c-1,2,uo.wing),Ct(e,n-a*4-l*c,r-s*4-u*c-1,2,uo.wing),e.globalAlpha=1}function Sv(e){const t=e.x,n=e.y;pi(e);const r=no,o=mo;A({type:"custom",layer:"top",dur:.45,x:t,y:n,draw(i,a){ke(t,n,.45),i.globalAlpha=xr(a,.6),Me(i,gt-r*7,xt-o*7,gt-r*1,xt-o*1,1,uo.k),Ct(i,gt-r*8,xt-o*8,2,uo.y);const s=2+oo(fi(a*2))*6;i.globalAlpha=(1-a)*.8;for(let l=0;l<5;l++){const u=l/5*Dn+.4;Ct(i,gt+Math.cos(u)*s,xt+Math.sin(u)*s*.7-a*4,2,uo.venom)}}});for(let i=0;i<3;i++)I(t,n,.45,y(-.5,.5),y(-.5,.5),y(.2,.8),.5,i?uo.honey:uo.honeyL,2,6,!1,.9)}function _v(e,t,n,r,o,i){const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.7;mt(!0);const c=Ht();c.globalAlpha=.3,Ct(c,n,r,14,Or.d),c.globalAlpha=1,mt(!1);for(let d=0;d<5;d++){const m=d*3,p=Math.sin(i*28+f-d*1.1)*d*.7;Ct(e,n-a*m+l*p,r-s*m+u*p-d,6-d,d<2?Or.m:d<4?Or.d:Or.k)}Ct(e,n,r,4,Or.l),Ct(e,n+a,r+s,2,Or.w);const h=i*10|0;t._bf!==h&&(t._bf=h,h&1&&I(t.x,t.y,(t.z||.45)+.05,0,0,.5,.35,Or.l,2,0,!0))}function Av(e){const t=e.x,n=e.y,r=Math.random()*6;A({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(o,i){ke(t,n,.15);const a=Math.sin(i*Math.PI)*22;for(let s=-1;s<=1;s++){const l=a*(s?.7:1),u=Math.max(1,Lt(l/3));for(let f=0;f<u;f++){const c=f/u,h=Math.sin(i*20+r+f*.9+s)*1.5*c;Ct(o,gt+s*8+h,xt-f*3,c<.3?4:c<.7?3:2,c<.3?Or.d:c<.7?Or.m:Or.l)}}i<.25&&Ct(o,gt,xt-8,4,Or.w)}}),I(t,n,.5,y(-.3,.3),y(-.3,.3),y(.8,1.4),.4,Or.l,2,-.3,!0),dt(t,n,.9,Or.n,.45,.2)}function Tv(e){const t=e.x,n=e.y;pi(e);const r=Math.atan2(mo,no);A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(o,i){ke(t,n);const a=8+oo(i)*18;o.globalAlpha=(1-i)*.9;for(let s=0;s<7;s++){const l=r+(s/6-.5)*2.4;Ct(o,gt+Math.cos(l)*a,xt+Math.sin(l)*a*.5,s&1?3:4,Ns[s%3])}}}),A({type:"custom",layer:"top",dur:.16,x:t,y:n,draw(o,i){ke(t,n,.45);const a=1-i;for(let s=-1;s<=1;s++){const l=gt-no*6*a+s*4*-mo,u=xt-mo*6*a+s*4*no;Ct(o,l,u,5,al.k),Ct(o,l,u,3,al.l)}}});for(let o=0;o<3;o++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1.5,2.6),.45,o?al.d:al.m,3,13,!1,.95);I(t,n,.45,y(-1,1),y(-1,1),y(1,2),.4,al.moss[Math.random()*2|0],2,10,!1)}function Rv(e){const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(r,o){ke(t,n,.4);const i=Lt(Math.abs(Math.cos(o*Dn))*4)+1;r.globalAlpha=xr(o,.6);for(const a of[-1,1])Ct(r,gt-3,xt+a*i,2,T0.d),Ct(r,gt,xt+a*(i+1),2,T0.m),Ct(r,gt+3,xt+a*i,2,T0.d)}}),I(t,n,.4,y(-.8,.8),y(-.8,.8),y(.5,1.2),.3,Math.random()<.5?T0.l:"#8ad050",2,8,!1)}const Cv={mm:iv,mr:sv,sg:uv,tw:cv,mon_wolf:mv,mon_bat:pv,mon_shroom:yv,mon_ent:gv,mon_beetle:xv,slime:Mv,golem:bv,serpent:vv,abeja_pet:Sv,cabra_wisp:Av,cabra_golem:Tv,cabra_locust:Rv},Pv={mr:av,sg:lv,tw:Fy,abeja_pet:wv,cabra_wisp:_v};Qo.hit=e=>{const t=Iy(e);if(!t)return!1;const n=Cv[t.b];if(n)return n(e,t.t),!0;const r=_a[t.b]&&_a[t.b].hit;return r?r(e,t.t)===!0?"snd":!0:!1};Qo.proj=(e,t,n,r,o,i)=>{const a=t.look||t.fx;if(a==="tower_blue"||a==="tower_red")return Fy(e,t,n,r,o,i,a==="tower_red"?"r":"b"),!0;if(typeof a!="string"||a.charCodeAt(0)!==64)return!1;const s=wo(a),l=Pv[s.b]||_a[s.b]&&_a[s.b].proj;return l?(l(e,t,n,r,o,i,s.t),!0):!1};Qo.shoot=e=>{const t=Iy(e)||(e.proj==="tower"?wo("tw."+iu((Z(e.uid)||{}).team)):null);if(!t)return!1;if(t.b==="tw")return hv(e,t.t),!1;if(t.b==="sg")return fv(e),!1;const n=_a[t.b]&&_a[t.b].shoot;return n?n(e,t.t)===!0:!1};Qo.laser=e=>(dv(e),!0);const Si=Math.round,Nu=Math.PI*2,Io=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(Si(t-r/2),Si(n-r/2),r,r)},Ey=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);H.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];A({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Z(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=P(a,s,.9),f=Math.min(1,r*3),c=r>.7?1-(r-.7)/.3:1;n.globalAlpha=c;for(const h of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+h*(.35+d*.22*f),p=(26+d*7)*f;for(let g=0;g<p;g+=3){const x=g/Math.max(1,p),b=Math.sin(w.T*18+d+g*.3)*2;Io(n,l+Math.cos(m)*g+b*h,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let h=0;h<14;h++){const d=h/14*Nu+r*9,m=18+h%3*6,p=-r*70-h*3;Io(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[h%4])}}});for(let n=0;n<40;n++){const r=Math.random()*Nu,o=y(1,3.5);I(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,y(2,5),y(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}Q(Ey(e)?9:3)};H.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];A({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Z(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=P(a,s,1.6),f=Math.min(1,r*2.5),c=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*c;const h=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((b,M)=>{b!=="."&&Io(n,d+(M-7)*h,m+(x-5)*h,h,b==="N"?t[4]:b==="o"?t[0]:t[1+(M+x)%2])})),r>.15&&r<.6)for(let g=0;g<3;g++){const x=40+((r-.15)*300+g*22)%90;for(let b=-.9;b<=.9;b+=.12)Io(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),A({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Z(o.uid),[a,s]=P(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const c=f/l*Nu,h=(1-u)*120+30,d=a+Math.cos(c)*h,m=s+Math.sin(c)*h*.5;n.fillStyle=t[3],n.fillRect(Si(d-6),Si(m-4),12,8),n.fillStyle=t[1],n.fillRect(Si(d-5),Si(m-3),10,3),n.fillStyle=t[0],n.fillRect(Si(d-1),Si(m-1),2,2)}}}),Q(Ey(e)?10:4)};H.erizo_Q_hit=e=>{A({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)Io(t,o+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,Io(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)I(e.x,e.y,.5,y(-2,2),y(-2,2),y(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};H.polilla_Q_hit=e=>{A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<Nu-.4;l+=.18)Io(t,o+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=o+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)Io(t,s+f*u,l,u,"#fff6c8"),Io(t,s+f*u,l+3*u,u,"#fff6c8"),Io(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)I(e.x,e.y,.6,y(-1,1),y(-1,1),y(.5,1.5),y(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const Yr=Math.round,zt={x:0,y:0};function Xn(e,t,n=0){zt.x=(e-t)*N.HW+N.OX,zt.y=(e+t)*N.HH-n*N.ZK}const De=e=>e*N.HW*Math.SQRT2,io=e=>e*N.ZK,bc=(e,t)=>Math.sqrt(2*N.HH*N.HH*e*e+N.ZK*N.ZK*t*t);function Ni(e,t,n){const r=2*N.HH/N.ZK;return(e+t+r*n)/Math.sqrt(2+r*r)}const Iv=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],o2=new WeakMap;function Vt(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let r=o2.get(e);r||(r=new Map,o2.set(e,r));const o=t+"|"+n;let i=r.get(o);if(!i){const a=document.createElement("canvas");a.width=a.height=8;const s=a.getContext("2d");s.fillStyle=t;for(let l=0;l<16;l++)Iv[l]<n&&s.fillRect((l&3)*2,(l>>2)*2,2,2);i=e.createPattern(a,"repeat")||t,r.set(o,i)}return i}function i2(e,t,n,r,o,i,a,s,l=2){if(r<2||s<=0)return;const u=r*.5,f=a.length,c=Yr(n-o),h=Yr(i?n+u:n);for(let d=c;d<h;d+=l){const m=d+l/2-n,p=m<0?r*Math.sqrt(Math.max(0,1-m/o*(m/o))):r*Math.sqrt(Math.max(0,1-m/u*(m/u))),g=!i&&m>-u?r*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-g<.5)continue;const x=m/o*(m/o);for(let b=0;b<f;b++){const M=a[b];let v=r*Math.sqrt(Math.max(0,M.u0*M.u0-x)),S=b+1<f?r*Math.sqrt(Math.max(0,a[b+1].u0*a[b+1].u0-x)):p;if(v<g&&(v=g),S>p&&(S=p),S-v<.5)continue;e.globalAlpha=s*M.a,e.fillStyle=M.fill;const _=Yr(t-S),T=Yr(t-v),R=Yr(t+v),C=Yr(t+S);T>_&&e.fillRect(_,d,T-_,l),C>R&&e.fillRect(R,d,C-R,l)}}}function ko(e,t,n,r,o,i,a,s,l,u,f=2){const c=Math.max(r,o);if(c<2||u<=0||i<1)return;const h=n-i,d=r*.5,m=o*.5,p=s.length,g=l.length,x=a?1:-1;for(let b=-c;b<c;b+=f){const M=Math.abs(b+f/2),v=M/c;let S,_;if(M<=o?S=h+x*m*Math.sqrt(1-M/o*(M/o)):S=h+(M-o)/(r-o)*i,M<=r?_=n+x*d*Math.sqrt(1-M/r*(M/r)):_=n-(M-r)/(o-r)*i,_<S){const z=S;S=_,_=z}let T=0;for(;T+1<p&&v>=s[T+1].u0;)T++;const R=s[T];e.fillStyle=R.fill;const C=Yr(t+b),O=_-S;for(let z=0;z<g;z++){const E=Yr(_-O*(z+1)/g),U=Yr(_-O*z/g);U<=E||l[z]<=0||(e.globalAlpha=u*R.a*l[z],e.fillRect(C,E,f,U-E))}}}function Pi(e,t,n,r,o,i,a,s,l){for(let u=0;u<i;u++){const f=s+u/i*Math.PI*2,c=Math.cos(f),h=Math.sin(f);l&&(c+h>0?1:-1)!==l||(Xn(t+c*o,n+h*o,r),e.fillRect(Yr(zt.x-a/2),Yr(zt.y-a/2),a,a))}}function za(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,r=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:r,id:-1,t0:w.T,endAt:w.T+t,found:!1,nl:0,fr:-1,rem:t}}function or(e){if(e.fr===w.T)return e.rem;e.fr=w.T;const t=w.game;let n=null;if(t&&t.zones){for(const r of t.zones)if(e.id>=0?r.id===e.id:Math.abs(r.x-e.x)<.16&&Math.abs(r.y-e.y)<.16&&(!e.look||!r.look||String(r.look)===e.look)){n=r;break}}if(n){const r=w.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=r):r<e.endAt&&(e.endAt=r),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,w.T));return e.rem=e.endAt-w.T,e.rem}function yi(e,t,n,r,o,i){w.T<e.nl||(e.nl=w.T+.1,dt(t,n,r,o,i*.75,.22))}const Xl=e=>e<0?0:e>1?1:e,st=Math.round,vn=Math.PI*2;let le=0,oe=0;function an(e,t,n=0){le=(e-t)*N.HW+N.OX,oe=(e+t)*N.HH-n*N.ZK}function Bn(e,t,n,r,o){e.fillStyle=o,e.fillRect(st(t-r/2),st(n-r/2),r,r)}function Mh(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(st(t+(r-t)*l/s-i/2),st(n+(o-n)*l/s-i/2),i,i)}function Bs(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(st(t-a/2),st(n+i*o),st(a),Math.max(1,st(2*o)))}}function ys(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let a=-r;a<r;a+=2){const s=Math.abs(a+1),l=s<=r/2?r*.866:r*.866*(r-s)/(r/2);l<.5||n+a<i||e.fillRect(st(t-l),st(n+a),st(l*2),2)}}function Ov(e,t,n,r,o){e.fillStyle=o,e.fillRect(st(t-r),st(n-1),r*2,2),e.fillRect(st(t-1),st(n-r),2,r*2)}function bh(e,t,n){e.fillStyle=ut.l,e.fillRect(st(t-1),st(n-4),2,2),e.fillStyle=ut.o,e.fillRect(st(t-2),st(n-2),4,4),e.fillStyle=ut.w,e.fillRect(st(t-1),st(n-2),2,2)}const po=e=>e<0?0:e>1?1:e,Ui=e=>1-(1-e)*(1-e),ut={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},gs="#2a1e14",zv="#eaf8ff",Fv="#b8e0ff",Bu="#ff9ac8",Ed="#9a5ad8",Ev="#9a7a48";function Ly(e,t,n,r,o){const i=w.game;if(!i)return null;let a=null,s=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function Lv(e,t,n,r,o){e.fillStyle=o?zv:Fv,o?(e.fillRect(st(t-3*r-2),st(n-9),4,5),e.fillRect(st(t+1*r-1),st(n-8),3,4)):(e.fillRect(st(t-5*r-2),st(n-5),5,3),e.fillRect(st(t+2*r-2),st(n-5),4,3)),e.fillStyle=ut.y,e.fillRect(st(t-5),st(n-3),10,6),e.fillStyle=gs,e.fillRect(st(t-2*r-1),st(n-3),2,6),e.fillRect(st(t+1*r),st(n-3),2,6),e.fillRect(st(t+5*r-(r>0?1:2)),st(n-2),3,4),e.fillRect(st(t-6*r-1),st(n-1),2,2)}H.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;A({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,a){an(r,o,.6);const s=26*(1-Ui(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*vn+a*3;Bn(i,le+Math.cos(u)*s,oe+Math.sin(u)*s*.6,3,l&1?gs:ut.y)}a>.6&&(i.fillStyle=Ed,i.fillRect(st(le-2),st(oe-2),4,4))}});for(let i=0;i<6;i++)I(r,o,.6,t*y(1,3)+y(-.6,.6),n*y(1,3)+y(-.6,.6),y(0,.6),.3,i&1?ut.y:ut.l,2,0,!0)};Pe.abeja_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=i*30|0;for(let c=3;c<17;c++){const h=c*3.5,d=(c+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-c/17,e.fillStyle=c&1?ut.l:ut.y,e.fillRect(st(n-a*h+l*m*5),st(r-s*h+u*m*5),2,2)}e.globalAlpha=1;for(let c=0;c<=14;c++){const h=n+a*(8-c)*1.6,d=r+s*(8-c)*1.6;if(c<=1)Bn(e,h,d,2,ut.w);else if(c<=8)Bn(e,h,d,2,ut.b),(c===4||c===7)&&(Bn(e,h-a*2+l*2,d-s*2+u*2,2,ut.b),Bn(e,h-a*2-l*2,d-s*2-u*2,2,ut.b));else{const m=c-9>>1&1?gs:ut.y,p=c===9||c===14?1:2;for(let g=-p;g<=p;g++)Bn(e,h+l*g*2,d+u*g*2,2,m)}}f&2&&Bn(e,n+a*15,r+s*15+2,2,Ed)};H.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=Z(e.uid),o=Ly(t,n,r?r.team:void 0,!1,.9);A({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,a,s){const l=s.vid?Z(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}an(l?l.x:t,l?l.y:n,1.5);const f=le,c=oe,h=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=st(11*h);i.globalAlpha=u>1.5?(1.8-u)/.3:1,ys(i,f,c,d,ut.d),ys(i,f,c,d-2,ut.y),ys(i,f,c,d-2,ut.o,c+d*.35),i.fillStyle=ut.w,i.fillRect(st(f-d*.5),st(c-d*.5),3,2),Mh(i,f-4,c-4,f+4,c+4,2,gs),Mh(i,f+4,c-4,f-4,c+4,2,gs);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,g=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const M=(x>0?0:Math.PI)+b*.28;Bn(i,f+Math.cos(M)*g,c+Math.sin(M)*g,2,ut.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,bh(i,f-4,c+d+m*22),bh(i,f+3,c+d+m*14)}}});for(let i=0;i<8;i++)I(t,n,.5,y(-2,2),y(-2,2),y(.6,1.8),y(.3,.5),i&1?gs:ut.y,2,6,!1,.9);for(let i=0;i<4;i++)I(t,n,.6,y(-.8,.8),y(-.8,.8),y(1,2),.5,Ed,3,5,!0);Q(2)};H.abeja_W=e=>{if(e.type==="heal"){kv(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(r-.3)*Ui(po(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*vn,f=s*(1+Math.sin(u*6+a*9+o)*.045);an(t+Math.cos(u)*f,n+Math.sin(u)*f),Bn(i,le,oe,5,ut.o),Bn(i,le,oe-2,3,ut.l),l%4===0&&(i.fillStyle=ut.d,i.fillRect(st(le-1),st(oe+2),2,st(2+6*a)))}}}),A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=po(a/.6);for(let l=0;l<8;l++){const u=l/8*vn+o,f=r*(.6+.3*q(o+l))*s;an(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,bh(i,le,oe)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=ut.o,i.fillRect(st(le-5),st(oe-1),10,2),i.fillStyle=ut.l,i.fillRect(st(le-2),st(oe-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*vn;I(t,n,.8,Math.cos(a)*y(.5,2),Math.sin(a)*y(.5,2),y(.5,1.5),y(.5,.9),i%3?ut.l:ut.w,2,-.5,!0)}};function kv(e){const t=e.x,n=e.y,r=Ly(t,n,e.team,!0,.6);A({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,a){const s=a.vid?Z(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;an(l,u,.55);const c=le,h=oe;an(l,u,2.6);const d=oe,m=h-d;if(f>.15){an(l,u);const x=po((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=ut.o,Bs(o,le,oe,st(16*x),.45),o.fillStyle=ut.l,o.fillRect(st(le-6*x),st(oe-3),st(6*x),2)}const p=po(f/.15)*m,g=f>.45?po((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=st(g);x<p;x+=3){const b=x/m*(x/m),M=Math.sin(x*.22-w.T*9)*6*b;o.fillStyle=ut.o,o.fillRect(st(c+M-2),st(d+x),4,3),o.fillStyle=ut.l,o.fillRect(st(c+M-2),st(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,Ov(o,c+(x-1)*12,h-10-b*30,4,x&1?ut.y:ut.l))}}});for(let o=0;o<5;o++)I(t,n,.4,y(-.5,.5),y(-.5,.5),y(.8,1.6),y(.6,.9),o&1?ut.l:ut.w,2,-.5,!0)}const sl=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];H.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*vn+r);A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,c=Ui(po(f/.25)),h=f>1.15?po((f-1.15)/.5):0;an(t,n,.55*c-h*.4);const d=le,m=oe;l.globalAlpha=1-h;for(let p=0;p<sl.length;p++){const g=d+sl[p][0],x=m+sl[p][1]*c,b=8;ys(l,g,x,b,ut.d),ys(l,g,x,b-2,ut.cell);const M=po((f-.08-p*.04)/.3),v=a.indexOf(p)>=0&&f>o;!v&&M>0&&(ys(l,g,x,b-2,ut.o,x+(b-2)-M*2*(b-2)),l.fillStyle=ut.l,l.fillRect(st(g-3),st(x-3),2,2)),!v&&f>.4&&a.indexOf(p)>=0&&(l.fillStyle=ut.y,l.fillRect(st(g-4),st(x-1),8,3))}}}),A({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){an(t,n,.55);const f=le,c=oe,h=(w.T*30|0)&1;for(let d=0;d<3;d++){const m=f+sl[a[d]][0],p=c+sl[a[d]][1];an(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const g=le,x=oe,b=_=>{const T=Math.sin(_*Math.PI);return[m+(g-m)*_+Math.cos(_*vn*1.5+d)*12*T,p+(x-p)*_+Math.sin(_*vn*1.5+d)*8*T-T*18]},M=Ui(u);for(let _=1;_<7;_++){const T=M-_*.04;if(T<0)break;const R=b(T);l.globalAlpha=(1-_/7)*.8,l.fillStyle=ut.l,l.fillRect(st(R[0]),st(R[1]),2,2)}const v=b(M),S=b(Math.max(0,M-.02));l.globalAlpha=u>.8?(1-u)/.2:1,Lv(l,v[0],v[1],v[0]>=S[0]?1:-1,!!h)}}}),A({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<9;c++)I(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1,2),y(.4,.6),c%3?ut.y:ut.d,2,6,!1,.9)}}}),A({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<14;c++)I(t+y(-.3,.3),n+y(-.3,.3),y(.2,.7),y(-.6,.6),y(-.6,.6),y(0,.5),y(.5,.8),c%3?ut.d:ut.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)I(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(.3,1),.5,"#c8a878",3,3,!1,.9);Q(2)};const Gl=new Map;H.abeja_R=e=>{e.type==="channel"?Dv(e):e.type==="channel_tick"?Xv(e):e.type==="channel_end"&&Gv(e)};function Dv(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1},u=w.T,f={n:0};Gl.size>16&&Gl.clear(),Gl.set(r,l);const c=m=>{if(l.endT<0&&w.mode!=="guest"&&m.t>.1){const g=Z(r);(!g||!g.channel)&&(l.endT=w.T)}if(l.endT<0)return 1;const p=1-(w.T-l.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i,M=Ui(po(b/.4)),v=s+b*.3;m.globalAlpha=x;for(let S=0;S<8;S++){const _=v+S/8*vn,T=Math.cos(_),R=Math.sin(_);for(let C=0;C<10;C++){const O=C/9,z=(.15+O*.95)*M,E=Math.sin(O*Math.PI)*.24*M;for(let U=-1;U<=1;U++)an(t+T*z-R*E*U,n+R*z+T*E*U),Bn(m,le,oe,6,U===0&&O<.8?ut.l:O>.85?ut.d:ut.y)}}an(t,n),m.fillStyle=ut.o,Bs(m,le,oe,st(12*M),.5),m.fillStyle=Bu,Bs(m,le,oe,st(6*M),.5)}});const h=Uv(o,s);A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);x<=0||(a2(m,h,t,n,o,a,w.T-u,x,!1),w.T>=f.n&&(f.n=w.T+.1,dt(t,n,o*1.05,16760896,.5*x,.22)))}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i,M=Ui(po(b/.5)),v=b*.25;m.globalAlpha=.55*x;for(let C=0;C<56;C++){const O=C/56*vn+v;an(t+Math.cos(O)*o,n+Math.sin(O)*o),Bn(m,le,oe,C&1?2:3,C&1?ut.l:ut.y)}an(t,n);const S=le,_=oe,T=o*N.HW*Math.SQRT2,R=Math.sqrt(2*N.HH*N.HH*o*o+N.ZK*N.ZK*a*a*M*M);for(let C=0;C<=90;C++){const O=Math.PI+C/90*Math.PI,z=((C/90-b*.35)%1+1)%1,E=Math.max(0,1-Math.min(z,1-z)*7);m.globalAlpha=x*(.35+.6*E),Bn(m,S+Math.cos(O)*T,_+Math.sin(O)*R,E>.4?3:2,E>.4?ut.w:ut.y)}m.globalAlpha=x;for(let C=0;C<6;C++){const O=w.T*2.4+C/6*vn;an(t+Math.cos(O)*.7,n+Math.sin(O)*.7,.9+Math.sin(w.T*4+C)*.2),Bn(m,le,oe,2,C&1?ut.w:Bu)}}});const d=26;A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i;if(!(b<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const S=q(M*3.7+s)*.65,_=Math.floor((b+S)/.65),T=(b+S)%.65/.65,R=q(M*13.1+_)*vn,C=Math.sqrt(q(M*5.3+_*1.7))*o*.9,O=t+Math.cos(R)*C,z=n+Math.sin(R)*C;if(T<.85)an(O,z,a*.92*Math.sqrt(Math.max(0,1-C/o*(C/o)))*(1-T/.85)),m.fillStyle=ut.o,m.fillRect(st(le-1),st(oe-2),2,4),m.fillStyle=ut.l,m.fillRect(st(le-1),st(oe-4),2,2);else{an(O,z);const E=(T-.85)/.15;m.fillStyle=ut.o,m.fillRect(st(le-2-E*4),st(oe),3,2),m.fillRect(st(le+E*4),st(oe),3,2)}}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);x<=0||a2(m,h,t,n,o,a,w.T-u,x,!0)}})}function Uv(e,t){const r=[],o=[],i=[],a=[],s=[],l=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*l,c=Math.max(5,st(Math.max(16,e*5.6)*Math.cos(f)));for(let h=0;h<c;h++)r.push((h+(u&1)*.5)/c*vn),o.push(f),i.push(u),s.push(vn/c),a.push(.35+u*.42+q(t+h*7.1+u*13.3)*.45)}return{a:Float32Array.from(r),ph:Float32Array.from(o),row:Uint8Array.from(i),fill:Float32Array.from(a),da:Float32Array.from(s),dph:l,n:r.length}}const Na=new Float32Array(12);function a2(e,t,n,r,o,i,a,s,l){const{HW:u,HH:f,ZK:c}=N,h=2*f/c,d=Math.sqrt(2+h*h);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let g=0;g<t.n;g++){const x=t.row[g],b=Ui(po((a-.05-x*.07)/.28));if(b<=.02)continue;const M=a>t.fill[g];if(m===0&&M||m===1&&!M)continue;const v=t.a[g],S=t.ph[g],_=Math.cos(v),T=Math.sin(v),R=Math.cos(S),C=Math.sin(S),O=_*R/o,z=T*R/o,E=C/i;if((O+z+h*E)/d>0!==l)continue;const U=n+_*R*o,G=r+T*R*o,K=C*i,L=(U-G)*u+N.OX,k=(U+G)*f-K*c,D=.5*.86*b,$=t.da[g]*R*o*D,W=t.dph*D*1.12,tt=(-T-_)*$*u,rt=(-T+_)*$*f,yt=-C*_*o,Wt=-C*T*o,Bt=R*i,We=(yt-Wt)*W*u,Ie=((yt+Wt)*f-Bt*c)*W;for(let te=0;te<6;te++){const Rn=te*Math.PI/3+Math.PI/6,Ce=Math.cos(Rn),gi=Math.sin(Rn)*1.15;Na[te*2]=st(L+Ce*tt+gi*We),Na[te*2+1]=st(k+Ce*rt+gi*Ie)}e.moveTo(Na[0],Na[1]);for(let te=1;te<6;te++)e.lineTo(Na[te*2],Na[te*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=s*(l?.55:.5),e.fillStyle=Vt(e,l?ut.l:ut.d,l?3:4),e.fill();else if(m===1){const g=.85+.15*Math.sin(a*5);e.globalAlpha=s*(l?.62:.55)*g,e.fillStyle=Vt(e,l?ut.y:ut.o,l?7:9),e.fill()}else e.globalAlpha=s*(l?.95:.55),e.strokeStyle=l?ut.d:ut.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(l){e.globalAlpha=s*.9,e.fillStyle=ut.w;for(let m=0;m<t.n;m++){if(a<=t.fill[m]+.1)continue;const p=t.a[m],g=t.ph[m],x=Math.cos(p),b=Math.sin(p),M=Math.cos(g),v=Math.sin(g);(x*M/o+b*M/o+h*v/i)/d<=0||(an(n+x*M*o,r+b*M*o,v*i),e.fillRect(st(le-7),st(oe-6),3,2))}}}function Xv(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;A({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(r-.4)*Ui(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const c=f/6*vn+Math.PI/6,h=(f+1)/6*vn+Math.PI/6;an(t+Math.cos(c)*u,n+Math.sin(c)*u);const d=le,m=oe;an(t+Math.cos(h)*u,n+Math.sin(h)*u),Mh(s,d,m,le,oe,3,f&1?ut.y:ut.l)}}});const i=w.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>r*r)){if(s.team===o){if(s.kind==="hero")for(let l=0;l<2;l++)I(s.x+y(-.3,.3),s.y+y(-.3,.3),.5,0,0,y(1,1.6),.6,l?ut.l:ut.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;A({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,c){an(l,u),f.globalAlpha=.8*(1-c),f.fillStyle=ut.d,Bs(f,le,oe,13,.45),f.fillStyle=ut.o,Bs(f,le-2,oe-1,9,.45),f.fillStyle=ut.l,f.fillRect(st(le-5),st(oe-3),3,2),f.fillRect(st(le-8),st(oe-10+c*8),2,st(8-c*6)),f.fillRect(st(le+7),st(oe-8+c*6),2,st(6-c*4))}})}}}function Gv(e){const t=Gl.get(e.uid);t&&t.endT<0&&(t.endT=w.T),Gl.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*vn;I(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*y(2,3.5),Math.sin(i)*y(2,3.5),y(1.5,3),y(.6,.9),o&1?ut.y:ut.l,4,3,!0,.93)}for(let o=0;o<12;o++)I(n,r,.8,y(-1,1),y(-1,1),y(1,2.5),y(.5,.9),o&1?Bu:ut.w,2,0,!0);A({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){an(n,r),o.globalAlpha=1-i,o.fillStyle=ut.l,Bs(o,le,oe,st(20+i*90),.5)}}),Q(3)}else{for(let o=0;o<10;o++){const i=o/10*vn;I(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,y(.2,.6),y(.7,1),o&1?Ev:ut.d,4,1.5,!1,.9)}et.sfx("deny",n,r,.35)}}Pe.abeja_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?ut.l:ut.y,e.fillRect(st(n-a*p+l*g-1),st(r-s*p+u*g-1),2,2)}e.globalAlpha=1;const c=Math.sin(i*20+f)*3,h=n+l*c,d=r+u*c;for(let m=0;m<8;m++){const p=m/8*vn+i*6;Bn(e,h+Math.cos(p)*5,d+Math.sin(p)*5,2,ut.o)}e.fillStyle=ut.y,e.fillRect(st(h-3),st(d-3),6,6),e.fillStyle=ut.w,e.fillRect(st(h-2),st(d-2),2,2)};Qe.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*vn;A({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,a){an(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(r?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const c=o+f/5*vn;Bn(i,le+Math.cos(c)*l,oe+Math.sin(c)*l*.8,r?5:4,f&1?ut.l:ut.y)}Bn(i,le,oe,r?5:4,r?Bu:ut.o);const u=6+a*(r?26:18);for(let f=0;f<10;f++){const c=o+f/10*vn;Bn(i,le+Math.cos(c)*u,oe+Math.sin(c)*u*.5+6,2,ut.l)}}});for(let i=0;i<(r?8:4);i++)I(t,n,.5,y(-1,1),y(-1,1),y(.3,1.2),.4,i&1?ut.y:ut.w,2,2,!0)};const ie=Math.round,_t={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function Jr(e,t,n,r,o){e.fillStyle=o,e.fillRect(ie(t-r/2),ie(n-r/2),r,r)}const Nv=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,vc={};function Bv(e){if(vc[e])return vc[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return vc[e]=t}function $s(e,t,n,r,o,i,a,s=1,l=1,u=!1){const f=Bv(r);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];e.fillStyle=h+d>r*.6?a:i,e.fillRect(ie(t+h*o*s-o/2),ie(n+d*o*l-o/2),o,o)}u||(e.fillStyle=_t.white,e.fillRect(ie(t-r*o*.45*s-o/2),ie(n-r*o*.5*l-o/2),o,o))}function $v(e,t,n,r,o,i,a=1,s=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(ie(t-u*o*a),ie(n+l*o*s-o/2),ie(u*2*o*a),o)}}function Hv(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const s2=["#.#","###",".#.",".#."];function ky(e,t){A({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=4+ie(r*5);n.globalAlpha=1-r,$s(n,o,i,a,2,_t.pink1,_t.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;Jr(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?_t.white:_t.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=y(0,6.283),o=y(1,2.5);I(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(1,2.5),.4,n<3?_t.water:_t.pink1,2,8,!1)}for(let n=0;n<3;n++)I(e,t,.5,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,n%2?_t.coral:_t.orange,3,10,!1)}H.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,c]=P(t,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=s+(h-1)*.5,m=10+u*(22+h*6);$s(l,f+Math.cos(d)*m,c+Math.sin(d)*m-u*8,1+h%2,2,_t.pink2,_t.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(t+r*.4,n+o*.4,.5,r*y(1,2.5)+y(-.5,.5),o*y(1,2.5)+y(-.5,.5),y(.5,1.5),.35,l%2?_t.water:_t.pink1,2,6,!1);return!0};Pe.ajolote_Q=(e,t,n,r,o,i)=>{Hv(t,ky);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,$v(e,n,r,6,2,_t.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<s2.length;h++)for(let d=0;d<3;d++)s2[h][u?2-d:d]==="#"&&Jr(e,n-2+d*2,r-3+h*2,2,h<1?_t.orange:_t.coral);$s(e,n,r,6,2,_t.pink2,_t.coral2,s,l);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,m=Math.sin(i*12+h*2)*3;$s(e,n-f*d-c*m,r-c*d+f*m,2-(h>>1),2,_t.pink1,_t.pink2)}Math.random()<.35&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.6,.45,_t.pink1,2,-.5,!1)};function Wv(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return A({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[a,s]=P(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=a+n[l][0],h=s+n[l][1]-u*6;if(u<f)$s(r,c,h,2,2,_t.pink2,_t.coral);else if(u<f+.3){const d=(u-f)/.3,m=ie(h-d*14),p=ie(c);r.globalAlpha=1-d,r.fillStyle=_t.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=_t.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+g*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}H.ajolote_W=e=>{if(e.type==="heal")return Wv(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,a=[-.55,-.15,.25];A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const c=Z(o),[h,d]=P(c?c.x:t,c?c.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const b=g>0?a[x]:Math.PI-a[x],M=Math.sin(f*16+x*1.3)*.12,v=b+M*g,S=Math.cos(v),_=Math.sin(v),T=ie(22*m)-(x===1?0:4);for(let R=6;R<=T;R+=2)Jr(u,h+S*R,d+_*R,2,R>T-2?_t.pink1:_t.gill),R%4===0&&R>8&&(Jr(u,h+S*R-_*3,d+_*R+S*3,2,_t.pink2),Jr(u,h+S*R+_*3,d+_*R-S*3,2,_t.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+y(-.12,.12));A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),m=ie(d*3)*2,[p,g]=P(t+Math.cos(s[c])*r,n+Math.sin(s[c])*r),x=ie(p),b=ie(g);u.fillStyle=_t.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=_t.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=_t.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=y(0,6.283),c=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:y(0,.35),pop:y(.4,.9),ph:y(0,6.283),done:!1})}return A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[m,p]=P(h.x,h.y,.1+Math.min(d,h.pop)*.9),g=m+Math.sin(d*9+h.ph)*3;if(d<h.pop){$s(u,g,p,h.n,2,_t.pink2,_t.coral);continue}h.done||(h.done=!0,I(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.8,.5,_t.pink1,2,0,!0),I(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.5,.4,_t.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=h.n*2+2+x*6;for(const[M,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])Jr(u,g+M*b,p+v*b,2,_t.pink1);u.globalAlpha=1}}}),!0};function qv(e,t,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)Jr(e,t-r*s,n-o*s,2,s>18?_t.coral2:_t.orange);for(let s=-6;s<=6;s+=2)Jr(e,t+i*s,n+a*s,2,_t.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)Jr(e,t+i*s+r*u,n+a*s+o*u,2,u>=l-1?_t.white:_t.pink1)}}H.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(r-t,o-n),l=(r-t)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,m=c/h,p=Math.max(2,Math.ceil(s/.1)),g={n:0,end:!1};return A({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const M=b*a,v=Math.min(1,M/i);for(let S=0;S<=p*v;S++){const _=S/p,T=M-_*i,R=Math.max(0,1-T/.55);if(R<=0)continue;const[C,O]=P(t+(r-t)*_,n+(o-n)*_),z=O+Math.sin(_*14-M*25)*2,E=ie(4+6*_);x.globalAlpha=R,x.fillStyle=_t.pink2,x.fillRect(ie(C)-E,ie(z)-3,E*2,1),x.fillRect(ie(C)-E,ie(z)+2,E*2,1),x.fillStyle=_t.water,x.fillRect(ie(C)-E,ie(z)-2,E*2,4),S%3===0&&(x.fillStyle=_t.white,x.fillRect(ie(C)-1,ie(z)-1,3,2))}if(x.globalAlpha=1,v<1&&g.n<22)for(let S=0;S<2;S++){g.n++;const _=t+(r-t)*v,T=n+(o-n)*v;I(_,T,.2,-l*y(.5,1.5)+y(-.8,.8),-u*y(.5,1.5)+y(-.8,.8),y(1,2.5),.45,S?_t.water:_t.pink1,2,8,!1)}if(!g.end&&v>=1){g.end=!0;for(let S=0;S<10;S++)I(r+l*.4,o+u*.4,.4,l*y(1.5,3.5)+y(-.8,.8),u*y(1.5,3.5)+y(-.8,.8),y(1,3),.5,S%2?_t.water:_t.white,2,9,!1);Q(4)}}}),A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const M=b*(i+.25),v=Math.min(1,M/i),[S,_]=P(t+(r-t)*v,n+(o-n)*v,.5);if(x.globalAlpha=v<1?1:Math.max(0,1-(M-i)/.25),qv(x,S+d*10,_+m*10,d,m),v>=1){const T=(M-i)/.25,R=6+T*30;for(const C of[-6,0,6])for(let O=12;O<12+R;O+=2)Jr(x,S+d*(10+O)-m*C,_+m*(10+O)+d*C,2,O>8+R?_t.pink1:_t.white)}x.globalAlpha=1}}),!0};function Vv(e,t,n,r,o){const i=ie(t),a=ie(n),s=(q(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=ie(u*s),c=u<r*.5?6:4;e.fillStyle=_t.coral,e.fillRect(i+f-c/2,a-u-2,c,2),e.fillStyle=_t.deep,e.fillRect(i+f+c/2-2,a-u-2,2,2)}const l=q(o+3)<.5?-1:1;for(const[u,f,c]of[[.35+q(o+1)*.15,.38,l],[.58+q(o+2)*.12,.28,-l]]){const h=r*u,d=i+ie(h*s),m=r*f;let p=d,g=a-h;for(let x=0;x<m;x+=2)p=d+c*(3+x*.7),g=a-h-x,e.fillStyle=_t.coral2,e.fillRect(ie(p)-2,ie(g)-2,4,2);e.fillStyle=_t.pink1,e.fillRect(ie(p)-2,ie(g)-4,4,2)}e.fillStyle=_t.pink1,e.fillRect(i+ie(r*s)-2,a-r-3,4,3)}H.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+s*.4+y(-.15,.15);i.push({x:t+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+s*.13+y(0,.05),H:y(24,40)*(s?1:.85),seed:y(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=P(f.x,f.y);s.fillStyle=_t.hole,s.fillRect(ie(c)-6,ie(h)-2,12,4),s.fillRect(ie(c)-3,ie(h)-3,6,6)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=Nv(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[g,x]=P(t+Math.cos(p)*h,n+Math.sin(p)*h,.45);s.globalAlpha=f*(1-m),Jr(s,g,x,m<.15?3:2,m<.15?_t.white:c===1?_t.pink2:_t.water)}}s.globalAlpha=1}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,I(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,3.5),.5,Math.random()<.5?_t.coral:_t.orange,3,10,!1),I(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,4),.45,_t.water,2,10,!1));const c=a(f,u);if(c<2)continue;const[h,d]=P(f.x,f.y);Vv(s,h,d,ie(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=y(0,6.283),u=y(2,5);I(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,y(3,6),y(.7,1),[_t.water,_t.pink1,_t.white,_t.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return Q(9),!0};Qe.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=Z(e.uid);let i=1,a=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,a=m/p)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,c=l/u;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=P(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)Jr(d,p+f*M-c*b,g+c*M+f*b,2,M>x/2-4?_t.white:_t.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)I(t,n,.45,i*y(.5,2)+y(-.7,.7),a*y(.5,2)+y(-.7,.7),y(1,2.5),.35,d%2?_t.pink1:_t.water,2,8,!1)};H.ajolote_Q_hit=e=>ky(e.x,e.y);const Dt=Math.round,vt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function ur(e,t,n,r,o){e.fillStyle=o,e.fillRect(Dt(t-r/2),Dt(n-r/2),r,r)}const vh=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function $u(e,t,n,r,o,i,a){const s=t.length,l=t[0].length,u=Dt(n-l*o/2),f=Dt(r-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<l;h++){const d=a[t[c][h]];d&&(e.fillStyle=d,e.fillRect(u+h*o,f+c*i,o,i))}}function vf(e,t,n,r,o,i,a,s,l,u){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,m=t-r*h,p=n-o*h,g=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const b=x>g-2?s:l,M=x*.5;((h>>1)+(x>>1))%4!==3&&ur(e,m+f*x-r*M,p+c*x-o*M,2,b),((h>>1)+(x>>1)+2)%4!==3&&ur(e,m-f*x-r*M,p-c*x-o*M,2,b)}ur(e,m,p,2,u)}}function Hu(e,t,n,r,o,i,a){const s=Dt(t),l=Dt(n);for(let u=0;u<r;u+=2){const f=Math.max(2,Dt(o*(1-u/r)/2)*2),c=Dt(u*i),h=a<0?l-u-2:l+u;e.fillStyle=vt.ice3,e.fillRect(s+c-f/2,h,f,2),e.fillStyle=vt.ice1,e.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}e.fillStyle=vt.snow,e.fillRect(s+Dt(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function Dy(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function Uy(e,t){A({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)ur(n,o+u*(a+h),i+f*(a+h),2,h>=c-2?vt.snow:vt.ice2)}if(r<.35){const s=Dt(10*(1-r/.35))+2;n.fillStyle=vt.snow,n.fillRect(Dt(o)-s/2,Dt(i)-s/2,s,s)}n.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;vf(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,vt.ice3,vt.ice1,vt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=y(0,6.283),o=y(1.2,3);I(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(.5,2),.4,n%2?vt.ice2:vt.ice3,2,6,!1)}}H.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,c]=P(t,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=s+(h-2)*.32,m=8+u*28,p=Math.cos(d),g=Math.sin(d);vf(l,f+p*m,c+g*m,p,g,10,3,vt.ice3,vt.ice1,vt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(t+r*.4,n+o*.4,.6,r*y(.5,1.5)+y(-.4,.4),o*y(.5,1.5)+y(-.4,.4),y(0,.6),.45,vt.snow,2,.5,!0);return!0};Pe.buho_Q=(e,t,n,r,o,i)=>{Dy(t,Uy);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;mt(!0);const c=Ht();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,ur(c,n-a*h*6,r-s*h*6,8-h,h<3?vt.ice2:vt.ice3);c.globalAlpha=1,mt(!1),vf(e,u,f,a,s,24,6,vt.ice3,vt.ice1,vt.snow),Math.random()<.55&&I(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(-.2,.3),.5,Math.random()<.5?vt.snow:vt.ice1,2,0,!0)};const Yv=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],Kv=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];H.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=vh(l,.08,.75);ft(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(s,l){const u=vh(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const g=p/m*6.283+(d===r?f:-f),[x,b]=P(t+Math.cos(g)*d,n+Math.sin(g)*d);ur(s,x,b,2,vt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,g]=P(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,$u(s,Yv[d%4],p,g,2,2,{"#":vt.ice1})}const[c,h]=P(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),$u(s,Kv,c,h,3,2,{"#":vt.ice2,o:vt.amber,v:vt.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+y(-.3,.3),u=r*(.3+.55*Math.sqrt(q(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:y(16,28),lean:y(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,m]=P(c.x,c.y),p=c.h*h*(1-f);p<2||(Hu(s,d,m,p,8,c.lean,-1),Hu(s,d+c.side*6,m+2,p*.6,6,c.lean+c.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const c of i)for(let h=0;h<2;h++)I(c.x,c.y,.25,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.45,h?vt.ice2:vt.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=y(0,6.283),u=y(0,r);I(t+Math.cos(l)*u,n+Math.sin(l)*u,y(.6,1.4),y(-.6,.6)+.8,y(-.6,.6)-.4,-.6,y(.6,1),Math.random()<.6?vt.snow:vt.ice1,2,-.5,!1,.98)}return!0};const Xy=["......####","...#######","##########",".#########","..#.#.#.#."],jv=Xy.map(e=>e.split("").reverse().join(""));H.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:y(-45,45),vy:y(-55,-15),ph:y(0,6.283),L:Math.random()<.4?12:9});A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=P(t,n,.6);a.globalAlpha=vh(s,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,m=f+c.vy*l+60*l*l,p=Math.PI/2+h*.9;vf(a,d+Math.cos(p)*c.L*.5,m+Math.sin(p)*c.L*.5,Math.cos(p),Math.sin(p),c.L,3,vt.ice3,vt.ice1,vt.snow)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=P(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Dt(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=vt.ice1,a.fillRect(Dt(c)-d,Dt(h),d*2,1),a.fillRect(Dt(c),Dt(h)-d,1,d*2)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=P(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,$u(a,Xy,l+f+15,u-s*6,3,3,{"#":vt.ice1}),$u(a,jv,l-f-15,u-s*6,3,3,{"#":vt.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)I(t+y(-.3,.3),n+y(-.3,.3),y(.3,.9),y(-.8,.8),y(-.8,.8),y(-.3,.4),y(.6,1),vt.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=y(0,6.283),l=y(1,2.5);I(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,y(0,1),.5,a%3?vt.ice1:vt.moon2,2,1,!0)}return!0};function l2(e,t,n,r,o,i,a){e.fillStyle=a;const s=Dt(t),l=Dt(n),u=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=u*u-f*f,d=-c,m=c;if(h<=0){e.fillRect(s+Dt(d),l+Dt(f*i),Dt(m-d),Math.max(1,Dt(2*i)));continue}const p=Math.sqrt(h),g=o-p,x=o+p;g>d&&e.fillRect(s+Dt(d),l+Dt(f*i),Dt(Math.min(m,g)-d),Math.max(1,Dt(2*i))),x<m&&e.fillRect(s+Dt(x),l+Dt(f*i),Dt(m-x),Math.max(1,Dt(2*i)))}}const ll=[];function u2(e,t,n){A({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=P(e+Math.cos(s)*i,t+Math.sin(s)*i);ur(r,l,u,a%3?2:3,a%2?vt.ice2:vt.moon)}r.globalAlpha=1}}),A({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){ft(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),Q(9)}const Va=3,f2=Va-.3,c2=e=>(e=e-1,1+e*e*(2.4*e+1.4));function ul(e,t,n,r,o){if(!(r<1)){e.fillStyle=o;for(let i=-r;i<r;i+=2){const a=Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Dt(t-a),Dt(n+i),Dt(a*2),2)}}}function C0(e,t,n,r,o){if(r<2)return;const i=r/2;e.fillStyle=o;for(let a=-i;a<i;a+=2){const s=r*Math.sqrt(Math.max(0,1-(a+1)/i*((a+1)/i)));e.fillRect(Dt(t-s),Dt(n+a),Dt(s*2),2)}}H.buho_R=e=>{if(e.type==="starfall"){const p=ll.findIndex(g=>Math.abs(g.x-e.x)<.3&&Math.abs(g.y-e.y)<.3);return p>=0?ll.splice(p,1):u2(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,a={x:t,y:n,t:0};ll.push(a),ll.length>6&&ll.shift(),A({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,b=Math.min(1,x/.15)*(x>o?Math.max(0,1-(x-o)/.6):1);p.globalAlpha=b;for(const[S,_,T]of[[r,56,1],[r*.9,48,-1]])for(let R=0;R<_;R++){if((R+(T>0?0:2))%4===3)continue;const C=R/_*6.283+x*.7*T,[O,z]=P(t+Math.cos(C)*S,n+Math.sin(C)*S);ur(p,O,z,2,T>0?vt.moon2:vt.ice2)}for(let S=0;S<12;S++){const _=S/12*6.283-x*.35,[T,R]=P(t+Math.cos(_)*r*.62,n+Math.sin(_)*r*.62),[C,O]=P(t+Math.cos(_)*r*.82,n+Math.sin(_)*r*.82);for(let z=0;z<=4;z++)ur(p,T+(C-T)*z/4,R+(O-R)*z/4,2,vt.moon)}const[M,v]=P(t,n);if(l2(p,M,v,30,12,.5,vt.moon),x>.45){const S=Math.min(1,(x-.45)/.1);p.globalAlpha=b*S,ur(p,M-26,v-3,4,vt.amber),ur(p,M+26,v-3,4,vt.amber)}p.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,b=Math.min(1,x/.2)*(x>o?Math.max(0,1-(x-o)/.5):1),[M,v]=P(t,n,Va+1.7),S=p.createRadialGradient(M,v,4,M,v,60);S.addColorStop(0,`rgba(200,190,255,${.45*b})`),S.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=S,p.fillRect(Dt(M)-60,Dt(v)-60,120,120),p.globalAlpha=b,l2(p,M,v,20,9,1,vt.moon),p.globalAlpha=1}});const s=za(e,o),l=()=>w.T-s.t0,u=Array.from({length:26},(p,g)=>{const x=y(0,6.283),b=Math.sqrt(Math.random())*r*.82,M=1-b/r;return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,z:Va+y(0,.3)+M*.35,s:Dt(y(18,26)+M*16),dl:b/r*.25+g*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,g)=>p.x+p.y-(g.x+g.y)||p.z-g.z),f=Array.from({length:34},()=>{const p=y(0,6.283),g=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*g,y:n+Math.sin(p)*g,ph:Math.random(),sp:y(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),c=p=>p>0?0:Xl(-p/.35),h=(p,g,x)=>{for(const b of f){if(b.back!==g)continue;const M=(l()*b.sp+b.ph)%1,[v,S]=P(b.x+Math.sin(l()*2+b.ph*9)*.15,b.y,Va*(1-M));p.globalAlpha=x*(g?.6:.9)*Math.min(1,(1-M)*5,M*8),ur(p,v,S,2,vt.snow),p.fillStyle=vt.ice2,p.fillRect(Dt(v)-1,Dt(S)-4,1,2)}};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g,x){const b=or(s),M=c(b);if(M>=1){x.t=x.dur+1;return}const v=Math.min(1,l()/.3)*(1-M),[S,_]=P(t,n),T=r*N.HW*Math.SQRT2*.92;p.globalAlpha=.5*v,p.fillStyle=Vt(p,vt.night,8);for(let R=-T/2;R<T/2;R+=2){const C=T*Math.sqrt(Math.max(0,1-(2*(R+1)/T)**2));p.fillRect(Dt(S-C),Dt(_+R),Dt(C*2),2)}h(p,!0,v),yi(s,t,n,r*1.05,10937599,.5*v)}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g,x){const b=or(s),M=c(b);if(M>=1){x.t=x.dur+1;return}const v=l(),S=1-M;h(p,!1,S*Math.min(1,v/.3));const _=c2(Xl(v/.35)),[T,R]=P(t,n,Va+M*.3),C=Dt(r*.8*N.HW*Math.SQRT2*_*(1+M*.3));for(let O=0;O<4;O++){p.globalAlpha=S*(O===0?.8:.96),O===0?C0(p,T+3,R+8,C,Vt(p,vt.ice3,12)):O===1?(C0(p,T,R,C+2,Vt(p,vt.ice2,10)),C0(p,T,R,C-2,vt.ice2)):O===2&&C0(p,T-2,R-6,C-10,vt.ice1);for(const z of u){const E=c2(Xl((v-z.dl)/.3));if(E<=.02)continue;const[U,G]=P(z.x+z.dx*M*1.2,z.y+z.dy*M*1.2,z.z+M*.4),K=Dt(z.s*E*(1+M*.3));O===0?ul(p,U+2,G+5,K,Vt(p,vt.ice3,12)):O===1?(ul(p,U,G,K+1,Vt(p,vt.ice2,10)),ul(p,U,G,K-2,vt.ice2)):O===2?ul(p,U-1,G-K*.22,Dt(K*.8),vt.ice1):z.z>Va+.42&&ul(p,U-K*.25,G-K*.5,Dt(K*.32),vt.snow)}}}});const d=[];for(let p=0;p<14;p++){const g=y(0,6.283),x=r*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(g)*x,y:n+Math.sin(g)*x,fall:o-.12+p*.025,ap:.08+p*.025,L:y(18,28),hit:!1})}d.sort((p,g)=>p.x+p.y-(g.x+g.y));const m={boom:!1};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(const b of d){const M=(x-b.fall)/.12;if(M>=1){if(!b.hit){b.hit=!0;for(let C=0;C<3;C++)I(b.x,b.y,.1,y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),.45,C?vt.ice2:vt.snow,2,10,!0)}const R=(x-b.fall-.12)/.2;if(R<1){const[C,O]=P(b.x,b.y),z=Dt(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=vt.snow,p.fillRect(Dt(C)-z,Dt(O)-1,z*2,2),p.fillRect(Dt(C)-1,Dt(O)-z/2,2,z),p.globalAlpha=1}continue}const v=Math.min(1,Math.max(0,(x-b.ap)/.25));if(v<=0)continue;const S=M>0?f2*(1-M*M):f2+Math.sin(x*9+b.x)*.03,[_,T]=P(b.x,b.y,S);p.globalAlpha=v,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(Dt(_)-1,Dt(T)-b.L-30,2,28)),Hu(p,_,T-b.L,b.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=o&&(m.boom=!0,a.t===0&&(a.t=1,u2(t,n,r)))}});for(let p=0;p<10;p++){const g=y(0,6.283),x=y(0,r);I(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1,2),.7,p%2?vt.moon2:vt.ice1,2,0,!0)}return!0};function Gy(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:y(-9,9),oy:y(-3,4),h:y(8,n?16:12),lean:y(-.35,.35)});A({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=P(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)Hu(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=y(0,6.283),s=y(.8,2);I(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,y(.5,1.8),.35,i%2?vt.snow:vt.ice2,2,5,!0)}}const Ny=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&Ny.push([t,e,n>3.6?1:0])}Pe.buho_A=(e,t,n,r,o,i)=>{Dy(t,(h,d)=>Gy(h,d,!1));const a=Math.cos(o),s=Math.sin(o);mt(!0);const l=Ht();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,ur(l,n-a*h*5,r-s*h*5,6-h,vt.moon2);l.globalAlpha=1,mt(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,m]of Ny)ur(e,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,m?vt.ice3:vt.ice1);ur(e,n+-3*f*2,r+-3*c*2,2,vt.snow),Math.random()<.45&&I(t.x,t.y,t.z||.45,0,0,-.2,.35,vt.ice1,2,0,!0)};Qe.buho=e=>Gy(e.x,e.y,!!e.big);H.buho_Q_hit=e=>Uy(e.x,e.y);const B=Math.round,Jt=Math.PI*2;let wt=0,St=0;function re(e,t,n=0){wt=(e-t)*N.HW+N.OX,St=(e+t)*N.HH-n*N.ZK}function Ne(e,t,n,r,o){e.fillStyle=o,e.fillRect(B(t-r/2),B(n-r/2),r,r)}function aa(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(B(t+(r-t)*l/s-i/2),B(n+(o-n)*l/s-i/2),i,i)}function to(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(B(t-a/2),B(n+i*o),B(a),Math.max(1,B(2*o)))}}const Ln=e=>e<0?0:e>1?1:e,$n=e=>1-(1-e)*(1-e),By=()=>N.HW*Math.SQRT2,Mt={w:"#f4fdff",l:"#c4f6ff",m:"#6ee2f4",d:"#2aa6c8",k:"#16608a",x:"#0c3450"},Fe={w:"#fbf4e2",l:"#e6d6b0",m:"#bca67a",d:"#7a6646"},eo={l:"#ffd890",m:"#f0a040",d:"#b0581e"},xe={l:"#d6cfc0",m:"#a49c8a",d:"#746c5c",k:"#4a443a",x:"#2e2a24"},xs=["#8ac050","#5a8a34"],tr={w:"#eef4d8",l:"#d8d070",m:"#a8a030",d:"#6a6a20",k:"#2e3018",eye:"#d0402a"},cn={k:"#120c08",d:"#2a1c12",m:"#4a3220",l:"#7a5a3a"},Rr=7267060,wf=15769664;Tn.spirit_bolt=[Mt.w,Mt.l,Mt.m,Mt.d];Tn.spirit=[Mt.w,Mt.l,Mt.m,Mt.d];Tn.swarm=[tr.w,tr.l,tr.m,tr.d];Tn.behemoth=[Fe.w,Mt.l,Mt.m,eo.m];const Sf={Q:4,W:2,E:10},ns=new Map;function $y(e){const t=window.SIM&&window.SIM.HEROES,n=t&&t.cabra;return n&&n.abil?n.abil[e]:null}function Ld(e,t){const n=w.game;if(!n||!n.units)return[];const r=$y(t),o=r&&r.petSprite,i=r&&r.count||Sf[t],a=[];for(const l of n.units){if(l.dead||!l.pet||l.illusion||ns.has(l.id)||e.team&&l.team!==e.team||l.owner&&e.uid&&l.owner.id!==e.uid)continue;const u=Math.hypot(l.x-e.x,l.y-e.y);u>2.4||a.push([o&&l.sprite===o?0:1,u,l.id])}a.sort((l,u)=>l[0]-u[0]||l[1]-u[1]);const s=a.slice(0,i).map(l=>l[2]);ns.size>300&&ns.clear();for(const l of s)ns.set(l,t);return s}function kd(e,t,n,r,o){const i=[];for(const a of e){const s=Z(a);s&&i.push([s.x,s.y])}for(let a=i.length;a<n;a++){const s=a/n*Jt+o;i.push([t.x+Math.cos(s)*r,t.y+Math.sin(s)*r])}return i}function Hy(e,t,n,r){A({type:"custom",layer:"ground",dur:t*1.3+2,x:0,y:0,nt:0,draw(o,i,a){const s=Z(e);if(!s||s.dead){a.t=a.dur+1;return}w.T>=a.nt&&(a.nt=w.T+n,r(s))}})}function wh(e,t,n,r,o,i){for(let a=0;a<o;a+=2){const s=a/o,l=r*Math.pow(1-s,.8)*(s<.2?.6+s*2:1),u=Math.sin(s*5+i)*s*r*.6;l<.6||(e.fillStyle=Mt.d,e.fillRect(B(t+u-l),B(n-a-2),Math.max(1,B(l*2)),2),l>1.5&&(e.fillStyle=Mt.m,e.fillRect(B(t+u-l*.62),B(n-a-2),Math.max(1,B(l*1.24)),2)),s<.6&&l>2&&(e.fillStyle=Mt.l,e.fillRect(B(t+u-l*.3),B(n-a-2),Math.max(1,B(l*.6)),2)),s<.3&&l>2.5&&(e.fillStyle=Mt.w,e.fillRect(B(t+u-1),B(n-a-2),2,2)))}}function Wy(e,t,n,r,o,i,a,s){for(const f of[-1,1]){const c=f*.42,h=-.12;for(let d=0;d<26*o;d++){const m=Math.PI+d/26*Jt,p=.36*(1-d/26*.75),g=c+f*Math.cos(m)*p,x=h+Math.sin(m)*p;Ne(e,t+g*r,n+x*r*.5,d<26*.6?i+1:i,d<26*.6?a:s)}}const u=Ln(o*1.6-.3);for(let f=0;f<=8*u;f++)Ne(e,t,n+(-.2+f*.07)*r*.5,i,a);u>.9&&(Ne(e,t-.12*r,n+.05*r*.5,i,s),Ne(e,t+.12*r,n+.05*r*.5,i,s))}const h2=[3735,3050,1493,3315,2457,1910,3879,756];function Dd(e,t,n,r,o,i){const a=h2[r%h2.length];e.fillStyle=i;for(let s=0;s<12;s++)a>>s&1&&e.fillRect(B(t+(s%3-1)*o-o/2),B(n+((s/3|0)-1.5)*o-o/2),o,o)}function qy(e,t,n,r,o,i,a,s){re(t,n);const l=wt,u=St,f=De(r),c=f*.5,h=72,d=54;e.globalAlpha=a;for(let m=0;m<h;m++){const p=m/h;if(p>o)break;const g=p*Jt+i;Ne(e,l+Math.cos(g)*f,u+Math.sin(g)*c,3,m%9===0?Mt.w:Mt.m)}for(let m=0;m<d;m++){const p=m/d;if(p>o)break;const g=-p*Jt-i*.6;Ne(e,l+Math.cos(g)*f*.76,u+Math.sin(g)*c*.76,2,eo.m)}for(let m=0;m<12;m++){const p=m/12;if(p>o)break;const g=p*Jt+i*.5,x=l+Math.cos(g)*f*.88,b=u+Math.sin(g)*c*.88;e.globalAlpha=a*(.6+.4*s*(.5+.5*Math.sin(w.T*6+m))),Dd(e,x,b,m,2,m&1?Mt.l:Fe.w)}e.globalAlpha=a*.9,Wy(e,l,u,f*.62,o,2,Mt.l,eo.l)}function Wu(e,t,n,r,o,i,a,s=0){re(t,n);const l=wt,u=St,f=De(r),c=f*.5;for(let h=0;h<o;h++){const d=h/o*Jt+s;Ne(e,l+Math.cos(d)*f,u+Math.sin(d)*c,i,a)}}function Zl(e,t,n,r,o,i,a,s){let l=t,u=n;re(l,u);let f=wt,c=St;for(let h=1;h<=4;h++){const d=r+(q(i+h*3.1)-.5)*.9,m=o/4;l+=Math.cos(d)*m,u+=Math.sin(d)*m,re(l,u),aa(e,f,c,wt,St,Math.max(1,a-(h>2?1:0)),s),f=wt,c=St}}H.cabra_Q=e=>{const t=e.x,n=e.y,r=e.dur||10,o=Math.random()*Jt,i=Ld(e,"Q"),a=kd(i,e,Sf.Q,.85,o);A({type:"custom",layer:"ground",add:!0,dur:1,x:t,y:n,draw(f,c){re(t,n);const h=wt,d=St;f.globalAlpha=c>.6?(1-c)/.4:1,Wy(f,h,d,By()*1.5,$n(Ln(c/.35)),2,Mt.m,Mt.l),Wu(f,t,n,1.15,30,2,Mt.d,c*2)}});const s=16,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=Math.random()*Jt,u[f]=y(.2,1.6);A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(f,c){const h=$n(c);for(let d=0;d<s;d++){const m=a[d%a.length];for(let p=0;p<3;p++){const g=Math.max(0,h-p*.06),x=l[d]+g*2.4,b=2.2*(1-g);re(m[0]+Math.cos(x)*b,m[1]+Math.sin(x)*b,.45+u[d]*(1-g)),f.globalAlpha=(1-p/3)*(c>.85?(1-c)/.15:1),Ne(f,wt,St,p?2:3,p?Mt.m:Mt.w)}}}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(f,c){for(let h=0;h<a.length;h++){const d=Ln((c-h*.06)/.85);if(d<=0||d>=1)continue;const m=i[h]?Z(i[h]):null,p=m?m.x:a[h][0],g=m?m.y:a[h][1];re(p,g,.05);const x=wt,b=St;if(d<.45){const M=d/.45;f.globalAlpha=1,wh(f,x,b,6+4*M,B(14+46*M),w.T*14+h)}else{const M=(d-.45)/.55;f.globalAlpha=1-M,wh(f,x,b-30*M,7*(1-M)+2,B(40*(1-M)+6),w.T*14+h)}if(d>.4){const M=(d-.4)/.6;f.globalAlpha=1-M,Wu(f,p,g,.2+M*.55,14,2,h&1?Mt.l:Mt.w,h)}}}});for(let f=0;f<a.length;f++){const c=a[f];for(let h=0;h<5;h++)I(c[0],c[1],.3,y(-.8,.8),y(-.8,.8),y(1,2.4),y(.4,.7),h&1?Mt.l:Mt.w,2,-.6,!0);dt(c[0],c[1],1.2,Rr,.8,.6)}dt(t,n,2.4,Rr,.7,.8);for(const f of i)Hy(f,r,.1,c=>{dt(c.x,c.y,1.3,Rr,.42+.12*Math.sin(w.T*9+f),.22),Math.random()<.3&&I(c.x+y(-.15,.15),c.y+y(-.15,.15),.55,0,0,y(.6,1.1),.6,Math.random()<.5?Mt.l:Mt.m,2,-.3,!0)});Q(1.5)};function Qv(e){const t=e.x,n=e.y,r=Math.random()*Jt;A({type:"custom",layer:"top",add:!0,dur:1,x:t,y:n,draw(o,i){const a=i*1;re(t,n,.15);const s=wt,l=St;if(a<.4){const u=a/.4;((w.T*24|0)%3!==0||u<.3)&&(o.globalAlpha=1-u*.5,wh(o,s,l,7*(1-u)+2,B(34*(1-u)+8),w.T*16))}if(a>.2){const u=(a-.2)/.8;for(let f=0;f<10;f++){const c=r+f/10*Jt+u*5,h=.12+u*.45*(.6+.4*q(f+r)),d=.4+u*(1.4+q(f*3+r)*.8);re(t+Math.cos(c)*h,n+Math.sin(c)*h,d),o.globalAlpha=(1-u)*(f&1?.8:1),Ne(o,wt,St,f%3===0?3:2,f%3===0?Mt.w:Mt.m)}}a<.3&&(o.globalAlpha=1-a/.3,Wu(o,t,n,.15+a*1.2,12,2,Mt.l,r))}}),dt(t,n,1.1,Rr,.6,.5)}H.cabra_W=e=>{const t=Math.random()*99,n=e.dur||12,r=Ld(e,"W"),o=kd(r,e,Sf.W,.8,t);for(let i=0;i<o.length;i++){const[a,s]=o[i],l=t+i*17,u=i*.06,f=7,c=new Float32Array(f),h=new Float32Array(f);for(let v=0;v<f;v++)c[v]=v/f*Jt+q(l+v)*.6,h[v]=.6+q(l+v*7)*.5;A({type:"custom",layer:"ground",dur:2.2,delay:u,x:a,y:s,draw(v,S){const _=S*2.2,T=$n(Ln(_/.14));v.globalAlpha=_>1.6?(2.2-_)/.6:1;for(let z=0;z<f;z++)Zl(v,a,s,c[z],h[z]*T,l+z*11,3,xe.x);if(_<1.2){v.globalAlpha=(1-_/1.2)*.95;for(let z=0;z<f;z++)Zl(v,a,s,c[z],h[z]*T*.85,l+z*11,1,z&1?Mt.m:eo.m)}const R=Ln((_-.1)/.25);if(R<=0)return;v.globalAlpha=(_>1.2?Math.max(0,(2.2-_)/1):1)*.9;const C=.62*R,O=[[C,0],[0,C],[-C,0],[0,-C]];for(let z=0;z<4;z++){re(a+O[z][0],s+O[z][1]);const E=wt,U=St;re(a+O[(z+1)%4][0],s+O[(z+1)%4][1]),aa(v,E,U,wt,St,2,Mt.d),Dd(v,E,U,z+i*4,2,Mt.l)}}}),A({type:"custom",layer:"ground",dur:.32,delay:u,x:a,y:s,draw(v,S){re(a,s);const _=wt,T=St,R=Math.sin(Math.min(1,S*1.6)*Math.PI)*14,C=B(De(.55)*(.7+.3*S));v.globalAlpha=1-S*S,v.fillStyle=cn.d,to(v,_,T,C,.5);for(let O=0;O<R;O+=2){const z=C*Math.sqrt(1-O/(R+1)*(O/(R+1)))*.9;v.fillStyle=O>R-4?cn.l:cn.m,v.fillRect(B(_-z),B(T-O),B(z*2),2)}}});const d=10,m=new Float32Array(d),p=new Float32Array(d),g=new Float32Array(d);for(let v=0;v<d;v++)m[v]=v/d*Jt+q(l+v*5)*.8,p[v]=.9+q(l+v*9)*1.4,g[v]=3.2+q(l+v*13)*2.2;A({type:"custom",layer:"top",dur:1.2,delay:u,x:a,y:s,draw(v,S){const _=S*1.2;for(let T=0;T<d;T++){const R=Math.min(_,g[T]/6),C=Math.max(0,g[T]*R-6*R*R),O=p[T]*R;re(a+Math.cos(m[T])*O,s+Math.sin(m[T])*O,C+.05);const z=T%3===0,E=(_*14+T|0)&1,U=(E?13:9)+(z?4:0),G=(E?8:12)+(z?2:0);v.globalAlpha=_>.85?(1.2-_)/.35:1,v.fillStyle=xe.k,v.fillRect(B(wt-U/2-1),B(St-G/2-1),U+2,G+2),v.fillStyle=xe.m,v.fillRect(B(wt-U/2),B(St-G/2),U,G),v.fillStyle=xe.l,v.fillRect(B(wt-U/2),B(St-G/2),U,3),v.fillStyle=xe.d,v.fillRect(B(wt+U/2-3),B(St-G/2+3),3,G-3),T%3===0&&(v.fillStyle=xs[0],v.fillRect(B(wt-U/2),B(St-G/2),5,3),v.fillStyle=xs[1],v.fillRect(B(wt-U/2),B(St-G/2+3),3,2)),T%4===1&&_<.6&&(v.fillStyle=Mt.l,v.fillRect(B(wt-1),B(St),3,2))}}});const x=12,b=new Float32Array(x),M=new Float32Array(x);for(let v=0;v<x;v++)b[v]=v/x*Jt+q(l+v*2.3)*.5,M[v]=.7+q(l+v*4.1)*.6;A({type:"custom",layer:"top",dur:.8,delay:u,x:a,y:s,draw(v,S){const _=$n(S);for(let T=0;T<x;T++){const R=(.25+1*_)*M[T];re(a+Math.cos(b[T])*R,s+Math.sin(b[T])*R,.1+S*.35*M[T]);const C=B((11-S*6)*M[T]);v.globalAlpha=(1-S)*.55,v.fillStyle=T&1?Fe.m:xe.m,v.fillRect(B(wt-C/2),B(St-C/2),C,B(C*.7)),v.fillStyle=Fe.l,v.fillRect(B(wt-C/2),B(St-C/2),B(C*.5),2),v.fillStyle=xe.d,v.fillRect(B(wt-C/2),B(St+C*.2),C,2)}}});for(let v=0;v<12;v++){const S=Math.random()*Jt;I(a,s,.2,Math.cos(S)*y(.6,2),Math.sin(S)*y(.6,2),y(2,4),y(.5,.8),v%4===0?xs[v&1]:v&1?xe.m:xe.d,3,10,!1,.95)}dt(a,s,1.6,wf,.55,.5),dt(a,s,1.2,Rr,.5,1)}for(const i of r)Hy(i,n,.12,a=>dt(a.x,a.y,1,Rr,.22,.26));Q(5)};function Zv(e){const t=e.x,n=e.y,r=Math.random()*99,o=10,i=new Float32Array(o),a=new Float32Array(o),s=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o);for(let f=0;f<o;f++)i[f]=y(-.22,.22),a[f]=y(-.22,.22),s[f]=y(.15,1),l[f]=y(.4,1.2),u[f]=Math.random()*Jt;A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(f,c){const h=c*1;for(let d=0;d<o;d++){const m=Math.sqrt(2*s[d]/9);let p;if(h<m)p=s[d]-4.5*h*h;else{const b=9*m*.35,M=h-m;p=Math.max(0,b*M-4.5*M*M)}const g=l[d]*Math.min(h,m*1.8)*.5;re(t+i[d]+Math.cos(u[d])*g,n+a[d]+Math.sin(u[d])*g,p);const x=d<4?7:5;f.globalAlpha=h>.75?(1-h)/.25:1,f.fillStyle=xe.k,f.fillRect(B(wt-x/2-1),B(St-x/2-1),x+2,x+2),f.fillStyle=d&1?xe.m:xe.d,f.fillRect(B(wt-x/2),B(St-x/2),x,x),f.fillStyle=xe.l,f.fillRect(B(wt-x/2),B(St-x/2),x-2,2)}if(h<.3){re(t,n,.6),f.globalAlpha=1-h/.3;const d=B(8*(1-h/.3))+2;Ne(f,wt,St,d,Mt.l)}}}),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(f,c){re(t,n);const h=wt,d=St,m=Ln((c-.45)/.55);f.globalAlpha=1-m,f.fillStyle=xe.k,to(f,h,d+2,18,.45);for(let p=0;p<9;p++){const g=q(r+p)*Jt,x=q(r+p*3)*14,b=h+Math.cos(g)*x,M=d+Math.sin(g)*x*.45-3+m*4;f.fillStyle=p&1?xe.m:xe.d,f.fillRect(B(b-3),B(M-2),6,4),f.fillStyle=xe.l,f.fillRect(B(b-3),B(M-2),3,1)}}}),A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(f,c){for(let h=0;h<6;h++){const d=r+h/6*Jt;re(t+Math.cos(d)*(.2+c*.6),n+Math.sin(d)*(.2+c*.6),.2+c*.4),f.globalAlpha=(1-c)*.6,Ne(f,wt,St,B(12-c*8),h&1?xe.l:Fe.l)}}});for(let f=0;f<8;f++)I(t+y(-.2,.2),n+y(-.2,.2),y(.3,.9),y(-1,1),y(-1,1),y(.5,1.5),y(.5,.8),f&1?xe.m:xs[1],2,9,!1,.95);Q(1.5)}function Vy(e,t,n,r,o){const i=(a,s,l,u,f)=>{e.fillStyle=f,e.fillRect(B(t+(r>0?a:-a-l)*2),B(n+s*2),l*2,u*2)};o&&(i(-3,-5,4,3,tr.w),i(-1,-4,3,2,tr.w)),i(-5,-1,2,2,tr.d),i(-3,-1,5,2,tr.m),i(-3,-1,4,1,tr.l),i(2,-2,2,3,tr.d),i(3,-2,1,1,tr.eye),i(-2,1,1,2,tr.k),i(-4,2,2,1,tr.k),i(1,1,1,1,tr.k),o||i(-5,-2,6,1,tr.w)}H.cabra_E=e=>{const t=e.x,n=e.y,r=Math.random()*Jt,o=Math.cos(r),i=Math.sin(r),a=Ld(e,"E"),s=kd(a,e,Sf.E,.9,r),l=.85,u=1.6;A({type:"custom",layer:"ground",dur:u,x:t,y:n,draw(m,p){const g=p*u,x=g<.15?$n(g/.15):g>1.2?1-Ln((g-1.2)/.4):1;if(x<=0)return;m.globalAlpha=1;const b=16,M=-i,v=o,S=(T,R,C)=>{const O=C/b*2-1,z=1+(q(C*1.7+r+R)-.5)*.8,E=.26*(1-O*O)*z*x*T;re(t+o*O*l*(.75+.25*T)+M*E*R,n+i*O*l*(.75+.25*T)+v*E*R)},_=(T,R)=>{m.beginPath(),S(T,1,0),m.moveTo(B(wt),B(St));for(let C=1;C<=b;C++)S(T,1,C),m.lineTo(B(wt),B(St));for(let C=b-1;C>=0;C--)S(T,-1,C),m.lineTo(B(wt),B(St));m.closePath(),m.fillStyle=R,m.fill()};_(1.55,cn.l),_(1.25,cn.m),_(1,cn.k),_(.42,eo.d),_(.18,eo.m);for(let T=1;T<b;T+=3)for(const R of[-1,1])S(1.7,R,T),m.fillStyle=T&1?cn.m:cn.l,m.fillRect(B(wt-3),B(St-3),6,4),m.fillStyle=cn.d,m.fillRect(B(wt-3),B(St+1),6,2)}}),A({type:"custom",layer:"ground",add:!0,dur:1.3,x:t,y:n,draw(m,p){re(t,n),m.globalAlpha=(1-p)*(.6+.4*Math.sin(w.T*20)),m.fillStyle=eo.m,to(m,wt,St,B(10+6*p),.4)}});const f=18,c=new Float32Array(f),h=new Float32Array(f),d=new Float32Array(f);for(let m=0;m<f;m++)c[m]=m*.025+y(0,.02),h[m]=y(1,2),d[m]=y(-.7,.7);A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(m,p){const g=p*1.15,x=w.T*28|0;for(let b=0;b<f;b++){const M=Ln((g-c[b])/.6);if(M<=0||M>=1&&g-c[b]>.72)continue;const v=s[b%s.length],S=t+o*d[b]*l,_=n+i*d[b]*l,T=$n(M),R=Math.sin(M*14+b)*.12*(1-M),C=S+(v[0]-S)*T+R,O=_+(v[1]-_)*T-R,z=Math.sin(M*Math.PI)*h[b]+.35*M;re(C,O,z);const E=wt,U=St;re(S+(v[0]-S)*Math.max(0,T-.05),_+(v[1]-_)*Math.max(0,T-.05),Math.sin(Math.max(0,M-.05)*Math.PI)*h[b]);const G=E>=wt?1:-1;m.globalAlpha=M>=1?1-(g-c[b]-.6)/.12:1,M<.9&&(m.fillStyle=cn.m,m.fillRect(B(wt-1),B(St-1),2,2)),Vy(m,E,U,G,(x+b&1)===1)}}});for(let m=0;m<12;m++)I(t+o*y(-.6,.6),n+i*y(-.6,.6),.1,y(-1.4,1.4),y(-1.4,1.4),y(1.5,3.2),y(.4,.7),m%3?cn.m:cn.l,3,9,!1,.94);for(let m=0;m<6;m++)I(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1.2),y(.3,.5),eo.l,2,2,!0);dt(t,n,1.6,wf,.7,1.2),Q(2)};function Jv(e){const t=e.x,n=e.y,r=3,o=Math.random()*Jt,i=new Float32Array(r),a=new Float32Array(r);for(let s=0;s<r;s++)i[s]=o+s/r*Jt+y(-.5,.5),a[s]=y(1.6,2.6);A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(s,l){const u=w.T*30|0;for(let f=0;f<r;f++){const c=l*l,h=a[f]*c+Math.sin(l*12+f)*.05;re(t+Math.cos(i[f])*h,n+Math.sin(i[f])*h,.35+l*1.8+Math.sin(l*20+f*2)*.06),s.globalAlpha=l>.65?(1-l)/.35:1,Vy(s,wt,St,Math.cos(i[f])-Math.sin(i[f])>=0?1:-1,(u+f&1)===1)}}}),I(t,n,.3,y(-.6,.6),y(-.6,.6),y(.8,1.5),.4,tr.d,2,6,!1,.94)}const Sh=4.6,d2=[1,.85,.65,.45,.28,.14];let m2=null,p2=null,y2=[],g2=[];function tw(e){return m2!==e&&(m2=e,y2=[{u0:0,fill:Vt(e,Mt.k,6),a:.6},{u0:.6,fill:Vt(e,Mt.d,8),a:.65},{u0:.88,fill:Vt(e,Mt.m,11),a:.75}]),y2}function ew(e){return p2!==e&&(p2=e,g2=[{u0:0,fill:Vt(e,Mt.l,3),a:.55},{u0:.6,fill:Vt(e,Mt.m,5),a:.6},{u0:.88,fill:Vt(e,Mt.w,10),a:.8}]),g2}function x2(e,t,n,r,o,i,a){for(let s=0;s<10;s++){const l=s/10*Jt+a*.8,u=Math.cos(l),f=Math.sin(l);if(u+f>0!==i)continue;const c=(a*1.3+q(s*3.3))%1*Sh;re(t+u*r,n+f*r,c),e.globalAlpha=o*(1-c/Sh)*(i?1:.6),Dd(e,wt,St,s,2,s&1?Fe.w:Mt.w)}}H.cabra_R=e=>{const t=e.x,n=e.y,r=1.5,o=e.radius||3.4,i=.2,a=Math.random()*99;e.uid&&Ud(e.uid);const s=w.T,l=()=>w.T-s,u=g=>g<.12?r*.95*$n(g/.12):r*.95*Math.max(0,1-(g-.12)/1.5)**1.4,f=g=>g<.05?g/.05:g>1.2?Math.max(0,1-(g-1.2)/.42):1,c=g=>Sh*$n(Ln(g/.16));A({type:"custom",layer:"ground",add:!0,dur:3.4,x:t,y:n,draw(g,x){const b=x*3.4,M=b>2.4?3.4-b:1;qy(g,t,n,r,$n(Ln(b/.25)),b*.35+a,M,b<1.4?1:.4)}}),A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(g,x,b){const M=l(),v=u(M),S=f(M);if(S<=0||v<.05){M>.3&&(b.t=b.dur+1);return}re(t,n),ko(g,wt,St,De(v),De(v*.92),io(c(M)),!1,tw(g),d2,S),x2(g,t,n,v,S,!1,M)}}),A({type:"custom",layer:"top",add:!0,dur:1.8,x:t,y:n,draw(g,x,b){const M=l(),v=u(M),S=f(M);if(S<=0||v<.05){M>.3&&(b.t=b.dur+1);return}re(t,n),ko(g,wt,St,De(v),De(v*.92),io(c(M)),!0,ew(g),d2,S*.85),x2(g,t,n,v,S,!0,M),g.globalAlpha=S*.8,g.fillStyle=Mt.w;const _=c(M);for(let T=0;T<18;T++){const R=T/18*Jt+M*2;re(t+Math.cos(R)*v*.92,n+Math.sin(R)*v*.92,_),g.fillRect(B(wt-1),B(St-1),3,2)}}}),A({type:"custom",layer:"ground",add:!0,delay:i,dur:.35,x:t,y:n,draw(g,x){re(t,n),g.globalAlpha=(1-x)*.75,g.fillStyle=Vt(g,Fe.w,x<.3?8:4),to(g,wt,St,B(De(r)*(.6+x*.7)),.5),g.globalAlpha=1-x,g.fillStyle=eo.l;const b=De(r)*(.6+x*.7);for(let M=0;M<40;M++){const v=M/40*Jt;g.fillRect(B(wt+Math.cos(v)*b-2),B(St+Math.sin(v)*b*.5-2),4,4)}}}),A({type:"custom",layer:"ground",delay:i,dur:.75,x:t,y:n,draw(g,x){const b=r*.9+(o-r*.9)*$n(x);re(t,n);const M=wt,v=St,S=De(b),_=S*.5;g.globalAlpha=(1-x)*.85;for(let T=0;T<56;T++){const R=T/56*Jt;Ne(g,M+Math.cos(R)*S,v+Math.sin(R)*_-x*8,B(11-x*7),T&1?Fe.l:xe.l)}g.globalAlpha=1-x;for(let T=0;T<56;T+=2){const R=T/56*Jt+.05;Ne(g,M+Math.cos(R)*S*.94,v+Math.sin(R)*_*.94,3,eo.l)}}});const h=12,d=new Float32Array(h),m=new Float32Array(h),p=Math.max(.6,o-r*.95);for(let g=0;g<h;g++)d[g]=g/h*Jt+q(a+g)*.4,m[g]=p*(.55+q(a+g*5)*.45);A({type:"custom",layer:"ground",delay:i,dur:2.8,x:t,y:n,draw(g,x){const b=x*2.8,M=$n(Ln(b/.12));g.globalAlpha=b>2?(2.8-b)/.8:1;for(let v=0;v<h;v++)Zl(g,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M,a+v*7,4,xe.x);if(b<1.4){g.globalAlpha=1-b/1.4;for(let v=0;v<h;v++)Zl(g,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M*.9,a+v*7,2,v%3?eo.m:eo.l)}}}),A({type:"custom",layer:"top",delay:i,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){if(!b.fired){b.fired=!0;for(let M=0;M<26;M++){const v=Math.random()*Jt,S=r*y(.7,1.1),_=y(1.5,4)*o/3.4;I(t+Math.cos(v)*S,n+Math.sin(v)*S,.1,Math.cos(v)*_,Math.sin(v)*_,y(2.5,5.5),y(.7,1.1),M%5===0?xs[0]:M&1?xe.m:xe.d,Math.random()*3+3|0,12,!1,.96)}for(let M=0;M<14;M++){const v=Math.random()*Jt;I(t+Math.cos(v)*r,n+Math.sin(v)*r,.4,Math.cos(v)*.6,Math.sin(v)*.6,y(1.5,3),y(.6,1),M&1?Mt.l:Mt.w,2,-.4,!0)}dt(t,n,o*1.2,wf,.9,.45),Q(10)}}}),dt(t,n,3.6,Rr,1,1.4)};H.cabra_T=e=>{e.uid&&Ud(e.uid)};function nw(e,t,n,r){re(t,n);const o=wt,i=St;e.fillStyle=cn.k,to(e,o-4*r,i,B(4*r),.55),to(e,o+4*r,i,B(4*r),.55),e.fillStyle=cn.l,e.fillRect(B(o-9*r),B(i-3*r),B(4*r),2),e.fillRect(B(o+5*r),B(i-3*r),B(4*r),2)}H.cabra_ev_behemoth_stomp=e=>{e.uid&&Ud(e.uid);const t=e.uid?Z(e.uid):null;t&&(t._stompA=w.T+.6);const n=e.x,r=e.y,o=e.radius||3.2,i=Math.random()*99;et.sfx("stomp_cabra",n,r,1);const a=[[1,.3],[.3,1],[-.95,-.25],[-.25,-.95]];A({type:"custom",layer:"ground",dur:2.2,x:n,y:r,draw(f,c){f.globalAlpha=(c>.6?(1-c)/.4:1)*.8;for(const[g,x]of a)nw(f,n+g,r+x,1.8);re(n,r);const h=wt,d=St,m=De(1.25),p=m*.5;for(let g=0;g<36;g++){const x=g/36*Jt,b=h+Math.cos(x)*m,M=d+Math.sin(x)*p;f.fillStyle=cn.d,f.fillRect(B(b-5),B(M-2),10,4),f.fillStyle=g&1?cn.l:xe.m,f.fillRect(B(b-3),B(M-4),6,3)}}}),A({type:"custom",layer:"ground",dur:.75,x:n,y:r,draw(f,c){const h=$n(c),d=1.1+(o-1.1)*h;re(n,r);const m=wt,p=St;f.globalAlpha=1-c*c;for(let b=0;b<60;b++){const M=b/60*Jt+i,v=d*(1+(q(i+b)-.5)*.06),S=De(v),_=S*.5,T=(1-c)*(8+6*q(b*2.7+i)),R=m+Math.cos(M)*S,C=p+Math.sin(M)*_;f.fillStyle=cn.d,f.fillRect(B(R-5),B(C-1),10,3),f.fillStyle=b&1?cn.l:xe.m,f.fillRect(B(R-4),B(C-T-5),8,6),f.fillStyle=b%3?Fe.l:xe.l,f.fillRect(B(R-4),B(C-T-5),5,2)}f.globalAlpha=(1-c)*.7;const g=De(d*.82),x=g*.5;f.fillStyle=cn.d;for(let b=0;b<40;b++){const M=b/40*Jt;f.fillRect(B(m+Math.cos(M)*g-2),B(p+Math.sin(M)*x-1),4,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:.5,x:n,y:r,draw(f,c){f.globalAlpha=(1-c)*.85;const h=1.2+(o-1)*$n(c);Wu(f,n,r,Math.min(o,h),48,3,c<.5?Mt.l:Mt.m,i)}});const s=8,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=f/s*Jt+q(i+f*3)*.6,u[f]=.5+q(i+f*7)*.7;A({type:"custom",layer:"ground",dur:1.8,x:n,y:r,draw(f,c){const h=$n(Ln(c*1.8/.1));f.globalAlpha=c>.6?(1-c)/.4:1;for(let d=0;d<s;d++)Zl(f,n+Math.cos(l[d])*1.25,r+Math.sin(l[d])*1.25,l[d],u[d]*h,i+d*5,3,xe.x)}}),A({type:"custom",layer:"top",dur:.8,x:n,y:r,draw(f,c){const h=.7+(o-.7)*$n(Math.min(1,c*1.3));for(let d=0;d<18;d++){const m=d/18*Jt+i*.3,p=.15+c*(.5+.4*q(d+i)),g=B(12-c*7);re(n+Math.cos(m)*h,r+Math.sin(m)*h,p),f.globalAlpha=(1-c)*.5,f.fillStyle=d&1?Fe.m:xe.m,f.fillRect(B(wt-g/2),B(St-g/2),g,B(g*.7)),f.fillStyle=Fe.l,f.fillRect(B(wt-g/2),B(St-g/2),B(g/2),2)}}});for(let f=0;f<16;f++){const c=Math.random()*Jt,h=y(.5,1);I(n+Math.cos(c)*h,r+Math.sin(c)*h,.1,Math.cos(c)*y(1.2,3),Math.sin(c)*y(1.2,3),y(2,4),y(.5,.8),f%4===0?xs[1]:f&1?xe.m:cn.l,Math.random()*2+3|0,11,!1,.95)}dt(n,r,o*1.05,wf,.6,.35),dt(n,r,o*.8,Rr,.4,.3,{delay:.05}),Q(5)};const P0=new Set;function Yy(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.kind==="mount")}function Ud(e){if(P0.has(e))return;P0.add(e);let t=!1,n=0,r=NaN,o=NaN,i=0,a=0,s=-9,l=0,u=0,f=0;A({type:"custom",layer:"top",add:!0,dur:600,x:0,y:0,draw(c,h,d){const m=Z(e);if(!(!!m&&!m.dead&&Yy(m))){if(!t){d.t>2&&(P0.delete(e),d.t=d.dur+1);return}if(n||(n=w.T),w.T-n<.12)return;P0.delete(e),d.t=d.dur+1;const b=m?m.x:r,M=m?m.y:o;isFinite(b)&&(ow({x:b,y:M},!0),et.sfx("fade_cabra_R",b,M,1));return}t=!0,n=0;const g=isFinite(r)?Math.hypot(m.x-r,m.y-o):0;if(r=m.x,o=m.y,g>.004&&w.T>=i){i=w.T+.24;const b=Math.random()*Jt;for(let M=0;M<3;M++)I(m.x+Math.cos(b+M*.4)*.6,m.y+Math.sin(b+M*.4)*.6,.05,y(-.5,.5),y(-.5,.5),y(.3,.8),y(.4,.6),M&1?Fe.m:xe.l,4,1.5,!1,.9)}if(w.T-s>1.1&&Math.random()<.03){s=w.T;const b=Math.random()<.5?-1:1;l=b*.34,u=-b*.34,f=y(2.1,2.6)}const x=(w.T-s)/.35;if(x>=0&&x<1){re(m.x+l,m.y+u,f+x*.15);const b=B(6*Math.sin(x*Math.PI))+1;c.globalAlpha=1,c.fillStyle=Mt.w,c.fillRect(B(wt-b),B(St-1),b*2,2),c.fillRect(B(wt-1),B(St-b),2,b*2),c.fillStyle=Mt.m,c.fillRect(B(wt-2),B(St-2),4,4)}w.T>=a&&(a=w.T+.15,dt(m.x,m.y,1.8,Rr,.22,.3))}})}function rw(e,t,n,r,o){e.globalAlpha=o;for(const i of[-1,1]){const a=t+i*18*r,s=n+8*r;for(let l=0;l<=22;l++){const u=l/22,f=Math.PI+u*Jt*.95,c=15*r*(1-u*.7),h=B((7-u*4)*r),d=a+i*Math.cos(f)*c,m=s+Math.sin(f)*c;e.fillStyle=Fe.d,e.fillRect(B(d-h/2-1),B(m-h/2-1),h+2,h+2),e.fillStyle=l%4===0?Fe.m:Fe.l,e.fillRect(B(d-h/2),B(m-h/2),h,h)}}for(let i=0;i<30*r;i+=2){const a=i/(30*r),s=(16-a*9)*r;e.fillStyle=a<.1?Mt.l:Vt(e,Mt.m,12),e.fillRect(B(t-s),B(n+i),B(s*2),2)}e.fillStyle=Mt.w,e.fillRect(B(t-9*r),B(n+9*r),B(4*r),B(3*r)),e.fillRect(B(t+5*r),B(n+9*r),B(4*r),B(3*r))}function ow(e,t=!1){const n=e.x,r=e.y,o=t?1.9:1.25,i=t?1.9:1.3,a=t?1.6:1.25,s=1.6,l=Math.random()*9;A({type:"custom",layer:"ground",add:!0,dur:s,x:n,y:r,draw(u,f){const c=f*s,h=c>1.1?1-Ln((c-1.1)/.35):1;h<=0||qy(u,n,r,o*h,$n(Ln(c/.22)),-c*1.2+l,1,1)}}),A({type:"custom",layer:"ground",dur:s,x:n,y:r,draw(u,f){const c=f*s,h=c>1.1?1-Ln((c-1.1)/.35):1;h<=0||(re(n,r),u.globalAlpha=.85*h*Ln(c/.25),u.fillStyle=Mt.k,to(u,wt,St,B(De(o*.62*h)),.5),u.fillStyle=Mt.x,to(u,wt,St+2,B(De(o*.5*h)),.5))}}),A({type:"custom",layer:"top",dur:s,x:n,y:r,draw(u,f){const c=f*s;if(c<.15||c>1.25)return;const h=Ln((c-.15)/.95),d=h*h;re(n,r);const m=St,p=wt;u.save(),u.beginPath(),u.rect(p-600,m-900,1200,900),u.clip(),rw(u,p,m-a*N.ZK+d*(a+.4)*N.ZK,i,(h<.15?h/.15:1)*.95),u.restore()}}),A({type:"custom",layer:"top",add:!0,delay:1.35,dur:.3,x:n,y:r,draw(u,f){re(n,r,.1),u.globalAlpha=1-f;const c=B((t?40:26)*(1-f))+2;u.fillStyle=Mt.w,u.fillRect(B(wt-c),B(St-1),c*2,3),u.fillRect(B(wt-1),B(St-c*.6),3,B(c*1.2))}}),A({type:"custom",layer:"top",delay:1.35,dur:.02,x:n,y:r,fired:!1,draw(u,f,c){if(!c.fired){c.fired=!0;for(let h=0;h<16;h++){const d=h/16*Jt;I(n+Math.cos(d)*.3,r+Math.sin(d)*.3,.2,Math.cos(d)*1.2,Math.sin(d)*1.2,y(1.5,3),y(.5,.9),h&1?Mt.l:Fe.w,2,-.3,!0)}dt(n,r,2.4,Rr,.9,.35),Q(3)}}}),dt(n,r,t?3.2:2.6,Rr,.7,1.4)}const iw={Q:Qv,W:Zv,E:Jv},aw={Q:.55,W:.7,E:.45};H.cabra_petfade=e=>{let t=ns.get(e.uid)||"";if(!t&&e.sprite)for(const n of["Q","W","E"]){const r=$y(n);r&&r.petSprite&&r.petSprite===e.sprite&&(t=n)}if(!t&&typeof e.sprite=="string"&&e.sprite.startsWith("cabra")){const n=e.sprite;t=/wisp|spirit|flame/.test(n)?"Q":/golem|stone|twin/.test(n)?"W":/locust|swarm|bug/.test(n)?"E":""}return t?(ns.delete(e.uid),iw[t](e),et.sfx("fade_cabra_"+t,e.x,e.y,aw[t]),!0):!1};Pe.cabra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.7;for(let h=1;h<=9;h++){const d=h*3,m=Math.sin(i*22+f-h*.9)*(2+h*.35);e.globalAlpha=1-h/10,Ne(e,n-a*d+l*m,r-s*d+u*m,2,Mt.m),Ne(e,n-a*d-l*m,r-s*d-u*m,2,h&1?Fe.l:Fe.w)}e.globalAlpha=1;for(let h=0;h<4;h++)Ne(e,n-a*(3+h*2.5)+l*Math.sin(i*30+h)*1.2,r-s*(3+h*2.5)+u*Math.sin(i*30+h)*1.2,6-h,h<2?Mt.m:Mt.d);e.fillStyle=Mt.d,e.fillRect(B(n-5),B(r-5),10,10),e.fillStyle=Mt.l,e.fillRect(B(n-4),B(r-4),8,8),e.fillStyle=Mt.w,e.fillRect(B(n-2),B(r-2),4,4),Ne(e,n+a*3+l*4,r+s*3+u*4,2,Fe.w),Ne(e,n+a*5+l*5,r+s*5+u*5,2,Fe.l),Ne(e,n+a*3-l*4,r+s*3-u*4,2,Fe.w),Ne(e,n+a*5-l*5,r+s*5-u*5,2,Fe.l);const c=i*12|0;t._lf!==c&&(t._lf=c,dt(t.x,t.y,.9,Rr,.5,.12),c&1&&I(t.x,t.y,t.z||.45,0,0,.3,.3,Mt.l,2,0,!0))};function sw(e){const t=e.x,n=e.y,r=Math.random()*Jt,o=1.6*By();A({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,a){re(t,n);const s=wt,l=St;i.globalAlpha=a>.5?(1-a)/.5:1,i.fillStyle=cn.d,to(i,s-5,l,6,.55),to(i,s+5,l,6,.55),i.fillStyle=cn.m,to(i,s-5,l-1,4,.5),to(i,s+5,l-1,4,.5);const u=o*(.25+.75*$n(Ln(a*1.6)));i.globalAlpha=(1-a)*.9;for(let f=0;f<18;f++){const c=r+f/18*Jt;Ne(i,s+Math.cos(c)*u,l+Math.sin(c)*u*.5,f%3?4:3,f%3===0?Mt.m:f&1?Fe.m:xe.l)}}}),A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(i,a){re(t,n,.45);const s=1-a,l=B(12*s)+2;i.globalAlpha=s,aa(i,wt-l,St,wt,St-l*.6,2,Mt.l),aa(i,wt,St-l*.6,wt+l,St,2,Mt.l),aa(i,wt+l,St,wt,St+l*.6,2,Mt.m),aa(i,wt,St+l*.6,wt-l,St,2,Mt.m),Ne(i,wt,St,B(5*s)+2,Fe.w)}});for(let i=0;i<4;i++)I(t,n,.3,y(-2,2),y(-2,2),y(2,3.5),.5,i&1?xe.m:xe.d,4,13,!1,.95);for(let i=0;i<2;i++)I(t+y(-.3,.3),n+y(-.3,.3),.1,y(-.6,.6),y(-.6,.6),y(.3,.7),.6,Fe.m,5,0,!1,.9);dt(t,n,1.3,Rr,.45,.2),Q(2)}Qe.cabra=e=>{if(!e.proj){const i=e.uid?Z(e.uid):null;if(i&&Yy(i)){sw(e);return}}const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Jt;A({type:"custom",layer:"top",add:!0,dur:r?.42:.3,x:t,y:n,draw(i,a){re(t,n,.45);const s=wt,l=St;i.globalAlpha=a>.5?(1-a)/.5:1;const u=r?7:5,f=(r?14:10)*$n(Ln(a*1.8));for(let h=0;h<u;h++){const d=o+h/u*Jt,m=s+Math.cos(d)*f,p=l+Math.sin(d)*f*.7;aa(i,s+Math.cos(d)*f*.35,l+Math.sin(d)*f*.25,m,p,3,Mt.m),Ne(i,m,p,3,Mt.w)}Ne(i,s,l,B(8*(1-a))+2,Mt.w),re(t,n);const c=6+a*(r?30:20);for(let h=0;h<12;h++){const d=o+h/12*Jt;Ne(i,wt+Math.cos(d)*c,St+Math.sin(d)*c*.5,2,h&1?Fe.l:Mt.l)}if(r){i.globalAlpha=1-a;for(const h of[-1,1])for(let d=0;d<8;d++){const m=Math.PI+d/8*Math.PI*1.4,p=7*(1-d/12);Ne(i,s+h*(7+Math.cos(m)*p),l-16-a*14+Math.sin(m)*p,d<4?3:2,d<4?Fe.w:Fe.l)}}}});for(let i=0;i<(r?8:4);i++)I(t,n,.5,y(-.9,.9),y(-.9,.9),y(.6,1.6),.4,i&1?Mt.l:Mt.w,2,-.4,!0);dt(t,n,r?1.4:1,Rr,r?.7:.5,.22)};const Pt=Math.round,In=Math.PI*2,fl=e=>e*N.HW*Math.SQRT2,Tt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},ii=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],Ky=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function On(e,t,n,r){r=Math.max(1,Pt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Pt(t[0]+(n[0]-t[0])*s/i-a),Pt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function _h(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(Pt(t-l),Pt(n+a),Math.max(1,Pt(l*2)),i)}}function cl(e,t,n,r,o,i,a=0){for(let s=0;s<o;s++){const l=a+s/o*In;e.fillRect(Pt(t+Math.cos(l)*r-i/2),Pt(n+Math.sin(l)*r*.5-i/2),i,i)}}function M2(e,t,n,r){t=Pt(t),n=Pt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const lw=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));H.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:y(-14,14),c:l+s})}A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,c]=P(t,n,.5),h=w.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=c+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=p,s.fillStyle=ii[(d.c+h)%6],s.fillRect(Pt(g)-2,Pt(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,Pt(Math.hypot(r-t,o-n)*2.4)));A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=P(t,n),f=P(r,o),c=f[0]-u[0],h=f[1]-u[1],d=Math.hypot(c,h)||1,m=-h/d,p=c/d;for(let g=0;g<=a;g++){const x=g/a,b=l*4-x;if(b<0)continue;const M=g%4===0,v=M?9:5,S=u[0]+c*x,_=u[1]+h*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=Tt.ink,On(s,[S-m*v+1,_-p*v+1],[S+m*v+1,_+p*v+1],M?4:3),s.fillStyle=M?Tt.gold:ii[(g+(w.T*10|0))%6],On(s,[S-m*v,_-p*v],[S+m*v,_+p*v],M?3:2)}}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[u,f]=P(r,o,.5),c=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*In,p=d%3===0?7:3;s.fillStyle=d%3===0?Tt.gold:Tt.face,On(s,[u+Math.cos(m)*c,f+Math.sin(m)*c*.8],[u+Math.cos(m)*(c-p),f+Math.sin(m)*(c-p)*.8],2)}const h=-Math.PI/2-l*In*1.5;s.fillStyle=Tt.face,On(s,[u,f],[u+Math.cos(h)*(c-8),f+Math.sin(h)*(c-8)*.8],3),s.fillStyle=Tt.gold,s.fillRect(Pt(u)-2,Pt(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*In;I(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,y(.5,1.5),.45,ii[s%6],3,2,!0,.9)}};H.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>P(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let c=a.length-1;c>=0;c--){const h=a[c],d=f-h.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=h.al;for(let g=-1,x=0;g<=p;g+=.06,x++){const b=Math.max(0,1-(p-g)/.7),M=Pt(3+6*b*h.sc),[v,S]=s(g,i*h.sc);l.fillStyle=Tt.ink,l.fillRect(Pt(v-M/2)+1,Pt(S-M/2)+1,M,M),l.fillStyle=c===0?x%2?Tt.gold:Tt.face:ii[(c*2+x)%6],l.fillRect(Pt(v-M/2),Pt(S-M/2),M,M)}if(c===0){l.fillStyle=Tt.gold;for(let g=-1;g<=p;g+=.2){const x=s(g,i*1.06),b=s(g,i*1.16);On(l,x,b,2)}}}}if(f>.28){const c=(f-.28)/.27,[h,d]=s(-1,i);l.globalAlpha=1-c;for(let m=0;m<16;m++){const p=m*.6-c*4,g=2+m*1.1;l.fillStyle=ii[m%6],l.fillRect(Pt(h+Math.cos(p)*g)-1,Pt(d+Math.sin(p)*g*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=y(-1,1),f=i*y(.3,1.1),c=r+u*o;I(t+Math.cos(c)*f,n+Math.sin(c)*f,y(.2,.9),y(-.15,.15),y(-.15,.15),y(0,.2),y(.8,1.3),l%3?Tt.sand:Tt.time,2,.15,!0,.99)}Q(Ky(e)?3:1)};H.camaleon_E=e=>{const t=e.uid,n=e.dur||4;A({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=Z(t),[f,c]=P(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let h=0;h<8;h++){const d=h/8*In+.2,m=12+l*30;s.fillStyle=ii[h%6],On(s,[f+Math.cos(d)*m,c+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),c+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=Z(t);if(!f||f.dead){u.t=u.dur+1;return}if(w.T-o>.06){const h=r[r.length-1];(!h||Math.hypot(f.x-h.x,f.y-h.y)>.1)&&(r.push({x:f.x,y:f.y,t:w.T,c:i++}),r.length>8&&r.shift()),o=w.T}const c=l>.92?(1-l)/.08:1;for(const h of r){const d=1-(w.T-h.t)/.4;if(d<=0)continue;const[m,p]=P(h.x,h.y);s.globalAlpha=d*.65*c,s.fillStyle=ii[h.c%6];for(let g=0;g<a.length;g++)s.fillRect(Pt(m-a[g]),Pt(p-8-g*6),a[g]*2,3)}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=Z(t);if(!f||f.dead){u.t=u.dur+1;return}const[c,h]=P(f.x,f.y,1.05),d=c+24,m=h+Math.sin(w.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=Tt.brassD,_h(s,d,m,9,9,1),s.fillStyle=Tt.brass,s.fillRect(Pt(d)-2,Pt(m)-13,5,4),s.fillStyle=Tt.face,_h(s,d,m,7,7,1),s.fillStyle=Tt.ink,s.fillRect(Pt(d)-1,Pt(m)-7,2,2),s.fillRect(Pt(d)+5,Pt(m),2,2),s.fillRect(Pt(d)-1,Pt(m)+5,2,2),s.fillRect(Pt(d)-7,Pt(m),2,2);const p=w.T*14;s.fillStyle="#e03a4a",On(s,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function uw(e,t,n,r){t=Pt(t),n=Pt(n),e.fillStyle=Tt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=Tt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=Pt(6-o*.5),a=Pt(1+o*.5);e.fillStyle=Tt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-a-1,n+1+o,1,1),e.fillRect(t+a+1,n+1+o,1,1),e.fillStyle=Tt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-a,n+1+o,a*2+1,1)}r>.02&&r<.98&&(e.fillStyle=Tt.sand,e.fillRect(t,n-1,1,12))}let b2=null,v2=null,w2=[],S2=[];function fw(e){return b2!==e&&(b2=e,w2=[{u0:0,fill:Vt(e,Tt.night,7),a:.55},{u0:.66,fill:Vt(e,Tt.time,6),a:.55},{u0:.86,fill:Vt(e,Tt.glass,10),a:.6},{u0:.96,fill:Tt.glass,a:.5}]),w2}function cw(e){return v2!==e&&(v2=e,S2=[{u0:0,fill:Vt(e,Tt.glass,2),a:.4},{u0:.62,fill:Vt(e,Tt.time,3),a:.5},{u0:.82,fill:Vt(e,Tt.time,5),a:.6},{u0:.93,fill:Vt(e,Tt.glass,9),a:.7}]),S2}function qo(e,t,n,r,o){const i=Math.cos(r)*Math.cos(o),a=Math.sin(r)*Math.cos(o),s=Math.sin(o);return Xn(e+i*n,t+a*n,s*n),Ni(i,a,s)>0}const _2=[.42,44,.86,32,1.24,16];function A2(e,t,n,r,o,i,a,s){const l=o>0;e.fillStyle=l?Tt.glassL:"#5a68c0",e.globalAlpha=s*(l?.55:.7);for(let c=0;c<12;c++){const h=c/12*In-i*.35;for(let d=1;d<11;d++)qo(t,n,r,h,d/11*Math.PI/2)===l&&e.fillRect(Pt(zt.x)-1,Pt(zt.y)-1,2,2)}for(let c=0;c<3;c++){const h=_2[c*2],d=_2[c*2+1];for(let m=0;m<d;m++)qo(t,n,r,m/d*In+i*.08,h)===l&&e.fillRect(Pt(zt.x)-1,Pt(zt.y)-1,2,2)}e.globalAlpha=s*.95,e.fillStyle=l?Tt.gold:Tt.time;for(let c=0;c<72;c++)qo(t,n,r,c/72*In,0)===l&&e.fillRect(Pt(zt.x)-1,Pt(zt.y)-1,3,3);for(let c=0;c<12;c++){const h=c/12*In-Math.PI/4;if(qo(t,n,r,h,0)!==l)continue;const d=zt.x,m=zt.y;qo(t,n,r,h,c%3?.13:.22),e.fillStyle=l?c%3?Tt.face:Tt.gold:Tt.time,On(e,[d,m],[zt.x,zt.y],c%3?2:3)}const u=-i*1.4+.6;e.fillStyle=l?Tt.gold:Tt.brass,e.globalAlpha=s*(l?.95:.6);for(let c=0;c<22;c++)qo(t,n,r,u,c/22*Math.PI/2)===l&&e.fillRect(Pt(zt.x)-1,Pt(zt.y)-1,3,3);const f=a%1;if(f<.6){const c=f/.6*Math.PI/2*.98;e.globalAlpha=s*(1-f/.6)*(l?.9:.6),e.fillStyle=l?Tt.glassL:Tt.glass;const h=Pt(56*Math.cos(c))+8;for(let d=0;d<h;d++)qo(t,n,r,d/h*In,c)===l&&e.fillRect(Pt(zt.x)-1,Pt(zt.y)-1,3,2)}}H.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=za(e,o),a=Array.from({length:26},(h,d)=>{const m=Math.random()*In,p=Math.sqrt(Math.random())*r*.85,g=Math.sqrt(Math.max(0,r*r-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:y(.15,Math.max(.2,g)),ph:Math.random()*In,s:d%4===0?4:2,col:[Tt.glassL,Tt.gold,Tt.time,Tt.teal][d%4]}}),s=Array.from({length:22},()=>{const h=Math.random()*In,d=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(h)*d,y:n+Math.sin(h)*d,z:y(.2,1.4)}}),l=Array.from({length:7},()=>{const h=new Float32Array(16);let d=y(-.4,2),m=y(.12,1.1);for(let p=0;p<8;p++)h[p*2]=d,h[p*2+1]=m,d+=y(-.16,.16),m=Math.min(1.45,Math.max(.05,m+y(-.2,.2)));return h}),u=h=>lw(h/.3),f=()=>w.T-i.t0,c=h=>Xl(h/.2);A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(h,d,m){const p=or(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=u(f()),[b,M]=P(t,n),v=fl(r)*x,S=f();h.globalAlpha=.28*g,h.fillStyle=Tt.night,_h(h,b,M,v,v*.5,3),h.globalAlpha=.95*g,h.fillStyle=Tt.gold,cl(h,b,M,v,96,3),h.fillStyle=Tt.brass,cl(h,b,M,v*.94,72,2),h.fillStyle=Tt.face,cl(h,b,M,v*.87,60,2);for(let z=0;z<12;z++){const E=z/12*In-Math.PI/2,U=z%3===0,G=[b+Math.cos(E)*v*.66,M+Math.sin(E)*v*.33],K=[b+Math.cos(E)*v*.8,M+Math.sin(E)*v*.4];h.fillStyle=Tt.ink,On(h,[G[0]+1,G[1]+1],[K[0]+1,K[1]+1],U?6:4),h.fillStyle=U?Tt.gold:Tt.face,On(h,G,K,U?5:3)}for(let z=0;z<36;z++){const E=z/36*In-S*.6,U=v*(z%2?.5:.55);h.fillStyle=z%2?Tt.brassD:Tt.brass,h.fillRect(Pt(b+Math.cos(E)*U)-2,Pt(M+Math.sin(E)*U*.5)-1,5,3)}const _=-Math.PI/2-S*In/1.5,T=-Math.PI/2-S*In/12,R=[b+Math.cos(_)*v*.74,M+Math.sin(_)*v*.37],C=[b+Math.cos(T)*v*.45,M+Math.sin(T)*v*.225];h.fillStyle=Tt.ink,On(h,[b+1,M+1],[R[0]+1,R[1]+1],6),On(h,[b+1,M+1],[C[0]+1,C[1]+1],8),h.fillStyle=Tt.face,On(h,[b,M],R,4),h.fillStyle=Tt.gold,On(h,[b,M],C,6),h.fillStyle="#e03a4a",h.fillRect(Pt(b)-4,Pt(M)-3,8,6),h.fillStyle=Tt.gold,h.fillRect(Pt(b)-2,Pt(M)-2,4,4);const O=S%1;O<.3&&(h.globalAlpha=(1-O/.3)*g,h.fillStyle=Tt.glassL,cl(h,b,M,v*(.87+O*.4),48,3))}}),A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(h,d,m){const p=or(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=r*u(f()),b=w.T;Xn(t,n);const M=zt.x,v=zt.y,S=fl(x),_=bc(x,x);i2(h,M,v,S,_,!1,fw(h),g),A2(h,t,n,x,-1,b,f(),g),yi(i,t,n,r*1.15,9087231,.75*g)}}),A({type:"custom",layer:"top",dur:o+1,x:t,y:n,draw(h,d,m){const p=or(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=r*u(f()),b=w.T;Xn(t,n);const M=zt.x,v=zt.y,S=fl(x),_=bc(x,x);i2(h,M,v,S,_,!0,cw(h),g),A2(h,t,n,x,1,b,f(),g);const T=Xl((.45-p)/.35);if(T>0)for(const R of l){const C=Math.max(1,Pt(7*T));for(let O=0;O<C;O++){if(!qo(t,n,x,R[O*2],R[O*2+1]))continue;const z=zt.x,E=zt.y;qo(t,n,x,R[O*2+2],R[O*2+3]),h.globalAlpha=g,h.fillStyle=Tt.ink,On(h,[z+1,E+1],[zt.x+1,zt.y+1],2),h.fillStyle=Tt.glassL,On(h,[z,E],[zt.x,zt.y],2)}}}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(h,d,m){const p=or(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=u(f()),b=r*x,M=w.T,v=f();Xn(t,n);const S=zt.x,_=zt.y,T=fl(b),R=bc(b,b);for(let z=0;z<=80;z++){const E=Math.PI+z/80*Math.PI,U=((z/80-v*.45)%1+1)%1,G=Math.max(0,1-Math.min(U,1-U)*6);h.globalAlpha=g*(.55+.45*G),h.fillStyle=G>.3?Tt.glassL:Tt.glass,h.fillRect(Pt(S+Math.cos(E)*T)-1,Pt(_+Math.sin(E)*R)-1,3,3)}for(let z=0;z<14;z++){const E=Math.PI*(1.1+z*.022);h.globalAlpha=g*.85,h.fillStyle=Tt.glassL,h.fillRect(Pt(S+Math.cos(E)*T*.82)-2,Pt(_+Math.sin(E)*R*.82)-2,4,4),z<6&&(h.globalAlpha=g*.5,h.fillRect(Pt(S+Math.cos(E+.12)*T*.7)-1,Pt(_+Math.sin(E+.12)*R*.7)-1,3,3))}h.globalAlpha=g*.7,M2(h,S+Math.cos(Math.PI*1.36)*T*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+Pt(2*Math.sin(M*4)));for(const z of a){const[E,U]=P(z.x,z.y,z.z*x),G=.5+.5*Math.sin(M*3+z.ph);h.globalAlpha=g*(.35+.65*G),h.fillStyle=z.col,M2(h,E,U,z.s+(G>.8?1:0))}h.fillStyle=Tt.sand;for(const z of s){const[E,U]=P(z.x,z.y,z.z*x);h.globalAlpha=g*.8,h.fillRect(Pt(E),Pt(U),1,1)}const[C,O]=P(t,n,b+.35);if(h.globalAlpha=g,uw(h,C,O,Math.min(1,v/Math.max(.1,v+p))),v<.3){const z=v/.3;h.globalAlpha=1-z,h.fillStyle=Tt.glassL,cl(h,S,_,fl(r)*(.3+z*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let z=0;z<40;z++){const E=Math.random()*In,U=Math.random()*1.3,G=t+Math.cos(E)*r*Math.cos(U),K=n+Math.sin(E)*r*Math.cos(U);I(G,K,r*Math.sin(U),Math.cos(E)*y(.8,2),Math.sin(E)*y(.8,2),y(0,1.5),y(.5,.9),z%3?Tt.glass:Tt.glassL,z%4?2:3,9,!0,.96)}}}}),Q(Ky(e)?6:3)};Qe.camaleon=e=>{const t=e.x,n=e.y,r=y(-2.6,-.6),o=Math.random()*6|0;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=r-(1-u)*1.5,c=r+2.2-(1-u)*1.2;i.fillStyle=Tt.ink,On(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=Tt.face,On(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=ii[o],On(i,[s,l],[s+Math.cos(c)*12,l+Math.sin(c)*12],4),i.fillStyle=Tt.gold;for(let h=0;h<4;h++){const d=h/4*In+.4,m=14+a*10;i.fillRect(Pt(s+Math.cos(d)*m)-1,Pt(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)I(t,n,.5,y(-1.3,1.3),y(-1.3,1.3),y(.8,2),.3,ii[(o+i)%6],2,6,!0)};const qt=Math.round,ye=Math.PI*2;let It=0,bt=0;function Re(e,t,n=0){It=(e-t)*N.HW+N.OX,bt=(e+t)*N.HH-n*N.ZK}function Et(e,t,n,r,o){e.fillStyle=o,e.fillRect(qt(t-r/2),qt(n-r/2),r,r)}function Qn(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(qt(t+(r-t)*l/s-i/2),qt(n+(o-n)*l/s-i/2),i,i)}function _n(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(qt(t-a/2),qt(n+i*o),qt(a),Math.max(1,qt(2*o)))}}const Ta=e=>e<0?0:e>1?1:e,ci=e=>1-(1-e)*(1-e),Ra=()=>N.HW*Math.SQRT2;function l0(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Be={k:"#4a3410",d:"#8a6418",m:"#c89a30",l:"#f0d060",w:"#fff4b8"},me={k:"#16161c",d:"#2e2e38",m:"#56566a",l:"#9a9aac",w:"#d8d8e4"},Vn={k:"#2a180c",d:"#5a3a1e",m:"#8a5a2e",l:"#c08a50"},Nt={d:"#a8400c",m:"#ff7a1a",l:"#ffb050",w:"#ffe6a0"},_o={k:"#4a4234",d:"#7a6c54",m:"#a8987a",l:"#d4c6a0"},Bi=["#ffffff","#e4eaf2","#b8c2ce"],pa=["#d8d4d0","#9a9490","#625c58"],Do=["#e0d0b0","#c0a880","#8a7454"],zn={d:"#180e22",g:"#7a66a8",gl:"#c0b0ec"},Sn={w:"#fff2b0",y:"#ffc848",o:"#ff7a1a",r:"#c8300c"},Fa=16747056;Tn.castor_saw=[Nt.w,Nt.l,Nt.m,me.l];Tn.castor_broadside=[Nt.w,Sn.y,Nt.m,me.m];function jy(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.mount)}function hw(e){if(e.src)return e.src;const t=w.game;if(!t)return null;let n=null,r=49;for(const o of t.heroes||t.units){if(o.heroKey!=="castor"||o.dead)continue;const i=(o.x-e.x)*(o.x-e.x)+(o.y-e.y)*(o.y-e.y);i<r&&(r=i,n=o)}return n}function Qy(e,t,n,r,o,i,a){for(let s=0;s<8;s++){const l=o+s/8*ye;Et(e,t+Math.cos(l)*r,n+Math.sin(l)*r,3,i)}e.fillStyle=i,_n(e,t,n,Math.max(2,r-1)),Et(e,t,n,2,a)}function _f(e,t,n,r,o,i){r=qt(r),e.fillStyle=o,e.fillRect(qt(t-r),qt(n)-1,r*2,3),e.fillRect(qt(t)-1,qt(n-r),3,r*2),Et(e,t,n,Math.max(2,qt(r*.5)),i)}function Xd(e,t,n,r,o,i=14,a=26){for(let s=0;s<n;s++){const l=Math.random()*ye,u=Math.random()*r;A({type:"puff",x:e+Math.cos(l)*u,y:t+Math.sin(l)*u,r:y(i,a),dur:y(.6,1.1),col:o})}}function dw(e,t,n,r,o,i){const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;mt(!0);const f=Ht();for(let m=1;m<=5;m++)f.globalAlpha=.65-m*.11,Et(f,n-a*m*4+l*Math.sin(i*30+m)*1.2,r-s*m*4+u*Math.sin(i*30+m)*1.2,5-(m>>1),m<3?Nt.l:Nt.m);f.globalAlpha=.35,Et(f,n,r,12,Nt.m),f.globalAlpha=1,mt(!1);const c=Math.cos(i*34+(t.id||0)),h=a*3*c,d=s*3*c;Qn(e,n-h,r-d,n+h,r+d,3,Nt.m),e.fillStyle=Be.d,_n(e,n+h,r+d,4),e.fillStyle=Nt.l,_n(e,n+h,r+d-1,3),Et(e,n+h,r+d-1,2,Nt.w),Math.random()<.35&&I(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(0,.6),.3,Math.random()<.5?Nt.l:Nt.w,2,3,!0)}function mw(e){const t=e.x,n=e.y,r=!!e.big,o=Math.random()*ye;A({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(i,a){Re(t,n,.45);const s=1-a;a<.45&&_f(i,It,bt,(r?15:11)*(1-a/.45)+2,Be.l,Nt.w);const l=4+ci(a)*(r?20:15);i.globalAlpha=s;for(let u=0;u<6;u++){const f=o+u/6*ye;Et(i,It+Math.cos(f)*l,bt+Math.sin(f)*l*.7+14*a*a,u&1?2:3,u&1?Nt.w:Nt.m)}}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a){Re(t,n,.42),i.globalAlpha=a>.7?(1-a)/.3:1,i.fillStyle=a<.3?Nt.l:a<.6?Nt.d:me.m,_n(i,It,bt,3),Et(i,It-1,bt-1,1,a<.4?Nt.w:me.l)}});for(let i=0;i<(r?5:3);i++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,i&1?Nt.l:Nt.w,2,10,!0);I(t,n,.5,y(-.2,.2),y(-.2,.2),.5,.6,pa[1],4,-.4,!1,.9),dt(t,n,r?1.2:.9,Fa,.5,.2)}const Zy=[[0,0,0],[.22,-.1,.06],[-.2,.08,.11],[.05,.18,.16]];function pw(e,t,n,r,o){Qn(e,t-r*11,n-o*11,t-r*2,n-o*2,2,Vn.m),Qn(e,t-r*2,n-o*2,t+r*2,n+o*2,2,me.l),Et(e,t-r*11-o*2,n-o*11+r*2,2,Nt.l),Et(e,t-r*11+o*2,n-o*11-r*2,2,"#f0e6d0")}function yw(e,t,n,r){const o=Math.max(t.z||.4,1.7),i=.45,a=t.vx||Math.cos(n),s=t.vy||Math.sin(n),l=Math.hypot(a,s)||1,u=a/l,f=s/l,c=r?Math.hypot(t.x-r.x,t.y-r.y):2,h=4.6,d=m=>o*(1-m)+i*m+.9*Math.sin(Math.PI*m);for(const[m,p,g]of Zy){const x=Ta(c/h-g),b=t.x+u*(p-g*2)-f*m,M=t.y+f*(p-g*2)+u*m;Re(b-u*.15,M-f*.15,d(Math.max(0,x-.035)));const v=It,S=bt;Re(b,M,d(x));const _=It-v,T=bt-S,R=Math.hypot(_,T)||1;pw(e,It,bt,_/R,T/R)}}function gw(e){const t=e.x,n=e.y,r=e.uid?Z(e.uid):null,[o,i]=r?l0(t-r.x,n-r.y):[.7,.7],a=Zy.map(([s,l,u],f)=>{const c=f*2.4+Math.random(),h=f?y(.25,.9):.12;return[t+Math.cos(c)*h,n+Math.sin(c)*h,u*1.6,s+l]});A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8;for(const[f,c,h,d]of a){if(u<h)continue;const m=u-h,p=m<.3?Math.sin(m*70+d)*2.5*(1-m/.3):0;Re(f,c,.05),s.globalAlpha=l>.75?(1-l)/.25:1,Qn(s,It-1,bt-1,It-o*6+p,bt-13-i*3,2,Vn.m),Et(s,It-o*6+p,bt-13-i*3,3,Nt.l),Et(s,It-o*6+p+1,bt-15-i*3,2,"#f0e6d0"),Et(s,It,bt,3,Vn.k)}}}),A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(s,l){Re(t,n);const u=1.1*Ra()*(.35+.65*ci(l));s.globalAlpha=(1-l)*.6;for(let f=0;f<14;f++){const c=f/14*ye;Et(s,It+Math.cos(c)*u,bt+Math.sin(c)*u*.5,3,Do[f%3])}}});for(let s=0;s<a.length;s++)I(a[s][0],a[s][1],.05,y(-.4,.4),y(-.4,.4),y(.3,.8),.45,Do[s%3],4,2,!1,.9)}Pe.castor_A=(e,t,n,r,o,i)=>dw(e,t,n,r,o,i);Pe.castor_V=(e,t,n,r,o)=>yw(e,t,o,hw(t));Qe.castor=e=>{const t=!e.volley&&e.uid?Z(e.uid):null;e.volley||t&&jy(t)?gw(e):mw(e)};function xw(e){const t=e.x,n=e.y,r=Math.random()*ye,o=Array.from({length:6},(a,s)=>({a:r+s/6*ye,r:y(26,36),h:y(10,22),kind:s%3,sp:y(-12,12)}));A({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(a,s){Re(t,n);const l=(.85-.35*ci(Ta(s*1.6)))*Ra()*.6;a.globalAlpha=s>.6?(1-s)/.4:.9;for(let u=0;u<20;u++)if(u%5!==4){const f=u/20*ye+s;Et(a,It+Math.cos(f)*l,bt+Math.sin(f)*l*.5,2,Be.m)}for(let u=0;u<4;u++){const f=u/4*ye+.785;Qn(a,It+Math.cos(f)*l*.75,bt+Math.sin(f)*l*.375,It+Math.cos(f)*l*1.15,bt+Math.sin(f)*l*.575,2,Be.l)}}});let i=!1;A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(a,s){Re(t,n,.3);const l=It,u=bt,f=Ta(s/.55);if(f<1)for(const c of o){const h=ci(f),d=c.r*(1-h),m=l+Math.cos(c.a)*d,p=u+Math.sin(c.a)*d*.6-Math.sin(h*Math.PI)*c.h,g=c.sp*(1-h);if(c.kind===0){const x=Math.cos(g)*6,b=Math.sin(g)*6;Qn(a,m-x,p-b,m+x,p+b,3,Vn.m),Et(a,m+x,p+b,2,Vn.l)}else c.kind===1?Qy(a,m,p,4,g,me.l,me.d):(Et(a,m,p,5,Be.m),Et(a,m-1,p-1,2,Be.w))}else if(!i){i=!0;for(let c=0;c<6;c++)I(t,n,.35,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.35,c&1?Be.l:Nt.w,2,8,!0);I(t,n,.4,0,0,.6,.8,Bi[1],5,-.6,!1,.92),Q(1)}if(s>.5){const c=(s-.5)/.5;c<.4&&_f(a,l,u-4,10*(1-c/.4)+2,Be.l,Be.w),a.globalAlpha=1-c;const h=-1.2+c*5,d=l+10,m=u-22-c*6,p=Math.cos(h),g=Math.sin(h);Qn(a,d-p*7,m-g*7,d+p*6,m+g*6,2,me.l),Et(a,d+p*8-g*2,m+g*8+p*2,3,me.l),Et(a,d+p*8+g*2,m+g*8-p*2,3,me.l),Et(a,d-p*8,m-g*8,3,me.m)}}})}_a.castor_turret={proj(e,t,n,r,o,i){const a=Math.cos(o),s=Math.sin(o);e.fillStyle=me.k,_n(e,n,r,4),e.fillStyle=me.m,_n(e,n+a,r+s-1,3),Qn(e,n-a*2-s*3,r-s*2+a*3,n-a*2+s*3,r-s*2-a*3,2,Be.m),Et(e,n+a*2,r+s*2-2,1,me.w),Et(e,n-a*5,r-s*5,(i*40|0)&1?3:2,(i*40|0)&1?Nt.w:Nt.m),Math.random()<.4&&I(t.x,t.y,(t.z||.45)+.03,y(-.15,.15),y(-.15,.15),.25,.45,pa[Math.random()*2|0],3,-.3,!1,.9)},hit(e){const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(r,o){Re(t,n,.45);const i=1-o;r.fillStyle=Sn.o,_n(r,It,bt,qt(9*i)+2),r.fillStyle=Sn.y,_n(r,It,bt-1,qt(6*i)+1),Et(r,It,bt-1,qt(4*i)+1,Sn.w)}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(r,o){Re(t,n,.5+o*.3),r.globalAlpha=(1-o)*.85;for(let i=0;i<3;i++)r.fillStyle=pa[i],_n(r,It+(i-1)*7,bt-i*2,qt(4+o*7)-i)}});for(let r=0;r<3;r++)I(t,n,.45,y(-1.6,1.6),y(-1.6,1.6),y(1,2.2),.35,r?me.l:Nt.l,2,10,r===0);return dt(t,n,.8,Fa,.4,.15),et.sfx("castor_turret_hit",t,n,.55),!0},shoot(e){const t=e.uid?Z(e.uid):null,n=t?(t.dir||0)*Math.PI/8:0,r=Math.cos(n),o=Math.sin(n),i=e.x+r*.35,a=e.y+o*.35,[s,l]=l0(r,o);A({type:"custom",layer:"top",add:!0,dur:.14,x:i,y:a,draw(u,f){Re(i,a,.35);const c=1-f;Et(u,It,bt,qt(9*c)+2,Nt.m),Et(u,It+s*5,bt+l*5,qt(6*c)+1,Sn.y),Et(u,It+s*9,bt+l*9,qt(3*c)+1,Sn.w)}});for(let u=0;u<2;u++)I(i,a,.35,r*y(.4,1)+y(-.3,.3),o*y(.4,1)+y(-.3,.3),y(.2,.6),.5,pa[u],4,-.3,!1,.88);return et.sfx("castor_turret_shot",e.x,e.y,.5),!0}};function Mw(e){const t=e.x,n=e.y,r=e.ex,o=e.ey;A({type:"custom",layer:"ground",dur:.9,x:t,y:n,draw(i,a){const s=Math.max(4,qt(Math.hypot(r-t,o-n)*3));i.globalAlpha=.75*(1-a);for(let l=qt(a*s);l<=s;l++){if(l%2)continue;const u=l/s;Re(t+(r-t)*u,n+(o-n)*u),Et(i,It,bt,3,zn.g)}Re(r,o),Et(i,It-4,bt,3,zn.gl),Et(i,It+4,bt,3,zn.gl),Et(i,It,bt-2,3,zn.gl),Et(i,It,bt+2,3,zn.gl)}});for(let i=0;i<5;i++)I(t,n,.3,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.45,i&1?zn.d:zn.g,3,9,!1);for(let i=0;i<3;i++)I(t+y(-.2,.2),n+y(-.2,.2),.5,0,0,y(.6,1.1),.9,Bi[i],5,-.5,!1,.9);e.tid&&bw(e.tid)}function bw(e){let t=0,n=0,r=!1;A({type:"custom",layer:"top",dur:12,x:0,y:0,draw(o,i,a){const s=Z(e);if(!s||s.dead){(r||a.t>1)&&(a.t=a.dur+1);return}r=!0,!He(s)&&(w.T>=t&&(t=w.T+.14,I(s.x+y(-.1,.1),s.y+y(-.1,.1),.75,y(-.15,.15),y(-.15,.15),y(.5,.9),y(.7,1),Bi[Math.random()*3|0],5,-.4,!1,.92)),w.T>=n&&(n=w.T+.22,I(s.x,s.y,.3,y(-.3,.3),y(-.3,.3),.3,.4,zn.d,3,8,!1),dt(s.x,s.y,.7,Fa,.3,.25)))}})}function vw(e){for(let t=0;t<3;t++)I(e.x,e.y,.3,y(-.8,.8),y(-.8,.8),y(.8,1.6),.35,t?zn.d:zn.g,3,10,!1)}const ww=["#3e2a52","#3e3248","#4a4048","#58524e"],Sw=["#120a1a","#1e1626","#2c2630","#3a3636"],ra=[],Ya=[],au=[];function _w(e){const t=1-e.t/(e.dur||1);return t<.75?0:Math.min(3,1+(t-.75)/.25*3|0)}function Aw(e){const t=(e.dur||1)-e.t,n=1-e.t/(e.dur||1),r=t<.15?.45+t/.15*.55:1,o=n>.75?1-(n-.75)/.25*.45:1;return(e.r||1.1)*.78*r*o*Ra()}function T2(e,t,n){e.beginPath();for(let r=0;r<ra.length;r++){if(Ya[r]!==t)continue;const o=ra[r],i=au[r]+n,a=q(o.id||r);Re(o.x,o.y);const s=Math.cos(a*ye)*i*.55,l=Math.sin(a*ye)*i*.3;e.moveTo(It+i,bt),e.ellipse(It,bt,i,i*.5,0,0,ye),e.moveTo(It+s+i*.55,bt+l),e.ellipse(It+s,bt+l,i*.55,i*.28,0,0,ye),e.moveTo(It-s*.8+i*.4,bt-l*.8),e.ellipse(It-s*.8,bt-l*.8,i*.4,i*.2,0,0,ye)}e.fill()}function Tw(e){const t=w.game;if(!t||!t.zones)return;ra.length=0,Ya.length=0,au.length=0;let n=0;for(const o of t.zones)if(o.fx==="castor_tar"&&o.t>0){const i=_w(o);ra.push(o),Ya.push(i),au.push(Aw(o)),n|=1<<i}if(!ra.length)return;for(let o=0;o<4;o++)n&1<<o&&(e.fillStyle=ww[o],T2(e,o,3));for(let o=0;o<4;o++)n&1<<o&&(e.fillStyle=Sw[o],T2(e,o,0));const r=w.T;for(let o=0;o<ra.length;o++){if(Ya[o]>1)continue;const i=ra[o],a=au[o],s=i.id||o+1,l=q(s+7);Re(i.x,i.y),e.globalAlpha=Ya[o]?.5:.85;for(let u=0;u<4;u++){const f=Math.PI*1.1+u*.22;Et(e,It+Math.cos(f)*a*.62,bt+Math.sin(f)*a*.31,2,zn.g)}if(Et(e,It+Math.cos(Math.PI*1.25)*a*.62,bt+Math.sin(Math.PI*1.25)*a*.31-1,2,zn.gl),e.globalAlpha=1,!Ya[o])for(let u=0;u<2;u++){const f=(r*.75+l+u*.5)%1,c=It+(q(s*3+u)-.5)*a*1.1,h=bt+(q(s*5+u)-.5)*a*.45;if(f<.7){const d=1+qt(f/.7*3);e.fillStyle=zn.g,e.fillRect(qt(c-d),qt(h-d),d*2,d*2),e.fillStyle=zn.d,e.fillRect(qt(c-d)+1,qt(h-d)+1,d*2-2,d*2-2),Et(e,c-d+1,h-d+1,1,zn.gl)}else if(f<.85){const d=(f-.7)/.15*6+2;Et(e,c-d,h,2,zn.g),Et(e,c+d,h,2,zn.g),Et(e,c,h-d*.6,2,zn.gl)}}}}Pe.castor_E=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=r+9;Qn(e,n-s*7,l+a*3,n+s*7,l-a*3,3,Vn.m);for(const h of[-1,1]){const d=n-s*8*h,m=l+a*3.5*h;Et(e,d,m,5,me.k),Et(e,d,m,2,(i*20|0)&1?me.l:Be.m)}mt(!0);const u=Ht();u.globalAlpha=.35,u.fillStyle=Nt.m,_n(u,n,r,12),u.globalAlpha=1,mt(!1),e.fillStyle=me.d,_n(e,n,r,9),e.fillStyle=me.l,_n(e,n-1,r-1,7);const f=i*34;for(let h=0;h<12;h++){const d=f+h/12*ye;Et(e,n+Math.cos(d)*10,r+Math.sin(d)*10,3,me.w),Et(e,n+Math.cos(d+.18)*11.5,r+Math.sin(d+.18)*11.5,2,me.l)}e.fillStyle=Be.d,_n(e,n,r,4),Et(e,n,r,2,Nt.m),Qn(e,n-9,r-6,n-4,r-11,2,Be.m),Qn(e,n-4,r-11,n+4,r-11,2,Be.m),Math.random()<.75&&I(t.x,t.y,.08,-(t.vx||a)*y(.1,.25)+y(-.6,.6),-(t.vy||s)*y(.1,.25)+y(-.6,.6),y(1,2.2),.3,Math.random()<.5?Nt.l:Nt.w,2,9,!0);const c=i*8|0;t._cl!==c&&(t._cl=c,dt(t.x,t.y,.8,Fa,.35,.15))};function Rw(e){const t=e.ux||1,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;for(let i=0;i<6;i++)I(r,o,.15,t*y(1.5,3.5)+y(-1,1),n*y(1.5,3.5)+y(-1,1),y(.8,2),.3,i&1?Nt.l:Nt.w,2,9,!0);for(let i=0;i<3;i++)I(r,o,.05,y(-.6,.6),y(-.6,.6),y(.2,.6),.5,Do[i],4,0,!1,.9)}H.castor_E_hit=e=>{const t=e.x,n=e.y,r=e.uid?Z(e.uid):null,[o,i]=r?l0(t-r.x,n-r.y):[1,0],a=-i,s=o,l=[0,4,-3,5,-4,3,0].map(u=>u+y(-1,1));A({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(u,f){Re(t,n,.5);const c=l.length-1,h=Ta(f*4);u.globalAlpha=f>.4?(1-f)/.6:1;for(let d=0;d<c*h;d++){const m=d/c-.5,p=(d+1)/c-.5;Qn(u,It+a*m*30+o*l[d],bt+s*m*30+i*l[d],It+a*p*30+o*l[d+1],bt+s*p*30+i*l[d+1],2,d&1?Nt.w:Nt.l)}}});for(let u=0;u<7;u++){const f=u&1?1:-1,c=y(1.5,3.5);I(t,n,.45,(r?(n-r.y)*-f:y(-1,1))*c*.6+y(-.6,.6),(r?(t-r.x)*f:y(-1,1))*c*.6+y(-.6,.6),y(.8,2),.3,u%3?Nt.l:Nt.w,2,8,!0)}for(let u=0;u<3;u++)I(t,n,.45,y(-1,1),y(-1,1),y(1,2),.5,u?me.l:me.w,2,10,!1);dt(t,n,.9,Fa,.45,.15)};function Cw(e){const t=e.x,n=e.y,r=e.radius||2.6,o=Math.random()*ye;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(i,a){Re(t,n,1.2),i.globalAlpha=1-a;for(let s=-3;s<=3;s++)Qn(i,It+s*14,bt-70+a*40,It+s*14,bt-30+a*40,2,s&1?Bi[1]:_o.l)}}),A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(i,a){Re(t,n);const s=It,l=bt;i.globalAlpha=a>.5?(1-a)/.5:1;for(let u=0;u<9;u++){const f=o+u/9*ye,c=(.45+u%3*.12)*Ra()*Math.min(1,a*6);Qn(i,s+Math.cos(f)*14,l+Math.sin(f)*7,s+Math.cos(f)*c,l+Math.sin(f)*c*.5,2,_o.k),Qn(i,s+Math.cos(f)*c,l+Math.sin(f)*c*.5,s+Math.cos(f+.25)*(c+10),l+Math.sin(f+.25)*(c+10)*.5,2,_o.d)}for(let u=0;u<2;u++){const f=Ta(a*1.6-u*.25);if(f<=0||f>=1)continue;const c=r*Ra()*(.2+.8*ci(f));i.globalAlpha=(1-f)*.95;for(let h=0;h<28;h++){const d=o+h/28*ye;Et(i,s+Math.cos(d)*c,l+Math.sin(d)*c*.5,h&1?4:6,u?_o.m:Do[h%3])}}}});for(let i=0;i<10;i++){const a=Math.random()*ye,s=y(2,5);I(t+Math.cos(a)*.6,n+Math.sin(a)*.6,.3,Math.cos(a)*s,Math.sin(a)*s,y(3,6),y(.7,1),i&1?_o.m:_o.d,i%3?4:5,14,!1,.96)}for(let i=0;i<5;i++){const a=Math.random()*ye,s=y(2,4);I(t,n,.5,Math.cos(a)*s,Math.sin(a)*s,y(3,5),.8,i&1?Vn.m:Vn.l,4,13,!1,.96)}Xd(t,n,7,r*.8,[190,170,135],20,36),So({type:"scorch",x:t,y:n,r:1.4,dur:6,col:[70,56,40]}),Q(10),e.uid&&Jy(e.uid)}const I0=new Set;function Pw(e){const t=e.status.transform,n=String(t.mount||"");return n.includes("3")?2.7:n.includes("2")?2.3:1.9}function Jy(e){if(I0.has(e))return;I0.add(e);let t=!1,n=0,r=NaN,o=NaN,i=0,a=0;A({type:"custom",layer:"top",dur:900,x:0,y:0,draw(s,l,u){const f=Z(e);if(!(!!f&&!f.dead&&jy(f))){if(!t){u.t>2&&(I0.delete(e),u.t=u.dur+1);return}if(n||(n=w.T),w.T-n<.12)return;I0.delete(e),u.t=u.dur+1;const d=f?f.x:r,m=f?f.y:o;isFinite(d)&&(Iw(d,m),et.sfx("castor_castle_down",d,m,1));return}t=!0,n=0;const h=isFinite(r)?Math.hypot(f.x-r,f.y-o):0;if(r=f.x,o=f.y,!He(f)&&(w.T>=i&&(i=w.T+.32,I(f.x-.25,f.y-.35,Pw(f),y(-.1,.1),y(-.1,.1),y(.5,.8),y(1,1.4),Bi[Math.random()*3|0],6,-.35,!1,.95)),h>.004&&w.T>=a)){a=w.T+.2;const d=(f.dir||0)*Math.PI/8+Math.PI,m=Math.cos(d),p=Math.sin(d);for(const g of[-1,1])I(f.x+m*.7-p*.6*g,f.y+p*.7+m*.6*g,.05,m*.4+y(-.2,.2),p*.4+y(-.2,.2),y(.2,.5),.6,Do[Math.random()*3|0],5,.5,!1,.9)}}})}function Iw(e,t){for(let n=0;n<9;n++){const r=Math.random()*ye,o=y(1.5,4);I(e,t,y(.6,1.6),Math.cos(r)*o,Math.sin(r)*o,y(1,3),y(.8,1.1),n&1?_o.m:_o.d,5,12,!1,.96)}for(let n=0;n<5;n++){const r=Math.random()*ye,o=y(1.5,3);I(e,t,.8,Math.cos(r)*o,Math.sin(r)*o,y(2,4),.9,n&1?Vn.m:me.m,4,12,!1,.96)}for(let n=0;n<2;n++){const r=Math.random()*ye;I(e,t,.5,Math.cos(r)*2,Math.sin(r)*2,3,1,Be.m,4,12,!1,.96)}Xd(e,t,6,1.2,[170,155,130],22,38),Q(5)}H.castor_T=e=>{e.uid&&Jy(e.uid);for(let t=0;t<4;t++)I(e.x-.25+y(-.1,.1),e.y-.35,1.9,y(-.2,.2),y(-.2,.2),y(1.2,1.8),1.1,Bi[t%3],6,-.3,!1,.95);for(let t=0;t<6;t++)I(e.x,e.y,.6,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.4,t&1?Be.l:Nt.l,2,8,!0)};function Ow(e){const t=e.uid,n=Math.max(.15,e.dur||.4),[r,o]=l0(e.ux||1,e.uy||0);let i=0,a=e.x,s=e.y;A({type:"custom",layer:"top",dur:n+.25,x:e.x,y:e.y,draw(l,u,f){const c=Z(t),h=u*(n+.25);c&&!c.dead&&(a=c.x,s=c.y),Re(a,s,.6),l.globalAlpha=h<n?.8:(1-u)*2;for(let d=0;d<5;d++){const m=(d-2)*9,p=18+(d&1)*10,g=34+d%3*6;Qn(l,It-r*g-o*m,bt-o*g+r*m*.6,It-r*(g+p)-o*m,bt-o*(g+p)+r*m*.6,2,d&1?Bi[1]:Do[0])}if(!(h>=n||!c||c.dead)&&w.T>=i){i=w.T+.03;for(const d of[-1,1])I(c.x-(e.ux||0)*.6+(e.uy||0)*.6*d,c.y-(e.uy||0)*.6-(e.ux||0)*.6*d,.05,y(-.4,.4),y(-.4,.4),y(.3,.8),.6,Do[Math.random()*3|0],5,1,!1,.9)}}})}let R2=-9;H.castor_ev_castor_ram_hit=e=>{const t=e.tid?Z(e.tid):null;zw(t?t.x:e.x,t?t.y:e.y,e.tid||0),w.T-R2>.35&&(R2=w.T,et.sfx("castor_ram_hit",e.x,e.y,1),Q(4))};function zw(e,t,n){A({type:"custom",layer:"top",add:!0,dur:.22,x:e,y:t,draw(r,o){Re(e,t,.5),_f(r,It,bt,16*(1-o)+3,Be.l,Nt.w)}});for(let r=0;r<6;r++)I(e,t,.5,y(-2,2),y(-2,2),y(1,2.5),.35,r&1?Be.l:Nt.l,2,9,!0);A({type:"custom",layer:"top",dur:1,x:e,y:t,draw(r,o){const i=Z(n);if(!(!i||i.dead)){Re(i.x,i.y,1.05*(i.scale||1)),r.globalAlpha=o>.85?(1-o)/.15:1;for(let a=0;a<3;a++){const s=w.T*7+a/3*ye,l=It+Math.cos(s)*13,u=bt+Math.sin(s)*5;Et(r,l,u,3,Be.l),Et(r,l-2,u,1,Be.w),Et(r,l+2,u,1,Be.w),Et(r,l,u-2,1,Be.w),Et(r,l,u+2,1,Be.w)}}}})}function Fw(e){const t=e.ux||1,n=e.uy||0,r=e.n||1;for(const o of[1,-1]){const i=-n*o,a=t*o,[s,l]=l0(i,a);for(let u=0;u<r;u++){const f=r===1?0:(u-(r-1)/2)*.9,c=e.x+i*.9+t*f,h=e.y+a*.9+n*f,d=u*.06;A({type:"custom",layer:"top",add:!0,dur:.18,delay:d,x:c,y:h,draw(m,p){Re(c,h,.6);const g=1-p;Et(m,It,bt,qt(12*g)+3,Nt.m);for(let x=1;x<=3;x++)Et(m,It+s*x*6,bt+l*x*6,qt((10-x*2)*g)+2,x<2?Sn.y:Sn.w)}});for(let m=0;m<4;m++)I(c,h,.6,i*y(.8,2.2)+y(-.4,.4),a*y(.8,2.2)+y(-.4,.4),y(.2,.8),y(.7,1.1),pa[m%3],6,-.3,!1,.9);A({type:"puff",x:c+i*.4,y:h+a*.4,r:y(18,26),dur:y(.8,1.2),col:[200,196,190],delay:d})}dt(e.x+i*1.2,e.y+a*1.2,1.4,Fa,.8,.22)}Q(6)}Pe.castor_W=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o);for(let l=1;l<=3;l++)e.globalAlpha=.5-l*.13,Et(e,n-a*l*6,r-s*l*6,8-l*2,me.m);e.globalAlpha=1,e.fillStyle=me.k,_n(e,n,r,6),e.fillStyle=me.d,_n(e,n,r-1,5),Et(e,n-2,r-3,2,me.l),Et(e,n-1,r-4,1,me.w),Math.random()<.55&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),y(.1,.4),.55,pa[Math.random()*3|0],4,-.3,!1,.9)};H.castor_W_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){Re(t,n);const i=6+ci(o)*26;r.globalAlpha=1-o;for(let a=0;a<12;a++){const s=a/12*ye;Et(r,It+Math.cos(s)*i,bt+Math.sin(s)*i*.5,4,Do[a%3])}r.fillStyle=_o.k,_n(r,It,bt,6,.5)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:t,y:n,draw(r,o){Re(t,n,.45),_f(r,It,bt,14*(1-o)+2,me.l,Nt.w)}});for(let r=0;r<6;r++)I(t,n,.3,y(-2,2),y(-2,2),y(2,4),.6,r&1?Do[2]:_o.d,4,13,!1,.96);for(let r=0;r<4;r++)I(t,n,.45,y(-2,2),y(-2,2),y(1,2.5),.3,r&1?Nt.l:Nt.w,2,9,!0);So({type:"scorch",x:t,y:n,r:.4,dur:3,col:[50,40,30]}),Q(2.5)};let C2=0,P2=-9;function Ew(e){w.T-P2>.08&&(C2=0),P2=w.T;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=C2++*.07,a=y(-1,1);let s=!1;A({type:"custom",layer:"top",dur:.4,delay:i,x:t,y:n,draw(l,u){const f=ci(u),c=t+(r-t)*f,h=n+(o-n)*f,d=1.1*(1-u)+Math.sin(u*Math.PI)*.7;Re(c,h,d);const m=a*3+u*9*(a>=0?1:-1),p=Math.cos(m),g=Math.sin(m);for(let x=-2;x<=2;x++)Et(l,It+p*x*2.5,bt+g*x*2.5,8,x===-2||x===2?me.m:Vn.m);if(Et(l,It-g*2,bt+p*2,2,Nt.m),u>.92&&!s){s=!0;for(let x=0;x<4;x++)I(r,o,.05,y(-.8,.8),y(-.8,.8),y(.4,1),.5,Do[x%3],4,3,!1,.9)}}})}function Ah(e){return(e.dur||10)-e.t}function Lw(e){const t=w.game;if(!t||!t.zones)return;const n=w.T;for(const r of t.zones){if(r.fx!=="castor_kegs"||r.t<=0)continue;const o=Ah(r);if(o<.38)continue;const i=r.t<1.5?Math.sin(n*50+(r.id||0))*1.2:0;if(Re(r.x,r.y),o>=1){const s=(r.r||1.1)*Ra(),l=.18+.12*Math.sin(n*5+(r.id||0));e.globalAlpha=l;for(let u=0;u<24;u++)if(u&1){const f=u/24*ye+n*.4;Et(e,It+Math.cos(f)*s,bt+Math.sin(f)*s*.5,3,Nt.m)}e.globalAlpha=1}const a=It+i;e.globalAlpha=.35,e.fillStyle="#000000",e.beginPath(),e.ellipse(It+2,bt+1,9,4,0,0,ye),e.fill(),e.globalAlpha=1,e.fillStyle=Vn.d,e.fillRect(qt(a-7),qt(bt-16),14,16),e.fillStyle=Vn.m,e.fillRect(qt(a-6),qt(bt-16),10,16),e.fillStyle=Vn.l,e.fillRect(qt(a-4),qt(bt-15),2,14),e.fillStyle=me.m,e.fillRect(qt(a-7),qt(bt-14),14,2),e.fillRect(qt(a-7),qt(bt-4),14,2),e.fillStyle=Vn.l,e.beginPath(),e.ellipse(qt(a),qt(bt-16),7,3,0,0,ye),e.fill(),e.fillStyle=Nt.m,e.fillRect(qt(a-2),qt(bt-10),4,3),Qn(e,a+1,bt-17,a+3,bt-21,1,me.k)}}function kw(e){const t=w.game;if(!t||!t.zones)return;const n=w.T;let r=!1;for(const o of t.zones){if(o.fx!=="castor_kegs"||o.t<=0||Ah(o)<.38)continue;r||(r=!0,mt(!0),e=Ht());const i=Ta(Ah(o)/(o.dur||10)),a=8+34*i,s=(n*a+(o.id||0)|0)&1;Re(o.x,o.y);const l=It+3,u=bt-22;Et(e,l,u,s?4:2,s?Nt.w:Nt.m),s&&Et(e,l+y(-3,3),u+y(-3,1),1,Sn.y),Math.random()<.06+.25*i&&I(o.x,o.y,.28,y(-.5,.5),y(-.5,.5),y(.6,1.2),.25,Math.random()<.5?Nt.l:Sn.y,2,6,!0)}r&&mt(!1)}function Dw(e){const t=e.x,n=e.y,r=e.radius||1.9,o=Math.random()*ye;A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Re(t,n,.5+a*.4);const s=1-a,l=10+ci(Ta(a*3))*22;i.globalAlpha=s,i.fillStyle=Sn.r,_n(i,It,bt,qt(l*s+4)),i.fillStyle=Sn.o,_n(i,It,bt-2,qt(l*.75*s+3)),i.fillStyle=Sn.y,_n(i,It,bt-3,qt(l*.45*s+2)),a<.3&&(i.fillStyle=Sn.w,_n(i,It,bt-3,qt(l*.3)));for(let u=0;u<10;u++){const f=o+u/10*ye,c=l+8+u%3*6;Qn(i,It+Math.cos(f)*l*.6,bt+Math.sin(f)*l*.45,It+Math.cos(f)*c,bt+Math.sin(f)*c*.6-a*10,3,u&1?Sn.o:Sn.y)}}}),A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){Re(t,n);const s=r*Ra()*(.25+.75*ci(a));i.globalAlpha=(1-a)*.95;for(let l=0;l<26;l++){const u=o+l/26*ye;Et(i,It+Math.cos(u)*s,bt+Math.sin(u)*s*.5,l&1?5:7,pa[l%3])}}});for(let i=0;i<6;i++){const a=Math.random()*ye,s=y(2,5);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(3,6),y(.7,1),i&1?Vn.m:Vn.l,4,13,!1,.96)}for(let i=0;i<2;i++){const a=Math.random()*ye;I(t,n,.4,Math.cos(a)*3,Math.sin(a)*3,y(4,6),.9,me.m,3,13,!1,.96)}for(let i=0;i<14;i++){const a=Math.random()*ye,s=y(1,4);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(1,3.5),y(.4,.7),[Sn.w,Sn.y,Sn.o,Sn.r][i%4],3,3,!0)}Xd(t,n,6,r*.6,[110,104,100],18,32),So({type:"scorch",x:t,y:n,r:1.2,dur:6}),dt(t,n,r*1.3,Fa,1,.45),Q(8)}H.castor_Q=e=>{if(e.type==="castor_ram"){Ow(e);return}if(e.type==="castor_turret"){xw(e);return}return!1};H.castor_W=e=>{if(e.type==="castor_tar_go"){Mw(e);return}if(e.type==="castor_tar_drop"){vw(e);return}if(e.type==="castor_broadside"){Fw(e);return}return!1};H.castor_E=e=>{if(e.type==="cast_castor_saw"){Rw(e);return}if(e.type==="castor_keg_drop"){Ew(e);return}if(e.type==="castor_keg_boom"){Dw(e);return}return!1};H.castor_R=e=>{if(e.type==="citadel"){Cw(e);return}return!1};H.castor_petfade=e=>{if(e.sprite!=="castor_turret"&&e.sprite!=="castor_tar")return!1;const t=e.x,n=e.y,r=e.sprite==="castor_tar";for(let l=0;l<5;l++){const u=Math.random()*ye,f=y(1.2,3);I(t,n,.4,Math.cos(u)*f,Math.sin(u)*f,y(2,4),.7,[me.m,Be.m,Vn.m,Vn.l,me.l][l],3,12,!1,.96)}if(r){for(let l=0;l<4;l++)I(t,n,.3,y(-1,1),y(-1,1),y(.5,1.5),.5,zn.d,3,8,!1);for(let l=0;l<3;l++)I(t,n,.5,y(-.3,.3),y(-.3,.3),y(.8,1.2),1,Bi[l],6,-.4,!1,.93)}else A({type:"puff",x:t,y:n,r:18,dur:.8,col:[150,145,140]});et.sfx(r?"castor_cart_down":"castor_turret_down",t,n,.8);const o=w.game;let i=null,a=144;const s=!!(o&&o.fx&&o.fx.some(l=>l.type==="death"&&l.uid===e.uid));if(o&&s){for(const l of o.heroes||o.units)if(l.heroKey==="castor"&&!l.dead){const u=(l.x-t)**2+(l.y-n)**2;u<a&&(a=u,i=l)}}if(i){const l=i.id;A({type:"custom",layer:"top",dur:.8,x:i.x,y:i.y,draw(u,f){const c=Z(l);c&&(Re(c.x,c.y,1.25+f*.4),u.globalAlpha=f>.6?(1-f)/.4:1,Qy(u,It,bt,5,f*8,Be.l,Be.k))}})}return!0};Cu.castor=e=>{const t=Ht();e==="ground"?(Tw(t),Lw(t)):kw(t)};Sa.castor_tar_drop=()=>null;Sa.castor_ram=()=>"ab_castor_ram";Sa.castor_broadside=()=>"ab_castor_broadside";let I2=-9;Sa.castor_keg_drop=()=>w.T-I2<.15?null:(I2=w.T,"ab_castor_kegs");Sa.castor_keg_boom=()=>"castor_kegboom";let Ye=0,Ke=0;function Lr(e,t,n=0){Ye=(e-t)*N.HW+N.OX,Ke=(e+t)*N.HH-n*N.ZK}function Sr(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const tg=e=>e<0?0:e>1?1:e,sn=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],Uw="#3a2420",Gd="#2a1410",Nd=e=>e>=5?Uw:sn[e<0?0:e|0];function qu(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}H.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=s+(h/(l-1)-.5)*a*1.5;const m=i*y(.7,1);for(let p=0;p<=u;p++){const g=.35+(m-.35)*p/u;d+=y(-.13,.13);const x=(h*(u+1)+p)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const c=(h,d,m)=>{const p=tg(d/.25)*u;for(let g=0;g<l;g++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),M=(g*(u+1)+x)*2;Lr(f[M],f[M+1]);const v=Ye,S=Ke;Lr(f[M+2],f[M+3]);const _=v+(Ye-v)*b,T=S+(Ke-S)*b,R=Math.max(1,Math.round(Math.hypot(_-v,T-S)/3)),C=m*(1-x/u*.5);for(let O=0;O<=R;O++)Sr(h,v+(_-v)*O/R,S+(T-S)*O/R,C)}};A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=Gd,c(h,d*1.8,6)}}),A({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(h,d){const m=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Nd(m/.3),c(h,m,3)}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(h,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const g=.4+(i-.4)*p,x=a*(.45+.55*p),b=5+Math.round(g*3);h.globalAlpha=1-p,h.fillStyle=sn[Math.min(3,m+(p*2|0))];for(let M=0;M<=b;M++){const v=s+(M/b-.5)*2*x,S=g*(.9+.1*Math.sin(M*2.3+m*1.7));Lr(t+Math.cos(v)*S,n+Math.sin(v)*S,.35+.12*Math.sin(M*1.3+d*18)),Sr(h,Ye,Ke,8-m-p*4)}}}});for(let h=0;h<32;h++){const d=s+y(-a,a)*.9,m=y(.3,1)*i*2.4;I(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,y(1.2,3),y(.7,1.05),sn[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+y(-a,a),m=y(.6,1)*i*3.2;I(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,y(.4,1.4),.35,sn[0],2,1,!0,.98)}Q(3)};const Xw=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],Th=[],eg=[],ng=[];Xw.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(Th.push(n-2),eg.push(t),ng.push(r))}});const rg=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function Gw(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":sn[0]:rg[i];for(let a=0;a<Th.length;a++)ng[a]===i&&e.fillRect(Math.round(t+Th[a]*r),Math.round(n+eg[a]*r),r,r)}}H.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)I(i+y(-.3,.3),a+y(-.3,.3),y(.2,.8),y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),y(.5,.8),rg[2+(s&1)],4,9,!1,.95)};A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=Z(s.uid),u=a*t;if(!l||l.dead||w.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(b)>0;if(d===0===M)continue;const v=m*.035,S=tg((u-v)/.08);if(S<=0)continue;const _=(p?22:30)*c,T=(p?8:11)*c;Lr(l.x,l.y,p?.62:.22),i.globalAlpha=M?1:.4,Gw(i,Ye+Math.cos(b)*_,Ke+Math.sin(b)*T-10*(1-S)-6*c,h,u-v<.12)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){Lr(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=sn[1];for(let l=2;l<s;l+=3)Sr(i,Ye+l,Ke+l*.7,4),Sr(i,Ye-l,Ke+l*.7,4),Sr(i,Ye+l,Ke-l*.7,4),Sr(i,Ye-l,Ke-l*.7,4);i.fillStyle=sn[0],Sr(i,Ye,Ke,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;I(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,y(.6,1.2),y(.5,.8),sn[1+i%3],2,-1,!0,.9)}};H.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=o-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let m=0;m<c;m++){const p=(m+.5)/c,g=y(-.16,.16);h[m*4]=t+a*p-f*g,h[m*4+1]=n+s*p+u*g,h[m*4+2]=y(18,30),h[m*4+3]=p*r}const d=r+1.9;A({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const g=p*d;for(let x=0;x<c;x++){const b=g-h[x*4+3];if(b<0)continue;const M=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(M<=0)continue;Lr(h[x*4],h[x*4+1]);const v=h[x*4+2];m.globalAlpha=M*.8,m.fillStyle=Gd,qu(m,Ye,Ke+1,v+6);const S=b/.3|0;m.globalAlpha=M,m.fillStyle=Nd(S),qu(m,Ye,Ke,v*(S<5?.8:.6)),S<4&&q(x*7+(g*12|0))>.72&&(m.fillStyle=sn[0],m.fillRect(Math.round(Ye+(q(x*3+(g*12|0))-.5)*v*.5),Math.round(Ke-2),2,2))}m.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,g){const x=Z(g.uid),b=x?x.x:o,M=x?x.y:i;Lr(b,M,.4);const v=Ye,S=Ke;Lr(b+u,M+f,.4);let _=Ye-v,T=Ke-S;const R=Math.hypot(_,T)||1;_/=R,T/=R;const C=1-p*.6;for(let O=0;O<9;O++){const z=(10+O*5*(.8+Math.random()*.4))*C;m.globalAlpha=1-O/10,m.fillStyle=sn[Math.min(4,O>>1)],Sr(m,v-_*z+(Math.random()-.5)*3,S-T*z+(Math.random()-.5)*3,(10-O)*C)}if(g.n<22&&p<.9){for(let O=0;O<2;O++){const z=y(-2.5,2.5);I(b,M,.35,-u*2-f*z,-f*2+u*z,y(.5,1.6),.5,sn[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&p>.85){g.end=!0;for(let O=0;O<8;O++){const z=O/8*6.28;I(b,M,.1,Math.cos(z)*2.5+u,Math.sin(z)*2.5+f,.4,.6,O&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;I(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}Q(4)};const su=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],lu=[],og=[],ig=[];su.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,a)=>a<0||a>=su.length||i<0||i>=e.length||su[a][i]===".";lu.push(n-9),og.push(t),ig.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const Nw=["#ff7a20","#ffd84a","#fffbe0"];H.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=c-d*.05;m<0||(Lr(s[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=Gd,qu(u,Ye,Ke+1,46),u.globalAlpha=h,u.fillStyle=Nd(m/.45),qu(u,Ye,Ke,26))}u.globalAlpha=1}}),A({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const c=r*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const m=d/h*6.28;Lr(t+Math.cos(m)*c,n+Math.sin(m)*c),u.fillStyle=sn[d&1],Sr(u,Ye,Ke,7*(1-f)+2)}}}),A({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const m=h-d*.05;if(m<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let v=0;v<5;v++)I(s[d],l[d],.3,y(-.8,.8)+(s[d]-t)*.4,y(-.8,.8)+(l[d]-n)*.4,y(3,5),y(.6,.9),sn[v%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const g=95*p;Lr(s[d],l[d]);const x=Ye,b=Ke;u.globalAlpha=Math.min(1,p*1.5);const M=h*24|0;for(let v=0;v<g;v+=4){const S=v/g,_=16*(1-S*.75)+(q(d*31+v+M)-.5)*4,T=(q(d*17+v*3+M)-.5)*7*S;if(u.fillStyle=S<.25?sn[1]:S<.6?sn[2]:sn[3],u.fillRect(Math.round(x+T-_/2),Math.round(b-v-4),Math.round(_),4),S<.7){u.fillStyle=sn[0];const R=_*.4;u.fillRect(Math.round(x+T-R/2),Math.round(b-v-4),Math.max(2,Math.round(R)),4)}}}}}),A({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,Lr(t,n,h);const m=Ye,p=Ke-su.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=Nw[g];for(let x=0;x<lu.length;x++){if(ig[x]!==g)continue;const b=Math.abs(lu[x]),M=b>=4?Math.round(Math.sin(c*14)*(b-3)*.45):0;u.fillRect(Math.round(m+lu[x]*d-d/2),Math.round(p+(og[x]+M)*d),d,d)}}}}),Q(9)};Qe.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)I(t,n,.45,y(-1.3,1.3),y(-1.3,1.3),y(1.6,3.2),y(.3,.5),o<3?sn[0]:sn[1],2,10,!0,.97);I(t,n,.45,y(-.5,.5),y(-.5,.5),1,.45,sn[2],3,8,!0,.95),A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){Lr(t,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?sn[1]:sn[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),c=a*u*.7;Sr(o,Ye+f,Ke+c,3),Sr(o,Ye-c/.7,Ke+f*.7,3),Sr(o,Ye-f,Ke-c,3),Sr(o,Ye+c/.7,Ke-f*.7,3)}i<.3&&(o.fillStyle=sn[0],Sr(o,Ye,Ke,6))}})};const Yn="#fff2d6",dr="#e2b878",Ca="#9a6232",hi="#4e2e16",tl="#e8643a",Hs="#ffcc66",Vu="#a07a48",mn=Math.round,Ro=Math.PI*2;function hn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(mn(t),mn(n),r,o)}function Ao(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(mn(t+(r-t)*l/s-i/2),mn(n+(o-n)*l/s-i/2),i,i)}function Ws(e,t,n,r,o,i=tl){const a=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?Ca:l>.82?i:Yn,e.fillRect(mn(t+(r-t)*l-u/2),mn(n+(o-n)*l-u/2),u,u)}}function wc(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=mn(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(mn(t-a),mn(n+i),a*2,2)}}function ag(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const sg=e=>{const t=Z(e);return t&&!t.dead&&!He(t)?t:null},Bw=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},lg=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Pe.erizo_A=(e,t,n,r,o)=>{e.translate(mn(n),mn(r)),e.rotate(o),hn(e,-15,-2,16,4,hi),hn(e,-14,-1,14,2,dr),hn(e,-9,-1,3,2,Yn),hn(e,-4,-1,3,2,Yn),hn(e,0,-2,3,4,hi),hn(e,3,-1,3,2,tl),hn(e,6,0,2,1,Hs),hn(e,-17,-4,5,2,Yn),hn(e,-17,2,5,2,Yn),Math.random()<.3&&I(t.x,t.y,t.z||.45,0,0,-.3,.25,dr,2,0,!1)};Qe.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:y(0,Ro),l:y(8,12)}));A({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of t)Ws(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)I(e.x,e.y,.45,y(-2,2),y(-2,2),y(.5,2),.3,n%2?dr:Yn,2,6,!1)};Pe.erizo_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;e.translate(mn(n),mn(r)),e.rotate(o),hn(e,-31,-3,32,6,hi);for(let u=0;u<30;u+=6)hn(e,-30+u,-2,3,4,Yn),hn(e,-30+u+3,-2,3,4,Ca);hn(e,0,-3,4,6,hi),hn(e,4,-2,4,4,tl),hn(e,8,-1,3,2,Hs);for(let u=0;u<3;u++)hn(e,-36+u*3,-6+u,4,2,Yn),hn(e,-36+u*3,4-u,4,2,Yn);mt(!0);const l=Ht();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=Hs;for(let u=0;u<5;u++)l.fillRect(-6-u*6,mn(Math.sin(i*38+u*1.3)*5)-1,2,2);mt(!1),Math.random()<.5&&I(t.x,t.y,s,y(-.4,.4),y(-.4,.4),.3,.35,Math.random()<.5?Yn:dr,2,3,!1)};H.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=ag(t,n),i=-o,a=r;A({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,c]=P(e.x+t*.35,e.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),m=f+r*d,p=c+o*d,g=f+i*15-r*5,x=c+a*15-o*5,b=f-i*15-r*5,M=c-a*15-o*5;l.globalAlpha=1-u,Ao(l,f+r*3,c+o*3,g,x,3,Ca),Ao(l,f+r*3,c+o*3,b,M,3,Ca),Ao(l,g,x,m,p,2,Yn),Ao(l,b,M,m,p,2,Yn)}}),A({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,c]=P(e.x+t*.5,e.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),g=r*m-o*p,x=r*p+o*m,b=d?h*.55:h;Ao(l,f,c,f+g*b,c+x*b,3,Hs),Ao(l,f,c,f+g*b*.5,c+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)I(e.x-t*.2,e.y-n*.2,.4,-t*y(1,2.5)+y(-.5,.5),-n*y(1,2.5)+y(-.5,.5),y(.3,1),.45,l%2?dr:Vu,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+y(-.25,.25),f=y(5,9);I(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,y(0,.6),.22,l%2?Hs:Yn,2,0,!0,.86)}Q(1.5)};H.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=sg(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?lg(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=P(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*Ro+.17,p=Math.sin(m);if(p>=0!==o)continue;const g=u<t?Math.sin(w.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=c+Math.cos(m)*16,M=h+p*12,v=b+Math.cos(m)*x+g,S=M+p*x*.75-x*.3;Ws(i,b,M,v,S,(w.T*7+d*.37)%1<.12?"#ffffff":tl)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),A({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*Ro,[u,f]=P(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[c,h]=P(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Ao(o,u,f,c,h,2,s%2?dr:Ca)}}});for(let o=0;o<14;o++){const i=o/14*Ro,a=y(2,3.5);I(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,y(1.5,3),.5,o%3?Yn:dr,2,8,!1,.92)}Q(2)};H.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=ag(o,i),c=u>=0?1:-1;A({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,x/r);let M=e.x+o*b,v=e.y+i*b;const S=Z(e.uid);if(S){if(S.dead||He(S))return;M=S.x,v=S.y}const[_,T]=P(M,v,.32),R=16,C=x*36*c;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let O=0;O<3;O++){const z=(O-1)*9;Ao(m,_-u*(R+4)-f*z,T-f*(R+4)+u*z,_-u*(R+18+O*5)-f*z,T-f*(R+18+O*5)+u*z,2,dr)}wc(m,_,T,R+1,hi),wc(m,_,T,R-1,Ca),wc(m,_-4,T-4,R-9,dr);for(let O=0;O<10;O++){const z=C+O*Ro/10,E=Math.cos(z),U=Math.sin(z);Ws(m,_+E*(R-3),T+U*(R-3),_+E*(R+10),T+U*(R+10))}}});const h=Math.max(4,Math.min(10,mn(a*2.2))),d=Array.from({length:h},(m,p)=>({k:(p+.5)/h,o:y(-.28,.28),lean:y(-6,6),h:y(9,14)}));A({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,(g.dur-x)/.5);for(const M of d){if(x<M.k*r)continue;const v=Math.min(1,(x-M.k*r)/.08),[S,_]=P(e.x+o*M.k+s*M.o,e.y+i*M.k+l*M.o);m.globalAlpha=b*.45,hn(m,S-4,_-1,8,3,hi),m.globalAlpha=b,Ws(m,S+M.lean*v,_-M.h*v,S,_)}}});for(let m=0;m<12;m++){const p=Math.random();I(e.x+o*p+y(-.2,.2),e.y+i*p+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.5,1.4),y(.4,.7),m%2?dr:Vu,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;I(e.x,e.y,.35,s*p*y(2,4),l*p*y(2,4),y(1.5,3),.45,Yn,2,8,!1,.92)}Q(2)};H.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=Bw(e),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(h,d)=>{const m=Math.random()*Ro,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(r-.5)+y(0,.08),lean:y(-7,7),h:y(10,15),hit:!1}});A({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(h,d,m){const p=d*m.dur,g=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);h.globalAlpha=.85*g;for(let b=0;b<8;b++){const M=b*Ro/8+p*.4;for(const v of[-.09,.09]){const[S,_]=P(e.x+Math.cos(M+v)*x,e.y+Math.sin(M+v)*x),[T,R]=P(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));Ao(h,S,_,T,R,3,tl)}}h.globalAlpha=.45*g;for(let b=0;b<48;b++){const M=b/48*Ro-p*.2,[v,S]=P(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);hn(h,v-1,S-1,2,2,dr)}for(const b of a){if(p<b.t0+o)continue;const[M,v]=P(b.x,b.y);h.globalAlpha=.4*g,hn(h,M-4,v-1,8,3,hi),h.globalAlpha=g,Ws(h,M+b.lean,v-b.h,M,v)}}}),A({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(h,d,m){const p=d*m.dur;for(const g of a){const x=(p-g.t0)/o;if(x<0)continue;if(x>=1){g.hit||(g.hit=!0,I(g.x,g.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Math.random()<.5?dr:Vu,2,7,!1));continue}const[b,M]=P(g.x,g.y,3.6*(1-x)),v=g.lean*1.4;h.globalAlpha=.35,Ao(h,b+v*2.4,M-52,b+v,M-22,1,Yn),h.globalAlpha=1,Ws(h,b+v,M-22,b,M)}}});const s=za(e,r),l=w.T,u=Array.from({length:16},(h,d)=>({a:d/16*Ro+y(-.07,.07),h:d%2?y(1.2,1.35):y(1.6,1.8),tip:y(.84,.9),w:d%2?5:7,ph:Math.random()*Ro,dl:d/16*.3})).sort((h,d)=>Math.cos(h.a)+Math.sin(h.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(h,d,m)=>{const p=or(s);if(p<=0){d.t=d.dur+1;return}const g=w.T-l,x=Math.min(1,p/.3);for(const b of u){const M=Math.cos(b.a),v=Math.sin(b.a);if(Ni(M,v,0)>0!==m)continue;const S=lg((g-b.dl)/.3)*x;if(S<=.02)continue;const _=Math.sin(w.T*1.8+b.ph)*.04,T=e.x+M*t,R=e.y+v*t;Xn(T,R);const C=zt.x,O=zt.y;Xn(e.x+Math.cos(b.a+_)*t*(1-(1-b.tip)*S),e.y+Math.sin(b.a+_)*t*(1-(1-b.tip)*S),b.h*S),$w(h,C,O,zt.x,zt.y,b.w,m?1:.8),h.globalAlpha=m?1:.85,hn(h,C-6,O-1,12,3,Vu),hn(h,C-3,O-2,6,2,dr)}h.globalAlpha=1};A({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(h,d,m){f(h,m,!1),s.rem>0&&yi(s,e.x,e.y,t*.9,16764006,.3)}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(h,d,m){f(h,m,!0)}});const c=sg(e.uid);if(c)for(let h=0;h<10;h++)I(c.x,c.y,.6,y(-.4,.4),y(-.4,.4),y(7,10),.45,h%2?Yn:dr,2,0,!1,1);Q(2)};function $w(e,t,n,r,o,i,a){const s=Math.max(4,Math.ceil(Math.hypot(r-t,o-n)/3));for(let l=0;l<=s;l++){const u=l/s,f=Math.max(1,mn(i*Math.pow(1-u,.75))),c=mn(t+(r-t)*u),h=mn(n+(o-n)*u);e.globalAlpha=a,e.fillStyle=hi,e.fillRect(c-f-1,h-2,f*2+2,4),e.fillStyle=u<.28?Ca:u>.84?tl:Yn,e.fillRect(c-f,h-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?hi:dr,e.fillRect(c+mn(f*.3),h-2,f-mn(f*.3),4))}e.fillStyle=Hs,e.fillRect(mn(r)-1,mn(o)-1,2,2)}let _e=0,Ae=0;function Pn(e,t,n=0){_e=(e-t)*N.HW+N.OX,Ae=(e+t)*N.HH-n*N.ZK}function Kr(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const oa=e=>e<0?0:e>1?1:e,Rh=e=>1-(1-e)*(1-e),ce=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],Jn=["#ffe0f4","#ff9ad8","#e060b0"],Wi=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],yn=["#ffffff","#fff2a0","#ffd24a"];function Bd(e,t,n,r){const o=[],i=[],a=[],s=[],l=e.length,u=(f,c)=>c<0||c>=l||f<0||f>=e[c].length||t.indexOf(e[c][f])<0;return e.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=t.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),a.push(d),s.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const Sc=Bd(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function ug(e,t,n,r){for(let o=0;o<Sc.n;o++)e.fillRect(Math.round(t+Sc.X[o]*r-r/2),Math.round(n+Sc.Y[o]*r-r/2),r,r)}function Ii(e,t,n,r){Kr(e,t,n,3);for(let o=2;o<=r;o+=2)Kr(e,t+o,n+o,2),Kr(e,t-o,n+o,2),Kr(e,t+o,n-o,2),Kr(e,t-o,n-o,2)}function Yu(e,t,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,c=Math.sin(l)*r*i,h=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(a+1)));for(let p=0;p<m;p++){const g=p/m;Kr(e,t+f+(h-f)*g,n+c+(d-c)*g,a)}}}function O2(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const hl=new Map;function fg(e,t,n=!1){if(e.id==null)return;let r=hl.get(e.id);if(!r){hl.size>200&&hl.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},hl.set(e.id,r);const o=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=w.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,hl.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}H.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){Pn(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=ce[1],Yu(r,_e,Ae,i,o*Math.PI,.75,3),r.fillStyle=Jn[1],Yu(r,_e,Ae,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=ce[0],Kr(r,_e,Ae,4)}});for(let r=0;r<6;r++)I(t,n,.45,y(-1,1),y(-1,1),y(.3,1),.4,r&1?Jn[1]:ce[1],2,0,!0)};Pe.gato_Q=(e,t,n,r,o,i)=>{fg(t,cg);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let h=1;h<16;h++){const d=8+h*3.2,m=Math.sin(h*.7-i*22)*(2+h*.35);e.globalAlpha=1-h/16,e.fillStyle=h&1?Jn[1]:Jn[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(r+s*d+u*m),2,2)}e.globalAlpha=1,mt(!0);const f=Ht();f.fillStyle=ce[3],f.globalAlpha=.16,O2(f,n,r,20),f.globalAlpha=.22,O2(f,n,r,13),f.globalAlpha=1,mt(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(m>9)continue;let p;m>6?p=ce[4]:d===-2&&h===-2?p=ce[0]:p=((d*.8+h+c)%4+4)%4<1.3?ce[1]:ce[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function cg(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)I(t,n,.45,y(-.6,.6),y(-.6,.6),y(0,.6),.4,o&1?Jn[1]:ce[2],2,1,!0);return}const r=Math.random()*6.28;A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){Pn(t,n,.45);const a=Math.round(14*oa(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,c=l+u*.3;o.fillStyle=u+s&1?Jn[1]:ce[1],o.fillRect(Math.round(_e+Math.cos(c)*f),Math.round(Ae+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=ce[0],Kr(o,_e,Ae,10*(1-i*3)))}});for(let o=0;o<10;o++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(.5,1.5),y(.4,.6),o&1?Jn[0]:ce[1],2,2,!0);Q(2)}const No=Bd(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);H.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,m=Math.cos(d),p=Math.sin(d),g=Math.atan2(m+p,m-p),x=g+Math.PI/2,b=Math.cos(x),M=Math.sin(x),v=new Float32Array(No.n*2);for(let S=0;S<No.n;S++)v[S*2]=No.X[S]*b-No.Y[S]*M,v[S*2+1]=No.X[S]*M+No.Y[S]*b;o.push({x:t+m*u,y:n+p*u,t:f+h*.014,c:v})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,g=Math.max(2,Math.round(p*.6)),x=Math.round(p);Pn(h.x,h.y),l.globalAlpha=c*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Wi[3]:b===1?Wi[1]:Wi[0];for(let M=0;M<No.n;M++){const v=No.B[M]===1,S=No.Y[M]<0;(b===0?!v:b===1?v||S:v||!S)||l.fillRect(Math.round(_e+h.c[M*2]*p-x/2),Math.round(Ae+h.c[M*2+1]*p*.5-g/2),x,g)}}}l.globalAlpha=1}});const s=Math.random()*6.28;A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*Rh(oa(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),m=Math.sin(h);for(let p=.25;p<f;p+=.16)Pn(t+d*p,n+m*p),l.fillStyle=p<f*.5?Wi[1]:Wi[2],Kr(l,_e,Ae,4-p/r*2);if(f>r*.4){const p=f*.6;for(let g=-1;g<=1;g+=2){const x=h+g*.75;for(let b=.12;b<.45;b+=.12)Pn(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=Wi[0],Kr(l,_e,Ae,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;I(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,y(.3,1.1),Math.cos(u)*y(.5,2),Math.sin(u)*y(.5,2),y(0,.4),y(.7,1.1),Wi[l%2],2,.5,!0,.95)}Q(4)};const qi=Bd([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);H.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;A({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){Pn(t,n);const l=3,u=_e,f=Ae-2;for(let c=0;c<3;c++){a.fillStyle=c===0?ce[3]:c===1?ce[1]:yn[1];for(let h=0;h<qi.n;h++){if((qi.K[h]===1?2:qi.B[h]?1:0)!==c)continue;const m=q(h*7.13+i),p=-qi.Y[h]/(qi.h-1);m*.6+p*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+qi.X[h]*l-l/2),Math.round(f+qi.Y[h]*l-s*18*m),l,l))}}}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(Pn(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-c,a.fillStyle=u&1?Jn[1]:ce[1],Ii(a,_e,Ae,8*(1-c)+2))}}}),A({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){Pn(r,o,1.05);const l=_e,u=Ae,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let m=0;m<5;m++){const p=c[m]*2,g=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?yn[2]:yn[1],a.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,g)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=Jn[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=ce[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)I(t,n,.5,y(-.8,.8),y(-.8,.8),y(.5,1.5),.5,ce[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;I(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,y(.2,1),.45,a&1?Jn[1]:ce[1],2,0,!0,.9)}};const O0=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],_c=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],Ac=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],Ai=3.7,z2=[1,.75,.55,.4,.28],Ba=Math.round;let F2=null,E2=null,L2=[],k2=[];function D2(e,t,n,r,o,i,a){const s=w.T;for(let l=0;l<12;l++){const u=l/12*6.283+s*.5,f=Math.cos(u),c=Math.sin(u);if(Ni(f*Ai,c*Ai,r)>0===a)for(let h=1;h<=14;h++){const d=h/14;if(d>o)break;const m=((d-s*1.6+l*.29)%1+1)%1,p=m<.12;Pn(t+f*r*d,n+c*r*d,Ai*(1-d)),e.globalAlpha=i*(p?1:a?.55:.45),e.fillStyle=p?yn[0]:h%3?ce[1]:Jn[1],p&&a?Ii(e,_e,Ae,5):Kr(e,_e,Ae,p?4:3)}}}H.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*N.HW*Math.SQRT2;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(S,_){const T=_*1.1;Pn(t,n);const R=_e,C=Ae;S.globalAlpha=_>.85?(1-_)/.15:1;const O=Ac.length/2,z=oa(T/.45)*O;S.fillStyle=ce[1];for(let E=0;E<O&&E<z;E++){const U=Ac[E*2],G=Ac[E*2+1],K=Math.min(1,z-E),L=R+O0[U]*i,k=C+_c[U]*i*.55,D=R+O0[G]*i,$=C+_c[G]*i*.55,W=Math.hypot(D-L,$-k)*K,tt=Math.round(W/6);for(let rt=0;rt<=tt;rt++){const yt=rt*6/(W||1)*K;S.fillRect(Math.round(L+(D-L)*yt),Math.round(k+($-k)*yt),2,2)}}for(let E=0;E<O0.length;E++)S.fillStyle=E>=9?yn[2]:yn[1],Ii(S,R+O0[E]*i,C+_c[E]*i*.55,3+3*(.5+.5*Math.sin(w.T*9+E*1.7)))}});const a=za(e,o),s=()=>w.T-a.t0,l=()=>Rh(oa(s()/.45)),u=S=>Math.min(1,s()/.15,S/.12+1e-4);A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(S,_,T){const R=or(a);if(R<=0){T.t=T.dur+1;return}const C=oa(u(R)),O=l(),z=Ai*(1-O);Pn(t,n,z);const E=_e,U=Ae;F2!==S&&(F2=S,L2=[{u0:0,fill:Vt(S,ce[3],5),a:.55},{u0:.65,fill:Vt(S,ce[2],6),a:.55},{u0:.9,fill:Vt(S,ce[1],10),a:.6}]),ko(S,E,U,De(r*O),0,io(Ai-z),!1,L2,z2,C),D2(S,t,n,r,O,C,!1),yi(a,t,n,r*1.1,12615935,.7*C)}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(S,_,T){const R=or(a);if(R<=0){T.t=T.dur+1;return}const C=oa(u(R)),O=l(),z=Ai*(1-O);Pn(t,n,z);const E=_e,U=Ae;E2!==S&&(E2=S,k2=[{u0:0,fill:Vt(S,ce[2],3),a:.5},{u0:.65,fill:Vt(S,ce[1],4),a:.55},{u0:.9,fill:Vt(S,ce[0],9),a:.7}]),ko(S,E,U,De(r*O),0,io(Ai-z),!0,k2,z2,C),D2(S,t,n,r,O,C,!0),Pn(t,n,Ai);const G=_e,K=Ae,L=oa(s()/.3);S.globalAlpha=C;for(let k=-9;k<=9;k+=2){const D=Ba((14-Math.abs(k)*1.4)*L);if(D<1)continue;const $=Math.max(1,Ba(2+2*Math.sin(w.T*3)));S.fillStyle=Math.abs(k)>6?yn[2]:yn[1],S.fillRect(Ba(G-D),Ba(K+k),D-$,2),S.fillRect(Ba(G+$),Ba(K+k),D-$,2)}S.fillStyle=yn[0],Yu(S,G,K,22+3*Math.sin(w.T*6),w.T*1.5,1,2)}});const f=12,c=new Float32Array(f),h=new Float32Array(f),d=new Float32Array(f);for(let S=0;S<f;S++){const _=Math.random()*6.28,T=Math.sqrt(Math.random())*r*.9;c[S]=t+Math.cos(_)*T,h[S]=n+Math.sin(_)*T,d[S]=.45+S/(f-1)*.55+y(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*N.ZK),g=40/p,x=-352.8/p;A({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(S,_,T){const R=_*1.2;for(let C=0;C<f;C++){const O=R-(d[C]-m);if(!(O<0))if(O<m){const z=O/m;Pn(c[C],h[C],4.5*(1-z));const E=_e+(1-z)*40,U=Ae;for(let G=-1;G<=1;G++){const K=G*.12,L=g*Math.cos(K)-x*Math.sin(K),k=g*Math.sin(K)+x*Math.cos(K);S.fillStyle=G===0?Jn[1]:ce[1];for(let D=1;D<10;D++)S.globalAlpha=1-D/10,S.fillRect(Math.round(E+L*D*3.2+G*3),Math.round(U+k*D*3.2),2,2)}S.globalAlpha=1,S.fillStyle=yn[1],S.fillRect(Math.round(E-6),Math.round(U-1),12,2),S.fillRect(Math.round(E-1),Math.round(U-6),2,12),S.fillStyle=yn[0],S.fillRect(Math.round(E-2),Math.round(U-2),4,4)}else{if(!(T.landed&1<<C)){T.landed|=1<<C;for(let E=0;E<2;E++)I(c[C],h[C],.1,y(-1,1),y(-1,1),y(1,2),.45,E?yn[1]:Jn[1],2,4,!0)}const z=(O-m)/.2;if(z>=1)continue;Pn(c[C],h[C]),S.globalAlpha=1-z,S.fillStyle=yn[1],Ii(S,_e,Ae,2+z*8)}}S.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(S,_,T){if(!T.boom){T.boom=!0,Q(8);for(let E=0;E<28;E++){const U=Math.random()*6.28,G=y(1,3.5);I(t,n,.3,Math.cos(U)*G,Math.sin(U)*G,y(1.5,3.5),y(.5,.8),[yn[1],ce[1],Jn[1],ce[0]][E&3],3,5,!0,.95)}}const R=.3+(r-.3)*Rh(_),C=_*2;Pn(t,n,.2);const O=_e,z=Ae;if(_<.35){const E=1-_/.35;S.fillStyle=ce[1],S.globalAlpha=E*.25,S.fillRect(Math.round(O-70),Math.round(z-35),140,70),S.globalAlpha=E*.4,S.fillRect(Math.round(O-40),Math.round(z-20),80,40),S.fillStyle=ce[0],S.globalAlpha=E*.7,S.fillRect(Math.round(O-15),Math.round(z-8),30,16)}S.globalAlpha=1-_*_;for(let E=0;E<10;E++){const U=C+E/10*6.28;Pn(t+Math.cos(U)*R,n+Math.sin(U)*R,.35+.2*Math.sin(_*6+E)),S.fillStyle=E&1?yn[2]:yn[1],ug(S,_e,Ae,3),S.fillStyle=yn[0],S.fillRect(Math.round(_e-1),Math.round(Ae-1),2,2)}}});const b=24,M=new Float32Array(b),v=new Float32Array(b);for(let S=0;S<b;S++){const _=Math.random()*6.28,T=Math.sqrt(Math.random())*r;M[S]=t+Math.cos(_)*T,v[S]=n+Math.sin(_)*T}A({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(S,_){const T=w.T*8|0;for(let R=0;R<b;R++){const C=q(R*13+T);C<.25||(Pn(M[R],v[R]),S.globalAlpha=(1-_)*C,S.fillStyle=R%3?ce[1]:yn[1],S.fillRect(Math.round(_e),Math.round(Ae),2,2))}}})};Pe.gato_A=(e,t,n,r,o,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);fg(t,Hw,a),mt(!0);const s=Ht(),l=Math.cos(o),u=Math.sin(o);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?Jn[1]:ce[1],Kr(s,n-l*h*5,r-u*h*5,4-h*.6);s.globalAlpha=1;const f=a?7:5,c=(i*16|0)&1;if(s.fillStyle=ce[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(s.fillStyle=Jn[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=yn[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}mt(!1)};function hg(e,t,n){A({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){Pn(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=ce[1],Yu(r,_e,Ae,i,Math.PI/4,.75,2),r.fillStyle=Jn[1],Ii(r,_e+i,Ae,3),Ii(r,_e-i,Ae,3),Ii(r,_e,Ae+i*.75,3),Ii(r,_e,Ae-i*.75,3),n&&(r.fillStyle=yn[1],ug(r,_e,Ae-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)I(e,t,.45,y(-1,1),y(-1,1),y(.3,1.2),.35,n&&r&1?yn[1]:ce[1],2,1,!0)}function Hw(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;hg(t,n,e.crit),et.sfx("atk_gato",t,n,e.crit?.9:.6)}Qe.gato=e=>hg(e.x,e.y,!!e.big);H.gato_Q_hit=e=>cg({x:e.x,y:e.y,life:9});const Y=Math.round,kr=Math.PI*2;let Ut=0,Gt=0;function Ue(e,t,n=0){Ut=(e-t)*N.HW+N.OX,Gt=(e+t)*N.HH-n*N.ZK}const Hn=e=>e<0?0:e>1?1:e,$i=e=>1-(1-e)*(1-e),$d=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function Hd(e,t,n,r,o){e.fillStyle=o,e.fillRect(Y(t-r/2),Y(n-r/2),r,r)}const V={w:"#ffffff",cy:"#22d6ff",cyl:"#a8fcff",cyd:"#0a6676",mag:"#ff1ee6",magl:"#ff96f5",magd:"#6a0a5e",bk:"#100816",pur:"#3c145a",lime:"#aaff3c",yel:"#ffdc3c",red:"#e8224a"},di=2283263,mi=16719590,Af=15267583,qs=[V.mag,V.cy,V.yel,V.lime,V.w],Vs=[V.mag,V.cy,V.w,V.magl,V.cyl];Tn.glitch_bolt=[V.w,V.cyl,V.cy,V.mag];Tn.fragment=[V.w,V.magl,V.mag,V.cy];Tn.delete=[V.w,V.cyl,V.mag,V.cy];Tn.glitch_copy=[V.w,V.cyl,V.cy,V.cyd];Tn.glitch_dup=[V.w,V.cy,V.mag,V.red];const z0=new Map;let Bo=null,dl=null;function Ea(e,t,n,r){const o=ee[e],i=Ur[e];if(!o||!i||!i.naturalWidth)return null;const[a,s]=by(o,t,n,r),l=e+"|"+a+"|"+s;let u=z0.get(l);if(u)return u;const f=o.fw,c=o.fh,h=vy(e,a,s);if(!h)return null;const d=document.createElement("canvas");if(d.width=f,d.height=c,d.getContext("2d").drawImage(i,h[0],h[1],h[2],h[3],h[4],h[5],h[2],h[3]),Bo||(Bo=document.createElement("canvas"),dl=Bo.getContext("2d",{willReadFrequently:!0})),!dl)return null;Bo.width<f&&(Bo.width=f),Bo.height<c&&(Bo.height=c),dl.clearRect(0,0,Bo.width,Bo.height),dl.drawImage(d,0,0);let m;try{m=dl.getImageData(0,0,f,c).data}catch{return null}const p=f+1>>1,g=c+1>>1,x=new Uint8Array(p*g),b=new Uint32Array(p*g);let M=1e9,v=1e9,S=-1,_=-1;for(let R=0;R<g;R++)for(let C=0;C<p;C++){let O=0,z=-1;for(let E=0;E<2;E++)for(let U=0;U<2;U++){const G=C*2+U,K=R*2+E;if(G>=f||K>=c)continue;const L=(K*f+G)*4;m[L+3]>O&&(O=m[L+3],z=L)}O>60&&(x[R*p+C]=1,b[R*p+C]=m[z]<<16|m[z+1]<<8|m[z+2],C<M&&(M=C),C>S&&(S=C),R<v&&(v=R),R>_&&(_=R))}const T=[];for(let R=0;R<g;R++)for(let C=0;C<p;C++){const O=R*p+C;x[O]||(C>0&&x[O-1]||C<p-1&&x[O+1]||R>0&&x[O-p]||R<g-1&&x[O+p])&&T.push(C,R)}return S<0&&(M=0,v=0,S=p-1,_=g-1),u={img:d,ox:0,oy:0,fw:f,fh:c,ax:o.ax,ay:o.ay,cw:p,ch:g,cells:x,cols:b,ring:Int16Array.from(T),bx0:M*2,by0:v*2,bx1:S*2+2,by1:_*2+2,v:{}},z0.size>140&&z0.clear(),z0.set(l,u),u}function gn(e,t){let n=e.v[t];if(n)return n;n=document.createElement("canvas"),n.width=e.fw,n.height=e.fh;const r=n.getContext("2d"),o=e.fw,i=e.fh;if(r.imageSmoothingEnabled=!1,t==="check"||t==="scan"){if(t==="check")for(let a=0;a<i;a+=6)for(let s=0;s<o;s+=6)r.fillStyle=s/6+a/6&1?V.pur:V.mag,r.fillRect(s,a,6,6);else{r.fillStyle=V.cy;for(let a=0;a<i;a+=4)r.fillRect(0,a,o,2)}r.globalCompositeOperation="destination-in",r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i)}else if(r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i),r.globalCompositeOperation="source-atop",r.globalAlpha=t==="white"?1:t==="ghost"?.62:.6,r.fillStyle=t==="white"?V.w:t==="ghost"?"#38e4f4":t==="red"?V.red:V.cy,r.fillRect(0,0,o,i),t==="white"||t==="ghost"){r.globalCompositeOperation="destination-out",r.globalAlpha=t==="white"?1:.5,r.fillStyle="#000";for(let a=2;a<i;a+=4)r.fillRect(0,a,o,2)}return e.v[t]=n,n}function Cr(e,t,n,r,o,i,a,s=0){a<=.003||(e.globalAlpha=Math.min(1,a),e.imageSmoothingEnabled=!1,n?e.drawImage(n,Y(r-t.ax*i+s),Y(o-t.ay*i),Y(t.fw*i),Y(t.fh*i)):e.drawImage(t.img,t.ox,t.oy,t.fw,t.fh,Y(r-t.ax*i+s),Y(o-t.ay*i),Y(t.fw*i),Y(t.fh*i)))}function Ti(e,t,n,r,o,i,a,s,l,u,f,c){const h=s-a,d=u-l;if(h<=0||d<=0||c<=.003)return;e.globalAlpha=Math.min(1,c),e.imageSmoothingEnabled=!1;const m=Y(r+(a-t.ax)*i+f),p=Y(o+(l-t.ay)*i);n?e.drawImage(n,a,l,h,d,m,p,Y(h*i),Y(d*i)):e.drawImage(t.img,t.ox+a,t.oy+l,h,d,m,p,Y(h*i),Y(d*i))}function Ww(e,t,n,r,o,i,a){const s=t.ring,l=2*o,u=n-t.ax*o,f=r-t.ay*o,c=Math.max(1,Y(l));e.globalAlpha=a;for(let h=0;h<2;h++){e.fillStyle=h?V.w:V.cy;for(let d=0;d<s.length;d+=2)(s[d]+s[d+1]+i>>1&1)===h&&e.fillRect(Y(u+s[d]*l),Y(f+s[d+1]*l),c,c)}}function Ms(e){const t=ee[e.sprite];if(!t)return null;let n="idle",r=0;if(t.anims)if(e.atkAnim>0&&t.anims.attack){n="attack";const o=t.anims.attack.n;r=Math.min(o-1,Math.floor((1-e.atkAnim/.45)*o))}else e.moving&&t.anims.walk?(n="walk",r=Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))):t.anims.idle?r=Math.floor((e.animT||0)*1e3/t.anims.idle.ms):n="walk";return Ea(e.sprite,n,t.dirs===1?0:e.dir||0,r)}function Ch(e){const t=ee[e.sprite];return t?Ea(e.sprite,"idle",t.dirs===1?0:e.dir||0,0):null}const Fr=e=>(e.scale||1)*(e._fbScale||1),U2={A:".#. #.# ### #.# #.#",C:".## #.. #.. #.. .##",D:"##. #.# #.# #.# ##.",E:"### #.. ##. #.. ###",G:".## #.. #.# #.# .##",I:"### .#. .#. .#. ###",L:"#.. #.. #.. #.. ###",N:"#..# ##.# #.## #..# #..#",O:".#. #.# #.# #.# .#.",P:"##. #.# ##. #.. #..",R:"##. #.# ##. #.# #.#",S:".## #.. .#. ..# ##.",T:"### .#. .#. .#. .#.",Y:"#.# #.# .#. .#. .#.",X:"#.# #.# .#. #.# #.#",".":". . . . #","!":"# # # . #"," ":".. .. .. .. ..","[":"## #. #. #. ##","]":"## .# .# .# ##"},Jl={};for(const e in U2)Jl[e]=U2[e].split(" ").map(t=>[...t].map(n=>n==="#"?1:0));function qw(e,t){let n=0;for(const r of e)n+=((Jl[r]||Jl[" "])[0].length+1)*t;return n-t}function Ys(e,t,n,r,o,i,a){if(a<=.01)return;let s=Y(t-qw(r,i)/2);n=Y(n),e.globalAlpha=a;for(const l of r){const u=Jl[l]||Jl[" "],f=u[0].length;for(let c=0;c<2;c++){e.fillStyle=c?o:V.bk;const h=c?0:i;for(let d=0;d<5;d++)for(let m=0;m<f;m++)u[d][m]&&e.fillRect(s+m*i+h,n+d*i+h,i,i)}s+=(f+1)*i}}function Zo(e,t,n,r,o,i){e.fillStyle=o+i>>1&1?V.bk:V.w,e.fillRect(Y(t),Y(n),r,r)}function Ku(e,t,n,r,o,i,a,s,l){if(s<=.01)return;t=Y(t),n=Y(n),r=Y(r),o=Y(o),e.globalAlpha=s;let u=0;for(let h=t;h<r;h+=i)Zo(e,h,n,i,u++,a);for(let h=n;h<o;h+=i)Zo(e,r,h,i,u++,a);for(let h=r;h>t;h-=i)Zo(e,h,o,i,u++,a);for(let h=o;h>n;h-=i)Zo(e,t,h,i,u++,a);if(!l)return;const f=Y((t+r)/2),c=Y((n+o)/2);qr(e,t,n,i),qr(e,r,n,i),qr(e,t,o,i),qr(e,r,o,i),qr(e,f,n,i),qr(e,f,o,i),qr(e,t,c,i),qr(e,r,c,i)}function qr(e,t,n,r){const o=r*2+1;e.fillStyle=V.bk,e.fillRect(Y(t-o/2-1+r/2),Y(n-o/2-1+r/2),o+2,o+2),e.fillStyle=V.w,e.fillRect(Y(t-o/2+r/2),Y(n-o/2+r/2),o,o)}function Wd(e,t,n,r,o,i,a,s,l,u,f,c=0,h=1){const d=Math.hypot(r-t,o-n);if(d<1||f<=.01)return;const m=Math.floor(d/i);e.globalAlpha=f;for(let p=0;p<=m;p++){const g=(p*i+s%i)/d;g<c||g>h||(e.fillStyle=p&1?u:l,e.fillRect(Y(t+(r-t)*g-a/2),Y(n+(o-n)*g-a/2),a,a))}}function Vw(e,t,n,r,o,i){const a=[t-r,t+r,t+r,t-r],s=[n-r,n-r,n+r,n+r];e.globalAlpha=i;let l=0;for(let u=0;u<4;u++){Ue(a[u],s[u]);const f=Ut,c=Gt;Ue(a[(u+1)%4],s[(u+1)%4]);const h=Ut,d=Gt,m=Math.max(1,Math.floor(Math.hypot(h-f,d-c)/2));for(let p=0;p<m;p++)Zo(e,f+(h-f)*p/m,c+(d-c)*p/m,2,l++,o)}for(let u=0;u<4;u++)Ue(a[u],s[u]),e.fillStyle=V.bk,e.fillRect(Y(Ut-3),Y(Gt-3),6,6),e.fillStyle=V.w,e.fillRect(Y(Ut-2),Y(Gt-2),4,4)}function X2(e,t,n,r,o,i,a){e.globalAlpha=a,t=Y(t);const s=Y(n-r/2),l=Y(n+r/2),u=6*o;e.fillStyle=V.bk,e.fillRect(t-3,s-1,4,l-s+2),e.fillRect(Math.min(t,t+u)-1,s-1,8,4),e.fillRect(Math.min(t,t+u)-1,l-2,8,4),e.fillStyle=i,e.fillRect(t-2,s,2,l-s),e.fillRect(Math.min(t-2,t-2+u),s,8,2),e.fillRect(Math.min(t-2,t-2+u),l-2,8,2)}function Yw(e,t,n,r,o,i,a=V.mag,s=V.cy){const l=Math.cos(r),u=Math.sin(r),f=o+2;e.globalAlpha=i;for(let c=-f;c<=f;c++)for(let h=-f;h<=f;h++){const d=h*l+c*u,m=-h*u+c*l,p=Math.max(Math.abs(d),Math.abs(m));p>o+.5||(e.fillStyle=p>o-.6?V.bk:d>0==m>0?a:s,e.fillRect(Y(t+h*2-1),Y(n+c*2-1),2,2))}}function Tf(e,t,n,r,o,i){e.globalAlpha=i,t=Y(t-r/2),n=Y(n-r/2),e.fillStyle=V.bk,e.fillRect(t-1,n-1,r+2,r+2),e.fillStyle=o,e.fillRect(t,n,r,r),e.fillStyle=V.w,e.fillRect(t,n,Math.max(1,r>>1),2)}const Ko=[];(()=>{for(let e=0;e<11;e++)for(let t=0;t<11;t++){const n=Math.hypot(t-5,e-5);n>=4.3&&n<=5.6||n<4.3&&Math.abs(t-e)<=.5?Ko.push(t,e,0):n<4.3&&t>=2&&t<=8&&e>=3&&e<=6?Ko.push(t,e,(e===4||e===5)&&(t===3||t===5||t===7)?2:1):n<4.3&&t===3&&e===7&&Ko.push(t,e,1)}})();function Kw(e,t,n,r){e.globalAlpha=r;const o=2,i=Y(t-11),a=Y(n-11);e.fillStyle=V.bk,e.fillRect(i-2,a-2,26,26);for(let s=0;s<Ko.length;s+=3)e.fillStyle=Ko[s+2]===0?V.red:Ko[s+2]===1?V.w:V.bk,e.fillRect(i+Ko[s]*o,a+Ko[s+1]*o,o,o);e.fillStyle=V.cy;for(let s=0;s<2;s++){const l=a+4+s*7+(w.T*6|0)%2;for(let u=0;u<3;u++)e.fillRect(i+25+u*2,l+u*2,2,2),e.fillRect(i+33-u*2,l+u*2,2,2)}}function Rf(e,t){return t?(t.ay-t.by0)*Fr(e):60}const Tc=new Map,F0=new Map,bs=new Set,Pa=new Map,Nl=new Map;let Rc=-1,G2=0;function jw(e,t){if(t.grid&&t.grid.solidAt&&t.grid.solidAt(e.x,e.y,.02))return!0;const n=e.r||.35;for(const r of t.units){if(r===e||r.dead||r.flying)continue;const o=(n+(r.r||.35))*.95,i=r.x-e.x,a=r.y-e.y;if(!(i>o||i<-o||a>o||a<-o)&&i*i+a*a<o*o)return!0}return!1}function Qw(e){for(const t of Pa.values())if(t.tid===e.id)return t;for(const t of Pa.values())if(t.tid<0&&Math.hypot(t.x-e.x,t.y-e.y)<2.5)return t.tid=e.id,t;return null}Cu.glitch=e=>{const t=w.game;if(!t||!t.units)return;const n=w.T;if(e==="ground"){const s=Ht();for(const l of t.units){if(l.dead||!l.illusion||l.heroKey!=="glitch"||He(l))continue;Ue(l.x,l.y);const u=(l.r||.35)*Fr(l)*N.HW*1.5+4,f=u*.5,c=28;s.globalAlpha=.85;for(let h=0;h<c;h++){if((h+(n*10|0)&3)>1)continue;const d=h/c*kr;Hd(s,Ut+Math.cos(d)*u,Gt+Math.sin(d)*f,2,h&1?V.cyl:V.cy)}}return}const r=Rc<0?0:Math.min(.1,Math.max(0,n-Rc));Rc=n;const o=n>=G2;o&&(G2=n+.12);const i=Ht(),a=n*16|0;for(const s of t.units){if(s.dead){Tc.delete(s.id),F0.delete(s.id);continue}const l=He(s),u=s.status||{};if(s.heroKey==="glitch"&&s.kind==="hero"){let f=Tc.get(s.id)||0;if(f=jw(s,t)?Math.min(1,f+r*9):Math.max(0,f-r*2.5),Tc.set(s.id,f),f>.01&&!l){const h=Ms(s);if(h){Ue(s.x,s.y);const d=Fr(s),m=.85+.15*Math.sin(n*23+s.id);if(Cr(i,h,gn(h,"ghost"),Ut,Gt,d,.75*f),Cr(i,h,gn(h,"check"),Ut,Gt,d,.55*f*m),Ww(i,h,Ut,Gt,d,a,f),(n+q(s.id)*.5)%.45<.09){const b=h.by0+Y((h.by1-h.by0)*(.15+.6*q(s.id+(n/.45|0)))),M=Math.min(h.by1,b+10);Ti(i,h,gn(h,"red"),Ut,Gt,d,0,h.fw,b,M,-5,.9*f),Ti(i,h,gn(h,"cyan"),Ut,Gt,d,0,h.fw,b,M,5,.9*f)}const g=h.ring,x=2*d;for(let b=0;b<6&&g.length;b++){const M=(q(s.id*7+b+(n*8|0))*(g.length>>1)|0)*2,v=(n*8+b*.37)%1;i.globalAlpha=f*(1-v),i.fillStyle=b&1?V.mag:V.cy,i.fillRect(Y(Ut-h.ax*d+g[M]*x+(b&2?-1:1)*v*8),Y(Gt-h.ay*d+g[M+1]*x-v*10),3,3)}}o&&dt(s.x,s.y,1.3,di,.6*f,.2,{uid:s.id})}}if(s.illusion&&s.heroKey==="glitch"&&(bs.size>200&&bs.clear(),bs.add(s.id),!l)){const f=Ms(s);if(f){Ue(s.x,s.y);const c=Fr(s);if(Cr(i,f,gn(f,"scan"),Ut,Gt,c,.32+.08*Math.sin(n*7+s.id)),(n+q(s.id)*1.6)%1.6<.12){const d=f.by0+Y((f.by1-f.by0)*(.25+.4*q(s.id+(n/1.6|0)))),m=Math.min(f.by1,d+8);Ti(i,f,gn(f,"red"),Ut,Gt,c,0,f.fw,d,m,-4,.8),Ti(i,f,gn(f,"cyan"),Ut,Gt,c,0,f.fw,d,m,4,.8)}}o&&dt(s.x,s.y,.9,di,.18,.2,{uid:s.id})}if(u.slow&&u.slow.fx==="fragment"){let f=F0.get(s.id);if(f===void 0&&(f=n,F0.set(s.id,n)),!l){const c=n-f,h=Ch(s),d=Fr(s);Ue(s.x,s.y);const m=Ut,p=Gt,g=Rf(s,h),x=p-g*.45,b=(h?(h.bx1-h.bx0)*d*.5:24)+6,M=b*Math.min(1,c/.2)*(1-.25*Hn(c/1.5));for(let v=0;v<5;v++){const S=v/5*kr+c*4+c*c*1.6,_=Math.sin(S);Tf(i,m+Math.cos(S)*M,x+_*M*.42+Math.sin(n*9+v)*1.5,8,qs[v],_<0?.6:1)}Kw(i,m+b+16,p-g*.8,.95),o&&dt(s.x,s.y,1,mi,.4,.2,{uid:s.id})}}else F0.delete(s.id);if(u.deleting){const f=Nl.get(s.id);if(f!==void 0&&n-f<.6)continue;const c=Qw(s);if(l)continue;const h=Ch(s),d=Fr(s);Ue(s.x,s.y);const m=Ut,p=Gt,g=c?n-c.t0:1,x=$i(Hn(g/.2)),b=(1-x)*42,M=h?m+(h.bx0-h.ax)*d-6:m-26,v=h?m+(h.bx1-h.ax)*d+6:m+26,S=h?p+(h.by0-h.ay)*d-6:p-64,_=h?p+(h.by1-h.ay)*d+4:p+6;c&&(c.rx0=M-m,c.ry0=S-p,c.rx1=v-m,c.ry1=_-p,c.tx=s.x,c.ty=s.y);const T=c?Hn(g/c.dur):.5+.4*Math.sin(n*3),R=Ms(s);R&&x>=1&&Ti(i,R,gn(R,"check"),m,p,d,R.bx0,R.bx0+Y((R.bx1-R.bx0)*T),0,R.fh,0,.5);const C=c?Z(c.uid):null;C&&!C.dead&&(Ue(C.x,C.y,.75),Wd(i,Ut,Gt,m,(S+_)/2,7,2,n*40,V.cy,V.cyl,.9,0,x)),Ku(i,M-b,S-b*.8,v+b,_+b*.5,2,a,1,!0);const O=Math.max(44,Y(v-M)),z=Y((M+v)/2-O/2),E=Y(_+8);i.globalAlpha=x,i.fillStyle=V.bk,i.fillRect(z-1,E-1,O+2,8),i.fillStyle=V.magd,i.fillRect(z,E,O,6),i.fillStyle=V.mag,i.fillRect(z,E,Y(O*T),6),i.fillStyle=V.magl,i.fillRect(z,E,Y(O*T),2),Ys(i,(M+v)/2,E+11,["DELETING","DELETING.","DELETING..","DELETING..."][(n*4|0)%4],V.w,2,x),Math.random()<.35&&I(s.x+(Math.random()-.5)*.4,s.y+(Math.random()-.5)*.4,.3+Math.random()*.8,0,0,.9,.5,Math.random()<.5?V.mag:V.cy,2,-.4,!0),o&&dt(s.x,s.y,1.2,mi,.45+.25*T,.2,{uid:s.id})}}};const dg=new Map;function Zw(e){const t=Z(e.uid),n=e.x,r=e.y,o=e.dur||4,i=w.T,a=t?t.sprite:"glitch",s=t&&t.dir||0,l=t?Fr(t):1,u={end:i+o};dg.set(e.uid,u);const f=c=>{const h=w.T-u.end;return h>0?(h>.25&&(c.t=c.dur+1),1-h/.25):1};A({type:"custom",layer:"ground",dur:o+.4,x:n,y:r,draw(c,h,d){const m=f(d),p=w.T-i,g=$i(Hn(p/.18));Vw(c,n,r,.42*(1.6-.6*g),w.T*14|0,m*(.9*g))}}),A({type:"custom",layer:"top",dur:o+.4,x:n,y:r,nl:0,draw(c,h,d){const m=f(d);if(m<=0)return;const p=w.T-i,g=ee[a],x=g&&g.anims&&g.anims.idle?Math.floor(p*1e3/g.anims.idle.ms):0,b=Ea(a,"idle",s,x);Ue(n,r);const M=u.end-w.T,v=M<1&&(w.T*12|0)%2===0,S=(w.T*1.1+.3)%1<.06;b&&(p<.16&&Cr(c,b,gn(b,"white"),Ut,Gt,l,m*(1-p/.16)),Cr(c,b,gn(b,"ghost"),Ut,Gt,l,m*(v?.25:.62)*Hn(p/.1),S?2:0),p<1.4&&Ys(c,Ut,Gt-Rf({scale:l},b)-16-Math.min(6,p*30),"COPY",V.cy,2,m*(p>1?(1.4-p)/.4:1))),w.T>=d.nl&&(d.nl=w.T+.15,dt(n,r,1,di,.3*m,.2))}});for(let c=0;c<10;c++){const h=c/10*kr;I(n+Math.cos(h)*.3,r+Math.sin(h)*.3,.2+c%3*.3,Math.cos(h)*.8,Math.sin(h)*.8,.8,.45,c&1?V.cy:V.w,2,0,!0)}dt(n,r,1.4,di,.7,.35),et.sfx("ab_glitch_Q_copy",n,r,1)}function Jw(e){const t=e.x,n=e.y,r=e.ex!==void 0?e.ex:e.x,o=e.ey!==void 0?e.ey:e.y,i=e.uid,a=dg.get(i);a&&(a.end=Math.min(a.end,w.T));const s=Z(i),l=s?s.sprite:"glitch",u=s&&s.dir||0,f=s?Fr(s):1;A({type:"custom",layer:"top",dur:.75,x:r,y:o,draw(c,h){const d=h*.75,m=Ea(l,"idle",u,0);Ue(t,n);const p=Ut,g=Gt,x=m?Rf({scale:f},m):60;if(m&&d<.45&&Cr(c,m,gn(m,"ghost"),p,g,f,.55*(1-d/.45)),d<.55){const C=(m?(m.bx1-m.bx0)*f*.5:24)+8,O=$i(Hn(d/.2)),z=C*(1.5-.5*O)*(d>.3?1-(d-.3)/.25*.8:1),E=d>.35?(.55-d)/.2:1;X2(c,p-z,g-x*.5,x+12,-1,V.w,E),X2(c,p+z,g-x*.5,x+12,1,V.w,E)}Ue(r,o);const b=Ut,M=Gt;Wd(c,p,g-x*.4,b,M-x*.4,6,2,0,V.cy,V.cyl,1-h,Hn(d/.25-.25),Hn(d/.12));const v=Z(i),S=v?(Ue(v.x,v.y),Ut):b,_=v?Gt:M;m&&Cr(c,m,gn(m,"white"),S,_,f,.95*(1-Hn(d/.35))),Ys(c,S,_-x-18-Math.min(8,d*30),"PASTE",V.mag,2,d>.5?(.75-d)/.25:1);const T=(.25+d*1.4)*N.HW*1.4,R=1-Hn(d/.5);if(R>0){c.globalAlpha=R;for(let C=0;C<24;C++){const O=C/24*kr;Hd(c,S+Math.cos(O)*T,_+Math.sin(O)*T*.5,2,C&1?V.mag:V.w)}}}});for(let c=0;c<12;c++){const h=c/12*kr;I(r,o,.3+c%4*.25,Math.cos(h)*1.4,Math.sin(h)*1.4,.5,.4,c&1?V.mag:V.w,2,0,!0)}for(let c=0;c<6;c++)I(t,n,.3+c*.15,0,0,.4,.35,V.cy,2,0,!0);dt(r,o,1.6,Af,.8,.3),dt(t,n,1,di,.5,.25),$d(e)&&Q(2),et.sfx("ab_glitch_Q_paste",r,o,1)}H.glitch_Q=e=>(e.type==="glitch_copy"?Zw(e):e.type==="glitch_paste"&&Jw(e),!0);H.glitch_W=e=>{if(typeof e.type=="string"&&e.type.startsWith("cast_")){const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=new Float32Array(6);for(let s=0;s<6;s++)i[s]=(s-2.5)*.22;const a=Math.atan2(n,t);A({type:"custom",layer:"top",dur:.28,x:r,y:o,draw(s,l){for(let u=0;u<6;u++){const f=.15+l*(.7+u%3*.2);Ue(r+Math.cos(a+i[u])*f,o+Math.sin(a+i[u])*f,.55+u%2*.12),Tf(s,Ut,Gt,4,qs[u%5],1-l)}}}),dt(r,o,1,mi,.6,.2)}return!0};Pe.glitch_W=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(t.id||0)*1.3,u=i*30|0;for(let c=1;c<=6;c++){const h=c*6,d=(q(u+c*7+l)-.5)*6|0;e.globalAlpha=1-c/7,e.fillStyle=qs[(c+u)%5],e.fillRect(Y(n-a*h-s*d-2),Y(r-s*h+a*d-2),c<3?4:2,c<3?4:2)}for(let c=0;c<4;c++){const h=i*9+c/4*kr;Tf(e,n+Math.cos(h)*13,r+Math.sin(h)*6,4,qs[c+1],1)}Yw(e,n,r,i*7+l,4,1);const f=i*12|0;t._lf!==f&&(t._lf=f,dt(t.x,t.y,1,mi,.55,.12))};H.glitch_W_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(r,o){Ue(t,n,.5);const i=Y(6+o*26);r.globalAlpha=1-o,r.fillStyle=V.w,o<.4&&r.fillRect(Y(Ut-6*(1-o)),Y(Gt-6*(1-o)),Y(12*(1-o)),Y(12*(1-o))),r.fillStyle=V.mag,r.fillRect(Ut-i,Gt-i,i*2,2),r.fillRect(Ut-i,Gt+i-2,i*2,2),r.fillStyle=V.cy,r.fillRect(Ut-i,Gt-i,2,i*2),r.fillRect(Ut+i-2,Gt-i,2,i*2)}});for(let r=0;r<8;r++){const o=r/8*kr;I(t,n,.5,Math.cos(o)*1.6,Math.sin(o)*1.6,.8,.3,Vs[r%5],2,2,!0)}dt(t,n,1.2,mi,.7,.25)};H.glitch_ev_fragment_burst=e=>{const t=e.x,n=e.y,r=e.uid,o=Math.random()*kr,i=Z(r),a=i?Fr(i):1,s=i?Ch(i):null,l=i?Rf(i,s):50,u=(s?(s.bx1-s.bx0)*a*.5:24)+6,f=14,c=new Float32Array(f),h=new Float32Array(f);for(let d=0;d<f;d++)c[d]=d/f*kr+q(d+o)*.4,h[d]=40+q(d*3+o)*50;A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(d,m){const p=m*.62,g=Z(r),x=g&&!g.dead?g.x:t,b=g&&!g.dead?g.y:n;Ue(x,b);const M=Ut,v=Gt-l*.45;if(p<.12){const T=1-$i(p/.12);for(let R=0;R<5;R++){const C=o+R/5*kr+p*20;Tf(d,M+Math.cos(C)*u*T,v+Math.sin(C)*u*.42*T,6,qs[R],1)}return}const S=(p-.12)/.5;if(g&&!g.dead&&S<.3){const T=Ms(g);T&&Cr(d,T,gn(T,"white"),M,Gt,Fr(g),.9*(1-S/.3))}const _=Y(6+S*34);d.globalAlpha=1-S,d.fillStyle=V.w,S<.25&&d.fillRect(Y(M-10*(1-S*3)),Y(v-10*(1-S*3)),Y(20*(1-S*3))+1,Y(20*(1-S*3))+1),d.fillStyle=V.w,d.fillRect(M-_,v-1,_*2,3),d.fillRect(M-1,v-_,3,_*2),d.fillStyle=V.mag,d.fillRect(M-_,v-_,_*2,2),d.fillRect(M-_,v+_-2,_*2,2),d.fillStyle=V.cy,d.fillRect(M-_,v-_,2,_*2),d.fillRect(M+_-2,v-_,2,_*2);for(let T=0;T<f;T++){const R=h[T]*S,C=60*S*S;d.globalAlpha=1-S,d.fillStyle=Vs[T%5];const O=T%3===0?4:2;d.fillRect(Y(M+Math.cos(c[T])*R-O/2),Y(v+Math.sin(c[T])*R*.6+C-O/2),O,O)}}}),A({type:"custom",layer:"ground",delay:.12,dur:.4,x:t,y:n,draw(d,m){Ue(t,n);const p=(.3+m*1.3)*N.HW*1.4;d.globalAlpha=1-m;for(let g=0;g<32;g++){const x=g/32*kr;Hd(d,Ut+Math.cos(x)*p,Gt+Math.sin(x)*p*.5,2,qs[g%5])}}}),dt(t,n,1.8,Af,.9,.3,{delay:.12}),dt(t,n,1.4,mi,.7,.4,{delay:.12}),($d(e)||w.game&&w.game.player&&r===w.game.player.id)&&Q(3),et.sfx("glitch_burst",t,n,1)};H.glitch_E=e=>{if(e.type!=="glitch_dup")return!0;const t=e.x,n=e.y,r=e.uid,o=Z(r),i=o?o.sprite:"glitch",a=o&&o.dir||0,s=o?Fr(o):1,l=[];if(w.game)for(const c of w.game.units)!c.dead&&c.illusion&&c.heroKey==="glitch"&&(!e.team||c.team===e.team)&&Math.hypot(c.x-t,c.y-n)<2.2&&!bs.has(c.id)&&l.push(c.id);for(;l.length>2;)l.pop();const u=new Float32Array(2),f=new Float32Array(2);for(let c=0;c<2;c++){const h=l[c]?Z(l[c]):null,d=c*Math.PI+.6;u[c]=h?h.x:t+Math.cos(d)*1.1,f[c]=h?h.y:n+Math.sin(d)*1.1}A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(c,h){const d=h*.75,m=Ea(i,"idle",a,0);if(!m)return;Ue(t,n);const p=Ut,g=Gt;if(d<.14){const x=Y(d/.14*6);Cr(c,m,gn(m,"red"),p,g,s,.8,-x),Cr(c,m,gn(m,"cyan"),p,g,s,.8,x)}if(d>=.06&&d<.4){const x=$i(Hn((d-.06)/.3)),b=w.T*30|0;for(let M=0;M<2;M++){const v=l[M]?Z(l[M]):null,S=v?v.x:u[M],_=v?v.y:f[M];Ue(t+(S-t)*x,n+(_-n)*x);const T=gn(m,M?"cyan":"red"),R=(m.by1-m.by0)/3;for(let C=0;C<3;C++){const O=m.by0+Y(C*R),z=(q(b+C*5+M*11)-.5)*8*(1-x)|0;Ti(c,m,T,Ut,Gt,s,0,m.fw,O,Y(O+R)+1,z,.85)}}}if(d>=.3){const x=(d-.3)/.45;for(let b=0;b<2;b++){const M=l[b]?Z(l[b]):null,v=M?M.x:u[b],S=M?M.y:f[b];Ue(v,S);const _=M&&Ms(M)||m;Cr(c,_,gn(_,"white"),Ut,Gt,s,.9*(1-Hn(x*2.2)));const T=8+x*30;c.globalAlpha=1-x,c.fillStyle=b?V.cy:V.red;const R=Gt-20;for(let C=-T;C<=T;C+=4)c.fillRect(Y(Ut+C),Y(R-T*.7),2,2),c.fillRect(Y(Ut+C),Y(R+T*.7),2,2);for(let C=-T*.7;C<=T*.7;C+=4)c.fillRect(Y(Ut-T),Y(R+C),2,2),c.fillRect(Y(Ut+T),Y(R+C),2,2)}}}});for(let c=0;c<2;c++){for(let h=0;h<8;h++)I(u[c],f[c],.2+h*.12,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2,.6,.45,h&1?c?V.cy:V.red:V.w,2,0,!0);dt(u[c],f[c],1.1,c?di:15213130,.6,.35,{delay:.3})}dt(t,n,1.3,Af,.6,.25)};H.glitch_petfade=e=>{let t=bs.has(e.uid);const n=Z(e.uid);if(!t&&n&&n.illusion&&n.heroKey==="glitch"&&(t=!0),!t)return!1;bs.delete(e.uid);const r=e.x,o=e.y,i=n?n.sprite:e.sprite,a=n?n.dir||0:e.dir||0,s=n?Fr(n):1,l=Ea(i,"idle",a,0),u=56,f=new Float32Array(u),c=new Float32Array(u),h=new Float32Array(u),d=new Float32Array(u),m=[];let p=0;if(l){let g=0;for(let M=0;M<l.cells.length;M++)g+=l.cells[M];const x=Math.max(1,Math.floor(g/u));let b=0;for(let M=0;M<l.cells.length&&p<u;M++){if(!l.cells[M]||b++%x)continue;const v=M%l.cw,S=M/l.cw|0;f[p]=(v*2-l.ax)*s,c[p]=(S*2-l.ay)*s,h[p]=f[p]*1.2+(q(M)-.5)*40,d[p]=-20-q(M*3)*50;const _=l.cols[M];m.push(p%4===0?V.mag:p%4===1?V.cy:"#"+(16777216+_).toString(16).slice(1)),p++}}return A({type:"custom",layer:"top",dur:.85,x:r,y:o,draw(g,x){Ue(r,o);const b=x*.85;l&&b<.1&&Cr(g,l,gn(l,"white"),Ut,Gt,s,.9);for(let M=0;M<p;M++){const v=Math.max(0,b-.04-M%7*.012);g.globalAlpha=1-x,g.fillStyle=m[M],g.fillRect(Y(Ut+f[M]+h[M]*v),Y(Gt+c[M]+d[M]*v-30*v*v),2*Math.max(1,Y(s)),2*Math.max(1,Y(s)))}}}),dt(r,o,1,di,.5,.3),et.sfx("fade_glitch_E",r,o,.6),!0};H.glitch_R=e=>{if(e.type!=="delete_start")return!0;Pa.set(e.uid,{uid:e.uid,tid:e.tid!==void 0&&e.tid!==0?e.tid:-1,x:e.x,y:e.y,t0:w.T,dur:e.dur||2,rx0:-26,ry0:-64,rx1:26,ry1:6,tx:e.x,ty:e.y}),e.tid&&Nl.delete(e.tid);const t=e.x,n=e.y;return A({type:"custom",layer:"top",dur:.22,x:t,y:n,draw(r,o){Ue(t,n,.5);const i=70*(1-$i(o))+22;r.globalAlpha=1-o*.5,r.fillStyle=V.w;for(const a of[-1,1])for(const s of[-1,1]){const l=Y(Ut+a*i),u=Y(Gt+s*i*.9);r.fillRect(l-(a>0?8:0),u,8,2),r.fillRect(l,u-(s>0?8:0),2,8)}}}),dt(t,n,1.6,mi,.7,.4),et.sfx("ab_glitch_R_start",t,n,1),!0};H.glitch_ev_delete_cancel=e=>{const t=Pa.get(e.uid);Pa.delete(e.uid);const n=e.tid||(t?t.tid:-1);n>0&&Nl.set(n,w.T),Nl.size>60&&Nl.clear();let r=e.why;if(!r){const d=Z(e.uid);r=d&&Math.hypot(d.x-e.x,d.y-e.y)>8.2?"escape":"stun"}const o=e.x,i=e.y;let a=!1;if(n>0){const d=Z(n);a=!d||!!d.dead}else if(w.game){for(const d of w.game.heroes||[])if(d.dead&&Math.hypot(d.x-o,d.y-i)<1.2){a=!0;break}}const s=r==="escape",l=t?t.rx0:-26,u=t?t.ry0:-64,f=t?t.rx1:26,c=t?t.ry1:6,h=Z(e.uid);A({type:"custom",layer:"top",dur:.9,x:o,y:i,draw(d,m){const p=m*.9,g=n>0?Z(n):null;Ue(g&&!g.dead?g.x:o,g&&!g.dead?g.y:i);const x=Ut,b=Gt,M=(p*24|0)%3!==0,v=1-Hn((p-.25)/.35),S=$i(Hn(p/.45))*22,_=90*p*p;if(v>0&&M){const T=x+l,R=x+f,C=b+u,O=b+c;d.globalAlpha=v;for(let z=T;z<R;z+=2)Zo(d,z,C-S+_*.3,2,z-T>>1,0),Zo(d,z,O+S+_,2,z-T>>1,0);for(let z=C;z<O;z+=2)Zo(d,T-S,z+_*.6,2,z-C>>1,0),Zo(d,R+S,z+_*.6,2,z-C>>1,0);qr(d,T-S,C-S+_,2),qr(d,R+S,C-S+_,2),qr(d,T-S,O+S+_,2),qr(d,R+S,O+S+_,2)}h&&!h.dead&&p<.35&&(Ue(h.x,h.y,.75),Wd(d,Ut,Gt,x,b+(u+c)/2,7,2,0,V.cy,V.cyl,1-p/.35,0,1-p/.35)),a||Ys(d,x,b+u-34-p*16,s?"ESCAPED!":"CANCELED",s?V.lime:V.yel,2,p>.6?(.9-p)/.3:1)}});for(let d=0;d<8;d++)I(o+(Math.random()-.5)*.6,i+(Math.random()-.5)*.6,.3+Math.random()*.8,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5,.5,.4,d&1?V.w:V.cy,2,3,!1);return et.sfx("glitch_cancel",o,i,.9),!0};let mg=-9,pg=0,yg=0;H.glitch_ev_delete_done=e=>{const t=Pa.get(e.uid);Pa.delete(e.uid);const n=e.tid||(t?t.tid:-1),r=e.x,o=e.y,i=e.killed!==void 0?!!e.killed:w.T-mg<.1&&Math.hypot(pg-r,yg-o)<1.5,a=t?t.rx0:-26,s=t?t.ry0:-64,l=t?t.rx1:26,u=t?t.ry1:6;A({type:"custom",layer:"top",dur:.45,x:r,y:o,draw(f,c){const h=n>0?Z(n):null,d=h&&!h.dead;Ue(d?h.x:r,d?h.y:o);const m=Ut,p=Gt,g=$i(Hn(c/.4)),x=m+(a+l)/2,b=p+(s+u)/2;if(i||Ku(f,x+(a-(a+l)/2)*(1-g),b+(s-(s+u)/2)*(1-g),x+(l-(a+l)/2)*(1-g),b+(u-(s+u)/2)*(1-g),2,0,1-c,!1),d&&c<.5){const v=Ms(h);v&&Cr(f,v,gn(v,"white"),m,p,Fr(h),1-c*2)}const M=Y(4+c*30);f.globalAlpha=1-c,f.fillStyle=V.w,f.fillRect(Y(x-M),Y(b-1),M*2,3),f.fillRect(Y(x-1),Y(b-M),3,M*2)}});for(let f=0;f<16;f++){const c=f/16*kr;I(r,o,.5+f%3*.2,Math.cos(c)*2.4,Math.sin(c)*2.4,1.2,.5,Vs[f%5],f%4===0?4:2,4,!0)}return dt(r,o,2,Af,.95,.3),dt(r,o,1.6,mi,.8,.5),Q($d(e)?5:2),et.sfx("glitch_delete",r,o,1),!0};H.glitch_death=e=>{let t=!!e.erased;if(!t&&w.game){for(const f of w.game.fx)if(!f.done&&f.type==="delete_done"&&f.hero==="glitch"&&Math.hypot(f.x-e.x,f.y-e.y)<1.5){t=!0;break}}if(!t)return!1;mg=w.T,pg=e.x,yg=e.y;const n=e.x,r=e.y,o=e.scale||1,i=e.sprite?Ea(e.sprite,"idle",e.dir||0,0):null,a=(Z(e.uid)||{}).heroKey||e.sprite;a&&et.babble(a,"die",n,r),et.sfx("death",n,r,.7);const s=i?i.bx1-i.bx0>>1:0,l=new Uint8Array(Math.max(1,s));let u=0;if(A({type:"custom",layer:"top",dur:2.4,x:n,y:r,draw(f,c){const h=c*2.4;Ue(n,r);const d=Ut,m=Gt+20*Math.min(h,.8);if(i){const p=Hn((h-.8)/.8),g=i.bx0+Y((i.bx1-i.bx0)*p/2)*2;if(Ti(f,i,null,d,m,o,g,i.fw,0,i.fh,0,1),h<.8&&Ti(f,i,gn(i,"scan"),d,m,o,g,i.fw,0,i.fh,0,.35+.15*Math.sin(h*30)),h<.3&&Cr(f,i,gn(i,"white"),d,m,o,1-h/.3),p>0&&p<1){const S=d+(g-i.ax)*o;f.globalAlpha=1,f.fillStyle=(h*30|0)&1?V.cyl:V.w,f.fillRect(Y(S-1),Y(m+(i.by0-i.ay)*o),2,Y((i.by1-i.by0)*o));const _=g-i.bx0>>1;for(let T=0;T<_&&T<l.length;T++){if(l[T]||u>=72)continue;l[T]=1;const R=(i.bx0>>1)+T;let C=-1,O=-1;for(let E=0;E<i.ch;E++)i.cells[E*i.cw+R]&&(C<0&&(C=E),O=E);if(C<0)continue;const z=(R*2-i.ax)*o;for(let E=0;E<3&&u<72;E++){const U=C+(q(T*3+E+n)*(O-C+1)|0),G=((i.ay-U*2)*o-16)/N.ZK;I(n+z/(2*N.HW),r-z/(2*N.HW),Math.max(0,G),(Math.random()-.5)*.4,(Math.random()-.5)*.4,1.2+Math.random()*1.4,.9+Math.random()*.6,Vs[(T+E)%5],E?2:3,-.6,!0),u++}}}const x=m+(i.by0-i.ay)*o-6,b=m+(i.by1-i.ay)*o+4,M=d+(i.bx1-i.ax)*o+6,v=d+(g-i.ax)*o-6;p<1?Ku(f,v,x,M,b,2,w.T*16|0,h<.8?1:.9,h<.8):Ku(f,M-8-10*Hn((h-1.6)/.2),x,M,b,2,0,1-Hn((h-1.6)/.25),!1),h>.8&&Ys(f,d+((i.bx0+i.bx1)/2-i.ax)*o,x-16-Math.min(6,(h-.8)*20),"DELETED",V.mag,2,h>2?(2.4-h)/.4:1)}else h>.3&&Ys(f,d,m-70,"DELETED",V.mag,2,h>2?(2.4-h)/.4:1)}}),!i)for(let f=0;f<30;f++)I(n+(Math.random()-.5)*.5,r+(Math.random()-.5)*.5,Math.random()*1.2,0,0,1.5+Math.random(),1,Vs[f%5],2,-.5,!0);return dt(n,r,1.8,mi,.8,1.6),!0};Pe.glitch_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=i*40|0;for(let f=1;f<=4;f++){const c=f*5+(l&1)*2;e.globalAlpha=1-f/5,e.fillStyle=f&1?V.cy:V.cyl,e.fillRect(Y(n-a*c-2),Y(r-s*c-1),4,2)}e.globalAlpha=.85,e.fillStyle=V.mag,e.fillRect(Y(n-a*3-3),Y(r-s*3-3),6,6),e.globalAlpha=1,e.fillStyle=V.cy,e.fillRect(Y(n-4),Y(r-4),8,8),e.fillStyle=V.w,e.fillRect(Y(n-2),Y(r-2),4,4),l>>2&3||(e.fillStyle=V.w,e.fillRect(Y(n+4),Y(r-6),2,2));const u=i*12|0;t._lf!==u&&(t._lf=u,dt(t.x,t.y,.8,di,.45,.12))};Qe.glitch=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){Ue(t,n,.45);const a=Y((r?16:11)*(1-i))+2;if(o.globalAlpha=1-i,o.fillStyle=V.mag,o.fillRect(Ut-a-2,Gt-a,a*2,2),o.fillRect(Ut-a-2,Gt+a-2,a*2,2),o.fillStyle=V.cy,o.fillRect(Ut-a,Gt-a,2,a*2),o.fillRect(Ut+a-2,Gt-a,2,a*2),o.fillRect(Ut-a,Gt-a,a*2,2),o.fillRect(Ut-a,Gt+a-2,a*2,2),o.fillStyle=V.w,o.fillRect(Ut-1,Gt-5,2,10),o.fillRect(Ut-5,Gt-1,10,2),r)for(let s=0;s<4;s++){const l=s/4*kr+.785,u=6+i*18;o.fillRect(Y(Ut+Math.cos(l)*u-1),Y(Gt+Math.sin(l)*u-1),3,3)}}});for(let o=0;o<(r?6:3);o++)I(t,n,.45,(Math.random()-.5)*1.6,(Math.random()-.5)*1.6,.6,.25,Vs[o%5],2,2,!0);dt(t,n,r?1.1:.8,di,r?.6:.4,.18)};const Qt=Math.round,Je=Math.PI*2;let Yt=0,Kt=0;function Ee(e,t,n=0){Yt=(e-t)*N.HW+N.OX,Kt=(e+t)*N.HH-n*N.ZK}function ir(e,t,n,r,o){e.fillStyle=o,e.fillRect(Qt(t-r/2),Qt(n-r/2),r,r)}function ya(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Qt(t+(r-t)*l/s-i/2),Qt(n+(o-n)*l/s-i/2),i,i)}function sa(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Qt(t-a/2),Qt(n+i*o),Qt(a),Math.max(1,Qt(2*o)))}}const zi=e=>e<0?0:e>1?1:e,ai=e=>1-(1-e)*(1-e),it={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},$a=new Float32Array(72),Ha=new Float32Array(72);function yo(e,t,n,r,o,i,a,s,l,u,f,c,h){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let v=0;v<=g;v++){const S=v/g,_=v===0||v===g?0:(q(s+v*7.31)-.5)*2*a*Math.sqrt(Math.sin(S*Math.PI));$a[v]=t+d*S+x*_,Ha[v]=n+m*S+b*_}if(f>0)for(let v=0;v<g;v++)ya(e,$a[v],Ha[v],$a[v+1],Ha[v+1],f,l);for(let v=0;v<g;v++)ya(e,$a[v],Ha[v],$a[v+1],Ha[v+1],c,u);const M=Math.atan2(m,d);for(let v=0;v<h;v++){const S=1+Math.floor(q(s+v*3.7+50)*Math.max(1,g-1));let _=$a[S],T=Ha[S],R=M+(q(s+v*9.1)>.5?1:-1)*(.45+q(s+v*1.3)*.6);for(let C=0;C<3;C++){const O=i*(1-C*.2),z=_+Math.cos(R)*O,E=T+Math.sin(R)*O;ya(e,_,T,z,E,Math.max(1,c-1),C?l:u),_=z,T=E,R+=(q(s+v*5+C)-.5)*1.3}}}function ju(e,t,n,r,o,i,a,s){let l=t,u=n,f=r;for(let c=0;c<5;c++){f+=(q(o+c)-.5)*.9;const h=i*(1-c*.13),d=l+Math.cos(f)*h,m=u+Math.sin(f)*h*.5;if(ya(e,l,u,d,m,2,a),q(o+c*3.3)>.45){const p=f+(q(o+c*7)>.5?.85:-.85);ya(e,d,m,d+Math.cos(p)*h*.6,m+Math.sin(p)*h*.3,2,a)}l=d,u=m}s&&ir(e,l,u,3,s)}function Qu(e,t,n,r,o){e.fillStyle=it.cloudD,e.fillRect(Qt(t-3*r),Qt(n-r),6*r,2*r),e.fillStyle=o?it.cloudL:it.cloud,e.fillRect(Qt(t-2*r),Qt(n-2*r),4*r,2*r),e.fillStyle=o?it.pale:it.cloudM,e.fillRect(Qt(t-r),Qt(n-2.6*r),2*r,Qt(r*.8))}H.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;A({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Ee(t,n,.6);const a=Yt,s=Kt,l=w.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=q(r+u+l*3)*Je,c=10+q(r+u*2+l)*14;yo(o,a,s,a+Math.cos(f)*c,s+Math.sin(f)*c*.7,5,3,r+u*11+l,it.cyan,it.white,0,1,0)}ir(o,a,s,Qt(8*(1-i))+2,it.white)}});for(let o=0;o<8;o++)I(t,n,.6,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.25,o&1?it.cyan:it.white,2,3,!0)};const E0=new Map;Pe.halcon_Q=(e,t,n,r,o,i)=>{let a=t.id!=null?E0.get(t.id):void 0;t.id!=null&&!a&&(E0.size>64&&E0.clear(),a=[t.x,t.y],E0.set(t.id,a));const s=Math.cos(o),l=Math.sin(o),u=150;let f=n-s*u,c=r-l*u;mt(!0);const h=Ht();if(a){Ee(a[0],a[1],t.z||.45);const p=Math.hypot(n-Yt,r-Kt);if(p<u)f=Yt,c=Kt;else{h.globalAlpha=.4,h.fillStyle=it.blue;const g=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<g;b++){if(q(b*3.1+x)<.35)continue;const M=(u+b*9)/p;h.fillRect(Qt(n+(Yt-n)*M),Qt(r+(Kt-r)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;h.globalAlpha=.16,h.fillStyle=it.blue,sa(h,n,r,18),h.globalAlpha=1,yo(h,n,r,f,c,11,7,d,it.cyan,it.white,4,2,2);const m=5+((i*30|0)&1)*3;h.fillStyle=it.pale,h.fillRect(Qt(n-m),Qt(r-1),m*2,2),h.fillRect(Qt(n-1),Qt(r-m),2,m*2),h.fillStyle=it.white,h.fillRect(Qt(n-3),Qt(r-3),6,6),mt(!1)};H.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Je;A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){Ee(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)ju(i,Yt,Kt,o+s*Je/6,r+s*13,9,it.scorch)}}),A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){Ee(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)ju(i,Yt,Kt,o+s*Je/6,r+s*13,9,it.cyan,it.white)}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Ee(t,n,.5);const s=w.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=q(r+l*5+s)*Je,f=18+q(r+l+s*2)*16;yo(i,Yt,Kt-6,Yt+Math.cos(u)*f,Kt+Math.sin(u)*f*.6,6,4,r+s*7+l,it.blue,it.pale,3,1,0)}a<.3&&ir(i,Yt,Kt,Qt(22*(1-a/.3))+2,it.white)}});for(let i=0;i<12;i++)I(t,n,.5,y(-2.2,2.2),y(-2.2,2.2),y(1,2.6),y(.25,.45),i%3?it.cyan:it.yel,2,7,!0,.9);Q(2)};const uu=new Map;H.halcon_W=e=>{if(e.type==="splash"||e.impact){tS(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Ee(t,n);const a=Yt,s=Kt;Ee(r,o);const l=Math.hypot(Yt-a,Kt-s)||1,u=(Yt-a)/l,f=(Kt-s)/l;uu.size>32&&uu.clear(),uu.set(e.uid,[u,f]);for(let c=0;c<8;c++)I(t,n,.7,y(-1,1),y(-1,1),y(1,2.5),y(.6,.9),c%3?it.featherL:it.cream,3,1.2,!1,.9);A({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(c,h){Ee(r,o);const d=Yt,m=Kt,p=64*(1-ai(h))+24,g=h*2.6;c.globalAlpha=.5+.5*h;const x=h>.75&&(w.T*20|0)&1?it.white:it.cyan;for(let b=0;b<4;b++){const M=g+b*Je/4;for(let v=-3;v<=3;v++){const S=M+v*.09;ir(c,d+Math.cos(S)*p,m+Math.sin(S)*p*.5,3,x)}for(let v=1;v<=2;v++)ir(c,d+Math.cos(M)*(p-v*5),m+Math.sin(M)*(p-v*5)*.5,2,it.white)}ir(c,d,m,3,it.white)}}),A({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(c,h){const d=zi(h*(i+.15)/i),m=-f,p=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;Ee(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,M=Yt,v=Kt-b,S=1-g/12;c.globalAlpha=S*(h>.8?(1-h)/.2:1);for(const _ of[-1,1]){const T=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;ir(c,M+m*T*_+R,v+p*T*_-Math.sin(x*34)*3,g<3?3:2,g<4?it.white:it.pale)}g%3===0&&(c.fillStyle=it.cyan,c.fillRect(Qt(M-u*10),Qt(v-f*10),2,2))}}})};function tS(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=uu.get(e.uid)||[0,1];A({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){Ee(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*Je+q(o+l)*.5,f=r*N.HW*(.5+q(o+l*3)*.4);ya(a,Yt,Kt,Yt+Math.cos(u)*f*.6,Kt+Math.sin(u)*f*.3,2,it.ash),ya(a,Yt+Math.cos(u)*f*.6,Kt+Math.sin(u)*f*.3,Yt+Math.cos(u+.25)*f,Kt+Math.sin(u+.25)*f*.5,2,it.ash)}ir(a,Yt,Kt,8,it.ash)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=w.T*30|0;for(let f=0;f<2;f++){const c=zi(s*1.4-f*.2);if(c<=0||c>=1)continue;const h=.2+r*1.1*ai(c);a.globalAlpha=1-c;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*Je;Ee(t+Math.cos(m)*h,n+Math.sin(m)*h),ir(a,Yt,Kt,f?2:3,f?it.pale:it.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const c=f/u*Je+s*.8,h=(f+1)/u*Je+s*.8;Ee(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85);const d=Yt,m=Kt;Ee(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85),yo(a,d,m-4,Yt,Kt-4,7,4,o+f*9+l,it.blue,it.pale,0,2,0),ir(a,d,m-4,4,it.white)}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+r*1.3*ai(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*Je+.2;Ee(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const c=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let h=-2;h<=2;h++){const d=c+h*.35,m=9-Math.abs(h);ir(a,Yt-Math.cos(c)*6+Math.cos(d)*m,Kt-Math.sin(c)*6+Math.sin(d)*m,h?2:3,h?it.pale:it.white)}}s<.2&&(a.globalAlpha=1-s/.2,Ee(t,n,.2),a.fillStyle=it.white,sa(a,Yt+i[0]*6,Kt+i[1]*6,Qt(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*Je,l=y(1.5,3.5);I(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,y(.5,1.6),y(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)I(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1.5,2.5),y(.8,1.1),a&1?it.featherL:it.feather,3,1.5,!1,.92);Q(6)}H.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,a,s){const l=Z(s.uid);Ee(l?l.x:n,l?l.y:r,.8);const u=Yt,f=Kt,c=ai(zi(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const h of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+h*(.3+c*(.45+d*.24)),p=16+d*5+c*10;for(let g=6;g<p;g+=3){const x=g>p-6;ir(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/p*c*9,x?2:3,x?it.white:d&1?it.pale:it.cyan)}}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,a){const s=.5+(o-.5)*ai(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*Je+a*1.6;for(let f=0;f<3;f++){const c=u+f*.07;Ee(n+Math.cos(c)*s,r+Math.sin(c)*s),ir(i,Yt,Kt,3-f,f?it.pale:it.white)}}}})}for(let n=0;n<5;n++){const r=n/5*Je;I(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,y(.8,1.5),.4,n&1?it.pale:it.white,2,0,!0)}A({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=Z(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const a=i.x-o.lx,s=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const c=Math.hypot(o.dx,o.dy),h=r*o.dur;n.globalAlpha=Math.min(1,h/.15)*(h>o.dur-.4?(o.dur-h)/.4:1),Ee(i.x,i.y,.45);const d=Yt,m=Kt;if(c>.35){const p=o.dx/c,g=o.dy/c,x=w.T*70%11;for(let v=0;v<3;v++){const S=14+v*11+x,_=d-p*S,T=m-g*S,R=v===0?it.white:v===1?it.pale:it.cyan;for(const C of[-1,1]){const O=Math.cos(C*.75),z=Math.sin(C*.75),E=-(p*O-g*z),U=-(p*z+g*O);for(let G=0;G<4;G++)ir(n,_+E*G*3,T+U*G*3,2,R)}}const b=-g,M=p;for(const v of[-1,1])for(let S=0;S<6;S++){const _=10+S*5+w.T*90%5;(S+(v>0?1:0))%3!==0&&(n.fillStyle=it.pale,n.fillRect(Qt(d-p*_+b*12*v),Qt(m-g*_+M*12*v),2,1))}}else for(let p=0;p<3;p++){const g=w.T*5+p*Je/3;ir(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,p?it.pale:it.white)}}})};const L0=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],$o=(()=>{const e=[],t=[],n=[],r=L0.length,o=(i,a)=>a>=0&&a<r&&i>=0&&i<L0[a].length&&L0[a][i]!==".";return L0.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:o(s-1,a)&&o(s+1,a)&&o(s,a-1)&&o(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();H.halcon_R=e=>{if(e.type==="global_hit"){eS(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,a){Ee(t,n,3);const s=Yt,l=Kt,u=30+60*ai(zi(a*2)),f=w.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let c=0;c<9;c++){const h=c/9*Je+a*3.2;Qu(i,s+Math.cos(h)*u,l+Math.sin(h)*u*.38,5+c%3,q(r+c+f)>.8)}Qu(i,s,l,7,q(r+f)>.7)}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l?l.x:t,f=l?l.y:n;Ee(t,n,3);const c=Yt,h=Kt,d=30+60*ai(zi(a*2)),m=w.T*15|0,p=a>.75?(1-a)/.25:1;if(i.globalAlpha=p,q(r+m*1.7)>.45){const x=q(r+m)*Je,b=x+1.2+q(r+m*3)*2;yo(i,c+Math.cos(x)*d,h+Math.sin(x)*d*.38,c+Math.cos(b)*d,h+Math.sin(b)*d*.38,9,6,r+m,it.blue,it.pale,3,1,1)}const g=a*o;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(Ee(u,f,1),yo(i,c,h+8,Yt,Kt,12,10,r+(g*25|0),it.blue,it.white,5,2,2)),g>.3){const x=zi((g-.3)/.35),b=Qt(2+2*ai(x)),M=(w.T*24|0)%5===0?.5:1;Ee(u,f,2.2+x*.4);const v=Yt,S=Kt;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?it.indigo:_===1?it.cyan:it.yel;for(let T=0;T<$o.n;T++)$o.K[T]===_&&i.fillRect(Qt(v+$o.X[T]*b-b/2),Qt(S+$o.Y[T]*b-b/2),b,b)}i.fillStyle=it.white;for(let _=0;_<$o.n;_++)$o.K[_]===1&&$o.Y[_]<-2&&i.fillRect(Qt(v+$o.X[_]*b-1),Qt(S+$o.Y[_]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*Je,s=y(2,3);I(t+Math.cos(a)*s,n+Math.sin(a)*s,y(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,y(.5,1.2),.6,i%3?it.pale:it.cloudL,2,0,i%3!==0,.97)}Q(5)};function eS(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Je;et.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};A({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,c=ai(zi(f/.12));Ee(t,n,3.6);const h=Yt,d=Kt,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const g=p/6*Je+r;Qu(l,h+Math.cos(g)*38*c,d+Math.sin(g)*12*c,Qt(4+2*c),m&&p%2===0)}Qu(l,h,d,Qt(5+3*c),m)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,c=s(f);Ee(t,n,3.5);const h=Yt+(q(r)-.5)*30,d=Kt;if(Ee(t,n,.1),c){const m=r+c*31;l.globalAlpha=.45,yo(l,h,d,Yt,Kt,16,22,m,it.indigo,it.blue,0,9,0),l.globalAlpha=1,yo(l,h,d,Yt,Kt,16,22,m,it.cyan,it.white,6,3,3),l.globalAlpha=c===1?.35:.18,l.fillStyle=it.pale,sa(l,Yt,Kt-20,70,.6)}if(f>.1){const m=zi((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=it.cyan,sa(l,Yt,Kt,Qt(26*(1-m*.5)),.5),l.fillStyle=it.white,sa(l,Yt,Kt,Qt(12*(1-m)),.5)}}}),A({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Ee(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=it.scorch,sa(l,Yt,Kt,16,.5);for(let f=0;f<8;f++)ju(l,Yt,Kt,o+f*Je/8,r+f*17,13,it.scorch)}}),A({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Ee(t,n);const f=w.T*25|0;l.globalAlpha=1-u;for(let c=0;c<8;c++)ju(l,Yt,Kt,o+c*Je/8,r+c*17,13,c&1?it.blue:it.cyan,it.white);for(let c=0;c<3;c++){const h=q(r+c+f)*Je,d=30+u*60;yo(l,Yt,Kt,Yt+Math.cos(h)*d,Kt+Math.sin(h)*d*.5,7,5,r+f*3+c,it.blue,it.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*Je,f=y(1.5,4);I(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,y(2,4),y(.4,.8),l%3===0?it.yel:l%3===1?it.cyan:it.ash,l%3===2?3:2,8,l%3!==2,.92)}Q(8)}Pe.halcon_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;for(let h=0;h<=16;h+=2){const d=h<3?0:h<12?3:2,m=n-a*h,p=r-s*h;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,b=(h===8||h===12)&&g!==0;e.fillStyle=g===0?it.white:b?it.feather:x?it.cyan:it.pale,e.fillRect(Qt(m+l*g-1),Qt(p+u*g-1),2,2)}}mt(!0);const f=Ht(),c=i*24|0;f.globalAlpha=.2,f.fillStyle=it.blue,sa(f,n-a*6,r-s*6,12),f.globalAlpha=1;for(let h=0;h<2;h++){const d=4+q(c+h*3+(t.id||0))*10,m=h?1:-1,p=n-a*d,g=r-s*d;yo(f,p,g,p+l*m*9-a*6,g+u*m*9-s*6,4,2,c*7+h,it.cyan,it.white,0,1,0)}f.fillStyle=it.white,f.fillRect(Qt(n-2),Qt(r-2),4,4),mt(!1)};Qe.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;A({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(a,s){Ee(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;yo(a,Yt,Kt,Yt+Math.cos(u)*i*(.6+s*.5),Kt+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,o+l,it.cyan,it.white,0,2,0)}ir(a,Yt,Kt,Qt((r?10:6)*(1-s))+2,it.white)}});for(let a=0;a<(r?8:4);a++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(.5,1.5),.25,a&1?it.yel:it.cyan,2,5,!0)};let he=0,de=0;function Mn(e,t,n=0){he=(e-t)*N.HW+N.OX,de=(e+t)*N.HH-n*N.ZK}function go(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const t0=e=>e<0?0:e>1?1:e,e0=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),_r=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Ka=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Oo=["#8a6a48","#5a3a20","#3a2414"],bi=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Yo=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function gg(e,t){const n=[],r=[],o=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function Ph(e,t,n,r,o,i,a=-1){const s=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*o,l+t.y[f]*o,o,o)}}const nS=gg(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),rS=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],N2=gg(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),B2=[Yo[3],Yo[2],Yo[0],"#4a2a6a","#e0d8f0","#a898c0"],ml=new Map;function oS(e,t){if(e.id==null)return;let n=ml.get(e.id);if(!n){ml.size>200&&ml.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},ml.set(e.id,n);const r=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,a){if(a.fin)return;const s=w.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,ml.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}H.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,c=u===0?0:r*y(.45,.9);i[u*4]=t+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:y(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;s[u]=t+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}A({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<a;h++){const d=t0((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Mn(s[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=_r[1+h%3],u.fillRect(Math.round(he),Math.round(de),h%3?3:4,2))}u.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,g=i[d*4+2];if(Mn(i[d*4],i[d*4+1]),h<m){if(h<p)continue;const M=e0(t0((h-p)/.13)),v=g*M*(1+.12*Math.sin(h*60+d)),S=Math.max(1,Math.round(v*2/3));for(let _=0;_<S;_++){const T=(_+.5)/S*2-1,R=v*2*Math.sqrt(1-T*T);u.fillStyle=_===0?Ka[0]:T<.3?Ka[1]:Ka[2],u.fillRect(Math.round(he-R/2),Math.round(de-v*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=Ka[3],u.fillRect(Math.round(he-v*.2),Math.round(de-v*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let M=0;M<4;M++)I(i[d*4],i[d*4+1],.25,y(-.6,.6),y(-.6,.6),y(.4,1.1),y(.9,1.4),_r[M%3],3,.25,!1,.92)}const x=(h-m)/.35;if(x>=1)continue;const b=g*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const v=M/8*6.28+d;u.fillStyle=_r[M&1?1:2],go(u,he+Math.cos(v)*b,de-g+Math.sin(v)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=Ka[0];for(let M=0;M<3;M++)go(u,he+(M-1)*g*.6,de-g-x*8-(M&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),Q(2)};H.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;A({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?e0(l/.2):l>.8?(1-l)/.2:1,c=3;Mn(i,a,1.35);const h=he,d=de,m=[4,8,10,12,12];for(let p=0;p<5;p++){const g=Math.round(m[p]*f)*c;g<=0||(s.fillStyle=p===0?bi[1]:bi[2],s.fillRect(Math.round(h-g/2),Math.round(d+(p-5)*c*f),g,Math.max(1,Math.round(c*f))))}s.fillStyle=bi[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=bi[0],go(s,h-3*c*f,d-3*c*f,3*f),go(s,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,I(i+y(-.25,.25),a+y(-.25,.25),1.25,0,0,0,.5,u.drops&1?bi[0]:bi[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;A({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=w.T;for(let f=0;f<o;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let S=0;S<2;S++)I(m,p,.2,y(-.2,.2),y(-.2,.2),y(.8,1.6),y(.7,1.1),bi[S],2,0,!0,.95)}const g=e0(t0(h/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*g*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,v=Math.round(Math.sin(u*6+f)*2);Mn(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(he-9),Math.round(de-1),18,3),i.globalAlpha=1,Ph(i,nS,he+v,de-M,b,rS)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;Mn(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=bi[u%3+1],go(i,he,de,u%3?3:4)}}})};H.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){Mn(t,n),r.globalAlpha=1-o,r.fillStyle=Oo[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)go(r,he+Math.cos(a+s*.25)*s*3.5,de+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)I(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(1.5,3),y(.4,.6),Oo[r%3],3,9,!1,.95)};const $2=10;Pe.hongo_E=(e,t,n,r,o,i)=>{oS(t,xg);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;Mn(t.x,t.y),e.fillStyle=Oo[1],e.fillRect(Math.round(he-8),Math.round(de-1),16,4),e.fillStyle=Oo[0],e.fillRect(Math.round(he-5),Math.round(de-2),10,2);for(let u=$2-1;u>=0;u--){const f=t.x+s*u*.17,c=t.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/$2);Mn(f,c,h);const d=7-u*.45;e.fillStyle=Oo[2],go(e,he,de+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",go(e,he,de,d),e.fillStyle="#a07040",e.fillRect(Math.round(he-d/4),Math.round(de-d/2),2,1),(u===3||u===7)&&(e.fillStyle=_r[2],e.fillRect(Math.round(he+d/2),Math.round(de-d/2-1),2,2))}Mn(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=_r[3],e.fillRect(Math.round(he-2),Math.round(de-6),4,7),e.fillStyle=_r[1],e.fillRect(Math.round(he-6),Math.round(de-6),4,2),e.fillRect(Math.round(he+2),Math.round(de-8),4,2),e.fillStyle=_r[0],e.fillRect(Math.round(he-1),Math.round(de-8),2,2),Math.random()<.35&&I(t.x,t.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Oo[Math.random()*3|0],2,7,!1,.95)};function xg(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)I(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1),.5,a&1?Oo[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;A({type:"custom",layer:"top",dur:r,x:t,y:n,draw(a,s){const l=s*r,u=l<.18?e0(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);Mn(t+h*.55,n+d*.55,0);const m=he,p=de;Mn(t+h*.8,n+d*.8,.55);const g=he,x=de;Mn(t+h*.12,n+d*.12,.75);const b=he,M=de,v=Math.min(10,Math.round(10*u));for(let S=0;S<=v;S++){const _=S/10,T=1-_,R=T*T*m+2*T*_*g+_*_*b,C=T*T*p+2*T*_*x+_*_*M,O=6-_*4;a.fillStyle=Oo[2],go(a,R,C+1,O+2),a.fillStyle=S&1?"#7a5030":"#6a4428",go(a,R,C,O),(S===4||S===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(R+(f&1?3:-5)),Math.round(C-1),2,2))}}}});for(let a=0;a<12;a++)I(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3.2),y(.4,.7),Oo[a%3],3,9,!1,.95);Q(2)}H.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let p=0;p<13;p++){let g=null;for(let x=0;x<8&&!g;x++){const b=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*r*.88,v=t+Math.cos(b)*M,S=n+Math.sin(b)*M;a.every(_=>Math.hypot(_.x-v,_.y-S)>.7)&&(g={x:v,y:S,cs:p===0?4:Math.random()<.5?3:2,ts:M/r*.5})}g&&a.push(g)}a.sort((p,g)=>p.x+p.y-(g.x+g.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let p=0;p<s;p++){let g=1e9;for(let x=0;x<s;x++)if(x!==p){const b=Math.hypot(a[p].x-a[x].x,a[p].y-a[x].y);b<g&&(g=b,l[p]=x)}}A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g){const x=g*i,b=t0((x-.1)/.5),M=g>.88?(1-g)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let v=0;v<s;v++){const S=l[v];if(S<0)continue;Mn(a[v].x,a[v].y);const _=he,T=de;Mn(a[S].x,a[S].y);const R=Math.hypot(he-_,de-T),C=Math.round(R/6*b);for(let O=0;O<=C;O++){const z=O*6/R;p.fillRect(Math.round(_+(he-_)*z),Math.round(T+(de-T)*z+Math.sin(O*1.7+v)*2),2,2)}}p.globalAlpha=1}});const u=(p,g,x)=>{const b=e0(t0((g-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*b*M))};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(let b=0;b<s;b++){const M=a[b],v=u(M,x,g);v<=0||(Mn(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round(he-v*4),Math.round(de-1),v*8,3),Ph(p,N2,he+Math.round(Math.sin(w.T*2+b)*v*.4),de,v,B2))}}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,g,x){const b=g*i;for(let M=0;M<s;M++){const v=a[M],S=u(v,b,g);S<=0||(Mn(v.x,v.y),p.globalAlpha=.45+.4*Math.sin(w.T*5+M*1.9),Ph(p,N2,he+Math.round(Math.sin(w.T*2+M)*S*.4),de,S,B2,2),p.globalAlpha=.18,p.fillStyle=Yo[1],p.fillRect(Math.round(he-S*4),Math.round(de-S*9),S*8,S*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,b-x.last),x.last=b;x.acc>.085&&x.puffs<46&&g<.88;){x.acc-=.085,x.puffs++;const M=a[Math.random()*s|0];I(M.x+y(-.1,.1),M.y+y(-.1,.1),.12*M.cs*1.6,y(-.25,.25),y(-.25,.25),y(.5,1),y(.9,1.3),x.puffs&1?Yo[0]:_r[1],2,.15,!0,.97)}}});const f=za(e,i-.3),c=()=>w.T-f.t0,h=p=>Math.min(1,c()/.35,p/.45),d=Array.from({length:9},(p,g)=>{const x=g/9*6.283+y(-.3,.3),b=g===0?0:y(.35,.8)*r,M=Array.from({length:5},()=>({ox:y(-.5,.5),oy:y(-.35,.35),k:y(.35,.6),p:Math.random()*6.28}));return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,s:y(.55,.9)*Math.min(1.2,r/3),sp:y(.25,.5)*(g&1?1:-1),p:Math.random()*6.28,v:g%3===0,puffs:M}});A({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,g,x){const b=or(f);if(b<=0){x.t=x.dur+1;return}const M=h(b),v=w.T;for(const S of d){const _=Math.cos(v*S.sp+S.p)*.35,T=Math.sin(v*S.sp*.8+S.p)*.35;Mn(S.x+_,S.y+T);const R=S.s*N.HW*Math.SQRT2,C=he,O=de;for(const z of S.puffs){const E=R*z.k*(.85+.15*Math.sin(v*1.1+z.p)),U=C+R*z.ox+Math.sin(v*.7+z.p)*4,G=O+R*.45*z.oy;p.globalAlpha=.15*M,p.fillStyle=S.v?Yo[2]:_r[3],H2(p,U,G,E,E*.46),p.globalAlpha=.13*M,p.fillStyle=S.v?Yo[1]:_r[2],H2(p,U-E*.15,G-E*.12,E*.6,E*.28)}}p.globalAlpha=.55*M;for(let S=0;S<56;S++){if(!(S+(v*6|0)&3))continue;const _=S/56*6.283+v*.15;Mn(t+Math.cos(_)*r,n+Math.sin(_)*r),p.fillStyle=S%7===0?Yo[1]:_r[1],p.fillRect(k0(he)-1,k0(de)-1,2,2)}yi(f,t,n,r*1.05,10145856,.45*M)}});const m=Array.from({length:26},()=>{const p=Math.random()*6.283,g=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*g,y:n+Math.sin(p)*g,p:Math.random(),sp:y(.35,.6),v:Math.random()<.3}});A({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,g,x){const b=or(f);if(b<=0){x.t=x.dur+1;return}const M=h(b),v=w.T;for(const S of m){const _=(v*S.sp+S.p)%1;Mn(S.x+Math.sin(v*2+S.p*9)*.12,S.y,_*1.6),p.globalAlpha=M*Math.sin(_*Math.PI)*.9,p.fillStyle=S.v?Yo[0]:_r[0],p.fillRect(k0(he)-1,k0(de)-1,_<.5?2:3,_<.5?2:3)}}});for(let p=0;p<14;p++){const g=Math.random()*6.28,x=Math.random()*r*.8;I(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1.5,2.5),.5,Oo[p%3],3,8,!1)}Q(3)};const k0=Math.round;function H2(e,t,n,r,o){if(!(r<1)){o=Math.max(1,o);for(let i=-o;i<o;i+=2){const a=r*Math.sqrt(Math.max(0,1-(i+1)/o*((i+1)/o)));a>=.5&&e.fillRect(Math.round(t-a),Math.round(n+i),Math.max(1,Math.round(a*2)),2)}}}Qe.hongo=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;Mn(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=_r[1+s%3],r.fillRect(Math.round(he-2),Math.round(de-1),4,2)}}}),A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){Mn(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Ka[i],go(r,he+(i-1)*8*(.6+o),de-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)I(t,n,.4,y(-1,1),y(-1,1),y(.5,1.5),.6,_r[r%3],3,2,!1,.92)};H.hongo_E_hit=e=>xg({x:e.x,y:e.y,life:9});const At=Math.round,ho=Math.PI*2;let $e=0,Xe=0;function kn(e,t,n=0){$e=(e-t)*N.HW+N.OX,Xe=(e+t)*N.HH-n*N.ZK}function Rl(e,t,n,r,o){e.fillStyle=o,e.fillRect(At(t-r/2),At(n-r/2),r,r)}const Fo=e=>e<0?0:e>1?1:e,u0=e=>1-(1-e)*(1-e),Te={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},Xr={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},bn={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},Dr={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},iS="#e8384a";function aS(e,t){return Math.atan2((e+t)*N.HH,(e-t)*N.HW)}function Zu(e,t,n,r,o,i,a,s,l){const u=Math.cos(r),f=Math.sin(r),c=-f,h=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(At(m-o/2),At(p-o/2),o,o),d>=2&&(e.fillStyle=a,e.fillRect(At(m+c*o-o/2),At(p+h*o-o/2),o,o));else if(d===10){e.fillStyle=s;for(let g=-3;g<=3;g++)e.fillRect(At(m+c*g*o-o/2),At(p+h*g*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(At(m-o/2),At(p-o/2),o,o)):(e.fillStyle=s,e.fillRect(At(m-o),At(p-o),o*2,o*2))}}function Ia(e,t,n,r,o){e.fillStyle=o;const i=At(r);e.fillRect(At(t-i),At(n-1),i*2,2),e.fillRect(At(t-1),At(n-i),2,i*2),e.fillRect(At(t-2),At(n-2),4,4)}function Mg(e,t,n,r){const o=Math.max(2,At(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=Dr.d,e.fillRect(At(t-o/2),At(n-i/2),o,i),o>3&&(e.fillStyle=Dr.m,e.fillRect(At(t-o/2+1),At(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=Dr.l,e.fillRect(At(t-1),At(n-2),2,4))}H.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=aS(t,n);A({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(a,s){kn(r,o,.55);const l=.55*(1-u0(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,Zu(a,$e,Xe,i+u*l,2,u?bn.l:Te.w,u?bn.m:Te.m,Dr.m,Xr.d))}}),A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(a,s){kn(r,o,.55),a.globalAlpha=1-s,Ia(a,$e+Math.cos(i)*12,Xe+Math.sin(i)*12,10*(1-s)+3,bn.w)}});for(let a=0;a<6;a++)I(r,o,.5,y(-.8,.8),y(-.8,.8),y(.3,1),y(.4,.6),a&1?Xr.m:Xr.l,3,-.5,!1,.9)};Pe.mapache_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=Math.sin(i*26)*.07;mt(!0);const c=Ht();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);c.globalAlpha=(1-d/14)*.9,c.fillStyle=d&1?bn.l:bn.m,c.fillRect(At(n-a*m+l*p),At(r-s*m+u*p),2,2)}for(let d=4;d>=1;d--)c.globalAlpha=.5-d*.1,Zu(c,n-a*d*9,r-s*d*9,o+f*d,2,bn.l,bn.m,bn.m,bn.d);c.globalAlpha=.22,c.fillStyle=bn.m,c.fillRect(At(n-10),At(r-10),20,20),c.globalAlpha=1,mt(!1),Zu(e,n,r,o+f,2,Te.w,Te.m,Dr.m,Xr.k);const h=i*4%1;h<.5&&(mt(!0),Ht().globalAlpha=1,Ia(Ht(),n+a*(12-h*30),r+s*(12-h*30),4,Te.w),mt(!1))};const W2=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];H.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){kn(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Zu(o,$e-Math.cos(r)*8,Xe-Math.sin(r)*8,r+Math.PI,2,Te.w,Te.m,Dr.m,Xr.k)}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){kn(t,n,1);const a=3,s=u0(Fo(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=$e,f=Xe-s,c=W2.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let h=0;h<c;h++){const d=W2[h],m=i>.6?(h&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const g=d[p];g!=="."&&(o.fillStyle=g==="X"?bn.l:g==="M"?bn.d:g==="e"?bn.w:bn.m,o.fillRect(At(u+(p-6)*a+m-a/2),At(f+(h-4)*a*l-a/2),a,Math.max(1,At(a*l))))}}}});for(let o=0;o<8;o++)I(t,n,.5,y(-1.8,1.8),y(-1.8,1.8),y(.8,2),y(.3,.5),o&1?Te.l:Te.m,2,6,!0,.9);for(let o=0;o<6;o++)I(t+y(-.2,.2),n+y(-.2,.2),.4,0,0,y(.6,1.2),y(.6,.9),o&1?bn.l:bn.m,2,-.3,!0);Q(2)};function bg(e,t,n,r,o,i,a,s){const l=Math.max(2,At(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,c=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,h=n-o/2+u*2;if(c<1)continue;e.globalAlpha=s,e.fillStyle=Dr.d,e.fillRect(At(t-c-2),At(h),At(c*2+4),2),e.globalAlpha=s*.85,e.fillStyle=Te.m,e.fillRect(At(t-c),At(h),At(c*2),2);const d=t-c+(a*2.2-.6)*r-f*o*.25;d>t-c&&d<t+c-3&&(e.globalAlpha=s,e.fillStyle=Te.w,e.fillRect(At(d),At(h),3,2))}e.globalAlpha=s,e.fillStyle=Dr.l,e.fillRect(At(t-2),At(n-o/2-3),4,3)}function vg(e,t,n,r,o,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<o.length;u++)for(let f=0;f<a;f++){const c=l+u*17+f*3,h=(q(c)-.5)*.7,d=(q(c+1)-.5)*.7,m=Fo(s*(.85+q(c+2)*.3));kn(t+(o[u]+h-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(w.T*20+f|0)&1;e.fillStyle=p?Te.w:Te.m,e.fillRect(At($e-2),At(Xe-1),p?4:2,p?2:4),e.fillStyle=Te.d,e.fillRect(At($e+(p?2:0)),At(Xe+(p?0:3)),2,2)}}function wg(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*ho;r[i]=e+Math.cos(a)*1.1,o[i]=t+Math.sin(a)*1.1}return{TX:r,TY:o}}function Sg(e,t,n){A({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){kn(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*ho+o*2,l=6+o*22;Ia(r,$e+Math.cos(s)*l,Xe+Math.sin(s)*l*.8,4*(1-o)+2,a&1?Te.l:bn.l)}o<.3&&Ia(r,$e,Xe,16*(1-o/.3)+3,Te.w)}}}),A({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)I(e[a],t[a],.4,y(-.8,.8),y(-.8,.8),y(.3,.9),y(.4,.7),s&1?Xr.l:Xr.m,3,-.4,!1,.9)}}})}H.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=wg(t,n,2),a=.32,s=.45,l=.78;A({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const c=f*(s+.02),h=u0(Fo(c/.18));if(kn(t,n,.75),bg(u,$e,Xe,30,52*h,!0,Fo(c/.3),.95),c>a){u.globalAlpha=1,u.fillStyle=Te.w;const d=Fo((c-a)/(s-a)),m=$e+4,p=Xe-6;for(let g=0;g<6;g++){let x=q(r+g)*ho,b=m,M=p;for(let v=0;v<At(6*d);v++)x+=(q(r+g*7+v)-.5)*.9,b+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(At(b),At(M),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const c=f*(l+.05);c>=s&&c<s+.08&&(kn(t,n,.75),u.globalAlpha=1-(c-s)/.08,u.fillStyle=Te.w,u.fillRect(At($e-22),At(Xe-30),44,60)),u.globalAlpha=1,vg(u,t,n,.75,o,i,6,(c-s)/(l-s),r)}}),Sg(o,i,l);for(let u=0;u<8;u++)I(t,n,.4,y(-1,1),y(-1,1),y(.3,.8),y(.5,.8),u&1?Xr.m:Xr.d,3,-.3,!1,.9)};H.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,a=(s,l,u,f,c,h,d)=>{const m=12*f,p=20*f;for(let g=0;g<18;g++){const x=g/18*ho+c;Rl(s,l+Math.cos(x)*m,u+Math.sin(x)*p,g%3?2:3,g&1?h:d)}for(let g=0;g<8;g++){const x=g/8*ho-c*1.7,b=.45+.25*Math.sin(c*2+g);Rl(s,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?u0(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,c=w.T*8;kn(t,n,.55);const h=$e,d=Xe;kn(r,o,.55);const m=$e,p=Xe;f>0&&(s.globalAlpha=1,a(s,h,d,f,c,Te.l,Te.d),a(s,m,p,f,-c,Dr.l,Dr.d));const g=Fo((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,M=x?Dr.m:Te.m,v=x?1-g:g;s.globalAlpha=.45*(1-Fo((u-.5)/.3));for(let S=0;S<=20;S++){const _=S/20;S%2||Rl(s,h+(m-h)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,2,M)}if(g>0&&g<1)for(let S=0;S<6;S++){const _=x?v+S*.03:v-S*.03;_<0||_>1||(s.globalAlpha=1-S/6,Rl(s,h+(m-h)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,S?3:5,S?M:Te.w))}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;kn(t,n,.55);const f=$e,c=Xe;kn(r,o,.4);const h=$e,d=Xe,m=(f+h)/2,p=(c+d)/2-58,g=Fo(u/i),x=m+(h-m)*g,b=p+(d-p)*g-Math.sin(g*Math.PI)*30;s.globalAlpha=g>.85?(1-g)/.15:1,Mg(s,x,b,w.T*26)}});for(const[s,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*ho;I(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,y(0,.6),.4,s===t?Te.l:Dr.l,2,0,!0)}};const sS=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];H.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=wg(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],c=new Float32Array(a);A({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){kn(t,n,0);const b=$e,M=Xe;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=Dr.l;for(let v=0;v<60;v++){const S=v*6,_=70-v*.9;g.fillRect(At(b-_),At(M-S-6),At(_*2),6)}g.globalAlpha*=2,g.fillStyle=Te.w;for(let v=0;v<18;v+=2){const S=Math.sqrt(1-v/18*(v/18))*74;g.fillRect(At(b-S),At(M-9+v),At(S*2),2)}}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(g,x){const b=x*l,M=u0(Fo(b/.3)),v=b*1.2+b*b*4.5;for(let S=0;S<a;S++)c[S]=S/a*ho+v;f.sort((S,_)=>Math.sin(c[S])-Math.sin(c[_]));for(const S of f){const _=c[S];kn(t+Math.cos(_)*s,n+Math.sin(_)*s,0);const T=.45+.55*Math.abs(Math.sin(_+.8));bg(g,$e,Xe-22*M,At(14*T)+2,44*M,!1,(b*1.6+S*.13)%1,.9)}}}),A({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const b=x*(u+.05);if(b<l){const M=b*14|0,v=M%a,S=v/a*ho+b*1.2+b*b*4.5;kn(t+Math.cos(S)*s,n+Math.sin(S)*s,.6),g.globalAlpha=.9,Ia(g,$e,Xe,9,Te.w)}else{if(b<l+.1){g.globalAlpha=1-(b-l)/.1,kn(t,n,.4),g.fillStyle=Te.w;for(let M=-14;M<14;M+=2){const v=Math.sqrt(1-M/14*(M/14))*90;g.fillRect(At($e-v),At(Xe+M*2),At(v*2),4)}}g.globalAlpha=1,vg(g,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),Sg(o,i,u);const h=16,d=new Float32Array(h),m=new Float32Array(h),p=new Float32Array(h);for(let g=0;g<h;g++){const x=Math.random()*ho,b=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*b,m[g]=n+Math.sin(x)*b,p[g]=y(0,.35)}A({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(g,x){const b=x*1.3;for(let M=0;M<h;M++){const v=(b-p[M])/.95;if(v<0||v>1)continue;kn(d[M],m[M],3.2*(1-v));const S=Math.cos(w.T*9+M*1.7),_=$e+Math.sin(w.T*4+M)*8,T=sS[M&3],R=(M&3)<2?iS:Xr.k,C=2,O=Math.max(.2,Math.abs(S));if(g.globalAlpha=v>.8?(1-v)/.2:1,g.fillStyle="#fffaf0",g.fillRect(At(_-7*O),At(Xe-8),At(14*O)||1,16),O>.45){g.fillStyle=R;for(let z=0;z<5;z++)for(let E=0;E<5;E++)T[z][E]==="X"&&g.fillRect(At(_+(E-2.5)*C*O),At(Xe-5+z*C),Math.max(1,At(C*O)),C)}}}});for(let g=0;g<20;g++){const x=Math.random()*ho;I(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,y(.5,1.5),y(.5,.9),g&1?Xr.l:Xr.m,3,-.4,!1,.92)}A({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){b.fired||(b.fired=!0,Q(5))}})};function q2(e,t,n,r,o,i,a,s){const l=Math.cos(r),u=Math.sin(r),f=-u,c=l,h=At(10*i);for(let d=0;d<=h;d++){const m=d/10-.5,p=Math.sin(m*ho)*o*.18;Rl(e,t+l*m*o+f*p,n+u*m*o*.8+c*p,d===h?4:3-Math.abs(m)*2,d===h?s:a)}}Qe.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+y(-.3,.3);if(A({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,a){kn(t,n,.5);const s=Fo(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,q2(i,$e,Xe,o,34,s,Te.m,Te.w),r&&q2(i,$e,Xe,o+1.6,40,s,bn.m,bn.w),a>.2&&(Ia(i,$e+12,Xe-10,4*(1-a)+1,Te.w),Ia(i,$e-10,Xe+6,3*(1-a)+1,Te.l))}}),r){A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){kn(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,Mg(i,$e+a*18,Xe,w.T*30)}});for(let i=0;i<6;i++)I(t,n,.5,y(-1,1),y(-1,1),y(.5,1.4),.5,i&1?bn.l:bn.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)I(t,n,.2,y(-.8,.8),y(-.8,.8),y(.2,.6),.35,Xr.l,3,0,!1,.9)};const rs="#1e0f30",vs="#4b2272",si="#8b3cd2",li="#d6b4ff",Jo="#f6f2ff",Ju="#ff2f5f",_g="#2c1446",xn=Math.round,ga=Math.PI*2,lS=[0,1,2,1];function so(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(xn(t),xn(n),r,o)}function uS(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(xn(t+(r-t)*l/s-i/2),xn(n+(o-n)*l/s-i/2),i,i)}function Ih(e,t,n,r,o,i,a,s){t=xn(t),n=xn(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=a,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=s,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function ia(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,xn(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,p=xn(n+h*s);if(Math.abs(m)>=f){e.fillRect(xn(t-d),p,xn(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(xn(t-d),p,xn(Math.min(x,d)+d),c),b<d){const M=Math.max(b,-d);e.fillRect(xn(t+M),p,xn(d-M),c)}}}function Oh(e,t,n,r,o){const[i,a]=P(t,n),s=r*N.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(xn(i-f),xn(a+u),xn(f*2),2)}}const Ag=e=>{const t=Z(e);return t&&!t.dead&&!He(t)?t:null},fS=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},zh=(e,t=16)=>lS[((w.T*t|0)+e)%4];Qe.murcielago=e=>{const t=y(0,ga),n=e.big?17:13;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,a]=P(e.x,e.y,.5);r.globalAlpha=1-o,ia(r,i,a,n+2,t+o*1.4,.45,si),ia(r,i,a,n,t+o*1.4,.52,Jo)}});for(let r=0;r<5;r++)I(e.x,e.y,.5,y(-2.5,2.5),y(-2.5,2.5),y(0,1),.28,r%2?li:si,2,0,!0,.9)};H.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;A({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),g=Math.max(6,Math.ceil(i*2*p*7)),x=h%2?si:li,b=h%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=g;M++){const v=r-i+2*i*M/g,S=Math.sin(M*1.7+h*2.3+c*40)*.07*(1+m),[_,T]=P(a+Math.cos(v)*(p+S),s+Math.sin(v)*(p+S),l-m*.35);so(u,_-b/2,T-b/2,b,b,x),M===g>>1&&so(u,_-1,T-1,2,2,Jo)}}}}),A({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,g]=P(a+Math.cos(h)*m,s+Math.sin(h)*m);so(u,p-1,g-1,3,2,vs)}}}});for(let u=0;u<14;u++){const f=r+y(-i,i),c=y(.6,o);I(a+Math.cos(f)*c,s+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,y(0,.5),.5,u%3?li:Jo,2,0,!0,.92)}Q(2)};H.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*ga+y(-.2,.2),sp:y(1.2,2.4),up:y(.8,1.8),ph:Math.random()*4|0}));A({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),Oh(r,e.x,e.y,.75*(1-o*.6),rs),r.globalAlpha=.8*(1-o),Oh(r,e.x,e.y,.3*(1-o),_g)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=P(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);Ih(r,l,u,2,zh(a.ph),rs,vs,Ju)}}}),A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=Ag(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=P(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=w.T*5+s*Math.PI;Ih(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,zh(s*2,20),vs,si,Ju)}r.globalAlpha=.35;for(let s=0;s<4;s++)so(r,i-8+s*5,a+26+(w.T*30+s*7)%8,2,2,rs)}});for(let r=0;r<16;r++)I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.2,.8),y(-.5,.5),y(-.5,.5),y(1,2.2),y(.5,.9),r%2?rs:vs,3,0,!1,.95);for(let r=0;r<6;r++)I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.4,1),0,0,y(.5,1.2),.5,li,2,0,!0)};H.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=fS(e),i=o&&o.radius||1.4,a=y(0,ga);let s=!1;A({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=P(t,n);if(c<r){l.globalAlpha=.5,ia(l,h,d,xn(i*26*(1.4-.4*c/r)),a+c*6,.45,vs,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),ia(l,h,d+2,xn(i*30),a+Math.PI*1.1,.42,_g,.5)}}),A({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const c=u*f.dur;if(c<r){const b=Ag(e.uid);if(!b)return;const[M,v]=P(b.x,b.y,.7),[S,_]=P(t,n,.3),T=Math.hypot(S-M,_-v)||1,R=(S-M)/T,C=(_-v)/T;l.globalAlpha=.75;for(let O=0;O<4;O++){const z=(O-1.5)*7,E=18+O%2*12;uS(l,M-C*z-R*8,v+R*z-C*8,M-C*z-R*(8+E),v+R*z-C*(8+E),2,O%2?li:si)}return}const h=(c-r)/.5;if(!s){s=!0,Q(6);for(let b=0;b<22;b++){const M=y(0,ga),v=y(2,5);I(t,n,.45,Math.cos(M)*v,Math.sin(M)*v,y(.3,1.5),y(.3,.55),b%3?li:b%2?Jo:si,2,3,!0,.9)}}const d=Math.min(1,h/.45),[m,p]=P(t,n,.45),g=xn(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),ia(l,m,p,g+3,x,.42,si,.85),ia(l,m,p,g,x,.48,Jo,.85),l.globalAlpha*=.35,ia(l,m,p,g,x-.6,.48,li,.85)}})};H.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*ga,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),h=s.p+l*s.w;return[e.x+Math.cos(h)*c,e.y+Math.sin(h)*c,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:y(.3,n-.4),x:e.x+y(-1,1)*t*.6,y:e.y+y(-1,1)*t*.6}));A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,Oh(s,e.x,e.y,t,rs),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*ga+u*.8,[d,m]=P(e.x+Math.cos(h)*t,e.y+Math.sin(h)*t);so(s,d-1,m-1,c%2?2:3,2,c%2?li:si)}s.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,u),[m,p]=P(h,d);so(s,m-4,p-1,8,2,"#000000")}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of o){const[c,h,d,m]=i(f,u),[p,g]=P(c,h,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),Ih(s,p,g,f.s,zh(f.ph,18),rs,vs,Ju)}}}),A({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=P(f.x,f.y,.55),m=xn(4-c*3);s.globalAlpha=1-c;for(const p of[-1,1]){const g=h+p*4;so(s,g-2,d-6-m,4,2,Jo),so(s,g-1,d-4-m,2,3,Jo),so(s,g-2,d+4+m,4,2,Jo),so(s,g-1,d+1+m,2,3,Jo)}so(s,h-1,d-1,3,3,Ju)}}});for(let s=0;s<20;s++){const l=y(0,ga),u=t*y(.3,1);I(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,y(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,y(0,.6),y(.6,1.1),s%3?si:li,2,0,!0,.97)}Q(5)};const kt=Math.round,zo=Math.PI*2,Ot={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},cS=e=>e*N.HW*Math.SQRT2;function Cl(e,t,n,r){r=Math.max(1,kt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(kt(t[0]+(n[0]-t[0])*s/i-a),kt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function tf(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=kt(n-a*o/2),u=kt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Tg(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+y(-.35,.35),a=t*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function Rg(e,t,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=P(t+r[s][0],n+r[s][1]),f=P(t+r[s+1][0],n+r[s+1][1]);Cl(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const hS=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],dS=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],V2=["t.t.t",".....",".ppp.","ppppp",".ppp."];H.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let g=0;g<p;g++){const x=s+(p===1?0:(g/(p-1)*2-1)*a*.8)+y(-.06,.06),b=d*i/2.5;c.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:y(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>Tg(s+d*a,i*y(.75,1)));A({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,g=Math.min(1,p/f),x=1.5*(1-g*g),[b,M]=P(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),tf(d,hS,b,M,3,{h:Ot.wood,d:Ot.i0,b:Ot.brass,l:Ot.i4,i:Ot.i2}),g<1){d.globalAlpha=.5,d.fillStyle=Ot.i3;for(let v=1;v<=3;v++)d.fillRect(kt(b-15+v*7),kt(M-26-v*8),2,8)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,g]=P(l,u,.1),x=kt(26*(1-m))+4;d.fillStyle=Ot.amberL,d.fillRect(p-x,g-2,x*2,4),d.fillRect(p-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,g-3,10,6)}}),A({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const g=m*1.15;if(g>=f&&!p.hit){p.hit=!0,Q(7);for(let M=0;M<14;M++){const v=s+y(-a,a),S=y(1,3);I(l,u,.1,Math.cos(v)*S,Math.sin(v)*S,y(.3,1),y(.6,.9),M%2?Ot.dust:Ot.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=Ot.e0;for(const M of h)Rg(d,t,n,M,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const M=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=Ot.dust;for(let v=0;v<=16;v++){const S=s-a+2*a*v/16,[_,T]=P(t+Math.cos(S)*M,n+Math.sin(S)*M);d.fillRect(kt(_)-3,kt(T)-2,6,4)}}for(const M of c){const v=(g-M.t0)/.5;if(v<0||v>1)continue;M.done||(M.done=!0,I(M.x,M.y,.2,y(-1,1),y(-1,1),y(3,5),y(.7,1),[Ot.e1,Ot.e2,Ot.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const S=kt(M.h*(v<.2?v/.2:1-(v-.2)/.8)),[_,T]=P(M.x,M.y);d.globalAlpha=1,d.fillStyle=Ot.e0,d.fillRect(kt(_-M.w/2-1),kt(T-2),M.w+2,4),d.fillStyle=Ot.e1,d.fillRect(kt(_-M.w/2),kt(T-S),M.w,S),d.fillStyle=Ot.e3,d.fillRect(kt(_-M.w/2),kt(T-S-5),M.w,5),d.fillStyle=Ot.e2,d.fillRect(kt(_-M.w/2),kt(T-S-1),M.w,1)}}})};function D0(e,t,n,r,o,i){const a=Math.cos(i);return[e+n*Math.cos(o)*a,t+n*.5*Math.sin(o)*a-r*Math.sin(i)]}H.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=Z(t),[l,u]=P(s?s.x:r,s?s.y:o,.6),f=kt(18*(1-a))+3;i.fillStyle=Ot.amber;for(let c=0;c<8;c++){const h=c/8*zo;i.fillRect(kt(l+Math.cos(h)*f*1.4)-2,kt(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*zo;I(e.x,e.y,.6,Math.cos(a)*y(1,3),Math.sin(a)*y(1,3),y(1.5,3),.4,i%2?Ot.brassL:Ot.amber,2,9,!0)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=Z(t),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let _=0;_<16;_++){const T=Math.random()*zo,R=y(1,2.5);I(r+Math.cos(T)*.4,o+Math.sin(T)*.4,y(.2,.8),Math.cos(T)*R,Math.sin(T)*R,y(1.5,3.5),.7,[Ot.i1,Ot.i2,Ot.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)I(r,o,.6,y(-2,2),y(-2,2),y(1,3),.35,Ot.brassL,2,6,!0);s.t=1e9;return}const c=l&&l.scale||1,[h,d]=P(r,o),m=kt(40*c),p=kt(56*c),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!s.done){s.done=!0;const[_,T]=[r,o];for(let R=0;R<6;R++)I(_,T,.75*c,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.3,Ot.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=Ot.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const T=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(kt(h-T),kt(d-_-3),kt(T*2),3)}for(let _=0;_<m*.5;_+=3){const T=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(kt(h-T),kt(d+_),kt(T*2),3)}for(let _=0;_<32;_++){const T=_/32*zo,R=D0(h,d,m,p,T,0),C=Math.sin(T)>0;i.globalAlpha=C?.95:.4,i.fillStyle=C?Ot.i3:Ot.i1,i.fillRect(kt(R[0])-2,kt(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=Ot.i2;for(const _ of[.12,.3,.5,.7,.88]){const T=Math.PI*_;for(let R=0;R<=x;R+=.16){const C=D0(h,d,m,p,T,R);i.fillRect(kt(C[0])-1,kt(C[1])-1,2,3)}}const v=u*14|0;let S=0;for(const _ of[.42,.9])if(!(_>x))for(let T=0;T<=14;T++){const R=Math.PI*T/14,C=D0(h,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=Ot.i3,i.fillRect(kt(C[0])-2,kt(C[1])-1,4,2),T%2===0&&(S++,i.globalAlpha=1,i.fillStyle=S%16===v%16?"#ffffff":Ot.brass,i.fillRect(kt(C[0])-1,kt(C[1])-3,3,3))}if(g>=1){const _=D0(h,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=Ot.i0,i.fillRect(kt(_[0])-5,kt(_[1])-4,10,6),i.fillStyle=Ot.brass,i.fillRect(kt(_[0])-4,kt(_[1])-3,8,4),i.fillStyle=Ot.brassL,i.fillRect(kt(_[0])-3,kt(_[1])-3,3,1)}}})};H.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=P(n,r),c=P(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,m=(c[1]-f[1])/h,p=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const b=x/(g+1),M=x%2?1:-1;p.push({s:b,x:n+s*b-l/u*.17*M,y:r+l*b+s/u*.17*M})}A({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,b){const M=b*(a+2);for(const v of p){const S=M-v.s*a;if(S<0)continue;const[_,T]=P(v.x,v.y);x.globalAlpha=Math.max(0,.7*(1-S/2)),tf(x,V2,_,T,3,{t:Ot.e0,p:Ot.e0}),x.globalAlpha*=.6,tf(x,V2,_-1,T-1,3,{p:Ot.e1})}}}),A({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,b,M){const v=b*(a+.3),S=Z(t),_=Math.min(1,v/a),T=S&&v<a?S.x:n+s*_,R=S&&v<a?S.y:r+l*_;if(v<a){if(M.n=M.n||0,M.n<30){M.n+=2;for(let K=0;K<2;K++)I(T+y(-.2,.2),R+y(-.2,.2),.1,-s/u*y(.5,1.5)+y(-.5,.5),-l/u*y(.5,1.5)+y(-.5,.5),y(.4,1.2),y(.5,.8),K?Ot.e2:Ot.dust,5,-.3,!1,.9)}const[C,O]=P(T,R,.45),z=C+d*26,E=O+m*26,U=-m,G=d;for(let K=0;K<3;K++){const L=K*8+v*120%8;x.globalAlpha=.9-K*.25,x.fillStyle=K?Ot.dust:"#ffffff";const k=[z-d*L,E-m*L];Cl(x,k,[k[0]-d*10+U*13,k[1]-m*10+G*13],3),Cl(x,k,[k[0]-d*10-U*13,k[1]-m*10-G*13],3)}x.globalAlpha=.6,x.fillStyle=Ot.i3;for(let K=0;K<4;K++){const L=(K-1.5)*9,k=14+(K*7+v*200)%12;Cl(x,[C-d*20+U*L,O-m*20+G*L],[C-d*(20+k)+U*L,O-m*(20+k)+G*L],2)}}else{if(!M.end){M.end=!0,Q(5);for(let E=0;E<14;E++){const U=Math.random()*zo,G=y(1.5,3);I(o,i,.15,Math.cos(U)*G,Math.sin(U)*G,y(.8,2),.6,E%2?Ot.dust:Ot.e3,5,2,!1,.9)}}const C=(v-a)/.3,[O,z]=P(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-C;for(let E=0;E<8;E++){const U=E/8*zo+.2,G=6+C*14,K=G+10*(1-C);x.fillStyle=E%2?Ot.amberL:"#ffffff",Cl(x,[O+Math.cos(U)*G,z+Math.sin(U)*G*.7],[O+Math.cos(U)*K,z+Math.sin(U)*K*.7],4)}}}})};H.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(a,s)=>Tg(s/8*zo+y(-.2,.2),o*y(.45,.65),5));Q(10),A({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=P(n,r),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=cS(o)*(.15+.95*(1-(1-h)*(1-h))),m=5-c;a.globalAlpha=1-h;for(let p=0;p<56;p++){if(p%7>=5)continue;const g=p/56*zo+c*.2,x=l+Math.cos(g)*d,b=u+Math.sin(g)*d*.5;a.fillStyle=c===0?Ot.amberL:Ot.amber,a.fillRect(kt(x-m/2),kt(b-m/2),m,m),p%7===2&&(a.fillStyle=Ot.amberD,a.fillRect(kt(x*.94+l*.06-1),kt(b*.94+u*.06-1),3,3))}}}}),A({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=Ot.e0;for(const l of i)Rg(a,n,r,l,Math.min(1,s*7))}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(a,s){const l=Z(t),u=l?l.x:n,f=l?l.y:r,c=l&&l.scale||1,[h,d]=P(u,f,1.7*c+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),tf(a,dS,h,d,m,{e:Ot.amberD,i:Ot.amberL,h:Ot.amber,s:Ot.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const g=34+(s*90+p*22)%66,x=1-(s*90+p*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=Ot.amberL;for(let b=-.7;b<=.71;b+=.175){const M=Math.cos(b)*g,v=Math.sin(b)*g*.8;a.fillRect(kt(h+M)-2,kt(d+6+v)-2,4,4),a.fillRect(kt(h-M)-2,kt(d+6+v)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*zo,l=Math.sqrt(Math.random())*o*.9;I(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,y(2,4),y(.5,.8),[Ot.e1,Ot.e2,Ot.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*zo,l=y(.3,1.2);I(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,y(.8,1.6),y(.8,1.2),Ot.amberL,2,-.3,!0,.98)}};Qe.oso=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,a]=P(t,n,.08),s=kt(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=Ot.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=Ot.dust,r.fillRect(i-s,a-1,kt(s*.7),3),r.fillRect(i+s-kt(s*.7),a-1,kt(s*.7),3);const[u,f]=P(t,n,.5),c=kt(12*(1-o));r.fillStyle=Ot.i3,r.fillRect(u-c-4,f-3,8,6),r.fillRect(u+c-4,f-3,8,6),r.fillStyle=Ot.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(2,3.5),.3,Ot.brassL,2,12,!0);for(let r=0;r<3;r++)I(t,n,.05,y(-1,1),y(-1,1),y(1,2),.45,Ot.e2,3,10,!1)};const mr="#ffffff",gr="#e6eeff",jo="#bfe9ff",la="#7fdcf4",Fh="#3a9ab8",Fn="#fff0b4",Y2="#efe0b8",K2="#c8a878",mS="#34408a",j2="#a9bfdc",pe=Math.round,xa=Math.PI*2;function Ve(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(pe(t),pe(n),r,o)}function ef(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=pe(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(pe(t-a),pe(n+i),a*2,2)}}function ws(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,pe(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,p=pe(n+h*s);if(Math.abs(m)>=f){e.fillRect(pe(t-d),p,pe(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(pe(t-d),p,pe(Math.min(x,d)+d),c),b<d){const M=Math.max(b,-d);e.fillRect(pe(t+M),p,pe(d-M),c)}}}function pS(e,t,n,r,o,i,a){t=pe(t),n=pe(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*s,n-2*r,r*s,2*r),e.fillRect(t+u,n-2*r,r*s,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=a,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function Q2(e,t,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const c=pe(t+u*i-f),h=pe(t+u*i+f),d=pe(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(c,d,h-c,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(c,d,2,2),e.fillRect(h-2,d,2,2)}}function yS(e,t,n,r,o){t=pe(t),n=pe(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const Cg=e=>{const t=Z(e);return t&&!t.dead&&!He(t)?t:null},gS=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},nf=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Pe.polilla_A=(e,t,n,r,o,i)=>{mt(!0);const a=Ht(),s=.65+.35*Math.sin(i*20),l=pe(5+s*3);a.globalAlpha=s,Ve(a,n-l,r-1,l*2,2,la),Ve(a,n-1,r-l,2,l*2,la),a.globalAlpha=1,Ve(a,n-2,r-2,4,4,mr);const u=i*14;Ve(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,Fn),Ve(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,Fn),mt(!1)};Qe.polilla=e=>{A({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.5),i=pe(10*(1-n))+2;t.globalAlpha=1-n,Ve(t,r-i,o-1,i*2,2,gr),Ve(t,r-1,o-i,2,i*2,gr),Ve(t,r-2,o-2,4,4,mr)}});for(let t=0;t<5;t++)I(e.x,e.y,.5,y(-1,1),y(-1,1),y(.2,.8),.6,t%2?Fn:jo,2,.4,!0,.9)};Pe.polilla_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;n=pe(n),r=pe(r),mt(!0);const l=Ht(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),mt(!1),ef(e,n,r,10,Fh),ef(e,n,r,9,gr),ws(e,n,r,9,Math.PI*.85,.55,j2);for(let h=0;h<3;h++){const d=i*2+h*2.1;Ve(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,j2)}Ve(e,n-4,r-5,2,2,mr);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,m=14+h*10;e.globalAlpha=1-d,yS(e,n-f*m,r-c*m-6-d*14,h<2?1:2,h%2?Fn:gr)}e.globalAlpha=1,Math.random()<.4&&I(t.x,t.y,s,y(-.3,.3),y(-.3,.3),-.4,.6,Math.random()<.5?Fn:gr,2,.5,!0,.9)};H.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,a]=P(e.x+t*.4,e.y+n*.4,.75),s=pe(14*(1-o))+2,l=pe(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)Ve(r,i-s,a-1,s*2,2,Fn),Ve(r,i-1,a-s,2,s*2,Fn);else for(let u=1;u<=l;u+=2)Ve(r,i+u,a+u,2,2,Fn),Ve(r,i-u-2,a+u,2,2,Fn),Ve(r,i+u,a-u-2,2,2,Fn),Ve(r,i-u-2,a-u-2,2,2,Fn);Ve(r,i-2,a-2,4,4,mr);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,c=16+u;Ve(r,i+Math.cos(f)*c-1,a+Math.sin(f)*c*.6-1,2,2,u%2?Fn:gr)}}});for(let r=0;r<10;r++)I(e.x+t*.4,e.y+n*.4,.75,t*y(.5,1.5)+y(-.4,.4),n*y(.5,1.5)+y(-.4,.4),y(0,.4),y(.6,1),r%2?Fn:gr,2,.6,!0,.9)};H.polilla_W=e=>{if(e.type==="heal"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),ws(n,o,i,7,-.6,.5,gr);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;Ve(n,o-10+a*10,i+s*50,2,4,a%2?jo:mr)}}});for(let n=0;n<8;n++)I(e.x+y(-.35,.35),e.y+y(-.35,.35),y(1,1.6),0,0,-y(.6,1.2),y(.7,1.1),n%2?gr:Fn,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=Cg(e.uid),i=o?o.x:e.x,a=o?o.y:e.y,[s,l]=P(i,a,2.2),u=r*1.2,f=pe(15*nf(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),ws(n,s,l,f+2,-.7,.5,la),ws(n,s,l,f,-.7,.55,mr);for(let c=0;c<5;c++){const h=w.T*2+c*1.26;(w.T*6+c)%2<1&&Ve(n,s+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,Fn)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=t*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*xa,[f,c]=P(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);Ve(n,f-1,c-1,l%3?2:3,2,l%2?jo:mr)}}}});for(let n=0;n<40;n++){const r=y(0,xa),o=Math.sqrt(Math.random())*t*.9;I(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,y(2.2,3),y(-.15,.15),y(-.15,.15),-y(1.2,2),y(1.1,1.6),[gr,jo,mr,Fn][n%4],2,.4,!0,.99)}};H.polilla_E=e=>{const t=e.dur||3;A({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Cg(e.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?nf(a/.22):1,u=.85+.15*Math.sin(w.T*8),[f,c]=P(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=c-9-3*l,g=f+d*(7+10*l),x=c+9;Q2(n,g,x,10*l*u,8,.4*d,K2,Y2,s),Q2(n,m,p,15*l*u,13,-.45*d,Y2,K2,s),n.globalAlpha=.9*s,l>.5&&(ef(n,m+d*2,p-1,4,mS),Ve(n,m+d*2-1,p-2,2,2,Fn),Ve(n,m+d*2-2,p-3,1,1,mr))}mt(!0);const h=Ht();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(w.T*3+d*.37)%1;p>.3||(h.globalAlpha=(1-p/.3)*s,Ve(h,f+m*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,mr))}mt(!1)}});for(let n=0;n<18;n++){const r=y(0,xa),o=y(1,2.2);I(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.5,.9),n%3?Fn:gr,2,.5,!0,.92)}};const Z2=3.4,Eh=[1,.8,.62,.45,.3,.16];let J2=null,tm=null,em=[],nm=[];function rm(e,t,n,r,o,i,a){const s=w.T,l=io(o);for(let u=0;u<9;u++){const f=u/9*xa+s*.45,c=Math.cos(f),h=Math.sin(f);if(Ni(c,h,0)>0!==i)continue;const d=Math.max(2,pe((4+u%3*3)*Math.sqrt(Math.max(0,1-(c-h)*(c-h)/2))));Xn(t+c*r,n+h*r);const m=.75+.25*Math.sin(s*3+u*1.7),p=pe(zt.x-d/2);for(let g=0;g<6;g++)e.globalAlpha=a*m*Eh[g]*(i?.5:.45),e.fillStyle=g<2?mr:gr,e.fillRect(p,pe(zt.y-l*(g+1)/6),d,pe(l/6)+1)}}H.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=gS(e),r=n&&n.dur||4,o=10,i=t*N.HW*Math.SQRT2,a=t*N.HH*Math.SQRT2,s=Array.from({length:o},(h,d)=>({ox:y(-.6,.6)*t,oy:y(-.6,.6)*t,w:y(.8,1.6),p:y(0,xa),z:y(.6,2.4),ph:d}));let l=0;const u=za(e,r),f=()=>w.T-u.t0,c=h=>Math.min(1,f()/.25,h/.4);A({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(h,d,m){const p=or(u);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=nf(f()/.3),b=Z2*Math.min(1,f()/.4);Xn(e.x,e.y);const M=zt.x,v=zt.y,S=De(t)*x;J2!==h&&(J2=h,em=[{u0:0,fill:Vt(h,Fh,3),a:.5},{u0:.7,fill:Vt(h,la,5),a:.5},{u0:.92,fill:Vt(h,jo,9),a:.55}]),ko(h,M,v,S,S,io(b),!1,em,Eh,g),rm(h,e.x,e.y,t*x,b,!1,g),yi(u,e.x,e.y,t*1.1,12577279,.7*g)}}),A({type:"custom",layer:"ground",add:!0,dur:r+1,x:e.x,y:e.y,draw(h,d,m){const p=or(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=c(p),[b,M]=P(e.x,e.y);h.globalAlpha=.13*x,h.fillStyle=la;for(let v=-a;v<=a;v+=2){const S=i*Math.sqrt(Math.max(0,1-v*v/(a*a)));h.fillRect(pe(b-S),pe(M+v),pe(S*2),2)}h.globalAlpha=.4*x,ws(h,b,M,pe(t*30),-.5,.5,jo,.5),h.globalAlpha=.85*x;for(let v=0;v<40;v++){const S=v/40*xa+g*.35,[_,T]=P(e.x+Math.cos(S)*t,e.y+Math.sin(S)*t);Ve(h,_-1,T-1,2,2,v%4?jo:mr)}}}),A({type:"custom",layer:"top",add:!0,dur:r+1,x:e.x,y:e.y,draw(h,d,m){const p=or(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=c(p),b=nf(g/.3),M=Z2*Math.min(1,g/.4);Xn(e.x,e.y);const v=zt.x,S=zt.y,_=De(t)*b;tm!==h&&(tm=h,nm=[{u0:0,fill:Vt(h,Fh,2),a:.4},{u0:.72,fill:Vt(h,la,3),a:.45},{u0:.93,fill:Vt(h,gr,7),a:.55}]),ko(h,v,S,_,_,io(M),!0,nm,Eh,x),rm(h,e.x,e.y,t*b,M,!0,x),h.globalAlpha=x*.85,h.fillStyle=jo,Pi(h,e.x,e.y,M,t*b,64,2,g*.5,0),h.fillStyle=mr,Pi(h,e.x,e.y,M,t*b,16,3,-g*.8,1),Xn(e.x,e.y,M+.45+Math.sin(g*1.6)*.06),h.globalAlpha=x*.35,ef(h,zt.x,zt.y,26,la),h.globalAlpha=x,ws(h,zt.x,zt.y,18,.9,.55,mr);for(const T of s){const R=g*T.w+T.p,C=e.x+T.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,O=e.y+T.oy+Math.sin(R)*.6,[z,E]=P(C,O,T.z+Math.sin(g*1.7+T.p)*.4);h.globalAlpha=x*Math.min(1,g/.4),pS(h,z,E,2,((w.T*14|0)+T.ph)%4,T.ph%3?gr:mr,jo)}if(l<50&&Math.random()<.3){l++;const T=y(0,xa),R=Math.sqrt(Math.random())*t;I(e.x+Math.cos(T)*R,e.y+Math.sin(T)*R,y(2.5,3.5),0,0,-y(.8,1.4),y(1.5,2.2),l%3?gr:Fn,2,0,!0,.99)}}}),Q(2)};const pt=Math.round,Wn=Math.PI*2,Oi=e=>e*N.HW*Math.SQRT2,lt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},qd=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function Pg(e,t,n,r){r=Math.max(1,pt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(pt(t[0]+(n[0]-t[0])*s/i-a),pt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Kn(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(pt(t-l),pt(n+a),Math.max(1,pt(l*2)),i)}}function ti(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Wn;e.fillRect(pt(t+Math.cos(u)*r-i/2),pt(n+Math.sin(u)*r*.5-i/2),i,i)}}function xS(e,t,n,r=99){let o=null,i=r;for(const a of w.game?w.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function f0(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?lt.skinD:i===1?lt.skin:lt.skinL;for(let a=0;a<=o;a++){const s=n+(r-n)*a/o,l=pt(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(pt(t[a][0]-l/2),pt(t[a][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const a=n+(r-n)*i/o,s=Math.max(2,pt(a*.4)),l=pt(t[i][0]),u=pt(t[i][1]+a*.3);e.fillStyle=lt.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=lt.skinD,e.fillRect(l,u,1,1))}}}function Ig(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,g=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+s*g,e[1]+i*p+l*g])}let[c,h]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);c+=Math.cos(d)*p,h+=Math.sin(d)*p,f.push([c,h])}return f}H.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:r+y(-.9,.9)*o,d:i*y(.45,1),t0:y(0,.12),w:y(0,6),sz:y(6,10),bio:u%4===0}));A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const c of a){const h=(f-c.t0)/.42;if(h<0||h>1.15)continue;const d=1-Math.pow(1-Math.min(1,h),2),m=c.d*d,p=Math.sin(d*Wn+c.w)*.2*d,g=t+Math.cos(c.a)*m-Math.sin(c.a)*p,x=n+Math.sin(c.a)*m+Math.cos(c.a)*p,[b,M]=P(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),v=c.sz*(1-.4*d);l.globalAlpha=h>1?(1.15-h)/.15:1,l.fillStyle=lt.ink,Kn(l,b,M,v,v*.75,2),l.fillStyle=lt.inkV,Kn(l,b-v*.3,M-v*.3,v*.4,v*.3,1),c.bio&&(l.fillStyle=lt.bio,l.fillRect(pt(b+v*.2),pt(M),2,2))}}});const s=a.slice(0,9);A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const c of s){const h=f.t-c.t0-.42;if(h<0)continue;const d=Math.min(1,h*10),m=Math.min(1,(2.6-f.t)/.6),[p,g]=P(t+Math.cos(c.a)*c.d,n+Math.sin(c.a)*c.d),[x,b]=P(t,n),M=x-p,v=b-g,S=Math.hypot(M,v)||1;l.globalAlpha=.85*m;for(let T=0;T<4;T++){const R=(c.sz+2)*(1-T*.22)*d;l.fillStyle=T?lt.inkP:lt.ink,Kn(l,p+M/S*T*7*d,g+v/S*T*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(w.T*4+c.w*3);l.globalAlpha=m*_,l.fillStyle=lt.bio,l.fillRect(pt(p-3),pt(g-1),2,2),l.fillRect(pt(p+4),pt(g+1),2,1),c.bio&&(l.fillStyle=lt.bioL,l.fillRect(pt(p),pt(g-2),1,1))}}});for(let l=0;l<12;l++){const u=r+y(-1,1)*o,f=y(2,4.5);I(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,y(.5,1.8),y(.35,.6),l%3?lt.ink:lt.bio,l%3?3:2,7,l%3===0,.93)}};const os=[];function MS(e){let t=null,n=1.3;for(const r of os){if(r.done||w.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}const Og=e=>P(e.x,e.y,.35);function zg(e,t,n){A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=Z(e);if(!i)return;const a=Og(i),s=P(t,n,.45),l=1-o*o;l<.05||f0(r,Ig(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],w.T,1+o*2),10,3)}})}H.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=os.length-1;o>=0;o--)w.T-os[o].t>3&&os.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:w.T,lx:e.x,ly:e.y,lt:0,done:!1};os.push(r),A({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&w.T-r.lt>.12&&(r.done=!0,zg(r.uid,r.lx,r.ly),a.t=a.dur+1)}});for(let o=0;o<8;o++)I(e.x+t*.3,e.y+n*.3,.3,t*y(.5,1.5)+y(-.6,.6),n*y(.5,1.5)+y(-.6,.6),y(.5,1.5),.4,o%2?lt.sucker:lt.skin,2,5,!1)};Pe.pulpo_W=(e,t,n,r,o,i)=>{const a=MS(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=w.T);const s=a?Z(a.uid):t.src||xS(t.x,t.y,"pulpo",9),l=s&&!s.dead?Og(s):[n-Math.cos(o)*70,r-Math.sin(o)*70];f0(e,Ig(l,[n,r],i),11,3),Math.random()<.25&&I(t.x,t.y,.4,0,0,-.3,.4,lt.bio,2,3,!0)};H.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?Z(e.uid):null,o=r?r.team:null;let i=null,a=1.3;for(const h of w.game?w.game.units:[]){if(h.dead||o&&h.team===o||r&&h===r||h.kind==="tower"||h.kind==="nexus")continue;const d=Math.hypot(h.x-t,h.y-n);d<a&&(a=d,i=h)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const h of os)h.uid===e.uid&&w.T-h.t<1.5&&(!f||h.t>f.t)&&(f=h);f&&!f.done&&(f.done=!0,zg(f.uid,t,n));const c=h=>{const d=s?Z(s):null;return d&&!d.dead?[d.x,d.y]:[h.x,h.y]};A({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),[x,b]=P(p,g),M=Math.min(1,m.t/.12),v=d>.8?(1-d)/.2:1;h.globalAlpha=.9*v,h.fillStyle=lt.ink,Kn(h,x,b,30*M,13*M,2),h.fillStyle=lt.inkP,Kn(h,x,b,20*M,8*M,2),h.fillStyle=lt.bio,ti(h,x,b,30*M,18,2,w.T*2,3)}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),M=w.T;h.globalAlpha=x;const v=[];for(let S=0;S<=16;S++){const _=S/16,T=_*1.15*b,R=Math.max(0,_-.6)/.4,[C,O]=P(p,g,T);v.push([C+u*(20-R*26)+Math.sin(M*5+_*4)*2,O-R*6])}f0(h,v,12,3);for(let S=0;S<2;S++){const[,_]=P(p,g,(.22+S*.3)*b),[T]=P(p,g),R=19-2*Math.sin(M*9+S*2),C=1+.08*Math.sin(M*9);for(let O=0;O<=12;O++){const z=.1*Math.PI+O/12*.8*Math.PI,E=T+Math.cos(z)*R*C,U=_+Math.sin(z)*7;h.fillStyle=lt.skinD,h.fillRect(pt(E)-4,pt(U)-4,8,8),h.fillStyle=lt.skin,h.fillRect(pt(E)-3,pt(U)-3,6,5),O%3===1&&(h.fillStyle=lt.sucker,h.fillRect(pt(E)-1,pt(U)+1,3,2))}}}});for(let h=0;h<10;h++){const d=Math.random()*Wn,m=y(1,2.4);I(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,y(1,2.5),.5,h%3?lt.ink:lt.bio,3,9,h%3===0)}Q(qd(e)?3:1)};function bS(e,t,n,r,o,i){if(r<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=P(t,n,l*r*.75),c=Math.max(0,l-.55)/.45;a.push([u+Math.sin(o*3+i+l*3)*4*l+c*c*10,f+c*c*8])}f0(e,a,8,2)}H.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(s=>({a:s/4*Wn+y(-.3,.3),d:y(.45,.75),ph:Math.random()*Wn})),a=s=>Math.min(1,s/.25,(o-s)/.35);A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=Math.min(1,u.t/.3),[h,d]=P(t,n),m=Oi(r)*c,p=u.t;s.globalAlpha=.6*f,s.fillStyle=lt.navy,Kn(s,h,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=lt.deep,Kn(s,h,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,M=1-b,v=g/3*Wn+p*2.2+b*5,S=h+Math.cos(v)*m*(.08+.9*M),_=d+Math.sin(v)*m*(.08+.9*M)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=M>.6?lt.water:M>.3?lt.bio:lt.bioL;const T=M>.5?4:3;s.fillRect(pt(S)-(T>>1),pt(_)-1,T,2+(M>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=lt.foam,ti(s,h,d,m*.97,56,3,p*1.4,4),s.fillStyle=lt.water,ti(s,h,d,m*.85,40,2,p*1.9,3),s.globalAlpha=f,s.fillStyle=lt.inkV,Kn(s,h,d,19*c,9*c,1),s.fillStyle=lt.abyss,Kn(s,h,d,15*c,7*c,1)}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=w.T;s.globalAlpha=f;for(const h of i){const d=h.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+h.ph))*1.1;bS(s,t+Math.cos(d)*r*h.d,n+Math.sin(d)*r*h.d,m,c,h.ph)}for(let h=0;h<6;h++){const d=u.t*1.5+h/6,m=Math.floor(d),p=d-m,g=q(m*11+h)*Wn,x=r*.3*q(m*5+h*7),[b,M]=P(t+Math.cos(g)*x,n+Math.sin(g)*x,p*.9),v=2+pt(p*3);s.globalAlpha=f*(1-p),s.fillStyle=lt.foam,s.fillRect(pt(b)-v,pt(M),1,2),s.fillRect(pt(b)+v,pt(M),1,2),s.fillRect(pt(b),pt(M)-v,2,1),s.fillRect(pt(b),pt(M)+v,2,1)}}}),A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=P(t,n);s.globalAlpha=1-l,s.fillStyle=lt.foam,ti(s,u,f,Oi(r)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*Wn;I(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,y(1,2.5),.5,s%3?lt.foam:lt.bio,3,8,s%3===0)}};const Lh=new Map;function pl(e,t,n){const r=Z(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=w.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(w.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function vS(e,t,n,r,o){const a=10*r;if(a<1){e.fillStyle=lt.inkL,e.fillRect(pt(t-26),pt(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=lt.inkL,e.fillRect(pt(t-u-2),pt(n+l),pt(u*2+4),2),e.fillStyle=lt.eyeD,e.fillRect(pt(t-u),pt(n+l),pt(u*2),2)}const s=Math.sin(o*.8)*6;e.fillStyle=lt.eye,Kn(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=lt.abyss,e.fillRect(pt(t+s-8),pt(n-2),16,Math.max(2,pt(5*r))),e.fillStyle="#ffffff",e.fillRect(pt(t+s-6),pt(n-Math.min(6,a-1)),3,2)}const Ho=2.5,Zn=.5,Ji=.84,wS=[1,.9,.75,.6,.45],SS=[.85,.75,.62,.5,.38];let Cc=null,Pc=null,om=null,im=null;const am=e=>1-(1-e)*(1-e);function sm(e,t,n,r,o,i,a,s){if(o<.05)return;const l=r*Zn,u=r*(Zn+(Ji-Zn)*Math.min(1,o/Ho)),f=(u-l)/o;for(let c=0;c<14;c++){const h=c/14*Wn;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+c*.37)%1;if(p>.5)continue;const g=h+i*(2.6-1.3*m)+m*2.4,x=Math.cos(g),b=Math.sin(g),M=l+(u-l)*m;Ni(x,b,-f)>0===s&&(Xn(t+x*M,n+b*M,m*o),e.globalAlpha=a*(.45+.55*(1-p*2))*(s?.9:.7),e.fillStyle=m<.3?lt.mag:m<.65?lt.bio:lt.water,e.fillRect(pt(zt.x)-3,pt(zt.y)-1,m<.3?4:6,3))}}}function _S(e){const t={ended:!1,endT:0};Lh.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*Wn,off:Math.random(),sp:y(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*Wn,off:Math.random(),sz:pt(y(4,7))})),u=[0,1,2,3,4].map(c=>({a:c/5*Wn+y(-.2,.2),ph:Math.random()*Wn}));A({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(c,h,d){const m=pl(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=P(r,o),b=Oi(i)*p;c.globalAlpha=.4*m,c.fillStyle=lt.inkP,Kn(c,g,x,b*.95,b*.475,3),c.globalAlpha=.7*m,c.fillStyle=lt.ink,Kn(c,g,x,b*.52,b*.26,3),c.globalAlpha=m,c.fillStyle=lt.abyss,Kn(c,g,x,b*.27,b*.135,2);for(const M of s){const v=(M.off+d.t*M.sp)%1,S=1-v,_=b*(.27+.73*S),T=M.a+v*v*4+d.t*.8,R=g+Math.cos(T)*_,C=x+Math.sin(T)*_*.5,O=g+Math.cos(T-.14)*_*1.04,z=x+Math.sin(T-.14)*_*.52;c.globalAlpha=m*(.3+.7*v),c.fillStyle=S>.6?lt.water:S>.3?lt.bio:lt.mag,Pg(c,[O,z],[R,C],S>.5?2:3)}c.globalAlpha=.8*m,c.fillStyle=lt.inkV,ti(c,g,x,b,64,3,-d.t*.6,4)}});const f={nl:0};A({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(c,h,d){const m=pl(t,n,d);if(m<=0)return;const p=am(Math.min(1,d.t/.55))*(t.ended?m:1);Xn(r,o);const g=zt.x,x=zt.y,b=io(Ho*p);(!Cc||om!==c)&&(om=c,Cc=[{u0:0,fill:Vt(c,lt.deep,11),a:.7},{u0:.45,fill:Vt(c,lt.water,10),a:.7},{u0:.78,fill:Vt(c,lt.bio,9),a:.7},{u0:.93,fill:Vt(c,lt.bioL,12),a:.75}]),ko(c,g,x,De(i*Zn),De(i*(Zn+(Ji-Zn)*p)),b,!1,Cc,wS,m),sm(c,r,o,i,Ho*p,d.t,m,!1),c.globalAlpha=.9*m,c.fillStyle=lt.foam,Pi(c,r,o,Ho*p,i*(Zn+(Ji-Zn)*p),110,4,-d.t*1.3,-1),c.fillStyle=lt.water,Pi(c,r,o,Ho*p-.08,i*(Zn+(Ji-Zn)*p)*.97,60,3,-d.t*1.9,-1),yi(f,r,o,i*1.05,4911328,.55*m)}}),A({type:"custom",layer:"top",add:!0,dur:a,x:r,y:o,draw(c,h,d){const m=pl(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=P(r,o,.04),b=Oi(i)*.28*p,M=w.T;for(let v=0;v<44;v++){const S=v/44*Wn+M*2.5,_=.6+.4*Math.sin(M*20+v*1.7);c.globalAlpha=m*_,c.fillStyle=v%2?lt.bio:lt.mag,c.fillRect(pt(g+Math.cos(S)*b)-1,pt(x+Math.sin(S)*b*.5)-1,3,3)}c.globalAlpha=m*.45,c.fillStyle=lt.bioL;for(let v=0;v<18;v++){const S=Math.PI+v/17*Math.PI;c.fillRect(pt(g+Math.cos(S)*b*1.15),pt(x-14+Math.sin(S)*b*.35),2,2)}}}),A({type:"custom",layer:"top",dur:a,x:r,y:o,draw(c,h,d){const m=pl(t,n,d);if(m<=0)return;const p=w.T,g=Math.min(1,d.t/.5)*(t.ended?m:1);c.globalAlpha=m;for(const S of l){const _=(S.off+d.t*.4)%1,T=1-_,R=S.a+_*5,[C,O]=P(r+Math.cos(R)*i*.95*T,o+Math.sin(R)*i*.95*T,.05+.35*Math.sin(_*Math.PI)),z=Math.max(2,pt(S.sz*(.35+.65*T)));c.fillStyle=lt.ink,c.fillRect(pt(C)-(z>>1)-1,pt(O)-(z>>1)-1,z+2,z+2),c.fillStyle=lt.rock,c.fillRect(pt(C)-(z>>1),pt(O)-(z>>1),z,z),c.fillStyle=lt.rockL,c.fillRect(pt(C)-(z>>1),pt(O)-(z>>1),Math.max(1,z>>1),1)}const x=u.map(S=>({t:S,a:S.a+d.t*.3})).sort((S,_)=>Math.cos(S.a)+Math.sin(S.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:S,a:_}of x){const T=[];for(let R=0;R<=18;R++){const C=R/18,O=i*(.92-.42*C*C),z=_+Math.sin(p*2+S.ph+C*3)*.12*C,E=Math.sin(C*Math.PI*.8)*1.9*g-Math.max(0,C-.8)*1.2*g;T.push(P(r+Math.cos(z)*O,o+Math.sin(z)*O,Math.max(0,E)))}f0(c,T,15*g+2,3)}const b=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,v]=P(r,o,.3);vS(c,M,v,b,p)}}),A({type:"custom",layer:"top",dur:a,x:r,y:o,draw(c,h,d){const m=pl(t,n,d);if(m<=0)return;const p=am(Math.min(1,d.t/.55))*(t.ended?m:1);Xn(r,o);const g=zt.x,x=zt.y,b=io(Ho*p);(!Pc||im!==c)&&(im=c,Pc=[{u0:0,fill:Vt(c,lt.water,4),a:.55},{u0:.5,fill:Vt(c,lt.water,6),a:.6},{u0:.8,fill:Vt(c,lt.bio,8),a:.65},{u0:.93,fill:Vt(c,lt.bioL,12),a:.75}]),ko(c,g,x,De(i*Zn),De(i*(Zn+(Ji-Zn)*p)),b,!0,Pc,SS,m),sm(c,r,o,i,Ho*p,d.t,m,!0),c.globalAlpha=m,c.fillStyle=lt.foam,Pi(c,r,o,Ho*p,i*(Zn+(Ji-Zn)*p),110,4,-d.t*1.3,1),c.fillStyle=lt.bioL,Pi(c,r,o,Ho*p+.04,i*(Zn+(Ji-Zn)*p)*.98,24,2,d.t*2.1,1)}}),Q(qd(e)?6:2)}H.pulpo_R=e=>{if(e.type==="channel"){_S(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[a,s]=P(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=lt.mag,ti(o,a,s,Oi(r)*(.25+.75*l),48,3,i*3),o.fillStyle=lt.bioL,ti(o,a,s,Oi(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*Wn,a=r*y(.6,1);I(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,o%2?lt.inkV:lt.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Lh.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=w.T),Lh.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)I(t+y(-.6,.6),n+y(-.6,.6),.2,y(-1,1),y(-1,1),y(.5,1.5),.6,i%2?lt.ink:lt.inkV,4,2,!1);return}A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.3);if(a<.35){const u=pt(30*(1-a/.35))+2;i.fillStyle=lt.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=lt.mag,ti(i,s,l+20,Oi(r)*u,56,4),i.fillStyle=lt.bio,ti(i,s,l+20,Oi(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*Wn,s=y(2,5);I(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,y(1.5,3.5),y(.5,.9),[lt.ink,lt.inkV,lt.bio,lt.mag][i%4],i%3?3:4,9,i%4>1,.94)}Q(qd(e)?8:3)}};Pe.pulpo_A=(e,t,n,r,o,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(o),l=Math.sin(o);e.fillStyle=lt.ink,Kn(e,n-s*11,r-l*11,3,3,1),Kn(e,n-s*18,r-l*18,2,2,1),e.fillStyle=lt.ink,Kn(e,n,r,a+1,a*.8+1,2),e.fillStyle=lt.inkV,Kn(e,n,r,a-1,a*.8-1,2),e.fillStyle=lt.inkL,e.fillRect(pt(n-3),pt(r-4),3,2),e.fillStyle=lt.bio,e.fillRect(pt(n+2),pt(r+1),2,2),Math.random()<.3&&I(t.x,t.y,t.z||.45,0,0,-.2,.35,lt.ink,2,5,!1)};Qe.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*Wn;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=lt.ink,Kn(o,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*Wn,c=(u%2?13:19)*l;o.fillStyle=lt.ink,Pg(o,[a,s],[a+Math.cos(f)*c,s+Math.sin(f)*c*.75],4),o.fillStyle=lt.inkV,o.fillRect(pt(a+Math.cos(f)*(c+4))-2,pt(s+Math.sin(f)*(c+4)*.75)-2+i*10,4,4)}o.fillStyle=lt.bio,o.fillRect(pt(a-3),pt(s-2),2,2),o.fillRect(pt(a+4),pt(s+2),2,2)}});for(let o=0;o<6;o++)I(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(.8,2),.4,o%3?lt.ink:lt.bio,2,8,o%3===0)};const jt=Math.round,Eo=Math.PI*2,Ft={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},Ic=e=>e*N.HW*Math.SQRT2;function ei(e,t,n,r){r=Math.max(1,jt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(jt(t[0]+(n[0]-t[0])*s/i-a),jt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Ss(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(jt(t-l),jt(n+a),Math.max(1,jt(l*2)),i)}}function kh(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=jt(n-a*o/2),u=jt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Ks(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Eo;e.fillRect(jt(t+Math.cos(u)*r-i/2),jt(n+Math.sin(u)*r*.5-i/2),i,i)}}const yl=new Map;function AS(e){if(yl.has(e))return!1;if(yl.size>300)for(const[t,n]of yl)w.T-n>4&&yl.delete(t);return yl.set(e,w.T),!0}function TS(e){const t=w.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||He(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const lm=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],RS=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Fg(e,t,n,r){kh(e,lm,t+1,n+1,r,{g:Ft.deep,v:Ft.deep}),kh(e,lm,t,n,r,{g:Ft.pad,v:Ft.moss})}function CS(e,t){const n=Math.random()*6;A({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,a]=P(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=Ft.waterD,Ks(r,i,a,8+o*14,10,2,n,3),Fg(r,i,a+jt(Math.sin(o*9+n)),o<.55?2:1)}})}function PS(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[t+o*l,n+i*l];e.fillStyle=Ft.ink,ei(e,a(-11),a(11),5),e.fillStyle=Ft.moss,ei(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",ei(e,a(0),a(8),3),e.fillStyle="#ffffff",ei(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(jt(s[0]-2),jt(s[1]-2),4,4),e.fillStyle=Ft.ink,e.fillRect(jt(s[0]-1),jt(s[1]-1),2,2)}function Eg(e,t){A({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=Ft.foam,Ks(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=Ft.water,Ks(n,o,i,3+r*16,10,2)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=jt(12*(1-r))+2;n.fillStyle=Ft.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*Eo,o=y(.8,2);I(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,y(1.5,3),.5,n%3?Ft.water:Ft.padL,2,9,!1,.95)}}const gl=new Map;function IS(e){let t=gl.get(e.id);if(!t&&(t={p:[],drop:0,seen:w.T},gl.set(e.id,t),gl.size>40))for(const[n,r]of gl)w.T-r.seen>2&&gl.delete(n);return t.seen=w.T,t}H.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=P(r,o,.55),u=jt(9*(1-a))+2;i.fillStyle=Ft.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(s-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)I(r,o,.5,t*y(2,4)+y(-.7,.7),n*y(2,4)+y(-.7,.7),y(.6,1.6),.4,i%2?Ft.water:Ft.padL,2,6,!1,.9)};Pe.rana_Q=(e,t,n,r,o,i)=>{const a=t.z||.45,s=IS(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,CS(t.x,t.y)),mt(!0);const l=Ht();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?Ft.padL:Ft.pad,ei(l,P(s.p[u-1][0],s.p[u-1][1],a),P(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));if(l.globalAlpha=1,mt(!1),PS(e,n,r,i*26),t.id!=null)for(const u of TS(t))AS("rq"+t.id+":"+u.id)&&Eg(u.x,u.y)};function OS(e,t,n){const r=Array.from({length:5},(i,a)=>({a:a/5*Eo+y(-.3,.3),d:n*y(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*Eo,h:y(26,44),w:Math.random()<.5?4:6}));A({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,Q(4),So({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*Eo,d=y(1,3.2);I(e+Math.cos(h)*.3,t+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,y(2.5,5),y(.5,.8),c%4?Ft.foam:Ft.water,3,12,!1,.97)}for(let c=0;c<6;c++)I(e+y(-.6,.6),t+y(-.6,.6),.1,y(-.4,.4),y(-.4,.4),y(1,2),.7,Ft.mud,4,8,!1)}const[l,u]=P(e,t),f=Ic(n);i.globalAlpha=.35*(1-a),i.fillStyle=Ft.waterD,Ss(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=a*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?Ft.foam:Ft.water,Ks(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const c of r){const h=Ic(c.d)*(.6+a*.4);Fg(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(a*10+c.ph)*1.5,2)}a>.08&&kh(i,RS,l,u-4,a<.2?2:3,{g:Ft.moss,p:Ft.pink,P:Ft.pinkL,y:Ft.eye})}}),A({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=Ic(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const c of o){const h=s+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,m=jt(c.h*f),p=Math.cos(c.a)*a*10;m<2||(i.fillStyle=Ft.waterD,i.fillRect(jt(h-c.w/2+p*.5),jt(d-m),c.w,m),i.fillStyle=Ft.water,i.fillRect(jt(h-c.w/2+p*.5),jt(d-m),c.w-2,m-2),i.fillStyle=Ft.foam,i.fillRect(jt(h-c.w/2+p-1),jt(d-m-3),c.w+2,4))}}})}H.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,a=1.7,s=r-t,l=o-n,u=Math.hypot(s,l)||1;A({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,c){const[h,d]=P(t,n);f.globalAlpha=1-c,f.fillStyle=Ft.waterD,Ks(f,h,d,10+c*34,18,3,0,3),f.fillStyle=Ft.foam,Ks(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)I(t,n,.15,-s/u*y(1,2.5)+y(-.8,.8),-l/u*y(1,2.5)+y(-.8,.8),y(1.5,3),.5,f%3?Ft.mud:Ft.water,3,9,!1);A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),m=c>.75?(1-c)*4:1;for(let p=d;p<=h;p+=.05){const[g,x]=P(t+s*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,h-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=Ft.deep,f.fillRect(jt(g)-3,jt(x)-3,6,6),f.fillStyle=b>.7?Ft.padL:Ft.pad,f.fillRect(jt(g)-2,jt(x)-2,4,4)}}}),A({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,OS(r,o,a))}})};H.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,a)=>{const s=a/9*Eo+y(-.3,.3),l=a===0?0:y(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:y(14,22),z:y(.15,.6),up:y(.2,.5),col:[Ft.smokeA,Ft.smokeB,Ft.smokeC][a%3],dl:y(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:y(.3,.6)}));A({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.2),u=jt(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=Ft.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),A({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,c]=P(l.x,l.y,l.z+l.up*u),h=jt(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Ss(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,Ss(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",Ss(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,c]=P(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=jt(f+d*6)-3,p=jt(c)-3;if(i.fillStyle=Ft.deep,i.fillRect(m-1,p-1,8,h?3:7),h){i.fillStyle=Ft.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=Ft.eye,i.fillRect(m,p,6,5),i.fillStyle=Ft.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*Eo,s=y(1,2.6);I(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,y(1,2.5),.6,i%2?Ft.ink:Ft.moss,2,7,!1,.92)}};function zS(e,t,n,r){A({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const a=P(e,t,.35),s=P(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?Ft.ink:Ft.moss;for(let c=u;c<=l;c+=.03){const h=jt((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*c,m=a[1]+(s[1]-a[1])*c+Math.sin(c*14)*1.5;o.fillRect(jt(d-h/2),jt(m-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();I(e+(n-e)*i,t+(r-t)*i,.35,y(-.6,.6),y(-.6,.6),y(.2,1),.5,Ft.ink,3,6,!1)}}function um(e,t,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?Ft.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,p=Math.max(1,jt(h*(1-Math.abs(d/u*2-1))));e.fillRect(jt(t+s*m*o/2-p/2+c),jt(n+l*m*o/2-p/2+c),p,p)}}}function FS(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+y(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));A({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const a=i*.5,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),um(o,s+u.ox,l+u.oy,u.a,u.len,jt(6*h)+1,c),um(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,jt(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const a=i*.4,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const c=jt(16*(1-f/.1))+2;o.fillStyle=Ft.padL,o.fillRect(s+u.ox-c,l+u.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*Eo,i=y(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:y(5,11),drips:[y(-1,1),y(-1,1),y(-1,1)]}});A({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=P(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=Ft.inkP,Ss(o,s,l,u,u*.5,2),o.fillStyle=Ft.ink,Ss(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(jt(s+f*u*1.8),jt(l+f*u*.6),3,2);o.fillStyle=Ft.moss,o.fillRect(jt(s+u*.4),jt(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*Eo,a=y(1.5,4.5);I(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,y(1,3),y(.4,.7),o%5?Ft.ink:Ft.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*Eo;I(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,Ft.padL,2,0,!0)}Q(8)}H.rana_R=e=>{if(e.type==="blink"){zS(e.x,e.y,e.ex??e.x,e.ey??e.y);return}FS(e.x,e.y)};Qe.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],c=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];o.fillStyle=Ft.moss,ei(o,u,h,5),l>=.35&&ei(o,f,d,5),o.fillStyle="#ffffff",ei(o,u,h,2),l>=.35&&ei(o,f,d,2)}});for(let o=0;o<5;o++)I(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.35,o%2?Ft.water:Ft.padL,2,8,!1)};H.rana_Q_hit=e=>Eg(e.x,e.y);const ES="#7a879c",LS="#363e50",kS="#c9d3e2",fm="#e8b858",DS="#ffa040",Lg="#f2e8d2",n0="#cdbb9a",Vd="#a08f72",kg="#6f6250",js="#33241a",US="#8a7356",Dg="#9a948a",Ug="#7a7468",Xg="#5e584e",XS="#c4beb2",GS="#ffe2a0",NS="#d89a3a",BS="#fff8e6",$S="#ff5a1a",je=Math.round,Oc=Math.PI*2;function Nn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(je(t),je(n),r,o)}function U0(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(je(t+(r-t)*l/s-i/2),je(n+(o-n)*l/s-i/2),i,i)}function cm(e,t,n,r,o){const[i,a]=P(t,n),s=r*N.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(je(i-f),je(a+u),je(f*2),2)}}function Gg(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Ng=e=>{const t=Z(e);return t&&!t.dead&&!He(t)?t:null},rf=()=>[Dg,Ug,Xg,Vd][Math.random()*4|0];function HS(e,t,n,r,o){if(t=je(t)-6,n=je(n)-5,Nn(e,t,n,12,10,LS),Nn(e,t+1,n+1,10,8,ES),Nn(e,t+1,n+1,10,2,kS),Nn(e,t+2,n+6,2,2,o),Nn(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Nn(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const WS=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],qS=[GS,NS,BS,$S];function zc(e,t,n,r,o){t=je(t),n=je(n);for(const[i,a,s,l,u]of WS){const f=o>0?i:-i-s;e.fillStyle=qS[u],e.fillRect(t+f*r,n+a*r,s*r,l*r)}}Qe.rino=e=>{A({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.4),i=je(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;Nn(t,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":Lg)}}});for(let t=0;t<3;t++)I(e.x,e.y,.3,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,rf(),3,10,!1,.95);for(let t=0;t<2;t++)I(e.x+y(-.2,.2),e.y+y(-.2,.2),.1,y(-.4,.4),y(-.4,.4),.5,.5,n0,5,0,!1,.9);Q(1.5)};H.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[c,h]=Gg(o,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(M,v)=>y(-.06,.06)+(v%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:y(.15,.35)}:null),g=Array.from({length:8},(M,v)=>({k:(v+.5)/8,o:y(-.35,.35),r:Array.from({length:4},()=>[y(-10,6),y(-8,2),je(y(6,12)),je(y(5,8)),[n0,Vd,n0,kg][Math.random()*4|0]])}));let x=0,b=!1;A({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(M,v,S){const _=v*S.dur,T=Math.min(1,_/r),R=Math.floor(T*d);M.globalAlpha=.8*Math.min(1,(S.dur-_)/.6);for(const C of[-.3,.3]){const O=C>0?1:-1;let[z,E]=P(e.x+s*C,e.y+l*C);for(let U=1;U<=R;U++){const G=U/d,K=C+m[U]*O,[L,k]=P(e.x+o*G+s*K,e.y+i*G+l*K);U0(M,z,E+1,L,k+1,2,US),U0(M,z,E,L,k,2,js);const D=p[U];if(D&&D.s===O){const[$,W]=P(e.x+o*G+s*(K+O*D.l)+u*D.l*.5,e.y+i*G+l*(K+O*D.l)+f*D.l*.5);U0(M,L,k,$,W,1,js)}z=L,E=k}}}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(M,v,S){const _=v*S.dur,T=Math.min(1,_/r);for(;x<18*T;){x++;const R=Math.random()*T;I(e.x+o*R+y(-.3,.3),e.y+i*R+y(-.3,.3),.1,-u*y(.5,2)+y(-1,1),-f*y(.5,2)+y(-1,1),y(2,4),y(.5,.8),rf(),3,12,!1,.95)}if(_>=r&&!b){b=!0,Q(5);for(let R=0;R<12;R++){const C=Math.atan2(f,u)+y(-.9,.9),O=y(2,4.5);I(t+u*.5,n+f*.5,.2,Math.cos(C)*O,Math.sin(C)*O,y(2,4),y(.5,.8),rf(),3,12,!1,.95)}}for(const R of g){const C=_-R.k*r;if(C<0||C>.9)continue;const O=C/.9,z=1+O*1.2,[E,U]=P(e.x+o*R.k+s*R.o,e.y+i*R.k+l*R.o,.15+O*.5);M.globalAlpha=.6*(1-O);for(const G of R.r)Nn(M,E+G[0]*z,U+G[1]*z,je(G[2]*z),je(G[3]*z),G[4])}}}),A({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(M,v,S){const _=Ng(e.uid);if(!_)return;const T=v*S.dur;M.globalAlpha=T>r?Math.max(0,1-(T-r)/.08):1;const[R,C]=P(_.x+u*.6,_.y+f*.6,.45);for(let E=0;E<6;E++){const U=7-E;Nn(M,R+c*E*2.5-U/2,C+h*E*2.5-U/2,U,U,E<2?Lg:"#ffffff")}const[O,z]=P(_.x,_.y,.5);M.globalAlpha*=.6;for(let E=0;E<5;E++){const U=(E-2)*9,G=24+E*13%3*10;U0(M,O-h*U-c*26,z+c*U-h*26,O-h*U-c*(26+G),z+c*U-h*(26+G),1,"#fff6e0")}}})};H.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=Ng(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=P(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)I(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,y(-2,2),y(-2,2),y(1,2.5),.3,M?DS:fm,2,8,!0,.9)}const p=(1-m)*(1-m)*46,g=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,HS(i,g+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,je((w.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":fm)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),Q(3)};H.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Oc+y(-.08,.08),j:y(.9,1.08),w:je(y(4,7)),h:je(y(3,6)),col:[Dg,Ug,Xg][i%3]}));A({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,cm(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,cm(o,e.x,e.y,.4,"#24180e");for(const[f,c,h]of[[.45,js,2],[.7,js,2],[.95,n0,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*Oc,[p,g]=P(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Nn(o,p-h/2,g-1,h,2,c)}}for(const f of r){const[c,h]=P(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,Nn(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=u,Nn(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),Nn(o,c-f.w/2,h-f.h-d,f.w,1,XS)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[a,s]=P(e.x,e.y,.05),l=je(30+110*i);o.globalAlpha=1-i,Nn(o,a-l,s-1,l*2,2,"#fff2d0"),Nn(o,a-l*.6,s-3,je(l*1.2),1,"#ffd890");for(const u of[-1,1])Nn(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=y(0,Oc),a=t*y(1.5,2.5);I(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,y(3,6),y(.5,.9),rf(),Math.random()<.3?4:3,14,!1,.96)}Q(8)};H.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[e.x+Math.cos(u.a)*h,e.y+Math.sin(u.a)*h,c,h]};A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,m]=P(e.x,e.y);u.moveTo(je(d),je(m));for(let p=0;p<=12;p++){const g=r-i+2*i*p/12;[d,m]=P(e.x+Math.cos(g)*o,e.y+Math.sin(g)*o),u.lineTo(je(d),je(m))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const p of s){const[,,,g]=l(p,c),x=p.a+Math.PI/2;for(let b=.6;b<g;b+=.55){const M=Math.round(b/.55)%2?.12:-.12,[v,S]=P(e.x+Math.cos(p.a)*b+Math.cos(x)*M,e.y+Math.sin(p.a)*b+Math.sin(x)*M);Nn(u,v-4,S-1,3,3,js),Nn(u,v+1,S-1,3,3,js)}}}}),A({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const c=f*a;for(const h of s){const[d,m,p]=l(h,c);if(c<h.del)continue;const g=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(g<=0)continue;const[x,b]=P(d,m,.55),[M]=Gg(Math.cos(h.a),Math.sin(h.a)),v=M>=0?1:-1,S=p<.5?3:4,[_,T]=P(e.x,e.y,.55),R=x-_,C=b-T;u.globalAlpha=g*.18,zc(u,x-R*.35,b-C*.35,S,v),u.globalAlpha=g*.35,zc(u,x-R*.17,b-C*.17,S,v),u.globalAlpha=g,zc(u,x,b,S,v)}}});for(let u=0;u<40;u++){const f=r+y(-i,i),c=y(.4,o*.8),h=y(2,5);I(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,y(.5,1.5),y(.5,.9),[n0,Vd,kg][u%3],4,3,!1,.9)}Q(10)};const j=Math.round,rr=Math.PI*2,Dh=e=>e*N.HW*Math.SQRT2,J={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},Cf=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function Bl(e,t,n,r){r=Math.max(1,j(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(j(t[0]+(n[0]-t[0])*s/i-a),j(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Tr(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(j(t-l),j(n+a),Math.max(1,j(l*2)),i)}}function Bg(e,t,n,r=99){let o=null,i=r;for(const a of w.game?w.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function VS(e,t,n,r=1.6){let o=null,i=r;for(const a of w.game?w.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}const Pf=e=>P(e.x,e.y,.5);function If(e,t,n,r,o,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,c=Math.max(2,Math.ceil(l/3)),h=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+a*d+u*p,t[1]+s*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?J.tongueD:d===1?J.tongue:J.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=c;p++){const g=p/c,x=h(g),b=d===2?m:Math.max(2,j(m*(1-g*.3)));e.fillRect(j(x[0]-b/2),j(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=h(d/l),p=j(m[0]),g=j(m[1]);e.fillStyle=J.ink,e.fillRect(p-2,g-5,5,10),e.fillStyle=J.iron,e.fillRect(p-1,g-4,3,8),e.fillStyle=J.ironL,e.fillRect(p-1,g-4,1,3)}}const Fc=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function Yd(e,t,n,r,o=1.5){const i=Math.cos(r),a=Math.sin(r),s=d=>[t+(i*d[0]-a*d[1])*o,n+(a*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?J.ink:d===1?J.iron:J.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<Fc.length;p++)Bl(e,s(Fc[p-1]),s(Fc[p]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=J.ink,Bl(e,l,u,4),e.fillStyle=J.ironL,Bl(e,l,u,2),e.fillStyle=J.rust;const f=s([7.5,5]),c=s([-3,0]);e.fillRect(j(f[0]),j(f[1]),2,2),e.fillRect(j(c[0]),j(c[1])-1,3,2);const h=s([-12.5,0]);e.fillStyle=J.ink,e.fillRect(j(h[0])-5,j(h[1])-5,10,10),e.fillStyle=J.rust,e.fillRect(j(h[0])-4,j(h[1])-4,8,8),e.fillStyle=J.ink,e.fillRect(j(h[0])-2,j(h[1])-2,4,4)}const is=[];function YS(e){let t=null,n=1.3;for(const r of is){if(r.done||w.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}function KS(e,t,n){A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=Z(e);if(!i)return;const a=Pf(i),s=P(t,n,.45),l=1-o*o,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&If(r,a,u,w.T,4*l,3*l),Yd(r,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-o*.4)}})}function jS(e,t){A({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=J.slimeL;for(let a=0;a<10;a++){const s=a/10*rr+r;n.fillRect(j(o+Math.cos(s)*(8+r*26))-1,j(i+Math.sin(s)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)I(e,t,.5,y(-1.2,1.2),y(-1.2,1.2),y(1,2.4),.45,n%2?J.slime:J.tongueL,3,9,!1)}function QS(e){let t=null;for(const c of is)!c.pulled&&c.team===e.team&&w.T-c.t<2.2&&(!t||c.t>t.t)&&(t=c);t&&(t.pulled=!0,t.done=!0);const n=t?Z(t.uid):Bg(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];A({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(c,h,d){const m=Z(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const g=1-(d.t-p[2])/1.1;if(!(g<=0)){c.globalAlpha=g*.9;for(const x of[-1,1]){const[b,M]=P(p[0]+l*x,p[1]+u*x);c.fillStyle=J.mud,c.fillRect(j(b)-2,j(M)-1,5,3),c.fillStyle=J.slime,c.fillRect(j(b)-1,j(M)-2,2,1)}}}}}),A({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(c,h,d){const m=Z(o),p=r?Z(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){jS(m.x,m.y),d.t=d.dur+1;return}const x=Pf(p),b=P(m.x,m.y,.5);If(c,x,b,w.T,1.2,2),Yd(c,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),Q(Cf({uid:r})?5:2)}H.sapo_Q=e=>{if(e.type==="hook_pull"){QS(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=is.length-1;a>=0;a--)w.T-is[a].t>3&&is.splice(a,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:w.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};is.push(r),A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&w.T-r.lt>.12&&(r.done=!0,r.pulled||KS(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)I(o,i,.5,t*y(1.5,3.5)+y(-.8,.8),n*y(1.5,3.5)+y(-.8,.8),y(.8,2),.45,a%3?J.slime:J.tongueL,2+a%2,8,!1);A({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(a,s){const[l,u]=P(o,i,.5),[f,c]=P(o+t,i+n,.5),h=f-l,d=c-u,m=Math.hypot(h,d)||1;a.globalAlpha=1-s,a.fillStyle=J.fat;for(let p=-1;p<=1;p++)Bl(a,[l-d/m*p*7,u+h/m*p*7],[l+h*(.3+s*.5)-d/m*p*7,u+d*(.3+s*.5)+h/m*p*7],2)}})};Pe.sapo_Q=(e,t,n,r,o,i)=>{const a=YS(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=w.T);const s=a?Z(a.uid):t.src||Bg(t.x,t.y,"sapo",11);s&&!s.dead&&If(e,Pf(s),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),Yd(e,n,r,o),Math.random()<.3&&I(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?J.slime:J.tongueL,2,6,!1)};H.sapo_Q_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,a]=P(t,n,.5);for(let l=0;l<10;l++){const u=l/10*rr+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?J.fat:J.meatL,Bl(r,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const s=j(10*(1-o))+2;r.fillRect(i-s/2,a-s/2,s,s)}});for(let r=0;r<14;r++){const o=Math.random()*rr,i=y(1,3);I(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3.5),y(.5,.8),[J.meat,J.meatL,J.fat,J.slime][r%4],r%3?3:4,11,!1,.95)}};const Uh=new Map;function $g(e){const t={ended:!1,endT:0};return Uh.set(e.uid+"_"+e.key,t),t}function Hg(e){const t=Uh.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=w.T),Uh.delete(e.uid+"_"+e.key)}function as(e,t,n){const r=Z(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=w.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(w.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function ZS(e){const t=$g(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,a=l=>{const u=Z(n);return u?[u.x,u.y]:[l.x,l.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const c=as(t,n,f);if(c<=0)return;const[h,d]=a(f),[m,p]=P(h,d),g=Dh(o),x=w.T;l.globalAlpha=.22*c,l.fillStyle=J.gasD,Tr(l,m,p,g*.95,g*.475,3);for(let b=0;b<6;b++){const M=b/6*rr+x*.25,v=g*(.4+.35*q(b+i));l.globalAlpha=.3*c,l.fillStyle=b%2?J.gas:J.gasD,Tr(l,m+Math.cos(M)*v,p+Math.sin(M)*v*.5,18+4*Math.sin(x*2+b),8,2)}for(let b=0;b<44;b++){const M=b/44*rr-x*.4,v=g*(.95+.05*Math.sin(M*5+x*3));l.globalAlpha=.85*c,l.fillStyle=b%3?J.gas:J.gasL,l.fillRect(j(m+Math.cos(M)*v)-1,j(p+Math.sin(M)*v*.5)-1,3,3)}for(let b=0;b<5;b++){const M=x*1.3+b*.2,v=Math.floor(M),S=M-v,_=q(v*13+b+i)*rr,T=g*(.15+.75*q(v*7+b*3+i)),R=m+Math.cos(_)*T,C=p+Math.sin(_)*T*.5;l.globalAlpha=c,l.fillStyle=S>.85?J.gasL:J.gas;const O=S>.85?4+(S-.85)*60:2+S*6;for(let z=0;z<8;z++){const E=z/8*rr;l.fillRect(j(R+Math.cos(E)*O)-1,j(C+Math.sin(E)*O*.6)-1,2,2)}}}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const c=as(t,n,f);if(c<=0)return;const[h,d]=a(f),[m,p]=P(h,d),g=Dh(o),x=w.T;for(let v=0;v<10;v++){const S=q(v*7.3+i),_=(x*.7+S)%1,T=v/10*rr+S*2,R=g*(.15+.7*q(v*3.1+i)),C=m+Math.cos(T)*R,O=p+Math.sin(T)*R*.5;l.globalAlpha=c*Math.sin(_*Math.PI)*.9,l.fillStyle=v%2?J.gasL:J.gas;for(let z=0;z<7;z++)l.fillRect(j(C+Math.sin(z*.9+x*6+v)*4)-1,j(O-8-_*46-z*5),3,4)}const[b,M]=P(h,d,.9);for(let v=0;v<5;v++){const S=v*1.7+i,_=b+Math.sin(x*(3.1+v*.4)+S)*(20+v*7),T=M-v*4+Math.sin(x*(6.2+v*.3)+S*2)*10;l.globalAlpha=c,l.fillStyle=J.fly,l.fillRect(j(_),j(T),3,2),l.fillStyle="#eaf4ff";const R=((x*36|0)+v)%2;l.fillRect(j(_)-1,j(T)-1-R,2,1),l.fillRect(j(_)+2,j(T)-1-R,2,1)}}});const s={nl:0};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const c=as(t,n,f);if(c<=0)return;const[h,d]=a(f),m=Math.min(1,f.t/.5);Xn(h,d);const p=zt.x,g=zt.y;dm!==l&&(dm=l,pm=[{u0:0,fill:Vt(l,J.gasD,4),a:.45},{u0:.7,fill:Vt(l,J.gas,5),a:.45},{u0:.92,fill:Vt(l,J.gasL,7),a:.5}]),ko(l,p,g,De(o),De(o*(1+.15*m)),io(Xh*m),!1,pm,hm,c),gm(l,h,d,o,m,c,!1,i),yi(s,h,d,o*.9,12107840,.35*c)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const c=as(t,n,f);if(c<=0)return;const[h,d]=a(f),m=Math.min(1,f.t/.5);Xn(h,d);const p=zt.x,g=zt.y;mm!==l&&(mm=l,ym=[{u0:0,fill:Vt(l,J.gas,2),a:.4},{u0:.7,fill:Vt(l,J.gas,3),a:.45},{u0:.92,fill:Vt(l,J.gasL,6),a:.5}]),ko(l,p,g,De(o),De(o*(1+.15*m)),io(Xh*m),!0,ym,hm,c),gm(l,h,d,o,m,c,!0,i)}})}const Xh=1.6,hm=[1,.75,.5,.3,.14];let dm=null,mm=null,pm=[],ym=[];function gm(e,t,n,r,o,i,a,s){const l=w.T;for(let u=0;u<12;u++){const f=u/12*rr+l*.3+q(u+s)*.4;for(let c=0;c<10;c++){const h=(c/10+l*.55+q(u*3+s))%1;if(h>o)continue;const d=f+Math.sin(l*3+h*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(Ni(m,p,0)>0!==a)continue;const g=r*(1+.15*h);Xn(t+m*g,n+p*g,h*Xh);const x=h>.6?2:h>.3?3:4;if(e.globalAlpha=i*(1-h)*(a?.85:.65),e.fillStyle=u+c&1?J.gas:J.gasL,e.fillRect(j(zt.x)-(x>>1),j(zt.y)-(x>>1),x,x+1),h>.82){const b=(h-.82)/.18;for(let M=0;M<4;M++){const v=M*1.4+b*4;e.fillRect(j(zt.x+Math.cos(v)*(2+M)),j(zt.y-3-M*2+Math.sin(v)*2),2,2)}}}}}function Gh(e,t,n,r){A({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=Dh(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const c=f/26*rr,h=f%2?4:3;i.fillStyle=f%4?J.gas:J.gasL,i.fillRect(j(s+Math.cos(c)*u)-2,j(l+Math.sin(c)*u*.5)-1,h,3)}r&&(i.fillStyle=J.gasD,Tr(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const a=Math.random()*rr,s=y(.5,r?2.4:1.4);I(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,y(.4,1.4),y(.6,1),i%2?J.gas:J.gasL,r?5:4,-.6,!1,.9)}}H.sapo_W=e=>{if(e.type==="channel"){ZS(e);return}const t=Z(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Gh(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(Hg(e),Gh(n,r,1.4,e.kind==="done"))};H.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const a=Z(t);return a&&!a.dead?a:null};A({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,c]=P(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),h=j(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=J.bellyD,Tr(i,f,c+1,h+2,h*.8+2,2),i.fillStyle=J.belly,Tr(i,f,c,h,h*.8,2),i.fillStyle="#ffffff",i.fillRect(j(f-h*.4),j(c-h*.5),3,2)}}),A({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const[u,f]=P(l.x,l.y);i.globalAlpha=1-a;for(let c=0;c<2;c++){const h=14+(a*1.2-c*.2)*52;if(!(h<14)){i.fillStyle=c?J.slime:J.belly;for(let d=0;d<22;d++){const m=d/22*rr;i.fillRect(j(u+Math.cos(m)*h)-2,j(f+Math.sin(m)*h*.45)-1,4,3)}}}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,p=l?l.y:s.y;for(let g=0;g<16;g++){const x=g/16*rr;I(m,p,.5,Math.cos(x)*y(1,2.6),Math.sin(x)*y(1,2.6),y(1,2.5),.5,g%2?J.slime:J.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,c]=P(l.x,l.y,.45),h=w.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=J.belly,Tr(i,f,c+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*rr,g=Math.sin(p*3+h*6+r)*2.5+Math.sin(p*5-h*4)*1.5,x=f+Math.cos(p)*(30+g),b=c+Math.sin(p)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?J.slimeL:J.slime,i.fillRect(j(x)-1,j(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*rr+h*.6,g=f+Math.cos(p)*31,x=c+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=J.skinD,i.fillRect(j(g)-2,j(x)-2,5,5),i.fillStyle=J.wart,i.fillRect(j(g)-1,j(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(j(f-18),j(c-26),4,2),i.fillRect(j(f-21),j(c-23),2,4),Math.random()<.12&&I(l.x+y(-.25,.25),l.y+y(-.25,.25),.15,0,0,-.2,.5,J.slime,2,4,!1)}})};const JS=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function t6(e,t,n,r,o){e.globalAlpha=r;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?J.skinD:s<12?J.skinL:J.skin,e.fillRect(j(t-l),j(n-s-2),j(l*2),2)}e.fillStyle=J.skinD;for(let s=0;s<7;s++)e.fillRect(j(t-36+q(s)*72),j(n-14-q(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=J.skin,Tr(e,l,u,12,10,2),e.fillStyle=J.eye,Tr(e,l,u-1,8,7,2),e.fillStyle=J.ink,e.fillRect(j(l-5+Math.sin(o*2)*1.5),j(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(j(l-4),j(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=J.ink,e.fillRect(j(l)-1,j(n)-1,7,8),e.fillStyle=J.teeth,e.fillRect(j(l),j(n),5,6-s%2*2)}}function e6(e){const t=$g(e),n=e.uid,r=(e.dur||3)+.5,o=Z(n),i=e.team||o&&o.team,a=VS(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?Z(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=as(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=P(d,m),x=Math.min(1,c.t/.25);u.globalAlpha=h,u.fillStyle=J.skinD,Tr(u,p,g+2,58*x,27*x,2),u.fillStyle=J.mouth,Tr(u,p,g,50*x,22*x,2),u.fillStyle=J.mouthM,Tr(u,p,g+3,38*x,15*x,2),u.fillStyle=J.tongue,Tr(u,p,g+6,24*x,8*x,2),u.fillStyle=J.tongueL,u.fillRect(j(p-10*x),j(g+3),j(8*x),2)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=as(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=P(d,m),x=w.T,b=Math.min(1,c.t/.25),M=t.ended?0:JS(c.t),v=g-4-b*(22+M*70);for(let _=0;_<2;_++){const[,T]=P(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),C=8;for(let O=0;O<=14;O++){const z=.12*Math.PI+O/14*.76*Math.PI,E=p+Math.cos(z)*R,U=T+Math.sin(z)*C;u.globalAlpha=h,u.fillStyle=J.tongueD,u.fillRect(j(E)-3,j(U)-3,6,6),u.fillStyle=J.tongue,u.fillRect(j(E)-2,j(U)-2,4,4)}}const S=Z(n);if(S&&!S.dead){const _=Pf(S),T=P(d,m,.45);if(Math.hypot(T[0]-_[0],T[1]-_[1])>18){u.globalAlpha=h,If(u,_,T,x,1,2);for(let R=0;R<5;R++){const C=(x*1.6+R/5)%1,O=T[0]+(_[0]-T[0])*C,z=T[1]+(_[1]-T[1])*C-3;u.fillStyle=J.meat,u.fillRect(j(O)-3,j(z)-3,6,6),u.fillStyle=J.meatL,u.fillRect(j(O)-2,j(z)-3,3,3)}}}t6(u,p,v,h*b,x),u.globalAlpha=h*b;for(let _=0;_<=26;_++){const T=_/26*Math.PI,R=p+Math.cos(T)*54,C=g+Math.sin(T)*25;u.fillStyle=J.skinD,u.fillRect(j(R)-4,j(C)-3,8,8),u.fillStyle=J.skin,u.fillRect(j(R)-3,j(C)-3,6,5),u.fillStyle=J.skinL,u.fillRect(j(R)-3,j(C)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=J.ink,u.fillRect(j(R)-3,j(C)-10,6,8),u.fillStyle=J.teeth,u.fillRect(j(R)-2,j(C)-9,4,6))}Math.random()<.2&&I(d+y(-.4,.4),m+y(-.2,.2),.9,0,0,-.5,.5,J.slimeL,2,6,!1)}}),Q(Cf(e)?6:2)}function n6(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*rr,i=y(.8,2.2);I(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3),.55,[J.meat,J.meatL,J.fat,J.slimeL][r%4],3,10,!1,.95)}Q(Cf(n)?2.5:.6)}function r6(e,t,n){A({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,a]=P(e,t),s=o<.3?1:1-(o-.3)/.7;r.globalAlpha=s,r.fillStyle=J.skinD,Tr(r,i,a-18*s,58*s,30*s,2),r.fillStyle=J.skin,Tr(r,i,a-22*s,52*s,25*s,2),r.fillStyle=J.skinL,r.fillRect(j(i-30*s),j(a-40*s),j(60*s),3),r.fillStyle=J.ink,r.fillRect(j(i-40*s),j(a-10*s),j(80*s),3)}}),Gh(e,t,1.8,!0),Q(Cf(n)?7:2)}H.sapo_R=e=>{if(e.type==="channel"){e6(e);return}if(e.type==="channel_tick"){n6(e.x,e.y,e);return}if(e.type==="channel_end")if(Hg(e),e.kind==="done")r6(e.x,e.y,e);else for(let t=0;t<10;t++)I(e.x,e.y,.5,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.6,t%2?J.gas:J.slime,4,2,!1)};const Ec=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Qe.sapo=e=>{const t=e.x,n=e.y,r=e.uid?Z(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const c=Ec[0].length,h=j(s-(o>0?c*f-6:6)),d=j(l-14-u),m={h:"#6a3a1e",B:J.ink,b:"#a8acb4",r:J.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let g=0;g<Ec.length;g++)for(let x=0;x<c;x++)Ec[g][x]===p&&i.fillRect(h+(o>0?x:c-1-x)*f,d+g*f,f,f)}if(a>.25){const p=(a-.25)/.75;i.fillStyle=J.fat,i.fillRect(j(s-10-p*16),j(l+6),j(8*(1-p))+1,2),i.fillRect(j(s+4+p*16),j(l+6),j(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,[J.meat,J.meatL,J.slime][i%3],3,10,!1)};const Le=Math.round,ne={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function of(e,t,n,r,o){e.fillStyle=o,e.fillRect(Le(t-r/2),Le(n-r/2),r,r)}const r0=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function o6(e,t,n,r,o,i){const a=t.length,s=t[0].length,l=Le(n-s*o/2),u=Le(r-a*o/2);for(let f=0;f<a;f++)for(let c=0;c<s;c++){const h=i[t[f][c]];h&&(e.fillStyle=h,e.fillRect(l+c*o,u+f*o,o,o))}}function Wg(e,t,n,r,o){const i=Le(t),a=Le(n);o&&(e.fillStyle=o,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=r,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function Lc(e,t,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(Le(t+(r-t)*f-a/2),Le(n+(o-n)*f-a/2),a,a)}}const i6=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function qg(e,t,n,r,o,i,a,s){e.fillStyle=ne.deep,e.fillRect(t,n-o,r,o),e.fillStyle=ne.teal,e.fillRect(t,n-o,r,Le(o*.62)),e.fillStyle=ne.aqua,e.fillRect(t,n-o,r,Le(o*.3)),e.fillStyle=ne.foam,e.fillRect(t+i,n-o-2+a,r,3),s&&(e.fillStyle=ne.white,e.fillRect(t+i*2,n-o-4+a,3,2))}H.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=Z(e.uid);let i=1,a=0;if(o){const M=t-o.x,v=n-o.y,S=Math.hypot(M,v);S>.05&&(i=M/S,a=v/S)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*N.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-a)*N.HW,m=(i+a)*N.HH,p=Math.hypot(d,m)||1,g=Le(d/p*3),x=Le(m/p*2);A({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,v){const S=Math.min(1,v*3)*(v>.6?(1-v)/.4:1);ft(t,n,r*.95,null,`rgba(18,80,110,${.32*S})`);for(let _=0;_<2;_++){const T=(v*2.4+_*.5)%1,R=r*.9*T;M.globalAlpha=S*(1-T);for(let C=0;C<22;C++){const O=C/22*6.283,[z,E]=P(t+Math.cos(O)*R,n+Math.sin(O)*R);of(M,z,E,2,ne.sea)}}M.globalAlpha=1}});const b={n:0,sp:!1};return A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,v){const S=-r*.95+v*r*1.9,_=Math.sin(Math.min(1,v*1.08)*Math.PI),T=Math.sqrt(Math.max(0,r*r-S*S))+.25,R=Math.floor(T*2/c);for(let C=0;C<=R;C++){const O=u>0?-T+C*c:T-C*c,z=1-Math.abs(O)/T,E=.85+.15*Math.sin(O*9+v*24),U=Le((8+30*Math.sqrt(Math.max(0,z)))*_*E/2)*2;if(U<4)continue;const[G,K]=P(t+i*S+s*O,n+a*S+l*O);qg(M,Le(G-h/2),Le(K),h,U,g,x,(O*7.7+v*30|0)%3===0)}if(b.n<32&&_>.3)for(let C=0;C<2;C++){b.n++;const O=y(-T,T);I(t+i*S+s*O,n+a*S+l*O,.35*_,i*y(.8,2),a*y(.8,2),y(1,2.5),.45,Math.random()<.5?ne.foam:ne.sea,2,7,!1)}if(!b.sp&&v>.82){b.sp=!0;for(let C=0;C<14;C++){const O=y(-r*.6,r*.6);I(t+i*r*.8+s*O,n+a*r*.8+l*O,.2,i*y(1,3)+y(-.5,.5),a*y(1,3)+y(-.5,.5),y(2,4),.55,ne.aqua,3,9,!1)}Q(3)}}}),!0};function a6(e,t){A({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.1),a=r0(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),c=Math.sin(l)>0;n.globalAlpha=a*(c?1:.45),of(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,s%2?ne.sea:ne.foam)}if(r>.45){n.globalAlpha=r0((r-.45)/.55,.2,.6);const s=Le(i-72-(r-.45)*20),l=Le(o);n.fillStyle=ne.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)I(e+y(-.3,.3),t+y(-.3,.3),.2,0,0,y(1.2,2.2),.8,Math.random()<.5?ne.sea:ne.foam,2,0,!0);return!0}H.tortuga_W=e=>{if(e.type==="heal")return a6(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=r0(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,m=f*2.094+h*5+l*9,[p,g]=P(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*h),of(s,p,g,h>.6?3:2,c%3===0?ne.foam:c%3===1?ne.sea:ne.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+y(-.2,.2),d:s*.03+y(0,.05)});const a={"#":ne.shell,a:ne.sand};return A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=u.a0+c*4.2+l*2,[m,p]=P(t+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),o6(s,i6,m,p,2,a)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=Z(o),f=u?u.x:t,c=u?u.y:n,[h,d]=P(f,c,.95),m=Le(h),p=Le(d),g=r0(l,.08,.5),x=Le(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=g*.3,s.fillStyle=ne.lamp,s.fillRect(m-8,p-8,16,16),s.globalAlpha=g,s.fillRect(m-x,p-1,x*2,2),s.fillRect(m-1,p-x,2,x*2),s.fillStyle=ne.lampW,s.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const M=b*.785+l*5,v=10+l*30;of(s,m+Math.cos(M)*v,p+Math.sin(M)*v*.5+l*40,2,ne.lamp)}s.globalAlpha=1}}),!0};const Vg=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)Vg.push({th:r/t*6.283+n*.31,ph:e,row:n})});H.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};A({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=Z(t);if(!l||l.dead)return;const u=s*n,[f,c]=P(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,g=18*d,x=62*d,b=u*1.6%2.2-.3,M=Vg.map(v=>{const S=v.th+u*.5,_=Math.cos(v.ph);return{d:v,th:S,x:f+Math.cos(S)*p*_+Math.cos(S)*m*30,y:c+Math.sin(S)*g*_-Math.sin(v.ph)*x-4-m*10+m*m*30,z:Math.sin(S)*_}}).sort((v,S)=>v.z-S.z);for(const v of M){const S=u-(3-v.d.row)*.05;if(S<0)continue;v.y-=(1-Math.min(1,S/.1))*14;const _=v.z>-.15,T=Math.abs(v.d.ph-b)<.22;a.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,S*10),Wg(a,v.x,v.y,S<.06||T?ne.white:ne.foam,T?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let v=0;v<16;v++){const S=y(0,6.283),_=y(1.5,3.5);I(l.x,l.y,y(.2,.9),Math.cos(S)*_,Math.sin(S)*_,y(1,3),.5,Math.random()<.5?ne.foam:ne.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;I(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,y(1.5,2.5),.4,Math.random()<.5?ne.sand:ne.shell,2,3,!1)}return!0};H.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}A({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const c=r0(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);ft(t,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(m,p)=>P(t+m*h,n+p*h);for(let m=0;m<2;m++){u.globalAlpha=c*(m?.75:.85);const p=m?ne.lamp:ne.shellD,g=m?2:3,x=m?-1:0,b=m?-2:0;for(const[M,v]of i)for(let S=0;S<6;S++){const _=S*Math.PI/3,T=(S+1)*Math.PI/3,[R,C]=d(M+Math.cos(_)*o,v+Math.sin(_)*o),[O,z]=d(M+Math.cos(T)*o,v+Math.sin(T)*o);Lc(u,R+x,C+b,O+x,z+b,5,g,p)}for(let M=0;M<22;M++){const v=M/22*6.283,[S,_]=d(Math.cos(v)*r*.66,Math.sin(v)*r*.66),[T,R]=d(Math.cos(v)*r*.86,Math.sin(v)*r*.86);Lc(u,S+x,_+b,T+x,R+b,5,g,p);const C=(M+1)/22*6.283,[O,z]=d(Math.cos(C)*r*.86,Math.sin(C)*r*.86);Lc(u,T+x,R+b,O+x,z+b,6,g,p)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const c=u/a*6.283,h=f/a*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let g=0;g<a;g++){const x=g/a*6.283;p.push(P(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of s){const x=g/a*6.283,[b,M]=p[g],v=p[(g+1)%a][0],S=Math.max(4,Math.ceil(Math.abs(v-b))+2),_=Le((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const T=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=T?.82:1;const R=T?2:-2;qg(u,Le(Math.min(b,v)-1),Le(M),S,_,Le(Math.cos(x-.785)*3),R,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let g=0;g<16;g++){const x=y(0,6.283);I(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*y(1,2.5),Math.sin(x)*y(1,2.5),y(1.5,3),.6,Math.random()<.5?ne.foam:ne.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=y(0,6.283),c=y(2,5);I(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,y(3.5,6.5),y(.8,1.1),[ne.aqua,ne.sea,ne.foam,ne.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return Q(10),!0};Qe.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,a){const[s,l]=P(t,n),u=Le(s),f=Le(l);for(let c=0;c<(r?3:2);c++){const h=a*1.3-c*.18;if(h<=0||h>=1)continue;const d=Le(6+h*(r?34:24)),m=Le(d/2);i.globalAlpha=1-h,i.fillStyle=c?ne.sea:ne.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5);i.globalAlpha=1-a,Wg(i,s,l-a*8,ne.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=y(0,6.283),s=y(1,2.5);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(1.5,3),.4,i%2?ne.aqua:ne.foam,2,9,!1)}};const Rt=Math.round,ui=Math.PI*2,ct={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},Yg=e=>e*N.HW*Math.SQRT2;function Ze(e,t,n,r){r=Math.max(1,Rt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Rt(t[0]+(n[0]-t[0])*s/i-a),Rt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function s6(e,t,n,r,o,i,a=!1){const s=t[0].length,l=t.length,u=Rt(n-s*o/2),f=Rt(r-l*o/2);for(const c in i){e.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<s;d++)t[h][a?s-1-d:d]===c&&e.fillRect(u+d*o,f+h*o,o,o)}}function l6(e,t,n,r,o,i){const a=Math.abs(r),s=Rt(t),l=Rt(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=o,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=o,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const xl=new Map;function Kg(e){if(xl.has(e))return!1;if(xl.size>300)for(const[t,n]of xl)w.T-n>4&&xl.delete(t);return xl.set(e,w.T),!0}function u6(e){const t=w.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||He(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const f6=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Qe.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.5),l=Rt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=ct.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+c*l*.8-u/2,u,u);o.fillStyle=ct.f2;for(let f=0;f<6;f++){const c=f/6*ui+i*3;o.fillRect(Rt(a+Math.cos(c)*(6+i*8))-1,Rt(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=ct.cream,o.fillRect(a-2,s-2,4,4))}}),I(t,n,.6,y(-.5,.5),y(-.5,.5),.4,.8,Math.random()<.5?ct.leaf:ct.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(1,2),.3,ct.f1,2,4,!0)};Pe.zorra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(c,h=0)=>[n+a*c-s*h,r+s*c+a*h];mt(!0);const u=Ht();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?ct.f2:ct.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(Rt(h[0])-2+(c>>1),Rt(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,mt(!1),e.fillStyle=ct.woodD,Ze(e,l(-13),l(3),3),e.fillStyle=ct.wood,Ze(e,l(-12),l(2),1),e.fillStyle=ct.steel,Ze(e,l(3),l(7),3),e.fillStyle="#ffffff",Ze(e,l(6),l(8),1),e.fillStyle=ct.leaf,Ze(e,l(-13,0),l(-9,-3),2),e.fillStyle=ct.leafD,Ze(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?Z(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&Kg("za"+t.id)&&(Qe.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),et.sfx("atk_zorra",f.x,f.y,.6))};H.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=P(e.x,e.y),a=P(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;A({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=P(r,o,.5),m=-u,p=l;f.globalAlpha=c<.6?1:(1-c)/.4;const g=[];for(let M=-5;M<=5;M++)g.push([h+m*M*3.4-l*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=ct.woodD;for(const M of g)f.fillRect(Rt(M[0])-2,Rt(M[1])-2,4,4);f.fillStyle=ct.wood;for(const M of g)f.fillRect(Rt(M[0])-1,Rt(M[1])-1,2,2);f.fillStyle=ct.leaf;for(const M of[g[0],g[10]])f.fillRect(Rt(M[0])-2,Rt(M[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),b=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=ct.cream,Ze(f,g[0],b,1),Ze(f,b,g[10],1)}}),A({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=P(r,o,.5),m=4+c*16;f.fillStyle=ct.f1;for(let p=0;p<8;p++){const g=p/8*ui;f.fillRect(Rt(h+l*8+Math.cos(g)*m)-2,Rt(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)I(r,o,.55,-n*y(-2,2)+t*y(0,1),t*y(-2,2)+n*y(0,1),y(.5,1.5),.9,f%2?ct.leaf:ct.leafL,3,1.5,!1,.95)};Pe.zorra_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,c=0)=>[n+a*f-s*c,r+s*f+a*c];mt(!0);const u=Ht();for(let f=0;f<=16;f++){const c=f/16,h=Rt(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,m=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?ct.cream:c>.45?ct.fox:ct.f1,u.fillRect(Rt(m[0]-h/2),Rt(m[1]-h/2),h,h)}u.globalAlpha=1,mt(!1),e.fillStyle=ct.woodD,Ze(e,l(-22),l(4),4),e.fillStyle=ct.wood,Ze(e,l(-21),l(3),2),e.fillStyle="#20202a",Ze(e,l(3,-4),l(12),3),Ze(e,l(3,4),l(12),3),e.fillStyle=ct.steel,Ze(e,l(4,-2),l(11),2),Ze(e,l(4,2),l(11),2),e.fillStyle="#ffffff",Ze(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=ct.leafD,Ze(e,l(-23,0),l(-15,f*5),3),e.fillStyle=ct.leaf,Ze(e,l(-22,f),l(-16,f*4),2),e.fillStyle=ct.leafL,e.fillRect(Rt(l(-17,f*4)[0]),Rt(l(-17,f*4)[1]),2,2);if(Math.random()<.3&&I(t.x,t.y,t.z||.45,y(-.4,.4),y(-.4,.4),-.2,.7,Math.random()<.6?ct.leaf:ct.autumn,3,.6,!1,.95),t.id!=null)for(const f of u6(t))Kg("zq"+t.id+":"+f.id)&&jg(f.x,f.y,t.vx||1,t.vy||0)};function jg(e,t,n,r){const o=Math.hypot(n,r)||1;A({type:"custom",layer:"top",add:!0,dur:.25,x:e,y:t,draw(i,a){const s=P(e-n/o*.7,t-r/o*.7,.5),l=P(e+n/o*.9,t+r/o*.9,.5);i.globalAlpha=1-a,i.fillStyle=ct.fox,Ze(i,s,l,Rt(6*(1-a))+1),i.fillStyle=ct.cream,Ze(i,s,l,2)}});for(let i=0;i<6;i++)I(e,t,.5,n/o*y(1,3)+y(-.8,.8),r/o*y(1,3)+y(-.8,.8),y(.5,1.5),.35,i%2?ct.f1:ct.fox,2,3,!0)}H.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*ui,h:s/9,sp:y(4.5,6),col:[ct.leaf,ct.leafL,ct.autumn][s%3],dk:s%3===2?ct.foxD:ct.leafD,r:y(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*ui,l=y(1.5,2.5);I(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,y(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,y(.8,1.6),y(.6,.9),[ct.leaf,ct.leafL,ct.autumn][a%3],3,1,!1,.94)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=Z(t),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)I(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,m]=P(r,o,.35);a.globalAlpha=.55*h,a.fillStyle="#e8fff0";for(let p=0;p<2;p++){const g=f*7+p*Math.PI,x=Yg(.62)*c;for(let b=0;b<7;b++){const M=g+b*.16;a.fillRect(Rt(d+Math.cos(M)*x)-1,Rt(m+Math.sin(M)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const g=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*c*(1-x*.35),[M,v]=P(r+Math.cos(g)*b,o+Math.sin(g)*b,.15+x*1.1);a.globalAlpha=h*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),l6(a,M,v,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};H.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,a=P(t,n),s=P(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));A({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const m=h-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[g,x]=P(d.x,d.y,.32+m*.3);f.globalAlpha=p,s6(f,f6,g,x,3,{o:ct.f2,t:ct.f1,c:ct.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const M=g+(b-1.5)*9*(l?-1:1),v=Rt(4+5*Math.abs(Math.sin(h*30+b*1.7))+m*14);f.fillStyle=b%2?ct.f3:ct.f1,f.fillRect(Rt(M)-2,Rt(x-12-v),4,v),f.fillStyle=ct.f0,f.fillRect(Rt(M)-1,Rt(x-12-v),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=P(r,o,.3+c*.4),m=14+c*10;for(let p=0;p<6;p++){const g=p/6*ui+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+p)),f.fillStyle=p%2?ct.f3:ct.f2,f.fillRect(Rt(h+Math.cos(g)*m)-3,Rt(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=ct.f0,f.fillRect(Rt(h+Math.cos(g)*m)-1,Rt(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();I(t+(r-t)*c+y(-.2,.2),n+(o-n)*c+y(-.2,.2),.3,y(-.3,.3),y(-.3,.3),y(.8,1.6),y(.5,.8),[ct.f1,ct.f2,ct.f3][f%3],3,-.5,!0,.95)}};const fu=3.1;function c6(e,t,n,r,o){const i=Rt(t),a=Rt(n),s=Rt(Math.sin(o)*r),l=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<l.length;u++){const f=l[u]*r,c=u>4?Rt(s*(u-4)/4):0,h=a-u*r*2;e.fillStyle=ct.f3,e.fillRect(i-f+c,h,f*2,r*2),u<8&&(e.fillStyle=ct.f1,e.fillRect(i-f+r+c,h,Math.max(r,f*2-r*2),r*2)),u<5&&(e.fillStyle=ct.f0,e.fillRect(i-Rt(f/2)+c,h,Math.max(r,f),r*2))}e.fillStyle=ct.gold,e.fillRect(i-r,a-r*3,r*2,r*2)}function xm(e,t,n,r,o,i){const a=w.T,s=io(.8);for(let l=0;l<46;l++){const u=l/46*ui+.09,f=Math.cos(u),c=Math.sin(u);if(Ni(f,c,0)>0!==i)continue;const h=(a*1.25+l*.618%1)%1,d=fu*(1-h);Xn(t+f*r*.95,n+c*r*.95,d);const m=Rt(zt.x),p=Rt(zt.y),g=o*Math.min(1,(1-h)*4)*(i?.85:.6);e.globalAlpha=g*.45,e.fillStyle=ct.f2,e.fillRect(m,p-Rt(s),2,Rt(s)),e.globalAlpha=g,e.fillStyle=ct.f1,e.fillRect(m,p-Rt(s*.45),2,Rt(s*.45)),e.fillStyle=i?ct.f0:ct.gold,e.fillRect(m-1,p-2,4,3)}}H.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=Z(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(b,M)=>({ox:y(-.3,.3),oy:y(-.3,.3),dl:M*.03}));A({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(b,M){const v=M*.5;for(const S of c){const _=(v-S.dl)/.35;if(_<0||_>1)continue;const T=.6+_*4.5,R=a+S.ox-l*_*.8,C=s+S.oy-u*_*.8,O=P(R,C,T),z=P(R+l*.15,C+u*.15,T-.4);b.globalAlpha=1-_*.5,b.fillStyle=ct.fox,Ze(b,z,O,3),b.fillStyle=ct.f0,b.fillRect(Rt(O[0])-2,Rt(O[1])-2,4,4)}}});for(let b=0;b<8;b++)I(a,s,.6,y(-.5,.5),y(-.5,.5),y(2,4),.4,b%2?ct.gold:ct.f1,2,2,!0);const h=28,d=.45,m=Array.from({length:h},(b,M)=>{const v=Math.random()*ui,S=Math.sqrt(Math.random())*r*.92,_=t+Math.cos(v)*S,T=n+Math.sin(v)*S;return{t0:.3+M*(2.5/h)+y(-.04,.04),lx:_,ly:T,sx:_+l*1.8+y(-.3,.3),sy:T+u*1.8+y(-.3,.3),landed:!1,tang:[0,1]}}),p=(b,M)=>P(b.sx+(b.lx-b.sx)*M,b.sy+(b.ly-b.sy)*M,4*(1-M*M));A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(b,M){const v=M*o;for(const S of m){const _=(v-S.t0)/d;if(_<0)continue;if(_>=1){if(!S.landed){S.landed=!0,I(S.lx,S.ly,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.7?ct.f1:ct.leaf,2,6,!0);const U=p(S,1),G=p(S,.93),K=Math.hypot(U[0]-G[0],U[1]-G[1])||1;S.tang=[(U[0]-G[0])/K,(U[1]-G[1])/K]}const E=(v-S.t0-d)/.14;if(E<1){const[U,G]=P(S.lx,S.ly),K=Rt(3+E*9);b.globalAlpha=1-E,b.fillStyle=ct.gold,b.fillRect(U-K,G-1,K*2,2),b.fillRect(U-1,G-Rt(K/2),2,K)}continue}const T=p(S,_),R=p(S,Math.max(0,_-.07)),C=Math.hypot(T[0]-R[0],T[1]-R[1])||1,O=(T[0]-R[0])/C,z=(T[1]-R[1])/C;b.globalAlpha=.35,b.fillStyle=ct.f2;for(let E=1;E<=4;E++){const U=p(S,Math.max(0,_-E*.05));b.fillRect(Rt(U[0])-1,Rt(U[1])-1,3,3)}b.globalAlpha=1,b.fillStyle=ct.fox,Ze(b,[T[0]-O*16,T[1]-z*16],T,3),b.fillStyle=ct.gold,Ze(b,[T[0]-O*14,T[1]-z*14],T,1),b.fillStyle="#ffffff",b.fillRect(Rt(T[0])-2,Rt(T[1])-2,4,4)}}});const g=za(e,3),x=()=>w.T-g.t0;A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(b,M,v){const S=or(g);if(S<=0){v.t=v.dur+1;return}const _=Math.min(1,x()/.3,S/.35);xm(b,t,n,r,_,!1),yi(g,t,n,r*1.05,16747050,.55*_)}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(b,M,v){const S=or(g);if(S<=0){v.t=v.dur+1;return}const _=x(),T=Math.min(1,_/.3,S/.35);xm(b,t,n,r,T,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),C=S<.35?(.35-S)*2.4:0;b.globalAlpha=T*.7,b.fillStyle=ct.f2,Pi(b,t,n,fu+C,r*.86*R,90,3,-_*.9,0),b.fillStyle=ct.gold,Pi(b,t,n,fu+C-.06,r*.86*R,18,3,_*1.7,1);for(let O=0;O<2;O++)for(let z=0;z<9;z++){const E=z/9*ui+_*.9,U=Math.cos(E),G=Math.sin(E),K=Ni(U,G,0)>0;O===1===K&&(Xn(t+U*r*.86*R,n+G*r*.86*R,fu+C+Math.sin(_*3+z)*.08),b.globalAlpha=T*(K?1:.6),c6(b,zt.x,zt.y,K?3:2,_*9+z*1.3))}}}),A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(b,M,v){const S=M*o,_=M>.85?(1-M)/.15:Math.min(1,S*4),[T,R]=P(t,n),C=Yg(r);!v.sh&&S>.75&&(v.sh=!0,Q(3)),b.globalAlpha=.7*_,b.fillStyle=ct.fox;for(let O=0;O<10;O++){const z=O/10*ui+S*.6,E=T+Math.cos(z)*C,U=R+Math.sin(z)*C*.5,G=-Math.cos(z),K=-Math.sin(z)*.5;b.fillRect(Rt(E)-2,Rt(U)-2,4,4),b.fillRect(Rt(E+G*6-K*4)-1,Rt(U+K*6+G*2)-1,3,3),b.fillRect(Rt(E+G*6+K*4)-1,Rt(U+K*6-G*2)-1,3,3)}for(const O of m){if(!O.landed)continue;const[z,E]=P(O.lx,O.ly),U=O.tang[0],G=O.tang[1];b.globalAlpha=_,b.fillStyle="#00000055",b.fillRect(Rt(z)-3,Rt(E),6,2),b.fillStyle=ct.woodD,Ze(b,[z-U*13,E-G*13],[z,E],3),b.fillStyle=ct.wood,Ze(b,[z-U*12,E-G*12],[z-U*2,E-G*2],1),b.fillStyle=ct.leaf,b.fillRect(Rt(z-U*13)-2,Rt(E-G*13)-1,2,3),b.fillStyle=ct.autumn,b.fillRect(Rt(z-U*13),Rt(E-G*13)-2,2,3)}}})};H.zorra_Q_hit=e=>{const t=e.uid?Z(e.uid):null;jg(e.x,e.y,t?e.x-t.x:1,t?e.y-t.y:0)};var be=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,ve=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,h6=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,d6=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,m6=Object.defineProperty,p6=(e,t,n)=>t in e?m6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qg=(e,t,n)=>(p6(e,typeof t!="symbol"?t+"":t,n),n);const y6=class Zg extends ge{constructor(t){t={...Zg.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:d6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:h6,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Qg(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Qg(y6,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var g6=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,x6=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,M6=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,b6=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,v6=Object.defineProperty,w6=(e,t,n)=>t in e?v6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ta=(e,t,n)=>(w6(e,typeof t!="symbol"?t+"":t,n),n);const Jg=class tx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Zt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...tx.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:n?.clamp?b6:x6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:n?.clamp?M6:g6,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ta(this,"uniforms"),ta(this,"_pixelSize",{x:0,y:0}),ta(this,"_clamp"),ta(this,"_kernels",[]),ta(this,"_blur"),ta(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,r,o);else{const l=Er.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),c=u,u=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,r,o),Er.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};ta(Jg,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let ex=Jg;var S6=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,_6=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,A6=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,T6=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,R6=Object.defineProperty,C6=(e,t,n)=>t in e?R6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nx=(e,t,n)=>(C6(e,typeof t!="symbol"?t+"":t,n),n);const rx=class ox extends ge{constructor(t){t={...ox.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:T6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:A6,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),nx(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};nx(rx,"DEFAULT_OPTIONS",{threshold:.5});let P6=rx;var I6=Object.defineProperty,O6=(e,t,n)=>t in e?I6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ja=(e,t,n)=>(O6(e,typeof t!="symbol"?t+"":t,n),n);const ix=class ax extends ge{constructor(t){t={...ax.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:_6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:S6,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:Xt.WHITE}}),ja(this,"uniforms"),ja(this,"bloomScale",1),ja(this,"brightness",1),ja(this,"_extractFilter"),ja(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new P6({threshold:t.threshold}),this._blurFilter=new ex({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=Er.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=Er.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,r,o),Er.returnTexture(a),Er.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};ja(ix,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let z6=ix;var F6=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,E6=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,L6=Object.defineProperty,k6=(e,t,n)=>t in e?L6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nh=(e,t,n)=>(k6(e,typeof t!="symbol"?t+"":t,n),n);const D6=class sx extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...sx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:E6,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:F6,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Nh(this,"uniforms"),Nh(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Un,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Nh(D6,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var U6=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,X6=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,G6=Object.defineProperty,N6=(e,t,n)=>t in e?G6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qa=(e,t,n)=>(N6(e,typeof t!="symbol"?t+"":t,n),n);const B6=class lx extends ge{constructor(t){t={...lx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:X6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:U6,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Qa(this,"uniforms"),Qa(this,"_thickness"),Qa(this,"_rotation"),Qa(this,"_lightColor"),Qa(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Un,this._shadowColor=new Un,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Fs}set rotation(t){this._rotation=t*Fs,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Qa(B6,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var $6=Object.defineProperty,H6=(e,t,n)=>t in e?$6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cu=(e,t,n)=>(H6(e,typeof t!="symbol"?t+"":t,n),n);const W6=class ux extends NM{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Zt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...ux.DEFAULT_OPTIONS,...n},super(),cu(this,"_blurXFilter"),cu(this,"_blurYFilter"),cu(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new $1({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new $1({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=Er.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),Er.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Zt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Zt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Zt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Zt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Zt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Zt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};cu(W6,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var q6=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,V6=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Y6=Object.defineProperty,K6=(e,t,n)=>t in e?Y6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fx=(e,t,n)=>(K6(e,typeof t!="symbol"?t+"":t,n),n);const j6=class cx extends ge{constructor(t){t={...cx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:V6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:q6,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),fx(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};fx(j6,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Q6=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Z6=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Mm=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,La=La||{};La.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var La=La||{};La.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(k){var D=new Error(t+": "+k);throw D.source=t,D}function r(){var k=o();return t.length>0&&n("Invalid input not EOF"),k}function o(){return M(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,c)||a("repeating-radial-gradient",e.repeatingRadialGradient,c)}function a(k,D,$){return s(D,function(W){var tt=$();return tt&&(K(e.comma)||n("Missing comma before color stops")),{type:k,orientation:tt,colorStops:M(v)}})}function s(k,D){var $=K(k);if($){K(e.startCall)||n("Missing (");var W=D($);return K(e.endCall)||n("Missing )"),W}}function l(){return u()||f()}function u(){return G("directional",e.sideOrCorner,1)}function f(){return G("angular",e.angleValue,1)}function c(){var k,D=h(),$;return D&&(k=[],k.push(D),$=t,K(e.comma)&&(D=h(),D?k.push(D):t=$)),k}function h(){var k=d()||m();if(k)k.at=g();else{var D=p();if(D){k=D;var $=g();$&&(k.at=$)}else{var W=x();W&&(k={type:"default-radial",at:W})}}return k}function d(){var k=G("shape",/^(circle)/i,0);return k&&(k.style=U()||p()),k}function m(){var k=G("shape",/^(ellipse)/i,0);return k&&(k.style=z()||p()),k}function p(){return G("extent-keyword",e.extentKeywords,1)}function g(){if(G("position",/^at/,0)){var k=x();return k||n("Missing positioning value"),k}}function x(){var k=b();if(k.x||k.y)return{type:"position",value:k}}function b(){return{x:z(),y:z()}}function M(k){var D=k(),$=[];if(D)for($.push(D);K(e.comma);)D=k(),D?$.push(D):n("One extra comma");return $}function v(){var k=S();return k||n("Expected color definition"),k.length=z(),k}function S(){return T()||C()||R()||_()}function _(){return G("literal",e.literalColor,0)}function T(){return G("hex",e.hexColor,1)}function R(){return s(e.rgbColor,function(){return{type:"rgb",value:M(O)}})}function C(){return s(e.rgbaColor,function(){return{type:"rgba",value:M(O)}})}function O(){return K(e.number)[1]}function z(){return G("%",e.percentageValue,1)||E()||U()}function E(){return G("position-keyword",e.positionKeywords,1)}function U(){return G("px",e.pixelValue,1)||G("em",e.emValue,1)}function G(k,D,$){var W=K(D);if(W)return{type:k,value:W[$]}}function K(k){var D,$;return $=/^[\n\r\t\s]+/.exec(t),$&&L($[0].length),D=k.exec(t),D&&L(D[0].length),D}function L(k){t=t.substr(k)}return function(k){return t=k.toString(),r()}}();var J6=La.parse;La.stringify;function t_(e){const t=J6(l_(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=e_(n.type),o=n_(n.colorStops),i=a_(n.orientation);return{type:r,stops:o,angle:i}}function e_(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function n_(e){const t=o_(e),n=[],r=new Un;for(let o=0;o<e.length;o++){const i=r_(e[o]),a=r.setValue(i).toArray();n.push({offset:t[o],color:a.slice(0,3),alpha:a[3]})}return n}function r_(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function o_(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const r=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)o=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=s.indexDelta,o=t[i]}}return t.map(i_)}function i_(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function a_(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return s_(e.value)}return 0}function s_(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function l_(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var u_=Object.defineProperty,f_=(e,t,n)=>t in e?u_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ma=(e,t,n)=>(f_(e,typeof t!="symbol"?t+"":t,n),n);const kc=90;function c_(e){return[...e].sort((t,n)=>t.offset-n.offset)}const o0=class hu extends ge{constructor(t){if(t&&"css"in t?t={...t_(t.css||""),alpha:t.alpha??hu.defaults.alpha,maxColors:t.maxColors??hu.defaults.maxColors}:t={...hu.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=ae.from({vertex:{source:Mm,entryPoint:"mainVertex"},fragment:{source:Mm,entryPoint:"mainFragment"}}),r=fe.from({vertex:Z6,fragment:Q6,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??kc,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Ma(this,"baseUniforms"),Ma(this,"stopsUniforms"),Ma(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=c_(t),r=new Un;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+kc}set angle(t){this.baseUniforms.uOptions[1]=t-kc}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Ma(o0,"LINEAR",0);Ma(o0,"RADIAL",1);Ma(o0,"CONIC",2);Ma(o0,"defaults",{type:o0.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var h_=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,d_=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,m_=Object.defineProperty,p_=(e,t,n)=>t in e?m_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wo=(e,t,n)=>(p_(e,typeof t!="symbol"?t+"":t,n),n);const y_=class hx extends ge{constructor(...t){let n=t[0]??{};if((n instanceof Xt||n instanceof yr)&&(Zt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...hx.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:d_,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:h_,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Wo(this,"uniforms"),Wo(this,"_size",0),Wo(this,"_sliceSize",0),Wo(this,"_slicePixelSize",0),Wo(this,"_sliceInnerSize",0),Wo(this,"_nearest",!1),Wo(this,"_scaleMode","linear"),Wo(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof Xt?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Wo(y_,"DEFAULT_OPTIONS",{colorMap:Xt.WHITE,nearest:!1,mix:1});var g_=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,x_=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,M_=Object.defineProperty,b_=(e,t,n)=>t in e?M_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bh=(e,t,n)=>(b_(e,typeof t!="symbol"?t+"":t,n),n);const v_=class dx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Zt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...dx.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:x_,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:g_,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Bh(this,"uniforms"),Bh(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Un,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Bh(v_,"DEFAULT_OPTIONS",{color:0,alpha:1});var w_=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,S_=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,__=Object.defineProperty,A_=(e,t,n)=>t in e?__(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,du=(e,t,n)=>(A_(e,typeof t!="symbol"?t+"":t,n),n);const T_=class mx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Zt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...mx.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:S_,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:w_,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),du(this,"uniforms"),du(this,"_originalColor"),du(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Un,this._targetColor=new Un,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Zt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Zt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Zt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Zt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};du(T_,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var R_=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,C_=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,P_=Object.defineProperty,I_=(e,t,n)=>t in e?P_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,px=(e,t,n)=>(I_(e,typeof t!="symbol"?t+"":t,n),n);const O_=class yx extends ge{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Zt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...yx.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:C_,entryPoint:"mainFragment"}}),a=fe.from({vertex:be,fragment:R_,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),px(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};px(O_,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var z_=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,F_=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,E_=Object.defineProperty,L_=(e,t,n)=>t in e?E_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mu=(e,t,n)=>(L_(e,typeof t!="symbol"?t+"":t,n),n);const k_=class gx extends ge{constructor(t){t={...gx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:F_,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:z_,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),mu(this,"uniforms"),mu(this,"seed"),mu(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};mu(k_,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var D_=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,U_=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,X_=Object.defineProperty,G_=(e,t,n)=>t in e?X_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N_=(e,t,n)=>(G_(e,t+"",n),n);const B_=class xx extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...xx.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:U_,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:D_,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};N_(B_,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var $_=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,H_=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,W_=Object.defineProperty,q_=(e,t,n)=>t in e?W_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Za=(e,t,n)=>(q_(e,typeof t!="symbol"?t+"":t,n),n);const V_=class Mx extends ge{constructor(t){t={...Mx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:H_,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:$_,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Za(this,"uniforms"),Za(this,"shadowOnly",!1),Za(this,"_color"),Za(this,"_blurFilter"),Za(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Un,this.color=t.color??0,this._blurFilter=new ex({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new ge({gpuProgram:ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:fe.from({vertex:be,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=Er.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),Er.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Za(V_,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Y_=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,K_=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,j_=Object.defineProperty,Q_=(e,t,n)=>t in e?j_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vo=(e,t,n)=>(Q_(e,typeof t!="symbol"?t+"":t,n),n);const Z_=class bx extends ge{constructor(t){t={...bx.defaults,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:K_,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:Y_,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new Xt({source:new Rd({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),vo(this,"uniforms"),vo(this,"average",!1),vo(this,"minSize",8),vo(this,"sampleSize",512),vo(this,"_canvas"),vo(this,"texture"),vo(this,"_slices",0),vo(this,"_sizes",new Float32Array(1)),vo(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Fs}set direction(t){this.uniforms.uDirection=t*Fs}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};vo(Z_,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var J_=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,t8=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,e8=Object.defineProperty,n8=(e,t,n)=>t in e?e8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$h=(e,t,n)=>(n8(e,typeof t!="symbol"?t+"":t,n),n);const r8=class vx extends ge{constructor(t){t={...vx.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:t8,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:J_.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),$h(this,"uniforms"),$h(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Un,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};$h(r8,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var o8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,i8=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,a8=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,s8=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,l8=Object.defineProperty,u8=(e,t,n)=>t in e?l8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ja=(e,t,n)=>(u8(e,typeof t!="symbol"?t+"":t,n),n);const f8=class wx extends ge{constructor(t){t={...wx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:i8.replace("${PERLIN}",s8),entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:o8.replace("${PERLIN}",a8),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ja(this,"uniforms"),Ja(this,"time",0),Ja(this,"_angleLight",[0,0]),Ja(this,"_angle",0),Ja(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*Fs;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Ja(f8,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var c8=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,h8=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,d8=Object.defineProperty,m8=(e,t,n)=>t in e?d8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hh=(e,t,n)=>(m8(e,typeof t!="symbol"?t+"":t,n),n);const p8=class Sx extends ge{constructor(t){t={...Sx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:h8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:c8,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Hh(this,"uniforms"),Hh(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Hh(p8,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var y8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,g8=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,x8=Object.defineProperty,M8=(e,t,n)=>t in e?x8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wh=(e,t,n)=>(M8(e,typeof t!="symbol"?t+"":t,n),n);const b8=class _x extends ge{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof En){Zt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={..._x.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:g8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:y8,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Wh(this,"uniforms"),Wh(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Wh(b8,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var v8=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,w8=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,S8=Object.defineProperty,_8=(e,t,n)=>t in e?S8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pu=(e,t,n)=>(_8(e,typeof t!="symbol"?t+"":t,n),n);const A8=class Ax extends ge{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Zt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...Ax.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:w8.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:v8.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),pu(this,"uniforms"),pu(this,"_replacements",[]),pu(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new Un;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Zt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Zt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};pu(A8,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var T8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,R8=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,C8=Object.defineProperty,P8=(e,t,n)=>t in e?C8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qh=(e,t,n)=>(P8(e,typeof t!="symbol"?t+"":t,n),n);const I8=class Tx extends ge{constructor(t){t={...Tx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:R8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:T8,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),qh(this,"uniforms"),qh(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};qh(I8,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var O8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,z8=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,F8=Object.defineProperty,E8=(e,t,n)=>t in e?F8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ua=(e,t,n)=>(E8(e,typeof t!="symbol"?t+"":t,n),n);const Kd=class ea extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...ea.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:z8,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:O8.replace(/\$\{ANGLE_STEP\}/,ea.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),ua(this,"uniforms"),ua(this,"_thickness"),ua(this,"_quality"),ua(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=ea.getAngleStep(r),this._color=new Un,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*ea.MAX_SAMPLES,ea.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=ea.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};ua(Kd,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});ua(Kd,"MIN_SAMPLES",1);ua(Kd,"MAX_SAMPLES",100);var L8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,k8=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,D8=Object.defineProperty,U8=(e,t,n)=>t in e?D8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yu=(e,t,n)=>(U8(e,typeof t!="symbol"?t+"":t,n),n);const X8=class Rx extends ge{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Zt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Rx.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:k8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:L8,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),yu(this,"uniforms"),yu(this,"_angle"),yu(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};yu(X8,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var G8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,N8=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,B8=Object.defineProperty,$8=(e,t,n)=>t in e?B8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vh=(e,t,n)=>($8(e,typeof t!="symbol"?t+"":t,n),n);const H8=class Cx extends ge{constructor(t){t={...Cx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:N8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:G8,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Vh(this,"uniforms"),Vh(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Vh(H8,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var W8=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,q8=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,V8=Object.defineProperty,Y8=(e,t,n)=>t in e?V8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Px=(e,t,n)=>(Y8(e,typeof t!="symbol"?t+"":t,n),n);const K8=class Ix extends ge{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Zt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...Ix.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:q8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:W8,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),Px(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Px(K8,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var j8=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Q8=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Z8=Object.defineProperty,J8=(e,t,n)=>t in e?Z8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yh=(e,t,n)=>(J8(e,typeof t!="symbol"?t+"":t,n),n);const tA=class Ox extends ge{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Zt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Ox.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:Q8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:j8,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Yh(this,"uniforms"),Yh(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Yh(tA,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var eA=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,nA=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,rA=Object.defineProperty,oA=(e,t,n)=>t in e?rA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gu=(e,t,n)=>(oA(e,typeof t!="symbol"?t+"":t,n),n);const iA=class zx extends ge{constructor(...t){let n=t[0]??{};if(n instanceof Xt&&(Zt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...zx.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:nA,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:eA,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),gu(this,"uniforms"),gu(this,"_color"),gu(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Un,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};gu(iA,"DEFAULT_OPTIONS",{lightMap:Xt.WHITE,color:0,alpha:1});var aA=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,sA=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,lA=Object.defineProperty,uA=(e,t,n)=>t in e?lA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kh=(e,t,n)=>(uA(e,typeof t!="symbol"?t+"":t,n),n);const fA=class Fx extends ge{constructor(t){const{width:n,height:r}=n4.defaultOptions;t={...Fx.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:sA,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:aA,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Kh(this,"uniforms"),Kh(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};Kh(fA,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var cA=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,hA=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,dA=Object.defineProperty,mA=(e,t,n)=>t in e?dA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ex=(e,t,n)=>(mA(e,typeof t!="symbol"?t+"":t,n),n);const pA=class Lx extends ge{constructor(t){t={...Lx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:hA,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:cA,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Ex(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Ex(pA,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var yA=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,gA=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,xA=Object.defineProperty,MA=(e,t,n)=>t in e?xA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kx=(e,t,n)=>(MA(e,typeof t!="symbol"?t+"":t,n),n);const bA=class Dx extends ge{constructor(t){t={...Dx.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:gA.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:yA.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),kx(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};kx(bA,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let wr,Ux,_s,$l,i0;const X0=[];let bm=!0,jh=0;function Xx(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,a=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${a.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}function vA(e,t){wr&&wr.renderer.resize(e,t)}async function wA(e,t){Ux=t,wr=new Dl,await wr.init({...e,background:"#000000",backgroundAlpha:1});{const n=wr.renderer;n.render=cp("gl:lightmap",n.render.bind(n))}return i0=Xt.from(Xx(256)),i0.source.scaleMode="linear",$l=new pn(Xt.WHITE),wr.stage.addChild($l),_s=new ze,wr.stage.addChild(_s),TA(),wr.canvas}function SA(){const e=new pn(i0);e.blendMode="add",e.alpha=.01,_s.addChild(e),wr.renderer.render(wr.stage),e.destroy();try{wr.renderer.texture.initSource(i0.source)}catch{}Nx()}function vm(e){e!==bm&&(bm=e,wr.canvas.style.display=e?"":"none",e?wr.ticker.start():wr.ticker.stop())}const fa=4;let ss,Hl,Qh,Zh;const G0=[],ba=new mf({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),_A=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,AA=`in vec2 vUV;
uniform sampler2D uTexture;
uniform sampler2D uMask;
uniform vec4 uMoon;
uniform vec2 uScreen;
out vec4 finalColor;
void main() {
  vec4 c = texture(uTexture, vUV);
  if (uMoon.a > 0.001) {
    float m = texture(uMask, vec2(gl_FragCoord.x / uScreen.x, 1.0 - gl_FragCoord.y / uScreen.y)).a;
    float L = dot(c.rgb, vec3(0.299, 0.587, 0.114));
    c.rgb = mix(c.rgb, min(vec3(c.a), L * uMoon.rgb), uMoon.a * (1.0 - m));
  }
  finalColor = c;
}`;let Gx;function TA(){Zh=Xt.from(Xx(64)),Zh.source.scaleMode="linear",ss=Pd.create({width:64,height:64,resolution:1}),Qh=new ze,Hl=new ze,Qh.addChild(Hl),Gx=fe.from({vertex:_A,fragment:AA,name:"piso-luna"})}function RA(e,t,n){const r=e.width,o=e.height,i=new dy({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),a=new pf({glProgram:Gx,resources:{uTexture:e.source,uMask:ss.source,moonU:ba}}),s=new QM({geometry:i,shader:a,texture:e});return s.x=t,s.y=n,s}function Nx(){const e=Math.ceil(w.W/fa),t=Math.ceil(w.H/fa);(ss.source.width!==e||ss.source.height!==t)&&ss.resize(e,t,1),ba.uniforms.uScreen[0]=e*fa,ba.uniforms.uScreen[1]=t*fa,Ux.renderer.render({container:Qh,target:ss,clear:!0,clearColor:[0,0,0,0]})}const wm=[.95,.95,.94],CA=[.5,.62,.86],PA=[1,.74,.55],Sm=[62,108,168],IA=[210,120,60],xu=[1,1,1];function OA(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let a=wm[i]+(CA[i]-wm[i])*e;a+=(PA[i]-a)*t*.62,xu[i]=a,n[i]=Sm[i]+(IA[i]-Sm[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=ba.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const zA=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),Jh=[];let ls=0,td=0,ed=0,Bx=0,$x=0;const FA=110;function Mr(e,t,n,r,o,i){if(i<.02||ls>=FA)return;const a=(e-t)*N.HW+N.OX,s=(e+t)*N.HH,l=r*N.HW*1.5;if(a<td-l||a>Bx+l||s<ed-l||s>$x+l)return;let u=Jh[ls];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},Jh[ls]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),ls++}const _m=(e,t,n,r,o)=>Mr(e,t,0,n,r,o);let Wa=null;function EA(){if(Wa)return Wa;Wa=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?Wa.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&Wa.push({x:e.x,y:e.y,kind:"crystal"});return Wa}const Am={blue:5949695,red:16742470},LA={blue:9101567,red:16752752},kA={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function DA(e){const t=w.game,n=w.T,r=t.player,o=.55+.45*e;for(const i of EA())if(i.kind==="brazier"){const a=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);Mr(i.x,i.y,.5,3.3*(.96+.04*a),16749632,.8*a*o)}else Mr(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const a=t.fountain[i];a&&Mr(a.x,a.y,.3,3.6,LA[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){Mr(i.x,i.y,1.75,3.4,Am[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){Mr(i.x,i.y,.9,4.4,Am[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(He(i))continue;const a=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&Mr(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),a&&a.burn&&Mr(i.x,i.y,.4,1.3,16747560,.5*o);const s=a&&a.transform;s&&Mr(i.x,i.y,.6,2.8,s.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&Mr(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const a=window.SIM.RUNES[i.kind];Mr(i.x,i.y,.5,1.7,zd(a.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||xf(i,n)&&Mr(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&Mr(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const a=kA[i.fx];a!==void 0&&Mr(i.x,i.y,i.z||.45,i.skill?2:1.2,a,(i.skill?.75:.5)*o)}Gb(_m,40,o),Nb(_m,14,o)}const Hx=new URLSearchParams(location.search),UA=Hx.get("luna")==="0",XA=Hx.get("mapaluz")==="0";let Ml=!1;function GA(e,t){const n=w.game;if(!n||!n.player||XA){vm(!1),jh=0,Ml&&(Ml=!1,ba.uniforms.uMoon[3]=0);return}vm(!0);const r=ep(n.t),o=w.cam;jh=r.night,OA(r.night,r.warm),UA&&(ba.uniforms.uMoon[3]=0),$l.tint=zA(xu[0],xu[1],xu[2]),$l.width=w.W,$l.height=w.H,_s.scale.set(o.z),_s.position.set(e,t),td=o.x-w.W/2/o.z,ed=o.y-w.H/2/o.z,Bx=td+w.W/o.z,$x=ed+w.H/o.z+120,ls=0,DA(r.night);const{HW:i,HH:a,OX:s,ZK:l}=N;Ml=ba.uniforms.uMoon[3]>.005;let u=0;for(;u<ls;u++){const f=Jh[u];let c=X0[u];c||(c=new pn(i0),c.anchor.set(.5),c.blendMode="add",_s.addChild(c),X0[u]=c);const h=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+s,m=(f.x+f.y)*a-f.z*l*.35-10;if(c.visible=!0,c.x=d,c.y=m,c.width=h,c.height=h*.62,c.tint=f.col,c.alpha=f.a,Ml){let p=G0[u];p||(p=new pn(Zh),p.anchor.set(.5),p.blendMode="add",Hl.addChild(p),G0[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=h,p.height=h*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<X0.length;f++)X0[f].visible=!1;if(Ml){for(let f=u;f<G0.length;f++)G0[f].visible=!1;Hl.scale.set(o.z/fa),Hl.position.set(e/fa,t/fa),Nx()}}let zr;const se={};let As,Ts,jr,Rs,Wl,nd=0,Dc,Mu=null,bu=null,af,rd=[],sf=[];const lf=[],Qs=new Map,Ri=[],N0=[];function jd(){return zr.canvas}const od=[];async function NA(e){const t=o4();let n=0;for(const o of t){try{zr.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new pn(af);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(w.W/2,w.H/2),se.lights.addChild(r);for(let o=0;o<3;o++)To.renderer.render(To.stage),zr.renderer.render(zr.stage),lo.renderer.render(lo.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of od)try{lo.renderer.texture.initSource(o)}catch{}try{To.renderer.texture.initSource(af.source)}catch{}SA()}let Uc;function BA(){try{const e=zr.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let lo,To;const B0={width:window.innerWidth,height:window.innerHeight,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1,textureGCActive:!1};function vi(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function $A(e){lo=new Dl,zr=new Dl,To=new Dl,await lo.init({...B0,background:"#100d18"}),await zr.init({...B0,backgroundAlpha:0}),await To.init({...B0,backgroundAlpha:0}),Dc=await wA(B0,lo);for(const[n,r]of[["gl:ground",lo],["gl:units",zr],["gl:lights",To]]){const o=r.renderer;o.render=cp(n,o.render.bind(o))}w.gpuName=BA(),w.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(w.gpuName),e.style.position="fixed",As=document.createElement("canvas"),Ts=document.createElement("canvas"),jr=document.createElement("canvas"),Rs=document.createElement("canvas"),vi(lo.canvas,1),vi(As,3),vi(zr.canvas,4),vi(Dc,5,"multiply"),vi(To.canvas,6,"plus-lighter"),vi(jr,7),vi(Ts,8),vi(Rs,9,"plus-lighter"),jr.style.imageRendering="auto",zr.canvas.style.pointerEvents="auto",e.append(lo.canvas,As,zr.canvas,Dc,To.canvas,jr,Ts,Rs);for(const n of["ground"])se[n]=new ze,lo.stage.addChild(se[n]);for(const n of["world","top"])se[n]=new ze,zr.stage.addChild(se[n]);se.lights=new ze,To.stage.addChild(se.lights),se.groundCam=new ze,se.ground.addChild(se.groundCam),se.worldCam=new ze,se.world.addChild(se.worldCam),se.shadows=new ze,se.entities=new ze,se.entities.sortableChildren=!0,se.worldCam.addChild(se.shadows,se.entities),se.lightsCam=new ze,se.lights.addChild(se.lightsCam),Uc=new z6({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Uc.resolution=.5,se.lights.filters=[Uc],af=Xt.from(HA(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),Wl=new pn(Xt.WHITE),se.top.addChild(Wl),Tm();let t=0;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(()=>{Math.abs(window.innerWidth-w.W)<=2&&Math.abs(window.innerHeight-w.H)<=2||(Cn("ventana",`capas al nuevo tamaño ${window.innerWidth}x${window.innerHeight}`),Tm())},180)})}function HA(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,e,e),n}let $0=null;function Tm(){w.W=window.innerWidth,w.H=window.innerHeight;for(const t of[lo,zr,To])t.renderer.resize(w.W,w.H);vA(w.W,w.H);const e=t=>Math.ceil(t*sd);if(As.width=Rs.width=e(w.W),As.height=Rs.height=e(w.H),Ts.width=w.W,Ts.height=w.H,!$0){const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144),$0=Xt.from(t),$0.source.scaleMode="linear"}Wl.texture=$0,Wl.width=w.W,Wl.height=w.H}function WA(){const e=window.MAP;for(const o of s4())se.groundCam.addChild(RA(o.tex,o.x,o.y)),od.push(o.tex.source);const t=qA(),n=Ur.ground.naturalWidth,r=Ur.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=Ur[o];if(!a||!a.naturalWidth)continue;const s=Xt.from(a);s.source.scaleMode="linear",od.push(s.source);const l=new pn(s);l.width=n,l.height=r;const u=new JM({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,se.groundCam.addChild(l,u),i==="flow"?Mu=u:bu=u}rd=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),sf=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of rd)id(o,!0);for(const o of sf)id(o,!1)}function id(e,t){const n=ee[e.sprite];if(!n||!gf(e.sprite))return;const r=_i(e.sprite,null,0,0);if(!r)return;const o=new pn(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=P(e.x,e.y);o.x=i,o.y=a,o.zIndex=(e.x+e.y)*100,se.entities.addChild(o),lf.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function qA(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=Xt.from(e);return n.source.scaleMode="nearest",n}function VA(e){const t=ee[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",nu(e.sprite,"idle",e.animT||0)]:["walk",0]}const YA={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},KA={fragment:13656319,frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194,saw:14711338,castor_tar:6961818},Rm={};function jA(e){let t=Rm[e];if(!t){t=new jM;const[n,r,o]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,r,0,0,0,0,o,0,0,0,1,0],Rm[e]=t}return t}function QA(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===w.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===w.hoverUnit?e.team!==t.team?"red":"white":""}function ZA(e){let t=Qs.get(e.id);if(!t){const n=()=>{const r=new pn(Xt.EMPTY);return se.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new pn(Xt.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,se.shadows.addChild(t.shadow),Qs.set(e.id,t)}return t}function Vi(e,t,n,r,o,i,a){if(!t){e.visible=!1;return}const s=ee[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=a}function JA(){const e=w.game,t=e.player,n=w.T,r=++tT;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=ZA(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){Vi(i.spr,_i("prop_boulder",null,0,0),"prop_boulder",...P(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(He(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const E=o._spriteBak||(w.mode==="guest"?o.heroKey:null);E&&(o.sprite=E)}if(o.sprite&&(!ee[o.sprite]||!gf(o.sprite))){const E=YA[o.sprite];o._fbScale=E?E[1]:1,o._fbTint=E?E[2]:16777215,o.sprite=E&&ee[E[0]]?E[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[s,l]=P(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const E=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(E*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let c=0;if(o._cyA!==void 0){const E=Math.min(1,(n-o._cyA)/.4);c=58*E*(2-E)+Math.sin(n*5+o.id)*5*E}else if(o._cyB!==void 0){const E=(n-o._cyB)/.18;E<1?c=o._cyH0*(1-E*E):o._cyB=void 0}o._cyH=c,u-=Math.round(c);const[h,d]=VA(o);let m=a||ee[o.sprite]&&ee[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!a&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const g=o.status&&o.status.transform,x=g&&g.mount&&ee[g.mount]?g:null;if(g&&!x){o._tfT=(o._tfT||0)+1/60;const E=Math.min(1,o._tfT*4),U=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*E*U}else o._tfT=0;const b=o.status||{};let M=s,v=null;if(x){const E=ee[x.mount],U=x.mountScale||2,G=o._stompA!==void 0&&n<o._stompA&&E.anims&&E.anims.stomp?"stomp":h,K=E.anims&&(E.anims[G]||E.anims.idle),L=G==="stomp"?Math.min(K.n-1,Math.floor((1-(o._stompA-n)/.6)*K.n)):K?d%K.n:0;v=_i(x.mount,G,m,L),i.mount||(i.mount=new pn(Xt.EMPTY),se.entities.addChild(i.mount)),Vi(i.mount,v,x.mount,M,u,U,(o.x+o.y)*100+.9),i.mount.alpha=f,i.mount.tint=16777215;const k=E.dirs||16,D=k>=16?m:Math.round(m/2)%k,$=E.saddleFrames&&E.saddleFrames[G]&&E.saddleFrames[G][D],W=$&&$[L]||E.saddleXY&&E.saddleXY[D]||[0,-(E.saddle!=null?E.saddle:E.ay*.62)];M+=Math.round(W[0]*U),u+=Math.round(W[1]*U)}else i.mount&&(i.mount.visible=!1);b.stun&&["quake","roar","dust","firedash","bash"].includes(b.stun.fx)&&(M+=Math.round(Math.sin(n*60+o.id)*1.5));const S=(o.x+o.y)*100+1,_=_i(o.sprite,x?"idle":h,m,a||x?nu(o.sprite,"idle",n):d);Vi(i.spr,_,o.sprite,M,u,p,S),i.spr.alpha=f;const T=_&&!a?QA(o,t):"";if(T){if(!i.ol){i.ol=new ze;for(let U=0;U<4;U++)i.ol.addChild(new pn(Xt.EMPTY));se.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=S-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==T&&(i.ol.filters=[jA(T)],i.olCol=T);const E=1.3;[[E,0],[-E,0],[0,E],[0,-E]].forEach(([U,G],K)=>Vi(i.ol.children[K],_,o.sprite,M+U,u+G,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let R=0,C=0;if(o.hitFlash>.06?(R=16777215,C=.75):b.slow?(R=KA[b.slow.fx]||8050943,C=.35):b.root?(R=3836458,C=.3):b.stun&&b.stun.fx==="arcane"?(R=11563263,C=.35):b.burn?(R=16742954,C=.25+.15*Math.sin(n*14+o.id)):g&&!x?(R=g.kind==="fire"?16747066:16765514,C=.25+.1*Math.sin(n*6)):b.hex?(R=11565823,C=.2+.08*Math.sin(n*5+o.id)):b.berserk&&(R=16722458,C=.12+.08*Math.sin(n*9+o.id)),C>0&&_?(Vi(i.glow,_,o.sprite,M,u,p,S+.5),i.glow.tint=R,i.glow.alpha=C*f):i.glow.visible=!1,w.shadowsOn&&!a&&_&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(ee[o.sprite]&&ee[o.sprite].fly)){const E=x&&v?x.mount:o.sprite,U=ee[E],G=x&&v?x.mountScale||2:p;i.shadow.texture=x&&v?v:_,i.shadow.visible=!0,i.shadow.anchor.set(U.ax/U.fw,U.ay/U.fh),i.shadow.setFromMatrix(new tn(G,0,-.8*G,-.38*G,Math.round(s),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const O=ee[o.sprite]&&ee[o.sprite].gear;let z=0;if(O&&(o.kind==="hero"||o.illusion)){const E=o.illusion?o.owner&&w.mode!=="guest"?e.gearCode(o.owner):0:w.mode==="guest"?o.gear||0:e.gearCode(o),U={w:E&3,h:E>>2&3,a:E>>4&3,b:E>>6&3};for(const G of["a","b","h","w"]){const K=U[G];if((K>0||G==="w")&&O[G]&&O[G].includes(K)){const L=o.sprite+"__"+G+K;if(!i.gear[z]){const k=new pn(Xt.EMPTY);se.entities.addChild(k),i.gear[z]=k}Vi(i.gear[z],_i(L,h,m,d),L,M,u,p,S+.2+z*.05),i.gear[z].alpha=f,z++}}}if(o.kind==="courier"){const E=o.owner||(o.ownerId?e.units.find(G=>G.id===o.ownerId):null),U=E&&(E.heroKey||E.sprite);if(U&&ee[U]){if(!i.gear[z]){const L=new pn(Xt.EMPTY);se.entities.addChild(L),i.gear[z]=L}const G=ee[o.sprite],K=Math.sin(n*3+o.id)*1.5;Vi(i.gear[z],_i(U,"idle",2,nu(U,"idle",n)),U,M,u-(G?G.ay*p:40)+2+K,.3,S+.6),i.gear[z].alpha=f,z++}}for(;z<i.gear.length;z++)i.gear[z].visible=!1}for(const[o,i]of Qs)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();i.ol&&i.ol.destroy({children:!0}),i.mount&&i.mount.destroy(),Qs.delete(o)}}let tT=0;const us=new Map,Cm={},Zs=[];let eT=0;function nT(e,t){const n=e+(t?"o":"c");let r=Cm[n];return r||(r=Xt.from(Sy(e,t)),r.source.scaleMode="nearest",Cm[n]=r),r}function rT(){const e=w.game,t=e&&e.player,n=++eT;if(Zs.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;Zs.push(r);let i=us.get(r.id);if(!i){const u=new pn(Xt.EMPTY);u.anchor.set(.5,1-1/36),se.entities.addChild(u),i={spr:u,seen:0},us.set(r.id,i)}i.seen=n;const[a,s]=P(r.x,r.y),l=r.until-e.t;i.spr.texture=nT(r.kind,xf(r,w.T)),i.spr.x=Math.round(a),i.spr.y=Math.round(s),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(w.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of us)o.seen!==n&&(o.spr.destroy(),us.delete(r))}function oT(e,t){if(!w.tpAim||e.dead)return;const r=w.tpHover||(w.mouse.inWorld?{x:w.mouse.wx,y:w.mouse.wy}:null),o=w.game,i=w.T;for(const g of o.units)!g.dead&&g.team===e.team&&(g.kind==="tower"||g.kind==="nexus")&&ft(g.x,g.y,1.1,"#7fe8ff55",null,2,[5,5]);if(!r)return;const a=rp(e,r.x,r.y);if(!a)return;const s=Math.hypot(a.x-e.x,a.y-e.y)>=3,l=s?"#7fe8ff":"#ff6a5a",u=i*1.6%1;ft(a.x,a.y,1.4+u*.6,l+Math.round((1-u)*200).toString(16).padStart(2,"0"),null,3),ft(a.x,a.y,1.25,l,s?"rgba(127,232,255,0.12)":"rgba(255,106,90,0.12)",3);const[f,c]=P(e.x,e.y),[h,d]=P(a.x,a.y);t.save(),t.globalAlpha=.55,t.strokeStyle=l,t.lineWidth=2,t.setLineDash([8,7]),t.lineDashOffset=-i*40,t.beginPath(),t.moveTo(f,c),t.lineTo(h,d),t.stroke(),t.setLineDash([]);const m=t.createLinearGradient(h,d-170,h,d);m.addColorStop(0,"rgba(127,232,255,0)"),m.addColorStop(1,s?"rgba(127,232,255,0.35)":"rgba(255,106,90,0.3)"),t.globalAlpha=.8+.2*Math.sin(i*6),t.fillStyle=m,t.fillRect(h-18,d-170,36,170),t.globalAlpha=1,t.font="bold 13px sans-serif",t.textAlign="center";const p=s?et.t("Teletransporte"):et.t("Muy cerca");t.lineWidth=3,t.strokeStyle="#000",t.strokeText(p,h,d-178),t.fillStyle=l,t.fillText(p,h,d-178),t.restore()}function iT(e,t){const n=w.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=w.mouse.wx,a=w.mouse.wy,s=Math.hypot(i-e.x,a-e.y)>r.WARD_RANGE;if(ft(e.x,e.y,r.WARD_RANGE,s?"#ffffff70":"#ffffffb0",null,2,[8,6]),s){const[l,u]=P(e.x,e.y),[f,c]=P(i,a);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-w.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,c),t.stroke(),t.restore()}ft(i,a,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),D4(t,o?"sen":"obs",i,a)}function aT(e){if(!e.sprite||!gf(e.sprite))return;const t=_i(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new pn(t),r=ee[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=P(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,se.entities.addChild(n),Ri.push({spr:n,t:0,vy:20})}function sT(e){const t=w.cam,n=w.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(w.W/2-t.x*t.z+r),a=Math.round(w.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])se[m].scale.set(t.z),se[m].position.set(i,a);const s=t.x-w.W/2/t.z-2,l=t.y-w.H/2/t.z-2,u=w.W/t.z+4,f=w.H/t.z+4;Mu&&(Mu.tilePosition.set(-n*14,-n*3),Mu.alpha=.45+.12*Math.sin(n*1.3)),bu&&(bu.tilePosition.set(Math.sin(n*.3)*6,0),bu.alpha=.25+.15*Math.sin(n*.9));const c=w.game&&w.game.player,[h,d]=c?P(c.x,c.y):[0,0];for(const m of lf){const[p,g]=P(m.o.x,m.o.y),x=p>s-200&&p<s+u+200&&g>l-100&&g<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=_i(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=ee[m.o.sprite];if(m.spr.alpha=c&&m.o.x+m.o.y>c.x+c.y&&b&&Math.abs(h-p)<b.fw*.42&&d<g&&d>g-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,v=(M.x*12.9898+M.y*78.233)%6.28,S=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+w.wind);m.spr.skew.x=-(Math.sin(n*S*1.6+v)*_+Math.sin(n*S*3.1+v*2)*_*.3+w.wind*.02)}}}}w.game&&(rn("render/amb"),Kb(e,s,l,u,f,rd),on("render/amb"),rn("render/units"),JA(),rT(),on("render/units"));for(const m of Ri)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=Ri.length-1;m>=0;m--)Ri[m].t>.8&&(Ri[m].spr.destroy(),Ri.splice(m,1));rn("render/overlays"),fT(),on("render/overlays"),rn("render/lighting"),GA(i,a),on("render/lighting"),nd=jh,rn("render/lights"),pT(),on("render/lights"),w.game&&w.game.player?(rn("render/fog"),gT(),on("render/fog")):ad&&(ad=!1,jr.getContext("2d").clearRect(0,0,jr.width,jr.height))}const lT={cabra_behemoth:"Behemoth",castor_castle:"Citadel",castor_spider:"Clockwork Spider"};let ad=!1;const sd=1;function Wx(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&H[r+"_"+n.slice(-1)])}function Xc(e,t=1){const n=e.getContext("2d"),r=w.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(w.W/2-r.x*r.z+o)*t,Math.round(w.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const uT={fragment:"#7ae8ff",frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8",saw:"#ffa040",castor_tar:"#8a5ac0"};function fT(){const e=w.game,t=w.T,n=Xc(Rs,sd);let r=Xc(As,sd);if(e2(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;jb();for(const l of e.zones){if(l.fx==="mon_spores"){N4(l);continue}if(!Wx(l))if(l.once){const u=1-l.t/l.dur;ft(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),ft(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(ft(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&A({type:"puff",x:l.x+y(-1,1)*l.r*.8,y:l.y+y(-1,1)*l.r*.8,r:y(12,22),dur:y(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;A({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}}if(e.corralOf)for(const l of["blue","red"]){const u=e.corralOf(l);ft(u.x,u.y,u.r,"#5a3818","rgba(150,110,60,0.20)",4),ft(u.x,u.y,u.r,"#b98a4a",null,2,[5,4]),ft(u.x,u.y,u.r-.12,l==="blue"?"#5ab0ff60":"#ff705060",null,1.5)}Qb();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];ft(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of Zs)L4(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||He(l)||ft(l.x,l.y,(l.r||.35)*(l.scale||1)*.85+.06,l===o?"#ffd24a":Tu[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=w.hoverUnit;a&&a!==o.target&&!a.dead&&ft(a.x,a.y,(a.r||.4)*(a.scale||1)*.85+.08,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=P(l.x,l.y,1.3),[c,h]=P(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(c,h),r.stroke(),r.restore()}o.target&&!o.target.dead&&ft(o.target.x,o.target.y,(o.target.r||.4)*(o.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&ft(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(cT(o),iT(o,r),oT(o,r),w.hoverAbil){const l=i[o.heroKey].abil[w.hoverAbil];l.range&&ft(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe"||l.type==="channel"&&l.self)&&ft(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=w.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,ft(s.x,s.y,.16*(1-l)+.04,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||He(l))continue;l.status&&l.status.slow&&ft(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,uT[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u&&!u.mount){const f=u.kind==="fire",c=.5+.5*Math.sin(t*6);ft(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&ft(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&I(l.x+y(-.6,.6),l.y+y(-.6,.6),y(.1,1.2),y(-.3,.3),y(-.3,.3),y(1,2.4),.6,f?Wr("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&ft(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&ft(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&I(l.x+y(-.3,.3),l.y+y(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(ft(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&I(l.x+y(-.4,.4),l.y+y(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),kb(l)}}if(r=Xc(Ts),e2(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=P(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of Zs)k4(i,i.team===o.team);rv(),Zb(),hT(r)}tv()}ev(),e&&e.player&&mT(r)}function cT(e){if(!w.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[w.aim.k],n=w.mouse.wx,r=w.mouse.wy;let o=n-e.x,i=r-e.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&ft(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&w.game.unitTarget&&w.game.unitTarget(t)){const u=w.aimUnit;if(u){const f=(u.r||.4)*(u.scale||1)*.85+.1,c=u.team!==e.team;ft(u.x,u.y,f,c?"#ff5a4a":"#7fe0ff",c?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),ft(u.x,u.y,f+.12+Math.sin(w.T*8)*.03,c?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(t.type==="proj"||t.type==="dash"||t.type==="hook"){const u=t.type==="dash"?Math.min(a,t.range):t.range,f=(t.width||1)/2,c=-i*f,h=o*f;xc([[e.x+c,e.y+h],[e.x+o*u+c,e.y+i*u+h],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-c,e.y+i*u-h],[e.x-c,e.y-h]],s,l)}else if(t.type==="blink"||t.type==="leap"){const u=Math.min(a,t.range||0),f=e.x+o*u,c=e.y+i*u;xc([[e.x-i*.06,e.y+o*.06],[f-i*.06,c+o*.06],[f+i*.06,c-o*.06],[e.x+i*.06,e.y-o*.06]],s,l),ft(f,c,t.radius||.45,s,l,2)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let c=0;c<=12;c++){const h=u-t.angle+2*t.angle*c/12;f.push([e.x+Math.cos(h)*t.range,e.y+Math.sin(h)*t.range])}xc(f,s,l)}else{const u=Math.min(a,t.range||0),f=e.x+o*u,c=e.y+i*u;ft(f,c,t.radius||.6,s,l,2)}}function hT(e){const t=w.T;for(const n of w.game.units){if(n.dead||He(n))continue;const r=n.status||{};if(Db(e,n),!r.stun&&!r.root){if(r.slow&&r.slow.fx!=="fragment"&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;I(n.x+y(-.3,.3),n.y+y(-.3,.3),l<0?1.1:.2,y(-.2,.2),y(-.2,.2),l,.7,Wr(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&I(n.x+y(-.25,.25),n.y+y(-.25,.25),.3,0,0,1.4,.4,Wr("fire"),3,-1,!0);continue}const o=ee[n.sprite],i=n.scale||1,[a,s]=P(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="bash")p4(e,a,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const c=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=t*5+f*2.09,h=a+Math.cos(c)*14,d=u+Math.sin(c)*4;e.fillStyle="#ffe070",e.fillRect(h-3,d-1,6,2),e.fillRect(h-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-t*4+f*3.14,h=a+Math.cos(c)*20,d=u-6+Math.sin(c)*6;e.fillStyle="#ffffff",e.fillRect(h-3,d,3,2),e.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&I(n.x+y(-.3,.3),n.y+y(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const bl=new Map;function vu(e,t,n){const r=n+"|"+t+"|"+e;let o=bl.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,o.width=Math.ceil(i.measureText(e).width+s*2+2),o.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),bl.size>2e3&&bl.delete(bl.keys().next().value),bl.set(r,o),o}function dT(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(Tu))vu(e[t].name,n,11),vu("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)vu(String(t),"#ffe070",10)}function mT(e){const t=w.game,n=t.player,r=w.cam,o=window.SIM.HEROES,i=r.x-w.W/2/r.z,a=r.y-w.H/2/r.z,s=w.W/r.z,l=w.H/r.z,u=(c,h,d,m,p,g,x)=>{e.fillStyle="#000000c0",e.fillRect(c-1,h-1,d+2,m+2),e.fillStyle=x,e.fillRect(c,h,d,m),e.fillStyle=g,e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(c,h,d,m,p,g=p)=>{const x=vu(c,m,g),b=p/g,M=x.width*b,v=x.height*b;e.drawImage(x,Math.round(h-M/2),Math.round(d-v/2),M,v)};for(const c of t.units){if(c.dead||He(c))continue;const h=(c.x-c.y)*N.HW+N.OX,d=(c.x+c.y)*N.HH;if(h<i-60||h>i+s+60||d<a-60||d>a+l+160||(c.kind==="monster"||c.kind==="courier")&&c.hp>=c.maxHp-1&&!c.boss)continue;const m=ee[c.sprite],p=d-(c.leaping?40:0),g=c.status&&c.status.transform&&c.status.transform.mount&&ee[c.status.transform.mount]?c.status.transform:null,x=g?(ee[g.mount].saddle!=null?ee[g.mount].saddle:ee[g.mount].ay*.62)*(g.mountScale||2):0,b=p-x-(m?m.ay*(c.scale||1)*(c._fbScale||1)*(c.monster==="serpent"?1.4:.92):50)-6,M=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,v=M?66:34,S=M?7:4,_=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":Tu[c.team];if(e.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-v/2,b,v,S,c.hp/c.maxHp,_,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(h-v/2-1.5,b-1.5,v+3,S+3)),c.kind==="hero")for(let T=1;T<6;T++)e.fillStyle="#00000080",e.fillRect(h-v/2+v*T/6,b,1,S);if(g&&g.mmax&&(u(h-110/2,b-22,110,8,g.mhp/g.mmax,"#d8a040","#2a1a0a"),f(lT[String(g.mount).replace(/\d+$/,"")]||"Mount",h,b-30,"#ffd890",10)),c.shield>0&&w.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(h-v/2+c.hp/c.maxHp*v,b,Math.min(v*(1-c.hp/c.maxHp),c.shield/c.maxHp*v),S)),c.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(h-v/2-16,b-2,14,S+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(h-v/2-16,b-2,14,S+4),f(String(c.level),h-v/2-9,b+S/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,b-9,Tu[c.team],11);const T=t.castInfo&&t.castInfo(c);T&&u(h-v/2,b+S+3,v,4,T.p,T.kind===2?"#7ad0ff":T.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const c of t.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=P(c.x,c.y,1.1+c.t*.9);e.globalAlpha=Math.max(0,1-c.t/1.1);const m=c.t<.12?1.4-c.t*3:1;f(et.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*m,c.big?20:14)}e.globalAlpha=1}function pT(){let e=0;const t=w.T,n=(r,o,i,a,s,l)=>{let u=N0[e];u||(u=new pn(af),u.anchor.set(.5),u.blendMode="add",se.lightsCam.addChild(u),N0[e]=u),e++;const[f,c]=P(r,o,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=a*(2+.35*nd),u.tint=s,u.alpha=Math.min(1,l*(1+.7*nd))};for(const r of sf)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of sf)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&I(r.x+y(-.1,.1),r.y+y(-.1,.1),.9,y(-.2,.2),y(-.2,.2),y(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(w.game){for(const r of w.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),He(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&!o.mount&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*N.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of Zs)xf(r,t)&&n(r.x,r.y,Od(r.kind)/N.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of w.game.zones)r.once&&!Wx(r)&&n(r.x,r.y,0,r.r*N.HW*1.4,13143295,.35);for(const r of w.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<N0.length;e++)N0[e].visible=!1}let Yi=null;function yT(){if(Yi)return Yi;Yi=document.createElement("canvas"),Yi.width=Yi.height=128;const e=Yi.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Yi}function gT(){const t=Math.ceil(w.W/4),n=Math.ceil(w.H/4),r=w.cam;(jr.width!==t||jr.height!==n)&&(jr.width=t,jr.height=n),ad=!0;const o=jr.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of w.visionSrc){const[a,s]=P(i.x,i.y),l=((a-r.x)*r.z+w.W/2)/4,u=((s-r.y)*r.z+w.H/2)/4,f=np(i.kind)*N.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(yT(),l-f,u-f/2,f*2,f)}}function xT(e){if(!gf("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;id({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=lf[lf.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function qx(){for(const[,e]of Qs){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}Qs.clear();for(const e of Ri)e.spr.destroy();Ri.length=0;for(const[,e]of us)e.spr.destroy();us.clear(),Zs.length=0}let ln,An,Gr,nt,ht,ro="dragon",ni="blue",ot=null,Pm=0,ca=0,Gc=0,H0=!1,fs=!1,ld=!1,br={},Fi=null,Ei=!1,Im=0,Om=0,MT=0,Nc=performance.now(),zm=-9,ud=!1;const bT=["buff","aoe_self","heal_aoe","illusion","global","copypaste"],vT=e=>bT.includes(e.type)||e.type==="channel"&&e.self,wT=["facil","normal","dificil"],Pl=new Map;let fd=!1;function $t(e){if(e==null)return"";if(e=String(e),fd||gd.value==="es"||!window.I18N)return e;const t=Pl.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Pl.size>5e3&&Pl.clear(),Pl.set(e,r),r}function ST(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=An[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=ln.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of ln.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(ln&&ln.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=ln.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function Vx(e,t,n,r=1,o=1){if(t===void 0||n===void 0){nt.play(e,r,0,.03,o);return}const[i,a]=P(t,n),s=w.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/w.W,u/w.H);const c=w.game&&w.game.player;if(c&&!c.dead){const[h,d]=P(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/w.W,(a-d)*s.z/w.H))}nt.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(w.W*.6))),.03,o)}function Qd(e,t,n,r){if(!nt.babble)return;const o=Math.max(0,Gr.indexOf(e))*7+3;if(n===void 0||r===void 0){nt.babble(o,t,.5,0);return}const[i,a]=P(n,r),s=w.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/w.W,u/w.H),c=.5*Math.max(0,1-f*1.1);c>.05&&nt.babble(o,t,c,Math.max(-1,Math.min(1,l/(w.W*.6))))}let Fm=0;function ha(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function fn(e,t="#ffe7b0",n=1.5){w.game&&w.game.msg(e,t,n)}async function _T(e){ln=window.SIM,An=ln.HEROES,Gr=ln.HERO_KEYS,nt=window.AUDIO,ht=new window.Net;{const r=nt.play,o=nt.babble;nt.play=function(i,...a){Ou("snd",1,i),rn("snd");try{return r.call(nt,i,...a)}finally{on("snd")}},o&&(nt.babble=function(...i){return Ou("voice"),o.apply(nt,i)})}{const r=a1.debounceRendering;a1.debounceRendering=o=>(r||queueMicrotask)(()=>{rn("ui");try{o()}finally{on("ui")}})}g3();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(gd.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");wT.includes(r)&&(er.value={...er.value,difficulty:r})}catch{}try{w.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}ST(),et.babble=Qd,et.sfx=Vx,et.say=ha,et.play=(r,o)=>nt.play(r,o??1),et.t=$t,et.banner=(r,o,i,a,s)=>{const l=Is.value.slice(-3);Is.value=[...l,{id:++MT,title:$t(r),color:o,killerKey:i,victimKey:a,big:s}]},x3(Vr),Kx(),er.value={...er.value,volMaster:nt.volume?nt.volume("m"):1,volMusic:nt.volume?nt.volume("mu"):1,volSfx:nt.volume?nt.volume("s"):1,soundStyle:nt.style?nt.style():"epic",shadows:w.shadowsOn},await r4(r=>D3.value=r),await $A(e),WA(),DT(),dT(),await Promise.all([NA(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,M3(),b3().then(()=>Promise.all([v3(Gr),w3(Gr)])),document.fonts?document.fonts.ready:null]);try{const r=new ln.Game(window.MAP,{humans:[]});xT(r._makeBushes())}catch(r){console.warn(r)}NT(),BT();const[t,n]=P(N.N/2,N.N/2);w.cam.x=t,w.cam.y=n,await S3(),dn.value="menu",ht.init().then(r=>{op.value=!!r}).catch(()=>{}),ht.onChange=()=>Vl(),oR(),requestAnimationFrame(Qx)}function Yx(e){const t=ln.PASSIVES&&ln.PASSIVES[e];return t?{name:$t(t[0]),desc:$t(t[1])}:{name:"",desc:""}}function Kx(){_3.value=Gr.filter(e=>!An[e].wip).map(e=>{const t=An[e];return{key:e,name:t.name,title:$t(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:$t(t.abil[n].name),desc:$t(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:Yx(e)}}),A3.value=ln.ITEMS.map(e=>({id:e.id,name:$t(e.name),desc:$t(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:ln.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let Em="";function Zd(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(Cn("error",t),t===Em)return;Em=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const Jd="v9.11";{const e=document.createElement("div");e.id="build-tag",e.textContent=Jd,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>Zd(e.error||e.message));window.addEventListener("unhandledrejection",e=>Zd(e.reason));let jx=performance.now(),W0=0;function Lm(){const e=performance.now();if(e-jx<150){W0=0;return}const t=W0?Math.min(.05,(e-W0)/1e3):1/30;W0=e,w.T=e/1e3;try{const n=dn.value;n==="pick"&&ot&&(s3(t),va()),n==="lobby"&&l3(t),n==="play"&&w.game&&Zx(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=Lm,e=!0}catch{}e||setInterval(Lm,33)}const AT={menu:0,lobby:1,pick:2,play:3};function Qx(e){jx=performance.now(),$3(e-Nc);const t=Math.min(.05,(e-Nc)/1e3);Nc=e,w.T=e/1e3;try{const n=dn.value;lr("screen",AT[n]??9),n==="pick"&&ot&&(rn("draft"),s3(t),va(),on("draft")),n==="lobby"&&(rn("lobby"),l3(t),on("lobby")),rn("play"),n==="play"&&w.game?ET(t):IT(t),on("play"),w.marker&&(w.marker.t+=t,w.marker.t>.3&&(w.marker=null)),rn("fx"),Yb(t),on("fx"),rn("render"),sT(t),on("render"),(Om-=t)<=0&&w.game&&(Om=.1,rn("minimap"),y3(),on("minimap")),(Um-=t)<=0&&(Um=.5,rn("amb"),PT(),on("amb")),n!=="play"&&(Dm-=t)<=0&&(Dm=1,ht.available&&(I3.value=ht.openGames())),w.game&&(km-=t)<=0&&(km=.25,TT()),cs&&CT()}catch(n){console.error(n),Zd(n)}requestAnimationFrame(Qx)}let km=0;function TT(){const e=w.game,t=Ub();let n=0,r=0,o=0;for(const i of e.units)i.dead||(i.kind==="hero"?n++:i.kind==="minion"?o++:i.owner&&r++);lr("units",e.units.length),lr("heroes",n),lr("minions",o),lr("pets",r),lr("proj",(e.projectiles||e.proj||[]).length),lr("simFx",(e.fx||[]).length),lr("parts",t.parts),lr("efx",t.efx),lr("decals",t.decals),lr("ambFx",t.amb),lr("dynLights",t.dynL),lr("t",Math.round(e.t)),lr("zoom",Math.round(w.cam.z*100)/100),lr("dom",document.getElementsByTagName("*").length)}let cs=null;function RT(){if(cs){cs.remove(),cs=null;return}const e=document.createElement("canvas");e.width=470,e.height=190,e.style.cssText="position:fixed;left:8px;top:8px;z-index:9999;pointer-events:none;background:rgba(8,6,14,.82);border:1px solid #5a4a7a;border-radius:6px",document.body.appendChild(e),cs=e}function CT(){const e=cs,t=e.getContext("2d"),n=n5(),r=e.width,o=100;t.clearRect(0,0,r,e.height);const i=Math.min(n.ring,r-10),a=8+o,s=f=>a-Math.min(o,f*o/100);t.fillStyle="#2a2440";for(const f of[16.7,33,50])t.fillRect(5,s(f),i,1);for(let f=0;f<i;f++){const c=(n.pos-i+f+n.ring*2)%n.ring,h=n.gap[c],d=n.work[c],m=5+f;t.fillStyle=h>50?"#ff4a3a":h>33?"#ffb040":"#4a8aff",t.fillRect(m,s(h),1,a-s(h)),t.fillStyle="#9fe0a0",t.fillRect(m,s(d),1,a-s(d))}t.font="11px monospace",t.fillStyle="#e8e0ff";const l=n.secs;t.fillText(l?`fps ${l[1]}  peor ${l[2]}ms  p95 ${l[7]}ms  juego ${l[8]}ms/cuadro  mem ${l[10]}MB`:"...",6,a+14),t.fillText(`tirones ${n.hitches}  marcas F4 ${n.marks}  ping ${Math.round(n.ping)}ms  jitter ${Math.round(n.jitter)}`,6,a+28),t.fillText(n.parts.slice(0,5).map(([f,c])=>f+" "+c.toFixed(1)).join("  "),6,a+42);const u=n.last;u&&(t.fillStyle="#ffb0a0",t.fillText(`ultimo tiron: ${u.ms}ms (juego ${u.work}, afuera ${u.outside}) a los ${u.t}s`,6,a+56)),t.fillStyle="#8a80a8",t.fillText("azul/rojo: cuadro   verde: trabajo del juego   F4: marcar tiron",6,a+70)}let Dm=0,Um=0;function PT(){if(!nt.setAmbient)return;const e=Nr(w.W/2,w.H/2),t=N.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;nt.setAmbient(o,s,a)}function IT(e){const t=w.T*.05,n=N.N/2+Math.cos(t)*12,r=N.N/2+Math.sin(t*1.3)*12,[o,i]=P(n,r);w.cam.x+=(o-w.cam.x)*Math.min(1,e*.5),w.cam.y+=(i-w.cam.y)*Math.min(1,e*.5),w.cam.z=w.cam.tz=1.25}let Il="",Bc=!1,q0=0;const V0={};let Xm=0,Gm=0,OT=0,Nm=0,Y0={x:-99,y:-99,z:0};const Bm={};function zT(){if(w.mode!=="guest"||w.T-Nm<.4)return;const e=Nr(w.W/2,w.H/2),t=Math.round(w.cam.z*100)/100;Math.hypot(e.x-Y0.x,e.y-Y0.y)<2&&t===Y0.z||(Nm=w.T,Y0={x:e.x,y:e.y,z:t},ht.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function FT(){if(!(Bc||!ht.code)){Bc=!0,q0||(q0=performance.now(),fn("Se cortó la conexión. Reconectando...","#ffb070",3)),Cn("net","conexion perdida, reconectando");try{await ht.rejoin(),q0=0,fn("¡Reconectado!","#9fe0a0",2.5),nt.play("announce",.4),Cn("net","reconectado")}catch{performance.now()-q0>9e4?(fn("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),ht.lost=!1,ht.code=null):await new Promise(t=>setTimeout(t,2500))}Bc=!1}}function Zx(e){const t=w.game;jT(e);{const n=ep(t.t).phase;n!==Il&&(Il&&n==="dusk"&&(fn("Cae la noche: se ve menos lejos","#a8b8ff",3),nt.play("announce",.35)),Il&&n==="dawn"&&(fn("Amanece","#ffe0a0",2.5),nt.play("announce",.3)),Il=n)}if(w.mode==="guest"){if(ht.lost&&FT(),zT(),w.T-Gm>2&&(Gm=w.T,ht.send(["ping",Math.round(performance.now())])),w.T-Xm>5){Xm=w.T;const n=Q3();n&&ht.send(["tel",n])}rn("sim/guest"),t.guestTick(e),on("sim/guest"),ht.hostState&&ht.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(w.mode==="host")for(const[n,r]of ht.pullCommands())r[0]==="cam"?Bm[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?V0[n]=r[1]:r[0]==="tel"?Z3(n,r[1]):t.input(n,r);if(rn("sim/update"),!(co.value&&w.mode==="solo")&&!md()&&t.update(e),on("sim/update"),w.mode==="host"&&(ca-=e,ca<=0)){rn("sim/snap");const n=!!(ht.game&&ht.game.sendSnapTo);ca=Math.max(0,ca+(n?ht.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(s=>s.human),o=qn>=0?Math.round(qn*10)/10:Lo?0:-1,i=t.winner?"end":"play",a=r.map(s=>[s.human,s.team,s.heroKey]);if(n){const s=OT++%8===0;for(const l of ht.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},Bm[l.id]],full:s});f.I=o,V0[l.id]!==void 0&&(f.pe=V0[l.id],delete V0[l.id]),ht.publishTo(l.id,i,f,s?a:null)}ht.publishMeta(i,a)}else{const s=t.snapshot(3300,r);s.I=o,ht.publish(i,s,a)}on("sim/snap")}}}function ET(e){Js||WT(),rn("play/sim"),Zx(e),on("play/sim");const t=w.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&aT(o);($m&&!n.dead||!n.dead&&Math.hypot(n.x-Hm,n.y-Wm)>8)&&uf(),$m=!!n.dead,Hm=n.x,Wm=n.y,LT(e),w.mouse.wx=Nr().x,w.mouse.wy=Nr().y,w.mouse.rd&&!t.winner&&!w.aim&&w.mouse.inWorld&&(Gc-=e,Gc<=0&&(Gc=.12,e3(!1))),rn("play/fx"),qb(),XT(e),on("play/fx"),!ld&&t.t>7.5&&(ld=!0,ha("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;nt.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),rn("play/vision"),kT(e),on("play/vision"),rn("play/pick"),w.hoverUnit=!w.mouse.md&&!w.aim&&w.mouse.inWorld?t3():null,w.aimUnit=w.aim&&w.mouse.inWorld?e1():null,on("play/pick"),$T(),ud=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),ud&&w.T-zm>3&&(zm=w.T,nt.play("deny",.5)),(Im-=e)<=0&&(Im=1/15,rn("play/hud"),Au(),on("play/hud"))}let $c=0,$m=!1,Hm=0,Wm=0;function LT(e){const t=w.game.player,n=w.cam,r=w.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(w.camFollow||br[" "])){const[o,i]=P(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||K0();$c=i&&(r.x<2||r.x>w.W-2||r.y<2||r.y>w.H-2)||br.ArrowLeft||br.ArrowRight||br.ArrowUp||br.ArrowDown?Math.min(1,$c+e/.2):0;const l=2e3*(.35+.65*$c)*e/n.z;br.ArrowLeft&&(n.x-=l),br.ArrowRight&&(n.x+=l),br.ArrowUp&&(n.y-=l),br.ArrowDown&&(n.y+=l),i&&(r.x<2&&(n.x-=l),r.x>w.W-2&&(n.x+=l),r.y<2&&(n.y-=l),r.y>w.H-2&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-w.W/2)/n.z+n.x,i=(r.y-w.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(w.camFollow||br[" "])||(n.x=o-(r.x-w.W/2)/n.z,n.y=i-(r.y-w.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*N.N*N.HW,n.x)),n.y=Math.max(0,Math.min(2*N.N*N.HH,n.y))}function qm(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function kT(e){const t=w.game,n=t.player;w.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&sp[o.kind]);for(const o of t.wards||[])o.team===n.team&&w.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=qm(o.x,o.y);let a=0;for(const s of w.visionSrc){const l=np(s.kind);if(s.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-s.x,o.y-s.y)>2.5||Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||qm(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}w.visible=r}let ql=null;function Jx(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function DT(){ql===null&&(ql=[Ur.water_mask,Ur.water_calm].filter(e=>e&&e.naturalWidth).map(Jx).filter(Boolean))}function UT(e,t){ql===null&&(ql=[Ur.water_mask,Ur.water_calm].filter(i=>i&&i.naturalWidth).map(Jx).filter(Boolean));const[n,r]=P(e,t);for(const i of ql){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function XT(e){const t=w.game,n=t.player,r=w.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||He(o)||o.dash)continue;const[i,a]=P(o.x,o.y);if(Math.abs(i-r.x)>w.W/r.z||Math.abs(a-r.y)>w.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=UT(o.x,o.y);if(s==="water"){A({type:"ring",x:o.x+y(-.1,.1),y:o.y+y(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)I(o.x,o.y,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&I(o.x,o.y,.05,y(-.3,.3),y(-.3,.3),y(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?nt.play("step_"+s,.32,0,80):Math.random()<.5&&Vx("step_"+s,o.x,o.y,.12))}}function qe(e){w.mode==="guest"?(ht.send(e),w.game.predict(e)):w.game.input(w.localId,e)}function t3(){const e=w.game,t=e.player,n=w.cam,r=window.META;let o=null,i=1e9;const a=Nr();for(const s of e.units){if(s.dead||He(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||w.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=r[s.sprite],[u,f]=P(s.x,s.y),c=(u-n.x)*n.z+w.W/2,h=(f-n.y)*n.z+w.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss;let p=(l?l.ay*(s.kind==="minion"?.72:.85):50)*d,g=(m?34:s.kind==="minion"?11:s.kind==="monster"?16:18)*d;const x=s.status&&s.status.transform&&s.status.transform.mount,b=x&&r[x];if(b){const S=(s.status.transform.mountScale||2)*n.z;p+=(b.saddle||b.ay*.62)*S,g=Math.max(g,b.fw*.3*S)}const M=7;let v=1e9;if(Math.abs(w.mouse.x-c)<g+M&&w.mouse.y<h+5*d+M&&w.mouse.y>h-p-M)v=Math.abs(w.mouse.x-c)/(g+M)+Math.abs(w.mouse.y-(h-p/2))/(p+M);else if(s.kind==="hero"||m){const S=Math.hypot(a.x-s.x,a.y-s.y);S<s.r*(s.scale||1)+.2&&(v=1.5+S)}v>1e8||(s.kind==="hero"&&(v-=.4),v<i&&(i=v,o=s))}return o}function GT(){const e=w.cam,t=window.META;let n=null,r=1e9;for(const o of w.game.units){if(o.dead||He(o)||o.kind==="hero"||o.team!==w.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,a]=P(o.x,o.y),s=(i-e.x)*e.z+w.W/2,l=(a-e.y)*e.z+w.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,c=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,h=(f?34:14)*u;if(Math.abs(w.mouse.x-s)<h&&w.mouse.y<l+6*u&&w.mouse.y>l-c){const d=Math.abs(w.mouse.x-s)+Math.abs(w.mouse.y-(l-c/2));d<r&&(r=d,n=o)}}return n}function t1(){const e=w.cam,t=window.META;let n=null,r=1e9;for(const o of w.game.heroes){if(o.dead||He(o))continue;const[i,a]=P(o.x,o.y),s=(i-e.x)*e.z+w.W/2,l=(a-e.y)*e.z+w.H/2;let u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;const c=o.status&&o.status.transform&&o.status.transform.mount,h=c&&t[c];if(h){const d=(o.status.transform.mountScale||2)*e.z;u+=(h.saddle||h.ay*.62)*d,f=Math.max(f,h.fw*.3*d)}if(Math.abs(w.mouse.x-s)<f&&w.mouse.y<l+10*e.z&&w.mouse.y>l-u){const d=Math.abs(w.mouse.x-s)+Math.abs(w.mouse.y-(l-u/2));d<r&&(r=d,n=o)}}return n}function e3(e){const t=Nr();if(!e&&H0)return;const n=e?t3():null;if(e&&(Fi=null),n){H0=!0,qe(["a",n.id]),nt.play("click",.3),w.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=w.game.player,o=(w.game.wards||[]).find(i=>i.team!==r.team&&w.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){H0=!0,qe(["dw",o.id]),nt.play("click",.3),w.marker={x:o.x,y:o.y,t:0,atk:!0};return}}H0=!1,qe(["m",t.x,t.y]),e&&(w.marker={x:t.x,y:t.y,t:0},nt.play("move",.25),w.T-Fm>7&&Math.random()<.5&&(Fm=w.T,Qd(w.game.player.heroKey,"ok")))}function n3(e){const t=w.game.player;if(t.ranks&&!t.ranks[e]){fn(t.points>0&&w.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),nt.play("deny",.6);return}const n=w.game.abilOf(t,e);if((t.cds[e]||0)>.05&&!(n.type==="copypaste"&&t.status&&t.status.copy)){fn("En enfriamiento","#bbbbbb",.8),nt.play("deny",.5);return}const r=Nr();if(Fi=null,vT(n)){qe(["c",e,r.x,r.y]),w.aim=null;return}if(w.aim&&w.aim.k===e){i3();return}w.aim={k:e},nt.play("aim",.3)}function r3(){if(!w.tpAim)return;const e=Nr();qe(["u","tp_scroll",e.x,e.y]),nt.play("click",.4),w.tpAim=!1}function o3(){if(!w.wardAim)return;const e=Nr();qe(["u",w.wardAim.id,e.x,e.y]),nt.play("click",.4),w.wardAim=null}function e1(){const e=w.game&&w.game.player;if(!e||!w.aim)return null;const t=w.game.abilOf(e,w.aim.k);if(!w.game.unitTarget(t))return null;const n=t1();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function i3(){if(!w.aim)return;const e=w.game.player,t=w.game.abilOf(e,w.aim.k);if(w.game.unitTarget(t)){const r=e1();if(!r){fn(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),nt.play("deny",.4);return}qe(["c",w.aim.k,r.x,r.y,r.id]),w.aim=null,w.marker={x:r.x,y:r.y,t:0,atk:r.team!==e.team};return}const n=Nr();qe(["c",w.aim.k,n.x,n.y]),w.aim=null}function cd(e){const t=w.game&&w.game.player;t&&(w.game.canRankUp(t,e)?(qe(["l",e]),nt.play("levelup",.5)):(fn(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),nt.play("deny",.4)))}function uf(){const e=w.game&&w.game.player;if(!e)return;const[t,n]=P(e.x,e.y);w.cam.x=t,w.cam.y=n-30}function hd(){w.cam.tz=xd,w.cam.zoomMsgT=1.2}function Vm(){if(dn.value!=="play"){dn.value==="menu"&&(co.value=!co.value);return}w.aim||w.wardAim||w.tpAim||Ps.value?(w.aim=null,w.wardAim=null,w.tpAim=!1,Ps.value=!1):co.value=!co.value}function Ym(){if(w.aim&&(w.aim=null),w.wardAim){w.wardAim=null;return}if(w.tpAim){w.tpAim=!1;return}w.amove=!1,w.mouse.rd=!0,e3(!0)}function NT(){const e=jd();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),T3(e),U3(Vm),window.addEventListener("mousemove",t=>{K0()||(w.mouse.md&&(w.cam.x-=(t.clientX-w.mouse.x)/w.cam.z,w.cam.y-=(t.clientY-w.mouse.y)/w.cam.z),w.mouse.x=t.clientX,w.mouse.y=t.clientY,w.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{dn.value==="play"&&(w.cam.tz=Math.max(.75,Math.min(3,w.cam.tz*(t.deltaY>0?.9:1.1))),w.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&hd()}),e.addEventListener("mousedown",t=>{nt.init(),nt.startMusic(),window.VOICE&&window.VOICE.init(),K0()||(w.mouse.x=t.clientX,w.mouse.y=t.clientY,dn.value==="play"&&!md()&&R3(t.clientX,t.clientY));const n=w.game;if(!(dn.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){w.mouse.md=!0,t.preventDefault();return}if(!co.value){if(t.button===0&&t.altKey){Vr.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(w.wardAim){o3();return}if(w.tpAim){r3();return}if(w.aim){i3();return}if(w.amove){w.amove=!1;const o=Nr();qe(["am",o.x,o.y]),w.marker={x:o.x,y:o.y,t:0,atk:!0},nt.play("click",.3);return}const r=t1()||GT();Fi=r&&r!==n.player?r.id:null}t.button===2&&Ym()}}}),window.addEventListener("mousedown",t=>{if(t.button!==2||dn.value!=="play"||!w.game||!w.game.player||w.game.winner||co.value)return;const n=t.target;!n||n===e||n.closest&&n.closest(".minimap, .shop, .chat-input, input, textarea")||(t.isTrusted&&K0()||(w.mouse.x=t.clientX,w.mouse.y=t.clientY),t.preventDefault(),t.stopPropagation(),Ym())},!0),window.addEventListener("mouseup",t=>{t.button===2&&(w.mouse.rd=!1),t.button===1&&(w.mouse.md=!1),t.button===0&&(w.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;nt.init();const r=w.game,o=t.key.toUpperCase();if(dn.value==="play"&&r&&r.player&&t.key==="Enter"){ip.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){t.shiftKey?nt.toggleMusic():nt.toggleMute();return}if(t.key==="F3"){RT(),t.preventDefault();return}if(t.key==="F4"&&dn.value!=="play"){m1(),t.preventDefault();return}if(t.key==="Escape"&&dn.value==="menu"){co.value=!co.value;return}if(dn.value!=="play"||!r||!r.player)return;if(md()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&w.mode==="solo"&&(d3(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){Vm();return}if(t.key==="Tab"){t.repeat||(Ol.value=!Ol.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){cd(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(fs=!fs,nt.play("aim",.4)):(fn("No tienes puntos de habilidad","#bbbbbb",1),nt.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&fs){fs=!1,cd(o);return}if("QWER".includes(o)&&o.length===1){w.wardAim=null,n3(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){Vr.useItem(+t.key-1),t.preventDefault();return}const a=!t.ctrlKey&&!t.altKey&&!t.metaKey?X3(G3(t)):null;if(a){a.startsWith("item")?Vr.useItem(+a.slice(4)):a==="recall"?Vr.recall():Vr.useCons(a),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){uf(),t.preventDefault();return}if(t.key==="F2"){Vr.courier(),t.preventDefault();return}if(t.key==="F4"){m1(),fn('Marcado en el registro: "acá se trabó"',"#c8e8ff",1.5),t.preventDefault();return}if(t.key.startsWith("Arrow")){br[t.key]=!0,t.preventDefault();return}if(o==="P"||t.key==="4"&&!t.shiftKey){Ps.value=!Ps.value,nt.play("click",.4),t.preventDefault();return}if(o==="K"){nt.setStyle&&(Vr.setSoundStyle(nt.style()==="epic"?"pixel":"epic"),fn("Sonido: "+(nt.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){w.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){Vr.spell(o);return}o==="S"&&qe(["s"]),o==="Y"&&(w.camFollow=!w.camFollow),t.key==="0"&&hd(),t.key===" "&&(br[" "]=!0,uf(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete br[t.key]}),window.addEventListener("blur",()=>{Ol.value=!1,br={},w.mouse.md=!1,w.mouse.rd=!1,w.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{w.mouse.inWorld=!1})}const Co={};function BT(){const e=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,l.fillRect(d*2,c*2,2,2))})),a){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};Co.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),Co.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),Co.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);Co.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=Co.normal}let Km="";function $T(){const e=w.game&&w.game.player,t=w.hoverUnit,n=w.aim||w.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==Km&&(Km=n,jd().style.cursor=Co[n],document.documentElement.style.cursor=Co.normal,up(Co[n]))}function a3(){const e=w.mode==="solo"?"local":ht.myPeer||"host";return ot&&ot.h&&ot.h[e]}function wu(e){const t=e?[{id:ht.myPeer||"host",team:ni},...ht.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of t)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),ot={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:ro||Gr[0],locked:!1,prep:-1,online:!!e},e&&(w.mode="host"),dn.value="pick",nt.setMode("menu"),nt.play("announce",.6),va()}function dd(e,t){if(!ot||!e)return;const n=t===void 0;if(n&&w.mode==="guest"){ot.locked||(ht.send(["lock",e]),ro=e,ot.pending=e,nt.play("levelup",.7));return}const r=n?w.mode==="solo"?"local":ht.myPeer||"host":t,o=ot.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>ot.blue.includes(l)||ot.red.includes(l);if(s(e))if(n){nt.play("deny",.6);return}else{const l=Gr.filter(u=>!s(u)&&!An[u].noBots&&!An[u].wip);e=l[Math.random()*l.length|0]}ot[i][a]=e,o[2]=1,n&&(ot.locked=!0,ro=e,ot.view=e,nt.play("levelup",.7),Qd(e,"select"))}function jm(e){const t=ot[e],n=[...ot.blue,...ot.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&An[s].role===a));let o=Gr.filter(a=>!n.includes(a)&&!An[a].noBots&&!An[a].wip);const i=o.filter(a=>r.includes(An[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||Gr[Math.random()*Gr.length|0]}function s3(e){if(w.mode==="guest")return HT();if(ot.online){for(const[n,r]of ht.pullCommands())r[0]==="lock"&&dd(r[1],n);(Pm-=e)<=0&&(Pm=.25,ht.publishDraft({t:Math.round(ot.t*10)/10,p:Math.round(ot.prep*10)/10,b:ot.blue,r:ot.red,h:ot.h}))}if(ot.prep<-1e8)return;if(ot.prep>=0){if(ot.prep-=e,ot.prep<=0){ot.prep=-1e9;const n=ot.online;n1(()=>n?qT():f3())}return}if(!ot.online){if(ot.locked){ot.bt=(ot.bt||0)+e;for(const n of ot.order)!n.done&&ot.bt>=(Ei?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,ot[n.team][n.slot]=jm(n.team),nt.play("click",.35))}ot.locked&&ot.order.every(n=>n.done)&&(ot.prep=Ei?1.5:3,nt.play("announce",.7));return}if(Object.values(ot.h).every(n=>n[2])){ot.bt=(ot.bt||0)+e;for(const n of ot.order)!n.done&&ot.bt>=.3+n.q*.28&&(n.done=!0,ot[n.team][n.slot]=jm(n.team),nt.play("click",.35));ot.order.every(n=>n.done)&&(ot.prep=4,nt.play("announce",.7))}}function HT(){const e=ht.hostState;if(e&&e.st==="play"&&e.S){ot=null,wa.value=null,n1(c3);return}const t=e&&e.D;if(!t)return;const n=ot.blue.join()+ot.red.join();ot.t=t.t,ot.prep=t.p,ot.blue=t.b,ot.red=t.r,ot.h=t.h,n!==ot.blue.join()+ot.red.join()&&nt.play("click",.35);const r=a3();r&&r[2]?(ot.locked=!0,ro=ot[r[0]][r[1]],ot.view=ro||ot.view):ot.pending&&performance.now()-(ot.sentAt||0)>1e3&&(ot.sentAt=performance.now(),ht.send(["lock",ot.pending]))}function va(){if(!ot){wa.value=null;return}const e=a3(),t=w.mode==="solo"?"local":ht.myPeer||"host";wa.value={online:!!ot.online,t:ot.t,prep:ot.prep,blue:[...ot.blue],red:[...ot.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(ot.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!ot.locked,pending:ot.pending||null,view:ot.view}}function l3(e){ht.role==="guest"&&ht.hostState&&ht.hostState.st==="pick"&&ht.hostState.D&&(w.mode="guest",w.localId=ht.myPeer,ot={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:ro||Gr[0],locked:!1,prep:-1,online:!0},dn.value="pick",nt.play("announce",.6)),ht.role==="guest"&&ht.hostState&&ht.hostState.st==="play"&&ht.hostState.S&&!Su&&n1(c3),ht.role==="host"&&(ca-=e,ca<=0&&(ca=1.5,ht.setChoice(ro,ni))),(Qm-=e)<=0&&(Qm=.3,Vl())}let Qm=0;function Vl(){const e=[];if(ht.role==="host"){e.push({name:$t("Tú (anfitrión)"),team:ni,me:!0});for(const n of ht.guests())e.push({name:$t("Invitado"),team:n.team,me:!1})}const t=ht.role==="guest"?C3(ht.hostState,ht.myPeer):null;if(t)for(const n of t.players)e.push({name:$t(n.me?"Tú":"Jugador"),team:n.team,me:n.me});else ht.role==="guest"&&(e.push({name:$t("Tú"),team:ni,me:!0}),ht.hostState&&e.push({name:$t("Anfitrión"),team:ht.hostState.team,me:!1}));wn.value={...wn.value,role:ht.role,code:ht.code,myTeam:ni,players:e,hostFound:!!ht.hostState,srv:!!t,owner:!!(t&&t.owner),autoIn:t?t.autoIn:-1}}let Su=!1;function n1(e){Su||(Su=!0,l1.value=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{try{e()}finally{let t=0,n=performance.now();const r=n,o=i=>{t=i-n<26?t+1:0,n=i,t<8&&i-r<2500?requestAnimationFrame(o):(l1.value=!1,Su=!1)};requestAnimationFrame(o)}})))}let Js=!1;function u3(e){try{return localStorage.getItem("lanelings_skin_"+e)}catch{return null}}function WT(){const e=w.game&&w.game.player;if(Js||!e)return;Js=!0;const t=u3(e.heroKey);t&&qe(["skin",t])}function f3(){w.mode="solo",w.localId="local",Js=!1;const e=ot?{blue:ot.blue.slice(1).filter(Boolean),red:ot.red.filter(Boolean)}:null;w.game=new ln.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:ro}],localId:"local",picks:e,difficulty:er.value.difficulty,aram:Ei}),Ei&&(Ei=!1,w.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),ot=null,wa.value=null,r1(),w.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function qT(){w.mode="host",w.localId=ht.myPeer||"host",Js=!1;const e=[],t={blue:[],red:[]};if(ot){for(const n in ot.h){const[r,o]=ot.h[n];e.push({id:n,team:r,hero:ot[r][o]||Gr[0]})}for(const n of["blue","red"])ot[n].forEach((r,o)=>{r&&!Object.values(ot.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}ot=null,wa.value=null,w.game=new ln.Game(window.MAP,{humans:e,localId:w.localId,picks:t,difficulty:er.value.difficulty}),ht.lastSeq={};for(const n of ht.guests())ht.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of ht.guests()){const r=w.game.slots[n.id];r&&(r.cid=n.cid)}ht.onGuests=(n,r)=>{const o=w.game;if(o){for(const i of r.left||[]){const a=o.slots[i.peer];a&&!a.bot&&(a.bot=!0,a.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||VT(o,i)}},r1(),w.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function VT(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(a=>a.bot&&!a.isPlayer&&!a.away&&(!i||a.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,ht.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),Cn("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function c3(){w.mode="guest",w.localId=ht.myPeer,Js=!1,w.game=new ln.Game(window.MAP,{humans:[],localId:w.localId}),w.game.units=[],w.game.heroes=[],w.game.player=null,ht.onSnapshot=e=>{w.game&&w.mode==="guest"&&(V3(),e.pe&&Y3(performance.now()-e.pe),ht.myPeer&&(w.localId=ht.myPeer),w.game.applySnapshot(e,w.localId))},ht.hostState&&ht.hostState.S&&w.game.applySnapshot(ht.hostState.S,w.localId),r1()}const Vo={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let _u=0,qn=-1,Cs=[],YT=0,Lo=!1,ff=0;function md(){return qn>=0}function h3(){const e=w.game,t=e.player;i4(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=An[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},r=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){Lo=!0;return}Lo=!1;const a=ff;ff=0,Md.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++YT,off:a,canSkip:w.mode==="solo"},qn=a,_u=0,Cs=[[.15,()=>ha("blue_team")],...o.map((s,l)=>[Vo.blue+l*Vo.step+.05,()=>nt.play("reveal",.8)]),[Vo.red-.35,()=>ha("red_team")],...i.map((s,l)=>[Vo.red+l*Vo.step+.05,()=>nt.play("reveal",.8)]),[Vo.vs-.02,()=>{nt.play("vsslam",1),ha("versus")}],[Vo.go,()=>{nt.play("warhorn",.9),ha("battle"),nt.setMode("battle")}]].filter(s=>s[0]>=a-.05),nt.setMode("menu")}function KT(){const e=ht.hostState&&ht.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?qn<0?(ff=t,Lo=!0):Math.abs(qn-t)>.6&&(qn=t):(qn>=0||Lo)&&(Lo=!1,qn>=0&&Of())}function jT(e){if(w.mode==="guest"&&KT(),Lo&&w.game&&h3(),qn<0)return;const t=performance.now()/1e3,n=_u?t-_u:0;for(_u=t,qn+=n>2?.05:n||e;Cs.length&&Cs[0][0]<=qn;)Cs.shift()[1]();qn>=Vo.end&&Of()}function Of(){Lo=!1,!(qn<0)&&(qn=-1,Cs=[],Md.value=null,uf(),nt.setMode("battle"))}function d3(){qn<0||w.mode!=="solo"||(qn<Vo.go&&(nt.play("warhorn",.7),ha("battle")),Of())}function r1(){up(Co.normal);try{const e=w.game,t=e&&e.player;B3({build:Jd,mode:w.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:w.gpuName,softGpu:w.softGpu,difficulty:er.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),Cn("game","empieza la partida ("+w.mode+")")}catch{}if(Ry(),qx(),dn.value="play",Is.value=[],nt.setMode("battle"),ld=!1,w.mode==="guest"?Lo=!1:h3(),Fi=null,w.aim=null,w.amove=!1,fs=!1,w.cam.z=w.cam.tz=xd,w.game.player){const[e,t]=P(w.game.player.x,w.game.player.y);w.cam.x=e,w.cam.y=t-30}}async function Zm(){s1.value=!0,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));try{await QT()}finally{let e=0,t=performance.now();const n=t,r=o=>{e=o-t<26?e+1:0,t=o,e<6&&o-n<1500?requestAnimationFrame(r):s1.value=!1};requestAnimationFrame(r)}}async function QT(){k3(),Ei=!1,Il="",pd=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}qn=-1,Cs=[],Lo=!1,ff=0,Md.value=null,co.value=!1,Ps.value=!1,Ol.value=!1,w.aim=null,ot=null,wa.value=null,w.mode!=="solo"&&await ht.leave(),w.game=null,w.mode="solo",qx(),Ry(),lp.value=null,ap.value=null,Is.value=[],dn.value="menu",nt.setMode("menu"),jd().style.cursor=Co.normal}function ZT(e){const t=An[e.heroKey],n=(e.items||[]).map(o=>ln.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:$t("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:$t("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:$t("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:$t("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:$t("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:$t("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:$t("Alcance"),value:String(t.range)}]}const m3=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function p3(e){return(e.items||[]).filter(t=>!ln.ITEM[t].line)}function Jm(e){return e.slots?e.slots.slice(0,6):p3(e).concat([null,null,null,null,null,null]).slice(0,6)}function Hc(e){const t=w.game,n=An[e.heroKey],r=t.player,o=e===r,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(w.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((p,g)=>{const x=ln.ITEM[p],b=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:w.mode==="guest"?(e.itemCdLeft||[])[g]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:$t(x.name),desc:$t(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:b}}),s=e.slots||p3(e).concat([null,null,null,null,null,null]).slice(0,6),l=a.filter(p=>!p.line),u=new Set,f=s.map((p,g)=>{if(!p)return null;const x=l.findIndex((b,M)=>b.id===p&&!u.has(M));return x<0?null:(u.add(x),{...l[x],slot:g})}).filter(Boolean),c=a.filter(p=>p.line),h=m3.map(([p,,g])=>{const x=ln.ITEM[p];return{id:p,key:E3(L3(p)),count:e[g]||0,max:x.max,name:$t(x.name),desc:$t(x.desc)}}),d=e.team!==r.team,m=o||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:$t(n.title),role:$t(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:Yx(e.heroKey),xpFrac:w.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:ln.RECALL_T,stash:(e.stash||[]).slice(),courier:o?JT(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?$t("Pergamino de teleporte"):$t(p.key&&t.abilOf(e,p.key)?t.abilOf(e,p.key).name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const g=t.abilOf(e,p)||n.abil[p],x=e.ranks?e.ranks[p]:1,b=g!==n.abil[p];return{key:p,ik:b?"m"+p:p,name:$t(g.name),desc:$t(g.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:g.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,p)),dmg:g.dmg?Math.round(g.dmg*t.abilMul(e,p)):null,type:g.type,fx:g.fx}}),items:f,gearItems:c,cons:h,gear:w.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:$t("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:$t("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:ZT(e),human:!!e.human,isMe:o,status:i}}function JT(e){const t=w.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id)),n=w.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-w.game.t)):0;return t?{state:t.state||"home",n:w.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function tR(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:$t(r),value:o});return{id:e.id,heroKey:e.sprite,name:$t(t),title:$t(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let pd=!1;function Au(){const e=!!(w.game&&w.game.player&&w.game.player.dead);if(e!==pd){pd=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=w.game,n=t.player;if(!n)return;const r=Fi?Z(Fi):null;r&&(r.dead&&r.kind!=="hero"||He(r))&&(Fi=null);const o=t.msgs.filter(a=>!a.to||a.to===w.localId).slice(-3).map(a=>({id:a.id,text:$t(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{fd=a.human;const s=$t(a.txt);return fd=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:An[a.hero]?An[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});lp.value={me:Hc(n),inspected:r?r.kind==="hero"?Hc(r):tR(r):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(Hc),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?An[a.killerKey].name:$t(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:ud,inShop:t.inShop(n),levelMode:fs,aim:w.aim?w.aim.k:null,amove:w.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(w.cam.tz/xd*100),zoomMsg:w.cam.zoomMsgT,camFollow:w.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:An[a.heroKey].name,team:a.team,level:a.level,gear:w.mode==="guest"?a.gear||0:t.gearCode(a),kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||w.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:w.mode,netLost:!!ht.lost,deathRecap:n.dead?eR(n):yd=null}}let yd=null,tp=null;function eR(e){return yd!==e&&(yd=e,tp=nR(e)),tp}function nR(e){const t=(e.dmgLog||[]).filter(r=>w.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&An[r.h]?An[r.h].name:$t(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function rR(){const e=w.game&&w.game.player;if(!w.tpAim||!e)return null;const n=w.tpHover||(w.mouse.inWorld?{x:w.mouse.wx,y:w.mouse.wy}:null);if(!n)return null;const r=rp(e,n.x,n.y);if(!r)return null;const[o,i]=P(r.x,r.y),{N:a,HW:s,HH:l}=N;return{x:o/(2*a*s),y:i/(2*a*l),ok:Math.hypot(r.x-e.x,r.y-e.y)>=3}}function y3(){const e=w.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=N,i=2*n*r,a=2*n*o,s=(h,d)=>{const[m,p]=P(h,d);return{x:m/i,y:p/a}},l=[];for(const h of e.units){if(h.dead||He(h))continue;const d=s(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===t,human:!!h.human})}const u=w.cam,f=w.W/u.z,c=w.H/u.z;ap.value={units:l,camps:e.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/a,x1:(u.x+f/2)/i,y1:(u.y+c/2)/a},vision:w.visionSrc.map(h=>({...s(h.x,h.y),r:sp[h.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(h=>h.team===t.team&&e.t-h.t<3).map(h=>({...s(h.x,h.y),t:e.t-h.t,kind:h.kind})),wards:(e.wards||[]).filter(h=>e.wardSeenBy(h,t.team)).map(h=>({...s(h.x,h.y),kind:h.kind,mine:h.team===t.team})),tp:rR()}}const Vr={skipIntro(){d3()},shopDenied(e){fn(e,"#ffb070",2),nt.play("deny",.5)},playVsBots(){nt.init(),nt.startMusic(),wu(!1)},playAram(){nt.init(),nt.startMusic(),Ei=!0,wu(!1)},async hostOnline(){wn.value={...wn.value,msg:$t("Creando sala...")};try{await ht.host(ro,ni),dn.value="lobby",wn.value={...wn.value,msg:""},Vl()}catch{wn.value={...wn.value,msg:$t("No se pudo crear la sala")}}},async joinOnline(e){wn.value={...wn.value,msg:$t("Entrando...")};try{if(await ht.join(e,ro,ni),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}dn.value="lobby",wn.value={...wn.value,msg:""},Vl()}catch{wn.value={...wn.value,msg:$t("No se pudo entrar")}}},setLobbyTeam(e){ni=e,ht.setChoice(ro,ni),Vl()},startOnlinePick(){wu(!0)},async leaveLobby(){await ht.leave(),dn.value="menu"},viewHero(e){ot&&!ot.locked&&(ot.view=e,nt.play("aim",.3),va())},lockHero(e){dd(e),va()},randomHero(){const e=Gr.filter(t=>!ot.blue.includes(t)&&!ot.red.includes(t)&&!An[t].wip);dd(e[Math.random()*e.length|0]),va()},backToMenu(){Ei=!1,ot&&ot.online?Zm():(ot=null,wa.value=null,dn.value="menu")},buy(e){const t=w.game&&w.game.player;if(!t)return;const n=w.game.inShop(t),r=window.SIM.ITEM[e];if(w.mode!=="guest"&&!(n?w.game.canBuy(t,e):w.game.canBuyRemote(t,e))){fn(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<r.cost?"Te falta oro":r.consumable?"Ya llevas el máximo de ese":r.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),nt.play("deny",.5);return}qe(["i",e]),nt.play("buy",.6),n||fn("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=w.game&&w.game.player;if(!e)return;const t=w.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id));if(!t){fn(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),nt.play("deny",.4);return}const[n,r]=P(t.x,t.y);w.cam.x=n,w.cam.y=r-30,w.camFollow=!1,qe(["cr","go"]),nt.play("click",.4)},sell(e){const t=w.game&&w.game.player;if(!t||!t.items)return;const n=typeof e=="number"?Jm(t)[e]:e;if(n){if(!w.game.inShop(t)){fn("Solo puedes vender en tu base","#ffb070",1.4),nt.play("deny",.4);return}qe(["v",n]),nt.play("buy",.4)}},useCons(e){const t=w.game&&w.game.player;if(!t||t.dead)return;const n=m3.find(r=>r[0]===e);if(n){if(!t[n[2]]){fn("No tienes: "+ln.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),nt.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){qe(["u",e]),nt.play("heal",.5);return}if(e==="tp_scroll"){if(w.aim=null,w.wardAim=null,w.tpAim){r3();return}w.tpAim=!0,nt.play("aim",.3),fn("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(w.aim=null,w.wardAim&&w.wardAim.id===e){o3();return}w.wardAim={id:e},nt.play("aim",.3)}},useItem(e){const t=w.game&&w.game.player,n=t&&Jm(t)[e];if(!t||e<0||!n){nt.play("deny",.4);return}const r=ln.ITEM[n];if(!(r&&r.active)){fn("Este objeto no se usa: es pasivo","#bbbbbb",1.2),nt.play("deny",.4);return}if((w.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-w.game.t))>.05){fn("En enfriamiento","#bbbbbb",.8),nt.play("deny",.4);return}qe(["u",n,w.mouse.wx,w.mouse.wy]),nt.play("blink",.5)},moveItem(e,t){const n=w.game&&w.game.player;if(!(!n||e===t)){if(w.mode==="guest"&&n.slots){const r=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=r}qe(["mv",e,t]),nt.play("click",.35),Au()}},rankUp(e){cd(e)},castKey(e){w.game&&w.game.player&&n3(e)},spell(e){const t=w.game&&w.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){fn($t(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),nt.play("deny",.5);return}const r=Nr();qe(["sp",e,r.x,r.y]),nt.play(e==="D"?"blink":"wind",.6)},recall(){const e=w.game&&w.game.player;e&&qe(e.recall?["bc"]:["b"])},inspect(e){Fi=e&&w.game&&w.game.player&&e===w.game.player.id?null:e,Au()},centerOn(e){const t=e==null?w.game&&w.game.player:Z(e);if(!t)return;const[n,r]=P(t.x,t.y);w.cam.x=n,w.cam.y=r-30,w.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:a}=N,s=e*(2*r*o)-a,l=t*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&w.tpAim){qe(["u","tp_scroll",u,f]),nt.play("click",.4),w.tpAim=!1;return}n==="right"?(qe(["m",u,f]),w.marker={x:u,y:f,t:0}):(w.cam.x=e*2*r*o,w.cam.y=t*2*r*i,w.mouse.mmDrag=!0)}},async playOnServer(){wn.value={...wn.value,msg:$t("Buscando servidor...")};try{const e=await F3(er.value.difficulty);await Vr.joinOnline(e)}catch{wn.value={...wn.value,msg:$t("El servidor no está disponible")}}},startServerMatch(){z3(ht)},minimapHover(e,t){if(e===null||t===void 0){w.tpHover=null;return}const{N:n,HW:r,HH:o,OX:i}=N,a=e*(2*n*r)-i,s=t*(2*n*o);w.tpHover={x:(a/r+s/o)/2,y:(s/o-a/r)/2},w.tpAim&&y3()},minimapDrag(e,t){const{N:n,HW:r,HH:o}=N;w.cam.x=Math.max(0,Math.min(1,e))*2*n*r,w.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!w.game||!w.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=N,u=t*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=Nr();r=i.x,o=i.y}qe(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&w.game&&qe(["t",e,n]),ip.value=null},bannerDone(e){Is.value=Is.value.filter(t=>t.id!==e)},quitMatch(){Zm()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};nt.setVolume&&nt.setVolume(n[e],t),er.value={...er.value,[e]:t}},setSoundStyle(e){nt.setStyle&&nt.setStyle(e),er.value={...er.value,soundStyle:e}},setShadows(e){w.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}er.value={...er.value,shadows:e}},setCamFollow(e){w.camFollow=e},resetZoom(){hd()},downloadLog(){Cn("user","descarga el registro"),o5()},openOptions(){co.value=!0},setCursorLock(e){O3(e),Au()},setLang(e){gd.value=e,Pl.clear();try{localStorage.setItem("moba_lang",e)}catch{}Kx()},setDifficulty(e){er.value={...er.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){nt.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;nt.play(n[0],n[1])},t:e=>$t(e)};function oR(){const e=new URLSearchParams(location.search);window.__g=()=>({S:w,draft:ot,st:P3,act:Vr,net:ht,cmd:qe,pickHeroAt:t1,aimHero:e1,w2s:P});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const a=async()=>{await Vr.joinOnline(o),dn.value==="menu"&&++i<5&&setTimeout(a,2500)},s=l=>{op.value?a():l>0?setTimeout(()=>s(l-1),300):wn.value={...wn.value,msg:$t("No se pudo entrar")}};s(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){wu(!1),e.get("view")&&(ot.view=e.get("view")),va();return}if(n==="menu")return;ro=n,f3(),e.get("intro")||Of(),e.get("allbots")&&(w.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)w.game.update(1/30),w.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(w.camFollow=!0),e.get("shop")&&(Ps.value=!0),e.get("tab")&&(Ol.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[a,s]=P(o,i);w.cam.x=a,w.cam.y=s}e.get("mx")&&(w.mouse.x=+e.get("mx"),w.mouse.y=+e.get("my"))}const fR=Object.freeze(Object.defineProperty({__proto__:null,BUILD:Jd,skinPref:u3,startClient:_T},Symbol.toStringTag,{value:"Module"}));export{DM as $,Jp as A,Jf as B,ze as C,ki as D,un as E,ge as F,oy as G,PM as H,fr as I,zM as J,t4 as K,e4 as L,tn as M,O1 as N,Wf as O,Po as P,F1 as Q,Xu as R,pf as S,Xt as T,ah as U,K5 as V,Un as W,Tp as X,Pd as Y,ty as Z,n4 as _,y0 as a,Zt as a0,pr as a1,Rd as a2,k5 as a3,uR as a4,H5 as a5,lR as a6,na as a7,Ls as a8,Ad as a9,dy as aa,y5 as ab,x5 as ac,fR as ad,Gi as b,ps as c,nr as d,Xi as e,fe as f,fM as g,ae as h,mf as i,Yp as j,Cd as k,jp as l,Td as m,g1 as n,yr as o,g5 as p,Uu as q,O5 as r,_p as s,Li as t,cr as u,Er as v,ri as w,P1 as x,pn as y,MM as z};
