const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CkbQYRCD.js","./webworkerAll-DrFM1zsN.js","./CanvasPool-YOyyKld-.js","./colorToUniform-C-jx5CTK.js","./_commonjsHelpers-CqkleIqs.js","./App-B1neXDoS.js","./index-BQY6qJVJ.js","./index-BpNR-7K3.css","./WebGPURenderer-B8synV67.js","./SharedSystems-MvVyVMjG.js","./WebGLRenderer-D3lA6vd-.js"])))=>i.map(i=>d[i]);
import{S as M,u as ft,q as Te,w as C,r as at,M as j,v as p,T as Is,x as ec,y as nc,z as Md,l as eu,p as on,b as Sd,A as _d,B as wd,C as Ad,D as Cd,E as Td,j as Ze,n as rc,h as Rd,s as Pd,t as gi,c as rn,F as Id,f as vo,o as zd,Z as nu,i as Eo,G as oc,H as Pn,d as eo,m as ic,V as sc,I as ru,g as xi,e as ac,a as Od}from"./App-B1neXDoS.js";import{_ as zs}from"./index-BQY6qJVJ.js";import{g as lc}from"./_commonjsHelpers-CqkleIqs.js";const K={},Se={},Me={};var be=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(be||{});const Ja=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Bi=(e,t)=>Ja(e).priority??t,Pr={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Ja).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(Ja).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,a)=>Bi(a.value,n)-Bi(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>Bi(i,n)-Bi(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},Fd={extension:{type:be.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await zs(()=>import("./browserAll-CkbQYRCD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},Ed={extension:{type:be.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await zs(()=>import("./webworkerAll-DrFM1zsN.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Ie{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new Ie(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var ia={exports:{}},Iu;function kd(){return Iu||(Iu=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||l,h),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)t.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,m=new Array(d);h<d;h++)m[h]=c[h].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},s.prototype.emit=function(u,f,c,h,d,m){var y=n?n+u:u;if(!this._events[y])return!1;var g=this._events[y],x=arguments.length,b,v;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,h),!0;case 5:return g.fn.call(g.context,f,c,h,d),!0;case 6:return g.fn.call(g.context,f,c,h,d,m),!0}for(v=1,b=new Array(x-1);v<x;v++)b[v-1]=arguments[v];g.fn.apply(g.context,b)}else{var S=g.length,_;for(v=0;v<S;v++)switch(g[v].once&&this.removeListener(u,g[v].fn,void 0,!0),x){case 1:g[v].fn.call(g[v].context);break;case 2:g[v].fn.call(g[v].context,f);break;case 3:g[v].fn.call(g[v].context,f,c);break;case 4:g[v].fn.call(g[v].context,f,c,h);break;default:if(!b)for(_=1,b=new Array(x-1);_<x;_++)b[_-1]=arguments[_];g[v].fn.apply(g[v].context,b)}}return!0},s.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},s.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},s.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&a(this,d);else{for(var y=0,g=[],x=m.length;y<x;y++)(m[y].fn!==f||h&&!m[y].once||c&&m[y].context!==c)&&g.push(m[y]);g.length?this._events[d]=g.length===1?g[0]:g:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(ia)),ia.exports}var Ud=kd();const Ko=lc(Ud),Ld=Math.PI*2,Dd=180/Math.PI,ko=Math.PI/180;class Hn{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new Hn(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return sa.x=0,sa.y=0,sa}}const sa=new Hn;class pe{constructor(t=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,a){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new Hn;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new Hn;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=t.x,c=t.y;return n.x=a*u*f+-i*u*c+(l*i-s*a)*u,n.y=r*u*c+-o*u*f+(-l*r+s*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*u+o*c,this.b=r*f+o*h,this.c=i*u+a*c,this.d=i*f+a*h,this.tx=s*u+l*c+n.tx,this.ty=s*f+l*h+n.ty,this}setTransform(t,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(Ld-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(a.x*n+a.y*o),t.position.y=this.ty+(a.x*r+a.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=t*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=t/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new pe;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Gd.identity()}static get shared(){return Xd.identity()}}const Xd=new pe,Gd=new pe,Er=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],kr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ur=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Lr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],tl=[],uc=[],Ni=Math.sign;function Bd(){for(let e=0;e<16;e++){const t=[];tl.push(t);for(let n=0;n<16;n++){const r=Ni(Er[e]*Er[n]+Ur[e]*kr[n]),o=Ni(kr[e]*Er[n]+Lr[e]*kr[n]),i=Ni(Er[e]*Ur[n]+Ur[e]*Lr[n]),a=Ni(kr[e]*Ur[n]+Lr[e]*Lr[n]);for(let s=0;s<16;s++)if(Er[s]===r&&kr[s]===o&&Ur[s]===i&&Lr[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new pe;t.set(Er[e],kr[e],Ur[e],Lr[e],0,0),uc.push(t)}}Bd();const ge={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Er[e],uY:e=>kr[e],vX:e=>Ur[e],vY:e=>Lr[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>tl[e][t],sub:(e,t)=>tl[e][ge.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?ge.S:ge.N:Math.abs(t)*2<=Math.abs(e)?e>0?ge.E:ge.W:t>0?e>0?ge.SE:ge.SW:e>0?ge.NE:ge.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=uc[ge.inv(t)];o.tx=n,o.ty=r,e.append(o)}},$i=[new Hn,new Hn,new Hn,new Hn];class _n{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new _n(0,0,0,0)}clone(){return new _n(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,c=s-u,h=s+i+u,d=l-u,m=l+a+u,y=s+f,g=s+i-f,x=l+f,b=l+a-f;return t>=c&&t<=h&&n>=d&&n<=m&&!(t>y&&t<g&&n>x&&n<b)}intersects(t,n){if(!n){const T=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=T)return!1;const F=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>F}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=$i[0].set(t.left,t.top),l=$i[1].set(t.left,t.bottom),u=$i[2].set(t.right,t.top),f=$i[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const h=c*(l.y-s.y),d=c*(s.x-l.x),m=h*r+d*i,y=h*o+d*i,g=h*r+d*a,x=h*o+d*a;if(Math.max(m,y,g,x)<=h*s.x+d*s.y||Math.min(m,y,g,x)>=h*f.x+d*f.y)return!1;const b=c*(s.y-u.y),v=c*(u.x-s.x),S=b*r+v*i,_=b*o+v*i,w=b*r+v*a,R=b*o+v*a;return!(Math.max(S,_,w,R)<=b*s.x+v*s.y||Math.min(S,_,w,R)>=b*f.x+v*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new _n),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const aa={default:-1};function En(e="default"){return aa[e]===void 0&&(aa[e]=-1),++aa[e]}const zu={},Xn="8.0.0",Wv="8.3.4";function Ot(e,t,n=3){if(zu[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),zu[t]=!0}const fc=()=>{};function Ou(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Fu(e){return!(e&e-1)&&!!e}function Nd(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const Eu=Object.create(null);function $d(e){const t=Eu[e];return t===void 0&&(Eu[e]=En("resource")),t}const cc=class hc extends Ko{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...hc.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Ot(Xn,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=$d(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};cc.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Wd=cc;const dc=class mc extends Ko{constructor(t={}){super(),this.options=t,this.uid=En("textureSource"),this._resourceType="textureSource",this._resourceId=En("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...mc.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Wd(Nd(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=En("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=En("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Fu(this.pixelWidth)&&Fu(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};dc.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let un=dc;class ou extends un{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}ou.extension=be.TextureSource;const ku=new pe;class Hd{constructor(t,n){this.mapCoord=new pe,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],a=t[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(ku.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(ku));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class Tt extends Ko{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=En("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new _n,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new un,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Hd(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,c=l/2,h=i+f,d=a+c;u=ge.add(u,ge.NW),t.x0=h+f*ge.uX(u),t.y0=d+c*ge.uY(u),u=ge.add(u,2),t.x1=h+f*ge.uX(u),t.y1=d+c*ge.uY(u),u=ge.add(u,2),t.x2=h+f*ge.uX(u),t.y2=d+c*ge.uY(u),u=ge.add(u,2),t.x3=h+f*ge.uX(u),t.y3=d+c*ge.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Ot(Xn,"Texture.baseTexture is now Texture.source"),this._source}}Tt.EMPTY=new Tt({label:"EMPTY",source:new un({label:"EMPTY"})});Tt.EMPTY.destroy=fc;Tt.WHITE=new Tt({source:new ou({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Tt.WHITE.destroy=fc;function Vd(e,t,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*o-r,e.maxX=e.minX+s,e.minY=a.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const Uu=new pe;class no{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Uu,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new _n);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Uu,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,m=this.maxX,y=this.maxY,g=a*t+l*n+f,x=s*t+u*n+c;g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*r+l*n+f,x=s*r+u*n+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*t+l*o+f,x=s*t+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),g=a*r+l*o+f,x=s*r+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>y&&(y=x),this.minX=h,this.minY=d,this.maxX=m,this.maxY=y}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:c}=t;let h=a*n+l*r+f,d=s*n+u*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=a*o+l*r+f,d=s*o+u*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*n+l*i+f,d=s*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=a*o+l*i+f,d=s*o+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new no(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,m=o.ty;for(let y=n;y<r;y+=2){const g=t[y],x=t[y+1],b=u*g+c*x+d,v=f*g+h*x+m;i=b<i?b:i,a=v<a?v:a,s=b>s?b:s,l=v>l?v:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var qd={grad:.9,turn:360,rad:360/(2*Math.PI)},tr=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Ee=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},wn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},pc=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Lu=function(e){return{r:wn(e.r,0,255),g:wn(e.g,0,255),b:wn(e.b,0,255),a:wn(e.a)}},la=function(e){return{r:Ee(e.r),g:Ee(e.g),b:Ee(e.b),a:Ee(e.a,3)}},Yd=/^#([0-9a-f]{3,8})$/i,Wi=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},yc=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),a=i-Math.min(t,n,r),s=a?i===t?(n-r)/a:i===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},gc=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),a=r*(1-n),s=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},Du=function(e){return{h:pc(e.h),s:wn(e.s,0,100),l:wn(e.l,0,100),a:wn(e.a)}},Xu=function(e){return{h:Ee(e.h),s:Ee(e.s),l:Ee(e.l),a:Ee(e.a,3)}},Gu=function(e){return gc((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},vi=function(e){return{h:(t=yc(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},Kd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,jd=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Qd=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Zd=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,el={string:[[function(e){var t=Yd.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Ee(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Ee(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Qd.exec(e)||Zd.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Lu({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Kd.exec(e)||jd.exec(e);if(!t)return null;var n,r,o=Du({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(qd[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Gu(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return tr(t)&&tr(n)&&tr(r)?Lu({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!tr(t)||!tr(n)||!tr(r))return null;var a=Du({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return Gu(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!tr(t)||!tr(n)||!tr(r))return null;var a=function(s){return{h:pc(s.h),s:wn(s.s,0,100),v:wn(s.v,0,100),a:wn(s.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return gc(a)},"hsv"]]},Bu=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},Jd=function(e){return typeof e=="string"?Bu(e.trim(),el.string):typeof e=="object"&&e!==null?Bu(e,el.object):[null,void 0]},ua=function(e,t){var n=vi(e);return{h:n.h,s:wn(n.s+100*t,0,100),l:n.l,a:n.a}},fa=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Nu=function(e,t){var n=vi(e);return{h:n.h,s:n.s,l:wn(n.l+100*t,0,100),a:n.a}},nl=function(){function e(t){this.parsed=Jd(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Ee(fa(this.rgba),2)},e.prototype.isDark=function(){return fa(this.rgba)<.5},e.prototype.isLight=function(){return fa(this.rgba)>=.5},e.prototype.toHex=function(){return t=la(this.rgba),n=t.r,r=t.g,o=t.b,a=(i=t.a)<1?Wi(Ee(255*i)):"","#"+Wi(n)+Wi(r)+Wi(o)+a;var t,n,r,o,i,a},e.prototype.toRgb=function(){return la(this.rgba)},e.prototype.toRgbString=function(){return t=la(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return Xu(vi(this.rgba))},e.prototype.toHslString=function(){return t=Xu(vi(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=yc(this.rgba),{h:Ee(t.h),s:Ee(t.s),v:Ee(t.v),a:Ee(t.a,3)};var t},e.prototype.invert=function(){return Gn({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Gn(ua(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Gn(ua(this.rgba,-t))},e.prototype.grayscale=function(){return Gn(ua(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Gn(Nu(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Gn(Nu(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Gn({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Ee(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=vi(this.rgba);return typeof t=="number"?Gn({h:t,s:n.s,l:n.l,a:n.a}):Ee(n.h)},e.prototype.isEqual=function(t){return this.toHex()===Gn(t).toHex()},e}(),Gn=function(e){return e instanceof nl?e:new nl(e)},$u=[],tm=function(e){e.forEach(function(t){$u.indexOf(t)<0&&(t(nl,el),$u.push(t))})};function em(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var y=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));y<c&&(c=y,h=m)}return h}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}tm([em]);const Uo=class fi{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof fi)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=fi._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=fi.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=Gn(t);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof fi||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Uo.shared=new Uo;Uo._temp=new Uo;Uo.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let $e=Uo;const nm={cullArea:null,cullable:!1,cullableChildren:!0};class iu{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class rm{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new iu(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Os=new rm,om={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Ot("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function im(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const sm={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}im(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Ot(Xn,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class Wu{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class am{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return Os.get(r.maskClass,t)}return t}returnMaskEffect(t){Os.return(t)}}const rl=new am;Pr.handleByList(be.MaskEffect,rl._effectClasses);const lm={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),rl.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=rl.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Wu);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Wu),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},um={label:null,get name(){return Ot(Xn,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Ot(Xn,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},Je=new iu(pe),Lo=new iu(no);function xc(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=Je.get().identity(),r=su(e,o)):r=pe.IDENTITY,vc(e,n,r,t),o&&Je.return(o),n.isValid||n.set(0,0,0,0),n}function vc(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=Je.get(),o.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=Lo.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)vc(e.children[s],t,o,r)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,pe.IDENTITY),Lo.return(t)}r||Je.return(o)}function su(e,t){const n=e.parent;return n&&(su(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function fm(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const Hu=16777215;function Vu(e,t){return e===Hu?t:t===Hu?e:fm(e,t)}function us(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const cm={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=su(this,Je.get().identity());return e.appendFrom(this.localTransform,n),Je.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?us(this.renderGroup.worldColor):this.parentRenderGroup?us(Vu(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=Vu(t,n.localColor),n=n.parent;return us(t)}};let ca=0;const qu=500;function cr(...e){ca!==qu&&(ca++,ca===qu?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function bc(e,t,n){return t.clear(),n||(n=pe.IDENTITY),Mc(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function Mc(e,t,n,r,o){let i;if(o)i=Je.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=Je.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=Lo.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)Mc(l[u],t,i,r,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);a.addBounds(t,pe.IDENTITY),Lo.return(t)}Je.return(i)}function Sc(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,o.children.length&&Sc(o,t)}return t.didChange}const hm=new pe,dm={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new no});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),Sc(this,e),e.didChange&&bc(this,e.localBounds,hm),e.localBounds},getBounds(e,t){return xc(this,e,t||new no)}},mm={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},pm={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(ym))}};function ym(e,t){return e._zIndex-t._zIndex}const gm={getGlobalPosition(e=new Hn,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(Je.get(),n);return t=r.apply(e,t),Je.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(Je.get(),r);return n=o.applyInverse(e,n),Je.return(o),n}};class xm{constructor(){this.uid=En("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let vm=0;class bm{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new un({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new Tt({source:o,label:`texturePool_${vm++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),a=Math.ceil(n*r-1e-6);i=Ou(i),a=Ou(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const dn=new bm;class Mm{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new pe,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new xm,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(dn.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new pe),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new pe),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new pe),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Sm(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const ha=new Ie(null),da=new Ie(null),ma=new Ie(null,1,1),Yu=1,_m=2,pa=4;class de extends Ko{constructor(t={}){super(),this.uid=En("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new pe,this.relativeGroupTransform=new pe,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ie(this,0,0),this._scale=ma,this._pivot=da,this._skew=ha,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Sm(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(de.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Ot(Xn,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Os.get(Mm,this),this.groupTransform=pe.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Os.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new pe),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Dd}set angle(t){this.rotation=t*ko}get pivot(){return this._pivot===da&&(this._pivot=new Ie(this,0,0)),this._pivot}set pivot(t){this._pivot===da&&(this._pivot=new Ie(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===ha&&(this._skew=new Ie(this,0,0)),this._skew}set skew(t){this._skew===ha&&(this._skew=new Ie(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===ma&&(this._scale=new Ie(this,1,1)),this._scale}set scale(t){this._scale===ma&&(this._scale=new Ie(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Yu,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=$e.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Yu,this._onUpdate())}get tint(){return us(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=_m,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=pa,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=pa,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=pa,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}de.mixin(sm);de.mixin(gm);de.mixin(mm);de.mixin(dm);de.mixin(lm);de.mixin(um);de.mixin(pm);de.mixin(nm);de.mixin(om);de.mixin(cm);class _c extends de{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new no(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class Ke extends _c{constructor(t=Tt.EMPTY){t instanceof Tt&&(t={texture:t});const{texture:n=Tt.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Ie({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof Tt?new Ke(t):new Ke(Tt.from(t,n))}set texture(t){t||(t=Tt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return Vd(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Ot("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const wm=new no;function wc(e,t,n){const r=wm;e.measurable=!0,xc(e,n,r),t.addBoundsMask(r),e.measurable=!1}function Ac(e,t,n){const r=Lo.get();e.measurable=!0;const o=Je.get().identity(),i=Cc(e,n,o);bc(e,r,i),e.measurable=!1,t.addBoundsMask(r),Je.return(o),Lo.return(r)}function Cc(e,t,n){return e?(e!==t&&(Cc(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(cr("Mask bounds, renderable is not inside the root container"),n)}class Tc{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Ke),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||wc(this.mask,t,n)}addLocalBounds(t,n){Ac(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Ke}}Tc.extension=be.MaskEffect;class Rc{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Rc.extension=be.MaskEffect;class Pc{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){wc(this.mask,t,n)}addLocalBounds(t,n){Ac(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof de}}Pc.extension=be.MaskEffect;const Am={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let Ku=Am;const Rr={get(){return Ku},set(e){Ku=e}};class au extends un{constructor(t){t.resource||(t.resource=Rr.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}au.extension=be.TextureSource;class lu extends un{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=Rr.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,cr("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}lu.extension=be.TextureSource;var ol=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(ol||{});class ya{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const Ic=class hn{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ya(null,null,1/0),this.deltaMS=1/hn.targetFPMS,this.elapsedMS=1/hn.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=ol.NORMAL){return this._addListener(new ya(t,n,r))}addOnce(t,n,r=ol.NORMAL){return this._addListener(new ya(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*hn.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,hn.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!hn._shared){const t=hn._shared=new hn;t.autoStart=!0,t._protected=!0}return hn._shared}static get system(){if(!hn._system){const t=hn._system=new hn;t.autoStart=!0,t._protected=!0}return hn._system}};Ic.targetFPMS=.06;let Hi=Ic,ga;async function Cm(){return ga??(ga=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),ga}const Zs=class zc extends un{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...zc.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Hi.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Cm(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Hi.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Hi.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Hi.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Zs.extension=be.TextureSource;Zs.defaultOptions={...un.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Zs.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Tm=Zs;const ho=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class Rm{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||cr(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=ho(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&cr("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){cr(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Br=new Rm,il=[];Pr.handleByList(be.TextureSource,il);function Oc(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<il.length;o++){const i=il[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Pm(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&Br.has(r))return Br.get(r);const i=new Tt({source:Oc(o)});return i.on("destroy",()=>{Br.has(r)&&Br.remove(r)}),t||Br.set(r,i),i}function Im(e,t=!1){return typeof e=="string"?Br.get(e):e instanceof un?new Tt({source:e}):Pm(e,t)}Tt.from=Im;un.from=Oc;Pr.add(Tc,Rc,Pc,Tm,lu,au,ou);var Fc=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(Fc||{});function In(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Zo(e){return e.split("?")[0].split("#")[0]}function zm(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Om(e,t,n){return e.replace(new RegExp(zm(t),"g"),n)}function Fm(e,t){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const Ri={toPosix(e){return Om(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){In(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(In(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=Zo(this.toPosix(t??Rr.get().getBaseUrl())),o=Zo(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?Ri.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(In(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=Fm(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return In(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(In(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(In(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){In(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){In(e),t&&In(t),e=Zo(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){In(e),e=Zo(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){In(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Zo(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Ec(e,t,n,r,o){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?Ec(e.replace(r[n],s),t,n+1,r,o):o.push(e.replace(r[n],s))}}function Em(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),Ec(e,o,0,n,r)}else r.push(e);return r}const ju=e=>!Array.isArray(e);class kc{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return ho(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&cr("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&cr(`[Resolver] already has key: ${i} overwriting`)},ho(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=ho(a).map(d=>typeof d=="string"?Em(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(m=>{let y={};if(typeof m!="object"){y.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){y=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,y={...y,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${y.src}`);y=this._buildResolvedAsset(y,{aliases:c,data:s,format:l,loadParser:u}),h.push(y)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=ju(t);t=ho(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=ju(t);t=ho(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=Ri.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??km(t.src),t}}kc.RETINA_PREFIX=/@([0-9\.]+)x/;function km(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Qu=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},Uc=class ci{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof Tt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=ci.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=ci.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new _n(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new _n(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new _n(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new _n(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new Tt({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*ci.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*ci.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Uc.BATCH_SIZE=1e3;let Zu=Uc;const Um=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Lc(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=Ri.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=Lc([`${o}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const Lm={extension:be.Asset,cache:{test:e=>e instanceof Zu,getCacheableAssets:(e,t)=>Lc(e,t,!1)},resolver:{extension:{type:be.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&Um.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(kc.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:be.LoadParser,priority:Fc.Normal,name:"spritesheetLoader"},async testParse(e,t){return Ri.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=Ri.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof Tt)a=r;else{const u=Qu(i+(o??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new Zu(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;t.data?.ignoreMultiPack||(h=Qu(h,t.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[s].concat(s.linkedSheets.filter(h=>h!==c))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Pr.add(Lm);const xa=Object.create(null),Ju=Object.create(null);function uu(e,t){let n=Ju[e];return n===void 0&&(xa[t]===void 0&&(xa[t]=1),Ju[e]=n=xa[t]++),n}let Vi;function Dm(){return(!Vi||Vi?.isContextLost())&&(Vi=Rr.get().createCanvas().getContext("webgl",{})),Vi}let qi;function Xm(){if(!qi){qi="mediump";const e=Dm();e&&e.getShaderPrecisionFormat&&(qi=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return qi}function Gm(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function Bm(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function Nm(e,t){return t?`#version 300 es
${e}`:e}const $m={},Wm={};function Hm(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?$m:Wm;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function Vm(e,t){return t?e.replace("#version 300 es",""):e}const va={stripVersion:Vm,ensurePrecision:Bm,addProgramDefines:Gm,setProgramName:Hm,insertVersion:Nm},ba=Object.create(null),Dc=class sl{constructor(t){t={...sl.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Xm()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(va).forEach(a=>{const s=r[a];o=va[a](o,s,!0),i=va[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=uu(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return ba[n]||(ba[n]=new sl(t)),ba[n]}};Dc.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Dt=Dc;const tf={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function qm(e){return tf[e]??tf.float32}const Ym={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Km({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=Ym[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:qm(l).stride,offset:0,instance:!1,start:0}}}}return n}function Ma(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(c=>{const h=c.match(l)[1],d=c.match(s).reduce((m,y)=>{const[g,x]=y.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var hi=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(hi||{});function jm({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:hi.VERTEX|hi.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:hi.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:hi.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Qm({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Zm(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const Sa=Object.create(null);class Ut{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=Ma(n.source);this.structsAndGroups=s}else{const s=Ma(r.source),l=Ma(n.source);this.structsAndGroups=Zm(s,l)}this.layout=o??Qm(this.structsAndGroups),this.gpuLayout=i??jm(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=uu(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Km(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Sa[n]||(Sa[n]=new Ut(t)),Sa[n]}}const Xc=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Jm=Xc.reduce((e,t)=>(e[t]=!0,e),{});function tp(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Gc=class Bc{constructor(t,n){this._touched=0,this.uid=En("uniform"),this._resourceType="uniformGroup",this._resourceId=En("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...Bc.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!Jm[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Xc.join(", ")}`);i.value??(i.value=tp(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=uu(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Gc.defaultOptions={ubo:!1,isStatic:!1};let Nc=Gc;class _a{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var Fs=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(Fs||{});class fu extends Ko{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=Fs.WEBGPU),r&&(a|=Fs.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const c=s[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(c=>{s[c.group]=s[c.group]||{},s[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new _a,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new Nc(h));const d=l[c];d&&(o[d.group]||(o[d.group]=new _a,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new _a,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Ut.from(n)),r&&(a=Dt.from(r)),new fu({gpuProgram:i,glProgram:a,...o})}}const ep={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},wa=0,Aa=1,Ca=2,Ta=3,Ra=4,Pa=5,al=class $c{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<wa)}set blend(t){!!(this.data&1<<wa)!==t&&(this.data^=1<<wa)}get offsets(){return!!(this.data&1<<Aa)}set offsets(t){!!(this.data&1<<Aa)!==t&&(this.data^=1<<Aa)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Ca)}set culling(t){!!(this.data&1<<Ca)!==t&&(this.data^=1<<Ca)}get depthTest(){return!!(this.data&1<<Ta)}set depthTest(t){!!(this.data&1<<Ta)!==t&&(this.data^=1<<Ta)}get depthMask(){return!!(this.data&1<<Pa)}set depthMask(t){!!(this.data&1<<Pa)!==t&&(this.data^=1<<Pa)}get clockwiseFrontFace(){return!!(this.data&1<<Ra)}set clockwiseFrontFace(t){!!(this.data&1<<Ra)!==t&&(this.data^=1<<Ra)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=ep[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new $c;return t.depthTest=!1,t.blend=!0,t}};al.default2d=al.for2d();let np=al;const Wc=class ll extends fu{constructor(t){t={...ll.defaultOptions,...t},super(t),this.enabled=!0,this._state=np.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Ut.from(n)),r&&(a=Dt.from(r)),new ll({gpuProgram:i,glProgram:a,...o})}};Wc.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let Gt=Wc;const ul=[];Pr.handleByNamedList(be.Environment,ul);async function rp(e){if(!e)for(let t=0;t<ul.length;t++){const n=ul[t];if(n.value.test()){await n.value.load();return}}}let Jo;function op(){if(typeof Jo=="boolean")return Jo;try{Jo=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Jo=!1}return Jo}var Yi={exports:{}},ef;function ip(){if(ef)return Yi.exports;ef=1,Yi.exports=e,Yi.exports.default=e;function e(I,z,O){O=O||2;var L=z&&z.length,X=L?z[0]*O:I.length,N=t(I,0,X,O,!0),V=[];if(!N||N.next===N.prev)return V;var ot,wt,Mt,ye,ee,Vt,We;if(L&&(N=l(I,z,N,O)),I.length>80*O){ot=Mt=I[0],wt=ye=I[1];for(var ne=O;ne<X;ne+=O)ee=I[ne],Vt=I[ne+1],ee<ot&&(ot=ee),Vt<wt&&(wt=Vt),ee>Mt&&(Mt=ee),Vt>ye&&(ye=Vt);We=Math.max(Mt-ot,ye-wt),We=We!==0?32767/We:0}return r(N,V,O,ot,wt,We,0),V}function t(I,z,O,L,X){var N,V;if(X===bt(I,z,O,L)>0)for(N=z;N<O;N+=L)V=B(N,I[N],I[N+1],V);else for(N=O-L;N>=z;N-=L)V=B(N,I[N],I[N+1],V);return V&&S(V,V.next)&&(Z(V),V=V.next),V}function n(I,z){if(!I)return I;z||(z=I);var O=I,L;do if(L=!1,!O.steiner&&(S(O,O.next)||v(O.prev,O,O.next)===0)){if(Z(O),O=z=O.prev,O===O.next)break;L=!0}else O=O.next;while(L||O!==z);return z}function r(I,z,O,L,X,N,V){if(I){!V&&N&&d(I,L,X,N);for(var ot=I,wt,Mt;I.prev!==I.next;){if(wt=I.prev,Mt=I.next,N?i(I,L,X,N):o(I)){z.push(wt.i/O|0),z.push(I.i/O|0),z.push(Mt.i/O|0),Z(I),I=Mt.next,ot=Mt.next;continue}if(I=Mt,I===ot){V?V===1?(I=a(n(I),z,O),r(I,z,O,L,X,N,2)):V===2&&s(I,z,O,L,X,N):r(n(I),z,O,L,X,N,1);break}}}}function o(I){var z=I.prev,O=I,L=I.next;if(v(z,O,L)>=0)return!1;for(var X=z.x,N=O.x,V=L.x,ot=z.y,wt=O.y,Mt=L.y,ye=X<N?X<V?X:V:N<V?N:V,ee=ot<wt?ot<Mt?ot:Mt:wt<Mt?wt:Mt,Vt=X>N?X>V?X:V:N>V?N:V,We=ot>wt?ot>Mt?ot:Mt:wt>Mt?wt:Mt,ne=L.next;ne!==z;){if(ne.x>=ye&&ne.x<=Vt&&ne.y>=ee&&ne.y<=We&&x(X,ot,N,wt,V,Mt,ne.x,ne.y)&&v(ne.prev,ne,ne.next)>=0)return!1;ne=ne.next}return!0}function i(I,z,O,L){var X=I.prev,N=I,V=I.next;if(v(X,N,V)>=0)return!1;for(var ot=X.x,wt=N.x,Mt=V.x,ye=X.y,ee=N.y,Vt=V.y,We=ot<wt?ot<Mt?ot:Mt:wt<Mt?wt:Mt,ne=ye<ee?ye<Vt?ye:Vt:ee<Vt?ee:Vt,jo=ot>wt?ot>Mt?ot:Mt:wt>Mt?wt:Mt,Qo=ye>ee?ye>Vt?ye:Vt:ee>Vt?ee:Vt,Ru=y(We,ne,z,O,L),Pu=y(jo,Qo,z,O,L),qt=I.prevZ,Yt=I.nextZ;qt&&qt.z>=Ru&&Yt&&Yt.z<=Pu;){if(qt.x>=We&&qt.x<=jo&&qt.y>=ne&&qt.y<=Qo&&qt!==X&&qt!==V&&x(ot,ye,wt,ee,Mt,Vt,qt.x,qt.y)&&v(qt.prev,qt,qt.next)>=0||(qt=qt.prevZ,Yt.x>=We&&Yt.x<=jo&&Yt.y>=ne&&Yt.y<=Qo&&Yt!==X&&Yt!==V&&x(ot,ye,wt,ee,Mt,Vt,Yt.x,Yt.y)&&v(Yt.prev,Yt,Yt.next)>=0))return!1;Yt=Yt.nextZ}for(;qt&&qt.z>=Ru;){if(qt.x>=We&&qt.x<=jo&&qt.y>=ne&&qt.y<=Qo&&qt!==X&&qt!==V&&x(ot,ye,wt,ee,Mt,Vt,qt.x,qt.y)&&v(qt.prev,qt,qt.next)>=0)return!1;qt=qt.prevZ}for(;Yt&&Yt.z<=Pu;){if(Yt.x>=We&&Yt.x<=jo&&Yt.y>=ne&&Yt.y<=Qo&&Yt!==X&&Yt!==V&&x(ot,ye,wt,ee,Mt,Vt,Yt.x,Yt.y)&&v(Yt.prev,Yt,Yt.next)>=0)return!1;Yt=Yt.nextZ}return!0}function a(I,z,O){var L=I;do{var X=L.prev,N=L.next.next;!S(X,N)&&_(X,L,L.next,N)&&k(X,N)&&k(N,X)&&(z.push(X.i/O|0),z.push(L.i/O|0),z.push(N.i/O|0),Z(L),Z(L.next),L=I=N),L=L.next}while(L!==I);return n(L)}function s(I,z,O,L,X,N){var V=I;do{for(var ot=V.next.next;ot!==V.prev;){if(V.i!==ot.i&&b(V,ot)){var wt=U(V,ot);V=n(V,V.next),wt=n(wt,wt.next),r(V,z,O,L,X,N,0),r(wt,z,O,L,X,N,0);return}ot=ot.next}V=V.next}while(V!==I)}function l(I,z,O,L){var X=[],N,V,ot,wt,Mt;for(N=0,V=z.length;N<V;N++)ot=z[N]*L,wt=N<V-1?z[N+1]*L:I.length,Mt=t(I,ot,wt,L,!1),Mt===Mt.next&&(Mt.steiner=!0),X.push(g(Mt));for(X.sort(u),N=0;N<X.length;N++)O=f(X[N],O);return O}function u(I,z){return I.x-z.x}function f(I,z){var O=c(I,z);if(!O)return z;var L=U(O,I);return n(L,L.next),n(O,O.next)}function c(I,z){var O=z,L=I.x,X=I.y,N=-1/0,V;do{if(X<=O.y&&X>=O.next.y&&O.next.y!==O.y){var ot=O.x+(X-O.y)*(O.next.x-O.x)/(O.next.y-O.y);if(ot<=L&&ot>N&&(N=ot,V=O.x<O.next.x?O:O.next,ot===L))return V}O=O.next}while(O!==z);if(!V)return null;var wt=V,Mt=V.x,ye=V.y,ee=1/0,Vt;O=V;do L>=O.x&&O.x>=Mt&&L!==O.x&&x(X<ye?L:N,X,Mt,ye,X<ye?N:L,X,O.x,O.y)&&(Vt=Math.abs(X-O.y)/(L-O.x),k(O,I)&&(Vt<ee||Vt===ee&&(O.x>V.x||O.x===V.x&&h(V,O)))&&(V=O,ee=Vt)),O=O.next;while(O!==wt);return V}function h(I,z){return v(I.prev,I,z.prev)<0&&v(z.next,I,I.next)<0}function d(I,z,O,L){var X=I;do X.z===0&&(X.z=y(X.x,X.y,z,O,L)),X.prevZ=X.prev,X.nextZ=X.next,X=X.next;while(X!==I);X.prevZ.nextZ=null,X.prevZ=null,m(X)}function m(I){var z,O,L,X,N,V,ot,wt,Mt=1;do{for(O=I,I=null,N=null,V=0;O;){for(V++,L=O,ot=0,z=0;z<Mt&&(ot++,L=L.nextZ,!!L);z++);for(wt=Mt;ot>0||wt>0&&L;)ot!==0&&(wt===0||!L||O.z<=L.z)?(X=O,O=O.nextZ,ot--):(X=L,L=L.nextZ,wt--),N?N.nextZ=X:I=X,X.prevZ=N,N=X;O=L}N.nextZ=null,Mt*=2}while(V>1);return I}function y(I,z,O,L,X){return I=(I-O)*X|0,z=(z-L)*X|0,I=(I|I<<8)&16711935,I=(I|I<<4)&252645135,I=(I|I<<2)&858993459,I=(I|I<<1)&1431655765,z=(z|z<<8)&16711935,z=(z|z<<4)&252645135,z=(z|z<<2)&858993459,z=(z|z<<1)&1431655765,I|z<<1}function g(I){var z=I,O=I;do(z.x<O.x||z.x===O.x&&z.y<O.y)&&(O=z),z=z.next;while(z!==I);return O}function x(I,z,O,L,X,N,V,ot){return(X-V)*(z-ot)>=(I-V)*(N-ot)&&(I-V)*(L-ot)>=(O-V)*(z-ot)&&(O-V)*(N-ot)>=(X-V)*(L-ot)}function b(I,z){return I.next.i!==z.i&&I.prev.i!==z.i&&!T(I,z)&&(k(I,z)&&k(z,I)&&F(I,z)&&(v(I.prev,I,z.prev)||v(I,z.prev,z))||S(I,z)&&v(I.prev,I,I.next)>0&&v(z.prev,z,z.next)>0)}function v(I,z,O){return(z.y-I.y)*(O.x-z.x)-(z.x-I.x)*(O.y-z.y)}function S(I,z){return I.x===z.x&&I.y===z.y}function _(I,z,O,L){var X=R(v(I,z,O)),N=R(v(I,z,L)),V=R(v(O,L,I)),ot=R(v(O,L,z));return!!(X!==N&&V!==ot||X===0&&w(I,O,z)||N===0&&w(I,L,z)||V===0&&w(O,I,L)||ot===0&&w(O,z,L))}function w(I,z,O){return z.x<=Math.max(I.x,O.x)&&z.x>=Math.min(I.x,O.x)&&z.y<=Math.max(I.y,O.y)&&z.y>=Math.min(I.y,O.y)}function R(I){return I>0?1:I<0?-1:0}function T(I,z){var O=I;do{if(O.i!==I.i&&O.next.i!==I.i&&O.i!==z.i&&O.next.i!==z.i&&_(O,O.next,I,z))return!0;O=O.next}while(O!==I);return!1}function k(I,z){return v(I.prev,I,I.next)<0?v(I,z,I.next)>=0&&v(I,I.prev,z)>=0:v(I,z,I.prev)<0||v(I,I.next,z)<0}function F(I,z){var O=I,L=!1,X=(I.x+z.x)/2,N=(I.y+z.y)/2;do O.y>N!=O.next.y>N&&O.next.y!==O.y&&X<(O.next.x-O.x)*(N-O.y)/(O.next.y-O.y)+O.x&&(L=!L),O=O.next;while(O!==I);return L}function U(I,z){var O=new lt(I.i,I.x,I.y),L=new lt(z.i,z.x,z.y),X=I.next,N=z.prev;return I.next=z,z.prev=I,O.next=X,X.prev=O,L.next=O,O.prev=L,N.next=L,L.prev=N,L}function B(I,z,O,L){var X=new lt(I,z,O);return L?(X.next=L.next,X.prev=L,L.next.prev=X,L.next=X):(X.prev=X,X.next=X),X}function Z(I){I.next.prev=I.prev,I.prev.next=I.next,I.prevZ&&(I.prevZ.nextZ=I.nextZ),I.nextZ&&(I.nextZ.prevZ=I.prevZ)}function lt(I,z,O){this.i=I,this.x=z,this.y=O,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(I,z,O,L){var X=z&&z.length,N=X?z[0]*O:I.length,V=Math.abs(bt(I,0,N,O));if(X)for(var ot=0,wt=z.length;ot<wt;ot++){var Mt=z[ot]*O,ye=ot<wt-1?z[ot+1]*O:I.length;V-=Math.abs(bt(I,Mt,ye,O))}var ee=0;for(ot=0;ot<L.length;ot+=3){var Vt=L[ot]*O,We=L[ot+1]*O,ne=L[ot+2]*O;ee+=Math.abs((I[Vt]-I[ne])*(I[We+1]-I[Vt+1])-(I[Vt]-I[We])*(I[ne+1]-I[Vt+1]))}return V===0&&ee===0?0:Math.abs((ee-V)/V)};function bt(I,z,O,L){for(var X=0,N=z,V=O-L;N<O;N+=L)X+=(I[V]-I[N])*(I[N+1]+I[V+1]),V=N;return X}return e.flatten=function(I){for(var z=I[0][0].length,O={vertices:[],holes:[],dimensions:z},L=0,X=0;X<I.length;X++){for(var N=0;N<I[X].length;N++)for(var V=0;V<z;V++)O.vertices.push(I[X][N][V]);X>0&&(L+=I[X-1].length,O.holes.push(L))}return O},Yi.exports}var sp=ip();const Hv=lc(sp);var Hc=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Hc||{});class ap{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](t,n,r,o,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const lp=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Vc=class qc extends Ko{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...lp,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await rp(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...qc.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof de&&(r={container:r},n&&(Ot(Xn,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:$e.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Hc.ALL);const{clear:r,clearColor:o,target:i}=t;$e.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,$e.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new ap(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!op())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Vc.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Yc=Vc,Ki;function up(e){return Ki!==void 0||(Ki=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??Yc.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Rr.get().getWebGLRenderingContext())return!1;let r=Rr.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Ki}let ji;async function fp(e={}){return ji!==void 0||(ji=await(async()=>{const t=Rr.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),ji}const nf=["webgl","webgpu","canvas"];async function cp(e){let t=[];e.preference?(t.push(e.preference),nf.forEach(i=>{i!==e.preference&&t.push(i)})):t=nf.slice();let n,r={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await fp()){const{WebGPURenderer:s}=await zs(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-B8synV67.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgpu};break}else if(a==="webgl"&&up(e.failIfMajorPerformanceCaveat??Yc.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await zs(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-D3lA6vd-.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgl};break}else if(a==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const Kc="8.6.6";class jc{static init(){globalThis.__PIXI_APP_INIT__?.(this,Kc)}static destroy(){}}jc.extension=be.Application;class hp{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,Kc)}destroy(){this._renderer=null}}hp.extension={type:[be.WebGLSystem,be.WebGPUSystem],name:"initHook",priority:-10};const Qc=class fl{constructor(...t){this.stage=new de,t[0]!==void 0&&Ot(Xn,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await cp(t),fl._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ot(Xn,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=fl._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Qc._plugins=[];let fs=Qc;Pr.handleByList(be.Application,fs._plugins);Pr.add(jc);var dp=`in vec2 aPosition;
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
`,mp=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,rf=`struct GlobalFilterUniforms {
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
}`;const Zc=class Jc extends Gt{constructor(t){t={...Jc.defaultOptions,...t};const n=Ut.from({vertex:{source:rf,entryPoint:"mainVertex"},fragment:{source:rf,entryPoint:"mainFragment"}}),r=Dt.from({vertex:dp,fragment:mp,name:"alpha-filter"}),{alpha:o,...i}=t,a=new Nc({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Zc.defaultOptions={alpha:1};let pp=Zc;const t0={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},yp=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function gp(e){const t=t0[e],n=t.length;let r=yp,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const xp=`
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
    }`;function vp(e,t){const n=Math.ceil(e/2);let r=xp,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function bp(e,t){const n=vp(t,e),r=gp(t);return Dt.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var Mp=`

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
}`;function Sp(e,t){const n=t0[t],r=n.length,o=[],i=[],a=[];for(let c=0;c<t;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,e?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:t-c-1,d=n[h].toString();a[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=Mp.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Ut.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const e0=class n0 extends Gt{constructor(t){t={...n0.defaultOptions,...t};const n=bp(t.horizontal,t.kernelSize),r=Sp(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=dn.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===Fs.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,r,o),dn.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};e0.defaultOptions={strength:8,quality:4,kernelSize:5};let of=e0;class _p{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new pe,this.observer=n,this.position=new Ie(this,0,0),this.scale=new Ie(this,1,1),this.pivot=new Ie(this,0,0),this.skew=new Ie(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const r0=class cs extends _c{constructor(...t){let n=t[0]||{};n instanceof Tt&&(n={texture:n}),t.length>1&&(Ot(Xn,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...cs.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Ie({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new _p({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=c??!1}static from(t,n={}){return typeof t=="string"?new cs({texture:Br.get(t),...n}):new cs({texture:t,...n})}get uvRespectAnchor(){return cr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){cr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=Tt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};r0.defaultOptions={texture:Tt.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let wp=r0;const ti=new Map;function Ap(e,t){if(!ti.has(e)){const n=new Tt({source:new au({resource:e,...t})}),r=()=>{ti.get(e)===n&&ti.delete(e)};n.once("destroy",r),n.source.once("destroy",r),ti.set(e,n)}return ti.get(e)}const o0=class i0{constructor(t={}){if(this.uid=En("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...i0.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new un({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof Tt||t.depthStencilTexture instanceof un?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new un({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};o0.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let Cp=o0;const cu=class s0{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...s0.defaultOptions,...t},t.view&&(Ot(Xn,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new _n(0,0,t.width,t.height),this.canvas=t.canvas||Rr.get().createCanvas(),this.antialias=!!t.antialias,this.texture=Ap(this.canvas,t),this.renderTarget=new Cp({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};cu.extension={type:[be.WebGLSystem,be.WebGPUSystem,be.CanvasSystem],name:"view",priority:0};cu.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let Tp=cu;Pr.add(Fd,Ed);const Qt={},Do={},sf=new Map,Un={};function cl(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function Rp(e){const t=window.MAP;Object.assign(Qt,window.META,t.decometa||{});for(const s of Object.keys(Qt)){const l=Qt[s].gear;if(l)for(const u in l)for(const f of l[u])Qt[s+"__"+u+f]=Qt[s]}const n=Object.keys(Qt),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>e(++i/o);await Promise.all([...n.map(async s=>{const l=await cl("assets/"+s+".png");if(Un[s]=l,l.naturalWidth){const u=Tt.from(l);u.source.scaleMode="nearest",Do[s]=u}a()}),...r.map(async s=>{Un[s]=await cl("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function Js(e){return!!Do[e]}function Pp(){return Object.values(Do)}const af=new Set;function a0(e){Do[e]||af.has(e)||!Qt[e]||(af.add(e),cl("assets/"+e+".png").then(t=>{if(Un[e]=t,t.naturalWidth){const n=Tt.from(t);n.source.scaleMode="nearest",Do[e]=n}}))}function Ip(e){for(const t of e){const n=Qt[t]&&Qt[t].gear;n&&n.w&&n.w.includes(0)&&a0(t+"__w0")}}function Ao(e,t,n,r){const o=Qt[e],i=Do[e];if(o&&!i&&e.includes("__"))return a0(e),null;if(!o||!i)return null;let a=0,s=0;if(o.anims&&t){const f=o.anims[t]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],c=o.dirs||1,h=c>=16?(n%16+16)%16:c>1?Math.round(n/2)%c:0;a=f.row+h,s=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(s=(r%o.frames+o.frames)%o.frames);const l=e+"|"+a+"|"+s;let u=sf.get(l);if(!u){if((s+1)*o.fw>i.width||(a+1)*o.fh>i.height)return null;u=new Tt({source:i.source,frame:new _n(s*o.fw,a*o.fh,o.fw,o.fh)}),sf.set(l,u)}return u}function l0(e,t,n){const r=Qt[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function zp(){const e=Un.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),a=Math.min(t,e.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,o,r,i,a,0,0,i,a);const l=Tt.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const D=Math.round,At=Math.PI*2,cn=e=>1-(1-e)*(1-e);function ao(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=D(n-a*o/2),u=D(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++){const h=t[c];for(let d=0;d<a;d++)h[d]===f&&e.fillRect(l+d*o,u+c*o,o,o)}}}function en(e){const t=Qt[e.sprite];return(t?t.ay:50)*(e.scale||1)/j.ZK}function Tn(e){const t=e.uid!==void 0?ft(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const Op=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],Fp={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function Ep(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=p(-.35,.35);ct.sfx("item_crit",t,n,.9),A({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.55),u=Math.min(1,a*3.5);i.globalAlpha=a<.45?1:(1-a)/.55;for(let f=0;f<=26;f++){const c=f/26;if(c>u)break;const h=o-Math.PI/2+r*(-1.35+2.7*c),d=u-c,m=D(2+7*Math.sin(Math.PI*c));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(D(s+Math.cos(h)*36-m/2),D(l+10+Math.sin(h)*24-m/2),m,m)}if(a<.3){const f=1-a/.3,c=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(D(s-c),D(l)-1,D(c*2),3),i.fillRect(D(s)-1,D(l-c*.7),3,D(c*1.4)),i.fillStyle="#ff5a3a";for(let h=0;h<4;h++){const d=c*.55;i.fillRect(D(s+(h&1?d:-d)*.7)-2,D(l+(h&2?d:-d)*.5)-2,4,4)}}}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.22),u=1.5-.95*l*l;if(!s.hit&&l>=1){s.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*At,y=p(1.5,3.5);P(t,n,.5,Math.cos(m)*y,Math.sin(m)*y,p(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*At,y=p(1,2.5);P(t,n,.55,Math.cos(m)*y,Math.sin(m)*y,p(1.5,3),.6,"#f2e4c4",2,9,!1)}tt(4)}const[f,c]=C(t,n,u);i.globalAlpha=a<.6?1:(1-a)/.4;const h=l>=1&&a<.35?(Math.random()-.5)*3:0;ao(i,Op,f+h,c-6,3,Fp)}})}function kp(e){const t=[e.x,e.y];for(const a of String(e.pts||"").split(";")){const s=a.split(",");s.length===2&&s[0]!==""&&t.push(+s[0],+s[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;ct.sfx("item_chain",t[2],t[3],1),P(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),A({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(a,s,l){const u=s*i,f=Math.floor(M.T*28);for(;l.sp<n&&u>=l.sp*o;){const c=t[l.sp*2+2],h=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*At,y=p(2,4.5);P(c,h,.5,Math.cos(m)*y,Math.sin(m)*y,p(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}a.lineJoin="miter";for(let c=0;c<n;c++){const h=u-c*o;if(h<0)break;const d=Math.max(0,1-h/.38);if(d<=0)continue;const[m,y]=C(t[c*2],t[c*2+1],c?.5:.7),[g,x]=C(t[c*2+2],t[c*2+3],.5),b=g-m,v=x-y,S=Math.hypot(b,v)||1,_=-v/S,w=b/S,R=Math.min(16,4+S*.1),T=7;a.beginPath(),a.moveTo(m,y);for(let lt=1;lt<T;lt++){const bt=(at(r+c*31+lt*7+f*13)-.5)*2*R;a.lineTo(m+b*lt/T+_*bt,y+v*lt/T+w*bt)}a.lineTo(g,x),a.globalAlpha=d*.4,a.strokeStyle="#5a7aff",a.lineWidth=8,a.stroke(),a.globalAlpha=d*.85,a.strokeStyle="#9ae0ff",a.lineWidth=3.5,a.stroke(),a.globalAlpha=d,a.strokeStyle="#ffffff",a.lineWidth=1.5,a.stroke();const k=2+(at(r+c)*3|0),F=(at(r+c*31+k*7+f*13)-.5)*2*R,U=at(r+c*5+f)<.5?1:-1,B=m+b*k/T+_*F,Z=y+v*k/T+w*F;if(a.beginPath(),a.moveTo(B,Z),a.lineTo(B+_*U*12+b/S*7,Z+w*U*12+v/S*7),a.lineTo(B+_*U*17+b/S*17,Z+w*U*17+v/S*17),a.globalAlpha=d*.75,a.strokeStyle="#bfeaff",a.lineWidth=1.5,a.stroke(),h<.16){const lt=1-h/.16,bt=4+lt*11;a.globalAlpha=lt,a.fillStyle="#e8f6ff",a.fillRect(D(g-bt),D(x)-1,D(bt*2),3),a.fillRect(D(g)-1,D(x-bt),3,D(bt*2)),a.fillStyle="#7ac8ff",a.fillRect(D(g)-4,D(x)-4,8,8)}}}}),tt(2)}const Up=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],Lp={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function Dp(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*At;ct.sfx("item_bash",t,n,1),A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.24),u=1.9-1.35*l*l;if(!s.hit&&l>=1){s.hit=!0,A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,gt(t,n,.3+1.3*cn(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,gt(t,n,.25+.8*cn(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let y=0;y<7;y++){const g=o+y/7*At;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,v=g+(at(o+y*9+x)-.5)*.7,[S,_]=C(t+Math.cos(v)*b,n+Math.sin(v)*b);x?d.lineTo(S,_):d.moveTo(S,_)}d.stroke()}}}),A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[y,g]=C(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const v=b/10*At;d.fillRect(D(y+Math.cos(v)*x)-2,D(g+Math.sin(v)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*At,y=p(1.5,4);P(t,n,.1,Math.cos(m)*y,Math.sin(m)*y,p(.6,1.8),p(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*At,y=p(1,3);P(t,n,.2,Math.cos(m)*y,Math.sin(m)*y,p(2,4),.8,"#7a7468",3,12,!1)}tt(5)}const[f,c]=C(t,n,u),h=l>=1&&a<.34?2:0;i.globalAlpha=a<.6?1:(1-a)/.4,i.translate(D(f),D(c-14+h)),i.rotate(r*.9*(1-l)),ao(i,Up,0,0,3,Lp)}})}function Xp(e,t,n,r,o){for(let i=0;i<9;i++){const a=r*6+i*.7+o,s=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(D(t+Math.cos(a)*s)-1,D(n-4+Math.sin(a)*s*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const a=-r*4+i*Math.PI,s=D(t+Math.cos(a)*18),l=D(n-2+Math.sin(a)*5);e.fillStyle="#ff9a3a",e.fillRect(s-3,l-1,7,3),e.fillRect(s-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(s,l,1,1)}}const Gp=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],Bp={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function Np(e){ct.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;A({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){Tn(o);const i=.32,a=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let s=0;s<14;s++){const l=s/14*At+t,u=a*(.65+.35*at(t+s)),[f,c]=C(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[h,d]=C(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,y]=C(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=s%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,c),n.lineTo(m,y),n.lineTo(h,d),n.closePath(),n.fill()}gt(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),a=i?en(i):.8,s=r<.06?2:r<.14?4:3,[l,u]=C(o.x,o.y,a+.32+r*.15),f=r<.7?1:(1-r)/.3;yt(!0);const c=$t();c.globalAlpha=f*(.35+.2*Math.sin(r*40)),c.fillStyle="#ff2a1a",c.fillRect(D(l-22),D(u-18),44,36),c.globalAlpha=1,yt(!1),n.globalAlpha=f,ao(n,Gp,l,u,s,Bp)}});for(let n=0;n<26;n++)P(e.x+p(-.4,.4),e.y+p(-.4,.4),p(.1,.6),p(-.4,.4),p(-.4,.4),p(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);tt(3)}const $p=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],Wp={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function Hp(e){ct.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;A({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),a=i?en(i):.8,[s,l]=C(o.x,o.y,a+.45),u=C(o.x,o.y,0)[1],f=t*1.9*cn(Math.min(1,r/.3)),c=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const h=Math.cos(f),d=Math.sin(f),m=t*12,y=-15,g=s+m*h-y*d,x=l+m*d+y*h,b=r<.7?3:2;n.globalAlpha=c;for(let v=0;v<=14;v++){const S=v/14,_=x+(u-x)*S,w=g+Math.sin(M.T*22+v)*1.5+t*S*6;n.fillStyle=v%3?"#b0102a":"#ff3a4a",n.fillRect(D(w)-1,D(_),b,D((u-x)/14)+1)}Math.random()<.6&&P(o.x+p(-.2,.2),o.y+p(-.2,.2),.02,p(-1,1),p(-1,1),p(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=c,n.translate(D(s),D(l)),n.rotate(f),ao(n,$p,0,0,3,Wp)}}),A({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*cn(Math.min(1,r/.45)),a=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=a,gt(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=a*.6,gt(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function Vp(e,t,n){const[r,o]=C(t.x,t.y,en(t)*.55),i=t.scale||1;for(let a=0;a<4;a++){const s=n*3.2+a*At/4+t.id,l=D(r+Math.cos(s)*22*i),u=D(o+Math.sin(s)*8*i+Math.sin(n*5+a)*2);e.globalAlpha=Math.sin(s)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&P(t.x+p(-.3,.3),t.y+p(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function qp(e){ct.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,a){const s=ft(a.uid);s&&!s.dead&&(a.ex=s.x,a.ey=s.y);const[l,u]=C(t,n,.5),[f,c]=C(a.ex,a.ey,.6),h=f-l,d=c-u,m=Math.hypot(h,d)||1,y=-d/m,g=h/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const v=(b-1)*.9+.3*Math.sin(r+b),S=Math.min(1,i*1.4-b*.1);if(!(S<=0))for(let _=0;_<7;_++){const w=S-_*.045;if(w<0)break;const R=Math.sin(w*Math.PI)*m*.28*v+Math.sin(w*14+b*2+M.T*10)*3,T=l+h*w+y*R,k=u+d*w+g*R-Math.sin(w*Math.PI)*14,F=_===0?4:_<3?3:2;o.globalAlpha=(1-_/7)*x,_===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(D(T-5),D(k-5),10,10),o.globalAlpha=x),o.fillStyle=_===0?"#ff8a96":_<3?"#e0203a":"#8a0a1e",o.fillRect(D(T-F/2),D(k-F/2),F,F)}}if(!a.pop&&i>.72){a.pop=!0;for(let b=0;b<4;b++)P(a.ex+p(-.2,.2),a.ey+p(-.2,.2),.6,0,0,p(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const Kr=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function Yp(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;ct.sfx("item_hex",t,n,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(a,s){const[l,u]=C(r,o,.7),[f,c]=C(t,n,.7),h=f-l,d=c-u,m=Math.hypot(h,d)||1,y=-d/m,g=h/m,x=Math.min(1,s*2.6);a.globalAlpha=s<.6?1:(1-s)/.4;for(let b=0;b<=30;b++){const v=b/30;if(v>x)break;const S=Math.sin(v*At*2.5-s*9)*8*(1-v*.6);a.fillStyle=Kr[(b+(s*24|0))%3],a.fillRect(D(l+h*v+y*S)-1,D(u+d*v+g*S)-1,3,3)}}}),A({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(a,s,l){const[u,f]=C(t,n,.6),c=Math.min(1,s/.42),h=s<.55?1:(1-s)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);yt(!0);const m=$t();for(let x=0;x<20;x++){const b=c-x*.025;if(b<0)break;const v=d(b),S=D(5-x*.2);m.globalAlpha=(1-x/20)*h,m.fillStyle=Kr[x<3?0:x<9?1:2],m.fillRect(D(u+Math.cos(v)*42-S/2),D(f+Math.sin(v)*24-S/2),S,S)}m.globalAlpha=1,yt(!1),a.globalAlpha=h;const y=d(c);for(let x=0;x<11;x++){const b=y-i*x*.07,v=1+x*.55,S=42-v/2,_=u+Math.cos(b)*S,w=f+Math.sin(b)*S*.58;a.fillStyle="#2a1040",a.fillRect(D(_-v/2),D(w-v/2),D(v)+1,D(v)+1),a.fillStyle="#f0e0ff",a.fillRect(D(u+Math.cos(b)*43)-1,D(f+Math.sin(b)*25)-1,2,2)}const g=y-i*.75;for(let x=38;x>10;x-=2)a.fillStyle=x%4?"#4a2a18":"#6a4024",a.fillRect(D(u+Math.cos(g)*x)-1,D(f+Math.sin(g)*x*.58)-1,3,3);if(!l.poof&&s>=.36){l.poof=!0;for(let x=0;x<9;x++)A({type:"puff",x:t+p(-.5,.5),y:n+p(-.5,.5),r:p(14,24),dur:p(.6,1),col:[176,128,236]});A({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*At,v=p(1,3);P(t,n,.6,Math.cos(b)*v,Math.sin(b)*v,p(.5,2.5),.6,Kr[x%4],3,1,!0)}for(let x=0;x<6;x++)P(t+p(-.3,.3),n+p(-.3,.3),.3,0,0,p(.8,1.6),.7,"#a8e070",3,-.5,!1);tt(3)}}})}function Kp(e,t){const[n,r]=C(e.x,e.y,en(e)+.22+Math.sin(t*3+e.id)*.03);yt(!0);const o=$t();for(let i=0;i<12;i++){const a=t*5+i*.55+e.id,s=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=Kr[i%3],o.fillRect(D(n+Math.cos(a)*s)-1,D(r+Math.sin(a)*s*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const a=-t*2.5+i*Math.PI,s=D(n+Math.cos(a)*16),l=D(r+4+Math.sin(a)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=Kr[0],o.fillRect(s-2,l,5,1),o.fillRect(s,l-2,1,5)}o.globalAlpha=1,yt(!1),Math.random()<.1&&P(e.x+p(-.25,.25),e.y+p(-.25,.25),.4,0,0,p(.6,1.2),.6,Kr[2],2,-.3,!0)}function jp(e){for(let t=0;t<5;t++)A({type:"puff",x:e.x+p(-.35,.35),y:e.y+p(-.35,.35),r:p(12,20),dur:p(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*At,r=p(1,2.5);P(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,p(.5,2),.5,Kr[t%3],2,1,!0)}}const er=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],Qp=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],Zp={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function Jp(e){ct.sfx("item_refresh",e.x,e.y,1),A({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Tn(r);const o=.45+.85*cn(n),[i,a]=C(r.x,r.y),s=o*j.HW*Math.SQRT2*1.08,l=o*j.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,gt(r.x,r.y,o,er[1],null,3),t.fillStyle=er[2];for(let u=0;u<16;u++){const f=u/16*At-n*5;t.fillRect(D(i+Math.cos(f)*s)-2,D(a+Math.sin(f)*l)-2,5,4)}gt(r.x,r.y,o*.6,er[0],null,1.5,[4,4])}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Tn(r),[i,a]=C(r.x,r.y,(o?en(o):.8)*.55),s=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*At-n*6,f=l%2===0,c=f?4:2;t.fillStyle=f?er[0]:er[2],t.fillRect(D(i+Math.cos(u)*s)-c/2,D(a+Math.sin(u)*s)-c/2,c,c)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?er[1]:er[0];for(let c=3;c<f;c+=2)t.fillRect(D(i+Math.cos(u)*c)-1,D(a+Math.sin(u)*c)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,A({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:er[1],w:4});for(let l=0;l<20;l++)P(r.x+p(-.4,.4),r.y+p(-.4,.4),p(.2,.9),p(-.6,.6),p(-.6,.6),p(1.5,3),.6,er[l%3],3,0,!0)}}}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Tn(r),[i,a]=C(r.x,r.y,(o?en(o):.8)*.55),s=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(D(i),D(a)),t.rotate(Math.PI*s*s*(3-2*s)),ao(t,Qp,0,0,3,Zp)}}),tt(2)}function u0(e,t,n,r,o){const i=D(t),a=D(n);e.fillStyle=r,e.fillRect(i-3,a,2,3),e.fillRect(i+1,a,2,3),e.fillRect(i-2,a+2,4,2),e.fillStyle=o,e.fillRect(i-1,a+2,2,1)}function t1(e){ct.sfx("item_immune",e.x,e.y,1);const t=Math.random()*At;A({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),[a,s]=C(o.x,o.y,(i?en(i):.8)*.45),l=cn(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const c=f/18*At+t+(1-l)*1.5,h=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),u0(n,a+Math.cos(c)*h,s+Math.sin(c)*h*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(a,s,32*u+6*(1-f),38*u+6*(1-f),0,0,At),n.stroke()}}}),A({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)P(e.x+p(-.4,.4),e.y+p(-.4,.4),p(.2,1),0,0,p(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);tt(2)}function e1(e,t){const n=e.scale||1,[r,o]=C(e.x,e.y,en(e)*.45),i=30*n,a=36*n;yt(!0);const s=$t();s.globalAlpha=.5+.1*Math.sin(t*4),s.strokeStyle="#ffcc40",s.lineWidth=2,s.fillStyle="rgba(255,200,60,0.07)",s.beginPath(),s.ellipse(r,o,i,a,0,0,At),s.fill(),s.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,c=i*Math.sqrt(Math.max(0,1-f/a*(f/a)))-4;for(let h=-c+(u&1?5:0);h<=c;h+=10){const d=Math.max(0,1-Math.abs(h-l+f*.5)/16);s.globalAlpha=.16+.6*d,u0(s,r+h,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}s.globalAlpha=1,yt(!1)}function n1(e){ct.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*At+p(-.25,.25),t[r*4+1]=p(.8,1.6),t[r*4+2]=p(-14,14),t[r*4+3]=p(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*At+p(-.4,.4);A({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Tn(i),[s,l]=C(i.x,i.y,(a?en(a):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(s,l,16*f,0,At),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s,l,13*f,0,At),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(s-2*f,l,8*f,0,At),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s+2*f,l-2*f,7*f,0,At),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(s,l),r.lineTo(s+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(s+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}yt(!0);const c=$t(),h=s-14+o/.45*28;c.globalAlpha=.8,c.fillStyle="#ffffff";for(let d=-3;d<=3;d++)c.fillRect(D(h+d*.6),D(l+d*3)-1,2,3);yt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const c=Math.random()*At,h=p(1.5,3.5);P(i.x,i.y,.7,Math.cos(c)*h,Math.sin(c)*h,p(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){yt(!0);const f=$t();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const c=10+u*60;f.fillRect(D(s-c),D(l)-1,D(c*2),3),f.fillRect(D(s)-1,D(l-c*.6),3,D(c*1.2)),yt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const c=t[f*4],h=u*t[f*4+1]*40,d=t[f*4+3],m=s+Math.cos(c)*(h+8),y=l+Math.sin(c)*(h+8)*.7+u*u*50,g=u*t[f*4+2];r.save(),r.translate(m,y),r.rotate(g),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const Qi=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function r1(e){ct.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,a=Math.random()*9,s=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;A({type:"ring",x:t,y:n,r:.8,dur:.35,col:Qi[1],w:4});for(let c=0;c<8;c++)P(t,n,.1,p(-1.2,1.2),p(-1.2,1.2),p(.3,1),.5,"#c8b48a",3,3,!1);A({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(c,h){const d=h*s,m=Math.min(1,d/i),y=Math.max(0,(d-.16)/i);if(y>=m)return;const[g,x]=C(t,n,.3),[b,v]=C(r,o,.3),S=(u-f)*j.HW,_=(u+f)*j.HH;for(let w=0;w<5;w++){const R=(w-2)*.22,T=(w-2)*6;for(let k=y;k<=m;k+=.025){const F=R+Math.sin(k*18+w*1.3+a)*.08,U=(k-y)/(m-y);c.globalAlpha=U*(w===2?1:.7),c.fillStyle=Qi[U>.85?0:w===2?1:2],c.fillRect(D(g+(b-g)*k+S*F)-1,D(x+(v-x)*k+_*F+T)-1,3,2)}}for(let w=0;w<3;w++){const R=.25+w*.3;if(R<y||R>m)continue;const T=g+(b-g)*R+S*(w-1)*.35,k=x+(v-x)*R+_*(w-1)*.35-10;c.globalAlpha=1-(R-y)/Math.max(.01,m-y)*.5;for(let F=0;F<9;F++){const U=M.T*9+F*.75+w,B=2+F*1.2;c.fillStyle=Qi[F<3?0:1],c.fillRect(D(T+Math.cos(U)*B)-1,D(k+Math.sin(U)*B*.6)-1,2,2)}}}});for(let c=0;c<14;c++){const h=Math.random();P(t+(r-t)*h,n+(o-n)*h,p(.1,.6),(r-t)/l*p(1,3),(o-n)/l*p(1,3),p(.2,1),p(.4,.8),Qi[c%3],2,0,!0)}}const Ia=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function o1(e,t){const[r,o]=C(e.x,e.y),i=2.8*j.HW*Math.SQRT2,a=2.8*j.HH*Math.SQRT2;yt(!0);const s=$t();s.globalAlpha=.07,s.fillStyle="#ff8a2a",s.beginPath(),s.ellipse(r,o,i*.97,a*.97,0,0,At),s.fill(),s.globalAlpha=.22+.06*Math.sin(t*3+e.id),s.strokeStyle="#ff9a3a",s.lineWidth=2,s.setLineDash([10,7]),s.lineDashOffset=-t*24,s.beginPath(),s.ellipse(r,o,i,a,0,0,At),s.stroke(),s.setLineDash([]),s.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*At+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),c=D(3+f*4);s.globalAlpha=.25+.45*f,s.fillStyle=f>.75?Ia[0]:Ia[1],s.fillRect(D(r+Math.cos(u)*i)-2,D(o+Math.sin(u)*a)-c,4,c)}if(s.globalAlpha=1,yt(!1),Math.random()<.35){const l=Math.random()*At,u=Math.sqrt(Math.random())*2.8;P(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,p(.8,1.6),p(.6,1),Ia[Math.random()*4|0],2,-.3,!0,.97)}}const Xo={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},lf={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},bi=2,za={};function f0(e,t){const n=e+(t?"o":"c");if(za[n])return za[n];let r=Xo[e]||Xo.obs;const o=lf[e]||lf.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const a=document.createElement("canvas");a.width=r[0].length*bi,a.height=r.length*bi;const s=a.getContext("2d");return ao(s,r,a.width/2,a.height/2,bi,o),za[n]=a}function hu(e){const t=Xo[e]||Xo.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*bi}function du(e,t){return(t+e.id*1.37)%4.2>.14}function i1(e,t,n){const r=M.T,o=$t(),i=window.SIM;if(o.globalAlpha=.35,gt(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const a=Math.max(0,e.until-n),s=e.kind==="obs"?360:300,[l,u]=C(e.x,e.y);o.globalAlpha=a<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*j.HW*Math.SQRT2,.34*j.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+At*Math.min(1,a/s)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&gt(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),gt(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function s1(e,t){const n=M.T,[r,o]=C(e.x,e.y),i=o-hu(e.kind);if(du(e,n)){yt(!0);const a=$t(),s=.6+.4*Math.sin(n*3+e.id);a.globalAlpha=.25*s,a.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",a.fillRect(D(r)-7,D(i)-5,14,10),a.globalAlpha=.6*s,a.fillRect(D(r)-3,D(i)-2,6,4),a.globalAlpha=1,yt(!1)}if(!t){const a=$t(),s=D(o-(Xo[e.kind]||Xo.obs).length*bi-8+Math.sin(n*5)*2),l=D(r);a.fillStyle="#120c1a",a.fillRect(l-5,s-2,11,4),a.fillRect(l-3,s+2,7,2),a.fillRect(l-1,s+4,3,2),a.fillStyle="#ff4a3a",a.fillRect(l-4,s-1,9,2),a.fillRect(l-2,s+1,5,2),a.fillRect(l,s+3,1,2)}}function a1(e,t,n,r){const o=f0(t,!0),[i,a]=C(n,r);e.globalAlpha=.6+.15*Math.sin(M.T*6),e.drawImage(o,D(i-o.width/2),D(a-o.height)),e.globalAlpha=1}function l1(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;ct.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)P(r,o,.05,p(-1.2,1.2),p(-1.2,1.2),p(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);A({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,a){const[s,l]=C(r,o),u=l-hu(t?"obs":"sen"),f=6+26*cn(a),c=10*Math.sin(Math.min(1,a*2.2)*Math.PI*.5)*(1-a*.5);i.globalAlpha=1-a,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let h=-8;h<=8;h++){const d=h/8,m=c*(1-d*d);i.fillRect(D(s+d*f)-1,D(u-m)-1,3,2),i.fillRect(D(s+d*f)-1,D(u+m)-1,3,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,a){i.globalAlpha=.5*(1-a),gt(r,o,(t?n.WARD_VISION:n.SENTRY_R)*cn(a),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)P(r+p(-.15,.15),o+p(-.15,.15),.5,0,0,p(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function u1(e){const t=e.kind!=="sen",n=e.x,r=e.y;ct.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*At,a=p(1,3);P(n,r,p(.2,.5),Math.cos(i)*a,Math.sin(i)*a,p(1.5,3.5),p(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)A({type:"puff",x:n+p(-.3,.3),y:r+p(-.3,.3),r:p(10,16),dur:p(.5,.8),col:[150,140,130]});A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[a,s]=C(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*At+i*2;o.fillRect(D(a+Math.cos(f)*l)-1,D(s+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(D(a)-3,D(s)-3,6,6))}})}const Pi=["#fff2c8","#ffd080","#ffa040","#c86a10"];function f1(e){ct.sfx("mon_howl",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),[a,s]=C(o.x,o.y,(i?en(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?Pi[1]:Pi[0];for(let c=-Math.PI*.86;c<=-Math.PI*.14;c+=.1)n.fillRect(D(a+Math.cos(c)*f)-1,D(s+Math.sin(c)*f*.7)-1,3,2)}}}),A({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=M.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||A({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const a=ft(i.uid);if(!a||a.dead||Te(a))return;const s=M.T,[l,u]=C(a.x,a.y,en(a)*.72),f=o>.85?(1-o)/.15:1,c=.7+.3*Math.sin(s*14+a.id),h=a.scale||1;r.globalAlpha=.35*f*c,r.fillStyle="#ff2010",r.fillRect(D(l-9*h),D(u-4),D(18*h),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(D(l-5*h)-1,D(u)-1,3,2),r.fillRect(D(l+5*h)-1,D(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(D(l-5*h),D(u)-1,1,1),r.fillRect(D(l+5*h),D(u)-1,1,1),Math.random()<.12&&P(a.x+p(-.3,.3),a.y+p(-.3,.3),.3,0,0,p(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function c1(e){const t=M.T,n=$t(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,gt(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let s=0;s<10;s++){const l=at(i*7+s),u=at(i*3+s*5),f=l*At+t*.25*(s%2?1:-1),c=e.r*(.2+.6*u),[h,d]=C(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.15+.1*Math.sin(t+s)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+s))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=s%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(h,d,m,m*.6,0,0,At),n.fill()}yt(!0);const a=$t();for(let s=0;s<9;s++){const l=(t*.45+at(i+s*11))%1,u=at(i*5+s)*At,f=e.r*.8*at(i+s*3),[c,h]=C(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);a.globalAlpha=Math.sin(l*Math.PI)*o,a.fillStyle=s%2?"#e0b8ff":"#d8ffa0",a.fillRect(D(c)-1,D(h)-1,2,2)}a.globalAlpha=1,yt(!1),n.globalAlpha=1}function h1(e){ct.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;A({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,gt(e.x,e.y,t*cn(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,gt(e.x,e.y,t*.7*cn(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*At,o=p(.5,1.6)*t;P(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,p(.3,1.2),p(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function d1(e){ct.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*At;A({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,a){i.globalAlpha=(1-a)*.8,gt(t,n,r*cn(Math.min(1,a*4)),"#6a4a24",null,5*(1-a)+1),i.globalAlpha=(1-a)*.35,gt(t,n,r,null,"#3a2814"),i.globalAlpha=1-a,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let s=0;s<10;s++){const l=o+s/10*At;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,c=l+(at(o+s*9+u)-.5)*.5,[h,d]=C(t+Math.cos(c)*f,n+Math.sin(c)*f);u?i.lineTo(h,d):i.moveTo(h,d)}i.stroke()}}}),A({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,a){const s=a<.15?cn(a/.15):a>.7?(1-a)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*At,c=u?r*(.85+.15*at(o+l)):r*.45,[h,d]=C(t+Math.cos(f)*c,n+Math.sin(f)*c),m=(u?34:24)*s*(.8+.4*at(o+l*3)),y=(at(o+l*7)-.5)*22,g=h+y,x=d-m,b=h-y*.6,v=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(h,d),i.quadraticCurveTo(b,v,g,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(D(g)-2,D(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(D(g),D(x)-2,2,1)}}});for(let i=0;i<30;i++){const a=Math.random()*At,s=p(.5,2.5);P(t+Math.cos(a)*r*.8,n+Math.sin(a)*r*.8,.1,Math.cos(a)*s,Math.sin(a)*s,p(1,3),p(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}tt(6)}const m1=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],p1={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function y1(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(ct.sfx("camp_"+t,e.x,e.y,1),t==="pack"){A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),[a,s]=C(o.x,o.y,(i?en(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,ao(n,m1,a,s,r<.1?2:3,p1);const[l,u]=C(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=Pi[1];for(let f=-1;f<=1;f++)for(let c=0;c<8;c++)n.fillRect(D(l+f*8-10+c*3),D(u-12+c*3),2,2)}}});for(let n=0;n<18;n++)P(e.x+p(-.4,.4),e.y+p(-.4,.4),p(.2,1),0,0,p(1,2.2),.8,Pi[n%4],3,0,!0)}else if(t==="spore"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Tn(o),[a,s]=C(o.x,o.y,(i?en(i):.8)*.5),l=cn(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*At+l*5,c=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(D(a+Math.cos(f)*c)-2,D(s+Math.sin(f)*c*.6)-2,4,4)}}}),A({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)A({type:"puff",x:e.x+p(-.6,.6),y:e.y+p(-.6,.6),r:p(8,14),dur:p(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Tn(i),[s,l]=C(i.x,i.y,(a?en(a):.8)*.4),u=cn(Math.min(1,o/.45)),f=a&&a.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let c=0;c<10;c++){const h=c/10*At,d=(70*(1-u)+24)*f,m=D(s+Math.cos(h)*d),y=D(l+Math.sin(h)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,y-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,y-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,y-6,1,12),r.fillRect(m+2,y-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,tt(2);for(let c=0;c<10;c++)P(i.x+p(-.4,.4),i.y+p(-.4,.4),.4,p(-1,1),p(-1,1),p(1,2),.6,c%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function g1(e,t,n){if(t.camp_bark){const[r,o]=C(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,a=i*j.HW*Math.SQRT2,s=i*j.HH*Math.SQRT2,l=$t();for(let u=0;u<12;u++){const f=u/12*At;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(D(r+Math.cos(f)*a)-2,D(o+Math.sin(f)*s)-1,4,3)}}if(t.camp_pack){yt(!0);const r=$t(),[o,i]=C(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=Pi[2];for(let a=0;a<3;a++){const s=n*.8+a*At/3,l=o+Math.cos(s)*26,u=i+Math.sin(s)*13;for(let f=-1;f<=1;f++)for(let c=0;c<4;c++)r.fillRect(D(l+f*4-4+c*2),D(u-3+c*2),2,1)}r.globalAlpha=1,yt(!1)}if(t.camp_spore){yt(!0);const r=$t(),[o,i]=C(e.x,e.y,en(e)*.5);for(let a=0;a<4;a++){const s=n*(.9+a*.2)+a*1.7+e.id,l=o+Math.cos(s)*20+Math.sin(n*1.7+a)*5,u=i+Math.sin(s*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+a),r.fillStyle=a%2?"#e0b8ff":"#c8f090",r.fillRect(D(l)-1,D(u)-1,2,2)}r.globalAlpha=1,yt(!1)}}function x1(e){const t=M.game&&M.game.player,n=e.uid!==void 0?ft(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam")&&n&&!n.dead&&Te(n))return!0;switch(e.type){case"item_crit":return Ep(e),!0;case"item_chain":return kp(e),!0;case"item_bash":return Dp(e),!0;case"item_berserk":return Np(e),!0;case"item_bloodlust":return Hp(e),!0;case"item_drain":return qp(e),!0;case"item_hex":return Yp(e),!0;case"item_refresh":return Jp(e),!0;case"item_immune":return t1(e),!0;case"item_spellblock":return n1(e),!0;case"item_push":return r1(e),!0;case"ward_place":return t&&e.team===t.team&&l1(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&u1(e),!0;case"mon_howl":return f1(e),!0;case"mon_spores":return h1(e),!0;case"mon_rootslam":return d1(e),!0;case"camp_buff":return y1(e),!0}return!1}function v1(e){const t=e.status||{},n=M.T;if((e.aura||e.auraFx)&&o1(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&g1(e,t,n),t.berserk){const r=.5+.5*Math.sin(n*9+e.id);yt(!0);const o=$t();o.globalAlpha=.3+.25*r,gt(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*r,"#ff3a2a",null,2),o.globalAlpha=1,yt(!1),Math.random()<.3&&P(e.x+p(-.3,.3),e.y+p(-.3,.3),.05,0,0,p(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function b1(e,t){const n=t.status||{},r=M.T;n.bloodlust&&Vp(e,t,r),n.immune&&e1(t,r),n.hex?(Kp(t,r),t._hexV=1):t._hexV&&(t._hexV=0,jp(t))}const ct={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},yr={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let hl=null;const Ii=e=>yr[hl&&hl[e]||e]||yr.fire,Mn=e=>{const t=Ii(e);return t[Math.random()*t.length|0]};let sr=[],Go=[],zi=[],vn=[],Es=1,dl=1;function hs(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function c0(){sr=[],Go=[],zi=[],vn=[]}function P(e,t,n,r,o,i,a,s,l=2,u=0,f=!1,c=.94){Es<1&&Math.random()>Es||sr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:c})}function re(e,t,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;P(e,t,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*s,a*(.6+Math.random()*.6),Mn(r),u+(Math.random()<.3?1:0),4,l)}}function tt(e){M.cam.shake=Math.max(M.cam.shake,e*dl)}function A(e){return e.t=0,Go.push(e),e}function Dr(e){e.t=0,zi.push(e)}const uf={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},ff=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),M1=new Set(["gato","zorra"]),S1={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function cf(e){const t=Ii(e.col&&yr[e.col]?e.col:"gold"),n=e.uid?ft(e.uid):null;if(e.type==="windup"){ct.sfx(S1[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";A({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=ft(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,r&&e.radius)gt(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(o&&e.radius)gt(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!o&&e.range){const c=e.ex-u,h=e.ey-f,d=Math.hypot(c,h)||1,m=Math.min(e.range,d)*a,[y,g]=C(u,f,.1),[x,b]=C(u+c/d*m,f+h/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(y,g),i.lineTo(x,b),i.stroke(),i.setLineDash([])}gt(u,f,.35+.35*a,t[0],null,2)}}),A({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=ft(s.uid),[u,f]=C(l?l.x:s.x,l?l.y:s.y,.75);for(let c=0;c<10;c++){const h=c/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[c%t.length],i.fillRect(Math.round(u+Math.cos(h)*d-2),Math.round(f+Math.sin(h)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(re(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),ct.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(A({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const a=ft(i.uid);if(!a||!a.channel&&o>.05){i.t=i.dur;return}const s=e.radius||1.2,l=M.T;r.globalAlpha=.7,gt(i.x,i.y,s,t[1],null,3),gt(i.x,i.y,s*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[c,h]=C(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(c-3),Math.round(h-3),6,6)}n&&Math.random()<.5&&P(n.x,n.y,.9,p(-.5,.5),p(-.5,.5),p(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),ct.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?A({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(re(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),ct.sfx("deny",e.x,e.y,.4)):re(e.x,e.y,.6,e.col&&yr[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function _1(e){const t=Ii(e.type.slice(5)&&yr[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;A({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(a,s,l){const[u,f]=C(l.x,l.y,.55),c=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-c/2),Math.round(f-c/2),Math.round(c),Math.round(c)),a.fillStyle=t[1];for(let h=0;h<6;h++){const d=h/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*c),Math.round(f+Math.sin(d)*c*.7),3,3)}}});for(let a=0;a<10;a++)P(o,i,.5,n*p(1.5,4)+p(-.8,.8),r*p(1.5,4)+p(-.8,.8),p(0,1),.3,t[a%t.length],3,0,!0);tt(1.5)}function w1(){const e=M.game;window.SIM.HEROES;for(const t of e.fx){if(t.done)continue;t.done=!0;const n=!e.player||t.uid===e.player.id||t.uid===void 0;if(Es=n?1:.4,dl=n?1:.3,t.type==="channel"||t.type==="channel_tick"||t.type==="channel_end"){const s=t.hero&&t.key?K[t.hero+"_"+t.key]:void 0;if(t.type==="channel"&&ct.sfx("ab_"+t.hero+"_"+t.key,t.x,t.y,1),s)try{if(s(t)!==!1)continue}catch(l){console.error(l)}cf(t);continue}if(t.type==="windup"||t.type==="windup_cancel"){cf(t);continue}typeof t.type=="string"&&t.type.startsWith("cast_")&&_1(t);const r=t.key&&t.hero&&t.type!=="hit"&&t.type!=="transform"?t.hero+"_"+t.key:"",o=r?K[r]:void 0,i=r&&t.type!=="heal"&&!t.impact,a=r?i?"ab_"+r:t.impact&&!o?uf[t.type]:null:uf[t.type];if(t.key==="R"&&t.hero&&t.type!=="hit"&&ct.babble(t.hero,"ult",t.x,t.y),a&&ct.sfx(a,t.x,t.y,t.type==="levelup"&&e.player&&t.uid!==e.player.id?.4:1),o)try{if(o(t)!==!1)continue}catch(s){console.error(s)}if(typeof t.type=="string"&&/^(item_|ward_|mon_|camp_)/.test(t.type))try{if(x1(t))continue}catch(s){console.error(s);continue}switch(t.type){case"fire":{A({type:"cone",x:t.x,y:t.y,ux:t.ux,uy:t.uy,range:t.range,angle:t.angle,dur:.45});for(let s=0;s<90;s++){const l=Math.atan2(t.uy,t.ux)+(Math.random()-.5)*t.angle*2,u=(.4+Math.random())*t.range*2.4;P(t.x+t.ux*.4,t.y+t.uy*.4,.35,Math.cos(l)*u,Math.sin(l)*u,Math.random()*1.2,.5,Mn("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Dr({type:"scorch",x:t.x+t.ux*t.range*.5,y:t.y+t.uy*t.range*.5,r:t.range*.5,dur:4}),tt(3);break}case"quake":{A({type:"cracks",x:t.x,y:t.y,ux:t.ux||1,uy:t.uy||0,range:t.range,angle:t.angle,dur:1.2,seed:Math.random()*99}),A({type:"ring",x:t.x,y:t.y,r:t.range,dur:.4,col:"#f4e0c0",w:5});for(let s=0;s<50;s++){const l=Math.random()*6.28,u=Math.random()*t.range*2.5;P(t.x,t.y,.1,Math.cos(l)*u,Math.sin(l)*u,1+Math.random()*2,.7,Mn("quake"),3,6,!1)}tt(t.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const s=t.type==="firering"?"fire":t.type==="healring"?"heal":t.type;A({type:"ring",x:t.x,y:t.y,r:t.radius,dur:.45,col:Ii(s)[1],w:7}),A({type:"ring",x:t.x,y:t.y,r:t.radius*.7,dur:.6,col:Ii(s)[0],w:3,delay:.08}),t.type==="roar"&&(A({type:"ring",x:t.x,y:t.y,r:t.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),tt(8)),t.type==="firering"&&(A({type:"flash",x:t.x,y:t.y,r:t.radius,dur:.25,col:"rgba(255,200,80,"}),tt(9),Dr({type:"scorch",x:t.x,y:t.y,r:t.radius*.9,dur:6})),t.type==="frost"&&Dr({type:"frost",x:t.x,y:t.y,r:t.radius,dur:3}),t.type==="splash"&&Dr({type:"wet",x:t.x,y:t.y,r:t.radius*.8,dur:2.5});const l=t.type==="spores"?40:90;for(let u=0;u<l;u++){const f=Math.random()*Math.PI*2,c=t.radius*(1.6+Math.random()*1.6);P(t.x,t.y,.2,Math.cos(f)*c,Math.sin(f)*c,Math.random()*2,.6,Mn(s),t.type==="spores"?5:3,3,t.type!=="spores"&&t.type!=="splash")}if(t.type==="spores")for(let u=0;u<14;u++)A({type:"puff",x:t.x+p(-1,1)*t.radius*.7,y:t.y+p(-1,1)*t.radius*.7,r:p(14,26),dur:p(.7,1.3),col:[140,210,90]});break}case"heal":A({type:"pillar",x:t.x,y:t.y,dur:.8,col:[110,255,140]});for(let s=0;s<16;s++)P(t.x+p(-.4,.4),t.y+p(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Mn("heal"),3,0,!0);break;case"shield":case"stoneskin":A({type:"bubble",uid:t.uid,x:t.x,y:t.y,dur:t.dur||3,col:t.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":A({type:"swirl",uid:t.uid,x:t.x,y:t.y,dur:t.dur||4});break;case"smoke":for(let s=0;s<12;s++)A({type:"puff",x:t.x+p(-.6,.6),y:t.y+p(-.6,.6),r:p(12,22),dur:p(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const s=t.type==="firedash"?"fire":"dust",l=t.ex||t.x+(t.ux||0)*(t.range||0),u=t.ey||t.y+(t.uy||0)*(t.range||0);for(let f=0;f<30;f++){const c=f/30;P(t.x+(l-t.x)*c+p(-.2,.2),t.y+(u-t.y)*c+p(-.2,.2),.15,p(-.5,.5),p(-.5,.5),p(.3,1.2),.5+c*.4,Mn(s),4,0,s==="fire")}A({type:"streak",x:t.x,y:t.y,ex:l,ey:u,dur:.35,col:s==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const s=t.ex||t.x,l=t.ey||t.y;A({type:"flash",x:t.x,y:t.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),A({type:"flash",x:s,y:l,r:1.1,dur:.3,col:"rgba(220,170,255,"}),A({type:"streak",x:t.x,y:t.y,ex:s,ey:l,dur:.3,col:"#d8a8ff"}),re(t.x,t.y,.4,"arcane",16,2,.5),re(s,l,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let s=0;s<20;s++){const l=Math.random()*6.28,u=Math.random()*t.radius;P(t.x+Math.cos(l)*u,t.y+Math.sin(l)*u,.1,0,0,2,.6,Mn("arcane"),2,0,!0)}break;case"starfall":for(let s=0;s<18;s++)A({type:"meteor",x:t.x+p(-1,1)*t.radius*.8,y:t.y+p(-1,1)*t.radius*.8,dur:.35,delay:s*.02});A({type:"flash",x:t.x,y:t.y,r:t.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),A({type:"ring",x:t.x,y:t.y,r:t.radius,dur:.5,col:"#e2b8ff",w:7}),re(t.x,t.y,.2,"arcane",70,6,.8,3),Dr({type:"scorch",x:t.x,y:t.y,r:t.radius*.8,dur:5,col:[60,30,90]}),tt(10);break;case"slash":A({type:"xslash",x:t.x,y:t.y,dur:.35}),re(t.x,t.y,.5,"blood",20,4,.5,2,!1),re(t.x,t.y,.5,"slash",14,4,.4),tt(7);break;case"hit":{if(t.hero&&(t.kind==="hero"||t.proj)){const l=t.proj&&t.pkey||"A";if(l==="A"&&Me[t.hero]){if(M1.has(t.hero)||ct.sfx("atk_"+t.hero,t.x,t.y,t.big?1:.8),!(t.proj&&ff.has(t.hero+"_A")))try{Me[t.hero](t)}catch(f){console.error(f)}break}if(l!=="A"&&ff.has(t.hero+"_"+l))break;const u=l!=="A"?K[t.hero+"_"+l+"_hit"]:void 0;if(u){ct.sfx("imp_"+t.hero+"_"+l,t.x,t.y,.9);try{u(t)}catch(f){console.error(f)}break}}const s=t.col&&yr[t.col]?t.col:t.hero==="dragon"?"fire":"slash";A({type:"spark",x:t.x,y:t.y,dur:.15,big:!!t.big,col:yr[s][0]}),re(t.x,t.y,.45,s,t.big?10:5,t.big?3:2,.35,1.5,!0,2),ct.sfx(t.big||t.skill?"hitbig":"hit",t.x,t.y,t.kind==="minion"?.35:t.kind==="monster"?.6:.8),t.skill&&tt(2);break}case"shoot":if(t.kind==="hero"&&t.hero){ct.sfx("shot_"+t.hero,t.x,t.y,.6);break}ct.sfx(t.proj==="arrow"?"arrow":t.proj==="tower"?"tower":t.proj==="spear"?"spear":"arcane",t.x,t.y,t.kind==="minion"?.3:.6);break;case"bite":A({type:"jaws",x:t.x,y:t.y,dur:.35}),re(t.x,t.y,.3,"bite",24,3,.5),tt(5);break;case"transform":{if(t.hero&&K[t.hero+"_T"]){ct.sfx("tf_"+t.hero,t.x,t.y,1);try{K[t.hero+"_T"](t)}catch(u){console.error(u)}break}const s=t.kind==="fire",l=s?[255,140,50]:[255,220,90];A({type:"pillar",x:t.x,y:t.y,uid:t.uid,dur:1.2,col:l}),A({type:"ring",x:t.x,y:t.y,r:2.6,dur:.7,col:s?"#ff9a3a":"#ffe070",w:6}),re(t.x,t.y,.6,s?"fire":"gold",70,5,.9,3,!0,4),tt(t.uid===(e.player&&e.player.id)?10:4),ct.sfx("roar",t.x,t.y,.8);break}case"levelup":A({type:"pillar",x:t.x,y:t.y,uid:t.uid,dur:1,col:[255,220,90]}),A({type:"ring",x:t.x,y:t.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":t.kind==="hero"?(t.sprite&&ct.babble(t.sprite==="slime"&&(ft(t.uid)||{}).heroKey||t.sprite,"die",t.x,t.y),re(t.x,t.y,.4,"smoke",22,2.5,.9,2,!1,4),A({type:"wisp",x:t.x,y:t.y,dur:1.5,team:t.team}),ct.sfx("death",t.x,t.y)):t.kind==="minion"?(re(t.x,t.y,.3,"smoke",8,1.5,.6,1,!1,3),ct.sfx("mdeath",t.x,t.y,.3)):t.kind==="monster"&&(re(t.x,t.y,.3,"spores",18,2.5,.8,2,!1,4),ct.sfx("mdeath",t.x,t.y,.5));break;case"towerdown":for(let s=0;s<26;s++){const l=Math.random()*6.28,u=p(1.5,5);P(t.x+p(-.3,.3),t.y+p(-.3,.3),p(.8,2.2),Math.cos(l)*u,Math.sin(l)*u,p(3,9),p(1.2,2),Mn("stone"),Math.random()*4+4|0,14,!1,.97)}for(let s=0;s<14;s++)A({type:"puff",x:t.x+p(-1.2,1.2),y:t.y+p(-1.2,1.2),r:p(26,46),dur:p(1.2,2.2),col:[150,140,130]});A({type:"pillar",x:t.x,y:t.y,dur:.8,col:[255,200,120]}),Dr({type:"scorch",x:t.x,y:t.y,r:1.8,dur:30}),ct.say(t.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),ct.banner(t.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",t.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":t.type==="bossdown"&&ct.say(t.monster==="serpent"?"serpent":"boss"),re(t.x,t.y,1,t.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let s=0;s<30;s++)P(t.x,t.y,1,p(-4,4),p(-4,4),p(3,8),1.4,Mn("stone"),5,12,!1);A({type:"flash",x:t.x,y:t.y,r:3,dur:.4,col:t.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),A({type:"ring",x:t.x,y:t.y,r:4,dur:.7,col:"#ffe0a0",w:8}),tt(14);break;case"killbanner":{const s=e.player,l=s&&t.uid===s.id;if(A({type:"wisp",x:t.x,y:t.y,dur:1.6}),re(t.x,t.y,.8,"gold",l?40:14,4,.9,3,!0,3),!t.hero)break;const u=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],f=t.big===1,c=t.big===2,h=t.dur||0,d=f?"first":t.skill>=2?"multi":c?"ace":h>=7?"godlike":h>=5?"unstoppable":h===4?"rampage":h===3?"spree":"kill",y=d==="multi"?u[Math.min(5,t.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[d],g=s&&t.team===s.team;ct.banner(y,g?"#7fd0ff":"#ff7a6a",t.hero,t.kind,!!(f||c||t.skill>=2||l));const x=s&&s.heroKey===t.kind&&s.dead&&t.team!==s.team,b=["","","double","triple","quadra","penta"];ct.say(d==="first"?"first_blood":d==="multi"?b[Math.min(5,t.skill)]:d==="kill"?x?"you_died":g?"kill":"ally_killed":d),l&&tt(6);break}case"runespawn":ct.say("rune");break;case"chrono":A({type:"custom",layer:"top",add:!0,dur:t.dur||3,x:t.x,y:t.y,draw(s,l,u){s.globalAlpha=.35*(l>.9?(1-l)*10:1),gt(u.x,u.y,t.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[f,c]=C(u.x,u.y,0);for(let h=0;h<12;h++){const d=h/12*6.283;s.fillStyle="#ffffff",s.fillRect(Math.round(f+Math.cos(d)*t.radius*46),Math.round(c+Math.sin(d)*t.radius*23),3,3)}}}),tt(5);break;case"hook_pull":A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.35,col:"#d0c0a0"}),re(t.x,t.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":A({type:"streak",x:t.x,y:t.y-.01,ex:t.x,ey:t.y,dur:.3,col:"#ffffff"}),A({type:"ring",x:t.x,y:t.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),re(t.x,t.y,.8,"arcane",20,3,.5,3,!0,3),tt(3);break;case"pet_fade":re(t.x,t.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":ct.sfx("item_blink",t.x,t.y),re(t.x,t.y,.6,"arcane",18,2.5,.4,2,!0,3),re(t.ex,t.ey,.6,"frost",18,2.5,.4,2,!0,3),A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":ct.sfx("item_shield",t.x,t.y,.7),A({type:"ring",x:t.x,y:t.y,r:.9,dur:.5,col:"#ffe070",w:4}),re(t.x,t.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":ct.sfx("item_purge",t.x,t.y),A({type:"ring",x:t.x,y:t.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),re(t.x,t.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":ct.sfx("item_invis",t.x,t.y),re(t.x,t.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":ct.sfx("item_drum",t.x,t.y);for(let s=0;s<3;s++)A({type:"ring",x:t.x,y:t.y,r:t.radius||6,dur:.6,col:"#ffb060",w:3,delay:s*.14});tt(3);break;case"item_freeze":ct.sfx("item_freeze",t.ex,t.ey),A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.25,col:"#9ae8ff"}),re(t.ex,t.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const s=e.player;if(!s||t.team!==s.team)break;const l=t.kind==="danger"?"#ff5a4a":t.kind==="omw"?"#7fd0ff":t.kind==="missing"?"#ffd24a":"#8ae08a";for(let u=0;u<3;u++)A({type:"ring",x:t.x,y:t.y,r:1.4,dur:.9,col:l,w:4,delay:u*.18});A({type:"pingmark",x:t.x,y:t.y,dur:3,col:l,kind:t.kind}),ct.play(t.kind==="danger"?"deny":"aim",.7);break}case"laser":A({type:"streak",x:t.x,y:t.y,ex:t.ex,ey:t.ey,dur:.25,col:t.team==="blue"?"#9ae8ff":"#ffb070"}),re(t.ex,t.ey,.5,t.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),ct.sfx("tower",t.ex,t.ey,.7);break;case"rooted":A({type:"vines",uid:t.uid,x:t.x,y:t.y,dur:t.dur||1.3});break;case"announce":if(t.snd==="end"){const s=e.player&&e.winner===e.player.team;ct.play(s?"victory":"defeat",1),ct.say(s?"victory":"defeat")}else ct.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":A({type:"flash",x:t.x+(t.ux||0)*.5,y:t.y+(t.uy||0)*.5,r:.45,dur:.15,col:t.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}Es=1,dl=1,hl=null}function A1(e){for(const t of sr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);hs(sr,t=>t.life>0),sr.length>2500&&sr.splice(0,sr.length-2500);for(const t of Go)t.t+=e;hs(Go,t=>t.t<t.dur+(t.delay||0));for(const t of zi)t.t+=e;hs(zi,t=>t.t<t.dur),M.cam.shake=Math.max(0,M.cam.shake-e*30)}let Oa=6,uo=0;function C1(e,t,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=j,f=window.MAP,c=M.T;if(Oa-=e,Oa<=0&&(uo=p(.6,1),Oa=p(8,16)),uo=Math.max(0,uo-e*.25),M.wind=.35+.15*Math.sin(c*.4)+uo,uo>.3&&Math.random()<uo*.9){const h=n+Math.random()*o,m=t-20-u,y=(m/a+h/s)/2,g=(h/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];vn.push({k:"leaf",x:y,y:g,z:p(.4,2.2),ph:Math.random()*6,life:p(2.5,4),col:x,sp:p(9,15)})}if(vn.length<70&&Math.random()<.8){const h=t+Math.random()*r,d=n+Math.random()*o,m=h-u,y=d,g=(m/a+y/s)/2,x=(y/s-m/a)/2;if(g>1&&x>1&&g<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(g)];b===0||b===4?vn.push({k:"fly",x:g,y:x,z:p(.2,.9),ph:Math.random()*6,life:p(4,9),vx:p(-.3,.3),vy:p(-.3,.3)}):b===3&&vn.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:p(.4,1),max:1})}}for(const h of vn)h.life-=e,h.k==="leaf"&&(h.x+=h.sp*e*.5,h.y-=h.sp*e*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=p(-.6,.6)*e,h.vy+=p(-.6,.6)*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=Math.sin(c*2+h.ph)*.003);if(hs(vn,h=>h.life>0),vn.length>160&&vn.splice(0,vn.length-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,m]=C(h.x,h.y);d>t&&d<t+r&&m>n&&m<n+o+100&&P(h.x+p(-.4,.4),h.y+p(-.4,.4),1.4,p(-.3,.3),p(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let E,ds,xr=null;function hf(e,t){E=ds=e,xr=t||null}function oe(e){if(!xr){E.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(E===xr)return;xr.setTransform(ds.getTransform()),xr.globalAlpha=ds.globalAlpha,xr.globalCompositeOperation="lighter",xr.imageSmoothingEnabled=!1,E=xr}else E=ds}function gt(e,t,n,r,o,i=2,a){const{HW:s,HH:l}=j,[u,f]=C(e,t);E.beginPath(),E.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(E.fillStyle=o,E.fill()),r&&(E.lineWidth=i,E.strokeStyle=r,a&&E.setLineDash(a),E.stroke(),E.setLineDash([]))}function df(e,t,n){E.beginPath(),e.forEach(([r,o],i)=>{const[a,s]=C(r,o);i?E.lineTo(a,s):E.moveTo(a,s)}),E.closePath(),E.fillStyle=n,E.fill(),E.strokeStyle=t,E.lineWidth=2,E.stroke()}function T1(){for(const e of zi){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];gt(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&gt(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&gt(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function h0(e,t){if(!(t>1)){e.add&&oe(!0),E.save();try{e.draw(E,t,e)}catch(n){console.error(n)}E.restore(),e.add&&oe(!1)}}function yt(e){oe(e)}function $t(){return E}function R1(){const{HW:e}=j;for(const t of Go){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&h0(t,r);continue}if(t.type==="ring")E.globalAlpha=Math.max(0,1-r),gt(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),E.globalAlpha=1;else if(t.type==="cone"){const[o,i]=C(t.x,t.y),a=Math.atan2(t.uy,t.ux);E.save(),oe(!0),E.globalAlpha=Math.max(0,.75*(1-r)),E.beginPath(),E.moveTo(o,i);for(let f=0;f<=16;f++){const c=a-t.angle+2*t.angle*f/16,h=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=C(t.x+Math.cos(c)*h,t.y+Math.sin(c)*h);E.lineTo(d,m)}E.closePath();const[s,l]=C(t.x+t.ux*t.range,t.y+t.uy*t.range),u=E.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),E.fillStyle=u,E.fill(),oe(!1),E.restore()}else if(t.type==="cracks"){E.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,E.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(t.angle,3)*1.6;E.beginPath();let[s,l]=C(t.x,t.y);E.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,c=a+(at(t.seed+i*7+u)-.5)*.6;[s,l]=C(t.x+Math.cos(c)*f,t.y+Math.sin(c)*f),E.lineTo(s,l)}E.stroke()}}else if(t.type==="flash"){const[o,i]=C(t.x,t.y,.3),a=t.r*e*1.3;oe(!0);const s=E.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,t.col+.8*(1-r)+")"),s.addColorStop(1,t.col+"0)"),E.fillStyle=s,E.fillRect(o-a,i-a,a*2,a*2),oe(!1)}else if(t.type==="streak"){const[o,i]=C(t.x,t.y,.4),[a,s]=C(t.ex,t.ey,.4);oe(!0),E.strokeStyle=t.col,E.globalAlpha=Math.max(0,.9*(1-r)),E.lineWidth=8*(1-r)+1,E.beginPath(),E.moveTo(o,i),E.lineTo(a,s),E.stroke(),E.globalAlpha=1,oe(!1)}else if(t.type==="puff"){const[o,i]=C(t.x,t.y,.3+r*.4),a=t.col;E.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=t.r*(.6+r*.7);E.beginPath(),E.ellipse(o,i,s,s*.75,0,0,7),E.fill()}}}function P1(){const e=M.T;for(const t of Go){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&h0(t,r);continue}const o=t.uid?ft(t.uid):null,i=o?o.x:t.x,a=o?o.y:t.y;if(t.type==="pillar"){const[s,l]=C(i,a),u=t.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));oe(!0);const h=E.createLinearGradient(s,l,s,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),E.fillStyle=h,E.fillRect(s-18,l-f,36,f),oe(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=C(i,a,.35),u=t.col;oe(!0),E.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,E.lineWidth=2,E.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,E.beginPath(),E.ellipse(s,l,34,38,0,0,7),E.fill(),E.stroke();for(let f=0;f<6;f++){const c=e*1.5+f*1.05;E.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,E.fillRect(s+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}oe(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[s,l]=C(i,a,.3);E.strokeStyle="rgba(160,255,190,0.7)",E.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;E.beginPath(),E.ellipse(s,l,26,12,0,f,f+1.4),E.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[s,l]=C(i,a);E.strokeStyle="#4a7a2a",E.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;E.beginPath(),E.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),E.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),E.stroke()}E.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;E.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=C(t.x,t.y,3*(1-r));oe(!0),E.strokeStyle="rgba(240,200,255,0.9)",E.lineWidth=4,E.beginPath(),E.moveTo(s-18,l-50),E.lineTo(s,l),E.stroke(),E.fillStyle="#ffffff",E.fillRect(s-3,l-3,6,6),oe(!1)}else if(t.type==="xslash"){const[s,l]=C(t.x,t.y,.5),u=40*Math.min(1,r*3);E.globalAlpha=Math.max(0,1-r),E.strokeStyle="#ffffff",E.lineWidth=6,E.beginPath(),E.moveTo(s-u,l-u),E.lineTo(s+u,l+u),E.moveTo(s+u,l-u),E.lineTo(s-u,l+u),E.stroke(),E.strokeStyle="#ff4040",E.lineWidth=2,E.stroke(),E.globalAlpha=1}else if(t.type==="spark"){const[s,l]=C(t.x,t.y,.45),u=(t.big?16:10)*(1-r);oe(!0),E.fillStyle=t.col,E.fillRect(s-u,l-1,u*2,3),E.fillRect(s-1,l-u,3,u*2),E.fillRect(s-u*.5,l-u*.5,u,u),oe(!1)}else if(t.type==="jaws"){const[s,l]=C(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));E.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",E.lineWidth=5,E.beginPath(),E.arc(s,l-u,24,.2,Math.PI-.2),E.stroke(),E.beginPath(),E.arc(s,l+u,24,Math.PI+.2,-.2),E.stroke()}else if(t.type==="pingmark"){const[s,l]=C(t.x,t.y,.9+Math.sin(e*6)*.05);I1(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),E.beginPath(),E.moveTo(s,l+14),E.lineTo(s-9,l-2),E.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),E.closePath(),E.fill(),E.stroke(),E.fillStyle="#120c1a",E.font="bold 13px sans-serif",E.textAlign="center",E.textBaseline="middle",E.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",s,l-6),E.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=C(t.x,t.y,.5+r*2);oe(!0),E.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",E.beginPath(),E.arc(s+Math.sin(r*12)*6,l,7,0,7),E.fill(),oe(!1)}}}function I1(e,t){E.globalAlpha=t,E.fillStyle=e,E.strokeStyle="#120c1a",E.lineWidth=2}function z1(){const{HW:e,HH:t,OX:n,ZK:r}=j;for(const o of sr){if(o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r;E.globalAlpha=Math.min(1,o.life/o.max*1.5),E.fillStyle=o.col,E.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}E.globalAlpha=1,oe(!0);for(const o of sr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r,s=Math.min(1,o.life/o.max*1.5);E.globalAlpha=s*.35,E.fillStyle=o.col,E.fillRect(Math.round(i-o.size),Math.round(a-o.size),o.size*2,o.size*2),E.globalAlpha=s,E.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}E.globalAlpha=1,oe(!1)}function O1(){const e=M.T,{HW:t,HH:n,OX:r,ZK:o}=j;for(const i of vn){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;E.fillStyle="#00000040",E.fillRect(a-l/2+2,s+2,l,3),E.fillStyle=i.col,E.fillRect(a-l/2,s,l,3)}oe(!0);for(const i of vn){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);E.fillStyle=`rgba(210,255,120,${.25*l})`,E.fillRect(a-3,s-3,6,6),E.fillStyle=`rgba(250,255,200,${.9*l})`,E.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));E.fillStyle=`rgba(255,255,255,${.7*l})`,E.fillRect(a-1,s,3,1),E.fillRect(a,s-1,1,3)}}oe(!1)}function F1(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function E1(){const{HW:e,HH:t}=j,n=M.T;for(const r of M.game.projs){const o=r.z||.45,[i,a]=C(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=F1(r.look||r.fx),u=l?Se[l]:void 0;if(u){E.save();try{u(E,r,i,a,s,n)}catch(c){console.error(c)}E.restore(),oe(!1);continue}const f=yr[r.fx]||yr.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;E.save(),E.translate(i,a),E.rotate(s),E.fillStyle="#3a2a1a",E.fillRect(-c,-2,c,4),E.fillStyle="#e8d8b0",E.fillRect(-c,-1,c,2),E.fillStyle="#ffffff",E.beginPath(),E.moveTo(5,0),E.lineTo(-2,-4),E.lineTo(-2,4),E.fill(),E.fillStyle="#e05050",E.fillRect(-c-3,-3,5,2),E.fillRect(-c-3,1,5,2),E.restore(),r.skill&&P(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")E.save(),E.translate(i,a),E.rotate(n*25),E.fillStyle="#1a1020",E.fillRect(-9,-3,18,6),E.fillStyle="#e0e8f0",E.fillRect(-8,-2,14,4),E.fillStyle="#c8a040",E.fillRect(-10,-3,4,6),E.restore();else if(r.fx==="root")E.fillStyle="#5a3a20",E.beginPath(),E.arc(i,a,7,0,7),E.fill(),E.fillStyle="#8ad050",E.beginPath(),E.arc(i+3,a-3,4,0,7),E.fill(),P(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;oe(!0);const h=E.createRadialGradient(i,a,0,i,a,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),E.fillStyle=h,E.fillRect(i-c*2.4,a-c*2.4,c*4.8,c*4.8),oe(!1),E.fillStyle=f[0],E.fillRect(i-3,a-3,6,6),Math.random()<.8&&P(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const vr=Math.round,ks=Math.PI*2,Vn=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(vr(t-r/2),vr(n-r/2),r,r)},d0=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);K.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];A({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ft(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,.9),f=Math.min(1,r*3),c=r>.7?1-(r-.7)/.3:1;n.globalAlpha=c;for(const h of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+h*(.35+d*.22*f),y=(26+d*7)*f;for(let g=0;g<y;g+=3){const x=g/Math.max(1,y),b=Math.sin(M.T*18+d+g*.3)*2;Vn(n,l+Math.cos(m)*g+b*h,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let h=0;h<14;h++){const d=h/14*ks+r*9,m=18+h%3*6,y=-r*70-h*3;Vn(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+y,3,t[h%4])}}});for(let n=0;n<40;n++){const r=Math.random()*ks,o=p(1,3.5);P(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,p(2,5),p(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}tt(d0(e)?9:3)};K.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];A({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ft(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,1.6),f=Math.min(1,r*2.5),c=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*c;const h=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((b,v)=>{b!=="."&&Vn(n,d+(v-7)*h,m+(x-5)*h,h,b==="N"?t[4]:b==="o"?t[0]:t[1+(v+x)%2])})),r>.15&&r<.6)for(let g=0;g<3;g++){const x=40+((r-.15)*300+g*22)%90;for(let b=-.9;b<=.9;b+=.12)Vn(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),A({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ft(o.uid),[a,s]=C(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const c=f/l*ks,h=(1-u)*120+30,d=a+Math.cos(c)*h,m=s+Math.sin(c)*h*.5;n.fillStyle=t[3],n.fillRect(vr(d-6),vr(m-4),12,8),n.fillStyle=t[1],n.fillRect(vr(d-5),vr(m-3),10,3),n.fillStyle=t[0],n.fillRect(vr(d-1),vr(m-1),2,2)}}}),tt(d0(e)?10:4)};K.erizo_Q_hit=e=>{A({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)Vn(t,o+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,Vn(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)P(e.x,e.y,.5,p(-2,2),p(-2,2),p(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};K.polilla_Q_hit=e=>{A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<ks-.4;l+=.18)Vn(t,o+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=o+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)Vn(t,s+f*u,l,u,"#fff6c8"),Vn(t,s+f*u,l+3*u,u,"#fff6c8"),Vn(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)P(e.x,e.y,.6,p(-1,1),p(-1,1),p(.5,1.5),p(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const q=Math.round,Ae=Math.PI*2;let kt=0,Ft=0;function xe(e,t,n=0){kt=(e-t)*j.HW+j.OX,Ft=(e+t)*j.HH-n*j.ZK}function ze(e,t,n,r,o){e.fillStyle=o,e.fillRect(q(t-r/2),q(n-r/2),r,r)}function ml(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(q(t+(r-t)*l/s-i/2),q(n+(o-n)*l/s-i/2),i,i)}function Bo(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(q(t-a/2),q(n+i*o),q(a),Math.max(1,q(2*o)))}}function Co(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let a=-r;a<r;a+=2){const s=Math.abs(a+1),l=s<=r/2?r*.866:r*.866*(r-s)/(r/2);l<.5||n+a<i||e.fillRect(q(t-l),q(n+a),q(l*2),2)}}function k1(e,t,n,r,o){e.fillStyle=o,e.fillRect(q(t-r),q(n-1),r*2,2),e.fillRect(q(t-1),q(n-r),2,r*2)}function pl(e,t,n){e.fillStyle=J.l,e.fillRect(q(t-1),q(n-4),2,2),e.fillStyle=J.o,e.fillRect(q(t-2),q(n-2),4,4),e.fillStyle=J.w,e.fillRect(q(t-1),q(n-2),2,2)}const jn=e=>e<0?0:e>1?1:e,ro=e=>1-(1-e)*(1-e),J={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},To="#2a1e14",U1="#eaf8ff",L1="#b8e0ff",Us="#ff9ac8",mu="#9a5ad8",D1="#9a7a48";function m0(e,t,n,r,o){const i=M.game;if(!i)return null;let a=null,s=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function X1(e,t,n,r,o){e.fillStyle=o?U1:L1,o?(e.fillRect(q(t-3*r-2),q(n-9),4,5),e.fillRect(q(t+1*r-1),q(n-8),3,4)):(e.fillRect(q(t-5*r-2),q(n-5),5,3),e.fillRect(q(t+2*r-2),q(n-5),4,3)),e.fillStyle=J.y,e.fillRect(q(t-5),q(n-3),10,6),e.fillStyle=To,e.fillRect(q(t-2*r-1),q(n-3),2,6),e.fillRect(q(t+1*r),q(n-3),2,6),e.fillRect(q(t+5*r-(r>0?1:2)),q(n-2),3,4),e.fillRect(q(t-6*r-1),q(n-1),2,2)}K.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;A({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,a){xe(r,o,.6);const s=26*(1-ro(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*Ae+a*3;ze(i,kt+Math.cos(u)*s,Ft+Math.sin(u)*s*.6,3,l&1?To:J.y)}a>.6&&(i.fillStyle=mu,i.fillRect(q(kt-2),q(Ft-2),4,4))}});for(let i=0;i<6;i++)P(r,o,.6,t*p(1,3)+p(-.6,.6),n*p(1,3)+p(-.6,.6),p(0,.6),.3,i&1?J.y:J.l,2,0,!0)};Se.abeja_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=i*30|0;for(let c=3;c<17;c++){const h=c*3.5,d=(c+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-c/17,e.fillStyle=c&1?J.l:J.y,e.fillRect(q(n-a*h+l*m*5),q(r-s*h+u*m*5),2,2)}e.globalAlpha=1;for(let c=0;c<=14;c++){const h=n+a*(8-c)*1.6,d=r+s*(8-c)*1.6;if(c<=1)ze(e,h,d,2,J.w);else if(c<=8)ze(e,h,d,2,J.b),(c===4||c===7)&&(ze(e,h-a*2+l*2,d-s*2+u*2,2,J.b),ze(e,h-a*2-l*2,d-s*2-u*2,2,J.b));else{const m=c-9>>1&1?To:J.y,y=c===9||c===14?1:2;for(let g=-y;g<=y;g++)ze(e,h+l*g*2,d+u*g*2,2,m)}}f&2&&ze(e,n+a*15,r+s*15+2,2,mu)};K.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=ft(e.uid),o=m0(t,n,r?r.team:void 0,!1,.9);A({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,a,s){const l=s.vid?ft(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}xe(l?l.x:t,l?l.y:n,1.5);const f=kt,c=Ft,h=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=q(11*h);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Co(i,f,c,d,J.d),Co(i,f,c,d-2,J.y),Co(i,f,c,d-2,J.o,c+d*.35),i.fillStyle=J.w,i.fillRect(q(f-d*.5),q(c-d*.5),3,2),ml(i,f-4,c-4,f+4,c+4,2,To),ml(i,f+4,c-4,f-4,c+4,2,To);for(let m=0;m<2;m++){const y=(u*1.6+m*.5)%1,g=d+4+(1-y)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*y;for(const x of[-1,1])for(let b=-2;b<=2;b++){const v=(x>0?0:Math.PI)+b*.28;ze(i,f+Math.cos(v)*g,c+Math.sin(v)*g,2,J.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,pl(i,f-4,c+d+m*22),pl(i,f+3,c+d+m*14)}}});for(let i=0;i<8;i++)P(t,n,.5,p(-2,2),p(-2,2),p(.6,1.8),p(.3,.5),i&1?To:J.y,2,6,!1,.9);for(let i=0;i<4;i++)P(t,n,.6,p(-.8,.8),p(-.8,.8),p(1,2),.5,mu,3,5,!0);tt(2)};K.abeja_W=e=>{if(e.type==="heal"){G1(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(r-.3)*ro(jn(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*Ae,f=s*(1+Math.sin(u*6+a*9+o)*.045);xe(t+Math.cos(u)*f,n+Math.sin(u)*f),ze(i,kt,Ft,5,J.o),ze(i,kt,Ft-2,3,J.l),l%4===0&&(i.fillStyle=J.d,i.fillRect(q(kt-1),q(Ft+2),2,q(2+6*a)))}}}),A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=jn(a/.6);for(let l=0;l<8;l++){const u=l/8*Ae+o,f=r*(.6+.3*at(o+l))*s;xe(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,pl(i,kt,Ft)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=J.o,i.fillRect(q(kt-5),q(Ft-1),10,2),i.fillStyle=J.l,i.fillRect(q(kt-2),q(Ft-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*Ae;P(t,n,.8,Math.cos(a)*p(.5,2),Math.sin(a)*p(.5,2),p(.5,1.5),p(.5,.9),i%3?J.l:J.w,2,-.5,!0)}};function G1(e){const t=e.x,n=e.y,r=m0(t,n,e.team,!0,.6);A({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,a){const s=a.vid?ft(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;xe(l,u,.55);const c=kt,h=Ft;xe(l,u,2.6);const d=Ft,m=h-d;if(f>.15){xe(l,u);const x=jn((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=J.o,Bo(o,kt,Ft,q(16*x),.45),o.fillStyle=J.l,o.fillRect(q(kt-6*x),q(Ft-3),q(6*x),2)}const y=jn(f/.15)*m,g=f>.45?jn((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=q(g);x<y;x+=3){const b=x/m*(x/m),v=Math.sin(x*.22-M.T*9)*6*b;o.fillStyle=J.o,o.fillRect(q(c+v-2),q(d+x),4,3),o.fillStyle=J.l,o.fillRect(q(c+v-2),q(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,k1(o,c+(x-1)*12,h-10-b*30,4,x&1?J.y:J.l))}}});for(let o=0;o<5;o++)P(t,n,.4,p(-.5,.5),p(-.5,.5),p(.8,1.6),p(.6,.9),o&1?J.l:J.w,2,-.5,!0)}const ei=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];K.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*Ae+r);A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,c=ro(jn(f/.25)),h=f>1.15?jn((f-1.15)/.5):0;xe(t,n,.55*c-h*.4);const d=kt,m=Ft;l.globalAlpha=1-h;for(let y=0;y<ei.length;y++){const g=d+ei[y][0],x=m+ei[y][1]*c,b=8;Co(l,g,x,b,J.d),Co(l,g,x,b-2,J.cell);const v=jn((f-.08-y*.04)/.3),S=a.indexOf(y)>=0&&f>o;!S&&v>0&&(Co(l,g,x,b-2,J.o,x+(b-2)-v*2*(b-2)),l.fillStyle=J.l,l.fillRect(q(g-3),q(x-3),2,2)),!S&&f>.4&&a.indexOf(y)>=0&&(l.fillStyle=J.y,l.fillRect(q(g-4),q(x-1),8,3))}}}),A({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){xe(t,n,.55);const f=kt,c=Ft,h=(M.T*30|0)&1;for(let d=0;d<3;d++){const m=f+ei[a[d]][0],y=c+ei[a[d]][1];xe(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const g=kt,x=Ft,b=w=>{const R=Math.sin(w*Math.PI);return[m+(g-m)*w+Math.cos(w*Ae*1.5+d)*12*R,y+(x-y)*w+Math.sin(w*Ae*1.5+d)*8*R-R*18]},v=ro(u);for(let w=1;w<7;w++){const R=v-w*.04;if(R<0)break;const T=b(R);l.globalAlpha=(1-w/7)*.8,l.fillStyle=J.l,l.fillRect(q(T[0]),q(T[1]),2,2)}const S=b(v),_=b(Math.max(0,v-.02));l.globalAlpha=u>.8?(1-u)/.2:1,X1(l,S[0],S[1],S[0]>=_[0]?1:-1,!!h)}}}),A({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<9;c++)P(t,n,.6,p(-1.2,1.2),p(-1.2,1.2),p(1,2),p(.4,.6),c%3?J.y:J.d,2,6,!1,.9)}}}),A({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<14;c++)P(t+p(-.3,.3),n+p(-.3,.3),p(.2,.7),p(-.6,.6),p(-.6,.6),p(0,.5),p(.5,.8),c%3?J.d:J.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)P(t,n,.1,p(-1.5,1.5),p(-1.5,1.5),p(.3,1),.5,"#c8a878",3,3,!1,.9);tt(2)};const Mi=new Map;K.abeja_R=e=>{e.type==="channel"?B1(e):e.type==="channel_tick"?N1(e):e.type==="channel_end"&&$1(e)};function B1(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1};Mi.size>16&&Mi.clear(),Mi.set(r,l);const u=c=>{if(l.endT<0&&M.mode!=="guest"&&c.t>.1){const d=ft(r);(!d||!d.channel)&&(l.endT=M.T)}if(l.endT<0)return 1;const h=1-(M.T-l.endT)/.35;return h<=0?(c.t=c.dur+1,0):h};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i,g=ro(jn(y/.4)),x=s+y*.3;c.globalAlpha=m;for(let b=0;b<8;b++){const v=x+b/8*Ae,S=Math.cos(v),_=Math.sin(v);for(let w=0;w<10;w++){const R=w/9,T=(.15+R*.95)*g,k=Math.sin(R*Math.PI)*.24*g;for(let F=-1;F<=1;F++)xe(t+S*T-_*k*F,n+_*T+S*k*F),ze(c,kt,Ft,6,F===0&&R<.8?J.l:R>.85?J.d:J.y)}}xe(t,n),c.fillStyle=J.o,Bo(c,kt,Ft,q(12*g),.5),c.fillStyle=Us,Bo(c,kt,Ft,q(6*g),.5)}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i,g=ro(jn(y/.5)),x=y*.25;c.globalAlpha=.55*m;for(let b=0;b<56;b++){const v=b/56*Ae+x;xe(t+Math.cos(v)*o,n+Math.sin(v)*o),ze(c,kt,Ft,b&1?2:3,b&1?J.l:J.y)}c.globalAlpha=.28*m;for(let b=0;b<6;b++){const v=b/6*Ae+x;for(let S=1;S<12;S++){const _=S/12*(Math.PI/2),w=Math.cos(_)*o;xe(t+Math.cos(v)*w,n+Math.sin(v)*w,Math.sin(_)*a*g),ze(c,kt,Ft,2,J.l)}}for(let b=0;b<32;b++){const v=b/32*Ae-x,S=Math.cos(Math.PI/4)*o;xe(t+Math.cos(v)*S,n+Math.sin(v)*S,Math.sin(Math.PI/4)*a*g),ze(c,kt,Ft,2,J.y)}c.globalAlpha=m;for(let b=0;b<6;b++){const v=M.T*2.4+b/6*Ae;xe(t+Math.cos(v)*.7,n+Math.sin(v)*.7,.9+Math.sin(M.T*4+b)*.2),ze(c,kt,Ft,2,b&1?J.w:Us)}}});const f=26;A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const y=h*i;if(!(y<.3)){c.globalAlpha=m;for(let g=0;g<f;g++){const b=at(g*3.7+s)*.65,v=Math.floor((y+b)/.65),S=(y+b)%.65/.65,_=at(g*13.1+v)*Ae,w=Math.sqrt(at(g*5.3+v*1.7))*o*.9,R=t+Math.cos(_)*w,T=n+Math.sin(_)*w;if(S<.85)xe(R,T,a*.95*(1-S/.85)),c.fillStyle=J.o,c.fillRect(q(kt-1),q(Ft-2),2,4),c.fillStyle=J.l,c.fillRect(q(kt-1),q(Ft-4),2,2);else{xe(R,T);const k=(S-.85)/.15;c.fillStyle=J.o,c.fillRect(q(kt-2-k*4),q(Ft),3,2),c.fillRect(q(kt+k*4),q(Ft),3,2)}}}}})}function N1(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;A({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(r-.4)*ro(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const c=f/6*Ae+Math.PI/6,h=(f+1)/6*Ae+Math.PI/6;xe(t+Math.cos(c)*u,n+Math.sin(c)*u);const d=kt,m=Ft;xe(t+Math.cos(h)*u,n+Math.sin(h)*u),ml(s,d,m,kt,Ft,3,f&1?J.y:J.l)}}});const i=M.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>r*r)){if(s.team===o){if(s.kind==="hero")for(let l=0;l<2;l++)P(s.x+p(-.3,.3),s.y+p(-.3,.3),.5,0,0,p(1,1.6),.6,l?J.l:J.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;A({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,c){xe(l,u),f.globalAlpha=.8*(1-c),f.fillStyle=J.d,Bo(f,kt,Ft,13,.45),f.fillStyle=J.o,Bo(f,kt-2,Ft-1,9,.45),f.fillStyle=J.l,f.fillRect(q(kt-5),q(Ft-3),3,2),f.fillRect(q(kt-8),q(Ft-10+c*8),2,q(8-c*6)),f.fillRect(q(kt+7),q(Ft-8+c*6),2,q(6-c*4))}})}}}function $1(e){const t=Mi.get(e.uid);t&&t.endT<0&&(t.endT=M.T),Mi.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*Ae;P(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*p(2,3.5),Math.sin(i)*p(2,3.5),p(1.5,3),p(.6,.9),o&1?J.y:J.l,4,3,!0,.93)}for(let o=0;o<12;o++)P(n,r,.8,p(-1,1),p(-1,1),p(1,2.5),p(.5,.9),o&1?Us:J.w,2,0,!0);A({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){xe(n,r),o.globalAlpha=1-i,o.fillStyle=J.l,Bo(o,kt,Ft,q(20+i*90),.5)}}),tt(3)}else{for(let o=0;o<10;o++){const i=o/10*Ae;P(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,p(.2,.6),p(.7,1),o&1?D1:J.d,4,1.5,!1,.9)}ct.sfx("deny",n,r,.35)}}Se.abeja_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const y=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?J.l:J.y,e.fillRect(q(n-a*y+l*g-1),q(r-s*y+u*g-1),2,2)}e.globalAlpha=1;const c=Math.sin(i*20+f)*3,h=n+l*c,d=r+u*c;for(let m=0;m<8;m++){const y=m/8*Ae+i*6;ze(e,h+Math.cos(y)*5,d+Math.sin(y)*5,2,J.o)}e.fillStyle=J.y,e.fillRect(q(h-3),q(d-3),6,6),e.fillStyle=J.w,e.fillRect(q(h-2),q(d-2),2,2)};Me.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Ae;A({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,a){xe(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(r?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const c=o+f/5*Ae;ze(i,kt+Math.cos(c)*l,Ft+Math.sin(c)*l*.8,r?5:4,f&1?J.l:J.y)}ze(i,kt,Ft,r?5:4,r?Us:J.o);const u=6+a*(r?26:18);for(let f=0;f<10;f++){const c=o+f/10*Ae;ze(i,kt+Math.cos(c)*u,Ft+Math.sin(c)*u*.5+6,2,J.l)}}});for(let i=0;i<(r?8:4);i++)P(t,n,.5,p(-1,1),p(-1,1),p(.3,1.2),.4,i&1?J.y:J.w,2,2,!0)};const Et=Math.round,rt={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function An(e,t,n,r,o){e.fillStyle=o,e.fillRect(Et(t-r/2),Et(n-r/2),r,r)}const W1=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,Fa={};function H1(e){if(Fa[e])return Fa[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return Fa[e]=t}function No(e,t,n,r,o,i,a,s=1,l=1,u=!1){const f=H1(r);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];e.fillStyle=h+d>r*.6?a:i,e.fillRect(Et(t+h*o*s-o/2),Et(n+d*o*l-o/2),o,o)}u||(e.fillStyle=rt.white,e.fillRect(Et(t-r*o*.45*s-o/2),Et(n-r*o*.5*l-o/2),o,o))}function V1(e,t,n,r,o,i,a=1,s=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(Et(t-u*o*a),Et(n+l*o*s-o/2),Et(u*2*o*a),o)}}function q1(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const mf=["#.#","###",".#.",".#."];function Y1(e,t){A({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+Et(r*5);n.globalAlpha=1-r,No(n,o,i,a,2,rt.pink1,rt.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;An(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?rt.white:rt.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=p(0,6.283),o=p(1,2.5);P(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,p(1,2.5),.4,n<3?rt.water:rt.pink1,2,8,!1)}for(let n=0;n<3;n++)P(e,t,.5,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3),.5,n%2?rt.coral:rt.orange,3,10,!1)}K.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,c]=C(t,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=s+(h-1)*.5,m=10+u*(22+h*6);No(l,f+Math.cos(d)*m,c+Math.sin(d)*m-u*8,1+h%2,2,rt.pink2,rt.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)P(t+r*.4,n+o*.4,.5,r*p(1,2.5)+p(-.5,.5),o*p(1,2.5)+p(-.5,.5),p(.5,1.5),.35,l%2?rt.water:rt.pink1,2,6,!1);return!0};Se.ajolote_Q=(e,t,n,r,o,i)=>{q1(t,Y1);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,V1(e,n,r,6,2,rt.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<mf.length;h++)for(let d=0;d<3;d++)mf[h][u?2-d:d]==="#"&&An(e,n-2+d*2,r-3+h*2,2,h<1?rt.orange:rt.coral);No(e,n,r,6,2,rt.pink2,rt.coral2,s,l);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,m=Math.sin(i*12+h*2)*3;No(e,n-f*d-c*m,r-c*d+f*m,2-(h>>1),2,rt.pink1,rt.pink2)}Math.random()<.35&&P(t.x,t.y,(t.z||.45)+.05,p(-.2,.2),p(-.2,.2),.6,.45,rt.pink1,2,-.5,!1)};function K1(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return A({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[a,s]=C(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=a+n[l][0],h=s+n[l][1]-u*6;if(u<f)No(r,c,h,2,2,rt.pink2,rt.coral);else if(u<f+.3){const d=(u-f)/.3,m=Et(h-d*14),y=Et(c);r.globalAlpha=1-d,r.fillStyle=rt.pink1,r.fillRect(y-4,m-1,8,2),r.fillRect(y-1,m-4,2,8),r.fillStyle=rt.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(y+g*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}K.ajolote_W=e=>{if(e.type==="heal")return K1(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,a=[-.55,-.15,.25];A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const c=ft(o),[h,d]=C(c?c.x:t,c?c.y:n,.85),m=Math.min(1,f*5),y=f>.6?(1-f)/.4:1;u.globalAlpha=y;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const b=g>0?a[x]:Math.PI-a[x],v=Math.sin(f*16+x*1.3)*.12,S=b+v*g,_=Math.cos(S),w=Math.sin(S),R=Et(22*m)-(x===1?0:4);for(let T=6;T<=R;T+=2)An(u,h+_*T,d+w*T,2,T>R-2?rt.pink1:rt.gill),T%4===0&&T>8&&(An(u,h+_*T-w*3,d+w*T+_*3,2,rt.pink2),An(u,h+_*T+w*3,d+w*T-_*3,2,rt.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+p(-.12,.12));A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let c=0;c<s.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),m=Et(d*3)*2,[y,g]=C(t+Math.cos(s[c])*r,n+Math.sin(s[c])*r),x=Et(y),b=Et(g);u.fillStyle=rt.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=rt.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=rt.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=p(0,6.283),c=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:p(0,.35),pop:p(.4,.9),ph:p(0,6.283),done:!1})}return A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[m,y]=C(h.x,h.y,.1+Math.min(d,h.pop)*.9),g=m+Math.sin(d*9+h.ph)*3;if(d<h.pop){No(u,g,y,h.n,2,rt.pink2,rt.coral);continue}h.done||(h.done=!0,P(h.x,h.y,.1+h.pop*.9,p(-.5,.5),p(-.5,.5),.8,.5,rt.pink1,2,0,!0),P(h.x,h.y,.1+h.pop*.9,p(-.5,.5),p(-.5,.5),.5,.4,rt.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=h.n*2+2+x*6;for(const[v,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])An(u,g+v*b,y+S*b,2,rt.pink1);u.globalAlpha=1}}}),!0};function j1(e,t,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)An(e,t-r*s,n-o*s,2,s>18?rt.coral2:rt.orange);for(let s=-6;s<=6;s+=2)An(e,t+i*s,n+a*s,2,rt.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)An(e,t+i*s+r*u,n+a*s+o*u,2,u>=l-1?rt.white:rt.pink1)}}K.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(r-t,o-n),l=(r-t)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,m=c/h,y=Math.max(2,Math.ceil(s/.1)),g={n:0,end:!1};return A({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const v=b*a,S=Math.min(1,v/i);for(let _=0;_<=y*S;_++){const w=_/y,R=v-w*i,T=Math.max(0,1-R/.55);if(T<=0)continue;const[k,F]=C(t+(r-t)*w,n+(o-n)*w),U=F+Math.sin(w*14-v*25)*2,B=Et(4+6*w);x.globalAlpha=T,x.fillStyle=rt.pink2,x.fillRect(Et(k)-B,Et(U)-3,B*2,1),x.fillRect(Et(k)-B,Et(U)+2,B*2,1),x.fillStyle=rt.water,x.fillRect(Et(k)-B,Et(U)-2,B*2,4),_%3===0&&(x.fillStyle=rt.white,x.fillRect(Et(k)-1,Et(U)-1,3,2))}if(x.globalAlpha=1,S<1&&g.n<22)for(let _=0;_<2;_++){g.n++;const w=t+(r-t)*S,R=n+(o-n)*S;P(w,R,.2,-l*p(.5,1.5)+p(-.8,.8),-u*p(.5,1.5)+p(-.8,.8),p(1,2.5),.45,_?rt.water:rt.pink1,2,8,!1)}if(!g.end&&S>=1){g.end=!0;for(let _=0;_<10;_++)P(r+l*.4,o+u*.4,.4,l*p(1.5,3.5)+p(-.8,.8),u*p(1.5,3.5)+p(-.8,.8),p(1,3),.5,_%2?rt.water:rt.white,2,9,!1);tt(4)}}}),A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const v=b*(i+.25),S=Math.min(1,v/i),[_,w]=C(t+(r-t)*S,n+(o-n)*S,.5);if(x.globalAlpha=S<1?1:Math.max(0,1-(v-i)/.25),j1(x,_+d*10,w+m*10,d,m),S>=1){const R=(v-i)/.25,T=6+R*30;for(const k of[-6,0,6])for(let F=12;F<12+T;F+=2)An(x,_+d*(10+F)-m*k,w+m*(10+F)+d*k,2,F>8+T?rt.pink1:rt.white)}x.globalAlpha=1}}),!0};function Q1(e,t,n,r,o){const i=Et(t),a=Et(n),s=(at(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=Et(u*s),c=u<r*.5?6:4;e.fillStyle=rt.coral,e.fillRect(i+f-c/2,a-u-2,c,2),e.fillStyle=rt.deep,e.fillRect(i+f+c/2-2,a-u-2,2,2)}const l=at(o+3)<.5?-1:1;for(const[u,f,c]of[[.35+at(o+1)*.15,.38,l],[.58+at(o+2)*.12,.28,-l]]){const h=r*u,d=i+Et(h*s),m=r*f;let y=d,g=a-h;for(let x=0;x<m;x+=2)y=d+c*(3+x*.7),g=a-h-x,e.fillStyle=rt.coral2,e.fillRect(Et(y)-2,Et(g)-2,4,2);e.fillStyle=rt.pink1,e.fillRect(Et(y)-2,Et(g)-4,4,2)}e.fillStyle=rt.pink1,e.fillRect(i+Et(r*s)-2,a-r-3,4,3)}K.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+s*.4+p(-.15,.15);i.push({x:t+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+s*.13+p(0,.05),H:p(24,40)*(s?1:.85),seed:p(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=C(f.x,f.y);s.fillStyle=rt.hole,s.fillRect(Et(c)-6,Et(h)-2,12,4),s.fillRect(Et(c)-3,Et(h)-3,6,6)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=W1(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const m=d/18,y=u+m*1.9,[g,x]=C(t+Math.cos(y)*h,n+Math.sin(y)*h,.45);s.globalAlpha=f*(1-m),An(s,g,x,m<.15?3:2,m<.15?rt.white:c===1?rt.pink2:rt.water)}}s.globalAlpha=1}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,P(f.x,f.y,.1,p(-1,1),p(-1,1),p(2,3.5),.5,Math.random()<.5?rt.coral:rt.orange,3,10,!1),P(f.x,f.y,.1,p(-1,1),p(-1,1),p(2,4),.45,rt.water,2,10,!1));const c=a(f,u);if(c<2)continue;const[h,d]=C(f.x,f.y);Q1(s,h,d,Et(c/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=p(0,6.283),u=p(2,5);P(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,p(3,6),p(.7,1),[rt.water,rt.pink1,rt.white,rt.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return tt(9),!0};Me.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=ft(e.uid);let i=1,a=0;if(o){const d=t-o.x,m=n-o.y,y=Math.hypot(d,m);y>.05&&(i=d/y,a=m/y)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,c=l/u;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[y,g]=C(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let v=-x/2;v<=x/2;v+=2)An(d,y+f*v-c*b,g+c*v+f*b,2,v>x/2-4?rt.white:rt.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)P(t,n,.45,i*p(.5,2)+p(-.7,.7),a*p(.5,2)+p(-.7,.7),p(1,2.5),.35,d%2?rt.pink1:rt.water,2,8,!1)};const It=Math.round,dt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function an(e,t,n,r,o){e.fillStyle=o,e.fillRect(It(t-r/2),It(n-r/2),r,r)}const yl=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Ls(e,t,n,r,o,i,a){const s=t.length,l=t[0].length,u=It(n-l*o/2),f=It(r-s*i/2);for(let c=0;c<s;c++)for(let h=0;h<l;h++){const d=a[t[c][h]];d&&(e.fillStyle=d,e.fillRect(u+h*o,f+c*i,o,i))}}function ta(e,t,n,r,o,i,a,s,l,u){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,m=t-r*h,y=n-o*h,g=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const b=x>g-2?s:l,v=x*.5;((h>>1)+(x>>1))%4!==3&&an(e,m+f*x-r*v,y+c*x-o*v,2,b),((h>>1)+(x>>1)+2)%4!==3&&an(e,m-f*x-r*v,y-c*x-o*v,2,b)}an(e,m,y,2,u)}}function Ds(e,t,n,r,o,i,a){const s=It(t),l=It(n);for(let u=0;u<r;u+=2){const f=Math.max(2,It(o*(1-u/r)/2)*2),c=It(u*i),h=a<0?l-u-2:l+u;e.fillStyle=dt.ice3,e.fillRect(s+c-f/2,h,f,2),e.fillStyle=dt.ice1,e.fillRect(s+c-f/2,h,Math.max(1,f/2),2)}e.fillStyle=dt.snow,e.fillRect(s+It(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function p0(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function Z1(e,t){A({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=s%2?4:6;for(let h=0;h<c;h+=2)an(n,o+u*(a+h),i+f*(a+h),2,h>=c-2?dt.snow:dt.ice2)}if(r<.35){const s=It(10*(1-r/.35))+2;n.fillStyle=dt.snow,n.fillRect(It(o)-s/2,It(i)-s/2,s,s)}n.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;ta(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,dt.ice3,dt.ice1,dt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=p(0,6.283),o=p(1.2,3);P(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,p(.5,2),.4,n%2?dt.ice2:dt.ice3,2,6,!1)}}K.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,c]=C(t,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=s+(h-2)*.32,m=8+u*28,y=Math.cos(d),g=Math.sin(d);ta(l,f+y*m,c+g*m,y,g,10,3,dt.ice3,dt.ice1,dt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)P(t+r*.4,n+o*.4,.6,r*p(.5,1.5)+p(-.4,.4),o*p(.5,1.5)+p(-.4,.4),p(0,.6),.45,dt.snow,2,.5,!0);return!0};Se.buho_Q=(e,t,n,r,o,i)=>{p0(t,Z1);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;yt(!0);const c=$t();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,an(c,n-a*h*6,r-s*h*6,8-h,h<3?dt.ice2:dt.ice3);c.globalAlpha=1,yt(!1),ta(e,u,f,a,s,24,6,dt.ice3,dt.ice1,dt.snow),Math.random()<.55&&P(t.x,t.y,t.z||.45,p(-.3,.3),p(-.3,.3),p(-.2,.3),.5,Math.random()<.5?dt.snow:dt.ice1,2,0,!0)};const J1=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],t2=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];K.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=yl(l,.08,.75);gt(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(s,l){const u=yl(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let y=0;y<m;y++){if(y%5===4)continue;const g=y/m*6.283+(d===r?f:-f),[x,b]=C(t+Math.cos(g)*d,n+Math.sin(g)*d);an(s,x,b,2,dt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[y,g]=C(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,Ls(s,J1[d%4],y,g,2,2,{"#":dt.ice1})}const[c,h]=C(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),Ls(s,t2,c,h,3,2,{"#":dt.ice2,o:dt.amber,v:dt.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+p(-.3,.3),u=r*(.3+.55*Math.sqrt(at(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:p(16,28),lean:p(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,m]=C(c.x,c.y),y=c.h*h*(1-f);y<2||(Ds(s,d,m,y,8,c.lean,-1),Ds(s,d+c.side*6,m+2,y*.6,6,c.lean+c.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const c of i)for(let h=0;h<2;h++)P(c.x,c.y,.25,p(-1.5,1.5),p(-1.5,1.5),p(1,2.5),.45,h?dt.ice2:dt.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=p(0,6.283),u=p(0,r);P(t+Math.cos(l)*u,n+Math.sin(l)*u,p(.6,1.4),p(-.6,.6)+.8,p(-.6,.6)-.4,-.6,p(.6,1),Math.random()<.6?dt.snow:dt.ice1,2,-.5,!1,.98)}return!0};const y0=["......####","...#######","##########",".#########","..#.#.#.#."],e2=y0.map(e=>e.split("").reverse().join(""));K.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:p(-45,45),vy:p(-55,-15),ph:p(0,6.283),L:Math.random()<.4?12:9});A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=C(t,n,.6);a.globalAlpha=yl(s,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,m=f+c.vy*l+60*l*l,y=Math.PI/2+h*.9;ta(a,d+Math.cos(y)*c.L*.5,m+Math.sin(y)*c.L*.5,Math.cos(y),Math.sin(y),c.L,3,dt.ice3,dt.ice1,dt.snow)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=C(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=It(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=dt.ice1,a.fillRect(It(c)-d,It(h),d*2,1),a.fillRect(It(c),It(h)-d,1,d*2)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=C(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,Ls(a,y0,l+f+15,u-s*6,3,3,{"#":dt.ice1}),Ls(a,e2,l-f-15,u-s*6,3,3,{"#":dt.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)P(t+p(-.3,.3),n+p(-.3,.3),p(.3,.9),p(-.8,.8),p(-.8,.8),p(-.3,.4),p(.6,1),dt.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=p(0,6.283),l=p(1,2.5);P(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,p(0,1),.5,a%3?dt.ice1:dt.moon2,2,1,!0)}return!0};function pf(e,t,n,r,o,i,a){e.fillStyle=a;const s=It(t),l=It(n),u=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=u*u-f*f,d=-c,m=c;if(h<=0){e.fillRect(s+It(d),l+It(f*i),It(m-d),Math.max(1,It(2*i)));continue}const y=Math.sqrt(h),g=o-y,x=o+y;g>d&&e.fillRect(s+It(d),l+It(f*i),It(Math.min(m,g)-d),Math.max(1,It(2*i))),x<m&&e.fillRect(s+It(x),l+It(f*i),It(m-x),Math.max(1,It(2*i)))}}const ni=[];function yf(e,t,n){A({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=C(e+Math.cos(s)*i,t+Math.sin(s)*i);an(r,l,u,a%3?2:3,a%2?dt.ice2:dt.moon)}r.globalAlpha=1}}),A({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){gt(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),tt(9)}K.buho_R=e=>{if(e.type==="starfall"){const u=ni.findIndex(f=>Math.abs(f.x-e.x)<.3&&Math.abs(f.y-e.y)<.3);return u>=0?ni.splice(u,1):yf(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,a={x:t,y:n,t:0};ni.push(a),ni.length>6&&ni.shift(),A({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.15)*(c>o?Math.max(0,1-(c-o)/.6):1);u.globalAlpha=h;for(const[y,g,x]of[[r,56,1],[r*.9,48,-1]])for(let b=0;b<g;b++){if((b+(x>0?0:2))%4===3)continue;const v=b/g*6.283+c*.7*x,[S,_]=C(t+Math.cos(v)*y,n+Math.sin(v)*y);an(u,S,_,2,x>0?dt.moon2:dt.ice2)}for(let y=0;y<12;y++){const g=y/12*6.283-c*.35,[x,b]=C(t+Math.cos(g)*r*.62,n+Math.sin(g)*r*.62),[v,S]=C(t+Math.cos(g)*r*.82,n+Math.sin(g)*r*.82);for(let _=0;_<=4;_++)an(u,x+(v-x)*_/4,b+(S-b)*_/4,2,dt.moon)}const[d,m]=C(t,n);if(pf(u,d,m,30,12,.5,dt.moon),c>.45){const y=Math.min(1,(c-.45)/.1);u.globalAlpha=h*y,an(u,d-26,m-3,4,dt.amber),an(u,d+26,m-3,4,dt.amber)}u.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.2)*(c>o?Math.max(0,1-(c-o)/.5):1),[d,m]=C(t,n,4.4),y=u.createRadialGradient(d,m,4,d,m,60);y.addColorStop(0,`rgba(200,190,255,${.45*h})`),y.addColorStop(1,"rgba(120,110,220,0)"),u.fillStyle=y,u.fillRect(It(d)-60,It(m)-60,120,120),u.globalAlpha=h,pf(u,d,m,20,9,1,dt.moon),u.globalAlpha=1}});const s=[];for(let u=0;u<14;u++){const f=p(0,6.283),c=r*.85*Math.sqrt(Math.random());s.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,fall:o-.12+u*.025,ap:.08+u*.025,L:p(18,28),hit:!1})}s.sort((u,f)=>u.x+u.y-(f.x+f.y));const l={boom:!1};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of s){const d=(c-h.fall)/.12;if(d>=1){if(!h.hit){h.hit=!0;for(let v=0;v<3;v++)P(h.x,h.y,.1,p(-1.8,1.8),p(-1.8,1.8),p(1.5,3),.45,v?dt.ice2:dt.snow,2,10,!0)}const b=(c-h.fall-.12)/.2;if(b<1){const[v,S]=C(h.x,h.y),_=It(10*(1-b))+2;u.globalAlpha=1-b,u.fillStyle=dt.snow,u.fillRect(It(v)-_,It(S)-1,_*2,2),u.fillRect(It(v)-1,It(S)-_/2,2,_),u.globalAlpha=1}continue}const m=Math.min(1,Math.max(0,(c-h.ap)/.25));if(m<=0)continue;const y=d>0?3.6*(1-d*d):3.6+Math.sin(c*9+h.x)*.03,[g,x]=C(h.x,h.y,y);u.globalAlpha=m,d>0&&(u.fillStyle="rgba(226,247,255,0.5)",u.fillRect(It(g)-1,It(x)-h.L-30,2,28)),Ds(u,g,x-h.L,h.L,7,0,1),u.globalAlpha=1}!l.boom&&c>=o&&(l.boom=!0,a.t===0&&(a.t=1,yf(t,n,r)))}});for(let u=0;u<10;u++){const f=p(0,6.283),c=p(0,r);P(t+Math.cos(f)*c,n+Math.sin(f)*c,.05,0,0,p(1,2),.7,u%2?dt.moon2:dt.ice1,2,0,!0)}return!0};function g0(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:p(-9,9),oy:p(-3,4),h:p(8,n?16:12),lean:p(-.35,.35)});A({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=C(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)Ds(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=p(0,6.283),s=p(.8,2);P(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,p(.5,1.8),.35,i%2?dt.snow:dt.ice2,2,5,!0)}}const x0=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&x0.push([t,e,n>3.6?1:0])}Se.buho_A=(e,t,n,r,o,i)=>{p0(t,(h,d)=>g0(h,d,!1));const a=Math.cos(o),s=Math.sin(o);yt(!0);const l=$t();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,an(l,n-a*h*5,r-s*h*5,6-h,dt.moon2);l.globalAlpha=1,yt(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,m]of x0)an(e,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,m?dt.ice3:dt.ice1);an(e,n+-3*f*2,r+-3*c*2,2,dt.snow),Math.random()<.45&&P(t.x,t.y,t.z||.45,0,0,-.2,.35,dt.ice1,2,0,!0)};Me.buho=e=>g0(e.x,e.y,!!e.big);const vt=Math.round,He=Math.PI*2,gf=e=>e*j.HW*Math.SQRT2,xt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},hr=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],v0=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function Ve(e,t,n,r){r=Math.max(1,vt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(vt(t[0]+(n[0]-t[0])*s/i-a),vt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function gl(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(vt(t-l),vt(n+a),Math.max(1,vt(l*2)),i)}}function ri(e,t,n,r,o,i,a=0){for(let s=0;s<o;s++){const l=a+s/o*He;e.fillRect(vt(t+Math.cos(l)*r-i/2),vt(n+Math.sin(l)*r*.5-i/2),i,i)}}function n2(e,t,n,r){t=vt(t),n=vt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const r2=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));K.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:p(-14,14),c:l+s})}A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,c]=C(t,n,.5),h=M.T*12|0;for(const d of i){const m=u-d.t0,y=m>0?1-m/.4:1;if(y<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=c+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=y,s.fillStyle=hr[(d.c+h)%6],s.fillRect(vt(g)-2,vt(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,vt(Math.hypot(r-t,o-n)*2.4)));A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=C(t,n),f=C(r,o),c=f[0]-u[0],h=f[1]-u[1],d=Math.hypot(c,h)||1,m=-h/d,y=c/d;for(let g=0;g<=a;g++){const x=g/a,b=l*4-x;if(b<0)continue;const v=g%4===0,S=v?9:5,_=u[0]+c*x,w=u[1]+h*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=xt.ink,Ve(s,[_-m*S+1,w-y*S+1],[_+m*S+1,w+y*S+1],v?4:3),s.fillStyle=v?xt.gold:hr[(g+(M.T*10|0))%6],Ve(s,[_-m*S,w-y*S],[_+m*S,w+y*S],v?3:2)}}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[u,f]=C(r,o,.5),c=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*He,y=d%3===0?7:3;s.fillStyle=d%3===0?xt.gold:xt.face,Ve(s,[u+Math.cos(m)*c,f+Math.sin(m)*c*.8],[u+Math.cos(m)*(c-y),f+Math.sin(m)*(c-y)*.8],2)}const h=-Math.PI/2-l*He*1.5;s.fillStyle=xt.face,Ve(s,[u,f],[u+Math.cos(h)*(c-8),f+Math.sin(h)*(c-8)*.8],3),s.fillStyle=xt.gold,s.fillRect(vt(u)-2,vt(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*He;P(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,p(.5,1.5),.45,hr[s%6],3,2,!0,.9)}};K.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>C(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let c=a.length-1;c>=0;c--){const h=a[c],d=f-h.dl;if(d<0)continue;const m=Math.min(1,d/.3),y=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=h.al;for(let g=-1,x=0;g<=y;g+=.06,x++){const b=Math.max(0,1-(y-g)/.7),v=vt(3+6*b*h.sc),[S,_]=s(g,i*h.sc);l.fillStyle=xt.ink,l.fillRect(vt(S-v/2)+1,vt(_-v/2)+1,v,v),l.fillStyle=c===0?x%2?xt.gold:xt.face:hr[(c*2+x)%6],l.fillRect(vt(S-v/2),vt(_-v/2),v,v)}if(c===0){l.fillStyle=xt.gold;for(let g=-1;g<=y;g+=.2){const x=s(g,i*1.06),b=s(g,i*1.16);Ve(l,x,b,2)}}}}if(f>.28){const c=(f-.28)/.27,[h,d]=s(-1,i);l.globalAlpha=1-c;for(let m=0;m<16;m++){const y=m*.6-c*4,g=2+m*1.1;l.fillStyle=hr[m%6],l.fillRect(vt(h+Math.cos(y)*g)-1,vt(d+Math.sin(y)*g*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=p(-1,1),f=i*p(.3,1.1),c=r+u*o;P(t+Math.cos(c)*f,n+Math.sin(c)*f,p(.2,.9),p(-.15,.15),p(-.15,.15),p(0,.2),p(.8,1.3),l%3?xt.sand:xt.time,2,.15,!0,.99)}tt(v0(e)?3:1)};K.camaleon_E=e=>{const t=e.uid,n=e.dur||4;A({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=ft(t),[f,c]=C(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let h=0;h<8;h++){const d=h/8*He+.2,m=12+l*30;s.fillStyle=hr[h%6],Ve(s,[f+Math.cos(d)*m,c+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),c+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=ft(t);if(!f||f.dead){u.t=u.dur+1;return}if(M.T-o>.06){const h=r[r.length-1];(!h||Math.hypot(f.x-h.x,f.y-h.y)>.1)&&(r.push({x:f.x,y:f.y,t:M.T,c:i++}),r.length>8&&r.shift()),o=M.T}const c=l>.92?(1-l)/.08:1;for(const h of r){const d=1-(M.T-h.t)/.4;if(d<=0)continue;const[m,y]=C(h.x,h.y);s.globalAlpha=d*.65*c,s.fillStyle=hr[h.c%6];for(let g=0;g<a.length;g++)s.fillRect(vt(m-a[g]),vt(y-8-g*6),a[g]*2,3)}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=ft(t);if(!f||f.dead){u.t=u.dur+1;return}const[c,h]=C(f.x,f.y,1.05),d=c+24,m=h+Math.sin(M.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=xt.brassD,gl(s,d,m,9,9,1),s.fillStyle=xt.brass,s.fillRect(vt(d)-2,vt(m)-13,5,4),s.fillStyle=xt.face,gl(s,d,m,7,7,1),s.fillStyle=xt.ink,s.fillRect(vt(d)-1,vt(m)-7,2,2),s.fillRect(vt(d)+5,vt(m),2,2),s.fillRect(vt(d)-1,vt(m)+5,2,2),s.fillRect(vt(d)-7,vt(m),2,2);const y=M.T*14;s.fillStyle="#e03a4a",Ve(s,[d,m],[d+Math.cos(y)*6,m+Math.sin(y)*6],2)}})};function o2(e,t,n,r){t=vt(t),n=vt(n),e.fillStyle=xt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=xt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=vt(6-o*.5),a=vt(1+o*.5);e.fillStyle=xt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-a-1,n+1+o,1,1),e.fillRect(t+a+1,n+1+o,1,1),e.fillStyle=xt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-a,n+1+o,a*2+1,1)}r>.02&&r<.98&&(e.fillStyle=xt.sand,e.fillRect(t,n-1,1,12))}K.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=Array.from({length:26},(u,f)=>{const c=Math.random()*He,h=Math.sqrt(Math.random())*r*.85,d=Math.sqrt(Math.max(0,r*r-h*h))*.85;return{x:t+Math.cos(c)*h,y:n+Math.sin(c)*h,z:p(.15,Math.max(.2,d)),ph:Math.random()*He,s:f%4===0?4:2,col:[xt.glassL,xt.gold,xt.time,xt.teal][f%4]}}),a=Array.from({length:22},()=>{const u=Math.random()*He,f=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(u)*f,y:n+Math.sin(u)*f,z:p(.2,1.4)}}),s=u=>r2(u/.3),l=u=>Math.max(0,Math.min(1,(o-u)/.25));A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=s(c.t),[m,y]=C(t,n),g=gf(r)*d,x=c.t;u.globalAlpha=.28*h,u.fillStyle=xt.night,gl(u,m,y,g,g*.5,3),u.globalAlpha=.95*h,u.fillStyle=xt.gold,ri(u,m,y,g,96,3),u.fillStyle=xt.brass,ri(u,m,y,g*.94,72,2),u.fillStyle=xt.face,ri(u,m,y,g*.87,60,2);for(let R=0;R<12;R++){const T=R/12*He-Math.PI/2,k=R%3===0,F=[m+Math.cos(T)*g*.66,y+Math.sin(T)*g*.33],U=[m+Math.cos(T)*g*.8,y+Math.sin(T)*g*.4];u.fillStyle=xt.ink,Ve(u,[F[0]+1,F[1]+1],[U[0]+1,U[1]+1],k?6:4),u.fillStyle=k?xt.gold:xt.face,Ve(u,F,U,k?5:3)}for(let R=0;R<36;R++){const T=R/36*He-x*.6,k=g*(R%2?.5:.55);u.fillStyle=R%2?xt.brassD:xt.brass,u.fillRect(vt(m+Math.cos(T)*k)-2,vt(y+Math.sin(T)*k*.5)-1,5,3)}const b=-Math.PI/2-x*He/1.5,v=-Math.PI/2-x*He/12,S=[m+Math.cos(b)*g*.74,y+Math.sin(b)*g*.37],_=[m+Math.cos(v)*g*.45,y+Math.sin(v)*g*.225];u.fillStyle=xt.ink,Ve(u,[m+1,y+1],[S[0]+1,S[1]+1],6),Ve(u,[m+1,y+1],[_[0]+1,_[1]+1],8),u.fillStyle=xt.face,Ve(u,[m,y],S,4),u.fillStyle=xt.gold,Ve(u,[m,y],_,6),u.fillStyle="#e03a4a",u.fillRect(vt(m)-4,vt(y)-3,8,6),u.fillStyle=xt.gold,u.fillRect(vt(m)-2,vt(y)-2,4,4);const w=x%1;w<.3&&(u.globalAlpha=(1-w/.3)*h,u.fillStyle=xt.glassL,ri(u,m,y,g*(.87+w*.4),48,3))}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=s(c.t),m=r*d,y=M.T,g=(v,S,_,w,R,T,k)=>{const[F,U]=C(v,S,_);u.globalAlpha=h*(R?k:k*.35),u.fillStyle=T,u.fillRect(vt(F)-(w>>1),vt(U)-(w>>1),w,w)};for(const v of[0,.42,.85,1.25]){const S=m*Math.cos(v),_=m*Math.sin(v),w=v>1?22:48;for(let R=0;R<w;R++){const T=R/w*He+(v?y*.08:0);g(t+Math.cos(T)*S,n+Math.sin(T)*S,_,v?2:3,Math.cos(T)+Math.sin(T)>0,v?xt.glass:xt.time,v?.5:.9)}}for(let v=0;v<10;v++){const S=v/10*He-y*.35,_=Math.cos(S)+Math.sin(S)>0;for(let w=1;w<10;w++){const R=w/10*Math.PI/2;g(t+Math.cos(S)*m*Math.cos(R),n+Math.sin(S)*m*Math.cos(R),m*Math.sin(R),2,_,xt.glass,.4)}}for(let v=0;v<7;v++){const S=.6*Math.PI+v*.03,_=.5+v*.06;g(t+Math.cos(S)*m*Math.cos(_),n+Math.sin(S)*m*Math.cos(_),m*Math.sin(_),3,!0,xt.glassL,.8)}for(const v of i){const[S,_]=C(v.x,v.y,v.z*d),w=.5+.5*Math.sin(y*3+v.ph);u.globalAlpha=h*(.35+.65*w),u.fillStyle=v.col,n2(u,S,_,v.s+(w>.8?1:0))}u.fillStyle=xt.sand;for(const v of a){const[S,_]=C(v.x,v.y,v.z*d);u.globalAlpha=h*.8,u.fillRect(vt(S),vt(_),1,1)}const[x,b]=C(t,n,m+.3);if(u.globalAlpha=h,o2(u,x,b,Math.min(1,c.t/o)),c.t<.3){const v=c.t/.3,[S,_]=C(t,n);u.globalAlpha=1-v,u.fillStyle=xt.glassL,ri(u,S,_,gf(r)*(.3+v*.9),56,4)}if(f>.93&&!c.shatter){c.shatter=!0;for(let v=0;v<36;v++){const S=Math.random()*He,_=Math.random()*1.3,w=t+Math.cos(S)*r*Math.cos(_),R=n+Math.sin(S)*r*Math.cos(_);P(w,R,r*Math.sin(_),Math.cos(S)*p(.8,2),Math.sin(S)*p(.8,2),p(0,1.5),p(.5,.9),v%3?xt.glass:xt.glassL,v%4?2:3,9,!0,.96)}}}}),tt(v0(e)?6:3)};Me.camaleon=e=>{const t=e.x,n=e.y,r=p(-2.6,-.6),o=Math.random()*6|0;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=r-(1-u)*1.5,c=r+2.2-(1-u)*1.2;i.fillStyle=xt.ink,Ve(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=xt.face,Ve(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=hr[o],Ve(i,[s,l],[s+Math.cos(c)*12,l+Math.sin(c)*12],4),i.fillStyle=xt.gold;for(let h=0;h<4;h++){const d=h/4*He+.4,m=14+a*10;i.fillRect(vt(s+Math.cos(d)*m)-1,vt(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)P(t,n,.5,p(-1.3,1.3),p(-1.3,1.3),p(.8,2),.3,hr[(o+i)%6],2,6,!0)};let ue=0,fe=0;function mn(e,t,n=0){ue=(e-t)*j.HW+j.OX,fe=(e+t)*j.HH-n*j.ZK}function sn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const b0=e=>e<0?0:e>1?1:e,ve=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],i2="#3a2420",pu="#2a1410",yu=e=>e>=5?i2:ve[e<0?0:e|0];function Xs(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}K.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=s+(h/(l-1)-.5)*a*1.5;const m=i*p(.7,1);for(let y=0;y<=u;y++){const g=.35+(m-.35)*y/u;d+=p(-.13,.13);const x=(h*(u+1)+y)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const c=(h,d,m)=>{const y=b0(d/.25)*u;for(let g=0;g<l;g++)for(let x=0;x<u&&x<y;x++){const b=Math.min(1,y-x),v=(g*(u+1)+x)*2;mn(f[v],f[v+1]);const S=ue,_=fe;mn(f[v+2],f[v+3]);const w=S+(ue-S)*b,R=_+(fe-_)*b,T=Math.max(1,Math.round(Math.hypot(w-S,R-_)/3)),k=m*(1-x/u*.5);for(let F=0;F<=T;F++)sn(h,S+(w-S)*F/T,_+(R-_)*F/T,k)}};A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=pu,c(h,d*1.8,6)}}),A({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(h,d){const m=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=yu(m/.3),c(h,m,3)}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(h,d){for(let m=0;m<4;m++){const y=d*1.5-m*.13;if(y<=0||y>=1)continue;const g=.4+(i-.4)*y,x=a*(.45+.55*y),b=5+Math.round(g*3);h.globalAlpha=1-y,h.fillStyle=ve[Math.min(3,m+(y*2|0))];for(let v=0;v<=b;v++){const S=s+(v/b-.5)*2*x,_=g*(.9+.1*Math.sin(v*2.3+m*1.7));mn(t+Math.cos(S)*_,n+Math.sin(S)*_,.35+.12*Math.sin(v*1.3+d*18)),sn(h,ue,fe,8-m-y*4)}}}});for(let h=0;h<32;h++){const d=s+p(-a,a)*.9,m=p(.3,1)*i*2.4;P(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,p(1.2,3),p(.7,1.05),ve[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=s+p(-a,a),m=p(.6,1)*i*3.2;P(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,p(.4,1.4),.35,ve[0],2,1,!0,.98)}tt(3)};const s2=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],xl=[],M0=[],S0=[];s2.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(xl.push(n-2),M0.push(t),S0.push(r))}});const _0=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function a2(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":ve[0]:_0[i];for(let a=0;a<xl.length;a++)S0[a]===i&&e.fillRect(Math.round(t+xl[a]*r),Math.round(n+M0[a]*r),r,r)}}K.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)P(i+p(-.3,.3),a+p(-.3,.3),p(.2,.8),p(-1.8,1.8),p(-1.8,1.8),p(1.5,3),p(.5,.8),_0[2+(s&1)],4,9,!1,.95)};A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=ft(s.uid),u=a*t;if(!l||l.dead||M.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const y=m<n?0:1,b=(y?m-n:m)/(y?r:n)*Math.PI*2+(y?-u*1.1+.3:u*.8),v=Math.sin(b)>0;if(d===0===v)continue;const S=m*.035,_=b0((u-S)/.08);if(_<=0)continue;const w=(y?22:30)*c,R=(y?8:11)*c;mn(l.x,l.y,y?.62:.22),i.globalAlpha=v?1:.4,a2(i,ue+Math.cos(b)*w,fe+Math.sin(b)*R-10*(1-_)-6*c,h,u-S<.12)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){mn(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=ve[1];for(let l=2;l<s;l+=3)sn(i,ue+l,fe+l*.7,4),sn(i,ue-l,fe+l*.7,4),sn(i,ue+l,fe-l*.7,4),sn(i,ue-l,fe-l*.7,4);i.fillStyle=ve[0],sn(i,ue,fe,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;P(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,p(.6,1.2),p(.5,.8),ve[1+i%3],2,-1,!0,.9)}};K.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=o-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let m=0;m<c;m++){const y=(m+.5)/c,g=p(-.16,.16);h[m*4]=t+a*y-f*g,h[m*4+1]=n+s*y+u*g,h[m*4+2]=p(18,30),h[m*4+3]=y*r}const d=r+1.9;A({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,y){const g=y*d;for(let x=0;x<c;x++){const b=g-h[x*4+3];if(b<0)continue;const v=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(v<=0)continue;mn(h[x*4],h[x*4+1]);const S=h[x*4+2];m.globalAlpha=v*.8,m.fillStyle=pu,Xs(m,ue,fe+1,S+6);const _=b/.3|0;m.globalAlpha=v,m.fillStyle=yu(_),Xs(m,ue,fe,S*(_<5?.8:.6)),_<4&&at(x*7+(g*12|0))>.72&&(m.fillStyle=ve[0],m.fillRect(Math.round(ue+(at(x*3+(g*12|0))-.5)*S*.5),Math.round(fe-2),2,2))}m.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,y,g){const x=ft(g.uid),b=x?x.x:o,v=x?x.y:i;mn(b,v,.4);const S=ue,_=fe;mn(b+u,v+f,.4);let w=ue-S,R=fe-_;const T=Math.hypot(w,R)||1;w/=T,R/=T;const k=1-y*.6;for(let F=0;F<9;F++){const U=(10+F*5*(.8+Math.random()*.4))*k;m.globalAlpha=1-F/10,m.fillStyle=ve[Math.min(4,F>>1)],sn(m,S-w*U+(Math.random()-.5)*3,_-R*U+(Math.random()-.5)*3,(10-F)*k)}if(g.n<22&&y<.9){for(let F=0;F<2;F++){const U=p(-2.5,2.5);P(b,v,.35,-u*2-f*U,-f*2+u*U,p(.5,1.6),.5,ve[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&y>.85){g.end=!0;for(let F=0;F<8;F++){const U=F/8*6.28;P(b,v,.1,Math.cos(U)*2.5+u,Math.sin(U)*2.5+f,.4,.6,F&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const y=m/8*6.28;P(t,n,.1,Math.cos(y)*3,Math.sin(y)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}tt(4)};const ms=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],ps=[],w0=[],A0=[];ms.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,a)=>a<0||a>=ms.length||i<0||i>=e.length||ms[a][i]===".";ps.push(n-9),w0.push(t),A0.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const l2=["#ff7a20","#ffd84a","#fffbe0"];K.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=c-d*.05;m<0||(mn(s[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=pu,Xs(u,ue,fe+1,46),u.globalAlpha=h,u.fillStyle=yu(m/.45),Xs(u,ue,fe,26))}u.globalAlpha=1}}),A({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const c=r*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const m=d/h*6.28;mn(t+Math.cos(m)*c,n+Math.sin(m)*c),u.fillStyle=ve[d&1],sn(u,ue,fe,7*(1-f)+2)}}}),A({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const m=h-d*.05;if(m<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let S=0;S<5;S++)P(s[d],l[d],.3,p(-.8,.8)+(s[d]-t)*.4,p(-.8,.8)+(l[d]-n)*.4,p(3,5),p(.6,.9),ve[S%4],3,6,!0,.97)}const y=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(y<=0)continue;const g=95*y;mn(s[d],l[d]);const x=ue,b=fe;u.globalAlpha=Math.min(1,y*1.5);const v=h*24|0;for(let S=0;S<g;S+=4){const _=S/g,w=16*(1-_*.75)+(at(d*31+S+v)-.5)*4,R=(at(d*17+S*3+v)-.5)*7*_;if(u.fillStyle=_<.25?ve[1]:_<.6?ve[2]:ve[3],u.fillRect(Math.round(x+R-w/2),Math.round(b-S-4),Math.round(w),4),_<.7){u.fillStyle=ve[0];const T=w*.4;u.fillRect(Math.round(x+R-T/2),Math.round(b-S-4),Math.max(2,Math.round(T)),4)}}}}}),A({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,mn(t,n,h);const m=ue,y=fe-ms.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=l2[g];for(let x=0;x<ps.length;x++){if(A0[x]!==g)continue;const b=Math.abs(ps[x]),v=b>=4?Math.round(Math.sin(c*14)*(b-3)*.45):0;u.fillRect(Math.round(m+ps[x]*d-d/2),Math.round(y+(w0[x]+v)*d),d,d)}}}}),tt(9)};Me.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)P(t,n,.45,p(-1.3,1.3),p(-1.3,1.3),p(1.6,3.2),p(.3,.5),o<3?ve[0]:ve[1],2,10,!0,.97);P(t,n,.45,p(-.5,.5),p(-.5,.5),1,.45,ve[2],3,8,!0,.95),A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){mn(t,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?ve[1]:ve[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),c=a*u*.7;sn(o,ue+f,fe+c,3),sn(o,ue-c/.7,fe+f*.7,3),sn(o,ue-f,fe-c,3),sn(o,ue+c/.7,fe-f*.7,3)}i<.3&&(o.fillStyle=ve[0],sn(o,ue,fe,6))}})};const Ne="#fff2d6",yn="#e2b878",$o="#9a6232",oo="#4e2e16",Di="#e8643a",Oi="#ffcc66",gu="#a07a48",nn=Math.round,Ar=Math.PI*2;function Ce(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(nn(t),nn(n),r,o)}function Nn(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(nn(t+(r-t)*l/s-i/2),nn(n+(o-n)*l/s-i/2),i,i)}function Wo(e,t,n,r,o,i=Di){const a=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?$o:l>.82?i:Ne,e.fillRect(nn(t+(r-t)*l-u/2),nn(n+(o-n)*l-u/2),u,u)}}function Ea(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=nn(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(nn(t-a),nn(n+i),a*2,2)}}function C0(e,t){const n=(e-t)*j.HW,r=(e+t)*j.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const T0=e=>{const t=ft(e);return t&&!t.dead&&!Te(t)?t:null},u2=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},f2=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Se.erizo_A=(e,t,n,r,o)=>{e.translate(nn(n),nn(r)),e.rotate(o),Ce(e,-15,-2,16,4,oo),Ce(e,-14,-1,14,2,yn),Ce(e,-9,-1,3,2,Ne),Ce(e,-4,-1,3,2,Ne),Ce(e,0,-2,3,4,oo),Ce(e,3,-1,3,2,Di),Ce(e,6,0,2,1,Oi),Ce(e,-17,-4,5,2,Ne),Ce(e,-17,2,5,2,Ne),Math.random()<.3&&P(t.x,t.y,t.z||.45,0,0,-.3,.25,yn,2,0,!1)};Me.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:p(0,Ar),l:p(8,12)}));A({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of t)Wo(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)P(e.x,e.y,.45,p(-2,2),p(-2,2),p(.5,2),.3,n%2?yn:Ne,2,6,!1)};Se.erizo_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;e.translate(nn(n),nn(r)),e.rotate(o),Ce(e,-31,-3,32,6,oo);for(let u=0;u<30;u+=6)Ce(e,-30+u,-2,3,4,Ne),Ce(e,-30+u+3,-2,3,4,$o);Ce(e,0,-3,4,6,oo),Ce(e,4,-2,4,4,Di),Ce(e,8,-1,3,2,Oi);for(let u=0;u<3;u++)Ce(e,-36+u*3,-6+u,4,2,Ne),Ce(e,-36+u*3,4-u,4,2,Ne);yt(!0);const l=$t();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=Oi;for(let u=0;u<5;u++)l.fillRect(-6-u*6,nn(Math.sin(i*38+u*1.3)*5)-1,2,2);yt(!1),Math.random()<.5&&P(t.x,t.y,s,p(-.4,.4),p(-.4,.4),.3,.35,Math.random()<.5?Ne:yn,2,3,!1)};K.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=C0(t,n),i=-o,a=r;A({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,c]=C(e.x+t*.35,e.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),m=f+r*d,y=c+o*d,g=f+i*15-r*5,x=c+a*15-o*5,b=f-i*15-r*5,v=c-a*15-o*5;l.globalAlpha=1-u,Nn(l,f+r*3,c+o*3,g,x,3,$o),Nn(l,f+r*3,c+o*3,b,v,3,$o),Nn(l,g,x,m,y,2,Ne),Nn(l,b,v,m,y,2,Ne)}}),A({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,c]=C(e.x+t*.5,e.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),y=Math.sin(d),g=r*m-o*y,x=r*y+o*m,b=d?h*.55:h;Nn(l,f,c,f+g*b,c+x*b,3,Oi),Nn(l,f,c,f+g*b*.5,c+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)P(e.x-t*.2,e.y-n*.2,.4,-t*p(1,2.5)+p(-.5,.5),-n*p(1,2.5)+p(-.5,.5),p(.3,1),.45,l%2?yn:gu,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+p(-.25,.25),f=p(5,9);P(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,p(0,.6),.22,l%2?Oi:Ne,2,0,!0,.86)}tt(1.5)};K.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=T0(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?f2(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=C(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*Ar+.17,y=Math.sin(m);if(y>=0!==o)continue;const g=u<t?Math.sin(M.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=c+Math.cos(m)*16,v=h+y*12,S=b+Math.cos(m)*x+g,_=v+y*x*.75-x*.3;Wo(i,b,v,S,_,(M.T*7+d*.37)%1<.12?"#ffffff":Di)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),A({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*Ar,[u,f]=C(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[c,h]=C(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Nn(o,u,f,c,h,2,s%2?yn:$o)}}});for(let o=0;o<14;o++){const i=o/14*Ar,a=p(2,3.5);P(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,p(1.5,3),.5,o%3?Ne:yn,2,8,!1,.92)}tt(2)};K.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=C0(o,i),c=u>=0?1:-1;A({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,y,g){const x=y*g.dur,b=Math.min(1,x/r);let v=e.x+o*b,S=e.y+i*b;const _=ft(e.uid);if(_){if(_.dead||Te(_))return;v=_.x,S=_.y}const[w,R]=C(v,S,.32),T=16,k=x*36*c;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let F=0;F<3;F++){const U=(F-1)*9;Nn(m,w-u*(T+4)-f*U,R-f*(T+4)+u*U,w-u*(T+18+F*5)-f*U,R-f*(T+18+F*5)+u*U,2,yn)}Ea(m,w,R,T+1,oo),Ea(m,w,R,T-1,$o),Ea(m,w-4,R-4,T-9,yn);for(let F=0;F<10;F++){const U=k+F*Ar/10,B=Math.cos(U),Z=Math.sin(U);Wo(m,w+B*(T-3),R+Z*(T-3),w+B*(T+10),R+Z*(T+10))}}});const h=Math.max(4,Math.min(10,nn(a*2.2))),d=Array.from({length:h},(m,y)=>({k:(y+.5)/h,o:p(-.28,.28),lean:p(-6,6),h:p(9,14)}));A({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,y,g){const x=y*g.dur,b=Math.min(1,(g.dur-x)/.5);for(const v of d){if(x<v.k*r)continue;const S=Math.min(1,(x-v.k*r)/.08),[_,w]=C(e.x+o*v.k+s*v.o,e.y+i*v.k+l*v.o);m.globalAlpha=b*.45,Ce(m,_-4,w-1,8,3,oo),m.globalAlpha=b,Wo(m,_+v.lean*S,w-v.h*S,_,w)}}});for(let m=0;m<12;m++){const y=Math.random();P(e.x+o*y+p(-.2,.2),e.y+i*y+p(-.2,.2),.1,p(-.6,.6),p(-.6,.6),p(.5,1.4),p(.4,.7),m%2?yn:gu,3,4,!1,.9)}for(let m=0;m<6;m++){const y=m%2?1:-1;P(e.x,e.y,.35,s*y*p(2,4),l*y*p(2,4),p(1.5,3),.45,Ne,2,8,!1,.92)}tt(2)};K.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=u2(e),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(l,u)=>{const f=Math.random()*Ar,c=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(f)*c,y:e.y+Math.sin(f)*c,t0:.12+u/i*(r-.5)+p(0,.08),lean:p(-7,7),h:p(10,15),hit:!1}});A({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur,h=Math.min(1,(f.dur-c)/.5),d=t*(c<.3?1.5-.5*(c/.3):1);l.globalAlpha=.85*h;for(let m=0;m<8;m++){const y=m*Ar/8+c*.4;for(const g of[-.09,.09]){const[x,b]=C(e.x+Math.cos(y+g)*d,e.y+Math.sin(y+g)*d),[v,S]=C(e.x+Math.cos(y)*(d-.35),e.y+Math.sin(y)*(d-.35));Nn(l,x,b,v,S,3,Di)}}l.globalAlpha=.45*h;for(let m=0;m<48;m++){const y=m/48*Ar-c*.2,[g,x]=C(e.x+Math.cos(y)*t,e.y+Math.sin(y)*t);Ce(l,g-1,x-1,2,2,yn)}for(const m of a){if(c<m.t0+o)continue;const[y,g]=C(m.x,m.y);l.globalAlpha=.4*h,Ce(l,y-4,g-1,8,3,oo),l.globalAlpha=h,Wo(l,y+m.lean,g-m.h,y,g)}}}),A({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur;for(const h of a){const d=(c-h.t0)/o;if(d<0)continue;if(d>=1){h.hit||(h.hit=!0,P(h.x,h.y,.05,p(-.6,.6),p(-.6,.6),p(.8,1.6),.4,Math.random()<.5?yn:gu,2,7,!1));continue}const[m,y]=C(h.x,h.y,3.6*(1-d)),g=h.lean*1.4;l.globalAlpha=.35,Nn(l,m+g*2.4,y-52,m+g,y-22,1,Ne),l.globalAlpha=1,Wo(l,m+g,y-22,m,y)}}});const s=T0(e.uid);if(s)for(let l=0;l<10;l++)P(s.x,s.y,.6,p(-.4,.4),p(-.4,.4),p(7,10),.45,l%2?Ne:yn,2,0,!1,1);tt(2)};let ae=0,le=0;function je(e,t,n=0){ae=(e-t)*j.HW+j.OX,le=(e+t)*j.HH-n*j.ZK}function Fn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const xu=e=>e<0?0:e>1?1:e,R0=e=>1-(1-e)*(1-e),jt=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],Ye=["#ffe0f4","#ff9ad8","#e060b0"],Ir=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],Ge=["#ffffff","#fff2a0","#ffd24a"];function vu(e,t,n,r){const o=[],i=[],a=[],s=[],l=e.length,u=(f,c)=>c<0||c>=l||f<0||f>=e[c].length||t.indexOf(e[c][f])<0;return e.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=t.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),a.push(d),s.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const ka=vu(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function P0(e,t,n,r){for(let o=0;o<ka.n;o++)e.fillRect(Math.round(t+ka.X[o]*r-r/2),Math.round(n+ka.Y[o]*r-r/2),r,r)}function $r(e,t,n,r){Fn(e,t,n,3);for(let o=2;o<=r;o+=2)Fn(e,t+o,n+o,2),Fn(e,t-o,n+o,2),Fn(e,t+o,n-o,2),Fn(e,t-o,n-o,2)}function vl(e,t,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,c=Math.sin(l)*r*i,h=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(a+1)));for(let y=0;y<m;y++){const g=y/m;Fn(e,t+f+(h-f)*g,n+c+(d-c)*g,a)}}}function xf(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const oi=new Map;function I0(e,t,n=!1){if(e.id==null)return;let r=oi.get(e.id);if(!r){oi.size>200&&oi.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},oi.set(e.id,r);const o=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=M.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,oi.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}K.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){je(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=jt[1],vl(r,ae,le,i,o*Math.PI,.75,3),r.fillStyle=Ye[1],vl(r,ae,le,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=jt[0],Fn(r,ae,le,4)}});for(let r=0;r<6;r++)P(t,n,.45,p(-1,1),p(-1,1),p(.3,1),.4,r&1?Ye[1]:jt[1],2,0,!0)};Se.gato_Q=(e,t,n,r,o,i)=>{I0(t,c2);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let h=1;h<16;h++){const d=8+h*3.2,m=Math.sin(h*.7-i*22)*(2+h*.35);e.globalAlpha=1-h/16,e.fillStyle=h&1?Ye[1]:Ye[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(r+s*d+u*m),2,2)}e.globalAlpha=1,yt(!0);const f=$t();f.fillStyle=jt[3],f.globalAlpha=.16,xf(f,n,r,20),f.globalAlpha=.22,xf(f,n,r,13),f.globalAlpha=1,yt(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(m>9)continue;let y;m>6?y=jt[4]:d===-2&&h===-2?y=jt[0]:y=((d*.8+h+c)%4+4)%4<1.3?jt[1]:jt[2],e.fillStyle=y,e.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function c2(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)P(t,n,.45,p(-.6,.6),p(-.6,.6),p(0,.6),.4,o&1?Ye[1]:jt[2],2,1,!0);return}const r=Math.random()*6.28;A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){je(t,n,.45);const a=Math.round(14*xu(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,c=l+u*.3;o.fillStyle=u+s&1?Ye[1]:jt[1],o.fillRect(Math.round(ae+Math.cos(c)*f),Math.round(le+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=jt[0],Fn(o,ae,le,10*(1-i*3)))}});for(let o=0;o<10;o++)P(t,n,.45,p(-1.4,1.4),p(-1.4,1.4),p(.5,1.5),p(.4,.6),o&1?Ye[0]:jt[1],2,2,!0);tt(2)}const nr=vu(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);K.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,m=Math.cos(d),y=Math.sin(d),g=Math.atan2(m+y,m-y),x=g+Math.PI/2,b=Math.cos(x),v=Math.sin(x),S=new Float32Array(nr.n*2);for(let _=0;_<nr.n;_++)S[_*2]=nr.X[_]*b-nr.Y[_]*v,S[_*2+1]=nr.X[_]*v+nr.Y[_]*b;o.push({x:t+m*u,y:n+y*u,t:f+h*.014,c:S})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,y=3*m,g=Math.max(2,Math.round(y*.6)),x=Math.round(y);je(h.x,h.y),l.globalAlpha=c*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Ir[3]:b===1?Ir[1]:Ir[0];for(let v=0;v<nr.n;v++){const S=nr.B[v]===1,_=nr.Y[v]<0;(b===0?!S:b===1?S||_:S||!_)||l.fillRect(Math.round(ae+h.c[v*2]*y-x/2),Math.round(le+h.c[v*2+1]*y*.5-g/2),x,g)}}}l.globalAlpha=1}});const s=Math.random()*6.28;A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*R0(xu(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=s+c*Math.PI/3,d=Math.cos(h),m=Math.sin(h);for(let y=.25;y<f;y+=.16)je(t+d*y,n+m*y),l.fillStyle=y<f*.5?Ir[1]:Ir[2],Fn(l,ae,le,4-y/r*2);if(f>r*.4){const y=f*.6;for(let g=-1;g<=1;g+=2){const x=h+g*.75;for(let b=.12;b<.45;b+=.12)je(t+d*y+Math.cos(x)*b,n+m*y+Math.sin(x)*b),l.fillStyle=Ir[0],Fn(l,ae,le,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;P(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,p(.3,1.1),Math.cos(u)*p(.5,2),Math.sin(u)*p(.5,2),p(0,.4),p(.7,1.1),Ir[l%2],2,.5,!0,.95)}tt(4)};const zr=vu([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);K.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;A({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){je(t,n);const l=3,u=ae,f=le-2;for(let c=0;c<3;c++){a.fillStyle=c===0?jt[3]:c===1?jt[1]:Ge[1];for(let h=0;h<zr.n;h++){if((zr.K[h]===1?2:zr.B[h]?1:0)!==c)continue;const m=at(h*7.13+i),y=-zr.Y[h]/(zr.h-1);m*.6+y*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+zr.X[h]*l-l/2),Math.round(f+zr.Y[h]*l-s*18*m),l,l))}}}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(je(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-c,a.fillStyle=u&1?Ye[1]:jt[1],$r(a,ae,le,8*(1-c)+2))}}}),A({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){je(r,o,1.05);const l=ae,u=le,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let m=0;m<5;m++){const y=c[m]*2,g=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?Ge[2]:Ge[1],a.fillRect(Math.round(d-y/2),Math.round(u+(m-2.5)*2*f),y,g)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=Ye[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=jt[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)P(t,n,.5,p(-.8,.8),p(-.8,.8),p(.5,1.5),.5,jt[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;P(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,p(.2,1),.45,a&1?Ye[1]:jt[1],2,0,!0,.9)}};const Zi=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Ua=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],La=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0];K.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*j.HW*Math.SQRT2;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(x,b){const v=b*1.1;je(t,n);const S=ae,_=le;x.globalAlpha=b>.85?(1-b)/.15:1;const w=La.length/2,R=xu(v/.45)*w;x.fillStyle=jt[1];for(let T=0;T<w&&T<R;T++){const k=La[T*2],F=La[T*2+1],U=Math.min(1,R-T),B=S+Zi[k]*i,Z=_+Ua[k]*i*.55,lt=S+Zi[F]*i,bt=_+Ua[F]*i*.55,I=Math.hypot(lt-B,bt-Z)*U,z=Math.round(I/6);for(let O=0;O<=z;O++){const L=O*6/(I||1)*U;x.fillRect(Math.round(B+(lt-B)*L),Math.round(Z+(bt-Z)*L),2,2)}}for(let T=0;T<Zi.length;T++)x.fillStyle=T>=9?Ge[2]:Ge[1],$r(x,S+Zi[T]*i,_+Ua[T]*i*.55,3+3*(.5+.5*Math.sin(M.T*9+T*1.7)))}});const a=12,s=new Float32Array(a),l=new Float32Array(a),u=new Float32Array(a);for(let x=0;x<a;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r*.9;s[x]=t+Math.cos(b)*v,l[x]=n+Math.sin(b)*v,u[x]=.45+x/(a-1)*.55+p(-.03,.03)}const f=.32,c=Math.hypot(40,4.5*j.ZK),h=40/c,d=-352.8/c;A({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(x,b,v){const S=b*1.2;for(let _=0;_<a;_++){const w=S-(u[_]-f);if(!(w<0))if(w<f){const R=w/f;je(s[_],l[_],4.5*(1-R));const T=ae+(1-R)*40,k=le;for(let F=-1;F<=1;F++){const U=F*.12,B=h*Math.cos(U)-d*Math.sin(U),Z=h*Math.sin(U)+d*Math.cos(U);x.fillStyle=F===0?Ye[1]:jt[1];for(let lt=1;lt<10;lt++)x.globalAlpha=1-lt/10,x.fillRect(Math.round(T+B*lt*3.2+F*3),Math.round(k+Z*lt*3.2),2,2)}x.globalAlpha=1,x.fillStyle=Ge[1],x.fillRect(Math.round(T-6),Math.round(k-1),12,2),x.fillRect(Math.round(T-1),Math.round(k-6),2,12),x.fillStyle=Ge[0],x.fillRect(Math.round(T-2),Math.round(k-2),4,4)}else{if(!(v.landed&1<<_)){v.landed|=1<<_;for(let T=0;T<2;T++)P(s[_],l[_],.1,p(-1,1),p(-1,1),p(1,2),.45,T?Ge[1]:Ye[1],2,4,!0)}const R=(w-f)/.2;if(R>=1)continue;je(s[_],l[_]),x.globalAlpha=1-R,x.fillStyle=Ge[1],$r(x,ae,le,2+R*8)}}x.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(x,b,v){if(!v.boom){v.boom=!0,tt(8);for(let T=0;T<28;T++){const k=Math.random()*6.28,F=p(1,3.5);P(t,n,.3,Math.cos(k)*F,Math.sin(k)*F,p(1.5,3.5),p(.5,.8),[Ge[1],jt[1],Ye[1],jt[0]][T&3],3,5,!0,.95)}}const S=.3+(r-.3)*R0(b),_=b*2;je(t,n,.2);const w=ae,R=le;if(b<.35){const T=1-b/.35;x.fillStyle=jt[1],x.globalAlpha=T*.25,x.fillRect(Math.round(w-70),Math.round(R-35),140,70),x.globalAlpha=T*.4,x.fillRect(Math.round(w-40),Math.round(R-20),80,40),x.fillStyle=jt[0],x.globalAlpha=T*.7,x.fillRect(Math.round(w-15),Math.round(R-8),30,16)}x.globalAlpha=1-b*b;for(let T=0;T<10;T++){const k=_+T/10*6.28;je(t+Math.cos(k)*S,n+Math.sin(k)*S,.35+.2*Math.sin(b*6+T)),x.fillStyle=T&1?Ge[2]:Ge[1],P0(x,ae,le,3),x.fillStyle=Ge[0],x.fillRect(Math.round(ae-1),Math.round(le-1),2,2)}}});const m=24,y=new Float32Array(m),g=new Float32Array(m);for(let x=0;x<m;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r;y[x]=t+Math.cos(b)*v,g[x]=n+Math.sin(b)*v}A({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(x,b){const v=M.T*8|0;for(let S=0;S<m;S++){const _=at(S*13+v);_<.25||(je(y[S],g[S]),x.globalAlpha=(1-b)*_,x.fillStyle=S%3?jt[1]:Ge[1],x.fillRect(Math.round(ae),Math.round(le),2,2))}}})};Se.gato_A=(e,t,n,r,o,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);I0(t,h2,a),yt(!0);const s=$t(),l=Math.cos(o),u=Math.sin(o);for(let h=1;h<=4;h++)s.globalAlpha=.8-h*.17,s.fillStyle=h&1?Ye[1]:jt[1],Fn(s,n-l*h*5,r-u*h*5,4-h*.6);s.globalAlpha=1;const f=a?7:5,c=(i*16|0)&1;if(s.fillStyle=jt[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);s.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(s.fillStyle=Ye[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=Ge[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}yt(!1)};function z0(e,t,n){A({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){je(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=jt[1],vl(r,ae,le,i,Math.PI/4,.75,2),r.fillStyle=Ye[1],$r(r,ae+i,le,3),$r(r,ae-i,le,3),$r(r,ae,le+i*.75,3),$r(r,ae,le-i*.75,3),n&&(r.fillStyle=Ge[1],P0(r,ae,le-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)P(e,t,.45,p(-1,1),p(-1,1),p(.3,1.2),.35,n&&r&1?Ge[1]:jt[1],2,1,!0)}function h2(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;z0(t,n,e.crit),ct.sfx("atk_gato",t,n,e.crit?.9:.6)}Me.gato=e=>z0(e.x,e.y,!!e.big);const Rt=Math.round,me=Math.PI*2;let St=0,_t=0;function Zt(e,t,n=0){St=(e-t)*j.HW+j.OX,_t=(e+t)*j.HH-n*j.ZK}function qe(e,t,n,r,o){e.fillStyle=o,e.fillRect(Rt(t-r/2),Rt(n-r/2),r,r)}function jr(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Rt(t+(r-t)*l/s-i/2),Rt(n+(o-n)*l/s-i/2),i,i)}function Wr(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Rt(t-a/2),Rt(n+i*o),Rt(a),Math.max(1,Rt(2*o)))}}const Cr=e=>e<0?0:e>1?1:e,dr=e=>1-(1-e)*(1-e),$={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},fo=new Float32Array(72),co=new Float32Array(72);function Ln(e,t,n,r,o,i,a,s,l,u,f,c,h){const d=r-t,m=o-n,y=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(y/i))),x=-m/y,b=d/y;for(let S=0;S<=g;S++){const _=S/g,w=S===0||S===g?0:(at(s+S*7.31)-.5)*2*a*Math.sqrt(Math.sin(_*Math.PI));fo[S]=t+d*_+x*w,co[S]=n+m*_+b*w}if(f>0)for(let S=0;S<g;S++)jr(e,fo[S],co[S],fo[S+1],co[S+1],f,l);for(let S=0;S<g;S++)jr(e,fo[S],co[S],fo[S+1],co[S+1],c,u);const v=Math.atan2(m,d);for(let S=0;S<h;S++){const _=1+Math.floor(at(s+S*3.7+50)*Math.max(1,g-1));let w=fo[_],R=co[_],T=v+(at(s+S*9.1)>.5?1:-1)*(.45+at(s+S*1.3)*.6);for(let k=0;k<3;k++){const F=i*(1-k*.2),U=w+Math.cos(T)*F,B=R+Math.sin(T)*F;jr(e,w,R,U,B,Math.max(1,c-1),k?l:u),w=U,R=B,T+=(at(s+S*5+k)-.5)*1.3}}}function Gs(e,t,n,r,o,i,a,s){let l=t,u=n,f=r;for(let c=0;c<5;c++){f+=(at(o+c)-.5)*.9;const h=i*(1-c*.13),d=l+Math.cos(f)*h,m=u+Math.sin(f)*h*.5;if(jr(e,l,u,d,m,2,a),at(o+c*3.3)>.45){const y=f+(at(o+c*7)>.5?.85:-.85);jr(e,d,m,d+Math.cos(y)*h*.6,m+Math.sin(y)*h*.3,2,a)}l=d,u=m}s&&qe(e,l,u,3,s)}function Bs(e,t,n,r,o){e.fillStyle=$.cloudD,e.fillRect(Rt(t-3*r),Rt(n-r),6*r,2*r),e.fillStyle=o?$.cloudL:$.cloud,e.fillRect(Rt(t-2*r),Rt(n-2*r),4*r,2*r),e.fillStyle=o?$.pale:$.cloudM,e.fillRect(Rt(t-r),Rt(n-2.6*r),2*r,Rt(r*.8))}K.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;A({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Zt(t,n,.6);const a=St,s=_t,l=M.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=at(r+u+l*3)*me,c=10+at(r+u*2+l)*14;Ln(o,a,s,a+Math.cos(f)*c,s+Math.sin(f)*c*.7,5,3,r+u*11+l,$.cyan,$.white,0,1,0)}qe(o,a,s,Rt(8*(1-i))+2,$.white)}});for(let o=0;o<8;o++)P(t,n,.6,p(-1.5,1.5),p(-1.5,1.5),p(.5,2),.25,o&1?$.cyan:$.white,2,3,!0)};const Ji=new Map;Se.halcon_Q=(e,t,n,r,o,i)=>{let a=t.id!=null?Ji.get(t.id):void 0;t.id!=null&&!a&&(Ji.size>64&&Ji.clear(),a=[t.x,t.y],Ji.set(t.id,a));const s=Math.cos(o),l=Math.sin(o),u=150;let f=n-s*u,c=r-l*u;yt(!0);const h=$t();if(a){Zt(a[0],a[1],t.z||.45);const y=Math.hypot(n-St,r-_t);if(y<u)f=St,c=_t;else{h.globalAlpha=.4,h.fillStyle=$.blue;const g=Math.min(80,Math.floor((y-u)/9)),x=i*20|0;for(let b=0;b<g;b++){if(at(b*3.1+x)<.35)continue;const v=(u+b*9)/y;h.fillRect(Rt(n+(St-n)*v),Rt(r+(_t-r)*v),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;h.globalAlpha=.16,h.fillStyle=$.blue,Wr(h,n,r,18),h.globalAlpha=1,Ln(h,n,r,f,c,11,7,d,$.cyan,$.white,4,2,2);const m=5+((i*30|0)&1)*3;h.fillStyle=$.pale,h.fillRect(Rt(n-m),Rt(r-1),m*2,2),h.fillRect(Rt(n-1),Rt(r-m),2,m*2),h.fillStyle=$.white,h.fillRect(Rt(n-3),Rt(r-3),6,6),yt(!1)};K.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*me;A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){Zt(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)Gs(i,St,_t,o+s*me/6,r+s*13,9,$.scorch)}}),A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){Zt(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)Gs(i,St,_t,o+s*me/6,r+s*13,9,$.cyan,$.white)}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Zt(t,n,.5);const s=M.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=at(r+l*5+s)*me,f=18+at(r+l+s*2)*16;Ln(i,St,_t-6,St+Math.cos(u)*f,_t+Math.sin(u)*f*.6,6,4,r+s*7+l,$.blue,$.pale,3,1,0)}a<.3&&qe(i,St,_t,Rt(22*(1-a/.3))+2,$.white)}});for(let i=0;i<12;i++)P(t,n,.5,p(-2.2,2.2),p(-2.2,2.2),p(1,2.6),p(.25,.45),i%3?$.cyan:$.yel,2,7,!0,.9);tt(2)};const ys=new Map;K.halcon_W=e=>{if(e.type==="splash"||e.impact){d2(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Zt(t,n);const a=St,s=_t;Zt(r,o);const l=Math.hypot(St-a,_t-s)||1,u=(St-a)/l,f=(_t-s)/l;ys.size>32&&ys.clear(),ys.set(e.uid,[u,f]);for(let c=0;c<8;c++)P(t,n,.7,p(-1,1),p(-1,1),p(1,2.5),p(.6,.9),c%3?$.featherL:$.cream,3,1.2,!1,.9);A({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(c,h){Zt(r,o);const d=St,m=_t,y=64*(1-dr(h))+24,g=h*2.6;c.globalAlpha=.5+.5*h;const x=h>.75&&(M.T*20|0)&1?$.white:$.cyan;for(let b=0;b<4;b++){const v=g+b*me/4;for(let S=-3;S<=3;S++){const _=v+S*.09;qe(c,d+Math.cos(_)*y,m+Math.sin(_)*y*.5,3,x)}for(let S=1;S<=2;S++)qe(c,d+Math.cos(v)*(y-S*5),m+Math.sin(v)*(y-S*5)*.5,2,$.white)}qe(c,d,m,3,$.white)}}),A({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(c,h){const d=Cr(h*(i+.15)/i),m=-f,y=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;Zt(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,v=St,S=_t-b,_=1-g/12;c.globalAlpha=_*(h>.8?(1-h)/.2:1);for(const w of[-1,1]){const R=15+Math.sin(x*30+w)*4,T=Math.cos(x*34*w)*3;qe(c,v+m*R*w+T,S+y*R*w-Math.sin(x*34)*3,g<3?3:2,g<4?$.white:$.pale)}g%3===0&&(c.fillStyle=$.cyan,c.fillRect(Rt(v-u*10),Rt(S-f*10),2,2))}}})};function d2(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=ys.get(e.uid)||[0,1];A({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){Zt(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*me+at(o+l)*.5,f=r*j.HW*(.5+at(o+l*3)*.4);jr(a,St,_t,St+Math.cos(u)*f*.6,_t+Math.sin(u)*f*.3,2,$.ash),jr(a,St+Math.cos(u)*f*.6,_t+Math.sin(u)*f*.3,St+Math.cos(u+.25)*f,_t+Math.sin(u+.25)*f*.5,2,$.ash)}qe(a,St,_t,8,$.ash)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=M.T*30|0;for(let f=0;f<2;f++){const c=Cr(s*1.4-f*.2);if(c<=0||c>=1)continue;const h=.2+r*1.1*dr(c);a.globalAlpha=1-c;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*me;Zt(t+Math.cos(m)*h,n+Math.sin(m)*h),qe(a,St,_t,f?2:3,f?$.pale:$.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const c=f/u*me+s*.8,h=(f+1)/u*me+s*.8;Zt(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85);const d=St,m=_t;Zt(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85),Ln(a,d,m-4,St,_t-4,7,4,o+f*9+l,$.blue,$.pale,0,2,0),qe(a,d,m-4,4,$.white)}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+r*1.3*dr(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*me+.2;Zt(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const c=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let h=-2;h<=2;h++){const d=c+h*.35,m=9-Math.abs(h);qe(a,St-Math.cos(c)*6+Math.cos(d)*m,_t-Math.sin(c)*6+Math.sin(d)*m,h?2:3,h?$.pale:$.white)}}s<.2&&(a.globalAlpha=1-s/.2,Zt(t,n,.2),a.fillStyle=$.white,Wr(a,St+i[0]*6,_t+i[1]*6,Rt(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*me,l=p(1.5,3.5);P(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,p(.5,1.6),p(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)P(t,n,.6,p(-1.2,1.2),p(-1.2,1.2),p(1.5,2.5),p(.8,1.1),a&1?$.featherL:$.feather,3,1.5,!1,.92);tt(6)}K.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,a,s){const l=ft(s.uid);Zt(l?l.x:n,l?l.y:r,.8);const u=St,f=_t,c=dr(Cr(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const h of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+h*(.3+c*(.45+d*.24)),y=16+d*5+c*10;for(let g=6;g<y;g+=3){const x=g>y-6;qe(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/y*c*9,x?2:3,x?$.white:d&1?$.pale:$.cyan)}}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,a){const s=.5+(o-.5)*dr(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*me+a*1.6;for(let f=0;f<3;f++){const c=u+f*.07;Zt(n+Math.cos(c)*s,r+Math.sin(c)*s),qe(i,St,_t,3-f,f?$.pale:$.white)}}}})}for(let n=0;n<5;n++){const r=n/5*me;P(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,p(.8,1.5),.4,n&1?$.pale:$.white,2,0,!0)}A({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=ft(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const a=i.x-o.lx,s=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const c=Math.hypot(o.dx,o.dy),h=r*o.dur;n.globalAlpha=Math.min(1,h/.15)*(h>o.dur-.4?(o.dur-h)/.4:1),Zt(i.x,i.y,.45);const d=St,m=_t;if(c>.35){const y=o.dx/c,g=o.dy/c,x=M.T*70%11;for(let S=0;S<3;S++){const _=14+S*11+x,w=d-y*_,R=m-g*_,T=S===0?$.white:S===1?$.pale:$.cyan;for(const k of[-1,1]){const F=Math.cos(k*.75),U=Math.sin(k*.75),B=-(y*F-g*U),Z=-(y*U+g*F);for(let lt=0;lt<4;lt++)qe(n,w+B*lt*3,R+Z*lt*3,2,T)}}const b=-g,v=y;for(const S of[-1,1])for(let _=0;_<6;_++){const w=10+_*5+M.T*90%5;(_+(S>0?1:0))%3!==0&&(n.fillStyle=$.pale,n.fillRect(Rt(d-y*w+b*12*S),Rt(m-g*w+v*12*S),2,1))}}else for(let y=0;y<3;y++){const g=M.T*5+y*me/3;qe(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,y?$.pale:$.white)}}})};const ts=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],rr=(()=>{const e=[],t=[],n=[],r=ts.length,o=(i,a)=>a>=0&&a<r&&i>=0&&i<ts[a].length&&ts[a][i]!==".";return ts.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:o(s-1,a)&&o(s+1,a)&&o(s,a-1)&&o(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();K.halcon_R=e=>{if(e.type==="global_hit"){m2(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,a){Zt(t,n,3);const s=St,l=_t,u=30+60*dr(Cr(a*2)),f=M.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let c=0;c<9;c++){const h=c/9*me+a*3.2;Bs(i,s+Math.cos(h)*u,l+Math.sin(h)*u*.38,5+c%3,at(r+c+f)>.8)}Bs(i,s,l,7,at(r+f)>.7)}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,a,s){const l=ft(s.uid),u=l?l.x:t,f=l?l.y:n;Zt(t,n,3);const c=St,h=_t,d=30+60*dr(Cr(a*2)),m=M.T*15|0,y=a>.75?(1-a)/.25:1;if(i.globalAlpha=y,at(r+m*1.7)>.45){const x=at(r+m)*me,b=x+1.2+at(r+m*3)*2;Ln(i,c+Math.cos(x)*d,h+Math.sin(x)*d*.38,c+Math.cos(b)*d,h+Math.sin(b)*d*.38,9,6,r+m,$.blue,$.pale,3,1,1)}const g=a*o;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(Zt(u,f,1),Ln(i,c,h+8,St,_t,12,10,r+(g*25|0),$.blue,$.white,5,2,2)),g>.3){const x=Cr((g-.3)/.35),b=Rt(2+2*dr(x)),v=(M.T*24|0)%5===0?.5:1;Zt(u,f,2.2+x*.4);const S=St,_=_t;i.globalAlpha=y*v*(.4+.6*x);for(let w=0;w<3;w++){i.fillStyle=w===0?$.indigo:w===1?$.cyan:$.yel;for(let R=0;R<rr.n;R++)rr.K[R]===w&&i.fillRect(Rt(S+rr.X[R]*b-b/2),Rt(_+rr.Y[R]*b-b/2),b,b)}i.fillStyle=$.white;for(let w=0;w<rr.n;w++)rr.K[w]===1&&rr.Y[w]<-2&&i.fillRect(Rt(S+rr.X[w]*b-1),Rt(_+rr.Y[w]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*me,s=p(2,3);P(t+Math.cos(a)*s,n+Math.sin(a)*s,p(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,p(.5,1.2),.6,i%3?$.pale:$.cloudL,2,0,i%3!==0,.97)}tt(5)};function m2(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*me;ct.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};A({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,c=dr(Cr(f/.12));Zt(t,n,3.6);const h=St,d=_t,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let y=0;y<6;y++){const g=y/6*me+r;Bs(l,h+Math.cos(g)*38*c,d+Math.sin(g)*12*c,Rt(4+2*c),m&&y%2===0)}Bs(l,h,d,Rt(5+3*c),m)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,c=s(f);Zt(t,n,3.5);const h=St+(at(r)-.5)*30,d=_t;if(Zt(t,n,.1),c){const m=r+c*31;l.globalAlpha=.45,Ln(l,h,d,St,_t,16,22,m,$.indigo,$.blue,0,9,0),l.globalAlpha=1,Ln(l,h,d,St,_t,16,22,m,$.cyan,$.white,6,3,3),l.globalAlpha=c===1?.35:.18,l.fillStyle=$.pale,Wr(l,St,_t-20,70,.6)}if(f>.1){const m=Cr((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=$.cyan,Wr(l,St,_t,Rt(26*(1-m*.5)),.5),l.fillStyle=$.white,Wr(l,St,_t,Rt(12*(1-m)),.5)}}}),A({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Zt(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=$.scorch,Wr(l,St,_t,16,.5);for(let f=0;f<8;f++)Gs(l,St,_t,o+f*me/8,r+f*17,13,$.scorch)}}),A({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Zt(t,n);const f=M.T*25|0;l.globalAlpha=1-u;for(let c=0;c<8;c++)Gs(l,St,_t,o+c*me/8,r+c*17,13,c&1?$.blue:$.cyan,$.white);for(let c=0;c<3;c++){const h=at(r+c+f)*me,d=30+u*60;Ln(l,St,_t,St+Math.cos(h)*d,_t+Math.sin(h)*d*.5,7,5,r+f*3+c,$.blue,$.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*me,f=p(1.5,4);P(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,p(2,4),p(.4,.8),l%3===0?$.yel:l%3===1?$.cyan:$.ash,l%3===2?3:2,8,l%3!==2,.92)}tt(8)}Se.halcon_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;for(let h=0;h<=16;h+=2){const d=h<3?0:h<12?3:2,m=n-a*h,y=r-s*h;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,b=(h===8||h===12)&&g!==0;e.fillStyle=g===0?$.white:b?$.feather:x?$.cyan:$.pale,e.fillRect(Rt(m+l*g-1),Rt(y+u*g-1),2,2)}}yt(!0);const f=$t(),c=i*24|0;f.globalAlpha=.2,f.fillStyle=$.blue,Wr(f,n-a*6,r-s*6,12),f.globalAlpha=1;for(let h=0;h<2;h++){const d=4+at(c+h*3+(t.id||0))*10,m=h?1:-1,y=n-a*d,g=r-s*d;Ln(f,y,g,y+l*m*9-a*6,g+u*m*9-s*6,4,2,c*7+h,$.cyan,$.white,0,1,0)}f.fillStyle=$.white,f.fillRect(Rt(n-2),Rt(r-2),4,4),yt(!1)};Me.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;A({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(a,s){Zt(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;Ln(a,St,_t,St+Math.cos(u)*i*(.6+s*.5),_t+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,o+l,$.cyan,$.white,0,2,0)}qe(a,St,_t,Rt((r?10:6)*(1-s))+2,$.white)}});for(let a=0;a<(r?8:4);a++)P(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(.5,1.5),.25,a&1?$.yel:$.cyan,2,5,!0)};let Bt=0,Nt=0;function De(e,t,n=0){Bt=(e-t)*j.HW+j.OX,Nt=(e+t)*j.HH-n*j.ZK}function Dn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Fi=e=>e<0?0:e>1?1:e,Ei=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),qn=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],mo=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Yn=["#8a6a48","#5a3a20","#3a2414"],gr=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Si=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function O0(e,t){const n=[],r=[],o=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function bl(e,t,n,r,o,i,a=-1){const s=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*o,l+t.y[f]*o,o,o)}}const p2=O0(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),y2=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],vf=O0(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),bf=[Si[3],Si[2],Si[0],"#4a2a6a","#e0d8f0","#a898c0"],ii=new Map;function g2(e,t){if(e.id==null)return;let n=ii.get(e.id);if(!n){ii.size>200&&ii.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},ii.set(e.id,n);const r=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,a){if(a.fin)return;const s=M.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,ii.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}K.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,c=u===0?0:r*p(.45,.9);i[u*4]=t+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:p(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;s[u]=t+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}A({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<a;h++){const d=Fi((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(De(s[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=qn[1+h%3],u.fillRect(Math.round(Bt),Math.round(Nt),h%3?3:4,2))}u.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],y=m-.16,g=i[d*4+2];if(De(i[d*4],i[d*4+1]),h<m){if(h<y)continue;const v=Ei(Fi((h-y)/.13)),S=g*v*(1+.12*Math.sin(h*60+d)),_=Math.max(1,Math.round(S*2/3));for(let w=0;w<_;w++){const R=(w+.5)/_*2-1,T=S*2*Math.sqrt(1-R*R);u.fillStyle=w===0?mo[0]:R<.3?mo[1]:mo[2],u.fillRect(Math.round(Bt-T/2),Math.round(Nt-S*2+w*3),Math.max(1,Math.round(T)),3)}u.fillStyle=mo[3],u.fillRect(Math.round(Bt-S*.2),Math.round(Nt-S*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let v=0;v<4;v++)P(i[d*4],i[d*4+1],.25,p(-.6,.6),p(-.6,.6),p(.4,1.1),p(.9,1.4),qn[v%3],3,.25,!1,.92)}const x=(h-m)/.35;if(x>=1)continue;const b=g*(.6+x*2.2);u.globalAlpha=1-x;for(let v=0;v<8;v++){const S=v/8*6.28+d;u.fillStyle=qn[v&1?1:2],Dn(u,Bt+Math.cos(S)*b,Nt-g+Math.sin(S)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=mo[0];for(let v=0;v<3;v++)Dn(u,Bt+(v-1)*g*.6,Nt-g-x*8-(v&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),tt(2)};K.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;A({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?Ei(l/.2):l>.8?(1-l)/.2:1,c=3;De(i,a,1.35);const h=Bt,d=Nt,m=[4,8,10,12,12];for(let y=0;y<5;y++){const g=Math.round(m[y]*f)*c;g<=0||(s.fillStyle=y===0?gr[1]:gr[2],s.fillRect(Math.round(h-g/2),Math.round(d+(y-5)*c*f),g,Math.max(1,Math.round(c*f))))}s.fillStyle=gr[3],s.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),s.fillStyle=gr[0],Dn(s,h-3*c*f,d-3*c*f,3*f),Dn(s,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,P(i+p(-.25,.25),a+p(-.25,.25),1.25,0,0,0,.5,u.drops&1?gr[0]:gr[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;A({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=M.T;for(let f=0;f<o;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,y=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let _=0;_<2;_++)P(m,y,.2,p(-.2,.2),p(-.2,.2),p(.8,1.6),p(.7,1.1),gr[_],2,0,!0,.95)}const g=Ei(Fi(h/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*g*x)),v=Math.abs(Math.sin(u*9+f*1.3))*5*x,S=Math.round(Math.sin(u*6+f)*2);De(m,y),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(Bt-9),Math.round(Nt-1),18,3),i.globalAlpha=1,bl(i,p2,Bt+S,Nt-v,b,y2)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;De(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=gr[u%3+1],Dn(i,Bt,Nt,u%3?3:4)}}})};K.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){De(t,n),r.globalAlpha=1-o,r.fillStyle=Yn[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)Dn(r,Bt+Math.cos(a+s*.25)*s*3.5,Nt+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)P(t,n,.1,p(-1.2,1.2),p(-1.2,1.2),p(1.5,3),p(.4,.6),Yn[r%3],3,9,!1,.95)};const Mf=10;Se.hongo_E=(e,t,n,r,o,i)=>{g2(t,x2);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;De(t.x,t.y),e.fillStyle=Yn[1],e.fillRect(Math.round(Bt-8),Math.round(Nt-1),16,4),e.fillStyle=Yn[0],e.fillRect(Math.round(Bt-5),Math.round(Nt-2),10,2);for(let u=Mf-1;u>=0;u--){const f=t.x+s*u*.17,c=t.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/Mf);De(f,c,h);const d=7-u*.45;e.fillStyle=Yn[2],Dn(e,Bt,Nt+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",Dn(e,Bt,Nt,d),e.fillStyle="#a07040",e.fillRect(Math.round(Bt-d/4),Math.round(Nt-d/2),2,1),(u===3||u===7)&&(e.fillStyle=qn[2],e.fillRect(Math.round(Bt+d/2),Math.round(Nt-d/2-1),2,2))}De(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=qn[3],e.fillRect(Math.round(Bt-2),Math.round(Nt-6),4,7),e.fillStyle=qn[1],e.fillRect(Math.round(Bt-6),Math.round(Nt-6),4,2),e.fillRect(Math.round(Bt+2),Math.round(Nt-8),4,2),e.fillStyle=qn[0],e.fillRect(Math.round(Bt-1),Math.round(Nt-8),2,2),Math.random()<.35&&P(t.x,t.y,.05,p(-.6,.6),p(-.6,.6),p(.8,1.6),.4,Yn[Math.random()*3|0],2,7,!1,.95)};function x2(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)P(t,n,.1,p(-.5,.5),p(-.5,.5),p(.5,1),.5,a&1?Yn[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;A({type:"custom",layer:"top",dur:r,x:t,y:n,draw(a,s){const l=s*r,u=l<.18?Ei(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);De(t+h*.55,n+d*.55,0);const m=Bt,y=Nt;De(t+h*.8,n+d*.8,.55);const g=Bt,x=Nt;De(t+h*.12,n+d*.12,.75);const b=Bt,v=Nt,S=Math.min(10,Math.round(10*u));for(let _=0;_<=S;_++){const w=_/10,R=1-w,T=R*R*m+2*R*w*g+w*w*b,k=R*R*y+2*R*w*x+w*w*v,F=6-w*4;a.fillStyle=Yn[2],Dn(a,T,k+1,F+2),a.fillStyle=_&1?"#7a5030":"#6a4428",Dn(a,T,k,F),(_===4||_===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(T+(f&1?3:-5)),Math.round(k-1),2,2))}}}});for(let a=0;a<12;a++)P(t,n,.1,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3.2),p(.4,.7),Yn[a%3],3,9,!1,.95);tt(2)}K.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let f=0;f<13;f++){let c=null;for(let h=0;h<8&&!c;h++){const d=Math.random()*6.28,m=f===0?0:Math.sqrt(Math.random())*r*.88,y=t+Math.cos(d)*m,g=n+Math.sin(d)*m;a.every(x=>Math.hypot(x.x-y,x.y-g)>.7)&&(c={x:y,y:g,cs:f===0?4:Math.random()<.5?3:2,ts:m/r*.5})}c&&a.push(c)}a.sort((f,c)=>f.x+f.y-(c.x+c.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let f=0;f<s;f++){let c=1e9;for(let h=0;h<s;h++)if(h!==f){const d=Math.hypot(a[f].x-a[h].x,a[f].y-a[h].y);d<c&&(c=d,l[f]=h)}}A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(f,c){const h=c*i,d=Fi((h-.1)/.5),m=c>.88?(1-c)/.12:1;f.globalAlpha=.5*m,f.fillStyle="#e8f0d0";for(let y=0;y<s;y++){const g=l[y];if(g<0)continue;De(a[y].x,a[y].y);const x=Bt,b=Nt;De(a[g].x,a[g].y);const v=Math.hypot(Bt-x,Nt-b),S=Math.round(v/6*d);for(let _=0;_<=S;_++){const w=_*6/v;f.fillRect(Math.round(x+(Bt-x)*w),Math.round(b+(Nt-b)*w+Math.sin(_*1.7+y)*2),2,2)}}f.globalAlpha=1}});const u=(f,c,h)=>{const d=Ei(Fi((c-f.ts)/.22)),m=h>.88?(1-h)/.12:1;return Math.max(0,Math.round(f.cs*d*m))};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(f,c){const h=c*i;for(let d=0;d<s;d++){const m=a[d],y=u(m,h,c);y<=0||(De(m.x,m.y),f.fillStyle="rgba(20,10,30,0.35)",f.fillRect(Math.round(Bt-y*4),Math.round(Nt-1),y*8,3),bl(f,vf,Bt+Math.round(Math.sin(M.T*2+d)*y*.4),Nt,y,bf))}}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(f,c,h){const d=c*i;for(let m=0;m<s;m++){const y=a[m],g=u(y,d,c);g<=0||(De(y.x,y.y),f.globalAlpha=.45+.4*Math.sin(M.T*5+m*1.9),bl(f,vf,Bt+Math.round(Math.sin(M.T*2+m)*g*.4),Nt,g,bf,2),f.globalAlpha=.18,f.fillStyle=Si[1],f.fillRect(Math.round(Bt-g*4),Math.round(Nt-g*9),g*8,g*4))}for(f.globalAlpha=1,h.acc+=Math.max(0,d-h.last),h.last=d;h.acc>.085&&h.puffs<46&&c<.88;){h.acc-=.085,h.puffs++;const m=a[Math.random()*s|0];P(m.x+p(-.1,.1),m.y+p(-.1,.1),.12*m.cs*1.6,p(-.25,.25),p(-.25,.25),p(.5,1),p(.9,1.3),h.puffs&1?Si[0]:qn[1],2,.15,!0,.97)}}});for(let f=0;f<14;f++){const c=Math.random()*6.28,h=Math.random()*r*.8;P(t+Math.cos(c)*h,n+Math.sin(c)*h,.05,0,0,p(1.5,2.5),.5,Yn[f%3],3,8,!1)}tt(3)};Me.hongo=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;De(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=qn[1+s%3],r.fillRect(Math.round(Bt-2),Math.round(Nt-1),4,2)}}}),A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){De(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=mo[i],Dn(r,Bt+(i-1)*8*(.6+o),Nt-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)P(t,n,.4,p(-1,1),p(-1,1),p(.5,1.5),.6,qn[r%3],3,2,!1,.92)};const it=Math.round,kn=Math.PI*2;let se=0,te=0;function Oe(e,t,n=0){se=(e-t)*j.HW+j.OX,te=(e+t)*j.HH-n*j.ZK}function di(e,t,n,r,o){e.fillStyle=o,e.fillRect(it(t-r/2),it(n-r/2),r,r)}const Qn=e=>e<0?0:e>1?1:e,Xi=e=>1-(1-e)*(1-e),Kt={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},gn={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},we={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},pn={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},v2="#e8384a";function b2(e,t){return Math.atan2((e+t)*j.HH,(e-t)*j.HW)}function Ns(e,t,n,r,o,i,a,s,l){const u=Math.cos(r),f=Math.sin(r),c=-f,h=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,y=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(it(m-o/2),it(y-o/2),o,o),d>=2&&(e.fillStyle=a,e.fillRect(it(m+c*o-o/2),it(y+h*o-o/2),o,o));else if(d===10){e.fillStyle=s;for(let g=-3;g<=3;g++)e.fillRect(it(m+c*g*o-o/2),it(y+h*g*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(it(m-o/2),it(y-o/2),o,o)):(e.fillStyle=s,e.fillRect(it(m-o),it(y-o),o*2,o*2))}}function io(e,t,n,r,o){e.fillStyle=o;const i=it(r);e.fillRect(it(t-i),it(n-1),i*2,2),e.fillRect(it(t-1),it(n-i),2,i*2),e.fillRect(it(t-2),it(n-2),4,4)}function F0(e,t,n,r){const o=Math.max(2,it(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=pn.d,e.fillRect(it(t-o/2),it(n-i/2),o,i),o>3&&(e.fillStyle=pn.m,e.fillRect(it(t-o/2+1),it(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=pn.l,e.fillRect(it(t-1),it(n-2),2,4))}K.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=b2(t,n);A({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(a,s){Oe(r,o,.55);const l=.55*(1-Xi(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,Ns(a,se,te,i+u*l,2,u?we.l:Kt.w,u?we.m:Kt.m,pn.m,gn.d))}}),A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(a,s){Oe(r,o,.55),a.globalAlpha=1-s,io(a,se+Math.cos(i)*12,te+Math.sin(i)*12,10*(1-s)+3,we.w)}});for(let a=0;a<6;a++)P(r,o,.5,p(-.8,.8),p(-.8,.8),p(.3,1),p(.4,.6),a&1?gn.m:gn.l,3,-.5,!1,.9)};Se.mapache_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=Math.sin(i*26)*.07;yt(!0);const c=$t();for(let d=2;d<14;d++){const m=d*4,y=Math.sin(d*.9-i*18)*(2+d*.4);c.globalAlpha=(1-d/14)*.9,c.fillStyle=d&1?we.l:we.m,c.fillRect(it(n-a*m+l*y),it(r-s*m+u*y),2,2)}for(let d=4;d>=1;d--)c.globalAlpha=.5-d*.1,Ns(c,n-a*d*9,r-s*d*9,o+f*d,2,we.l,we.m,we.m,we.d);c.globalAlpha=.22,c.fillStyle=we.m,c.fillRect(it(n-10),it(r-10),20,20),c.globalAlpha=1,yt(!1),Ns(e,n,r,o+f,2,Kt.w,Kt.m,pn.m,gn.k);const h=i*4%1;h<.5&&(yt(!0),$t().globalAlpha=1,io($t(),n+a*(12-h*30),r+s*(12-h*30),4,Kt.w),yt(!1))};const Sf=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];K.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){Oe(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Ns(o,se-Math.cos(r)*8,te-Math.sin(r)*8,r+Math.PI,2,Kt.w,Kt.m,pn.m,gn.k)}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){Oe(t,n,1);const a=3,s=Xi(Qn(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=se,f=te-s,c=Sf.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let h=0;h<c;h++){const d=Sf[h],m=i>.6?(h&1?1:-1)*(i-.6)*70:0;for(let y=0;y<d.length;y++){const g=d[y];g!=="."&&(o.fillStyle=g==="X"?we.l:g==="M"?we.d:g==="e"?we.w:we.m,o.fillRect(it(u+(y-6)*a+m-a/2),it(f+(h-4)*a*l-a/2),a,Math.max(1,it(a*l))))}}}});for(let o=0;o<8;o++)P(t,n,.5,p(-1.8,1.8),p(-1.8,1.8),p(.8,2),p(.3,.5),o&1?Kt.l:Kt.m,2,6,!0,.9);for(let o=0;o<6;o++)P(t+p(-.2,.2),n+p(-.2,.2),.4,0,0,p(.6,1.2),p(.6,.9),o&1?we.l:we.m,2,-.3,!0);tt(2)};function E0(e,t,n,r,o,i,a,s){const l=Math.max(2,it(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,c=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,h=n-o/2+u*2;if(c<1)continue;e.globalAlpha=s,e.fillStyle=pn.d,e.fillRect(it(t-c-2),it(h),it(c*2+4),2),e.globalAlpha=s*.85,e.fillStyle=Kt.m,e.fillRect(it(t-c),it(h),it(c*2),2);const d=t-c+(a*2.2-.6)*r-f*o*.25;d>t-c&&d<t+c-3&&(e.globalAlpha=s,e.fillStyle=Kt.w,e.fillRect(it(d),it(h),3,2))}e.globalAlpha=s,e.fillStyle=pn.l,e.fillRect(it(t-2),it(n-o/2-3),4,3)}function k0(e,t,n,r,o,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<o.length;u++)for(let f=0;f<a;f++){const c=l+u*17+f*3,h=(at(c)-.5)*.7,d=(at(c+1)-.5)*.7,m=Qn(s*(.85+at(c+2)*.3));Oe(t+(o[u]+h-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const y=(M.T*20+f|0)&1;e.fillStyle=y?Kt.w:Kt.m,e.fillRect(it(se-2),it(te-1),y?4:2,y?2:4),e.fillStyle=Kt.d,e.fillRect(it(se+(y?2:0)),it(te+(y?0:3)),2,2)}}function U0(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*kn;r[i]=e+Math.cos(a)*1.1,o[i]=t+Math.sin(a)*1.1}return{TX:r,TY:o}}function L0(e,t,n){A({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){Oe(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*kn+o*2,l=6+o*22;io(r,se+Math.cos(s)*l,te+Math.sin(s)*l*.8,4*(1-o)+2,a&1?Kt.l:we.l)}o<.3&&io(r,se,te,16*(1-o/.3)+3,Kt.w)}}}),A({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)P(e[a],t[a],.4,p(-.8,.8),p(-.8,.8),p(.3,.9),p(.4,.7),s&1?gn.l:gn.m,3,-.4,!1,.9)}}})}K.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=U0(t,n,2),a=.32,s=.45,l=.78;A({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const c=f*(s+.02),h=Xi(Qn(c/.18));if(Oe(t,n,.75),E0(u,se,te,30,52*h,!0,Qn(c/.3),.95),c>a){u.globalAlpha=1,u.fillStyle=Kt.w;const d=Qn((c-a)/(s-a)),m=se+4,y=te-6;for(let g=0;g<6;g++){let x=at(r+g)*kn,b=m,v=y;for(let S=0;S<it(6*d);S++)x+=(at(r+g*7+S)-.5)*.9,b+=Math.cos(x)*3,v+=Math.sin(x)*3,u.fillRect(it(b),it(v),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const c=f*(l+.05);c>=s&&c<s+.08&&(Oe(t,n,.75),u.globalAlpha=1-(c-s)/.08,u.fillStyle=Kt.w,u.fillRect(it(se-22),it(te-30),44,60)),u.globalAlpha=1,k0(u,t,n,.75,o,i,6,(c-s)/(l-s),r)}}),L0(o,i,l);for(let u=0;u<8;u++)P(t,n,.4,p(-1,1),p(-1,1),p(.3,.8),p(.5,.8),u&1?gn.m:gn.d,3,-.3,!1,.9)};K.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,a=(s,l,u,f,c,h,d)=>{const m=12*f,y=20*f;for(let g=0;g<18;g++){const x=g/18*kn+c;di(s,l+Math.cos(x)*m,u+Math.sin(x)*y,g%3?2:3,g&1?h:d)}for(let g=0;g<8;g++){const x=g/8*kn-c*1.7,b=.45+.25*Math.sin(c*2+g);di(s,l+Math.cos(x)*m*b,u+Math.sin(x)*y*b,2,d)}};A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?Xi(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,c=M.T*8;Oe(t,n,.55);const h=se,d=te;Oe(r,o,.55);const m=se,y=te;f>0&&(s.globalAlpha=1,a(s,h,d,f,c,Kt.l,Kt.d),a(s,m,y,f,-c,pn.l,pn.d));const g=Qn((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,v=x?pn.m:Kt.m,S=x?1-g:g;s.globalAlpha=.45*(1-Qn((u-.5)/.3));for(let _=0;_<=20;_++){const w=_/20;_%2||di(s,h+(m-h)*w,d+(y-d)*w-Math.sin(w*Math.PI)*b,2,v)}if(g>0&&g<1)for(let _=0;_<6;_++){const w=x?S+_*.03:S-_*.03;w<0||w>1||(s.globalAlpha=1-_/6,di(s,h+(m-h)*w,d+(y-d)*w-Math.sin(w*Math.PI)*b,_?3:5,_?v:Kt.w))}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;Oe(t,n,.55);const f=se,c=te;Oe(r,o,.4);const h=se,d=te,m=(f+h)/2,y=(c+d)/2-58,g=Qn(u/i),x=m+(h-m)*g,b=y+(d-y)*g-Math.sin(g*Math.PI)*30;s.globalAlpha=g>.85?(1-g)/.15:1,F0(s,x,b,M.T*26)}});for(const[s,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*kn;P(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,p(0,.6),.4,s===t?Kt.l:pn.l,2,0,!0)}};const M2=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];K.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=U0(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],c=new Float32Array(a);A({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){Oe(t,n,0);const b=se,v=te;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=pn.l;for(let S=0;S<60;S++){const _=S*6,w=70-S*.9;g.fillRect(it(b-w),it(v-_-6),it(w*2),6)}g.globalAlpha*=2,g.fillStyle=Kt.w;for(let S=0;S<18;S+=2){const _=Math.sqrt(1-S/18*(S/18))*74;g.fillRect(it(b-_),it(v-9+S),it(_*2),2)}}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(g,x){const b=x*l,v=Xi(Qn(b/.3)),S=b*1.2+b*b*4.5;for(let _=0;_<a;_++)c[_]=_/a*kn+S;f.sort((_,w)=>Math.sin(c[_])-Math.sin(c[w]));for(const _ of f){const w=c[_];Oe(t+Math.cos(w)*s,n+Math.sin(w)*s,0);const R=.45+.55*Math.abs(Math.sin(w+.8));E0(g,se,te-22*v,it(14*R)+2,44*v,!1,(b*1.6+_*.13)%1,.9)}}}),A({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const b=x*(u+.05);if(b<l){const v=b*14|0,S=v%a,_=S/a*kn+b*1.2+b*b*4.5;Oe(t+Math.cos(_)*s,n+Math.sin(_)*s,.6),g.globalAlpha=.9,io(g,se,te,9,Kt.w)}else{if(b<l+.1){g.globalAlpha=1-(b-l)/.1,Oe(t,n,.4),g.fillStyle=Kt.w;for(let v=-14;v<14;v+=2){const S=Math.sqrt(1-v/14*(v/14))*90;g.fillRect(it(se-S),it(te+v*2),it(S*2),4)}}g.globalAlpha=1,k0(g,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),L0(o,i,u);const h=16,d=new Float32Array(h),m=new Float32Array(h),y=new Float32Array(h);for(let g=0;g<h;g++){const x=Math.random()*kn,b=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*b,m[g]=n+Math.sin(x)*b,y[g]=p(0,.35)}A({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(g,x){const b=x*1.3;for(let v=0;v<h;v++){const S=(b-y[v])/.95;if(S<0||S>1)continue;Oe(d[v],m[v],3.2*(1-S));const _=Math.cos(M.T*9+v*1.7),w=se+Math.sin(M.T*4+v)*8,R=M2[v&3],T=(v&3)<2?v2:gn.k,k=2,F=Math.max(.2,Math.abs(_));if(g.globalAlpha=S>.8?(1-S)/.2:1,g.fillStyle="#fffaf0",g.fillRect(it(w-7*F),it(te-8),it(14*F)||1,16),F>.45){g.fillStyle=T;for(let U=0;U<5;U++)for(let B=0;B<5;B++)R[U][B]==="X"&&g.fillRect(it(w+(B-2.5)*k*F),it(te-5+U*k),Math.max(1,it(k*F)),k)}}}});for(let g=0;g<20;g++){const x=Math.random()*kn;P(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,p(.5,1.5),p(.5,.9),g&1?gn.l:gn.m,3,-.4,!1,.92)}A({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){b.fired||(b.fired=!0,tt(5))}})};function _f(e,t,n,r,o,i,a,s){const l=Math.cos(r),u=Math.sin(r),f=-u,c=l,h=it(10*i);for(let d=0;d<=h;d++){const m=d/10-.5,y=Math.sin(m*kn)*o*.18;di(e,t+l*m*o+f*y,n+u*m*o*.8+c*y,d===h?4:3-Math.abs(m)*2,d===h?s:a)}}Me.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+p(-.3,.3);if(A({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,a){Oe(t,n,.5);const s=Qn(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,_f(i,se,te,o,34,s,Kt.m,Kt.w),r&&_f(i,se,te,o+1.6,40,s,we.m,we.w),a>.2&&(io(i,se+12,te-10,4*(1-a)+1,Kt.w),io(i,se-10,te+6,3*(1-a)+1,Kt.l))}}),r){A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){Oe(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,F0(i,se+a*18,te,M.T*30)}});for(let i=0;i<6;i++)P(t,n,.5,p(-1,1),p(-1,1),p(.5,1.4),.5,i&1?we.l:we.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)P(t,n,.2,p(-.8,.8),p(-.8,.8),p(.2,.6),.35,gn.l,3,0,!1,.9)};const bo="#1e0f30",Ro="#4b2272",mr="#8b3cd2",pr="#d6b4ff",ar="#f6f2ff",$s="#ff2f5f",D0="#2c1446",_e=Math.round,Qr=Math.PI*2,S2=[0,1,2,1];function zn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(_e(t),_e(n),r,o)}function _2(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(_e(t+(r-t)*l/s-i/2),_e(n+(o-n)*l/s-i/2),i,i)}function Ml(e,t,n,r,o,i,a,s){t=_e(t),n=_e(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=a,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=s,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function Nr(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,_e(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,y=_e(n+h*s);if(Math.abs(m)>=f){e.fillRect(_e(t-d),y,_e(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(_e(t-d),y,_e(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(_e(t+v),y,_e(d-v),c)}}}function Sl(e,t,n,r,o){const[i,a]=C(t,n),s=r*j.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(_e(i-f),_e(a+u),_e(f*2),2)}}const X0=e=>{const t=ft(e);return t&&!t.dead&&!Te(t)?t:null},w2=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},_l=(e,t=16)=>S2[((M.T*t|0)+e)%4];Me.murcielago=e=>{const t=p(0,Qr),n=e.big?17:13;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x,e.y,.5);r.globalAlpha=1-o,Nr(r,i,a,n+2,t+o*1.4,.45,mr),Nr(r,i,a,n,t+o*1.4,.52,ar)}});for(let r=0;r<5;r++)P(e.x,e.y,.5,p(-2.5,2.5),p(-2.5,2.5),p(0,1),.28,r%2?pr:mr,2,0,!0,.9)};K.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;A({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const m=d/.32,y=.3+m*(o-.3),g=Math.max(6,Math.ceil(i*2*y*7)),x=h%2?mr:pr,b=h%2?3:2;u.globalAlpha=(1-m)*.95;for(let v=0;v<=g;v++){const S=r-i+2*i*v/g,_=Math.sin(v*1.7+h*2.3+c*40)*.07*(1+m),[w,R]=C(a+Math.cos(S)*(y+_),s+Math.sin(S)*(y+_),l-m*.35);zn(u,w-b/2,R-b/2,b,b,x),v===g>>1&&zn(u,w-1,R-1,2,2,ar)}}}}),A({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[y,g]=C(a+Math.cos(h)*m,s+Math.sin(h)*m);zn(u,y-1,g-1,3,2,Ro)}}}});for(let u=0;u<14;u++){const f=r+p(-i,i),c=p(.6,o);P(a+Math.cos(f)*c,s+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,p(0,.5),.5,u%3?pr:ar,2,0,!0,.92)}tt(2)};K.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*Qr+p(-.2,.2),sp:p(1.2,2.4),up:p(.8,1.8),ph:Math.random()*4|0}));A({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),Sl(r,e.x,e.y,.75*(1-o*.6),bo),r.globalAlpha=.8*(1-o),Sl(r,e.x,e.y,.3*(1-o),D0)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=C(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);Ml(r,l,u,2,_l(a.ph),bo,Ro,$s)}}}),A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=X0(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=C(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=M.T*5+s*Math.PI;Ml(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,_l(s*2,20),Ro,mr,$s)}r.globalAlpha=.35;for(let s=0;s<4;s++)zn(r,i-8+s*5,a+26+(M.T*30+s*7)%8,2,2,bo)}});for(let r=0;r<16;r++)P(e.x+p(-.3,.3),e.y+p(-.3,.3),p(.2,.8),p(-.5,.5),p(-.5,.5),p(1,2.2),p(.5,.9),r%2?bo:Ro,3,0,!1,.95);for(let r=0;r<6;r++)P(e.x+p(-.3,.3),e.y+p(-.3,.3),p(.4,1),0,0,p(.5,1.2),.5,pr,2,0,!0)};K.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=w2(e),i=o&&o.radius||1.4,a=p(0,Qr);let s=!1;A({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=C(t,n);if(c<r){l.globalAlpha=.5,Nr(l,h,d,_e(i*26*(1.4-.4*c/r)),a+c*6,.45,Ro,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),Nr(l,h,d+2,_e(i*30),a+Math.PI*1.1,.42,D0,.5)}}),A({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const c=u*f.dur;if(c<r){const b=X0(e.uid);if(!b)return;const[v,S]=C(b.x,b.y,.7),[_,w]=C(t,n,.3),R=Math.hypot(_-v,w-S)||1,T=(_-v)/R,k=(w-S)/R;l.globalAlpha=.75;for(let F=0;F<4;F++){const U=(F-1.5)*7,B=18+F%2*12;_2(l,v-k*U-T*8,S+T*U-k*8,v-k*U-T*(8+B),S+T*U-k*(8+B),2,F%2?pr:mr)}return}const h=(c-r)/.5;if(!s){s=!0,tt(6);for(let b=0;b<22;b++){const v=p(0,Qr),S=p(2,5);P(t,n,.45,Math.cos(v)*S,Math.sin(v)*S,p(.3,1.5),p(.3,.55),b%3?pr:b%2?ar:mr,2,3,!0,.9)}}const d=Math.min(1,h/.45),[m,y]=C(t,n,.45),g=_e(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),Nr(l,m,y,g+3,x,.42,mr,.85),Nr(l,m,y,g,x,.48,ar,.85),l.globalAlpha*=.35,Nr(l,m,y,g,x-.6,.48,pr,.85)}})};K.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*Qr,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),h=s.p+l*s.w;return[e.x+Math.cos(h)*c,e.y+Math.sin(h)*c,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:p(.3,n-.4),x:e.x+p(-1,1)*t*.6,y:e.y+p(-1,1)*t*.6}));A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,Sl(s,e.x,e.y,t,bo),s.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*Qr+u*.8,[d,m]=C(e.x+Math.cos(h)*t,e.y+Math.sin(h)*t);zn(s,d-1,m-1,c%2?2:3,2,c%2?pr:mr)}s.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,u),[m,y]=C(h,d);zn(s,m-4,y-1,8,2,"#000000")}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of o){const[c,h,d,m]=i(f,u),[y,g]=C(c,h,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),Ml(s,y,g,f.s,_l(f.ph,18),bo,Ro,$s)}}}),A({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=C(f.x,f.y,.55),m=_e(4-c*3);s.globalAlpha=1-c;for(const y of[-1,1]){const g=h+y*4;zn(s,g-2,d-6-m,4,2,ar),zn(s,g-1,d-4-m,2,3,ar),zn(s,g-2,d+4+m,4,2,ar),zn(s,g-1,d+1+m,2,3,ar)}zn(s,h-1,d-1,3,3,$s)}}});for(let s=0;s<20;s++){const l=p(0,Qr),u=t*p(.3,1);P(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,p(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,p(0,.6),p(.6,1.1),s%3?mr:pr,2,0,!0,.97)}tt(5)};const mt=Math.round,Kn=Math.PI*2,ut={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},A2=e=>e*j.HW*Math.SQRT2;function mi(e,t,n,r){r=Math.max(1,mt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(mt(t[0]+(n[0]-t[0])*s/i-a),mt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Ws(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=mt(n-a*o/2),u=mt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function G0(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+p(-.35,.35),a=t*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function B0(e,t,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=C(t+r[s][0],n+r[s][1]),f=C(t+r[s+1][0],n+r[s+1][1]);mi(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const C2=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],T2=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],wf=["t.t.t",".....",".ppp.","ppppp",".ppp."];K.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,m)=>{const y=3+m*2;for(let g=0;g<y;g++){const x=s+(y===1?0:(g/(y-1)*2-1)*a*.8)+p(-.06,.06),b=d*i/2.5;c.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:p(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>G0(s+d*a,i*p(.75,1)));A({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const y=m*.34,g=Math.min(1,y/f),x=1.5*(1-g*g),[b,v]=C(l,u,x+.25);if(d.globalAlpha=y<.22?1:Math.max(0,1-(y-.22)/.12),Ws(d,C2,b,v,3,{h:ut.wood,d:ut.i0,b:ut.brass,l:ut.i4,i:ut.i2}),g<1){d.globalAlpha=.5,d.fillStyle=ut.i3;for(let S=1;S<=3;S++)d.fillRect(mt(b-15+S*7),mt(v-26-S*8),2,8)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[y,g]=C(l,u,.1),x=mt(26*(1-m))+4;d.fillStyle=ut.amberL,d.fillRect(y-x,g-2,x*2,4),d.fillRect(y-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(y-5,g-3,10,6)}}),A({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,y){const g=m*1.15;if(g>=f&&!y.hit){y.hit=!0,tt(7);for(let v=0;v<14;v++){const S=s+p(-a,a),_=p(1,3);P(l,u,.1,Math.cos(S)*_,Math.sin(S)*_,p(.3,1),p(.6,.9),v%2?ut.dust:ut.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=ut.e0;for(const v of h)B0(d,t,n,v,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const v=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=ut.dust;for(let S=0;S<=16;S++){const _=s-a+2*a*S/16,[w,R]=C(t+Math.cos(_)*v,n+Math.sin(_)*v);d.fillRect(mt(w)-3,mt(R)-2,6,4)}}for(const v of c){const S=(g-v.t0)/.5;if(S<0||S>1)continue;v.done||(v.done=!0,P(v.x,v.y,.2,p(-1,1),p(-1,1),p(3,5),p(.7,1),[ut.e1,ut.e2,ut.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const _=mt(v.h*(S<.2?S/.2:1-(S-.2)/.8)),[w,R]=C(v.x,v.y);d.globalAlpha=1,d.fillStyle=ut.e0,d.fillRect(mt(w-v.w/2-1),mt(R-2),v.w+2,4),d.fillStyle=ut.e1,d.fillRect(mt(w-v.w/2),mt(R-_),v.w,_),d.fillStyle=ut.e3,d.fillRect(mt(w-v.w/2),mt(R-_-5),v.w,5),d.fillStyle=ut.e2,d.fillRect(mt(w-v.w/2),mt(R-_-1),v.w,1)}}})};function es(e,t,n,r,o,i){const a=Math.cos(i);return[e+n*Math.cos(o)*a,t+n*.5*Math.sin(o)*a-r*Math.sin(i)]}K.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=ft(t),[l,u]=C(s?s.x:r,s?s.y:o,.6),f=mt(18*(1-a))+3;i.fillStyle=ut.amber;for(let c=0;c<8;c++){const h=c/8*Kn;i.fillRect(mt(l+Math.cos(h)*f*1.4)-2,mt(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Kn;P(e.x,e.y,.6,Math.cos(a)*p(1,3),Math.sin(a)*p(1,3),p(1.5,3),.4,i%2?ut.brassL:ut.amber,2,9,!0)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=ft(t),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let w=0;w<16;w++){const R=Math.random()*Kn,T=p(1,2.5);P(r+Math.cos(R)*.4,o+Math.sin(R)*.4,p(.2,.8),Math.cos(R)*T,Math.sin(R)*T,p(1.5,3.5),.7,[ut.i1,ut.i2,ut.i3][w%3],4,10,!1,.95)}for(let w=0;w<6;w++)P(r,o,.6,p(-2,2),p(-2,2),p(1,3),.35,ut.brassL,2,6,!0);s.t=1e9;return}const c=l&&l.scale||1,[h,d]=C(r,o),m=mt(40*c),y=mt(56*c),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!s.done){s.done=!0;const[w,R]=[r,o];for(let T=0;T<6;T++)P(w,R,.75*c,p(-1.5,1.5),p(-1.5,1.5),p(.5,2),.3,ut.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=ut.i2;const v=y*Math.sin(x);for(let w=0;w<v;w+=3){const R=m*Math.sqrt(Math.max(0,1-(w/y)**2));i.fillRect(mt(h-R),mt(d-w-3),mt(R*2),3)}for(let w=0;w<m*.5;w+=3){const R=m*Math.sqrt(Math.max(0,1-(w/(m*.5))**2));i.fillRect(mt(h-R),mt(d+w),mt(R*2),3)}for(let w=0;w<32;w++){const R=w/32*Kn,T=es(h,d,m,y,R,0),k=Math.sin(R)>0;i.globalAlpha=k?.95:.4,i.fillStyle=k?ut.i3:ut.i1,i.fillRect(mt(T[0])-2,mt(T[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=ut.i2;for(const w of[.12,.3,.5,.7,.88]){const R=Math.PI*w;for(let T=0;T<=x;T+=.16){const k=es(h,d,m,y,R,T);i.fillRect(mt(k[0])-1,mt(k[1])-1,2,3)}}const S=u*14|0;let _=0;for(const w of[.42,.9])if(!(w>x))for(let R=0;R<=14;R++){const T=Math.PI*R/14,k=es(h,d,m,y,T,w);i.globalAlpha=.9,i.fillStyle=ut.i3,i.fillRect(mt(k[0])-2,mt(k[1])-1,4,2),R%2===0&&(_++,i.globalAlpha=1,i.fillStyle=_%16===S%16?"#ffffff":ut.brass,i.fillRect(mt(k[0])-1,mt(k[1])-3,3,3))}if(g>=1){const w=es(h,d,m,y,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=ut.i0,i.fillRect(mt(w[0])-5,mt(w[1])-4,10,6),i.fillStyle=ut.brass,i.fillRect(mt(w[0])-4,mt(w[1])-3,8,4),i.fillStyle=ut.brassL,i.fillRect(mt(w[0])-3,mt(w[1])-3,3,1)}}})};K.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=C(n,r),c=C(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,m=(c[1]-f[1])/h,y=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const b=x/(g+1),v=x%2?1:-1;y.push({s:b,x:n+s*b-l/u*.17*v,y:r+l*b+s/u*.17*v})}A({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,b){const v=b*(a+2);for(const S of y){const _=v-S.s*a;if(_<0)continue;const[w,R]=C(S.x,S.y);x.globalAlpha=Math.max(0,.7*(1-_/2)),Ws(x,wf,w,R,3,{t:ut.e0,p:ut.e0}),x.globalAlpha*=.6,Ws(x,wf,w-1,R-1,3,{p:ut.e1})}}}),A({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,b,v){const S=b*(a+.3),_=ft(t),w=Math.min(1,S/a),R=_&&S<a?_.x:n+s*w,T=_&&S<a?_.y:r+l*w;if(S<a){if(v.n=v.n||0,v.n<30){v.n+=2;for(let bt=0;bt<2;bt++)P(R+p(-.2,.2),T+p(-.2,.2),.1,-s/u*p(.5,1.5)+p(-.5,.5),-l/u*p(.5,1.5)+p(-.5,.5),p(.4,1.2),p(.5,.8),bt?ut.e2:ut.dust,5,-.3,!1,.9)}const[k,F]=C(R,T,.45),U=k+d*26,B=F+m*26,Z=-m,lt=d;for(let bt=0;bt<3;bt++){const I=bt*8+S*120%8;x.globalAlpha=.9-bt*.25,x.fillStyle=bt?ut.dust:"#ffffff";const z=[U-d*I,B-m*I];mi(x,z,[z[0]-d*10+Z*13,z[1]-m*10+lt*13],3),mi(x,z,[z[0]-d*10-Z*13,z[1]-m*10-lt*13],3)}x.globalAlpha=.6,x.fillStyle=ut.i3;for(let bt=0;bt<4;bt++){const I=(bt-1.5)*9,z=14+(bt*7+S*200)%12;mi(x,[k-d*20+Z*I,F-m*20+lt*I],[k-d*(20+z)+Z*I,F-m*(20+z)+lt*I],2)}}else{if(!v.end){v.end=!0,tt(5);for(let B=0;B<14;B++){const Z=Math.random()*Kn,lt=p(1.5,3);P(o,i,.15,Math.cos(Z)*lt,Math.sin(Z)*lt,p(.8,2),.6,B%2?ut.dust:ut.e3,5,2,!1,.9)}}const k=(S-a)/.3,[F,U]=C(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-k;for(let B=0;B<8;B++){const Z=B/8*Kn+.2,lt=6+k*14,bt=lt+10*(1-k);x.fillStyle=B%2?ut.amberL:"#ffffff",mi(x,[F+Math.cos(Z)*lt,U+Math.sin(Z)*lt*.7],[F+Math.cos(Z)*bt,U+Math.sin(Z)*bt*.7],4)}}}})};K.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(a,s)=>G0(s/8*Kn+p(-.2,.2),o*p(.45,.65),5));tt(10),A({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=C(n,r),f=s*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=A2(o)*(.15+.95*(1-(1-h)*(1-h))),m=5-c;a.globalAlpha=1-h;for(let y=0;y<56;y++){if(y%7>=5)continue;const g=y/56*Kn+c*.2,x=l+Math.cos(g)*d,b=u+Math.sin(g)*d*.5;a.fillStyle=c===0?ut.amberL:ut.amber,a.fillRect(mt(x-m/2),mt(b-m/2),m,m),y%7===2&&(a.fillStyle=ut.amberD,a.fillRect(mt(x*.94+l*.06-1),mt(b*.94+u*.06-1),3,3))}}}}),A({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=ut.e0;for(const l of i)B0(a,n,r,l,Math.min(1,s*7))}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(a,s){const l=ft(t),u=l?l.x:n,f=l?l.y:r,c=l&&l.scale||1,[h,d]=C(u,f,1.7*c+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),Ws(a,T2,h,d,m,{e:ut.amberD,i:ut.amberL,h:ut.amber,s:ut.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let y=0;y<3;y++){const g=34+(s*90+y*22)%66,x=1-(s*90+y*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=ut.amberL;for(let b=-.7;b<=.71;b+=.175){const v=Math.cos(b)*g,S=Math.sin(b)*g*.8;a.fillRect(mt(h+v)-2,mt(d+6+S)-2,4,4),a.fillRect(mt(h-v)-2,mt(d+6+S)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Kn,l=Math.sqrt(Math.random())*o*.9;P(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,p(2,4),p(.5,.8),[ut.e1,ut.e2,ut.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Kn,l=p(.3,1.2);P(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,p(.8,1.6),p(.8,1.2),ut.amberL,2,-.3,!0,.98)}};Me.oso=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.08),s=mt(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=ut.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=ut.dust,r.fillRect(i-s,a-1,mt(s*.7),3),r.fillRect(i+s-mt(s*.7),a-1,mt(s*.7),3);const[u,f]=C(t,n,.5),c=mt(12*(1-o));r.fillStyle=ut.i3,r.fillRect(u-c-4,f-3,8,6),r.fillRect(u+c-4,f-3,8,6),r.fillStyle=ut.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)P(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(2,3.5),.3,ut.brassL,2,12,!0);for(let r=0;r<3;r++)P(t,n,.05,p(-1,1),p(-1,1),p(1,2),.45,ut.e2,3,10,!1)};const Cn="#ffffff",fn="#e6eeff",Zr="#bfe9ff",Hs="#7fdcf4",R2="#3a9ab8",Pe="#fff0b4",Af="#efe0b8",Cf="#c8a878",P2="#34408a",Tf="#a9bfdc",Lt=Math.round,Hr=Math.PI*2;function ie(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Lt(t),Lt(n),r,o)}function wl(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=Lt(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Lt(t-a),Lt(n+i),a*2,2)}}function _i(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Lt(2*s));e.fillStyle=a;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,y=Lt(n+h*s);if(Math.abs(m)>=f){e.fillRect(Lt(t-d),y,Lt(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(Lt(t-d),y,Lt(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(Lt(t+v),y,Lt(d-v),c)}}}function I2(e,t,n,r,o,i,a){t=Lt(t),n=Lt(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*s,n-2*r,r*s,2*r),e.fillRect(t+u,n-2*r,r*s,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=a,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function Rf(e,t,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const c=Lt(t+u*i-f),h=Lt(t+u*i+f),d=Lt(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(c,d,h-c,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(c,d,2,2),e.fillRect(h-2,d,2,2)}}function z2(e,t,n,r,o){t=Lt(t),n=Lt(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const N0=e=>{const t=ft(e);return t&&!t.dead&&!Te(t)?t:null},O2=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},$0=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Se.polilla_A=(e,t,n,r,o,i)=>{yt(!0);const a=$t(),s=.65+.35*Math.sin(i*20),l=Lt(5+s*3);a.globalAlpha=s,ie(a,n-l,r-1,l*2,2,Hs),ie(a,n-1,r-l,2,l*2,Hs),a.globalAlpha=1,ie(a,n-2,r-2,4,4,Cn);const u=i*14;ie(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,Pe),ie(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,Pe),yt(!1)};Me.polilla=e=>{A({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.5),i=Lt(10*(1-n))+2;t.globalAlpha=1-n,ie(t,r-i,o-1,i*2,2,fn),ie(t,r-1,o-i,2,i*2,fn),ie(t,r-2,o-2,4,4,Cn)}});for(let t=0;t<5;t++)P(e.x,e.y,.5,p(-1,1),p(-1,1),p(.2,.8),.6,t%2?Pe:Zr,2,.4,!0,.9)};Se.polilla_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;n=Lt(n),r=Lt(r),yt(!0);const l=$t(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),yt(!1),wl(e,n,r,10,R2),wl(e,n,r,9,fn),_i(e,n,r,9,Math.PI*.85,.55,Tf);for(let h=0;h<3;h++){const d=i*2+h*2.1;ie(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,Tf)}ie(e,n-4,r-5,2,2,Cn);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,m=14+h*10;e.globalAlpha=1-d,z2(e,n-f*m,r-c*m-6-d*14,h<2?1:2,h%2?Pe:fn)}e.globalAlpha=1,Math.random()<.4&&P(t.x,t.y,s,p(-.3,.3),p(-.3,.3),-.4,.6,Math.random()<.5?Pe:fn,2,.5,!0,.9)};K.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x+t*.4,e.y+n*.4,.75),s=Lt(14*(1-o))+2,l=Lt(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)ie(r,i-s,a-1,s*2,2,Pe),ie(r,i-1,a-s,2,s*2,Pe);else for(let u=1;u<=l;u+=2)ie(r,i+u,a+u,2,2,Pe),ie(r,i-u-2,a+u,2,2,Pe),ie(r,i+u,a-u-2,2,2,Pe),ie(r,i-u-2,a-u-2,2,2,Pe);ie(r,i-2,a-2,4,4,Cn);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,c=16+u;ie(r,i+Math.cos(f)*c-1,a+Math.sin(f)*c*.6-1,2,2,u%2?Pe:fn)}}});for(let r=0;r<10;r++)P(e.x+t*.4,e.y+n*.4,.75,t*p(.5,1.5)+p(-.4,.4),n*p(.5,1.5)+p(-.4,.4),p(0,.4),p(.6,1),r%2?Pe:fn,2,.6,!0,.9)};K.polilla_W=e=>{if(e.type==="heal"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),_i(n,o,i,7,-.6,.5,fn);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;ie(n,o-10+a*10,i+s*50,2,4,a%2?Zr:Cn)}}});for(let n=0;n<8;n++)P(e.x+p(-.35,.35),e.y+p(-.35,.35),p(1,1.6),0,0,-p(.6,1.2),p(.7,1.1),n%2?fn:Pe,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=N0(e.uid),i=o?o.x:e.x,a=o?o.y:e.y,[s,l]=C(i,a,2.2),u=r*1.2,f=Lt(15*$0(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),_i(n,s,l,f+2,-.7,.5,Hs),_i(n,s,l,f,-.7,.55,Cn);for(let c=0;c<5;c++){const h=M.T*2+c*1.26;(M.T*6+c)%2<1&&ie(n,s+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,Pe)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=t*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*Hr,[f,c]=C(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);ie(n,f-1,c-1,l%3?2:3,2,l%2?Zr:Cn)}}}});for(let n=0;n<40;n++){const r=p(0,Hr),o=Math.sqrt(Math.random())*t*.9;P(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,p(2.2,3),p(-.15,.15),p(-.15,.15),-p(1.2,2),p(1.1,1.6),[fn,Zr,Cn,Pe][n%4],2,.4,!0,.99)}};K.polilla_E=e=>{const t=e.dur||3;A({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=N0(e.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?$0(a/.22):1,u=.85+.15*Math.sin(M.T*8),[f,c]=C(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),y=c-9-3*l,g=f+d*(7+10*l),x=c+9;Rf(n,g,x,10*l*u,8,.4*d,Cf,Af,s),Rf(n,m,y,15*l*u,13,-.45*d,Af,Cf,s),n.globalAlpha=.9*s,l>.5&&(wl(n,m+d*2,y-1,4,P2),ie(n,m+d*2-1,y-2,2,2,Pe),ie(n,m+d*2-2,y-3,1,1,Cn))}yt(!0);const h=$t();for(let d=0;d<6;d++){const m=d%2?1:-1,y=(M.T*3+d*.37)%1;y>.3||(h.globalAlpha=(1-y/.3)*s,ie(h,f+m*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,Cn))}yt(!1)}});for(let n=0;n<18;n++){const r=p(0,Hr),o=p(1,2.2);P(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,p(.3,1.2),p(.5,.9),n%3?Pe:fn,2,.5,!0,.92)}};K.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=O2(e),r=n&&n.dur||4,o=10,i=t*j.HW*Math.SQRT2,a=t*j.HH*Math.SQRT2,s=Array.from({length:o},(f,c)=>({ox:p(-.6,.6)*t,oy:p(-.6,.6)*t,w:p(.8,1.6),p:p(0,Hr),z:p(.6,2.4),ph:c})),l=Array.from({length:7},(f,c)=>({o:(c/6-.5)*1.7,w:Lt(p(8,26)),p:p(0,Hr)}));let u=0;A({type:"custom",layer:"ground",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,h/.25,(r-h)/.4),[m,y]=C(e.x,e.y);f.globalAlpha=.13*d,f.fillStyle=Hs;for(let g=-a;g<=a;g+=2){const x=i*Math.sqrt(Math.max(0,1-g*g/(a*a)));f.fillRect(Lt(m-x),Lt(y+g),Lt(x*2),2)}f.globalAlpha=.4*d,_i(f,m,y,Lt(t*30),-.5,.5,Zr,.5),f.globalAlpha=.85*d;for(let g=0;g<40;g++){const x=g/40*Hr+h*.35,[b,v]=C(e.x+Math.cos(x)*t,e.y+Math.sin(x)*t);ie(f,b-1,v-1,2,2,g%4?Zr:Cn)}}}),A({type:"custom",layer:"top",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,(r-h)/.4),m=Math.min(1,h/.25),[y,g]=C(e.x,e.y),x=330,b=f.createLinearGradient(0,g-x,0,g);b.addColorStop(0,"rgba(160,230,255,0)"),b.addColorStop(1,"rgba(160,230,255,0.14)"),f.globalAlpha=d,f.fillStyle=b,f.fillRect(Lt(y-i*m),Lt(g-x),Lt(i*2*m),x);for(const v of l){const S=y+v.o*i*m,_=(S-y)/i,w=g-a*Math.sqrt(Math.max(0,1-_*_));f.globalAlpha=d*(.07+.06*Math.sin(M.T*3+v.p))*(h<.25?2:1),ie(f,S-v.w/2,g-x,v.w,Lt(w-(g-x)),fn)}for(const v of s){const S=h*v.w+v.p,_=e.x+v.ox+Math.cos(S)*.6+Math.sin(S*2.3)*.2,w=e.y+v.oy+Math.sin(S)*.6,[R,T]=C(_,w,v.z+Math.sin(h*1.7+v.p)*.4);f.globalAlpha=d*Math.min(1,h/.4),I2(f,R,T,2,((M.T*14|0)+v.ph)%4,v.ph%3?fn:Cn,Zr)}if(u<50&&Math.random()<.3){u++;const v=p(0,Hr),S=Math.sqrt(Math.random())*t;P(e.x+Math.cos(v)*S,e.y+Math.sin(v)*S,p(2.5,3.5),0,0,-p(.8,1.4),p(1.5,2.2),u%3?fn:Pe,2,0,!0,.99)}}}),tt(2)};const et=Math.round,Be=Math.PI*2,wr=e=>e*j.HW*Math.SQRT2,Q={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},bu=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function W0(e,t,n,r){r=Math.max(1,et(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(et(t[0]+(n[0]-t[0])*s/i-a),et(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Xe(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(et(t-l),et(n+a),Math.max(1,et(l*2)),i)}}function lr(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Be;e.fillRect(et(t+Math.cos(u)*r-i/2),et(n+Math.sin(u)*r*.5-i/2),i,i)}}function F2(e,t,n,r=99){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function Gi(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?Q.skinD:i===1?Q.skin:Q.skinL;for(let a=0;a<=o;a++){const s=n+(r-n)*a/o,l=et(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(et(t[a][0]-l/2),et(t[a][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const a=n+(r-n)*i/o,s=Math.max(2,et(a*.4)),l=et(t[i][0]),u=et(t[i][1]+a*.3);e.fillStyle=Q.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=Q.skinD,e.fillRect(l,u,1,1))}}}function H0(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const y=m/u,g=Math.sin(y*7-n*14)*7*y;f.push([e[0]+o*y+s*g,e[1]+i*y+l*g])}let[c,h]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const y=3.2*(1-m/8);c+=Math.cos(d)*y,h+=Math.sin(d)*y,f.push([c,h])}return f}K.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:r+p(-.9,.9)*o,d:i*p(.45,1),t0:p(0,.12),w:p(0,6),sz:p(6,10),bio:u%4===0}));A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const c of a){const h=(f-c.t0)/.42;if(h<0||h>1.15)continue;const d=1-Math.pow(1-Math.min(1,h),2),m=c.d*d,y=Math.sin(d*Be+c.w)*.2*d,g=t+Math.cos(c.a)*m-Math.sin(c.a)*y,x=n+Math.sin(c.a)*m+Math.cos(c.a)*y,[b,v]=C(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),S=c.sz*(1-.4*d);l.globalAlpha=h>1?(1.15-h)/.15:1,l.fillStyle=Q.ink,Xe(l,b,v,S,S*.75,2),l.fillStyle=Q.inkV,Xe(l,b-S*.3,v-S*.3,S*.4,S*.3,1),c.bio&&(l.fillStyle=Q.bio,l.fillRect(et(b+S*.2),et(v),2,2))}}});const s=a.slice(0,9);A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const c of s){const h=f.t-c.t0-.42;if(h<0)continue;const d=Math.min(1,h*10),m=Math.min(1,(2.6-f.t)/.6),[y,g]=C(t+Math.cos(c.a)*c.d,n+Math.sin(c.a)*c.d),[x,b]=C(t,n),v=x-y,S=b-g,_=Math.hypot(v,S)||1;l.globalAlpha=.85*m;for(let R=0;R<4;R++){const T=(c.sz+2)*(1-R*.22)*d;l.fillStyle=R?Q.inkP:Q.ink,Xe(l,y+v/_*R*7*d,g+S/_*R*4*d,T,T*.5,2)}const w=.5+.5*Math.sin(M.T*4+c.w*3);l.globalAlpha=m*w,l.fillStyle=Q.bio,l.fillRect(et(y-3),et(g-1),2,2),l.fillRect(et(y+4),et(g+1),2,1),c.bio&&(l.fillStyle=Q.bioL,l.fillRect(et(y),et(g-2),1,1))}}});for(let l=0;l<12;l++){const u=r+p(-1,1)*o,f=p(2,4.5);P(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,p(.5,1.8),p(.35,.6),l%3?Q.ink:Q.bio,l%3?3:2,7,l%3===0,.93)}};const Mo=[];function E2(e){let t=null,n=1.3;for(const r of Mo){if(r.done||M.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}const V0=e=>C(e.x,e.y,.35);function q0(e,t,n){A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=ft(e);if(!i)return;const a=V0(i),s=C(t,n,.45),l=1-o*o;l<.05||Gi(r,H0(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],M.T,1+o*2),10,3)}})}K.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=Mo.length-1;o>=0;o--)M.T-Mo[o].t>3&&Mo.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1};Mo.push(r),A({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,q0(r.uid,r.lx,r.ly),a.t=a.dur+1)}});for(let o=0;o<8;o++)P(e.x+t*.3,e.y+n*.3,.3,t*p(.5,1.5)+p(-.6,.6),n*p(.5,1.5)+p(-.6,.6),p(.5,1.5),.4,o%2?Q.sucker:Q.skin,2,5,!1)};Se.pulpo_W=(e,t,n,r,o,i)=>{const a=E2(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=M.T);const s=a?ft(a.uid):t.src||F2(t.x,t.y,"pulpo",9),l=s&&!s.dead?V0(s):[n-Math.cos(o)*70,r-Math.sin(o)*70];Gi(e,H0(l,[n,r],i),11,3),Math.random()<.25&&P(t.x,t.y,.4,0,0,-.3,.4,Q.bio,2,3,!0)};K.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?ft(e.uid):null,o=r?r.team:null;let i=null,a=1.3;for(const h of M.game?M.game.units:[]){if(h.dead||o&&h.team===o||r&&h===r||h.kind==="tower"||h.kind==="nexus")continue;const d=Math.hypot(h.x-t,h.y-n);d<a&&(a=d,i=h)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const h of Mo)h.uid===e.uid&&M.T-h.t<1.5&&(!f||h.t>f.t)&&(f=h);f&&!f.done&&(f.done=!0,q0(f.uid,t,n));const c=h=>{const d=s?ft(s):null;return d&&!d.dead?[d.x,d.y]:[h.x,h.y]};A({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(h,d,m){const[y,g]=c(m),[x,b]=C(y,g),v=Math.min(1,m.t/.12),S=d>.8?(1-d)/.2:1;h.globalAlpha=.9*S,h.fillStyle=Q.ink,Xe(h,x,b,30*v,13*v,2),h.fillStyle=Q.inkP,Xe(h,x,b,20*v,8*v,2),h.fillStyle=Q.bio,lr(h,x,b,30*v,18,2,M.T*2,3)}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(h,d,m){const[y,g]=c(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),v=M.T;h.globalAlpha=x;const S=[];for(let _=0;_<=16;_++){const w=_/16,R=w*1.15*b,T=Math.max(0,w-.6)/.4,[k,F]=C(y,g,R);S.push([k+u*(20-T*26)+Math.sin(v*5+w*4)*2,F-T*6])}Gi(h,S,12,3);for(let _=0;_<2;_++){const[,w]=C(y,g,(.22+_*.3)*b),[R]=C(y,g),T=19-2*Math.sin(v*9+_*2),k=1+.08*Math.sin(v*9);for(let F=0;F<=12;F++){const U=.1*Math.PI+F/12*.8*Math.PI,B=R+Math.cos(U)*T*k,Z=w+Math.sin(U)*7;h.fillStyle=Q.skinD,h.fillRect(et(B)-4,et(Z)-4,8,8),h.fillStyle=Q.skin,h.fillRect(et(B)-3,et(Z)-3,6,5),F%3===1&&(h.fillStyle=Q.sucker,h.fillRect(et(B)-1,et(Z)+1,3,2))}}}});for(let h=0;h<10;h++){const d=Math.random()*Be,m=p(1,2.4);P(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,p(1,2.5),.5,h%3?Q.ink:Q.bio,3,9,h%3===0)}tt(bu(e)?3:1)};function k2(e,t,n,r,o,i){if(r<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=C(t,n,l*r*.75),c=Math.max(0,l-.55)/.45;a.push([u+Math.sin(o*3+i+l*3)*4*l+c*c*10,f+c*c*8])}Gi(e,a,8,2)}K.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(s=>({a:s/4*Be+p(-.3,.3),d:p(.45,.75),ph:Math.random()*Be})),a=s=>Math.min(1,s/.25,(o-s)/.35);A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=Math.min(1,u.t/.3),[h,d]=C(t,n),m=wr(r)*c,y=u.t;s.globalAlpha=.6*f,s.fillStyle=Q.navy,Xe(s,h,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=Q.deep,Xe(s,h,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const b=(x/28+y*.55)%1,v=1-b,S=g/3*Be+y*2.2+b*5,_=h+Math.cos(S)*m*(.08+.9*v),w=d+Math.sin(S)*m*(.08+.9*v)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=v>.6?Q.water:v>.3?Q.bio:Q.bioL;const R=v>.5?4:3;s.fillRect(et(_)-(R>>1),et(w)-1,R,2+(v>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=Q.foam,lr(s,h,d,m*.97,56,3,y*1.4,4),s.fillStyle=Q.water,lr(s,h,d,m*.85,40,2,y*1.9,3),s.globalAlpha=f,s.fillStyle=Q.inkV,Xe(s,h,d,19*c,9*c,1),s.fillStyle=Q.abyss,Xe(s,h,d,15*c,7*c,1)}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),c=M.T;s.globalAlpha=f;for(const h of i){const d=h.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+h.ph))*1.1;k2(s,t+Math.cos(d)*r*h.d,n+Math.sin(d)*r*h.d,m,c,h.ph)}for(let h=0;h<6;h++){const d=u.t*1.5+h/6,m=Math.floor(d),y=d-m,g=at(m*11+h)*Be,x=r*.3*at(m*5+h*7),[b,v]=C(t+Math.cos(g)*x,n+Math.sin(g)*x,y*.9),S=2+et(y*3);s.globalAlpha=f*(1-y),s.fillStyle=Q.foam,s.fillRect(et(b)-S,et(v),1,2),s.fillRect(et(b)+S,et(v),1,2),s.fillRect(et(b),et(v)-S,2,1),s.fillRect(et(b),et(v)+S,2,1)}}}),A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=C(t,n);s.globalAlpha=1-l,s.fillStyle=Q.foam,lr(s,u,f,wr(r)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*Be;P(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,p(1,2.5),.5,s%3?Q.foam:Q.bio,3,8,s%3===0)}};const Al=new Map;function Da(e,t,n){const r=ft(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function U2(e,t,n,r,o){const a=10*r;if(a<1){e.fillStyle=Q.inkL,e.fillRect(et(t-26),et(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=Q.inkL,e.fillRect(et(t-u-2),et(n+l),et(u*2+4),2),e.fillStyle=Q.eyeD,e.fillRect(et(t-u),et(n+l),et(u*2),2)}const s=Math.sin(o*.8)*6;e.fillStyle=Q.eye,Xe(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=Q.abyss,e.fillRect(et(t+s-8),et(n-2),16,Math.max(2,et(5*r))),e.fillStyle="#ffffff",e.fillRect(et(t+s-6),et(n-Math.min(6,a-1)),3,2)}function L2(e){const t={ended:!1,endT:0};Al.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*Be,off:Math.random(),sp:p(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*Be,off:Math.random(),sz:et(p(4,7))})),u=[0,1,2,3,4].map(f=>({a:f/5*Be+p(-.2,.2),ph:Math.random()*Be}));A({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(f,c,h){const d=Da(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[y,g]=C(r,o),x=wr(i)*m;f.globalAlpha=.4*d,f.fillStyle=Q.inkP,Xe(f,y,g,x*.95,x*.475,3),f.globalAlpha=.7*d,f.fillStyle=Q.ink,Xe(f,y,g,x*.52,x*.26,3),f.globalAlpha=d,f.fillStyle=Q.abyss,Xe(f,y,g,x*.27,x*.135,2);for(const b of s){const v=(b.off+h.t*b.sp)%1,S=1-v,_=x*(.27+.73*S),w=b.a+v*v*4+h.t*.8,R=y+Math.cos(w)*_,T=g+Math.sin(w)*_*.5,k=y+Math.cos(w-.14)*_*1.04,F=g+Math.sin(w-.14)*_*.52;f.globalAlpha=d*(.3+.7*v),f.fillStyle=S>.6?Q.water:S>.3?Q.bio:Q.mag,W0(f,[k,F],[R,T],S>.5?2:3)}f.globalAlpha=.8*d,f.fillStyle=Q.inkV,lr(f,y,g,x,64,3,-h.t*.6,4)}}),A({type:"custom",layer:"top",add:!0,dur:a,x:r,y:o,draw(f,c,h){const d=Da(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[y,g]=C(r,o,.04),x=wr(i)*.28*m,b=M.T;for(let v=0;v<44;v++){const S=v/44*Be+b*2.5,_=.6+.4*Math.sin(b*20+v*1.7);f.globalAlpha=d*_,f.fillStyle=v%2?Q.bio:Q.mag,f.fillRect(et(y+Math.cos(S)*x)-1,et(g+Math.sin(S)*x*.5)-1,3,3)}f.globalAlpha=d*.45,f.fillStyle=Q.bioL;for(let v=0;v<18;v++){const S=Math.PI+v/17*Math.PI;f.fillRect(et(y+Math.cos(S)*x*1.15),et(g-14+Math.sin(S)*x*.35),2,2)}}}),A({type:"custom",layer:"top",dur:a,x:r,y:o,draw(f,c,h){const d=Da(t,n,h);if(d<=0)return;const m=M.T,y=Math.min(1,h.t/.5)*(t.ended?d:1);f.globalAlpha=d;for(const S of l){const _=(S.off+h.t*.4)%1,w=1-_,R=S.a+_*5,[T,k]=C(r+Math.cos(R)*i*.95*w,o+Math.sin(R)*i*.95*w,.05+.35*Math.sin(_*Math.PI)),F=Math.max(2,et(S.sz*(.35+.65*w)));f.fillStyle=Q.ink,f.fillRect(et(T)-(F>>1)-1,et(k)-(F>>1)-1,F+2,F+2),f.fillStyle=Q.rock,f.fillRect(et(T)-(F>>1),et(k)-(F>>1),F,F),f.fillStyle=Q.rockL,f.fillRect(et(T)-(F>>1),et(k)-(F>>1),Math.max(1,F>>1),1)}const g=u.map(S=>({t:S,a:S.a+h.t*.3})).sort((S,_)=>Math.cos(S.a)+Math.sin(S.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:S,a:_}of g){const w=[];for(let R=0;R<=18;R++){const T=R/18,k=i*(.92-.42*T*T),F=_+Math.sin(m*2+S.ph+T*3)*.12*T,U=Math.sin(T*Math.PI*.8)*1.9*y-Math.max(0,T-.8)*1.2*y;w.push(C(r+Math.cos(F)*k,o+Math.sin(F)*k,Math.max(0,U)))}Gi(f,w,15*y+2,3)}const x=t.ended?0:Math.min(1,Math.max(0,(h.t-.15)/.35)),[b,v]=C(r,o,.3);U2(f,b,v,x,m)}}),tt(bu(e)?6:2)}K.pulpo_R=e=>{if(e.type==="channel"){L2(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[a,s]=C(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=Q.mag,lr(o,a,s,wr(r)*(.25+.75*l),48,3,i*3),o.fillStyle=Q.bioL,lr(o,a,s,wr(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*Be,a=r*p(.6,1);P(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,o%2?Q.inkV:Q.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Al.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=M.T),Al.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)P(t+p(-.6,.6),n+p(-.6,.6),.2,p(-1,1),p(-1,1),p(.5,1.5),.6,i%2?Q.ink:Q.inkV,4,2,!1);return}A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.3);if(a<.35){const u=et(30*(1-a/.35))+2;i.fillStyle=Q.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=Q.mag,lr(i,s,l+20,wr(r)*u,56,4),i.fillStyle=Q.bio,lr(i,s,l+20,wr(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*Be,s=p(2,5);P(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,p(1.5,3.5),p(.5,.9),[Q.ink,Q.inkV,Q.bio,Q.mag][i%4],i%3?3:4,9,i%4>1,.94)}tt(bu(e)?8:3)}};Se.pulpo_A=(e,t,n,r,o,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(o),l=Math.sin(o);e.fillStyle=Q.ink,Xe(e,n-s*11,r-l*11,3,3,1),Xe(e,n-s*18,r-l*18,2,2,1),e.fillStyle=Q.ink,Xe(e,n,r,a+1,a*.8+1,2),e.fillStyle=Q.inkV,Xe(e,n,r,a-1,a*.8-1,2),e.fillStyle=Q.inkL,e.fillRect(et(n-3),et(r-4),3,2),e.fillStyle=Q.bio,e.fillRect(et(n+2),et(r+1),2,2),Math.random()<.3&&P(t.x,t.y,t.z||.45,0,0,-.2,.35,Q.ink,2,5,!1)};Me.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*Be;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=Q.ink,Xe(o,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*Be,c=(u%2?13:19)*l;o.fillStyle=Q.ink,W0(o,[a,s],[a+Math.cos(f)*c,s+Math.sin(f)*c*.75],4),o.fillStyle=Q.inkV,o.fillRect(et(a+Math.cos(f)*(c+4))-2,et(s+Math.sin(f)*(c+4)*.75)-2+i*10,4,4)}o.fillStyle=Q.bio,o.fillRect(et(a-3),et(s-2),2,2),o.fillRect(et(a+4),et(s+2),2,2)}});for(let o=0;o<6;o++)P(t,n,.45,p(-1.2,1.2),p(-1.2,1.2),p(.8,2),.4,o%3?Q.ink:Q.bio,2,8,o%3===0)};const Ct=Math.round,Zn=Math.PI*2,ht={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},Xa=e=>e*j.HW*Math.SQRT2;function ur(e,t,n,r){r=Math.max(1,Ct(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Ct(t[0]+(n[0]-t[0])*s/i-a),Ct(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Po(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(Ct(t-l),Ct(n+a),Math.max(1,Ct(l*2)),i)}}function Cl(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=Ct(n-a*o/2),u=Ct(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<s;c++)for(let h=0;h<a;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Ho(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Zn;e.fillRect(Ct(t+Math.cos(u)*r-i/2),Ct(n+Math.sin(u)*r*.5-i/2),i,i)}}const si=new Map;function D2(e){if(si.has(e))return!1;if(si.size>300)for(const[t,n]of si)M.T-n>4&&si.delete(t);return si.set(e,M.T),!0}function X2(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Te(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const Pf=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],G2=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Y0(e,t,n,r){Cl(e,Pf,t+1,n+1,r,{g:ht.deep,v:ht.deep}),Cl(e,Pf,t,n,r,{g:ht.pad,v:ht.moss})}function B2(e,t){const n=Math.random()*6;A({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,a]=C(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=ht.waterD,Ho(r,i,a,8+o*14,10,2,n,3),Y0(r,i,a+Ct(Math.sin(o*9+n)),o<.55?2:1)}})}function N2(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[t+o*l,n+i*l];e.fillStyle=ht.ink,ur(e,a(-11),a(11),5),e.fillStyle=ht.moss,ur(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",ur(e,a(0),a(8),3),e.fillStyle="#ffffff",ur(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(Ct(s[0]-2),Ct(s[1]-2),4,4),e.fillStyle=ht.ink,e.fillRect(Ct(s[0]-1),Ct(s[1]-1),2,2)}function $2(e,t){A({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=ht.foam,Ho(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=ht.water,Ho(n,o,i,3+r*16,10,2)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=Ct(12*(1-r))+2;n.fillStyle=ht.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*Zn,o=p(.8,2);P(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,p(1.5,3),.5,n%3?ht.water:ht.padL,2,9,!1,.95)}}const ai=new Map;function W2(e){let t=ai.get(e.id);if(!t&&(t={p:[],drop:0,seen:M.T},ai.set(e.id,t),ai.size>40))for(const[n,r]of ai)M.T-r.seen>2&&ai.delete(n);return t.seen=M.T,t}K.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=C(r,o,.55),u=Ct(9*(1-a))+2;i.fillStyle=ht.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(s-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)P(r,o,.5,t*p(2,4)+p(-.7,.7),n*p(2,4)+p(-.7,.7),p(.6,1.6),.4,i%2?ht.water:ht.padL,2,6,!1,.9)};Se.rana_Q=(e,t,n,r,o,i)=>{const a=t.z||.45,s=W2(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,B2(t.x,t.y)),yt(!0);const l=$t();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?ht.padL:ht.pad,ur(l,C(s.p[u-1][0],s.p[u-1][1],a),C(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));l.globalAlpha=1,yt(!1),N2(e,n,r,i*26);for(const u of X2(t))D2("rq"+t.id+":"+u.id)&&$2(u.x,u.y)};function H2(e,t,n){const r=Array.from({length:5},(i,a)=>({a:a/5*Zn+p(-.3,.3),d:n*p(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*Zn,h:p(26,44),w:Math.random()<.5?4:6}));A({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,tt(4),Dr({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*Zn,d=p(1,3.2);P(e+Math.cos(h)*.3,t+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,p(2.5,5),p(.5,.8),c%4?ht.foam:ht.water,3,12,!1,.97)}for(let c=0;c<6;c++)P(e+p(-.6,.6),t+p(-.6,.6),.1,p(-.4,.4),p(-.4,.4),p(1,2),.7,ht.mud,4,8,!1)}const[l,u]=C(e,t),f=Xa(n);i.globalAlpha=.35*(1-a),i.fillStyle=ht.waterD,Po(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=a*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?ht.foam:ht.water,Ho(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const c of r){const h=Xa(c.d)*(.6+a*.4);Y0(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(a*10+c.ph)*1.5,2)}a>.08&&Cl(i,G2,l,u-4,a<.2?2:3,{g:ht.moss,p:ht.pink,P:ht.pinkL,y:ht.eye})}}),A({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=Xa(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const c of o){const h=s+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,m=Ct(c.h*f),y=Math.cos(c.a)*a*10;m<2||(i.fillStyle=ht.waterD,i.fillRect(Ct(h-c.w/2+y*.5),Ct(d-m),c.w,m),i.fillStyle=ht.water,i.fillRect(Ct(h-c.w/2+y*.5),Ct(d-m),c.w-2,m-2),i.fillStyle=ht.foam,i.fillRect(Ct(h-c.w/2+y-1),Ct(d-m-3),c.w+2,4))}}})}K.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,a=1.7,s=r-t,l=o-n,u=Math.hypot(s,l)||1;A({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,c){const[h,d]=C(t,n);f.globalAlpha=1-c,f.fillStyle=ht.waterD,Ho(f,h,d,10+c*34,18,3,0,3),f.fillStyle=ht.foam,Ho(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)P(t,n,.15,-s/u*p(1,2.5)+p(-.8,.8),-l/u*p(1,2.5)+p(-.8,.8),p(1.5,3),.5,f%3?ht.mud:ht.water,3,9,!1);A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),m=c>.75?(1-c)*4:1;for(let y=d;y<=h;y+=.05){const[g,x]=C(t+s*y,n+l*y,.3+6.8*y*(1-y)),b=(y-d)/Math.max(.01,h-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=ht.deep,f.fillRect(Ct(g)-3,Ct(x)-3,6,6),f.fillStyle=b>.7?ht.padL:ht.pad,f.fillRect(Ct(g)-2,Ct(x)-2,4,4)}}}),A({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,H2(r,o,a))}})};K.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,a)=>{const s=a/9*Zn+p(-.3,.3),l=a===0?0:p(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:p(14,22),z:p(.15,.6),up:p(.2,.5),col:[ht.smokeA,ht.smokeB,ht.smokeC][a%3],dl:p(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:p(.3,.6)}));A({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.2),u=Ct(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=ht.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),A({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,c]=C(l.x,l.y,l.z+l.up*u),h=Ct(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Po(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,Po(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",Po(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,c]=C(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=Ct(f+d*6)-3,y=Ct(c)-3;if(i.fillStyle=ht.deep,i.fillRect(m-1,y-1,8,h?3:7),h){i.fillStyle=ht.moss,i.fillRect(m,y,6,1);continue}i.fillStyle=ht.eye,i.fillRect(m,y,6,5),i.fillStyle=ht.ink,i.fillRect(m+1,y+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,y,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*Zn,s=p(1,2.6);P(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,p(1,2.5),.6,i%2?ht.ink:ht.moss,2,7,!1,.92)}};function V2(e,t,n,r){A({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const a=C(e,t,.35),s=C(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?ht.ink:ht.moss;for(let c=u;c<=l;c+=.03){const h=Ct((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*c,m=a[1]+(s[1]-a[1])*c+Math.sin(c*14)*1.5;o.fillRect(Ct(d-h/2),Ct(m-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();P(e+(n-e)*i,t+(r-t)*i,.35,p(-.6,.6),p(-.6,.6),p(.2,1),.5,ht.ink,3,6,!1)}}function If(e,t,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?ht.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,y=Math.max(1,Ct(h*(1-Math.abs(d/u*2-1))));e.fillRect(Ct(t+s*m*o/2-y/2+c),Ct(n+l*m*o/2-y/2+c),y,y)}}}function q2(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+p(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));A({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const a=i*.5,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),If(o,s+u.ox,l+u.oy,u.a,u.len,Ct(6*h)+1,c),If(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,Ct(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const a=i*.4,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const c=Ct(16*(1-f/.1))+2;o.fillStyle=ht.padL,o.fillRect(s+u.ox-c,l+u.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*Zn,i=p(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:p(5,11),drips:[p(-1,1),p(-1,1),p(-1,1)]}});A({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=C(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=ht.inkP,Po(o,s,l,u,u*.5,2),o.fillStyle=ht.ink,Po(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(Ct(s+f*u*1.8),Ct(l+f*u*.6),3,2);o.fillStyle=ht.moss,o.fillRect(Ct(s+u*.4),Ct(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*Zn,a=p(1.5,4.5);P(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,p(1,3),p(.4,.7),o%5?ht.ink:ht.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*Zn;P(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,ht.padL,2,0,!0)}tt(8)}K.rana_R=e=>{if(e.type==="blink"){V2(e.x,e.y,e.ex??e.x,e.ey??e.y);return}q2(e.x,e.y)};Me.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],c=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];o.fillStyle=ht.moss,ur(o,u,h,5),l>=.35&&ur(o,f,d,5),o.fillStyle="#ffffff",ur(o,u,h,2),l>=.35&&ur(o,f,d,2)}});for(let o=0;o<5;o++)P(t,n,.45,p(-1.2,1.2),p(-1.2,1.2),p(1,2.2),.35,o%2?ht.water:ht.padL,2,8,!1)};const Y2="#7a879c",K2="#363e50",j2="#c9d3e2",zf="#e8b858",Q2="#ffa040",K0="#f2e8d2",ki="#cdbb9a",Mu="#a08f72",j0="#6f6250",Vo="#33241a",Z2="#8a7356",Q0="#9a948a",Z0="#7a7468",J0="#5e584e",J2="#c4beb2",ty="#ffe2a0",ey="#d89a3a",ny="#fff8e6",ry="#ff5a1a",ce=Math.round,Ga=Math.PI*2;function Ue(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ce(t),ce(n),r,o)}function ns(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(ce(t+(r-t)*l/s-i/2),ce(n+(o-n)*l/s-i/2),i,i)}function Of(e,t,n,r,o){const[i,a]=C(t,n),s=r*j.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(ce(i-f),ce(a+u),ce(f*2),2)}}function th(e,t){const n=(e-t)*j.HW,r=(e+t)*j.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const eh=e=>{const t=ft(e);return t&&!t.dead&&!Te(t)?t:null},Vs=()=>[Q0,Z0,J0,Mu][Math.random()*4|0];function oy(e,t,n,r,o){if(t=ce(t)-6,n=ce(n)-5,Ue(e,t,n,12,10,K2),Ue(e,t+1,n+1,10,8,Y2),Ue(e,t+1,n+1,10,2,j2),Ue(e,t+2,n+6,2,2,o),Ue(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Ue(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const iy=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],sy=[ty,ey,ny,ry];function Ba(e,t,n,r,o){t=ce(t),n=ce(n);for(const[i,a,s,l,u]of iy){const f=o>0?i:-i-s;e.fillStyle=sy[u],e.fillRect(t+f*r,n+a*r,s*r,l*r)}}Me.rino=e=>{A({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.4),i=ce(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;Ue(t,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":K0)}}});for(let t=0;t<3;t++)P(e.x,e.y,.3,p(-1.5,1.5),p(-1.5,1.5),p(1.5,3),.5,Vs(),3,10,!1,.95);for(let t=0;t<2;t++)P(e.x+p(-.2,.2),e.y+p(-.2,.2),.1,p(-.4,.4),p(-.4,.4),.5,.5,ki,5,0,!1,.9);tt(1.5)};K.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[c,h]=th(o,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(v,S)=>p(-.06,.06)+(S%2?.05:-.05)),y=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:p(.15,.35)}:null),g=Array.from({length:8},(v,S)=>({k:(S+.5)/8,o:p(-.35,.35),r:Array.from({length:4},()=>[p(-10,6),p(-8,2),ce(p(6,12)),ce(p(5,8)),[ki,Mu,ki,j0][Math.random()*4|0]])}));let x=0,b=!1;A({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,R=Math.min(1,w/r),T=Math.floor(R*d);v.globalAlpha=.8*Math.min(1,(_.dur-w)/.6);for(const k of[-.3,.3]){const F=k>0?1:-1;let[U,B]=C(e.x+s*k,e.y+l*k);for(let Z=1;Z<=T;Z++){const lt=Z/d,bt=k+m[Z]*F,[I,z]=C(e.x+o*lt+s*bt,e.y+i*lt+l*bt);ns(v,U,B+1,I,z+1,2,Z2),ns(v,U,B,I,z,2,Vo);const O=y[Z];if(O&&O.s===F){const[L,X]=C(e.x+o*lt+s*(bt+F*O.l)+u*O.l*.5,e.y+i*lt+l*(bt+F*O.l)+f*O.l*.5);ns(v,I,z,L,X,1,Vo)}U=I,B=z}}}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,R=Math.min(1,w/r);for(;x<18*R;){x++;const T=Math.random()*R;P(e.x+o*T+p(-.3,.3),e.y+i*T+p(-.3,.3),.1,-u*p(.5,2)+p(-1,1),-f*p(.5,2)+p(-1,1),p(2,4),p(.5,.8),Vs(),3,12,!1,.95)}if(w>=r&&!b){b=!0,tt(5);for(let T=0;T<12;T++){const k=Math.atan2(f,u)+p(-.9,.9),F=p(2,4.5);P(t+u*.5,n+f*.5,.2,Math.cos(k)*F,Math.sin(k)*F,p(2,4),p(.5,.8),Vs(),3,12,!1,.95)}}for(const T of g){const k=w-T.k*r;if(k<0||k>.9)continue;const F=k/.9,U=1+F*1.2,[B,Z]=C(e.x+o*T.k+s*T.o,e.y+i*T.k+l*T.o,.15+F*.5);v.globalAlpha=.6*(1-F);for(const lt of T.r)Ue(v,B+lt[0]*U,Z+lt[1]*U,ce(lt[2]*U),ce(lt[3]*U),lt[4])}}}),A({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(v,S,_){const w=eh(e.uid);if(!w)return;const R=S*_.dur;v.globalAlpha=R>r?Math.max(0,1-(R-r)/.08):1;const[T,k]=C(w.x+u*.6,w.y+f*.6,.45);for(let B=0;B<6;B++){const Z=7-B;Ue(v,T+c*B*2.5-Z/2,k+h*B*2.5-Z/2,Z,Z,B<2?K0:"#ffffff")}const[F,U]=C(w.x,w.y,.5);v.globalAlpha*=.6;for(let B=0;B<5;B++){const Z=(B-2)*9,lt=24+B*13%3*10;ns(v,F-h*Z-c*26,U+c*Z-h*26,F-h*Z-c*(26+lt),U+c*Z-h*(26+lt),1,"#fff6e0")}}})};K.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=eh(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=C(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let v=0;v<3;v++)P(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,p(-2,2),p(-2,2),p(1,2.5),.3,v?Q2:zf,2,8,!0,.9)}const y=(1-m)*(1-m)*46,g=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,oy(i,g+Math.cos(d.a)*y,x+Math.sin(d.a)*y*.5-y*.6,ce((M.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":zf)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),tt(3)};K.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Ga+p(-.08,.08),j:p(.9,1.08),w:ce(p(4,7)),h:ce(p(3,6)),col:[Q0,Z0,J0][i%3]}));A({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,Of(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,Of(o,e.x,e.y,.4,"#24180e");for(const[f,c,h]of[[.45,Vo,2],[.7,Vo,2],[.95,ki,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*Ga,[y,g]=C(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Ue(o,y-h/2,g-1,h,2,c)}}for(const f of r){const[c,h]=C(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,Ue(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=u,Ue(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),Ue(o,c-f.w/2,h-f.h-d,f.w,1,J2)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[a,s]=C(e.x,e.y,.05),l=ce(30+110*i);o.globalAlpha=1-i,Ue(o,a-l,s-1,l*2,2,"#fff2d0"),Ue(o,a-l*.6,s-3,ce(l*1.2),1,"#ffd890");for(const u of[-1,1])Ue(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=p(0,Ga),a=t*p(1.5,2.5);P(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,p(3,6),p(.5,.9),Vs(),Math.random()<.3?4:3,14,!1,.96)}tt(8)};K.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[e.x+Math.cos(u.a)*h,e.y+Math.sin(u.a)*h,c,h]};A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,m]=C(e.x,e.y);u.moveTo(ce(d),ce(m));for(let y=0;y<=12;y++){const g=r-i+2*i*y/12;[d,m]=C(e.x+Math.cos(g)*o,e.y+Math.sin(g)*o),u.lineTo(ce(d),ce(m))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const y of s){const[,,,g]=l(y,c),x=y.a+Math.PI/2;for(let b=.6;b<g;b+=.55){const v=Math.round(b/.55)%2?.12:-.12,[S,_]=C(e.x+Math.cos(y.a)*b+Math.cos(x)*v,e.y+Math.sin(y.a)*b+Math.sin(x)*v);Ue(u,S-4,_-1,3,3,Vo),Ue(u,S+1,_-1,3,3,Vo)}}}}),A({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const c=f*a;for(const h of s){const[d,m,y]=l(h,c);if(c<h.del)continue;const g=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(g<=0)continue;const[x,b]=C(d,m,.55),[v]=th(Math.cos(h.a),Math.sin(h.a)),S=v>=0?1:-1,_=y<.5?3:4,[w,R]=C(e.x,e.y,.55),T=x-w,k=b-R;u.globalAlpha=g*.18,Ba(u,x-T*.35,b-k*.35,_,S),u.globalAlpha=g*.35,Ba(u,x-T*.17,b-k*.17,_,S),u.globalAlpha=g,Ba(u,x,b,_,S)}}});for(let u=0;u<40;u++){const f=r+p(-i,i),c=p(.4,o*.8),h=p(2,5);P(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,p(.5,1.5),p(.5,.9),[ki,Mu,j0][u%3],4,3,!1,.9)}tt(10)};const G=Math.round,Qe=Math.PI*2,Tl=e=>e*j.HW*Math.SQRT2,W={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},ea=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function wi(e,t,n,r){r=Math.max(1,G(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(G(t[0]+(n[0]-t[0])*s/i-a),G(t[1]+(n[1]-t[1])*s/i-a),r,r)}function ln(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(G(t-l),G(n+a),Math.max(1,G(l*2)),i)}}function nh(e,t,n,r=99){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function ay(e,t,n,r=1.6){let o=null,i=r;for(const a of M.game?M.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}const na=e=>C(e.x,e.y,.5);function ra(e,t,n,r,o,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,c=Math.max(2,Math.ceil(l/3)),h=d=>{const m=Math.sin(d*Math.PI),y=Math.sin(d*9-r*28)*o*m;return[t[0]+a*d+u*y,t[1]+s*d+f*y+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?W.tongueD:d===1?W.tongue:W.tongueL;const m=d===0?7:d===1?5:2;for(let y=0;y<=c;y++){const g=y/c,x=h(g),b=d===2?m:Math.max(2,G(m*(1-g*.3)));e.fillRect(G(x[0]-b/2),G(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=h(d/l),y=G(m[0]),g=G(m[1]);e.fillStyle=W.ink,e.fillRect(y-2,g-5,5,10),e.fillStyle=W.iron,e.fillRect(y-1,g-4,3,8),e.fillStyle=W.ironL,e.fillRect(y-1,g-4,1,3)}}const Na=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function Su(e,t,n,r,o=1.5){const i=Math.cos(r),a=Math.sin(r),s=d=>[t+(i*d[0]-a*d[1])*o,n+(a*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?W.ink:d===1?W.iron:W.ironL;const m=d===0?6:d===1?4:1;for(let y=1;y<Na.length;y++)wi(e,s(Na[y-1]),s(Na[y]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=W.ink,wi(e,l,u,4),e.fillStyle=W.ironL,wi(e,l,u,2),e.fillStyle=W.rust;const f=s([7.5,5]),c=s([-3,0]);e.fillRect(G(f[0]),G(f[1]),2,2),e.fillRect(G(c[0]),G(c[1])-1,3,2);const h=s([-12.5,0]);e.fillStyle=W.ink,e.fillRect(G(h[0])-5,G(h[1])-5,10,10),e.fillStyle=W.rust,e.fillRect(G(h[0])-4,G(h[1])-4,8,8),e.fillStyle=W.ink,e.fillRect(G(h[0])-2,G(h[1])-2,4,4)}const So=[];function ly(e){let t=null,n=1.3;for(const r of So){if(r.done||M.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}function uy(e,t,n){A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=ft(e);if(!i)return;const a=na(i),s=C(t,n,.45),l=1-o*o,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&ra(r,a,u,M.T,4*l,3*l),Su(r,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-o*.4)}})}function fy(e,t){A({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=W.slimeL;for(let a=0;a<10;a++){const s=a/10*Qe+r;n.fillRect(G(o+Math.cos(s)*(8+r*26))-1,G(i+Math.sin(s)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)P(e,t,.5,p(-1.2,1.2),p(-1.2,1.2),p(1,2.4),.45,n%2?W.slime:W.tongueL,3,9,!1)}function cy(e){let t=null;for(const c of So)!c.pulled&&c.team===e.team&&M.T-c.t<2.2&&(!t||c.t>t.t)&&(t=c);t&&(t.pulled=!0,t.done=!0);const n=t?ft(t.uid):nh(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];A({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(c,h,d){const m=ft(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const y=f[f.length-1];(!y||Math.hypot(m.x-y[0],m.y-y[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const y of f){const g=1-(d.t-y[2])/1.1;if(!(g<=0)){c.globalAlpha=g*.9;for(const x of[-1,1]){const[b,v]=C(y[0]+l*x,y[1]+u*x);c.fillStyle=W.mud,c.fillRect(G(b)-2,G(v)-1,5,3),c.fillStyle=W.slime,c.fillRect(G(b)-1,G(v)-2,2,1)}}}}}),A({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(c,h,d){const m=ft(o),y=r?ft(r):null;if(!m||!y||m.dead||y.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-y.x,m.y-y.y)<(y.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){fy(m.x,m.y),d.t=d.dur+1;return}const x=na(y),b=C(m.x,m.y,.5);ra(c,x,b,M.T,1.2,2),Su(c,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),tt(ea({uid:r})?5:2)}K.sapo_Q=e=>{if(e.type==="hook_pull"){cy(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=So.length-1;a>=0;a--)M.T-So[a].t>3&&So.splice(a,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};So.push(r),A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,r.pulled||uy(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)P(o,i,.5,t*p(1.5,3.5)+p(-.8,.8),n*p(1.5,3.5)+p(-.8,.8),p(.8,2),.45,a%3?W.slime:W.tongueL,2+a%2,8,!1);A({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(a,s){const[l,u]=C(o,i,.5),[f,c]=C(o+t,i+n,.5),h=f-l,d=c-u,m=Math.hypot(h,d)||1;a.globalAlpha=1-s,a.fillStyle=W.fat;for(let y=-1;y<=1;y++)wi(a,[l-d/m*y*7,u+h/m*y*7],[l+h*(.3+s*.5)-d/m*y*7,u+d*(.3+s*.5)+h/m*y*7],2)}})};Se.sapo_Q=(e,t,n,r,o,i)=>{const a=ly(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=M.T);const s=a?ft(a.uid):t.src||nh(t.x,t.y,"sapo",11);s&&!s.dead&&ra(e,na(s),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),Su(e,n,r,o),Math.random()<.3&&P(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?W.slime:W.tongueL,2,6,!1)};K.sapo_Q_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.5);for(let l=0;l<10;l++){const u=l/10*Qe+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?W.fat:W.meatL,wi(r,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const s=G(10*(1-o))+2;r.fillRect(i-s/2,a-s/2,s,s)}});for(let r=0;r<14;r++){const o=Math.random()*Qe,i=p(1,3);P(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,p(1.5,3.5),p(.5,.8),[W.meat,W.meatL,W.fat,W.slime][r%4],r%3?3:4,11,!1,.95)}};const Rl=new Map;function rh(e){const t={ended:!1,endT:0};return Rl.set(e.uid+"_"+e.key,t),t}function oh(e){const t=Rl.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=M.T),Rl.delete(e.uid+"_"+e.key)}function qs(e,t,n){const r=ft(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function hy(e){const t=rh(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,a=s=>{const l=ft(n);return l?[l.x,l.y]:[s.x,s.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(s,l,u){const f=qs(t,n,u);if(f<=0)return;const[c,h]=a(u),[d,m]=C(c,h),y=Tl(o),g=M.T;s.globalAlpha=.22*f,s.fillStyle=W.gasD,ln(s,d,m,y*.95,y*.475,3);for(let x=0;x<6;x++){const b=x/6*Qe+g*.25,v=y*(.4+.35*at(x+i));s.globalAlpha=.3*f,s.fillStyle=x%2?W.gas:W.gasD,ln(s,d+Math.cos(b)*v,m+Math.sin(b)*v*.5,18+4*Math.sin(g*2+x),8,2)}for(let x=0;x<44;x++){const b=x/44*Qe-g*.4,v=y*(.95+.05*Math.sin(b*5+g*3));s.globalAlpha=.85*f,s.fillStyle=x%3?W.gas:W.gasL,s.fillRect(G(d+Math.cos(b)*v)-1,G(m+Math.sin(b)*v*.5)-1,3,3)}for(let x=0;x<5;x++){const b=g*1.3+x*.2,v=Math.floor(b),S=b-v,_=at(v*13+x+i)*Qe,w=y*(.15+.75*at(v*7+x*3+i)),R=d+Math.cos(_)*w,T=m+Math.sin(_)*w*.5;s.globalAlpha=f,s.fillStyle=S>.85?W.gasL:W.gas;const k=S>.85?4+(S-.85)*60:2+S*6;for(let F=0;F<8;F++){const U=F/8*Qe;s.fillRect(G(R+Math.cos(U)*k)-1,G(T+Math.sin(U)*k*.6)-1,2,2)}}}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(s,l,u){const f=qs(t,n,u);if(f<=0)return;const[c,h]=a(u),[d,m]=C(c,h),y=Tl(o),g=M.T;for(let v=0;v<10;v++){const S=at(v*7.3+i),_=(g*.7+S)%1,w=v/10*Qe+S*2,R=y*(.15+.7*at(v*3.1+i)),T=d+Math.cos(w)*R,k=m+Math.sin(w)*R*.5;s.globalAlpha=f*Math.sin(_*Math.PI)*.9,s.fillStyle=v%2?W.gasL:W.gas;for(let F=0;F<7;F++)s.fillRect(G(T+Math.sin(F*.9+g*6+v)*4)-1,G(k-8-_*46-F*5),3,4)}const[x,b]=C(c,h,.9);for(let v=0;v<5;v++){const S=v*1.7+i,_=x+Math.sin(g*(3.1+v*.4)+S)*(20+v*7),w=b-v*4+Math.sin(g*(6.2+v*.3)+S*2)*10;s.globalAlpha=f,s.fillStyle=W.fly,s.fillRect(G(_),G(w),3,2),s.fillStyle="#eaf4ff";const R=((g*36|0)+v)%2;s.fillRect(G(_)-1,G(w)-1-R,2,1),s.fillRect(G(_)+2,G(w)-1-R,2,1)}}})}function Pl(e,t,n,r){A({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=Tl(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const c=f/26*Qe,h=f%2?4:3;i.fillStyle=f%4?W.gas:W.gasL,i.fillRect(G(s+Math.cos(c)*u)-2,G(l+Math.sin(c)*u*.5)-1,h,3)}r&&(i.fillStyle=W.gasD,ln(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const a=Math.random()*Qe,s=p(.5,r?2.4:1.4);P(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,p(.4,1.4),p(.6,1),i%2?W.gas:W.gasL,r?5:4,-.6,!1,.9)}}K.sapo_W=e=>{if(e.type==="channel"){hy(e);return}const t=ft(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Pl(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(oh(e),Pl(n,r,1.4,e.kind==="done"))};K.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const a=ft(t);return a&&!a.dead?a:null};A({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,c]=C(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),h=G(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=W.bellyD,ln(i,f,c+1,h+2,h*.8+2,2),i.fillStyle=W.belly,ln(i,f,c,h,h*.8,2),i.fillStyle="#ffffff",i.fillRect(G(f-h*.4),G(c-h*.5),3,2)}}),A({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const[u,f]=C(l.x,l.y);i.globalAlpha=1-a;for(let c=0;c<2;c++){const h=14+(a*1.2-c*.2)*52;if(!(h<14)){i.fillStyle=c?W.slime:W.belly;for(let d=0;d<22;d++){const m=d/22*Qe;i.fillRect(G(u+Math.cos(m)*h)-2,G(f+Math.sin(m)*h*.45)-1,4,3)}}}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,y=l?l.y:s.y;for(let g=0;g<16;g++){const x=g/16*Qe;P(m,y,.5,Math.cos(x)*p(1,2.6),Math.sin(x)*p(1,2.6),p(1,2.5),.5,g%2?W.slime:W.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,c]=C(l.x,l.y,.45),h=M.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=W.belly,ln(i,f,c+6,13,11,2);for(let m=0;m<40;m++){const y=m/40*Qe,g=Math.sin(y*3+h*6+r)*2.5+Math.sin(y*5-h*4)*1.5,x=f+Math.cos(y)*(30+g),b=c+Math.sin(y)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?W.slimeL:W.slime,i.fillRect(G(x)-1,G(b)-1,3,3)}for(let m=0;m<6;m++){const y=m/6*Qe+h*.6,g=f+Math.cos(y)*31,x=c+Math.sin(y)*37;i.globalAlpha=d,i.fillStyle=W.skinD,i.fillRect(G(g)-2,G(x)-2,5,5),i.fillStyle=W.wart,i.fillRect(G(g)-1,G(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(G(f-18),G(c-26),4,2),i.fillRect(G(f-21),G(c-23),2,4),Math.random()<.12&&P(l.x+p(-.25,.25),l.y+p(-.25,.25),.15,0,0,-.2,.5,W.slime,2,4,!1)}})};const dy=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function my(e,t,n,r,o){e.globalAlpha=r;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?W.skinD:s<12?W.skinL:W.skin,e.fillRect(G(t-l),G(n-s-2),G(l*2),2)}e.fillStyle=W.skinD;for(let s=0;s<7;s++)e.fillRect(G(t-36+at(s)*72),G(n-14-at(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=W.skin,ln(e,l,u,12,10,2),e.fillStyle=W.eye,ln(e,l,u-1,8,7,2),e.fillStyle=W.ink,e.fillRect(G(l-5+Math.sin(o*2)*1.5),G(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(G(l-4),G(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=W.ink,e.fillRect(G(l)-1,G(n)-1,7,8),e.fillStyle=W.teeth,e.fillRect(G(l),G(n),5,6-s%2*2)}}function py(e){const t=rh(e),n=e.uid,r=(e.dur||3)+.5,o=ft(n),i=e.team||o&&o.team,a=ay(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?ft(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=qs(t,n,c);if(h<=0)return;const[d,m]=l(c),[y,g]=C(d,m),x=Math.min(1,c.t/.25);u.globalAlpha=h,u.fillStyle=W.skinD,ln(u,y,g+2,58*x,27*x,2),u.fillStyle=W.mouth,ln(u,y,g,50*x,22*x,2),u.fillStyle=W.mouthM,ln(u,y,g+3,38*x,15*x,2),u.fillStyle=W.tongue,ln(u,y,g+6,24*x,8*x,2),u.fillStyle=W.tongueL,u.fillRect(G(y-10*x),G(g+3),G(8*x),2)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=qs(t,n,c);if(h<=0)return;const[d,m]=l(c),[y,g]=C(d,m),x=M.T,b=Math.min(1,c.t/.25),v=t.ended?0:dy(c.t),S=g-4-b*(22+v*70);for(let w=0;w<2;w++){const[,R]=C(d,m,.3+w*.28),T=21-2*Math.sin(x*10+w),k=8;for(let F=0;F<=14;F++){const U=.12*Math.PI+F/14*.76*Math.PI,B=y+Math.cos(U)*T,Z=R+Math.sin(U)*k;u.globalAlpha=h,u.fillStyle=W.tongueD,u.fillRect(G(B)-3,G(Z)-3,6,6),u.fillStyle=W.tongue,u.fillRect(G(B)-2,G(Z)-2,4,4)}}const _=ft(n);if(_&&!_.dead){const w=na(_),R=C(d,m,.45);if(Math.hypot(R[0]-w[0],R[1]-w[1])>18){u.globalAlpha=h,ra(u,w,R,x,1,2);for(let T=0;T<5;T++){const k=(x*1.6+T/5)%1,F=R[0]+(w[0]-R[0])*k,U=R[1]+(w[1]-R[1])*k-3;u.fillStyle=W.meat,u.fillRect(G(F)-3,G(U)-3,6,6),u.fillStyle=W.meatL,u.fillRect(G(F)-2,G(U)-3,3,3)}}}my(u,y,S,h*b,x),u.globalAlpha=h*b;for(let w=0;w<=26;w++){const R=w/26*Math.PI,T=y+Math.cos(R)*54,k=g+Math.sin(R)*25;u.fillStyle=W.skinD,u.fillRect(G(T)-4,G(k)-3,8,8),u.fillStyle=W.skin,u.fillRect(G(T)-3,G(k)-3,6,5),u.fillStyle=W.skinL,u.fillRect(G(T)-3,G(k)-3,6,1),w%3===1&&w>1&&w<25&&(u.fillStyle=W.ink,u.fillRect(G(T)-3,G(k)-10,6,8),u.fillStyle=W.teeth,u.fillRect(G(T)-2,G(k)-9,4,6))}Math.random()<.2&&P(d+p(-.4,.4),m+p(-.2,.2),.9,0,0,-.5,.5,W.slimeL,2,6,!1)}}),tt(ea(e)?6:2)}function yy(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*Qe,i=p(.8,2.2);P(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,p(1.5,3),.55,[W.meat,W.meatL,W.fat,W.slimeL][r%4],3,10,!1,.95)}tt(ea(n)?2.5:.6)}function gy(e,t,n){A({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,a]=C(e,t),s=o<.3?1:1-(o-.3)/.7;r.globalAlpha=s,r.fillStyle=W.skinD,ln(r,i,a-18*s,58*s,30*s,2),r.fillStyle=W.skin,ln(r,i,a-22*s,52*s,25*s,2),r.fillStyle=W.skinL,r.fillRect(G(i-30*s),G(a-40*s),G(60*s),3),r.fillStyle=W.ink,r.fillRect(G(i-40*s),G(a-10*s),G(80*s),3)}}),Pl(e,t,1.8,!0),tt(ea(n)?7:2)}K.sapo_R=e=>{if(e.type==="channel"){py(e);return}if(e.type==="channel_tick"){yy(e.x,e.y,e);return}if(e.type==="channel_end")if(oh(e),e.kind==="done")gy(e.x,e.y,e);else for(let t=0;t<10;t++)P(e.x,e.y,.5,p(-1.2,1.2),p(-1.2,1.2),p(.5,1.5),.6,t%2?W.gas:W.slime,4,2,!1)};const $a=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Me.sapo=e=>{const t=e.x,n=e.y,r=e.uid?ft(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const c=$a[0].length,h=G(s-(o>0?c*f-6:6)),d=G(l-14-u),m={h:"#6a3a1e",B:W.ink,b:"#a8acb4",r:W.rust,e:"#ffffff"};for(const y in m){i.fillStyle=m[y];for(let g=0;g<$a.length;g++)for(let x=0;x<c;x++)$a[g][x]===y&&i.fillRect(h+(o>0?x:c-1-x)*f,d+g*f,f,f)}if(a>.25){const y=(a-.25)/.75;i.fillStyle=W.fat,i.fillRect(G(s-10-y*16),G(l+6),G(8*(1-y))+1,2),i.fillRect(G(s+4+y*16),G(l+6),G(8*(1-y))+1,2)}}});for(let i=0;i<7;i++)P(t,n,.45,p(-1.4,1.4),p(-1.4,1.4),p(1,2.4),.4,[W.meat,W.meatL,W.slime][i%3],3,10,!1)};const Jt=Math.round,Pt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Ys(e,t,n,r,o){e.fillStyle=o,e.fillRect(Jt(t-r/2),Jt(n-r/2),r,r)}const Ui=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function xy(e,t,n,r,o,i){const a=t.length,s=t[0].length,l=Jt(n-s*o/2),u=Jt(r-a*o/2);for(let f=0;f<a;f++)for(let c=0;c<s;c++){const h=i[t[f][c]];h&&(e.fillStyle=h,e.fillRect(l+c*o,u+f*o,o,o))}}function ih(e,t,n,r,o){const i=Jt(t),a=Jt(n);o&&(e.fillStyle=o,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=r,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function Wa(e,t,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(Jt(t+(r-t)*f-a/2),Jt(n+(o-n)*f-a/2),a,a)}}const vy=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function sh(e,t,n,r,o,i,a,s){e.fillStyle=Pt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=Pt.teal,e.fillRect(t,n-o,r,Jt(o*.62)),e.fillStyle=Pt.aqua,e.fillRect(t,n-o,r,Jt(o*.3)),e.fillStyle=Pt.foam,e.fillRect(t+i,n-o-2+a,r,3),s&&(e.fillStyle=Pt.white,e.fillRect(t+i*2,n-o-4+a,3,2))}K.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=ft(e.uid);let i=1,a=0;if(o){const v=t-o.x,S=n-o.y,_=Math.hypot(v,S);_>.05&&(i=v/_,a=S/_)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*j.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-a)*j.HW,m=(i+a)*j.HH,y=Math.hypot(d,m)||1,g=Jt(d/y*3),x=Jt(m/y*2);A({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(v,S){const _=Math.min(1,S*3)*(S>.6?(1-S)/.4:1);gt(t,n,r*.95,null,`rgba(18,80,110,${.32*_})`);for(let w=0;w<2;w++){const R=(S*2.4+w*.5)%1,T=r*.9*R;v.globalAlpha=_*(1-R);for(let k=0;k<22;k++){const F=k/22*6.283,[U,B]=C(t+Math.cos(F)*T,n+Math.sin(F)*T);Ys(v,U,B,2,Pt.sea)}}v.globalAlpha=1}});const b={n:0,sp:!1};return A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(v,S){const _=-r*.95+S*r*1.9,w=Math.sin(Math.min(1,S*1.08)*Math.PI),R=Math.sqrt(Math.max(0,r*r-_*_))+.25,T=Math.floor(R*2/c);for(let k=0;k<=T;k++){const F=u>0?-R+k*c:R-k*c,U=1-Math.abs(F)/R,B=.85+.15*Math.sin(F*9+S*24),Z=Jt((8+30*Math.sqrt(Math.max(0,U)))*w*B/2)*2;if(Z<4)continue;const[lt,bt]=C(t+i*_+s*F,n+a*_+l*F);sh(v,Jt(lt-h/2),Jt(bt),h,Z,g,x,(F*7.7+S*30|0)%3===0)}if(b.n<32&&w>.3)for(let k=0;k<2;k++){b.n++;const F=p(-R,R);P(t+i*_+s*F,n+a*_+l*F,.35*w,i*p(.8,2),a*p(.8,2),p(1,2.5),.45,Math.random()<.5?Pt.foam:Pt.sea,2,7,!1)}if(!b.sp&&S>.82){b.sp=!0;for(let k=0;k<14;k++){const F=p(-r*.6,r*.6);P(t+i*r*.8+s*F,n+a*r*.8+l*F,.2,i*p(1,3)+p(-.5,.5),a*p(1,3)+p(-.5,.5),p(2,4),.55,Pt.aqua,3,9,!1)}tt(3)}}}),!0};function by(e,t){A({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.1),a=Ui(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),c=Math.sin(l)>0;n.globalAlpha=a*(c?1:.45),Ys(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,s%2?Pt.sea:Pt.foam)}if(r>.45){n.globalAlpha=Ui((r-.45)/.55,.2,.6);const s=Jt(i-72-(r-.45)*20),l=Jt(o);n.fillStyle=Pt.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)P(e+p(-.3,.3),t+p(-.3,.3),.2,0,0,p(1.2,2.2),.8,Math.random()<.5?Pt.sea:Pt.foam,2,0,!0);return!0}K.tortuga_W=e=>{if(e.type==="heal")return by(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=Ui(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,m=f*2.094+h*5+l*9,[y,g]=C(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*h),Ys(s,y,g,h>.6?3:2,c%3===0?Pt.foam:c%3===1?Pt.sea:Pt.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+p(-.2,.2),d:s*.03+p(0,.05)});const a={"#":Pt.shell,a:Pt.sand};return A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=u.a0+c*4.2+l*2,[m,y]=C(t+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),xy(s,vy,m,y,2,a)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=ft(o),f=u?u.x:t,c=u?u.y:n,[h,d]=C(f,c,.95),m=Jt(h),y=Jt(d),g=Ui(l,.08,.5),x=Jt(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=g*.3,s.fillStyle=Pt.lamp,s.fillRect(m-8,y-8,16,16),s.globalAlpha=g,s.fillRect(m-x,y-1,x*2,2),s.fillRect(m-1,y-x,2,x*2),s.fillStyle=Pt.lampW,s.fillRect(m-3,y-3,6,6);for(let b=0;b<8;b++){const v=b*.785+l*5,S=10+l*30;Ys(s,m+Math.cos(v)*S,y+Math.sin(v)*S*.5+l*40,2,Pt.lamp)}s.globalAlpha=1}}),!0};const ah=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)ah.push({th:r/t*6.283+n*.31,ph:e,row:n})});K.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};A({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=ft(t);if(!l||l.dead)return;const u=s*n,[f,c]=C(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,m=Math.max(0,(u-(n-.25))/.25),y=36*d,g=18*d,x=62*d,b=u*1.6%2.2-.3,v=ah.map(S=>{const _=S.th+u*.5,w=Math.cos(S.ph);return{d:S,th:_,x:f+Math.cos(_)*y*w+Math.cos(_)*m*30,y:c+Math.sin(_)*g*w-Math.sin(S.ph)*x-4-m*10+m*m*30,z:Math.sin(_)*w}}).sort((S,_)=>S.z-_.z);for(const S of v){const _=u-(3-S.d.row)*.05;if(_<0)continue;S.y-=(1-Math.min(1,_/.1))*14;const w=S.z>-.15,R=Math.abs(S.d.ph-b)<.22;a.globalAlpha=(w?.85:.35)*(1-m)*Math.min(1,_*10),ih(a,S.x,S.y,_<.06||R?Pt.white:Pt.foam,R?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let S=0;S<16;S++){const _=p(0,6.283),w=p(1.5,3.5);P(l.x,l.y,p(.2,.9),Math.cos(_)*w,Math.sin(_)*w,p(1,3),.5,Math.random()<.5?Pt.foam:Pt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;P(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,p(1.5,2.5),.4,Math.random()<.5?Pt.sand:Pt.shell,2,3,!1)}return!0};K.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}A({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const c=Ui(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);gt(t,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(m,y)=>C(t+m*h,n+y*h);for(let m=0;m<2;m++){u.globalAlpha=c*(m?.75:.85);const y=m?Pt.lamp:Pt.shellD,g=m?2:3,x=m?-1:0,b=m?-2:0;for(const[v,S]of i)for(let _=0;_<6;_++){const w=_*Math.PI/3,R=(_+1)*Math.PI/3,[T,k]=d(v+Math.cos(w)*o,S+Math.sin(w)*o),[F,U]=d(v+Math.cos(R)*o,S+Math.sin(R)*o);Wa(u,T+x,k+b,F+x,U+b,5,g,y)}for(let v=0;v<22;v++){const S=v/22*6.283,[_,w]=d(Math.cos(S)*r*.66,Math.sin(S)*r*.66),[R,T]=d(Math.cos(S)*r*.86,Math.sin(S)*r*.86);Wa(u,_+x,w+b,R+x,T+b,5,g,y);const k=(v+1)/22*6.283,[F,U]=d(Math.cos(k)*r*.86,Math.sin(k)*r*.86);Wa(u,R+x,T+b,F+x,U+b,6,g,y)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const c=u/a*6.283,h=f/a*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),m=Math.sin(Math.min(1,f*1.05)*Math.PI),y=[];for(let g=0;g<a;g++){const x=g/a*6.283;y.push(C(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of s){const x=g/a*6.283,[b,v]=y[g],S=y[(g+1)%a][0],_=Math.max(4,Math.ceil(Math.abs(S-b))+2),w=Jt((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(w<4)continue;const R=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=R?.82:1;const T=R?2:-2;sh(u,Jt(Math.min(b,S)-1),Jt(v),_,w,Jt(Math.cos(x-.785)*3),T,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let g=0;g<16;g++){const x=p(0,6.283);P(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*p(1,2.5),Math.sin(x)*p(1,2.5),p(1.5,3),.6,Math.random()<.5?Pt.foam:Pt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=p(0,6.283),c=p(2,5);P(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,p(3.5,6.5),p(.8,1.1),[Pt.aqua,Pt.sea,Pt.foam,Pt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return tt(10),!0};Me.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,a){const[s,l]=C(t,n),u=Jt(s),f=Jt(l);for(let c=0;c<(r?3:2);c++){const h=a*1.3-c*.18;if(h<=0||h>=1)continue;const d=Jt(6+h*(r?34:24)),m=Jt(d/2);i.globalAlpha=1-h,i.fillStyle=c?Pt.sea:Pt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5);i.globalAlpha=1-a,ih(i,s,l-a*8,Pt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=p(0,6.283),s=p(1,2.5);P(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,p(1.5,3),.4,i%2?Pt.aqua:Pt.foam,2,9,!1)}};const pt=Math.round,so=Math.PI*2,st={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},lh=e=>e*j.HW*Math.SQRT2;function he(e,t,n,r){r=Math.max(1,pt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(pt(t[0]+(n[0]-t[0])*s/i-a),pt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function My(e,t,n,r,o,i,a=!1){const s=t[0].length,l=t.length,u=pt(n-s*o/2),f=pt(r-l*o/2);for(const c in i){e.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<s;d++)t[h][a?s-1-d:d]===c&&e.fillRect(u+d*o,f+h*o,o,o)}}function Sy(e,t,n,r,o,i){const a=Math.abs(r),s=pt(t),l=pt(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=o,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=o,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const li=new Map;function uh(e){if(li.has(e))return!1;if(li.size>300)for(const[t,n]of li)M.T-n>4&&li.delete(t);return li.set(e,M.T),!0}function _y(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Te(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const wy=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Me.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=pt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=st.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+c*l*.8-u/2,u,u);o.fillStyle=st.f2;for(let f=0;f<6;f++){const c=f/6*so+i*3;o.fillRect(pt(a+Math.cos(c)*(6+i*8))-1,pt(s+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=st.cream,o.fillRect(a-2,s-2,4,4))}}),P(t,n,.6,p(-.5,.5),p(-.5,.5),.4,.8,Math.random()<.5?st.leaf:st.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)P(t,n,.5,p(-1.5,1.5),p(-1.5,1.5),p(1,2),.3,st.f1,2,4,!0)};Se.zorra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(c,h=0)=>[n+a*c-s*h,r+s*c+a*h];yt(!0);const u=$t();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?st.f2:st.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(pt(h[0])-2+(c>>1),pt(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,yt(!1),e.fillStyle=st.woodD,he(e,l(-13),l(3),3),e.fillStyle=st.wood,he(e,l(-12),l(2),1),e.fillStyle=st.steel,he(e,l(3),l(7),3),e.fillStyle="#ffffff",he(e,l(6),l(8),1),e.fillStyle=st.leaf,he(e,l(-13,0),l(-9,-3),2),e.fillStyle=st.leafD,he(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?ft(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&uh("za"+t.id)&&(Me.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),ct.sfx("atk_zorra",f.x,f.y,.6))};K.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=C(e.x,e.y),a=C(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;A({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.5),m=-u,y=l;f.globalAlpha=c<.6?1:(1-c)/.4;const g=[];for(let v=-5;v<=5;v++)g.push([h+m*v*3.4-l*v*v*.45,d+y*v*3.4-u*v*v*.45]);f.fillStyle=st.woodD;for(const v of g)f.fillRect(pt(v[0])-2,pt(v[1])-2,4,4);f.fillStyle=st.wood;for(const v of g)f.fillRect(pt(v[0])-1,pt(v[1])-1,2,2);f.fillStyle=st.leaf;for(const v of[g[0],g[10]])f.fillRect(pt(v[0])-2,pt(v[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),b=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=st.cream,he(f,g[0],b,1),he(f,b,g[10],1)}}),A({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.5),m=4+c*16;f.fillStyle=st.f1;for(let y=0;y<8;y++){const g=y/8*so;f.fillRect(pt(h+l*8+Math.cos(g)*m)-2,pt(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)P(r,o,.55,-n*p(-2,2)+t*p(0,1),t*p(-2,2)+n*p(0,1),p(.5,1.5),.9,f%2?st.leaf:st.leafL,3,1.5,!1,.95)};Se.zorra_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,c=0)=>[n+a*f-s*c,r+s*f+a*c];yt(!0);const u=$t();for(let f=0;f<=16;f++){const c=f/16,h=pt(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,m=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?st.cream:c>.45?st.fox:st.f1,u.fillRect(pt(m[0]-h/2),pt(m[1]-h/2),h,h)}u.globalAlpha=1,yt(!1),e.fillStyle=st.woodD,he(e,l(-22),l(4),4),e.fillStyle=st.wood,he(e,l(-21),l(3),2),e.fillStyle="#20202a",he(e,l(3,-4),l(12),3),he(e,l(3,4),l(12),3),e.fillStyle=st.steel,he(e,l(4,-2),l(11),2),he(e,l(4,2),l(11),2),e.fillStyle="#ffffff",he(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=st.leafD,he(e,l(-23,0),l(-15,f*5),3),e.fillStyle=st.leaf,he(e,l(-22,f),l(-16,f*4),2),e.fillStyle=st.leafL,e.fillRect(pt(l(-17,f*4)[0]),pt(l(-17,f*4)[1]),2,2);Math.random()<.3&&P(t.x,t.y,t.z||.45,p(-.4,.4),p(-.4,.4),-.2,.7,Math.random()<.6?st.leaf:st.autumn,3,.6,!1,.95);for(const f of _y(t))if(uh("zq"+t.id+":"+f.id)){const c=t.vx||1,h=t.vy||0,d=Math.hypot(c,h)||1;A({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,y){const g=C(f.x-c/d*.7,f.y-h/d*.7,.5),x=C(f.x+c/d*.9,f.y+h/d*.9,.5);m.globalAlpha=1-y,m.fillStyle=st.fox,he(m,g,x,pt(6*(1-y))+1),m.fillStyle=st.cream,he(m,g,x,2)}});for(let m=0;m<6;m++)P(f.x,f.y,.5,c/d*p(1,3)+p(-.8,.8),h/d*p(1,3)+p(-.8,.8),p(.5,1.5),.35,m%2?st.f1:st.fox,2,3,!0)}};K.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*so,h:s/9,sp:p(4.5,6),col:[st.leaf,st.leafL,st.autumn][s%3],dk:s%3===2?st.foxD:st.leafD,r:p(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*so,l=p(1.5,2.5);P(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,p(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,p(.8,1.6),p(.6,.9),[st.leaf,st.leafL,st.autumn][a%3],3,1,!1,.94)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=ft(t),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const y of i)P(r+Math.cos(y.a+f*y.sp)*y.r,o+Math.sin(y.a+f*y.sp)*y.r,.5,Math.cos(y.a)*2,Math.sin(y.a)*2,.5,.7,y.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=s>.92?(1-s)/.08:1,[d,m]=C(r,o,.35);a.globalAlpha=.55*h,a.fillStyle="#e8fff0";for(let y=0;y<2;y++){const g=f*7+y*Math.PI,x=lh(.62)*c;for(let b=0;b<7;b++){const v=g+b*.16;a.fillRect(pt(d+Math.cos(v)*x)-1,pt(m+Math.sin(v)*x*.45-y*14),3-(b>4?1:0),2)}}for(const y of i){const g=y.a+f*y.sp,x=(y.h+f*.45)%1,b=y.r*c*(1-x*.35),[v,S]=C(r+Math.cos(g)*b,o+Math.sin(g)*b,.15+x*1.1);a.globalAlpha=h*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),Sy(a,v,S,Math.sin(f*11+y.a*3),y.col,y.dk)}}})};K.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,a=C(t,n),s=C(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));A({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const m=h-d.s*i;if(m<0||m>.42)continue;const y=.8*(1-m/.42),[g,x]=C(d.x,d.y,.32+m*.3);f.globalAlpha=y,My(f,wy,g,x,3,{o:st.f2,t:st.f1,c:st.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const v=g+(b-1.5)*9*(l?-1:1),S=pt(4+5*Math.abs(Math.sin(h*30+b*1.7))+m*14);f.fillStyle=b%2?st.f3:st.f1,f.fillRect(pt(v)-2,pt(x-12-S),4,S),f.fillStyle=st.f0,f.fillRect(pt(v)-1,pt(x-12-S),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=C(r,o,.3+c*.4),m=14+c*10;for(let y=0;y<6;y++){const g=y/6*so+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+y)),f.fillStyle=y%2?st.f3:st.f2,f.fillRect(pt(h+Math.cos(g)*m)-3,pt(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=st.f0,f.fillRect(pt(h+Math.cos(g)*m)-1,pt(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();P(t+(r-t)*c+p(-.2,.2),n+(o-n)*c+p(-.2,.2),.3,p(-.3,.3),p(-.3,.3),p(.8,1.6),p(.5,.8),[st.f1,st.f2,st.f3][f%3],3,-.5,!0,.95)}};K.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=ft(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(g,x)=>({ox:p(-.3,.3),oy:p(-.3,.3),dl:x*.03}));A({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(g,x){const b=x*.5;for(const v of c){const S=(b-v.dl)/.35;if(S<0||S>1)continue;const _=.6+S*4.5,w=a+v.ox-l*S*.8,R=s+v.oy-u*S*.8,T=C(w,R,_),k=C(w+l*.15,R+u*.15,_-.4);g.globalAlpha=1-S*.5,g.fillStyle=st.fox,he(g,k,T,3),g.fillStyle=st.f0,g.fillRect(pt(T[0])-2,pt(T[1])-2,4,4)}}});for(let g=0;g<8;g++)P(a,s,.6,p(-.5,.5),p(-.5,.5),p(2,4),.4,g%2?st.gold:st.f1,2,2,!0);const h=28,d=.45,m=Array.from({length:h},(g,x)=>{const b=Math.random()*so,v=Math.sqrt(Math.random())*r*.92,S=t+Math.cos(b)*v,_=n+Math.sin(b)*v;return{t0:.3+x*(2.5/h)+p(-.04,.04),lx:S,ly:_,sx:S+l*1.8+p(-.3,.3),sy:_+u*1.8+p(-.3,.3),landed:!1,tang:[0,1]}}),y=(g,x)=>C(g.sx+(g.lx-g.sx)*x,g.sy+(g.ly-g.sy)*x,4*(1-x*x));A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(g,x){const b=x*o;for(const v of m){const S=(b-v.t0)/d;if(S<0)continue;if(S>=1){if(!v.landed){v.landed=!0,P(v.lx,v.ly,.1,p(-.8,.8),p(-.8,.8),p(1,2),.35,Math.random()<.7?st.f1:st.leaf,2,6,!0);const U=y(v,1),B=y(v,.93),Z=Math.hypot(U[0]-B[0],U[1]-B[1])||1;v.tang=[(U[0]-B[0])/Z,(U[1]-B[1])/Z]}const F=(b-v.t0-d)/.14;if(F<1){const[U,B]=C(v.lx,v.ly),Z=pt(3+F*9);g.globalAlpha=1-F,g.fillStyle=st.gold,g.fillRect(U-Z,B-1,Z*2,2),g.fillRect(U-1,B-pt(Z/2),2,Z)}continue}const _=y(v,S),w=y(v,Math.max(0,S-.07)),R=Math.hypot(_[0]-w[0],_[1]-w[1])||1,T=(_[0]-w[0])/R,k=(_[1]-w[1])/R;g.globalAlpha=.35,g.fillStyle=st.f2;for(let F=1;F<=4;F++){const U=y(v,Math.max(0,S-F*.05));g.fillRect(pt(U[0])-1,pt(U[1])-1,3,3)}g.globalAlpha=1,g.fillStyle=st.fox,he(g,[_[0]-T*16,_[1]-k*16],_,3),g.fillStyle=st.gold,he(g,[_[0]-T*14,_[1]-k*14],_,1),g.fillStyle="#ffffff",g.fillRect(pt(_[0])-2,pt(_[1])-2,4,4)}}}),A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(g,x,b){const v=x*o,S=x>.85?(1-x)/.15:Math.min(1,v*4),[_,w]=C(t,n),R=lh(r);!b.sh&&v>.75&&(b.sh=!0,tt(3)),g.globalAlpha=.7*S,g.fillStyle=st.fox;for(let T=0;T<10;T++){const k=T/10*so+v*.6,F=_+Math.cos(k)*R,U=w+Math.sin(k)*R*.5,B=-Math.cos(k),Z=-Math.sin(k)*.5;g.fillRect(pt(F)-2,pt(U)-2,4,4),g.fillRect(pt(F+B*6-Z*4)-1,pt(U+Z*6+B*2)-1,3,3),g.fillRect(pt(F+B*6+Z*4)-1,pt(U+Z*6-B*2)-1,3,3)}for(const T of m){if(!T.landed)continue;const[k,F]=C(T.lx,T.ly),U=T.tang[0],B=T.tang[1];g.globalAlpha=S,g.fillStyle="#00000055",g.fillRect(pt(k)-3,pt(F),6,2),g.fillStyle=st.woodD,he(g,[k-U*13,F-B*13],[k,F],3),g.fillStyle=st.wood,he(g,[k-U*12,F-B*12],[k-U*2,F-B*2],1),g.fillStyle=st.leaf,g.fillRect(pt(k-U*13)-2,pt(F-B*13)-1,2,3),g.fillStyle=st.autumn,g.fillRect(pt(k-U*13),pt(F-B*13)-2,2,3)}}})};var Wt=`in vec2 aPosition;
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
`,Ht=`struct GlobalFilterUniforms {
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
}`,Ay=`in vec2 vTextureCoord;
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
`,Cy=`struct AdjustmentUniforms {
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
}`,Ty=Object.defineProperty,Ry=(e,t,n)=>t in e?Ty(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fh=(e,t,n)=>(Ry(e,typeof t!="symbol"?t+"":t,n),n);const Py=class ch extends Gt{constructor(t){t={...ch.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Cy,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Ay,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),fh(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};fh(Py,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Iy=`
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
}`,zy=`struct KawaseBlurUniforms {
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
}`,Oy=`
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
`,Fy=`struct KawaseBlurUniforms {
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
}`,Ey=Object.defineProperty,ky=(e,t,n)=>t in e?Ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>(ky(e,typeof t!="symbol"?t+"":t,n),n);const hh=class dh extends Gt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Ot("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...dh.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:n?.clamp?Fy:zy,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:n?.clamp?Oy:Iy,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Xr(this,"uniforms"),Xr(this,"_pixelSize",{x:0,y:0}),Xr(this,"_clamp"),Xr(this,"_kernels",[]),Xr(this,"_blur"),Xr(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,r,o);else{const l=dn.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),c=u,u=f,f=c;s=this._kernels[h]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,r,o),dn.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};Xr(hh,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let mh=hh;var Uy=`in vec2 vTextureCoord;
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
`,Ly=`struct AdvancedBloomUniforms {
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
`,Dy=`
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
`,Xy=`struct ExtractBrightnessUniforms {
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
`,Gy=Object.defineProperty,By=(e,t,n)=>t in e?Gy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ph=(e,t,n)=>(By(e,typeof t!="symbol"?t+"":t,n),n);const yh=class gh extends Gt{constructor(t){t={...gh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Xy,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Dy,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),ph(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};ph(yh,"DEFAULT_OPTIONS",{threshold:.5});let Ny=yh;var $y=Object.defineProperty,Wy=(e,t,n)=>t in e?$y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,po=(e,t,n)=>(Wy(e,typeof t!="symbol"?t+"":t,n),n);const xh=class vh extends Gt{constructor(t){t={...vh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Ly,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Uy,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:Tt.WHITE}}),po(this,"uniforms"),po(this,"bloomScale",1),po(this,"brightness",1),po(this,"_extractFilter"),po(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Ny({threshold:t.threshold}),this._blurFilter=new mh({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=dn.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=dn.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,r,o),dn.returnTexture(a),dn.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};po(xh,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let Hy=xh;var Vy=`precision highp float;
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
`,qy=`struct AsciiUniforms {
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
}`,Yy=Object.defineProperty,Ky=(e,t,n)=>t in e?Yy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Il=(e,t,n)=>(Ky(e,typeof t!="symbol"?t+"":t,n),n);const jy=class bh extends Gt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ot("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...bh.DEFAULT_OPTIONS,...n};const o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:qy,entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:Vy,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Il(this,"uniforms"),Il(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new $e,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Il(jy,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Qy=`precision highp float;
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
`,Zy=`struct BevelUniforms {
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
}`,Jy=Object.defineProperty,tg=(e,t,n)=>t in e?Jy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yo=(e,t,n)=>(tg(e,typeof t!="symbol"?t+"":t,n),n);const eg=class Mh extends Gt{constructor(t){t={...Mh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Zy,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Qy,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),yo(this,"uniforms"),yo(this,"_thickness"),yo(this,"_rotation"),yo(this,"_lightColor"),yo(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new $e,this._shadowColor=new $e,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ko}set rotation(t){this._rotation=t*ko,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};yo(eg,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var ng=Object.defineProperty,rg=(e,t,n)=>t in e?ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gs=(e,t,n)=>(rg(e,typeof t!="symbol"?t+"":t,n),n);const og=class Sh extends pp{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Ot("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Sh.DEFAULT_OPTIONS,...n},super(),gs(this,"_blurXFilter"),gs(this,"_blurYFilter"),gs(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new of({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new of({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=dn.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),dn.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Ot("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Ot("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Ot("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Ot("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Ot("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Ot("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};gs(og,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var ig=`precision highp float;
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
`,sg=`struct BulgePinchUniforms {
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
}`,ag=Object.defineProperty,lg=(e,t,n)=>t in e?ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_h=(e,t,n)=>(lg(e,typeof t!="symbol"?t+"":t,n),n);const ug=class wh extends Gt{constructor(t){t={...wh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:sg,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:ig,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),_h(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};_h(ug,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var fg=`precision highp float;
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
`,cg=`in vec2 aPosition;
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
`,Ff=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,lo=lo||{};lo.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var lo=lo||{};lo.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(z){var O=new Error(t+": "+z);throw O.source=t,O}function r(){var z=o();return t.length>0&&n("Invalid input not EOF"),z}function o(){return v(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,c)||a("repeating-radial-gradient",e.repeatingRadialGradient,c)}function a(z,O,L){return s(O,function(X){var N=L();return N&&(bt(e.comma)||n("Missing comma before color stops")),{type:z,orientation:N,colorStops:v(S)}})}function s(z,O){var L=bt(z);if(L){bt(e.startCall)||n("Missing (");var X=O(L);return bt(e.endCall)||n("Missing )"),X}}function l(){return u()||f()}function u(){return lt("directional",e.sideOrCorner,1)}function f(){return lt("angular",e.angleValue,1)}function c(){var z,O=h(),L;return O&&(z=[],z.push(O),L=t,bt(e.comma)&&(O=h(),O?z.push(O):t=L)),z}function h(){var z=d()||m();if(z)z.at=g();else{var O=y();if(O){z=O;var L=g();L&&(z.at=L)}else{var X=x();X&&(z={type:"default-radial",at:X})}}return z}function d(){var z=lt("shape",/^(circle)/i,0);return z&&(z.style=Z()||y()),z}function m(){var z=lt("shape",/^(ellipse)/i,0);return z&&(z.style=U()||y()),z}function y(){return lt("extent-keyword",e.extentKeywords,1)}function g(){if(lt("position",/^at/,0)){var z=x();return z||n("Missing positioning value"),z}}function x(){var z=b();if(z.x||z.y)return{type:"position",value:z}}function b(){return{x:U(),y:U()}}function v(z){var O=z(),L=[];if(O)for(L.push(O);bt(e.comma);)O=z(),O?L.push(O):n("One extra comma");return L}function S(){var z=_();return z||n("Expected color definition"),z.length=U(),z}function _(){return R()||k()||T()||w()}function w(){return lt("literal",e.literalColor,0)}function R(){return lt("hex",e.hexColor,1)}function T(){return s(e.rgbColor,function(){return{type:"rgb",value:v(F)}})}function k(){return s(e.rgbaColor,function(){return{type:"rgba",value:v(F)}})}function F(){return bt(e.number)[1]}function U(){return lt("%",e.percentageValue,1)||B()||Z()}function B(){return lt("position-keyword",e.positionKeywords,1)}function Z(){return lt("px",e.pixelValue,1)||lt("em",e.emValue,1)}function lt(z,O,L){var X=bt(O);if(X)return{type:z,value:X[L]}}function bt(z){var O,L;return L=/^[\n\r\t\s]+/.exec(t),L&&I(L[0].length),O=z.exec(t),O&&I(O[0].length),O}function I(z){t=t.substr(z)}return function(z){return t=z.toString(),r()}}();var hg=lo.parse;lo.stringify;function dg(e){const t=hg(Mg(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=mg(n.type),o=pg(n.colorStops),i=vg(n.orientation);return{type:r,stops:o,angle:i}}function mg(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function pg(e){const t=gg(e),n=[],r=new $e;for(let o=0;o<e.length;o++){const i=yg(e[o]),a=r.setValue(i).toArray();n.push({offset:t[o],color:a.slice(0,3),alpha:a[3]})}return n}function yg(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function gg(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const r=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)o=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=s.indexDelta,o=t[i]}}return t.map(xg)}function xg(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function vg(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return bg(e.value)}return 0}function bg(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function Mg(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Sg=Object.defineProperty,_g=(e,t,n)=>t in e?Sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jr=(e,t,n)=>(_g(e,typeof t!="symbol"?t+"":t,n),n);const Ha=90;function wg(e){return[...e].sort((t,n)=>t.offset-n.offset)}const Li=class xs extends Gt{constructor(t){if(t&&"css"in t?t={...dg(t.css||""),alpha:t.alpha??xs.defaults.alpha,maxColors:t.maxColors??xs.defaults.maxColors}:t={...xs.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Ut.from({vertex:{source:Ff,entryPoint:"mainVertex"},fragment:{source:Ff,entryPoint:"mainFragment"}}),r=Dt.from({vertex:cg,fragment:fg,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Ha,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Jr(this,"baseUniforms"),Jr(this,"stopsUniforms"),Jr(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=wg(t),r=new $e;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Ha}set angle(t){this.baseUniforms.uOptions[1]=t-Ha}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Jr(Li,"LINEAR",0);Jr(Li,"RADIAL",1);Jr(Li,"CONIC",2);Jr(Li,"defaults",{type:Li.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Ag=`in vec2 vTextureCoord;
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

}`,Cg=`struct ColorMapUniforms {
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
}`,Tg=Object.defineProperty,Rg=(e,t,n)=>t in e?Tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,or=(e,t,n)=>(Rg(e,typeof t!="symbol"?t+"":t,n),n);const Pg=class Ah extends Gt{constructor(...t){let n=t[0]??{};if((n instanceof Tt||n instanceof un)&&(Ot("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Ah.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Cg,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:Ag,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),or(this,"uniforms"),or(this,"_size",0),or(this,"_sliceSize",0),or(this,"_slicePixelSize",0),or(this,"_sliceInnerSize",0),or(this,"_nearest",!1),or(this,"_scaleMode","linear"),or(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof Tt?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};or(Pg,"DEFAULT_OPTIONS",{colorMap:Tt.WHITE,nearest:!1,mix:1});var Ig=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,zg=`struct ColorOverlayUniforms {
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
`,Og=Object.defineProperty,Fg=(e,t,n)=>t in e?Og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zl=(e,t,n)=>(Fg(e,typeof t!="symbol"?t+"":t,n),n);const Eg=class Ch extends Gt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Ot("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...Ch.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:zg,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:Ig,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),zl(this,"uniforms"),zl(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new $e,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};zl(Eg,"DEFAULT_OPTIONS",{color:0,alpha:1});var kg=`in vec2 vTextureCoord;
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
`,Ug=`struct ColorReplaceUniforms {
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
}`,Lg=Object.defineProperty,Dg=(e,t,n)=>t in e?Lg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vs=(e,t,n)=>(Dg(e,typeof t!="symbol"?t+"":t,n),n);const Xg=class Th extends Gt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Ot("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...Th.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Ug,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:kg,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),vs(this,"uniforms"),vs(this,"_originalColor"),vs(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new $e,this._targetColor=new $e,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Ot("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Ot("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Ot("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Ot("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};vs(Xg,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Gg=`in vec2 vTextureCoord;
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
}`,Bg=`struct ConvolutionUniforms {
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
}`,Ng=Object.defineProperty,$g=(e,t,n)=>t in e?Ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rh=(e,t,n)=>($g(e,typeof t!="symbol"?t+"":t,n),n);const Wg=class Ph extends Gt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Ot("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Ph.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Bg,entryPoint:"mainFragment"}}),a=Dt.from({vertex:Wt,fragment:Gg,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Rh(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Rh(Wg,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Hg=`precision highp float;
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
`,Vg=`struct CRTUniforms {
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
}`,qg=Object.defineProperty,Yg=(e,t,n)=>t in e?qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bs=(e,t,n)=>(Yg(e,typeof t!="symbol"?t+"":t,n),n);const Kg=class Ih extends Gt{constructor(t){t={...Ih.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Vg,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Hg,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),bs(this,"uniforms"),bs(this,"seed"),bs(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};bs(Kg,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var jg=`precision highp float;
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
`,Qg=`struct DotUniforms {
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
}`,Zg=Object.defineProperty,Jg=(e,t,n)=>t in e?Zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tx=(e,t,n)=>(Jg(e,t+"",n),n);const ex=class zh extends Gt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ot("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...zh.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Qg,entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:jg,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};tx(ex,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var nx=`precision highp float;
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
}`,rx=`struct DropShadowUniforms {
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
}`,ox=Object.defineProperty,ix=(e,t,n)=>t in e?ox(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,go=(e,t,n)=>(ix(e,typeof t!="symbol"?t+"":t,n),n);const sx=class Oh extends Gt{constructor(t){t={...Oh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:rx,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:nx,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),go(this,"uniforms"),go(this,"shadowOnly",!1),go(this,"_color"),go(this,"_blurFilter"),go(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new $e,this.color=t.color??0,this._blurFilter=new mh({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new Gt({gpuProgram:Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:Dt.from({vertex:Wt,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=dn.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),dn.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};go(sx,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var ax=`precision highp float;
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
`,lx=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,ux=Object.defineProperty,fx=(e,t,n)=>t in e?ux(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bn=(e,t,n)=>(fx(e,typeof t!="symbol"?t+"":t,n),n);const cx=class Fh extends Gt{constructor(t){t={...Fh.defaults,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:lx,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:ax,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new Tt({source:new lu({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),Bn(this,"uniforms"),Bn(this,"average",!1),Bn(this,"minSize",8),Bn(this,"sampleSize",512),Bn(this,"_canvas"),Bn(this,"texture"),Bn(this,"_slices",0),Bn(this,"_sizes",new Float32Array(1)),Bn(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ko}set direction(t){this.uniforms.uDirection=t*ko}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Bn(cx,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var hx=`precision highp float;
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
`,dx=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,mx=Object.defineProperty,px=(e,t,n)=>t in e?mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ol=(e,t,n)=>(px(e,typeof t!="symbol"?t+"":t,n),n);const yx=class Eh extends Gt{constructor(t){t={...Eh.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:dx,entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:hx.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),Ol(this,"uniforms"),Ol(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new $e,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Ol(yx,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var gx=`precision highp float;
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
`,xx=`struct GodrayUniforms {
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

\${PERLIN}`,vx=`vec3 mod289(vec3 x)
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
`,bx=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,Mx=Object.defineProperty,Sx=(e,t,n)=>t in e?Mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xo=(e,t,n)=>(Sx(e,typeof t!="symbol"?t+"":t,n),n);const _x=class kh extends Gt{constructor(t){t={...kh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:xx.replace("${PERLIN}",bx),entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:gx.replace("${PERLIN}",vx),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),xo(this,"uniforms"),xo(this,"time",0),xo(this,"_angleLight",[0,0]),xo(this,"_angle",0),xo(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*ko;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};xo(_x,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var wx=`in vec2 vTextureCoord;
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
`,Ax=`struct HslUniforms {
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
}`,Cx=Object.defineProperty,Tx=(e,t,n)=>t in e?Cx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fl=(e,t,n)=>(Tx(e,typeof t!="symbol"?t+"":t,n),n);const Rx=class Uh extends Gt{constructor(t){t={...Uh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Ax,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:wx,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Fl(this,"uniforms"),Fl(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Fl(Rx,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Px=`precision highp float;
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
`,Ix=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,zx=Object.defineProperty,Ox=(e,t,n)=>t in e?zx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,El=(e,t,n)=>(Ox(e,typeof t!="symbol"?t+"":t,n),n);const Fx=class Lh extends Gt{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Ie){Ot("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...Lh.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Ix,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:Px,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),El(this,"uniforms"),El(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};El(Fx,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Ex=`in vec2 vTextureCoord;
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
`,kx=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,Ux=Object.defineProperty,Lx=(e,t,n)=>t in e?Ux(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ms=(e,t,n)=>(Lx(e,typeof t!="symbol"?t+"":t,n),n);const Dx=class Dh extends Gt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Ot("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...Dh.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:kx.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:Ex.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),Ms(this,"uniforms"),Ms(this,"_replacements",[]),Ms(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new $e;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Ot("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Ot("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Ms(Dx,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var Xx=`precision highp float;
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
}`,Gx=`struct OldFilmUniforms {
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
}`,Bx=Object.defineProperty,Nx=(e,t,n)=>t in e?Bx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kl=(e,t,n)=>(Nx(e,typeof t!="symbol"?t+"":t,n),n);const $x=class Xh extends Gt{constructor(t){t={...Xh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Gx,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Xx,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),kl(this,"uniforms"),kl(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};kl($x,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Wx=`precision highp float;
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
`,Hx=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Vx=Object.defineProperty,qx=(e,t,n)=>t in e?Vx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vr=(e,t,n)=>(qx(e,typeof t!="symbol"?t+"":t,n),n);const _u=class Gr extends Gt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ot("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...Gr.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Hx,entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:Wx.replace(/\$\{ANGLE_STEP\}/,Gr.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),Vr(this,"uniforms"),Vr(this,"_thickness"),Vr(this,"_quality"),Vr(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Gr.getAngleStep(r),this._color=new $e,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Gr.MAX_SAMPLES,Gr.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Gr.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Vr(_u,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Vr(_u,"MIN_SAMPLES",1);Vr(_u,"MAX_SAMPLES",100);var Yx=`precision highp float;
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
`,Kx=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,jx=Object.defineProperty,Qx=(e,t,n)=>t in e?jx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ss=(e,t,n)=>(Qx(e,typeof t!="symbol"?t+"":t,n),n);const Zx=class Gh extends Gt{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Ot("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Gh.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:Kx,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:Yx,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),Ss(this,"uniforms"),Ss(this,"_angle"),Ss(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};Ss(Zx,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Jx=`precision highp float;
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
`,t3=`struct ReflectionUniforms {
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
}`,e3=Object.defineProperty,n3=(e,t,n)=>t in e?e3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ul=(e,t,n)=>(n3(e,typeof t!="symbol"?t+"":t,n),n);const r3=class Bh extends Gt{constructor(t){t={...Bh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:t3,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:Jx,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ul(this,"uniforms"),Ul(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Ul(r3,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var o3=`precision highp float;
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
`,i3=`struct RgbSplitUniforms {
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
`,s3=Object.defineProperty,a3=(e,t,n)=>t in e?s3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nh=(e,t,n)=>(a3(e,typeof t!="symbol"?t+"":t,n),n);const l3=class $h extends Gt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Ot("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...$h.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:i3,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:o3,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),Nh(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Nh(l3,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var u3=`
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
`,f3=`
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
`,c3=Object.defineProperty,h3=(e,t,n)=>t in e?c3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ll=(e,t,n)=>(h3(e,typeof t!="symbol"?t+"":t,n),n);const d3=class Wh extends Gt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Ot("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Wh.DEFAULT_OPTIONS,...n};const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:f3,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:u3,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Ll(this,"uniforms"),Ll(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Ll(d3,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var m3=`precision highp float;
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
`,p3=`struct SimpleLightmapUniforms {
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
}`,y3=Object.defineProperty,g3=(e,t,n)=>t in e?y3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_s=(e,t,n)=>(g3(e,typeof t!="symbol"?t+"":t,n),n);const x3=class Hh extends Gt{constructor(...t){let n=t[0]??{};if(n instanceof Tt&&(Ot("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...Hh.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:p3,entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:m3,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),_s(this,"uniforms"),_s(this,"_color"),_s(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new $e,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};_s(x3,"DEFAULT_OPTIONS",{lightMap:Tt.WHITE,color:0,alpha:1});var v3=`in vec2 vTextureCoord;
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
`,b3=`struct TiltShiftUniforms {
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
}`,M3=Object.defineProperty,S3=(e,t,n)=>t in e?M3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dl=(e,t,n)=>(S3(e,typeof t!="symbol"?t+"":t,n),n);const _3=class Vh extends Gt{constructor(t){const{width:n,height:r}=Tp.defaultOptions;t={...Vh.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:b3,entryPoint:"mainFragment"}}),i=Dt.from({vertex:Wt,fragment:v3,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Dl(this,"uniforms"),Dl(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};Dl(_3,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var w3=`precision highp float;
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
`,A3=`struct TwistUniforms {
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
`,C3=Object.defineProperty,T3=(e,t,n)=>t in e?C3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qh=(e,t,n)=>(T3(e,typeof t!="symbol"?t+"":t,n),n);const R3=class Yh extends Gt{constructor(t){t={...Yh.DEFAULT_OPTIONS,...t};const n=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:A3,entryPoint:"mainFragment"}}),r=Dt.from({vertex:Wt,fragment:w3,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),qh(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};qh(R3,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var P3=`precision highp float;
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
`,I3=`struct ZoomBlurUniforms {
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
}`,z3=Object.defineProperty,O3=(e,t,n)=>t in e?z3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kh=(e,t,n)=>(O3(e,typeof t!="symbol"?t+"":t,n),n);const F3=class jh extends Gt{constructor(t){t={...jh.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Ut.from({vertex:{source:Ht,entryPoint:"mainVertex"},fragment:{source:I3.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=Dt.from({vertex:Wt,fragment:P3.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Kh(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Kh(F3,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let On;const Xt={};let Io,zo,Sn,Oo,Ai,ws,Ef="",Xl=0,As=null,Cs=null,Ks,Gl=[],Bl=[];const js=[],qo=new Map,br=[],rs=[];function wu(){return On.canvas}const Nl=[];async function E3(e){const t=Pp();let n=0;for(const o of t){try{On.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new Ke(Ks);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(M.W/2,M.H/2),Xt.lights.addChild(r);for(let o=0;o<3;o++)Sr.renderer.render(Sr.stage),On.renderer.render(On.stage),Mr.renderer.render(Mr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of Nl)try{Mr.renderer.texture.initSource(o)}catch{}try{Sr.renderer.texture.initSource(Ks.source)}catch{}}let Va;function k3(){try{const e=On.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let Mr,Sr;const qa={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function Or(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function U3(e){Mr=new fs,On=new fs,Sr=new fs,await Mr.init({...qa,background:"#100d18"}),await On.init({...qa,backgroundAlpha:0}),await Sr.init({...qa,backgroundAlpha:0}),M.gpuName=k3(),M.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(M.gpuName),e.style.position="fixed",Io=document.createElement("canvas"),zo=document.createElement("canvas"),Sn=document.createElement("canvas"),Oo=document.createElement("canvas"),Or(Mr.canvas,1),Or(Io,2),Or(On.canvas,3),Or(Sr.canvas,4,"plus-lighter"),Or(Sn,5),Or(zo,6),Or(Oo,7,"plus-lighter"),Sn.style.imageRendering="auto",On.canvas.style.pointerEvents="auto",ws=document.createElement("div"),ws.style.cssText="position:absolute;inset:0;pointer-events:none;z-index:3;mix-blend-mode:multiply;background:#ffffff;will-change:background-color",e.append(Mr.canvas,Io,On.canvas,ws,Sr.canvas,Sn,zo,Oo);for(const t of["ground"])Xt[t]=new de,Mr.stage.addChild(Xt[t]);for(const t of["world","top"])Xt[t]=new de,On.stage.addChild(Xt[t]);Xt.lights=new de,Sr.stage.addChild(Xt.lights),Xt.groundCam=new de,Xt.ground.addChild(Xt.groundCam),Xt.worldCam=new de,Xt.world.addChild(Xt.worldCam),Xt.shadows=new de,Xt.entities=new de,Xt.entities.sortableChildren=!0,Xt.worldCam.addChild(Xt.shadows,Xt.entities),Xt.lightsCam=new de,Xt.lights.addChild(Xt.lightsCam),Va=new Hy({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Va.resolution=.5,Xt.lights.filters=[Va],Ks=Tt.from(L3(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),Ai=new Ke(Tt.WHITE),Xt.top.addChild(Ai),kf(),window.addEventListener("resize",kf)}function L3(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function kf(){M.W=window.innerWidth,M.H=window.innerHeight;const e=i=>Math.ceil(i*Hl);Io.width=Oo.width=e(M.W),Io.height=Oo.height=e(M.H),zo.width=M.W,zo.height=M.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=Tt.from(t);o.source.scaleMode="linear",Ai.texture=o,Ai.width=M.W,Ai.height=M.H}function D3(){const e=window.MAP;for(const o of zp()){const i=new Ke(o.tex);i.x=o.x,i.y=o.y,Xt.groundCam.addChild(i),Nl.push(o.tex.source)}const t=X3(),n=Un.ground.naturalWidth,r=Un.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=Un[o];if(!a||!a.naturalWidth)continue;const s=Tt.from(a);s.source.scaleMode="linear",Nl.push(s.source);const l=new Ke(s);l.width=n,l.height=r;const u=new wp({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,Xt.groundCam.addChild(l,u),i==="flow"?As=u:Cs=u}Gl=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),Bl=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Gl)$l(o,!0);for(const o of Bl)$l(o,!1)}function $l(e,t){const n=Qt[e.sprite];if(!n||!Js(e.sprite))return;const r=Ao(e.sprite,null,0,0);if(!r)return;const o=new Ke(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=C(e.x,e.y);o.x=i,o.y=a,o.zIndex=(e.x+e.y)*100,Xt.entities.addChild(o),js.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function X3(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=Tt.from(e);return n.source.scaleMode="nearest",n}function G3(e){const t=Qt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",l0(e.sprite,"idle",e.animT||0)]:["walk",0]}const B3={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},N3={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194};function $3(e){let t=qo.get(e.id);if(!t){const n=()=>{const r=new Ke(Tt.EMPTY);return Xt.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new Ke(Tt.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,Xt.shadows.addChild(t.shadow),qo.set(e.id,t)}return t}function os(e,t,n,r,o,i,a){if(!t){e.visible=!1;return}const s=Qt[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=a}function W3(){const e=M.game,t=e.player,n=M.T,r=++H3;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=$3(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){os(i.spr,Ao("prop_boulder",null,0,0),"prop_boulder",...C(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const T of i.gear)T.visible=!1;continue}if(Te(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const T of i.gear)T.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const T=o._spriteBak||(M.mode==="guest"?o.heroKey:null);T&&(o.sprite=T)}if(o.sprite&&(!Qt[o.sprite]||!Js(o.sprite))){const T=B3[o.sprite];o._fbScale=T?T[1]:1,o._fbTint=T?T[2]:16777215,o.sprite=T&&Qt[T[0]]?T[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[s,l]=C(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const T=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(T*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6);const[c,h]=G3(o),d=a||Qt[o.sprite]&&Qt[o.sprite].dirs===1?0:o.dir;let m=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(m=1.45);const y=o.status&&o.status.transform;if(y){o._tfT=(o._tfT||0)+1/60;const T=Math.min(1,o._tfT*4),k=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;m*=1+(y.scale-1)*T*k}else o._tfT=0;const g=o.status||{};let x=s;g.stun&&["quake","roar","dust","firedash","bash"].includes(g.stun.fx)&&(x+=Math.round(Math.sin(n*60+o.id)*1.5));const b=(o.x+o.y)*100+1,v=Ao(o.sprite,c,d,a?l0(o.sprite,"idle",n):h);os(i.spr,v,o.sprite,x,u,m,b),i.spr.alpha=f,i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let S=0,_=0;if(o.hitFlash>.06?(S=16777215,_=.75):g.slow?(S=N3[g.slow.fx]||8050943,_=.35):g.root?(S=3836458,_=.3):g.stun&&g.stun.fx==="arcane"?(S=11563263,_=.35):g.burn?(S=16742954,_=.25+.15*Math.sin(n*14+o.id)):y?(S=y.kind==="fire"?16747066:16765514,_=.25+.1*Math.sin(n*6)):g.hex?(S=11565823,_=.2+.08*Math.sin(n*5+o.id)):g.berserk&&(S=16722458,_=.12+.08*Math.sin(n*9+o.id)),_>0&&v?(os(i.glow,v,o.sprite,x,u,m,b+.5),i.glow.tint=S,i.glow.alpha=_*f):i.glow.visible=!1,M.shadowsOn&&!a&&v&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Qt[o.sprite]&&Qt[o.sprite].fly)){const T=Qt[o.sprite];i.shadow.texture=v,i.shadow.visible=!0,i.shadow.anchor.set(T.ax/T.fw,T.ay/T.fh),i.shadow.setFromMatrix(new pe(m,0,-.8*m,-.38*m,Math.round(x),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const w=Qt[o.sprite]&&Qt[o.sprite].gear;let R=0;if(w&&(o.kind==="hero"||o.illusion)){const T=o.illusion?o.owner&&M.mode!=="guest"?e.gearCode(o.owner):0:M.mode==="guest"?o.gear||0:e.gearCode(o),k={w:T&3,h:T>>2&3,a:T>>4&3,b:T>>6&3};for(const F of["a","b","h","w"]){const U=k[F];if((U>0||F==="w")&&w[F]&&w[F].includes(U)){const B=o.sprite+"__"+F+U;if(!i.gear[R]){const Z=new Ke(Tt.EMPTY);Xt.entities.addChild(Z),i.gear[R]=Z}os(i.gear[R],Ao(B,c,d,h),B,x,u,m,b+.2+R*.05),i.gear[R].alpha=f,R++}}}for(;R<i.gear.length;R++)i.gear[R].visible=!1}for(const[o,i]of qo)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();qo.delete(o)}}let H3=0;const _o=new Map,Uf={},Yo=[];let V3=0;function q3(e,t){const n=e+(t?"o":"c");let r=Uf[n];return r||(r=Tt.from(f0(e,t)),r.source.scaleMode="nearest",Uf[n]=r),r}function Y3(){const e=M.game,t=e&&e.player,n=++V3;if(Yo.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;Yo.push(r);let i=_o.get(r.id);if(!i){const u=new Ke(Tt.EMPTY);u.anchor.set(.5,1-1/36),Xt.entities.addChild(u),i={spr:u,seen:0},_o.set(r.id,i)}i.seen=n;const[a,s]=C(r.x,r.y),l=r.until-e.t;i.spr.texture=q3(r.kind,du(r,M.T)),i.spr.x=Math.round(a),i.spr.y=Math.round(s),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(M.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of _o)o.seen!==n&&(o.spr.destroy(),_o.delete(r))}function K3(e,t){const n=M.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=M.mouse.wx,a=M.mouse.wy,s=Math.hypot(i-e.x,a-e.y)>r.WARD_RANGE;if(gt(e.x,e.y,r.WARD_RANGE,s?"#ffffff70":"#ffffffb0",null,2,[8,6]),s){const[l,u]=C(e.x,e.y),[f,c]=C(i,a);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-M.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,c),t.stroke(),t.restore()}gt(i,a,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),a1(t,o?"sen":"obs",i,a)}function j3(e){if(!e.sprite||!Js(e.sprite))return;const t=Ao(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new Ke(t),r=Qt[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=C(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,Xt.entities.addChild(n),br.push({spr:n,t:0,vy:20})}function Q3(){const e=M.game&&M.game.player?ec(M.game.t):{night:0,warm:0};Xl=e.night;const t=(a,s,l)=>Math.round(a+(s-a)*l);let n=t(255,92,e.night),r=t(255,104,e.night),o=t(255,168,e.night);n=t(n,255,e.warm*.6),r=t(r,176,e.warm*.6),o=t(o,128,e.warm*.6);const i=`rgb(${n},${r},${o})`;i!==Ef&&(Ef=i,ws.style.backgroundColor=i)}function Z3(e){Q3();const t=M.cam,n=M.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(M.W/2-t.x*t.z+r),a=Math.round(M.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])Xt[m].scale.set(t.z),Xt[m].position.set(i,a);const s=t.x-M.W/2/t.z-2,l=t.y-M.H/2/t.z-2,u=M.W/t.z+4,f=M.H/t.z+4;As&&(As.tilePosition.set(-n*14,-n*3),As.alpha=.45+.12*Math.sin(n*1.3)),Cs&&(Cs.tilePosition.set(Math.sin(n*.3)*6,0),Cs.alpha=.25+.15*Math.sin(n*.9));const c=M.game&&M.game.player,[h,d]=c?C(c.x,c.y):[0,0];for(const m of js){const[y,g]=C(m.o.x,m.o.y),x=y>s-200&&y<s+u+200&&g>l-100&&g<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=Ao(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Qt[m.o.sprite];if(m.spr.alpha=c&&m.o.x+m.o.y>c.x+c.y&&b&&Math.abs(h-y)<b.fw*.42&&d<g&&d>g-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const v=m.o,S=(v.x*12.9898+v.y*78.233)%6.28,_=.8+(v.x*7.1+v.y*3.3)%1*.7,w=(.02+(v.x*3.7+v.y*9.1)%1*.025)*(.6+M.wind);m.spr.skew.x=-(Math.sin(n*_*1.6+S)*w+Math.sin(n*_*3.1+S*2)*w*.3+M.wind*.02)}}}}M.game&&(C1(e,s,l,u,f,Gl),W3(),Y3());for(const m of br)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=br.length-1;m>=0;m--)br[m].t>.8&&(br[m].spr.destroy(),br.splice(m,1));tv(),iv(),M.game&&M.game.player?av():Wl&&(Wl=!1,Sn.getContext("2d").clearRect(0,0,Sn.width,Sn.height))}let Wl=!1;const Hl=1;function Qh(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&K[r+"_"+n.slice(-1)])}function Ya(e,t=1){const n=e.getContext("2d"),r=M.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(M.W/2-r.x*r.z+o)*t,Math.round(M.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const J3={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function tv(){const e=M.game,t=M.T,n=Ya(Oo,Hl);let r=Ya(Io,Hl);if(hf(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;T1();for(const l of e.zones){if(l.fx==="mon_spores"){c1(l);continue}if(!Qh(l))if(l.once){const u=1-l.t/l.dur;gt(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),gt(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(gt(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&A({type:"puff",x:l.x+p(-1,1)*l.r*.8,y:l.y+p(-1,1)*l.r*.8,r:p(12,22),dur:p(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;A({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}}R1();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];gt(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of Yo)i1(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||Te(l)||gt(l.x,l.y,.42,l===o?"#ffd24a":Is[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=M.hoverUnit;a&&a!==o.target&&!a.dead&&gt(a.x,a.y,(a.r||.4)*(a.scale||1)+.22,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=C(l.x,l.y,1.3),[c,h]=C(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(c,h),r.stroke(),r.restore()}o.target&&!o.target.dead&&gt(o.target.x,o.target.y,(o.target.r||.4)+.2,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&gt(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(ev(o),K3(o,r),M.hoverAbil){const l=i[o.heroKey].abil[M.hoverAbil];l.range&&gt(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe")&&gt(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=M.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,gt(s.x,s.y,.28*(1-l)+.06,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||Te(l))continue;l.status&&l.status.slow&&gt(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,J3[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u){const f=u.kind==="fire",c=.5+.5*Math.sin(t*6);gt(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&gt(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&P(l.x+p(-.6,.6),l.y+p(-.6,.6),p(.1,1.2),p(-.3,.3),p(-.3,.3),p(1,2.4),.6,f?Mn("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&gt(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&gt(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&P(l.x+p(-.3,.3),l.y+p(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(gt(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&P(l.x+p(-.4,.4),l.y+p(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),v1(l)}}if(r=Ya(zo),hf(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=C(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of Yo)s1(i,i.team===o.team);E1(),P1(),nv(r)}z1()}O1(),e&&e.player&&ov(r)}function ev(e){if(!M.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[M.aim.k],n=M.mouse.wx,r=M.mouse.wy;let o=n-e.x,i=r-e.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&gt(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),t.type==="proj"||t.type==="dash"){const u=t.range,f=(t.width||1)/2,c=-i*f,h=o*f;df([[e.x+c,e.y+h],[e.x+o*u+c,e.y+i*u+h],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-c,e.y+i*u-h],[e.x-c,e.y-h]],s,l)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let c=0;c<=12;c++){const h=u-t.angle+2*t.angle*c/12;f.push([e.x+Math.cos(h)*t.range,e.y+Math.sin(h)*t.range])}df(f,s,l)}else{const u=Math.min(a,t.range||0),f=e.x+o*u,c=e.y+i*u;gt(f,c,t.radius||.6,s,l,2)}}function nv(e){const t=M.T;for(const n of M.game.units){if(n.dead||Te(n))continue;const r=n.status||{};if(b1(e,n),!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;P(n.x+p(-.3,.3),n.y+p(-.3,.3),l<0?1.1:.2,p(-.2,.2),p(-.2,.2),l,.7,Mn(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&P(n.x+p(-.25,.25),n.y+p(-.25,.25),.3,0,0,1.4,.4,Mn("fire"),3,-1,!0);continue}const o=Qt[n.sprite],i=n.scale||1,[a,s]=C(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="bash")Xp(e,a,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const c=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=t*5+f*2.09,h=a+Math.cos(c)*14,d=u+Math.sin(c)*4;e.fillStyle="#ffe070",e.fillRect(h-3,d-1,6,2),e.fillRect(h-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-t*4+f*3.14,h=a+Math.cos(c)*20,d=u-6+Math.sin(c)*6;e.fillStyle="#ffffff",e.fillRect(h-3,d,3,2),e.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&P(n.x+p(-.3,.3),n.y+p(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const ui=new Map;function Ts(e,t,n){const r=n+"|"+t+"|"+e;let o=ui.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,o.width=Math.ceil(i.measureText(e).width+s*2+2),o.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),ui.size>2e3&&ui.delete(ui.keys().next().value),ui.set(r,o),o}function rv(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(Is))Ts(e[t].name,n,11),Ts("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)Ts(String(t),"#ffe070",10)}function ov(e){const t=M.game,n=t.player,r=M.cam,o=window.SIM.HEROES,i=r.x-M.W/2/r.z,a=r.y-M.H/2/r.z,s=M.W/r.z,l=M.H/r.z,u=(c,h,d,m,y,g,x)=>{e.fillStyle="#000000c0",e.fillRect(c-1,h-1,d+2,m+2),e.fillStyle=x,e.fillRect(c,h,d,m),e.fillStyle=g,e.fillRect(c,h,Math.max(0,Math.min(1,y))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(c,h,Math.max(0,Math.min(1,y))*d,Math.max(1,m/3))},f=(c,h,d,m,y,g=y)=>{const x=Ts(c,m,g),b=y/g,v=x.width*b,S=x.height*b;e.drawImage(x,Math.round(h-v/2),Math.round(d-S/2),v,S)};for(const c of t.units){if(c.dead||Te(c))continue;const h=(c.x-c.y)*j.HW+j.OX,d=(c.x+c.y)*j.HH;if(h<i-60||h>i+s+60||d<a-60||d>a+l+160||c.kind==="monster"&&c.hp>=c.maxHp-1&&!c.boss)continue;const m=Qt[c.sprite],g=d-(c.leaping?40:0)-(m?m.ay*(c.scale||1)*(c._fbScale||1)*(c.monster==="serpent"?1.4:.92):50)-6,x=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,b=x?66:34,v=x?7:4,S=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":Is[c.team];if(e.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-b/2,g,b,v,c.hp/c.maxHp,S,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(h-b/2-1.5,g-1.5,b+3,v+3)),c.kind==="hero")for(let _=1;_<6;_++)e.fillStyle="#00000080",e.fillRect(h-b/2+b*_/6,g,1,v);c.shield>0&&M.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(h-b/2+c.hp/c.maxHp*b,g,Math.min(b*(1-c.hp/c.maxHp),c.shield/c.maxHp*b),v)),c.kind==="hero"&&(e.fillStyle="#120c1a",e.fillRect(h-b/2-16,g-2,14,v+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(h-b/2-16,g-2,14,v+4),f(String(c.level),h-b/2-9,g+v/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,g-9,Is[c.team],11)),e.globalAlpha=1}for(const c of t.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=C(c.x,c.y,1.1+c.t*.9);e.globalAlpha=Math.max(0,1-c.t/1.1);const m=c.t<.12?1.4-c.t*3:1;f(ct.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*m,c.big?20:14)}e.globalAlpha=1}function iv(){let e=0;const t=M.T,n=(r,o,i,a,s,l)=>{let u=rs[e];u||(u=new Ke(Ks),u.anchor.set(.5),u.blendMode="add",Xt.lightsCam.addChild(u),rs[e]=u),e++;const[f,c]=C(r,o,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=a*(2+.6*Xl),u.tint=s,u.alpha=Math.min(1,l*(1+1.1*Xl))};for(const r of Bl)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&P(r.x+p(-.1,.1),r.y+p(-.1,.1),.9,p(-.2,.2),p(-.2,.2),p(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(M.game){for(const r of M.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),Te(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*j.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of Yo)du(r,t)&&n(r.x,r.y,hu(r.kind)/j.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of M.game.zones)r.once&&!Qh(r)&&n(r.x,r.y,0,r.r*j.HW*1.4,13143295,.35);for(const r of M.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<rs.length;e++)rs[e].visible=!1}let Fr=null;function sv(){if(Fr)return Fr;Fr=document.createElement("canvas"),Fr.width=Fr.height=128;const e=Fr.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Fr}function av(){const t=Math.ceil(M.W/4),n=Math.ceil(M.H/4),r=M.cam;(Sn.width!==t||Sn.height!==n)&&(Sn.width=t,Sn.height=n),Wl=!0;const o=Sn.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of M.visionSrc){const[a,s]=C(i.x,i.y),l=((a-r.x)*r.z+M.W/2)/4,u=((s-r.y)*r.z+M.H/2)/4,f=nc(i.kind)*j.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(sv(),l-f,u-f/2,f*2,f)}}function lv(e){if(!Js("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;$l({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=js[js.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function Zh(){for(const[,e]of qo){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy()}qo.clear();for(const e of br)e.spr.destroy();br.length=0;for(const[,e]of _o)e.spr.destroy();_o.clear(),Yo.length=0}let Fe,tn,xn,Y,nt,Rn="dragon",fr="blue",H=null,Lf=0,qr=0,Ka=0,is=!1,wo=!1,Vl=!1,$n={},Wn=null,Tr=!1,Df=0,Xf=0,uv=0,Gf=performance.now(),Bf=-9,ql=!1;const fv=["buff","aoe_self","heal_aoe","execute"],cv=["facil","normal","dificil"],pi=new Map;let Yl=!1;function zt(e){if(e==null)return"";if(e=String(e),Yl||eu.value==="es"||!window.I18N)return e;const t=pi.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return pi.size>5e3&&pi.clear(),pi.set(e,r),r}function hv(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=tn[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=Fe.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(Fe&&Fe.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=Fe.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function Jh(e,t,n,r=1,o=1){if(t===void 0||n===void 0){Y.play(e,r,0,.03,o);return}const[i,a]=C(t,n),s=M.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/M.W,u/M.H);const c=M.game&&M.game.player;if(c&&!c.dead){const[h,d]=C(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*s.z/M.W,(a-d)*s.z/M.H))}Y.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(M.W*.6))),.03,o)}function Au(e,t,n,r){if(!Y.babble)return;const o=Math.max(0,xn.indexOf(e))*7+3;if(n===void 0||r===void 0){Y.babble(o,t,.5,0);return}const[i,a]=C(n,r),s=M.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/M.W,u/M.H),c=.5*Math.max(0,1-f*1.1);c>.05&&Y.babble(o,t,c,Math.max(-1,Math.min(1,l/(M.W*.6))))}let Nf=0;function Yr(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function ke(e,t="#ffe7b0",n=1.5){M.game&&M.game.msg(e,t,n)}async function dv(e){Fe=window.SIM,tn=Fe.HEROES,xn=Fe.HERO_KEYS,Y=window.AUDIO,nt=new window.Net,Md();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(eu.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");cv.includes(r)&&(on.value={...on.value,difficulty:r})}catch{}try{M.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}hv(),ct.babble=Au,ct.sfx=Jh,ct.say=Yr,ct.play=(r,o)=>Y.play(r,o??1),ct.t=zt,ct.banner=(r,o,i,a,s)=>{const l=Eo.value.slice(-3);Eo.value=[...l,{id:++uv,title:zt(r),color:o,killerKey:i,victimKey:a,big:s}]},Sd(bn),ed(),on.value={...on.value,volMaster:Y.volume?Y.volume("m"):1,volMusic:Y.volume?Y.volume("mu"):1,volSfx:Y.volume?Y.volume("s"):1,soundStyle:Y.style?Y.style():"epic",shadows:M.shadowsOn},await Rp(r=>Od.value=r),await U3(e),D3(),Sv(),rv(),await Promise.all([E3(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,_d(),wd().then(()=>Promise.all([Ad(xn),Cd(xn)])),document.fonts?document.fonts.ready:null]);try{const r=new Fe.Game(window.MAP,{humans:[]});lv(r._makeBushes())}catch(r){console.warn(r)}Cv(),Tv();const[t,n]=C(j.N/2,j.N/2);M.cam.x=t,M.cam.y=n,await Td(),Ze.value="menu",nt.init().then(r=>{rc.value=!!r}).catch(()=>{}),nt.onChange=()=>Ti(),Gv(),requestAnimationFrame(od)}function td(e){const t=Fe.PASSIVES&&Fe.PASSIVES[e];return t?{name:zt(t[0]),desc:zt(t[1])}:{name:"",desc:""}}function ed(){Rd.value=xn.map(e=>{const t=tn[e];return{key:e,name:t.name,title:zt(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:zt(t.abil[n].name),desc:zt(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:td(e)}}),Pd.value=Fe.ITEMS.map(e=>({id:e.id,name:zt(e.name),desc:zt(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active}))}let $f="";function Cu(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(t===$f)return;$f=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const nd="v9.2";{const e=document.createElement("div");e.id="build-tag",e.textContent=nd,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>Cu(e.error||e.message));window.addEventListener("unhandledrejection",e=>Cu(e.reason));let rd=performance.now(),ss=0;function Wf(){const e=performance.now();if(e-rd<150){ss=0;return}const t=ss?Math.min(.05,(e-ss)/1e3):1/30;ss=e,M.T=e/1e3;try{const n=Ze.value;n==="pick"&&H&&(dd(t),to()),n==="lobby"&&md(t),n==="play"&&M.game&&id(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=Wf,e=!0}catch{}e||setInterval(Wf,33)}function od(e){rd=performance.now();const t=Math.min(.05,(e-Gf)/1e3);Gf=e,M.T=e/1e3;try{const n=Ze.value;n==="pick"&&H&&(dd(t),to()),n==="lobby"&&md(t),n==="play"&&M.game?vv(t):pv(t),M.marker&&(M.marker.t+=t,M.marker.t>.3&&(M.marker=null)),A1(t),Z3(t),(Xf-=t)<=0&&M.game&&(Xf=.1,Xv()),(Vf-=t)<=0&&(Vf=.5,mv()),n!=="play"&&(Hf-=t)<=0&&(Hf=1,nt.available&&(zd.value=nt.openGames()))}catch(n){console.error(n),Cu(n)}requestAnimationFrame(od)}let Hf=0,Vf=0;function mv(){if(!Y.setAmbient)return;const e=Pn(M.W/2,M.H/2),t=j.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;Y.setAmbient(o,s,a)}function pv(e){const t=M.T*.05,n=j.N/2+Math.cos(t)*12,r=j.N/2+Math.sin(t*1.3)*12,[o,i]=C(n,r);M.cam.x+=(o-M.cam.x)*Math.min(1,e*.5),M.cam.y+=(i-M.cam.y)*Math.min(1,e*.5),M.cam.z=M.cam.tz=1.25}let yi="",ja=!1,as=0,yv=0,qf=0,ls={x:-99,y:-99,z:0};const Yf={};function gv(){if(M.mode!=="guest"||M.T-qf<.4)return;const e=Pn(M.W/2,M.H/2),t=Math.round(M.cam.z*100)/100;Math.hypot(e.x-ls.x,e.y-ls.y)<2&&t===ls.z||(qf=M.T,ls={x:e.x,y:e.y,z:t},nt.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function xv(){if(!(ja||!nt.code)){ja=!0,as||(as=performance.now(),ke("Se cortó la conexión. Reconectando...","#ffb070",3));try{await nt.rejoin(),as=0,ke("¡Reconectado!","#9fe0a0",2.5),Y.play("announce",.4)}catch{performance.now()-as>9e4?(ke("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),nt.lost=!1,nt.code=null):await new Promise(t=>setTimeout(t,2500))}ja=!1}}function id(e){const t=M.game;Ev(e);{const n=ec(t.t).phase;n!==yi&&(yi&&n==="dusk"&&(ke("Cae la noche: se ve menos lejos","#a8b8ff",3),Y.play("announce",.35)),yi&&n==="dawn"&&(ke("Amanece","#ffe0a0",2.5),Y.play("announce",.3)),yi=n)}if(M.mode==="guest")nt.lost&&xv(),gv(),t.guestTick(e),nt.hostState&&nt.hostState.st==="end"&&!t.winner&&(t.winner="blue");else{if(M.mode==="host")for(const[n,r]of nt.pullCommands())r[0]==="cam"?Yf[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:t.input(n,r);if(!(xi.value&&M.mode==="solo")&&!gd()&&t.update(e),M.mode==="host"&&(qr-=e,qr<=0)){const n=!!(nt.game&&nt.game.sendSnapTo);qr=Math.max(0,qr+(n?nt.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(s=>s.human),o=Le>=0?Math.round(Le*10)/10:Jn?0:-1,i=t.winner?"end":"play",a=r.map(s=>[s.human,s.team,s.heroKey]);if(n){const s=yv++%8===0;for(const l of nt.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},Yf[l.id]],full:s});f.I=o,nt.publishTo(l.id,i,f,s?a:null)}nt.publishMeta(i,a)}else{const s=t.snapshot(3300,r);s.I=o,nt.publish(i,s,a)}}}}function vv(e){id(e);const t=M.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&j3(o);bv(e),M.mouse.wx=Pn().x,M.mouse.wy=Pn().y,M.mouse.rd&&!t.winner&&!M.aim&&M.mouse.inWorld&&(Ka-=e,Ka<=0&&(Ka=.12,ld(!1))),w1(),wv(e),!Vl&&t.t>7.5&&(Vl=!0,Yr("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;Y.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),Mv(e),M.hoverUnit=!M.mouse.md&&!M.aim&&M.mouse.inWorld?ad():null,Rv(),ql=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),ql&&M.T-Bf>3&&(Bf=M.T,Y.play("deny",.5)),(Df-=e)<=0&&(Df=1/15,bd())}function bv(e){const t=M.game.player,n=M.cam,r=M.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(M.camFollow||$n[" "])){const[o,i]=C(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=900*e/n.z;$n.ArrowLeft&&(n.x-=i),$n.ArrowRight&&(n.x+=i),$n.ArrowUp&&(n.y-=i),$n.ArrowDown&&(n.y+=i),r.inWorld&&(r.x<18&&(n.x-=i),r.x>M.W-18&&(n.x+=i),r.y<18&&(n.y-=i),r.y>M.H-18&&(n.y+=i))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-M.W/2)/n.z+n.x,i=(r.y-M.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(M.camFollow||$n[" "])||(n.x=o-(r.x-M.W/2)/n.z,n.y=i-(r.y-M.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*j.N*j.HW,n.x)),n.y=Math.max(0,Math.min(2*j.N*j.HH,n.y))}function Kf(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function Mv(e){const t=M.game,n=t.player;M.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&sc[o.kind]);for(const o of t.wards||[])o.team===n.team&&M.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=Kf(o.x,o.y);let a=0;for(const s of M.visionSrc){const l=nc(s.kind);if(s.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-s.x,o.y-s.y)>2.5||Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||Kf(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}M.visible=r}let Ci=null;function sd(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function Sv(){Ci===null&&(Ci=[Un.water_mask,Un.water_calm].filter(e=>e&&e.naturalWidth).map(sd).filter(Boolean))}function _v(e,t){Ci===null&&(Ci=[Un.water_mask,Un.water_calm].filter(i=>i&&i.naturalWidth).map(sd).filter(Boolean));const[n,r]=C(e,t);for(const i of Ci){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function wv(e){const t=M.game,n=t.player,r=M.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||Te(o)||o.dash)continue;const[i,a]=C(o.x,o.y);if(Math.abs(i-r.x)>M.W/r.z||Math.abs(a-r.y)>M.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=_v(o.x,o.y);if(s==="water"){A({type:"ring",x:o.x+p(-.1,.1),y:o.y+p(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)P(o.x,o.y,.1,p(-.8,.8),p(-.8,.8),p(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&P(o.x,o.y,.05,p(-.3,.3),p(-.3,.3),p(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?Y.play("step_"+s,.32,0,80):Math.random()<.5&&Jh("step_"+s,o.x,o.y,.12))}}function Re(e){M.mode==="guest"?(nt.send(e),M.game.predict(e)):M.game.input(M.localId,e)}function ad(){const e=M.game,t=e.player,n=M.cam,r=window.META;let o=null,i=1e9;const a=Pn();for(const s of e.units){if(s.dead||Te(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||M.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=r[s.sprite],[u,f]=C(s.x,s.y),c=(u-n.x)*n.z+M.W/2,h=(f-n.y)*n.z+M.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss,y=(l?l.ay*.9:50)*d,g=(m?40:s.kind==="minion"?20:26)*d;let x=1e9;if(Math.abs(M.mouse.x-c)<g&&M.mouse.y<h+12*d&&M.mouse.y>h-y)x=Math.abs(M.mouse.x-c)/g+Math.abs(M.mouse.y-(h-y/2))/y;else{const b=Math.hypot(a.x-s.x,a.y-s.y);b<s.r*(s.scale||1)+.6&&(x=1.5+b)}x>1e8||(s.kind==="hero"&&(x-=.4),x<i&&(i=x,o=s))}return o}function Av(){const e=M.cam,t=window.META;let n=null,r=1e9;for(const o of M.game.heroes){if(o.dead||Te(o))continue;const[i,a]=C(o.x,o.y),s=(i-e.x)*e.z+M.W/2,l=(a-e.y)*e.z+M.H/2,u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;if(Math.abs(M.mouse.x-s)<f&&M.mouse.y<l+10*e.z&&M.mouse.y>l-u){const c=Math.abs(M.mouse.x-s)+Math.abs(M.mouse.y-(l-u/2));c<r&&(r=c,n=o)}}return n}function ld(e){const t=Pn();if(!e&&is)return;const n=e?ad():null;if(e&&(Wn=n&&n.kind==="hero"&&n!==M.game.player&&n.team===M.game.player.team?n.id:null),n){is=!0,Re(["a",n.id]),Y.play("click",.3),M.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=M.game.player,o=(M.game.wards||[]).find(i=>i.team!==r.team&&M.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){is=!0,Re(["dw",o.id]),Y.play("click",.3),M.marker={x:o.x,y:o.y,t:0,atk:!0};return}}is=!1,Re(["m",t.x,t.y]),e&&(M.marker={x:t.x,y:t.y,t:0},Y.play("move",.25),M.T-Nf>7&&Math.random()<.5&&(Nf=M.T,Au(M.game.player.heroKey,"ok")))}function ud(e){const t=M.game.player;if(t.ranks&&!t.ranks[e]){ke(t.points>0&&M.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),Y.play("deny",.6);return}if((t.cds[e]||0)>.05){ke("En enfriamiento","#bbbbbb",.8),Y.play("deny",.5);return}const n=tn[t.heroKey].abil[e],r=Pn();if(Wn=null,fv.includes(n.type)){Re(["c",e,r.x,r.y]),M.aim=null;return}if(M.aim&&M.aim.k===e){cd();return}M.aim={k:e},Y.play("aim",.3)}function fd(){if(!M.wardAim)return;const e=Pn();Re(["u",M.wardAim.id,e.x,e.y]),Y.play("click",.4),M.wardAim=null}function cd(){if(!M.aim)return;const e=Pn();Re(["c",M.aim.k,e.x,e.y]),M.aim=null}function Kl(e){const t=M.game&&M.game.player;t&&(M.game.canRankUp(t,e)?(Re(["l",e]),Y.play("levelup",.5)):(ke(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),Y.play("deny",.4)))}function jl(){const e=M.game&&M.game.player;if(!e)return;const[t,n]=C(e.x,e.y);M.cam.x=t,M.cam.y=n-30}function Ql(){M.cam.tz=nu,M.cam.zoomMsgT=1.2}function Cv(){const e=wu();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),window.addEventListener("mousemove",t=>{M.mouse.md&&(M.cam.x-=(t.clientX-M.mouse.x)/M.cam.z,M.cam.y-=(t.clientY-M.mouse.y)/M.cam.z),M.mouse.x=t.clientX,M.mouse.y=t.clientY,M.mouse.inWorld=t.target===e}),e.addEventListener("wheel",t=>{Ze.value==="play"&&(M.cam.tz=Math.max(.75,Math.min(3,M.cam.tz*(t.deltaY>0?.9:1.1))),M.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&Ql()}),e.addEventListener("mousedown",t=>{Y.init(),Y.startMusic(),window.VOICE&&window.VOICE.init(),M.mouse.x=t.clientX,M.mouse.y=t.clientY;const n=M.game;if(!(Ze.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){M.mouse.md=!0,t.preventDefault();return}if(!xi.value){if(t.button===0&&t.altKey){bn.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(M.wardAim){fd();return}if(M.aim){cd();return}if(M.amove){M.amove=!1;const o=Pn();Re(["am",o.x,o.y]),M.marker={x:o.x,y:o.y,t:0,atk:!0},Y.play("click",.3);return}const r=Av();(!r||r.team===n.player.team)&&(Wn=r&&r!==n.player?r.id:null)}if(t.button===2){if(M.aim&&(M.aim=null),M.wardAim){M.wardAim=null;return}M.amove=!1,M.mouse.rd=!0,ld(!0)}}}}),window.addEventListener("mouseup",t=>{t.button===2&&(M.mouse.rd=!1),t.button===1&&(M.mouse.md=!1),t.button===0&&(M.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;Y.init();const r=M.game,o=t.key.toUpperCase();if(Ze.value==="play"&&r&&r.player&&t.key==="Enter"){oc.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){Y.toggleMute();return}if(o==="N"){Y.toggleMusic();return}if(Ze.value!=="play"||!r||!r.player)return;if(gd()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&M.mode==="solo"&&(vd(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){M.aim||M.wardAim||vo.value?(M.aim=null,M.wardAim=null,vo.value=!1):xi.value=!xi.value;return}if(t.key==="Tab"){t.repeat||(gi.value=!gi.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){Kl(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(wo=!wo,Y.play("aim",.4)):(ke("No tienes puntos de habilidad","#bbbbbb",1),Y.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&wo){wo=!1,Kl(o);return}if("QWER".includes(o)&&o.length===1){M.wardAim=null,ud(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){bn.useItem(+t.key-1),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){jl(),t.preventDefault();return}if(t.key.startsWith("Arrow")){$n[t.key]=!0,t.preventDefault();return}if(o==="P"){vo.value=!vo.value,Y.play("click",.4);return}if(o==="H"&&o.length===1){bn.useCons("pocion");return}if(o==="V"&&o.length===1){bn.useCons("ojo");return}if(o==="C"&&o.length===1){bn.useCons("centinela");return}if(o==="K"){Y.setStyle&&(bn.setSoundStyle(Y.style()==="epic"?"pixel":"epic"),ke("Sonido: "+(Y.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){M.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){bn.spell(o);return}if(o==="G"&&o.length===1){bn.ping(t.shiftKey?"omw":"danger");return}if(o==="S"&&Re(["s"]),o==="B"){bn.recall();return}o==="Y"&&(M.camFollow=!M.camFollow),o==="Z"&&Ql(),t.key===" "&&($n[" "]=!0,jl(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete $n[t.key]}),window.addEventListener("blur",()=>{gi.value=!1,$n={},M.mouse.md=!1,M.mouse.rd=!1,M.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{M.mouse.inWorld=!1})}const _r={};function Tv(){const e=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,l.fillRect(d*2,c*2,2,2))})),a){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};_r.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),_r.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),_r.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);_r.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=_r.normal}let jf="";function Rv(){const e=M.game&&M.game.player,t=M.hoverUnit,n=M.aim||M.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==jf&&(jf=n,wu().style.cursor=_r[n],document.documentElement.style.cursor=_r.normal)}function hd(){const e=M.mode==="solo"?"local":nt.myPeer||"host";return H&&H.h&&H.h[e]}function Rs(e){const t=e?[{id:nt.myPeer||"host",team:fr},...nt.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of t)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),H={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Rn||xn[0],locked:!1,prep:-1,online:!!e},e&&(M.mode="host"),Ze.value="pick",Y.setMode("menu"),Y.play("announce",.6),to()}function Zl(e,t){if(!H||!e)return;const n=t===void 0;if(n&&M.mode==="guest"){H.locked||(nt.send(["lock",e]),Rn=e,H.pending=e,Y.play("levelup",.7));return}const r=n?M.mode==="solo"?"local":nt.myPeer||"host":t,o=H.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>H.blue.includes(l)||H.red.includes(l);if(s(e))if(n){Y.play("deny",.6);return}else{const l=xn.filter(u=>!s(u));e=l[Math.random()*l.length|0]}H[i][a]=e,o[2]=1,n&&(H.locked=!0,Rn=e,H.view=e,Y.play("levelup",.7),Au(e,"select"))}function Qf(e){const t=H[e],n=[...H.blue,...H.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&tn[s].role===a));let o=xn.filter(a=>!n.includes(a));const i=o.filter(a=>r.includes(tn[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||xn[Math.random()*xn.length|0]}function dd(e){if(M.mode==="guest")return Pv();if(H.online){for(const[n,r]of nt.pullCommands())r[0]==="lock"&&Zl(r[1],n);(Lf-=e)<=0&&(Lf=.25,nt.publishDraft({t:Math.round(H.t*10)/10,p:Math.round(H.prep*10)/10,b:H.blue,r:H.red,h:H.h}))}if(H.prep>=0){H.prep-=e,H.prep<=0&&(H.online?Iv():pd());return}if(!H.online){if(H.locked){H.bt=(H.bt||0)+e;for(const n of H.order)!n.done&&H.bt>=(Tr?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,H[n.team][n.slot]=Qf(n.team),Y.play("click",.35))}H.locked&&H.order.every(n=>n.done)&&(H.prep=Tr?1.5:3,Y.play("announce",.7));return}if(Object.values(H.h).every(n=>n[2])){H.bt=(H.bt||0)+e;for(const n of H.order)!n.done&&H.bt>=.3+n.q*.28&&(n.done=!0,H[n.team][n.slot]=Qf(n.team),Y.play("click",.35));H.order.every(n=>n.done)&&(H.prep=4,Y.play("announce",.7))}}function Pv(){const e=nt.hostState;if(e&&e.st==="play"&&e.S){H=null,eo.value=null,yd();return}const t=e&&e.D;if(!t)return;const n=H.blue.join()+H.red.join();H.t=t.t,H.prep=t.p,H.blue=t.b,H.red=t.r,H.h=t.h,n!==H.blue.join()+H.red.join()&&Y.play("click",.35);const r=hd();r&&r[2]?(H.locked=!0,Rn=H[r[0]][r[1]],H.view=Rn||H.view):H.pending&&performance.now()-(H.sentAt||0)>1e3&&(H.sentAt=performance.now(),nt.send(["lock",H.pending]))}function to(){if(!H){eo.value=null;return}const e=hd(),t=M.mode==="solo"?"local":nt.myPeer||"host";eo.value={online:!!H.online,t:H.t,prep:H.prep,blue:[...H.blue],red:[...H.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(H.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!H.locked,pending:H.pending||null,view:H.view}}function md(e){nt.role==="guest"&&nt.hostState&&nt.hostState.st==="pick"&&nt.hostState.D&&(M.mode="guest",M.localId=nt.myPeer,H={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Rn||xn[0],locked:!1,prep:-1,online:!0},Ze.value="pick",Y.play("announce",.6)),nt.role==="guest"&&nt.hostState&&nt.hostState.st==="play"&&nt.hostState.S&&yd(),nt.role==="host"&&(qr-=e,qr<=0&&(qr=1.5,nt.setChoice(Rn,fr))),(Zf-=e)<=0&&(Zf=.3,Ti())}let Zf=0;function Ti(){const e=[];if(nt.role==="host"){e.push({name:zt("Tú (anfitrión)"),team:fr,me:!0});for(const t of nt.guests())e.push({name:zt("Invitado"),team:t.team,me:!1})}else nt.role==="guest"&&(e.push({name:zt("Tú"),team:fr,me:!0}),nt.hostState&&e.push({name:zt("Anfitrión"),team:nt.hostState.team,me:!1}));rn.value={...rn.value,role:nt.role,code:nt.code,myTeam:fr,players:e,hostFound:!!nt.hostState}}function pd(){M.mode="solo",M.localId="local";const e=H?{blue:H.blue.slice(1).filter(Boolean),red:H.red.filter(Boolean)}:null;M.game=new Fe.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Rn}],localId:"local",picks:e,difficulty:on.value.difficulty,aram:Tr}),Tr&&(Tr=!1,M.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),H=null,eo.value=null,Tu(),M.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function Iv(){M.mode="host",M.localId=nt.myPeer||"host";const e=[],t={blue:[],red:[]};if(H){for(const n in H.h){const[r,o]=H.h[n];e.push({id:n,team:r,hero:H[r][o]||xn[0]})}for(const n of["blue","red"])H[n].forEach((r,o)=>{r&&!Object.values(H.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}H=null,eo.value=null,M.game=new Fe.Game(window.MAP,{humans:e,localId:M.localId,picks:t,difficulty:on.value.difficulty}),nt.lastSeq={};for(const n of nt.guests())nt.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of nt.guests()){const r=M.game.slots[n.id];r&&(r.cid=n.cid)}nt.onGuests=(n,r)=>{const o=M.game;if(o){for(const i of r.left||[]){const a=o.slots[i.peer];a&&!a.bot&&(a.bot=!0,a.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||zv(o,i)}},Tu(),M.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function zv(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(a=>a.bot&&!a.isPlayer&&!a.away&&(!i||a.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,nt.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3))}function yd(){M.mode="guest",M.localId=nt.myPeer,M.game=new Fe.Game(window.MAP,{humans:[],localId:M.localId}),M.game.units=[],M.game.heroes=[],M.game.player=null,nt.onSnapshot=e=>{M.game&&M.mode==="guest"&&(nt.myPeer&&(M.localId=nt.myPeer),M.game.applySnapshot(e,M.localId))},nt.hostState&&nt.hostState.S&&M.game.applySnapshot(nt.hostState.S,M.localId),Tu()}const ir={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let Ps=0,Le=-1,Fo=[],Ov=0,Jn=!1,Qs=0;function gd(){return Le>=0}function xd(){const e=M.game,t=e.player;Ip(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=tn[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},r=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){Jn=!0;return}Jn=!1;const a=Qs;Qs=0,ru.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++Ov,off:a,canSkip:M.mode==="solo"},Le=a,Ps=0,Fo=[[.15,()=>Yr("blue_team")],...o.map((s,l)=>[ir.blue+l*ir.step+.05,()=>Y.play("reveal",.8)]),[ir.red-.35,()=>Yr("red_team")],...i.map((s,l)=>[ir.red+l*ir.step+.05,()=>Y.play("reveal",.8)]),[ir.vs-.02,()=>{Y.play("vsslam",1),Yr("versus")}],[ir.go,()=>{Y.play("warhorn",.9),Yr("battle"),Y.setMode("battle")}]].filter(s=>s[0]>=a-.05),Y.setMode("menu")}function Fv(){const e=nt.hostState&&nt.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?Le<0?(Qs=t,Jn=!0):Math.abs(Le-t)>.6&&(Le=t):(Le>=0||Jn)&&(Jn=!1,Le>=0&&oa())}function Ev(e){if(M.mode==="guest"&&Fv(),Jn&&M.game&&xd(),Le<0)return;const t=performance.now()/1e3,n=Ps?t-Ps:0;for(Ps=t,Le+=n>2?.05:n||e;Fo.length&&Fo[0][0]<=Le;)Fo.shift()[1]();Le>=ir.end&&oa()}function oa(){Jn=!1,!(Le<0)&&(Le=-1,Fo=[],ru.value=null,jl(),Y.setMode("battle"))}function vd(){Le<0||M.mode!=="solo"||(Le<ir.go&&(Y.play("warhorn",.7),Yr("battle")),oa())}function Tu(){if(c0(),Zh(),Ze.value="play",Eo.value=[],Y.setMode("battle"),Vl=!1,M.mode==="guest"?Jn=!1:xd(),Wn=null,M.aim=null,M.amove=!1,wo=!1,M.cam.z=M.cam.tz=nu,M.game.player){const[e,t]=C(M.game.player.x,M.game.player.y);M.cam.x=e,M.cam.y=t-30}}async function Jf(){Tr=!1,yi="",Jl=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}Le=-1,Fo=[],Jn=!1,Qs=0,ru.value=null,xi.value=!1,vo.value=!1,gi.value=!1,M.aim=null,H=null,eo.value=null,M.mode!=="solo"&&await nt.leave(),M.game=null,M.mode="solo",Zh(),c0(),ac.value=null,ic.value=null,Eo.value=[],Ze.value="menu",Y.setMode("menu"),wu().style.cursor=_r.normal}function kv(e){const t=tn[e.heroKey],n=(e.items||[]).map(o=>Fe.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:zt("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:zt("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:zt("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:zt("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:zt("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:zt("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:zt("Alcance"),value:String(t.range)}]}const Uv=[["pocion","H","pots"],["ojo","V","wards"],["centinela","C","sentries"]];function Qa(e){return(e.items||[]).filter(t=>!Fe.ITEM[t].line)}function Za(e){const t=M.game,n=tn[e.heroKey],r=t.player,o=e===r,i=[];for(const c of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[c]&&i.push(c);e.aegis&&(M.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((c,h)=>{const d=Fe.ITEM[c],m=d.active?{cd:d.active.cd,left:M.mode==="guest"?(e.itemCdLeft||[])[h]||0:Math.max(0,((e.itemCd||{})[c]||0)-t.t)}:null;return{id:c,slot:0,name:zt(d.name),desc:zt(d.desc),tier:d.tier||0,line:d.line||null,count:1,active:m}}),s=a.filter(c=>!c.line).map((c,h)=>({...c,slot:h})),l=a.filter(c=>c.line),u=Uv.map(([c,h,d])=>{const m=Fe.ITEM[c];return{id:c,key:h,count:e[d]||0,max:m.max,name:zt(m.name),desc:zt(m.desc)}}),f=o||e.team===r.team||M.mode!=="guest";return{id:e.id,heroKey:e.heroKey,name:n.name,title:zt(n.title),role:zt(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:td(e.heroKey),xpFrac:M.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&f?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,abil:["Q","W","E","R"].map(c=>{const h=n.abil[c],d=e.ranks?e.ranks[c]:1;return{key:c,name:zt(h.name),desc:zt(h.desc),cd:e.cds&&e.cds[c]||0,cdMax:h.cd,rank:d,cost:t.manaCost?t.manaCost(e,c):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,c)),dmg:h.dmg?Math.round(h.dmg*t.abilMul(e,c)):null,type:h.type,fx:h.fx}}),items:s,gear:l,cons:u,spells:[{key:"D",name:zt("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:zt("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:kv(e),human:!!e.human,isMe:o,status:i}}let Jl=!1;function bd(){const e=!!(M.game&&M.game.player&&M.game.player.dead);if(e!==Jl){Jl=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=M.game,n=t.player;if(!n)return;const r=Wn?ft(Wn):null;r&&(r.kind!=="hero"||Te(r))&&(Wn=null);const o=t.msgs.filter(a=>!a.to||a.to===M.localId).slice(-3).map(a=>({id:a.id,text:zt(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{Yl=a.human;const s=zt(a.txt);return Yl=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:tn[a.hero]?tn[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});ac.value={me:Za(n),inspected:Wn?Za(ft(Wn)):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(Za),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?tn[a.killerKey].name:zt(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:ql,inShop:t.inShop(n),levelMode:wo,aim:M.aim?M.aim.k:null,amove:M.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(M.cam.tz/nu*100),zoomMsg:M.cam.zoomMsgT,camFollow:M.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:tn[a.heroKey].name,team:a.team,level:a.level,kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||M.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:M.mode,netLost:!!nt.lost,deathRecap:n.dead?Lv(n):tu=null}}let tu=null,tc=null;function Lv(e){return tu!==e&&(tu=e,tc=Dv(e)),tc}function Dv(e){const t=(e.dmgLog||[]).filter(r=>M.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&tn[r.h]?tn[r.h].name:zt(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function Xv(){const e=M.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=j,i=2*n*r,a=2*n*o,s=(h,d)=>{const[m,y]=C(h,d);return{x:m/i,y:y/a}},l=[];for(const h of e.units){if(h.dead||Te(h))continue;const d=s(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===t,human:!!h.human})}const u=M.cam,f=M.W/u.z,c=M.H/u.z;ic.value={units:l,camps:e.camps.filter(h=>h.alive).map(h=>({...s(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/a,x1:(u.x+f/2)/i,y1:(u.y+c/2)/a},vision:M.visionSrc.map(h=>({...s(h.x,h.y),r:sc[h.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(h=>h.team===t.team&&e.t-h.t<3).map(h=>({...s(h.x,h.y),t:e.t-h.t,kind:h.kind})),wards:(e.wards||[]).filter(h=>e.wardSeenBy(h,t.team)).map(h=>({...s(h.x,h.y),kind:h.kind,mine:h.team===t.team}))}}const bn={skipIntro(){vd()},shopDenied(e){ke(e,"#ffb070",2),Y.play("deny",.5)},playVsBots(){Y.init(),Y.startMusic(),Rs(!1)},playAram(){Y.init(),Y.startMusic(),Tr=!0,Rs(!1)},async hostOnline(){rn.value={...rn.value,msg:zt("Creando sala...")};try{await nt.host(Rn,fr),Ze.value="lobby",rn.value={...rn.value,msg:""},Ti()}catch{rn.value={...rn.value,msg:zt("No se pudo crear la sala")}}},async joinOnline(e){rn.value={...rn.value,msg:zt("Entrando...")};try{if(await nt.join(e,Rn,fr),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}Ze.value="lobby",rn.value={...rn.value,msg:""},Ti()}catch{rn.value={...rn.value,msg:zt("No se pudo entrar")}}},setLobbyTeam(e){fr=e,nt.setChoice(Rn,fr),Ti()},startOnlinePick(){Rs(!0)},async leaveLobby(){await nt.leave(),Ze.value="menu"},viewHero(e){H&&!H.locked&&(H.view=e,Y.play("aim",.3),to())},lockHero(e){Zl(e),to()},randomHero(){const e=xn.filter(t=>!H.blue.includes(t)&&!H.red.includes(t));Zl(e[Math.random()*e.length|0]),to()},backToMenu(){Tr=!1,H&&H.online?Jf():(H=null,eo.value=null,Ze.value="menu")},buy(e){const t=M.game&&M.game.player;if(t){if(!M.game.inShop(t)){ke("Solo puedes comprar en tu base (o muerto)","#ffb070",1.6),Y.play("deny",.5);return}if(M.mode!=="guest"&&!M.game.canBuy(t,e)){const n=window.SIM.ITEM[e];ke(t.gold<n.cost?"Te falta oro":n.consumable?"Ya llevas el máximo de ese":Qa(t).length>=6?"Inventario lleno (6/6): vende un accesorio":"Primero compra el nivel anterior","#ffb070",2),Y.play("deny",.5);return}Re(["i",e]),Y.play("buy",.6)}},sell(e){const t=M.game&&M.game.player;if(!t||!t.items)return;const n=typeof e=="number"?Qa(t)[e]:e;if(n){if(!M.game.inShop(t)){ke("Solo puedes vender en tu base","#ffb070",1.4),Y.play("deny",.4);return}Re(["v",n]),Y.play("buy",.4)}},useCons(e){const t=M.game&&M.game.player;if(!t||t.dead)return;if(!t[e==="pocion"?"pots":e==="ojo"?"wards":"sentries"]){ke(e==="pocion"?"No tienes pociones":e==="ojo"?"No tienes ojos vigía (cómpralos en la tienda)":"No tienes ojos centinela (cómpralos en la tienda)","#bbbbbb",1.4),Y.play("deny",.4);return}if(e==="pocion"){Re(["u","pocion"]),Y.play("heal",.5);return}if(M.aim=null,M.wardAim&&M.wardAim.id===e){fd();return}M.wardAim={id:e},Y.play("aim",.3)},useItem(e){const t=M.game&&M.game.player,n=t&&Qa(t)[e];if(!t||e<0||!n){Y.play("deny",.4);return}const r=Fe.ITEM[n];if(!(r&&r.active)){ke("Este objeto no se usa: es pasivo","#bbbbbb",1.2),Y.play("deny",.4);return}if((M.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-M.game.t))>.05){ke("En enfriamiento","#bbbbbb",.8),Y.play("deny",.4);return}Re(["u",n,M.mouse.wx,M.mouse.wy]),Y.play("blink",.5)},rankUp(e){Kl(e)},castKey(e){M.game&&M.game.player&&ud(e)},spell(e){const t=M.game&&M.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){ke(zt(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),Y.play("deny",.5);return}const r=Pn();Re(["sp",e,r.x,r.y]),Y.play(e==="D"?"blink":"wind",.6)},recall(){const e=M.game&&M.game.player;e&&Re(e.recall?["bc"]:["b"])},inspect(e){Wn=e&&M.game&&M.game.player&&e===M.game.player.id?null:e,bd()},centerOn(e){const t=e==null?M.game&&M.game.player:ft(e);if(!t)return;const[n,r]=C(t.x,t.y);M.cam.x=n,M.cam.y=r-30,M.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:a}=j,s=e*(2*r*o)-a,l=t*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;u<0||f<0||u>r||f>r||(n==="right"?(Re(["m",u,f]),M.marker={x:u,y:f,t:0}):(M.cam.x=e*2*r*o,M.cam.y=t*2*r*i,M.mouse.mmDrag=!0))},minimapDrag(e,t){const{N:n,HW:r,HH:o}=j;M.cam.x=Math.max(0,Math.min(1,e))*2*n*r,M.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!M.game||!M.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=j,u=t*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=Pn();r=i.x,o=i.y}Re(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&M.game&&Re(["t",e,n]),oc.value=null},bannerDone(e){Eo.value=Eo.value.filter(t=>t.id!==e)},quitMatch(){Jf()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};Y.setVolume&&Y.setVolume(n[e],t),on.value={...on.value,[e]:t}},setSoundStyle(e){Y.setStyle&&Y.setStyle(e),on.value={...on.value,soundStyle:e}},setShadows(e){M.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}on.value={...on.value,shadows:e}},setCamFollow(e){M.camFollow=e},resetZoom(){Ql()},setLang(e){eu.value=e,pi.clear();try{localStorage.setItem("moba_lang",e)}catch{}ed()},setDifficulty(e){on.value={...on.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){Y.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;Y.play(n[0],n[1])},t:e=>zt(e)};function Gv(){const e=new URLSearchParams(location.search);window.__g=()=>({S:M,draft:H,st:Id,act:bn,net:nt,cmd:Re});const t=e.get("sala");if(t){const o=i=>{rc.value?bn.joinOnline(t.toLowerCase()):i>0&&setTimeout(()=>o(i-1),300)};o(20)}const n=e.get("auto");if(!n)return;if(n==="pick"){Rs(!1),e.get("view")&&(H.view=e.get("view")),to();return}if(n==="menu")return;Rn=n,pd(),e.get("intro")||oa(),e.get("allbots")&&(M.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)M.game.update(1/30),M.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(M.camFollow=!0),e.get("shop")&&(vo.value=!0),e.get("tab")&&(gi.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[a,s]=C(o,i);M.cam.x=a,M.cam.y=s}e.get("mx")&&(M.mouse.x=+e.get("mx"),M.mouse.y=+e.get("my"))}const Vv=Object.freeze(Object.defineProperty({__proto__:null,BUILD:nd,startClient:dv},Symbol.toStringTag,{value:"Module"}));export{fm as $,Yc as A,_a as B,de as C,Rr as D,be as E,Gt as F,Dt as G,Ap as H,Cp as I,Vu as J,pa as K,Yu as L,pe as M,_m as N,$e as O,Hn as P,bc as Q,Fs as R,np as S,Tt as T,ol as U,Kc as V,Tp as W,hp as X,Ot as Y,Xn as Z,lu as _,Hi as a,Hv as a0,xm as a1,Wv as a2,Br as a3,Lo as a4,_c as a5,Wd as a6,Vd as a7,Vv as a8,Ko as b,uu as c,Hc as d,Pr as e,au as f,un as g,Nc as h,fu as i,Dm as j,no as k,Ut as l,Hd as m,Ou as n,Os as o,xc as p,dn as q,im as r,Wu as s,Ke as t,En as u,qm as v,cr as w,op as x,_n as y,ap as z};
