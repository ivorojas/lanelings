const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-D4GupiDL.js","./webworkerAll-PSrmQlUD.js","./CanvasPool-xrOcR8DX.js","./colorToUniform-B9PohakH.js","./_commonjsHelpers-CqkleIqs.js","./App-DP1POpJh.js","./index-CnQzn3c-.js","./index-vauUeYH-.css","./WebGPURenderer-JWQmoFXO.js","./SharedSystems-D_hW_eih.js","./WebGLRenderer-s8DZ-nGB.js"])))=>i.map(i=>d[i]);
import{S,w as P,q as W,M as N,r as g,u as st,v as We,x as Mm,T as Z0,y as bm,z as vm,A as Pd,B as Ox,l as Nh,p as Yn,b as zx,C as Fx,D as Ex,E as Lx,F as kx,G as Dx,j as rn,n as wm,h as Ux,s as Xx,H as Gx,I as w0,J as Nx,g as Qr,t as al,c as Xn,K as Bx,f as rs,o as $x,Z as Bh,L as Hx,i as os,N as Sm,O as Rr,d as na,m as _m,V as Am,e as Tm,P as Wx,Q as $h,R as Rm,U as Id,W as qx,X as Vx,a as Yx,Y as jx,_ as Kx,$ as Qx}from"./App-DP1POpJh.js";import{_ as J0}from"./index-CnQzn3c-.js";import{g as Cm}from"./_commonjsHelpers-CqkleIqs.js";const q={},Ge={},qe={},pc={},Eo={proj:(e,t,n,r,o,i)=>!1,hit:e=>!1,shoot:e=>!1,laser:e=>!1},Od={},is={},Zx=performance.now(),as=()=>Math.round((performance.now()-Zx)/100)/10,Ga=typeof window<"u"?window.lanelingsDesktop:null,ro=[],zd={},Hh=e=>{let t=zd[e];return t===void 0&&(t=zd[e]=ro.length,ro.push(e)),t};let Sl=new Float64Array(64),yc=new Float64Array(64),ss=new Float64Array(64);function Ye(e){yc[Hh(e)]=performance.now()}function je(e){const t=Hh(e),n=yc[t];n&&(Sl[t]+=performance.now()-n,yc[t]=0)}function Pm(e,t){const n=Hh(e);let r=0;return function(...o){const i=r++?0:performance.now();try{return t.apply(this,o)}finally{--r||(Sl[n]+=performance.now()-i)}}}const tu=[],Fd={};let gc=new Float64Array(48),xc=new Float64Array(48),eu=[],Im=[];function nu(e,t=1,n){let r=Fd[e];r===void 0&&(r=Fd[e]=tu.length,tu.push(e)),gc[r]+=t,n&&eu.length<12&&eu.push(e+":"+n)}let Lu={};function Vn(e,t){Lu[e]=t}const ku=900,Om=new Float32Array(ku),zm=new Float32Array(ku);let Ks=0,ef=0,Ed=0,sl=0,Xl=0;const Na=[];let Qs=0,ru=0,Mc=0,bc=0,vc=0,wc=0,Sc=0,_c=[],S0=0,ll=0,ou=0,Wh=0;const Ac=new Float64Array(64),Yi=[],ul=[],iu={};let au={},su=0;function Jx(e){au={...au,...e}}function pn(e,t){ul.push([as(),e,String(t).slice(0,400)]),ul.length>4e3&&ul.splice(0,800),Ll(["E",as(),e,String(t).slice(0,400)])}function t3(e){const t=performance.now();if(sl=Ed?Math.max(0,e3()):0,ss.set(Sl),Sl.fill(0),xc.set(gc),gc.fill(0),Im=eu,eu=[],Ed=t,!ef){ef=t;return}ef=t,Om[Ks]=e,zm[Ks]=sl,Ks=(Ks+1)%ku;const n=performance.memory;let r=0;if(n){const o=n.usedJSHeapSize;Xl&&o<Xl-4e6&&(r=Math.round((Xl-o)/1e6)),Xl=o}Qs++,Sc+=sl,_c.push(e);for(let o=0;o<ro.length;o++)Ac[o]+=ss[o];e>ru&&(ru=e),e>33&&Mc++,e>50&&bc++,e>100&&vc++,e>50&&n3(e,r),t-S0>=1e3&&r3(t)}function e3(){let e=0;for(let t=0;t<ro.length;t++)ro[t].includes("/")||(e+=Sl[t]);return e}function n3(e,t){const n={};for(let i=0;i<ro.length;i++)ss[i]>=.5&&(n[ro[i]]=Math.round(ss[i]*10)/10);const r={};for(let i=0;i<tu.length;i++)xc[i]&&(r[tu[i]]=xc[i]);const o={t:as(),ms:Math.round(e),work:Math.round(sl*10)/10,outside:Math.round(e-sl),parts:n,cnt:r,notes:Im.slice(0,12),gc:t,world:{...Lu},vis:document.visibilityState,focus:document.hasFocus(),loaf:a3()};Yi.push(o),Yi.length>1500&&Yi.splice(0,300),A0.push(o),A0.length>20&&A0.shift(),Ll(["H",o])}function r3(e){const t=S0?(e-S0)/1e3:1,n=_c.sort((a,l)=>a-l),r=n.length?n[Math.min(n.length-1,Math.floor(n.length*.95))]:0,o=performance.memory,i=[as(),Math.round(Qs/t),Math.round(ru),Mc,bc,Math.round(wc/t),Math.round(ll),Math.round(r),Math.round(Sc/Math.max(1,Qs)*10)/10,vc,o?Math.round(o.usedJSHeapSize/1e6):-1,Math.round(ou)];Na.push(i),Na.length>3600&&Na.shift();const s={};for(let a=0;a<ro.length;a++){const l=Ac[a]/Math.max(1,Qs);l>=.2&&(s[ro[a]]=Math.round(l*10)/10)}Ll(["S",i,s,{...Lu}]),Ac.fill(0),Qs=0,ru=0,Mc=0,bc=0,vc=0,wc=0,Sc=0,_c=[],S0=e}let nf=0;function o3(){wc++;const e=performance.now();if(nf){const t=e-nf;ou=ou*.9+Math.abs(t-33)*.1,t>250&&pn("red",`foto tarde: ${Math.round(t)} ms sin fotos del anfitrion`)}nf=e}function i3(e){ll=ll?ll*.8+e*.2:e}const _0=[];function a3(){const e=performance.now();return _0.filter(t=>e-(t.start+t.dur)<400).slice(-3)}try{new PerformanceObserver(t=>{for(const n of t.getEntries()){const r=(n.scripts||[]).slice(0,4).map(o=>({fn:o.sourceFunctionName||o.invoker||"",src:String(o.sourceURL||"").split("/").pop(),ms:Math.round(o.duration)}));_0.push({start:n.startTime,dur:Math.round(n.duration),block:Math.round(n.blockingDuration||0),render:n.renderStart?Math.round(n.startTime+n.duration-n.renderStart):0,style:Math.round(n.styleAndLayoutStart?n.startTime+n.duration-n.styleAndLayoutStart:0),scripts:r}),_0.length>80&&_0.shift()}}).observe({type:"long-animation-frame",buffered:!1})}catch{}try{new PerformanceObserver(t=>{for(const n of t.getEntries())Wh++,n.duration>120&&pn("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}if(typeof window<"u"){document.addEventListener("visibilitychange",()=>pn("ventana","pestaña "+document.visibilityState)),window.addEventListener("blur",()=>pn("ventana","perdio el foco (alt-tab u otra ventana)")),window.addEventListener("focus",()=>pn("ventana","volvio el foco")),window.addEventListener("resize",()=>pn("ventana",`tamaño ${innerWidth}x${innerHeight}`)),document.addEventListener("fullscreenchange",()=>pn("ventana",document.fullscreenElement?"pantalla completa":"salio de pantalla completa")),window.addEventListener("error",t=>pn("error",(t.message||"")+" @"+String(t.filename||"").split("/").pop()+":"+t.lineno)),window.addEventListener("unhandledrejection",t=>pn("error","promesa: "+String(t.reason&&(t.reason.stack||t.reason.message)||t.reason).slice(0,300)));const e=t=>{t.__telw||(t.__telw=1,t.addEventListener("webglcontextlost",()=>pn("gpu","se perdio el contexto WebGL ("+(t.id||t.className||"canvas")+")")),t.addEventListener("webglcontextrestored",()=>pn("gpu","se recupero el contexto WebGL")))};setInterval(()=>{document.querySelectorAll("canvas").forEach(t=>e(t))},3e3)}async function s3(){const e=navigator,t={browser:navigator.userAgent,cores:e.hardwareConcurrency,memGB:e.deviceMemory,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,window:`${innerWidth}x${innerHeight}`,lang:navigator.language};t.hz=await new Promise(n=>{const r=[],o=i=>{if(r.push(i),r.length<40)requestAnimationFrame(o);else{const s=r.slice(1).map((a,l)=>a-r[l]).sort((a,l)=>a-l);n(Math.round(1e3/s[Math.floor(s.length/2)]))}};requestAnimationFrame(o)});try{if(e.getBattery){const n=await e.getBattery();t.battery={charging:n.charging,level:Math.round(n.level*100)}}}catch{}try{Ga&&Ga.sysInfo&&(t.desktop=await Ga.sysInfo())}catch{}return t}let lu=null;s3().then(e=>{lu=e,Ll(["SYS",e])}).catch(()=>{});let A0=[];function l3(){const e=Na.slice(-5);if(!e.length)return null;const t=r=>Math.round(e.reduce((o,i)=>o+i[r],0)/e.length),n={fps:t(1),worst:Math.max(...e.map(r=>r[2])),slow:e.reduce((r,o)=>r+o[3],0),snaps:t(5),ping:t(6),p95:t(7),mem:t(10),jit:t(11),lt:Wh,err:ul.filter(r=>r[1]==="error").length,sys:Ld?void 0:lu,hitches:A0.splice(0).map(r=>({t:r.t,ms:r.ms,work:r.work,outside:r.outside,parts:r.parts,cnt:r.cnt,gc:r.gc,loaf:r.loaf.slice(0,1)}))};return lu&&(Ld=!0),n}let Ld=!1;function u3(e,t){const n=iu[e]=iu[e]||{sys:null,rows:[],hitches:[]};if(t.sys&&(n.sys=t.sys),t.hitches){for(const s of t.hitches)n.hitches.push(s);n.hitches.length>600&&n.hitches.splice(0,100)}const{hitches:r,sys:o,...i}=t;n.rows.push([as(),i]),n.rows.length>800&&n.rows.shift(),Ll(["P",e,i,t.hitches||[],t.sys||null])}let Ba=[];function Ll(e){Ba.push(e),Ba.length>2e4&&Ba.splice(0,5e3)}const fl=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+"_"+Math.floor(Math.random()*1e4);let rf=null;function f3(){return rf||(rf=new Promise(e=>{try{const t=indexedDB.open("lanelings_logs",1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains("chunks")||n.createObjectStore("chunks",{autoIncrement:!0}).createIndex("match","match")},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null)}catch{e(null)}})),rf}let ca=!1;function T0(){if(ca||!Ba.length)return;ca=!0;const e=Ba.splice(0,Ba.length),t={id:fl,...au},n=e.map(r=>JSON.stringify(r)).join(`
`)+`
`;try{Ga&&Ga.appendLog&&Ga.appendLog(fl,n,t)}catch{}f3().then(r=>{if(!r){ca=!1;return}try{const o=r.transaction("chunks","readwrite");o.objectStore("chunks").add({match:fl,t:Date.now(),head:t,lines:n}),o.oncomplete=()=>{ca=!1,c3(r)},o.onerror=()=>{ca=!1}}catch{ca=!1}})}let kd=!1;function c3(e){if(!kd){kd=!0;try{const t=e.transaction("chunks","readwrite").objectStore("chunks"),n=new Set,r=[];t.openCursor().onsuccess=o=>{const i=o.target.result;if(i){r.push([i.key,i.value.match]),n.add(i.value.match),i.continue();return}const s=new Set([...n].sort().slice(-12));for(const[a,l]of r)s.has(l)||t.delete(a)}}catch{}}}const h3=e=>window.requestIdleCallback?window.requestIdleCallback(e,{timeout:4e3}):setTimeout(e,50);typeof window<"u"&&(setInterval(()=>h3(T0),12e3),window.addEventListener("pagehide",T0),window.addEventListener("beforeunload",T0));function Dd(){su++,pn("marca",'el jugador marco "aca se trabo" (#'+su+")")}function d3(){return{gap:Om,work:zm,pos:Ks,ring:ku,secs:Na.slice(-1)[0]||null,ping:ll,jitter:ou,hitches:Yi.length,last:Yi.slice(-1)[0]||null,gauges:Lu,marks:su,parts:(()=>{const e=[];for(let t=0;t<ro.length;t++)ss[t]>=.3&&e.push([ro[t],ss[t]]);return e.sort((t,n)=>n[1]-t[1]).slice(0,10)})()}}function m3(){const e={...au,id:fl,sys:lu,durationS:as(),longTasks:Wh,hitchCount:Yi.length,marks:su},t=["LANELINGS LOG v2",JSON.stringify(e),"","# por segundo: t, fps, peor ms, cuadros>33, >50, fotos/s, ping, p95 ms, trabajo medio ms, >100, memoria MB, jitter"];for(const n of Na)t.push(n.join(","));t.push("",'# tirones (cuadro >50 ms): ms total, trabajo del juego, "outside" = esperando placa/navegador/Windows, partes, contadores, gc MB, mundo, navegador');for(const n of Yi)t.push(JSON.stringify(n));t.push("","# eventos: t, tipo, texto");for(const n of ul)t.push(n.join(" | "));for(const n in iu){const r=iu[n];t.push("","# invitado "+n+" — sistema: "+JSON.stringify(r.sys));for(const[o,i]of r.rows)t.push(o+" "+JSON.stringify(i));t.push("# tirones del invitado "+n);for(const o of r.hitches)t.push(JSON.stringify(o))}return t.join(`
`)}function p3(){T0();const e=m3(),t="lanelings-log-"+fl+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}var Je=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(Je||{});const Tc=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Gl=(e,t)=>Tc(e).priority??t,vi={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Tc).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(Tc).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(s=>t(s)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,s)=>Gl(s.value,n)-Gl(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>Gl(i,n)-Gl(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},y3={extension:{type:Je.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await J0(()=>import("./browserAll-D4GupiDL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},g3={extension:{type:Je.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await J0(()=>import("./webworkerAll-PSrmQlUD.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class bn{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new bn(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var of={exports:{}},Ud;function x3(){return Ud||(Ud=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,h,c){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,h||l,c),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function s(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],f,h;if(this._eventsCount===0)return u;for(h in f=this._events)t.call(f,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},a.prototype.listeners=function(u){var f=n?n+u:u,h=this._events[f];if(!h)return[];if(h.fn)return[h.fn];for(var c=0,d=h.length,m=new Array(d);c<d;c++)m[c]=h[c].fn;return m},a.prototype.listenerCount=function(u){var f=n?n+u:u,h=this._events[f];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,f,h,c,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var y=this._events[p],x=arguments.length,b,M;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),x){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,h),!0;case 4:return y.fn.call(y.context,f,h,c),!0;case 5:return y.fn.call(y.context,f,h,c,d),!0;case 6:return y.fn.call(y.context,f,h,c,d,m),!0}for(M=1,b=new Array(x-1);M<x;M++)b[M-1]=arguments[M];y.fn.apply(y.context,b)}else{var v=y.length,w;for(M=0;M<v;M++)switch(y[M].once&&this.removeListener(u,y[M].fn,void 0,!0),x){case 1:y[M].fn.call(y[M].context);break;case 2:y[M].fn.call(y[M].context,f);break;case 3:y[M].fn.call(y[M].context,f,h);break;case 4:y[M].fn.call(y[M].context,f,h,c);break;default:if(!b)for(w=1,b=new Array(x-1);w<x;w++)b[w-1]=arguments[w];y[M].fn.apply(y[M].context,b)}}return!0},a.prototype.on=function(u,f,h){return i(this,u,f,h,!1)},a.prototype.once=function(u,f,h){return i(this,u,f,h,!0)},a.prototype.removeListener=function(u,f,h,c){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return s(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!c||m.once)&&(!h||m.context===h)&&s(this,d);else{for(var p=0,y=[],x=m.length;p<x;p++)(m[p].fn!==f||c&&!m[p].once||h&&m[p].context!==h)&&y.push(m[p]);y.length?this._events[d]=y.length===1?y[0]:y:s(this,d)}return this},a.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&s(this,f)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}(of)),of.exports}var M3=x3();const wi=Cm(M3),b3=Math.PI*2,v3=180/Math.PI,ls=Math.PI/180;class ho{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new ho(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return af.x=0,af.y=0,af}}const af=new ho;class $e{constructor(t=1,n=0,r=0,o=1,i=0,s=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,s){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new ho;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new ho;const r=this.a,o=this.b,i=this.c,s=this.d,a=this.tx,l=this.ty,u=1/(r*s+i*-o),f=t.x,h=t.y;return n.x=s*u*f+-i*u*h+(l*i-a*s)*u,n.y=r*u*h+-o*u*f+(-l*r+a*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,s=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=s*n-this.ty*r,this.ty=s*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,s=t.d,a=t.tx,l=t.ty,u=n.a,f=n.b,h=n.c,c=n.d;return this.a=r*u+o*h,this.b=r*f+o*c,this.c=i*u+s*h,this.d=i*f+s*c,this.tx=a*u+l*h+n.tx,this.ty=a*f+l*c+n.ty,this}setTransform(t,n,r,o,i,s,a,l,u){return this.a=Math.cos(a+u)*i,this.b=Math.sin(a+u)*i,this.c=-Math.sin(a-l)*s,this.d=Math.cos(a-l)*s,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,s=t.pivot,a=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(a+l);return u<1e-5||Math.abs(b3-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(s.x*n+s.y*o),t.position.y=this.ty+(s.x*r+s.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,s=t*o-n*r;return this.a=o/s,this.b=-n/s,this.c=-r/s,this.d=t/s,this.tx=(r*this.ty-o*i)/s,this.ty=-(t*this.ty-n*i)/s,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new $e;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return S3.identity()}static get shared(){return w3.identity()}}const w3=new $e,S3=new $e,Ii=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Oi=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],zi=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Fi=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Rc=[],Fm=[],Nl=Math.sign;function _3(){for(let e=0;e<16;e++){const t=[];Rc.push(t);for(let n=0;n<16;n++){const r=Nl(Ii[e]*Ii[n]+zi[e]*Oi[n]),o=Nl(Oi[e]*Ii[n]+Fi[e]*Oi[n]),i=Nl(Ii[e]*zi[n]+zi[e]*Fi[n]),s=Nl(Oi[e]*zi[n]+Fi[e]*Fi[n]);for(let a=0;a<16;a++)if(Ii[a]===r&&Oi[a]===o&&zi[a]===i&&Fi[a]===s){t.push(a);break}}}for(let e=0;e<16;e++){const t=new $e;t.set(Ii[e],Oi[e],zi[e],Fi[e],0,0),Fm.push(t)}}_3();const Ve={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Ii[e],uY:e=>Oi[e],vX:e=>zi[e],vY:e=>Fi[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>Rc[e][t],sub:(e,t)=>Rc[e][Ve.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?Ve.S:Ve.N:Math.abs(t)*2<=Math.abs(e)?e>0?Ve.E:Ve.W:t>0?e>0?Ve.SE:Ve.SW:e>0?Ve.NE:Ve.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=Fm[Ve.inv(t)];o.tx=n,o.ty=r,e.append(o)}},Bl=[new ho,new ho,new ho,new ho];class Kn{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Kn(0,0,0,0)}clone(){return new Kn(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const a=this.x,l=this.y,u=r*(1-o),f=r-u,h=a-u,c=a+i+u,d=l-u,m=l+s+u,p=a+f,y=a+i-f,x=l+f,b=l+s-f;return t>=h&&t<=c&&n>=d&&n<=m&&!(t>p&&t<y&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const I=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>I}const r=this.left,o=this.right,i=this.top,s=this.bottom;if(o<=r||s<=i)return!1;const a=Bl[0].set(t.left,t.top),l=Bl[1].set(t.left,t.bottom),u=Bl[2].set(t.right,t.top),f=Bl[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(a,a),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(a.x,l.x,u.x,f.x)<=r||Math.min(a.x,l.x,u.x,f.x)>=o||Math.max(a.y,l.y,u.y,f.y)<=i||Math.min(a.y,l.y,u.y,f.y)>=s))return!1;const c=h*(l.y-a.y),d=h*(a.x-l.x),m=c*r+d*i,p=c*o+d*i,y=c*r+d*s,x=c*o+d*s;if(Math.max(m,p,y,x)<=c*a.x+d*a.y||Math.min(m,p,y,x)>=c*f.x+d*f.y)return!1;const b=h*(a.y-u.y),M=h*(u.x-a.x),v=b*r+M*i,w=b*o+M*i,_=b*r+M*s,A=b*o+M*s;return!(Math.max(v,w,_,A)<=b*a.x+M*a.y||Math.min(v,w,_,A)>=b*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new Kn),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const sf={default:-1};function Qn(e="default"){return sf[e]===void 0&&(sf[e]=-1),++sf[e]}const Xd={},er="8.0.0",WA="8.3.4";function Vt(e,t,n=3){if(Xd[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),Xd[t]=!0}const Em=()=>{};function Gd(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Nd(e){return!(e&e-1)&&!!e}function A3(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const Bd=Object.create(null);function T3(e){const t=Bd[e];return t===void 0&&(Bd[e]=Qn("resource")),t}const Lm=class km extends wi{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...km.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Vt(er,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=T3(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Lm.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let R3=Lm;const Dm=class Um extends wi{constructor(t={}){super(),this.options=t,this.uid=Qn("textureSource"),this._resourceType="textureSource",this._resourceId=Qn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Um.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new R3(A3(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Qn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Qn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Nd(this.pixelWidth)&&Nd(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Dm.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let nr=Dm;class qh extends nr{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}qh.extension=Je.TextureSource;const $d=new $e;class C3{constructor(t,n){this.mapCoord=new $e,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],s=t[o+1];n[o]=i*r.a+s*r.c+r.tx,n[o+1]=i*r.b+s*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&($d.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append($d));const i=t.source,s=this.uClampFrame,a=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return s[0]=(t.frame.x+a+l)/i.width,s[1]=(t.frame.y+a+l)/i.height,s[2]=(t.frame.x+t.frame.width-a+l)/i.width,s[3]=(t.frame.y+t.frame.height-a+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class kt extends wi{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:s,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=Qn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Kn,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new nr,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:h}=this._source;this.frame.width=f,this.frame.height=h}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=s,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new C3(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,s=n.y/o,a=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=a/2,h=l/2,c=i+f,d=s+h;u=Ve.add(u,Ve.NW),t.x0=c+f*Ve.uX(u),t.y0=d+h*Ve.uY(u),u=Ve.add(u,2),t.x1=c+f*Ve.uX(u),t.y1=d+h*Ve.uY(u),u=Ve.add(u,2),t.x2=c+f*Ve.uX(u),t.y2=d+h*Ve.uY(u),u=Ve.add(u,2),t.x3=c+f*Ve.uX(u),t.y3=d+h*Ve.uY(u)}else t.x0=i,t.y0=s,t.x1=i+a,t.y1=s,t.x2=i+a,t.y2=s+l,t.x3=i,t.y3=s+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Vt(er,"Texture.baseTexture is now Texture.source"),this._source}}kt.EMPTY=new kt({label:"EMPTY",source:new nr({label:"EMPTY"})});kt.EMPTY.destroy=Em;kt.WHITE=new kt({source:new qh({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});kt.WHITE.destroy=Em;function P3(e,t,n,r){const{width:o,height:i}=n.orig,s=n.trim;if(s){const a=s.width,l=s.height;e.minX=s.x-t._x*o-r,e.maxX=e.minX+a,e.minY=s.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const Hd=new $e;class gi{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Hd,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Kn);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Hd,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const s=i.a,a=i.b,l=i.c,u=i.d,f=i.tx,h=i.ty;let c=this.minX,d=this.minY,m=this.maxX,p=this.maxY,y=s*t+l*n+f,x=a*t+u*n+h;y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=s*r+l*n+f,x=a*r+u*n+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=s*t+l*o+f,x=a*t+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=s*r+l*o+f,x=a*r+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),this.minX=c,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a:s,b:a,c:l,d:u,tx:f,ty:h}=t;let c=s*n+l*r+f,d=a*n+u*r+h;this.minX=c,this.minY=d,this.maxX=c,this.maxY=d,c=s*o+l*r+f,d=a*o+u*r+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=s*n+l*i+f,d=a*n+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=s*o+l*i+f,d=a*o+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new gi(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,s=this.minY,a=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,h=o.c,c=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const y=t[p],x=t[p+1],b=u*y+h*x+d,M=f*y+c*x+m;i=b<i?b:i,s=M<s?M:s,a=b>a?b:a,l=M>l?M:l}this.minX=i,this.minY=s,this.maxX=a,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var I3={grad:.9,turn:360,rad:360/(2*Math.PI)},vo=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Tn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},kr=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Xm=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Wd=function(e){return{r:kr(e.r,0,255),g:kr(e.g,0,255),b:kr(e.b,0,255),a:kr(e.a)}},lf=function(e){return{r:Tn(e.r),g:Tn(e.g),b:Tn(e.b),a:Tn(e.a,3)}},O3=/^#([0-9a-f]{3,8})$/i,$l=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Gm=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),s=i-Math.min(t,n,r),a=s?i===t?(n-r)/s:i===n?2+(r-t)/s:4+(t-n)/s:0;return{h:60*(a<0?a+6:a),s:i?s/i*100:0,v:i/255*100,a:o}},Nm=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),s=r*(1-n),a=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,a,s,s,l,r][u],g:255*[l,r,r,a,s,s][u],b:255*[s,s,l,r,r,a][u],a:o}},qd=function(e){return{h:Xm(e.h),s:kr(e.s,0,100),l:kr(e.l,0,100),a:kr(e.a)}},Vd=function(e){return{h:Tn(e.h),s:Tn(e.s),l:Tn(e.l),a:Tn(e.a,3)}},Yd=function(e){return Nm((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},cl=function(e){return{h:(t=Gm(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},z3=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,F3=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,E3=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,L3=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Cc={string:[[function(e){var t=O3.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Tn(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Tn(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=E3.exec(e)||L3.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Wd({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=z3.exec(e)||F3.exec(e);if(!t)return null;var n,r,o=qd({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(I3[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Yd(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return vo(t)&&vo(n)&&vo(r)?Wd({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!vo(t)||!vo(n)||!vo(r))return null;var s=qd({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return Yd(s)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!vo(t)||!vo(n)||!vo(r))return null;var s=function(a){return{h:Xm(a.h),s:kr(a.s,0,100),v:kr(a.v,0,100),a:kr(a.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Nm(s)},"hsv"]]},jd=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},k3=function(e){return typeof e=="string"?jd(e.trim(),Cc.string):typeof e=="object"&&e!==null?jd(e,Cc.object):[null,void 0]},uf=function(e,t){var n=cl(e);return{h:n.h,s:kr(n.s+100*t,0,100),l:n.l,a:n.a}},ff=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Kd=function(e,t){var n=cl(e);return{h:n.h,s:n.s,l:kr(n.l+100*t,0,100),a:n.a}},Pc=function(){function e(t){this.parsed=k3(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Tn(ff(this.rgba),2)},e.prototype.isDark=function(){return ff(this.rgba)<.5},e.prototype.isLight=function(){return ff(this.rgba)>=.5},e.prototype.toHex=function(){return t=lf(this.rgba),n=t.r,r=t.g,o=t.b,s=(i=t.a)<1?$l(Tn(255*i)):"","#"+$l(n)+$l(r)+$l(o)+s;var t,n,r,o,i,s},e.prototype.toRgb=function(){return lf(this.rgba)},e.prototype.toRgbString=function(){return t=lf(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return Vd(cl(this.rgba))},e.prototype.toHslString=function(){return t=Vd(cl(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=Gm(this.rgba),{h:Tn(t.h),s:Tn(t.s),v:Tn(t.v),a:Tn(t.a,3)};var t},e.prototype.invert=function(){return io({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),io(uf(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),io(uf(this.rgba,-t))},e.prototype.grayscale=function(){return io(uf(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),io(Kd(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),io(Kd(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?io({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Tn(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=cl(this.rgba);return typeof t=="number"?io({h:t,s:n.s,l:n.l,a:n.a}):Tn(n.h)},e.prototype.isEqual=function(t){return this.toHex()===io(t).toHex()},e}(),io=function(e){return e instanceof Pc?e:new Pc(e)},Qd=[],D3=function(e){e.forEach(function(t){Qd.indexOf(t)<0&&(t(Pc,Cc),Qd.push(t))})};function U3(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(s){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(s?.closest){var f=this.toRgb(),h=1/0,c="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(a=f,l=i[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));p<h&&(h=p,c=m)}return c}},t.string.push([function(s){var a=s.toLowerCase(),l=a==="transparent"?"#0000":n[a];return l?new e(l).toRgb():null},"name"])}D3([U3]);const us=class Zs{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Zs)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,s)=>i===n[s]);if(t!==null&&n!==null){const i=Object.keys(t),s=Object.keys(n);return i.length!==s.length?!1:i.every(a=>t[a]===n[a])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=Zs._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const s=t;n=(s>>16&255)/255,r=(s>>8&255)/255,o=(s&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Zs.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const s=io(t);s.isValid()&&({r:n,g:r,b:o,a:i}=s.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Zs||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};us.shared=new us;us._temp=new us;us.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let _n=us;const X3={cullArea:null,cullable:!1,cullableChildren:!0};class Vh{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class G3{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Vh(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const uu=new G3,N3={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Vt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function B3(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const $3={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let s=n-1;s>=e;s--){const a=this.children[s];a&&(o.push(a),a.parent=null)}B3(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let s=0;s<o.length;++s)this.emit("childRemoved",o[s],this,s),o[s].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Vt(er,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class Zd{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class H3{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return uu.get(r.maskClass,t)}return t}returnMaskEffect(t){uu.return(t)}}const Ic=new H3;vi.handleByList(Je.MaskEffect,Ic._effectClasses);const W3={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),Ic.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Ic.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Zd);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Zd),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},q3={label:null,get name(){return Vt(er,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Vt(er,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},Zn=new Vh($e),fs=new Vh(gi);function Bm(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=Zn.get().identity(),r=Yh(e,o)):r=$e.IDENTITY,$m(e,n,r,t),o&&Zn.return(o),n.isValid||n.set(0,0,0,0),n}function $m(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=Zn.get(),o.appendFrom(e.localTransform,n));const i=t,s=!!e.effects.length;if(s&&(t=fs.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let a=0;a<e.children.length;a++)$m(e.children[a],t,o,r)}if(s){for(let a=0;a<e.effects.length;a++)e.effects[a].addBounds?.(t);i.addBounds(t,$e.IDENTITY),fs.return(t)}r||Zn.return(o)}function Yh(e,t){const n=e.parent;return n&&(Yh(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function V3(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,s=t>>8&255,a=t&255,l=n*i/255|0,u=r*s/255|0,f=o*a/255|0;return(l<<16)+(u<<8)+f}const Jd=16777215;function t1(e,t){return e===Jd?t:t===Jd?e:V3(e,t)}function R0(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const Y3={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=Yh(this,Zn.get().identity());return e.appendFrom(this.localTransform,n),Zn.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?R0(this.renderGroup.worldColor):this.parentRenderGroup?R0(t1(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=t1(t,n.localColor),n=n.parent;return R0(t)}};let cf=0;const e1=500;function Go(...e){cf!==e1&&(cf++,cf===e1?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function Hm(e,t,n){return t.clear(),n||(n=$e.IDENTITY),Wm(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function Wm(e,t,n,r,o){let i;if(o)i=Zn.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=Zn.get(),i.appendFrom(l,n)}const s=t,a=!!e.effects.length;if(a&&(t=fs.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)Wm(l[u],t,i,r,!1)}if(a){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);s.addBounds(t,$e.IDENTITY),fs.return(t)}Zn.return(i)}function qm(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,s=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,a=t.index;(t.data[a]!==i||t.data[a+1]!==s)&&(t.data[t.index]=i,t.data[t.index+1]=s,t.didChange=!0),t.index=a+2,o.children.length&&qm(o,t)}return t.didChange}const j3=new $e,K3={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new gi});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),qm(this,e),e.didChange&&Hm(this,e.localBounds,j3),e.localBounds},getBounds(e,t){return Bm(this,e,t||new gi)}},Q3={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},Z3={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(J3))}};function J3(e,t){return e._zIndex-t._zIndex}const t5={getGlobalPosition(e=new ho,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(Zn.get(),n);return t=r.apply(e,t),Zn.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(Zn.get(),r);return n=o.applyInverse(e,n),Zn.return(o),n}};class e5{constructor(){this.uid=Qn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let n5=0;class r5{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new nr({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new kt({source:o,label:`texturePool_${n5++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),s=Math.ceil(n*r-1e-6);i=Gd(i),s=Gd(s);const a=(i<<17)+(s<<1)+(o?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(i,s,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=s/r,l.source.pixelWidth=i,l.source.pixelHeight=s,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const br=new r5;class o5{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new $e,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new e5,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(br.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new $e),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new $e),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new $e),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function i5(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const hf=new bn(null),df=new bn(null),mf=new bn(null,1,1),n1=1,a5=2,pf=4;class Se extends wi{constructor(t={}){super(),this.uid=Qn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new $e,this.relativeGroupTransform=new $e,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new bn(this,0,0),this._scale=mf,this._pivot=df,this._skew=hf,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],i5(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(Se.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Vt(er,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=uu.get(o5,this),this.groupTransform=$e.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),uu.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new $e),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*v3}set angle(t){this.rotation=t*ls}get pivot(){return this._pivot===df&&(this._pivot=new bn(this,0,0)),this._pivot}set pivot(t){this._pivot===df&&(this._pivot=new bn(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===hf&&(this._skew=new bn(this,0,0)),this._skew}set skew(t){this._skew===hf&&(this._skew=new bn(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===mf&&(this._scale=new bn(this,1,1)),this._scale}set scale(t){this._scale===mf&&(this._scale=new bn(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,s=r._x,a=r._y,l=o._x,u=o._y;n.a=this._cx*s,n.b=this._sx*s,n.c=this._cy*a,n.d=this._sy*a,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=n1,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=_n.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=n1,this._onUpdate())}get tint(){return R0(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=a5,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=pf,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=pf,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=pf,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}Se.mixin($3);Se.mixin(t5);Se.mixin(Q3);Se.mixin(K3);Se.mixin(W3);Se.mixin(q3);Se.mixin(Z3);Se.mixin(X3);Se.mixin(N3);Se.mixin(Y3);class jh extends Se{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new gi(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class an extends jh{constructor(t=kt.EMPTY){t instanceof kt&&(t={texture:t});const{texture:n=kt.EMPTY,anchor:r,roundPixels:o,width:i,height:s,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new bn({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),s!==void 0&&(this.height=s)}static from(t,n=!1){return t instanceof kt?new an(t):new an(kt.from(t,n))}set texture(t){t||(t=kt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return P3(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Vt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const s5=new gi;function Vm(e,t,n){const r=s5;e.measurable=!0,Bm(e,n,r),t.addBoundsMask(r),e.measurable=!1}function Ym(e,t,n){const r=fs.get();e.measurable=!0;const o=Zn.get().identity(),i=jm(e,n,o);Hm(e,r,i),e.measurable=!1,t.addBoundsMask(r),Zn.return(o),fs.return(r)}function jm(e,t,n){return e?(e!==t&&(jm(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Go("Mask bounds, renderable is not inside the root container"),n)}class Km{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof an),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||Vm(this.mask,t,n)}addLocalBounds(t,n){Ym(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof an}}Km.extension=Je.MaskEffect;class Qm{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Qm.extension=Je.MaskEffect;class Zm{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){Vm(this.mask,t,n)}addLocalBounds(t,n){Ym(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Se}}Zm.extension=Je.MaskEffect;const l5={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let r1=l5;const xi={get(){return r1},set(e){r1=e}};class Kh extends nr{constructor(t){t.resource||(t.resource=xi.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Kh.extension=Je.TextureSource;class Qh extends nr{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=xi.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,Go("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Qh.extension=Je.TextureSource;var Oc=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(Oc||{});class yf{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const Jm=class pr{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new yf(null,null,1/0),this.deltaMS=1/pr.targetFPMS,this.elapsedMS=1/pr.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=Oc.NORMAL){return this._addListener(new yf(t,n,r))}addOnce(t,n,r=Oc.NORMAL){return this._addListener(new yf(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*pr.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,pr.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!pr._shared){const t=pr._shared=new pr;t.autoStart=!0,t._protected=!0}return pr._shared}static get system(){if(!pr._system){const t=pr._system=new pr;t.autoStart=!0,t._protected=!0}return pr._system}};Jm.targetFPMS=.06;let Hl=Jm,gf;async function u5(){return gf??(gf=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(s=>{const a=document.createElement("video");a.onloadeddata=()=>s(a),a.onerror=()=>s(null),a.autoplay=!1,a.crossOrigin="anonymous",a.preload="auto",a.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",a.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),gf}const Du=class tp extends nr{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...tp.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Hl.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await u5(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Hl.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Hl.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Hl.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Du.extension=Je.TextureSource;Du.defaultOptions={...nr.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Du.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let f5=Du;const va=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class c5{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Go(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=va(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const s=[...i.keys()],a={cacheKeys:s,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),s.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&Go("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){Go(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Ui=new c5,zc=[];vi.handleByList(Je.TextureSource,zc);function ep(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<zc.length;o++){const i=zc[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function h5(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&Ui.has(r))return Ui.get(r);const i=new kt({source:ep(o)});return i.on("destroy",()=>{Ui.has(r)&&Ui.remove(r)}),t||Ui.set(r,i),i}function d5(e,t=!1){return typeof e=="string"?Ui.get(e):e instanceof nr?new kt({source:e}):h5(e,t)}kt.from=d5;nr.from=ep;vi.add(Km,Qm,Zm,f5,Qh,Kh,qh);var np=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(np||{});function Wr(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Os(e){return e.split("?")[0].split("#")[0]}function m5(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function p5(e,t,n){return e.replace(new RegExp(m5(t),"g"),n)}function y5(e,t){let n="",r=0,o=-1,i=0,s=-1;for(let a=0;a<=e.length;++a){if(a<e.length)s=e.charCodeAt(a);else{if(s===47)break;s=47}if(s===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=a,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=a,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,a)}`:n=e.slice(o+1,a),r=a-o-1;o=a,i=0}else s===46&&i!==-1?++i:i=-1}return n}const _l={toPosix(e){return p5(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){Wr(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(Wr(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=Os(this.toPosix(t??xi.get().getBaseUrl())),o=Os(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?_l.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(Wr(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=y5(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return Wr(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(Wr(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(Wr(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),s=e;e=e.slice(i.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!o){r=a;break}}else o=!1;return r===-1?n?"/":this.isUrl(s)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){Wr(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){Wr(e),t&&Wr(t),e=Os(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let s=t.length-1,a=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else a===-1&&(o=!1,a=i+1),s>=0&&(l===t.charCodeAt(s)?--s===-1&&(r=i):(s=-1,r=a))}return n===r?r=a:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){Wr(e),e=Os(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let s=e.length-1;s>=0;--s){const a=e.charCodeAt(s);if(a===47){if(!o){n=s+1;break}continue}r===-1&&(o=!1,r=s+1),a===46?t===-1?t=s:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){Wr(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Os(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,s=0,a=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){s=u+1;break}continue}a===-1&&(l=!1,a=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||a===-1||f===0||f===1&&i===a-1&&i===s+1?a!==-1&&(s===0&&r?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(s,a)):(s===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,a)):(t.name=e.slice(s,i),t.base=e.slice(s,a)),t.ext=e.slice(i,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function rp(e,t,n,r,o){const i=t[n];for(let s=0;s<i.length;s++){const a=i[s];n<t.length-1?rp(e.replace(r[n],a),t,n+1,r,o):o.push(e.replace(r[n],a))}}function g5(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const s=i.substring(1,i.length-1).split(",");o.push(s)}),rp(e,o,0,n,r)}else r.push(e);return r}const o1=e=>!Array.isArray(e);class op{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return va(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(s=>s?.src??s):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&Go("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,s])=>typeof s=="string"||Array.isArray(s)?{alias:i,src:s}:{alias:i,...s})),o.forEach(i=>{const s=i.src,a=i.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);r.push(u),l=[a,u]}else{const u=a.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...a,...u]}this.add({...i,alias:l,src:s})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&Go(`[Resolver] already has key: ${i} overwriting`)},va(n).forEach(i=>{const{src:s}=i;let{data:a,format:l,loadParser:u}=i;const f=va(s).map(d=>typeof d=="string"?g5(d):Array.isArray(d)?d:[d]),h=this.getAlias(i);Array.isArray(h)?h.forEach(r):r(h);const c=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let y=0;y<this._parsers.length;y++){const x=this._parsers[y];if(x.test(m)){p=x.parse(m);break}}}else a=m.data??a,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:h,data:a,format:l,loadParser:u}),c.push(p)})}),h.forEach(d=>{this._assetMap[d]=c})})}resolveBundle(t){const n=o1(t);t=va(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const s=this.resolve(i),a={};for(const l in s){const u=s[l];a[this._extractAssetIdFromBundle(o,l)]=u}r[o]=a}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=o1(t);t=va(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const s=this._getPreferredOrder(i);s?.priority.forEach(a=>{s.params[a].forEach(l=>{const u=i.filter(f=>f[a]?f[a]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:s}=n;return(this._basePath||this._rootPath)&&(t.src=_l.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=s??t.format??x5(t.src),t}}op.RETINA_PREFIX=/@([0-9\.]+)x/;function x5(e){return e.split(".").pop().split("?").shift().split("#").shift()}const i1=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},ip=class Js{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof kt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Js.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Js.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],s=i.frame;if(s){let a=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new Kn(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?a=new Kn(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):a=new Kn(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new Kn(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[o]=new kt({source:this.textureSource,frame:a,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Js.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Js.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};ip.BATCH_SIZE=1e3;let a1=ip;const M5=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function ap(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=_l.dirname(e[0]);t.linkedSheets.forEach((i,s)=>{const a=ap([`${o}/${t.data.meta.related_multi_packs[s]}`],i,!0);Object.assign(r,a)})}return r}const b5={extension:Je.Asset,cache:{test:e=>e instanceof a1,getCacheableAssets:(e,t)=>ap(e,t,!1)},resolver:{extension:{type:Je.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&M5.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(op.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:Je.LoadParser,priority:np.Normal,name:"spritesheetLoader"},async testParse(e,t){return _l.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=_l.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let s;if(r instanceof kt)s=r;else{const u=i1(i+(o??e.meta.image),t.src);s=(await n.load([u]))[u]}const a=new a1(s.source,e);await a.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const h of l){if(typeof h!="string")continue;let c=i+h;t.data?.ignoreMultiPack||(c=i1(c,t.src),u.push(n.load({src:c,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);a.linkedSheets=f,f.forEach(h=>{h.linkedSheets=[a].concat(a.linkedSheets.filter(c=>c!==h))})}return a},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};vi.add(b5);const xf=Object.create(null),s1=Object.create(null);function Zh(e,t){let n=s1[e];return n===void 0&&(xf[t]===void 0&&(xf[t]=1),s1[e]=n=xf[t]++),n}let Wl;function v5(){return(!Wl||Wl?.isContextLost())&&(Wl=xi.get().createCanvas().getContext("webgl",{})),Wl}let ql;function w5(){if(!ql){ql="mediump";const e=v5();e&&e.getShaderPrecisionFormat&&(ql=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return ql}function S5(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function _5(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function A5(e,t){return t?`#version 300 es
${e}`:e}const T5={},R5={};function C5(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?T5:R5;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function P5(e,t){return t?e.replace("#version 300 es",""):e}const Mf={stripVersion:P5,ensurePrecision:_5,addProgramDefines:S5,setProgramName:C5,insertVersion:A5},bf=Object.create(null),sp=class Fc{constructor(t){t={...Fc.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:w5()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(Mf).forEach(s=>{const a=r[s];o=Mf[s](o,a,!0),i=Mf[s](i,a,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=Zh(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return bf[n]||(bf[n]=new Fc(t)),bf[n]}};sp.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let ie=sp;const l1={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function I5(e){return l1[e]??l1.float32}const O5={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function z5({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),s=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=s.exec(i))!==null;){const l=O5[a[3]]??"float32";n[a[2]]={location:parseInt(a[1],10),format:l,stride:I5(l).stride,offset:0,instance:!1,start:0}}}}return n}function vf(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,s=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(h=>({group:parseInt(h.match(n)[1],10),binding:parseInt(h.match(r)[1],10),name:h.match(o)[2],isUniform:h.match(o)[1]==="<uniform>",type:h.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(s)?.map(h=>{const c=h.match(l)[1],d=h.match(a).reduce((m,p)=>{const[y,x]=p.split(":");return m[y.trim()]=x.trim(),m},{});return d?{name:c,members:d}:null}).filter(({name:h})=>u.some(c=>c.type===h))??[];return{groups:u,structs:f}}var tl=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(tl||{});function F5({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:tl.VERTEX|tl.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:tl.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:tl.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function E5({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function L5(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(s=>n.has(s.name)?!1:(n.add(s.name),!0)),i=[...e.groups,...t.groups].filter(s=>{const a=`${s.name}-${s.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:o,groups:i}}const wf=Object.create(null);class ee{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:s}=t;if(this.name=s,this.fragment=n,this.vertex=r,n.source===r.source){const a=vf(n.source);this.structsAndGroups=a}else{const a=vf(r.source),l=vf(n.source);this.structsAndGroups=L5(a,l)}this.layout=o??E5(this.structsAndGroups),this.gpuLayout=i??F5(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Zh(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=z5(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return wf[n]||(wf[n]=new ee(t)),wf[n]}}const lp=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],k5=lp.reduce((e,t)=>(e[t]=!0,e),{});function D5(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const up=class fp{constructor(t,n){this._touched=0,this.uid=Qn("uniform"),this._resourceType="uniformGroup",this._resourceId=Qn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...fp.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!k5[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${lp.join(", ")}`);i.value??(i.value=D5(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Zh(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};up.defaultOptions={ubo:!1,isStatic:!1};let Uu=up;class Sf{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var fu=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(fu||{});class Xu extends wi{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:s,groupMap:a}=t;this.gpuProgram=n,this.glProgram=r,s===void 0&&(s=0,n&&(s|=fu.WEBGPU),r&&(s|=fu.WEBGL)),this.compatibleRenderers=s;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&a)for(const u in a)for(const f in a[u]){const h=a[u][f];l[h]={group:u,binding:f,name:h}}else if(n&&o&&!a){const u=n.structsAndGroups.groups;a={},u.forEach(f=>{a[f.group]=a[f.group]||{},a[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},a={},n&&n.structsAndGroups.groups.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new Sf,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},a[99]=a[99]||{},a[99][u]=f,u++);for(const f in i){const h=f;let c=i[f];!c.source&&!c._resourceType&&(c=new Uu(c));const d=l[h];d&&(o[d.group]||(o[d.group]=new Sf,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(c,d.binding))}}this.groups=o,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new Sf,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(s){t[i.group].setResource(s,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=ee.from(n)),r&&(s=ie.from(r)),new Xu({gpuProgram:i,glProgram:s,...o})}}const U5={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},_f=0,Af=1,Tf=2,Rf=3,Cf=4,Pf=5,Ec=class cp{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<_f)}set blend(t){!!(this.data&1<<_f)!==t&&(this.data^=1<<_f)}get offsets(){return!!(this.data&1<<Af)}set offsets(t){!!(this.data&1<<Af)!==t&&(this.data^=1<<Af)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Tf)}set culling(t){!!(this.data&1<<Tf)!==t&&(this.data^=1<<Tf)}get depthTest(){return!!(this.data&1<<Rf)}set depthTest(t){!!(this.data&1<<Rf)!==t&&(this.data^=1<<Rf)}get depthMask(){return!!(this.data&1<<Pf)}set depthMask(t){!!(this.data&1<<Pf)!==t&&(this.data^=1<<Pf)}get clockwiseFrontFace(){return!!(this.data&1<<Cf)}set clockwiseFrontFace(t){!!(this.data&1<<Cf)!==t&&(this.data^=1<<Cf)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=U5[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new cp;return t.depthTest=!1,t.blend=!0,t}};Ec.default2d=Ec.for2d();let hp=Ec;const dp=class Lc extends Xu{constructor(t){t={...Lc.defaultOptions,...t},super(t),this.enabled=!0,this._state=hp.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=ee.from(n)),r&&(s=ie.from(r)),new Lc({gpuProgram:i,glProgram:s,...o})}};dp.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let fe=dp;const kc=[];vi.handleByNamedList(Je.Environment,kc);async function X5(e){if(!e)for(let t=0;t<kc.length;t++){const n=kc[t];if(n.value.test()){await n.value.load();return}}}let zs;function G5(){if(typeof zs=="boolean")return zs;try{zs=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{zs=!1}return zs}var Vl={exports:{}},u1;function N5(){if(u1)return Vl.exports;u1=1,Vl.exports=e,Vl.exports.default=e;function e(L,k,D){D=D||2;var $=k&&k.length,H=$?k[0]*D:L.length,Z=t(L,0,H,D,!0),tt=[];if(!Z||Z.next===Z.prev)return tt;var dt,Xt,Ut,Ee,ve,jt,mn;if($&&(Z=l(L,k,Z,D)),L.length>80*D){dt=Ut=L[0],Xt=Ee=L[1];for(var be=D;be<H;be+=D)ve=L[be],jt=L[be+1],ve<dt&&(dt=ve),jt<Xt&&(Xt=jt),ve>Ut&&(Ut=ve),jt>Ee&&(Ee=jt);mn=Math.max(Ut-dt,Ee-Xt),mn=mn!==0?32767/mn:0}return r(Z,tt,D,dt,Xt,mn,0),tt}function t(L,k,D,$,H){var Z,tt;if(H===j(L,k,D,$)>0)for(Z=k;Z<D;Z+=$)tt=E(Z,L[Z],L[Z+1],tt);else for(Z=D-$;Z>=k;Z-=$)tt=E(Z,L[Z],L[Z+1],tt);return tt&&v(tt,tt.next)&&(U(tt),tt=tt.next),tt}function n(L,k){if(!L)return L;k||(k=L);var D=L,$;do if($=!1,!D.steiner&&(v(D,D.next)||M(D.prev,D,D.next)===0)){if(U(D),D=k=D.prev,D===D.next)break;$=!0}else D=D.next;while($||D!==k);return k}function r(L,k,D,$,H,Z,tt){if(L){!tt&&Z&&d(L,$,H,Z);for(var dt=L,Xt,Ut;L.prev!==L.next;){if(Xt=L.prev,Ut=L.next,Z?i(L,$,H,Z):o(L)){k.push(Xt.i/D|0),k.push(L.i/D|0),k.push(Ut.i/D|0),U(L),L=Ut.next,dt=Ut.next;continue}if(L=Ut,L===dt){tt?tt===1?(L=s(n(L),k,D),r(L,k,D,$,H,Z,2)):tt===2&&a(L,k,D,$,H,Z):r(n(L),k,D,$,H,Z,1);break}}}}function o(L){var k=L.prev,D=L,$=L.next;if(M(k,D,$)>=0)return!1;for(var H=k.x,Z=D.x,tt=$.x,dt=k.y,Xt=D.y,Ut=$.y,Ee=H<Z?H<tt?H:tt:Z<tt?Z:tt,ve=dt<Xt?dt<Ut?dt:Ut:Xt<Ut?Xt:Ut,jt=H>Z?H>tt?H:tt:Z>tt?Z:tt,mn=dt>Xt?dt>Ut?dt:Ut:Xt>Ut?Xt:Ut,be=$.next;be!==k;){if(be.x>=Ee&&be.x<=jt&&be.y>=ve&&be.y<=mn&&x(H,dt,Z,Xt,tt,Ut,be.x,be.y)&&M(be.prev,be,be.next)>=0)return!1;be=be.next}return!0}function i(L,k,D,$){var H=L.prev,Z=L,tt=L.next;if(M(H,Z,tt)>=0)return!1;for(var dt=H.x,Xt=Z.x,Ut=tt.x,Ee=H.y,ve=Z.y,jt=tt.y,mn=dt<Xt?dt<Ut?dt:Ut:Xt<Ut?Xt:Ut,be=Ee<ve?Ee<jt?Ee:jt:ve<jt?ve:jt,Jo=dt>Xt?dt>Ut?dt:Ut:Xt>Ut?Xt:Ut,Is=Ee>ve?Ee>jt?Ee:jt:ve>jt?ve:jt,Rd=p(mn,be,k,D,$),Cd=p(Jo,Is,k,D,$),pe=L.prevZ,ye=L.nextZ;pe&&pe.z>=Rd&&ye&&ye.z<=Cd;){if(pe.x>=mn&&pe.x<=Jo&&pe.y>=be&&pe.y<=Is&&pe!==H&&pe!==tt&&x(dt,Ee,Xt,ve,Ut,jt,pe.x,pe.y)&&M(pe.prev,pe,pe.next)>=0||(pe=pe.prevZ,ye.x>=mn&&ye.x<=Jo&&ye.y>=be&&ye.y<=Is&&ye!==H&&ye!==tt&&x(dt,Ee,Xt,ve,Ut,jt,ye.x,ye.y)&&M(ye.prev,ye,ye.next)>=0))return!1;ye=ye.nextZ}for(;pe&&pe.z>=Rd;){if(pe.x>=mn&&pe.x<=Jo&&pe.y>=be&&pe.y<=Is&&pe!==H&&pe!==tt&&x(dt,Ee,Xt,ve,Ut,jt,pe.x,pe.y)&&M(pe.prev,pe,pe.next)>=0)return!1;pe=pe.prevZ}for(;ye&&ye.z<=Cd;){if(ye.x>=mn&&ye.x<=Jo&&ye.y>=be&&ye.y<=Is&&ye!==H&&ye!==tt&&x(dt,Ee,Xt,ve,Ut,jt,ye.x,ye.y)&&M(ye.prev,ye,ye.next)>=0)return!1;ye=ye.nextZ}return!0}function s(L,k,D){var $=L;do{var H=$.prev,Z=$.next.next;!v(H,Z)&&w(H,$,$.next,Z)&&C(H,Z)&&C(Z,H)&&(k.push(H.i/D|0),k.push($.i/D|0),k.push(Z.i/D|0),U($),U($.next),$=L=Z),$=$.next}while($!==L);return n($)}function a(L,k,D,$,H,Z){var tt=L;do{for(var dt=tt.next.next;dt!==tt.prev;){if(tt.i!==dt.i&&b(tt,dt)){var Xt=O(tt,dt);tt=n(tt,tt.next),Xt=n(Xt,Xt.next),r(tt,k,D,$,H,Z,0),r(Xt,k,D,$,H,Z,0);return}dt=dt.next}tt=tt.next}while(tt!==L)}function l(L,k,D,$){var H=[],Z,tt,dt,Xt,Ut;for(Z=0,tt=k.length;Z<tt;Z++)dt=k[Z]*$,Xt=Z<tt-1?k[Z+1]*$:L.length,Ut=t(L,dt,Xt,$,!1),Ut===Ut.next&&(Ut.steiner=!0),H.push(y(Ut));for(H.sort(u),Z=0;Z<H.length;Z++)D=f(H[Z],D);return D}function u(L,k){return L.x-k.x}function f(L,k){var D=h(L,k);if(!D)return k;var $=O(D,L);return n($,$.next),n(D,D.next)}function h(L,k){var D=k,$=L.x,H=L.y,Z=-1/0,tt;do{if(H<=D.y&&H>=D.next.y&&D.next.y!==D.y){var dt=D.x+(H-D.y)*(D.next.x-D.x)/(D.next.y-D.y);if(dt<=$&&dt>Z&&(Z=dt,tt=D.x<D.next.x?D:D.next,dt===$))return tt}D=D.next}while(D!==k);if(!tt)return null;var Xt=tt,Ut=tt.x,Ee=tt.y,ve=1/0,jt;D=tt;do $>=D.x&&D.x>=Ut&&$!==D.x&&x(H<Ee?$:Z,H,Ut,Ee,H<Ee?Z:$,H,D.x,D.y)&&(jt=Math.abs(H-D.y)/($-D.x),C(D,L)&&(jt<ve||jt===ve&&(D.x>tt.x||D.x===tt.x&&c(tt,D)))&&(tt=D,ve=jt)),D=D.next;while(D!==Xt);return tt}function c(L,k){return M(L.prev,L,k.prev)<0&&M(k.next,L,L.next)<0}function d(L,k,D,$){var H=L;do H.z===0&&(H.z=p(H.x,H.y,k,D,$)),H.prevZ=H.prev,H.nextZ=H.next,H=H.next;while(H!==L);H.prevZ.nextZ=null,H.prevZ=null,m(H)}function m(L){var k,D,$,H,Z,tt,dt,Xt,Ut=1;do{for(D=L,L=null,Z=null,tt=0;D;){for(tt++,$=D,dt=0,k=0;k<Ut&&(dt++,$=$.nextZ,!!$);k++);for(Xt=Ut;dt>0||Xt>0&&$;)dt!==0&&(Xt===0||!$||D.z<=$.z)?(H=D,D=D.nextZ,dt--):(H=$,$=$.nextZ,Xt--),Z?Z.nextZ=H:L=H,H.prevZ=Z,Z=H;D=$}Z.nextZ=null,Ut*=2}while(tt>1);return L}function p(L,k,D,$,H){return L=(L-D)*H|0,k=(k-$)*H|0,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,L|k<<1}function y(L){var k=L,D=L;do(k.x<D.x||k.x===D.x&&k.y<D.y)&&(D=k),k=k.next;while(k!==L);return D}function x(L,k,D,$,H,Z,tt,dt){return(H-tt)*(k-dt)>=(L-tt)*(Z-dt)&&(L-tt)*($-dt)>=(D-tt)*(k-dt)&&(D-tt)*(Z-dt)>=(H-tt)*($-dt)}function b(L,k){return L.next.i!==k.i&&L.prev.i!==k.i&&!R(L,k)&&(C(L,k)&&C(k,L)&&I(L,k)&&(M(L.prev,L,k.prev)||M(L,k.prev,k))||v(L,k)&&M(L.prev,L,L.next)>0&&M(k.prev,k,k.next)>0)}function M(L,k,D){return(k.y-L.y)*(D.x-k.x)-(k.x-L.x)*(D.y-k.y)}function v(L,k){return L.x===k.x&&L.y===k.y}function w(L,k,D,$){var H=A(M(L,k,D)),Z=A(M(L,k,$)),tt=A(M(D,$,L)),dt=A(M(D,$,k));return!!(H!==Z&&tt!==dt||H===0&&_(L,D,k)||Z===0&&_(L,$,k)||tt===0&&_(D,L,$)||dt===0&&_(D,k,$))}function _(L,k,D){return k.x<=Math.max(L.x,D.x)&&k.x>=Math.min(L.x,D.x)&&k.y<=Math.max(L.y,D.y)&&k.y>=Math.min(L.y,D.y)}function A(L){return L>0?1:L<0?-1:0}function R(L,k){var D=L;do{if(D.i!==L.i&&D.next.i!==L.i&&D.i!==k.i&&D.next.i!==k.i&&w(D,D.next,L,k))return!0;D=D.next}while(D!==L);return!1}function C(L,k){return M(L.prev,L,L.next)<0?M(L,k,L.next)>=0&&M(L,L.prev,k)>=0:M(L,k,L.prev)<0||M(L,L.next,k)<0}function I(L,k){var D=L,$=!1,H=(L.x+k.x)/2,Z=(L.y+k.y)/2;do D.y>Z!=D.next.y>Z&&D.next.y!==D.y&&H<(D.next.x-D.x)*(Z-D.y)/(D.next.y-D.y)+D.x&&($=!$),D=D.next;while(D!==L);return $}function O(L,k){var D=new G(L.i,L.x,L.y),$=new G(k.i,k.x,k.y),H=L.next,Z=k.prev;return L.next=k,k.prev=L,D.next=H,H.prev=D,$.next=D,D.prev=$,Z.next=$,$.prev=Z,$}function E(L,k,D,$){var H=new G(L,k,D);return $?(H.next=$.next,H.prev=$,$.next.prev=H,$.next=H):(H.prev=H,H.next=H),H}function U(L){L.next.prev=L.prev,L.prev.next=L.next,L.prevZ&&(L.prevZ.nextZ=L.nextZ),L.nextZ&&(L.nextZ.prevZ=L.prevZ)}function G(L,k,D){this.i=L,this.x=k,this.y=D,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(L,k,D,$){var H=k&&k.length,Z=H?k[0]*D:L.length,tt=Math.abs(j(L,0,Z,D));if(H)for(var dt=0,Xt=k.length;dt<Xt;dt++){var Ut=k[dt]*D,Ee=dt<Xt-1?k[dt+1]*D:L.length;tt-=Math.abs(j(L,Ut,Ee,D))}var ve=0;for(dt=0;dt<$.length;dt+=3){var jt=$[dt]*D,mn=$[dt+1]*D,be=$[dt+2]*D;ve+=Math.abs((L[jt]-L[be])*(L[mn+1]-L[jt+1])-(L[jt]-L[mn])*(L[be+1]-L[jt+1]))}return tt===0&&ve===0?0:Math.abs((ve-tt)/tt)};function j(L,k,D,$){for(var H=0,Z=k,tt=D-$;Z<D;Z+=$)H+=(L[tt]-L[Z])*(L[Z+1]+L[tt+1]),tt=Z;return H}return e.flatten=function(L){for(var k=L[0][0].length,D={vertices:[],holes:[],dimensions:k},$=0,H=0;H<L.length;H++){for(var Z=0;Z<L[H].length;Z++)for(var tt=0;tt<k;tt++)D.vertices.push(L[H][Z][tt]);H>0&&($+=L[H-1].length,D.holes.push($))}return D},Vl.exports}var B5=N5();const qA=Cm(B5);var mp=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(mp||{});class $5{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,s,a,l){const{name:u,items:f}=this;for(let h=0,c=f.length;h<c;h++)f[h][u](t,n,r,o,i,s,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const H5=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],pp=class yp extends wi{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...H5,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await X5(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...yp.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof Se&&(r={container:r},n&&(Vt(er,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:_n.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=mp.ALL);const{clear:r,clearColor:o,target:i}=t;_n.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,_n.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new $5(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,s=o.name,a=r[s];this.renderPipes[s]=new i(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!G5())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};pp.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let gp=pp,Yl;function W5(e){return Yl!==void 0||(Yl=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??gp.defaultOptions.failIfMajorPerformanceCaveat};try{if(!xi.get().getWebGLRenderingContext())return!1;let r=xi.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Yl}let jl;async function q5(e={}){return jl!==void 0||(jl=await(async()=>{const t=xi.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),jl}const f1=["webgl","webgpu","canvas"];async function V5(e){let t=[];e.preference?(t.push(e.preference),f1.forEach(i=>{i!==e.preference&&t.push(i)})):t=f1.slice();let n,r={};for(let i=0;i<t.length;i++){const s=t[i];if(s==="webgpu"&&await q5()){const{WebGPURenderer:a}=await J0(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-JWQmoFXO.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=a,r={...e,...e.webgpu};break}else if(s==="webgl"&&W5(e.failIfMajorPerformanceCaveat??gp.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await J0(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-s8DZ-nGB.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=a,r={...e,...e.webgl};break}else if(s==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const xp="8.6.6";class Mp{static init(){globalThis.__PIXI_APP_INIT__?.(this,xp)}static destroy(){}}Mp.extension=Je.Application;class Y5{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,xp)}destroy(){this._renderer=null}}Y5.extension={type:[Je.WebGLSystem,Je.WebGPUSystem],name:"initHook",priority:-10};const bp=class Dc{constructor(...t){this.stage=new Se,t[0]!==void 0&&Vt(er,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await V5(t),Dc._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Vt(er,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=Dc._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};bp._plugins=[];let hl=bp;vi.handleByList(Je.Application,hl._plugins);vi.add(Mp);var Nn=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(Nn||{});class $a extends wi{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:s}=t;super(),this.uid=Qn("buffer"),this._resourceType="buffer",this._resourceId=Qn("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const a=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:a,label:i},this.shrinkToFit=s??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&Nn.STATIC)}set static(t){t?this.descriptor.usage|=Nn.STATIC:this.descriptor.usage&=~Nn.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Qn("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function vp(e,t){if(!(e instanceof $a)){let n=t?Nn.INDEX:Nn.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=Nn.INDEX|Nn.COPY_DST):(e=new Float32Array(e),n=Nn.VERTEX|Nn.COPY_DST)),e=new $a({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function j5(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,s=1/0,a=-1/0,l=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let c=f;c<o.length;c+=h){const d=o[c],m=o[c+1];d>a&&(a=d),m>l&&(l=m),d<i&&(i=d),m<s&&(s=m)}return n.minX=i,n.minY=s,n.maxX=a,n.maxY=l,n}function K5(e){return(e instanceof $a||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=vp(e.buffer,!1),e}class wp extends wi{constructor(t={}){super(),this.uid=Qn("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new gi,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=K5(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=vp(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,j5(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var Sp=`in vec2 aPosition;
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
`,Q5=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,c1=`struct GlobalFilterUniforms {
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
}`;const _p=class Ap extends fe{constructor(t){t={...Ap.defaultOptions,...t};const n=ee.from({vertex:{source:c1,entryPoint:"mainVertex"},fragment:{source:c1,entryPoint:"mainFragment"}}),r=ie.from({vertex:Sp,fragment:Q5,name:"alpha-filter"}),{alpha:o,...i}=t,s=new Uu({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:s}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};_p.defaultOptions={alpha:1};let Z5=_p;const Tp={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},J5=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function tM(e){const t=Tp[e],n=t.length;let r=J5,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let s;for(let a=0;a<e;a++){let l=i.replace("%index%",a.toString());s=a,a>=n&&(s=e-a-1),l=l.replace("%value%",t[s].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const eM=`
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
    }`;function nM(e,t){const n=Math.ceil(e/2);let r=eM,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let s=0;s<e;s++){let a=i.replace("%index%",s.toString());a=a.replace("%sampleIndex%",`${s-(n-1)}.0`),o+=a,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function rM(e,t){const n=nM(t,e),r=tM(t);return ie.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var oM=`

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
}`;function iM(e,t){const n=Tp[t],r=n.length,o=[],i=[],s=[];for(let h=0;h<t;h++){o[h]=`@location(${h}) offset${h}: vec2<f32>,`,e?i[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:i[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const c=h<r?h:t-h-1,d=n[c].toString();s[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const a=o.join(`
`),l=i.join(`
`),u=s.join(`
`),f=oM.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return ee.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Rp=class Cp extends fe{constructor(t){t={...Cp.defaultOptions,...t};const n=rM(t.horizontal,t.kernelSize),r=iM(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=br.getSameSizeTexture(n);let s=n,a=i;this._state.blend=!1;const l=t.renderer.type===fu.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,s,a,u===0?!0:l);const f=a;a=s,s=f}this._state.blend=!0,t.applyFilter(this,s,r,o),br.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Rp.defaultOptions={strength:8,quality:4,kernelSize:5};let h1=Rp;var aM=`
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
`,d1=`struct GlobalFilterUniforms {
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
}`;class sM extends fe{constructor(t={}){const n=new Uu({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),r=ee.from({vertex:{source:d1,entryPoint:"mainVertex"},fragment:{source:d1,entryPoint:"mainFragment"}}),o=ie.from({vertex:Sp,fragment:aM,name:"color-matrix-filter"});super({...t,gpuProgram:r,glProgram:o,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let r=t;n&&(this._multiply(r,this.matrix,t),r=this._colorMatrix(r)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=r,this.resources.colorMatrixUniforms.update()}_multiply(t,n,r){return t[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],t[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],t[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],t[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],t[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],t[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],t[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],t[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],t[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],t[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],t[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],t[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],t[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],t[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],t[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],t[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],t[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],t[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],t[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],t[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}tint(t,n){const[r,o,i]=_n.shared.setValue(t).toArray(),s=[r,0,0,0,0,0,o,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(s,n)}greyscale(t,n){const r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const r=Math.cos(t),o=Math.sin(t),i=Math.sqrt,s=1/3,a=i(s),l=r+(1-r)*s,u=s*(1-r)-a*o,f=s*(1-r)+a*o,h=s*(1-r)+a*o,c=r+s*(1-r),d=s*(1-r)-a*o,m=s*(1-r)-a*o,p=s*(1-r)+a*o,y=r+s*(1-r),x=[l,u,f,0,0,h,c,d,0,0,m,p,y,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const r=(t||0)+1,o=-.5*(r-1),i=[r,0,0,0,o,0,r,0,0,o,0,0,r,0,o,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const r=t*2/3+1,o=(r-1)*-.5,i=[r,o,o,0,0,o,r,o,0,0,o,o,r,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,r,o,i){t||(t=.2),n||(n=.15),r||(r=16770432),o||(o=3375104);const s=_n.shared,[a,l,u]=s.setValue(r).toArray(),[f,h,c]=s.setValue(o).toArray(),d=[.3,.59,.11,0,0,a,l,u,t,0,f,h,c,n,0,a-f,l-h,u-c,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)}predator(t,n){const r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function m1(e,t,n,r,o,i,s,a){const l=s-n,u=a-r,f=o-n,h=i-r,c=e-n,d=t-r,m=l*l+u*u,p=l*f+u*h,y=l*c+u*d,x=f*f+h*h,b=f*c+h*d,M=1/(m*x-p*p),v=(x*y-p*b)*M,w=(m*b-p*y)*M;return v>=0&&w>=0&&v+w<1}const Pp=class Ip extends wp{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Vt(er,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...Ip.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),s=n.shrinkBuffersToFit,a=new $a({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:Nn.VERTEX|Nn.COPY_DST}),l=new $a({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:Nn.VERTEX|Nn.COPY_DST}),u=new $a({data:i,label:"index-mesh-buffer",shrinkToFit:s,usage:Nn.INDEX|Nn.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};Pp.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Op=Pp;class lM extends jh{constructor(...t){let n=t[0];n instanceof wp&&(Vt(er,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Vt(er,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:s,state:a,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??kt.WHITE,this.state=a??hp.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=s??!1}get material(){return Vt(er,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=kt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof Op?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const s=this.geometry.getIndex().data,a=s.length;for(let l=0;l+2<a;l+=i){const u=s[l]*2,f=s[l+1]*2,h=s[l+2]*2;if(m1(n,r,o[u],o[u+1],o[f],o[f+1],o[h],o[h+1]))return!0}}else{const s=o.length/2;for(let a=0;a+2<s;a+=i){const l=a*2,u=(a+1)*2,f=(a+2)*2;if(m1(n,r,o[l],o[l+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class uM{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new $e,this.observer=n,this.position=new bn(this,0,0),this.scale=new bn(this,1,1),this.pivot=new bn(this,0,0),this.skew=new bn(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const zp=class C0 extends jh{constructor(...t){let n=t[0]||{};n instanceof kt&&(n={texture:n}),t.length>1&&(Vt(er,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...C0.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:s,tileRotation:a,width:l,height:u,applyAnchorToTexture:f,roundPixels:h,...c}=n??{};super({label:"TilingSprite",...c}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new bn({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new uM({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=s,this.tileRotation=a,this.roundPixels=h??!1}static from(t,n={}){return typeof t=="string"?new C0({texture:Ui.get(t),...n}):new C0({texture:t,...n})}get uvRespectAnchor(){return Go("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){Go("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=kt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};zp.defaultOptions={texture:kt.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let fM=zp;const Fs=new Map;function cM(e,t){if(!Fs.has(e)){const n=new kt({source:new Kh({resource:e,...t})}),r=()=>{Fs.get(e)===n&&Fs.delete(e)};n.once("destroy",r),n.source.once("destroy",r),Fs.set(e,n)}return Fs.get(e)}const Fp=class Ep{constructor(t={}){if(this.uid=Qn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...Ep.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new nr({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof kt||t.depthStencilTexture instanceof nr?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new nr({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,s)=>{o&&s===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Fp.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let hM=Fp;class Jh extends kt{static create(t){return new Jh({source:new nr(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const td=class Lp{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...Lp.defaultOptions,...t},t.view&&(Vt(er,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new Kn(0,0,t.width,t.height),this.canvas=t.canvas||xi.get().createCanvas(),this.antialias=!!t.antialias,this.texture=cM(this.canvas,t),this.renderTarget=new hM({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};td.extension={type:[Je.WebGLSystem,Je.WebGPUSystem,Je.CanvasSystem],name:"view",priority:0};td.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let dM=td;vi.add(y3,g3);const Kt={},cs={},If=new Map,_r={},Gu={},kp=e=>(Gu[e]?"assets/pk/":"assets/")+e+".png";function Uc(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function mM(e){const t=window.MAP;Object.assign(Kt,window.META,t.decometa||{});for(const a of Object.keys(Kt)){const l=Kt[a].gear;if(l)for(const u in l)for(const f of l[u])Kt[a+"__"+u+f]=Kt[a]}try{Object.assign(Gu,await(await fetch("assets/pk/index.json")).json())}catch{}const n=Object.keys(Kt),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const s=()=>e(++i/o);await Promise.all([...n.map(async a=>{const l=await Uc(kp(a));if(_r[a]=l,l.naturalWidth){const u=kt.from(l);u.source.scaleMode="nearest",cs[a]=u}s()}),...r.map(async a=>{_r[a]=await Uc("assets/"+a+(a==="ground"?".webp":".png")),s()})])}function Nu(e){return!!cs[e]}function pM(){return Object.values(cs)}const p1=new Set;function Dp(e){cs[e]||p1.has(e)||!Kt[e]||(p1.add(e),nu("sheetLoad",1,e),Uc(kp(e)).then(t=>{if(_r[e]=t,t.naturalWidth){const n=kt.from(t);n.source.scaleMode="nearest",cs[e]=n}}))}function yM(e){for(const t of e){const n=Kt[t]&&Kt[t].gear;n&&n.w&&n.w.includes(0)&&Dp(t+"__w0")}}function Up(e,t,n,r){let o=0,i=0;if(e.anims&&t){const s=e.anims[t]||e.anims.idle||e.anims.walk||Object.values(e.anims)[0],a=e.dirs||1,l=a>=16?(n%16+16)%16:a>1?Math.round(n/2)%a:0;o=s.row+l,i=(r%s.n+s.n)%s.n}else e.frames&&e.frames>1&&(i=(r%e.frames+e.frames)%e.frames);return[o,i]}function Xp(e,t,n){const r=Kt[e],o=Gu[e];if(o){if(n>=o.cols||t>=o.rows)return null;const s=(t*o.cols+n)*6,a=o.f;return a[s+2]?[a[s],a[s+1],a[s+2],a[s+3],a[s+4],a[s+5]]:null}const i=_r[e];return!r||!i||(n+1)*r.fw>i.naturalWidth||(t+1)*r.fh>i.naturalHeight?null:[n*r.fw,t*r.fh,r.fw,r.fh,0,0]}const gM=null;function ai(e,t,n,r){const o=Kt[e],i=cs[e];if(o&&!i&&e.includes("__"))return Dp(e),null;if(!o||!i)return null;const[s,a]=Up(o,t,n,r),l=e+"|"+s+"|"+a;let u=If.get(l);if(u===void 0){const f=Xp(e,s,a);if(!f)return If.set(l,gM),null;u=Gu[e]?new kt({source:i.source,frame:new Kn(f[0],f[1],f[2],f[3]),orig:new Kn(0,0,o.fw,o.fh),trim:new Kn(f[4],f[5],f[2],f[3])}):new kt({source:i.source,frame:new Kn(f[0],f[1],o.fw,o.fh)}),If.set(l,u)}return u}function P0(e,t,n){const r=Kt[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function xM(){const e=_r.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),s=Math.min(t,e.naturalHeight-r),a=document.createElement("canvas");a.width=i,a.height=s,a.getContext("2d").drawImage(e,o,r,i,s,0,0,i,s);const l=kt.from(a);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const z=Math.round,ot=Math.PI*2,oe=e=>1-(1-e)*(1-e);function qn(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=z(n-s*o/2),u=z(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<a;h++){const c=t[h];for(let d=0;d<s;d++)c[d]===f&&e.fillRect(l+d*o,u+h*o,o,o)}}}function Wn(e){const t=Kt[e.sprite];return(t?t.ay:50)*(e.scale||1)/N.ZK}function He(e){const t=e.uid!==void 0?st(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const MM=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],bM={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function vM(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=g(-.35,.35);it.sfx("item_crit",t,n,.9),T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.55),u=Math.min(1,s*3.5);i.globalAlpha=s<.45?1:(1-s)/.55;for(let f=0;f<=26;f++){const h=f/26;if(h>u)break;const c=o-Math.PI/2+r*(-1.35+2.7*h),d=u-h,m=z(2+7*Math.sin(Math.PI*h));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(z(a+Math.cos(c)*36-m/2),z(l+10+Math.sin(c)*24-m/2),m,m)}if(s<.3){const f=1-s/.3,h=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(z(a-h),z(l)-1,z(h*2),3),i.fillRect(z(a)-1,z(l-h*.7),3,z(h*1.4)),i.fillStyle="#ff5a3a";for(let c=0;c<4;c++){const d=h*.55;i.fillRect(z(a+(c&1?d:-d)*.7)-2,z(l+(c&2?d:-d)*.5)-2,4,4)}}}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,s,a){const l=Math.min(1,s/.22),u=1.5-.95*l*l;if(!a.hit&&l>=1){a.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*ot,p=g(1.5,3.5);F(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*ot,p=g(1,2.5);F(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,g(1.5,3),.6,"#f2e4c4",2,9,!1)}et(4)}const[f,h]=P(t,n,u);i.globalAlpha=s<.6?1:(1-s)/.4;const c=l>=1&&s<.35?(Math.random()-.5)*3:0;qn(i,MM,f+c,h-6,3,bM)}})}function wM(e){const t=[e.x,e.y];for(const s of String(e.pts||"").split(";")){const a=s.split(",");a.length===2&&a[0]!==""&&t.push(+a[0],+a[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;it.sfx("item_chain",t[2],t[3],1),F(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),T({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(s,a,l){const u=a*i,f=Math.floor(S.T*28);for(;l.sp<n&&u>=l.sp*o;){const h=t[l.sp*2+2],c=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*ot,p=g(2,4.5);F(h,c,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}s.lineJoin="miter";for(let h=0;h<n;h++){const c=u-h*o;if(c<0)break;const d=Math.max(0,1-c/.38);if(d<=0)continue;const[m,p]=P(t[h*2],t[h*2+1],h?.5:.7),[y,x]=P(t[h*2+2],t[h*2+3],.5),b=y-m,M=x-p,v=Math.hypot(b,M)||1,w=-M/v,_=b/v,A=Math.min(16,4+v*.1),R=7;s.beginPath(),s.moveTo(m,p);for(let G=1;G<R;G++){const j=(W(r+h*31+G*7+f*13)-.5)*2*A;s.lineTo(m+b*G/R+w*j,p+M*G/R+_*j)}s.lineTo(y,x),s.globalAlpha=d*.4,s.strokeStyle="#5a7aff",s.lineWidth=8,s.stroke(),s.globalAlpha=d*.85,s.strokeStyle="#9ae0ff",s.lineWidth=3.5,s.stroke(),s.globalAlpha=d,s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke();const C=2+(W(r+h)*3|0),I=(W(r+h*31+C*7+f*13)-.5)*2*A,O=W(r+h*5+f)<.5?1:-1,E=m+b*C/R+w*I,U=p+M*C/R+_*I;if(s.beginPath(),s.moveTo(E,U),s.lineTo(E+w*O*12+b/v*7,U+_*O*12+M/v*7),s.lineTo(E+w*O*17+b/v*17,U+_*O*17+M/v*17),s.globalAlpha=d*.75,s.strokeStyle="#bfeaff",s.lineWidth=1.5,s.stroke(),c<.16){const G=1-c/.16,j=4+G*11;s.globalAlpha=G,s.fillStyle="#e8f6ff",s.fillRect(z(y-j),z(x)-1,z(j*2),3),s.fillRect(z(y)-1,z(x-j),3,z(j*2)),s.fillStyle="#7ac8ff",s.fillRect(z(y)-4,z(x)-4,8,8)}}}}),et(2)}const SM=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],_M={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function AM(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*ot;it.sfx("item_bash",t,n,1),T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,s,a){const l=Math.min(1,s/.24),u=1.9-1.35*l*l;if(!a.hit&&l>=1){a.hit=!0,T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,ft(t,n,.3+1.3*oe(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,ft(t,n,.25+.8*oe(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const y=o+p/7*ot;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,M=y+(W(o+p*9+x)-.5)*.7,[v,w]=P(t+Math.cos(M)*b,n+Math.sin(M)*b);x?d.lineTo(v,w):d.moveTo(v,w)}d.stroke()}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=P(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const M=b/10*ot;d.fillRect(z(p+Math.cos(M)*x)-2,z(y+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*ot,p=g(1.5,4);F(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,g(.6,1.8),g(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*ot,p=g(1,3);F(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,g(2,4),.8,"#7a7468",3,12,!1)}et(5)}const[f,h]=P(t,n,u),c=l>=1&&s<.34?2:0;i.globalAlpha=s<.6?1:(1-s)/.4,i.translate(z(f),z(h-14+c)),i.rotate(r*.9*(1-l)),qn(i,SM,0,0,3,_M)}})}function TM(e,t,n,r,o){for(let i=0;i<9;i++){const s=r*6+i*.7+o,a=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(z(t+Math.cos(s)*a)-1,z(n-4+Math.sin(s)*a*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const s=-r*4+i*Math.PI,a=z(t+Math.cos(s)*18),l=z(n-2+Math.sin(s)*5);e.fillStyle="#ff9a3a",e.fillRect(a-3,l-1,7,3),e.fillRect(a-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(a,l,1,1)}}const RM=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],CM={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function PM(e){it.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;T({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){He(o);const i=.32,s=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let a=0;a<14;a++){const l=a/14*ot+t,u=s*(.65+.35*W(t+a)),[f,h]=P(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[c,d]=P(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,p]=P(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=a%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,h),n.lineTo(m,p),n.lineTo(c,d),n.closePath(),n.fill()}ft(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),s=i?Wn(i):.8,a=r<.06?2:r<.14?4:3,[l,u]=P(o.x,o.y,s+.32+r*.15),f=r<.7?1:(1-r)/.3;vt(!0);const h=Wt();h.globalAlpha=f*(.35+.2*Math.sin(r*40)),h.fillStyle="#ff2a1a",h.fillRect(z(l-22),z(u-18),44,36),h.globalAlpha=1,vt(!1),n.globalAlpha=f,qn(n,RM,l,u,a,CM)}});for(let n=0;n<26;n++)F(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.1,.6),g(-.4,.4),g(-.4,.4),g(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);et(3)}const IM=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],OM={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function zM(e){it.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;T({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),s=i?Wn(i):.8,[a,l]=P(o.x,o.y,s+.45),u=P(o.x,o.y,0)[1],f=t*1.9*oe(Math.min(1,r/.3)),h=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const c=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,y=a+m*c-p*d,x=l+m*d+p*c,b=r<.7?3:2;n.globalAlpha=h;for(let M=0;M<=14;M++){const v=M/14,w=x+(u-x)*v,_=y+Math.sin(S.T*22+M)*1.5+t*v*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(z(_)-1,z(w),b,z((u-x)/14)+1)}Math.random()<.6&&F(o.x+g(-.2,.2),o.y+g(-.2,.2),.02,g(-1,1),g(-1,1),g(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=h,n.translate(z(a),z(l)),n.rotate(f),qn(n,IM,0,0,3,OM)}}),T({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*oe(Math.min(1,r/.45)),s=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=s,ft(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=s*.6,ft(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function FM(e,t,n){const[r,o]=P(t.x,t.y,Wn(t)*.55),i=t.scale||1;for(let s=0;s<4;s++){const a=n*3.2+s*ot/4+t.id,l=z(r+Math.cos(a)*22*i),u=z(o+Math.sin(a)*8*i+Math.sin(n*5+s)*2);e.globalAlpha=Math.sin(a)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&F(t.x+g(-.3,.3),t.y+g(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function EM(e){it.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,s){const a=st(s.uid);a&&!a.dead&&(s.ex=a.x,s.ey=a.y);const[l,u]=P(t,n,.5),[f,h]=P(s.ex,s.ey,.6),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const M=(b-1)*.9+.3*Math.sin(r+b),v=Math.min(1,i*1.4-b*.1);if(!(v<=0))for(let w=0;w<7;w++){const _=v-w*.045;if(_<0)break;const A=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+b*2+S.T*10)*3,R=l+c*_+p*A,C=u+d*_+y*A-Math.sin(_*Math.PI)*14,I=w===0?4:w<3?3:2;o.globalAlpha=(1-w/7)*x,w===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(z(R-5),z(C-5),10,10),o.globalAlpha=x),o.fillStyle=w===0?"#ff8a96":w<3?"#e0203a":"#8a0a1e",o.fillRect(z(R-I/2),z(C-I/2),I,I)}}if(!s.pop&&i>.72){s.pop=!0;for(let b=0;b<4;b++)F(s.ex+g(-.2,.2),s.ey+g(-.2,.2),.6,0,0,g(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const ji=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function LM(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;it.sfx("item_hex",t,n,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(s,a){const[l,u]=P(r,o,.7),[f,h]=P(t,n,.7),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=Math.min(1,a*2.6);s.globalAlpha=a<.6?1:(1-a)/.4;for(let b=0;b<=30;b++){const M=b/30;if(M>x)break;const v=Math.sin(M*ot*2.5-a*9)*8*(1-M*.6);s.fillStyle=ji[(b+(a*24|0))%3],s.fillRect(z(l+c*M+p*v)-1,z(u+d*M+y*v)-1,3,3)}}}),T({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(s,a,l){const[u,f]=P(t,n,.6),h=Math.min(1,a/.42),c=a<.55?1:(1-a)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);vt(!0);const m=Wt();for(let x=0;x<20;x++){const b=h-x*.025;if(b<0)break;const M=d(b),v=z(5-x*.2);m.globalAlpha=(1-x/20)*c,m.fillStyle=ji[x<3?0:x<9?1:2],m.fillRect(z(u+Math.cos(M)*42-v/2),z(f+Math.sin(M)*24-v/2),v,v)}m.globalAlpha=1,vt(!1),s.globalAlpha=c;const p=d(h);for(let x=0;x<11;x++){const b=p-i*x*.07,M=1+x*.55,v=42-M/2,w=u+Math.cos(b)*v,_=f+Math.sin(b)*v*.58;s.fillStyle="#2a1040",s.fillRect(z(w-M/2),z(_-M/2),z(M)+1,z(M)+1),s.fillStyle="#f0e0ff",s.fillRect(z(u+Math.cos(b)*43)-1,z(f+Math.sin(b)*25)-1,2,2)}const y=p-i*.75;for(let x=38;x>10;x-=2)s.fillStyle=x%4?"#4a2a18":"#6a4024",s.fillRect(z(u+Math.cos(y)*x)-1,z(f+Math.sin(y)*x*.58)-1,3,3);if(!l.poof&&a>=.36){l.poof=!0;for(let x=0;x<9;x++)T({type:"puff",x:t+g(-.5,.5),y:n+g(-.5,.5),r:g(14,24),dur:g(.6,1),col:[176,128,236]});T({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*ot,M=g(1,3);F(t,n,.6,Math.cos(b)*M,Math.sin(b)*M,g(.5,2.5),.6,ji[x%4],3,1,!0)}for(let x=0;x<6;x++)F(t+g(-.3,.3),n+g(-.3,.3),.3,0,0,g(.8,1.6),.7,"#a8e070",3,-.5,!1);et(3)}}})}function kM(e,t){const[n,r]=P(e.x,e.y,Wn(e)+.22+Math.sin(t*3+e.id)*.03);vt(!0);const o=Wt();for(let i=0;i<12;i++){const s=t*5+i*.55+e.id,a=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=ji[i%3],o.fillRect(z(n+Math.cos(s)*a)-1,z(r+Math.sin(s)*a*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const s=-t*2.5+i*Math.PI,a=z(n+Math.cos(s)*16),l=z(r+4+Math.sin(s)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=ji[0],o.fillRect(a-2,l,5,1),o.fillRect(a,l-2,1,5)}o.globalAlpha=1,vt(!1),Math.random()<.1&&F(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,g(.6,1.2),.6,ji[2],2,-.3,!0)}function DM(e){for(let t=0;t<5;t++)T({type:"puff",x:e.x+g(-.35,.35),y:e.y+g(-.35,.35),r:g(12,20),dur:g(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*ot,r=g(1,2.5);F(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,2),.5,ji[t%3],2,1,!0)}}const wo=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],UM=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],XM={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function GM(e){it.sfx("item_refresh",e.x,e.y,1),T({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){He(r);const o=.45+.85*oe(n),[i,s]=P(r.x,r.y),a=o*N.HW*Math.SQRT2*1.08,l=o*N.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,ft(r.x,r.y,o,wo[1],null,3),t.fillStyle=wo[2];for(let u=0;u<16;u++){const f=u/16*ot-n*5;t.fillRect(z(i+Math.cos(f)*a)-2,z(s+Math.sin(f)*l)-2,5,4)}ft(r.x,r.y,o*.6,wo[0],null,1.5,[4,4])}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),[i,s]=P(r.x,r.y,(o?Wn(o):.8)*.55),a=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*ot-n*6,f=l%2===0,h=f?4:2;t.fillStyle=f?wo[0]:wo[2],t.fillRect(z(i+Math.cos(u)*a)-h/2,z(s+Math.sin(u)*a)-h/2,h,h)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?wo[1]:wo[0];for(let h=3;h<f;h+=2)t.fillRect(z(i+Math.cos(u)*h)-1,z(s+Math.sin(u)*h)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,T({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:wo[1],w:4});for(let l=0;l<20;l++)F(r.x+g(-.4,.4),r.y+g(-.4,.4),g(.2,.9),g(-.6,.6),g(-.6,.6),g(1.5,3),.6,wo[l%3],3,0,!0)}}}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),[i,s]=P(r.x,r.y,(o?Wn(o):.8)*.55),a=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(z(i),z(s)),t.rotate(Math.PI*a*a*(3-2*a)),qn(t,UM,0,0,3,XM)}}),et(2)}function Gp(e,t,n,r,o){const i=z(t),s=z(n);e.fillStyle=r,e.fillRect(i-3,s,2,3),e.fillRect(i+1,s,2,3),e.fillRect(i-2,s+2,4,2),e.fillStyle=o,e.fillRect(i-1,s+2,2,1)}function NM(e){it.sfx("item_immune",e.x,e.y,1);const t=Math.random()*ot;T({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),[s,a]=P(o.x,o.y,(i?Wn(i):.8)*.45),l=oe(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const h=f/18*ot+t+(1-l)*1.5,c=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),Gp(n,s+Math.cos(h)*c,a+Math.sin(h)*c*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(s,a,32*u+6*(1-f),38*u+6*(1-f),0,0,ot),n.stroke()}}}),T({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)F(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);et(2)}function BM(e,t){const n=e.scale||1,[r,o]=P(e.x,e.y,Wn(e)*.45),i=30*n,s=36*n;vt(!0);const a=Wt();a.globalAlpha=.5+.1*Math.sin(t*4),a.strokeStyle="#ffcc40",a.lineWidth=2,a.fillStyle="rgba(255,200,60,0.07)",a.beginPath(),a.ellipse(r,o,i,s,0,0,ot),a.fill(),a.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,h=i*Math.sqrt(Math.max(0,1-f/s*(f/s)))-4;for(let c=-h+(u&1?5:0);c<=h;c+=10){const d=Math.max(0,1-Math.abs(c-l+f*.5)/16);a.globalAlpha=.16+.6*d,Gp(a,r+c,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}a.globalAlpha=1,vt(!1)}function $M(e){it.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*ot+g(-.25,.25),t[r*4+1]=g(.8,1.6),t[r*4+2]=g(-14,14),t[r*4+3]=g(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*ot+g(-.4,.4);T({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=He(i),[a,l]=P(i.x,i.y,(s?Wn(s):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(a,l,16*f,0,ot),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(a,l,13*f,0,ot),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(a-2*f,l,8*f,0,ot),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(a+2*f,l-2*f,7*f,0,ot),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(a,l),r.lineTo(a+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(a+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}vt(!0);const h=Wt(),c=a-14+o/.45*28;h.globalAlpha=.8,h.fillStyle="#ffffff";for(let d=-3;d<=3;d++)h.fillRect(z(c+d*.6),z(l+d*3)-1,2,3);vt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const h=Math.random()*ot,c=g(1.5,3.5);F(i.x,i.y,.7,Math.cos(h)*c,Math.sin(h)*c,g(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){vt(!0);const f=Wt();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const h=10+u*60;f.fillRect(z(a-h),z(l)-1,z(h*2),3),f.fillRect(z(a)-1,z(l-h*.6),3,z(h*1.2)),vt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const h=t[f*4],c=u*t[f*4+1]*40,d=t[f*4+3],m=a+Math.cos(h)*(c+8),p=l+Math.sin(h)*(c+8)*.7+u*u*50,y=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(y),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const Kl=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function HM(e){it.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,s=Math.random()*9,a=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;T({type:"ring",x:t,y:n,r:.8,dur:.35,col:Kl[1],w:4});for(let h=0;h<8;h++)F(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(.3,1),.5,"#c8b48a",3,3,!1);T({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(h,c){const d=c*a,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[y,x]=P(t,n,.3),[b,M]=P(r,o,.3),v=(u-f)*N.HW,w=(u+f)*N.HH;for(let _=0;_<5;_++){const A=(_-2)*.22,R=(_-2)*6;for(let C=p;C<=m;C+=.025){const I=A+Math.sin(C*18+_*1.3+s)*.08,O=(C-p)/(m-p);h.globalAlpha=O*(_===2?1:.7),h.fillStyle=Kl[O>.85?0:_===2?1:2],h.fillRect(z(y+(b-y)*C+v*I)-1,z(x+(M-x)*C+w*I+R)-1,3,2)}}for(let _=0;_<3;_++){const A=.25+_*.3;if(A<p||A>m)continue;const R=y+(b-y)*A+v*(_-1)*.35,C=x+(M-x)*A+w*(_-1)*.35-10;h.globalAlpha=1-(A-p)/Math.max(.01,m-p)*.5;for(let I=0;I<9;I++){const O=S.T*9+I*.75+_,E=2+I*1.2;h.fillStyle=Kl[I<3?0:1],h.fillRect(z(R+Math.cos(O)*E)-1,z(C+Math.sin(O)*E*.6)-1,2,2)}}}});for(let h=0;h<14;h++){const c=Math.random();F(t+(r-t)*c,n+(o-n)*c,g(.1,.6),(r-t)/l*g(1,3),(o-n)/l*g(1,3),g(.2,1),g(.4,.8),Kl[h%3],2,0,!0)}}const Of=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function WM(e,t){const[r,o]=P(e.x,e.y),i=2.8*N.HW*Math.SQRT2,s=2.8*N.HH*Math.SQRT2;vt(!0);const a=Wt();a.globalAlpha=.07,a.fillStyle="#ff8a2a",a.beginPath(),a.ellipse(r,o,i*.97,s*.97,0,0,ot),a.fill(),a.globalAlpha=.22+.06*Math.sin(t*3+e.id),a.strokeStyle="#ff9a3a",a.lineWidth=2,a.setLineDash([10,7]),a.lineDashOffset=-t*24,a.beginPath(),a.ellipse(r,o,i,s,0,0,ot),a.stroke(),a.setLineDash([]),a.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*ot+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),h=z(3+f*4);a.globalAlpha=.25+.45*f,a.fillStyle=f>.75?Of[0]:Of[1],a.fillRect(z(r+Math.cos(u)*i)-2,z(o+Math.sin(u)*s)-h,4,h)}if(a.globalAlpha=1,vt(!1),Math.random()<.35){const l=Math.random()*ot,u=Math.sqrt(Math.random())*2.8;F(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,g(.8,1.6),g(.6,1),Of[Math.random()*4|0],2,-.3,!0,.97)}}const hs={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},y1={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},dl=2,zf={};function Np(e,t){const n=e+(t?"o":"c");if(zf[n])return zf[n];let r=hs[e]||hs.obs;const o=y1[e]||y1.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const s=document.createElement("canvas");s.width=r[0].length*dl,s.height=r.length*dl;const a=s.getContext("2d");return qn(a,r,s.width/2,s.height/2,dl,o),zf[n]=s}function ed(e){const t=hs[e]||hs.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*dl}function Bu(e,t){return(t+e.id*1.37)%4.2>.14}function qM(e,t,n){const r=S.T,o=Wt(),i=window.SIM;if(o.globalAlpha=.35,ft(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const s=Math.max(0,e.until-n),a=e.kind==="obs"?360:300,[l,u]=P(e.x,e.y);o.globalAlpha=s<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*N.HW*Math.SQRT2,.34*N.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+ot*Math.min(1,s/a)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&ft(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),ft(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function VM(e,t){const n=S.T,[r,o]=P(e.x,e.y),i=o-ed(e.kind);if(Bu(e,n)){vt(!0);const s=Wt(),a=.6+.4*Math.sin(n*3+e.id);s.globalAlpha=.25*a,s.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",s.fillRect(z(r)-7,z(i)-5,14,10),s.globalAlpha=.6*a,s.fillRect(z(r)-3,z(i)-2,6,4),s.globalAlpha=1,vt(!1)}if(!t){const s=Wt(),a=z(o-(hs[e.kind]||hs.obs).length*dl-8+Math.sin(n*5)*2),l=z(r);s.fillStyle="#120c1a",s.fillRect(l-5,a-2,11,4),s.fillRect(l-3,a+2,7,2),s.fillRect(l-1,a+4,3,2),s.fillStyle="#ff4a3a",s.fillRect(l-4,a-1,9,2),s.fillRect(l-2,a+1,5,2),s.fillRect(l,a+3,1,2)}}function YM(e,t,n,r){const o=Np(t,!0),[i,s]=P(n,r);e.globalAlpha=.6+.15*Math.sin(S.T*6),e.drawImage(o,z(i-o.width/2),z(s-o.height)),e.globalAlpha=1}function jM(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;it.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)F(r,o,.05,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);T({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,s){const[a,l]=P(r,o),u=l-ed(t?"obs":"sen"),f=6+26*oe(s),h=10*Math.sin(Math.min(1,s*2.2)*Math.PI*.5)*(1-s*.5);i.globalAlpha=1-s,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let c=-8;c<=8;c++){const d=c/8,m=h*(1-d*d);i.fillRect(z(a+d*f)-1,z(u-m)-1,3,2),i.fillRect(z(a+d*f)-1,z(u+m)-1,3,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,s){i.globalAlpha=.5*(1-s),ft(r,o,(t?n.WARD_VISION:n.SENTRY_R)*oe(s),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)F(r+g(-.15,.15),o+g(-.15,.15),.5,0,0,g(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function KM(e){const t=e.kind!=="sen",n=e.x,r=e.y;it.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*ot,s=g(1,3);F(n,r,g(.2,.5),Math.cos(i)*s,Math.sin(i)*s,g(1.5,3.5),g(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)T({type:"puff",x:n+g(-.3,.3),y:r+g(-.3,.3),r:g(10,16),dur:g(.5,.8),col:[150,140,130]});T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[s,a]=P(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*ot+i*2;o.fillRect(z(s+Math.cos(f)*l)-1,z(a+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(z(s)-3,z(a)-3,6,6))}})}const Al=["#fff2c8","#ffd080","#ffa040","#c86a10"];function QM(e){it.sfx("mon_howl",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),[s,a]=P(o.x,o.y,(i?Wn(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?Al[1]:Al[0];for(let h=-Math.PI*.86;h<=-Math.PI*.14;h+=.1)n.fillRect(z(s+Math.cos(h)*f)-1,z(a+Math.sin(h)*f*.7)-1,3,2)}}}),T({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=S.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||T({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const s=st(i.uid);if(!s||s.dead||We(s))return;const a=S.T,[l,u]=P(s.x,s.y,Wn(s)*.72),f=o>.85?(1-o)/.15:1,h=.7+.3*Math.sin(a*14+s.id),c=s.scale||1;r.globalAlpha=.35*f*h,r.fillStyle="#ff2010",r.fillRect(z(l-9*c),z(u-4),z(18*c),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(z(l-5*c)-1,z(u)-1,3,2),r.fillRect(z(l+5*c)-1,z(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(z(l-5*c),z(u)-1,1,1),r.fillRect(z(l+5*c),z(u)-1,1,1),Math.random()<.12&&F(s.x+g(-.3,.3),s.y+g(-.3,.3),.3,0,0,g(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function ZM(e){const t=S.T,n=Wt(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,ft(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let a=0;a<10;a++){const l=W(i*7+a),u=W(i*3+a*5),f=l*ot+t*.25*(a%2?1:-1),h=e.r*(.2+.6*u),[c,d]=P(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.15+.1*Math.sin(t+a)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+a))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=a%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(c,d,m,m*.6,0,0,ot),n.fill()}vt(!0);const s=Wt();for(let a=0;a<9;a++){const l=(t*.45+W(i+a*11))%1,u=W(i*5+a)*ot,f=e.r*.8*W(i+a*3),[h,c]=P(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);s.globalAlpha=Math.sin(l*Math.PI)*o,s.fillStyle=a%2?"#e0b8ff":"#d8ffa0",s.fillRect(z(h)-1,z(c)-1,2,2)}s.globalAlpha=1,vt(!1),n.globalAlpha=1}function JM(e){it.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;T({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,ft(e.x,e.y,t*oe(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,ft(e.x,e.y,t*.7*oe(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*ot,o=g(.5,1.6)*t;F(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function tb(e){it.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*ot;T({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,s){i.globalAlpha=(1-s)*.8,ft(t,n,r*oe(Math.min(1,s*4)),"#6a4a24",null,5*(1-s)+1),i.globalAlpha=(1-s)*.35,ft(t,n,r,null,"#3a2814"),i.globalAlpha=1-s,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let a=0;a<10;a++){const l=o+a/10*ot;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,h=l+(W(o+a*9+u)-.5)*.5,[c,d]=P(t+Math.cos(h)*f,n+Math.sin(h)*f);u?i.lineTo(c,d):i.moveTo(c,d)}i.stroke()}}}),T({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,s){const a=s<.15?oe(s/.15):s>.7?(1-s)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*ot,h=u?r*(.85+.15*W(o+l)):r*.45,[c,d]=P(t+Math.cos(f)*h,n+Math.sin(f)*h),m=(u?34:24)*a*(.8+.4*W(o+l*3)),p=(W(o+l*7)-.5)*22,y=c+p,x=d-m,b=c-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(c,d),i.quadraticCurveTo(b,M,y,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(z(y)-2,z(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(z(y),z(x)-2,2,1)}}});for(let i=0;i<30;i++){const s=Math.random()*ot,a=g(.5,2.5);F(t+Math.cos(s)*r*.8,n+Math.sin(s)*r*.8,.1,Math.cos(s)*a,Math.sin(s)*a,g(1,3),g(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}et(6)}const eb=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],nb={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function rb(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(it.sfx("camp_"+t,e.x,e.y,1),t==="pack"){T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),[s,a]=P(o.x,o.y,(i?Wn(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,qn(n,eb,s,a,r<.1?2:3,nb);const[l,u]=P(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=Al[1];for(let f=-1;f<=1;f++)for(let h=0;h<8;h++)n.fillRect(z(l+f*8-10+h*3),z(u-12+h*3),2,2)}}});for(let n=0;n<18;n++)F(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(1,2.2),.8,Al[n%4],3,0,!0)}else if(t==="spore"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=He(o),[s,a]=P(o.x,o.y,(i?Wn(i):.8)*.5),l=oe(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*ot+l*5,h=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(z(s+Math.cos(f)*h)-2,z(a+Math.sin(f)*h*.6)-2,4,4)}}}),T({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)T({type:"puff",x:e.x+g(-.6,.6),y:e.y+g(-.6,.6),r:g(8,14),dur:g(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=He(i),[a,l]=P(i.x,i.y,(s?Wn(s):.8)*.4),u=oe(Math.min(1,o/.45)),f=s&&s.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let h=0;h<10;h++){const c=h/10*ot,d=(70*(1-u)+24)*f,m=z(a+Math.cos(c)*d),p=z(l+Math.sin(c)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,et(2);for(let h=0;h<10;h++)F(i.x+g(-.4,.4),i.y+g(-.4,.4),.4,g(-1,1),g(-1,1),g(1,2),.6,h%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function ob(e,t,n){if(t.camp_bark){const[r,o]=P(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,s=i*N.HW*Math.SQRT2,a=i*N.HH*Math.SQRT2,l=Wt();for(let u=0;u<12;u++){const f=u/12*ot;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(z(r+Math.cos(f)*s)-2,z(o+Math.sin(f)*a)-1,4,3)}}if(t.camp_pack){vt(!0);const r=Wt(),[o,i]=P(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=Al[2];for(let s=0;s<3;s++){const a=n*.8+s*ot/3,l=o+Math.cos(a)*26,u=i+Math.sin(a)*13;for(let f=-1;f<=1;f++)for(let h=0;h<4;h++)r.fillRect(z(l+f*4-4+h*2),z(u-3+h*2),2,1)}r.globalAlpha=1,vt(!1)}if(t.camp_spore){vt(!0);const r=Wt(),[o,i]=P(e.x,e.y,Wn(e)*.5);for(let s=0;s<4;s++){const a=n*(.9+s*.2)+s*1.7+e.id,l=o+Math.cos(a)*20+Math.sin(n*1.7+s)*5,u=i+Math.sin(a*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+s),r.fillStyle=s%2?"#e0b8ff":"#c8f090",r.fillRect(z(l)-1,z(u)-1,2,2)}r.globalAlpha=1,vt(!1)}}function ds(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function Ln(e){return Wn(e)*.68}const I0=(e,t,n,r)=>!!t[n],ib=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],ab={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},Ff=["#ff5a6a","#5ab4ff"];function sb(e){it.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*ot,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*ot+g(-.25,.25),r[o*3+1]=g(24,48),r[o*3+2]=o/t*.2;T({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const a=He(s),[l,u]=P(s.x,s.y,(a?Ln(a):.6)+.22),f=l+20,h=i<.28?-.8+1.7*oe(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(z(f),z(u)),o.rotate(h),qn(o,ib,0,0,3,ab)}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const a=He(s),l=a?Ln(a):.6,[u,f]=P(s.x,s.y,l+.45),h=u+30,[c,d]=P(s.x,s.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(z(h-p),z(f)-1,z(p*2),2),o.fillRect(z(h)-1,z(f-p),2,z(p*2))}}for(let m=0;m<t;m++){const p=Ff[m&1];for(let y=2;y>=0;y--){const x=(i-.24-r[m*3+2])/.58-y*.035;if(x<=0||x>1)continue;const b=r[m*3],M=Math.sin(x*Math.PI),v=h+(c-h)*x+Math.cos(b)*34*M,w=f+(d-f)*x+Math.sin(b)*12*M-r[m*3+1]*M;if(y){o.globalAlpha=.5/y,o.fillStyle=p,o.fillRect(z(v)-1,z(w)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(z(v)-4,z(w)-4,8,8),o.globalAlpha=1,o.fillRect(z(v)-2,z(w)-2,4,4),o.fillStyle="#ffffff",o.fillRect(z(v)-1,z(w)-2,2,1)}}!s.land&&i>.84&&(s.land=!0,T({type:"custom",layer:"ground",add:!0,dur:.55,x:s.x,y:s.y,uid:s.uid,draw(m,p,y){He(y),m.globalAlpha=1-p,m.lineDashOffset=p*30,ft(y.x,y.y,.35+.5*oe(p),Ff[0],null,3,[5,5]),m.lineDashOffset=-p*30,ft(y.x,y.y,.3+.42*oe(p),Ff[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),Mt(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const fi=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function lb(e){it.sfx("item_phase",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),i=o&&o.scale||1,s=P(r.x,r.y,0)[1],a=P(r.x,r.y,(o?Ln(o):.8)*1.05)[1],l=P(r.x,r.y)[0],u=8,f=1-n,h=z(26*i);for(let c=0;c<u;c++){const d=z(a+(s-a)*(c+.5)/u),m=Math.sin(c*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=fi[1],t.fillRect(z(l-h/2+m-3),d-1,h,3),t.fillStyle=fi[2],t.fillRect(z(l-h/2-m+3),d-1,h,3)}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){He(r);const o=.28*oe(n),i=.45+.45*n;t.globalAlpha=1-n,ft(r.x-o,r.y+o,i,fi[1],null,2),ft(r.x+o,r.y-o,i,fi[2],null,2)}}),Mt(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function ub(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,s=Math.hypot(o,i);if(s<.003||s>1)return;const a=o/s,l=i/s,[u,f]=P(e.x,e.y),[h,c]=P(e.x-a,e.y-l),d=Math.hypot(h-u,c-f)||1,m=(h-u)/d,p=(c-f)/d,y=Ln(e)*N.ZK,x=e.scale||1;vt(!0);const b=Wt();for(let M=0;M<5;M++){const v=y*(.15+M*.17),w=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,A=f-v+p*8;for(let R=0;R<w;R+=2){const C=1-R/w;b.globalAlpha=.55*C,b.fillStyle=fi[1],b.fillRect(z(_+m*R),z(A+p*R)-2,2,1),b.fillStyle=fi[2],b.fillRect(z(_+m*R),z(A+p*R)+1,2,1)}}if(b.globalAlpha=1,vt(!1),Math.random()<.35){const M=Math.random()<.5;F(e.x-a*.2+(M?.06:-.06),e.y-l*.2-(M?.06:-.06),.02,0,0,0,.45,M?fi[1]:fi[2],3,0,!0)}}const ti=["#ffffff","#a8d0ff","#4a8aff","#26349a"],Ql=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function Xc(e,t,n,r,o){const i=Ql[(r%Ql.length+Ql.length)%Ql.length],s=z(t)-o*1.5,a=z(n)-o*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(s+u*o,a+l*o,o,o)}const fb=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],cb={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function hb(e){it.sfx("item_arcane",e.x,e.y,1);const t=e.radius||ds("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(s,a,l){He(l);const u=Math.min(1,a/.12),f=.95*u,[h,c]=P(l.x,l.y),d=f*.8*N.HW*Math.SQRT2,m=f*.8*N.HH*Math.SQRT2;s.globalAlpha=a<.7?1:(1-a)/.3,ft(l.x,l.y,f,ti[1],null,2),ft(l.x,l.y,f*.62,ti[2],null,2),s.fillStyle=ti[0];for(let p=0;p<10;p++){const y=p/10*ot+a*2.4;Xc(s,h+Math.cos(y)*d,c+Math.sin(y)*m,p,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(s,a){const l=t*oe(a),[u,f]=P(n,r),h=l*N.HW*Math.SQRT2,c=l*N.HH*Math.SQRT2,d=40;s.globalAlpha=(1-a)*.35,ft(n,r,l,ti[2],null,2),s.globalAlpha=1-a*a;for(let m=0;m<d;m++){const p=m/d*ot;s.fillStyle=m%4?ti[1]:ti[0],Xc(s,u+Math.cos(p)*h,f+Math.sin(p)*c,m*7+(a*12|0),2)}}});const i=S.game;if(i)for(const s of i.heroes||[]){if(s.dead||s.team!==e.team)continue;const a=Math.hypot(s.x-n,s.y-r);a>t||T({type:"custom",layer:"top",dur:.7,delay:oe(a/t)*o*.85,x:s.x,y:s.y,uid:s.id,draw(l,u,f){const h=He(f),c=h?Ln(h):.8,d=Math.min(1,u/.4),[m,p]=P(f.x,f.y,c+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),qn(l,fb,m,p,2,cb);return}const y=(u-.4)/.6;l.globalAlpha=1-y,l.fillStyle=ti[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),M=4+y*14;l.fillRect(z(m+Math.cos(b)*M)-1,z(p+Math.sin(b)*M*.8+y*y*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)F(f.x+g(-.2,.2),f.y+g(-.2,.2),c*.8,0,0,g(-.6,-.2),.5,ti[x%3],2,0,!0)}}})}Mt(n,r,2.6,5933823,.85,1),et(2)}const db=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],mb={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},pb=[0,1,2,3].map(e=>db.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function yb(e){it.sfx("item_clarity",e.x,e.y,1),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),[i,s]=P(r.x,r.y,(o?Ln(o):.6)*.85+Math.min(1,n*5)*.08),a=i+26*(o&&o.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(z(a),z(s)),t.rotate(-l),qn(t,pb[u],0,0,3,mb),!r.pop&&n>.12&&(r.pop=!0,F(r.x,r.y,(o?Ln(o):.8)+.5,g(-.6,.6),g(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),T({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),i=o?Ln(o):.8,s=o&&o.scale||1;for(let a=0;a<8;a++){const l=n*1.6-a*.075;if(l<0||l>1)continue;const u=a*2.4+l*4,[f,h]=P(r.x,r.y,i*(.1+l*1.1)),c=z(f+Math.cos(u)*20*s),d=z(h+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(c-1,d-2,3,1),t.fillRect(c-1,d+2,3,1),t.fillRect(c-2,d-1,1,3),t.fillRect(c+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(c-1,d-1,1,1)):(t.fillRect(c-3,d,2,1),t.fillRect(c+2,d,2,1),t.fillRect(c,d-3,1,2),t.fillRect(c,d+2,1,2))}}}),Mt(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const gb=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],xb={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},Zl=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function Mb(e){it.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;T({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(s,a,l){const u=a*l.dur;if(u<o){const p=u/o,[y,x]=P(t,n,.9+p*(2.1-p)*1.2);s.translate(z(y),z(x)),s.rotate(p*7),qn(s,gb,0,0,3,xb);return}const f=(u-o)/.25,[h,c]=P(t,n,2.2);if(!l.burst){l.burst=!0,et(2);for(let p=0;p<70;p++){const y=Math.random()*ot,x=g(.5,3.4);F(t,n,2.2,Math.cos(y)*x,Math.sin(y)*x,g(-.4,1),g(1.1,1.8),Zl[p%4],p%5?2:3,1.4,!0,.95)}}vt(!0);const d=Wt();d.globalAlpha=1-f,d.fillStyle=Zl[1];const m=6+f*30;d.fillRect(z(h-m),z(c)-1,z(m*2),2),d.fillRect(z(h)-1,z(c-m),2,z(m*2)),d.fillRect(z(h)-4,z(c)-4,8,8),vt(!1)}}),T({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(s,a){const l=r*oe(a),[u,f]=P(t,n),h=l*N.HW*Math.SQRT2,c=l*N.HH*Math.SQRT2,d=72,m=Math.floor(S.T*20);for(let p=0;p<d;p++){const y=W(i+p*3+m);if(y<.3)continue;const x=p/d*ot+W(i+p)*.08,b=1-W(i+p*7)*.06;s.globalAlpha=(1-a)*y,s.fillStyle=Zl[p%4];const M=y>.85?3:2;s.fillRect(z(u+Math.cos(x)*h*b)-1,z(f+Math.sin(x)*c*b)-1,M,M)}}}),T({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(s,a){const l=a*1.8;for(let u=0;u<26;u++){const f=W(i+u*11)*ot,h=Math.sqrt(W(i+u*5))*r,c=oe(h/r)*.9+W(i+u)*.3,d=(l-c)/.5;if(d<0||d>1)continue;const[m,p]=P(t+Math.cos(f)*h,n+Math.sin(f)*h,.3+W(i+u*13)*.8),y=z(2+5*Math.sin(d*Math.PI));s.globalAlpha=Math.sin(d*Math.PI),s.fillStyle=Zl[u%4],s.fillRect(z(m)-y,z(p),y*2+1,1),s.fillRect(z(m),z(p)-y,1,y*2+1)}}}),Mt(t,n,3,16773312,.9,.6,{delay:o})}const bb=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],vb={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function wb(e){it.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;T({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,s,a){const l=st(a.uid),u=l&&!l.dead?Ln(l):.8,[f,h]=P(t,n,u*.55),c=S.T;if(s<.3){vt(!0);const d=Wt(),m=s/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const y=36-p*8;d.fillRect(z(f-r*(10+p*8+m*10)),z(h-y/2),p?2:3,y)}vt(!1)}i.globalAlpha=s<.65?1:(1-s)/.35;for(let d=0;d<3;d++){const m=oe(Math.min(1,s*1.3)),p=r*(d===1?-.4:1),y=f+p*m*(26+d*10)+Math.sin(s*14+d*2+o)*4,x=h-4-m*(24+d*9)+Math.sin(s*21+d)*3;qn(i,bb[Math.floor(c*22)+d&1],y,x,d===1?2:3,vb)}}})}const oo=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function Sb(e,t,n,r,o){for(let i=0;i<6;i++){const s=o+i/6*ot,a=Math.cos(s),l=Math.sin(s)*.5;for(let u=0;u<=r;u+=2)e.fillRect(z(t+a*u)-1,z(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+a*r*u,h=n+l*r*u,c=r*(.32-u*.18);for(const d of[-1,1]){const m=s+d*.9,p=Math.cos(m),y=Math.sin(m)*.5;for(let x=2;x<=c;x+=2)e.fillRect(z(f+p*x)-1,z(h+y*x)-1,2,2)}}}}function _b(e){it.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||ds("frost_guard","radius",4.5),o=Math.random()*99,i=.55,s=1.25,a=72,l=new Float32Array(a),u=new Float32Array(a),f=new Float32Array(a),h=[];for(let c=0;c<a;c++)l[c]=c/a*ot+(W(o+c)-.5)*.06,u[c]=14+W(o+c*7)*18,f[c]=(W(o+c*3)-.5)*.12,h.push(c);h.sort((c,d)=>Math.sin(l[c])-Math.sin(l[d])),T({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(c,d){const[m,p]=P(t,n),y=oe(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;c.globalAlpha=.22*x,ft(t,n,r*y,null,"rgba(170,225,255,1)"),c.globalAlpha=.7*x,ft(t,n,r*y,oo[2],null,2,[3,4]),c.globalAlpha=.85*x,c.fillStyle=oo[1];for(let b=0;b<12;b++){const M=o+b/12*ot,v=r*y*(.55+.4*W(o+b));for(let w=.3;w<v;w+=.22){const[_,A]=P(t+Math.cos(M)*w,n+Math.sin(M)*w);if(c.fillRect(z(_)-1,z(A)-1,2,2),(w*10|0)%2){const[R,C]=P(t+Math.cos(M+.5)*(w+.12),n+Math.sin(M+.5)*(w+.12));c.fillRect(z(R),z(C),2,1);const[I,O]=P(t+Math.cos(M-.5)*(w+.12),n+Math.sin(M-.5)*(w+.12));c.fillRect(z(I),z(O),2,1)}}}c.globalAlpha=x,c.fillStyle=d<.12?oo[0]:oo[1],Sb(c,m,p,26,o+d*1.2)}}),T({type:"custom",layer:"top",dur:s,x:t,y:n,draw(c,d){const m=d*s,p=oe(Math.min(1,m/i)),y=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(s-i-.2)):1,b=(M,v,w,_,A)=>{c.fillStyle=oo[4],c.beginPath(),c.moveTo(M-_-1,v+1),c.lineTo(M-_*.6,v-w*.7),c.lineTo(M+A,v-w-1),c.lineTo(M+_*.6,v-w*.7),c.lineTo(M+_+1,v+1),c.closePath(),c.fill(),c.fillStyle=oo[2],c.beginPath(),c.moveTo(M-_,v),c.lineTo(M-_*.6+1,v-w*.7),c.lineTo(M+A,v-w),c.lineTo(M,v),c.closePath(),c.fill(),c.fillStyle=oo[3],c.beginPath(),c.moveTo(M,v),c.lineTo(M+A,v-w),c.lineTo(M+_*.6-1,v-w*.7),c.lineTo(M+_,v),c.closePath(),c.fill(),c.fillStyle=oo[0],c.fillRect(z(M+A)-1,z(v-w),2,3),c.fillStyle=oo[1],c.fillRect(z(M-_*.5),z(v-w*.6),1,z(w*.45))};c.globalAlpha=1;for(const M of h){const v=l[M],w=Math.cos(v),_=Math.sin(v),A=u[M]*(.55+.45*p)*x;if(A<2)continue;const[R,C]=P(t+w*y*(.84+f[M]),n+_*y*(.84+f[M]));b(R,C,A*.5,3+A*.08,w*2);const[I,O]=P(t+w*y*(1+f[M]),n+_*y*(1+f[M]));b(I,O,A,3+A*.12,w*3),m<i&&!(M&3)&&(c.globalAlpha=.85,c.fillStyle=oo[0],c.fillRect(z(I)-4,z(O)-1,8,2),c.globalAlpha=1)}}});for(let c=0;c<46;c++){const d=Math.random()*ot,m=Math.sqrt(Math.random())*r;F(t+Math.cos(d)*m,n+Math.sin(d)*m,g(.8,1.8),g(-.3,.3),g(-.3,.3),g(-.2,.1),g(1,1.6),c%3?"#ffffff":"#c8f0ff",2,.25,c%4===0,.97)}Mt(t,n,r*1.05,9102591,.95,.9),et(4)}const Cr=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function Ab(e){it.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),s=Math.min(.38,.12+i*.04),a=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:s+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(s+.05)/s),[h,c]=P(t,n,.65),[d,m]=P(r,o,.55),p=d-h,y=m-c,x=Math.hypot(p,y)||1,b=p/x,M=y/x,v=-M,w=b,_=h+p*f,A=c+y*f;for(let R=0;R<2;R++)for(let C=0;C<22;C++){const I=C*5,O=Math.sin(C*.7-S.T*28+a+R*Math.PI)*(2+C*.45),E=C<6?3:2;l.globalAlpha=(1-C/22)*.85,l.fillStyle=Cr[C<5?1:C<13?2:3],l.fillRect(z(_-b*(I+40)+v*O-E/2),z(A-M*(I+40)+w*O-E/2),E,E)}l.globalAlpha=.28,l.fillStyle=Cr[2];for(let R=0;R<44;R+=4)l.fillRect(z(_-b*R)-4,z(A-M*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?Cr[0]:R<30?Cr[1]:Cr[2],l.fillRect(z(_-b*R+v*.5)-1,z(A-M*R+w*.5)-1,3,3);for(let R=0;R<14;R++){const C=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?Cr[0]:Cr[1];for(let I=-C;I<=C;I+=1.5)l.fillRect(z(_+b*(12-R)+v*I),z(A+M*(12-R)+w*I),2,2)}l.fillStyle=Cr[0];for(let R=-4;R<=4;R++)l.fillRect(z(_-b*36+v*R*1.5)-1,z(A-M*36+w*R*1.5)-1,2,2)}}),T({type:"custom",layer:"top",add:!0,dur:.85,delay:s,x:r,y:o,draw(l,u,f){const[h,c]=P(r,o,.55);if(!f.hit){f.hit=!0,et(3);for(let d=0;d<14;d++){const m=Math.random()*ot,p=g(1,3);F(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,g(.2,1.5),.45,Cr[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=Cr[0];for(let p=-m;p<=m;p+=2){const y=m-Math.abs(p);l.fillRect(z(h+p),z(c-y*.7),2,2),l.fillRect(z(h+p),z(c+y*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*ot+u*3.2+a,p=6+oe(u)*26,y=h+Math.cos(m)*p,x=c+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const M=m-b*.25,v=p-b*2;l.fillStyle=Cr[b===0?0:b<2?1:2],l.fillRect(z(h+Math.cos(M)*v)-1,z(c+Math.sin(M)*v*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=Cr[0],l.fillRect(z(y)-1,z(x)-1,3,3)}}}),Mt(r,o,1.6,8060880,.85,.5,{delay:s}),Mt(t,n,1,8060880,.4,.25)}const Ca=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function Tb(e){it.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,s]=P(t,n),a=(.35+1.25*oe(o))*N.HW*Math.SQRT2,l=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const h=l+u*ot/4+f,c=a*(1-f*.25);r.fillStyle=f<.3?Ca[0]:Ca[3],r.fillRect(z(i+Math.cos(h)*c)-1,z(s+Math.sin(h)*c*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*ot,i=g(1,2.2);F(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,g(1.5,3),g(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function Bp(e,t,n,r){const o=S.T-(t._cyS||S.T),i=Math.min(1,o/.3),[s,a]=P(t.x,t.y),l=2.5*N.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(s-9*u,a),e.lineTo(s-43*u,a-l),e.lineTo(s+43*u,a-l),e.lineTo(s+9*u,a),e.closePath(),e.fill());for(let h=0;h<f;h++){const c=h/(f-1),d=a-l*c,m=(9+c*34)*u+Math.sin(n*3+h)*2,p=m*.32,y=n*(8-c*3)+h*.9,x=s+Math.sin(n*2.2+c*3)*c*6;for(let b=0;b<ot;b+=.12){const M=b+y,v=Math.sin(M);if(v>0!==r)continue;const w=(b*3/ot+h*.37)%1;w>.72||(e.globalAlpha=(r?.9:.55)*(1-c*.3),e.fillStyle=w<.18?Ca[0]:w<.45?Ca[1]:Ca[2],e.fillRect(z(x+Math.cos(M)*m)-2,z(d+v*p)-1,4,3))}}for(let h=0;h<6;h++){const c=n*6.5+h*1.05,d=Math.sin(c);if(d>0!==r)continue;const m=(n*.55+h*.17)%1,p=a-l*m,y=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=h%2?"#6aa040":"#8a6a40",e.fillRect(z(s+Math.cos(c)*y)-1,z(p+d*y*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,ft(t.x,t.y,.55,Ca[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function Rb(e){for(let t=0;t<6;t++)T({type:"puff",x:e.x+g(-.4,.4),y:e.y+g(-.4,.4),r:g(12,20),dur:g(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*ot,r=g(1,2.5);F(e.x,e.y,g(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,g(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const Cb=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],Pb={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function Ib(e){it.sfx("item_reflect",e.x,e.y,1),T({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),i=o&&o.scale||1,[s,a]=P(r.x,r.y,(o?Ln(o):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*ot+n*1.2,h=34*i*Math.max(0,l),c=s+Math.cos(f)*h,d=a+Math.sin(f)*h*.55;t.save(),t.translate(z(c),z(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),qn(t,Cb,0,0,2,Pb),t.restore()}if(n>.3&&n<.6){vt(!0);const u=Wt(),f=(n-.3)/.3*ot;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(z(s+Math.cos(f)*34*i)-3,z(a+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(z(s+Math.cos(f)*34*i)-1,z(a+Math.sin(f)*34*i*.55)-3,2,6),vt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*ot,r=g(1,2.5);F(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}Mt(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function Ob(e,t,n){const r=t.scale||1,[o,i]=P(t.x,t.y,Ln(t)*.4),s=26*r,a=(n*1.4+t.id)%ot;for(let l=0;l<6;l++){const u=n*1.6+l/6*ot,f=Math.sin(u),h=z(o+Math.cos(u)*s),c=z(i+f*s*.4),d=Math.abs(((u-a)%ot+ot)%ot)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(h-2,c-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(h-1,c-4,2,7),e.fillStyle="#d02a3a",e.fillRect(h+1,c-2,1,4)}e.globalAlpha=1}const sr=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function zb(e){it.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||ds("veil_discord","radius",3),o=.5,i=Math.random()*9,s=96;S.game,ds("veil_discord","dur",14),T({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(a,l){const u=Math.min(1,l*(o+.14)/o),f=2.4*(1-u*u),h=Math.max(0,(l-.78)/.22),c=.6*N.ZK*(1-h);if(!(c<2))for(let d=0;d<2;d++)for(let m=0;m<s;m++){const p=m/s*ot,y=Math.sin(p);if(y>0!=(d===1))continue;const[x,b]=P(t+Math.cos(p)*r,n+y*r,f+.6),M=c*(.78+.22*W(i+m)),v=Math.sin(m*1.3+S.T*4)*.5+.5;a.globalAlpha=d?.92:.5,a.fillStyle=sr[3],a.fillRect(z(x)-2,z(b)-1,5,2);for(let w=0;w<M;w+=3){const _=Math.sin(w*.1+S.T*7+m*.4)*(w/M)*3;a.fillStyle=w<3?sr[0]:v>.66?sr[1]:v>.25?sr[2]:sr[3],a.fillRect(z(x+_)-2,z(b+w),4,3)}}}}),T({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(a,l){const[u,f]=P(t,n),h=r*N.HW*Math.SQRT2,c=r*N.HH*Math.SQRT2;a.globalAlpha=.35*(1-l),ft(t,n,r*(.9+.1*l),null,sr[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){a.globalAlpha=(1-m)*.9,a.fillStyle=d?sr[1]:sr[0];for(let p=0;p<ot;p+=.05){const y=(.3+.75*m)*(1+Math.sin(p*7+d*2+S.T*6)*.06);a.fillRect(z(u+Math.cos(p)*h*y)-1,z(f+Math.sin(p)*c*y)-1,3,2)}}}}}),T({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(a,l,u){if(!u.done){u.done=!0,et(3);for(let f=0;f<10;f++){const h=f/10*ot;T({type:"puff",x:t+Math.cos(h)*r*.9,y:n+Math.sin(h)*r*.9,r:g(12,20),dur:g(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const h=Math.random()*ot,c=Math.sqrt(Math.random())*r;F(t+Math.cos(h)*c,n+Math.sin(h)*c,.1,0,0,g(.6,1.6),g(.6,1),sr[f%3],2,-.2,!0)}}}}),Mt(t,n,r*1.1,13656319,.7,.9,{delay:o})}function Fb(e,t,n){const[r,o]=P(t.x,t.y,Ln(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,s=z(11*i);for(let a=-s;a<=s;a+=2){const l=(a+s)/(s*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+z(5*W(t.id+a*3))+Math.sin(l*Math.PI)*3,h=z(o-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=sr[3],e.fillRect(z(r+a)-1,h-1,3,f+2),e.fillStyle=a/2%2?sr[2]:sr[1],e.fillRect(z(r+a),h,2,f),e.fillStyle=sr[0],e.fillRect(z(r+a),h,2,1)}Math.random()<.04&&F(t.x+g(-.15,.15),t.y+g(-.15,.15),Ln(t)+.05,0,0,-.3,.6,sr[2],2,1,!1)}const g1=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],x1={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function Eb(e){it.sfx("item_mekansm",e.x,e.y,1),T({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),[i,s]=P(r.x,r.y,(o?Ln(o):.6)+.12),a=n<.12?oe(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(z(i-24*a),z(s)),t.rotate(l),qn(t,g1,0,0,z(4*a)||1,x1),t.restore(),t.save(),t.translate(z(i+4*a),z(s-16*a)),t.rotate(-l*1.33+.35),qn(t,g1,0,0,z(3*a)||1,x1),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)T({type:"puff",x:r.x+g(-.2,.2),y:r.y+g(-.2,.2),r:g(8,12),dur:g(.5,.8),col:[235,235,240]})}}}),T({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=He(r),i=o?Ln(o):.8,s=o&&o.scale||1;for(let a=0;a<2;a++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*ot*2+a*Math.PI,[h,c]=P(r.x,r.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":a?"#ffe07a":"#8aff9a",t.fillRect(z(h+Math.cos(f)*24*s-d/2),z(c+Math.sin(f)*8*s-d/2),d,d)}if(n>.45){const a=(n-.45)/.55,[l,u]=P(r.x,r.y,i+.1+a*.5);t.globalAlpha=1-a,t.fillStyle="#c8ffd0",t.fillRect(z(l)-1,z(u)-5,3,11),t.fillRect(z(l)-5,z(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(z(l),z(u),1,1)}}}),Mt(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const Lb=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),kb={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},ha=["#fff6c0","#ffd24a","#d89a20"];function Db(e){it.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?st(e.uid):null,o=r?r.x:t,i=r?r.y:n,s=.34;T({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(a,l){const[u,f]=P(o,i,.6),[h,c]=P(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;a.globalAlpha=Math.sin(m*Math.PI)*.9,a.fillStyle=ha[d%2],a.fillRect(z(u+(h-u)*m)-1,z(f+(c-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(a,l,u){const f=Math.min(1,l/s),h=2.3-1.4*oe(f),[c,d]=P(t,n,h);if(a.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,qn(a,Lb,c+(f<1?Math.sin(l*30)*1.5:0),d,4,kb),!u.hit&&f>=1){u.hit=!0,et(3);for(let m=0;m<22;m++){const p=Math.random()*ot,y=g(.6,2.4);F(t,n,.5,Math.cos(p)*y,Math.sin(p)*y,g(2.5,4.5),g(.7,1.1),ha[m%3],3,9,m%3===0,.97)}T({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[y,x]=P(t,n);for(let v=0;v<9;v++){const w=(v-4)*5+Math.sin(v*2.7)*2,_=(60+70*W(v*3.1))*Math.min(1,p*4+.1),A=x-_-p*30;for(let R=0;R<_;R+=3){const C=1-R/_;m.globalAlpha=(1-p)*(1-C*.85),m.fillStyle=R<6?ha[0]:ha[1],m.fillRect(z(y+w),z(A+R),2,2)}}const b=z(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=z(x-34);m.globalAlpha=1-p,m.fillStyle=ha[0],m.fillRect(z(y)-b,M,b*2,2),m.fillRect(z(y)-1,M-b,2,b*2),m.fillRect(z(y)-3,M-2,6,6)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,ft(t,n,.3+1.1*oe(p),ha[1],null,3,[2,3])}})}}}),Mt(t,n,2,16765514,1,.7,{delay:s})}function Ub(e){it.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=ds("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),s=new Float32Array(r+1);for(let a=0;a<r;a++){const l=a/r*ot+.6;i[a]=t+Math.cos(l)*1.1,s[a]=n+Math.sin(l)*1.1}i[r]=t,s[r]=n,T({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(a,l){a.globalAlpha=1-l,a.lineDashOffset=S.T*30,ft(t,n,.5+1*oe(l),"#c8d0e0",null,2,[4,6]),a.lineDashOffset=0,ft(t,n,.4+.8*oe(l),"#9ad8ff",null,1.5)}}),T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,l,u){const f=oe(Math.min(1,l/.42)),h=Math.max(0,(l-.48)/.45);for(let c=0;c<=r;c++){const d=t+(i[c]-t)*f,m=n+(s[c]-n)*f,[p,y]=P(d,m,.05),x=(1-f)*4*Math.PI+c,b=z(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,v=z(y-M),w=z(M*Math.min(1,h));if(w>=M)continue;a.globalAlpha=1,a.fillStyle="#2a3040",a.fillRect(z(p)-b-2,v+w-2,b*2+4,M-w+2),a.fillStyle="#c8d0e0",a.fillRect(z(p)-b-1,v+w-1,b*2+2,M-w),a.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",a.fillRect(z(p)-b+1,v+w+1,b*2-2,M-w-4),a.fillStyle="#ffffff";const _=(S.T*40+c*13+o*10)%(M+20)-10;for(let A=0;A<4;A++){const R=z(v+_+A*2);R>v+w&&R<v+M-3&&a.fillRect(z(p)-b+2+A,R,Math.max(1,z(b*.5)),1)}h>0&&Math.random()<.7&&F(d+g(-.12,.12),m+g(-.12,.12),(M-w)/N.ZK,g(-.2,.2),g(-.2,.2),g(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let c=0;c<=r;c++)T({type:"custom",layer:"top",add:!0,dur:.25,x:i[c],y:s[c],draw(d,m,p){const[y,x]=P(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(z(y)-18,z(x)-22,36,2),d.fillRect(z(y)-18,z(x)+6,36,2),d.fillRect(z(y)-1,z(x)-30,2,44)}})}}}),Mt(t,n,2,10148095,.75,.8)}const Pr=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function Xb(e){it.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,s=ds("abyssal_blade","stun",2),a=Math.random()*99,l=28,u=new Float32Array(l);for(let c=0;c<l;c++)u[c]=(c%2?.34:.5)+W(a+c)*.14;T({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(c,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const y=m-p*.06;if(y<0)break;const[x,b]=P(t+(r-t)*y,n+(o-n)*y,.5+Math.sin(y*Math.PI)*1.1),M=z(10-p);c.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),c.fillStyle=Pr[2],c.fillRect(z(x)-M/2-1,z(b)-M/2-1,M+2,M+2),c.fillStyle=Pr[0],c.fillRect(z(x)-M/2,z(b)-M/2,M,M)}}});const f=s+.35,h=c=>c<i?0:c<i+.12?oe((c-i)/.12):c>f-.3?Math.max(0,(f-c)/.3):1;T({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(c,d,m){const p=d*f,y=h(p);if(y<=0)return;if(!m.hit&&p>=i){m.hit=!0,et(6);for(let M=0;M<18;M++){const v=Math.random()*ot,w=g(1.5,3.5);F(r,o,.3,Math.cos(v)*w,Math.sin(v)*w,g(1,3),.5,M%3?Pr[3]:Pr[2],3,6,!0)}}c.fillStyle=Pr[1];for(let M=0;M<8;M++){const v=a+M/8*ot;for(let w=.45;w<.45+.5*y;w+=.07){const _=v+(W(a+M*5+(w*20|0))-.5)*.5,[A,R]=P(r+Math.cos(_)*w,o+Math.sin(_)*w);c.fillRect(z(A)-1,z(R)-1,2,2)}}c.beginPath();for(let M=0;M<=l;M++){const v=M%l/l*ot,[w,_]=P(r+Math.cos(v)*u[M%l]*y,o+Math.sin(v)*u[M%l]*y);M?c.lineTo(z(w),z(_)):c.moveTo(z(w),z(_))}c.fillStyle=Pr[0],c.fill();for(let M=0;M<l;M++){const v=M/l*ot,w=(M+1)/l*ot,[_,A]=P(r+Math.cos(v)*u[M]*y,o+Math.sin(v)*u[M]*y),[R,C]=P(r+Math.cos(w)*u[(M+1)%l]*y,o+Math.sin(w)*u[(M+1)%l]*y);for(let I=0;I<1;I+=.2)c.fillStyle=Math.sin(v)<0?Pr[3]:Pr[2],c.fillRect(z(_+(R-_)*I)-1,z(A+(C-A)*I)-1,2,2)}const[x,b]=P(r,o);for(let M=0;M<10;M++){const v=(S.T*.9+M/10)%1,w=M*2.4+v*5,_=(1-v)*22*y;c.globalAlpha=v,c.fillStyle=Pr[3],c.fillRect(z(x+Math.cos(w)*_)-1,z(b+Math.sin(w)*_*.5)-1,2,2)}}}),T({type:"custom",layer:"top",dur:f,x:r,y:o,draw(c,d){const m=d*f,p=h(m);if(p<=0)return;const[y,x]=P(r,o,.42),b=oe(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const v=M/5*ot+a,[w,_]=P(r+Math.cos(v)*.36*p,o+Math.sin(v)*.36*p),A=Math.sin(S.T*6+M*1.7)*2,R=w+(y-w)*.55*b+A,C=_-(_-x)*b*p-8*b,I=w+Math.cos(v)*16*b,O=_-(_-x)*.7*b*p;for(let E=0;E<2;E++)for(let U=0;U<=1;U+=.06){const G=1-U,j=G*G*w+2*G*U*I+U*U*R,L=G*G*_+2*G*U*O+U*U*C,k=U<.5?5:U<.8?4:3;E?(c.fillStyle=U>.85?Pr[3]:Pr[2],c.fillRect(z(j)-1,z(L)-1,2,2)):(c.fillStyle=Pr[0],c.fillRect(z(j-k/2)-1,z(L-k/2)-1,k+2,k+2))}}}}),Mt(r,o,1.6,9059071,.6,.6,{delay:i})}const Mi={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},ms={blue:6996223,red:16743002,neutral:16765514};function Gb(e){it.sfx("tp_start",e.x,e.y,1);const t=st(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=Mi[r]||Mi.blue,i=e.ex===void 0?e.x:e.ex,s=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:S.T,dur:n,ex:i,ey:s,team:r});const a=l=>{const u=st(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};T({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(l,u,f){if(a(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=P(i,s),m=S.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,ft(i,s,1.05,o[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,ft(i,s,.8,o[1],null,3,[7,5]),l.lineDashOffset=-m*40,ft(i,s,.5,o[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const M=b/4*ot+Math.PI/4,v=(m*(1.2+h*1.5)+b*.25)%1,w=1.65-v*.75,[_,A]=P(i+Math.cos(M)*w,s+Math.sin(M)*w);l.globalAlpha=p*Math.sin(v*Math.PI),l.fillStyle=o[1];const R=c-_,C=d-A,I=Math.hypot(R,C)||1,O=-C/I,E=R/I;for(let U=0;U<6;U++)l.fillRect(z(_+R/I*U+O*(6-U))-1,z(A+C/I*U+E*(6-U))-1,2,2),l.fillRect(z(_+R/I*U-O*(6-U))-1,z(A+C/I*U-E*(6-U))-1,2,2)}l.globalAlpha=p,l.fillStyle=o[0];const y=.8*N.HW*Math.SQRT2,x=.8*N.HH*Math.SQRT2;for(let b=0;b<8;b++){const M=b/8*ot-m*.6;Xc(l,c+Math.cos(M)*y*1.18,d+Math.sin(M)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,Mt(i,s,1.2+.6*h,ms[r]||ms.blue,.35+.4*h,.32))}}),T({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(l,u,f){if(a(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=P(i,s),m=40+120*h,p=z(3+5*h+Math.sin(S.T*18)*1);for(let y=0;y<m;y+=3)l.globalAlpha=(1-y/m)*(.35+.5*h),l.fillStyle=y%12<3?o[0]:o[1],l.fillRect(z(c)-p,z(d-y)-3,p*2,3);for(let y=0;y<5;y++){const x=(S.T*.8+y/5)%1,b=S.T*4+y*1.3;l.globalAlpha=Math.sin(x*Math.PI)*h,l.fillStyle=o[0],l.fillRect(z(c+Math.cos(b)*14)-1,z(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function $p(e,t,n){const r=S.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),s=Mi[o.team||e.team]||Mi.blue,a=e.scale||1;if(!t){const[l,u]=P(e.x,e.y),f=.8*N.HW*Math.SQRT2*a,h=.8*N.HH*Math.SQRT2*a;vt(!0);const c=Wt();c.globalAlpha=.6,ft(e.x,e.y,.8*a,s[3],null,2);for(let d=0;d<ot*i;d+=.07){const m=d-Math.PI/2;c.globalAlpha=.95,c.fillStyle=d>ot*i-.3?s[0]:s[1],c.fillRect(z(l+Math.cos(m)*f)-1,z(u+Math.sin(m)*h)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,y=d*ot/3+p*3-r*(2+i*4);c.globalAlpha=1-p*.7,c.fillStyle=m<3?s[0]:m<7?s[1]:s[2],c.fillRect(z(l+Math.cos(y)*f*(1-p*.8))-1,z(u+Math.sin(y)*h*(1-p*.8))-1,3,3)}c.globalAlpha=1,vt(!1),M1(e,i,s,a,!1),(e._tpL||0)<r-.25&&(e._tpL=r,Mt(e.x,e.y,1.1+i,ms[o.team||e.team]||ms.blue,.4+.45*i,.32,{uid:e.id}));return}M1(e,i,s,a,!0),Math.random()<.3+i*.4&&F(e.x+g(-.3,.3),e.y+g(-.3,.3),g(0,.4),0,0,g(1.2,2.4),.5,s[Math.random()*3|0],2,-.5,!0)}function M1(e,t,n,r,o){const i=S.T,s=Ln(e),[a,l]=P(e.x,e.y);vt(!0);const u=Wt();for(let f=0;f<3;f++){const h=(i*(.8+t*1.4)+f/3)%1,c=l-h*s*1.15*N.ZK,d=(24-h*8)*r,m=d*.32;u.globalAlpha=Math.sin(h*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<ot;p+=.2)Math.sin(p)>0===o&&u.fillRect(z(a+Math.cos(p)*d)-1,z(c+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,vt(!1)}function Nb(e){const t=st(e.uid),n=e.team||t&&t.team||"blue",r=Mi[n]||Mi.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),it.sfx("tp_end",o,i,1),T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(s,a){const[l,u]=P(e.x,e.y),f=z(16*(1-a))+1,h=60+140*a;for(let c=0;c<h;c+=3)s.globalAlpha=(1-a)*(1-c/h),s.fillStyle=c<h*a?r[0]:r[1],s.fillRect(z(l)-f,z(u-c)-3,f*2,3);s.globalAlpha=1-a,ft(e.x,e.y,.9*(1-a)+.05,r[1],null,3)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(s,a,l){const[u,f]=P(o,i),h=Math.min(1,a/.14),c=f-320,d=c+(f-c)*h,m=z(a<.14?10:10+14*(1-(a-.14)/.86)*Math.sin(Math.min(1,(a-.14)*4)*Math.PI));if(s.globalAlpha=a<.45?1:(1-a)/.55,s.fillStyle=r[1],s.fillRect(z(u)-m,z(c),m*2,z(d-c)),s.fillStyle=r[0],s.fillRect(z(u)-z(m*.4),z(c),z(m*.8),z(d-c)),!l.hit&&h>=1){l.hit=!0,et(4);for(let p=0;p<26;p++){const y=Math.random()*ot,x=g(1.5,4);F(o,i,.2,Math.cos(y)*x,Math.sin(y)*x,g(.5,2.5),.55,r[p%3],3,3,!0)}T({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,y){p.globalAlpha=1-y,ft(o,i,.3+1.6*oe(y),r[1],null,6*(1-y)+1),ft(o,i,.2+1*oe(y),r[0],null,2,[3,3])}})}}}),Mt(o,i,2.6,ms[n]||ms.blue,1,.65)}function Bb(e){const t=st(e.uid),n=t&&t.team||"blue",r=Mi[n]||Mi.blue;t&&(t._tp=null),it.sfx("tp_cancel",e.x,e.y,1),T({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[s,a]=P(e.x,e.y);for(let l=0;l<3;l++){const u=(1-oe(Math.min(1,i*2)))*(20+l*22),f=22+i*10,h=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let c=0;c<ot;c+=.22)W(l*31+c*7)<h||o.fillRect(z(s+Math.cos(c)*f)-1,z(a-u+Math.sin(c)*f*.32+(i>.5?(i-.5)*30*W(c*13+l):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*ot,s=g(.8,2);F(e.x,e.y,g(.3,1),Math.cos(i)*s,Math.sin(i)*s,g(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)T({type:"puff",x:e.x+g(-.3,.3),y:e.y+g(-.3,.3),r:g(10,14),dur:g(.4,.6),col:[140,140,150]})}function Hp(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function $b(e,t,n){const r=S.game&&S.game.player,o=r===e,[i,s]=P(e.x,e.y),a=e.scale||1,l=Wt();if(t&2){const u=.75*N.HW*Math.SQRT2*a,f=.75*N.HH*Math.SQRT2*a,h=(n*2+e.id)%ot;for(let c=0;c<7;c++){const d=c/7*ot-n*.5,m=z(i+Math.cos(d)*u),p=z(s+Math.sin(d)*f),y=Math.abs(((d-h)%ot+ot)%ot)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=y?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=y?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}o&&(l.globalAlpha=.12,ft(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,ft(e.x,e.y,.5*a,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,o&&(l.globalAlpha=.1,ft(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*N.HW*Math.SQRT2*a,f=.95*N.HH*Math.SQRT2*a;vt(!0);const h=Wt();for(let c=0;c<5;c++){const d=n*.7+c/5*ot,m=z(i+Math.cos(d)*u),p=z(s+Math.sin(d)*f-3-Math.sin(n*2+c)*2);h.globalAlpha=.65,h.fillStyle="#c8f0ff",h.fillRect(m-2,p,5,1),h.fillRect(m,p-2,1,5),h.fillRect(m-1,p-1,1,1),h.fillRect(m+1,p+1,1,1),h.fillRect(m+1,p-1,1,1),h.fillRect(m-1,p+1,1,1)}h.globalAlpha=1,vt(!1),o&&(l.globalAlpha=.12,ft(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&F(e.x+g(-.5,.5),e.y+g(-.5,.5),g(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function Hb(e,t,n){const[r,o]=P(t.x,t.y,Ln(t)+.12),i=z(r-14*(t.scale||1)),s=z(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,s-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,s-6,4,3);for(let a=0;a<9;a++){const l=z(Math.sin(n*7-a*.7+t.id)*2),u=z(10-a*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+a*2,s-3+l,2,u+2),e.fillStyle=a%3?"#c03050":"#ff6a7a",e.fillRect(i+2+a*2,s-2+l,2,u)}e.globalAlpha=1}function Wb(e,t){t.banner&&Math.random()<.025&&F(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&F(e.x+g(-.25,.25),e.y+g(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&F(e.x+g(-.3,.3),e.y+g(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function qb(e){const t=S.game&&S.game.player,n=e.uid!==void 0?st(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&We(n))return!0;switch(e.type){case"item_crit":return vM(e),!0;case"item_chain":return wM(e),!0;case"item_bash":return AM(e),!0;case"item_berserk":return PM(e),!0;case"item_bloodlust":return zM(e),!0;case"item_drain":return EM(e),!0;case"item_hex":return LM(e),!0;case"item_refresh":return GM(e),!0;case"item_immune":return NM(e),!0;case"item_spellblock":return $M(e),!0;case"item_push":return HM(e),!0;case"ward_place":return t&&e.team===t.team&&jM(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&KM(e),!0;case"mon_howl":return QM(e),!0;case"mon_spores":return JM(e),!0;case"mon_rootslam":return tb(e),!0;case"camp_buff":return rb(e),!0;case"item_wand":return sb(e),!0;case"item_phase":return lb(e),!0;case"item_arcane":return hb(e),!0;case"item_clarity":return yb(e),!0;case"item_dust":return Mb(e),!0;case"item_evade":return wb(e),!0;case"item_frostwave":return _b(e),!0;case"item_lance":return Ab(e),!0;case"item_cyclone":return Tb(e),!0;case"item_reflect":return Ib(e),!0;case"item_veil":return zb(e),!0;case"item_mekansm":return Eb(e),!0;case"item_midas":return Db(e),!0;case"item_mirror":return Ub(e),!0;case"item_abyss":return Xb(e),!0;case"tp_start":return Gb(e),!0;case"tp_end":return Nb(e),!0;case"tp_cancel":return Bb(e),!0}return!1}function Vb(e){const t=e.status||{},n=S.T;(e.aura||e.auraFx)&&WM(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&ob(e,t,n);const r=Hp(e);if(r&&$b(e,r,n),(t.banner||t.cuirass||t.frostAura)&&Wb(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=S.T),Bp(Wt(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,Rb(e)),t.tp?$p(e,!1):e._tp&&S.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),I0(e,t,"phase")?ub(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);vt(!0);const i=Wt();i.globalAlpha=.3+.25*o,ft(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,vt(!1),Math.random()<.3&&F(e.x+g(-.3,.3),e.y+g(-.3,.3),.05,0,0,g(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function Yb(e,t){const n=t.status||{},r=S.T;n.bloodlust&&FM(e,t,r),n.immune&&BM(t,r),n.cyclone&&Bp(e,t,r,!0),n.tp&&$p(t,!0),I0(t,n,"reflect")&&Ob(e,t,r),I0(t,n,"veil")&&Fb(e,t,r),Hp(t)&1&&Hb(e,t,r),I0(t,n,"clarity")&&Math.random()<.05&&F(t.x+g(-.25,.25),t.y+g(-.25,.25),Ln(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(kM(t,r),t._hexV=1):t._hexV&&(t._hexV=0,DM(t))}const it={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},kn={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let Gc=null;const Tl=e=>kn[Gc&&Gc[e]||e]||kn.fire,Or=e=>{const t=Tl(e);return t[Math.random()*t.length|0]};let Kr=[],ra=[],ps=[],yr=[],cu=1,Nc=1;function jb(){return{parts:Kr.length,efx:ra.length,decals:ps.length,amb:yr.length,dynL:No.length}}function el(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function Wp(){Kr=[],ra=[],ps=[],yr=[],No.length=0}const No=[],Kb=64,Jl=new Map;function nd(e){if(typeof e=="number")return e;let t=Jl.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return Jl.size>500&&Jl.clear(),Jl.set(e,t),t}function Mt(e,t,n,r,o=.8,i=.4,s){No.length>=Kb&&No.shift(),No.push({x:e,y:t,r:n,col:nd(r),a:o,life:i,max:i,uid:s&&s.uid||0,delay:s&&s.delay||0})}function Qb(e,t,n=1){let r=0;for(let o=No.length-1;o>=0&&r<t;o--){const i=No[o];if(i.delay>0)continue;const s=i.life/i.max,a=i.a*n*Math.min(1,s*1.6);let l=i.x,u=i.y;if(i.uid){const f=st(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*s),i.col,a),r++}}const Ef=new Map,sa=192,da=new Float32Array(sa),Lf=new Float32Array(sa),kf=new Float32Array(sa),Df=new Float32Array(sa),Uf=new Float32Array(sa),Xf=new Float32Array(sa);function Zb(e,t,n=1){Ef.clear();let r=0;for(const o of Kr){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let s=Ef.get(i);if(s===void 0){if(r>=sa)continue;s=r++,Ef.set(i,s),da[s]=Lf[s]=kf[s]=Df[s]=Uf[s]=Xf[s]=0}const a=o.life/o.max*o.size,l=nd(o.col);da[s]+=a,Lf[s]+=o.x*a,kf[s]+=o.y*a,Df[s]+=(l>>16&255)*a,Uf[s]+=(l>>8&255)*a,Xf[s]+=(l&255)*a}for(let o=0;o<t;o++){let i=-1,s=6;for(let c=0;c<r;c++)da[c]>s&&(s=da[c],i=c);if(i<0)break;const a=da[i];da[i]=0;let l=Df[i]/a,u=Uf[i]/a,f=Xf[i]/a;const h=Math.max(l,u,f,1);l=l/h*255,u=u/h*255,f=f/h*255,e(Lf[i]/a,kf[i]/a,1.1+Math.min(2.2,Math.sqrt(a)*.28),l<<16|u<<8|f,Math.min(.85,a*.018)*n)}}const Gf={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function F(e,t,n,r,o,i,s,a,l=2,u=0,f=!1,h=.94){cu<1&&Math.random()>cu||Kr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:s,max:s,col:a,size:l,grav:u,glow:f,drag:h})}function Oe(e,t,n,r,o=12,i=2.5,s=.6,a=1.5,l=!0,u=3){for(let f=0;f<o;f++){const h=Math.random()*Math.PI*2,c=Math.random()*i;F(e,t,n,Math.cos(h)*c,Math.sin(h)*c,Math.random()*a,s*(.6+Math.random()*.6),Or(r),u+(Math.random()<.3?1:0),4,l)}}function et(e){S.cam.shake=Math.max(S.cam.shake,e*Nc)}let rd="";function T(e){return e.t=0,e.tag=rd||e.type,ra.push(e),Jb(e),e}function Jb(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":Mt(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":Mt(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":Mt(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":Mt(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":Mt(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&Mt(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":Mt(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function Ei(e){e.t=0,ps.push(e)}const b1={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},v1=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),t4=new Set(["gato","zorra"]),e4={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function w1(e){const t=Tl(e.col&&kn[e.col]?e.col:"gold"),n=e.uid?st(e.uid):null;if(e.type==="windup"){it.sfx(e4[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";T({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,a){const l=st(a.uid),u=l?l.x:a.x,f=l?l.y:a.y;if(i.globalAlpha=.35+.5*s,r&&e.radius)ft(e.ex,e.ey,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(o&&e.radius)ft(u,f,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(!o&&e.range){const h=e.ex-u,c=e.ey-f,d=Math.hypot(h,c)||1,m=Math.min(e.range,d)*s,[p,y]=P(u,f,.1),[x,b]=P(u+h/d*m,f+c/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,y),i.lineTo(x,b),i.stroke(),i.setLineDash([])}ft(u,f,.35+.35*s,t[0],null,2)}}),T({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,a){const l=st(a.uid),[u,f]=P(l?l.x:a.x,l?l.y:a.y,.75);for(let h=0;h<10;h++){const c=h/10*6.283+s*5,d=36*(1-s)+4;i.fillStyle=t[h%t.length],i.fillRect(Math.round(u+Math.cos(c)*d-2),Math.round(f+Math.sin(c)*d*.6-2),4,4)}i.globalAlpha=s,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*s),Math.round(f-3-4*s),Math.round(6+8*s),Math.round(6+8*s))}})}else e.type==="windup_cancel"?(Oe(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),it.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(T({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const s=st(i.uid);if(!s||!s.channel&&o>.05){i.t=i.dur;return}const a=e.radius||1.2,l=S.T;r.globalAlpha=.7,ft(i.x,i.y,a,t[1],null,3),ft(i.x,i.y,a*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[h,c]=P(i.x+Math.cos(f)*a*.85,i.y+Math.sin(f)*a*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(h-3),Math.round(c-3),6,6)}n&&Math.random()<.5&&F(n.x,n.y,.9,g(-.5,.5),g(-.5,.5),g(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),it.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?T({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(Oe(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),it.sfx("deny",e.x,e.y,.4)):Oe(e.x,e.y,.6,e.col&&kn[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function S1(e,t){const n=t?st(t):null,r=n&&n.status&&n.status.transform;if(!r||!r.mount)return e;const o=window.AUDIO_EPIC;return o&&o.has&&o.has(e+"_m")?e+"_m":e}function n4(e){const t=Tl(e.type.slice(5)&&kn[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;T({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(s,a,l){const[u,f]=P(l.x,l.y,.55),h=18*(1-a)+4;s.globalAlpha=1-a,s.fillStyle=t[0],s.fillRect(Math.round(u-h/2),Math.round(f-h/2),Math.round(h),Math.round(h)),s.fillStyle=t[1];for(let c=0;c<6;c++){const d=c/6*6.283;s.fillRect(Math.round(u+Math.cos(d)*h),Math.round(f+Math.sin(d)*h*.7),3,3)}}});for(let s=0;s<10;s++)F(o,i,.5,n*g(1.5,4)+g(-.8,.8),r*g(1.5,4)+g(-.8,.8),g(0,1),.3,t[s%t.length],3,0,!0);et(1.5)}function r4(){o4(),rd=""}function o4(){const e=S.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0,rd=(n.hero?n.hero+":":"")+n.type+(n.key?":"+n.key:"");const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(cu=r?1:.4,Nc=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const u=n.hero&&n.key?q[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&it.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),u)try{if(u(n)!==!1)continue}catch(f){console.error(f)}w1(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){w1(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&n4(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?q[o]:void 0,s=o&&n.type!=="heal"&&!n.impact,a=o&&Od[n.type]?Od[n.type](n):void 0,l=a!==void 0?a:o?s?"ab_"+o:n.impact&&!i?b1[n.type]:null:b1[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&it.babble(n.hero,"ult",n.x,n.y),l&&it.sfx(l,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const u=t[n.hero]&&t[n.hero].abil[n.key],f=u&&Gf[u.fx],h=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;f!==void 0&&Mt(n.x+(n.ux||0)*h,n.y+(n.uy||0)*h,n.radius?n.radius*1.15+.5:h?n.range*.85+.6:1.6,f,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(u){console.error(u)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(qb(n))continue}catch(u){console.error(u);continue}if(!o&&n.hero&&typeof n.type=="string"&&q[n.hero+"_ev_"+n.type])try{if(q[n.hero+"_ev_"+n.type](n)!==!1)continue}catch(u){console.error(u);continue}switch(n.type){case"fire":{T({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let u=0;u<90;u++){const f=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,h=(.4+Math.random())*n.range*2.4;F(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(f)*h,Math.sin(f)*h,Math.random()*1.2,.5,Or("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Ei({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),et(3);break}case"quake":{T({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),T({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let u=0;u<50;u++){const f=Math.random()*6.28,h=Math.random()*n.range*2.5;F(n.x,n.y,.1,Math.cos(f)*h,Math.sin(f)*h,1+Math.random()*2,.7,Or("quake"),3,6,!1)}et(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const u=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;Gf[n.type]!==void 0&&Mt(n.x,n.y,n.radius*1.2+.4,Gf[n.type],n.type==="firering"?1:.75,.6),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:Tl(u)[1],w:7}),T({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:Tl(u)[0],w:3,delay:.08}),n.type==="roar"&&(T({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),et(8)),n.type==="firering"&&(T({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),et(9),Ei({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&Ei({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&Ei({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const f=n.type==="spores"?40:90;for(let h=0;h<f;h++){const c=Math.random()*Math.PI*2,d=n.radius*(1.6+Math.random()*1.6);F(n.x,n.y,.2,Math.cos(c)*d,Math.sin(c)*d,Math.random()*2,.6,Or(u),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let h=0;h<14;h++)T({type:"puff",x:n.x+g(-1,1)*n.radius*.7,y:n.y+g(-1,1)*n.radius*.7,r:g(14,26),dur:g(.7,1.3),col:[140,210,90]});break}case"heal":T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let u=0;u<16;u++)F(n.x+g(-.4,.4),n.y+g(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Or("heal"),3,0,!0);break;case"shield":case"stoneskin":T({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":T({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let u=0;u<12;u++)T({type:"puff",x:n.x+g(-.6,.6),y:n.y+g(-.6,.6),r:g(12,22),dur:g(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const u=n.type==="firedash"?"fire":"dust",f=n.ex||n.x+(n.ux||0)*(n.range||0),h=n.ey||n.y+(n.uy||0)*(n.range||0);for(let c=0;c<30;c++){const d=c/30;F(n.x+(f-n.x)*d+g(-.2,.2),n.y+(h-n.y)*d+g(-.2,.2),.15,g(-.5,.5),g(-.5,.5),g(.3,1.2),.5+d*.4,Or(u),4,0,u==="fire")}T({type:"streak",x:n.x,y:n.y,ex:f,ey:h,dur:.35,col:u==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const u=n.ex||n.x,f=n.ey||n.y;T({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),T({type:"flash",x:u,y:f,r:1.1,dur:.3,col:"rgba(220,170,255,"}),T({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.3,col:"#d8a8ff"}),Oe(n.x,n.y,.4,"arcane",16,2,.5),Oe(u,f,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let u=0;u<20;u++){const f=Math.random()*6.28,h=Math.random()*n.radius;F(n.x+Math.cos(f)*h,n.y+Math.sin(f)*h,.1,0,0,2,.6,Or("arcane"),2,0,!0)}break;case"starfall":for(let u=0;u<18;u++)T({type:"meteor",x:n.x+g(-1,1)*n.radius*.8,y:n.y+g(-1,1)*n.radius*.8,dur:.35,delay:u*.02});T({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),Oe(n.x,n.y,.2,"arcane",70,6,.8,3),Ei({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),et(10);break;case"slash":T({type:"xslash",x:n.x,y:n.y,dur:.35}),Oe(n.x,n.y,.5,"blood",20,4,.5,2,!1),Oe(n.x,n.y,.5,"slash",14,4,.4),et(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.kind==="minion"||n.proj)){const f=n.proj&&n.pkey||"A",h=e._off!==void 0;if(f==="A"&&qe[n.hero]){let d=!1;if(!(n.proj&&v1.has(n.hero+"_A"))||h)try{d=qe[n.hero](n)===!0}catch(m){console.error(m)}!d&&(!t4.has(n.hero)||h)&&it.sfx(S1("atk_"+n.hero,n.uid),n.x,n.y,n.big?1:.8);break}if(f!=="A"&&v1.has(n.hero+"_"+f)&&!h){it.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);break}const c=f!=="A"?q[n.hero+"_"+f+"_hit"]:void 0;if(c){it.sfx("imp_"+n.hero+"_"+f,n.x,n.y,.9);try{c(n)}catch(d){console.error(d)}break}}if(!n.hero){let f=!1;try{f=Eo.hit(n)}catch(h){console.error(h)}if(f){f!=="snd"&&it.sfx(n.big?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8);break}}const u=n.col&&kn[n.col]?n.col:n.hero==="dragon"?"fire":"slash";T({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:kn[u][0]}),Oe(n.x,n.y,.45,u,n.big?10:5,n.big?3:2,.35,1.5,!0,2),it.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&et(2);break}case"shoot":if(n.kind==="hero"&&n.hero){it.sfx(S1("shot_"+n.hero,n.uid),n.x,n.y,.6);break}if(!n.hero){let u=!1;try{u=Eo.shoot(n)}catch(f){console.error(f)}if(u)break}it.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":if(!n.hero){let u=!1;try{u=Eo.hit(n)}catch(f){console.error(f)}if(u)break}T({type:"jaws",x:n.x,y:n.y,dur:.35}),Oe(n.x,n.y,.3,"bite",24,3,.5),et(5);break;case"transform":{if(n.hero&&q[n.hero+"_T"]){it.sfx("tf_"+n.hero,n.x,n.y,1);try{q[n.hero+"_T"](n)}catch(h){console.error(h)}break}const u=n.kind==="fire",f=u?[255,140,50]:[255,220,90];T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:f}),T({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:u?"#ff9a3a":"#ffe070",w:6}),Oe(n.x,n.y,.6,u?"fire":"gold",70,5,.9,3,!0,4),et(n.uid===(e.player&&e.player.id)?10:4),it.sfx("roar",n.x,n.y,.8);break}case"levelup":T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),T({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":if(n.kind==="hero"&&Object.keys(q).some(u=>{if(!u.endsWith("_death"))return!1;try{return q[u](n)===!0}catch(f){return console.error(f),!1}}))break;n.kind==="hero"?(n.sprite&&it.babble(n.sprite==="slime"&&(st(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),Oe(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),T({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),it.sfx("death",n.x,n.y)):n.kind==="minion"?(Oe(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),it.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(Oe(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),it.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let u=0;u<26;u++){const f=Math.random()*6.28,h=g(1.5,5);F(n.x+g(-.3,.3),n.y+g(-.3,.3),g(.8,2.2),Math.cos(f)*h,Math.sin(f)*h,g(3,9),g(1.2,2),Or("stone"),Math.random()*4+4|0,14,!1,.97)}for(let u=0;u<14;u++)T({type:"puff",x:n.x+g(-1.2,1.2),y:n.y+g(-1.2,1.2),r:g(26,46),dur:g(1.2,2.2),col:[150,140,130]});T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),Ei({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),it.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),it.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&it.say(n.monster==="serpent"?"serpent":"boss"),Oe(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let u=0;u<30;u++)F(n.x,n.y,1,g(-4,4),g(-4,4),g(3,8),1.4,Or("stone"),5,12,!1);T({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),T({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),et(14);break;case"killbanner":{const u=e.player,f=u&&n.uid===u.id;if(T({type:"wisp",x:n.x,y:n.y,dur:1.6}),Oe(n.x,n.y,.8,"gold",f?40:14,4,.9,3,!0,3),!n.hero)break;const h=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],c=n.big===1,d=n.big===2,m=n.dur||0,p=c?"first":n.skill>=2?"multi":d?"ace":m>=7?"godlike":m>=5?"unstoppable":m===4?"rampage":m===3?"spree":"kill",x=p==="multi"?h[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[p],b=u&&n.team===u.team;it.banner(x,b?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(c||d||n.skill>=2||f));const M=u&&u.heroKey===n.kind&&u.dead&&n.team!==u.team,v=["","","double","triple","quadra","penta"];it.say(p==="first"?"first_blood":p==="multi"?v[Math.min(5,n.skill)]:p==="kill"?M?"you_died":b?"kill":"ally_killed":p),f&&et(6);break}case"runespawn":it.say("rune");break;case"chrono":T({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(u,f,h){u.globalAlpha=.35*(f>.9?(1-f)*10:1),ft(h.x,h.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[c,d]=P(h.x,h.y,0);for(let m=0;m<12;m++){const p=m/12*6.283;u.fillStyle="#ffffff",u.fillRect(Math.round(c+Math.cos(p)*n.radius*46),Math.round(d+Math.sin(p)*n.radius*23),3,3)}}}),et(5);break;case"hook_pull":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),Oe(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":T({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),Oe(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),et(3);break;case"pet_fade":if(Object.keys(q).some(u=>{if(!u.endsWith("_petfade"))return!1;try{return q[u](n)===!0}catch(f){return console.error(f),!1}}))break;Oe(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":it.sfx("item_blink",n.x,n.y),Oe(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),Oe(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":it.sfx("item_shield",n.x,n.y,.7),T({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),Oe(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":it.sfx("item_purge",n.x,n.y),T({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),Oe(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":it.sfx("item_invis",n.x,n.y),Oe(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":it.sfx("item_drum",n.x,n.y);for(let u=0;u<3;u++)T({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:u*.14});et(3);break;case"item_freeze":it.sfx("item_freeze",n.ex,n.ey),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),Oe(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const u=e.player;if(!u||n.team!==u.team)break;const f=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let h=0;h<3;h++)T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:f,w:4,delay:h*.18});T({type:"pingmark",x:n.x,y:n.y,dur:3,col:f,kind:n.kind}),it.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":{let u=!1;try{u=Eo.laser(n)}catch(f){console.error(f)}if(u){it.sfx("tower",n.ex,n.ey,.7);break}}T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),Oe(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),it.sfx("tower",n.ex,n.ey,.7);break;case"rooted":T({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const u=e.player&&e.winner===e.player.team;it.play(u?"victory":"defeat",1),it.say(u?"victory":"defeat")}else it.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":T({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}cu=1,Nc=1,Gc=null}function i4(e){for(const t of Kr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);el(Kr,t=>t.life>0),Kr.length>2500&&Kr.splice(0,Kr.length-2500);for(const t of ra)t.t+=e;el(ra,t=>t.t<t.dur+(t.delay||0));for(const t of ps)t.t+=e;el(ps,t=>t.t<t.dur);for(const t of No)t.delay>0?t.delay-=e:t.life-=e;el(No,t=>t.life>0),S.cam.shake=Math.max(0,S.cam.shake-e*30)}let Nf=6,ma=0;function a4(e,t,n,r,o,i){const{HW:s,HH:a,N:l,OX:u}=N,f=window.MAP,h=S.T;if(Nf-=e,Nf<=0&&(ma=g(.6,1),Nf=g(8,16)),ma=Math.max(0,ma-e*.25),S.wind=.35+.15*Math.sin(h*.4)+ma,ma>.3&&Math.random()<ma*.9){const c=n+Math.random()*o,m=t-20-u,p=(m/s+c/a)/2,y=(c/a-m/s)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];yr.push({k:"leaf",x:p,y,z:g(.4,2.2),ph:Math.random()*6,life:g(2.5,4),col:x,sp:g(9,15)})}if(yr.length<70&&Math.random()<.8){const c=t+Math.random()*r,d=n+Math.random()*o,m=c-u,p=d,y=(m/s+p/a)/2,x=(p/a-m/s)/2;if(y>1&&x>1&&y<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(y)];b===0||b===4?yr.push({k:"fly",x:y,y:x,z:g(.2,.9),ph:Math.random()*6,life:g(4,9),vx:g(-.3,.3),vy:g(-.3,.3)}):b===3&&yr.push({k:"spark",x:y,y:x,z:0,ph:Math.random()*6,life:g(.4,1),max:1})}}for(const c of yr)c.life-=e,c.k==="leaf"&&(c.x+=c.sp*e*.5,c.y-=c.sp*e*.5,c.z+=Math.sin(h*6+c.ph)*.02),c.k==="fly"&&(c.vx+=g(-.6,.6)*e,c.vy+=g(-.6,.6)*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=Math.sin(h*2+c.ph)*.003);if(el(yr,c=>c.life>0),yr.length>160&&yr.splice(0,yr.length-160),Math.random()<.1&&i.length){const c=i[Math.random()*i.length|0];if(c&&c.sprite.startsWith("prop_oak")){const[d,m]=P(c.x,c.y);d>t&&d<t+r&&m>n&&m<n+o+100&&F(c.x+g(-.4,.4),c.y+g(-.4,.4),1.4,g(-.3,.3),g(-.3,.3),-.25,4,c.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let X,O0,oi=null;function _1(e,t){X=O0=e,oi=t||null}function we(e){if(!oi){X.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(X===oi)return;oi.setTransform(O0.getTransform()),oi.globalAlpha=O0.globalAlpha,oi.globalCompositeOperation="lighter",oi.imageSmoothingEnabled=!1,X=oi}else X=O0}function ft(e,t,n,r,o,i=2,s){const{HW:a,HH:l}=N,[u,f]=P(e,t);X.beginPath(),X.ellipse(u,f,Math.max(.1,n*a*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(X.fillStyle=o,X.fill()),r&&(X.lineWidth=i,X.strokeStyle=r,s&&X.setLineDash(s),X.stroke(),X.setLineDash([]))}function Bf(e,t,n){X.beginPath(),e.forEach(([r,o],i)=>{const[s,a]=P(r,o);i?X.lineTo(s,a):X.moveTo(s,a)}),X.closePath(),X.fillStyle=n,X.fill(),X.strokeStyle=t,X.lineWidth=2,X.stroke()}function s4(){for(const e of ps){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];ft(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&ft(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&ft(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function qp(e,t){if(t>1)return;e.add&&we(!0),X.save();const n=performance.now();try{e.draw(X,t,e)}catch(o){console.error(o)}const r=performance.now()-n;r>2&&nu("fxSlow",1,(e.tag||e.type)+" "+r.toFixed(1)+"ms"),X.restore(),e.add&&we(!1)}function vt(e){we(e)}function Wt(){return X}function l4(){const{HW:e}=N;for(const t of ra){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&qp(t,r);continue}if(t.type==="ring")X.globalAlpha=Math.max(0,1-r),ft(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),X.globalAlpha=1;else if(t.type==="cone"){const[o,i]=P(t.x,t.y),s=Math.atan2(t.uy,t.ux);X.save(),we(!0),X.globalAlpha=Math.max(0,.75*(1-r)),X.beginPath(),X.moveTo(o,i);for(let f=0;f<=16;f++){const h=s-t.angle+2*t.angle*f/16,c=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=P(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c);X.lineTo(d,m)}X.closePath();const[a,l]=P(t.x+t.ux*t.range,t.y+t.uy*t.range),u=X.createLinearGradient(o,i,a,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),X.fillStyle=u,X.fill(),we(!1),X.restore()}else if(t.type==="cracks"){X.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,X.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const s=o+(i/6-.5)*Math.min(t.angle,3)*1.6;X.beginPath();let[a,l]=P(t.x,t.y);X.moveTo(a,l);for(let u=1;u<=5;u++){const f=t.range*u/5,h=s+(W(t.seed+i*7+u)-.5)*.6;[a,l]=P(t.x+Math.cos(h)*f,t.y+Math.sin(h)*f),X.lineTo(a,l)}X.stroke()}}else if(t.type==="flash"){const[o,i]=P(t.x,t.y,.3),s=t.r*e*1.3;we(!0);const a=X.createRadialGradient(o,i,0,o,i,s);a.addColorStop(0,t.col+.8*(1-r)+")"),a.addColorStop(1,t.col+"0)"),X.fillStyle=a,X.fillRect(o-s,i-s,s*2,s*2),we(!1)}else if(t.type==="streak"){const[o,i]=P(t.x,t.y,.4),[s,a]=P(t.ex,t.ey,.4);we(!0),X.strokeStyle=t.col,X.globalAlpha=Math.max(0,.9*(1-r)),X.lineWidth=8*(1-r)+1,X.beginPath(),X.moveTo(o,i),X.lineTo(s,a),X.stroke(),X.globalAlpha=1,we(!1)}else if(t.type==="puff"){const[o,i]=P(t.x,t.y,.3+r*.4),s=t.col;X.fillStyle=`rgba(${s[0]},${s[1]},${s[2]},${.5*(1-r)})`;const a=t.r*(.6+r*.7);X.beginPath(),X.ellipse(o,i,a,a*.75,0,0,7),X.fill()}}Vp("ground")}function Vp(e){for(const t in pc){X.save();try{pc[t](e)}catch(n){console.error(n)}we(!1),X.restore()}}function u4(){const e=S.T;for(const t of ra){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&qp(t,r);continue}const o=t.uid?st(t.uid):null,i=o?o.x:t.x,s=o?o.y:t.y;if(t.type==="pillar"){const[a,l]=P(i,s),u=t.col,f=140*Math.min(1,r*4),h=Math.max(0,.6*(1-r));we(!0);const c=X.createLinearGradient(a,l,a,l-f);c.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${h})`),c.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),X.fillStyle=c,X.fillRect(a-18,l-f,36,f),we(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[a,l]=P(i,s,.35),u=t.col;we(!0),X.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,X.lineWidth=2,X.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,X.beginPath(),X.ellipse(a,l,34,38,0,0,7),X.fill(),X.stroke();for(let f=0;f<6;f++){const h=e*1.5+f*1.05;X.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,X.fillRect(a+Math.cos(h)*30-1,l+Math.sin(h)*34-1,3,3)}we(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[a,l]=P(i,s,.3);X.strokeStyle="rgba(160,255,190,0.7)",X.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;X.beginPath(),X.ellipse(a,l,26,12,0,f,f+1.4),X.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[a,l]=P(i,s);X.strokeStyle="#4a7a2a",X.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;X.beginPath(),X.moveTo(a+Math.cos(f)*16,l+Math.sin(f)*7),X.quadraticCurveTo(a+Math.cos(f)*22,l-18,a+Math.cos(f+1.2)*6,l-30),X.stroke()}X.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;X.fillRect(a+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[a,l]=P(t.x,t.y,3*(1-r));we(!0),X.strokeStyle="rgba(240,200,255,0.9)",X.lineWidth=4,X.beginPath(),X.moveTo(a-18,l-50),X.lineTo(a,l),X.stroke(),X.fillStyle="#ffffff",X.fillRect(a-3,l-3,6,6),we(!1)}else if(t.type==="xslash"){const[a,l]=P(t.x,t.y,.5),u=40*Math.min(1,r*3);X.globalAlpha=Math.max(0,1-r),X.strokeStyle="#ffffff",X.lineWidth=6,X.beginPath(),X.moveTo(a-u,l-u),X.lineTo(a+u,l+u),X.moveTo(a+u,l-u),X.lineTo(a-u,l+u),X.stroke(),X.strokeStyle="#ff4040",X.lineWidth=2,X.stroke(),X.globalAlpha=1}else if(t.type==="spark"){const[a,l]=P(t.x,t.y,.45),u=(t.big?16:10)*(1-r);we(!0),X.fillStyle=t.col,X.fillRect(a-u,l-1,u*2,3),X.fillRect(a-1,l-u,3,u*2),X.fillRect(a-u*.5,l-u*.5,u,u),we(!1)}else if(t.type==="jaws"){const[a,l]=P(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));X.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",X.lineWidth=5,X.beginPath(),X.arc(a,l-u,24,.2,Math.PI-.2),X.stroke(),X.beginPath(),X.arc(a,l+u,24,Math.PI+.2,-.2),X.stroke()}else if(t.type==="pingmark"){const[a,l]=P(t.x,t.y,.9+Math.sin(e*6)*.05);f4(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),X.beginPath(),X.moveTo(a,l+14),X.lineTo(a-9,l-2),X.arc(a,l-6,10,Math.PI*.85,Math.PI*.15),X.closePath(),X.fill(),X.stroke(),X.fillStyle="#120c1a",X.font="bold 13px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",a,l-6),X.globalAlpha=1}else if(t.type==="wisp"){const[a,l]=P(t.x,t.y,.5+r*2);we(!0),X.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",X.beginPath(),X.arc(a+Math.sin(r*12)*6,l,7,0,7),X.fill(),we(!1)}}Vp("top")}function f4(e,t){X.globalAlpha=t,X.fillStyle=e,X.strokeStyle="#120c1a",X.lineWidth=2}function c4(){const{HW:e,HH:t,OX:n,ZK:r}=N;for(const o of Kr){if(o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r;X.globalAlpha=Math.min(1,o.life/o.max*1.5),X.fillStyle=o.col,X.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}X.globalAlpha=1,we(!0);for(const o of Kr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r,a=Math.min(1,o.life/o.max*1.5);X.globalAlpha=a*.35,X.fillStyle=o.col,X.fillRect(Math.round(i-o.size),Math.round(s-o.size),o.size*2,o.size*2),X.globalAlpha=a,X.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}X.globalAlpha=1,we(!1)}function h4(){const e=S.T,{HW:t,HH:n,OX:r,ZK:o}=N;for(const i of yr){if(i.k!=="leaf")continue;const s=(i.x-i.y)*t+r,a=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;X.fillStyle="#00000040",X.fillRect(s-l/2+2,a+2,l,3),X.fillStyle=i.col,X.fillRect(s-l/2,a,l,3)}we(!0);for(const i of yr){if(i.k==="leaf")continue;const s=(i.x-i.y)*t+r,a=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);X.fillStyle=`rgba(210,255,120,${.25*l})`,X.fillRect(s-3,a-3,6,6),X.fillStyle=`rgba(250,255,200,${.9*l})`,X.fillRect(s-1,a-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));X.fillStyle=`rgba(255,255,255,${.7*l})`,X.fillRect(s-1,a,3,1),X.fillRect(s,a-1,1,3)}}we(!1)}function d4(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function m4(){const{HW:e,HH:t}=N,n=S.T;for(const r of S.game.projs){const o=r.z||.45,[i,s]=P(r.x,r.y,o),a=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=d4(r.look||r.fx),u=l?Ge[l]:void 0;if(u){X.save();try{u(X,r,i,s,a,n)}catch(h){console.error(h)}X.restore(),we(!1);continue}if(!l){X.save();let h=!1;try{h=Eo.proj(X,r,i,s,a,n)}catch(c){console.error(c)}if(X.restore(),we(!1),h)continue}const f=kn[r.fx]||kn.arcane;if(r.fx==="arrow"||r.fx==="spear"){const h=r.fx==="arrow"?r.skill?26:16:12;X.save(),X.translate(i,s),X.rotate(a),X.fillStyle="#3a2a1a",X.fillRect(-h,-2,h,4),X.fillStyle="#e8d8b0",X.fillRect(-h,-1,h,2),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(5,0),X.lineTo(-2,-4),X.lineTo(-2,4),X.fill(),X.fillStyle="#e05050",X.fillRect(-h-3,-3,5,2),X.fillRect(-h-3,1,5,2),X.restore(),r.skill&&F(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")X.save(),X.translate(i,s),X.rotate(n*25),X.fillStyle="#1a1020",X.fillRect(-9,-3,18,6),X.fillStyle="#e0e8f0",X.fillRect(-8,-2,14,4),X.fillStyle="#c8a040",X.fillRect(-10,-3,4,6),X.restore();else if(r.fx==="root")X.fillStyle="#5a3a20",X.beginPath(),X.arc(i,s,7,0,7),X.fill(),X.fillStyle="#8ad050",X.beginPath(),X.arc(i+3,s-3,4,0,7),X.fill(),F(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const h=r.skill?10:6;we(!0);const c=X.createRadialGradient(i,s,0,i,s,h*2.4);c.addColorStop(0,f[1]),c.addColorStop(.4,f[2]+"aa"),c.addColorStop(1,f[3]+"00"),X.fillStyle=c,X.fillRect(i-h*2.4,s-h*2.4,h*4.8,h*4.8),we(!1),X.fillStyle=f[0],X.fillRect(i-3,s-3,6,6),Math.random()<.8&&F(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const zt=Math.round,Sn=Math.PI*2;let mt=0,pt=0;function Re(e,t,n=0){mt=(e-t)*N.HW+N.OX,pt=(e+t)*N.HH-n*N.ZK}function Rt(e,t,n,r,o){e.fillStyle=o,e.fillRect(zt(t-r/2),zt(n-r/2),r,r)}function he(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(zt(t+(r-t)*l/a-i/2),zt(n+(o-n)*l/a-i/2),i,i)}function Bc(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(zt(t-s/2),zt(n+i*o),zt(s),Math.max(1,zt(2*o)))}}const Vo=e=>e<0?0:e>1?1:e,$r=e=>1-(1-e)*(1-e),or=(e,t)=>e<t?1:(1-e)/(1-t),A1={b:{d:"#1a3c78",m:"#3c86e0",l:"#8cc8ff",w:"#dcefff"},r:{d:"#7a1a18",m:"#d8443a",l:"#ff9a84",w:"#ffe6dc"},n:{d:"#4a4a52",m:"#8a8a96",l:"#c8c8d0",w:"#ececf0"}},T1={b:{k:"#0e3a66",d:"#1e6ab0",m:"#4ab8f0",l:"#a8ecff",w:"#e2faff",n:7001343},r:{k:"#6a1a08",d:"#c0401a",m:"#ff8a3a",l:"#ffd08a",w:"#fff2d6",n:16751178}},$u=e=>T1[e]||T1.b,kl=e=>A1[e]||A1.n,cr={k:"#2e1c0e",d:"#4a2e18",m:"#7a5030",l:"#b08050"},Dr={d:"#4a5260",m:"#9aa6b4",l:"#dfe6ee"},ys=["#d8c8a8","#b8a07a","#8a7454"],p4=["#8a7a6a","#5a4e44","#b4a490"],Pa={d:"#7a0e1a",m:"#c41e34",l:"#ff5a70"},$f={d:"#3a1a40",m:"#7a3a80",fang:"#f4e8ee"},Es={d:"#2a2a7a",m:"#4a5ad0",l:"#8a9af0",spot:"#a8f0ff"},pa={bark:"#4a3420",barkL:"#7a5a34",leaf:["#3e7a2a","#5aa040","#8ad050"]},Ai={k:"#12302e",shell:"#2a9a8a",shellL:"#5ad0b8",tip:"#e08a2a",tipL:"#ffc070"},So={d:"#2a8a6a",m:"#5ac8a0",l:"#a8f0d0",w:"#e0fff2"},Ir={k:"#24242c",d:"#3e3e48",m:"#62626e",l:"#8a8a96",cr:"#9a5ae8",crL:"#d8b8ff",n:11565823},ei={jaw:"#6a4aa0",jawL:"#a07ad8",fang:"#f6eef6",foam:"#e8fbff",wat:["#c8f4f0","#6ac0d0","#2a80a0"]},jr={y:"#ffc83a",k:"#2a1a10",wing:"#e8f4ff",honey:"#ffb020",honeyL:"#ffe080",venom:"#c8e050"},gr={k:"#16608a",d:"#2aa6c8",m:"#6ee2f4",l:"#c4f6ff",w:"#f4fdff",n:7267060},Ls={k:"#3a342a",d:"#746c5c",m:"#a49c8a",l:"#d6cfc0",moss:["#8ac050","#5a8a34"]},t0={d:"#4a4a18",m:"#a8a030",l:"#d8d070"},e0=new Map;function so(e){let t=e0.get(e);if(t)return t;const n=e.charCodeAt(0)===64?e.slice(1):e,r=n.indexOf(".");return t=r<0?{b:n,t:"n"}:{b:n.slice(0,r),t:n.slice(r+1)||"n"},e0.size>200&&e0.clear(),e0.set(e,t),t}const z0=e=>e==="blue"?"b":e==="red"?"r":"n";function Yp(e){if(e.type==="bite")return so("serpent.n");if(typeof e.sprite=="string"&&e.sprite.indexOf(".")>0)return so(e.sprite);if(e.col==="tower_blue"||e.col==="tower_red")return so(e.col==="tower_red"?"tw.r":"tw.b");const t=e.uid?st(e.uid):null;if(t&&!t.heroKey){const n=z0(t.team);if(t.kind==="tower")return so("tw."+n);if(t.kind==="monster"||t.pet)return so((t.sprite||"slime")+"."+n);if(t.kind==="minion")return so((t.siege?"sg":e.proj?"mr":"mm")+"."+n)}return e.kind==="tower"?so("tw."+z0(e.team)):e.kind==="minion"?so((e.proj?"mr":"mm")+"."+z0(e.team)):null}let Nr=1,Jr=0,jp=0,Kp=0,Hu=1,$c=!1;function Qo(e){const t=e.uid?st(e.uid):null;let n=0,r=0;if($c=!!t,Hu=t&&t.scale||1,t){jp=t.x,Kp=t.y;const i=e.x-t.x,s=e.y-t.y;n=(i-s)*N.HW,r=(i+s)*N.HH}const o=Math.hypot(n,r);if(o<.001){const i=Math.random()*Sn;Nr=Math.cos(i),Jr=Math.sin(i)}else Nr=n/o,Jr=r/o}function y4(e,t){const n=e.x,r=e.y,o=kl(t);Qo(e);const i=Nr,s=Jr,a=-s,l=i;T({type:"custom",layer:"top",dur:.22,x:n,y:r,draw(u,f){Re(n,r,.42);const h=f<.35?$r(f/.35):1-(f-.35)/.65,c=-12+h*14;u.globalAlpha=or(f,.55);const d=mt+i*(c-22),m=pt+s*(c-22),p=mt+i*(c-5),y=pt+s*(c-5);if(he(u,d,m,p,y,2,cr.m),he(u,p,y,mt+i*c,pt+s*c,3,Dr.m),Rt(u,mt+i*c,pt+s*c,2,Dr.l),Rt(u,d+i*4+a*2,m+s*4+l*2,3,o.m),Rt(u,d+i*2+a*4,m+s*2+l*4,2,o.l),f>.25&&f<.6){const x=zt(6*(1-(f-.25)/.35))+1;u.fillStyle=Dr.l,u.fillRect(zt(mt-x),zt(pt)-1,x*2,2),u.fillRect(zt(mt)-1,zt(pt-x),2,x*2),Rt(u,mt,pt,3,o.w)}}}),F(n,r,.45,g(-.8,.8),g(-.8,.8),g(1,2),.3,o.m,2,9,!1),F(n,r,.45,g(-.8,.8),g(-.8,.8),g(1,2),.3,cr.l,2,9,!1),F(n,r,.05,g(-.4,.4),g(-.4,.4),.4,.35,ys[0],3,0,!1,.9)}function g4(e,t,n,r,o,i,s){const a=Math.cos(o),l=Math.sin(o),u=-l,f=a,h=(t.id||0)*1.9,c=kl(s);he(e,n-a*15,r-l*15,n-a*3,r-l*3,2,cr.m),Rt(e,n-a*9+u,r-l*9+f,1,cr.l),he(e,n-a*3,r-l*3,n+a*2,r+l*2,3,Dr.m),Rt(e,n+a*3,r+l*3,2,Dr.l);for(let d=0;d<4;d++){const m=15+d*2.5,p=Math.sin(i*30+h-d*.9)*(1+d*.8);Rt(e,n-a*m+u*p,r-l*m+f*p,2,d<2?c.m:c.l)}}function x4(e,t){const n=e.x,r=e.y,o=kl(t);Qo(e);const i=Nr,s=Jr,a=g(9,14),l=-g(9,14);T({type:"custom",layer:"top",dur:.5,x:n,y:r,draw(u,f){if(Re(n,r,.42),u.globalAlpha=or(f,.6),f<.16){const c=Math.sin(f*120)*1.5;he(u,mt-i*18,pt-s*18+c,mt-i*3,pt-s*3,2,cr.m),Rt(u,mt-i*2,pt-s*2,3,Dr.m),Rt(u,mt,pt,4,o.l);return}const h=(f-.16)/.84;for(let c=0;c<2;c++){const d=c?l:a,m=mt-i*(c?14:6)+d*h*1.6,p=pt-s*(c?14:6)-14*h+46*h*h,y=Math.atan2(s,i)+d*h*.9,x=Math.cos(y)*5,b=Math.sin(y)*5;he(u,m-x,p-b,m+x,p+b,2,c?cr.m:cr.l),c?Rt(u,m-x,p-b,2,o.m):Rt(u,m+x,p+b,2,Dr.m)}}}),F(n,r,.45,g(-1,1),g(-1,1),g(1,2),.3,cr.l,2,10,!1),F(n,r,.45,g(-1,1),g(-1,1),g(1.5,2.5),.35,o.m,2,8,!1)}function M4(e,t,n,r,o,i,s){const a=Math.cos(o),l=Math.sin(o),u=-l,f=a,h=kl(s);he(e,n-a*22,r-l*22,n-a*4,r-l*4,4,cr.k),he(e,n-a*22,r-l*22,n-a*4,r-l*4,2,cr.m),he(e,n-a*5+u*4,r-l*5+f*4,n-a*5-u*4,r-l*5-f*4,2,Dr.d),he(e,n-a*3+u*3,r-l*3+f*3,n-a*3-u*3,r-l*3-f*3,2,Dr.m),he(e,n-a*1+u*2,r-l*1+f*2,n-a*1-u*2,r-l*1-f*2,2,Dr.m),Rt(e,n+a*2,r+l*2,2,Dr.l);for(const c of[-1,1])he(e,n-a*22,r-l*22,n-a*17+u*4*c,r-l*17+f*4*c,2,h.m),Rt(e,n-a*23+u*3*c,r-l*23+f*3*c,2,h.l);Math.random()<.4&&F(t.x,t.y,(t.z||.45)+.05,g(-.2,.2),g(-.2,.2),.3,.5,Math.random()<.5?"#b4b4c4":"#80808e",3,-.5,!1,.9)}function b4(e,t){const n=e.x,r=e.y,o=kl(t),i=Math.random()*Sn;T({type:"custom",layer:"ground",dur:.7,x:n,y:r,draw(s,a){Re(n,r),s.globalAlpha=or(a,.4)*.85;for(let u=0;u<5;u++){const f=i+u/5*Sn+(u&1?.3:-.2),h=10+u%3*5;he(s,mt,pt,mt+Math.cos(f)*h,pt+Math.sin(f)*h*.5,2,cr.k),he(s,mt+Math.cos(f)*h,pt+Math.sin(f)*h*.5,mt+Math.cos(f+.4)*(h+6),pt+Math.sin(f+.4)*(h+6)*.5,2,cr.d)}const l=8+$r(Vo(a*1.5))*30;s.globalAlpha=(1-a)*.9;for(let u=0;u<16;u++){const f=i+u/16*Sn;Rt(s,mt+Math.cos(f)*l,pt+Math.sin(f)*l*.5,u&1?4:3,ys[u%3])}}}),T({type:"custom",layer:"top",dur:.16,x:n,y:r,draw(s,a){Re(n,r,.45);const l=zt(12*(1-a))+2;s.fillStyle=Dr.l,s.fillRect(zt(mt-l),zt(pt)-1,l*2,3),s.fillRect(zt(mt)-1,zt(pt-l),3,l*2),Rt(s,mt,pt,5,o.l)}});for(let s=0;s<4;s++)F(n,r,.4,g(-2,2),g(-2,2),g(2,4),g(.4,.6),s&1?cr.m:cr.l,3,14,!1,.96);for(let s=0;s<3;s++)F(n+g(-.2,.2),r+g(-.2,.2),.1,g(-.6,.6),g(-.6,.6),g(.2,.6),.6,ys[s],5,0,!1,.9);et(1.5)}function v4(e){for(let t=0;t<4;t++)F(e.x+g(-.15,.15),e.y+g(-.15,.15),.35,g(-.6,.6),g(-.6,.6),g(.2,.8),.5,t&1?"#b4b4c4":ys[0],4,-.3,!1,.9)}function Qp(e,t,n,r,o,i,s){const a=$u(s),l=Math.cos(o),u=Math.sin(o),f=-u,h=l;vt(!0);const c=Wt();for(let d=1;d<=5;d++){const m=8+d*5,p=Math.sin(i*26+d*1.3)*1.5;c.globalAlpha=.6-d*.1,Rt(c,n-l*m+f*p,r-u*m+h*p,5-(d>>1),d<3?a.m:a.d)}c.globalAlpha=.3,he(c,n-l*6,r-u*6,n+l*4,r+u*4,12,a.d),c.globalAlpha=1,vt(!1),he(e,n-l*5,r-u*5,n+l*2,r+u*2,7,a.k),he(e,n-l*9,r-u*9,n+l*7,r+u*7,4,a.d),he(e,n-l*4,r-u*4,n+l*3,r+u*3,5,a.m),he(e,n-l*10,r-u*10,n+l*9,r+u*9,2,a.l),Rt(e,n+f*1+l*2,r+h*1+u*2,2,a.w),(i*30|0)%3===0&&Math.random()<.6&&F(t.x,t.y,t.z||1.3,g(-.3,.3),g(-.3,.3),g(-.3,.3),.3,a.l,2,0,!0)}function w4(e,t){const n=e.x,r=e.y,o=$u(t),i=Math.random()*Sn,s=g(-1,1);T({type:"custom",layer:"top",add:!0,dur:.38,x:n,y:r,draw(a,l){Re(n,r,.45);const u=mt,f=pt;if(l<.35){const c=1-l/.35,d=zt(14*c)+2;a.globalAlpha=c,a.fillStyle=o.l,a.fillRect(zt(u-d),zt(f)-1,d*2,3),a.fillRect(zt(u)-1,zt(f-d),3,d*2),Rt(a,u,f,zt(6*c)+2,o.w)}a.globalAlpha=or(l,.5);const h=5+$r(l)*24;for(let c=0;c<6;c++){const d=i+c/6*Sn,m=u+Math.cos(d)*h,p=f+Math.sin(d)*h*.7+20*l*l,y=c+s*3+l*9|0;Rt(a,m,p,3,c&1?o.l:o.m),Rt(a,m+(y&1?2:-2),p-2,2,o.d)}}}),T({type:"custom",layer:"ground",add:!0,dur:.42,x:n,y:r,draw(a,l){Re(n,r);const u=8+$r(l)*24,f=u/2;a.globalAlpha=(1-l)*.9,he(a,mt-u,pt,mt,pt-f,2,o.m),he(a,mt,pt-f,mt+u,pt,2,o.m),he(a,mt+u,pt,mt,pt+f,2,o.m),he(a,mt,pt+f,mt-u,pt,2,o.m),Rt(a,mt-u,pt,3,o.l),Rt(a,mt+u,pt,3,o.l),Rt(a,mt,pt-f,3,o.l),Rt(a,mt,pt+f,3,o.l)}});for(let a=0;a<3;a++)F(n,r,.5,g(-.8,.8),g(-.8,.8),g(1,2),.35,a?o.l:o.m,2,3,!0);Mt(n,r,1.1,o.n,.65,.22)}function S4(e,t){const n=e.x,r=e.y,o=$u(t);T({type:"custom",layer:"top",add:!0,dur:.24,x:n,y:r,draw(i,s){Re(n,r,1.3);const a=1-s,l=zt(16*a)+3;i.globalAlpha=a,i.fillStyle=o.m,i.fillRect(zt(mt-l),zt(pt)-1,l*2,3),i.fillRect(zt(mt)-1,zt(pt-l*1.4),3,zt(l*2.8)),Rt(i,mt,pt,zt(7*a)+2,o.l);const u=4+s*16;for(let f=0;f<6;f++){const h=f/6*Sn+.5;Rt(i,mt+Math.cos(h)*u,pt+Math.sin(h)*u*.8,2,o.l)}}}),Mt(n,r,1.4,o.n,.55,.2)}function _4(e){const t=e.team==="red"?"r":"b",n=$u(t),r=e.x,o=e.y,i=e.ex,s=e.ey;T({type:"custom",layer:"top",add:!0,dur:.3,x:r,y:o,draw(a,l){Re(r,o,1);const u=mt,f=pt;Re(i,s,.45);const h=mt,c=pt,d=9,m=1-l;let p=u,y=f;for(let x=1;x<=d;x++){const b=x/d,M=x<d?(Math.random()-.5)*12*m:0,v=u+(h-u)*b+M,w=f+(c-f)*b-M*.5;a.globalAlpha=.35*m,he(a,p,y,v,w,8,n.d),a.globalAlpha=m,he(a,p,y,v,w,3,n.m),he(a,p,y,v,w,1,n.w),p=v,y=w}}}),T({type:"custom",layer:"ground",add:!0,dur:.45,x:i,y:s,draw(a,l){Re(i,s);const u=10+l*22;a.globalAlpha=1-l;for(let f=0;f<12;f++){const h=f/12*Sn+l*2;Rt(a,mt+Math.cos(h)*u,pt+Math.sin(h)*u*.5,f&1?2:4,f&1?n.l:n.m)}}});for(let a=0;a<6;a++)F(i,s,.4,g(-1.5,1.5),g(-1.5,1.5),g(1,3),.45,a&1?n.l:n.m,2,5,!0);Mt(i,s,1.4,n.n,.8,.3)}function A4(e){const t=e.x,n=e.y;Qo(e);const r=Hu>1.15,o=r?4:3,i=r?30:22,s=Math.random()<.5?1:-1,a=.62*s,l=.78,u=.78,f=-.62*s;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(h,c){Re(t,n,.5);const d=Vo(c*4.5);h.globalAlpha=or(c,.45);for(let m=0;m<o;m++){const p=(m-(o-1)/2)*6,y=i-Math.abs(m-(o-1)/2)*4,x=mt+u*p-a*y/2,b=pt+f*p-l*y/2,M=x+a*y*d,v=b+l*y*d;he(h,x+1,b+2,M+1,v+2,2,Pa.d),he(h,x,b,M,v,2,"#f2e2cc")}}});for(let h=0;h<3;h++)F(t,n,.5,g(-1,1),g(-1,1),g(.5,1.5),.45,p4[h],2,3,!1,.9);F(t,n,.45,g(-.8,.8),g(-.8,.8),g(1,2),.35,Pa.m,2,10,!1),r&&et(1)}function T4(e){const t=e.x,n=e.y;Qo(e);const r=$c?jp:t,o=$c?Kp:n;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(i,s){Re(t,n,.5);const a=mt,l=pt;if(s<.4){const u=zt(9*(1-Vo(s*4))),f=s<.25?1:(.4-s)/.15;i.globalAlpha=f;for(const h of[-1,1]){const c=a+h*5;i.fillStyle=$f.d,i.fillRect(zt(c-3),zt(l-u-6),6,2),i.fillRect(zt(c-3),zt(l+u+4),6,2),i.fillStyle=$f.fang,i.fillRect(zt(c-2),zt(l-u-4),4,2),i.fillRect(zt(c-1),zt(l-u-2),2,3),i.fillRect(zt(c-1),zt(l+u+1),2,3)}}for(let u=0;u<3;u++){const f=Vo((s-.18-u*.08)/.55);if(f<=0||f>=1)continue;const h=t+(r-t)*f,c=n+(o-n)*f;Re(h,c,.5+Math.sin(f*Math.PI)*.35),i.globalAlpha=1,Rt(i,mt,pt,3,u?Pa.m:Pa.l),Rt(i,mt,pt-2,1,Pa.l)}}}),F(t,n,.45,g(-.6,.6),g(-.6,.6),g(.5,1.5),.4,Pa.d,2,10,!1),F(t,n,.5,g(-.4,.4),g(-.4,.4),g(.2,.6),.35,$f.m,2,0,!1,.9)}function R4(e){const t=e.x,n=e.y;Qo(e);const r=Hu>1.1,o=r?1.4:1,i=[g(-8,-3),g(-3,1),g(3,8),g(-6,-1),g(-1,3),g(1,6),g(-2,2),g(-6,-3)];T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(s,a){Re(t,n,.45+a*.25),s.globalAlpha=or(a,.3)*.85;for(let l=0;l<4;l++){const u=(3+$r(Vo(a*2-l*.12))*(6+l))*o;s.fillStyle=l===3?Es.l:l&1?Es.m:Es.d,Bc(s,mt+i[l]*o*1.6,pt+i[l+4]*o-a*6*l,u,.8)}a<.2&&(s.globalAlpha=1,Rt(s,mt,pt,4,Es.spot))}});for(let s=0;s<3;s++)F(t+g(-.2,.2),n+g(-.2,.2),.5,g(-.3,.3),g(-.3,.3),g(.4,.9),g(.6,.9),Es.spot,2,-.2,!0,.95)}function C4(e){const t=e.x,n=e.y;Qo(e);const r=Nr>=0?1:-1;T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(o,i){Re(t,n,.5);const s=mt-r*6,a=pt+4,l=Vo(i*3.2),u=-Math.PI/2-r*1.2;o.globalAlpha=or(i,.5);const f=8,h=24;for(let c=0;c<=f*l;c++){const d=u+r*(c/f)*1.9,m=s+Math.cos(d)*h,p=a+Math.sin(d)*h*.8;Rt(o,m,p,5,pa.bark),Rt(o,m-1,p-1,2,pa.barkL),c===(f*l|0)&&(Rt(o,m+3,p-3,4,pa.leaf[1]),Rt(o,m-3,p-4,3,pa.leaf[2]))}}}),T({type:"custom",layer:"ground",dur:.5,delay:.09,x:t,y:n,draw(o,i){Re(t,n);const s=8+$r(i)*26;o.globalAlpha=(1-i)*.85;for(let a=0;a<14;a++){const l=a/14*Sn;Rt(o,mt+Math.cos(l)*s,pt+Math.sin(l)*s*.5,a&1?3:4,ys[(a>>1)%3])}}});for(let o=0;o<4;o++)F(t+g(-.2,.2),n+g(-.2,.2),.8,g(-.8,.8),g(-.8,.8),g(.5,1.2),g(.8,1.1),pa.leaf[o%3],3,1.6,!1,.9);for(let o=0;o<2;o++)F(t,n,.45,g(-1.5,1.5),g(-1.5,1.5),g(1.5,2.5),.4,pa.barkL,2,12,!1);et(1.2)}function P4(e){const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){Re(t,n,.45);const i=1-Vo(o*4);r.globalAlpha=or(o,.55);for(const s of[-1,1]){const a=mt+s*(10+i*8),l=pt;for(let u=0;u<6;u++){const f=-Math.PI/2+u/5*(Math.PI/2)*1.1,h=a-s*Math.cos(f)*10,c=l+Math.sin(f)*8;Rt(r,h,c,u<3?4:3,Ai.k),Rt(r,h,c,2,u<3?Ai.shell:Ai.tip)}Rt(r,a-s*10,l+1,2,Ai.tipL)}if(o>.22&&o<.45){r.fillStyle=Ai.tipL;const s=zt((.45-o)*30);r.fillRect(zt(mt-s),zt(pt)-1,s*2,2),r.fillRect(zt(mt)-1,zt(pt-s),2,s*2)}}});for(let r=0;r<3;r++)F(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1,2.2),.35,r?Ai.shellL:Ai.tip,2,10,!1)}function I4(e){const t=e.x,n=e.y,r=Math.random()*Sn;T({type:"custom",layer:"ground",dur:.8,x:t,y:n,draw(o,i){Re(t,n);const s=(i<.15?i/.15:1-(i-.15)*.5)*12;o.globalAlpha=or(i,.4)*.6,o.fillStyle=So.d,Bc(o,mt,pt,s+2,.5),o.fillStyle=So.m,Bc(o,mt-2,pt-1,s,.5),Rt(o,mt-s*.4,pt-2,2,So.w)}}),T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(o,i){Re(t,n,.42);const s=4+$r(i)*16,a=i<.5?4:3;o.globalAlpha=or(i,.5);for(let l=0;l<6;l++){const u=r+l/6*Sn,f=mt+Math.cos(u)*s,h=pt+Math.sin(u)*s*.7+8*i*i;Rt(o,f,h,a,So.m),Rt(o,f-1,h-1,2,So.l)}i<.3&&(Rt(o,mt,pt,6,So.m),Rt(o,mt-1,pt-1,3,So.w))}});for(let o=0;o<3;o++)F(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1.5,2.8),.45,o?So.m:So.l,3,12,!1)}function O4(e){const t=e.x,n=e.y;Qo(e);const r=Hu>1.3,o=Math.random()*Sn;T({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,s){Re(t,n),i.globalAlpha=or(s,.4)*.8;for(let a=0;a<3;a++){const l=o+a*2.1,u=r?20:14;he(i,mt,pt,mt+Math.cos(l)*u,pt+Math.sin(l)*u*.5,2,Ir.k),Rt(i,mt+Math.cos(l)*u,pt+Math.sin(l)*u*.5,2,Ir.cr)}}}),T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,s){Re(t,n,.45);const a=mt,l=pt;if(i.globalAlpha=or(s,.5),s<.3){const f=1-s/.3,h=zt((r?14:10)*(.6+f*.4));i.fillStyle=Ir.k,i.fillRect(zt(a-h/2-Nr*6*f)-1,zt(l-h/2-Jr*6*f)-1,h+2,h+2),i.fillStyle=Ir.m,i.fillRect(zt(a-h/2-Nr*6*f),zt(l-h/2-Jr*6*f),h,h),i.fillStyle=Ir.l,i.fillRect(zt(a-h/2-Nr*6*f),zt(l-h/2-Jr*6*f),h,2)}const u=6+$r(s)*20;for(let f=0;f<5;f++){const h=o+f/5*Sn,c=a+Math.cos(h)*u,d=l+Math.sin(h)*u*.6-12*Math.sin(s*Math.PI);Rt(i,c,d,3,f&1?Ir.cr:Ir.crL),Rt(i,c,d+2,2,Ir.cr)}}});for(let i=0;i<3;i++)F(t,n,.4,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,i?Ir.d:Ir.m,4,14,!1,.95);F(t,n,.5,g(-.6,.6),g(-.6,.6),g(1,2),.4,Ir.crL,2,4,!0),Mt(t,n,.8,Ir.n,.4,.18),et(r?2:1)}function z4(e){const t=e.x,n=e.y,r=Math.random()*Sn,o=window.SIM&&window.SIM.MONSTERS&&window.SIM.MONSTERS.serpent,i=o&&o.aoe||1.3;T({type:"custom",layer:"top",dur:.42,x:t,y:n,draw(s,a){Re(t,n,.5);const l=mt,u=pt,f=22*(1-$r(Vo(a*3)));s.globalAlpha=or(a,.45);for(const h of[-1,1]){const c=u+h*(f+6);for(let d=0;d<=10;d++){const m=d/10*Math.PI,p=l-Math.cos(m)*24,y=c+h*Math.sin(m)*8;Rt(s,p,y,5,ei.jaw),Rt(s,p,y-h,2,ei.jawL),d%2===1&&d<10&&(s.fillStyle=ei.fang,s.fillRect(zt(p-1),zt(h<0?y+2:y-7),3,5))}}}}),T({type:"custom",layer:"ground",dur:.6,delay:.1,x:t,y:n,draw(s,a){Re(t,n);const l=(.3+$r(a)*.7)*i*N.HW*Math.SQRT2;s.globalAlpha=(1-a)*.9;for(let u=0;u<20;u++){const f=r+u/20*Sn;Rt(s,mt+Math.cos(f)*l,pt+Math.sin(f)*l*.5,u&1?3:4,u&1?ei.foam:ei.wat[1])}s.globalAlpha=(1-a)*.5;for(let u=0;u<10;u++){const f=r+u/10*Sn+.3;Rt(s,mt+Math.cos(f)*l*.7,pt+Math.sin(f)*l*.35,3,ei.wat[2])}}});for(let s=0;s<10;s++){const a=Math.random()*Sn,l=g(1,3);F(t,n,.3,Math.cos(a)*l,Math.sin(a)*l,g(2,4),.55,ei.wat[s%3],3,12,!1)}for(let s=0;s<2;s++)F(t,n,.5,g(-1,1),g(-1,1),g(1,2),.4,ei.jawL,2,8,!1);et(4)}function F4(e,t,n,r,o,i){const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=(t.id||0)*2.3;for(let c=1;c<=3;c++)e.globalAlpha=.6-c*.15,Rt(e,n-s*(8+c*4),r-a*(8+c*4)+Math.sin(i*25+f+c)*1.5,2,jr.honeyL);e.globalAlpha=1;for(let c=0;c<4;c++)Rt(e,n-s*(7-c*2),r-a*(7-c*2),3,c&1?jr.k:jr.y);he(e,n+s*1,r+a*1,n+s*5,r+a*5,1,jr.k);const h=Math.sin(i*70+f)>0?3:2;e.globalAlpha=.75,Rt(e,n-s*4+l*h,r-a*4+u*h-1,2,jr.wing),Rt(e,n-s*4-l*h,r-a*4-u*h-1,2,jr.wing),e.globalAlpha=1}function E4(e){const t=e.x,n=e.y;Qo(e);const r=Nr,o=Jr;T({type:"custom",layer:"top",dur:.45,x:t,y:n,draw(i,s){Re(t,n,.45),i.globalAlpha=or(s,.6),he(i,mt-r*7,pt-o*7,mt-r*1,pt-o*1,1,jr.k),Rt(i,mt-r*8,pt-o*8,2,jr.y);const a=2+$r(Vo(s*2))*6;i.globalAlpha=(1-s)*.8;for(let l=0;l<5;l++){const u=l/5*Sn+.4;Rt(i,mt+Math.cos(u)*a,pt+Math.sin(u)*a*.7-s*4,2,jr.venom)}}});for(let i=0;i<3;i++)F(t,n,.45,g(-.5,.5),g(-.5,.5),g(.2,.8),.5,i?jr.honey:jr.honeyL,2,6,!1,.9)}function L4(e,t,n,r,o,i){const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=(t.id||0)*1.7;vt(!0);const h=Wt();h.globalAlpha=.3,Rt(h,n,r,14,gr.d),h.globalAlpha=1,vt(!1);for(let d=0;d<5;d++){const m=d*3,p=Math.sin(i*28+f-d*1.1)*d*.7;Rt(e,n-s*m+l*p,r-a*m+u*p-d,6-d,d<2?gr.m:d<4?gr.d:gr.k)}Rt(e,n,r,4,gr.l),Rt(e,n+s,r+a,2,gr.w);const c=i*10|0;t._bf!==c&&(t._bf=c,c&1&&F(t.x,t.y,(t.z||.45)+.05,0,0,.5,.35,gr.l,2,0,!0))}function k4(e){const t=e.x,n=e.y,r=Math.random()*6;T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(o,i){Re(t,n,.15);const s=Math.sin(i*Math.PI)*22;for(let a=-1;a<=1;a++){const l=s*(a?.7:1),u=Math.max(1,zt(l/3));for(let f=0;f<u;f++){const h=f/u,c=Math.sin(i*20+r+f*.9+a)*1.5*h;Rt(o,mt+a*8+c,pt-f*3,h<.3?4:h<.7?3:2,h<.3?gr.d:h<.7?gr.m:gr.l)}}i<.25&&Rt(o,mt,pt-8,4,gr.w)}}),F(t,n,.5,g(-.3,.3),g(-.3,.3),g(.8,1.4),.4,gr.l,2,-.3,!0),Mt(t,n,.9,gr.n,.45,.2)}function D4(e){const t=e.x,n=e.y;Qo(e);const r=Math.atan2(Jr,Nr);T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(o,i){Re(t,n);const s=8+$r(i)*18;o.globalAlpha=(1-i)*.9;for(let a=0;a<7;a++){const l=r+(a/6-.5)*2.4;Rt(o,mt+Math.cos(l)*s,pt+Math.sin(l)*s*.5,a&1?3:4,ys[a%3])}}}),T({type:"custom",layer:"top",dur:.16,x:t,y:n,draw(o,i){Re(t,n,.45);const s=1-i;for(let a=-1;a<=1;a++){const l=mt-Nr*6*s+a*4*-Jr,u=pt-Jr*6*s+a*4*Nr;Rt(o,l,u,5,Ls.k),Rt(o,l,u,3,Ls.l)}}});for(let o=0;o<3;o++)F(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1.5,2.6),.45,o?Ls.d:Ls.m,3,13,!1,.95);F(t,n,.45,g(-1,1),g(-1,1),g(1,2),.4,Ls.moss[Math.random()*2|0],2,10,!1)}function U4(e){const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(r,o){Re(t,n,.4);const i=zt(Math.abs(Math.cos(o*Sn))*4)+1;r.globalAlpha=or(o,.6);for(const s of[-1,1])Rt(r,mt-3,pt+s*i,2,t0.d),Rt(r,mt,pt+s*(i+1),2,t0.m),Rt(r,mt+3,pt+s*i,2,t0.d)}}),F(t,n,.4,g(-.8,.8),g(-.8,.8),g(.5,1.2),.3,Math.random()<.5?t0.l:"#8ad050",2,8,!1)}const X4={mm:y4,mr:x4,sg:b4,tw:w4,mon_wolf:A4,mon_bat:T4,mon_shroom:R4,mon_ent:C4,mon_beetle:P4,slime:I4,golem:O4,serpent:z4,abeja_pet:E4,cabra_wisp:k4,cabra_golem:D4,cabra_locust:U4},G4={mr:g4,sg:M4,tw:Qp,abeja_pet:F4,cabra_wisp:L4};Eo.hit=e=>{const t=Yp(e);if(!t)return!1;const n=X4[t.b];if(n)return n(e,t.t),!0;const r=is[t.b]&&is[t.b].hit;return r?r(e,t.t)===!0?"snd":!0:!1};Eo.proj=(e,t,n,r,o,i)=>{const s=t.look||t.fx;if(s==="tower_blue"||s==="tower_red")return Qp(e,t,n,r,o,i,s==="tower_red"?"r":"b"),!0;if(typeof s!="string"||s.charCodeAt(0)!==64)return!1;const a=so(s),l=G4[a.b]||is[a.b]&&is[a.b].proj;return l?(l(e,t,n,r,o,i,a.t),!0):!1};Eo.shoot=e=>{const t=Yp(e)||(e.proj==="tower"?so("tw."+z0((st(e.uid)||{}).team)):null);if(!t)return!1;if(t.b==="tw")return S4(e,t.t),!1;if(t.b==="sg")return v4(e),!1;const n=is[t.b]&&is[t.b].shoot;return n?n(e,t.t)===!0:!1};Eo.laser=e=>(_4(e),!0);const ii=Math.round,hu=Math.PI*2,mo=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(ii(t-r/2),ii(n-r/2),r,r)},Zp=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);q.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];T({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=st(o.uid),s=i?i.x:o.x,a=i?i.y:o.y,[l,u]=P(s,a,.9),f=Math.min(1,r*3),h=r>.7?1-(r-.7)/.3:1;n.globalAlpha=h;for(const c of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+c*(.35+d*.22*f),p=(26+d*7)*f;for(let y=0;y<p;y+=3){const x=y/Math.max(1,p),b=Math.sin(S.T*18+d+y*.3)*2;mo(n,l+Math.cos(m)*y+b*c,u+Math.sin(m)*y*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let c=0;c<14;c++){const d=c/14*hu+r*9,m=18+c%3*6,p=-r*70-c*3;mo(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[c%4])}}});for(let n=0;n<40;n++){const r=Math.random()*hu,o=g(1,3.5);F(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,g(2,5),g(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}et(Zp(e)?9:3)};q.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];T({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=st(o.uid),s=i?i.x:o.x,a=i?i.y:o.y,[l,u]=P(s,a,1.6),f=Math.min(1,r*2.5),h=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*h;const c=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((y,x)=>[...y].forEach((b,M)=>{b!=="."&&mo(n,d+(M-7)*c,m+(x-5)*c,c,b==="N"?t[4]:b==="o"?t[0]:t[1+(M+x)%2])})),r>.15&&r<.6)for(let y=0;y<3;y++){const x=40+((r-.15)*300+y*22)%90;for(let b=-.9;b<=.9;b+=.12)mo(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),T({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=st(o.uid),[s,a]=P(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const h=f/l*hu,c=(1-u)*120+30,d=s+Math.cos(h)*c,m=a+Math.sin(h)*c*.5;n.fillStyle=t[3],n.fillRect(ii(d-6),ii(m-4),12,8),n.fillStyle=t[1],n.fillRect(ii(d-5),ii(m-3),10,3),n.fillStyle=t[0],n.fillRect(ii(d-1),ii(m-1),2,2)}}}),et(Zp(e)?10:4)};q.erizo_Q_hit=e=>{T({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.5);for(let s=0;s<9;s++){const a=-Math.PI*.85+s*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)mo(t,o+Math.cos(a)*u,i+Math.sin(a)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,mo(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)F(e.x,e.y,.5,g(-2,2),g(-2,2),g(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};q.polilla_Q_hit=e=>{T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.7);t.globalAlpha=1-n;for(let s=0;s<2;s++){const a=8+n*(30+s*14);for(let l=.4;l<hu-.4;l+=.18)mo(t,o+Math.cos(l+s)*a,i+Math.sin(l+s)*a*.5,2,s?"#c8e8ff":"#f4f0ff")}for(let s=0;s<3;s++){const a=o+Math.sin(n*6+s*2)*10+(s-1)*12,l=i-10-n*40-s*8,u=2;for(let f=0;f<4;f++)mo(t,a+f*u,l,u,"#fff6c8"),mo(t,a+f*u,l+3*u,u,"#fff6c8"),mo(t,a+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)F(e.x,e.y,.6,g(-1,1),g(-1,1),g(.5,1.5),g(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const Fr=Math.round,It={x:0,y:0};function An(e,t,n=0){It.x=(e-t)*N.HW+N.OX,It.y=(e+t)*N.HH-n*N.ZK}const Ce=e=>e*N.HW*Math.SQRT2,Hr=e=>e*N.ZK,Hf=(e,t)=>Math.sqrt(2*N.HH*N.HH*e*e+N.ZK*N.ZK*t*t);function Si(e,t,n){const r=2*N.HH/N.ZK;return(e+t+r*n)/Math.sqrt(2+r*r)}const N4=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],R1=new WeakMap;function Gt(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let r=R1.get(e);r||(r=new Map,R1.set(e,r));const o=t+"|"+n;let i=r.get(o);if(!i){const s=document.createElement("canvas");s.width=s.height=8;const a=s.getContext("2d");a.fillStyle=t;for(let l=0;l<16;l++)N4[l]<n&&a.fillRect((l&3)*2,(l>>2)*2,2,2);i=e.createPattern(s,"repeat")||t,r.set(o,i)}return i}function C1(e,t,n,r,o,i,s,a,l=2){if(r<2||a<=0)return;const u=r*.5,f=s.length,h=Fr(n-o),c=Fr(i?n+u:n);for(let d=h;d<c;d+=l){const m=d+l/2-n,p=m<0?r*Math.sqrt(Math.max(0,1-m/o*(m/o))):r*Math.sqrt(Math.max(0,1-m/u*(m/u))),y=!i&&m>-u?r*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-y<.5)continue;const x=m/o*(m/o);for(let b=0;b<f;b++){const M=s[b];let v=r*Math.sqrt(Math.max(0,M.u0*M.u0-x)),w=b+1<f?r*Math.sqrt(Math.max(0,s[b+1].u0*s[b+1].u0-x)):p;if(v<y&&(v=y),w>p&&(w=p),w-v<.5)continue;e.globalAlpha=a*M.a,e.fillStyle=M.fill;const _=Fr(t-w),A=Fr(t-v),R=Fr(t+v),C=Fr(t+w);A>_&&e.fillRect(_,d,A-_,l),C>R&&e.fillRect(R,d,C-R,l)}}}function bo(e,t,n,r,o,i,s,a,l,u,f=2){const h=Math.max(r,o);if(h<2||u<=0||i<1)return;const c=n-i,d=r*.5,m=o*.5,p=a.length,y=l.length,x=s?1:-1;for(let b=-h;b<h;b+=f){const M=Math.abs(b+f/2),v=M/h;let w,_;if(M<=o?w=c+x*m*Math.sqrt(1-M/o*(M/o)):w=c+(M-o)/(r-o)*i,M<=r?_=n+x*d*Math.sqrt(1-M/r*(M/r)):_=n-(M-r)/(o-r)*i,_<w){const O=w;w=_,_=O}let A=0;for(;A+1<p&&v>=a[A+1].u0;)A++;const R=a[A];e.fillStyle=R.fill;const C=Fr(t+b),I=_-w;for(let O=0;O<y;O++){const E=Fr(_-I*(O+1)/y),U=Fr(_-I*O/y);U<=E||l[O]<=0||(e.globalAlpha=u*R.a*l[O],e.fillRect(C,E,f,U-E))}}}function ci(e,t,n,r,o,i,s,a,l){for(let u=0;u<i;u++){const f=a+u/i*Math.PI*2,h=Math.cos(f),c=Math.sin(f);l&&(h+c>0?1:-1)!==l||(An(t+h*o,n+c*o,r),e.fillRect(Fr(It.x-s/2),Fr(It.y-s/2),s,s))}}function la(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,r=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:r,id:-1,t0:S.T,endAt:S.T+t,found:!1,nl:0,fr:-1,rem:t}}function $n(e){if(e.fr===S.T)return e.rem;e.fr=S.T;const t=S.game;let n=null;if(t&&t.zones){for(const r of t.zones)if(e.id>=0?r.id===e.id:Math.abs(r.x-e.x)<.16&&Math.abs(r.y-e.y)<.16&&(!e.look||!r.look||String(r.look)===e.look)){n=r;break}}if(n){const r=S.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=r):r<e.endAt&&(e.endAt=r),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,S.T));return e.rem=e.endAt-S.T,e.rem}function Zo(e,t,n,r,o,i){S.T<e.nl||(e.nl=S.T+.1,Mt(t,n,r,o,i*.75,.22))}const ml=e=>e<0?0:e>1?1:e,at=Math.round,hn=Math.PI*2;let re=0,Jt=0;function Ke(e,t,n=0){re=(e-t)*N.HW+N.OX,Jt=(e+t)*N.HH-n*N.ZK}function Cn(e,t,n,r,o){e.fillStyle=o,e.fillRect(at(t-r/2),at(n-r/2),r,r)}function Hc(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(at(t+(r-t)*l/a-i/2),at(n+(o-n)*l/a-i/2),i,i)}function gs(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(at(t-s/2),at(n+i*o),at(s),Math.max(1,at(2*o)))}}function Ha(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let s=-r;s<r;s+=2){const a=Math.abs(s+1),l=a<=r/2?r*.866:r*.866*(r-a)/(r/2);l<.5||n+s<i||e.fillRect(at(t-l),at(n+s),at(l*2),2)}}function B4(e,t,n,r,o){e.fillStyle=o,e.fillRect(at(t-r),at(n-1),r*2,2),e.fillRect(at(t-1),at(n-r),2,r*2)}function Wc(e,t,n){e.fillStyle=ut.l,e.fillRect(at(t-1),at(n-4),2,2),e.fillStyle=ut.o,e.fillRect(at(t-2),at(n-2),4,4),e.fillStyle=ut.w,e.fillRect(at(t-1),at(n-2),2,2)}const to=e=>e<0?0:e>1?1:e,bi=e=>1-(1-e)*(1-e),ut={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},Wa="#2a1e14",$4="#eaf8ff",H4="#b8e0ff",du="#ff9ac8",od="#9a5ad8",W4="#9a7a48";function Jp(e,t,n,r,o){const i=S.game;if(!i)return null;let s=null,a=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<a&&(a=u,s=l)}return s}function q4(e,t,n,r,o){e.fillStyle=o?$4:H4,o?(e.fillRect(at(t-3*r-2),at(n-9),4,5),e.fillRect(at(t+1*r-1),at(n-8),3,4)):(e.fillRect(at(t-5*r-2),at(n-5),5,3),e.fillRect(at(t+2*r-2),at(n-5),4,3)),e.fillStyle=ut.y,e.fillRect(at(t-5),at(n-3),10,6),e.fillStyle=Wa,e.fillRect(at(t-2*r-1),at(n-3),2,6),e.fillRect(at(t+1*r),at(n-3),2,6),e.fillRect(at(t+5*r-(r>0?1:2)),at(n-2),3,4),e.fillRect(at(t-6*r-1),at(n-1),2,2)}q.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;T({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,s){Ke(r,o,.6);const a=26*(1-bi(s))+4;i.globalAlpha=1-s*.5;for(let l=0;l<14;l++){const u=l/14*hn+s*3;Cn(i,re+Math.cos(u)*a,Jt+Math.sin(u)*a*.6,3,l&1?Wa:ut.y)}s>.6&&(i.fillStyle=od,i.fillRect(at(re-2),at(Jt-2),4,4))}});for(let i=0;i<6;i++)F(r,o,.6,t*g(1,3)+g(-.6,.6),n*g(1,3)+g(-.6,.6),g(0,.6),.3,i&1?ut.y:ut.l,2,0,!0)};Ge.abeja_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=i*30|0;for(let h=3;h<17;h++){const c=h*3.5,d=(h+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-h/17,e.fillStyle=h&1?ut.l:ut.y,e.fillRect(at(n-s*c+l*m*5),at(r-a*c+u*m*5),2,2)}e.globalAlpha=1;for(let h=0;h<=14;h++){const c=n+s*(8-h)*1.6,d=r+a*(8-h)*1.6;if(h<=1)Cn(e,c,d,2,ut.w);else if(h<=8)Cn(e,c,d,2,ut.b),(h===4||h===7)&&(Cn(e,c-s*2+l*2,d-a*2+u*2,2,ut.b),Cn(e,c-s*2-l*2,d-a*2-u*2,2,ut.b));else{const m=h-9>>1&1?Wa:ut.y,p=h===9||h===14?1:2;for(let y=-p;y<=p;y++)Cn(e,c+l*y*2,d+u*y*2,2,m)}}f&2&&Cn(e,n+s*15,r+a*15+2,2,od)};q.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=st(e.uid),o=Jp(t,n,r?r.team:void 0,!1,.9);T({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,s,a){const l=a.vid?st(a.vid):null,u=s*1.8;if(l&&l.dead){a.t=a.dur+1;return}Ke(l?l.x:t,l?l.y:n,1.5);const f=re,h=Jt,c=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=at(11*c);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Ha(i,f,h,d,ut.d),Ha(i,f,h,d-2,ut.y),Ha(i,f,h,d-2,ut.o,h+d*.35),i.fillStyle=ut.w,i.fillRect(at(f-d*.5),at(h-d*.5),3,2),Hc(i,f-4,h-4,f+4,h+4,2,Wa),Hc(i,f+4,h-4,f-4,h+4,2,Wa);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,y=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const M=(x>0?0:Math.PI)+b*.28;Cn(i,f+Math.cos(M)*y,h+Math.sin(M)*y,2,ut.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,Wc(i,f-4,h+d+m*22),Wc(i,f+3,h+d+m*14)}}});for(let i=0;i<8;i++)F(t,n,.5,g(-2,2),g(-2,2),g(.6,1.8),g(.3,.5),i&1?Wa:ut.y,2,6,!1,.9);for(let i=0;i<4;i++)F(t,n,.6,g(-.8,.8),g(-.8,.8),g(1,2),.5,od,3,5,!0);et(2)};q.abeja_W=e=>{if(e.type==="heal"){V4(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,s){const a=.3+(r-.3)*bi(to(s*1.5));i.globalAlpha=s>.55?(1-s)/.45:1;for(let l=0;l<44;l++){const u=l/44*hn,f=a*(1+Math.sin(u*6+s*9+o)*.045);Ke(t+Math.cos(u)*f,n+Math.sin(u)*f),Cn(i,re,Jt,5,ut.o),Cn(i,re,Jt-2,3,ut.l),l%4===0&&(i.fillStyle=ut.d,i.fillRect(at(re-1),at(Jt+2),2,at(2+6*s)))}}}),T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,s){const a=to(s/.6);for(let l=0;l<8;l++){const u=l/8*hn+o,f=r*(.6+.3*W(o+l))*a;Ke(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(a*Math.PI)*1.4),a<1?(i.globalAlpha=1,Wc(i,re,Jt)):(i.globalAlpha=1-(s-.6)/.4,i.fillStyle=ut.o,i.fillRect(at(re-5),at(Jt-1),10,2),i.fillStyle=ut.l,i.fillRect(at(re-2),at(Jt-2),4,1))}}});for(let i=0;i<12;i++){const s=Math.random()*hn;F(t,n,.8,Math.cos(s)*g(.5,2),Math.sin(s)*g(.5,2),g(.5,1.5),g(.5,.9),i%3?ut.l:ut.w,2,-.5,!0)}};function V4(e){const t=e.x,n=e.y,r=Jp(t,n,e.team,!0,.6);T({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,s){const a=s.vid?st(s.vid):null,l=a?a.x:t,u=a?a.y:n,f=i*1;Ke(l,u,.55);const h=re,c=Jt;Ke(l,u,2.6);const d=Jt,m=c-d;if(f>.15){Ke(l,u);const x=to((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=ut.o,gs(o,re,Jt,at(16*x),.45),o.fillStyle=ut.l,o.fillRect(at(re-6*x),at(Jt-3),at(6*x),2)}const p=to(f/.15)*m,y=f>.45?to((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=at(y);x<p;x+=3){const b=x/m*(x/m),M=Math.sin(x*.22-S.T*9)*6*b;o.fillStyle=ut.o,o.fillRect(at(h+M-2),at(d+x),4,3),o.fillStyle=ut.l,o.fillRect(at(h+M-2),at(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,B4(o,h+(x-1)*12,c-10-b*30,4,x&1?ut.y:ut.l))}}});for(let o=0;o<5;o++)F(t,n,.4,g(-.5,.5),g(-.5,.5),g(.8,1.6),g(.6,.9),o&1?ut.l:ut.w,2,-.5,!0)}const ks=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];q.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,s=[1,4,6],a=s.map((l,u)=>u/3*hn+r);T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,h=bi(to(f/.25)),c=f>1.15?to((f-1.15)/.5):0;Ke(t,n,.55*h-c*.4);const d=re,m=Jt;l.globalAlpha=1-c;for(let p=0;p<ks.length;p++){const y=d+ks[p][0],x=m+ks[p][1]*h,b=8;Ha(l,y,x,b,ut.d),Ha(l,y,x,b-2,ut.cell);const M=to((f-.08-p*.04)/.3),v=s.indexOf(p)>=0&&f>o;!v&&M>0&&(Ha(l,y,x,b-2,ut.o,x+(b-2)-M*2*(b-2)),l.fillStyle=ut.l,l.fillRect(at(y-3),at(x-3),2,2)),!v&&f>.4&&s.indexOf(p)>=0&&(l.fillStyle=ut.y,l.fillRect(at(y-4),at(x-1),8,3))}}}),T({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){Ke(t,n,.55);const f=re,h=Jt,c=(S.T*30|0)&1;for(let d=0;d<3;d++){const m=f+ks[s[d]][0],p=h+ks[s[d]][1];Ke(t+Math.cos(a[d])*1.1,n+Math.sin(a[d])*1.1,.6);const y=re,x=Jt,b=_=>{const A=Math.sin(_*Math.PI);return[m+(y-m)*_+Math.cos(_*hn*1.5+d)*12*A,p+(x-p)*_+Math.sin(_*hn*1.5+d)*8*A-A*18]},M=bi(u);for(let _=1;_<7;_++){const A=M-_*.04;if(A<0)break;const R=b(A);l.globalAlpha=(1-_/7)*.8,l.fillStyle=ut.l,l.fillRect(at(R[0]),at(R[1]),2,2)}const v=b(M),w=b(Math.max(0,M-.02));l.globalAlpha=u>.8?(1-u)/.2:1,q4(l,v[0],v[1],v[0]>=w[0]?1:-1,!!c)}}}),T({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<9;h++)F(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1,2),g(.4,.6),h%3?ut.y:ut.d,2,6,!1,.9)}}}),T({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<14;h++)F(t+g(-.3,.3),n+g(-.3,.3),g(.2,.7),g(-.6,.6),g(-.6,.6),g(0,.5),g(.5,.8),h%3?ut.d:ut.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)F(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(.3,1),.5,"#c8a878",3,3,!1,.9);et(2)};const pl=new Map;q.abeja_R=e=>{e.type==="channel"?Y4(e):e.type==="channel_tick"?K4(e):e.type==="channel_end"&&Q4(e)};function Y4(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,s=2,a=Math.random()*99,l={endT:-1},u=S.T,f={n:0};pl.size>16&&pl.clear(),pl.set(r,l);const h=m=>{if(l.endT<0&&S.mode!=="guest"&&m.t>.1){const y=st(r);(!y||!y.channel)&&(l.endT=S.T)}if(l.endT<0)return 1;const p=1-(S.T-l.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=bi(to(b/.4)),v=a+b*.3;m.globalAlpha=x;for(let w=0;w<8;w++){const _=v+w/8*hn,A=Math.cos(_),R=Math.sin(_);for(let C=0;C<10;C++){const I=C/9,O=(.15+I*.95)*M,E=Math.sin(I*Math.PI)*.24*M;for(let U=-1;U<=1;U++)Ke(t+A*O-R*E*U,n+R*O+A*E*U),Cn(m,re,Jt,6,U===0&&I<.8?ut.l:I>.85?ut.d:ut.y)}}Ke(t,n),m.fillStyle=ut.o,gs(m,re,Jt,at(12*M),.5),m.fillStyle=du,gs(m,re,Jt,at(6*M),.5)}});const c=j4(o,a);T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||(P1(m,c,t,n,o,s,S.T-u,x,!1),S.T>=f.n&&(f.n=S.T+.1,Mt(t,n,o*1.05,16760896,.5*x,.22)))}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=bi(to(b/.5)),v=b*.25;m.globalAlpha=.55*x;for(let C=0;C<56;C++){const I=C/56*hn+v;Ke(t+Math.cos(I)*o,n+Math.sin(I)*o),Cn(m,re,Jt,C&1?2:3,C&1?ut.l:ut.y)}Ke(t,n);const w=re,_=Jt,A=o*N.HW*Math.SQRT2,R=Math.sqrt(2*N.HH*N.HH*o*o+N.ZK*N.ZK*s*s*M*M);for(let C=0;C<=90;C++){const I=Math.PI+C/90*Math.PI,O=((C/90-b*.35)%1+1)%1,E=Math.max(0,1-Math.min(O,1-O)*7);m.globalAlpha=x*(.35+.6*E),Cn(m,w+Math.cos(I)*A,_+Math.sin(I)*R,E>.4?3:2,E>.4?ut.w:ut.y)}m.globalAlpha=x;for(let C=0;C<6;C++){const I=S.T*2.4+C/6*hn;Ke(t+Math.cos(I)*.7,n+Math.sin(I)*.7,.9+Math.sin(S.T*4+C)*.2),Cn(m,re,Jt,2,C&1?ut.w:du)}}});const d=26;T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i;if(!(b<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const w=W(M*3.7+a)*.65,_=Math.floor((b+w)/.65),A=(b+w)%.65/.65,R=W(M*13.1+_)*hn,C=Math.sqrt(W(M*5.3+_*1.7))*o*.9,I=t+Math.cos(R)*C,O=n+Math.sin(R)*C;if(A<.85)Ke(I,O,s*.92*Math.sqrt(Math.max(0,1-C/o*(C/o)))*(1-A/.85)),m.fillStyle=ut.o,m.fillRect(at(re-1),at(Jt-2),2,4),m.fillStyle=ut.l,m.fillRect(at(re-1),at(Jt-4),2,2);else{Ke(I,O);const E=(A-.85)/.15;m.fillStyle=ut.o,m.fillRect(at(re-2-E*4),at(Jt),3,2),m.fillRect(at(re+E*4),at(Jt),3,2)}}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||P1(m,c,t,n,o,s,S.T-u,x,!0)}})}function j4(e,t){const r=[],o=[],i=[],s=[],a=[],l=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*l,h=Math.max(5,at(Math.max(16,e*5.6)*Math.cos(f)));for(let c=0;c<h;c++)r.push((c+(u&1)*.5)/h*hn),o.push(f),i.push(u),a.push(hn/h),s.push(.35+u*.42+W(t+c*7.1+u*13.3)*.45)}return{a:Float32Array.from(r),ph:Float32Array.from(o),row:Uint8Array.from(i),fill:Float32Array.from(s),da:Float32Array.from(a),dph:l,n:r.length}}const ya=new Float32Array(12);function P1(e,t,n,r,o,i,s,a,l){const{HW:u,HH:f,ZK:h}=N,c=2*f/h,d=Math.sqrt(2+c*c);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let y=0;y<t.n;y++){const x=t.row[y],b=bi(to((s-.05-x*.07)/.28));if(b<=.02)continue;const M=s>t.fill[y];if(m===0&&M||m===1&&!M)continue;const v=t.a[y],w=t.ph[y],_=Math.cos(v),A=Math.sin(v),R=Math.cos(w),C=Math.sin(w),I=_*R/o,O=A*R/o,E=C/i;if((I+O+c*E)/d>0!==l)continue;const U=n+_*R*o,G=r+A*R*o,j=C*i,L=(U-G)*u+N.OX,k=(U+G)*f-j*h,D=.5*.86*b,$=t.da[y]*R*o*D,H=t.dph*D*1.12,Z=(-A-_)*$*u,tt=(-A+_)*$*f,dt=-C*_*o,Xt=-C*A*o,Ut=R*i,Ee=(dt-Xt)*H*u,ve=((dt+Xt)*f-Ut*h)*H;for(let jt=0;jt<6;jt++){const mn=jt*Math.PI/3+Math.PI/6,be=Math.cos(mn),Jo=Math.sin(mn)*1.15;ya[jt*2]=at(L+be*Z+Jo*Ee),ya[jt*2+1]=at(k+be*tt+Jo*ve)}e.moveTo(ya[0],ya[1]);for(let jt=1;jt<6;jt++)e.lineTo(ya[jt*2],ya[jt*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=a*(l?.55:.5),e.fillStyle=Gt(e,l?ut.l:ut.d,l?3:4),e.fill();else if(m===1){const y=.85+.15*Math.sin(s*5);e.globalAlpha=a*(l?.62:.55)*y,e.fillStyle=Gt(e,l?ut.y:ut.o,l?7:9),e.fill()}else e.globalAlpha=a*(l?.95:.55),e.strokeStyle=l?ut.d:ut.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(l){e.globalAlpha=a*.9,e.fillStyle=ut.w;for(let m=0;m<t.n;m++){if(s<=t.fill[m]+.1)continue;const p=t.a[m],y=t.ph[m],x=Math.cos(p),b=Math.sin(p),M=Math.cos(y),v=Math.sin(y);(x*M/o+b*M/o+c*v/i)/d<=0||(Ke(n+x*M*o,r+b*M*o,v*i),e.fillRect(at(re-7),at(Jt-6),3,2))}}}function K4(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;T({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(a,l){const u=.4+(r-.4)*bi(l);a.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const h=f/6*hn+Math.PI/6,c=(f+1)/6*hn+Math.PI/6;Ke(t+Math.cos(h)*u,n+Math.sin(h)*u);const d=re,m=Jt;Ke(t+Math.cos(c)*u,n+Math.sin(c)*u),Hc(a,d,m,re,Jt,3,f&1?ut.y:ut.l)}}});const i=S.game;if(!i)return;let s=0;for(const a of i.units)if(!(a.dead||a.kind==="tower"||a.kind==="nexus"||(a.x-t)*(a.x-t)+(a.y-n)*(a.y-n)>r*r)){if(a.team===o){if(a.kind==="hero")for(let l=0;l<2;l++)F(a.x+g(-.3,.3),a.y+g(-.3,.3),.5,0,0,g(1,1.6),.6,l?ut.l:ut.w,2,0,!0)}else if(s<8){s++;const l=a.x,u=a.y;T({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,h){Ke(l,u),f.globalAlpha=.8*(1-h),f.fillStyle=ut.d,gs(f,re,Jt,13,.45),f.fillStyle=ut.o,gs(f,re-2,Jt-1,9,.45),f.fillStyle=ut.l,f.fillRect(at(re-5),at(Jt-3),3,2),f.fillRect(at(re-8),at(Jt-10+h*8),2,at(8-h*6)),f.fillRect(at(re+7),at(Jt-8+h*6),2,at(6-h*4))}})}}}function Q4(e){const t=pl.get(e.uid);t&&t.endT<0&&(t.endT=S.T),pl.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*hn;F(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*g(2,3.5),Math.sin(i)*g(2,3.5),g(1.5,3),g(.6,.9),o&1?ut.y:ut.l,4,3,!0,.93)}for(let o=0;o<12;o++)F(n,r,.8,g(-1,1),g(-1,1),g(1,2.5),g(.5,.9),o&1?du:ut.w,2,0,!0);T({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){Ke(n,r),o.globalAlpha=1-i,o.fillStyle=ut.l,gs(o,re,Jt,at(20+i*90),.5)}}),et(3)}else{for(let o=0;o<10;o++){const i=o/10*hn;F(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,g(.2,.6),g(.7,1),o&1?W4:ut.d,4,1.5,!1,.9)}it.sfx("deny",n,r,.35)}}Ge.abeja_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,y=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?ut.l:ut.y,e.fillRect(at(n-s*p+l*y-1),at(r-a*p+u*y-1),2,2)}e.globalAlpha=1;const h=Math.sin(i*20+f)*3,c=n+l*h,d=r+u*h;for(let m=0;m<8;m++){const p=m/8*hn+i*6;Cn(e,c+Math.cos(p)*5,d+Math.sin(p)*5,2,ut.o)}e.fillStyle=ut.y,e.fillRect(at(c-3),at(d-3),6,6),e.fillStyle=ut.w,e.fillRect(at(c-2),at(d-2),2,2)};qe.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*hn;T({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,s){Ke(t,n,.45);const a=s<.25?.5+s*2.6:1.15-(s-.25)*.2,l=(r?7:5)*a;i.globalAlpha=s>.5?(1-s)/.5:1;for(let f=0;f<5;f++){const h=o+f/5*hn;Cn(i,re+Math.cos(h)*l,Jt+Math.sin(h)*l*.8,r?5:4,f&1?ut.l:ut.y)}Cn(i,re,Jt,r?5:4,r?du:ut.o);const u=6+s*(r?26:18);for(let f=0;f<10;f++){const h=o+f/10*hn;Cn(i,re+Math.cos(h)*u,Jt+Math.sin(h)*u*.5+6,2,ut.l)}}});for(let i=0;i<(r?8:4);i++)F(t,n,.5,g(-1,1),g(-1,1),g(.3,1.2),.4,i&1?ut.y:ut.w,2,2,!0)};const te=Math.round,St={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function Ur(e,t,n,r,o){e.fillStyle=o,e.fillRect(te(t-r/2),te(n-r/2),r,r)}const Z4=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,Wf={};function J4(e){if(Wf[e])return Wf[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return Wf[e]=t}function xs(e,t,n,r,o,i,s,a=1,l=1,u=!1){const f=J4(r);for(let h=0;h<f.length;h++){if(u&&h%2)continue;const[c,d]=f[h];e.fillStyle=c+d>r*.6?s:i,e.fillRect(te(t+c*o*a-o/2),te(n+d*o*l-o/2),o,o)}u||(e.fillStyle=St.white,e.fillRect(te(t-r*o*.45*a-o/2),te(n-r*o*.5*l-o/2),o,o))}function tv(e,t,n,r,o,i,s=1,a=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(te(t-u*o*s),te(n+l*o*a-o/2),te(u*2*o*s),o)}}function ev(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const I1=["#.#","###",".#.",".#."];function ty(e,t){T({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),s=4+te(r*5);n.globalAlpha=1-r,xs(n,o,i,s,2,St.pink1,St.pink2,1,1,!0);for(let a=0;a<8;a++){const l=a/8*6.283+.4,u=s*2+4+r*10;Ur(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,a%2?St.white:St.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=g(0,6.283),o=g(1,2.5);F(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(1,2.5),.4,n<3?St.water:St.pink1,2,8,!1)}for(let n=0;n<3;n++)F(e,t,.5,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,n%2?St.coral:St.orange,3,10,!1)}q.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,a=Math.atan2(s,i);T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,h]=P(t,n,.55);l.globalAlpha=1-u;for(let c=0;c<3;c++){const d=a+(c-1)*.5,m=10+u*(22+c*6);xs(l,f+Math.cos(d)*m,h+Math.sin(d)*m-u*8,1+c%2,2,St.pink2,St.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)F(t+r*.4,n+o*.4,.5,r*g(1,2.5)+g(-.5,.5),o*g(1,2.5)+g(-.5,.5),g(.5,1.5),.35,l%2?St.water:St.pink1,2,6,!1);return!0};Ge.ajolote_Q=(e,t,n,r,o,i)=>{ev(t,ty);const s=Math.sin(i*17+t.x*2)*.13,a=1+s,l=1-s;e.globalAlpha=.35,tv(e,n,r,6,2,St.pink2,a,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let c=0;c<I1.length;c++)for(let d=0;d<3;d++)I1[c][u?2-d:d]==="#"&&Ur(e,n-2+d*2,r-3+c*2,2,c<1?St.orange:St.coral);xs(e,n,r,6,2,St.pink2,St.coral2,a,l);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=18+c*8,m=Math.sin(i*12+c*2)*3;xs(e,n-f*d-h*m,r-h*d+f*m,2-(c>>1),2,St.pink1,St.pink2)}Math.random()<.35&&F(t.x,t.y,(t.z||.45)+.05,g(-.2,.2),g(-.2,.2),.6,.45,St.pink1,2,-.5,!1)};function nv(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return T({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[s,a]=P(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const h=s+n[l][0],c=a+n[l][1]-u*6;if(u<f)xs(r,h,c,2,2,St.pink2,St.coral);else if(u<f+.3){const d=(u-f)/.3,m=te(c-d*14),p=te(h);r.globalAlpha=1-d,r.fillStyle=St.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=St.white;for(const[y,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+y*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}q.ajolote_W=e=>{if(e.type==="heal")return nv(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,s=[-.55,-.15,.25];T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const h=st(o),[c,d]=P(h?h.x:t,h?h.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const b=y>0?s[x]:Math.PI-s[x],M=Math.sin(f*16+x*1.3)*.12,v=b+M*y,w=Math.cos(v),_=Math.sin(v),A=te(22*m)-(x===1?0:4);for(let R=6;R<=A;R+=2)Ur(u,c+w*R,d+_*R,2,R>A-2?St.pink1:St.gill),R%4===0&&R>8&&(Ur(u,c+w*R-_*3,d+_*R+w*3,2,St.pink2),Ur(u,c+w*R+_*3,d+_*R-w*3,2,St.pink2))}u.globalAlpha=1}});const a=[];for(let u=0;u<12;u++)a.push(u/12*6.283+g(-.12,.12));T({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let h=0;h<a.length;h++){const c=(f-h*.025)/.8;if(c<=0||c>=1)continue;const d=Math.sin(c*Math.PI),m=te(d*3)*2,[p,y]=P(t+Math.cos(a[h])*r,n+Math.sin(a[h])*r),x=te(p),b=te(y);u.fillStyle=St.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=St.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=St.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=g(0,6.283),h=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*h,y:n+Math.sin(f)*h,n:1+u%3,t0:g(0,.35),pop:g(.4,.9),ph:g(0,6.283),done:!1})}return T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const h=f*i;for(const c of l){const d=h-c.t0;if(d<0)continue;const[m,p]=P(c.x,c.y,.1+Math.min(d,c.pop)*.9),y=m+Math.sin(d*9+c.ph)*3;if(d<c.pop){xs(u,y,p,c.n,2,St.pink2,St.coral);continue}c.done||(c.done=!0,F(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.8,.5,St.pink1,2,0,!0),F(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.5,.4,St.white,2,0,!0));const x=(d-c.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=c.n*2+2+x*6;for(const[M,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])Ur(u,y+M*b,p+v*b,2,St.pink1);u.globalAlpha=1}}}),!0};function rv(e,t,n,r,o){const i=-o,s=r;for(let a=0;a<=22;a+=2)Ur(e,t-r*a,n-o*a,2,a>18?St.coral2:St.orange);for(let a=-6;a<=6;a+=2)Ur(e,t+i*a,n+s*a,2,St.orange);for(const a of[-6,0,6]){const l=a===0?11:8;for(let u=2;u<=l;u+=2)Ur(e,t+i*a+r*u,n+s*a+o*u,2,u>=l-1?St.white:St.pink1)}}q.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),s=i+.6,a=Math.hypot(r-t,o-n),l=(r-t)/(a||1),u=(o-n)/(a||1),f=(l-u)*64,h=(l+u)*32,c=Math.hypot(f,h)||1,d=f/c,m=h/c,p=Math.max(2,Math.ceil(a/.1)),y={n:0,end:!1};return T({type:"custom",layer:"ground",dur:s,x:t,y:n,draw(x,b){const M=b*s,v=Math.min(1,M/i);for(let w=0;w<=p*v;w++){const _=w/p,A=M-_*i,R=Math.max(0,1-A/.55);if(R<=0)continue;const[C,I]=P(t+(r-t)*_,n+(o-n)*_),O=I+Math.sin(_*14-M*25)*2,E=te(4+6*_);x.globalAlpha=R,x.fillStyle=St.pink2,x.fillRect(te(C)-E,te(O)-3,E*2,1),x.fillRect(te(C)-E,te(O)+2,E*2,1),x.fillStyle=St.water,x.fillRect(te(C)-E,te(O)-2,E*2,4),w%3===0&&(x.fillStyle=St.white,x.fillRect(te(C)-1,te(O)-1,3,2))}if(x.globalAlpha=1,v<1&&y.n<22)for(let w=0;w<2;w++){y.n++;const _=t+(r-t)*v,A=n+(o-n)*v;F(_,A,.2,-l*g(.5,1.5)+g(-.8,.8),-u*g(.5,1.5)+g(-.8,.8),g(1,2.5),.45,w?St.water:St.pink1,2,8,!1)}if(!y.end&&v>=1){y.end=!0;for(let w=0;w<10;w++)F(r+l*.4,o+u*.4,.4,l*g(1.5,3.5)+g(-.8,.8),u*g(1.5,3.5)+g(-.8,.8),g(1,3),.5,w%2?St.water:St.white,2,9,!1);et(4)}}}),T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const M=b*(i+.25),v=Math.min(1,M/i),[w,_]=P(t+(r-t)*v,n+(o-n)*v,.5);if(x.globalAlpha=v<1?1:Math.max(0,1-(M-i)/.25),rv(x,w+d*10,_+m*10,d,m),v>=1){const A=(M-i)/.25,R=6+A*30;for(const C of[-6,0,6])for(let I=12;I<12+R;I+=2)Ur(x,w+d*(10+I)-m*C,_+m*(10+I)+d*C,2,I>8+R?St.pink1:St.white)}x.globalAlpha=1}}),!0};function ov(e,t,n,r,o){const i=te(t),s=te(n),a=(W(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=te(u*a),h=u<r*.5?6:4;e.fillStyle=St.coral,e.fillRect(i+f-h/2,s-u-2,h,2),e.fillStyle=St.deep,e.fillRect(i+f+h/2-2,s-u-2,2,2)}const l=W(o+3)<.5?-1:1;for(const[u,f,h]of[[.35+W(o+1)*.15,.38,l],[.58+W(o+2)*.12,.28,-l]]){const c=r*u,d=i+te(c*a),m=r*f;let p=d,y=s-c;for(let x=0;x<m;x+=2)p=d+h*(3+x*.7),y=s-c-x,e.fillStyle=St.coral2,e.fillRect(te(p)-2,te(y)-2,4,2);e.fillStyle=St.pink1,e.fillRect(te(p)-2,te(y)-4,4,2)}e.fillStyle=St.pink1,e.fillRect(i+te(r*a)-2,s-r-3,4,3)}q.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let a=0;a<2;a++){const l=a?8:6,u=r*(a?.85:.45);for(let f=0;f<l;f++){const h=f/l*6.283+a*.4+g(-.15,.15);i.push({x:t+Math.cos(h)*u,y:n+Math.sin(h)*u,d:.04+a*.13+g(0,.05),H:g(24,40)*(a?1:.85),seed:g(0,99),up:!1})}}i.sort((a,l)=>a.x+a.y-(l.x+l.y));const s=(a,l)=>{const u=Math.min(1,Math.max(0,(l-a.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return a.H*(u<1?u*1.15:1)*(1-f)};T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l){const u=l*o;a.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[h,c]=P(f.x,f.y);a.fillStyle=St.hole,a.fillRect(te(h)-6,te(c)-2,12,4),a.fillRect(te(h)-3,te(c)-3,6,6)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(a,l){const u=-l*12.6,f=Z4(l,.05,.6);for(let h=0;h<3;h++){const c=1+h*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[y,x]=P(t+Math.cos(p)*c,n+Math.sin(p)*c,.45);a.globalAlpha=f*(1-m),Ur(a,y,x,m<.15?3:2,m<.15?St.white:h===1?St.pink2:St.water)}}a.globalAlpha=1}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,F(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,3.5),.5,Math.random()<.5?St.coral:St.orange,3,10,!1),F(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,4),.45,St.water,2,10,!1));const h=s(f,u);if(h<2)continue;const[c,d]=P(f.x,f.y);ov(a,c,d,te(h/2)*2,f.seed)}}});for(let a=0;a<28;a++){const l=g(0,6.283),u=g(2,5);F(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,g(3,6),g(.7,1),[St.water,St.pink1,St.white,St.pink2][a%4],Math.random()<.3?3:2,12,!1,.97)}return et(9),!0};qe.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=st(e.uid);let i=1,s=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,s=m/p)}const a=(i-s)*64,l=(i+s)*32,u=Math.hypot(a,l)||1,f=a/u,h=l/u;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=P(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)Ur(d,p+f*M-h*b,y+h*M+f*b,2,M>x/2-4?St.white:St.pink2);d.globalAlpha=1}});const c=r?7:4;for(let d=0;d<c;d++)F(t,n,.45,i*g(.5,2)+g(-.7,.7),s*g(.5,2)+g(-.7,.7),g(1,2.5),.35,d%2?St.pink1:St.water,2,8,!1)};q.ajolote_Q_hit=e=>ty(e.x,e.y);const Et=Math.round,xt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function jn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Et(t-r/2),Et(n-r/2),r,r)}const qc=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function mu(e,t,n,r,o,i,s){const a=t.length,l=t[0].length,u=Et(n-l*o/2),f=Et(r-a*i/2);for(let h=0;h<a;h++)for(let c=0;c<l;c++){const d=s[t[h][c]];d&&(e.fillStyle=d,e.fillRect(u+c*o,f+h*i,o,i))}}function Wu(e,t,n,r,o,i,s,a,l,u){const f=-o,h=r;for(let c=0;c<=i;c+=2){const d=c/i,m=t-r*c,p=n-o*c,y=d<.85?s*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=y;x+=2){const b=x>y-2?a:l,M=x*.5;((c>>1)+(x>>1))%4!==3&&jn(e,m+f*x-r*M,p+h*x-o*M,2,b),((c>>1)+(x>>1)+2)%4!==3&&jn(e,m-f*x-r*M,p-h*x-o*M,2,b)}jn(e,m,p,2,u)}}function pu(e,t,n,r,o,i,s){const a=Et(t),l=Et(n);for(let u=0;u<r;u+=2){const f=Math.max(2,Et(o*(1-u/r)/2)*2),h=Et(u*i),c=s<0?l-u-2:l+u;e.fillStyle=xt.ice3,e.fillRect(a+h-f/2,c,f,2),e.fillStyle=xt.ice1,e.fillRect(a+h-f/2,c,Math.max(1,f/2),2)}e.fillStyle=xt.snow,e.fillRect(a+Et(r*i)-1,s<0?l-r-1:l+r-2,2,3)}function ey(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const s=e.homing;!n&&Math.hypot(s.x-e.x,s.y-e.y)<1.2&&t(s.x,s.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function ny(e,t){T({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),s=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let a=0;a<9;a++){const l=a/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,h=a%2?4:6;for(let c=0;c<h;c+=2)jn(n,o+u*(s+c),i+f*(s+c),2,c>=h-2?xt.snow:xt.ice2)}if(r<.35){const a=Et(10*(1-r/.35))+2;n.fillStyle=xt.snow,n.fillRect(Et(o)-a/2,Et(i)-a/2,a,a)}n.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5);n.globalAlpha=1-r;for(let s=0;s<3;s++){const a=Math.sin(r*10+s*2),l=-Math.PI/2+a*.6;Wu(n,o+(s-1)*9+a*4,i-r*26-s*3,Math.cos(l),Math.sin(l),8,2,xt.ice3,xt.ice1,xt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=g(0,6.283),o=g(1.2,3);F(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(.5,2),.4,n%2?xt.ice2:xt.ice3,2,6,!1)}}q.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,a=Math.atan2(s,i);T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,h]=P(t,n,.6);l.globalAlpha=1-u;for(let c=0;c<5;c++){const d=a+(c-2)*.32,m=8+u*28,p=Math.cos(d),y=Math.sin(d);Wu(l,f+p*m,h+y*m,p,y,10,3,xt.ice3,xt.ice1,xt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)F(t+r*.4,n+o*.4,.6,r*g(.5,1.5)+g(-.4,.4),o*g(.5,1.5)+g(-.4,.4),g(0,.6),.45,xt.snow,2,.5,!0);return!0};Ge.buho_Q=(e,t,n,r,o,i)=>{ey(t,ny);const s=Math.cos(o),a=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+s*12-a*l,f=r+a*12+s*l;vt(!0);const h=Wt();for(let c=1;c<=5;c++)h.globalAlpha=.5-c*.08,jn(h,n-s*c*6,r-a*c*6,8-c,c<3?xt.ice2:xt.ice3);h.globalAlpha=1,vt(!1),Wu(e,u,f,s,a,24,6,xt.ice3,xt.ice1,xt.snow),Math.random()<.55&&F(t.x,t.y,t.z||.45,g(-.3,.3),g(-.3,.3),g(-.2,.3),.5,Math.random()<.5?xt.snow:xt.ice1,2,0,!0)};const iv=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],av=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];q.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l){const u=qc(l,.08,.75);ft(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(a,l){const u=qc(l,.1,.75),f=l*.8;a.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const y=p/m*6.283+(d===r?f:-f),[x,b]=P(t+Math.cos(y)*d,n+Math.sin(y)*d);jn(a,x,b,2,xt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,y]=P(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);a.globalAlpha=u*x,mu(a,iv[d%4],p,y,2,2,{"#":xt.ice1})}const[h,c]=P(t,n);a.globalAlpha=u*(.75+.25*Math.sin(l*14)),mu(a,av,h,c,3,2,{"#":xt.ice2,o:xt.amber,v:xt.amber}),a.globalAlpha=1}});const i=[];for(let a=0;a<8;a++){const l=a/8*6.283+g(-.3,.3),u=r*(.3+.55*Math.sqrt(W(a+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+a*.035,h:g(16,28),lean:g(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((a,l)=>a.x+a.y-(l.x+l.y));const s={shat:!1};T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const h of i){const c=Math.min(1,Math.max(0,(u-h.d)/.12));if(c<=0)continue;const[d,m]=P(h.x,h.y),p=h.h*c*(1-f);p<2||(pu(a,d,m,p,8,h.lean,-1),pu(a,d+h.side*6,m+2,p*.6,6,h.lean+h.side*.35,-1))}if(!s.shat&&f>0){s.shat=!0;for(const h of i)for(let c=0;c<2;c++)F(h.x,h.y,.25,g(-1.5,1.5),g(-1.5,1.5),g(1,2.5),.45,c?xt.ice2:xt.snow,2,8,!0)}}});for(let a=0;a<20;a++){const l=g(0,6.283),u=g(0,r);F(t+Math.cos(l)*u,n+Math.sin(l)*u,g(.6,1.4),g(-.6,.6)+.8,g(-.6,.6)-.4,-.6,g(.6,1),Math.random()<.6?xt.snow:xt.ice1,2,-.5,!1,.98)}return!0};const ry=["......####","...#######","##########",".#########","..#.#.#.#."],sv=ry.map(e=>e.split("").reverse().join(""));q.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let s=0;s<12;s++)i.push({vx:g(-45,45),vy:g(-55,-15),ph:g(0,6.283),L:Math.random()<.4?12:9});T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,a){const l=a*1,[u,f]=P(t,n,.6);s.globalAlpha=qc(a,.02,.55);for(const h of i){const c=Math.sin(l*6+h.ph),d=u+h.vx*l*(1-l*.5)+c*6,m=f+h.vy*l+60*l*l,p=Math.PI/2+c*.9;Wu(s,d+Math.cos(p)*h.L*.5,m+Math.sin(p)*h.L*.5,Math.cos(p),Math.sin(p),h.L,3,xt.ice3,xt.ice1,xt.snow)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(s,a){for(let l=0;l<10;l++){const u=a*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[h,c]=P(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Et(4*(1-u))+1;s.globalAlpha=1-u,s.fillStyle=xt.ice1,s.fillRect(Et(h)-d,Et(c),d*2,1),s.fillRect(Et(h),Et(c)-d,1,d*2)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,a){const[l,u]=P(r,o,.75),f=8+a*24;s.globalAlpha=(1-a)*.9,mu(s,ry,l+f+15,u-a*6,3,3,{"#":xt.ice1}),mu(s,sv,l-f-15,u-a*6,3,3,{"#":xt.ice1}),s.globalAlpha=1}});for(let s=0;s<16;s++)F(t+g(-.3,.3),n+g(-.3,.3),g(.3,.9),g(-.8,.8),g(-.8,.8),g(-.3,.4),g(.6,1),xt.snow,2,.4,!1,.97);for(let s=0;s<16;s++){const a=g(0,6.283),l=g(1,2.5);F(r,o,.6,Math.cos(a)*l,Math.sin(a)*l,g(0,1),.5,s%3?xt.ice1:xt.moon2,2,1,!0)}return!0};function O1(e,t,n,r,o,i,s){e.fillStyle=s;const a=Et(t),l=Et(n),u=r*.82;for(let f=-r;f<r;f+=2){const h=Math.sqrt(Math.max(0,r*r-f*f)),c=u*u-f*f,d=-h,m=h;if(c<=0){e.fillRect(a+Et(d),l+Et(f*i),Et(m-d),Math.max(1,Et(2*i)));continue}const p=Math.sqrt(c),y=o-p,x=o+p;y>d&&e.fillRect(a+Et(d),l+Et(f*i),Et(Math.min(m,y)-d),Math.max(1,Et(2*i))),x<m&&e.fillRect(a+Et(x),l+Et(f*i),Et(m-x),Math.max(1,Et(2*i)))}}const Ds=[];function z1(e,t,n){T({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let s=0;s<36;s++){const a=s/36*6.283,[l,u]=P(e+Math.cos(a)*i,t+Math.sin(a)*i);jn(r,l,u,s%3?2:3,s%2?xt.ice2:xt.moon)}r.globalAlpha=1}}),T({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){ft(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),et(9)}const wa=3,F1=wa-.3,E1=e=>(e=e-1,1+e*e*(2.4*e+1.4));function Us(e,t,n,r,o){if(!(r<1)){e.fillStyle=o;for(let i=-r;i<r;i+=2){const s=Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Et(t-s),Et(n+i),Et(s*2),2)}}}function n0(e,t,n,r,o){if(r<2)return;const i=r/2;e.fillStyle=o;for(let s=-i;s<i;s+=2){const a=r*Math.sqrt(Math.max(0,1-(s+1)/i*((s+1)/i)));e.fillRect(Et(t-a),Et(n+s),Et(a*2),2)}}q.buho_R=e=>{if(e.type==="starfall"){const p=Ds.findIndex(y=>Math.abs(y.x-e.x)<.3&&Math.abs(y.y-e.y)<.3);return p>=0?Ds.splice(p,1):z1(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,s={x:t,y:n,t:0};Ds.push(s),Ds.length>6&&Ds.shift(),T({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.15)*(x>o?Math.max(0,1-(x-o)/.6):1);p.globalAlpha=b;for(const[w,_,A]of[[r,56,1],[r*.9,48,-1]])for(let R=0;R<_;R++){if((R+(A>0?0:2))%4===3)continue;const C=R/_*6.283+x*.7*A,[I,O]=P(t+Math.cos(C)*w,n+Math.sin(C)*w);jn(p,I,O,2,A>0?xt.moon2:xt.ice2)}for(let w=0;w<12;w++){const _=w/12*6.283-x*.35,[A,R]=P(t+Math.cos(_)*r*.62,n+Math.sin(_)*r*.62),[C,I]=P(t+Math.cos(_)*r*.82,n+Math.sin(_)*r*.82);for(let O=0;O<=4;O++)jn(p,A+(C-A)*O/4,R+(I-R)*O/4,2,xt.moon)}const[M,v]=P(t,n);if(O1(p,M,v,30,12,.5,xt.moon),x>.45){const w=Math.min(1,(x-.45)/.1);p.globalAlpha=b*w,jn(p,M-26,v-3,4,xt.amber),jn(p,M+26,v-3,4,xt.amber)}p.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.2)*(x>o?Math.max(0,1-(x-o)/.5):1),[M,v]=P(t,n,wa+1.7),w=p.createRadialGradient(M,v,4,M,v,60);w.addColorStop(0,`rgba(200,190,255,${.45*b})`),w.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=w,p.fillRect(Et(M)-60,Et(v)-60,120,120),p.globalAlpha=b,O1(p,M,v,20,9,1,xt.moon),p.globalAlpha=1}});const a=la(e,o),l=()=>S.T-a.t0,u=Array.from({length:26},(p,y)=>{const x=g(0,6.283),b=Math.sqrt(Math.random())*r*.82,M=1-b/r;return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,z:wa+g(0,.3)+M*.35,s:Et(g(18,26)+M*16),dl:b/r*.25+y*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,y)=>p.x+p.y-(y.x+y.y)||p.z-y.z),f=Array.from({length:34},()=>{const p=g(0,6.283),y=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*y,y:n+Math.sin(p)*y,ph:Math.random(),sp:g(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),h=p=>p>0?0:ml(-p/.35),c=(p,y,x)=>{for(const b of f){if(b.back!==y)continue;const M=(l()*b.sp+b.ph)%1,[v,w]=P(b.x+Math.sin(l()*2+b.ph*9)*.15,b.y,wa*(1-M));p.globalAlpha=x*(y?.6:.9)*Math.min(1,(1-M)*5,M*8),jn(p,v,w,2,xt.snow),p.fillStyle=xt.ice2,p.fillRect(Et(v)-1,Et(w)-4,1,2)}};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y,x){const b=$n(a),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=Math.min(1,l()/.3)*(1-M),[w,_]=P(t,n),A=r*N.HW*Math.SQRT2*.92;p.globalAlpha=.5*v,p.fillStyle=Gt(p,xt.night,8);for(let R=-A/2;R<A/2;R+=2){const C=A*Math.sqrt(Math.max(0,1-(2*(R+1)/A)**2));p.fillRect(Et(w-C),Et(_+R),Et(C*2),2)}c(p,!0,v),Zo(a,t,n,r*1.05,10937599,.5*v)}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y,x){const b=$n(a),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=l(),w=1-M;c(p,!1,w*Math.min(1,v/.3));const _=E1(ml(v/.35)),[A,R]=P(t,n,wa+M*.3),C=Et(r*.8*N.HW*Math.SQRT2*_*(1+M*.3));for(let I=0;I<4;I++){p.globalAlpha=w*(I===0?.8:.96),I===0?n0(p,A+3,R+8,C,Gt(p,xt.ice3,12)):I===1?(n0(p,A,R,C+2,Gt(p,xt.ice2,10)),n0(p,A,R,C-2,xt.ice2)):I===2&&n0(p,A-2,R-6,C-10,xt.ice1);for(const O of u){const E=E1(ml((v-O.dl)/.3));if(E<=.02)continue;const[U,G]=P(O.x+O.dx*M*1.2,O.y+O.dy*M*1.2,O.z+M*.4),j=Et(O.s*E*(1+M*.3));I===0?Us(p,U+2,G+5,j,Gt(p,xt.ice3,12)):I===1?(Us(p,U,G,j+1,Gt(p,xt.ice2,10)),Us(p,U,G,j-2,xt.ice2)):I===2?Us(p,U-1,G-j*.22,Et(j*.8),xt.ice1):O.z>wa+.42&&Us(p,U-j*.25,G-j*.5,Et(j*.32),xt.snow)}}}});const d=[];for(let p=0;p<14;p++){const y=g(0,6.283),x=r*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(y)*x,y:n+Math.sin(y)*x,fall:o-.12+p*.025,ap:.08+p*.025,L:g(18,28),hit:!1})}d.sort((p,y)=>p.x+p.y-(y.x+y.y));const m={boom:!1};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(const b of d){const M=(x-b.fall)/.12;if(M>=1){if(!b.hit){b.hit=!0;for(let C=0;C<3;C++)F(b.x,b.y,.1,g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),.45,C?xt.ice2:xt.snow,2,10,!0)}const R=(x-b.fall-.12)/.2;if(R<1){const[C,I]=P(b.x,b.y),O=Et(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=xt.snow,p.fillRect(Et(C)-O,Et(I)-1,O*2,2),p.fillRect(Et(C)-1,Et(I)-O/2,2,O),p.globalAlpha=1}continue}const v=Math.min(1,Math.max(0,(x-b.ap)/.25));if(v<=0)continue;const w=M>0?F1*(1-M*M):F1+Math.sin(x*9+b.x)*.03,[_,A]=P(b.x,b.y,w);p.globalAlpha=v,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(Et(_)-1,Et(A)-b.L-30,2,28)),pu(p,_,A-b.L,b.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=o&&(m.boom=!0,s.t===0&&(s.t=1,z1(t,n,r)))}});for(let p=0;p<10;p++){const y=g(0,6.283),x=g(0,r);F(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1,2),.7,p%2?xt.moon2:xt.ice1,2,0,!0)}return!0};function oy(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:g(-9,9),oy:g(-3,4),h:g(8,n?16:12),lean:g(-.35,.35)});T({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,s){const[a,l]=P(e,t,.15),u=Math.min(1,s*7);i.globalAlpha=s>.6?(1-s)/.4:1;for(const f of r)pu(i,a+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const s=g(0,6.283),a=g(.8,2);F(e,t,.4,Math.cos(s)*a,Math.sin(s)*a,g(.5,1.8),.35,i%2?xt.snow:xt.ice2,2,5,!0)}}const iy=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&iy.push([t,e,n>3.6?1:0])}Ge.buho_A=(e,t,n,r,o,i)=>{ey(t,(c,d)=>oy(c,d,!1));const s=Math.cos(o),a=Math.sin(o);vt(!0);const l=Wt();for(let c=1;c<=4;c++)l.globalAlpha=.45-c*.09,jn(l,n-s*c*5,r-a*c*5,6-c,xt.moon2);l.globalAlpha=1,vt(!1);const u=i*13,f=Math.cos(u),h=Math.sin(u);for(const[c,d,m]of iy)jn(e,n+(c*f-d*h)*2,r+(c*h+d*f)*2,3,m?xt.ice3:xt.ice1);jn(e,n+-3*f*2,r+-3*h*2,2,xt.snow),Math.random()<.45&&F(t.x,t.y,t.z||.45,0,0,-.2,.35,xt.ice1,2,0,!0)};qe.buho=e=>oy(e.x,e.y,!!e.big);q.buho_Q_hit=e=>ny(e.x,e.y);const B=Math.round,Yt=Math.PI*2;let bt=0,wt=0;function Zt(e,t,n=0){bt=(e-t)*N.HW+N.OX,wt=(e+t)*N.HH-n*N.ZK}function ze(e,t,n,r,o){e.fillStyle=o,e.fillRect(B(t-r/2),B(n-r/2),r,r)}function Ni(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(B(t+(r-t)*l/a-i/2),B(n+(o-n)*l/a-i/2),i,i)}function Xr(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(B(t-s/2),B(n+i*o),B(s),Math.max(1,B(2*o)))}}const vn=e=>e<0?0:e>1?1:e,Pn=e=>1-(1-e)*(1-e),ay=()=>N.HW*Math.SQRT2,gt={w:"#f4fdff",l:"#c4f6ff",m:"#6ee2f4",d:"#2aa6c8",k:"#16608a",x:"#0c3450"},_e={w:"#fbf4e2",l:"#e6d6b0",m:"#bca67a",d:"#7a6646"},Gr={l:"#ffd890",m:"#f0a040",d:"#b0581e"},ce={l:"#d6cfc0",m:"#a49c8a",d:"#746c5c",k:"#4a443a",x:"#2e2a24"},qa=["#8ac050","#5a8a34"],Gn={w:"#eef4d8",l:"#d8d070",m:"#a8a030",d:"#6a6a20",k:"#2e3018",eye:"#d0402a"},en={k:"#120c08",d:"#2a1c12",m:"#4a3220",l:"#7a5a3a"},dr=7267060,qu=15769664;kn.spirit_bolt=[gt.w,gt.l,gt.m,gt.d];kn.spirit=[gt.w,gt.l,gt.m,gt.d];kn.swarm=[Gn.w,Gn.l,Gn.m,Gn.d];kn.behemoth=[_e.w,gt.l,gt.m,Gr.m];const Vu={Q:4,W:2,E:10},Ia=new Map;function sy(e){const t=window.SIM&&window.SIM.HEROES,n=t&&t.cabra;return n&&n.abil?n.abil[e]:null}function id(e,t){const n=S.game;if(!n||!n.units)return[];const r=sy(t),o=r&&r.petSprite,i=r&&r.count||Vu[t],s=[];for(const l of n.units){if(l.dead||!l.pet||l.illusion||Ia.has(l.id)||e.team&&l.team!==e.team||l.owner&&e.uid&&l.owner.id!==e.uid)continue;const u=Math.hypot(l.x-e.x,l.y-e.y);u>2.4||s.push([o&&l.sprite===o?0:1,u,l.id])}s.sort((l,u)=>l[0]-u[0]||l[1]-u[1]);const a=s.slice(0,i).map(l=>l[2]);Ia.size>300&&Ia.clear();for(const l of a)Ia.set(l,t);return a}function ad(e,t,n,r,o){const i=[];for(const s of e){const a=st(s);a&&i.push([a.x,a.y])}for(let s=i.length;s<n;s++){const a=s/n*Yt+o;i.push([t.x+Math.cos(a)*r,t.y+Math.sin(a)*r])}return i}function ly(e,t,n,r){T({type:"custom",layer:"ground",dur:t*1.3+2,x:0,y:0,nt:0,draw(o,i,s){const a=st(e);if(!a||a.dead){s.t=s.dur+1;return}S.T>=s.nt&&(s.nt=S.T+n,r(a))}})}function Vc(e,t,n,r,o,i){for(let s=0;s<o;s+=2){const a=s/o,l=r*Math.pow(1-a,.8)*(a<.2?.6+a*2:1),u=Math.sin(a*5+i)*a*r*.6;l<.6||(e.fillStyle=gt.d,e.fillRect(B(t+u-l),B(n-s-2),Math.max(1,B(l*2)),2),l>1.5&&(e.fillStyle=gt.m,e.fillRect(B(t+u-l*.62),B(n-s-2),Math.max(1,B(l*1.24)),2)),a<.6&&l>2&&(e.fillStyle=gt.l,e.fillRect(B(t+u-l*.3),B(n-s-2),Math.max(1,B(l*.6)),2)),a<.3&&l>2.5&&(e.fillStyle=gt.w,e.fillRect(B(t+u-1),B(n-s-2),2,2)))}}function uy(e,t,n,r,o,i,s,a){for(const f of[-1,1]){const h=f*.42,c=-.12;for(let d=0;d<26*o;d++){const m=Math.PI+d/26*Yt,p=.36*(1-d/26*.75),y=h+f*Math.cos(m)*p,x=c+Math.sin(m)*p;ze(e,t+y*r,n+x*r*.5,d<26*.6?i+1:i,d<26*.6?s:a)}}const u=vn(o*1.6-.3);for(let f=0;f<=8*u;f++)ze(e,t,n+(-.2+f*.07)*r*.5,i,s);u>.9&&(ze(e,t-.12*r,n+.05*r*.5,i,a),ze(e,t+.12*r,n+.05*r*.5,i,a))}const L1=[3735,3050,1493,3315,2457,1910,3879,756];function sd(e,t,n,r,o,i){const s=L1[r%L1.length];e.fillStyle=i;for(let a=0;a<12;a++)s>>a&1&&e.fillRect(B(t+(a%3-1)*o-o/2),B(n+((a/3|0)-1.5)*o-o/2),o,o)}function fy(e,t,n,r,o,i,s,a){Zt(t,n);const l=bt,u=wt,f=Ce(r),h=f*.5,c=72,d=54;e.globalAlpha=s;for(let m=0;m<c;m++){const p=m/c;if(p>o)break;const y=p*Yt+i;ze(e,l+Math.cos(y)*f,u+Math.sin(y)*h,3,m%9===0?gt.w:gt.m)}for(let m=0;m<d;m++){const p=m/d;if(p>o)break;const y=-p*Yt-i*.6;ze(e,l+Math.cos(y)*f*.76,u+Math.sin(y)*h*.76,2,Gr.m)}for(let m=0;m<12;m++){const p=m/12;if(p>o)break;const y=p*Yt+i*.5,x=l+Math.cos(y)*f*.88,b=u+Math.sin(y)*h*.88;e.globalAlpha=s*(.6+.4*a*(.5+.5*Math.sin(S.T*6+m))),sd(e,x,b,m,2,m&1?gt.l:_e.w)}e.globalAlpha=s*.9,uy(e,l,u,f*.62,o,2,gt.l,Gr.l)}function yu(e,t,n,r,o,i,s,a=0){Zt(t,n);const l=bt,u=wt,f=Ce(r),h=f*.5;for(let c=0;c<o;c++){const d=c/o*Yt+a;ze(e,l+Math.cos(d)*f,u+Math.sin(d)*h,i,s)}}function Rl(e,t,n,r,o,i,s,a){let l=t,u=n;Zt(l,u);let f=bt,h=wt;for(let c=1;c<=4;c++){const d=r+(W(i+c*3.1)-.5)*.9,m=o/4;l+=Math.cos(d)*m,u+=Math.sin(d)*m,Zt(l,u),Ni(e,f,h,bt,wt,Math.max(1,s-(c>2?1:0)),a),f=bt,h=wt}}q.cabra_Q=e=>{const t=e.x,n=e.y,r=e.dur||10,o=Math.random()*Yt,i=id(e,"Q"),s=ad(i,e,Vu.Q,.85,o);T({type:"custom",layer:"ground",add:!0,dur:1,x:t,y:n,draw(f,h){Zt(t,n);const c=bt,d=wt;f.globalAlpha=h>.6?(1-h)/.4:1,uy(f,c,d,ay()*1.5,Pn(vn(h/.35)),2,gt.m,gt.l),yu(f,t,n,1.15,30,2,gt.d,h*2)}});const a=16,l=new Float32Array(a),u=new Float32Array(a);for(let f=0;f<a;f++)l[f]=Math.random()*Yt,u[f]=g(.2,1.6);T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(f,h){const c=Pn(h);for(let d=0;d<a;d++){const m=s[d%s.length];for(let p=0;p<3;p++){const y=Math.max(0,c-p*.06),x=l[d]+y*2.4,b=2.2*(1-y);Zt(m[0]+Math.cos(x)*b,m[1]+Math.sin(x)*b,.45+u[d]*(1-y)),f.globalAlpha=(1-p/3)*(h>.85?(1-h)/.15:1),ze(f,bt,wt,p?2:3,p?gt.m:gt.w)}}}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(f,h){for(let c=0;c<s.length;c++){const d=vn((h-c*.06)/.85);if(d<=0||d>=1)continue;const m=i[c]?st(i[c]):null,p=m?m.x:s[c][0],y=m?m.y:s[c][1];Zt(p,y,.05);const x=bt,b=wt;if(d<.45){const M=d/.45;f.globalAlpha=1,Vc(f,x,b,6+4*M,B(14+46*M),S.T*14+c)}else{const M=(d-.45)/.55;f.globalAlpha=1-M,Vc(f,x,b-30*M,7*(1-M)+2,B(40*(1-M)+6),S.T*14+c)}if(d>.4){const M=(d-.4)/.6;f.globalAlpha=1-M,yu(f,p,y,.2+M*.55,14,2,c&1?gt.l:gt.w,c)}}}});for(let f=0;f<s.length;f++){const h=s[f];for(let c=0;c<5;c++)F(h[0],h[1],.3,g(-.8,.8),g(-.8,.8),g(1,2.4),g(.4,.7),c&1?gt.l:gt.w,2,-.6,!0);Mt(h[0],h[1],1.2,dr,.8,.6)}Mt(t,n,2.4,dr,.7,.8);for(const f of i)ly(f,r,.1,h=>{Mt(h.x,h.y,1.3,dr,.42+.12*Math.sin(S.T*9+f),.22),Math.random()<.3&&F(h.x+g(-.15,.15),h.y+g(-.15,.15),.55,0,0,g(.6,1.1),.6,Math.random()<.5?gt.l:gt.m,2,-.3,!0)});et(1.5)};function lv(e){const t=e.x,n=e.y,r=Math.random()*Yt;T({type:"custom",layer:"top",add:!0,dur:1,x:t,y:n,draw(o,i){const s=i*1;Zt(t,n,.15);const a=bt,l=wt;if(s<.4){const u=s/.4;((S.T*24|0)%3!==0||u<.3)&&(o.globalAlpha=1-u*.5,Vc(o,a,l,7*(1-u)+2,B(34*(1-u)+8),S.T*16))}if(s>.2){const u=(s-.2)/.8;for(let f=0;f<10;f++){const h=r+f/10*Yt+u*5,c=.12+u*.45*(.6+.4*W(f+r)),d=.4+u*(1.4+W(f*3+r)*.8);Zt(t+Math.cos(h)*c,n+Math.sin(h)*c,d),o.globalAlpha=(1-u)*(f&1?.8:1),ze(o,bt,wt,f%3===0?3:2,f%3===0?gt.w:gt.m)}}s<.3&&(o.globalAlpha=1-s/.3,yu(o,t,n,.15+s*1.2,12,2,gt.l,r))}}),Mt(t,n,1.1,dr,.6,.5)}q.cabra_W=e=>{const t=Math.random()*99,n=e.dur||12,r=id(e,"W"),o=ad(r,e,Vu.W,.8,t);for(let i=0;i<o.length;i++){const[s,a]=o[i],l=t+i*17,u=i*.06,f=7,h=new Float32Array(f),c=new Float32Array(f);for(let v=0;v<f;v++)h[v]=v/f*Yt+W(l+v)*.6,c[v]=.6+W(l+v*7)*.5;T({type:"custom",layer:"ground",dur:2.2,delay:u,x:s,y:a,draw(v,w){const _=w*2.2,A=Pn(vn(_/.14));v.globalAlpha=_>1.6?(2.2-_)/.6:1;for(let O=0;O<f;O++)Rl(v,s,a,h[O],c[O]*A,l+O*11,3,ce.x);if(_<1.2){v.globalAlpha=(1-_/1.2)*.95;for(let O=0;O<f;O++)Rl(v,s,a,h[O],c[O]*A*.85,l+O*11,1,O&1?gt.m:Gr.m)}const R=vn((_-.1)/.25);if(R<=0)return;v.globalAlpha=(_>1.2?Math.max(0,(2.2-_)/1):1)*.9;const C=.62*R,I=[[C,0],[0,C],[-C,0],[0,-C]];for(let O=0;O<4;O++){Zt(s+I[O][0],a+I[O][1]);const E=bt,U=wt;Zt(s+I[(O+1)%4][0],a+I[(O+1)%4][1]),Ni(v,E,U,bt,wt,2,gt.d),sd(v,E,U,O+i*4,2,gt.l)}}}),T({type:"custom",layer:"ground",dur:.32,delay:u,x:s,y:a,draw(v,w){Zt(s,a);const _=bt,A=wt,R=Math.sin(Math.min(1,w*1.6)*Math.PI)*14,C=B(Ce(.55)*(.7+.3*w));v.globalAlpha=1-w*w,v.fillStyle=en.d,Xr(v,_,A,C,.5);for(let I=0;I<R;I+=2){const O=C*Math.sqrt(1-I/(R+1)*(I/(R+1)))*.9;v.fillStyle=I>R-4?en.l:en.m,v.fillRect(B(_-O),B(A-I),B(O*2),2)}}});const d=10,m=new Float32Array(d),p=new Float32Array(d),y=new Float32Array(d);for(let v=0;v<d;v++)m[v]=v/d*Yt+W(l+v*5)*.8,p[v]=.9+W(l+v*9)*1.4,y[v]=3.2+W(l+v*13)*2.2;T({type:"custom",layer:"top",dur:1.2,delay:u,x:s,y:a,draw(v,w){const _=w*1.2;for(let A=0;A<d;A++){const R=Math.min(_,y[A]/6),C=Math.max(0,y[A]*R-6*R*R),I=p[A]*R;Zt(s+Math.cos(m[A])*I,a+Math.sin(m[A])*I,C+.05);const O=A%3===0,E=(_*14+A|0)&1,U=(E?13:9)+(O?4:0),G=(E?8:12)+(O?2:0);v.globalAlpha=_>.85?(1.2-_)/.35:1,v.fillStyle=ce.k,v.fillRect(B(bt-U/2-1),B(wt-G/2-1),U+2,G+2),v.fillStyle=ce.m,v.fillRect(B(bt-U/2),B(wt-G/2),U,G),v.fillStyle=ce.l,v.fillRect(B(bt-U/2),B(wt-G/2),U,3),v.fillStyle=ce.d,v.fillRect(B(bt+U/2-3),B(wt-G/2+3),3,G-3),A%3===0&&(v.fillStyle=qa[0],v.fillRect(B(bt-U/2),B(wt-G/2),5,3),v.fillStyle=qa[1],v.fillRect(B(bt-U/2),B(wt-G/2+3),3,2)),A%4===1&&_<.6&&(v.fillStyle=gt.l,v.fillRect(B(bt-1),B(wt),3,2))}}});const x=12,b=new Float32Array(x),M=new Float32Array(x);for(let v=0;v<x;v++)b[v]=v/x*Yt+W(l+v*2.3)*.5,M[v]=.7+W(l+v*4.1)*.6;T({type:"custom",layer:"top",dur:.8,delay:u,x:s,y:a,draw(v,w){const _=Pn(w);for(let A=0;A<x;A++){const R=(.25+1*_)*M[A];Zt(s+Math.cos(b[A])*R,a+Math.sin(b[A])*R,.1+w*.35*M[A]);const C=B((11-w*6)*M[A]);v.globalAlpha=(1-w)*.55,v.fillStyle=A&1?_e.m:ce.m,v.fillRect(B(bt-C/2),B(wt-C/2),C,B(C*.7)),v.fillStyle=_e.l,v.fillRect(B(bt-C/2),B(wt-C/2),B(C*.5),2),v.fillStyle=ce.d,v.fillRect(B(bt-C/2),B(wt+C*.2),C,2)}}});for(let v=0;v<12;v++){const w=Math.random()*Yt;F(s,a,.2,Math.cos(w)*g(.6,2),Math.sin(w)*g(.6,2),g(2,4),g(.5,.8),v%4===0?qa[v&1]:v&1?ce.m:ce.d,3,10,!1,.95)}Mt(s,a,1.6,qu,.55,.5),Mt(s,a,1.2,dr,.5,1)}for(const i of r)ly(i,n,.12,s=>Mt(s.x,s.y,1,dr,.22,.26));et(5)};function uv(e){const t=e.x,n=e.y,r=Math.random()*99,o=10,i=new Float32Array(o),s=new Float32Array(o),a=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o);for(let f=0;f<o;f++)i[f]=g(-.22,.22),s[f]=g(-.22,.22),a[f]=g(.15,1),l[f]=g(.4,1.2),u[f]=Math.random()*Yt;T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(f,h){const c=h*1;for(let d=0;d<o;d++){const m=Math.sqrt(2*a[d]/9);let p;if(c<m)p=a[d]-4.5*c*c;else{const b=9*m*.35,M=c-m;p=Math.max(0,b*M-4.5*M*M)}const y=l[d]*Math.min(c,m*1.8)*.5;Zt(t+i[d]+Math.cos(u[d])*y,n+s[d]+Math.sin(u[d])*y,p);const x=d<4?7:5;f.globalAlpha=c>.75?(1-c)/.25:1,f.fillStyle=ce.k,f.fillRect(B(bt-x/2-1),B(wt-x/2-1),x+2,x+2),f.fillStyle=d&1?ce.m:ce.d,f.fillRect(B(bt-x/2),B(wt-x/2),x,x),f.fillStyle=ce.l,f.fillRect(B(bt-x/2),B(wt-x/2),x-2,2)}if(c<.3){Zt(t,n,.6),f.globalAlpha=1-c/.3;const d=B(8*(1-c/.3))+2;ze(f,bt,wt,d,gt.l)}}}),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(f,h){Zt(t,n);const c=bt,d=wt,m=vn((h-.45)/.55);f.globalAlpha=1-m,f.fillStyle=ce.k,Xr(f,c,d+2,18,.45);for(let p=0;p<9;p++){const y=W(r+p)*Yt,x=W(r+p*3)*14,b=c+Math.cos(y)*x,M=d+Math.sin(y)*x*.45-3+m*4;f.fillStyle=p&1?ce.m:ce.d,f.fillRect(B(b-3),B(M-2),6,4),f.fillStyle=ce.l,f.fillRect(B(b-3),B(M-2),3,1)}}}),T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(f,h){for(let c=0;c<6;c++){const d=r+c/6*Yt;Zt(t+Math.cos(d)*(.2+h*.6),n+Math.sin(d)*(.2+h*.6),.2+h*.4),f.globalAlpha=(1-h)*.6,ze(f,bt,wt,B(12-h*8),c&1?ce.l:_e.l)}}});for(let f=0;f<8;f++)F(t+g(-.2,.2),n+g(-.2,.2),g(.3,.9),g(-1,1),g(-1,1),g(.5,1.5),g(.5,.8),f&1?ce.m:qa[1],2,9,!1,.95);et(1.5)}function cy(e,t,n,r,o){const i=(s,a,l,u,f)=>{e.fillStyle=f,e.fillRect(B(t+(r>0?s:-s-l)*2),B(n+a*2),l*2,u*2)};o&&(i(-3,-5,4,3,Gn.w),i(-1,-4,3,2,Gn.w)),i(-5,-1,2,2,Gn.d),i(-3,-1,5,2,Gn.m),i(-3,-1,4,1,Gn.l),i(2,-2,2,3,Gn.d),i(3,-2,1,1,Gn.eye),i(-2,1,1,2,Gn.k),i(-4,2,2,1,Gn.k),i(1,1,1,1,Gn.k),o||i(-5,-2,6,1,Gn.w)}q.cabra_E=e=>{const t=e.x,n=e.y,r=Math.random()*Yt,o=Math.cos(r),i=Math.sin(r),s=id(e,"E"),a=ad(s,e,Vu.E,.9,r),l=.85,u=1.6;T({type:"custom",layer:"ground",dur:u,x:t,y:n,draw(m,p){const y=p*u,x=y<.15?Pn(y/.15):y>1.2?1-vn((y-1.2)/.4):1;if(x<=0)return;m.globalAlpha=1;const b=16,M=-i,v=o,w=(A,R,C)=>{const I=C/b*2-1,O=1+(W(C*1.7+r+R)-.5)*.8,E=.26*(1-I*I)*O*x*A;Zt(t+o*I*l*(.75+.25*A)+M*E*R,n+i*I*l*(.75+.25*A)+v*E*R)},_=(A,R)=>{m.beginPath(),w(A,1,0),m.moveTo(B(bt),B(wt));for(let C=1;C<=b;C++)w(A,1,C),m.lineTo(B(bt),B(wt));for(let C=b-1;C>=0;C--)w(A,-1,C),m.lineTo(B(bt),B(wt));m.closePath(),m.fillStyle=R,m.fill()};_(1.55,en.l),_(1.25,en.m),_(1,en.k),_(.42,Gr.d),_(.18,Gr.m);for(let A=1;A<b;A+=3)for(const R of[-1,1])w(1.7,R,A),m.fillStyle=A&1?en.m:en.l,m.fillRect(B(bt-3),B(wt-3),6,4),m.fillStyle=en.d,m.fillRect(B(bt-3),B(wt+1),6,2)}}),T({type:"custom",layer:"ground",add:!0,dur:1.3,x:t,y:n,draw(m,p){Zt(t,n),m.globalAlpha=(1-p)*(.6+.4*Math.sin(S.T*20)),m.fillStyle=Gr.m,Xr(m,bt,wt,B(10+6*p),.4)}});const f=18,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let m=0;m<f;m++)h[m]=m*.025+g(0,.02),c[m]=g(1,2),d[m]=g(-.7,.7);T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(m,p){const y=p*1.15,x=S.T*28|0;for(let b=0;b<f;b++){const M=vn((y-h[b])/.6);if(M<=0||M>=1&&y-h[b]>.72)continue;const v=a[b%a.length],w=t+o*d[b]*l,_=n+i*d[b]*l,A=Pn(M),R=Math.sin(M*14+b)*.12*(1-M),C=w+(v[0]-w)*A+R,I=_+(v[1]-_)*A-R,O=Math.sin(M*Math.PI)*c[b]+.35*M;Zt(C,I,O);const E=bt,U=wt;Zt(w+(v[0]-w)*Math.max(0,A-.05),_+(v[1]-_)*Math.max(0,A-.05),Math.sin(Math.max(0,M-.05)*Math.PI)*c[b]);const G=E>=bt?1:-1;m.globalAlpha=M>=1?1-(y-h[b]-.6)/.12:1,M<.9&&(m.fillStyle=en.m,m.fillRect(B(bt-1),B(wt-1),2,2)),cy(m,E,U,G,(x+b&1)===1)}}});for(let m=0;m<12;m++)F(t+o*g(-.6,.6),n+i*g(-.6,.6),.1,g(-1.4,1.4),g(-1.4,1.4),g(1.5,3.2),g(.4,.7),m%3?en.m:en.l,3,9,!1,.94);for(let m=0;m<6;m++)F(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1.2),g(.3,.5),Gr.l,2,2,!0);Mt(t,n,1.6,qu,.7,1.2),et(2)};function fv(e){const t=e.x,n=e.y,r=3,o=Math.random()*Yt,i=new Float32Array(r),s=new Float32Array(r);for(let a=0;a<r;a++)i[a]=o+a/r*Yt+g(-.5,.5),s[a]=g(1.6,2.6);T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(a,l){const u=S.T*30|0;for(let f=0;f<r;f++){const h=l*l,c=s[f]*h+Math.sin(l*12+f)*.05;Zt(t+Math.cos(i[f])*c,n+Math.sin(i[f])*c,.35+l*1.8+Math.sin(l*20+f*2)*.06),a.globalAlpha=l>.65?(1-l)/.35:1,cy(a,bt,wt,Math.cos(i[f])-Math.sin(i[f])>=0?1:-1,(u+f&1)===1)}}}),F(t,n,.3,g(-.6,.6),g(-.6,.6),g(.8,1.5),.4,Gn.d,2,6,!1,.94)}const Yc=4.6,k1=[1,.85,.65,.45,.28,.14];let D1=null,U1=null,X1=[],G1=[];function cv(e){return D1!==e&&(D1=e,X1=[{u0:0,fill:Gt(e,gt.k,6),a:.6},{u0:.6,fill:Gt(e,gt.d,8),a:.65},{u0:.88,fill:Gt(e,gt.m,11),a:.75}]),X1}function hv(e){return U1!==e&&(U1=e,G1=[{u0:0,fill:Gt(e,gt.l,3),a:.55},{u0:.6,fill:Gt(e,gt.m,5),a:.6},{u0:.88,fill:Gt(e,gt.w,10),a:.8}]),G1}function N1(e,t,n,r,o,i,s){for(let a=0;a<10;a++){const l=a/10*Yt+s*.8,u=Math.cos(l),f=Math.sin(l);if(u+f>0!==i)continue;const h=(s*1.3+W(a*3.3))%1*Yc;Zt(t+u*r,n+f*r,h),e.globalAlpha=o*(1-h/Yc)*(i?1:.6),sd(e,bt,wt,a,2,a&1?_e.w:gt.w)}}q.cabra_R=e=>{const t=e.x,n=e.y,r=1.5,o=e.radius||3.4,i=.2,s=Math.random()*99;e.uid&&ld(e.uid);const a=S.T,l=()=>S.T-a,u=y=>y<.12?r*.95*Pn(y/.12):r*.95*Math.max(0,1-(y-.12)/1.5)**1.4,f=y=>y<.05?y/.05:y>1.2?Math.max(0,1-(y-1.2)/.42):1,h=y=>Yc*Pn(vn(y/.16));T({type:"custom",layer:"ground",add:!0,dur:3.4,x:t,y:n,draw(y,x){const b=x*3.4,M=b>2.4?3.4-b:1;fy(y,t,n,r,Pn(vn(b/.25)),b*.35+s,M,b<1.4?1:.4)}}),T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Zt(t,n),bo(y,bt,wt,Ce(v),Ce(v*.92),Hr(h(M)),!1,cv(y),k1,w),N1(y,t,n,v,w,!1,M)}}),T({type:"custom",layer:"top",add:!0,dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Zt(t,n),bo(y,bt,wt,Ce(v),Ce(v*.92),Hr(h(M)),!0,hv(y),k1,w*.85),N1(y,t,n,v,w,!0,M),y.globalAlpha=w*.8,y.fillStyle=gt.w;const _=h(M);for(let A=0;A<18;A++){const R=A/18*Yt+M*2;Zt(t+Math.cos(R)*v*.92,n+Math.sin(R)*v*.92,_),y.fillRect(B(bt-1),B(wt-1),3,2)}}}),T({type:"custom",layer:"ground",add:!0,delay:i,dur:.35,x:t,y:n,draw(y,x){Zt(t,n),y.globalAlpha=(1-x)*.75,y.fillStyle=Gt(y,_e.w,x<.3?8:4),Xr(y,bt,wt,B(Ce(r)*(.6+x*.7)),.5),y.globalAlpha=1-x,y.fillStyle=Gr.l;const b=Ce(r)*(.6+x*.7);for(let M=0;M<40;M++){const v=M/40*Yt;y.fillRect(B(bt+Math.cos(v)*b-2),B(wt+Math.sin(v)*b*.5-2),4,4)}}}),T({type:"custom",layer:"ground",delay:i,dur:.75,x:t,y:n,draw(y,x){const b=r*.9+(o-r*.9)*Pn(x);Zt(t,n);const M=bt,v=wt,w=Ce(b),_=w*.5;y.globalAlpha=(1-x)*.85;for(let A=0;A<56;A++){const R=A/56*Yt;ze(y,M+Math.cos(R)*w,v+Math.sin(R)*_-x*8,B(11-x*7),A&1?_e.l:ce.l)}y.globalAlpha=1-x;for(let A=0;A<56;A+=2){const R=A/56*Yt+.05;ze(y,M+Math.cos(R)*w*.94,v+Math.sin(R)*_*.94,3,Gr.l)}}});const c=12,d=new Float32Array(c),m=new Float32Array(c),p=Math.max(.6,o-r*.95);for(let y=0;y<c;y++)d[y]=y/c*Yt+W(s+y)*.4,m[y]=p*(.55+W(s+y*5)*.45);T({type:"custom",layer:"ground",delay:i,dur:2.8,x:t,y:n,draw(y,x){const b=x*2.8,M=Pn(vn(b/.12));y.globalAlpha=b>2?(2.8-b)/.8:1;for(let v=0;v<c;v++)Rl(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M,s+v*7,4,ce.x);if(b<1.4){y.globalAlpha=1-b/1.4;for(let v=0;v<c;v++)Rl(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M*.9,s+v*7,2,v%3?Gr.m:Gr.l)}}}),T({type:"custom",layer:"top",delay:i,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){if(!b.fired){b.fired=!0;for(let M=0;M<26;M++){const v=Math.random()*Yt,w=r*g(.7,1.1),_=g(1.5,4)*o/3.4;F(t+Math.cos(v)*w,n+Math.sin(v)*w,.1,Math.cos(v)*_,Math.sin(v)*_,g(2.5,5.5),g(.7,1.1),M%5===0?qa[0]:M&1?ce.m:ce.d,Math.random()*3+3|0,12,!1,.96)}for(let M=0;M<14;M++){const v=Math.random()*Yt;F(t+Math.cos(v)*r,n+Math.sin(v)*r,.4,Math.cos(v)*.6,Math.sin(v)*.6,g(1.5,3),g(.6,1),M&1?gt.l:gt.w,2,-.4,!0)}Mt(t,n,o*1.2,qu,.9,.45),et(10)}}}),Mt(t,n,3.6,dr,1,1.4)};q.cabra_T=e=>{e.uid&&ld(e.uid)};function dv(e,t,n,r){Zt(t,n);const o=bt,i=wt;e.fillStyle=en.k,Xr(e,o-4*r,i,B(4*r),.55),Xr(e,o+4*r,i,B(4*r),.55),e.fillStyle=en.l,e.fillRect(B(o-9*r),B(i-3*r),B(4*r),2),e.fillRect(B(o+5*r),B(i-3*r),B(4*r),2)}q.cabra_ev_behemoth_stomp=e=>{e.uid&&ld(e.uid);const t=e.uid?st(e.uid):null;t&&(t._stompA=S.T+.6);const n=e.x,r=e.y,o=e.radius||3.2,i=Math.random()*99;it.sfx("stomp_cabra",n,r,1);const s=[[1,.3],[.3,1],[-.95,-.25],[-.25,-.95]];T({type:"custom",layer:"ground",dur:2.2,x:n,y:r,draw(f,h){f.globalAlpha=(h>.6?(1-h)/.4:1)*.8;for(const[y,x]of s)dv(f,n+y,r+x,1.8);Zt(n,r);const c=bt,d=wt,m=Ce(1.25),p=m*.5;for(let y=0;y<36;y++){const x=y/36*Yt,b=c+Math.cos(x)*m,M=d+Math.sin(x)*p;f.fillStyle=en.d,f.fillRect(B(b-5),B(M-2),10,4),f.fillStyle=y&1?en.l:ce.m,f.fillRect(B(b-3),B(M-4),6,3)}}}),T({type:"custom",layer:"ground",dur:.75,x:n,y:r,draw(f,h){const c=Pn(h),d=1.1+(o-1.1)*c;Zt(n,r);const m=bt,p=wt;f.globalAlpha=1-h*h;for(let b=0;b<60;b++){const M=b/60*Yt+i,v=d*(1+(W(i+b)-.5)*.06),w=Ce(v),_=w*.5,A=(1-h)*(8+6*W(b*2.7+i)),R=m+Math.cos(M)*w,C=p+Math.sin(M)*_;f.fillStyle=en.d,f.fillRect(B(R-5),B(C-1),10,3),f.fillStyle=b&1?en.l:ce.m,f.fillRect(B(R-4),B(C-A-5),8,6),f.fillStyle=b%3?_e.l:ce.l,f.fillRect(B(R-4),B(C-A-5),5,2)}f.globalAlpha=(1-h)*.7;const y=Ce(d*.82),x=y*.5;f.fillStyle=en.d;for(let b=0;b<40;b++){const M=b/40*Yt;f.fillRect(B(m+Math.cos(M)*y-2),B(p+Math.sin(M)*x-1),4,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.5,x:n,y:r,draw(f,h){f.globalAlpha=(1-h)*.85;const c=1.2+(o-1)*Pn(h);yu(f,n,r,Math.min(o,c),48,3,h<.5?gt.l:gt.m,i)}});const a=8,l=new Float32Array(a),u=new Float32Array(a);for(let f=0;f<a;f++)l[f]=f/a*Yt+W(i+f*3)*.6,u[f]=.5+W(i+f*7)*.7;T({type:"custom",layer:"ground",dur:1.8,x:n,y:r,draw(f,h){const c=Pn(vn(h*1.8/.1));f.globalAlpha=h>.6?(1-h)/.4:1;for(let d=0;d<a;d++)Rl(f,n+Math.cos(l[d])*1.25,r+Math.sin(l[d])*1.25,l[d],u[d]*c,i+d*5,3,ce.x)}}),T({type:"custom",layer:"top",dur:.8,x:n,y:r,draw(f,h){const c=.7+(o-.7)*Pn(Math.min(1,h*1.3));for(let d=0;d<18;d++){const m=d/18*Yt+i*.3,p=.15+h*(.5+.4*W(d+i)),y=B(12-h*7);Zt(n+Math.cos(m)*c,r+Math.sin(m)*c,p),f.globalAlpha=(1-h)*.5,f.fillStyle=d&1?_e.m:ce.m,f.fillRect(B(bt-y/2),B(wt-y/2),y,B(y*.7)),f.fillStyle=_e.l,f.fillRect(B(bt-y/2),B(wt-y/2),B(y/2),2)}}});for(let f=0;f<16;f++){const h=Math.random()*Yt,c=g(.5,1);F(n+Math.cos(h)*c,r+Math.sin(h)*c,.1,Math.cos(h)*g(1.2,3),Math.sin(h)*g(1.2,3),g(2,4),g(.5,.8),f%4===0?qa[1]:f&1?ce.m:en.l,Math.random()*2+3|0,11,!1,.95)}Mt(n,r,o*1.05,qu,.6,.35),Mt(n,r,o*.8,dr,.4,.3,{delay:.05}),et(5)};const r0=new Set;function hy(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.kind==="mount")}function ld(e){if(r0.has(e))return;r0.add(e);let t=!1,n=0,r=NaN,o=NaN,i=0,s=0,a=-9,l=0,u=0,f=0;T({type:"custom",layer:"top",add:!0,dur:600,x:0,y:0,draw(h,c,d){const m=st(e);if(!(!!m&&!m.dead&&hy(m))){if(!t){d.t>2&&(r0.delete(e),d.t=d.dur+1);return}if(n||(n=S.T),S.T-n<.12)return;r0.delete(e),d.t=d.dur+1;const b=m?m.x:r,M=m?m.y:o;isFinite(b)&&(pv({x:b,y:M},!0),it.sfx("fade_cabra_R",b,M,1));return}t=!0,n=0;const y=isFinite(r)?Math.hypot(m.x-r,m.y-o):0;if(r=m.x,o=m.y,y>.004&&S.T>=i){i=S.T+.24;const b=Math.random()*Yt;for(let M=0;M<3;M++)F(m.x+Math.cos(b+M*.4)*.6,m.y+Math.sin(b+M*.4)*.6,.05,g(-.5,.5),g(-.5,.5),g(.3,.8),g(.4,.6),M&1?_e.m:ce.l,4,1.5,!1,.9)}if(S.T-a>1.1&&Math.random()<.03){a=S.T;const b=Math.random()<.5?-1:1;l=b*.34,u=-b*.34,f=g(2.1,2.6)}const x=(S.T-a)/.35;if(x>=0&&x<1){Zt(m.x+l,m.y+u,f+x*.15);const b=B(6*Math.sin(x*Math.PI))+1;h.globalAlpha=1,h.fillStyle=gt.w,h.fillRect(B(bt-b),B(wt-1),b*2,2),h.fillRect(B(bt-1),B(wt-b),2,b*2),h.fillStyle=gt.m,h.fillRect(B(bt-2),B(wt-2),4,4)}S.T>=s&&(s=S.T+.15,Mt(m.x,m.y,1.8,dr,.22,.3))}})}function mv(e,t,n,r,o){e.globalAlpha=o;for(const i of[-1,1]){const s=t+i*18*r,a=n+8*r;for(let l=0;l<=22;l++){const u=l/22,f=Math.PI+u*Yt*.95,h=15*r*(1-u*.7),c=B((7-u*4)*r),d=s+i*Math.cos(f)*h,m=a+Math.sin(f)*h;e.fillStyle=_e.d,e.fillRect(B(d-c/2-1),B(m-c/2-1),c+2,c+2),e.fillStyle=l%4===0?_e.m:_e.l,e.fillRect(B(d-c/2),B(m-c/2),c,c)}}for(let i=0;i<30*r;i+=2){const s=i/(30*r),a=(16-s*9)*r;e.fillStyle=s<.1?gt.l:Gt(e,gt.m,12),e.fillRect(B(t-a),B(n+i),B(a*2),2)}e.fillStyle=gt.w,e.fillRect(B(t-9*r),B(n+9*r),B(4*r),B(3*r)),e.fillRect(B(t+5*r),B(n+9*r),B(4*r),B(3*r))}function pv(e,t=!1){const n=e.x,r=e.y,o=t?1.9:1.25,i=t?1.9:1.3,s=t?1.6:1.25,a=1.6,l=Math.random()*9;T({type:"custom",layer:"ground",add:!0,dur:a,x:n,y:r,draw(u,f){const h=f*a,c=h>1.1?1-vn((h-1.1)/.35):1;c<=0||fy(u,n,r,o*c,Pn(vn(h/.22)),-h*1.2+l,1,1)}}),T({type:"custom",layer:"ground",dur:a,x:n,y:r,draw(u,f){const h=f*a,c=h>1.1?1-vn((h-1.1)/.35):1;c<=0||(Zt(n,r),u.globalAlpha=.85*c*vn(h/.25),u.fillStyle=gt.k,Xr(u,bt,wt,B(Ce(o*.62*c)),.5),u.fillStyle=gt.x,Xr(u,bt,wt+2,B(Ce(o*.5*c)),.5))}}),T({type:"custom",layer:"top",dur:a,x:n,y:r,draw(u,f){const h=f*a;if(h<.15||h>1.25)return;const c=vn((h-.15)/.95),d=c*c;Zt(n,r);const m=wt,p=bt;u.save(),u.beginPath(),u.rect(p-600,m-900,1200,900),u.clip(),mv(u,p,m-s*N.ZK+d*(s+.4)*N.ZK,i,(c<.15?c/.15:1)*.95),u.restore()}}),T({type:"custom",layer:"top",add:!0,delay:1.35,dur:.3,x:n,y:r,draw(u,f){Zt(n,r,.1),u.globalAlpha=1-f;const h=B((t?40:26)*(1-f))+2;u.fillStyle=gt.w,u.fillRect(B(bt-h),B(wt-1),h*2,3),u.fillRect(B(bt-1),B(wt-h*.6),3,B(h*1.2))}}),T({type:"custom",layer:"top",delay:1.35,dur:.02,x:n,y:r,fired:!1,draw(u,f,h){if(!h.fired){h.fired=!0;for(let c=0;c<16;c++){const d=c/16*Yt;F(n+Math.cos(d)*.3,r+Math.sin(d)*.3,.2,Math.cos(d)*1.2,Math.sin(d)*1.2,g(1.5,3),g(.5,.9),c&1?gt.l:_e.w,2,-.3,!0)}Mt(n,r,2.4,dr,.9,.35),et(3)}}}),Mt(n,r,t?3.2:2.6,dr,.7,1.4)}const yv={Q:lv,W:uv,E:fv},gv={Q:.55,W:.7,E:.45};q.cabra_petfade=e=>{let t=Ia.get(e.uid)||"";if(!t&&e.sprite)for(const n of["Q","W","E"]){const r=sy(n);r&&r.petSprite&&r.petSprite===e.sprite&&(t=n)}if(!t&&typeof e.sprite=="string"&&e.sprite.startsWith("cabra")){const n=e.sprite;t=/wisp|spirit|flame/.test(n)?"Q":/golem|stone|twin/.test(n)?"W":/locust|swarm|bug/.test(n)?"E":""}return t?(Ia.delete(e.uid),yv[t](e),it.sfx("fade_cabra_"+t,e.x,e.y,gv[t]),!0):!1};Ge.cabra_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=(t.id||0)*1.7;for(let c=1;c<=9;c++){const d=c*3,m=Math.sin(i*22+f-c*.9)*(2+c*.35);e.globalAlpha=1-c/10,ze(e,n-s*d+l*m,r-a*d+u*m,2,gt.m),ze(e,n-s*d-l*m,r-a*d-u*m,2,c&1?_e.l:_e.w)}e.globalAlpha=1;for(let c=0;c<4;c++)ze(e,n-s*(3+c*2.5)+l*Math.sin(i*30+c)*1.2,r-a*(3+c*2.5)+u*Math.sin(i*30+c)*1.2,6-c,c<2?gt.m:gt.d);e.fillStyle=gt.d,e.fillRect(B(n-5),B(r-5),10,10),e.fillStyle=gt.l,e.fillRect(B(n-4),B(r-4),8,8),e.fillStyle=gt.w,e.fillRect(B(n-2),B(r-2),4,4),ze(e,n+s*3+l*4,r+a*3+u*4,2,_e.w),ze(e,n+s*5+l*5,r+a*5+u*5,2,_e.l),ze(e,n+s*3-l*4,r+a*3-u*4,2,_e.w),ze(e,n+s*5-l*5,r+a*5-u*5,2,_e.l);const h=i*12|0;t._lf!==h&&(t._lf=h,Mt(t.x,t.y,.9,dr,.5,.12),h&1&&F(t.x,t.y,t.z||.45,0,0,.3,.3,gt.l,2,0,!0))};function xv(e){const t=e.x,n=e.y,r=Math.random()*Yt,o=1.6*ay();T({type:"custom",layer:"ground",dur:.6,x:t,y:n,draw(i,s){Zt(t,n);const a=bt,l=wt;i.globalAlpha=s>.5?(1-s)/.5:1,i.fillStyle=en.d,Xr(i,a-5,l,6,.55),Xr(i,a+5,l,6,.55),i.fillStyle=en.m,Xr(i,a-5,l-1,4,.5),Xr(i,a+5,l-1,4,.5);const u=o*(.25+.75*Pn(vn(s*1.6)));i.globalAlpha=(1-s)*.9;for(let f=0;f<18;f++){const h=r+f/18*Yt;ze(i,a+Math.cos(h)*u,l+Math.sin(h)*u*.5,f%3?4:3,f%3===0?gt.m:f&1?_e.m:ce.l)}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(i,s){Zt(t,n,.45);const a=1-s,l=B(12*a)+2;i.globalAlpha=a,Ni(i,bt-l,wt,bt,wt-l*.6,2,gt.l),Ni(i,bt,wt-l*.6,bt+l,wt,2,gt.l),Ni(i,bt+l,wt,bt,wt+l*.6,2,gt.m),Ni(i,bt,wt+l*.6,bt-l,wt,2,gt.m),ze(i,bt,wt,B(5*a)+2,_e.w)}});for(let i=0;i<4;i++)F(t,n,.3,g(-2,2),g(-2,2),g(2,3.5),.5,i&1?ce.m:ce.d,4,13,!1,.95);for(let i=0;i<2;i++)F(t+g(-.3,.3),n+g(-.3,.3),.1,g(-.6,.6),g(-.6,.6),g(.3,.7),.6,_e.m,5,0,!1,.9);Mt(t,n,1.3,dr,.45,.2),et(2)}qe.cabra=e=>{if(!e.proj){const i=e.uid?st(e.uid):null;if(i&&hy(i)){xv(e);return}}const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Yt;T({type:"custom",layer:"top",add:!0,dur:r?.42:.3,x:t,y:n,draw(i,s){Zt(t,n,.45);const a=bt,l=wt;i.globalAlpha=s>.5?(1-s)/.5:1;const u=r?7:5,f=(r?14:10)*Pn(vn(s*1.8));for(let c=0;c<u;c++){const d=o+c/u*Yt,m=a+Math.cos(d)*f,p=l+Math.sin(d)*f*.7;Ni(i,a+Math.cos(d)*f*.35,l+Math.sin(d)*f*.25,m,p,3,gt.m),ze(i,m,p,3,gt.w)}ze(i,a,l,B(8*(1-s))+2,gt.w),Zt(t,n);const h=6+s*(r?30:20);for(let c=0;c<12;c++){const d=o+c/12*Yt;ze(i,bt+Math.cos(d)*h,wt+Math.sin(d)*h*.5,2,c&1?_e.l:gt.l)}if(r){i.globalAlpha=1-s;for(const c of[-1,1])for(let d=0;d<8;d++){const m=Math.PI+d/8*Math.PI*1.4,p=7*(1-d/12);ze(i,a+c*(7+Math.cos(m)*p),l-16-s*14+Math.sin(m)*p,d<4?3:2,d<4?_e.w:_e.l)}}}});for(let i=0;i<(r?8:4);i++)F(t,n,.5,g(-.9,.9),g(-.9,.9),g(.6,1.6),.4,i&1?gt.l:gt.w,2,-.4,!0);Mt(t,n,r?1.4:1,dr,r?.7:.5,.22)};const Ct=Math.round,gn=Math.PI*2,Xs=e=>e*N.HW*Math.SQRT2,At={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},Bo=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],dy=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function xn(e,t,n,r){r=Math.max(1,Ct(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(Ct(t[0]+(n[0]-t[0])*a/i-s),Ct(t[1]+(n[1]-t[1])*a/i-s),r,r)}function jc(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(Ct(t-l),Ct(n+s),Math.max(1,Ct(l*2)),i)}}function Gs(e,t,n,r,o,i,s=0){for(let a=0;a<o;a++){const l=s+a/o*gn;e.fillRect(Ct(t+Math.cos(l)*r-i/2),Ct(n+Math.sin(l)*r*.5-i/2),i,i)}}function B1(e,t,n,r){t=Ct(t),n=Ct(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const Mv=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));q.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let a=0;a<11;a++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(a-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:a,t0:Math.random()*.35,vx:g(-14,14),c:l+a})}T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(a,l){const u=l*.8,[f,h]=P(t,n,.5),c=S.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const y=f+(d.i-3)*5+(m>0?d.vx*m:0),x=h+(d.j-5)*5-(m>0?m*m*160:0);a.globalAlpha=p,a.fillStyle=Bo[(d.c+c)%6],a.fillRect(Ct(y)-2,Ct(x)-2,5,5)}}});const s=Math.max(4,Math.min(18,Ct(Math.hypot(r-t,o-n)*2.4)));T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(a,l){const u=P(t,n),f=P(r,o),h=f[0]-u[0],c=f[1]-u[1],d=Math.hypot(h,c)||1,m=-c/d,p=h/d;for(let y=0;y<=s;y++){const x=y/s,b=l*4-x;if(b<0)continue;const M=y%4===0,v=M?9:5,w=u[0]+h*x,_=u[1]+c*x;a.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),a.fillStyle=At.ink,xn(a,[w-m*v+1,_-p*v+1],[w+m*v+1,_+p*v+1],M?4:3),a.fillStyle=M?At.gold:Bo[(y+(S.T*10|0))%6],xn(a,[w-m*v,_-p*v],[w+m*v,_+p*v],M?3:2)}}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,l){const[u,f]=P(r,o,.5),h=20+l*16;a.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*gn,p=d%3===0?7:3;a.fillStyle=d%3===0?At.gold:At.face,xn(a,[u+Math.cos(m)*h,f+Math.sin(m)*h*.8],[u+Math.cos(m)*(h-p),f+Math.sin(m)*(h-p)*.8],2)}const c=-Math.PI/2-l*gn*1.5;a.fillStyle=At.face,xn(a,[u,f],[u+Math.cos(c)*(h-8),f+Math.sin(c)*(h-8)*.8],3),a.fillStyle=At.gold,a.fillRect(Ct(u)-2,Ct(f)-2,5,5)}});for(let a=0;a<14;a++){const l=a/14*gn;F(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,g(.5,1.5),.45,Bo[a%6],3,2,!0,.9)}};q.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,s=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],a=(l,u,f=.45)=>P(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let h=s.length-1;h>=0;h--){const c=s[h],d=f-c.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=c.al;for(let y=-1,x=0;y<=p;y+=.06,x++){const b=Math.max(0,1-(p-y)/.7),M=Ct(3+6*b*c.sc),[v,w]=a(y,i*c.sc);l.fillStyle=At.ink,l.fillRect(Ct(v-M/2)+1,Ct(w-M/2)+1,M,M),l.fillStyle=h===0?x%2?At.gold:At.face:Bo[(h*2+x)%6],l.fillRect(Ct(v-M/2),Ct(w-M/2),M,M)}if(h===0){l.fillStyle=At.gold;for(let y=-1;y<=p;y+=.2){const x=a(y,i*1.06),b=a(y,i*1.16);xn(l,x,b,2)}}}}if(f>.28){const h=(f-.28)/.27,[c,d]=a(-1,i);l.globalAlpha=1-h;for(let m=0;m<16;m++){const p=m*.6-h*4,y=2+m*1.1;l.fillStyle=Bo[m%6],l.fillRect(Ct(c+Math.cos(p)*y)-1,Ct(d+Math.sin(p)*y*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=g(-1,1),f=i*g(.3,1.1),h=r+u*o;F(t+Math.cos(h)*f,n+Math.sin(h)*f,g(.2,.9),g(-.15,.15),g(-.15,.15),g(0,.2),g(.8,1.3),l%3?At.sand:At.time,2,.15,!0,.99)}et(dy(e)?3:1)};q.camaleon_E=e=>{const t=e.uid,n=e.dur||4;T({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(a,l){const u=st(t),[f,h]=P(u?u.x:e.x,u?u.y:e.y,.5);a.globalAlpha=1-l;for(let c=0;c<8;c++){const d=c/8*gn+.2,m=12+l*30;a.fillStyle=Bo[c%6],xn(a,[f+Math.cos(d)*m,h+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),h+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const s=[5,9,11,12,12,11,10,9,7,5];T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(a,l,u){const f=st(t);if(!f||f.dead){u.t=u.dur+1;return}if(S.T-o>.06){const c=r[r.length-1];(!c||Math.hypot(f.x-c.x,f.y-c.y)>.1)&&(r.push({x:f.x,y:f.y,t:S.T,c:i++}),r.length>8&&r.shift()),o=S.T}const h=l>.92?(1-l)/.08:1;for(const c of r){const d=1-(S.T-c.t)/.4;if(d<=0)continue;const[m,p]=P(c.x,c.y);a.globalAlpha=d*.65*h,a.fillStyle=Bo[c.c%6];for(let y=0;y<s.length;y++)a.fillRect(Ct(m-s[y]),Ct(p-8-y*6),s[y]*2,3)}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(a,l,u){const f=st(t);if(!f||f.dead){u.t=u.dur+1;return}const[h,c]=P(f.x,f.y,1.05),d=h+24,m=c+Math.sin(S.T*5)*2;a.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),a.fillStyle=At.brassD,jc(a,d,m,9,9,1),a.fillStyle=At.brass,a.fillRect(Ct(d)-2,Ct(m)-13,5,4),a.fillStyle=At.face,jc(a,d,m,7,7,1),a.fillStyle=At.ink,a.fillRect(Ct(d)-1,Ct(m)-7,2,2),a.fillRect(Ct(d)+5,Ct(m),2,2),a.fillRect(Ct(d)-1,Ct(m)+5,2,2),a.fillRect(Ct(d)-7,Ct(m),2,2);const p=S.T*14;a.fillStyle="#e03a4a",xn(a,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function bv(e,t,n,r){t=Ct(t),n=Ct(n),e.fillStyle=At.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=At.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=Ct(6-o*.5),s=Ct(1+o*.5);e.fillStyle=At.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-s-1,n+1+o,1,1),e.fillRect(t+s+1,n+1+o,1,1),e.fillStyle=At.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-s,n+1+o,s*2+1,1)}r>.02&&r<.98&&(e.fillStyle=At.sand,e.fillRect(t,n-1,1,12))}let $1=null,H1=null,W1=[],q1=[];function vv(e){return $1!==e&&($1=e,W1=[{u0:0,fill:Gt(e,At.night,7),a:.55},{u0:.66,fill:Gt(e,At.time,6),a:.55},{u0:.86,fill:Gt(e,At.glass,10),a:.6},{u0:.96,fill:At.glass,a:.5}]),W1}function wv(e){return H1!==e&&(H1=e,q1=[{u0:0,fill:Gt(e,At.glass,2),a:.4},{u0:.62,fill:Gt(e,At.time,3),a:.5},{u0:.82,fill:Gt(e,At.time,5),a:.6},{u0:.93,fill:Gt(e,At.glass,9),a:.7}]),q1}function Po(e,t,n,r,o){const i=Math.cos(r)*Math.cos(o),s=Math.sin(r)*Math.cos(o),a=Math.sin(o);return An(e+i*n,t+s*n,a*n),Si(i,s,a)>0}const V1=[.42,44,.86,32,1.24,16];function Y1(e,t,n,r,o,i,s,a){const l=o>0;e.fillStyle=l?At.glassL:"#5a68c0",e.globalAlpha=a*(l?.55:.7);for(let h=0;h<12;h++){const c=h/12*gn-i*.35;for(let d=1;d<11;d++)Po(t,n,r,c,d/11*Math.PI/2)===l&&e.fillRect(Ct(It.x)-1,Ct(It.y)-1,2,2)}for(let h=0;h<3;h++){const c=V1[h*2],d=V1[h*2+1];for(let m=0;m<d;m++)Po(t,n,r,m/d*gn+i*.08,c)===l&&e.fillRect(Ct(It.x)-1,Ct(It.y)-1,2,2)}e.globalAlpha=a*.95,e.fillStyle=l?At.gold:At.time;for(let h=0;h<72;h++)Po(t,n,r,h/72*gn,0)===l&&e.fillRect(Ct(It.x)-1,Ct(It.y)-1,3,3);for(let h=0;h<12;h++){const c=h/12*gn-Math.PI/4;if(Po(t,n,r,c,0)!==l)continue;const d=It.x,m=It.y;Po(t,n,r,c,h%3?.13:.22),e.fillStyle=l?h%3?At.face:At.gold:At.time,xn(e,[d,m],[It.x,It.y],h%3?2:3)}const u=-i*1.4+.6;e.fillStyle=l?At.gold:At.brass,e.globalAlpha=a*(l?.95:.6);for(let h=0;h<22;h++)Po(t,n,r,u,h/22*Math.PI/2)===l&&e.fillRect(Ct(It.x)-1,Ct(It.y)-1,3,3);const f=s%1;if(f<.6){const h=f/.6*Math.PI/2*.98;e.globalAlpha=a*(1-f/.6)*(l?.9:.6),e.fillStyle=l?At.glassL:At.glass;const c=Ct(56*Math.cos(h))+8;for(let d=0;d<c;d++)Po(t,n,r,d/c*gn,h)===l&&e.fillRect(Ct(It.x)-1,Ct(It.y)-1,3,2)}}q.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=la(e,o),s=Array.from({length:26},(c,d)=>{const m=Math.random()*gn,p=Math.sqrt(Math.random())*r*.85,y=Math.sqrt(Math.max(0,r*r-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:g(.15,Math.max(.2,y)),ph:Math.random()*gn,s:d%4===0?4:2,col:[At.glassL,At.gold,At.time,At.teal][d%4]}}),a=Array.from({length:22},()=>{const c=Math.random()*gn,d=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(c)*d,y:n+Math.sin(c)*d,z:g(.2,1.4)}}),l=Array.from({length:7},()=>{const c=new Float32Array(16);let d=g(-.4,2),m=g(.12,1.1);for(let p=0;p<8;p++)c[p*2]=d,c[p*2+1]=m,d+=g(-.16,.16),m=Math.min(1.45,Math.max(.05,m+g(-.2,.2)));return c}),u=c=>Mv(c/.3),f=()=>S.T-i.t0,h=c=>ml(c/.2);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=$n(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),[b,M]=P(t,n),v=Xs(r)*x,w=f();c.globalAlpha=.28*y,c.fillStyle=At.night,jc(c,b,M,v,v*.5,3),c.globalAlpha=.95*y,c.fillStyle=At.gold,Gs(c,b,M,v,96,3),c.fillStyle=At.brass,Gs(c,b,M,v*.94,72,2),c.fillStyle=At.face,Gs(c,b,M,v*.87,60,2);for(let O=0;O<12;O++){const E=O/12*gn-Math.PI/2,U=O%3===0,G=[b+Math.cos(E)*v*.66,M+Math.sin(E)*v*.33],j=[b+Math.cos(E)*v*.8,M+Math.sin(E)*v*.4];c.fillStyle=At.ink,xn(c,[G[0]+1,G[1]+1],[j[0]+1,j[1]+1],U?6:4),c.fillStyle=U?At.gold:At.face,xn(c,G,j,U?5:3)}for(let O=0;O<36;O++){const E=O/36*gn-w*.6,U=v*(O%2?.5:.55);c.fillStyle=O%2?At.brassD:At.brass,c.fillRect(Ct(b+Math.cos(E)*U)-2,Ct(M+Math.sin(E)*U*.5)-1,5,3)}const _=-Math.PI/2-w*gn/1.5,A=-Math.PI/2-w*gn/12,R=[b+Math.cos(_)*v*.74,M+Math.sin(_)*v*.37],C=[b+Math.cos(A)*v*.45,M+Math.sin(A)*v*.225];c.fillStyle=At.ink,xn(c,[b+1,M+1],[R[0]+1,R[1]+1],6),xn(c,[b+1,M+1],[C[0]+1,C[1]+1],8),c.fillStyle=At.face,xn(c,[b,M],R,4),c.fillStyle=At.gold,xn(c,[b,M],C,6),c.fillStyle="#e03a4a",c.fillRect(Ct(b)-4,Ct(M)-3,8,6),c.fillStyle=At.gold,c.fillRect(Ct(b)-2,Ct(M)-2,4,4);const I=w%1;I<.3&&(c.globalAlpha=(1-I/.3)*y,c.fillStyle=At.glassL,Gs(c,b,M,v*(.87+I*.4),48,3))}}),T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=$n(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;An(t,n);const M=It.x,v=It.y,w=Xs(x),_=Hf(x,x);C1(c,M,v,w,_,!1,vv(c),y),Y1(c,t,n,x,-1,b,f(),y),Zo(i,t,n,r*1.15,9087231,.75*y)}}),T({type:"custom",layer:"top",dur:o+1,x:t,y:n,draw(c,d,m){const p=$n(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;An(t,n);const M=It.x,v=It.y,w=Xs(x),_=Hf(x,x);C1(c,M,v,w,_,!0,wv(c),y),Y1(c,t,n,x,1,b,f(),y);const A=ml((.45-p)/.35);if(A>0)for(const R of l){const C=Math.max(1,Ct(7*A));for(let I=0;I<C;I++){if(!Po(t,n,x,R[I*2],R[I*2+1]))continue;const O=It.x,E=It.y;Po(t,n,x,R[I*2+2],R[I*2+3]),c.globalAlpha=y,c.fillStyle=At.ink,xn(c,[O+1,E+1],[It.x+1,It.y+1],2),c.fillStyle=At.glassL,xn(c,[O,E],[It.x,It.y],2)}}}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(c,d,m){const p=$n(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),b=r*x,M=S.T,v=f();An(t,n);const w=It.x,_=It.y,A=Xs(b),R=Hf(b,b);for(let O=0;O<=80;O++){const E=Math.PI+O/80*Math.PI,U=((O/80-v*.45)%1+1)%1,G=Math.max(0,1-Math.min(U,1-U)*6);c.globalAlpha=y*(.55+.45*G),c.fillStyle=G>.3?At.glassL:At.glass,c.fillRect(Ct(w+Math.cos(E)*A)-1,Ct(_+Math.sin(E)*R)-1,3,3)}for(let O=0;O<14;O++){const E=Math.PI*(1.1+O*.022);c.globalAlpha=y*.85,c.fillStyle=At.glassL,c.fillRect(Ct(w+Math.cos(E)*A*.82)-2,Ct(_+Math.sin(E)*R*.82)-2,4,4),O<6&&(c.globalAlpha=y*.5,c.fillRect(Ct(w+Math.cos(E+.12)*A*.7)-1,Ct(_+Math.sin(E+.12)*R*.7)-1,3,3))}c.globalAlpha=y*.7,B1(c,w+Math.cos(Math.PI*1.36)*A*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+Ct(2*Math.sin(M*4)));for(const O of s){const[E,U]=P(O.x,O.y,O.z*x),G=.5+.5*Math.sin(M*3+O.ph);c.globalAlpha=y*(.35+.65*G),c.fillStyle=O.col,B1(c,E,U,O.s+(G>.8?1:0))}c.fillStyle=At.sand;for(const O of a){const[E,U]=P(O.x,O.y,O.z*x);c.globalAlpha=y*.8,c.fillRect(Ct(E),Ct(U),1,1)}const[C,I]=P(t,n,b+.35);if(c.globalAlpha=y,bv(c,C,I,Math.min(1,v/Math.max(.1,v+p))),v<.3){const O=v/.3;c.globalAlpha=1-O,c.fillStyle=At.glassL,Gs(c,w,_,Xs(r)*(.3+O*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let O=0;O<40;O++){const E=Math.random()*gn,U=Math.random()*1.3,G=t+Math.cos(E)*r*Math.cos(U),j=n+Math.sin(E)*r*Math.cos(U);F(G,j,r*Math.sin(U),Math.cos(E)*g(.8,2),Math.sin(E)*g(.8,2),g(0,1.5),g(.5,.9),O%3?At.glass:At.glassL,O%4?2:3,9,!0,.96)}}}}),et(dy(e)?6:3)};qe.camaleon=e=>{const t=e.x,n=e.y,r=g(-2.6,-.6),o=Math.random()*6|0;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.5),u=Math.min(1,s*6);i.globalAlpha=s<.5?1:(1-s)*2;const f=r-(1-u)*1.5,h=r+2.2-(1-u)*1.2;i.fillStyle=At.ink,xn(i,[a+1,l+1],[a+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=At.face,xn(i,[a,l],[a+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=Bo[o],xn(i,[a,l],[a+Math.cos(h)*12,l+Math.sin(h)*12],4),i.fillStyle=At.gold;for(let c=0;c<4;c++){const d=c/4*gn+.4,m=14+s*10;i.fillRect(Ct(a+Math.cos(d)*m)-1,Ct(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)F(t,n,.5,g(-1.3,1.3),g(-1.3,1.3),g(.8,2),.3,Bo[(o+i)%6],2,6,!0)};let De=0,Ue=0;function vr(e,t,n=0){De=(e-t)*N.HW+N.OX,Ue=(e+t)*N.HH-n*N.ZK}function ur(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const my=e=>e<0?0:e>1?1:e,Qe=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],Sv="#3a2420",ud="#2a1410",fd=e=>e>=5?Sv:Qe[e<0?0:e|0];function gu(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let s=0;s<i;s++){const a=(s+.5)/i*2-1,l=r*Math.sqrt(1-a*a);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+s*3),Math.max(1,Math.round(l)),3)}}q.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,s=e.angle||.85,a=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let c=0;c<l;c++){let d=a+(c/(l-1)-.5)*s*1.5;const m=i*g(.7,1);for(let p=0;p<=u;p++){const y=.35+(m-.35)*p/u;d+=g(-.13,.13);const x=(c*(u+1)+p)*2;f[x]=t+Math.cos(d)*y,f[x+1]=n+Math.sin(d)*y}}const h=(c,d,m)=>{const p=my(d/.25)*u;for(let y=0;y<l;y++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),M=(y*(u+1)+x)*2;vr(f[M],f[M+1]);const v=De,w=Ue;vr(f[M+2],f[M+3]);const _=v+(De-v)*b,A=w+(Ue-w)*b,R=Math.max(1,Math.round(Math.hypot(_-v,A-w)/3)),C=m*(1-x/u*.5);for(let I=0;I<=R;I++)ur(c,v+(_-v)*I/R,w+(A-w)*I/R,C)}};T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(c,d){c.globalAlpha=d<.6?.85:(1-d)/.4*.85,c.fillStyle=ud,h(c,d*1.8,6)}}),T({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(c,d){const m=d*1.4;c.globalAlpha=1-d*d,c.fillStyle=fd(m/.3),h(c,m,3)}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(c,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const y=.4+(i-.4)*p,x=s*(.45+.55*p),b=5+Math.round(y*3);c.globalAlpha=1-p,c.fillStyle=Qe[Math.min(3,m+(p*2|0))];for(let M=0;M<=b;M++){const v=a+(M/b-.5)*2*x,w=y*(.9+.1*Math.sin(M*2.3+m*1.7));vr(t+Math.cos(v)*w,n+Math.sin(v)*w,.35+.12*Math.sin(M*1.3+d*18)),ur(c,De,Ue,8-m-p*4)}}}});for(let c=0;c<32;c++){const d=a+g(-s,s)*.9,m=g(.3,1)*i*2.4;F(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,g(1.2,3),g(.7,1.05),Qe[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let c=0;c<14;c++){const d=a+g(-s,s),m=g(.6,1)*i*3.2;F(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,g(.4,1.4),.35,Qe[0],2,1,!0,.98)}et(3)};const _v=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],Kc=[],py=[],yy=[];_v.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(Kc.push(n-2),py.push(t),yy.push(r))}});const gy=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function Av(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":Qe[0]:gy[i];for(let s=0;s<Kc.length;s++)yy[s]===i&&e.fillRect(Math.round(t+Kc[s]*r),Math.round(n+py[s]*r),r,r)}}q.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,s)=>{for(let a=0;a<14;a++)F(i+g(-.3,.3),s+g(-.3,.3),g(.2,.8),g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),g(.5,.8),gy[2+(a&1)],4,9,!1,.95)};T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,s,a){const l=st(a.uid),u=s*t;if(!l||l.dead||S.mode!=="guest"&&u>.15&&!(l.shield>0)||s>.97){a.broke||(a.broke=!0,o(a.lx,a.ly),a.dur=a.t);return}a.lx=l.x,a.ly=l.y;const h=l.scale||1,c=h>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(b)>0;if(d===0===M)continue;const v=m*.035,w=my((u-v)/.08);if(w<=0)continue;const _=(p?22:30)*h,A=(p?8:11)*h;vr(l.x,l.y,p?.62:.22),i.globalAlpha=M?1:.4,Av(i,De+Math.cos(b)*_,Ue+Math.sin(b)*A-10*(1-w)-6*h,c,u-v<.12)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,s){vr(e.x,e.y,.55);const a=6+s*26;i.globalAlpha=1-s,i.fillStyle=Qe[1];for(let l=2;l<a;l+=3)ur(i,De+l,Ue+l*.7,4),ur(i,De-l,Ue+l*.7,4),ur(i,De+l,Ue-l*.7,4),ur(i,De-l,Ue-l*.7,4);i.fillStyle=Qe[0],ur(i,De,Ue,8*(1-s)+2)}});for(let i=0;i<10;i++){const s=i/10*6.28;F(e.x+Math.cos(s)*.4,e.y+Math.sin(s)*.4,.05,0,0,g(.6,1.2),g(.5,.8),Qe[1+i%3],2,-1,!0,.9)}};q.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),s=o-t,a=i-n,l=Math.hypot(s,a)||.01,u=s/l,f=a/l,h=Math.min(16,Math.max(4,Math.round(l/.28))),c=new Float32Array(h*4);for(let m=0;m<h;m++){const p=(m+.5)/h,y=g(-.16,.16);c[m*4]=t+s*p-f*y,c[m*4+1]=n+a*p+u*y,c[m*4+2]=g(18,30),c[m*4+3]=p*r}const d=r+1.9;T({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const y=p*d;for(let x=0;x<h;x++){const b=y-c[x*4+3];if(b<0)continue;const M=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(M<=0)continue;vr(c[x*4],c[x*4+1]);const v=c[x*4+2];m.globalAlpha=M*.8,m.fillStyle=ud,gu(m,De,Ue+1,v+6);const w=b/.3|0;m.globalAlpha=M,m.fillStyle=fd(w),gu(m,De,Ue,v*(w<5?.8:.6)),w<4&&W(x*7+(y*12|0))>.72&&(m.fillStyle=Qe[0],m.fillRect(Math.round(De+(W(x*3+(y*12|0))-.5)*v*.5),Math.round(Ue-2),2,2))}m.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,y){const x=st(y.uid),b=x?x.x:o,M=x?x.y:i;vr(b,M,.4);const v=De,w=Ue;vr(b+u,M+f,.4);let _=De-v,A=Ue-w;const R=Math.hypot(_,A)||1;_/=R,A/=R;const C=1-p*.6;for(let I=0;I<9;I++){const O=(10+I*5*(.8+Math.random()*.4))*C;m.globalAlpha=1-I/10,m.fillStyle=Qe[Math.min(4,I>>1)],ur(m,v-_*O+(Math.random()-.5)*3,w-A*O+(Math.random()-.5)*3,(10-I)*C)}if(y.n<22&&p<.9){for(let I=0;I<2;I++){const O=g(-2.5,2.5);F(b,M,.35,-u*2-f*O,-f*2+u*O,g(.5,1.6),.5,Qe[1+(Math.random()*3|0)],3,4,!0)}y.n+=2}if(!y.end&&p>.85){y.end=!0;for(let I=0;I<8;I++){const O=I/8*6.28;F(b,M,.1,Math.cos(O)*2.5+u,Math.sin(O)*2.5+f,.4,.6,I&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;F(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}et(4)};const F0=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],E0=[],xy=[],My=[];F0.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,s)=>s<0||s>=F0.length||i<0||i>=e.length||F0[s][i]===".";E0.push(n-9),xy.push(t),My.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const Tv=["#ff7a20","#ffd84a","#fffbe0"];q.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,s=Math.random()*6.28,a=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=s+u/i*6.28;a[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const h=f*2.6,c=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=h-d*.05;m<0||(vr(a[d],l[d]),u.globalAlpha=c*.85,u.fillStyle=ud,gu(u,De,Ue+1,46),u.globalAlpha=c,u.fillStyle=fd(m/.45),gu(u,De,Ue,26))}u.globalAlpha=1}}),T({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const h=r*(1-(1-f)*(1-f)),c=36;u.globalAlpha=1-f;for(let d=0;d<c;d++){const m=d/c*6.28;vr(t+Math.cos(m)*h,n+Math.sin(m)*h),u.fillStyle=Qe[d&1],ur(u,De,Ue,7*(1-f)+2)}}}),T({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,h){const c=f*1.15;for(let d=0;d<i;d++){const m=c-d*.05;if(m<0)continue;if(!(h.fired&1<<d)){h.fired|=1<<d;for(let v=0;v<5;v++)F(a[d],l[d],.3,g(-.8,.8)+(a[d]-t)*.4,g(-.8,.8)+(l[d]-n)*.4,g(3,5),g(.6,.9),Qe[v%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const y=95*p;vr(a[d],l[d]);const x=De,b=Ue;u.globalAlpha=Math.min(1,p*1.5);const M=c*24|0;for(let v=0;v<y;v+=4){const w=v/y,_=16*(1-w*.75)+(W(d*31+v+M)-.5)*4,A=(W(d*17+v*3+M)-.5)*7*w;if(u.fillStyle=w<.25?Qe[1]:w<.6?Qe[2]:Qe[3],u.fillRect(Math.round(x+A-_/2),Math.round(b-v-4),Math.round(_),4),w<.7){u.fillStyle=Qe[0];const R=_*.4;u.fillRect(Math.round(x+A-R/2),Math.round(b-v-4),Math.max(2,Math.round(R)),4)}}}}}),T({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const h=f*1.2,c=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,vr(t,n,c);const m=De,p=Ue-F0.length*d*.5;for(let y=0;y<3;y++){u.fillStyle=Tv[y];for(let x=0;x<E0.length;x++){if(My[x]!==y)continue;const b=Math.abs(E0[x]),M=b>=4?Math.round(Math.sin(h*14)*(b-3)*.45):0;u.fillRect(Math.round(m+E0[x]*d-d/2),Math.round(p+(xy[x]+M)*d),d,d)}}}}),et(9)};qe.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)F(t,n,.45,g(-1.3,1.3),g(-1.3,1.3),g(1.6,3.2),g(.3,.5),o<3?Qe[0]:Qe[1],2,10,!0,.97);F(t,n,.45,g(-.5,.5),g(-.5,.5),1,.45,Qe[2],3,8,!0,.95),T({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){vr(t,n,.45);const s=4+i*(r?16:11),a=Math.max(2,Math.round(s/3));o.globalAlpha=1-i,o.fillStyle=i<.4?Qe[1]:Qe[2];for(let l=0;l<a;l++){const u=l/a,f=s*(1-u),h=s*u*.7;ur(o,De+f,Ue+h,3),ur(o,De-h/.7,Ue+f*.7,3),ur(o,De-f,Ue-h,3),ur(o,De+h/.7,Ue-f*.7,3)}i<.3&&(o.fillStyle=Qe[0],ur(o,De,Ue,6))}})};const Fn="#fff2d6",Jn="#e2b878",oa="#9a6232",Yo="#4e2e16",Ps="#e8643a",Ms="#ffcc66",xu="#a07a48",on=Math.round,fo=Math.PI*2;function nn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(on(t),on(n),r,o)}function lo(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(on(t+(r-t)*l/a-i/2),on(n+(o-n)*l/a-i/2),i,i)}function bs(e,t,n,r,o,i=Ps){const s=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let a=0;a<=s;a++){const l=a/s,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?oa:l>.82?i:Fn,e.fillRect(on(t+(r-t)*l-u/2),on(n+(o-n)*l-u/2),u,u)}}function qf(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=on(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(on(t-s),on(n+i),s*2,2)}}function by(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const vy=e=>{const t=st(e);return t&&!t.dead&&!We(t)?t:null},Rv=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},wy=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Ge.erizo_A=(e,t,n,r,o)=>{e.translate(on(n),on(r)),e.rotate(o),nn(e,-15,-2,16,4,Yo),nn(e,-14,-1,14,2,Jn),nn(e,-9,-1,3,2,Fn),nn(e,-4,-1,3,2,Fn),nn(e,0,-2,3,4,Yo),nn(e,3,-1,3,2,Ps),nn(e,6,0,2,1,Ms),nn(e,-17,-4,5,2,Fn),nn(e,-17,2,5,2,Fn),Math.random()<.3&&F(t.x,t.y,t.z||.45,0,0,-.3,.25,Jn,2,0,!1)};qe.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:g(0,fo),l:g(8,12)}));T({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const s of t)bs(n,o+Math.cos(s.a)*s.l,i+Math.sin(s.a)*s.l*.8,o,i)}});for(let n=0;n<5;n++)F(e.x,e.y,.45,g(-2,2),g(-2,2),g(.5,2),.3,n%2?Jn:Fn,2,6,!1)};Ge.erizo_Q=(e,t,n,r,o,i)=>{const a=t.z||.45;e.translate(on(n),on(r)),e.rotate(o),nn(e,-31,-3,32,6,Yo);for(let u=0;u<30;u+=6)nn(e,-30+u,-2,3,4,Fn),nn(e,-30+u+3,-2,3,4,oa);nn(e,0,-3,4,6,Yo),nn(e,4,-2,4,4,Ps),nn(e,8,-1,3,2,Ms);for(let u=0;u<3;u++)nn(e,-36+u*3,-6+u,4,2,Fn),nn(e,-36+u*3,4-u,4,2,Fn);vt(!0);const l=Wt();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=Ms;for(let u=0;u<5;u++)l.fillRect(-6-u*6,on(Math.sin(i*38+u*1.3)*5)-1,2,2);vt(!1),Math.random()<.5&&F(t.x,t.y,a,g(-.4,.4),g(-.4,.4),.3,.35,Math.random()<.5?Fn:Jn,2,3,!1)};q.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=by(t,n),i=-o,s=r;T({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,h]=P(e.x+t*.35,e.y+n*.35,.45),c=u*.32,d=-9*Math.cos(c*55)*Math.exp(-c*14),m=f+r*d,p=h+o*d,y=f+i*15-r*5,x=h+s*15-o*5,b=f-i*15-r*5,M=h-s*15-o*5;l.globalAlpha=1-u,lo(l,f+r*3,h+o*3,y,x,3,oa),lo(l,f+r*3,h+o*3,b,M,3,oa),lo(l,y,x,m,p,2,Fn),lo(l,b,M,m,p,2,Fn)}}),T({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,h]=P(e.x+t*.5,e.y+n*.5,.45),c=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),y=r*m-o*p,x=r*p+o*m,b=d?c*.55:c;lo(l,f,h,f+y*b,h+x*b,3,Ms),lo(l,f,h,f+y*b*.5,h+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)F(e.x-t*.2,e.y-n*.2,.4,-t*g(1,2.5)+g(-.5,.5),-n*g(1,2.5)+g(-.5,.5),g(.3,1),.45,l%2?Jn:xu,3,2,!1,.9);const a=Math.atan2(n,t);for(let l=0;l<7;l++){const u=a+g(-.25,.25),f=g(5,9);F(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,g(0,.6),.22,l%2?Ms:Fn,2,0,!0,.86)}et(1.5)};q.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,s,a)=>{const l=vy(e.uid);if(!l)return;const u=s*a.dur,f=u<.2?wy(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=P(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*fo+.17,p=Math.sin(m);if(p>=0!==o)continue;const y=u<t?Math.sin(S.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=h+Math.cos(m)*16,M=c+p*12,v=b+Math.cos(m)*x+y,w=M+p*x*.75-x*.3;bs(i,b,M,v,w,(S.T*7+d*.37)%1<.12?"#ffffff":Ps)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),T({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const s=.35+i*.75;o.globalAlpha=1-i;for(let a=0;a<20;a++){const l=a/20*fo,[u,f]=P(e.x+Math.cos(l)*s,e.y+Math.sin(l)*s),[h,c]=P(e.x+Math.cos(l)*(s+.22),e.y+Math.sin(l)*(s+.22));lo(o,u,f,h,c,2,a%2?Jn:oa)}}});for(let o=0;o<14;o++){const i=o/14*fo,s=g(2,3.5);F(e.x,e.y,.45,Math.cos(i)*s,Math.sin(i)*s,g(1.5,3),.5,o%3?Fn:Jn,2,8,!1,.92)}et(2)};q.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,a=-i/s,l=o/s,[u,f]=by(o,i),h=u>=0?1:-1;T({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,x/r);let M=e.x+o*b,v=e.y+i*b;const w=st(e.uid);if(w){if(w.dead||We(w))return;M=w.x,v=w.y}const[_,A]=P(M,v,.32),R=16,C=x*36*h;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let I=0;I<3;I++){const O=(I-1)*9;lo(m,_-u*(R+4)-f*O,A-f*(R+4)+u*O,_-u*(R+18+I*5)-f*O,A-f*(R+18+I*5)+u*O,2,Jn)}qf(m,_,A,R+1,Yo),qf(m,_,A,R-1,oa),qf(m,_-4,A-4,R-9,Jn);for(let I=0;I<10;I++){const O=C+I*fo/10,E=Math.cos(O),U=Math.sin(O);bs(m,_+E*(R-3),A+U*(R-3),_+E*(R+10),A+U*(R+10))}}});const c=Math.max(4,Math.min(10,on(s*2.2))),d=Array.from({length:c},(m,p)=>({k:(p+.5)/c,o:g(-.28,.28),lean:g(-6,6),h:g(9,14)}));T({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,(y.dur-x)/.5);for(const M of d){if(x<M.k*r)continue;const v=Math.min(1,(x-M.k*r)/.08),[w,_]=P(e.x+o*M.k+a*M.o,e.y+i*M.k+l*M.o);m.globalAlpha=b*.45,nn(m,w-4,_-1,8,3,Yo),m.globalAlpha=b,bs(m,w+M.lean*v,_-M.h*v,w,_)}}});for(let m=0;m<12;m++){const p=Math.random();F(e.x+o*p+g(-.2,.2),e.y+i*p+g(-.2,.2),.1,g(-.6,.6),g(-.6,.6),g(.5,1.4),g(.4,.7),m%2?Jn:xu,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;F(e.x,e.y,.35,a*p*g(2,4),l*p*g(2,4),g(1.5,3),.45,Fn,2,8,!1,.92)}et(2)};q.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=Rv(e),r=n&&n.dur||3,o=.16,i=36,s=Array.from({length:i},(c,d)=>{const m=Math.random()*fo,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(r-.5)+g(0,.08),lean:g(-7,7),h:g(10,15),hit:!1}});T({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur,y=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);c.globalAlpha=.85*y;for(let b=0;b<8;b++){const M=b*fo/8+p*.4;for(const v of[-.09,.09]){const[w,_]=P(e.x+Math.cos(M+v)*x,e.y+Math.sin(M+v)*x),[A,R]=P(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));lo(c,w,_,A,R,3,Ps)}}c.globalAlpha=.45*y;for(let b=0;b<48;b++){const M=b/48*fo-p*.2,[v,w]=P(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);nn(c,v-1,w-1,2,2,Jn)}for(const b of s){if(p<b.t0+o)continue;const[M,v]=P(b.x,b.y);c.globalAlpha=.4*y,nn(c,M-4,v-1,8,3,Yo),c.globalAlpha=y,bs(c,M+b.lean,v-b.h,M,v)}}}),T({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur;for(const y of s){const x=(p-y.t0)/o;if(x<0)continue;if(x>=1){y.hit||(y.hit=!0,F(y.x,y.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,Math.random()<.5?Jn:xu,2,7,!1));continue}const[b,M]=P(y.x,y.y,3.6*(1-x)),v=y.lean*1.4;c.globalAlpha=.35,lo(c,b+v*2.4,M-52,b+v,M-22,1,Fn),c.globalAlpha=1,bs(c,b+v,M-22,b,M)}}});const a=la(e,r),l=S.T,u=Array.from({length:16},(c,d)=>({a:d/16*fo+g(-.07,.07),h:d%2?g(1.2,1.35):g(1.6,1.8),tip:g(.84,.9),w:d%2?5:7,ph:Math.random()*fo,dl:d/16*.3})).sort((c,d)=>Math.cos(c.a)+Math.sin(c.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(c,d,m)=>{const p=$n(a);if(p<=0){d.t=d.dur+1;return}const y=S.T-l,x=Math.min(1,p/.3);for(const b of u){const M=Math.cos(b.a),v=Math.sin(b.a);if(Si(M,v,0)>0!==m)continue;const w=wy((y-b.dl)/.3)*x;if(w<=.02)continue;const _=Math.sin(S.T*1.8+b.ph)*.04,A=e.x+M*t,R=e.y+v*t;An(A,R);const C=It.x,I=It.y;An(e.x+Math.cos(b.a+_)*t*(1-(1-b.tip)*w),e.y+Math.sin(b.a+_)*t*(1-(1-b.tip)*w),b.h*w),Cv(c,C,I,It.x,It.y,b.w,m?1:.8),c.globalAlpha=m?1:.85,nn(c,C-6,I-1,12,3,xu),nn(c,C-3,I-2,6,2,Jn)}c.globalAlpha=1};T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!1),a.rem>0&&Zo(a,e.x,e.y,t*.9,16764006,.3)}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!0)}});const h=vy(e.uid);if(h)for(let c=0;c<10;c++)F(h.x,h.y,.6,g(-.4,.4),g(-.4,.4),g(7,10),.45,c%2?Fn:Jn,2,0,!1,1);et(2)};function Cv(e,t,n,r,o,i,s){const a=Math.max(4,Math.ceil(Math.hypot(r-t,o-n)/3));for(let l=0;l<=a;l++){const u=l/a,f=Math.max(1,on(i*Math.pow(1-u,.75))),h=on(t+(r-t)*u),c=on(n+(o-n)*u);e.globalAlpha=s,e.fillStyle=Yo,e.fillRect(h-f-1,c-2,f*2+2,4),e.fillStyle=u<.28?oa:u>.84?Ps:Fn,e.fillRect(h-f,c-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?Yo:Jn,e.fillRect(h+on(f*.3),c-2,f-on(f*.3),4))}e.fillStyle=Ms,e.fillRect(on(r)-1,on(o)-1,2,2)}let ge=0,xe=0;function yn(e,t,n=0){ge=(e-t)*N.HW+N.OX,xe=(e+t)*N.HH-n*N.ZK}function Er(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Xi=e=>e<0?0:e>1?1:e,Qc=e=>1-(1-e)*(1-e),ae=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],Un=["#ffe0f4","#ff9ad8","#e060b0"],Ti=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],sn=["#ffffff","#fff2a0","#ffd24a"];function cd(e,t,n,r){const o=[],i=[],s=[],a=[],l=e.length,u=(f,h)=>h<0||h>=l||f<0||f>=e[h].length||t.indexOf(e[h][f])<0;return e.forEach((f,h)=>{for(let c=0;c<f.length;c++){const d=t.indexOf(f[c]);d<0||(o.push(c-n),i.push(h-r),s.push(d),a.push(u(c-1,h)||u(c+1,h)||u(c,h-1)||u(c,h+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(s),B:Uint8Array.from(a),n:o.length,h:l}}const Vf=cd(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function Sy(e,t,n,r){for(let o=0;o<Vf.n;o++)e.fillRect(Math.round(t+Vf.X[o]*r-r/2),Math.round(n+Vf.Y[o]*r-r/2),r,r)}function hi(e,t,n,r){Er(e,t,n,3);for(let o=2;o<=r;o+=2)Er(e,t+o,n+o,2),Er(e,t-o,n+o,2),Er(e,t+o,n-o,2),Er(e,t-o,n-o,2)}function Mu(e,t,n,r,o,i,s){for(let a=0;a<4;a++){const l=o+a*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,h=Math.sin(l)*r*i,c=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(s+1)));for(let p=0;p<m;p++){const y=p/m;Er(e,t+f+(c-f)*y,n+h+(d-h)*y,s)}}}function j1(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const Ns=new Map;function _y(e,t,n=!1){if(e.id==null)return;let r=Ns.get(e.id);if(!r){Ns.size>200&&Ns.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},Ns.set(e.id,r);const o=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,s,a){if(a.fin)return;const l=S.game;if(l){for(const u of l.projs)if(u.id===o)return;a.fin=!0,a.dur=a.t,Ns.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}q.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){yn(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=ae[1],Mu(r,ge,xe,i,o*Math.PI,.75,3),r.fillStyle=Un[1],Mu(r,ge,xe,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=ae[0],Er(r,ge,xe,4)}});for(let r=0;r<6;r++)F(t,n,.45,g(-1,1),g(-1,1),g(.3,1),.4,r&1?Un[1]:ae[1],2,0,!0)};Ge.gato_Q=(e,t,n,r,o,i)=>{_y(t,Ay);const s=-Math.cos(o),a=-Math.sin(o),l=-a,u=s;for(let c=1;c<16;c++){const d=8+c*3.2,m=Math.sin(c*.7-i*22)*(2+c*.35);e.globalAlpha=1-c/16,e.fillStyle=c&1?Un[1]:Un[2],e.fillRect(Math.round(n+s*d+l*m),Math.round(r+a*d+u*m),2,2)}e.globalAlpha=1,vt(!0);const f=Wt();f.fillStyle=ae[3],f.globalAlpha=.16,j1(f,n,r,20),f.globalAlpha=.22,j1(f,n,r,13),f.globalAlpha=1,vt(!1);const h=i*14;for(let c=-3;c<3;c++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(c+.5)*(c+.5);if(m>9)continue;let p;m>6?p=ae[4]:d===-2&&c===-2?p=ae[0]:p=((d*.8+c+h)%4+4)%4<1.3?ae[1]:ae[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+c*3),3,3)}};function Ay(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)F(t,n,.45,g(-.6,.6),g(-.6,.6),g(0,.6),.4,o&1?Un[1]:ae[2],2,1,!0);return}const r=Math.random()*6.28;T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){yn(t,n,.45);const s=Math.round(14*Xi(i/.4));o.globalAlpha=1-i*i;for(let a=0;a<5;a++){const l=r+a/5*6.28;for(let u=0;u<s;u++){const f=4+u*3,h=l+u*.3;o.fillStyle=u+a&1?Un[1]:ae[1],o.fillRect(Math.round(ge+Math.cos(h)*f),Math.round(xe+Math.sin(h)*f*.7),2,2)}}i<.25&&(o.fillStyle=ae[0],Er(o,ge,xe,10*(1-i*3)))}});for(let o=0;o<10;o++)F(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(.5,1.5),g(.4,.6),o&1?Un[0]:ae[1],2,2,!0);et(2)}const _o=cd(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);q.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,h)=>{for(let c=0;c<l;c++){const d=h+c/l*6.28,m=Math.cos(d),p=Math.sin(d),y=Math.atan2(m+p,m-p),x=y+Math.PI/2,b=Math.cos(x),M=Math.sin(x),v=new Float32Array(_o.n*2);for(let w=0;w<_o.n;w++)v[w*2]=_o.X[w]*b-_o.Y[w]*M,v[w*2+1]=_o.X[w]*M+_o.Y[w]*b;o.push({x:t+m*u,y:n+p*u,t:f+c*.014,c:v})}},s=Math.random()*6.28;i(5,r*.38,.03,s),i(9,r*.78,.14,s+.35),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,h=u>.55?(1-u)/.45:1;for(const c of o){const d=f-c.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,y=Math.max(2,Math.round(p*.6)),x=Math.round(p);yn(c.x,c.y),l.globalAlpha=h*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Ti[3]:b===1?Ti[1]:Ti[0];for(let M=0;M<_o.n;M++){const v=_o.B[M]===1,w=_o.Y[M]<0;(b===0?!v:b===1?v||w:v||!w)||l.fillRect(Math.round(ge+c.c[M*2]*p-x/2),Math.round(xe+c.c[M*2+1]*p*.5-y/2),x,y)}}}l.globalAlpha=1}});const a=Math.random()*6.28;T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*Qc(Xi(u*1.8));l.globalAlpha=1-u;for(let h=0;h<6;h++){const c=a+h*Math.PI/3,d=Math.cos(c),m=Math.sin(c);for(let p=.25;p<f;p+=.16)yn(t+d*p,n+m*p),l.fillStyle=p<f*.5?Ti[1]:Ti[2],Er(l,ge,xe,4-p/r*2);if(f>r*.4){const p=f*.6;for(let y=-1;y<=1;y+=2){const x=c+y*.75;for(let b=.12;b<.45;b+=.12)yn(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=Ti[0],Er(l,ge,xe,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;F(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,g(.3,1.1),Math.cos(u)*g(.5,2),Math.sin(u)*g(.5,2),g(0,.4),g(.7,1.1),Ti[l%2],2,.5,!0,.95)}et(4)};const Ri=cd([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);q.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;T({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(s,a){yn(t,n);const l=3,u=ge,f=xe-2;for(let h=0;h<3;h++){s.fillStyle=h===0?ae[3]:h===1?ae[1]:sn[1];for(let c=0;c<Ri.n;c++){if((Ri.K[c]===1?2:Ri.B[c]?1:0)!==h)continue;const m=W(c*7.13+i),p=-Ri.Y[c]/(Ri.h-1);m*.6+p*.6+.2<a*1.3||(s.globalAlpha=.85*(1-a*.5),s.fillRect(Math.round(u+Ri.X[c]*l-l/2),Math.round(f+Ri.Y[c]*l-a*18*m),l,l))}}}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(s,a){const l=a*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,h=(l-f*.12)/.3;h<0||h>=1||(yn(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),s.globalAlpha=1-h,s.fillStyle=u&1?Un[1]:ae[1],hi(s,ge,xe,8*(1-h)+2))}}}),T({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(s,a){yn(r,o,1.05);const l=ge,u=xe,f=a<.18?a/.18:a<.55?1:Math.max(0,1-(a-.55)/.12),h=[3,5,7,5,3];if(f>.05)for(let c=-1;c<=1;c+=2){const d=l+c*9;for(let m=0;m<5;m++){const p=h[m]*2,y=Math.max(1,Math.round(2*f));s.fillStyle=m===0||m===4?sn[2]:sn[1],s.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,y)}s.fillStyle="#2a1040",s.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}s.globalAlpha=a<.2?a/.2:a>.6?Math.max(0,(1-a)/.4):1,s.fillStyle=Un[1];for(let c=0;c<=8;c++){const d=Math.PI*(.15+.7*c/8);s.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}s.fillStyle=ae[0],s.fillRect(Math.round(l-6),Math.round(u+9),2,2),s.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let s=0;s<6;s++)F(t,n,.5,g(-.8,.8),g(-.8,.8),g(.5,1.5),.5,ae[1+s%3],2,0,!0);for(let s=0;s<10;s++){const a=s/10*6.28;F(r,o,.5,Math.cos(a)*2,Math.sin(a)*2,g(.2,1),.45,s&1?Un[1]:ae[1],2,0,!0,.9)}};const o0=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Yf=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],jf=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],si=3.7,K1=[1,.75,.55,.4,.28],ga=Math.round;let Q1=null,Z1=null,J1=[],t2=[];function e2(e,t,n,r,o,i,s){const a=S.T;for(let l=0;l<12;l++){const u=l/12*6.283+a*.5,f=Math.cos(u),h=Math.sin(u);if(Si(f*si,h*si,r)>0===s)for(let c=1;c<=14;c++){const d=c/14;if(d>o)break;const m=((d-a*1.6+l*.29)%1+1)%1,p=m<.12;yn(t+f*r*d,n+h*r*d,si*(1-d)),e.globalAlpha=i*(p?1:s?.55:.45),e.fillStyle=p?sn[0]:c%3?ae[1]:Un[1],p&&s?hi(e,ge,xe,5):Er(e,ge,xe,p?4:3)}}}q.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*N.HW*Math.SQRT2;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(w,_){const A=_*1.1;yn(t,n);const R=ge,C=xe;w.globalAlpha=_>.85?(1-_)/.15:1;const I=jf.length/2,O=Xi(A/.45)*I;w.fillStyle=ae[1];for(let E=0;E<I&&E<O;E++){const U=jf[E*2],G=jf[E*2+1],j=Math.min(1,O-E),L=R+o0[U]*i,k=C+Yf[U]*i*.55,D=R+o0[G]*i,$=C+Yf[G]*i*.55,H=Math.hypot(D-L,$-k)*j,Z=Math.round(H/6);for(let tt=0;tt<=Z;tt++){const dt=tt*6/(H||1)*j;w.fillRect(Math.round(L+(D-L)*dt),Math.round(k+($-k)*dt),2,2)}}for(let E=0;E<o0.length;E++)w.fillStyle=E>=9?sn[2]:sn[1],hi(w,R+o0[E]*i,C+Yf[E]*i*.55,3+3*(.5+.5*Math.sin(S.T*9+E*1.7)))}});const s=la(e,o),a=()=>S.T-s.t0,l=()=>Qc(Xi(a()/.45)),u=w=>Math.min(1,a()/.15,w/.12+1e-4);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(w,_,A){const R=$n(s);if(R<=0){A.t=A.dur+1;return}const C=Xi(u(R)),I=l(),O=si*(1-I);yn(t,n,O);const E=ge,U=xe;Q1!==w&&(Q1=w,J1=[{u0:0,fill:Gt(w,ae[3],5),a:.55},{u0:.65,fill:Gt(w,ae[2],6),a:.55},{u0:.9,fill:Gt(w,ae[1],10),a:.6}]),bo(w,E,U,Ce(r*I),0,Hr(si-O),!1,J1,K1,C),e2(w,t,n,r,I,C,!1),Zo(s,t,n,r*1.1,12615935,.7*C)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(w,_,A){const R=$n(s);if(R<=0){A.t=A.dur+1;return}const C=Xi(u(R)),I=l(),O=si*(1-I);yn(t,n,O);const E=ge,U=xe;Z1!==w&&(Z1=w,t2=[{u0:0,fill:Gt(w,ae[2],3),a:.5},{u0:.65,fill:Gt(w,ae[1],4),a:.55},{u0:.9,fill:Gt(w,ae[0],9),a:.7}]),bo(w,E,U,Ce(r*I),0,Hr(si-O),!0,t2,K1,C),e2(w,t,n,r,I,C,!0),yn(t,n,si);const G=ge,j=xe,L=Xi(a()/.3);w.globalAlpha=C;for(let k=-9;k<=9;k+=2){const D=ga((14-Math.abs(k)*1.4)*L);if(D<1)continue;const $=Math.max(1,ga(2+2*Math.sin(S.T*3)));w.fillStyle=Math.abs(k)>6?sn[2]:sn[1],w.fillRect(ga(G-D),ga(j+k),D-$,2),w.fillRect(ga(G+$),ga(j+k),D-$,2)}w.fillStyle=sn[0],Mu(w,G,j,22+3*Math.sin(S.T*6),S.T*1.5,1,2)}});const f=12,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let w=0;w<f;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r*.9;h[w]=t+Math.cos(_)*A,c[w]=n+Math.sin(_)*A,d[w]=.45+w/(f-1)*.55+g(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*N.ZK),y=40/p,x=-352.8/p;T({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(w,_,A){const R=_*1.2;for(let C=0;C<f;C++){const I=R-(d[C]-m);if(!(I<0))if(I<m){const O=I/m;yn(h[C],c[C],4.5*(1-O));const E=ge+(1-O)*40,U=xe;for(let G=-1;G<=1;G++){const j=G*.12,L=y*Math.cos(j)-x*Math.sin(j),k=y*Math.sin(j)+x*Math.cos(j);w.fillStyle=G===0?Un[1]:ae[1];for(let D=1;D<10;D++)w.globalAlpha=1-D/10,w.fillRect(Math.round(E+L*D*3.2+G*3),Math.round(U+k*D*3.2),2,2)}w.globalAlpha=1,w.fillStyle=sn[1],w.fillRect(Math.round(E-6),Math.round(U-1),12,2),w.fillRect(Math.round(E-1),Math.round(U-6),2,12),w.fillStyle=sn[0],w.fillRect(Math.round(E-2),Math.round(U-2),4,4)}else{if(!(A.landed&1<<C)){A.landed|=1<<C;for(let E=0;E<2;E++)F(h[C],c[C],.1,g(-1,1),g(-1,1),g(1,2),.45,E?sn[1]:Un[1],2,4,!0)}const O=(I-m)/.2;if(O>=1)continue;yn(h[C],c[C]),w.globalAlpha=1-O,w.fillStyle=sn[1],hi(w,ge,xe,2+O*8)}}w.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(w,_,A){if(!A.boom){A.boom=!0,et(8);for(let E=0;E<28;E++){const U=Math.random()*6.28,G=g(1,3.5);F(t,n,.3,Math.cos(U)*G,Math.sin(U)*G,g(1.5,3.5),g(.5,.8),[sn[1],ae[1],Un[1],ae[0]][E&3],3,5,!0,.95)}}const R=.3+(r-.3)*Qc(_),C=_*2;yn(t,n,.2);const I=ge,O=xe;if(_<.35){const E=1-_/.35;w.fillStyle=ae[1],w.globalAlpha=E*.25,w.fillRect(Math.round(I-70),Math.round(O-35),140,70),w.globalAlpha=E*.4,w.fillRect(Math.round(I-40),Math.round(O-20),80,40),w.fillStyle=ae[0],w.globalAlpha=E*.7,w.fillRect(Math.round(I-15),Math.round(O-8),30,16)}w.globalAlpha=1-_*_;for(let E=0;E<10;E++){const U=C+E/10*6.28;yn(t+Math.cos(U)*R,n+Math.sin(U)*R,.35+.2*Math.sin(_*6+E)),w.fillStyle=E&1?sn[2]:sn[1],Sy(w,ge,xe,3),w.fillStyle=sn[0],w.fillRect(Math.round(ge-1),Math.round(xe-1),2,2)}}});const b=24,M=new Float32Array(b),v=new Float32Array(b);for(let w=0;w<b;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r;M[w]=t+Math.cos(_)*A,v[w]=n+Math.sin(_)*A}T({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(w,_){const A=S.T*8|0;for(let R=0;R<b;R++){const C=W(R*13+A);C<.25||(yn(M[R],v[R]),w.globalAlpha=(1-_)*C,w.fillStyle=R%3?ae[1]:sn[1],w.fillRect(Math.round(ge),Math.round(xe),2,2))}}})};Ge.gato_A=(e,t,n,r,o,i)=>{const s=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);_y(t,Pv,s),vt(!0);const a=Wt(),l=Math.cos(o),u=Math.sin(o);for(let c=1;c<=4;c++)a.globalAlpha=.8-c*.17,a.fillStyle=c&1?Un[1]:ae[1],Er(a,n-l*c*5,r-u*c*5,4-c*.6);a.globalAlpha=1;const f=s?7:5,h=(i*16|0)&1;if(a.fillStyle=ae[2],h)for(let c=-f;c<f;c+=2){const d=(f-Math.abs(c+1))*2;a.fillRect(Math.round(n-d/2),Math.round(r+c),Math.max(2,Math.round(d)),2)}else{const c=Math.round(f*1.4);a.fillRect(Math.round(n-c/2),Math.round(r-c/2),c,c)}if(a.fillStyle=Un[0],a.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),s){a.fillStyle=sn[1];for(let c=0;c<3;c++){const d=i*10+c*2.09;a.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}vt(!1)};function Ty(e,t,n){T({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){yn(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=ae[1],Mu(r,ge,xe,i,Math.PI/4,.75,2),r.fillStyle=Un[1],hi(r,ge+i,xe,3),hi(r,ge-i,xe,3),hi(r,ge,xe+i*.75,3),hi(r,ge,xe-i*.75,3),n&&(r.fillStyle=sn[1],Sy(r,ge,xe-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)F(e,t,.45,g(-1,1),g(-1,1),g(.3,1.2),.35,n&&r&1?sn[1]:ae[1],2,1,!0)}function Pv(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;Ty(t,n,e.crit),it.sfx("atk_gato",t,n,e.crit?.9:.6)}qe.gato=e=>Ty(e.x,e.y,!!e.big);q.gato_Q_hit=e=>Ay({x:e.x,y:e.y,life:9});const Y=Math.round,wr=Math.PI*2;let Lt=0,Dt=0;function Pe(e,t,n=0){Lt=(e-t)*N.HW+N.OX,Dt=(e+t)*N.HH-n*N.ZK}const In=e=>e<0?0:e>1?1:e,_i=e=>1-(1-e)*(1-e),hd=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function dd(e,t,n,r,o){e.fillStyle=o,e.fillRect(Y(t-r/2),Y(n-r/2),r,r)}const V={w:"#ffffff",cy:"#22d6ff",cyl:"#a8fcff",cyd:"#0a6676",mag:"#ff1ee6",magl:"#ff96f5",magd:"#6a0a5e",bk:"#100816",pur:"#3c145a",lime:"#aaff3c",yel:"#ffdc3c",red:"#e8224a"},jo=2283263,Ko=16719590,Yu=15267583,vs=[V.mag,V.cy,V.yel,V.lime,V.w],ws=[V.mag,V.cy,V.w,V.magl,V.cyl];kn.glitch_bolt=[V.w,V.cyl,V.cy,V.mag];kn.fragment=[V.w,V.magl,V.mag,V.cy];kn.delete=[V.w,V.cyl,V.mag,V.cy];kn.glitch_copy=[V.w,V.cyl,V.cy,V.cyd];kn.glitch_dup=[V.w,V.cy,V.mag,V.red];const i0=new Map;let Ao=null,Bs=null;function ua(e,t,n,r){const o=Kt[e],i=_r[e];if(!o||!i||!i.naturalWidth)return null;const[s,a]=Up(o,t,n,r),l=e+"|"+s+"|"+a;let u=i0.get(l);if(u)return u;const f=o.fw,h=o.fh,c=Xp(e,s,a);if(!c)return null;const d=document.createElement("canvas");if(d.width=f,d.height=h,d.getContext("2d").drawImage(i,c[0],c[1],c[2],c[3],c[4],c[5],c[2],c[3]),Ao||(Ao=document.createElement("canvas"),Bs=Ao.getContext("2d",{willReadFrequently:!0})),!Bs)return null;Ao.width<f&&(Ao.width=f),Ao.height<h&&(Ao.height=h),Bs.clearRect(0,0,Ao.width,Ao.height),Bs.drawImage(d,0,0);let m;try{m=Bs.getImageData(0,0,f,h).data}catch{return null}const p=f+1>>1,y=h+1>>1,x=new Uint8Array(p*y),b=new Uint32Array(p*y);let M=1e9,v=1e9,w=-1,_=-1;for(let R=0;R<y;R++)for(let C=0;C<p;C++){let I=0,O=-1;for(let E=0;E<2;E++)for(let U=0;U<2;U++){const G=C*2+U,j=R*2+E;if(G>=f||j>=h)continue;const L=(j*f+G)*4;m[L+3]>I&&(I=m[L+3],O=L)}I>60&&(x[R*p+C]=1,b[R*p+C]=m[O]<<16|m[O+1]<<8|m[O+2],C<M&&(M=C),C>w&&(w=C),R<v&&(v=R),R>_&&(_=R))}const A=[];for(let R=0;R<y;R++)for(let C=0;C<p;C++){const I=R*p+C;x[I]||(C>0&&x[I-1]||C<p-1&&x[I+1]||R>0&&x[I-p]||R<y-1&&x[I+p])&&A.push(C,R)}return w<0&&(M=0,v=0,w=p-1,_=y-1),u={img:d,ox:0,oy:0,fw:f,fh:h,ax:o.ax,ay:o.ay,cw:p,ch:y,cells:x,cols:b,ring:Int16Array.from(A),bx0:M*2,by0:v*2,bx1:w*2+2,by1:_*2+2,v:{}},i0.size>140&&i0.clear(),i0.set(l,u),u}function ln(e,t){let n=e.v[t];if(n)return n;n=document.createElement("canvas"),n.width=e.fw,n.height=e.fh;const r=n.getContext("2d"),o=e.fw,i=e.fh;if(r.imageSmoothingEnabled=!1,t==="check"||t==="scan"){if(t==="check")for(let s=0;s<i;s+=6)for(let a=0;a<o;a+=6)r.fillStyle=a/6+s/6&1?V.pur:V.mag,r.fillRect(a,s,6,6);else{r.fillStyle=V.cy;for(let s=0;s<i;s+=4)r.fillRect(0,s,o,2)}r.globalCompositeOperation="destination-in",r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i)}else if(r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i),r.globalCompositeOperation="source-atop",r.globalAlpha=t==="white"?1:t==="ghost"?.62:.6,r.fillStyle=t==="white"?V.w:t==="ghost"?"#38e4f4":t==="red"?V.red:V.cy,r.fillRect(0,0,o,i),t==="white"||t==="ghost"){r.globalCompositeOperation="destination-out",r.globalAlpha=t==="white"?1:.5,r.fillStyle="#000";for(let s=2;s<i;s+=4)r.fillRect(0,s,o,2)}return e.v[t]=n,n}function mr(e,t,n,r,o,i,s,a=0){s<=.003||(e.globalAlpha=Math.min(1,s),e.imageSmoothingEnabled=!1,n?e.drawImage(n,Y(r-t.ax*i+a),Y(o-t.ay*i),Y(t.fw*i),Y(t.fh*i)):e.drawImage(t.img,t.ox,t.oy,t.fw,t.fh,Y(r-t.ax*i+a),Y(o-t.ay*i),Y(t.fw*i),Y(t.fh*i)))}function li(e,t,n,r,o,i,s,a,l,u,f,h){const c=a-s,d=u-l;if(c<=0||d<=0||h<=.003)return;e.globalAlpha=Math.min(1,h),e.imageSmoothingEnabled=!1;const m=Y(r+(s-t.ax)*i+f),p=Y(o+(l-t.ay)*i);n?e.drawImage(n,s,l,c,d,m,p,Y(c*i),Y(d*i)):e.drawImage(t.img,t.ox+s,t.oy+l,c,d,m,p,Y(c*i),Y(d*i))}function Iv(e,t,n,r,o,i,s){const a=t.ring,l=2*o,u=n-t.ax*o,f=r-t.ay*o,h=Math.max(1,Y(l));e.globalAlpha=s;for(let c=0;c<2;c++){e.fillStyle=c?V.w:V.cy;for(let d=0;d<a.length;d+=2)(a[d]+a[d+1]+i>>1&1)===c&&e.fillRect(Y(u+a[d]*l),Y(f+a[d+1]*l),h,h)}}function Va(e){const t=Kt[e.sprite];if(!t)return null;let n="idle",r=0;if(t.anims)if(e.atkAnim>0&&t.anims.attack){n="attack";const o=t.anims.attack.n;r=Math.min(o-1,Math.floor((1-e.atkAnim/.45)*o))}else e.moving&&t.anims.walk?(n="walk",r=Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))):t.anims.idle?r=Math.floor((e.animT||0)*1e3/t.anims.idle.ms):n="walk";return ua(e.sprite,n,t.dirs===1?0:e.dir||0,r)}function Zc(e){const t=Kt[e.sprite];return t?ua(e.sprite,"idle",t.dirs===1?0:e.dir||0,0):null}const Mr=e=>(e.scale||1)*(e._fbScale||1),n2={A:".#. #.# ### #.# #.#",C:".## #.. #.. #.. .##",D:"##. #.# #.# #.# ##.",E:"### #.. ##. #.. ###",G:".## #.. #.# #.# .##",I:"### .#. .#. .#. ###",L:"#.. #.. #.. #.. ###",N:"#..# ##.# #.## #..# #..#",O:".#. #.# #.# #.# .#.",P:"##. #.# ##. #.. #..",R:"##. #.# ##. #.# #.#",S:".## #.. .#. ..# ##.",T:"### .#. .#. .#. .#.",Y:"#.# #.# .#. .#. .#.",X:"#.# #.# .#. #.# #.#",".":". . . . #","!":"# # # . #"," ":".. .. .. .. ..","[":"## #. #. #. ##","]":"## .# .# .# ##"},Cl={};for(const e in n2)Cl[e]=n2[e].split(" ").map(t=>[...t].map(n=>n==="#"?1:0));function Ov(e,t){let n=0;for(const r of e)n+=((Cl[r]||Cl[" "])[0].length+1)*t;return n-t}function Ss(e,t,n,r,o,i,s){if(s<=.01)return;let a=Y(t-Ov(r,i)/2);n=Y(n),e.globalAlpha=s;for(const l of r){const u=Cl[l]||Cl[" "],f=u[0].length;for(let h=0;h<2;h++){e.fillStyle=h?o:V.bk;const c=h?0:i;for(let d=0;d<5;d++)for(let m=0;m<f;m++)u[d][m]&&e.fillRect(a+m*i+c,n+d*i+c,i,i)}a+=(f+1)*i}}function Lo(e,t,n,r,o,i){e.fillStyle=o+i>>1&1?V.bk:V.w,e.fillRect(Y(t),Y(n),r,r)}function bu(e,t,n,r,o,i,s,a,l){if(a<=.01)return;t=Y(t),n=Y(n),r=Y(r),o=Y(o),e.globalAlpha=a;let u=0;for(let c=t;c<r;c+=i)Lo(e,c,n,i,u++,s);for(let c=n;c<o;c+=i)Lo(e,r,c,i,u++,s);for(let c=r;c>t;c-=i)Lo(e,c,o,i,u++,s);for(let c=o;c>n;c-=i)Lo(e,t,c,i,u++,s);if(!l)return;const f=Y((t+r)/2),h=Y((n+o)/2);zr(e,t,n,i),zr(e,r,n,i),zr(e,t,o,i),zr(e,r,o,i),zr(e,f,n,i),zr(e,f,o,i),zr(e,t,h,i),zr(e,r,h,i)}function zr(e,t,n,r){const o=r*2+1;e.fillStyle=V.bk,e.fillRect(Y(t-o/2-1+r/2),Y(n-o/2-1+r/2),o+2,o+2),e.fillStyle=V.w,e.fillRect(Y(t-o/2+r/2),Y(n-o/2+r/2),o,o)}function md(e,t,n,r,o,i,s,a,l,u,f,h=0,c=1){const d=Math.hypot(r-t,o-n);if(d<1||f<=.01)return;const m=Math.floor(d/i);e.globalAlpha=f;for(let p=0;p<=m;p++){const y=(p*i+a%i)/d;y<h||y>c||(e.fillStyle=p&1?u:l,e.fillRect(Y(t+(r-t)*y-s/2),Y(n+(o-n)*y-s/2),s,s))}}function zv(e,t,n,r,o,i){const s=[t-r,t+r,t+r,t-r],a=[n-r,n-r,n+r,n+r];e.globalAlpha=i;let l=0;for(let u=0;u<4;u++){Pe(s[u],a[u]);const f=Lt,h=Dt;Pe(s[(u+1)%4],a[(u+1)%4]);const c=Lt,d=Dt,m=Math.max(1,Math.floor(Math.hypot(c-f,d-h)/2));for(let p=0;p<m;p++)Lo(e,f+(c-f)*p/m,h+(d-h)*p/m,2,l++,o)}for(let u=0;u<4;u++)Pe(s[u],a[u]),e.fillStyle=V.bk,e.fillRect(Y(Lt-3),Y(Dt-3),6,6),e.fillStyle=V.w,e.fillRect(Y(Lt-2),Y(Dt-2),4,4)}function r2(e,t,n,r,o,i,s){e.globalAlpha=s,t=Y(t);const a=Y(n-r/2),l=Y(n+r/2),u=6*o;e.fillStyle=V.bk,e.fillRect(t-3,a-1,4,l-a+2),e.fillRect(Math.min(t,t+u)-1,a-1,8,4),e.fillRect(Math.min(t,t+u)-1,l-2,8,4),e.fillStyle=i,e.fillRect(t-2,a,2,l-a),e.fillRect(Math.min(t-2,t-2+u),a,8,2),e.fillRect(Math.min(t-2,t-2+u),l-2,8,2)}function Fv(e,t,n,r,o,i,s=V.mag,a=V.cy){const l=Math.cos(r),u=Math.sin(r),f=o+2;e.globalAlpha=i;for(let h=-f;h<=f;h++)for(let c=-f;c<=f;c++){const d=c*l+h*u,m=-c*u+h*l,p=Math.max(Math.abs(d),Math.abs(m));p>o+.5||(e.fillStyle=p>o-.6?V.bk:d>0==m>0?s:a,e.fillRect(Y(t+c*2-1),Y(n+h*2-1),2,2))}}function ju(e,t,n,r,o,i){e.globalAlpha=i,t=Y(t-r/2),n=Y(n-r/2),e.fillStyle=V.bk,e.fillRect(t-1,n-1,r+2,r+2),e.fillStyle=o,e.fillRect(t,n,r,r),e.fillStyle=V.w,e.fillRect(t,n,Math.max(1,r>>1),2)}const zo=[];(()=>{for(let e=0;e<11;e++)for(let t=0;t<11;t++){const n=Math.hypot(t-5,e-5);n>=4.3&&n<=5.6||n<4.3&&Math.abs(t-e)<=.5?zo.push(t,e,0):n<4.3&&t>=2&&t<=8&&e>=3&&e<=6?zo.push(t,e,(e===4||e===5)&&(t===3||t===5||t===7)?2:1):n<4.3&&t===3&&e===7&&zo.push(t,e,1)}})();function Ev(e,t,n,r){e.globalAlpha=r;const o=2,i=Y(t-11),s=Y(n-11);e.fillStyle=V.bk,e.fillRect(i-2,s-2,26,26);for(let a=0;a<zo.length;a+=3)e.fillStyle=zo[a+2]===0?V.red:zo[a+2]===1?V.w:V.bk,e.fillRect(i+zo[a]*o,s+zo[a+1]*o,o,o);e.fillStyle=V.cy;for(let a=0;a<2;a++){const l=s+4+a*7+(S.T*6|0)%2;for(let u=0;u<3;u++)e.fillRect(i+25+u*2,l+u*2,2,2),e.fillRect(i+33-u*2,l+u*2,2,2)}}function Ku(e,t){return t?(t.ay-t.by0)*Mr(e):60}const Kf=new Map,a0=new Map,Ya=new Set,ia=new Map,yl=new Map;let Qf=-1,o2=0;function Lv(e,t){if(t.grid&&t.grid.solidAt&&t.grid.solidAt(e.x,e.y,.02))return!0;const n=e.r||.35;for(const r of t.units){if(r===e||r.dead||r.flying)continue;const o=(n+(r.r||.35))*.95,i=r.x-e.x,s=r.y-e.y;if(!(i>o||i<-o||s>o||s<-o)&&i*i+s*s<o*o)return!0}return!1}function kv(e){for(const t of ia.values())if(t.tid===e.id)return t;for(const t of ia.values())if(t.tid<0&&Math.hypot(t.x-e.x,t.y-e.y)<2.5)return t.tid=e.id,t;return null}pc.glitch=e=>{const t=S.game;if(!t||!t.units)return;const n=S.T;if(e==="ground"){const a=Wt();for(const l of t.units){if(l.dead||!l.illusion||l.heroKey!=="glitch"||We(l))continue;Pe(l.x,l.y);const u=(l.r||.35)*Mr(l)*N.HW*1.5+4,f=u*.5,h=28;a.globalAlpha=.85;for(let c=0;c<h;c++){if((c+(n*10|0)&3)>1)continue;const d=c/h*wr;dd(a,Lt+Math.cos(d)*u,Dt+Math.sin(d)*f,2,c&1?V.cyl:V.cy)}}return}const r=Qf<0?0:Math.min(.1,Math.max(0,n-Qf));Qf=n;const o=n>=o2;o&&(o2=n+.12);const i=Wt(),s=n*16|0;for(const a of t.units){if(a.dead){Kf.delete(a.id),a0.delete(a.id);continue}const l=We(a),u=a.status||{};if(a.heroKey==="glitch"&&a.kind==="hero"){let f=Kf.get(a.id)||0;if(f=Lv(a,t)?Math.min(1,f+r*9):Math.max(0,f-r*2.5),Kf.set(a.id,f),f>.01&&!l){const c=Va(a);if(c){Pe(a.x,a.y);const d=Mr(a),m=.85+.15*Math.sin(n*23+a.id);if(mr(i,c,ln(c,"ghost"),Lt,Dt,d,.75*f),mr(i,c,ln(c,"check"),Lt,Dt,d,.55*f*m),Iv(i,c,Lt,Dt,d,s,f),(n+W(a.id)*.5)%.45<.09){const b=c.by0+Y((c.by1-c.by0)*(.15+.6*W(a.id+(n/.45|0)))),M=Math.min(c.by1,b+10);li(i,c,ln(c,"red"),Lt,Dt,d,0,c.fw,b,M,-5,.9*f),li(i,c,ln(c,"cyan"),Lt,Dt,d,0,c.fw,b,M,5,.9*f)}const y=c.ring,x=2*d;for(let b=0;b<6&&y.length;b++){const M=(W(a.id*7+b+(n*8|0))*(y.length>>1)|0)*2,v=(n*8+b*.37)%1;i.globalAlpha=f*(1-v),i.fillStyle=b&1?V.mag:V.cy,i.fillRect(Y(Lt-c.ax*d+y[M]*x+(b&2?-1:1)*v*8),Y(Dt-c.ay*d+y[M+1]*x-v*10),3,3)}}o&&Mt(a.x,a.y,1.3,jo,.6*f,.2,{uid:a.id})}}if(a.illusion&&a.heroKey==="glitch"&&(Ya.size>200&&Ya.clear(),Ya.add(a.id),!l)){const f=Va(a);if(f){Pe(a.x,a.y);const h=Mr(a);if(mr(i,f,ln(f,"scan"),Lt,Dt,h,.32+.08*Math.sin(n*7+a.id)),(n+W(a.id)*1.6)%1.6<.12){const d=f.by0+Y((f.by1-f.by0)*(.25+.4*W(a.id+(n/1.6|0)))),m=Math.min(f.by1,d+8);li(i,f,ln(f,"red"),Lt,Dt,h,0,f.fw,d,m,-4,.8),li(i,f,ln(f,"cyan"),Lt,Dt,h,0,f.fw,d,m,4,.8)}}o&&Mt(a.x,a.y,.9,jo,.18,.2,{uid:a.id})}if(u.slow&&u.slow.fx==="fragment"){let f=a0.get(a.id);if(f===void 0&&(f=n,a0.set(a.id,n)),!l){const h=n-f,c=Zc(a),d=Mr(a);Pe(a.x,a.y);const m=Lt,p=Dt,y=Ku(a,c),x=p-y*.45,b=(c?(c.bx1-c.bx0)*d*.5:24)+6,M=b*Math.min(1,h/.2)*(1-.25*In(h/1.5));for(let v=0;v<5;v++){const w=v/5*wr+h*4+h*h*1.6,_=Math.sin(w);ju(i,m+Math.cos(w)*M,x+_*M*.42+Math.sin(n*9+v)*1.5,8,vs[v],_<0?.6:1)}Ev(i,m+b+16,p-y*.8,.95),o&&Mt(a.x,a.y,1,Ko,.4,.2,{uid:a.id})}}else a0.delete(a.id);if(u.deleting){const f=yl.get(a.id);if(f!==void 0&&n-f<.6)continue;const h=kv(a);if(l)continue;const c=Zc(a),d=Mr(a);Pe(a.x,a.y);const m=Lt,p=Dt,y=h?n-h.t0:1,x=_i(In(y/.2)),b=(1-x)*42,M=c?m+(c.bx0-c.ax)*d-6:m-26,v=c?m+(c.bx1-c.ax)*d+6:m+26,w=c?p+(c.by0-c.ay)*d-6:p-64,_=c?p+(c.by1-c.ay)*d+4:p+6;h&&(h.rx0=M-m,h.ry0=w-p,h.rx1=v-m,h.ry1=_-p,h.tx=a.x,h.ty=a.y);const A=h?In(y/h.dur):.5+.4*Math.sin(n*3),R=Va(a);R&&x>=1&&li(i,R,ln(R,"check"),m,p,d,R.bx0,R.bx0+Y((R.bx1-R.bx0)*A),0,R.fh,0,.5);const C=h?st(h.uid):null;C&&!C.dead&&(Pe(C.x,C.y,.75),md(i,Lt,Dt,m,(w+_)/2,7,2,n*40,V.cy,V.cyl,.9,0,x)),bu(i,M-b,w-b*.8,v+b,_+b*.5,2,s,1,!0);const I=Math.max(44,Y(v-M)),O=Y((M+v)/2-I/2),E=Y(_+8);i.globalAlpha=x,i.fillStyle=V.bk,i.fillRect(O-1,E-1,I+2,8),i.fillStyle=V.magd,i.fillRect(O,E,I,6),i.fillStyle=V.mag,i.fillRect(O,E,Y(I*A),6),i.fillStyle=V.magl,i.fillRect(O,E,Y(I*A),2),Ss(i,(M+v)/2,E+11,["DELETING","DELETING.","DELETING..","DELETING..."][(n*4|0)%4],V.w,2,x),Math.random()<.35&&F(a.x+(Math.random()-.5)*.4,a.y+(Math.random()-.5)*.4,.3+Math.random()*.8,0,0,.9,.5,Math.random()<.5?V.mag:V.cy,2,-.4,!0),o&&Mt(a.x,a.y,1.2,Ko,.45+.25*A,.2,{uid:a.id})}}};const Ry=new Map;function Dv(e){const t=st(e.uid),n=e.x,r=e.y,o=e.dur||4,i=S.T,s=t?t.sprite:"glitch",a=t&&t.dir||0,l=t?Mr(t):1,u={end:i+o};Ry.set(e.uid,u);const f=h=>{const c=S.T-u.end;return c>0?(c>.25&&(h.t=h.dur+1),1-c/.25):1};T({type:"custom",layer:"ground",dur:o+.4,x:n,y:r,draw(h,c,d){const m=f(d),p=S.T-i,y=_i(In(p/.18));zv(h,n,r,.42*(1.6-.6*y),S.T*14|0,m*(.9*y))}}),T({type:"custom",layer:"top",dur:o+.4,x:n,y:r,nl:0,draw(h,c,d){const m=f(d);if(m<=0)return;const p=S.T-i,y=Kt[s],x=y&&y.anims&&y.anims.idle?Math.floor(p*1e3/y.anims.idle.ms):0,b=ua(s,"idle",a,x);Pe(n,r);const M=u.end-S.T,v=M<1&&(S.T*12|0)%2===0,w=(S.T*1.1+.3)%1<.06;b&&(p<.16&&mr(h,b,ln(b,"white"),Lt,Dt,l,m*(1-p/.16)),mr(h,b,ln(b,"ghost"),Lt,Dt,l,m*(v?.25:.62)*In(p/.1),w?2:0),p<1.4&&Ss(h,Lt,Dt-Ku({scale:l},b)-16-Math.min(6,p*30),"COPY",V.cy,2,m*(p>1?(1.4-p)/.4:1))),S.T>=d.nl&&(d.nl=S.T+.15,Mt(n,r,1,jo,.3*m,.2))}});for(let h=0;h<10;h++){const c=h/10*wr;F(n+Math.cos(c)*.3,r+Math.sin(c)*.3,.2+h%3*.3,Math.cos(c)*.8,Math.sin(c)*.8,.8,.45,h&1?V.cy:V.w,2,0,!0)}Mt(n,r,1.4,jo,.7,.35),it.sfx("ab_glitch_Q_copy",n,r,1)}function Uv(e){const t=e.x,n=e.y,r=e.ex!==void 0?e.ex:e.x,o=e.ey!==void 0?e.ey:e.y,i=e.uid,s=Ry.get(i);s&&(s.end=Math.min(s.end,S.T));const a=st(i),l=a?a.sprite:"glitch",u=a&&a.dir||0,f=a?Mr(a):1;T({type:"custom",layer:"top",dur:.75,x:r,y:o,draw(h,c){const d=c*.75,m=ua(l,"idle",u,0);Pe(t,n);const p=Lt,y=Dt,x=m?Ku({scale:f},m):60;if(m&&d<.45&&mr(h,m,ln(m,"ghost"),p,y,f,.55*(1-d/.45)),d<.55){const C=(m?(m.bx1-m.bx0)*f*.5:24)+8,I=_i(In(d/.2)),O=C*(1.5-.5*I)*(d>.3?1-(d-.3)/.25*.8:1),E=d>.35?(.55-d)/.2:1;r2(h,p-O,y-x*.5,x+12,-1,V.w,E),r2(h,p+O,y-x*.5,x+12,1,V.w,E)}Pe(r,o);const b=Lt,M=Dt;md(h,p,y-x*.4,b,M-x*.4,6,2,0,V.cy,V.cyl,1-c,In(d/.25-.25),In(d/.12));const v=st(i),w=v?(Pe(v.x,v.y),Lt):b,_=v?Dt:M;m&&mr(h,m,ln(m,"white"),w,_,f,.95*(1-In(d/.35))),Ss(h,w,_-x-18-Math.min(8,d*30),"PASTE",V.mag,2,d>.5?(.75-d)/.25:1);const A=(.25+d*1.4)*N.HW*1.4,R=1-In(d/.5);if(R>0){h.globalAlpha=R;for(let C=0;C<24;C++){const I=C/24*wr;dd(h,w+Math.cos(I)*A,_+Math.sin(I)*A*.5,2,C&1?V.mag:V.w)}}}});for(let h=0;h<12;h++){const c=h/12*wr;F(r,o,.3+h%4*.25,Math.cos(c)*1.4,Math.sin(c)*1.4,.5,.4,h&1?V.mag:V.w,2,0,!0)}for(let h=0;h<6;h++)F(t,n,.3+h*.15,0,0,.4,.35,V.cy,2,0,!0);Mt(r,o,1.6,Yu,.8,.3),Mt(t,n,1,jo,.5,.25),hd(e)&&et(2),it.sfx("ab_glitch_Q_paste",r,o,1)}q.glitch_Q=e=>(e.type==="glitch_copy"?Dv(e):e.type==="glitch_paste"&&Uv(e),!0);q.glitch_W=e=>{if(typeof e.type=="string"&&e.type.startsWith("cast_")){const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=new Float32Array(6);for(let a=0;a<6;a++)i[a]=(a-2.5)*.22;const s=Math.atan2(n,t);T({type:"custom",layer:"top",dur:.28,x:r,y:o,draw(a,l){for(let u=0;u<6;u++){const f=.15+l*(.7+u%3*.2);Pe(r+Math.cos(s+i[u])*f,o+Math.sin(s+i[u])*f,.55+u%2*.12),ju(a,Lt,Dt,4,vs[u%5],1-l)}}}),Mt(r,o,1,Ko,.6,.2)}return!0};Ge.glitch_W=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=(t.id||0)*1.3,u=i*30|0;for(let h=1;h<=6;h++){const c=h*6,d=(W(u+h*7+l)-.5)*6|0;e.globalAlpha=1-h/7,e.fillStyle=vs[(h+u)%5],e.fillRect(Y(n-s*c-a*d-2),Y(r-a*c+s*d-2),h<3?4:2,h<3?4:2)}for(let h=0;h<4;h++){const c=i*9+h/4*wr;ju(e,n+Math.cos(c)*13,r+Math.sin(c)*6,4,vs[h+1],1)}Fv(e,n,r,i*7+l,4,1);const f=i*12|0;t._lf!==f&&(t._lf=f,Mt(t.x,t.y,1,Ko,.55,.12))};q.glitch_W_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(r,o){Pe(t,n,.5);const i=Y(6+o*26);r.globalAlpha=1-o,r.fillStyle=V.w,o<.4&&r.fillRect(Y(Lt-6*(1-o)),Y(Dt-6*(1-o)),Y(12*(1-o)),Y(12*(1-o))),r.fillStyle=V.mag,r.fillRect(Lt-i,Dt-i,i*2,2),r.fillRect(Lt-i,Dt+i-2,i*2,2),r.fillStyle=V.cy,r.fillRect(Lt-i,Dt-i,2,i*2),r.fillRect(Lt+i-2,Dt-i,2,i*2)}});for(let r=0;r<8;r++){const o=r/8*wr;F(t,n,.5,Math.cos(o)*1.6,Math.sin(o)*1.6,.8,.3,ws[r%5],2,2,!0)}Mt(t,n,1.2,Ko,.7,.25)};q.glitch_ev_fragment_burst=e=>{const t=e.x,n=e.y,r=e.uid,o=Math.random()*wr,i=st(r),s=i?Mr(i):1,a=i?Zc(i):null,l=i?Ku(i,a):50,u=(a?(a.bx1-a.bx0)*s*.5:24)+6,f=14,h=new Float32Array(f),c=new Float32Array(f);for(let d=0;d<f;d++)h[d]=d/f*wr+W(d+o)*.4,c[d]=40+W(d*3+o)*50;T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(d,m){const p=m*.62,y=st(r),x=y&&!y.dead?y.x:t,b=y&&!y.dead?y.y:n;Pe(x,b);const M=Lt,v=Dt-l*.45;if(p<.12){const A=1-_i(p/.12);for(let R=0;R<5;R++){const C=o+R/5*wr+p*20;ju(d,M+Math.cos(C)*u*A,v+Math.sin(C)*u*.42*A,6,vs[R],1)}return}const w=(p-.12)/.5;if(y&&!y.dead&&w<.3){const A=Va(y);A&&mr(d,A,ln(A,"white"),M,Dt,Mr(y),.9*(1-w/.3))}const _=Y(6+w*34);d.globalAlpha=1-w,d.fillStyle=V.w,w<.25&&d.fillRect(Y(M-10*(1-w*3)),Y(v-10*(1-w*3)),Y(20*(1-w*3))+1,Y(20*(1-w*3))+1),d.fillStyle=V.w,d.fillRect(M-_,v-1,_*2,3),d.fillRect(M-1,v-_,3,_*2),d.fillStyle=V.mag,d.fillRect(M-_,v-_,_*2,2),d.fillRect(M-_,v+_-2,_*2,2),d.fillStyle=V.cy,d.fillRect(M-_,v-_,2,_*2),d.fillRect(M+_-2,v-_,2,_*2);for(let A=0;A<f;A++){const R=c[A]*w,C=60*w*w;d.globalAlpha=1-w,d.fillStyle=ws[A%5];const I=A%3===0?4:2;d.fillRect(Y(M+Math.cos(h[A])*R-I/2),Y(v+Math.sin(h[A])*R*.6+C-I/2),I,I)}}}),T({type:"custom",layer:"ground",delay:.12,dur:.4,x:t,y:n,draw(d,m){Pe(t,n);const p=(.3+m*1.3)*N.HW*1.4;d.globalAlpha=1-m;for(let y=0;y<32;y++){const x=y/32*wr;dd(d,Lt+Math.cos(x)*p,Dt+Math.sin(x)*p*.5,2,vs[y%5])}}}),Mt(t,n,1.8,Yu,.9,.3,{delay:.12}),Mt(t,n,1.4,Ko,.7,.4,{delay:.12}),(hd(e)||S.game&&S.game.player&&r===S.game.player.id)&&et(3),it.sfx("glitch_burst",t,n,1)};q.glitch_E=e=>{if(e.type!=="glitch_dup")return!0;const t=e.x,n=e.y,r=e.uid,o=st(r),i=o?o.sprite:"glitch",s=o&&o.dir||0,a=o?Mr(o):1,l=[];if(S.game)for(const h of S.game.units)!h.dead&&h.illusion&&h.heroKey==="glitch"&&(!e.team||h.team===e.team)&&Math.hypot(h.x-t,h.y-n)<2.2&&!Ya.has(h.id)&&l.push(h.id);for(;l.length>2;)l.pop();const u=new Float32Array(2),f=new Float32Array(2);for(let h=0;h<2;h++){const c=l[h]?st(l[h]):null,d=h*Math.PI+.6;u[h]=c?c.x:t+Math.cos(d)*1.1,f[h]=c?c.y:n+Math.sin(d)*1.1}T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(h,c){const d=c*.75,m=ua(i,"idle",s,0);if(!m)return;Pe(t,n);const p=Lt,y=Dt;if(d<.14){const x=Y(d/.14*6);mr(h,m,ln(m,"red"),p,y,a,.8,-x),mr(h,m,ln(m,"cyan"),p,y,a,.8,x)}if(d>=.06&&d<.4){const x=_i(In((d-.06)/.3)),b=S.T*30|0;for(let M=0;M<2;M++){const v=l[M]?st(l[M]):null,w=v?v.x:u[M],_=v?v.y:f[M];Pe(t+(w-t)*x,n+(_-n)*x);const A=ln(m,M?"cyan":"red"),R=(m.by1-m.by0)/3;for(let C=0;C<3;C++){const I=m.by0+Y(C*R),O=(W(b+C*5+M*11)-.5)*8*(1-x)|0;li(h,m,A,Lt,Dt,a,0,m.fw,I,Y(I+R)+1,O,.85)}}}if(d>=.3){const x=(d-.3)/.45;for(let b=0;b<2;b++){const M=l[b]?st(l[b]):null,v=M?M.x:u[b],w=M?M.y:f[b];Pe(v,w);const _=M&&Va(M)||m;mr(h,_,ln(_,"white"),Lt,Dt,a,.9*(1-In(x*2.2)));const A=8+x*30;h.globalAlpha=1-x,h.fillStyle=b?V.cy:V.red;const R=Dt-20;for(let C=-A;C<=A;C+=4)h.fillRect(Y(Lt+C),Y(R-A*.7),2,2),h.fillRect(Y(Lt+C),Y(R+A*.7),2,2);for(let C=-A*.7;C<=A*.7;C+=4)h.fillRect(Y(Lt-A),Y(R+C),2,2),h.fillRect(Y(Lt+A),Y(R+C),2,2)}}}});for(let h=0;h<2;h++){for(let c=0;c<8;c++)F(u[h],f[h],.2+c*.12,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2,.6,.45,c&1?h?V.cy:V.red:V.w,2,0,!0);Mt(u[h],f[h],1.1,h?jo:15213130,.6,.35,{delay:.3})}Mt(t,n,1.3,Yu,.6,.25)};q.glitch_petfade=e=>{let t=Ya.has(e.uid);const n=st(e.uid);if(!t&&n&&n.illusion&&n.heroKey==="glitch"&&(t=!0),!t)return!1;Ya.delete(e.uid);const r=e.x,o=e.y,i=n?n.sprite:e.sprite,s=n?n.dir||0:e.dir||0,a=n?Mr(n):1,l=ua(i,"idle",s,0),u=56,f=new Float32Array(u),h=new Float32Array(u),c=new Float32Array(u),d=new Float32Array(u),m=[];let p=0;if(l){let y=0;for(let M=0;M<l.cells.length;M++)y+=l.cells[M];const x=Math.max(1,Math.floor(y/u));let b=0;for(let M=0;M<l.cells.length&&p<u;M++){if(!l.cells[M]||b++%x)continue;const v=M%l.cw,w=M/l.cw|0;f[p]=(v*2-l.ax)*a,h[p]=(w*2-l.ay)*a,c[p]=f[p]*1.2+(W(M)-.5)*40,d[p]=-20-W(M*3)*50;const _=l.cols[M];m.push(p%4===0?V.mag:p%4===1?V.cy:"#"+(16777216+_).toString(16).slice(1)),p++}}return T({type:"custom",layer:"top",dur:.85,x:r,y:o,draw(y,x){Pe(r,o);const b=x*.85;l&&b<.1&&mr(y,l,ln(l,"white"),Lt,Dt,a,.9);for(let M=0;M<p;M++){const v=Math.max(0,b-.04-M%7*.012);y.globalAlpha=1-x,y.fillStyle=m[M],y.fillRect(Y(Lt+f[M]+c[M]*v),Y(Dt+h[M]+d[M]*v-30*v*v),2*Math.max(1,Y(a)),2*Math.max(1,Y(a)))}}}),Mt(r,o,1,jo,.5,.3),it.sfx("fade_glitch_E",r,o,.6),!0};q.glitch_R=e=>{if(e.type!=="delete_start")return!0;ia.set(e.uid,{uid:e.uid,tid:e.tid!==void 0&&e.tid!==0?e.tid:-1,x:e.x,y:e.y,t0:S.T,dur:e.dur||2,rx0:-26,ry0:-64,rx1:26,ry1:6,tx:e.x,ty:e.y}),e.tid&&yl.delete(e.tid);const t=e.x,n=e.y;return T({type:"custom",layer:"top",dur:.22,x:t,y:n,draw(r,o){Pe(t,n,.5);const i=70*(1-_i(o))+22;r.globalAlpha=1-o*.5,r.fillStyle=V.w;for(const s of[-1,1])for(const a of[-1,1]){const l=Y(Lt+s*i),u=Y(Dt+a*i*.9);r.fillRect(l-(s>0?8:0),u,8,2),r.fillRect(l,u-(a>0?8:0),2,8)}}}),Mt(t,n,1.6,Ko,.7,.4),it.sfx("ab_glitch_R_start",t,n,1),!0};q.glitch_ev_delete_cancel=e=>{const t=ia.get(e.uid);ia.delete(e.uid);const n=e.tid||(t?t.tid:-1);n>0&&yl.set(n,S.T),yl.size>60&&yl.clear();let r=e.why;if(!r){const d=st(e.uid);r=d&&Math.hypot(d.x-e.x,d.y-e.y)>8.2?"escape":"stun"}const o=e.x,i=e.y;let s=!1;if(n>0){const d=st(n);s=!d||!!d.dead}else if(S.game){for(const d of S.game.heroes||[])if(d.dead&&Math.hypot(d.x-o,d.y-i)<1.2){s=!0;break}}const a=r==="escape",l=t?t.rx0:-26,u=t?t.ry0:-64,f=t?t.rx1:26,h=t?t.ry1:6,c=st(e.uid);T({type:"custom",layer:"top",dur:.9,x:o,y:i,draw(d,m){const p=m*.9,y=n>0?st(n):null;Pe(y&&!y.dead?y.x:o,y&&!y.dead?y.y:i);const x=Lt,b=Dt,M=(p*24|0)%3!==0,v=1-In((p-.25)/.35),w=_i(In(p/.45))*22,_=90*p*p;if(v>0&&M){const A=x+l,R=x+f,C=b+u,I=b+h;d.globalAlpha=v;for(let O=A;O<R;O+=2)Lo(d,O,C-w+_*.3,2,O-A>>1,0),Lo(d,O,I+w+_,2,O-A>>1,0);for(let O=C;O<I;O+=2)Lo(d,A-w,O+_*.6,2,O-C>>1,0),Lo(d,R+w,O+_*.6,2,O-C>>1,0);zr(d,A-w,C-w+_,2),zr(d,R+w,C-w+_,2),zr(d,A-w,I+w+_,2),zr(d,R+w,I+w+_,2)}c&&!c.dead&&p<.35&&(Pe(c.x,c.y,.75),md(d,Lt,Dt,x,b+(u+h)/2,7,2,0,V.cy,V.cyl,1-p/.35,0,1-p/.35)),s||Ss(d,x,b+u-34-p*16,a?"ESCAPED!":"CANCELED",a?V.lime:V.yel,2,p>.6?(.9-p)/.3:1)}});for(let d=0;d<8;d++)F(o+(Math.random()-.5)*.6,i+(Math.random()-.5)*.6,.3+Math.random()*.8,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5,.5,.4,d&1?V.w:V.cy,2,3,!1);return it.sfx("glitch_cancel",o,i,.9),!0};let Cy=-9,Py=0,Iy=0;q.glitch_ev_delete_done=e=>{const t=ia.get(e.uid);ia.delete(e.uid);const n=e.tid||(t?t.tid:-1),r=e.x,o=e.y,i=e.killed!==void 0?!!e.killed:S.T-Cy<.1&&Math.hypot(Py-r,Iy-o)<1.5,s=t?t.rx0:-26,a=t?t.ry0:-64,l=t?t.rx1:26,u=t?t.ry1:6;T({type:"custom",layer:"top",dur:.45,x:r,y:o,draw(f,h){const c=n>0?st(n):null,d=c&&!c.dead;Pe(d?c.x:r,d?c.y:o);const m=Lt,p=Dt,y=_i(In(h/.4)),x=m+(s+l)/2,b=p+(a+u)/2;if(i||bu(f,x+(s-(s+l)/2)*(1-y),b+(a-(a+u)/2)*(1-y),x+(l-(s+l)/2)*(1-y),b+(u-(a+u)/2)*(1-y),2,0,1-h,!1),d&&h<.5){const v=Va(c);v&&mr(f,v,ln(v,"white"),m,p,Mr(c),1-h*2)}const M=Y(4+h*30);f.globalAlpha=1-h,f.fillStyle=V.w,f.fillRect(Y(x-M),Y(b-1),M*2,3),f.fillRect(Y(x-1),Y(b-M),3,M*2)}});for(let f=0;f<16;f++){const h=f/16*wr;F(r,o,.5+f%3*.2,Math.cos(h)*2.4,Math.sin(h)*2.4,1.2,.5,ws[f%5],f%4===0?4:2,4,!0)}return Mt(r,o,2,Yu,.95,.3),Mt(r,o,1.6,Ko,.8,.5),et(hd(e)?5:2),it.sfx("glitch_delete",r,o,1),!0};q.glitch_death=e=>{let t=!!e.erased;if(!t&&S.game){for(const f of S.game.fx)if(!f.done&&f.type==="delete_done"&&f.hero==="glitch"&&Math.hypot(f.x-e.x,f.y-e.y)<1.5){t=!0;break}}if(!t)return!1;Cy=S.T,Py=e.x,Iy=e.y;const n=e.x,r=e.y,o=e.scale||1,i=e.sprite?ua(e.sprite,"idle",e.dir||0,0):null,s=(st(e.uid)||{}).heroKey||e.sprite;s&&it.babble(s,"die",n,r),it.sfx("death",n,r,.7);const a=i?i.bx1-i.bx0>>1:0,l=new Uint8Array(Math.max(1,a));let u=0;if(T({type:"custom",layer:"top",dur:2.4,x:n,y:r,draw(f,h){const c=h*2.4;Pe(n,r);const d=Lt,m=Dt+20*Math.min(c,.8);if(i){const p=In((c-.8)/.8),y=i.bx0+Y((i.bx1-i.bx0)*p/2)*2;if(li(f,i,null,d,m,o,y,i.fw,0,i.fh,0,1),c<.8&&li(f,i,ln(i,"scan"),d,m,o,y,i.fw,0,i.fh,0,.35+.15*Math.sin(c*30)),c<.3&&mr(f,i,ln(i,"white"),d,m,o,1-c/.3),p>0&&p<1){const w=d+(y-i.ax)*o;f.globalAlpha=1,f.fillStyle=(c*30|0)&1?V.cyl:V.w,f.fillRect(Y(w-1),Y(m+(i.by0-i.ay)*o),2,Y((i.by1-i.by0)*o));const _=y-i.bx0>>1;for(let A=0;A<_&&A<l.length;A++){if(l[A]||u>=72)continue;l[A]=1;const R=(i.bx0>>1)+A;let C=-1,I=-1;for(let E=0;E<i.ch;E++)i.cells[E*i.cw+R]&&(C<0&&(C=E),I=E);if(C<0)continue;const O=(R*2-i.ax)*o;for(let E=0;E<3&&u<72;E++){const U=C+(W(A*3+E+n)*(I-C+1)|0),G=((i.ay-U*2)*o-16)/N.ZK;F(n+O/(2*N.HW),r-O/(2*N.HW),Math.max(0,G),(Math.random()-.5)*.4,(Math.random()-.5)*.4,1.2+Math.random()*1.4,.9+Math.random()*.6,ws[(A+E)%5],E?2:3,-.6,!0),u++}}}const x=m+(i.by0-i.ay)*o-6,b=m+(i.by1-i.ay)*o+4,M=d+(i.bx1-i.ax)*o+6,v=d+(y-i.ax)*o-6;p<1?bu(f,v,x,M,b,2,S.T*16|0,c<.8?1:.9,c<.8):bu(f,M-8-10*In((c-1.6)/.2),x,M,b,2,0,1-In((c-1.6)/.25),!1),c>.8&&Ss(f,d+((i.bx0+i.bx1)/2-i.ax)*o,x-16-Math.min(6,(c-.8)*20),"DELETED",V.mag,2,c>2?(2.4-c)/.4:1)}else c>.3&&Ss(f,d,m-70,"DELETED",V.mag,2,c>2?(2.4-c)/.4:1)}}),!i)for(let f=0;f<30;f++)F(n+(Math.random()-.5)*.5,r+(Math.random()-.5)*.5,Math.random()*1.2,0,0,1.5+Math.random(),1,ws[f%5],2,-.5,!0);return Mt(n,r,1.8,Ko,.8,1.6),!0};Ge.glitch_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=i*40|0;for(let f=1;f<=4;f++){const h=f*5+(l&1)*2;e.globalAlpha=1-f/5,e.fillStyle=f&1?V.cy:V.cyl,e.fillRect(Y(n-s*h-2),Y(r-a*h-1),4,2)}e.globalAlpha=.85,e.fillStyle=V.mag,e.fillRect(Y(n-s*3-3),Y(r-a*3-3),6,6),e.globalAlpha=1,e.fillStyle=V.cy,e.fillRect(Y(n-4),Y(r-4),8,8),e.fillStyle=V.w,e.fillRect(Y(n-2),Y(r-2),4,4),l>>2&3||(e.fillStyle=V.w,e.fillRect(Y(n+4),Y(r-6),2,2));const u=i*12|0;t._lf!==u&&(t._lf=u,Mt(t.x,t.y,.8,jo,.45,.12))};qe.glitch=e=>{const t=e.x,n=e.y,r=!!e.big;T({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){Pe(t,n,.45);const s=Y((r?16:11)*(1-i))+2;if(o.globalAlpha=1-i,o.fillStyle=V.mag,o.fillRect(Lt-s-2,Dt-s,s*2,2),o.fillRect(Lt-s-2,Dt+s-2,s*2,2),o.fillStyle=V.cy,o.fillRect(Lt-s,Dt-s,2,s*2),o.fillRect(Lt+s-2,Dt-s,2,s*2),o.fillRect(Lt-s,Dt-s,s*2,2),o.fillRect(Lt-s,Dt+s-2,s*2,2),o.fillStyle=V.w,o.fillRect(Lt-1,Dt-5,2,10),o.fillRect(Lt-5,Dt-1,10,2),r)for(let a=0;a<4;a++){const l=a/4*wr+.785,u=6+i*18;o.fillRect(Y(Lt+Math.cos(l)*u-1),Y(Dt+Math.sin(l)*u-1),3,3)}}});for(let o=0;o<(r?6:3);o++)F(t,n,.45,(Math.random()-.5)*1.6,(Math.random()-.5)*1.6,.6,.25,ws[o%5],2,2,!0);Mt(t,n,r?1.1:.8,jo,r?.6:.4,.18)};const qt=Math.round,Be=Math.PI*2;let Nt=0,Bt=0;function Ae(e,t,n=0){Nt=(e-t)*N.HW+N.OX,Bt=(e+t)*N.HH-n*N.ZK}function Hn(e,t,n,r,o){e.fillStyle=o,e.fillRect(qt(t-r/2),qt(n-r/2),r,r)}function Ki(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(qt(t+(r-t)*l/a-i/2),qt(n+(o-n)*l/a-i/2),i,i)}function Bi(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(qt(t-s/2),qt(n+i*o),qt(s),Math.max(1,qt(2*o)))}}const mi=e=>e<0?0:e>1?1:e,$o=e=>1-(1-e)*(1-e),rt={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},xa=new Float32Array(72),Ma=new Float32Array(72);function eo(e,t,n,r,o,i,s,a,l,u,f,h,c){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,y=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let v=0;v<=y;v++){const w=v/y,_=v===0||v===y?0:(W(a+v*7.31)-.5)*2*s*Math.sqrt(Math.sin(w*Math.PI));xa[v]=t+d*w+x*_,Ma[v]=n+m*w+b*_}if(f>0)for(let v=0;v<y;v++)Ki(e,xa[v],Ma[v],xa[v+1],Ma[v+1],f,l);for(let v=0;v<y;v++)Ki(e,xa[v],Ma[v],xa[v+1],Ma[v+1],h,u);const M=Math.atan2(m,d);for(let v=0;v<c;v++){const w=1+Math.floor(W(a+v*3.7+50)*Math.max(1,y-1));let _=xa[w],A=Ma[w],R=M+(W(a+v*9.1)>.5?1:-1)*(.45+W(a+v*1.3)*.6);for(let C=0;C<3;C++){const I=i*(1-C*.2),O=_+Math.cos(R)*I,E=A+Math.sin(R)*I;Ki(e,_,A,O,E,Math.max(1,h-1),C?l:u),_=O,A=E,R+=(W(a+v*5+C)-.5)*1.3}}}function vu(e,t,n,r,o,i,s,a){let l=t,u=n,f=r;for(let h=0;h<5;h++){f+=(W(o+h)-.5)*.9;const c=i*(1-h*.13),d=l+Math.cos(f)*c,m=u+Math.sin(f)*c*.5;if(Ki(e,l,u,d,m,2,s),W(o+h*3.3)>.45){const p=f+(W(o+h*7)>.5?.85:-.85);Ki(e,d,m,d+Math.cos(p)*c*.6,m+Math.sin(p)*c*.3,2,s)}l=d,u=m}a&&Hn(e,l,u,3,a)}function wu(e,t,n,r,o){e.fillStyle=rt.cloudD,e.fillRect(qt(t-3*r),qt(n-r),6*r,2*r),e.fillStyle=o?rt.cloudL:rt.cloud,e.fillRect(qt(t-2*r),qt(n-2*r),4*r,2*r),e.fillStyle=o?rt.pale:rt.cloudM,e.fillRect(qt(t-r),qt(n-2.6*r),2*r,qt(r*.8))}q.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;T({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Ae(t,n,.6);const s=Nt,a=Bt,l=S.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=W(r+u+l*3)*Be,h=10+W(r+u*2+l)*14;eo(o,s,a,s+Math.cos(f)*h,a+Math.sin(f)*h*.7,5,3,r+u*11+l,rt.cyan,rt.white,0,1,0)}Hn(o,s,a,qt(8*(1-i))+2,rt.white)}});for(let o=0;o<8;o++)F(t,n,.6,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.25,o&1?rt.cyan:rt.white,2,3,!0)};const s0=new Map;Ge.halcon_Q=(e,t,n,r,o,i)=>{let s=t.id!=null?s0.get(t.id):void 0;t.id!=null&&!s&&(s0.size>64&&s0.clear(),s=[t.x,t.y],s0.set(t.id,s));const a=Math.cos(o),l=Math.sin(o),u=150;let f=n-a*u,h=r-l*u;vt(!0);const c=Wt();if(s){Ae(s[0],s[1],t.z||.45);const p=Math.hypot(n-Nt,r-Bt);if(p<u)f=Nt,h=Bt;else{c.globalAlpha=.4,c.fillStyle=rt.blue;const y=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<y;b++){if(W(b*3.1+x)<.35)continue;const M=(u+b*9)/p;c.fillRect(qt(n+(Nt-n)*M),qt(r+(Bt-r)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;c.globalAlpha=.16,c.fillStyle=rt.blue,Bi(c,n,r,18),c.globalAlpha=1,eo(c,n,r,f,h,11,7,d,rt.cyan,rt.white,4,2,2);const m=5+((i*30|0)&1)*3;c.fillStyle=rt.pale,c.fillRect(qt(n-m),qt(r-1),m*2,2),c.fillRect(qt(n-1),qt(r-m),2,m*2),c.fillStyle=rt.white,c.fillRect(qt(n-3),qt(r-3),6,6),vt(!1)};q.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Be;T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,s){Ae(t,n),i.globalAlpha=.6*(1-s);for(let a=0;a<6;a++)vu(i,Nt,Bt,o+a*Be/6,r+a*13,9,rt.scorch)}}),T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,s){Ae(t,n),i.globalAlpha=(1-s)*(1-s);for(let a=0;a<6;a++)vu(i,Nt,Bt,o+a*Be/6,r+a*13,9,rt.cyan,rt.white)}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,s){Ae(t,n,.5);const a=S.T*30|0;i.globalAlpha=1-s*s;for(let l=0;l<4;l++){const u=W(r+l*5+a)*Be,f=18+W(r+l+a*2)*16;eo(i,Nt,Bt-6,Nt+Math.cos(u)*f,Bt+Math.sin(u)*f*.6,6,4,r+a*7+l,rt.blue,rt.pale,3,1,0)}s<.3&&Hn(i,Nt,Bt,qt(22*(1-s/.3))+2,rt.white)}});for(let i=0;i<12;i++)F(t,n,.5,g(-2.2,2.2),g(-2.2,2.2),g(1,2.6),g(.25,.45),i%3?rt.cyan:rt.yel,2,7,!0,.9);et(2)};const L0=new Map;q.halcon_W=e=>{if(e.type==="splash"||e.impact){Xv(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Ae(t,n);const s=Nt,a=Bt;Ae(r,o);const l=Math.hypot(Nt-s,Bt-a)||1,u=(Nt-s)/l,f=(Bt-a)/l;L0.size>32&&L0.clear(),L0.set(e.uid,[u,f]);for(let h=0;h<8;h++)F(t,n,.7,g(-1,1),g(-1,1),g(1,2.5),g(.6,.9),h%3?rt.featherL:rt.cream,3,1.2,!1,.9);T({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(h,c){Ae(r,o);const d=Nt,m=Bt,p=64*(1-$o(c))+24,y=c*2.6;h.globalAlpha=.5+.5*c;const x=c>.75&&(S.T*20|0)&1?rt.white:rt.cyan;for(let b=0;b<4;b++){const M=y+b*Be/4;for(let v=-3;v<=3;v++){const w=M+v*.09;Hn(h,d+Math.cos(w)*p,m+Math.sin(w)*p*.5,3,x)}for(let v=1;v<=2;v++)Hn(h,d+Math.cos(M)*(p-v*5),m+Math.sin(M)*(p-v*5)*.5,2,rt.white)}Hn(h,d,m,3,rt.white)}}),T({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(h,c){const d=mi(c*(i+.15)/i),m=-f,p=u;for(let y=0;y<12;y++){const x=d-y*.035;if(x<0)break;Ae(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,M=Nt,v=Bt-b,w=1-y/12;h.globalAlpha=w*(c>.8?(1-c)/.2:1);for(const _ of[-1,1]){const A=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;Hn(h,M+m*A*_+R,v+p*A*_-Math.sin(x*34)*3,y<3?3:2,y<4?rt.white:rt.pale)}y%3===0&&(h.fillStyle=rt.cyan,h.fillRect(qt(M-u*10),qt(v-f*10),2,2))}}})};function Xv(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=L0.get(e.uid)||[0,1];T({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(s,a){Ae(t,n),s.globalAlpha=.55*(1-a);for(let l=0;l<7;l++){const u=l/7*Be+W(o+l)*.5,f=r*N.HW*(.5+W(o+l*3)*.4);Ki(s,Nt,Bt,Nt+Math.cos(u)*f*.6,Bt+Math.sin(u)*f*.3,2,rt.ash),Ki(s,Nt+Math.cos(u)*f*.6,Bt+Math.sin(u)*f*.3,Nt+Math.cos(u+.25)*f,Bt+Math.sin(u+.25)*f*.5,2,rt.ash)}Hn(s,Nt,Bt,8,rt.ash)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(s,a){const l=S.T*30|0;for(let f=0;f<2;f++){const h=mi(a*1.4-f*.2);if(h<=0||h>=1)continue;const c=.2+r*1.1*$o(h);s.globalAlpha=1-h;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*Be;Ae(t+Math.cos(m)*c,n+Math.sin(m)*c),Hn(s,Nt,Bt,f?2:3,f?rt.pale:rt.white)}}s.globalAlpha=1-a;const u=8;for(let f=0;f<u;f++){const h=f/u*Be+a*.8,c=(f+1)/u*Be+a*.8;Ae(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85);const d=Nt,m=Bt;Ae(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85),eo(s,d,m-4,Nt,Bt-4,7,4,o+f*9+l,rt.blue,rt.pale,0,2,0),Hn(s,d,m-4,4,rt.white)}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(s,a){const l=.3+r*1.3*$o(a);s.globalAlpha=1-a;for(let u=0;u<8;u++){const f=u/8*Be+.2;Ae(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const h=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let c=-2;c<=2;c++){const d=h+c*.35,m=9-Math.abs(c);Hn(s,Nt-Math.cos(h)*6+Math.cos(d)*m,Bt-Math.sin(h)*6+Math.sin(d)*m,c?2:3,c?rt.pale:rt.white)}}a<.2&&(s.globalAlpha=1-a/.2,Ae(t,n,.2),s.fillStyle=rt.white,Bi(s,Nt+i[0]*6,Bt+i[1]*6,qt(30*(1-a)),.5))}});for(let s=0;s<14;s++){const a=Math.random()*Be,l=g(1.5,3.5);F(t,n,.1,Math.cos(a)*l,Math.sin(a)*l,g(.5,1.6),g(.4,.7),s%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let s=0;s<6;s++)F(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1.5,2.5),g(.8,1.1),s&1?rt.featherL:rt.feather,3,1.5,!1,.92);et(6)}q.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,s,a){const l=st(a.uid);Ae(l?l.x:n,l?l.y:r,.8);const u=Nt,f=Bt,h=$o(mi(s*2.2));i.globalAlpha=s>.5?(1-s)/.5:1;for(const c of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+c*(.3+h*(.45+d*.24)),p=16+d*5+h*10;for(let y=6;y<p;y+=3){const x=y>p-6;Hn(i,u+Math.cos(m)*y*1.25,f+Math.sin(m)*y*.8+y/p*h*9,x?2:3,x?rt.white:d&1?rt.pale:rt.cyan)}}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,s){const a=.5+(o-.5)*$o(s);i.globalAlpha=(1-s)*.9;for(let l=0;l<16;l++){const u=l/16*Be+s*1.6;for(let f=0;f<3;f++){const h=u+f*.07;Ae(n+Math.cos(h)*a,r+Math.sin(h)*a),Hn(i,Nt,Bt,3-f,f?rt.pale:rt.white)}}}})}for(let n=0;n<5;n++){const r=n/5*Be;F(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,g(.8,1.5),.4,n&1?rt.pale:rt.white,2,0,!0)}T({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=st(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const s=i.x-o.lx,a=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=s-a,u=(s+a)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const h=Math.hypot(o.dx,o.dy),c=r*o.dur;n.globalAlpha=Math.min(1,c/.15)*(c>o.dur-.4?(o.dur-c)/.4:1),Ae(i.x,i.y,.45);const d=Nt,m=Bt;if(h>.35){const p=o.dx/h,y=o.dy/h,x=S.T*70%11;for(let v=0;v<3;v++){const w=14+v*11+x,_=d-p*w,A=m-y*w,R=v===0?rt.white:v===1?rt.pale:rt.cyan;for(const C of[-1,1]){const I=Math.cos(C*.75),O=Math.sin(C*.75),E=-(p*I-y*O),U=-(p*O+y*I);for(let G=0;G<4;G++)Hn(n,_+E*G*3,A+U*G*3,2,R)}}const b=-y,M=p;for(const v of[-1,1])for(let w=0;w<6;w++){const _=10+w*5+S.T*90%5;(w+(v>0?1:0))%3!==0&&(n.fillStyle=rt.pale,n.fillRect(qt(d-p*_+b*12*v),qt(m-y*_+M*12*v),2,1))}}else for(let p=0;p<3;p++){const y=S.T*5+p*Be/3;Hn(n,d+Math.cos(y)*14,m+14+Math.sin(y)*6,2,p?rt.pale:rt.white)}}})};const l0=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],To=(()=>{const e=[],t=[],n=[],r=l0.length,o=(i,s)=>s>=0&&s<r&&i>=0&&i<l0[s].length&&l0[s][i]!==".";return l0.forEach((i,s)=>{for(let a=0;a<i.length;a++){const l=i[a];l!=="."&&(e.push(a-12),t.push(s-5),n.push(l==="e"?2:o(a-1,s)&&o(a+1,s)&&o(a,s-1)&&o(a,s+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();q.halcon_R=e=>{if(e.type==="global_hit"){Gv(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,s){Ae(t,n,3);const a=Nt,l=Bt,u=30+60*$o(mi(s*2)),f=S.T*12|0;i.globalAlpha=Math.min(1,s*5)*(s>.75?(1-s)/.25:1)*.92;for(let h=0;h<9;h++){const c=h/9*Be+s*3.2;wu(i,a+Math.cos(c)*u,l+Math.sin(c)*u*.38,5+h%3,W(r+h+f)>.8)}wu(i,a,l,7,W(r+f)>.7)}}),T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,s,a){const l=st(a.uid),u=l?l.x:t,f=l?l.y:n;Ae(t,n,3);const h=Nt,c=Bt,d=30+60*$o(mi(s*2)),m=S.T*15|0,p=s>.75?(1-s)/.25:1;if(i.globalAlpha=p,W(r+m*1.7)>.45){const x=W(r+m)*Be,b=x+1.2+W(r+m*3)*2;eo(i,h+Math.cos(x)*d,c+Math.sin(x)*d*.38,h+Math.cos(b)*d,c+Math.sin(b)*d*.38,9,6,r+m,rt.blue,rt.pale,3,1,1)}const y=s*o;if(y>.25&&y<.55&&(y*25|0)%3!==2&&(Ae(u,f,1),eo(i,h,c+8,Nt,Bt,12,10,r+(y*25|0),rt.blue,rt.white,5,2,2)),y>.3){const x=mi((y-.3)/.35),b=qt(2+2*$o(x)),M=(S.T*24|0)%5===0?.5:1;Ae(u,f,2.2+x*.4);const v=Nt,w=Bt;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?rt.indigo:_===1?rt.cyan:rt.yel;for(let A=0;A<To.n;A++)To.K[A]===_&&i.fillRect(qt(v+To.X[A]*b-b/2),qt(w+To.Y[A]*b-b/2),b,b)}i.fillStyle=rt.white;for(let _=0;_<To.n;_++)To.K[_]===1&&To.Y[_]<-2&&i.fillRect(qt(v+To.X[_]*b-1),qt(w+To.Y[_]*b-1),2,2)}}});for(let i=0;i<24;i++){const s=i/24*Be,a=g(2,3);F(t+Math.cos(s)*a,n+Math.sin(s)*a,g(.2,1.2),-Math.cos(s)*a*1.6,-Math.sin(s)*a*1.6,g(.5,1.2),.6,i%3?rt.pale:rt.cloudL,2,0,i%3!==0,.97)}et(5)};function Gv(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Be;it.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],s=[.1,.05,.05],a=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+s[u])return u+1;return 0};T({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,h=$o(mi(f/.12));Ae(t,n,3.6);const c=Nt,d=Bt,m=a(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const y=p/6*Be+r;wu(l,c+Math.cos(y)*38*h,d+Math.sin(y)*12*h,qt(4+2*h),m&&p%2===0)}wu(l,c,d,qt(5+3*h),m)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,h=a(f);Ae(t,n,3.5);const c=Nt+(W(r)-.5)*30,d=Bt;if(Ae(t,n,.1),h){const m=r+h*31;l.globalAlpha=.45,eo(l,c,d,Nt,Bt,16,22,m,rt.indigo,rt.blue,0,9,0),l.globalAlpha=1,eo(l,c,d,Nt,Bt,16,22,m,rt.cyan,rt.white,6,3,3),l.globalAlpha=h===1?.35:.18,l.fillStyle=rt.pale,Bi(l,Nt,Bt-20,70,.6)}if(f>.1){const m=mi((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=rt.cyan,Bi(l,Nt,Bt,qt(26*(1-m*.5)),.5),l.fillStyle=rt.white,Bi(l,Nt,Bt,qt(12*(1-m)),.5)}}}),T({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Ae(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=rt.scorch,Bi(l,Nt,Bt,16,.5);for(let f=0;f<8;f++)vu(l,Nt,Bt,o+f*Be/8,r+f*17,13,rt.scorch)}}),T({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Ae(t,n);const f=S.T*25|0;l.globalAlpha=1-u;for(let h=0;h<8;h++)vu(l,Nt,Bt,o+h*Be/8,r+h*17,13,h&1?rt.blue:rt.cyan,rt.white);for(let h=0;h<3;h++){const c=W(r+h+f)*Be,d=30+u*60;eo(l,Nt,Bt,Nt+Math.cos(c)*d,Bt+Math.sin(c)*d*.5,7,5,r+f*3+h,rt.blue,rt.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*Be,f=g(1.5,4);F(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,g(2,4),g(.4,.8),l%3===0?rt.yel:l%3===1?rt.cyan:rt.ash,l%3===2?3:2,8,l%3!==2,.92)}et(8)}Ge.halcon_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s;for(let c=0;c<=16;c+=2){const d=c<3?0:c<12?3:2,m=n-s*c,p=r-a*c;for(let y=-d;y<=d;y+=2){const x=Math.abs(y)>=d&&d>0,b=(c===8||c===12)&&y!==0;e.fillStyle=y===0?rt.white:b?rt.feather:x?rt.cyan:rt.pale,e.fillRect(qt(m+l*y-1),qt(p+u*y-1),2,2)}}vt(!0);const f=Wt(),h=i*24|0;f.globalAlpha=.2,f.fillStyle=rt.blue,Bi(f,n-s*6,r-a*6,12),f.globalAlpha=1;for(let c=0;c<2;c++){const d=4+W(h+c*3+(t.id||0))*10,m=c?1:-1,p=n-s*d,y=r-a*d;eo(f,p,y,p+l*m*9-s*6,y+u*m*9-a*6,4,2,h*7+c,rt.cyan,rt.white,0,1,0)}f.fillStyle=rt.white,f.fillRect(qt(n-2),qt(r-2),4,4),vt(!1)};qe.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;T({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(s,a){Ae(t,n,.5),s.globalAlpha=1-a;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;eo(s,Nt,Bt,Nt+Math.cos(u)*i*(.6+a*.5),Bt+Math.sin(u)*i*.7*(.6+a*.5),4,2.5,o+l,rt.cyan,rt.white,0,2,0)}Hn(s,Nt,Bt,qt((r?10:6)*(1-a))+2,rt.white)}});for(let s=0;s<(r?8:4);s++)F(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(.5,1.5),.25,s&1?rt.yel:rt.cyan,2,5,!0)};let se=0,le=0;function fn(e,t,n=0){se=(e-t)*N.HW+N.OX,le=(e+t)*N.HH-n*N.ZK}function no(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Pl=e=>e<0?0:e>1?1:e,Il=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),fr=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Sa=["#f0e8b8","#d0c488","#a89a60","#6a6038"],po=["#8a6a48","#5a3a20","#3a2414"],ni=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Oo=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function Oy(e,t){const n=[],r=[],o=[];return e.forEach((i,s)=>{for(let a=0;a<i.length;a++){const l=t.indexOf(i[a]);l>=0&&(n.push(a),r.push(s),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function Jc(e,t,n,r,o,i,s=-1){const a=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(s>=0&&u!==s)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(a+t.x[f]*o,l+t.y[f]*o,o,o)}}const Nv=Oy(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),Bv=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],i2=Oy(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),a2=[Oo[3],Oo[2],Oo[0],"#4a2a6a","#e0d8f0","#a898c0"],$s=new Map;function $v(e,t){if(e.id==null)return;let n=$s.get(e.id);if(!n){$s.size>200&&$s.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},$s.set(e.id,n);const r=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,s){if(s.fin)return;const a=S.game;if(a){for(const l of a.projs)if(l.id===r)return;s.fin=!0,s.dur=s.t,$s.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}q.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,h=u===0?0:r*g(.45,.9);i[u*4]=t+Math.cos(f)*h,i[u*4+1]=n+Math.sin(f)*h,i[u*4+2]=u===0?12:g(7,11),i[u*4+3]=.16+u*.05}const s=18,a=new Float32Array(s),l=new Float32Array(s);for(let u=0;u<s;u++){const f=Math.random()*6.28,h=Math.sqrt(Math.random())*r*.95;a[u]=t+Math.cos(f)*h,l[u]=n+Math.sin(f)*h}T({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const h=f*2.2;for(let c=0;c<s;c++){const d=Pl((h-.2-c%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(fn(a[c],l[c]),u.globalAlpha=d*.75,u.fillStyle=fr[1+c%3],u.fillRect(Math.round(se),Math.round(le),c%3?3:4,2))}u.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,h){const c=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,y=i[d*4+2];if(fn(i[d*4],i[d*4+1]),c<m){if(c<p)continue;const M=Il(Pl((c-p)/.13)),v=y*M*(1+.12*Math.sin(c*60+d)),w=Math.max(1,Math.round(v*2/3));for(let _=0;_<w;_++){const A=(_+.5)/w*2-1,R=v*2*Math.sqrt(1-A*A);u.fillStyle=_===0?Sa[0]:A<.3?Sa[1]:Sa[2],u.fillRect(Math.round(se-R/2),Math.round(le-v*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=Sa[3],u.fillRect(Math.round(se-v*.2),Math.round(le-v*2-2),3,3);continue}if(!(h.popped&1<<d)){h.popped|=1<<d;for(let M=0;M<4;M++)F(i[d*4],i[d*4+1],.25,g(-.6,.6),g(-.6,.6),g(.4,1.1),g(.9,1.4),fr[M%3],3,.25,!1,.92)}const x=(c-m)/.35;if(x>=1)continue;const b=y*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const v=M/8*6.28+d;u.fillStyle=fr[M&1?1:2],no(u,se+Math.cos(v)*b,le-y+Math.sin(v)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=Sa[0];for(let M=0;M<3;M++)no(u,se+(M-1)*y*.6,le-y-x*8-(M&1)*4,y*(.8+x*.6));u.globalAlpha=1}}}),et(2)};q.hongo_W=e=>{if(e.type==="heal"){const i=e.x,s=e.y;T({type:"custom",layer:"top",dur:.9,x:i,y:s,drops:0,draw(a,l,u){const f=l<.2?Il(l/.2):l>.8?(1-l)/.2:1,h=3;fn(i,s,1.35);const c=se,d=le,m=[4,8,10,12,12];for(let p=0;p<5;p++){const y=Math.round(m[p]*f)*h;y<=0||(a.fillStyle=p===0?ni[1]:ni[2],a.fillRect(Math.round(c-y/2),Math.round(d+(p-5)*h*f),y,Math.max(1,Math.round(h*f))))}a.fillStyle=ni[3],a.fillRect(Math.round(c-6*h*f),Math.round(d),Math.round(12*h*f),2),a.fillStyle=ni[0],no(a,c-3*h*f,d-3*h*f,3*f),no(a,c+2*h*f,d-2*h*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,F(i+g(-.25,.25),s+g(-.25,.25),1.25,0,0,0,.5,u.drops&1?ni[0]:ni[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;T({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,s,a){const l=s*1.5,u=S.T;for(let f=0;f<o;f++){const h=f*.035,c=l-h;if(c<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(a.emitted&1<<f)){a.emitted|=1<<f;for(let w=0;w<2;w++)F(m,p,.2,g(-.2,.2),g(-.2,.2),g(.8,1.6),g(.7,1.1),ni[w],2,0,!0,.95)}const y=Il(Pl(c/.18)),x=s>.8?(1-s)/.2:1,b=Math.max(1,Math.round(3*y*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,v=Math.round(Math.sin(u*6+f)*2);fn(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(se-9),Math.round(le-1),18,3),i.globalAlpha=1,Jc(i,Nv,se+v,le-M,b,Bv)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,s){const l=s*1.2;i.globalAlpha=(s<.2?s/.2:1-(s-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;fn(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=ni[u%3+1],no(i,se,le,u%3?3:4)}}})};q.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){fn(t,n),r.globalAlpha=1-o,r.fillStyle=po[2];for(let i=0;i<3;i++){const s=i*2.1+.4;for(let a=0;a<6;a++)no(r,se+Math.cos(s+a*.25)*a*3.5,le+Math.sin(s-a*.2)*a*1.8,3)}}});for(let r=0;r<10;r++)F(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(1.5,3),g(.4,.6),po[r%3],3,9,!1,.95)};const s2=10;Ge.hongo_E=(e,t,n,r,o,i)=>{$v(t,zy);const s=Math.hypot(t.vx||0,t.vy||0)||1,a=-(t.vx||0)/s,l=-(t.vy||0)/s;fn(t.x,t.y),e.fillStyle=po[1],e.fillRect(Math.round(se-8),Math.round(le-1),16,4),e.fillStyle=po[0],e.fillRect(Math.round(se-5),Math.round(le-2),10,2);for(let u=s2-1;u>=0;u--){const f=t.x+a*u*.17,h=t.y+l*u*.17,c=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/s2);fn(f,h,c);const d=7-u*.45;e.fillStyle=po[2],no(e,se,le+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",no(e,se,le,d),e.fillStyle="#a07040",e.fillRect(Math.round(se-d/4),Math.round(le-d/2),2,1),(u===3||u===7)&&(e.fillStyle=fr[2],e.fillRect(Math.round(se+d/2),Math.round(le-d/2-1),2,2))}fn(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=fr[3],e.fillRect(Math.round(se-2),Math.round(le-6),4,7),e.fillStyle=fr[1],e.fillRect(Math.round(se-6),Math.round(le-6),4,2),e.fillRect(Math.round(se+2),Math.round(le-8),4,2),e.fillStyle=fr[0],e.fillRect(Math.round(se-1),Math.round(le-8),2,2),Math.random()<.35&&F(t.x,t.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,po[Math.random()*3|0],2,7,!1,.95)};function zy(e){const t=e.x,n=e.y;if(e.life<.07){for(let s=0;s<6;s++)F(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1),.5,s&1?po[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,a){const l=a*r,u=l<.18?Il(l/.18):a>.82?(1-a)/.18:1;for(let f=0;f<o;f++){const h=i+f/o*6.28,c=Math.cos(h),d=Math.sin(h);fn(t+c*.55,n+d*.55,0);const m=se,p=le;fn(t+c*.8,n+d*.8,.55);const y=se,x=le;fn(t+c*.12,n+d*.12,.75);const b=se,M=le,v=Math.min(10,Math.round(10*u));for(let w=0;w<=v;w++){const _=w/10,A=1-_,R=A*A*m+2*A*_*y+_*_*b,C=A*A*p+2*A*_*x+_*_*M,I=6-_*4;s.fillStyle=po[2],no(s,R,C+1,I+2),s.fillStyle=w&1?"#7a5030":"#6a4428",no(s,R,C,I),(w===4||w===7)&&(s.fillStyle="#c8f080",s.fillRect(Math.round(R+(f&1?3:-5)),Math.round(C-1),2,2))}}}});for(let s=0;s<12;s++)F(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3.2),g(.4,.7),po[s%3],3,9,!1,.95);et(2)}q.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,s=[];for(let p=0;p<13;p++){let y=null;for(let x=0;x<8&&!y;x++){const b=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*r*.88,v=t+Math.cos(b)*M,w=n+Math.sin(b)*M;s.every(_=>Math.hypot(_.x-v,_.y-w)>.7)&&(y={x:v,y:w,cs:p===0?4:Math.random()<.5?3:2,ts:M/r*.5})}y&&s.push(y)}s.sort((p,y)=>p.x+p.y-(y.x+y.y));const a=s.length,l=new Int8Array(a).fill(-1);for(let p=0;p<a;p++){let y=1e9;for(let x=0;x<a;x++)if(x!==p){const b=Math.hypot(s[p].x-s[x].x,s[p].y-s[x].y);b<y&&(y=b,l[p]=x)}}T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Pl((x-.1)/.5),M=y>.88?(1-y)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let v=0;v<a;v++){const w=l[v];if(w<0)continue;fn(s[v].x,s[v].y);const _=se,A=le;fn(s[w].x,s[w].y);const R=Math.hypot(se-_,le-A),C=Math.round(R/6*b);for(let I=0;I<=C;I++){const O=I*6/R;p.fillRect(Math.round(_+(se-_)*O),Math.round(A+(le-A)*O+Math.sin(I*1.7+v)*2),2,2)}}p.globalAlpha=1}});const u=(p,y,x)=>{const b=Il(Pl((y-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*b*M))};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(let b=0;b<a;b++){const M=s[b],v=u(M,x,y);v<=0||(fn(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round(se-v*4),Math.round(le-1),v*8,3),Jc(p,i2,se+Math.round(Math.sin(S.T*2+b)*v*.4),le,v,a2))}}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,y,x){const b=y*i;for(let M=0;M<a;M++){const v=s[M],w=u(v,b,y);w<=0||(fn(v.x,v.y),p.globalAlpha=.45+.4*Math.sin(S.T*5+M*1.9),Jc(p,i2,se+Math.round(Math.sin(S.T*2+M)*w*.4),le,w,a2,2),p.globalAlpha=.18,p.fillStyle=Oo[1],p.fillRect(Math.round(se-w*4),Math.round(le-w*9),w*8,w*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,b-x.last),x.last=b;x.acc>.085&&x.puffs<46&&y<.88;){x.acc-=.085,x.puffs++;const M=s[Math.random()*a|0];F(M.x+g(-.1,.1),M.y+g(-.1,.1),.12*M.cs*1.6,g(-.25,.25),g(-.25,.25),g(.5,1),g(.9,1.3),x.puffs&1?Oo[0]:fr[1],2,.15,!0,.97)}}});const f=la(e,i-.3),h=()=>S.T-f.t0,c=p=>Math.min(1,h()/.35,p/.45),d=Array.from({length:9},(p,y)=>{const x=y/9*6.283+g(-.3,.3),b=y===0?0:g(.35,.8)*r,M=Array.from({length:5},()=>({ox:g(-.5,.5),oy:g(-.35,.35),k:g(.35,.6),p:Math.random()*6.28}));return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,s:g(.55,.9)*Math.min(1.2,r/3),sp:g(.25,.5)*(y&1?1:-1),p:Math.random()*6.28,v:y%3===0,puffs:M}});T({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,y,x){const b=$n(f);if(b<=0){x.t=x.dur+1;return}const M=c(b),v=S.T;for(const w of d){const _=Math.cos(v*w.sp+w.p)*.35,A=Math.sin(v*w.sp*.8+w.p)*.35;fn(w.x+_,w.y+A);const R=w.s*N.HW*Math.SQRT2,C=se,I=le;for(const O of w.puffs){const E=R*O.k*(.85+.15*Math.sin(v*1.1+O.p)),U=C+R*O.ox+Math.sin(v*.7+O.p)*4,G=I+R*.45*O.oy;p.globalAlpha=.15*M,p.fillStyle=w.v?Oo[2]:fr[3],l2(p,U,G,E,E*.46),p.globalAlpha=.13*M,p.fillStyle=w.v?Oo[1]:fr[2],l2(p,U-E*.15,G-E*.12,E*.6,E*.28)}}p.globalAlpha=.55*M;for(let w=0;w<56;w++){if(!(w+(v*6|0)&3))continue;const _=w/56*6.283+v*.15;fn(t+Math.cos(_)*r,n+Math.sin(_)*r),p.fillStyle=w%7===0?Oo[1]:fr[1],p.fillRect(u0(se)-1,u0(le)-1,2,2)}Zo(f,t,n,r*1.05,10145856,.45*M)}});const m=Array.from({length:26},()=>{const p=Math.random()*6.283,y=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*y,y:n+Math.sin(p)*y,p:Math.random(),sp:g(.35,.6),v:Math.random()<.3}});T({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,y,x){const b=$n(f);if(b<=0){x.t=x.dur+1;return}const M=c(b),v=S.T;for(const w of m){const _=(v*w.sp+w.p)%1;fn(w.x+Math.sin(v*2+w.p*9)*.12,w.y,_*1.6),p.globalAlpha=M*Math.sin(_*Math.PI)*.9,p.fillStyle=w.v?Oo[0]:fr[0],p.fillRect(u0(se)-1,u0(le)-1,_<.5?2:3,_<.5?2:3)}}});for(let p=0;p<14;p++){const y=Math.random()*6.28,x=Math.random()*r*.8;F(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1.5,2.5),.5,po[p%3],3,8,!1)}et(3)};const u0=Math.round;function l2(e,t,n,r,o){if(!(r<1)){o=Math.max(1,o);for(let i=-o;i<o;i+=2){const s=r*Math.sqrt(Math.max(0,1-(i+1)/o*((i+1)/o)));s>=.5&&e.fillRect(Math.round(t-s),Math.round(n+i),Math.max(1,Math.round(s*2)),2)}}}qe.hongo=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,s=10;r.globalAlpha=1-o;for(let a=0;a<s;a++){const l=a/s*6.28;fn(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=fr[1+a%3],r.fillRect(Math.round(se-2),Math.round(le-1),4,2)}}}),T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){fn(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Sa[i],no(r,se+(i-1)*8*(.6+o),le-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)F(t,n,.4,g(-1,1),g(-1,1),g(.5,1.5),.6,fr[r%3],3,2,!1,.92)};q.hongo_E_hit=e=>zy({x:e.x,y:e.y,life:9});const _t=Math.round,Zr=Math.PI*2;let Fe=0,Ie=0;function wn(e,t,n=0){Fe=(e-t)*N.HW+N.OX,Ie=(e+t)*N.HH-n*N.ZK}function nl(e,t,n,r,o){e.fillStyle=o,e.fillRect(_t(t-r/2),_t(n-r/2),r,r)}const go=e=>e<0?0:e>1?1:e,Dl=e=>1-(1-e)*(1-e),Me={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},Ar={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},cn={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},Sr={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},Hv="#e8384a";function Wv(e,t){return Math.atan2((e+t)*N.HH,(e-t)*N.HW)}function Su(e,t,n,r,o,i,s,a,l){const u=Math.cos(r),f=Math.sin(r),h=-f,c=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(_t(m-o/2),_t(p-o/2),o,o),d>=2&&(e.fillStyle=s,e.fillRect(_t(m+h*o-o/2),_t(p+c*o-o/2),o,o));else if(d===10){e.fillStyle=a;for(let y=-3;y<=3;y++)e.fillRect(_t(m+h*y*o-o/2),_t(p+c*y*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(_t(m-o/2),_t(p-o/2),o,o)):(e.fillStyle=a,e.fillRect(_t(m-o),_t(p-o),o*2,o*2))}}function aa(e,t,n,r,o){e.fillStyle=o;const i=_t(r);e.fillRect(_t(t-i),_t(n-1),i*2,2),e.fillRect(_t(t-1),_t(n-i),2,i*2),e.fillRect(_t(t-2),_t(n-2),4,4)}function Fy(e,t,n,r){const o=Math.max(2,_t(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=Sr.d,e.fillRect(_t(t-o/2),_t(n-i/2),o,i),o>3&&(e.fillStyle=Sr.m,e.fillRect(_t(t-o/2+1),_t(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=Sr.l,e.fillRect(_t(t-1),_t(n-2),2,4))}q.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=Wv(t,n);T({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(s,a){wn(r,o,.55);const l=.55*(1-Dl(a));for(let u=-1;u<=1;u++)u&&a>.85||(s.globalAlpha=u?.7:1,Su(s,Fe,Ie,i+u*l,2,u?cn.l:Me.w,u?cn.m:Me.m,Sr.m,Ar.d))}}),T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(s,a){wn(r,o,.55),s.globalAlpha=1-a,aa(s,Fe+Math.cos(i)*12,Ie+Math.sin(i)*12,10*(1-a)+3,cn.w)}});for(let s=0;s<6;s++)F(r,o,.5,g(-.8,.8),g(-.8,.8),g(.3,1),g(.4,.6),s&1?Ar.m:Ar.l,3,-.5,!1,.9)};Ge.mapache_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=Math.sin(i*26)*.07;vt(!0);const h=Wt();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);h.globalAlpha=(1-d/14)*.9,h.fillStyle=d&1?cn.l:cn.m,h.fillRect(_t(n-s*m+l*p),_t(r-a*m+u*p),2,2)}for(let d=4;d>=1;d--)h.globalAlpha=.5-d*.1,Su(h,n-s*d*9,r-a*d*9,o+f*d,2,cn.l,cn.m,cn.m,cn.d);h.globalAlpha=.22,h.fillStyle=cn.m,h.fillRect(_t(n-10),_t(r-10),20,20),h.globalAlpha=1,vt(!1),Su(e,n,r,o+f,2,Me.w,Me.m,Sr.m,Ar.k);const c=i*4%1;c<.5&&(vt(!0),Wt().globalAlpha=1,aa(Wt(),n+s*(12-c*30),r+a*(12-c*30),4,Me.w),vt(!1))};const u2=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];q.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){wn(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Su(o,Fe-Math.cos(r)*8,Ie-Math.sin(r)*8,r+Math.PI,2,Me.w,Me.m,Sr.m,Ar.k)}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){wn(t,n,1);const s=3,a=Dl(go(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=Fe,f=Ie-a,h=u2.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let c=0;c<h;c++){const d=u2[c],m=i>.6?(c&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const y=d[p];y!=="."&&(o.fillStyle=y==="X"?cn.l:y==="M"?cn.d:y==="e"?cn.w:cn.m,o.fillRect(_t(u+(p-6)*s+m-s/2),_t(f+(c-4)*s*l-s/2),s,Math.max(1,_t(s*l))))}}}});for(let o=0;o<8;o++)F(t,n,.5,g(-1.8,1.8),g(-1.8,1.8),g(.8,2),g(.3,.5),o&1?Me.l:Me.m,2,6,!0,.9);for(let o=0;o<6;o++)F(t+g(-.2,.2),n+g(-.2,.2),.4,0,0,g(.6,1.2),g(.6,.9),o&1?cn.l:cn.m,2,-.3,!0);et(2)};function Ey(e,t,n,r,o,i,s,a){const l=Math.max(2,_t(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,h=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,c=n-o/2+u*2;if(h<1)continue;e.globalAlpha=a,e.fillStyle=Sr.d,e.fillRect(_t(t-h-2),_t(c),_t(h*2+4),2),e.globalAlpha=a*.85,e.fillStyle=Me.m,e.fillRect(_t(t-h),_t(c),_t(h*2),2);const d=t-h+(s*2.2-.6)*r-f*o*.25;d>t-h&&d<t+h-3&&(e.globalAlpha=a,e.fillStyle=Me.w,e.fillRect(_t(d),_t(c),3,2))}e.globalAlpha=a,e.fillStyle=Sr.l,e.fillRect(_t(t-2),_t(n-o/2-3),4,3)}function Ly(e,t,n,r,o,i,s,a,l){if(!(a<=0||a>=1))for(let u=0;u<o.length;u++)for(let f=0;f<s;f++){const h=l+u*17+f*3,c=(W(h)-.5)*.7,d=(W(h+1)-.5)*.7,m=go(a*(.85+W(h+2)*.3));wn(t+(o[u]+c-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(S.T*20+f|0)&1;e.fillStyle=p?Me.w:Me.m,e.fillRect(_t(Fe-2),_t(Ie-1),p?4:2,p?2:4),e.fillStyle=Me.d,e.fillRect(_t(Fe+(p?2:0)),_t(Ie+(p?0:3)),2,2)}}function ky(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const s=i/n*Zr;r[i]=e+Math.cos(s)*1.1,o[i]=t+Math.sin(s)*1.1}return{TX:r,TY:o}}function Dy(e,t,n){T({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){wn(e[i],t[i],.6);for(let s=0;s<6;s++){const a=s/6*Zr+o*2,l=6+o*22;aa(r,Fe+Math.cos(a)*l,Ie+Math.sin(a)*l*.8,4*(1-o)+2,s&1?Me.l:cn.l)}o<.3&&aa(r,Fe,Ie,16*(1-o/.3)+3,Me.w)}}}),T({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let s=0;s<e.length;s++)for(let a=0;a<4;a++)F(e[s],t[s],.4,g(-.8,.8),g(-.8,.8),g(.3,.9),g(.4,.7),a&1?Ar.l:Ar.m,3,-.4,!1,.9)}}})}q.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=ky(t,n,2),s=.32,a=.45,l=.78;T({type:"custom",layer:"top",dur:a+.02,x:t,y:n,draw(u,f){const h=f*(a+.02),c=Dl(go(h/.18));if(wn(t,n,.75),Ey(u,Fe,Ie,30,52*c,!0,go(h/.3),.95),h>s){u.globalAlpha=1,u.fillStyle=Me.w;const d=go((h-s)/(a-s)),m=Fe+4,p=Ie-6;for(let y=0;y<6;y++){let x=W(r+y)*Zr,b=m,M=p;for(let v=0;v<_t(6*d);v++)x+=(W(r+y*7+v)-.5)*.9,b+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(_t(b),_t(M),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const h=f*(l+.05);h>=a&&h<a+.08&&(wn(t,n,.75),u.globalAlpha=1-(h-a)/.08,u.fillStyle=Me.w,u.fillRect(_t(Fe-22),_t(Ie-30),44,60)),u.globalAlpha=1,Ly(u,t,n,.75,o,i,6,(h-a)/(l-a),r)}}),Dy(o,i,l);for(let u=0;u<8;u++)F(t,n,.4,g(-1,1),g(-1,1),g(.3,.8),g(.5,.8),u&1?Ar.m:Ar.d,3,-.3,!1,.9)};q.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,s=(a,l,u,f,h,c,d)=>{const m=12*f,p=20*f;for(let y=0;y<18;y++){const x=y/18*Zr+h;nl(a,l+Math.cos(x)*m,u+Math.sin(x)*p,y%3?2:3,y&1?c:d)}for(let y=0;y<8;y++){const x=y/8*Zr-h*1.7,b=.45+.25*Math.sin(h*2+y);nl(a,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(a,l){const u=l*i,f=u<.15?Dl(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,h=S.T*8;wn(t,n,.55);const c=Fe,d=Ie;wn(r,o,.55);const m=Fe,p=Ie;f>0&&(a.globalAlpha=1,s(a,c,d,f,h,Me.l,Me.d),s(a,m,p,f,-h,Sr.l,Sr.d));const y=go((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,M=x?Sr.m:Me.m,v=x?1-y:y;a.globalAlpha=.45*(1-go((u-.5)/.3));for(let w=0;w<=20;w++){const _=w/20;w%2||nl(a,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,2,M)}if(y>0&&y<1)for(let w=0;w<6;w++){const _=x?v+w*.03:v-w*.03;_<0||_>1||(a.globalAlpha=1-w/6,nl(a,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,w?3:5,w?M:Me.w))}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(a,l){const u=l*i;wn(t,n,.55);const f=Fe,h=Ie;wn(r,o,.4);const c=Fe,d=Ie,m=(f+c)/2,p=(h+d)/2-58,y=go(u/i),x=m+(c-m)*y,b=p+(d-p)*y-Math.sin(y*Math.PI)*30;a.globalAlpha=y>.85?(1-y)/.15:1,Fy(a,x,b,S.T*26)}});for(const[a,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*Zr;F(a,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,g(0,.6),.4,a===t?Me.l:Sr.l,2,0,!0)}};const qv=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];q.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=ky(t,n,4),s=8,a=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],h=new Float32Array(s);T({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(y,x){wn(t,n,0);const b=Fe,M=Ie;y.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),y.fillStyle=Sr.l;for(let v=0;v<60;v++){const w=v*6,_=70-v*.9;y.fillRect(_t(b-_),_t(M-w-6),_t(_*2),6)}y.globalAlpha*=2,y.fillStyle=Me.w;for(let v=0;v<18;v+=2){const w=Math.sqrt(1-v/18*(v/18))*74;y.fillRect(_t(b-w),_t(M-9+v),_t(w*2),2)}}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(y,x){const b=x*l,M=Dl(go(b/.3)),v=b*1.2+b*b*4.5;for(let w=0;w<s;w++)h[w]=w/s*Zr+v;f.sort((w,_)=>Math.sin(h[w])-Math.sin(h[_]));for(const w of f){const _=h[w];wn(t+Math.cos(_)*a,n+Math.sin(_)*a,0);const A=.45+.55*Math.abs(Math.sin(_+.8));Ey(y,Fe,Ie-22*M,_t(14*A)+2,44*M,!1,(b*1.6+w*.13)%1,.9)}}}),T({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(y,x){const b=x*(u+.05);if(b<l){const M=b*14|0,v=M%s,w=v/s*Zr+b*1.2+b*b*4.5;wn(t+Math.cos(w)*a,n+Math.sin(w)*a,.6),y.globalAlpha=.9,aa(y,Fe,Ie,9,Me.w)}else{if(b<l+.1){y.globalAlpha=1-(b-l)/.1,wn(t,n,.4),y.fillStyle=Me.w;for(let M=-14;M<14;M+=2){const v=Math.sqrt(1-M/14*(M/14))*90;y.fillRect(_t(Fe-v),_t(Ie+M*2),_t(v*2),4)}}y.globalAlpha=1,Ly(y,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),Dy(o,i,u);const c=16,d=new Float32Array(c),m=new Float32Array(c),p=new Float32Array(c);for(let y=0;y<c;y++){const x=Math.random()*Zr,b=Math.sqrt(Math.random())*2.6;d[y]=t+Math.cos(x)*b,m[y]=n+Math.sin(x)*b,p[y]=g(0,.35)}T({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(y,x){const b=x*1.3;for(let M=0;M<c;M++){const v=(b-p[M])/.95;if(v<0||v>1)continue;wn(d[M],m[M],3.2*(1-v));const w=Math.cos(S.T*9+M*1.7),_=Fe+Math.sin(S.T*4+M)*8,A=qv[M&3],R=(M&3)<2?Hv:Ar.k,C=2,I=Math.max(.2,Math.abs(w));if(y.globalAlpha=v>.8?(1-v)/.2:1,y.fillStyle="#fffaf0",y.fillRect(_t(_-7*I),_t(Ie-8),_t(14*I)||1,16),I>.45){y.fillStyle=R;for(let O=0;O<5;O++)for(let E=0;E<5;E++)A[O][E]==="X"&&y.fillRect(_t(_+(E-2.5)*C*I),_t(Ie-5+O*C),Math.max(1,_t(C*I)),C)}}}});for(let y=0;y<20;y++){const x=Math.random()*Zr;F(t+Math.cos(x)*a,n+Math.sin(x)*a,.2,Math.cos(x)*.8,Math.sin(x)*.8,g(.5,1.5),g(.5,.9),y&1?Ar.l:Ar.m,3,-.4,!1,.92)}T({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){b.fired||(b.fired=!0,et(5))}})};function f2(e,t,n,r,o,i,s,a){const l=Math.cos(r),u=Math.sin(r),f=-u,h=l,c=_t(10*i);for(let d=0;d<=c;d++){const m=d/10-.5,p=Math.sin(m*Zr)*o*.18;nl(e,t+l*m*o+f*p,n+u*m*o*.8+h*p,d===c?4:3-Math.abs(m)*2,d===c?a:s)}}qe.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+g(-.3,.3);if(T({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,s){wn(t,n,.5);const a=go(s*4);i.globalAlpha=s>.4?(1-s)/.6:1,f2(i,Fe,Ie,o,34,a,Me.m,Me.w),r&&f2(i,Fe,Ie,o+1.6,40,a,cn.m,cn.w),s>.2&&(aa(i,Fe+12,Ie-10,4*(1-s)+1,Me.w),aa(i,Fe-10,Ie+6,3*(1-s)+1,Me.l))}}),r){T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,s){wn(t,n,.6+Math.sin(s*Math.PI)*1),i.globalAlpha=s>.8?(1-s)/.2:1,Fy(i,Fe+s*18,Ie,S.T*30)}});for(let i=0;i<6;i++)F(t,n,.5,g(-1,1),g(-1,1),g(.5,1.4),.5,i&1?cn.l:cn.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)F(t,n,.2,g(-.8,.8),g(-.8,.8),g(.2,.6),.35,Ar.l,3,0,!1,.9)};const Oa="#1e0f30",ja="#4b2272",Ho="#8b3cd2",Wo="#d6b4ff",ko="#f6f2ff",_u="#ff2f5f",Uy="#2c1446",un=Math.round,Qi=Math.PI*2,Vv=[0,1,2,1];function Vr(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(un(t),un(n),r,o)}function Yv(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(un(t+(r-t)*l/a-i/2),un(n+(o-n)*l/a-i/2),i,i)}function th(e,t,n,r,o,i,s,a){t=un(t),n=un(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=s,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=a,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function Gi(e,t,n,r,o,i,s,a=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,un(2*a));e.fillStyle=s;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=un(n+c*a);if(Math.abs(m)>=f){e.fillRect(un(t-d),p,un(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(un(t-d),p,un(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(un(t+M),p,un(d-M),h)}}}function eh(e,t,n,r,o){const[i,s]=P(t,n),a=r*N.HW*Math.SQRT2,l=a*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=a*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(un(i-f),un(s+u),un(f*2),2)}}const Xy=e=>{const t=st(e);return t&&!t.dead&&!We(t)?t:null},jv=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},nh=(e,t=16)=>Vv[((S.T*t|0)+e)%4];qe.murcielago=e=>{const t=g(0,Qi),n=e.big?17:13;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,s]=P(e.x,e.y,.5);r.globalAlpha=1-o,Gi(r,i,s,n+2,t+o*1.4,.45,Ho),Gi(r,i,s,n,t+o*1.4,.52,ko)}});for(let r=0;r<5;r++)F(e.x,e.y,.5,g(-2.5,2.5),g(-2.5,2.5),g(0,1),.28,r%2?Wo:Ho,2,0,!0,.9)};q.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,s=e.x+t*.3,a=e.y+n*.3,l=.6;T({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const h=f*.62;for(let c=0;c<6;c++){const d=h-c*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),y=Math.max(6,Math.ceil(i*2*p*7)),x=c%2?Ho:Wo,b=c%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=y;M++){const v=r-i+2*i*M/y,w=Math.sin(M*1.7+c*2.3+h*40)*.07*(1+m),[_,A]=P(s+Math.cos(v)*(p+w),a+Math.sin(v)*(p+w),l-m*.35);Vr(u,_-b/2,A-b/2,b,b,x),M===y>>1&&Vr(u,_-1,A-1,2,2,ko)}}}}),T({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const h of[-1,1]){const c=r+h*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,y]=P(s+Math.cos(c)*m,a+Math.sin(c)*m);Vr(u,p-1,y-1,3,2,ja)}}}});for(let u=0;u<14;u++){const f=r+g(-i,i),h=g(.6,o);F(s+Math.cos(f)*h,a+Math.sin(f)*h,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,g(0,.5),.5,u%3?Wo:ko,2,0,!0,.92)}et(2)};q.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*Qi+g(-.2,.2),sp:g(1.2,2.4),up:g(.8,1.8),ph:Math.random()*4|0}));T({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),eh(r,e.x,e.y,.75*(1-o*.6),Oa),r.globalAlpha=.8*(1-o),eh(r,e.x,e.y,.3*(1-o),Uy)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const s of n){const a=s.sp*i,[l,u]=P(e.x+Math.cos(s.a)*a,e.y+Math.sin(s.a)*a,.5+s.up*i+Math.sin(i*9+s.a)*.08);th(r,l,u,2,nh(s.ph),Oa,ja,_u)}}}),T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=Xy(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,s]=P(o.x,o.y,.75);r.globalAlpha=.65;for(let a=0;a<2;a++){const l=S.T*5+a*Math.PI;th(r,i+Math.cos(l)*24,s+Math.sin(l)*9,1,nh(a*2,20),ja,Ho,_u)}r.globalAlpha=.35;for(let a=0;a<4;a++)Vr(r,i-8+a*5,s+26+(S.T*30+a*7)%8,2,2,Oa)}});for(let r=0;r<16;r++)F(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.2,.8),g(-.5,.5),g(-.5,.5),g(1,2.2),g(.5,.9),r%2?Oa:ja,3,0,!1,.95);for(let r=0;r<6;r++)F(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.4,1),0,0,g(.5,1.2),.5,Wo,2,0,!0)};q.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=jv(e),i=o&&o.radius||1.4,s=g(0,Qi);let a=!1;T({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const h=u*f.dur,[c,d]=P(t,n);if(h<r){l.globalAlpha=.5,Gi(l,c,d,un(i*26*(1.4-.4*h/r)),s+h*6,.45,ja,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-h)/.6),Gi(l,c,d+2,un(i*30),s+Math.PI*1.1,.42,Uy,.5)}}),T({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const h=u*f.dur;if(h<r){const b=Xy(e.uid);if(!b)return;const[M,v]=P(b.x,b.y,.7),[w,_]=P(t,n,.3),A=Math.hypot(w-M,_-v)||1,R=(w-M)/A,C=(_-v)/A;l.globalAlpha=.75;for(let I=0;I<4;I++){const O=(I-1.5)*7,E=18+I%2*12;Yv(l,M-C*O-R*8,v+R*O-C*8,M-C*O-R*(8+E),v+R*O-C*(8+E),2,I%2?Wo:Ho)}return}const c=(h-r)/.5;if(!a){a=!0,et(6);for(let b=0;b<22;b++){const M=g(0,Qi),v=g(2,5);F(t,n,.45,Math.cos(M)*v,Math.sin(M)*v,g(.3,1.5),g(.3,.55),b%3?Wo:b%2?ko:Ho,2,3,!0,.9)}}const d=Math.min(1,c/.45),[m,p]=P(t,n,.45),y=un(26+14*d),x=s+d*Math.PI*1.1;l.globalAlpha=c<.5?1:Math.max(0,(1-c)/.5),Gi(l,m,p,y+3,x,.42,Ho,.85),Gi(l,m,p,y,x,.48,ko,.85),l.globalAlpha*=.35,Gi(l,m,p,y,x-.6,.48,Wo,.85)}})};q.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(a,l)=>({p:l/r*Qi,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(a,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),h=(a.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+a.p*3)),c=a.p+l*a.w;return[e.x+Math.cos(c)*h,e.y+Math.sin(c)*h,a.z+Math.sin(l*4+a.p)*.25+f*1.5,f]},s=Array.from({length:8},()=>({t:g(.3,n-.4),x:e.x+g(-1,1)*t*.6,y:e.y+g(-1,1)*t*.6}));T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);a.globalAlpha=.32*f,eh(a,e.x,e.y,t,Oa),a.globalAlpha=.7*f;for(let h=0;h<40;h++){const c=h/40*Qi+u*.8,[d,m]=P(e.x+Math.cos(c)*t,e.y+Math.sin(c)*t);Vr(a,d-1,m-1,h%2?2:3,2,h%2?Wo:Ho)}a.globalAlpha=.3*f;for(const h of o){const[c,d]=i(h,u),[m,p]=P(c,d);Vr(a,m-4,p-1,8,2,"#000000")}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n;for(const f of o){const[h,c,d,m]=i(f,u),[p,y]=P(h,c,d);a.globalAlpha=Math.min(1,u/.15)*(1-m),th(a,p,y,f.s,nh(f.ph,18),Oa,ja,_u)}}}),T({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n;for(const f of s){const h=(u-f.t)/.14;if(h<0||h>1)continue;const[c,d]=P(f.x,f.y,.55),m=un(4-h*3);a.globalAlpha=1-h;for(const p of[-1,1]){const y=c+p*4;Vr(a,y-2,d-6-m,4,2,ko),Vr(a,y-1,d-4-m,2,3,ko),Vr(a,y-2,d+4+m,4,2,ko),Vr(a,y-1,d+1+m,2,3,ko)}Vr(a,c-1,d-1,3,3,_u)}}});for(let a=0;a<20;a++){const l=g(0,Qi),u=t*g(.3,1);F(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,g(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,g(0,.6),g(.6,1.1),a%3?Ho:Wo,2,0,!0,.97)}et(5)};const Ft=Math.round,yo=Math.PI*2,Pt={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},Kv=e=>e*N.HW*Math.SQRT2;function rl(e,t,n,r){r=Math.max(1,Ft(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(Ft(t[0]+(n[0]-t[0])*a/i-s),Ft(t[1]+(n[1]-t[1])*a/i-s),r,r)}function Au(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=Ft(n-s*o/2),u=Ft(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<a;h++)for(let c=0;c<s;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function Gy(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+g(-.35,.35),s=t*o/n;r.push([Math.cos(i)*s,Math.sin(i)*s])}return r}function Ny(e,t,n,r,o){const i=r.length-1,s=o*i;for(let a=0;a<i&&a<s;a++){const l=Math.min(1,s-a),u=P(t+r[a][0],n+r[a][1]),f=P(t+r[a+1][0],n+r[a+1][1]);rl(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],a<2?3:2)}}const Qv=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],Zv=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],c2=["t.t.t",".....",".ppp.","ppppp",".ppp."];q.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,s=Math.min(e.angle||1.2,1.4),a=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,h=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let y=0;y<p;y++){const x=a+(p===1?0:(y/(p-1)*2-1)*s*.8)+g(-.06,.06),b=d*i/2.5;h.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:g(9,15),done:!1})}});const c=[-.8,-.4,0,.4,.8].map(d=>Gy(a+d*s,i*g(.75,1)));T({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,y=Math.min(1,p/f),x=1.5*(1-y*y),[b,M]=P(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),Au(d,Qv,b,M,3,{h:Pt.wood,d:Pt.i0,b:Pt.brass,l:Pt.i4,i:Pt.i2}),y<1){d.globalAlpha=.5,d.fillStyle=Pt.i3;for(let v=1;v<=3;v++)d.fillRect(Ft(b-15+v*7),Ft(M-26-v*8),2,8)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,y]=P(l,u,.1),x=Ft(26*(1-m))+4;d.fillStyle=Pt.amberL,d.fillRect(p-x,y-2,x*2,4),d.fillRect(p-2,y-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,y-3,10,6)}}),T({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const y=m*1.15;if(y>=f&&!p.hit){p.hit=!0,et(7);for(let M=0;M<14;M++){const v=a+g(-s,s),w=g(1,3);F(l,u,.1,Math.cos(v)*w,Math.sin(v)*w,g(.3,1),g(.6,.9),M%2?Pt.dust:Pt.e3,5,-.4,!1,.9)}}if(y<f)return;const x=y-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=Pt.e0;for(const M of c)Ny(d,t,n,M,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const M=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=Pt.dust;for(let v=0;v<=16;v++){const w=a-s+2*s*v/16,[_,A]=P(t+Math.cos(w)*M,n+Math.sin(w)*M);d.fillRect(Ft(_)-3,Ft(A)-2,6,4)}}for(const M of h){const v=(y-M.t0)/.5;if(v<0||v>1)continue;M.done||(M.done=!0,F(M.x,M.y,.2,g(-1,1),g(-1,1),g(3,5),g(.7,1),[Pt.e1,Pt.e2,Pt.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const w=Ft(M.h*(v<.2?v/.2:1-(v-.2)/.8)),[_,A]=P(M.x,M.y);d.globalAlpha=1,d.fillStyle=Pt.e0,d.fillRect(Ft(_-M.w/2-1),Ft(A-2),M.w+2,4),d.fillStyle=Pt.e1,d.fillRect(Ft(_-M.w/2),Ft(A-w),M.w,w),d.fillStyle=Pt.e3,d.fillRect(Ft(_-M.w/2),Ft(A-w-5),M.w,5),d.fillStyle=Pt.e2,d.fillRect(Ft(_-M.w/2),Ft(A-w-1),M.w,1)}}})};function f0(e,t,n,r,o,i){const s=Math.cos(i);return[e+n*Math.cos(o)*s,t+n*.5*Math.sin(o)*s-r*Math.sin(i)]}q.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,s){const a=st(t),[l,u]=P(a?a.x:r,a?a.y:o,.6),f=Ft(18*(1-s))+3;i.fillStyle=Pt.amber;for(let h=0;h<8;h++){const c=h/8*yo;i.fillRect(Ft(l+Math.cos(c)*f*1.4)-2,Ft(u+Math.sin(c)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const s=Math.random()*yo;F(e.x,e.y,.6,Math.cos(s)*g(1,3),Math.sin(s)*g(1,3),g(1.5,3),.4,i%2?Pt.brassL:Pt.amber,2,9,!0)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,s,a){const l=st(t),u=s*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||s>.985){for(let _=0;_<16;_++){const A=Math.random()*yo,R=g(1,2.5);F(r+Math.cos(A)*.4,o+Math.sin(A)*.4,g(.2,.8),Math.cos(A)*R,Math.sin(A)*R,g(1.5,3.5),.7,[Pt.i1,Pt.i2,Pt.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)F(r,o,.6,g(-2,2),g(-2,2),g(1,3),.35,Pt.brassL,2,6,!0);a.t=1e9;return}const h=l&&l.scale||1,[c,d]=P(r,o),m=Ft(40*h),p=Ft(56*h),y=Math.min(1,u/.25),x=Math.PI/2*y;if(y>=1&&!a.done){a.done=!0;const[_,A]=[r,o];for(let R=0;R<6;R++)F(_,A,.75*h,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.3,Pt.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=Pt.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(Ft(c-A),Ft(d-_-3),Ft(A*2),3)}for(let _=0;_<m*.5;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(Ft(c-A),Ft(d+_),Ft(A*2),3)}for(let _=0;_<32;_++){const A=_/32*yo,R=f0(c,d,m,p,A,0),C=Math.sin(A)>0;i.globalAlpha=C?.95:.4,i.fillStyle=C?Pt.i3:Pt.i1,i.fillRect(Ft(R[0])-2,Ft(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=Pt.i2;for(const _ of[.12,.3,.5,.7,.88]){const A=Math.PI*_;for(let R=0;R<=x;R+=.16){const C=f0(c,d,m,p,A,R);i.fillRect(Ft(C[0])-1,Ft(C[1])-1,2,3)}}const v=u*14|0;let w=0;for(const _ of[.42,.9])if(!(_>x))for(let A=0;A<=14;A++){const R=Math.PI*A/14,C=f0(c,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=Pt.i3,i.fillRect(Ft(C[0])-2,Ft(C[1])-1,4,2),A%2===0&&(w++,i.globalAlpha=1,i.fillStyle=w%16===v%16?"#ffffff":Pt.brass,i.fillRect(Ft(C[0])-1,Ft(C[1])-3,3,3))}if(y>=1){const _=f0(c,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=Pt.i0,i.fillRect(Ft(_[0])-5,Ft(_[1])-4,10,6),i.fillStyle=Pt.brass,i.fillRect(Ft(_[0])-4,Ft(_[1])-3,8,4),i.fillStyle=Pt.brassL,i.fillRect(Ft(_[0])-3,Ft(_[1])-3,3,1)}}})};q.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,s=e.dur||.3,a=o-n,l=i-r,u=Math.hypot(a,l)||1,f=P(n,r),h=P(o,i),c=Math.hypot(h[0]-f[0],h[1]-f[1])||1,d=(h[0]-f[0])/c,m=(h[1]-f[1])/c,p=[],y=Math.max(2,Math.floor(u/.5));for(let x=1;x<=y;x++){const b=x/(y+1),M=x%2?1:-1;p.push({s:b,x:n+a*b-l/u*.17*M,y:r+l*b+a/u*.17*M})}T({type:"custom",layer:"ground",dur:s+2,x:n,y:r,draw(x,b){const M=b*(s+2);for(const v of p){const w=M-v.s*s;if(w<0)continue;const[_,A]=P(v.x,v.y);x.globalAlpha=Math.max(0,.7*(1-w/2)),Au(x,c2,_,A,3,{t:Pt.e0,p:Pt.e0}),x.globalAlpha*=.6,Au(x,c2,_-1,A-1,3,{p:Pt.e1})}}}),T({type:"custom",layer:"top",dur:s+.3,x:n,y:r,draw(x,b,M){const v=b*(s+.3),w=st(t),_=Math.min(1,v/s),A=w&&v<s?w.x:n+a*_,R=w&&v<s?w.y:r+l*_;if(v<s){if(M.n=M.n||0,M.n<30){M.n+=2;for(let j=0;j<2;j++)F(A+g(-.2,.2),R+g(-.2,.2),.1,-a/u*g(.5,1.5)+g(-.5,.5),-l/u*g(.5,1.5)+g(-.5,.5),g(.4,1.2),g(.5,.8),j?Pt.e2:Pt.dust,5,-.3,!1,.9)}const[C,I]=P(A,R,.45),O=C+d*26,E=I+m*26,U=-m,G=d;for(let j=0;j<3;j++){const L=j*8+v*120%8;x.globalAlpha=.9-j*.25,x.fillStyle=j?Pt.dust:"#ffffff";const k=[O-d*L,E-m*L];rl(x,k,[k[0]-d*10+U*13,k[1]-m*10+G*13],3),rl(x,k,[k[0]-d*10-U*13,k[1]-m*10-G*13],3)}x.globalAlpha=.6,x.fillStyle=Pt.i3;for(let j=0;j<4;j++){const L=(j-1.5)*9,k=14+(j*7+v*200)%12;rl(x,[C-d*20+U*L,I-m*20+G*L],[C-d*(20+k)+U*L,I-m*(20+k)+G*L],2)}}else{if(!M.end){M.end=!0,et(5);for(let E=0;E<14;E++){const U=Math.random()*yo,G=g(1.5,3);F(o,i,.15,Math.cos(U)*G,Math.sin(U)*G,g(.8,2),.6,E%2?Pt.dust:Pt.e3,5,2,!1,.9)}}const C=(v-s)/.3,[I,O]=P(o+a/u*.5,i+l/u*.5,.45);x.globalAlpha=1-C;for(let E=0;E<8;E++){const U=E/8*yo+.2,G=6+C*14,j=G+10*(1-C);x.fillStyle=E%2?Pt.amberL:"#ffffff",rl(x,[I+Math.cos(U)*G,O+Math.sin(U)*G*.7],[I+Math.cos(U)*j,O+Math.sin(U)*j*.7],4)}}}})};q.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(s,a)=>Gy(a/8*yo+g(-.2,.2),o*g(.45,.65),5));et(10),T({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(s,a){const[l,u]=P(n,r),f=a*1;for(let h=0;h<3;h++){const c=(f-h*.13)/.62;if(c<=0||c>=1)continue;const d=Kv(o)*(.15+.95*(1-(1-c)*(1-c))),m=5-h;s.globalAlpha=1-c;for(let p=0;p<56;p++){if(p%7>=5)continue;const y=p/56*yo+h*.2,x=l+Math.cos(y)*d,b=u+Math.sin(y)*d*.5;s.fillStyle=h===0?Pt.amberL:Pt.amber,s.fillRect(Ft(x-m/2),Ft(b-m/2),m,m),p%7===2&&(s.fillStyle=Pt.amberD,s.fillRect(Ft(x*.94+l*.06-1),Ft(b*.94+u*.06-1),3,3))}}}}),T({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(s,a){s.globalAlpha=.8*(1-a),s.fillStyle=Pt.e0;for(const l of i)Ny(s,n,r,l,Math.min(1,a*7))}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(s,a){const l=st(t),u=l?l.x:n,f=l?l.y:r,h=l&&l.scale||1,[c,d]=P(u,f,1.7*h+a*.5),m=a<.07?2:a<.14?3:4;s.globalAlpha=a<.1?a*10:a>.6?Math.max(0,(1-a)/.4):1,s.globalAlpha*=.85+.15*Math.sin(a*60),Au(s,Zv,c,d,m,{e:Pt.amberD,i:Pt.amberL,h:Pt.amber,s:Pt.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const y=34+(a*90+p*22)%66,x=1-(a*90+p*22)%66/66;s.globalAlpha=x*(a>.7?(1-a)/.3:1),s.fillStyle=Pt.amberL;for(let b=-.7;b<=.71;b+=.175){const M=Math.cos(b)*y,v=Math.sin(b)*y*.8;s.fillRect(Ft(c+M)-2,Ft(d+6+v)-2,4,4),s.fillRect(Ft(c-M)-2,Ft(d+6+v)-2,4,4)}}}});for(let s=0;s<30;s++){const a=Math.random()*yo,l=Math.sqrt(Math.random())*o*.9;F(n+Math.cos(a)*l,r+Math.sin(a)*l,0,Math.cos(a)*.4,Math.sin(a)*.4,g(2,4),g(.5,.8),[Pt.e1,Pt.e2,Pt.e3][s%3],s%4?3:4,12,!1,.97)}for(let s=0;s<12;s++){const a=Math.random()*yo,l=g(.3,1.2);F(n+Math.cos(a)*l,r+Math.sin(a)*l,.5,0,0,g(.8,1.6),g(.8,1.2),Pt.amberL,2,-.3,!0,.98)}};qe.oso=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,s]=P(t,n,.08),a=Ft(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=Pt.i0,r.fillRect(i-a-1,s-2,a*2+2,5),r.fillStyle=Pt.dust,r.fillRect(i-a,s-1,Ft(a*.7),3),r.fillRect(i+a-Ft(a*.7),s-1,Ft(a*.7),3);const[u,f]=P(t,n,.5),h=Ft(12*(1-o));r.fillStyle=Pt.i3,r.fillRect(u-h-4,f-3,8,6),r.fillRect(u+h-4,f-3,8,6),r.fillStyle=Pt.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)F(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(2,3.5),.3,Pt.brassL,2,12,!0);for(let r=0;r<3;r++)F(t,n,.05,g(-1,1),g(-1,1),g(1,2),.45,Pt.e2,3,10,!1)};const tr="#ffffff",rr="#e6eeff",Fo="#bfe9ff",$i="#7fdcf4",rh="#3a9ab8",Mn="#fff0b4",h2="#efe0b8",d2="#c8a878",Jv="#34408a",m2="#a9bfdc",ue=Math.round,Zi=Math.PI*2;function ke(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ue(t),ue(n),r,o)}function Tu(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=ue(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(ue(t-s),ue(n+i),s*2,2)}}function Ka(e,t,n,r,o,i,s,a=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,ue(2*a));e.fillStyle=s;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=ue(n+c*a);if(Math.abs(m)>=f){e.fillRect(ue(t-d),p,ue(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(ue(t-d),p,ue(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(ue(t+M),p,ue(d-M),h)}}}function tw(e,t,n,r,o,i,s){t=ue(t),n=ue(n);const a=[3,2,1,2][o],l=Math.max(1,a-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*a,n-2*r,r*a,2*r),e.fillRect(t+u,n-2*r,r*a,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=s,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function p2(e,t,n,r,o,i,s,a,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const h=ue(t+u*i-f),c=ue(t+u*i+f),d=ue(n+u);e.globalAlpha=.45*l,e.fillStyle=s,e.fillRect(h,d,c-h,2),e.globalAlpha=.95*l,e.fillStyle=a,e.fillRect(h,d,2,2),e.fillRect(c-2,d,2,2)}}function ew(e,t,n,r,o){t=ue(t),n=ue(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const By=e=>{const t=st(e);return t&&!t.dead&&!We(t)?t:null},nw=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Ru=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Ge.polilla_A=(e,t,n,r,o,i)=>{vt(!0);const s=Wt(),a=.65+.35*Math.sin(i*20),l=ue(5+a*3);s.globalAlpha=a,ke(s,n-l,r-1,l*2,2,$i),ke(s,n-1,r-l,2,l*2,$i),s.globalAlpha=1,ke(s,n-2,r-2,4,4,tr);const u=i*14;ke(s,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,Mn),ke(s,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,Mn),vt(!1)};qe.polilla=e=>{T({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.5),i=ue(10*(1-n))+2;t.globalAlpha=1-n,ke(t,r-i,o-1,i*2,2,rr),ke(t,r-1,o-i,2,i*2,rr),ke(t,r-2,o-2,4,4,tr)}});for(let t=0;t<5;t++)F(e.x,e.y,.5,g(-1,1),g(-1,1),g(.2,.8),.6,t%2?Mn:Fo,2,.4,!0,.9)};Ge.polilla_Q=(e,t,n,r,o,i)=>{const a=t.z||.45;n=ue(n),r=ue(r),vt(!0);const l=Wt(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),vt(!1),Tu(e,n,r,10,rh),Tu(e,n,r,9,rr),Ka(e,n,r,9,Math.PI*.85,.55,m2);for(let c=0;c<3;c++){const d=i*2+c*2.1;ke(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,c?2:3,2,m2)}ke(e,n-4,r-5,2,2,tr);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=(i*2.2+c/3)%1,m=14+c*10;e.globalAlpha=1-d,ew(e,n-f*m,r-h*m-6-d*14,c<2?1:2,c%2?Mn:rr)}e.globalAlpha=1,Math.random()<.4&&F(t.x,t.y,a,g(-.3,.3),g(-.3,.3),-.4,.6,Math.random()<.5?Mn:rr,2,.5,!0,.9)};q.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,s]=P(e.x+t*.4,e.y+n*.4,.75),a=ue(14*(1-o))+2,l=ue(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)ke(r,i-a,s-1,a*2,2,Mn),ke(r,i-1,s-a,2,a*2,Mn);else for(let u=1;u<=l;u+=2)ke(r,i+u,s+u,2,2,Mn),ke(r,i-u-2,s+u,2,2,Mn),ke(r,i+u,s-u-2,2,2,Mn),ke(r,i-u-2,s-u-2,2,2,Mn);ke(r,i-2,s-2,4,4,tr);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,h=16+u;ke(r,i+Math.cos(f)*h-1,s+Math.sin(f)*h*.6-1,2,2,u%2?Mn:rr)}}});for(let r=0;r<10;r++)F(e.x+t*.4,e.y+n*.4,.75,t*g(.5,1.5)+g(-.4,.4),n*g(.5,1.5)+g(-.4,.4),g(0,.4),g(.6,1),r%2?Mn:rr,2,.6,!0,.9)};q.polilla_W=e=>{if(e.type==="heal"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),Ka(n,o,i,7,-.6,.5,rr);for(let s=0;s<3;s++){const a=(r*1.6+s/3)%1;ke(n,o-10+s*10,i+a*50,2,4,s%2?Fo:tr)}}});for(let n=0;n<8;n++)F(e.x+g(-.35,.35),e.y+g(-.35,.35),g(1,1.6),0,0,-g(.6,1.2),g(.7,1.1),n%2?rr:Mn,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=By(e.uid),i=o?o.x:e.x,s=o?o.y:e.y,[a,l]=P(i,s,2.2),u=r*1.2,f=ue(15*Ru(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),Ka(n,a,l,f+2,-.7,.5,$i),Ka(n,a,l,f,-.7,.55,tr);for(let h=0;h<5;h++){const c=S.T*2+h*1.26;(S.T*6+h)%2<1&&ke(n,a+Math.cos(c)*(f+10)-1,l+Math.sin(c)*(f+6)-1,2,2,Mn)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const s=Math.max(0,Math.min(1,(r-i)/(1-i)));if(s<=0)continue;const a=t*o*(.3+.7*(1-(1-s)*(1-s)));n.globalAlpha=.85*(1-s);for(let l=0;l<36;l++){const u=l/36*Zi,[f,h]=P(e.x+Math.cos(u)*a,e.y+Math.sin(u)*a);ke(n,f-1,h-1,l%3?2:3,2,l%2?Fo:tr)}}}});for(let n=0;n<40;n++){const r=g(0,Zi),o=Math.sqrt(Math.random())*t*.9;F(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,g(2.2,3),g(-.15,.15),g(-.15,.15),-g(1.2,2),g(1.1,1.6),[rr,Fo,tr,Mn][n%4],2,.4,!0,.99)}};q.polilla_E=e=>{const t=e.dur||3;T({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=By(e.uid);if(!i)return;const s=r*o.dur;!o.end&&s>.3&&(s>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=s);const a=o.end?Math.max(0,1-(s-o.end)/.25):1;if(a<=0)return;const l=s<.22?Ru(s/.22):1,u=.85+.15*Math.sin(S.T*8),[f,h]=P(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=h-9-3*l,y=f+d*(7+10*l),x=h+9;p2(n,y,x,10*l*u,8,.4*d,d2,h2,a),p2(n,m,p,15*l*u,13,-.45*d,h2,d2,a),n.globalAlpha=.9*a,l>.5&&(Tu(n,m+d*2,p-1,4,Jv),ke(n,m+d*2-1,p-2,2,2,Mn),ke(n,m+d*2-2,p-3,1,1,tr))}vt(!0);const c=Wt();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(S.T*3+d*.37)%1;p>.3||(c.globalAlpha=(1-p/.3)*a,ke(c,f+m*(12+(d>>1)*9)*l-1,h-20+(d>>1)*10,2,2,tr))}vt(!1)}});for(let n=0;n<18;n++){const r=g(0,Zi),o=g(1,2.2);F(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.5,.9),n%3?Mn:rr,2,.5,!0,.92)}};const y2=3.4,oh=[1,.8,.62,.45,.3,.16];let g2=null,x2=null,M2=[],b2=[];function v2(e,t,n,r,o,i,s){const a=S.T,l=Hr(o);for(let u=0;u<9;u++){const f=u/9*Zi+a*.45,h=Math.cos(f),c=Math.sin(f);if(Si(h,c,0)>0!==i)continue;const d=Math.max(2,ue((4+u%3*3)*Math.sqrt(Math.max(0,1-(h-c)*(h-c)/2))));An(t+h*r,n+c*r);const m=.75+.25*Math.sin(a*3+u*1.7),p=ue(It.x-d/2);for(let y=0;y<6;y++)e.globalAlpha=s*m*oh[y]*(i?.5:.45),e.fillStyle=y<2?tr:rr,e.fillRect(p,ue(It.y-l*(y+1)/6),d,ue(l/6)+1)}}q.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=nw(e),r=n&&n.dur||4,o=10,i=t*N.HW*Math.SQRT2,s=t*N.HH*Math.SQRT2,a=Array.from({length:o},(c,d)=>({ox:g(-.6,.6)*t,oy:g(-.6,.6)*t,w:g(.8,1.6),p:g(0,Zi),z:g(.6,2.4),ph:d}));let l=0;const u=la(e,r),f=()=>S.T-u.t0,h=c=>Math.min(1,f()/.25,c/.4);T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=$n(u);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=Ru(f()/.3),b=y2*Math.min(1,f()/.4);An(e.x,e.y);const M=It.x,v=It.y,w=Ce(t)*x;g2!==c&&(g2=c,M2=[{u0:0,fill:Gt(c,rh,3),a:.5},{u0:.7,fill:Gt(c,$i,5),a:.5},{u0:.92,fill:Gt(c,Fo,9),a:.55}]),bo(c,M,v,w,w,Hr(b),!1,M2,oh,y),v2(c,e.x,e.y,t*x,b,!1,y),Zo(u,e.x,e.y,t*1.1,12577279,.7*y)}}),T({type:"custom",layer:"ground",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=$n(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),[b,M]=P(e.x,e.y);c.globalAlpha=.13*x,c.fillStyle=$i;for(let v=-s;v<=s;v+=2){const w=i*Math.sqrt(Math.max(0,1-v*v/(s*s)));c.fillRect(ue(b-w),ue(M+v),ue(w*2),2)}c.globalAlpha=.4*x,Ka(c,b,M,ue(t*30),-.5,.5,Fo,.5),c.globalAlpha=.85*x;for(let v=0;v<40;v++){const w=v/40*Zi+y*.35,[_,A]=P(e.x+Math.cos(w)*t,e.y+Math.sin(w)*t);ke(c,_-1,A-1,2,2,v%4?Fo:tr)}}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=$n(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),b=Ru(y/.3),M=y2*Math.min(1,y/.4);An(e.x,e.y);const v=It.x,w=It.y,_=Ce(t)*b;x2!==c&&(x2=c,b2=[{u0:0,fill:Gt(c,rh,2),a:.4},{u0:.72,fill:Gt(c,$i,3),a:.45},{u0:.93,fill:Gt(c,rr,7),a:.55}]),bo(c,v,w,_,_,Hr(M),!0,b2,oh,x),v2(c,e.x,e.y,t*b,M,!0,x),c.globalAlpha=x*.85,c.fillStyle=Fo,ci(c,e.x,e.y,M,t*b,64,2,y*.5,0),c.fillStyle=tr,ci(c,e.x,e.y,M,t*b,16,3,-y*.8,1),An(e.x,e.y,M+.45+Math.sin(y*1.6)*.06),c.globalAlpha=x*.35,Tu(c,It.x,It.y,26,$i),c.globalAlpha=x,Ka(c,It.x,It.y,18,.9,.55,tr);for(const A of a){const R=y*A.w+A.p,C=e.x+A.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,I=e.y+A.oy+Math.sin(R)*.6,[O,E]=P(C,I,A.z+Math.sin(y*1.7+A.p)*.4);c.globalAlpha=x*Math.min(1,y/.4),tw(c,O,E,2,((S.T*14|0)+A.ph)%4,A.ph%3?rr:tr,Fo)}if(l<50&&Math.random()<.3){l++;const A=g(0,Zi),R=Math.sqrt(Math.random())*t;F(e.x+Math.cos(A)*R,e.y+Math.sin(A)*R,g(2.5,3.5),0,0,-g(.8,1.4),g(1.5,2.2),l%3?rr:Mn,2,0,!0,.99)}}}),et(2)};const ht=Math.round,On=Math.PI*2,di=e=>e*N.HW*Math.SQRT2,lt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},pd=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function $y(e,t,n,r){r=Math.max(1,ht(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(ht(t[0]+(n[0]-t[0])*a/i-s),ht(t[1]+(n[1]-t[1])*a/i-s),r,r)}function En(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(ht(t-l),ht(n+s),Math.max(1,ht(l*2)),i)}}function Do(e,t,n,r,o,i,s=0,a=0){for(let l=0;l<o;l++){if(a&&l%a===0)continue;const u=s+l/o*On;e.fillRect(ht(t+Math.cos(u)*r-i/2),ht(n+Math.sin(u)*r*.5-i/2),i,i)}}function rw(e,t,n,r=99){let o=null,i=r;for(const s of S.game?S.game.units:[]){if(s.dead||s.heroKey!==n)continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}function Ul(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?lt.skinD:i===1?lt.skin:lt.skinL;for(let s=0;s<=o;s++){const a=n+(r-n)*s/o,l=ht(i===0?a+3:i===1?a:Math.max(1,a*.35)),u=i===2?-a*.25:0;e.fillRect(ht(t[s][0]-l/2),ht(t[s][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const s=n+(r-n)*i/o,a=Math.max(2,ht(s*.4)),l=ht(t[i][0]),u=ht(t[i][1]+s*.3);e.fillStyle=lt.sucker,e.fillRect(l-(a>>1),u-(a>>1),a,a),a>2&&(e.fillStyle=lt.skinD,e.fillRect(l,u,1,1))}}}function Hy(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],s=Math.hypot(o,i)||1,a=-i/s,l=o/s,u=Math.max(4,Math.ceil(s/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,y=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+a*y,e[1]+i*p+l*y])}let[h,c]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);h+=Math.cos(d)*p,c+=Math.sin(d)*p,f.push([h,c])}return f}q.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,s=Array.from({length:22},(l,u)=>({a:r+g(-.9,.9)*o,d:i*g(.45,1),t0:g(0,.12),w:g(0,6),sz:g(6,10),bio:u%4===0}));T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const h of s){const c=(f-h.t0)/.42;if(c<0||c>1.15)continue;const d=1-Math.pow(1-Math.min(1,c),2),m=h.d*d,p=Math.sin(d*On+h.w)*.2*d,y=t+Math.cos(h.a)*m-Math.sin(h.a)*p,x=n+Math.sin(h.a)*m+Math.cos(h.a)*p,[b,M]=P(y,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),v=h.sz*(1-.4*d);l.globalAlpha=c>1?(1.15-c)/.15:1,l.fillStyle=lt.ink,En(l,b,M,v,v*.75,2),l.fillStyle=lt.inkV,En(l,b-v*.3,M-v*.3,v*.4,v*.3,1),h.bio&&(l.fillStyle=lt.bio,l.fillRect(ht(b+v*.2),ht(M),2,2))}}});const a=s.slice(0,9);T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const h of a){const c=f.t-h.t0-.42;if(c<0)continue;const d=Math.min(1,c*10),m=Math.min(1,(2.6-f.t)/.6),[p,y]=P(t+Math.cos(h.a)*h.d,n+Math.sin(h.a)*h.d),[x,b]=P(t,n),M=x-p,v=b-y,w=Math.hypot(M,v)||1;l.globalAlpha=.85*m;for(let A=0;A<4;A++){const R=(h.sz+2)*(1-A*.22)*d;l.fillStyle=A?lt.inkP:lt.ink,En(l,p+M/w*A*7*d,y+v/w*A*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(S.T*4+h.w*3);l.globalAlpha=m*_,l.fillStyle=lt.bio,l.fillRect(ht(p-3),ht(y-1),2,2),l.fillRect(ht(p+4),ht(y+1),2,1),h.bio&&(l.fillStyle=lt.bioL,l.fillRect(ht(p),ht(y-2),1,1))}}});for(let l=0;l<12;l++){const u=r+g(-1,1)*o,f=g(2,4.5);F(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,g(.5,1.8),g(.35,.6),l%3?lt.ink:lt.bio,l%3?3:2,7,l%3===0,.93)}};const za=[];function ow(e){let t=null,n=1.3;for(const r of za){if(r.done||S.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}const Wy=e=>P(e.x,e.y,.35);function qy(e,t,n){T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=st(e);if(!i)return;const s=Wy(i),a=P(t,n,.45),l=1-o*o;l<.05||Ul(r,Hy(s,[s[0]+(a[0]-s[0])*l,s[1]+(a[1]-s[1])*l],S.T,1+o*2),10,3)}})}q.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=za.length-1;o>=0;o--)S.T-za[o].t>3&&za.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1};za.push(r),T({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,s){if(r.done){s.t=s.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,qy(r.uid,r.lx,r.ly),s.t=s.dur+1)}});for(let o=0;o<8;o++)F(e.x+t*.3,e.y+n*.3,.3,t*g(.5,1.5)+g(-.6,.6),n*g(.5,1.5)+g(-.6,.6),g(.5,1.5),.4,o%2?lt.sucker:lt.skin,2,5,!1)};Ge.pulpo_W=(e,t,n,r,o,i)=>{const s=ow(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=S.T);const a=s?st(s.uid):t.src||rw(t.x,t.y,"pulpo",9),l=a&&!a.dead?Wy(a):[n-Math.cos(o)*70,r-Math.sin(o)*70];Ul(e,Hy(l,[n,r],i),11,3),Math.random()<.25&&F(t.x,t.y,.4,0,0,-.3,.4,lt.bio,2,3,!0)};q.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?st(e.uid):null,o=r?r.team:null;let i=null,s=1.3;for(const c of S.game?S.game.units:[]){if(c.dead||o&&c.team===o||r&&c===r||c.kind==="tower"||c.kind==="nexus")continue;const d=Math.hypot(c.x-t,c.y-n);d<s&&(s=d,i=c)}const a=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const c of za)c.uid===e.uid&&S.T-c.t<1.5&&(!f||c.t>f.t)&&(f=c);f&&!f.done&&(f.done=!0,qy(f.uid,t,n));const h=c=>{const d=a?st(a):null;return d&&!d.dead?[d.x,d.y]:[c.x,c.y]};T({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),[x,b]=P(p,y),M=Math.min(1,m.t/.12),v=d>.8?(1-d)/.2:1;c.globalAlpha=.9*v,c.fillStyle=lt.ink,En(c,x,b,30*M,13*M,2),c.fillStyle=lt.inkP,En(c,x,b,20*M,8*M,2),c.fillStyle=lt.bio,Do(c,x,b,30*M,18,2,S.T*2,3)}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),M=S.T;c.globalAlpha=x;const v=[];for(let w=0;w<=16;w++){const _=w/16,A=_*1.15*b,R=Math.max(0,_-.6)/.4,[C,I]=P(p,y,A);v.push([C+u*(20-R*26)+Math.sin(M*5+_*4)*2,I-R*6])}Ul(c,v,12,3);for(let w=0;w<2;w++){const[,_]=P(p,y,(.22+w*.3)*b),[A]=P(p,y),R=19-2*Math.sin(M*9+w*2),C=1+.08*Math.sin(M*9);for(let I=0;I<=12;I++){const O=.1*Math.PI+I/12*.8*Math.PI,E=A+Math.cos(O)*R*C,U=_+Math.sin(O)*7;c.fillStyle=lt.skinD,c.fillRect(ht(E)-4,ht(U)-4,8,8),c.fillStyle=lt.skin,c.fillRect(ht(E)-3,ht(U)-3,6,5),I%3===1&&(c.fillStyle=lt.sucker,c.fillRect(ht(E)-1,ht(U)+1,3,2))}}}});for(let c=0;c<10;c++){const d=Math.random()*On,m=g(1,2.4);F(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,g(1,2.5),.5,c%3?lt.ink:lt.bio,3,9,c%3===0)}et(pd(e)?3:1)};function iw(e,t,n,r,o,i){if(r<.05)return;const s=[];for(let a=0;a<=9;a++){const l=a/9,[u,f]=P(t,n,l*r*.75),h=Math.max(0,l-.55)/.45;s.push([u+Math.sin(o*3+i+l*3)*4*l+h*h*10,f+h*h*8])}Ul(e,s,8,2)}q.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(a=>({a:a/4*On+g(-.3,.3),d:g(.45,.75),ph:Math.random()*On})),s=a=>Math.min(1,a/.25,(o-a)/.35);T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l,u){const f=Math.max(0,s(u.t)),h=Math.min(1,u.t/.3),[c,d]=P(t,n),m=di(r)*h,p=u.t;a.globalAlpha=.6*f,a.fillStyle=lt.navy,En(a,c,d,m,m*.5,3),a.globalAlpha=.65*f,a.fillStyle=lt.deep,En(a,c,d,m*.62,m*.31,3);for(let y=0;y<3;y++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,M=1-b,v=y/3*On+p*2.2+b*5,w=c+Math.cos(v)*m*(.08+.9*M),_=d+Math.sin(v)*m*(.08+.9*M)*.5;a.globalAlpha=f*(.35+.65*b),a.fillStyle=M>.6?lt.water:M>.3?lt.bio:lt.bioL;const A=M>.5?4:3;a.fillRect(ht(w)-(A>>1),ht(_)-1,A,2+(M>.5?1:0))}a.globalAlpha=.9*f,a.fillStyle=lt.foam,Do(a,c,d,m*.97,56,3,p*1.4,4),a.fillStyle=lt.water,Do(a,c,d,m*.85,40,2,p*1.9,3),a.globalAlpha=f,a.fillStyle=lt.inkV,En(a,c,d,19*h,9*h,1),a.fillStyle=lt.abyss,En(a,c,d,15*h,7*h,1)}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l,u){const f=Math.max(0,s(u.t)),h=S.T;a.globalAlpha=f;for(const c of i){const d=c.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+c.ph))*1.1;iw(a,t+Math.cos(d)*r*c.d,n+Math.sin(d)*r*c.d,m,h,c.ph)}for(let c=0;c<6;c++){const d=u.t*1.5+c/6,m=Math.floor(d),p=d-m,y=W(m*11+c)*On,x=r*.3*W(m*5+c*7),[b,M]=P(t+Math.cos(y)*x,n+Math.sin(y)*x,p*.9),v=2+ht(p*3);a.globalAlpha=f*(1-p),a.fillStyle=lt.foam,a.fillRect(ht(b)-v,ht(M),1,2),a.fillRect(ht(b)+v,ht(M),1,2),a.fillRect(ht(b),ht(M)-v,2,1),a.fillRect(ht(b),ht(M)+v,2,1)}}}),T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(a,l){const[u,f]=P(t,n);a.globalAlpha=1-l,a.fillStyle=lt.foam,Do(a,u,f,di(r)*(.3+l*.9),40,4)}});for(let a=0;a<16;a++){const l=a/16*On;F(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,g(1,2.5),.5,a%3?lt.foam:lt.bio,3,8,a%3===0)}};const ih=new Map;function Hs(e,t,n){const r=st(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function aw(e,t,n,r,o){const s=10*r;if(s<1){e.fillStyle=lt.inkL,e.fillRect(ht(t-26),ht(n),26*2,2);return}for(let l=-s;l<s;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/s,2)));e.fillStyle=lt.inkL,e.fillRect(ht(t-u-2),ht(n+l),ht(u*2+4),2),e.fillStyle=lt.eyeD,e.fillRect(ht(t-u),ht(n+l),ht(u*2),2)}const a=Math.sin(o*.8)*6;e.fillStyle=lt.eye,En(e,t+a,n,Math.min(11,26),Math.min(9,s),2),e.fillStyle=lt.abyss,e.fillRect(ht(t+a-8),ht(n-2),16,Math.max(2,ht(5*r))),e.fillStyle="#ffffff",e.fillRect(ht(t+a-6),ht(n-Math.min(6,s-1)),3,2)}const Ro=2.5,Dn=.5,Li=.84,sw=[1,.9,.75,.6,.45],lw=[.85,.75,.62,.5,.38];let Zf=null,Jf=null,w2=null,S2=null;const _2=e=>1-(1-e)*(1-e);function A2(e,t,n,r,o,i,s,a){if(o<.05)return;const l=r*Dn,u=r*(Dn+(Li-Dn)*Math.min(1,o/Ro)),f=(u-l)/o;for(let h=0;h<14;h++){const c=h/14*On;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+h*.37)%1;if(p>.5)continue;const y=c+i*(2.6-1.3*m)+m*2.4,x=Math.cos(y),b=Math.sin(y),M=l+(u-l)*m;Si(x,b,-f)>0===a&&(An(t+x*M,n+b*M,m*o),e.globalAlpha=s*(.45+.55*(1-p*2))*(a?.9:.7),e.fillStyle=m<.3?lt.mag:m<.65?lt.bio:lt.water,e.fillRect(ht(It.x)-3,ht(It.y)-1,m<.3?4:6,3))}}}function uw(e){const t={ended:!1,endT:0};ih.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,s=(e.dur||3)+.5,a=Array.from({length:44},()=>({a:Math.random()*On,off:Math.random(),sp:g(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*On,off:Math.random(),sz:ht(g(4,7))})),u=[0,1,2,3,4].map(h=>({a:h/5*On+g(-.2,.2),ph:Math.random()*On}));T({type:"custom",layer:"ground",dur:s,x:r,y:o,draw(h,c,d){const m=Hs(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=P(r,o),b=di(i)*p;h.globalAlpha=.4*m,h.fillStyle=lt.inkP,En(h,y,x,b*.95,b*.475,3),h.globalAlpha=.7*m,h.fillStyle=lt.ink,En(h,y,x,b*.52,b*.26,3),h.globalAlpha=m,h.fillStyle=lt.abyss,En(h,y,x,b*.27,b*.135,2);for(const M of a){const v=(M.off+d.t*M.sp)%1,w=1-v,_=b*(.27+.73*w),A=M.a+v*v*4+d.t*.8,R=y+Math.cos(A)*_,C=x+Math.sin(A)*_*.5,I=y+Math.cos(A-.14)*_*1.04,O=x+Math.sin(A-.14)*_*.52;h.globalAlpha=m*(.3+.7*v),h.fillStyle=w>.6?lt.water:w>.3?lt.bio:lt.mag,$y(h,[I,O],[R,C],w>.5?2:3)}h.globalAlpha=.8*m,h.fillStyle=lt.inkV,Do(h,y,x,b,64,3,-d.t*.6,4)}});const f={nl:0};T({type:"custom",layer:"ground",dur:s,x:r,y:o,draw(h,c,d){const m=Hs(t,n,d);if(m<=0)return;const p=_2(Math.min(1,d.t/.55))*(t.ended?m:1);An(r,o);const y=It.x,x=It.y,b=Hr(Ro*p);(!Zf||w2!==h)&&(w2=h,Zf=[{u0:0,fill:Gt(h,lt.deep,11),a:.7},{u0:.45,fill:Gt(h,lt.water,10),a:.7},{u0:.78,fill:Gt(h,lt.bio,9),a:.7},{u0:.93,fill:Gt(h,lt.bioL,12),a:.75}]),bo(h,y,x,Ce(i*Dn),Ce(i*(Dn+(Li-Dn)*p)),b,!1,Zf,sw,m),A2(h,r,o,i,Ro*p,d.t,m,!1),h.globalAlpha=.9*m,h.fillStyle=lt.foam,ci(h,r,o,Ro*p,i*(Dn+(Li-Dn)*p),110,4,-d.t*1.3,-1),h.fillStyle=lt.water,ci(h,r,o,Ro*p-.08,i*(Dn+(Li-Dn)*p)*.97,60,3,-d.t*1.9,-1),Zo(f,r,o,i*1.05,4911328,.55*m)}}),T({type:"custom",layer:"top",add:!0,dur:s,x:r,y:o,draw(h,c,d){const m=Hs(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=P(r,o,.04),b=di(i)*.28*p,M=S.T;for(let v=0;v<44;v++){const w=v/44*On+M*2.5,_=.6+.4*Math.sin(M*20+v*1.7);h.globalAlpha=m*_,h.fillStyle=v%2?lt.bio:lt.mag,h.fillRect(ht(y+Math.cos(w)*b)-1,ht(x+Math.sin(w)*b*.5)-1,3,3)}h.globalAlpha=m*.45,h.fillStyle=lt.bioL;for(let v=0;v<18;v++){const w=Math.PI+v/17*Math.PI;h.fillRect(ht(y+Math.cos(w)*b*1.15),ht(x-14+Math.sin(w)*b*.35),2,2)}}}),T({type:"custom",layer:"top",dur:s,x:r,y:o,draw(h,c,d){const m=Hs(t,n,d);if(m<=0)return;const p=S.T,y=Math.min(1,d.t/.5)*(t.ended?m:1);h.globalAlpha=m;for(const w of l){const _=(w.off+d.t*.4)%1,A=1-_,R=w.a+_*5,[C,I]=P(r+Math.cos(R)*i*.95*A,o+Math.sin(R)*i*.95*A,.05+.35*Math.sin(_*Math.PI)),O=Math.max(2,ht(w.sz*(.35+.65*A)));h.fillStyle=lt.ink,h.fillRect(ht(C)-(O>>1)-1,ht(I)-(O>>1)-1,O+2,O+2),h.fillStyle=lt.rock,h.fillRect(ht(C)-(O>>1),ht(I)-(O>>1),O,O),h.fillStyle=lt.rockL,h.fillRect(ht(C)-(O>>1),ht(I)-(O>>1),Math.max(1,O>>1),1)}const x=u.map(w=>({t:w,a:w.a+d.t*.3})).sort((w,_)=>Math.cos(w.a)+Math.sin(w.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:w,a:_}of x){const A=[];for(let R=0;R<=18;R++){const C=R/18,I=i*(.92-.42*C*C),O=_+Math.sin(p*2+w.ph+C*3)*.12*C,E=Math.sin(C*Math.PI*.8)*1.9*y-Math.max(0,C-.8)*1.2*y;A.push(P(r+Math.cos(O)*I,o+Math.sin(O)*I,Math.max(0,E)))}Ul(h,A,15*y+2,3)}const b=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,v]=P(r,o,.3);aw(h,M,v,b,p)}}),T({type:"custom",layer:"top",dur:s,x:r,y:o,draw(h,c,d){const m=Hs(t,n,d);if(m<=0)return;const p=_2(Math.min(1,d.t/.55))*(t.ended?m:1);An(r,o);const y=It.x,x=It.y,b=Hr(Ro*p);(!Jf||S2!==h)&&(S2=h,Jf=[{u0:0,fill:Gt(h,lt.water,4),a:.55},{u0:.5,fill:Gt(h,lt.water,6),a:.6},{u0:.8,fill:Gt(h,lt.bio,8),a:.65},{u0:.93,fill:Gt(h,lt.bioL,12),a:.75}]),bo(h,y,x,Ce(i*Dn),Ce(i*(Dn+(Li-Dn)*p)),b,!0,Jf,lw,m),A2(h,r,o,i,Ro*p,d.t,m,!0),h.globalAlpha=m,h.fillStyle=lt.foam,ci(h,r,o,Ro*p,i*(Dn+(Li-Dn)*p),110,4,-d.t*1.3,1),h.fillStyle=lt.bioL,ci(h,r,o,Ro*p+.04,i*(Dn+(Li-Dn)*p)*.98,24,2,d.t*2.1,1)}}),et(pd(e)?6:2)}q.pulpo_R=e=>{if(e.type==="channel"){uw(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){T({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[s,a]=P(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=lt.mag,Do(o,s,a,di(r)*(.25+.75*l),48,3,i*3),o.fillStyle=lt.bioL,Do(o,s,a,di(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*On,s=r*g(.6,1);F(t+Math.cos(i)*s,n+Math.sin(i)*s,.2,-Math.cos(i)*s*1.6,-Math.sin(i)*s*1.6,.3,.55,o%2?lt.inkV:lt.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=ih.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=S.T),ih.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)F(t+g(-.6,.6),n+g(-.6,.6),.2,g(-1,1),g(-1,1),g(.5,1.5),.6,i%2?lt.ink:lt.inkV,4,2,!1);return}T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.3);if(s<.35){const u=ht(30*(1-s/.35))+2;i.fillStyle=lt.bioL,i.fillRect(a-u,l-1,u*2,3),i.fillRect(a-1,l-u,3,u*2)}else{const u=(s-.35)/.65;i.globalAlpha=1-u,i.fillStyle=lt.mag,Do(i,a,l+20,di(r)*u,56,4),i.fillStyle=lt.bio,Do(i,a,l+20,di(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const s=Math.random()*On,a=g(2,5);F(t,n,.3,Math.cos(s)*a,Math.sin(s)*a,g(1.5,3.5),g(.5,.9),[lt.ink,lt.inkV,lt.bio,lt.mag][i%4],i%3?3:4,9,i%4>1,.94)}et(pd(e)?8:3)}};Ge.pulpo_A=(e,t,n,r,o,i)=>{const s=7+Math.sin(i*18)*1.2,a=Math.cos(o),l=Math.sin(o);e.fillStyle=lt.ink,En(e,n-a*11,r-l*11,3,3,1),En(e,n-a*18,r-l*18,2,2,1),e.fillStyle=lt.ink,En(e,n,r,s+1,s*.8+1,2),e.fillStyle=lt.inkV,En(e,n,r,s-1,s*.8-1,2),e.fillStyle=lt.inkL,e.fillRect(ht(n-3),ht(r-4),3,2),e.fillStyle=lt.bio,e.fillRect(ht(n+2),ht(r+1),2,2),Math.random()<.3&&F(t.x,t.y,t.z||.45,0,0,-.2,.35,lt.ink,2,5,!1)};qe.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*On;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[s,a]=P(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=lt.ink,En(o,s,a,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*On,h=(u%2?13:19)*l;o.fillStyle=lt.ink,$y(o,[s,a],[s+Math.cos(f)*h,a+Math.sin(f)*h*.75],4),o.fillStyle=lt.inkV,o.fillRect(ht(s+Math.cos(f)*(h+4))-2,ht(a+Math.sin(f)*(h+4)*.75)-2+i*10,4,4)}o.fillStyle=lt.bio,o.fillRect(ht(s-3),ht(a-2),2,2),o.fillRect(ht(s+4),ht(a+2),2,2)}});for(let o=0;o<6;o++)F(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(.8,2),.4,o%3?lt.ink:lt.bio,2,8,o%3===0)};const Ht=Math.round,xo=Math.PI*2,Ot={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},tc=e=>e*N.HW*Math.SQRT2;function Uo(e,t,n,r){r=Math.max(1,Ht(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(Ht(t[0]+(n[0]-t[0])*a/i-s),Ht(t[1]+(n[1]-t[1])*a/i-s),r,r)}function Qa(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(Ht(t-l),Ht(n+s),Math.max(1,Ht(l*2)),i)}}function ah(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=Ht(n-s*o/2),u=Ht(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<a;h++)for(let c=0;c<s;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function _s(e,t,n,r,o,i,s=0,a=0){for(let l=0;l<o;l++){if(a&&l%a===0)continue;const u=s+l/o*xo;e.fillRect(Ht(t+Math.cos(u)*r-i/2),Ht(n+Math.sin(u)*r*.5-i/2),i,i)}}const Ws=new Map;function fw(e){if(Ws.has(e))return!1;if(Ws.size>300)for(const[t,n]of Ws)S.T-n>4&&Ws.delete(t);return Ws.set(e,S.T),!0}function cw(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||We(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const T2=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],hw=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Vy(e,t,n,r){ah(e,T2,t+1,n+1,r,{g:Ot.deep,v:Ot.deep}),ah(e,T2,t,n,r,{g:Ot.pad,v:Ot.moss})}function dw(e,t){const n=Math.random()*6;T({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,s]=P(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=Ot.waterD,_s(r,i,s,8+o*14,10,2,n,3),Vy(r,i,s+Ht(Math.sin(o*9+n)),o<.55?2:1)}})}function mw(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),s=l=>[t+o*l,n+i*l];e.fillStyle=Ot.ink,Uo(e,s(-11),s(11),5),e.fillStyle=Ot.moss,Uo(e,s(-8),s(-1),3),e.fillStyle="#d8e2ea",Uo(e,s(0),s(8),3),e.fillStyle="#ffffff",Uo(e,s(7),s(11),2);const a=s(-11);e.fillStyle="#c8a040",e.fillRect(Ht(a[0]-2),Ht(a[1]-2),4,4),e.fillStyle=Ot.ink,e.fillRect(Ht(a[0]-1),Ht(a[1]-1),2,2)}function Yy(e,t){T({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=Ot.foam,_s(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=Ot.water,_s(n,o,i,3+r*16,10,2)}}),T({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),s=Ht(12*(1-r))+2;n.fillStyle=Ot.padL,n.fillRect(o-s,i-1,s*2,3),n.fillRect(o-1,i-s,3,s*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*xo,o=g(.8,2);F(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,g(1.5,3),.5,n%3?Ot.water:Ot.padL,2,9,!1,.95)}}const qs=new Map;function pw(e){let t=qs.get(e.id);if(!t&&(t={p:[],drop:0,seen:S.T},qs.set(e.id,t),qs.size>40))for(const[n,r]of qs)S.T-r.seen>2&&qs.delete(n);return t.seen=S.T,t}q.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,s){const[a,l]=P(r,o,.55),u=Ht(9*(1-s))+2;i.fillStyle=Ot.pad;for(let f=-u;f<=u;f+=2){const h=u-Math.abs(f);i.fillRect(a-h,l+f,h*2+1,2)}i.fillStyle="#ffffff",i.fillRect(a-u-3,l,u*2+6,1),i.fillRect(a,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)F(r,o,.5,t*g(2,4)+g(-.7,.7),n*g(2,4)+g(-.7,.7),g(.6,1.6),.4,i%2?Ot.water:Ot.padL,2,6,!1,.9)};Ge.rana_Q=(e,t,n,r,o,i)=>{const s=t.z||.45,a=pw(t);a.p.unshift([t.x,t.y]),a.p.length>7&&(a.p.length=7),i-a.drop>.065&&(a.drop=i,dw(t.x,t.y)),vt(!0);const l=Wt();for(let u=1;u<a.p.length;u++)l.globalAlpha=.75*(1-u/a.p.length),l.fillStyle=u<3?Ot.padL:Ot.pad,Uo(l,P(a.p[u-1][0],a.p[u-1][1],s),P(a.p[u][0],a.p[u][1],s),Math.max(2,7-u));if(l.globalAlpha=1,vt(!1),mw(e,n,r,i*26),t.id!=null)for(const u of cw(t))fw("rq"+t.id+":"+u.id)&&Yy(u.x,u.y)};function yw(e,t,n){const r=Array.from({length:5},(i,s)=>({a:s/5*xo+g(-.3,.3),d:n*g(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,s)=>({a:s/12*xo,h:g(26,44),w:Math.random()<.5?4:6}));T({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,s,a){if(!a.fired){a.fired=!0,et(4),Ei({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let h=0;h<34;h++){const c=Math.random()*xo,d=g(1,3.2);F(e+Math.cos(c)*.3,t+Math.sin(c)*.3,.15,Math.cos(c)*d,Math.sin(c)*d,g(2.5,5),g(.5,.8),h%4?Ot.foam:Ot.water,3,12,!1,.97)}for(let h=0;h<6;h++)F(e+g(-.6,.6),t+g(-.6,.6),.1,g(-.4,.4),g(-.4,.4),g(1,2),.7,Ot.mud,4,8,!1)}const[l,u]=P(e,t),f=tc(n);i.globalAlpha=.35*(1-s),i.fillStyle=Ot.waterD,Qa(i,l,u,f*.75,f*.375,2);for(let h=0;h<3;h++){const c=s*1.3-h*.15;c<=0||c>=1||(i.globalAlpha=1-c,i.fillStyle=h===0?Ot.foam:Ot.water,_s(i,l,u,f*(.2+c*.95),30,3,h,h===0?0:5))}i.globalAlpha=Math.min(1,(1-s)*2.5);for(const h of r){const c=tc(h.d)*(.6+s*.4);Vy(i,l+Math.cos(h.a)*c,u+Math.sin(h.a)*c*.5+Math.sin(s*10+h.ph)*1.5,2)}s>.08&&ah(i,hw,l,u-4,s<.2?2:3,{g:Ot.moss,p:Ot.pink,P:Ot.pinkL,y:Ot.eye})}}),T({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,s){const[a,l]=P(e,t),u=tc(n)*(.35+s*.25),f=Math.sin(Math.PI*Math.min(1,s*1.2));i.globalAlpha=Math.min(1,(1-s)*2);for(const h of o){const c=a+Math.cos(h.a)*u,d=l+Math.sin(h.a)*u*.5,m=Ht(h.h*f),p=Math.cos(h.a)*s*10;m<2||(i.fillStyle=Ot.waterD,i.fillRect(Ht(c-h.w/2+p*.5),Ht(d-m),h.w,m),i.fillStyle=Ot.water,i.fillRect(Ht(c-h.w/2+p*.5),Ht(d-m),h.w-2,m-2),i.fillStyle=Ot.foam,i.fillRect(Ht(c-h.w/2+p-1),Ht(d-m-3),h.w+2,4))}}})}q.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,s=1.7,a=r-t,l=o-n,u=Math.hypot(a,l)||1;T({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,h){const[c,d]=P(t,n);f.globalAlpha=1-h,f.fillStyle=Ot.waterD,_s(f,c,d,10+h*34,18,3,0,3),f.fillStyle=Ot.foam,_s(f,c,d,6+h*22,12,2,.3,4)}});for(let f=0;f<12;f++)F(t,n,.15,-a/u*g(1,2.5)+g(-.8,.8),-l/u*g(1,2.5)+g(-.8,.8),g(1.5,3),.5,f%3?Ot.mud:Ot.water,3,9,!1);T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,h){const c=Math.min(1,h*(i+.25)/i),d=Math.max(0,c-.45),m=h>.75?(1-h)*4:1;for(let p=d;p<=c;p+=.05){const[y,x]=P(t+a*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,c-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=Ot.deep,f.fillRect(Ht(y)-3,Ht(x)-3,6,6),f.fillStyle=b>.7?Ot.padL:Ot.pad,f.fillRect(Ht(y)-2,Ht(x)-2,4,4)}}}),T({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,h,c){c.go||(c.go=!0,yw(r,o,s))}})};q.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,s)=>{const a=s/9*xo+g(-.3,.3),l=s===0?0:g(.3,.85);return{x:t+Math.cos(a)*l,y:n+Math.sin(a)*l,r:g(14,22),z:g(.15,.6),up:g(.2,.5),col:[Ot.smokeA,Ot.smokeB,Ot.smokeC][s%3],dl:g(0,.12)}}),o=[0,3,6].map((i,s)=>({p:r[i+1],t0:.15+s*.1,blink:g(.3,.6)}));T({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.2),u=Ht(14*(1-s))+3;i.fillStyle="#fff6c0",i.fillRect(a-u,l-2,u*2,4),i.fillRect(a-2,l-u,4,u*2),i.fillStyle=Ot.padL,i.fillRect(a-u/2,l-u/2,u,u)}}),T({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,s){const a=s*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(a-l.dl)/1.3));if(u<=0)continue;const[f,h]=P(l.x,l.y,l.z+l.up*u),c=Ht(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Qa(i,f+2,h+3,c,c*.8,3),i.fillStyle=l.col,Qa(i,f,h,c,c*.8,3),i.fillStyle="#c8d4b0",Qa(i,f-c*.3,h-c*.35,c*.35,c*.25,2)}for(const l of o){const u=a-l.t0;if(u<0||u>.95)continue;const[f,h]=P(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const c=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=Ht(f+d*6)-3,p=Ht(h)-3;if(i.fillStyle=Ot.deep,i.fillRect(m-1,p-1,8,c?3:7),c){i.fillStyle=Ot.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=Ot.eye,i.fillRect(m,p,6,5),i.fillStyle=Ot.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const s=Math.random()*xo,a=g(1,2.6);F(t,n,.3,Math.cos(s)*a,Math.sin(s)*a,g(1,2.5),.6,i%2?Ot.ink:Ot.moss,2,7,!1,.92)}};function gw(e,t,n,r){T({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const s=P(e,t,.35),a=P(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?Ot.ink:Ot.moss;for(let h=u;h<=l;h+=.03){const c=Ht((2+8*Math.sin(Math.PI*h))*(1-u*.6))+(f?0:3),d=s[0]+(a[0]-s[0])*h,m=s[1]+(a[1]-s[1])*h+Math.sin(h*14)*1.5;o.fillRect(Ht(d-c/2),Ht(m-c/2),c,c)}}}});for(let o=0;o<10;o++){const i=Math.random();F(e+(n-e)*i,t+(r-t)*i,.35,g(-.6,.6),g(-.6,.6),g(.2,1),.5,Ot.ink,3,6,!1)}}function R2(e,t,n,r,o,i,s){const a=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?Ot.ink:f===1?"#b8ffd0":"#ffffff";const h=f===0?2:0,c=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*s,p=Math.max(1,Ht(c*(1-Math.abs(d/u*2-1))));e.fillRect(Ht(t+a*m*o/2-p/2+h),Ht(n+l*m*o/2-p/2+h),p,p)}}}function xw(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+g(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));T({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const s=i*.5,[a,l]=P(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.3)continue;const h=Math.min(1,f/.05),c=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,c),R2(o,a+u.ox,l+u.oy,u.a,u.len,Ht(6*c)+1,h),R2(o,a+u.ox,l+u.oy,u.a+Math.PI/2,u.len,Ht(6*c)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const s=i*.4,[a,l]=P(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.1)continue;const h=Ht(16*(1-f/.1))+2;o.fillStyle=Ot.padL,o.fillRect(a+u.ox-h,l+u.oy-h,h*2,h*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*xo,i=g(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:g(5,11),drips:[g(-1,1),g(-1,1),g(-1,1)]}});T({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const s of r){const[a,l]=P(e+s.dx,t+s.dy),u=s.r*Math.min(1,i*12);o.fillStyle=Ot.inkP,Qa(o,a,l,u,u*.5,2),o.fillStyle=Ot.ink,Qa(o,a-1,l-1,u*.6,u*.3,2);for(const f of s.drips)o.fillRect(Ht(a+f*u*1.8),Ht(l+f*u*.6),3,2);o.fillStyle=Ot.moss,o.fillRect(Ht(a+u*.4),Ht(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*xo,s=g(1.5,4.5);F(e,t,.5,Math.cos(i)*s,Math.sin(i)*s,g(1,3),g(.4,.7),o%5?Ot.ink:Ot.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*xo;F(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,Ot.padL,2,0,!0)}et(8)}q.rana_R=e=>{if(e.type==="blink"){gw(e.x,e.y,e.ex??e.x,e.ey??e.y);return}xw(e.x,e.y)};qe.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[s,a]=P(t,n,.5),l=Math.min(1,i*4),u=[s-9*r,a-3],f=[s-2*r,a+6],h=[s+13*r,a-11];o.globalAlpha=i<.5?1:(1-i)*2;const c=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?c:[f[0]+(h[0]-f[0])*(l-.35)/.65,f[1]+(h[1]-f[1])*(l-.35)/.65];o.fillStyle=Ot.moss,Uo(o,u,c,5),l>=.35&&Uo(o,f,d,5),o.fillStyle="#ffffff",Uo(o,u,c,2),l>=.35&&Uo(o,f,d,2)}});for(let o=0;o<5;o++)F(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(1,2.2),.35,o%2?Ot.water:Ot.padL,2,8,!1)};q.rana_Q_hit=e=>Yy(e.x,e.y);const Mw="#7a879c",bw="#363e50",vw="#c9d3e2",C2="#e8b858",ww="#ffa040",jy="#f2e8d2",Ol="#cdbb9a",yd="#a08f72",Ky="#6f6250",As="#33241a",Sw="#8a7356",Qy="#9a948a",Zy="#7a7468",Jy="#5e584e",_w="#c4beb2",Aw="#ffe2a0",Tw="#d89a3a",Rw="#fff8e6",Cw="#ff5a1a",Xe=Math.round,ec=Math.PI*2;function Rn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Xe(t),Xe(n),r,o)}function c0(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(Xe(t+(r-t)*l/a-i/2),Xe(n+(o-n)*l/a-i/2),i,i)}function P2(e,t,n,r,o){const[i,s]=P(t,n),a=r*N.HW*Math.SQRT2,l=a*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=a*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(Xe(i-f),Xe(s+u),Xe(f*2),2)}}function tg(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const eg=e=>{const t=st(e);return t&&!t.dead&&!We(t)?t:null},Cu=()=>[Qy,Zy,Jy,yd][Math.random()*4|0];function Pw(e,t,n,r,o){if(t=Xe(t)-6,n=Xe(n)-5,Rn(e,t,n,12,10,bw),Rn(e,t+1,n+1,10,8,Mw),Rn(e,t+1,n+1,10,2,vw),Rn(e,t+2,n+6,2,2,o),Rn(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Rn(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const Iw=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],Ow=[Aw,Tw,Rw,Cw];function nc(e,t,n,r,o){t=Xe(t),n=Xe(n);for(const[i,s,a,l,u]of Iw){const f=o>0?i:-i-a;e.fillStyle=Ow[u],e.fillRect(t+f*r,n+s*r,a*r,l*r)}}qe.rino=e=>{T({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.4),i=Xe(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let s=0;s<=i;s++){const a=Math.PI*.75-s*.16;Rn(t,r-4+Math.cos(a)*16-1,o+6-Math.sin(a)*18-1,s>i-3?2:3,s>i-3?2:3,s>i-2?"#ffffff":jy)}}});for(let t=0;t<3;t++)F(e.x,e.y,.3,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,Cu(),3,10,!1,.95);for(let t=0;t<2;t++)F(e.x+g(-.2,.2),e.y+g(-.2,.2),.1,g(-.4,.4),g(-.4,.4),.5,.5,Ol,5,0,!1,.9);et(1.5)};q.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,a=-i/s,l=o/s,u=o/s,f=i/s,[h,c]=tg(o,i),d=Math.max(4,Math.ceil(s*4)),m=Array.from({length:d+1},(M,v)=>g(-.06,.06)+(v%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:g(.15,.35)}:null),y=Array.from({length:8},(M,v)=>({k:(v+.5)/8,o:g(-.35,.35),r:Array.from({length:4},()=>[g(-10,6),g(-8,2),Xe(g(6,12)),Xe(g(5,8)),[Ol,yd,Ol,Ky][Math.random()*4|0]])}));let x=0,b=!1;T({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r),R=Math.floor(A*d);M.globalAlpha=.8*Math.min(1,(w.dur-_)/.6);for(const C of[-.3,.3]){const I=C>0?1:-1;let[O,E]=P(e.x+a*C,e.y+l*C);for(let U=1;U<=R;U++){const G=U/d,j=C+m[U]*I,[L,k]=P(e.x+o*G+a*j,e.y+i*G+l*j);c0(M,O,E+1,L,k+1,2,Sw),c0(M,O,E,L,k,2,As);const D=p[U];if(D&&D.s===I){const[$,H]=P(e.x+o*G+a*(j+I*D.l)+u*D.l*.5,e.y+i*G+l*(j+I*D.l)+f*D.l*.5);c0(M,L,k,$,H,1,As)}O=L,E=k}}}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r);for(;x<18*A;){x++;const R=Math.random()*A;F(e.x+o*R+g(-.3,.3),e.y+i*R+g(-.3,.3),.1,-u*g(.5,2)+g(-1,1),-f*g(.5,2)+g(-1,1),g(2,4),g(.5,.8),Cu(),3,12,!1,.95)}if(_>=r&&!b){b=!0,et(5);for(let R=0;R<12;R++){const C=Math.atan2(f,u)+g(-.9,.9),I=g(2,4.5);F(t+u*.5,n+f*.5,.2,Math.cos(C)*I,Math.sin(C)*I,g(2,4),g(.5,.8),Cu(),3,12,!1,.95)}}for(const R of y){const C=_-R.k*r;if(C<0||C>.9)continue;const I=C/.9,O=1+I*1.2,[E,U]=P(e.x+o*R.k+a*R.o,e.y+i*R.k+l*R.o,.15+I*.5);M.globalAlpha=.6*(1-I);for(const G of R.r)Rn(M,E+G[0]*O,U+G[1]*O,Xe(G[2]*O),Xe(G[3]*O),G[4])}}}),T({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(M,v,w){const _=eg(e.uid);if(!_)return;const A=v*w.dur;M.globalAlpha=A>r?Math.max(0,1-(A-r)/.08):1;const[R,C]=P(_.x+u*.6,_.y+f*.6,.45);for(let E=0;E<6;E++){const U=7-E;Rn(M,R+h*E*2.5-U/2,C+c*E*2.5-U/2,U,U,E<2?jy:"#ffffff")}const[I,O]=P(_.x,_.y,.5);M.globalAlpha*=.6;for(let E=0;E<5;E++){const U=(E-2)*9,G=24+E*13%3*10;c0(M,I-c*U-h*26,O+h*U-c*26,I-c*U-h*(26+G),O+h*U-c*(26+G),1,"#fff6e0")}}})};q.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const s=i<5;return{a:s?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:s,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,s,a)=>{const l=eg(e.uid);if(!l)return;const u=s*a.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=P(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)F(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,g(-2,2),g(-2,2),g(1,2.5),.3,M?ww:C2,2,8,!0,.9)}const p=(1-m)*(1-m)*46,y=h+Math.cos(d.a)*30,x=c+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,Pw(i,y+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,Xe((S.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":C2)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),et(3)};q.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*ec+g(-.08,.08),j:g(.9,1.08),w:Xe(g(4,7)),h:Xe(g(3,6)),col:[Qy,Zy,Jy][i%3]}));T({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const s=i*1.4,a=Math.min(1,s/.45),l=t*(1-(1-a)*(1-a)),u=Math.min(1,(1.4-s)/.5);o.globalAlpha=.45*u,P2(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,P2(o,e.x,e.y,.4,"#24180e");for(const[f,h,c]of[[.45,As,2],[.7,As,2],[.95,Ol,3]]){o.globalAlpha=(1-a)*.8;for(let d=0;d<36;d++){const m=d/36*ec,[p,y]=P(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Rn(o,p-c/2,y-1,c,2,h)}}for(const f of r){const[h,c]=P(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-a)*12*Math.sin(a*Math.PI+.3);o.globalAlpha=.35*u,Rn(o,h-f.w/2-1,c,f.w+2,2,"#000000"),o.globalAlpha=u,Rn(o,h-f.w/2,c-f.h-d,f.w,f.h,f.col),Rn(o,h-f.w/2,c-f.h-d,f.w,1,_w)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[s,a]=P(e.x,e.y,.05),l=Xe(30+110*i);o.globalAlpha=1-i,Rn(o,s-l,a-1,l*2,2,"#fff2d0"),Rn(o,s-l*.6,a-3,Xe(l*1.2),1,"#ffd890");for(const u of[-1,1])Rn(o,s+u*(l+4)-1,a-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=g(0,ec),s=t*g(1.5,2.5);F(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*s,Math.sin(i)*s,g(3,6),g(.5,.9),Cu(),Math.random()<.3?4:3,14,!1,.96)}et(8)};q.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,s=1,a=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const h=Math.min(1,Math.max(0,(f-u.del)/.6)),c=.4+(o-.4)*(1-(1-h)*(1-h));return[e.x+Math.cos(u.a)*c,e.y+Math.sin(u.a)*c,h,c]};T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const h=f*1.7,c=Math.min(1,(1.7-h)/.6);u.globalAlpha=.2*c,u.fillStyle="#4a3420",u.beginPath();let[d,m]=P(e.x,e.y);u.moveTo(Xe(d),Xe(m));for(let p=0;p<=12;p++){const y=r-i+2*i*p/12;[d,m]=P(e.x+Math.cos(y)*o,e.y+Math.sin(y)*o),u.lineTo(Xe(d),Xe(m))}u.closePath(),u.fill(),u.globalAlpha=.7*c;for(const p of a){const[,,,y]=l(p,h),x=p.a+Math.PI/2;for(let b=.6;b<y;b+=.55){const M=Math.round(b/.55)%2?.12:-.12,[v,w]=P(e.x+Math.cos(p.a)*b+Math.cos(x)*M,e.y+Math.sin(p.a)*b+Math.sin(x)*M);Rn(u,v-4,w-1,3,3,As),Rn(u,v+1,w-1,3,3,As)}}}}),T({type:"custom",layer:"top",add:!0,dur:s,x:e.x,y:e.y,draw(u,f){const h=f*s;for(const c of a){const[d,m,p]=l(c,h);if(h<c.del)continue;const y=.85*Math.min(1,(h-c.del)/.08)*Math.max(0,1-Math.max(0,h-c.del-.45)/.4);if(y<=0)continue;const[x,b]=P(d,m,.55),[M]=tg(Math.cos(c.a),Math.sin(c.a)),v=M>=0?1:-1,w=p<.5?3:4,[_,A]=P(e.x,e.y,.55),R=x-_,C=b-A;u.globalAlpha=y*.18,nc(u,x-R*.35,b-C*.35,w,v),u.globalAlpha=y*.35,nc(u,x-R*.17,b-C*.17,w,v),u.globalAlpha=y,nc(u,x,b,w,v)}}});for(let u=0;u<40;u++){const f=r+g(-i,i),h=g(.4,o*.8),c=g(2,5);F(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.1,Math.cos(f)*c,Math.sin(f)*c,g(.5,1.5),g(.5,.9),[Ol,yd,Ky][u%3],4,3,!1,.9)}et(10)};const K=Math.round,Bn=Math.PI*2,sh=e=>e*N.HW*Math.SQRT2,Q={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},Qu=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function gl(e,t,n,r){r=Math.max(1,K(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(K(t[0]+(n[0]-t[0])*a/i-s),K(t[1]+(n[1]-t[1])*a/i-s),r,r)}function hr(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(K(t-l),K(n+s),Math.max(1,K(l*2)),i)}}function ng(e,t,n,r=99){let o=null,i=r;for(const s of S.game?S.game.units:[]){if(s.dead||s.heroKey!==n)continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}function zw(e,t,n,r=1.6){let o=null,i=r;for(const s of S.game?S.game.units:[]){if(s.dead||s.team===n||s.kind!=="hero")continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}const Zu=e=>P(e.x,e.y,.5);function Ju(e,t,n,r,o,i){const s=n[0]-t[0],a=n[1]-t[1],l=Math.hypot(s,a)||1,u=-a/l,f=s/l,h=Math.max(2,Math.ceil(l/3)),c=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+s*d+u*p,t[1]+a*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?Q.tongueD:d===1?Q.tongue:Q.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=h;p++){const y=p/h,x=c(y),b=d===2?m:Math.max(2,K(m*(1-y*.3)));e.fillRect(K(x[0]-b/2),K(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=c(d/l),p=K(m[0]),y=K(m[1]);e.fillStyle=Q.ink,e.fillRect(p-2,y-5,5,10),e.fillStyle=Q.iron,e.fillRect(p-1,y-4,3,8),e.fillStyle=Q.ironL,e.fillRect(p-1,y-4,1,3)}}const rc=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function gd(e,t,n,r,o=1.5){const i=Math.cos(r),s=Math.sin(r),a=d=>[t+(i*d[0]-s*d[1])*o,n+(s*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?Q.ink:d===1?Q.iron:Q.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<rc.length;p++)gl(e,a(rc[p-1]),a(rc[p]),m)}const l=a([-1.5,5.5]),u=a([-4,3]);e.fillStyle=Q.ink,gl(e,l,u,4),e.fillStyle=Q.ironL,gl(e,l,u,2),e.fillStyle=Q.rust;const f=a([7.5,5]),h=a([-3,0]);e.fillRect(K(f[0]),K(f[1]),2,2),e.fillRect(K(h[0]),K(h[1])-1,3,2);const c=a([-12.5,0]);e.fillStyle=Q.ink,e.fillRect(K(c[0])-5,K(c[1])-5,10,10),e.fillStyle=Q.rust,e.fillRect(K(c[0])-4,K(c[1])-4,8,8),e.fillStyle=Q.ink,e.fillRect(K(c[0])-2,K(c[1])-2,4,4)}const Fa=[];function Fw(e){let t=null,n=1.3;for(const r of Fa){if(r.done||S.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}function Ew(e,t,n){T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=st(e);if(!i)return;const s=Zu(i),a=P(t,n,.45),l=1-o*o,u=[s[0]+(a[0]-s[0])*l,s[1]+(a[1]-s[1])*l];l>.06&&Ju(r,s,u,S.T,4*l,3*l),gd(r,u[0],u[1],Math.atan2(u[1]-s[1],u[0]-s[0]),1.5-o*.4)}})}function Lw(e,t){T({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=Q.slimeL;for(let s=0;s<10;s++){const a=s/10*Bn+r;n.fillRect(K(o+Math.cos(a)*(8+r*26))-1,K(i+Math.sin(a)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)F(e,t,.5,g(-1.2,1.2),g(-1.2,1.2),g(1,2.4),.45,n%2?Q.slime:Q.tongueL,3,9,!1)}function kw(e){let t=null;for(const h of Fa)!h.pulled&&h.team===e.team&&S.T-h.t<2.2&&(!t||h.t>t.t)&&(t=h);t&&(t.pulled=!0,t.done=!0);const n=t?st(t.uid):ng(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,s=(e.ey??e.y)-e.y,a=Math.hypot(i,s)||1,l=-s/a*.17,u=i/a*.17,f=[];T({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(h,c,d){const m=st(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const y=1-(d.t-p[2])/1.1;if(!(y<=0)){h.globalAlpha=y*.9;for(const x of[-1,1]){const[b,M]=P(p[0]+l*x,p[1]+u*x);h.fillStyle=Q.mud,h.fillRect(K(b)-2,K(M)-1,5,3),h.fillStyle=Q.slime,h.fillRect(K(b)-1,K(M)-2,2,1)}}}}}),T({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(h,c,d){const m=st(o),p=r?st(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){Lw(m.x,m.y),d.t=d.dur+1;return}const x=Zu(p),b=P(m.x,m.y,.5);Ju(h,x,b,S.T,1.2,2),gd(h,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),et(Qu({uid:r})?5:2)}q.sapo_Q=e=>{if(e.type==="hook_pull"){kw(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let s=Fa.length-1;s>=0;s--)S.T-Fa[s].t>3&&Fa.splice(s,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};Fa.push(r),T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(s,a,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,r.pulled||Ew(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let s=0;s<10;s++)F(o,i,.5,t*g(1.5,3.5)+g(-.8,.8),n*g(1.5,3.5)+g(-.8,.8),g(.8,2),.45,s%3?Q.slime:Q.tongueL,2+s%2,8,!1);T({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(s,a){const[l,u]=P(o,i,.5),[f,h]=P(o+t,i+n,.5),c=f-l,d=h-u,m=Math.hypot(c,d)||1;s.globalAlpha=1-a,s.fillStyle=Q.fat;for(let p=-1;p<=1;p++)gl(s,[l-d/m*p*7,u+c/m*p*7],[l+c*(.3+a*.5)-d/m*p*7,u+d*(.3+a*.5)+c/m*p*7],2)}})};Ge.sapo_Q=(e,t,n,r,o,i)=>{const s=Fw(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=S.T);const a=s?st(s.uid):t.src||ng(t.x,t.y,"sapo",11);a&&!a.dead&&Ju(e,Zu(a),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),gd(e,n,r,o),Math.random()<.3&&F(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?Q.slime:Q.tongueL,2,6,!1)};q.sapo_Q_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,s]=P(t,n,.5);for(let l=0;l<10;l++){const u=l/10*Bn+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?Q.fat:Q.meatL,gl(r,[i+Math.cos(u)*5,s+Math.sin(u)*4],[i+Math.cos(u)*f,s+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const a=K(10*(1-o))+2;r.fillRect(i-a/2,s-a/2,a,a)}});for(let r=0;r<14;r++){const o=Math.random()*Bn,i=g(1,3);F(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3.5),g(.5,.8),[Q.meat,Q.meatL,Q.fat,Q.slime][r%4],r%3?3:4,11,!1,.95)}};const lh=new Map;function rg(e){const t={ended:!1,endT:0};return lh.set(e.uid+"_"+e.key,t),t}function og(e){const t=lh.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=S.T),lh.delete(e.uid+"_"+e.key)}function Ea(e,t,n){const r=st(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function Dw(e){const t=rg(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,s=l=>{const u=st(n);return u?[u.x,u.y]:[l.x,l.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Ea(t,n,f);if(h<=0)return;const[c,d]=s(f),[m,p]=P(c,d),y=sh(o),x=S.T;l.globalAlpha=.22*h,l.fillStyle=Q.gasD,hr(l,m,p,y*.95,y*.475,3);for(let b=0;b<6;b++){const M=b/6*Bn+x*.25,v=y*(.4+.35*W(b+i));l.globalAlpha=.3*h,l.fillStyle=b%2?Q.gas:Q.gasD,hr(l,m+Math.cos(M)*v,p+Math.sin(M)*v*.5,18+4*Math.sin(x*2+b),8,2)}for(let b=0;b<44;b++){const M=b/44*Bn-x*.4,v=y*(.95+.05*Math.sin(M*5+x*3));l.globalAlpha=.85*h,l.fillStyle=b%3?Q.gas:Q.gasL,l.fillRect(K(m+Math.cos(M)*v)-1,K(p+Math.sin(M)*v*.5)-1,3,3)}for(let b=0;b<5;b++){const M=x*1.3+b*.2,v=Math.floor(M),w=M-v,_=W(v*13+b+i)*Bn,A=y*(.15+.75*W(v*7+b*3+i)),R=m+Math.cos(_)*A,C=p+Math.sin(_)*A*.5;l.globalAlpha=h,l.fillStyle=w>.85?Q.gasL:Q.gas;const I=w>.85?4+(w-.85)*60:2+w*6;for(let O=0;O<8;O++){const E=O/8*Bn;l.fillRect(K(R+Math.cos(E)*I)-1,K(C+Math.sin(E)*I*.6)-1,2,2)}}}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Ea(t,n,f);if(h<=0)return;const[c,d]=s(f),[m,p]=P(c,d),y=sh(o),x=S.T;for(let v=0;v<10;v++){const w=W(v*7.3+i),_=(x*.7+w)%1,A=v/10*Bn+w*2,R=y*(.15+.7*W(v*3.1+i)),C=m+Math.cos(A)*R,I=p+Math.sin(A)*R*.5;l.globalAlpha=h*Math.sin(_*Math.PI)*.9,l.fillStyle=v%2?Q.gasL:Q.gas;for(let O=0;O<7;O++)l.fillRect(K(C+Math.sin(O*.9+x*6+v)*4)-1,K(I-8-_*46-O*5),3,4)}const[b,M]=P(c,d,.9);for(let v=0;v<5;v++){const w=v*1.7+i,_=b+Math.sin(x*(3.1+v*.4)+w)*(20+v*7),A=M-v*4+Math.sin(x*(6.2+v*.3)+w*2)*10;l.globalAlpha=h,l.fillStyle=Q.fly,l.fillRect(K(_),K(A),3,2),l.fillStyle="#eaf4ff";const R=((x*36|0)+v)%2;l.fillRect(K(_)-1,K(A)-1-R,2,1),l.fillRect(K(_)+2,K(A)-1-R,2,1)}}});const a={nl:0};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Ea(t,n,f);if(h<=0)return;const[c,d]=s(f),m=Math.min(1,f.t/.5);An(c,d);const p=It.x,y=It.y;O2!==l&&(O2=l,F2=[{u0:0,fill:Gt(l,Q.gasD,4),a:.45},{u0:.7,fill:Gt(l,Q.gas,5),a:.45},{u0:.92,fill:Gt(l,Q.gasL,7),a:.5}]),bo(l,p,y,Ce(o),Ce(o*(1+.15*m)),Hr(uh*m),!1,F2,I2,h),L2(l,c,d,o,m,h,!1,i),Zo(a,c,d,o*.9,12107840,.35*h)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Ea(t,n,f);if(h<=0)return;const[c,d]=s(f),m=Math.min(1,f.t/.5);An(c,d);const p=It.x,y=It.y;z2!==l&&(z2=l,E2=[{u0:0,fill:Gt(l,Q.gas,2),a:.4},{u0:.7,fill:Gt(l,Q.gas,3),a:.45},{u0:.92,fill:Gt(l,Q.gasL,6),a:.5}]),bo(l,p,y,Ce(o),Ce(o*(1+.15*m)),Hr(uh*m),!0,E2,I2,h),L2(l,c,d,o,m,h,!0,i)}})}const uh=1.6,I2=[1,.75,.5,.3,.14];let O2=null,z2=null,F2=[],E2=[];function L2(e,t,n,r,o,i,s,a){const l=S.T;for(let u=0;u<12;u++){const f=u/12*Bn+l*.3+W(u+a)*.4;for(let h=0;h<10;h++){const c=(h/10+l*.55+W(u*3+a))%1;if(c>o)continue;const d=f+Math.sin(l*3+c*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(Si(m,p,0)>0!==s)continue;const y=r*(1+.15*c);An(t+m*y,n+p*y,c*uh);const x=c>.6?2:c>.3?3:4;if(e.globalAlpha=i*(1-c)*(s?.85:.65),e.fillStyle=u+h&1?Q.gas:Q.gasL,e.fillRect(K(It.x)-(x>>1),K(It.y)-(x>>1),x,x+1),c>.82){const b=(c-.82)/.18;for(let M=0;M<4;M++){const v=M*1.4+b*4;e.fillRect(K(It.x+Math.cos(v)*(2+M)),K(It.y-3-M*2+Math.sin(v)*2),2,2)}}}}}function fh(e,t,n,r){T({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,s){const[a,l]=P(e,t),u=sh(n)*(.25+s*.8);i.globalAlpha=(1-s)*.9;for(let f=0;f<26;f++){const h=f/26*Bn,c=f%2?4:3;i.fillStyle=f%4?Q.gas:Q.gasL,i.fillRect(K(a+Math.cos(h)*u)-2,K(l+Math.sin(h)*u*.5)-1,c,3)}r&&(i.fillStyle=Q.gasD,hr(i,a,l-10-s*20,22*(1-s*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const s=Math.random()*Bn,a=g(.5,r?2.4:1.4);F(e,t,.4,Math.cos(s)*a,Math.sin(s)*a,g(.4,1.4),g(.6,1),i%2?Q.gas:Q.gasL,r?5:4,-.6,!1,.9)}}q.sapo_W=e=>{if(e.type==="channel"){Dw(e);return}const t=st(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){fh(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(og(e),fh(n,r,1.4,e.kind==="done"))};q.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const s=st(t);return s&&!s.dead?s:null};T({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,h]=P(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),c=K(15*Math.sin(Math.min(1,s*1.4)*Math.PI)+2);i.fillStyle=Q.bellyD,hr(i,f,h+1,c+2,c*.8+2,2),i.fillStyle=Q.belly,hr(i,f,h,c,c*.8,2),i.fillStyle="#ffffff",i.fillRect(K(f-c*.4),K(h-c*.5),3,2)}}),T({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l)return;const[u,f]=P(l.x,l.y);i.globalAlpha=1-s;for(let h=0;h<2;h++){const c=14+(s*1.2-h*.2)*52;if(!(c<14)){i.fillStyle=h?Q.slime:Q.belly;for(let d=0;d<22;d++){const m=d/22*Bn;i.fillRect(K(u+Math.cos(m)*c)-2,K(f+Math.sin(m)*c*.45)-1,4,3)}}}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l||a.t>.2&&!(l.shield>0)||s>.97){if(!a.popped){a.popped=!0;const m=l?l.x:a.x,p=l?l.y:a.y;for(let y=0;y<16;y++){const x=y/16*Bn;F(m,p,.5,Math.cos(x)*g(1,2.6),Math.sin(x)*g(1,2.6),g(1,2.5),.5,y%2?Q.slime:Q.slimeL,3,9,!1)}}a.t=a.dur+1;return}const[f,h]=P(l.x,l.y,.45),c=S.T,d=s>.85?(1-s)/.15:Math.min(1,a.t/.15);i.globalAlpha=.35*d,i.fillStyle=Q.belly,hr(i,f,h+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*Bn,y=Math.sin(p*3+c*6+r)*2.5+Math.sin(p*5-c*4)*1.5,x=f+Math.cos(p)*(30+y),b=h+Math.sin(p)*(36+y);i.globalAlpha=.85*d,i.fillStyle=m%5===0?Q.slimeL:Q.slime,i.fillRect(K(x)-1,K(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*Bn+c*.6,y=f+Math.cos(p)*31,x=h+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=Q.skinD,i.fillRect(K(y)-2,K(x)-2,5,5),i.fillStyle=Q.wart,i.fillRect(K(y)-1,K(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(K(f-18),K(h-26),4,2),i.fillRect(K(f-21),K(h-23),2,4),Math.random()<.12&&F(l.x+g(-.25,.25),l.y+g(-.25,.25),.15,0,0,-.2,.5,Q.slime,2,4,!1)}})};const Uw=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function Xw(e,t,n,r,o){e.globalAlpha=r;for(let a=0;a<36;a+=2){const l=56*Math.sqrt(1-Math.pow(a/36,2));e.fillStyle=a<4?Q.skinD:a<12?Q.skinL:Q.skin,e.fillRect(K(t-l),K(n-a-2),K(l*2),2)}e.fillStyle=Q.skinD;for(let a=0;a<7;a++)e.fillRect(K(t-36+W(a)*72),K(n-14-W(a+9)*16),4,3);for(const a of[-1,1]){const l=t+a*28,u=n-36+2;e.fillStyle=Q.skin,hr(e,l,u,12,10,2),e.fillStyle=Q.eye,hr(e,l,u-1,8,7,2),e.fillStyle=Q.ink,e.fillRect(K(l-5+Math.sin(o*2)*1.5),K(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(K(l-4),K(u-6),2,2)}for(let a=0;a<9;a++){const l=t-40+a*10;e.fillStyle=Q.ink,e.fillRect(K(l)-1,K(n)-1,7,8),e.fillStyle=Q.teeth,e.fillRect(K(l),K(n),5,6-a%2*2)}}function Gw(e){const t=rg(e),n=e.uid,r=(e.dur||3)+.5,o=st(n),i=e.team||o&&o.team,s=zw(e.x,e.y,i,1.6),a=s?s.id:0,l=u=>{const f=a?st(a):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=Ea(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=P(d,m),x=Math.min(1,h.t/.25);u.globalAlpha=c,u.fillStyle=Q.skinD,hr(u,p,y+2,58*x,27*x,2),u.fillStyle=Q.mouth,hr(u,p,y,50*x,22*x,2),u.fillStyle=Q.mouthM,hr(u,p,y+3,38*x,15*x,2),u.fillStyle=Q.tongue,hr(u,p,y+6,24*x,8*x,2),u.fillStyle=Q.tongueL,u.fillRect(K(p-10*x),K(y+3),K(8*x),2)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=Ea(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=P(d,m),x=S.T,b=Math.min(1,h.t/.25),M=t.ended?0:Uw(h.t),v=y-4-b*(22+M*70);for(let _=0;_<2;_++){const[,A]=P(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),C=8;for(let I=0;I<=14;I++){const O=.12*Math.PI+I/14*.76*Math.PI,E=p+Math.cos(O)*R,U=A+Math.sin(O)*C;u.globalAlpha=c,u.fillStyle=Q.tongueD,u.fillRect(K(E)-3,K(U)-3,6,6),u.fillStyle=Q.tongue,u.fillRect(K(E)-2,K(U)-2,4,4)}}const w=st(n);if(w&&!w.dead){const _=Zu(w),A=P(d,m,.45);if(Math.hypot(A[0]-_[0],A[1]-_[1])>18){u.globalAlpha=c,Ju(u,_,A,x,1,2);for(let R=0;R<5;R++){const C=(x*1.6+R/5)%1,I=A[0]+(_[0]-A[0])*C,O=A[1]+(_[1]-A[1])*C-3;u.fillStyle=Q.meat,u.fillRect(K(I)-3,K(O)-3,6,6),u.fillStyle=Q.meatL,u.fillRect(K(I)-2,K(O)-3,3,3)}}}Xw(u,p,v,c*b,x),u.globalAlpha=c*b;for(let _=0;_<=26;_++){const A=_/26*Math.PI,R=p+Math.cos(A)*54,C=y+Math.sin(A)*25;u.fillStyle=Q.skinD,u.fillRect(K(R)-4,K(C)-3,8,8),u.fillStyle=Q.skin,u.fillRect(K(R)-3,K(C)-3,6,5),u.fillStyle=Q.skinL,u.fillRect(K(R)-3,K(C)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=Q.ink,u.fillRect(K(R)-3,K(C)-10,6,8),u.fillStyle=Q.teeth,u.fillRect(K(R)-2,K(C)-9,4,6))}Math.random()<.2&&F(d+g(-.4,.4),m+g(-.2,.2),.9,0,0,-.5,.5,Q.slimeL,2,6,!1)}}),et(Qu(e)?6:2)}function Nw(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*Bn,i=g(.8,2.2);F(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3),.55,[Q.meat,Q.meatL,Q.fat,Q.slimeL][r%4],3,10,!1,.95)}et(Qu(n)?2.5:.6)}function Bw(e,t,n){T({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,s]=P(e,t),a=o<.3?1:1-(o-.3)/.7;r.globalAlpha=a,r.fillStyle=Q.skinD,hr(r,i,s-18*a,58*a,30*a,2),r.fillStyle=Q.skin,hr(r,i,s-22*a,52*a,25*a,2),r.fillStyle=Q.skinL,r.fillRect(K(i-30*a),K(s-40*a),K(60*a),3),r.fillStyle=Q.ink,r.fillRect(K(i-40*a),K(s-10*a),K(80*a),3)}}),fh(e,t,1.8,!0),et(Qu(n)?7:2)}q.sapo_R=e=>{if(e.type==="channel"){Gw(e);return}if(e.type==="channel_tick"){Nw(e.x,e.y,e);return}if(e.type==="channel_end")if(og(e),e.kind==="done")Bw(e.x,e.y,e);else for(let t=0;t<10;t++)F(e.x,e.y,.5,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.6,t%2?Q.gas:Q.slime,4,2,!1)};const oc=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];qe.sapo=e=>{const t=e.x,n=e.y,r=e.uid?st(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.5),u=s<.25?(1-s/.25)*30:0,f=3;i.globalAlpha=s<.6?1:(1-s)/.4;const h=oc[0].length,c=K(a-(o>0?h*f-6:6)),d=K(l-14-u),m={h:"#6a3a1e",B:Q.ink,b:"#a8acb4",r:Q.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let y=0;y<oc.length;y++)for(let x=0;x<h;x++)oc[y][x]===p&&i.fillRect(c+(o>0?x:h-1-x)*f,d+y*f,f,f)}if(s>.25){const p=(s-.25)/.75;i.fillStyle=Q.fat,i.fillRect(K(a-10-p*16),K(l+6),K(8*(1-p))+1,2),i.fillRect(K(a+4+p*16),K(l+6),K(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)F(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1,2.4),.4,[Q.meat,Q.meatL,Q.slime][i%3],3,10,!1)};const Te=Math.round,Qt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Pu(e,t,n,r,o){e.fillStyle=o,e.fillRect(Te(t-r/2),Te(n-r/2),r,r)}const zl=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function $w(e,t,n,r,o,i){const s=t.length,a=t[0].length,l=Te(n-a*o/2),u=Te(r-s*o/2);for(let f=0;f<s;f++)for(let h=0;h<a;h++){const c=i[t[f][h]];c&&(e.fillStyle=c,e.fillRect(l+h*o,u+f*o,o,o))}}function ig(e,t,n,r,o){const i=Te(t),s=Te(n);o&&(e.fillStyle=o,e.fillRect(i-5,s-3,10,2),e.fillRect(i-7,s-1,14,2),e.fillRect(i-5,s+1,10,2)),e.fillStyle=r,e.fillRect(i-5,s-5,10,2),e.fillRect(i-5,s+3,10,2),e.fillRect(i-7,s-3,2,2),e.fillRect(i+5,s-3,2,2),e.fillRect(i-9,s-1,2,2),e.fillRect(i+7,s-1,2,2),e.fillRect(i-7,s+1,2,2),e.fillRect(i+5,s+1,2,2)}function ic(e,t,n,r,o,i,s,a){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=a;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(Te(t+(r-t)*f-s/2),Te(n+(o-n)*f-s/2),s,s)}}const Hw=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function ag(e,t,n,r,o,i,s,a){e.fillStyle=Qt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=Qt.teal,e.fillRect(t,n-o,r,Te(o*.62)),e.fillStyle=Qt.aqua,e.fillRect(t,n-o,r,Te(o*.3)),e.fillStyle=Qt.foam,e.fillRect(t+i,n-o-2+s,r,3),a&&(e.fillStyle=Qt.white,e.fillRect(t+i*2,n-o-4+s,3,2))}q.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=st(e.uid);let i=1,s=0;if(o){const M=t-o.x,v=n-o.y,w=Math.hypot(M,v);w>.05&&(i=M/w,s=v/w)}const a=-s,l=i,u=a+l>=0?1:-1,f=(a-l)*N.HW,h=.13,c=Math.max(6,Math.ceil(Math.abs(f)*h)+2),d=(i-s)*N.HW,m=(i+s)*N.HH,p=Math.hypot(d,m)||1,y=Te(d/p*3),x=Te(m/p*2);T({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,v){const w=Math.min(1,v*3)*(v>.6?(1-v)/.4:1);ft(t,n,r*.95,null,`rgba(18,80,110,${.32*w})`);for(let _=0;_<2;_++){const A=(v*2.4+_*.5)%1,R=r*.9*A;M.globalAlpha=w*(1-A);for(let C=0;C<22;C++){const I=C/22*6.283,[O,E]=P(t+Math.cos(I)*R,n+Math.sin(I)*R);Pu(M,O,E,2,Qt.sea)}}M.globalAlpha=1}});const b={n:0,sp:!1};return T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,v){const w=-r*.95+v*r*1.9,_=Math.sin(Math.min(1,v*1.08)*Math.PI),A=Math.sqrt(Math.max(0,r*r-w*w))+.25,R=Math.floor(A*2/h);for(let C=0;C<=R;C++){const I=u>0?-A+C*h:A-C*h,O=1-Math.abs(I)/A,E=.85+.15*Math.sin(I*9+v*24),U=Te((8+30*Math.sqrt(Math.max(0,O)))*_*E/2)*2;if(U<4)continue;const[G,j]=P(t+i*w+a*I,n+s*w+l*I);ag(M,Te(G-c/2),Te(j),c,U,y,x,(I*7.7+v*30|0)%3===0)}if(b.n<32&&_>.3)for(let C=0;C<2;C++){b.n++;const I=g(-A,A);F(t+i*w+a*I,n+s*w+l*I,.35*_,i*g(.8,2),s*g(.8,2),g(1,2.5),.45,Math.random()<.5?Qt.foam:Qt.sea,2,7,!1)}if(!b.sp&&v>.82){b.sp=!0;for(let C=0;C<14;C++){const I=g(-r*.6,r*.6);F(t+i*r*.8+a*I,n+s*r*.8+l*I,.2,i*g(1,3)+g(-.5,.5),s*g(1,3)+g(-.5,.5),g(2,4),.55,Qt.aqua,3,9,!1)}et(3)}}}),!0};function Ww(e,t){T({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.1),s=zl(r,.1,.6);for(let a=0;a<10;a++){const l=a*.628+r*11,u=r*58+a*4,f=18*(1-r*.5),h=Math.sin(l)>0;n.globalAlpha=s*(h?1:.45),Pu(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,h?3:2,a%2?Qt.sea:Qt.foam)}if(r>.45){n.globalAlpha=zl((r-.45)/.55,.2,.6);const a=Te(i-72-(r-.45)*20),l=Te(o);n.fillStyle=Qt.lamp,n.fillRect(l-5,a-1,10,3),n.fillRect(l-1,a-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)F(e+g(-.3,.3),t+g(-.3,.3),.2,0,0,g(1.2,2.2),.8,Math.random()<.5?Qt.sea:Qt.foam,2,0,!0);return!0}q.tortuga_W=e=>{if(e.type==="heal")return Ww(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(a,l){const u=zl(l,.12,.55);for(let f=0;f<3;f++)for(let h=0;h<26;h++){const c=h/26,d=r*(1-c)*.98,m=f*2.094+c*5+l*9,[p,y]=P(t+Math.cos(m)*d,n+Math.sin(m)*d);a.globalAlpha=u*(.35+.65*c),Pu(a,p,y,c>.6?3:2,h%3===0?Qt.foam:h%3===1?Qt.sea:Qt.aqua)}a.globalAlpha=1}});const i=[];for(let a=0;a<9;a++)i.push({a0:a/9*6.283+g(-.2,.2),d:a*.03+g(0,.05)});const s={"#":Qt.shell,a:Qt.sand};return T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(a,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const h=f*f*(3-2*f),c=r*.92*(1-h),d=u.a0+h*4.2+l*2,[m,p]=P(t+Math.cos(d)*c,n+Math.sin(d)*c,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);a.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),$w(a,Hw,m,p,2,s)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(a,l){const u=st(o),f=u?u.x:t,h=u?u.y:n,[c,d]=P(f,h,.95),m=Te(c),p=Te(d),y=zl(l,.08,.5),x=Te(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));a.globalAlpha=y*.3,a.fillStyle=Qt.lamp,a.fillRect(m-8,p-8,16,16),a.globalAlpha=y,a.fillRect(m-x,p-1,x*2,2),a.fillRect(m-1,p-x,2,x*2),a.fillStyle=Qt.lampW,a.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const M=b*.785+l*5,v=10+l*30;Pu(a,m+Math.cos(M)*v,p+Math.sin(M)*v*.5+l*40,2,Qt.lamp)}a.globalAlpha=1}}),!0};const sg=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)sg.push({th:r/t*6.283+n*.31,ph:e,row:n})});q.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};T({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(s,a){const l=st(t);if(!l||l.dead)return;const u=a*n,[f,h]=P(l.x,l.y),c=Math.min(1,u/.18),d=1+(1-c)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,y=18*d,x=62*d,b=u*1.6%2.2-.3,M=sg.map(v=>{const w=v.th+u*.5,_=Math.cos(v.ph);return{d:v,th:w,x:f+Math.cos(w)*p*_+Math.cos(w)*m*30,y:h+Math.sin(w)*y*_-Math.sin(v.ph)*x-4-m*10+m*m*30,z:Math.sin(w)*_}}).sort((v,w)=>v.z-w.z);for(const v of M){const w=u-(3-v.d.row)*.05;if(w<0)continue;v.y-=(1-Math.min(1,w/.1))*14;const _=v.z>-.15,A=Math.abs(v.d.ph-b)<.22;s.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,w*10),ig(s,v.x,v.y,w<.06||A?Qt.white:Qt.foam,A?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(s.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let v=0;v<16;v++){const w=g(0,6.283),_=g(1.5,3.5);F(l.x,l.y,g(.2,.9),Math.cos(w)*_,Math.sin(w)*_,g(1,3),.5,Math.random()<.5?Qt.foam:Qt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let s=0;s<10;s++){const a=s/10*6.283;F(r+Math.cos(a)*.5,o+Math.sin(a)*.5,.05,-Math.cos(a)*.8,-Math.sin(a)*.8,g(1.5,2.5),.4,Math.random()<.5?Qt.sand:Qt.shell,2,3,!1)}return!0};q.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}T({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const h=zl(f,.06,.55),c=1+.35*Math.max(0,1-f/.1);ft(t,n,r*.92*c,null,`rgba(16,70,95,${.35*h})`);const d=(m,p)=>P(t+m*c,n+p*c);for(let m=0;m<2;m++){u.globalAlpha=h*(m?.75:.85);const p=m?Qt.lamp:Qt.shellD,y=m?2:3,x=m?-1:0,b=m?-2:0;for(const[M,v]of i)for(let w=0;w<6;w++){const _=w*Math.PI/3,A=(w+1)*Math.PI/3,[R,C]=d(M+Math.cos(_)*o,v+Math.sin(_)*o),[I,O]=d(M+Math.cos(A)*o,v+Math.sin(A)*o);ic(u,R+x,C+b,I+x,O+b,5,y,p)}for(let M=0;M<22;M++){const v=M/22*6.283,[w,_]=d(Math.cos(v)*r*.66,Math.sin(v)*r*.66),[A,R]=d(Math.cos(v)*r*.86,Math.sin(v)*r*.86);ic(u,w+x,_+b,A+x,R+b,5,y,p);const C=(M+1)/22*6.283,[I,O]=d(Math.cos(C)*r*.86,Math.sin(C)*r*.86);ic(u,A+x,R+b,I+x,O+b,6,y,p)}}u.globalAlpha=1}});const s=60,a=Array.from({length:s},(u,f)=>f).sort((u,f)=>{const h=u/s*6.283,c=f/s*6.283;return Math.cos(h)+Math.sin(h)-(Math.cos(c)+Math.sin(c))}),l={crash:!1};T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const h=Math.min(1,f*1.15),c=1-(1-h)*(1-h),d=r*(.3+.75*c),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let y=0;y<s;y++){const x=y/s*6.283;p.push(P(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const y of a){const x=y/s*6.283,[b,M]=p[y],v=p[(y+1)%s][0],w=Math.max(4,Math.ceil(Math.abs(v-b))+2),_=Te((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const A=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=A?.82:1;const R=A?2:-2;ag(u,Te(Math.min(b,v)-1),Te(M),w,_,Te(Math.cos(x-.785)*3),R,(y*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let y=0;y<16;y++){const x=g(0,6.283);F(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*g(1,2.5),Math.sin(x)*g(1,2.5),g(1.5,3),.6,Math.random()<.5?Qt.foam:Qt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=g(0,6.283),h=g(2,5);F(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*h,Math.sin(f)*h,g(3.5,6.5),g(.8,1.1),[Qt.aqua,Qt.sea,Qt.foam,Qt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return et(10),!0};qe.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;T({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,s){const[a,l]=P(t,n),u=Te(a),f=Te(l);for(let h=0;h<(r?3:2);h++){const c=s*1.3-h*.18;if(c<=0||c>=1)continue;const d=Te(6+c*(r?34:24)),m=Te(d/2);i.globalAlpha=1-c,i.fillStyle=h?Qt.sea:Qt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,s){const[a,l]=P(t,n,.5);i.globalAlpha=1-s,ig(i,a,l-s*8,Qt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const s=g(0,6.283),a=g(1,2.5);F(t,n,.4,Math.cos(s)*a,Math.sin(s)*a,g(1.5,3),.4,i%2?Qt.aqua:Qt.foam,2,9,!1)}};const Tt=Math.round,qo=Math.PI*2,ct={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},lg=e=>e*N.HW*Math.SQRT2;function Ne(e,t,n,r){r=Math.max(1,Tt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(Tt(t[0]+(n[0]-t[0])*a/i-s),Tt(t[1]+(n[1]-t[1])*a/i-s),r,r)}function qw(e,t,n,r,o,i,s=!1){const a=t[0].length,l=t.length,u=Tt(n-a*o/2),f=Tt(r-l*o/2);for(const h in i){e.fillStyle=i[h];for(let c=0;c<l;c++)for(let d=0;d<a;d++)t[c][s?a-1-d:d]===h&&e.fillRect(u+d*o,f+c*o,o,o)}}function Vw(e,t,n,r,o,i){const s=Math.abs(r),a=Tt(t),l=Tt(n);e.fillStyle=i,e.fillRect(a-1,l+2,1,2),s>.55?(e.fillStyle=o,e.fillRect(a-3,l,6,2),e.fillRect(a-2,l-1,4,1),e.fillRect(a-2,l+2,3,1),e.fillStyle=i,e.fillRect(a-2,l+1,4,1)):s>.2?(e.fillStyle=o,e.fillRect(a-2,l-1,3,4),e.fillStyle=i,e.fillRect(a-1,l,1,2)):(e.fillStyle=i,e.fillRect(a-1,l-1,1,4))}const Vs=new Map;function ug(e){if(Vs.has(e))return!1;if(Vs.size>300)for(const[t,n]of Vs)S.T-n>4&&Vs.delete(t);return Vs.set(e,S.T),!0}function Yw(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||We(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const jw=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];qe.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(T({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[s,a]=P(t,n,.5),l=Tt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=ct.f1;for(const[f,h]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(s+f*l-u/2,a+h*l*.8-u/2,u,u);o.fillStyle=ct.f2;for(let f=0;f<6;f++){const h=f/6*qo+i*3;o.fillRect(Tt(s+Math.cos(h)*(6+i*8))-1,Tt(a+Math.sin(h)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=ct.cream,o.fillRect(s-2,a-2,4,4))}}),F(t,n,.6,g(-.5,.5),g(-.5,.5),.4,.8,Math.random()<.5?ct.leaf:ct.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)F(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(1,2),.3,ct.f1,2,4,!0)};Ge.zorra_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=(h,c=0)=>[n+s*h-a*c,r+a*h+s*c];vt(!0);const u=Wt();for(let h=0;h<3;h++){u.globalAlpha=.8-h*.22,u.fillStyle=h?ct.f2:ct.f1;const c=l(-15-h*4,Math.sin(i*40+h)*1.5);u.fillRect(Tt(c[0])-2+(h>>1),Tt(c[1])-2+(h>>1),4-h,4-h)}u.globalAlpha=1,vt(!1),e.fillStyle=ct.woodD,Ne(e,l(-13),l(3),3),e.fillStyle=ct.wood,Ne(e,l(-12),l(2),1),e.fillStyle=ct.steel,Ne(e,l(3),l(7),3),e.fillStyle="#ffffff",Ne(e,l(6),l(8),1),e.fillStyle=ct.leaf,Ne(e,l(-13,0),l(-9,-3),2),e.fillStyle=ct.leafD,Ne(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?st(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&ug("za"+t.id)&&(qe.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),it.sfx("atk_zorra",f.x,f.y,.6))};q.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=P(e.x,e.y),s=P(e.x+t,e.y+n),a=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/a,u=(s[1]-i[1])/a;T({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.5),m=-u,p=l;f.globalAlpha=h<.6?1:(1-h)/.4;const y=[];for(let M=-5;M<=5;M++)y.push([c+m*M*3.4-l*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=ct.woodD;for(const M of y)f.fillRect(Tt(M[0])-2,Tt(M[1])-2,4,4);f.fillStyle=ct.wood;for(const M of y)f.fillRect(Tt(M[0])-1,Tt(M[1])-1,2,2);f.fillStyle=ct.leaf;for(const M of[y[0],y[10]])f.fillRect(Tt(M[0])-2,Tt(M[1])-3,3,3);const x=h<.08?9*(1-h/.08):Math.sin(h*70)*3*(1-h),b=[c-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=ct.cream,Ne(f,y[0],b,1),Ne(f,b,y[10],1)}}),T({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.5),m=4+h*16;f.fillStyle=ct.f1;for(let p=0;p<8;p++){const y=p/8*qo;f.fillRect(Tt(c+l*8+Math.cos(y)*m)-2,Tt(d+u*8+Math.sin(y)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)F(r,o,.55,-n*g(-2,2)+t*g(0,1),t*g(-2,2)+n*g(0,1),g(.5,1.5),.9,f%2?ct.leaf:ct.leafL,3,1.5,!1,.95)};Ge.zorra_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=(f,h=0)=>[n+s*f-a*h,r+a*f+s*h];vt(!0);const u=Wt();for(let f=0;f<=16;f++){const h=f/16,c=Tt(2+7*Math.sin(Math.PI*Math.pow(h,.7))),d=Math.sin(i*30-h*7)*2.5*h,m=l(-22-h*46,d);u.globalAlpha=.85-h*.35,u.fillStyle=h>.8?ct.cream:h>.45?ct.fox:ct.f1,u.fillRect(Tt(m[0]-c/2),Tt(m[1]-c/2),c,c)}u.globalAlpha=1,vt(!1),e.fillStyle=ct.woodD,Ne(e,l(-22),l(4),4),e.fillStyle=ct.wood,Ne(e,l(-21),l(3),2),e.fillStyle="#20202a",Ne(e,l(3,-4),l(12),3),Ne(e,l(3,4),l(12),3),e.fillStyle=ct.steel,Ne(e,l(4,-2),l(11),2),Ne(e,l(4,2),l(11),2),e.fillStyle="#ffffff",Ne(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=ct.leafD,Ne(e,l(-23,0),l(-15,f*5),3),e.fillStyle=ct.leaf,Ne(e,l(-22,f),l(-16,f*4),2),e.fillStyle=ct.leafL,e.fillRect(Tt(l(-17,f*4)[0]),Tt(l(-17,f*4)[1]),2,2);if(Math.random()<.3&&F(t.x,t.y,t.z||.45,g(-.4,.4),g(-.4,.4),-.2,.7,Math.random()<.6?ct.leaf:ct.autumn,3,.6,!1,.95),t.id!=null)for(const f of Yw(t))ug("zq"+t.id+":"+f.id)&&fg(f.x,f.y,t.vx||1,t.vy||0)};function fg(e,t,n,r){const o=Math.hypot(n,r)||1;T({type:"custom",layer:"top",add:!0,dur:.25,x:e,y:t,draw(i,s){const a=P(e-n/o*.7,t-r/o*.7,.5),l=P(e+n/o*.9,t+r/o*.9,.5);i.globalAlpha=1-s,i.fillStyle=ct.fox,Ne(i,a,l,Tt(6*(1-s))+1),i.fillStyle=ct.cream,Ne(i,a,l,2)}});for(let i=0;i<6;i++)F(e,t,.5,n/o*g(1,3)+g(-.8,.8),r/o*g(1,3)+g(-.8,.8),g(.5,1.5),.35,i%2?ct.f1:ct.fox,2,3,!0)}q.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(s,a)=>({a:a/9*qo,h:a/9,sp:g(4.5,6),col:[ct.leaf,ct.leafL,ct.autumn][a%3],dk:a%3===2?ct.foxD:ct.leafD,r:g(.5,.65)}));for(let s=0;s<14;s++){const a=s/14*qo,l=g(1.5,2.5);F(e.x+Math.cos(a)*.3,e.y+Math.sin(a)*.3,g(.2,.8),Math.cos(a+1.3)*l,Math.sin(a+1.3)*l,g(.8,1.6),g(.6,.9),[ct.leaf,ct.leafL,ct.autumn][s%3],3,1,!1,.94)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(s,a,l){const u=st(t),f=a*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)F(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const h=Math.min(1,f/.3),c=a>.92?(1-a)/.08:1,[d,m]=P(r,o,.35);s.globalAlpha=.55*c,s.fillStyle="#e8fff0";for(let p=0;p<2;p++){const y=f*7+p*Math.PI,x=lg(.62)*h;for(let b=0;b<7;b++){const M=y+b*.16;s.fillRect(Tt(d+Math.cos(M)*x)-1,Tt(m+Math.sin(M)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const y=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*h*(1-x*.35),[M,v]=P(r+Math.cos(y)*b,o+Math.sin(y)*b,.15+x*1.1);s.globalAlpha=c*(Math.sin(y)>0?1:.55)*Math.min(1,(1-x)*4),Vw(s,M,v,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};q.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,s=P(t,n),a=P(r,o),l=a[0]<s[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));T({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,h){const c=h*(i+.45);for(const d of u){const m=c-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[y,x]=P(d.x,d.y,.32+m*.3);f.globalAlpha=p,qw(f,jw,y,x,3,{o:ct.f2,t:ct.f1,c:ct.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const M=y+(b-1.5)*9*(l?-1:1),v=Tt(4+5*Math.abs(Math.sin(c*30+b*1.7))+m*14);f.fillStyle=b%2?ct.f3:ct.f1,f.fillRect(Tt(M)-2,Tt(x-12-v),4,v),f.fillStyle=ct.f0,f.fillRect(Tt(M)-1,Tt(x-12-v),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.3+h*.4),m=14+h*10;for(let p=0;p<6;p++){const y=p/6*qo+h*7;f.globalAlpha=(1-h)*(.6+.4*Math.sin(h*30+p)),f.fillStyle=p%2?ct.f3:ct.f2,f.fillRect(Tt(c+Math.cos(y)*m)-3,Tt(d+Math.sin(y)*m*.5)-3,6,6),f.fillStyle=ct.f0,f.fillRect(Tt(c+Math.cos(y)*m)-1,Tt(d+Math.sin(y)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const h=Math.random();F(t+(r-t)*h+g(-.2,.2),n+(o-n)*h+g(-.2,.2),.3,g(-.3,.3),g(-.3,.3),g(.8,1.6),g(.5,.8),[ct.f1,ct.f2,ct.f3][f%3],3,-.5,!0,.95)}};const k0=3.1;function Kw(e,t,n,r,o){const i=Tt(t),s=Tt(n),a=Tt(Math.sin(o)*r),l=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<l.length;u++){const f=l[u]*r,h=u>4?Tt(a*(u-4)/4):0,c=s-u*r*2;e.fillStyle=ct.f3,e.fillRect(i-f+h,c,f*2,r*2),u<8&&(e.fillStyle=ct.f1,e.fillRect(i-f+r+h,c,Math.max(r,f*2-r*2),r*2)),u<5&&(e.fillStyle=ct.f0,e.fillRect(i-Tt(f/2)+h,c,Math.max(r,f),r*2))}e.fillStyle=ct.gold,e.fillRect(i-r,s-r*3,r*2,r*2)}function k2(e,t,n,r,o,i){const s=S.T,a=Hr(.8);for(let l=0;l<46;l++){const u=l/46*qo+.09,f=Math.cos(u),h=Math.sin(u);if(Si(f,h,0)>0!==i)continue;const c=(s*1.25+l*.618%1)%1,d=k0*(1-c);An(t+f*r*.95,n+h*r*.95,d);const m=Tt(It.x),p=Tt(It.y),y=o*Math.min(1,(1-c)*4)*(i?.85:.6);e.globalAlpha=y*.45,e.fillStyle=ct.f2,e.fillRect(m,p-Tt(a),2,Tt(a)),e.globalAlpha=y,e.fillStyle=ct.f1,e.fillRect(m,p-Tt(a*.45),2,Tt(a*.45)),e.fillStyle=i?ct.f0:ct.gold,e.fillRect(m-1,p-2,4,3)}}q.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=st(e.uid),s=i?i.x:t-3,a=i?i.y:n-3;let l=s-t,u=a-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const h=Array.from({length:7},(b,M)=>({ox:g(-.3,.3),oy:g(-.3,.3),dl:M*.03}));T({type:"custom",layer:"top",add:!0,dur:.5,x:s,y:a,draw(b,M){const v=M*.5;for(const w of h){const _=(v-w.dl)/.35;if(_<0||_>1)continue;const A=.6+_*4.5,R=s+w.ox-l*_*.8,C=a+w.oy-u*_*.8,I=P(R,C,A),O=P(R+l*.15,C+u*.15,A-.4);b.globalAlpha=1-_*.5,b.fillStyle=ct.fox,Ne(b,O,I,3),b.fillStyle=ct.f0,b.fillRect(Tt(I[0])-2,Tt(I[1])-2,4,4)}}});for(let b=0;b<8;b++)F(s,a,.6,g(-.5,.5),g(-.5,.5),g(2,4),.4,b%2?ct.gold:ct.f1,2,2,!0);const c=28,d=.45,m=Array.from({length:c},(b,M)=>{const v=Math.random()*qo,w=Math.sqrt(Math.random())*r*.92,_=t+Math.cos(v)*w,A=n+Math.sin(v)*w;return{t0:.3+M*(2.5/c)+g(-.04,.04),lx:_,ly:A,sx:_+l*1.8+g(-.3,.3),sy:A+u*1.8+g(-.3,.3),landed:!1,tang:[0,1]}}),p=(b,M)=>P(b.sx+(b.lx-b.sx)*M,b.sy+(b.ly-b.sy)*M,4*(1-M*M));T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(b,M){const v=M*o;for(const w of m){const _=(v-w.t0)/d;if(_<0)continue;if(_>=1){if(!w.landed){w.landed=!0,F(w.lx,w.ly,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.7?ct.f1:ct.leaf,2,6,!0);const U=p(w,1),G=p(w,.93),j=Math.hypot(U[0]-G[0],U[1]-G[1])||1;w.tang=[(U[0]-G[0])/j,(U[1]-G[1])/j]}const E=(v-w.t0-d)/.14;if(E<1){const[U,G]=P(w.lx,w.ly),j=Tt(3+E*9);b.globalAlpha=1-E,b.fillStyle=ct.gold,b.fillRect(U-j,G-1,j*2,2),b.fillRect(U-1,G-Tt(j/2),2,j)}continue}const A=p(w,_),R=p(w,Math.max(0,_-.07)),C=Math.hypot(A[0]-R[0],A[1]-R[1])||1,I=(A[0]-R[0])/C,O=(A[1]-R[1])/C;b.globalAlpha=.35,b.fillStyle=ct.f2;for(let E=1;E<=4;E++){const U=p(w,Math.max(0,_-E*.05));b.fillRect(Tt(U[0])-1,Tt(U[1])-1,3,3)}b.globalAlpha=1,b.fillStyle=ct.fox,Ne(b,[A[0]-I*16,A[1]-O*16],A,3),b.fillStyle=ct.gold,Ne(b,[A[0]-I*14,A[1]-O*14],A,1),b.fillStyle="#ffffff",b.fillRect(Tt(A[0])-2,Tt(A[1])-2,4,4)}}});const y=la(e,3),x=()=>S.T-y.t0;T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(b,M,v){const w=$n(y);if(w<=0){v.t=v.dur+1;return}const _=Math.min(1,x()/.3,w/.35);k2(b,t,n,r,_,!1),Zo(y,t,n,r*1.05,16747050,.55*_)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(b,M,v){const w=$n(y);if(w<=0){v.t=v.dur+1;return}const _=x(),A=Math.min(1,_/.3,w/.35);k2(b,t,n,r,A,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),C=w<.35?(.35-w)*2.4:0;b.globalAlpha=A*.7,b.fillStyle=ct.f2,ci(b,t,n,k0+C,r*.86*R,90,3,-_*.9,0),b.fillStyle=ct.gold,ci(b,t,n,k0+C-.06,r*.86*R,18,3,_*1.7,1);for(let I=0;I<2;I++)for(let O=0;O<9;O++){const E=O/9*qo+_*.9,U=Math.cos(E),G=Math.sin(E),j=Si(U,G,0)>0;I===1===j&&(An(t+U*r*.86*R,n+G*r*.86*R,k0+C+Math.sin(_*3+O)*.08),b.globalAlpha=A*(j?1:.6),Kw(b,It.x,It.y,j?3:2,_*9+O*1.3))}}}),T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(b,M,v){const w=M*o,_=M>.85?(1-M)/.15:Math.min(1,w*4),[A,R]=P(t,n),C=lg(r);!v.sh&&w>.75&&(v.sh=!0,et(3)),b.globalAlpha=.7*_,b.fillStyle=ct.fox;for(let I=0;I<10;I++){const O=I/10*qo+w*.6,E=A+Math.cos(O)*C,U=R+Math.sin(O)*C*.5,G=-Math.cos(O),j=-Math.sin(O)*.5;b.fillRect(Tt(E)-2,Tt(U)-2,4,4),b.fillRect(Tt(E+G*6-j*4)-1,Tt(U+j*6+G*2)-1,3,3),b.fillRect(Tt(E+G*6+j*4)-1,Tt(U+j*6-G*2)-1,3,3)}for(const I of m){if(!I.landed)continue;const[O,E]=P(I.lx,I.ly),U=I.tang[0],G=I.tang[1];b.globalAlpha=_,b.fillStyle="#00000055",b.fillRect(Tt(O)-3,Tt(E),6,2),b.fillStyle=ct.woodD,Ne(b,[O-U*13,E-G*13],[O,E],3),b.fillStyle=ct.wood,Ne(b,[O-U*12,E-G*12],[O-U*2,E-G*2],1),b.fillStyle=ct.leaf,b.fillRect(Tt(O-U*13)-2,Tt(E-G*13)-1,2,3),b.fillStyle=ct.autumn,b.fillRect(Tt(O-U*13),Tt(E-G*13)-2,2,3)}}})};q.zorra_Q_hit=e=>{const t=e.uid?st(e.uid):null;fg(e.x,e.y,t?e.x-t.x:1,t?e.y-t.y:0)};var de=`in vec2 aPosition;
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
`,me=`struct GlobalFilterUniforms {
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
}`,Qw=`in vec2 vTextureCoord;
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
`,Zw=`struct AdjustmentUniforms {
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
}`,Jw=Object.defineProperty,tS=(e,t,n)=>t in e?Jw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cg=(e,t,n)=>(tS(e,typeof t!="symbol"?t+"":t,n),n);const eS=class hg extends fe{constructor(t){t={...hg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:Zw,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:Qw,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),cg(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};cg(eS,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var nS=`
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
}`,rS=`struct KawaseBlurUniforms {
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
}`,oS=`
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
`,iS=`struct KawaseBlurUniforms {
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
}`,aS=Object.defineProperty,sS=(e,t,n)=>t in e?aS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ki=(e,t,n)=>(sS(e,typeof t!="symbol"?t+"":t,n),n);const dg=class mg extends fe{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Vt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...mg.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:n?.clamp?iS:rS,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:n?.clamp?oS:nS,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ki(this,"uniforms"),ki(this,"_pixelSize",{x:0,y:0}),ki(this,"_clamp"),ki(this,"_kernels",[]),ki(this,"_blur"),ki(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,s=this.pixelSizeY/n.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,n,r,o);else{const l=br.getSameSizeTexture(n);let u=n,f=l,h;const c=this._quality-1;for(let d=0;d<c;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,u,f,!0),h=u,u=f,f=h;a=this._kernels[c]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,u,r,o),br.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let s=1;s<n;s++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};ki(dg,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let pg=dg;var lS=`in vec2 vTextureCoord;
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
`,uS=`struct AdvancedBloomUniforms {
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
`,fS=`
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
`,cS=`struct ExtractBrightnessUniforms {
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
`,hS=Object.defineProperty,dS=(e,t,n)=>t in e?hS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yg=(e,t,n)=>(dS(e,typeof t!="symbol"?t+"":t,n),n);const gg=class xg extends fe{constructor(t){t={...xg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:cS,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:fS,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),yg(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};yg(gg,"DEFAULT_OPTIONS",{threshold:.5});let mS=gg;var pS=Object.defineProperty,yS=(e,t,n)=>t in e?pS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_a=(e,t,n)=>(yS(e,typeof t!="symbol"?t+"":t,n),n);const Mg=class bg extends fe{constructor(t){t={...bg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:uS,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:lS,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:kt.WHITE}}),_a(this,"uniforms"),_a(this,"bloomScale",1),_a(this,"brightness",1),_a(this,"_extractFilter"),_a(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new mS({threshold:t.threshold}),this._blurFilter=new pg({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=br.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const s=br.getSameSizeTexture(n);this._blurFilter.apply(t,i,s,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=s.source,t.applyFilter(this,n,r,o),br.returnTexture(s),br.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};_a(Mg,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let gS=Mg;var xS=`precision highp float;
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
`,MS=`struct AsciiUniforms {
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
}`,bS=Object.defineProperty,vS=(e,t,n)=>t in e?bS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ch=(e,t,n)=>(vS(e,typeof t!="symbol"?t+"":t,n),n);const wS=class vg extends fe{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Vt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...vg.DEFAULT_OPTIONS,...n};const o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:MS,entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:xS,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),ch(this,"uniforms"),ch(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new _n,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};ch(wS,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var SS=`precision highp float;
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
`,_S=`struct BevelUniforms {
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
}`,AS=Object.defineProperty,TS=(e,t,n)=>t in e?AS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Aa=(e,t,n)=>(TS(e,typeof t!="symbol"?t+"":t,n),n);const RS=class wg extends fe{constructor(t){t={...wg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:_S,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:SS,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Aa(this,"uniforms"),Aa(this,"_thickness"),Aa(this,"_rotation"),Aa(this,"_lightColor"),Aa(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new _n,this._shadowColor=new _n,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ls}set rotation(t){this._rotation=t*ls,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Aa(RS,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var CS=Object.defineProperty,PS=(e,t,n)=>t in e?CS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D0=(e,t,n)=>(PS(e,typeof t!="symbol"?t+"":t,n),n);const IS=class Sg extends Z5{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Vt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Sg.DEFAULT_OPTIONS,...n},super(),D0(this,"_blurXFilter"),D0(this,"_blurYFilter"),D0(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new h1({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new h1({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=br.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),br.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Vt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Vt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Vt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Vt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Vt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Vt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};D0(IS,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var OS=`precision highp float;
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
`,zS=`struct BulgePinchUniforms {
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
}`,FS=Object.defineProperty,ES=(e,t,n)=>t in e?FS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_g=(e,t,n)=>(ES(e,typeof t!="symbol"?t+"":t,n),n);const LS=class Ag extends fe{constructor(t){t={...Ag.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:zS,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:OS,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),_g(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};_g(LS,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var kS=`precision highp float;
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
`,DS=`in vec2 aPosition;
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
`,D2=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,fa=fa||{};fa.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var fa=fa||{};fa.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(k){var D=new Error(t+": "+k);throw D.source=t,D}function r(){var k=o();return t.length>0&&n("Invalid input not EOF"),k}function o(){return M(i)}function i(){return s("linear-gradient",e.linearGradient,l)||s("repeating-linear-gradient",e.repeatingLinearGradient,l)||s("radial-gradient",e.radialGradient,h)||s("repeating-radial-gradient",e.repeatingRadialGradient,h)}function s(k,D,$){return a(D,function(H){var Z=$();return Z&&(j(e.comma)||n("Missing comma before color stops")),{type:k,orientation:Z,colorStops:M(v)}})}function a(k,D){var $=j(k);if($){j(e.startCall)||n("Missing (");var H=D($);return j(e.endCall)||n("Missing )"),H}}function l(){return u()||f()}function u(){return G("directional",e.sideOrCorner,1)}function f(){return G("angular",e.angleValue,1)}function h(){var k,D=c(),$;return D&&(k=[],k.push(D),$=t,j(e.comma)&&(D=c(),D?k.push(D):t=$)),k}function c(){var k=d()||m();if(k)k.at=y();else{var D=p();if(D){k=D;var $=y();$&&(k.at=$)}else{var H=x();H&&(k={type:"default-radial",at:H})}}return k}function d(){var k=G("shape",/^(circle)/i,0);return k&&(k.style=U()||p()),k}function m(){var k=G("shape",/^(ellipse)/i,0);return k&&(k.style=O()||p()),k}function p(){return G("extent-keyword",e.extentKeywords,1)}function y(){if(G("position",/^at/,0)){var k=x();return k||n("Missing positioning value"),k}}function x(){var k=b();if(k.x||k.y)return{type:"position",value:k}}function b(){return{x:O(),y:O()}}function M(k){var D=k(),$=[];if(D)for($.push(D);j(e.comma);)D=k(),D?$.push(D):n("One extra comma");return $}function v(){var k=w();return k||n("Expected color definition"),k.length=O(),k}function w(){return A()||C()||R()||_()}function _(){return G("literal",e.literalColor,0)}function A(){return G("hex",e.hexColor,1)}function R(){return a(e.rgbColor,function(){return{type:"rgb",value:M(I)}})}function C(){return a(e.rgbaColor,function(){return{type:"rgba",value:M(I)}})}function I(){return j(e.number)[1]}function O(){return G("%",e.percentageValue,1)||E()||U()}function E(){return G("position-keyword",e.positionKeywords,1)}function U(){return G("px",e.pixelValue,1)||G("em",e.emValue,1)}function G(k,D,$){var H=j(D);if(H)return{type:k,value:H[$]}}function j(k){var D,$;return $=/^[\n\r\t\s]+/.exec(t),$&&L($[0].length),D=k.exec(t),D&&L(D[0].length),D}function L(k){t=t.substr(k)}return function(k){return t=k.toString(),r()}}();var US=fa.parse;fa.stringify;function XS(e){const t=US(VS(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=GS(n.type),o=NS(n.colorStops),i=WS(n.orientation);return{type:r,stops:o,angle:i}}function GS(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function NS(e){const t=$S(e),n=[],r=new _n;for(let o=0;o<e.length;o++){const i=BS(e[o]),s=r.setValue(i).toArray();n.push({offset:t[o],color:s.slice(0,3),alpha:s[3]})}return n}function BS(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function $S(e){const t=[];for(let i=0;i<e.length;i++){const s=e[i];let a=-1;s.type==="literal"&&s.length&&"type"in s.length&&s.length.type==="%"&&"value"in s.length&&(a=parseFloat(s.length.value)/100),t.push(a)}const r=i=>{for(let s=i;s<t.length;s++)if(t[s]!==-1)return{indexDelta:s-i,offset:t[s]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const s=t[i];if(s!==-1)o=s;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const a=r(i),u=(a.offset-o)/(1+a.indexDelta);for(let f=0;f<=a.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=a.indexDelta,o=t[i]}}return t.map(HS)}function HS(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function WS(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return qS(e.value)}return 0}function qS(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function VS(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var YS=Object.defineProperty,jS=(e,t,n)=>t in e?YS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ji=(e,t,n)=>(jS(e,typeof t!="symbol"?t+"":t,n),n);const ac=90;function KS(e){return[...e].sort((t,n)=>t.offset-n.offset)}const Fl=class U0 extends fe{constructor(t){if(t&&"css"in t?t={...XS(t.css||""),alpha:t.alpha??U0.defaults.alpha,maxColors:t.maxColors??U0.defaults.maxColors}:t={...U0.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=ee.from({vertex:{source:D2,entryPoint:"mainVertex"},fragment:{source:D2,entryPoint:"mainFragment"}}),r=ie.from({vertex:DS,fragment:kS,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??ac,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Ji(this,"baseUniforms"),Ji(this,"stopsUniforms"),Ji(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=KS(t),r=new _n;let o,i,s;for(let a=0;a<n.length;a++){r.setValue(n[a].color);const l=a*3;[o,i,s]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=s,this.stopsUniforms.uStops[a*4]=n[a].offset,this.stopsUniforms.uStops[a*4+1]=n[a].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+ac}set angle(t){this.baseUniforms.uOptions[1]=t-ac}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Ji(Fl,"LINEAR",0);Ji(Fl,"RADIAL",1);Ji(Fl,"CONIC",2);Ji(Fl,"defaults",{type:Fl.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var QS=`in vec2 vTextureCoord;
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

}`,ZS=`struct ColorMapUniforms {
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
}`,JS=Object.defineProperty,t6=(e,t,n)=>t in e?JS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Co=(e,t,n)=>(t6(e,typeof t!="symbol"?t+"":t,n),n);const e6=class Tg extends fe{constructor(...t){let n=t[0]??{};if((n instanceof kt||n instanceof nr)&&(Vt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Tg.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:ZS,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:QS,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Co(this,"uniforms"),Co(this,"_size",0),Co(this,"_sliceSize",0),Co(this,"_slicePixelSize",0),Co(this,"_sliceInnerSize",0),Co(this,"_nearest",!1),Co(this,"_scaleMode","linear"),Co(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof kt?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Co(e6,"DEFAULT_OPTIONS",{colorMap:kt.WHITE,nearest:!1,mix:1});var n6=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,r6=`struct ColorOverlayUniforms {
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
`,o6=Object.defineProperty,i6=(e,t,n)=>t in e?o6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hh=(e,t,n)=>(i6(e,typeof t!="symbol"?t+"":t,n),n);const a6=class Rg extends fe{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Vt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...Rg.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:r6,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:n6,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),hh(this,"uniforms"),hh(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new _n,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};hh(a6,"DEFAULT_OPTIONS",{color:0,alpha:1});var s6=`in vec2 vTextureCoord;
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
`,l6=`struct ColorReplaceUniforms {
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
}`,u6=Object.defineProperty,f6=(e,t,n)=>t in e?u6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X0=(e,t,n)=>(f6(e,typeof t!="symbol"?t+"":t,n),n);const c6=class Cg extends fe{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Vt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...Cg.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:l6,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:s6,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),X0(this,"uniforms"),X0(this,"_originalColor"),X0(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new _n,this._targetColor=new _n,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Vt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Vt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Vt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Vt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};X0(c6,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var h6=`in vec2 vTextureCoord;
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
}`,d6=`struct ConvolutionUniforms {
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
}`,m6=Object.defineProperty,p6=(e,t,n)=>t in e?m6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pg=(e,t,n)=>(p6(e,typeof t!="symbol"?t+"":t,n),n);const y6=class Ig extends fe{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Vt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Ig.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:d6,entryPoint:"mainFragment"}}),s=ie.from({vertex:de,fragment:h6,name:"convolution-filter"});super({gpuProgram:i,glProgram:s,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Pg(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Pg(y6,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var g6=`precision highp float;
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
`,x6=`struct CRTUniforms {
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
}`,M6=Object.defineProperty,b6=(e,t,n)=>t in e?M6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,G0=(e,t,n)=>(b6(e,typeof t!="symbol"?t+"":t,n),n);const v6=class Og extends fe{constructor(t){t={...Og.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:x6,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:g6,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),G0(this,"uniforms"),G0(this,"seed"),G0(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};G0(v6,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var w6=`precision highp float;
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
`,S6=`struct DotUniforms {
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
}`,_6=Object.defineProperty,A6=(e,t,n)=>t in e?_6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T6=(e,t,n)=>(A6(e,t+"",n),n);const R6=class zg extends fe{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Vt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...zg.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:S6,entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:w6,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};T6(R6,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var C6=`precision highp float;
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
}`,P6=`struct DropShadowUniforms {
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
}`,I6=Object.defineProperty,O6=(e,t,n)=>t in e?I6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ta=(e,t,n)=>(O6(e,typeof t!="symbol"?t+"":t,n),n);const z6=class Fg extends fe{constructor(t){t={...Fg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:P6,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:C6,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Ta(this,"uniforms"),Ta(this,"shadowOnly",!1),Ta(this,"_color"),Ta(this,"_blurFilter"),Ta(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new _n,this.color=t.color??0,this._blurFilter=new pg({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new fe({gpuProgram:ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:ie.from({vertex:de,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=br.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),br.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Ta(z6,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var F6=`precision highp float;
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
`,E6=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,L6=Object.defineProperty,k6=(e,t,n)=>t in e?L6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ao=(e,t,n)=>(k6(e,typeof t!="symbol"?t+"":t,n),n);const D6=class Eg extends fe{constructor(t){t={...Eg.defaults,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:E6,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:F6,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new kt({source:new Qh({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),ao(this,"uniforms"),ao(this,"average",!1),ao(this,"minSize",8),ao(this,"sampleSize",512),ao(this,"_canvas"),ao(this,"texture"),ao(this,"_slices",0),ao(this,"_sizes",new Float32Array(1)),ao(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:s}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let s=1;for(let a=0;a<n;a++){const l=s/(i-a),u=Math.max(l*(1-Math.random()*.6),o);t[a]=u,s-=u}t[n]=s}else{let i=1;const s=Math.sqrt(1/this._slices);for(let a=0;a<n;a++){const l=Math.max(s*i*Math.random(),o);t[a]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);const a=this._sizes[s]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,a+1>>0),i+=a}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ls}set direction(t){this.uniforms.uDirection=t*ls}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};ao(D6,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var U6=`precision highp float;
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
`,X6=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,G6=Object.defineProperty,N6=(e,t,n)=>t in e?G6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dh=(e,t,n)=>(N6(e,typeof t!="symbol"?t+"":t,n),n);const B6=class Lg extends fe{constructor(t){t={...Lg.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:X6,entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:U6.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),dh(this,"uniforms"),dh(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new _n,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};dh(B6,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var $6=`precision highp float;
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
`,H6=`struct GodrayUniforms {
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

\${PERLIN}`,W6=`vec3 mod289(vec3 x)
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
`,q6=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,V6=Object.defineProperty,Y6=(e,t,n)=>t in e?V6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ra=(e,t,n)=>(Y6(e,typeof t!="symbol"?t+"":t,n),n);const j6=class kg extends fe{constructor(t){t={...kg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:H6.replace("${PERLIN}",q6),entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:$6.replace("${PERLIN}",W6),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ra(this,"uniforms"),Ra(this,"time",0),Ra(this,"_angleLight",[0,0]),Ra(this,"_angle",0),Ra(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,s=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*ls;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Ra(j6,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var K6=`in vec2 vTextureCoord;
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
`,Q6=`struct HslUniforms {
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
}`,Z6=Object.defineProperty,J6=(e,t,n)=>t in e?Z6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mh=(e,t,n)=>(J6(e,typeof t!="symbol"?t+"":t,n),n);const t_=class Dg extends fe{constructor(t){t={...Dg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:Q6,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:K6,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),mh(this,"uniforms"),mh(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};mh(t_,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var e_=`precision highp float;
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
`,n_=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,r_=Object.defineProperty,o_=(e,t,n)=>t in e?r_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ph=(e,t,n)=>(o_(e,typeof t!="symbol"?t+"":t,n),n);const i_=class Ug extends fe{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof bn){Vt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],s="y"in n?n.y:n[1];n={velocity:{x:i,y:s}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...Ug.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:n_,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:e_,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),ph(this,"uniforms"),ph(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ph(i_,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var a_=`in vec2 vTextureCoord;
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
`,s_=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,l_=Object.defineProperty,u_=(e,t,n)=>t in e?l_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N0=(e,t,n)=>(u_(e,typeof t!="symbol"?t+"":t,n),n);const f_=class Xg extends fe{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Vt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...Xg.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:s_.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:a_.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),N0(this,"uniforms"),N0(this,"_replacements",[]),N0(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new _n;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let s,a,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[s,a,l]=i.toArray(),n[u*3]=s,n[u*3+1]=a,n[u*3+2]=l,i.setValue(f[1]),[s,a,l]=i.toArray(),r[u*3]=s,r[u*3+1]=a,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Vt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Vt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};N0(f_,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var c_=`precision highp float;
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
}`,h_=`struct OldFilmUniforms {
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
}`,d_=Object.defineProperty,m_=(e,t,n)=>t in e?d_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yh=(e,t,n)=>(m_(e,typeof t!="symbol"?t+"":t,n),n);const p_=class Gg extends fe{constructor(t){t={...Gg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:h_,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:c_,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),yh(this,"uniforms"),yh(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};yh(p_,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var y_=`precision highp float;
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
`,g_=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,x_=Object.defineProperty,M_=(e,t,n)=>t in e?x_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hi=(e,t,n)=>(M_(e,typeof t!="symbol"?t+"":t,n),n);const xd=class Di extends fe{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Vt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...Di.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:g_,entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:y_.replace(/\$\{ANGLE_STEP\}/,Di.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),Hi(this,"uniforms"),Hi(this,"_thickness"),Hi(this,"_quality"),Hi(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Di.getAngleStep(r),this._color=new _n,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Di.MAX_SAMPLES,Di.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Di.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Hi(xd,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Hi(xd,"MIN_SAMPLES",1);Hi(xd,"MAX_SAMPLES",100);var b_=`precision highp float;
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
`,v_=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,w_=Object.defineProperty,S_=(e,t,n)=>t in e?w_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B0=(e,t,n)=>(S_(e,typeof t!="symbol"?t+"":t,n),n);const __=class Ng extends fe{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Vt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],s="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:s}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Ng.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:v_,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:b_,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),B0(this,"uniforms"),B0(this,"_angle"),B0(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};B0(__,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var A_=`precision highp float;
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
`,T_=`struct ReflectionUniforms {
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
}`,R_=Object.defineProperty,C_=(e,t,n)=>t in e?R_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gh=(e,t,n)=>(C_(e,typeof t!="symbol"?t+"":t,n),n);const P_=class Bg extends fe{constructor(t){t={...Bg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:T_,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:A_,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),gh(this,"uniforms"),gh(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};gh(P_,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var I_=`precision highp float;
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
`,O_=`struct RgbSplitUniforms {
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
`,z_=Object.defineProperty,F_=(e,t,n)=>t in e?z_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$g=(e,t,n)=>(F_(e,typeof t!="symbol"?t+"":t,n),n);const E_=class Hg extends fe{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Vt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...Hg.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:O_,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:I_,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),$g(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};$g(E_,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var L_=`
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
`,k_=`
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
`,D_=Object.defineProperty,U_=(e,t,n)=>t in e?D_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xh=(e,t,n)=>(U_(e,typeof t!="symbol"?t+"":t,n),n);const X_=class Wg extends fe{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Vt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Wg.DEFAULT_OPTIONS,...n};const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:k_,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:L_,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),xh(this,"uniforms"),xh(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};xh(X_,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var G_=`precision highp float;
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
`,N_=`struct SimpleLightmapUniforms {
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
}`,B_=Object.defineProperty,$_=(e,t,n)=>t in e?B_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$0=(e,t,n)=>($_(e,typeof t!="symbol"?t+"":t,n),n);const H_=class qg extends fe{constructor(...t){let n=t[0]??{};if(n instanceof kt&&(Vt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...qg.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:N_,entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:G_,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),$0(this,"uniforms"),$0(this,"_color"),$0(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new _n,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};$0(H_,"DEFAULT_OPTIONS",{lightMap:kt.WHITE,color:0,alpha:1});var W_=`in vec2 vTextureCoord;
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
`,q_=`struct TiltShiftUniforms {
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
}`,V_=Object.defineProperty,Y_=(e,t,n)=>t in e?V_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mh=(e,t,n)=>(Y_(e,typeof t!="symbol"?t+"":t,n),n);const j_=class Vg extends fe{constructor(t){const{width:n,height:r}=dM.defaultOptions;t={...Vg.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:q_,entryPoint:"mainFragment"}}),i=ie.from({vertex:de,fragment:W_,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Mh(this,"uniforms"),Mh(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),s=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=s?-o/i:r/i,this.uniforms.uDelta[1]=s?r/i:o/i}};Mh(j_,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var K_=`precision highp float;
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
`,Q_=`struct TwistUniforms {
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
`,Z_=Object.defineProperty,J_=(e,t,n)=>t in e?Z_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yg=(e,t,n)=>(J_(e,typeof t!="symbol"?t+"":t,n),n);const t8=class jg extends fe{constructor(t){t={...jg.DEFAULT_OPTIONS,...t};const n=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:Q_,entryPoint:"mainFragment"}}),r=ie.from({vertex:de,fragment:K_,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Yg(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Yg(t8,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var e8=`precision highp float;
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
`,n8=`struct ZoomBlurUniforms {
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
}`,r8=Object.defineProperty,o8=(e,t,n)=>t in e?r8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kg=(e,t,n)=>(o8(e,typeof t!="symbol"?t+"":t,n),n);const i8=class Qg extends fe{constructor(t){t={...Qg.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=ee.from({vertex:{source:me,entryPoint:"mainVertex"},fragment:{source:n8.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=ie.from({vertex:de,fragment:e8.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Kg(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Kg(i8,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let lr,Zg,Za,xl,El;const h0=[];let U2=!0,bh=0;function Jg(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,s=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${s.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}function a8(e,t){lr&&lr.renderer.resize(e,t)}async function s8(e,t){Zg=t,lr=new hl,await lr.init({...e,background:"#000000",backgroundAlpha:1});{const n=lr.renderer;n.render=Pm("gl:lightmap",n.render.bind(n))}return El=kt.from(Jg(256)),El.source.scaleMode="linear",xl=new an(kt.WHITE),lr.stage.addChild(xl),Za=new Se,lr.stage.addChild(Za),c8(),lr.canvas}function l8(){const e=new an(El);e.blendMode="add",e.alpha=.01,Za.addChild(e),lr.renderer.render(lr.stage),e.destroy();try{lr.renderer.texture.initSource(El.source)}catch{}ex()}function X2(e){e!==U2&&(U2=e,lr.canvas.style.display=e?"":"none",e?lr.ticker.start():lr.ticker.stop())}const Wi=4;let La,Ml,vh,wh;const d0=[],ta=new Uu({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),u8=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,f8=`in vec2 vUV;
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
}`;let tx;function c8(){wh=kt.from(Jg(64)),wh.source.scaleMode="linear",La=Jh.create({width:64,height:64,resolution:1}),vh=new Se,Ml=new Se,vh.addChild(Ml),tx=ie.from({vertex:u8,fragment:f8,name:"piso-luna"})}function h8(e,t,n){const r=e.width,o=e.height,i=new Op({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),s=new Xu({glProgram:tx,resources:{uTexture:e.source,uMask:La.source,moonU:ta}}),a=new lM({geometry:i,shader:s,texture:e});return a.x=t,a.y=n,a}function ex(){const e=Math.ceil(S.W/Wi),t=Math.ceil(S.H/Wi);(La.source.width!==e||La.source.height!==t)&&La.resize(e,t,1),ta.uniforms.uScreen[0]=e*Wi,ta.uniforms.uScreen[1]=t*Wi,Zg.renderer.render({container:vh,target:La,clear:!0,clearColor:[0,0,0,0]})}const G2=[.95,.95,.94],d8=[.5,.62,.86],m8=[1,.74,.55],N2=[62,108,168],p8=[210,120,60],H0=[1,1,1];function y8(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let s=G2[i]+(d8[i]-G2[i])*e;s+=(m8[i]-s)*t*.62,H0[i]=s,n[i]=N2[i]+(p8[i]-N2[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=ta.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const g8=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),Sh=[];let ka=0,_h=0,Ah=0,nx=0,rx=0;const x8=110;function ir(e,t,n,r,o,i){if(i<.02||ka>=x8)return;const s=(e-t)*N.HW+N.OX,a=(e+t)*N.HH,l=r*N.HW*1.5;if(s<_h-l||s>nx+l||a<Ah-l||a>rx+l)return;let u=Sh[ka];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},Sh[ka]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),ka++}const B2=(e,t,n,r,o)=>ir(e,t,0,n,r,o);let ba=null;function M8(){if(ba)return ba;ba=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?ba.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&ba.push({x:e.x,y:e.y,kind:"crystal"});return ba}const $2={blue:5949695,red:16742470},b8={blue:9101567,red:16752752},v8={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function w8(e){const t=S.game,n=S.T,r=t.player,o=.55+.45*e;for(const i of M8())if(i.kind==="brazier"){const s=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);ir(i.x,i.y,.5,3.3*(.96+.04*s),16749632,.8*s*o)}else ir(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const s=t.fountain[i];s&&ir(s.x,s.y,.3,3.6,b8[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){ir(i.x,i.y,1.75,3.4,$2[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){ir(i.x,i.y,.9,4.4,$2[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(We(i))continue;const s=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&ir(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),s&&s.burn&&ir(i.x,i.y,.4,1.3,16747560,.5*o);const a=s&&s.transform;a&&ir(i.x,i.y,.6,2.8,a.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&ir(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const s=window.SIM.RUNES[i.kind];ir(i.x,i.y,.5,1.7,nd(s.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||Bu(i,n)&&ir(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&ir(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const s=v8[i.fx];s!==void 0&&ir(i.x,i.y,i.z||.45,i.skill?2:1.2,s,(i.skill?.75:.5)*o)}Qb(B2,40,o),Zb(B2,14,o)}const ox=new URLSearchParams(location.search),S8=ox.get("luna")==="0",_8=ox.get("mapaluz")==="0";let Ys=!1;function A8(e,t){const n=S.game;if(!n||!n.player||_8){X2(!1),bh=0,Ys&&(Ys=!1,ta.uniforms.uMoon[3]=0);return}X2(!0);const r=Mm(n.t),o=S.cam;bh=r.night,y8(r.night,r.warm),S8&&(ta.uniforms.uMoon[3]=0),xl.tint=g8(H0[0],H0[1],H0[2]),xl.width=S.W,xl.height=S.H,Za.scale.set(o.z),Za.position.set(e,t),_h=o.x-S.W/2/o.z,Ah=o.y-S.H/2/o.z,nx=_h+S.W/o.z,rx=Ah+S.H/o.z+120,ka=0,w8(r.night);const{HW:i,HH:s,OX:a,ZK:l}=N;Ys=ta.uniforms.uMoon[3]>.005;let u=0;for(;u<ka;u++){const f=Sh[u];let h=h0[u];h||(h=new an(El),h.anchor.set(.5),h.blendMode="add",Za.addChild(h),h0[u]=h);const c=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+a,m=(f.x+f.y)*s-f.z*l*.35-10;if(h.visible=!0,h.x=d,h.y=m,h.width=c,h.height=c*.62,h.tint=f.col,h.alpha=f.a,Ys){let p=d0[u];p||(p=new an(wh),p.anchor.set(.5),p.blendMode="add",Ml.addChild(p),d0[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=c,p.height=c*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<h0.length;f++)h0[f].visible=!1;if(Ys){for(let f=u;f<d0.length;f++)d0[f].visible=!1;Ml.scale.set(o.z/Wi),Ml.position.set(e/Wi,t/Wi),ex()}}let xr;const ne={};let Ja,ts,Lr,es,bl,Th=0,sc,W0=null,q0=null,Iu,Rh=[],Ou=[];const zu=[],Ts=new Map,ui=[],m0=[];function Md(){return xr.canvas}const Ch=[];async function T8(e){const t=pM();let n=0;for(const o of t){try{xr.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new an(Iu);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(S.W/2,S.H/2),ne.lights.addChild(r);for(let o=0;o<3;o++)uo.renderer.render(uo.stage),xr.renderer.render(xr.stage),Yr.renderer.render(Yr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of Ch)try{Yr.renderer.texture.initSource(o)}catch{}try{uo.renderer.texture.initSource(Iu.source)}catch{}l8()}let lc;function R8(){try{const e=xr.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let Yr,uo;const p0={width:window.innerWidth,height:window.innerHeight,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1,textureGCActive:!1};function ri(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function C8(e){Yr=new hl,xr=new hl,uo=new hl,await Yr.init({...p0,background:"#100d18"}),await xr.init({...p0,backgroundAlpha:0}),await uo.init({...p0,backgroundAlpha:0}),sc=await s8(p0,Yr);for(const[n,r]of[["gl:ground",Yr],["gl:units",xr],["gl:lights",uo]]){const o=r.renderer;o.render=Pm(n,o.render.bind(o))}S.gpuName=R8(),S.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(S.gpuName),e.style.position="fixed",Ja=document.createElement("canvas"),ts=document.createElement("canvas"),Lr=document.createElement("canvas"),es=document.createElement("canvas"),ri(Yr.canvas,1),ri(Ja,3),ri(xr.canvas,4),ri(sc,5,"multiply"),ri(uo.canvas,6,"plus-lighter"),ri(Lr,7),ri(ts,8),ri(es,9,"plus-lighter"),Lr.style.imageRendering="auto",xr.canvas.style.pointerEvents="auto",e.append(Yr.canvas,Ja,xr.canvas,sc,uo.canvas,Lr,ts,es);for(const n of["ground"])ne[n]=new Se,Yr.stage.addChild(ne[n]);for(const n of["world","top"])ne[n]=new Se,xr.stage.addChild(ne[n]);ne.lights=new Se,uo.stage.addChild(ne.lights),ne.groundCam=new Se,ne.ground.addChild(ne.groundCam),ne.worldCam=new Se,ne.world.addChild(ne.worldCam),ne.shadows=new Se,ne.entities=new Se,ne.entities.sortableChildren=!0,ne.worldCam.addChild(ne.shadows,ne.entities),ne.lightsCam=new Se,ne.lights.addChild(ne.lightsCam),lc=new gS({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),lc.resolution=.5,ne.lights.filters=[lc],Iu=kt.from(P8(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),bl=new an(kt.WHITE),ne.top.addChild(bl),H2();let t=0;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(()=>{Math.abs(window.innerWidth-S.W)<=2&&Math.abs(window.innerHeight-S.H)<=2||(pn("ventana",`capas al nuevo tamaño ${window.innerWidth}x${window.innerHeight}`),H2())},180)})}function P8(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,s]of t)o.addColorStop(i,s);return r.fillStyle=o,r.fillRect(0,0,e,e),n}let y0=null;function H2(){S.W=window.innerWidth,S.H=window.innerHeight;for(const t of[Yr,xr,uo])t.renderer.resize(S.W,S.H);a8(S.W,S.H);const e=t=>Math.ceil(t*Oh);if(Ja.width=es.width=e(S.W),Ja.height=es.height=e(S.H),ts.width=S.W,ts.height=S.H,!y0){const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144),y0=kt.from(t),y0.source.scaleMode="linear"}bl.texture=y0,bl.width=S.W,bl.height=S.H}function I8(){const e=window.MAP;for(const o of xM())ne.groundCam.addChild(h8(o.tex,o.x,o.y)),Ch.push(o.tex.source);const t=O8(),n=_r.ground.naturalWidth,r=_r.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const s=_r[o];if(!s||!s.naturalWidth)continue;const a=kt.from(s);a.source.scaleMode="linear",Ch.push(a.source);const l=new an(a);l.width=n,l.height=r;const u=new fM({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,ne.groundCam.addChild(l,u),i==="flow"?W0=u:q0=u}Rh=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),Ou=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Rh)Ph(o,!0);for(const o of Ou)Ph(o,!1)}function Ph(e,t){const n=Kt[e.sprite];if(!n||!Nu(e.sprite))return;const r=ai(e.sprite,null,0,0);if(!r)return;const o=new an(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,s]=P(e.x,e.y);o.x=i,o.y=s,o.zIndex=(e.x+e.y)*100,ne.entities.addChild(o),zu.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function O8(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,s=4+Math.random()*12,a=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${a})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(s),1),s>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(s-4),1)}const n=kt.from(e);return n.source.scaleMode="nearest",n}function z8(e){const t=Kt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",P0(e.sprite,"idle",e.animT||0)]:["walk",0]}const F8={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},E8={fragment:13656319,frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194,saw:14711338,castor_tar:6961818},W2={};function L8(e){let t=W2[e];if(!t){t=new sM;const[n,r,o]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,r,0,0,0,0,o,0,0,0,1,0],W2[e]=t}return t}function k8(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===S.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===S.hoverUnit?e.team!==t.team?"red":"white":""}function D8(e){let t=Ts.get(e.id);if(!t){const n=()=>{const r=new an(kt.EMPTY);return ne.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new an(kt.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,ne.shadows.addChild(t.shadow),Ts.set(e.id,t)}return t}function Ci(e,t,n,r,o,i,s){if(!t){e.visible=!1;return}const a=Kt[n];e.texture=t,e.visible=!0,e.anchor.set(a.ax/a.fw,a.ay/a.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=s}function U8(){const e=S.game,t=e.player,n=S.T,r=++X8;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=D8(o);i.seen=r;const s=o.kind==="tower"||o.kind==="nexus";if(o.dead){Ci(i.spr,ai("prop_boulder",null,0,0),"prop_boulder",...P(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(We(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const E of i.gear)E.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const E=o._spriteBak||(S.mode==="guest"?o.heroKey:null);E&&(o.sprite=E)}if(o.sprite&&(!Kt[o.sprite]||!Nu(o.sprite))){const E=F8[o.sprite];o._fbScale=E?E[1]:1,o._fbTint=E?E[2]:16777215,o.sprite=E&&Kt[E[0]]?E[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[a,l]=P(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const E=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(E*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!s&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let h=0;if(o._cyA!==void 0){const E=Math.min(1,(n-o._cyA)/.4);h=58*E*(2-E)+Math.sin(n*5+o.id)*5*E}else if(o._cyB!==void 0){const E=(n-o._cyB)/.18;E<1?h=o._cyH0*(1-E*E):o._cyB=void 0}o._cyH=h,u-=Math.round(h);const[c,d]=z8(o);let m=s||Kt[o.sprite]&&Kt[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!s&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const y=o.status&&o.status.transform,x=y&&y.mount&&Kt[y.mount]?y:null;if(y&&!x){o._tfT=(o._tfT||0)+1/60;const E=Math.min(1,o._tfT*4),U=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(y.scale-1)*E*U}else o._tfT=0;const b=o.status||{};let M=a,v=null;if(x){const E=Kt[x.mount],U=x.mountScale||2,G=o._stompA!==void 0&&n<o._stompA&&E.anims&&E.anims.stomp?"stomp":c,j=E.anims&&(E.anims[G]||E.anims.idle),L=G==="stomp"?Math.min(j.n-1,Math.floor((1-(o._stompA-n)/.6)*j.n)):j?d%j.n:0;v=ai(x.mount,G,m,L),i.mount||(i.mount=new an(kt.EMPTY),ne.entities.addChild(i.mount)),Ci(i.mount,v,x.mount,M,u,U,(o.x+o.y)*100+.9),i.mount.alpha=f,i.mount.tint=16777215;const k=E.dirs||16,D=k>=16?m:Math.round(m/2)%k,$=E.saddleFrames&&E.saddleFrames[G]&&E.saddleFrames[G][D],H=$&&$[L]||E.saddleXY&&E.saddleXY[D]||[0,-(E.saddle!=null?E.saddle:E.ay*.62)];M+=Math.round(H[0]*U),u+=Math.round(H[1]*U)}else i.mount&&(i.mount.visible=!1);b.stun&&["quake","roar","dust","firedash","bash"].includes(b.stun.fx)&&(M+=Math.round(Math.sin(n*60+o.id)*1.5));const w=(o.x+o.y)*100+1,_=ai(o.sprite,x?"idle":c,m,s||x?P0(o.sprite,"idle",n):d);Ci(i.spr,_,o.sprite,M,u,p,w),i.spr.alpha=f;const A=_&&!s?k8(o,t):"";if(A){if(!i.ol){i.ol=new Se;for(let U=0;U<4;U++)i.ol.addChild(new an(kt.EMPTY));ne.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=w-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==A&&(i.ol.filters=[L8(A)],i.olCol=A);const E=1.3;[[E,0],[-E,0],[0,E],[0,-E]].forEach(([U,G],j)=>Ci(i.ol.children[j],_,o.sprite,M+U,u+G,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let R=0,C=0;if(o.hitFlash>.06?(R=16777215,C=.75):b.slow?(R=E8[b.slow.fx]||8050943,C=.35):b.root?(R=3836458,C=.3):b.stun&&b.stun.fx==="arcane"?(R=11563263,C=.35):b.burn?(R=16742954,C=.25+.15*Math.sin(n*14+o.id)):y&&!x?(R=y.kind==="fire"?16747066:16765514,C=.25+.1*Math.sin(n*6)):b.hex?(R=11565823,C=.2+.08*Math.sin(n*5+o.id)):b.berserk&&(R=16722458,C=.12+.08*Math.sin(n*9+o.id)),C>0&&_?(Ci(i.glow,_,o.sprite,M,u,p,w+.5),i.glow.tint=R,i.glow.alpha=C*f):i.glow.visible=!1,S.shadowsOn&&!s&&_&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Kt[o.sprite]&&Kt[o.sprite].fly)){const E=x&&v?x.mount:o.sprite,U=Kt[E],G=x&&v?x.mountScale||2:p;i.shadow.texture=x&&v?v:_,i.shadow.visible=!0,i.shadow.anchor.set(U.ax/U.fw,U.ay/U.fh),i.shadow.setFromMatrix(new $e(G,0,-.8*G,-.38*G,Math.round(a),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const I=Kt[o.sprite]&&Kt[o.sprite].gear;let O=0;if(I&&(o.kind==="hero"||o.illusion)){const E=o.illusion?o.owner&&S.mode!=="guest"?e.gearCode(o.owner):0:S.mode==="guest"?o.gear||0:e.gearCode(o),U={w:E&3,h:E>>2&3,a:E>>4&3,b:E>>6&3};for(const G of["a","b","h","w"]){const j=U[G];if((j>0||G==="w")&&I[G]&&I[G].includes(j)){const L=o.sprite+"__"+G+j;if(!i.gear[O]){const k=new an(kt.EMPTY);ne.entities.addChild(k),i.gear[O]=k}Ci(i.gear[O],ai(L,c,m,d),L,M,u,p,w+.2+O*.05),i.gear[O].alpha=f,O++}}}if(o.kind==="courier"){const E=o.owner||(o.ownerId?e.units.find(G=>G.id===o.ownerId):null),U=E&&(E.heroKey||E.sprite);if(U&&Kt[U]){if(!i.gear[O]){const L=new an(kt.EMPTY);ne.entities.addChild(L),i.gear[O]=L}const G=Kt[o.sprite],j=Math.sin(n*3+o.id)*1.5;Ci(i.gear[O],ai(U,"idle",2,P0(U,"idle",n)),U,M,u-(G?G.ay*p:40)+2+j,.3,w+.6),i.gear[O].alpha=f,O++}}for(;O<i.gear.length;O++)i.gear[O].visible=!1}for(const[o,i]of Ts)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const s of i.gear)s.destroy();i.ol&&i.ol.destroy({children:!0}),i.mount&&i.mount.destroy(),Ts.delete(o)}}let X8=0;const Da=new Map,q2={},Rs=[];let G8=0;function N8(e,t){const n=e+(t?"o":"c");let r=q2[n];return r||(r=kt.from(Np(e,t)),r.source.scaleMode="nearest",q2[n]=r),r}function B8(){const e=S.game,t=e&&e.player,n=++G8;if(Rs.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;Rs.push(r);let i=Da.get(r.id);if(!i){const u=new an(kt.EMPTY);u.anchor.set(.5,1-1/36),ne.entities.addChild(u),i={spr:u,seen:0},Da.set(r.id,i)}i.seen=n;const[s,a]=P(r.x,r.y),l=r.until-e.t;i.spr.texture=N8(r.kind,Bu(r,S.T)),i.spr.x=Math.round(s),i.spr.y=Math.round(a),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(S.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of Da)o.seen!==n&&(o.spr.destroy(),Da.delete(r))}function $8(e,t){if(!S.tpAim||e.dead)return;const r=S.tpHover||(S.mouse.inWorld?{x:S.mouse.wx,y:S.mouse.wy}:null),o=S.game,i=S.T;for(const y of o.units)!y.dead&&y.team===e.team&&(y.kind==="tower"||y.kind==="nexus")&&ft(y.x,y.y,1.1,"#7fe8ff55",null,2,[5,5]);if(!r)return;const s=vm(e,r.x,r.y);if(!s)return;const a=Math.hypot(s.x-e.x,s.y-e.y)>=3,l=a?"#7fe8ff":"#ff6a5a",u=i*1.6%1;ft(s.x,s.y,1.4+u*.6,l+Math.round((1-u)*200).toString(16).padStart(2,"0"),null,3),ft(s.x,s.y,1.25,l,a?"rgba(127,232,255,0.12)":"rgba(255,106,90,0.12)",3);const[f,h]=P(e.x,e.y),[c,d]=P(s.x,s.y);t.save(),t.globalAlpha=.55,t.strokeStyle=l,t.lineWidth=2,t.setLineDash([8,7]),t.lineDashOffset=-i*40,t.beginPath(),t.moveTo(f,h),t.lineTo(c,d),t.stroke(),t.setLineDash([]);const m=t.createLinearGradient(c,d-170,c,d);m.addColorStop(0,"rgba(127,232,255,0)"),m.addColorStop(1,a?"rgba(127,232,255,0.35)":"rgba(255,106,90,0.3)"),t.globalAlpha=.8+.2*Math.sin(i*6),t.fillStyle=m,t.fillRect(c-18,d-170,36,170),t.globalAlpha=1,t.font="bold 13px sans-serif",t.textAlign="center";const p=a?it.t("Teletransporte"):it.t("Muy cerca");t.lineWidth=3,t.strokeStyle="#000",t.strokeText(p,c,d-178),t.fillStyle=l,t.fillText(p,c,d-178),t.restore()}function H8(e,t){const n=S.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=S.mouse.wx,s=S.mouse.wy,a=Math.hypot(i-e.x,s-e.y)>r.WARD_RANGE;if(ft(e.x,e.y,r.WARD_RANGE,a?"#ffffff70":"#ffffffb0",null,2,[8,6]),a){const[l,u]=P(e.x,e.y),[f,h]=P(i,s);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-S.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,h),t.stroke(),t.restore()}ft(i,s,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),YM(t,o?"sen":"obs",i,s)}function W8(e){if(!e.sprite||!Nu(e.sprite))return;const t=ai(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new an(t),r=Kt[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=P(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,ne.entities.addChild(n),ui.push({spr:n,t:0,vy:20})}function q8(e){const t=S.cam,n=S.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(S.W/2-t.x*t.z+r),s=Math.round(S.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])ne[m].scale.set(t.z),ne[m].position.set(i,s);const a=t.x-S.W/2/t.z-2,l=t.y-S.H/2/t.z-2,u=S.W/t.z+4,f=S.H/t.z+4;W0&&(W0.tilePosition.set(-n*14,-n*3),W0.alpha=.45+.12*Math.sin(n*1.3)),q0&&(q0.tilePosition.set(Math.sin(n*.3)*6,0),q0.alpha=.25+.15*Math.sin(n*.9));const h=S.game&&S.game.player,[c,d]=h?P(h.x,h.y):[0,0];for(const m of zu){const[p,y]=P(m.o.x,m.o.y),x=p>a-200&&p<a+u+200&&y>l-100&&y<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=ai(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Kt[m.o.sprite];if(m.spr.alpha=h&&m.o.x+m.o.y>h.x+h.y&&b&&Math.abs(c-p)<b.fw*.42&&d<y&&d>y-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,v=(M.x*12.9898+M.y*78.233)%6.28,w=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+S.wind);m.spr.skew.x=-(Math.sin(n*w*1.6+v)*_+Math.sin(n*w*3.1+v*2)*_*.3+S.wind*.02)}}}}S.game&&(Ye("render/amb"),a4(e,a,l,u,f,Rh),je("render/amb"),Ye("render/units"),U8(),B8(),je("render/units"));for(const m of ui)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=ui.length-1;m>=0;m--)ui[m].t>.8&&(ui[m].spr.destroy(),ui.splice(m,1));Ye("render/overlays"),Y8(),je("render/overlays"),Ye("render/lighting"),A8(i,s),je("render/lighting"),Th=bh,Ye("render/lights"),J8(),je("render/lights"),S.game&&S.game.player?(Ye("render/fog"),eA(),je("render/fog")):Ih&&(Ih=!1,Lr.getContext("2d").clearRect(0,0,Lr.width,Lr.height))}let Ih=!1;const Oh=1;function ix(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&q[r+"_"+n.slice(-1)])}function uc(e,t=1){const n=e.getContext("2d"),r=S.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(S.W/2-r.x*r.z+o)*t,Math.round(S.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const V8={fragment:"#7ae8ff",frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8",saw:"#ffa040",castor_tar:"#8a5ac0"};function Y8(){const e=S.game,t=S.T,n=uc(es,Oh);let r=uc(Ja,Oh);if(_1(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;s4();for(const l of e.zones){if(l.fx==="mon_spores"){ZM(l);continue}if(!ix(l))if(l.once){const u=1-l.t/l.dur;ft(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),ft(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(ft(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&T({type:"puff",x:l.x+g(-1,1)*l.r*.8,y:l.y+g(-1,1)*l.r*.8,r:g(12,22),dur:g(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const h=Math.random()*6.28,c=Math.random()*l.r;T({type:"meteor",x:l.x+Math.cos(h)*c,y:l.y+Math.sin(h)*c,dur:.25})}}}if(e.corralOf)for(const l of["blue","red"]){const u=e.corralOf(l);ft(u.x,u.y,u.r,"#5a3818","rgba(150,110,60,0.20)",4),ft(u.x,u.y,u.r,"#b98a4a",null,2,[5,4]),ft(u.x,u.y,u.r-.12,l==="blue"?"#5ab0ff60":"#ff705060",null,1.5)}l4();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];ft(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of Rs)qM(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||We(l)||ft(l.x,l.y,(l.r||.35)*(l.scale||1)*.85+.06,l===o?"#ffd24a":Z0[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const s=S.hoverUnit;s&&s!==o.target&&!s.dead&&ft(s.x,s.y,(s.r||.4)*(s.scale||1)*.85+.08,s.team===o.team?"#ffffff":"#ff6a5a",s.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=P(l.x,l.y,1.3),[h,c]=P(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(h,c),r.stroke(),r.restore()}o.target&&!o.target.dead&&ft(o.target.x,o.target.y,(o.target.r||.4)*(o.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&ft(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(j8(o),H8(o,r),$8(o,r),S.hoverAbil){const l=i[o.heroKey].abil[S.hoverAbil];l.range&&ft(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe"||l.type==="channel"&&l.self)&&ft(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const a=S.marker;if(a){const l=a.t/.3;l<1&&(r.globalAlpha=1-l*.7,ft(a.x,a.y,.16*(1-l)+.04,a.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||We(l))continue;l.status&&l.status.slow&&ft(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,V8[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u&&!u.mount){const f=u.kind==="fire",h=.5+.5*Math.sin(t*6);ft(l.x,l.y,1+h*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&ft(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let c=0;c<3;c++)Math.random()<.7&&F(l.x+g(-.6,.6),l.y+g(-.6,.6),g(.1,1.2),g(-.3,.3),g(-.3,.3),g(1,2.4),.6,f?Or("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&ft(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&ft(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&F(l.x+g(-.3,.3),l.y+g(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(ft(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&F(l.x+g(-.4,.4),l.y+g(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),Vb(l)}}if(r=uc(ts),_1(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const s=window.SIM.RUNES[i.kind],a=Math.sin(t*3+i.id)*.08,[l,u]=P(i.x,i.y,.55+a),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,s.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of Rs)VM(i,i.team===o.team);m4(),u4(),K8(r)}c4()}h4(),e&&e.player&&Z8(r)}function j8(e){if(!S.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[S.aim.k],n=S.mouse.wx,r=S.mouse.wy;let o=n-e.x,i=r-e.y;const s=Math.hypot(o,i)||1;o/=s,i/=s;const a="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&ft(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&S.game.unitTarget&&S.game.unitTarget(t)){const u=S.aimUnit;if(u){const f=(u.r||.4)*(u.scale||1)*.85+.1,h=u.team!==e.team;ft(u.x,u.y,f,h?"#ff5a4a":"#7fe0ff",h?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),ft(u.x,u.y,f+.12+Math.sin(S.T*8)*.03,h?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(t.type==="proj"||t.type==="dash"||t.type==="hook"){const u=t.type==="dash"?Math.min(s,t.range):t.range,f=(t.width||1)/2,h=-i*f,c=o*f;Bf([[e.x+h,e.y+c],[e.x+o*u+h,e.y+i*u+c],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-h,e.y+i*u-c],[e.x-h,e.y-c]],a,l)}else if(t.type==="blink"||t.type==="leap"){const u=Math.min(s,t.range||0),f=e.x+o*u,h=e.y+i*u;Bf([[e.x-i*.06,e.y+o*.06],[f-i*.06,h+o*.06],[f+i*.06,h-o*.06],[e.x+i*.06,e.y-o*.06]],a,l),ft(f,h,t.radius||.45,a,l,2)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let h=0;h<=12;h++){const c=u-t.angle+2*t.angle*h/12;f.push([e.x+Math.cos(c)*t.range,e.y+Math.sin(c)*t.range])}Bf(f,a,l)}else{const u=Math.min(s,t.range||0),f=e.x+o*u,h=e.y+i*u;ft(f,h,t.radius||.6,a,l,2)}}function K8(e){const t=S.T;for(const n of S.game.units){if(n.dead||We(n))continue;const r=n.status||{};if(Yb(e,n),!r.stun&&!r.root){if(r.slow&&r.slow.fx!=="fragment"&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;F(n.x+g(-.3,.3),n.y+g(-.3,.3),l<0?1.1:.2,g(-.2,.2),g(-.2,.2),l,.7,Or(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&F(n.x+g(-.25,.25),n.y+g(-.25,.25),.3,0,0,1.4,.4,Or("fire"),3,-1,!0);continue}const o=Kt[n.sprite],i=n.scale||1,[s,a]=P(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(s+Math.cos(u)*f,a+Math.sin(u)*f*.5),e.quadraticCurveTo(s+Math.cos(u+.8)*f*.4,a-10*i,s+Math.cos(u+1.6)*f*.6,a-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(s+Math.cos(u+1.6)*f*.6-2,a-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=a-(o?o.ay*.8:50)*i;if(l==="bash")TM(e,s,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const h=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(s+Math.cos(h)*16-3,u+Math.sin(h)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(s+Math.cos(h)*16-1,u+Math.sin(h)*5-1,2,2)}else{for(let f=0;f<3;f++){const h=t*5+f*2.09,c=s+Math.cos(h)*14,d=u+Math.sin(h)*4;e.fillStyle="#ffe070",e.fillRect(c-3,d-1,6,2),e.fillRect(c-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(c-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const h=-t*4+f*3.14,c=s+Math.cos(h)*20,d=u-6+Math.sin(h)*6;e.fillStyle="#ffffff",e.fillRect(c-3,d,3,2),e.fillRect(c,d-2,3,2)}}l==="splash"&&Math.random()<.3&&F(n.x+g(-.3,.3),n.y+g(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const js=new Map;function V0(e,t,n){const r=n+"|"+t+"|"+e;let o=js.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),s=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,a=Math.max(2,n/4);return i.font=s,o.width=Math.ceil(i.measureText(e).width+a*2+2),o.height=Math.ceil(n*1.35+a*2),i.font=s,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=a,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),js.size>2e3&&js.delete(js.keys().next().value),js.set(r,o),o}function Q8(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(Z0))V0(e[t].name,n,11),V0("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)V0(String(t),"#ffe070",10)}function Z8(e){const t=S.game,n=t.player,r=S.cam,o=window.SIM.HEROES,i=r.x-S.W/2/r.z,s=r.y-S.H/2/r.z,a=S.W/r.z,l=S.H/r.z,u=(h,c,d,m,p,y,x)=>{e.fillStyle="#000000c0",e.fillRect(h-1,c-1,d+2,m+2),e.fillStyle=x,e.fillRect(h,c,d,m),e.fillStyle=y,e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(h,c,d,m,p,y=p)=>{const x=V0(h,m,y),b=p/y,M=x.width*b,v=x.height*b;e.drawImage(x,Math.round(c-M/2),Math.round(d-v/2),M,v)};for(const h of t.units){if(h.dead||We(h))continue;const c=(h.x-h.y)*N.HW+N.OX,d=(h.x+h.y)*N.HH;if(c<i-60||c>i+a+60||d<s-60||d>s+l+160||(h.kind==="monster"||h.kind==="courier")&&h.hp>=h.maxHp-1&&!h.boss)continue;const m=Kt[h.sprite],p=d-(h.leaping?40:0),y=h.status&&h.status.transform&&h.status.transform.mount&&Kt[h.status.transform.mount]?h.status.transform:null,x=y?(Kt[y.mount].saddle!=null?Kt[y.mount].saddle:Kt[y.mount].ay*.62)*(y.mountScale||2):0,b=p-x-(m?m.ay*(h.scale||1)*(h._fbScale||1)*(h.monster==="serpent"?1.4:.92):50)-6,M=h.kind==="hero"||h.kind==="tower"||h.kind==="nexus"||h.boss,v=M?66:34,w=M?7:4,_=h===n?"#3ccf4e":h.team==="neutral"?"#e8c040":Z0[h.team];if(e.globalAlpha=n&&h.team!==n.team&&h._va!==void 0?Math.min(1,h._va):1,u(c-v/2,b,v,w,h.hp/h.maxHp,_,"#1a0e0e"),h.kind==="minion"&&h.team!==n.team&&h.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(c-v/2-1.5,b-1.5,v+3,w+3)),h.kind==="hero")for(let A=1;A<6;A++)e.fillStyle="#00000080",e.fillRect(c-v/2+v*A/6,b,1,w);if(y&&y.mmax&&(u(c-110/2,b-22,110,8,y.mhp/y.mmax,"#d8a040","#2a1a0a"),f("Behemoth",c,b-30,"#ffd890",10)),h.shield>0&&S.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(c-v/2+h.hp/h.maxHp*v,b,Math.min(v*(1-h.hp/h.maxHp),h.shield/h.maxHp*v),w)),h.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(c-v/2-16,b-2,14,w+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(c-v/2-16,b-2,14,w+4),f(String(h.level),c-v/2-9,b+w/2+1,"#ffe070",10),h!==n&&f((h.human?"★ ":"")+o[h.heroKey].name,c,b-9,Z0[h.team],11);const A=t.castInfo&&t.castInfo(h);A&&u(c-v/2,b+w+3,v,4,A.p,A.kind===2?"#7ad0ff":A.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const h of t.texts){if(h.dst!==void 0&&h.dst!==n.id&&h.src!==n.id&&!(n.target&&h.dst===n.target.id))continue;const[c,d]=P(h.x,h.y,1.1+h.t*.9);e.globalAlpha=Math.max(0,1-h.t/1.1);const m=h.t<.12?1.4-h.t*3:1;f(it.t(String(h.txt)),c+(h.id%7-3)*3,d,h.col,(h.big?20:14)*m,h.big?20:14)}e.globalAlpha=1}function J8(){let e=0;const t=S.T,n=(r,o,i,s,a,l)=>{let u=m0[e];u||(u=new an(Iu),u.anchor.set(.5),u.blendMode="add",ne.lightsCam.addChild(u),m0[e]=u),e++;const[f,h]=P(r,o,i);u.visible=!0,u.x=f,u.y=h,u.width=u.height=s*(2+.35*Th),u.tint=a,u.alpha=Math.min(1,l*(1+.7*Th))};for(const r of Ou)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of Ou)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&F(r.x+g(-.1,.1),r.y+g(-.1,.1),.9,g(-.2,.2),g(-.2,.2),g(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(S.game){for(const r of S.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),We(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&!o.mount&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*N.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of Rs)Bu(r,t)&&n(r.x,r.y,ed(r.kind)/N.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of S.game.zones)r.once&&!ix(r)&&n(r.x,r.y,0,r.r*N.HW*1.4,13143295,.35);for(const r of S.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<m0.length;e++)m0[e].visible=!1}let Pi=null;function tA(){if(Pi)return Pi;Pi=document.createElement("canvas"),Pi.width=Pi.height=128;const e=Pi.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Pi}function eA(){const t=Math.ceil(S.W/4),n=Math.ceil(S.H/4),r=S.cam;(Lr.width!==t||Lr.height!==n)&&(Lr.width=t,Lr.height=n),Ih=!0;const o=Lr.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of S.visionSrc){const[s,a]=P(i.x,i.y),l=((s-r.x)*r.z+S.W/2)/4,u=((a-r.y)*r.z+S.H/2)/4,f=bm(i.kind)*N.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(tA(),l-f,u-f/2,f*2,f)}}function nA(e){if(!Nu("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,s=Math.sqrt(n())*r.r*.85,a=r.x+Math.cos(i)*s,l=r.y+Math.sin(i)*s;Ph({x:a,y:l,sprite:"prop_bush",tree:!1},!1);const f=zu[zu.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function ax(){for(const[,e]of Ts){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}Ts.clear();for(const e of ui)e.spr.destroy();ui.length=0;for(const[,e]of Da)e.spr.destroy();Da.clear(),Rs.length=0}let Ze,dn,Tr,J,yt,Br="dragon",Xo="blue",nt=null,V2=0,qi=0,fc=0,g0=!1,Ua=!1,zh=!1,ar={},pi=null,yi=!1,Y2=0,j2=0,rA=0,cc=performance.now(),K2=-9,Fh=!1;const oA=["buff","aoe_self","heal_aoe","illusion","global","copypaste"],iA=e=>oA.includes(e.type)||e.type==="channel"&&e.self,aA=["facil","normal","dificil"],ol=new Map;let Eh=!1;function $t(e){if(e==null)return"";if(e=String(e),Eh||Nh.value==="es"||!window.I18N)return e;const t=ol.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return ol.size>5e3&&ol.clear(),ol.set(e,r),r}function sA(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=dn[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=Ze.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of Ze.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(Ze&&Ze.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=Ze.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function sx(e,t,n,r=1,o=1){if(t===void 0||n===void 0){J.play(e,r,0,.03,o);return}const[i,s]=P(t,n),a=S.cam,l=(i-a.x)*a.z,u=(s-a.y)*a.z;let f=Math.hypot(l/S.W,u/S.H);const h=S.game&&S.game.player;if(h&&!h.dead){const[c,d]=P(h.x,h.y);f=Math.min(f,Math.hypot((i-c)*a.z/S.W,(s-d)*a.z/S.H))}J.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(S.W*.6))),.03,o)}function bd(e,t,n,r){if(!J.babble)return;const o=Math.max(0,Tr.indexOf(e))*7+3;if(n===void 0||r===void 0){J.babble(o,t,.5,0);return}const[i,s]=P(n,r),a=S.cam,l=(i-a.x)*a.z,u=(s-a.y)*a.z,f=Math.hypot(l/S.W,u/S.H),h=.5*Math.max(0,1-f*1.1);h>.05&&J.babble(o,t,h,Math.max(-1,Math.min(1,l/(S.W*.6))))}let Q2=0;function Vi(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function tn(e,t="#ffe7b0",n=1.5){S.game&&S.game.msg(e,t,n)}async function lA(e){Ze=window.SIM,dn=Ze.HEROES,Tr=Ze.HERO_KEYS,J=window.AUDIO,yt=new window.Net;{const r=J.play,o=J.babble;J.play=function(i,...s){nu("snd",1,i),Ye("snd");try{return r.call(J,i,...s)}finally{je("snd")}},o&&(J.babble=function(...i){return nu("voice"),o.apply(J,i)})}{const r=Pd.debounceRendering;Pd.debounceRendering=o=>(r||queueMicrotask)(()=>{Ye("ui");try{o()}finally{je("ui")}})}Ox();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(Nh.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");aA.includes(r)&&(Yn.value={...Yn.value,difficulty:r})}catch{}try{S.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}sA(),it.babble=bd,it.sfx=sx,it.say=Vi,it.play=(r,o)=>J.play(r,o??1),it.t=$t,it.banner=(r,o,i,s,a)=>{const l=os.value.slice(-3);os.value=[...l,{id:++rA,title:$t(r),color:o,killerKey:i,victimKey:s,big:a}]},zx(qr),ux(),Yn.value={...Yn.value,volMaster:J.volume?J.volume("m"):1,volMusic:J.volume?J.volume("mu"):1,volSfx:J.volume?J.volume("s"):1,soundStyle:J.style?J.style():"epic",shadows:S.shadowsOn},await mM(r=>Yx.value=r),await C8(e),I8(),vA(),Q8(),await Promise.all([T8(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,Fx(),Ex().then(()=>Promise.all([Lx(Tr),kx(Tr)])),document.fonts?document.fonts.ready:null]);try{const r=new Ze.Game(window.MAP,{humans:[]});nA(r._makeBushes())}catch(r){console.warn(r)}AA(),TA();const[t,n]=P(N.N/2,N.N/2);S.cam.x=t,S.cam.y=n,await Dx(),rn.value="menu",yt.init().then(r=>{wm.value=!!r}).catch(()=>{}),yt.onChange=()=>wl(),NA(),requestAnimationFrame(cx)}function lx(e){const t=Ze.PASSIVES&&Ze.PASSIVES[e];return t?{name:$t(t[0]),desc:$t(t[1])}:{name:"",desc:""}}function ux(){Ux.value=Tr.filter(e=>!dn[e].wip).map(e=>{const t=dn[e];return{key:e,name:t.name,title:$t(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:$t(t.abil[n].name),desc:$t(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:lx(e)}}),Xx.value=Ze.ITEMS.map(e=>({id:e.id,name:$t(e.name),desc:$t(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:Ze.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let Z2="";function vd(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(pn("error",t),t===Z2)return;Z2=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const wd="v9.9";{const e=document.createElement("div");e.id="build-tag",e.textContent=wd,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>vd(e.error||e.message));window.addEventListener("unhandledrejection",e=>vd(e.reason));let fx=performance.now(),x0=0;function J2(){const e=performance.now();if(e-fx<150){x0=0;return}const t=x0?Math.min(.05,(e-x0)/1e3):1/30;x0=e,S.T=e/1e3;try{const n=rn.value;n==="pick"&&nt&&(vx(t),ea()),n==="lobby"&&wx(t),n==="play"&&S.game&&hx(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=J2,e=!0}catch{}e||setInterval(J2,33)}const uA={menu:0,lobby:1,pick:2,play:3};function cx(e){fx=performance.now(),t3(e-cc);const t=Math.min(.05,(e-cc)/1e3);cc=e,S.T=e/1e3;try{const n=rn.value;Vn("screen",uA[n]??9),n==="pick"&&nt&&(Ye("draft"),vx(t),ea(),je("draft")),n==="lobby"&&(Ye("lobby"),wx(t),je("lobby")),Ye("play"),n==="play"&&S.game?xA(t):mA(t),je("play"),S.marker&&(S.marker.t+=t,S.marker.t>.3&&(S.marker=null)),Ye("fx"),i4(t),je("fx"),Ye("render"),q8(t),je("render"),(j2-=t)<=0&&S.game&&(j2=.1,Ye("minimap"),Ix(),je("minimap")),(nm-=t)<=0&&(nm=.5,Ye("amb"),dA(),je("amb")),n!=="play"&&(em-=t)<=0&&(em=1,yt.available&&($x.value=yt.openGames())),S.game&&(tm-=t)<=0&&(tm=.25,fA()),Xa&&hA()}catch(n){console.error(n),vd(n)}requestAnimationFrame(cx)}let tm=0;function fA(){const e=S.game,t=jb();let n=0,r=0,o=0;for(const i of e.units)i.dead||(i.kind==="hero"?n++:i.kind==="minion"?o++:i.owner&&r++);Vn("units",e.units.length),Vn("heroes",n),Vn("minions",o),Vn("pets",r),Vn("proj",(e.projectiles||e.proj||[]).length),Vn("simFx",(e.fx||[]).length),Vn("parts",t.parts),Vn("efx",t.efx),Vn("decals",t.decals),Vn("ambFx",t.amb),Vn("dynLights",t.dynL),Vn("t",Math.round(e.t)),Vn("zoom",Math.round(S.cam.z*100)/100),Vn("dom",document.getElementsByTagName("*").length)}let Xa=null;function cA(){if(Xa){Xa.remove(),Xa=null;return}const e=document.createElement("canvas");e.width=470,e.height=190,e.style.cssText="position:fixed;left:8px;top:8px;z-index:9999;pointer-events:none;background:rgba(8,6,14,.82);border:1px solid #5a4a7a;border-radius:6px",document.body.appendChild(e),Xa=e}function hA(){const e=Xa,t=e.getContext("2d"),n=d3(),r=e.width,o=100;t.clearRect(0,0,r,e.height);const i=Math.min(n.ring,r-10),s=8+o,a=f=>s-Math.min(o,f*o/100);t.fillStyle="#2a2440";for(const f of[16.7,33,50])t.fillRect(5,a(f),i,1);for(let f=0;f<i;f++){const h=(n.pos-i+f+n.ring*2)%n.ring,c=n.gap[h],d=n.work[h],m=5+f;t.fillStyle=c>50?"#ff4a3a":c>33?"#ffb040":"#4a8aff",t.fillRect(m,a(c),1,s-a(c)),t.fillStyle="#9fe0a0",t.fillRect(m,a(d),1,s-a(d))}t.font="11px monospace",t.fillStyle="#e8e0ff";const l=n.secs;t.fillText(l?`fps ${l[1]}  peor ${l[2]}ms  p95 ${l[7]}ms  juego ${l[8]}ms/cuadro  mem ${l[10]}MB`:"...",6,s+14),t.fillText(`tirones ${n.hitches}  marcas F4 ${n.marks}  ping ${Math.round(n.ping)}ms  jitter ${Math.round(n.jitter)}`,6,s+28),t.fillText(n.parts.slice(0,5).map(([f,h])=>f+" "+h.toFixed(1)).join("  "),6,s+42);const u=n.last;u&&(t.fillStyle="#ffb0a0",t.fillText(`ultimo tiron: ${u.ms}ms (juego ${u.work}, afuera ${u.outside}) a los ${u.t}s`,6,s+56)),t.fillStyle="#8a80a8",t.fillText("azul/rojo: cuadro   verde: trabajo del juego   F4: marcar tiron",6,s+70)}let em=0,nm=0;function dA(){if(!J.setAmbient)return;const e=Rr(S.W/2,S.H/2),t=N.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),s=Math.max(0,1-i/11),a=Math.max(0,1-o*.7-s)*.9;J.setAmbient(o,a,s)}function mA(e){const t=S.T*.05,n=N.N/2+Math.cos(t)*12,r=N.N/2+Math.sin(t*1.3)*12,[o,i]=P(n,r);S.cam.x+=(o-S.cam.x)*Math.min(1,e*.5),S.cam.y+=(i-S.cam.y)*Math.min(1,e*.5),S.cam.z=S.cam.tz=1.25}let il="",hc=!1,M0=0;const b0={};let rm=0,om=0,pA=0,im=0,v0={x:-99,y:-99,z:0};const am={};function yA(){if(S.mode!=="guest"||S.T-im<.4)return;const e=Rr(S.W/2,S.H/2),t=Math.round(S.cam.z*100)/100;Math.hypot(e.x-v0.x,e.y-v0.y)<2&&t===v0.z||(im=S.T,v0={x:e.x,y:e.y,z:t},yt.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function gA(){if(!(hc||!yt.code)){hc=!0,M0||(M0=performance.now(),tn("Se cortó la conexión. Reconectando...","#ffb070",3)),pn("net","conexion perdida, reconectando");try{await yt.rejoin(),M0=0,tn("¡Reconectado!","#9fe0a0",2.5),J.play("announce",.4),pn("net","reconectado")}catch{performance.now()-M0>9e4?(tn("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),yt.lost=!1,yt.code=null):await new Promise(t=>setTimeout(t,2500))}hc=!1}}function hx(e){const t=S.game;EA(e);{const n=Mm(t.t).phase;n!==il&&(il&&n==="dusk"&&(tn("Cae la noche: se ve menos lejos","#a8b8ff",3),J.play("announce",.35)),il&&n==="dawn"&&(tn("Amanece","#ffe0a0",2.5),J.play("announce",.3)),il=n)}if(S.mode==="guest"){if(yt.lost&&gA(),yA(),S.T-om>2&&(om=S.T,yt.send(["ping",Math.round(performance.now())])),S.T-rm>5){rm=S.T;const n=l3();n&&yt.send(["tel",n])}Ye("sim/guest"),t.guestTick(e),je("sim/guest"),yt.hostState&&yt.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(S.mode==="host")for(const[n,r]of yt.pullCommands())r[0]==="cam"?am[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?b0[n]=r[1]:r[0]==="tel"?u3(n,r[1]):t.input(n,r);if(Ye("sim/update"),!(Qr.value&&S.mode==="solo")&&!Uh()&&t.update(e),je("sim/update"),S.mode==="host"&&(qi-=e,qi<=0)){Ye("sim/snap");const n=!!(yt.game&&yt.game.sendSnapTo);qi=Math.max(0,qi+(n?yt.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(a=>a.human),o=zn>=0?Math.round(zn*10)/10:Mo?0:-1,i=t.winner?"end":"play",s=r.map(a=>[a.human,a.team,a.heroKey]);if(n){const a=pA++%8===0;for(const l of yt.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},am[l.id]],full:a});f.I=o,b0[l.id]!==void 0&&(f.pe=b0[l.id],delete b0[l.id]),yt.publishTo(l.id,i,f,a?s:null)}yt.publishMeta(i,s)}else{const a=t.snapshot(3300,r);a.I=o,yt.publish(i,a,s)}je("sim/snap")}}}function xA(e){Cs||PA(),Ye("play/sim"),hx(e),je("play/sim");const t=S.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&W8(o);(sm&&!n.dead||!n.dead&&Math.hypot(n.x-lm,n.y-um)>8)&&Fu(),sm=!!n.dead,lm=n.x,um=n.y,MA(e),S.mouse.wx=Rr().x,S.mouse.wy=Rr().y,S.mouse.rd&&!t.winner&&!S.aim&&S.mouse.inWorld&&(fc-=e,fc<=0&&(fc=.12,px(!1))),Ye("play/fx"),r4(),SA(e),je("play/fx"),!zh&&t.t>7.5&&(zh=!0,Vi("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;J.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),Ye("play/vision"),bA(e),je("play/vision"),Ye("play/pick"),S.hoverUnit=!S.mouse.md&&!S.aim&&S.mouse.inWorld?mx():null,S.aimUnit=S.aim&&S.mouse.inWorld?_d():null,je("play/pick"),RA(),Fh=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Fh&&S.T-K2>3&&(K2=S.T,J.play("deny",.5)),(Y2-=e)<=0&&(Y2=1/15,Ye("play/hud"),Q0(),je("play/hud"))}let dc=0,sm=!1,lm=0,um=0;function MA(e){const t=S.game.player,n=S.cam,r=S.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(S.camFollow||ar[" "])){const[o,i]=P(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||w0();dc=i&&(r.x<2||r.x>S.W-2||r.y<2||r.y>S.H-2)||ar.ArrowLeft||ar.ArrowRight||ar.ArrowUp||ar.ArrowDown?Math.min(1,dc+e/.2):0;const l=2e3*(.35+.65*dc)*e/n.z;ar.ArrowLeft&&(n.x-=l),ar.ArrowRight&&(n.x+=l),ar.ArrowUp&&(n.y-=l),ar.ArrowDown&&(n.y+=l),i&&(r.x<2&&(n.x-=l),r.x>S.W-2&&(n.x+=l),r.y<2&&(n.y-=l),r.y>S.H-2&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-S.W/2)/n.z+n.x,i=(r.y-S.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(S.camFollow||ar[" "])||(n.x=o-(r.x-S.W/2)/n.z,n.y=i-(r.y-S.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*N.N*N.HW,n.x)),n.y=Math.max(0,Math.min(2*N.N*N.HH,n.y))}function fm(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function bA(e){const t=S.game,n=t.player;S.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&Am[o.kind]);for(const o of t.wards||[])o.team===n.team&&S.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=fm(o.x,o.y);let s=0;for(const a of S.visionSrc){const l=bm(a.kind);if(a.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-a.x,o.y-a.y)>2.5||Math.abs(o.x-a.x)>=l||Math.abs(o.y-a.y)>=l)continue;const u=Math.hypot(o.x-a.x,o.y-a.y);if(u<l&&(!i||fm(a.x,a.y)||u<2.2)&&(s=Math.max(s,Math.min(1,(l-u)/1.4)),s>=1))break}s>0&&t.bushHidden(o,n.team)&&(s=0),o._va=(o._va||0)+(s-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}S.visible=r}let vl=null;function dx(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function vA(){vl===null&&(vl=[_r.water_mask,_r.water_calm].filter(e=>e&&e.naturalWidth).map(dx).filter(Boolean))}function wA(e,t){vl===null&&(vl=[_r.water_mask,_r.water_calm].filter(i=>i&&i.naturalWidth).map(dx).filter(Boolean));const[n,r]=P(e,t);for(const i of vl){const s=Math.floor(n/4),a=Math.floor(r/4);if(s>=0&&a>=0&&s<i.w&&a<i.h&&i.d[(a*i.w+s)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function SA(e){const t=S.game,n=t.player,r=S.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||We(o)||o.dash)continue;const[i,s]=P(o.x,o.y);if(Math.abs(i-r.x)>S.W/r.z||Math.abs(s-r.y)>S.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const a=wA(o.x,o.y);if(a==="water"){T({type:"ring",x:o.x+g(-.1,.1),y:o.y+g(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)F(o.x,o.y,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else a==="dirt"&&Math.random()<.5&&F(o.x,o.y,.05,g(-.3,.3),g(-.3,.3),g(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?J.play("step_"+a,.32,0,80):Math.random()<.5&&sx("step_"+a,o.x,o.y,.12))}}function Le(e){S.mode==="guest"?(yt.send(e),S.game.predict(e)):S.game.input(S.localId,e)}function mx(){const e=S.game,t=e.player,n=S.cam,r=window.META;let o=null,i=1e9;const s=Rr();for(const a of e.units){if(a.dead||We(a)||a.team!==t.team&&a._va!==void 0&&a._va<.4||a.team===t.team&&!(a.kind==="minion"&&e.deniable(a,t))||S.mode!=="guest"&&a.team!==t.team&&!e.targetable(a,t))continue;const l=r[a.sprite],[u,f]=P(a.x,a.y),h=(u-n.x)*n.z+S.W/2,c=(f-n.y)*n.z+S.H/2,d=(a.scale||1)*n.z*(a.monster==="serpent"?1.45:1),m=a.kind==="tower"||a.kind==="nexus"||a.boss;let p=(l?l.ay*(a.kind==="minion"?.72:.85):50)*d,y=(m?34:a.kind==="minion"?11:a.kind==="monster"?16:18)*d;const x=a.status&&a.status.transform&&a.status.transform.mount,b=x&&r[x];if(b){const w=(a.status.transform.mountScale||2)*n.z;p+=(b.saddle||b.ay*.62)*w,y=Math.max(y,b.fw*.3*w)}const M=7;let v=1e9;if(Math.abs(S.mouse.x-h)<y+M&&S.mouse.y<c+5*d+M&&S.mouse.y>c-p-M)v=Math.abs(S.mouse.x-h)/(y+M)+Math.abs(S.mouse.y-(c-p/2))/(p+M);else if(a.kind==="hero"||m){const w=Math.hypot(s.x-a.x,s.y-a.y);w<a.r*(a.scale||1)+.2&&(v=1.5+w)}v>1e8||(a.kind==="hero"&&(v-=.4),v<i&&(i=v,o=a))}return o}function _A(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.units){if(o.dead||We(o)||o.kind==="hero"||o.team!==S.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,s]=P(o.x,o.y),a=(i-e.x)*e.z+S.W/2,l=(s-e.y)*e.z+S.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,h=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,c=(f?34:14)*u;if(Math.abs(S.mouse.x-a)<c&&S.mouse.y<l+6*u&&S.mouse.y>l-h){const d=Math.abs(S.mouse.x-a)+Math.abs(S.mouse.y-(l-h/2));d<r&&(r=d,n=o)}}return n}function Sd(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.heroes){if(o.dead||We(o))continue;const[i,s]=P(o.x,o.y),a=(i-e.x)*e.z+S.W/2,l=(s-e.y)*e.z+S.H/2;let u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;const h=o.status&&o.status.transform&&o.status.transform.mount,c=h&&t[h];if(c){const d=(o.status.transform.mountScale||2)*e.z;u+=(c.saddle||c.ay*.62)*d,f=Math.max(f,c.fw*.3*d)}if(Math.abs(S.mouse.x-a)<f&&S.mouse.y<l+10*e.z&&S.mouse.y>l-u){const d=Math.abs(S.mouse.x-a)+Math.abs(S.mouse.y-(l-u/2));d<r&&(r=d,n=o)}}return n}function px(e){const t=Rr();if(!e&&g0)return;const n=e?mx():null;if(e&&(pi=null),n){g0=!0,Le(["a",n.id]),J.play("click",.3),S.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=S.game.player,o=(S.game.wards||[]).find(i=>i.team!==r.team&&S.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){g0=!0,Le(["dw",o.id]),J.play("click",.3),S.marker={x:o.x,y:o.y,t:0,atk:!0};return}}g0=!1,Le(["m",t.x,t.y]),e&&(S.marker={x:t.x,y:t.y,t:0},J.play("move",.25),S.T-Q2>7&&Math.random()<.5&&(Q2=S.T,bd(S.game.player.heroKey,"ok")))}function yx(e){const t=S.game.player;if(t.ranks&&!t.ranks[e]){tn(t.points>0&&S.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),J.play("deny",.6);return}const n=S.game.abilOf(t,e);if((t.cds[e]||0)>.05&&!(n.type==="copypaste"&&t.status&&t.status.copy)){tn("En enfriamiento","#bbbbbb",.8),J.play("deny",.5);return}const r=Rr();if(pi=null,iA(n)){Le(["c",e,r.x,r.y]),S.aim=null;return}if(S.aim&&S.aim.k===e){Mx();return}S.aim={k:e},J.play("aim",.3)}function gx(){if(!S.tpAim)return;const e=Rr();Le(["u","tp_scroll",e.x,e.y]),J.play("click",.4),S.tpAim=!1}function xx(){if(!S.wardAim)return;const e=Rr();Le(["u",S.wardAim.id,e.x,e.y]),J.play("click",.4),S.wardAim=null}function _d(){const e=S.game&&S.game.player;if(!e||!S.aim)return null;const t=S.game.abilOf(e,S.aim.k);if(!S.game.unitTarget(t))return null;const n=Sd();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function Mx(){if(!S.aim)return;const e=S.game.player,t=S.game.abilOf(e,S.aim.k);if(S.game.unitTarget(t)){const r=_d();if(!r){tn(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),J.play("deny",.4);return}Le(["c",S.aim.k,r.x,r.y,r.id]),S.aim=null,S.marker={x:r.x,y:r.y,t:0,atk:r.team!==e.team};return}const n=Rr();Le(["c",S.aim.k,n.x,n.y]),S.aim=null}function Lh(e){const t=S.game&&S.game.player;t&&(S.game.canRankUp(t,e)?(Le(["l",e]),J.play("levelup",.5)):(tn(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),J.play("deny",.4)))}function Fu(){const e=S.game&&S.game.player;if(!e)return;const[t,n]=P(e.x,e.y);S.cam.x=t,S.cam.y=n-30}function kh(){S.cam.tz=Bh,S.cam.zoomMsgT=1.2}function cm(){if(rn.value!=="play"){rn.value==="menu"&&(Qr.value=!Qr.value);return}S.aim||S.wardAim||S.tpAim||rs.value?(S.aim=null,S.wardAim=null,S.tpAim=!1,rs.value=!1):Qr.value=!Qr.value}function hm(){if(S.aim&&(S.aim=null),S.wardAim){S.wardAim=null;return}if(S.tpAim){S.tpAim=!1;return}S.amove=!1,S.mouse.rd=!0,px(!0)}function AA(){const e=Md();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),Gx(e),jx(cm),window.addEventListener("mousemove",t=>{w0()||(S.mouse.md&&(S.cam.x-=(t.clientX-S.mouse.x)/S.cam.z,S.cam.y-=(t.clientY-S.mouse.y)/S.cam.z),S.mouse.x=t.clientX,S.mouse.y=t.clientY,S.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{rn.value==="play"&&(S.cam.tz=Math.max(.75,Math.min(3,S.cam.tz*(t.deltaY>0?.9:1.1))),S.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&kh()}),e.addEventListener("mousedown",t=>{J.init(),J.startMusic(),window.VOICE&&window.VOICE.init(),w0()||(S.mouse.x=t.clientX,S.mouse.y=t.clientY,rn.value==="play"&&!Uh()&&Nx(t.clientX,t.clientY));const n=S.game;if(!(rn.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){S.mouse.md=!0,t.preventDefault();return}if(!Qr.value){if(t.button===0&&t.altKey){qr.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(S.wardAim){xx();return}if(S.tpAim){gx();return}if(S.aim){Mx();return}if(S.amove){S.amove=!1;const o=Rr();Le(["am",o.x,o.y]),S.marker={x:o.x,y:o.y,t:0,atk:!0},J.play("click",.3);return}const r=Sd()||_A();pi=r&&r!==n.player?r.id:null}t.button===2&&hm()}}}),window.addEventListener("mousedown",t=>{if(t.button!==2||rn.value!=="play"||!S.game||!S.game.player||S.game.winner||Qr.value)return;const n=t.target;!n||n===e||n.closest&&n.closest(".minimap, .shop, .chat-input, input, textarea")||(t.isTrusted&&w0()||(S.mouse.x=t.clientX,S.mouse.y=t.clientY),t.preventDefault(),t.stopPropagation(),hm())},!0),window.addEventListener("mouseup",t=>{t.button===2&&(S.mouse.rd=!1),t.button===1&&(S.mouse.md=!1),t.button===0&&(S.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;J.init();const r=S.game,o=t.key.toUpperCase();if(rn.value==="play"&&r&&r.player&&t.key==="Enter"){Sm.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){t.shiftKey?J.toggleMusic():J.toggleMute();return}if(t.key==="F3"){cA(),t.preventDefault();return}if(t.key==="F4"&&rn.value!=="play"){Dd(),t.preventDefault();return}if(t.key==="Escape"&&rn.value==="menu"){Qr.value=!Qr.value;return}if(rn.value!=="play"||!r||!r.player)return;if(Uh()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&S.mode==="solo"&&(Rx(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){cm();return}if(t.key==="Tab"){t.repeat||(al.value=!al.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){Lh(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(Ua=!Ua,J.play("aim",.4)):(tn("No tienes puntos de habilidad","#bbbbbb",1),J.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&Ua){Ua=!1,Lh(o);return}if("QWER".includes(o)&&o.length===1){S.wardAim=null,yx(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){qr.useItem(+t.key-1),t.preventDefault();return}const s=!t.ctrlKey&&!t.altKey&&!t.metaKey?Kx(Qx(t)):null;if(s){s.startsWith("item")?qr.useItem(+s.slice(4)):s==="recall"?qr.recall():qr.useCons(s),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){Fu(),t.preventDefault();return}if(t.key==="F2"){qr.courier(),t.preventDefault();return}if(t.key==="F4"){Dd(),tn('Marcado en el registro: "acá se trabó"',"#c8e8ff",1.5),t.preventDefault();return}if(t.key.startsWith("Arrow")){ar[t.key]=!0,t.preventDefault();return}if(o==="P"||t.key==="4"&&!t.shiftKey){rs.value=!rs.value,J.play("click",.4),t.preventDefault();return}if(o==="K"){J.setStyle&&(qr.setSoundStyle(J.style()==="epic"?"pixel":"epic"),tn("Sonido: "+(J.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){S.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){qr.spell(o);return}o==="S"&&Le(["s"]),o==="Y"&&(S.camFollow=!S.camFollow),t.key==="0"&&kh(),t.key===" "&&(ar[" "]=!0,Fu(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete ar[t.key]}),window.addEventListener("blur",()=>{al.value=!1,ar={},S.mouse.md=!1,S.mouse.rd=!1,S.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{S.mouse.inWorld=!1})}const co={};function TA(){const e=(r,o,i,s)=>{const a=document.createElement("canvas");a.width=40,a.height=40;const l=a.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,h)=>[...f].forEach((c,d)=>{c!==" "&&(l.fillStyle=c==="X"?"#0a0610":c==="L"?o:c==="M"?r:i,l.fillRect(d*2,h*2,2,2))})),s){for(let c=0;c<7;c++)l.fillStyle="#0a0610",l.fillRect(18+c*2-1,26-c*2-1,4,4);for(let c=0;c<7;c++)l.fillStyle=c<5?"#e8eef8":"#ffd24a",l.fillRect(18+c*2,26-c*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${a.toDataURL()}) 0 0, auto`};co.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),co.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),co.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);co.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=co.normal}let dm="";function RA(){const e=S.game&&S.game.player,t=S.hoverUnit,n=S.aim||S.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==dm&&(dm=n,Md().style.cursor=co[n],document.documentElement.style.cursor=co.normal,Rm(co[n]))}function bx(){const e=S.mode==="solo"?"local":yt.myPeer||"host";return nt&&nt.h&&nt.h[e]}function Y0(e){const t=e?[{id:yt.myPeer||"host",team:Xo},...yt.guests().map(s=>({id:s.id,team:s.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const s of t)r[s.team]<5&&(n[s.id]=[s.team,r[s.team]++,0]);const o=[];let i=0;for(const s of["blue","red"])for(let a=r[s];a<5;a++)o.push({team:s,slot:a,at:2+Math.random()*24,q:i++});o.sort((s,a)=>s.q%2-a.q%2||s.q-a.q),o.forEach((s,a)=>s.q=a),nt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Br||Tr[0],locked:!1,prep:-1,online:!!e},e&&(S.mode="host"),rn.value="pick",J.setMode("menu"),J.play("announce",.6),ea()}function Dh(e,t){if(!nt||!e)return;const n=t===void 0;if(n&&S.mode==="guest"){nt.locked||(yt.send(["lock",e]),Br=e,nt.pending=e,J.play("levelup",.7));return}const r=n?S.mode==="solo"?"local":yt.myPeer||"host":t,o=nt.h[r];if(!o||o[2])return;const[i,s]=o,a=l=>nt.blue.includes(l)||nt.red.includes(l);if(a(e))if(n){J.play("deny",.6);return}else{const l=Tr.filter(u=>!a(u)&&!dn[u].noBots&&!dn[u].wip);e=l[Math.random()*l.length|0]}nt[i][s]=e,o[2]=1,n&&(nt.locked=!0,Br=e,nt.view=e,J.play("levelup",.7),bd(e,"select"))}function mm(e){const t=nt[e],n=[...nt.blue,...nt.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(s=>!t.some(a=>a&&dn[a].role===s));let o=Tr.filter(s=>!n.includes(s)&&!dn[s].noBots&&!dn[s].wip);const i=o.filter(s=>r.includes(dn[s].role));return i.length&&(o=i),o[Math.random()*o.length|0]||Tr[Math.random()*Tr.length|0]}function vx(e){if(S.mode==="guest")return CA();if(nt.online){for(const[n,r]of yt.pullCommands())r[0]==="lock"&&Dh(r[1],n);(V2-=e)<=0&&(V2=.25,yt.publishDraft({t:Math.round(nt.t*10)/10,p:Math.round(nt.prep*10)/10,b:nt.blue,r:nt.red,h:nt.h}))}if(nt.prep<-1e8)return;if(nt.prep>=0){if(nt.prep-=e,nt.prep<=0){nt.prep=-1e9;const n=nt.online;Ad(()=>n?IA():_x())}return}if(!nt.online){if(nt.locked){nt.bt=(nt.bt||0)+e;for(const n of nt.order)!n.done&&nt.bt>=(yi?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,nt[n.team][n.slot]=mm(n.team),J.play("click",.35))}nt.locked&&nt.order.every(n=>n.done)&&(nt.prep=yi?1.5:3,J.play("announce",.7));return}if(Object.values(nt.h).every(n=>n[2])){nt.bt=(nt.bt||0)+e;for(const n of nt.order)!n.done&&nt.bt>=.3+n.q*.28&&(n.done=!0,nt[n.team][n.slot]=mm(n.team),J.play("click",.35));nt.order.every(n=>n.done)&&(nt.prep=4,J.play("announce",.7))}}function CA(){const e=yt.hostState;if(e&&e.st==="play"&&e.S){nt=null,na.value=null,Ad(Ax);return}const t=e&&e.D;if(!t)return;const n=nt.blue.join()+nt.red.join();nt.t=t.t,nt.prep=t.p,nt.blue=t.b,nt.red=t.r,nt.h=t.h,n!==nt.blue.join()+nt.red.join()&&J.play("click",.35);const r=bx();r&&r[2]?(nt.locked=!0,Br=nt[r[0]][r[1]],nt.view=Br||nt.view):nt.pending&&performance.now()-(nt.sentAt||0)>1e3&&(nt.sentAt=performance.now(),yt.send(["lock",nt.pending]))}function ea(){if(!nt){na.value=null;return}const e=bx(),t=S.mode==="solo"?"local":yt.myPeer||"host";na.value={online:!!nt.online,t:nt.t,prep:nt.prep,blue:[...nt.blue],red:[...nt.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(nt.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!nt.locked,pending:nt.pending||null,view:nt.view}}function wx(e){yt.role==="guest"&&yt.hostState&&yt.hostState.st==="pick"&&yt.hostState.D&&(S.mode="guest",S.localId=yt.myPeer,nt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Br||Tr[0],locked:!1,prep:-1,online:!0},rn.value="pick",J.play("announce",.6)),yt.role==="guest"&&yt.hostState&&yt.hostState.st==="play"&&yt.hostState.S&&!j0&&Ad(Ax),yt.role==="host"&&(qi-=e,qi<=0&&(qi=1.5,yt.setChoice(Br,Xo))),(pm-=e)<=0&&(pm=.3,wl())}let pm=0;function wl(){const e=[];if(yt.role==="host"){e.push({name:$t("Tú (anfitrión)"),team:Xo,me:!0});for(const t of yt.guests())e.push({name:$t("Invitado"),team:t.team,me:!1})}else yt.role==="guest"&&(e.push({name:$t("Tú"),team:Xo,me:!0}),yt.hostState&&e.push({name:$t("Anfitrión"),team:yt.hostState.team,me:!1}));Xn.value={...Xn.value,role:yt.role,code:yt.code,myTeam:Xo,players:e,hostFound:!!yt.hostState}}let j0=!1;function Ad(e){j0||(j0=!0,Id.value=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{try{e()}finally{let t=0,n=performance.now();const r=n,o=i=>{t=i-n<26?t+1:0,n=i,t<8&&i-r<2500?requestAnimationFrame(o):(Id.value=!1,j0=!1)};requestAnimationFrame(o)}})))}let Cs=!1;function Sx(e){try{return localStorage.getItem("lanelings_skin_"+e)}catch{return null}}function PA(){const e=S.game&&S.game.player;if(Cs||!e)return;Cs=!0;const t=Sx(e.heroKey);t&&Le(["skin",t])}function _x(){S.mode="solo",S.localId="local",Cs=!1;const e=nt?{blue:nt.blue.slice(1).filter(Boolean),red:nt.red.filter(Boolean)}:null;S.game=new Ze.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Br}],localId:"local",picks:e,difficulty:Yn.value.difficulty,aram:yi}),yi&&(yi=!1,S.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),nt=null,na.value=null,Td(),S.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function IA(){S.mode="host",S.localId=yt.myPeer||"host",Cs=!1;const e=[],t={blue:[],red:[]};if(nt){for(const n in nt.h){const[r,o]=nt.h[n];e.push({id:n,team:r,hero:nt[r][o]||Tr[0]})}for(const n of["blue","red"])nt[n].forEach((r,o)=>{r&&!Object.values(nt.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}nt=null,na.value=null,S.game=new Ze.Game(window.MAP,{humans:e,localId:S.localId,picks:t,difficulty:Yn.value.difficulty}),yt.lastSeq={};for(const n of yt.guests())yt.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of yt.guests()){const r=S.game.slots[n.id];r&&(r.cid=n.cid)}yt.onGuests=(n,r)=>{const o=S.game;if(o){for(const i of r.left||[]){const s=o.slots[i.peer];s&&!s.bot&&(s.bot=!0,s.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||OA(o,i)}},Td(),S.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function OA(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(s=>s.bot&&!s.isPlayer&&!s.away&&(!i||s.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,yt.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),pn("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function Ax(){S.mode="guest",S.localId=yt.myPeer,Cs=!1,S.game=new Ze.Game(window.MAP,{humans:[],localId:S.localId}),S.game.units=[],S.game.heroes=[],S.game.player=null,yt.onSnapshot=e=>{S.game&&S.mode==="guest"&&(o3(),e.pe&&i3(performance.now()-e.pe),yt.myPeer&&(S.localId=yt.myPeer),S.game.applySnapshot(e,S.localId))},yt.hostState&&yt.hostState.S&&S.game.applySnapshot(yt.hostState.S,S.localId),Td()}const Io={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let K0=0,zn=-1,ns=[],zA=0,Mo=!1,Eu=0;function Uh(){return zn>=0}function Tx(){const e=S.game,t=e.player;yM(e.heroes.map(a=>a.sprite||a.heroKey));const n=a=>{const l=dn[a.heroKey]||{};return{key:a.heroKey,name:l.name||a.heroKey,title:l.title||"",role:l.role||"",me:a===t,human:!!a.human}},r=a=>e.heroes.filter(l=>l.team===a).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){Mo=!0;return}Mo=!1;const s=Eu;Eu=0,$h.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++zA,off:s,canSkip:S.mode==="solo"},zn=s,K0=0,ns=[[.15,()=>Vi("blue_team")],...o.map((a,l)=>[Io.blue+l*Io.step+.05,()=>J.play("reveal",.8)]),[Io.red-.35,()=>Vi("red_team")],...i.map((a,l)=>[Io.red+l*Io.step+.05,()=>J.play("reveal",.8)]),[Io.vs-.02,()=>{J.play("vsslam",1),Vi("versus")}],[Io.go,()=>{J.play("warhorn",.9),Vi("battle"),J.setMode("battle")}]].filter(a=>a[0]>=s-.05),J.setMode("menu")}function FA(){const e=yt.hostState&&yt.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?zn<0?(Eu=t,Mo=!0):Math.abs(zn-t)>.6&&(zn=t):(zn>=0||Mo)&&(Mo=!1,zn>=0&&tf())}function EA(e){if(S.mode==="guest"&&FA(),Mo&&S.game&&Tx(),zn<0)return;const t=performance.now()/1e3,n=K0?t-K0:0;for(K0=t,zn+=n>2?.05:n||e;ns.length&&ns[0][0]<=zn;)ns.shift()[1]();zn>=Io.end&&tf()}function tf(){Mo=!1,!(zn<0)&&(zn=-1,ns=[],$h.value=null,Fu(),J.setMode("battle"))}function Rx(){zn<0||S.mode!=="solo"||(zn<Io.go&&(J.play("warhorn",.7),Vi("battle")),tf())}function Td(){Rm(co.normal);try{const e=S.game,t=e&&e.player;Jx({build:wd,mode:S.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:S.gpuName,softGpu:S.softGpu,difficulty:Yn.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),pn("game","empieza la partida ("+S.mode+")")}catch{}if(Wp(),ax(),rn.value="play",os.value=[],J.setMode("battle"),zh=!1,S.mode==="guest"?Mo=!1:Tx(),pi=null,S.aim=null,S.amove=!1,Ua=!1,S.cam.z=S.cam.tz=Bh,S.game.player){const[e,t]=P(S.game.player.x,S.game.player.y);S.cam.x=e,S.cam.y=t-30}}async function ym(){Wx(),yi=!1,il="",Xh=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}zn=-1,ns=[],Mo=!1,Eu=0,$h.value=null,Qr.value=!1,rs.value=!1,al.value=!1,S.aim=null,nt=null,na.value=null,S.mode!=="solo"&&await yt.leave(),S.game=null,S.mode="solo",ax(),Wp(),Tm.value=null,_m.value=null,os.value=[],rn.value="menu",J.setMode("menu"),Md().style.cursor=co.normal}function LA(e){const t=dn[e.heroKey],n=(e.items||[]).map(o=>Ze.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,s)=>i+(s[o]||0),0);return[{label:$t("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:$t("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:$t("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:$t("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:$t("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:$t("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:$t("Alcance"),value:String(t.range)}]}const Cx=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function Px(e){return(e.items||[]).filter(t=>!Ze.ITEM[t].line)}function gm(e){return e.slots?e.slots.slice(0,6):Px(e).concat([null,null,null,null,null,null]).slice(0,6)}function mc(e){const t=S.game,n=dn[e.heroKey],r=t.player,o=e===r,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(S.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const s=(e.items||[]).map((p,y)=>{const x=Ze.ITEM[p],b=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:S.mode==="guest"?(e.itemCdLeft||[])[y]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:$t(x.name),desc:$t(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:b}}),a=e.slots||Px(e).concat([null,null,null,null,null,null]).slice(0,6),l=s.filter(p=>!p.line),u=new Set,f=a.map((p,y)=>{if(!p)return null;const x=l.findIndex((b,M)=>b.id===p&&!u.has(M));return x<0?null:(u.add(x),{...l[x],slot:y})}).filter(Boolean),h=s.filter(p=>p.line),c=Cx.map(([p,,y])=>{const x=Ze.ITEM[p];return{id:p,key:qx(Vx(p)),count:e[y]||0,max:x.max,name:$t(x.name),desc:$t(x.desc)}}),d=e.team!==r.team,m=o||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:$t(n.title),role:$t(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:lx(e.heroKey),xpFrac:S.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:Ze.RECALL_T,stash:(e.stash||[]).slice(),courier:o?kA(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?$t("Pergamino de teleporte"):$t(p.key&&t.abilOf(e,p.key)?t.abilOf(e,p.key).name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const y=t.abilOf(e,p)||n.abil[p],x=e.ranks?e.ranks[p]:1,b=y!==n.abil[p];return{key:p,ik:b?"m"+p:p,name:$t(y.name),desc:$t(y.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:y.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,p)),dmg:y.dmg?Math.round(y.dmg*t.abilMul(e,p)):null,type:y.type,fx:y.fx}}),items:f,gearItems:h,cons:c,gear:S.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:$t("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:$t("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:LA(e),human:!!e.human,isMe:o,status:i}}function kA(e){const t=S.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id)),n=S.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-S.game.t)):0;return t?{state:t.state||"home",n:S.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function DA(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:$t(r),value:o});return{id:e.id,heroKey:e.sprite,name:$t(t),title:$t(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let Xh=!1;function Q0(){const e=!!(S.game&&S.game.player&&S.game.player.dead);if(e!==Xh){Xh=e;const s=document.getElementById("world");s&&(s.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=S.game,n=t.player;if(!n)return;const r=pi?st(pi):null;r&&(r.dead&&r.kind!=="hero"||We(r))&&(pi=null);const o=t.msgs.filter(s=>!s.to||s.to===S.localId).slice(-3).map(s=>({id:s.id,text:$t(s.txt),color:s.col,t:s.t,dur:s.dur})),i=(t.chat||[]).filter(s=>s.scope==="all"||s.team===n.team).slice(-8).map(s=>{Eh=s.human;const a=$t(s.txt);return Eh=!1,{id:s.id,scope:s.scope,team:s.team,heroKey:s.hero,heroName:dn[s.hero]?dn[s.hero].name:"?",human:!!s.human,text:a,age:t.t-s.t}});Tm.value={me:mc(n),inspected:r?r.kind==="hero"?mc(r):DA(r):null,allies:t.heroes.filter(s=>s.team===n.team&&s!==n).map(mc),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(s=>({id:s.id,killerKey:s.killerKey||null,killerName:s.killerKey?dn[s.killerKey].name:$t(s.killerName),killerTeam:s.killerTeam,victimKey:s.victimKey,victimTeam:s.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:Fh,inShop:t.inShop(n),levelMode:Ua,aim:S.aim?S.aim.k:null,amove:S.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(S.cam.tz/Bh*100),zoomMsg:S.cam.zoomMsgT,camFollow:S.camFollow,scoreboard:t.heroes.map(s=>({id:s.id,heroKey:s.heroKey,name:dn[s.heroKey].name,team:s.team,level:s.level,gear:S.mode==="guest"?s.gear||0:t.gearCode(s),kills:s.kills,deaths:s.deaths,assists:s.assists,cs:s.cs,gold:s.gold!==void 0&&(s.team===n.team||S.mode!=="guest")?Math.floor(s.gold):null,items:s.items||[],human:!!s.human,isMe:s===n,dead:!!s.dead,respawn:Math.ceil(s.respawn||0)})),mode:S.mode,netLost:!!yt.lost,deathRecap:n.dead?UA(n):Gh=null}}let Gh=null,xm=null;function UA(e){return Gh!==e&&(Gh=e,xm=XA(e)),xm}function XA(e){const t=(e.dmgLog||[]).filter(r=>S.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&dn[r.h]?dn[r.h].name:$t(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function GA(){const e=S.game&&S.game.player;if(!S.tpAim||!e)return null;const n=S.tpHover||(S.mouse.inWorld?{x:S.mouse.wx,y:S.mouse.wy}:null);if(!n)return null;const r=vm(e,n.x,n.y);if(!r)return null;const[o,i]=P(r.x,r.y),{N:s,HW:a,HH:l}=N;return{x:o/(2*s*a),y:i/(2*s*l),ok:Math.hypot(r.x-e.x,r.y-e.y)>=3}}function Ix(){const e=S.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=N,i=2*n*r,s=2*n*o,a=(c,d)=>{const[m,p]=P(c,d);return{x:m/i,y:p/s}},l=[];for(const c of e.units){if(c.dead||We(c))continue;const d=a(c.x,c.y);l.push({x:d.x,y:d.y,team:c.team,kind:c.kind,heroKey:c.heroKey,me:c===t,human:!!c.human})}const u=S.cam,f=S.W/u.z,h=S.H/u.z;_m.value={units:l,camps:e.camps.filter(c=>c.alive).map(c=>({...a(c.x,c.y),boss:!!c.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-h/2)/s,x1:(u.x+f/2)/i,y1:(u.y+h/2)/s},vision:S.visionSrc.map(c=>({...a(c.x,c.y),r:Am[c.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(c=>c.team===t.team&&e.t-c.t<3).map(c=>({...a(c.x,c.y),t:e.t-c.t,kind:c.kind})),wards:(e.wards||[]).filter(c=>e.wardSeenBy(c,t.team)).map(c=>({...a(c.x,c.y),kind:c.kind,mine:c.team===t.team})),tp:GA()}}const qr={skipIntro(){Rx()},shopDenied(e){tn(e,"#ffb070",2),J.play("deny",.5)},playVsBots(){J.init(),J.startMusic(),Y0(!1)},playAram(){J.init(),J.startMusic(),yi=!0,Y0(!1)},async hostOnline(){Xn.value={...Xn.value,msg:$t("Creando sala...")};try{await yt.host(Br,Xo),rn.value="lobby",Xn.value={...Xn.value,msg:""},wl()}catch{Xn.value={...Xn.value,msg:$t("No se pudo crear la sala")}}},async joinOnline(e){Xn.value={...Xn.value,msg:$t("Entrando...")};try{if(await yt.join(e,Br,Xo),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}rn.value="lobby",Xn.value={...Xn.value,msg:""},wl()}catch{Xn.value={...Xn.value,msg:$t("No se pudo entrar")}}},setLobbyTeam(e){Xo=e,yt.setChoice(Br,Xo),wl()},startOnlinePick(){Y0(!0)},async leaveLobby(){await yt.leave(),rn.value="menu"},viewHero(e){nt&&!nt.locked&&(nt.view=e,J.play("aim",.3),ea())},lockHero(e){Dh(e),ea()},randomHero(){const e=Tr.filter(t=>!nt.blue.includes(t)&&!nt.red.includes(t)&&!dn[t].wip);Dh(e[Math.random()*e.length|0]),ea()},backToMenu(){yi=!1,nt&&nt.online?ym():(nt=null,na.value=null,rn.value="menu")},buy(e){const t=S.game&&S.game.player;if(!t)return;const n=S.game.inShop(t),r=window.SIM.ITEM[e];if(S.mode!=="guest"&&!(n?S.game.canBuy(t,e):S.game.canBuyRemote(t,e))){tn(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<r.cost?"Te falta oro":r.consumable?"Ya llevas el máximo de ese":r.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),J.play("deny",.5);return}Le(["i",e]),J.play("buy",.6),n||tn("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=S.game&&S.game.player;if(!e)return;const t=S.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id));if(!t){tn(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),J.play("deny",.4);return}const[n,r]=P(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1,Le(["cr","go"]),J.play("click",.4)},sell(e){const t=S.game&&S.game.player;if(!t||!t.items)return;const n=typeof e=="number"?gm(t)[e]:e;if(n){if(!S.game.inShop(t)){tn("Solo puedes vender en tu base","#ffb070",1.4),J.play("deny",.4);return}Le(["v",n]),J.play("buy",.4)}},useCons(e){const t=S.game&&S.game.player;if(!t||t.dead)return;const n=Cx.find(r=>r[0]===e);if(n){if(!t[n[2]]){tn("No tienes: "+Ze.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),J.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){Le(["u",e]),J.play("heal",.5);return}if(e==="tp_scroll"){if(S.aim=null,S.wardAim=null,S.tpAim){gx();return}S.tpAim=!0,J.play("aim",.3),tn("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(S.aim=null,S.wardAim&&S.wardAim.id===e){xx();return}S.wardAim={id:e},J.play("aim",.3)}},useItem(e){const t=S.game&&S.game.player,n=t&&gm(t)[e];if(!t||e<0||!n){J.play("deny",.4);return}const r=Ze.ITEM[n];if(!(r&&r.active)){tn("Este objeto no se usa: es pasivo","#bbbbbb",1.2),J.play("deny",.4);return}if((S.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-S.game.t))>.05){tn("En enfriamiento","#bbbbbb",.8),J.play("deny",.4);return}Le(["u",n,S.mouse.wx,S.mouse.wy]),J.play("blink",.5)},moveItem(e,t){const n=S.game&&S.game.player;if(!(!n||e===t)){if(S.mode==="guest"&&n.slots){const r=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=r}Le(["mv",e,t]),J.play("click",.35),Q0()}},rankUp(e){Lh(e)},castKey(e){S.game&&S.game.player&&yx(e)},spell(e){const t=S.game&&S.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){tn($t(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),J.play("deny",.5);return}const r=Rr();Le(["sp",e,r.x,r.y]),J.play(e==="D"?"blink":"wind",.6)},recall(){const e=S.game&&S.game.player;e&&Le(e.recall?["bc"]:["b"])},inspect(e){pi=e&&S.game&&S.game.player&&e===S.game.player.id?null:e,Q0()},centerOn(e){const t=e==null?S.game&&S.game.player:st(e);if(!t)return;const[n,r]=P(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:s}=N,a=e*(2*r*o)-s,l=t*(2*r*i),u=(a/o+l/i)/2,f=(l/i-a/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&S.tpAim){Le(["u","tp_scroll",u,f]),J.play("click",.4),S.tpAim=!1;return}n==="right"?(Le(["m",u,f]),S.marker={x:u,y:f,t:0}):(S.cam.x=e*2*r*o,S.cam.y=t*2*r*i,S.mouse.mmDrag=!0)}},minimapHover(e,t){if(e===null||t===void 0){S.tpHover=null;return}const{N:n,HW:r,HH:o,OX:i}=N,s=e*(2*n*r)-i,a=t*(2*n*o);S.tpHover={x:(s/r+a/o)/2,y:(a/o-s/r)/2},S.tpAim&&Ix()},minimapDrag(e,t){const{N:n,HW:r,HH:o}=N;S.cam.x=Math.max(0,Math.min(1,e))*2*n*r,S.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!S.game||!S.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:s,HH:a,OX:l}=N,u=t*(2*i*s)-l,f=n*(2*i*a);r=(u/s+f/a)/2,o=(f/a-u/s)/2}else{const i=Rr();r=i.x,o=i.y}Le(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&S.game&&Le(["t",e,n]),Sm.value=null},bannerDone(e){os.value=os.value.filter(t=>t.id!==e)},quitMatch(){ym()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};J.setVolume&&J.setVolume(n[e],t),Yn.value={...Yn.value,[e]:t}},setSoundStyle(e){J.setStyle&&J.setStyle(e),Yn.value={...Yn.value,soundStyle:e}},setShadows(e){S.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}Yn.value={...Yn.value,shadows:e}},setCamFollow(e){S.camFollow=e},resetZoom(){kh()},downloadLog(){pn("user","descarga el registro"),p3()},openOptions(){Qr.value=!0},setCursorLock(e){Hx(e),Q0()},setLang(e){Nh.value=e,ol.clear();try{localStorage.setItem("moba_lang",e)}catch{}ux()},setDifficulty(e){Yn.value={...Yn.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){J.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;J.play(n[0],n[1])},t:e=>$t(e)};function NA(){const e=new URLSearchParams(location.search);window.__g=()=>({S,draft:nt,st:Bx,act:qr,net:yt,cmd:Le,pickHeroAt:Sd,aimHero:_d,w2s:P});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const s=async()=>{await qr.joinOnline(o),rn.value==="menu"&&++i<5&&setTimeout(s,2500)},a=l=>{wm.value?s():l>0?setTimeout(()=>a(l-1),300):Xn.value={...Xn.value,msg:$t("No se pudo entrar")}};a(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){Y0(!1),e.get("view")&&(nt.view=e.get("view")),ea();return}if(n==="menu")return;Br=n,_x(),e.get("intro")||tf(),e.get("allbots")&&(S.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)S.game.update(1/30),S.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(S.camFollow=!0),e.get("shop")&&(rs.value=!0),e.get("tab")&&(al.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[s,a]=P(o,i);S.cam.x=s,S.cam.y=a}e.get("mx")&&(S.mouse.x=+e.get("mx"),S.mouse.y=+e.get("my"))}const VA=Object.freeze(Object.defineProperty({__proto__:null,BUILD:wd,skinPref:Sx,startClient:lA},Symbol.toStringTag,{value:"Module"}));export{Y5 as $,gp as A,Sf as B,Se as C,xi as D,Je as E,fe as F,wp as G,G5 as H,Kn as I,$5 as J,cM as K,hM as L,$e as M,t1 as N,pf as O,ho as P,n1 as Q,fu as R,Xu as S,kt as T,Oc as U,a5 as V,_n as W,Hm as X,Jh as Y,xp as Z,dM as _,Hl as a,Vt as a0,er as a1,Qh as a2,V3 as a3,qA as a4,e5 as a5,WA as a6,Ui as a7,fs as a8,jh as a9,Op as aa,R3 as ab,P3 as ac,VA as ad,wi as b,$a as c,Nn as d,vi as e,ie as f,v5 as g,ee as h,Uu as i,hp as j,Zh as k,mp as l,Kh as m,Gd as n,nr as o,C3 as p,uu as q,B3 as r,Bm as s,gi as t,Qn as u,br as v,Go as w,Zd as x,an as y,I5 as z};
