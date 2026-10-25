const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-DjT7ylEI.js","./webworkerAll-CO8_sj7k.js","./CanvasPool-CmLm9265.js","./colorToUniform-CtDazZcF.js","./bundler-f8xN-zuO.js","./App-CjdoPjx_.js","./index-MHLTOf_V.js","./index-LnmBszfk.css","./WebGPURenderer-pwDEvyOM.js","./SharedSystems-DKVu5Hgt.js","./WebGLRenderer-D8Kxye0t.js"])))=>i.map(i=>d[i]);
import{S as w,w as P,q,M as N,r as y,u as Z,v as Ge,x as ap,T as zu,y as sp,z as lp,A as f1,B as b3,l as bd,p as no,b as v3,C as w3,D as S3,E as _3,F as A3,G as T3,j as dn,n as up,h as R3,s as C3,H as P3,I as eu,J as I3,g as mr,t as Ll,K as O3,c as Sn,L as z3,f as Fs,o as F3,Z as vd,N as E3,i as Es,O as fp,P as Ho,Q as L3,R as k3,d as Ra,m as cp,V as hp,e as dp,U as c1,W as mp,X as D3,Y as U3,_ as h1,$ as X3,a0 as G3,a1 as N3,a2 as wd,a as B3,a3 as $3,a4 as H3,a5 as W3}from"./App-CjdoPjx_.js";import{_ as Fu}from"./index-MHLTOf_V.js";import{g as pp}from"./bundler-f8xN-zuO.js";const H={},Pe={},Qe={},Eu={},ti={proj:(e,t,n,o,r,i)=>!1,hit:e=>!1,shoot:e=>!1,laser:e=>!1},Ca={},Pa={},q3=performance.now(),Ls=()=>Math.round((performance.now()-q3)/100)/10,gs=typeof window<"u"?window.lanelingsDesktop:null,br=[],d1={},Sd=e=>{let t=d1[e];return t===void 0&&(t=d1[e]=br.length,br.push(e)),t};let Zl=new Float64Array(64),Vc=new Float64Array(64),ks=new Float64Array(64);function rn(e){Vc[Sd(e)]=performance.now()}function an(e){const t=Sd(e),n=Vc[t];n&&(Zl[t]+=performance.now()-n,Vc[t]=0)}function yp(e,t){const n=Sd(e);let o=0;return function(...r){const i=o++?0:performance.now();try{return t.apply(this,r)}finally{--o||(Zl[n]+=performance.now()-i)}}}const Lu=[],m1={};let Yc=new Float64Array(48),Kc=new Float64Array(48),ku=[],gp=[];function Du(e,t=1,n){let o=m1[e];o===void 0&&(o=m1[e]=Lu.length,Lu.push(e)),Yc[o]+=t,n&&ku.length<12&&ku.push(e+":"+n)}let yf={};function uo(e,t){yf[e]=t}const gf=900,xp=new Float32Array(gf),Mp=new Float32Array(gf);let Al=0,Df=0,p1=0,kl=0,y0=0;const xs=[];let Tl=0,Uu=0,jc=0,Qc=0,Zc=0,Jc=0,th=0,eh=[],nu=0,Dl=0,Xu=0,_d=0;const nh=new Float64Array(64),ga=[],Ul=[],Gu={};let Nu={},Bu=0;function V3(e){Nu={...Nu,...e}}function Cn(e,t){Ul.push([Ls(),e,String(t).slice(0,400)]),Ul.length>4e3&&Ul.splice(0,800),c0(["E",Ls(),e,String(t).slice(0,400)])}function Y3(e){const t=performance.now();if(kl=p1?Math.max(0,K3()):0,ks.set(Zl),Zl.fill(0),Kc.set(Yc),Yc.fill(0),gp=ku,ku=[],p1=t,!Df){Df=t;return}Df=t,xp[Al]=e,Mp[Al]=kl,Al=(Al+1)%gf;const n=performance.memory;let o=0;if(n){const r=n.usedJSHeapSize;y0&&r<y0-4e6&&(o=Math.round((y0-r)/1e6)),y0=r}Tl++,th+=kl,eh.push(e);for(let r=0;r<br.length;r++)nh[r]+=ks[r];e>Uu&&(Uu=e),e>33&&jc++,e>50&&Qc++,e>100&&Zc++,e>50&&j3(e,o),t-nu>=1e3&&Q3(t)}function K3(){let e=0;for(let t=0;t<br.length;t++)br[t].includes("/")||(e+=Zl[t]);return e}function j3(e,t){const n={};for(let i=0;i<br.length;i++)ks[i]>=.5&&(n[br[i]]=Math.round(ks[i]*10)/10);const o={};for(let i=0;i<Lu.length;i++)Kc[i]&&(o[Lu[i]]=Kc[i]);const r={t:Ls(),ms:Math.round(e),work:Math.round(kl*10)/10,outside:Math.round(e-kl),parts:n,cnt:o,notes:gp.slice(0,12),gc:t,world:{...yf},vis:document.visibilityState,focus:document.hasFocus(),loaf:t5()};ga.push(r),ga.length>1500&&ga.splice(0,300),ru.push(r),ru.length>20&&ru.shift(),c0(["H",r])}function Q3(e){const t=nu?(e-nu)/1e3:1,n=eh.sort((s,l)=>s-l),o=n.length?n[Math.min(n.length-1,Math.floor(n.length*.95))]:0,r=performance.memory,i=[Ls(),Math.round(Tl/t),Math.round(Uu),jc,Qc,Math.round(Jc/t),Math.round(Dl),Math.round(o),Math.round(th/Math.max(1,Tl)*10)/10,Zc,r?Math.round(r.usedJSHeapSize/1e6):-1,Math.round(Xu)];xs.push(i),xs.length>3600&&xs.shift();const a={};for(let s=0;s<br.length;s++){const l=nh[s]/Math.max(1,Tl);l>=.2&&(a[br[s]]=Math.round(l*10)/10)}c0(["S",i,a,{...yf}]),nh.fill(0),Tl=0,Uu=0,jc=0,Qc=0,Zc=0,Jc=0,th=0,eh=[],nu=e}let Uf=0;function Z3(){Jc++;const e=performance.now();if(Uf){const t=e-Uf;Xu=Xu*.9+Math.abs(t-33)*.1,t>250&&Cn("red",`foto tarde: ${Math.round(t)} ms sin fotos del anfitrion`)}Uf=e}function J3(e){Dl=Dl?Dl*.8+e*.2:e}const ou=[];function t5(){const e=performance.now();return ou.filter(t=>e-(t.start+t.dur)<400).slice(-3)}try{new PerformanceObserver(t=>{for(const n of t.getEntries()){const o=(n.scripts||[]).slice(0,4).map(r=>({fn:r.sourceFunctionName||r.invoker||"",src:String(r.sourceURL||"").split("/").pop(),ms:Math.round(r.duration)}));ou.push({start:n.startTime,dur:Math.round(n.duration),block:Math.round(n.blockingDuration||0),render:n.renderStart?Math.round(n.startTime+n.duration-n.renderStart):0,style:Math.round(n.styleAndLayoutStart?n.startTime+n.duration-n.styleAndLayoutStart:0),scripts:o}),ou.length>80&&ou.shift()}}).observe({type:"long-animation-frame",buffered:!1})}catch{}try{new PerformanceObserver(t=>{for(const n of t.getEntries())_d++,n.duration>120&&Cn("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}if(typeof window<"u"){document.addEventListener("visibilitychange",()=>Cn("ventana","pestaña "+document.visibilityState)),window.addEventListener("blur",()=>Cn("ventana","perdio el foco (alt-tab u otra ventana)")),window.addEventListener("focus",()=>Cn("ventana","volvio el foco")),window.addEventListener("resize",()=>Cn("ventana",`tamaño ${innerWidth}x${innerHeight}`)),document.addEventListener("fullscreenchange",()=>Cn("ventana",document.fullscreenElement?"pantalla completa":"salio de pantalla completa")),window.addEventListener("error",t=>Cn("error",(t.message||"")+" @"+String(t.filename||"").split("/").pop()+":"+t.lineno)),window.addEventListener("unhandledrejection",t=>Cn("error","promesa: "+String(t.reason&&(t.reason.stack||t.reason.message)||t.reason).slice(0,300)));const e=t=>{t.__telw||(t.__telw=1,t.addEventListener("webglcontextlost",()=>Cn("gpu","se perdio el contexto WebGL ("+(t.id||t.className||"canvas")+")")),t.addEventListener("webglcontextrestored",()=>Cn("gpu","se recupero el contexto WebGL")))};setInterval(()=>{document.querySelectorAll("canvas").forEach(t=>e(t))},3e3)}async function e5(){const e=navigator,t={browser:navigator.userAgent,cores:e.hardwareConcurrency,memGB:e.deviceMemory,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,window:`${innerWidth}x${innerHeight}`,lang:navigator.language};t.hz=await new Promise(n=>{const o=[],r=i=>{if(o.push(i),o.length<40)requestAnimationFrame(r);else{const a=o.slice(1).map((s,l)=>s-o[l]).sort((s,l)=>s-l);n(Math.round(1e3/a[Math.floor(a.length/2)]))}};requestAnimationFrame(r)});try{if(e.getBattery){const n=await e.getBattery();t.battery={charging:n.charging,level:Math.round(n.level*100)}}}catch{}try{gs&&gs.sysInfo&&(t.desktop=await gs.sysInfo())}catch{}return t}let $u=null;e5().then(e=>{$u=e,c0(["SYS",e])}).catch(()=>{});let ru=[];function n5(){const e=xs.slice(-5);if(!e.length)return null;const t=o=>Math.round(e.reduce((r,i)=>r+i[o],0)/e.length),n={fps:t(1),worst:Math.max(...e.map(o=>o[2])),slow:e.reduce((o,r)=>o+r[3],0),snaps:t(5),ping:t(6),p95:t(7),mem:t(10),jit:t(11),lt:_d,err:Ul.filter(o=>o[1]==="error").length,sys:y1?void 0:$u,hitches:ru.splice(0).map(o=>({t:o.t,ms:o.ms,work:o.work,outside:o.outside,parts:o.parts,cnt:o.cnt,gc:o.gc,loaf:o.loaf.slice(0,1)}))};return $u&&(y1=!0),n}let y1=!1;function o5(e,t){const n=Gu[e]=Gu[e]||{sys:null,rows:[],hitches:[]};if(t.sys&&(n.sys=t.sys),t.hitches){for(const a of t.hitches)n.hitches.push(a);n.hitches.length>600&&n.hitches.splice(0,100)}const{hitches:o,sys:r,...i}=t;n.rows.push([Ls(),i]),n.rows.length>800&&n.rows.shift(),c0(["P",e,i,t.hitches||[],t.sys||null])}let Ms=[];function c0(e){Ms.push(e),Ms.length>2e4&&Ms.splice(0,5e3)}const Xl=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+"_"+Math.floor(Math.random()*1e4);let Xf=null;function r5(){return Xf||(Xf=new Promise(e=>{try{const t=indexedDB.open("lanelings_logs",1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains("chunks")||n.createObjectStore("chunks",{autoIncrement:!0}).createIndex("match","match")},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null)}catch{e(null)}})),Xf}let Ga=!1;function iu(){if(Ga||!Ms.length)return;Ga=!0;const e=Ms.splice(0,Ms.length),t={id:Xl,...Nu},n=e.map(o=>JSON.stringify(o)).join(`
`)+`
`;try{gs&&gs.appendLog&&gs.appendLog(Xl,n,t)}catch{}r5().then(o=>{if(!o){Ga=!1;return}try{const r=o.transaction("chunks","readwrite");r.objectStore("chunks").add({match:Xl,t:Date.now(),head:t,lines:n}),r.oncomplete=()=>{Ga=!1,i5(o)},r.onerror=()=>{Ga=!1}}catch{Ga=!1}})}let g1=!1;function i5(e){if(!g1){g1=!0;try{const t=e.transaction("chunks","readwrite").objectStore("chunks"),n=new Set,o=[];t.openCursor().onsuccess=r=>{const i=r.target.result;if(i){o.push([i.key,i.value.match]),n.add(i.value.match),i.continue();return}const a=new Set([...n].sort().slice(-12));for(const[s,l]of o)a.has(l)||t.delete(s)}}catch{}}}const a5=e=>window.requestIdleCallback?window.requestIdleCallback(e,{timeout:4e3}):setTimeout(e,50);typeof window<"u"&&(setInterval(()=>a5(iu),12e3),window.addEventListener("pagehide",iu),window.addEventListener("beforeunload",iu));function x1(){Bu++,Cn("marca",'el jugador marco "aca se trabo" (#'+Bu+")")}function s5(){return{gap:xp,work:Mp,pos:Al,ring:gf,secs:xs.slice(-1)[0]||null,ping:Dl,jitter:Xu,hitches:ga.length,last:ga.slice(-1)[0]||null,gauges:yf,marks:Bu,parts:(()=>{const e=[];for(let t=0;t<br.length;t++)ks[t]>=.3&&e.push([br[t],ks[t]]);return e.sort((t,n)=>n[1]-t[1]).slice(0,10)})()}}function l5(){const e={...Nu,id:Xl,sys:$u,durationS:Ls(),longTasks:_d,hitchCount:ga.length,marks:Bu},t=["LANELINGS LOG v2",JSON.stringify(e),"","# por segundo: t, fps, peor ms, cuadros>33, >50, fotos/s, ping, p95 ms, trabajo medio ms, >100, memoria MB, jitter"];for(const n of xs)t.push(n.join(","));t.push("",'# tirones (cuadro >50 ms): ms total, trabajo del juego, "outside" = esperando placa/navegador/Windows, partes, contadores, gc MB, mundo, navegador');for(const n of ga)t.push(JSON.stringify(n));t.push("","# eventos: t, tipo, texto");for(const n of Ul)t.push(n.join(" | "));for(const n in Gu){const o=Gu[n];t.push("","# invitado "+n+" — sistema: "+JSON.stringify(o.sys));for(const[r,i]of o.rows)t.push(r+" "+JSON.stringify(i));t.push("# tirones del invitado "+n);for(const r of o.hitches)t.push(JSON.stringify(r))}return t.join(`
`)}function u5(){iu();const e=l5(),t="lanelings-log-"+Xl+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}var fn=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(fn||{});const oh=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},g0=(e,t)=>oh(e).priority??t,$i={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(oh).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(oh).forEach(t=>{t.type.forEach(n=>{const o=this._addHandlers,r=this._queue;o[n]?o[n]?.(t):(r[n]=r[n]||[],r[n]?.push(t))})}),this},handle(e,t,n){const o=this._addHandlers,r=this._removeHandlers;if(o[e]||r[e])throw new Error(`Extension type ${e} already has a handler`);o[e]=t,r[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,o=>{t.findIndex(i=>i.name===o.name)>=0||(t.push({name:o.name,value:o.ref}),t.sort((i,a)=>g0(a.value,n)-g0(i.value,n)))},o=>{const r=t.findIndex(i=>i.name===o.name);r!==-1&&t.splice(r,1)})},handleByList(e,t,n=-1){return this.handle(e,o=>{t.includes(o.ref)||(t.push(o.ref),t.sort((r,i)=>g0(i,n)-g0(r,n)))},o=>{const r=t.indexOf(o.ref);r!==-1&&t.splice(r,1)})}},f5={extension:{type:fn.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Fu(()=>import("./browserAll-DjT7ylEI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},c5={extension:{type:fn.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Fu(()=>import("./webworkerAll-CO8_sj7k.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class En{constructor(t,n,o){this._x=n||0,this._y=o||0,this._observer=t}clone(t){return new En(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var Gf={exports:{}},M1;function h5(){return M1||(M1=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function o(){}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(n=!1));function r(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new r(f,c||l,h),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new o:delete l._events[u]}function s(){this._events=new o,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)t.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,m=new Array(d);h<d;h++)m[h]=c[h].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(u,f,c,h,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var g=this._events[p],x=arguments.length,b,M;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,h),!0;case 5:return g.fn.call(g.context,f,c,h,d),!0;case 6:return g.fn.call(g.context,f,c,h,d,m),!0}for(M=1,b=new Array(x-1);M<x;M++)b[M-1]=arguments[M];g.fn.apply(g.context,b)}else{var v=g.length,S;for(M=0;M<v;M++)switch(g[M].once&&this.removeListener(u,g[M].fn,void 0,!0),x){case 1:g[M].fn.call(g[M].context);break;case 2:g[M].fn.call(g[M].context,f);break;case 3:g[M].fn.call(g[M].context,f,c);break;case 4:g[M].fn.call(g[M].context,f,c,h);break;default:if(!b)for(S=1,b=new Array(x-1);S<x;S++)b[S-1]=arguments[S];g[M].fn.apply(g[M].context,b)}}return!0},s.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},s.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},s.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var p=0,g=[],x=m.length;p<x;p++)(m[p].fn!==f||h&&!m[p].once||c&&m[p].context!==c)&&g.push(m[p]);g.length?this._events[d]=g.length===1?g[0]:g:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new o,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(Gf)),Gf.exports}var d5=h5();const Hi=pp(d5),m5=Math.PI*2,p5=180/Math.PI,Ds=Math.PI/180;class zr{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new zr(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Nf.x=0,Nf.y=0,Nf}}const Nf=new zr;class tn{constructor(t=1,n=0,o=0,r=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=o,this.d=r,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,o,r,i,a){return this.a=t,this.b=n,this.c=o,this.d=r,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const o=n||this.array;return t?(o[0]=this.a,o[1]=this.b,o[2]=0,o[3]=this.c,o[4]=this.d,o[5]=0,o[6]=this.tx,o[7]=this.ty,o[8]=1):(o[0]=this.a,o[1]=this.c,o[2]=this.tx,o[3]=this.b,o[4]=this.d,o[5]=this.ty,o[6]=0,o[7]=0,o[8]=1),o}apply(t,n){n=n||new zr;const o=t.x,r=t.y;return n.x=this.a*o+this.c*r+this.tx,n.y=this.b*o+this.d*r+this.ty,n}applyInverse(t,n){n=n||new zr;const o=this.a,r=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(o*a+i*-r),f=t.x,c=t.y;return n.x=a*u*f+-i*u*c+(l*i-s*a)*u,n.y=o*u*c+-r*u*f+(-l*o+s*r)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),o=Math.sin(t),r=this.a,i=this.c,a=this.tx;return this.a=r*n-this.b*o,this.b=r*o+this.b*n,this.c=i*n-this.d*o,this.d=i*o+this.d*n,this.tx=a*n-this.ty*o,this.ty=a*o+this.ty*n,this}append(t){const n=this.a,o=this.b,r=this.c,i=this.d;return this.a=t.a*n+t.b*r,this.b=t.a*o+t.b*i,this.c=t.c*n+t.d*r,this.d=t.c*o+t.d*i,this.tx=t.tx*n+t.ty*r+this.tx,this.ty=t.tx*o+t.ty*i+this.ty,this}appendFrom(t,n){const o=t.a,r=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=o*u+r*c,this.b=o*f+r*h,this.c=i*u+a*c,this.d=i*f+a*h,this.tx=s*u+l*c+n.tx,this.ty=s*f+l*h+n.ty,this}setTransform(t,n,o,r,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(o*this.a+r*this.c),this.ty=n-(o*this.b+r*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const o=this.a,r=this.c;this.a=o*t.a+this.b*t.c,this.b=o*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,o=this.b,r=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-r,i),l=Math.atan2(o,n),u=Math.abs(s+l);return u<1e-5||Math.abs(m5-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+o*o),t.scale.y=Math.sqrt(r*r+i*i),t.position.x=this.tx+(a.x*n+a.y*r),t.position.y=this.ty+(a.x*o+a.y*i),t}invert(){const t=this.a,n=this.b,o=this.c,r=this.d,i=this.tx,a=t*r-n*o;return this.a=r/a,this.b=-n/a,this.c=-o/a,this.d=t/a,this.tx=(o*this.ty-r*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new tn;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return g5.identity()}static get shared(){return y5.identity()}}const y5=new tn,g5=new tn,Ji=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ta=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],ea=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],na=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],rh=[],bp=[],x0=Math.sign;function x5(){for(let e=0;e<16;e++){const t=[];rh.push(t);for(let n=0;n<16;n++){const o=x0(Ji[e]*Ji[n]+ea[e]*ta[n]),r=x0(ta[e]*Ji[n]+na[e]*ta[n]),i=x0(Ji[e]*ea[n]+ea[e]*na[n]),a=x0(ta[e]*ea[n]+na[e]*na[n]);for(let s=0;s<16;s++)if(Ji[s]===o&&ta[s]===r&&ea[s]===i&&na[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new tn;t.set(Ji[e],ta[e],ea[e],na[e],0,0),bp.push(t)}}x5();const nn={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Ji[e],uY:e=>ta[e],vX:e=>ea[e],vY:e=>na[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>rh[e][t],sub:(e,t)=>rh[e][nn.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?nn.S:nn.N:Math.abs(t)*2<=Math.abs(e)?e>0?nn.E:nn.W:t>0?e>0?nn.SE:nn.SW:e>0?nn.NE:nn.NW,matrixAppendRotationInv:(e,t,n=0,o=0)=>{const r=bp[nn.inv(t)];r.tx=n,r.ty=o,e.append(r)}},M0=[new zr,new zr,new zr,new zr];class co{constructor(t=0,n=0,o=0,r=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(o),this.height=Number(r)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new co(0,0,0,0)}clone(){return new co(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,o,r=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=o*(1-r),f=o-u,c=s-u,h=s+i+u,d=l-u,m=l+a+u,p=s+f,g=s+i-f,x=l+f,b=l+a-f;return t>=c&&t<=h&&n>=d&&n<=m&&!(t>p&&t<g&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const z=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>z}const o=this.left,r=this.right,i=this.top,a=this.bottom;if(r<=o||a<=i)return!1;const s=M0[0].set(t.left,t.top),l=M0[1].set(t.left,t.bottom),u=M0[2].set(t.right,t.top),f=M0[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=o||Math.min(s.x,l.x,u.x,f.x)>=r||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const h=c*(l.y-s.y),d=c*(s.x-l.x),m=h*o+d*i,p=h*r+d*i,g=h*o+d*a,x=h*r+d*a;if(Math.max(m,p,g,x)<=h*s.x+d*s.y||Math.min(m,p,g,x)>=h*f.x+d*f.y)return!1;const b=c*(s.y-u.y),M=c*(u.x-s.x),v=b*o+M*i,S=b*r+M*i,_=b*o+M*a,A=b*r+M*a;return!(Math.max(v,S,_,A)<=b*s.x+M*s.y||Math.min(v,S,_,A)>=b*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),o=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(o-n,0),this.y=r,this.height=Math.max(i-r,0),this}ceil(t=1,n=.001){const o=Math.ceil((this.x+this.width-n)*t)/t,r=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=o-this.x,this.height=r-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),o=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=o-n,this.y=r,this.height=i-r,this}getBounds(t){return t||(t=new co),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Bf={default:-1};function ho(e="default"){return Bf[e]===void 0&&(Bf[e]=-1),++Bf[e]}const b1={},xo="8.0.0",yR="8.3.4";function Zt(e,t,n=3){if(b1[t])return;let o=new Error().stack;typeof o>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(o=o.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(o),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(o))),b1[t]=!0}const vp=()=>{};function v1(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function w1(e){return!(e&e-1)&&!!e}function M5(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const S1=Object.create(null);function b5(e){const t=S1[e];return t===void 0&&(S1[e]=ho("resource")),t}const wp=class Sp extends Hi{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Sp.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Zt(xo,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=b5(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};wp.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let v5=wp;const _p=class Ap extends Hi{constructor(t={}){super(),this.options=t,this.uid=ho("textureSource"),this._resourceType="textureSource",this._resourceId=ho("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Ap.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new v5(M5(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=ho("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,o){o||(o=this._resolution),t||(t=this.width),n||(n=this.height);const r=Math.round(t*o),i=Math.round(n*o);return this.width=r/o,this.height=i/o,this._resolution=o,this.pixelWidth===r&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=r,this.pixelHeight=i,this.emit("resize",this),this._resourceId=ho("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=w1(this.pixelWidth)&&w1(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};_p.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Mo=_p;class Ad extends Mo{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let o=t.format;o||(n instanceof Float32Array?o="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?o="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?o="rgba16uint":(n instanceof Int8Array,o="bgra8unorm")),super({...t,resource:n,format:o}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Ad.extension=fn.TextureSource;const _1=new tn;class w5{constructor(t,n){this.mapCoord=new tn,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const o=this.mapCoord;for(let r=0;r<t.length;r+=2){const i=t[r],a=t[r+1];n[r]=i*o.a+a*o.c+o.tx,n[r+1]=i*o.b+a*o.d+o.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const o=t.orig,r=t.trim;r&&(_1.set(o.width/r.width,0,0,o.height/r.height,-r.x/r.width,-r.y/r.height),this.mapCoord.append(_1));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class Ut extends Hi{constructor({source:t,label:n,frame:o,orig:r,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=ho("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new co,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new Mo,this.noFrame=!o,o)this.frame.copyFrom(o);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=r||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new w5(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:o,height:r}=this._source,i=n.x/o,a=n.y/r,s=n.width/o,l=n.height/r;let u=this.rotate;if(u){const f=s/2,c=l/2,h=i+f,d=a+c;u=nn.add(u,nn.NW),t.x0=h+f*nn.uX(u),t.y0=d+c*nn.uY(u),u=nn.add(u,2),t.x1=h+f*nn.uX(u),t.y1=d+c*nn.uY(u),u=nn.add(u,2),t.x2=h+f*nn.uX(u),t.y2=d+c*nn.uY(u),u=nn.add(u,2),t.x3=h+f*nn.uX(u),t.y3=d+c*nn.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Zt(xo,"Texture.baseTexture is now Texture.source"),this._source}}Ut.EMPTY=new Ut({label:"EMPTY",source:new Mo({label:"EMPTY"})});Ut.EMPTY.destroy=vp;Ut.WHITE=new Ut({source:new Ad({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Ut.WHITE.destroy=vp;function S5(e,t,n,o){const{width:r,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*r-o,e.maxX=e.minX+s,e.minY=a.y-t._y*i-o,e.maxY=e.minY+l}else e.minX=-t._x*r-o,e.maxX=e.minX+r,e.minY=-t._y*i-o,e.maxY=e.minY+i}const A1=new tn;class Ui{constructor(t=1/0,n=1/0,o=-1/0,r=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=A1,this.minX=t,this.minY=n,this.maxX=o,this.maxY=r}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new co);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=A1,this}set(t,n,o,r){this.minX=t,this.minY=n,this.maxX=o,this.maxY=r}addFrame(t,n,o,r,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,m=this.maxX,p=this.maxY,g=a*t+l*n+f,x=s*t+u*n+c;g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*o+l*n+f,x=s*o+u*n+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*t+l*r+f,x=s*t+u*r+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=a*o+l*r+f,x=s*o+u*r+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),this.minX=h,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,o=this.minY,r=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:c}=t;let h=a*n+l*o+f,d=s*n+u*o+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=a*r+l*o+f,d=s*r+u*o+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*n+l*i+f,d=s*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*r+l*i+f,d=s*r+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,o,r){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<o&&(this.minY=o),this.maxY>r&&(this.maxY=r),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ui(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,o,r){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;r||(r=this.matrix);const u=r.a,f=r.b,c=r.c,h=r.d,d=r.tx,m=r.ty;for(let p=n;p<o;p+=2){const g=t[p],x=t[p+1],b=u*g+c*x+d,M=f*g+h*x+m;i=b<i?b:i,a=M<a?M:a,s=b>s?b:s,l=M>l?M:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var _5={grad:.9,turn:360,rad:360/(2*Math.PI)},Nr=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Nn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},tr=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Tp=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},T1=function(e){return{r:tr(e.r,0,255),g:tr(e.g,0,255),b:tr(e.b,0,255),a:tr(e.a)}},$f=function(e){return{r:Nn(e.r),g:Nn(e.g),b:Nn(e.b),a:Nn(e.a,3)}},A5=/^#([0-9a-f]{3,8})$/i,b0=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Rp=function(e){var t=e.r,n=e.g,o=e.b,r=e.a,i=Math.max(t,n,o),a=i-Math.min(t,n,o),s=a?i===t?(n-o)/a:i===n?2+(o-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:r}},Cp=function(e){var t=e.h,n=e.s,o=e.v,r=e.a;t=t/360*6,n/=100,o/=100;var i=Math.floor(t),a=o*(1-n),s=o*(1-(t-i)*n),l=o*(1-(1-t+i)*n),u=i%6;return{r:255*[o,s,a,a,l,o][u],g:255*[l,o,o,s,a,a][u],b:255*[a,a,l,o,o,s][u],a:r}},R1=function(e){return{h:Tp(e.h),s:tr(e.s,0,100),l:tr(e.l,0,100),a:tr(e.a)}},C1=function(e){return{h:Nn(e.h),s:Nn(e.s),l:Nn(e.l),a:Nn(e.a,3)}},P1=function(e){return Cp((n=(t=e).s,{h:t.h,s:(n*=((o=t.l)<50?o:100-o)/100)>0?2*n/(o+n)*100:0,v:o+n,a:t.a}));var t,n,o},Gl=function(e){return{h:(t=Rp(e)).h,s:(r=(200-(n=t.s))*(o=t.v)/100)>0&&r<200?n*o/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,n,o,r},T5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,R5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,C5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,P5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ih={string:[[function(e){var t=A5.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Nn(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Nn(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=C5.exec(e)||P5.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:T1({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=T5.exec(e)||R5.exec(e);if(!t)return null;var n,o,r=R1({h:(n=t[1],o=t[2],o===void 0&&(o="deg"),Number(n)*(_5[o]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return P1(r)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,o=e.b,r=e.a,i=r===void 0?1:r;return Nr(t)&&Nr(n)&&Nr(o)?T1({r:Number(t),g:Number(n),b:Number(o),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,o=e.l,r=e.a,i=r===void 0?1:r;if(!Nr(t)||!Nr(n)||!Nr(o))return null;var a=R1({h:Number(t),s:Number(n),l:Number(o),a:Number(i)});return P1(a)},"hsl"],[function(e){var t=e.h,n=e.s,o=e.v,r=e.a,i=r===void 0?1:r;if(!Nr(t)||!Nr(n)||!Nr(o))return null;var a=function(s){return{h:Tp(s.h),s:tr(s.s,0,100),v:tr(s.v,0,100),a:tr(s.a)}}({h:Number(t),s:Number(n),v:Number(o),a:Number(i)});return Cp(a)},"hsv"]]},I1=function(e,t){for(var n=0;n<t.length;n++){var o=t[n][0](e);if(o)return[o,t[n][1]]}return[null,void 0]},I5=function(e){return typeof e=="string"?I1(e.trim(),ih.string):typeof e=="object"&&e!==null?I1(e,ih.object):[null,void 0]},Hf=function(e,t){var n=Gl(e);return{h:n.h,s:tr(n.s+100*t,0,100),l:n.l,a:n.a}},Wf=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},O1=function(e,t){var n=Gl(e);return{h:n.h,s:n.s,l:tr(n.l+100*t,0,100),a:n.a}},ah=function(){function e(t){this.parsed=I5(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Nn(Wf(this.rgba),2)},e.prototype.isDark=function(){return Wf(this.rgba)<.5},e.prototype.isLight=function(){return Wf(this.rgba)>=.5},e.prototype.toHex=function(){return t=$f(this.rgba),n=t.r,o=t.g,r=t.b,a=(i=t.a)<1?b0(Nn(255*i)):"","#"+b0(n)+b0(o)+b0(r)+a;var t,n,o,r,i,a},e.prototype.toRgb=function(){return $f(this.rgba)},e.prototype.toRgbString=function(){return t=$f(this.rgba),n=t.r,o=t.g,r=t.b,(i=t.a)<1?"rgba("+n+", "+o+", "+r+", "+i+")":"rgb("+n+", "+o+", "+r+")";var t,n,o,r,i},e.prototype.toHsl=function(){return C1(Gl(this.rgba))},e.prototype.toHslString=function(){return t=C1(Gl(this.rgba)),n=t.h,o=t.s,r=t.l,(i=t.a)<1?"hsla("+n+", "+o+"%, "+r+"%, "+i+")":"hsl("+n+", "+o+"%, "+r+"%)";var t,n,o,r,i},e.prototype.toHsv=function(){return t=Rp(this.rgba),{h:Nn(t.h),s:Nn(t.s),v:Nn(t.v),a:Nn(t.a,3)};var t},e.prototype.invert=function(){return Sr({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Sr(Hf(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Sr(Hf(this.rgba,-t))},e.prototype.grayscale=function(){return Sr(Hf(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Sr(O1(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Sr(O1(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Sr({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Nn(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=Gl(this.rgba);return typeof t=="number"?Sr({h:t,s:n.s,l:n.l,a:n.a}):Nn(n.h)},e.prototype.isEqual=function(t){return this.toHex()===Sr(t).toHex()},e}(),Sr=function(e){return e instanceof ah?e:new ah(e)},z1=[],O5=function(e){e.forEach(function(t){z1.indexOf(t)<0&&(t(ah,ih),z1.push(t))})};function z5(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},o={};for(var r in n)o[n[r]]=r;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=o[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));p<c&&(c=p,h=m)}return h}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}O5([z5]);const Us=class Rl{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Rl)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const o=typeof t;if(o!==typeof n)return!1;if(o==="number"||o==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,o,r]=this._components;return{r:t,g:n,b:o,a:r}}toRgb(){const[t,n,o]=this._components;return{r:t,g:n,b:o}}toRgbaString(){const[t,n,o]=this.toUint8RgbArray();return`rgba(${t},${n},${o},${this.alpha})`}toUint8RgbArray(t){const[n,o,r]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(o*255),t[2]=Math.round(r*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,o,r,i]=this._components;return t[0]=n,t[1]=o,t[2]=r,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,o,r]=this._components;return t[0]=n,t[1]=o,t[2]=r,t}toNumber(){return this._int}toBgrNumber(){const[t,n,o]=this.toUint8RgbArray();return(o<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,o,r,i]=Rl._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=o,this._components[2]*=r,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let o=this._int>>16&255,r=this._int>>8&255,i=this._int&255;return n&&(o=o*t+.5|0,r=r*t+.5|0,i=i*t+.5|0),(t*255<<24)+(o<<16)+(r<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,o,r,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,o=(a>>8&255)/255,r=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,o,r,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,o,r,i=255]=t,n/=255,o/=255,r/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=Rl.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=Sr(t);a.isValid()&&({r:n,g:o,b:r,a:i}=a.rgba,n/=255,o/=255,r/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=o,this._components[2]=r,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,o]=this._components;this._int=(t*255<<16)+(n*255<<8)+(o*255|0)}_clamp(t,n=0,o=1){return typeof t=="number"?Math.min(Math.max(t,n),o):(t.forEach((r,i)=>{t[i]=Math.min(Math.max(r,n),o)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Rl||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Us.shared=new Us;Us._temp=new Us;Us.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Un=Us;const F5={cullArea:null,cullable:!1,cullableChildren:!0};class Td{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class E5{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Td(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const o=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[o]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Hu=new E5,L5={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Zt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function k5(e,t,n){const o=e.length;let r;if(t>=o||n===0)return;n=t+n>o?o-t:n;const i=o-n;for(r=t;r<i;++r)e[r]=e[r+n];e.length=i}const D5={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,o=n-e,r=[];if(o>0&&o<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(r.push(s),s.parent=null)}k5(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(r);for(let a=0;a<r.length;++a)this.emit("childRemoved",r[a],this,a),r[a].emit("removed",this);return r}else if(o===0&&this.children.length===0)return r;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Zt(xo,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const r=e.parent.children.indexOf(e);if(e.parent===this&&r===t)return e;r!==-1&&e.parent.children.splice(r,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const o=this.renderGroup||this.parentRenderGroup;return o&&o.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),o=this.getChildIndex(t);this.children[n]=t,this.children[o]=e;const r=this.renderGroup||this.parentRenderGroup;r&&(r.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const o=this.worldTransform.clone();return o.invert(),n.prepend(o),e.setFromMatrix(n),e}};class F1{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class U5{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const o=this._tests[n];if(o.test(t))return Hu.get(o.maskClass,t)}return t}returnMaskEffect(t){Hu.return(t)}}const sh=new U5;$i.handleByList(fn.MaskEffect,sh._effectClasses);const X5={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,o)=>n.priority-o.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),sh.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=sh.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new F1);e=e;const n=e?.length>0,o=t.filters?.length>0,r=n!==o;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),r&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new F1),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},G5={label:null,get name(){return Zt(xo,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Zt(xo,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let o=0;o<n.length;o++){const r=n[o];if(r.label===e||e instanceof RegExp&&e.test(r.label))return r}if(t)for(let o=0;o<n.length;o++){const i=n[o].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const o=this.children;for(let r=0;r<o.length;r++){const i=o[r];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let r=0;r<o.length;r++)o[r].getChildrenByLabel(e,!0,n);return n}},mo=new Td(tn),Xs=new Td(Ui);function Pp(e,t,n){n.clear();let o,r;return e.parent?t?o=e.parent.worldTransform:(r=mo.get().identity(),o=Rd(e,r)):o=tn.IDENTITY,Ip(e,n,o,t),r&&mo.return(r),n.isValid||n.set(0,0,0,0),n}function Ip(e,t,n,o){if(!e.visible||!e.measurable)return;let r;o?r=e.worldTransform:(e.updateLocalTransform(),r=mo.get(),r.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=Xs.get().clear()),e.boundsArea)t.addRect(e.boundsArea,r);else{e.bounds&&(t.matrix=r,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)Ip(e.children[s],t,r,o)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,tn.IDENTITY),Xs.return(t)}o||mo.return(r)}function Rd(e,t){const n=e.parent;return n&&(Rd(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function N5(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,o=e>>8&255,r=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=o*a/255|0,f=r*s/255|0;return(l<<16)+(u<<8)+f}const E1=16777215;function L1(e,t){return e===E1?t:t===E1?e:N5(e,t)}function au(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const B5={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=Rd(this,mo.get().identity());return e.appendFrom(this.localTransform,n),mo.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?au(this.renderGroup.worldColor):this.parentRenderGroup?au(L1(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=L1(t,n.localColor),n=n.parent;return au(t)}};let qf=0;const k1=500;function ai(...e){qf!==k1&&(qf++,qf===k1?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function Op(e,t,n){return t.clear(),n||(n=tn.IDENTITY),zp(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function zp(e,t,n,o,r){let i;if(r)i=mo.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=mo.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=Xs.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)zp(l[u],t,i,o,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,o);a.addBounds(t,tn.IDENTITY),Xs.return(t)}mo.return(i)}function Fp(e,t){const n=e.children;for(let o=0;o<n.length;o++){const r=n[o],i=r.uid,a=(r._didViewChangeTick&65535)<<16|r._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,r.children.length&&Fp(r,t)}return t.didChange}const $5=new tn,H5={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ui});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),Fp(this,e),e.didChange&&Op(this,e.localBounds,$5),e.localBounds},getBounds(e,t){return Pp(this,e,t||new Ui)}},W5={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},q5={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(V5))}};function V5(e,t){return e._zIndex-t._zIndex}const Y5={getGlobalPosition(e=new zr,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const o=this.getGlobalTransform(mo.get(),n);return t=o.apply(e,t),mo.return(o),t},toLocal(e,t,n,o){t&&(e=t.toGlobal(e,n,o));const r=this.getGlobalTransform(mo.get(),o);return n=r.applyInverse(e,n),mo.return(r),n}};class K5{constructor(){this.uid=ho("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let j5=0;class Q5{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,o){const r=new Mo({...this.textureOptions,width:t,height:n,resolution:1,antialias:o,autoGarbageCollect:!0});return new Ut({source:r,label:`texturePool_${j5++}`})}getOptimalTexture(t,n,o=1,r){let i=Math.ceil(t*o-1e-6),a=Math.ceil(n*o-1e-6);i=v1(i),a=v1(a);const s=(i<<17)+(a<<1)+(r?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,r)),l.source._resolution=o,l.source.width=i/o,l.source.height=a/o,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const o=t.source;return this.getOptimalTexture(t.width,t.height,o._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const o=this._texturePool[n];if(o)for(let r=0;r<o.length;r++)o[r].destroy(!0)}this._texturePool={}}}const Uo=new Q5;class Z5{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new tn,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new K5,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let o=0;o<n.length;o++){const r=n[o];r._updateFlags=15,this.addChild(r)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Uo.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let o=0;o<n.length;o++)this.addChild(n[o])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let o=0;o<n.length;o++)this.removeChild(n[o])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let o=0;o<n.length;o++)this._getChildren(n[o],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const o=t.children;for(let r=0;r<o.length;r++)this._getChildren(o[r],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new tn),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new tn),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new tn),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function J5(e,t,n={}){for(const o in t)!n[o]&&t[o]!==void 0&&(e[o]=t[o])}const Vf=new En(null),Yf=new En(null),Kf=new En(null,1,1),D1=1,tM=2,jf=4;class ze extends Hi{constructor(t={}){super(),this.uid=ho("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new tn,this.relativeGroupTransform=new tn,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new En(this,0,0),this._scale=Kf,this._pivot=Yf,this._skew=Vf,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],J5(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(ze.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Zt(xo,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let r=0;r<t.length;r++)this.addChild(t[r]);return t[0]}const n=t[0],o=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),o&&(o.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,o&&o.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let r=0;r<t.length;r++)this.removeChild(t[r]);return t[0]}const n=t[0],o=this.children.indexOf(n);return o>-1&&(this._didViewChangeTick++,this.children.splice(o,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,o),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Hu.get(Z5,this),this.groupTransform=tn.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Hu.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new tn),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*p5}set angle(t){this.rotation=t*Ds}get pivot(){return this._pivot===Yf&&(this._pivot=new En(this,0,0)),this._pivot}set pivot(t){this._pivot===Yf&&(this._pivot=new En(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Vf&&(this._skew=new En(this,0,0)),this._skew}set skew(t){this._skew===Vf&&(this._skew=new En(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Kf&&(this._scale=new En(this,1,1)),this._scale}set scale(t){this._scale===Kf&&(this._scale=new En(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const o=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,o.width),n!==void 0&&this._setHeight(n,o.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,o=this._scale,r=this._pivot,i=this._position,a=o._x,s=o._y,l=r._x,u=r._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=D1,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const o=Un.shared.setValue(t??16777215).toBgrNumber();o!==this.localColor&&(this.localColor=o,this._updateFlags|=D1,this._onUpdate())}get tint(){return au(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=tM,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=jf,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=jf,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=jf,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let r=0;r<n.length;++r)n[r].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}ze.mixin(D5);ze.mixin(Y5);ze.mixin(W5);ze.mixin(H5);ze.mixin(X5);ze.mixin(G5);ze.mixin(q5);ze.mixin(F5);ze.mixin(L5);ze.mixin(B5);class Cd extends ze{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Ui(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:o,y:r}=t;return o>=n.minX&&o<=n.maxX&&r>=n.minY&&r<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class pn extends Cd{constructor(t=Ut.EMPTY){t instanceof Ut&&(t={texture:t});const{texture:n=Ut.EMPTY,anchor:o,roundPixels:r,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new En({_onUpdate:()=>{this.onViewUpdate()}}),o?this.anchor=o:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=r??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof Ut?new pn(t):new pn(Ut.from(t,n))}set texture(t){t||(t=Ut.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return S5(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Zt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,o=this._bounds,{width:r,height:i}=n.orig;o.minX=-t._x*r,o.maxX=o.minX+r,o.minY=-t._y*i,o.maxY=o.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const eM=new Ui;function Ep(e,t,n){const o=eM;e.measurable=!0,Pp(e,n,o),t.addBoundsMask(o),e.measurable=!1}function Lp(e,t,n){const o=Xs.get();e.measurable=!0;const r=mo.get().identity(),i=kp(e,n,r);Op(e,o,i),e.measurable=!1,t.addBoundsMask(o),mo.return(r),Xs.return(o)}function kp(e,t,n){return e?(e!==t&&(kp(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(ai("Mask bounds, renderable is not inside the root container"),n)}class Dp{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof pn),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||Ep(this.mask,t,n)}addLocalBounds(t,n){Lp(this.mask,t,n)}containsPoint(t,n){const o=this.mask;return n(o,t)}destroy(){this.reset()}static test(t){return t instanceof pn}}Dp.extension=fn.MaskEffect;class Up{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Up.extension=fn.MaskEffect;class Xp{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){Ep(this.mask,t,n)}addLocalBounds(t,n){Lp(this.mask,t,n)}containsPoint(t,n){const o=this.mask;return n(o,t)}destroy(){this.reset()}static test(t){return t instanceof ze}}Xp.extension=fn.MaskEffect;const nM={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let U1=nM;const Xi={get(){return U1},set(e){U1=e}};class Pd extends Mo{constructor(t){t.resource||(t.resource=Xi.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,o=this._resolution){const r=super.resize(t,n,o);return r&&this.resizeCanvas(),r}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Pd.extension=fn.TextureSource;class Id extends Mo{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=Xi.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,ai("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Id.extension=fn.TextureSource;var lh=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(lh||{});class Qf{constructor(t,n=null,o=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=o,this._once=r}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const Gp=class Eo{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Qf(null,null,1/0),this.deltaMS=1/Eo.targetFPMS,this.elapsedMS=1/Eo.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,o=lh.NORMAL){return this._addListener(new Qf(t,n,o))}addOnce(t,n,o=lh.NORMAL){return this._addListener(new Qf(t,n,o,!0))}_addListener(t){let n=this._head.next,o=this._head;if(!n)t.connect(o);else{for(;n;){if(t.priority>n.priority){t.connect(o);break}o=n,n=n.next}t.previous||t.connect(o)}return this._startIfPossible(),this}remove(t,n){let o=this._head.next;for(;o;)o.match(t,n)?o=o.destroy():o=o.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Eo.targetFPMS;const o=this._head;let r=o.next;for(;r;)r=r.emit(this);o.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),o=Math.min(Math.max(0,n)/1e3,Eo.targetFPMS);this._maxElapsedMS=1/o}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Eo._shared){const t=Eo._shared=new Eo;t.autoStart=!0,t._protected=!0}return Eo._shared}static get system(){if(!Eo._system){const t=Eo._system=new Eo;t.autoStart=!0,t._protected=!0}return Eo._system}};Gp.targetFPMS=.06;let v0=Gp,Zf;async function oM(){return Zf??(Zf=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(r),t.deleteTexture(o),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Zf}const xf=class Np extends Mo{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...Np.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=v0.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await oM(),this._load=new Promise((o,r)=>{this.isValid?o(this):(this._resolve=o,this._reject=r,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(v0.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(v0.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(v0.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};xf.extension=fn.TextureSource;xf.defaultOptions={...Mo.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};xf.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let rM=xf;const Qa=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(o=>typeof o=="string"||n?t(o):o):e);class iM{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||ai(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const o=Qa(t);let r;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){r=u.getCacheableAssets(o,n);break}}const i=new Map(Object.entries(r||{}));r||o.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:o};o.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=r?r[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&ai("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){ai(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(r=>{this._cache.delete(r)}),n.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const aa=new iM,uh=[];$i.handleByList(fn.TextureSource,uh);function Bp(e={}){const t=e&&e.resource,n=t?e.resource:e,o=t?e:{resource:e};for(let r=0;r<uh.length;r++){const i=uh[r];if(i.test(n))return new i(o)}throw new Error(`Could not find a source type for resource: ${o.resource}`)}function aM(e={},t=!1){const n=e&&e.resource,o=n?e.resource:e,r=n?e:{resource:e};if(!t&&aa.has(o))return aa.get(o);const i=new Ut({source:Bp(r)});return i.on("destroy",()=>{aa.has(o)&&aa.remove(o)}),t||aa.set(o,i),i}function sM(e,t=!1){return typeof e=="string"?aa.get(e):e instanceof Mo?new Ut({source:e}):aM(e,t)}Ut.from=sM;Mo.from=Bp;$i.add(Dp,Up,Xp,rM,Id,Pd,Ad);var $p=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))($p||{});function ur(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function al(e){return e.split("?")[0].split("#")[0]}function lM(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function uM(e,t,n){return e.replace(new RegExp(lM(t),"g"),n)}function fM(e,t){let n="",o=0,r=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||i===1))if(r!==s-1&&i===2){if(n.length<2||o!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",o=0):(n=n.slice(0,l),o=n.length-1-n.lastIndexOf("/")),r=s,i=0;continue}}else if(n.length===2||n.length===1){n="",o=0,r=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(r+1,s)}`:n=e.slice(r+1,s),o=s-r-1;r=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const Jl={toPosix(e){return uM(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){ur(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(ur(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const o=al(this.toPosix(t??Xi.get().getBaseUrl())),r=al(this.toPosix(n??this.rootname(o)));return e=this.toPosix(e),e.startsWith("/")?Jl.join(r,e.slice(1)):this.isAbsolute(e)?e:this.join(o,e)},normalize(e){if(ur(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const o=e.endsWith("/");return e=fM(e),e.length>0&&o&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return ur(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const o=e[n];if(ur(o),o.length>0)if(t===void 0)t=o;else{const r=e[n-1]??"";this.joinExtensions.includes(this.extname(r).toLowerCase())?t+=`/../${o}`:t+=`/${o}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(ur(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let o=-1,r=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!r){o=s;break}}else r=!1;return o===-1?n?"/":this.isUrl(a)?i+e:i:n&&o===1?"//":i+e.slice(0,o)},rootname(e){ur(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){ur(e),t&&ur(t),e=al(this.toPosix(e));let n=0,o=-1,r=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!r){n=i+1;break}}else s===-1&&(r=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(o=i):(a=-1,o=s))}return n===o?o=s:o===-1&&(o=e.length),e.slice(n,o)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!r){n=i+1;break}}else o===-1&&(r=!1,o=i+1);return o===-1?"":e.slice(n,o)},extname(e){ur(e),e=al(this.toPosix(e));let t=-1,n=0,o=-1,r=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!r){n=a+1;break}continue}o===-1&&(r=!1,o=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||o===-1||i===0||i===1&&t===o-1&&t===n+1?"":e.slice(t,o)},parse(e){ur(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=al(this.toPosix(e));let n=e.charCodeAt(0);const o=this.isAbsolute(e);let r;t.root=this.rootname(e),o||this.hasProtocol(e)?r=1:r=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=r;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&o?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&o?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Hp(e,t,n,o,r){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?Hp(e.replace(o[n],s),t,n+1,o,r):r.push(e.replace(o[n],s))}}function cM(e){const t=/\{(.*?)\}/g,n=e.match(t),o=[];if(n){const r=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");r.push(a)}),Hp(e,r,0,n,o)}else o.push(e);return o}const X1=e=>!Array.isArray(e);class Wp{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(o=>`${encodeURIComponent(o)}=${encodeURIComponent(n[o])}`).join("&")}}getAlias(t){const{alias:n,src:o}=t;return Qa(n||o,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&ai("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const o=[];let r=n;Array.isArray(n)||(r=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),r.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);o.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));o.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=o}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let o;o=i=>{this.hasKey(i)&&ai(`[Resolver] already has key: ${i} overwriting`)},Qa(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=Qa(a).map(d=>typeof d=="string"?cM(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(o):o(c);const h=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){p=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:c,data:s,format:l,loadParser:u}),h.push(p)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=X1(t);t=Qa(t);const o={};return t.forEach(r=>{const i=this._bundles[r];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(r,l)]=u}o[r]=s}}),n?o[t[0]]:o}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const o={};for(const r in n)o[r]=n[r].src;return o}return n.src}resolve(t){const n=X1(t);t=Qa(t);const o={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let i=this._assetMap[r];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[r]=i[0]}else this._resolverHash[r]=this._buildResolvedAsset({alias:[r],src:r},{});o[r]=this._resolverHash[r]}),n?o[t[0]]:o}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const o=t[0],r=this._preferredOrder.find(i=>i.params.format.includes(o.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:o,data:r,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=Jl.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=o??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...r||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??hM(t.src),t}}Wp.RETINA_PREFIX=/@([0-9\.]+)x/;function hM(e){return e.split(".").pop().split("?").shift().split("#").shift()}const G1=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},qp=class Cl{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof Ut?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const o=parseFloat(n.meta.scale);o?(this.resolution=o,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Cl.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const o=Cl.BATCH_SIZE;for(;n-t<o&&n<this._frameKeys.length;){const r=this._frameKeys[n],i=this._frames[r],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new co(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new co(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new co(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new co(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[r]=new Ut({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:r.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let o=0;o<t[n].length;o++){const r=t[n][o];this.animations[n].push(this.textures[r])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Cl.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Cl.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};qp.BATCH_SIZE=1e3;let N1=qp;const dM=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Vp(e,t,n){const o={};if(e.forEach(r=>{o[r]=t}),Object.keys(t.textures).forEach(r=>{o[r]=t.textures[r]}),!n){const r=Jl.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=Vp([`${r}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(o,s)})}return o}const mM={extension:fn.Asset,cache:{test:e=>e instanceof N1,getCacheableAssets:(e,t)=>Vp(e,t,!1)},resolver:{extension:{type:fn.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),o=n.pop(),r=n.pop();return o==="json"&&dM.includes(r)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(Wp.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:fn.LoadParser,priority:$p.Normal,name:"spritesheetLoader"},async testParse(e,t){return Jl.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:o,imageFilename:r}=t?.data??{};let i=Jl.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(o instanceof Ut)a=o;else{const u=G1(i+(r??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new N1(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;t.data?.ignoreMultiPack||(h=G1(h,t.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};$i.add(mM);const Jf=Object.create(null),B1=Object.create(null);function Od(e,t){let n=B1[e];return n===void 0&&(Jf[t]===void 0&&(Jf[t]=1),B1[e]=n=Jf[t]++),n}let w0;function pM(){return(!w0||w0?.isContextLost())&&(w0=Xi.get().createCanvas().getContext("webgl",{})),w0}let S0;function yM(){if(!S0){S0="mediump";const e=pM();e&&e.getShaderPrecisionFormat&&(S0=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return S0}function gM(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function xM(e,t,n){const o=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let r=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return r==="highp"&&o!=="highp"&&(r="mediump"),`precision ${r} float;
${e}`}else if(o!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function MM(e,t){return t?`#version 300 es
${e}`:e}const bM={},vM={};function wM(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const o=n?bM:vM;return o[t]?(o[t]++,t+=`-${o[t]}`):o[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function SM(e,t){return t?e.replace("#version 300 es",""):e}const tc={stripVersion:SM,ensurePrecision:xM,addProgramDefines:gM,setProgramName:wM,insertVersion:MM},ec=Object.create(null),Yp=class fh{constructor(t){t={...fh.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,o={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:yM()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let r=t.fragment,i=t.vertex;Object.keys(tc).forEach(a=>{const s=o[a];r=tc[a](r,s,!0),i=tc[a](i,s,!1)}),this.fragment=r,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=Od(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return ec[n]||(ec[n]=new fh(t)),ec[n]}};Yp.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let fe=Yp;const $1={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function _M(e){return $1[e]??$1.float32}const AM={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function TM({source:e,entryPoint:t}){const n={},o=e.indexOf(`fn ${t}`);if(o!==-1){const r=e.indexOf("->",o);if(r!==-1){const i=e.substring(o,r),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=AM[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:_M(l).stride,offset:0,instance:!1,start:0}}}}return n}function nc(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,o=/@binding\((\d+)\)/,r=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(o)[1],10),name:c.match(r)[2],isUniform:c.match(r)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(c=>{const h=c.match(l)[1],d=c.match(s).reduce((m,p)=>{const[g,x]=p.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var Pl=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Pl||{});function RM({groups:e}){const t=[];for(let n=0;n<e.length;n++){const o=e[n];t[o.group]||(t[o.group]=[]),o.isUniform?t[o.group].push({binding:o.binding,visibility:Pl.VERTEX|Pl.FRAGMENT,buffer:{type:"uniform"}}):o.type==="sampler"?t[o.group].push({binding:o.binding,visibility:Pl.FRAGMENT,sampler:{type:"filtering"}}):o.type==="texture_2d"&&t[o.group].push({binding:o.binding,visibility:Pl.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function CM({groups:e}){const t=[];for(let n=0;n<e.length;n++){const o=e[n];t[o.group]||(t[o.group]={}),t[o.group][o.name]=o.binding}return t}function PM(e,t){const n=new Set,o=new Set,r=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return o.has(s)?!1:(o.add(s),!0)});return{structs:r,groups:i}}const oc=Object.create(null);class ae{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:o,layout:r,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=o,n.source===o.source){const s=nc(n.source);this.structsAndGroups=s}else{const s=nc(o.source),l=nc(n.source);this.structsAndGroups=PM(s,l)}this.layout=r??CM(this.structsAndGroups),this.gpuLayout=i??RM(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,o=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Od(o,"program")}get attributeData(){return this._attributeData??(this._attributeData=TM(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return oc[n]||(oc[n]=new ae(t)),oc[n]}}const Kp=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],IM=Kp.reduce((e,t)=>(e[t]=!0,e),{});function OM(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const jp=class Qp{constructor(t,n){this._touched=0,this.uid=ho("uniform"),this._resourceType="uniformGroup",this._resourceId=ho("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...Qp.defaultOptions,...n},this.uniformStructures=t;const o={};for(const r in t){const i=t[r];if(i.name=r,i.size=i.size??1,!IM[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Kp.join(", ")}`);i.value??(i.value=OM(i.type,i.size)),o[r]=i.value}this.uniforms=o,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Od(Object.keys(o).map(r=>`${r}-${t[r].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};jp.defaultOptions={ubo:!1,isStatic:!1};let Mf=jp;class rc{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const o in t){const r=t[o];this.setResource(r,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const o in this.resources)t[n++]=this.resources[o]._resourceId;this._key=t.join("|")}setResource(t,n){const o=this.resources[n];t!==o&&(o&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const o in n)n[o]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const o in n)n[o]===t&&(n[o]=null)}else this._updateKey()}}var Wu=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(Wu||{});class bf extends Hi{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:o,groups:r,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=o,a===void 0&&(a=0,n&&(a|=Wu.WEBGPU),o&&(a|=Wu.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!r&&(i={}),i&&r)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&r&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&r&&s)for(const u in s)for(const f in s[u]){const c=s[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&r&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){r={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(r[99]||(r[99]=new rc,this._ownedBindGroups.push(r[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new Mf(h));const d=l[c];d&&(r[d.group]||(r[d.group]=new rc,this._ownedBindGroups.push(r[d.group])),r[d.group].setResource(h,d.binding))}}this.groups=r,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(r,l)}addResource(t,n,o){var r,i;(r=this._uniformBindMap)[n]||(r[n]={}),(i=this._uniformBindMap[n])[o]||(i[o]=t),this.groups[n]||(this.groups[n]=new rc,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const o={};for(const r in n){const i=n[r];Object.defineProperty(o,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return o}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:o,...r}=t;let i,a;return n&&(i=ae.from(n)),o&&(a=fe.from(o)),new bf({gpuProgram:i,glProgram:a,...r})}}const zM={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},ic=0,ac=1,sc=2,lc=3,uc=4,fc=5,ch=class Zp{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<ic)}set blend(t){!!(this.data&1<<ic)!==t&&(this.data^=1<<ic)}get offsets(){return!!(this.data&1<<ac)}set offsets(t){!!(this.data&1<<ac)!==t&&(this.data^=1<<ac)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<sc)}set culling(t){!!(this.data&1<<sc)!==t&&(this.data^=1<<sc)}get depthTest(){return!!(this.data&1<<lc)}set depthTest(t){!!(this.data&1<<lc)!==t&&(this.data^=1<<lc)}get depthMask(){return!!(this.data&1<<fc)}set depthMask(t){!!(this.data&1<<fc)!==t&&(this.data^=1<<fc)}get clockwiseFrontFace(){return!!(this.data&1<<uc)}set clockwiseFrontFace(t){!!(this.data&1<<uc)!==t&&(this.data^=1<<uc)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=zM[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Zp;return t.depthTest=!1,t.blend=!0,t}};ch.default2d=ch.for2d();let Jp=ch;const ty=class hh extends bf{constructor(t){t={...hh.defaultOptions,...t},super(t),this.enabled=!0,this._state=Jp.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,o,r){t.applyFilter(this,n,o,r)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:o,...r}=t;let i,a;return n&&(i=ae.from(n)),o&&(a=fe.from(o)),new hh({gpuProgram:i,glProgram:a,...r})}};ty.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ge=ty;const dh=[];$i.handleByNamedList(fn.Environment,dh);async function FM(e){if(!e)for(let t=0;t<dh.length;t++){const n=dh[t];if(n.value.test()){await n.value.load();return}}}let sl;function EM(){if(typeof sl=="boolean")return sl;try{sl=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{sl=!1}return sl}var _0={exports:{}},H1;function LM(){if(H1)return _0.exports;H1=1,_0.exports=e,_0.exports.default=e;function e(L,k,D){D=D||2;var $=k&&k.length,W=$?k[0]*D:L.length,et=t(L,0,W,D,!0),ot=[];if(!et||et.next===et.prev)return ot;var gt,qt,Bt,qe,Ie,ee,Rn;if($&&(et=l(L,k,et,D)),L.length>80*D){gt=Bt=L[0],qt=qe=L[1];for(var Ce=D;Ce<W;Ce+=D)Ie=L[Ce],ee=L[Ce+1],Ie<gt&&(gt=Ie),ee<qt&&(qt=ee),Ie>Bt&&(Bt=Ie),ee>qe&&(qe=ee);Rn=Math.max(Bt-gt,qe-qt),Rn=Rn!==0?32767/Rn:0}return o(et,ot,D,gt,qt,Rn,0),ot}function t(L,k,D,$,W){var et,ot;if(W===Y(L,k,D,$)>0)for(et=k;et<D;et+=$)ot=E(et,L[et],L[et+1],ot);else for(et=D-$;et>=k;et-=$)ot=E(et,L[et],L[et+1],ot);return ot&&v(ot,ot.next)&&(U(ot),ot=ot.next),ot}function n(L,k){if(!L)return L;k||(k=L);var D=L,$;do if($=!1,!D.steiner&&(v(D,D.next)||M(D.prev,D,D.next)===0)){if(U(D),D=k=D.prev,D===D.next)break;$=!0}else D=D.next;while($||D!==k);return k}function o(L,k,D,$,W,et,ot){if(L){!ot&&et&&d(L,$,W,et);for(var gt=L,qt,Bt;L.prev!==L.next;){if(qt=L.prev,Bt=L.next,et?i(L,$,W,et):r(L)){k.push(qt.i/D|0),k.push(L.i/D|0),k.push(Bt.i/D|0),U(L),L=Bt.next,gt=Bt.next;continue}if(L=Bt,L===gt){ot?ot===1?(L=a(n(L),k,D),o(L,k,D,$,W,et,2)):ot===2&&s(L,k,D,$,W,et):o(n(L),k,D,$,W,et,1);break}}}}function r(L){var k=L.prev,D=L,$=L.next;if(M(k,D,$)>=0)return!1;for(var W=k.x,et=D.x,ot=$.x,gt=k.y,qt=D.y,Bt=$.y,qe=W<et?W<ot?W:ot:et<ot?et:ot,Ie=gt<qt?gt<Bt?gt:Bt:qt<Bt?qt:Bt,ee=W>et?W>ot?W:ot:et>ot?et:ot,Rn=gt>qt?gt>Bt?gt:Bt:qt>Bt?qt:Bt,Ce=$.next;Ce!==k;){if(Ce.x>=qe&&Ce.x<=ee&&Ce.y>=Ie&&Ce.y<=Rn&&x(W,gt,et,qt,ot,Bt,Ce.x,Ce.y)&&M(Ce.prev,Ce,Ce.next)>=0)return!1;Ce=Ce.next}return!0}function i(L,k,D,$){var W=L.prev,et=L,ot=L.next;if(M(W,et,ot)>=0)return!1;for(var gt=W.x,qt=et.x,Bt=ot.x,qe=W.y,Ie=et.y,ee=ot.y,Rn=gt<qt?gt<Bt?gt:Bt:qt<Bt?qt:Bt,Ce=qe<Ie?qe<ee?qe:ee:Ie<ee?Ie:ee,bi=gt>qt?gt>Bt?gt:Bt:qt>Bt?qt:Bt,il=qe>Ie?qe>ee?qe:ee:Ie>ee?Ie:ee,l1=p(Rn,Ce,k,D,$),u1=p(bi,il,k,D,$),we=L.prevZ,Se=L.nextZ;we&&we.z>=l1&&Se&&Se.z<=u1;){if(we.x>=Rn&&we.x<=bi&&we.y>=Ce&&we.y<=il&&we!==W&&we!==ot&&x(gt,qe,qt,Ie,Bt,ee,we.x,we.y)&&M(we.prev,we,we.next)>=0||(we=we.prevZ,Se.x>=Rn&&Se.x<=bi&&Se.y>=Ce&&Se.y<=il&&Se!==W&&Se!==ot&&x(gt,qe,qt,Ie,Bt,ee,Se.x,Se.y)&&M(Se.prev,Se,Se.next)>=0))return!1;Se=Se.nextZ}for(;we&&we.z>=l1;){if(we.x>=Rn&&we.x<=bi&&we.y>=Ce&&we.y<=il&&we!==W&&we!==ot&&x(gt,qe,qt,Ie,Bt,ee,we.x,we.y)&&M(we.prev,we,we.next)>=0)return!1;we=we.prevZ}for(;Se&&Se.z<=u1;){if(Se.x>=Rn&&Se.x<=bi&&Se.y>=Ce&&Se.y<=il&&Se!==W&&Se!==ot&&x(gt,qe,qt,Ie,Bt,ee,Se.x,Se.y)&&M(Se.prev,Se,Se.next)>=0)return!1;Se=Se.nextZ}return!0}function a(L,k,D){var $=L;do{var W=$.prev,et=$.next.next;!v(W,et)&&S(W,$,$.next,et)&&C(W,et)&&C(et,W)&&(k.push(W.i/D|0),k.push($.i/D|0),k.push(et.i/D|0),U($),U($.next),$=L=et),$=$.next}while($!==L);return n($)}function s(L,k,D,$,W,et){var ot=L;do{for(var gt=ot.next.next;gt!==ot.prev;){if(ot.i!==gt.i&&b(ot,gt)){var qt=O(ot,gt);ot=n(ot,ot.next),qt=n(qt,qt.next),o(ot,k,D,$,W,et,0),o(qt,k,D,$,W,et,0);return}gt=gt.next}ot=ot.next}while(ot!==L)}function l(L,k,D,$){var W=[],et,ot,gt,qt,Bt;for(et=0,ot=k.length;et<ot;et++)gt=k[et]*$,qt=et<ot-1?k[et+1]*$:L.length,Bt=t(L,gt,qt,$,!1),Bt===Bt.next&&(Bt.steiner=!0),W.push(g(Bt));for(W.sort(u),et=0;et<W.length;et++)D=f(W[et],D);return D}function u(L,k){return L.x-k.x}function f(L,k){var D=c(L,k);if(!D)return k;var $=O(D,L);return n($,$.next),n(D,D.next)}function c(L,k){var D=k,$=L.x,W=L.y,et=-1/0,ot;do{if(W<=D.y&&W>=D.next.y&&D.next.y!==D.y){var gt=D.x+(W-D.y)*(D.next.x-D.x)/(D.next.y-D.y);if(gt<=$&&gt>et&&(et=gt,ot=D.x<D.next.x?D:D.next,gt===$))return ot}D=D.next}while(D!==k);if(!ot)return null;var qt=ot,Bt=ot.x,qe=ot.y,Ie=1/0,ee;D=ot;do $>=D.x&&D.x>=Bt&&$!==D.x&&x(W<qe?$:et,W,Bt,qe,W<qe?et:$,W,D.x,D.y)&&(ee=Math.abs(W-D.y)/($-D.x),C(D,L)&&(ee<Ie||ee===Ie&&(D.x>ot.x||D.x===ot.x&&h(ot,D)))&&(ot=D,Ie=ee)),D=D.next;while(D!==qt);return ot}function h(L,k){return M(L.prev,L,k.prev)<0&&M(k.next,L,L.next)<0}function d(L,k,D,$){var W=L;do W.z===0&&(W.z=p(W.x,W.y,k,D,$)),W.prevZ=W.prev,W.nextZ=W.next,W=W.next;while(W!==L);W.prevZ.nextZ=null,W.prevZ=null,m(W)}function m(L){var k,D,$,W,et,ot,gt,qt,Bt=1;do{for(D=L,L=null,et=null,ot=0;D;){for(ot++,$=D,gt=0,k=0;k<Bt&&(gt++,$=$.nextZ,!!$);k++);for(qt=Bt;gt>0||qt>0&&$;)gt!==0&&(qt===0||!$||D.z<=$.z)?(W=D,D=D.nextZ,gt--):(W=$,$=$.nextZ,qt--),et?et.nextZ=W:L=W,W.prevZ=et,et=W;D=$}et.nextZ=null,Bt*=2}while(ot>1);return L}function p(L,k,D,$,W){return L=(L-D)*W|0,k=(k-$)*W|0,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,L|k<<1}function g(L){var k=L,D=L;do(k.x<D.x||k.x===D.x&&k.y<D.y)&&(D=k),k=k.next;while(k!==L);return D}function x(L,k,D,$,W,et,ot,gt){return(W-ot)*(k-gt)>=(L-ot)*(et-gt)&&(L-ot)*($-gt)>=(D-ot)*(k-gt)&&(D-ot)*(et-gt)>=(W-ot)*($-gt)}function b(L,k){return L.next.i!==k.i&&L.prev.i!==k.i&&!R(L,k)&&(C(L,k)&&C(k,L)&&z(L,k)&&(M(L.prev,L,k.prev)||M(L,k.prev,k))||v(L,k)&&M(L.prev,L,L.next)>0&&M(k.prev,k,k.next)>0)}function M(L,k,D){return(k.y-L.y)*(D.x-k.x)-(k.x-L.x)*(D.y-k.y)}function v(L,k){return L.x===k.x&&L.y===k.y}function S(L,k,D,$){var W=A(M(L,k,D)),et=A(M(L,k,$)),ot=A(M(D,$,L)),gt=A(M(D,$,k));return!!(W!==et&&ot!==gt||W===0&&_(L,D,k)||et===0&&_(L,$,k)||ot===0&&_(D,L,$)||gt===0&&_(D,k,$))}function _(L,k,D){return k.x<=Math.max(L.x,D.x)&&k.x>=Math.min(L.x,D.x)&&k.y<=Math.max(L.y,D.y)&&k.y>=Math.min(L.y,D.y)}function A(L){return L>0?1:L<0?-1:0}function R(L,k){var D=L;do{if(D.i!==L.i&&D.next.i!==L.i&&D.i!==k.i&&D.next.i!==k.i&&S(D,D.next,L,k))return!0;D=D.next}while(D!==L);return!1}function C(L,k){return M(L.prev,L,L.next)<0?M(L,k,L.next)>=0&&M(L,L.prev,k)>=0:M(L,k,L.prev)<0||M(L,L.next,k)<0}function z(L,k){var D=L,$=!1,W=(L.x+k.x)/2,et=(L.y+k.y)/2;do D.y>et!=D.next.y>et&&D.next.y!==D.y&&W<(D.next.x-D.x)*(et-D.y)/(D.next.y-D.y)+D.x&&($=!$),D=D.next;while(D!==L);return $}function O(L,k){var D=new G(L.i,L.x,L.y),$=new G(k.i,k.x,k.y),W=L.next,et=k.prev;return L.next=k,k.prev=L,D.next=W,W.prev=D,$.next=D,D.prev=$,et.next=$,$.prev=et,$}function E(L,k,D,$){var W=new G(L,k,D);return $?(W.next=$.next,W.prev=$,$.next.prev=W,$.next=W):(W.prev=W,W.next=W),W}function U(L){L.next.prev=L.prev,L.prev.next=L.next,L.prevZ&&(L.prevZ.nextZ=L.nextZ),L.nextZ&&(L.nextZ.prevZ=L.prevZ)}function G(L,k,D){this.i=L,this.x=k,this.y=D,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(L,k,D,$){var W=k&&k.length,et=W?k[0]*D:L.length,ot=Math.abs(Y(L,0,et,D));if(W)for(var gt=0,qt=k.length;gt<qt;gt++){var Bt=k[gt]*D,qe=gt<qt-1?k[gt+1]*D:L.length;ot-=Math.abs(Y(L,Bt,qe,D))}var Ie=0;for(gt=0;gt<$.length;gt+=3){var ee=$[gt]*D,Rn=$[gt+1]*D,Ce=$[gt+2]*D;Ie+=Math.abs((L[ee]-L[Ce])*(L[Rn+1]-L[ee+1])-(L[ee]-L[Rn])*(L[Ce+1]-L[ee+1]))}return ot===0&&Ie===0?0:Math.abs((Ie-ot)/ot)};function Y(L,k,D,$){for(var W=0,et=k,ot=D-$;et<D;et+=$)W+=(L[ot]-L[et])*(L[et+1]+L[ot+1]),ot=et;return W}return e.flatten=function(L){for(var k=L[0][0].length,D={vertices:[],holes:[],dimensions:k},$=0,W=0;W<L.length;W++){for(var et=0;et<L[W].length;et++)for(var ot=0;ot<k;ot++)D.vertices.push(L[W][et][ot]);W>0&&($+=L[W-1].length,D.holes.push($))}return D},_0.exports}var kM=LM();const gR=pp(kM);var ey=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(ey||{});class DM{constructor(t){this.items=[],this._name=t}emit(t,n,o,r,i,a,s,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](t,n,o,r,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const UM=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],ny=class oy extends Hi{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...UM,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await FM(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)t={...this._systemsHash[o].constructor.defaultOptions,...t};t={...oy.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(t);this._initOptions=t}render(t,n){let o=t;if(o instanceof ze&&(o={container:o},n&&(Zt(xo,"passing a second argument is deprecated, please use render options instead"),o.target=n.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor=this.background.colorRgba),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:Un.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(t,n,o){const r=this.view.resolution;this.view.resize(t,n,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=ey.ALL);const{clear:o,clearColor:r,target:i}=t;Un.shared.setValue(r??this.background.colorRgba),n.renderTarget.clear(i,o,Un.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new DM(n)})}_addSystems(t){let n;for(n in t){const o=t[n];this._addSystem(o.value,o.name)}}_addSystem(t,n){const o=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=o,this._systemsHash[n]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(t,n){const o=n.reduce((r,i)=>(r[i.name]=i.value,r),{});t.forEach(r=>{const i=r.value,a=r.name,s=o[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!EM())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};ny.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ry=ny,A0;function XM(e){return A0!==void 0||(A0=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??ry.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Xi.get().getWebGLRenderingContext())return!1;let o=Xi.get().createCanvas().getContext("webgl",t);const r=!!o?.getContextAttributes()?.stencil;if(o){const i=o.getExtension("WEBGL_lose_context");i&&i.loseContext()}return o=null,r}catch{return!1}})()),A0}let T0;async function GM(e={}){return T0!==void 0||(T0=await(async()=>{const t=Xi.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),T0}const W1=["webgl","webgpu","canvas"];async function NM(e){let t=[];e.preference?(t.push(e.preference),W1.forEach(i=>{i!==e.preference&&t.push(i)})):t=W1.slice();let n,o={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await GM()){const{WebGPURenderer:s}=await Fu(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-pwDEvyOM.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,o={...e,...e.webgpu};break}else if(a==="webgl"&&XM(e.failIfMajorPerformanceCaveat??ry.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await Fu(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-D8Kxye0t.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,o={...e,...e.webgl};break}else if(a==="canvas")throw o={...e},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!n)throw new Error("No available renderer for the current environment");const r=new n;return await r.init(o),r}const iy="8.6.6";class ay{static init(){globalThis.__PIXI_APP_INIT__?.(this,iy)}static destroy(){}}ay.extension=fn.Application;class BM{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,iy)}destroy(){this._renderer=null}}BM.extension={type:[fn.WebGLSystem,fn.WebGPUSystem],name:"initHook",priority:-10};const sy=class mh{constructor(...t){this.stage=new ze,t[0]!==void 0&&Zt(xo,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await NM(t),mh._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Zt(xo,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const o=mh._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};sy._plugins=[];let Nl=sy;$i.handleByList(fn.Application,Nl._plugins);$i.add(ay);var oo=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(oo||{});class bs extends Hi{constructor(t){let{data:n,size:o}=t;const{usage:r,label:i,shrinkToFit:a}=t;super(),this.uid=ho("buffer"),this._resourceType="buffer",this._resourceId=ho("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,o??(o=n?.byteLength);const s=!!n;this.descriptor={size:o,usage:r,mappedAtCreation:s,label:i},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&oo.STATIC)}set static(t){t?this.descriptor.usage|=oo.STATIC:this.descriptor.usage&=~oo.STATIC}setDataWithSize(t,n,o){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){o&&this.emit("update",this);return}const r=this._data;if(this._data=t,this._dataInt32=null,!r||r.length!==t.length){!this.shrinkToFit&&r&&t.byteLength<r.byteLength?o&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=ho("resource"),this.emit("change",this));return}o&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function ly(e,t){if(!(e instanceof bs)){let n=t?oo.INDEX:oo.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=oo.INDEX|oo.COPY_DST):(e=new Float32Array(e),n=oo.VERTEX|oo.COPY_DST)),e=new bs({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function $M(e,t,n){const o=e.getAttribute(t);if(!o)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const r=o.buffer.data;let i=1/0,a=1/0,s=-1/0,l=-1/0;const u=r.BYTES_PER_ELEMENT,f=(o.offset||0)/u,c=(o.stride||2*4)/u;for(let h=f;h<r.length;h+=c){const d=r[h],m=r[h+1];d>s&&(s=d),m>l&&(l=m),d<i&&(i=d),m<a&&(a=m)}return n.minX=i,n.minY=a,n.maxX=s,n.maxY=l,n}function HM(e){return(e instanceof bs||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=ly(e.buffer,!1),e}class uy extends Hi{constructor(t={}){super(),this.uid=ho("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ui,this._boundsDirty=!0;const{attributes:n,indexBuffer:o,topology:r}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,o&&this.addIndex(o),this.topology=r||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const o=HM(n);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=o}addIndex(t){this.indexBuffer=ly(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,$M(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var fy=`in vec2 aPosition;
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
`,WM=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,q1=`struct GlobalFilterUniforms {
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
}`;const cy=class hy extends ge{constructor(t){t={...hy.defaultOptions,...t};const n=ae.from({vertex:{source:q1,entryPoint:"mainVertex"},fragment:{source:q1,entryPoint:"mainFragment"}}),o=fe.from({vertex:fy,fragment:WM,name:"alpha-filter"}),{alpha:r,...i}=t,a=new Mf({uAlpha:{value:r,type:"f32"}});super({...i,gpuProgram:n,glProgram:o,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};cy.defaultOptions={alpha:1};let qM=cy;const dy={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},VM=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function YM(e){const t=dy[e],n=t.length;let o=VM,r="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),r+=l,r+=`
`}return o=o.replace("%blur%",r),o=o.replace("%size%",e.toString()),o}const KM=`
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
    }`;function jM(e,t){const n=Math.ceil(e/2);let o=KM,r="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),r+=s,r+=`
`}return o=o.replace("%blur%",r),o=o.replace("%size%",e.toString()),o=o.replace("%dimension%",t?"z":"w"),o}function QM(e,t){const n=jM(t,e),o=YM(t);return fe.from({vertex:n,fragment:o,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var ZM=`

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
}`;function JM(e,t){const n=dy[t],o=n.length,r=[],i=[],a=[];for(let c=0;c<t;c++){r[c]=`@location(${c}) offset${c}: vec2<f32>,`,e?i[c]=`filteredCord + vec2(${c-o+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-o+1} * pixelStrength),`;const h=c<o?c:t-c-1,d=n[h].toString();a[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=r.join(`
`),l=i.join(`
`),u=a.join(`
`),f=ZM.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return ae.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const my=class py extends ge{constructor(t){t={...py.defaultOptions,...t};const n=QM(t.horizontal,t.kernelSize),o=JM(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:o,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,o,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,o,r);else{const i=Uo.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===Wu.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,o,r),Uo.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};my.defaultOptions={strength:8,quality:4,kernelSize:5};let V1=my;var t4=`
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
`,Y1=`struct GlobalFilterUniforms {
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
}`;class e4 extends ge{constructor(t={}){const n=new Mf({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),o=ae.from({vertex:{source:Y1,entryPoint:"mainVertex"},fragment:{source:Y1,entryPoint:"mainFragment"}}),r=fe.from({vertex:fy,fragment:t4,name:"color-matrix-filter"});super({...t,gpuProgram:o,glProgram:r,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let o=t;n&&(this._multiply(o,this.matrix,t),o=this._colorMatrix(o)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=o,this.resources.colorMatrixUniforms.update()}_multiply(t,n,o){return t[0]=n[0]*o[0]+n[1]*o[5]+n[2]*o[10]+n[3]*o[15],t[1]=n[0]*o[1]+n[1]*o[6]+n[2]*o[11]+n[3]*o[16],t[2]=n[0]*o[2]+n[1]*o[7]+n[2]*o[12]+n[3]*o[17],t[3]=n[0]*o[3]+n[1]*o[8]+n[2]*o[13]+n[3]*o[18],t[4]=n[0]*o[4]+n[1]*o[9]+n[2]*o[14]+n[3]*o[19]+n[4],t[5]=n[5]*o[0]+n[6]*o[5]+n[7]*o[10]+n[8]*o[15],t[6]=n[5]*o[1]+n[6]*o[6]+n[7]*o[11]+n[8]*o[16],t[7]=n[5]*o[2]+n[6]*o[7]+n[7]*o[12]+n[8]*o[17],t[8]=n[5]*o[3]+n[6]*o[8]+n[7]*o[13]+n[8]*o[18],t[9]=n[5]*o[4]+n[6]*o[9]+n[7]*o[14]+n[8]*o[19]+n[9],t[10]=n[10]*o[0]+n[11]*o[5]+n[12]*o[10]+n[13]*o[15],t[11]=n[10]*o[1]+n[11]*o[6]+n[12]*o[11]+n[13]*o[16],t[12]=n[10]*o[2]+n[11]*o[7]+n[12]*o[12]+n[13]*o[17],t[13]=n[10]*o[3]+n[11]*o[8]+n[12]*o[13]+n[13]*o[18],t[14]=n[10]*o[4]+n[11]*o[9]+n[12]*o[14]+n[13]*o[19]+n[14],t[15]=n[15]*o[0]+n[16]*o[5]+n[17]*o[10]+n[18]*o[15],t[16]=n[15]*o[1]+n[16]*o[6]+n[17]*o[11]+n[18]*o[16],t[17]=n[15]*o[2]+n[16]*o[7]+n[17]*o[12]+n[18]*o[17],t[18]=n[15]*o[3]+n[16]*o[8]+n[17]*o[13]+n[18]*o[18],t[19]=n[15]*o[4]+n[16]*o[9]+n[17]*o[14]+n[18]*o[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const o=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(o,n)}tint(t,n){const[o,r,i]=Un.shared.setValue(t).toArray(),a=[o,0,0,0,0,0,r,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)}greyscale(t,n){const o=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(o,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const o=Math.cos(t),r=Math.sin(t),i=Math.sqrt,a=1/3,s=i(a),l=o+(1-o)*a,u=a*(1-o)-s*r,f=a*(1-o)+s*r,c=a*(1-o)+s*r,h=o+a*(1-o),d=a*(1-o)-s*r,m=a*(1-o)-s*r,p=a*(1-o)+s*r,g=o+a*(1-o),x=[l,u,f,0,0,c,h,d,0,0,m,p,g,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const o=(t||0)+1,r=-.5*(o-1),i=[o,0,0,0,r,0,o,0,0,r,0,0,o,0,r,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const o=t*2/3+1,r=(o-1)*-.5,i=[o,r,r,0,0,r,o,r,0,0,r,r,o,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,o,r,i){t||(t=.2),n||(n=.15),o||(o=16770432),r||(r=3375104);const a=Un.shared,[s,l,u]=a.setValue(o).toArray(),[f,c,h]=a.setValue(r).toArray(),d=[.3,.59,.11,0,0,s,l,u,t,0,f,c,h,n,0,s-f,l-c,u-h,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const o=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(o,n)}predator(t,n){const o=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(o,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function K1(e,t,n,o,r,i,a,s){const l=a-n,u=s-o,f=r-n,c=i-o,h=e-n,d=t-o,m=l*l+u*u,p=l*f+u*c,g=l*h+u*d,x=f*f+c*c,b=f*h+c*d,M=1/(m*x-p*p),v=(x*g-p*b)*M,S=(m*b-p*g)*M;return v>=0&&S>=0&&v+S<1}const yy=class gy extends uy{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Zt(xo,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...gy.defaultOptions,...n};const o=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),r=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),a=n.shrinkBuffersToFit,s=new bs({data:o,label:"attribute-mesh-positions",shrinkToFit:a,usage:oo.VERTEX|oo.COPY_DST}),l=new bs({data:r,label:"attribute-mesh-uvs",shrinkToFit:a,usage:oo.VERTEX|oo.COPY_DST}),u=new bs({data:i,label:"index-mesh-buffer",shrinkToFit:a,usage:oo.INDEX|oo.COPY_DST});super({attributes:{aPosition:{buffer:s,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};yy.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let xy=yy;class n4 extends Cd{constructor(...t){let n=t[0];n instanceof uy&&(Zt(xo,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Zt(xo,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:o,shader:r,texture:i,roundPixels:a,state:s,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=r??null,this.texture=i??r?.texture??Ut.WHITE,this.state=s??Jp.for2d(),this._geometry=o,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=a??!1}get material(){return Zt(xo,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=Ut.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof xy?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:o}=t;if(!this.bounds.containsPoint(n,o))return!1;const r=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const a=this.geometry.getIndex().data,s=a.length;for(let l=0;l+2<s;l+=i){const u=a[l]*2,f=a[l+1]*2,c=a[l+2]*2;if(K1(n,o,r[u],r[u+1],r[f],r[f+1],r[c],r[c+1]))return!0}}else{const a=r.length/2;for(let s=0;s+2<a;s+=i){const l=s*2,u=(s+1)*2,f=(s+2)*2;if(K1(n,o,r[l],r[l+1],r[u],r[u+1],r[f],r[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class o4{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new tn,this.observer=n,this.position=new En(this,0,0),this.scale=new En(this,1,1),this.pivot=new En(this,0,0),this.skew=new En(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const My=class su extends Cd{constructor(...t){let n=t[0]||{};n instanceof Ut&&(n={texture:n}),t.length>1&&(Zt(xo,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...su.defaultOptions,...n};const{texture:o,anchor:r,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new En({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=o,this._width=l??o.width,this._height=u??o.height,this._tileTransform=new o4({observer:{_onUpdate:()=>this.onViewUpdate()}}),r&&(this.anchor=r),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=c??!1}static from(t,n={}){return typeof t=="string"?new su({texture:aa.get(t),...n}):new su({texture:t,...n})}get uvRespectAnchor(){return ai("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){ai("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=Ut.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,o=this._width,r=this._height;t.maxX=-n._x*o,t.minX=t.maxX+o,t.maxY=-n._y*r,t.minY=t.maxY+r}containsPoint(t){const n=this._width,o=this._height,r=-n*this._anchor._x;let i=0;return t.x>=r&&t.x<=r+n&&(i=-o*this._anchor._y,t.y>=i&&t.y<=i+o)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._texture=null}};My.defaultOptions={texture:Ut.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let r4=My;const ll=new Map;function i4(e,t){if(!ll.has(e)){const n=new Ut({source:new Pd({resource:e,...t})}),o=()=>{ll.get(e)===n&&ll.delete(e)};n.once("destroy",o),n.source.once("destroy",o),ll.set(e,n)}return ll.get(e)}const by=class vy{constructor(t={}){if(this.uid=ho("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...vy.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new Mo({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(o=>o.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof Ut||t.depthStencilTexture instanceof Mo?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new Mo({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,o=this.resolution,r=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{r&&a===0||i.source.resize(t,n,o)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,o)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};by.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let a4=by;class zd extends Ut{static create(t){return new zd({source:new Mo(t)})}resize(t,n,o){return this.source.resize(t,n,o),this}}const Fd=class wy{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...wy.defaultOptions,...t},t.view&&(Zt(xo,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new co(0,0,t.width,t.height),this.canvas=t.canvas||Xi.get().createCanvas(),this.antialias=!!t.antialias,this.texture=i4(this.canvas,t),this.renderTarget=new a4({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,o){this.texture.source.resize(t,n,o),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Fd.extension={type:[fn.WebGLSystem,fn.WebGPUSystem,fn.CanvasSystem],name:"view",priority:0};Fd.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let s4=Fd;$i.add(f5,c5);const Jt={},Gs={},cc=new Map,No={},vf={},Sy=e=>(vf[e]?"assets/pk/":"assets/")+e+".png";function ph(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function l4(e){const t=window.MAP;Object.assign(Jt,window.META,t.decometa||{});for(const s of Object.keys(Jt)){const l=Jt[s].gear;if(l)for(const u in l)for(const f of l[u])Jt[s+"__"+u+f]=Jt[s]}try{Object.assign(vf,await(await fetch("assets/pk/index.json")).json())}catch{}const n=Object.keys(Jt),o=["ground","minimap","water_mask","water_calm"],r=n.length+o.length;let i=0;const a=()=>e(++i/r);await Promise.all([...n.map(async s=>{const l=await ph(Sy(s));if(No[s]=l,l.naturalWidth){const u=Ut.from(l);u.source.scaleMode="nearest",Gs[s]=u}a()}),...o.map(async s=>{No[s]=await ph("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function wf(e){return!!Gs[e]}function u4(){return Object.values(Gs)}const j1=new Set;function _y(e){Gs[e]||j1.has(e)||!Jt[e]||(j1.add(e),Du("sheetLoad",1,e),ph(Sy(e)).then(t=>{if(No[e]=t,t.naturalWidth){const n=Ut.from(t);n.source.scaleMode="nearest",Gs[e]=n}}))}function f4(e){for(const t of e){const n=Jt[t]&&Jt[t].gear;n&&n.w&&n.w.includes(0)&&_y(t+"__w0")}}function Ed(e,t,n,o){let r=0,i=0;if(e.anims&&t){const a=e.anims[t]||e.anims.idle||e.anims.walk||Object.values(e.anims)[0],s=e.dirs||1,l=s>=16?(n%16+16)%16:s>1?Math.round(n/2)%s:0;r=a.row+l,i=(o%a.n+a.n)%a.n}else e.frames&&e.frames>1&&(i=(o%e.frames+e.frames)%e.frames);return[r,i]}function Ay(e,t,n){const o=Jt[e],r=vf[e];if(r){if(n>=r.cols||t>=r.rows)return null;const a=(t*r.cols+n)*6,s=r.f;return s[a+2]?[s[a],s[a+1],s[a+2],s[a+3],s[a+4],s[a+5]]:null}const i=No[e];return!o||!i||(n+1)*o.fw>i.naturalWidth||(t+1)*o.fh>i.naturalHeight?null:[n*o.fw,t*o.fh,o.fw,o.fh,0,0]}const c4=null;function Ri(e,t,n,o){const r=Jt[e],i=Gs[e];if(r&&!i&&e.includes("__"))return _y(e),null;if(!r||!i)return null;const[a,s]=Ed(r,t,n,o),l=e+"|"+a+"|"+s;let u=cc.get(l);if(u===void 0){const f=Ay(e,a,s);if(!f)return cc.set(l,c4),null;u=vf[e]?new Ut({source:i.source,frame:new co(f[0],f[1],f[2],f[3]),orig:new co(0,0,r.fw,r.fh),trim:new co(f[4],f[5],f[2],f[3])}):new Ut({source:i.source,frame:new co(f[0],f[1],r.fw,r.fh)}),cc.set(l,u)}return u}function lu(e,t,n){const o=Jt[e];if(!o||!o.anims)return 0;const r=o.anims[t]||o.anims.idle||o.anims.walk;return Math.floor(n*1e3/r.ms)}function h4(){const e=No.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let o=0;o<e.naturalHeight;o+=t)for(let r=0;r<e.naturalWidth;r+=t){const i=Math.min(t,e.naturalWidth-r),a=Math.min(t,e.naturalHeight-o),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,r,o,i,a,0,0,i,a);const l=Ut.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:r,y:o})}return n}const F=Math.round,at=Math.PI*2,ue=e=>1-(1-e)*(1-e);function lo(e,t,n,o,r,i){const a=t[0].length,s=t.length,l=F(n-a*r/2),u=F(o-s*r/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++){const h=t[c];for(let d=0;d<a;d++)h[d]===f&&e.fillRect(l+d*r,u+c*r,r,r)}}}function so(e){const t=Jt[e.sprite];return(t?t.ay:50)*(e.scale||1)/N.ZK}function en(e){const t=e.uid!==void 0?Z(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const d4=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],m4={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function p4(e){const t=e.x,n=e.y,o=Math.random()<.5?1:-1,r=y(-.35,.35);J.sfx("item_crit",t,n,.9),T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.55),u=Math.min(1,a*3.5);i.globalAlpha=a<.45?1:(1-a)/.55;for(let f=0;f<=26;f++){const c=f/26;if(c>u)break;const h=r-Math.PI/2+o*(-1.35+2.7*c),d=u-c,m=F(2+7*Math.sin(Math.PI*c));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(F(s+Math.cos(h)*36-m/2),F(l+10+Math.sin(h)*24-m/2),m,m)}if(a<.3){const f=1-a/.3,c=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(F(s-c),F(l)-1,F(c*2),3),i.fillRect(F(s)-1,F(l-c*.7),3,F(c*1.4)),i.fillStyle="#ff5a3a";for(let h=0;h<4;h++){const d=c*.55;i.fillRect(F(s+(h&1?d:-d)*.7)-2,F(l+(h&2?d:-d)*.5)-2,4,4)}}}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.22),u=1.5-.95*l*l;if(!s.hit&&l>=1){s.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*at,p=y(1.5,3.5);I(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*at,p=y(1,2.5);I(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,y(1.5,3),.6,"#f2e4c4",2,9,!1)}Q(4)}const[f,c]=P(t,n,u);i.globalAlpha=a<.6?1:(1-a)/.4;const h=l>=1&&a<.35?(Math.random()-.5)*3:0;lo(i,d4,f+h,c-6,3,m4)}})}function y4(e){const t=[e.x,e.y];for(const a of String(e.pts||"").split(";")){const s=a.split(",");s.length===2&&s[0]!==""&&t.push(+s[0],+s[1])}const n=t.length/2-1;if(n<1)return;const o=Math.random()*999,r=.05,i=.42+n*r;J.sfx("item_chain",t[2],t[3],1),I(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),T({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(a,s,l){const u=s*i,f=Math.floor(w.T*28);for(;l.sp<n&&u>=l.sp*r;){const c=t[l.sp*2+2],h=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*at,p=y(2,4.5);I(c,h,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}a.lineJoin="miter";for(let c=0;c<n;c++){const h=u-c*r;if(h<0)break;const d=Math.max(0,1-h/.38);if(d<=0)continue;const[m,p]=P(t[c*2],t[c*2+1],c?.5:.7),[g,x]=P(t[c*2+2],t[c*2+3],.5),b=g-m,M=x-p,v=Math.hypot(b,M)||1,S=-M/v,_=b/v,A=Math.min(16,4+v*.1),R=7;a.beginPath(),a.moveTo(m,p);for(let G=1;G<R;G++){const Y=(q(o+c*31+G*7+f*13)-.5)*2*A;a.lineTo(m+b*G/R+S*Y,p+M*G/R+_*Y)}a.lineTo(g,x),a.globalAlpha=d*.4,a.strokeStyle="#5a7aff",a.lineWidth=8,a.stroke(),a.globalAlpha=d*.85,a.strokeStyle="#9ae0ff",a.lineWidth=3.5,a.stroke(),a.globalAlpha=d,a.strokeStyle="#ffffff",a.lineWidth=1.5,a.stroke();const C=2+(q(o+c)*3|0),z=(q(o+c*31+C*7+f*13)-.5)*2*A,O=q(o+c*5+f)<.5?1:-1,E=m+b*C/R+S*z,U=p+M*C/R+_*z;if(a.beginPath(),a.moveTo(E,U),a.lineTo(E+S*O*12+b/v*7,U+_*O*12+M/v*7),a.lineTo(E+S*O*17+b/v*17,U+_*O*17+M/v*17),a.globalAlpha=d*.75,a.strokeStyle="#bfeaff",a.lineWidth=1.5,a.stroke(),h<.16){const G=1-h/.16,Y=4+G*11;a.globalAlpha=G,a.fillStyle="#e8f6ff",a.fillRect(F(g-Y),F(x)-1,F(Y*2),3),a.fillRect(F(g)-1,F(x-Y),3,F(Y*2)),a.fillStyle="#7ac8ff",a.fillRect(F(g)-4,F(x)-4,8,8)}}}}),Q(2)}const g4=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],x4={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function M4(e){const t=e.x,n=e.y,o=Math.random()<.5?1:-1,r=Math.random()*at;J.sfx("item_bash",t,n,1),T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.24),u=1.9-1.35*l*l;if(!s.hit&&l>=1){s.hit=!0,T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,ft(t,n,.3+1.3*ue(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,ft(t,n,.25+.8*ue(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const g=r+p/7*at;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,M=g+(q(r+p*9+x)-.5)*.7,[v,S]=P(t+Math.cos(M)*b,n+Math.sin(M)*b);x?d.lineTo(v,S):d.moveTo(v,S)}d.stroke()}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=P(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const M=b/10*at;d.fillRect(F(p+Math.cos(M)*x)-2,F(g+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*at,p=y(1.5,4);I(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,y(.6,1.8),y(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*at,p=y(1,3);I(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,y(2,4),.8,"#7a7468",3,12,!1)}Q(5)}const[f,c]=P(t,n,u),h=l>=1&&a<.34?2:0;i.globalAlpha=a<.6?1:(1-a)/.4,i.translate(F(f),F(c-14+h)),i.rotate(o*.9*(1-l)),lo(i,g4,0,0,3,x4)}})}function b4(e,t,n,o,r){for(let i=0;i<9;i++){const a=o*6+i*.7+r,s=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(F(t+Math.cos(a)*s)-1,F(n-4+Math.sin(a)*s*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const a=-o*4+i*Math.PI,s=F(t+Math.cos(a)*18),l=F(n-2+Math.sin(a)*5);e.fillStyle="#ff9a3a",e.fillRect(s-3,l-1,7,3),e.fillRect(s-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(s,l,1,1)}}const v4=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],w4={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function S4(e){J.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;T({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){en(r);const i=.32,a=.6+1.5*Math.min(1,o*2.2);n.globalAlpha=1-o;for(let s=0;s<14;s++){const l=s/14*at+t,u=a*(.65+.35*q(t+s)),[f,c]=P(r.x+Math.cos(l-.13)*i,r.y+Math.sin(l-.13)*i),[h,d]=P(r.x+Math.cos(l+.13)*i,r.y+Math.sin(l+.13)*i),[m,p]=P(r.x+Math.cos(l)*u,r.y+Math.sin(l)*u);n.fillStyle=s%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,c),n.lineTo(m,p),n.lineTo(h,d),n.closePath(),n.fill()}ft(r.x,r.y,.4+o*1.7,"#ff6a3a",null,4*(1-o)+1)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),a=i?so(i):.8,s=o<.06?2:o<.14?4:3,[l,u]=P(r.x,r.y,a+.32+o*.15),f=o<.7?1:(1-o)/.3;pt(!0);const c=Wt();c.globalAlpha=f*(.35+.2*Math.sin(o*40)),c.fillStyle="#ff2a1a",c.fillRect(F(l-22),F(u-18),44,36),c.globalAlpha=1,pt(!1),n.globalAlpha=f,lo(n,v4,l,u,s,w4)}});for(let n=0;n<26;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.1,.6),y(-.4,.4),y(-.4,.4),y(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);Q(3)}const _4=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],A4={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function T4(e){J.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;T({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),a=i?so(i):.8,[s,l]=P(r.x,r.y,a+.45),u=P(r.x,r.y,0)[1],f=t*1.9*ue(Math.min(1,o/.3)),c=o<.8?1:(1-o)/.2;if(o>.22&&o<.85){const h=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,g=s+m*h-p*d,x=l+m*d+p*h,b=o<.7?3:2;n.globalAlpha=c;for(let M=0;M<=14;M++){const v=M/14,S=x+(u-x)*v,_=g+Math.sin(w.T*22+M)*1.5+t*v*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(F(_)-1,F(S),b,F((u-x)/14)+1)}Math.random()<.6&&I(r.x+y(-.2,.2),r.y+y(-.2,.2),.02,y(-1,1),y(-1,1),y(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=c,n.translate(F(s),F(l)),n.rotate(f),lo(n,_4,0,0,3,A4)}}),T({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,o,r){const i=.15+.6*ue(Math.min(1,o/.45)),a=o<.6?.55:.55*(1-o)/.4;n.globalAlpha=a,ft(r.x,r.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=a*.6,ft(r.x-i*.25,r.y-i*.25,i*.35,null,"#c0203a")}})}function R4(e,t,n){const[o,r]=P(t.x,t.y,so(t)*.55),i=t.scale||1;for(let a=0;a<4;a++){const s=n*3.2+a*at/4+t.id,l=F(o+Math.cos(s)*22*i),u=F(r+Math.sin(s)*8*i+Math.sin(n*5+a)*2);e.globalAlpha=Math.sin(s)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&I(t.x+y(-.3,.3),t.y+y(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function C4(e){J.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,o=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(r,i,a){const s=Z(a.uid);s&&!s.dead&&(a.ex=s.x,a.ey=s.y);const[l,u]=P(t,n,.5),[f,c]=P(a.ex,a.ey,.6),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const M=(b-1)*.9+.3*Math.sin(o+b),v=Math.min(1,i*1.4-b*.1);if(!(v<=0))for(let S=0;S<7;S++){const _=v-S*.045;if(_<0)break;const A=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+b*2+w.T*10)*3,R=l+h*_+p*A,C=u+d*_+g*A-Math.sin(_*Math.PI)*14,z=S===0?4:S<3?3:2;r.globalAlpha=(1-S/7)*x,S===0&&(r.globalAlpha*=.35,r.fillStyle="#ff2a40",r.fillRect(F(R-5),F(C-5),10,10),r.globalAlpha=x),r.fillStyle=S===0?"#ff8a96":S<3?"#e0203a":"#8a0a1e",r.fillRect(F(R-z/2),F(C-z/2),z,z)}}if(!a.pop&&i>.72){a.pop=!0;for(let b=0;b<4;b++)I(a.ex+y(-.2,.2),a.ey+y(-.2,.2),.6,0,0,y(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const xa=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function P4(e){const t=e.x,n=e.y,o=e.ex===void 0?t:e.ex,r=e.ey===void 0?n:e.ey,i=o-r<t-n?1:-1;J.sfx("item_hex",t,n,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(a,s){const[l,u]=P(o,r,.7),[f,c]=P(t,n,.7),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=Math.min(1,s*2.6);a.globalAlpha=s<.6?1:(1-s)/.4;for(let b=0;b<=30;b++){const M=b/30;if(M>x)break;const v=Math.sin(M*at*2.5-s*9)*8*(1-M*.6);a.fillStyle=xa[(b+(s*24|0))%3],a.fillRect(F(l+h*M+p*v)-1,F(u+d*M+g*v)-1,3,3)}}}),T({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(a,s,l){const[u,f]=P(t,n,.6),c=Math.min(1,s/.42),h=s<.55?1:(1-s)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);pt(!0);const m=Wt();for(let x=0;x<20;x++){const b=c-x*.025;if(b<0)break;const M=d(b),v=F(5-x*.2);m.globalAlpha=(1-x/20)*h,m.fillStyle=xa[x<3?0:x<9?1:2],m.fillRect(F(u+Math.cos(M)*42-v/2),F(f+Math.sin(M)*24-v/2),v,v)}m.globalAlpha=1,pt(!1),a.globalAlpha=h;const p=d(c);for(let x=0;x<11;x++){const b=p-i*x*.07,M=1+x*.55,v=42-M/2,S=u+Math.cos(b)*v,_=f+Math.sin(b)*v*.58;a.fillStyle="#2a1040",a.fillRect(F(S-M/2),F(_-M/2),F(M)+1,F(M)+1),a.fillStyle="#f0e0ff",a.fillRect(F(u+Math.cos(b)*43)-1,F(f+Math.sin(b)*25)-1,2,2)}const g=p-i*.75;for(let x=38;x>10;x-=2)a.fillStyle=x%4?"#4a2a18":"#6a4024",a.fillRect(F(u+Math.cos(g)*x)-1,F(f+Math.sin(g)*x*.58)-1,3,3);if(!l.poof&&s>=.36){l.poof=!0;for(let x=0;x<9;x++)T({type:"puff",x:t+y(-.5,.5),y:n+y(-.5,.5),r:y(14,24),dur:y(.6,1),col:[176,128,236]});T({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*at,M=y(1,3);I(t,n,.6,Math.cos(b)*M,Math.sin(b)*M,y(.5,2.5),.6,xa[x%4],3,1,!0)}for(let x=0;x<6;x++)I(t+y(-.3,.3),n+y(-.3,.3),.3,0,0,y(.8,1.6),.7,"#a8e070",3,-.5,!1);Q(3)}}})}function I4(e,t){const[n,o]=P(e.x,e.y,so(e)+.22+Math.sin(t*3+e.id)*.03);pt(!0);const r=Wt();for(let i=0;i<12;i++){const a=t*5+i*.55+e.id,s=3+i*1.3,l=i<4?3:2;r.globalAlpha=1-i/14,r.fillStyle=xa[i%3],r.fillRect(F(n+Math.cos(a)*s)-1,F(o+Math.sin(a)*s*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const a=-t*2.5+i*Math.PI,s=F(n+Math.cos(a)*16),l=F(o+4+Math.sin(a)*5),u=.5+.5*Math.sin(t*9+i*2);r.globalAlpha=.4+.6*u,r.fillStyle=xa[0],r.fillRect(s-2,l,5,1),r.fillRect(s,l-2,1,5)}r.globalAlpha=1,pt(!1),Math.random()<.1&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,y(.6,1.2),.6,xa[2],2,-.3,!0)}function O4(e){for(let t=0;t<5;t++)T({type:"puff",x:e.x+y(-.35,.35),y:e.y+y(-.35,.35),r:y(12,20),dur:y(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*at,o=y(1,2.5);I(e.x,e.y,.5,Math.cos(n)*o,Math.sin(n)*o,y(.5,2),.5,xa[t%3],2,1,!0)}}const Br=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],z4=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],F4={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function E4(e){J.sfx("item_refresh",e.x,e.y,1),T({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){en(o);const r=.45+.85*ue(n),[i,a]=P(o.x,o.y),s=r*N.HW*Math.SQRT2*1.08,l=r*N.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,ft(o.x,o.y,r,Br[1],null,3),t.fillStyle=Br[2];for(let u=0;u<16;u++){const f=u/16*at-n*5;t.fillRect(F(i+Math.cos(f)*s)-2,F(a+Math.sin(f)*l)-2,5,4)}ft(o.x,o.y,r*.6,Br[0],null,1.5,[4,4])}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),[i,a]=P(o.x,o.y,(r?so(r):.8)*.55),s=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*at-n*6,f=l%2===0,c=f?4:2;t.fillStyle=f?Br[0]:Br[2],t.fillRect(F(i+Math.cos(u)*s)-c/2,F(a+Math.sin(u)*s)-c/2,c,c)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?Br[1]:Br[0];for(let c=3;c<f;c+=2)t.fillRect(F(i+Math.cos(u)*c)-1,F(a+Math.sin(u)*c)-1,2,2)}if(!o.end&&n>=.75){o.end=!0,T({type:"ring",x:o.x,y:o.y,r:1.25,dur:.4,col:Br[1],w:4});for(let l=0;l<20;l++)I(o.x+y(-.4,.4),o.y+y(-.4,.4),y(.2,.9),y(-.6,.6),y(-.6,.6),y(1.5,3),.6,Br[l%3],3,0,!0)}}}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),[i,a]=P(o.x,o.y,(r?so(r):.8)*.55),s=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(F(i),F(a)),t.rotate(Math.PI*s*s*(3-2*s)),lo(t,z4,0,0,3,F4)}}),Q(2)}function Ty(e,t,n,o,r){const i=F(t),a=F(n);e.fillStyle=o,e.fillRect(i-3,a,2,3),e.fillRect(i+1,a,2,3),e.fillRect(i-2,a+2,4,2),e.fillStyle=r,e.fillRect(i-1,a+2,2,1)}function L4(e){J.sfx("item_immune",e.x,e.y,1);const t=Math.random()*at;T({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),[a,s]=P(r.x,r.y,(i?so(i):.8)*.45),l=ue(Math.min(1,o/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const c=f/18*at+t+(1-l)*1.5,h=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,o*5),Ty(n,a+Math.cos(c)*h,s+Math.sin(c)*h*1.15,"#ffd24a","#fff6c8")}if(o>.6){const f=(1-o)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(a,s,32*u+6*(1-f),38*u+6*(1-f),0,0,at),n.stroke()}}}),T({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);Q(2)}function k4(e,t){const n=e.scale||1,[o,r]=P(e.x,e.y,so(e)*.45),i=30*n,a=36*n;pt(!0);const s=Wt();s.globalAlpha=.5+.1*Math.sin(t*4),s.strokeStyle="#ffcc40",s.lineWidth=2,s.fillStyle="rgba(255,200,60,0.07)",s.beginPath(),s.ellipse(o,r,i,a,0,0,at),s.fill(),s.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,c=i*Math.sqrt(Math.max(0,1-f/a*(f/a)))-4;for(let h=-c+(u&1?5:0);h<=c;h+=10){const d=Math.max(0,1-Math.abs(h-l+f*.5)/16);s.globalAlpha=.16+.6*d,Ty(s,o+h,r+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}s.globalAlpha=1,pt(!1)}function D4(e){J.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let o=0;o<10;o++)t[o*4]=o/10*at+y(-.25,.25),t[o*4+1]=y(.8,1.6),t[o*4+2]=y(-14,14),t[o*4+3]=y(4,8);const n=new Float32Array(5);for(let o=0;o<5;o++)n[o]=o/5*at+y(-.4,.4);T({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(o,r,i){const a=en(i),[s,l]=P(i.x,i.y,(a?so(a):.8)*.6);if(r<.45){const f=Math.min(1,r/.08);if(o.fillStyle="#7a84a8",o.beginPath(),o.arc(s,l,16*f,0,at),o.fill(),o.fillStyle="#dfe8ff",o.beginPath(),o.arc(s,l,13*f,0,at),o.fill(),o.fillStyle="#fffbe8",o.beginPath(),o.arc(s-2*f,l,8*f,0,at),o.fill(),o.fillStyle="#dfe8ff",o.beginPath(),o.arc(s+2*f,l-2*f,7*f,0,at),o.fill(),r>.25){o.strokeStyle="#4a5478",o.lineWidth=1.5,o.globalAlpha=Math.min(1,(r-.25)/.1);for(let d=0;d<5;d++){const m=n[d];o.beginPath(),o.moveTo(s,l),o.lineTo(s+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),o.lineTo(s+Math.cos(m)*14,l+Math.sin(m)*14),o.stroke()}o.globalAlpha=1}pt(!0);const c=Wt(),h=s-14+r/.45*28;c.globalAlpha=.8,c.fillStyle="#ffffff";for(let d=-3;d<=3;d++)c.fillRect(F(h+d*.6),F(l+d*3)-1,2,3);pt(!1);return}const u=(r-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const c=Math.random()*at,h=y(1.5,3.5);I(i.x,i.y,.7,Math.cos(c)*h,Math.sin(c)*h,y(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){pt(!0);const f=Wt();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const c=10+u*60;f.fillRect(F(s-c),F(l)-1,F(c*2),3),f.fillRect(F(s)-1,F(l-c*.6),3,F(c*1.2)),pt(!1)}o.globalAlpha=1-u;for(let f=0;f<10;f++){const c=t[f*4],h=u*t[f*4+1]*40,d=t[f*4+3],m=s+Math.cos(c)*(h+8),p=l+Math.sin(c)*(h+8)*.7+u*u*50,g=u*t[f*4+2];o.save(),o.translate(m,p),o.rotate(g),o.fillStyle=f%3?"#dfe8ff":"#fffbe8",o.beginPath(),o.moveTo(0,-d),o.lineTo(d*.7,d*.6),o.lineTo(-d*.6,d*.4),o.closePath(),o.fill(),o.strokeStyle="#7a84a8",o.lineWidth=1,o.stroke(),o.restore()}}})}const R0=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function U4(e){J.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,o=e.ex===void 0?t:e.ex,r=e.ey===void 0?n:e.ey,i=e.dur||.32,a=Math.random()*9,s=i+.45,l=Math.hypot(o-t,r-n)||1,u=-(r-n)/l,f=(o-t)/l;T({type:"ring",x:t,y:n,r:.8,dur:.35,col:R0[1],w:4});for(let c=0;c<8;c++)I(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(.3,1),.5,"#c8b48a",3,3,!1);T({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(c,h){const d=h*s,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[g,x]=P(t,n,.3),[b,M]=P(o,r,.3),v=(u-f)*N.HW,S=(u+f)*N.HH;for(let _=0;_<5;_++){const A=(_-2)*.22,R=(_-2)*6;for(let C=p;C<=m;C+=.025){const z=A+Math.sin(C*18+_*1.3+a)*.08,O=(C-p)/(m-p);c.globalAlpha=O*(_===2?1:.7),c.fillStyle=R0[O>.85?0:_===2?1:2],c.fillRect(F(g+(b-g)*C+v*z)-1,F(x+(M-x)*C+S*z+R)-1,3,2)}}for(let _=0;_<3;_++){const A=.25+_*.3;if(A<p||A>m)continue;const R=g+(b-g)*A+v*(_-1)*.35,C=x+(M-x)*A+S*(_-1)*.35-10;c.globalAlpha=1-(A-p)/Math.max(.01,m-p)*.5;for(let z=0;z<9;z++){const O=w.T*9+z*.75+_,E=2+z*1.2;c.fillStyle=R0[z<3?0:1],c.fillRect(F(R+Math.cos(O)*E)-1,F(C+Math.sin(O)*E*.6)-1,2,2)}}}});for(let c=0;c<14;c++){const h=Math.random();I(t+(o-t)*h,n+(r-n)*h,y(.1,.6),(o-t)/l*y(1,3),(r-n)/l*y(1,3),y(.2,1),y(.4,.8),R0[c%3],2,0,!0)}}const hc=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function X4(e,t){const[o,r]=P(e.x,e.y),i=2.8*N.HW*Math.SQRT2,a=2.8*N.HH*Math.SQRT2;pt(!0);const s=Wt();s.globalAlpha=.07,s.fillStyle="#ff8a2a",s.beginPath(),s.ellipse(o,r,i*.97,a*.97,0,0,at),s.fill(),s.globalAlpha=.22+.06*Math.sin(t*3+e.id),s.strokeStyle="#ff9a3a",s.lineWidth=2,s.setLineDash([10,7]),s.lineDashOffset=-t*24,s.beginPath(),s.ellipse(o,r,i,a,0,0,at),s.stroke(),s.setLineDash([]),s.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*at+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),c=F(3+f*4);s.globalAlpha=.25+.45*f,s.fillStyle=f>.75?hc[0]:hc[1],s.fillRect(F(o+Math.cos(u)*i)-2,F(r+Math.sin(u)*a)-c,4,c)}if(s.globalAlpha=1,pt(!1),Math.random()<.35){const l=Math.random()*at,u=Math.sqrt(Math.random())*2.8;I(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,y(.8,1.6),y(.6,1),hc[Math.random()*4|0],2,-.3,!0,.97)}}const Ns={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},Q1={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},Bl=2,dc={};function Ry(e,t){const n=e+(t?"o":"c");if(dc[n])return dc[n];let o=Ns[e]||Ns.obs;const r=Q1[e]||Q1.obs,i=e==="sen"?"S":"W";t||(o=o.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const a=document.createElement("canvas");a.width=o[0].length*Bl,a.height=o.length*Bl;const s=a.getContext("2d");return lo(s,o,a.width/2,a.height/2,Bl,r),dc[n]=a}function Ld(e){const t=Ns[e]||Ns.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*Bl}function Sf(e,t){return(t+e.id*1.37)%4.2>.14}function G4(e,t,n){const o=w.T,r=Wt(),i=window.SIM;if(r.globalAlpha=.35,ft(e.x,e.y,.16,null,"#0a0614"),r.globalAlpha=1,t){const a=Math.max(0,e.until-n),s=e.kind==="obs"?360:300,[l,u]=P(e.x,e.y);r.globalAlpha=a<20?.5+.4*Math.abs(Math.sin(o*6)):.55,r.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",r.lineWidth=2,r.beginPath(),r.ellipse(l,u,.34*N.HW*Math.SQRT2,.34*N.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+at*Math.min(1,a/s)),r.stroke(),r.globalAlpha=1,e.kind==="sen"&&ft(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else r.globalAlpha=.55+.35*Math.sin(o*7),ft(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),r.globalAlpha=1}function N4(e,t){const n=w.T,[o,r]=P(e.x,e.y),i=r-Ld(e.kind);if(Sf(e,n)){pt(!0);const a=Wt(),s=.6+.4*Math.sin(n*3+e.id);a.globalAlpha=.25*s,a.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",a.fillRect(F(o)-7,F(i)-5,14,10),a.globalAlpha=.6*s,a.fillRect(F(o)-3,F(i)-2,6,4),a.globalAlpha=1,pt(!1)}if(!t){const a=Wt(),s=F(r-(Ns[e.kind]||Ns.obs).length*Bl-8+Math.sin(n*5)*2),l=F(o);a.fillStyle="#120c1a",a.fillRect(l-5,s-2,11,4),a.fillRect(l-3,s+2,7,2),a.fillRect(l-1,s+4,3,2),a.fillStyle="#ff4a3a",a.fillRect(l-4,s-1,9,2),a.fillRect(l-2,s+1,5,2),a.fillRect(l,s+3,1,2)}}function B4(e,t,n,o){const r=Ry(t,!0),[i,a]=P(n,o);e.globalAlpha=.6+.15*Math.sin(w.T*6),e.drawImage(r,F(i-r.width/2),F(a-r.height)),e.globalAlpha=1}function $4(e){const t=e.kind!=="sen",n=window.SIM,o=e.x,r=e.y;J.sfx(t?"ward_obs":"ward_sen",o,r,.9);for(let i=0;i<10;i++)I(o,r,.05,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);T({type:"custom",layer:"top",add:!0,dur:.7,x:o,y:r,draw(i,a){const[s,l]=P(o,r),u=l-Ld(t?"obs":"sen"),f=6+26*ue(a),c=10*Math.sin(Math.min(1,a*2.2)*Math.PI*.5)*(1-a*.5);i.globalAlpha=1-a,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let h=-8;h<=8;h++){const d=h/8,m=c*(1-d*d);i.fillRect(F(s+d*f)-1,F(u-m)-1,3,2),i.fillRect(F(s+d*f)-1,F(u+m)-1,3,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.9,x:o,y:r,draw(i,a){i.globalAlpha=.5*(1-a),ft(o,r,(t?n.WARD_VISION:n.SENTRY_R)*ue(a),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)I(o+y(-.15,.15),r+y(-.15,.15),.5,0,0,y(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function H4(e){const t=e.kind!=="sen",n=e.x,o=e.y;J.sfx("ward_break",n,o,1);for(let r=0;r<16;r++){const i=Math.random()*at,a=y(1,3);I(n,o,y(.2,.5),Math.cos(i)*a,Math.sin(i)*a,y(1.5,3.5),y(.6,1),t?r%2?"#8a5a30":"#3a2414":r%2?"#8a90a0":"#2e323e",3,12,!1)}for(let r=0;r<4;r++)T({type:"puff",x:n+y(-.3,.3),y:o+y(-.3,.3),r:y(10,16),dur:y(.5,.8),col:[150,140,130]});T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:o,draw(r,i){const[a,s]=P(n,o,.3),l=3+14*i;r.globalAlpha=1-i,r.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*at+i*2;r.fillRect(F(a+Math.cos(f)*l)-1,F(s+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(r.fillStyle="#ffffff",r.fillRect(F(a)-3,F(s)-3,6,6))}})}const t0=["#fff2c8","#ffd080","#ffa040","#c86a10"];function W4(e){J.sfx("mon_howl",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),[a,s]=P(r.x,r.y,(i?so(i):.9)*.9);for(let l=0;l<3;l++){const u=o*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?t0[1]:t0[0];for(let c=-Math.PI*.86;c<=-Math.PI*.14;c+=.1)n.fillRect(F(a+Math.cos(c)*f)-1,F(s+Math.sin(c)*f*.7)-1,3,2)}}}),T({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=w.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||T({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(o,r,i){const a=Z(i.uid);if(!a||a.dead||Ge(a))return;const s=w.T,[l,u]=P(a.x,a.y,so(a)*.72),f=r>.85?(1-r)/.15:1,c=.7+.3*Math.sin(s*14+a.id),h=a.scale||1;o.globalAlpha=.35*f*c,o.fillStyle="#ff2010",o.fillRect(F(l-9*h),F(u-4),F(18*h),7),o.globalAlpha=f,o.fillStyle="#ff3a2a",o.fillRect(F(l-5*h)-1,F(u)-1,3,2),o.fillRect(F(l+5*h)-1,F(u)-1,3,2),o.fillStyle="#fff0e0",o.fillRect(F(l-5*h),F(u)-1,1,1),o.fillRect(F(l+5*h),F(u)-1,1,1),Math.random()<.12&&I(a.x+y(-.3,.3),a.y+y(-.3,.3),.3,0,0,y(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function q4(e){const t=w.T,n=Wt(),o=Math.max(0,e.t),r=Math.min(1,o/.6)*Math.min(1,(1-o/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*r,ft(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let s=0;s<10;s++){const l=q(i*7+s),u=q(i*3+s*5),f=l*at+t*.25*(s%2?1:-1),c=e.r*(.2+.6*u),[h,d]=P(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.15+.1*Math.sin(t+s)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+s))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*r,n.fillStyle=s%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(h,d,m,m*.6,0,0,at),n.fill()}pt(!0);const a=Wt();for(let s=0;s<9;s++){const l=(t*.45+q(i+s*11))%1,u=q(i*5+s)*at,f=e.r*.8*q(i+s*3),[c,h]=P(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);a.globalAlpha=Math.sin(l*Math.PI)*r,a.fillStyle=s%2?"#e0b8ff":"#d8ffa0",a.fillRect(F(c)-1,F(h)-1,2,2)}a.globalAlpha=1,pt(!1),n.globalAlpha=1}function V4(e){J.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;T({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,o){n.globalAlpha=(1-o)*.7,ft(e.x,e.y,t*ue(o),"#b890e0",null,4*(1-o)+1),n.globalAlpha=(1-o)*.5,ft(e.x,e.y,t*.7*ue(o),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const o=Math.random()*at,r=y(.5,1.6)*t;I(e.x,e.y,.3,Math.cos(o)*r,Math.sin(o)*r,y(.3,1.2),y(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function Y4(e){J.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,o=e.radius||2.4,r=Math.random()*at;T({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,a){i.globalAlpha=(1-a)*.8,ft(t,n,o*ue(Math.min(1,a*4)),"#6a4a24",null,5*(1-a)+1),i.globalAlpha=(1-a)*.35,ft(t,n,o,null,"#3a2814"),i.globalAlpha=1-a,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let s=0;s<10;s++){const l=r+s/10*at;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(o-.3)/4,c=l+(q(r+s*9+u)-.5)*.5,[h,d]=P(t+Math.cos(c)*f,n+Math.sin(c)*f);u?i.lineTo(h,d):i.moveTo(h,d)}i.stroke()}}}),T({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,a){const s=a<.15?ue(a/.15):a>.7?(1-a)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=r+(u?l/10:(l-10)/6+.08)*at,c=u?o*(.85+.15*q(r+l)):o*.45,[h,d]=P(t+Math.cos(f)*c,n+Math.sin(f)*c),m=(u?34:24)*s*(.8+.4*q(r+l*3)),p=(q(r+l*7)-.5)*22,g=h+p,x=d-m,b=h-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(h,d),i.quadraticCurveTo(b,M,g,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(F(g)-2,F(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(F(g),F(x)-2,2,1)}}});for(let i=0;i<30;i++){const a=Math.random()*at,s=y(.5,2.5);I(t+Math.cos(a)*o*.8,n+Math.sin(a)*o*.8,.1,Math.cos(a)*s,Math.sin(a)*s,y(1,3),y(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}Q(6)}const K4=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],j4={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function Q4(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(J.sfx("camp_"+t,e.x,e.y,1),t==="pack"){T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),[a,s]=P(r.x,r.y,(i?so(i):.8)+.3+o*.5);n.globalAlpha=o<.15?o/.15:o>.6?(1-o)/.4:1,lo(n,K4,a,s,o<.1?2:3,j4);const[l,u]=P(r.x,r.y,.4);if(o<.5){n.globalAlpha=1-o/.5,n.fillStyle=t0[1];for(let f=-1;f<=1;f++)for(let c=0;c<8;c++)n.fillRect(F(l+f*8-10+c*3),F(u-12+c*3),2,2)}}});for(let n=0;n<18;n++)I(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(1,2.2),.8,t0[n%4],3,0,!0)}else if(t==="spore"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=en(r),[a,s]=P(r.x,r.y,(i?so(i):.8)*.5),l=ue(Math.min(1,o/.7));for(let u=0;u<16;u++){const f=u/16*at+l*5,c=60*(1-l)+6;n.globalAlpha=o<.7?1:(1-o)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(F(a+Math.cos(f)*c)-2,F(s+Math.sin(f)*c*.6)-2,4,4)}}}),T({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)T({type:"puff",x:e.x+y(-.6,.6),y:e.y+y(-.6,.6),r:y(8,14),dur:y(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(o,r,i){const a=en(i),[s,l]=P(i.x,i.y,(a?so(a):.8)*.4),u=ue(Math.min(1,r/.45)),f=a&&a.scale||1;o.globalAlpha=r<.75?1:(1-r)/.25;for(let c=0;c<10;c++){const h=c/10*at,d=(70*(1-u)+24)*f,m=F(s+Math.cos(h)*d),p=F(l+Math.sin(h)*d*.55);o.fillStyle="#3a2412",o.fillRect(m-5,p-7,10,14),o.fillStyle="#8a5a30",o.fillRect(m-4,p-6,8,12),o.fillStyle="#5a3a1e",o.fillRect(m-2,p-6,1,12),o.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,Q(2);for(let c=0;c<10;c++)I(i.x+y(-.4,.4),i.y+y(-.4,.4),.4,y(-1,1),y(-1,1),y(1,2),.6,c%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function Z4(e,t,n){if(t.camp_bark){const[o,r]=P(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,a=i*N.HW*Math.SQRT2,s=i*N.HH*Math.SQRT2,l=Wt();for(let u=0;u<12;u++){const f=u/12*at;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(F(o+Math.cos(f)*a)-2,F(r+Math.sin(f)*s)-1,4,3)}}if(t.camp_pack){pt(!0);const o=Wt(),[r,i]=P(e.x,e.y);o.globalAlpha=.45+.15*Math.sin(n*3+e.id),o.fillStyle=t0[2];for(let a=0;a<3;a++){const s=n*.8+a*at/3,l=r+Math.cos(s)*26,u=i+Math.sin(s)*13;for(let f=-1;f<=1;f++)for(let c=0;c<4;c++)o.fillRect(F(l+f*4-4+c*2),F(u-3+c*2),2,1)}o.globalAlpha=1,pt(!1)}if(t.camp_spore){pt(!0);const o=Wt(),[r,i]=P(e.x,e.y,so(e)*.5);for(let a=0;a<4;a++){const s=n*(.9+a*.2)+a*1.7+e.id,l=r+Math.cos(s)*20+Math.sin(n*1.7+a)*5,u=i+Math.sin(s*1.3)*16;o.globalAlpha=.5+.3*Math.sin(n*4+a),o.fillStyle=a%2?"#e0b8ff":"#c8f090",o.fillRect(F(l)-1,F(u)-1,2,2)}o.globalAlpha=1,pt(!1)}}function Bs(e,t,n){const o=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],r=o&&o.active&&o.active[t];return typeof r=="number"?r:n}function Qn(e){return so(e)*.68}const uu=(e,t,n,o)=>!!t[n],J4=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],tb={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},mc=["#ff5a6a","#5ab4ff"];function eb(e){J.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*at,o=new Float32Array(t*3);for(let r=0;r<t;r++)o[r*3]=n+r/t*at+y(-.25,.25),o[r*3+1]=y(24,48),o[r*3+2]=r/t*.2;T({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(r,i,a){const s=en(a),[l,u]=P(a.x,a.y,(s?Qn(s):.6)+.22),f=l+20,c=i<.28?-.8+1.7*ue(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);r.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,r.translate(F(f),F(u)),r.rotate(c),lo(r,J4,0,0,3,tb)}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(r,i,a){const s=en(a),l=s?Qn(s):.6,[u,f]=P(a.x,a.y,l+.45),c=u+30,[h,d]=P(a.x,a.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){r.globalAlpha=1-m*.6,r.fillStyle="#ffd8ff";const p=3+m*9;r.fillRect(F(c-p),F(f)-1,F(p*2),2),r.fillRect(F(c)-1,F(f-p),2,F(p*2))}}for(let m=0;m<t;m++){const p=mc[m&1];for(let g=2;g>=0;g--){const x=(i-.24-o[m*3+2])/.58-g*.035;if(x<=0||x>1)continue;const b=o[m*3],M=Math.sin(x*Math.PI),v=c+(h-c)*x+Math.cos(b)*34*M,S=f+(d-f)*x+Math.sin(b)*12*M-o[m*3+1]*M;if(g){r.globalAlpha=.5/g,r.fillStyle=p,r.fillRect(F(v)-1,F(S)-1,2,2);continue}r.globalAlpha=.3,r.fillStyle=p,r.fillRect(F(v)-4,F(S)-4,8,8),r.globalAlpha=1,r.fillRect(F(v)-2,F(S)-2,4,4),r.fillStyle="#ffffff",r.fillRect(F(v)-1,F(S)-2,2,1)}}!a.land&&i>.84&&(a.land=!0,T({type:"custom",layer:"ground",add:!0,dur:.55,x:a.x,y:a.y,uid:a.uid,draw(m,p,g){en(g),m.globalAlpha=1-p,m.lineDashOffset=p*30,ft(g.x,g.y,.35+.5*ue(p),mc[0],null,3,[5,5]),m.lineDashOffset=-p*30,ft(g.x,g.y,.3+.42*ue(p),mc[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),ht(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const Ii=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function nb(e){J.sfx("item_phase",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),i=r&&r.scale||1,a=P(o.x,o.y,0)[1],s=P(o.x,o.y,(r?Qn(r):.8)*1.05)[1],l=P(o.x,o.y)[0],u=8,f=1-n,c=F(26*i);for(let h=0;h<u;h++){const d=F(s+(a-s)*(h+.5)/u),m=Math.sin(h*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=Ii[1],t.fillRect(F(l-c/2+m-3),d-1,c,3),t.fillStyle=Ii[2],t.fillRect(F(l-c/2-m+3),d-1,c,3)}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){en(o);const r=.28*ue(n),i=.45+.45*n;t.globalAlpha=1-n,ft(o.x-r,o.y+r,i,Ii[1],null,2),ft(o.x+r,o.y-r,i,Ii[2],null,2)}}),ht(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function ob(e,t){const n=e._phX,o=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const r=e.x-n,i=e.y-o,a=Math.hypot(r,i);if(a<.003||a>1)return;const s=r/a,l=i/a,[u,f]=P(e.x,e.y),[c,h]=P(e.x-s,e.y-l),d=Math.hypot(c-u,h-f)||1,m=(c-u)/d,p=(h-f)/d,g=Qn(e)*N.ZK,x=e.scale||1;pt(!0);const b=Wt();for(let M=0;M<5;M++){const v=g*(.15+M*.17),S=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,A=f-v+p*8;for(let R=0;R<S;R+=2){const C=1-R/S;b.globalAlpha=.55*C,b.fillStyle=Ii[1],b.fillRect(F(_+m*R),F(A+p*R)-2,2,1),b.fillStyle=Ii[2],b.fillRect(F(_+m*R),F(A+p*R)+1,2,1)}}if(b.globalAlpha=1,pt(!1),Math.random()<.35){const M=Math.random()<.5;I(e.x-s*.2+(M?.06:-.06),e.y-l*.2-(M?.06:-.06),.02,0,0,0,.45,M?Ii[1]:Ii[2],3,0,!0)}}const vi=["#ffffff","#a8d0ff","#4a8aff","#26349a"],C0=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function yh(e,t,n,o,r){const i=C0[(o%C0.length+C0.length)%C0.length],a=F(t)-r*1.5,s=F(n)-r*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(a+u*r,s+l*r,r,r)}const rb=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],ib={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function ab(e){J.sfx("item_arcane",e.x,e.y,1);const t=e.radius||Bs("arcane_boots","radius",6),n=e.x,o=e.y,r=.9;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:o,uid:e.uid,draw(a,s,l){en(l);const u=Math.min(1,s/.12),f=.95*u,[c,h]=P(l.x,l.y),d=f*.8*N.HW*Math.SQRT2,m=f*.8*N.HH*Math.SQRT2;a.globalAlpha=s<.7?1:(1-s)/.3,ft(l.x,l.y,f,vi[1],null,2),ft(l.x,l.y,f*.62,vi[2],null,2),a.fillStyle=vi[0];for(let p=0;p<10;p++){const g=p/10*at+s*2.4;yh(a,c+Math.cos(g)*d,h+Math.sin(g)*m,p,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:r,x:n,y:o,draw(a,s){const l=t*ue(s),[u,f]=P(n,o),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=40;a.globalAlpha=(1-s)*.35,ft(n,o,l,vi[2],null,2),a.globalAlpha=1-s*s;for(let m=0;m<d;m++){const p=m/d*at;a.fillStyle=m%4?vi[1]:vi[0],yh(a,u+Math.cos(p)*c,f+Math.sin(p)*h,m*7+(s*12|0),2)}}});const i=w.game;if(i)for(const a of i.heroes||[]){if(a.dead||a.team!==e.team)continue;const s=Math.hypot(a.x-n,a.y-o);s>t||T({type:"custom",layer:"top",dur:.7,delay:ue(s/t)*r*.85,x:a.x,y:a.y,uid:a.id,draw(l,u,f){const c=en(f),h=c?Qn(c):.8,d=Math.min(1,u/.4),[m,p]=P(f.x,f.y,h+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),lo(l,rb,m,p,2,ib);return}const g=(u-.4)/.6;l.globalAlpha=1-g,l.fillStyle=vi[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),M=4+g*14;l.fillRect(F(m+Math.cos(b)*M)-1,F(p+Math.sin(b)*M*.8+g*g*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)I(f.x+y(-.2,.2),f.y+y(-.2,.2),h*.8,0,0,y(-.6,-.2),.5,vi[x%3],2,0,!0)}}})}ht(n,o,2.6,5933823,.85,1),Q(2)}const sb=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],lb={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},ub=[0,1,2,3].map(e=>sb.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function fb(e){J.sfx("item_clarity",e.x,e.y,1),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),[i,a]=P(o.x,o.y,(r?Qn(r):.6)*.85+Math.min(1,n*5)*.08),s=i+26*(r&&r.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(F(s),F(a)),t.rotate(-l),lo(t,ub[u],0,0,3,lb),!o.pop&&n>.12&&(o.pop=!0,I(o.x,o.y,(r?Qn(r):.8)+.5,y(-.6,.6),y(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),T({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),i=r?Qn(r):.8,a=r&&r.scale||1;for(let s=0;s<8;s++){const l=n*1.6-s*.075;if(l<0||l>1)continue;const u=s*2.4+l*4,[f,c]=P(o.x,o.y,i*(.1+l*1.1)),h=F(f+Math.cos(u)*20*a),d=F(c+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(h-1,d-2,3,1),t.fillRect(h-1,d+2,3,1),t.fillRect(h-2,d-1,1,3),t.fillRect(h+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(h-1,d-1,1,1)):(t.fillRect(h-3,d,2,1),t.fillRect(h+2,d,2,1),t.fillRect(h,d-3,1,2),t.fillRect(h,d+2,1,2))}}}),ht(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const cb=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],hb={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},P0=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function db(e){J.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,o=e.radius||10,r=.34,i=Math.random()*99;T({type:"custom",layer:"top",dur:r+.25,x:t,y:n,draw(a,s,l){const u=s*l.dur;if(u<r){const p=u/r,[g,x]=P(t,n,.9+p*(2.1-p)*1.2);a.translate(F(g),F(x)),a.rotate(p*7),lo(a,cb,0,0,3,hb);return}const f=(u-r)/.25,[c,h]=P(t,n,2.2);if(!l.burst){l.burst=!0,Q(2);for(let p=0;p<70;p++){const g=Math.random()*at,x=y(.5,3.4);I(t,n,2.2,Math.cos(g)*x,Math.sin(g)*x,y(-.4,1),y(1.1,1.8),P0[p%4],p%5?2:3,1.4,!0,.95)}}pt(!0);const d=Wt();d.globalAlpha=1-f,d.fillStyle=P0[1];const m=6+f*30;d.fillRect(F(c-m),F(h)-1,F(m*2),2),d.fillRect(F(c)-1,F(h-m),2,F(m*2)),d.fillRect(F(c)-4,F(h)-4,8,8),pt(!1)}}),T({type:"custom",layer:"ground",add:!0,dur:1.1,delay:r,x:t,y:n,draw(a,s){const l=o*ue(s),[u,f]=P(t,n),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=72,m=Math.floor(w.T*20);for(let p=0;p<d;p++){const g=q(i+p*3+m);if(g<.3)continue;const x=p/d*at+q(i+p)*.08,b=1-q(i+p*7)*.06;a.globalAlpha=(1-s)*g,a.fillStyle=P0[p%4];const M=g>.85?3:2;a.fillRect(F(u+Math.cos(x)*c*b)-1,F(f+Math.sin(x)*h*b)-1,M,M)}}}),T({type:"custom",layer:"top",add:!0,dur:1.8,delay:r,x:t,y:n,draw(a,s){const l=s*1.8;for(let u=0;u<26;u++){const f=q(i+u*11)*at,c=Math.sqrt(q(i+u*5))*o,h=ue(c/o)*.9+q(i+u)*.3,d=(l-h)/.5;if(d<0||d>1)continue;const[m,p]=P(t+Math.cos(f)*c,n+Math.sin(f)*c,.3+q(i+u*13)*.8),g=F(2+5*Math.sin(d*Math.PI));a.globalAlpha=Math.sin(d*Math.PI),a.fillStyle=P0[u%4],a.fillRect(F(m)-g,F(p),g*2+1,1),a.fillRect(F(m),F(p)-g,1,g*2+1)}}}),ht(t,n,3,16773312,.9,.6,{delay:r})}const mb=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],pb={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function yb(e){J.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,o=Math.random()<.5?1:-1,r=Math.random()*9;T({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l&&!l.dead?Qn(l):.8,[f,c]=P(t,n,u*.55),h=w.T;if(a<.3){pt(!0);const d=Wt(),m=a/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const g=36-p*8;d.fillRect(F(f-o*(10+p*8+m*10)),F(c-g/2),p?2:3,g)}pt(!1)}i.globalAlpha=a<.65?1:(1-a)/.35;for(let d=0;d<3;d++){const m=ue(Math.min(1,a*1.3)),p=o*(d===1?-.4:1),g=f+p*m*(26+d*10)+Math.sin(a*14+d*2+r)*4,x=c-4-m*(24+d*9)+Math.sin(a*21+d)*3;lo(i,mb[Math.floor(h*22)+d&1],g,x,d===1?2:3,pb)}}})}const vr=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function gb(e,t,n,o,r){for(let i=0;i<6;i++){const a=r+i/6*at,s=Math.cos(a),l=Math.sin(a)*.5;for(let u=0;u<=o;u+=2)e.fillRect(F(t+s*u)-1,F(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+s*o*u,c=n+l*o*u,h=o*(.32-u*.18);for(const d of[-1,1]){const m=a+d*.9,p=Math.cos(m),g=Math.sin(m)*.5;for(let x=2;x<=h;x+=2)e.fillRect(F(f+p*x)-1,F(c+g*x)-1,2,2)}}}}function xb(e){J.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,o=e.radius||Bs("frost_guard","radius",4.5),r=Math.random()*99,i=.55,a=1.25,s=72,l=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),c=[];for(let h=0;h<s;h++)l[h]=h/s*at+(q(r+h)-.5)*.06,u[h]=14+q(r+h*7)*18,f[h]=(q(r+h*3)-.5)*.12,c.push(h);c.sort((h,d)=>Math.sin(l[h])-Math.sin(l[d])),T({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(h,d){const[m,p]=P(t,n),g=ue(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;h.globalAlpha=.22*x,ft(t,n,o*g,null,"rgba(170,225,255,1)"),h.globalAlpha=.7*x,ft(t,n,o*g,vr[2],null,2,[3,4]),h.globalAlpha=.85*x,h.fillStyle=vr[1];for(let b=0;b<12;b++){const M=r+b/12*at,v=o*g*(.55+.4*q(r+b));for(let S=.3;S<v;S+=.22){const[_,A]=P(t+Math.cos(M)*S,n+Math.sin(M)*S);if(h.fillRect(F(_)-1,F(A)-1,2,2),(S*10|0)%2){const[R,C]=P(t+Math.cos(M+.5)*(S+.12),n+Math.sin(M+.5)*(S+.12));h.fillRect(F(R),F(C),2,1);const[z,O]=P(t+Math.cos(M-.5)*(S+.12),n+Math.sin(M-.5)*(S+.12));h.fillRect(F(z),F(O),2,1)}}}h.globalAlpha=x,h.fillStyle=d<.12?vr[0]:vr[1],gb(h,m,p,26,r+d*1.2)}}),T({type:"custom",layer:"top",dur:a,x:t,y:n,draw(h,d){const m=d*a,p=ue(Math.min(1,m/i)),g=o*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(a-i-.2)):1,b=(M,v,S,_,A)=>{h.fillStyle=vr[4],h.beginPath(),h.moveTo(M-_-1,v+1),h.lineTo(M-_*.6,v-S*.7),h.lineTo(M+A,v-S-1),h.lineTo(M+_*.6,v-S*.7),h.lineTo(M+_+1,v+1),h.closePath(),h.fill(),h.fillStyle=vr[2],h.beginPath(),h.moveTo(M-_,v),h.lineTo(M-_*.6+1,v-S*.7),h.lineTo(M+A,v-S),h.lineTo(M,v),h.closePath(),h.fill(),h.fillStyle=vr[3],h.beginPath(),h.moveTo(M,v),h.lineTo(M+A,v-S),h.lineTo(M+_*.6-1,v-S*.7),h.lineTo(M+_,v),h.closePath(),h.fill(),h.fillStyle=vr[0],h.fillRect(F(M+A)-1,F(v-S),2,3),h.fillStyle=vr[1],h.fillRect(F(M-_*.5),F(v-S*.6),1,F(S*.45))};h.globalAlpha=1;for(const M of c){const v=l[M],S=Math.cos(v),_=Math.sin(v),A=u[M]*(.55+.45*p)*x;if(A<2)continue;const[R,C]=P(t+S*g*(.84+f[M]),n+_*g*(.84+f[M]));b(R,C,A*.5,3+A*.08,S*2);const[z,O]=P(t+S*g*(1+f[M]),n+_*g*(1+f[M]));b(z,O,A,3+A*.12,S*3),m<i&&!(M&3)&&(h.globalAlpha=.85,h.fillStyle=vr[0],h.fillRect(F(z)-4,F(O)-1,8,2),h.globalAlpha=1)}}});for(let h=0;h<46;h++){const d=Math.random()*at,m=Math.sqrt(Math.random())*o;I(t+Math.cos(d)*m,n+Math.sin(d)*m,y(.8,1.8),y(-.3,.3),y(-.3,.3),y(-.2,.1),y(1,1.6),h%3?"#ffffff":"#c8f0ff",2,.25,h%4===0,.97)}ht(t,n,o*1.05,9102591,.95,.9),Q(4)}const Wo=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function Mb(e){J.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,o=e.ex===void 0?t:e.ex,r=e.ey===void 0?n:e.ey,i=Math.hypot(o-t,r-n),a=Math.min(.38,.12+i*.04),s=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:a+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(a+.05)/a),[c,h]=P(t,n,.65),[d,m]=P(o,r,.55),p=d-c,g=m-h,x=Math.hypot(p,g)||1,b=p/x,M=g/x,v=-M,S=b,_=c+p*f,A=h+g*f;for(let R=0;R<2;R++)for(let C=0;C<22;C++){const z=C*5,O=Math.sin(C*.7-w.T*28+s+R*Math.PI)*(2+C*.45),E=C<6?3:2;l.globalAlpha=(1-C/22)*.85,l.fillStyle=Wo[C<5?1:C<13?2:3],l.fillRect(F(_-b*(z+40)+v*O-E/2),F(A-M*(z+40)+S*O-E/2),E,E)}l.globalAlpha=.28,l.fillStyle=Wo[2];for(let R=0;R<44;R+=4)l.fillRect(F(_-b*R)-4,F(A-M*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?Wo[0]:R<30?Wo[1]:Wo[2],l.fillRect(F(_-b*R+v*.5)-1,F(A-M*R+S*.5)-1,3,3);for(let R=0;R<14;R++){const C=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?Wo[0]:Wo[1];for(let z=-C;z<=C;z+=1.5)l.fillRect(F(_+b*(12-R)+v*z),F(A+M*(12-R)+S*z),2,2)}l.fillStyle=Wo[0];for(let R=-4;R<=4;R++)l.fillRect(F(_-b*36+v*R*1.5)-1,F(A-M*36+S*R*1.5)-1,2,2)}}),T({type:"custom",layer:"top",add:!0,dur:.85,delay:a,x:o,y:r,draw(l,u,f){const[c,h]=P(o,r,.55);if(!f.hit){f.hit=!0,Q(3);for(let d=0;d<14;d++){const m=Math.random()*at,p=y(1,3);I(o,r,.55,Math.cos(m)*p,Math.sin(m)*p,y(.2,1.5),.45,Wo[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=Wo[0];for(let p=-m;p<=m;p+=2){const g=m-Math.abs(p);l.fillRect(F(c+p),F(h-g*.7),2,2),l.fillRect(F(c+p),F(h+g*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*at+u*3.2+s,p=6+ue(u)*26,g=c+Math.cos(m)*p,x=h+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const M=m-b*.25,v=p-b*2;l.fillStyle=Wo[b===0?0:b<2?1:2],l.fillRect(F(c+Math.cos(M)*v)-1,F(h+Math.sin(M)*v*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=Wo[0],l.fillRect(F(g)-1,F(x)-1,3,3)}}}),ht(o,r,1.6,8060880,.85,.5,{delay:a}),ht(t,n,1,8060880,.4,.25)}const is=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function bb(e){J.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(o,r){const[i,a]=P(t,n),s=(.35+1.25*ue(r))*N.HW*Math.SQRT2,l=r*9;o.globalAlpha=1-r;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const c=l+u*at/4+f,h=s*(1-f*.25);o.fillStyle=f<.3?is[0]:is[3],o.fillRect(F(i+Math.cos(c)*h)-1,F(a+Math.sin(c)*h*.5)-1,3,2)}}});for(let o=0;o<16;o++){const r=Math.random()*at,i=y(1,2.2);I(t+Math.cos(r)*.4,n+Math.sin(r)*.4,.1,-Math.sin(r)*i+Math.cos(r)*.8,Math.cos(r)*i+Math.sin(r)*.8,y(1.5,3),y(.6,1),o%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function Cy(e,t,n,o){const r=w.T-(t._cyS||w.T),i=Math.min(1,r/.3),[a,s]=P(t.x,t.y),l=2.5*N.ZK*i,u=t.scale||1,f=17;o||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(a-9*u,s),e.lineTo(a-43*u,s-l),e.lineTo(a+43*u,s-l),e.lineTo(a+9*u,s),e.closePath(),e.fill());for(let c=0;c<f;c++){const h=c/(f-1),d=s-l*h,m=(9+h*34)*u+Math.sin(n*3+c)*2,p=m*.32,g=n*(8-h*3)+c*.9,x=a+Math.sin(n*2.2+h*3)*h*6;for(let b=0;b<at;b+=.12){const M=b+g,v=Math.sin(M);if(v>0!==o)continue;const S=(b*3/at+c*.37)%1;S>.72||(e.globalAlpha=(o?.9:.55)*(1-h*.3),e.fillStyle=S<.18?is[0]:S<.45?is[1]:is[2],e.fillRect(F(x+Math.cos(M)*m)-2,F(d+v*p)-1,4,3))}}for(let c=0;c<6;c++){const h=n*6.5+c*1.05,d=Math.sin(h);if(d>0!==o)continue;const m=(n*.55+c*.17)%1,p=s-l*m,g=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=c%2?"#6aa040":"#8a6a40",e.fillRect(F(a+Math.cos(h)*g)-1,F(p+d*g*.32)-1,3,2)}o||(e.globalAlpha=.6,e.lineDashOffset=-n*40,ft(t.x,t.y,.55,is[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function vb(e){for(let t=0;t<6;t++)T({type:"puff",x:e.x+y(-.4,.4),y:e.y+y(-.4,.4),r:y(12,20),dur:y(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*at,o=y(1,2.5);I(e.x,e.y,y(.2,1.8),Math.cos(n)*o,Math.sin(n)*o,y(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const wb=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],Sb={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function _b(e){J.sfx("item_reflect",e.x,e.y,1),T({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),i=r&&r.scale||1,[a,s]=P(o.x,o.y,(r?Qn(r):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*at+n*1.2,c=34*i*Math.max(0,l),h=a+Math.cos(f)*c,d=s+Math.sin(f)*c*.55;t.save(),t.translate(F(h),F(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),lo(t,wb,0,0,2,Sb),t.restore()}if(n>.3&&n<.6){pt(!0);const u=Wt(),f=(n-.3)/.3*at;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(F(a+Math.cos(f)*34*i)-3,F(s+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(F(a+Math.cos(f)*34*i)-1,F(s+Math.sin(f)*34*i*.55)-3,2,6),pt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*at,o=y(1,2.5);I(e.x,e.y,.5,Math.cos(n)*o,Math.sin(n)*o,y(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}ht(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function Ab(e,t,n){const o=t.scale||1,[r,i]=P(t.x,t.y,Qn(t)*.4),a=26*o,s=(n*1.4+t.id)%at;for(let l=0;l<6;l++){const u=n*1.6+l/6*at,f=Math.sin(u),c=F(r+Math.cos(u)*a),h=F(i+f*a*.4),d=Math.abs(((u-s)%at+at)%at)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(c-2,h-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(c-1,h-4,2,7),e.fillStyle="#d02a3a",e.fillRect(c+1,h-2,1,4)}e.globalAlpha=1}const Ao=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function Tb(e){J.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,o=e.radius||Bs("veil_discord","radius",3),r=.5,i=Math.random()*9,a=96;w.game,Bs("veil_discord","dur",14),T({type:"custom",layer:"top",dur:r+.14,x:t,y:n,draw(s,l){const u=Math.min(1,l*(r+.14)/r),f=2.4*(1-u*u),c=Math.max(0,(l-.78)/.22),h=.6*N.ZK*(1-c);if(!(h<2))for(let d=0;d<2;d++)for(let m=0;m<a;m++){const p=m/a*at,g=Math.sin(p);if(g>0!=(d===1))continue;const[x,b]=P(t+Math.cos(p)*o,n+g*o,f+.6),M=h*(.78+.22*q(i+m)),v=Math.sin(m*1.3+w.T*4)*.5+.5;s.globalAlpha=d?.92:.5,s.fillStyle=Ao[3],s.fillRect(F(x)-2,F(b)-1,5,2);for(let S=0;S<M;S+=3){const _=Math.sin(S*.1+w.T*7+m*.4)*(S/M)*3;s.fillStyle=S<3?Ao[0]:v>.66?Ao[1]:v>.25?Ao[2]:Ao[3],s.fillRect(F(x+_)-2,F(b+S),4,3)}}}}),T({type:"custom",layer:"ground",dur:1.7,delay:r,x:t,y:n,draw(s,l){const[u,f]=P(t,n),c=o*N.HW*Math.SQRT2,h=o*N.HH*Math.SQRT2;s.globalAlpha=.35*(1-l),ft(t,n,o*(.9+.1*l),null,Ao[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){s.globalAlpha=(1-m)*.9,s.fillStyle=d?Ao[1]:Ao[0];for(let p=0;p<at;p+=.05){const g=(.3+.75*m)*(1+Math.sin(p*7+d*2+w.T*6)*.06);s.fillRect(F(u+Math.cos(p)*c*g)-1,F(f+Math.sin(p)*h*g)-1,3,2)}}}}}),T({type:"custom",layer:"top",dur:.1,delay:r,x:t,y:n,draw(s,l,u){if(!u.done){u.done=!0,Q(3);for(let f=0;f<10;f++){const c=f/10*at;T({type:"puff",x:t+Math.cos(c)*o*.9,y:n+Math.sin(c)*o*.9,r:y(12,20),dur:y(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const c=Math.random()*at,h=Math.sqrt(Math.random())*o;I(t+Math.cos(c)*h,n+Math.sin(c)*h,.1,0,0,y(.6,1.6),y(.6,1),Ao[f%3],2,-.2,!0)}}}}),ht(t,n,o*1.1,13656319,.7,.9,{delay:r})}function Rb(e,t,n){const[o,r]=P(t.x,t.y,Qn(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,a=F(11*i);for(let s=-a;s<=a;s+=2){const l=(s+a)/(a*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+F(5*q(t.id+s*3))+Math.sin(l*Math.PI)*3,c=F(r-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=Ao[3],e.fillRect(F(o+s)-1,c-1,3,f+2),e.fillStyle=s/2%2?Ao[2]:Ao[1],e.fillRect(F(o+s),c,2,f),e.fillStyle=Ao[0],e.fillRect(F(o+s),c,2,1)}Math.random()<.04&&I(t.x+y(-.15,.15),t.y+y(-.15,.15),Qn(t)+.05,0,0,-.3,.6,Ao[2],2,1,!1)}const Z1=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],J1={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function Cb(e){J.sfx("item_mekansm",e.x,e.y,1),T({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),[i,a]=P(o.x,o.y,(r?Qn(r):.6)+.12),s=n<.12?ue(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(F(i-24*s),F(a)),t.rotate(l),lo(t,Z1,0,0,F(4*s)||1,J1),t.restore(),t.save(),t.translate(F(i+4*s),F(a-16*s)),t.rotate(-l*1.33+.35),lo(t,Z1,0,0,F(3*s)||1,J1),t.restore(),!o.steam&&n>.3){o.steam=!0;for(let u=0;u<3;u++)T({type:"puff",x:o.x+y(-.2,.2),y:o.y+y(-.2,.2),r:y(8,12),dur:y(.5,.8),col:[235,235,240]})}}}),T({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,o){const r=en(o),i=r?Qn(r):.8,a=r&&r.scale||1;for(let s=0;s<2;s++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*at*2+s*Math.PI,[c,h]=P(o.x,o.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":s?"#ffe07a":"#8aff9a",t.fillRect(F(c+Math.cos(f)*24*a-d/2),F(h+Math.sin(f)*8*a-d/2),d,d)}if(n>.45){const s=(n-.45)/.55,[l,u]=P(o.x,o.y,i+.1+s*.5);t.globalAlpha=1-s,t.fillStyle="#c8ffd0",t.fillRect(F(l)-1,F(u)-5,3,11),t.fillRect(F(l)-5,F(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(F(l),F(u),1,1)}}}),ht(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const Pb=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),Ib={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},Na=["#fff6c0","#ffd24a","#d89a20"];function Ob(e){J.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,o=e.uid!==void 0?Z(e.uid):null,r=o?o.x:t,i=o?o.y:n,a=.34;T({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(s,l){const[u,f]=P(r,i,.6),[c,h]=P(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;s.globalAlpha=Math.sin(m*Math.PI)*.9,s.fillStyle=Na[d%2],s.fillRect(F(u+(c-u)*m)-1,F(f+(h-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(s,l,u){const f=Math.min(1,l/a),c=2.3-1.4*ue(f),[h,d]=P(t,n,c);if(s.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,lo(s,Pb,h+(f<1?Math.sin(l*30)*1.5:0),d,4,Ib),!u.hit&&f>=1){u.hit=!0,Q(3);for(let m=0;m<22;m++){const p=Math.random()*at,g=y(.6,2.4);I(t,n,.5,Math.cos(p)*g,Math.sin(p)*g,y(2.5,4.5),y(.7,1.1),Na[m%3],3,9,m%3===0,.97)}T({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[g,x]=P(t,n);for(let v=0;v<9;v++){const S=(v-4)*5+Math.sin(v*2.7)*2,_=(60+70*q(v*3.1))*Math.min(1,p*4+.1),A=x-_-p*30;for(let R=0;R<_;R+=3){const C=1-R/_;m.globalAlpha=(1-p)*(1-C*.85),m.fillStyle=R<6?Na[0]:Na[1],m.fillRect(F(g+S),F(A+R),2,2)}}const b=F(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=F(x-34);m.globalAlpha=1-p,m.fillStyle=Na[0],m.fillRect(F(g)-b,M,b*2,2),m.fillRect(F(g)-1,M-b,2,b*2),m.fillRect(F(g)-3,M-2,6,6)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,ft(t,n,.3+1.1*ue(p),Na[1],null,3,[2,3])}})}}}),ht(t,n,2,16765514,1,.7,{delay:a})}function zb(e){J.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,o=Bs("mirror_image","count",2),r=Math.random()*9,i=new Float32Array(o+1),a=new Float32Array(o+1);for(let s=0;s<o;s++){const l=s/o*at+.6;i[s]=t+Math.cos(l)*1.1,a[s]=n+Math.sin(l)*1.1}i[o]=t,a[o]=n,T({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(s,l){s.globalAlpha=1-l,s.lineDashOffset=w.T*30,ft(t,n,.5+1*ue(l),"#c8d0e0",null,2,[4,6]),s.lineDashOffset=0,ft(t,n,.4+.8*ue(l),"#9ad8ff",null,1.5)}}),T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,l,u){const f=ue(Math.min(1,l/.42)),c=Math.max(0,(l-.48)/.45);for(let h=0;h<=o;h++){const d=t+(i[h]-t)*f,m=n+(a[h]-n)*f,[p,g]=P(d,m,.05),x=(1-f)*4*Math.PI+h,b=F(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,v=F(g-M),S=F(M*Math.min(1,c));if(S>=M)continue;s.globalAlpha=1,s.fillStyle="#2a3040",s.fillRect(F(p)-b-2,v+S-2,b*2+4,M-S+2),s.fillStyle="#c8d0e0",s.fillRect(F(p)-b-1,v+S-1,b*2+2,M-S),s.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",s.fillRect(F(p)-b+1,v+S+1,b*2-2,M-S-4),s.fillStyle="#ffffff";const _=(w.T*40+h*13+r*10)%(M+20)-10;for(let A=0;A<4;A++){const R=F(v+_+A*2);R>v+S&&R<v+M-3&&s.fillRect(F(p)-b+2+A,R,Math.max(1,F(b*.5)),1)}c>0&&Math.random()<.7&&I(d+y(-.12,.12),m+y(-.12,.12),(M-S)/N.ZK,y(-.2,.2),y(-.2,.2),y(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let h=0;h<=o;h++)T({type:"custom",layer:"top",add:!0,dur:.25,x:i[h],y:a[h],draw(d,m,p){const[g,x]=P(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(F(g)-18,F(x)-22,36,2),d.fillRect(F(g)-18,F(x)+6,36,2),d.fillRect(F(g)-1,F(x)-30,2,44)}})}}}),ht(t,n,2,10148095,.75,.8)}const qo=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function Fb(e){J.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,o=e.ex===void 0?t:e.ex,r=e.ey===void 0?n:e.ey,i=.2,a=Bs("abyssal_blade","stun",2),s=Math.random()*99,l=28,u=new Float32Array(l);for(let h=0;h<l;h++)u[h]=(h%2?.34:.5)+q(s+h)*.14;T({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(h,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const g=m-p*.06;if(g<0)break;const[x,b]=P(t+(o-t)*g,n+(r-n)*g,.5+Math.sin(g*Math.PI)*1.1),M=F(10-p);h.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),h.fillStyle=qo[2],h.fillRect(F(x)-M/2-1,F(b)-M/2-1,M+2,M+2),h.fillStyle=qo[0],h.fillRect(F(x)-M/2,F(b)-M/2,M,M)}}});const f=a+.35,c=h=>h<i?0:h<i+.12?ue((h-i)/.12):h>f-.3?Math.max(0,(f-h)/.3):1;T({type:"custom",layer:"ground",dur:f,x:o,y:r,draw(h,d,m){const p=d*f,g=c(p);if(g<=0)return;if(!m.hit&&p>=i){m.hit=!0,Q(6);for(let M=0;M<18;M++){const v=Math.random()*at,S=y(1.5,3.5);I(o,r,.3,Math.cos(v)*S,Math.sin(v)*S,y(1,3),.5,M%3?qo[3]:qo[2],3,6,!0)}}h.fillStyle=qo[1];for(let M=0;M<8;M++){const v=s+M/8*at;for(let S=.45;S<.45+.5*g;S+=.07){const _=v+(q(s+M*5+(S*20|0))-.5)*.5,[A,R]=P(o+Math.cos(_)*S,r+Math.sin(_)*S);h.fillRect(F(A)-1,F(R)-1,2,2)}}h.beginPath();for(let M=0;M<=l;M++){const v=M%l/l*at,[S,_]=P(o+Math.cos(v)*u[M%l]*g,r+Math.sin(v)*u[M%l]*g);M?h.lineTo(F(S),F(_)):h.moveTo(F(S),F(_))}h.fillStyle=qo[0],h.fill();for(let M=0;M<l;M++){const v=M/l*at,S=(M+1)/l*at,[_,A]=P(o+Math.cos(v)*u[M]*g,r+Math.sin(v)*u[M]*g),[R,C]=P(o+Math.cos(S)*u[(M+1)%l]*g,r+Math.sin(S)*u[(M+1)%l]*g);for(let z=0;z<1;z+=.2)h.fillStyle=Math.sin(v)<0?qo[3]:qo[2],h.fillRect(F(_+(R-_)*z)-1,F(A+(C-A)*z)-1,2,2)}const[x,b]=P(o,r);for(let M=0;M<10;M++){const v=(w.T*.9+M/10)%1,S=M*2.4+v*5,_=(1-v)*22*g;h.globalAlpha=v,h.fillStyle=qo[3],h.fillRect(F(x+Math.cos(S)*_)-1,F(b+Math.sin(S)*_*.5)-1,2,2)}}}),T({type:"custom",layer:"top",dur:f,x:o,y:r,draw(h,d){const m=d*f,p=c(m);if(p<=0)return;const[g,x]=P(o,r,.42),b=ue(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const v=M/5*at+s,[S,_]=P(o+Math.cos(v)*.36*p,r+Math.sin(v)*.36*p),A=Math.sin(w.T*6+M*1.7)*2,R=S+(g-S)*.55*b+A,C=_-(_-x)*b*p-8*b,z=S+Math.cos(v)*16*b,O=_-(_-x)*.7*b*p;for(let E=0;E<2;E++)for(let U=0;U<=1;U+=.06){const G=1-U,Y=G*G*S+2*G*U*z+U*U*R,L=G*G*_+2*G*U*O+U*U*C,k=U<.5?5:U<.8?4:3;E?(h.fillStyle=U>.85?qo[3]:qo[2],h.fillRect(F(Y)-1,F(L)-1,2,2)):(h.fillStyle=qo[0],h.fillRect(F(Y-k/2)-1,F(L-k/2)-1,k+2,k+2))}}}}),ht(o,r,1.6,9059071,.6,.6,{delay:i})}const Gi={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},$s={blue:6996223,red:16743002,neutral:16765514};function Eb(e){J.sfx("tp_start",e.x,e.y,1);const t=Z(e.uid),n=e.dur||3,o=e.team||t&&t.team||"blue",r=Gi[o]||Gi.blue,i=e.ex===void 0?e.x:e.ex,a=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:w.T,dur:n,ex:i,ey:a,team:o});const s=l=>{const u=Z(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};T({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=P(i,a),m=w.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,ft(i,a,1.05,r[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,ft(i,a,.8,r[1],null,3,[7,5]),l.lineDashOffset=-m*40,ft(i,a,.5,r[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const M=b/4*at+Math.PI/4,v=(m*(1.2+c*1.5)+b*.25)%1,S=1.65-v*.75,[_,A]=P(i+Math.cos(M)*S,a+Math.sin(M)*S);l.globalAlpha=p*Math.sin(v*Math.PI),l.fillStyle=r[1];const R=h-_,C=d-A,z=Math.hypot(R,C)||1,O=-C/z,E=R/z;for(let U=0;U<6;U++)l.fillRect(F(_+R/z*U+O*(6-U))-1,F(A+C/z*U+E*(6-U))-1,2,2),l.fillRect(F(_+R/z*U-O*(6-U))-1,F(A+C/z*U-E*(6-U))-1,2,2)}l.globalAlpha=p,l.fillStyle=r[0];const g=.8*N.HW*Math.SQRT2,x=.8*N.HH*Math.SQRT2;for(let b=0;b<8;b++){const M=b/8*at-m*.6;yh(l,h+Math.cos(M)*g*1.18,d+Math.sin(M)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,ht(i,a,1.2+.6*c,$s[o]||$s.blue,.35+.4*c,.32))}}),T({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=P(i,a),m=40+120*c,p=F(3+5*c+Math.sin(w.T*18)*1);for(let g=0;g<m;g+=3)l.globalAlpha=(1-g/m)*(.35+.5*c),l.fillStyle=g%12<3?r[0]:r[1],l.fillRect(F(h)-p,F(d-g)-3,p*2,3);for(let g=0;g<5;g++){const x=(w.T*.8+g/5)%1,b=w.T*4+g*1.3;l.globalAlpha=Math.sin(x*Math.PI)*c,l.fillStyle=r[0],l.fillRect(F(h+Math.cos(b)*14)-1,F(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function Py(e,t,n){const o=w.T;e._tp||(e._tp={t0:o,dur:3,team:e.team});const r=e._tp,i=Math.max(0,Math.min(1,(o-r.t0)/r.dur)),a=Gi[r.team||e.team]||Gi.blue,s=e.scale||1;if(!t){const[l,u]=P(e.x,e.y),f=.8*N.HW*Math.SQRT2*s,c=.8*N.HH*Math.SQRT2*s;pt(!0);const h=Wt();h.globalAlpha=.6,ft(e.x,e.y,.8*s,a[3],null,2);for(let d=0;d<at*i;d+=.07){const m=d-Math.PI/2;h.globalAlpha=.95,h.fillStyle=d>at*i-.3?a[0]:a[1],h.fillRect(F(l+Math.cos(m)*f)-1,F(u+Math.sin(m)*c)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,g=d*at/3+p*3-o*(2+i*4);h.globalAlpha=1-p*.7,h.fillStyle=m<3?a[0]:m<7?a[1]:a[2],h.fillRect(F(l+Math.cos(g)*f*(1-p*.8))-1,F(u+Math.sin(g)*c*(1-p*.8))-1,3,3)}h.globalAlpha=1,pt(!1),t2(e,i,a,s,!1),(e._tpL||0)<o-.25&&(e._tpL=o,ht(e.x,e.y,1.1+i,$s[r.team||e.team]||$s.blue,.4+.45*i,.32,{uid:e.id}));return}t2(e,i,a,s,!0),Math.random()<.3+i*.4&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(0,.4),0,0,y(1.2,2.4),.5,a[Math.random()*3|0],2,-.5,!0)}function t2(e,t,n,o,r){const i=w.T,a=Qn(e),[s,l]=P(e.x,e.y);pt(!0);const u=Wt();for(let f=0;f<3;f++){const c=(i*(.8+t*1.4)+f/3)%1,h=l-c*a*1.15*N.ZK,d=(24-c*8)*o,m=d*.32;u.globalAlpha=Math.sin(c*Math.PI)*(.5+.5*t)*(r?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<at;p+=.2)Math.sin(p)>0===r&&u.fillRect(F(s+Math.cos(p)*d)-1,F(h+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,pt(!1)}function Lb(e){const t=Z(e.uid),n=e.team||t&&t.team||"blue",o=Gi[n]||Gi.blue,r=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),J.sfx("tp_end",r,i,1),T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(a,s){const[l,u]=P(e.x,e.y),f=F(16*(1-s))+1,c=60+140*s;for(let h=0;h<c;h+=3)a.globalAlpha=(1-s)*(1-h/c),a.fillStyle=h<c*s?o[0]:o[1],a.fillRect(F(l)-f,F(u-h)-3,f*2,3);a.globalAlpha=1-s,ft(e.x,e.y,.9*(1-s)+.05,o[1],null,3)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:r,y:i,draw(a,s,l){const[u,f]=P(r,i),c=Math.min(1,s/.14),h=f-320,d=h+(f-h)*c,m=F(s<.14?10:10+14*(1-(s-.14)/.86)*Math.sin(Math.min(1,(s-.14)*4)*Math.PI));if(a.globalAlpha=s<.45?1:(1-s)/.55,a.fillStyle=o[1],a.fillRect(F(u)-m,F(h),m*2,F(d-h)),a.fillStyle=o[0],a.fillRect(F(u)-F(m*.4),F(h),F(m*.8),F(d-h)),!l.hit&&c>=1){l.hit=!0,Q(4);for(let p=0;p<26;p++){const g=Math.random()*at,x=y(1.5,4);I(r,i,.2,Math.cos(g)*x,Math.sin(g)*x,y(.5,2.5),.55,o[p%3],3,3,!0)}T({type:"custom",layer:"ground",add:!0,dur:.55,x:r,y:i,draw(p,g){p.globalAlpha=1-g,ft(r,i,.3+1.6*ue(g),o[1],null,6*(1-g)+1),ft(r,i,.2+1*ue(g),o[0],null,2,[3,3])}})}}}),ht(r,i,2.6,$s[n]||$s.blue,1,.65)}function kb(e){const t=Z(e.uid),n=t&&t.team||"blue",o=Gi[n]||Gi.blue;t&&(t._tp=null),J.sfx("tp_cancel",e.x,e.y,1),T({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(r,i){const[a,s]=P(e.x,e.y);for(let l=0;l<3;l++){const u=(1-ue(Math.min(1,i*2)))*(20+l*22),f=22+i*10,c=i>.5?.5:0;r.globalAlpha=1-i*i,r.fillStyle=i<.4?o[1]:"#b4b2be";for(let h=0;h<at;h+=.22)q(l*31+h*7)<c||r.fillRect(F(a+Math.cos(h)*f)-1,F(s-u+Math.sin(h)*f*.32+(i>.5?(i-.5)*30*q(h*13+l):0))-1,3,3)}}});for(let r=0;r<12;r++){const i=Math.random()*at,a=y(.8,2);I(e.x,e.y,y(.3,1),Math.cos(i)*a,Math.sin(i)*a,y(.5,1.5),.5,r%3?"#8a8894":o[2],2,6,!1)}for(let r=0;r<3;r++)T({type:"puff",x:e.x+y(-.3,.3),y:e.y+y(-.3,.3),r:y(10,14),dur:y(.4,.6),col:[140,140,150]})}function Iy(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const o of e.items||[]){const r=n&&n[o];r&&(t|=(r.auraLs?1:0)|(r.auraAs?2:0)|(r.auraFrost?4:0))}e._auB=t}return e._auB||0}function Db(e,t,n){const o=w.game&&w.game.player,r=o===e,[i,a]=P(e.x,e.y),s=e.scale||1,l=Wt();if(t&2){const u=.75*N.HW*Math.SQRT2*s,f=.75*N.HH*Math.SQRT2*s,c=(n*2+e.id)%at;for(let h=0;h<7;h++){const d=h/7*at-n*.5,m=F(i+Math.cos(d)*u),p=F(a+Math.sin(d)*f),g=Math.abs(((d-c)%at+at)%at)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=g?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=g?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}r&&(l.globalAlpha=.12,ft(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,ft(e.x,e.y,.5*s,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,r&&(l.globalAlpha=.1,ft(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*N.HW*Math.SQRT2*s,f=.95*N.HH*Math.SQRT2*s;pt(!0);const c=Wt();for(let h=0;h<5;h++){const d=n*.7+h/5*at,m=F(i+Math.cos(d)*u),p=F(a+Math.sin(d)*f-3-Math.sin(n*2+h)*2);c.globalAlpha=.65,c.fillStyle="#c8f0ff",c.fillRect(m-2,p,5,1),c.fillRect(m,p-2,1,5),c.fillRect(m-1,p-1,1,1),c.fillRect(m+1,p+1,1,1),c.fillRect(m+1,p-1,1,1),c.fillRect(m-1,p+1,1,1)}c.globalAlpha=1,pt(!1),r&&(l.globalAlpha=.12,ft(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&I(e.x+y(-.5,.5),e.y+y(-.5,.5),y(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function Ub(e,t,n){const[o,r]=P(t.x,t.y,Qn(t)+.12),i=F(o-14*(t.scale||1)),a=F(r);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,a-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,a-6,4,3);for(let s=0;s<9;s++){const l=F(Math.sin(n*7-s*.7+t.id)*2),u=F(10-s*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+s*2,a-3+l,2,u+2),e.fillStyle=s%3?"#c03050":"#ff6a7a",e.fillRect(i+2+s*2,a-2+l,2,u)}e.globalAlpha=1}function Xb(e,t){t.banner&&Math.random()<.025&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&I(e.x+y(-.25,.25),e.y+y(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function Gb(e){const t=w.game&&w.game.player,n=e.uid!==void 0?Z(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&Ge(n))return!0;switch(e.type){case"item_crit":return p4(e),!0;case"item_chain":return y4(e),!0;case"item_bash":return M4(e),!0;case"item_berserk":return S4(e),!0;case"item_bloodlust":return T4(e),!0;case"item_drain":return C4(e),!0;case"item_hex":return P4(e),!0;case"item_refresh":return E4(e),!0;case"item_immune":return L4(e),!0;case"item_spellblock":return D4(e),!0;case"item_push":return U4(e),!0;case"ward_place":return t&&e.team===t.team&&$4(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&H4(e),!0;case"mon_howl":return W4(e),!0;case"mon_spores":return V4(e),!0;case"mon_rootslam":return Y4(e),!0;case"camp_buff":return Q4(e),!0;case"item_wand":return eb(e),!0;case"item_phase":return nb(e),!0;case"item_arcane":return ab(e),!0;case"item_clarity":return fb(e),!0;case"item_dust":return db(e),!0;case"item_evade":return yb(e),!0;case"item_frostwave":return xb(e),!0;case"item_lance":return Mb(e),!0;case"item_cyclone":return bb(e),!0;case"item_reflect":return _b(e),!0;case"item_veil":return Tb(e),!0;case"item_mekansm":return Cb(e),!0;case"item_midas":return Ob(e),!0;case"item_mirror":return zb(e),!0;case"item_abyss":return Fb(e),!0;case"tp_start":return Eb(e),!0;case"tp_end":return Lb(e),!0;case"tp_cancel":return kb(e),!0}return!1}function Nb(e){const t=e.status||{},n=w.T;(e.aura||e.auraFx)&&X4(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&Z4(e,t,n);const o=Iy(e);if(o&&Db(e,o,n),(t.banner||t.cuirass||t.frostAura)&&Xb(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=w.T),Cy(Wt(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,vb(e)),t.tp?Py(e,!1):e._tp&&w.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),uu(e,t,"phase")?ob(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const r=.5+.5*Math.sin(n*9+e.id);pt(!0);const i=Wt();i.globalAlpha=.3+.25*r,ft(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*r,"#ff3a2a",null,2),i.globalAlpha=1,pt(!1),Math.random()<.3&&I(e.x+y(-.3,.3),e.y+y(-.3,.3),.05,0,0,y(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function Bb(e,t){const n=t.status||{},o=w.T;n.bloodlust&&R4(e,t,o),n.immune&&k4(t,o),n.cyclone&&Cy(e,t,o,!0),n.tp&&Py(t,!0),uu(t,n,"reflect")&&Ab(e,t,o),uu(t,n,"veil")&&Rb(e,t,o),Iy(t)&1&&Ub(e,t,o),uu(t,n,"clarity")&&Math.random()<.05&&I(t.x+y(-.25,.25),t.y+y(-.25,.25),Qn(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(I4(t,o),t._hexV=1):t._hexV&&(t._hexV=0,O4(t))}const J={sfx:(e,t,n,o,r)=>{},say:e=>{},banner:(e,t,n,o,r)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,o)=>{}},Tn={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let gh=null;const e0=e=>Tn[gh&&gh[e]||e]||Tn.fire,Yo=e=>{const t=e0(e);return t[Math.random()*t.length|0]};let dr=[],Ia=[],Hs=[],Lo=[],qu=1,xh=1;function $b(){return{parts:dr.length,efx:Ia.length,decals:Hs.length,amb:Lo.length,dynL:si.length}}function Il(e,t){let n=0;for(let o=0;o<e.length;o++){const r=e[o];t(r)&&(e[n++]=r)}e.length=n}function Oy(){dr=[],Ia=[],Hs=[],Lo=[],si.length=0}const si=[],Hb=64,I0=new Map;function kd(e){if(typeof e=="number")return e;let t=I0.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),o=parseInt(n,16);isNaN(o)||(t=o)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return I0.size>500&&I0.clear(),I0.set(e,t),t}function ht(e,t,n,o,r=.8,i=.4,a){si.length>=Hb&&si.shift(),si.push({x:e,y:t,r:n,col:kd(o),a:r,life:i,max:i,uid:a&&a.uid||0,delay:a&&a.delay||0})}function Wb(e,t,n=1){let o=0;for(let r=si.length-1;r>=0&&o<t;r--){const i=si[r];if(i.delay>0)continue;const a=i.life/i.max,s=i.a*n*Math.min(1,a*1.6);let l=i.x,u=i.y;if(i.uid){const f=Z(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*a),i.col,s),o++}}const pc=new Map,La=192,Ba=new Float32Array(La),yc=new Float32Array(La),gc=new Float32Array(La),xc=new Float32Array(La),Mc=new Float32Array(La),bc=new Float32Array(La);function qb(e,t,n=1){pc.clear();let o=0;for(const r of dr){if(!r.glow)continue;const i=Math.floor(r.x/1.4)*4096+Math.floor(r.y/1.4);let a=pc.get(i);if(a===void 0){if(o>=La)continue;a=o++,pc.set(i,a),Ba[a]=yc[a]=gc[a]=xc[a]=Mc[a]=bc[a]=0}const s=r.life/r.max*r.size,l=kd(r.col);Ba[a]+=s,yc[a]+=r.x*s,gc[a]+=r.y*s,xc[a]+=(l>>16&255)*s,Mc[a]+=(l>>8&255)*s,bc[a]+=(l&255)*s}for(let r=0;r<t;r++){let i=-1,a=6;for(let h=0;h<o;h++)Ba[h]>a&&(a=Ba[h],i=h);if(i<0)break;const s=Ba[i];Ba[i]=0;let l=xc[i]/s,u=Mc[i]/s,f=bc[i]/s;const c=Math.max(l,u,f,1);l=l/c*255,u=u/c*255,f=f/c*255,e(yc[i]/s,gc[i]/s,1.1+Math.min(2.2,Math.sqrt(s)*.28),l<<16|u<<8|f,Math.min(.85,s*.018)*n)}}const vc={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function I(e,t,n,o,r,i,a,s,l=2,u=0,f=!1,c=.94){qu<1&&Math.random()>qu||dr.push({x:e,y:t,z:n,vx:o,vy:r,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:c})}function Ne(e,t,n,o,r=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<r;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;I(e,t,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,a*(.6+Math.random()*.6),Yo(o),u+(Math.random()<.3?1:0),4,l)}}function Q(e){w.cam.shake=Math.max(w.cam.shake,e*xh)}let Dd="";function T(e){return e.t=0,e.tag=Dd||e.type,Ia.push(e),Vb(e),e}function Vb(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":ht(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":ht(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":ht(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":ht(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":ht(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&ht(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":ht(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function Tr(e){e.t=0,Hs.push(e)}const e2={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},n2=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),Yb=new Set(["gato","zorra"]),Kb={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function o2(e){const t=e0(e.col&&Tn[e.col]?e.col:"gold"),n=e.uid?Z(e.uid):null;if(e.type==="windup"){J.sfx(Kb[e.col]||"windup_phys",e.x,e.y,.55);const o=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",r=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";T({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,o&&e.radius)ft(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(r&&e.radius)ft(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!r&&e.range){const c=e.ex-u,h=e.ey-f,d=Math.hypot(c,h)||1,m=Math.min(e.range,d)*a,[p,g]=P(u,f,.1),[x,b]=P(u+c/d*m,f+h/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,g),i.lineTo(x,b),i.stroke(),i.setLineDash([])}ft(u,f,.35+.35*a,t[0],null,2)}}),T({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=Z(s.uid),[u,f]=P(l?l.x:s.x,l?l.y:s.y,.75);for(let c=0;c<10;c++){const h=c/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[c%t.length],i.fillRect(Math.round(u+Math.cos(h)*d-2),Math.round(f+Math.sin(h)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(Ne(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),J.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(T({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(o,r,i){const a=Z(i.uid);if(!a||!a.channel&&r>.05){i.t=i.dur;return}const s=e.radius||1.2,l=w.T;o.globalAlpha=.7,ft(i.x,i.y,s,t[1],null,3),ft(i.x,i.y,s*(1-r),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[c,h]=P(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);o.fillStyle=t[u%t.length],o.fillRect(Math.round(c-3),Math.round(h-3),6,6)}n&&Math.random()<.5&&I(n.x,n.y,.9,y(-.5,.5),y(-.5,.5),y(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),J.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?T({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(Ne(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),J.sfx("deny",e.x,e.y,.4)):Ne(e.x,e.y,.6,e.col&&Tn[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function r2(e,t){const n=t?Z(t):null,o=n&&n.status&&n.status.transform;if(!o||!o.mount)return e;const r=window.AUDIO_EPIC;return r&&r.has&&r.has(e+"_m")?e+"_m":e}function jb(e){const t=e0(e.type.slice(5)&&Tn[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,o=e.uy||0,r=e.x+n*.5,i=e.y+o*.5;T({type:"custom",layer:"top",add:!0,dur:.22,x:r,y:i,draw(a,s,l){const[u,f]=P(l.x,l.y,.55),c=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-c/2),Math.round(f-c/2),Math.round(c),Math.round(c)),a.fillStyle=t[1];for(let h=0;h<6;h++){const d=h/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*c),Math.round(f+Math.sin(d)*c*.7),3,3)}}});for(let a=0;a<10;a++)I(r,i,.5,n*y(1.5,4)+y(-.8,.8),o*y(1.5,4)+y(-.8,.8),y(0,1),.3,t[a%t.length],3,0,!0);Q(1.5)}function Qb(){Zb(),Dd=""}function Zb(){const e=w.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0,Dd=(n.hero?n.hero+":":"")+n.type+(n.key?":"+n.key:"");const o=!e.player||n.uid===e.player.id||n.uid===void 0;if(qu=o?1:.4,xh=o?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const u=n.hero&&n.key?H[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&J.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),u)try{if(u(n)!==!1)continue}catch(f){console.error(f)}o2(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){o2(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&jb(n);const r=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=r?H[r]:void 0,a=r&&n.type!=="heal"&&!n.impact,s=r&&Ca[n.type]?Ca[n.type](n):void 0,l=s!==void 0?s:r?a?"ab_"+r:n.impact&&!i?e2[n.type]:null:e2[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&J.babble(n.hero,"ult",n.x,n.y),l&&J.sfx(l,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const u=t[n.hero]&&t[n.hero].abil[n.key],f=u&&vc[u.fx],c=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;f!==void 0&&ht(n.x+(n.ux||0)*c,n.y+(n.uy||0)*c,n.radius?n.radius*1.15+.5:c?n.range*.85+.6:1.6,f,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(u){console.error(u)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(Gb(n))continue}catch(u){console.error(u);continue}if(!r&&n.hero&&typeof n.type=="string"&&H[n.hero+"_ev_"+n.type])try{if(H[n.hero+"_ev_"+n.type](n)!==!1)continue}catch(u){console.error(u);continue}switch(n.type){case"fire":{T({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let u=0;u<90;u++){const f=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,c=(.4+Math.random())*n.range*2.4;I(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(f)*c,Math.sin(f)*c,Math.random()*1.2,.5,Yo("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Tr({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),Q(3);break}case"quake":{T({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),T({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let u=0;u<50;u++){const f=Math.random()*6.28,c=Math.random()*n.range*2.5;I(n.x,n.y,.1,Math.cos(f)*c,Math.sin(f)*c,1+Math.random()*2,.7,Yo("quake"),3,6,!1)}Q(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const u=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;vc[n.type]!==void 0&&ht(n.x,n.y,n.radius*1.2+.4,vc[n.type],n.type==="firering"?1:.75,.6),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:e0(u)[1],w:7}),T({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:e0(u)[0],w:3,delay:.08}),n.type==="roar"&&(T({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),Q(8)),n.type==="firering"&&(T({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),Q(9),Tr({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&Tr({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&Tr({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const f=n.type==="spores"?40:90;for(let c=0;c<f;c++){const h=Math.random()*Math.PI*2,d=n.radius*(1.6+Math.random()*1.6);I(n.x,n.y,.2,Math.cos(h)*d,Math.sin(h)*d,Math.random()*2,.6,Yo(u),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let c=0;c<14;c++)T({type:"puff",x:n.x+y(-1,1)*n.radius*.7,y:n.y+y(-1,1)*n.radius*.7,r:y(14,26),dur:y(.7,1.3),col:[140,210,90]});break}case"heal":T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let u=0;u<16;u++)I(n.x+y(-.4,.4),n.y+y(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Yo("heal"),3,0,!0);break;case"shield":case"stoneskin":T({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":T({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let u=0;u<12;u++)T({type:"puff",x:n.x+y(-.6,.6),y:n.y+y(-.6,.6),r:y(12,22),dur:y(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const u=n.type==="firedash"?"fire":"dust",f=n.ex||n.x+(n.ux||0)*(n.range||0),c=n.ey||n.y+(n.uy||0)*(n.range||0);for(let h=0;h<30;h++){const d=h/30;I(n.x+(f-n.x)*d+y(-.2,.2),n.y+(c-n.y)*d+y(-.2,.2),.15,y(-.5,.5),y(-.5,.5),y(.3,1.2),.5+d*.4,Yo(u),4,0,u==="fire")}T({type:"streak",x:n.x,y:n.y,ex:f,ey:c,dur:.35,col:u==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const u=n.ex||n.x,f=n.ey||n.y;T({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),T({type:"flash",x:u,y:f,r:1.1,dur:.3,col:"rgba(220,170,255,"}),T({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.3,col:"#d8a8ff"}),Ne(n.x,n.y,.4,"arcane",16,2,.5),Ne(u,f,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let u=0;u<20;u++){const f=Math.random()*6.28,c=Math.random()*n.radius;I(n.x+Math.cos(f)*c,n.y+Math.sin(f)*c,.1,0,0,2,.6,Yo("arcane"),2,0,!0)}break;case"starfall":for(let u=0;u<18;u++)T({type:"meteor",x:n.x+y(-1,1)*n.radius*.8,y:n.y+y(-1,1)*n.radius*.8,dur:.35,delay:u*.02});T({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),Ne(n.x,n.y,.2,"arcane",70,6,.8,3),Tr({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),Q(10);break;case"slash":T({type:"xslash",x:n.x,y:n.y,dur:.35}),Ne(n.x,n.y,.5,"blood",20,4,.5,2,!1),Ne(n.x,n.y,.5,"slash",14,4,.4),Q(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.kind==="minion"||n.proj)){let f=n.proj&&n.pkey||"A";f==="V"&&(f="A",n.volley=1);const c=e._off!==void 0;if(f==="A"&&Qe[n.hero]){let d=!1;if(!(n.proj&&n2.has(n.hero+"_A"))||c)try{d=Qe[n.hero](n)===!0}catch(m){console.error(m)}!d&&(!Yb.has(n.hero)||c)&&J.sfx(r2("atk_"+n.hero,n.uid),n.x,n.y,n.big?1:.8);break}if(f!=="A"&&n2.has(n.hero+"_"+f)&&!c){J.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);break}const h=f!=="A"?H[n.hero+"_"+f+"_hit"]:void 0;if(h){J.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);try{h(n)}catch(d){console.error(d)}break}}if(!n.hero){let f=!1;try{f=ti.hit(n)}catch(c){console.error(c)}if(f){f!=="snd"&&J.sfx(n.big?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8);break}}const u=n.col&&Tn[n.col]?n.col:n.hero==="dragon"?"fire":"slash";T({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Tn[u][0]}),Ne(n.x,n.y,.45,u,n.big?10:5,n.big?3:2,.35,1.5,!0,2),J.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&Q(2);break}case"shoot":if(n.kind==="hero"&&n.hero){J.sfx(r2("shot_"+n.hero,n.uid),n.x,n.y,.6);break}if(!n.hero){let u=!1;try{u=ti.shoot(n)}catch(f){console.error(f)}if(u)break}J.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":if(!n.hero){let u=!1;try{u=ti.hit(n)}catch(f){console.error(f)}if(u)break}T({type:"jaws",x:n.x,y:n.y,dur:.35}),Ne(n.x,n.y,.3,"bite",24,3,.5),Q(5);break;case"transform":{if(n.hero&&H[n.hero+"_T"]){J.sfx("tf_"+n.hero,n.x,n.y,1);try{H[n.hero+"_T"](n)}catch(c){console.error(c)}break}const u=n.kind==="fire",f=u?[255,140,50]:[255,220,90];T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:f}),T({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:u?"#ff9a3a":"#ffe070",w:6}),Ne(n.x,n.y,.6,u?"fire":"gold",70,5,.9,3,!0,4),Q(n.uid===(e.player&&e.player.id)?10:4),J.sfx("roar",n.x,n.y,.8);break}case"levelup":T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),T({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":if(n.kind==="hero"&&Object.keys(H).some(u=>{if(!u.endsWith("_death"))return!1;try{return H[u](n)===!0}catch(f){return console.error(f),!1}}))break;n.kind==="hero"?(n.sprite&&J.babble(n.sprite==="slime"&&(Z(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),Ne(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),T({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),J.sfx("death",n.x,n.y)):n.kind==="minion"?(Ne(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),J.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(Ne(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),J.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let u=0;u<26;u++){const f=Math.random()*6.28,c=y(1.5,5);I(n.x+y(-.3,.3),n.y+y(-.3,.3),y(.8,2.2),Math.cos(f)*c,Math.sin(f)*c,y(3,9),y(1.2,2),Yo("stone"),Math.random()*4+4|0,14,!1,.97)}for(let u=0;u<14;u++)T({type:"puff",x:n.x+y(-1.2,1.2),y:n.y+y(-1.2,1.2),r:y(26,46),dur:y(1.2,2.2),col:[150,140,130]});T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),Tr({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),J.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),J.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&J.say(n.monster==="serpent"?"serpent":"boss"),Ne(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let u=0;u<30;u++)I(n.x,n.y,1,y(-4,4),y(-4,4),y(3,8),1.4,Yo("stone"),5,12,!1);T({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),T({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),Q(14);break;case"killbanner":{const u=e.player,f=u&&n.uid===u.id;if(T({type:"wisp",x:n.x,y:n.y,dur:1.6}),Ne(n.x,n.y,.8,"gold",f?40:14,4,.9,3,!0,3),!n.hero)break;const c=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],h=n.big===1,d=n.big===2,m=n.dur||0,p=h?"first":n.skill>=2?"multi":d?"ace":m>=7?"godlike":m>=5?"unstoppable":m===4?"rampage":m===3?"spree":"kill",x=p==="multi"?c[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[p],b=u&&n.team===u.team;J.banner(x,b?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(h||d||n.skill>=2||f));const M=u&&u.heroKey===n.kind&&u.dead&&n.team!==u.team,v=["","","double","triple","quadra","penta"];J.say(p==="first"?"first_blood":p==="multi"?v[Math.min(5,n.skill)]:p==="kill"?M?"you_died":b?"kill":"ally_killed":p),f&&Q(6);break}case"runespawn":J.say("rune");break;case"chrono":T({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(u,f,c){u.globalAlpha=.35*(f>.9?(1-f)*10:1),ft(c.x,c.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[h,d]=P(c.x,c.y,0);for(let m=0;m<12;m++){const p=m/12*6.283;u.fillStyle="#ffffff",u.fillRect(Math.round(h+Math.cos(p)*n.radius*46),Math.round(d+Math.sin(p)*n.radius*23),3,3)}}}),Q(5);break;case"hook_pull":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),Ne(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":T({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),Ne(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),Q(3);break;case"pet_fade":if(Object.keys(H).some(u=>{if(!u.endsWith("_petfade"))return!1;try{return H[u](n)===!0}catch(f){return console.error(f),!1}}))break;Ne(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":J.sfx("item_blink",n.x,n.y),Ne(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),Ne(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":J.sfx("item_shield",n.x,n.y,.7),T({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),Ne(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":J.sfx("item_purge",n.x,n.y),T({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),Ne(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":J.sfx("item_invis",n.x,n.y),Ne(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":J.sfx("item_drum",n.x,n.y);for(let u=0;u<3;u++)T({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:u*.14});Q(3);break;case"item_freeze":J.sfx("item_freeze",n.ex,n.ey),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),Ne(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"glyph":{const u=e.player;u&&n.team===u.team&&(w.glyphReady=e.t+(n.dur||300),J.play("shield",.6),J.banner&&J.banner(J.t("¡Torres fortificadas!"),"#ffd870",null,null,!1));break}case"glyph_on":{const u=n.x,f=n.y,c=n.dur||5;T({type:"custom",layer:"top",add:!0,dur:c,x:u,y:f,draw(h,d){const m=w.T,p=d>.85?(1-d)/.15:Math.min(1,d*8);for(let b=0;b<48;b++){const M=Math.PI+b/47*Math.PI,[v,S]=P(u+Math.cos(M)*0,f,0),_=46,A=v+Math.cos(M)*_,R=S-40+Math.sin(M)*_*1.1;h.globalAlpha=p*(.5+.5*Math.sin(m*6+b*.4)),h.fillStyle=b%3?"#ffd870":"#fff4c0",h.fillRect(Math.round(A)-1,Math.round(R)-1,3,3)}const[g,x]=P(u,f,0);h.globalAlpha=p*.16,h.fillStyle="#ffd870",h.beginPath(),h.ellipse(g,x-40,46,50,0,Math.PI,0),h.fill(),h.globalAlpha=1}}),ht(u,f,1.6,16767088,.6,c);break}case"ping":{const u=e.player;if(!u||n.team!==u.team)break;const f=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":n.kind==="attack"?"#ff8a3a":"#8ae08a";for(let c=0;c<3;c++)T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:f,w:4,delay:c*.18});T({type:"pingmark",x:n.x,y:n.y,dur:3,col:f,kind:n.kind}),J.play(n.kind==="danger"?"deny":n.kind==="attack"?"announce":"aim",n.kind==="attack"?.45:.7);break}case"laser":{let u=!1;try{u=ti.laser(n)}catch(f){console.error(f)}if(u){J.sfx("tower",n.ex,n.ey,.7);break}}T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),Ne(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),J.sfx("tower",n.ex,n.ey,.7);break;case"rooted":T({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const u=e.player&&e.winner===e.player.team;J.play(u?"victory":"defeat",1),J.say(u?"victory":"defeat")}else J.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":T({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}qu=1,xh=1,gh=null}function Jb(e){for(const t of dr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);Il(dr,t=>t.life>0),dr.length>2500&&dr.splice(0,dr.length-2500);for(const t of Ia)t.t+=e;Il(Ia,t=>t.t<t.dur+(t.delay||0));for(const t of Hs)t.t+=e;Il(Hs,t=>t.t<t.dur);for(const t of si)t.delay>0?t.delay-=e:t.life-=e;Il(si,t=>t.life>0),w.cam.shake=Math.max(0,w.cam.shake-e*30)}let wc=6,$a=0;function tv(e,t,n,o,r,i){const{HW:a,HH:s,N:l,OX:u}=N,f=window.MAP,c=w.T;if(wc-=e,wc<=0&&($a=y(.6,1),wc=y(8,16)),$a=Math.max(0,$a-e*.25),w.wind=.35+.15*Math.sin(c*.4)+$a,$a>.3&&Math.random()<$a*.9){const h=n+Math.random()*r,m=t-20-u,p=(m/a+h/s)/2,g=(h/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];Lo.push({k:"leaf",x:p,y:g,z:y(.4,2.2),ph:Math.random()*6,life:y(2.5,4),col:x,sp:y(9,15)})}if(Lo.length<70&&Math.random()<.8){const h=t+Math.random()*o,d=n+Math.random()*r,m=h-u,p=d,g=(m/a+p/s)/2,x=(p/s-m/a)/2;if(g>1&&x>1&&g<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(g)];b===0||b===4?Lo.push({k:"fly",x:g,y:x,z:y(.2,.9),ph:Math.random()*6,life:y(4,9),vx:y(-.3,.3),vy:y(-.3,.3)}):b===3&&Lo.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:y(.4,1),max:1})}}for(const h of Lo)h.life-=e,h.k==="leaf"&&(h.x+=h.sp*e*.5,h.y-=h.sp*e*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=y(-.6,.6)*e,h.vy+=y(-.6,.6)*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=Math.sin(c*2+h.ph)*.003);if(Il(Lo,h=>h.life>0),Lo.length>160&&Lo.splice(0,Lo.length-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,m]=P(h.x,h.y);d>t&&d<t+o&&m>n&&m<n+r+100&&I(h.x+y(-.4,.4),h.y+y(-.4,.4),1.4,y(-.3,.3),y(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let X,fu,Ai=null;function i2(e,t){X=fu=e,Ai=t||null}function Oe(e){if(!Ai){X.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(X===Ai)return;Ai.setTransform(fu.getTransform()),Ai.globalAlpha=fu.globalAlpha,Ai.globalCompositeOperation="lighter",Ai.imageSmoothingEnabled=!1,X=Ai}else X=fu}function ft(e,t,n,o,r,i=2,a){const{HW:s,HH:l}=N,[u,f]=P(e,t);X.beginPath(),X.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),r&&(X.fillStyle=r,X.fill()),o&&(X.lineWidth=i,X.strokeStyle=o,a&&X.setLineDash(a),X.stroke(),X.setLineDash([]))}function O0(e,t,n){X.beginPath(),e.forEach(([o,r],i)=>{const[a,s]=P(o,r);i?X.lineTo(a,s):X.moveTo(a,s)}),X.closePath(),X.fillStyle=n,X.fill(),X.strokeStyle=t,X.lineWidth=2,X.stroke()}function ev(){for(const e of Hs){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];ft(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&ft(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&ft(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function zy(e,t){if(t>1)return;e.add&&Oe(!0),X.save();const n=performance.now();try{e.draw(X,t,e)}catch(r){console.error(r)}const o=performance.now()-n;o>2&&Du("fxSlow",1,(e.tag||e.type)+" "+o.toFixed(1)+"ms"),X.restore(),e.add&&Oe(!1)}function pt(e){Oe(e)}function Wt(){return X}function nv(){const{HW:e}=N;for(const t of Ia){const n=t.t-(t.delay||0);if(n<0)continue;const o=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&zy(t,o);continue}if(t.type==="ring")X.globalAlpha=Math.max(0,1-o),ft(t.x,t.y,t.r*Math.min(1,.25+o*1.4),t.col,null,t.w*(1-o*.6)),X.globalAlpha=1;else if(t.type==="cone"){const[r,i]=P(t.x,t.y),a=Math.atan2(t.uy,t.ux);X.save(),Oe(!0),X.globalAlpha=Math.max(0,.75*(1-o)),X.beginPath(),X.moveTo(r,i);for(let f=0;f<=16;f++){const c=a-t.angle+2*t.angle*f/16,h=t.range*(.4+Math.min(1,o*3)*.6),[d,m]=P(t.x+Math.cos(c)*h,t.y+Math.sin(c)*h);X.lineTo(d,m)}X.closePath();const[s,l]=P(t.x+t.ux*t.range,t.y+t.uy*t.range),u=X.createLinearGradient(r,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),X.fillStyle=u,X.fill(),Oe(!1),X.restore()}else if(t.type==="cracks"){X.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-o))})`,X.lineWidth=2;const r=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=r+(i/6-.5)*Math.min(t.angle,3)*1.6;X.beginPath();let[s,l]=P(t.x,t.y);X.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,c=a+(q(t.seed+i*7+u)-.5)*.6;[s,l]=P(t.x+Math.cos(c)*f,t.y+Math.sin(c)*f),X.lineTo(s,l)}X.stroke()}}else if(t.type==="flash"){const[r,i]=P(t.x,t.y,.3),a=t.r*e*1.3;Oe(!0);const s=X.createRadialGradient(r,i,0,r,i,a);s.addColorStop(0,t.col+.8*(1-o)+")"),s.addColorStop(1,t.col+"0)"),X.fillStyle=s,X.fillRect(r-a,i-a,a*2,a*2),Oe(!1)}else if(t.type==="streak"){const[r,i]=P(t.x,t.y,.4),[a,s]=P(t.ex,t.ey,.4);Oe(!0),X.strokeStyle=t.col,X.globalAlpha=Math.max(0,.9*(1-o)),X.lineWidth=8*(1-o)+1,X.beginPath(),X.moveTo(r,i),X.lineTo(a,s),X.stroke(),X.globalAlpha=1,Oe(!1)}else if(t.type==="puff"){const[r,i]=P(t.x,t.y,.3+o*.4),a=t.col;X.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-o)})`;const s=t.r*(.6+o*.7);X.beginPath(),X.ellipse(r,i,s,s*.75,0,0,7),X.fill()}}Fy("ground")}function Fy(e){for(const t in Eu){X.save();try{Eu[t](e)}catch(n){console.error(n)}Oe(!1),X.restore()}}function ov(){const e=w.T;for(const t of Ia){const n=t.t-(t.delay||0);if(n<0)continue;const o=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&zy(t,o);continue}const r=t.uid?Z(t.uid):null,i=r?r.x:t.x,a=r?r.y:t.y;if(t.type==="pillar"){const[s,l]=P(i,a),u=t.col,f=140*Math.min(1,o*4),c=Math.max(0,.6*(1-o));Oe(!0);const h=X.createLinearGradient(s,l,s,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),X.fillStyle=h,X.fillRect(s-18,l-f,36,f),Oe(!1)}else if(t.type==="bubble"){if(!r||r.dead||!r.shield&&!(r.status&&r.status.dr))continue;const[s,l]=P(i,a,.35),u=t.col;Oe(!0),X.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,X.lineWidth=2,X.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,X.beginPath(),X.ellipse(s,l,34,38,0,0,7),X.fill(),X.stroke();for(let f=0;f<6;f++){const c=e*1.5+f*1.05;X.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,X.fillRect(s+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}Oe(!1)}else if(t.type==="swirl"){if(!r||r.dead)continue;const[s,l]=P(i,a,.3);X.strokeStyle="rgba(160,255,190,0.7)",X.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;X.beginPath(),X.ellipse(s,l,26,12,0,f,f+1.4),X.stroke()}}else if(t.type==="vines"){if(!r||r.dead)continue;const[s,l]=P(i,a);X.strokeStyle="#4a7a2a",X.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;X.beginPath(),X.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),X.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),X.stroke()}X.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;X.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=P(t.x,t.y,3*(1-o));Oe(!0),X.strokeStyle="rgba(240,200,255,0.9)",X.lineWidth=4,X.beginPath(),X.moveTo(s-18,l-50),X.lineTo(s,l),X.stroke(),X.fillStyle="#ffffff",X.fillRect(s-3,l-3,6,6),Oe(!1)}else if(t.type==="xslash"){const[s,l]=P(t.x,t.y,.5),u=40*Math.min(1,o*3);X.globalAlpha=Math.max(0,1-o),X.strokeStyle="#ffffff",X.lineWidth=6,X.beginPath(),X.moveTo(s-u,l-u),X.lineTo(s+u,l+u),X.moveTo(s+u,l-u),X.lineTo(s-u,l+u),X.stroke(),X.strokeStyle="#ff4040",X.lineWidth=2,X.stroke(),X.globalAlpha=1}else if(t.type==="spark"){const[s,l]=P(t.x,t.y,.45),u=(t.big?16:10)*(1-o);Oe(!0),X.fillStyle=t.col,X.fillRect(s-u,l-1,u*2,3),X.fillRect(s-1,l-u,3,u*2),X.fillRect(s-u*.5,l-u*.5,u,u),Oe(!1)}else if(t.type==="jaws"){const[s,l]=P(t.x,t.y,.5),u=26*(1-Math.min(1,o*2.5));X.strokeStyle="rgba(210,160,255,"+Math.max(0,1-o)+")",X.lineWidth=5,X.beginPath(),X.arc(s,l-u,24,.2,Math.PI-.2),X.stroke(),X.beginPath(),X.arc(s,l+u,24,Math.PI+.2,-.2),X.stroke()}else if(t.type==="pingmark"){const[s,l]=P(t.x,t.y,.9+Math.sin(e*6)*.05);rv(t.col,Math.max(0,1-Math.max(0,o-.8)*5)),X.beginPath(),X.moveTo(s,l+14),X.lineTo(s-9,l-2),X.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),X.closePath(),X.fill(),X.stroke(),X.fillStyle="#120c1a",X.font="bold 13px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":t.kind==="attack"?"×":"+",s,l-6),X.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=P(t.x,t.y,.5+o*2);Oe(!0),X.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-o)+")",X.beginPath(),X.arc(s+Math.sin(o*12)*6,l,7,0,7),X.fill(),Oe(!1)}}Fy("top")}function rv(e,t){X.globalAlpha=t,X.fillStyle=e,X.strokeStyle="#120c1a",X.lineWidth=2}function iv(){const{HW:e,HH:t,OX:n,ZK:o}=N;for(const r of dr){if(r.glow)continue;const i=(r.x-r.y)*e+n,a=(r.x+r.y)*t-r.z*o;X.globalAlpha=Math.min(1,r.life/r.max*1.5),X.fillStyle=r.col,X.fillRect(Math.round(i-r.size/2),Math.round(a-r.size/2),r.size,r.size)}X.globalAlpha=1,Oe(!0);for(const r of dr){if(!r.glow)continue;const i=(r.x-r.y)*e+n,a=(r.x+r.y)*t-r.z*o,s=Math.min(1,r.life/r.max*1.5);X.globalAlpha=s*.35,X.fillStyle=r.col,X.fillRect(Math.round(i-r.size),Math.round(a-r.size),r.size*2,r.size*2),X.globalAlpha=s,X.fillRect(Math.round(i-r.size/2),Math.round(a-r.size/2),r.size,r.size)}X.globalAlpha=1,Oe(!1)}function av(){const e=w.T,{HW:t,HH:n,OX:o,ZK:r}=N;for(const i of Lo){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+o,s=(i.x+i.y)*n-i.z*r,l=Math.abs(Math.sin(e*8+i.ph))*4+1;X.fillStyle="#00000040",X.fillRect(a-l/2+2,s+2,l,3),X.fillStyle=i.col,X.fillRect(a-l/2,s,l,3)}Oe(!0);for(const i of Lo){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+o,s=(i.x+i.y)*n-i.z*r;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);X.fillStyle=`rgba(210,255,120,${.25*l})`,X.fillRect(a-3,s-3,6,6),X.fillStyle=`rgba(250,255,200,${.9*l})`,X.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));X.fillStyle=`rgba(255,255,255,${.7*l})`,X.fillRect(a-1,s,3,1),X.fillRect(a,s-1,1,3)}}Oe(!1)}function sv(e){if(typeof e!="string"||!/^\d+[QWERAV]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function lv(){const{HW:e,HH:t}=N,n=w.T;for(const o of w.game.projs){const r=o.z||.45,[i,a]=P(o.x,o.y,r),s=Math.atan2(((o.vx||0)+(o.vy||0))*t,((o.vx||0)-(o.vy||0))*e),l=sv(o.look||o.fx),u=l?Pe[l]:void 0;if(u){X.save();try{u(X,o,i,a,s,n)}catch(c){console.error(c)}X.restore(),Oe(!1);continue}if(!l){X.save();let c=!1;try{c=ti.proj(X,o,i,a,s,n)}catch(h){console.error(h)}if(X.restore(),Oe(!1),c)continue}const f=Tn[o.fx]||Tn.arcane;if(o.fx==="arrow"||o.fx==="spear"){const c=o.fx==="arrow"?o.skill?26:16:12;X.save(),X.translate(i,a),X.rotate(s),X.fillStyle="#3a2a1a",X.fillRect(-c,-2,c,4),X.fillStyle="#e8d8b0",X.fillRect(-c,-1,c,2),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(5,0),X.lineTo(-2,-4),X.lineTo(-2,4),X.fill(),X.fillStyle="#e05050",X.fillRect(-c-3,-3,5,2),X.fillRect(-c-3,1,5,2),X.restore(),o.skill&&I(o.x,o.y,r,0,0,0,.25,"#ffffff",2,0,!0)}else if(o.fx==="dagger")X.save(),X.translate(i,a),X.rotate(n*25),X.fillStyle="#1a1020",X.fillRect(-9,-3,18,6),X.fillStyle="#e0e8f0",X.fillRect(-8,-2,14,4),X.fillStyle="#c8a040",X.fillRect(-10,-3,4,6),X.restore();else if(o.fx==="root")X.fillStyle="#5a3a20",X.beginPath(),X.arc(i,a,7,0,7),X.fill(),X.fillStyle="#8ad050",X.beginPath(),X.arc(i+3,a-3,4,0,7),X.fill(),I(o.x,o.y,r,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=o.skill?10:6;Oe(!0);const h=X.createRadialGradient(i,a,0,i,a,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),X.fillStyle=h,X.fillRect(i-c*2.4,a-c*2.4,c*4.8,c*4.8),Oe(!1),X.fillStyle=f[0],X.fillRect(i-3,a-3,6,6),Math.random()<.8&&I(o.x,o.y,r,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const Lt=Math.round,Dn=Math.PI*2;let xt=0,Mt=0;function De(e,t,n=0){xt=(e-t)*N.HW+N.OX,Mt=(e+t)*N.HH-n*N.ZK}function Pt(e,t,n,o,r){e.fillStyle=r,e.fillRect(Lt(t-o/2),Lt(n-o/2),o,o)}function Me(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Lt(t+(o-t)*l/s-i/2),Lt(n+(r-n)*l/s-i/2),i,i)}function Mh(e,t,n,o,r=1){for(let i=-o;i<o;i+=2){const a=2*Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(Lt(t-a/2),Lt(n+i*r),Lt(a),Math.max(1,Lt(2*r)))}}const di=e=>e<0?0:e>1?1:e,sr=e=>1-(1-e)*(1-e),vo=(e,t)=>e<t?1:(1-e)/(1-t),a2={b:{d:"#1a3c78",m:"#3c86e0",l:"#8cc8ff",w:"#dcefff"},r:{d:"#7a1a18",m:"#d8443a",l:"#ff9a84",w:"#ffe6dc"},n:{d:"#4a4a52",m:"#8a8a96",l:"#c8c8d0",w:"#ececf0"}},s2={b:{k:"#0e3a66",d:"#1e6ab0",m:"#4ab8f0",l:"#a8ecff",w:"#e2faff",n:7001343},r:{k:"#6a1a08",d:"#c0401a",m:"#ff8a3a",l:"#ffd08a",w:"#fff2d6",n:16751178}},_f=e=>s2[e]||s2.b,h0=e=>a2[e]||a2.n,Po={k:"#2e1c0e",d:"#4a2e18",m:"#7a5030",l:"#b08050"},er={d:"#4a5260",m:"#9aa6b4",l:"#dfe6ee"},Ws=["#d8c8a8","#b8a07a","#8a7454"],uv=["#8a7a6a","#5a4e44","#b4a490"],as={d:"#7a0e1a",m:"#c41e34",l:"#ff5a70"},Sc={d:"#3a1a40",m:"#7a3a80",fang:"#f4e8ee"},ul={d:"#2a2a7a",m:"#4a5ad0",l:"#8a9af0",spot:"#a8f0ff"},Ha={bark:"#4a3420",barkL:"#7a5a34",leaf:["#3e7a2a","#5aa040","#8ad050"]},Yi={k:"#12302e",shell:"#2a9a8a",shellL:"#5ad0b8",tip:"#e08a2a",tipL:"#ffc070"},$r={d:"#2a8a6a",m:"#5ac8a0",l:"#a8f0d0",w:"#e0fff2"},Vo={k:"#24242c",d:"#3e3e48",m:"#62626e",l:"#8a8a96",cr:"#9a5ae8",crL:"#d8b8ff",n:11565823},wi={jaw:"#6a4aa0",jawL:"#a07ad8",fang:"#f6eef6",foam:"#e8fbff",wat:["#c8f4f0","#6ac0d0","#2a80a0"]},hr={y:"#ffc83a",k:"#2a1a10",wing:"#e8f4ff",honey:"#ffb020",honeyL:"#ffe080",venom:"#c8e050"},ko={k:"#16608a",d:"#2aa6c8",m:"#6ee2f4",l:"#c4f6ff",w:"#f4fdff",n:7267060},fl={k:"#3a342a",d:"#746c5c",m:"#a49c8a",l:"#d6cfc0",moss:["#8ac050","#5a8a34"]},z0={d:"#4a4a18",m:"#a8a030",l:"#d8d070"},F0=new Map;function Ar(e){let t=F0.get(e);if(t)return t;const n=e.charCodeAt(0)===64?e.slice(1):e,o=n.indexOf(".");return t=o<0?{b:n,t:"n"}:{b:n.slice(0,o),t:n.slice(o+1)||"n"},F0.size>200&&F0.clear(),F0.set(e,t),t}const cu=e=>e==="blue"?"b":e==="red"?"r":"n";function Ey(e){if(e.type==="bite")return Ar("serpent.n");if(typeof e.sprite=="string"&&e.sprite.indexOf(".")>0)return Ar(e.sprite);if(e.col==="tower_blue"||e.col==="tower_red")return Ar(e.col==="tower_red"?"tw.r":"tw.b");const t=e.uid?Z(e.uid):null;if(t&&!t.heroKey){const n=cu(t.team);if(t.kind==="tower")return Ar("tw."+n);if(t.kind==="monster"||t.pet)return Ar((t.sprite||"slime")+"."+n);if(t.kind==="minion")return Ar((t.siege?"sg":e.proj?"mr":"mm")+"."+n)}return e.kind==="tower"?Ar("tw."+cu(e.team)):e.kind==="minion"?Ar((e.proj?"mr":"mm")+"."+cu(e.team)):null}let ir=1,yr=0,Ly=0,ky=0,Af=1,bh=!1;function xi(e){const t=e.uid?Z(e.uid):null;let n=0,o=0;if(bh=!!t,Af=t&&t.scale||1,t){Ly=t.x,ky=t.y;const i=e.x-t.x,a=e.y-t.y;n=(i-a)*N.HW,o=(i+a)*N.HH}const r=Math.hypot(n,o);if(r<.001){const i=Math.random()*Dn;ir=Math.cos(i),yr=Math.sin(i)}else ir=n/r,yr=o/r}function fv(e,t){const n=e.x,o=e.y,r=h0(t);xi(e);const i=ir,a=yr,s=-a,l=i;T({type:"custom",layer:"top",dur:.22,x:n,y:o,draw(u,f){De(n,o,.42);const c=f<.35?sr(f/.35):1-(f-.35)/.65,h=-12+c*14;u.globalAlpha=vo(f,.55);const d=xt+i*(h-22),m=Mt+a*(h-22),p=xt+i*(h-5),g=Mt+a*(h-5);if(Me(u,d,m,p,g,2,Po.m),Me(u,p,g,xt+i*h,Mt+a*h,3,er.m),Pt(u,xt+i*h,Mt+a*h,2,er.l),Pt(u,d+i*4+s*2,m+a*4+l*2,3,r.m),Pt(u,d+i*2+s*4,m+a*2+l*4,2,r.l),f>.25&&f<.6){const x=Lt(6*(1-(f-.25)/.35))+1;u.fillStyle=er.l,u.fillRect(Lt(xt-x),Lt(Mt)-1,x*2,2),u.fillRect(Lt(xt)-1,Lt(Mt-x),2,x*2),Pt(u,xt,Mt,3,r.w)}}}),I(n,o,.45,y(-.8,.8),y(-.8,.8),y(1,2),.3,r.m,2,9,!1),I(n,o,.45,y(-.8,.8),y(-.8,.8),y(1,2),.3,Po.l,2,9,!1),I(n,o,.05,y(-.4,.4),y(-.4,.4),.4,.35,Ws[0],3,0,!1,.9)}function cv(e,t,n,o,r,i,a){const s=Math.cos(r),l=Math.sin(r),u=-l,f=s,c=(t.id||0)*1.9,h=h0(a);Me(e,n-s*15,o-l*15,n-s*3,o-l*3,2,Po.m),Pt(e,n-s*9+u,o-l*9+f,1,Po.l),Me(e,n-s*3,o-l*3,n+s*2,o+l*2,3,er.m),Pt(e,n+s*3,o+l*3,2,er.l);for(let d=0;d<4;d++){const m=15+d*2.5,p=Math.sin(i*30+c-d*.9)*(1+d*.8);Pt(e,n-s*m+u*p,o-l*m+f*p,2,d<2?h.m:h.l)}}function hv(e,t){const n=e.x,o=e.y,r=h0(t);xi(e);const i=ir,a=yr,s=y(9,14),l=-y(9,14);T({type:"custom",layer:"top",dur:.5,x:n,y:o,draw(u,f){if(De(n,o,.42),u.globalAlpha=vo(f,.6),f<.16){const h=Math.sin(f*120)*1.5;Me(u,xt-i*18,Mt-a*18+h,xt-i*3,Mt-a*3,2,Po.m),Pt(u,xt-i*2,Mt-a*2,3,er.m),Pt(u,xt,Mt,4,r.l);return}const c=(f-.16)/.84;for(let h=0;h<2;h++){const d=h?l:s,m=xt-i*(h?14:6)+d*c*1.6,p=Mt-a*(h?14:6)-14*c+46*c*c,g=Math.atan2(a,i)+d*c*.9,x=Math.cos(g)*5,b=Math.sin(g)*5;Me(u,m-x,p-b,m+x,p+b,2,h?Po.m:Po.l),h?Pt(u,m-x,p-b,2,r.m):Pt(u,m+x,p+b,2,er.m)}}}),I(n,o,.45,y(-1,1),y(-1,1),y(1,2),.3,Po.l,2,10,!1),I(n,o,.45,y(-1,1),y(-1,1),y(1.5,2.5),.35,r.m,2,8,!1)}function dv(e,t,n,o,r,i,a){const s=Math.cos(r),l=Math.sin(r),u=-l,f=s,c=h0(a);Me(e,n-s*22,o-l*22,n-s*4,o-l*4,4,Po.k),Me(e,n-s*22,o-l*22,n-s*4,o-l*4,2,Po.m),Me(e,n-s*5+u*4,o-l*5+f*4,n-s*5-u*4,o-l*5-f*4,2,er.d),Me(e,n-s*3+u*3,o-l*3+f*3,n-s*3-u*3,o-l*3-f*3,2,er.m),Me(e,n-s*1+u*2,o-l*1+f*2,n-s*1-u*2,o-l*1-f*2,2,er.m),Pt(e,n+s*2,o+l*2,2,er.l);for(const h of[-1,1])Me(e,n-s*22,o-l*22,n-s*17+u*4*h,o-l*17+f*4*h,2,c.m),Pt(e,n-s*23+u*3*h,o-l*23+f*3*h,2,c.l);Math.random()<.4&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.3,.5,Math.random()<.5?"#b4b4c4":"#80808e",3,-.5,!1,.9)}function mv(e,t){const n=e.x,o=e.y,r=h0(t),i=Math.random()*Dn;T({type:"custom",layer:"ground",dur:.7,x:n,y:o,draw(a,s){De(n,o),a.globalAlpha=vo(s,.4)*.85;for(let u=0;u<5;u++){const f=i+u/5*Dn+(u&1?.3:-.2),c=10+u%3*5;Me(a,xt,Mt,xt+Math.cos(f)*c,Mt+Math.sin(f)*c*.5,2,Po.k),Me(a,xt+Math.cos(f)*c,Mt+Math.sin(f)*c*.5,xt+Math.cos(f+.4)*(c+6),Mt+Math.sin(f+.4)*(c+6)*.5,2,Po.d)}const l=8+sr(di(s*1.5))*30;a.globalAlpha=(1-s)*.9;for(let u=0;u<16;u++){const f=i+u/16*Dn;Pt(a,xt+Math.cos(f)*l,Mt+Math.sin(f)*l*.5,u&1?4:3,Ws[u%3])}}}),T({type:"custom",layer:"top",dur:.16,x:n,y:o,draw(a,s){De(n,o,.45);const l=Lt(12*(1-s))+2;a.fillStyle=er.l,a.fillRect(Lt(xt-l),Lt(Mt)-1,l*2,3),a.fillRect(Lt(xt)-1,Lt(Mt-l),3,l*2),Pt(a,xt,Mt,5,r.l)}});for(let a=0;a<4;a++)I(n,o,.4,y(-2,2),y(-2,2),y(2,4),y(.4,.6),a&1?Po.m:Po.l,3,14,!1,.96);for(let a=0;a<3;a++)I(n+y(-.2,.2),o+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.2,.6),.6,Ws[a],5,0,!1,.9);Q(1.5)}function pv(e){for(let t=0;t<4;t++)I(e.x+y(-.15,.15),e.y+y(-.15,.15),.35,y(-.6,.6),y(-.6,.6),y(.2,.8),.5,t&1?"#b4b4c4":Ws[0],4,-.3,!1,.9)}function Dy(e,t,n,o,r,i,a){const s=_f(a),l=Math.cos(r),u=Math.sin(r),f=-u,c=l;pt(!0);const h=Wt();for(let d=1;d<=5;d++){const m=8+d*5,p=Math.sin(i*26+d*1.3)*1.5;h.globalAlpha=.6-d*.1,Pt(h,n-l*m+f*p,o-u*m+c*p,5-(d>>1),d<3?s.m:s.d)}h.globalAlpha=.3,Me(h,n-l*6,o-u*6,n+l*4,o+u*4,12,s.d),h.globalAlpha=1,pt(!1),Me(e,n-l*5,o-u*5,n+l*2,o+u*2,7,s.k),Me(e,n-l*9,o-u*9,n+l*7,o+u*7,4,s.d),Me(e,n-l*4,o-u*4,n+l*3,o+u*3,5,s.m),Me(e,n-l*10,o-u*10,n+l*9,o+u*9,2,s.l),Pt(e,n+f*1+l*2,o+c*1+u*2,2,s.w),(i*30|0)%3===0&&Math.random()<.6&&I(t.x,t.y,t.z||1.3,y(-.3,.3),y(-.3,.3),y(-.3,.3),.3,s.l,2,0,!0)}function yv(e,t){const n=e.x,o=e.y,r=_f(t),i=Math.random()*Dn,a=y(-1,1);T({type:"custom",layer:"top",add:!0,dur:.38,x:n,y:o,draw(s,l){De(n,o,.45);const u=xt,f=Mt;if(l<.35){const h=1-l/.35,d=Lt(14*h)+2;s.globalAlpha=h,s.fillStyle=r.l,s.fillRect(Lt(u-d),Lt(f)-1,d*2,3),s.fillRect(Lt(u)-1,Lt(f-d),3,d*2),Pt(s,u,f,Lt(6*h)+2,r.w)}s.globalAlpha=vo(l,.5);const c=5+sr(l)*24;for(let h=0;h<6;h++){const d=i+h/6*Dn,m=u+Math.cos(d)*c,p=f+Math.sin(d)*c*.7+20*l*l,g=h+a*3+l*9|0;Pt(s,m,p,3,h&1?r.l:r.m),Pt(s,m+(g&1?2:-2),p-2,2,r.d)}}}),T({type:"custom",layer:"ground",add:!0,dur:.42,x:n,y:o,draw(s,l){De(n,o);const u=8+sr(l)*24,f=u/2;s.globalAlpha=(1-l)*.9,Me(s,xt-u,Mt,xt,Mt-f,2,r.m),Me(s,xt,Mt-f,xt+u,Mt,2,r.m),Me(s,xt+u,Mt,xt,Mt+f,2,r.m),Me(s,xt,Mt+f,xt-u,Mt,2,r.m),Pt(s,xt-u,Mt,3,r.l),Pt(s,xt+u,Mt,3,r.l),Pt(s,xt,Mt-f,3,r.l),Pt(s,xt,Mt+f,3,r.l)}});for(let s=0;s<3;s++)I(n,o,.5,y(-.8,.8),y(-.8,.8),y(1,2),.35,s?r.l:r.m,2,3,!0);ht(n,o,1.1,r.n,.65,.22)}function gv(e,t){const n=e.x,o=e.y,r=_f(t);T({type:"custom",layer:"top",add:!0,dur:.24,x:n,y:o,draw(i,a){De(n,o,1.3);const s=1-a,l=Lt(16*s)+3;i.globalAlpha=s,i.fillStyle=r.m,i.fillRect(Lt(xt-l),Lt(Mt)-1,l*2,3),i.fillRect(Lt(xt)-1,Lt(Mt-l*1.4),3,Lt(l*2.8)),Pt(i,xt,Mt,Lt(7*s)+2,r.l);const u=4+a*16;for(let f=0;f<6;f++){const c=f/6*Dn+.5;Pt(i,xt+Math.cos(c)*u,Mt+Math.sin(c)*u*.8,2,r.l)}}}),ht(n,o,1.4,r.n,.55,.2)}function xv(e){const t=e.team==="red"?"r":"b",n=_f(t),o=e.x,r=e.y,i=e.ex,a=e.ey;T({type:"custom",layer:"top",add:!0,dur:.3,x:o,y:r,draw(s,l){De(o,r,1);const u=xt,f=Mt;De(i,a,.45);const c=xt,h=Mt,d=9,m=1-l;let p=u,g=f;for(let x=1;x<=d;x++){const b=x/d,M=x<d?(Math.random()-.5)*12*m:0,v=u+(c-u)*b+M,S=f+(h-f)*b-M*.5;s.globalAlpha=.35*m,Me(s,p,g,v,S,8,n.d),s.globalAlpha=m,Me(s,p,g,v,S,3,n.m),Me(s,p,g,v,S,1,n.w),p=v,g=S}}}),T({type:"custom",layer:"ground",add:!0,dur:.45,x:i,y:a,draw(s,l){De(i,a);const u=10+l*22;s.globalAlpha=1-l;for(let f=0;f<12;f++){const c=f/12*Dn+l*2;Pt(s,xt+Math.cos(c)*u,Mt+Math.sin(c)*u*.5,f&1?2:4,f&1?n.l:n.m)}}});for(let s=0;s<6;s++)I(i,a,.4,y(-1.5,1.5),y(-1.5,1.5),y(1,3),.45,s&1?n.l:n.m,2,5,!0);ht(i,a,1.4,n.n,.8,.3)}function Mv(e){const t=e.x,n=e.y;xi(e);const o=Af>1.15,r=o?4:3,i=o?30:22,a=Math.random()<.5?1:-1,s=.62*a,l=.78,u=.78,f=-.62*a;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(c,h){De(t,n,.5);const d=di(h*4.5);c.globalAlpha=vo(h,.45);for(let m=0;m<r;m++){const p=(m-(r-1)/2)*6,g=i-Math.abs(m-(r-1)/2)*4,x=xt+u*p-s*g/2,b=Mt+f*p-l*g/2,M=x+s*g*d,v=b+l*g*d;Me(c,x+1,b+2,M+1,v+2,2,as.d),Me(c,x,b,M,v,2,"#f2e2cc")}}});for(let c=0;c<3;c++)I(t,n,.5,y(-1,1),y(-1,1),y(.5,1.5),.45,uv[c],2,3,!1,.9);I(t,n,.45,y(-.8,.8),y(-.8,.8),y(1,2),.35,as.m,2,10,!1),o&&Q(1)}function bv(e){const t=e.x,n=e.y;xi(e);const o=bh?Ly:t,r=bh?ky:n;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(i,a){De(t,n,.5);const s=xt,l=Mt;if(a<.4){const u=Lt(9*(1-di(a*4))),f=a<.25?1:(.4-a)/.15;i.globalAlpha=f;for(const c of[-1,1]){const h=s+c*5;i.fillStyle=Sc.d,i.fillRect(Lt(h-3),Lt(l-u-6),6,2),i.fillRect(Lt(h-3),Lt(l+u+4),6,2),i.fillStyle=Sc.fang,i.fillRect(Lt(h-2),Lt(l-u-4),4,2),i.fillRect(Lt(h-1),Lt(l-u-2),2,3),i.fillRect(Lt(h-1),Lt(l+u+1),2,3)}}for(let u=0;u<3;u++){const f=di((a-.18-u*.08)/.55);if(f<=0||f>=1)continue;const c=t+(o-t)*f,h=n+(r-n)*f;De(c,h,.5+Math.sin(f*Math.PI)*.35),i.globalAlpha=1,Pt(i,xt,Mt,3,u?as.m:as.l),Pt(i,xt,Mt-2,1,as.l)}}}),I(t,n,.45,y(-.6,.6),y(-.6,.6),y(.5,1.5),.4,as.d,2,10,!1),I(t,n,.5,y(-.4,.4),y(-.4,.4),y(.2,.6),.35,Sc.m,2,0,!1,.9)}function vv(e){const t=e.x,n=e.y;xi(e);const o=Af>1.1,r=o?1.4:1,i=[y(-8,-3),y(-3,1),y(3,8),y(-6,-1),y(-1,3),y(1,6),y(-2,2),y(-6,-3)];T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(a,s){De(t,n,.45+s*.25),a.globalAlpha=vo(s,.3)*.85;for(let l=0;l<4;l++){const u=(3+sr(di(s*2-l*.12))*(6+l))*r;a.fillStyle=l===3?ul.l:l&1?ul.m:ul.d,Mh(a,xt+i[l]*r*1.6,Mt+i[l+4]*r-s*6*l,u,.8)}s<.2&&(a.globalAlpha=1,Pt(a,xt,Mt,4,ul.spot))}});for(let a=0;a<3;a++)I(t+y(-.2,.2),n+y(-.2,.2),.5,y(-.3,.3),y(-.3,.3),y(.4,.9),y(.6,.9),ul.spot,2,-.2,!0,.95)}function wv(e){const t=e.x,n=e.y;xi(e);const o=ir>=0?1:-1;T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(r,i){De(t,n,.5);const a=xt-o*6,s=Mt+4,l=di(i*3.2),u=-Math.PI/2-o*1.2;r.globalAlpha=vo(i,.5);const f=8,c=24;for(let h=0;h<=f*l;h++){const d=u+o*(h/f)*1.9,m=a+Math.cos(d)*c,p=s+Math.sin(d)*c*.8;Pt(r,m,p,5,Ha.bark),Pt(r,m-1,p-1,2,Ha.barkL),h===(f*l|0)&&(Pt(r,m+3,p-3,4,Ha.leaf[1]),Pt(r,m-3,p-4,3,Ha.leaf[2]))}}}),T({type:"custom",layer:"ground",dur:.5,delay:.09,x:t,y:n,draw(r,i){De(t,n);const a=8+sr(i)*26;r.globalAlpha=(1-i)*.85;for(let s=0;s<14;s++){const l=s/14*Dn;Pt(r,xt+Math.cos(l)*a,Mt+Math.sin(l)*a*.5,s&1?3:4,Ws[(s>>1)%3])}}});for(let r=0;r<4;r++)I(t+y(-.2,.2),n+y(-.2,.2),.8,y(-.8,.8),y(-.8,.8),y(.5,1.2),y(.8,1.1),Ha.leaf[r%3],3,1.6,!1,.9);for(let r=0;r<2;r++)I(t,n,.45,y(-1.5,1.5),y(-1.5,1.5),y(1.5,2.5),.4,Ha.barkL,2,12,!1);Q(1.2)}function Sv(e){const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(o,r){De(t,n,.45);const i=1-di(r*4);o.globalAlpha=vo(r,.55);for(const a of[-1,1]){const s=xt+a*(10+i*8),l=Mt;for(let u=0;u<6;u++){const f=-Math.PI/2+u/5*(Math.PI/2)*1.1,c=s-a*Math.cos(f)*10,h=l+Math.sin(f)*8;Pt(o,c,h,u<3?4:3,Yi.k),Pt(o,c,h,2,u<3?Yi.shell:Yi.tip)}Pt(o,s-a*10,l+1,2,Yi.tipL)}if(r>.22&&r<.45){o.fillStyle=Yi.tipL;const a=Lt((.45-r)*30);o.fillRect(Lt(xt-a),Lt(Mt)-1,a*2,2),o.fillRect(Lt(xt)-1,Lt(Mt-a),2,a*2)}}});for(let o=0;o<3;o++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.2),.35,o?Yi.shellL:Yi.tip,2,10,!1)}function _v(e){const t=e.x,n=e.y,o=Math.random()*Dn;T({type:"custom",layer:"ground",dur:.8,x:t,y:n,draw(r,i){De(t,n);const a=(i<.15?i/.15:1-(i-.15)*.5)*12;r.globalAlpha=vo(i,.4)*.6,r.fillStyle=$r.d,Mh(r,xt,Mt,a+2,.5),r.fillStyle=$r.m,Mh(r,xt-2,Mt-1,a,.5),Pt(r,xt-a*.4,Mt-2,2,$r.w)}}),T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,i){De(t,n,.42);const a=4+sr(i)*16,s=i<.5?4:3;r.globalAlpha=vo(i,.5);for(let l=0;l<6;l++){const u=o+l/6*Dn,f=xt+Math.cos(u)*a,c=Mt+Math.sin(u)*a*.7+8*i*i;Pt(r,f,c,s,$r.m),Pt(r,f-1,c-1,2,$r.l)}i<.3&&(Pt(r,xt,Mt,6,$r.m),Pt(r,xt-1,Mt-1,3,$r.w))}});for(let r=0;r<3;r++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1.5,2.8),.45,r?$r.m:$r.l,3,12,!1)}function Av(e){const t=e.x,n=e.y;xi(e);const o=Af>1.3,r=Math.random()*Dn;T({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,a){De(t,n),i.globalAlpha=vo(a,.4)*.8;for(let s=0;s<3;s++){const l=r+s*2.1,u=o?20:14;Me(i,xt,Mt,xt+Math.cos(l)*u,Mt+Math.sin(l)*u*.5,2,Vo.k),Pt(i,xt+Math.cos(l)*u,Mt+Math.sin(l)*u*.5,2,Vo.cr)}}}),T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){De(t,n,.45);const s=xt,l=Mt;if(i.globalAlpha=vo(a,.5),a<.3){const f=1-a/.3,c=Lt((o?14:10)*(.6+f*.4));i.fillStyle=Vo.k,i.fillRect(Lt(s-c/2-ir*6*f)-1,Lt(l-c/2-yr*6*f)-1,c+2,c+2),i.fillStyle=Vo.m,i.fillRect(Lt(s-c/2-ir*6*f),Lt(l-c/2-yr*6*f),c,c),i.fillStyle=Vo.l,i.fillRect(Lt(s-c/2-ir*6*f),Lt(l-c/2-yr*6*f),c,2)}const u=6+sr(a)*20;for(let f=0;f<5;f++){const c=r+f/5*Dn,h=s+Math.cos(c)*u,d=l+Math.sin(c)*u*.6-12*Math.sin(a*Math.PI);Pt(i,h,d,3,f&1?Vo.cr:Vo.crL),Pt(i,h,d+2,2,Vo.cr)}}});for(let i=0;i<3;i++)I(t,n,.4,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,i?Vo.d:Vo.m,4,14,!1,.95);I(t,n,.5,y(-.6,.6),y(-.6,.6),y(1,2),.4,Vo.crL,2,4,!0),ht(t,n,.8,Vo.n,.4,.18),Q(o?2:1)}function Tv(e){const t=e.x,n=e.y,o=Math.random()*Dn,r=window.SIM&&window.SIM.MONSTERS&&window.SIM.MONSTERS.serpent,i=r&&r.aoe||1.3;T({type:"custom",layer:"top",dur:.42,x:t,y:n,draw(a,s){De(t,n,.5);const l=xt,u=Mt,f=22*(1-sr(di(s*3)));a.globalAlpha=vo(s,.45);for(const c of[-1,1]){const h=u+c*(f+6);for(let d=0;d<=10;d++){const m=d/10*Math.PI,p=l-Math.cos(m)*24,g=h+c*Math.sin(m)*8;Pt(a,p,g,5,wi.jaw),Pt(a,p,g-c,2,wi.jawL),d%2===1&&d<10&&(a.fillStyle=wi.fang,a.fillRect(Lt(p-1),Lt(c<0?g+2:g-7),3,5))}}}}),T({type:"custom",layer:"ground",dur:.6,delay:.1,x:t,y:n,draw(a,s){De(t,n);const l=(.3+sr(s)*.7)*i*N.HW*Math.SQRT2;a.globalAlpha=(1-s)*.9;for(let u=0;u<20;u++){const f=o+u/20*Dn;Pt(a,xt+Math.cos(f)*l,Mt+Math.sin(f)*l*.5,u&1?3:4,u&1?wi.foam:wi.wat[1])}a.globalAlpha=(1-s)*.5;for(let u=0;u<10;u++){const f=o+u/10*Dn+.3;Pt(a,xt+Math.cos(f)*l*.7,Mt+Math.sin(f)*l*.35,3,wi.wat[2])}}});for(let a=0;a<10;a++){const s=Math.random()*Dn,l=y(1,3);I(t,n,.3,Math.cos(s)*l,Math.sin(s)*l,y(2,4),.55,wi.wat[a%3],3,12,!1)}for(let a=0;a<2;a++)I(t,n,.5,y(-1,1),y(-1,1),y(1,2),.4,wi.jawL,2,8,!1);Q(4)}function Rv(e,t,n,o,r,i){const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=(t.id||0)*2.3;for(let h=1;h<=3;h++)e.globalAlpha=.6-h*.15,Pt(e,n-a*(8+h*4),o-s*(8+h*4)+Math.sin(i*25+f+h)*1.5,2,hr.honeyL);e.globalAlpha=1;for(let h=0;h<4;h++)Pt(e,n-a*(7-h*2),o-s*(7-h*2),3,h&1?hr.k:hr.y);Me(e,n+a*1,o+s*1,n+a*5,o+s*5,1,hr.k);const c=Math.sin(i*70+f)>0?3:2;e.globalAlpha=.75,Pt(e,n-a*4+l*c,o-s*4+u*c-1,2,hr.wing),Pt(e,n-a*4-l*c,o-s*4-u*c-1,2,hr.wing),e.globalAlpha=1}function Cv(e){const t=e.x,n=e.y;xi(e);const o=ir,r=yr;T({type:"custom",layer:"top",dur:.45,x:t,y:n,draw(i,a){De(t,n,.45),i.globalAlpha=vo(a,.6),Me(i,xt-o*7,Mt-r*7,xt-o*1,Mt-r*1,1,hr.k),Pt(i,xt-o*8,Mt-r*8,2,hr.y);const s=2+sr(di(a*2))*6;i.globalAlpha=(1-a)*.8;for(let l=0;l<5;l++){const u=l/5*Dn+.4;Pt(i,xt+Math.cos(u)*s,Mt+Math.sin(u)*s*.7-a*4,2,hr.venom)}}});for(let i=0;i<3;i++)I(t,n,.45,y(-.5,.5),y(-.5,.5),y(.2,.8),.5,i?hr.honey:hr.honeyL,2,6,!1,.9)}function Pv(e,t,n,o,r,i){const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=(t.id||0)*1.7;pt(!0);const c=Wt();c.globalAlpha=.3,Pt(c,n,o,14,ko.d),c.globalAlpha=1,pt(!1);for(let d=0;d<5;d++){const m=d*3,p=Math.sin(i*28+f-d*1.1)*d*.7;Pt(e,n-a*m+l*p,o-s*m+u*p-d,6-d,d<2?ko.m:d<4?ko.d:ko.k)}Pt(e,n,o,4,ko.l),Pt(e,n+a,o+s,2,ko.w);const h=i*10|0;t._bf!==h&&(t._bf=h,h&1&&I(t.x,t.y,(t.z||.45)+.05,0,0,.5,.35,ko.l,2,0,!0))}function Iv(e){const t=e.x,n=e.y,o=Math.random()*6;T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(r,i){De(t,n,.15);const a=Math.sin(i*Math.PI)*22;for(let s=-1;s<=1;s++){const l=a*(s?.7:1),u=Math.max(1,Lt(l/3));for(let f=0;f<u;f++){const c=f/u,h=Math.sin(i*20+o+f*.9+s)*1.5*c;Pt(r,xt+s*8+h,Mt-f*3,c<.3?4:c<.7?3:2,c<.3?ko.d:c<.7?ko.m:ko.l)}}i<.25&&Pt(r,xt,Mt-8,4,ko.w)}}),I(t,n,.5,y(-.3,.3),y(-.3,.3),y(.8,1.4),.4,ko.l,2,-.3,!0),ht(t,n,.9,ko.n,.45,.2)}function Ov(e){const t=e.x,n=e.y;xi(e);const o=Math.atan2(yr,ir);T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,i){De(t,n);const a=8+sr(i)*18;r.globalAlpha=(1-i)*.9;for(let s=0;s<7;s++){const l=o+(s/6-.5)*2.4;Pt(r,xt+Math.cos(l)*a,Mt+Math.sin(l)*a*.5,s&1?3:4,Ws[s%3])}}}),T({type:"custom",layer:"top",dur:.16,x:t,y:n,draw(r,i){De(t,n,.45);const a=1-i;for(let s=-1;s<=1;s++){const l=xt-ir*6*a+s*4*-yr,u=Mt-yr*6*a+s*4*ir;Pt(r,l,u,5,fl.k),Pt(r,l,u,3,fl.l)}}});for(let r=0;r<3;r++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1.5,2.6),.45,r?fl.d:fl.m,3,13,!1,.95);I(t,n,.45,y(-1,1),y(-1,1),y(1,2),.4,fl.moss[Math.random()*2|0],2,10,!1)}function zv(e){const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,r){De(t,n,.4);const i=Lt(Math.abs(Math.cos(r*Dn))*4)+1;o.globalAlpha=vo(r,.6);for(const a of[-1,1])Pt(o,xt-3,Mt+a*i,2,z0.d),Pt(o,xt,Mt+a*(i+1),2,z0.m),Pt(o,xt+3,Mt+a*i,2,z0.d)}}),I(t,n,.4,y(-.8,.8),y(-.8,.8),y(.5,1.2),.3,Math.random()<.5?z0.l:"#8ad050",2,8,!1)}const Fv={mm:fv,mr:hv,sg:mv,tw:yv,mon_wolf:Mv,mon_bat:bv,mon_shroom:vv,mon_ent:wv,mon_beetle:Sv,slime:_v,golem:Av,serpent:Tv,abeja_pet:Cv,cabra_wisp:Iv,cabra_golem:Ov,cabra_locust:zv},Ev={mr:cv,sg:dv,tw:Dy,abeja_pet:Rv,cabra_wisp:Pv};ti.hit=e=>{const t=Ey(e);if(!t)return!1;const n=Fv[t.b];if(n)return n(e,t.t),!0;const o=Pa[t.b]&&Pa[t.b].hit;return o?o(e,t.t)===!0?"snd":!0:!1};ti.proj=(e,t,n,o,r,i)=>{const a=t.look||t.fx;if(a==="tower_blue"||a==="tower_red")return Dy(e,t,n,o,r,i,a==="tower_red"?"r":"b"),!0;if(typeof a!="string"||a.charCodeAt(0)!==64)return!1;const s=Ar(a),l=Ev[s.b]||Pa[s.b]&&Pa[s.b].proj;return l?(l(e,t,n,o,r,i,s.t),!0):!1};ti.shoot=e=>{const t=Ey(e)||(e.proj==="tower"?Ar("tw."+cu((Z(e.uid)||{}).team)):null);if(!t)return!1;if(t.b==="tw")return gv(e,t.t),!1;if(t.b==="sg")return pv(e),!1;const n=Pa[t.b]&&Pa[t.b].shoot;return n?n(e,t.t)===!0:!1};ti.laser=e=>(xv(e),!0);const Ti=Math.round,Vu=Math.PI*2,Fr=(e,t,n,o,r)=>{e.fillStyle=r,e.fillRect(Ti(t-o/2),Ti(n-o/2),o,o)},Uy=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);H.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];T({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=Z(r.uid),a=i?i.x:r.x,s=i?i.y:r.y,[l,u]=P(a,s,.9),f=Math.min(1,o*3),c=o>.7?1-(o-.7)/.3:1;n.globalAlpha=c;for(const h of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+h*(.35+d*.22*f),p=(26+d*7)*f;for(let g=0;g<p;g+=3){const x=g/Math.max(1,p),b=Math.sin(w.T*18+d+g*.3)*2;Fr(n,l+Math.cos(m)*g+b*h,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let h=0;h<14;h++){const d=h/14*Vu+o*9,m=18+h%3*6,p=-o*70-h*3;Fr(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[h%4])}}});for(let n=0;n<40;n++){const o=Math.random()*Vu,r=y(1,3.5);I(e.x,e.y,.4,Math.cos(o)*r,Math.sin(o)*r,y(2,5),y(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}Q(Uy(e)?9:3)};H.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];T({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=Z(r.uid),a=i?i.x:r.x,s=i?i.y:r.y,[l,u]=P(a,s,1.6),f=Math.min(1,o*2.5),c=o>.65?1-(o-.65)/.35:1;n.globalAlpha=.85*c;const h=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((b,M)=>{b!=="."&&Fr(n,d+(M-7)*h,m+(x-5)*h,h,b==="N"?t[4]:b==="o"?t[0]:t[1+(M+x)%2])})),o>.15&&o<.6)for(let g=0;g<3;g++){const x=40+((o-.15)*300+g*22)%90;for(let b=-.9;b<=.9;b+=.12)Fr(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),T({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=Z(r.uid),[a,s]=P(i?i.x:r.x,i?i.y:r.y),l=10,u=Math.min(1,o*2.2);for(let f=0;f<l;f++){const c=f/l*Vu,h=(1-u)*120+30,d=a+Math.cos(c)*h,m=s+Math.sin(c)*h*.5;n.fillStyle=t[3],n.fillRect(Ti(d-6),Ti(m-4),12,8),n.fillStyle=t[1],n.fillRect(Ti(d-5),Ti(m-3),10,3),n.fillStyle=t[0],n.fillRect(Ti(d-1),Ti(m-1),2,2)}}}),Q(Uy(e)?10:4)};H.erizo_Q_hit=e=>{T({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,o){const[r,i]=P(o.x,o.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)Fr(t,r+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,Fr(t,r,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)I(e.x,e.y,.5,y(-2,2),y(-2,2),y(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};H.polilla_Q_hit=e=>{T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,o){const[r,i]=P(o.x,o.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<Vu-.4;l+=.18)Fr(t,r+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=r+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)Fr(t,s+f*u,l,u,"#fff6c8"),Fr(t,s+f*u,l+3*u,u,"#fff6c8"),Fr(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)I(e.x,e.y,.6,y(-1,1),y(-1,1),y(.5,1.5),y(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const Qo=Math.round,zt={x:0,y:0};function Xn(e,t,n=0){zt.x=(e-t)*N.HW+N.OX,zt.y=(e+t)*N.HH-n*N.ZK}const Ue=e=>e*N.HW*Math.SQRT2,lr=e=>e*N.ZK,_c=(e,t)=>Math.sqrt(2*N.HH*N.HH*e*e+N.ZK*N.ZK*t*t);function Wi(e,t,n){const o=2*N.HH/N.ZK;return(e+t+o*n)/Math.sqrt(2+o*o)}const Lv=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],l2=new WeakMap;function Vt(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let o=l2.get(e);o||(o=new Map,l2.set(e,o));const r=t+"|"+n;let i=o.get(r);if(!i){const a=document.createElement("canvas");a.width=a.height=8;const s=a.getContext("2d");s.fillStyle=t;for(let l=0;l<16;l++)Lv[l]<n&&s.fillRect((l&3)*2,(l>>2)*2,2,2);i=e.createPattern(a,"repeat")||t,o.set(r,i)}return i}function u2(e,t,n,o,r,i,a,s,l=2){if(o<2||s<=0)return;const u=o*.5,f=a.length,c=Qo(n-r),h=Qo(i?n+u:n);for(let d=c;d<h;d+=l){const m=d+l/2-n,p=m<0?o*Math.sqrt(Math.max(0,1-m/r*(m/r))):o*Math.sqrt(Math.max(0,1-m/u*(m/u))),g=!i&&m>-u?o*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-g<.5)continue;const x=m/r*(m/r);for(let b=0;b<f;b++){const M=a[b];let v=o*Math.sqrt(Math.max(0,M.u0*M.u0-x)),S=b+1<f?o*Math.sqrt(Math.max(0,a[b+1].u0*a[b+1].u0-x)):p;if(v<g&&(v=g),S>p&&(S=p),S-v<.5)continue;e.globalAlpha=s*M.a,e.fillStyle=M.fill;const _=Qo(t-S),A=Qo(t-v),R=Qo(t+v),C=Qo(t+S);A>_&&e.fillRect(_,d,A-_,l),C>R&&e.fillRect(R,d,C-R,l)}}}function Xr(e,t,n,o,r,i,a,s,l,u,f=2){const c=Math.max(o,r);if(c<2||u<=0||i<1)return;const h=n-i,d=o*.5,m=r*.5,p=s.length,g=l.length,x=a?1:-1;for(let b=-c;b<c;b+=f){const M=Math.abs(b+f/2),v=M/c;let S,_;if(M<=r?S=h+x*m*Math.sqrt(1-M/r*(M/r)):S=h+(M-r)/(o-r)*i,M<=o?_=n+x*d*Math.sqrt(1-M/o*(M/o)):_=n-(M-o)/(r-o)*i,_<S){const O=S;S=_,_=O}let A=0;for(;A+1<p&&v>=s[A+1].u0;)A++;const R=s[A];e.fillStyle=R.fill;const C=Qo(t+b),z=_-S;for(let O=0;O<g;O++){const E=Qo(_-z*(O+1)/g),U=Qo(_-z*O/g);U<=E||l[O]<=0||(e.globalAlpha=u*R.a*l[O],e.fillRect(C,E,f,U-E))}}}function Oi(e,t,n,o,r,i,a,s,l){for(let u=0;u<i;u++){const f=s+u/i*Math.PI*2,c=Math.cos(f),h=Math.sin(f);l&&(c+h>0?1:-1)!==l||(Xn(t+c*r,n+h*r,o),e.fillRect(Qo(zt.x-a/2),Qo(zt.y-a/2),a,a))}}function ka(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,o=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:o,id:-1,t0:w.T,endAt:w.T+t,found:!1,nl:0,fr:-1,rem:t}}function io(e){if(e.fr===w.T)return e.rem;e.fr=w.T;const t=w.game;let n=null;if(t&&t.zones){for(const o of t.zones)if(e.id>=0?o.id===e.id:Math.abs(o.x-e.x)<.16&&Math.abs(o.y-e.y)<.16&&(!e.look||!o.look||String(o.look)===e.look)){n=o;break}}if(n){const o=w.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=o):o<e.endAt&&(e.endAt=o),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,w.T));return e.rem=e.endAt-w.T,e.rem}function Mi(e,t,n,o,r,i){w.T<e.nl||(e.nl=w.T+.1,ht(t,n,o,r,i*.75,.22))}const $l=e=>e<0?0:e>1?1:e,st=Math.round,vn=Math.PI*2;let le=0,re=0;function sn(e,t,n=0){le=(e-t)*N.HW+N.OX,re=(e+t)*N.HH-n*N.ZK}function $n(e,t,n,o,r){e.fillStyle=r,e.fillRect(st(t-o/2),st(n-o/2),o,o)}function vh(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(st(t+(o-t)*l/s-i/2),st(n+(r-n)*l/s-i/2),i,i)}function qs(e,t,n,o,r=1){for(let i=-o;i<o;i+=2){const a=2*Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(st(t-a/2),st(n+i*r),st(a),Math.max(1,st(2*r)))}}function vs(e,t,n,o,r,i=-1e9){e.fillStyle=r;for(let a=-o;a<o;a+=2){const s=Math.abs(a+1),l=s<=o/2?o*.866:o*.866*(o-s)/(o/2);l<.5||n+a<i||e.fillRect(st(t-l),st(n+a),st(l*2),2)}}function kv(e,t,n,o,r){e.fillStyle=r,e.fillRect(st(t-o),st(n-1),o*2,2),e.fillRect(st(t-1),st(n-o),2,o*2)}function wh(e,t,n){e.fillStyle=ut.l,e.fillRect(st(t-1),st(n-4),2,2),e.fillStyle=ut.o,e.fillRect(st(t-2),st(n-2),4,4),e.fillStyle=ut.w,e.fillRect(st(t-1),st(n-2),2,2)}const gr=e=>e<0?0:e>1?1:e,Ni=e=>1-(1-e)*(1-e),ut={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},ws="#2a1e14",Dv="#eaf8ff",Uv="#b8e0ff",Yu="#ff9ac8",Ud="#9a5ad8",Xv="#9a7a48";function Xy(e,t,n,o,r){const i=w.game;if(!i)return null;let a=null,s=r*r;for(const l of i.units){if(l.dead||!n||(o?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function Gv(e,t,n,o,r){e.fillStyle=r?Dv:Uv,r?(e.fillRect(st(t-3*o-2),st(n-9),4,5),e.fillRect(st(t+1*o-1),st(n-8),3,4)):(e.fillRect(st(t-5*o-2),st(n-5),5,3),e.fillRect(st(t+2*o-2),st(n-5),4,3)),e.fillStyle=ut.y,e.fillRect(st(t-5),st(n-3),10,6),e.fillStyle=ws,e.fillRect(st(t-2*o-1),st(n-3),2,6),e.fillRect(st(t+1*o),st(n-3),2,6),e.fillRect(st(t+5*o-(o>0?1:2)),st(n-2),3,4),e.fillRect(st(t-6*o-1),st(n-1),2,2)}H.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,o=e.x+t*.5,r=e.y+n*.5;T({type:"custom",layer:"top",dur:.26,x:o,y:r,draw(i,a){sn(o,r,.6);const s=26*(1-Ni(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*vn+a*3;$n(i,le+Math.cos(u)*s,re+Math.sin(u)*s*.6,3,l&1?ws:ut.y)}a>.6&&(i.fillStyle=Ud,i.fillRect(st(le-2),st(re-2),4,4))}});for(let i=0;i<6;i++)I(o,r,.6,t*y(1,3)+y(-.6,.6),n*y(1,3)+y(-.6,.6),y(0,.6),.3,i&1?ut.y:ut.l,2,0,!0)};Pe.abeja_Q=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=i*30|0;for(let c=3;c<17;c++){const h=c*3.5,d=(c+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-c/17,e.fillStyle=c&1?ut.l:ut.y,e.fillRect(st(n-a*h+l*m*5),st(o-s*h+u*m*5),2,2)}e.globalAlpha=1;for(let c=0;c<=14;c++){const h=n+a*(8-c)*1.6,d=o+s*(8-c)*1.6;if(c<=1)$n(e,h,d,2,ut.w);else if(c<=8)$n(e,h,d,2,ut.b),(c===4||c===7)&&($n(e,h-a*2+l*2,d-s*2+u*2,2,ut.b),$n(e,h-a*2-l*2,d-s*2-u*2,2,ut.b));else{const m=c-9>>1&1?ws:ut.y,p=c===9||c===14?1:2;for(let g=-p;g<=p;g++)$n(e,h+l*g*2,d+u*g*2,2,m)}}f&2&&$n(e,n+a*15,o+s*15+2,2,Ud)};H.abeja_Q_hit=e=>{const t=e.x,n=e.y,o=Z(e.uid),r=Xy(t,n,o?o.team:void 0,!1,.9);T({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:r?r.id:0,draw(i,a,s){const l=s.vid?Z(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}sn(l?l.x:t,l?l.y:n,1.5);const f=le,c=re,h=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=st(11*h);i.globalAlpha=u>1.5?(1.8-u)/.3:1,vs(i,f,c,d,ut.d),vs(i,f,c,d-2,ut.y),vs(i,f,c,d-2,ut.o,c+d*.35),i.fillStyle=ut.w,i.fillRect(st(f-d*.5),st(c-d*.5),3,2),vh(i,f-4,c-4,f+4,c+4,2,ws),vh(i,f+4,c-4,f-4,c+4,2,ws);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,g=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const M=(x>0?0:Math.PI)+b*.28;$n(i,f+Math.cos(M)*g,c+Math.sin(M)*g,2,ut.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,wh(i,f-4,c+d+m*22),wh(i,f+3,c+d+m*14)}}});for(let i=0;i<8;i++)I(t,n,.5,y(-2,2),y(-2,2),y(.6,1.8),y(.3,.5),i&1?ws:ut.y,2,6,!1,.9);for(let i=0;i<4;i++)I(t,n,.6,y(-.8,.8),y(-.8,.8),y(1,2),.5,Ud,3,5,!0);Q(2)};H.abeja_W=e=>{if(e.type==="heal"){Nv(e);return}const t=e.x,n=e.y,o=e.radius||4.2,r=Math.random()*9;T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(o-.3)*Ni(gr(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*vn,f=s*(1+Math.sin(u*6+a*9+r)*.045);sn(t+Math.cos(u)*f,n+Math.sin(u)*f),$n(i,le,re,5,ut.o),$n(i,le,re-2,3,ut.l),l%4===0&&(i.fillStyle=ut.d,i.fillRect(st(le-1),st(re+2),2,st(2+6*a)))}}}),T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=gr(a/.6);for(let l=0;l<8;l++){const u=l/8*vn+r,f=o*(.6+.3*q(r+l))*s;sn(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,wh(i,le,re)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=ut.o,i.fillRect(st(le-5),st(re-1),10,2),i.fillStyle=ut.l,i.fillRect(st(le-2),st(re-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*vn;I(t,n,.8,Math.cos(a)*y(.5,2),Math.sin(a)*y(.5,2),y(.5,1.5),y(.5,.9),i%3?ut.l:ut.w,2,-.5,!0)}};function Nv(e){const t=e.x,n=e.y,o=Xy(t,n,e.team,!0,.6);T({type:"custom",layer:"top",dur:1,x:t,y:n,vid:o?o.id:0,draw(r,i,a){const s=a.vid?Z(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;sn(l,u,.55);const c=le,h=re;sn(l,u,2.6);const d=re,m=h-d;if(f>.15){sn(l,u);const x=gr((f-.15)/.3);r.globalAlpha=.85*(f>.7?(1-f)/.3:1),r.fillStyle=ut.o,qs(r,le,re,st(16*x),.45),r.fillStyle=ut.l,r.fillRect(st(le-6*x),st(re-3),st(6*x),2)}const p=gr(f/.15)*m,g=f>.45?gr((f-.45)/.2)*m:0;r.globalAlpha=1;for(let x=st(g);x<p;x+=3){const b=x/m*(x/m),M=Math.sin(x*.22-w.T*9)*6*b;r.fillStyle=ut.o,r.fillRect(st(c+M-2),st(d+x),4,3),r.fillStyle=ut.l,r.fillRect(st(c+M-2),st(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(r.globalAlpha=1-b,kv(r,c+(x-1)*12,h-10-b*30,4,x&1?ut.y:ut.l))}}});for(let r=0;r<5;r++)I(t,n,.4,y(-.5,.5),y(-.5,.5),y(.8,1.6),y(.6,.9),r&1?ut.l:ut.w,2,-.5,!0)}const cl=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];H.abeja_E=e=>{const t=e.x,n=e.y,o=Math.random()*99,r=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*vn+o);T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,c=Ni(gr(f/.25)),h=f>1.15?gr((f-1.15)/.5):0;sn(t,n,.55*c-h*.4);const d=le,m=re;l.globalAlpha=1-h;for(let p=0;p<cl.length;p++){const g=d+cl[p][0],x=m+cl[p][1]*c,b=8;vs(l,g,x,b,ut.d),vs(l,g,x,b-2,ut.cell);const M=gr((f-.08-p*.04)/.3),v=a.indexOf(p)>=0&&f>r;!v&&M>0&&(vs(l,g,x,b-2,ut.o,x+(b-2)-M*2*(b-2)),l.fillStyle=ut.l,l.fillRect(st(g-3),st(x-3),2,2)),!v&&f>.4&&a.indexOf(p)>=0&&(l.fillStyle=ut.y,l.fillRect(st(g-4),st(x-1),8,3))}}}),T({type:"custom",layer:"top",delay:r,dur:.75,x:t,y:n,draw(l,u){sn(t,n,.55);const f=le,c=re,h=(w.T*30|0)&1;for(let d=0;d<3;d++){const m=f+cl[a[d]][0],p=c+cl[a[d]][1];sn(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const g=le,x=re,b=_=>{const A=Math.sin(_*Math.PI);return[m+(g-m)*_+Math.cos(_*vn*1.5+d)*12*A,p+(x-p)*_+Math.sin(_*vn*1.5+d)*8*A-A*18]},M=Ni(u);for(let _=1;_<7;_++){const A=M-_*.04;if(A<0)break;const R=b(A);l.globalAlpha=(1-_/7)*.8,l.fillStyle=ut.l,l.fillRect(st(R[0]),st(R[1]),2,2)}const v=b(M),S=b(Math.max(0,M-.02));l.globalAlpha=u>.8?(1-u)/.2:1,Gv(l,v[0],v[1],v[0]>=S[0]?1:-1,!!h)}}}),T({type:"custom",layer:"top",delay:r,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<9;c++)I(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1,2),y(.4,.6),c%3?ut.y:ut.d,2,6,!1,.9)}}}),T({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<14;c++)I(t+y(-.3,.3),n+y(-.3,.3),y(.2,.7),y(-.6,.6),y(-.6,.6),y(0,.5),y(.5,.8),c%3?ut.d:ut.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)I(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(.3,1),.5,"#c8a878",3,3,!1,.9);Q(2)};const Hl=new Map;H.abeja_R=e=>{e.type==="channel"?Bv(e):e.type==="channel_tick"?Hv(e):e.type==="channel_end"&&Wv(e)};function Bv(e){const t=e.x,n=e.y,o=e.uid,r=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1},u=w.T,f={n:0};Hl.size>16&&Hl.clear(),Hl.set(o,l);const c=m=>{if(l.endT<0&&w.mode!=="guest"&&m.t>.1){const g=Z(o);(!g||!g.channel)&&(l.endT=w.T)}if(l.endT<0)return 1;const p=1-(w.T-l.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i,M=Ni(gr(b/.4)),v=s+b*.3;m.globalAlpha=x;for(let S=0;S<8;S++){const _=v+S/8*vn,A=Math.cos(_),R=Math.sin(_);for(let C=0;C<10;C++){const z=C/9,O=(.15+z*.95)*M,E=Math.sin(z*Math.PI)*.24*M;for(let U=-1;U<=1;U++)sn(t+A*O-R*E*U,n+R*O+A*E*U),$n(m,le,re,6,U===0&&z<.8?ut.l:z>.85?ut.d:ut.y)}}sn(t,n),m.fillStyle=ut.o,qs(m,le,re,st(12*M),.5),m.fillStyle=Yu,qs(m,le,re,st(6*M),.5)}});const h=$v(r,s);T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);x<=0||(f2(m,h,t,n,r,a,w.T-u,x,!1),w.T>=f.n&&(f.n=w.T+.1,ht(t,n,r*1.05,16760896,.5*x,.22)))}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i,M=Ni(gr(b/.5)),v=b*.25;m.globalAlpha=.55*x;for(let C=0;C<56;C++){const z=C/56*vn+v;sn(t+Math.cos(z)*r,n+Math.sin(z)*r),$n(m,le,re,C&1?2:3,C&1?ut.l:ut.y)}sn(t,n);const S=le,_=re,A=r*N.HW*Math.SQRT2,R=Math.sqrt(2*N.HH*N.HH*r*r+N.ZK*N.ZK*a*a*M*M);for(let C=0;C<=90;C++){const z=Math.PI+C/90*Math.PI,O=((C/90-b*.35)%1+1)%1,E=Math.max(0,1-Math.min(O,1-O)*7);m.globalAlpha=x*(.35+.6*E),$n(m,S+Math.cos(z)*A,_+Math.sin(z)*R,E>.4?3:2,E>.4?ut.w:ut.y)}m.globalAlpha=x;for(let C=0;C<6;C++){const z=w.T*2.4+C/6*vn;sn(t+Math.cos(z)*.7,n+Math.sin(z)*.7,.9+Math.sin(w.T*4+C)*.2),$n(m,le,re,2,C&1?ut.w:Yu)}}});const d=26;T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);if(x<=0)return;const b=p*i;if(!(b<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const S=q(M*3.7+s)*.65,_=Math.floor((b+S)/.65),A=(b+S)%.65/.65,R=q(M*13.1+_)*vn,C=Math.sqrt(q(M*5.3+_*1.7))*r*.9,z=t+Math.cos(R)*C,O=n+Math.sin(R)*C;if(A<.85)sn(z,O,a*.92*Math.sqrt(Math.max(0,1-C/r*(C/r)))*(1-A/.85)),m.fillStyle=ut.o,m.fillRect(st(le-1),st(re-2),2,4),m.fillStyle=ut.l,m.fillRect(st(le-1),st(re-4),2,2);else{sn(z,O);const E=(A-.85)/.15;m.fillStyle=ut.o,m.fillRect(st(le-2-E*4),st(re),3,2),m.fillRect(st(le+E*4),st(re),3,2)}}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=c(g);x<=0||f2(m,h,t,n,r,a,w.T-u,x,!0)}})}function $v(e,t){const o=[],r=[],i=[],a=[],s=[],l=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*l,c=Math.max(5,st(Math.max(16,e*5.6)*Math.cos(f)));for(let h=0;h<c;h++)o.push((h+(u&1)*.5)/c*vn),r.push(f),i.push(u),s.push(vn/c),a.push(.35+u*.42+q(t+h*7.1+u*13.3)*.45)}return{a:Float32Array.from(o),ph:Float32Array.from(r),row:Uint8Array.from(i),fill:Float32Array.from(a),da:Float32Array.from(s),dph:l,n:o.length}}const Wa=new Float32Array(12);function f2(e,t,n,o,r,i,a,s,l){const{HW:u,HH:f,ZK:c}=N,h=2*f/c,d=Math.sqrt(2+h*h);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let g=0;g<t.n;g++){const x=t.row[g],b=Ni(gr((a-.05-x*.07)/.28));if(b<=.02)continue;const M=a>t.fill[g];if(m===0&&M||m===1&&!M)continue;const v=t.a[g],S=t.ph[g],_=Math.cos(v),A=Math.sin(v),R=Math.cos(S),C=Math.sin(S),z=_*R/r,O=A*R/r,E=C/i;if((z+O+h*E)/d>0!==l)continue;const U=n+_*R*r,G=o+A*R*r,Y=C*i,L=(U-G)*u+N.OX,k=(U+G)*f-Y*c,D=.5*.86*b,$=t.da[g]*R*r*D,W=t.dph*D*1.12,et=(-A-_)*$*u,ot=(-A+_)*$*f,gt=-C*_*r,qt=-C*A*r,Bt=R*i,qe=(gt-qt)*W*u,Ie=((gt+qt)*f-Bt*c)*W;for(let ee=0;ee<6;ee++){const Rn=ee*Math.PI/3+Math.PI/6,Ce=Math.cos(Rn),bi=Math.sin(Rn)*1.15;Wa[ee*2]=st(L+Ce*et+bi*qe),Wa[ee*2+1]=st(k+Ce*ot+bi*Ie)}e.moveTo(Wa[0],Wa[1]);for(let ee=1;ee<6;ee++)e.lineTo(Wa[ee*2],Wa[ee*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=s*(l?.55:.5),e.fillStyle=Vt(e,l?ut.l:ut.d,l?3:4),e.fill();else if(m===1){const g=.85+.15*Math.sin(a*5);e.globalAlpha=s*(l?.62:.55)*g,e.fillStyle=Vt(e,l?ut.y:ut.o,l?7:9),e.fill()}else e.globalAlpha=s*(l?.95:.55),e.strokeStyle=l?ut.d:ut.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(l){e.globalAlpha=s*.9,e.fillStyle=ut.w;for(let m=0;m<t.n;m++){if(a<=t.fill[m]+.1)continue;const p=t.a[m],g=t.ph[m],x=Math.cos(p),b=Math.sin(p),M=Math.cos(g),v=Math.sin(g);(x*M/r+b*M/r+h*v/i)/d<=0||(sn(n+x*M*r,o+b*M*r,v*i),e.fillRect(st(le-7),st(re-6),3,2))}}}function Hv(e){const t=e.x,n=e.y,o=e.radius||5,r=e.team;T({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(o-.4)*Ni(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const c=f/6*vn+Math.PI/6,h=(f+1)/6*vn+Math.PI/6;sn(t+Math.cos(c)*u,n+Math.sin(c)*u);const d=le,m=re;sn(t+Math.cos(h)*u,n+Math.sin(h)*u),vh(s,d,m,le,re,3,f&1?ut.y:ut.l)}}});const i=w.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>o*o)){if(s.team===r){if(s.kind==="hero")for(let l=0;l<2;l++)I(s.x+y(-.3,.3),s.y+y(-.3,.3),.5,0,0,y(1,1.6),.6,l?ut.l:ut.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;T({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,c){sn(l,u),f.globalAlpha=.8*(1-c),f.fillStyle=ut.d,qs(f,le,re,13,.45),f.fillStyle=ut.o,qs(f,le-2,re-1,9,.45),f.fillStyle=ut.l,f.fillRect(st(le-5),st(re-3),3,2),f.fillRect(st(le-8),st(re-10+c*8),2,st(8-c*6)),f.fillRect(st(le+7),st(re-8+c*6),2,st(6-c*4))}})}}}function Wv(e){const t=Hl.get(e.uid);t&&t.endT<0&&(t.endT=w.T),Hl.delete(e.uid);const n=e.x,o=e.y;if(e.kind==="done"){for(let r=0;r<16;r++){const i=r/16*vn;I(n+Math.cos(i)*.6,o+Math.sin(i)*.6,.2,Math.cos(i)*y(2,3.5),Math.sin(i)*y(2,3.5),y(1.5,3),y(.6,.9),r&1?ut.y:ut.l,4,3,!0,.93)}for(let r=0;r<12;r++)I(n,o,.8,y(-1,1),y(-1,1),y(1,2.5),y(.5,.9),r&1?Yu:ut.w,2,0,!0);T({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:o,draw(r,i){sn(n,o),r.globalAlpha=1-i,r.fillStyle=ut.l,qs(r,le,re,st(20+i*90),.5)}}),Q(3)}else{for(let r=0;r<10;r++){const i=r/10*vn;I(n+Math.cos(i)*.6,o+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,y(.2,.6),y(.7,1),r&1?Xv:ut.d,4,1.5,!1,.9)}J.sfx("deny",n,o,.35)}}Pe.abeja_A=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?ut.l:ut.y,e.fillRect(st(n-a*p+l*g-1),st(o-s*p+u*g-1),2,2)}e.globalAlpha=1;const c=Math.sin(i*20+f)*3,h=n+l*c,d=o+u*c;for(let m=0;m<8;m++){const p=m/8*vn+i*6;$n(e,h+Math.cos(p)*5,d+Math.sin(p)*5,2,ut.o)}e.fillStyle=ut.y,e.fillRect(st(h-3),st(d-3),6,6),e.fillStyle=ut.w,e.fillRect(st(h-2),st(d-2),2,2)};Qe.abeja=e=>{const t=e.x,n=e.y,o=!!e.big,r=Math.random()*vn;T({type:"custom",layer:"top",dur:o?.38:.28,x:t,y:n,draw(i,a){sn(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(o?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const c=r+f/5*vn;$n(i,le+Math.cos(c)*l,re+Math.sin(c)*l*.8,o?5:4,f&1?ut.l:ut.y)}$n(i,le,re,o?5:4,o?Yu:ut.o);const u=6+a*(o?26:18);for(let f=0;f<10;f++){const c=r+f/10*vn;$n(i,le+Math.cos(c)*u,re+Math.sin(c)*u*.5+6,2,ut.l)}}});for(let i=0;i<(o?8:4);i++)I(t,n,.5,y(-1,1),y(-1,1),y(.3,1.2),.4,i&1?ut.y:ut.w,2,2,!0)};const ie=Math.round,_t={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function nr(e,t,n,o,r){e.fillStyle=r,e.fillRect(ie(t-o/2),ie(n-o/2),o,o)}const qv=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,Ac={};function Vv(e){if(Ac[e])return Ac[e];const t=[];for(let n=-e;n<=e;n++)for(let o=-e;o<=e;o++){const r=Math.hypot(o,n);r<=e+.5&&r>e-.5&&t.push([o,n])}return Ac[e]=t}function Vs(e,t,n,o,r,i,a,s=1,l=1,u=!1){const f=Vv(o);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];e.fillStyle=h+d>o*.6?a:i,e.fillRect(ie(t+h*r*s-r/2),ie(n+d*r*l-r/2),r,r)}u||(e.fillStyle=_t.white,e.fillRect(ie(t-o*r*.45*s-r/2),ie(n-o*r*.5*l-r/2),r,r))}function Yv(e,t,n,o,r,i,a=1,s=1){e.fillStyle=i;for(let l=-o+1;l<o;l++){const u=Math.floor(Math.sqrt(o*o-l*l));e.fillRect(ie(t-u*r*a),ie(n+l*r*s-r/2),ie(u*2*r*a),r)}}function Kv(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(o,r,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const c2=["#.#","###",".#.",".#."];function Gy(e,t){T({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,o){const[r,i]=P(e,t,.5),a=4+ie(o*5);n.globalAlpha=1-o,Vs(n,r,i,a,2,_t.pink1,_t.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+o*10;nr(n,r+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?_t.white:_t.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const o=y(0,6.283),r=y(1,2.5);I(e,t,.5,Math.cos(o)*r,Math.sin(o)*r,y(1,2.5),.4,n<3?_t.water:_t.pink1,2,8,!1)}for(let n=0;n<3;n++)I(e,t,.5,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,n%2?_t.coral:_t.orange,3,10,!1)}H.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,o=e.ux||1,r=e.uy||0,i=(o-r)*64,a=(o+r)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,c]=P(t,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=s+(h-1)*.5,m=10+u*(22+h*6);Vs(l,f+Math.cos(d)*m,c+Math.sin(d)*m-u*8,1+h%2,2,_t.pink2,_t.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(t+o*.4,n+r*.4,.5,o*y(1,2.5)+y(-.5,.5),r*y(1,2.5)+y(-.5,.5),y(.5,1.5),.35,l%2?_t.water:_t.pink1,2,6,!1);return!0};Pe.ajolote_Q=(e,t,n,o,r,i)=>{Kv(t,Gy);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,Yv(e,n,o,6,2,_t.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<c2.length;h++)for(let d=0;d<3;d++)c2[h][u?2-d:d]==="#"&&nr(e,n-2+d*2,o-3+h*2,2,h<1?_t.orange:_t.coral);Vs(e,n,o,6,2,_t.pink2,_t.coral2,s,l);const f=Math.cos(r),c=Math.sin(r);for(let h=0;h<3;h++){const d=18+h*8,m=Math.sin(i*12+h*2)*3;Vs(e,n-f*d-c*m,o-c*d+f*m,2-(h>>1),2,_t.pink1,_t.pink2)}Math.random()<.35&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.6,.45,_t.pink1,2,-.5,!1)};function jv(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return T({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(o,r){const i=r*.85,[a,s]=P(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=a+n[l][0],h=s+n[l][1]-u*6;if(u<f)Vs(o,c,h,2,2,_t.pink2,_t.coral);else if(u<f+.3){const d=(u-f)/.3,m=ie(h-d*14),p=ie(c);o.globalAlpha=1-d,o.fillStyle=_t.pink1,o.fillRect(p-4,m-1,8,2),o.fillRect(p-1,m-4,2,8),o.fillStyle=_t.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])o.fillRect(p+g*(.6+d),m+x*(.6+d),2,2);o.globalAlpha=1}}}}),!0}H.ajolote_W=e=>{if(e.type==="heal")return jv(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,o=e.radius||2.5,r=e.uid,i=1.3,a=[-.55,-.15,.25];T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const c=Z(r),[h,d]=P(c?c.x:t,c?c.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const b=g>0?a[x]:Math.PI-a[x],M=Math.sin(f*16+x*1.3)*.12,v=b+M*g,S=Math.cos(v),_=Math.sin(v),A=ie(22*m)-(x===1?0:4);for(let R=6;R<=A;R+=2)nr(u,h+S*R,d+_*R,2,R>A-2?_t.pink1:_t.gill),R%4===0&&R>8&&(nr(u,h+S*R-_*3,d+_*R+S*3,2,_t.pink2),nr(u,h+S*R+_*3,d+_*R-S*3,2,_t.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+y(-.12,.12));T({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),m=ie(d*3)*2,[p,g]=P(t+Math.cos(s[c])*o,n+Math.sin(s[c])*o),x=ie(p),b=ie(g);u.fillStyle=_t.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=_t.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=_t.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=y(0,6.283),c=o*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:y(0,.35),pop:y(.4,.9),ph:y(0,6.283),done:!1})}return T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[m,p]=P(h.x,h.y,.1+Math.min(d,h.pop)*.9),g=m+Math.sin(d*9+h.ph)*3;if(d<h.pop){Vs(u,g,p,h.n,2,_t.pink2,_t.coral);continue}h.done||(h.done=!0,I(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.8,.5,_t.pink1,2,0,!0),I(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.5,.4,_t.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=h.n*2+2+x*6;for(const[M,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])nr(u,g+M*b,p+v*b,2,_t.pink1);u.globalAlpha=1}}}),!0};function Qv(e,t,n,o,r){const i=-r,a=o;for(let s=0;s<=22;s+=2)nr(e,t-o*s,n-r*s,2,s>18?_t.coral2:_t.orange);for(let s=-6;s<=6;s+=2)nr(e,t+i*s,n+a*s,2,_t.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)nr(e,t+i*s+o*u,n+a*s+r*u,2,u>=l-1?_t.white:_t.pink1)}}H.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,o=e.ex||t+(e.ux||0)*(e.range||0),r=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(o-t,r-n),l=(o-t)/(s||1),u=(r-n)/(s||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,m=c/h,p=Math.max(2,Math.ceil(s/.1)),g={n:0,end:!1};return T({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const M=b*a,v=Math.min(1,M/i);for(let S=0;S<=p*v;S++){const _=S/p,A=M-_*i,R=Math.max(0,1-A/.55);if(R<=0)continue;const[C,z]=P(t+(o-t)*_,n+(r-n)*_),O=z+Math.sin(_*14-M*25)*2,E=ie(4+6*_);x.globalAlpha=R,x.fillStyle=_t.pink2,x.fillRect(ie(C)-E,ie(O)-3,E*2,1),x.fillRect(ie(C)-E,ie(O)+2,E*2,1),x.fillStyle=_t.water,x.fillRect(ie(C)-E,ie(O)-2,E*2,4),S%3===0&&(x.fillStyle=_t.white,x.fillRect(ie(C)-1,ie(O)-1,3,2))}if(x.globalAlpha=1,v<1&&g.n<22)for(let S=0;S<2;S++){g.n++;const _=t+(o-t)*v,A=n+(r-n)*v;I(_,A,.2,-l*y(.5,1.5)+y(-.8,.8),-u*y(.5,1.5)+y(-.8,.8),y(1,2.5),.45,S?_t.water:_t.pink1,2,8,!1)}if(!g.end&&v>=1){g.end=!0;for(let S=0;S<10;S++)I(o+l*.4,r+u*.4,.4,l*y(1.5,3.5)+y(-.8,.8),u*y(1.5,3.5)+y(-.8,.8),y(1,3),.5,S%2?_t.water:_t.white,2,9,!1);Q(4)}}}),T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const M=b*(i+.25),v=Math.min(1,M/i),[S,_]=P(t+(o-t)*v,n+(r-n)*v,.5);if(x.globalAlpha=v<1?1:Math.max(0,1-(M-i)/.25),Qv(x,S+d*10,_+m*10,d,m),v>=1){const A=(M-i)/.25,R=6+A*30;for(const C of[-6,0,6])for(let z=12;z<12+R;z+=2)nr(x,S+d*(10+z)-m*C,_+m*(10+z)+d*C,2,z>8+R?_t.pink1:_t.white)}x.globalAlpha=1}}),!0};function Zv(e,t,n,o,r){const i=ie(t),a=ie(n),s=(q(r)-.5)*.3;for(let u=0;u<o;u+=2){const f=ie(u*s),c=u<o*.5?6:4;e.fillStyle=_t.coral,e.fillRect(i+f-c/2,a-u-2,c,2),e.fillStyle=_t.deep,e.fillRect(i+f+c/2-2,a-u-2,2,2)}const l=q(r+3)<.5?-1:1;for(const[u,f,c]of[[.35+q(r+1)*.15,.38,l],[.58+q(r+2)*.12,.28,-l]]){const h=o*u,d=i+ie(h*s),m=o*f;let p=d,g=a-h;for(let x=0;x<m;x+=2)p=d+c*(3+x*.7),g=a-h-x,e.fillStyle=_t.coral2,e.fillRect(ie(p)-2,ie(g)-2,4,2);e.fillStyle=_t.pink1,e.fillRect(ie(p)-2,ie(g)-4,4,2)}e.fillStyle=_t.pink1,e.fillRect(i+ie(o*s)-2,a-o-3,4,3)}H.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,o=e.radius||3.2,r=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=o*(s?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+s*.4+y(-.15,.15);i.push({x:t+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+s*.13+y(0,.05),H:y(24,40)*(s?1:.85),seed:y(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};T({type:"custom",layer:"ground",dur:r,x:t,y:n,draw(s,l){const u=l*r;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=P(f.x,f.y);s.fillStyle=_t.hole,s.fillRect(ie(c)-6,ie(h)-2,12,4),s.fillRect(ie(c)-3,ie(h)-3,6,6)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=qv(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[g,x]=P(t+Math.cos(p)*h,n+Math.sin(p)*h,.45);s.globalAlpha=f*(1-m),nr(s,g,x,m<.15?3:2,m<.15?_t.white:c===1?_t.pink2:_t.water)}}s.globalAlpha=1}}),T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,l){const u=l*r;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,I(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,3.5),.5,Math.random()<.5?_t.coral:_t.orange,3,10,!1),I(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,4),.45,_t.water,2,10,!1));const c=a(f,u);if(c<2)continue;const[h,d]=P(f.x,f.y);Zv(s,h,d,ie(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=y(0,6.283),u=y(2,5);I(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,y(3,6),y(.7,1),[_t.water,_t.pink1,_t.white,_t.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return Q(9),!0};Qe.ajolote=e=>{const t=e.x,n=e.y,o=!!e.big,r=Z(e.uid);let i=1,a=0;if(r){const d=t-r.x,m=n-r.y,p=Math.hypot(d,m);p>.05&&(i=d/p,a=m/p)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,c=l/u;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=P(t,n,.5),x=(o?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)nr(d,p+f*M-c*b,g+c*M+f*b,2,M>x/2-4?_t.white:_t.pink2);d.globalAlpha=1}});const h=o?7:4;for(let d=0;d<h;d++)I(t,n,.45,i*y(.5,2)+y(-.7,.7),a*y(.5,2)+y(-.7,.7),y(1,2.5),.35,d%2?_t.pink1:_t.water,2,8,!1)};H.ajolote_Q_hit=e=>Gy(e.x,e.y);const Dt=Math.round,vt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function fo(e,t,n,o,r){e.fillStyle=r,e.fillRect(Dt(t-o/2),Dt(n-o/2),o,o)}const Sh=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Ku(e,t,n,o,r,i,a){const s=t.length,l=t[0].length,u=Dt(n-l*r/2),f=Dt(o-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<l;h++){const d=a[t[c][h]];d&&(e.fillStyle=d,e.fillRect(u+h*r,f+c*i,r,i))}}function Tf(e,t,n,o,r,i,a,s,l,u){const f=-r,c=o;for(let h=0;h<=i;h+=2){const d=h/i,m=t-o*h,p=n-r*h,g=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const b=x>g-2?s:l,M=x*.5;((h>>1)+(x>>1))%4!==3&&fo(e,m+f*x-o*M,p+c*x-r*M,2,b),((h>>1)+(x>>1)+2)%4!==3&&fo(e,m-f*x-o*M,p-c*x-r*M,2,b)}fo(e,m,p,2,u)}}function ju(e,t,n,o,r,i,a){const s=Dt(t),l=Dt(n);for(let u=0;u<o;u+=2){const f=Math.max(2,Dt(r*(1-u/o)/2)*2),c=Dt(u*i),h=a<0?l-u-2:l+u;e.fillStyle=vt.ice3,e.fillRect(s+c-f/2,h,f,2),e.fillStyle=vt.ice1,e.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}e.fillStyle=vt.snow,e.fillRect(s+Dt(o*i)-1,a<0?l-o-1:l+o-2,2,3)}function Ny(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(o,r,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function By(e,t){T({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,o){const[r,i]=P(e,t,.5),a=4+22*(1-(1-o)*(1-o));n.globalAlpha=1-o*o;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)fo(n,r+u*(a+h),i+f*(a+h),2,h>=c-2?vt.snow:vt.ice2)}if(o<.35){const s=Dt(10*(1-o/.35))+2;n.fillStyle=vt.snow,n.fillRect(Dt(r)-s/2,Dt(i)-s/2,s,s)}n.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,o){const[r,i]=P(e,t,.5);n.globalAlpha=1-o;for(let a=0;a<3;a++){const s=Math.sin(o*10+a*2),l=-Math.PI/2+s*.6;Tf(n,r+(a-1)*9+s*4,i-o*26-a*3,Math.cos(l),Math.sin(l),8,2,vt.ice3,vt.ice1,vt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const o=y(0,6.283),r=y(1.2,3);I(e,t,.5,Math.cos(o)*r,Math.sin(o)*r,y(.5,2),.4,n%2?vt.ice2:vt.ice3,2,6,!1)}}H.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,o=e.ux||1,r=e.uy||0,i=(o-r)*64,a=(o+r)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,c]=P(t,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=s+(h-2)*.32,m=8+u*28,p=Math.cos(d),g=Math.sin(d);Tf(l,f+p*m,c+g*m,p,g,10,3,vt.ice3,vt.ice1,vt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)I(t+o*.4,n+r*.4,.6,o*y(.5,1.5)+y(-.4,.4),r*y(.5,1.5)+y(-.4,.4),y(0,.6),.45,vt.snow,2,.5,!0);return!0};Pe.buho_Q=(e,t,n,o,r,i)=>{Ny(t,By);const a=Math.cos(r),s=Math.sin(r),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=o+s*12+a*l;pt(!0);const c=Wt();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,fo(c,n-a*h*6,o-s*h*6,8-h,h<3?vt.ice2:vt.ice3);c.globalAlpha=1,pt(!1),Tf(e,u,f,a,s,24,6,vt.ice3,vt.ice1,vt.snow),Math.random()<.55&&I(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(-.2,.3),.5,Math.random()<.5?vt.snow:vt.ice1,2,0,!0)};const Jv=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],tw=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];H.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,o=e.radius||2,r=2.4;T({type:"custom",layer:"ground",dur:r,x:t,y:n,draw(s,l){const u=Sh(l,.08,.75);ft(t,n,o*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),T({type:"custom",layer:"ground",add:!0,dur:r,x:t,y:n,draw(s,l){const u=Sh(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[o,40],[o*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const g=p/m*6.283+(d===o?f:-f),[x,b]=P(t+Math.cos(g)*d,n+Math.sin(g)*d);fo(s,x,b,2,vt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,g]=P(t+Math.cos(m)*o*.91,n+Math.sin(m)*o*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,Ku(s,Jv[d%4],p,g,2,2,{"#":vt.ice1})}const[c,h]=P(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),Ku(s,tw,c,h,3,2,{"#":vt.ice2,o:vt.amber,v:vt.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+y(-.3,.3),u=o*(.3+.55*Math.sqrt(q(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:y(16,28),lean:y(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,l){const u=l*r,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,m]=P(c.x,c.y),p=c.h*h*(1-f);p<2||(ju(s,d,m,p,8,c.lean,-1),ju(s,d+c.side*6,m+2,p*.6,6,c.lean+c.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const c of i)for(let h=0;h<2;h++)I(c.x,c.y,.25,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.45,h?vt.ice2:vt.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=y(0,6.283),u=y(0,o);I(t+Math.cos(l)*u,n+Math.sin(l)*u,y(.6,1.4),y(-.6,.6)+.8,y(-.6,.6)-.4,-.6,y(.6,1),Math.random()<.6?vt.snow:vt.ice1,2,-.5,!1,.98)}return!0};const $y=["......####","...#######","##########",".#########","..#.#.#.#."],ew=$y.map(e=>e.split("").reverse().join(""));H.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,o=e.ex||t,r=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:y(-45,45),vy:y(-55,-15),ph:y(0,6.283),L:Math.random()<.4?12:9});T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=P(t,n,.6);a.globalAlpha=Sh(s,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,m=f+c.vy*l+60*l*l,p=Math.PI/2+h*.9;Tf(a,d+Math.cos(p)*c.L*.5,m+Math.sin(p)*c.L*.5,Math.cos(p),Math.sin(p),c.L,3,vt.ice3,vt.ice1,vt.snow)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=P(t+(o-t)*f,n+(r-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Dt(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=vt.ice1,a.fillRect(Dt(c)-d,Dt(h),d*2,1),a.fillRect(Dt(c),Dt(h)-d,1,d*2)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:o,y:r,draw(a,s){const[l,u]=P(o,r,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,Ku(a,$y,l+f+15,u-s*6,3,3,{"#":vt.ice1}),Ku(a,ew,l-f-15,u-s*6,3,3,{"#":vt.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)I(t+y(-.3,.3),n+y(-.3,.3),y(.3,.9),y(-.8,.8),y(-.8,.8),y(-.3,.4),y(.6,1),vt.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=y(0,6.283),l=y(1,2.5);I(o,r,.6,Math.cos(s)*l,Math.sin(s)*l,y(0,1),.5,a%3?vt.ice1:vt.moon2,2,1,!0)}return!0};function h2(e,t,n,o,r,i,a){e.fillStyle=a;const s=Dt(t),l=Dt(n),u=o*.82;for(let f=-o;f<o;f+=2){const c=Math.sqrt(Math.max(0,o*o-f*f)),h=u*u-f*f,d=-c,m=c;if(h<=0){e.fillRect(s+Dt(d),l+Dt(f*i),Dt(m-d),Math.max(1,Dt(2*i)));continue}const p=Math.sqrt(h),g=r-p,x=r+p;g>d&&e.fillRect(s+Dt(d),l+Dt(f*i),Dt(Math.min(m,g)-d),Math.max(1,Dt(2*i))),x<m&&e.fillRect(s+Dt(x),l+Dt(f*i),Dt(m-x),Math.max(1,Dt(2*i)))}}const hl=[];function d2(e,t,n){T({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(o,r){const i=n*(.3+.8*r);o.globalAlpha=1-r;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=P(e+Math.cos(s)*i,t+Math.sin(s)*i);fo(o,l,u,a%3?2:3,a%2?vt.ice2:vt.moon)}o.globalAlpha=1}}),T({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(o,r){ft(e,t,n*.9,`rgba(220,245,255,${.5*(1-r)})`,`rgba(140,200,255,${.22*(1-r)})`,2,[4,6])}}),Q(9)}const Za=3,m2=Za-.3,p2=e=>(e=e-1,1+e*e*(2.4*e+1.4));function dl(e,t,n,o,r){if(!(o<1)){e.fillStyle=r;for(let i=-o;i<o;i+=2){const a=Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(Dt(t-a),Dt(n+i),Dt(a*2),2)}}}function E0(e,t,n,o,r){if(o<2)return;const i=o/2;e.fillStyle=r;for(let a=-i;a<i;a+=2){const s=o*Math.sqrt(Math.max(0,1-(a+1)/i*((a+1)/i)));e.fillRect(Dt(t-s),Dt(n+a),Dt(s*2),2)}}H.buho_R=e=>{if(e.type==="starfall"){const p=hl.findIndex(g=>Math.abs(g.x-e.x)<.3&&Math.abs(g.y-e.y)<.3);return p>=0?hl.splice(p,1):d2(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,o=e.radius||3.4,r=.85,i=1.75,a={x:t,y:n,t:0};hl.push(a),hl.length>6&&hl.shift(),T({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,b=Math.min(1,x/.15)*(x>r?Math.max(0,1-(x-r)/.6):1);p.globalAlpha=b;for(const[S,_,A]of[[o,56,1],[o*.9,48,-1]])for(let R=0;R<_;R++){if((R+(A>0?0:2))%4===3)continue;const C=R/_*6.283+x*.7*A,[z,O]=P(t+Math.cos(C)*S,n+Math.sin(C)*S);fo(p,z,O,2,A>0?vt.moon2:vt.ice2)}for(let S=0;S<12;S++){const _=S/12*6.283-x*.35,[A,R]=P(t+Math.cos(_)*o*.62,n+Math.sin(_)*o*.62),[C,z]=P(t+Math.cos(_)*o*.82,n+Math.sin(_)*o*.82);for(let O=0;O<=4;O++)fo(p,A+(C-A)*O/4,R+(z-R)*O/4,2,vt.moon)}const[M,v]=P(t,n);if(h2(p,M,v,30,12,.5,vt.moon),x>.45){const S=Math.min(1,(x-.45)/.1);p.globalAlpha=b*S,fo(p,M-26,v-3,4,vt.amber),fo(p,M+26,v-3,4,vt.amber)}p.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,b=Math.min(1,x/.2)*(x>r?Math.max(0,1-(x-r)/.5):1),[M,v]=P(t,n,Za+1.7),S=p.createRadialGradient(M,v,4,M,v,60);S.addColorStop(0,`rgba(200,190,255,${.45*b})`),S.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=S,p.fillRect(Dt(M)-60,Dt(v)-60,120,120),p.globalAlpha=b,h2(p,M,v,20,9,1,vt.moon),p.globalAlpha=1}});const s=ka(e,r),l=()=>w.T-s.t0,u=Array.from({length:26},(p,g)=>{const x=y(0,6.283),b=Math.sqrt(Math.random())*o*.82,M=1-b/o;return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,z:Za+y(0,.3)+M*.35,s:Dt(y(18,26)+M*16),dl:b/o*.25+g*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,g)=>p.x+p.y-(g.x+g.y)||p.z-g.z),f=Array.from({length:34},()=>{const p=y(0,6.283),g=Math.sqrt(Math.random())*o*.9;return{x:t+Math.cos(p)*g,y:n+Math.sin(p)*g,ph:Math.random(),sp:y(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),c=p=>p>0?0:$l(-p/.35),h=(p,g,x)=>{for(const b of f){if(b.back!==g)continue;const M=(l()*b.sp+b.ph)%1,[v,S]=P(b.x+Math.sin(l()*2+b.ph*9)*.15,b.y,Za*(1-M));p.globalAlpha=x*(g?.6:.9)*Math.min(1,(1-M)*5,M*8),fo(p,v,S,2,vt.snow),p.fillStyle=vt.ice2,p.fillRect(Dt(v)-1,Dt(S)-4,1,2)}};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g,x){const b=io(s),M=c(b);if(M>=1){x.t=x.dur+1;return}const v=Math.min(1,l()/.3)*(1-M),[S,_]=P(t,n),A=o*N.HW*Math.SQRT2*.92;p.globalAlpha=.5*v,p.fillStyle=Vt(p,vt.night,8);for(let R=-A/2;R<A/2;R+=2){const C=A*Math.sqrt(Math.max(0,1-(2*(R+1)/A)**2));p.fillRect(Dt(S-C),Dt(_+R),Dt(C*2),2)}h(p,!0,v),Mi(s,t,n,o*1.05,10937599,.5*v)}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g,x){const b=io(s),M=c(b);if(M>=1){x.t=x.dur+1;return}const v=l(),S=1-M;h(p,!1,S*Math.min(1,v/.3));const _=p2($l(v/.35)),[A,R]=P(t,n,Za+M*.3),C=Dt(o*.8*N.HW*Math.SQRT2*_*(1+M*.3));for(let z=0;z<4;z++){p.globalAlpha=S*(z===0?.8:.96),z===0?E0(p,A+3,R+8,C,Vt(p,vt.ice3,12)):z===1?(E0(p,A,R,C+2,Vt(p,vt.ice2,10)),E0(p,A,R,C-2,vt.ice2)):z===2&&E0(p,A-2,R-6,C-10,vt.ice1);for(const O of u){const E=p2($l((v-O.dl)/.3));if(E<=.02)continue;const[U,G]=P(O.x+O.dx*M*1.2,O.y+O.dy*M*1.2,O.z+M*.4),Y=Dt(O.s*E*(1+M*.3));z===0?dl(p,U+2,G+5,Y,Vt(p,vt.ice3,12)):z===1?(dl(p,U,G,Y+1,Vt(p,vt.ice2,10)),dl(p,U,G,Y-2,vt.ice2)):z===2?dl(p,U-1,G-Y*.22,Dt(Y*.8),vt.ice1):O.z>Za+.42&&dl(p,U-Y*.25,G-Y*.5,Dt(Y*.32),vt.snow)}}}});const d=[];for(let p=0;p<14;p++){const g=y(0,6.283),x=o*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(g)*x,y:n+Math.sin(g)*x,fall:r-.12+p*.025,ap:.08+p*.025,L:y(18,28),hit:!1})}d.sort((p,g)=>p.x+p.y-(g.x+g.y));const m={boom:!1};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(const b of d){const M=(x-b.fall)/.12;if(M>=1){if(!b.hit){b.hit=!0;for(let C=0;C<3;C++)I(b.x,b.y,.1,y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),.45,C?vt.ice2:vt.snow,2,10,!0)}const R=(x-b.fall-.12)/.2;if(R<1){const[C,z]=P(b.x,b.y),O=Dt(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=vt.snow,p.fillRect(Dt(C)-O,Dt(z)-1,O*2,2),p.fillRect(Dt(C)-1,Dt(z)-O/2,2,O),p.globalAlpha=1}continue}const v=Math.min(1,Math.max(0,(x-b.ap)/.25));if(v<=0)continue;const S=M>0?m2*(1-M*M):m2+Math.sin(x*9+b.x)*.03,[_,A]=P(b.x,b.y,S);p.globalAlpha=v,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(Dt(_)-1,Dt(A)-b.L-30,2,28)),ju(p,_,A-b.L,b.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=r&&(m.boom=!0,a.t===0&&(a.t=1,d2(t,n,o)))}});for(let p=0;p<10;p++){const g=y(0,6.283),x=y(0,o);I(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1,2),.7,p%2?vt.moon2:vt.ice1,2,0,!0)}return!0};function Hy(e,t,n){const o=[],r=n?4:3;for(let i=0;i<r;i++)o.push({ox:y(-9,9),oy:y(-3,4),h:y(8,n?16:12),lean:y(-.35,.35)});T({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=P(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of o)ju(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=y(0,6.283),s=y(.8,2);I(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,y(.5,1.8),.35,i%2?vt.snow:vt.ice2,2,5,!0)}}const Wy=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&Wy.push([t,e,n>3.6?1:0])}Pe.buho_A=(e,t,n,o,r,i)=>{Ny(t,(h,d)=>Hy(h,d,!1));const a=Math.cos(r),s=Math.sin(r);pt(!0);const l=Wt();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,fo(l,n-a*h*5,o-s*h*5,6-h,vt.moon2);l.globalAlpha=1,pt(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,m]of Wy)fo(e,n+(h*f-d*c)*2,o+(h*c+d*f)*2,3,m?vt.ice3:vt.ice1);fo(e,n+-3*f*2,o+-3*c*2,2,vt.snow),Math.random()<.45&&I(t.x,t.y,t.z||.45,0,0,-.2,.35,vt.ice1,2,0,!0)};Qe.buho=e=>Hy(e.x,e.y,!!e.big);H.buho_Q_hit=e=>By(e.x,e.y);const B=Math.round,te=Math.PI*2;let wt=0,St=0;function oe(e,t,n=0){wt=(e-t)*N.HW+N.OX,St=(e+t)*N.HH-n*N.ZK}function $e(e,t,n,o,r){e.fillStyle=r,e.fillRect(B(t-o/2),B(n-o/2),o,o)}function fa(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(B(t+(o-t)*l/s-i/2),B(n+(r-n)*l/s-i/2),i,i)}function or(e,t,n,o,r=1){for(let i=-o;i<o;i+=2){const a=2*Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(B(t-a/2),B(n+i*r),B(a),Math.max(1,B(2*r)))}}const Ln=e=>e<0?0:e>1?1:e,Hn=e=>1-(1-e)*(1-e),qy=()=>N.HW*Math.SQRT2,bt={w:"#f4fdff",l:"#c4f6ff",m:"#6ee2f4",d:"#2aa6c8",k:"#16608a",x:"#0c3450"},Fe={w:"#fbf4e2",l:"#e6d6b0",m:"#bca67a",d:"#7a6646"},rr={l:"#ffd890",m:"#f0a040",d:"#b0581e"},xe={l:"#d6cfc0",m:"#a49c8a",d:"#746c5c",k:"#4a443a",x:"#2e2a24"},Ss=["#8ac050","#5a8a34"],eo={w:"#eef4d8",l:"#d8d070",m:"#a8a030",d:"#6a6a20",k:"#2e3018",eye:"#d0402a"},cn={k:"#120c08",d:"#2a1c12",m:"#4a3220",l:"#7a5a3a"},zo=7267060,Rf=15769664;Tn.spirit_bolt=[bt.w,bt.l,bt.m,bt.d];Tn.spirit=[bt.w,bt.l,bt.m,bt.d];Tn.swarm=[eo.w,eo.l,eo.m,eo.d];Tn.behemoth=[Fe.w,bt.l,bt.m,rr.m];const Cf={Q:4,W:2,E:10},ss=new Map;function Vy(e){const t=window.SIM&&window.SIM.HEROES,n=t&&t.cabra;return n&&n.abil?n.abil[e]:null}function Xd(e,t){const n=w.game;if(!n||!n.units)return[];const o=Vy(t),r=o&&o.petSprite,i=o&&o.count||Cf[t],a=[];for(const l of n.units){if(l.dead||!l.pet||l.illusion||ss.has(l.id)||e.team&&l.team!==e.team||l.owner&&e.uid&&l.owner.id!==e.uid)continue;const u=Math.hypot(l.x-e.x,l.y-e.y);u>2.4||a.push([r&&l.sprite===r?0:1,u,l.id])}a.sort((l,u)=>l[0]-u[0]||l[1]-u[1]);const s=a.slice(0,i).map(l=>l[2]);ss.size>300&&ss.clear();for(const l of s)ss.set(l,t);return s}function Gd(e,t,n,o,r){const i=[];for(const a of e){const s=Z(a);s&&i.push([s.x,s.y])}for(let a=i.length;a<n;a++){const s=a/n*te+r;i.push([t.x+Math.cos(s)*o,t.y+Math.sin(s)*o])}return i}function Yy(e,t,n,o){T({type:"custom",layer:"ground",dur:t*1.3+2,x:0,y:0,nt:0,draw(r,i,a){const s=Z(e);if(!s||s.dead){a.t=a.dur+1;return}w.T>=a.nt&&(a.nt=w.T+n,o(s))}})}function _h(e,t,n,o,r,i){for(let a=0;a<r;a+=2){const s=a/r,l=o*Math.pow(1-s,.8)*(s<.2?.6+s*2:1),u=Math.sin(s*5+i)*s*o*.6;l<.6||(e.fillStyle=bt.d,e.fillRect(B(t+u-l),B(n-a-2),Math.max(1,B(l*2)),2),l>1.5&&(e.fillStyle=bt.m,e.fillRect(B(t+u-l*.62),B(n-a-2),Math.max(1,B(l*1.24)),2)),s<.6&&l>2&&(e.fillStyle=bt.l,e.fillRect(B(t+u-l*.3),B(n-a-2),Math.max(1,B(l*.6)),2)),s<.3&&l>2.5&&(e.fillStyle=bt.w,e.fillRect(B(t+u-1),B(n-a-2),2,2)))}}function Ky(e,t,n,o,r,i,a,s){for(const f of[-1,1]){const c=f*.42,h=-.12;for(let d=0;d<26*r;d++){const m=Math.PI+d/26*te,p=.36*(1-d/26*.75),g=c+f*Math.cos(m)*p,x=h+Math.sin(m)*p;$e(e,t+g*o,n+x*o*.5,d<26*.6?i+1:i,d<26*.6?a:s)}}const u=Ln(r*1.6-.3);for(let f=0;f<=8*u;f++)$e(e,t,n+(-.2+f*.07)*o*.5,i,a);u>.9&&($e(e,t-.12*o,n+.05*o*.5,i,s),$e(e,t+.12*o,n+.05*o*.5,i,s))}const y2=[3735,3050,1493,3315,2457,1910,3879,756];function Nd(e,t,n,o,r,i){const a=y2[o%y2.length];e.fillStyle=i;for(let s=0;s<12;s++)a>>s&1&&e.fillRect(B(t+(s%3-1)*r-r/2),B(n+((s/3|0)-1.5)*r-r/2),r,r)}function jy(e,t,n,o,r,i,a,s){oe(t,n);const l=wt,u=St,f=Ue(o),c=f*.5,h=72,d=54;e.globalAlpha=a;for(let m=0;m<h;m++){const p=m/h;if(p>r)break;const g=p*te+i;$e(e,l+Math.cos(g)*f,u+Math.sin(g)*c,3,m%9===0?bt.w:bt.m)}for(let m=0;m<d;m++){const p=m/d;if(p>r)break;const g=-p*te-i*.6;$e(e,l+Math.cos(g)*f*.76,u+Math.sin(g)*c*.76,2,rr.m)}for(let m=0;m<12;m++){const p=m/12;if(p>r)break;const g=p*te+i*.5,x=l+Math.cos(g)*f*.88,b=u+Math.sin(g)*c*.88;e.globalAlpha=a*(.6+.4*s*(.5+.5*Math.sin(w.T*6+m))),Nd(e,x,b,m,2,m&1?bt.l:Fe.w)}e.globalAlpha=a*.9,Ky(e,l,u,f*.62,r,2,bt.l,rr.l)}function Qu(e,t,n,o,r,i,a,s=0){oe(t,n);const l=wt,u=St,f=Ue(o),c=f*.5;for(let h=0;h<r;h++){const d=h/r*te+s;$e(e,l+Math.cos(d)*f,u+Math.sin(d)*c,i,a)}}function n0(e,t,n,o,r,i,a,s){let l=t,u=n;oe(l,u);let f=wt,c=St;for(let h=1;h<=4;h++){const d=o+(q(i+h*3.1)-.5)*.9,m=r/4;l+=Math.cos(d)*m,u+=Math.sin(d)*m,oe(l,u),fa(e,f,c,wt,St,Math.max(1,a-(h>2?1:0)),s),f=wt,c=St}}H.cabra_Q=e=>{const t=e.x,n=e.y,o=e.dur||10,r=Math.random()*te,i=Xd(e,"Q"),a=Gd(i,e,Cf.Q,.85,r);T({type:"custom",layer:"ground",add:!0,dur:1,x:t,y:n,draw(f,c){oe(t,n);const h=wt,d=St;f.globalAlpha=c>.6?(1-c)/.4:1,Ky(f,h,d,qy()*1.5,Hn(Ln(c/.35)),2,bt.m,bt.l),Qu(f,t,n,1.15,30,2,bt.d,c*2)}});const s=16,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=Math.random()*te,u[f]=y(.2,1.6);T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(f,c){const h=Hn(c);for(let d=0;d<s;d++){const m=a[d%a.length];for(let p=0;p<3;p++){const g=Math.max(0,h-p*.06),x=l[d]+g*2.4,b=2.2*(1-g);oe(m[0]+Math.cos(x)*b,m[1]+Math.sin(x)*b,.45+u[d]*(1-g)),f.globalAlpha=(1-p/3)*(c>.85?(1-c)/.15:1),$e(f,wt,St,p?2:3,p?bt.m:bt.w)}}}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(f,c){for(let h=0;h<a.length;h++){const d=Ln((c-h*.06)/.85);if(d<=0||d>=1)continue;const m=i[h]?Z(i[h]):null,p=m?m.x:a[h][0],g=m?m.y:a[h][1];oe(p,g,.05);const x=wt,b=St;if(d<.45){const M=d/.45;f.globalAlpha=1,_h(f,x,b,6+4*M,B(14+46*M),w.T*14+h)}else{const M=(d-.45)/.55;f.globalAlpha=1-M,_h(f,x,b-30*M,7*(1-M)+2,B(40*(1-M)+6),w.T*14+h)}if(d>.4){const M=(d-.4)/.6;f.globalAlpha=1-M,Qu(f,p,g,.2+M*.55,14,2,h&1?bt.l:bt.w,h)}}}});for(let f=0;f<a.length;f++){const c=a[f];for(let h=0;h<5;h++)I(c[0],c[1],.3,y(-.8,.8),y(-.8,.8),y(1,2.4),y(.4,.7),h&1?bt.l:bt.w,2,-.6,!0);ht(c[0],c[1],1.2,zo,.8,.6)}ht(t,n,2.4,zo,.7,.8);for(const f of i)Yy(f,o,.1,c=>{ht(c.x,c.y,1.3,zo,.42+.12*Math.sin(w.T*9+f),.22),Math.random()<.3&&I(c.x+y(-.15,.15),c.y+y(-.15,.15),.55,0,0,y(.6,1.1),.6,Math.random()<.5?bt.l:bt.m,2,-.3,!0)});Q(1.5)};function nw(e){const t=e.x,n=e.y,o=Math.random()*te;T({type:"custom",layer:"top",add:!0,dur:1,x:t,y:n,draw(r,i){const a=i*1;oe(t,n,.15);const s=wt,l=St;if(a<.4){const u=a/.4;((w.T*24|0)%3!==0||u<.3)&&(r.globalAlpha=1-u*.5,_h(r,s,l,7*(1-u)+2,B(34*(1-u)+8),w.T*16))}if(a>.2){const u=(a-.2)/.8;for(let f=0;f<10;f++){const c=o+f/10*te+u*5,h=.12+u*.45*(.6+.4*q(f+o)),d=.4+u*(1.4+q(f*3+o)*.8);oe(t+Math.cos(c)*h,n+Math.sin(c)*h,d),r.globalAlpha=(1-u)*(f&1?.8:1),$e(r,wt,St,f%3===0?3:2,f%3===0?bt.w:bt.m)}}a<.3&&(r.globalAlpha=1-a/.3,Qu(r,t,n,.15+a*1.2,12,2,bt.l,o))}}),ht(t,n,1.1,zo,.6,.5)}H.cabra_W=e=>{const t=Math.random()*99,n=e.dur||12,o=Xd(e,"W"),r=Gd(o,e,Cf.W,.8,t);for(let i=0;i<r.length;i++){const[a,s]=r[i],l=t+i*17,u=i*.06,f=7,c=new Float32Array(f),h=new Float32Array(f);for(let v=0;v<f;v++)c[v]=v/f*te+q(l+v)*.6,h[v]=.6+q(l+v*7)*.5;T({type:"custom",layer:"ground",dur:2.2,delay:u,x:a,y:s,draw(v,S){const _=S*2.2,A=Hn(Ln(_/.14));v.globalAlpha=_>1.6?(2.2-_)/.6:1;for(let O=0;O<f;O++)n0(v,a,s,c[O],h[O]*A,l+O*11,3,xe.x);if(_<1.2){v.globalAlpha=(1-_/1.2)*.95;for(let O=0;O<f;O++)n0(v,a,s,c[O],h[O]*A*.85,l+O*11,1,O&1?bt.m:rr.m)}const R=Ln((_-.1)/.25);if(R<=0)return;v.globalAlpha=(_>1.2?Math.max(0,(2.2-_)/1):1)*.9;const C=.62*R,z=[[C,0],[0,C],[-C,0],[0,-C]];for(let O=0;O<4;O++){oe(a+z[O][0],s+z[O][1]);const E=wt,U=St;oe(a+z[(O+1)%4][0],s+z[(O+1)%4][1]),fa(v,E,U,wt,St,2,bt.d),Nd(v,E,U,O+i*4,2,bt.l)}}}),T({type:"custom",layer:"ground",dur:.32,delay:u,x:a,y:s,draw(v,S){oe(a,s);const _=wt,A=St,R=Math.sin(Math.min(1,S*1.6)*Math.PI)*14,C=B(Ue(.55)*(.7+.3*S));v.globalAlpha=1-S*S,v.fillStyle=cn.d,or(v,_,A,C,.5);for(let z=0;z<R;z+=2){const O=C*Math.sqrt(1-z/(R+1)*(z/(R+1)))*.9;v.fillStyle=z>R-4?cn.l:cn.m,v.fillRect(B(_-O),B(A-z),B(O*2),2)}}});const d=10,m=new Float32Array(d),p=new Float32Array(d),g=new Float32Array(d);for(let v=0;v<d;v++)m[v]=v/d*te+q(l+v*5)*.8,p[v]=.9+q(l+v*9)*1.4,g[v]=3.2+q(l+v*13)*2.2;T({type:"custom",layer:"top",dur:1.2,delay:u,x:a,y:s,draw(v,S){const _=S*1.2;for(let A=0;A<d;A++){const R=Math.min(_,g[A]/6),C=Math.max(0,g[A]*R-6*R*R),z=p[A]*R;oe(a+Math.cos(m[A])*z,s+Math.sin(m[A])*z,C+.05);const O=A%3===0,E=(_*14+A|0)&1,U=(E?13:9)+(O?4:0),G=(E?8:12)+(O?2:0);v.globalAlpha=_>.85?(1.2-_)/.35:1,v.fillStyle=xe.k,v.fillRect(B(wt-U/2-1),B(St-G/2-1),U+2,G+2),v.fillStyle=xe.m,v.fillRect(B(wt-U/2),B(St-G/2),U,G),v.fillStyle=xe.l,v.fillRect(B(wt-U/2),B(St-G/2),U,3),v.fillStyle=xe.d,v.fillRect(B(wt+U/2-3),B(St-G/2+3),3,G-3),A%3===0&&(v.fillStyle=Ss[0],v.fillRect(B(wt-U/2),B(St-G/2),5,3),v.fillStyle=Ss[1],v.fillRect(B(wt-U/2),B(St-G/2+3),3,2)),A%4===1&&_<.6&&(v.fillStyle=bt.l,v.fillRect(B(wt-1),B(St),3,2))}}});const x=12,b=new Float32Array(x),M=new Float32Array(x);for(let v=0;v<x;v++)b[v]=v/x*te+q(l+v*2.3)*.5,M[v]=.7+q(l+v*4.1)*.6;T({type:"custom",layer:"top",dur:.8,delay:u,x:a,y:s,draw(v,S){const _=Hn(S);for(let A=0;A<x;A++){const R=(.25+1*_)*M[A];oe(a+Math.cos(b[A])*R,s+Math.sin(b[A])*R,.1+S*.35*M[A]);const C=B((11-S*6)*M[A]);v.globalAlpha=(1-S)*.55,v.fillStyle=A&1?Fe.m:xe.m,v.fillRect(B(wt-C/2),B(St-C/2),C,B(C*.7)),v.fillStyle=Fe.l,v.fillRect(B(wt-C/2),B(St-C/2),B(C*.5),2),v.fillStyle=xe.d,v.fillRect(B(wt-C/2),B(St+C*.2),C,2)}}});for(let v=0;v<12;v++){const S=Math.random()*te;I(a,s,.2,Math.cos(S)*y(.6,2),Math.sin(S)*y(.6,2),y(2,4),y(.5,.8),v%4===0?Ss[v&1]:v&1?xe.m:xe.d,3,10,!1,.95)}ht(a,s,1.6,Rf,.55,.5),ht(a,s,1.2,zo,.5,1)}for(const i of o)Yy(i,n,.12,a=>ht(a.x,a.y,1,zo,.22,.26));Q(5)};function ow(e){const t=e.x,n=e.y,o=Math.random()*99,r=10,i=new Float32Array(r),a=new Float32Array(r),s=new Float32Array(r),l=new Float32Array(r),u=new Float32Array(r);for(let f=0;f<r;f++)i[f]=y(-.22,.22),a[f]=y(-.22,.22),s[f]=y(.15,1),l[f]=y(.4,1.2),u[f]=Math.random()*te;T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(f,c){const h=c*1;for(let d=0;d<r;d++){const m=Math.sqrt(2*s[d]/9);let p;if(h<m)p=s[d]-4.5*h*h;else{const b=9*m*.35,M=h-m;p=Math.max(0,b*M-4.5*M*M)}const g=l[d]*Math.min(h,m*1.8)*.5;oe(t+i[d]+Math.cos(u[d])*g,n+a[d]+Math.sin(u[d])*g,p);const x=d<4?7:5;f.globalAlpha=h>.75?(1-h)/.25:1,f.fillStyle=xe.k,f.fillRect(B(wt-x/2-1),B(St-x/2-1),x+2,x+2),f.fillStyle=d&1?xe.m:xe.d,f.fillRect(B(wt-x/2),B(St-x/2),x,x),f.fillStyle=xe.l,f.fillRect(B(wt-x/2),B(St-x/2),x-2,2)}if(h<.3){oe(t,n,.6),f.globalAlpha=1-h/.3;const d=B(8*(1-h/.3))+2;$e(f,wt,St,d,bt.l)}}}),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(f,c){oe(t,n);const h=wt,d=St,m=Ln((c-.45)/.55);f.globalAlpha=1-m,f.fillStyle=xe.k,or(f,h,d+2,18,.45);for(let p=0;p<9;p++){const g=q(o+p)*te,x=q(o+p*3)*14,b=h+Math.cos(g)*x,M=d+Math.sin(g)*x*.45-3+m*4;f.fillStyle=p&1?xe.m:xe.d,f.fillRect(B(b-3),B(M-2),6,4),f.fillStyle=xe.l,f.fillRect(B(b-3),B(M-2),3,1)}}}),T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(f,c){for(let h=0;h<6;h++){const d=o+h/6*te;oe(t+Math.cos(d)*(.2+c*.6),n+Math.sin(d)*(.2+c*.6),.2+c*.4),f.globalAlpha=(1-c)*.6,$e(f,wt,St,B(12-c*8),h&1?xe.l:Fe.l)}}});for(let f=0;f<8;f++)I(t+y(-.2,.2),n+y(-.2,.2),y(.3,.9),y(-1,1),y(-1,1),y(.5,1.5),y(.5,.8),f&1?xe.m:Ss[1],2,9,!1,.95);Q(1.5)}function Qy(e,t,n,o,r){const i=(a,s,l,u,f)=>{e.fillStyle=f,e.fillRect(B(t+(o>0?a:-a-l)*2),B(n+s*2),l*2,u*2)};r&&(i(-3,-5,4,3,eo.w),i(-1,-4,3,2,eo.w)),i(-5,-1,2,2,eo.d),i(-3,-1,5,2,eo.m),i(-3,-1,4,1,eo.l),i(2,-2,2,3,eo.d),i(3,-2,1,1,eo.eye),i(-2,1,1,2,eo.k),i(-4,2,2,1,eo.k),i(1,1,1,1,eo.k),r||i(-5,-2,6,1,eo.w)}H.cabra_E=e=>{const t=e.x,n=e.y,o=Math.random()*te,r=Math.cos(o),i=Math.sin(o),a=Xd(e,"E"),s=Gd(a,e,Cf.E,.9,o),l=.85,u=1.6;T({type:"custom",layer:"ground",dur:u,x:t,y:n,draw(m,p){const g=p*u,x=g<.15?Hn(g/.15):g>1.2?1-Ln((g-1.2)/.4):1;if(x<=0)return;m.globalAlpha=1;const b=16,M=-i,v=r,S=(A,R,C)=>{const z=C/b*2-1,O=1+(q(C*1.7+o+R)-.5)*.8,E=.26*(1-z*z)*O*x*A;oe(t+r*z*l*(.75+.25*A)+M*E*R,n+i*z*l*(.75+.25*A)+v*E*R)},_=(A,R)=>{m.beginPath(),S(A,1,0),m.moveTo(B(wt),B(St));for(let C=1;C<=b;C++)S(A,1,C),m.lineTo(B(wt),B(St));for(let C=b-1;C>=0;C--)S(A,-1,C),m.lineTo(B(wt),B(St));m.closePath(),m.fillStyle=R,m.fill()};_(1.55,cn.l),_(1.25,cn.m),_(1,cn.k),_(.42,rr.d),_(.18,rr.m);for(let A=1;A<b;A+=3)for(const R of[-1,1])S(1.7,R,A),m.fillStyle=A&1?cn.m:cn.l,m.fillRect(B(wt-3),B(St-3),6,4),m.fillStyle=cn.d,m.fillRect(B(wt-3),B(St+1),6,2)}}),T({type:"custom",layer:"ground",add:!0,dur:1.3,x:t,y:n,draw(m,p){oe(t,n),m.globalAlpha=(1-p)*(.6+.4*Math.sin(w.T*20)),m.fillStyle=rr.m,or(m,wt,St,B(10+6*p),.4)}});const f=18,c=new Float32Array(f),h=new Float32Array(f),d=new Float32Array(f);for(let m=0;m<f;m++)c[m]=m*.025+y(0,.02),h[m]=y(1,2),d[m]=y(-.7,.7);T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(m,p){const g=p*1.15,x=w.T*28|0;for(let b=0;b<f;b++){const M=Ln((g-c[b])/.6);if(M<=0||M>=1&&g-c[b]>.72)continue;const v=s[b%s.length],S=t+r*d[b]*l,_=n+i*d[b]*l,A=Hn(M),R=Math.sin(M*14+b)*.12*(1-M),C=S+(v[0]-S)*A+R,z=_+(v[1]-_)*A-R,O=Math.sin(M*Math.PI)*h[b]+.35*M;oe(C,z,O);const E=wt,U=St;oe(S+(v[0]-S)*Math.max(0,A-.05),_+(v[1]-_)*Math.max(0,A-.05),Math.sin(Math.max(0,M-.05)*Math.PI)*h[b]);const G=E>=wt?1:-1;m.globalAlpha=M>=1?1-(g-c[b]-.6)/.12:1,M<.9&&(m.fillStyle=cn.m,m.fillRect(B(wt-1),B(St-1),2,2)),Qy(m,E,U,G,(x+b&1)===1)}}});for(let m=0;m<12;m++)I(t+r*y(-.6,.6),n+i*y(-.6,.6),.1,y(-1.4,1.4),y(-1.4,1.4),y(1.5,3.2),y(.4,.7),m%3?cn.m:cn.l,3,9,!1,.94);for(let m=0;m<6;m++)I(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1.2),y(.3,.5),rr.l,2,2,!0);ht(t,n,1.6,Rf,.7,1.2),Q(2)};function rw(e){const t=e.x,n=e.y,o=3,r=Math.random()*te,i=new Float32Array(o),a=new Float32Array(o);for(let s=0;s<o;s++)i[s]=r+s/o*te+y(-.5,.5),a[s]=y(1.6,2.6);T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(s,l){const u=w.T*30|0;for(let f=0;f<o;f++){const c=l*l,h=a[f]*c+Math.sin(l*12+f)*.05;oe(t+Math.cos(i[f])*h,n+Math.sin(i[f])*h,.35+l*1.8+Math.sin(l*20+f*2)*.06),s.globalAlpha=l>.65?(1-l)/.35:1,Qy(s,wt,St,Math.cos(i[f])-Math.sin(i[f])>=0?1:-1,(u+f&1)===1)}}}),I(t,n,.3,y(-.6,.6),y(-.6,.6),y(.8,1.5),.4,eo.d,2,6,!1,.94)}const Ah=4.6,g2=[1,.85,.65,.45,.28,.14];let x2=null,M2=null,b2=[],v2=[];function iw(e){return x2!==e&&(x2=e,b2=[{u0:0,fill:Vt(e,bt.k,6),a:.6},{u0:.6,fill:Vt(e,bt.d,8),a:.65},{u0:.88,fill:Vt(e,bt.m,11),a:.75}]),b2}function aw(e){return M2!==e&&(M2=e,v2=[{u0:0,fill:Vt(e,bt.l,3),a:.55},{u0:.6,fill:Vt(e,bt.m,5),a:.6},{u0:.88,fill:Vt(e,bt.w,10),a:.8}]),v2}function w2(e,t,n,o,r,i,a){for(let s=0;s<10;s++){const l=s/10*te+a*.8,u=Math.cos(l),f=Math.sin(l);if(u+f>0!==i)continue;const c=(a*1.3+q(s*3.3))%1*Ah;oe(t+u*o,n+f*o,c),e.globalAlpha=r*(1-c/Ah)*(i?1:.6),Nd(e,wt,St,s,2,s&1?Fe.w:bt.w)}}H.cabra_R=e=>{const t=e.x,n=e.y,o=1.5,r=e.radius||3.4,i=.2,a=Math.random()*99;e.uid&&Bd(e.uid);const s=w.T,l=()=>w.T-s,u=g=>g<.12?o*.95*Hn(g/.12):o*.95*Math.max(0,1-(g-.12)/1.5)**1.4,f=g=>g<.05?g/.05:g>1.2?Math.max(0,1-(g-1.2)/.42):1,c=g=>Ah*Hn(Ln(g/.16));T({type:"custom",layer:"ground",add:!0,dur:3.4,x:t,y:n,draw(g,x){const b=x*3.4,M=b>2.4?3.4-b:1;jy(g,t,n,o,Hn(Ln(b/.25)),b*.35+a,M,b<1.4?1:.4)}}),T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(g,x,b){const M=l(),v=u(M),S=f(M);if(S<=0||v<.05){M>.3&&(b.t=b.dur+1);return}oe(t,n),Xr(g,wt,St,Ue(v),Ue(v*.92),lr(c(M)),!1,iw(g),g2,S),w2(g,t,n,v,S,!1,M)}}),T({type:"custom",layer:"top",add:!0,dur:1.8,x:t,y:n,draw(g,x,b){const M=l(),v=u(M),S=f(M);if(S<=0||v<.05){M>.3&&(b.t=b.dur+1);return}oe(t,n),Xr(g,wt,St,Ue(v),Ue(v*.92),lr(c(M)),!0,aw(g),g2,S*.85),w2(g,t,n,v,S,!0,M),g.globalAlpha=S*.8,g.fillStyle=bt.w;const _=c(M);for(let A=0;A<18;A++){const R=A/18*te+M*2;oe(t+Math.cos(R)*v*.92,n+Math.sin(R)*v*.92,_),g.fillRect(B(wt-1),B(St-1),3,2)}}}),T({type:"custom",layer:"ground",add:!0,delay:i,dur:.35,x:t,y:n,draw(g,x){oe(t,n),g.globalAlpha=(1-x)*.75,g.fillStyle=Vt(g,Fe.w,x<.3?8:4),or(g,wt,St,B(Ue(o)*(.6+x*.7)),.5),g.globalAlpha=1-x,g.fillStyle=rr.l;const b=Ue(o)*(.6+x*.7);for(let M=0;M<40;M++){const v=M/40*te;g.fillRect(B(wt+Math.cos(v)*b-2),B(St+Math.sin(v)*b*.5-2),4,4)}}}),T({type:"custom",layer:"ground",delay:i,dur:.75,x:t,y:n,draw(g,x){const b=o*.9+(r-o*.9)*Hn(x);oe(t,n);const M=wt,v=St,S=Ue(b),_=S*.5;g.globalAlpha=(1-x)*.85;for(let A=0;A<56;A++){const R=A/56*te;$e(g,M+Math.cos(R)*S,v+Math.sin(R)*_-x*8,B(11-x*7),A&1?Fe.l:xe.l)}g.globalAlpha=1-x;for(let A=0;A<56;A+=2){const R=A/56*te+.05;$e(g,M+Math.cos(R)*S*.94,v+Math.sin(R)*_*.94,3,rr.l)}}});const h=12,d=new Float32Array(h),m=new Float32Array(h),p=Math.max(.6,r-o*.95);for(let g=0;g<h;g++)d[g]=g/h*te+q(a+g)*.4,m[g]=p*(.55+q(a+g*5)*.45);T({type:"custom",layer:"ground",delay:i,dur:2.8,x:t,y:n,draw(g,x){const b=x*2.8,M=Hn(Ln(b/.12));g.globalAlpha=b>2?(2.8-b)/.8:1;for(let v=0;v<h;v++)n0(g,t+Math.cos(d[v])*o*.95,n+Math.sin(d[v])*o*.95,d[v],m[v]*M,a+v*7,4,xe.x);if(b<1.4){g.globalAlpha=1-b/1.4;for(let v=0;v<h;v++)n0(g,t+Math.cos(d[v])*o*.95,n+Math.sin(d[v])*o*.95,d[v],m[v]*M*.9,a+v*7,2,v%3?rr.m:rr.l)}}}),T({type:"custom",layer:"top",delay:i,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){if(!b.fired){b.fired=!0;for(let M=0;M<26;M++){const v=Math.random()*te,S=o*y(.7,1.1),_=y(1.5,4)*r/3.4;I(t+Math.cos(v)*S,n+Math.sin(v)*S,.1,Math.cos(v)*_,Math.sin(v)*_,y(2.5,5.5),y(.7,1.1),M%5===0?Ss[0]:M&1?xe.m:xe.d,Math.random()*3+3|0,12,!1,.96)}for(let M=0;M<14;M++){const v=Math.random()*te;I(t+Math.cos(v)*o,n+Math.sin(v)*o,.4,Math.cos(v)*.6,Math.sin(v)*.6,y(1.5,3),y(.6,1),M&1?bt.l:bt.w,2,-.4,!0)}ht(t,n,r*1.2,Rf,.9,.45),Q(10)}}}),ht(t,n,3.6,zo,1,1.4)};H.cabra_T=e=>{e.uid&&Bd(e.uid)};function sw(e,t,n,o){oe(t,n);const r=wt,i=St;e.fillStyle=cn.k,or(e,r-4*o,i,B(4*o),.55),or(e,r+4*o,i,B(4*o),.55),e.fillStyle=cn.l,e.fillRect(B(r-9*o),B(i-3*o),B(4*o),2),e.fillRect(B(r+5*o),B(i-3*o),B(4*o),2)}H.cabra_ev_behemoth_stomp=e=>{e.uid&&Bd(e.uid);const t=e.uid?Z(e.uid):null;t&&(t._stompA=w.T+.6);const n=e.x,o=e.y,r=e.radius||3.2,i=Math.random()*99;J.sfx("stomp_cabra",n,o,1);const a=[[1,.3],[.3,1],[-.95,-.25],[-.25,-.95]];T({type:"custom",layer:"ground",dur:2.2,x:n,y:o,draw(f,c){f.globalAlpha=(c>.6?(1-c)/.4:1)*.8;for(const[g,x]of a)sw(f,n+g,o+x,1.8);oe(n,o);const h=wt,d=St,m=Ue(1.25),p=m*.5;for(let g=0;g<36;g++){const x=g/36*te,b=h+Math.cos(x)*m,M=d+Math.sin(x)*p;f.fillStyle=cn.d,f.fillRect(B(b-5),B(M-2),10,4),f.fillStyle=g&1?cn.l:xe.m,f.fillRect(B(b-3),B(M-4),6,3)}}}),T({type:"custom",layer:"ground",dur:.75,x:n,y:o,draw(f,c){const h=Hn(c),d=1.1+(r-1.1)*h;oe(n,o);const m=wt,p=St;f.globalAlpha=1-c*c;for(let b=0;b<60;b++){const M=b/60*te+i,v=d*(1+(q(i+b)-.5)*.06),S=Ue(v),_=S*.5,A=(1-c)*(8+6*q(b*2.7+i)),R=m+Math.cos(M)*S,C=p+Math.sin(M)*_;f.fillStyle=cn.d,f.fillRect(B(R-5),B(C-1),10,3),f.fillStyle=b&1?cn.l:xe.m,f.fillRect(B(R-4),B(C-A-5),8,6),f.fillStyle=b%3?Fe.l:xe.l,f.fillRect(B(R-4),B(C-A-5),5,2)}f.globalAlpha=(1-c)*.7;const g=Ue(d*.82),x=g*.5;f.fillStyle=cn.d;for(let b=0;b<40;b++){const M=b/40*te;f.fillRect(B(m+Math.cos(M)*g-2),B(p+Math.sin(M)*x-1),4,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.5,x:n,y:o,draw(f,c){f.globalAlpha=(1-c)*.85;const h=1.2+(r-1)*Hn(c);Qu(f,n,o,Math.min(r,h),48,3,c<.5?bt.l:bt.m,i)}});const s=8,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=f/s*te+q(i+f*3)*.6,u[f]=.5+q(i+f*7)*.7;T({type:"custom",layer:"ground",dur:1.8,x:n,y:o,draw(f,c){const h=Hn(Ln(c*1.8/.1));f.globalAlpha=c>.6?(1-c)/.4:1;for(let d=0;d<s;d++)n0(f,n+Math.cos(l[d])*1.25,o+Math.sin(l[d])*1.25,l[d],u[d]*h,i+d*5,3,xe.x)}}),T({type:"custom",layer:"top",dur:.8,x:n,y:o,draw(f,c){const h=.7+(r-.7)*Hn(Math.min(1,c*1.3));for(let d=0;d<18;d++){const m=d/18*te+i*.3,p=.15+c*(.5+.4*q(d+i)),g=B(12-c*7);oe(n+Math.cos(m)*h,o+Math.sin(m)*h,p),f.globalAlpha=(1-c)*.5,f.fillStyle=d&1?Fe.m:xe.m,f.fillRect(B(wt-g/2),B(St-g/2),g,B(g*.7)),f.fillStyle=Fe.l,f.fillRect(B(wt-g/2),B(St-g/2),B(g/2),2)}}});for(let f=0;f<16;f++){const c=Math.random()*te,h=y(.5,1);I(n+Math.cos(c)*h,o+Math.sin(c)*h,.1,Math.cos(c)*y(1.2,3),Math.sin(c)*y(1.2,3),y(2,4),y(.5,.8),f%4===0?Ss[1]:f&1?xe.m:cn.l,Math.random()*2+3|0,11,!1,.95)}ht(n,o,r*1.05,Rf,.6,.35),ht(n,o,r*.8,zo,.4,.3,{delay:.05}),Q(5)};const L0=new Set;function Zy(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.kind==="mount")}function Bd(e){if(L0.has(e))return;L0.add(e);let t=!1,n=0,o=NaN,r=NaN,i=0,a=0,s=-9,l=0,u=0,f=0;T({type:"custom",layer:"top",add:!0,dur:600,x:0,y:0,draw(c,h,d){const m=Z(e);if(!(!!m&&!m.dead&&Zy(m))){if(!t){d.t>2&&(L0.delete(e),d.t=d.dur+1);return}if(n||(n=w.T),w.T-n<.12)return;L0.delete(e),d.t=d.dur+1;const b=m?m.x:o,M=m?m.y:r;isFinite(b)&&(uw({x:b,y:M},!0),J.sfx("fade_cabra_R",b,M,1));return}t=!0,n=0;const g=isFinite(o)?Math.hypot(m.x-o,m.y-r):0;if(o=m.x,r=m.y,g>.004&&w.T>=i){i=w.T+.24;const b=Math.random()*te;for(let M=0;M<3;M++)I(m.x+Math.cos(b+M*.4)*.6,m.y+Math.sin(b+M*.4)*.6,.05,y(-.5,.5),y(-.5,.5),y(.3,.8),y(.4,.6),M&1?Fe.m:xe.l,4,1.5,!1,.9)}if(w.T-s>1.1&&Math.random()<.03){s=w.T;const b=Math.random()<.5?-1:1;l=b*.34,u=-b*.34,f=y(2.1,2.6)}const x=(w.T-s)/.35;if(x>=0&&x<1){oe(m.x+l,m.y+u,f+x*.15);const b=B(6*Math.sin(x*Math.PI))+1;c.globalAlpha=1,c.fillStyle=bt.w,c.fillRect(B(wt-b),B(St-1),b*2,2),c.fillRect(B(wt-1),B(St-b),2,b*2),c.fillStyle=bt.m,c.fillRect(B(wt-2),B(St-2),4,4)}w.T>=a&&(a=w.T+.15,ht(m.x,m.y,1.8,zo,.22,.3))}})}function lw(e,t,n,o,r){e.globalAlpha=r;for(const i of[-1,1]){const a=t+i*18*o,s=n+8*o;for(let l=0;l<=22;l++){const u=l/22,f=Math.PI+u*te*.95,c=15*o*(1-u*.7),h=B((7-u*4)*o),d=a+i*Math.cos(f)*c,m=s+Math.sin(f)*c;e.fillStyle=Fe.d,e.fillRect(B(d-h/2-1),B(m-h/2-1),h+2,h+2),e.fillStyle=l%4===0?Fe.m:Fe.l,e.fillRect(B(d-h/2),B(m-h/2),h,h)}}for(let i=0;i<30*o;i+=2){const a=i/(30*o),s=(16-a*9)*o;e.fillStyle=a<.1?bt.l:Vt(e,bt.m,12),e.fillRect(B(t-s),B(n+i),B(s*2),2)}e.fillStyle=bt.w,e.fillRect(B(t-9*o),B(n+9*o),B(4*o),B(3*o)),e.fillRect(B(t+5*o),B(n+9*o),B(4*o),B(3*o))}function uw(e,t=!1){const n=e.x,o=e.y,r=t?1.9:1.25,i=t?1.9:1.3,a=t?1.6:1.25,s=1.6,l=Math.random()*9;T({type:"custom",layer:"ground",add:!0,dur:s,x:n,y:o,draw(u,f){const c=f*s,h=c>1.1?1-Ln((c-1.1)/.35):1;h<=0||jy(u,n,o,r*h,Hn(Ln(c/.22)),-c*1.2+l,1,1)}}),T({type:"custom",layer:"ground",dur:s,x:n,y:o,draw(u,f){const c=f*s,h=c>1.1?1-Ln((c-1.1)/.35):1;h<=0||(oe(n,o),u.globalAlpha=.85*h*Ln(c/.25),u.fillStyle=bt.k,or(u,wt,St,B(Ue(r*.62*h)),.5),u.fillStyle=bt.x,or(u,wt,St+2,B(Ue(r*.5*h)),.5))}}),T({type:"custom",layer:"top",dur:s,x:n,y:o,draw(u,f){const c=f*s;if(c<.15||c>1.25)return;const h=Ln((c-.15)/.95),d=h*h;oe(n,o);const m=St,p=wt;u.save(),u.beginPath(),u.rect(p-600,m-900,1200,900),u.clip(),lw(u,p,m-a*N.ZK+d*(a+.4)*N.ZK,i,(h<.15?h/.15:1)*.95),u.restore()}}),T({type:"custom",layer:"top",add:!0,delay:1.35,dur:.3,x:n,y:o,draw(u,f){oe(n,o,.1),u.globalAlpha=1-f;const c=B((t?40:26)*(1-f))+2;u.fillStyle=bt.w,u.fillRect(B(wt-c),B(St-1),c*2,3),u.fillRect(B(wt-1),B(St-c*.6),3,B(c*1.2))}}),T({type:"custom",layer:"top",delay:1.35,dur:.02,x:n,y:o,fired:!1,draw(u,f,c){if(!c.fired){c.fired=!0;for(let h=0;h<16;h++){const d=h/16*te;I(n+Math.cos(d)*.3,o+Math.sin(d)*.3,.2,Math.cos(d)*1.2,Math.sin(d)*1.2,y(1.5,3),y(.5,.9),h&1?bt.l:Fe.w,2,-.3,!0)}ht(n,o,2.4,zo,.9,.35),Q(3)}}}),ht(n,o,t?3.2:2.6,zo,.7,1.4)}const fw={Q:nw,W:ow,E:rw},cw={Q:.55,W:.7,E:.45};H.cabra_petfade=e=>{let t=ss.get(e.uid)||"";if(!t&&e.sprite)for(const n of["Q","W","E"]){const o=Vy(n);o&&o.petSprite&&o.petSprite===e.sprite&&(t=n)}if(!t&&typeof e.sprite=="string"&&e.sprite.startsWith("cabra")){const n=e.sprite;t=/wisp|spirit|flame/.test(n)?"Q":/golem|stone|twin/.test(n)?"W":/locust|swarm|bug/.test(n)?"E":""}return t?(ss.delete(e.uid),fw[t](e),J.sfx("fade_cabra_"+t,e.x,e.y,cw[t]),!0):!1};Pe.cabra_A=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=(t.id||0)*1.7;for(let h=1;h<=9;h++){const d=h*3,m=Math.sin(i*22+f-h*.9)*(2+h*.35);e.globalAlpha=1-h/10,$e(e,n-a*d+l*m,o-s*d+u*m,2,bt.m),$e(e,n-a*d-l*m,o-s*d-u*m,2,h&1?Fe.l:Fe.w)}e.globalAlpha=1;for(let h=0;h<4;h++)$e(e,n-a*(3+h*2.5)+l*Math.sin(i*30+h)*1.2,o-s*(3+h*2.5)+u*Math.sin(i*30+h)*1.2,6-h,h<2?bt.m:bt.d);e.fillStyle=bt.d,e.fillRect(B(n-5),B(o-5),10,10),e.fillStyle=bt.l,e.fillRect(B(n-4),B(o-4),8,8),e.fillStyle=bt.w,e.fillRect(B(n-2),B(o-2),4,4),$e(e,n+a*3+l*4,o+s*3+u*4,2,Fe.w),$e(e,n+a*5+l*5,o+s*5+u*5,2,Fe.l),$e(e,n+a*3-l*4,o+s*3-u*4,2,Fe.w),$e(e,n+a*5-l*5,o+s*5-u*5,2,Fe.l);const c=i*12|0;t._lf!==c&&(t._lf=c,ht(t.x,t.y,.9,zo,.5,.12),c&1&&I(t.x,t.y,t.z||.45,0,0,.3,.3,bt.l,2,0,!0))};function hw(e){const t=e.x,n=e.y,o=Math.random()*te,r=1.6*qy();T({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,a){oe(t,n);const s=wt,l=St;i.globalAlpha=a>.5?(1-a)/.5:1,i.fillStyle=cn.d,or(i,s-5,l,6,.55),or(i,s+5,l,6,.55),i.fillStyle=cn.m,or(i,s-5,l-1,4,.5),or(i,s+5,l-1,4,.5);const u=r*(.25+.75*Hn(Ln(a*1.6)));i.globalAlpha=(1-a)*.9;for(let f=0;f<18;f++){const c=o+f/18*te;$e(i,s+Math.cos(c)*u,l+Math.sin(c)*u*.5,f%3?4:3,f%3===0?bt.m:f&1?Fe.m:xe.l)}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(i,a){oe(t,n,.45);const s=1-a,l=B(12*s)+2;i.globalAlpha=s,fa(i,wt-l,St,wt,St-l*.6,2,bt.l),fa(i,wt,St-l*.6,wt+l,St,2,bt.l),fa(i,wt+l,St,wt,St+l*.6,2,bt.m),fa(i,wt,St+l*.6,wt-l,St,2,bt.m),$e(i,wt,St,B(5*s)+2,Fe.w)}});for(let i=0;i<4;i++)I(t,n,.3,y(-2,2),y(-2,2),y(2,3.5),.5,i&1?xe.m:xe.d,4,13,!1,.95);for(let i=0;i<2;i++)I(t+y(-.3,.3),n+y(-.3,.3),.1,y(-.6,.6),y(-.6,.6),y(.3,.7),.6,Fe.m,5,0,!1,.9);ht(t,n,1.3,zo,.45,.2),Q(2)}Qe.cabra=e=>{if(!e.proj){const i=e.uid?Z(e.uid):null;if(i&&Zy(i)){hw(e);return}}const t=e.x,n=e.y,o=!!e.big,r=Math.random()*te;T({type:"custom",layer:"top",add:!0,dur:o?.42:.3,x:t,y:n,draw(i,a){oe(t,n,.45);const s=wt,l=St;i.globalAlpha=a>.5?(1-a)/.5:1;const u=o?7:5,f=(o?14:10)*Hn(Ln(a*1.8));for(let h=0;h<u;h++){const d=r+h/u*te,m=s+Math.cos(d)*f,p=l+Math.sin(d)*f*.7;fa(i,s+Math.cos(d)*f*.35,l+Math.sin(d)*f*.25,m,p,3,bt.m),$e(i,m,p,3,bt.w)}$e(i,s,l,B(8*(1-a))+2,bt.w),oe(t,n);const c=6+a*(o?30:20);for(let h=0;h<12;h++){const d=r+h/12*te;$e(i,wt+Math.cos(d)*c,St+Math.sin(d)*c*.5,2,h&1?Fe.l:bt.l)}if(o){i.globalAlpha=1-a;for(const h of[-1,1])for(let d=0;d<8;d++){const m=Math.PI+d/8*Math.PI*1.4,p=7*(1-d/12);$e(i,s+h*(7+Math.cos(m)*p),l-16-a*14+Math.sin(m)*p,d<4?3:2,d<4?Fe.w:Fe.l)}}}});for(let i=0;i<(o?8:4);i++)I(t,n,.5,y(-.9,.9),y(-.9,.9),y(.6,1.6),.4,i&1?bt.l:bt.w,2,-.4,!0);ht(t,n,o?1.4:1,zo,o?.7:.5,.22)};const It=Math.round,In=Math.PI*2,ml=e=>e*N.HW*Math.SQRT2,Rt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},li=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],Jy=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function On(e,t,n,o){o=Math.max(1,It(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(It(t[0]+(n[0]-t[0])*s/i-a),It(t[1]+(n[1]-t[1])*s/i-a),o,o)}function Th(e,t,n,o,r,i=2){if(!(o<1||r<1))for(let a=-r;a<r;a+=i){const s=(a+i/2)/r,l=o*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(It(t-l),It(n+a),Math.max(1,It(l*2)),i)}}function pl(e,t,n,o,r,i,a=0){for(let s=0;s<r;s++){const l=a+s/r*In;e.fillRect(It(t+Math.cos(l)*o-i/2),It(n+Math.sin(l)*o*.5-i/2),i,i)}}function S2(e,t,n,o){t=It(t),n=It(n),e.fillRect(t-o,n,o*2+1,1),e.fillRect(t,n-o,1,o*2+1),o>2&&e.fillRect(t-1,n-1,3,3)}const dw=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));H.camaleon_Q=e=>{const t=e.x,n=e.y,o=e.ex??e.x,r=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:y(-14,14),c:l+s})}T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,c]=P(t,n,.5),h=w.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=c+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=p,s.fillStyle=li[(d.c+h)%6],s.fillRect(It(g)-2,It(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,It(Math.hypot(o-t,r-n)*2.4)));T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=P(t,n),f=P(o,r),c=f[0]-u[0],h=f[1]-u[1],d=Math.hypot(c,h)||1,m=-h/d,p=c/d;for(let g=0;g<=a;g++){const x=g/a,b=l*4-x;if(b<0)continue;const M=g%4===0,v=M?9:5,S=u[0]+c*x,_=u[1]+h*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=Rt.ink,On(s,[S-m*v+1,_-p*v+1],[S+m*v+1,_+p*v+1],M?4:3),s.fillStyle=M?Rt.gold:li[(g+(w.T*10|0))%6],On(s,[S-m*v,_-p*v],[S+m*v,_+p*v],M?3:2)}}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:o,y:r,draw(s,l){const[u,f]=P(o,r,.5),c=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*In,p=d%3===0?7:3;s.fillStyle=d%3===0?Rt.gold:Rt.face,On(s,[u+Math.cos(m)*c,f+Math.sin(m)*c*.8],[u+Math.cos(m)*(c-p),f+Math.sin(m)*(c-p)*.8],2)}const h=-Math.PI/2-l*In*1.5;s.fillStyle=Rt.face,On(s,[u,f],[u+Math.cos(h)*(c-8),f+Math.sin(h)*(c-8)*.8],3),s.fillStyle=Rt.gold,s.fillRect(It(u)-2,It(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*In;I(o,r,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,y(.5,1.5),.45,li[s%6],3,2,!0,.9)}};H.camaleon_W=e=>{const t=e.x,n=e.y,o=Math.atan2(e.uy||0,e.ux||1),r=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>P(t+Math.cos(o+l*r)*u,n+Math.sin(o+l*r)*u,f);T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let c=a.length-1;c>=0;c--){const h=a[c],d=f-h.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=h.al;for(let g=-1,x=0;g<=p;g+=.06,x++){const b=Math.max(0,1-(p-g)/.7),M=It(3+6*b*h.sc),[v,S]=s(g,i*h.sc);l.fillStyle=Rt.ink,l.fillRect(It(v-M/2)+1,It(S-M/2)+1,M,M),l.fillStyle=c===0?x%2?Rt.gold:Rt.face:li[(c*2+x)%6],l.fillRect(It(v-M/2),It(S-M/2),M,M)}if(c===0){l.fillStyle=Rt.gold;for(let g=-1;g<=p;g+=.2){const x=s(g,i*1.06),b=s(g,i*1.16);On(l,x,b,2)}}}}if(f>.28){const c=(f-.28)/.27,[h,d]=s(-1,i);l.globalAlpha=1-c;for(let m=0;m<16;m++){const p=m*.6-c*4,g=2+m*1.1;l.fillStyle=li[m%6],l.fillRect(It(h+Math.cos(p)*g)-1,It(d+Math.sin(p)*g*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=y(-1,1),f=i*y(.3,1.1),c=o+u*r;I(t+Math.cos(c)*f,n+Math.sin(c)*f,y(.2,.9),y(-.15,.15),y(-.15,.15),y(0,.2),y(.8,1.3),l%3?Rt.sand:Rt.time,2,.15,!0,.99)}Q(Jy(e)?3:1)};H.camaleon_E=e=>{const t=e.uid,n=e.dur||4;T({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=Z(t),[f,c]=P(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let h=0;h<8;h++){const d=h/8*In+.2,m=12+l*30;s.fillStyle=li[h%6],On(s,[f+Math.cos(d)*m,c+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),c+Math.sin(d)*(m+8)*.7],3)}}});const o=[];let r=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=Z(t);if(!f||f.dead){u.t=u.dur+1;return}if(w.T-r>.06){const h=o[o.length-1];(!h||Math.hypot(f.x-h.x,f.y-h.y)>.1)&&(o.push({x:f.x,y:f.y,t:w.T,c:i++}),o.length>8&&o.shift()),r=w.T}const c=l>.92?(1-l)/.08:1;for(const h of o){const d=1-(w.T-h.t)/.4;if(d<=0)continue;const[m,p]=P(h.x,h.y);s.globalAlpha=d*.65*c,s.fillStyle=li[h.c%6];for(let g=0;g<a.length;g++)s.fillRect(It(m-a[g]),It(p-8-g*6),a[g]*2,3)}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=Z(t);if(!f||f.dead){u.t=u.dur+1;return}const[c,h]=P(f.x,f.y,1.05),d=c+24,m=h+Math.sin(w.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=Rt.brassD,Th(s,d,m,9,9,1),s.fillStyle=Rt.brass,s.fillRect(It(d)-2,It(m)-13,5,4),s.fillStyle=Rt.face,Th(s,d,m,7,7,1),s.fillStyle=Rt.ink,s.fillRect(It(d)-1,It(m)-7,2,2),s.fillRect(It(d)+5,It(m),2,2),s.fillRect(It(d)-1,It(m)+5,2,2),s.fillRect(It(d)-7,It(m),2,2);const p=w.T*14;s.fillStyle="#e03a4a",On(s,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function mw(e,t,n,o){t=It(t),n=It(n),e.fillStyle=Rt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=Rt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let r=0;r<11;r++){const i=It(6-r*.5),a=It(1+r*.5);e.fillStyle=Rt.glass,e.fillRect(t-i-1,n-11+r,1,1),e.fillRect(t+i+1,n-11+r,1,1),e.fillRect(t-a-1,n+1+r,1,1),e.fillRect(t+a+1,n+1+r,1,1),e.fillStyle=Rt.sand,r>=11*o&&e.fillRect(t-i,n-11+r,i*2+1,1),r>=11*(1-o)&&e.fillRect(t-a,n+1+r,a*2+1,1)}o>.02&&o<.98&&(e.fillStyle=Rt.sand,e.fillRect(t,n-1,1,12))}let _2=null,A2=null,T2=[],R2=[];function pw(e){return _2!==e&&(_2=e,T2=[{u0:0,fill:Vt(e,Rt.night,7),a:.55},{u0:.66,fill:Vt(e,Rt.time,6),a:.55},{u0:.86,fill:Vt(e,Rt.glass,10),a:.6},{u0:.96,fill:Rt.glass,a:.5}]),T2}function yw(e){return A2!==e&&(A2=e,R2=[{u0:0,fill:Vt(e,Rt.glass,2),a:.4},{u0:.62,fill:Vt(e,Rt.time,3),a:.5},{u0:.82,fill:Vt(e,Rt.time,5),a:.6},{u0:.93,fill:Vt(e,Rt.glass,9),a:.7}]),R2}function Kr(e,t,n,o,r){const i=Math.cos(o)*Math.cos(r),a=Math.sin(o)*Math.cos(r),s=Math.sin(r);return Xn(e+i*n,t+a*n,s*n),Wi(i,a,s)>0}const C2=[.42,44,.86,32,1.24,16];function P2(e,t,n,o,r,i,a,s){const l=r>0;e.fillStyle=l?Rt.glassL:"#5a68c0",e.globalAlpha=s*(l?.55:.7);for(let c=0;c<12;c++){const h=c/12*In-i*.35;for(let d=1;d<11;d++)Kr(t,n,o,h,d/11*Math.PI/2)===l&&e.fillRect(It(zt.x)-1,It(zt.y)-1,2,2)}for(let c=0;c<3;c++){const h=C2[c*2],d=C2[c*2+1];for(let m=0;m<d;m++)Kr(t,n,o,m/d*In+i*.08,h)===l&&e.fillRect(It(zt.x)-1,It(zt.y)-1,2,2)}e.globalAlpha=s*.95,e.fillStyle=l?Rt.gold:Rt.time;for(let c=0;c<72;c++)Kr(t,n,o,c/72*In,0)===l&&e.fillRect(It(zt.x)-1,It(zt.y)-1,3,3);for(let c=0;c<12;c++){const h=c/12*In-Math.PI/4;if(Kr(t,n,o,h,0)!==l)continue;const d=zt.x,m=zt.y;Kr(t,n,o,h,c%3?.13:.22),e.fillStyle=l?c%3?Rt.face:Rt.gold:Rt.time,On(e,[d,m],[zt.x,zt.y],c%3?2:3)}const u=-i*1.4+.6;e.fillStyle=l?Rt.gold:Rt.brass,e.globalAlpha=s*(l?.95:.6);for(let c=0;c<22;c++)Kr(t,n,o,u,c/22*Math.PI/2)===l&&e.fillRect(It(zt.x)-1,It(zt.y)-1,3,3);const f=a%1;if(f<.6){const c=f/.6*Math.PI/2*.98;e.globalAlpha=s*(1-f/.6)*(l?.9:.6),e.fillStyle=l?Rt.glassL:Rt.glass;const h=It(56*Math.cos(c))+8;for(let d=0;d<h;d++)Kr(t,n,o,d/h*In,c)===l&&e.fillRect(It(zt.x)-1,It(zt.y)-1,3,2)}}H.camaleon_R=e=>{const t=e.x,n=e.y,o=e.radius||2.7,r=e.dur||3,i=ka(e,r),a=Array.from({length:26},(h,d)=>{const m=Math.random()*In,p=Math.sqrt(Math.random())*o*.85,g=Math.sqrt(Math.max(0,o*o-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:y(.15,Math.max(.2,g)),ph:Math.random()*In,s:d%4===0?4:2,col:[Rt.glassL,Rt.gold,Rt.time,Rt.teal][d%4]}}),s=Array.from({length:22},()=>{const h=Math.random()*In,d=Math.sqrt(Math.random())*o*.8;return{x:t+Math.cos(h)*d,y:n+Math.sin(h)*d,z:y(.2,1.4)}}),l=Array.from({length:7},()=>{const h=new Float32Array(16);let d=y(-.4,2),m=y(.12,1.1);for(let p=0;p<8;p++)h[p*2]=d,h[p*2+1]=m,d+=y(-.16,.16),m=Math.min(1.45,Math.max(.05,m+y(-.2,.2)));return h}),u=h=>dw(h/.3),f=()=>w.T-i.t0,c=h=>$l(h/.2);T({type:"custom",layer:"ground",dur:r+1,x:t,y:n,draw(h,d,m){const p=io(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=u(f()),[b,M]=P(t,n),v=ml(o)*x,S=f();h.globalAlpha=.28*g,h.fillStyle=Rt.night,Th(h,b,M,v,v*.5,3),h.globalAlpha=.95*g,h.fillStyle=Rt.gold,pl(h,b,M,v,96,3),h.fillStyle=Rt.brass,pl(h,b,M,v*.94,72,2),h.fillStyle=Rt.face,pl(h,b,M,v*.87,60,2);for(let O=0;O<12;O++){const E=O/12*In-Math.PI/2,U=O%3===0,G=[b+Math.cos(E)*v*.66,M+Math.sin(E)*v*.33],Y=[b+Math.cos(E)*v*.8,M+Math.sin(E)*v*.4];h.fillStyle=Rt.ink,On(h,[G[0]+1,G[1]+1],[Y[0]+1,Y[1]+1],U?6:4),h.fillStyle=U?Rt.gold:Rt.face,On(h,G,Y,U?5:3)}for(let O=0;O<36;O++){const E=O/36*In-S*.6,U=v*(O%2?.5:.55);h.fillStyle=O%2?Rt.brassD:Rt.brass,h.fillRect(It(b+Math.cos(E)*U)-2,It(M+Math.sin(E)*U*.5)-1,5,3)}const _=-Math.PI/2-S*In/1.5,A=-Math.PI/2-S*In/12,R=[b+Math.cos(_)*v*.74,M+Math.sin(_)*v*.37],C=[b+Math.cos(A)*v*.45,M+Math.sin(A)*v*.225];h.fillStyle=Rt.ink,On(h,[b+1,M+1],[R[0]+1,R[1]+1],6),On(h,[b+1,M+1],[C[0]+1,C[1]+1],8),h.fillStyle=Rt.face,On(h,[b,M],R,4),h.fillStyle=Rt.gold,On(h,[b,M],C,6),h.fillStyle="#e03a4a",h.fillRect(It(b)-4,It(M)-3,8,6),h.fillStyle=Rt.gold,h.fillRect(It(b)-2,It(M)-2,4,4);const z=S%1;z<.3&&(h.globalAlpha=(1-z/.3)*g,h.fillStyle=Rt.glassL,pl(h,b,M,v*(.87+z*.4),48,3))}}),T({type:"custom",layer:"ground",dur:r+1,x:t,y:n,draw(h,d,m){const p=io(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=o*u(f()),b=w.T;Xn(t,n);const M=zt.x,v=zt.y,S=ml(x),_=_c(x,x);u2(h,M,v,S,_,!1,pw(h),g),P2(h,t,n,x,-1,b,f(),g),Mi(i,t,n,o*1.15,9087231,.75*g)}}),T({type:"custom",layer:"top",dur:r+1,x:t,y:n,draw(h,d,m){const p=io(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=o*u(f()),b=w.T;Xn(t,n);const M=zt.x,v=zt.y,S=ml(x),_=_c(x,x);u2(h,M,v,S,_,!0,yw(h),g),P2(h,t,n,x,1,b,f(),g);const A=$l((.45-p)/.35);if(A>0)for(const R of l){const C=Math.max(1,It(7*A));for(let z=0;z<C;z++){if(!Kr(t,n,x,R[z*2],R[z*2+1]))continue;const O=zt.x,E=zt.y;Kr(t,n,x,R[z*2+2],R[z*2+3]),h.globalAlpha=g,h.fillStyle=Rt.ink,On(h,[O+1,E+1],[zt.x+1,zt.y+1],2),h.fillStyle=Rt.glassL,On(h,[O,E],[zt.x,zt.y],2)}}}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:t,y:n,draw(h,d,m){const p=io(i);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=u(f()),b=o*x,M=w.T,v=f();Xn(t,n);const S=zt.x,_=zt.y,A=ml(b),R=_c(b,b);for(let O=0;O<=80;O++){const E=Math.PI+O/80*Math.PI,U=((O/80-v*.45)%1+1)%1,G=Math.max(0,1-Math.min(U,1-U)*6);h.globalAlpha=g*(.55+.45*G),h.fillStyle=G>.3?Rt.glassL:Rt.glass,h.fillRect(It(S+Math.cos(E)*A)-1,It(_+Math.sin(E)*R)-1,3,3)}for(let O=0;O<14;O++){const E=Math.PI*(1.1+O*.022);h.globalAlpha=g*.85,h.fillStyle=Rt.glassL,h.fillRect(It(S+Math.cos(E)*A*.82)-2,It(_+Math.sin(E)*R*.82)-2,4,4),O<6&&(h.globalAlpha=g*.5,h.fillRect(It(S+Math.cos(E+.12)*A*.7)-1,It(_+Math.sin(E+.12)*R*.7)-1,3,3))}h.globalAlpha=g*.7,S2(h,S+Math.cos(Math.PI*1.36)*A*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+It(2*Math.sin(M*4)));for(const O of a){const[E,U]=P(O.x,O.y,O.z*x),G=.5+.5*Math.sin(M*3+O.ph);h.globalAlpha=g*(.35+.65*G),h.fillStyle=O.col,S2(h,E,U,O.s+(G>.8?1:0))}h.fillStyle=Rt.sand;for(const O of s){const[E,U]=P(O.x,O.y,O.z*x);h.globalAlpha=g*.8,h.fillRect(It(E),It(U),1,1)}const[C,z]=P(t,n,b+.35);if(h.globalAlpha=g,mw(h,C,z,Math.min(1,v/Math.max(.1,v+p))),v<.3){const O=v/.3;h.globalAlpha=1-O,h.fillStyle=Rt.glassL,pl(h,S,_,ml(o)*(.3+O*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let O=0;O<40;O++){const E=Math.random()*In,U=Math.random()*1.3,G=t+Math.cos(E)*o*Math.cos(U),Y=n+Math.sin(E)*o*Math.cos(U);I(G,Y,o*Math.sin(U),Math.cos(E)*y(.8,2),Math.sin(E)*y(.8,2),y(0,1.5),y(.5,.9),O%3?Rt.glass:Rt.glassL,O%4?2:3,9,!0,.96)}}}}),Q(Jy(e)?6:3)};Qe.camaleon=e=>{const t=e.x,n=e.y,o=y(-2.6,-.6),r=Math.random()*6|0;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=o-(1-u)*1.5,c=o+2.2-(1-u)*1.2;i.fillStyle=Rt.ink,On(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=Rt.face,On(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=li[r],On(i,[s,l],[s+Math.cos(c)*12,l+Math.sin(c)*12],4),i.fillStyle=Rt.gold;for(let h=0;h<4;h++){const d=h/4*In+.4,m=14+a*10;i.fillRect(It(s+Math.cos(d)*m)-1,It(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)I(t,n,.5,y(-1.3,1.3),y(-1.3,1.3),y(.8,2),.3,li[(r+i)%6],2,6,!0)};const Gt=Math.round,ce=Math.PI*2;let At=0,ct=0;function Re(e,t,n=0){At=(e-t)*N.HW+N.OX,ct=(e+t)*N.HH-n*N.ZK}function Et(e,t,n,o,r){e.fillStyle=r,e.fillRect(Gt(t-o/2),Gt(n-o/2),o,o)}function Zn(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Gt(t+(o-t)*l/s-i/2),Gt(n+(r-n)*l/s-i/2),i,i)}function _n(e,t,n,o,r=1){for(let i=-o;i<o;i+=2){const a=2*Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(Gt(t-a/2),Gt(n+i*r),Gt(a),Math.max(1,Gt(2*r)))}}const Oa=e=>e<0?0:e>1?1:e,mi=e=>1-(1-e)*(1-e),Bi=()=>N.HW*Math.SQRT2;function d0(e,t){const n=(e-t)*N.HW,o=(e+t)*N.HH,r=Math.hypot(n,o)||1;return[n/r,o/r]}const He={k:"#4a3410",d:"#8a6418",m:"#c89a30",l:"#f0d060",w:"#fff4b8"},pe={k:"#16161c",d:"#2e2e38",m:"#56566a",l:"#9a9aac",w:"#d8d8e4"},Yn={k:"#2a180c",d:"#5a3a1e",m:"#8a5a2e",l:"#c08a50"},Xt={d:"#a8400c",m:"#ff7a1a",l:"#ffb050",w:"#ffe6a0"},Rr={k:"#4a4234",d:"#7a6c54",m:"#a8987a",l:"#d4c6a0"},qi=["#ffffff","#e4eaf2","#b8c2ce"],Ma=["#d8d4d0","#9a9490","#625c58"],Gr=["#e0d0b0","#c0a880","#8a7454"],zn={d:"#180e22",g:"#7a66a8",gl:"#c0b0ec"},gn={w:"#fff2b0",y:"#ffc848",o:"#ff7a1a",r:"#c8300c"},Da=16747056;Tn.castor_saw=[Xt.w,Xt.l,Xt.m,pe.l];Tn.castor_broadside=[Xt.w,gn.y,Xt.m,pe.m];function tg(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.mount)}function gw(e){if(e.src)return e.src;const t=w.game;if(!t)return null;let n=null,o=49;for(const r of t.heroes||t.units){if(r.heroKey!=="castor"||r.dead)continue;const i=(r.x-e.x)*(r.x-e.x)+(r.y-e.y)*(r.y-e.y);i<o&&(o=i,n=r)}return n}function eg(e,t,n,o,r,i,a){for(let s=0;s<8;s++){const l=r+s/8*ce;Et(e,t+Math.cos(l)*o,n+Math.sin(l)*o,3,i)}e.fillStyle=i,_n(e,t,n,Math.max(2,o-1)),Et(e,t,n,2,a)}function Pf(e,t,n,o,r,i){o=Gt(o),e.fillStyle=r,e.fillRect(Gt(t-o),Gt(n)-1,o*2,3),e.fillRect(Gt(t)-1,Gt(n-o),3,o*2),Et(e,t,n,Math.max(2,Gt(o*.5)),i)}function $d(e,t,n,o,r,i=14,a=26){for(let s=0;s<n;s++){const l=Math.random()*ce,u=Math.random()*o;T({type:"puff",x:e+Math.cos(l)*u,y:t+Math.sin(l)*u,r:y(i,a),dur:y(.6,1.1),col:r})}}function xw(e,t,n,o,r,i){const a=Math.cos(r),s=Math.sin(r),l=-s,u=a;pt(!0);const f=Wt();for(let m=1;m<=5;m++)f.globalAlpha=.65-m*.11,Et(f,n-a*m*4+l*Math.sin(i*30+m)*1.2,o-s*m*4+u*Math.sin(i*30+m)*1.2,5-(m>>1),m<3?Xt.l:Xt.m);f.globalAlpha=.35,Et(f,n,o,12,Xt.m),f.globalAlpha=1,pt(!1);const c=Math.cos(i*34+(t.id||0)),h=a*3*c,d=s*3*c;Zn(e,n-h,o-d,n+h,o+d,3,Xt.m),e.fillStyle=He.d,_n(e,n+h,o+d,4),e.fillStyle=Xt.l,_n(e,n+h,o+d-1,3),Et(e,n+h,o+d-1,2,Xt.w),Math.random()<.35&&I(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(0,.6),.3,Math.random()<.5?Xt.l:Xt.w,2,3,!0)}function Mw(e){const t=e.x,n=e.y,o=!!e.big,r=Math.random()*ce;T({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(i,a){Re(t,n,.45);const s=1-a;a<.45&&Pf(i,At,ct,(o?15:11)*(1-a/.45)+2,He.l,Xt.w);const l=4+mi(a)*(o?20:15);i.globalAlpha=s;for(let u=0;u<6;u++){const f=r+u/6*ce;Et(i,At+Math.cos(f)*l,ct+Math.sin(f)*l*.7+14*a*a,u&1?2:3,u&1?Xt.w:Xt.m)}}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a){Re(t,n,.42),i.globalAlpha=a>.7?(1-a)/.3:1,i.fillStyle=a<.3?Xt.l:a<.6?Xt.d:pe.m,_n(i,At,ct,3),Et(i,At-1,ct-1,1,a<.4?Xt.w:pe.l)}});for(let i=0;i<(o?5:3);i++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,i&1?Xt.l:Xt.w,2,10,!0);I(t,n,.5,y(-.2,.2),y(-.2,.2),.5,.6,Ma[1],4,-.4,!1,.9),ht(t,n,o?1.2:.9,Da,.5,.2)}const ng=[[0,0,0]];function bw(e,t,n,o,r){Zn(e,t-o*11,n-r*11,t-o*2,n-r*2,2,Yn.m),Zn(e,t-o*2,n-r*2,t+o*2,n+r*2,2,pe.l),Et(e,t-o*11-r*2,n-r*11+o*2,2,Xt.l),Et(e,t-o*11+r*2,n-r*11-o*2,2,"#f0e6d0")}function vw(e,t,n,o){const r=Math.max(t.z||.4,1.7),i=.45,a=t.vx||Math.cos(n),s=t.vy||Math.sin(n),l=Math.hypot(a,s)||1,u=a/l,f=s/l,c=o?Math.hypot(t.x-o.x,t.y-o.y):2,h=4.6,d=m=>r*(1-m)+i*m+.9*Math.sin(Math.PI*m);for(const[m,p,g]of ng){const x=Oa(c/h-g),b=t.x+u*(p-g*2)-f*m,M=t.y+f*(p-g*2)+u*m;Re(b-u*.15,M-f*.15,d(Math.max(0,x-.035)));const v=At,S=ct;Re(b,M,d(x));const _=At-v,A=ct-S,R=Math.hypot(_,A)||1;bw(e,At,ct,_/R,A/R)}}function ww(e){const t=e.x,n=e.y,o=e.uid?Z(e.uid):null,[r,i]=o?d0(t-o.x,n-o.y):[.7,.7],a=ng.map(([s,l,u],f)=>{const c=f*2.4+Math.random(),h=f?y(.25,.9):.12;return[t+Math.cos(c)*h,n+Math.sin(c)*h,u*1.6,s+l]});T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8;for(const[f,c,h,d]of a){if(u<h)continue;const m=u-h,p=m<.3?Math.sin(m*70+d)*2.5*(1-m/.3):0;Re(f,c,.05),s.globalAlpha=l>.75?(1-l)/.25:1,Zn(s,At-1,ct-1,At-r*6+p,ct-13-i*3,2,Yn.m),Et(s,At-r*6+p,ct-13-i*3,3,Xt.l),Et(s,At-r*6+p+1,ct-15-i*3,2,"#f0e6d0"),Et(s,At,ct,3,Yn.k)}}}),T({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(s,l){Re(t,n);const u=1.1*Bi()*(.35+.65*mi(l));s.globalAlpha=(1-l)*.6;for(let f=0;f<14;f++){const c=f/14*ce;Et(s,At+Math.cos(c)*u,ct+Math.sin(c)*u*.5,3,Gr[f%3])}}});for(let s=0;s<a.length;s++)I(a[s][0],a[s][1],.05,y(-.4,.4),y(-.4,.4),y(.3,.8),.45,Gr[s%3],4,2,!1,.9)}Pe.castor_A=(e,t,n,o,r,i)=>xw(e,t,n,o,r,i);Pe.castor_V=(e,t,n,o,r)=>vw(e,t,r,gw(t));Qe.castor=e=>{const t=!e.volley&&e.uid?Z(e.uid):null;e.volley||t&&tg(t)?ww(e):Mw(e)};function Sw(e){const t=e.x,n=e.y,o=Math.random()*ce,r=Array.from({length:6},(a,s)=>({a:o+s/6*ce,r:y(26,36),h:y(10,22),kind:s%3,sp:y(-12,12)}));T({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(a,s){Re(t,n);const l=(.85-.35*mi(Oa(s*1.6)))*Bi()*.6;a.globalAlpha=s>.6?(1-s)/.4:.9;for(let u=0;u<20;u++)if(u%5!==4){const f=u/20*ce+s;Et(a,At+Math.cos(f)*l,ct+Math.sin(f)*l*.5,2,He.m)}for(let u=0;u<4;u++){const f=u/4*ce+.785;Zn(a,At+Math.cos(f)*l*.75,ct+Math.sin(f)*l*.375,At+Math.cos(f)*l*1.15,ct+Math.sin(f)*l*.575,2,He.l)}}});let i=!1;T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(a,s){Re(t,n,.3);const l=At,u=ct,f=Oa(s/.55);if(f<1)for(const c of r){const h=mi(f),d=c.r*(1-h),m=l+Math.cos(c.a)*d,p=u+Math.sin(c.a)*d*.6-Math.sin(h*Math.PI)*c.h,g=c.sp*(1-h);if(c.kind===0){const x=Math.cos(g)*6,b=Math.sin(g)*6;Zn(a,m-x,p-b,m+x,p+b,3,Yn.m),Et(a,m+x,p+b,2,Yn.l)}else c.kind===1?eg(a,m,p,4,g,pe.l,pe.d):(Et(a,m,p,5,He.m),Et(a,m-1,p-1,2,He.w))}else if(!i){i=!0;for(let c=0;c<6;c++)I(t,n,.35,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.35,c&1?He.l:Xt.w,2,8,!0);I(t,n,.4,0,0,.6,.8,qi[1],5,-.6,!1,.92),Q(1)}if(s>.5){const c=(s-.5)/.5;c<.4&&Pf(a,l,u-4,10*(1-c/.4)+2,He.l,He.w),a.globalAlpha=1-c;const h=-1.2+c*5,d=l+10,m=u-22-c*6,p=Math.cos(h),g=Math.sin(h);Zn(a,d-p*7,m-g*7,d+p*6,m+g*6,2,pe.l),Et(a,d+p*8-g*2,m+g*8+p*2,3,pe.l),Et(a,d+p*8+g*2,m+g*8-p*2,3,pe.l),Et(a,d-p*8,m-g*8,3,pe.m)}}})}Pa.castor_turret={proj(e,t,n,o,r,i){const a=Math.cos(r),s=Math.sin(r);e.fillStyle=pe.k,_n(e,n,o,4),e.fillStyle=pe.m,_n(e,n+a,o+s-1,3),Zn(e,n-a*2-s*3,o-s*2+a*3,n-a*2+s*3,o-s*2-a*3,2,He.m),Et(e,n+a*2,o+s*2-2,1,pe.w),Et(e,n-a*5,o-s*5,(i*40|0)&1?3:2,(i*40|0)&1?Xt.w:Xt.m),Math.random()<.4&&I(t.x,t.y,(t.z||.45)+.03,y(-.15,.15),y(-.15,.15),.25,.45,Ma[Math.random()*2|0],3,-.3,!1,.9)},hit(e){const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,r){Re(t,n,.45);const i=1-r;o.fillStyle=gn.o,_n(o,At,ct,Gt(9*i)+2),o.fillStyle=gn.y,_n(o,At,ct-1,Gt(6*i)+1),Et(o,At,ct-1,Gt(4*i)+1,gn.w)}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(o,r){Re(t,n,.5+r*.3),o.globalAlpha=(1-r)*.85;for(let i=0;i<3;i++)o.fillStyle=Ma[i],_n(o,At+(i-1)*7,ct-i*2,Gt(4+r*7)-i)}});for(let o=0;o<3;o++)I(t,n,.45,y(-1.6,1.6),y(-1.6,1.6),y(1,2.2),.35,o?pe.l:Xt.l,2,10,o===0);return ht(t,n,.8,Da,.4,.15),J.sfx("castor_turret_hit",t,n,.55),!0},shoot(e){const t=e.uid?Z(e.uid):null,n=t?(t.dir||0)*Math.PI/8:0,o=Math.cos(n),r=Math.sin(n),i=e.x+o*.35,a=e.y+r*.35,[s,l]=d0(o,r);T({type:"custom",layer:"top",add:!0,dur:.14,x:i,y:a,draw(u,f){Re(i,a,.35);const c=1-f;Et(u,At,ct,Gt(9*c)+2,Xt.m),Et(u,At+s*5,ct+l*5,Gt(6*c)+1,gn.y),Et(u,At+s*9,ct+l*9,Gt(3*c)+1,gn.w)}});for(let u=0;u<2;u++)I(i,a,.35,o*y(.4,1)+y(-.3,.3),r*y(.4,1)+y(-.3,.3),y(.2,.6),.5,Ma[u],4,-.3,!1,.88);return J.sfx("castor_turret_shot",e.x,e.y,.5),!0}};function _w(e){const t=e.x,n=e.y,o=e.ex,r=e.ey;T({type:"custom",layer:"ground",dur:.9,x:t,y:n,draw(i,a){const s=Math.max(4,Gt(Math.hypot(o-t,r-n)*3));i.globalAlpha=.75*(1-a);for(let l=Gt(a*s);l<=s;l++){if(l%2)continue;const u=l/s;Re(t+(o-t)*u,n+(r-n)*u),Et(i,At,ct,3,zn.g)}Re(o,r),Et(i,At-4,ct,3,zn.gl),Et(i,At+4,ct,3,zn.gl),Et(i,At,ct-2,3,zn.gl),Et(i,At,ct+2,3,zn.gl)}});for(let i=0;i<5;i++)I(t,n,.3,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.45,i&1?zn.d:zn.g,3,9,!1);for(let i=0;i<3;i++)I(t+y(-.2,.2),n+y(-.2,.2),.5,0,0,y(.6,1.1),.9,qi[i],5,-.5,!1,.9);e.tid&&Aw(e.tid)}function Aw(e){let t=0,n=0,o=!1;T({type:"custom",layer:"top",dur:12,x:0,y:0,draw(r,i,a){const s=Z(e);if(!s||s.dead){(o||a.t>1)&&(a.t=a.dur+1);return}o=!0,!Ge(s)&&(w.T>=t&&(t=w.T+.14,I(s.x+y(-.1,.1),s.y+y(-.1,.1),.75,y(-.15,.15),y(-.15,.15),y(.5,.9),y(.7,1),qi[Math.random()*3|0],5,-.4,!1,.92)),w.T>=n&&(n=w.T+.22,I(s.x,s.y,.3,y(-.3,.3),y(-.3,.3),.3,.4,zn.d,3,8,!1),ht(s.x,s.y,.7,Da,.3,.25)))}})}function Tw(e){for(let t=0;t<3;t++)I(e.x,e.y,.3,y(-.8,.8),y(-.8,.8),y(.8,1.6),.35,t?zn.d:zn.g,3,10,!1)}const Rw=["#3e2a52","#3e3248","#4a4048","#58524e"],Cw=["#120a1a","#1e1626","#2c2630","#3a3636"],sa=[],Ja=[],hu=[];function Pw(e){const t=1-e.t/(e.dur||1);return t<.75?0:Math.min(3,1+(t-.75)/.25*3|0)}function Iw(e){const t=(e.dur||1)-e.t,n=1-e.t/(e.dur||1),o=t<.15?.45+t/.15*.55:1,r=n>.75?1-(n-.75)/.25*.45:1;return(e.r||1.1)*.78*o*r*Bi()}function I2(e,t,n){e.beginPath();for(let o=0;o<sa.length;o++){if(Ja[o]!==t)continue;const r=sa[o],i=hu[o]+n,a=q(r.id||o);Re(r.x,r.y);const s=Math.cos(a*ce)*i*.55,l=Math.sin(a*ce)*i*.3;e.moveTo(At+i,ct),e.ellipse(At,ct,i,i*.5,0,0,ce),e.moveTo(At+s+i*.55,ct+l),e.ellipse(At+s,ct+l,i*.55,i*.28,0,0,ce),e.moveTo(At-s*.8+i*.4,ct-l*.8),e.ellipse(At-s*.8,ct-l*.8,i*.4,i*.2,0,0,ce)}e.fill()}function Ow(e){const t=w.game;if(!t||!t.zones)return;sa.length=0,Ja.length=0,hu.length=0;let n=0;for(const r of t.zones)if(r.fx==="castor_tar"&&r.t>0){const i=Pw(r);sa.push(r),Ja.push(i),hu.push(Iw(r)),n|=1<<i}if(!sa.length)return;for(let r=0;r<4;r++)n&1<<r&&(e.fillStyle=Rw[r],I2(e,r,3));for(let r=0;r<4;r++)n&1<<r&&(e.fillStyle=Cw[r],I2(e,r,0));const o=w.T;for(let r=0;r<sa.length;r++){if(Ja[r]>1)continue;const i=sa[r],a=hu[r],s=i.id||r+1,l=q(s+7);Re(i.x,i.y),e.globalAlpha=Ja[r]?.5:.85;for(let u=0;u<4;u++){const f=Math.PI*1.1+u*.22;Et(e,At+Math.cos(f)*a*.62,ct+Math.sin(f)*a*.31,2,zn.g)}if(Et(e,At+Math.cos(Math.PI*1.25)*a*.62,ct+Math.sin(Math.PI*1.25)*a*.31-1,2,zn.gl),e.globalAlpha=1,!Ja[r])for(let u=0;u<2;u++){const f=(o*.75+l+u*.5)%1,c=At+(q(s*3+u)-.5)*a*1.1,h=ct+(q(s*5+u)-.5)*a*.45;if(f<.7){const d=1+Gt(f/.7*3);e.fillStyle=zn.g,e.fillRect(Gt(c-d),Gt(h-d),d*2,d*2),e.fillStyle=zn.d,e.fillRect(Gt(c-d)+1,Gt(h-d)+1,d*2-2,d*2-2),Et(e,c-d+1,h-d+1,1,zn.gl)}else if(f<.85){const d=(f-.7)/.15*6+2;Et(e,c-d,h,2,zn.g),Et(e,c+d,h,2,zn.g),Et(e,c,h-d*.6,2,zn.gl)}}}}Pe.castor_E=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=o+9;Zn(e,n-s*7,l+a*3,n+s*7,l-a*3,3,Yn.m);for(const h of[-1,1]){const d=n-s*8*h,m=l+a*3.5*h;Et(e,d,m,5,pe.k),Et(e,d,m,2,(i*20|0)&1?pe.l:He.m)}pt(!0);const u=Wt();u.globalAlpha=.35,u.fillStyle=Xt.m,_n(u,n,o,12),u.globalAlpha=1,pt(!1),e.fillStyle=pe.d,_n(e,n,o,9),e.fillStyle=pe.l,_n(e,n-1,o-1,7);const f=i*34;for(let h=0;h<12;h++){const d=f+h/12*ce;Et(e,n+Math.cos(d)*10,o+Math.sin(d)*10,3,pe.w),Et(e,n+Math.cos(d+.18)*11.5,o+Math.sin(d+.18)*11.5,2,pe.l)}e.fillStyle=He.d,_n(e,n,o,4),Et(e,n,o,2,Xt.m),Zn(e,n-9,o-6,n-4,o-11,2,He.m),Zn(e,n-4,o-11,n+4,o-11,2,He.m),Math.random()<.75&&I(t.x,t.y,.08,-(t.vx||a)*y(.1,.25)+y(-.6,.6),-(t.vy||s)*y(.1,.25)+y(-.6,.6),y(1,2.2),.3,Math.random()<.5?Xt.l:Xt.w,2,9,!0);const c=i*8|0;t._cl!==c&&(t._cl=c,ht(t.x,t.y,.8,Da,.35,.15))};function zw(e){const t=e.ux||1,n=e.uy||0,o=e.x+t*.5,r=e.y+n*.5;for(let i=0;i<6;i++)I(o,r,.15,t*y(1.5,3.5)+y(-1,1),n*y(1.5,3.5)+y(-1,1),y(.8,2),.3,i&1?Xt.l:Xt.w,2,9,!0);for(let i=0;i<3;i++)I(o,r,.05,y(-.6,.6),y(-.6,.6),y(.2,.6),.5,Gr[i],4,0,!1,.9)}H.castor_E_hit=e=>{const t=e.x,n=e.y,o=e.uid?Z(e.uid):null,[r,i]=o?d0(t-o.x,n-o.y):[1,0],a=-i,s=r,l=[0,4,-3,5,-4,3,0].map(u=>u+y(-1,1));T({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(u,f){Re(t,n,.5);const c=l.length-1,h=Oa(f*4);u.globalAlpha=f>.4?(1-f)/.6:1;for(let d=0;d<c*h;d++){const m=d/c-.5,p=(d+1)/c-.5;Zn(u,At+a*m*30+r*l[d],ct+s*m*30+i*l[d],At+a*p*30+r*l[d+1],ct+s*p*30+i*l[d+1],2,d&1?Xt.w:Xt.l)}}});for(let u=0;u<7;u++){const f=u&1?1:-1,c=y(1.5,3.5);I(t,n,.45,(o?(n-o.y)*-f:y(-1,1))*c*.6+y(-.6,.6),(o?(t-o.x)*f:y(-1,1))*c*.6+y(-.6,.6),y(.8,2),.3,u%3?Xt.l:Xt.w,2,8,!0)}for(let u=0;u<3;u++)I(t,n,.45,y(-1,1),y(-1,1),y(1,2),.5,u?pe.l:pe.w,2,10,!1);ht(t,n,.9,Da,.45,.15)};function Fw(e){const t=e.x,n=e.y,o=e.radius||2.6,r=Math.random()*ce;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(i,a){Re(t,n,1.2),i.globalAlpha=1-a;for(let s=-3;s<=3;s++)Zn(i,At+s*14,ct-70+a*40,At+s*14,ct-30+a*40,2,s&1?qi[1]:Rr.l)}}),T({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(i,a){Re(t,n);const s=At,l=ct;i.globalAlpha=a>.5?(1-a)/.5:1;for(let u=0;u<9;u++){const f=r+u/9*ce,c=(.45+u%3*.12)*Bi()*Math.min(1,a*6);Zn(i,s+Math.cos(f)*14,l+Math.sin(f)*7,s+Math.cos(f)*c,l+Math.sin(f)*c*.5,2,Rr.k),Zn(i,s+Math.cos(f)*c,l+Math.sin(f)*c*.5,s+Math.cos(f+.25)*(c+10),l+Math.sin(f+.25)*(c+10)*.5,2,Rr.d)}for(let u=0;u<2;u++){const f=Oa(a*1.6-u*.25);if(f<=0||f>=1)continue;const c=o*Bi()*(.2+.8*mi(f));i.globalAlpha=(1-f)*.95;for(let h=0;h<28;h++){const d=r+h/28*ce;Et(i,s+Math.cos(d)*c,l+Math.sin(d)*c*.5,h&1?4:6,u?Rr.m:Gr[h%3])}}}});for(let i=0;i<10;i++){const a=Math.random()*ce,s=y(2,5);I(t+Math.cos(a)*.6,n+Math.sin(a)*.6,.3,Math.cos(a)*s,Math.sin(a)*s,y(3,6),y(.7,1),i&1?Rr.m:Rr.d,i%3?4:5,14,!1,.96)}for(let i=0;i<5;i++){const a=Math.random()*ce,s=y(2,4);I(t,n,.5,Math.cos(a)*s,Math.sin(a)*s,y(3,5),.8,i&1?Yn.m:Yn.l,4,13,!1,.96)}$d(t,n,7,o*.8,[190,170,135],20,36),Tr({type:"scorch",x:t,y:n,r:1.4,dur:6,col:[70,56,40]}),Q(10),e.uid&&og(e.uid)}const k0=new Set;function Ew(e){const t=e.status.transform,n=String(t.mount||"");return n.includes("3")?2.7:n.includes("2")?2.3:1.9}function og(e){if(k0.has(e))return;k0.add(e);let t=!1,n=0,o=NaN,r=NaN,i=0,a=0;T({type:"custom",layer:"top",dur:900,x:0,y:0,draw(s,l,u){const f=Z(e);if(!(!!f&&!f.dead&&tg(f))){if(!t){u.t>2&&(k0.delete(e),u.t=u.dur+1);return}if(n||(n=w.T),w.T-n<.12)return;k0.delete(e),u.t=u.dur+1;const d=f?f.x:o,m=f?f.y:r;isFinite(d)&&(Lw(d,m),J.sfx("castor_castle_down",d,m,1));return}t=!0,n=0;const h=isFinite(o)?Math.hypot(f.x-o,f.y-r):0;if(o=f.x,r=f.y,!Ge(f)&&(w.T>=i&&(i=w.T+.32,I(f.x-.25,f.y-.35,Ew(f),y(-.1,.1),y(-.1,.1),y(.5,.8),y(1,1.4),qi[Math.random()*3|0],6,-.35,!1,.95)),h>.004&&w.T>=a)){a=w.T+.2;const d=(f.dir||0)*Math.PI/8+Math.PI,m=Math.cos(d),p=Math.sin(d);for(const g of[-1,1])I(f.x+m*.7-p*.6*g,f.y+p*.7+m*.6*g,.05,m*.4+y(-.2,.2),p*.4+y(-.2,.2),y(.2,.5),.6,Gr[Math.random()*3|0],5,.5,!1,.9)}}})}function Lw(e,t){for(let n=0;n<9;n++){const o=Math.random()*ce,r=y(1.5,4);I(e,t,y(.6,1.6),Math.cos(o)*r,Math.sin(o)*r,y(1,3),y(.8,1.1),n&1?Rr.m:Rr.d,5,12,!1,.96)}for(let n=0;n<5;n++){const o=Math.random()*ce,r=y(1.5,3);I(e,t,.8,Math.cos(o)*r,Math.sin(o)*r,y(2,4),.9,n&1?Yn.m:pe.m,4,12,!1,.96)}for(let n=0;n<2;n++){const o=Math.random()*ce;I(e,t,.5,Math.cos(o)*2,Math.sin(o)*2,3,1,He.m,4,12,!1,.96)}$d(e,t,6,1.2,[170,155,130],22,38),Q(5)}H.castor_T=e=>{e.uid&&og(e.uid);for(let t=0;t<4;t++)I(e.x-.25+y(-.1,.1),e.y-.35,1.9,y(-.2,.2),y(-.2,.2),y(1.2,1.8),1.1,qi[t%3],6,-.3,!1,.95);for(let t=0;t<6;t++)I(e.x,e.y,.6,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.4,t&1?He.l:Xt.l,2,8,!0)};function kw(e){const t=e.uid,n=Math.max(.15,e.dur||.4),[o,r]=d0(e.ux||1,e.uy||0);let i=0,a=e.x,s=e.y;T({type:"custom",layer:"top",dur:n+.25,x:e.x,y:e.y,draw(l,u,f){const c=Z(t),h=u*(n+.25);c&&!c.dead&&(a=c.x,s=c.y),Re(a,s,.6),l.globalAlpha=h<n?.8:(1-u)*2;for(let d=0;d<5;d++){const m=(d-2)*9,p=18+(d&1)*10,g=34+d%3*6;Zn(l,At-o*g-r*m,ct-r*g+o*m*.6,At-o*(g+p)-r*m,ct-r*(g+p)+o*m*.6,2,d&1?qi[1]:Gr[0])}if(!(h>=n||!c||c.dead)&&w.T>=i){i=w.T+.03;for(const d of[-1,1])I(c.x-(e.ux||0)*.6+(e.uy||0)*.6*d,c.y-(e.uy||0)*.6-(e.ux||0)*.6*d,.05,y(-.4,.4),y(-.4,.4),y(.3,.8),.6,Gr[Math.random()*3|0],5,1,!1,.9)}}})}let O2=-9;H.castor_ev_castor_ram_hit=e=>{const t=e.tid?Z(e.tid):null;Dw(t?t.x:e.x,t?t.y:e.y,e.tid||0),w.T-O2>.35&&(O2=w.T,J.sfx("castor_ram_hit",e.x,e.y,1),Q(4))};function Dw(e,t,n){T({type:"custom",layer:"top",add:!0,dur:.22,x:e,y:t,draw(o,r){Re(e,t,.5),Pf(o,At,ct,16*(1-r)+3,He.l,Xt.w)}});for(let o=0;o<6;o++)I(e,t,.5,y(-2,2),y(-2,2),y(1,2.5),.35,o&1?He.l:Xt.l,2,9,!0);T({type:"custom",layer:"top",dur:1,x:e,y:t,draw(o,r){const i=Z(n);if(!(!i||i.dead)){Re(i.x,i.y,1.05*(i.scale||1)),o.globalAlpha=r>.85?(1-r)/.15:1;for(let a=0;a<3;a++){const s=w.T*7+a/3*ce,l=At+Math.cos(s)*13,u=ct+Math.sin(s)*5;Et(o,l,u,3,He.l),Et(o,l-2,u,1,He.w),Et(o,l+2,u,1,He.w),Et(o,l,u-2,1,He.w),Et(o,l,u+2,1,He.w)}}}})}function Uw(e){const t=e.ux||1,n=e.uy||0,o=e.n||3,r=e.spread||.5,i=Math.atan2(n,t);{for(let a=0;a<o;a++){const s=i+(o===1?0:(a/(o-1)-.5)*r),l=Math.cos(s),u=Math.sin(s),[f,c]=d0(l,u),h=e.x+l*1,d=e.y+u*1,m=a*.05;T({type:"custom",layer:"top",add:!0,dur:.18,delay:m,x:h,y:d,draw(p,g){Re(h,d,.6);const x=1-g;Et(p,At,ct,Gt(12*x)+3,Xt.m);for(let b=1;b<=3;b++)Et(p,At+f*b*6,ct+c*b*6,Gt((10-b*2)*x)+2,b<2?gn.y:gn.w)}});for(let p=0;p<4;p++)I(h,d,.6,l*y(.8,2.2)+y(-.4,.4),u*y(.8,2.2)+y(-.4,.4),y(.2,.8),y(.7,1.1),Ma[p%3],6,-.3,!1,.9);T({type:"puff",x:h+l*.4,y:d+u*.4,r:y(18,26),dur:y(.8,1.2),col:[200,196,190],delay:m})}ht(e.x+t*1.3,e.y+n*1.3,1.6,Da,.85,.25)}Q(6)}Pe.castor_W=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r);for(let l=1;l<=3;l++)e.globalAlpha=.5-l*.13,Et(e,n-a*l*6,o-s*l*6,8-l*2,pe.m);e.globalAlpha=1,e.fillStyle=pe.k,_n(e,n,o,6),e.fillStyle=pe.d,_n(e,n,o-1,5),Et(e,n-2,o-3,2,pe.l),Et(e,n-1,o-4,1,pe.w),Math.random()<.55&&I(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),y(.1,.4),.55,Ma[Math.random()*3|0],4,-.3,!1,.9)};H.castor_W_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(o,r){Re(t,n);const i=6+mi(r)*26;o.globalAlpha=1-r;for(let a=0;a<12;a++){const s=a/12*ce;Et(o,At+Math.cos(s)*i,ct+Math.sin(s)*i*.5,4,Gr[a%3])}o.fillStyle=Rr.k,_n(o,At,ct,6,.5)}}),T({type:"custom",layer:"top",add:!0,dur:.16,x:t,y:n,draw(o,r){Re(t,n,.45),Pf(o,At,ct,14*(1-r)+2,pe.l,Xt.w)}});for(let o=0;o<6;o++)I(t,n,.3,y(-2,2),y(-2,2),y(2,4),.6,o&1?Gr[2]:Rr.d,4,13,!1,.96);for(let o=0;o<4;o++)I(t,n,.45,y(-2,2),y(-2,2),y(1,2.5),.3,o&1?Xt.l:Xt.w,2,9,!0);Tr({type:"scorch",x:t,y:n,r:.4,dur:3,col:[50,40,30]}),Q(2.5)};let z2=0,F2=-9;function Xw(e){w.T-F2>.08&&(z2=0),F2=w.T;const t=e.x,n=e.y,o=e.ex,r=e.ey,i=z2++*.07,a=y(-1,1);let s=!1;T({type:"custom",layer:"top",dur:.4,delay:i,x:t,y:n,draw(l,u){const f=mi(u),c=t+(o-t)*f,h=n+(r-n)*f,d=1.1*(1-u)+Math.sin(u*Math.PI)*.7;Re(c,h,d);const m=a*3+u*9*(a>=0?1:-1),p=Math.cos(m),g=Math.sin(m);for(let x=-2;x<=2;x++)Et(l,At+p*x*2.5,ct+g*x*2.5,8,x===-2||x===2?pe.m:Yn.m);if(Et(l,At-g*2,ct+p*2,2,Xt.m),u>.92&&!s){s=!0;for(let x=0;x<4;x++)I(o,r,.05,y(-.8,.8),y(-.8,.8),y(.4,1),.5,Gr[x%3],4,3,!1,.9)}}})}function Rh(e){return(e.dur||10)-e.t}function Gw(e){const t=w.game;if(!t||!t.zones)return;const n=w.T;for(const o of t.zones){if(o.fx!=="castor_kegs"||o.t<=0)continue;const r=Rh(o);if(r<.38)continue;const i=o.t<1.5?Math.sin(n*50+(o.id||0))*1.2:0;Re(o.x,o.y);{const s=(o.mine&&o.mine.blast||1.9)*Bi(),l=r>=1,u=l?.55+.25*Math.sin(n*6+(o.id||0)):.3;e.globalAlpha=l?.12:.06,e.fillStyle=Xt.m,e.beginPath(),e.ellipse(At,ct,s,s*.5,0,0,ce),e.fill(),e.globalAlpha=u;for(let f=0;f<40;f++)if(f%3!==2){const c=f/40*ce-n*.3;Et(e,At+Math.cos(c)*s,ct+Math.sin(c)*s*.5,3,f%2?Xt.m:gn.y)}if(l){const f=(o.r||1.1)*Bi();e.globalAlpha=.35;for(let c=0;c<24;c++)if(c&1){const h=c/24*ce+n*.6;Et(e,At+Math.cos(h)*f,ct+Math.sin(h)*f*.5,2,Xt.l)}}e.globalAlpha=1}e.save(),e.translate(At,ct),e.scale(1.7,1.7),e.translate(-At,-ct);const a=At+i/1.7;e.globalAlpha=.35,e.fillStyle="#000000",e.beginPath(),e.ellipse(At+2,ct+1,9,4,0,0,ce),e.fill(),e.globalAlpha=1,e.fillStyle=Yn.d,e.fillRect(Gt(a-7),Gt(ct-16),14,16),e.fillStyle=Yn.m,e.fillRect(Gt(a-6),Gt(ct-16),10,16),e.fillStyle=Yn.l,e.fillRect(Gt(a-4),Gt(ct-15),2,14),e.fillStyle=pe.m,e.fillRect(Gt(a-7),Gt(ct-14),14,2),e.fillRect(Gt(a-7),Gt(ct-4),14,2),e.fillStyle=Yn.l,e.beginPath(),e.ellipse(Gt(a),Gt(ct-16),7,3,0,0,ce),e.fill(),e.fillStyle=Xt.m,e.fillRect(Gt(a-2),Gt(ct-10),4,3),e.fillStyle="#1a0c06",e.fillRect(Gt(a-1),Gt(ct-9),2,1),e.fillRect(Gt(a-1),Gt(ct-9),1,1),Zn(e,a+1,ct-17,a+3,ct-21,1,pe.k),e.restore()}}function Nw(e){const t=w.game;if(!t||!t.zones)return;const n=w.T;let o=!1;for(const r of t.zones){if(r.fx!=="castor_kegs"||r.t<=0||Rh(r)<.38)continue;o||(o=!0,pt(!0),e=Wt());const i=Oa(Rh(r)/(r.dur||10)),a=8+34*i,s=(n*a+(r.id||0)|0)&1;Re(r.x,r.y);const l=At+5,u=ct-37;Et(e,l,u,s?6:3,s?Xt.w:Xt.m),s&&Et(e,l+y(-3,3),u+y(-3,1),1,gn.y),Math.random()<.06+.25*i&&I(r.x,r.y,.28,y(-.5,.5),y(-.5,.5),y(.6,1.2),.25,Math.random()<.5?Xt.l:gn.y,2,6,!0)}o&&pt(!1)}function Bw(e){const t=e.x,n=e.y,o=e.radius||1.9,r=Math.random()*ce;T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Re(t,n,.5+a*.4);const s=1-a,l=10+mi(Oa(a*3))*22;i.globalAlpha=s,i.fillStyle=gn.r,_n(i,At,ct,Gt(l*s+4)),i.fillStyle=gn.o,_n(i,At,ct-2,Gt(l*.75*s+3)),i.fillStyle=gn.y,_n(i,At,ct-3,Gt(l*.45*s+2)),a<.3&&(i.fillStyle=gn.w,_n(i,At,ct-3,Gt(l*.3)));for(let u=0;u<10;u++){const f=r+u/10*ce,c=l+8+u%3*6;Zn(i,At+Math.cos(f)*l*.6,ct+Math.sin(f)*l*.45,At+Math.cos(f)*c,ct+Math.sin(f)*c*.6-a*10,3,u&1?gn.o:gn.y)}}}),T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){Re(t,n);const s=o*Bi()*(.25+.75*mi(a));i.globalAlpha=(1-a)*.95;for(let l=0;l<26;l++){const u=r+l/26*ce;Et(i,At+Math.cos(u)*s,ct+Math.sin(u)*s*.5,l&1?5:7,Ma[l%3])}}});for(let i=0;i<6;i++){const a=Math.random()*ce,s=y(2,5);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(3,6),y(.7,1),i&1?Yn.m:Yn.l,4,13,!1,.96)}for(let i=0;i<2;i++){const a=Math.random()*ce;I(t,n,.4,Math.cos(a)*3,Math.sin(a)*3,y(4,6),.9,pe.m,3,13,!1,.96)}for(let i=0;i<14;i++){const a=Math.random()*ce,s=y(1,4);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(1,3.5),y(.4,.7),[gn.w,gn.y,gn.o,gn.r][i%4],3,3,!0)}$d(t,n,6,o*.6,[110,104,100],18,32),Tr({type:"scorch",x:t,y:n,r:1.2,dur:6}),ht(t,n,o*1.3,Da,1,.45),Q(8)}H.castor_Q=e=>{if(e.type==="castor_ram"){kw(e);return}if(e.type==="castor_turret"){Sw(e);return}return!1};H.castor_W=e=>{if(e.type==="castor_tar_go"){_w(e);return}if(e.type==="castor_tar_drop"){Tw(e);return}if(e.type==="castor_broadside"){Uw(e);return}return!1};H.castor_E=e=>{if(e.type==="cast_castor_saw"){zw(e);return}if(e.type==="castor_keg_drop"){Xw(e);return}if(e.type==="castor_keg_boom"){Bw(e);return}return!1};H.castor_R=e=>{if(e.type==="citadel"){Fw(e);return}return!1};H.castor_petfade=e=>{if(e.sprite!=="castor_turret"&&e.sprite!=="castor_tar")return!1;const t=e.x,n=e.y,o=e.sprite==="castor_tar";for(let l=0;l<5;l++){const u=Math.random()*ce,f=y(1.2,3);I(t,n,.4,Math.cos(u)*f,Math.sin(u)*f,y(2,4),.7,[pe.m,He.m,Yn.m,Yn.l,pe.l][l],3,12,!1,.96)}if(o){for(let l=0;l<4;l++)I(t,n,.3,y(-1,1),y(-1,1),y(.5,1.5),.5,zn.d,3,8,!1);for(let l=0;l<3;l++)I(t,n,.5,y(-.3,.3),y(-.3,.3),y(.8,1.2),1,qi[l],6,-.4,!1,.93)}else T({type:"puff",x:t,y:n,r:18,dur:.8,col:[150,145,140]});J.sfx(o?"castor_cart_down":"castor_turret_down",t,n,.8);const r=w.game;let i=null,a=144;const s=!!(r&&r.fx&&r.fx.some(l=>l.type==="death"&&l.uid===e.uid));if(r&&s){for(const l of r.heroes||r.units)if(l.heroKey==="castor"&&!l.dead){const u=(l.x-t)**2+(l.y-n)**2;u<a&&(a=u,i=l)}}if(i){const l=i.id;T({type:"custom",layer:"top",dur:.8,x:i.x,y:i.y,draw(u,f){const c=Z(l);c&&(Re(c.x,c.y,1.25+f*.4),u.globalAlpha=f>.6?(1-f)/.4:1,eg(u,At,ct,5,f*8,He.l,He.k))}})}return!0};Eu.castor=e=>{const t=Wt();e==="ground"?(Ow(t),Gw(t)):Nw(t)};Ca.castor_tar_drop=()=>null;Ca.castor_ram=()=>"ab_castor_ram";Ca.castor_broadside=()=>"ab_castor_broadside";let E2=-9;Ca.castor_keg_drop=()=>w.T-E2<.15?null:(E2=w.T,"ab_castor_kegs");Ca.castor_keg_boom=()=>"castor_kegboom";let Ye=0,Ke=0;function Xo(e,t,n=0){Ye=(e-t)*N.HW+N.OX,Ke=(e+t)*N.HH-n*N.ZK}function Ro(e,t,n,o){const r=Math.max(1,Math.round(o));e.fillRect(Math.round(t-r/2),Math.round(n-r/2),r,r)}const rg=e=>e<0?0:e>1?1:e,ln=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],$w="#3a2420",Hd="#2a1410",Wd=e=>e>=5?$w:ln[e<0?0:e|0];function Zu(e,t,n,o){const r=o*.5,i=Math.max(1,Math.round(r/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=o*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-r/2+a*3),Math.max(1,Math.round(l)),3)}}H.dragon_Q=e=>{const t=e.x,n=e.y,o=e.ux||1,r=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(r,o),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=s+(h/(l-1)-.5)*a*1.5;const m=i*y(.7,1);for(let p=0;p<=u;p++){const g=.35+(m-.35)*p/u;d+=y(-.13,.13);const x=(h*(u+1)+p)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const c=(h,d,m)=>{const p=rg(d/.25)*u;for(let g=0;g<l;g++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),M=(g*(u+1)+x)*2;Xo(f[M],f[M+1]);const v=Ye,S=Ke;Xo(f[M+2],f[M+3]);const _=v+(Ye-v)*b,A=S+(Ke-S)*b,R=Math.max(1,Math.round(Math.hypot(_-v,A-S)/3)),C=m*(1-x/u*.5);for(let z=0;z<=R;z++)Ro(h,v+(_-v)*z/R,S+(A-S)*z/R,C)}};T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=Hd,c(h,d*1.8,6)}}),T({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(h,d){const m=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Wd(m/.3),c(h,m,3)}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(h,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const g=.4+(i-.4)*p,x=a*(.45+.55*p),b=5+Math.round(g*3);h.globalAlpha=1-p,h.fillStyle=ln[Math.min(3,m+(p*2|0))];for(let M=0;M<=b;M++){const v=s+(M/b-.5)*2*x,S=g*(.9+.1*Math.sin(M*2.3+m*1.7));Xo(t+Math.cos(v)*S,n+Math.sin(v)*S,.35+.12*Math.sin(M*1.3+d*18)),Ro(h,Ye,Ke,8-m-p*4)}}}});for(let h=0;h<32;h++){const d=s+y(-a,a)*.9,m=y(.3,1)*i*2.4;I(t+o*.45,n+r*.45,.45,Math.cos(d)*m,Math.sin(d)*m,y(1.2,3),y(.7,1.05),ln[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+y(-a,a),m=y(.6,1)*i*3.2;I(t+o*.45,n+r*.45,.5,Math.cos(d)*m,Math.sin(d)*m,y(.4,1.4),.35,ln[0],2,1,!0,.98)}Q(3)};const Hw=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],Ch=[],ig=[],ag=[];Hw.forEach((e,t)=>{for(let n=0;n<e.length;n++){const o="Ohrd".indexOf(e[n]);o>=0&&(Ch.push(n-2),ig.push(t),ag.push(o))}});const sg=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function Ww(e,t,n,o,r){for(let i=0;i<4;i++){e.fillStyle=r?i===0?"#ffd84a":ln[0]:sg[i];for(let a=0;a<Ch.length;a++)ag[a]===i&&e.fillRect(Math.round(t+Ch[a]*o),Math.round(n+ig[a]*o),o,o)}}H.dragon_W=e=>{const t=e.dur||3,n=8,o=6,r=(i,a)=>{for(let s=0;s<14;s++)I(i+y(-.3,.3),a+y(-.3,.3),y(.2,.8),y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),y(.5,.8),sg[2+(s&1)],4,9,!1,.95)};T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=Z(s.uid),u=a*t;if(!l||l.dead||w.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,r(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+o;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?o:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(b)>0;if(d===0===M)continue;const v=m*.035,S=rg((u-v)/.08);if(S<=0)continue;const _=(p?22:30)*c,A=(p?8:11)*c;Xo(l.x,l.y,p?.62:.22),i.globalAlpha=M?1:.4,Ww(i,Ye+Math.cos(b)*_,Ke+Math.sin(b)*A-10*(1-S)-6*c,h,u-v<.12)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){Xo(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=ln[1];for(let l=2;l<s;l+=3)Ro(i,Ye+l,Ke+l*.7,4),Ro(i,Ye-l,Ke+l*.7,4),Ro(i,Ye+l,Ke-l*.7,4),Ro(i,Ye-l,Ke-l*.7,4);i.fillStyle=ln[0],Ro(i,Ye,Ke,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;I(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,y(.6,1.2),y(.5,.8),ln[1+i%3],2,-1,!0,.9)}};H.dragon_E=e=>{const t=e.x,n=e.y,o=e.dur||.3,r=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=r-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let m=0;m<c;m++){const p=(m+.5)/c,g=y(-.16,.16);h[m*4]=t+a*p-f*g,h[m*4+1]=n+s*p+u*g,h[m*4+2]=y(18,30),h[m*4+3]=p*o}const d=o+1.9;T({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const g=p*d;for(let x=0;x<c;x++){const b=g-h[x*4+3];if(b<0)continue;const M=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(M<=0)continue;Xo(h[x*4],h[x*4+1]);const v=h[x*4+2];m.globalAlpha=M*.8,m.fillStyle=Hd,Zu(m,Ye,Ke+1,v+6);const S=b/.3|0;m.globalAlpha=M,m.fillStyle=Wd(S),Zu(m,Ye,Ke,v*(S<5?.8:.6)),S<4&&q(x*7+(g*12|0))>.72&&(m.fillStyle=ln[0],m.fillRect(Math.round(Ye+(q(x*3+(g*12|0))-.5)*v*.5),Math.round(Ke-2),2,2))}m.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:o+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,g){const x=Z(g.uid),b=x?x.x:r,M=x?x.y:i;Xo(b,M,.4);const v=Ye,S=Ke;Xo(b+u,M+f,.4);let _=Ye-v,A=Ke-S;const R=Math.hypot(_,A)||1;_/=R,A/=R;const C=1-p*.6;for(let z=0;z<9;z++){const O=(10+z*5*(.8+Math.random()*.4))*C;m.globalAlpha=1-z/10,m.fillStyle=ln[Math.min(4,z>>1)],Ro(m,v-_*O+(Math.random()-.5)*3,S-A*O+(Math.random()-.5)*3,(10-z)*C)}if(g.n<22&&p<.9){for(let z=0;z<2;z++){const O=y(-2.5,2.5);I(b,M,.35,-u*2-f*O,-f*2+u*O,y(.5,1.6),.5,ln[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&p>.85){g.end=!0;for(let z=0;z<8;z++){const O=z/8*6.28;I(b,M,.1,Math.cos(O)*2.5+u,Math.sin(O)*2.5+f,.4,.6,z&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;I(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}Q(4)};const du=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],mu=[],lg=[],ug=[];du.forEach((e,t)=>{for(let n=0;n<e.length;n++){const o=e[n];if(o===".")continue;const r=(i,a)=>a<0||a>=du.length||i<0||i>=e.length||du[a][i]===".";mu.push(n-9),lg.push(t),ug.push(o==="o"?2:r(n-1,t)||r(n+1,t)||r(n,t-1)||r(n,t+1)?1:0)}});const qw=["#ff7a20","#ffd84a","#fffbe0"];H.dragon_R=e=>{const t=e.x,n=e.y,o=e.radius||3.6,r=o*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*r,l[u]=n+Math.sin(f)*r}T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=c-d*.05;m<0||(Xo(s[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=Hd,Zu(u,Ye,Ke+1,46),u.globalAlpha=h,u.fillStyle=Wd(m/.45),Zu(u,Ye,Ke,26))}u.globalAlpha=1}}),T({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const c=o*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const m=d/h*6.28;Xo(t+Math.cos(m)*c,n+Math.sin(m)*c),u.fillStyle=ln[d&1],Ro(u,Ye,Ke,7*(1-f)+2)}}}),T({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const m=h-d*.05;if(m<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let v=0;v<5;v++)I(s[d],l[d],.3,y(-.8,.8)+(s[d]-t)*.4,y(-.8,.8)+(l[d]-n)*.4,y(3,5),y(.6,.9),ln[v%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const g=95*p;Xo(s[d],l[d]);const x=Ye,b=Ke;u.globalAlpha=Math.min(1,p*1.5);const M=h*24|0;for(let v=0;v<g;v+=4){const S=v/g,_=16*(1-S*.75)+(q(d*31+v+M)-.5)*4,A=(q(d*17+v*3+M)-.5)*7*S;if(u.fillStyle=S<.25?ln[1]:S<.6?ln[2]:ln[3],u.fillRect(Math.round(x+A-_/2),Math.round(b-v-4),Math.round(_),4),S<.7){u.fillStyle=ln[0];const R=_*.4;u.fillRect(Math.round(x+A-R/2),Math.round(b-v-4),Math.max(2,Math.round(R)),4)}}}}}),T({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,Xo(t,n,h);const m=Ye,p=Ke-du.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=qw[g];for(let x=0;x<mu.length;x++){if(ug[x]!==g)continue;const b=Math.abs(mu[x]),M=b>=4?Math.round(Math.sin(c*14)*(b-3)*.45):0;u.fillRect(Math.round(m+mu[x]*d-d/2),Math.round(p+(lg[x]+M)*d),d,d)}}}}),Q(9)};Qe.dragon=e=>{const t=e.x,n=e.y,o=!!e.big;for(let r=0;r<(o?8:5);r++)I(t,n,.45,y(-1.3,1.3),y(-1.3,1.3),y(1.6,3.2),y(.3,.5),r<3?ln[0]:ln[1],2,10,!0,.97);I(t,n,.45,y(-.5,.5),y(-.5,.5),1,.45,ln[2],3,8,!0,.95),T({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(r,i){Xo(t,n,.45);const a=4+i*(o?16:11),s=Math.max(2,Math.round(a/3));r.globalAlpha=1-i,r.fillStyle=i<.4?ln[1]:ln[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),c=a*u*.7;Ro(r,Ye+f,Ke+c,3),Ro(r,Ye-c/.7,Ke+f*.7,3),Ro(r,Ye-f,Ke-c,3),Ro(r,Ye+c/.7,Ke-f*.7,3)}i<.3&&(r.fillStyle=ln[0],Ro(r,Ye,Ke,6))}})};const Kn="#fff2d6",po="#e2b878",za="#9a6232",pi="#4e2e16",rl="#e8643a",Ys="#ffcc66",Ju="#a07a48",mn=Math.round,Ir=Math.PI*2;function hn(e,t,n,o,r,i){e.fillStyle=i,e.fillRect(mn(t),mn(n),o,r)}function Cr(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(mn(t+(o-t)*l/s-i/2),mn(n+(r-n)*l/s-i/2),i,i)}function Ks(e,t,n,o,r,i=rl){const a=Math.max(3,Math.ceil(Math.hypot(o-t,r-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?za:l>.82?i:Kn,e.fillRect(mn(t+(o-t)*l-u/2),mn(n+(r-n)*l-u/2),u,u)}}function Tc(e,t,n,o,r){e.fillStyle=r;for(let i=-o;i<=o;i+=2){const a=mn(Math.sqrt(Math.max(0,o*o-i*i)));e.fillRect(mn(t-a),mn(n+i),a*2,2)}}function fg(e,t){const n=(e-t)*N.HW,o=(e+t)*N.HH,r=Math.hypot(n,o)||1;return[n/r,o/r]}const cg=e=>{const t=Z(e);return t&&!t.dead&&!Ge(t)?t:null},Vw=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},hg=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Pe.erizo_A=(e,t,n,o,r)=>{e.translate(mn(n),mn(o)),e.rotate(r),hn(e,-15,-2,16,4,pi),hn(e,-14,-1,14,2,po),hn(e,-9,-1,3,2,Kn),hn(e,-4,-1,3,2,Kn),hn(e,0,-2,3,4,pi),hn(e,3,-1,3,2,rl),hn(e,6,0,2,1,Ys),hn(e,-17,-4,5,2,Kn),hn(e,-17,2,5,2,Kn),Math.random()<.3&&I(t.x,t.y,t.z||.45,0,0,-.3,.25,po,2,0,!1)};Qe.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:y(0,Ir),l:y(8,12)}));T({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,o){const[r,i]=P(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-o)*2.5);for(const a of t)Ks(n,r+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,r,i)}});for(let n=0;n<5;n++)I(e.x,e.y,.45,y(-2,2),y(-2,2),y(.5,2),.3,n%2?po:Kn,2,6,!1)};Pe.erizo_Q=(e,t,n,o,r,i)=>{const s=t.z||.45;e.translate(mn(n),mn(o)),e.rotate(r),hn(e,-31,-3,32,6,pi);for(let u=0;u<30;u+=6)hn(e,-30+u,-2,3,4,Kn),hn(e,-30+u+3,-2,3,4,za);hn(e,0,-3,4,6,pi),hn(e,4,-2,4,4,rl),hn(e,8,-1,3,2,Ys);for(let u=0;u<3;u++)hn(e,-36+u*3,-6+u,4,2,Kn),hn(e,-36+u*3,4-u,4,2,Kn);pt(!0);const l=Wt();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=Ys;for(let u=0;u<5;u++)l.fillRect(-6-u*6,mn(Math.sin(i*38+u*1.3)*5)-1,2,2);pt(!1),Math.random()<.5&&I(t.x,t.y,s,y(-.4,.4),y(-.4,.4),.3,.35,Math.random()<.5?Kn:po,2,3,!1)};H.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[o,r]=fg(t,n),i=-r,a=o;T({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,c]=P(e.x+t*.35,e.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),m=f+o*d,p=c+r*d,g=f+i*15-o*5,x=c+a*15-r*5,b=f-i*15-o*5,M=c-a*15-r*5;l.globalAlpha=1-u,Cr(l,f+o*3,c+r*3,g,x,3,za),Cr(l,f+o*3,c+r*3,b,M,3,za),Cr(l,g,x,m,p,2,Kn),Cr(l,b,M,m,p,2,Kn)}}),T({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,c]=P(e.x+t*.5,e.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),g=o*m-r*p,x=o*p+r*m,b=d?h*.55:h;Cr(l,f,c,f+g*b,c+x*b,3,Ys),Cr(l,f,c,f+g*b*.5,c+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)I(e.x-t*.2,e.y-n*.2,.4,-t*y(1,2.5)+y(-.5,.5),-n*y(1,2.5)+y(-.5,.5),y(.3,1),.45,l%2?po:Ju,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+y(-.25,.25),f=y(5,9);I(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,y(0,.6),.22,l%2?Ys:Kn,2,0,!0,.86)}Q(1.5)};H.erizo_W=e=>{const t=e.dur||2.5,n=18,o=r=>(i,a,s)=>{const l=cg(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?hg(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=P(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*Ir+.17,p=Math.sin(m);if(p>=0!==r)continue;const g=u<t?Math.sin(w.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=c+Math.cos(m)*16,M=h+p*12,v=b+Math.cos(m)*x+g,S=M+p*x*.75-x*.3;Ks(i,b,M,v,S,(w.T*7+d*.37)%1<.12?"#ffffff":rl)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:o(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:o(!0)}),T({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(r,i){const a=.35+i*.75;r.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*Ir,[u,f]=P(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[c,h]=P(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Cr(r,u,f,c,h,2,s%2?po:za)}}});for(let r=0;r<14;r++){const i=r/14*Ir,a=y(2,3.5);I(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,y(1.5,3),.5,r%3?Kn:po,2,8,!1,.92)}Q(2)};H.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,o=Math.max(.12,e.dur||.25),r=t-e.x,i=n-e.y,a=Math.hypot(r,i)||1,s=-i/a,l=r/a,[u,f]=fg(r,i),c=u>=0?1:-1;T({type:"custom",layer:"top",dur:o+.12,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,x/o);let M=e.x+r*b,v=e.y+i*b;const S=Z(e.uid);if(S){if(S.dead||Ge(S))return;M=S.x,v=S.y}const[_,A]=P(M,v,.32),R=16,C=x*36*c;m.globalAlpha=x>o?Math.max(0,1-(x-o)/.12):1;for(let z=0;z<3;z++){const O=(z-1)*9;Cr(m,_-u*(R+4)-f*O,A-f*(R+4)+u*O,_-u*(R+18+z*5)-f*O,A-f*(R+18+z*5)+u*O,2,po)}Tc(m,_,A,R+1,pi),Tc(m,_,A,R-1,za),Tc(m,_-4,A-4,R-9,po);for(let z=0;z<10;z++){const O=C+z*Ir/10,E=Math.cos(O),U=Math.sin(O);Ks(m,_+E*(R-3),A+U*(R-3),_+E*(R+10),A+U*(R+10))}}});const h=Math.max(4,Math.min(10,mn(a*2.2))),d=Array.from({length:h},(m,p)=>({k:(p+.5)/h,o:y(-.28,.28),lean:y(-6,6),h:y(9,14)}));T({type:"custom",layer:"ground",dur:o+1.8,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,(g.dur-x)/.5);for(const M of d){if(x<M.k*o)continue;const v=Math.min(1,(x-M.k*o)/.08),[S,_]=P(e.x+r*M.k+s*M.o,e.y+i*M.k+l*M.o);m.globalAlpha=b*.45,hn(m,S-4,_-1,8,3,pi),m.globalAlpha=b,Ks(m,S+M.lean*v,_-M.h*v,S,_)}}});for(let m=0;m<12;m++){const p=Math.random();I(e.x+r*p+y(-.2,.2),e.y+i*p+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.5,1.4),y(.4,.7),m%2?po:Ju,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;I(e.x,e.y,.35,s*p*y(2,4),l*p*y(2,4),y(1.5,3),.45,Kn,2,8,!1,.92)}Q(2)};H.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=Vw(e),o=n&&n.dur||3,r=.16,i=36,a=Array.from({length:i},(h,d)=>{const m=Math.random()*Ir,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(o-.5)+y(0,.08),lean:y(-7,7),h:y(10,15),hit:!1}});T({type:"custom",layer:"ground",dur:o+.5,x:e.x,y:e.y,draw(h,d,m){const p=d*m.dur,g=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);h.globalAlpha=.85*g;for(let b=0;b<8;b++){const M=b*Ir/8+p*.4;for(const v of[-.09,.09]){const[S,_]=P(e.x+Math.cos(M+v)*x,e.y+Math.sin(M+v)*x),[A,R]=P(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));Cr(h,S,_,A,R,3,rl)}}h.globalAlpha=.45*g;for(let b=0;b<48;b++){const M=b/48*Ir-p*.2,[v,S]=P(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);hn(h,v-1,S-1,2,2,po)}for(const b of a){if(p<b.t0+r)continue;const[M,v]=P(b.x,b.y);h.globalAlpha=.4*g,hn(h,M-4,v-1,8,3,pi),h.globalAlpha=g,Ks(h,M+b.lean,v-b.h,M,v)}}}),T({type:"custom",layer:"top",dur:o+.2,x:e.x,y:e.y,draw(h,d,m){const p=d*m.dur;for(const g of a){const x=(p-g.t0)/r;if(x<0)continue;if(x>=1){g.hit||(g.hit=!0,I(g.x,g.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Math.random()<.5?po:Ju,2,7,!1));continue}const[b,M]=P(g.x,g.y,3.6*(1-x)),v=g.lean*1.4;h.globalAlpha=.35,Cr(h,b+v*2.4,M-52,b+v,M-22,1,Kn),h.globalAlpha=1,Ks(h,b+v,M-22,b,M)}}});const s=ka(e,o),l=w.T,u=Array.from({length:16},(h,d)=>({a:d/16*Ir+y(-.07,.07),h:d%2?y(1.2,1.35):y(1.6,1.8),tip:y(.84,.9),w:d%2?5:7,ph:Math.random()*Ir,dl:d/16*.3})).sort((h,d)=>Math.cos(h.a)+Math.sin(h.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(h,d,m)=>{const p=io(s);if(p<=0){d.t=d.dur+1;return}const g=w.T-l,x=Math.min(1,p/.3);for(const b of u){const M=Math.cos(b.a),v=Math.sin(b.a);if(Wi(M,v,0)>0!==m)continue;const S=hg((g-b.dl)/.3)*x;if(S<=.02)continue;const _=Math.sin(w.T*1.8+b.ph)*.04,A=e.x+M*t,R=e.y+v*t;Xn(A,R);const C=zt.x,z=zt.y;Xn(e.x+Math.cos(b.a+_)*t*(1-(1-b.tip)*S),e.y+Math.sin(b.a+_)*t*(1-(1-b.tip)*S),b.h*S),Yw(h,C,z,zt.x,zt.y,b.w,m?1:.8),h.globalAlpha=m?1:.85,hn(h,C-6,z-1,12,3,Ju),hn(h,C-3,z-2,6,2,po)}h.globalAlpha=1};T({type:"custom",layer:"ground",dur:o+1,x:e.x,y:e.y,draw(h,d,m){f(h,m,!1),s.rem>0&&Mi(s,e.x,e.y,t*.9,16764006,.3)}}),T({type:"custom",layer:"top",dur:o+1,x:e.x,y:e.y,draw(h,d,m){f(h,m,!0)}});const c=cg(e.uid);if(c)for(let h=0;h<10;h++)I(c.x,c.y,.6,y(-.4,.4),y(-.4,.4),y(7,10),.45,h%2?Kn:po,2,0,!1,1);Q(2)};function Yw(e,t,n,o,r,i,a){const s=Math.max(4,Math.ceil(Math.hypot(o-t,r-n)/3));for(let l=0;l<=s;l++){const u=l/s,f=Math.max(1,mn(i*Math.pow(1-u,.75))),c=mn(t+(o-t)*u),h=mn(n+(r-n)*u);e.globalAlpha=a,e.fillStyle=pi,e.fillRect(c-f-1,h-2,f*2+2,4),e.fillStyle=u<.28?za:u>.84?rl:Kn,e.fillRect(c-f,h-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?pi:po,e.fillRect(c+mn(f*.3),h-2,f-mn(f*.3),4))}e.fillStyle=Ys,e.fillRect(mn(o)-1,mn(r)-1,2,2)}let _e=0,Ae=0;function Pn(e,t,n=0){_e=(e-t)*N.HW+N.OX,Ae=(e+t)*N.HH-n*N.ZK}function Zo(e,t,n,o){const r=Math.max(1,Math.round(o));e.fillRect(Math.round(t-r/2),Math.round(n-r/2),r,r)}const la=e=>e<0?0:e>1?1:e,Ph=e=>1-(1-e)*(1-e),he=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],to=["#ffe0f4","#ff9ad8","#e060b0"],Ki=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],yn=["#ffffff","#fff2a0","#ffd24a"];function qd(e,t,n,o){const r=[],i=[],a=[],s=[],l=e.length,u=(f,c)=>c<0||c>=l||f<0||f>=e[c].length||t.indexOf(e[c][f])<0;return e.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=t.indexOf(f[h]);d<0||(r.push(h-n),i.push(c-o),a.push(d),s.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(r),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:r.length,h:l}}const Rc=qd(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function dg(e,t,n,o){for(let r=0;r<Rc.n;r++)e.fillRect(Math.round(t+Rc.X[r]*o-o/2),Math.round(n+Rc.Y[r]*o-o/2),o,o)}function zi(e,t,n,o){Zo(e,t,n,3);for(let r=2;r<=o;r+=2)Zo(e,t+r,n+r,2),Zo(e,t-r,n+r,2),Zo(e,t+r,n-r,2),Zo(e,t-r,n-r,2)}function tf(e,t,n,o,r,i,a){for(let s=0;s<4;s++){const l=r+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*o,c=Math.sin(l)*o*i,h=Math.cos(u)*o,d=Math.sin(u)*o*i,m=Math.max(2,Math.round(o*1.41/(a+1)));for(let p=0;p<m;p++){const g=p/m;Zo(e,t+f+(h-f)*g,n+c+(d-c)*g,a)}}}function L2(e,t,n,o){for(let r=-o;r<o;r+=2){const i=2*Math.sqrt(Math.max(0,o*o-(r+1)*(r+1)));e.fillRect(Math.round(t-i/2),Math.round(n+r),Math.round(i),2)}}const yl=new Map;function mg(e,t,n=!1){if(e.id==null)return;let o=yl.get(e.id);if(!o){yl.size>200&&yl.clear(),o={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},yl.set(e.id,o);const r=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=w.game;if(l){for(const u of l.projs)if(u.id===r)return;s.fin=!0,s.dur=s.t,yl.delete(r),t(o)}}})}o.x=e.x,o.y=e.y,o.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(o.tgt=!0,o.tx=e.homing.x,o.ty=e.homing.y)}H.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(o,r){Pn(t,n,.45);const i=16*(1-r*.7);o.globalAlpha=1-r*.6,o.fillStyle=he[1],tf(o,_e,Ae,i,r*Math.PI,.75,3),o.fillStyle=to[1],tf(o,_e,Ae,i*.5,-r*Math.PI*1.5,.75,2),o.fillStyle=he[0],Zo(o,_e,Ae,4)}});for(let o=0;o<6;o++)I(t,n,.45,y(-1,1),y(-1,1),y(.3,1),.4,o&1?to[1]:he[1],2,0,!0)};Pe.gato_Q=(e,t,n,o,r,i)=>{mg(t,pg);const a=-Math.cos(r),s=-Math.sin(r),l=-s,u=a;for(let h=1;h<16;h++){const d=8+h*3.2,m=Math.sin(h*.7-i*22)*(2+h*.35);e.globalAlpha=1-h/16,e.fillStyle=h&1?to[1]:to[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(o+s*d+u*m),2,2)}e.globalAlpha=1,pt(!0);const f=Wt();f.fillStyle=he[3],f.globalAlpha=.16,L2(f,n,o,20),f.globalAlpha=.22,L2(f,n,o,13),f.globalAlpha=1,pt(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(m>9)continue;let p;m>6?p=he[4]:d===-2&&h===-2?p=he[0]:p=((d*.8+h+c)%4+4)%4<1.3?he[1]:he[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(o+h*3),3,3)}};function pg(e){const t=e.x,n=e.y;if(e.life<.07){for(let r=0;r<6;r++)I(t,n,.45,y(-.6,.6),y(-.6,.6),y(0,.6),.4,r&1?to[1]:he[2],2,1,!0);return}const o=Math.random()*6.28;T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(r,i){Pn(t,n,.45);const a=Math.round(14*la(i/.4));r.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=o+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,c=l+u*.3;r.fillStyle=u+s&1?to[1]:he[1],r.fillRect(Math.round(_e+Math.cos(c)*f),Math.round(Ae+Math.sin(c)*f*.7),2,2)}}i<.25&&(r.fillStyle=he[0],Zo(r,_e,Ae,10*(1-i*3)))}});for(let r=0;r<10;r++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(.5,1.5),y(.4,.6),r&1?to[0]:he[1],2,2,!0);Q(2)}const Hr=qd(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);H.gato_W=e=>{const t=e.x,n=e.y,o=e.radius||2.8,r=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,m=Math.cos(d),p=Math.sin(d),g=Math.atan2(m+p,m-p),x=g+Math.PI/2,b=Math.cos(x),M=Math.sin(x),v=new Float32Array(Hr.n*2);for(let S=0;S<Hr.n;S++)v[S*2]=Hr.X[S]*b-Hr.Y[S]*M,v[S*2+1]=Hr.X[S]*M+Hr.Y[S]*b;r.push({x:t+m*u,y:n+p*u,t:f+h*.014,c:v})}},a=Math.random()*6.28;i(5,o*.38,.03,a),i(9,o*.78,.14,a+.35),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of r){const d=f-h.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,g=Math.max(2,Math.round(p*.6)),x=Math.round(p);Pn(h.x,h.y),l.globalAlpha=c*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Ki[3]:b===1?Ki[1]:Ki[0];for(let M=0;M<Hr.n;M++){const v=Hr.B[M]===1,S=Hr.Y[M]<0;(b===0?!v:b===1?v||S:v||!S)||l.fillRect(Math.round(_e+h.c[M*2]*p-x/2),Math.round(Ae+h.c[M*2+1]*p*.5-g/2),x,g)}}}l.globalAlpha=1}});const s=Math.random()*6.28;T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=o*Ph(la(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),m=Math.sin(h);for(let p=.25;p<f;p+=.16)Pn(t+d*p,n+m*p),l.fillStyle=p<f*.5?Ki[1]:Ki[2],Zo(l,_e,Ae,4-p/o*2);if(f>o*.4){const p=f*.6;for(let g=-1;g<=1;g+=2){const x=h+g*.75;for(let b=.12;b<.45;b+=.12)Pn(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=Ki[0],Zo(l,_e,Ae,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*o;I(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,y(.3,1.1),Math.cos(u)*y(.5,2),Math.sin(u)*y(.5,2),y(0,.4),y(.7,1.1),Ki[l%2],2,.5,!0,.95)}Q(4)};const ji=qd([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);H.gato_E=e=>{const t=e.x,n=e.y,o=e.ex??t,r=e.ey??n,i=Math.random()*99;T({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){Pn(t,n);const l=3,u=_e,f=Ae-2;for(let c=0;c<3;c++){a.fillStyle=c===0?he[3]:c===1?he[1]:yn[1];for(let h=0;h<ji.n;h++){if((ji.K[h]===1?2:ji.B[h]?1:0)!==c)continue;const m=q(h*7.13+i),p=-ji.Y[h]/(ji.h-1);m*.6+p*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+ji.X[h]*l-l/2),Math.round(f+ji.Y[h]*l-s*18*m),l,l))}}}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(Pn(t+(o-t)*f,n+(r-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-c,a.fillStyle=u&1?to[1]:he[1],zi(a,_e,Ae,8*(1-c)+2))}}}),T({type:"custom",layer:"top",dur:.65,x:o,y:r,draw(a,s){Pn(o,r,1.05);const l=_e,u=Ae,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let m=0;m<5;m++){const p=c[m]*2,g=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?yn[2]:yn[1],a.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,g)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=to[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=he[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)I(t,n,.5,y(-.8,.8),y(-.8,.8),y(.5,1.5),.5,he[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;I(o,r,.5,Math.cos(s)*2,Math.sin(s)*2,y(.2,1),.45,a&1?to[1]:he[1],2,0,!0,.9)}};const D0=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Cc=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],Pc=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],Ci=3.7,k2=[1,.75,.55,.4,.28],qa=Math.round;let D2=null,U2=null,X2=[],G2=[];function N2(e,t,n,o,r,i,a){const s=w.T;for(let l=0;l<12;l++){const u=l/12*6.283+s*.5,f=Math.cos(u),c=Math.sin(u);if(Wi(f*Ci,c*Ci,o)>0===a)for(let h=1;h<=14;h++){const d=h/14;if(d>r)break;const m=((d-s*1.6+l*.29)%1+1)%1,p=m<.12;Pn(t+f*o*d,n+c*o*d,Ci*(1-d)),e.globalAlpha=i*(p?1:a?.55:.45),e.fillStyle=p?yn[0]:h%3?he[1]:to[1],p&&a?zi(e,_e,Ae,5):Zo(e,_e,Ae,p?4:3)}}}H.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,o=e.radius||3,r=1,i=o*.8*N.HW*Math.SQRT2;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(S,_){const A=_*1.1;Pn(t,n);const R=_e,C=Ae;S.globalAlpha=_>.85?(1-_)/.15:1;const z=Pc.length/2,O=la(A/.45)*z;S.fillStyle=he[1];for(let E=0;E<z&&E<O;E++){const U=Pc[E*2],G=Pc[E*2+1],Y=Math.min(1,O-E),L=R+D0[U]*i,k=C+Cc[U]*i*.55,D=R+D0[G]*i,$=C+Cc[G]*i*.55,W=Math.hypot(D-L,$-k)*Y,et=Math.round(W/6);for(let ot=0;ot<=et;ot++){const gt=ot*6/(W||1)*Y;S.fillRect(Math.round(L+(D-L)*gt),Math.round(k+($-k)*gt),2,2)}}for(let E=0;E<D0.length;E++)S.fillStyle=E>=9?yn[2]:yn[1],zi(S,R+D0[E]*i,C+Cc[E]*i*.55,3+3*(.5+.5*Math.sin(w.T*9+E*1.7)))}});const a=ka(e,r),s=()=>w.T-a.t0,l=()=>Ph(la(s()/.45)),u=S=>Math.min(1,s()/.15,S/.12+1e-4);T({type:"custom",layer:"ground",dur:r+1,x:t,y:n,draw(S,_,A){const R=io(a);if(R<=0){A.t=A.dur+1;return}const C=la(u(R)),z=l(),O=Ci*(1-z);Pn(t,n,O);const E=_e,U=Ae;D2!==S&&(D2=S,X2=[{u0:0,fill:Vt(S,he[3],5),a:.55},{u0:.65,fill:Vt(S,he[2],6),a:.55},{u0:.9,fill:Vt(S,he[1],10),a:.6}]),Xr(S,E,U,Ue(o*z),0,lr(Ci-O),!1,X2,k2,C),N2(S,t,n,o,z,C,!1),Mi(a,t,n,o*1.1,12615935,.7*C)}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:t,y:n,draw(S,_,A){const R=io(a);if(R<=0){A.t=A.dur+1;return}const C=la(u(R)),z=l(),O=Ci*(1-z);Pn(t,n,O);const E=_e,U=Ae;U2!==S&&(U2=S,G2=[{u0:0,fill:Vt(S,he[2],3),a:.5},{u0:.65,fill:Vt(S,he[1],4),a:.55},{u0:.9,fill:Vt(S,he[0],9),a:.7}]),Xr(S,E,U,Ue(o*z),0,lr(Ci-O),!0,G2,k2,C),N2(S,t,n,o,z,C,!0),Pn(t,n,Ci);const G=_e,Y=Ae,L=la(s()/.3);S.globalAlpha=C;for(let k=-9;k<=9;k+=2){const D=qa((14-Math.abs(k)*1.4)*L);if(D<1)continue;const $=Math.max(1,qa(2+2*Math.sin(w.T*3)));S.fillStyle=Math.abs(k)>6?yn[2]:yn[1],S.fillRect(qa(G-D),qa(Y+k),D-$,2),S.fillRect(qa(G+$),qa(Y+k),D-$,2)}S.fillStyle=yn[0],tf(S,G,Y,22+3*Math.sin(w.T*6),w.T*1.5,1,2)}});const f=12,c=new Float32Array(f),h=new Float32Array(f),d=new Float32Array(f);for(let S=0;S<f;S++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*o*.9;c[S]=t+Math.cos(_)*A,h[S]=n+Math.sin(_)*A,d[S]=.45+S/(f-1)*.55+y(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*N.ZK),g=40/p,x=-352.8/p;T({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(S,_,A){const R=_*1.2;for(let C=0;C<f;C++){const z=R-(d[C]-m);if(!(z<0))if(z<m){const O=z/m;Pn(c[C],h[C],4.5*(1-O));const E=_e+(1-O)*40,U=Ae;for(let G=-1;G<=1;G++){const Y=G*.12,L=g*Math.cos(Y)-x*Math.sin(Y),k=g*Math.sin(Y)+x*Math.cos(Y);S.fillStyle=G===0?to[1]:he[1];for(let D=1;D<10;D++)S.globalAlpha=1-D/10,S.fillRect(Math.round(E+L*D*3.2+G*3),Math.round(U+k*D*3.2),2,2)}S.globalAlpha=1,S.fillStyle=yn[1],S.fillRect(Math.round(E-6),Math.round(U-1),12,2),S.fillRect(Math.round(E-1),Math.round(U-6),2,12),S.fillStyle=yn[0],S.fillRect(Math.round(E-2),Math.round(U-2),4,4)}else{if(!(A.landed&1<<C)){A.landed|=1<<C;for(let E=0;E<2;E++)I(c[C],h[C],.1,y(-1,1),y(-1,1),y(1,2),.45,E?yn[1]:to[1],2,4,!0)}const O=(z-m)/.2;if(O>=1)continue;Pn(c[C],h[C]),S.globalAlpha=1-O,S.fillStyle=yn[1],zi(S,_e,Ae,2+O*8)}}S.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,delay:r,dur:.55,x:t,y:n,boom:!1,draw(S,_,A){if(!A.boom){A.boom=!0,Q(8);for(let E=0;E<28;E++){const U=Math.random()*6.28,G=y(1,3.5);I(t,n,.3,Math.cos(U)*G,Math.sin(U)*G,y(1.5,3.5),y(.5,.8),[yn[1],he[1],to[1],he[0]][E&3],3,5,!0,.95)}}const R=.3+(o-.3)*Ph(_),C=_*2;Pn(t,n,.2);const z=_e,O=Ae;if(_<.35){const E=1-_/.35;S.fillStyle=he[1],S.globalAlpha=E*.25,S.fillRect(Math.round(z-70),Math.round(O-35),140,70),S.globalAlpha=E*.4,S.fillRect(Math.round(z-40),Math.round(O-20),80,40),S.fillStyle=he[0],S.globalAlpha=E*.7,S.fillRect(Math.round(z-15),Math.round(O-8),30,16)}S.globalAlpha=1-_*_;for(let E=0;E<10;E++){const U=C+E/10*6.28;Pn(t+Math.cos(U)*R,n+Math.sin(U)*R,.35+.2*Math.sin(_*6+E)),S.fillStyle=E&1?yn[2]:yn[1],dg(S,_e,Ae,3),S.fillStyle=yn[0],S.fillRect(Math.round(_e-1),Math.round(Ae-1),2,2)}}});const b=24,M=new Float32Array(b),v=new Float32Array(b);for(let S=0;S<b;S++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*o;M[S]=t+Math.cos(_)*A,v[S]=n+Math.sin(_)*A}T({type:"custom",layer:"ground",add:!0,delay:r,dur:2.4,x:t,y:n,draw(S,_){const A=w.T*8|0;for(let R=0;R<b;R++){const C=q(R*13+A);C<.25||(Pn(M[R],v[R]),S.globalAlpha=(1-_)*C,S.fillStyle=R%3?he[1]:yn[1],S.fillRect(Math.round(_e),Math.round(Ae),2,2))}}})};Pe.gato_A=(e,t,n,o,r,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);mg(t,Kw,a),pt(!0);const s=Wt(),l=Math.cos(r),u=Math.sin(r);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?to[1]:he[1],Zo(s,n-l*h*5,o-u*h*5,4-h*.6);s.globalAlpha=1;const f=a?7:5,c=(i*16|0)&1;if(s.fillStyle=he[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(o+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(o-h/2),h,h)}if(s.fillStyle=to[0],s.fillRect(Math.round(n-1.5),Math.round(o-1.5),3,3),a){s.fillStyle=yn[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(o+Math.sin(d)*7-1.5),3,3)}}pt(!1)};function yg(e,t,n){T({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(o,r){Pn(e,t,.45);const i=4+r*(n?18:12);o.globalAlpha=1-r,o.fillStyle=he[1],tf(o,_e,Ae,i,Math.PI/4,.75,2),o.fillStyle=to[1],zi(o,_e+i,Ae,3),zi(o,_e-i,Ae,3),zi(o,_e,Ae+i*.75,3),zi(o,_e,Ae-i*.75,3),n&&(o.fillStyle=yn[1],dg(o,_e,Ae-r*10,3+Math.round((1-r)*2)))}});for(let o=0;o<(n?8:4);o++)I(e,t,.45,y(-1,1),y(-1,1),y(.3,1.2),.35,n&&o&1?yn[1]:he[1],2,1,!0)}function Kw(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;yg(t,n,e.crit),J.sfx("atk_gato",t,n,e.crit?.9:.6)}Qe.gato=e=>yg(e.x,e.y,!!e.big);H.gato_Q_hit=e=>pg({x:e.x,y:e.y,life:9});const j=Math.round,yo=Math.PI*2;let Nt=0,Ht=0;function Le(e,t,n=0){Nt=(e-t)*N.HW+N.OX,Ht=(e+t)*N.HH-n*N.ZK}const Wn=e=>e<0?0:e>1?1:e,Vi=e=>1-(1-e)*(1-e),Vd=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function Yd(e,t,n,o,r){e.fillStyle=r,e.fillRect(j(t-o/2),j(n-o/2),o,o)}const V={w:"#ffffff",cy:"#22d6ff",cyl:"#a8fcff",cyd:"#0a6676",mag:"#ff1ee6",magl:"#ff96f5",magd:"#6a0a5e",bk:"#100816",pur:"#3c145a",lime:"#aaff3c",yel:"#ffdc3c",red:"#e8224a"},yi=2283263,gi=16719590,If=15267583,js=[V.mag,V.cy,V.yel,V.lime,V.w],Qs=[V.mag,V.cy,V.w,V.magl,V.cyl];Tn.glitch_bolt=[V.w,V.cyl,V.cy,V.mag];Tn.fragment=[V.w,V.magl,V.mag,V.cy];Tn.delete=[V.w,V.cyl,V.mag,V.cy];Tn.glitch_copy=[V.w,V.cyl,V.cy,V.cyd];Tn.glitch_dup=[V.w,V.cy,V.mag,V.red];const U0=new Map;let Wr=null,gl=null;function Ua(e,t,n,o){const r=Jt[e],i=No[e];if(!r||!i||!i.naturalWidth)return null;const[a,s]=Ed(r,t,n,o),l=e+"|"+a+"|"+s;let u=U0.get(l);if(u)return u;const f=r.fw,c=r.fh,h=Ay(e,a,s);if(!h)return null;const d=document.createElement("canvas");if(d.width=f,d.height=c,d.getContext("2d").drawImage(i,h[0],h[1],h[2],h[3],h[4],h[5],h[2],h[3]),Wr||(Wr=document.createElement("canvas"),gl=Wr.getContext("2d",{willReadFrequently:!0})),!gl)return null;Wr.width<f&&(Wr.width=f),Wr.height<c&&(Wr.height=c),gl.clearRect(0,0,Wr.width,Wr.height),gl.drawImage(d,0,0);let m;try{m=gl.getImageData(0,0,f,c).data}catch{return null}const p=f+1>>1,g=c+1>>1,x=new Uint8Array(p*g),b=new Uint32Array(p*g);let M=1e9,v=1e9,S=-1,_=-1;for(let R=0;R<g;R++)for(let C=0;C<p;C++){let z=0,O=-1;for(let E=0;E<2;E++)for(let U=0;U<2;U++){const G=C*2+U,Y=R*2+E;if(G>=f||Y>=c)continue;const L=(Y*f+G)*4;m[L+3]>z&&(z=m[L+3],O=L)}z>60&&(x[R*p+C]=1,b[R*p+C]=m[O]<<16|m[O+1]<<8|m[O+2],C<M&&(M=C),C>S&&(S=C),R<v&&(v=R),R>_&&(_=R))}const A=[];for(let R=0;R<g;R++)for(let C=0;C<p;C++){const z=R*p+C;x[z]||(C>0&&x[z-1]||C<p-1&&x[z+1]||R>0&&x[z-p]||R<g-1&&x[z+p])&&A.push(C,R)}return S<0&&(M=0,v=0,S=p-1,_=g-1),u={img:d,ox:0,oy:0,fw:f,fh:c,ax:r.ax,ay:r.ay,cw:p,ch:g,cells:x,cols:b,ring:Int16Array.from(A),bx0:M*2,by0:v*2,bx1:S*2+2,by1:_*2+2,v:{}},U0.size>140&&U0.clear(),U0.set(l,u),u}function wn(e,t){let n=e.v[t];if(n)return n;n=document.createElement("canvas"),n.width=e.fw,n.height=e.fh;const o=n.getContext("2d"),r=e.fw,i=e.fh;if(o.imageSmoothingEnabled=!1,t==="check"||t==="scan"){if(t==="check")for(let a=0;a<i;a+=6)for(let s=0;s<r;s+=6)o.fillStyle=s/6+a/6&1?V.pur:V.mag,o.fillRect(s,a,6,6);else{o.fillStyle=V.cy;for(let a=0;a<i;a+=4)o.fillRect(0,a,r,2)}o.globalCompositeOperation="destination-in",o.drawImage(e.img,e.ox,e.oy,r,i,0,0,r,i)}else if(o.drawImage(e.img,e.ox,e.oy,r,i,0,0,r,i),o.globalCompositeOperation="source-atop",o.globalAlpha=t==="white"?1:t==="ghost"?.62:.6,o.fillStyle=t==="white"?V.w:t==="ghost"?"#38e4f4":t==="red"?V.red:V.cy,o.fillRect(0,0,r,i),t==="white"||t==="ghost"){o.globalCompositeOperation="destination-out",o.globalAlpha=t==="white"?1:.5,o.fillStyle="#000";for(let a=2;a<i;a+=4)o.fillRect(0,a,r,2)}return e.v[t]=n,n}function Fo(e,t,n,o,r,i,a,s=0){a<=.003||(e.globalAlpha=Math.min(1,a),e.imageSmoothingEnabled=!1,n?e.drawImage(n,j(o-t.ax*i+s),j(r-t.ay*i),j(t.fw*i),j(t.fh*i)):e.drawImage(t.img,t.ox,t.oy,t.fw,t.fh,j(o-t.ax*i+s),j(r-t.ay*i),j(t.fw*i),j(t.fh*i)))}function Ei(e,t,n,o,r,i,a,s,l,u,f,c){const h=s-a,d=u-l;if(h<=0||d<=0||c<=.003)return;e.globalAlpha=Math.min(1,c),e.imageSmoothingEnabled=!1;const m=j(o+(a-t.ax)*i+f),p=j(r+(l-t.ay)*i);n?e.drawImage(n,a,l,h,d,m,p,j(h*i),j(d*i)):e.drawImage(t.img,t.ox+a,t.oy+l,h,d,m,p,j(h*i),j(d*i))}function jw(e,t,n,o,r,i,a){const s=t.ring,l=2*r,u=n-t.ax*r,f=o-t.ay*r,c=Math.max(1,j(l));e.globalAlpha=a;for(let h=0;h<2;h++){e.fillStyle=h?V.w:V.cy;for(let d=0;d<s.length;d+=2)(s[d]+s[d+1]+i>>1&1)===h&&e.fillRect(j(u+s[d]*l),j(f+s[d+1]*l),c,c)}}function ba(e){const t=Jt[e.sprite];if(!t)return null;let n="idle",o=0;if(t.anims)if(e.atkAnim>0&&t.anims.attack){n="attack";const r=t.anims.attack.n;o=Math.min(r-1,Math.floor((1-e.atkAnim/.45)*r))}else e.moving&&t.anims.walk?(n="walk",o=Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))):t.anims.idle?o=Math.floor((e.animT||0)*1e3/t.anims.idle.ms):n="walk";return Ua(e.sprite,n,t.dirs===1?0:e.dir||0,o)}function Ih(e){const t=Jt[e.sprite];return t?Ua(e.sprite,"idle",t.dirs===1?0:e.dir||0,0):null}const Io=e=>(e.scale||1)*(e._fbScale||1),B2={A:".#. #.# ### #.# #.#",C:".## #.. #.. #.. .##",D:"##. #.# #.# #.# ##.",E:"### #.. ##. #.. ###",G:".## #.. #.# #.# .##",I:"### .#. .#. .#. ###",L:"#.. #.. #.. #.. ###",N:"#..# ##.# #.## #..# #..#",O:".#. #.# #.# #.# .#.",P:"##. #.# ##. #.. #..",R:"##. #.# ##. #.# #.#",S:".## #.. .#. ..# ##.",T:"### .#. .#. .#. .#.",Y:"#.# #.# .#. .#. .#.",X:"#.# #.# .#. #.# #.#",".":". . . . #","!":"# # # . #"," ":".. .. .. .. ..","[":"## #. #. #. ##","]":"## .# .# .# ##"},o0={};for(const e in B2)o0[e]=B2[e].split(" ").map(t=>[...t].map(n=>n==="#"?1:0));function Qw(e,t){let n=0;for(const o of e)n+=((o0[o]||o0[" "])[0].length+1)*t;return n-t}function Zs(e,t,n,o,r,i,a){if(a<=.01)return;let s=j(t-Qw(o,i)/2);n=j(n),e.globalAlpha=a;for(const l of o){const u=o0[l]||o0[" "],f=u[0].length;for(let c=0;c<2;c++){e.fillStyle=c?r:V.bk;const h=c?0:i;for(let d=0;d<5;d++)for(let m=0;m<f;m++)u[d][m]&&e.fillRect(s+m*i+h,n+d*i+h,i,i)}s+=(f+1)*i}}function ei(e,t,n,o,r,i){e.fillStyle=r+i>>1&1?V.bk:V.w,e.fillRect(j(t),j(n),o,o)}function ef(e,t,n,o,r,i,a,s,l){if(s<=.01)return;t=j(t),n=j(n),o=j(o),r=j(r),e.globalAlpha=s;let u=0;for(let h=t;h<o;h+=i)ei(e,h,n,i,u++,a);for(let h=n;h<r;h+=i)ei(e,o,h,i,u++,a);for(let h=o;h>t;h-=i)ei(e,h,r,i,u++,a);for(let h=r;h>n;h-=i)ei(e,t,h,i,u++,a);if(!l)return;const f=j((t+o)/2),c=j((n+r)/2);Ko(e,t,n,i),Ko(e,o,n,i),Ko(e,t,r,i),Ko(e,o,r,i),Ko(e,f,n,i),Ko(e,f,r,i),Ko(e,t,c,i),Ko(e,o,c,i)}function Ko(e,t,n,o){const r=o*2+1;e.fillStyle=V.bk,e.fillRect(j(t-r/2-1+o/2),j(n-r/2-1+o/2),r+2,r+2),e.fillStyle=V.w,e.fillRect(j(t-r/2+o/2),j(n-r/2+o/2),r,r)}function Kd(e,t,n,o,r,i,a,s,l,u,f,c=0,h=1){const d=Math.hypot(o-t,r-n);if(d<1||f<=.01)return;const m=Math.floor(d/i);e.globalAlpha=f;for(let p=0;p<=m;p++){const g=(p*i+s%i)/d;g<c||g>h||(e.fillStyle=p&1?u:l,e.fillRect(j(t+(o-t)*g-a/2),j(n+(r-n)*g-a/2),a,a))}}function Zw(e,t,n,o,r,i){const a=[t-o,t+o,t+o,t-o],s=[n-o,n-o,n+o,n+o];e.globalAlpha=i;let l=0;for(let u=0;u<4;u++){Le(a[u],s[u]);const f=Nt,c=Ht;Le(a[(u+1)%4],s[(u+1)%4]);const h=Nt,d=Ht,m=Math.max(1,Math.floor(Math.hypot(h-f,d-c)/2));for(let p=0;p<m;p++)ei(e,f+(h-f)*p/m,c+(d-c)*p/m,2,l++,r)}for(let u=0;u<4;u++)Le(a[u],s[u]),e.fillStyle=V.bk,e.fillRect(j(Nt-3),j(Ht-3),6,6),e.fillStyle=V.w,e.fillRect(j(Nt-2),j(Ht-2),4,4)}function $2(e,t,n,o,r,i,a){e.globalAlpha=a,t=j(t);const s=j(n-o/2),l=j(n+o/2),u=6*r;e.fillStyle=V.bk,e.fillRect(t-3,s-1,4,l-s+2),e.fillRect(Math.min(t,t+u)-1,s-1,8,4),e.fillRect(Math.min(t,t+u)-1,l-2,8,4),e.fillStyle=i,e.fillRect(t-2,s,2,l-s),e.fillRect(Math.min(t-2,t-2+u),s,8,2),e.fillRect(Math.min(t-2,t-2+u),l-2,8,2)}function Jw(e,t,n,o,r,i,a=V.mag,s=V.cy){const l=Math.cos(o),u=Math.sin(o),f=r+2;e.globalAlpha=i;for(let c=-f;c<=f;c++)for(let h=-f;h<=f;h++){const d=h*l+c*u,m=-h*u+c*l,p=Math.max(Math.abs(d),Math.abs(m));p>r+.5||(e.fillStyle=p>r-.6?V.bk:d>0==m>0?a:s,e.fillRect(j(t+h*2-1),j(n+c*2-1),2,2))}}function Of(e,t,n,o,r,i){e.globalAlpha=i,t=j(t-o/2),n=j(n-o/2),e.fillStyle=V.bk,e.fillRect(t-1,n-1,o+2,o+2),e.fillStyle=r,e.fillRect(t,n,o,o),e.fillStyle=V.w,e.fillRect(t,n,Math.max(1,o>>1),2)}const Zr=[];(()=>{for(let e=0;e<11;e++)for(let t=0;t<11;t++){const n=Math.hypot(t-5,e-5);n>=4.3&&n<=5.6||n<4.3&&Math.abs(t-e)<=.5?Zr.push(t,e,0):n<4.3&&t>=2&&t<=8&&e>=3&&e<=6?Zr.push(t,e,(e===4||e===5)&&(t===3||t===5||t===7)?2:1):n<4.3&&t===3&&e===7&&Zr.push(t,e,1)}})();function tS(e,t,n,o){e.globalAlpha=o;const r=2,i=j(t-11),a=j(n-11);e.fillStyle=V.bk,e.fillRect(i-2,a-2,26,26);for(let s=0;s<Zr.length;s+=3)e.fillStyle=Zr[s+2]===0?V.red:Zr[s+2]===1?V.w:V.bk,e.fillRect(i+Zr[s]*r,a+Zr[s+1]*r,r,r);e.fillStyle=V.cy;for(let s=0;s<2;s++){const l=a+4+s*7+(w.T*6|0)%2;for(let u=0;u<3;u++)e.fillRect(i+25+u*2,l+u*2,2,2),e.fillRect(i+33-u*2,l+u*2,2,2)}}function zf(e,t){return t?(t.ay-t.by0)*Io(e):60}const eS=new Map,X0=new Map,_s=new Set,Fa=new Map,Wl=new Map;let H2=0,wr=null,Gn=null,Va=null,wo=null;function nS(e,t,n,o,r,i,a){const s=(n.r||.35)*.8,l=[];for(const M of t.grid&&t.grid.obs||[])Math.hypot(M.x-n.x,M.y-n.y)<M.r+s&&l.push({x:M.x,y:M.y,r:M.r,h:130});for(const M of t.units){if(M===n||M.dead||M.flying||Ge(M)||M.kind==="courier")continue;const v=(M.r||.35)*(M.scale||1);if(Math.hypot(M.x-n.x,M.y-n.y)<v+s*.9){const _=ba(M);l.push({x:M.x,y:M.y,r:v,h:_?(_.ay-_.by0)*Io(M):70})}}if(!l.length)return!1;Le(n.x,n.y);const u=Io(n),f=Nt,c=Ht,h=Math.floor(f-o.ax*u),d=Math.floor(c-o.ay*u),m=Math.ceil(o.fw*u)+2,p=Math.ceil(o.fh*u)+2;if(wr||(wr=document.createElement("canvas"),Gn=wr.getContext("2d"),Va=document.createElement("canvas"),wo=Va.getContext("2d")),!Gn||!wo||!Va)return!1;(wr.width<m||wr.height<p)&&(wr.width=Va.width=Math.max(wr.width,m),wr.height=Va.height=Math.max(wr.height,p)),wo.setTransform(1,0,0,1,0,0),wo.globalCompositeOperation="source-over",wo.globalAlpha=1,wo.clearRect(0,0,m,p),wo.fillStyle="#fff";let g=!1;for(const M of l){Le(M.x,M.y);const v=M.r*N.HW*Math.SQRT2,S=v*.5,_=Nt-h,A=Ht-d,R=A-M.h;wo.beginPath(),wo.ellipse(_,A,v,S,0,0,yo),wo.fill(),wo.fillRect(_-v,R,v*2,A-R),wo.beginPath(),wo.ellipse(_,R,v,S,0,0,yo),wo.fill(),g=!0}if(!g)return!1;Gn.setTransform(1,0,0,1,0,0),Gn.globalCompositeOperation="source-over",Gn.globalAlpha=1,Gn.clearRect(0,0,m,p),Gn.imageSmoothingEnabled=!1,Gn.translate(-h,-d);const x=.85+.15*Math.sin(i*23+n.id);if(Fo(Gn,o,wn(o,"ghost"),f,c,u,.85),Fo(Gn,o,wn(o,"check"),f,c,u,.6*x),(i+q(n.id)*.5)%.45<.09){const M=o.by0+j((o.by1-o.by0)*(.15+.6*q(n.id+(i/.45|0)))),v=Math.min(o.by1,M+10);Ei(Gn,o,wn(o,"red"),f,c,u,0,o.fw,M,v,-5,.9),Ei(Gn,o,wn(o,"cyan"),f,c,u,0,o.fw,M,v,5,.9)}return jw(Gn,o,f,c,u,r,1),Gn.setTransform(1,0,0,1,0,0),Gn.globalAlpha=1,Gn.globalCompositeOperation="destination-in",Gn.drawImage(Va,0,0),Gn.globalCompositeOperation="source-over",e.globalAlpha=1,e.drawImage(wr,0,0,m,p,h,d,m,p),a&&ht(n.x,n.y,1.1,yi,.45,.2,{uid:n.id}),!0}function oS(e){for(const t of Fa.values())if(t.tid===e.id)return t;for(const t of Fa.values())if(t.tid<0&&Math.hypot(t.x-e.x,t.y-e.y)<2.5)return t.tid=e.id,t;return null}Eu.glitch=e=>{const t=w.game;if(!t||!t.units)return;const n=w.T;if(e==="ground"){const a=Wt();for(const s of t.units){if(s.dead||!s.illusion||s.heroKey!=="glitch"||Ge(s))continue;Le(s.x,s.y);const l=(s.r||.35)*Io(s)*N.HW*1.5+4,u=l*.5,f=28;a.globalAlpha=.85;for(let c=0;c<f;c++){if((c+(n*10|0)&3)>1)continue;const h=c/f*yo;Yd(a,Nt+Math.cos(h)*l,Ht+Math.sin(h)*u,2,c&1?V.cyl:V.cy)}}return}const o=n>=H2;o&&(H2=n+.12);const r=Wt(),i=n*16|0;for(const a of t.units){if(a.dead){eS.delete(a.id),X0.delete(a.id);continue}const s=Ge(a),l=a.status||{};if(a.heroKey==="glitch"&&a.kind==="hero"&&!s){const u=ba(a);u&&nS(r,t,a,u,i,n,o)}if(a.illusion&&a.heroKey==="glitch"&&(_s.size>200&&_s.clear(),_s.add(a.id),!s)){const u=ba(a);if(u){Le(a.x,a.y);const f=Io(a);if(Fo(r,u,wn(u,"scan"),Nt,Ht,f,.32+.08*Math.sin(n*7+a.id)),(n+q(a.id)*1.6)%1.6<.12){const h=u.by0+j((u.by1-u.by0)*(.25+.4*q(a.id+(n/1.6|0)))),d=Math.min(u.by1,h+8);Ei(r,u,wn(u,"red"),Nt,Ht,f,0,u.fw,h,d,-4,.8),Ei(r,u,wn(u,"cyan"),Nt,Ht,f,0,u.fw,h,d,4,.8)}}o&&ht(a.x,a.y,.9,yi,.18,.2,{uid:a.id})}if(l.slow&&l.slow.fx==="fragment"){let u=X0.get(a.id);if(u===void 0&&(u=n,X0.set(a.id,n)),!s){const f=n-u,c=Ih(a),h=Io(a);Le(a.x,a.y);const d=Nt,m=Ht,p=zf(a,c),g=m-p*.45,x=(c?(c.bx1-c.bx0)*h*.5:24)+6,b=x*Math.min(1,f/.2)*(1-.25*Wn(f/1.5));for(let M=0;M<5;M++){const v=M/5*yo+f*4+f*f*1.6,S=Math.sin(v);Of(r,d+Math.cos(v)*b,g+S*b*.42+Math.sin(n*9+M)*1.5,8,js[M],S<0?.6:1)}tS(r,d+x+16,m-p*.8,.95),o&&ht(a.x,a.y,1,gi,.4,.2,{uid:a.id})}}else X0.delete(a.id);if(l.deleting){const u=Wl.get(a.id);if(u!==void 0&&n-u<.6)continue;const f=oS(a);if(s)continue;const c=Ih(a),h=Io(a);Le(a.x,a.y);const d=Nt,m=Ht,p=f?n-f.t0:1,g=Vi(Wn(p/.2)),x=(1-g)*42,b=c?d+(c.bx0-c.ax)*h-6:d-26,M=c?d+(c.bx1-c.ax)*h+6:d+26,v=c?m+(c.by0-c.ay)*h-6:m-64,S=c?m+(c.by1-c.ay)*h+4:m+6;f&&(f.rx0=b-d,f.ry0=v-m,f.rx1=M-d,f.ry1=S-m,f.tx=a.x,f.ty=a.y);const _=f?Wn(p/f.dur):.5+.4*Math.sin(n*3),A=ba(a);A&&g>=1&&Ei(r,A,wn(A,"check"),d,m,h,A.bx0,A.bx0+j((A.bx1-A.bx0)*_),0,A.fh,0,.5);const R=f?Z(f.uid):null;R&&!R.dead&&(Le(R.x,R.y,.75),Kd(r,Nt,Ht,d,(v+S)/2,7,2,n*40,V.cy,V.cyl,.9,0,g)),ef(r,b-x,v-x*.8,M+x,S+x*.5,2,i,1,!0);const C=Math.max(44,j(M-b)),z=j((b+M)/2-C/2),O=j(S+8);r.globalAlpha=g,r.fillStyle=V.bk,r.fillRect(z-1,O-1,C+2,8),r.fillStyle=V.magd,r.fillRect(z,O,C,6),r.fillStyle=V.mag,r.fillRect(z,O,j(C*_),6),r.fillStyle=V.magl,r.fillRect(z,O,j(C*_),2),Zs(r,(b+M)/2,O+11,["DELETING","DELETING.","DELETING..","DELETING..."][(n*4|0)%4],V.w,2,g),Math.random()<.35&&I(a.x+(Math.random()-.5)*.4,a.y+(Math.random()-.5)*.4,.3+Math.random()*.8,0,0,.9,.5,Math.random()<.5?V.mag:V.cy,2,-.4,!0),o&&ht(a.x,a.y,1.2,gi,.45+.25*_,.2,{uid:a.id})}}};const gg=new Map;function rS(e){const t=Z(e.uid),n=e.x,o=e.y,r=e.dur||4,i=w.T,a=t?t.sprite:"glitch",s=t&&t.dir||0,l=t?Io(t):1,u={end:i+r};gg.set(e.uid,u);const f=c=>{const h=w.T-u.end;return h>0?(h>.25&&(c.t=c.dur+1),1-h/.25):1};T({type:"custom",layer:"ground",dur:r+.4,x:n,y:o,draw(c,h,d){const m=f(d),p=w.T-i,g=Vi(Wn(p/.18));Zw(c,n,o,.42*(1.6-.6*g),w.T*14|0,m*(.9*g))}}),T({type:"custom",layer:"top",dur:r+.4,x:n,y:o,nl:0,draw(c,h,d){const m=f(d);if(m<=0)return;const p=w.T-i,g=Jt[a],x=g&&g.anims&&g.anims.idle?Math.floor(p*1e3/g.anims.idle.ms):0,b=Ua(a,"idle",s,x);Le(n,o);const M=u.end-w.T,v=M<1&&(w.T*12|0)%2===0,S=(w.T*1.1+.3)%1<.06;b&&(p<.16&&Fo(c,b,wn(b,"white"),Nt,Ht,l,m*(1-p/.16)),Fo(c,b,wn(b,"ghost"),Nt,Ht,l,m*(v?.25:.62)*Wn(p/.1),S?2:0),p<1.4&&Zs(c,Nt,Ht-zf({scale:l},b)-16-Math.min(6,p*30),"COPY",V.cy,2,m*(p>1?(1.4-p)/.4:1))),w.T>=d.nl&&(d.nl=w.T+.15,ht(n,o,1,yi,.3*m,.2))}});for(let c=0;c<10;c++){const h=c/10*yo;I(n+Math.cos(h)*.3,o+Math.sin(h)*.3,.2+c%3*.3,Math.cos(h)*.8,Math.sin(h)*.8,.8,.45,c&1?V.cy:V.w,2,0,!0)}ht(n,o,1.4,yi,.7,.35),J.sfx("ab_glitch_Q_copy",n,o,1)}function iS(e){const t=e.x,n=e.y,o=e.ex!==void 0?e.ex:e.x,r=e.ey!==void 0?e.ey:e.y,i=e.uid,a=gg.get(i);a&&(a.end=Math.min(a.end,w.T));const s=Z(i),l=s?s.sprite:"glitch",u=s&&s.dir||0,f=s?Io(s):1;T({type:"custom",layer:"top",dur:.75,x:o,y:r,draw(c,h){const d=h*.75,m=Ua(l,"idle",u,0);Le(t,n);const p=Nt,g=Ht,x=m?zf({scale:f},m):60;if(m&&d<.45&&Fo(c,m,wn(m,"ghost"),p,g,f,.55*(1-d/.45)),d<.55){const C=(m?(m.bx1-m.bx0)*f*.5:24)+8,z=Vi(Wn(d/.2)),O=C*(1.5-.5*z)*(d>.3?1-(d-.3)/.25*.8:1),E=d>.35?(.55-d)/.2:1;$2(c,p-O,g-x*.5,x+12,-1,V.w,E),$2(c,p+O,g-x*.5,x+12,1,V.w,E)}Le(o,r);const b=Nt,M=Ht;Kd(c,p,g-x*.4,b,M-x*.4,6,2,0,V.cy,V.cyl,1-h,Wn(d/.25-.25),Wn(d/.12));const v=Z(i),S=v?(Le(v.x,v.y),Nt):b,_=v?Ht:M;m&&Fo(c,m,wn(m,"white"),S,_,f,.95*(1-Wn(d/.35))),Zs(c,S,_-x-18-Math.min(8,d*30),"PASTE",V.mag,2,d>.5?(.75-d)/.25:1);const A=(.25+d*1.4)*N.HW*1.4,R=1-Wn(d/.5);if(R>0){c.globalAlpha=R;for(let C=0;C<24;C++){const z=C/24*yo;Yd(c,S+Math.cos(z)*A,_+Math.sin(z)*A*.5,2,C&1?V.mag:V.w)}}}});for(let c=0;c<12;c++){const h=c/12*yo;I(o,r,.3+c%4*.25,Math.cos(h)*1.4,Math.sin(h)*1.4,.5,.4,c&1?V.mag:V.w,2,0,!0)}for(let c=0;c<6;c++)I(t,n,.3+c*.15,0,0,.4,.35,V.cy,2,0,!0);ht(o,r,1.6,If,.8,.3),ht(t,n,1,yi,.5,.25),Vd(e)&&Q(2),J.sfx("ab_glitch_Q_paste",o,r,1)}H.glitch_Q=e=>(e.type==="glitch_copy"?rS(e):e.type==="glitch_paste"&&iS(e),!0);H.glitch_W=e=>{if(typeof e.type=="string"&&e.type.startsWith("cast_")){const t=e.ux||1,n=e.uy||0,o=e.x+t*.45,r=e.y+n*.45,i=new Float32Array(6);for(let s=0;s<6;s++)i[s]=(s-2.5)*.22;const a=Math.atan2(n,t);T({type:"custom",layer:"top",dur:.28,x:o,y:r,draw(s,l){for(let u=0;u<6;u++){const f=.15+l*(.7+u%3*.2);Le(o+Math.cos(a+i[u])*f,r+Math.sin(a+i[u])*f,.55+u%2*.12),Of(s,Nt,Ht,4,js[u%5],1-l)}}}),ht(o,r,1,gi,.6,.2)}return!0};Pe.glitch_W=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=(t.id||0)*1.3,u=i*30|0;for(let c=1;c<=6;c++){const h=c*6,d=(q(u+c*7+l)-.5)*6|0;e.globalAlpha=1-c/7,e.fillStyle=js[(c+u)%5],e.fillRect(j(n-a*h-s*d-2),j(o-s*h+a*d-2),c<3?4:2,c<3?4:2)}for(let c=0;c<4;c++){const h=i*9+c/4*yo;Of(e,n+Math.cos(h)*13,o+Math.sin(h)*6,4,js[c+1],1)}Jw(e,n,o,i*7+l,4,1);const f=i*12|0;t._lf!==f&&(t._lf=f,ht(t.x,t.y,1,gi,.55,.12))};H.glitch_W_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(o,r){Le(t,n,.5);const i=j(6+r*26);o.globalAlpha=1-r,o.fillStyle=V.w,r<.4&&o.fillRect(j(Nt-6*(1-r)),j(Ht-6*(1-r)),j(12*(1-r)),j(12*(1-r))),o.fillStyle=V.mag,o.fillRect(Nt-i,Ht-i,i*2,2),o.fillRect(Nt-i,Ht+i-2,i*2,2),o.fillStyle=V.cy,o.fillRect(Nt-i,Ht-i,2,i*2),o.fillRect(Nt+i-2,Ht-i,2,i*2)}});for(let o=0;o<8;o++){const r=o/8*yo;I(t,n,.5,Math.cos(r)*1.6,Math.sin(r)*1.6,.8,.3,Qs[o%5],2,2,!0)}ht(t,n,1.2,gi,.7,.25)};H.glitch_ev_fragment_burst=e=>{const t=e.x,n=e.y,o=e.uid,r=Math.random()*yo,i=Z(o),a=i?Io(i):1,s=i?Ih(i):null,l=i?zf(i,s):50,u=(s?(s.bx1-s.bx0)*a*.5:24)+6,f=14,c=new Float32Array(f),h=new Float32Array(f);for(let d=0;d<f;d++)c[d]=d/f*yo+q(d+r)*.4,h[d]=40+q(d*3+r)*50;T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(d,m){const p=m*.62,g=Z(o),x=g&&!g.dead?g.x:t,b=g&&!g.dead?g.y:n;Le(x,b);const M=Nt,v=Ht-l*.45;if(p<.12){const A=1-Vi(p/.12);for(let R=0;R<5;R++){const C=r+R/5*yo+p*20;Of(d,M+Math.cos(C)*u*A,v+Math.sin(C)*u*.42*A,6,js[R],1)}return}const S=(p-.12)/.5;if(g&&!g.dead&&S<.3){const A=ba(g);A&&Fo(d,A,wn(A,"white"),M,Ht,Io(g),.9*(1-S/.3))}const _=j(6+S*34);d.globalAlpha=1-S,d.fillStyle=V.w,S<.25&&d.fillRect(j(M-10*(1-S*3)),j(v-10*(1-S*3)),j(20*(1-S*3))+1,j(20*(1-S*3))+1),d.fillStyle=V.w,d.fillRect(M-_,v-1,_*2,3),d.fillRect(M-1,v-_,3,_*2),d.fillStyle=V.mag,d.fillRect(M-_,v-_,_*2,2),d.fillRect(M-_,v+_-2,_*2,2),d.fillStyle=V.cy,d.fillRect(M-_,v-_,2,_*2),d.fillRect(M+_-2,v-_,2,_*2);for(let A=0;A<f;A++){const R=h[A]*S,C=60*S*S;d.globalAlpha=1-S,d.fillStyle=Qs[A%5];const z=A%3===0?4:2;d.fillRect(j(M+Math.cos(c[A])*R-z/2),j(v+Math.sin(c[A])*R*.6+C-z/2),z,z)}}}),T({type:"custom",layer:"ground",delay:.12,dur:.4,x:t,y:n,draw(d,m){Le(t,n);const p=(.3+m*1.3)*N.HW*1.4;d.globalAlpha=1-m;for(let g=0;g<32;g++){const x=g/32*yo;Yd(d,Nt+Math.cos(x)*p,Ht+Math.sin(x)*p*.5,2,js[g%5])}}}),ht(t,n,1.8,If,.9,.3,{delay:.12}),ht(t,n,1.4,gi,.7,.4,{delay:.12}),(Vd(e)||w.game&&w.game.player&&o===w.game.player.id)&&Q(3),J.sfx("glitch_burst",t,n,1)};H.glitch_E=e=>{if(e.type!=="glitch_dup")return!0;const t=e.x,n=e.y,o=e.uid,r=Z(o),i=r?r.sprite:"glitch",a=r&&r.dir||0,s=r?Io(r):1,l=[];if(w.game)for(const c of w.game.units)!c.dead&&c.illusion&&c.heroKey==="glitch"&&(!e.team||c.team===e.team)&&Math.hypot(c.x-t,c.y-n)<2.2&&!_s.has(c.id)&&l.push(c.id);for(;l.length>2;)l.pop();const u=new Float32Array(2),f=new Float32Array(2);for(let c=0;c<2;c++){const h=l[c]?Z(l[c]):null,d=c*Math.PI+.6;u[c]=h?h.x:t+Math.cos(d)*1.1,f[c]=h?h.y:n+Math.sin(d)*1.1}T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(c,h){const d=h*.75,m=Ua(i,"idle",a,0);if(!m)return;Le(t,n);const p=Nt,g=Ht;if(d<.14){const x=j(d/.14*6);Fo(c,m,wn(m,"red"),p,g,s,.8,-x),Fo(c,m,wn(m,"cyan"),p,g,s,.8,x)}if(d>=.06&&d<.4){const x=Vi(Wn((d-.06)/.3)),b=w.T*30|0;for(let M=0;M<2;M++){const v=l[M]?Z(l[M]):null,S=v?v.x:u[M],_=v?v.y:f[M];Le(t+(S-t)*x,n+(_-n)*x);const A=wn(m,M?"cyan":"red"),R=(m.by1-m.by0)/3;for(let C=0;C<3;C++){const z=m.by0+j(C*R),O=(q(b+C*5+M*11)-.5)*8*(1-x)|0;Ei(c,m,A,Nt,Ht,s,0,m.fw,z,j(z+R)+1,O,.85)}}}if(d>=.3){const x=(d-.3)/.45;for(let b=0;b<2;b++){const M=l[b]?Z(l[b]):null,v=M?M.x:u[b],S=M?M.y:f[b];Le(v,S);const _=M&&ba(M)||m;Fo(c,_,wn(_,"white"),Nt,Ht,s,.9*(1-Wn(x*2.2)));const A=8+x*30;c.globalAlpha=1-x,c.fillStyle=b?V.cy:V.red;const R=Ht-20;for(let C=-A;C<=A;C+=4)c.fillRect(j(Nt+C),j(R-A*.7),2,2),c.fillRect(j(Nt+C),j(R+A*.7),2,2);for(let C=-A*.7;C<=A*.7;C+=4)c.fillRect(j(Nt-A),j(R+C),2,2),c.fillRect(j(Nt+A),j(R+C),2,2)}}}});for(let c=0;c<2;c++){for(let h=0;h<8;h++)I(u[c],f[c],.2+h*.12,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2,.6,.45,h&1?c?V.cy:V.red:V.w,2,0,!0);ht(u[c],f[c],1.1,c?yi:15213130,.6,.35,{delay:.3})}ht(t,n,1.3,If,.6,.25)};H.glitch_petfade=e=>{let t=_s.has(e.uid);const n=Z(e.uid);if(!t&&n&&n.illusion&&n.heroKey==="glitch"&&(t=!0),!t)return!1;_s.delete(e.uid);const o=e.x,r=e.y,i=n?n.sprite:e.sprite,a=n?n.dir||0:e.dir||0,s=n?Io(n):1,l=Ua(i,"idle",a,0),u=56,f=new Float32Array(u),c=new Float32Array(u),h=new Float32Array(u),d=new Float32Array(u),m=[];let p=0;if(l){let g=0;for(let M=0;M<l.cells.length;M++)g+=l.cells[M];const x=Math.max(1,Math.floor(g/u));let b=0;for(let M=0;M<l.cells.length&&p<u;M++){if(!l.cells[M]||b++%x)continue;const v=M%l.cw,S=M/l.cw|0;f[p]=(v*2-l.ax)*s,c[p]=(S*2-l.ay)*s,h[p]=f[p]*1.2+(q(M)-.5)*40,d[p]=-20-q(M*3)*50;const _=l.cols[M];m.push(p%4===0?V.mag:p%4===1?V.cy:"#"+(16777216+_).toString(16).slice(1)),p++}}return T({type:"custom",layer:"top",dur:.85,x:o,y:r,draw(g,x){Le(o,r);const b=x*.85;l&&b<.1&&Fo(g,l,wn(l,"white"),Nt,Ht,s,.9);for(let M=0;M<p;M++){const v=Math.max(0,b-.04-M%7*.012);g.globalAlpha=1-x,g.fillStyle=m[M],g.fillRect(j(Nt+f[M]+h[M]*v),j(Ht+c[M]+d[M]*v-30*v*v),2*Math.max(1,j(s)),2*Math.max(1,j(s)))}}}),ht(o,r,1,yi,.5,.3),J.sfx("fade_glitch_E",o,r,.6),!0};H.glitch_R=e=>{if(e.type!=="delete_start")return!0;Fa.set(e.uid,{uid:e.uid,tid:e.tid!==void 0&&e.tid!==0?e.tid:-1,x:e.x,y:e.y,t0:w.T,dur:e.dur||2,rx0:-26,ry0:-64,rx1:26,ry1:6,tx:e.x,ty:e.y}),e.tid&&Wl.delete(e.tid);const t=e.x,n=e.y;return T({type:"custom",layer:"top",dur:.22,x:t,y:n,draw(o,r){Le(t,n,.5);const i=70*(1-Vi(r))+22;o.globalAlpha=1-r*.5,o.fillStyle=V.w;for(const a of[-1,1])for(const s of[-1,1]){const l=j(Nt+a*i),u=j(Ht+s*i*.9);o.fillRect(l-(a>0?8:0),u,8,2),o.fillRect(l,u-(s>0?8:0),2,8)}}}),ht(t,n,1.6,gi,.7,.4),J.sfx("ab_glitch_R_start",t,n,1),!0};H.glitch_ev_delete_cancel=e=>{const t=Fa.get(e.uid);Fa.delete(e.uid);const n=e.tid||(t?t.tid:-1);n>0&&Wl.set(n,w.T),Wl.size>60&&Wl.clear();let o=e.why;if(!o){const d=Z(e.uid);o=d&&Math.hypot(d.x-e.x,d.y-e.y)>8.2?"escape":"stun"}const r=e.x,i=e.y;let a=!1;if(n>0){const d=Z(n);a=!d||!!d.dead}else if(w.game){for(const d of w.game.heroes||[])if(d.dead&&Math.hypot(d.x-r,d.y-i)<1.2){a=!0;break}}const s=o==="escape",l=t?t.rx0:-26,u=t?t.ry0:-64,f=t?t.rx1:26,c=t?t.ry1:6,h=Z(e.uid);T({type:"custom",layer:"top",dur:.9,x:r,y:i,draw(d,m){const p=m*.9,g=n>0?Z(n):null;Le(g&&!g.dead?g.x:r,g&&!g.dead?g.y:i);const x=Nt,b=Ht,M=(p*24|0)%3!==0,v=1-Wn((p-.25)/.35),S=Vi(Wn(p/.45))*22,_=90*p*p;if(v>0&&M){const A=x+l,R=x+f,C=b+u,z=b+c;d.globalAlpha=v;for(let O=A;O<R;O+=2)ei(d,O,C-S+_*.3,2,O-A>>1,0),ei(d,O,z+S+_,2,O-A>>1,0);for(let O=C;O<z;O+=2)ei(d,A-S,O+_*.6,2,O-C>>1,0),ei(d,R+S,O+_*.6,2,O-C>>1,0);Ko(d,A-S,C-S+_,2),Ko(d,R+S,C-S+_,2),Ko(d,A-S,z+S+_,2),Ko(d,R+S,z+S+_,2)}h&&!h.dead&&p<.35&&(Le(h.x,h.y,.75),Kd(d,Nt,Ht,x,b+(u+c)/2,7,2,0,V.cy,V.cyl,1-p/.35,0,1-p/.35)),a||Zs(d,x,b+u-34-p*16,s?"ESCAPED!":"CANCELED",s?V.lime:V.yel,2,p>.6?(.9-p)/.3:1)}});for(let d=0;d<8;d++)I(r+(Math.random()-.5)*.6,i+(Math.random()-.5)*.6,.3+Math.random()*.8,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5,.5,.4,d&1?V.w:V.cy,2,3,!1);return J.sfx("glitch_cancel",r,i,.9),!0};let xg=-9,Mg=0,bg=0;H.glitch_ev_delete_done=e=>{const t=Fa.get(e.uid);Fa.delete(e.uid);const n=e.tid||(t?t.tid:-1),o=e.x,r=e.y,i=e.killed!==void 0?!!e.killed:w.T-xg<.1&&Math.hypot(Mg-o,bg-r)<1.5,a=t?t.rx0:-26,s=t?t.ry0:-64,l=t?t.rx1:26,u=t?t.ry1:6;T({type:"custom",layer:"top",dur:.45,x:o,y:r,draw(f,c){const h=n>0?Z(n):null,d=h&&!h.dead;Le(d?h.x:o,d?h.y:r);const m=Nt,p=Ht,g=Vi(Wn(c/.4)),x=m+(a+l)/2,b=p+(s+u)/2;if(i||ef(f,x+(a-(a+l)/2)*(1-g),b+(s-(s+u)/2)*(1-g),x+(l-(a+l)/2)*(1-g),b+(u-(s+u)/2)*(1-g),2,0,1-c,!1),d&&c<.5){const v=ba(h);v&&Fo(f,v,wn(v,"white"),m,p,Io(h),1-c*2)}const M=j(4+c*30);f.globalAlpha=1-c,f.fillStyle=V.w,f.fillRect(j(x-M),j(b-1),M*2,3),f.fillRect(j(x-1),j(b-M),3,M*2)}});for(let f=0;f<16;f++){const c=f/16*yo;I(o,r,.5+f%3*.2,Math.cos(c)*2.4,Math.sin(c)*2.4,1.2,.5,Qs[f%5],f%4===0?4:2,4,!0)}return ht(o,r,2,If,.95,.3),ht(o,r,1.6,gi,.8,.5),Q(Vd(e)?5:2),J.sfx("glitch_delete",o,r,1),!0};H.glitch_death=e=>{let t=!!e.erased;if(!t&&w.game){for(const f of w.game.fx)if(!f.done&&f.type==="delete_done"&&f.hero==="glitch"&&Math.hypot(f.x-e.x,f.y-e.y)<1.5){t=!0;break}}if(!t)return!1;xg=w.T,Mg=e.x,bg=e.y;const n=e.x,o=e.y,r=e.scale||1,i=e.sprite?Ua(e.sprite,"idle",e.dir||0,0):null,a=(Z(e.uid)||{}).heroKey||e.sprite;a&&J.babble(a,"die",n,o),J.sfx("death",n,o,.7);const s=i?i.bx1-i.bx0>>1:0,l=new Uint8Array(Math.max(1,s));let u=0;if(T({type:"custom",layer:"top",dur:2.4,x:n,y:o,draw(f,c){const h=c*2.4;Le(n,o);const d=Nt,m=Ht+20*Math.min(h,.8);if(i){const p=Wn((h-.8)/.8),g=i.bx0+j((i.bx1-i.bx0)*p/2)*2;if(Ei(f,i,null,d,m,r,g,i.fw,0,i.fh,0,1),h<.8&&Ei(f,i,wn(i,"scan"),d,m,r,g,i.fw,0,i.fh,0,.35+.15*Math.sin(h*30)),h<.3&&Fo(f,i,wn(i,"white"),d,m,r,1-h/.3),p>0&&p<1){const S=d+(g-i.ax)*r;f.globalAlpha=1,f.fillStyle=(h*30|0)&1?V.cyl:V.w,f.fillRect(j(S-1),j(m+(i.by0-i.ay)*r),2,j((i.by1-i.by0)*r));const _=g-i.bx0>>1;for(let A=0;A<_&&A<l.length;A++){if(l[A]||u>=72)continue;l[A]=1;const R=(i.bx0>>1)+A;let C=-1,z=-1;for(let E=0;E<i.ch;E++)i.cells[E*i.cw+R]&&(C<0&&(C=E),z=E);if(C<0)continue;const O=(R*2-i.ax)*r;for(let E=0;E<3&&u<72;E++){const U=C+(q(A*3+E+n)*(z-C+1)|0),G=((i.ay-U*2)*r-16)/N.ZK;I(n+O/(2*N.HW),o-O/(2*N.HW),Math.max(0,G),(Math.random()-.5)*.4,(Math.random()-.5)*.4,1.2+Math.random()*1.4,.9+Math.random()*.6,Qs[(A+E)%5],E?2:3,-.6,!0),u++}}}const x=m+(i.by0-i.ay)*r-6,b=m+(i.by1-i.ay)*r+4,M=d+(i.bx1-i.ax)*r+6,v=d+(g-i.ax)*r-6;p<1?ef(f,v,x,M,b,2,w.T*16|0,h<.8?1:.9,h<.8):ef(f,M-8-10*Wn((h-1.6)/.2),x,M,b,2,0,1-Wn((h-1.6)/.25),!1),h>.8&&Zs(f,d+((i.bx0+i.bx1)/2-i.ax)*r,x-16-Math.min(6,(h-.8)*20),"DELETED",V.mag,2,h>2?(2.4-h)/.4:1)}else h>.3&&Zs(f,d,m-70,"DELETED",V.mag,2,h>2?(2.4-h)/.4:1)}}),!i)for(let f=0;f<30;f++)I(n+(Math.random()-.5)*.5,o+(Math.random()-.5)*.5,Math.random()*1.2,0,0,1.5+Math.random(),1,Qs[f%5],2,-.5,!0);return ht(n,o,1.8,gi,.8,1.6),!0};Pe.glitch_A=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=i*40|0;for(let f=1;f<=4;f++){const c=f*5+(l&1)*2;e.globalAlpha=1-f/5,e.fillStyle=f&1?V.cy:V.cyl,e.fillRect(j(n-a*c-2),j(o-s*c-1),4,2)}e.globalAlpha=.85,e.fillStyle=V.mag,e.fillRect(j(n-a*3-3),j(o-s*3-3),6,6),e.globalAlpha=1,e.fillStyle=V.cy,e.fillRect(j(n-4),j(o-4),8,8),e.fillStyle=V.w,e.fillRect(j(n-2),j(o-2),4,4),l>>2&3||(e.fillStyle=V.w,e.fillRect(j(n+4),j(o-6),2,2));const u=i*12|0;t._lf!==u&&(t._lf=u,ht(t.x,t.y,.8,yi,.45,.12))};Qe.glitch=e=>{const t=e.x,n=e.y,o=!!e.big;T({type:"custom",layer:"top",add:!0,dur:o?.3:.22,x:t,y:n,draw(r,i){Le(t,n,.45);const a=j((o?16:11)*(1-i))+2;if(r.globalAlpha=1-i,r.fillStyle=V.mag,r.fillRect(Nt-a-2,Ht-a,a*2,2),r.fillRect(Nt-a-2,Ht+a-2,a*2,2),r.fillStyle=V.cy,r.fillRect(Nt-a,Ht-a,2,a*2),r.fillRect(Nt+a-2,Ht-a,2,a*2),r.fillRect(Nt-a,Ht-a,a*2,2),r.fillRect(Nt-a,Ht+a-2,a*2,2),r.fillStyle=V.w,r.fillRect(Nt-1,Ht-5,2,10),r.fillRect(Nt-5,Ht-1,10,2),o)for(let s=0;s<4;s++){const l=s/4*yo+.785,u=6+i*18;r.fillRect(j(Nt+Math.cos(l)*u-1),j(Ht+Math.sin(l)*u-1),3,3)}}});for(let r=0;r<(o?6:3);r++)I(t,n,.45,(Math.random()-.5)*1.6,(Math.random()-.5)*1.6,.6,.25,Qs[r%5],2,2,!0);ht(t,n,o?1.1:.8,yi,o?.6:.4,.18)};const Qt=Math.round,Je=Math.PI*2;let Yt=0,Kt=0;function Ee(e,t,n=0){Yt=(e-t)*N.HW+N.OX,Kt=(e+t)*N.HH-n*N.ZK}function ao(e,t,n,o,r){e.fillStyle=r,e.fillRect(Qt(t-o/2),Qt(n-o/2),o,o)}function va(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Qt(t+(o-t)*l/s-i/2),Qt(n+(r-n)*l/s-i/2),i,i)}function ca(e,t,n,o,r=1){for(let i=-o;i<o;i+=2){const a=2*Math.sqrt(Math.max(0,o*o-(i+1)*(i+1)));e.fillRect(Qt(t-a/2),Qt(n+i*r),Qt(a),Math.max(1,Qt(2*r)))}}const Li=e=>e<0?0:e>1?1:e,ui=e=>1-(1-e)*(1-e),it={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},Ya=new Float32Array(72),Ka=new Float32Array(72);function xr(e,t,n,o,r,i,a,s,l,u,f,c,h){const d=o-t,m=r-n,p=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let v=0;v<=g;v++){const S=v/g,_=v===0||v===g?0:(q(s+v*7.31)-.5)*2*a*Math.sqrt(Math.sin(S*Math.PI));Ya[v]=t+d*S+x*_,Ka[v]=n+m*S+b*_}if(f>0)for(let v=0;v<g;v++)va(e,Ya[v],Ka[v],Ya[v+1],Ka[v+1],f,l);for(let v=0;v<g;v++)va(e,Ya[v],Ka[v],Ya[v+1],Ka[v+1],c,u);const M=Math.atan2(m,d);for(let v=0;v<h;v++){const S=1+Math.floor(q(s+v*3.7+50)*Math.max(1,g-1));let _=Ya[S],A=Ka[S],R=M+(q(s+v*9.1)>.5?1:-1)*(.45+q(s+v*1.3)*.6);for(let C=0;C<3;C++){const z=i*(1-C*.2),O=_+Math.cos(R)*z,E=A+Math.sin(R)*z;va(e,_,A,O,E,Math.max(1,c-1),C?l:u),_=O,A=E,R+=(q(s+v*5+C)-.5)*1.3}}}function nf(e,t,n,o,r,i,a,s){let l=t,u=n,f=o;for(let c=0;c<5;c++){f+=(q(r+c)-.5)*.9;const h=i*(1-c*.13),d=l+Math.cos(f)*h,m=u+Math.sin(f)*h*.5;if(va(e,l,u,d,m,2,a),q(r+c*3.3)>.45){const p=f+(q(r+c*7)>.5?.85:-.85);va(e,d,m,d+Math.cos(p)*h*.6,m+Math.sin(p)*h*.3,2,a)}l=d,u=m}s&&ao(e,l,u,3,s)}function of(e,t,n,o,r){e.fillStyle=it.cloudD,e.fillRect(Qt(t-3*o),Qt(n-o),6*o,2*o),e.fillStyle=r?it.cloudL:it.cloud,e.fillRect(Qt(t-2*o),Qt(n-2*o),4*o,2*o),e.fillStyle=r?it.pale:it.cloudM,e.fillRect(Qt(t-o),Qt(n-2.6*o),2*o,Qt(o*.8))}H.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,o=Math.random()*999;T({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(r,i){Ee(t,n,.6);const a=Yt,s=Kt,l=w.T*40|0;r.globalAlpha=1-i;for(let u=0;u<5;u++){const f=q(o+u+l*3)*Je,c=10+q(o+u*2+l)*14;xr(r,a,s,a+Math.cos(f)*c,s+Math.sin(f)*c*.7,5,3,o+u*11+l,it.cyan,it.white,0,1,0)}ao(r,a,s,Qt(8*(1-i))+2,it.white)}});for(let r=0;r<8;r++)I(t,n,.6,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.25,r&1?it.cyan:it.white,2,3,!0)};const G0=new Map;Pe.halcon_Q=(e,t,n,o,r,i)=>{let a=t.id!=null?G0.get(t.id):void 0;t.id!=null&&!a&&(G0.size>64&&G0.clear(),a=[t.x,t.y],G0.set(t.id,a));const s=Math.cos(r),l=Math.sin(r),u=150;let f=n-s*u,c=o-l*u;pt(!0);const h=Wt();if(a){Ee(a[0],a[1],t.z||.45);const p=Math.hypot(n-Yt,o-Kt);if(p<u)f=Yt,c=Kt;else{h.globalAlpha=.4,h.fillStyle=it.blue;const g=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<g;b++){if(q(b*3.1+x)<.35)continue;const M=(u+b*9)/p;h.fillRect(Qt(n+(Yt-n)*M),Qt(o+(Kt-o)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;h.globalAlpha=.16,h.fillStyle=it.blue,ca(h,n,o,18),h.globalAlpha=1,xr(h,n,o,f,c,11,7,d,it.cyan,it.white,4,2,2);const m=5+((i*30|0)&1)*3;h.fillStyle=it.pale,h.fillRect(Qt(n-m),Qt(o-1),m*2,2),h.fillRect(Qt(n-1),Qt(o-m),2,m*2),h.fillStyle=it.white,h.fillRect(Qt(n-3),Qt(o-3),6,6),pt(!1)};H.halcon_Q_hit=e=>{const t=e.x,n=e.y,o=Math.random()*999,r=Math.random()*Je;T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){Ee(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)nf(i,Yt,Kt,r+s*Je/6,o+s*13,9,it.scorch)}}),T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){Ee(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)nf(i,Yt,Kt,r+s*Je/6,o+s*13,9,it.cyan,it.white)}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Ee(t,n,.5);const s=w.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=q(o+l*5+s)*Je,f=18+q(o+l+s*2)*16;xr(i,Yt,Kt-6,Yt+Math.cos(u)*f,Kt+Math.sin(u)*f*.6,6,4,o+s*7+l,it.blue,it.pale,3,1,0)}a<.3&&ao(i,Yt,Kt,Qt(22*(1-a/.3))+2,it.white)}});for(let i=0;i<12;i++)I(t,n,.5,y(-2.2,2.2),y(-2.2,2.2),y(1,2.6),y(.25,.45),i%3?it.cyan:it.yel,2,7,!0,.9);Q(2)};const pu=new Map;H.halcon_W=e=>{if(e.type==="splash"||e.impact){aS(e);return}const t=e.x,n=e.y,o=e.ex??t,r=e.ey??n,i=e.dur||.45;Ee(t,n);const a=Yt,s=Kt;Ee(o,r);const l=Math.hypot(Yt-a,Kt-s)||1,u=(Yt-a)/l,f=(Kt-s)/l;pu.size>32&&pu.clear(),pu.set(e.uid,[u,f]);for(let c=0;c<8;c++)I(t,n,.7,y(-1,1),y(-1,1),y(1,2.5),y(.6,.9),c%3?it.featherL:it.cream,3,1.2,!1,.9);T({type:"custom",layer:"ground",add:!0,dur:i+.05,x:o,y:r,draw(c,h){Ee(o,r);const d=Yt,m=Kt,p=64*(1-ui(h))+24,g=h*2.6;c.globalAlpha=.5+.5*h;const x=h>.75&&(w.T*20|0)&1?it.white:it.cyan;for(let b=0;b<4;b++){const M=g+b*Je/4;for(let v=-3;v<=3;v++){const S=M+v*.09;ao(c,d+Math.cos(S)*p,m+Math.sin(S)*p*.5,3,x)}for(let v=1;v<=2;v++)ao(c,d+Math.cos(M)*(p-v*5),m+Math.sin(M)*(p-v*5)*.5,2,it.white)}ao(c,d,m,3,it.white)}}),T({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(c,h){const d=Li(h*(i+.15)/i),m=-f,p=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;Ee(t+(o-t)*x,n+(r-n)*x,.55);const b=Math.sin(x*Math.PI)*50,M=Yt,v=Kt-b,S=1-g/12;c.globalAlpha=S*(h>.8?(1-h)/.2:1);for(const _ of[-1,1]){const A=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;ao(c,M+m*A*_+R,v+p*A*_-Math.sin(x*34)*3,g<3?3:2,g<4?it.white:it.pale)}g%3===0&&(c.fillStyle=it.cyan,c.fillRect(Qt(M-u*10),Qt(v-f*10),2,2))}}})};function aS(e){const t=e.x,n=e.y,o=e.radius||1.5,r=Math.random()*999,i=pu.get(e.uid)||[0,1];T({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){Ee(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*Je+q(r+l)*.5,f=o*N.HW*(.5+q(r+l*3)*.4);va(a,Yt,Kt,Yt+Math.cos(u)*f*.6,Kt+Math.sin(u)*f*.3,2,it.ash),va(a,Yt+Math.cos(u)*f*.6,Kt+Math.sin(u)*f*.3,Yt+Math.cos(u+.25)*f,Kt+Math.sin(u+.25)*f*.5,2,it.ash)}ao(a,Yt,Kt,8,it.ash)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=w.T*30|0;for(let f=0;f<2;f++){const c=Li(s*1.4-f*.2);if(c<=0||c>=1)continue;const h=.2+o*1.1*ui(c);a.globalAlpha=1-c;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*Je;Ee(t+Math.cos(m)*h,n+Math.sin(m)*h),ao(a,Yt,Kt,f?2:3,f?it.pale:it.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const c=f/u*Je+s*.8,h=(f+1)/u*Je+s*.8;Ee(t+Math.cos(c)*o*.85,n+Math.sin(c)*o*.85);const d=Yt,m=Kt;Ee(t+Math.cos(h)*o*.85,n+Math.sin(h)*o*.85),xr(a,d,m-4,Yt,Kt-4,7,4,r+f*9+l,it.blue,it.pale,0,2,0),ao(a,d,m-4,4,it.white)}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+o*1.3*ui(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*Je+.2;Ee(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const c=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let h=-2;h<=2;h++){const d=c+h*.35,m=9-Math.abs(h);ao(a,Yt-Math.cos(c)*6+Math.cos(d)*m,Kt-Math.sin(c)*6+Math.sin(d)*m,h?2:3,h?it.pale:it.white)}}s<.2&&(a.globalAlpha=1-s/.2,Ee(t,n,.2),a.fillStyle=it.white,ca(a,Yt+i[0]*6,Kt+i[1]*6,Qt(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*Je,l=y(1.5,3.5);I(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,y(.5,1.6),y(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)I(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1.5,2.5),y(.8,1.1),a&1?it.featherL:it.feather,3,1.5,!1,.92);Q(6)}H.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,o=e.y,r=4.5;T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:o,uid:e.uid,draw(i,a,s){const l=Z(s.uid);Ee(l?l.x:n,l?l.y:o,.8);const u=Yt,f=Kt,c=ui(Li(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const h of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+h*(.3+c*(.45+d*.24)),p=16+d*5+c*10;for(let g=6;g<p;g+=3){const x=g>p-6;ao(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/p*c*9,x?2:3,x?it.white:d&1?it.pale:it.cyan)}}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:o,draw(i,a){const s=.5+(r-.5)*ui(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*Je+a*1.6;for(let f=0;f<3;f++){const c=u+f*.07;Ee(n+Math.cos(c)*s,o+Math.sin(c)*s),ao(i,Yt,Kt,3-f,f?it.pale:it.white)}}}})}for(let n=0;n<5;n++){const o=n/5*Je;I(e.x,e.y,.3,Math.cos(o)*1.5,Math.sin(o)*1.5,y(.8,1.5),.4,n&1?it.pale:it.white,2,0,!0)}T({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,o,r){const i=Z(r.uid);if(!i||i.dead){r.t=r.dur+1;return}const a=i.x-r.lx,s=i.y-r.ly;r.lx=i.x,r.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(r.dx=r.dx*.82+l/f*.18,r.dy=r.dy*.82+u/f*.18):(r.dx*=.95,r.dy*=.95);const c=Math.hypot(r.dx,r.dy),h=o*r.dur;n.globalAlpha=Math.min(1,h/.15)*(h>r.dur-.4?(r.dur-h)/.4:1),Ee(i.x,i.y,.45);const d=Yt,m=Kt;if(c>.35){const p=r.dx/c,g=r.dy/c,x=w.T*70%11;for(let v=0;v<3;v++){const S=14+v*11+x,_=d-p*S,A=m-g*S,R=v===0?it.white:v===1?it.pale:it.cyan;for(const C of[-1,1]){const z=Math.cos(C*.75),O=Math.sin(C*.75),E=-(p*z-g*O),U=-(p*O+g*z);for(let G=0;G<4;G++)ao(n,_+E*G*3,A+U*G*3,2,R)}}const b=-g,M=p;for(const v of[-1,1])for(let S=0;S<6;S++){const _=10+S*5+w.T*90%5;(S+(v>0?1:0))%3!==0&&(n.fillStyle=it.pale,n.fillRect(Qt(d-p*_+b*12*v),Qt(m-g*_+M*12*v),2,1))}}else for(let p=0;p<3;p++){const g=w.T*5+p*Je/3;ao(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,p?it.pale:it.white)}}})};const N0=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],qr=(()=>{const e=[],t=[],n=[],o=N0.length,r=(i,a)=>a>=0&&a<o&&i>=0&&i<N0[a].length&&N0[a][i]!==".";return N0.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:r(s-1,a)&&r(s+1,a)&&r(s,a-1)&&r(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();H.halcon_R=e=>{if(e.type==="global_hit"){sS(e);return}const t=e.x,n=e.y,o=Math.random()*999,r=1.5;T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(i,a){Ee(t,n,3);const s=Yt,l=Kt,u=30+60*ui(Li(a*2)),f=w.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let c=0;c<9;c++){const h=c/9*Je+a*3.2;of(i,s+Math.cos(h)*u,l+Math.sin(h)*u*.38,5+c%3,q(o+c+f)>.8)}of(i,s,l,7,q(o+f)>.7)}}),T({type:"custom",layer:"top",add:!0,dur:r,x:t,y:n,uid:e.uid,draw(i,a,s){const l=Z(s.uid),u=l?l.x:t,f=l?l.y:n;Ee(t,n,3);const c=Yt,h=Kt,d=30+60*ui(Li(a*2)),m=w.T*15|0,p=a>.75?(1-a)/.25:1;if(i.globalAlpha=p,q(o+m*1.7)>.45){const x=q(o+m)*Je,b=x+1.2+q(o+m*3)*2;xr(i,c+Math.cos(x)*d,h+Math.sin(x)*d*.38,c+Math.cos(b)*d,h+Math.sin(b)*d*.38,9,6,o+m,it.blue,it.pale,3,1,1)}const g=a*r;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(Ee(u,f,1),xr(i,c,h+8,Yt,Kt,12,10,o+(g*25|0),it.blue,it.white,5,2,2)),g>.3){const x=Li((g-.3)/.35),b=Qt(2+2*ui(x)),M=(w.T*24|0)%5===0?.5:1;Ee(u,f,2.2+x*.4);const v=Yt,S=Kt;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?it.indigo:_===1?it.cyan:it.yel;for(let A=0;A<qr.n;A++)qr.K[A]===_&&i.fillRect(Qt(v+qr.X[A]*b-b/2),Qt(S+qr.Y[A]*b-b/2),b,b)}i.fillStyle=it.white;for(let _=0;_<qr.n;_++)qr.K[_]===1&&qr.Y[_]<-2&&i.fillRect(Qt(v+qr.X[_]*b-1),Qt(S+qr.Y[_]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*Je,s=y(2,3);I(t+Math.cos(a)*s,n+Math.sin(a)*s,y(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,y(.5,1.2),.6,i%3?it.pale:it.cloudL,2,0,i%3!==0,.97)}Q(5)};function sS(e){const t=e.x,n=e.y,o=Math.random()*999,r=Math.random()*Je;J.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};T({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,c=ui(Li(f/.12));Ee(t,n,3.6);const h=Yt,d=Kt,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const g=p/6*Je+o;of(l,h+Math.cos(g)*38*c,d+Math.sin(g)*12*c,Qt(4+2*c),m&&p%2===0)}of(l,h,d,Qt(5+3*c),m)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,c=s(f);Ee(t,n,3.5);const h=Yt+(q(o)-.5)*30,d=Kt;if(Ee(t,n,.1),c){const m=o+c*31;l.globalAlpha=.45,xr(l,h,d,Yt,Kt,16,22,m,it.indigo,it.blue,0,9,0),l.globalAlpha=1,xr(l,h,d,Yt,Kt,16,22,m,it.cyan,it.white,6,3,3),l.globalAlpha=c===1?.35:.18,l.fillStyle=it.pale,ca(l,Yt,Kt-20,70,.6)}if(f>.1){const m=Li((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=it.cyan,ca(l,Yt,Kt,Qt(26*(1-m*.5)),.5),l.fillStyle=it.white,ca(l,Yt,Kt,Qt(12*(1-m)),.5)}}}),T({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Ee(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=it.scorch,ca(l,Yt,Kt,16,.5);for(let f=0;f<8;f++)nf(l,Yt,Kt,r+f*Je/8,o+f*17,13,it.scorch)}}),T({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Ee(t,n);const f=w.T*25|0;l.globalAlpha=1-u;for(let c=0;c<8;c++)nf(l,Yt,Kt,r+c*Je/8,o+c*17,13,c&1?it.blue:it.cyan,it.white);for(let c=0;c<3;c++){const h=q(o+c+f)*Je,d=30+u*60;xr(l,Yt,Kt,Yt+Math.cos(h)*d,Kt+Math.sin(h)*d*.5,7,5,o+f*3+c,it.blue,it.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*Je,f=y(1.5,4);I(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,y(2,4),y(.4,.8),l%3===0?it.yel:l%3===1?it.cyan:it.ash,l%3===2?3:2,8,l%3!==2,.92)}Q(8)}Pe.halcon_A=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=-s,u=a;for(let h=0;h<=16;h+=2){const d=h<3?0:h<12?3:2,m=n-a*h,p=o-s*h;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,b=(h===8||h===12)&&g!==0;e.fillStyle=g===0?it.white:b?it.feather:x?it.cyan:it.pale,e.fillRect(Qt(m+l*g-1),Qt(p+u*g-1),2,2)}}pt(!0);const f=Wt(),c=i*24|0;f.globalAlpha=.2,f.fillStyle=it.blue,ca(f,n-a*6,o-s*6,12),f.globalAlpha=1;for(let h=0;h<2;h++){const d=4+q(c+h*3+(t.id||0))*10,m=h?1:-1,p=n-a*d,g=o-s*d;xr(f,p,g,p+l*m*9-a*6,g+u*m*9-s*6,4,2,c*7+h,it.cyan,it.white,0,1,0)}f.fillStyle=it.white,f.fillRect(Qt(n-2),Qt(o-2),4,4),pt(!1)};Qe.halcon=e=>{const t=e.x,n=e.y,o=!!e.big,r=Math.random()*99,i=o?18:11;T({type:"custom",layer:"top",add:!0,dur:o?.26:.18,x:t,y:n,draw(a,s){Ee(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;xr(a,Yt,Kt,Yt+Math.cos(u)*i*(.6+s*.5),Kt+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,r+l,it.cyan,it.white,0,2,0)}ao(a,Yt,Kt,Qt((o?10:6)*(1-s))+2,it.white)}});for(let a=0;a<(o?8:4);a++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(.5,1.5),.25,a&1?it.yel:it.cyan,2,5,!0)};let de=0,me=0;function Mn(e,t,n=0){de=(e-t)*N.HW+N.OX,me=(e+t)*N.HH-n*N.ZK}function Mr(e,t,n,o){const r=Math.max(1,Math.round(o));e.fillRect(Math.round(t-r/2),Math.round(n-r/2),r,r)}const r0=e=>e<0?0:e>1?1:e,i0=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),Co=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],ts=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Er=["#8a6a48","#5a3a20","#3a2414"],Si=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Qr=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function vg(e,t){const n=[],o=[],r=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),o.push(a),r.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(o),c:Uint8Array.from(r)}}function Oh(e,t,n,o,r,i,a=-1){const s=Math.round(n-t.w*r/2),l=Math.round(o-t.h*r);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*r,l+t.y[f]*r,r,r)}}const lS=vg(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),uS=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],W2=vg(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),q2=[Qr[3],Qr[2],Qr[0],"#4a2a6a","#e0d8f0","#a898c0"],xl=new Map;function fS(e,t){if(e.id==null)return;let n=xl.get(e.id);if(!n){xl.size>200&&xl.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},xl.set(e.id,n);const o=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(r,i,a){if(a.fin)return;const s=w.game;if(s){for(const l of s.projs)if(l.id===o)return;a.fin=!0,a.dur=a.t,xl.delete(o),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}H.hongo_Q=e=>{const t=e.x,n=e.y,o=e.radius||1.8,r=7,i=new Float32Array(r*4);for(let u=0;u<r;u++){const f=Math.random()*6.28,c=u===0?0:o*y(.45,.9);i[u*4]=t+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:y(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*o*.95;s[u]=t+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}T({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<a;h++){const d=r0((c-.2-h%r*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Mn(s[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=Co[1+h%3],u.fillRect(Math.round(de),Math.round(me),h%3?3:4,2))}u.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<r;d++){const m=i[d*4+3],p=m-.16,g=i[d*4+2];if(Mn(i[d*4],i[d*4+1]),h<m){if(h<p)continue;const M=i0(r0((h-p)/.13)),v=g*M*(1+.12*Math.sin(h*60+d)),S=Math.max(1,Math.round(v*2/3));for(let _=0;_<S;_++){const A=(_+.5)/S*2-1,R=v*2*Math.sqrt(1-A*A);u.fillStyle=_===0?ts[0]:A<.3?ts[1]:ts[2],u.fillRect(Math.round(de-R/2),Math.round(me-v*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=ts[3],u.fillRect(Math.round(de-v*.2),Math.round(me-v*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let M=0;M<4;M++)I(i[d*4],i[d*4+1],.25,y(-.6,.6),y(-.6,.6),y(.4,1.1),y(.9,1.4),Co[M%3],3,.25,!1,.92)}const x=(h-m)/.35;if(x>=1)continue;const b=g*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const v=M/8*6.28+d;u.fillStyle=Co[M&1?1:2],Mr(u,de+Math.cos(v)*b,me-g+Math.sin(v)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=ts[0];for(let M=0;M<3;M++)Mr(u,de+(M-1)*g*.6,me-g-x*8-(M&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),Q(2)};H.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;T({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?i0(l/.2):l>.8?(1-l)/.2:1,c=3;Mn(i,a,1.35);const h=de,d=me,m=[4,8,10,12,12];for(let p=0;p<5;p++){const g=Math.round(m[p]*f)*c;g<=0||(s.fillStyle=p===0?Si[1]:Si[2],s.fillRect(Math.round(h-g/2),Math.round(d+(p-5)*c*f),g,Math.max(1,Math.round(c*f))))}s.fillStyle=Si[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=Si[0],Mr(s,h-3*c*f,d-3*c*f,3*f),Mr(s,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,I(i+y(-.25,.25),a+y(-.25,.25),1.25,0,0,0,.5,u.drops&1?Si[0]:Si[1],2,6,!0,1))}});return}const t=e.x,n=e.y,o=(e.radius||4)*.78,r=12;T({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=w.T;for(let f=0;f<r;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/r*6.28,m=t+Math.cos(d)*o,p=n+Math.sin(d)*o;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let S=0;S<2;S++)I(m,p,.2,y(-.2,.2),y(-.2,.2),y(.8,1.6),y(.7,1.1),Si[S],2,0,!0,.95)}const g=i0(r0(h/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*g*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,v=Math.round(Math.sin(u*6+f)*2);Mn(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(de-9),Math.round(me-1),18,3),i.globalAlpha=1,Oh(i,lS,de+v,me-M,b,uS)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;Mn(t+Math.cos(f)*o,n+Math.sin(f)*o),i.fillStyle=Si[u%3+1],Mr(i,de,me,u%3?3:4)}}})};H.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(o,r){Mn(t,n),o.globalAlpha=1-r,o.fillStyle=Er[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)Mr(o,de+Math.cos(a+s*.25)*s*3.5,me+Math.sin(a-s*.2)*s*1.8,3)}}});for(let o=0;o<10;o++)I(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(1.5,3),y(.4,.6),Er[o%3],3,9,!1,.95)};const V2=10;Pe.hongo_E=(e,t,n,o,r,i)=>{fS(t,wg);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;Mn(t.x,t.y),e.fillStyle=Er[1],e.fillRect(Math.round(de-8),Math.round(me-1),16,4),e.fillStyle=Er[0],e.fillRect(Math.round(de-5),Math.round(me-2),10,2);for(let u=V2-1;u>=0;u--){const f=t.x+s*u*.17,c=t.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/V2);Mn(f,c,h);const d=7-u*.45;e.fillStyle=Er[2],Mr(e,de,me+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",Mr(e,de,me,d),e.fillStyle="#a07040",e.fillRect(Math.round(de-d/4),Math.round(me-d/2),2,1),(u===3||u===7)&&(e.fillStyle=Co[2],e.fillRect(Math.round(de+d/2),Math.round(me-d/2-1),2,2))}Mn(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=Co[3],e.fillRect(Math.round(de-2),Math.round(me-6),4,7),e.fillStyle=Co[1],e.fillRect(Math.round(de-6),Math.round(me-6),4,2),e.fillRect(Math.round(de+2),Math.round(me-8),4,2),e.fillStyle=Co[0],e.fillRect(Math.round(de-1),Math.round(me-8),2,2),Math.random()<.35&&I(t.x,t.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Er[Math.random()*3|0],2,7,!1,.95)};function wg(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)I(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1),.5,a&1?Er[0]:"#9a8a50",3,4,!1);return}const o=1.3,r=6,i=Math.random()*6.28;T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,s){const l=s*o,u=l<.18?i0(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<r;f++){const c=i+f/r*6.28,h=Math.cos(c),d=Math.sin(c);Mn(t+h*.55,n+d*.55,0);const m=de,p=me;Mn(t+h*.8,n+d*.8,.55);const g=de,x=me;Mn(t+h*.12,n+d*.12,.75);const b=de,M=me,v=Math.min(10,Math.round(10*u));for(let S=0;S<=v;S++){const _=S/10,A=1-_,R=A*A*m+2*A*_*g+_*_*b,C=A*A*p+2*A*_*x+_*_*M,z=6-_*4;a.fillStyle=Er[2],Mr(a,R,C+1,z+2),a.fillStyle=S&1?"#7a5030":"#6a4428",Mr(a,R,C,z),(S===4||S===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(R+(f&1?3:-5)),Math.round(C-1),2,2))}}}});for(let a=0;a<12;a++)I(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3.2),y(.4,.7),Er[a%3],3,9,!1,.95);Q(2)}H.hongo_R=e=>{const t=e.x,n=e.y,o=e.radius||3,r=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||r&&r.abil.R.dur||4)+.3,a=[];for(let p=0;p<13;p++){let g=null;for(let x=0;x<8&&!g;x++){const b=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*o*.88,v=t+Math.cos(b)*M,S=n+Math.sin(b)*M;a.every(_=>Math.hypot(_.x-v,_.y-S)>.7)&&(g={x:v,y:S,cs:p===0?4:Math.random()<.5?3:2,ts:M/o*.5})}g&&a.push(g)}a.sort((p,g)=>p.x+p.y-(g.x+g.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let p=0;p<s;p++){let g=1e9;for(let x=0;x<s;x++)if(x!==p){const b=Math.hypot(a[p].x-a[x].x,a[p].y-a[x].y);b<g&&(g=b,l[p]=x)}}T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g){const x=g*i,b=r0((x-.1)/.5),M=g>.88?(1-g)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let v=0;v<s;v++){const S=l[v];if(S<0)continue;Mn(a[v].x,a[v].y);const _=de,A=me;Mn(a[S].x,a[S].y);const R=Math.hypot(de-_,me-A),C=Math.round(R/6*b);for(let z=0;z<=C;z++){const O=z*6/R;p.fillRect(Math.round(_+(de-_)*O),Math.round(A+(me-A)*O+Math.sin(z*1.7+v)*2),2,2)}}p.globalAlpha=1}});const u=(p,g,x)=>{const b=i0(r0((g-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*b*M))};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(let b=0;b<s;b++){const M=a[b],v=u(M,x,g);v<=0||(Mn(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round(de-v*4),Math.round(me-1),v*8,3),Oh(p,W2,de+Math.round(Math.sin(w.T*2+b)*v*.4),me,v,q2))}}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,g,x){const b=g*i;for(let M=0;M<s;M++){const v=a[M],S=u(v,b,g);S<=0||(Mn(v.x,v.y),p.globalAlpha=.45+.4*Math.sin(w.T*5+M*1.9),Oh(p,W2,de+Math.round(Math.sin(w.T*2+M)*S*.4),me,S,q2,2),p.globalAlpha=.18,p.fillStyle=Qr[1],p.fillRect(Math.round(de-S*4),Math.round(me-S*9),S*8,S*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,b-x.last),x.last=b;x.acc>.085&&x.puffs<46&&g<.88;){x.acc-=.085,x.puffs++;const M=a[Math.random()*s|0];I(M.x+y(-.1,.1),M.y+y(-.1,.1),.12*M.cs*1.6,y(-.25,.25),y(-.25,.25),y(.5,1),y(.9,1.3),x.puffs&1?Qr[0]:Co[1],2,.15,!0,.97)}}});const f=ka(e,i-.3),c=()=>w.T-f.t0,h=p=>Math.min(1,c()/.35,p/.45),d=Array.from({length:9},(p,g)=>{const x=g/9*6.283+y(-.3,.3),b=g===0?0:y(.35,.8)*o,M=Array.from({length:5},()=>({ox:y(-.5,.5),oy:y(-.35,.35),k:y(.35,.6),p:Math.random()*6.28}));return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,s:y(.55,.9)*Math.min(1.2,o/3),sp:y(.25,.5)*(g&1?1:-1),p:Math.random()*6.28,v:g%3===0,puffs:M}});T({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,g,x){const b=io(f);if(b<=0){x.t=x.dur+1;return}const M=h(b),v=w.T;for(const S of d){const _=Math.cos(v*S.sp+S.p)*.35,A=Math.sin(v*S.sp*.8+S.p)*.35;Mn(S.x+_,S.y+A);const R=S.s*N.HW*Math.SQRT2,C=de,z=me;for(const O of S.puffs){const E=R*O.k*(.85+.15*Math.sin(v*1.1+O.p)),U=C+R*O.ox+Math.sin(v*.7+O.p)*4,G=z+R*.45*O.oy;p.globalAlpha=.15*M,p.fillStyle=S.v?Qr[2]:Co[3],Y2(p,U,G,E,E*.46),p.globalAlpha=.13*M,p.fillStyle=S.v?Qr[1]:Co[2],Y2(p,U-E*.15,G-E*.12,E*.6,E*.28)}}p.globalAlpha=.55*M;for(let S=0;S<56;S++){if(!(S+(v*6|0)&3))continue;const _=S/56*6.283+v*.15;Mn(t+Math.cos(_)*o,n+Math.sin(_)*o),p.fillStyle=S%7===0?Qr[1]:Co[1],p.fillRect(B0(de)-1,B0(me)-1,2,2)}Mi(f,t,n,o*1.05,10145856,.45*M)}});const m=Array.from({length:26},()=>{const p=Math.random()*6.283,g=Math.sqrt(Math.random())*o*.9;return{x:t+Math.cos(p)*g,y:n+Math.sin(p)*g,p:Math.random(),sp:y(.35,.6),v:Math.random()<.3}});T({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,g,x){const b=io(f);if(b<=0){x.t=x.dur+1;return}const M=h(b),v=w.T;for(const S of m){const _=(v*S.sp+S.p)%1;Mn(S.x+Math.sin(v*2+S.p*9)*.12,S.y,_*1.6),p.globalAlpha=M*Math.sin(_*Math.PI)*.9,p.fillStyle=S.v?Qr[0]:Co[0],p.fillRect(B0(de)-1,B0(me)-1,_<.5?2:3,_<.5?2:3)}}});for(let p=0;p<14;p++){const g=Math.random()*6.28,x=Math.random()*o*.8;I(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1.5,2.5),.5,Er[p%3],3,8,!1)}Q(3)};const B0=Math.round;function Y2(e,t,n,o,r){if(!(o<1)){r=Math.max(1,r);for(let i=-r;i<r;i+=2){const a=o*Math.sqrt(Math.max(0,1-(i+1)/r*((i+1)/r)));a>=.5&&e.fillRect(Math.round(t-a),Math.round(n+i),Math.max(1,Math.round(a*2)),2)}}}Qe.hongo=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(o,r){const i=.2+r*.55,a=10;o.globalAlpha=1-r;for(let s=0;s<a;s++){const l=s/a*6.28;Mn(t+Math.cos(l)*i,n+Math.sin(l)*i),o.fillStyle=Co[1+s%3],o.fillRect(Math.round(de-2),Math.round(me-1),4,2)}}}),T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(o,r){Mn(t,n,.5+r*.3),o.globalAlpha=(1-r)*.8;for(let i=0;i<3;i++)o.fillStyle=ts[i],Mr(o,de+(i-1)*8*(.6+r),me-(i&1)*5,8+r*8)}});for(let o=0;o<5;o++)I(t,n,.4,y(-1,1),y(-1,1),y(.5,1.5),.6,Co[o%3],3,2,!1,.92)};H.hongo_E_hit=e=>wg({x:e.x,y:e.y,life:9});const Tt=Math.round,pr=Math.PI*2;let We=0,Xe=0;function kn(e,t,n=0){We=(e-t)*N.HW+N.OX,Xe=(e+t)*N.HH-n*N.ZK}function Ol(e,t,n,o,r){e.fillStyle=r,e.fillRect(Tt(t-o/2),Tt(n-o/2),o,o)}const kr=e=>e<0?0:e>1?1:e,m0=e=>1-(1-e)*(1-e),Te={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},Bo={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},bn={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},Go={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},cS="#e8384a";function hS(e,t){return Math.atan2((e+t)*N.HH,(e-t)*N.HW)}function rf(e,t,n,o,r,i,a,s,l){const u=Math.cos(o),f=Math.sin(o),c=-f,h=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*r,p=n+f*(6-d)*r;if(d<=9)e.fillStyle=i,e.fillRect(Tt(m-r/2),Tt(p-r/2),r,r),d>=2&&(e.fillStyle=a,e.fillRect(Tt(m+c*r-r/2),Tt(p+h*r-r/2),r,r));else if(d===10){e.fillStyle=s;for(let g=-3;g<=3;g++)e.fillRect(Tt(m+c*g*r-r/2),Tt(p+h*g*r-r/2),r,r)}else d<15?(e.fillStyle=l,e.fillRect(Tt(m-r/2),Tt(p-r/2),r,r)):(e.fillStyle=s,e.fillRect(Tt(m-r),Tt(p-r),r*2,r*2))}}function Ea(e,t,n,o,r){e.fillStyle=r;const i=Tt(o);e.fillRect(Tt(t-i),Tt(n-1),i*2,2),e.fillRect(Tt(t-1),Tt(n-i),2,i*2),e.fillRect(Tt(t-2),Tt(n-2),4,4)}function Sg(e,t,n,o){const r=Math.max(2,Tt(Math.abs(Math.cos(o))*9)),i=9;e.fillStyle=Go.d,e.fillRect(Tt(t-r/2),Tt(n-i/2),r,i),r>3&&(e.fillStyle=Go.m,e.fillRect(Tt(t-r/2+1),Tt(n-i/2+1),r-2,i-2)),r>5&&(e.fillStyle=Go.l,e.fillRect(Tt(t-1),Tt(n-2),2,4))}H.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,o=e.x+t*.5,r=e.y+n*.5,i=hS(t,n);T({type:"custom",layer:"top",dur:.24,x:o,y:r,draw(a,s){kn(o,r,.55);const l=.55*(1-m0(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,rf(a,We,Xe,i+u*l,2,u?bn.l:Te.w,u?bn.m:Te.m,Go.m,Bo.d))}}),T({type:"custom",layer:"top",add:!0,dur:.2,x:o,y:r,draw(a,s){kn(o,r,.55),a.globalAlpha=1-s,Ea(a,We+Math.cos(i)*12,Xe+Math.sin(i)*12,10*(1-s)+3,bn.w)}});for(let a=0;a<6;a++)I(o,r,.5,y(-.8,.8),y(-.8,.8),y(.3,1),y(.4,.6),a&1?Bo.m:Bo.l,3,-.5,!1,.9)};Pe.mapache_Q=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=-s,u=a,f=Math.sin(i*26)*.07;pt(!0);const c=Wt();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);c.globalAlpha=(1-d/14)*.9,c.fillStyle=d&1?bn.l:bn.m,c.fillRect(Tt(n-a*m+l*p),Tt(o-s*m+u*p),2,2)}for(let d=4;d>=1;d--)c.globalAlpha=.5-d*.1,rf(c,n-a*d*9,o-s*d*9,r+f*d,2,bn.l,bn.m,bn.m,bn.d);c.globalAlpha=.22,c.fillStyle=bn.m,c.fillRect(Tt(n-10),Tt(o-10),20,20),c.globalAlpha=1,pt(!1),rf(e,n,o,r+f,2,Te.w,Te.m,Go.m,Bo.k);const h=i*4%1;h<.5&&(pt(!0),Wt().globalAlpha=1,Ea(Wt(),n+a*(12-h*30),o+s*(12-h*30),4,Te.w),pt(!1))};const K2=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];H.mapache_Q_hit=e=>{const t=e.x,n=e.y,o=Math.random()<.5?-2.2:-.9;T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(r,i){kn(t+.15,n+.15,.05),r.globalAlpha=i>.6?(1-i)/.4:1,rf(r,We-Math.cos(o)*8,Xe-Math.sin(o)*8,o+Math.PI,2,Te.w,Te.m,Go.m,Bo.k)}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(r,i){kn(t,n,1);const a=3,s=m0(kr(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=We,f=Xe-s,c=K2.length;r.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let h=0;h<c;h++){const d=K2[h],m=i>.6?(h&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const g=d[p];g!=="."&&(r.fillStyle=g==="X"?bn.l:g==="M"?bn.d:g==="e"?bn.w:bn.m,r.fillRect(Tt(u+(p-6)*a+m-a/2),Tt(f+(h-4)*a*l-a/2),a,Math.max(1,Tt(a*l))))}}}});for(let r=0;r<8;r++)I(t,n,.5,y(-1.8,1.8),y(-1.8,1.8),y(.8,2),y(.3,.5),r&1?Te.l:Te.m,2,6,!0,.9);for(let r=0;r<6;r++)I(t+y(-.2,.2),n+y(-.2,.2),.4,0,0,y(.6,1.2),y(.6,.9),r&1?bn.l:bn.m,2,-.3,!0);Q(2)};function _g(e,t,n,o,r,i,a,s){const l=Math.max(2,Tt(r/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,c=i?o/2*Math.sqrt(Math.max(0,1-f*f)):o/2,h=n-r/2+u*2;if(c<1)continue;e.globalAlpha=s,e.fillStyle=Go.d,e.fillRect(Tt(t-c-2),Tt(h),Tt(c*2+4),2),e.globalAlpha=s*.85,e.fillStyle=Te.m,e.fillRect(Tt(t-c),Tt(h),Tt(c*2),2);const d=t-c+(a*2.2-.6)*o-f*r*.25;d>t-c&&d<t+c-3&&(e.globalAlpha=s,e.fillStyle=Te.w,e.fillRect(Tt(d),Tt(h),3,2))}e.globalAlpha=s,e.fillStyle=Go.l,e.fillRect(Tt(t-2),Tt(n-r/2-3),4,3)}function Ag(e,t,n,o,r,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<r.length;u++)for(let f=0;f<a;f++){const c=l+u*17+f*3,h=(q(c)-.5)*.7,d=(q(c+1)-.5)*.7,m=kr(s*(.85+q(c+2)*.3));kn(t+(r[u]+h-t)*m,n+(i[u]+d-n)*m,o*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(w.T*20+f|0)&1;e.fillStyle=p?Te.w:Te.m,e.fillRect(Tt(We-2),Tt(Xe-1),p?4:2,p?2:4),e.fillStyle=Te.d,e.fillRect(Tt(We+(p?2:0)),Tt(Xe+(p?0:3)),2,2)}}function Tg(e,t,n){const o=new Float32Array(n),r=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*pr;o[i]=e+Math.cos(a)*1.1,r[i]=t+Math.sin(a)*1.1}return{TX:o,TY:r}}function Rg(e,t,n){T({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(o,r){o.globalAlpha=1-r;for(let i=0;i<e.length;i++){kn(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*pr+r*2,l=6+r*22;Ea(o,We+Math.cos(s)*l,Xe+Math.sin(s)*l*.8,4*(1-r)+2,a&1?Te.l:bn.l)}r<.3&&Ea(o,We,Xe,16*(1-r/.3)+3,Te.w)}}}),T({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(o,r,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)I(e[a],t[a],.4,y(-.8,.8),y(-.8,.8),y(.3,.9),y(.4,.7),s&1?Bo.l:Bo.m,3,-.4,!1,.9)}}})}H.mapache_W=e=>{const t=e.x,n=e.y,o=Math.random()*99,{TX:r,TY:i}=Tg(t,n,2),a=.32,s=.45,l=.78;T({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const c=f*(s+.02),h=m0(kr(c/.18));if(kn(t,n,.75),_g(u,We,Xe,30,52*h,!0,kr(c/.3),.95),c>a){u.globalAlpha=1,u.fillStyle=Te.w;const d=kr((c-a)/(s-a)),m=We+4,p=Xe-6;for(let g=0;g<6;g++){let x=q(o+g)*pr,b=m,M=p;for(let v=0;v<Tt(6*d);v++)x+=(q(o+g*7+v)-.5)*.9,b+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(Tt(b),Tt(M),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const c=f*(l+.05);c>=s&&c<s+.08&&(kn(t,n,.75),u.globalAlpha=1-(c-s)/.08,u.fillStyle=Te.w,u.fillRect(Tt(We-22),Tt(Xe-30),44,60)),u.globalAlpha=1,Ag(u,t,n,.75,r,i,6,(c-s)/(l-s),o)}}),Rg(r,i,l);for(let u=0;u<8;u++)I(t,n,.4,y(-1,1),y(-1,1),y(.3,.8),y(.5,.8),u&1?Bo.m:Bo.d,3,-.3,!1,.9)};H.mapache_E=e=>{const t=e.x,n=e.y,o=e.ex??t,r=e.ey??n,i=.8,a=(s,l,u,f,c,h,d)=>{const m=12*f,p=20*f;for(let g=0;g<18;g++){const x=g/18*pr+c;Ol(s,l+Math.cos(x)*m,u+Math.sin(x)*p,g%3?2:3,g&1?h:d)}for(let g=0;g<8;g++){const x=g/8*pr-c*1.7,b=.45+.25*Math.sin(c*2+g);Ol(s,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?m0(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,c=w.T*8;kn(t,n,.55);const h=We,d=Xe;kn(o,r,.55);const m=We,p=Xe;f>0&&(s.globalAlpha=1,a(s,h,d,f,c,Te.l,Te.d),a(s,m,p,f,-c,Go.l,Go.d));const g=kr((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,M=x?Go.m:Te.m,v=x?1-g:g;s.globalAlpha=.45*(1-kr((u-.5)/.3));for(let S=0;S<=20;S++){const _=S/20;S%2||Ol(s,h+(m-h)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,2,M)}if(g>0&&g<1)for(let S=0;S<6;S++){const _=x?v+S*.03:v-S*.03;_<0||_>1||(s.globalAlpha=1-S/6,Ol(s,h+(m-h)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,S?3:5,S?M:Te.w))}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;kn(t,n,.55);const f=We,c=Xe;kn(o,r,.4);const h=We,d=Xe,m=(f+h)/2,p=(c+d)/2-58,g=kr(u/i),x=m+(h-m)*g,b=p+(d-p)*g-Math.sin(g*Math.PI)*30;s.globalAlpha=g>.85?(1-g)/.15:1,Sg(s,x,b,w.T*26)}});for(const[s,l]of[[t,n],[o,r]])for(let u=0;u<6;u++){const f=u/6*pr;I(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,y(0,.6),.4,s===t?Te.l:Go.l,2,0,!0)}};const dS=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];H.mapache_R=e=>{const t=e.x,n=e.y,o=Math.random()*99,{TX:r,TY:i}=Tg(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],c=new Float32Array(a);T({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){kn(t,n,0);const b=We,M=Xe;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=Go.l;for(let v=0;v<60;v++){const S=v*6,_=70-v*.9;g.fillRect(Tt(b-_),Tt(M-S-6),Tt(_*2),6)}g.globalAlpha*=2,g.fillStyle=Te.w;for(let v=0;v<18;v+=2){const S=Math.sqrt(1-v/18*(v/18))*74;g.fillRect(Tt(b-S),Tt(M-9+v),Tt(S*2),2)}}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(g,x){const b=x*l,M=m0(kr(b/.3)),v=b*1.2+b*b*4.5;for(let S=0;S<a;S++)c[S]=S/a*pr+v;f.sort((S,_)=>Math.sin(c[S])-Math.sin(c[_]));for(const S of f){const _=c[S];kn(t+Math.cos(_)*s,n+Math.sin(_)*s,0);const A=.45+.55*Math.abs(Math.sin(_+.8));_g(g,We,Xe-22*M,Tt(14*A)+2,44*M,!1,(b*1.6+S*.13)%1,.9)}}}),T({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const b=x*(u+.05);if(b<l){const M=b*14|0,v=M%a,S=v/a*pr+b*1.2+b*b*4.5;kn(t+Math.cos(S)*s,n+Math.sin(S)*s,.6),g.globalAlpha=.9,Ea(g,We,Xe,9,Te.w)}else{if(b<l+.1){g.globalAlpha=1-(b-l)/.1,kn(t,n,.4),g.fillStyle=Te.w;for(let M=-14;M<14;M+=2){const v=Math.sqrt(1-M/14*(M/14))*90;g.fillRect(Tt(We-v),Tt(Xe+M*2),Tt(v*2),4)}}g.globalAlpha=1,Ag(g,t,n,.6,r,i,6,(b-l)/(u-l),o)}}}),Rg(r,i,u);const h=16,d=new Float32Array(h),m=new Float32Array(h),p=new Float32Array(h);for(let g=0;g<h;g++){const x=Math.random()*pr,b=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*b,m[g]=n+Math.sin(x)*b,p[g]=y(0,.35)}T({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(g,x){const b=x*1.3;for(let M=0;M<h;M++){const v=(b-p[M])/.95;if(v<0||v>1)continue;kn(d[M],m[M],3.2*(1-v));const S=Math.cos(w.T*9+M*1.7),_=We+Math.sin(w.T*4+M)*8,A=dS[M&3],R=(M&3)<2?cS:Bo.k,C=2,z=Math.max(.2,Math.abs(S));if(g.globalAlpha=v>.8?(1-v)/.2:1,g.fillStyle="#fffaf0",g.fillRect(Tt(_-7*z),Tt(Xe-8),Tt(14*z)||1,16),z>.45){g.fillStyle=R;for(let O=0;O<5;O++)for(let E=0;E<5;E++)A[O][E]==="X"&&g.fillRect(Tt(_+(E-2.5)*C*z),Tt(Xe-5+O*C),Math.max(1,Tt(C*z)),C)}}}});for(let g=0;g<20;g++){const x=Math.random()*pr;I(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,y(.5,1.5),y(.5,.9),g&1?Bo.l:Bo.m,3,-.4,!1,.92)}T({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){b.fired||(b.fired=!0,Q(5))}})};function j2(e,t,n,o,r,i,a,s){const l=Math.cos(o),u=Math.sin(o),f=-u,c=l,h=Tt(10*i);for(let d=0;d<=h;d++){const m=d/10-.5,p=Math.sin(m*pr)*r*.18;Ol(e,t+l*m*r+f*p,n+u*m*r*.8+c*p,d===h?4:3-Math.abs(m)*2,d===h?s:a)}}Qe.mapache=e=>{const t=e.x,n=e.y,o=!!e.big,r=-.6+y(-.3,.3);if(T({type:"custom",layer:"top",add:!0,dur:o?.32:.22,x:t,y:n,draw(i,a){kn(t,n,.5);const s=kr(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,j2(i,We,Xe,r,34,s,Te.m,Te.w),o&&j2(i,We,Xe,r+1.6,40,s,bn.m,bn.w),a>.2&&(Ea(i,We+12,Xe-10,4*(1-a)+1,Te.w),Ea(i,We-10,Xe+6,3*(1-a)+1,Te.l))}}),o){T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){kn(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,Sg(i,We+a*18,Xe,w.T*30)}});for(let i=0;i<6;i++)I(t,n,.5,y(-1,1),y(-1,1),y(.5,1.4),.5,i&1?bn.l:bn.m,2,-.5,!0)}for(let i=0;i<(o?4:3);i++)I(t,n,.2,y(-.8,.8),y(-.8,.8),y(.2,.6),.35,Bo.l,3,0,!1,.9)};const ls="#1e0f30",As="#4b2272",fi="#8b3cd2",ci="#d6b4ff",ni="#f6f2ff",af="#ff2f5f",Cg="#2c1446",xn=Math.round,wa=Math.PI*2,mS=[0,1,2,1];function fr(e,t,n,o,r,i){e.fillStyle=i,e.fillRect(xn(t),xn(n),o,r)}function pS(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(xn(t+(o-t)*l/s-i/2),xn(n+(r-n)*l/s-i/2),i,i)}function zh(e,t,n,o,r,i,a,s){t=xn(t),n=xn(n),e.fillStyle=i,e.fillRect(t-o,n-o,2*o,3*o),e.fillRect(t-o,n-2*o,o,o),e.fillRect(t,n-2*o,o,o),e.fillStyle=a,r===0?(e.fillRect(t-3*o,n-2*o,2*o,o),e.fillRect(t-5*o,n-3*o,2*o,o),e.fillRect(t-2*o,n-o,o,o),e.fillRect(t+o,n-2*o,2*o,o),e.fillRect(t+3*o,n-3*o,2*o,o),e.fillRect(t+o,n-o,o,o)):r===1?(e.fillRect(t-5*o,n-o,4*o,o),e.fillRect(t-5*o,n,o,o),e.fillRect(t-3*o,n,o,o),e.fillRect(t+o,n-o,4*o,o),e.fillRect(t+4*o,n,o,o),e.fillRect(t+2*o,n,o,o)):(e.fillRect(t-3*o,n,2*o,o),e.fillRect(t-4*o,n+o,2*o,o),e.fillRect(t-2*o,n-o,o,o),e.fillRect(t+o,n,2*o,o),e.fillRect(t+2*o,n+o,2*o,o),e.fillRect(t+o,n-o,o,o));{const l=Math.max(1,o>>1);e.fillStyle=s,e.fillRect(t-o,n-o,l,l),e.fillRect(t+o-l,n-o,l,l)}}function ua(e,t,n,o,r,i,a,s=1){const l=Math.cos(r)*o*i,u=Math.sin(r)*o*i,f=o*.95,c=Math.max(1,xn(2*s));e.fillStyle=a;for(let h=-o;h<=o;h+=2){const d=Math.sqrt(Math.max(0,o*o-h*h)),m=h-u,p=xn(n+h*s);if(Math.abs(m)>=f){e.fillRect(xn(t-d),p,xn(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(xn(t-d),p,xn(Math.min(x,d)+d),c),b<d){const M=Math.max(b,-d);e.fillRect(xn(t+M),p,xn(d-M),c)}}}function Fh(e,t,n,o,r){const[i,a]=P(t,n),s=o*N.HW*Math.SQRT2,l=s*.5;e.fillStyle=r;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(xn(i-f),xn(a+u),xn(f*2),2)}}const Pg=e=>{const t=Z(e);return t&&!t.dead&&!Ge(t)?t:null},yS=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Eh=(e,t=16)=>mS[((w.T*t|0)+e)%4];Qe.murcielago=e=>{const t=y(0,wa),n=e.big?17:13;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(o,r){const[i,a]=P(e.x,e.y,.5);o.globalAlpha=1-r,ua(o,i,a,n+2,t+r*1.4,.45,fi),ua(o,i,a,n,t+r*1.4,.52,ni)}});for(let o=0;o<5;o++)I(e.x,e.y,.5,y(-2.5,2.5),y(-2.5,2.5),y(0,1),.28,o%2?ci:fi,2,0,!0,.9)};H.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,o=Math.atan2(n,t),r=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;T({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(r-.3),g=Math.max(6,Math.ceil(i*2*p*7)),x=h%2?fi:ci,b=h%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=g;M++){const v=o-i+2*i*M/g,S=Math.sin(M*1.7+h*2.3+c*40)*.07*(1+m),[_,A]=P(a+Math.cos(v)*(p+S),s+Math.sin(v)*(p+S),l-m*.35);fr(u,_-b/2,A-b/2,b,b,x),M===g>>1&&fr(u,_-1,A-1,2,2,ni)}}}}),T({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=o+c*i;for(let d=0;d<10;d++){const m=.4+(r-.4)*d/9,[p,g]=P(a+Math.cos(h)*m,s+Math.sin(h)*m);fr(u,p-1,g-1,3,2,As)}}}});for(let u=0;u<14;u++){const f=o+y(-i,i),c=y(.6,r);I(a+Math.cos(f)*c,s+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,y(0,.5),.5,u%3?ci:ni,2,0,!0,.92)}Q(2)};H.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(o,r)=>({a:r/14*wa+y(-.2,.2),sp:y(1.2,2.4),up:y(.8,1.8),ph:Math.random()*4|0}));T({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(o,r){o.globalAlpha=.6*(1-r),Fh(o,e.x,e.y,.75*(1-r*.6),ls),o.globalAlpha=.8*(1-r),Fh(o,e.x,e.y,.3*(1-r),Cg)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(o,r){const i=r;o.globalAlpha=Math.min(1,(1-r)*1.6);for(const a of n){const s=a.sp*i,[l,u]=P(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);zh(o,l,u,2,Eh(a.ph),ls,As,af)}}}),T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(o){const r=Pg(e.uid);if(!r||typeof r.invisible=="function"&&!r.invisible())return;const[i,a]=P(r.x,r.y,.75);o.globalAlpha=.65;for(let s=0;s<2;s++){const l=w.T*5+s*Math.PI;zh(o,i+Math.cos(l)*24,a+Math.sin(l)*9,1,Eh(s*2,20),As,fi,af)}o.globalAlpha=.35;for(let s=0;s<4;s++)fr(o,i-8+s*5,a+26+(w.T*30+s*7)%8,2,2,ls)}});for(let o=0;o<16;o++)I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.2,.8),y(-.5,.5),y(-.5,.5),y(1,2.2),y(.5,.9),o%2?ls:As,3,0,!1,.95);for(let o=0;o<6;o++)I(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.4,1),0,0,y(.5,1.2),.5,ci,2,0,!0)};H.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,o=e.dur||.45,r=yS(e),i=r&&r.radius||1.4,a=y(0,wa);let s=!1;T({type:"custom",layer:"ground",dur:o+1.4,x:t,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=P(t,n);if(c<o){l.globalAlpha=.5,ua(l,h,d,xn(i*26*(1.4-.4*c/o)),a+c*6,.45,As,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),ua(l,h,d+2,xn(i*30),a+Math.PI*1.1,.42,Cg,.5)}}),T({type:"custom",layer:"top",add:!0,dur:o+.5,x:t,y:n,draw(l,u,f){const c=u*f.dur;if(c<o){const b=Pg(e.uid);if(!b)return;const[M,v]=P(b.x,b.y,.7),[S,_]=P(t,n,.3),A=Math.hypot(S-M,_-v)||1,R=(S-M)/A,C=(_-v)/A;l.globalAlpha=.75;for(let z=0;z<4;z++){const O=(z-1.5)*7,E=18+z%2*12;pS(l,M-C*O-R*8,v+R*O-C*8,M-C*O-R*(8+E),v+R*O-C*(8+E),2,z%2?ci:fi)}return}const h=(c-o)/.5;if(!s){s=!0,Q(6);for(let b=0;b<22;b++){const M=y(0,wa),v=y(2,5);I(t,n,.45,Math.cos(M)*v,Math.sin(M)*v,y(.3,1.5),y(.3,.55),b%3?ci:b%2?ni:fi,2,3,!0,.9)}}const d=Math.min(1,h/.45),[m,p]=P(t,n,.45),g=xn(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),ua(l,m,p,g+3,x,.42,fi,.85),ua(l,m,p,g,x,.48,ni,.85),l.globalAlpha*=.35,ua(l,m,p,g,x-.6,.48,ci,.85)}})};H.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,o=24,r=Array.from({length:o},(s,l)=>({p:l/o*wa,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),h=s.p+l*s.w;return[e.x+Math.cos(h)*c,e.y+Math.sin(h)*c,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:y(.3,n-.4),x:e.x+y(-1,1)*t*.6,y:e.y+y(-1,1)*t*.6}));T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,Fh(s,e.x,e.y,t,ls),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*wa+u*.8,[d,m]=P(e.x+Math.cos(h)*t,e.y+Math.sin(h)*t);fr(s,d-1,m-1,c%2?2:3,2,c%2?ci:fi)}s.globalAlpha=.3*f;for(const c of r){const[h,d]=i(c,u),[m,p]=P(h,d);fr(s,m-4,p-1,8,2,"#000000")}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of r){const[c,h,d,m]=i(f,u),[p,g]=P(c,h,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),zh(s,p,g,f.s,Eh(f.ph,18),ls,As,af)}}}),T({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=P(f.x,f.y,.55),m=xn(4-c*3);s.globalAlpha=1-c;for(const p of[-1,1]){const g=h+p*4;fr(s,g-2,d-6-m,4,2,ni),fr(s,g-1,d-4-m,2,3,ni),fr(s,g-2,d+4+m,4,2,ni),fr(s,g-1,d+1+m,2,3,ni)}fr(s,h-1,d-1,3,3,af)}}});for(let s=0;s<20;s++){const l=y(0,wa),u=t*y(.3,1);I(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,y(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,y(0,.6),y(.6,1.1),s%3?fi:ci,2,0,!0,.97)}Q(5)};const kt=Math.round,Lr=Math.PI*2,Ot={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},gS=e=>e*N.HW*Math.SQRT2;function zl(e,t,n,o){o=Math.max(1,kt(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(kt(t[0]+(n[0]-t[0])*s/i-a),kt(t[1]+(n[1]-t[1])*s/i-a),o,o)}function sf(e,t,n,o,r,i){const a=t[0].length,s=t.length,l=kt(n-a*r/2),u=kt(o-s*r/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*r,u+c*r,r,r)}}function Ig(e,t,n=6){const o=[[0,0]];for(let r=1;r<=n;r++){const i=e+y(-.35,.35),a=t*r/n;o.push([Math.cos(i)*a,Math.sin(i)*a])}return o}function Og(e,t,n,o,r){const i=o.length-1,a=r*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=P(t+o[s][0],n+o[s][1]),f=P(t+o[s+1][0],n+o[s+1][1]);zl(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const xS=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],MS=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],Q2=["t.t.t",".....",".ppp.","ppppp",".ppp."];H.oso_Q=e=>{const t=e.x,n=e.y,o=e.ux||1,r=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(r,o),l=t+o*1,u=n+r*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let g=0;g<p;g++){const x=s+(p===1?0:(g/(p-1)*2-1)*a*.8)+y(-.06,.06),b=d*i/2.5;c.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:y(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>Ig(s+d*a,i*y(.75,1)));T({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,g=Math.min(1,p/f),x=1.5*(1-g*g),[b,M]=P(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),sf(d,xS,b,M,3,{h:Ot.wood,d:Ot.i0,b:Ot.brass,l:Ot.i4,i:Ot.i2}),g<1){d.globalAlpha=.5,d.fillStyle=Ot.i3;for(let v=1;v<=3;v++)d.fillRect(kt(b-15+v*7),kt(M-26-v*8),2,8)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,g]=P(l,u,.1),x=kt(26*(1-m))+4;d.fillStyle=Ot.amberL,d.fillRect(p-x,g-2,x*2,4),d.fillRect(p-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,g-3,10,6)}}),T({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const g=m*1.15;if(g>=f&&!p.hit){p.hit=!0,Q(7);for(let M=0;M<14;M++){const v=s+y(-a,a),S=y(1,3);I(l,u,.1,Math.cos(v)*S,Math.sin(v)*S,y(.3,1),y(.6,.9),M%2?Ot.dust:Ot.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=Ot.e0;for(const M of h)Og(d,t,n,M,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const M=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=Ot.dust;for(let v=0;v<=16;v++){const S=s-a+2*a*v/16,[_,A]=P(t+Math.cos(S)*M,n+Math.sin(S)*M);d.fillRect(kt(_)-3,kt(A)-2,6,4)}}for(const M of c){const v=(g-M.t0)/.5;if(v<0||v>1)continue;M.done||(M.done=!0,I(M.x,M.y,.2,y(-1,1),y(-1,1),y(3,5),y(.7,1),[Ot.e1,Ot.e2,Ot.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const S=kt(M.h*(v<.2?v/.2:1-(v-.2)/.8)),[_,A]=P(M.x,M.y);d.globalAlpha=1,d.fillStyle=Ot.e0,d.fillRect(kt(_-M.w/2-1),kt(A-2),M.w+2,4),d.fillStyle=Ot.e1,d.fillRect(kt(_-M.w/2),kt(A-S),M.w,S),d.fillStyle=Ot.e3,d.fillRect(kt(_-M.w/2),kt(A-S-5),M.w,5),d.fillStyle=Ot.e2,d.fillRect(kt(_-M.w/2),kt(A-S-1),M.w,1)}}})};function $0(e,t,n,o,r,i){const a=Math.cos(i);return[e+n*Math.cos(r)*a,t+n*.5*Math.sin(r)*a-o*Math.sin(i)]}H.oso_W=e=>{const t=e.uid,n=e.dur||3;let o=e.x,r=e.y;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=Z(t),[l,u]=P(s?s.x:o,s?s.y:r,.6),f=kt(18*(1-a))+3;i.fillStyle=Ot.amber;for(let c=0;c<8;c++){const h=c/8*Lr;i.fillRect(kt(l+Math.cos(h)*f*1.4)-2,kt(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Lr;I(e.x,e.y,.6,Math.cos(a)*y(1,3),Math.sin(a)*y(1,3),y(1.5,3),.4,i%2?Ot.brassL:Ot.amber,2,9,!0)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=Z(t),u=a*n;if(l&&(o=l.x,r=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let _=0;_<16;_++){const A=Math.random()*Lr,R=y(1,2.5);I(o+Math.cos(A)*.4,r+Math.sin(A)*.4,y(.2,.8),Math.cos(A)*R,Math.sin(A)*R,y(1.5,3.5),.7,[Ot.i1,Ot.i2,Ot.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)I(o,r,.6,y(-2,2),y(-2,2),y(1,3),.35,Ot.brassL,2,6,!0);s.t=1e9;return}const c=l&&l.scale||1,[h,d]=P(o,r),m=kt(40*c),p=kt(56*c),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!s.done){s.done=!0;const[_,A]=[o,r];for(let R=0;R<6;R++)I(_,A,.75*c,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.3,Ot.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=Ot.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(kt(h-A),kt(d-_-3),kt(A*2),3)}for(let _=0;_<m*.5;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(kt(h-A),kt(d+_),kt(A*2),3)}for(let _=0;_<32;_++){const A=_/32*Lr,R=$0(h,d,m,p,A,0),C=Math.sin(A)>0;i.globalAlpha=C?.95:.4,i.fillStyle=C?Ot.i3:Ot.i1,i.fillRect(kt(R[0])-2,kt(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=Ot.i2;for(const _ of[.12,.3,.5,.7,.88]){const A=Math.PI*_;for(let R=0;R<=x;R+=.16){const C=$0(h,d,m,p,A,R);i.fillRect(kt(C[0])-1,kt(C[1])-1,2,3)}}const v=u*14|0;let S=0;for(const _ of[.42,.9])if(!(_>x))for(let A=0;A<=14;A++){const R=Math.PI*A/14,C=$0(h,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=Ot.i3,i.fillRect(kt(C[0])-2,kt(C[1])-1,4,2),A%2===0&&(S++,i.globalAlpha=1,i.fillStyle=S%16===v%16?"#ffffff":Ot.brass,i.fillRect(kt(C[0])-1,kt(C[1])-3,3,3))}if(g>=1){const _=$0(h,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=Ot.i0,i.fillRect(kt(_[0])-5,kt(_[1])-4,10,6),i.fillStyle=Ot.brass,i.fillRect(kt(_[0])-4,kt(_[1])-3,8,4),i.fillStyle=Ot.brassL,i.fillRect(kt(_[0])-3,kt(_[1])-3,3,1)}}})};H.oso_E=e=>{const t=e.uid,n=e.x,o=e.y,r=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=r-n,l=i-o,u=Math.hypot(s,l)||1,f=P(n,o),c=P(r,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,m=(c[1]-f[1])/h,p=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const b=x/(g+1),M=x%2?1:-1;p.push({s:b,x:n+s*b-l/u*.17*M,y:o+l*b+s/u*.17*M})}T({type:"custom",layer:"ground",dur:a+2,x:n,y:o,draw(x,b){const M=b*(a+2);for(const v of p){const S=M-v.s*a;if(S<0)continue;const[_,A]=P(v.x,v.y);x.globalAlpha=Math.max(0,.7*(1-S/2)),sf(x,Q2,_,A,3,{t:Ot.e0,p:Ot.e0}),x.globalAlpha*=.6,sf(x,Q2,_-1,A-1,3,{p:Ot.e1})}}}),T({type:"custom",layer:"top",dur:a+.3,x:n,y:o,draw(x,b,M){const v=b*(a+.3),S=Z(t),_=Math.min(1,v/a),A=S&&v<a?S.x:n+s*_,R=S&&v<a?S.y:o+l*_;if(v<a){if(M.n=M.n||0,M.n<30){M.n+=2;for(let Y=0;Y<2;Y++)I(A+y(-.2,.2),R+y(-.2,.2),.1,-s/u*y(.5,1.5)+y(-.5,.5),-l/u*y(.5,1.5)+y(-.5,.5),y(.4,1.2),y(.5,.8),Y?Ot.e2:Ot.dust,5,-.3,!1,.9)}const[C,z]=P(A,R,.45),O=C+d*26,E=z+m*26,U=-m,G=d;for(let Y=0;Y<3;Y++){const L=Y*8+v*120%8;x.globalAlpha=.9-Y*.25,x.fillStyle=Y?Ot.dust:"#ffffff";const k=[O-d*L,E-m*L];zl(x,k,[k[0]-d*10+U*13,k[1]-m*10+G*13],3),zl(x,k,[k[0]-d*10-U*13,k[1]-m*10-G*13],3)}x.globalAlpha=.6,x.fillStyle=Ot.i3;for(let Y=0;Y<4;Y++){const L=(Y-1.5)*9,k=14+(Y*7+v*200)%12;zl(x,[C-d*20+U*L,z-m*20+G*L],[C-d*(20+k)+U*L,z-m*(20+k)+G*L],2)}}else{if(!M.end){M.end=!0,Q(5);for(let E=0;E<14;E++){const U=Math.random()*Lr,G=y(1.5,3);I(r,i,.15,Math.cos(U)*G,Math.sin(U)*G,y(.8,2),.6,E%2?Ot.dust:Ot.e3,5,2,!1,.9)}}const C=(v-a)/.3,[z,O]=P(r+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-C;for(let E=0;E<8;E++){const U=E/8*Lr+.2,G=6+C*14,Y=G+10*(1-C);x.fillStyle=E%2?Ot.amberL:"#ffffff",zl(x,[z+Math.cos(U)*G,O+Math.sin(U)*G*.7],[z+Math.cos(U)*Y,O+Math.sin(U)*Y*.7],4)}}}})};H.oso_R=e=>{const t=e.uid,n=e.x,o=e.y,r=e.radius||3.6,i=Array.from({length:8},(a,s)=>Ig(s/8*Lr+y(-.2,.2),r*y(.45,.65),5));Q(10),T({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:o,draw(a,s){const[l,u]=P(n,o),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=gS(r)*(.15+.95*(1-(1-h)*(1-h))),m=5-c;a.globalAlpha=1-h;for(let p=0;p<56;p++){if(p%7>=5)continue;const g=p/56*Lr+c*.2,x=l+Math.cos(g)*d,b=u+Math.sin(g)*d*.5;a.fillStyle=c===0?Ot.amberL:Ot.amber,a.fillRect(kt(x-m/2),kt(b-m/2),m,m),p%7===2&&(a.fillStyle=Ot.amberD,a.fillRect(kt(x*.94+l*.06-1),kt(b*.94+u*.06-1),3,3))}}}}),T({type:"custom",layer:"ground",dur:1.5,x:n,y:o,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=Ot.e0;for(const l of i)Og(a,n,o,l,Math.min(1,s*7))}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:o,uid:t,draw(a,s){const l=Z(t),u=l?l.x:n,f=l?l.y:o,c=l&&l.scale||1,[h,d]=P(u,f,1.7*c+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),sf(a,MS,h,d,m,{e:Ot.amberD,i:Ot.amberL,h:Ot.amber,s:Ot.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const g=34+(s*90+p*22)%66,x=1-(s*90+p*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=Ot.amberL;for(let b=-.7;b<=.71;b+=.175){const M=Math.cos(b)*g,v=Math.sin(b)*g*.8;a.fillRect(kt(h+M)-2,kt(d+6+v)-2,4,4),a.fillRect(kt(h-M)-2,kt(d+6+v)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Lr,l=Math.sqrt(Math.random())*r*.9;I(n+Math.cos(s)*l,o+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,y(2,4),y(.5,.8),[Ot.e1,Ot.e2,Ot.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Lr,l=y(.3,1.2);I(n+Math.cos(s)*l,o+Math.sin(s)*l,.5,0,0,y(.8,1.6),y(.8,1.2),Ot.amberL,2,-.3,!0,.98)}};Qe.oso=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(o,r){const[i,a]=P(t,n,.08),s=kt(8+r*26),l=1-r;o.globalAlpha=l,o.fillStyle=Ot.i0,o.fillRect(i-s-1,a-2,s*2+2,5),o.fillStyle=Ot.dust,o.fillRect(i-s,a-1,kt(s*.7),3),o.fillRect(i+s-kt(s*.7),a-1,kt(s*.7),3);const[u,f]=P(t,n,.5),c=kt(12*(1-r));o.fillStyle=Ot.i3,o.fillRect(u-c-4,f-3,8,6),o.fillRect(u+c-4,f-3,8,6),o.fillStyle=Ot.i4,o.fillRect(u-2,f-6,4,12)}});for(let o=0;o<4;o++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(2,3.5),.3,Ot.brassL,2,12,!0);for(let o=0;o<3;o++)I(t,n,.05,y(-1,1),y(-1,1),y(1,2),.45,Ot.e2,3,10,!1)};const go="#ffffff",bo="#e6eeff",Jr="#bfe9ff",ha="#7fdcf4",Lh="#3a9ab8",Fn="#fff0b4",Z2="#efe0b8",J2="#c8a878",bS="#34408a",tm="#a9bfdc",ye=Math.round,Sa=Math.PI*2;function Ve(e,t,n,o,r,i){e.fillStyle=i,e.fillRect(ye(t),ye(n),o,r)}function lf(e,t,n,o,r){e.fillStyle=r;for(let i=-o;i<=o;i+=2){const a=ye(Math.sqrt(Math.max(0,o*o-i*i)));e.fillRect(ye(t-a),ye(n+i),a*2,2)}}function Ts(e,t,n,o,r,i,a,s=1){const l=Math.cos(r)*o*i,u=Math.sin(r)*o*i,f=o*.95,c=Math.max(1,ye(2*s));e.fillStyle=a;for(let h=-o;h<=o;h+=2){const d=Math.sqrt(Math.max(0,o*o-h*h)),m=h-u,p=ye(n+h*s);if(Math.abs(m)>=f){e.fillRect(ye(t-d),p,ye(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(ye(t-d),p,ye(Math.min(x,d)+d),c),b<d){const M=Math.max(b,-d);e.fillRect(ye(t+M),p,ye(d-M),c)}}}function vS(e,t,n,o,r,i,a){t=ye(t),n=ye(n);const s=[3,2,1,2][r],l=Math.max(1,s-1),u=o>>1;e.fillStyle=i,e.fillRect(t-u-o*s,n-2*o,o*s,2*o),e.fillRect(t+u,n-2*o,o*s,2*o),e.fillRect(t-u-o*l,n,o*l,o),e.fillRect(t+u,n,o*l,o),e.fillStyle=a,e.fillRect(t-u,n-2*o,o,3*o),e.fillRect(t-u-1,n-3*o,1,o),e.fillRect(t+u,n-3*o,1,o)}function em(e,t,n,o,r,i,a,s,l){for(let u=-r;u<=r;u+=2){const f=o*Math.sqrt(Math.max(0,1-u*u/(r*r)));if(f<1)continue;const c=ye(t+u*i-f),h=ye(t+u*i+f),d=ye(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(c,d,h-c,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(c,d,2,2),e.fillRect(h-2,d,2,2)}}function wS(e,t,n,o,r){t=ye(t),n=ye(n),e.fillStyle=r,e.fillRect(t,n,3*o,o),e.fillRect(t+o,n+o,o,o),e.fillRect(t,n+2*o,3*o,o)}const zg=e=>{const t=Z(e);return t&&!t.dead&&!Ge(t)?t:null},SS=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},uf=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Pe.polilla_A=(e,t,n,o,r,i)=>{pt(!0);const a=Wt(),s=.65+.35*Math.sin(i*20),l=ye(5+s*3);a.globalAlpha=s,Ve(a,n-l,o-1,l*2,2,ha),Ve(a,n-1,o-l,2,l*2,ha),a.globalAlpha=1,Ve(a,n-2,o-2,4,4,go);const u=i*14;Ve(a,n+Math.cos(u)*8-1,o+Math.sin(u)*4-1,2,2,Fn),Ve(a,n-Math.cos(u)*8-1,o-Math.sin(u)*4-1,2,2,Fn),pt(!1)};Qe.polilla=e=>{T({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[o,r]=P(e.x,e.y,.5),i=ye(10*(1-n))+2;t.globalAlpha=1-n,Ve(t,o-i,r-1,i*2,2,bo),Ve(t,o-1,r-i,2,i*2,bo),Ve(t,o-2,r-2,4,4,go)}});for(let t=0;t<5;t++)I(e.x,e.y,.5,y(-1,1),y(-1,1),y(.2,.8),.6,t%2?Fn:Jr,2,.4,!0,.9)};Pe.polilla_Q=(e,t,n,o,r,i)=>{const s=t.z||.45;n=ye(n),o=ye(o),pt(!0);const l=Wt(),u=l.createRadialGradient(n,o,0,n,o,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,o-9*3,9*6,9*6),pt(!1),lf(e,n,o,10,Lh),lf(e,n,o,9,bo),Ts(e,n,o,9,Math.PI*.85,.55,tm);for(let h=0;h<3;h++){const d=i*2+h*2.1;Ve(e,n+Math.cos(d)*4-1,o+Math.sin(d)*4-1,h?2:3,2,tm)}Ve(e,n-4,o-5,2,2,go);const f=Math.cos(r),c=Math.sin(r);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,m=14+h*10;e.globalAlpha=1-d,wS(e,n-f*m,o-c*m-6-d*14,h<2?1:2,h%2?Fn:bo)}e.globalAlpha=1,Math.random()<.4&&I(t.x,t.y,s,y(-.3,.3),y(-.3,.3),-.4,.6,Math.random()<.5?Fn:bo,2,.5,!0,.9)};H.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(o,r){const[i,a]=P(e.x+t*.4,e.y+n*.4,.75),s=ye(14*(1-r))+2,l=ye(6*(1-r))+1;if(o.globalAlpha=1-r*.6,r<.5)Ve(o,i-s,a-1,s*2,2,Fn),Ve(o,i-1,a-s,2,s*2,Fn);else for(let u=1;u<=l;u+=2)Ve(o,i+u,a+u,2,2,Fn),Ve(o,i-u-2,a+u,2,2,Fn),Ve(o,i+u,a-u-2,2,2,Fn),Ve(o,i-u-2,a-u-2,2,2,Fn);Ve(o,i-2,a-2,4,4,go);for(let u=0;u<6;u++){const f=-1.2+u*.4+r*2,c=16+u;Ve(o,i+Math.cos(f)*c-1,a+Math.sin(f)*c*.6-1,2,2,u%2?Fn:bo)}}});for(let o=0;o<10;o++)I(e.x+t*.4,e.y+n*.4,.75,t*y(.5,1.5)+y(-.4,.4),n*y(.5,1.5)+y(-.4,.4),y(0,.4),y(.6,1),o%2?Fn:bo,2,.6,!0,.9)};H.polilla_W=e=>{if(e.type==="heal"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,o){const[r,i]=P(e.x,e.y,1.25);n.globalAlpha=Math.min(1,o*6,(1-o)*2),Ts(n,r,i,7,-.6,.5,bo);for(let a=0;a<3;a++){const s=(o*1.6+a/3)%1;Ve(n,r-10+a*10,i+s*50,2,4,a%2?Jr:go)}}});for(let n=0;n<8;n++)I(e.x+y(-.35,.35),e.y+y(-.35,.35),y(1,1.6),0,0,-y(.6,1.2),y(.7,1.1),n%2?bo:Fn,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,o){const r=zg(e.uid),i=r?r.x:e.x,a=r?r.y:e.y,[s,l]=P(i,a,2.2),u=o*1.2,f=ye(15*uf(u/.18));n.globalAlpha=Math.min(1,(1-o)*2.5),Ts(n,s,l,f+2,-.7,.5,ha),Ts(n,s,l,f,-.7,.55,go);for(let c=0;c<5;c++){const h=w.T*2+c*1.26;(w.T*6+c)%2<1&&Ve(n,s+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,Fn)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,o){for(const[r,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(o-i)/(1-i)));if(a<=0)continue;const s=t*r*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*Sa,[f,c]=P(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);Ve(n,f-1,c-1,l%3?2:3,2,l%2?Jr:go)}}}});for(let n=0;n<40;n++){const o=y(0,Sa),r=Math.sqrt(Math.random())*t*.9;I(e.x+Math.cos(o)*r,e.y+Math.sin(o)*r,y(2.2,3),y(-.15,.15),y(-.15,.15),-y(1.2,2),y(1.1,1.6),[bo,Jr,go,Fn][n%4],2,.4,!0,.99)}};H.polilla_E=e=>{const t=e.dur||3;T({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,o,r){const i=zg(e.uid);if(!i)return;const a=o*r.dur;!r.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(r.end=a);const s=r.end?Math.max(0,1-(a-r.end)/.25):1;if(s<=0)return;const l=a<.22?uf(a/.22):1,u=.85+.15*Math.sin(w.T*8),[f,c]=P(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=c-9-3*l,g=f+d*(7+10*l),x=c+9;em(n,g,x,10*l*u,8,.4*d,J2,Z2,s),em(n,m,p,15*l*u,13,-.45*d,Z2,J2,s),n.globalAlpha=.9*s,l>.5&&(lf(n,m+d*2,p-1,4,bS),Ve(n,m+d*2-1,p-2,2,2,Fn),Ve(n,m+d*2-2,p-3,1,1,go))}pt(!0);const h=Wt();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(w.T*3+d*.37)%1;p>.3||(h.globalAlpha=(1-p/.3)*s,Ve(h,f+m*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,go))}pt(!1)}});for(let n=0;n<18;n++){const o=y(0,Sa),r=y(1,2.2);I(e.x,e.y,.75,Math.cos(o)*r,Math.sin(o)*r,y(.3,1.2),y(.5,.9),n%3?Fn:bo,2,.5,!0,.92)}};const nm=3.4,kh=[1,.8,.62,.45,.3,.16];let om=null,rm=null,im=[],am=[];function sm(e,t,n,o,r,i,a){const s=w.T,l=lr(r);for(let u=0;u<9;u++){const f=u/9*Sa+s*.45,c=Math.cos(f),h=Math.sin(f);if(Wi(c,h,0)>0!==i)continue;const d=Math.max(2,ye((4+u%3*3)*Math.sqrt(Math.max(0,1-(c-h)*(c-h)/2))));Xn(t+c*o,n+h*o);const m=.75+.25*Math.sin(s*3+u*1.7),p=ye(zt.x-d/2);for(let g=0;g<6;g++)e.globalAlpha=a*m*kh[g]*(i?.5:.45),e.fillStyle=g<2?go:bo,e.fillRect(p,ye(zt.y-l*(g+1)/6),d,ye(l/6)+1)}}H.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=SS(e),o=n&&n.dur||4,r=10,i=t*N.HW*Math.SQRT2,a=t*N.HH*Math.SQRT2,s=Array.from({length:r},(h,d)=>({ox:y(-.6,.6)*t,oy:y(-.6,.6)*t,w:y(.8,1.6),p:y(0,Sa),z:y(.6,2.4),ph:d}));let l=0;const u=ka(e,o),f=()=>w.T-u.t0,c=h=>Math.min(1,f()/.25,h/.4);T({type:"custom",layer:"ground",dur:o+1,x:e.x,y:e.y,draw(h,d,m){const p=io(u);if(p<=0){m.t=m.dur+1;return}const g=c(p),x=uf(f()/.3),b=nm*Math.min(1,f()/.4);Xn(e.x,e.y);const M=zt.x,v=zt.y,S=Ue(t)*x;om!==h&&(om=h,im=[{u0:0,fill:Vt(h,Lh,3),a:.5},{u0:.7,fill:Vt(h,ha,5),a:.5},{u0:.92,fill:Vt(h,Jr,9),a:.55}]),Xr(h,M,v,S,S,lr(b),!1,im,kh,g),sm(h,e.x,e.y,t*x,b,!1,g),Mi(u,e.x,e.y,t*1.1,12577279,.7*g)}}),T({type:"custom",layer:"ground",add:!0,dur:o+1,x:e.x,y:e.y,draw(h,d,m){const p=io(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=c(p),[b,M]=P(e.x,e.y);h.globalAlpha=.13*x,h.fillStyle=ha;for(let v=-a;v<=a;v+=2){const S=i*Math.sqrt(Math.max(0,1-v*v/(a*a)));h.fillRect(ye(b-S),ye(M+v),ye(S*2),2)}h.globalAlpha=.4*x,Ts(h,b,M,ye(t*30),-.5,.5,Jr,.5),h.globalAlpha=.85*x;for(let v=0;v<40;v++){const S=v/40*Sa+g*.35,[_,A]=P(e.x+Math.cos(S)*t,e.y+Math.sin(S)*t);Ve(h,_-1,A-1,2,2,v%4?Jr:go)}}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:e.x,y:e.y,draw(h,d,m){const p=io(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=c(p),b=uf(g/.3),M=nm*Math.min(1,g/.4);Xn(e.x,e.y);const v=zt.x,S=zt.y,_=Ue(t)*b;rm!==h&&(rm=h,am=[{u0:0,fill:Vt(h,Lh,2),a:.4},{u0:.72,fill:Vt(h,ha,3),a:.45},{u0:.93,fill:Vt(h,bo,7),a:.55}]),Xr(h,v,S,_,_,lr(M),!0,am,kh,x),sm(h,e.x,e.y,t*b,M,!0,x),h.globalAlpha=x*.85,h.fillStyle=Jr,Oi(h,e.x,e.y,M,t*b,64,2,g*.5,0),h.fillStyle=go,Oi(h,e.x,e.y,M,t*b,16,3,-g*.8,1),Xn(e.x,e.y,M+.45+Math.sin(g*1.6)*.06),h.globalAlpha=x*.35,lf(h,zt.x,zt.y,26,ha),h.globalAlpha=x,Ts(h,zt.x,zt.y,18,.9,.55,go);for(const A of s){const R=g*A.w+A.p,C=e.x+A.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,z=e.y+A.oy+Math.sin(R)*.6,[O,E]=P(C,z,A.z+Math.sin(g*1.7+A.p)*.4);h.globalAlpha=x*Math.min(1,g/.4),vS(h,O,E,2,((w.T*14|0)+A.ph)%4,A.ph%3?bo:go,Jr)}if(l<50&&Math.random()<.3){l++;const A=y(0,Sa),R=Math.sqrt(Math.random())*t;I(e.x+Math.cos(A)*R,e.y+Math.sin(A)*R,y(2.5,3.5),0,0,-y(.8,1.4),y(1.5,2.2),l%3?bo:Fn,2,0,!0,.99)}}}),Q(2)};const yt=Math.round,qn=Math.PI*2,Fi=e=>e*N.HW*Math.SQRT2,lt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},jd=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function Fg(e,t,n,o){o=Math.max(1,yt(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(yt(t[0]+(n[0]-t[0])*s/i-a),yt(t[1]+(n[1]-t[1])*s/i-a),o,o)}function jn(e,t,n,o,r,i=2){if(!(o<1||r<1))for(let a=-r;a<r;a+=i){const s=(a+i/2)/r,l=o*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(yt(t-l),yt(n+a),Math.max(1,yt(l*2)),i)}}function oi(e,t,n,o,r,i,a=0,s=0){for(let l=0;l<r;l++){if(s&&l%s===0)continue;const u=a+l/r*qn;e.fillRect(yt(t+Math.cos(u)*o-i/2),yt(n+Math.sin(u)*o*.5-i/2),i,i)}}function _S(e,t,n,o=99){let r=null,i=o;for(const a of w.game?w.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,r=a)}return r}function p0(e,t,n,o){const r=t.length-1;if(!(r<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?lt.skinD:i===1?lt.skin:lt.skinL;for(let a=0;a<=r;a++){const s=n+(o-n)*a/r,l=yt(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(yt(t[a][0]-l/2),yt(t[a][1]+u-l/2),l,l)}}for(let i=2;i<r-1;i+=3){const a=n+(o-n)*i/r,s=Math.max(2,yt(a*.4)),l=yt(t[i][0]),u=yt(t[i][1]+a*.3);e.fillStyle=lt.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=lt.skinD,e.fillRect(l,u,1,1))}}}function Eg(e,t,n,o=1){const r=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(r,i)||1,s=-i/a,l=r/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,g=Math.sin(p*7-n*14)*7*p;f.push([e[0]+r*p+s*g,e[1]+i*p+l*g])}let[c,h]=f[u],d=Math.atan2(i,r);for(let m=1;m<=6;m++){d+=.6*o;const p=3.2*(1-m/8);c+=Math.cos(d)*p,h+=Math.sin(d)*p,f.push([c,h])}return f}H.pulpo_Q=e=>{const t=e.x,n=e.y,o=Math.atan2(e.uy||0,e.ux||1),r=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:o+y(-.9,.9)*r,d:i*y(.45,1),t0:y(0,.12),w:y(0,6),sz:y(6,10),bio:u%4===0}));T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const c of a){const h=(f-c.t0)/.42;if(h<0||h>1.15)continue;const d=1-Math.pow(1-Math.min(1,h),2),m=c.d*d,p=Math.sin(d*qn+c.w)*.2*d,g=t+Math.cos(c.a)*m-Math.sin(c.a)*p,x=n+Math.sin(c.a)*m+Math.cos(c.a)*p,[b,M]=P(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),v=c.sz*(1-.4*d);l.globalAlpha=h>1?(1.15-h)/.15:1,l.fillStyle=lt.ink,jn(l,b,M,v,v*.75,2),l.fillStyle=lt.inkV,jn(l,b-v*.3,M-v*.3,v*.4,v*.3,1),c.bio&&(l.fillStyle=lt.bio,l.fillRect(yt(b+v*.2),yt(M),2,2))}}});const s=a.slice(0,9);T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const c of s){const h=f.t-c.t0-.42;if(h<0)continue;const d=Math.min(1,h*10),m=Math.min(1,(2.6-f.t)/.6),[p,g]=P(t+Math.cos(c.a)*c.d,n+Math.sin(c.a)*c.d),[x,b]=P(t,n),M=x-p,v=b-g,S=Math.hypot(M,v)||1;l.globalAlpha=.85*m;for(let A=0;A<4;A++){const R=(c.sz+2)*(1-A*.22)*d;l.fillStyle=A?lt.inkP:lt.ink,jn(l,p+M/S*A*7*d,g+v/S*A*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(w.T*4+c.w*3);l.globalAlpha=m*_,l.fillStyle=lt.bio,l.fillRect(yt(p-3),yt(g-1),2,2),l.fillRect(yt(p+4),yt(g+1),2,1),c.bio&&(l.fillStyle=lt.bioL,l.fillRect(yt(p),yt(g-2),1,1))}}});for(let l=0;l<12;l++){const u=o+y(-1,1)*r,f=y(2,4.5);I(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,y(.5,1.8),y(.35,.6),l%3?lt.ink:lt.bio,l%3?3:2,7,l%3===0,.93)}};const us=[];function AS(e){let t=null,n=1.3;for(const o of us){if(o.done||w.T-o.t>1.2||e.src&&e.src.id!==o.uid)continue;const r=e.x-o.x,i=e.y-o.y;if(r*o.ux+i*o.uy<-.6)continue;const a=Math.abs(r*o.uy-i*o.ux);a<n&&(n=a,t=o)}return t}const Lg=e=>P(e.x,e.y,.35);function kg(e,t,n){T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(o,r){const i=Z(e);if(!i)return;const a=Lg(i),s=P(t,n,.45),l=1-r*r;l<.05||p0(o,Eg(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],w.T,1+r*2),10,3)}})}H.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let r=us.length-1;r>=0;r--)w.T-us[r].t>3&&us.splice(r,1);const o={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:w.T,lx:e.x,ly:e.y,lt:0,done:!1};us.push(o),T({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(r,i,a){if(o.done){a.t=a.dur+1;return}o.lt>0&&w.T-o.lt>.12&&(o.done=!0,kg(o.uid,o.lx,o.ly),a.t=a.dur+1)}});for(let r=0;r<8;r++)I(e.x+t*.3,e.y+n*.3,.3,t*y(.5,1.5)+y(-.6,.6),n*y(.5,1.5)+y(-.6,.6),y(.5,1.5),.4,r%2?lt.sucker:lt.skin,2,5,!1)};Pe.pulpo_W=(e,t,n,o,r,i)=>{const a=AS(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=w.T);const s=a?Z(a.uid):t.src||_S(t.x,t.y,"pulpo",9),l=s&&!s.dead?Lg(s):[n-Math.cos(r)*70,o-Math.sin(r)*70];p0(e,Eg(l,[n,o],i),11,3),Math.random()<.25&&I(t.x,t.y,.4,0,0,-.3,.4,lt.bio,2,3,!0)};H.pulpo_W_hit=e=>{const t=e.x,n=e.y,o=e.uid?Z(e.uid):null,r=o?o.team:null;let i=null,a=1.3;for(const h of w.game?w.game.units:[]){if(h.dead||r&&h.team===r||o&&h===o||h.kind==="tower"||h.kind==="nexus")continue;const d=Math.hypot(h.x-t,h.y-n);d<a&&(a=d,i=h)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const h of us)h.uid===e.uid&&w.T-h.t<1.5&&(!f||h.t>f.t)&&(f=h);f&&!f.done&&(f.done=!0,kg(f.uid,t,n));const c=h=>{const d=s?Z(s):null;return d&&!d.dead?[d.x,d.y]:[h.x,h.y]};T({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),[x,b]=P(p,g),M=Math.min(1,m.t/.12),v=d>.8?(1-d)/.2:1;h.globalAlpha=.9*v,h.fillStyle=lt.ink,jn(h,x,b,30*M,13*M,2),h.fillStyle=lt.inkP,jn(h,x,b,20*M,8*M,2),h.fillStyle=lt.bio,oi(h,x,b,30*M,18,2,w.T*2,3)}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),M=w.T;h.globalAlpha=x;const v=[];for(let S=0;S<=16;S++){const _=S/16,A=_*1.15*b,R=Math.max(0,_-.6)/.4,[C,z]=P(p,g,A);v.push([C+u*(20-R*26)+Math.sin(M*5+_*4)*2,z-R*6])}p0(h,v,12,3);for(let S=0;S<2;S++){const[,_]=P(p,g,(.22+S*.3)*b),[A]=P(p,g),R=19-2*Math.sin(M*9+S*2),C=1+.08*Math.sin(M*9);for(let z=0;z<=12;z++){const O=.1*Math.PI+z/12*.8*Math.PI,E=A+Math.cos(O)*R*C,U=_+Math.sin(O)*7;h.fillStyle=lt.skinD,h.fillRect(yt(E)-4,yt(U)-4,8,8),h.fillStyle=lt.skin,h.fillRect(yt(E)-3,yt(U)-3,6,5),z%3===1&&(h.fillStyle=lt.sucker,h.fillRect(yt(E)-1,yt(U)+1,3,2))}}}});for(let h=0;h<10;h++){const d=Math.random()*qn,m=y(1,2.4);I(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,y(1,2.5),.5,h%3?lt.ink:lt.bio,3,9,h%3===0)}Q(jd(e)?3:1)};function TS(e,t,n,o,r,i){if(o<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=P(t,n,l*o*.75),c=Math.max(0,l-.55)/.45;a.push([u+Math.sin(r*3+i+l*3)*4*l+c*c*10,f+c*c*8])}p0(e,a,8,2)}H.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,o=e.radius||2.4,r=3,i=[0,1,2,3].map(s=>({a:s/4*qn+y(-.3,.3),d:y(.45,.75),ph:Math.random()*qn})),a=s=>Math.min(1,s/.25,(r-s)/.35);T({type:"custom",layer:"ground",dur:r,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=Math.min(1,u.t/.3),[h,d]=P(t,n),m=Fi(o)*c,p=u.t;s.globalAlpha=.6*f,s.fillStyle=lt.navy,jn(s,h,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=lt.deep,jn(s,h,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,M=1-b,v=g/3*qn+p*2.2+b*5,S=h+Math.cos(v)*m*(.08+.9*M),_=d+Math.sin(v)*m*(.08+.9*M)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=M>.6?lt.water:M>.3?lt.bio:lt.bioL;const A=M>.5?4:3;s.fillRect(yt(S)-(A>>1),yt(_)-1,A,2+(M>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=lt.foam,oi(s,h,d,m*.97,56,3,p*1.4,4),s.fillStyle=lt.water,oi(s,h,d,m*.85,40,2,p*1.9,3),s.globalAlpha=f,s.fillStyle=lt.inkV,jn(s,h,d,19*c,9*c,1),s.fillStyle=lt.abyss,jn(s,h,d,15*c,7*c,1)}}),T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=w.T;s.globalAlpha=f;for(const h of i){const d=h.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+h.ph))*1.1;TS(s,t+Math.cos(d)*o*h.d,n+Math.sin(d)*o*h.d,m,c,h.ph)}for(let h=0;h<6;h++){const d=u.t*1.5+h/6,m=Math.floor(d),p=d-m,g=q(m*11+h)*qn,x=o*.3*q(m*5+h*7),[b,M]=P(t+Math.cos(g)*x,n+Math.sin(g)*x,p*.9),v=2+yt(p*3);s.globalAlpha=f*(1-p),s.fillStyle=lt.foam,s.fillRect(yt(b)-v,yt(M),1,2),s.fillRect(yt(b)+v,yt(M),1,2),s.fillRect(yt(b),yt(M)-v,2,1),s.fillRect(yt(b),yt(M)+v,2,1)}}}),T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=P(t,n);s.globalAlpha=1-l,s.fillStyle=lt.foam,oi(s,u,f,Fi(o)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*qn;I(t+Math.cos(l)*o*.8,n+Math.sin(l)*o*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,y(1,2.5),.5,s%3?lt.foam:lt.bio,3,8,s%3===0)}};const Dh=new Map;function Ml(e,t,n){const o=Z(t);if(!e.ended&&(!o||o.dead||n.t>.15&&"channel"in o&&!o.channel)&&(e.ended=!0,e.endT=w.T),!e.ended)return Math.min(1,n.t/.25);const r=1-(w.T-e.endT)/.4;return r<=0&&(n.t=n.dur+1),Math.max(0,r)}function RS(e,t,n,o,r){const a=10*o;if(a<1){e.fillStyle=lt.inkL,e.fillRect(yt(t-26),yt(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=lt.inkL,e.fillRect(yt(t-u-2),yt(n+l),yt(u*2+4),2),e.fillStyle=lt.eyeD,e.fillRect(yt(t-u),yt(n+l),yt(u*2),2)}const s=Math.sin(r*.8)*6;e.fillStyle=lt.eye,jn(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=lt.abyss,e.fillRect(yt(t+s-8),yt(n-2),16,Math.max(2,yt(5*o))),e.fillStyle="#ffffff",e.fillRect(yt(t+s-6),yt(n-Math.min(6,a-1)),3,2)}const Vr=2.5,Jn=.5,oa=.84,CS=[1,.9,.75,.6,.45],PS=[.85,.75,.62,.5,.38];let Ic=null,Oc=null,lm=null,um=null;const fm=e=>1-(1-e)*(1-e);function cm(e,t,n,o,r,i,a,s){if(r<.05)return;const l=o*Jn,u=o*(Jn+(oa-Jn)*Math.min(1,r/Vr)),f=(u-l)/r;for(let c=0;c<14;c++){const h=c/14*qn;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+c*.37)%1;if(p>.5)continue;const g=h+i*(2.6-1.3*m)+m*2.4,x=Math.cos(g),b=Math.sin(g),M=l+(u-l)*m;Wi(x,b,-f)>0===s&&(Xn(t+x*M,n+b*M,m*r),e.globalAlpha=a*(.45+.55*(1-p*2))*(s?.9:.7),e.fillStyle=m<.3?lt.mag:m<.65?lt.bio:lt.water,e.fillRect(yt(zt.x)-3,yt(zt.y)-1,m<.3?4:6,3))}}}function IS(e){const t={ended:!1,endT:0};Dh.set(e.uid+"_"+e.key,t);const n=e.uid,o=e.x,r=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*qn,off:Math.random(),sp:y(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*qn,off:Math.random(),sz:yt(y(4,7))})),u=[0,1,2,3,4].map(c=>({a:c/5*qn+y(-.2,.2),ph:Math.random()*qn}));T({type:"custom",layer:"ground",dur:a,x:o,y:r,draw(c,h,d){const m=Ml(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=P(o,r),b=Fi(i)*p;c.globalAlpha=.4*m,c.fillStyle=lt.inkP,jn(c,g,x,b*.95,b*.475,3),c.globalAlpha=.7*m,c.fillStyle=lt.ink,jn(c,g,x,b*.52,b*.26,3),c.globalAlpha=m,c.fillStyle=lt.abyss,jn(c,g,x,b*.27,b*.135,2);for(const M of s){const v=(M.off+d.t*M.sp)%1,S=1-v,_=b*(.27+.73*S),A=M.a+v*v*4+d.t*.8,R=g+Math.cos(A)*_,C=x+Math.sin(A)*_*.5,z=g+Math.cos(A-.14)*_*1.04,O=x+Math.sin(A-.14)*_*.52;c.globalAlpha=m*(.3+.7*v),c.fillStyle=S>.6?lt.water:S>.3?lt.bio:lt.mag,Fg(c,[z,O],[R,C],S>.5?2:3)}c.globalAlpha=.8*m,c.fillStyle=lt.inkV,oi(c,g,x,b,64,3,-d.t*.6,4)}});const f={nl:0};T({type:"custom",layer:"ground",dur:a,x:o,y:r,draw(c,h,d){const m=Ml(t,n,d);if(m<=0)return;const p=fm(Math.min(1,d.t/.55))*(t.ended?m:1);Xn(o,r);const g=zt.x,x=zt.y,b=lr(Vr*p);(!Ic||lm!==c)&&(lm=c,Ic=[{u0:0,fill:Vt(c,lt.deep,11),a:.7},{u0:.45,fill:Vt(c,lt.water,10),a:.7},{u0:.78,fill:Vt(c,lt.bio,9),a:.7},{u0:.93,fill:Vt(c,lt.bioL,12),a:.75}]),Xr(c,g,x,Ue(i*Jn),Ue(i*(Jn+(oa-Jn)*p)),b,!1,Ic,CS,m),cm(c,o,r,i,Vr*p,d.t,m,!1),c.globalAlpha=.9*m,c.fillStyle=lt.foam,Oi(c,o,r,Vr*p,i*(Jn+(oa-Jn)*p),110,4,-d.t*1.3,-1),c.fillStyle=lt.water,Oi(c,o,r,Vr*p-.08,i*(Jn+(oa-Jn)*p)*.97,60,3,-d.t*1.9,-1),Mi(f,o,r,i*1.05,4911328,.55*m)}}),T({type:"custom",layer:"top",add:!0,dur:a,x:o,y:r,draw(c,h,d){const m=Ml(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=P(o,r,.04),b=Fi(i)*.28*p,M=w.T;for(let v=0;v<44;v++){const S=v/44*qn+M*2.5,_=.6+.4*Math.sin(M*20+v*1.7);c.globalAlpha=m*_,c.fillStyle=v%2?lt.bio:lt.mag,c.fillRect(yt(g+Math.cos(S)*b)-1,yt(x+Math.sin(S)*b*.5)-1,3,3)}c.globalAlpha=m*.45,c.fillStyle=lt.bioL;for(let v=0;v<18;v++){const S=Math.PI+v/17*Math.PI;c.fillRect(yt(g+Math.cos(S)*b*1.15),yt(x-14+Math.sin(S)*b*.35),2,2)}}}),T({type:"custom",layer:"top",dur:a,x:o,y:r,draw(c,h,d){const m=Ml(t,n,d);if(m<=0)return;const p=w.T,g=Math.min(1,d.t/.5)*(t.ended?m:1);c.globalAlpha=m;for(const S of l){const _=(S.off+d.t*.4)%1,A=1-_,R=S.a+_*5,[C,z]=P(o+Math.cos(R)*i*.95*A,r+Math.sin(R)*i*.95*A,.05+.35*Math.sin(_*Math.PI)),O=Math.max(2,yt(S.sz*(.35+.65*A)));c.fillStyle=lt.ink,c.fillRect(yt(C)-(O>>1)-1,yt(z)-(O>>1)-1,O+2,O+2),c.fillStyle=lt.rock,c.fillRect(yt(C)-(O>>1),yt(z)-(O>>1),O,O),c.fillStyle=lt.rockL,c.fillRect(yt(C)-(O>>1),yt(z)-(O>>1),Math.max(1,O>>1),1)}const x=u.map(S=>({t:S,a:S.a+d.t*.3})).sort((S,_)=>Math.cos(S.a)+Math.sin(S.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:S,a:_}of x){const A=[];for(let R=0;R<=18;R++){const C=R/18,z=i*(.92-.42*C*C),O=_+Math.sin(p*2+S.ph+C*3)*.12*C,E=Math.sin(C*Math.PI*.8)*1.9*g-Math.max(0,C-.8)*1.2*g;A.push(P(o+Math.cos(O)*z,r+Math.sin(O)*z,Math.max(0,E)))}p0(c,A,15*g+2,3)}const b=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,v]=P(o,r,.3);RS(c,M,v,b,p)}}),T({type:"custom",layer:"top",dur:a,x:o,y:r,draw(c,h,d){const m=Ml(t,n,d);if(m<=0)return;const p=fm(Math.min(1,d.t/.55))*(t.ended?m:1);Xn(o,r);const g=zt.x,x=zt.y,b=lr(Vr*p);(!Oc||um!==c)&&(um=c,Oc=[{u0:0,fill:Vt(c,lt.water,4),a:.55},{u0:.5,fill:Vt(c,lt.water,6),a:.6},{u0:.8,fill:Vt(c,lt.bio,8),a:.65},{u0:.93,fill:Vt(c,lt.bioL,12),a:.75}]),Xr(c,g,x,Ue(i*Jn),Ue(i*(Jn+(oa-Jn)*p)),b,!0,Oc,PS,m),cm(c,o,r,i,Vr*p,d.t,m,!0),c.globalAlpha=m,c.fillStyle=lt.foam,Oi(c,o,r,Vr*p,i*(Jn+(oa-Jn)*p),110,4,-d.t*1.3,1),c.fillStyle=lt.bioL,Oi(c,o,r,Vr*p+.04,i*(Jn+(oa-Jn)*p)*.98,24,2,d.t*2.1,1)}}),Q(jd(e)?6:2)}H.pulpo_R=e=>{if(e.type==="channel"){IS(e);return}const t=e.x,n=e.y,o=e.radius||3.6;if(e.type==="channel_tick"){T({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(r,i){const[a,s]=P(t,n),l=1-i*i;r.globalAlpha=.4+.6*i,r.fillStyle=lt.mag,oi(r,a,s,Fi(o)*(.25+.75*l),48,3,i*3),r.fillStyle=lt.bioL,oi(r,a,s,Fi(o)*(.22+.7*l),24,2,-i*2)}});for(let r=0;r<8;r++){const i=Math.random()*qn,a=o*y(.6,1);I(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,r%2?lt.inkV:lt.bio,3,0,r%2===0,.97)}return}if(e.type==="channel_end"){const r=Dh.get(e.uid+"_"+e.key);if(r&&!r.ended&&(r.ended=!0,r.endT=w.T),Dh.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)I(t+y(-.6,.6),n+y(-.6,.6),.2,y(-1,1),y(-1,1),y(.5,1.5),.6,i%2?lt.ink:lt.inkV,4,2,!1);return}T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.3);if(a<.35){const u=yt(30*(1-a/.35))+2;i.fillStyle=lt.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=lt.mag,oi(i,s,l+20,Fi(o)*u,56,4),i.fillStyle=lt.bio,oi(i,s,l+20,Fi(o)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*qn,s=y(2,5);I(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,y(1.5,3.5),y(.5,.9),[lt.ink,lt.inkV,lt.bio,lt.mag][i%4],i%3?3:4,9,i%4>1,.94)}Q(jd(e)?8:3)}};Pe.pulpo_A=(e,t,n,o,r,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(r),l=Math.sin(r);e.fillStyle=lt.ink,jn(e,n-s*11,o-l*11,3,3,1),jn(e,n-s*18,o-l*18,2,2,1),e.fillStyle=lt.ink,jn(e,n,o,a+1,a*.8+1,2),e.fillStyle=lt.inkV,jn(e,n,o,a-1,a*.8-1,2),e.fillStyle=lt.inkL,e.fillRect(yt(n-3),yt(o-4),3,2),e.fillStyle=lt.bio,e.fillRect(yt(n+2),yt(o+1),2,2),Math.random()<.3&&I(t.x,t.y,t.z||.45,0,0,-.2,.35,lt.ink,2,5,!1)};Qe.pulpo=e=>{const t=e.x,n=e.y,o=Math.random()*qn;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(r,i){const[a,s]=P(t,n,.45),l=Math.min(1,i*8);r.globalAlpha=i<.5?1:(1-i)*2,r.fillStyle=lt.ink,jn(r,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=o+u/6*qn,c=(u%2?13:19)*l;r.fillStyle=lt.ink,Fg(r,[a,s],[a+Math.cos(f)*c,s+Math.sin(f)*c*.75],4),r.fillStyle=lt.inkV,r.fillRect(yt(a+Math.cos(f)*(c+4))-2,yt(s+Math.sin(f)*(c+4)*.75)-2+i*10,4,4)}r.fillStyle=lt.bio,r.fillRect(yt(a-3),yt(s-2),2,2),r.fillRect(yt(a+4),yt(s+2),2,2)}});for(let r=0;r<6;r++)I(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(.8,2),.4,r%3?lt.ink:lt.bio,2,8,r%3===0)};const jt=Math.round,Dr=Math.PI*2,Ft={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},zc=e=>e*N.HW*Math.SQRT2;function ri(e,t,n,o){o=Math.max(1,jt(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(jt(t[0]+(n[0]-t[0])*s/i-a),jt(t[1]+(n[1]-t[1])*s/i-a),o,o)}function Rs(e,t,n,o,r,i=2){if(!(o<1||r<1))for(let a=-r;a<r;a+=i){const s=(a+i/2)/r,l=o*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(jt(t-l),jt(n+a),Math.max(1,jt(l*2)),i)}}function Uh(e,t,n,o,r,i){const a=t[0].length,s=t.length,l=jt(n-a*r/2),u=jt(o-s*r/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*r,u+c*r,r,r)}}function Js(e,t,n,o,r,i,a=0,s=0){for(let l=0;l<r;l++){if(s&&l%s===0)continue;const u=a+l/r*Dr;e.fillRect(jt(t+Math.cos(u)*o-i/2),jt(n+Math.sin(u)*o*.5-i/2),i,i)}}const bl=new Map;function OS(e){if(bl.has(e))return!1;if(bl.size>300)for(const[t,n]of bl)w.T-n>4&&bl.delete(t);return bl.set(e,w.T),!0}function zS(e){const t=w.game,n=[];if(!t)return n;const o=(e.w||.55)*.6;for(const r of t.units)r.dead||r.team===e.team||r.team==="neutral"&&r.kind!=="monster"||Ge(r)||Math.hypot(r.x-e.x,r.y-e.y)<o+(r.r||.4)&&n.push(r);return n}const hm=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],FS=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Dg(e,t,n,o){Uh(e,hm,t+1,n+1,o,{g:Ft.deep,v:Ft.deep}),Uh(e,hm,t,n,o,{g:Ft.pad,v:Ft.moss})}function ES(e,t){const n=Math.random()*6;T({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(o,r){const[i,a]=P(e,t);o.globalAlpha=Math.max(0,1-r*r),o.fillStyle=Ft.waterD,Js(o,i,a,8+r*14,10,2,n,3),Dg(o,i,a+jt(Math.sin(r*9+n)),r<.55?2:1)}})}function LS(e,t,n,o){const r=Math.cos(o),i=Math.sin(o),a=l=>[t+r*l,n+i*l];e.fillStyle=Ft.ink,ri(e,a(-11),a(11),5),e.fillStyle=Ft.moss,ri(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",ri(e,a(0),a(8),3),e.fillStyle="#ffffff",ri(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(jt(s[0]-2),jt(s[1]-2),4,4),e.fillStyle=Ft.ink,e.fillRect(jt(s[0]-1),jt(s[1]-1),2,2)}function Ug(e,t){T({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,o){const[r,i]=P(e,t);n.globalAlpha=1-o,n.fillStyle=Ft.foam,Js(n,r,i,6+o*26,14,3,o*2,4),n.fillStyle=Ft.water,Js(n,r,i,3+o*16,10,2)}}),T({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,o){const[r,i]=P(e,t,.5),a=jt(12*(1-o))+2;n.fillStyle=Ft.padL,n.fillRect(r-a,i-1,a*2,3),n.fillRect(r-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(r-2,i-2,4,4)}});for(let n=0;n<10;n++){const o=Math.random()*Dr,r=y(.8,2);I(e,t,.45,Math.cos(o)*r,Math.sin(o)*r,y(1.5,3),.5,n%3?Ft.water:Ft.padL,2,9,!1,.95)}}const vl=new Map;function kS(e){let t=vl.get(e.id);if(!t&&(t={p:[],drop:0,seen:w.T},vl.set(e.id,t),vl.size>40))for(const[n,o]of vl)w.T-o.seen>2&&vl.delete(n);return t.seen=w.T,t}H.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,o=e.x+t*.45,r=e.y+n*.45;T({type:"custom",layer:"top",add:!0,dur:.2,x:o,y:r,draw(i,a){const[s,l]=P(o,r,.55),u=jt(9*(1-a))+2;i.fillStyle=Ft.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(s-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)I(o,r,.5,t*y(2,4)+y(-.7,.7),n*y(2,4)+y(-.7,.7),y(.6,1.6),.4,i%2?Ft.water:Ft.padL,2,6,!1,.9)};Pe.rana_Q=(e,t,n,o,r,i)=>{const a=t.z||.45,s=kS(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,ES(t.x,t.y)),pt(!0);const l=Wt();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?Ft.padL:Ft.pad,ri(l,P(s.p[u-1][0],s.p[u-1][1],a),P(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));if(l.globalAlpha=1,pt(!1),LS(e,n,o,i*26),t.id!=null)for(const u of zS(t))OS("rq"+t.id+":"+u.id)&&Ug(u.x,u.y)};function DS(e,t,n){const o=Array.from({length:5},(i,a)=>({a:a/5*Dr+y(-.3,.3),d:n*y(.45,.8),ph:Math.random()*6})),r=Array.from({length:12},(i,a)=>({a:a/12*Dr,h:y(26,44),w:Math.random()<.5?4:6}));T({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,Q(4),Tr({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*Dr,d=y(1,3.2);I(e+Math.cos(h)*.3,t+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,y(2.5,5),y(.5,.8),c%4?Ft.foam:Ft.water,3,12,!1,.97)}for(let c=0;c<6;c++)I(e+y(-.6,.6),t+y(-.6,.6),.1,y(-.4,.4),y(-.4,.4),y(1,2),.7,Ft.mud,4,8,!1)}const[l,u]=P(e,t),f=zc(n);i.globalAlpha=.35*(1-a),i.fillStyle=Ft.waterD,Rs(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=a*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?Ft.foam:Ft.water,Js(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const c of o){const h=zc(c.d)*(.6+a*.4);Dg(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(a*10+c.ph)*1.5,2)}a>.08&&Uh(i,FS,l,u-4,a<.2?2:3,{g:Ft.moss,p:Ft.pink,P:Ft.pinkL,y:Ft.eye})}}),T({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=zc(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const c of r){const h=s+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,m=jt(c.h*f),p=Math.cos(c.a)*a*10;m<2||(i.fillStyle=Ft.waterD,i.fillRect(jt(h-c.w/2+p*.5),jt(d-m),c.w,m),i.fillStyle=Ft.water,i.fillRect(jt(h-c.w/2+p*.5),jt(d-m),c.w-2,m-2),i.fillStyle=Ft.foam,i.fillRect(jt(h-c.w/2+p-1),jt(d-m-3),c.w+2,4))}}})}H.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,o=e.ex,r=e.ey,i=e.dur||.45,a=1.7,s=o-t,l=r-n,u=Math.hypot(s,l)||1;T({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,c){const[h,d]=P(t,n);f.globalAlpha=1-c,f.fillStyle=Ft.waterD,Js(f,h,d,10+c*34,18,3,0,3),f.fillStyle=Ft.foam,Js(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)I(t,n,.15,-s/u*y(1,2.5)+y(-.8,.8),-l/u*y(1,2.5)+y(-.8,.8),y(1.5,3),.5,f%3?Ft.mud:Ft.water,3,9,!1);T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),m=c>.75?(1-c)*4:1;for(let p=d;p<=h;p+=.05){const[g,x]=P(t+s*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,h-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=Ft.deep,f.fillRect(jt(g)-3,jt(x)-3,6,6),f.fillStyle=b>.7?Ft.padL:Ft.pad,f.fillRect(jt(g)-2,jt(x)-2,4,4)}}}),T({type:"custom",layer:"ground",dur:.3,delay:i,x:o,y:r,draw(f,c,h){h.go||(h.go=!0,DS(o,r,a))}})};H.rana_E=e=>{const t=e.x,n=e.y,o=Array.from({length:9},(i,a)=>{const s=a/9*Dr+y(-.3,.3),l=a===0?0:y(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:y(14,22),z:y(.15,.6),up:y(.2,.5),col:[Ft.smokeA,Ft.smokeB,Ft.smokeC][a%3],dl:y(0,.12)}}),r=[0,3,6].map((i,a)=>({p:o[i+1],t0:.15+a*.1,blink:y(.3,.6)}));T({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.2),u=jt(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=Ft.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),T({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of o){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,c]=P(l.x,l.y,l.z+l.up*u),h=jt(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Rs(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,Rs(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",Rs(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of r){const u=s-l.t0;if(u<0||u>.95)continue;const[f,c]=P(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=jt(f+d*6)-3,p=jt(c)-3;if(i.fillStyle=Ft.deep,i.fillRect(m-1,p-1,8,h?3:7),h){i.fillStyle=Ft.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=Ft.eye,i.fillRect(m,p,6,5),i.fillStyle=Ft.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*Dr,s=y(1,2.6);I(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,y(1,2.5),.6,i%2?Ft.ink:Ft.moss,2,7,!1,.92)}};function US(e,t,n,o){T({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(r,i){const a=P(e,t,.35),s=P(n,o,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){r.fillStyle=f?Ft.ink:Ft.moss;for(let c=u;c<=l;c+=.03){const h=jt((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*c,m=a[1]+(s[1]-a[1])*c+Math.sin(c*14)*1.5;r.fillRect(jt(d-h/2),jt(m-h/2),h,h)}}}});for(let r=0;r<10;r++){const i=Math.random();I(e+(n-e)*i,t+(o-t)*i,.35,y(-.6,.6),y(-.6,.6),y(.2,1),.5,Ft.ink,3,6,!1)}}function dm(e,t,n,o,r,i,a){const s=Math.cos(o),l=Math.sin(o),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?Ft.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,p=Math.max(1,jt(h*(1-Math.abs(d/u*2-1))));e.fillRect(jt(t+s*m*r/2-p/2+c),jt(n+l*m*r/2-p/2+c),p,p)}}}function XS(e,t){const n=[0,1,2].map(r=>({t0:r*.08,a:.75+r*.42+y(-.12,.12),ox:(r-1)*7,oy:(r-1)*-4,len:46+r*6}));T({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(r,i){const a=i*.5,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;r.globalAlpha=Math.max(0,h),dm(r,s+u.ox,l+u.oy,u.a,u.len,jt(6*h)+1,c),dm(r,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,jt(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(r,i){const a=i*.4,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const c=jt(16*(1-f/.1))+2;r.fillStyle=Ft.padL,r.fillRect(s+u.ox-c,l+u.oy-c,c*2,c*2)}}});const o=Array.from({length:6},()=>{const r=Math.random()*Dr,i=y(.2,1);return{dx:Math.cos(r)*i,dy:Math.sin(r)*i,r:y(5,11),drips:[y(-1,1),y(-1,1),y(-1,1)]}});T({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(r,i){r.globalAlpha=.85*(1-i*i);for(const a of o){const[s,l]=P(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);r.fillStyle=Ft.inkP,Rs(r,s,l,u,u*.5,2),r.fillStyle=Ft.ink,Rs(r,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)r.fillRect(jt(s+f*u*1.8),jt(l+f*u*.6),3,2);r.fillStyle=Ft.moss,r.fillRect(jt(s+u*.4),jt(l-1),2,2)}}});for(let r=0;r<26;r++){const i=Math.random()*Dr,a=y(1.5,4.5);I(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,y(1,3),y(.4,.7),r%5?Ft.ink:Ft.inkP,r%3?3:4,10,!1,.92)}for(let r=0;r<6;r++){const i=Math.random()*Dr;I(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,Ft.padL,2,0,!0)}Q(8)}H.rana_R=e=>{if(e.type==="blink"){US(e.x,e.y,e.ex??e.x,e.ey??e.y);return}XS(e.x,e.y)};Qe.rana=e=>{const t=e.x,n=e.y,o=Math.random()<.5?-1:1;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(r,i){const[a,s]=P(t,n,.5),l=Math.min(1,i*4),u=[a-9*o,s-3],f=[a-2*o,s+6],c=[a+13*o,s-11];r.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];r.fillStyle=Ft.moss,ri(r,u,h,5),l>=.35&&ri(r,f,d,5),r.fillStyle="#ffffff",ri(r,u,h,2),l>=.35&&ri(r,f,d,2)}});for(let r=0;r<5;r++)I(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.35,r%2?Ft.water:Ft.padL,2,8,!1)};H.rana_Q_hit=e=>Ug(e.x,e.y);const GS="#7a879c",NS="#363e50",BS="#c9d3e2",mm="#e8b858",$S="#ffa040",Xg="#f2e8d2",a0="#cdbb9a",Qd="#a08f72",Gg="#6f6250",tl="#33241a",HS="#8a7356",Ng="#9a948a",Bg="#7a7468",$g="#5e584e",WS="#c4beb2",qS="#ffe2a0",VS="#d89a3a",YS="#fff8e6",KS="#ff5a1a",je=Math.round,Fc=Math.PI*2;function Bn(e,t,n,o,r,i){e.fillStyle=i,e.fillRect(je(t),je(n),o,r)}function H0(e,t,n,o,r,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(o-t),Math.abs(r-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(je(t+(o-t)*l/s-i/2),je(n+(r-n)*l/s-i/2),i,i)}function pm(e,t,n,o,r){const[i,a]=P(t,n),s=o*N.HW*Math.SQRT2,l=s*.5;e.fillStyle=r;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(je(i-f),je(a+u),je(f*2),2)}}function Hg(e,t){const n=(e-t)*N.HW,o=(e+t)*N.HH,r=Math.hypot(n,o)||1;return[n/r,o/r]}const Wg=e=>{const t=Z(e);return t&&!t.dead&&!Ge(t)?t:null},ff=()=>[Ng,Bg,$g,Qd][Math.random()*4|0];function jS(e,t,n,o,r){if(t=je(t)-6,n=je(n)-5,Bn(e,t,n,12,10,NS),Bn(e,t+1,n+1,10,8,GS),Bn(e,t+1,n+1,10,2,BS),Bn(e,t+2,n+6,2,2,r),Bn(e,t+8,n+6,2,2,r),o>=0&&o<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Bn(e,t+1+o,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const QS=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],ZS=[qS,VS,YS,KS];function Ec(e,t,n,o,r){t=je(t),n=je(n);for(const[i,a,s,l,u]of QS){const f=r>0?i:-i-s;e.fillStyle=ZS[u],e.fillRect(t+f*o,n+a*o,s*o,l*o)}}Qe.rino=e=>{T({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[o,r]=P(e.x,e.y,.4),i=je(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;Bn(t,o-4+Math.cos(s)*16-1,r+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":Xg)}}});for(let t=0;t<3;t++)I(e.x,e.y,.3,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,ff(),3,10,!1,.95);for(let t=0;t<2;t++)I(e.x+y(-.2,.2),e.y+y(-.2,.2),.1,y(-.4,.4),y(-.4,.4),.5,.5,a0,5,0,!1,.9);Q(1.5)};H.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,o=Math.max(.12,e.dur||.3),r=t-e.x,i=n-e.y,a=Math.hypot(r,i)||1,s=-i/a,l=r/a,u=r/a,f=i/a,[c,h]=Hg(r,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(M,v)=>y(-.06,.06)+(v%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:y(.15,.35)}:null),g=Array.from({length:8},(M,v)=>({k:(v+.5)/8,o:y(-.35,.35),r:Array.from({length:4},()=>[y(-10,6),y(-8,2),je(y(6,12)),je(y(5,8)),[a0,Qd,a0,Gg][Math.random()*4|0]])}));let x=0,b=!1;T({type:"custom",layer:"ground",dur:o+1.6,x:e.x,y:e.y,draw(M,v,S){const _=v*S.dur,A=Math.min(1,_/o),R=Math.floor(A*d);M.globalAlpha=.8*Math.min(1,(S.dur-_)/.6);for(const C of[-.3,.3]){const z=C>0?1:-1;let[O,E]=P(e.x+s*C,e.y+l*C);for(let U=1;U<=R;U++){const G=U/d,Y=C+m[U]*z,[L,k]=P(e.x+r*G+s*Y,e.y+i*G+l*Y);H0(M,O,E+1,L,k+1,2,HS),H0(M,O,E,L,k,2,tl);const D=p[U];if(D&&D.s===z){const[$,W]=P(e.x+r*G+s*(Y+z*D.l)+u*D.l*.5,e.y+i*G+l*(Y+z*D.l)+f*D.l*.5);H0(M,L,k,$,W,1,tl)}O=L,E=k}}}}),T({type:"custom",layer:"top",dur:o+1,x:e.x,y:e.y,draw(M,v,S){const _=v*S.dur,A=Math.min(1,_/o);for(;x<18*A;){x++;const R=Math.random()*A;I(e.x+r*R+y(-.3,.3),e.y+i*R+y(-.3,.3),.1,-u*y(.5,2)+y(-1,1),-f*y(.5,2)+y(-1,1),y(2,4),y(.5,.8),ff(),3,12,!1,.95)}if(_>=o&&!b){b=!0,Q(5);for(let R=0;R<12;R++){const C=Math.atan2(f,u)+y(-.9,.9),z=y(2,4.5);I(t+u*.5,n+f*.5,.2,Math.cos(C)*z,Math.sin(C)*z,y(2,4),y(.5,.8),ff(),3,12,!1,.95)}}for(const R of g){const C=_-R.k*o;if(C<0||C>.9)continue;const z=C/.9,O=1+z*1.2,[E,U]=P(e.x+r*R.k+s*R.o,e.y+i*R.k+l*R.o,.15+z*.5);M.globalAlpha=.6*(1-z);for(const G of R.r)Bn(M,E+G[0]*O,U+G[1]*O,je(G[2]*O),je(G[3]*O),G[4])}}}),T({type:"custom",layer:"top",add:!0,dur:o+.08,x:e.x,y:e.y,draw(M,v,S){const _=Wg(e.uid);if(!_)return;const A=v*S.dur;M.globalAlpha=A>o?Math.max(0,1-(A-o)/.08):1;const[R,C]=P(_.x+u*.6,_.y+f*.6,.45);for(let E=0;E<6;E++){const U=7-E;Bn(M,R+c*E*2.5-U/2,C+h*E*2.5-U/2,U,U,E<2?Xg:"#ffffff")}const[z,O]=P(_.x,_.y,.5);M.globalAlpha*=.6;for(let E=0;E<5;E++){const U=(E-2)*9,G=24+E*13%3*10;H0(M,z-h*U-c*26,O+c*U-h*26,z-h*U-c*(26+G),O+c*U-h*(26+G),1,"#fff6e0")}}})};H.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(r,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),o=r=>(i,a,s)=>{const l=Wg(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=P(l.x,l.y,.42);for(const d of n){if(d.front!==r)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)I(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,y(-2,2),y(-2,2),y(1,2.5),.3,M?$S:mm,2,8,!0,.9)}const p=(1-m)*(1-m)*46,g=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,jS(i,g+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,je((w.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":mm)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:o(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:o(!0)}),Q(3)};H.rino_E=e=>{const t=e.radius||2.6,n=28,o=Array.from({length:n},(r,i)=>({a:i/n*Fc+y(-.08,.08),j:y(.9,1.08),w:je(y(4,7)),h:je(y(3,6)),col:[Ng,Bg,$g][i%3]}));T({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(r,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);r.globalAlpha=.45*u,pm(r,e.x,e.y,.75,"#3a2a1c"),r.globalAlpha=.55*u,pm(r,e.x,e.y,.4,"#24180e");for(const[f,c,h]of[[.45,tl,2],[.7,tl,2],[.95,a0,3]]){r.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*Fc,[p,g]=P(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Bn(r,p-h/2,g-1,h,2,c)}}for(const f of o){const[c,h]=P(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);r.globalAlpha=.35*u,Bn(r,c-f.w/2-1,h,f.w+2,2,"#000000"),r.globalAlpha=u,Bn(r,c-f.w/2,h-f.h-d,f.w,f.h,f.col),Bn(r,c-f.w/2,h-f.h-d,f.w,1,WS)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(r,i){const[a,s]=P(e.x,e.y,.05),l=je(30+110*i);r.globalAlpha=1-i,Bn(r,a-l,s-1,l*2,2,"#fff2d0"),Bn(r,a-l*.6,s-3,je(l*1.2),1,"#ffd890");for(const u of[-1,1])Bn(r,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let r=0;r<40;r++){const i=y(0,Fc),a=t*y(1.5,2.5);I(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,y(3,6),y(.5,.9),ff(),Math.random()<.3?4:3,14,!1,.96)}Q(8)};H.rino_R=e=>{const t=e.ux||0,n=e.uy||0,o=Math.atan2(n,t),r=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:o+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(r-.4)*(1-(1-c)*(1-c));return[e.x+Math.cos(u.a)*h,e.y+Math.sin(u.a)*h,c,h]};T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,m]=P(e.x,e.y);u.moveTo(je(d),je(m));for(let p=0;p<=12;p++){const g=o-i+2*i*p/12;[d,m]=P(e.x+Math.cos(g)*r,e.y+Math.sin(g)*r),u.lineTo(je(d),je(m))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const p of s){const[,,,g]=l(p,c),x=p.a+Math.PI/2;for(let b=.6;b<g;b+=.55){const M=Math.round(b/.55)%2?.12:-.12,[v,S]=P(e.x+Math.cos(p.a)*b+Math.cos(x)*M,e.y+Math.sin(p.a)*b+Math.sin(x)*M);Bn(u,v-4,S-1,3,3,tl),Bn(u,v+1,S-1,3,3,tl)}}}}),T({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const c=f*a;for(const h of s){const[d,m,p]=l(h,c);if(c<h.del)continue;const g=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(g<=0)continue;const[x,b]=P(d,m,.55),[M]=Hg(Math.cos(h.a),Math.sin(h.a)),v=M>=0?1:-1,S=p<.5?3:4,[_,A]=P(e.x,e.y,.55),R=x-_,C=b-A;u.globalAlpha=g*.18,Ec(u,x-R*.35,b-C*.35,S,v),u.globalAlpha=g*.35,Ec(u,x-R*.17,b-C*.17,S,v),u.globalAlpha=g,Ec(u,x,b,S,v)}}});for(let u=0;u<40;u++){const f=o+y(-i,i),c=y(.4,r*.8),h=y(2,5);I(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,y(.5,1.5),y(.5,.9),[a0,Qd,Gg][u%3],4,3,!1,.9)}Q(10)};const K=Math.round,ro=Math.PI*2,Xh=e=>e*N.HW*Math.SQRT2,tt={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},Ff=e=>!!(w.game&&w.game.player&&e.uid===w.game.player.id);function ql(e,t,n,o){o=Math.max(1,K(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(K(t[0]+(n[0]-t[0])*s/i-a),K(t[1]+(n[1]-t[1])*s/i-a),o,o)}function Oo(e,t,n,o,r,i=2){if(!(o<1||r<1))for(let a=-r;a<r;a+=i){const s=(a+i/2)/r,l=o*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(K(t-l),K(n+a),Math.max(1,K(l*2)),i)}}function qg(e,t,n,o=99){let r=null,i=o;for(const a of w.game?w.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,r=a)}return r}function JS(e,t,n,o=1.6){let r=null,i=o;for(const a of w.game?w.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,r=a)}return r}const Ef=e=>P(e.x,e.y,.5);function Lf(e,t,n,o,r,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,c=Math.max(2,Math.ceil(l/3)),h=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-o*28)*r*m;return[t[0]+a*d+u*p,t[1]+s*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?tt.tongueD:d===1?tt.tongue:tt.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=c;p++){const g=p/c,x=h(g),b=d===2?m:Math.max(2,K(m*(1-g*.3)));e.fillRect(K(x[0]-b/2),K(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=h(d/l),p=K(m[0]),g=K(m[1]);e.fillStyle=tt.ink,e.fillRect(p-2,g-5,5,10),e.fillStyle=tt.iron,e.fillRect(p-1,g-4,3,8),e.fillStyle=tt.ironL,e.fillRect(p-1,g-4,1,3)}}const Lc=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function Zd(e,t,n,o,r=1.5){const i=Math.cos(o),a=Math.sin(o),s=d=>[t+(i*d[0]-a*d[1])*r,n+(a*d[0]+i*d[1])*r];for(let d=0;d<3;d++){e.fillStyle=d===0?tt.ink:d===1?tt.iron:tt.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<Lc.length;p++)ql(e,s(Lc[p-1]),s(Lc[p]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=tt.ink,ql(e,l,u,4),e.fillStyle=tt.ironL,ql(e,l,u,2),e.fillStyle=tt.rust;const f=s([7.5,5]),c=s([-3,0]);e.fillRect(K(f[0]),K(f[1]),2,2),e.fillRect(K(c[0]),K(c[1])-1,3,2);const h=s([-12.5,0]);e.fillStyle=tt.ink,e.fillRect(K(h[0])-5,K(h[1])-5,10,10),e.fillStyle=tt.rust,e.fillRect(K(h[0])-4,K(h[1])-4,8,8),e.fillStyle=tt.ink,e.fillRect(K(h[0])-2,K(h[1])-2,4,4)}const fs=[];function t6(e){let t=null,n=1.3;for(const o of fs){if(o.done||w.T-o.t>1.6||e.src&&e.src.id!==o.uid)continue;const r=e.x-o.x,i=e.y-o.y;if(r*o.ux+i*o.uy<-.6)continue;const a=Math.abs(r*o.uy-i*o.ux);a<n&&(n=a,t=o)}return t}function e6(e,t,n){T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(o,r){const i=Z(e);if(!i)return;const a=Ef(i),s=P(t,n,.45),l=1-r*r,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&Lf(o,a,u,w.T,4*l,3*l),Zd(o,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-r*.4)}})}function n6(e,t){T({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,o){const[r,i]=P(e,t);n.globalAlpha=1-o,n.fillStyle=tt.slimeL;for(let a=0;a<10;a++){const s=a/10*ro+o;n.fillRect(K(r+Math.cos(s)*(8+o*26))-1,K(i+Math.sin(s)*(4+o*13))-1,3,3)}}});for(let n=0;n<8;n++)I(e,t,.5,y(-1.2,1.2),y(-1.2,1.2),y(1,2.4),.45,n%2?tt.slime:tt.tongueL,3,9,!1)}function o6(e){let t=null;for(const c of fs)!c.pulled&&c.team===e.team&&w.T-c.t<2.2&&(!t||c.t>t.t)&&(t=c);t&&(t.pulled=!0,t.done=!0);const n=t?Z(t.uid):qg(e.ex??e.x,e.ey??e.y,"sapo",3),o=n?n.id:0,r=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];T({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(c,h,d){const m=Z(r);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const g=1-(d.t-p[2])/1.1;if(!(g<=0)){c.globalAlpha=g*.9;for(const x of[-1,1]){const[b,M]=P(p[0]+l*x,p[1]+u*x);c.fillStyle=tt.mud,c.fillRect(K(b)-2,K(M)-1,5,3),c.fillStyle=tt.slime,c.fillRect(K(b)-1,K(M)-2,2,1)}}}}}),T({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(c,h,d){const m=Z(r),p=o?Z(o):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){n6(m.x,m.y),d.t=d.dur+1;return}const x=Ef(p),b=P(m.x,m.y,.5);Lf(c,x,b,w.T,1.2,2),Zd(c,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),Q(Ff({uid:o})?5:2)}H.sapo_Q=e=>{if(e.type==="hook_pull"){o6(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=fs.length-1;a>=0;a--)w.T-fs[a].t>3&&fs.splice(a,1);const o={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:w.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};fs.push(o),T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(o.done){l.t=l.dur+1;return}o.lt>0&&w.T-o.lt>.12&&(o.done=!0,o.pulled||e6(o.uid,o.lx,o.ly),l.t=l.dur+1)}});const r=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)I(r,i,.5,t*y(1.5,3.5)+y(-.8,.8),n*y(1.5,3.5)+y(-.8,.8),y(.8,2),.45,a%3?tt.slime:tt.tongueL,2+a%2,8,!1);T({type:"custom",layer:"top",dur:.16,x:r,y:i,draw(a,s){const[l,u]=P(r,i,.5),[f,c]=P(r+t,i+n,.5),h=f-l,d=c-u,m=Math.hypot(h,d)||1;a.globalAlpha=1-s,a.fillStyle=tt.fat;for(let p=-1;p<=1;p++)ql(a,[l-d/m*p*7,u+h/m*p*7],[l+h*(.3+s*.5)-d/m*p*7,u+d*(.3+s*.5)+h/m*p*7],2)}})};Pe.sapo_Q=(e,t,n,o,r,i)=>{const a=t6(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=w.T);const s=a?Z(a.uid):t.src||qg(t.x,t.y,"sapo",11);s&&!s.dead&&Lf(e,Ef(s),[n-Math.cos(r)*16,o-Math.sin(r)*16],i,3.5,7),Zd(e,n,o,r),Math.random()<.3&&I(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?tt.slime:tt.tongueL,2,6,!1)};H.sapo_Q_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(o,r){const[i,a]=P(t,n,.5);for(let l=0;l<10;l++){const u=l/10*ro+.2,f=(l%2?12:26)*(.5+r*.7);o.globalAlpha=1-r,o.fillStyle=l%2?tt.fat:tt.meatL,ql(o,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}o.fillStyle="#ffffff";const s=K(10*(1-r))+2;o.fillRect(i-s/2,a-s/2,s,s)}});for(let o=0;o<14;o++){const r=Math.random()*ro,i=y(1,3);I(t,n,.5,Math.cos(r)*i,Math.sin(r)*i,y(1.5,3.5),y(.5,.8),[tt.meat,tt.meatL,tt.fat,tt.slime][o%4],o%3?3:4,11,!1,.95)}};const Gh=new Map;function Vg(e){const t={ended:!1,endT:0};return Gh.set(e.uid+"_"+e.key,t),t}function Yg(e){const t=Gh.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=w.T),Gh.delete(e.uid+"_"+e.key)}function cs(e,t,n){const o=Z(t);if(!e.ended&&(!o||o.dead||n.t>.15&&"channel"in o&&!o.channel)&&(e.ended=!0,e.endT=w.T),!e.ended)return Math.min(1,n.t/.2);const r=1-(w.T-e.endT)/.4;return r<=0&&(n.t=n.dur+1),Math.max(0,r)}function r6(e){const t=Vg(e),n=e.uid,o=(e.dur||4)+.5,r=e.radius||2.3,i=Math.random()*50,a=l=>{const u=Z(n);return u?[u.x,u.y]:[l.x,l.y]};T({type:"custom",layer:"ground",dur:o,x:e.x,y:e.y,draw(l,u,f){const c=cs(t,n,f);if(c<=0)return;const[h,d]=a(f),[m,p]=P(h,d),g=Xh(r),x=w.T;l.globalAlpha=.22*c,l.fillStyle=tt.gasD,Oo(l,m,p,g*.95,g*.475,3);for(let b=0;b<6;b++){const M=b/6*ro+x*.25,v=g*(.4+.35*q(b+i));l.globalAlpha=.3*c,l.fillStyle=b%2?tt.gas:tt.gasD,Oo(l,m+Math.cos(M)*v,p+Math.sin(M)*v*.5,18+4*Math.sin(x*2+b),8,2)}for(let b=0;b<44;b++){const M=b/44*ro-x*.4,v=g*(.95+.05*Math.sin(M*5+x*3));l.globalAlpha=.85*c,l.fillStyle=b%3?tt.gas:tt.gasL,l.fillRect(K(m+Math.cos(M)*v)-1,K(p+Math.sin(M)*v*.5)-1,3,3)}for(let b=0;b<5;b++){const M=x*1.3+b*.2,v=Math.floor(M),S=M-v,_=q(v*13+b+i)*ro,A=g*(.15+.75*q(v*7+b*3+i)),R=m+Math.cos(_)*A,C=p+Math.sin(_)*A*.5;l.globalAlpha=c,l.fillStyle=S>.85?tt.gasL:tt.gas;const z=S>.85?4+(S-.85)*60:2+S*6;for(let O=0;O<8;O++){const E=O/8*ro;l.fillRect(K(R+Math.cos(E)*z)-1,K(C+Math.sin(E)*z*.6)-1,2,2)}}}}),T({type:"custom",layer:"top",dur:o,x:e.x,y:e.y,draw(l,u,f){const c=cs(t,n,f);if(c<=0)return;const[h,d]=a(f),[m,p]=P(h,d),g=Xh(r),x=w.T;for(let v=0;v<10;v++){const S=q(v*7.3+i),_=(x*.7+S)%1,A=v/10*ro+S*2,R=g*(.15+.7*q(v*3.1+i)),C=m+Math.cos(A)*R,z=p+Math.sin(A)*R*.5;l.globalAlpha=c*Math.sin(_*Math.PI)*.9,l.fillStyle=v%2?tt.gasL:tt.gas;for(let O=0;O<7;O++)l.fillRect(K(C+Math.sin(O*.9+x*6+v)*4)-1,K(z-8-_*46-O*5),3,4)}const[b,M]=P(h,d,.9);for(let v=0;v<5;v++){const S=v*1.7+i,_=b+Math.sin(x*(3.1+v*.4)+S)*(20+v*7),A=M-v*4+Math.sin(x*(6.2+v*.3)+S*2)*10;l.globalAlpha=c,l.fillStyle=tt.fly,l.fillRect(K(_),K(A),3,2),l.fillStyle="#eaf4ff";const R=((x*36|0)+v)%2;l.fillRect(K(_)-1,K(A)-1-R,2,1),l.fillRect(K(_)+2,K(A)-1-R,2,1)}}});const s={nl:0};T({type:"custom",layer:"ground",dur:o,x:e.x,y:e.y,draw(l,u,f){const c=cs(t,n,f);if(c<=0)return;const[h,d]=a(f),m=Math.min(1,f.t/.5);Xn(h,d);const p=zt.x,g=zt.y;gm!==l&&(gm=l,Mm=[{u0:0,fill:Vt(l,tt.gasD,4),a:.45},{u0:.7,fill:Vt(l,tt.gas,5),a:.45},{u0:.92,fill:Vt(l,tt.gasL,7),a:.5}]),Xr(l,p,g,Ue(r),Ue(r*(1+.15*m)),lr(Nh*m),!1,Mm,ym,c),vm(l,h,d,r,m,c,!1,i),Mi(s,h,d,r*.9,12107840,.35*c)}}),T({type:"custom",layer:"top",dur:o,x:e.x,y:e.y,draw(l,u,f){const c=cs(t,n,f);if(c<=0)return;const[h,d]=a(f),m=Math.min(1,f.t/.5);Xn(h,d);const p=zt.x,g=zt.y;xm!==l&&(xm=l,bm=[{u0:0,fill:Vt(l,tt.gas,2),a:.4},{u0:.7,fill:Vt(l,tt.gas,3),a:.45},{u0:.92,fill:Vt(l,tt.gasL,6),a:.5}]),Xr(l,p,g,Ue(r),Ue(r*(1+.15*m)),lr(Nh*m),!0,bm,ym,c),vm(l,h,d,r,m,c,!0,i)}})}const Nh=1.6,ym=[1,.75,.5,.3,.14];let gm=null,xm=null,Mm=[],bm=[];function vm(e,t,n,o,r,i,a,s){const l=w.T;for(let u=0;u<12;u++){const f=u/12*ro+l*.3+q(u+s)*.4;for(let c=0;c<10;c++){const h=(c/10+l*.55+q(u*3+s))%1;if(h>r)continue;const d=f+Math.sin(l*3+h*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(Wi(m,p,0)>0!==a)continue;const g=o*(1+.15*h);Xn(t+m*g,n+p*g,h*Nh);const x=h>.6?2:h>.3?3:4;if(e.globalAlpha=i*(1-h)*(a?.85:.65),e.fillStyle=u+c&1?tt.gas:tt.gasL,e.fillRect(K(zt.x)-(x>>1),K(zt.y)-(x>>1),x,x+1),h>.82){const b=(h-.82)/.18;for(let M=0;M<4;M++){const v=M*1.4+b*4;e.fillRect(K(zt.x+Math.cos(v)*(2+M)),K(zt.y-3-M*2+Math.sin(v)*2),2,2)}}}}}function Bh(e,t,n,o){T({type:"custom",layer:"ground",dur:o?.7:.45,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=Xh(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const c=f/26*ro,h=f%2?4:3;i.fillStyle=f%4?tt.gas:tt.gasL,i.fillRect(K(s+Math.cos(c)*u)-2,K(l+Math.sin(c)*u*.5)-1,h,3)}o&&(i.fillStyle=tt.gasD,Oo(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const r=o?16:6;for(let i=0;i<r;i++){const a=Math.random()*ro,s=y(.5,o?2.4:1.4);I(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,y(.4,1.4),y(.6,1),i%2?tt.gas:tt.gasL,o?5:4,-.6,!1,.9)}}H.sapo_W=e=>{if(e.type==="channel"){r6(e);return}const t=Z(e.uid),n=t?t.x:e.x,o=t?t.y:e.y;if(e.type==="channel_tick"){Bh(n,o,e.radius||2.3,!1);return}e.type==="channel_end"&&(Yg(e),Bh(n,o,1.4,e.kind==="done"))};H.sapo_E=e=>{const t=e.uid,n=e.dur||4,o=Math.random()*6,r=i=>{const a=Z(t);return a&&!a.dead?a:null};T({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=r();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,c]=P(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),h=K(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=tt.bellyD,Oo(i,f,c+1,h+2,h*.8+2,2),i.fillStyle=tt.belly,Oo(i,f,c,h,h*.8,2),i.fillStyle="#ffffff",i.fillRect(K(f-h*.4),K(c-h*.5),3,2)}}),T({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=r();if(!l)return;const[u,f]=P(l.x,l.y);i.globalAlpha=1-a;for(let c=0;c<2;c++){const h=14+(a*1.2-c*.2)*52;if(!(h<14)){i.fillStyle=c?tt.slime:tt.belly;for(let d=0;d<22;d++){const m=d/22*ro;i.fillRect(K(u+Math.cos(m)*h)-2,K(f+Math.sin(m)*h*.45)-1,4,3)}}}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=r();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,p=l?l.y:s.y;for(let g=0;g<16;g++){const x=g/16*ro;I(m,p,.5,Math.cos(x)*y(1,2.6),Math.sin(x)*y(1,2.6),y(1,2.5),.5,g%2?tt.slime:tt.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,c]=P(l.x,l.y,.45),h=w.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=tt.belly,Oo(i,f,c+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*ro,g=Math.sin(p*3+h*6+o)*2.5+Math.sin(p*5-h*4)*1.5,x=f+Math.cos(p)*(30+g),b=c+Math.sin(p)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?tt.slimeL:tt.slime,i.fillRect(K(x)-1,K(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*ro+h*.6,g=f+Math.cos(p)*31,x=c+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=tt.skinD,i.fillRect(K(g)-2,K(x)-2,5,5),i.fillStyle=tt.wart,i.fillRect(K(g)-1,K(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(K(f-18),K(c-26),4,2),i.fillRect(K(f-21),K(c-23),2,4),Math.random()<.12&&I(l.x+y(-.25,.25),l.y+y(-.25,.25),.15,0,0,-.2,.5,tt.slime,2,4,!1)}})};const i6=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function a6(e,t,n,o,r){e.globalAlpha=o;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?tt.skinD:s<12?tt.skinL:tt.skin,e.fillRect(K(t-l),K(n-s-2),K(l*2),2)}e.fillStyle=tt.skinD;for(let s=0;s<7;s++)e.fillRect(K(t-36+q(s)*72),K(n-14-q(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=tt.skin,Oo(e,l,u,12,10,2),e.fillStyle=tt.eye,Oo(e,l,u-1,8,7,2),e.fillStyle=tt.ink,e.fillRect(K(l-5+Math.sin(r*2)*1.5),K(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(K(l-4),K(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=tt.ink,e.fillRect(K(l)-1,K(n)-1,7,8),e.fillStyle=tt.teeth,e.fillRect(K(l),K(n),5,6-s%2*2)}}function s6(e){const t=Vg(e),n=e.uid,o=(e.dur||3)+.5,r=Z(n),i=e.team||r&&r.team,a=JS(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?Z(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};T({type:"custom",layer:"ground",dur:o,x:e.x,y:e.y,draw(u,f,c){const h=cs(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=P(d,m),x=Math.min(1,c.t/.25);u.globalAlpha=h,u.fillStyle=tt.skinD,Oo(u,p,g+2,58*x,27*x,2),u.fillStyle=tt.mouth,Oo(u,p,g,50*x,22*x,2),u.fillStyle=tt.mouthM,Oo(u,p,g+3,38*x,15*x,2),u.fillStyle=tt.tongue,Oo(u,p,g+6,24*x,8*x,2),u.fillStyle=tt.tongueL,u.fillRect(K(p-10*x),K(g+3),K(8*x),2)}}),T({type:"custom",layer:"top",dur:o,x:e.x,y:e.y,draw(u,f,c){const h=cs(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=P(d,m),x=w.T,b=Math.min(1,c.t/.25),M=t.ended?0:i6(c.t),v=g-4-b*(22+M*70);for(let _=0;_<2;_++){const[,A]=P(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),C=8;for(let z=0;z<=14;z++){const O=.12*Math.PI+z/14*.76*Math.PI,E=p+Math.cos(O)*R,U=A+Math.sin(O)*C;u.globalAlpha=h,u.fillStyle=tt.tongueD,u.fillRect(K(E)-3,K(U)-3,6,6),u.fillStyle=tt.tongue,u.fillRect(K(E)-2,K(U)-2,4,4)}}const S=Z(n);if(S&&!S.dead){const _=Ef(S),A=P(d,m,.45);if(Math.hypot(A[0]-_[0],A[1]-_[1])>18){u.globalAlpha=h,Lf(u,_,A,x,1,2);for(let R=0;R<5;R++){const C=(x*1.6+R/5)%1,z=A[0]+(_[0]-A[0])*C,O=A[1]+(_[1]-A[1])*C-3;u.fillStyle=tt.meat,u.fillRect(K(z)-3,K(O)-3,6,6),u.fillStyle=tt.meatL,u.fillRect(K(z)-2,K(O)-3,3,3)}}}a6(u,p,v,h*b,x),u.globalAlpha=h*b;for(let _=0;_<=26;_++){const A=_/26*Math.PI,R=p+Math.cos(A)*54,C=g+Math.sin(A)*25;u.fillStyle=tt.skinD,u.fillRect(K(R)-4,K(C)-3,8,8),u.fillStyle=tt.skin,u.fillRect(K(R)-3,K(C)-3,6,5),u.fillStyle=tt.skinL,u.fillRect(K(R)-3,K(C)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=tt.ink,u.fillRect(K(R)-3,K(C)-10,6,8),u.fillStyle=tt.teeth,u.fillRect(K(R)-2,K(C)-9,4,6))}Math.random()<.2&&I(d+y(-.4,.4),m+y(-.2,.2),.9,0,0,-.5,.5,tt.slimeL,2,6,!1)}}),Q(Ff(e)?6:2)}function l6(e,t,n){for(let o=0;o<9;o++){const r=Math.random()*ro,i=y(.8,2.2);I(e,t,.6,Math.cos(r)*i,Math.sin(r)*i,y(1.5,3),.55,[tt.meat,tt.meatL,tt.fat,tt.slimeL][o%4],3,10,!1,.95)}Q(Ff(n)?2.5:.6)}function u6(e,t,n){T({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(o,r){const[i,a]=P(e,t),s=r<.3?1:1-(r-.3)/.7;o.globalAlpha=s,o.fillStyle=tt.skinD,Oo(o,i,a-18*s,58*s,30*s,2),o.fillStyle=tt.skin,Oo(o,i,a-22*s,52*s,25*s,2),o.fillStyle=tt.skinL,o.fillRect(K(i-30*s),K(a-40*s),K(60*s),3),o.fillStyle=tt.ink,o.fillRect(K(i-40*s),K(a-10*s),K(80*s),3)}}),Bh(e,t,1.8,!0),Q(Ff(n)?7:2)}H.sapo_R=e=>{if(e.type==="channel"){s6(e);return}if(e.type==="channel_tick"){l6(e.x,e.y,e);return}if(e.type==="channel_end")if(Yg(e),e.kind==="done")u6(e.x,e.y,e);else for(let t=0;t<10;t++)I(e.x,e.y,.5,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.6,t%2?tt.gas:tt.slime,4,2,!1)};const kc=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Qe.sapo=e=>{const t=e.x,n=e.y,o=e.uid?Z(e.uid):null,r=o?o.x-o.y<t-n?1:-1:1;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const c=kc[0].length,h=K(s-(r>0?c*f-6:6)),d=K(l-14-u),m={h:"#6a3a1e",B:tt.ink,b:"#a8acb4",r:tt.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let g=0;g<kc.length;g++)for(let x=0;x<c;x++)kc[g][x]===p&&i.fillRect(h+(r>0?x:c-1-x)*f,d+g*f,f,f)}if(a>.25){const p=(a-.25)/.75;i.fillStyle=tt.fat,i.fillRect(K(s-10-p*16),K(l+6),K(8*(1-p))+1,2),i.fillRect(K(s+4+p*16),K(l+6),K(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)I(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,[tt.meat,tt.meatL,tt.slime][i%3],3,10,!1)};const ke=Math.round,ne={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function cf(e,t,n,o,r){e.fillStyle=r,e.fillRect(ke(t-o/2),ke(n-o/2),o,o)}const s0=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function f6(e,t,n,o,r,i){const a=t.length,s=t[0].length,l=ke(n-s*r/2),u=ke(o-a*r/2);for(let f=0;f<a;f++)for(let c=0;c<s;c++){const h=i[t[f][c]];h&&(e.fillStyle=h,e.fillRect(l+c*r,u+f*r,r,r))}}function Kg(e,t,n,o,r){const i=ke(t),a=ke(n);r&&(e.fillStyle=r,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=o,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function Dc(e,t,n,o,r,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(o-t,r-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(ke(t+(o-t)*f-a/2),ke(n+(r-n)*f-a/2),a,a)}}const c6=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function jg(e,t,n,o,r,i,a,s){e.fillStyle=ne.deep,e.fillRect(t,n-r,o,r),e.fillStyle=ne.teal,e.fillRect(t,n-r,o,ke(r*.62)),e.fillStyle=ne.aqua,e.fillRect(t,n-r,o,ke(r*.3)),e.fillStyle=ne.foam,e.fillRect(t+i,n-r-2+a,o,3),s&&(e.fillStyle=ne.white,e.fillRect(t+i*2,n-r-4+a,3,2))}H.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,o=e.radius||1.7,r=Z(e.uid);let i=1,a=0;if(r){const M=t-r.x,v=n-r.y,S=Math.hypot(M,v);S>.05&&(i=M/S,a=v/S)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*N.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-a)*N.HW,m=(i+a)*N.HH,p=Math.hypot(d,m)||1,g=ke(d/p*3),x=ke(m/p*2);T({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,v){const S=Math.min(1,v*3)*(v>.6?(1-v)/.4:1);ft(t,n,o*.95,null,`rgba(18,80,110,${.32*S})`);for(let _=0;_<2;_++){const A=(v*2.4+_*.5)%1,R=o*.9*A;M.globalAlpha=S*(1-A);for(let C=0;C<22;C++){const z=C/22*6.283,[O,E]=P(t+Math.cos(z)*R,n+Math.sin(z)*R);cf(M,O,E,2,ne.sea)}}M.globalAlpha=1}});const b={n:0,sp:!1};return T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,v){const S=-o*.95+v*o*1.9,_=Math.sin(Math.min(1,v*1.08)*Math.PI),A=Math.sqrt(Math.max(0,o*o-S*S))+.25,R=Math.floor(A*2/c);for(let C=0;C<=R;C++){const z=u>0?-A+C*c:A-C*c,O=1-Math.abs(z)/A,E=.85+.15*Math.sin(z*9+v*24),U=ke((8+30*Math.sqrt(Math.max(0,O)))*_*E/2)*2;if(U<4)continue;const[G,Y]=P(t+i*S+s*z,n+a*S+l*z);jg(M,ke(G-h/2),ke(Y),h,U,g,x,(z*7.7+v*30|0)%3===0)}if(b.n<32&&_>.3)for(let C=0;C<2;C++){b.n++;const z=y(-A,A);I(t+i*S+s*z,n+a*S+l*z,.35*_,i*y(.8,2),a*y(.8,2),y(1,2.5),.45,Math.random()<.5?ne.foam:ne.sea,2,7,!1)}if(!b.sp&&v>.82){b.sp=!0;for(let C=0;C<14;C++){const z=y(-o*.6,o*.6);I(t+i*o*.8+s*z,n+a*o*.8+l*z,.2,i*y(1,3)+y(-.5,.5),a*y(1,3)+y(-.5,.5),y(2,4),.55,ne.aqua,3,9,!1)}Q(3)}}}),!0};function h6(e,t){T({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,o){const[r,i]=P(e,t,.1),a=s0(o,.1,.6);for(let s=0;s<10;s++){const l=s*.628+o*11,u=o*58+s*4,f=18*(1-o*.5),c=Math.sin(l)>0;n.globalAlpha=a*(c?1:.45),cf(n,r+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,s%2?ne.sea:ne.foam)}if(o>.45){n.globalAlpha=s0((o-.45)/.55,.2,.6);const s=ke(i-72-(o-.45)*20),l=ke(r);n.fillStyle=ne.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)I(e+y(-.3,.3),t+y(-.3,.3),.2,0,0,y(1.2,2.2),.8,Math.random()<.5?ne.sea:ne.foam,2,0,!0);return!0}H.tortuga_W=e=>{if(e.type==="heal")return h6(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,o=e.radius||4.2,r=e.uid;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=s0(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=o*(1-h)*.98,m=f*2.094+h*5+l*9,[p,g]=P(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*h),cf(s,p,g,h>.6?3:2,c%3===0?ne.foam:c%3===1?ne.sea:ne.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+y(-.2,.2),d:s*.03+y(0,.05)});const a={"#":ne.shell,a:ne.sand};return T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=o*.92*(1-c),d=u.a0+c*4.2+l*2,[m,p]=P(t+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),f6(s,c6,m,p,2,a)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=Z(r),f=u?u.x:t,c=u?u.y:n,[h,d]=P(f,c,.95),m=ke(h),p=ke(d),g=s0(l,.08,.5),x=ke(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=g*.3,s.fillStyle=ne.lamp,s.fillRect(m-8,p-8,16,16),s.globalAlpha=g,s.fillRect(m-x,p-1,x*2,2),s.fillRect(m-1,p-x,2,x*2),s.fillStyle=ne.lampW,s.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const M=b*.785+l*5,v=10+l*30;cf(s,m+Math.cos(M)*v,p+Math.sin(M)*v*.5+l*40,2,ne.lamp)}s.globalAlpha=1}}),!0};const Qg=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let o=0;o<t;o++)Qg.push({th:o/t*6.283+n*.31,ph:e,row:n})});H.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,o=e.x,r=e.y,i={broke:!1};T({type:"custom",layer:"top",add:!0,dur:n,x:o,y:r,draw(a,s){const l=Z(t);if(!l||l.dead)return;const u=s*n,[f,c]=P(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,g=18*d,x=62*d,b=u*1.6%2.2-.3,M=Qg.map(v=>{const S=v.th+u*.5,_=Math.cos(v.ph);return{d:v,th:S,x:f+Math.cos(S)*p*_+Math.cos(S)*m*30,y:c+Math.sin(S)*g*_-Math.sin(v.ph)*x-4-m*10+m*m*30,z:Math.sin(S)*_}}).sort((v,S)=>v.z-S.z);for(const v of M){const S=u-(3-v.d.row)*.05;if(S<0)continue;v.y-=(1-Math.min(1,S/.1))*14;const _=v.z>-.15,A=Math.abs(v.d.ph-b)<.22;a.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,S*10),Kg(a,v.x,v.y,S<.06||A?ne.white:ne.foam,A?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let v=0;v<16;v++){const S=y(0,6.283),_=y(1.5,3.5);I(l.x,l.y,y(.2,.9),Math.cos(S)*_,Math.sin(S)*_,y(1,3),.5,Math.random()<.5?ne.foam:ne.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;I(o+Math.cos(s)*.5,r+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,y(1.5,2.5),.4,Math.random()<.5?ne.sand:ne.shell,2,3,!1)}return!0};H.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,o=e.radius||3.4,r=o*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*r*Math.sqrt(3),Math.sin(f)*r*Math.sqrt(3)])}T({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const c=s0(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);ft(t,n,o*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(m,p)=>P(t+m*h,n+p*h);for(let m=0;m<2;m++){u.globalAlpha=c*(m?.75:.85);const p=m?ne.lamp:ne.shellD,g=m?2:3,x=m?-1:0,b=m?-2:0;for(const[M,v]of i)for(let S=0;S<6;S++){const _=S*Math.PI/3,A=(S+1)*Math.PI/3,[R,C]=d(M+Math.cos(_)*r,v+Math.sin(_)*r),[z,O]=d(M+Math.cos(A)*r,v+Math.sin(A)*r);Dc(u,R+x,C+b,z+x,O+b,5,g,p)}for(let M=0;M<22;M++){const v=M/22*6.283,[S,_]=d(Math.cos(v)*o*.66,Math.sin(v)*o*.66),[A,R]=d(Math.cos(v)*o*.86,Math.sin(v)*o*.86);Dc(u,S+x,_+b,A+x,R+b,5,g,p);const C=(M+1)/22*6.283,[z,O]=d(Math.cos(C)*o*.86,Math.sin(C)*o*.86);Dc(u,A+x,R+b,z+x,O+b,6,g,p)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const c=u/a*6.283,h=f/a*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=o*(.3+.75*h),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let g=0;g<a;g++){const x=g/a*6.283;p.push(P(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of s){const x=g/a*6.283,[b,M]=p[g],v=p[(g+1)%a][0],S=Math.max(4,Math.ceil(Math.abs(v-b))+2),_=ke((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const A=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=A?.82:1;const R=A?2:-2;jg(u,ke(Math.min(b,v)-1),ke(M),S,_,ke(Math.cos(x-.785)*3),R,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let g=0;g<16;g++){const x=y(0,6.283);I(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*y(1,2.5),Math.sin(x)*y(1,2.5),y(1.5,3),.6,Math.random()<.5?ne.foam:ne.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=y(0,6.283),c=y(2,5);I(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,y(3.5,6.5),y(.8,1.1),[ne.aqua,ne.sea,ne.foam,ne.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return Q(10),!0};Qe.tortuga=e=>{const t=e.x,n=e.y,o=!!e.big;T({type:"custom",layer:"ground",dur:o?.5:.4,x:t,y:n,draw(i,a){const[s,l]=P(t,n),u=ke(s),f=ke(l);for(let c=0;c<(o?3:2);c++){const h=a*1.3-c*.18;if(h<=0||h>=1)continue;const d=ke(6+h*(o?34:24)),m=ke(d/2);i.globalAlpha=1-h,i.fillStyle=c?ne.sea:ne.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5);i.globalAlpha=1-a,Kg(i,s,l-a*8,ne.sand,o?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const r=o?9:5;for(let i=0;i<r;i++){const a=y(0,6.283),s=y(1,2.5);I(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,y(1.5,3),.4,i%2?ne.aqua:ne.foam,2,9,!1)}};const Ct=Math.round,hi=Math.PI*2,dt={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},Zg=e=>e*N.HW*Math.SQRT2;function Ze(e,t,n,o){o=Math.max(1,Ct(o));const r=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(r/Math.max(1,o*.7))),a=o/2;for(let s=0;s<=i;s++)e.fillRect(Ct(t[0]+(n[0]-t[0])*s/i-a),Ct(t[1]+(n[1]-t[1])*s/i-a),o,o)}function d6(e,t,n,o,r,i,a=!1){const s=t[0].length,l=t.length,u=Ct(n-s*r/2),f=Ct(o-l*r/2);for(const c in i){e.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<s;d++)t[h][a?s-1-d:d]===c&&e.fillRect(u+d*r,f+h*r,r,r)}}function m6(e,t,n,o,r,i){const a=Math.abs(o),s=Ct(t),l=Ct(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=r,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=r,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const wl=new Map;function Jg(e){if(wl.has(e))return!1;if(wl.size>300)for(const[t,n]of wl)w.T-n>4&&wl.delete(t);return wl.set(e,w.T),!0}function p6(e){const t=w.game,n=[];if(!t)return n;const o=(e.w||.6)*.6;for(const r of t.units)r.dead||r.team===e.team||r.team==="neutral"&&r.kind!=="monster"||Ge(r)||Math.hypot(r.x-e.x,r.y-e.y)<o+(r.r||.4)&&n.push(r);return n}const y6=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Qe.zorra=e=>{const t=e.x,n=e.y,o=!!e.big;if(T({type:"custom",layer:"top",add:!0,dur:o?.3:.22,x:t,y:n,draw(r,i){const[a,s]=P(t,n,.5),l=Ct(4+i*(o?18:12)),u=o?4:3;r.globalAlpha=1-i,r.fillStyle=dt.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])r.fillRect(a+f*l-u/2,s+c*l*.8-u/2,u,u);r.fillStyle=dt.f2;for(let f=0;f<6;f++){const c=f/6*hi+i*3;r.fillRect(Ct(a+Math.cos(c)*(6+i*8))-1,Ct(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(r.fillStyle=dt.cream,r.fillRect(a-2,s-2,4,4))}}),I(t,n,.6,y(-.5,.5),y(-.5,.5),.4,.8,Math.random()<.5?dt.leaf:dt.autumn,3,1.2,!1,.96),o)for(let r=0;r<4;r++)I(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(1,2),.3,dt.f1,2,4,!0)};Pe.zorra_A=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=(c,h=0)=>[n+a*c-s*h,o+s*c+a*h];pt(!0);const u=Wt();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?dt.f2:dt.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(Ct(h[0])-2+(c>>1),Ct(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,pt(!1),e.fillStyle=dt.woodD,Ze(e,l(-13),l(3),3),e.fillStyle=dt.wood,Ze(e,l(-12),l(2),1),e.fillStyle=dt.steel,Ze(e,l(3),l(7),3),e.fillStyle="#ffffff",Ze(e,l(6),l(8),1),e.fillStyle=dt.leaf,Ze(e,l(-13,0),l(-9,-3),2),e.fillStyle=dt.leafD,Ze(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?Z(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&Jg("za"+t.id)&&(Qe.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),J.sfx("atk_zorra",f.x,f.y,.6))};H.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,o=e.x+t*.45,r=e.y+n*.45,i=P(e.x,e.y),a=P(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;T({type:"custom",layer:"top",dur:.32,x:o,y:r,draw(f,c){const[h,d]=P(o,r,.5),m=-u,p=l;f.globalAlpha=c<.6?1:(1-c)/.4;const g=[];for(let M=-5;M<=5;M++)g.push([h+m*M*3.4-l*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=dt.woodD;for(const M of g)f.fillRect(Ct(M[0])-2,Ct(M[1])-2,4,4);f.fillStyle=dt.wood;for(const M of g)f.fillRect(Ct(M[0])-1,Ct(M[1])-1,2,2);f.fillStyle=dt.leaf;for(const M of[g[0],g[10]])f.fillRect(Ct(M[0])-2,Ct(M[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),b=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=dt.cream,Ze(f,g[0],b,1),Ze(f,b,g[10],1)}}),T({type:"custom",layer:"top",add:!0,dur:.15,x:o,y:r,draw(f,c){const[h,d]=P(o,r,.5),m=4+c*16;f.fillStyle=dt.f1;for(let p=0;p<8;p++){const g=p/8*hi;f.fillRect(Ct(h+l*8+Math.cos(g)*m)-2,Ct(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)I(o,r,.55,-n*y(-2,2)+t*y(0,1),t*y(-2,2)+n*y(0,1),y(.5,1.5),.9,f%2?dt.leaf:dt.leafL,3,1.5,!1,.95)};Pe.zorra_Q=(e,t,n,o,r,i)=>{const a=Math.cos(r),s=Math.sin(r),l=(f,c=0)=>[n+a*f-s*c,o+s*f+a*c];pt(!0);const u=Wt();for(let f=0;f<=16;f++){const c=f/16,h=Ct(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,m=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?dt.cream:c>.45?dt.fox:dt.f1,u.fillRect(Ct(m[0]-h/2),Ct(m[1]-h/2),h,h)}u.globalAlpha=1,pt(!1),e.fillStyle=dt.woodD,Ze(e,l(-22),l(4),4),e.fillStyle=dt.wood,Ze(e,l(-21),l(3),2),e.fillStyle="#20202a",Ze(e,l(3,-4),l(12),3),Ze(e,l(3,4),l(12),3),e.fillStyle=dt.steel,Ze(e,l(4,-2),l(11),2),Ze(e,l(4,2),l(11),2),e.fillStyle="#ffffff",Ze(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=dt.leafD,Ze(e,l(-23,0),l(-15,f*5),3),e.fillStyle=dt.leaf,Ze(e,l(-22,f),l(-16,f*4),2),e.fillStyle=dt.leafL,e.fillRect(Ct(l(-17,f*4)[0]),Ct(l(-17,f*4)[1]),2,2);if(Math.random()<.3&&I(t.x,t.y,t.z||.45,y(-.4,.4),y(-.4,.4),-.2,.7,Math.random()<.6?dt.leaf:dt.autumn,3,.6,!1,.95),t.id!=null)for(const f of p6(t))Jg("zq"+t.id+":"+f.id)&&tx(f.x,f.y,t.vx||1,t.vy||0)};function tx(e,t,n,o){const r=Math.hypot(n,o)||1;T({type:"custom",layer:"top",add:!0,dur:.25,x:e,y:t,draw(i,a){const s=P(e-n/r*.7,t-o/r*.7,.5),l=P(e+n/r*.9,t+o/r*.9,.5);i.globalAlpha=1-a,i.fillStyle=dt.fox,Ze(i,s,l,Ct(6*(1-a))+1),i.fillStyle=dt.cream,Ze(i,s,l,2)}});for(let i=0;i<6;i++)I(e,t,.5,n/r*y(1,3)+y(-.8,.8),o/r*y(1,3)+y(-.8,.8),y(.5,1.5),.35,i%2?dt.f1:dt.fox,2,3,!0)}H.zorra_W=e=>{const t=e.uid,n=e.dur||4;let o=e.x,r=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*hi,h:s/9,sp:y(4.5,6),col:[dt.leaf,dt.leafL,dt.autumn][s%3],dk:s%3===2?dt.foxD:dt.leafD,r:y(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*hi,l=y(1.5,2.5);I(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,y(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,y(.8,1.6),y(.6,.9),[dt.leaf,dt.leafL,dt.autumn][a%3],3,1,!1,.94)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=Z(t),f=s*n;if(u&&(o=u.x,r=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)I(o+Math.cos(p.a+f*p.sp)*p.r,r+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,m]=P(o,r,.35);a.globalAlpha=.55*h,a.fillStyle="#e8fff0";for(let p=0;p<2;p++){const g=f*7+p*Math.PI,x=Zg(.62)*c;for(let b=0;b<7;b++){const M=g+b*.16;a.fillRect(Ct(d+Math.cos(M)*x)-1,Ct(m+Math.sin(M)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const g=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*c*(1-x*.35),[M,v]=P(o+Math.cos(g)*b,r+Math.sin(g)*b,.15+x*1.1);a.globalAlpha=h*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),m6(a,M,v,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};H.zorra_E=e=>{const t=e.x,n=e.y,o=e.ex??e.x,r=e.ey??e.y,i=e.dur||.22,a=P(t,n),s=P(o,r),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(o-t)*f,y:n+(r-n)*f}));T({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const m=h-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[g,x]=P(d.x,d.y,.32+m*.3);f.globalAlpha=p,d6(f,y6,g,x,3,{o:dt.f2,t:dt.f1,c:dt.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const M=g+(b-1.5)*9*(l?-1:1),v=Ct(4+5*Math.abs(Math.sin(h*30+b*1.7))+m*14);f.fillStyle=b%2?dt.f3:dt.f1,f.fillRect(Ct(M)-2,Ct(x-12-v),4,v),f.fillStyle=dt.f0,f.fillRect(Ct(M)-1,Ct(x-12-v),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:o,y:r,draw(f,c){const[h,d]=P(o,r,.3+c*.4),m=14+c*10;for(let p=0;p<6;p++){const g=p/6*hi+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+p)),f.fillStyle=p%2?dt.f3:dt.f2,f.fillRect(Ct(h+Math.cos(g)*m)-3,Ct(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=dt.f0,f.fillRect(Ct(h+Math.cos(g)*m)-1,Ct(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();I(t+(o-t)*c+y(-.2,.2),n+(r-n)*c+y(-.2,.2),.3,y(-.3,.3),y(-.3,.3),y(.8,1.6),y(.5,.8),[dt.f1,dt.f2,dt.f3][f%3],3,-.5,!0,.95)}};const yu=3.1;function g6(e,t,n,o,r){const i=Ct(t),a=Ct(n),s=Ct(Math.sin(r)*o),l=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<l.length;u++){const f=l[u]*o,c=u>4?Ct(s*(u-4)/4):0,h=a-u*o*2;e.fillStyle=dt.f3,e.fillRect(i-f+c,h,f*2,o*2),u<8&&(e.fillStyle=dt.f1,e.fillRect(i-f+o+c,h,Math.max(o,f*2-o*2),o*2)),u<5&&(e.fillStyle=dt.f0,e.fillRect(i-Ct(f/2)+c,h,Math.max(o,f),o*2))}e.fillStyle=dt.gold,e.fillRect(i-o,a-o*3,o*2,o*2)}function wm(e,t,n,o,r,i){const a=w.T,s=lr(.8);for(let l=0;l<46;l++){const u=l/46*hi+.09,f=Math.cos(u),c=Math.sin(u);if(Wi(f,c,0)>0!==i)continue;const h=(a*1.25+l*.618%1)%1,d=yu*(1-h);Xn(t+f*o*.95,n+c*o*.95,d);const m=Ct(zt.x),p=Ct(zt.y),g=r*Math.min(1,(1-h)*4)*(i?.85:.6);e.globalAlpha=g*.45,e.fillStyle=dt.f2,e.fillRect(m,p-Ct(s),2,Ct(s)),e.globalAlpha=g,e.fillStyle=dt.f1,e.fillRect(m,p-Ct(s*.45),2,Ct(s*.45)),e.fillStyle=i?dt.f0:dt.gold,e.fillRect(m-1,p-2,4,3)}}H.zorra_R=e=>{const t=e.x,n=e.y,o=e.radius||3.2,r=3.2,i=Z(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(b,M)=>({ox:y(-.3,.3),oy:y(-.3,.3),dl:M*.03}));T({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(b,M){const v=M*.5;for(const S of c){const _=(v-S.dl)/.35;if(_<0||_>1)continue;const A=.6+_*4.5,R=a+S.ox-l*_*.8,C=s+S.oy-u*_*.8,z=P(R,C,A),O=P(R+l*.15,C+u*.15,A-.4);b.globalAlpha=1-_*.5,b.fillStyle=dt.fox,Ze(b,O,z,3),b.fillStyle=dt.f0,b.fillRect(Ct(z[0])-2,Ct(z[1])-2,4,4)}}});for(let b=0;b<8;b++)I(a,s,.6,y(-.5,.5),y(-.5,.5),y(2,4),.4,b%2?dt.gold:dt.f1,2,2,!0);const h=28,d=.45,m=Array.from({length:h},(b,M)=>{const v=Math.random()*hi,S=Math.sqrt(Math.random())*o*.92,_=t+Math.cos(v)*S,A=n+Math.sin(v)*S;return{t0:.3+M*(2.5/h)+y(-.04,.04),lx:_,ly:A,sx:_+l*1.8+y(-.3,.3),sy:A+u*1.8+y(-.3,.3),landed:!1,tang:[0,1]}}),p=(b,M)=>P(b.sx+(b.lx-b.sx)*M,b.sy+(b.ly-b.sy)*M,4*(1-M*M));T({type:"custom",layer:"top",add:!0,dur:r,x:t,y:n,draw(b,M){const v=M*r;for(const S of m){const _=(v-S.t0)/d;if(_<0)continue;if(_>=1){if(!S.landed){S.landed=!0,I(S.lx,S.ly,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.7?dt.f1:dt.leaf,2,6,!0);const U=p(S,1),G=p(S,.93),Y=Math.hypot(U[0]-G[0],U[1]-G[1])||1;S.tang=[(U[0]-G[0])/Y,(U[1]-G[1])/Y]}const E=(v-S.t0-d)/.14;if(E<1){const[U,G]=P(S.lx,S.ly),Y=Ct(3+E*9);b.globalAlpha=1-E,b.fillStyle=dt.gold,b.fillRect(U-Y,G-1,Y*2,2),b.fillRect(U-1,G-Ct(Y/2),2,Y)}continue}const A=p(S,_),R=p(S,Math.max(0,_-.07)),C=Math.hypot(A[0]-R[0],A[1]-R[1])||1,z=(A[0]-R[0])/C,O=(A[1]-R[1])/C;b.globalAlpha=.35,b.fillStyle=dt.f2;for(let E=1;E<=4;E++){const U=p(S,Math.max(0,_-E*.05));b.fillRect(Ct(U[0])-1,Ct(U[1])-1,3,3)}b.globalAlpha=1,b.fillStyle=dt.fox,Ze(b,[A[0]-z*16,A[1]-O*16],A,3),b.fillStyle=dt.gold,Ze(b,[A[0]-z*14,A[1]-O*14],A,1),b.fillStyle="#ffffff",b.fillRect(Ct(A[0])-2,Ct(A[1])-2,4,4)}}});const g=ka(e,3),x=()=>w.T-g.t0;T({type:"custom",layer:"ground",dur:r+1,x:t,y:n,draw(b,M,v){const S=io(g);if(S<=0){v.t=v.dur+1;return}const _=Math.min(1,x()/.3,S/.35);wm(b,t,n,o,_,!1),Mi(g,t,n,o*1.05,16747050,.55*_)}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:t,y:n,draw(b,M,v){const S=io(g);if(S<=0){v.t=v.dur+1;return}const _=x(),A=Math.min(1,_/.3,S/.35);wm(b,t,n,o,A,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),C=S<.35?(.35-S)*2.4:0;b.globalAlpha=A*.7,b.fillStyle=dt.f2,Oi(b,t,n,yu+C,o*.86*R,90,3,-_*.9,0),b.fillStyle=dt.gold,Oi(b,t,n,yu+C-.06,o*.86*R,18,3,_*1.7,1);for(let z=0;z<2;z++)for(let O=0;O<9;O++){const E=O/9*hi+_*.9,U=Math.cos(E),G=Math.sin(E),Y=Wi(U,G,0)>0;z===1===Y&&(Xn(t+U*o*.86*R,n+G*o*.86*R,yu+C+Math.sin(_*3+O)*.08),b.globalAlpha=A*(Y?1:.6),g6(b,zt.x,zt.y,Y?3:2,_*9+O*1.3))}}}),T({type:"custom",layer:"ground",dur:r,x:t,y:n,draw(b,M,v){const S=M*r,_=M>.85?(1-M)/.15:Math.min(1,S*4),[A,R]=P(t,n),C=Zg(o);!v.sh&&S>.75&&(v.sh=!0,Q(3)),b.globalAlpha=.7*_,b.fillStyle=dt.fox;for(let z=0;z<10;z++){const O=z/10*hi+S*.6,E=A+Math.cos(O)*C,U=R+Math.sin(O)*C*.5,G=-Math.cos(O),Y=-Math.sin(O)*.5;b.fillRect(Ct(E)-2,Ct(U)-2,4,4),b.fillRect(Ct(E+G*6-Y*4)-1,Ct(U+Y*6+G*2)-1,3,3),b.fillRect(Ct(E+G*6+Y*4)-1,Ct(U+Y*6-G*2)-1,3,3)}for(const z of m){if(!z.landed)continue;const[O,E]=P(z.lx,z.ly),U=z.tang[0],G=z.tang[1];b.globalAlpha=_,b.fillStyle="#00000055",b.fillRect(Ct(O)-3,Ct(E),6,2),b.fillStyle=dt.woodD,Ze(b,[O-U*13,E-G*13],[O,E],3),b.fillStyle=dt.wood,Ze(b,[O-U*12,E-G*12],[O-U*2,E-G*2],1),b.fillStyle=dt.leaf,b.fillRect(Ct(O-U*13)-2,Ct(E-G*13)-1,2,3),b.fillStyle=dt.autumn,b.fillRect(Ct(O-U*13),Ct(E-G*13)-2,2,3)}}})};H.zorra_Q_hit=e=>{const t=e.uid?Z(e.uid):null;tx(e.x,e.y,t?e.x-t.x:1,t?e.y-t.y:0)};var be=`in vec2 aPosition;
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
}`,x6=`in vec2 vTextureCoord;
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
`,M6=`struct AdjustmentUniforms {
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
}`,b6=Object.defineProperty,v6=(e,t,n)=>t in e?b6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ex=(e,t,n)=>(v6(e,typeof t!="symbol"?t+"":t,n),n);const w6=class nx extends ge{constructor(t){t={...nx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:M6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:x6,name:"adjustment-filter"});super({gpuProgram:n,glProgram:o,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),ex(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};ex(w6,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var S6=`
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
}`,_6=`struct KawaseBlurUniforms {
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
}`,A6=`
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
`,T6=`struct KawaseBlurUniforms {
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
}`,R6=Object.defineProperty,C6=(e,t,n)=>t in e?R6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ra=(e,t,n)=>(C6(e,typeof t!="symbol"?t+"":t,n),n);const ox=class rx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Zt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...rx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:n?.clamp?T6:_6,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:n?.clamp?A6:S6,name:"kawase-blur-filter"});super({gpuProgram:o,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ra(this,"uniforms"),ra(this,"_pixelSize",{x:0,y:0}),ra(this,"_clamp"),ra(this,"_kernels",[]),ra(this,"_blur"),ra(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,o,r){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,o,r);else{const l=Uo.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),c=u,u=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,o,r),Uo.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,o=[t];if(t>0){let r=t;const i=t/n;for(let a=1;a<n;a++)r-=i,o.push(r)}this._kernels=o,this._updatePadding()}};ra(ox,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let ix=ox;var P6=`in vec2 vTextureCoord;
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
`,I6=`struct AdvancedBloomUniforms {
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
`,O6=`
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
`,z6=`struct ExtractBrightnessUniforms {
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
`,F6=Object.defineProperty,E6=(e,t,n)=>t in e?F6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ax=(e,t,n)=>(E6(e,typeof t!="symbol"?t+"":t,n),n);const sx=class lx extends ge{constructor(t){t={...lx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:z6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:O6,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:o,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),ax(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};ax(sx,"DEFAULT_OPTIONS",{threshold:.5});let L6=sx;var k6=Object.defineProperty,D6=(e,t,n)=>t in e?k6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,es=(e,t,n)=>(D6(e,typeof t!="symbol"?t+"":t,n),n);const ux=class fx extends ge{constructor(t){t={...fx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:I6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:P6,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:o,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:Ut.WHITE}}),es(this,"uniforms"),es(this,"bloomScale",1),es(this,"brightness",1),es(this,"_extractFilter"),es(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new L6({threshold:t.threshold}),this._blurFilter=new ix({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,o,r){const i=Uo.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=Uo.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,o,r),Uo.returnTexture(a),Uo.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};es(ux,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let U6=ux;var X6=`precision highp float;
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
`,G6=`struct AsciiUniforms {
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
}`,N6=Object.defineProperty,B6=(e,t,n)=>t in e?N6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$h=(e,t,n)=>(B6(e,typeof t!="symbol"?t+"":t,n),n);const $6=class cx extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const o=n?.color&&n.replaceColor!==!1;n={...cx.DEFAULT_OPTIONS,...n};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:G6,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:X6,name:"ascii-filter"});super({gpuProgram:r,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(o),type:"f32"}}}}),$h(this,"uniforms"),$h(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Un,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};$h($6,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var H6=`precision highp float;
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
`,W6=`struct BevelUniforms {
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
}`,q6=Object.defineProperty,V6=(e,t,n)=>t in e?q6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ns=(e,t,n)=>(V6(e,typeof t!="symbol"?t+"":t,n),n);const Y6=class hx extends ge{constructor(t){t={...hx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:W6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:H6,name:"bevel-filter"});super({gpuProgram:n,glProgram:o,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ns(this,"uniforms"),ns(this,"_thickness"),ns(this,"_rotation"),ns(this,"_lightColor"),ns(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Un,this._shadowColor=new Un,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Ds}set rotation(t){this._rotation=t*Ds,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,o,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=o,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,o,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=o,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ns(Y6,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var K6=Object.defineProperty,j6=(e,t,n)=>t in e?K6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gu=(e,t,n)=>(j6(e,typeof t!="symbol"?t+"":t,n),n);const Q6=class dx extends qM{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Zt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let o=n;Array.isArray(o)&&(o={x:o[0],y:o[1]}),n={strength:o},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...dx.DEFAULT_OPTIONS,...n},super(),gu(this,"_blurXFilter"),gu(this,"_blurYFilter"),gu(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new V1({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new V1({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,o,r){const i=Uo.getSameSizeTexture(n);t.applyFilter(this,n,o,r),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,o,!1),Uo.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Zt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Zt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Zt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Zt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Zt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Zt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};gu(Q6,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Z6=`precision highp float;
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
`,J6=`struct BulgePinchUniforms {
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
}`,t_=Object.defineProperty,e_=(e,t,n)=>t in e?t_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mx=(e,t,n)=>(e_(e,typeof t!="symbol"?t+"":t,n),n);const n_=class px extends ge{constructor(t){t={...px.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:J6,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:Z6,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:o,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),mx(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,o,r){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,o,r)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};mx(n_,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var o_=`precision highp float;
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
`,r_=`in vec2 aPosition;
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
`,Sm=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Xa=Xa||{};Xa.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,o=e.visit(t.at),r=e.visit(t.style);return r&&(n+=" "+r),o&&(n+=" at "+o),n},"visit_default-radial":function(t){var n="",o=e.visit(t.at);return o&&(n+=o),n},"visit_extent-keyword":function(t){var n=t.value,o=e.visit(t.at);return o&&(n+=" at "+o),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var o=t,r=e.visit(n.length);return r&&(o+=" "+r),o},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",o=t.length;return t.forEach(function(r,i){n+=e.visit(r),i<o-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Xa=Xa||{};Xa.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(k){var D=new Error(t+": "+k);throw D.source=t,D}function o(){var k=r();return t.length>0&&n("Invalid input not EOF"),k}function r(){return M(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,c)||a("repeating-radial-gradient",e.repeatingRadialGradient,c)}function a(k,D,$){return s(D,function(W){var et=$();return et&&(Y(e.comma)||n("Missing comma before color stops")),{type:k,orientation:et,colorStops:M(v)}})}function s(k,D){var $=Y(k);if($){Y(e.startCall)||n("Missing (");var W=D($);return Y(e.endCall)||n("Missing )"),W}}function l(){return u()||f()}function u(){return G("directional",e.sideOrCorner,1)}function f(){return G("angular",e.angleValue,1)}function c(){var k,D=h(),$;return D&&(k=[],k.push(D),$=t,Y(e.comma)&&(D=h(),D?k.push(D):t=$)),k}function h(){var k=d()||m();if(k)k.at=g();else{var D=p();if(D){k=D;var $=g();$&&(k.at=$)}else{var W=x();W&&(k={type:"default-radial",at:W})}}return k}function d(){var k=G("shape",/^(circle)/i,0);return k&&(k.style=U()||p()),k}function m(){var k=G("shape",/^(ellipse)/i,0);return k&&(k.style=O()||p()),k}function p(){return G("extent-keyword",e.extentKeywords,1)}function g(){if(G("position",/^at/,0)){var k=x();return k||n("Missing positioning value"),k}}function x(){var k=b();if(k.x||k.y)return{type:"position",value:k}}function b(){return{x:O(),y:O()}}function M(k){var D=k(),$=[];if(D)for($.push(D);Y(e.comma);)D=k(),D?$.push(D):n("One extra comma");return $}function v(){var k=S();return k||n("Expected color definition"),k.length=O(),k}function S(){return A()||C()||R()||_()}function _(){return G("literal",e.literalColor,0)}function A(){return G("hex",e.hexColor,1)}function R(){return s(e.rgbColor,function(){return{type:"rgb",value:M(z)}})}function C(){return s(e.rgbaColor,function(){return{type:"rgba",value:M(z)}})}function z(){return Y(e.number)[1]}function O(){return G("%",e.percentageValue,1)||E()||U()}function E(){return G("position-keyword",e.positionKeywords,1)}function U(){return G("px",e.pixelValue,1)||G("em",e.emValue,1)}function G(k,D,$){var W=Y(D);if(W)return{type:k,value:W[$]}}function Y(k){var D,$;return $=/^[\n\r\t\s]+/.exec(t),$&&L($[0].length),D=k.exec(t),D&&L(D[0].length),D}function L(k){t=t.substr(k)}return function(k){return t=k.toString(),o()}}();var i_=Xa.parse;Xa.stringify;function a_(e){const t=i_(m_(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],o=s_(n.type),r=l_(n.colorStops),i=h_(n.orientation);return{type:o,stops:r,angle:i}}function s_(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function l_(e){const t=f_(e),n=[],o=new Un;for(let r=0;r<e.length;r++){const i=u_(e[r]),a=o.setValue(i).toArray();n.push({offset:t[r],color:a.slice(0,3),alpha:a[3]})}return n}function u_(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function f_(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const o=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let r=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)r=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=o(i),u=(s.offset-r)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=r+(f+1)*u;i+=s.indexDelta,r=t[i]}}return t.map(c_)}function c_(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function h_(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return d_(e.value)}return 0}function d_(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function m_(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var p_=Object.defineProperty,y_=(e,t,n)=>t in e?p_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_a=(e,t,n)=>(y_(e,typeof t!="symbol"?t+"":t,n),n);const Uc=90;function g_(e){return[...e].sort((t,n)=>t.offset-n.offset)}const l0=class xu extends ge{constructor(t){if(t&&"css"in t?t={...a_(t.css||""),alpha:t.alpha??xu.defaults.alpha,maxColors:t.maxColors??xu.defaults.maxColors}:t={...xu.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=ae.from({vertex:{source:Sm,entryPoint:"mainVertex"},fragment:{source:Sm,entryPoint:"mainFragment"}}),o=fe.from({vertex:r_,fragment:o_,name:"color-gradient-filter"}),r=32;super({gpuProgram:n,glProgram:o,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Uc,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(r*3),type:"vec3<f32>",size:r},uStops:{value:new Float32Array(r*4),type:"vec4<f32>",size:r}}}}),_a(this,"baseUniforms"),_a(this,"stopsUniforms"),_a(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=g_(t),o=new Un;let r,i,a;for(let s=0;s<n.length;s++){o.setValue(n[s].color);const l=s*3;[r,i,a]=o.toArray(),this.stopsUniforms.uColors[l]=r,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Uc}set angle(t){this.baseUniforms.uOptions[1]=t-Uc}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};_a(l0,"LINEAR",0);_a(l0,"RADIAL",1);_a(l0,"CONIC",2);_a(l0,"defaults",{type:l0.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var x_=`in vec2 vTextureCoord;
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

}`,M_=`struct ColorMapUniforms {
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
}`,b_=Object.defineProperty,v_=(e,t,n)=>t in e?b_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yr=(e,t,n)=>(v_(e,typeof t!="symbol"?t+"":t,n),n);const w_=class yx extends ge{constructor(...t){let n=t[0]??{};if((n instanceof Ut||n instanceof Mo)&&(Zt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...yx.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:M_,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:x_,name:"color-map-filter"});super({gpuProgram:o,glProgram:r,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Yr(this,"uniforms"),Yr(this,"_size",0),Yr(this,"_sliceSize",0),Yr(this,"_slicePixelSize",0),Yr(this,"_sliceInnerSize",0),Yr(this,"_nearest",!1),Yr(this,"_scaleMode","linear"),Yr(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof Ut?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Yr(w_,"DEFAULT_OPTIONS",{colorMap:Ut.WHITE,nearest:!1,mix:1});var S_=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,__=`struct ColorOverlayUniforms {
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
`,A_=Object.defineProperty,T_=(e,t,n)=>t in e?A_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hh=(e,t,n)=>(T_(e,typeof t!="symbol"?t+"":t,n),n);const R_=class gx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Zt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...gx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:__,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:S_,name:"color-overlay-filter"});super({gpuProgram:o,glProgram:r,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Hh(this,"uniforms"),Hh(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Un,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Hh(R_,"DEFAULT_OPTIONS",{color:0,alpha:1});var C_=`in vec2 vTextureCoord;
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
`,P_=`struct ColorReplaceUniforms {
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
}`,I_=Object.defineProperty,O_=(e,t,n)=>t in e?I_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mu=(e,t,n)=>(O_(e,typeof t!="symbol"?t+"":t,n),n);const z_=class xx extends ge{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Zt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...xx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:P_,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:C_,name:"color-replace-filter"});super({gpuProgram:o,glProgram:r,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),Mu(this,"uniforms"),Mu(this,"_originalColor"),Mu(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Un,this._targetColor=new Un,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,o,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=o,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,o,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=o,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Zt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Zt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Zt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Zt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Mu(z_,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var F_=`in vec2 vTextureCoord;
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
}`,E_=`struct ConvolutionUniforms {
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
}`,L_=Object.defineProperty,k_=(e,t,n)=>t in e?L_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mx=(e,t,n)=>(k_(e,typeof t!="symbol"?t+"":t,n),n);const D_=class bx extends ge{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Zt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...bx.DEFAULT_OPTIONS,...n};const o=n.width??200,r=n.height??200,i=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:E_,entryPoint:"mainFragment"}}),a=fe.from({vertex:be,fragment:F_,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/o,y:1/r},type:"vec2<f32>"}}}}),Mx(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=o,this.height=r}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,o)=>{this.uniforms.uMatrix[o]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Mx(D_,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var U_=`precision highp float;
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
`,X_=`struct CRTUniforms {
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
}`,G_=Object.defineProperty,N_=(e,t,n)=>t in e?G_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bu=(e,t,n)=>(N_(e,typeof t!="symbol"?t+"":t,n),n);const B_=class vx extends ge{constructor(t){t={...vx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:X_,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:U_,name:"crt-filter"});super({gpuProgram:n,glProgram:o,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),bu(this,"uniforms"),bu(this,"seed"),bu(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,o,r){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,o,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};bu(B_,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var $_=`precision highp float;
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
`,H_=`struct DotUniforms {
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
}`,W_=Object.defineProperty,q_=(e,t,n)=>t in e?W_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V_=(e,t,n)=>(q_(e,t+"",n),n);const Y_=class wx extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...wx.DEFAULT_OPTIONS,...n};const o={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:H_,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:$_,name:"dot-filter"});super({gpuProgram:r,glProgram:i,resources:{dotUniforms:o}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};V_(Y_,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var K_=`precision highp float;
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
}`,j_=`struct DropShadowUniforms {
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
}`,Q_=Object.defineProperty,Z_=(e,t,n)=>t in e?Q_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,os=(e,t,n)=>(Z_(e,typeof t!="symbol"?t+"":t,n),n);const J_=class Sx extends ge{constructor(t){t={...Sx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:j_,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:K_,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:o,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),os(this,"uniforms"),os(this,"shadowOnly",!1),os(this,"_color"),os(this,"_blurFilter"),os(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Un,this.color=t.color??0,this._blurFilter=new ix({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new ge({gpuProgram:ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:`
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
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,o,r){const i=Uo.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,o,r),this.shadowOnly||t.applyFilter(this._basePass,n,o,!1),Uo.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};os(J_,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var t8=`precision highp float;
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
`,e8=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,n8=Object.defineProperty,o8=(e,t,n)=>t in e?n8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_r=(e,t,n)=>(o8(e,typeof t!="symbol"?t+"":t,n),n);const r8=class _x extends ge{constructor(t){t={..._x.defaults,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:e8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:t8,name:"glitch-filter"}),r=document.createElement("canvas");r.width=4,r.height=t.sampleSize??512;const i=new Ut({source:new Id({resource:r})});super({gpuProgram:n,glProgram:o,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),_r(this,"uniforms"),_r(this,"average",!1),_r(this,"minSize",8),_r(this,"sampleSize",512),_r(this,"_canvas"),_r(this,"texture"),_r(this,"_slices",0),_r(this,"_sizes",new Float32Array(1)),_r(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=r,this.texture=i,Object.assign(this,t)}apply(t,n,o,r){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,o,r)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,o=this.sampleSize,r=Math.min(this.minSize/o,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),r);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),r);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let o=n;o>0;o--){const r=Math.random()*o>>0,i=t[o];t[o]=t[r],t[r]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,o=this._canvas.getContext("2d");o.clearRect(0,0,8,t);let r,i=0;for(let a=0;a<this._slices;a++){r=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=r>0?r:0,u=r<0?-r:0;o.fillStyle=`rgba(${l}, ${u}, 0, 1)`,o.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let o=0;o<n;o++)this._sizes[o]=t[o]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let o=0;o<n;o++)this._offsets[o]=t[o]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Ds}set direction(t){this.uniforms.uDirection=t*Ds}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};_r(r8,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var i8=`precision highp float;
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
`,a8=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,s8=Object.defineProperty,l8=(e,t,n)=>t in e?s8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wh=(e,t,n)=>(l8(e,typeof t!="symbol"?t+"":t,n),n);const u8=class Ax extends ge{constructor(t){t={...Ax.DEFAULT_OPTIONS,...t};const n=t.distance??10,o=t.quality??.1,r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:a8,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:i8.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/o/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:o,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),Wh(this,"uniforms"),Wh(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Un,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Wh(u8,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var f8=`precision highp float;
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
`,c8=`struct GodrayUniforms {
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

\${PERLIN}`,h8=`vec3 mod289(vec3 x)
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
`,d8=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,m8=Object.defineProperty,p8=(e,t,n)=>t in e?m8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rs=(e,t,n)=>(p8(e,typeof t!="symbol"?t+"":t,n),n);const y8=class Tx extends ge{constructor(t){t={...Tx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:c8.replace("${PERLIN}",d8),entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:f8.replace("${PERLIN}",h8),name:"god-ray-filter"});super({gpuProgram:n,glProgram:o,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),rs(this,"uniforms"),rs(this,"time",0),rs(this,"_angleLight",[0,0]),rs(this,"_angle",0),rs(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,o,r){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,o,r)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*Ds;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};rs(y8,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var g8=`in vec2 vTextureCoord;
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
`,x8=`struct HslUniforms {
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
}`,M8=Object.defineProperty,b8=(e,t,n)=>t in e?M8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qh=(e,t,n)=>(b8(e,typeof t!="symbol"?t+"":t,n),n);const v8=class Rx extends ge{constructor(t){t={...Rx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:x8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:g8,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:o,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),qh(this,"uniforms"),qh(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};qh(v8,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var w8=`precision highp float;
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
`,S8=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,_8=Object.defineProperty,A8=(e,t,n)=>t in e?_8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vh=(e,t,n)=>(A8(e,typeof t!="symbol"?t+"":t,n),n);const T8=class Cx extends ge{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof En){Zt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...Cx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:S8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:w8,name:"motion-blur-filter"});super({gpuProgram:o,glProgram:r,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Vh(this,"uniforms"),Vh(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Vh(T8,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var R8=`in vec2 vTextureCoord;
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
`,C8=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,P8=Object.defineProperty,I8=(e,t,n)=>t in e?P8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vu=(e,t,n)=>(I8(e,typeof t!="symbol"?t+"":t,n),n);const O8=class Px extends ge{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Zt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...Px.DEFAULT_OPTIONS,...n};const o=n.maxColors??n.replacements.length,r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:C8.replace(/\$\{MAX_COLORS\}/g,o.toFixed(0)),entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:R8.replace(/\$\{MAX_COLORS\}/g,o.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*o),type:"vec3<f32>",size:o},uTargetColors:{value:new Float32Array(3*o),type:"vec3<f32>",size:o},uTolerance:{value:n.tolerance,type:"f32"}}}}),vu(this,"uniforms"),vu(this,"_replacements",[]),vu(this,"_maxColors"),this._maxColors=o,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,o=this.uniforms.uTargetColors,r=t.length,i=new Un;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);n[r*3]=-1;let a,s,l;for(let u=0;u<r;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),o[u*3]=a,o[u*3+1]=s,o[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Zt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Zt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};vu(O8,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var z8=`precision highp float;
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
}`,F8=`struct OldFilmUniforms {
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
}`,E8=Object.defineProperty,L8=(e,t,n)=>t in e?E8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yh=(e,t,n)=>(L8(e,typeof t!="symbol"?t+"":t,n),n);const k8=class Ix extends ge{constructor(t){t={...Ix.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:F8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:z8,name:"old-film-filter"});super({gpuProgram:n,glProgram:o,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Yh(this,"uniforms"),Yh(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,o,r){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,o,r)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Yh(k8,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var D8=`precision highp float;
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
`,U8=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,X8=Object.defineProperty,G8=(e,t,n)=>t in e?X8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,da=(e,t,n)=>(G8(e,typeof t!="symbol"?t+"":t,n),n);const Jd=class ia extends ge{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Zt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...ia.DEFAULT_OPTIONS,...n};const o=n.quality??.1,r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:U8,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:D8.replace(/\$\{ANGLE_STEP\}/,ia.getAngleStep(o).toFixed(7)),name:"outline-filter"});super({gpuProgram:r,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),da(this,"uniforms"),da(this,"_thickness"),da(this,"_quality"),da(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=ia.getAngleStep(o),this._color=new Un,this.color=n.color??0,Object.assign(this,n)}apply(t,n,o,r){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,o,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*ia.MAX_SAMPLES,ia.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=ia.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};da(Jd,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});da(Jd,"MIN_SAMPLES",1);da(Jd,"MAX_SAMPLES",100);var N8=`precision highp float;
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
`,B8=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,$8=Object.defineProperty,H8=(e,t,n)=>t in e?$8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wu=(e,t,n)=>(H8(e,typeof t!="symbol"?t+"":t,n),n);const W8=class Ox extends ge{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Zt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Ox.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:B8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:N8,name:"radial-blur-filter"});super({gpuProgram:o,glProgram:r,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),wu(this,"uniforms"),wu(this,"_angle"),wu(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};wu(W8,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var q8=`precision highp float;
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
`,V8=`struct ReflectionUniforms {
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
}`,Y8=Object.defineProperty,K8=(e,t,n)=>t in e?Y8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kh=(e,t,n)=>(K8(e,typeof t!="symbol"?t+"":t,n),n);const j8=class zx extends ge{constructor(t){t={...zx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:V8,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:q8,name:"reflection-filter"});super({gpuProgram:n,glProgram:o,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Kh(this,"uniforms"),Kh(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,o,r){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,o,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Kh(j8,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Q8=`precision highp float;
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
`,Z8=`struct RgbSplitUniforms {
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
`,J8=Object.defineProperty,tA=(e,t,n)=>t in e?J8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fx=(e,t,n)=>(tA(e,typeof t!="symbol"?t+"":t,n),n);const eA=class Ex extends ge{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Zt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...Ex.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:Z8,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:Q8,name:"rgb-split-filter"});super({gpuProgram:o,glProgram:r,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),Fx(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Fx(eA,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var nA=`
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
`,oA=`
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
`,rA=Object.defineProperty,iA=(e,t,n)=>t in e?rA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jh=(e,t,n)=>(iA(e,typeof t!="symbol"?t+"":t,n),n);const aA=class Lx extends ge{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Zt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Lx.DEFAULT_OPTIONS,...n};const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:oA,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:nA,name:"shockwave-filter"});super({gpuProgram:o,glProgram:r,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),jh(this,"uniforms"),jh(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,o,r){this.uniforms.uTime=this.time,t.applyFilter(this,n,o,r)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};jh(aA,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var sA=`precision highp float;
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
`,lA=`struct SimpleLightmapUniforms {
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
}`,uA=Object.defineProperty,fA=(e,t,n)=>t in e?uA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Su=(e,t,n)=>(fA(e,typeof t!="symbol"?t+"":t,n),n);const cA=class kx extends ge{constructor(...t){let n=t[0]??{};if(n instanceof Ut&&(Zt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...kx.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:lA,entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:sA,name:"simple-lightmap-filter"});super({gpuProgram:o,glProgram:r,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),Su(this,"uniforms"),Su(this,"_color"),Su(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Un,this.color=n.color??0,Object.assign(this,n)}apply(t,n,o,r){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,o,r)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,o,r]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=o,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Su(cA,"DEFAULT_OPTIONS",{lightMap:Ut.WHITE,color:0,alpha:1});var hA=`in vec2 vTextureCoord;
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
`,dA=`struct TiltShiftUniforms {
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
}`,mA=Object.defineProperty,pA=(e,t,n)=>t in e?mA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qh=(e,t,n)=>(pA(e,typeof t!="symbol"?t+"":t,n),n);const yA=class Dx extends ge{constructor(t){const{width:n,height:o}=s4.defaultOptions;t={...Dx.DEFAULT_OPTIONS,start:{x:0,y:o/2},end:{x:n,y:o/2},...t};const r=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:dA,entryPoint:"mainFragment"}}),i=fe.from({vertex:be,fragment:hA,name:"tilt-shift-axis-filter"});super({gpuProgram:r,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,o]),type:"vec2<f32>"}}}}),Qh(this,"uniforms"),Qh(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,o=t.x-n.x,r=t.y-n.y,i=Math.sqrt(o*o+r*r),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-r/i:o/i,this.uniforms.uDelta[1]=a?o/i:r/i}};Qh(yA,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var gA=`precision highp float;
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
`,xA=`struct TwistUniforms {
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
`,MA=Object.defineProperty,bA=(e,t,n)=>t in e?MA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ux=(e,t,n)=>(bA(e,typeof t!="symbol"?t+"":t,n),n);const vA=class Xx extends ge{constructor(t){t={...Xx.DEFAULT_OPTIONS,...t};const n=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:xA,entryPoint:"mainFragment"}}),o=fe.from({vertex:be,fragment:gA,name:"twist-filter"});super({gpuProgram:n,glProgram:o,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Ux(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Ux(vA,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var wA=`precision highp float;
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
`,SA=`struct ZoomBlurUniforms {
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
}`,_A=Object.defineProperty,AA=(e,t,n)=>t in e?_A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gx=(e,t,n)=>(AA(e,typeof t!="symbol"?t+"":t,n),n);const TA=class Nx extends ge{constructor(t){t={...Nx.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,o=ae.from({vertex:{source:ve,entryPoint:"mainVertex"},fragment:{source:SA.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),r=fe.from({vertex:be,fragment:wA.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:o,glProgram:r,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Gx(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Gx(TA,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let To,Bx,Cs,Vl,u0;const W0=[];let _m=!0,Zh=0;function $x(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),o=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let r=0;r<=10;r++){const i=r/10,a=(1-i*i)*(1-i*i);o.addColorStop(i,`rgba(255,255,255,${a.toFixed(3)})`)}return n.fillStyle=o,n.fillRect(0,0,e,e),t}function RA(e,t){To&&To.renderer.resize(e,t)}async function CA(e,t){Bx=t,To=new Nl,await To.init({...e,background:"#000000",backgroundAlpha:1});{const n=To.renderer;n.render=yp("gl:lightmap",n.render.bind(n))}return u0=Ut.from($x(256)),u0.source.scaleMode="linear",Vl=new pn(Ut.WHITE),To.stage.addChild(Vl),Cs=new ze,To.stage.addChild(Cs),zA(),To.canvas}function PA(){const e=new pn(u0);e.blendMode="add",e.alpha=.01,Cs.addChild(e),To.renderer.render(To.stage),e.destroy();try{To.renderer.texture.initSource(u0.source)}catch{}Wx()}function Am(e){e!==_m&&(_m=e,To.canvas.style.display=e?"":"none",e?To.ticker.start():To.ticker.stop())}const ma=4;let hs,Yl,Jh,td;const q0=[],Aa=new Mf({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),IA=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,OA=`in vec2 vUV;
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
}`;let Hx;function zA(){td=Ut.from($x(64)),td.source.scaleMode="linear",hs=zd.create({width:64,height:64,resolution:1}),Jh=new ze,Yl=new ze,Jh.addChild(Yl),Hx=fe.from({vertex:IA,fragment:OA,name:"piso-luna"})}function FA(e,t,n){const o=e.width,r=e.height,i=new xy({positions:new Float32Array([0,0,o,0,o,r,0,r]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),a=new bf({glProgram:Hx,resources:{uTexture:e.source,uMask:hs.source,moonU:Aa}}),s=new n4({geometry:i,shader:a,texture:e});return s.x=t,s.y=n,s}function Wx(){const e=Math.ceil(w.W/ma),t=Math.ceil(w.H/ma);(hs.source.width!==e||hs.source.height!==t)&&hs.resize(e,t,1),Aa.uniforms.uScreen[0]=e*ma,Aa.uniforms.uScreen[1]=t*ma,Bx.renderer.render({container:Jh,target:hs,clear:!0,clearColor:[0,0,0,0]})}const Tm=[.95,.95,.94],EA=[.5,.62,.86],LA=[1,.74,.55],Rm=[62,108,168],kA=[210,120,60],_u=[1,1,1];function DA(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let a=Tm[i]+(EA[i]-Tm[i])*e;a+=(LA[i]-a)*t*.62,_u[i]=a,n[i]=Rm[i]+(kA[i]-Rm[i])*Math.min(1,t*1.4)}const o=.299*n[0]+.587*n[1]+.114*n[2],r=Aa.uniforms.uMoon;r[0]=n[0]/o,r[1]=n[1]/o,r[2]=n[2]/o,r[3]=.42*e*(1-t*.6)+.16*t}const UA=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),ed=[];let ds=0,nd=0,od=0,qx=0,Vx=0;const XA=110;function So(e,t,n,o,r,i){if(i<.02||ds>=XA)return;const a=(e-t)*N.HW+N.OX,s=(e+t)*N.HH,l=o*N.HW*1.5;if(a<nd-l||a>qx+l||s<od-l||s>Vx+l)return;let u=ed[ds];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},ed[ds]=u),u.x=e,u.y=t,u.z=n,u.r=o,u.col=r,u.a=Math.min(1,i),ds++}const Cm=(e,t,n,o,r)=>So(e,t,0,n,o,r);let ja=null;function GA(){if(ja)return ja;ja=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?ja.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&ja.push({x:e.x,y:e.y,kind:"crystal"});return ja}const Pm={blue:5949695,red:16742470},NA={blue:9101567,red:16752752},BA={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function $A(e){const t=w.game,n=w.T,o=t.player,r=.55+.45*e;for(const i of GA())if(i.kind==="brazier"){const a=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);So(i.x,i.y,.5,3.3*(.96+.04*a),16749632,.8*a*r)}else So(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*r);if(t.fountain)for(const i of["blue","red"]){const a=t.fountain[i];a&&So(a.x,a.y,.3,3.6,NA[i],(.62+.06*Math.sin(n*1.3))*r)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){So(i.x,i.y,1.75,3.4,Pm[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*r);continue}if(i.kind==="nexus"){So(i.x,i.y,.9,4.4,Pm[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*r);continue}if(Ge(i))continue;const a=i.status;o&&i.kind==="hero"&&i.team===o.team&&e>.02&&So(i.x,i.y,.4,i===o?2.5:1.7,16770756,(i===o?.42:.24)*e),a&&a.burn&&So(i.x,i.y,.4,1.3,16747560,.5*r);const s=a&&a.transform;s&&So(i.x,i.y,.6,2.8,s.kind==="fire"?16742954:16765514,.7*r),(i.aura||i.auraFx)&&So(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*r)}for(const i of t.runes||[]){const a=window.SIM.RUNES[i.kind];So(i.x,i.y,.5,1.7,kd(a.col),.6*r)}if(o&&t.wards)for(const i of t.wards)i.team!==o.team&&!(t.wardSeenBy&&t.wardSeenBy(i,o.team))||Sf(i,n)&&So(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*r);for(const i of t.zones)i.once&&So(i.x,i.y,0,i.r*1.1,13143295,.45*r);for(const i of t.projs){const a=BA[i.fx];a!==void 0&&So(i.x,i.y,i.z||.45,i.skill?2:1.2,a,(i.skill?.75:.5)*r)}Wb(Cm,40,r),qb(Cm,14,r)}const Yx=new URLSearchParams(location.search),HA=Yx.get("luna")==="0",WA=Yx.get("mapaluz")==="0";let Sl=!1;function qA(e,t){const n=w.game;if(!n||!n.player||WA){Am(!1),Zh=0,Sl&&(Sl=!1,Aa.uniforms.uMoon[3]=0);return}Am(!0);const o=ap(n.t),r=w.cam;Zh=o.night,DA(o.night,o.warm),HA&&(Aa.uniforms.uMoon[3]=0),Vl.tint=UA(_u[0],_u[1],_u[2]),Vl.width=w.W,Vl.height=w.H,Cs.scale.set(r.z),Cs.position.set(e,t),nd=r.x-w.W/2/r.z,od=r.y-w.H/2/r.z,qx=nd+w.W/r.z,Vx=od+w.H/r.z+120,ds=0,$A(o.night);const{HW:i,HH:a,OX:s,ZK:l}=N;Sl=Aa.uniforms.uMoon[3]>.005;let u=0;for(;u<ds;u++){const f=ed[u];let c=W0[u];c||(c=new pn(u0),c.anchor.set(.5),c.blendMode="add",Cs.addChild(c),W0[u]=c);const h=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+s,m=(f.x+f.y)*a-f.z*l*.35-10;if(c.visible=!0,c.x=d,c.y=m,c.width=h,c.height=h*.62,c.tint=f.col,c.alpha=f.a,Sl){let p=q0[u];p||(p=new pn(td),p.anchor.set(.5),p.blendMode="add",Yl.addChild(p),q0[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=h,p.height=h*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<W0.length;f++)W0[f].visible=!1;if(Sl){for(let f=u;f<q0.length;f++)q0[f].visible=!1;Yl.scale.set(r.z/ma),Yl.position.set(e/ma,t/ma),Wx()}}let Do;const se={};let Ps,Is,Jo,Os,Kl,rd=0,Xc,Au=null,Tu=null,hf,id=[],df=[];const f0=[],el=new Map,Pi=[],V0=[];function t1(){return Do.canvas}function VA(e,t,n,o,r){const i=[];for(const a of f0){if(!a.spr.visible||a.o.x+a.o.y<=e)continue;const s=Jt[a.o.sprite];if(!s)continue;const[l,u]=P(a.o.x,a.o.y),f=l-s.ax,c=u-s.ay;if(f>o||f+s.fw<t||c>r||c+s.fh<n)continue;const[h,d]=Ed(s,null,0,a.animated?Math.floor(w.T*9+a.o.x):0);i.push({name:a.o.sprite,row:h,col:d,x:f,y:c})}return i}const ad=[];async function YA(e){const t=u4();let n=0;for(const r of t){try{Do.renderer.texture.initSource(r.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const o=new pn(hf);o.anchor.set(.5),o.blendMode="add",o.alpha=.01,o.position.set(w.W/2,w.H/2),se.lights.addChild(o);for(let r=0;r<3;r++)Pr.renderer.render(Pr.stage),Do.renderer.render(Do.stage),cr.renderer.render(cr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));o.destroy();for(const r of ad)try{cr.renderer.texture.initSource(r)}catch{}try{Pr.renderer.texture.initSource(hf.source)}catch{}PA()}let Gc;function KA(){try{const e=Do.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let cr,Pr;const Y0={width:window.innerWidth,height:window.innerHeight,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1,textureGCActive:!1};function _i(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function jA(e){w.frontProps=VA,cr=new Nl,Do=new Nl,Pr=new Nl,await cr.init({...Y0,background:"#100d18"}),await Do.init({...Y0,backgroundAlpha:0}),await Pr.init({...Y0,backgroundAlpha:0}),Xc=await CA(Y0,cr);for(const[n,o]of[["gl:ground",cr],["gl:units",Do],["gl:lights",Pr]]){const r=o.renderer;r.render=yp(n,r.render.bind(r))}w.gpuName=KA(),w.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(w.gpuName),e.style.position="fixed",Ps=document.createElement("canvas"),Is=document.createElement("canvas"),Jo=document.createElement("canvas"),Os=document.createElement("canvas"),_i(cr.canvas,1),_i(Ps,3),_i(Do.canvas,4),_i(Xc,5,"multiply"),_i(Pr.canvas,6,"plus-lighter"),_i(Jo,7),_i(Is,8),_i(Os,9,"plus-lighter"),Jo.style.imageRendering="auto",Do.canvas.style.pointerEvents="auto",e.append(cr.canvas,Ps,Do.canvas,Xc,Pr.canvas,Jo,Is,Os);for(const n of["ground"])se[n]=new ze,cr.stage.addChild(se[n]);for(const n of["world","top"])se[n]=new ze,Do.stage.addChild(se[n]);se.lights=new ze,Pr.stage.addChild(se.lights),se.groundCam=new ze,se.ground.addChild(se.groundCam),se.worldCam=new ze,se.world.addChild(se.worldCam),se.shadows=new ze,se.entities=new ze,se.entities.sortableChildren=!0,se.worldCam.addChild(se.shadows,se.entities),se.lightsCam=new ze,se.lights.addChild(se.lightsCam),Gc=new U6({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Gc.resolution=.5,se.lights.filters=[Gc],hf=Ut.from(QA(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),Kl=new pn(Ut.WHITE),se.top.addChild(Kl),Im();let t=0;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(()=>{Math.abs(window.innerWidth-w.W)<=2&&Math.abs(window.innerHeight-w.H)<=2||(Cn("ventana",`capas al nuevo tamaño ${window.innerWidth}x${window.innerHeight}`),Im())},180)})}function QA(e,t){const n=document.createElement("canvas");n.width=n.height=e;const o=n.getContext("2d"),r=o.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)r.addColorStop(i,a);return o.fillStyle=r,o.fillRect(0,0,e,e),n}let K0=null;function Im(){w.W=window.innerWidth,w.H=window.innerHeight;for(const t of[cr,Do,Pr])t.renderer.resize(w.W,w.H);RA(w.W,w.H);const e=t=>Math.ceil(t*ud);if(Ps.width=Os.width=e(w.W),Ps.height=Os.height=e(w.H),Is.width=w.W,Is.height=w.H,!K0){const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),o=n.createRadialGradient(128,72,50,128,72,150);o.addColorStop(0,"rgba(10,6,24,0)"),o.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=o,n.fillRect(0,0,256,144),K0=Ut.from(t),K0.source.scaleMode="linear"}Kl.texture=K0,Kl.width=w.W,Kl.height=w.H}function ZA(){const e=window.MAP;for(const r of h4())se.groundCam.addChild(FA(r.tex,r.x,r.y)),ad.push(r.tex.source);const t=JA(),n=No.ground.naturalWidth,o=No.ground.naturalHeight;for(const[r,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=No[r];if(!a||!a.naturalWidth)continue;const s=Ut.from(a);s.source.scaleMode="linear",ad.push(s.source);const l=new pn(s);l.width=n,l.height=o;const u=new r4({texture:t,width:n,height:o});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,se.groundCam.addChild(l,u),i==="flow"?Au=u:Tu=u}id=(e.obstacles||[]).map(r=>({x:r.x,y:r.y,sprite:r.s,tree:r.s!=="prop_boulder"})),df=(e.deco||[]).map(r=>({x:r.x,y:r.y,sprite:r.s}));for(const r of id)sd(r,!0);for(const r of df)sd(r,!1)}function sd(e,t){const n=Jt[e.sprite];if(!n||!wf(e.sprite))return;const o=Ri(e.sprite,null,0,0);if(!o)return;const r=new pn(o);r.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=P(e.x,e.y);r.x=i,r.y=a,r.zIndex=(e.x+e.y)*100,se.entities.addChild(r),f0.push({o:e,spr:r,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function JA(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let o=0;o<70;o++){const r=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(r+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(r+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=Ut.from(e);return n.source.scaleMode="nearest",n}function tT(e){const t=Jt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",lu(e.sprite,"idle",e.animT||0)]:["walk",0]}const eT={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},nT={fragment:13656319,frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194,saw:14711338,castor_tar:6961818},Om={};function oT(e){let t=Om[e];if(!t){t=new e4;const[n,o,r]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,o,0,0,0,0,r,0,0,0,1,0],Om[e]=t}return t}function rT(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===w.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===w.hoverUnit?e.team!==t.team?"red":"white":""}function iT(e){let t=el.get(e.id);if(!t){const n=()=>{const o=new pn(Ut.EMPTY);return se.entities.addChild(o),o};t={spr:n(),glow:n(),shadow:new pn(Ut.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,se.shadows.addChild(t.shadow),el.set(e.id,t)}return t}function Qi(e,t,n,o,r,i,a){if(!t){e.visible=!1;return}const s=Jt[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(o),e.y=Math.round(r),e.zIndex=a}function aT(){const e=w.game,t=e.player,n=w.T,o=++sT;for(const r of e.units){if(r.dead&&r.kind!=="tower"&&r.kind!=="nexus")continue;const i=iT(r);i.seen=o;const a=r.kind==="tower"||r.kind==="nexus";if(r.dead){Qi(i.spr,Ri("prop_boulder",null,0,0),"prop_boulder",...P(r.x,r.y),1,(r.x+r.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(Ge(r)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(r.kind==="hero"&&r.sprite==="slime"&&!(r.status&&r.status.hex)){const E=r._spriteBak||(w.mode==="guest"?r.heroKey:null);E&&(r.sprite=E)}if(r.sprite&&(!Jt[r.sprite]||!wf(r.sprite))){const E=eT[r.sprite];r._fbScale=E?E[1]:1,r._fbTint=E?E[2]:16777215,r.sprite=E&&Jt[E[0]]?E[0]:r.pet||r.kind==="monster"?"slime":"rana"}const[s,l]=P(r.x,r.y);let u=l;if(r.dash&&r.dash.leap){const E=Math.min(1,r.dash.t/r.dash.dur);u-=Math.sin(E*Math.PI)*50}r.leaping&&(u-=40);let f=1;r.invisible&&r.invisible()&&(f=.4),t&&r.team!==t.team&&!a&&(f*=Math.min(1,r._va===void 0?1:r._va)),t&&r.team===t.team&&r._bush>=0&&(f*=.6),r.status&&r.status.cyclone?(r._cyA===void 0&&(r._cyA=n),r._cyB=void 0):r._cyA!==void 0&&(r._cyA=void 0,r._cyB=n,r._cyH0=r._cyH||0);let c=0;if(r._cyA!==void 0){const E=Math.min(1,(n-r._cyA)/.4);c=58*E*(2-E)+Math.sin(n*5+r.id)*5*E}else if(r._cyB!==void 0){const E=(n-r._cyB)/.18;E<1?c=r._cyH0*(1-E*E):r._cyB=void 0}r._cyH=c,u-=Math.round(c);const[h,d]=tT(r);let m=a||Jt[r.sprite]&&Jt[r.sprite].dirs===1?0:r.dir;r._cyA!==void 0&&!a&&(m=(m+Math.floor(n*16))%16);let p=(r.scale||1)*(r._fbScale||1);r.monster==="serpent"&&(p=1.45);const g=r.status&&r.status.transform,x=g&&g.mount&&Jt[g.mount]?g:null;if(g&&!x){r._tfT=(r._tfT||0)+1/60;const E=Math.min(1,r._tfT*4),U=1+Math.sin(Math.min(1,r._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*E*U}else r._tfT=0;const b=r.status||{};let M=s,v=null;if(x){const E=Jt[x.mount],U=x.mountScale||2,G=r._stompA!==void 0&&n<r._stompA&&E.anims&&E.anims.stomp?"stomp":h,Y=E.anims&&(E.anims[G]||E.anims.idle),L=G==="stomp"?Math.min(Y.n-1,Math.floor((1-(r._stompA-n)/.6)*Y.n)):Y?d%Y.n:0;v=Ri(x.mount,G,m,L),i.mount||(i.mount=new pn(Ut.EMPTY),se.entities.addChild(i.mount)),Qi(i.mount,v,x.mount,M,u,U,(r.x+r.y)*100+.9),i.mount.alpha=f,i.mount.tint=16777215;const k=E.dirs||16,D=k>=16?m:Math.round(m/2)%k,$=E.saddleFrames&&E.saddleFrames[G]&&E.saddleFrames[G][D],W=$&&$[L]||E.saddleXY&&E.saddleXY[D]||[0,-(E.saddle!=null?E.saddle:E.ay*.62)];M+=Math.round(W[0]*U),u+=Math.round(W[1]*U)}else i.mount&&(i.mount.visible=!1);b.stun&&["quake","roar","dust","firedash","bash"].includes(b.stun.fx)&&(M+=Math.round(Math.sin(n*60+r.id)*1.5));const S=(r.x+r.y)*100+1,_=Ri(r.sprite,x?"idle":h,m,a||x?lu(r.sprite,"idle",n):d);Qi(i.spr,_,r.sprite,M,u,p,S),i.spr.alpha=f;const A=_&&!a?rT(r,t):"";if(A){if(!i.ol){i.ol=new ze;for(let U=0;U<4;U++)i.ol.addChild(new pn(Ut.EMPTY));se.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=S-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==A&&(i.ol.filters=[oT(A)],i.olCol=A);const E=1.3;[[E,0],[-E,0],[0,E],[0,-E]].forEach(([U,G],Y)=>Qi(i.ol.children[Y],_,r.sprite,M+U,u+G,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=r.illusion?10148095:r._fbTint||16777215,r.illusion&&(i.spr.alpha=f*.8);let R=0,C=0;if(r.hitFlash>.06?(R=16777215,C=.75):b.slow?(R=nT[b.slow.fx]||8050943,C=.35):b.root?(R=3836458,C=.3):b.stun&&b.stun.fx==="arcane"?(R=11563263,C=.35):b.burn?(R=16742954,C=.25+.15*Math.sin(n*14+r.id)):g&&!x?(R=g.kind==="fire"?16747066:16765514,C=.25+.1*Math.sin(n*6)):b.hex?(R=11565823,C=.2+.08*Math.sin(n*5+r.id)):b.berserk&&(R=16722458,C=.12+.08*Math.sin(n*9+r.id)),C>0&&_?(Qi(i.glow,_,r.sprite,M,u,p,S+.5),i.glow.tint=R,i.glow.alpha=C*f):i.glow.visible=!1,w.shadowsOn&&!a&&_&&!(r.dash&&r.dash.leap)&&!r.leaping&&!(Jt[r.sprite]&&Jt[r.sprite].fly)){const E=x&&v?x.mount:r.sprite,U=Jt[E],G=x&&v?x.mountScale||2:p;i.shadow.texture=x&&v?v:_,i.shadow.visible=!0,i.shadow.anchor.set(U.ax/U.fw,U.ay/U.fh),i.shadow.setFromMatrix(new tn(G,0,-.8*G,-.38*G,Math.round(s),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const z=Jt[r.sprite]&&Jt[r.sprite].gear;let O=0;if(z&&(r.kind==="hero"||r.illusion)){const E=r.illusion?r.owner&&w.mode!=="guest"?e.gearCode(r.owner):0:w.mode==="guest"?r.gear||0:e.gearCode(r),U={w:E&3,h:E>>2&3,a:E>>4&3,b:E>>6&3};for(const G of["a","b","h","w"]){const Y=U[G];if((Y>0||G==="w")&&z[G]&&z[G].includes(Y)){const L=r.sprite+"__"+G+Y;if(!i.gear[O]){const k=new pn(Ut.EMPTY);se.entities.addChild(k),i.gear[O]=k}Qi(i.gear[O],Ri(L,h,m,d),L,M,u,p,S+.2+O*.05),i.gear[O].alpha=f,O++}}}if(r.kind==="courier"){const E=r.owner||(r.ownerId?e.units.find(G=>G.id===r.ownerId):null),U=E&&(E.heroKey||E.sprite);if(U&&Jt[U]){if(!i.gear[O]){const L=new pn(Ut.EMPTY);se.entities.addChild(L),i.gear[O]=L}const G=Jt[r.sprite],Y=Math.sin(n*3+r.id)*1.5;Qi(i.gear[O],Ri(U,"idle",2,lu(U,"idle",n)),U,M,u-(G?G.ay*p:40)+2+Y,.3,S+.6),i.gear[O].alpha=f,O++}}for(;O<i.gear.length;O++)i.gear[O].visible=!1}for(const[r,i]of el)if(i.seen!==o){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();i.ol&&i.ol.destroy({children:!0}),i.mount&&i.mount.destroy(),el.delete(r)}}let sT=0;const ms=new Map,zm={},nl=[];let lT=0;function uT(e,t){const n=e+(t?"o":"c");let o=zm[n];return o||(o=Ut.from(Ry(e,t)),o.source.scaleMode="nearest",zm[n]=o),o}function fT(){const e=w.game,t=e&&e.player,n=++lT;if(nl.length=0,t&&e.wards)for(const o of e.wards){const r=o.team===t.team;if(!r&&!(e.wardSeenBy&&e.wardSeenBy(o,t.team)))continue;nl.push(o);let i=ms.get(o.id);if(!i){const u=new pn(Ut.EMPTY);u.anchor.set(.5,1-1/36),se.entities.addChild(u),i={spr:u,seen:0},ms.set(o.id,i)}i.seen=n;const[a,s]=P(o.x,o.y),l=o.until-e.t;i.spr.texture=uT(o.kind,Sf(o,w.T)),i.spr.x=Math.round(a),i.spr.y=Math.round(s),i.spr.zIndex=(o.x+o.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(w.T*(l<6?9:4))):1,i.spr.tint=r?16777215:16763072,i.spr.visible=!0}for(const[o,r]of ms)r.seen!==n&&(r.spr.destroy(),ms.delete(o))}function cT(e,t){if(!w.tpAim||e.dead)return;const o=w.tpHover||(w.mouse.inWorld?{x:w.mouse.wx,y:w.mouse.wy}:null),r=w.game,i=w.T;for(const g of r.units)!g.dead&&g.team===e.team&&(g.kind==="tower"||g.kind==="nexus")&&ft(g.x,g.y,1.1,"#7fe8ff55",null,2,[5,5]);if(!o)return;const a=lp(e,o.x,o.y);if(!a)return;const s=Math.hypot(a.x-e.x,a.y-e.y)>=3,l=s?"#7fe8ff":"#ff6a5a",u=i*1.6%1;ft(a.x,a.y,1.4+u*.6,l+Math.round((1-u)*200).toString(16).padStart(2,"0"),null,3),ft(a.x,a.y,1.25,l,s?"rgba(127,232,255,0.12)":"rgba(255,106,90,0.12)",3);const[f,c]=P(e.x,e.y),[h,d]=P(a.x,a.y);t.save(),t.globalAlpha=.55,t.strokeStyle=l,t.lineWidth=2,t.setLineDash([8,7]),t.lineDashOffset=-i*40,t.beginPath(),t.moveTo(f,c),t.lineTo(h,d),t.stroke(),t.setLineDash([]);const m=t.createLinearGradient(h,d-170,h,d);m.addColorStop(0,"rgba(127,232,255,0)"),m.addColorStop(1,s?"rgba(127,232,255,0.35)":"rgba(255,106,90,0.3)"),t.globalAlpha=.8+.2*Math.sin(i*6),t.fillStyle=m,t.fillRect(h-18,d-170,36,170),t.globalAlpha=1,t.font="bold 13px sans-serif",t.textAlign="center";const p=s?J.t("Teletransporte"):J.t("Muy cerca");t.lineWidth=3,t.strokeStyle="#000",t.strokeText(p,h,d-178),t.fillStyle=l,t.fillText(p,h,d-178),t.restore()}function hT(e,t,n){const i=w.T,a=(f,c,h=0)=>P(t.x+f,t.y+c,h),s=(f,c)=>{e.beginPath(),f.forEach(([h,d],m)=>{const[p,g]=a(h,d);m?e.lineTo(p,g):e.moveTo(p,g)}),e.closePath(),e.fillStyle=c,e.fill()};s([[-1.45,-1.2],[1.45,-1.2],[1.45,1.2],[-1.45,1.2]],"rgba(92,62,34,0.85)"),s([[-1.45*.6,-1.2*.2],[1.45*.1,-1.2*.5],[1.45*.4,1.2*.1],[-1.45*.2,1.2*.5]],"rgba(60,40,24,0.75)"),e.fillStyle="#d8b860";for(let f=0;f<26;f++){const c=f*37%100/100*2-1,h=f*61%100/100*2-1,[d,m]=a(c*1.45*.85,h*1.2*.85);e.fillRect(Math.round(d)-2,Math.round(m),5,1)}{const[f,c]=a(-1,-.7999999999999999);e.fillStyle="#5a3a1c",e.fillRect(Math.round(f)-15,Math.round(c)-22,30,20),e.fillStyle="#7a5028";for(let h=0;h<5;h++)e.fillRect(Math.round(f)-14+h*6,Math.round(c)-21,4,18);e.fillStyle="#2a1a0c",e.fillRect(Math.round(f)-5,Math.round(c)-14,10,12),e.fillStyle="#9a3a22",e.beginPath(),e.moveTo(f-20,c-21),e.lineTo(f,c-36),e.lineTo(f+20,c-21),e.closePath(),e.fill(),e.fillStyle="#c85a32";for(let h=0;h<4;h++)e.fillRect(Math.round(f)-16+h*8,Math.round(c)-25+Math.abs(1.5-h)*2,7,2);e.fillStyle=n==="blue"?"#5ab0ff":"#ff7050",e.fillRect(Math.round(f)-3,Math.round(c)-37,6,3)}{const[f,c]=a(.95,-.85);e.fillStyle="#4a2e14",e.fillRect(Math.round(f)-13,Math.round(c)-6,26,8),e.fillStyle="#5ab0d8",e.fillRect(Math.round(f)-11,Math.round(c)-5,22,3),e.fillStyle="#d8f4ff",e.fillRect(Math.round(f)-6+Math.round(Math.sin(i*2)*4),Math.round(c)-5,3,1)}const l=n==="blue"?1:-1;[[-1.45,-1.2,1.45,-1.2],[1.45,-1.2,1.45,1.2],[1.45,1.2,-1.45,1.2],[-1.45,1.2,-1.45,-1.2]].forEach(([f,c,h,d],m)=>{const p=Math.max(2,Math.round(Math.hypot(h-f,d-c)/.42));for(let g=0;g<=p;g++){const x=g/p,b=f+(h-f)*x,M=c+(d-c)*x;if((l>0?m===1:m===3)&&x>.35&&x<.65)continue;const[S,_]=a(b,M),[A,R]=a(b,M,.42);if(e.fillStyle="#3a2410",e.fillRect(Math.round(S)-2,Math.round(R),5,Math.round(_-R)+1),e.fillStyle="#8a5a2a",e.fillRect(Math.round(S)-1,Math.round(R),3,Math.round(_-R)),e.fillStyle="#b07a40",e.fillRect(Math.round(S)-1,Math.round(R)-1,3,2),g<p){const C=(g+1)/p,z=f+(h-f)*C,O=c+(d-c)*C;if((l>0?m===1:m===3)&&C>.35&&C<.65)continue;for(const E of[.18,.34]){const[U,G]=a(b,M,E),[Y,L]=a(z,O,E);e.strokeStyle="#6a4220",e.lineWidth=3,e.beginPath(),e.moveTo(U,G),e.lineTo(Y,L),e.stroke(),e.strokeStyle="#a8743c",e.lineWidth=1,e.beginPath(),e.moveTo(U,G-1),e.lineTo(Y,L-1),e.stroke()}}}})}function dT(e,t){const n=w.wardAim;if(!n||e.dead)return;const o=window.SIM,r=n.id==="centinela",i=w.mouse.wx,a=w.mouse.wy,s=Math.hypot(i-e.x,a-e.y)>o.WARD_RANGE;if(ft(e.x,e.y,o.WARD_RANGE,s?"#ffffff70":"#ffffffb0",null,2,[8,6]),s){const[l,u]=P(e.x,e.y),[f,c]=P(i,a);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-w.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,c),t.stroke(),t.restore()}ft(i,a,r?o.SENTRY_R:o.WARD_VISION,r?"#60c0ffa0":"#ffd04aa0",r?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),B4(t,r?"sen":"obs",i,a)}function mT(e){if(!e.sprite||!wf(e.sprite))return;const t=Ri(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new pn(t),o=Jt[e.sprite];n.anchor.set(o.ax/o.fw,o.ay/o.fh);const[r,i]=P(e.x,e.y);n.x=r,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,se.entities.addChild(n),Pi.push({spr:n,t:0,vy:20})}function pT(e){const t=w.cam,n=w.T,o=(Math.random()-.5)*t.shake,r=(Math.random()-.5)*t.shake,i=Math.round(w.W/2-t.x*t.z+o),a=Math.round(w.H/2-t.y*t.z+r);for(const m of["groundCam","worldCam","lightsCam"])se[m].scale.set(t.z),se[m].position.set(i,a);const s=t.x-w.W/2/t.z-2,l=t.y-w.H/2/t.z-2,u=w.W/t.z+4,f=w.H/t.z+4;Au&&(Au.tilePosition.set(-n*14,-n*3),Au.alpha=.45+.12*Math.sin(n*1.3)),Tu&&(Tu.tilePosition.set(Math.sin(n*.3)*6,0),Tu.alpha=.25+.15*Math.sin(n*.9));const c=w.game&&w.game.player,[h,d]=c?P(c.x,c.y):[0,0];for(const m of f0){const[p,g]=P(m.o.x,m.o.y),x=p>s-200&&p<s+u+200&&g>l-100&&g<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=Ri(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Jt[m.o.sprite];if(m.spr.alpha=c&&m.o.x+m.o.y>c.x+c.y&&b&&Math.abs(h-p)<b.fw*.42&&d<g&&d>g-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,v=(M.x*12.9898+M.y*78.233)%6.28,S=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+w.wind);m.spr.skew.x=-(Math.sin(n*S*1.6+v)*_+Math.sin(n*S*3.1+v*2)*_*.3+w.wind*.02)}}}}w.game&&(rn("render/amb"),tv(e,s,l,u,f,id),an("render/amb"),rn("render/units"),aT(),fT(),an("render/units"));for(const m of Pi)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=Pi.length-1;m>=0;m--)Pi[m].t>.8&&(Pi[m].spr.destroy(),Pi.splice(m,1));rn("render/overlays"),xT(),an("render/overlays"),rn("render/lighting"),qA(i,a),an("render/lighting"),rd=Zh,rn("render/lights"),wT(),an("render/lights"),w.game&&w.game.player?(rn("render/fog"),_T(),an("render/fog")):ld&&(ld=!1,Jo.getContext("2d").clearRect(0,0,Jo.width,Jo.height))}const yT={cabra_behemoth:"Behemoth",castor_castle:"Citadel",castor_spider:"Clockwork Spider"};let ld=!1;const ud=1;function Kx(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),o=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(o&&H[o+"_"+n.slice(-1)])}function Nc(e,t=1){const n=e.getContext("2d"),o=w.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const r=(Math.random()-.5)*o.shake*0;return n.setTransform(o.z*t,0,0,o.z*t,Math.round(w.W/2-o.x*o.z+r)*t,Math.round(w.H/2-o.y*o.z+0)*t),n.imageSmoothingEnabled=!1,n}const gT={fragment:"#7ae8ff",frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8",saw:"#ffa040",castor_tar:"#8a5ac0"};function xT(){const e=w.game,t=w.T,n=Nc(Os,ud);let o=Nc(Ps,ud);if(i2(o,n),e&&e.player){const r=e.player,i=window.SIM.HEROES;ev();for(const l of e.zones){if(l.fx==="mon_spores"){q4(l);continue}if(!Kx(l))if(l.once){const u=1-l.t/l.dur;ft(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),ft(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(ft(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&T({type:"puff",x:l.x+y(-1,1)*l.r*.8,y:l.y+y(-1,1)*l.r*.8,r:y(12,22),dur:y(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;T({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}}if(e.corralOf)for(const l of["blue","red"])hT(o,e.corralOf(l),l);{const l=e.fountain&&e.fountain[r.team];if(l&&!r.dead){const u=Math.hypot(r.x-l.x,r.y-l.y);if(u<8){const f=Math.min(1,(8-u)/2.5);o.globalAlpha=f,ft(l.x,l.y,5,"#7dffb0","rgba(110,255,170,0.07)",2.5,[10,7]),o.globalAlpha=f*.5,ft(l.x,l.y,5-.25+.12*Math.sin(t*3),"#c8ffe0",null,1.5),o.globalAlpha=1}}}nv();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];ft(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of nl)G4(l,l.team===r.team,e.t);for(const l of e.heroes)l.dead||Ge(l)||ft(l.x,l.y,(l.r||.35)*(l.scale||1)*.85+.06,l===r?"#ffd24a":zu[l.team],l===r?"rgba(255,210,74,0.12)":null,l===r?2:1.5);const a=w.hoverUnit;a&&a!==r.target&&!a.dead&&ft(a.x,a.y,(a.r||.4)*(a.scale||1)*.85+.08,a.team===r.team?"#ffffff":"#ff6a5a",a.team===r.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==r.team&&(l.target===r||l.targetId===r.id)){const[u,f]=P(l.x,l.y,1.3),[c,h]=P(r.x,r.y,.5);o.save(),o.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,o.lineWidth=3,o.setLineDash([10,6]),o.lineDashOffset=-t*40,o.beginPath(),o.moveTo(u,f),o.lineTo(c,h),o.stroke(),o.restore()}r.target&&!r.target.dead&&ft(r.target.x,r.target.y,(r.target.r||.4)*(r.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-r.x,l.y-r.y)<6.2+2.5&&l.team!==r.team&&ft(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);{const l=e.fountain&&e.fountain[r.team];if(l&&!r.dead&&r.hp<r.maxHp-1&&Math.hypot(r.x-l.x,r.y-l.y)<5){Math.random()<.45&&I(r.x+(Math.random()-.5)*.7,r.y+(Math.random()-.5)*.7,.2,0,0,1.1,.9,Math.random()<.5?"#7dffb0":"#d8ffe8",3,0,!0);const[u,f]=P(r.x,r.y,1+.35*(t*1.5%1));o.globalAlpha=.9*(1-t*1.5%1),o.fillStyle="#7dffb0",o.fillRect(Math.round(u)-2,Math.round(f)-6,4,12),o.fillRect(Math.round(u)-6,Math.round(f)-2,12,4),o.globalAlpha=1,ft(r.x,r.y,.55+.08*Math.sin(t*6),"#7dffb0c0","rgba(110,255,170,0.12)",2)}}if(Fm(r),dT(r,o),cT(r,o),w.hoverAbil&&!w.aim){const l=w.game.abilOf?w.game.abilOf(r,w.hoverAbil):i[r.heroKey].abil[w.hoverAbil];l&&(l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe"||l.type==="kegs"||l.type==="channel"&&l.self)?ft(r.x,r.y,l.radius||l.blast||2,"#ffe070","rgba(255,224,112,0.12)",2,[6,6]):Fm(r,w.hoverAbil))}const s=w.marker;if(s){const l=s.t/.3;l<1&&(o.globalAlpha=1-l*.7,ft(s.x,s.y,.16*(1-l)+.04,s.atk?"#ff5a4a":"#9dffaa",null,1.5),o.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||Ge(l))continue;l.status&&l.status.slow&&ft(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,gT[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u&&!u.mount){const f=u.kind==="fire",c=.5+.5*Math.sin(t*6);ft(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&ft(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&I(l.x+y(-.6,.6),l.y+y(-.6,.6),y(.1,1.2),y(-.3,.3),y(-.3,.3),y(1,2.4),.6,f?Yo("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&ft(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&ft(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&I(l.x+y(-.3,.3),l.y+y(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(ft(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&I(l.x+y(-.4,.4),l.y+y(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),Nb(l)}}if(o=Nc(Is),i2(o,n),e){const r=e.player;if(r){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=P(i.x,i.y,.55+s),f=o.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=f,o.beginPath(),o.arc(l,u,22,0,7),o.fill(),o.fillStyle="#ffffff",o.fillRect(l-3,u-3,6,6)}for(const i of nl)N4(i,i.team===r.team);lv(),ov(),MT(o)}iv()}av(),e&&e.player&&vT(o)}function Fm(e,t){const n=t||w.aim&&w.aim.k;if(!n)return;const o=w.game.abilOf?w.game.abilOf(e,n):window.SIM.HEROES[e.heroKey].abil[n];if(!o)return;let r=w.mouse.wx,i=w.mouse.wy;if(t){const c=(e.dir||0)*Math.PI/8,h=o.range||o.radius||2;r=e.x+Math.cos(c)*h,i=e.y+Math.sin(c)*h}let a=r-e.x,s=i-e.y;const l=Math.hypot(a,s)||1;a/=l,s/=l;const u="#7fe0ff",f="rgba(120,220,255,0.16)";if(o.range&&ft(e.x,e.y,o.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&w.game.unitTarget&&w.game.unitTarget(o)){const c=w.aimUnit;if(c){const h=(c.r||.4)*(c.scale||1)*.85+.1,d=c.team!==e.team;ft(c.x,c.y,h,d?"#ff5a4a":"#7fe0ff",d?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),ft(c.x,c.y,h+.12+Math.sin(w.T*8)*.03,d?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(o.type==="broadside"){const c=(o.spread||.5)/2+.06,h=Math.atan2(s,a),d=[[e.x,e.y]];for(let m=0;m<=10;m++){const p=h-c+2*c*m/10;d.push([e.x+Math.cos(p)*o.range,e.y+Math.sin(p)*o.range])}O0(d,u,f)}else if(o.type==="proj"||o.type==="dash"||o.type==="hook"||o.type==="tar_cart"){const c=o.type==="dash"||o.type==="tar_cart"?Math.min(l,o.range):o.range,h=(o.width||1)/2,d=-s*h,m=a*h;O0([[e.x+d,e.y+m],[e.x+a*c+d,e.y+s*c+m],[e.x+a*(c+h*1.5),e.y+s*(c+h*1.5)],[e.x+a*c-d,e.y+s*c-m],[e.x-d,e.y-m]],u,f)}else if(o.type==="blink"||o.type==="leap"){const c=Math.min(l,o.range||0),h=e.x+a*c,d=e.y+s*c;O0([[e.x-s*.06,e.y+a*.06],[h-s*.06,d+a*.06],[h+s*.06,d-a*.06],[e.x+s*.06,e.y-a*.06]],u,f),ft(h,d,o.radius||.45,u,f,2)}else if(o.type==="cone"){const c=Math.atan2(s,a),h=[[e.x,e.y]];for(let d=0;d<=12;d++){const m=c-o.angle+2*o.angle*d/12;h.push([e.x+Math.cos(m)*o.range,e.y+Math.sin(m)*o.range])}O0(h,u,f)}else{const c=Math.min(l,o.range||0),h=e.x+a*c,d=e.y+s*c;ft(h,d,o.radius||.6,u,f,2)}}function MT(e){const t=w.T;for(const n of w.game.units){if(n.dead||Ge(n))continue;const o=n.status||{};if(Bb(e,n),!o.stun&&!o.root){if(o.slow&&o.slow.fx!=="fragment"&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(o.slow.fx)?-.6:1;I(n.x+y(-.3,.3),n.y+y(-.3,.3),l<0?1.1:.2,y(-.2,.2),y(-.2,.2),l,.7,Yo(o.slow.fx==="spores"?"spores":o.slow.fx==="fire"?"fire":o.slow.fx==="splash"?"splash":o.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}o.burn&&Math.random()<.5&&I(n.x+y(-.25,.25),n.y+y(-.25,.25),.3,0,0,1.4,.4,Yo("fire"),3,-1,!0);continue}const r=Jt[n.sprite],i=n.scale||1,[a,s]=P(n.x,n.y);if(o.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(o.stun){const l=o.stun.fx||"",u=s-(r?r.ay*.8:50)*i;if(l==="bash")b4(e,a,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const c=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=t*5+f*2.09,h=a+Math.cos(c)*14,d=u+Math.sin(c)*4;e.fillStyle="#ffe070",e.fillRect(h-3,d-1,6,2),e.fillRect(h-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-t*4+f*3.14,h=a+Math.cos(c)*20,d=u-6+Math.sin(c)*6;e.fillStyle="#ffffff",e.fillRect(h-3,d,3,2),e.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&I(n.x+y(-.3,.3),n.y+y(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const _l=new Map;function Ru(e,t,n){const o=n+"|"+t+"|"+e;let r=_l.get(o);if(r)return r;r=document.createElement("canvas");const i=r.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,r.width=Math.ceil(i.measureText(e).width+s*2+2),r.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,r.width/2,r.height/2),i.fillStyle=t,i.fillText(e,r.width/2,r.height/2),_l.size>2e3&&_l.delete(_l.keys().next().value),_l.set(o,r),r}function bT(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(zu))Ru(e[t].name,n,11),Ru("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)Ru(String(t),"#ffe070",10)}function vT(e){const t=w.game,n=t.player,o=w.cam,r=window.SIM.HEROES,i=o.x-w.W/2/o.z,a=o.y-w.H/2/o.z,s=w.W/o.z,l=w.H/o.z,u=(c,h,d,m,p,g,x)=>{e.fillStyle="#000000c0",e.fillRect(c-1,h-1,d+2,m+2),e.fillStyle=x,e.fillRect(c,h,d,m),e.fillStyle=g,e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(c,h,d,m,p,g=p)=>{const x=Ru(c,m,g),b=p/g,M=x.width*b,v=x.height*b;e.drawImage(x,Math.round(h-M/2),Math.round(d-v/2),M,v)};for(const c of t.units){if(c.dead||Ge(c))continue;const h=(c.x-c.y)*N.HW+N.OX,d=(c.x+c.y)*N.HH;if(h<i-60||h>i+s+60||d<a-60||d>a+l+160||(c.kind==="monster"||c.kind==="courier")&&c.hp>=c.maxHp-1&&!c.boss)continue;const m=Jt[c.sprite],p=d-(c.leaping?40:0),g=c.status&&c.status.transform&&c.status.transform.mount&&Jt[c.status.transform.mount]?c.status.transform:null,x=g?(Jt[g.mount].saddle!=null?Jt[g.mount].saddle:Jt[g.mount].ay*.62)*(g.mountScale||2):0,b=p-x-(m?m.ay*(c.scale||1)*(c._fbScale||1)*(c.monster==="serpent"?1.4:.92):50)-6,M=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,v=M?66:34,S=M?7:4,_=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":zu[c.team];if(e.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-v/2,b,v,S,c.hp/c.maxHp,_,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||r[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(h-v/2-1.5,b-1.5,v+3,S+3)),c.kind==="hero")for(let A=1;A<6;A++)e.fillStyle="#00000080",e.fillRect(h-v/2+v*A/6,b,1,S);if(g&&g.mmax&&(u(h-110/2,b-22,110,8,g.mhp/g.mmax,"#d8a040","#2a1a0a"),f(yT[String(g.mount).replace(/\d+$/,"")]||"Mount",h,b-30,"#ffd890",10)),c.shield>0&&w.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(h-v/2+c.hp/c.maxHp*v,b,Math.min(v*(1-c.hp/c.maxHp),c.shield/c.maxHp*v),S)),c.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(h-v/2-16,b-2,14,S+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(h-v/2-16,b-2,14,S+4),f(String(c.level),h-v/2-9,b+S/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+r[c.heroKey].name,h,b-9,zu[c.team],11);const A=t.castInfo&&t.castInfo(c);A&&u(h-v/2,b+S+3,v,4,A.p,A.kind===2?"#7ad0ff":A.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const c of t.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=P(c.x,c.y,1.1+c.t*.9);e.globalAlpha=Math.max(0,1-c.t/1.1);const m=c.t<.12?1.4-c.t*3:1;f(J.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*m,c.big?20:14)}e.globalAlpha=1}function wT(){let e=0;const t=w.T,n=(o,r,i,a,s,l)=>{let u=V0[e];u||(u=new pn(hf),u.anchor.set(.5),u.blendMode="add",se.lightsCam.addChild(u),V0[e]=u),e++;const[f,c]=P(o,r,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=a*(2+.35*rd),u.tint=s,u.alpha=Math.min(1,l*(1+.7*rd))};for(const o of df)o.sprite==="deco_crystals_big"&&n(o.x,o.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+o.x));for(const o of df)if(o.sprite==="deco_brazier"){const r=.8+.2*Math.sin(t*9+o.x*3)*Math.sin(t*13+o.y);n(o.x,o.y,.7,130,16751164,.4*r),Math.random()<.25&&I(o.x+y(-.1,.1),o.y+y(-.1,.1),.9,y(-.2,.2),y(-.2,.2),y(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(w.game){for(const o of w.game.units){if(o.dead||(o.kind==="tower"&&n(o.x,o.y,1.75,100,o.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+o.id)),o.kind==="nexus"&&n(o.x,o.y,.9,190,o.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),Ge(o)))continue;o.status&&o.status.burn&&n(o.x,o.y,.4,50,16747560,.5);const r=o.status&&o.status.transform;r&&!r.mount&&n(o.x,o.y,.6,110,r.kind==="fire"?16742954:16765514,.45),(o.aura||o.auraFx)&&n(o.x,o.y,.05,2.8*N.HW*1.2,16747056,.12+.03*Math.sin(t*3+o.id))}for(const o of nl)Sf(o,t)&&n(o.x,o.y,Ld(o.kind)/N.ZK,30,o.kind==="obs"?16760896:4894975,.3);for(const o of w.game.zones)o.once&&!Kx(o)&&n(o.x,o.y,0,o.r*N.HW*1.4,13143295,.35);for(const o of w.game.projs)n(o.x,o.y,o.z||.45,o.skill?60:34,o.fx==="fire"?16751162:o.fx==="frost"?10152191:o.fx==="arcane"?13142783:16777215,.35)}for(;e<V0.length;e++)V0[e].visible=!1}let Zi=null;function ST(){if(Zi)return Zi;Zi=document.createElement("canvas"),Zi.width=Zi.height=128;const e=Zi.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Zi}function _T(){const t=Math.ceil(w.W/4),n=Math.ceil(w.H/4),o=w.cam;(Jo.width!==t||Jo.height!==n)&&(Jo.width=t,Jo.height=n),ld=!0;const r=Jo.getContext("2d");r.globalCompositeOperation="source-over",r.clearRect(0,0,t,n),r.fillStyle="rgba(10,8,26,0.58)",r.fillRect(0,0,t,n),r.globalCompositeOperation="destination-out";for(const i of w.visionSrc){const[a,s]=P(i.x,i.y),l=((a-o.x)*o.z+w.W/2)/4,u=((s-o.y)*o.z+w.H/2)/4,f=sp(i.kind)*N.HW*Math.SQRT2*o.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||r.drawImage(ST(),l-f,u-f/2,f*2,f)}}function AT(e){if(!wf("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const o of e)for(let r=0;r<9;r++){const i=n()*6.28,a=Math.sqrt(n())*o.r*.85,s=o.x+Math.cos(i)*a,l=o.y+Math.sin(i)*a;sd({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=f0[f0.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function jx(){for(const[,e]of el){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}el.clear();for(const e of Pi)e.spr.destroy();Pi.length=0;for(const[,e]of ms)e.spr.destroy();ms.clear(),nl.length=0}let un,An,$o,nt,mt,ar="dragon",ii="blue",rt=null,Em=0,pa=0,Bc=0,j0=!1,ps=!1,fd=!1,_o={},ki=null,Di=!1,Lm=0,km=0,TT=0,$c=performance.now(),Dm=-9,cd=!1;const RT=["buff","aoe_self","heal_aoe","illusion","global","copypaste","kegs"],CT=e=>RT.includes(e.type)||e.type==="channel"&&e.self,PT=["facil","normal","dificil"],Fl=new Map;let hd=!1;function $t(e){if(e==null)return"";if(e=String(e),hd||bd.value==="es"||!window.I18N)return e;const t=Fl.get(e);if(t!==void 0)return t;const n=window.I18N.en;let o=n.exact[e];if(o===void 0){o=e;for(const[r,i]of n.frag)o.includes(r)&&(o=o.split(r).join(i))}return Fl.size>5e3&&Fl.clear(),Fl.set(e,o),o}function IT(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=An[t],o=e.heroes[t];if(n){o.title&&(e.exact[n.title]=o.title);for(const r in o.abil||{})n.abil[r]&&(e.exact[n.abil[r].name]=o.abil[r][0],e.exact[n.abil[r].desc]=o.abil[r][1])}}for(const t in e.items||{}){const n=un.ITEMS.find(o=>o.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of un.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(un&&un.CHAT||{}))for(const[n,o]of t)e.exact[n]=o;for(const t in e.runes||{}){const n=un.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function Qx(e,t,n,o=1,r=1){if(t===void 0||n===void 0){nt.play(e,o,0,.03,r);return}const[i,a]=P(t,n),s=w.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/w.W,u/w.H);const c=w.game&&w.game.player;if(c&&!c.dead){const[h,d]=P(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/w.W,(a-d)*s.z/w.H))}nt.play(e,o*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(w.W*.6))),.03,r)}function e1(e,t,n,o){if(!nt.babble)return;const r=Math.max(0,$o.indexOf(e))*7+3;if(n===void 0||o===void 0){nt.babble(r,t,.5,0);return}const[i,a]=P(n,o),s=w.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/w.W,u/w.H),c=.5*Math.max(0,1-f*1.1);c>.05&&nt.babble(r,t,c,Math.max(-1,Math.min(1,l/(w.W*.6))))}let Um=0;function ya(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function on(e,t="#ffe7b0",n=1.5){w.game&&w.game.msg(e,t,n)}async function OT(e){un=window.SIM,An=un.HEROES,$o=un.HERO_KEYS,nt=window.AUDIO,mt=new window.Net;{const o=nt.play,r=nt.babble;nt.play=function(i,...a){Du("snd",1,i),rn("snd");try{return o.call(nt,i,...a)}finally{an("snd")}},r&&(nt.babble=function(...i){return Du("voice"),r.apply(nt,i)})}{const o=f1.debounceRendering;f1.debounceRendering=r=>(o||queueMicrotask)(()=>{rn("ui");try{r()}finally{an("ui")}})}b3();try{const o=localStorage.getItem("moba_lang");(o==="en"||o==="es")&&(bd.value=o)}catch{}try{const o=localStorage.getItem("moba_diff");PT.includes(o)&&(no.value={...no.value,difficulty:o})}catch{}try{w.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}IT(),J.babble=e1,J.sfx=Qx,J.say=ya,J.play=(o,r)=>nt.play(o,r??1),J.t=$t,J.banner=(o,r,i,a,s)=>{const l=Es.value.slice(-3);Es.value=[...l,{id:++TT,title:$t(o),color:r,killerKey:i,victimKey:a,big:s}]},v3(jo),Jx(),no.value={...no.value,volMaster:nt.volume?nt.volume("m"):1,volMusic:nt.volume?nt.volume("mu"):1,volSfx:nt.volume?nt.volume("s"):1,soundStyle:nt.style?nt.style():"epic",shadows:w.shadowsOn},await l4(o=>B3.value=o),await jA(e),ZA(),HT(),bT(),await Promise.all([YA(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,w3(),S3().then(()=>Promise.all([_3($o),A3($o)])),document.fonts?document.fonts.ready:null]);try{const o=new un.Game(window.MAP,{humans:[]});AT(o._makeBushes())}catch(o){console.warn(o)}YT(),KT();const[t,n]=P(N.N/2,N.N/2);w.cam.x=t,w.cam.y=n,await T3(),dn.value="menu",mt.init().then(o=>{up.value=!!o}).catch(()=>{}),mt.onChange=()=>Ql(),hR(),requestAnimationFrame(e3)}function Zx(e){const t=un.PASSIVES&&un.PASSIVES[e];return t?{name:$t(t[0]),desc:$t(t[1])}:{name:"",desc:""}}function Jx(){R3.value=$o.filter(e=>!An[e].wip).map(e=>{const t=An[e];return{key:e,name:t.name,title:$t(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:$t(t.abil[n].name),desc:$t(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:Zx(e)}}),C3.value=un.ITEMS.map(e=>({id:e.id,name:$t(e.name),desc:$t(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:un.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let Xm="";function n1(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(Cn("error",t),t===Xm)return;Xm=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const o1="v9.12";{const e=document.createElement("div");e.id="build-tag",e.textContent=o1,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>n1(e.error||e.message));window.addEventListener("unhandledrejection",e=>n1(e.reason));let t3=performance.now(),Q0=0;function Gm(){const e=performance.now();if(e-t3<150){Q0=0;return}const t=Q0?Math.min(.05,(e-Q0)/1e3):1/30;Q0=e,w.T=e/1e3;try{const n=dn.value;n==="pick"&&rt&&(c3(t),Ta()),n==="lobby"&&h3(t),n==="play"&&w.game&&n3(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=Gm,e=!0}catch{}e||setInterval(Gm,33)}const zT={menu:0,lobby:1,pick:2,play:3};function e3(e){t3=performance.now(),Y3(e-$c);const t=Math.min(.05,(e-$c)/1e3);$c=e,w.T=e/1e3;try{const n=dn.value;uo("screen",zT[n]??9),n==="pick"&&rt&&(rn("draft"),c3(t),Ta(),an("draft")),n==="lobby"&&(rn("lobby"),h3(t),an("lobby")),rn("play"),n==="play"&&w.game?NT(t):DT(t),an("play"),w.marker&&(w.marker.t+=t,w.marker.t>.3&&(w.marker=null)),rn("fx"),Jb(t),an("fx"),rn("render"),pT(t),an("render"),(km-=t)<=0&&w.game&&(km=.1,rn("minimap"),Md(),an("minimap")),($m-=t)<=0&&($m=.5,rn("amb"),kT(),an("amb")),n!=="play"&&(Bm-=t)<=0&&(Bm=1,mt.available&&(F3.value=mt.openGames())),w.game&&(Nm-=t)<=0&&(Nm=.25,FT()),ys&&LT()}catch(n){console.error(n),n1(n)}requestAnimationFrame(e3)}let Nm=0;function FT(){const e=w.game,t=$b();let n=0,o=0,r=0;for(const i of e.units)i.dead||(i.kind==="hero"?n++:i.kind==="minion"?r++:i.owner&&o++);uo("units",e.units.length),uo("heroes",n),uo("minions",r),uo("pets",o),uo("proj",(e.projectiles||e.proj||[]).length),uo("simFx",(e.fx||[]).length),uo("parts",t.parts),uo("efx",t.efx),uo("decals",t.decals),uo("ambFx",t.amb),uo("dynLights",t.dynL),uo("t",Math.round(e.t)),uo("zoom",Math.round(w.cam.z*100)/100),uo("dom",document.getElementsByTagName("*").length)}let ys=null;function ET(){if(ys){ys.remove(),ys=null;return}const e=document.createElement("canvas");e.width=470,e.height=190,e.style.cssText="position:fixed;left:8px;top:8px;z-index:9999;pointer-events:none;background:rgba(8,6,14,.82);border:1px solid #5a4a7a;border-radius:6px",document.body.appendChild(e),ys=e}function LT(){const e=ys,t=e.getContext("2d"),n=s5(),o=e.width,r=100;t.clearRect(0,0,o,e.height);const i=Math.min(n.ring,o-10),a=8+r,s=f=>a-Math.min(r,f*r/100);t.fillStyle="#2a2440";for(const f of[16.7,33,50])t.fillRect(5,s(f),i,1);for(let f=0;f<i;f++){const c=(n.pos-i+f+n.ring*2)%n.ring,h=n.gap[c],d=n.work[c],m=5+f;t.fillStyle=h>50?"#ff4a3a":h>33?"#ffb040":"#4a8aff",t.fillRect(m,s(h),1,a-s(h)),t.fillStyle="#9fe0a0",t.fillRect(m,s(d),1,a-s(d))}t.font="11px monospace",t.fillStyle="#e8e0ff";const l=n.secs;t.fillText(l?`fps ${l[1]}  peor ${l[2]}ms  p95 ${l[7]}ms  juego ${l[8]}ms/cuadro  mem ${l[10]}MB`:"...",6,a+14),t.fillText(`tirones ${n.hitches}  marcas F4 ${n.marks}  ping ${Math.round(n.ping)}ms  jitter ${Math.round(n.jitter)}`,6,a+28),t.fillText(n.parts.slice(0,5).map(([f,c])=>f+" "+c.toFixed(1)).join("  "),6,a+42);const u=n.last;u&&(t.fillStyle="#ffb0a0",t.fillText(`ultimo tiron: ${u.ms}ms (juego ${u.work}, afuera ${u.outside}) a los ${u.t}s`,6,a+56)),t.fillStyle="#8a80a8",t.fillText("azul/rojo: cuadro   verde: trabajo del juego   F4: marcar tiron",6,a+70)}let Bm=0,$m=0;function kT(){if(!nt.setAmbient)return;const e=Ho(w.W/2,w.H/2),t=N.N,n=window.MAP,o=Math.abs(e.x+e.y-t)/Math.SQRT2;let r=Math.max(0,1-o/5);for(const[l,u,f]of n.ponds||[])r=Math.max(r,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-r*.7-a)*.9;nt.setAmbient(r,s,a)}function DT(e){const t=w.T*.05,n=N.N/2+Math.cos(t)*12,o=N.N/2+Math.sin(t*1.3)*12,[r,i]=P(n,o);w.cam.x+=(r-w.cam.x)*Math.min(1,e*.5),w.cam.y+=(i-w.cam.y)*Math.min(1,e*.5),w.cam.z=w.cam.tz=1.25}let El="",Hc=!1,Z0=0;const J0={};let Hm=0,Wm=0,UT=0,qm=0,tu={x:-99,y:-99,z:0};const Vm={};function XT(){if(w.mode!=="guest"||w.T-qm<.4)return;const e=Ho(w.W/2,w.H/2),t=Math.round(w.cam.z*100)/100;Math.hypot(e.x-tu.x,e.y-tu.y)<2&&t===tu.z||(qm=w.T,tu={x:e.x,y:e.y,z:t},mt.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function GT(){if(!(Hc||!mt.code)){Hc=!0,Z0||(Z0=performance.now(),on("Se cortó la conexión. Reconectando...","#ffb070",3)),Cn("net","conexion perdida, reconectando");try{await mt.rejoin(),Z0=0,on("¡Reconectado!","#9fe0a0",2.5),nt.play("announce",.4),Cn("net","reconectado")}catch{performance.now()-Z0>9e4?(on("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),mt.lost=!1,mt.code=null):await new Promise(t=>setTimeout(t,2500))}Hc=!1}}function n3(e){const t=w.game;oR(e);{const n=ap(t.t).phase;n!==El&&(El&&n==="dusk"&&(on("Cae la noche: se ve menos lejos","#a8b8ff",3),nt.play("announce",.35)),El&&n==="dawn"&&(on("Amanece","#ffe0a0",2.5),nt.play("announce",.3)),El=n)}if(w.mode==="guest"){if(mt.lost&&GT(),XT(),w.T-Wm>2&&(Wm=w.T,mt.send(["ping",Math.round(performance.now())])),w.T-Hm>5){Hm=w.T;const n=n5();n&&mt.send(["tel",n])}rn("sim/guest"),t.guestTick(e),an("sim/guest"),mt.hostState&&mt.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(w.mode==="host")for(const[n,o]of mt.pullCommands())o[0]==="cam"?Vm[n]={x:o[1],y:o[2],r:3+21/Math.max(.6,o[3]||1.25)}:o[0]==="ping"?J0[n]=o[1]:o[0]==="tel"?o5(n,o[1]):t.input(n,o);if(rn("sim/update"),!(mr.value&&w.mode==="solo")&&!yd()&&t.update(e),an("sim/update"),w.mode==="host"&&(pa-=e,pa<=0)){rn("sim/snap");const n=!!(mt.game&&mt.game.sendSnapTo);pa=Math.max(0,pa+(n?mt.guests().length<=4?1/30:1/20:1/12));const o=t.heroes.filter(s=>s.human),r=Vn>=0?Math.round(Vn*10)/10:Ur?0:-1,i=t.winner?"end":"play",a=o.map(s=>[s.human,s.team,s.heroKey]);if(n){const s=UT++%8===0;for(const l of mt.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,o,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},Vm[l.id]],full:s});f.I=r,J0[l.id]!==void 0&&(f.pe=J0[l.id],delete J0[l.id]),mt.publishTo(l.id,i,f,s?a:null)}mt.publishMeta(i,a)}else{const s=t.snapshot(3300,o);s.I=r,mt.publish(i,s,a)}an("sim/snap")}}}function NT(e){ol||ZT(),rn("play/sim"),n3(e),an("play/sim");const t=w.game,n=t.player;if(!n)return;for(const r of t.fx)!r.done&&r.type==="death"&&r.kind!=="tower"&&r.kind!=="nexus"&&mT(r);(Ym&&!n.dead||!n.dead&&Math.hypot(n.x-Km,n.y-jm)>8)&&mf(),Ym=!!n.dead,Km=n.x,jm=n.y,BT(e),w.mouse.wx=Ho().x,w.mouse.wy=Ho().y,w.mouse.rd&&!t.winner&&!w.aim&&w.mouse.inWorld&&(Bc-=e,Bc<=0&&(Bc=.12,i3(!1))),rn("play/fx"),Qb(),qT(e),an("play/fx"),!fd&&t.t>7.5&&(fd=!0,ya("minions"));const o=t.heroes.filter(r=>!r.dead&&r.team!==n.team&&Math.hypot(r.x-n.x,r.y-n.y)<9).length;nt.setIntensity(o/3+(n.hp/n.maxHp<.4?.3:0)),rn("play/vision"),$T(e),an("play/vision"),rn("play/pick"),w.hoverUnit=!w.mouse.md&&!w.aim&&w.mouse.inWorld?r3():null,w.aimUnit=w.aim&&w.mouse.inWorld?i1():null,an("play/pick"),jT(),cd=!n.dead&&t.units.some(r=>r.kind==="tower"&&!r.dead&&r.team!==n.team&&(r.target===n||r.targetId===n.id)),cd&&w.T-Dm>3&&(Dm=w.T,nt.play("deny",.5)),(Lm-=e)<=0&&(Lm=1/15,rn("play/hud"),Ou(),an("play/hud"))}let Wc=0,Ym=!1,Km=0,jm=0;function BT(e){const t=w.game.player,n=w.cam,o=w.mouse;if(t&&!t.dead&&!o.md&&!o.mmDrag&&(w.camFollow||_o[" "])){const[r,i]=P(t.x,t.y);n.x+=(r-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!o.md&&!o.mmDrag){const i=o.inWorld||eu();Wc=i&&(o.x<2||o.x>w.W-2||o.y<2||o.y>w.H-2)||_o.ArrowLeft||_o.ArrowRight||_o.ArrowUp||_o.ArrowDown?Math.min(1,Wc+e/.2):0;const l=2e3*(.35+.65*Wc)*e/n.z;_o.ArrowLeft&&(n.x-=l),_o.ArrowRight&&(n.x+=l),_o.ArrowUp&&(n.y-=l),_o.ArrowDown&&(n.y+=l),i&&(o.x<2&&(n.x-=l),o.x>w.W-2&&(n.x+=l),o.y<2&&(n.y-=l),o.y>w.H-2&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const r=(o.x-w.W/2)/n.z+n.x,i=(o.y-w.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(w.camFollow||_o[" "])||(n.x=r-(o.x-w.W/2)/n.z,n.y=i-(o.y-w.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*N.N*N.HW,n.x)),n.y=Math.max(0,Math.min(2*N.N*N.HH,n.y))}function Qm(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function $T(e){const t=w.game,n=t.player;w.visionSrc=t.units.filter(r=>!r.dead&&r.team===n.team&&hp[r.kind]);for(const r of t.wards||[])r.team===n.team&&w.visionSrc.push({kind:r.kind==="obs"?"ward":"sentry",x:r.x,y:r.y,team:r.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const r of t.units)r._bush=r.dead?-1:t.bushOf(r);const o=new Set;for(const r of t.units){if(r.dead||r.team===n.team)continue;if(r.kind==="tower"||r.kind==="nexus"){o.add(r.id);continue}const i=Qm(r.x,r.y);let a=0;for(const s of w.visionSrc){const l=sp(s.kind);if(s.kind==="ward"&&t.bushHidden(r,n.team)&&Math.hypot(r.x-s.x,r.y-s.y)>2.5||Math.abs(r.x-s.x)>=l||Math.abs(r.y-s.y)>=l)continue;const u=Math.hypot(r.x-s.x,r.y-s.y);if(u<l&&(!i||Qm(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(r,n.team)&&(a=0),r._va=(r._va||0)+(a-(r._va||0))*Math.min(1,e*5),r._va>.04&&o.add(r.id)}w.visible=o}let jl=null;function o3(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function HT(){jl===null&&(jl=[No.water_mask,No.water_calm].filter(e=>e&&e.naturalWidth).map(o3).filter(Boolean))}function WT(e,t){jl===null&&(jl=[No.water_mask,No.water_calm].filter(i=>i&&i.naturalWidth).map(o3).filter(Boolean));const[n,o]=P(e,t);for(const i of jl){const a=Math.floor(n/4),s=Math.floor(o/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const r=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return r===3?"water":r===2?"stone":r===1?"dirt":"grass"}function qT(e){const t=w.game,n=t.player,o=w.cam;for(const r of t.units){if(r.dead||!r.moving||r.speed===0||Ge(r)||r.dash)continue;const[i,a]=P(r.x,r.y);if(Math.abs(i-o.x)>w.W/o.z||Math.abs(a-o.y)>w.H/o.z||(r._stepT=(r._stepT||Math.random()*.3)-e*((r.speedNow?r.speedNow():2.5)/2.5),r._stepT>0))continue;r._stepT=r.kind==="hero"?.32:.4;const s=WT(r.x,r.y);if(s==="water"){T({type:"ring",x:r.x+y(-.1,.1),y:r.y+y(-.1,.1),r:.55*(r.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)I(r.x,r.y,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&I(r.x,r.y,.05,y(-.3,.3),y(-.3,.3),y(.3,.7),.4,"#8a6a48",2,2,!1);r.kind==="hero"&&(r===n?nt.play("step_"+s,.32,0,80):Math.random()<.5&&Qx("step_"+s,r.x,r.y,.12))}}function Be(e){w.mode==="guest"?(mt.send(e),w.game.predict(e)):w.game.input(w.localId,e)}function r3(){const e=w.game,t=e.player,n=w.cam,o=window.META;let r=null,i=1e9;const a=Ho();for(const s of e.units){if(s.dead||Ge(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||w.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=o[s.sprite],[u,f]=P(s.x,s.y),c=(u-n.x)*n.z+w.W/2,h=(f-n.y)*n.z+w.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss;let p=(l?l.ay*(s.kind==="minion"?.72:.85):50)*d,g=(m?34:s.kind==="minion"?11:s.kind==="monster"?16:18)*d;const x=s.status&&s.status.transform&&s.status.transform.mount,b=x&&o[x];if(b){const S=(s.status.transform.mountScale||2)*n.z;p+=(b.saddle||b.ay*.62)*S,g=Math.max(g,b.fw*.3*S)}const M=7;let v=1e9;if(Math.abs(w.mouse.x-c)<g+M&&w.mouse.y<h+5*d+M&&w.mouse.y>h-p-M)v=Math.abs(w.mouse.x-c)/(g+M)+Math.abs(w.mouse.y-(h-p/2))/(p+M);else if(s.kind==="hero"||m){const S=Math.hypot(a.x-s.x,a.y-s.y);S<s.r*(s.scale||1)+.2&&(v=1.5+S)}v>1e8||(s.kind==="hero"&&(v-=.4),v<i&&(i=v,r=s))}return r}function VT(){const e=w.cam,t=window.META;let n=null,o=1e9;for(const r of w.game.units){if(r.dead||Ge(r)||r.kind==="hero"||r.team!==w.game.player.team&&r._va!==void 0&&r._va<.4)continue;const[i,a]=P(r.x,r.y),s=(i-e.x)*e.z+w.W/2,l=(a-e.y)*e.z+w.H/2,u=(r.scale||1)*e.z,f=r.kind==="tower"||r.kind==="nexus"||r.boss,c=(t[r.sprite]?t[r.sprite].ay*.8:40)*u,h=(f?34:14)*u;if(Math.abs(w.mouse.x-s)<h&&w.mouse.y<l+6*u&&w.mouse.y>l-c){const d=Math.abs(w.mouse.x-s)+Math.abs(w.mouse.y-(l-c/2));d<o&&(o=d,n=r)}}return n}function r1(){const e=w.cam,t=window.META;let n=null,o=1e9;for(const r of w.game.heroes){if(r.dead||Ge(r))continue;const[i,a]=P(r.x,r.y),s=(i-e.x)*e.z+w.W/2,l=(a-e.y)*e.z+w.H/2;let u=(t[r.sprite]?t[r.sprite].ay*.9:50)*e.z,f=26*e.z;const c=r.status&&r.status.transform&&r.status.transform.mount,h=c&&t[c];if(h){const d=(r.status.transform.mountScale||2)*e.z;u+=(h.saddle||h.ay*.62)*d,f=Math.max(f,h.fw*.3*d)}if(Math.abs(w.mouse.x-s)<f&&w.mouse.y<l+10*e.z&&w.mouse.y>l-u){const d=Math.abs(w.mouse.x-s)+Math.abs(w.mouse.y-(l-u/2));d<o&&(o=d,n=r)}}return n}function i3(e){const t=Ho();if(!e&&j0)return;const n=e?r3():null;if(e&&(ki=null),n){j0=!0,Be(["a",n.id]),nt.play("click",.3),w.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const o=w.game.player,r=(w.game.wards||[]).find(i=>i.team!==o.team&&w.game.wardSeenBy(i,o.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(r){j0=!0,Be(["dw",r.id]),nt.play("click",.3),w.marker={x:r.x,y:r.y,t:0,atk:!0};return}}j0=!1,Be(["m",t.x,t.y]),e&&(w.marker={x:t.x,y:t.y,t:0},nt.play("move",.25),w.T-Um>7&&Math.random()<.5&&(Um=w.T,e1(w.game.player.heroKey,"ok")))}function a3(e){const t=w.game.player;if(t.ranks&&!t.ranks[e]){on(t.points>0&&w.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),nt.play("deny",.6);return}const n=w.game.abilOf(t,e);if((t.cds[e]||0)>.05&&!(n.type==="copypaste"&&t.status&&t.status.copy)){on("En enfriamiento","#bbbbbb",.8),nt.play("deny",.5);return}const o=Ho();if(ki=null,CT(n)){Be(["c",e,o.x,o.y]),w.aim=null;return}if(w.aim&&w.aim.k===e){u3();return}w.aim={k:e},nt.play("aim",.3)}function s3(){if(!w.tpAim)return;const e=Ho();Be(["u","tp_scroll",e.x,e.y]),nt.play("click",.4),w.tpAim=!1}function l3(){if(!w.wardAim)return;const e=Ho();Be(["u",w.wardAim.id,e.x,e.y]),nt.play("click",.4),w.wardAim=null}function i1(){const e=w.game&&w.game.player;if(!e||!w.aim)return null;const t=w.game.abilOf(e,w.aim.k);if(!w.game.unitTarget(t))return null;const n=r1();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function u3(){if(!w.aim)return;const e=w.game.player,t=w.game.abilOf(e,w.aim.k);if(w.game.unitTarget(t)){const o=i1();if(!o){on(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),nt.play("deny",.4);return}Be(["c",w.aim.k,o.x,o.y,o.id]),w.aim=null,w.marker={x:o.x,y:o.y,t:0,atk:o.team!==e.team};return}const n=Ho();Be(["c",w.aim.k,n.x,n.y]),w.aim=null}function dd(e){const t=w.game&&w.game.player;t&&(w.game.canRankUp(t,e)?(Be(["l",e]),nt.play("levelup",.5)):(on(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),nt.play("deny",.4)))}function mf(){const e=w.game&&w.game.player;if(!e)return;const[t,n]=P(e.x,e.y);w.cam.x=t,w.cam.y=n-30}function md(){w.cam.tz=vd,w.cam.zoomMsgT=1.2}function Zm(){if(dn.value!=="play"){dn.value==="menu"&&(mr.value=!mr.value);return}w.aim||w.wardAim||w.tpAim||Fs.value?(w.aim=null,w.wardAim=null,w.tpAim=!1,Fs.value=!1):mr.value=!mr.value}function Jm(){if(w.aim&&(w.aim=null),w.wardAim){w.wardAim=null;return}if(w.tpAim){w.tpAim=!1;return}w.amove=!1,w.mouse.rd=!0,i3(!0)}function YT(){const e=t1();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),P3(e),$3(Zm),window.addEventListener("mousemove",t=>{eu()||(w.mouse.md&&(w.cam.x-=(t.clientX-w.mouse.x)/w.cam.z,w.cam.y-=(t.clientY-w.mouse.y)/w.cam.z),w.mouse.x=t.clientX,w.mouse.y=t.clientY,w.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{dn.value==="play"&&(w.cam.tz=Math.max(.75,Math.min(3,w.cam.tz*(t.deltaY>0?.9:1.1))),w.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&md()}),e.addEventListener("mousedown",t=>{nt.init(),nt.startMusic(),window.VOICE&&window.VOICE.init(),eu()||(w.mouse.x=t.clientX,w.mouse.y=t.clientY,dn.value==="play"&&!yd()&&I3(t.clientX,t.clientY));const n=w.game;if(!(dn.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){w.mouse.md=!0,t.preventDefault();return}if(!mr.value){if(t.button===0&&t.altKey){jo.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(w.wardAim){l3();return}if(w.tpAim){s3();return}if(w.aim){u3();return}if(w.amove){w.amove=!1;const r=Ho();Be(["am",r.x,r.y]),w.marker={x:r.x,y:r.y,t:0,atk:!0},nt.play("click",.3);return}const o=r1()||VT();ki=o&&o!==n.player?o.id:null}t.button===2&&Jm()}}}),window.addEventListener("mousedown",t=>{if(t.button!==2||dn.value!=="play"||!w.game||!w.game.player||w.game.winner||mr.value)return;const n=t.target;!n||n===e||n.closest&&n.closest(".minimap, .shop, .chat-input, input, textarea")||(t.isTrusted&&eu()||(w.mouse.x=t.clientX,w.mouse.y=t.clientY),t.preventDefault(),t.stopPropagation(),Jm())},!0),window.addEventListener("mouseup",t=>{t.button===2&&(w.mouse.rd=!1),t.button===1&&(w.mouse.md=!1),t.button===0&&(w.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;nt.init();const o=w.game,r=t.key.toUpperCase();if(dn.value==="play"&&o&&o.player&&t.key==="Enter"){fp.value=t.shiftKey?"all":"team",t.preventDefault();return}if(r==="M"){t.shiftKey?nt.toggleMusic():nt.toggleMute();return}if(t.key==="F3"){ET(),t.preventDefault();return}if(t.key==="F4"&&dn.value!=="play"){x1(),t.preventDefault();return}if(t.key==="Escape"&&dn.value==="menu"){mr.value=!mr.value;return}if(dn.value!=="play"||!o||!o.player)return;if(yd()){t.preventDefault();return}const i=o.player;if(t.key==="Escape"){Zm();return}if(t.key==="Tab"){t.repeat||(Ll.value=!Ll.value),t.preventDefault();return}if("QWER".includes(r)&&r.length===1&&(t.shiftKey||t.ctrlKey)){dd(r),t.preventDefault();return}if(r==="T"&&r.length===1){i.points>0?(ps=!ps,nt.play("aim",.4)):(on("No tienes puntos de habilidad","#bbbbbb",1),nt.play("deny",.4));return}if("QWER".includes(r)&&r.length===1&&ps){ps=!1,dd(r);return}if("QWER".includes(r)&&r.length===1){w.wardAim=null,a3(r);return}if(t.altKey&&/^[1-6]$/.test(t.key)){jo.useItem(+t.key-1),t.preventDefault();return}const a=!t.ctrlKey&&!t.altKey&&!t.metaKey?H3(W3(t)):null;if(a){a.startsWith("item")?jo.useItem(+a.slice(4)):a==="recall"?jo.recall():jo.useCons(a),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){mf(),t.preventDefault();return}if(t.key==="F2"){jo.courier(),t.preventDefault();return}if(t.key==="F4"){x1(),on('Marcado en el registro: "acá se trabó"',"#c8e8ff",1.5),t.preventDefault();return}if(t.key.startsWith("Arrow")){_o[t.key]=!0,t.preventDefault();return}if(r==="P"||t.key==="4"&&!t.shiftKey){Fs.value=!Fs.value,nt.play("click",.4),t.preventDefault();return}if(r==="K"){nt.setStyle&&(jo.setSoundStyle(nt.style()==="epic"?"pixel":"epic"),on("Sonido: "+(nt.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(r==="A"&&r.length===1){w.amove=!0;return}if((r==="D"||r==="F")&&r.length===1){jo.spell(r);return}r==="S"&&Be(["s"]),r==="Y"&&(w.camFollow=!w.camFollow),t.key==="0"&&md(),t.key===" "&&(_o[" "]=!0,mf(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete _o[t.key]}),window.addEventListener("blur",()=>{Ll.value=!1,_o={},w.mouse.md=!1,w.mouse.rd=!1,w.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{w.mouse.inWorld=!1})}const Or={};function KT(){const e=(o,r,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?r:h==="M"?o:i,l.fillRect(d*2,c*2,2,2))})),a){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};Or.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),Or.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),Or.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[o,r]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+o*13-2,16+r*13-2,4,4);Or.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=Or.normal}let tp="";function jT(){const e=w.game&&w.game.player,t=w.hoverUnit,n=w.aim||w.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==tp&&(tp=n,t1().style.cursor=Or[n],document.documentElement.style.cursor=Or.normal,mp(Or[n]))}function f3(){const e=w.mode==="solo"?"local":mt.myPeer||"host";return rt&&rt.h&&rt.h[e]}function Cu(e){const t=e?[{id:mt.myPeer||"host",team:ii},...mt.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},o={blue:0,red:0};for(const a of t)o[a.team]<5&&(n[a.id]=[a.team,o[a.team]++,0]);const r=[];let i=0;for(const a of["blue","red"])for(let s=o[a];s<5;s++)r.push({team:a,slot:s,at:2+Math.random()*24,q:i++});r.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),r.forEach((a,s)=>a.q=s),rt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:r,h:n,view:ar||$o[0],locked:!1,prep:-1,online:!!e},e&&(w.mode="host"),dn.value="pick",nt.setMode("menu"),nt.play("announce",.6),Ta()}function pd(e,t){if(!rt||!e)return;const n=t===void 0;if(n&&w.mode==="guest"){rt.locked||(mt.send(["lock",e]),ar=e,rt.pending=e,nt.play("levelup",.7));return}const o=n?w.mode==="solo"?"local":mt.myPeer||"host":t,r=rt.h[o];if(!r||r[2])return;const[i,a]=r,s=l=>rt.blue.includes(l)||rt.red.includes(l);if(s(e))if(n){nt.play("deny",.6);return}else{const l=$o.filter(u=>!s(u)&&!An[u].noBots&&!An[u].wip);e=l[Math.random()*l.length|0]}rt[i][a]=e,r[2]=1,n&&(rt.locked=!0,ar=e,rt.view=e,nt.play("levelup",.7),e1(e,"select"))}function ep(e){const t=rt[e],n=[...rt.blue,...rt.red],o=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&An[s].role===a));let r=$o.filter(a=>!n.includes(a)&&!An[a].noBots&&!An[a].wip);const i=r.filter(a=>o.includes(An[a].role));return i.length&&(r=i),r[Math.random()*r.length|0]||$o[Math.random()*$o.length|0]}function c3(e){if(w.mode==="guest")return QT();if(rt.online){for(const[n,o]of mt.pullCommands())o[0]==="lock"&&pd(o[1],n);(Em-=e)<=0&&(Em=.25,mt.publishDraft({t:Math.round(rt.t*10)/10,p:Math.round(rt.prep*10)/10,b:rt.blue,r:rt.red,h:rt.h}))}if(rt.prep<-1e8)return;if(rt.prep>=0){if(rt.prep-=e,rt.prep<=0){rt.prep=-1e9;const n=rt.online;a1(()=>n?JT():p3())}return}if(!rt.online){if(rt.locked){rt.bt=(rt.bt||0)+e;for(const n of rt.order)!n.done&&rt.bt>=(Di?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,rt[n.team][n.slot]=ep(n.team),nt.play("click",.35))}rt.locked&&rt.order.every(n=>n.done)&&(rt.prep=Di?1.5:3,nt.play("announce",.7));return}if(Object.values(rt.h).every(n=>n[2])){rt.bt=(rt.bt||0)+e;for(const n of rt.order)!n.done&&rt.bt>=.3+n.q*.28&&(n.done=!0,rt[n.team][n.slot]=ep(n.team),nt.play("click",.35));rt.order.every(n=>n.done)&&(rt.prep=4,nt.play("announce",.7))}}function QT(){const e=mt.hostState;if(e&&e.st==="play"&&e.S){rt=null,Ra.value=null,a1(y3);return}const t=e&&e.D;if(!t)return;const n=rt.blue.join()+rt.red.join();rt.t=t.t,rt.prep=t.p,rt.blue=t.b,rt.red=t.r,rt.h=t.h,n!==rt.blue.join()+rt.red.join()&&nt.play("click",.35);const o=f3();o&&o[2]?(rt.locked=!0,ar=rt[o[0]][o[1]],rt.view=ar||rt.view):rt.pending&&performance.now()-(rt.sentAt||0)>1e3&&(rt.sentAt=performance.now(),mt.send(["lock",rt.pending]))}function Ta(){if(!rt){Ra.value=null;return}const e=f3(),t=w.mode==="solo"?"local":mt.myPeer||"host";Ra.value={online:!!rt.online,t:rt.t,prep:rt.prep,blue:[...rt.blue],red:[...rt.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(rt.h||{}).map(([n,o])=>({team:o[0],slot:o[1],me:n===t})),locked:!!rt.locked,pending:rt.pending||null,view:rt.view}}function h3(e){mt.role==="guest"&&mt.hostState&&mt.hostState.st==="pick"&&mt.hostState.D&&(w.mode="guest",w.localId=mt.myPeer,rt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:ar||$o[0],locked:!1,prep:-1,online:!0},dn.value="pick",nt.play("announce",.6)),mt.role==="guest"&&mt.hostState&&mt.hostState.st==="play"&&mt.hostState.S&&!Pu&&a1(y3),mt.role==="host"&&(pa-=e,pa<=0&&(pa=1.5,mt.setChoice(ar,ii))),(np-=e)<=0&&(np=.3,Ql())}let np=0;function Ql(){const e=[];if(mt.role==="host"){e.push({name:$t("Tú (anfitrión)"),team:ii,me:!0});for(const n of mt.guests())e.push({name:$t("Invitado"),team:n.team,me:!1})}const t=mt.role==="guest"?O3(mt.hostState,mt.myPeer):null;if(t)for(const n of t.players)e.push({name:$t(n.me?"Tú":"Jugador"),team:n.team,me:n.me});else mt.role==="guest"&&(e.push({name:$t("Tú"),team:ii,me:!0}),mt.hostState&&e.push({name:$t("Anfitrión"),team:mt.hostState.team,me:!1}));Sn.value={...Sn.value,role:mt.role,code:mt.code,myTeam:ii,players:e,hostFound:!!mt.hostState,srv:!!t,owner:!!(t&&t.owner),autoIn:t?t.autoIn:-1}}let Pu=!1;function a1(e){Pu||(Pu=!0,h1.value=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{try{e()}finally{let t=0,n=performance.now();const o=n,r=i=>{t=i-n<26?t+1:0,n=i,t<8&&i-o<2500?requestAnimationFrame(r):(h1.value=!1,Pu=!1)};requestAnimationFrame(r)}})))}let ol=!1;function d3(e){try{return localStorage.getItem("lanelings_skin_"+e)}catch{return null}}function ZT(){const e=w.game&&w.game.player;if(ol||!e)return;ol=!0;const t=d3(e.heroKey);t&&Be(["skin",t])}function m3(){const e=w.game;e&&D3(5e3).then(t=>{!t||w.game!==e||(e.brain={interpret(n,o,r,i){const a=o.heroes.filter(u=>u.team!==r.team).map(u=>u.heroKey),s=u=>o.units.filter(f=>!f.dead&&f.kind==="tower"&&f.team===u).length,l={t:o.t,scope:i,enemies:a,ourTowers:s(r.team),theirTowers:s(r.team==="blue"?"red":"blue")};return U3(n,l).then(u=>u?{...u,hero:u.hero&&o.heroes.find(f=>f.team!==r.team&&f.heroKey===u.hero)||null}:null)}})}).catch(()=>{})}function p3(){w.mode="solo",w.localId="local",ol=!1;const e=rt?{blue:rt.blue.slice(1).filter(Boolean),red:rt.red.filter(Boolean)}:null;w.game=new un.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:ar}],localId:"local",picks:e,difficulty:no.value.difficulty,aram:Di}),Di&&(Di=!1,w.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),rt=null,Ra.value=null,s1(),m3(),w.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function JT(){w.mode="host",w.localId=mt.myPeer||"host",ol=!1;const e=[],t={blue:[],red:[]};if(rt){for(const n in rt.h){const[o,r]=rt.h[n];e.push({id:n,team:o,hero:rt[o][r]||$o[0]})}for(const n of["blue","red"])rt[n].forEach((o,r)=>{o&&!Object.values(rt.h).some(i=>i[0]===n&&i[1]===r)&&t[n].push(o)})}rt=null,Ra.value=null,w.game=new un.Game(window.MAP,{humans:e,localId:w.localId,picks:t,difficulty:no.value.difficulty}),mt.lastSeq={};for(const n of mt.guests())mt.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of mt.guests()){const o=w.game.slots[n.id];o&&(o.cid=n.cid)}mt.onGuests=(n,o)=>{const r=w.game;if(r){for(const i of o.left||[]){const a=r.slots[i.peer];a&&!a.bot&&(a.bot=!0,a.away=!0,r.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)r.slots[i.id]||tR(r,i)}},s1(),m3(),w.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function tR(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),o=i=>e.heroes.find(a=>a.bot&&!a.isPlayer&&!a.away&&(!i||a.team===i)),r=n||o(t.team)||o();!r||r.isPlayer||(r.human&&e.slots[r.human]===r&&delete e.slots[r.human],r.human=t.id,r.cid=t.cid,r.bot=!1,r.away=!1,r.path=[],r.target=null,e.slots[t.id]=r,mt.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),Cn("net",(n?"vuelve ":"entra ")+t.id+" como "+r.heroKey))}function y3(){w.mode="guest",w.localId=mt.myPeer,ol=!1,w.game=new un.Game(window.MAP,{humans:[],localId:w.localId}),w.game.units=[],w.game.heroes=[],w.game.player=null,mt.onSnapshot=e=>{w.game&&w.mode==="guest"&&(Z3(),e.pe&&J3(performance.now()-e.pe),mt.myPeer&&(w.localId=mt.myPeer),w.game.applySnapshot(e,w.localId))},mt.hostState&&mt.hostState.S&&w.game.applySnapshot(mt.hostState.S,w.localId),s1()}const jr={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let Iu=0,Vn=-1,zs=[],eR=0,Ur=!1,pf=0;function yd(){return Vn>=0}function g3(){const e=w.game,t=e.player;f4(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=An[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},o=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),r=o("blue"),i=o("red");if(!t||r.length+i.length<2){Ur=!0;return}Ur=!1;const a=pf;pf=0,wd.value={blue:r,red:i,myTeam:t?t.team:"blue",id:++eR,off:a,canSkip:!1},Vn=a,Iu=0,zs=[[.15,()=>ya("blue_team")],...r.map((s,l)=>[jr.blue+l*jr.step+.05,()=>nt.play("reveal",.8)]),[jr.red-.35,()=>ya("red_team")],...i.map((s,l)=>[jr.red+l*jr.step+.05,()=>nt.play("reveal",.8)]),[jr.vs-.02,()=>{nt.play("vsslam",1),ya("versus")}],[jr.go,()=>{nt.play("warhorn",.9),ya("battle"),nt.setMode("battle")}]].filter(s=>s[0]>=a-.05),nt.setMode("menu")}function nR(){const e=mt.hostState&&mt.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?Vn<0?(pf=t,Ur=!0):Math.abs(Vn-t)>.6&&(Vn=t):(Vn>=0||Ur)&&(Ur=!1,Vn>=0&&kf())}function oR(e){if(w.mode==="guest"&&nR(),Ur&&w.game&&g3(),Vn<0)return;const t=performance.now()/1e3,n=Iu?t-Iu:0;for(Iu=t,Vn+=n>2?.05:n||e;zs.length&&zs[0][0]<=Vn;)zs.shift()[1]();Vn>=jr.end&&kf()}function kf(){Ur=!1,!(Vn<0)&&(Vn=-1,zs=[],wd.value=null,mf(),nt.setMode("battle"))}function rR(){Vn<0||w.mode!=="solo"||(Vn<jr.go&&(nt.play("warhorn",.7),ya("battle")),kf())}function s1(){mp(Or.normal);try{const e=w.game,t=e&&e.player;V3({build:o1,mode:w.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:w.gpuName,softGpu:w.softGpu,difficulty:no.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),Cn("game","empieza la partida ("+w.mode+")")}catch{}if(Oy(),jx(),dn.value="play",Es.value=[],nt.setMode("battle"),fd=!1,w.mode==="guest"?Ur=!1:g3(),ki=null,w.aim=null,w.amove=!1,ps=!1,w.cam.z=w.cam.tz=vd,w.game.player){const[e,t]=P(w.game.player.x,w.game.player.y);w.cam.x=e,w.cam.y=t-30}}async function op(){c1.value=!0,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));try{await iR()}finally{let e=0,t=performance.now();const n=t,o=r=>{e=r-t<26?e+1:0,t=r,e<6&&r-n<1500?requestAnimationFrame(o):c1.value=!1};requestAnimationFrame(o)}}async function iR(){N3(),Di=!1,El="",gd=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}Vn=-1,zs=[],Ur=!1,pf=0,wd.value=null,mr.value=!1,Fs.value=!1,Ll.value=!1,w.aim=null,rt=null,Ra.value=null,w.mode!=="solo"&&await mt.leave(),w.game=null,w.mode="solo",jx(),Oy(),dp.value=null,cp.value=null,Es.value=[],dn.value="menu",nt.setMode("menu"),t1().style.cursor=Or.normal}function aR(e){const t=An[e.heroKey],n=(e.items||[]).map(r=>un.ITEM[r]).filter(Boolean),o=r=>n.reduce((i,a)=>i+(a[r]||0),0);return[{label:$t("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+o("ad")))},{label:$t("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+o("asp"))).toFixed(2)},{label:$t("Daño de habilidades"),value:"+"+Math.round(o("ap")*100)+"%"},{label:$t("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+o("armor"))*100)+"%"},{label:$t("Velocidad"),value:(t.speed+o("ms")).toFixed(2)},{label:$t("Robo de vida"),value:Math.round(o("ls")*100)+"%"},{label:$t("Alcance"),value:String(t.range)}]}const x3=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function M3(e){return(e.items||[]).filter(t=>!un.ITEM[t].line)}function rp(e){return e.slots?e.slots.slice(0,6):M3(e).concat([null,null,null,null,null,null]).slice(0,6)}function qc(e){const t=w.game,n=An[e.heroKey],o=t.player,r=e===o,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(w.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((p,g)=>{const x=un.ITEM[p],b=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:w.mode==="guest"?(e.itemCdLeft||[])[g]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:$t(x.name),desc:$t(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:b}}),s=e.slots||M3(e).concat([null,null,null,null,null,null]).slice(0,6),l=a.filter(p=>!p.line),u=new Set,f=s.map((p,g)=>{if(!p)return null;const x=l.findIndex((b,M)=>b.id===p&&!u.has(M));return x<0?null:(u.add(x),{...l[x],slot:g})}).filter(Boolean),c=a.filter(p=>p.line),h=x3.map(([p,,g])=>{const x=un.ITEM[p];return{id:p,key:X3(G3(p)),count:e[g]||0,max:x.max,name:$t(x.name),desc:$t(x.desc)}}),d=e.team!==o.team,m=r||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:$t(n.title),role:$t(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:Zx(e.heroKey),xpFrac:w.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:un.RECALL_T,stash:(e.stash||[]).slice(),courier:r?sR(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?$t("Pergamino de teleporte"):$t(p.key&&t.abilOf(e,p.key)?t.abilOf(e,p.key).name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const g=t.abilOf(e,p)||n.abil[p],x=e.ranks?e.ranks[p]:1,b=g!==n.abil[p];return{key:p,ik:b?"m"+p:p,name:$t(g.name),desc:$t(g.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:g.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:r&&!!(e.ranks&&t.canRankUp(e,p)),dmg:g.dmg?Math.round(g.dmg*t.abilMul(e,p)):null,type:g.type,fx:g.fx}}),items:f,gearItems:c,cons:h,gear:w.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:$t("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:$t("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:aR(e),human:!!e.human,isMe:r,status:i}}function sR(e){const t=w.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id)),n=w.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-w.game.t)):0;return t?{state:t.state||"home",n:w.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function lR(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(o,r)=>({label:$t(o),value:r});return{id:e.id,heroKey:e.sprite,name:$t(t),title:$t(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let gd=!1;function Ou(){const e=!!(w.game&&w.game.player&&w.game.player.dead);if(e!==gd){gd=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=w.game,n=t.player;if(!n)return;const o=ki?Z(ki):null;o&&(o.dead&&o.kind!=="hero"||Ge(o))&&(ki=null);const r=t.msgs.filter(a=>!a.to||a.to===w.localId).slice(-3).map(a=>({id:a.id,text:$t(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{hd=a.human||a.raw;const s=$t(a.txt);return hd=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:An[a.hero]?An[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});dp.value={me:qc(n),inspected:o?o.kind==="hero"?qc(o):lR(o):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(qc),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?An[a.killerKey].name:$t(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:r,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:cd,inShop:t.inShop(n),levelMode:ps,aim:w.aim?w.aim.k:null,amove:w.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(w.cam.tz/vd*100),zoomMsg:w.cam.zoomMsgT,camFollow:w.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:An[a.heroKey].name,team:a.team,level:a.level,gear:w.mode==="guest"?a.gear||0:t.gearCode(a),kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||w.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:w.mode,netLost:!!mt.lost,deathRecap:n.dead?uR(n):xd=null}}let xd=null,ip=null;function uR(e){return xd!==e&&(xd=e,ip=fR(e)),ip}function fR(e){const t=(e.dmgLog||[]).filter(o=>w.game.t-o.t<15);if(!t.length)return null;const n={};for(const o of t){const r=o.k+":"+(o.h||"");n[r]=n[r]||{name:o.k==="hero"&&An[o.h]?An[o.h].name:$t(o.k==="tower"?"Torre":o.k==="minion"?"Súbdito":o.k==="monster"?"Monstruo":"Fuente"),heroKey:o.k==="hero"?o.h:null,amount:0,kind:o.k},n[r].amount+=o.a}return Object.values(n).map(o=>({...o,amount:Math.round(o.amount)})).sort((o,r)=>r.amount-o.amount).slice(0,5)}function cR(){const e=w.game&&w.game.player;if(!w.tpAim||!e)return null;const n=w.tpHover||(w.mouse.inWorld?{x:w.mouse.wx,y:w.mouse.wy}:null);if(!n)return null;const o=lp(e,n.x,n.y);if(!o)return null;const[r,i]=P(o.x,o.y),{N:a,HW:s,HH:l}=N;return{x:r/(2*a*s),y:i/(2*a*l),ok:Math.hypot(o.x-e.x,o.y-e.y)>=3}}function Md(){const e=w.game,t=e.player;if(!t)return;const{N:n,HW:o,HH:r}=N,i=2*n*o,a=2*n*r,s=(h,d)=>{const[m,p]=P(h,d);return{x:m/i,y:p/a}},l=[];for(const h of e.units){if(h.dead||Ge(h))continue;const d=s(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===t,human:!!h.human})}const u=w.cam,f=w.W/u.z,c=w.H/u.z;cp.value={units:l,camps:e.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/a,x1:(u.x+f/2)/i,y1:(u.y+c/2)/a},vision:w.visionSrc.map(h=>({...s(h.x,h.y),r:hp[h.kind]*o*Math.SQRT2/i})),pings:(e.pings||[]).filter(h=>h.team===t.team&&e.t-h.t<3).map(h=>({...s(h.x,h.y),t:e.t-h.t,kind:h.kind})),wards:(e.wards||[]).filter(h=>e.wardSeenBy(h,t.team)).map(h=>({...s(h.x,h.y),kind:h.kind,mine:h.team===t.team})),tp:cR(),glyph:{left:Math.max(0,(w.mode==="guest"?w.glyphReady||0:(e.glyphAt||{})[t.team]||0)-e.t),max:300}}}const jo={skipIntro(){rR()},shopDenied(e){on(e,"#ffb070",2),nt.play("deny",.5)},playVsBots(){nt.init(),nt.startMusic(),Cu(!1)},playAram(){nt.init(),nt.startMusic(),Di=!0,Cu(!1)},async hostOnline(){Sn.value={...Sn.value,msg:$t("Creando sala...")};try{await mt.host(ar,ii),dn.value="lobby",Sn.value={...Sn.value,msg:""},Ql()}catch{Sn.value={...Sn.value,msg:$t("No se pudo crear la sala")}}},async joinOnline(e){Sn.value={...Sn.value,msg:$t("Entrando...")};try{if(await mt.join(e,ar,ii),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}dn.value="lobby",Sn.value={...Sn.value,msg:""},Ql()}catch{Sn.value={...Sn.value,msg:$t("No se pudo entrar")}}},setLobbyTeam(e){ii=e,mt.setChoice(ar,ii),Ql()},startOnlinePick(){Cu(!0)},async leaveLobby(){await mt.leave(),dn.value="menu"},viewHero(e){rt&&!rt.locked&&(rt.view=e,nt.play("aim",.3),Ta())},lockHero(e){pd(e),Ta()},randomHero(){const e=$o.filter(t=>!rt.blue.includes(t)&&!rt.red.includes(t)&&!An[t].wip);pd(e[Math.random()*e.length|0]),Ta()},backToMenu(){Di=!1,rt&&rt.online?op():(rt=null,Ra.value=null,dn.value="menu")},buy(e){const t=w.game&&w.game.player;if(!t)return;const n=w.game.inShop(t),o=window.SIM.ITEM[e];if(w.mode!=="guest"&&!(n?w.game.canBuy(t,e):w.game.canBuyRemote(t,e))){on(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<o.cost?"Te falta oro":o.consumable?"Ya llevas el máximo de ese":o.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),nt.play("deny",.5);return}Be(["i",e]),nt.play("buy",.6),n||on("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=w.game&&w.game.player;if(!e)return;const t=w.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id));if(!t){on(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),nt.play("deny",.4);return}const[n,o]=P(t.x,t.y);w.cam.x=n,w.cam.y=o-30,w.camFollow=!1,Be(["cr","go"]),nt.play("click",.4)},sell(e){const t=w.game&&w.game.player;if(!t||!t.items)return;const n=typeof e=="number"?rp(t)[e]:e;if(n){if(!w.game.inShop(t)){on("Solo puedes vender en tu base","#ffb070",1.4),nt.play("deny",.4);return}Be(["v",n]),nt.play("buy",.4)}},useCons(e){const t=w.game&&w.game.player;if(!t||t.dead)return;const n=x3.find(o=>o[0]===e);if(n){if(!t[n[2]]){on("No tienes: "+un.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),nt.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){Be(["u",e]),nt.play("heal",.5);return}if(e==="tp_scroll"){if(w.aim=null,w.wardAim=null,w.tpAim){s3();return}w.tpAim=!0,nt.play("aim",.3),on("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(w.aim=null,w.wardAim&&w.wardAim.id===e){l3();return}w.wardAim={id:e},nt.play("aim",.3)}},useItem(e){const t=w.game&&w.game.player,n=t&&rp(t)[e];if(!t||e<0||!n){nt.play("deny",.4);return}const o=un.ITEM[n];if(!(o&&o.active)){on("Este objeto no se usa: es pasivo","#bbbbbb",1.2),nt.play("deny",.4);return}if((w.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-w.game.t))>.05){on("En enfriamiento","#bbbbbb",.8),nt.play("deny",.4);return}Be(["u",n,w.mouse.wx,w.mouse.wy]),nt.play("blink",.5)},moveItem(e,t){const n=w.game&&w.game.player;if(!(!n||e===t)){if(w.mode==="guest"&&n.slots){const o=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=o}Be(["mv",e,t]),nt.play("click",.35),Ou()}},rankUp(e){dd(e)},castKey(e){w.game&&w.game.player&&a3(e)},spell(e){const t=w.game&&w.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){on($t(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),nt.play("deny",.5);return}const o=Ho();Be(["sp",e,o.x,o.y]),nt.play(e==="D"?"blink":"wind",.6)},recall(){const e=w.game&&w.game.player;e&&Be(e.recall?["bc"]:["b"])},inspect(e){ki=e&&w.game&&w.game.player&&e===w.game.player.id?null:e,Ou()},centerOn(e){const t=e==null?w.game&&w.game.player:Z(e);if(!t)return;const[n,o]=P(t.x,t.y);w.cam.x=n,w.cam.y=o-30,w.camFollow=!1},minimapClick(e,t,n){const{N:o,HW:r,HH:i,OX:a}=N,s=e*(2*o*r)-a,l=t*(2*o*i),u=(s/r+l/i)/2,f=(l/i-s/r)/2;if(!(u<0||f<0||u>o||f>o)){if(n==="left"&&w.tpAim){Be(["u","tp_scroll",u,f]),nt.play("click",.4),w.tpAim=!1;return}n==="right"?(Be(["m",u,f]),w.marker={x:u,y:f,t:0}):(w.cam.x=e*2*o*r,w.cam.y=t*2*o*i,w.mouse.mmDrag=!0)}},async playOnServer(){Sn.value={...Sn.value,msg:$t("Buscando servidor...")};try{const e=await k3(no.value.difficulty);await jo.joinOnline(e)}catch{Sn.value={...Sn.value,msg:$t("El servidor no está disponible")}}},startServerMatch(){L3(mt)},hoverAbil(e){w.hoverAbil=e},glyph(){const e=w.game&&w.game.player;if(!e)return;const t=(w.mode==="guest"?w.glyphReady||0:(w.game.glyphAt||{})[e.team]||0)-w.game.t;if(t>.5){on($t("Fortificar")+" "+Math.ceil(t)+" s","#bbbbbb",.9),nt.play("deny",.5);return}Be(["gl"]),Md()},minimapHover(e,t){if(e===null||t===void 0){w.tpHover=null;return}const{N:n,HW:o,HH:r,OX:i}=N,a=e*(2*n*o)-i,s=t*(2*n*r);w.tpHover={x:(a/o+s/r)/2,y:(s/r-a/o)/2},w.tpAim&&Md()},minimapDrag(e,t){const{N:n,HW:o,HH:r}=N;w.cam.x=Math.max(0,Math.min(1,e))*2*n*o,w.cam.y=Math.max(0,Math.min(1,t))*2*n*r},ping(e,t,n){if(!w.game||!w.game.player)return;let o,r;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=N,u=t*(2*i*a)-l,f=n*(2*i*s);o=(u/a+f/s)/2,r=(f/s-u/a)/2}else{const i=Ho();o=i.x,r=i.y}Be(["pg",e,Math.round(o*100)/100,Math.round(r*100)/100])},sendChat(e,t){const n=t.trim();n&&w.game&&Be(["t",e,n]),fp.value=null},bannerDone(e){Es.value=Es.value.filter(t=>t.id!==e)},quitMatch(){op()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};nt.setVolume&&nt.setVolume(n[e],t),no.value={...no.value,[e]:t}},setSoundStyle(e){nt.setStyle&&nt.setStyle(e),no.value={...no.value,soundStyle:e}},setShadows(e){w.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}no.value={...no.value,shadows:e}},setCamFollow(e){w.camFollow=e},resetZoom(){md()},downloadLog(){Cn("user","descarga el registro"),u5()},openOptions(){mr.value=!0},setCursorLock(e){E3(e),Ou()},setLang(e){bd.value=e,Fl.clear();try{localStorage.setItem("moba_lang",e)}catch{}Jx()},setDifficulty(e){no.value={...no.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){nt.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;nt.play(n[0],n[1])},t:e=>$t(e)};function hR(){const e=new URLSearchParams(location.search);window.__g=()=>({S:w,draft:rt,st:z3,act:jo,net:mt,cmd:Be,pickHeroAt:r1,aimHero:i1,w2s:P});const t=e.get("sala");if(t){const r=t.toLowerCase();let i=0;const a=async()=>{await jo.joinOnline(r),dn.value==="menu"&&++i<5&&setTimeout(a,2500)},s=l=>{up.value?a():l>0?setTimeout(()=>s(l-1),300):Sn.value={...Sn.value,msg:$t("No se pudo entrar")}};s(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){Cu(!1),e.get("view")&&(rt.view=e.get("view")),Ta();return}if(n==="menu")return;ar=n,p3(),e.get("intro")||kf(),e.get("allbots")&&(w.game.player.bot=!0);const o=+(e.get("ff")||0);for(let r=0;r<o*30;r++)w.game.update(1/30),w.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(w.camFollow=!0),e.get("shop")&&(Fs.value=!0),e.get("tab")&&(Ll.value=!0),e.get("cam")){const[r,i]=e.get("cam").split(",").map(Number),[a,s]=P(r,i);w.cam.x=a,w.cam.y=s}e.get("mx")&&(w.mouse.x=+e.get("mx"),w.mouse.y=+e.get("my"))}const xR=Object.freeze(Object.defineProperty({__proto__:null,BUILD:o1,skinPref:d3,startClient:OT},Symbol.toStringTag,{value:"Module"}));export{BM as $,ry as A,rc as B,ze as C,Xi as D,fn as E,ge as F,uy as G,EM as H,co as I,DM as J,i4 as K,a4 as L,tn as M,L1 as N,jf as O,zr as P,D1 as Q,Wu as R,bf as S,Ut as T,lh as U,tM as V,Un as W,Op as X,zd as Y,iy as Z,s4 as _,v0 as a,Zt as a0,xo as a1,Id as a2,N5 as a3,gR as a4,K5 as a5,yR as a6,aa as a7,Xs as a8,Cd as a9,xy as aa,v5 as ab,S5 as ac,xR as ad,Hi as b,bs as c,oo as d,$i as e,fe as f,pM as g,ae as h,Mf as i,Jp as j,Od as k,ey as l,Pd as m,v1 as n,Mo as o,w5 as p,Hu as q,k5 as r,Pp as s,Ui as t,ho as u,Uo as v,ai as w,F1 as x,pn as y,_M as z};
