const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CrH_2FAx.js","./webworkerAll-BJciQPJu.js","./CanvasPool-WnaPOhMK.js","./colorToUniform-B4tbxM-p.js","./_commonjsHelpers-CqkleIqs.js","./App-BIn4fJxF.js","./index-BilN7p_j.js","./index-BtE89LZf.css","./WebGPURenderer-CFozO3Za.js","./SharedSystems-BJqN5rMA.js","./WebGLRenderer-rMbU-mu0.js"])))=>i.map(i=>d[i]);
import{S as b,u as mt,q as ze,w as C,r as nt,M as B,v as y,x as cd,T as Ja,y as hd,z as V2,l as s0,p as pn,b as q2,A as Y2,B as K2,C as j2,D as Q2,E as Z2,j as De,n as dd,h as J2,s as tp,F as ep,G as Hu,H as np,g as dr,t as Ps,c as un,I as rp,f as Di,o as op,Z as a0,J as ip,i as Xi,K as md,L as Un,d as Yo,m as pd,V as yd,e as gd,N as sp,O as l0,P as xd,Q as ap,R as lp,a as up,U as fp,W as cp,X as hp}from"./App-BIn4fJxF.js";import{_ as tl}from"./index-BilN7p_j.js";import{g as Md}from"./_commonjsHelpers-CqkleIqs.js";const et={},Fe={},Oe={};var Ce=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(Ce||{});const Wu=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},Js=(e,t)=>Wu(e).priority??t,xo={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(Wu).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(Wu).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(s=>t(s)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,s)=>Js(s.value,n)-Js(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>Js(i,n)-Js(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},dp={extension:{type:Ce.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await tl(()=>import("./browserAll-CrH_2FAx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},mp={extension:{type:Ce.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await tl(()=>import("./webworkerAll-BJciQPJu.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Ve{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new Ve(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var Ll={exports:{}},D0;function pp(){return D0||(D0=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(a,u,f){this.fn=a,this.context=u,this.once=f||!1}function i(a,u,f,h,c){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,h||a,c),m=n?n+u:u;return a._events[m]?a._events[m].fn?a._events[m]=[a._events[m],d]:a._events[m].push(d):(a._events[m]=d,a._eventsCount++),a}function s(a,u){--a._eventsCount===0?a._events=new r:delete a._events[u]}function l(){this._events=new r,this._eventsCount=0}l.prototype.eventNames=function(){var u=[],f,h;if(this._eventsCount===0)return u;for(h in f=this._events)t.call(f,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},l.prototype.listeners=function(u){var f=n?n+u:u,h=this._events[f];if(!h)return[];if(h.fn)return[h.fn];for(var c=0,d=h.length,m=new Array(d);c<d;c++)m[c]=h[c].fn;return m},l.prototype.listenerCount=function(u){var f=n?n+u:u,h=this._events[f];return h?h.fn?1:h.length:0},l.prototype.emit=function(u,f,h,c,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var g=this._events[p],x=arguments.length,v,M;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,h),!0;case 4:return g.fn.call(g.context,f,h,c),!0;case 5:return g.fn.call(g.context,f,h,c,d),!0;case 6:return g.fn.call(g.context,f,h,c,d,m),!0}for(M=1,v=new Array(x-1);M<x;M++)v[M-1]=arguments[M];g.fn.apply(g.context,v)}else{var S=g.length,w;for(M=0;M<S;M++)switch(g[M].once&&this.removeListener(u,g[M].fn,void 0,!0),x){case 1:g[M].fn.call(g[M].context);break;case 2:g[M].fn.call(g[M].context,f);break;case 3:g[M].fn.call(g[M].context,f,h);break;case 4:g[M].fn.call(g[M].context,f,h,c);break;default:if(!v)for(w=1,v=new Array(x-1);w<x;w++)v[w-1]=arguments[w];g[M].fn.apply(g[M].context,v)}}return!0},l.prototype.on=function(u,f,h){return i(this,u,f,h,!1)},l.prototype.once=function(u,f,h){return i(this,u,f,h,!0)},l.prototype.removeListener=function(u,f,h,c){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return s(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!c||m.once)&&(!h||m.context===h)&&s(this,d);else{for(var p=0,g=[],x=m.length;p<x;p++)(m[p].fn!==f||c&&!m[p].once||h&&m[p].context!==h)&&g.push(m[p]);g.length?this._events[d]=g.length===1?g[0]:g:s(this,d)}return this},l.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&s(this,f)):(this._events=new r,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=n,l.EventEmitter=l,e.exports=l}(Ll)),Ll.exports}var yp=pp();const Mo=Md(yp),gp=Math.PI*2,xp=180/Math.PI,Gi=Math.PI/180;class mr{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new mr(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Ul.x=0,Ul.y=0,Ul}}const Ul=new mr;class be{constructor(t=1,n=0,r=0,o=1,i=0,s=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,s){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new mr;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new mr;const r=this.a,o=this.b,i=this.c,s=this.d,l=this.tx,a=this.ty,u=1/(r*s+i*-o),f=t.x,h=t.y;return n.x=s*u*f+-i*u*h+(a*i-l*s)*u,n.y=r*u*h+-o*u*f+(-a*r+l*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,s=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=s*n-this.ty*r,this.ty=s*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,s=t.d,l=t.tx,a=t.ty,u=n.a,f=n.b,h=n.c,c=n.d;return this.a=r*u+o*h,this.b=r*f+o*c,this.c=i*u+s*h,this.d=i*f+s*c,this.tx=l*u+a*h+n.tx,this.ty=l*f+a*c+n.ty,this}setTransform(t,n,r,o,i,s,l,a,u){return this.a=Math.cos(l+u)*i,this.b=Math.sin(l+u)*i,this.c=-Math.sin(l-a)*s,this.d=Math.cos(l-a)*s,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,s=t.pivot,l=-Math.atan2(-o,i),a=Math.atan2(r,n),u=Math.abs(l+a);return u<1e-5||Math.abs(gp-u)<1e-5?(t.rotation=a,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=l,t.skew.y=a),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(s.x*n+s.y*o),t.position.y=this.ty+(s.x*r+s.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,s=t*o-n*r;return this.a=o/s,this.b=-n/s,this.c=-r/s,this.d=t/s,this.tx=(r*this.ty-o*i)/s,this.ty=-(t*this.ty-n*i)/s,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new be;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return vp.identity()}static get shared(){return Mp.identity()}}const Mp=new be,vp=new be,wo=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],_o=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ao=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],To=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Vu=[],vd=[],ta=Math.sign;function bp(){for(let e=0;e<16;e++){const t=[];Vu.push(t);for(let n=0;n<16;n++){const r=ta(wo[e]*wo[n]+Ao[e]*_o[n]),o=ta(_o[e]*wo[n]+To[e]*_o[n]),i=ta(wo[e]*Ao[n]+Ao[e]*To[n]),s=ta(_o[e]*Ao[n]+To[e]*To[n]);for(let l=0;l<16;l++)if(wo[l]===r&&_o[l]===o&&Ao[l]===i&&To[l]===s){t.push(l);break}}}for(let e=0;e<16;e++){const t=new be;t.set(wo[e],_o[e],Ao[e],To[e],0,0),vd.push(t)}}bp();const we={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>wo[e],uY:e=>_o[e],vX:e=>Ao[e],vY:e=>To[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>Vu[e][t],sub:(e,t)=>Vu[e][we.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?we.S:we.N:Math.abs(t)*2<=Math.abs(e)?e>0?we.E:we.W:t>0?e>0?we.SE:we.SW:e>0?we.NE:we.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=vd[we.inv(t)];o.tx=n,o.ty=r,e.append(o)}},ea=[new mr,new mr,new mr,new mr];class Wn{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Wn(0,0,0,0)}clone(){return new Wn(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const l=this.x,a=this.y,u=r*(1-o),f=r-u,h=l-u,c=l+i+u,d=a-u,m=a+s+u,p=l+f,g=l+i-f,x=a+f,v=a+s-f;return t>=h&&t<=c&&n>=d&&n<=m&&!(t>p&&t<g&&n>x&&n<v)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const I=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>I}const r=this.left,o=this.right,i=this.top,s=this.bottom;if(o<=r||s<=i)return!1;const l=ea[0].set(t.left,t.top),a=ea[1].set(t.left,t.bottom),u=ea[2].set(t.right,t.top),f=ea[3].set(t.right,t.bottom);if(u.x<=l.x||a.y<=l.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(l,l),n.apply(a,a),n.apply(u,u),n.apply(f,f),Math.max(l.x,a.x,u.x,f.x)<=r||Math.min(l.x,a.x,u.x,f.x)>=o||Math.max(l.y,a.y,u.y,f.y)<=i||Math.min(l.y,a.y,u.y,f.y)>=s))return!1;const c=h*(a.y-l.y),d=h*(l.x-a.x),m=c*r+d*i,p=c*o+d*i,g=c*r+d*s,x=c*o+d*s;if(Math.max(m,p,g,x)<=c*l.x+d*l.y||Math.min(m,p,g,x)>=c*f.x+d*f.y)return!1;const v=h*(l.y-u.y),M=h*(u.x-l.x),S=v*r+M*i,w=v*o+M*i,_=v*r+M*s,T=v*o+M*s;return!(Math.max(S,w,_,T)<=v*l.x+M*l.y||Math.min(S,w,_,T)>=v*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new Wn),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Dl={default:-1};function gn(e="default"){return Dl[e]===void 0&&(Dl[e]=-1),++Dl[e]}const X0={},bn="8.0.0",ew="8.3.4";function Ft(e,t,n=3){if(X0[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),X0[t]=!0}const bd=()=>{};function G0(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function B0(e){return!(e&e-1)&&!!e}function Sp(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const N0=Object.create(null);function wp(e){const t=N0[e];return t===void 0&&(N0[e]=gn("resource")),t}const Sd=class wd extends Mo{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...wd.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Ft(bn,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=wp(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Sd.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let _p=Sd;const _d=class Ad extends Mo{constructor(t={}){super(),this.options=t,this.uid=gn("textureSource"),this._resourceType="textureSource",this._resourceId=gn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Ad.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new _p(Sp(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=gn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=gn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=B0(this.pixelWidth)&&B0(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};_d.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Sn=_d;class u0 extends Sn{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}u0.extension=Ce.TextureSource;const $0=new be;class Ap{constructor(t,n){this.mapCoord=new be,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],s=t[o+1];n[o]=i*r.a+s*r.c+r.tx,n[o+1]=i*r.b+s*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&($0.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append($0));const i=t.source,s=this.uClampFrame,l=this.clampMargin/i._resolution,a=this.clampOffset/i._resolution;return s[0]=(t.frame.x+l+a)/i.width,s[1]=(t.frame.y+l+a)/i.height,s[2]=(t.frame.x+t.frame.width-l+a)/i.width,s[3]=(t.frame.y+t.frame.height-l+a)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class _t extends Mo{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:s,defaultBorders:l,rotate:a,dynamic:u}={}){if(super(),this.uid=gn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Wn,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new Sn,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:h}=this._source;this.frame.width=f,this.frame.height=h}this.orig=o||this.frame,this.trim=i,this.rotate=a??0,this.defaultAnchor=s,this.defaultBorders=l,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Ap(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,s=n.y/o,l=n.width/r,a=n.height/o;let u=this.rotate;if(u){const f=l/2,h=a/2,c=i+f,d=s+h;u=we.add(u,we.NW),t.x0=c+f*we.uX(u),t.y0=d+h*we.uY(u),u=we.add(u,2),t.x1=c+f*we.uX(u),t.y1=d+h*we.uY(u),u=we.add(u,2),t.x2=c+f*we.uX(u),t.y2=d+h*we.uY(u),u=we.add(u,2),t.x3=c+f*we.uX(u),t.y3=d+h*we.uY(u)}else t.x0=i,t.y0=s,t.x1=i+l,t.y1=s,t.x2=i+l,t.y2=s+a,t.x3=i,t.y3=s+a}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Ft(bn,"Texture.baseTexture is now Texture.source"),this._source}}_t.EMPTY=new _t({label:"EMPTY",source:new Sn({label:"EMPTY"})});_t.EMPTY.destroy=bd;_t.WHITE=new _t({source:new u0({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});_t.WHITE.destroy=bd;function Tp(e,t,n,r){const{width:o,height:i}=n.orig,s=n.trim;if(s){const l=s.width,a=s.height;e.minX=s.x-t._x*o-r,e.maxX=e.minX+l,e.minY=s.y-t._y*i-r,e.maxY=e.minY+a}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const H0=new be;class ho{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=H0,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Wn);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=H0,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const s=i.a,l=i.b,a=i.c,u=i.d,f=i.tx,h=i.ty;let c=this.minX,d=this.minY,m=this.maxX,p=this.maxY,g=s*t+a*n+f,x=l*t+u*n+h;g<c&&(c=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*r+a*n+f,x=l*r+u*n+h,g<c&&(c=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*t+a*o+f,x=l*t+u*o+h,g<c&&(c=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*r+a*o+f,x=l*r+u*o+h,g<c&&(c=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),this.minX=c,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a:s,b:l,c:a,d:u,tx:f,ty:h}=t;let c=s*n+a*r+f,d=l*n+u*r+h;this.minX=c,this.minY=d,this.maxX=c,this.maxY=d,c=s*o+a*r+f,d=l*o+u*r+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=s*n+a*i+f,d=l*n+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=s*o+a*i+f,d=l*o+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new ho(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,s=this.minY,l=this.maxX,a=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,h=o.c,c=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const g=t[p],x=t[p+1],v=u*g+h*x+d,M=f*g+c*x+m;i=v<i?v:i,s=M<s?M:s,l=v>l?v:l,a=M>a?M:a}this.minX=i,this.minY=s,this.maxX=l,this.maxY=a}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var Cp={grad:.9,turn:360,rad:360/(2*Math.PI)},wr=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},je=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Vn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Td=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},W0=function(e){return{r:Vn(e.r,0,255),g:Vn(e.g,0,255),b:Vn(e.b,0,255),a:Vn(e.a)}},Xl=function(e){return{r:je(e.r),g:je(e.g),b:je(e.b),a:je(e.a,3)}},Rp=/^#([0-9a-f]{3,8})$/i,na=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Cd=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),s=i-Math.min(t,n,r),l=s?i===t?(n-r)/s:i===n?2+(r-t)/s:4+(t-n)/s:0;return{h:60*(l<0?l+6:l),s:i?s/i*100:0,v:i/255*100,a:o}},Rd=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),s=r*(1-n),l=r*(1-(t-i)*n),a=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,l,s,s,a,r][u],g:255*[a,r,r,l,s,s][u],b:255*[s,s,a,r,r,l][u],a:o}},V0=function(e){return{h:Td(e.h),s:Vn(e.s,0,100),l:Vn(e.l,0,100),a:Vn(e.a)}},q0=function(e){return{h:je(e.h),s:je(e.s),l:je(e.l),a:je(e.a,3)}},Y0=function(e){return Rd((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},Is=function(e){return{h:(t=Cd(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},Pp=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ip=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,zp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Op=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,qu={string:[[function(e){var t=Rp.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?je(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?je(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=zp.exec(e)||Op.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:W0({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Pp.exec(e)||Ip.exec(e);if(!t)return null;var n,r,o=V0({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(Cp[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Y0(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return wr(t)&&wr(n)&&wr(r)?W0({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!wr(t)||!wr(n)||!wr(r))return null;var s=V0({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return Y0(s)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!wr(t)||!wr(n)||!wr(r))return null;var s=function(l){return{h:Td(l.h),s:Vn(l.s,0,100),v:Vn(l.v,0,100),a:Vn(l.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Rd(s)},"hsv"]]},K0=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},Fp=function(e){return typeof e=="string"?K0(e.trim(),qu.string):typeof e=="object"&&e!==null?K0(e,qu.object):[null,void 0]},Gl=function(e,t){var n=Is(e);return{h:n.h,s:Vn(n.s+100*t,0,100),l:n.l,a:n.a}},Bl=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},j0=function(e,t){var n=Is(e);return{h:n.h,s:n.s,l:Vn(n.l+100*t,0,100),a:n.a}},Yu=function(){function e(t){this.parsed=Fp(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return je(Bl(this.rgba),2)},e.prototype.isDark=function(){return Bl(this.rgba)<.5},e.prototype.isLight=function(){return Bl(this.rgba)>=.5},e.prototype.toHex=function(){return t=Xl(this.rgba),n=t.r,r=t.g,o=t.b,s=(i=t.a)<1?na(je(255*i)):"","#"+na(n)+na(r)+na(o)+s;var t,n,r,o,i,s},e.prototype.toRgb=function(){return Xl(this.rgba)},e.prototype.toRgbString=function(){return t=Xl(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return q0(Is(this.rgba))},e.prototype.toHslString=function(){return t=q0(Is(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=Cd(this.rgba),{h:je(t.h),s:je(t.s),v:je(t.v),a:je(t.a,3)};var t},e.prototype.invert=function(){return ar({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),ar(Gl(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),ar(Gl(this.rgba,-t))},e.prototype.grayscale=function(){return ar(Gl(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),ar(j0(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),ar(j0(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?ar({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):je(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=Is(this.rgba);return typeof t=="number"?ar({h:t,s:n.s,l:n.l,a:n.a}):je(n.h)},e.prototype.isEqual=function(t){return this.toHex()===ar(t).toHex()},e}(),ar=function(e){return e instanceof Yu?e:new Yu(e)},Q0=[],Ep=function(e){e.forEach(function(t){Q0.indexOf(t)<0&&(t(Yu,qu),Q0.push(t))})};function kp(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(s){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var l,a,u=r[this.toHex()];if(u)return u;if(s?.closest){var f=this.toRgb(),h=1/0,c="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(l=f,a=i[m],Math.pow(l.r-a.r,2)+Math.pow(l.g-a.g,2)+Math.pow(l.b-a.b,2));p<h&&(h=p,c=m)}return c}},t.string.push([function(s){var l=s.toLowerCase(),a=l==="transparent"?"#0000":n[l];return a?new e(a).toRgb():null},"name"])}Ep([kp]);const Bi=class bs{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof bs)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,s)=>i===n[s]);if(t!==null&&n!==null){const i=Object.keys(t),s=Object.keys(n);return i.length!==s.length?!1:i.every(l=>t[l]===n[l])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=bs._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const s=t;n=(s>>16&255)/255,r=(s>>8&255)/255,o=(s&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const l=bs.HEX_PATTERN.exec(t);l&&(t=`#${l[2]}`)}const s=ar(t);s.isValid()&&({r:n,g:r,b:o,a:i}=s.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof bs||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Bi.shared=new Bi;Bi._temp=new Bi;Bi.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Ye=Bi;const Lp={cullArea:null,cullable:!1,cullableChildren:!0};class f0{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Up{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new f0(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const el=new Up,Dp={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Ft("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function Xp(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const Gp={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let s=n-1;s>=e;s--){const l=this.children[s];l&&(o.push(l),l.parent=null)}Xp(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let s=0;s<o.length;++s)this.emit("childRemoved",o[s],this,s),o[s].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Ft(bn,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class Z0{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Bp{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return el.get(r.maskClass,t)}return t}returnMaskEffect(t){el.return(t)}}const Ku=new Bp;xo.handleByList(Ce.MaskEffect,Ku._effectClasses);const Np={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),Ku.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Ku.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Z0);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Z0),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},$p={label:null,get name(){return Ft(bn,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Ft(bn,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},xn=new f0(be),Ni=new f0(ho);function Pd(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=xn.get().identity(),r=c0(e,o)):r=be.IDENTITY,Id(e,n,r,t),o&&xn.return(o),n.isValid||n.set(0,0,0,0),n}function Id(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=xn.get(),o.appendFrom(e.localTransform,n));const i=t,s=!!e.effects.length;if(s&&(t=Ni.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let l=0;l<e.children.length;l++)Id(e.children[l],t,o,r)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addBounds?.(t);i.addBounds(t,be.IDENTITY),Ni.return(t)}r||xn.return(o)}function c0(e,t){const n=e.parent;return n&&(c0(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function Hp(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,s=t>>8&255,l=t&255,a=n*i/255|0,u=r*s/255|0,f=o*l/255|0;return(a<<16)+(u<<8)+f}const J0=16777215;function tc(e,t){return e===J0?t:t===J0?e:Hp(e,t)}function Pa(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const Wp={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=c0(this,xn.get().identity());return e.appendFrom(this.localTransform,n),xn.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?Pa(this.renderGroup.worldColor):this.parentRenderGroup?Pa(tc(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=tc(t,n.localColor),n=n.parent;return Pa(t)}};let Nl=0;const ec=500;function Gr(...e){Nl!==ec&&(Nl++,Nl===ec?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function zd(e,t,n){return t.clear(),n||(n=be.IDENTITY),Od(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function Od(e,t,n,r,o){let i;if(o)i=xn.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const a=e.localTransform;i=xn.get(),i.appendFrom(a,n)}const s=t,l=!!e.effects.length;if(l&&(t=Ni.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const a=e.children;for(let u=0;u<a.length;u++)Od(a[u],t,i,r,!1)}if(l){for(let a=0;a<e.effects.length;a++)e.effects[a].addLocalBounds?.(t,r);s.addBounds(t,be.IDENTITY),Ni.return(t)}xn.return(i)}function Fd(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,s=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,l=t.index;(t.data[l]!==i||t.data[l+1]!==s)&&(t.data[t.index]=i,t.data[t.index+1]=s,t.didChange=!0),t.index=l+2,o.children.length&&Fd(o,t)}return t.didChange}const Vp=new be,qp={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new ho});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),Fd(this,e),e.didChange&&zd(this,e.localBounds,Vp),e.localBounds},getBounds(e,t){return Pd(this,e,t||new ho)}},Yp={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},Kp={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(jp))}};function jp(e,t){return e._zIndex-t._zIndex}const Qp={getGlobalPosition(e=new mr,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(xn.get(),n);return t=r.apply(e,t),xn.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(xn.get(),r);return n=o.applyInverse(e,n),xn.return(o),n}};class Zp{constructor(){this.uid=gn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Jp=0;class ty{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new Sn({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new _t({source:o,label:`texturePool_${Jp++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),s=Math.ceil(n*r-1e-6);i=G0(i),s=G0(s);const l=(i<<17)+(s<<1)+(o?1:0);this._texturePool[l]||(this._texturePool[l]=[]);let a=this._texturePool[l].pop();return a||(a=this.createTexture(i,s,o)),a.source._resolution=r,a.source.width=i/r,a.source.height=s/r,a.source.pixelWidth=i,a.source.pixelHeight=s,a.frame.x=0,a.frame.y=0,a.frame.width=t,a.frame.height=n,a.updateUvs(),this._poolKeyHash[a.uid]=l,a}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const On=new ty;class ey{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new be,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Zp,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(On.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new be),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new be),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new be),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function ny(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const $l=new Ve(null),Hl=new Ve(null),Wl=new Ve(null,1,1),nc=1,ry=2,Vl=4;class ie extends Mo{constructor(t={}){super(),this.uid=gn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new be,this.relativeGroupTransform=new be,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ve(this,0,0),this._scale=Wl,this._pivot=Hl,this._skew=$l,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],ny(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(ie.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Ft(bn,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=el.get(ey,this),this.groupTransform=be.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),el.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new be),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*xp}set angle(t){this.rotation=t*Gi}get pivot(){return this._pivot===Hl&&(this._pivot=new Ve(this,0,0)),this._pivot}set pivot(t){this._pivot===Hl&&(this._pivot=new Ve(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===$l&&(this._skew=new Ve(this,0,0)),this._skew}set skew(t){this._skew===$l&&(this._skew=new Ve(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Wl&&(this._scale=new Ve(this,1,1)),this._scale}set scale(t){this._scale===Wl&&(this._scale=new Ve(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,s=r._x,l=r._y,a=o._x,u=o._y;n.a=this._cx*s,n.b=this._sx*s,n.c=this._cy*l,n.d=this._sy*l,n.tx=i._x-(a*n.a+u*n.c),n.ty=i._y-(a*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=nc,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=Ye.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=nc,this._onUpdate())}get tint(){return Pa(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ry,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vl,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Vl,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=Vl,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}ie.mixin(Gp);ie.mixin(Qp);ie.mixin(Yp);ie.mixin(qp);ie.mixin(Np);ie.mixin($p);ie.mixin(Kp);ie.mixin(Lp);ie.mixin(Dp);ie.mixin(Wp);class h0 extends ie{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new ho(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class Ge extends h0{constructor(t=_t.EMPTY){t instanceof _t&&(t={texture:t});const{texture:n=_t.EMPTY,anchor:r,roundPixels:o,width:i,height:s,...l}=t;super({label:"Sprite",...l}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Ve({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),s!==void 0&&(this.height=s)}static from(t,n=!1){return t instanceof _t?new Ge(t):new Ge(_t.from(t,n))}set texture(t){t||(t=_t.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return Tp(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Ft("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const oy=new ho;function Ed(e,t,n){const r=oy;e.measurable=!0,Pd(e,n,r),t.addBoundsMask(r),e.measurable=!1}function kd(e,t,n){const r=Ni.get();e.measurable=!0;const o=xn.get().identity(),i=Ld(e,n,o);zd(e,r,i),e.measurable=!1,t.addBoundsMask(r),xn.return(o),Ni.return(r)}function Ld(e,t,n){return e?(e!==t&&(Ld(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Gr("Mask bounds, renderable is not inside the root container"),n)}class Ud{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Ge),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||Ed(this.mask,t,n)}addLocalBounds(t,n){kd(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Ge}}Ud.extension=Ce.MaskEffect;class Dd{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}Dd.extension=Ce.MaskEffect;class Xd{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){Ed(this.mask,t,n)}addLocalBounds(t,n){kd(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof ie}}Xd.extension=Ce.MaskEffect;const iy={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let rc=iy;const mo={get(){return rc},set(e){rc=e}};class d0 extends Sn{constructor(t){t.resource||(t.resource=mo.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}d0.extension=Ce.TextureSource;class m0 extends Sn{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=mo.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,Gr("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}m0.extension=Ce.TextureSource;var ju=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(ju||{});class ql{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const Gd=class zn{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ql(null,null,1/0),this.deltaMS=1/zn.targetFPMS,this.elapsedMS=1/zn.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=ju.NORMAL){return this._addListener(new ql(t,n,r))}addOnce(t,n,r=ju.NORMAL){return this._addListener(new ql(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*zn.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,zn.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!zn._shared){const t=zn._shared=new zn;t.autoStart=!0,t._protected=!0}return zn._shared}static get system(){if(!zn._system){const t=zn._system=new zn;t.autoStart=!0,t._protected=!0}return zn._system}};Gd.targetFPMS=.06;let ra=Gd,Yl;async function sy(){return Yl??(Yl=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(s=>{const l=document.createElement("video");l.onloadeddata=()=>s(l),l.onerror=()=>s(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),Yl}const Al=class Bd extends Sn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...Bd.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=ra.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await sy(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(ra.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(ra.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(ra.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Al.extension=Ce.TextureSource;Al.defaultOptions={...Sn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Al.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let ay=Al;const fi=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class ly{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Gr(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=fi(t);let o;for(let a=0;a<this.parsers.length;a++){const u=this.parsers[a];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(a=>{i.set(a,n)});const s=[...i.keys()],l={cacheKeys:s,keys:r};r.forEach(a=>{this._cacheMap.set(a,l)}),s.forEach(a=>{const u=o?o[a]:n;this._cache.has(a)&&this._cache.get(a)!==u&&Gr("[Cache] already has key:",a),this._cache.set(a,i.get(a))})}remove(t){if(!this._cacheMap.has(t)){Gr(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const zo=new ly,Qu=[];xo.handleByList(Ce.TextureSource,Qu);function Nd(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<Qu.length;o++){const i=Qu[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function uy(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&zo.has(r))return zo.get(r);const i=new _t({source:Nd(o)});return i.on("destroy",()=>{zo.has(r)&&zo.remove(r)}),t||zo.set(r,i),i}function fy(e,t=!1){return typeof e=="string"?zo.get(e):e instanceof Sn?new _t({source:e}):uy(e,t)}_t.from=fy;Sn.from=Nd;xo.add(Ud,Dd,Xd,ay,m0,d0,u0);var $d=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))($d||{});function Kn(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function is(e){return e.split("?")[0].split("#")[0]}function cy(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function hy(e,t,n){return e.replace(new RegExp(cy(t),"g"),n)}function dy(e,t){let n="",r=0,o=-1,i=0,s=-1;for(let l=0;l<=e.length;++l){if(l<e.length)s=e.charCodeAt(l);else{if(s===47)break;s=47}if(s===47){if(!(o===l-1||i===1))if(o!==l-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const a=n.lastIndexOf("/");if(a!==n.length-1){a===-1?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),o=l,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=l,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,l)}`:n=e.slice(o+1,l),r=l-o-1;o=l,i=0}else s===46&&i!==-1?++i:i=-1}return n}const $s={toPosix(e){return hy(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){Kn(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(Kn(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=is(this.toPosix(t??mo.get().getBaseUrl())),o=is(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?$s.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(Kn(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=dy(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return Kn(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(Kn(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(Kn(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),s=e;e=e.slice(i.length);for(let l=e.length-1;l>=1;--l)if(t=e.charCodeAt(l),t===47){if(!o){r=l;break}}else o=!1;return r===-1?n?"/":this.isUrl(s)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){Kn(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){Kn(e),t&&Kn(t),e=is(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let s=t.length-1,l=-1;for(i=e.length-1;i>=0;--i){const a=e.charCodeAt(i);if(a===47){if(!o){n=i+1;break}}else l===-1&&(o=!1,l=i+1),s>=0&&(a===t.charCodeAt(s)?--s===-1&&(r=i):(s=-1,r=l))}return n===r?r=l:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){Kn(e),e=is(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let s=e.length-1;s>=0;--s){const l=e.charCodeAt(s);if(l===47){if(!o){n=s+1;break}continue}r===-1&&(o=!1,r=s+1),l===46?t===-1?t=s:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){Kn(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=is(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,s=0,l=-1,a=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!a){s=u+1;break}continue}l===-1&&(a=!1,l=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||l===-1||f===0||f===1&&i===l-1&&i===s+1?l!==-1&&(s===0&&r?t.base=t.name=e.slice(1,l):t.base=t.name=e.slice(s,l)):(s===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,l)):(t.name=e.slice(s,i),t.base=e.slice(s,l)),t.ext=e.slice(i,l)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Hd(e,t,n,r,o){const i=t[n];for(let s=0;s<i.length;s++){const l=i[s];n<t.length-1?Hd(e.replace(r[n],l),t,n+1,r,o):o.push(e.replace(r[n],l))}}function my(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const s=i.substring(1,i.length-1).split(",");o.push(s)}),Hd(e,o,0,n,r)}else r.push(e);return r}const oc=e=>!Array.isArray(e);class Wd{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return fi(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(s=>s?.src??s):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&Gr("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,s])=>typeof s=="string"||Array.isArray(s)?{alias:i,src:s}:{alias:i,...s})),o.forEach(i=>{const s=i.src,l=i.alias;let a;if(typeof l=="string"){const u=this._createBundleAssetId(t,l);r.push(u),a=[l,u]}else{const u=l.map(f=>this._createBundleAssetId(t,f));r.push(...u),a=[...l,...u]}this.add({...i,alias:a,src:s})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&Gr(`[Resolver] already has key: ${i} overwriting`)},fi(n).forEach(i=>{const{src:s}=i;let{data:l,format:a,loadParser:u}=i;const f=fi(s).map(d=>typeof d=="string"?my(d):Array.isArray(d)?d:[d]),h=this.getAlias(i);Array.isArray(h)?h.forEach(r):r(h);const c=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){p=x.parse(m);break}}}else l=m.data??l,a=m.format??a,u=m.loadParser??u,p={...p,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:h,data:l,format:a,loadParser:u}),c.push(p)})}),h.forEach(d=>{this._assetMap[d]=c})})}resolveBundle(t){const n=oc(t);t=fi(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const s=this.resolve(i),l={};for(const a in s){const u=s[a];l[this._extractAssetIdFromBundle(o,a)]=u}r[o]=l}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=oc(t);t=fi(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const s=this._getPreferredOrder(i);s?.priority.forEach(l=>{s.params[l].forEach(a=>{const u=i.filter(f=>f[l]?f[l]===a:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:s}=n;return(this._basePath||this._rootPath)&&(t.src=$s.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=s??t.format??py(t.src),t}}Wd.RETINA_PREFIX=/@([0-9\.]+)x/;function py(e){return e.split(".").pop().split("?").shift().split("#").shift()}const ic=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},Vd=class Ss{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof _t?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Ss.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Ss.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],s=i.frame;if(s){let l=null,a=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new Wn(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?l=new Wn(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):l=new Wn(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(a=new Wn(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[o]=new _t({source:this.textureSource,frame:l,orig:f,trim:a,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ss.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ss.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Vd.BATCH_SIZE=1e3;let sc=Vd;const yy=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function qd(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=$s.dirname(e[0]);t.linkedSheets.forEach((i,s)=>{const l=qd([`${o}/${t.data.meta.related_multi_packs[s]}`],i,!0);Object.assign(r,l)})}return r}const gy={extension:Ce.Asset,cache:{test:e=>e instanceof sc,getCacheableAssets:(e,t)=>qd(e,t,!1)},resolver:{extension:{type:Ce.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&yy.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(Wd.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:Ce.LoadParser,priority:$d.Normal,name:"spritesheetLoader"},async testParse(e,t){return $s.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=$s.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let s;if(r instanceof _t)s=r;else{const u=ic(i+(o??e.meta.image),t.src);s=(await n.load([u]))[u]}const l=new sc(s.source,e);await l.parse();const a=e?.meta?.related_multi_packs;if(Array.isArray(a)){const u=[];for(const h of a){if(typeof h!="string")continue;let c=i+h;t.data?.ignoreMultiPack||(c=ic(c,t.src),u.push(n.load({src:c,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);l.linkedSheets=f,f.forEach(h=>{h.linkedSheets=[l].concat(l.linkedSheets.filter(c=>c!==h))})}return l},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};xo.add(gy);const Kl=Object.create(null),ac=Object.create(null);function p0(e,t){let n=ac[e];return n===void 0&&(Kl[t]===void 0&&(Kl[t]=1),ac[e]=n=Kl[t]++),n}let oa;function xy(){return(!oa||oa?.isContextLost())&&(oa=mo.get().createCanvas().getContext("webgl",{})),oa}let ia;function My(){if(!ia){ia="mediump";const e=xy();e&&e.getShaderPrecisionFormat&&(ia=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return ia}function vy(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function by(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function Sy(e,t){return t?`#version 300 es
${e}`:e}const wy={},_y={};function Ay(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?wy:_y;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function Ty(e,t){return t?e.replace("#version 300 es",""):e}const jl={stripVersion:Ty,ensurePrecision:by,addProgramDefines:vy,setProgramName:Ay,insertVersion:Sy},Ql=Object.create(null),Yd=class Zu{constructor(t){t={...Zu.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:My()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(jl).forEach(s=>{const l=r[s];o=jl[s](o,l,!0),i=jl[s](i,l,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=p0(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return Ql[n]||(Ql[n]=new Zu(t)),Ql[n]}};Yd.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Ht=Yd;const lc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Cy(e){return lc[e]??lc.float32}const Ry={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Py({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),s=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let l;for(;(l=s.exec(i))!==null;){const a=Ry[l[3]]??"float32";n[l[2]]={location:parseInt(l[1],10),format:a,stride:Cy(a).stride,offset:0,instance:!1,start:0}}}}return n}function Zl(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,s=/struct\s+(\w+)\s*{([^}]+)}/g,l=/(\w+)\s*:\s*([\w\<\>]+)/g,a=/struct\s+(\w+)/,u=e.match(t)?.map(h=>({group:parseInt(h.match(n)[1],10),binding:parseInt(h.match(r)[1],10),name:h.match(o)[2],isUniform:h.match(o)[1]==="<uniform>",type:h.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(s)?.map(h=>{const c=h.match(a)[1],d=h.match(l).reduce((m,p)=>{const[g,x]=p.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:c,members:d}:null}).filter(({name:h})=>u.some(c=>c.type===h))??[];return{groups:u,structs:f}}var ws=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(ws||{});function Iy({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:ws.VERTEX|ws.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:ws.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:ws.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function zy({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Oy(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(s=>n.has(s.name)?!1:(n.add(s.name),!0)),i=[...e.groups,...t.groups].filter(s=>{const l=`${s.name}-${s.binding}`;return r.has(l)?!1:(r.add(l),!0)});return{structs:o,groups:i}}const Jl=Object.create(null);class Bt{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:s}=t;if(this.name=s,this.fragment=n,this.vertex=r,n.source===r.source){const l=Zl(n.source);this.structsAndGroups=l}else{const l=Zl(r.source),a=Zl(n.source);this.structsAndGroups=Oy(l,a)}this.layout=o??zy(this.structsAndGroups),this.gpuLayout=i??Iy(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=p0(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Py(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Jl[n]||(Jl[n]=new Bt(t)),Jl[n]}}const Kd=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Fy=Kd.reduce((e,t)=>(e[t]=!0,e),{});function Ey(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const jd=class Qd{constructor(t,n){this._touched=0,this.uid=gn("uniform"),this._resourceType="uniformGroup",this._resourceId=gn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...Qd.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!Fy[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Kd.join(", ")}`);i.value??(i.value=Ey(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=p0(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};jd.defaultOptions={ubo:!1,isStatic:!1};let Tl=jd;class tu{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var nl=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(nl||{});class Cl extends Mo{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:s,groupMap:l}=t;this.gpuProgram=n,this.glProgram=r,s===void 0&&(s=0,n&&(s|=nl.WEBGPU),r&&(s|=nl.WEBGL)),this.compatibleRenderers=s;const a={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!l)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&l)for(const u in l)for(const f in l[u]){const h=l[u][f];a[h]={group:u,binding:f,name:h}}else if(n&&o&&!l){const u=n.structsAndGroups.groups;l={},u.forEach(f=>{l[f.group]=l[f.group]||{},l[f.group][f.binding]=f.name,a[f.name]=f})}else if(i){o={},l={},n&&n.structsAndGroups.groups.forEach(h=>{l[h.group]=l[h.group]||{},l[h.group][h.binding]=h.name,a[h.name]=h});let u=0;for(const f in i)a[f]||(o[99]||(o[99]=new tu,this._ownedBindGroups.push(o[99])),a[f]={group:99,binding:u,name:f},l[99]=l[99]||{},l[99][u]=f,u++);for(const f in i){const h=f;let c=i[f];!c.source&&!c._resourceType&&(c=new Tl(c));const d=a[h];d&&(o[d.group]||(o[d.group]=new tu,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(c,d.binding))}}this.groups=o,this._uniformBindMap=l,this.resources=this._buildResourceAccessor(o,a)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new tu,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(s){t[i.group].setResource(s,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=Bt.from(n)),r&&(s=Ht.from(r)),new Cl({gpuProgram:i,glProgram:s,...o})}}const ky={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},eu=0,nu=1,ru=2,ou=3,iu=4,su=5,Ju=class Zd{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<eu)}set blend(t){!!(this.data&1<<eu)!==t&&(this.data^=1<<eu)}get offsets(){return!!(this.data&1<<nu)}set offsets(t){!!(this.data&1<<nu)!==t&&(this.data^=1<<nu)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<ru)}set culling(t){!!(this.data&1<<ru)!==t&&(this.data^=1<<ru)}get depthTest(){return!!(this.data&1<<ou)}set depthTest(t){!!(this.data&1<<ou)!==t&&(this.data^=1<<ou)}get depthMask(){return!!(this.data&1<<su)}set depthMask(t){!!(this.data&1<<su)!==t&&(this.data^=1<<su)}get clockwiseFrontFace(){return!!(this.data&1<<iu)}set clockwiseFrontFace(t){!!(this.data&1<<iu)!==t&&(this.data^=1<<iu)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=ky[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Zd;return t.depthTest=!1,t.blend=!0,t}};Ju.default2d=Ju.for2d();let Jd=Ju;const t1=class tf extends Cl{constructor(t){t={...tf.defaultOptions,...t},super(t),this.enabled=!0,this._state=Jd.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=Bt.from(n)),r&&(s=Ht.from(r)),new tf({gpuProgram:i,glProgram:s,...o})}};t1.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let Yt=t1;const ef=[];xo.handleByNamedList(Ce.Environment,ef);async function Ly(e){if(!e)for(let t=0;t<ef.length;t++){const n=ef[t];if(n.value.test()){await n.value.load();return}}}let ss;function Uy(){if(typeof ss=="boolean")return ss;try{ss=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ss=!1}return ss}var sa={exports:{}},uc;function Dy(){if(uc)return sa.exports;uc=1,sa.exports=e,sa.exports.default=e;function e(k,E,L){L=L||2;var G=E&&E.length,$=G?E[0]*L:k.length,V=t(k,0,$,L,!0),q=[];if(!V||V.next===V.prev)return q;var ut,Tt,At,de,oe,Et,Be;if(G&&(V=a(k,E,V,L)),k.length>80*L){ut=At=k[0],Tt=de=k[1];for(var re=L;re<$;re+=L)oe=k[re],Et=k[re+1],oe<ut&&(ut=oe),Et<Tt&&(Tt=Et),oe>At&&(At=oe),Et>de&&(de=Et);Be=Math.max(At-ut,de-Tt),Be=Be!==0?32767/Be:0}return r(V,q,L,ut,Tt,Be,0),q}function t(k,E,L,G,$){var V,q;if($===Q(k,E,L,G)>0)for(V=E;V<L;V+=G)q=U(V,k[V],k[V+1],q);else for(V=L-G;V>=E;V-=G)q=U(V,k[V],k[V+1],q);return q&&S(q,q.next)&&(X(q),q=q.next),q}function n(k,E){if(!k)return k;E||(E=k);var L=k,G;do if(G=!1,!L.steiner&&(S(L,L.next)||M(L.prev,L,L.next)===0)){if(X(L),L=E=L.prev,L===L.next)break;G=!0}else L=L.next;while(G||L!==E);return E}function r(k,E,L,G,$,V,q){if(k){!q&&V&&d(k,G,$,V);for(var ut=k,Tt,At;k.prev!==k.next;){if(Tt=k.prev,At=k.next,V?i(k,G,$,V):o(k)){E.push(Tt.i/L|0),E.push(k.i/L|0),E.push(At.i/L|0),X(k),k=At.next,ut=At.next;continue}if(k=At,k===ut){q?q===1?(k=s(n(k),E,L),r(k,E,L,G,$,V,2)):q===2&&l(k,E,L,G,$,V):r(n(k),E,L,G,$,V,1);break}}}}function o(k){var E=k.prev,L=k,G=k.next;if(M(E,L,G)>=0)return!1;for(var $=E.x,V=L.x,q=G.x,ut=E.y,Tt=L.y,At=G.y,de=$<V?$<q?$:q:V<q?V:q,oe=ut<Tt?ut<At?ut:At:Tt<At?Tt:At,Et=$>V?$>q?$:q:V>q?V:q,Be=ut>Tt?ut>At?ut:At:Tt>At?Tt:At,re=G.next;re!==E;){if(re.x>=de&&re.x<=Et&&re.y>=oe&&re.y<=Be&&x($,ut,V,Tt,q,At,re.x,re.y)&&M(re.prev,re,re.next)>=0)return!1;re=re.next}return!0}function i(k,E,L,G){var $=k.prev,V=k,q=k.next;if(M($,V,q)>=0)return!1;for(var ut=$.x,Tt=V.x,At=q.x,de=$.y,oe=V.y,Et=q.y,Be=ut<Tt?ut<At?ut:At:Tt<At?Tt:At,re=de<oe?de<Et?de:Et:oe<Et?oe:Et,jr=ut>Tt?ut>At?ut:At:Tt>At?Tt:At,os=de>oe?de>Et?de:Et:oe>Et?oe:Et,L0=p(Be,re,E,L,G),U0=p(jr,os,E,L,G),Qt=k.prevZ,Zt=k.nextZ;Qt&&Qt.z>=L0&&Zt&&Zt.z<=U0;){if(Qt.x>=Be&&Qt.x<=jr&&Qt.y>=re&&Qt.y<=os&&Qt!==$&&Qt!==q&&x(ut,de,Tt,oe,At,Et,Qt.x,Qt.y)&&M(Qt.prev,Qt,Qt.next)>=0||(Qt=Qt.prevZ,Zt.x>=Be&&Zt.x<=jr&&Zt.y>=re&&Zt.y<=os&&Zt!==$&&Zt!==q&&x(ut,de,Tt,oe,At,Et,Zt.x,Zt.y)&&M(Zt.prev,Zt,Zt.next)>=0))return!1;Zt=Zt.nextZ}for(;Qt&&Qt.z>=L0;){if(Qt.x>=Be&&Qt.x<=jr&&Qt.y>=re&&Qt.y<=os&&Qt!==$&&Qt!==q&&x(ut,de,Tt,oe,At,Et,Qt.x,Qt.y)&&M(Qt.prev,Qt,Qt.next)>=0)return!1;Qt=Qt.prevZ}for(;Zt&&Zt.z<=U0;){if(Zt.x>=Be&&Zt.x<=jr&&Zt.y>=re&&Zt.y<=os&&Zt!==$&&Zt!==q&&x(ut,de,Tt,oe,At,Et,Zt.x,Zt.y)&&M(Zt.prev,Zt,Zt.next)>=0)return!1;Zt=Zt.nextZ}return!0}function s(k,E,L){var G=k;do{var $=G.prev,V=G.next.next;!S($,V)&&w($,G,G.next,V)&&z($,V)&&z(V,$)&&(E.push($.i/L|0),E.push(G.i/L|0),E.push(V.i/L|0),X(G),X(G.next),G=k=V),G=G.next}while(G!==k);return n(G)}function l(k,E,L,G,$,V){var q=k;do{for(var ut=q.next.next;ut!==q.prev;){if(q.i!==ut.i&&v(q,ut)){var Tt=O(q,ut);q=n(q,q.next),Tt=n(Tt,Tt.next),r(q,E,L,G,$,V,0),r(Tt,E,L,G,$,V,0);return}ut=ut.next}q=q.next}while(q!==k)}function a(k,E,L,G){var $=[],V,q,ut,Tt,At;for(V=0,q=E.length;V<q;V++)ut=E[V]*G,Tt=V<q-1?E[V+1]*G:k.length,At=t(k,ut,Tt,G,!1),At===At.next&&(At.steiner=!0),$.push(g(At));for($.sort(u),V=0;V<$.length;V++)L=f($[V],L);return L}function u(k,E){return k.x-E.x}function f(k,E){var L=h(k,E);if(!L)return E;var G=O(L,k);return n(G,G.next),n(L,L.next)}function h(k,E){var L=E,G=k.x,$=k.y,V=-1/0,q;do{if($<=L.y&&$>=L.next.y&&L.next.y!==L.y){var ut=L.x+($-L.y)*(L.next.x-L.x)/(L.next.y-L.y);if(ut<=G&&ut>V&&(V=ut,q=L.x<L.next.x?L:L.next,ut===G))return q}L=L.next}while(L!==E);if(!q)return null;var Tt=q,At=q.x,de=q.y,oe=1/0,Et;L=q;do G>=L.x&&L.x>=At&&G!==L.x&&x($<de?G:V,$,At,de,$<de?V:G,$,L.x,L.y)&&(Et=Math.abs($-L.y)/(G-L.x),z(L,k)&&(Et<oe||Et===oe&&(L.x>q.x||L.x===q.x&&c(q,L)))&&(q=L,oe=Et)),L=L.next;while(L!==Tt);return q}function c(k,E){return M(k.prev,k,E.prev)<0&&M(E.next,k,k.next)<0}function d(k,E,L,G){var $=k;do $.z===0&&($.z=p($.x,$.y,E,L,G)),$.prevZ=$.prev,$.nextZ=$.next,$=$.next;while($!==k);$.prevZ.nextZ=null,$.prevZ=null,m($)}function m(k){var E,L,G,$,V,q,ut,Tt,At=1;do{for(L=k,k=null,V=null,q=0;L;){for(q++,G=L,ut=0,E=0;E<At&&(ut++,G=G.nextZ,!!G);E++);for(Tt=At;ut>0||Tt>0&&G;)ut!==0&&(Tt===0||!G||L.z<=G.z)?($=L,L=L.nextZ,ut--):($=G,G=G.nextZ,Tt--),V?V.nextZ=$:k=$,$.prevZ=V,V=$;L=G}V.nextZ=null,At*=2}while(q>1);return k}function p(k,E,L,G,$){return k=(k-L)*$|0,E=(E-G)*$|0,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,E=(E|E<<8)&16711935,E=(E|E<<4)&252645135,E=(E|E<<2)&858993459,E=(E|E<<1)&1431655765,k|E<<1}function g(k){var E=k,L=k;do(E.x<L.x||E.x===L.x&&E.y<L.y)&&(L=E),E=E.next;while(E!==k);return L}function x(k,E,L,G,$,V,q,ut){return($-q)*(E-ut)>=(k-q)*(V-ut)&&(k-q)*(G-ut)>=(L-q)*(E-ut)&&(L-q)*(V-ut)>=($-q)*(G-ut)}function v(k,E){return k.next.i!==E.i&&k.prev.i!==E.i&&!R(k,E)&&(z(k,E)&&z(E,k)&&I(k,E)&&(M(k.prev,k,E.prev)||M(k,E.prev,E))||S(k,E)&&M(k.prev,k,k.next)>0&&M(E.prev,E,E.next)>0)}function M(k,E,L){return(E.y-k.y)*(L.x-E.x)-(E.x-k.x)*(L.y-E.y)}function S(k,E){return k.x===E.x&&k.y===E.y}function w(k,E,L,G){var $=T(M(k,E,L)),V=T(M(k,E,G)),q=T(M(L,G,k)),ut=T(M(L,G,E));return!!($!==V&&q!==ut||$===0&&_(k,L,E)||V===0&&_(k,G,E)||q===0&&_(L,k,G)||ut===0&&_(L,E,G))}function _(k,E,L){return E.x<=Math.max(k.x,L.x)&&E.x>=Math.min(k.x,L.x)&&E.y<=Math.max(k.y,L.y)&&E.y>=Math.min(k.y,L.y)}function T(k){return k>0?1:k<0?-1:0}function R(k,E){var L=k;do{if(L.i!==k.i&&L.next.i!==k.i&&L.i!==E.i&&L.next.i!==E.i&&w(L,L.next,k,E))return!0;L=L.next}while(L!==k);return!1}function z(k,E){return M(k.prev,k,k.next)<0?M(k,E,k.next)>=0&&M(k,k.prev,E)>=0:M(k,E,k.prev)<0||M(k,k.next,E)<0}function I(k,E){var L=k,G=!1,$=(k.x+E.x)/2,V=(k.y+E.y)/2;do L.y>V!=L.next.y>V&&L.next.y!==L.y&&$<(L.next.x-L.x)*(V-L.y)/(L.next.y-L.y)+L.x&&(G=!G),L=L.next;while(L!==k);return G}function O(k,E){var L=new N(k.i,k.x,k.y),G=new N(E.i,E.x,E.y),$=k.next,V=E.prev;return k.next=E,E.prev=k,L.next=$,$.prev=L,G.next=L,L.prev=G,V.next=G,G.prev=V,G}function U(k,E,L,G){var $=new N(k,E,L);return G?($.next=G.next,$.prev=G,G.next.prev=$,G.next=$):($.prev=$,$.next=$),$}function X(k){k.next.prev=k.prev,k.prev.next=k.next,k.prevZ&&(k.prevZ.nextZ=k.nextZ),k.nextZ&&(k.nextZ.prevZ=k.prevZ)}function N(k,E,L){this.i=k,this.x=E,this.y=L,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(k,E,L,G){var $=E&&E.length,V=$?E[0]*L:k.length,q=Math.abs(Q(k,0,V,L));if($)for(var ut=0,Tt=E.length;ut<Tt;ut++){var At=E[ut]*L,de=ut<Tt-1?E[ut+1]*L:k.length;q-=Math.abs(Q(k,At,de,L))}var oe=0;for(ut=0;ut<G.length;ut+=3){var Et=G[ut]*L,Be=G[ut+1]*L,re=G[ut+2]*L;oe+=Math.abs((k[Et]-k[re])*(k[Be+1]-k[Et+1])-(k[Et]-k[Be])*(k[re+1]-k[Et+1]))}return q===0&&oe===0?0:Math.abs((oe-q)/q)};function Q(k,E,L,G){for(var $=0,V=E,q=L-G;V<L;V+=G)$+=(k[q]-k[V])*(k[V+1]+k[q+1]),q=V;return $}return e.flatten=function(k){for(var E=k[0][0].length,L={vertices:[],holes:[],dimensions:E},G=0,$=0;$<k.length;$++){for(var V=0;V<k[$].length;V++)for(var q=0;q<E;q++)L.vertices.push(k[$][V][q]);$>0&&(G+=k[$-1].length,L.holes.push(G))}return L},sa.exports}var Xy=Dy();const nw=Md(Xy);var e1=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(e1||{});class Gy{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,s,l,a){const{name:u,items:f}=this;for(let h=0,c=f.length;h<c;h++)f[h][u](t,n,r,o,i,s,l,a);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const By=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],n1=class r1 extends Mo{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...By,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await Ly(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...r1.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof ie&&(r={container:r},n&&(Ft(bn,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:Ye.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=e1.ALL);const{clear:r,clearColor:o,target:i}=t;Ye.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,Ye.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new Gy(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,s=o.name,l=r[s];this.renderPipes[s]=new i(this,l?new l:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Uy())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};n1.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let o1=n1,aa;function Ny(e){return aa!==void 0||(aa=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??o1.defaultOptions.failIfMajorPerformanceCaveat};try{if(!mo.get().getWebGLRenderingContext())return!1;let r=mo.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),aa}let la;async function $y(e={}){return la!==void 0||(la=await(async()=>{const t=mo.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),la}const fc=["webgl","webgpu","canvas"];async function Hy(e){let t=[];e.preference?(t.push(e.preference),fc.forEach(i=>{i!==e.preference&&t.push(i)})):t=fc.slice();let n,r={};for(let i=0;i<t.length;i++){const s=t[i];if(s==="webgpu"&&await $y()){const{WebGPURenderer:l}=await tl(async()=>{const{WebGPURenderer:a}=await import("./WebGPURenderer-CFozO3Za.js");return{WebGPURenderer:a}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=l,r={...e,...e.webgpu};break}else if(s==="webgl"&&Ny(e.failIfMajorPerformanceCaveat??o1.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await tl(async()=>{const{WebGLRenderer:a}=await import("./WebGLRenderer-rMbU-mu0.js");return{WebGLRenderer:a}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=l,r={...e,...e.webgl};break}else if(s==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const i1="8.6.6";class s1{static init(){globalThis.__PIXI_APP_INIT__?.(this,i1)}static destroy(){}}s1.extension=Ce.Application;class Wy{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,i1)}destroy(){this._renderer=null}}Wy.extension={type:[Ce.WebGLSystem,Ce.WebGPUSystem],name:"initHook",priority:-10};const a1=class nf{constructor(...t){this.stage=new ie,t[0]!==void 0&&Ft(bn,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Hy(t),nf._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ft(bn,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=nf._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};a1._plugins=[];let zs=a1;xo.handleByList(Ce.Application,zs._plugins);xo.add(s1);var fn=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(fn||{});class Ci extends Mo{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:s}=t;super(),this.uid=gn("buffer"),this._resourceType="buffer",this._resourceId=gn("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const l=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:l,label:i},this.shrinkToFit=s??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&fn.STATIC)}set static(t){t?this.descriptor.usage|=fn.STATIC:this.descriptor.usage&=~fn.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=gn("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function l1(e,t){if(!(e instanceof Ci)){let n=t?fn.INDEX:fn.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=fn.INDEX|fn.COPY_DST):(e=new Float32Array(e),n=fn.VERTEX|fn.COPY_DST)),e=new Ci({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function Vy(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,s=1/0,l=-1/0,a=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let c=f;c<o.length;c+=h){const d=o[c],m=o[c+1];d>l&&(l=d),m>a&&(a=m),d<i&&(i=d),m<s&&(s=m)}return n.minX=i,n.minY=s,n.maxX=l,n.maxY=a,n}function qy(e){return(e instanceof Ci||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=l1(e.buffer,!1),e}class u1 extends Mo{constructor(t={}){super(),this.uid=gn("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new ho,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=qy(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=l1(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Vy(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var f1=`in vec2 aPosition;
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
`,Yy=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,cc=`struct GlobalFilterUniforms {
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
}`;const c1=class h1 extends Yt{constructor(t){t={...h1.defaultOptions,...t};const n=Bt.from({vertex:{source:cc,entryPoint:"mainVertex"},fragment:{source:cc,entryPoint:"mainFragment"}}),r=Ht.from({vertex:f1,fragment:Yy,name:"alpha-filter"}),{alpha:o,...i}=t,s=new Tl({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:s}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};c1.defaultOptions={alpha:1};let Ky=c1;const d1={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},jy=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Qy(e){const t=d1[e],n=t.length;let r=jy,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let s;for(let l=0;l<e;l++){let a=i.replace("%index%",l.toString());s=l,l>=n&&(s=e-l-1),a=a.replace("%value%",t[s].toString()),o+=a,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const Zy=`
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
    }`;function Jy(e,t){const n=Math.ceil(e/2);let r=Zy,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());l=l.replace("%sampleIndex%",`${s-(n-1)}.0`),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function tg(e,t){const n=Jy(t,e),r=Qy(t);return Ht.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var eg=`

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
}`;function ng(e,t){const n=d1[t],r=n.length,o=[],i=[],s=[];for(let h=0;h<t;h++){o[h]=`@location(${h}) offset${h}: vec2<f32>,`,e?i[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:i[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const c=h<r?h:t-h-1,d=n[c].toString();s[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const l=o.join(`
`),a=i.join(`
`),u=s.join(`
`),f=eg.replace("%blur-struct%",l).replace("%blur-vertex-out%",a).replace("%blur-fragment-in%",l).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Bt.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const m1=class p1 extends Yt{constructor(t){t={...p1.defaultOptions,...t};const n=tg(t.horizontal,t.kernelSize),r=ng(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=On.getSameSizeTexture(n);let s=n,l=i;this._state.blend=!1;const a=t.renderer.type===nl.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,s,l,u===0?!0:a);const f=l;l=s,s=f}this._state.blend=!0,t.applyFilter(this,s,r,o),On.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};m1.defaultOptions={strength:8,quality:4,kernelSize:5};let hc=m1;var rg=`
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
`,dc=`struct GlobalFilterUniforms {
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
}`;class og extends Yt{constructor(t={}){const n=new Tl({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),r=Bt.from({vertex:{source:dc,entryPoint:"mainVertex"},fragment:{source:dc,entryPoint:"mainFragment"}}),o=Ht.from({vertex:f1,fragment:rg,name:"color-matrix-filter"});super({...t,gpuProgram:r,glProgram:o,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let r=t;n&&(this._multiply(r,this.matrix,t),r=this._colorMatrix(r)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=r,this.resources.colorMatrixUniforms.update()}_multiply(t,n,r){return t[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],t[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],t[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],t[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],t[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],t[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],t[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],t[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],t[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],t[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],t[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],t[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],t[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],t[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],t[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],t[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],t[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],t[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],t[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],t[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}tint(t,n){const[r,o,i]=Ye.shared.setValue(t).toArray(),s=[r,0,0,0,0,0,o,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(s,n)}greyscale(t,n){const r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const r=Math.cos(t),o=Math.sin(t),i=Math.sqrt,s=1/3,l=i(s),a=r+(1-r)*s,u=s*(1-r)-l*o,f=s*(1-r)+l*o,h=s*(1-r)+l*o,c=r+s*(1-r),d=s*(1-r)-l*o,m=s*(1-r)-l*o,p=s*(1-r)+l*o,g=r+s*(1-r),x=[a,u,f,0,0,h,c,d,0,0,m,p,g,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const r=(t||0)+1,o=-.5*(r-1),i=[r,0,0,0,o,0,r,0,0,o,0,0,r,0,o,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const r=t*2/3+1,o=(r-1)*-.5,i=[r,o,o,0,0,o,r,o,0,0,o,o,r,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,r,o,i){t||(t=.2),n||(n=.15),r||(r=16770432),o||(o=3375104);const s=Ye.shared,[l,a,u]=s.setValue(r).toArray(),[f,h,c]=s.setValue(o).toArray(),d=[.3,.59,.11,0,0,l,a,u,t,0,f,h,c,n,0,l-f,a-h,u-c,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)}predator(t,n){const r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function mc(e,t,n,r,o,i,s,l){const a=s-n,u=l-r,f=o-n,h=i-r,c=e-n,d=t-r,m=a*a+u*u,p=a*f+u*h,g=a*c+u*d,x=f*f+h*h,v=f*c+h*d,M=1/(m*x-p*p),S=(x*g-p*v)*M,w=(m*v-p*g)*M;return S>=0&&w>=0&&S+w<1}const y1=class g1 extends u1{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Ft(bn,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...g1.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),s=n.shrinkBuffersToFit,l=new Ci({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:fn.VERTEX|fn.COPY_DST}),a=new Ci({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:fn.VERTEX|fn.COPY_DST}),u=new Ci({data:i,label:"index-mesh-buffer",shrinkToFit:s,usage:fn.INDEX|fn.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:a,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};y1.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let x1=y1;class ig extends h0{constructor(...t){let n=t[0];n instanceof u1&&(Ft(bn,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Ft(bn,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:s,state:l,...a}=n;super({label:"Mesh",...a}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??_t.WHITE,this.state=l??Jd.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=s??!1}get material(){return Ft(bn,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=_t.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof x1?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const s=this.geometry.getIndex().data,l=s.length;for(let a=0;a+2<l;a+=i){const u=s[a]*2,f=s[a+1]*2,h=s[a+2]*2;if(mc(n,r,o[u],o[u+1],o[f],o[f+1],o[h],o[h+1]))return!0}}else{const s=o.length/2;for(let l=0;l+2<s;l+=i){const a=l*2,u=(l+1)*2,f=(l+2)*2;if(mc(n,r,o[a],o[a+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class sg{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new be,this.observer=n,this.position=new Ve(this,0,0),this.scale=new Ve(this,1,1),this.pivot=new Ve(this,0,0),this.skew=new Ve(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const M1=class Ia extends h0{constructor(...t){let n=t[0]||{};n instanceof _t&&(n={texture:n}),t.length>1&&(Ft(bn,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...Ia.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:s,tileRotation:l,width:a,height:u,applyAnchorToTexture:f,roundPixels:h,...c}=n??{};super({label:"TilingSprite",...c}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Ve({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=a??r.width,this._height=u??r.height,this._tileTransform=new sg({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=s,this.tileRotation=l,this.roundPixels=h??!1}static from(t,n={}){return typeof t=="string"?new Ia({texture:zo.get(t),...n}):new Ia({texture:t,...n})}get uvRespectAnchor(){return Gr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){Gr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=_t.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};M1.defaultOptions={texture:_t.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let ag=M1;const as=new Map;function lg(e,t){if(!as.has(e)){const n=new _t({source:new d0({resource:e,...t})}),r=()=>{as.get(e)===n&&as.delete(e)};n.once("destroy",r),n.source.once("destroy",r),as.set(e,n)}return as.get(e)}const v1=class b1{constructor(t={}){if(this.uid=gn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...b1.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new Sn({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof _t||t.depthStencilTexture instanceof Sn?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new Sn({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,s)=>{o&&s===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};v1.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let ug=v1;class y0 extends _t{static create(t){return new y0({source:new Sn(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const g0=class S1{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...S1.defaultOptions,...t},t.view&&(Ft(bn,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new Wn(0,0,t.width,t.height),this.canvas=t.canvas||mo.get().createCanvas(),this.antialias=!!t.antialias,this.texture=lg(this.canvas,t),this.renderTarget=new ug({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};g0.extension={type:[Ce.WebGLSystem,Ce.WebGPUSystem,Ce.CanvasSystem],name:"view",priority:0};g0.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let fg=g0;xo.add(dp,mp);const Jt={},$i={},pc=new Map,er={};function rf(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function cg(e){const t=window.MAP;Object.assign(Jt,window.META,t.decometa||{});for(const l of Object.keys(Jt)){const a=Jt[l].gear;if(a)for(const u in a)for(const f of a[u])Jt[l+"__"+u+f]=Jt[l]}const n=Object.keys(Jt),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const s=()=>e(++i/o);await Promise.all([...n.map(async l=>{const a=await rf("assets/"+l+".png");if(er[l]=a,a.naturalWidth){const u=_t.from(a);u.source.scaleMode="nearest",$i[l]=u}s()}),...r.map(async l=>{er[l]=await rf("assets/"+l+(l==="ground"?".webp":".png")),s()})])}function Rl(e){return!!$i[e]}function hg(){return Object.values($i)}const yc=new Set;function w1(e){$i[e]||yc.has(e)||!Jt[e]||(yc.add(e),rf("assets/"+e+".png").then(t=>{if(er[e]=t,t.naturalWidth){const n=_t.from(t);n.source.scaleMode="nearest",$i[e]=n}}))}function dg(e){for(const t of e){const n=Jt[t]&&Jt[t].gear;n&&n.w&&n.w.includes(0)&&w1(t+"__w0")}}function Eo(e,t,n,r){const o=Jt[e],i=$i[e];if(o&&!i&&e.includes("__"))return w1(e),null;if(!o||!i)return null;let s=0,l=0;if(o.anims&&t){const f=o.anims[t]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],h=o.dirs||1,c=h>=16?(n%16+16)%16:h>1?Math.round(n/2)%h:0;s=f.row+c,l=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(l=(r%o.frames+o.frames)%o.frames);const a=e+"|"+s+"|"+l;let u=pc.get(a);if(!u){if((l+1)*o.fw>i.width||(s+1)*o.fh>i.height)return null;u=new _t({source:i.source,frame:new Wn(l*o.fw,s*o.fh,o.fw,o.fh)}),pc.set(a,u)}return u}function of(e,t,n){const r=Jt[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function mg(){const e=er.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),s=Math.min(t,e.naturalHeight-r),l=document.createElement("canvas");l.width=i,l.height=s,l.getContext("2d").drawImage(e,o,r,i,s,0,0,i,s);const a=_t.from(l);a.source.scaleMode="nearest",n.push({tex:a,x:o,y:r})}return n}const P=Math.round,K=Math.PI*2,$t=e=>1-(1-e)*(1-e);function mn(e,t,n,r,o,i){const s=t[0].length,l=t.length,a=P(n-s*o/2),u=P(r-l*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<l;h++){const c=t[h];for(let d=0;d<s;d++)c[d]===f&&e.fillRect(a+d*o,u+h*o,o,o)}}}function dn(e){const t=Jt[e.sprite];return(t?t.ay:50)*(e.scale||1)/B.ZK}function Se(e){const t=e.uid!==void 0?mt(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const pg=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],yg={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function gg(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=y(-.35,.35);st.sfx("item_crit",t,n,.9),A({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.55),u=Math.min(1,s*3.5);i.globalAlpha=s<.45?1:(1-s)/.55;for(let f=0;f<=26;f++){const h=f/26;if(h>u)break;const c=o-Math.PI/2+r*(-1.35+2.7*h),d=u-h,m=P(2+7*Math.sin(Math.PI*h));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(P(l+Math.cos(c)*36-m/2),P(a+10+Math.sin(c)*24-m/2),m,m)}if(s<.3){const f=1-s/.3,h=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(P(l-h),P(a)-1,P(h*2),3),i.fillRect(P(l)-1,P(a-h*.7),3,P(h*1.4)),i.fillStyle="#ff5a3a";for(let c=0;c<4;c++){const d=h*.55;i.fillRect(P(l+(c&1?d:-d)*.7)-2,P(a+(c&2?d:-d)*.5)-2,4,4)}}}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,s,l){const a=Math.min(1,s/.22),u=1.5-.95*a*a;if(!l.hit&&a>=1){l.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*K,p=y(1.5,3.5);F(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*K,p=y(1,2.5);F(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,y(1.5,3),.6,"#f2e4c4",2,9,!1)}ot(4)}const[f,h]=C(t,n,u);i.globalAlpha=s<.6?1:(1-s)/.4;const c=a>=1&&s<.35?(Math.random()-.5)*3:0;mn(i,pg,f+c,h-6,3,yg)}})}function xg(e){const t=[e.x,e.y];for(const s of String(e.pts||"").split(";")){const l=s.split(",");l.length===2&&l[0]!==""&&t.push(+l[0],+l[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;st.sfx("item_chain",t[2],t[3],1),F(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),A({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(s,l,a){const u=l*i,f=Math.floor(b.T*28);for(;a.sp<n&&u>=a.sp*o;){const h=t[a.sp*2+2],c=t[a.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*K,p=y(2,4.5);F(h,c,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}a.sp++}s.lineJoin="miter";for(let h=0;h<n;h++){const c=u-h*o;if(c<0)break;const d=Math.max(0,1-c/.38);if(d<=0)continue;const[m,p]=C(t[h*2],t[h*2+1],h?.5:.7),[g,x]=C(t[h*2+2],t[h*2+3],.5),v=g-m,M=x-p,S=Math.hypot(v,M)||1,w=-M/S,_=v/S,T=Math.min(16,4+S*.1),R=7;s.beginPath(),s.moveTo(m,p);for(let N=1;N<R;N++){const Q=(nt(r+h*31+N*7+f*13)-.5)*2*T;s.lineTo(m+v*N/R+w*Q,p+M*N/R+_*Q)}s.lineTo(g,x),s.globalAlpha=d*.4,s.strokeStyle="#5a7aff",s.lineWidth=8,s.stroke(),s.globalAlpha=d*.85,s.strokeStyle="#9ae0ff",s.lineWidth=3.5,s.stroke(),s.globalAlpha=d,s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke();const z=2+(nt(r+h)*3|0),I=(nt(r+h*31+z*7+f*13)-.5)*2*T,O=nt(r+h*5+f)<.5?1:-1,U=m+v*z/R+w*I,X=p+M*z/R+_*I;if(s.beginPath(),s.moveTo(U,X),s.lineTo(U+w*O*12+v/S*7,X+_*O*12+M/S*7),s.lineTo(U+w*O*17+v/S*17,X+_*O*17+M/S*17),s.globalAlpha=d*.75,s.strokeStyle="#bfeaff",s.lineWidth=1.5,s.stroke(),c<.16){const N=1-c/.16,Q=4+N*11;s.globalAlpha=N,s.fillStyle="#e8f6ff",s.fillRect(P(g-Q),P(x)-1,P(Q*2),3),s.fillRect(P(g)-1,P(x-Q),3,P(Q*2)),s.fillStyle="#7ac8ff",s.fillRect(P(g)-4,P(x)-4,8,8)}}}}),ot(2)}const Mg=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],vg={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function bg(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*K;st.sfx("item_bash",t,n,1),A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,s,l){const a=Math.min(1,s/.24),u=1.9-1.35*a*a;if(!l.hit&&a>=1){l.hit=!0,A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,it(t,n,.3+1.3*$t(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,it(t,n,.25+.8*$t(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const g=o+p/7*K;d.beginPath();for(let x=0;x<=3;x++){const v=.2+x*.28,M=g+(nt(o+p*9+x)-.5)*.7,[S,w]=C(t+Math.cos(M)*v,n+Math.sin(M)*v);x?d.lineTo(S,w):d.moveTo(S,w)}d.stroke()}}}),A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=C(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let v=0;v<10;v++){const M=v/10*K;d.fillRect(P(p+Math.cos(M)*x)-2,P(g+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*K,p=y(1.5,4);F(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,y(.6,1.8),y(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*K,p=y(1,3);F(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,y(2,4),.8,"#7a7468",3,12,!1)}ot(5)}const[f,h]=C(t,n,u),c=a>=1&&s<.34?2:0;i.globalAlpha=s<.6?1:(1-s)/.4,i.translate(P(f),P(h-14+c)),i.rotate(r*.9*(1-a)),mn(i,Mg,0,0,3,vg)}})}function Sg(e,t,n,r,o){for(let i=0;i<9;i++){const s=r*6+i*.7+o,l=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(P(t+Math.cos(s)*l)-1,P(n-4+Math.sin(s)*l*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const s=-r*4+i*Math.PI,l=P(t+Math.cos(s)*18),a=P(n-2+Math.sin(s)*5);e.fillStyle="#ff9a3a",e.fillRect(l-3,a-1,7,3),e.fillRect(l-1,a-3,3,7),e.fillStyle="#fff2c8",e.fillRect(l,a,1,1)}}const wg=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],_g={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function Ag(e){st.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;A({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){Se(o);const i=.32,s=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let l=0;l<14;l++){const a=l/14*K+t,u=s*(.65+.35*nt(t+l)),[f,h]=C(o.x+Math.cos(a-.13)*i,o.y+Math.sin(a-.13)*i),[c,d]=C(o.x+Math.cos(a+.13)*i,o.y+Math.sin(a+.13)*i),[m,p]=C(o.x+Math.cos(a)*u,o.y+Math.sin(a)*u);n.fillStyle=l%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,h),n.lineTo(m,p),n.lineTo(c,d),n.closePath(),n.fill()}it(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),s=i?dn(i):.8,l=r<.06?2:r<.14?4:3,[a,u]=C(o.x,o.y,s+.32+r*.15),f=r<.7?1:(1-r)/.3;gt(!0);const h=Lt();h.globalAlpha=f*(.35+.2*Math.sin(r*40)),h.fillStyle="#ff2a1a",h.fillRect(P(a-22),P(u-18),44,36),h.globalAlpha=1,gt(!1),n.globalAlpha=f,mn(n,wg,a,u,l,_g)}});for(let n=0;n<26;n++)F(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.1,.6),y(-.4,.4),y(-.4,.4),y(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);ot(3)}const Tg=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],Cg={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function Rg(e){st.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;A({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),s=i?dn(i):.8,[l,a]=C(o.x,o.y,s+.45),u=C(o.x,o.y,0)[1],f=t*1.9*$t(Math.min(1,r/.3)),h=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const c=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,g=l+m*c-p*d,x=a+m*d+p*c,v=r<.7?3:2;n.globalAlpha=h;for(let M=0;M<=14;M++){const S=M/14,w=x+(u-x)*S,_=g+Math.sin(b.T*22+M)*1.5+t*S*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(P(_)-1,P(w),v,P((u-x)/14)+1)}Math.random()<.6&&F(o.x+y(-.2,.2),o.y+y(-.2,.2),.02,y(-1,1),y(-1,1),y(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=h,n.translate(P(l),P(a)),n.rotate(f),mn(n,Tg,0,0,3,Cg)}}),A({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*$t(Math.min(1,r/.45)),s=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=s,it(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=s*.6,it(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function Pg(e,t,n){const[r,o]=C(t.x,t.y,dn(t)*.55),i=t.scale||1;for(let s=0;s<4;s++){const l=n*3.2+s*K/4+t.id,a=P(r+Math.cos(l)*22*i),u=P(o+Math.sin(l)*8*i+Math.sin(n*5+s)*2);e.globalAlpha=Math.sin(l)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(a-2,u-1,5,4),e.fillRect(a-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(a-1,u-1,3,3),e.fillRect(a,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(a-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&F(t.x+y(-.3,.3),t.y+y(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function Ig(e){st.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,s){const l=mt(s.uid);l&&!l.dead&&(s.ex=l.x,s.ey=l.y);const[a,u]=C(t,n,.5),[f,h]=C(s.ex,s.ey,.6),c=f-a,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,g=c/m,x=i>.75?(1-i)/.25:1;for(let v=0;v<3;v++){const M=(v-1)*.9+.3*Math.sin(r+v),S=Math.min(1,i*1.4-v*.1);if(!(S<=0))for(let w=0;w<7;w++){const _=S-w*.045;if(_<0)break;const T=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+v*2+b.T*10)*3,R=a+c*_+p*T,z=u+d*_+g*T-Math.sin(_*Math.PI)*14,I=w===0?4:w<3?3:2;o.globalAlpha=(1-w/7)*x,w===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(P(R-5),P(z-5),10,10),o.globalAlpha=x),o.fillStyle=w===0?"#ff8a96":w<3?"#e0203a":"#8a0a1e",o.fillRect(P(R-I/2),P(z-I/2),I,I)}}if(!s.pop&&i>.72){s.pop=!0;for(let v=0;v<4;v++)F(s.ex+y(-.2,.2),s.ey+y(-.2,.2),.6,0,0,y(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const Bo=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function zg(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;st.sfx("item_hex",t,n,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(s,l){const[a,u]=C(r,o,.7),[f,h]=C(t,n,.7),c=f-a,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,g=c/m,x=Math.min(1,l*2.6);s.globalAlpha=l<.6?1:(1-l)/.4;for(let v=0;v<=30;v++){const M=v/30;if(M>x)break;const S=Math.sin(M*K*2.5-l*9)*8*(1-M*.6);s.fillStyle=Bo[(v+(l*24|0))%3],s.fillRect(P(a+c*M+p*S)-1,P(u+d*M+g*S)-1,3,3)}}}),A({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(s,l,a){const[u,f]=C(t,n,.6),h=Math.min(1,l/.42),c=l<.55?1:(1-l)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);gt(!0);const m=Lt();for(let x=0;x<20;x++){const v=h-x*.025;if(v<0)break;const M=d(v),S=P(5-x*.2);m.globalAlpha=(1-x/20)*c,m.fillStyle=Bo[x<3?0:x<9?1:2],m.fillRect(P(u+Math.cos(M)*42-S/2),P(f+Math.sin(M)*24-S/2),S,S)}m.globalAlpha=1,gt(!1),s.globalAlpha=c;const p=d(h);for(let x=0;x<11;x++){const v=p-i*x*.07,M=1+x*.55,S=42-M/2,w=u+Math.cos(v)*S,_=f+Math.sin(v)*S*.58;s.fillStyle="#2a1040",s.fillRect(P(w-M/2),P(_-M/2),P(M)+1,P(M)+1),s.fillStyle="#f0e0ff",s.fillRect(P(u+Math.cos(v)*43)-1,P(f+Math.sin(v)*25)-1,2,2)}const g=p-i*.75;for(let x=38;x>10;x-=2)s.fillStyle=x%4?"#4a2a18":"#6a4024",s.fillRect(P(u+Math.cos(g)*x)-1,P(f+Math.sin(g)*x*.58)-1,3,3);if(!a.poof&&l>=.36){a.poof=!0;for(let x=0;x<9;x++)A({type:"puff",x:t+y(-.5,.5),y:n+y(-.5,.5),r:y(14,24),dur:y(.6,1),col:[176,128,236]});A({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const v=Math.random()*K,M=y(1,3);F(t,n,.6,Math.cos(v)*M,Math.sin(v)*M,y(.5,2.5),.6,Bo[x%4],3,1,!0)}for(let x=0;x<6;x++)F(t+y(-.3,.3),n+y(-.3,.3),.3,0,0,y(.8,1.6),.7,"#a8e070",3,-.5,!1);ot(3)}}})}function Og(e,t){const[n,r]=C(e.x,e.y,dn(e)+.22+Math.sin(t*3+e.id)*.03);gt(!0);const o=Lt();for(let i=0;i<12;i++){const s=t*5+i*.55+e.id,l=3+i*1.3,a=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=Bo[i%3],o.fillRect(P(n+Math.cos(s)*l)-1,P(r+Math.sin(s)*l*.45-i*.6)-1,a,a)}for(let i=0;i<2;i++){const s=-t*2.5+i*Math.PI,l=P(n+Math.cos(s)*16),a=P(r+4+Math.sin(s)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=Bo[0],o.fillRect(l-2,a,5,1),o.fillRect(l,a-2,1,5)}o.globalAlpha=1,gt(!1),Math.random()<.1&&F(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,y(.6,1.2),.6,Bo[2],2,-.3,!0)}function Fg(e){for(let t=0;t<5;t++)A({type:"puff",x:e.x+y(-.35,.35),y:e.y+y(-.35,.35),r:y(12,20),dur:y(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*K,r=y(1,2.5);F(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,2),.5,Bo[t%3],2,1,!0)}}const _r=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],Eg=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],kg={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function Lg(e){st.sfx("item_refresh",e.x,e.y,1),A({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Se(r);const o=.45+.85*$t(n),[i,s]=C(r.x,r.y),l=o*B.HW*Math.SQRT2*1.08,a=o*B.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,it(r.x,r.y,o,_r[1],null,3),t.fillStyle=_r[2];for(let u=0;u<16;u++){const f=u/16*K-n*5;t.fillRect(P(i+Math.cos(f)*l)-2,P(s+Math.sin(f)*a)-2,5,4)}it(r.x,r.y,o*.6,_r[0],null,1.5,[4,4])}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),[i,s]=C(r.x,r.y,(o?dn(o):.8)*.55),l=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let a=0;a<24;a++){const u=a/24*K-n*6,f=a%2===0,h=f?4:2;t.fillStyle=f?_r[0]:_r[2],t.fillRect(P(i+Math.cos(u)*l)-h/2,P(s+Math.sin(u)*l)-h/2,h,h)}for(let a=0;a<2;a++){const u=-Math.PI/2-n*(a?6:30),f=(a?13:22)*Math.min(1,n*6);t.fillStyle=a?_r[1]:_r[0];for(let h=3;h<f;h+=2)t.fillRect(P(i+Math.cos(u)*h)-1,P(s+Math.sin(u)*h)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,A({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:_r[1],w:4});for(let a=0;a<20;a++)F(r.x+y(-.4,.4),r.y+y(-.4,.4),y(.2,.9),y(-.6,.6),y(-.6,.6),y(1.5,3),.6,_r[a%3],3,0,!0)}}}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),[i,s]=C(r.x,r.y,(o?dn(o):.8)*.55),l=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(P(i),P(s)),t.rotate(Math.PI*l*l*(3-2*l)),mn(t,Eg,0,0,3,kg)}}),ot(2)}function _1(e,t,n,r,o){const i=P(t),s=P(n);e.fillStyle=r,e.fillRect(i-3,s,2,3),e.fillRect(i+1,s,2,3),e.fillRect(i-2,s+2,4,2),e.fillStyle=o,e.fillRect(i-1,s+2,2,1)}function Ug(e){st.sfx("item_immune",e.x,e.y,1);const t=Math.random()*K;A({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),[s,l]=C(o.x,o.y,(i?dn(i):.8)*.45),a=$t(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const h=f/18*K+t+(1-a)*1.5,c=(80*(1-a)+32)*u;n.globalAlpha=Math.min(1,r*5),_1(n,s+Math.cos(h)*c,l+Math.sin(h)*c*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(s,l,32*u+6*(1-f),38*u+6*(1-f),0,0,K),n.stroke()}}}),A({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)F(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);ot(2)}function Dg(e,t){const n=e.scale||1,[r,o]=C(e.x,e.y,dn(e)*.45),i=30*n,s=36*n;gt(!0);const l=Lt();l.globalAlpha=.5+.1*Math.sin(t*4),l.strokeStyle="#ffcc40",l.lineWidth=2,l.fillStyle="rgba(255,200,60,0.07)",l.beginPath(),l.ellipse(r,o,i,s,0,0,K),l.fill(),l.stroke();const a=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,h=i*Math.sqrt(Math.max(0,1-f/s*(f/s)))-4;for(let c=-h+(u&1?5:0);c<=h;c+=10){const d=Math.max(0,1-Math.abs(c-a+f*.5)/16);l.globalAlpha=.16+.6*d,_1(l,r+c,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}l.globalAlpha=1,gt(!1)}function Xg(e){st.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*K+y(-.25,.25),t[r*4+1]=y(.8,1.6),t[r*4+2]=y(-14,14),t[r*4+3]=y(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*K+y(-.4,.4);A({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=Se(i),[l,a]=C(i.x,i.y,(s?dn(s):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(l,a,16*f,0,K),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(l,a,13*f,0,K),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(l-2*f,a,8*f,0,K),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(l+2*f,a-2*f,7*f,0,K),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(l,a),r.lineTo(l+Math.cos(m+.3)*6,a+Math.sin(m+.3)*6),r.lineTo(l+Math.cos(m)*14,a+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}gt(!0);const h=Lt(),c=l-14+o/.45*28;h.globalAlpha=.8,h.fillStyle="#ffffff";for(let d=-3;d<=3;d++)h.fillRect(P(c+d*.6),P(a+d*3)-1,2,3);gt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const h=Math.random()*K,c=y(1.5,3.5);F(i.x,i.y,.7,Math.cos(h)*c,Math.sin(h)*c,y(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){gt(!0);const f=Lt();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const h=10+u*60;f.fillRect(P(l-h),P(a)-1,P(h*2),3),f.fillRect(P(l)-1,P(a-h*.6),3,P(h*1.2)),gt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const h=t[f*4],c=u*t[f*4+1]*40,d=t[f*4+3],m=l+Math.cos(h)*(c+8),p=a+Math.sin(h)*(c+8)*.7+u*u*50,g=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(g),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const ua=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function Gg(e){st.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,s=Math.random()*9,l=i+.45,a=Math.hypot(r-t,o-n)||1,u=-(o-n)/a,f=(r-t)/a;A({type:"ring",x:t,y:n,r:.8,dur:.35,col:ua[1],w:4});for(let h=0;h<8;h++)F(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(.3,1),.5,"#c8b48a",3,3,!1);A({type:"custom",layer:"top",add:!0,dur:l,x:t,y:n,draw(h,c){const d=c*l,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[g,x]=C(t,n,.3),[v,M]=C(r,o,.3),S=(u-f)*B.HW,w=(u+f)*B.HH;for(let _=0;_<5;_++){const T=(_-2)*.22,R=(_-2)*6;for(let z=p;z<=m;z+=.025){const I=T+Math.sin(z*18+_*1.3+s)*.08,O=(z-p)/(m-p);h.globalAlpha=O*(_===2?1:.7),h.fillStyle=ua[O>.85?0:_===2?1:2],h.fillRect(P(g+(v-g)*z+S*I)-1,P(x+(M-x)*z+w*I+R)-1,3,2)}}for(let _=0;_<3;_++){const T=.25+_*.3;if(T<p||T>m)continue;const R=g+(v-g)*T+S*(_-1)*.35,z=x+(M-x)*T+w*(_-1)*.35-10;h.globalAlpha=1-(T-p)/Math.max(.01,m-p)*.5;for(let I=0;I<9;I++){const O=b.T*9+I*.75+_,U=2+I*1.2;h.fillStyle=ua[I<3?0:1],h.fillRect(P(R+Math.cos(O)*U)-1,P(z+Math.sin(O)*U*.6)-1,2,2)}}}});for(let h=0;h<14;h++){const c=Math.random();F(t+(r-t)*c,n+(o-n)*c,y(.1,.6),(r-t)/a*y(1,3),(o-n)/a*y(1,3),y(.2,1),y(.4,.8),ua[h%3],2,0,!0)}}const au=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function Bg(e,t){const[r,o]=C(e.x,e.y),i=2.8*B.HW*Math.SQRT2,s=2.8*B.HH*Math.SQRT2;gt(!0);const l=Lt();l.globalAlpha=.07,l.fillStyle="#ff8a2a",l.beginPath(),l.ellipse(r,o,i*.97,s*.97,0,0,K),l.fill(),l.globalAlpha=.22+.06*Math.sin(t*3+e.id),l.strokeStyle="#ff9a3a",l.lineWidth=2,l.setLineDash([10,7]),l.lineDashOffset=-t*24,l.beginPath(),l.ellipse(r,o,i,s,0,0,K),l.stroke(),l.setLineDash([]),l.lineDashOffset=0;for(let a=0;a<14;a++){const u=a/14*K+t*.4,f=.5+.5*Math.sin(t*7+a*1.7+e.id),h=P(3+f*4);l.globalAlpha=.25+.45*f,l.fillStyle=f>.75?au[0]:au[1],l.fillRect(P(r+Math.cos(u)*i)-2,P(o+Math.sin(u)*s)-h,4,h)}if(l.globalAlpha=1,gt(!1),Math.random()<.35){const a=Math.random()*K,u=Math.sqrt(Math.random())*2.8;F(e.x+Math.cos(a)*u,e.y+Math.sin(a)*u,.05,0,0,y(.8,1.6),y(.6,1),au[Math.random()*4|0],2,-.3,!0,.97)}}const Hi={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},gc={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},Os=2,lu={};function A1(e,t){const n=e+(t?"o":"c");if(lu[n])return lu[n];let r=Hi[e]||Hi.obs;const o=gc[e]||gc.obs,i=e==="sen"?"S":"W";t||(r=r.map(a=>a.includes("P")?a.replace(/[eEP]/g,"k"):a.replace(/[eEP]/g,i)));const s=document.createElement("canvas");s.width=r[0].length*Os,s.height=r.length*Os;const l=s.getContext("2d");return mn(l,r,s.width/2,s.height/2,Os,o),lu[n]=s}function x0(e){const t=Hi[e]||Hi.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*Os}function Pl(e,t){return(t+e.id*1.37)%4.2>.14}function Ng(e,t,n){const r=b.T,o=Lt(),i=window.SIM;if(o.globalAlpha=.35,it(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const s=Math.max(0,e.until-n),l=e.kind==="obs"?360:300,[a,u]=C(e.x,e.y);o.globalAlpha=s<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(a,u,.34*B.HW*Math.SQRT2,.34*B.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+K*Math.min(1,s/l)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&it(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),it(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function $g(e,t){const n=b.T,[r,o]=C(e.x,e.y),i=o-x0(e.kind);if(Pl(e,n)){gt(!0);const s=Lt(),l=.6+.4*Math.sin(n*3+e.id);s.globalAlpha=.25*l,s.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",s.fillRect(P(r)-7,P(i)-5,14,10),s.globalAlpha=.6*l,s.fillRect(P(r)-3,P(i)-2,6,4),s.globalAlpha=1,gt(!1)}if(!t){const s=Lt(),l=P(o-(Hi[e.kind]||Hi.obs).length*Os-8+Math.sin(n*5)*2),a=P(r);s.fillStyle="#120c1a",s.fillRect(a-5,l-2,11,4),s.fillRect(a-3,l+2,7,2),s.fillRect(a-1,l+4,3,2),s.fillStyle="#ff4a3a",s.fillRect(a-4,l-1,9,2),s.fillRect(a-2,l+1,5,2),s.fillRect(a,l+3,1,2)}}function Hg(e,t,n,r){const o=A1(t,!0),[i,s]=C(n,r);e.globalAlpha=.6+.15*Math.sin(b.T*6),e.drawImage(o,P(i-o.width/2),P(s-o.height)),e.globalAlpha=1}function Wg(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;st.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)F(r,o,.05,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);A({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,s){const[l,a]=C(r,o),u=a-x0(t?"obs":"sen"),f=6+26*$t(s),h=10*Math.sin(Math.min(1,s*2.2)*Math.PI*.5)*(1-s*.5);i.globalAlpha=1-s,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let c=-8;c<=8;c++){const d=c/8,m=h*(1-d*d);i.fillRect(P(l+d*f)-1,P(u-m)-1,3,2),i.fillRect(P(l+d*f)-1,P(u+m)-1,3,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,s){i.globalAlpha=.5*(1-s),it(r,o,(t?n.WARD_VISION:n.SENTRY_R)*$t(s),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)F(r+y(-.15,.15),o+y(-.15,.15),.5,0,0,y(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function Vg(e){const t=e.kind!=="sen",n=e.x,r=e.y;st.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*K,s=y(1,3);F(n,r,y(.2,.5),Math.cos(i)*s,Math.sin(i)*s,y(1.5,3.5),y(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)A({type:"puff",x:n+y(-.3,.3),y:r+y(-.3,.3),r:y(10,16),dur:y(.5,.8),col:[150,140,130]});A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[s,l]=C(n,r,.3),a=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*K+i*2;o.fillRect(P(s+Math.cos(f)*a)-1,P(l+Math.sin(f)*a*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(P(s)-3,P(l)-3,6,6))}})}const Hs=["#fff2c8","#ffd080","#ffa040","#c86a10"];function qg(e){st.sfx("mon_howl",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),[s,l]=C(o.x,o.y,(i?dn(i):.9)*.9);for(let a=0;a<3;a++){const u=r*1.5-a*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=a?Hs[1]:Hs[0];for(let h=-Math.PI*.86;h<=-Math.PI*.14;h+=.1)n.fillRect(P(s+Math.cos(h)*f)-1,P(l+Math.sin(h)*f*.7)-1,3,2)}}}),A({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=b.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||A({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const s=mt(i.uid);if(!s||s.dead||ze(s))return;const l=b.T,[a,u]=C(s.x,s.y,dn(s)*.72),f=o>.85?(1-o)/.15:1,h=.7+.3*Math.sin(l*14+s.id),c=s.scale||1;r.globalAlpha=.35*f*h,r.fillStyle="#ff2010",r.fillRect(P(a-9*c),P(u-4),P(18*c),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(P(a-5*c)-1,P(u)-1,3,2),r.fillRect(P(a+5*c)-1,P(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(P(a-5*c),P(u)-1,1,1),r.fillRect(P(a+5*c),P(u)-1,1,1),Math.random()<.12&&F(s.x+y(-.3,.3),s.y+y(-.3,.3),.3,0,0,y(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function Yg(e){const t=b.T,n=Lt(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,it(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let l=0;l<10;l++){const a=nt(i*7+l),u=nt(i*3+l*5),f=a*K+t*.25*(l%2?1:-1),h=e.r*(.2+.6*u),[c,d]=C(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.15+.1*Math.sin(t+l)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+l))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=l%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(c,d,m,m*.6,0,0,K),n.fill()}gt(!0);const s=Lt();for(let l=0;l<9;l++){const a=(t*.45+nt(i+l*11))%1,u=nt(i*5+l)*K,f=e.r*.8*nt(i+l*3),[h,c]=C(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,a*1.3);s.globalAlpha=Math.sin(a*Math.PI)*o,s.fillStyle=l%2?"#e0b8ff":"#d8ffa0",s.fillRect(P(h)-1,P(c)-1,2,2)}s.globalAlpha=1,gt(!1),n.globalAlpha=1}function Kg(e){st.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;A({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,it(e.x,e.y,t*$t(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,it(e.x,e.y,t*.7*$t(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*K,o=y(.5,1.6)*t;F(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function jg(e){st.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*K;A({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,s){i.globalAlpha=(1-s)*.8,it(t,n,r*$t(Math.min(1,s*4)),"#6a4a24",null,5*(1-s)+1),i.globalAlpha=(1-s)*.35,it(t,n,r,null,"#3a2814"),i.globalAlpha=1-s,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let l=0;l<10;l++){const a=o+l/10*K;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,h=a+(nt(o+l*9+u)-.5)*.5,[c,d]=C(t+Math.cos(h)*f,n+Math.sin(h)*f);u?i.lineTo(c,d):i.moveTo(c,d)}i.stroke()}}}),A({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,s){const l=s<.15?$t(s/.15):s>.7?(1-s)/.3:1;i.lineCap="round";for(let a=0;a<16;a++){const u=a<10,f=o+(u?a/10:(a-10)/6+.08)*K,h=u?r*(.85+.15*nt(o+a)):r*.45,[c,d]=C(t+Math.cos(f)*h,n+Math.sin(f)*h),m=(u?34:24)*l*(.8+.4*nt(o+a*3)),p=(nt(o+a*7)-.5)*22,g=c+p,x=d-m,v=c-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(c,d),i.quadraticCurveTo(v,M,g,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(P(g)-2,P(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(P(g),P(x)-2,2,1)}}});for(let i=0;i<30;i++){const s=Math.random()*K,l=y(.5,2.5);F(t+Math.cos(s)*r*.8,n+Math.sin(s)*r*.8,.1,Math.cos(s)*l,Math.sin(s)*l,y(1,3),y(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}ot(6)}const Qg=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],Zg={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function Jg(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(st.sfx("camp_"+t,e.x,e.y,1),t==="pack"){A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),[s,l]=C(o.x,o.y,(i?dn(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,mn(n,Qg,s,l,r<.1?2:3,Zg);const[a,u]=C(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=Hs[1];for(let f=-1;f<=1;f++)for(let h=0;h<8;h++)n.fillRect(P(a+f*8-10+h*3),P(u-12+h*3),2,2)}}});for(let n=0;n<18;n++)F(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(1,2.2),.8,Hs[n%4],3,0,!0)}else if(t==="spore"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Se(o),[s,l]=C(o.x,o.y,(i?dn(i):.8)*.5),a=$t(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*K+a*5,h=60*(1-a)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(P(s+Math.cos(f)*h)-2,P(l+Math.sin(f)*h*.6)-2,4,4)}}}),A({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)A({type:"puff",x:e.x+y(-.6,.6),y:e.y+y(-.6,.6),r:y(8,14),dur:y(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=Se(i),[l,a]=C(i.x,i.y,(s?dn(s):.8)*.4),u=$t(Math.min(1,o/.45)),f=s&&s.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let h=0;h<10;h++){const c=h/10*K,d=(70*(1-u)+24)*f,m=P(l+Math.cos(c)*d),p=P(a+Math.sin(c)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,ot(2);for(let h=0;h<10;h++)F(i.x+y(-.4,.4),i.y+y(-.4,.4),.4,y(-1,1),y(-1,1),y(1,2),.6,h%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function tx(e,t,n){if(t.camp_bark){const[r,o]=C(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,s=i*B.HW*Math.SQRT2,l=i*B.HH*Math.SQRT2,a=Lt();for(let u=0;u<12;u++){const f=u/12*K;a.fillStyle=u%2?"#5a3a1e":"#8a5a30",a.fillRect(P(r+Math.cos(f)*s)-2,P(o+Math.sin(f)*l)-1,4,3)}}if(t.camp_pack){gt(!0);const r=Lt(),[o,i]=C(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=Hs[2];for(let s=0;s<3;s++){const l=n*.8+s*K/3,a=o+Math.cos(l)*26,u=i+Math.sin(l)*13;for(let f=-1;f<=1;f++)for(let h=0;h<4;h++)r.fillRect(P(a+f*4-4+h*2),P(u-3+h*2),2,1)}r.globalAlpha=1,gt(!1)}if(t.camp_spore){gt(!0);const r=Lt(),[o,i]=C(e.x,e.y,dn(e)*.5);for(let s=0;s<4;s++){const l=n*(.9+s*.2)+s*1.7+e.id,a=o+Math.cos(l)*20+Math.sin(n*1.7+s)*5,u=i+Math.sin(l*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+s),r.fillStyle=s%2?"#e0b8ff":"#c8f090",r.fillRect(P(a)-1,P(u)-1,2,2)}r.globalAlpha=1,gt(!1)}}function Wi(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function rn(e){return dn(e)*.68}const za=(e,t,n,r)=>!!t[n],ex=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],nx={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},uu=["#ff5a6a","#5ab4ff"];function rx(e){st.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*K,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*K+y(-.25,.25),r[o*3+1]=y(24,48),r[o*3+2]=o/t*.2;A({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const l=Se(s),[a,u]=C(s.x,s.y,(l?rn(l):.6)+.22),f=a+20,h=i<.28?-.8+1.7*$t(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(P(f),P(u)),o.rotate(h),mn(o,ex,0,0,3,nx)}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const l=Se(s),a=l?rn(l):.6,[u,f]=C(s.x,s.y,a+.45),h=u+30,[c,d]=C(s.x,s.y,a*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(P(h-p),P(f)-1,P(p*2),2),o.fillRect(P(h)-1,P(f-p),2,P(p*2))}}for(let m=0;m<t;m++){const p=uu[m&1];for(let g=2;g>=0;g--){const x=(i-.24-r[m*3+2])/.58-g*.035;if(x<=0||x>1)continue;const v=r[m*3],M=Math.sin(x*Math.PI),S=h+(c-h)*x+Math.cos(v)*34*M,w=f+(d-f)*x+Math.sin(v)*12*M-r[m*3+1]*M;if(g){o.globalAlpha=.5/g,o.fillStyle=p,o.fillRect(P(S)-1,P(w)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(P(S)-4,P(w)-4,8,8),o.globalAlpha=1,o.fillRect(P(S)-2,P(w)-2,4,4),o.fillStyle="#ffffff",o.fillRect(P(S)-1,P(w)-2,2,1)}}!s.land&&i>.84&&(s.land=!0,A({type:"custom",layer:"ground",add:!0,dur:.55,x:s.x,y:s.y,uid:s.uid,draw(m,p,g){Se(g),m.globalAlpha=1-p,m.lineDashOffset=p*30,it(g.x,g.y,.35+.5*$t(p),uu[0],null,3,[5,5]),m.lineDashOffset=-p*30,it(g.x,g.y,.3+.42*$t(p),uu[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),se(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const io=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function ox(e){st.sfx("item_phase",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),i=o&&o.scale||1,s=C(r.x,r.y,0)[1],l=C(r.x,r.y,(o?rn(o):.8)*1.05)[1],a=C(r.x,r.y)[0],u=8,f=1-n,h=P(26*i);for(let c=0;c<u;c++){const d=P(l+(s-l)*(c+.5)/u),m=Math.sin(c*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=io[1],t.fillRect(P(a-h/2+m-3),d-1,h,3),t.fillStyle=io[2],t.fillRect(P(a-h/2-m+3),d-1,h,3)}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Se(r);const o=.28*$t(n),i=.45+.45*n;t.globalAlpha=1-n,it(r.x-o,r.y+o,i,io[1],null,2),it(r.x+o,r.y-o,i,io[2],null,2)}}),se(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function ix(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,s=Math.hypot(o,i);if(s<.003||s>1)return;const l=o/s,a=i/s,[u,f]=C(e.x,e.y),[h,c]=C(e.x-l,e.y-a),d=Math.hypot(h-u,c-f)||1,m=(h-u)/d,p=(c-f)/d,g=rn(e)*B.ZK,x=e.scale||1;gt(!0);const v=Lt();for(let M=0;M<5;M++){const S=g*(.15+M*.17),w=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,T=f-S+p*8;for(let R=0;R<w;R+=2){const z=1-R/w;v.globalAlpha=.55*z,v.fillStyle=io[1],v.fillRect(P(_+m*R),P(T+p*R)-2,2,1),v.fillStyle=io[2],v.fillRect(P(_+m*R),P(T+p*R)+1,2,1)}}if(v.globalAlpha=1,gt(!1),Math.random()<.35){const M=Math.random()<.5;F(e.x-l*.2+(M?.06:-.06),e.y-a*.2-(M?.06:-.06),.02,0,0,0,.45,M?io[1]:io[2],3,0,!0)}}const Qr=["#ffffff","#a8d0ff","#4a8aff","#26349a"],fa=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function sf(e,t,n,r,o){const i=fa[(r%fa.length+fa.length)%fa.length],s=P(t)-o*1.5,l=P(n)-o*2;for(let a=0;a<4;a++)for(let u=0;u<3;u++)i[a]>>2-u&1&&e.fillRect(s+u*o,l+a*o,o,o)}const sx=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],ax={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function lx(e){st.sfx("item_arcane",e.x,e.y,1);const t=e.radius||Wi("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(s,l,a){Se(a);const u=Math.min(1,l/.12),f=.95*u,[h,c]=C(a.x,a.y),d=f*.8*B.HW*Math.SQRT2,m=f*.8*B.HH*Math.SQRT2;s.globalAlpha=l<.7?1:(1-l)/.3,it(a.x,a.y,f,Qr[1],null,2),it(a.x,a.y,f*.62,Qr[2],null,2),s.fillStyle=Qr[0];for(let p=0;p<10;p++){const g=p/10*K+l*2.4;sf(s,h+Math.cos(g)*d,c+Math.sin(g)*m,p,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(s,l){const a=t*$t(l),[u,f]=C(n,r),h=a*B.HW*Math.SQRT2,c=a*B.HH*Math.SQRT2,d=40;s.globalAlpha=(1-l)*.35,it(n,r,a,Qr[2],null,2),s.globalAlpha=1-l*l;for(let m=0;m<d;m++){const p=m/d*K;s.fillStyle=m%4?Qr[1]:Qr[0],sf(s,u+Math.cos(p)*h,f+Math.sin(p)*c,m*7+(l*12|0),2)}}});const i=b.game;if(i)for(const s of i.heroes||[]){if(s.dead||s.team!==e.team)continue;const l=Math.hypot(s.x-n,s.y-r);l>t||A({type:"custom",layer:"top",dur:.7,delay:$t(l/t)*o*.85,x:s.x,y:s.y,uid:s.id,draw(a,u,f){const h=Se(f),c=h?rn(h):.8,d=Math.min(1,u/.4),[m,p]=C(f.x,f.y,c+.1+(1-d*d)*.9);if(u<.4){a.globalAlpha=Math.min(1,u*6),mn(a,sx,m,p,2,ax);return}const g=(u-.4)/.6;a.globalAlpha=1-g,a.fillStyle=Qr[1];for(let x=0;x<6;x++){const v=-Math.PI*(.1+.8*x/5),M=4+g*14;a.fillRect(P(m+Math.cos(v)*M)-1,P(p+Math.sin(v)*M*.8+g*g*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)F(f.x+y(-.2,.2),f.y+y(-.2,.2),c*.8,0,0,y(-.6,-.2),.5,Qr[x%3],2,0,!0)}}})}se(n,r,2.6,5933823,.85,1),ot(2)}const ux=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],fx={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},cx=[0,1,2,3].map(e=>ux.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function hx(e){st.sfx("item_clarity",e.x,e.y,1),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),[i,s]=C(r.x,r.y,(o?rn(o):.6)*.85+Math.min(1,n*5)*.08),l=i+26*(o&&o.scale||1),a=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(P(l),P(s)),t.rotate(-a),mn(t,cx[u],0,0,3,fx),!r.pop&&n>.12&&(r.pop=!0,F(r.x,r.y,(o?rn(o):.8)+.5,y(-.6,.6),y(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),A({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),i=o?rn(o):.8,s=o&&o.scale||1;for(let l=0;l<8;l++){const a=n*1.6-l*.075;if(a<0||a>1)continue;const u=l*2.4+a*4,[f,h]=C(r.x,r.y,i*(.1+a*1.1)),c=P(f+Math.cos(u)*20*s),d=P(h+Math.sin(u)*7);t.globalAlpha=Math.sin(a*Math.PI)*.9,t.fillStyle="#bfe4ff",a<.9?(t.fillRect(c-1,d-2,3,1),t.fillRect(c-1,d+2,3,1),t.fillRect(c-2,d-1,1,3),t.fillRect(c+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(c-1,d-1,1,1)):(t.fillRect(c-3,d,2,1),t.fillRect(c+2,d,2,1),t.fillRect(c,d-3,1,2),t.fillRect(c,d+2,1,2))}}}),se(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const dx=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],mx={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},ca=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function px(e){st.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;A({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(s,l,a){const u=l*a.dur;if(u<o){const p=u/o,[g,x]=C(t,n,.9+p*(2.1-p)*1.2);s.translate(P(g),P(x)),s.rotate(p*7),mn(s,dx,0,0,3,mx);return}const f=(u-o)/.25,[h,c]=C(t,n,2.2);if(!a.burst){a.burst=!0,ot(2);for(let p=0;p<70;p++){const g=Math.random()*K,x=y(.5,3.4);F(t,n,2.2,Math.cos(g)*x,Math.sin(g)*x,y(-.4,1),y(1.1,1.8),ca[p%4],p%5?2:3,1.4,!0,.95)}}gt(!0);const d=Lt();d.globalAlpha=1-f,d.fillStyle=ca[1];const m=6+f*30;d.fillRect(P(h-m),P(c)-1,P(m*2),2),d.fillRect(P(h)-1,P(c-m),2,P(m*2)),d.fillRect(P(h)-4,P(c)-4,8,8),gt(!1)}}),A({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(s,l){const a=r*$t(l),[u,f]=C(t,n),h=a*B.HW*Math.SQRT2,c=a*B.HH*Math.SQRT2,d=72,m=Math.floor(b.T*20);for(let p=0;p<d;p++){const g=nt(i+p*3+m);if(g<.3)continue;const x=p/d*K+nt(i+p)*.08,v=1-nt(i+p*7)*.06;s.globalAlpha=(1-l)*g,s.fillStyle=ca[p%4];const M=g>.85?3:2;s.fillRect(P(u+Math.cos(x)*h*v)-1,P(f+Math.sin(x)*c*v)-1,M,M)}}}),A({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(s,l){const a=l*1.8;for(let u=0;u<26;u++){const f=nt(i+u*11)*K,h=Math.sqrt(nt(i+u*5))*r,c=$t(h/r)*.9+nt(i+u)*.3,d=(a-c)/.5;if(d<0||d>1)continue;const[m,p]=C(t+Math.cos(f)*h,n+Math.sin(f)*h,.3+nt(i+u*13)*.8),g=P(2+5*Math.sin(d*Math.PI));s.globalAlpha=Math.sin(d*Math.PI),s.fillStyle=ca[u%4],s.fillRect(P(m)-g,P(p),g*2+1,1),s.fillRect(P(m),P(p)-g,1,g*2+1)}}}),se(t,n,3,16773312,.9,.6,{delay:o})}const yx=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],gx={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function xx(e){st.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;A({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,s,l){const a=mt(l.uid),u=a&&!a.dead?rn(a):.8,[f,h]=C(t,n,u*.55),c=b.T;if(s<.3){gt(!0);const d=Lt(),m=s/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const g=36-p*8;d.fillRect(P(f-r*(10+p*8+m*10)),P(h-g/2),p?2:3,g)}gt(!1)}i.globalAlpha=s<.65?1:(1-s)/.35;for(let d=0;d<3;d++){const m=$t(Math.min(1,s*1.3)),p=r*(d===1?-.4:1),g=f+p*m*(26+d*10)+Math.sin(s*14+d*2+o)*4,x=h-4-m*(24+d*9)+Math.sin(s*21+d)*3;mn(i,yx[Math.floor(c*22)+d&1],g,x,d===1?2:3,gx)}}})}const sr=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function Mx(e,t,n,r,o){for(let i=0;i<6;i++){const s=o+i/6*K,l=Math.cos(s),a=Math.sin(s)*.5;for(let u=0;u<=r;u+=2)e.fillRect(P(t+l*u)-1,P(n+a*u)-1,2,2);for(const u of[.45,.72]){const f=t+l*r*u,h=n+a*r*u,c=r*(.32-u*.18);for(const d of[-1,1]){const m=s+d*.9,p=Math.cos(m),g=Math.sin(m)*.5;for(let x=2;x<=c;x+=2)e.fillRect(P(f+p*x)-1,P(h+g*x)-1,2,2)}}}}function vx(e){st.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Wi("frost_guard","radius",4.5),o=Math.random()*99,i=.55,s=1.25,l=72,a=new Float32Array(l),u=new Float32Array(l),f=new Float32Array(l),h=[];for(let c=0;c<l;c++)a[c]=c/l*K+(nt(o+c)-.5)*.06,u[c]=14+nt(o+c*7)*18,f[c]=(nt(o+c*3)-.5)*.12,h.push(c);h.sort((c,d)=>Math.sin(a[c])-Math.sin(a[d])),A({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(c,d){const[m,p]=C(t,n),g=$t(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;c.globalAlpha=.22*x,it(t,n,r*g,null,"rgba(170,225,255,1)"),c.globalAlpha=.7*x,it(t,n,r*g,sr[2],null,2,[3,4]),c.globalAlpha=.85*x,c.fillStyle=sr[1];for(let v=0;v<12;v++){const M=o+v/12*K,S=r*g*(.55+.4*nt(o+v));for(let w=.3;w<S;w+=.22){const[_,T]=C(t+Math.cos(M)*w,n+Math.sin(M)*w);if(c.fillRect(P(_)-1,P(T)-1,2,2),(w*10|0)%2){const[R,z]=C(t+Math.cos(M+.5)*(w+.12),n+Math.sin(M+.5)*(w+.12));c.fillRect(P(R),P(z),2,1);const[I,O]=C(t+Math.cos(M-.5)*(w+.12),n+Math.sin(M-.5)*(w+.12));c.fillRect(P(I),P(O),2,1)}}}c.globalAlpha=x,c.fillStyle=d<.12?sr[0]:sr[1],Mx(c,m,p,26,o+d*1.2)}}),A({type:"custom",layer:"top",dur:s,x:t,y:n,draw(c,d){const m=d*s,p=$t(Math.min(1,m/i)),g=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(s-i-.2)):1,v=(M,S,w,_,T)=>{c.fillStyle=sr[4],c.beginPath(),c.moveTo(M-_-1,S+1),c.lineTo(M-_*.6,S-w*.7),c.lineTo(M+T,S-w-1),c.lineTo(M+_*.6,S-w*.7),c.lineTo(M+_+1,S+1),c.closePath(),c.fill(),c.fillStyle=sr[2],c.beginPath(),c.moveTo(M-_,S),c.lineTo(M-_*.6+1,S-w*.7),c.lineTo(M+T,S-w),c.lineTo(M,S),c.closePath(),c.fill(),c.fillStyle=sr[3],c.beginPath(),c.moveTo(M,S),c.lineTo(M+T,S-w),c.lineTo(M+_*.6-1,S-w*.7),c.lineTo(M+_,S),c.closePath(),c.fill(),c.fillStyle=sr[0],c.fillRect(P(M+T)-1,P(S-w),2,3),c.fillStyle=sr[1],c.fillRect(P(M-_*.5),P(S-w*.6),1,P(w*.45))};c.globalAlpha=1;for(const M of h){const S=a[M],w=Math.cos(S),_=Math.sin(S),T=u[M]*(.55+.45*p)*x;if(T<2)continue;const[R,z]=C(t+w*g*(.84+f[M]),n+_*g*(.84+f[M]));v(R,z,T*.5,3+T*.08,w*2);const[I,O]=C(t+w*g*(1+f[M]),n+_*g*(1+f[M]));v(I,O,T,3+T*.12,w*3),m<i&&!(M&3)&&(c.globalAlpha=.85,c.fillStyle=sr[0],c.fillRect(P(I)-4,P(O)-1,8,2),c.globalAlpha=1)}}});for(let c=0;c<46;c++){const d=Math.random()*K,m=Math.sqrt(Math.random())*r;F(t+Math.cos(d)*m,n+Math.sin(d)*m,y(.8,1.8),y(-.3,.3),y(-.3,.3),y(-.2,.1),y(1,1.6),c%3?"#ffffff":"#c8f0ff",2,.25,c%4===0,.97)}se(t,n,r*1.05,9102591,.95,.9),ot(4)}const Dn=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function bx(e){st.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),s=Math.min(.38,.12+i*.04),l=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:s+.05,x:t,y:n,draw(a,u){const f=Math.min(1,u*(s+.05)/s),[h,c]=C(t,n,.65),[d,m]=C(r,o,.55),p=d-h,g=m-c,x=Math.hypot(p,g)||1,v=p/x,M=g/x,S=-M,w=v,_=h+p*f,T=c+g*f;for(let R=0;R<2;R++)for(let z=0;z<22;z++){const I=z*5,O=Math.sin(z*.7-b.T*28+l+R*Math.PI)*(2+z*.45),U=z<6?3:2;a.globalAlpha=(1-z/22)*.85,a.fillStyle=Dn[z<5?1:z<13?2:3],a.fillRect(P(_-v*(I+40)+S*O-U/2),P(T-M*(I+40)+w*O-U/2),U,U)}a.globalAlpha=.28,a.fillStyle=Dn[2];for(let R=0;R<44;R+=4)a.fillRect(P(_-v*R)-4,P(T-M*R)-4,8,8);a.globalAlpha=1;for(let R=0;R<44;R+=1)a.fillStyle=R<8?Dn[0]:R<30?Dn[1]:Dn[2],a.fillRect(P(_-v*R+S*.5)-1,P(T-M*R+w*.5)-1,3,3);for(let R=0;R<14;R++){const z=Math.sin(R/14*Math.PI)*6;a.fillStyle=R<4?Dn[0]:Dn[1];for(let I=-z;I<=z;I+=1.5)a.fillRect(P(_+v*(12-R)+S*I),P(T+M*(12-R)+w*I),2,2)}a.fillStyle=Dn[0];for(let R=-4;R<=4;R++)a.fillRect(P(_-v*36+S*R*1.5)-1,P(T-M*36+w*R*1.5)-1,2,2)}}),A({type:"custom",layer:"top",add:!0,dur:.85,delay:s,x:r,y:o,draw(a,u,f){const[h,c]=C(r,o,.55);if(!f.hit){f.hit=!0,ot(3);for(let d=0;d<14;d++){const m=Math.random()*K,p=y(1,3);F(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,y(.2,1.5),.45,Dn[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;a.globalAlpha=1-d,a.fillStyle=Dn[0];for(let p=-m;p<=m;p+=2){const g=m-Math.abs(p);a.fillRect(P(h+p),P(c-g*.7),2,2),a.fillRect(P(h+p),P(c+g*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*K+u*3.2+l,p=6+$t(u)*26,g=h+Math.cos(m)*p,x=c+Math.sin(m)*p*.5-u*46;a.globalAlpha=1-u;for(let v=0;v<4;v++){const M=m-v*.25,S=p-v*2;a.fillStyle=Dn[v===0?0:v<2?1:2],a.fillRect(P(h+Math.cos(M)*S)-1,P(c+Math.sin(M)*S*.5-u*46+v*3)-1,v?2:3,v?2:3)}a.fillStyle=Dn[0],a.fillRect(P(g)-1,P(x)-1,3,3)}}}),se(r,o,1.6,8060880,.85,.5,{delay:s}),se(t,n,1,8060880,.4,.25)}const gi=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function Sx(e){st.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,s]=C(t,n),l=(.35+1.25*$t(o))*B.HW*Math.SQRT2,a=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const h=a+u*K/4+f,c=l*(1-f*.25);r.fillStyle=f<.3?gi[0]:gi[3],r.fillRect(P(i+Math.cos(h)*c)-1,P(s+Math.sin(h)*c*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*K,i=y(1,2.2);F(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,y(1.5,3),y(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function T1(e,t,n,r){const o=b.T-(t._cyS||b.T),i=Math.min(1,o/.3),[s,l]=C(t.x,t.y),a=2.5*B.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(s-9*u,l),e.lineTo(s-43*u,l-a),e.lineTo(s+43*u,l-a),e.lineTo(s+9*u,l),e.closePath(),e.fill());for(let h=0;h<f;h++){const c=h/(f-1),d=l-a*c,m=(9+c*34)*u+Math.sin(n*3+h)*2,p=m*.32,g=n*(8-c*3)+h*.9,x=s+Math.sin(n*2.2+c*3)*c*6;for(let v=0;v<K;v+=.12){const M=v+g,S=Math.sin(M);if(S>0!==r)continue;const w=(v*3/K+h*.37)%1;w>.72||(e.globalAlpha=(r?.9:.55)*(1-c*.3),e.fillStyle=w<.18?gi[0]:w<.45?gi[1]:gi[2],e.fillRect(P(x+Math.cos(M)*m)-2,P(d+S*p)-1,4,3))}}for(let h=0;h<6;h++){const c=n*6.5+h*1.05,d=Math.sin(c);if(d>0!==r)continue;const m=(n*.55+h*.17)%1,p=l-a*m,g=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=h%2?"#6aa040":"#8a6a40",e.fillRect(P(s+Math.cos(c)*g)-1,P(p+d*g*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,it(t.x,t.y,.55,gi[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function wx(e){for(let t=0;t<6;t++)A({type:"puff",x:e.x+y(-.4,.4),y:e.y+y(-.4,.4),r:y(12,20),dur:y(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*K,r=y(1,2.5);F(e.x,e.y,y(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,y(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const _x=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],Ax={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function Tx(e){st.sfx("item_reflect",e.x,e.y,1),A({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),i=o&&o.scale||1,[s,l]=C(r.x,r.y,(o?rn(o):.8)*.45),a=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*K+n*1.2,h=34*i*Math.max(0,a),c=s+Math.cos(f)*h,d=l+Math.sin(f)*h*.55;t.save(),t.translate(P(c),P(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),mn(t,_x,0,0,2,Ax),t.restore()}if(n>.3&&n<.6){gt(!0);const u=Lt(),f=(n-.3)/.3*K;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(P(s+Math.cos(f)*34*i)-3,P(l+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(P(s+Math.cos(f)*34*i)-1,P(l+Math.sin(f)*34*i*.55)-3,2,6),gt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*K,r=y(1,2.5);F(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}se(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function Cx(e,t,n){const r=t.scale||1,[o,i]=C(t.x,t.y,rn(t)*.4),s=26*r,l=(n*1.4+t.id)%K;for(let a=0;a<6;a++){const u=n*1.6+a/6*K,f=Math.sin(u),h=P(o+Math.cos(u)*s),c=P(i+f*s*.4),d=Math.abs(((u-l)%K+K)%K)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(h-2,c-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(h-1,c-4,2,7),e.fillStyle="#d02a3a",e.fillRect(h+1,c-2,1,4)}e.globalAlpha=1}const Tn=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function Rx(e){st.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Wi("veil_discord","radius",3),o=.5,i=Math.random()*9,s=96;b.game,Wi("veil_discord","dur",14),A({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(l,a){const u=Math.min(1,a*(o+.14)/o),f=2.4*(1-u*u),h=Math.max(0,(a-.78)/.22),c=.6*B.ZK*(1-h);if(!(c<2))for(let d=0;d<2;d++)for(let m=0;m<s;m++){const p=m/s*K,g=Math.sin(p);if(g>0!=(d===1))continue;const[x,v]=C(t+Math.cos(p)*r,n+g*r,f+.6),M=c*(.78+.22*nt(i+m)),S=Math.sin(m*1.3+b.T*4)*.5+.5;l.globalAlpha=d?.92:.5,l.fillStyle=Tn[3],l.fillRect(P(x)-2,P(v)-1,5,2);for(let w=0;w<M;w+=3){const _=Math.sin(w*.1+b.T*7+m*.4)*(w/M)*3;l.fillStyle=w<3?Tn[0]:S>.66?Tn[1]:S>.25?Tn[2]:Tn[3],l.fillRect(P(x+_)-2,P(v+w),4,3)}}}}),A({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(l,a){const[u,f]=C(t,n),h=r*B.HW*Math.SQRT2,c=r*B.HH*Math.SQRT2;l.globalAlpha=.35*(1-a),it(t,n,r*(.9+.1*a),null,Tn[3]);for(let d=0;d<3;d++){const m=Math.min(1,a*1.4-d*.12);if(!(m<=0)){l.globalAlpha=(1-m)*.9,l.fillStyle=d?Tn[1]:Tn[0];for(let p=0;p<K;p+=.05){const g=(.3+.75*m)*(1+Math.sin(p*7+d*2+b.T*6)*.06);l.fillRect(P(u+Math.cos(p)*h*g)-1,P(f+Math.sin(p)*c*g)-1,3,2)}}}}}),A({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(l,a,u){if(!u.done){u.done=!0,ot(3);for(let f=0;f<10;f++){const h=f/10*K;A({type:"puff",x:t+Math.cos(h)*r*.9,y:n+Math.sin(h)*r*.9,r:y(12,20),dur:y(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const h=Math.random()*K,c=Math.sqrt(Math.random())*r;F(t+Math.cos(h)*c,n+Math.sin(h)*c,.1,0,0,y(.6,1.6),y(.6,1),Tn[f%3],2,-.2,!0)}}}}),se(t,n,r*1.1,13656319,.7,.9,{delay:o})}function Px(e,t,n){const[r,o]=C(t.x,t.y,rn(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,s=P(11*i);for(let l=-s;l<=s;l+=2){const a=(l+s)/(s*2),u=Math.sin(n*6+a*6+t.id)*2,f=7+P(5*nt(t.id+l*3))+Math.sin(a*Math.PI)*3,h=P(o-Math.sin(a*Math.PI)*5+u*.5);e.fillStyle=Tn[3],e.fillRect(P(r+l)-1,h-1,3,f+2),e.fillStyle=l/2%2?Tn[2]:Tn[1],e.fillRect(P(r+l),h,2,f),e.fillStyle=Tn[0],e.fillRect(P(r+l),h,2,1)}Math.random()<.04&&F(t.x+y(-.15,.15),t.y+y(-.15,.15),rn(t)+.05,0,0,-.3,.6,Tn[2],2,1,!1)}const xc=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],Mc={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function Ix(e){st.sfx("item_mekansm",e.x,e.y,1),A({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),[i,s]=C(r.x,r.y,(o?rn(o):.6)+.12),l=n<.12?$t(n/.12):1,a=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(P(i-24*l),P(s)),t.rotate(a),mn(t,xc,0,0,P(4*l)||1,Mc),t.restore(),t.save(),t.translate(P(i+4*l),P(s-16*l)),t.rotate(-a*1.33+.35),mn(t,xc,0,0,P(3*l)||1,Mc),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)A({type:"puff",x:r.x+y(-.2,.2),y:r.y+y(-.2,.2),r:y(8,12),dur:y(.5,.8),col:[235,235,240]})}}}),A({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Se(r),i=o?rn(o):.8,s=o&&o.scale||1;for(let l=0;l<2;l++)for(let a=0;a<14;a++){const u=n*1.3-a*.025;if(u<0||u>1)continue;const f=u*K*2+l*Math.PI,[h,c]=C(r.x,r.y,i*u*1.05),d=a<2?4:a<6?3:2;t.globalAlpha=(1-a/14)*(1-n*.5),t.fillStyle=a===0?"#ffffff":l?"#ffe07a":"#8aff9a",t.fillRect(P(h+Math.cos(f)*24*s-d/2),P(c+Math.sin(f)*8*s-d/2),d,d)}if(n>.45){const l=(n-.45)/.55,[a,u]=C(r.x,r.y,i+.1+l*.5);t.globalAlpha=1-l,t.fillStyle="#c8ffd0",t.fillRect(P(a)-1,P(u)-5,3,11),t.fillRect(P(a)-5,P(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(P(a),P(u),1,1)}}}),se(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const zx=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),Ox={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},ti=["#fff6c0","#ffd24a","#d89a20"];function Fx(e){st.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?mt(e.uid):null,o=r?r.x:t,i=r?r.y:n,s=.34;A({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(l,a){const[u,f]=C(o,i,.6),[h,c]=C(t,n,.8);for(let d=0;d<10;d++){const m=(a*1.5+d/10)%1;l.globalAlpha=Math.sin(m*Math.PI)*.9,l.fillStyle=ti[d%2],l.fillRect(P(u+(h-u)*m)-1,P(f+(c-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(l,a,u){const f=Math.min(1,a/s),h=2.3-1.4*$t(f),[c,d]=C(t,n,h);if(l.globalAlpha=a<.08?a/.08:a>.7?(1-a)/.3:1,mn(l,zx,c+(f<1?Math.sin(a*30)*1.5:0),d,4,Ox),!u.hit&&f>=1){u.hit=!0,ot(3);for(let m=0;m<22;m++){const p=Math.random()*K,g=y(.6,2.4);F(t,n,.5,Math.cos(p)*g,Math.sin(p)*g,y(2.5,4.5),y(.7,1.1),ti[m%3],3,9,m%3===0,.97)}A({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[g,x]=C(t,n);for(let S=0;S<9;S++){const w=(S-4)*5+Math.sin(S*2.7)*2,_=(60+70*nt(S*3.1))*Math.min(1,p*4+.1),T=x-_-p*30;for(let R=0;R<_;R+=3){const z=1-R/_;m.globalAlpha=(1-p)*(1-z*.85),m.fillStyle=R<6?ti[0]:ti[1],m.fillRect(P(g+w),P(T+R),2,2)}}const v=P(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=P(x-34);m.globalAlpha=1-p,m.fillStyle=ti[0],m.fillRect(P(g)-v,M,v*2,2),m.fillRect(P(g)-1,M-v,2,v*2),m.fillRect(P(g)-3,M-2,6,6)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,it(t,n,.3+1.1*$t(p),ti[1],null,3,[2,3])}})}}}),se(t,n,2,16765514,1,.7,{delay:s})}function Ex(e){st.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=Wi("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),s=new Float32Array(r+1);for(let l=0;l<r;l++){const a=l/r*K+.6;i[l]=t+Math.cos(a)*1.1,s[l]=n+Math.sin(a)*1.1}i[r]=t,s[r]=n,A({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(l,a){l.globalAlpha=1-a,l.lineDashOffset=b.T*30,it(t,n,.5+1*$t(a),"#c8d0e0",null,2,[4,6]),l.lineDashOffset=0,it(t,n,.4+.8*$t(a),"#9ad8ff",null,1.5)}}),A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(l,a,u){const f=$t(Math.min(1,a/.42)),h=Math.max(0,(a-.48)/.45);for(let c=0;c<=r;c++){const d=t+(i[c]-t)*f,m=n+(s[c]-n)*f,[p,g]=C(d,m,.05),x=(1-f)*4*Math.PI+c,v=P(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,S=P(g-M),w=P(M*Math.min(1,h));if(w>=M)continue;l.globalAlpha=1,l.fillStyle="#2a3040",l.fillRect(P(p)-v-2,S+w-2,v*2+4,M-w+2),l.fillStyle="#c8d0e0",l.fillRect(P(p)-v-1,S+w-1,v*2+2,M-w),l.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",l.fillRect(P(p)-v+1,S+w+1,v*2-2,M-w-4),l.fillStyle="#ffffff";const _=(b.T*40+c*13+o*10)%(M+20)-10;for(let T=0;T<4;T++){const R=P(S+_+T*2);R>S+w&&R<S+M-3&&l.fillRect(P(p)-v+2+T,R,Math.max(1,P(v*.5)),1)}h>0&&Math.random()<.7&&F(d+y(-.12,.12),m+y(-.12,.12),(M-w)/B.ZK,y(-.2,.2),y(-.2,.2),y(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&a>.45){u.fl=!0;for(let c=0;c<=r;c++)A({type:"custom",layer:"top",add:!0,dur:.25,x:i[c],y:s[c],draw(d,m,p){const[g,x]=C(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(P(g)-18,P(x)-22,36,2),d.fillRect(P(g)-18,P(x)+6,36,2),d.fillRect(P(g)-1,P(x)-30,2,44)}})}}}),se(t,n,2,10148095,.75,.8)}const Xn=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function kx(e){st.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,s=Wi("abyssal_blade","stun",2),l=Math.random()*99,a=28,u=new Float32Array(a);for(let c=0;c<a;c++)u[c]=(c%2?.34:.5)+nt(l+c)*.14;A({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(c,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const g=m-p*.06;if(g<0)break;const[x,v]=C(t+(r-t)*g,n+(o-n)*g,.5+Math.sin(g*Math.PI)*1.1),M=P(10-p);c.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),c.fillStyle=Xn[2],c.fillRect(P(x)-M/2-1,P(v)-M/2-1,M+2,M+2),c.fillStyle=Xn[0],c.fillRect(P(x)-M/2,P(v)-M/2,M,M)}}});const f=s+.35,h=c=>c<i?0:c<i+.12?$t((c-i)/.12):c>f-.3?Math.max(0,(f-c)/.3):1;A({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(c,d,m){const p=d*f,g=h(p);if(g<=0)return;if(!m.hit&&p>=i){m.hit=!0,ot(6);for(let M=0;M<18;M++){const S=Math.random()*K,w=y(1.5,3.5);F(r,o,.3,Math.cos(S)*w,Math.sin(S)*w,y(1,3),.5,M%3?Xn[3]:Xn[2],3,6,!0)}}c.fillStyle=Xn[1];for(let M=0;M<8;M++){const S=l+M/8*K;for(let w=.45;w<.45+.5*g;w+=.07){const _=S+(nt(l+M*5+(w*20|0))-.5)*.5,[T,R]=C(r+Math.cos(_)*w,o+Math.sin(_)*w);c.fillRect(P(T)-1,P(R)-1,2,2)}}c.beginPath();for(let M=0;M<=a;M++){const S=M%a/a*K,[w,_]=C(r+Math.cos(S)*u[M%a]*g,o+Math.sin(S)*u[M%a]*g);M?c.lineTo(P(w),P(_)):c.moveTo(P(w),P(_))}c.fillStyle=Xn[0],c.fill();for(let M=0;M<a;M++){const S=M/a*K,w=(M+1)/a*K,[_,T]=C(r+Math.cos(S)*u[M]*g,o+Math.sin(S)*u[M]*g),[R,z]=C(r+Math.cos(w)*u[(M+1)%a]*g,o+Math.sin(w)*u[(M+1)%a]*g);for(let I=0;I<1;I+=.2)c.fillStyle=Math.sin(S)<0?Xn[3]:Xn[2],c.fillRect(P(_+(R-_)*I)-1,P(T+(z-T)*I)-1,2,2)}const[x,v]=C(r,o);for(let M=0;M<10;M++){const S=(b.T*.9+M/10)%1,w=M*2.4+S*5,_=(1-S)*22*g;c.globalAlpha=S,c.fillStyle=Xn[3],c.fillRect(P(x+Math.cos(w)*_)-1,P(v+Math.sin(w)*_*.5)-1,2,2)}}}),A({type:"custom",layer:"top",dur:f,x:r,y:o,draw(c,d){const m=d*f,p=h(m);if(p<=0)return;const[g,x]=C(r,o,.42),v=$t(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const S=M/5*K+l,[w,_]=C(r+Math.cos(S)*.36*p,o+Math.sin(S)*.36*p),T=Math.sin(b.T*6+M*1.7)*2,R=w+(g-w)*.55*v+T,z=_-(_-x)*v*p-8*v,I=w+Math.cos(S)*16*v,O=_-(_-x)*.7*v*p;for(let U=0;U<2;U++)for(let X=0;X<=1;X+=.06){const N=1-X,Q=N*N*w+2*N*X*I+X*X*R,k=N*N*_+2*N*X*O+X*X*z,E=X<.5?5:X<.8?4:3;U?(c.fillStyle=X>.85?Xn[3]:Xn[2],c.fillRect(P(Q)-1,P(k)-1,2,2)):(c.fillStyle=Xn[0],c.fillRect(P(Q-E/2)-1,P(k-E/2)-1,E+2,E+2))}}}}),se(r,o,1.6,9059071,.6,.6,{delay:i})}const po={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},Vi={blue:6996223,red:16743002,neutral:16765514};function Lx(e){st.sfx("tp_start",e.x,e.y,1);const t=mt(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=po[r]||po.blue,i=e.ex===void 0?e.x:e.ex,s=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:b.T,dur:n,ex:i,ey:s,team:r});const l=a=>{const u=mt(a.uid);return a.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};A({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(a,u,f){if(l(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=C(i,s),m=b.T,p=Math.min(1,f.t/.25);a.globalAlpha=p*.8,it(i,s,1.05,o[2],null,2),a.lineDashOffset=m*26,a.globalAlpha=p*.9,it(i,s,.8,o[1],null,3,[7,5]),a.lineDashOffset=-m*40,it(i,s,.5,o[0],null,2,[3,6]),a.lineDashOffset=0;for(let v=0;v<4;v++){const M=v/4*K+Math.PI/4,S=(m*(1.2+h*1.5)+v*.25)%1,w=1.65-S*.75,[_,T]=C(i+Math.cos(M)*w,s+Math.sin(M)*w);a.globalAlpha=p*Math.sin(S*Math.PI),a.fillStyle=o[1];const R=c-_,z=d-T,I=Math.hypot(R,z)||1,O=-z/I,U=R/I;for(let X=0;X<6;X++)a.fillRect(P(_+R/I*X+O*(6-X))-1,P(T+z/I*X+U*(6-X))-1,2,2),a.fillRect(P(_+R/I*X-O*(6-X))-1,P(T+z/I*X-U*(6-X))-1,2,2)}a.globalAlpha=p,a.fillStyle=o[0];const g=.8*B.HW*Math.SQRT2,x=.8*B.HH*Math.SQRT2;for(let v=0;v<8;v++){const M=v/8*K-m*.6;sf(a,c+Math.cos(M)*g*1.18,d+Math.sin(M)*x*1.18,v+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,se(i,s,1.2+.6*h,Vi[r]||Vi.blue,.35+.4*h,.32))}}),A({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(a,u,f){if(l(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=C(i,s),m=40+120*h,p=P(3+5*h+Math.sin(b.T*18)*1);for(let g=0;g<m;g+=3)a.globalAlpha=(1-g/m)*(.35+.5*h),a.fillStyle=g%12<3?o[0]:o[1],a.fillRect(P(c)-p,P(d-g)-3,p*2,3);for(let g=0;g<5;g++){const x=(b.T*.8+g/5)%1,v=b.T*4+g*1.3;a.globalAlpha=Math.sin(x*Math.PI)*h,a.fillStyle=o[0],a.fillRect(P(c+Math.cos(v)*14)-1,P(d-x*m+Math.sin(v)*4)-1,2,2)}}})}function C1(e,t,n){const r=b.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),s=po[o.team||e.team]||po.blue,l=e.scale||1;if(!t){const[a,u]=C(e.x,e.y),f=.8*B.HW*Math.SQRT2*l,h=.8*B.HH*Math.SQRT2*l;gt(!0);const c=Lt();c.globalAlpha=.6,it(e.x,e.y,.8*l,s[3],null,2);for(let d=0;d<K*i;d+=.07){const m=d-Math.PI/2;c.globalAlpha=.95,c.fillStyle=d>K*i-.3?s[0]:s[1],c.fillRect(P(a+Math.cos(m)*f)-1,P(u+Math.sin(m)*h)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,g=d*K/3+p*3-r*(2+i*4);c.globalAlpha=1-p*.7,c.fillStyle=m<3?s[0]:m<7?s[1]:s[2],c.fillRect(P(a+Math.cos(g)*f*(1-p*.8))-1,P(u+Math.sin(g)*h*(1-p*.8))-1,3,3)}c.globalAlpha=1,gt(!1),vc(e,i,s,l,!1),(e._tpL||0)<r-.25&&(e._tpL=r,se(e.x,e.y,1.1+i,Vi[o.team||e.team]||Vi.blue,.4+.45*i,.32,{uid:e.id}));return}vc(e,i,s,l,!0),Math.random()<.3+i*.4&&F(e.x+y(-.3,.3),e.y+y(-.3,.3),y(0,.4),0,0,y(1.2,2.4),.5,s[Math.random()*3|0],2,-.5,!0)}function vc(e,t,n,r,o){const i=b.T,s=rn(e),[l,a]=C(e.x,e.y);gt(!0);const u=Lt();for(let f=0;f<3;f++){const h=(i*(.8+t*1.4)+f/3)%1,c=a-h*s*1.15*B.ZK,d=(24-h*8)*r,m=d*.32;u.globalAlpha=Math.sin(h*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<K;p+=.2)Math.sin(p)>0===o&&u.fillRect(P(l+Math.cos(p)*d)-1,P(c+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,gt(!1)}function Ux(e){const t=mt(e.uid),n=e.team||t&&t.team||"blue",r=po[n]||po.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),st.sfx("tp_end",o,i,1),A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(s,l){const[a,u]=C(e.x,e.y),f=P(16*(1-l))+1,h=60+140*l;for(let c=0;c<h;c+=3)s.globalAlpha=(1-l)*(1-c/h),s.fillStyle=c<h*l?r[0]:r[1],s.fillRect(P(a)-f,P(u-c)-3,f*2,3);s.globalAlpha=1-l,it(e.x,e.y,.9*(1-l)+.05,r[1],null,3)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(s,l,a){const[u,f]=C(o,i),h=Math.min(1,l/.14),c=f-320,d=c+(f-c)*h,m=P(l<.14?10:10+14*(1-(l-.14)/.86)*Math.sin(Math.min(1,(l-.14)*4)*Math.PI));if(s.globalAlpha=l<.45?1:(1-l)/.55,s.fillStyle=r[1],s.fillRect(P(u)-m,P(c),m*2,P(d-c)),s.fillStyle=r[0],s.fillRect(P(u)-P(m*.4),P(c),P(m*.8),P(d-c)),!a.hit&&h>=1){a.hit=!0,ot(4);for(let p=0;p<26;p++){const g=Math.random()*K,x=y(1.5,4);F(o,i,.2,Math.cos(g)*x,Math.sin(g)*x,y(.5,2.5),.55,r[p%3],3,3,!0)}A({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,g){p.globalAlpha=1-g,it(o,i,.3+1.6*$t(g),r[1],null,6*(1-g)+1),it(o,i,.2+1*$t(g),r[0],null,2,[3,3])}})}}}),se(o,i,2.6,Vi[n]||Vi.blue,1,.65)}function Dx(e){const t=mt(e.uid),n=t&&t.team||"blue",r=po[n]||po.blue;t&&(t._tp=null),st.sfx("tp_cancel",e.x,e.y,1),A({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[s,l]=C(e.x,e.y);for(let a=0;a<3;a++){const u=(1-$t(Math.min(1,i*2)))*(20+a*22),f=22+i*10,h=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let c=0;c<K;c+=.22)nt(a*31+c*7)<h||o.fillRect(P(s+Math.cos(c)*f)-1,P(l-u+Math.sin(c)*f*.32+(i>.5?(i-.5)*30*nt(c*13+a):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*K,s=y(.8,2);F(e.x,e.y,y(.3,1),Math.cos(i)*s,Math.sin(i)*s,y(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)A({type:"puff",x:e.x+y(-.3,.3),y:e.y+y(-.3,.3),r:y(10,14),dur:y(.4,.6),col:[140,140,150]})}function R1(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function Xx(e,t,n){const r=b.game&&b.game.player,o=r===e,[i,s]=C(e.x,e.y),l=e.scale||1,a=Lt();if(t&2){const u=.75*B.HW*Math.SQRT2*l,f=.75*B.HH*Math.SQRT2*l,h=(n*2+e.id)%K;for(let c=0;c<7;c++){const d=c/7*K-n*.5,m=P(i+Math.cos(d)*u),p=P(s+Math.sin(d)*f),g=Math.abs(((d-h)%K+K)%K)<.6;a.globalAlpha=.85,a.fillStyle="#4a2e08",a.fillRect(m-3,p-4,7,6),a.fillRect(m-2,p+2,5,2),a.fillRect(m-1,p+4,3,1),a.fillStyle=g?"#fff6c8":"#e0b040",a.fillRect(m-2,p-3,5,5),a.fillRect(m-1,p+2,3,2),a.fillStyle=g?"#ffffff":"#a87418",a.fillRect(m,p-3,1,6)}o&&(a.globalAlpha=.12,it(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(a.globalAlpha=.4,a.lineDashOffset=n*12,it(e.x,e.y,.5*l,"#c03050",null,1.5,[2,5]),a.lineDashOffset=0,o&&(a.globalAlpha=.1,it(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*B.HW*Math.SQRT2*l,f=.95*B.HH*Math.SQRT2*l;gt(!0);const h=Lt();for(let c=0;c<5;c++){const d=n*.7+c/5*K,m=P(i+Math.cos(d)*u),p=P(s+Math.sin(d)*f-3-Math.sin(n*2+c)*2);h.globalAlpha=.65,h.fillStyle="#c8f0ff",h.fillRect(m-2,p,5,1),h.fillRect(m,p-2,1,5),h.fillRect(m-1,p-1,1,1),h.fillRect(m+1,p+1,1,1),h.fillRect(m+1,p-1,1,1),h.fillRect(m-1,p+1,1,1)}h.globalAlpha=1,gt(!1),o&&(a.globalAlpha=.12,it(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&F(e.x+y(-.5,.5),e.y+y(-.5,.5),y(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}a.globalAlpha=1}function Gx(e,t,n){const[r,o]=C(t.x,t.y,rn(t)+.12),i=P(r-14*(t.scale||1)),s=P(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,s-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,s-6,4,3);for(let l=0;l<9;l++){const a=P(Math.sin(n*7-l*.7+t.id)*2),u=P(10-l*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+l*2,s-3+a,2,u+2),e.fillStyle=l%3?"#c03050":"#ff6a7a",e.fillRect(i+2+l*2,s-2+a,2,u)}e.globalAlpha=1}function Bx(e,t){t.banner&&Math.random()<.025&&F(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&F(e.x+y(-.25,.25),e.y+y(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&F(e.x+y(-.3,.3),e.y+y(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function Nx(e){const t=b.game&&b.game.player,n=e.uid!==void 0?mt(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&ze(n))return!0;switch(e.type){case"item_crit":return gg(e),!0;case"item_chain":return xg(e),!0;case"item_bash":return bg(e),!0;case"item_berserk":return Ag(e),!0;case"item_bloodlust":return Rg(e),!0;case"item_drain":return Ig(e),!0;case"item_hex":return zg(e),!0;case"item_refresh":return Lg(e),!0;case"item_immune":return Ug(e),!0;case"item_spellblock":return Xg(e),!0;case"item_push":return Gg(e),!0;case"ward_place":return t&&e.team===t.team&&Wg(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&Vg(e),!0;case"mon_howl":return qg(e),!0;case"mon_spores":return Kg(e),!0;case"mon_rootslam":return jg(e),!0;case"camp_buff":return Jg(e),!0;case"item_wand":return rx(e),!0;case"item_phase":return ox(e),!0;case"item_arcane":return lx(e),!0;case"item_clarity":return hx(e),!0;case"item_dust":return px(e),!0;case"item_evade":return xx(e),!0;case"item_frostwave":return vx(e),!0;case"item_lance":return bx(e),!0;case"item_cyclone":return Sx(e),!0;case"item_reflect":return Tx(e),!0;case"item_veil":return Rx(e),!0;case"item_mekansm":return Ix(e),!0;case"item_midas":return Fx(e),!0;case"item_mirror":return Ex(e),!0;case"item_abyss":return kx(e),!0;case"tp_start":return Lx(e),!0;case"tp_end":return Ux(e),!0;case"tp_cancel":return Dx(e),!0}return!1}function $x(e){const t=e.status||{},n=b.T;(e.aura||e.auraFx)&&Bg(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&tx(e,t,n);const r=R1(e);if(r&&Xx(e,r,n),(t.banner||t.cuirass||t.frostAura)&&Bx(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=b.T),T1(Lt(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,wx(e)),t.tp?C1(e,!1):e._tp&&b.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),za(e,t,"phase")?ix(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);gt(!0);const i=Lt();i.globalAlpha=.3+.25*o,it(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,gt(!1),Math.random()<.3&&F(e.x+y(-.3,.3),e.y+y(-.3,.3),.05,0,0,y(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function Hx(e,t){const n=t.status||{},r=b.T;n.bloodlust&&Pg(e,t,r),n.immune&&Dg(t,r),n.cyclone&&T1(e,t,r,!0),n.tp&&C1(t,!0),za(t,n,"reflect")&&Cx(e,t,r),za(t,n,"veil")&&Px(e,t,r),R1(t)&1&&Gx(e,t,r),za(t,n,"clarity")&&Math.random()<.05&&F(t.x+y(-.25,.25),t.y+y(-.25,.25),rn(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(Og(t,r),t._hexV=1):t._hexV&&(t._hexV=0,Fg(t))}const st={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},Vr={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let af=null;const Ws=e=>Vr[af&&af[e]||e]||Vr.fire,Bn=e=>{const t=Ws(e);return t[Math.random()*t.length|0]};let fr=[],qi=[],Vs=[],Gn=[],rl=1,lf=1;function _s(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function P1(){fr=[],qi=[],Vs=[],Gn=[],lo.length=0}const lo=[],Wx=64,ha=new Map;function M0(e){if(typeof e=="number")return e;let t=ha.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return ha.size>500&&ha.clear(),ha.set(e,t),t}function se(e,t,n,r,o=.8,i=.4,s){lo.length>=Wx&&lo.shift(),lo.push({x:e,y:t,r:n,col:M0(r),a:o,life:i,max:i,uid:s&&s.uid||0,delay:s&&s.delay||0})}function Vx(e,t,n=1){let r=0;for(let o=lo.length-1;o>=0&&r<t;o--){const i=lo[o];if(i.delay>0)continue;const s=i.life/i.max,l=i.a*n*Math.min(1,s*1.6);let a=i.x,u=i.y;if(i.uid){const f=mt(i.uid);f&&!f.dead&&(a=f.x,u=f.y)}e(a,u,i.r*(.8+.2*s),i.col,l),r++}}const fu=new Map,Qo=192,ei=new Float32Array(Qo),cu=new Float32Array(Qo),hu=new Float32Array(Qo),du=new Float32Array(Qo),mu=new Float32Array(Qo),pu=new Float32Array(Qo);function qx(e,t,n=1){fu.clear();let r=0;for(const o of fr){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let s=fu.get(i);if(s===void 0){if(r>=Qo)continue;s=r++,fu.set(i,s),ei[s]=cu[s]=hu[s]=du[s]=mu[s]=pu[s]=0}const l=o.life/o.max*o.size,a=M0(o.col);ei[s]+=l,cu[s]+=o.x*l,hu[s]+=o.y*l,du[s]+=(a>>16&255)*l,mu[s]+=(a>>8&255)*l,pu[s]+=(a&255)*l}for(let o=0;o<t;o++){let i=-1,s=6;for(let c=0;c<r;c++)ei[c]>s&&(s=ei[c],i=c);if(i<0)break;const l=ei[i];ei[i]=0;let a=du[i]/l,u=mu[i]/l,f=pu[i]/l;const h=Math.max(a,u,f,1);a=a/h*255,u=u/h*255,f=f/h*255,e(cu[i]/l,hu[i]/l,1.1+Math.min(2.2,Math.sqrt(l)*.28),a<<16|u<<8|f,Math.min(.85,l*.018)*n)}}const yu={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function F(e,t,n,r,o,i,s,l,a=2,u=0,f=!1,h=.94){rl<1&&Math.random()>rl||fr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:s,max:s,col:l,size:a,grav:u,glow:f,drag:h})}function fe(e,t,n,r,o=12,i=2.5,s=.6,l=1.5,a=!0,u=3){for(let f=0;f<o;f++){const h=Math.random()*Math.PI*2,c=Math.random()*i;F(e,t,n,Math.cos(h)*c,Math.sin(h)*c,Math.random()*l,s*(.6+Math.random()*.6),Bn(r),u+(Math.random()<.3?1:0),4,a)}}function ot(e){b.cam.shake=Math.max(b.cam.shake,e*lf)}function A(e){return e.t=0,qi.push(e),Yx(e),e}function Yx(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":se(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":se(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":se(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":se(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":se(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&se(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":se(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function Co(e){e.t=0,Vs.push(e)}const bc={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},Sc=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),Kx=new Set(["gato","zorra"]),jx={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function wc(e){const t=Ws(e.col&&Vr[e.col]?e.col:"gold"),n=e.uid?mt(e.uid):null;if(e.type==="windup"){st.sfx(jx[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";A({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,l){const a=mt(l.uid),u=a?a.x:l.x,f=a?a.y:l.y;if(i.globalAlpha=.35+.5*s,r&&e.radius)it(e.ex,e.ey,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(o&&e.radius)it(u,f,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(!o&&e.range){const h=e.ex-u,c=e.ey-f,d=Math.hypot(h,c)||1,m=Math.min(e.range,d)*s,[p,g]=C(u,f,.1),[x,v]=C(u+h/d*m,f+c/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,g),i.lineTo(x,v),i.stroke(),i.setLineDash([])}it(u,f,.35+.35*s,t[0],null,2)}}),A({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,l){const a=mt(l.uid),[u,f]=C(a?a.x:l.x,a?a.y:l.y,.75);for(let h=0;h<10;h++){const c=h/10*6.283+s*5,d=36*(1-s)+4;i.fillStyle=t[h%t.length],i.fillRect(Math.round(u+Math.cos(c)*d-2),Math.round(f+Math.sin(c)*d*.6-2),4,4)}i.globalAlpha=s,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*s),Math.round(f-3-4*s),Math.round(6+8*s),Math.round(6+8*s))}})}else e.type==="windup_cancel"?(fe(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),st.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(A({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const s=mt(i.uid);if(!s||!s.channel&&o>.05){i.t=i.dur;return}const l=e.radius||1.2,a=b.T;r.globalAlpha=.7,it(i.x,i.y,l,t[1],null,3),it(i.x,i.y,l*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+a*1.5,[h,c]=C(i.x+Math.cos(f)*l*.85,i.y+Math.sin(f)*l*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(h-3),Math.round(c-3),6,6)}n&&Math.random()<.5&&F(n.x,n.y,.9,y(-.5,.5),y(-.5,.5),y(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),st.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?A({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(fe(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),st.sfx("deny",e.x,e.y,.4)):fe(e.x,e.y,.6,e.col&&Vr[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function Qx(e){const t=Ws(e.type.slice(5)&&Vr[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;A({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(s,l,a){const[u,f]=C(a.x,a.y,.55),h=18*(1-l)+4;s.globalAlpha=1-l,s.fillStyle=t[0],s.fillRect(Math.round(u-h/2),Math.round(f-h/2),Math.round(h),Math.round(h)),s.fillStyle=t[1];for(let c=0;c<6;c++){const d=c/6*6.283;s.fillRect(Math.round(u+Math.cos(d)*h),Math.round(f+Math.sin(d)*h*.7),3,3)}}});for(let s=0;s<10;s++)F(o,i,.5,n*y(1.5,4)+y(-.8,.8),r*y(1.5,4)+y(-.8,.8),y(0,1),.3,t[s%t.length],3,0,!0);ot(1.5)}function Zx(){const e=b.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0;const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(rl=r?1:.4,lf=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const a=n.hero&&n.key?et[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&st.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),a)try{if(a(n)!==!1)continue}catch(u){console.error(u)}wc(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){wc(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&Qx(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?et[o]:void 0,s=o&&n.type!=="heal"&&!n.impact,l=o?s?"ab_"+o:n.impact&&!i?bc[n.type]:null:bc[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&st.babble(n.hero,"ult",n.x,n.y),l&&st.sfx(l,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const a=t[n.hero]&&t[n.hero].abil[n.key],u=a&&yu[a.fx],f=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;u!==void 0&&se(n.x+(n.ux||0)*f,n.y+(n.uy||0)*f,n.radius?n.radius*1.15+.5:f?n.range*.85+.6:1.6,u,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(a){console.error(a)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(Nx(n))continue}catch(a){console.error(a);continue}switch(n.type){case"fire":{A({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let a=0;a<90;a++){const u=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,f=(.4+Math.random())*n.range*2.4;F(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(u)*f,Math.sin(u)*f,Math.random()*1.2,.5,Bn("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Co({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),ot(3);break}case"quake":{A({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),A({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let a=0;a<50;a++){const u=Math.random()*6.28,f=Math.random()*n.range*2.5;F(n.x,n.y,.1,Math.cos(u)*f,Math.sin(u)*f,1+Math.random()*2,.7,Bn("quake"),3,6,!1)}ot(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const a=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;yu[n.type]!==void 0&&se(n.x,n.y,n.radius*1.2+.4,yu[n.type],n.type==="firering"?1:.75,.6),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:Ws(a)[1],w:7}),A({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:Ws(a)[0],w:3,delay:.08}),n.type==="roar"&&(A({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),ot(8)),n.type==="firering"&&(A({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),ot(9),Co({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&Co({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&Co({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const u=n.type==="spores"?40:90;for(let f=0;f<u;f++){const h=Math.random()*Math.PI*2,c=n.radius*(1.6+Math.random()*1.6);F(n.x,n.y,.2,Math.cos(h)*c,Math.sin(h)*c,Math.random()*2,.6,Bn(a),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let f=0;f<14;f++)A({type:"puff",x:n.x+y(-1,1)*n.radius*.7,y:n.y+y(-1,1)*n.radius*.7,r:y(14,26),dur:y(.7,1.3),col:[140,210,90]});break}case"heal":A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let a=0;a<16;a++)F(n.x+y(-.4,.4),n.y+y(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Bn("heal"),3,0,!0);break;case"shield":case"stoneskin":A({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":A({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let a=0;a<12;a++)A({type:"puff",x:n.x+y(-.6,.6),y:n.y+y(-.6,.6),r:y(12,22),dur:y(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const a=n.type==="firedash"?"fire":"dust",u=n.ex||n.x+(n.ux||0)*(n.range||0),f=n.ey||n.y+(n.uy||0)*(n.range||0);for(let h=0;h<30;h++){const c=h/30;F(n.x+(u-n.x)*c+y(-.2,.2),n.y+(f-n.y)*c+y(-.2,.2),.15,y(-.5,.5),y(-.5,.5),y(.3,1.2),.5+c*.4,Bn(a),4,0,a==="fire")}A({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.35,col:a==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const a=n.ex||n.x,u=n.ey||n.y;A({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),A({type:"flash",x:a,y:u,r:1.1,dur:.3,col:"rgba(220,170,255,"}),A({type:"streak",x:n.x,y:n.y,ex:a,ey:u,dur:.3,col:"#d8a8ff"}),fe(n.x,n.y,.4,"arcane",16,2,.5),fe(a,u,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let a=0;a<20;a++){const u=Math.random()*6.28,f=Math.random()*n.radius;F(n.x+Math.cos(u)*f,n.y+Math.sin(u)*f,.1,0,0,2,.6,Bn("arcane"),2,0,!0)}break;case"starfall":for(let a=0;a<18;a++)A({type:"meteor",x:n.x+y(-1,1)*n.radius*.8,y:n.y+y(-1,1)*n.radius*.8,dur:.35,delay:a*.02});A({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),fe(n.x,n.y,.2,"arcane",70,6,.8,3),Co({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),ot(10);break;case"slash":A({type:"xslash",x:n.x,y:n.y,dur:.35}),fe(n.x,n.y,.5,"blood",20,4,.5,2,!1),fe(n.x,n.y,.5,"slash",14,4,.4),ot(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.proj)){const u=n.proj&&n.pkey||"A";if(u==="A"&&Oe[n.hero]){if(Kx.has(n.hero)||st.sfx("atk_"+n.hero,n.x,n.y,n.big?1:.8),!(n.proj&&Sc.has(n.hero+"_A")))try{Oe[n.hero](n)}catch(h){console.error(h)}break}if(u!=="A"&&Sc.has(n.hero+"_"+u))break;const f=u!=="A"?et[n.hero+"_"+u+"_hit"]:void 0;if(f){st.sfx("imp_"+n.hero+"_"+u,n.x,n.y,.9);try{f(n)}catch(h){console.error(h)}break}}const a=n.col&&Vr[n.col]?n.col:n.hero==="dragon"?"fire":"slash";A({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Vr[a][0]}),fe(n.x,n.y,.45,a,n.big?10:5,n.big?3:2,.35,1.5,!0,2),st.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&ot(2);break}case"shoot":if(n.kind==="hero"&&n.hero){st.sfx("shot_"+n.hero,n.x,n.y,.6);break}st.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":A({type:"jaws",x:n.x,y:n.y,dur:.35}),fe(n.x,n.y,.3,"bite",24,3,.5),ot(5);break;case"transform":{if(n.hero&&et[n.hero+"_T"]){st.sfx("tf_"+n.hero,n.x,n.y,1);try{et[n.hero+"_T"](n)}catch(f){console.error(f)}break}const a=n.kind==="fire",u=a?[255,140,50]:[255,220,90];A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:u}),A({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:a?"#ff9a3a":"#ffe070",w:6}),fe(n.x,n.y,.6,a?"fire":"gold",70,5,.9,3,!0,4),ot(n.uid===(e.player&&e.player.id)?10:4),st.sfx("roar",n.x,n.y,.8);break}case"levelup":A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),A({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":n.kind==="hero"?(n.sprite&&st.babble(n.sprite==="slime"&&(mt(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),fe(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),A({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),st.sfx("death",n.x,n.y)):n.kind==="minion"?(fe(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),st.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(fe(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),st.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let a=0;a<26;a++){const u=Math.random()*6.28,f=y(1.5,5);F(n.x+y(-.3,.3),n.y+y(-.3,.3),y(.8,2.2),Math.cos(u)*f,Math.sin(u)*f,y(3,9),y(1.2,2),Bn("stone"),Math.random()*4+4|0,14,!1,.97)}for(let a=0;a<14;a++)A({type:"puff",x:n.x+y(-1.2,1.2),y:n.y+y(-1.2,1.2),r:y(26,46),dur:y(1.2,2.2),col:[150,140,130]});A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),Co({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),st.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),st.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&st.say(n.monster==="serpent"?"serpent":"boss"),fe(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let a=0;a<30;a++)F(n.x,n.y,1,y(-4,4),y(-4,4),y(3,8),1.4,Bn("stone"),5,12,!1);A({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),A({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),ot(14);break;case"killbanner":{const a=e.player,u=a&&n.uid===a.id;if(A({type:"wisp",x:n.x,y:n.y,dur:1.6}),fe(n.x,n.y,.8,"gold",u?40:14,4,.9,3,!0,3),!n.hero)break;const f=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],h=n.big===1,c=n.big===2,d=n.dur||0,m=h?"first":n.skill>=2?"multi":c?"ace":d>=7?"godlike":d>=5?"unstoppable":d===4?"rampage":d===3?"spree":"kill",g=m==="multi"?f[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[m],x=a&&n.team===a.team;st.banner(g,x?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(h||c||n.skill>=2||u));const v=a&&a.heroKey===n.kind&&a.dead&&n.team!==a.team,M=["","","double","triple","quadra","penta"];st.say(m==="first"?"first_blood":m==="multi"?M[Math.min(5,n.skill)]:m==="kill"?v?"you_died":x?"kill":"ally_killed":m),u&&ot(6);break}case"runespawn":st.say("rune");break;case"chrono":A({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(a,u,f){a.globalAlpha=.35*(u>.9?(1-u)*10:1),it(f.x,f.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[h,c]=C(f.x,f.y,0);for(let d=0;d<12;d++){const m=d/12*6.283;a.fillStyle="#ffffff",a.fillRect(Math.round(h+Math.cos(m)*n.radius*46),Math.round(c+Math.sin(m)*n.radius*23),3,3)}}}),ot(5);break;case"hook_pull":A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),fe(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":A({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),fe(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),ot(3);break;case"pet_fade":if(Object.keys(et).some(a=>{if(!a.endsWith("_petfade"))return!1;try{return et[a](n)===!0}catch(u){return console.error(u),!1}}))break;fe(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":st.sfx("item_blink",n.x,n.y),fe(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),fe(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":st.sfx("item_shield",n.x,n.y,.7),A({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),fe(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":st.sfx("item_purge",n.x,n.y),A({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),fe(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":st.sfx("item_invis",n.x,n.y),fe(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":st.sfx("item_drum",n.x,n.y);for(let a=0;a<3;a++)A({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:a*.14});ot(3);break;case"item_freeze":st.sfx("item_freeze",n.ex,n.ey),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),fe(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const a=e.player;if(!a||n.team!==a.team)break;const u=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let f=0;f<3;f++)A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:u,w:4,delay:f*.18});A({type:"pingmark",x:n.x,y:n.y,dur:3,col:u,kind:n.kind}),st.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),fe(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),st.sfx("tower",n.ex,n.ey,.7);break;case"rooted":A({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const a=e.player&&e.winner===e.player.team;st.play(a?"victory":"defeat",1),st.say(a?"victory":"defeat")}else st.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":A({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}rl=1,lf=1,af=null}function Jx(e){for(const t of fr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);_s(fr,t=>t.life>0),fr.length>2500&&fr.splice(0,fr.length-2500);for(const t of qi)t.t+=e;_s(qi,t=>t.t<t.dur+(t.delay||0));for(const t of Vs)t.t+=e;_s(Vs,t=>t.t<t.dur);for(const t of lo)t.delay>0?t.delay-=e:t.life-=e;_s(lo,t=>t.life>0),b.cam.shake=Math.max(0,b.cam.shake-e*30)}let gu=6,ni=0;function t3(e,t,n,r,o,i){const{HW:s,HH:l,N:a,OX:u}=B,f=window.MAP,h=b.T;if(gu-=e,gu<=0&&(ni=y(.6,1),gu=y(8,16)),ni=Math.max(0,ni-e*.25),b.wind=.35+.15*Math.sin(h*.4)+ni,ni>.3&&Math.random()<ni*.9){const c=n+Math.random()*o,m=t-20-u,p=(m/s+c/l)/2,g=(c/l-m/s)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];Gn.push({k:"leaf",x:p,y:g,z:y(.4,2.2),ph:Math.random()*6,life:y(2.5,4),col:x,sp:y(9,15)})}if(Gn.length<70&&Math.random()<.8){const c=t+Math.random()*r,d=n+Math.random()*o,m=c-u,p=d,g=(m/s+p/l)/2,x=(p/l-m/s)/2;if(g>1&&x>1&&g<a-1&&x<a-1){const v=f.grid[Math.floor(x)][Math.floor(g)];v===0||v===4?Gn.push({k:"fly",x:g,y:x,z:y(.2,.9),ph:Math.random()*6,life:y(4,9),vx:y(-.3,.3),vy:y(-.3,.3)}):v===3&&Gn.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:y(.4,1),max:1})}}for(const c of Gn)c.life-=e,c.k==="leaf"&&(c.x+=c.sp*e*.5,c.y-=c.sp*e*.5,c.z+=Math.sin(h*6+c.ph)*.02),c.k==="fly"&&(c.vx+=y(-.6,.6)*e,c.vy+=y(-.6,.6)*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=Math.sin(h*2+c.ph)*.003);if(_s(Gn,c=>c.life>0),Gn.length>160&&Gn.splice(0,Gn.length-160),Math.random()<.1&&i.length){const c=i[Math.random()*i.length|0];if(c&&c.sprite.startsWith("prop_oak")){const[d,m]=C(c.x,c.y);d>t&&d<t+r&&m>n&&m<n+o+100&&F(c.x+y(-.4,.4),c.y+y(-.4,.4),1.4,y(-.3,.3),y(-.3,.3),-.25,4,c.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let D,Oa,to=null;function _c(e,t){D=Oa=e,to=t||null}function ce(e){if(!to){D.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(D===to)return;to.setTransform(Oa.getTransform()),to.globalAlpha=Oa.globalAlpha,to.globalCompositeOperation="lighter",to.imageSmoothingEnabled=!1,D=to}else D=Oa}function it(e,t,n,r,o,i=2,s){const{HW:l,HH:a}=B,[u,f]=C(e,t);D.beginPath(),D.ellipse(u,f,Math.max(.1,n*l*Math.SQRT2),Math.max(.1,n*a*Math.SQRT2),0,0,Math.PI*2),o&&(D.fillStyle=o,D.fill()),r&&(D.lineWidth=i,D.strokeStyle=r,s&&D.setLineDash(s),D.stroke(),D.setLineDash([]))}function xu(e,t,n){D.beginPath(),e.forEach(([r,o],i)=>{const[s,l]=C(r,o);i?D.lineTo(s,l):D.moveTo(s,l)}),D.closePath(),D.fillStyle=n,D.fill(),D.strokeStyle=t,D.lineWidth=2,D.stroke()}function e3(){for(const e of Vs){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];it(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&it(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&it(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function I1(e,t){if(!(t>1)){e.add&&ce(!0),D.save();try{e.draw(D,t,e)}catch(n){console.error(n)}D.restore(),e.add&&ce(!1)}}function gt(e){ce(e)}function Lt(){return D}function n3(){const{HW:e}=B;for(const t of qi){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&I1(t,r);continue}if(t.type==="ring")D.globalAlpha=Math.max(0,1-r),it(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),D.globalAlpha=1;else if(t.type==="cone"){const[o,i]=C(t.x,t.y),s=Math.atan2(t.uy,t.ux);D.save(),ce(!0),D.globalAlpha=Math.max(0,.75*(1-r)),D.beginPath(),D.moveTo(o,i);for(let f=0;f<=16;f++){const h=s-t.angle+2*t.angle*f/16,c=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=C(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c);D.lineTo(d,m)}D.closePath();const[l,a]=C(t.x+t.ux*t.range,t.y+t.uy*t.range),u=D.createLinearGradient(o,i,l,a);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),D.fillStyle=u,D.fill(),ce(!1),D.restore()}else if(t.type==="cracks"){D.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,D.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const s=o+(i/6-.5)*Math.min(t.angle,3)*1.6;D.beginPath();let[l,a]=C(t.x,t.y);D.moveTo(l,a);for(let u=1;u<=5;u++){const f=t.range*u/5,h=s+(nt(t.seed+i*7+u)-.5)*.6;[l,a]=C(t.x+Math.cos(h)*f,t.y+Math.sin(h)*f),D.lineTo(l,a)}D.stroke()}}else if(t.type==="flash"){const[o,i]=C(t.x,t.y,.3),s=t.r*e*1.3;ce(!0);const l=D.createRadialGradient(o,i,0,o,i,s);l.addColorStop(0,t.col+.8*(1-r)+")"),l.addColorStop(1,t.col+"0)"),D.fillStyle=l,D.fillRect(o-s,i-s,s*2,s*2),ce(!1)}else if(t.type==="streak"){const[o,i]=C(t.x,t.y,.4),[s,l]=C(t.ex,t.ey,.4);ce(!0),D.strokeStyle=t.col,D.globalAlpha=Math.max(0,.9*(1-r)),D.lineWidth=8*(1-r)+1,D.beginPath(),D.moveTo(o,i),D.lineTo(s,l),D.stroke(),D.globalAlpha=1,ce(!1)}else if(t.type==="puff"){const[o,i]=C(t.x,t.y,.3+r*.4),s=t.col;D.fillStyle=`rgba(${s[0]},${s[1]},${s[2]},${.5*(1-r)})`;const l=t.r*(.6+r*.7);D.beginPath(),D.ellipse(o,i,l,l*.75,0,0,7),D.fill()}}}function r3(){const e=b.T;for(const t of qi){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&I1(t,r);continue}const o=t.uid?mt(t.uid):null,i=o?o.x:t.x,s=o?o.y:t.y;if(t.type==="pillar"){const[l,a]=C(i,s),u=t.col,f=140*Math.min(1,r*4),h=Math.max(0,.6*(1-r));ce(!0);const c=D.createLinearGradient(l,a,l,a-f);c.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${h})`),c.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),D.fillStyle=c,D.fillRect(l-18,a-f,36,f),ce(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[l,a]=C(i,s,.35),u=t.col;ce(!0),D.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,D.lineWidth=2,D.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,D.beginPath(),D.ellipse(l,a,34,38,0,0,7),D.fill(),D.stroke();for(let f=0;f<6;f++){const h=e*1.5+f*1.05;D.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,D.fillRect(l+Math.cos(h)*30-1,a+Math.sin(h)*34-1,3,3)}ce(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[l,a]=C(i,s,.3);D.strokeStyle="rgba(160,255,190,0.7)",D.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;D.beginPath(),D.ellipse(l,a,26,12,0,f,f+1.4),D.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[l,a]=C(i,s);D.strokeStyle="#4a7a2a",D.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;D.beginPath(),D.moveTo(l+Math.cos(f)*16,a+Math.sin(f)*7),D.quadraticCurveTo(l+Math.cos(f)*22,a-18,l+Math.cos(f+1.2)*6,a-30),D.stroke()}D.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;D.fillRect(l+Math.cos(f)*14-2,a-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[l,a]=C(t.x,t.y,3*(1-r));ce(!0),D.strokeStyle="rgba(240,200,255,0.9)",D.lineWidth=4,D.beginPath(),D.moveTo(l-18,a-50),D.lineTo(l,a),D.stroke(),D.fillStyle="#ffffff",D.fillRect(l-3,a-3,6,6),ce(!1)}else if(t.type==="xslash"){const[l,a]=C(t.x,t.y,.5),u=40*Math.min(1,r*3);D.globalAlpha=Math.max(0,1-r),D.strokeStyle="#ffffff",D.lineWidth=6,D.beginPath(),D.moveTo(l-u,a-u),D.lineTo(l+u,a+u),D.moveTo(l+u,a-u),D.lineTo(l-u,a+u),D.stroke(),D.strokeStyle="#ff4040",D.lineWidth=2,D.stroke(),D.globalAlpha=1}else if(t.type==="spark"){const[l,a]=C(t.x,t.y,.45),u=(t.big?16:10)*(1-r);ce(!0),D.fillStyle=t.col,D.fillRect(l-u,a-1,u*2,3),D.fillRect(l-1,a-u,3,u*2),D.fillRect(l-u*.5,a-u*.5,u,u),ce(!1)}else if(t.type==="jaws"){const[l,a]=C(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));D.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",D.lineWidth=5,D.beginPath(),D.arc(l,a-u,24,.2,Math.PI-.2),D.stroke(),D.beginPath(),D.arc(l,a+u,24,Math.PI+.2,-.2),D.stroke()}else if(t.type==="pingmark"){const[l,a]=C(t.x,t.y,.9+Math.sin(e*6)*.05);o3(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),D.beginPath(),D.moveTo(l,a+14),D.lineTo(l-9,a-2),D.arc(l,a-6,10,Math.PI*.85,Math.PI*.15),D.closePath(),D.fill(),D.stroke(),D.fillStyle="#120c1a",D.font="bold 13px sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",l,a-6),D.globalAlpha=1}else if(t.type==="wisp"){const[l,a]=C(t.x,t.y,.5+r*2);ce(!0),D.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",D.beginPath(),D.arc(l+Math.sin(r*12)*6,a,7,0,7),D.fill(),ce(!1)}}}function o3(e,t){D.globalAlpha=t,D.fillStyle=e,D.strokeStyle="#120c1a",D.lineWidth=2}function i3(){const{HW:e,HH:t,OX:n,ZK:r}=B;for(const o of fr){if(o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r;D.globalAlpha=Math.min(1,o.life/o.max*1.5),D.fillStyle=o.col,D.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}D.globalAlpha=1,ce(!0);for(const o of fr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r,l=Math.min(1,o.life/o.max*1.5);D.globalAlpha=l*.35,D.fillStyle=o.col,D.fillRect(Math.round(i-o.size),Math.round(s-o.size),o.size*2,o.size*2),D.globalAlpha=l,D.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}D.globalAlpha=1,ce(!1)}function s3(){const e=b.T,{HW:t,HH:n,OX:r,ZK:o}=B;for(const i of Gn){if(i.k!=="leaf")continue;const s=(i.x-i.y)*t+r,l=(i.x+i.y)*n-i.z*o,a=Math.abs(Math.sin(e*8+i.ph))*4+1;D.fillStyle="#00000040",D.fillRect(s-a/2+2,l+2,a,3),D.fillStyle=i.col,D.fillRect(s-a/2,l,a,3)}ce(!0);for(const i of Gn){if(i.k==="leaf")continue;const s=(i.x-i.y)*t+r,l=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const a=.5+.5*Math.sin(e*3+i.ph);D.fillStyle=`rgba(210,255,120,${.25*a})`,D.fillRect(s-3,l-3,6,6),D.fillStyle=`rgba(250,255,200,${.9*a})`,D.fillRect(s-1,l-1,2,2)}else{const a=Math.max(0,Math.sin(i.life*Math.PI));D.fillStyle=`rgba(255,255,255,${.7*a})`,D.fillRect(s-1,l,3,1),D.fillRect(s,l-1,1,3)}}ce(!1)}function a3(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function l3(){const{HW:e,HH:t}=B,n=b.T;for(const r of b.game.projs){const o=r.z||.45,[i,s]=C(r.x,r.y,o),l=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),a=a3(r.look||r.fx),u=a?Fe[a]:void 0;if(u){D.save();try{u(D,r,i,s,l,n)}catch(h){console.error(h)}D.restore(),ce(!1);continue}const f=Vr[r.fx]||Vr.arcane;if(r.fx==="arrow"||r.fx==="spear"){const h=r.fx==="arrow"?r.skill?26:16:12;D.save(),D.translate(i,s),D.rotate(l),D.fillStyle="#3a2a1a",D.fillRect(-h,-2,h,4),D.fillStyle="#e8d8b0",D.fillRect(-h,-1,h,2),D.fillStyle="#ffffff",D.beginPath(),D.moveTo(5,0),D.lineTo(-2,-4),D.lineTo(-2,4),D.fill(),D.fillStyle="#e05050",D.fillRect(-h-3,-3,5,2),D.fillRect(-h-3,1,5,2),D.restore(),r.skill&&F(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")D.save(),D.translate(i,s),D.rotate(n*25),D.fillStyle="#1a1020",D.fillRect(-9,-3,18,6),D.fillStyle="#e0e8f0",D.fillRect(-8,-2,14,4),D.fillStyle="#c8a040",D.fillRect(-10,-3,4,6),D.restore();else if(r.fx==="root")D.fillStyle="#5a3a20",D.beginPath(),D.arc(i,s,7,0,7),D.fill(),D.fillStyle="#8ad050",D.beginPath(),D.arc(i+3,s-3,4,0,7),D.fill(),F(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const h=r.skill?10:6;ce(!0);const c=D.createRadialGradient(i,s,0,i,s,h*2.4);c.addColorStop(0,f[1]),c.addColorStop(.4,f[2]+"aa"),c.addColorStop(1,f[3]+"00"),D.fillStyle=c,D.fillRect(i-h*2.4,s-h*2.4,h*4.8,h*4.8),ce(!1),D.fillStyle=f[0],D.fillRect(i-3,s-3,6,6),Math.random()<.8&&F(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const eo=Math.round,ol=Math.PI*2,pr=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(eo(t-r/2),eo(n-r/2),r,r)},z1=e=>!!(b.game&&b.game.player&&e.uid===b.game.player.id);et.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];A({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=mt(o.uid),s=i?i.x:o.x,l=i?i.y:o.y,[a,u]=C(s,l,.9),f=Math.min(1,r*3),h=r>.7?1-(r-.7)/.3:1;n.globalAlpha=h;for(const c of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+c*(.35+d*.22*f),p=(26+d*7)*f;for(let g=0;g<p;g+=3){const x=g/Math.max(1,p),v=Math.sin(b.T*18+d+g*.3)*2;pr(n,a+Math.cos(m)*g+v*c,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let c=0;c<14;c++){const d=c/14*ol+r*9,m=18+c%3*6,p=-r*70-c*3;pr(n,a+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[c%4])}}});for(let n=0;n<40;n++){const r=Math.random()*ol,o=y(1,3.5);F(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,y(2,5),y(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}ot(z1(e)?9:3)};et.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];A({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=mt(o.uid),s=i?i.x:o.x,l=i?i.y:o.y,[a,u]=C(s,l,1.6),f=Math.min(1,r*2.5),h=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*h;const c=4,d=a,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((v,M)=>{v!=="."&&pr(n,d+(M-7)*c,m+(x-5)*c,c,v==="N"?t[4]:v==="o"?t[0]:t[1+(M+x)%2])})),r>.15&&r<.6)for(let g=0;g<3;g++){const x=40+((r-.15)*300+g*22)%90;for(let v=-.9;v<=.9;v+=.12)pr(n,d+Math.cos(v-Math.PI/2)*x,m-10+Math.sin(v-Math.PI/2)*x*.6,3,t[2])}}}),A({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=mt(o.uid),[s,l]=C(i?i.x:o.x,i?i.y:o.y),a=10,u=Math.min(1,r*2.2);for(let f=0;f<a;f++){const h=f/a*ol,c=(1-u)*120+30,d=s+Math.cos(h)*c,m=l+Math.sin(h)*c*.5;n.fillStyle=t[3],n.fillRect(eo(d-6),eo(m-4),12,8),n.fillStyle=t[1],n.fillRect(eo(d-5),eo(m-3),10,3),n.fillStyle=t[0],n.fillRect(eo(d-1),eo(m-1),2,2)}}}),ot(z1(e)?10:4)};et.erizo_Q_hit=e=>{A({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.5);for(let s=0;s<9;s++){const l=-Math.PI*.85+s*.21,a=6+22*Math.min(1,n*3);for(let u=0;u<a;u+=2)pr(t,o+Math.cos(l)*u,i+Math.sin(l)*u*.7,u<a*.3?3:2,u>a*.8?"#e8643a":u<a*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,pr(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)F(e.x,e.y,.5,y(-2,2),y(-2,2),y(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};et.polilla_Q_hit=e=>{A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.7);t.globalAlpha=1-n;for(let s=0;s<2;s++){const l=8+n*(30+s*14);for(let a=.4;a<ol-.4;a+=.18)pr(t,o+Math.cos(a+s)*l,i+Math.sin(a+s)*l*.5,2,s?"#c8e8ff":"#f4f0ff")}for(let s=0;s<3;s++){const l=o+Math.sin(n*6+s*2)*10+(s-1)*12,a=i-10-n*40-s*8,u=2;for(let f=0;f<4;f++)pr(t,l+f*u,a,u,"#fff6c8"),pr(t,l+f*u,a+3*u,u,"#fff6c8"),pr(t,l+(3-f)*u,a+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)F(e.x,e.y,.6,y(-1,1),y(-1,1),y(.5,1.5),y(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const Nn=Math.round,vt={x:0,y:0};function Ke(e,t,n=0){vt.x=(e-t)*B.HW+B.OX,vt.y=(e+t)*B.HH-n*B.ZK}const Pn=e=>e*B.HW*Math.SQRT2,ir=e=>e*B.ZK,Fa=(e,t)=>Math.sqrt(2*B.HH*B.HH*e*e+B.ZK*B.ZK*t*t);function Sr(e,t,n){const r=2*B.HH/B.ZK;return(e+t+r*n)/Math.sqrt(2+r*r)}const u3=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Ac=new WeakMap;function Pt(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let r=Ac.get(e);r||(r=new Map,Ac.set(e,r));const o=t+"|"+n;let i=r.get(o);if(!i){const s=document.createElement("canvas");s.width=s.height=8;const l=s.getContext("2d");l.fillStyle=t;for(let a=0;a<16;a++)u3[a]<n&&l.fillRect((a&3)*2,(a>>2)*2,2,2);i=e.createPattern(s,"repeat")||t,r.set(o,i)}return i}function uf(e,t,n,r,o,i,s,l,a=2){if(r<2||l<=0)return;const u=r*.5,f=s.length,h=Nn(n-o),c=Nn(i?n+u:n);for(let d=h;d<c;d+=a){const m=d+a/2-n,p=m<0?r*Math.sqrt(Math.max(0,1-m/o*(m/o))):r*Math.sqrt(Math.max(0,1-m/u*(m/u))),g=!i&&m>-u?r*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-g<.5)continue;const x=m/o*(m/o);for(let v=0;v<f;v++){const M=s[v];let S=r*Math.sqrt(Math.max(0,M.u0*M.u0-x)),w=v+1<f?r*Math.sqrt(Math.max(0,s[v+1].u0*s[v+1].u0-x)):p;if(S<g&&(S=g),w>p&&(w=p),w-S<.5)continue;e.globalAlpha=l*M.a,e.fillStyle=M.fill;const _=Nn(t-w),T=Nn(t-S),R=Nn(t+S),z=Nn(t+w);T>_&&e.fillRect(_,d,T-_,a),z>R&&e.fillRect(R,d,z-R,a)}}}function qr(e,t,n,r,o,i,s,l,a,u,f=2){const h=Math.max(r,o);if(h<2||u<=0||i<1)return;const c=n-i,d=r*.5,m=o*.5,p=l.length,g=a.length,x=s?1:-1;for(let v=-h;v<h;v+=f){const M=Math.abs(v+f/2),S=M/h;let w,_;if(M<=o?w=c+x*m*Math.sqrt(1-M/o*(M/o)):w=c+(M-o)/(r-o)*i,M<=r?_=n+x*d*Math.sqrt(1-M/r*(M/r)):_=n-(M-r)/(o-r)*i,_<w){const O=w;w=_,_=O}let T=0;for(;T+1<p&&S>=l[T+1].u0;)T++;const R=l[T];e.fillStyle=R.fill;const z=Nn(t+v),I=_-w;for(let O=0;O<g;O++){const U=Nn(_-I*(O+1)/g),X=Nn(_-I*O/g);X<=U||a[O]<=0||(e.globalAlpha=u*R.a*a[O],e.fillRect(z,U,f,X-U))}}}function kr(e,t,n,r,o,i,s,l,a){for(let u=0;u<i;u++){const f=l+u/i*Math.PI*2,h=Math.cos(f),c=Math.sin(f);a&&(h+c>0?1:-1)!==a||(Ke(t+h*o,n+c*o,r),e.fillRect(Nn(vt.x-s/2),Nn(vt.y-s/2),s,s))}}function Zo(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,r=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:r,id:-1,t0:b.T,endAt:b.T+t,found:!1,nl:0,fr:-1,rem:t}}function sn(e){if(e.fr===b.T)return e.rem;e.fr=b.T;const t=b.game;let n=null;if(t&&t.zones){for(const r of t.zones)if(e.id>=0?r.id===e.id:Math.abs(r.x-e.x)<.16&&Math.abs(r.y-e.y)<.16&&(!e.look||!r.look||String(r.look)===e.look)){n=r;break}}if(n){const r=b.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=r):r<e.endAt&&(e.endAt=r),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,b.T));return e.rem=e.endAt-b.T,e.rem}function Kr(e,t,n,r,o,i){b.T<e.nl||(e.nl=b.T+.1,se(t,n,r,o,i*.75,.22))}const Fs=e=>e<0?0:e>1?1:e,j=Math.round,Xe=Math.PI*2;let Nt=0,Xt=0;function _e(e,t,n=0){Nt=(e-t)*B.HW+B.OX,Xt=(e+t)*B.HH-n*B.ZK}function Ze(e,t,n,r,o){e.fillStyle=o,e.fillRect(j(t-r/2),j(n-r/2),r,r)}function ff(e,t,n,r,o,i,s){const l=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let a=0;a<=l;a++)e.fillRect(j(t+(r-t)*a/l-i/2),j(n+(o-n)*a/l-i/2),i,i)}function Yi(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(j(t-s/2),j(n+i*o),j(s),Math.max(1,j(2*o)))}}function Ri(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let s=-r;s<r;s+=2){const l=Math.abs(s+1),a=l<=r/2?r*.866:r*.866*(r-l)/(r/2);a<.5||n+s<i||e.fillRect(j(t-a),j(n+s),j(a*2),2)}}function f3(e,t,n,r,o){e.fillStyle=o,e.fillRect(j(t-r),j(n-1),r*2,2),e.fillRect(j(t-1),j(n-r),2,r*2)}function cf(e,t,n){e.fillStyle=rt.l,e.fillRect(j(t-1),j(n-4),2,2),e.fillStyle=rt.o,e.fillRect(j(t-2),j(n-2),4,4),e.fillStyle=rt.w,e.fillRect(j(t-1),j(n-2),2,2)}const nr=e=>e<0?0:e>1?1:e,yo=e=>1-(1-e)*(1-e),rt={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},Pi="#2a1e14",c3="#eaf8ff",h3="#b8e0ff",il="#ff9ac8",v0="#9a5ad8",d3="#9a7a48";function O1(e,t,n,r,o){const i=b.game;if(!i)return null;let s=null,l=o*o;for(const a of i.units){if(a.dead||!n||(r?a.team!==n:a.team===n))continue;const u=(a.x-e)*(a.x-e)+(a.y-t)*(a.y-t);u<l&&(l=u,s=a)}return s}function m3(e,t,n,r,o){e.fillStyle=o?c3:h3,o?(e.fillRect(j(t-3*r-2),j(n-9),4,5),e.fillRect(j(t+1*r-1),j(n-8),3,4)):(e.fillRect(j(t-5*r-2),j(n-5),5,3),e.fillRect(j(t+2*r-2),j(n-5),4,3)),e.fillStyle=rt.y,e.fillRect(j(t-5),j(n-3),10,6),e.fillStyle=Pi,e.fillRect(j(t-2*r-1),j(n-3),2,6),e.fillRect(j(t+1*r),j(n-3),2,6),e.fillRect(j(t+5*r-(r>0?1:2)),j(n-2),3,4),e.fillRect(j(t-6*r-1),j(n-1),2,2)}et.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;A({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,s){_e(r,o,.6);const l=26*(1-yo(s))+4;i.globalAlpha=1-s*.5;for(let a=0;a<14;a++){const u=a/14*Xe+s*3;Ze(i,Nt+Math.cos(u)*l,Xt+Math.sin(u)*l*.6,3,a&1?Pi:rt.y)}s>.6&&(i.fillStyle=v0,i.fillRect(j(Nt-2),j(Xt-2),4,4))}});for(let i=0;i<6;i++)F(r,o,.6,t*y(1,3)+y(-.6,.6),n*y(1,3)+y(-.6,.6),y(0,.6),.3,i&1?rt.y:rt.l,2,0,!0)};Fe.abeja_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=-l,u=s,f=i*30|0;for(let h=3;h<17;h++){const c=h*3.5,d=(h+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-h/17,e.fillStyle=h&1?rt.l:rt.y,e.fillRect(j(n-s*c+a*m*5),j(r-l*c+u*m*5),2,2)}e.globalAlpha=1;for(let h=0;h<=14;h++){const c=n+s*(8-h)*1.6,d=r+l*(8-h)*1.6;if(h<=1)Ze(e,c,d,2,rt.w);else if(h<=8)Ze(e,c,d,2,rt.b),(h===4||h===7)&&(Ze(e,c-s*2+a*2,d-l*2+u*2,2,rt.b),Ze(e,c-s*2-a*2,d-l*2-u*2,2,rt.b));else{const m=h-9>>1&1?Pi:rt.y,p=h===9||h===14?1:2;for(let g=-p;g<=p;g++)Ze(e,c+a*g*2,d+u*g*2,2,m)}}f&2&&Ze(e,n+s*15,r+l*15+2,2,v0)};et.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=mt(e.uid),o=O1(t,n,r?r.team:void 0,!1,.9);A({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,s,l){const a=l.vid?mt(l.vid):null,u=s*1.8;if(a&&a.dead){l.t=l.dur+1;return}_e(a?a.x:t,a?a.y:n,1.5);const f=Nt,h=Xt,c=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=j(11*c);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Ri(i,f,h,d,rt.d),Ri(i,f,h,d-2,rt.y),Ri(i,f,h,d-2,rt.o,h+d*.35),i.fillStyle=rt.w,i.fillRect(j(f-d*.5),j(h-d*.5),3,2),ff(i,f-4,h-4,f+4,h+4,2,Pi),ff(i,f+4,h-4,f-4,h+4,2,Pi);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,g=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let v=-2;v<=2;v++){const M=(x>0?0:Math.PI)+v*.28;Ze(i,f+Math.cos(M)*g,h+Math.sin(M)*g,2,rt.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,cf(i,f-4,h+d+m*22),cf(i,f+3,h+d+m*14)}}});for(let i=0;i<8;i++)F(t,n,.5,y(-2,2),y(-2,2),y(.6,1.8),y(.3,.5),i&1?Pi:rt.y,2,6,!1,.9);for(let i=0;i<4;i++)F(t,n,.6,y(-.8,.8),y(-.8,.8),y(1,2),.5,v0,3,5,!0);ot(2)};et.abeja_W=e=>{if(e.type==="heal"){p3(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,s){const l=.3+(r-.3)*yo(nr(s*1.5));i.globalAlpha=s>.55?(1-s)/.45:1;for(let a=0;a<44;a++){const u=a/44*Xe,f=l*(1+Math.sin(u*6+s*9+o)*.045);_e(t+Math.cos(u)*f,n+Math.sin(u)*f),Ze(i,Nt,Xt,5,rt.o),Ze(i,Nt,Xt-2,3,rt.l),a%4===0&&(i.fillStyle=rt.d,i.fillRect(j(Nt-1),j(Xt+2),2,j(2+6*s)))}}}),A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,s){const l=nr(s/.6);for(let a=0;a<8;a++){const u=a/8*Xe+o,f=r*(.6+.3*nt(o+a))*l;_e(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(l*Math.PI)*1.4),l<1?(i.globalAlpha=1,cf(i,Nt,Xt)):(i.globalAlpha=1-(s-.6)/.4,i.fillStyle=rt.o,i.fillRect(j(Nt-5),j(Xt-1),10,2),i.fillStyle=rt.l,i.fillRect(j(Nt-2),j(Xt-2),4,1))}}});for(let i=0;i<12;i++){const s=Math.random()*Xe;F(t,n,.8,Math.cos(s)*y(.5,2),Math.sin(s)*y(.5,2),y(.5,1.5),y(.5,.9),i%3?rt.l:rt.w,2,-.5,!0)}};function p3(e){const t=e.x,n=e.y,r=O1(t,n,e.team,!0,.6);A({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,s){const l=s.vid?mt(s.vid):null,a=l?l.x:t,u=l?l.y:n,f=i*1;_e(a,u,.55);const h=Nt,c=Xt;_e(a,u,2.6);const d=Xt,m=c-d;if(f>.15){_e(a,u);const x=nr((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=rt.o,Yi(o,Nt,Xt,j(16*x),.45),o.fillStyle=rt.l,o.fillRect(j(Nt-6*x),j(Xt-3),j(6*x),2)}const p=nr(f/.15)*m,g=f>.45?nr((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=j(g);x<p;x+=3){const v=x/m*(x/m),M=Math.sin(x*.22-b.T*9)*6*v;o.fillStyle=rt.o,o.fillRect(j(h+M-2),j(d+x),4,3),o.fillStyle=rt.l,o.fillRect(j(h+M-2),j(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const v=(f-.35-x*.08)/.55;v<0||v>1||(o.globalAlpha=1-v,f3(o,h+(x-1)*12,c-10-v*30,4,x&1?rt.y:rt.l))}}});for(let o=0;o<5;o++)F(t,n,.4,y(-.5,.5),y(-.5,.5),y(.8,1.6),y(.6,.9),o&1?rt.l:rt.w,2,-.5,!0)}const ls=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];et.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,s=[1,4,6],l=s.map((a,u)=>u/3*Xe+r);A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(a,u){const f=u*i,h=yo(nr(f/.25)),c=f>1.15?nr((f-1.15)/.5):0;_e(t,n,.55*h-c*.4);const d=Nt,m=Xt;a.globalAlpha=1-c;for(let p=0;p<ls.length;p++){const g=d+ls[p][0],x=m+ls[p][1]*h,v=8;Ri(a,g,x,v,rt.d),Ri(a,g,x,v-2,rt.cell);const M=nr((f-.08-p*.04)/.3),S=s.indexOf(p)>=0&&f>o;!S&&M>0&&(Ri(a,g,x,v-2,rt.o,x+(v-2)-M*2*(v-2)),a.fillStyle=rt.l,a.fillRect(j(g-3),j(x-3),2,2)),!S&&f>.4&&s.indexOf(p)>=0&&(a.fillStyle=rt.y,a.fillRect(j(g-4),j(x-1),8,3))}}}),A({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(a,u){_e(t,n,.55);const f=Nt,h=Xt,c=(b.T*30|0)&1;for(let d=0;d<3;d++){const m=f+ls[s[d]][0],p=h+ls[s[d]][1];_e(t+Math.cos(l[d])*1.1,n+Math.sin(l[d])*1.1,.6);const g=Nt,x=Xt,v=_=>{const T=Math.sin(_*Math.PI);return[m+(g-m)*_+Math.cos(_*Xe*1.5+d)*12*T,p+(x-p)*_+Math.sin(_*Xe*1.5+d)*8*T-T*18]},M=yo(u);for(let _=1;_<7;_++){const T=M-_*.04;if(T<0)break;const R=v(T);a.globalAlpha=(1-_/7)*.8,a.fillStyle=rt.l,a.fillRect(j(R[0]),j(R[1]),2,2)}const S=v(M),w=v(Math.max(0,M-.02));a.globalAlpha=u>.8?(1-u)/.2:1,m3(a,S[0],S[1],S[0]>=w[0]?1:-1,!!c)}}}),A({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(a,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<9;h++)F(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1,2),y(.4,.6),h%3?rt.y:rt.d,2,6,!1,.9)}}}),A({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(a,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<14;h++)F(t+y(-.3,.3),n+y(-.3,.3),y(.2,.7),y(-.6,.6),y(-.6,.6),y(0,.5),y(.5,.8),h%3?rt.d:rt.o,3,4,!1,.9)}}});for(let a=0;a<8;a++)F(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(.3,1),.5,"#c8a878",3,3,!1,.9);ot(2)};const Es=new Map;et.abeja_R=e=>{e.type==="channel"?y3(e):e.type==="channel_tick"?x3(e):e.type==="channel_end"&&M3(e)};function y3(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,s=2,l=Math.random()*99,a={endT:-1},u=b.T,f={n:0};Es.size>16&&Es.clear(),Es.set(r,a);const h=m=>{if(a.endT<0&&b.mode!=="guest"&&m.t>.1){const g=mt(r);(!g||!g.channel)&&(a.endT=b.T)}if(a.endT<0)return 1;const p=1-(b.T-a.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=h(g);if(x<=0)return;const v=p*i,M=yo(nr(v/.4)),S=l+v*.3;m.globalAlpha=x;for(let w=0;w<8;w++){const _=S+w/8*Xe,T=Math.cos(_),R=Math.sin(_);for(let z=0;z<10;z++){const I=z/9,O=(.15+I*.95)*M,U=Math.sin(I*Math.PI)*.24*M;for(let X=-1;X<=1;X++)_e(t+T*O-R*U*X,n+R*O+T*U*X),Ze(m,Nt,Xt,6,X===0&&I<.8?rt.l:I>.85?rt.d:rt.y)}}_e(t,n),m.fillStyle=rt.o,Yi(m,Nt,Xt,j(12*M),.5),m.fillStyle=il,Yi(m,Nt,Xt,j(6*M),.5)}});const c=g3(o,l);A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,g){const x=h(g);x<=0||(Tc(m,c,t,n,o,s,b.T-u,x,!1),b.T>=f.n&&(f.n=b.T+.1,se(t,n,o*1.05,16760896,.5*x,.22)))}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,g){const x=h(g);if(x<=0)return;const v=p*i,M=yo(nr(v/.5)),S=v*.25;m.globalAlpha=.55*x;for(let z=0;z<56;z++){const I=z/56*Xe+S;_e(t+Math.cos(I)*o,n+Math.sin(I)*o),Ze(m,Nt,Xt,z&1?2:3,z&1?rt.l:rt.y)}_e(t,n);const w=Nt,_=Xt,T=o*B.HW*Math.SQRT2,R=Math.sqrt(2*B.HH*B.HH*o*o+B.ZK*B.ZK*s*s*M*M);for(let z=0;z<=90;z++){const I=Math.PI+z/90*Math.PI,O=((z/90-v*.35)%1+1)%1,U=Math.max(0,1-Math.min(O,1-O)*7);m.globalAlpha=x*(.35+.6*U),Ze(m,w+Math.cos(I)*T,_+Math.sin(I)*R,U>.4?3:2,U>.4?rt.w:rt.y)}m.globalAlpha=x;for(let z=0;z<6;z++){const I=b.T*2.4+z/6*Xe;_e(t+Math.cos(I)*.7,n+Math.sin(I)*.7,.9+Math.sin(b.T*4+z)*.2),Ze(m,Nt,Xt,2,z&1?rt.w:il)}}});const d=26;A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=h(g);if(x<=0)return;const v=p*i;if(!(v<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const w=nt(M*3.7+l)*.65,_=Math.floor((v+w)/.65),T=(v+w)%.65/.65,R=nt(M*13.1+_)*Xe,z=Math.sqrt(nt(M*5.3+_*1.7))*o*.9,I=t+Math.cos(R)*z,O=n+Math.sin(R)*z;if(T<.85)_e(I,O,s*.92*Math.sqrt(Math.max(0,1-z/o*(z/o)))*(1-T/.85)),m.fillStyle=rt.o,m.fillRect(j(Nt-1),j(Xt-2),2,4),m.fillStyle=rt.l,m.fillRect(j(Nt-1),j(Xt-4),2,2);else{_e(I,O);const U=(T-.85)/.15;m.fillStyle=rt.o,m.fillRect(j(Nt-2-U*4),j(Xt),3,2),m.fillRect(j(Nt+U*4),j(Xt),3,2)}}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,g){const x=h(g);x<=0||Tc(m,c,t,n,o,s,b.T-u,x,!0)}})}function g3(e,t){const r=[],o=[],i=[],s=[],l=[],a=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*a,h=Math.max(5,j(Math.max(16,e*5.6)*Math.cos(f)));for(let c=0;c<h;c++)r.push((c+(u&1)*.5)/h*Xe),o.push(f),i.push(u),l.push(Xe/h),s.push(.35+u*.42+nt(t+c*7.1+u*13.3)*.45)}return{a:Float32Array.from(r),ph:Float32Array.from(o),row:Uint8Array.from(i),fill:Float32Array.from(s),da:Float32Array.from(l),dph:a,n:r.length}}const ri=new Float32Array(12);function Tc(e,t,n,r,o,i,s,l,a){const{HW:u,HH:f,ZK:h}=B,c=2*f/h,d=Math.sqrt(2+c*c);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let g=0;g<t.n;g++){const x=t.row[g],v=yo(nr((s-.05-x*.07)/.28));if(v<=.02)continue;const M=s>t.fill[g];if(m===0&&M||m===1&&!M)continue;const S=t.a[g],w=t.ph[g],_=Math.cos(S),T=Math.sin(S),R=Math.cos(w),z=Math.sin(w),I=_*R/o,O=T*R/o,U=z/i;if((I+O+c*U)/d>0!==a)continue;const X=n+_*R*o,N=r+T*R*o,Q=z*i,k=(X-N)*u+B.OX,E=(X+N)*f-Q*h,L=.5*.86*v,G=t.da[g]*R*o*L,$=t.dph*L*1.12,V=(-T-_)*G*u,q=(-T+_)*G*f,ut=-z*_*o,Tt=-z*T*o,At=R*i,de=(ut-Tt)*$*u,oe=((ut+Tt)*f-At*h)*$;for(let Et=0;Et<6;Et++){const Be=Et*Math.PI/3+Math.PI/6,re=Math.cos(Be),jr=Math.sin(Be)*1.15;ri[Et*2]=j(k+re*V+jr*de),ri[Et*2+1]=j(E+re*q+jr*oe)}e.moveTo(ri[0],ri[1]);for(let Et=1;Et<6;Et++)e.lineTo(ri[Et*2],ri[Et*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=l*(a?.55:.5),e.fillStyle=Pt(e,a?rt.l:rt.d,a?3:4),e.fill();else if(m===1){const g=.85+.15*Math.sin(s*5);e.globalAlpha=l*(a?.62:.55)*g,e.fillStyle=Pt(e,a?rt.y:rt.o,a?7:9),e.fill()}else e.globalAlpha=l*(a?.95:.55),e.strokeStyle=a?rt.d:rt.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(a){e.globalAlpha=l*.9,e.fillStyle=rt.w;for(let m=0;m<t.n;m++){if(s<=t.fill[m]+.1)continue;const p=t.a[m],g=t.ph[m],x=Math.cos(p),v=Math.sin(p),M=Math.cos(g),S=Math.sin(g);(x*M/o+v*M/o+c*S/i)/d<=0||(_e(n+x*M*o,r+v*M*o,S*i),e.fillRect(j(Nt-7),j(Xt-6),3,2))}}}function x3(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;A({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(l,a){const u=.4+(r-.4)*yo(a);l.globalAlpha=(1-a)*.85;for(let f=0;f<6;f++){const h=f/6*Xe+Math.PI/6,c=(f+1)/6*Xe+Math.PI/6;_e(t+Math.cos(h)*u,n+Math.sin(h)*u);const d=Nt,m=Xt;_e(t+Math.cos(c)*u,n+Math.sin(c)*u),ff(l,d,m,Nt,Xt,3,f&1?rt.y:rt.l)}}});const i=b.game;if(!i)return;let s=0;for(const l of i.units)if(!(l.dead||l.kind==="tower"||l.kind==="nexus"||(l.x-t)*(l.x-t)+(l.y-n)*(l.y-n)>r*r)){if(l.team===o){if(l.kind==="hero")for(let a=0;a<2;a++)F(l.x+y(-.3,.3),l.y+y(-.3,.3),.5,0,0,y(1,1.6),.6,a?rt.l:rt.w,2,0,!0)}else if(s<8){s++;const a=l.x,u=l.y;A({type:"custom",layer:"ground",dur:.6,x:a,y:u,draw(f,h){_e(a,u),f.globalAlpha=.8*(1-h),f.fillStyle=rt.d,Yi(f,Nt,Xt,13,.45),f.fillStyle=rt.o,Yi(f,Nt-2,Xt-1,9,.45),f.fillStyle=rt.l,f.fillRect(j(Nt-5),j(Xt-3),3,2),f.fillRect(j(Nt-8),j(Xt-10+h*8),2,j(8-h*6)),f.fillRect(j(Nt+7),j(Xt-8+h*6),2,j(6-h*4))}})}}}function M3(e){const t=Es.get(e.uid);t&&t.endT<0&&(t.endT=b.T),Es.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*Xe;F(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*y(2,3.5),Math.sin(i)*y(2,3.5),y(1.5,3),y(.6,.9),o&1?rt.y:rt.l,4,3,!0,.93)}for(let o=0;o<12;o++)F(n,r,.8,y(-1,1),y(-1,1),y(1,2.5),y(.5,.9),o&1?il:rt.w,2,0,!0);A({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){_e(n,r),o.globalAlpha=1-i,o.fillStyle=rt.l,Yi(o,Nt,Xt,j(20+i*90),.5)}}),ot(3)}else{for(let o=0;o<10;o++){const i=o/10*Xe;F(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,y(.2,.6),y(.7,1),o&1?d3:rt.d,4,1.5,!1,.9)}st.sfx("deny",n,r,.35)}}Fe.abeja_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=-l,u=s,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?rt.l:rt.y,e.fillRect(j(n-s*p+a*g-1),j(r-l*p+u*g-1),2,2)}e.globalAlpha=1;const h=Math.sin(i*20+f)*3,c=n+a*h,d=r+u*h;for(let m=0;m<8;m++){const p=m/8*Xe+i*6;Ze(e,c+Math.cos(p)*5,d+Math.sin(p)*5,2,rt.o)}e.fillStyle=rt.y,e.fillRect(j(c-3),j(d-3),6,6),e.fillStyle=rt.w,e.fillRect(j(c-2),j(d-2),2,2)};Oe.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Xe;A({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,s){_e(t,n,.45);const l=s<.25?.5+s*2.6:1.15-(s-.25)*.2,a=(r?7:5)*l;i.globalAlpha=s>.5?(1-s)/.5:1;for(let f=0;f<5;f++){const h=o+f/5*Xe;Ze(i,Nt+Math.cos(h)*a,Xt+Math.sin(h)*a*.8,r?5:4,f&1?rt.l:rt.y)}Ze(i,Nt,Xt,r?5:4,r?il:rt.o);const u=6+s*(r?26:18);for(let f=0;f<10;f++){const h=o+f/10*Xe;Ze(i,Nt+Math.cos(h)*u,Xt+Math.sin(h)*u*.5+6,2,rt.l)}}});for(let i=0;i<(r?8:4);i++)F(t,n,.5,y(-1,1),y(-1,1),y(.3,1.2),.4,i&1?rt.y:rt.w,2,2,!0)};const Gt=Math.round,ht={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function qn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Gt(t-r/2),Gt(n-r/2),r,r)}const v3=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,Mu={};function b3(e){if(Mu[e])return Mu[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return Mu[e]=t}function Ki(e,t,n,r,o,i,s,l=1,a=1,u=!1){const f=b3(r);for(let h=0;h<f.length;h++){if(u&&h%2)continue;const[c,d]=f[h];e.fillStyle=c+d>r*.6?s:i,e.fillRect(Gt(t+c*o*l-o/2),Gt(n+d*o*a-o/2),o,o)}u||(e.fillStyle=ht.white,e.fillRect(Gt(t-r*o*.45*l-o/2),Gt(n-r*o*.5*a-o/2),o,o))}function S3(e,t,n,r,o,i,s=1,l=1){e.fillStyle=i;for(let a=-r+1;a<r;a++){const u=Math.floor(Math.sqrt(r*r-a*a));e.fillRect(Gt(t-u*o*s),Gt(n+a*o*l-o/2),Gt(u*2*o*s),o)}}function w3(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const Cc=["#.#","###",".#.",".#."];function _3(e,t){A({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),s=4+Gt(r*5);n.globalAlpha=1-r,Ki(n,o,i,s,2,ht.pink1,ht.pink2,1,1,!0);for(let l=0;l<8;l++){const a=l/8*6.283+.4,u=s*2+4+r*10;qn(n,o+Math.cos(a)*u,i+Math.sin(a)*u*.8,2,l%2?ht.white:ht.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=y(0,6.283),o=y(1,2.5);F(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(1,2.5),.4,n<3?ht.water:ht.pink1,2,8,!1)}for(let n=0;n<3;n++)F(e,t,.5,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,n%2?ht.coral:ht.orange,3,10,!1)}et.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,l=Math.atan2(s,i);A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(a,u){const[f,h]=C(t,n,.55);a.globalAlpha=1-u;for(let c=0;c<3;c++){const d=l+(c-1)*.5,m=10+u*(22+c*6);Ki(a,f+Math.cos(d)*m,h+Math.sin(d)*m-u*8,1+c%2,2,ht.pink2,ht.coral)}a.globalAlpha=1}});for(let a=0;a<6;a++)F(t+r*.4,n+o*.4,.5,r*y(1,2.5)+y(-.5,.5),o*y(1,2.5)+y(-.5,.5),y(.5,1.5),.35,a%2?ht.water:ht.pink1,2,6,!1);return!0};Fe.ajolote_Q=(e,t,n,r,o,i)=>{w3(t,_3);const s=Math.sin(i*17+t.x*2)*.13,l=1+s,a=1-s;e.globalAlpha=.35,S3(e,n,r,6,2,ht.pink2,l,a),e.globalAlpha=1;const u=(i*3|0)%2;for(let c=0;c<Cc.length;c++)for(let d=0;d<3;d++)Cc[c][u?2-d:d]==="#"&&qn(e,n-2+d*2,r-3+c*2,2,c<1?ht.orange:ht.coral);Ki(e,n,r,6,2,ht.pink2,ht.coral2,l,a);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=18+c*8,m=Math.sin(i*12+c*2)*3;Ki(e,n-f*d-h*m,r-h*d+f*m,2-(c>>1),2,ht.pink1,ht.pink2)}Math.random()<.35&&F(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.6,.45,ht.pink1,2,-.5,!1)};function A3(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return A({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[s,l]=C(e,t);for(let a=0;a<n.length;a++){const u=i-a*.05,f=.25+a*.08;if(u<0)continue;const h=s+n[a][0],c=l+n[a][1]-u*6;if(u<f)Ki(r,h,c,2,2,ht.pink2,ht.coral);else if(u<f+.3){const d=(u-f)/.3,m=Gt(c-d*14),p=Gt(h);r.globalAlpha=1-d,r.fillStyle=ht.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=ht.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+g*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}et.ajolote_W=e=>{if(e.type==="heal")return A3(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,s=[-.55,-.15,.25];A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const h=mt(o),[c,d]=C(h?h.x:t,h?h.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const v=g>0?s[x]:Math.PI-s[x],M=Math.sin(f*16+x*1.3)*.12,S=v+M*g,w=Math.cos(S),_=Math.sin(S),T=Gt(22*m)-(x===1?0:4);for(let R=6;R<=T;R+=2)qn(u,c+w*R,d+_*R,2,R>T-2?ht.pink1:ht.gill),R%4===0&&R>8&&(qn(u,c+w*R-_*3,d+_*R+w*3,2,ht.pink2),qn(u,c+w*R+_*3,d+_*R-w*3,2,ht.pink2))}u.globalAlpha=1}});const l=[];for(let u=0;u<12;u++)l.push(u/12*6.283+y(-.12,.12));A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let h=0;h<l.length;h++){const c=(f-h*.025)/.8;if(c<=0||c>=1)continue;const d=Math.sin(c*Math.PI),m=Gt(d*3)*2,[p,g]=C(t+Math.cos(l[h])*r,n+Math.sin(l[h])*r),x=Gt(p),v=Gt(g);u.fillStyle=ht.coral,u.fillRect(x-1,v-2,2,4),!(m<2)&&(u.fillStyle=ht.pink2,u.fillRect(x-m-1,v-3,2,2),u.fillRect(x+m-1,v-3,2,2),u.fillRect(x-1,v-3-m,2,2),u.fillRect(x-m+1,v-1-m,2,2),u.fillRect(x+m-3,v-1-m,2,2),u.fillStyle=ht.pink1,u.fillRect(x-1,v-4,2,2))}}});const a=[];for(let u=0;u<16;u++){const f=y(0,6.283),h=r*.9*Math.sqrt(Math.random());a.push({x:t+Math.cos(f)*h,y:n+Math.sin(f)*h,n:1+u%3,t0:y(0,.35),pop:y(.4,.9),ph:y(0,6.283),done:!1})}return A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const h=f*i;for(const c of a){const d=h-c.t0;if(d<0)continue;const[m,p]=C(c.x,c.y,.1+Math.min(d,c.pop)*.9),g=m+Math.sin(d*9+c.ph)*3;if(d<c.pop){Ki(u,g,p,c.n,2,ht.pink2,ht.coral);continue}c.done||(c.done=!0,F(c.x,c.y,.1+c.pop*.9,y(-.5,.5),y(-.5,.5),.8,.5,ht.pink1,2,0,!0),F(c.x,c.y,.1+c.pop*.9,y(-.5,.5),y(-.5,.5),.5,.4,ht.white,2,0,!0));const x=(d-c.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const v=c.n*2+2+x*6;for(const[M,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])qn(u,g+M*v,p+S*v,2,ht.pink1);u.globalAlpha=1}}}),!0};function T3(e,t,n,r,o){const i=-o,s=r;for(let l=0;l<=22;l+=2)qn(e,t-r*l,n-o*l,2,l>18?ht.coral2:ht.orange);for(let l=-6;l<=6;l+=2)qn(e,t+i*l,n+s*l,2,ht.orange);for(const l of[-6,0,6]){const a=l===0?11:8;for(let u=2;u<=a;u+=2)qn(e,t+i*l+r*u,n+s*l+o*u,2,u>=a-1?ht.white:ht.pink1)}}et.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),s=i+.6,l=Math.hypot(r-t,o-n),a=(r-t)/(l||1),u=(o-n)/(l||1),f=(a-u)*64,h=(a+u)*32,c=Math.hypot(f,h)||1,d=f/c,m=h/c,p=Math.max(2,Math.ceil(l/.1)),g={n:0,end:!1};return A({type:"custom",layer:"ground",dur:s,x:t,y:n,draw(x,v){const M=v*s,S=Math.min(1,M/i);for(let w=0;w<=p*S;w++){const _=w/p,T=M-_*i,R=Math.max(0,1-T/.55);if(R<=0)continue;const[z,I]=C(t+(r-t)*_,n+(o-n)*_),O=I+Math.sin(_*14-M*25)*2,U=Gt(4+6*_);x.globalAlpha=R,x.fillStyle=ht.pink2,x.fillRect(Gt(z)-U,Gt(O)-3,U*2,1),x.fillRect(Gt(z)-U,Gt(O)+2,U*2,1),x.fillStyle=ht.water,x.fillRect(Gt(z)-U,Gt(O)-2,U*2,4),w%3===0&&(x.fillStyle=ht.white,x.fillRect(Gt(z)-1,Gt(O)-1,3,2))}if(x.globalAlpha=1,S<1&&g.n<22)for(let w=0;w<2;w++){g.n++;const _=t+(r-t)*S,T=n+(o-n)*S;F(_,T,.2,-a*y(.5,1.5)+y(-.8,.8),-u*y(.5,1.5)+y(-.8,.8),y(1,2.5),.45,w?ht.water:ht.pink1,2,8,!1)}if(!g.end&&S>=1){g.end=!0;for(let w=0;w<10;w++)F(r+a*.4,o+u*.4,.4,a*y(1.5,3.5)+y(-.8,.8),u*y(1.5,3.5)+y(-.8,.8),y(1,3),.5,w%2?ht.water:ht.white,2,9,!1);ot(4)}}}),A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,v){const M=v*(i+.25),S=Math.min(1,M/i),[w,_]=C(t+(r-t)*S,n+(o-n)*S,.5);if(x.globalAlpha=S<1?1:Math.max(0,1-(M-i)/.25),T3(x,w+d*10,_+m*10,d,m),S>=1){const T=(M-i)/.25,R=6+T*30;for(const z of[-6,0,6])for(let I=12;I<12+R;I+=2)qn(x,w+d*(10+I)-m*z,_+m*(10+I)+d*z,2,I>8+R?ht.pink1:ht.white)}x.globalAlpha=1}}),!0};function C3(e,t,n,r,o){const i=Gt(t),s=Gt(n),l=(nt(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=Gt(u*l),h=u<r*.5?6:4;e.fillStyle=ht.coral,e.fillRect(i+f-h/2,s-u-2,h,2),e.fillStyle=ht.deep,e.fillRect(i+f+h/2-2,s-u-2,2,2)}const a=nt(o+3)<.5?-1:1;for(const[u,f,h]of[[.35+nt(o+1)*.15,.38,a],[.58+nt(o+2)*.12,.28,-a]]){const c=r*u,d=i+Gt(c*l),m=r*f;let p=d,g=s-c;for(let x=0;x<m;x+=2)p=d+h*(3+x*.7),g=s-c-x,e.fillStyle=ht.coral2,e.fillRect(Gt(p)-2,Gt(g)-2,4,2);e.fillStyle=ht.pink1,e.fillRect(Gt(p)-2,Gt(g)-4,4,2)}e.fillStyle=ht.pink1,e.fillRect(i+Gt(r*l)-2,s-r-3,4,3)}et.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let l=0;l<2;l++){const a=l?8:6,u=r*(l?.85:.45);for(let f=0;f<a;f++){const h=f/a*6.283+l*.4+y(-.15,.15);i.push({x:t+Math.cos(h)*u,y:n+Math.sin(h)*u,d:.04+l*.13+y(0,.05),H:y(24,40)*(l?1:.85),seed:y(0,99),up:!1})}}i.sort((l,a)=>l.x+l.y-(a.x+a.y));const s=(l,a)=>{const u=Math.min(1,Math.max(0,(a-l.d)/.1)),f=Math.min(1,Math.max(0,(a-.95)/.3));return l.H*(u<1?u*1.15:1)*(1-f)};A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(l,a){const u=a*o;l.globalAlpha=a>.75?(1-a)/.25:.8;for(const f of i){if(u<f.d)continue;const[h,c]=C(f.x,f.y);l.fillStyle=ht.hole,l.fillRect(Gt(h)-6,Gt(c)-2,12,4),l.fillRect(Gt(h)-3,Gt(c)-3,6,6)}l.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(l,a){const u=-a*12.6,f=v3(a,.05,.6);for(let h=0;h<3;h++){const c=1+h*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[g,x]=C(t+Math.cos(p)*c,n+Math.sin(p)*c,.45);l.globalAlpha=f*(1-m),qn(l,g,x,m<.15?3:2,m<.15?ht.white:h===1?ht.pink2:ht.water)}}l.globalAlpha=1}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(l,a){const u=a*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,F(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,3.5),.5,Math.random()<.5?ht.coral:ht.orange,3,10,!1),F(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,4),.45,ht.water,2,10,!1));const h=s(f,u);if(h<2)continue;const[c,d]=C(f.x,f.y);C3(l,c,d,Gt(h/2)*2,f.seed)}}});for(let l=0;l<28;l++){const a=y(0,6.283),u=y(2,5);F(t+Math.cos(a)*.4,n+Math.sin(a)*.4,.4,Math.cos(a)*u,Math.sin(a)*u,y(3,6),y(.7,1),[ht.water,ht.pink1,ht.white,ht.pink2][l%4],Math.random()<.3?3:2,12,!1,.97)}return ot(9),!0};Oe.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=mt(e.uid);let i=1,s=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,s=m/p)}const l=(i-s)*64,a=(i+s)*32,u=Math.hypot(l,a)||1,f=l/u,h=a/u;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=C(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const v of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)qn(d,p+f*M-h*v,g+h*M+f*v,2,M>x/2-4?ht.white:ht.pink2);d.globalAlpha=1}});const c=r?7:4;for(let d=0;d<c;d++)F(t,n,.45,i*y(.5,2)+y(-.7,.7),s*y(.5,2)+y(-.7,.7),y(1,2.5),.35,d%2?ht.pink1:ht.water,2,8,!1)};const wt=Math.round,ct={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function yn(e,t,n,r,o){e.fillStyle=o,e.fillRect(wt(t-r/2),wt(n-r/2),r,r)}const hf=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function sl(e,t,n,r,o,i,s){const l=t.length,a=t[0].length,u=wt(n-a*o/2),f=wt(r-l*i/2);for(let h=0;h<l;h++)for(let c=0;c<a;c++){const d=s[t[h][c]];d&&(e.fillStyle=d,e.fillRect(u+c*o,f+h*i,o,i))}}function Il(e,t,n,r,o,i,s,l,a,u){const f=-o,h=r;for(let c=0;c<=i;c+=2){const d=c/i,m=t-r*c,p=n-o*c,g=d<.85?s*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const v=x>g-2?l:a,M=x*.5;((c>>1)+(x>>1))%4!==3&&yn(e,m+f*x-r*M,p+h*x-o*M,2,v),((c>>1)+(x>>1)+2)%4!==3&&yn(e,m-f*x-r*M,p-h*x-o*M,2,v)}yn(e,m,p,2,u)}}function al(e,t,n,r,o,i,s){const l=wt(t),a=wt(n);for(let u=0;u<r;u+=2){const f=Math.max(2,wt(o*(1-u/r)/2)*2),h=wt(u*i),c=s<0?a-u-2:a+u;e.fillStyle=ct.ice3,e.fillRect(l+h-f/2,c,f,2),e.fillStyle=ct.ice1,e.fillRect(l+h-f/2,c,Math.max(1,f/2),2)}e.fillStyle=ct.snow,e.fillRect(l+wt(r*i)-1,s<0?a-r-1:a+r-2,2,3)}function F1(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const s=e.homing;!n&&Math.hypot(s.x-e.x,s.y-e.y)<1.2&&t(s.x,s.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function R3(e,t){A({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),s=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let l=0;l<9;l++){const a=l/9*6.283+.2,u=Math.cos(a),f=Math.sin(a)*.7,h=l%2?4:6;for(let c=0;c<h;c+=2)yn(n,o+u*(s+c),i+f*(s+c),2,c>=h-2?ct.snow:ct.ice2)}if(r<.35){const l=wt(10*(1-r/.35))+2;n.fillStyle=ct.snow,n.fillRect(wt(o)-l/2,wt(i)-l/2,l,l)}n.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5);n.globalAlpha=1-r;for(let s=0;s<3;s++){const l=Math.sin(r*10+s*2),a=-Math.PI/2+l*.6;Il(n,o+(s-1)*9+l*4,i-r*26-s*3,Math.cos(a),Math.sin(a),8,2,ct.ice3,ct.ice1,ct.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=y(0,6.283),o=y(1.2,3);F(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(.5,2),.4,n%2?ct.ice2:ct.ice3,2,6,!1)}}et.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,l=Math.atan2(s,i);A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(a,u){const[f,h]=C(t,n,.6);a.globalAlpha=1-u;for(let c=0;c<5;c++){const d=l+(c-2)*.32,m=8+u*28,p=Math.cos(d),g=Math.sin(d);Il(a,f+p*m,h+g*m,p,g,10,3,ct.ice3,ct.ice1,ct.snow)}a.globalAlpha=1}});for(let a=0;a<6;a++)F(t+r*.4,n+o*.4,.6,r*y(.5,1.5)+y(-.4,.4),o*y(.5,1.5)+y(-.4,.4),y(0,.6),.45,ct.snow,2,.5,!0);return!0};Fe.buho_Q=(e,t,n,r,o,i)=>{F1(t,R3);const s=Math.cos(o),l=Math.sin(o),a=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+s*12-l*a,f=r+l*12+s*a;gt(!0);const h=Lt();for(let c=1;c<=5;c++)h.globalAlpha=.5-c*.08,yn(h,n-s*c*6,r-l*c*6,8-c,c<3?ct.ice2:ct.ice3);h.globalAlpha=1,gt(!1),Il(e,u,f,s,l,24,6,ct.ice3,ct.ice1,ct.snow),Math.random()<.55&&F(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(-.2,.3),.5,Math.random()<.5?ct.snow:ct.ice1,2,0,!0)};const P3=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],I3=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];et.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(l,a){const u=hf(a,.08,.75);it(t,n,r*Math.min(1,.4+a*6),null,`rgba(150,215,255,${.2*u})`)}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(l,a){const u=hf(a,.1,.75),f=a*.8;l.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const g=p/m*6.283+(d===r?f:-f),[x,v]=C(t+Math.cos(g)*d,n+Math.sin(g)*d);yn(l,x,v,2,ct.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,g]=C(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(a*20+d*1.7);l.globalAlpha=u*x,sl(l,P3[d%4],p,g,2,2,{"#":ct.ice1})}const[h,c]=C(t,n);l.globalAlpha=u*(.75+.25*Math.sin(a*14)),sl(l,I3,h,c,3,2,{"#":ct.ice2,o:ct.amber,v:ct.amber}),l.globalAlpha=1}});const i=[];for(let l=0;l<8;l++){const a=l/8*6.283+y(-.3,.3),u=r*(.3+.55*Math.sqrt(nt(l+t*7.3)));i.push({x:t+Math.cos(a)*u,y:n+Math.sin(a)*u,d:.04+l*.035,h:y(16,28),lean:y(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((l,a)=>l.x+l.y-(a.x+a.y));const s={shat:!1};A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(l,a){const u=a*o,f=Math.max(0,(a-.88)/.12);for(const h of i){const c=Math.min(1,Math.max(0,(u-h.d)/.12));if(c<=0)continue;const[d,m]=C(h.x,h.y),p=h.h*c*(1-f);p<2||(al(l,d,m,p,8,h.lean,-1),al(l,d+h.side*6,m+2,p*.6,6,h.lean+h.side*.35,-1))}if(!s.shat&&f>0){s.shat=!0;for(const h of i)for(let c=0;c<2;c++)F(h.x,h.y,.25,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.45,c?ct.ice2:ct.snow,2,8,!0)}}});for(let l=0;l<20;l++){const a=y(0,6.283),u=y(0,r);F(t+Math.cos(a)*u,n+Math.sin(a)*u,y(.6,1.4),y(-.6,.6)+.8,y(-.6,.6)-.4,-.6,y(.6,1),Math.random()<.6?ct.snow:ct.ice1,2,-.5,!1,.98)}return!0};const E1=["......####","...#######","##########",".#########","..#.#.#.#."],z3=E1.map(e=>e.split("").reverse().join(""));et.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let s=0;s<12;s++)i.push({vx:y(-45,45),vy:y(-55,-15),ph:y(0,6.283),L:Math.random()<.4?12:9});A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,l){const a=l*1,[u,f]=C(t,n,.6);s.globalAlpha=hf(l,.02,.55);for(const h of i){const c=Math.sin(a*6+h.ph),d=u+h.vx*a*(1-a*.5)+c*6,m=f+h.vy*a+60*a*a,p=Math.PI/2+c*.9;Il(s,d+Math.cos(p)*h.L*.5,m+Math.sin(p)*h.L*.5,Math.cos(p),Math.sin(p),h.L,3,ct.ice3,ct.ice1,ct.snow)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(s,l){for(let a=0;a<10;a++){const u=l*1.4-a*.03;if(u<=0||u>=1)continue;const f=a/9,[h,c]=C(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=wt(4*(1-u))+1;s.globalAlpha=1-u,s.fillStyle=ct.ice1,s.fillRect(wt(h)-d,wt(c),d*2,1),s.fillRect(wt(h),wt(c)-d,1,d*2)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[a,u]=C(r,o,.75),f=8+l*24;s.globalAlpha=(1-l)*.9,sl(s,E1,a+f+15,u-l*6,3,3,{"#":ct.ice1}),sl(s,z3,a-f-15,u-l*6,3,3,{"#":ct.ice1}),s.globalAlpha=1}});for(let s=0;s<16;s++)F(t+y(-.3,.3),n+y(-.3,.3),y(.3,.9),y(-.8,.8),y(-.8,.8),y(-.3,.4),y(.6,1),ct.snow,2,.4,!1,.97);for(let s=0;s<16;s++){const l=y(0,6.283),a=y(1,2.5);F(r,o,.6,Math.cos(l)*a,Math.sin(l)*a,y(0,1),.5,s%3?ct.ice1:ct.moon2,2,1,!0)}return!0};function Rc(e,t,n,r,o,i,s){e.fillStyle=s;const l=wt(t),a=wt(n),u=r*.82;for(let f=-r;f<r;f+=2){const h=Math.sqrt(Math.max(0,r*r-f*f)),c=u*u-f*f,d=-h,m=h;if(c<=0){e.fillRect(l+wt(d),a+wt(f*i),wt(m-d),Math.max(1,wt(2*i)));continue}const p=Math.sqrt(c),g=o-p,x=o+p;g>d&&e.fillRect(l+wt(d),a+wt(f*i),wt(Math.min(m,g)-d),Math.max(1,wt(2*i))),x<m&&e.fillRect(l+wt(x),a+wt(f*i),wt(m-x),Math.max(1,wt(2*i)))}}const us=[];function Pc(e,t,n){A({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let s=0;s<36;s++){const l=s/36*6.283,[a,u]=C(e+Math.cos(l)*i,t+Math.sin(l)*i);yn(r,a,u,s%3?2:3,s%2?ct.ice2:ct.moon)}r.globalAlpha=1}}),A({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){it(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),ot(9)}const ci=3,Ic=ci-.3,zc=e=>(e=e-1,1+e*e*(2.4*e+1.4));function fs(e,t,n,r,o){if(!(r<1)){e.fillStyle=o;for(let i=-r;i<r;i+=2){const s=Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(wt(t-s),wt(n+i),wt(s*2),2)}}}function da(e,t,n,r,o){if(r<2)return;const i=r/2;e.fillStyle=o;for(let s=-i;s<i;s+=2){const l=r*Math.sqrt(Math.max(0,1-(s+1)/i*((s+1)/i)));e.fillRect(wt(t-l),wt(n+s),wt(l*2),2)}}et.buho_R=e=>{if(e.type==="starfall"){const p=us.findIndex(g=>Math.abs(g.x-e.x)<.3&&Math.abs(g.y-e.y)<.3);return p>=0?us.splice(p,1):Pc(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,s={x:t,y:n,t:0};us.push(s),us.length>6&&us.shift(),A({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,v=Math.min(1,x/.15)*(x>o?Math.max(0,1-(x-o)/.6):1);p.globalAlpha=v;for(const[w,_,T]of[[r,56,1],[r*.9,48,-1]])for(let R=0;R<_;R++){if((R+(T>0?0:2))%4===3)continue;const z=R/_*6.283+x*.7*T,[I,O]=C(t+Math.cos(z)*w,n+Math.sin(z)*w);yn(p,I,O,2,T>0?ct.moon2:ct.ice2)}for(let w=0;w<12;w++){const _=w/12*6.283-x*.35,[T,R]=C(t+Math.cos(_)*r*.62,n+Math.sin(_)*r*.62),[z,I]=C(t+Math.cos(_)*r*.82,n+Math.sin(_)*r*.82);for(let O=0;O<=4;O++)yn(p,T+(z-T)*O/4,R+(I-R)*O/4,2,ct.moon)}const[M,S]=C(t,n);if(Rc(p,M,S,30,12,.5,ct.moon),x>.45){const w=Math.min(1,(x-.45)/.1);p.globalAlpha=v*w,yn(p,M-26,S-3,4,ct.amber),yn(p,M+26,S-3,4,ct.amber)}p.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,g){const x=g*i,v=Math.min(1,x/.2)*(x>o?Math.max(0,1-(x-o)/.5):1),[M,S]=C(t,n,ci+1.7),w=p.createRadialGradient(M,S,4,M,S,60);w.addColorStop(0,`rgba(200,190,255,${.45*v})`),w.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=w,p.fillRect(wt(M)-60,wt(S)-60,120,120),p.globalAlpha=v,Rc(p,M,S,20,9,1,ct.moon),p.globalAlpha=1}});const l=Zo(e,o),a=()=>b.T-l.t0,u=Array.from({length:26},(p,g)=>{const x=y(0,6.283),v=Math.sqrt(Math.random())*r*.82,M=1-v/r;return{x:t+Math.cos(x)*v,y:n+Math.sin(x)*v,z:ci+y(0,.3)+M*.35,s:wt(y(18,26)+M*16),dl:v/r*.25+g*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,g)=>p.x+p.y-(g.x+g.y)||p.z-g.z),f=Array.from({length:34},()=>{const p=y(0,6.283),g=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*g,y:n+Math.sin(p)*g,ph:Math.random(),sp:y(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),h=p=>p>0?0:Fs(-p/.35),c=(p,g,x)=>{for(const v of f){if(v.back!==g)continue;const M=(a()*v.sp+v.ph)%1,[S,w]=C(v.x+Math.sin(a()*2+v.ph*9)*.15,v.y,ci*(1-M));p.globalAlpha=x*(g?.6:.9)*Math.min(1,(1-M)*5,M*8),yn(p,S,w,2,ct.snow),p.fillStyle=ct.ice2,p.fillRect(wt(S)-1,wt(w)-4,1,2)}};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g,x){const v=sn(l),M=h(v);if(M>=1){x.t=x.dur+1;return}const S=Math.min(1,a()/.3)*(1-M),[w,_]=C(t,n),T=r*B.HW*Math.SQRT2*.92;p.globalAlpha=.5*S,p.fillStyle=Pt(p,ct.night,8);for(let R=-T/2;R<T/2;R+=2){const z=T*Math.sqrt(Math.max(0,1-(2*(R+1)/T)**2));p.fillRect(wt(w-z),wt(_+R),wt(z*2),2)}c(p,!0,S),Kr(l,t,n,r*1.05,10937599,.5*S)}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g,x){const v=sn(l),M=h(v);if(M>=1){x.t=x.dur+1;return}const S=a(),w=1-M;c(p,!1,w*Math.min(1,S/.3));const _=zc(Fs(S/.35)),[T,R]=C(t,n,ci+M*.3),z=wt(r*.8*B.HW*Math.SQRT2*_*(1+M*.3));for(let I=0;I<4;I++){p.globalAlpha=w*(I===0?.8:.96),I===0?da(p,T+3,R+8,z,Pt(p,ct.ice3,12)):I===1?(da(p,T,R,z+2,Pt(p,ct.ice2,10)),da(p,T,R,z-2,ct.ice2)):I===2&&da(p,T-2,R-6,z-10,ct.ice1);for(const O of u){const U=zc(Fs((S-O.dl)/.3));if(U<=.02)continue;const[X,N]=C(O.x+O.dx*M*1.2,O.y+O.dy*M*1.2,O.z+M*.4),Q=wt(O.s*U*(1+M*.3));I===0?fs(p,X+2,N+5,Q,Pt(p,ct.ice3,12)):I===1?(fs(p,X,N,Q+1,Pt(p,ct.ice2,10)),fs(p,X,N,Q-2,ct.ice2)):I===2?fs(p,X-1,N-Q*.22,wt(Q*.8),ct.ice1):O.z>ci+.42&&fs(p,X-Q*.25,N-Q*.5,wt(Q*.32),ct.snow)}}}});const d=[];for(let p=0;p<14;p++){const g=y(0,6.283),x=r*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(g)*x,y:n+Math.sin(g)*x,fall:o-.12+p*.025,ap:.08+p*.025,L:y(18,28),hit:!1})}d.sort((p,g)=>p.x+p.y-(g.x+g.y));const m={boom:!1};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(const v of d){const M=(x-v.fall)/.12;if(M>=1){if(!v.hit){v.hit=!0;for(let z=0;z<3;z++)F(v.x,v.y,.1,y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),.45,z?ct.ice2:ct.snow,2,10,!0)}const R=(x-v.fall-.12)/.2;if(R<1){const[z,I]=C(v.x,v.y),O=wt(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=ct.snow,p.fillRect(wt(z)-O,wt(I)-1,O*2,2),p.fillRect(wt(z)-1,wt(I)-O/2,2,O),p.globalAlpha=1}continue}const S=Math.min(1,Math.max(0,(x-v.ap)/.25));if(S<=0)continue;const w=M>0?Ic*(1-M*M):Ic+Math.sin(x*9+v.x)*.03,[_,T]=C(v.x,v.y,w);p.globalAlpha=S,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(wt(_)-1,wt(T)-v.L-30,2,28)),al(p,_,T-v.L,v.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=o&&(m.boom=!0,s.t===0&&(s.t=1,Pc(t,n,r)))}});for(let p=0;p<10;p++){const g=y(0,6.283),x=y(0,r);F(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1,2),.7,p%2?ct.moon2:ct.ice1,2,0,!0)}return!0};function k1(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:y(-9,9),oy:y(-3,4),h:y(8,n?16:12),lean:y(-.35,.35)});A({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,s){const[l,a]=C(e,t,.15),u=Math.min(1,s*7);i.globalAlpha=s>.6?(1-s)/.4:1;for(const f of r)al(i,l+f.ox,a+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const s=y(0,6.283),l=y(.8,2);F(e,t,.4,Math.cos(s)*l,Math.sin(s)*l,y(.5,1.8),.35,i%2?ct.snow:ct.ice2,2,5,!0)}}const L1=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&L1.push([t,e,n>3.6?1:0])}Fe.buho_A=(e,t,n,r,o,i)=>{F1(t,(c,d)=>k1(c,d,!1));const s=Math.cos(o),l=Math.sin(o);gt(!0);const a=Lt();for(let c=1;c<=4;c++)a.globalAlpha=.45-c*.09,yn(a,n-s*c*5,r-l*c*5,6-c,ct.moon2);a.globalAlpha=1,gt(!1);const u=i*13,f=Math.cos(u),h=Math.sin(u);for(const[c,d,m]of L1)yn(e,n+(c*f-d*h)*2,r+(c*h+d*f)*2,3,m?ct.ice3:ct.ice1);yn(e,n+-3*f*2,r+-3*h*2,2,ct.snow),Math.random()<.45&&F(t.x,t.y,t.z||.45,0,0,-.2,.35,ct.ice1,2,0,!0)};Oe.buho=e=>k1(e.x,e.y,!!e.big);const xt=Math.round,$e=Math.PI*2,cs=e=>e*B.HW*Math.SQRT2,pt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},Br=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],U1=e=>!!(b.game&&b.game.player&&e.uid===b.game.player.id);function He(e,t,n,r){r=Math.max(1,xt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(xt(t[0]+(n[0]-t[0])*l/i-s),xt(t[1]+(n[1]-t[1])*l/i-s),r,r)}function df(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const l=(s+i/2)/o,a=r*Math.sqrt(Math.max(0,1-l*l));a>=.5&&e.fillRect(xt(t-a),xt(n+s),Math.max(1,xt(a*2)),i)}}function hs(e,t,n,r,o,i,s=0){for(let l=0;l<o;l++){const a=s+l/o*$e;e.fillRect(xt(t+Math.cos(a)*r-i/2),xt(n+Math.sin(a)*r*.5-i/2),i,i)}}function Oc(e,t,n,r){t=xt(t),n=xt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const O3=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));et.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let l=0;l<11;l++)for(let a=0;a<7;a++){const u=(a-3)/3.5,f=(l-5)/5.5;u*u+f*f<=1&&i.push({i:a,j:l,t0:Math.random()*.35,vx:y(-14,14),c:a+l})}A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(l,a){const u=a*.8,[f,h]=C(t,n,.5),c=b.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=h+(d.j-5)*5-(m>0?m*m*160:0);l.globalAlpha=p,l.fillStyle=Br[(d.c+c)%6],l.fillRect(xt(g)-2,xt(x)-2,5,5)}}});const s=Math.max(4,Math.min(18,xt(Math.hypot(r-t,o-n)*2.4)));A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(l,a){const u=C(t,n),f=C(r,o),h=f[0]-u[0],c=f[1]-u[1],d=Math.hypot(h,c)||1,m=-c/d,p=h/d;for(let g=0;g<=s;g++){const x=g/s,v=a*4-x;if(v<0)continue;const M=g%4===0,S=M?9:5,w=u[0]+h*x,_=u[1]+c*x;l.globalAlpha=Math.min(1,v*3)*Math.max(0,1-Math.max(0,a-.35)/.65),l.fillStyle=pt.ink,He(l,[w-m*S+1,_-p*S+1],[w+m*S+1,_+p*S+1],M?4:3),l.fillStyle=M?pt.gold:Br[(g+(b.T*10|0))%6],He(l,[w-m*S,_-p*S],[w+m*S,_+p*S],M?3:2)}}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(l,a){const[u,f]=C(r,o,.5),h=20+a*16;l.globalAlpha=1-a*a;for(let d=0;d<12;d++){const m=d/12*$e,p=d%3===0?7:3;l.fillStyle=d%3===0?pt.gold:pt.face,He(l,[u+Math.cos(m)*h,f+Math.sin(m)*h*.8],[u+Math.cos(m)*(h-p),f+Math.sin(m)*(h-p)*.8],2)}const c=-Math.PI/2-a*$e*1.5;l.fillStyle=pt.face,He(l,[u,f],[u+Math.cos(c)*(h-8),f+Math.sin(c)*(h-8)*.8],3),l.fillStyle=pt.gold,l.fillRect(xt(u)-2,xt(f)-2,5,5)}});for(let l=0;l<14;l++){const a=l/14*$e;F(r,o,.5,Math.cos(a)*2.2,Math.sin(a)*2.2,y(.5,1.5),.45,Br[l%6],3,2,!0,.9)}};et.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,s=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],l=(a,u,f=.45)=>C(t+Math.cos(r+a*o)*u,n+Math.sin(r+a*o)*u,f);A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(a,u){const f=u*.55;for(let h=s.length-1;h>=0;h--){const c=s[h],d=f-c.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){a.globalAlpha=c.al;for(let g=-1,x=0;g<=p;g+=.06,x++){const v=Math.max(0,1-(p-g)/.7),M=xt(3+6*v*c.sc),[S,w]=l(g,i*c.sc);a.fillStyle=pt.ink,a.fillRect(xt(S-M/2)+1,xt(w-M/2)+1,M,M),a.fillStyle=h===0?x%2?pt.gold:pt.face:Br[(h*2+x)%6],a.fillRect(xt(S-M/2),xt(w-M/2),M,M)}if(h===0){a.fillStyle=pt.gold;for(let g=-1;g<=p;g+=.2){const x=l(g,i*1.06),v=l(g,i*1.16);He(a,x,v,2)}}}}if(f>.28){const h=(f-.28)/.27,[c,d]=l(-1,i);a.globalAlpha=1-h;for(let m=0;m<16;m++){const p=m*.6-h*4,g=2+m*1.1;a.fillStyle=Br[m%6],a.fillRect(xt(c+Math.cos(p)*g)-1,xt(d+Math.sin(p)*g*.7)-1,3,3)}}}});for(let a=0;a<18;a++){const u=y(-1,1),f=i*y(.3,1.1),h=r+u*o;F(t+Math.cos(h)*f,n+Math.sin(h)*f,y(.2,.9),y(-.15,.15),y(-.15,.15),y(0,.2),y(.8,1.3),a%3?pt.sand:pt.time,2,.15,!0,.99)}ot(U1(e)?3:1)};et.camaleon_E=e=>{const t=e.uid,n=e.dur||4;A({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(l,a){const u=mt(t),[f,h]=C(u?u.x:e.x,u?u.y:e.y,.5);l.globalAlpha=1-a;for(let c=0;c<8;c++){const d=c/8*$e+.2,m=12+a*30;l.fillStyle=Br[c%6],He(l,[f+Math.cos(d)*m,h+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),h+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const s=[5,9,11,12,12,11,10,9,7,5];A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(l,a,u){const f=mt(t);if(!f||f.dead){u.t=u.dur+1;return}if(b.T-o>.06){const c=r[r.length-1];(!c||Math.hypot(f.x-c.x,f.y-c.y)>.1)&&(r.push({x:f.x,y:f.y,t:b.T,c:i++}),r.length>8&&r.shift()),o=b.T}const h=a>.92?(1-a)/.08:1;for(const c of r){const d=1-(b.T-c.t)/.4;if(d<=0)continue;const[m,p]=C(c.x,c.y);l.globalAlpha=d*.65*h,l.fillStyle=Br[c.c%6];for(let g=0;g<s.length;g++)l.fillRect(xt(m-s[g]),xt(p-8-g*6),s[g]*2,3)}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(l,a,u){const f=mt(t);if(!f||f.dead){u.t=u.dur+1;return}const[h,c]=C(f.x,f.y,1.05),d=h+24,m=c+Math.sin(b.T*5)*2;l.globalAlpha=a>.9?(1-a)/.1:Math.min(1,u.t/.12),l.fillStyle=pt.brassD,df(l,d,m,9,9,1),l.fillStyle=pt.brass,l.fillRect(xt(d)-2,xt(m)-13,5,4),l.fillStyle=pt.face,df(l,d,m,7,7,1),l.fillStyle=pt.ink,l.fillRect(xt(d)-1,xt(m)-7,2,2),l.fillRect(xt(d)+5,xt(m),2,2),l.fillRect(xt(d)-1,xt(m)+5,2,2),l.fillRect(xt(d)-7,xt(m),2,2);const p=b.T*14;l.fillStyle="#e03a4a",He(l,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function F3(e,t,n,r){t=xt(t),n=xt(n),e.fillStyle=pt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=pt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=xt(6-o*.5),s=xt(1+o*.5);e.fillStyle=pt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-s-1,n+1+o,1,1),e.fillRect(t+s+1,n+1+o,1,1),e.fillStyle=pt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-s,n+1+o,s*2+1,1)}r>.02&&r<.98&&(e.fillStyle=pt.sand,e.fillRect(t,n-1,1,12))}let Fc=null,Ec=null,kc=[],Lc=[];function E3(e){return Fc!==e&&(Fc=e,kc=[{u0:0,fill:Pt(e,pt.night,7),a:.55},{u0:.66,fill:Pt(e,pt.time,6),a:.55},{u0:.86,fill:Pt(e,pt.glass,10),a:.6},{u0:.96,fill:pt.glass,a:.5}]),kc}function k3(e){return Ec!==e&&(Ec=e,Lc=[{u0:0,fill:Pt(e,pt.glass,2),a:.4},{u0:.62,fill:Pt(e,pt.time,3),a:.5},{u0:.82,fill:Pt(e,pt.time,5),a:.6},{u0:.93,fill:Pt(e,pt.glass,9),a:.7}]),Lc}function Pr(e,t,n,r,o){const i=Math.cos(r)*Math.cos(o),s=Math.sin(r)*Math.cos(o),l=Math.sin(o);return Ke(e+i*n,t+s*n,l*n),Sr(i,s,l)>0}const Uc=[.42,44,.86,32,1.24,16];function Dc(e,t,n,r,o,i,s,l){const a=o>0;e.fillStyle=a?pt.glassL:"#5a68c0",e.globalAlpha=l*(a?.55:.7);for(let h=0;h<12;h++){const c=h/12*$e-i*.35;for(let d=1;d<11;d++)Pr(t,n,r,c,d/11*Math.PI/2)===a&&e.fillRect(xt(vt.x)-1,xt(vt.y)-1,2,2)}for(let h=0;h<3;h++){const c=Uc[h*2],d=Uc[h*2+1];for(let m=0;m<d;m++)Pr(t,n,r,m/d*$e+i*.08,c)===a&&e.fillRect(xt(vt.x)-1,xt(vt.y)-1,2,2)}e.globalAlpha=l*.95,e.fillStyle=a?pt.gold:pt.time;for(let h=0;h<72;h++)Pr(t,n,r,h/72*$e,0)===a&&e.fillRect(xt(vt.x)-1,xt(vt.y)-1,3,3);for(let h=0;h<12;h++){const c=h/12*$e-Math.PI/4;if(Pr(t,n,r,c,0)!==a)continue;const d=vt.x,m=vt.y;Pr(t,n,r,c,h%3?.13:.22),e.fillStyle=a?h%3?pt.face:pt.gold:pt.time,He(e,[d,m],[vt.x,vt.y],h%3?2:3)}const u=-i*1.4+.6;e.fillStyle=a?pt.gold:pt.brass,e.globalAlpha=l*(a?.95:.6);for(let h=0;h<22;h++)Pr(t,n,r,u,h/22*Math.PI/2)===a&&e.fillRect(xt(vt.x)-1,xt(vt.y)-1,3,3);const f=s%1;if(f<.6){const h=f/.6*Math.PI/2*.98;e.globalAlpha=l*(1-f/.6)*(a?.9:.6),e.fillStyle=a?pt.glassL:pt.glass;const c=xt(56*Math.cos(h))+8;for(let d=0;d<c;d++)Pr(t,n,r,d/c*$e,h)===a&&e.fillRect(xt(vt.x)-1,xt(vt.y)-1,3,2)}}et.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=Zo(e,o),s=Array.from({length:26},(c,d)=>{const m=Math.random()*$e,p=Math.sqrt(Math.random())*r*.85,g=Math.sqrt(Math.max(0,r*r-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:y(.15,Math.max(.2,g)),ph:Math.random()*$e,s:d%4===0?4:2,col:[pt.glassL,pt.gold,pt.time,pt.teal][d%4]}}),l=Array.from({length:22},()=>{const c=Math.random()*$e,d=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(c)*d,y:n+Math.sin(c)*d,z:y(.2,1.4)}}),a=Array.from({length:7},()=>{const c=new Float32Array(16);let d=y(-.4,2),m=y(.12,1.1);for(let p=0;p<8;p++)c[p*2]=d,c[p*2+1]=m,d+=y(-.16,.16),m=Math.min(1.45,Math.max(.05,m+y(-.2,.2)));return c}),u=c=>O3(c/.3),f=()=>b.T-i.t0,h=c=>Fs(c/.2);A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=sn(i);if(p<=0){m.t=m.dur+1;return}const g=h(p),x=u(f()),[v,M]=C(t,n),S=cs(r)*x,w=f();c.globalAlpha=.28*g,c.fillStyle=pt.night,df(c,v,M,S,S*.5,3),c.globalAlpha=.95*g,c.fillStyle=pt.gold,hs(c,v,M,S,96,3),c.fillStyle=pt.brass,hs(c,v,M,S*.94,72,2),c.fillStyle=pt.face,hs(c,v,M,S*.87,60,2);for(let O=0;O<12;O++){const U=O/12*$e-Math.PI/2,X=O%3===0,N=[v+Math.cos(U)*S*.66,M+Math.sin(U)*S*.33],Q=[v+Math.cos(U)*S*.8,M+Math.sin(U)*S*.4];c.fillStyle=pt.ink,He(c,[N[0]+1,N[1]+1],[Q[0]+1,Q[1]+1],X?6:4),c.fillStyle=X?pt.gold:pt.face,He(c,N,Q,X?5:3)}for(let O=0;O<36;O++){const U=O/36*$e-w*.6,X=S*(O%2?.5:.55);c.fillStyle=O%2?pt.brassD:pt.brass,c.fillRect(xt(v+Math.cos(U)*X)-2,xt(M+Math.sin(U)*X*.5)-1,5,3)}const _=-Math.PI/2-w*$e/1.5,T=-Math.PI/2-w*$e/12,R=[v+Math.cos(_)*S*.74,M+Math.sin(_)*S*.37],z=[v+Math.cos(T)*S*.45,M+Math.sin(T)*S*.225];c.fillStyle=pt.ink,He(c,[v+1,M+1],[R[0]+1,R[1]+1],6),He(c,[v+1,M+1],[z[0]+1,z[1]+1],8),c.fillStyle=pt.face,He(c,[v,M],R,4),c.fillStyle=pt.gold,He(c,[v,M],z,6),c.fillStyle="#e03a4a",c.fillRect(xt(v)-4,xt(M)-3,8,6),c.fillStyle=pt.gold,c.fillRect(xt(v)-2,xt(M)-2,4,4);const I=w%1;I<.3&&(c.globalAlpha=(1-I/.3)*g,c.fillStyle=pt.glassL,hs(c,v,M,S*(.87+I*.4),48,3))}}),A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=sn(i);if(p<=0){m.t=m.dur+1;return}const g=h(p),x=r*u(f()),v=b.T;Ke(t,n);const M=vt.x,S=vt.y,w=cs(x),_=Fa(x,x);uf(c,M,S,w,_,!1,E3(c),g),Dc(c,t,n,x,-1,v,f(),g),Kr(i,t,n,r*1.15,9087231,.75*g)}}),A({type:"custom",layer:"top",dur:o+1,x:t,y:n,draw(c,d,m){const p=sn(i);if(p<=0){m.t=m.dur+1;return}const g=h(p),x=r*u(f()),v=b.T;Ke(t,n);const M=vt.x,S=vt.y,w=cs(x),_=Fa(x,x);uf(c,M,S,w,_,!0,k3(c),g),Dc(c,t,n,x,1,v,f(),g);const T=Fs((.45-p)/.35);if(T>0)for(const R of a){const z=Math.max(1,xt(7*T));for(let I=0;I<z;I++){if(!Pr(t,n,x,R[I*2],R[I*2+1]))continue;const O=vt.x,U=vt.y;Pr(t,n,x,R[I*2+2],R[I*2+3]),c.globalAlpha=g,c.fillStyle=pt.ink,He(c,[O+1,U+1],[vt.x+1,vt.y+1],2),c.fillStyle=pt.glassL,He(c,[O,U],[vt.x,vt.y],2)}}}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(c,d,m){const p=sn(i);if(p<=0){m.t=m.dur+1;return}const g=h(p),x=u(f()),v=r*x,M=b.T,S=f();Ke(t,n);const w=vt.x,_=vt.y,T=cs(v),R=Fa(v,v);for(let O=0;O<=80;O++){const U=Math.PI+O/80*Math.PI,X=((O/80-S*.45)%1+1)%1,N=Math.max(0,1-Math.min(X,1-X)*6);c.globalAlpha=g*(.55+.45*N),c.fillStyle=N>.3?pt.glassL:pt.glass,c.fillRect(xt(w+Math.cos(U)*T)-1,xt(_+Math.sin(U)*R)-1,3,3)}for(let O=0;O<14;O++){const U=Math.PI*(1.1+O*.022);c.globalAlpha=g*.85,c.fillStyle=pt.glassL,c.fillRect(xt(w+Math.cos(U)*T*.82)-2,xt(_+Math.sin(U)*R*.82)-2,4,4),O<6&&(c.globalAlpha=g*.5,c.fillRect(xt(w+Math.cos(U+.12)*T*.7)-1,xt(_+Math.sin(U+.12)*R*.7)-1,3,3))}c.globalAlpha=g*.7,Oc(c,w+Math.cos(Math.PI*1.36)*T*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+xt(2*Math.sin(M*4)));for(const O of s){const[U,X]=C(O.x,O.y,O.z*x),N=.5+.5*Math.sin(M*3+O.ph);c.globalAlpha=g*(.35+.65*N),c.fillStyle=O.col,Oc(c,U,X,O.s+(N>.8?1:0))}c.fillStyle=pt.sand;for(const O of l){const[U,X]=C(O.x,O.y,O.z*x);c.globalAlpha=g*.8,c.fillRect(xt(U),xt(X),1,1)}const[z,I]=C(t,n,v+.35);if(c.globalAlpha=g,F3(c,z,I,Math.min(1,S/Math.max(.1,S+p))),S<.3){const O=S/.3;c.globalAlpha=1-O,c.fillStyle=pt.glassL,hs(c,w,_,cs(r)*(.3+O*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let O=0;O<40;O++){const U=Math.random()*$e,X=Math.random()*1.3,N=t+Math.cos(U)*r*Math.cos(X),Q=n+Math.sin(U)*r*Math.cos(X);F(N,Q,r*Math.sin(X),Math.cos(U)*y(.8,2),Math.sin(U)*y(.8,2),y(0,1.5),y(.5,.9),O%3?pt.glass:pt.glassL,O%4?2:3,9,!0,.96)}}}}),ot(U1(e)?6:3)};Oe.camaleon=e=>{const t=e.x,n=e.y,r=y(-2.6,-.6),o=Math.random()*6|0;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.5),u=Math.min(1,s*6);i.globalAlpha=s<.5?1:(1-s)*2;const f=r-(1-u)*1.5,h=r+2.2-(1-u)*1.2;i.fillStyle=pt.ink,He(i,[l+1,a+1],[l+Math.cos(f)*20+1,a+Math.sin(f)*20+1],4),i.fillStyle=pt.face,He(i,[l,a],[l+Math.cos(f)*20,a+Math.sin(f)*20],3),i.fillStyle=Br[o],He(i,[l,a],[l+Math.cos(h)*12,a+Math.sin(h)*12],4),i.fillStyle=pt.gold;for(let c=0;c<4;c++){const d=c/4*$e+.4,m=14+s*10;i.fillRect(xt(l+Math.cos(d)*m)-1,xt(a+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)F(t,n,.5,y(-1.3,1.3),y(-1.3,1.3),y(.8,2),.3,Br[(o+i)%6],2,6,!0)};let pe=0,ye=0;function Fn(e,t,n=0){pe=(e-t)*B.HW+B.OX,ye=(e+t)*B.HH-n*B.ZK}function Rn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const D1=e=>e<0?0:e>1?1:e,Ae=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],L3="#3a2420",b0="#2a1410",S0=e=>e>=5?L3:Ae[e<0?0:e|0];function ll(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let s=0;s<i;s++){const l=(s+.5)/i*2-1,a=r*Math.sqrt(1-l*l);e.fillRect(Math.round(t-a/2),Math.round(n-o/2+s*3),Math.max(1,Math.round(a)),3)}}et.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,s=e.angle||.85,l=Math.atan2(o,r),a=6,u=6,f=new Float32Array(a*(u+1)*2);for(let c=0;c<a;c++){let d=l+(c/(a-1)-.5)*s*1.5;const m=i*y(.7,1);for(let p=0;p<=u;p++){const g=.35+(m-.35)*p/u;d+=y(-.13,.13);const x=(c*(u+1)+p)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const h=(c,d,m)=>{const p=D1(d/.25)*u;for(let g=0;g<a;g++)for(let x=0;x<u&&x<p;x++){const v=Math.min(1,p-x),M=(g*(u+1)+x)*2;Fn(f[M],f[M+1]);const S=pe,w=ye;Fn(f[M+2],f[M+3]);const _=S+(pe-S)*v,T=w+(ye-w)*v,R=Math.max(1,Math.round(Math.hypot(_-S,T-w)/3)),z=m*(1-x/u*.5);for(let I=0;I<=R;I++)Rn(c,S+(_-S)*I/R,w+(T-w)*I/R,z)}};A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(c,d){c.globalAlpha=d<.6?.85:(1-d)/.4*.85,c.fillStyle=b0,h(c,d*1.8,6)}}),A({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(c,d){const m=d*1.4;c.globalAlpha=1-d*d,c.fillStyle=S0(m/.3),h(c,m,3)}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(c,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const g=.4+(i-.4)*p,x=s*(.45+.55*p),v=5+Math.round(g*3);c.globalAlpha=1-p,c.fillStyle=Ae[Math.min(3,m+(p*2|0))];for(let M=0;M<=v;M++){const S=l+(M/v-.5)*2*x,w=g*(.9+.1*Math.sin(M*2.3+m*1.7));Fn(t+Math.cos(S)*w,n+Math.sin(S)*w,.35+.12*Math.sin(M*1.3+d*18)),Rn(c,pe,ye,8-m-p*4)}}}});for(let c=0;c<32;c++){const d=l+y(-s,s)*.9,m=y(.3,1)*i*2.4;F(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,y(1.2,3),y(.7,1.05),Ae[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let c=0;c<14;c++){const d=l+y(-s,s),m=y(.6,1)*i*3.2;F(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,y(.4,1.4),.35,Ae[0],2,1,!0,.98)}ot(3)};const U3=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],mf=[],X1=[],G1=[];U3.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(mf.push(n-2),X1.push(t),G1.push(r))}});const B1=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function D3(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":Ae[0]:B1[i];for(let s=0;s<mf.length;s++)G1[s]===i&&e.fillRect(Math.round(t+mf[s]*r),Math.round(n+X1[s]*r),r,r)}}et.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,s)=>{for(let l=0;l<14;l++)F(i+y(-.3,.3),s+y(-.3,.3),y(.2,.8),y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),y(.5,.8),B1[2+(l&1)],4,9,!1,.95)};A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,s,l){const a=mt(l.uid),u=s*t;if(!a||a.dead||b.mode!=="guest"&&u>.15&&!(a.shield>0)||s>.97){l.broke||(l.broke=!0,o(l.lx,l.ly),l.dur=l.t);return}l.lx=a.x,l.ly=a.y;const h=a.scale||1,c=h>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,v=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(v)>0;if(d===0===M)continue;const S=m*.035,w=D1((u-S)/.08);if(w<=0)continue;const _=(p?22:30)*h,T=(p?8:11)*h;Fn(a.x,a.y,p?.62:.22),i.globalAlpha=M?1:.4,D3(i,pe+Math.cos(v)*_,ye+Math.sin(v)*T-10*(1-w)-6*h,c,u-S<.12)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,s){Fn(e.x,e.y,.55);const l=6+s*26;i.globalAlpha=1-s,i.fillStyle=Ae[1];for(let a=2;a<l;a+=3)Rn(i,pe+a,ye+a*.7,4),Rn(i,pe-a,ye+a*.7,4),Rn(i,pe+a,ye-a*.7,4),Rn(i,pe-a,ye-a*.7,4);i.fillStyle=Ae[0],Rn(i,pe,ye,8*(1-s)+2)}});for(let i=0;i<10;i++){const s=i/10*6.28;F(e.x+Math.cos(s)*.4,e.y+Math.sin(s)*.4,.05,0,0,y(.6,1.2),y(.5,.8),Ae[1+i%3],2,-1,!0,.9)}};et.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),s=o-t,l=i-n,a=Math.hypot(s,l)||.01,u=s/a,f=l/a,h=Math.min(16,Math.max(4,Math.round(a/.28))),c=new Float32Array(h*4);for(let m=0;m<h;m++){const p=(m+.5)/h,g=y(-.16,.16);c[m*4]=t+s*p-f*g,c[m*4+1]=n+l*p+u*g,c[m*4+2]=y(18,30),c[m*4+3]=p*r}const d=r+1.9;A({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const g=p*d;for(let x=0;x<h;x++){const v=g-c[x*4+3];if(v<0)continue;const M=v>1.5?Math.max(0,1-(v-1.5)/.4):1;if(M<=0)continue;Fn(c[x*4],c[x*4+1]);const S=c[x*4+2];m.globalAlpha=M*.8,m.fillStyle=b0,ll(m,pe,ye+1,S+6);const w=v/.3|0;m.globalAlpha=M,m.fillStyle=S0(w),ll(m,pe,ye,S*(w<5?.8:.6)),w<4&&nt(x*7+(g*12|0))>.72&&(m.fillStyle=Ae[0],m.fillRect(Math.round(pe+(nt(x*3+(g*12|0))-.5)*S*.5),Math.round(ye-2),2,2))}m.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,g){const x=mt(g.uid),v=x?x.x:o,M=x?x.y:i;Fn(v,M,.4);const S=pe,w=ye;Fn(v+u,M+f,.4);let _=pe-S,T=ye-w;const R=Math.hypot(_,T)||1;_/=R,T/=R;const z=1-p*.6;for(let I=0;I<9;I++){const O=(10+I*5*(.8+Math.random()*.4))*z;m.globalAlpha=1-I/10,m.fillStyle=Ae[Math.min(4,I>>1)],Rn(m,S-_*O+(Math.random()-.5)*3,w-T*O+(Math.random()-.5)*3,(10-I)*z)}if(g.n<22&&p<.9){for(let I=0;I<2;I++){const O=y(-2.5,2.5);F(v,M,.35,-u*2-f*O,-f*2+u*O,y(.5,1.6),.5,Ae[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&p>.85){g.end=!0;for(let I=0;I<8;I++){const O=I/8*6.28;F(v,M,.1,Math.cos(O)*2.5+u,Math.sin(O)*2.5+f,.4,.6,I&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;F(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}ot(4)};const Ea=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],ka=[],N1=[],$1=[];Ea.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,s)=>s<0||s>=Ea.length||i<0||i>=e.length||Ea[s][i]===".";ka.push(n-9),N1.push(t),$1.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const X3=["#ff7a20","#ffd84a","#fffbe0"];et.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,s=Math.random()*6.28,l=new Float32Array(i),a=new Float32Array(i);for(let u=0;u<i;u++){const f=s+u/i*6.28;l[u]=t+Math.cos(f)*o,a[u]=n+Math.sin(f)*o}A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const h=f*2.6,c=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=h-d*.05;m<0||(Fn(l[d],a[d]),u.globalAlpha=c*.85,u.fillStyle=b0,ll(u,pe,ye+1,46),u.globalAlpha=c,u.fillStyle=S0(m/.45),ll(u,pe,ye,26))}u.globalAlpha=1}}),A({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const h=r*(1-(1-f)*(1-f)),c=36;u.globalAlpha=1-f;for(let d=0;d<c;d++){const m=d/c*6.28;Fn(t+Math.cos(m)*h,n+Math.sin(m)*h),u.fillStyle=Ae[d&1],Rn(u,pe,ye,7*(1-f)+2)}}}),A({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,h){const c=f*1.15;for(let d=0;d<i;d++){const m=c-d*.05;if(m<0)continue;if(!(h.fired&1<<d)){h.fired|=1<<d;for(let S=0;S<5;S++)F(l[d],a[d],.3,y(-.8,.8)+(l[d]-t)*.4,y(-.8,.8)+(a[d]-n)*.4,y(3,5),y(.6,.9),Ae[S%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const g=95*p;Fn(l[d],a[d]);const x=pe,v=ye;u.globalAlpha=Math.min(1,p*1.5);const M=c*24|0;for(let S=0;S<g;S+=4){const w=S/g,_=16*(1-w*.75)+(nt(d*31+S+M)-.5)*4,T=(nt(d*17+S*3+M)-.5)*7*w;if(u.fillStyle=w<.25?Ae[1]:w<.6?Ae[2]:Ae[3],u.fillRect(Math.round(x+T-_/2),Math.round(v-S-4),Math.round(_),4),w<.7){u.fillStyle=Ae[0];const R=_*.4;u.fillRect(Math.round(x+T-R/2),Math.round(v-S-4),Math.max(2,Math.round(R)),4)}}}}}),A({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const h=f*1.2,c=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,Fn(t,n,c);const m=pe,p=ye-Ea.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=X3[g];for(let x=0;x<ka.length;x++){if($1[x]!==g)continue;const v=Math.abs(ka[x]),M=v>=4?Math.round(Math.sin(h*14)*(v-3)*.45):0;u.fillRect(Math.round(m+ka[x]*d-d/2),Math.round(p+(N1[x]+M)*d),d,d)}}}}),ot(9)};Oe.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)F(t,n,.45,y(-1.3,1.3),y(-1.3,1.3),y(1.6,3.2),y(.3,.5),o<3?Ae[0]:Ae[1],2,10,!0,.97);F(t,n,.45,y(-.5,.5),y(-.5,.5),1,.45,Ae[2],3,8,!0,.95),A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){Fn(t,n,.45);const s=4+i*(r?16:11),l=Math.max(2,Math.round(s/3));o.globalAlpha=1-i,o.fillStyle=i<.4?Ae[1]:Ae[2];for(let a=0;a<l;a++){const u=a/l,f=s*(1-u),h=s*u*.7;Rn(o,pe+f,ye+h,3),Rn(o,pe-h/.7,ye+f*.7,3),Rn(o,pe-f,ye-h,3),Rn(o,pe+h/.7,ye-f*.7,3)}i<.3&&(o.fillStyle=Ae[0],Rn(o,pe,ye,6))}})};const en="#fff2d6",Mn="#e2b878",Ko="#9a6232",Yr="#4e2e16",rs="#e8643a",ji="#ffcc66",ul="#a07a48",Pe=Math.round,cr=Math.PI*2;function Re(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Pe(t),Pe(n),r,o)}function ur(e,t,n,r,o,i,s){const l=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let a=0;a<=l;a++)e.fillRect(Pe(t+(r-t)*a/l-i/2),Pe(n+(o-n)*a/l-i/2),i,i)}function Qi(e,t,n,r,o,i=rs){const s=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let l=0;l<=s;l++){const a=l/s,u=a<.35?3:a<.8?2:1;e.fillStyle=a<.3?Ko:a>.82?i:en,e.fillRect(Pe(t+(r-t)*a-u/2),Pe(n+(o-n)*a-u/2),u,u)}}function vu(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=Pe(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Pe(t-s),Pe(n+i),s*2,2)}}function H1(e,t){const n=(e-t)*B.HW,r=(e+t)*B.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const W1=e=>{const t=mt(e);return t&&!t.dead&&!ze(t)?t:null},G3=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},V1=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Fe.erizo_A=(e,t,n,r,o)=>{e.translate(Pe(n),Pe(r)),e.rotate(o),Re(e,-15,-2,16,4,Yr),Re(e,-14,-1,14,2,Mn),Re(e,-9,-1,3,2,en),Re(e,-4,-1,3,2,en),Re(e,0,-2,3,4,Yr),Re(e,3,-1,3,2,rs),Re(e,6,0,2,1,ji),Re(e,-17,-4,5,2,en),Re(e,-17,2,5,2,en),Math.random()<.3&&F(t.x,t.y,t.z||.45,0,0,-.3,.25,Mn,2,0,!1)};Oe.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:y(0,cr),l:y(8,12)}));A({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const s of t)Qi(n,o+Math.cos(s.a)*s.l,i+Math.sin(s.a)*s.l*.8,o,i)}});for(let n=0;n<5;n++)F(e.x,e.y,.45,y(-2,2),y(-2,2),y(.5,2),.3,n%2?Mn:en,2,6,!1)};Fe.erizo_Q=(e,t,n,r,o,i)=>{const l=t.z||.45;e.translate(Pe(n),Pe(r)),e.rotate(o),Re(e,-31,-3,32,6,Yr);for(let u=0;u<30;u+=6)Re(e,-30+u,-2,3,4,en),Re(e,-30+u+3,-2,3,4,Ko);Re(e,0,-3,4,6,Yr),Re(e,4,-2,4,4,rs),Re(e,8,-1,3,2,ji);for(let u=0;u<3;u++)Re(e,-36+u*3,-6+u,4,2,en),Re(e,-36+u*3,4-u,4,2,en);gt(!0);const a=Lt();a.globalAlpha=.55,a.fillStyle="#ffe2a8",a.fillRect(-64,-7,28,1),a.fillRect(-74,6,36,1),a.fillRect(-56,0,20,1),a.globalAlpha=1,a.fillStyle=ji;for(let u=0;u<5;u++)a.fillRect(-6-u*6,Pe(Math.sin(i*38+u*1.3)*5)-1,2,2);gt(!1),Math.random()<.5&&F(t.x,t.y,l,y(-.4,.4),y(-.4,.4),.3,.35,Math.random()<.5?en:Mn,2,3,!1)};et.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=H1(t,n),i=-o,s=r;A({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(a,u){const[f,h]=C(e.x+t*.35,e.y+n*.35,.45),c=u*.32,d=-9*Math.cos(c*55)*Math.exp(-c*14),m=f+r*d,p=h+o*d,g=f+i*15-r*5,x=h+s*15-o*5,v=f-i*15-r*5,M=h-s*15-o*5;a.globalAlpha=1-u,ur(a,f+r*3,h+o*3,g,x,3,Ko),ur(a,f+r*3,h+o*3,v,M,3,Ko),ur(a,g,x,m,p,2,en),ur(a,v,M,m,p,2,en)}}),A({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(a,u){const[f,h]=C(e.x+t*.5,e.y+n*.5,.45),c=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),g=r*m-o*p,x=r*p+o*m,v=d?c*.55:c;ur(a,f,h,f+g*v,h+x*v,3,ji),ur(a,f,h,f+g*v*.5,h+x*v*.5,1,"#ffffff")}}});for(let a=0;a<6;a++)F(e.x-t*.2,e.y-n*.2,.4,-t*y(1,2.5)+y(-.5,.5),-n*y(1,2.5)+y(-.5,.5),y(.3,1),.45,a%2?Mn:ul,3,2,!1,.9);const l=Math.atan2(n,t);for(let a=0;a<7;a++){const u=l+y(-.25,.25),f=y(5,9);F(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,y(0,.6),.22,a%2?ji:en,2,0,!0,.86)}ot(1.5)};et.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,s,l)=>{const a=W1(e.uid);if(!a)return;const u=s*l.dur,f=u<.2?V1(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=C(a.x,a.y,.4);for(let d=0;d<n;d++){const m=d/n*cr+.17,p=Math.sin(m);if(p>=0!==o)continue;const g=u<t?Math.sin(b.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,v=h+Math.cos(m)*16,M=c+p*12,S=v+Math.cos(m)*x+g,w=M+p*x*.75-x*.3;Qi(i,v,M,S,w,(b.T*7+d*.37)%1<.12?"#ffffff":rs)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),A({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const s=.35+i*.75;o.globalAlpha=1-i;for(let l=0;l<20;l++){const a=l/20*cr,[u,f]=C(e.x+Math.cos(a)*s,e.y+Math.sin(a)*s),[h,c]=C(e.x+Math.cos(a)*(s+.22),e.y+Math.sin(a)*(s+.22));ur(o,u,f,h,c,2,l%2?Mn:Ko)}}});for(let o=0;o<14;o++){const i=o/14*cr,s=y(2,3.5);F(e.x,e.y,.45,Math.cos(i)*s,Math.sin(i)*s,y(1.5,3),.5,o%3?en:Mn,2,8,!1,.92)}ot(2)};et.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,l=-i/s,a=o/s,[u,f]=H1(o,i),h=u>=0?1:-1;A({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,v=Math.min(1,x/r);let M=e.x+o*v,S=e.y+i*v;const w=mt(e.uid);if(w){if(w.dead||ze(w))return;M=w.x,S=w.y}const[_,T]=C(M,S,.32),R=16,z=x*36*h;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let I=0;I<3;I++){const O=(I-1)*9;ur(m,_-u*(R+4)-f*O,T-f*(R+4)+u*O,_-u*(R+18+I*5)-f*O,T-f*(R+18+I*5)+u*O,2,Mn)}vu(m,_,T,R+1,Yr),vu(m,_,T,R-1,Ko),vu(m,_-4,T-4,R-9,Mn);for(let I=0;I<10;I++){const O=z+I*cr/10,U=Math.cos(O),X=Math.sin(O);Qi(m,_+U*(R-3),T+X*(R-3),_+U*(R+10),T+X*(R+10))}}});const c=Math.max(4,Math.min(10,Pe(s*2.2))),d=Array.from({length:c},(m,p)=>({k:(p+.5)/c,o:y(-.28,.28),lean:y(-6,6),h:y(9,14)}));A({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,v=Math.min(1,(g.dur-x)/.5);for(const M of d){if(x<M.k*r)continue;const S=Math.min(1,(x-M.k*r)/.08),[w,_]=C(e.x+o*M.k+l*M.o,e.y+i*M.k+a*M.o);m.globalAlpha=v*.45,Re(m,w-4,_-1,8,3,Yr),m.globalAlpha=v,Qi(m,w+M.lean*S,_-M.h*S,w,_)}}});for(let m=0;m<12;m++){const p=Math.random();F(e.x+o*p+y(-.2,.2),e.y+i*p+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.5,1.4),y(.4,.7),m%2?Mn:ul,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;F(e.x,e.y,.35,l*p*y(2,4),a*p*y(2,4),y(1.5,3),.45,en,2,8,!1,.92)}ot(2)};et.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=G3(e),r=n&&n.dur||3,o=.16,i=36,s=Array.from({length:i},(c,d)=>{const m=Math.random()*cr,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(r-.5)+y(0,.08),lean:y(-7,7),h:y(10,15),hit:!1}});A({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur,g=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);c.globalAlpha=.85*g;for(let v=0;v<8;v++){const M=v*cr/8+p*.4;for(const S of[-.09,.09]){const[w,_]=C(e.x+Math.cos(M+S)*x,e.y+Math.sin(M+S)*x),[T,R]=C(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));ur(c,w,_,T,R,3,rs)}}c.globalAlpha=.45*g;for(let v=0;v<48;v++){const M=v/48*cr-p*.2,[S,w]=C(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);Re(c,S-1,w-1,2,2,Mn)}for(const v of s){if(p<v.t0+o)continue;const[M,S]=C(v.x,v.y);c.globalAlpha=.4*g,Re(c,M-4,S-1,8,3,Yr),c.globalAlpha=g,Qi(c,M+v.lean,S-v.h,M,S)}}}),A({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur;for(const g of s){const x=(p-g.t0)/o;if(x<0)continue;if(x>=1){g.hit||(g.hit=!0,F(g.x,g.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Math.random()<.5?Mn:ul,2,7,!1));continue}const[v,M]=C(g.x,g.y,3.6*(1-x)),S=g.lean*1.4;c.globalAlpha=.35,ur(c,v+S*2.4,M-52,v+S,M-22,1,en),c.globalAlpha=1,Qi(c,v+S,M-22,v,M)}}});const l=Zo(e,r),a=b.T,u=Array.from({length:16},(c,d)=>({a:d/16*cr+y(-.07,.07),h:d%2?y(1.2,1.35):y(1.6,1.8),tip:y(.84,.9),w:d%2?5:7,ph:Math.random()*cr,dl:d/16*.3})).sort((c,d)=>Math.cos(c.a)+Math.sin(c.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(c,d,m)=>{const p=sn(l);if(p<=0){d.t=d.dur+1;return}const g=b.T-a,x=Math.min(1,p/.3);for(const v of u){const M=Math.cos(v.a),S=Math.sin(v.a);if(Sr(M,S,0)>0!==m)continue;const w=V1((g-v.dl)/.3)*x;if(w<=.02)continue;const _=Math.sin(b.T*1.8+v.ph)*.04,T=e.x+M*t,R=e.y+S*t;Ke(T,R);const z=vt.x,I=vt.y;Ke(e.x+Math.cos(v.a+_)*t*(1-(1-v.tip)*w),e.y+Math.sin(v.a+_)*t*(1-(1-v.tip)*w),v.h*w),B3(c,z,I,vt.x,vt.y,v.w,m?1:.8),c.globalAlpha=m?1:.85,Re(c,z-6,I-1,12,3,ul),Re(c,z-3,I-2,6,2,Mn)}c.globalAlpha=1};A({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!1),l.rem>0&&Kr(l,e.x,e.y,t*.9,16764006,.3)}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!0)}});const h=W1(e.uid);if(h)for(let c=0;c<10;c++)F(h.x,h.y,.6,y(-.4,.4),y(-.4,.4),y(7,10),.45,c%2?en:Mn,2,0,!1,1);ot(2)};function B3(e,t,n,r,o,i,s){const l=Math.max(4,Math.ceil(Math.hypot(r-t,o-n)/3));for(let a=0;a<=l;a++){const u=a/l,f=Math.max(1,Pe(i*Math.pow(1-u,.75))),h=Pe(t+(r-t)*u),c=Pe(n+(o-n)*u);e.globalAlpha=s,e.fillStyle=Yr,e.fillRect(h-f-1,c-2,f*2+2,4),e.fillStyle=u<.28?Ko:u>.84?rs:en,e.fillRect(h-f,c-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?Yr:Mn,e.fillRect(h+Pe(f*.3),c-2,f-Pe(f*.3),4))}e.fillStyle=ji,e.fillRect(Pe(r)-1,Pe(o)-1,2,2)}let te=0,ee=0;function Ne(e,t,n=0){te=(e-t)*B.HW+B.OX,ee=(e+t)*B.HH-n*B.ZK}function $n(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Oo=e=>e<0?0:e>1?1:e,pf=e=>1-(1-e)*(1-e),Vt=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],ln=["#ffe0f4","#ff9ad8","#e060b0"],vo=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],Ee=["#ffffff","#fff2a0","#ffd24a"];function w0(e,t,n,r){const o=[],i=[],s=[],l=[],a=e.length,u=(f,h)=>h<0||h>=a||f<0||f>=e[h].length||t.indexOf(e[h][f])<0;return e.forEach((f,h)=>{for(let c=0;c<f.length;c++){const d=t.indexOf(f[c]);d<0||(o.push(c-n),i.push(h-r),s.push(d),l.push(u(c-1,h)||u(c+1,h)||u(c,h-1)||u(c,h+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(s),B:Uint8Array.from(l),n:o.length,h:a}}const bu=w0(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function q1(e,t,n,r){for(let o=0;o<bu.n;o++)e.fillRect(Math.round(t+bu.X[o]*r-r/2),Math.round(n+bu.Y[o]*r-r/2),r,r)}function so(e,t,n,r){$n(e,t,n,3);for(let o=2;o<=r;o+=2)$n(e,t+o,n+o,2),$n(e,t-o,n+o,2),$n(e,t+o,n-o,2),$n(e,t-o,n-o,2)}function fl(e,t,n,r,o,i,s){for(let l=0;l<4;l++){const a=o+l*Math.PI/2,u=a+Math.PI/2,f=Math.cos(a)*r,h=Math.sin(a)*r*i,c=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(s+1)));for(let p=0;p<m;p++){const g=p/m;$n(e,t+f+(c-f)*g,n+h+(d-h)*g,s)}}}function Xc(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const ds=new Map;function Y1(e,t,n=!1){if(e.id==null)return;let r=ds.get(e.id);if(!r){ds.size>200&&ds.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},ds.set(e.id,r);const o=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,s,l){if(l.fin)return;const a=b.game;if(a){for(const u of a.projs)if(u.id===o)return;l.fin=!0,l.dur=l.t,ds.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}et.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){Ne(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=Vt[1],fl(r,te,ee,i,o*Math.PI,.75,3),r.fillStyle=ln[1],fl(r,te,ee,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=Vt[0],$n(r,te,ee,4)}});for(let r=0;r<6;r++)F(t,n,.45,y(-1,1),y(-1,1),y(.3,1),.4,r&1?ln[1]:Vt[1],2,0,!0)};Fe.gato_Q=(e,t,n,r,o,i)=>{Y1(t,N3);const s=-Math.cos(o),l=-Math.sin(o),a=-l,u=s;for(let c=1;c<16;c++){const d=8+c*3.2,m=Math.sin(c*.7-i*22)*(2+c*.35);e.globalAlpha=1-c/16,e.fillStyle=c&1?ln[1]:ln[2],e.fillRect(Math.round(n+s*d+a*m),Math.round(r+l*d+u*m),2,2)}e.globalAlpha=1,gt(!0);const f=Lt();f.fillStyle=Vt[3],f.globalAlpha=.16,Xc(f,n,r,20),f.globalAlpha=.22,Xc(f,n,r,13),f.globalAlpha=1,gt(!1);const h=i*14;for(let c=-3;c<3;c++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(c+.5)*(c+.5);if(m>9)continue;let p;m>6?p=Vt[4]:d===-2&&c===-2?p=Vt[0]:p=((d*.8+c+h)%4+4)%4<1.3?Vt[1]:Vt[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+c*3),3,3)}};function N3(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)F(t,n,.45,y(-.6,.6),y(-.6,.6),y(0,.6),.4,o&1?ln[1]:Vt[2],2,1,!0);return}const r=Math.random()*6.28;A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){Ne(t,n,.45);const s=Math.round(14*Oo(i/.4));o.globalAlpha=1-i*i;for(let l=0;l<5;l++){const a=r+l/5*6.28;for(let u=0;u<s;u++){const f=4+u*3,h=a+u*.3;o.fillStyle=u+l&1?ln[1]:Vt[1],o.fillRect(Math.round(te+Math.cos(h)*f),Math.round(ee+Math.sin(h)*f*.7),2,2)}}i<.25&&(o.fillStyle=Vt[0],$n(o,te,ee,10*(1-i*3)))}});for(let o=0;o<10;o++)F(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(.5,1.5),y(.4,.6),o&1?ln[0]:Vt[1],2,2,!0);ot(2)}const Ar=w0(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);et.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(a,u,f,h)=>{for(let c=0;c<a;c++){const d=h+c/a*6.28,m=Math.cos(d),p=Math.sin(d),g=Math.atan2(m+p,m-p),x=g+Math.PI/2,v=Math.cos(x),M=Math.sin(x),S=new Float32Array(Ar.n*2);for(let w=0;w<Ar.n;w++)S[w*2]=Ar.X[w]*v-Ar.Y[w]*M,S[w*2+1]=Ar.X[w]*M+Ar.Y[w]*v;o.push({x:t+m*u,y:n+p*u,t:f+c*.014,c:S})}},s=Math.random()*6.28;i(5,r*.38,.03,s),i(9,r*.78,.14,s+.35),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(a,u){const f=u*1.6,h=u>.55?(1-u)/.45:1;for(const c of o){const d=f-c.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,g=Math.max(2,Math.round(p*.6)),x=Math.round(p);Ne(c.x,c.y),a.globalAlpha=h*.9;for(let v=0;v<3;v++){a.fillStyle=v===0?vo[3]:v===1?vo[1]:vo[0];for(let M=0;M<Ar.n;M++){const S=Ar.B[M]===1,w=Ar.Y[M]<0;(v===0?!S:v===1?S||w:S||!w)||a.fillRect(Math.round(te+c.c[M*2]*p-x/2),Math.round(ee+c.c[M*2+1]*p*.5-g/2),x,g)}}}a.globalAlpha=1}});const l=Math.random()*6.28;A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(a,u){const f=r*pf(Oo(u*1.8));a.globalAlpha=1-u;for(let h=0;h<6;h++){const c=l+h*Math.PI/3,d=Math.cos(c),m=Math.sin(c);for(let p=.25;p<f;p+=.16)Ne(t+d*p,n+m*p),a.fillStyle=p<f*.5?vo[1]:vo[2],$n(a,te,ee,4-p/r*2);if(f>r*.4){const p=f*.6;for(let g=-1;g<=1;g+=2){const x=c+g*.75;for(let v=.12;v<.45;v+=.12)Ne(t+d*p+Math.cos(x)*v,n+m*p+Math.sin(x)*v),a.fillStyle=vo[0],$n(a,te,ee,3)}}}}});for(let a=0;a<22;a++){const u=Math.random()*6.28,f=Math.random()*r;F(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,y(.3,1.1),Math.cos(u)*y(.5,2),Math.sin(u)*y(.5,2),y(0,.4),y(.7,1.1),vo[a%2],2,.5,!0,.95)}ot(4)};const bo=w0([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);et.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;A({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(s,l){Ne(t,n);const a=3,u=te,f=ee-2;for(let h=0;h<3;h++){s.fillStyle=h===0?Vt[3]:h===1?Vt[1]:Ee[1];for(let c=0;c<bo.n;c++){if((bo.K[c]===1?2:bo.B[c]?1:0)!==h)continue;const m=nt(c*7.13+i),p=-bo.Y[c]/(bo.h-1);m*.6+p*.6+.2<l*1.3||(s.globalAlpha=.85*(1-l*.5),s.fillRect(Math.round(u+bo.X[c]*a-a/2),Math.round(f+bo.Y[c]*a-l*18*m),a,a))}}}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(s,l){const a=l*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,h=(a-f*.12)/.3;h<0||h>=1||(Ne(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),s.globalAlpha=1-h,s.fillStyle=u&1?ln[1]:Vt[1],so(s,te,ee,8*(1-h)+2))}}}),A({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(s,l){Ne(r,o,1.05);const a=te,u=ee,f=l<.18?l/.18:l<.55?1:Math.max(0,1-(l-.55)/.12),h=[3,5,7,5,3];if(f>.05)for(let c=-1;c<=1;c+=2){const d=a+c*9;for(let m=0;m<5;m++){const p=h[m]*2,g=Math.max(1,Math.round(2*f));s.fillStyle=m===0||m===4?Ee[2]:Ee[1],s.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,g)}s.fillStyle="#2a1040",s.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}s.globalAlpha=l<.2?l/.2:l>.6?Math.max(0,(1-l)/.4):1,s.fillStyle=ln[1];for(let c=0;c<=8;c++){const d=Math.PI*(.15+.7*c/8);s.fillRect(Math.round(a+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}s.fillStyle=Vt[0],s.fillRect(Math.round(a-6),Math.round(u+9),2,2),s.fillRect(Math.round(a+4),Math.round(u+9),2,2)}});for(let s=0;s<6;s++)F(t,n,.5,y(-.8,.8),y(-.8,.8),y(.5,1.5),.5,Vt[1+s%3],2,0,!0);for(let s=0;s<10;s++){const l=s/10*6.28;F(r,o,.5,Math.cos(l)*2,Math.sin(l)*2,y(.2,1),.45,s&1?ln[1]:Vt[1],2,0,!0,.9)}};const ma=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Su=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],wu=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],no=3.7,Gc=[1,.75,.55,.4,.28],oi=Math.round;let Bc=null,Nc=null,$c=[],Hc=[];function Wc(e,t,n,r,o,i,s){const l=b.T;for(let a=0;a<12;a++){const u=a/12*6.283+l*.5,f=Math.cos(u),h=Math.sin(u);if(Sr(f*no,h*no,r)>0===s)for(let c=1;c<=14;c++){const d=c/14;if(d>o)break;const m=((d-l*1.6+a*.29)%1+1)%1,p=m<.12;Ne(t+f*r*d,n+h*r*d,no*(1-d)),e.globalAlpha=i*(p?1:s?.55:.45),e.fillStyle=p?Ee[0]:c%3?Vt[1]:ln[1],p&&s?so(e,te,ee,5):$n(e,te,ee,p?4:3)}}}et.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*B.HW*Math.SQRT2;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(w,_){const T=_*1.1;Ne(t,n);const R=te,z=ee;w.globalAlpha=_>.85?(1-_)/.15:1;const I=wu.length/2,O=Oo(T/.45)*I;w.fillStyle=Vt[1];for(let U=0;U<I&&U<O;U++){const X=wu[U*2],N=wu[U*2+1],Q=Math.min(1,O-U),k=R+ma[X]*i,E=z+Su[X]*i*.55,L=R+ma[N]*i,G=z+Su[N]*i*.55,$=Math.hypot(L-k,G-E)*Q,V=Math.round($/6);for(let q=0;q<=V;q++){const ut=q*6/($||1)*Q;w.fillRect(Math.round(k+(L-k)*ut),Math.round(E+(G-E)*ut),2,2)}}for(let U=0;U<ma.length;U++)w.fillStyle=U>=9?Ee[2]:Ee[1],so(w,R+ma[U]*i,z+Su[U]*i*.55,3+3*(.5+.5*Math.sin(b.T*9+U*1.7)))}});const s=Zo(e,o),l=()=>b.T-s.t0,a=()=>pf(Oo(l()/.45)),u=w=>Math.min(1,l()/.15,w/.12+1e-4);A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(w,_,T){const R=sn(s);if(R<=0){T.t=T.dur+1;return}const z=Oo(u(R)),I=a(),O=no*(1-I);Ne(t,n,O);const U=te,X=ee;Bc!==w&&(Bc=w,$c=[{u0:0,fill:Pt(w,Vt[3],5),a:.55},{u0:.65,fill:Pt(w,Vt[2],6),a:.55},{u0:.9,fill:Pt(w,Vt[1],10),a:.6}]),qr(w,U,X,Pn(r*I),0,ir(no-O),!1,$c,Gc,z),Wc(w,t,n,r,I,z,!1),Kr(s,t,n,r*1.1,12615935,.7*z)}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(w,_,T){const R=sn(s);if(R<=0){T.t=T.dur+1;return}const z=Oo(u(R)),I=a(),O=no*(1-I);Ne(t,n,O);const U=te,X=ee;Nc!==w&&(Nc=w,Hc=[{u0:0,fill:Pt(w,Vt[2],3),a:.5},{u0:.65,fill:Pt(w,Vt[1],4),a:.55},{u0:.9,fill:Pt(w,Vt[0],9),a:.7}]),qr(w,U,X,Pn(r*I),0,ir(no-O),!0,Hc,Gc,z),Wc(w,t,n,r,I,z,!0),Ne(t,n,no);const N=te,Q=ee,k=Oo(l()/.3);w.globalAlpha=z;for(let E=-9;E<=9;E+=2){const L=oi((14-Math.abs(E)*1.4)*k);if(L<1)continue;const G=Math.max(1,oi(2+2*Math.sin(b.T*3)));w.fillStyle=Math.abs(E)>6?Ee[2]:Ee[1],w.fillRect(oi(N-L),oi(Q+E),L-G,2),w.fillRect(oi(N+G),oi(Q+E),L-G,2)}w.fillStyle=Ee[0],fl(w,N,Q,22+3*Math.sin(b.T*6),b.T*1.5,1,2)}});const f=12,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let w=0;w<f;w++){const _=Math.random()*6.28,T=Math.sqrt(Math.random())*r*.9;h[w]=t+Math.cos(_)*T,c[w]=n+Math.sin(_)*T,d[w]=.45+w/(f-1)*.55+y(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*B.ZK),g=40/p,x=-352.8/p;A({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(w,_,T){const R=_*1.2;for(let z=0;z<f;z++){const I=R-(d[z]-m);if(!(I<0))if(I<m){const O=I/m;Ne(h[z],c[z],4.5*(1-O));const U=te+(1-O)*40,X=ee;for(let N=-1;N<=1;N++){const Q=N*.12,k=g*Math.cos(Q)-x*Math.sin(Q),E=g*Math.sin(Q)+x*Math.cos(Q);w.fillStyle=N===0?ln[1]:Vt[1];for(let L=1;L<10;L++)w.globalAlpha=1-L/10,w.fillRect(Math.round(U+k*L*3.2+N*3),Math.round(X+E*L*3.2),2,2)}w.globalAlpha=1,w.fillStyle=Ee[1],w.fillRect(Math.round(U-6),Math.round(X-1),12,2),w.fillRect(Math.round(U-1),Math.round(X-6),2,12),w.fillStyle=Ee[0],w.fillRect(Math.round(U-2),Math.round(X-2),4,4)}else{if(!(T.landed&1<<z)){T.landed|=1<<z;for(let U=0;U<2;U++)F(h[z],c[z],.1,y(-1,1),y(-1,1),y(1,2),.45,U?Ee[1]:ln[1],2,4,!0)}const O=(I-m)/.2;if(O>=1)continue;Ne(h[z],c[z]),w.globalAlpha=1-O,w.fillStyle=Ee[1],so(w,te,ee,2+O*8)}}w.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(w,_,T){if(!T.boom){T.boom=!0,ot(8);for(let U=0;U<28;U++){const X=Math.random()*6.28,N=y(1,3.5);F(t,n,.3,Math.cos(X)*N,Math.sin(X)*N,y(1.5,3.5),y(.5,.8),[Ee[1],Vt[1],ln[1],Vt[0]][U&3],3,5,!0,.95)}}const R=.3+(r-.3)*pf(_),z=_*2;Ne(t,n,.2);const I=te,O=ee;if(_<.35){const U=1-_/.35;w.fillStyle=Vt[1],w.globalAlpha=U*.25,w.fillRect(Math.round(I-70),Math.round(O-35),140,70),w.globalAlpha=U*.4,w.fillRect(Math.round(I-40),Math.round(O-20),80,40),w.fillStyle=Vt[0],w.globalAlpha=U*.7,w.fillRect(Math.round(I-15),Math.round(O-8),30,16)}w.globalAlpha=1-_*_;for(let U=0;U<10;U++){const X=z+U/10*6.28;Ne(t+Math.cos(X)*R,n+Math.sin(X)*R,.35+.2*Math.sin(_*6+U)),w.fillStyle=U&1?Ee[2]:Ee[1],q1(w,te,ee,3),w.fillStyle=Ee[0],w.fillRect(Math.round(te-1),Math.round(ee-1),2,2)}}});const v=24,M=new Float32Array(v),S=new Float32Array(v);for(let w=0;w<v;w++){const _=Math.random()*6.28,T=Math.sqrt(Math.random())*r;M[w]=t+Math.cos(_)*T,S[w]=n+Math.sin(_)*T}A({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(w,_){const T=b.T*8|0;for(let R=0;R<v;R++){const z=nt(R*13+T);z<.25||(Ne(M[R],S[R]),w.globalAlpha=(1-_)*z,w.fillStyle=R%3?Vt[1]:Ee[1],w.fillRect(Math.round(te),Math.round(ee),2,2))}}})};Fe.gato_A=(e,t,n,r,o,i)=>{const s=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);Y1(t,$3,s),gt(!0);const l=Lt(),a=Math.cos(o),u=Math.sin(o);for(let c=1;c<=4;c++)l.globalAlpha=.8-c*.17,l.fillStyle=c&1?ln[1]:Vt[1],$n(l,n-a*c*5,r-u*c*5,4-c*.6);l.globalAlpha=1;const f=s?7:5,h=(i*16|0)&1;if(l.fillStyle=Vt[2],h)for(let c=-f;c<f;c+=2){const d=(f-Math.abs(c+1))*2;l.fillRect(Math.round(n-d/2),Math.round(r+c),Math.max(2,Math.round(d)),2)}else{const c=Math.round(f*1.4);l.fillRect(Math.round(n-c/2),Math.round(r-c/2),c,c)}if(l.fillStyle=ln[0],l.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),s){l.fillStyle=Ee[1];for(let c=0;c<3;c++){const d=i*10+c*2.09;l.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}gt(!1)};function K1(e,t,n){A({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){Ne(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=Vt[1],fl(r,te,ee,i,Math.PI/4,.75,2),r.fillStyle=ln[1],so(r,te+i,ee,3),so(r,te-i,ee,3),so(r,te,ee+i*.75,3),so(r,te,ee-i*.75,3),n&&(r.fillStyle=Ee[1],q1(r,te,ee-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)F(e,t,.45,y(-1,1),y(-1,1),y(.3,1.2),.35,n&&r&1?Ee[1]:Vt[1],2,1,!0)}function $3(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;K1(t,n,e.crit),st.sfx("atk_gato",t,n,e.crit?.9:.6)}Oe.gato=e=>K1(e.x,e.y,!!e.big);const Ot=Math.round,ve=Math.PI*2;let Ct=0,Rt=0;function ae(e,t,n=0){Ct=(e-t)*B.HW+B.OX,Rt=(e+t)*B.HH-n*B.ZK}function hn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Ot(t-r/2),Ot(n-r/2),r,r)}function No(e,t,n,r,o,i,s){const l=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let a=0;a<=l;a++)e.fillRect(Ot(t+(r-t)*a/l-i/2),Ot(n+(o-n)*a/l-i/2),i,i)}function ko(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Ot(t-s/2),Ot(n+i*o),Ot(s),Math.max(1,Ot(2*o)))}}const uo=e=>e<0?0:e>1?1:e,Nr=e=>1-(1-e)*(1-e),Y={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},ii=new Float32Array(72),si=new Float32Array(72);function rr(e,t,n,r,o,i,s,l,a,u,f,h,c){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,v=d/p;for(let S=0;S<=g;S++){const w=S/g,_=S===0||S===g?0:(nt(l+S*7.31)-.5)*2*s*Math.sqrt(Math.sin(w*Math.PI));ii[S]=t+d*w+x*_,si[S]=n+m*w+v*_}if(f>0)for(let S=0;S<g;S++)No(e,ii[S],si[S],ii[S+1],si[S+1],f,a);for(let S=0;S<g;S++)No(e,ii[S],si[S],ii[S+1],si[S+1],h,u);const M=Math.atan2(m,d);for(let S=0;S<c;S++){const w=1+Math.floor(nt(l+S*3.7+50)*Math.max(1,g-1));let _=ii[w],T=si[w],R=M+(nt(l+S*9.1)>.5?1:-1)*(.45+nt(l+S*1.3)*.6);for(let z=0;z<3;z++){const I=i*(1-z*.2),O=_+Math.cos(R)*I,U=T+Math.sin(R)*I;No(e,_,T,O,U,Math.max(1,h-1),z?a:u),_=O,T=U,R+=(nt(l+S*5+z)-.5)*1.3}}}function cl(e,t,n,r,o,i,s,l){let a=t,u=n,f=r;for(let h=0;h<5;h++){f+=(nt(o+h)-.5)*.9;const c=i*(1-h*.13),d=a+Math.cos(f)*c,m=u+Math.sin(f)*c*.5;if(No(e,a,u,d,m,2,s),nt(o+h*3.3)>.45){const p=f+(nt(o+h*7)>.5?.85:-.85);No(e,d,m,d+Math.cos(p)*c*.6,m+Math.sin(p)*c*.3,2,s)}a=d,u=m}l&&hn(e,a,u,3,l)}function hl(e,t,n,r,o){e.fillStyle=Y.cloudD,e.fillRect(Ot(t-3*r),Ot(n-r),6*r,2*r),e.fillStyle=o?Y.cloudL:Y.cloud,e.fillRect(Ot(t-2*r),Ot(n-2*r),4*r,2*r),e.fillStyle=o?Y.pale:Y.cloudM,e.fillRect(Ot(t-r),Ot(n-2.6*r),2*r,Ot(r*.8))}et.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;A({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){ae(t,n,.6);const s=Ct,l=Rt,a=b.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=nt(r+u+a*3)*ve,h=10+nt(r+u*2+a)*14;rr(o,s,l,s+Math.cos(f)*h,l+Math.sin(f)*h*.7,5,3,r+u*11+a,Y.cyan,Y.white,0,1,0)}hn(o,s,l,Ot(8*(1-i))+2,Y.white)}});for(let o=0;o<8;o++)F(t,n,.6,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.25,o&1?Y.cyan:Y.white,2,3,!0)};const pa=new Map;Fe.halcon_Q=(e,t,n,r,o,i)=>{let s=t.id!=null?pa.get(t.id):void 0;t.id!=null&&!s&&(pa.size>64&&pa.clear(),s=[t.x,t.y],pa.set(t.id,s));const l=Math.cos(o),a=Math.sin(o),u=150;let f=n-l*u,h=r-a*u;gt(!0);const c=Lt();if(s){ae(s[0],s[1],t.z||.45);const p=Math.hypot(n-Ct,r-Rt);if(p<u)f=Ct,h=Rt;else{c.globalAlpha=.4,c.fillStyle=Y.blue;const g=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let v=0;v<g;v++){if(nt(v*3.1+x)<.35)continue;const M=(u+v*9)/p;c.fillRect(Ot(n+(Ct-n)*M),Ot(r+(Rt-r)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;c.globalAlpha=.16,c.fillStyle=Y.blue,ko(c,n,r,18),c.globalAlpha=1,rr(c,n,r,f,h,11,7,d,Y.cyan,Y.white,4,2,2);const m=5+((i*30|0)&1)*3;c.fillStyle=Y.pale,c.fillRect(Ot(n-m),Ot(r-1),m*2,2),c.fillRect(Ot(n-1),Ot(r-m),2,m*2),c.fillStyle=Y.white,c.fillRect(Ot(n-3),Ot(r-3),6,6),gt(!1)};et.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ve;A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,s){ae(t,n),i.globalAlpha=.6*(1-s);for(let l=0;l<6;l++)cl(i,Ct,Rt,o+l*ve/6,r+l*13,9,Y.scorch)}}),A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,s){ae(t,n),i.globalAlpha=(1-s)*(1-s);for(let l=0;l<6;l++)cl(i,Ct,Rt,o+l*ve/6,r+l*13,9,Y.cyan,Y.white)}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,s){ae(t,n,.5);const l=b.T*30|0;i.globalAlpha=1-s*s;for(let a=0;a<4;a++){const u=nt(r+a*5+l)*ve,f=18+nt(r+a+l*2)*16;rr(i,Ct,Rt-6,Ct+Math.cos(u)*f,Rt+Math.sin(u)*f*.6,6,4,r+l*7+a,Y.blue,Y.pale,3,1,0)}s<.3&&hn(i,Ct,Rt,Ot(22*(1-s/.3))+2,Y.white)}});for(let i=0;i<12;i++)F(t,n,.5,y(-2.2,2.2),y(-2.2,2.2),y(1,2.6),y(.25,.45),i%3?Y.cyan:Y.yel,2,7,!0,.9);ot(2)};const La=new Map;et.halcon_W=e=>{if(e.type==="splash"||e.impact){H3(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;ae(t,n);const s=Ct,l=Rt;ae(r,o);const a=Math.hypot(Ct-s,Rt-l)||1,u=(Ct-s)/a,f=(Rt-l)/a;La.size>32&&La.clear(),La.set(e.uid,[u,f]);for(let h=0;h<8;h++)F(t,n,.7,y(-1,1),y(-1,1),y(1,2.5),y(.6,.9),h%3?Y.featherL:Y.cream,3,1.2,!1,.9);A({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(h,c){ae(r,o);const d=Ct,m=Rt,p=64*(1-Nr(c))+24,g=c*2.6;h.globalAlpha=.5+.5*c;const x=c>.75&&(b.T*20|0)&1?Y.white:Y.cyan;for(let v=0;v<4;v++){const M=g+v*ve/4;for(let S=-3;S<=3;S++){const w=M+S*.09;hn(h,d+Math.cos(w)*p,m+Math.sin(w)*p*.5,3,x)}for(let S=1;S<=2;S++)hn(h,d+Math.cos(M)*(p-S*5),m+Math.sin(M)*(p-S*5)*.5,2,Y.white)}hn(h,d,m,3,Y.white)}}),A({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(h,c){const d=uo(c*(i+.15)/i),m=-f,p=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;ae(t+(r-t)*x,n+(o-n)*x,.55);const v=Math.sin(x*Math.PI)*50,M=Ct,S=Rt-v,w=1-g/12;h.globalAlpha=w*(c>.8?(1-c)/.2:1);for(const _ of[-1,1]){const T=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;hn(h,M+m*T*_+R,S+p*T*_-Math.sin(x*34)*3,g<3?3:2,g<4?Y.white:Y.pale)}g%3===0&&(h.fillStyle=Y.cyan,h.fillRect(Ot(M-u*10),Ot(S-f*10),2,2))}}})};function H3(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=La.get(e.uid)||[0,1];A({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(s,l){ae(t,n),s.globalAlpha=.55*(1-l);for(let a=0;a<7;a++){const u=a/7*ve+nt(o+a)*.5,f=r*B.HW*(.5+nt(o+a*3)*.4);No(s,Ct,Rt,Ct+Math.cos(u)*f*.6,Rt+Math.sin(u)*f*.3,2,Y.ash),No(s,Ct+Math.cos(u)*f*.6,Rt+Math.sin(u)*f*.3,Ct+Math.cos(u+.25)*f,Rt+Math.sin(u+.25)*f*.5,2,Y.ash)}hn(s,Ct,Rt,8,Y.ash)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(s,l){const a=b.T*30|0;for(let f=0;f<2;f++){const h=uo(l*1.4-f*.2);if(h<=0||h>=1)continue;const c=.2+r*1.1*Nr(h);s.globalAlpha=1-h;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*ve;ae(t+Math.cos(m)*c,n+Math.sin(m)*c),hn(s,Ct,Rt,f?2:3,f?Y.pale:Y.white)}}s.globalAlpha=1-l;const u=8;for(let f=0;f<u;f++){const h=f/u*ve+l*.8,c=(f+1)/u*ve+l*.8;ae(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85);const d=Ct,m=Rt;ae(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85),rr(s,d,m-4,Ct,Rt-4,7,4,o+f*9+a,Y.blue,Y.pale,0,2,0),hn(s,d,m-4,4,Y.white)}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(s,l){const a=.3+r*1.3*Nr(l);s.globalAlpha=1-l;for(let u=0;u<8;u++){const f=u/8*ve+.2;ae(t+Math.cos(f)*a,n+Math.sin(f)*a,.25);const h=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let c=-2;c<=2;c++){const d=h+c*.35,m=9-Math.abs(c);hn(s,Ct-Math.cos(h)*6+Math.cos(d)*m,Rt-Math.sin(h)*6+Math.sin(d)*m,c?2:3,c?Y.pale:Y.white)}}l<.2&&(s.globalAlpha=1-l/.2,ae(t,n,.2),s.fillStyle=Y.white,ko(s,Ct+i[0]*6,Rt+i[1]*6,Ot(30*(1-l)),.5))}});for(let s=0;s<14;s++){const l=Math.random()*ve,a=y(1.5,3.5);F(t,n,.1,Math.cos(l)*a,Math.sin(l)*a,y(.5,1.6),y(.4,.7),s%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let s=0;s<6;s++)F(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1.5,2.5),y(.8,1.1),s&1?Y.featherL:Y.feather,3,1.5,!1,.92);ot(6)}et.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,s,l){const a=mt(l.uid);ae(a?a.x:n,a?a.y:r,.8);const u=Ct,f=Rt,h=Nr(uo(s*2.2));i.globalAlpha=s>.5?(1-s)/.5:1;for(const c of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+c*(.3+h*(.45+d*.24)),p=16+d*5+h*10;for(let g=6;g<p;g+=3){const x=g>p-6;hn(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/p*h*9,x?2:3,x?Y.white:d&1?Y.pale:Y.cyan)}}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,s){const l=.5+(o-.5)*Nr(s);i.globalAlpha=(1-s)*.9;for(let a=0;a<16;a++){const u=a/16*ve+s*1.6;for(let f=0;f<3;f++){const h=u+f*.07;ae(n+Math.cos(h)*l,r+Math.sin(h)*l),hn(i,Ct,Rt,3-f,f?Y.pale:Y.white)}}}})}for(let n=0;n<5;n++){const r=n/5*ve;F(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,y(.8,1.5),.4,n&1?Y.pale:Y.white,2,0,!0)}A({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=mt(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const s=i.x-o.lx,l=i.y-o.ly;o.lx=i.x,o.ly=i.y;const a=s-l,u=(s+l)*.5,f=Math.hypot(a,u);f>5e-4?(o.dx=o.dx*.82+a/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const h=Math.hypot(o.dx,o.dy),c=r*o.dur;n.globalAlpha=Math.min(1,c/.15)*(c>o.dur-.4?(o.dur-c)/.4:1),ae(i.x,i.y,.45);const d=Ct,m=Rt;if(h>.35){const p=o.dx/h,g=o.dy/h,x=b.T*70%11;for(let S=0;S<3;S++){const w=14+S*11+x,_=d-p*w,T=m-g*w,R=S===0?Y.white:S===1?Y.pale:Y.cyan;for(const z of[-1,1]){const I=Math.cos(z*.75),O=Math.sin(z*.75),U=-(p*I-g*O),X=-(p*O+g*I);for(let N=0;N<4;N++)hn(n,_+U*N*3,T+X*N*3,2,R)}}const v=-g,M=p;for(const S of[-1,1])for(let w=0;w<6;w++){const _=10+w*5+b.T*90%5;(w+(S>0?1:0))%3!==0&&(n.fillStyle=Y.pale,n.fillRect(Ot(d-p*_+v*12*S),Ot(m-g*_+M*12*S),2,1))}}else for(let p=0;p<3;p++){const g=b.T*5+p*ve/3;hn(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,p?Y.pale:Y.white)}}})};const ya=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],Tr=(()=>{const e=[],t=[],n=[],r=ya.length,o=(i,s)=>s>=0&&s<r&&i>=0&&i<ya[s].length&&ya[s][i]!==".";return ya.forEach((i,s)=>{for(let l=0;l<i.length;l++){const a=i[l];a!=="."&&(e.push(l-12),t.push(s-5),n.push(a==="e"?2:o(l-1,s)&&o(l+1,s)&&o(l,s-1)&&o(l,s+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();et.halcon_R=e=>{if(e.type==="global_hit"){W3(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,s){ae(t,n,3);const l=Ct,a=Rt,u=30+60*Nr(uo(s*2)),f=b.T*12|0;i.globalAlpha=Math.min(1,s*5)*(s>.75?(1-s)/.25:1)*.92;for(let h=0;h<9;h++){const c=h/9*ve+s*3.2;hl(i,l+Math.cos(c)*u,a+Math.sin(c)*u*.38,5+h%3,nt(r+h+f)>.8)}hl(i,l,a,7,nt(r+f)>.7)}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,s,l){const a=mt(l.uid),u=a?a.x:t,f=a?a.y:n;ae(t,n,3);const h=Ct,c=Rt,d=30+60*Nr(uo(s*2)),m=b.T*15|0,p=s>.75?(1-s)/.25:1;if(i.globalAlpha=p,nt(r+m*1.7)>.45){const x=nt(r+m)*ve,v=x+1.2+nt(r+m*3)*2;rr(i,h+Math.cos(x)*d,c+Math.sin(x)*d*.38,h+Math.cos(v)*d,c+Math.sin(v)*d*.38,9,6,r+m,Y.blue,Y.pale,3,1,1)}const g=s*o;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(ae(u,f,1),rr(i,h,c+8,Ct,Rt,12,10,r+(g*25|0),Y.blue,Y.white,5,2,2)),g>.3){const x=uo((g-.3)/.35),v=Ot(2+2*Nr(x)),M=(b.T*24|0)%5===0?.5:1;ae(u,f,2.2+x*.4);const S=Ct,w=Rt;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?Y.indigo:_===1?Y.cyan:Y.yel;for(let T=0;T<Tr.n;T++)Tr.K[T]===_&&i.fillRect(Ot(S+Tr.X[T]*v-v/2),Ot(w+Tr.Y[T]*v-v/2),v,v)}i.fillStyle=Y.white;for(let _=0;_<Tr.n;_++)Tr.K[_]===1&&Tr.Y[_]<-2&&i.fillRect(Ot(S+Tr.X[_]*v-1),Ot(w+Tr.Y[_]*v-1),2,2)}}});for(let i=0;i<24;i++){const s=i/24*ve,l=y(2,3);F(t+Math.cos(s)*l,n+Math.sin(s)*l,y(.2,1.2),-Math.cos(s)*l*1.6,-Math.sin(s)*l*1.6,y(.5,1.2),.6,i%3?Y.pale:Y.cloudL,2,0,i%3!==0,.97)}ot(5)};function W3(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ve;st.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],s=[.1,.05,.05],l=a=>{for(let u=0;u<3;u++)if(a>=i[u]&&a<i[u]+s[u])return u+1;return 0};A({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(a,u){const f=u*1.1,h=Nr(uo(f/.12));ae(t,n,3.6);const c=Ct,d=Rt,m=l(f)>0;a.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const g=p/6*ve+r;hl(a,c+Math.cos(g)*38*h,d+Math.sin(g)*12*h,Ot(4+2*h),m&&p%2===0)}hl(a,c,d,Ot(5+3*h),m)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(a,u){const f=u*.6,h=l(f);ae(t,n,3.5);const c=Ct+(nt(r)-.5)*30,d=Rt;if(ae(t,n,.1),h){const m=r+h*31;a.globalAlpha=.45,rr(a,c,d,Ct,Rt,16,22,m,Y.indigo,Y.blue,0,9,0),a.globalAlpha=1,rr(a,c,d,Ct,Rt,16,22,m,Y.cyan,Y.white,6,3,3),a.globalAlpha=h===1?.35:.18,a.fillStyle=Y.pale,ko(a,Ct,Rt-20,70,.6)}if(f>.1){const m=uo((f-.1)/.5);a.globalAlpha=(1-m)*.8,a.fillStyle=Y.cyan,ko(a,Ct,Rt,Ot(26*(1-m*.5)),.5),a.fillStyle=Y.white,ko(a,Ct,Rt,Ot(12*(1-m)),.5)}}}),A({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(a,u){ae(t,n),a.globalAlpha=.7*(u>.6?(1-u)/.4:1),a.fillStyle=Y.scorch,ko(a,Ct,Rt,16,.5);for(let f=0;f<8;f++)cl(a,Ct,Rt,o+f*ve/8,r+f*17,13,Y.scorch)}}),A({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(a,u){ae(t,n);const f=b.T*25|0;a.globalAlpha=1-u;for(let h=0;h<8;h++)cl(a,Ct,Rt,o+h*ve/8,r+h*17,13,h&1?Y.blue:Y.cyan,Y.white);for(let h=0;h<3;h++){const c=nt(r+h+f)*ve,d=30+u*60;rr(a,Ct,Rt,Ct+Math.cos(c)*d,Rt+Math.sin(c)*d*.5,7,5,r+f*3+h,Y.blue,Y.pale,0,2,0)}}});for(let a=0;a<18;a++){const u=Math.random()*ve,f=y(1.5,4);F(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,y(2,4),y(.4,.8),a%3===0?Y.yel:a%3===1?Y.cyan:Y.ash,a%3===2?3:2,8,a%3!==2,.92)}ot(8)}Fe.halcon_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=-l,u=s;for(let c=0;c<=16;c+=2){const d=c<3?0:c<12?3:2,m=n-s*c,p=r-l*c;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,v=(c===8||c===12)&&g!==0;e.fillStyle=g===0?Y.white:v?Y.feather:x?Y.cyan:Y.pale,e.fillRect(Ot(m+a*g-1),Ot(p+u*g-1),2,2)}}gt(!0);const f=Lt(),h=i*24|0;f.globalAlpha=.2,f.fillStyle=Y.blue,ko(f,n-s*6,r-l*6,12),f.globalAlpha=1;for(let c=0;c<2;c++){const d=4+nt(h+c*3+(t.id||0))*10,m=c?1:-1,p=n-s*d,g=r-l*d;rr(f,p,g,p+a*m*9-s*6,g+u*m*9-l*6,4,2,h*7+c,Y.cyan,Y.white,0,1,0)}f.fillStyle=Y.white,f.fillRect(Ot(n-2),Ot(r-2),4,4),gt(!1)};Oe.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;A({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(s,l){ae(t,n,.5),s.globalAlpha=1-l;for(let a=0;a<4;a++){const u=Math.PI/4+a*Math.PI/2;rr(s,Ct,Rt,Ct+Math.cos(u)*i*(.6+l*.5),Rt+Math.sin(u)*i*.7*(.6+l*.5),4,2.5,o+a,Y.cyan,Y.white,0,2,0)}hn(s,Ct,Rt,Ot((r?10:6)*(1-l))+2,Y.white)}});for(let s=0;s<(r?8:4);s++)F(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(.5,1.5),.25,s&1?Y.yel:Y.cyan,2,5,!0)};let Ut=0,Dt=0;function Ie(e,t,n=0){Ut=(e-t)*B.HW+B.OX,Dt=(e+t)*B.HH-n*B.ZK}function or(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Or=e=>e<0?0:e>1?1:e,Zi=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),yr=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],hi=["#f0e8b8","#d0c488","#a89a60","#6a6038"],gr=["#8a6a48","#5a3a20","#3a2414"],Zr=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Cn=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function j1(e,t){const n=[],r=[],o=[];return e.forEach((i,s)=>{for(let l=0;l<i.length;l++){const a=t.indexOf(i[l]);a>=0&&(n.push(l),r.push(s),o.push(a))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function yf(e,t,n,r,o,i,s=-1){const l=Math.round(n-t.w*o/2),a=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(s>=0&&u!==s)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(l+t.x[f]*o,a+t.y[f]*o,o,o)}}const V3=j1(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),q3=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],Vc=j1(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),qc=[Cn[3],Cn[2],Cn[0],"#4a2a6a","#e0d8f0","#a898c0"],ms=new Map;function Y3(e,t){if(e.id==null)return;let n=ms.get(e.id);if(!n){ms.size>200&&ms.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},ms.set(e.id,n);const r=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,s){if(s.fin)return;const l=b.game;if(l){for(const a of l.projs)if(a.id===r)return;s.fin=!0,s.dur=s.t,ms.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}et.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,h=u===0?0:r*y(.45,.9);i[u*4]=t+Math.cos(f)*h,i[u*4+1]=n+Math.sin(f)*h,i[u*4+2]=u===0?12:y(7,11),i[u*4+3]=.16+u*.05}const s=18,l=new Float32Array(s),a=new Float32Array(s);for(let u=0;u<s;u++){const f=Math.random()*6.28,h=Math.sqrt(Math.random())*r*.95;l[u]=t+Math.cos(f)*h,a[u]=n+Math.sin(f)*h}A({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const h=f*2.2;for(let c=0;c<s;c++){const d=Or((h-.2-c%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Ie(l[c],a[c]),u.globalAlpha=d*.75,u.fillStyle=yr[1+c%3],u.fillRect(Math.round(Ut),Math.round(Dt),c%3?3:4,2))}u.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,h){const c=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,g=i[d*4+2];if(Ie(i[d*4],i[d*4+1]),c<m){if(c<p)continue;const M=Zi(Or((c-p)/.13)),S=g*M*(1+.12*Math.sin(c*60+d)),w=Math.max(1,Math.round(S*2/3));for(let _=0;_<w;_++){const T=(_+.5)/w*2-1,R=S*2*Math.sqrt(1-T*T);u.fillStyle=_===0?hi[0]:T<.3?hi[1]:hi[2],u.fillRect(Math.round(Ut-R/2),Math.round(Dt-S*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=hi[3],u.fillRect(Math.round(Ut-S*.2),Math.round(Dt-S*2-2),3,3);continue}if(!(h.popped&1<<d)){h.popped|=1<<d;for(let M=0;M<4;M++)F(i[d*4],i[d*4+1],.25,y(-.6,.6),y(-.6,.6),y(.4,1.1),y(.9,1.4),yr[M%3],3,.25,!1,.92)}const x=(c-m)/.35;if(x>=1)continue;const v=g*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const S=M/8*6.28+d;u.fillStyle=yr[M&1?1:2],or(u,Ut+Math.cos(S)*v,Dt-g+Math.sin(S)*v*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=hi[0];for(let M=0;M<3;M++)or(u,Ut+(M-1)*g*.6,Dt-g-x*8-(M&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),ot(2)};et.hongo_W=e=>{if(e.type==="heal"){const i=e.x,s=e.y;A({type:"custom",layer:"top",dur:.9,x:i,y:s,drops:0,draw(l,a,u){const f=a<.2?Zi(a/.2):a>.8?(1-a)/.2:1,h=3;Ie(i,s,1.35);const c=Ut,d=Dt,m=[4,8,10,12,12];for(let p=0;p<5;p++){const g=Math.round(m[p]*f)*h;g<=0||(l.fillStyle=p===0?Zr[1]:Zr[2],l.fillRect(Math.round(c-g/2),Math.round(d+(p-5)*h*f),g,Math.max(1,Math.round(h*f))))}l.fillStyle=Zr[3],l.fillRect(Math.round(c-6*h*f),Math.round(d),Math.round(12*h*f),2),l.fillStyle=Zr[0],or(l,c-3*h*f,d-3*h*f,3*f),or(l,c+2*h*f,d-2*h*f,3*f),u.drops<10&&a>.12&&a<.75&&(u.drops++,F(i+y(-.25,.25),s+y(-.25,.25),1.25,0,0,0,.5,u.drops&1?Zr[0]:Zr[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;A({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,s,l){const a=s*1.5,u=b.T;for(let f=0;f<o;f++){const h=f*.035,c=a-h;if(c<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(l.emitted&1<<f)){l.emitted|=1<<f;for(let w=0;w<2;w++)F(m,p,.2,y(-.2,.2),y(-.2,.2),y(.8,1.6),y(.7,1.1),Zr[w],2,0,!0,.95)}const g=Zi(Or(c/.18)),x=s>.8?(1-s)/.2:1,v=Math.max(1,Math.round(3*g*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,S=Math.round(Math.sin(u*6+f)*2);Ie(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(Ut-9),Math.round(Dt-1),18,3),i.globalAlpha=1,yf(i,V3,Ut+S,Dt-M,v,q3)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,s){const a=s*1.2;i.globalAlpha=(s<.2?s/.2:1-(s-.2)/.8)*.8;for(let u=0;u<40;u++){const f=a+u/40*6.28;Ie(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=Zr[u%3+1],or(i,Ut,Dt,u%3?3:4)}}})};et.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){Ie(t,n),r.globalAlpha=1-o,r.fillStyle=gr[2];for(let i=0;i<3;i++){const s=i*2.1+.4;for(let l=0;l<6;l++)or(r,Ut+Math.cos(s+l*.25)*l*3.5,Dt+Math.sin(s-l*.2)*l*1.8,3)}}});for(let r=0;r<10;r++)F(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(1.5,3),y(.4,.6),gr[r%3],3,9,!1,.95)};const Yc=10;Fe.hongo_E=(e,t,n,r,o,i)=>{Y3(t,K3);const s=Math.hypot(t.vx||0,t.vy||0)||1,l=-(t.vx||0)/s,a=-(t.vy||0)/s;Ie(t.x,t.y),e.fillStyle=gr[1],e.fillRect(Math.round(Ut-8),Math.round(Dt-1),16,4),e.fillStyle=gr[0],e.fillRect(Math.round(Ut-5),Math.round(Dt-2),10,2);for(let u=Yc-1;u>=0;u--){const f=t.x+l*u*.17,h=t.y+a*u*.17,c=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/Yc);Ie(f,h,c);const d=7-u*.45;e.fillStyle=gr[2],or(e,Ut,Dt+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",or(e,Ut,Dt,d),e.fillStyle="#a07040",e.fillRect(Math.round(Ut-d/4),Math.round(Dt-d/2),2,1),(u===3||u===7)&&(e.fillStyle=yr[2],e.fillRect(Math.round(Ut+d/2),Math.round(Dt-d/2-1),2,2))}Ie(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=yr[3],e.fillRect(Math.round(Ut-2),Math.round(Dt-6),4,7),e.fillStyle=yr[1],e.fillRect(Math.round(Ut-6),Math.round(Dt-6),4,2),e.fillRect(Math.round(Ut+2),Math.round(Dt-8),4,2),e.fillStyle=yr[0],e.fillRect(Math.round(Ut-1),Math.round(Dt-8),2,2),Math.random()<.35&&F(t.x,t.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,gr[Math.random()*3|0],2,7,!1,.95)};function K3(e){const t=e.x,n=e.y;if(e.life<.07){for(let s=0;s<6;s++)F(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1),.5,s&1?gr[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;A({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,l){const a=l*r,u=a<.18?Zi(a/.18):l>.82?(1-l)/.18:1;for(let f=0;f<o;f++){const h=i+f/o*6.28,c=Math.cos(h),d=Math.sin(h);Ie(t+c*.55,n+d*.55,0);const m=Ut,p=Dt;Ie(t+c*.8,n+d*.8,.55);const g=Ut,x=Dt;Ie(t+c*.12,n+d*.12,.75);const v=Ut,M=Dt,S=Math.min(10,Math.round(10*u));for(let w=0;w<=S;w++){const _=w/10,T=1-_,R=T*T*m+2*T*_*g+_*_*v,z=T*T*p+2*T*_*x+_*_*M,I=6-_*4;s.fillStyle=gr[2],or(s,R,z+1,I+2),s.fillStyle=w&1?"#7a5030":"#6a4428",or(s,R,z,I),(w===4||w===7)&&(s.fillStyle="#c8f080",s.fillRect(Math.round(R+(f&1?3:-5)),Math.round(z-1),2,2))}}}});for(let s=0;s<12;s++)F(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3.2),y(.4,.7),gr[s%3],3,9,!1,.95);ot(2)}et.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,s=[];for(let p=0;p<13;p++){let g=null;for(let x=0;x<8&&!g;x++){const v=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*r*.88,S=t+Math.cos(v)*M,w=n+Math.sin(v)*M;s.every(_=>Math.hypot(_.x-S,_.y-w)>.7)&&(g={x:S,y:w,cs:p===0?4:Math.random()<.5?3:2,ts:M/r*.5})}g&&s.push(g)}s.sort((p,g)=>p.x+p.y-(g.x+g.y));const l=s.length,a=new Int8Array(l).fill(-1);for(let p=0;p<l;p++){let g=1e9;for(let x=0;x<l;x++)if(x!==p){const v=Math.hypot(s[p].x-s[x].x,s[p].y-s[x].y);v<g&&(g=v,a[p]=x)}}A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,g){const x=g*i,v=Or((x-.1)/.5),M=g>.88?(1-g)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let S=0;S<l;S++){const w=a[S];if(w<0)continue;Ie(s[S].x,s[S].y);const _=Ut,T=Dt;Ie(s[w].x,s[w].y);const R=Math.hypot(Ut-_,Dt-T),z=Math.round(R/6*v);for(let I=0;I<=z;I++){const O=I*6/R;p.fillRect(Math.round(_+(Ut-_)*O),Math.round(T+(Dt-T)*O+Math.sin(I*1.7+S)*2),2,2)}}p.globalAlpha=1}});const u=(p,g,x)=>{const v=Zi(Or((g-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*v*M))};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,g){const x=g*i;for(let v=0;v<l;v++){const M=s[v],S=u(M,x,g);S<=0||(Ie(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round(Ut-S*4),Math.round(Dt-1),S*8,3),yf(p,Vc,Ut+Math.round(Math.sin(b.T*2+v)*S*.4),Dt,S,qc))}}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,g,x){const v=g*i;for(let M=0;M<l;M++){const S=s[M],w=u(S,v,g);w<=0||(Ie(S.x,S.y),p.globalAlpha=.45+.4*Math.sin(b.T*5+M*1.9),yf(p,Vc,Ut+Math.round(Math.sin(b.T*2+M)*w*.4),Dt,w,qc,2),p.globalAlpha=.18,p.fillStyle=Cn[1],p.fillRect(Math.round(Ut-w*4),Math.round(Dt-w*9),w*8,w*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,v-x.last),x.last=v;x.acc>.085&&x.puffs<46&&g<.88;){x.acc-=.085,x.puffs++;const M=s[Math.random()*l|0];F(M.x+y(-.1,.1),M.y+y(-.1,.1),.12*M.cs*1.6,y(-.25,.25),y(-.25,.25),y(.5,1),y(.9,1.3),x.puffs&1?Cn[0]:yr[1],2,.15,!0,.97)}}});const f=Zo(e,i-.3),h=()=>b.T-f.t0,c=Array.from({length:11},(p,g)=>({a:g/11*6.283+y(-.2,.2),ph:g===0?1.45:y(.25,1.1),s:y(4,8),p:Math.random()*6})),d={g:0,out:0,zc:0,un:0},m=p=>{const g=h();return d.out=Or(p/.4),d.g=Zi(Or(g/.45))*(.6+.4*d.out),d.zc=j3*(.25+.75*Or(g/.45))*(.7+.3*d.out),d.un=Or((g-.3)/.5)*d.out,d};A({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,g,x){const v=sn(f);if(v<=0){x.t=x.dur+1;return}const M=m(v);Zc(p,t,n,r,r*1.05*M.g,M.zc,M.un,!1,M.out),eh(p,t,n,M.zc,M.g,!1,M.out),Kr(f,t,n,r*1.1,10113248,.6*M.out)}}),A({type:"custom",layer:"top",dur:i+1,x:t,y:n,draw(p,g,x){const v=sn(f);if(v<=0){x.t=x.dur+1;return}const M=m(v),S=r*1.05*M.g;Zc(p,t,n,r,S,M.zc,M.un,!0,M.out),eh(p,t,n,M.zc,M.g,!0,M.out),Ie(t,n,M.zc);const w=Ut,_=Dt,T=Pn(S),R=Fa(S,Kc*M.g);jc!==p&&(jc=p,Qc=[{u0:0,fill:Pt(p,"#c890ff",12),a:.72},{u0:.4,fill:Pt(p,Cn[1],13),a:.72},{u0:.68,fill:Pt(p,Cn[2],13),a:.75},{u0:.88,fill:Pt(p,Cn[3],14),a:.82}]),uf(p,w,_,T,R,!0,Qc,M.out),p.globalAlpha=.9*M.out;for(let z=0;z<=40;z++){const I=z/40*Math.PI,O=w+Math.cos(I)*T,U=_+Math.sin(I)*T*.5;if(p.fillStyle=Cn[3],p.fillRect(Ir(O)-2,Ir(U)-1,4,3+(z&1)*2),z%5===2){const X=(b.T*.9+z*.37)%1;p.fillStyle=Cn[0],p.fillRect(Ir(O),Ir(U+4+X*18),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,g,x){const v=sn(f);if(v<=0){x.t=x.dur+1;return}const M=m(v),S=r*1.05*M.g,w=Kc*M.g;for(const _ of c){const T=Math.cos(_.a)*Math.cos(_.ph),R=Math.sin(_.a)*Math.cos(_.ph),z=Math.sin(_.ph);if(Sr(T/S,R/S,z/w)<=0)continue;Ie(t+T*S,n+R*S,M.zc+z*w);const I=.55+.45*Math.sin(b.T*4+_.p),O=.45+.55*Math.sqrt(Math.max(0,z)),U=Ir(_.s*O);p.globalAlpha=M.out*.35*I,p.fillStyle=Cn[0],nh(p,Ut,Dt,U+3,(U+3)*(.5+.5*z)),p.globalAlpha=M.out*(.6+.4*I),nh(p,Ut,Dt,U,U*(.5+.5*z)),p.fillStyle="#ffffff",p.fillRect(Ir(Ut-U/3),Ir(Dt-U/3),2,2)}}});for(let p=0;p<14;p++){const g=Math.random()*6.28,x=Math.random()*r*.8;F(t+Math.cos(g)*x,n+Math.sin(g)*x,.05,0,0,y(1.5,2.5),.5,gr[p%3],3,8,!1)}ot(3)};const j3=2.3,Kc=1.35,Ir=Math.round;let jc=null,Qc=[];function Zc(e,t,n,r,o,i,s,l,a){if(s<=.01)return;const u=b.T,f=16,h=24;for(let c=-1;c<=1;c+=2)for(let d=0;d<f;d++){const m=d/f*6.283+c*.1,p=Math.sin(u*1.4+d*.9)*.03;for(let g=0;g<=h;g++){const x=g/h;if(x>s)break;const v=m+c*x*.55+p*x,M=Math.cos(v),S=Math.sin(v);if(Sr(M,S,0)>0!==l)continue;const w=o*.9+(r*.98-o*.9)*x+Math.sin(x*Math.PI)*.18;Ie(t+M*w,n+S*w,i*(1-x));const _=g%6===3;e.globalAlpha=a*(l?.85:.7)*(1-x*.3),e.fillStyle=_?Cn[0]:"#e8f0d0",e.fillRect(Ir(Ut)-1,Ir(Dt)-1,_?4:2,_?4:3)}}}let Jc=null,th=[];const Q3=[.9,1,1,.9,.75];function eh(e,t,n,r,o,i,s){Jc!==e&&(Jc=e,th=[{u0:0,fill:Pt(e,"#e0d8f0",7),a:.55},{u0:.6,fill:Pt(e,"#a898c0",9),a:.6},{u0:.88,fill:Pt(e,Cn[3],12),a:.7}]),Ie(t,n);const l=Ut,a=Dt,u=Pn(.42*o);qr(e,l,a,u*1.25,u,ir(r),i,th,Q3,s),e.globalAlpha=s*.8,e.fillStyle=Cn[0];for(let f=0;f<3;f++){const h=(b.T*.5+f/3)%1*r;kr(e,t,n,h,.42*o*(1.25-.25*h/Math.max(.1,r)),18,2,b.T,i?1:-1)}}function nh(e,t,n,r,o){if(!(r<1)){o=Math.max(1,o);for(let i=-o;i<o;i+=2){const s=r*Math.sqrt(Math.max(0,1-(i+1)/o*((i+1)/o)));s>=.5&&e.fillRect(Math.round(t-s),Math.round(n+i),Math.max(1,Math.round(s*2)),2)}}}Oe.hongo=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,s=10;r.globalAlpha=1-o;for(let l=0;l<s;l++){const a=l/s*6.28;Ie(t+Math.cos(a)*i,n+Math.sin(a)*i),r.fillStyle=yr[1+l%3],r.fillRect(Math.round(Ut-2),Math.round(Dt-1),4,2)}}}),A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){Ie(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=hi[i],or(r,Ut+(i-1)*8*(.6+o),Dt-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)F(t,n,.4,y(-1,1),y(-1,1),y(.5,1.5),.6,yr[r%3],3,2,!1,.92)};const dt=Math.round,tr=Math.PI*2;let he=0,ue=0;function qe(e,t,n=0){he=(e-t)*B.HW+B.OX,ue=(e+t)*B.HH-n*B.ZK}function As(e,t,n,r,o){e.fillStyle=o,e.fillRect(dt(t-r/2),dt(n-r/2),r,r)}const Mr=e=>e<0?0:e>1?1:e,Qs=e=>1-(1-e)*(1-e),ne={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},kn={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},Ue={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},En={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},Z3="#e8384a";function J3(e,t){return Math.atan2((e+t)*B.HH,(e-t)*B.HW)}function dl(e,t,n,r,o,i,s,l,a){const u=Math.cos(r),f=Math.sin(r),h=-f,c=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(dt(m-o/2),dt(p-o/2),o,o),d>=2&&(e.fillStyle=s,e.fillRect(dt(m+h*o-o/2),dt(p+c*o-o/2),o,o));else if(d===10){e.fillStyle=l;for(let g=-3;g<=3;g++)e.fillRect(dt(m+h*g*o-o/2),dt(p+c*g*o-o/2),o,o)}else d<15?(e.fillStyle=a,e.fillRect(dt(m-o/2),dt(p-o/2),o,o)):(e.fillStyle=l,e.fillRect(dt(m-o),dt(p-o),o*2,o*2))}}function jo(e,t,n,r,o){e.fillStyle=o;const i=dt(r);e.fillRect(dt(t-i),dt(n-1),i*2,2),e.fillRect(dt(t-1),dt(n-i),2,i*2),e.fillRect(dt(t-2),dt(n-2),4,4)}function Q1(e,t,n,r){const o=Math.max(2,dt(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=En.d,e.fillRect(dt(t-o/2),dt(n-i/2),o,i),o>3&&(e.fillStyle=En.m,e.fillRect(dt(t-o/2+1),dt(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=En.l,e.fillRect(dt(t-1),dt(n-2),2,4))}et.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=J3(t,n);A({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(s,l){qe(r,o,.55);const a=.55*(1-Qs(l));for(let u=-1;u<=1;u++)u&&l>.85||(s.globalAlpha=u?.7:1,dl(s,he,ue,i+u*a,2,u?Ue.l:ne.w,u?Ue.m:ne.m,En.m,kn.d))}}),A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(s,l){qe(r,o,.55),s.globalAlpha=1-l,jo(s,he+Math.cos(i)*12,ue+Math.sin(i)*12,10*(1-l)+3,Ue.w)}});for(let s=0;s<6;s++)F(r,o,.5,y(-.8,.8),y(-.8,.8),y(.3,1),y(.4,.6),s&1?kn.m:kn.l,3,-.5,!1,.9)};Fe.mapache_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=-l,u=s,f=Math.sin(i*26)*.07;gt(!0);const h=Lt();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);h.globalAlpha=(1-d/14)*.9,h.fillStyle=d&1?Ue.l:Ue.m,h.fillRect(dt(n-s*m+a*p),dt(r-l*m+u*p),2,2)}for(let d=4;d>=1;d--)h.globalAlpha=.5-d*.1,dl(h,n-s*d*9,r-l*d*9,o+f*d,2,Ue.l,Ue.m,Ue.m,Ue.d);h.globalAlpha=.22,h.fillStyle=Ue.m,h.fillRect(dt(n-10),dt(r-10),20,20),h.globalAlpha=1,gt(!1),dl(e,n,r,o+f,2,ne.w,ne.m,En.m,kn.k);const c=i*4%1;c<.5&&(gt(!0),Lt().globalAlpha=1,jo(Lt(),n+s*(12-c*30),r+l*(12-c*30),4,ne.w),gt(!1))};const rh=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];et.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){qe(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,dl(o,he-Math.cos(r)*8,ue-Math.sin(r)*8,r+Math.PI,2,ne.w,ne.m,En.m,kn.k)}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){qe(t,n,1);const s=3,l=Qs(Mr(i*3))*18,a=1+Math.sin(i*40)*.12*(i<.6?1:0),u=he,f=ue-l,h=rh.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let c=0;c<h;c++){const d=rh[c],m=i>.6?(c&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const g=d[p];g!=="."&&(o.fillStyle=g==="X"?Ue.l:g==="M"?Ue.d:g==="e"?Ue.w:Ue.m,o.fillRect(dt(u+(p-6)*s+m-s/2),dt(f+(c-4)*s*a-s/2),s,Math.max(1,dt(s*a))))}}}});for(let o=0;o<8;o++)F(t,n,.5,y(-1.8,1.8),y(-1.8,1.8),y(.8,2),y(.3,.5),o&1?ne.l:ne.m,2,6,!0,.9);for(let o=0;o<6;o++)F(t+y(-.2,.2),n+y(-.2,.2),.4,0,0,y(.6,1.2),y(.6,.9),o&1?Ue.l:Ue.m,2,-.3,!0);ot(2)};function Z1(e,t,n,r,o,i,s,l){const a=Math.max(2,dt(o/2));for(let u=0;u<a;u++){const f=(u+.5)/a*2-1,h=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,c=n-o/2+u*2;if(h<1)continue;e.globalAlpha=l,e.fillStyle=En.d,e.fillRect(dt(t-h-2),dt(c),dt(h*2+4),2),e.globalAlpha=l*.85,e.fillStyle=ne.m,e.fillRect(dt(t-h),dt(c),dt(h*2),2);const d=t-h+(s*2.2-.6)*r-f*o*.25;d>t-h&&d<t+h-3&&(e.globalAlpha=l,e.fillStyle=ne.w,e.fillRect(dt(d),dt(c),3,2))}e.globalAlpha=l,e.fillStyle=En.l,e.fillRect(dt(t-2),dt(n-o/2-3),4,3)}function J1(e,t,n,r,o,i,s,l,a){if(!(l<=0||l>=1))for(let u=0;u<o.length;u++)for(let f=0;f<s;f++){const h=a+u*17+f*3,c=(nt(h)-.5)*.7,d=(nt(h+1)-.5)*.7,m=Mr(l*(.85+nt(h+2)*.3));qe(t+(o[u]+c-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(b.T*20+f|0)&1;e.fillStyle=p?ne.w:ne.m,e.fillRect(dt(he-2),dt(ue-1),p?4:2,p?2:4),e.fillStyle=ne.d,e.fillRect(dt(he+(p?2:0)),dt(ue+(p?0:3)),2,2)}}function tm(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const s=i/n*tr;r[i]=e+Math.cos(s)*1.1,o[i]=t+Math.sin(s)*1.1}return{TX:r,TY:o}}function em(e,t,n){A({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){qe(e[i],t[i],.6);for(let s=0;s<6;s++){const l=s/6*tr+o*2,a=6+o*22;jo(r,he+Math.cos(l)*a,ue+Math.sin(l)*a*.8,4*(1-o)+2,s&1?ne.l:Ue.l)}o<.3&&jo(r,he,ue,16*(1-o/.3)+3,ne.w)}}}),A({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let s=0;s<e.length;s++)for(let l=0;l<4;l++)F(e[s],t[s],.4,y(-.8,.8),y(-.8,.8),y(.3,.9),y(.4,.7),l&1?kn.l:kn.m,3,-.4,!1,.9)}}})}et.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=tm(t,n,2),s=.32,l=.45,a=.78;A({type:"custom",layer:"top",dur:l+.02,x:t,y:n,draw(u,f){const h=f*(l+.02),c=Qs(Mr(h/.18));if(qe(t,n,.75),Z1(u,he,ue,30,52*c,!0,Mr(h/.3),.95),h>s){u.globalAlpha=1,u.fillStyle=ne.w;const d=Mr((h-s)/(l-s)),m=he+4,p=ue-6;for(let g=0;g<6;g++){let x=nt(r+g)*tr,v=m,M=p;for(let S=0;S<dt(6*d);S++)x+=(nt(r+g*7+S)-.5)*.9,v+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(dt(v),dt(M),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:a+.05,x:t,y:n,draw(u,f){const h=f*(a+.05);h>=l&&h<l+.08&&(qe(t,n,.75),u.globalAlpha=1-(h-l)/.08,u.fillStyle=ne.w,u.fillRect(dt(he-22),dt(ue-30),44,60)),u.globalAlpha=1,J1(u,t,n,.75,o,i,6,(h-l)/(a-l),r)}}),em(o,i,a);for(let u=0;u<8;u++)F(t,n,.4,y(-1,1),y(-1,1),y(.3,.8),y(.5,.8),u&1?kn.m:kn.d,3,-.3,!1,.9)};et.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,s=(l,a,u,f,h,c,d)=>{const m=12*f,p=20*f;for(let g=0;g<18;g++){const x=g/18*tr+h;As(l,a+Math.cos(x)*m,u+Math.sin(x)*p,g%3?2:3,g&1?c:d)}for(let g=0;g<8;g++){const x=g/8*tr-h*1.7,v=.45+.25*Math.sin(h*2+g);As(l,a+Math.cos(x)*m*v,u+Math.sin(x)*p*v,2,d)}};A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(l,a){const u=a*i,f=u<.15?Qs(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,h=b.T*8;qe(t,n,.55);const c=he,d=ue;qe(r,o,.55);const m=he,p=ue;f>0&&(l.globalAlpha=1,s(l,c,d,f,h,ne.l,ne.d),s(l,m,p,f,-h,En.l,En.d));const g=Mr((u-.05)/.4);for(let x=0;x<2;x++){const v=x?22:58,M=x?En.m:ne.m,S=x?1-g:g;l.globalAlpha=.45*(1-Mr((u-.5)/.3));for(let w=0;w<=20;w++){const _=w/20;w%2||As(l,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*v,2,M)}if(g>0&&g<1)for(let w=0;w<6;w++){const _=x?S+w*.03:S-w*.03;_<0||_>1||(l.globalAlpha=1-w/6,As(l,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*v,w?3:5,w?M:ne.w))}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,a){const u=a*i;qe(t,n,.55);const f=he,h=ue;qe(r,o,.4);const c=he,d=ue,m=(f+c)/2,p=(h+d)/2-58,g=Mr(u/i),x=m+(c-m)*g,v=p+(d-p)*g-Math.sin(g*Math.PI)*30;l.globalAlpha=g>.85?(1-g)/.15:1,Q1(l,x,v,b.T*26)}});for(const[l,a]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*tr;F(l,a,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,y(0,.6),.4,l===t?ne.l:En.l,2,0,!0)}};const t5=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];et.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=tm(t,n,4),s=8,l=1.7,a=.95,u=1.25,f=[0,1,2,3,4,5,6,7],h=new Float32Array(s);A({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){qe(t,n,0);const v=he,M=ue;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=En.l;for(let S=0;S<60;S++){const w=S*6,_=70-S*.9;g.fillRect(dt(v-_),dt(M-w-6),dt(_*2),6)}g.globalAlpha*=2,g.fillStyle=ne.w;for(let S=0;S<18;S+=2){const w=Math.sqrt(1-S/18*(S/18))*74;g.fillRect(dt(v-w),dt(M-9+S),dt(w*2),2)}}}),A({type:"custom",layer:"top",dur:a,x:t,y:n,draw(g,x){const v=x*a,M=Qs(Mr(v/.3)),S=v*1.2+v*v*4.5;for(let w=0;w<s;w++)h[w]=w/s*tr+S;f.sort((w,_)=>Math.sin(h[w])-Math.sin(h[_]));for(const w of f){const _=h[w];qe(t+Math.cos(_)*l,n+Math.sin(_)*l,0);const T=.45+.55*Math.abs(Math.sin(_+.8));Z1(g,he,ue-22*M,dt(14*T)+2,44*M,!1,(v*1.6+w*.13)%1,.9)}}}),A({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const v=x*(u+.05);if(v<a){const M=v*14|0,S=M%s,w=S/s*tr+v*1.2+v*v*4.5;qe(t+Math.cos(w)*l,n+Math.sin(w)*l,.6),g.globalAlpha=.9,jo(g,he,ue,9,ne.w)}else{if(v<a+.1){g.globalAlpha=1-(v-a)/.1,qe(t,n,.4),g.fillStyle=ne.w;for(let M=-14;M<14;M+=2){const S=Math.sqrt(1-M/14*(M/14))*90;g.fillRect(dt(he-S),dt(ue+M*2),dt(S*2),4)}}g.globalAlpha=1,J1(g,t,n,.6,o,i,6,(v-a)/(u-a),r)}}}),em(o,i,u);const c=16,d=new Float32Array(c),m=new Float32Array(c),p=new Float32Array(c);for(let g=0;g<c;g++){const x=Math.random()*tr,v=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*v,m[g]=n+Math.sin(x)*v,p[g]=y(0,.35)}A({type:"custom",layer:"top",delay:a,dur:1.3,x:t,y:n,draw(g,x){const v=x*1.3;for(let M=0;M<c;M++){const S=(v-p[M])/.95;if(S<0||S>1)continue;qe(d[M],m[M],3.2*(1-S));const w=Math.cos(b.T*9+M*1.7),_=he+Math.sin(b.T*4+M)*8,T=t5[M&3],R=(M&3)<2?Z3:kn.k,z=2,I=Math.max(.2,Math.abs(w));if(g.globalAlpha=S>.8?(1-S)/.2:1,g.fillStyle="#fffaf0",g.fillRect(dt(_-7*I),dt(ue-8),dt(14*I)||1,16),I>.45){g.fillStyle=R;for(let O=0;O<5;O++)for(let U=0;U<5;U++)T[O][U]==="X"&&g.fillRect(dt(_+(U-2.5)*z*I),dt(ue-5+O*z),Math.max(1,dt(z*I)),z)}}}});for(let g=0;g<20;g++){const x=Math.random()*tr;F(t+Math.cos(x)*l,n+Math.sin(x)*l,.2,Math.cos(x)*.8,Math.sin(x)*.8,y(.5,1.5),y(.5,.9),g&1?kn.l:kn.m,3,-.4,!1,.92)}A({type:"custom",layer:"top",delay:a,dur:.02,x:t,y:n,fired:!1,draw(g,x,v){v.fired||(v.fired=!0,ot(5))}})};function oh(e,t,n,r,o,i,s,l){const a=Math.cos(r),u=Math.sin(r),f=-u,h=a,c=dt(10*i);for(let d=0;d<=c;d++){const m=d/10-.5,p=Math.sin(m*tr)*o*.18;As(e,t+a*m*o+f*p,n+u*m*o*.8+h*p,d===c?4:3-Math.abs(m)*2,d===c?l:s)}}Oe.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+y(-.3,.3);if(A({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,s){qe(t,n,.5);const l=Mr(s*4);i.globalAlpha=s>.4?(1-s)/.6:1,oh(i,he,ue,o,34,l,ne.m,ne.w),r&&oh(i,he,ue,o+1.6,40,l,Ue.m,Ue.w),s>.2&&(jo(i,he+12,ue-10,4*(1-s)+1,ne.w),jo(i,he-10,ue+6,3*(1-s)+1,ne.l))}}),r){A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,s){qe(t,n,.6+Math.sin(s*Math.PI)*1),i.globalAlpha=s>.8?(1-s)/.2:1,Q1(i,he+s*18,ue,b.T*30)}});for(let i=0;i<6;i++)F(t,n,.5,y(-1,1),y(-1,1),y(.5,1.4),.5,i&1?Ue.l:Ue.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)F(t,n,.2,y(-.8,.8),y(-.8,.8),y(.2,.6),.35,kn.l,3,0,!1,.9)};const xi="#1e0f30",Ii="#4b2272",$r="#8b3cd2",Hr="#d6b4ff",Lr="#f6f2ff",ml="#ff2f5f",nm="#2c1446",Le=Math.round,$o=Math.PI*2,e5=[0,1,2,1];function Qn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Le(t),Le(n),r,o)}function n5(e,t,n,r,o,i,s){const l=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let a=0;a<=l;a++)e.fillRect(Le(t+(r-t)*a/l-i/2),Le(n+(o-n)*a/l-i/2),i,i)}function gf(e,t,n,r,o,i,s,l){t=Le(t),n=Le(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=s,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const a=Math.max(1,r>>1);e.fillStyle=l,e.fillRect(t-r,n-r,a,a),e.fillRect(t+r-a,n-r,a,a)}}function Fo(e,t,n,r,o,i,s,l=1){const a=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,Le(2*l));e.fillStyle=s;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=Le(n+c*l);if(Math.abs(m)>=f){e.fillRect(Le(t-d),p,Le(2*d),h);continue}const g=Math.sqrt(f*f-m*m),x=a-g,v=a+g;if(x>-d&&e.fillRect(Le(t-d),p,Le(Math.min(x,d)+d),h),v<d){const M=Math.max(v,-d);e.fillRect(Le(t+M),p,Le(d-M),h)}}}function xf(e,t,n,r,o){const[i,s]=C(t,n),l=r*B.HW*Math.SQRT2,a=l*.5;e.fillStyle=o;for(let u=-a;u<=a;u+=2){const f=l*Math.sqrt(Math.max(0,1-u*u/(a*a)));e.fillRect(Le(i-f),Le(s+u),Le(f*2),2)}}const rm=e=>{const t=mt(e);return t&&!t.dead&&!ze(t)?t:null},r5=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Mf=(e,t=16)=>e5[((b.T*t|0)+e)%4];Oe.murcielago=e=>{const t=y(0,$o),n=e.big?17:13;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,s]=C(e.x,e.y,.5);r.globalAlpha=1-o,Fo(r,i,s,n+2,t+o*1.4,.45,$r),Fo(r,i,s,n,t+o*1.4,.52,Lr)}});for(let r=0;r<5;r++)F(e.x,e.y,.5,y(-2.5,2.5),y(-2.5,2.5),y(0,1),.28,r%2?Hr:$r,2,0,!0,.9)};et.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,s=e.x+t*.3,l=e.y+n*.3,a=.6;A({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const h=f*.62;for(let c=0;c<6;c++){const d=h-c*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),g=Math.max(6,Math.ceil(i*2*p*7)),x=c%2?$r:Hr,v=c%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=g;M++){const S=r-i+2*i*M/g,w=Math.sin(M*1.7+c*2.3+h*40)*.07*(1+m),[_,T]=C(s+Math.cos(S)*(p+w),l+Math.sin(S)*(p+w),a-m*.35);Qn(u,_-v/2,T-v/2,v,v,x),M===g>>1&&Qn(u,_-1,T-1,2,2,Lr)}}}}),A({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const h of[-1,1]){const c=r+h*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,g]=C(s+Math.cos(c)*m,l+Math.sin(c)*m);Qn(u,p-1,g-1,3,2,Ii)}}}});for(let u=0;u<14;u++){const f=r+y(-i,i),h=y(.6,o);F(s+Math.cos(f)*h,l+Math.sin(f)*h,a*.7,Math.cos(f)*.8,Math.sin(f)*.8,y(0,.5),.5,u%3?Hr:Lr,2,0,!0,.92)}ot(2)};et.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*$o+y(-.2,.2),sp:y(1.2,2.4),up:y(.8,1.8),ph:Math.random()*4|0}));A({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),xf(r,e.x,e.y,.75*(1-o*.6),xi),r.globalAlpha=.8*(1-o),xf(r,e.x,e.y,.3*(1-o),nm)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const s of n){const l=s.sp*i,[a,u]=C(e.x+Math.cos(s.a)*l,e.y+Math.sin(s.a)*l,.5+s.up*i+Math.sin(i*9+s.a)*.08);gf(r,a,u,2,Mf(s.ph),xi,Ii,ml)}}}),A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=rm(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,s]=C(o.x,o.y,.75);r.globalAlpha=.65;for(let l=0;l<2;l++){const a=b.T*5+l*Math.PI;gf(r,i+Math.cos(a)*24,s+Math.sin(a)*9,1,Mf(l*2,20),Ii,$r,ml)}r.globalAlpha=.35;for(let l=0;l<4;l++)Qn(r,i-8+l*5,s+26+(b.T*30+l*7)%8,2,2,xi)}});for(let r=0;r<16;r++)F(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.2,.8),y(-.5,.5),y(-.5,.5),y(1,2.2),y(.5,.9),r%2?xi:Ii,3,0,!1,.95);for(let r=0;r<6;r++)F(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.4,1),0,0,y(.5,1.2),.5,Hr,2,0,!0)};et.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=r5(e),i=o&&o.radius||1.4,s=y(0,$o);let l=!1;A({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(a,u,f){const h=u*f.dur,[c,d]=C(t,n);if(h<r){a.globalAlpha=.5,Fo(a,c,d,Le(i*26*(1.4-.4*h/r)),s+h*6,.45,Ii,.5);return}a.globalAlpha=.6*Math.min(1,(f.dur-h)/.6),Fo(a,c,d+2,Le(i*30),s+Math.PI*1.1,.42,nm,.5)}}),A({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(a,u,f){const h=u*f.dur;if(h<r){const v=rm(e.uid);if(!v)return;const[M,S]=C(v.x,v.y,.7),[w,_]=C(t,n,.3),T=Math.hypot(w-M,_-S)||1,R=(w-M)/T,z=(_-S)/T;a.globalAlpha=.75;for(let I=0;I<4;I++){const O=(I-1.5)*7,U=18+I%2*12;n5(a,M-z*O-R*8,S+R*O-z*8,M-z*O-R*(8+U),S+R*O-z*(8+U),2,I%2?Hr:$r)}return}const c=(h-r)/.5;if(!l){l=!0,ot(6);for(let v=0;v<22;v++){const M=y(0,$o),S=y(2,5);F(t,n,.45,Math.cos(M)*S,Math.sin(M)*S,y(.3,1.5),y(.3,.55),v%3?Hr:v%2?Lr:$r,2,3,!0,.9)}}const d=Math.min(1,c/.45),[m,p]=C(t,n,.45),g=Le(26+14*d),x=s+d*Math.PI*1.1;a.globalAlpha=c<.5?1:Math.max(0,(1-c)/.5),Fo(a,m,p,g+3,x,.42,$r,.85),Fo(a,m,p,g,x,.48,Lr,.85),a.globalAlpha*=.35,Fo(a,m,p,g,x-.6,.48,Hr,.85)}})};et.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(l,a)=>({p:a/r*$o,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(l,a)=>{const u=Math.min(1,a/.35),f=Math.max(0,(a-(n-.4))/.4),h=(l.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(a*5+l.p*3)),c=l.p+a*l.w;return[e.x+Math.cos(c)*h,e.y+Math.sin(c)*h,l.z+Math.sin(a*4+l.p)*.25+f*1.5,f]},s=Array.from({length:8},()=>({t:y(.3,n-.4),x:e.x+y(-1,1)*t*.6,y:e.y+y(-1,1)*t*.6}));A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(l,a){const u=a*n,f=Math.min(1,u/.3,(n-u)/.4);l.globalAlpha=.32*f,xf(l,e.x,e.y,t,xi),l.globalAlpha=.7*f;for(let h=0;h<40;h++){const c=h/40*$o+u*.8,[d,m]=C(e.x+Math.cos(c)*t,e.y+Math.sin(c)*t);Qn(l,d-1,m-1,h%2?2:3,2,h%2?Hr:$r)}l.globalAlpha=.3*f;for(const h of o){const[c,d]=i(h,u),[m,p]=C(c,d);Qn(l,m-4,p-1,8,2,"#000000")}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(l,a){const u=a*n;for(const f of o){const[h,c,d,m]=i(f,u),[p,g]=C(h,c,d);l.globalAlpha=Math.min(1,u/.15)*(1-m),gf(l,p,g,f.s,Mf(f.ph,18),xi,Ii,ml)}}}),A({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(l,a){const u=a*n;for(const f of s){const h=(u-f.t)/.14;if(h<0||h>1)continue;const[c,d]=C(f.x,f.y,.55),m=Le(4-h*3);l.globalAlpha=1-h;for(const p of[-1,1]){const g=c+p*4;Qn(l,g-2,d-6-m,4,2,Lr),Qn(l,g-1,d-4-m,2,3,Lr),Qn(l,g-2,d+4+m,4,2,Lr),Qn(l,g-1,d+1+m,2,3,Lr)}Qn(l,c-1,d-1,3,3,ml)}}});for(let l=0;l<20;l++){const a=y(0,$o),u=t*y(.3,1);F(e.x+Math.cos(a)*u,e.y+Math.sin(a)*u,y(.3,1.5),-Math.sin(a)*2.5,Math.cos(a)*2.5,y(0,.6),y(.6,1.1),l%3?$r:Hr,2,0,!0,.97)}ot(5)};const St=Math.round,xr=Math.PI*2,Mt={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},o5=e=>e*B.HW*Math.SQRT2;function Ts(e,t,n,r){r=Math.max(1,St(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(St(t[0]+(n[0]-t[0])*l/i-s),St(t[1]+(n[1]-t[1])*l/i-s),r,r)}function pl(e,t,n,r,o,i){const s=t[0].length,l=t.length,a=St(n-s*o/2),u=St(r-l*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<l;h++)for(let c=0;c<s;c++)t[h][c]===f&&e.fillRect(a+c*o,u+h*o,o,o)}}function om(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+y(-.35,.35),s=t*o/n;r.push([Math.cos(i)*s,Math.sin(i)*s])}return r}function im(e,t,n,r,o){const i=r.length-1,s=o*i;for(let l=0;l<i&&l<s;l++){const a=Math.min(1,s-l),u=C(t+r[l][0],n+r[l][1]),f=C(t+r[l+1][0],n+r[l+1][1]);Ts(e,u,[u[0]+(f[0]-u[0])*a,u[1]+(f[1]-u[1])*a],l<2?3:2)}}const i5=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],s5=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],ih=["t.t.t",".....",".ppp.","ppppp",".ppp."];et.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,s=Math.min(e.angle||1.2,1.4),l=Math.atan2(o,r),a=t+r*1,u=n+o*1,f=.13,h=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let g=0;g<p;g++){const x=l+(p===1?0:(g/(p-1)*2-1)*s*.8)+y(-.06,.06),v=d*i/2.5;h.push({x:t+Math.cos(x)*v,y:n+Math.sin(x)*v,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:y(9,15),done:!1})}});const c=[-.8,-.4,0,.4,.8].map(d=>om(l+d*s,i*y(.75,1)));A({type:"custom",layer:"top",dur:.34,x:a,y:u,draw(d,m){const p=m*.34,g=Math.min(1,p/f),x=1.5*(1-g*g),[v,M]=C(a,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),pl(d,i5,v,M,3,{h:Mt.wood,d:Mt.i0,b:Mt.brass,l:Mt.i4,i:Mt.i2}),g<1){d.globalAlpha=.5,d.fillStyle=Mt.i3;for(let S=1;S<=3;S++)d.fillRect(St(v-15+S*7),St(M-26-S*8),2,8)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:a,y:u,draw(d,m){const[p,g]=C(a,u,.1),x=St(26*(1-m))+4;d.fillStyle=Mt.amberL,d.fillRect(p-x,g-2,x*2,4),d.fillRect(p-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,g-3,10,6)}}),A({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const g=m*1.15;if(g>=f&&!p.hit){p.hit=!0,ot(7);for(let M=0;M<14;M++){const S=l+y(-s,s),w=y(1,3);F(a,u,.1,Math.cos(S)*w,Math.sin(S)*w,y(.3,1),y(.6,.9),M%2?Mt.dust:Mt.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=Mt.e0;for(const M of c)im(d,t,n,M,Math.min(1,x*5));const v=Math.min(1,x/.32);if(v<1){const M=i*(.3+.8*v);d.globalAlpha=1-v,d.fillStyle=Mt.dust;for(let S=0;S<=16;S++){const w=l-s+2*s*S/16,[_,T]=C(t+Math.cos(w)*M,n+Math.sin(w)*M);d.fillRect(St(_)-3,St(T)-2,6,4)}}for(const M of h){const S=(g-M.t0)/.5;if(S<0||S>1)continue;M.done||(M.done=!0,F(M.x,M.y,.2,y(-1,1),y(-1,1),y(3,5),y(.7,1),[Mt.e1,Mt.e2,Mt.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const w=St(M.h*(S<.2?S/.2:1-(S-.2)/.8)),[_,T]=C(M.x,M.y);d.globalAlpha=1,d.fillStyle=Mt.e0,d.fillRect(St(_-M.w/2-1),St(T-2),M.w+2,4),d.fillStyle=Mt.e1,d.fillRect(St(_-M.w/2),St(T-w),M.w,w),d.fillStyle=Mt.e3,d.fillRect(St(_-M.w/2),St(T-w-5),M.w,5),d.fillStyle=Mt.e2,d.fillRect(St(_-M.w/2),St(T-w-1),M.w,1)}}})};function ga(e,t,n,r,o,i){const s=Math.cos(i);return[e+n*Math.cos(o)*s,t+n*.5*Math.sin(o)*s-r*Math.sin(i)]}et.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,s){const l=mt(t),[a,u]=C(l?l.x:r,l?l.y:o,.6),f=St(18*(1-s))+3;i.fillStyle=Mt.amber;for(let h=0;h<8;h++){const c=h/8*xr;i.fillRect(St(a+Math.cos(c)*f*1.4)-2,St(u+Math.sin(c)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(a-3,u-3,6,6)}});for(let i=0;i<10;i++){const s=Math.random()*xr;F(e.x,e.y,.6,Math.cos(s)*y(1,3),Math.sin(s)*y(1,3),y(1.5,3),.4,i%2?Mt.brassL:Mt.amber,2,9,!0)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,s,l){const a=mt(t),u=s*n;if(a&&(r=a.x,o=a.y),!a||a.dead||u>.2&&a.status&&!a.status.dr||s>.985){for(let _=0;_<16;_++){const T=Math.random()*xr,R=y(1,2.5);F(r+Math.cos(T)*.4,o+Math.sin(T)*.4,y(.2,.8),Math.cos(T)*R,Math.sin(T)*R,y(1.5,3.5),.7,[Mt.i1,Mt.i2,Mt.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)F(r,o,.6,y(-2,2),y(-2,2),y(1,3),.35,Mt.brassL,2,6,!0);l.t=1e9;return}const h=a&&a.scale||1,[c,d]=C(r,o),m=St(40*h),p=St(56*h),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!l.done){l.done=!0;const[_,T]=[r,o];for(let R=0;R<6;R++)F(_,T,.75*h,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.3,Mt.i4,2,3,!0)}const v=.85+.15*Math.sin(u*8);i.globalAlpha=.16*v,i.fillStyle=Mt.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const T=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(St(c-T),St(d-_-3),St(T*2),3)}for(let _=0;_<m*.5;_+=3){const T=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(St(c-T),St(d+_),St(T*2),3)}for(let _=0;_<32;_++){const T=_/32*xr,R=ga(c,d,m,p,T,0),z=Math.sin(T)>0;i.globalAlpha=z?.95:.4,i.fillStyle=z?Mt.i3:Mt.i1,i.fillRect(St(R[0])-2,St(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=Mt.i2;for(const _ of[.12,.3,.5,.7,.88]){const T=Math.PI*_;for(let R=0;R<=x;R+=.16){const z=ga(c,d,m,p,T,R);i.fillRect(St(z[0])-1,St(z[1])-1,2,3)}}const S=u*14|0;let w=0;for(const _ of[.42,.9])if(!(_>x))for(let T=0;T<=14;T++){const R=Math.PI*T/14,z=ga(c,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=Mt.i3,i.fillRect(St(z[0])-2,St(z[1])-1,4,2),T%2===0&&(w++,i.globalAlpha=1,i.fillStyle=w%16===S%16?"#ffffff":Mt.brass,i.fillRect(St(z[0])-1,St(z[1])-3,3,3))}if(g>=1){const _=ga(c,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=Mt.i0,i.fillRect(St(_[0])-5,St(_[1])-4,10,6),i.fillStyle=Mt.brass,i.fillRect(St(_[0])-4,St(_[1])-3,8,4),i.fillStyle=Mt.brassL,i.fillRect(St(_[0])-3,St(_[1])-3,3,1)}}})};et.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,s=e.dur||.3,l=o-n,a=i-r,u=Math.hypot(l,a)||1,f=C(n,r),h=C(o,i),c=Math.hypot(h[0]-f[0],h[1]-f[1])||1,d=(h[0]-f[0])/c,m=(h[1]-f[1])/c,p=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const v=x/(g+1),M=x%2?1:-1;p.push({s:v,x:n+l*v-a/u*.17*M,y:r+a*v+l/u*.17*M})}A({type:"custom",layer:"ground",dur:s+2,x:n,y:r,draw(x,v){const M=v*(s+2);for(const S of p){const w=M-S.s*s;if(w<0)continue;const[_,T]=C(S.x,S.y);x.globalAlpha=Math.max(0,.7*(1-w/2)),pl(x,ih,_,T,3,{t:Mt.e0,p:Mt.e0}),x.globalAlpha*=.6,pl(x,ih,_-1,T-1,3,{p:Mt.e1})}}}),A({type:"custom",layer:"top",dur:s+.3,x:n,y:r,draw(x,v,M){const S=v*(s+.3),w=mt(t),_=Math.min(1,S/s),T=w&&S<s?w.x:n+l*_,R=w&&S<s?w.y:r+a*_;if(S<s){if(M.n=M.n||0,M.n<30){M.n+=2;for(let Q=0;Q<2;Q++)F(T+y(-.2,.2),R+y(-.2,.2),.1,-l/u*y(.5,1.5)+y(-.5,.5),-a/u*y(.5,1.5)+y(-.5,.5),y(.4,1.2),y(.5,.8),Q?Mt.e2:Mt.dust,5,-.3,!1,.9)}const[z,I]=C(T,R,.45),O=z+d*26,U=I+m*26,X=-m,N=d;for(let Q=0;Q<3;Q++){const k=Q*8+S*120%8;x.globalAlpha=.9-Q*.25,x.fillStyle=Q?Mt.dust:"#ffffff";const E=[O-d*k,U-m*k];Ts(x,E,[E[0]-d*10+X*13,E[1]-m*10+N*13],3),Ts(x,E,[E[0]-d*10-X*13,E[1]-m*10-N*13],3)}x.globalAlpha=.6,x.fillStyle=Mt.i3;for(let Q=0;Q<4;Q++){const k=(Q-1.5)*9,E=14+(Q*7+S*200)%12;Ts(x,[z-d*20+X*k,I-m*20+N*k],[z-d*(20+E)+X*k,I-m*(20+E)+N*k],2)}}else{if(!M.end){M.end=!0,ot(5);for(let U=0;U<14;U++){const X=Math.random()*xr,N=y(1.5,3);F(o,i,.15,Math.cos(X)*N,Math.sin(X)*N,y(.8,2),.6,U%2?Mt.dust:Mt.e3,5,2,!1,.9)}}const z=(S-s)/.3,[I,O]=C(o+l/u*.5,i+a/u*.5,.45);x.globalAlpha=1-z;for(let U=0;U<8;U++){const X=U/8*xr+.2,N=6+z*14,Q=N+10*(1-z);x.fillStyle=U%2?Mt.amberL:"#ffffff",Ts(x,[I+Math.cos(X)*N,O+Math.sin(X)*N*.7],[I+Math.cos(X)*Q,O+Math.sin(X)*Q*.7],4)}}}})};et.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(s,l)=>om(l/8*xr+y(-.2,.2),o*y(.45,.65),5));ot(10),A({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(s,l){const[a,u]=C(n,r),f=l*1;for(let h=0;h<3;h++){const c=(f-h*.13)/.62;if(c<=0||c>=1)continue;const d=o5(o)*(.15+.95*(1-(1-c)*(1-c))),m=5-h;s.globalAlpha=1-c;for(let p=0;p<56;p++){if(p%7>=5)continue;const g=p/56*xr+h*.2,x=a+Math.cos(g)*d,v=u+Math.sin(g)*d*.5;s.fillStyle=h===0?Mt.amberL:Mt.amber,s.fillRect(St(x-m/2),St(v-m/2),m,m),p%7===2&&(s.fillStyle=Mt.amberD,s.fillRect(St(x*.94+a*.06-1),St(v*.94+u*.06-1),3,3))}}}}),A({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(s,l){s.globalAlpha=.8*(1-l),s.fillStyle=Mt.e0;for(const a of i)im(s,n,r,a,Math.min(1,l*7))}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(s,l){const a=mt(t),u=a?a.x:n,f=a?a.y:r,h=a&&a.scale||1,[c,d]=C(u,f,1.7*h+l*.5),m=l<.07?2:l<.14?3:4;s.globalAlpha=l<.1?l*10:l>.6?Math.max(0,(1-l)/.4):1,s.globalAlpha*=.85+.15*Math.sin(l*60),pl(s,s5,c,d,m,{e:Mt.amberD,i:Mt.amberL,h:Mt.amber,s:Mt.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const g=34+(l*90+p*22)%66,x=1-(l*90+p*22)%66/66;s.globalAlpha=x*(l>.7?(1-l)/.3:1),s.fillStyle=Mt.amberL;for(let v=-.7;v<=.71;v+=.175){const M=Math.cos(v)*g,S=Math.sin(v)*g*.8;s.fillRect(St(c+M)-2,St(d+6+S)-2,4,4),s.fillRect(St(c-M)-2,St(d+6+S)-2,4,4)}}}});for(let s=0;s<30;s++){const l=Math.random()*xr,a=Math.sqrt(Math.random())*o*.9;F(n+Math.cos(l)*a,r+Math.sin(l)*a,0,Math.cos(l)*.4,Math.sin(l)*.4,y(2,4),y(.5,.8),[Mt.e1,Mt.e2,Mt.e3][s%3],s%4?3:4,12,!1,.97)}for(let s=0;s<12;s++){const l=Math.random()*xr,a=y(.3,1.2);F(n+Math.cos(l)*a,r+Math.sin(l)*a,.5,0,0,y(.8,1.6),y(.8,1.2),Mt.amberL,2,-.3,!0,.98)}};Oe.oso=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,s]=C(t,n,.08),l=St(8+o*26),a=1-o;r.globalAlpha=a,r.fillStyle=Mt.i0,r.fillRect(i-l-1,s-2,l*2+2,5),r.fillStyle=Mt.dust,r.fillRect(i-l,s-1,St(l*.7),3),r.fillRect(i+l-St(l*.7),s-1,St(l*.7),3);const[u,f]=C(t,n,.5),h=St(12*(1-o));r.fillStyle=Mt.i3,r.fillRect(u-h-4,f-3,8,6),r.fillRect(u+h-4,f-3,8,6),r.fillStyle=Mt.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)F(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(2,3.5),.3,Mt.brassL,2,12,!0);for(let r=0;r<3;r++)F(t,n,.05,y(-1,1),y(-1,1),y(1,2),.45,Mt.e2,3,10,!1)};const vn="#ffffff",wn="#e6eeff",Er="#bfe9ff",Lo="#7fdcf4",vf="#3a9ab8",We="#fff0b4",sh="#efe0b8",ah="#c8a878",a5="#34408a",lh="#a9bfdc",qt=Math.round,Ho=Math.PI*2;function me(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(qt(t),qt(n),r,o)}function yl(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=qt(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(qt(t-s),qt(n+i),s*2,2)}}function zi(e,t,n,r,o,i,s,l=1){const a=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,qt(2*l));e.fillStyle=s;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=qt(n+c*l);if(Math.abs(m)>=f){e.fillRect(qt(t-d),p,qt(2*d),h);continue}const g=Math.sqrt(f*f-m*m),x=a-g,v=a+g;if(x>-d&&e.fillRect(qt(t-d),p,qt(Math.min(x,d)+d),h),v<d){const M=Math.max(v,-d);e.fillRect(qt(t+M),p,qt(d-M),h)}}}function l5(e,t,n,r,o,i,s){t=qt(t),n=qt(n);const l=[3,2,1,2][o],a=Math.max(1,l-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*l,n-2*r,r*l,2*r),e.fillRect(t+u,n-2*r,r*l,2*r),e.fillRect(t-u-r*a,n,r*a,r),e.fillRect(t+u,n,r*a,r),e.fillStyle=s,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function uh(e,t,n,r,o,i,s,l,a){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const h=qt(t+u*i-f),c=qt(t+u*i+f),d=qt(n+u);e.globalAlpha=.45*a,e.fillStyle=s,e.fillRect(h,d,c-h,2),e.globalAlpha=.95*a,e.fillStyle=l,e.fillRect(h,d,2,2),e.fillRect(c-2,d,2,2)}}function u5(e,t,n,r,o){t=qt(t),n=qt(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const sm=e=>{const t=mt(e);return t&&!t.dead&&!ze(t)?t:null},f5=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},gl=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Fe.polilla_A=(e,t,n,r,o,i)=>{gt(!0);const s=Lt(),l=.65+.35*Math.sin(i*20),a=qt(5+l*3);s.globalAlpha=l,me(s,n-a,r-1,a*2,2,Lo),me(s,n-1,r-a,2,a*2,Lo),s.globalAlpha=1,me(s,n-2,r-2,4,4,vn);const u=i*14;me(s,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,We),me(s,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,We),gt(!1)};Oe.polilla=e=>{A({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.5),i=qt(10*(1-n))+2;t.globalAlpha=1-n,me(t,r-i,o-1,i*2,2,wn),me(t,r-1,o-i,2,i*2,wn),me(t,r-2,o-2,4,4,vn)}});for(let t=0;t<5;t++)F(e.x,e.y,.5,y(-1,1),y(-1,1),y(.2,.8),.6,t%2?We:Er,2,.4,!0,.9)};Fe.polilla_Q=(e,t,n,r,o,i)=>{const l=t.z||.45;n=qt(n),r=qt(r),gt(!0);const a=Lt(),u=a.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),a.fillStyle=u,a.fillRect(n-9*3,r-9*3,9*6,9*6),gt(!1),yl(e,n,r,10,vf),yl(e,n,r,9,wn),zi(e,n,r,9,Math.PI*.85,.55,lh);for(let c=0;c<3;c++){const d=i*2+c*2.1;me(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,c?2:3,2,lh)}me(e,n-4,r-5,2,2,vn);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=(i*2.2+c/3)%1,m=14+c*10;e.globalAlpha=1-d,u5(e,n-f*m,r-h*m-6-d*14,c<2?1:2,c%2?We:wn)}e.globalAlpha=1,Math.random()<.4&&F(t.x,t.y,l,y(-.3,.3),y(-.3,.3),-.4,.6,Math.random()<.5?We:wn,2,.5,!0,.9)};et.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,s]=C(e.x+t*.4,e.y+n*.4,.75),l=qt(14*(1-o))+2,a=qt(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)me(r,i-l,s-1,l*2,2,We),me(r,i-1,s-l,2,l*2,We);else for(let u=1;u<=a;u+=2)me(r,i+u,s+u,2,2,We),me(r,i-u-2,s+u,2,2,We),me(r,i+u,s-u-2,2,2,We),me(r,i-u-2,s-u-2,2,2,We);me(r,i-2,s-2,4,4,vn);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,h=16+u;me(r,i+Math.cos(f)*h-1,s+Math.sin(f)*h*.6-1,2,2,u%2?We:wn)}}});for(let r=0;r<10;r++)F(e.x+t*.4,e.y+n*.4,.75,t*y(.5,1.5)+y(-.4,.4),n*y(.5,1.5)+y(-.4,.4),y(0,.4),y(.6,1),r%2?We:wn,2,.6,!0,.9)};et.polilla_W=e=>{if(e.type==="heal"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),zi(n,o,i,7,-.6,.5,wn);for(let s=0;s<3;s++){const l=(r*1.6+s/3)%1;me(n,o-10+s*10,i+l*50,2,4,s%2?Er:vn)}}});for(let n=0;n<8;n++)F(e.x+y(-.35,.35),e.y+y(-.35,.35),y(1,1.6),0,0,-y(.6,1.2),y(.7,1.1),n%2?wn:We,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=sm(e.uid),i=o?o.x:e.x,s=o?o.y:e.y,[l,a]=C(i,s,2.2),u=r*1.2,f=qt(15*gl(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),zi(n,l,a,f+2,-.7,.5,Lo),zi(n,l,a,f,-.7,.55,vn);for(let h=0;h<5;h++){const c=b.T*2+h*1.26;(b.T*6+h)%2<1&&me(n,l+Math.cos(c)*(f+10)-1,a+Math.sin(c)*(f+6)-1,2,2,We)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const s=Math.max(0,Math.min(1,(r-i)/(1-i)));if(s<=0)continue;const l=t*o*(.3+.7*(1-(1-s)*(1-s)));n.globalAlpha=.85*(1-s);for(let a=0;a<36;a++){const u=a/36*Ho,[f,h]=C(e.x+Math.cos(u)*l,e.y+Math.sin(u)*l);me(n,f-1,h-1,a%3?2:3,2,a%2?Er:vn)}}}});for(let n=0;n<40;n++){const r=y(0,Ho),o=Math.sqrt(Math.random())*t*.9;F(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,y(2.2,3),y(-.15,.15),y(-.15,.15),-y(1.2,2),y(1.1,1.6),[wn,Er,vn,We][n%4],2,.4,!0,.99)}};et.polilla_E=e=>{const t=e.dur||3;A({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=sm(e.uid);if(!i)return;const s=r*o.dur;!o.end&&s>.3&&(s>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=s);const l=o.end?Math.max(0,1-(s-o.end)/.25):1;if(l<=0)return;const a=s<.22?gl(s/.22):1,u=.85+.15*Math.sin(b.T*8),[f,h]=C(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*a),p=h-9-3*a,g=f+d*(7+10*a),x=h+9;uh(n,g,x,10*a*u,8,.4*d,ah,sh,l),uh(n,m,p,15*a*u,13,-.45*d,sh,ah,l),n.globalAlpha=.9*l,a>.5&&(yl(n,m+d*2,p-1,4,a5),me(n,m+d*2-1,p-2,2,2,We),me(n,m+d*2-2,p-3,1,1,vn))}gt(!0);const c=Lt();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(b.T*3+d*.37)%1;p>.3||(c.globalAlpha=(1-p/.3)*l,me(c,f+m*(12+(d>>1)*9)*a-1,h-20+(d>>1)*10,2,2,vn))}gt(!1)}});for(let n=0;n<18;n++){const r=y(0,Ho),o=y(1,2.2);F(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.5,.9),n%3?We:wn,2,.5,!0,.92)}};const fh=3.4,bf=[1,.8,.62,.45,.3,.16];let ch=null,hh=null,dh=[],mh=[];function ph(e,t,n,r,o,i,s){const l=b.T,a=ir(o);for(let u=0;u<9;u++){const f=u/9*Ho+l*.45,h=Math.cos(f),c=Math.sin(f);if(Sr(h,c,0)>0!==i)continue;const d=Math.max(2,qt((4+u%3*3)*Math.sqrt(Math.max(0,1-(h-c)*(h-c)/2))));Ke(t+h*r,n+c*r);const m=.75+.25*Math.sin(l*3+u*1.7),p=qt(vt.x-d/2);for(let g=0;g<6;g++)e.globalAlpha=s*m*bf[g]*(i?.5:.45),e.fillStyle=g<2?vn:wn,e.fillRect(p,qt(vt.y-a*(g+1)/6),d,qt(a/6)+1)}}et.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=f5(e),r=n&&n.dur||4,o=10,i=t*B.HW*Math.SQRT2,s=t*B.HH*Math.SQRT2,l=Array.from({length:o},(c,d)=>({ox:y(-.6,.6)*t,oy:y(-.6,.6)*t,w:y(.8,1.6),p:y(0,Ho),z:y(.6,2.4),ph:d}));let a=0;const u=Zo(e,r),f=()=>b.T-u.t0,h=c=>Math.min(1,f()/.25,c/.4);A({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=sn(u);if(p<=0){m.t=m.dur+1;return}const g=h(p),x=gl(f()/.3),v=fh*Math.min(1,f()/.4);Ke(e.x,e.y);const M=vt.x,S=vt.y,w=Pn(t)*x;ch!==c&&(ch=c,dh=[{u0:0,fill:Pt(c,vf,3),a:.5},{u0:.7,fill:Pt(c,Lo,5),a:.5},{u0:.92,fill:Pt(c,Er,9),a:.55}]),qr(c,M,S,w,w,ir(v),!1,dh,bf,g),ph(c,e.x,e.y,t*x,v,!1,g),Kr(u,e.x,e.y,t*1.1,12577279,.7*g)}}),A({type:"custom",layer:"ground",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=sn(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=h(p),[v,M]=C(e.x,e.y);c.globalAlpha=.13*x,c.fillStyle=Lo;for(let S=-s;S<=s;S+=2){const w=i*Math.sqrt(Math.max(0,1-S*S/(s*s)));c.fillRect(qt(v-w),qt(M+S),qt(w*2),2)}c.globalAlpha=.4*x,zi(c,v,M,qt(t*30),-.5,.5,Er,.5),c.globalAlpha=.85*x;for(let S=0;S<40;S++){const w=S/40*Ho+g*.35,[_,T]=C(e.x+Math.cos(w)*t,e.y+Math.sin(w)*t);me(c,_-1,T-1,2,2,S%4?Er:vn)}}}),A({type:"custom",layer:"top",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=sn(u);if(p<=0){m.t=m.dur+1;return}const g=f(),x=h(p),v=gl(g/.3),M=fh*Math.min(1,g/.4);Ke(e.x,e.y);const S=vt.x,w=vt.y,_=Pn(t)*v;hh!==c&&(hh=c,mh=[{u0:0,fill:Pt(c,vf,2),a:.4},{u0:.72,fill:Pt(c,Lo,3),a:.45},{u0:.93,fill:Pt(c,wn,7),a:.55}]),qr(c,S,w,_,_,ir(M),!0,mh,bf,x),ph(c,e.x,e.y,t*v,M,!0,x),c.globalAlpha=x*.85,c.fillStyle=Er,kr(c,e.x,e.y,M,t*v,64,2,g*.5,0),c.fillStyle=vn,kr(c,e.x,e.y,M,t*v,16,3,-g*.8,1),Ke(e.x,e.y,M+.45+Math.sin(g*1.6)*.06),c.globalAlpha=x*.35,yl(c,vt.x,vt.y,26,Lo),c.globalAlpha=x,zi(c,vt.x,vt.y,18,.9,.55,vn);for(const T of l){const R=g*T.w+T.p,z=e.x+T.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,I=e.y+T.oy+Math.sin(R)*.6,[O,U]=C(z,I,T.z+Math.sin(g*1.7+T.p)*.4);c.globalAlpha=x*Math.min(1,g/.4),l5(c,O,U,2,((b.T*14|0)+T.ph)%4,T.ph%3?wn:vn,Er)}if(a<50&&Math.random()<.3){a++;const T=y(0,Ho),R=Math.sqrt(Math.random())*t;F(e.x+Math.cos(T)*R,e.y+Math.sin(T)*R,y(2.5,3.5),0,0,-y(.8,1.4),y(1.5,2.2),a%3?wn:We,2,0,!0,.99)}}}),ot(2)};const lt=Math.round,Je=Math.PI*2,ao=e=>e*B.HW*Math.SQRT2,tt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},_0=e=>!!(b.game&&b.game.player&&e.uid===b.game.player.id);function am(e,t,n,r){r=Math.max(1,lt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(lt(t[0]+(n[0]-t[0])*l/i-s),lt(t[1]+(n[1]-t[1])*l/i-s),r,r)}function nn(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const l=(s+i/2)/o,a=r*Math.sqrt(Math.max(0,1-l*l));a>=.5&&e.fillRect(lt(t-a),lt(n+s),Math.max(1,lt(a*2)),i)}}function Ur(e,t,n,r,o,i,s=0,l=0){for(let a=0;a<o;a++){if(l&&a%l===0)continue;const u=s+a/o*Je;e.fillRect(lt(t+Math.cos(u)*r-i/2),lt(n+Math.sin(u)*r*.5-i/2),i,i)}}function c5(e,t,n,r=99){let o=null,i=r;for(const s of b.game?b.game.units:[]){if(s.dead||s.heroKey!==n)continue;const l=Math.hypot(s.x-e,s.y-t);l<i&&(i=l,o=s)}return o}function Zs(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?tt.skinD:i===1?tt.skin:tt.skinL;for(let s=0;s<=o;s++){const l=n+(r-n)*s/o,a=lt(i===0?l+3:i===1?l:Math.max(1,l*.35)),u=i===2?-l*.25:0;e.fillRect(lt(t[s][0]-a/2),lt(t[s][1]+u-a/2),a,a)}}for(let i=2;i<o-1;i+=3){const s=n+(r-n)*i/o,l=Math.max(2,lt(s*.4)),a=lt(t[i][0]),u=lt(t[i][1]+s*.3);e.fillStyle=tt.sucker,e.fillRect(a-(l>>1),u-(l>>1),l,l),l>2&&(e.fillStyle=tt.skinD,e.fillRect(a,u,1,1))}}}function lm(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],s=Math.hypot(o,i)||1,l=-i/s,a=o/s,u=Math.max(4,Math.ceil(s/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,g=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+l*g,e[1]+i*p+a*g])}let[h,c]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);h+=Math.cos(d)*p,c+=Math.sin(d)*p,f.push([h,c])}return f}et.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,s=Array.from({length:22},(a,u)=>({a:r+y(-.9,.9)*o,d:i*y(.45,1),t0:y(0,.12),w:y(0,6),sz:y(6,10),bio:u%4===0}));A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(a,u){const f=u*.62;for(const h of s){const c=(f-h.t0)/.42;if(c<0||c>1.15)continue;const d=1-Math.pow(1-Math.min(1,c),2),m=h.d*d,p=Math.sin(d*Je+h.w)*.2*d,g=t+Math.cos(h.a)*m-Math.sin(h.a)*p,x=n+Math.sin(h.a)*m+Math.cos(h.a)*p,[v,M]=C(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),S=h.sz*(1-.4*d);a.globalAlpha=c>1?(1.15-c)/.15:1,a.fillStyle=tt.ink,nn(a,v,M,S,S*.75,2),a.fillStyle=tt.inkV,nn(a,v-S*.3,M-S*.3,S*.4,S*.3,1),h.bio&&(a.fillStyle=tt.bio,a.fillRect(lt(v+S*.2),lt(M),2,2))}}});const l=s.slice(0,9);A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(a,u,f){for(const h of l){const c=f.t-h.t0-.42;if(c<0)continue;const d=Math.min(1,c*10),m=Math.min(1,(2.6-f.t)/.6),[p,g]=C(t+Math.cos(h.a)*h.d,n+Math.sin(h.a)*h.d),[x,v]=C(t,n),M=x-p,S=v-g,w=Math.hypot(M,S)||1;a.globalAlpha=.85*m;for(let T=0;T<4;T++){const R=(h.sz+2)*(1-T*.22)*d;a.fillStyle=T?tt.inkP:tt.ink,nn(a,p+M/w*T*7*d,g+S/w*T*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(b.T*4+h.w*3);a.globalAlpha=m*_,a.fillStyle=tt.bio,a.fillRect(lt(p-3),lt(g-1),2,2),a.fillRect(lt(p+4),lt(g+1),2,1),h.bio&&(a.fillStyle=tt.bioL,a.fillRect(lt(p),lt(g-2),1,1))}}});for(let a=0;a<12;a++){const u=r+y(-1,1)*o,f=y(2,4.5);F(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,y(.5,1.8),y(.35,.6),a%3?tt.ink:tt.bio,a%3?3:2,7,a%3===0,.93)}};const Mi=[];function h5(e){let t=null,n=1.3;for(const r of Mi){if(r.done||b.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}const um=e=>C(e.x,e.y,.35);function fm(e,t,n){A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=mt(e);if(!i)return;const s=um(i),l=C(t,n,.45),a=1-o*o;a<.05||Zs(r,lm(s,[s[0]+(l[0]-s[0])*a,s[1]+(l[1]-s[1])*a],b.T,1+o*2),10,3)}})}et.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=Mi.length-1;o>=0;o--)b.T-Mi[o].t>3&&Mi.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:b.T,lx:e.x,ly:e.y,lt:0,done:!1};Mi.push(r),A({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,s){if(r.done){s.t=s.dur+1;return}r.lt>0&&b.T-r.lt>.12&&(r.done=!0,fm(r.uid,r.lx,r.ly),s.t=s.dur+1)}});for(let o=0;o<8;o++)F(e.x+t*.3,e.y+n*.3,.3,t*y(.5,1.5)+y(-.6,.6),n*y(.5,1.5)+y(-.6,.6),y(.5,1.5),.4,o%2?tt.sucker:tt.skin,2,5,!1)};Fe.pulpo_W=(e,t,n,r,o,i)=>{const s=h5(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=b.T);const l=s?mt(s.uid):t.src||c5(t.x,t.y,"pulpo",9),a=l&&!l.dead?um(l):[n-Math.cos(o)*70,r-Math.sin(o)*70];Zs(e,lm(a,[n,r],i),11,3),Math.random()<.25&&F(t.x,t.y,.4,0,0,-.3,.4,tt.bio,2,3,!0)};et.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?mt(e.uid):null,o=r?r.team:null;let i=null,s=1.3;for(const c of b.game?b.game.units:[]){if(c.dead||o&&c.team===o||r&&c===r||c.kind==="tower"||c.kind==="nexus")continue;const d=Math.hypot(c.x-t,c.y-n);d<s&&(s=d,i=c)}const l=i?i.id:0,a=1.4,u=Math.random()<.5?-1:1;let f=null;for(const c of Mi)c.uid===e.uid&&b.T-c.t<1.5&&(!f||c.t>f.t)&&(f=c);f&&!f.done&&(f.done=!0,fm(f.uid,t,n));const h=c=>{const d=l?mt(l):null;return d&&!d.dead?[d.x,d.y]:[c.x,c.y]};A({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(c,d,m){const[p,g]=h(m),[x,v]=C(p,g),M=Math.min(1,m.t/.12),S=d>.8?(1-d)/.2:1;c.globalAlpha=.9*S,c.fillStyle=tt.ink,nn(c,x,v,30*M,13*M,2),c.fillStyle=tt.inkP,nn(c,x,v,20*M,8*M,2),c.fillStyle=tt.bio,Ur(c,x,v,30*M,18,2,b.T*2,3)}}),A({type:"custom",layer:"top",dur:a,x:t,y:n,draw(c,d,m){const[p,g]=h(m),x=d>.8?(1-d)/.2:1,v=Math.min(1,m.t/.18),M=b.T;c.globalAlpha=x;const S=[];for(let w=0;w<=16;w++){const _=w/16,T=_*1.15*v,R=Math.max(0,_-.6)/.4,[z,I]=C(p,g,T);S.push([z+u*(20-R*26)+Math.sin(M*5+_*4)*2,I-R*6])}Zs(c,S,12,3);for(let w=0;w<2;w++){const[,_]=C(p,g,(.22+w*.3)*v),[T]=C(p,g),R=19-2*Math.sin(M*9+w*2),z=1+.08*Math.sin(M*9);for(let I=0;I<=12;I++){const O=.1*Math.PI+I/12*.8*Math.PI,U=T+Math.cos(O)*R*z,X=_+Math.sin(O)*7;c.fillStyle=tt.skinD,c.fillRect(lt(U)-4,lt(X)-4,8,8),c.fillStyle=tt.skin,c.fillRect(lt(U)-3,lt(X)-3,6,5),I%3===1&&(c.fillStyle=tt.sucker,c.fillRect(lt(U)-1,lt(X)+1,3,2))}}}});for(let c=0;c<10;c++){const d=Math.random()*Je,m=y(1,2.4);F(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,y(1,2.5),.5,c%3?tt.ink:tt.bio,3,9,c%3===0)}ot(_0(e)?3:1)};function d5(e,t,n,r,o,i){if(r<.05)return;const s=[];for(let l=0;l<=9;l++){const a=l/9,[u,f]=C(t,n,a*r*.75),h=Math.max(0,a-.55)/.45;s.push([u+Math.sin(o*3+i+a*3)*4*a+h*h*10,f+h*h*8])}Zs(e,s,8,2)}et.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(l=>({a:l/4*Je+y(-.3,.3),d:y(.45,.75),ph:Math.random()*Je})),s=l=>Math.min(1,l/.25,(o-l)/.35);A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(l,a,u){const f=Math.max(0,s(u.t)),h=Math.min(1,u.t/.3),[c,d]=C(t,n),m=ao(r)*h,p=u.t;l.globalAlpha=.6*f,l.fillStyle=tt.navy,nn(l,c,d,m,m*.5,3),l.globalAlpha=.65*f,l.fillStyle=tt.deep,nn(l,c,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const v=(x/28+p*.55)%1,M=1-v,S=g/3*Je+p*2.2+v*5,w=c+Math.cos(S)*m*(.08+.9*M),_=d+Math.sin(S)*m*(.08+.9*M)*.5;l.globalAlpha=f*(.35+.65*v),l.fillStyle=M>.6?tt.water:M>.3?tt.bio:tt.bioL;const T=M>.5?4:3;l.fillRect(lt(w)-(T>>1),lt(_)-1,T,2+(M>.5?1:0))}l.globalAlpha=.9*f,l.fillStyle=tt.foam,Ur(l,c,d,m*.97,56,3,p*1.4,4),l.fillStyle=tt.water,Ur(l,c,d,m*.85,40,2,p*1.9,3),l.globalAlpha=f,l.fillStyle=tt.inkV,nn(l,c,d,19*h,9*h,1),l.fillStyle=tt.abyss,nn(l,c,d,15*h,7*h,1)}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(l,a,u){const f=Math.max(0,s(u.t)),h=b.T;l.globalAlpha=f;for(const c of i){const d=c.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+c.ph))*1.1;d5(l,t+Math.cos(d)*r*c.d,n+Math.sin(d)*r*c.d,m,h,c.ph)}for(let c=0;c<6;c++){const d=u.t*1.5+c/6,m=Math.floor(d),p=d-m,g=nt(m*11+c)*Je,x=r*.3*nt(m*5+c*7),[v,M]=C(t+Math.cos(g)*x,n+Math.sin(g)*x,p*.9),S=2+lt(p*3);l.globalAlpha=f*(1-p),l.fillStyle=tt.foam,l.fillRect(lt(v)-S,lt(M),1,2),l.fillRect(lt(v)+S,lt(M),1,2),l.fillRect(lt(v),lt(M)-S,2,1),l.fillRect(lt(v),lt(M)+S,2,1)}}}),A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(l,a){const[u,f]=C(t,n);l.globalAlpha=1-a,l.fillStyle=tt.foam,Ur(l,u,f,ao(r)*(.3+a*.9),40,4)}});for(let l=0;l<16;l++){const a=l/16*Je;F(t+Math.cos(a)*r*.8,n+Math.sin(a)*r*.8,.1,-Math.sin(a)*2,Math.cos(a)*2,y(1,2.5),.5,l%3?tt.foam:tt.bio,3,8,l%3===0)}};const Sf=new Map;function ps(e,t,n){const r=mt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=b.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(b.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function m5(e,t,n,r,o){const s=10*r;if(s<1){e.fillStyle=tt.inkL,e.fillRect(lt(t-26),lt(n),26*2,2);return}for(let a=-s;a<s;a+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((a+1)/s,2)));e.fillStyle=tt.inkL,e.fillRect(lt(t-u-2),lt(n+a),lt(u*2+4),2),e.fillStyle=tt.eyeD,e.fillRect(lt(t-u),lt(n+a),lt(u*2),2)}const l=Math.sin(o*.8)*6;e.fillStyle=tt.eye,nn(e,t+l,n,Math.min(11,26),Math.min(9,s),2),e.fillStyle=tt.abyss,e.fillRect(lt(t+l-8),lt(n-2),16,Math.max(2,lt(5*r))),e.fillStyle="#ffffff",e.fillRect(lt(t+l-6),lt(n-Math.min(6,s-1)),3,2)}const Cr=2.5,on=.5,Ro=.84,p5=[1,.9,.75,.6,.45],y5=[.85,.75,.62,.5,.38];let _u=null,Au=null,yh=null,gh=null;const xh=e=>1-(1-e)*(1-e);function Mh(e,t,n,r,o,i,s,l){if(o<.05)return;const a=r*on,u=r*(on+(Ro-on)*Math.min(1,o/Cr)),f=(u-a)/o;for(let h=0;h<14;h++){const c=h/14*Je;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+h*.37)%1;if(p>.5)continue;const g=c+i*(2.6-1.3*m)+m*2.4,x=Math.cos(g),v=Math.sin(g),M=a+(u-a)*m;Sr(x,v,-f)>0===l&&(Ke(t+x*M,n+v*M,m*o),e.globalAlpha=s*(.45+.55*(1-p*2))*(l?.9:.7),e.fillStyle=m<.3?tt.mag:m<.65?tt.bio:tt.water,e.fillRect(lt(vt.x)-3,lt(vt.y)-1,m<.3?4:6,3))}}}function g5(e){const t={ended:!1,endT:0};Sf.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,s=(e.dur||3)+.5,l=Array.from({length:44},()=>({a:Math.random()*Je,off:Math.random(),sp:y(.35,.6)})),a=Array.from({length:8},()=>({a:Math.random()*Je,off:Math.random(),sz:lt(y(4,7))})),u=[0,1,2,3,4].map(h=>({a:h/5*Je+y(-.2,.2),ph:Math.random()*Je}));A({type:"custom",layer:"ground",dur:s,x:r,y:o,draw(h,c,d){const m=ps(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=C(r,o),v=ao(i)*p;h.globalAlpha=.4*m,h.fillStyle=tt.inkP,nn(h,g,x,v*.95,v*.475,3),h.globalAlpha=.7*m,h.fillStyle=tt.ink,nn(h,g,x,v*.52,v*.26,3),h.globalAlpha=m,h.fillStyle=tt.abyss,nn(h,g,x,v*.27,v*.135,2);for(const M of l){const S=(M.off+d.t*M.sp)%1,w=1-S,_=v*(.27+.73*w),T=M.a+S*S*4+d.t*.8,R=g+Math.cos(T)*_,z=x+Math.sin(T)*_*.5,I=g+Math.cos(T-.14)*_*1.04,O=x+Math.sin(T-.14)*_*.52;h.globalAlpha=m*(.3+.7*S),h.fillStyle=w>.6?tt.water:w>.3?tt.bio:tt.mag,am(h,[I,O],[R,z],w>.5?2:3)}h.globalAlpha=.8*m,h.fillStyle=tt.inkV,Ur(h,g,x,v,64,3,-d.t*.6,4)}});const f={nl:0};A({type:"custom",layer:"ground",dur:s,x:r,y:o,draw(h,c,d){const m=ps(t,n,d);if(m<=0)return;const p=xh(Math.min(1,d.t/.55))*(t.ended?m:1);Ke(r,o);const g=vt.x,x=vt.y,v=ir(Cr*p);(!_u||yh!==h)&&(yh=h,_u=[{u0:0,fill:Pt(h,tt.deep,11),a:.7},{u0:.45,fill:Pt(h,tt.water,10),a:.7},{u0:.78,fill:Pt(h,tt.bio,9),a:.7},{u0:.93,fill:Pt(h,tt.bioL,12),a:.75}]),qr(h,g,x,Pn(i*on),Pn(i*(on+(Ro-on)*p)),v,!1,_u,p5,m),Mh(h,r,o,i,Cr*p,d.t,m,!1),h.globalAlpha=.9*m,h.fillStyle=tt.foam,kr(h,r,o,Cr*p,i*(on+(Ro-on)*p),110,4,-d.t*1.3,-1),h.fillStyle=tt.water,kr(h,r,o,Cr*p-.08,i*(on+(Ro-on)*p)*.97,60,3,-d.t*1.9,-1),Kr(f,r,o,i*1.05,4911328,.55*m)}}),A({type:"custom",layer:"top",add:!0,dur:s,x:r,y:o,draw(h,c,d){const m=ps(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[g,x]=C(r,o,.04),v=ao(i)*.28*p,M=b.T;for(let S=0;S<44;S++){const w=S/44*Je+M*2.5,_=.6+.4*Math.sin(M*20+S*1.7);h.globalAlpha=m*_,h.fillStyle=S%2?tt.bio:tt.mag,h.fillRect(lt(g+Math.cos(w)*v)-1,lt(x+Math.sin(w)*v*.5)-1,3,3)}h.globalAlpha=m*.45,h.fillStyle=tt.bioL;for(let S=0;S<18;S++){const w=Math.PI+S/17*Math.PI;h.fillRect(lt(g+Math.cos(w)*v*1.15),lt(x-14+Math.sin(w)*v*.35),2,2)}}}),A({type:"custom",layer:"top",dur:s,x:r,y:o,draw(h,c,d){const m=ps(t,n,d);if(m<=0)return;const p=b.T,g=Math.min(1,d.t/.5)*(t.ended?m:1);h.globalAlpha=m;for(const w of a){const _=(w.off+d.t*.4)%1,T=1-_,R=w.a+_*5,[z,I]=C(r+Math.cos(R)*i*.95*T,o+Math.sin(R)*i*.95*T,.05+.35*Math.sin(_*Math.PI)),O=Math.max(2,lt(w.sz*(.35+.65*T)));h.fillStyle=tt.ink,h.fillRect(lt(z)-(O>>1)-1,lt(I)-(O>>1)-1,O+2,O+2),h.fillStyle=tt.rock,h.fillRect(lt(z)-(O>>1),lt(I)-(O>>1),O,O),h.fillStyle=tt.rockL,h.fillRect(lt(z)-(O>>1),lt(I)-(O>>1),Math.max(1,O>>1),1)}const x=u.map(w=>({t:w,a:w.a+d.t*.3})).sort((w,_)=>Math.cos(w.a)+Math.sin(w.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:w,a:_}of x){const T=[];for(let R=0;R<=18;R++){const z=R/18,I=i*(.92-.42*z*z),O=_+Math.sin(p*2+w.ph+z*3)*.12*z,U=Math.sin(z*Math.PI*.8)*1.9*g-Math.max(0,z-.8)*1.2*g;T.push(C(r+Math.cos(O)*I,o+Math.sin(O)*I,Math.max(0,U)))}Zs(h,T,15*g+2,3)}const v=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,S]=C(r,o,.3);m5(h,M,S,v,p)}}),A({type:"custom",layer:"top",dur:s,x:r,y:o,draw(h,c,d){const m=ps(t,n,d);if(m<=0)return;const p=xh(Math.min(1,d.t/.55))*(t.ended?m:1);Ke(r,o);const g=vt.x,x=vt.y,v=ir(Cr*p);(!Au||gh!==h)&&(gh=h,Au=[{u0:0,fill:Pt(h,tt.water,4),a:.55},{u0:.5,fill:Pt(h,tt.water,6),a:.6},{u0:.8,fill:Pt(h,tt.bio,8),a:.65},{u0:.93,fill:Pt(h,tt.bioL,12),a:.75}]),qr(h,g,x,Pn(i*on),Pn(i*(on+(Ro-on)*p)),v,!0,Au,y5,m),Mh(h,r,o,i,Cr*p,d.t,m,!0),h.globalAlpha=m,h.fillStyle=tt.foam,kr(h,r,o,Cr*p,i*(on+(Ro-on)*p),110,4,-d.t*1.3,1),h.fillStyle=tt.bioL,kr(h,r,o,Cr*p+.04,i*(on+(Ro-on)*p)*.98,24,2,d.t*2.1,1)}}),ot(_0(e)?6:2)}et.pulpo_R=e=>{if(e.type==="channel"){g5(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[s,l]=C(t,n),a=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=tt.mag,Ur(o,s,l,ao(r)*(.25+.75*a),48,3,i*3),o.fillStyle=tt.bioL,Ur(o,s,l,ao(r)*(.22+.7*a),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*Je,s=r*y(.6,1);F(t+Math.cos(i)*s,n+Math.sin(i)*s,.2,-Math.cos(i)*s*1.6,-Math.sin(i)*s*1.6,.3,.55,o%2?tt.inkV:tt.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Sf.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=b.T),Sf.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)F(t+y(-.6,.6),n+y(-.6,.6),.2,y(-1,1),y(-1,1),y(.5,1.5),.6,i%2?tt.ink:tt.inkV,4,2,!1);return}A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.3);if(s<.35){const u=lt(30*(1-s/.35))+2;i.fillStyle=tt.bioL,i.fillRect(l-u,a-1,u*2,3),i.fillRect(l-1,a-u,3,u*2)}else{const u=(s-.35)/.65;i.globalAlpha=1-u,i.fillStyle=tt.mag,Ur(i,l,a+20,ao(r)*u,56,4),i.fillStyle=tt.bio,Ur(i,l,a+20,ao(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const s=Math.random()*Je,l=y(2,5);F(t,n,.3,Math.cos(s)*l,Math.sin(s)*l,y(1.5,3.5),y(.5,.9),[tt.ink,tt.inkV,tt.bio,tt.mag][i%4],i%3?3:4,9,i%4>1,.94)}ot(_0(e)?8:3)}};Fe.pulpo_A=(e,t,n,r,o,i)=>{const s=7+Math.sin(i*18)*1.2,l=Math.cos(o),a=Math.sin(o);e.fillStyle=tt.ink,nn(e,n-l*11,r-a*11,3,3,1),nn(e,n-l*18,r-a*18,2,2,1),e.fillStyle=tt.ink,nn(e,n,r,s+1,s*.8+1,2),e.fillStyle=tt.inkV,nn(e,n,r,s-1,s*.8-1,2),e.fillStyle=tt.inkL,e.fillRect(lt(n-3),lt(r-4),3,2),e.fillStyle=tt.bio,e.fillRect(lt(n+2),lt(r+1),2,2),Math.random()<.3&&F(t.x,t.y,t.z||.45,0,0,-.2,.35,tt.ink,2,5,!1)};Oe.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*Je;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[s,l]=C(t,n,.45),a=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=tt.ink,nn(o,s,l,9*a,7*a,2);for(let u=0;u<6;u++){const f=r+u/6*Je,h=(u%2?13:19)*a;o.fillStyle=tt.ink,am(o,[s,l],[s+Math.cos(f)*h,l+Math.sin(f)*h*.75],4),o.fillStyle=tt.inkV,o.fillRect(lt(s+Math.cos(f)*(h+4))-2,lt(l+Math.sin(f)*(h+4)*.75)-2+i*10,4,4)}o.fillStyle=tt.bio,o.fillRect(lt(s-3),lt(l-2),2,2),o.fillRect(lt(s+4),lt(l+2),2,2)}});for(let o=0;o<6;o++)F(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(.8,2),.4,o%3?tt.ink:tt.bio,2,8,o%3===0)};const zt=Math.round,vr=Math.PI*2,bt={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},Tu=e=>e*B.HW*Math.SQRT2;function Dr(e,t,n,r){r=Math.max(1,zt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(zt(t[0]+(n[0]-t[0])*l/i-s),zt(t[1]+(n[1]-t[1])*l/i-s),r,r)}function Oi(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const l=(s+i/2)/o,a=r*Math.sqrt(Math.max(0,1-l*l));a>=.5&&e.fillRect(zt(t-a),zt(n+s),Math.max(1,zt(a*2)),i)}}function wf(e,t,n,r,o,i){const s=t[0].length,l=t.length,a=zt(n-s*o/2),u=zt(r-l*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<l;h++)for(let c=0;c<s;c++)t[h][c]===f&&e.fillRect(a+c*o,u+h*o,o,o)}}function Ji(e,t,n,r,o,i,s=0,l=0){for(let a=0;a<o;a++){if(l&&a%l===0)continue;const u=s+a/o*vr;e.fillRect(zt(t+Math.cos(u)*r-i/2),zt(n+Math.sin(u)*r*.5-i/2),i,i)}}const ys=new Map;function x5(e){if(ys.has(e))return!1;if(ys.size>300)for(const[t,n]of ys)b.T-n>4&&ys.delete(t);return ys.set(e,b.T),!0}function M5(e){const t=b.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||ze(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const vh=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],v5=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function cm(e,t,n,r){wf(e,vh,t+1,n+1,r,{g:bt.deep,v:bt.deep}),wf(e,vh,t,n,r,{g:bt.pad,v:bt.moss})}function b5(e,t){const n=Math.random()*6;A({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,s]=C(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=bt.waterD,Ji(r,i,s,8+o*14,10,2,n,3),cm(r,i,s+zt(Math.sin(o*9+n)),o<.55?2:1)}})}function S5(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),s=a=>[t+o*a,n+i*a];e.fillStyle=bt.ink,Dr(e,s(-11),s(11),5),e.fillStyle=bt.moss,Dr(e,s(-8),s(-1),3),e.fillStyle="#d8e2ea",Dr(e,s(0),s(8),3),e.fillStyle="#ffffff",Dr(e,s(7),s(11),2);const l=s(-11);e.fillStyle="#c8a040",e.fillRect(zt(l[0]-2),zt(l[1]-2),4,4),e.fillStyle=bt.ink,e.fillRect(zt(l[0]-1),zt(l[1]-1),2,2)}function w5(e,t){A({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=bt.foam,Ji(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=bt.water,Ji(n,o,i,3+r*16,10,2)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),s=zt(12*(1-r))+2;n.fillStyle=bt.padL,n.fillRect(o-s,i-1,s*2,3),n.fillRect(o-1,i-s,3,s*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*vr,o=y(.8,2);F(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,y(1.5,3),.5,n%3?bt.water:bt.padL,2,9,!1,.95)}}const gs=new Map;function _5(e){let t=gs.get(e.id);if(!t&&(t={p:[],drop:0,seen:b.T},gs.set(e.id,t),gs.size>40))for(const[n,r]of gs)b.T-r.seen>2&&gs.delete(n);return t.seen=b.T,t}et.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,s){const[l,a]=C(r,o,.55),u=zt(9*(1-s))+2;i.fillStyle=bt.pad;for(let f=-u;f<=u;f+=2){const h=u-Math.abs(f);i.fillRect(l-h,a+f,h*2+1,2)}i.fillStyle="#ffffff",i.fillRect(l-u-3,a,u*2+6,1),i.fillRect(l,a-u-3,1,u*2+6)}});for(let i=0;i<9;i++)F(r,o,.5,t*y(2,4)+y(-.7,.7),n*y(2,4)+y(-.7,.7),y(.6,1.6),.4,i%2?bt.water:bt.padL,2,6,!1,.9)};Fe.rana_Q=(e,t,n,r,o,i)=>{const s=t.z||.45,l=_5(t);l.p.unshift([t.x,t.y]),l.p.length>7&&(l.p.length=7),i-l.drop>.065&&(l.drop=i,b5(t.x,t.y)),gt(!0);const a=Lt();for(let u=1;u<l.p.length;u++)a.globalAlpha=.75*(1-u/l.p.length),a.fillStyle=u<3?bt.padL:bt.pad,Dr(a,C(l.p[u-1][0],l.p[u-1][1],s),C(l.p[u][0],l.p[u][1],s),Math.max(2,7-u));a.globalAlpha=1,gt(!1),S5(e,n,r,i*26);for(const u of M5(t))x5("rq"+t.id+":"+u.id)&&w5(u.x,u.y)};function A5(e,t,n){const r=Array.from({length:5},(i,s)=>({a:s/5*vr+y(-.3,.3),d:n*y(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,s)=>({a:s/12*vr,h:y(26,44),w:Math.random()<.5?4:6}));A({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,s,l){if(!l.fired){l.fired=!0,ot(4),Co({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let h=0;h<34;h++){const c=Math.random()*vr,d=y(1,3.2);F(e+Math.cos(c)*.3,t+Math.sin(c)*.3,.15,Math.cos(c)*d,Math.sin(c)*d,y(2.5,5),y(.5,.8),h%4?bt.foam:bt.water,3,12,!1,.97)}for(let h=0;h<6;h++)F(e+y(-.6,.6),t+y(-.6,.6),.1,y(-.4,.4),y(-.4,.4),y(1,2),.7,bt.mud,4,8,!1)}const[a,u]=C(e,t),f=Tu(n);i.globalAlpha=.35*(1-s),i.fillStyle=bt.waterD,Oi(i,a,u,f*.75,f*.375,2);for(let h=0;h<3;h++){const c=s*1.3-h*.15;c<=0||c>=1||(i.globalAlpha=1-c,i.fillStyle=h===0?bt.foam:bt.water,Ji(i,a,u,f*(.2+c*.95),30,3,h,h===0?0:5))}i.globalAlpha=Math.min(1,(1-s)*2.5);for(const h of r){const c=Tu(h.d)*(.6+s*.4);cm(i,a+Math.cos(h.a)*c,u+Math.sin(h.a)*c*.5+Math.sin(s*10+h.ph)*1.5,2)}s>.08&&wf(i,v5,a,u-4,s<.2?2:3,{g:bt.moss,p:bt.pink,P:bt.pinkL,y:bt.eye})}}),A({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,s){const[l,a]=C(e,t),u=Tu(n)*(.35+s*.25),f=Math.sin(Math.PI*Math.min(1,s*1.2));i.globalAlpha=Math.min(1,(1-s)*2);for(const h of o){const c=l+Math.cos(h.a)*u,d=a+Math.sin(h.a)*u*.5,m=zt(h.h*f),p=Math.cos(h.a)*s*10;m<2||(i.fillStyle=bt.waterD,i.fillRect(zt(c-h.w/2+p*.5),zt(d-m),h.w,m),i.fillStyle=bt.water,i.fillRect(zt(c-h.w/2+p*.5),zt(d-m),h.w-2,m-2),i.fillStyle=bt.foam,i.fillRect(zt(c-h.w/2+p-1),zt(d-m-3),h.w+2,4))}}})}et.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,s=1.7,l=r-t,a=o-n,u=Math.hypot(l,a)||1;A({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,h){const[c,d]=C(t,n);f.globalAlpha=1-h,f.fillStyle=bt.waterD,Ji(f,c,d,10+h*34,18,3,0,3),f.fillStyle=bt.foam,Ji(f,c,d,6+h*22,12,2,.3,4)}});for(let f=0;f<12;f++)F(t,n,.15,-l/u*y(1,2.5)+y(-.8,.8),-a/u*y(1,2.5)+y(-.8,.8),y(1.5,3),.5,f%3?bt.mud:bt.water,3,9,!1);A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,h){const c=Math.min(1,h*(i+.25)/i),d=Math.max(0,c-.45),m=h>.75?(1-h)*4:1;for(let p=d;p<=c;p+=.05){const[g,x]=C(t+l*p,n+a*p,.3+6.8*p*(1-p)),v=(p-d)/Math.max(.01,c-d);f.globalAlpha=m*(.3+.7*v),f.fillStyle=bt.deep,f.fillRect(zt(g)-3,zt(x)-3,6,6),f.fillStyle=v>.7?bt.padL:bt.pad,f.fillRect(zt(g)-2,zt(x)-2,4,4)}}}),A({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,h,c){c.go||(c.go=!0,A5(r,o,s))}})};et.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,s)=>{const l=s/9*vr+y(-.3,.3),a=s===0?0:y(.3,.85);return{x:t+Math.cos(l)*a,y:n+Math.sin(l)*a,r:y(14,22),z:y(.15,.6),up:y(.2,.5),col:[bt.smokeA,bt.smokeB,bt.smokeC][s%3],dl:y(0,.12)}}),o=[0,3,6].map((i,s)=>({p:r[i+1],t0:.15+s*.1,blink:y(.3,.6)}));A({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.2),u=zt(14*(1-s))+3;i.fillStyle="#fff6c0",i.fillRect(l-u,a-2,u*2,4),i.fillRect(l-2,a-u,4,u*2),i.fillStyle=bt.padL,i.fillRect(l-u/2,a-u/2,u,u)}}),A({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,s){const l=s*1.5;for(const a of r){const u=Math.max(0,Math.min(1,(l-a.dl)/1.3));if(u<=0)continue;const[f,h]=C(a.x,a.y,a.z+a.up*u),c=zt(a.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Oi(i,f+2,h+3,c,c*.8,3),i.fillStyle=a.col,Oi(i,f,h,c,c*.8,3),i.fillStyle="#c8d4b0",Oi(i,f-c*.3,h-c*.35,c*.35,c*.25,2)}for(const a of o){const u=l-a.t0;if(u<0||u>.95)continue;const[f,h]=C(a.p.x,a.p.y,a.p.z+a.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const c=Math.abs(u-a.blink)<.06;for(const d of[-1,1]){const m=zt(f+d*6)-3,p=zt(h)-3;if(i.fillStyle=bt.deep,i.fillRect(m-1,p-1,8,c?3:7),c){i.fillStyle=bt.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=bt.eye,i.fillRect(m,p,6,5),i.fillStyle=bt.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const s=Math.random()*vr,l=y(1,2.6);F(t,n,.3,Math.cos(s)*l,Math.sin(s)*l,y(1,2.5),.6,i%2?bt.ink:bt.moss,2,7,!1,.92)}};function T5(e,t,n,r){A({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const s=C(e,t,.35),l=C(n,r,.35),a=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?bt.ink:bt.moss;for(let h=u;h<=a;h+=.03){const c=zt((2+8*Math.sin(Math.PI*h))*(1-u*.6))+(f?0:3),d=s[0]+(l[0]-s[0])*h,m=s[1]+(l[1]-s[1])*h+Math.sin(h*14)*1.5;o.fillRect(zt(d-c/2),zt(m-c/2),c,c)}}}});for(let o=0;o<10;o++){const i=Math.random();F(e+(n-e)*i,t+(r-t)*i,.35,y(-.6,.6),y(-.6,.6),y(.2,1),.5,bt.ink,3,6,!1)}}function bh(e,t,n,r,o,i,s){const l=Math.cos(r),a=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?bt.ink:f===1?"#b8ffd0":"#ffffff";const h=f===0?2:0,c=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*s,p=Math.max(1,zt(c*(1-Math.abs(d/u*2-1))));e.fillRect(zt(t+l*m*o/2-p/2+h),zt(n+a*m*o/2-p/2+h),p,p)}}}function C5(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+y(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));A({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const s=i*.5,[l,a]=C(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.3)continue;const h=Math.min(1,f/.05),c=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,c),bh(o,l+u.ox,a+u.oy,u.a,u.len,zt(6*c)+1,h),bh(o,l+u.ox,a+u.oy,u.a+Math.PI/2,u.len,zt(6*c)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const s=i*.4,[l,a]=C(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.1)continue;const h=zt(16*(1-f/.1))+2;o.fillStyle=bt.padL,o.fillRect(l+u.ox-h,a+u.oy-h,h*2,h*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*vr,i=y(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:y(5,11),drips:[y(-1,1),y(-1,1),y(-1,1)]}});A({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const s of r){const[l,a]=C(e+s.dx,t+s.dy),u=s.r*Math.min(1,i*12);o.fillStyle=bt.inkP,Oi(o,l,a,u,u*.5,2),o.fillStyle=bt.ink,Oi(o,l-1,a-1,u*.6,u*.3,2);for(const f of s.drips)o.fillRect(zt(l+f*u*1.8),zt(a+f*u*.6),3,2);o.fillStyle=bt.moss,o.fillRect(zt(l+u*.4),zt(a-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*vr,s=y(1.5,4.5);F(e,t,.5,Math.cos(i)*s,Math.sin(i)*s,y(1,3),y(.4,.7),o%5?bt.ink:bt.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*vr;F(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,bt.padL,2,0,!0)}ot(8)}et.rana_R=e=>{if(e.type==="blink"){T5(e.x,e.y,e.ex??e.x,e.ey??e.y);return}C5(e.x,e.y)};Oe.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[s,l]=C(t,n,.5),a=Math.min(1,i*4),u=[s-9*r,l-3],f=[s-2*r,l+6],h=[s+13*r,l-11];o.globalAlpha=i<.5?1:(1-i)*2;const c=a<.35?[u[0]+(f[0]-u[0])*a/.35,u[1]+(f[1]-u[1])*a/.35]:f,d=a<.35?c:[f[0]+(h[0]-f[0])*(a-.35)/.65,f[1]+(h[1]-f[1])*(a-.35)/.65];o.fillStyle=bt.moss,Dr(o,u,c,5),a>=.35&&Dr(o,f,d,5),o.fillStyle="#ffffff",Dr(o,u,c,2),a>=.35&&Dr(o,f,d,2)}});for(let o=0;o<5;o++)F(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.35,o%2?bt.water:bt.padL,2,8,!1)};const R5="#7a879c",P5="#363e50",I5="#c9d3e2",Sh="#e8b858",z5="#ffa040",hm="#f2e8d2",qs="#cdbb9a",A0="#a08f72",dm="#6f6250",ts="#33241a",O5="#8a7356",mm="#9a948a",pm="#7a7468",ym="#5e584e",F5="#c4beb2",E5="#ffe2a0",k5="#d89a3a",L5="#fff8e6",U5="#ff5a1a",ge=Math.round,Cu=Math.PI*2;function Qe(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ge(t),ge(n),r,o)}function xa(e,t,n,r,o,i,s){const l=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let a=0;a<=l;a++)e.fillRect(ge(t+(r-t)*a/l-i/2),ge(n+(o-n)*a/l-i/2),i,i)}function wh(e,t,n,r,o){const[i,s]=C(t,n),l=r*B.HW*Math.SQRT2,a=l*.5;e.fillStyle=o;for(let u=-a;u<=a;u+=2){const f=l*Math.sqrt(Math.max(0,1-u*u/(a*a)));e.fillRect(ge(i-f),ge(s+u),ge(f*2),2)}}function gm(e,t){const n=(e-t)*B.HW,r=(e+t)*B.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const xm=e=>{const t=mt(e);return t&&!t.dead&&!ze(t)?t:null},xl=()=>[mm,pm,ym,A0][Math.random()*4|0];function D5(e,t,n,r,o){if(t=ge(t)-6,n=ge(n)-5,Qe(e,t,n,12,10,P5),Qe(e,t+1,n+1,10,8,R5),Qe(e,t+1,n+1,10,2,I5),Qe(e,t+2,n+6,2,2,o),Qe(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Qe(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const X5=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],G5=[E5,k5,L5,U5];function Ru(e,t,n,r,o){t=ge(t),n=ge(n);for(const[i,s,l,a,u]of X5){const f=o>0?i:-i-l;e.fillStyle=G5[u],e.fillRect(t+f*r,n+s*r,l*r,a*r)}}Oe.rino=e=>{A({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.4),i=ge(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let s=0;s<=i;s++){const l=Math.PI*.75-s*.16;Qe(t,r-4+Math.cos(l)*16-1,o+6-Math.sin(l)*18-1,s>i-3?2:3,s>i-3?2:3,s>i-2?"#ffffff":hm)}}});for(let t=0;t<3;t++)F(e.x,e.y,.3,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,xl(),3,10,!1,.95);for(let t=0;t<2;t++)F(e.x+y(-.2,.2),e.y+y(-.2,.2),.1,y(-.4,.4),y(-.4,.4),.5,.5,qs,5,0,!1,.9);ot(1.5)};et.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,l=-i/s,a=o/s,u=o/s,f=i/s,[h,c]=gm(o,i),d=Math.max(4,Math.ceil(s*4)),m=Array.from({length:d+1},(M,S)=>y(-.06,.06)+(S%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:y(.15,.35)}:null),g=Array.from({length:8},(M,S)=>({k:(S+.5)/8,o:y(-.35,.35),r:Array.from({length:4},()=>[y(-10,6),y(-8,2),ge(y(6,12)),ge(y(5,8)),[qs,A0,qs,dm][Math.random()*4|0]])}));let x=0,v=!1;A({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(M,S,w){const _=S*w.dur,T=Math.min(1,_/r),R=Math.floor(T*d);M.globalAlpha=.8*Math.min(1,(w.dur-_)/.6);for(const z of[-.3,.3]){const I=z>0?1:-1;let[O,U]=C(e.x+l*z,e.y+a*z);for(let X=1;X<=R;X++){const N=X/d,Q=z+m[X]*I,[k,E]=C(e.x+o*N+l*Q,e.y+i*N+a*Q);xa(M,O,U+1,k,E+1,2,O5),xa(M,O,U,k,E,2,ts);const L=p[X];if(L&&L.s===I){const[G,$]=C(e.x+o*N+l*(Q+I*L.l)+u*L.l*.5,e.y+i*N+a*(Q+I*L.l)+f*L.l*.5);xa(M,k,E,G,$,1,ts)}O=k,U=E}}}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(M,S,w){const _=S*w.dur,T=Math.min(1,_/r);for(;x<18*T;){x++;const R=Math.random()*T;F(e.x+o*R+y(-.3,.3),e.y+i*R+y(-.3,.3),.1,-u*y(.5,2)+y(-1,1),-f*y(.5,2)+y(-1,1),y(2,4),y(.5,.8),xl(),3,12,!1,.95)}if(_>=r&&!v){v=!0,ot(5);for(let R=0;R<12;R++){const z=Math.atan2(f,u)+y(-.9,.9),I=y(2,4.5);F(t+u*.5,n+f*.5,.2,Math.cos(z)*I,Math.sin(z)*I,y(2,4),y(.5,.8),xl(),3,12,!1,.95)}}for(const R of g){const z=_-R.k*r;if(z<0||z>.9)continue;const I=z/.9,O=1+I*1.2,[U,X]=C(e.x+o*R.k+l*R.o,e.y+i*R.k+a*R.o,.15+I*.5);M.globalAlpha=.6*(1-I);for(const N of R.r)Qe(M,U+N[0]*O,X+N[1]*O,ge(N[2]*O),ge(N[3]*O),N[4])}}}),A({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(M,S,w){const _=xm(e.uid);if(!_)return;const T=S*w.dur;M.globalAlpha=T>r?Math.max(0,1-(T-r)/.08):1;const[R,z]=C(_.x+u*.6,_.y+f*.6,.45);for(let U=0;U<6;U++){const X=7-U;Qe(M,R+h*U*2.5-X/2,z+c*U*2.5-X/2,X,X,U<2?hm:"#ffffff")}const[I,O]=C(_.x,_.y,.5);M.globalAlpha*=.6;for(let U=0;U<5;U++){const X=(U-2)*9,N=24+U*13%3*10;xa(M,I-c*X-h*26,O+h*X-c*26,I-c*X-h*(26+N),O+h*X-c*(26+N),1,"#fff6e0")}}})};et.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const s=i<5;return{a:s?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:s,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,s,l)=>{const a=xm(e.uid);if(!a)return;const u=s*l.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=C(a.x,a.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)F(a.x+Math.cos(d.a)*.4,a.y+Math.sin(d.a)*.4,.45,y(-2,2),y(-2,2),y(1,2.5),.3,M?z5:Sh,2,8,!0,.9)}const p=(1-m)*(1-m)*46,g=h+Math.cos(d.a)*30,x=c+Math.sin(d.a)*13-d.row*7,v=u-d.t0-.18;i.globalAlpha=f,D5(i,g+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,ge((b.T*30+d.a*6)%30),v>=0&&v<.14?"#ffffff":Sh)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),ot(3)};et.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Cu+y(-.08,.08),j:y(.9,1.08),w:ge(y(4,7)),h:ge(y(3,6)),col:[mm,pm,ym][i%3]}));A({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const s=i*1.4,l=Math.min(1,s/.45),a=t*(1-(1-l)*(1-l)),u=Math.min(1,(1.4-s)/.5);o.globalAlpha=.45*u,wh(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,wh(o,e.x,e.y,.4,"#24180e");for(const[f,h,c]of[[.45,ts,2],[.7,ts,2],[.95,qs,3]]){o.globalAlpha=(1-l)*.8;for(let d=0;d<36;d++){const m=d/36*Cu,[p,g]=C(e.x+Math.cos(m)*a*f,e.y+Math.sin(m)*a*f);Qe(o,p-c/2,g-1,c,2,h)}}for(const f of r){const[h,c]=C(e.x+Math.cos(f.a)*a*f.j,e.y+Math.sin(f.a)*a*f.j),d=(1-l)*12*Math.sin(l*Math.PI+.3);o.globalAlpha=.35*u,Qe(o,h-f.w/2-1,c,f.w+2,2,"#000000"),o.globalAlpha=u,Qe(o,h-f.w/2,c-f.h-d,f.w,f.h,f.col),Qe(o,h-f.w/2,c-f.h-d,f.w,1,F5)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[s,l]=C(e.x,e.y,.05),a=ge(30+110*i);o.globalAlpha=1-i,Qe(o,s-a,l-1,a*2,2,"#fff2d0"),Qe(o,s-a*.6,l-3,ge(a*1.2),1,"#ffd890");for(const u of[-1,1])Qe(o,s+u*(a+4)-1,l-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=y(0,Cu),s=t*y(1.5,2.5);F(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*s,Math.sin(i)*s,y(3,6),y(.5,.9),xl(),Math.random()<.3?4:3,14,!1,.96)}ot(8)};et.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,s=1,l=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),a=(u,f)=>{const h=Math.min(1,Math.max(0,(f-u.del)/.6)),c=.4+(o-.4)*(1-(1-h)*(1-h));return[e.x+Math.cos(u.a)*c,e.y+Math.sin(u.a)*c,h,c]};A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const h=f*1.7,c=Math.min(1,(1.7-h)/.6);u.globalAlpha=.2*c,u.fillStyle="#4a3420",u.beginPath();let[d,m]=C(e.x,e.y);u.moveTo(ge(d),ge(m));for(let p=0;p<=12;p++){const g=r-i+2*i*p/12;[d,m]=C(e.x+Math.cos(g)*o,e.y+Math.sin(g)*o),u.lineTo(ge(d),ge(m))}u.closePath(),u.fill(),u.globalAlpha=.7*c;for(const p of l){const[,,,g]=a(p,h),x=p.a+Math.PI/2;for(let v=.6;v<g;v+=.55){const M=Math.round(v/.55)%2?.12:-.12,[S,w]=C(e.x+Math.cos(p.a)*v+Math.cos(x)*M,e.y+Math.sin(p.a)*v+Math.sin(x)*M);Qe(u,S-4,w-1,3,3,ts),Qe(u,S+1,w-1,3,3,ts)}}}}),A({type:"custom",layer:"top",add:!0,dur:s,x:e.x,y:e.y,draw(u,f){const h=f*s;for(const c of l){const[d,m,p]=a(c,h);if(h<c.del)continue;const g=.85*Math.min(1,(h-c.del)/.08)*Math.max(0,1-Math.max(0,h-c.del-.45)/.4);if(g<=0)continue;const[x,v]=C(d,m,.55),[M]=gm(Math.cos(c.a),Math.sin(c.a)),S=M>=0?1:-1,w=p<.5?3:4,[_,T]=C(e.x,e.y,.55),R=x-_,z=v-T;u.globalAlpha=g*.18,Ru(u,x-R*.35,v-z*.35,w,S),u.globalAlpha=g*.35,Ru(u,x-R*.17,v-z*.17,w,S),u.globalAlpha=g,Ru(u,x,v,w,S)}}});for(let u=0;u<40;u++){const f=r+y(-i,i),h=y(.4,o*.8),c=y(2,5);F(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.1,Math.cos(f)*c,Math.sin(f)*c,y(.5,1.5),y(.5,.9),[qs,A0,dm][u%3],4,3,!1,.9)}ot(10)};const H=Math.round,cn=Math.PI*2,_f=e=>e*B.HW*Math.SQRT2,W={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},zl=e=>!!(b.game&&b.game.player&&e.uid===b.game.player.id);function ks(e,t,n,r){r=Math.max(1,H(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(H(t[0]+(n[0]-t[0])*l/i-s),H(t[1]+(n[1]-t[1])*l/i-s),r,r)}function In(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const l=(s+i/2)/o,a=r*Math.sqrt(Math.max(0,1-l*l));a>=.5&&e.fillRect(H(t-a),H(n+s),Math.max(1,H(a*2)),i)}}function Mm(e,t,n,r=99){let o=null,i=r;for(const s of b.game?b.game.units:[]){if(s.dead||s.heroKey!==n)continue;const l=Math.hypot(s.x-e,s.y-t);l<i&&(i=l,o=s)}return o}function B5(e,t,n,r=1.6){let o=null,i=r;for(const s of b.game?b.game.units:[]){if(s.dead||s.team===n||s.kind!=="hero")continue;const l=Math.hypot(s.x-e,s.y-t);l<i&&(i=l,o=s)}return o}const Ol=e=>C(e.x,e.y,.5);function Fl(e,t,n,r,o,i){const s=n[0]-t[0],l=n[1]-t[1],a=Math.hypot(s,l)||1,u=-l/a,f=s/a,h=Math.max(2,Math.ceil(a/3)),c=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+s*d+u*p,t[1]+l*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?W.tongueD:d===1?W.tongue:W.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=h;p++){const g=p/h,x=c(g),v=d===2?m:Math.max(2,H(m*(1-g*.3)));e.fillRect(H(x[0]-v/2),H(x[1]-v/2-(d===2?1:0)),v,v)}}for(let d=22;d<a-14;d+=22){const m=c(d/a),p=H(m[0]),g=H(m[1]);e.fillStyle=W.ink,e.fillRect(p-2,g-5,5,10),e.fillStyle=W.iron,e.fillRect(p-1,g-4,3,8),e.fillStyle=W.ironL,e.fillRect(p-1,g-4,1,3)}}const Pu=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function T0(e,t,n,r,o=1.5){const i=Math.cos(r),s=Math.sin(r),l=d=>[t+(i*d[0]-s*d[1])*o,n+(s*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?W.ink:d===1?W.iron:W.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<Pu.length;p++)ks(e,l(Pu[p-1]),l(Pu[p]),m)}const a=l([-1.5,5.5]),u=l([-4,3]);e.fillStyle=W.ink,ks(e,a,u,4),e.fillStyle=W.ironL,ks(e,a,u,2),e.fillStyle=W.rust;const f=l([7.5,5]),h=l([-3,0]);e.fillRect(H(f[0]),H(f[1]),2,2),e.fillRect(H(h[0]),H(h[1])-1,3,2);const c=l([-12.5,0]);e.fillStyle=W.ink,e.fillRect(H(c[0])-5,H(c[1])-5,10,10),e.fillStyle=W.rust,e.fillRect(H(c[0])-4,H(c[1])-4,8,8),e.fillStyle=W.ink,e.fillRect(H(c[0])-2,H(c[1])-2,4,4)}const vi=[];function N5(e){let t=null,n=1.3;for(const r of vi){if(r.done||b.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}function $5(e,t,n){A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=mt(e);if(!i)return;const s=Ol(i),l=C(t,n,.45),a=1-o*o,u=[s[0]+(l[0]-s[0])*a,s[1]+(l[1]-s[1])*a];a>.06&&Fl(r,s,u,b.T,4*a,3*a),T0(r,u[0],u[1],Math.atan2(u[1]-s[1],u[0]-s[0]),1.5-o*.4)}})}function H5(e,t){A({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=W.slimeL;for(let s=0;s<10;s++){const l=s/10*cn+r;n.fillRect(H(o+Math.cos(l)*(8+r*26))-1,H(i+Math.sin(l)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)F(e,t,.5,y(-1.2,1.2),y(-1.2,1.2),y(1,2.4),.45,n%2?W.slime:W.tongueL,3,9,!1)}function W5(e){let t=null;for(const h of vi)!h.pulled&&h.team===e.team&&b.T-h.t<2.2&&(!t||h.t>t.t)&&(t=h);t&&(t.pulled=!0,t.done=!0);const n=t?mt(t.uid):Mm(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,s=(e.ey??e.y)-e.y,l=Math.hypot(i,s)||1,a=-s/l*.17,u=i/l*.17,f=[];A({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(h,c,d){const m=mt(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const g=1-(d.t-p[2])/1.1;if(!(g<=0)){h.globalAlpha=g*.9;for(const x of[-1,1]){const[v,M]=C(p[0]+a*x,p[1]+u*x);h.fillStyle=W.mud,h.fillRect(H(v)-2,H(M)-1,5,3),h.fillStyle=W.slime,h.fillRect(H(v)-1,H(M)-2,2,1)}}}}}),A({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(h,c,d){const m=mt(o),p=r?mt(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){H5(m.x,m.y),d.t=d.dur+1;return}const x=Ol(p),v=C(m.x,m.y,.5);Fl(h,x,v,b.T,1.2,2),T0(h,v[0],v[1],Math.atan2(v[1]-x[1],v[0]-x[0])+Math.PI,1.3)}}),ot(zl({uid:r})?5:2)}et.sapo_Q=e=>{if(e.type==="hook_pull"){W5(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let s=vi.length-1;s>=0;s--)b.T-vi[s].t>3&&vi.splice(s,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:b.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};vi.push(r),A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(s,l,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&b.T-r.lt>.12&&(r.done=!0,r.pulled||$5(r.uid,r.lx,r.ly),a.t=a.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let s=0;s<10;s++)F(o,i,.5,t*y(1.5,3.5)+y(-.8,.8),n*y(1.5,3.5)+y(-.8,.8),y(.8,2),.45,s%3?W.slime:W.tongueL,2+s%2,8,!1);A({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(s,l){const[a,u]=C(o,i,.5),[f,h]=C(o+t,i+n,.5),c=f-a,d=h-u,m=Math.hypot(c,d)||1;s.globalAlpha=1-l,s.fillStyle=W.fat;for(let p=-1;p<=1;p++)ks(s,[a-d/m*p*7,u+c/m*p*7],[a+c*(.3+l*.5)-d/m*p*7,u+d*(.3+l*.5)+c/m*p*7],2)}})};Fe.sapo_Q=(e,t,n,r,o,i)=>{const s=N5(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=b.T);const l=s?mt(s.uid):t.src||Mm(t.x,t.y,"sapo",11);l&&!l.dead&&Fl(e,Ol(l),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),T0(e,n,r,o),Math.random()<.3&&F(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?W.slime:W.tongueL,2,6,!1)};et.sapo_Q_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,s]=C(t,n,.5);for(let a=0;a<10;a++){const u=a/10*cn+.2,f=(a%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=a%2?W.fat:W.meatL,ks(r,[i+Math.cos(u)*5,s+Math.sin(u)*4],[i+Math.cos(u)*f,s+Math.sin(u)*f*.7],a%2?2:4)}r.fillStyle="#ffffff";const l=H(10*(1-o))+2;r.fillRect(i-l/2,s-l/2,l,l)}});for(let r=0;r<14;r++){const o=Math.random()*cn,i=y(1,3);F(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3.5),y(.5,.8),[W.meat,W.meatL,W.fat,W.slime][r%4],r%3?3:4,11,!1,.95)}};const Af=new Map;function vm(e){const t={ended:!1,endT:0};return Af.set(e.uid+"_"+e.key,t),t}function bm(e){const t=Af.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=b.T),Af.delete(e.uid+"_"+e.key)}function bi(e,t,n){const r=mt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=b.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(b.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function V5(e){const t=vm(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,s=a=>{const u=mt(n);return u?[u.x,u.y]:[a.x,a.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(a,u,f){const h=bi(t,n,f);if(h<=0)return;const[c,d]=s(f),[m,p]=C(c,d),g=_f(o),x=b.T;a.globalAlpha=.22*h,a.fillStyle=W.gasD,In(a,m,p,g*.95,g*.475,3);for(let v=0;v<6;v++){const M=v/6*cn+x*.25,S=g*(.4+.35*nt(v+i));a.globalAlpha=.3*h,a.fillStyle=v%2?W.gas:W.gasD,In(a,m+Math.cos(M)*S,p+Math.sin(M)*S*.5,18+4*Math.sin(x*2+v),8,2)}for(let v=0;v<44;v++){const M=v/44*cn-x*.4,S=g*(.95+.05*Math.sin(M*5+x*3));a.globalAlpha=.85*h,a.fillStyle=v%3?W.gas:W.gasL,a.fillRect(H(m+Math.cos(M)*S)-1,H(p+Math.sin(M)*S*.5)-1,3,3)}for(let v=0;v<5;v++){const M=x*1.3+v*.2,S=Math.floor(M),w=M-S,_=nt(S*13+v+i)*cn,T=g*(.15+.75*nt(S*7+v*3+i)),R=m+Math.cos(_)*T,z=p+Math.sin(_)*T*.5;a.globalAlpha=h,a.fillStyle=w>.85?W.gasL:W.gas;const I=w>.85?4+(w-.85)*60:2+w*6;for(let O=0;O<8;O++){const U=O/8*cn;a.fillRect(H(R+Math.cos(U)*I)-1,H(z+Math.sin(U)*I*.6)-1,2,2)}}}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(a,u,f){const h=bi(t,n,f);if(h<=0)return;const[c,d]=s(f),[m,p]=C(c,d),g=_f(o),x=b.T;for(let S=0;S<10;S++){const w=nt(S*7.3+i),_=(x*.7+w)%1,T=S/10*cn+w*2,R=g*(.15+.7*nt(S*3.1+i)),z=m+Math.cos(T)*R,I=p+Math.sin(T)*R*.5;a.globalAlpha=h*Math.sin(_*Math.PI)*.9,a.fillStyle=S%2?W.gasL:W.gas;for(let O=0;O<7;O++)a.fillRect(H(z+Math.sin(O*.9+x*6+S)*4)-1,H(I-8-_*46-O*5),3,4)}const[v,M]=C(c,d,.9);for(let S=0;S<5;S++){const w=S*1.7+i,_=v+Math.sin(x*(3.1+S*.4)+w)*(20+S*7),T=M-S*4+Math.sin(x*(6.2+S*.3)+w*2)*10;a.globalAlpha=h,a.fillStyle=W.fly,a.fillRect(H(_),H(T),3,2),a.fillStyle="#eaf4ff";const R=((x*36|0)+S)%2;a.fillRect(H(_)-1,H(T)-1-R,2,1),a.fillRect(H(_)+2,H(T)-1-R,2,1)}}});const l={nl:0};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(a,u,f){const h=bi(t,n,f);if(h<=0)return;const[c,d]=s(f),m=Math.min(1,f.t/.5);Ke(c,d);const p=vt.x,g=vt.y;Ah!==a&&(Ah=a,Ch=[{u0:0,fill:Pt(a,W.gasD,4),a:.45},{u0:.7,fill:Pt(a,W.gas,5),a:.45},{u0:.92,fill:Pt(a,W.gasL,7),a:.5}]),qr(a,p,g,Pn(o),Pn(o*(1+.15*m)),ir(Tf*m),!1,Ch,_h,h),Ph(a,c,d,o,m,h,!1,i),Kr(l,c,d,o*.9,12107840,.35*h)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(a,u,f){const h=bi(t,n,f);if(h<=0)return;const[c,d]=s(f),m=Math.min(1,f.t/.5);Ke(c,d);const p=vt.x,g=vt.y;Th!==a&&(Th=a,Rh=[{u0:0,fill:Pt(a,W.gas,2),a:.4},{u0:.7,fill:Pt(a,W.gas,3),a:.45},{u0:.92,fill:Pt(a,W.gasL,6),a:.5}]),qr(a,p,g,Pn(o),Pn(o*(1+.15*m)),ir(Tf*m),!0,Rh,_h,h),Ph(a,c,d,o,m,h,!0,i)}})}const Tf=1.6,_h=[1,.75,.5,.3,.14];let Ah=null,Th=null,Ch=[],Rh=[];function Ph(e,t,n,r,o,i,s,l){const a=b.T;for(let u=0;u<12;u++){const f=u/12*cn+a*.3+nt(u+l)*.4;for(let h=0;h<10;h++){const c=(h/10+a*.55+nt(u*3+l))%1;if(c>o)continue;const d=f+Math.sin(a*3+c*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(Sr(m,p,0)>0!==s)continue;const g=r*(1+.15*c);Ke(t+m*g,n+p*g,c*Tf);const x=c>.6?2:c>.3?3:4;if(e.globalAlpha=i*(1-c)*(s?.85:.65),e.fillStyle=u+h&1?W.gas:W.gasL,e.fillRect(H(vt.x)-(x>>1),H(vt.y)-(x>>1),x,x+1),c>.82){const v=(c-.82)/.18;for(let M=0;M<4;M++){const S=M*1.4+v*4;e.fillRect(H(vt.x+Math.cos(S)*(2+M)),H(vt.y-3-M*2+Math.sin(S)*2),2,2)}}}}}function Cf(e,t,n,r){A({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,s){const[l,a]=C(e,t),u=_f(n)*(.25+s*.8);i.globalAlpha=(1-s)*.9;for(let f=0;f<26;f++){const h=f/26*cn,c=f%2?4:3;i.fillStyle=f%4?W.gas:W.gasL,i.fillRect(H(l+Math.cos(h)*u)-2,H(a+Math.sin(h)*u*.5)-1,c,3)}r&&(i.fillStyle=W.gasD,In(i,l,a-10-s*20,22*(1-s*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const s=Math.random()*cn,l=y(.5,r?2.4:1.4);F(e,t,.4,Math.cos(s)*l,Math.sin(s)*l,y(.4,1.4),y(.6,1),i%2?W.gas:W.gasL,r?5:4,-.6,!1,.9)}}et.sapo_W=e=>{if(e.type==="channel"){V5(e);return}const t=mt(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Cf(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(bm(e),Cf(n,r,1.4,e.kind==="done"))};et.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const s=mt(t);return s&&!s.dead?s:null};A({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,s,l){const a=o();if(!a)return;const u=(a.dir||0)*Math.PI/8,[f,h]=C(a.x+Math.cos(u)*.22,a.y+Math.sin(u)*.22,.32),c=H(15*Math.sin(Math.min(1,s*1.4)*Math.PI)+2);i.fillStyle=W.bellyD,In(i,f,h+1,c+2,c*.8+2,2),i.fillStyle=W.belly,In(i,f,h,c,c*.8,2),i.fillStyle="#ffffff",i.fillRect(H(f-c*.4),H(h-c*.5),3,2)}}),A({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,s,l){const a=o();if(!a)return;const[u,f]=C(a.x,a.y);i.globalAlpha=1-s;for(let h=0;h<2;h++){const c=14+(s*1.2-h*.2)*52;if(!(c<14)){i.fillStyle=h?W.slime:W.belly;for(let d=0;d<22;d++){const m=d/22*cn;i.fillRect(H(u+Math.cos(m)*c)-2,H(f+Math.sin(m)*c*.45)-1,4,3)}}}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,s,l){const a=o();if(!a||l.t>.2&&!(a.shield>0)||s>.97){if(!l.popped){l.popped=!0;const m=a?a.x:l.x,p=a?a.y:l.y;for(let g=0;g<16;g++){const x=g/16*cn;F(m,p,.5,Math.cos(x)*y(1,2.6),Math.sin(x)*y(1,2.6),y(1,2.5),.5,g%2?W.slime:W.slimeL,3,9,!1)}}l.t=l.dur+1;return}const[f,h]=C(a.x,a.y,.45),c=b.T,d=s>.85?(1-s)/.15:Math.min(1,l.t/.15);i.globalAlpha=.35*d,i.fillStyle=W.belly,In(i,f,h+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*cn,g=Math.sin(p*3+c*6+r)*2.5+Math.sin(p*5-c*4)*1.5,x=f+Math.cos(p)*(30+g),v=h+Math.sin(p)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?W.slimeL:W.slime,i.fillRect(H(x)-1,H(v)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*cn+c*.6,g=f+Math.cos(p)*31,x=h+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=W.skinD,i.fillRect(H(g)-2,H(x)-2,5,5),i.fillStyle=W.wart,i.fillRect(H(g)-1,H(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(H(f-18),H(h-26),4,2),i.fillRect(H(f-21),H(h-23),2,4),Math.random()<.12&&F(a.x+y(-.25,.25),a.y+y(-.25,.25),.15,0,0,-.2,.5,W.slime,2,4,!1)}})};const q5=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function Y5(e,t,n,r,o){e.globalAlpha=r;for(let l=0;l<36;l+=2){const a=56*Math.sqrt(1-Math.pow(l/36,2));e.fillStyle=l<4?W.skinD:l<12?W.skinL:W.skin,e.fillRect(H(t-a),H(n-l-2),H(a*2),2)}e.fillStyle=W.skinD;for(let l=0;l<7;l++)e.fillRect(H(t-36+nt(l)*72),H(n-14-nt(l+9)*16),4,3);for(const l of[-1,1]){const a=t+l*28,u=n-36+2;e.fillStyle=W.skin,In(e,a,u,12,10,2),e.fillStyle=W.eye,In(e,a,u-1,8,7,2),e.fillStyle=W.ink,e.fillRect(H(a-5+Math.sin(o*2)*1.5),H(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(H(a-4),H(u-6),2,2)}for(let l=0;l<9;l++){const a=t-40+l*10;e.fillStyle=W.ink,e.fillRect(H(a)-1,H(n)-1,7,8),e.fillStyle=W.teeth,e.fillRect(H(a),H(n),5,6-l%2*2)}}function K5(e){const t=vm(e),n=e.uid,r=(e.dur||3)+.5,o=mt(n),i=e.team||o&&o.team,s=B5(e.x,e.y,i,1.6),l=s?s.id:0,a=u=>{const f=l?mt(l):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=bi(t,n,h);if(c<=0)return;const[d,m]=a(h),[p,g]=C(d,m),x=Math.min(1,h.t/.25);u.globalAlpha=c,u.fillStyle=W.skinD,In(u,p,g+2,58*x,27*x,2),u.fillStyle=W.mouth,In(u,p,g,50*x,22*x,2),u.fillStyle=W.mouthM,In(u,p,g+3,38*x,15*x,2),u.fillStyle=W.tongue,In(u,p,g+6,24*x,8*x,2),u.fillStyle=W.tongueL,u.fillRect(H(p-10*x),H(g+3),H(8*x),2)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=bi(t,n,h);if(c<=0)return;const[d,m]=a(h),[p,g]=C(d,m),x=b.T,v=Math.min(1,h.t/.25),M=t.ended?0:q5(h.t),S=g-4-v*(22+M*70);for(let _=0;_<2;_++){const[,T]=C(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),z=8;for(let I=0;I<=14;I++){const O=.12*Math.PI+I/14*.76*Math.PI,U=p+Math.cos(O)*R,X=T+Math.sin(O)*z;u.globalAlpha=c,u.fillStyle=W.tongueD,u.fillRect(H(U)-3,H(X)-3,6,6),u.fillStyle=W.tongue,u.fillRect(H(U)-2,H(X)-2,4,4)}}const w=mt(n);if(w&&!w.dead){const _=Ol(w),T=C(d,m,.45);if(Math.hypot(T[0]-_[0],T[1]-_[1])>18){u.globalAlpha=c,Fl(u,_,T,x,1,2);for(let R=0;R<5;R++){const z=(x*1.6+R/5)%1,I=T[0]+(_[0]-T[0])*z,O=T[1]+(_[1]-T[1])*z-3;u.fillStyle=W.meat,u.fillRect(H(I)-3,H(O)-3,6,6),u.fillStyle=W.meatL,u.fillRect(H(I)-2,H(O)-3,3,3)}}}Y5(u,p,S,c*v,x),u.globalAlpha=c*v;for(let _=0;_<=26;_++){const T=_/26*Math.PI,R=p+Math.cos(T)*54,z=g+Math.sin(T)*25;u.fillStyle=W.skinD,u.fillRect(H(R)-4,H(z)-3,8,8),u.fillStyle=W.skin,u.fillRect(H(R)-3,H(z)-3,6,5),u.fillStyle=W.skinL,u.fillRect(H(R)-3,H(z)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=W.ink,u.fillRect(H(R)-3,H(z)-10,6,8),u.fillStyle=W.teeth,u.fillRect(H(R)-2,H(z)-9,4,6))}Math.random()<.2&&F(d+y(-.4,.4),m+y(-.2,.2),.9,0,0,-.5,.5,W.slimeL,2,6,!1)}}),ot(zl(e)?6:2)}function j5(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*cn,i=y(.8,2.2);F(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3),.55,[W.meat,W.meatL,W.fat,W.slimeL][r%4],3,10,!1,.95)}ot(zl(n)?2.5:.6)}function Q5(e,t,n){A({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,s]=C(e,t),l=o<.3?1:1-(o-.3)/.7;r.globalAlpha=l,r.fillStyle=W.skinD,In(r,i,s-18*l,58*l,30*l,2),r.fillStyle=W.skin,In(r,i,s-22*l,52*l,25*l,2),r.fillStyle=W.skinL,r.fillRect(H(i-30*l),H(s-40*l),H(60*l),3),r.fillStyle=W.ink,r.fillRect(H(i-40*l),H(s-10*l),H(80*l),3)}}),Cf(e,t,1.8,!0),ot(zl(n)?7:2)}et.sapo_R=e=>{if(e.type==="channel"){K5(e);return}if(e.type==="channel_tick"){j5(e.x,e.y,e);return}if(e.type==="channel_end")if(bm(e),e.kind==="done")Q5(e.x,e.y,e);else for(let t=0;t<10;t++)F(e.x,e.y,.5,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.6,t%2?W.gas:W.slime,4,2,!1)};const Iu=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Oe.sapo=e=>{const t=e.x,n=e.y,r=e.uid?mt(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.5),u=s<.25?(1-s/.25)*30:0,f=3;i.globalAlpha=s<.6?1:(1-s)/.4;const h=Iu[0].length,c=H(l-(o>0?h*f-6:6)),d=H(a-14-u),m={h:"#6a3a1e",B:W.ink,b:"#a8acb4",r:W.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let g=0;g<Iu.length;g++)for(let x=0;x<h;x++)Iu[g][x]===p&&i.fillRect(c+(o>0?x:h-1-x)*f,d+g*f,f,f)}if(s>.25){const p=(s-.25)/.75;i.fillStyle=W.fat,i.fillRect(H(l-10-p*16),H(a+6),H(8*(1-p))+1,2),i.fillRect(H(l+4+p*16),H(a+6),H(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)F(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,[W.meat,W.meatL,W.slime][i%3],3,10,!1)};const le=Math.round,kt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Ml(e,t,n,r,o){e.fillStyle=o,e.fillRect(le(t-r/2),le(n-r/2),r,r)}const Ys=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Z5(e,t,n,r,o,i){const s=t.length,l=t[0].length,a=le(n-l*o/2),u=le(r-s*o/2);for(let f=0;f<s;f++)for(let h=0;h<l;h++){const c=i[t[f][h]];c&&(e.fillStyle=c,e.fillRect(a+h*o,u+f*o,o,o))}}function Sm(e,t,n,r,o){const i=le(t),s=le(n);o&&(e.fillStyle=o,e.fillRect(i-5,s-3,10,2),e.fillRect(i-7,s-1,14,2),e.fillRect(i-5,s+1,10,2)),e.fillStyle=r,e.fillRect(i-5,s-5,10,2),e.fillRect(i-5,s+3,10,2),e.fillRect(i-7,s-3,2,2),e.fillRect(i+5,s-3,2,2),e.fillRect(i-9,s-1,2,2),e.fillRect(i+7,s-1,2,2),e.fillRect(i-7,s+1,2,2),e.fillRect(i+5,s+1,2,2)}function zu(e,t,n,r,o,i,s,l){const a=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=l;for(let u=0;u<=a;u++){const f=u/a;e.fillRect(le(t+(r-t)*f-s/2),le(n+(o-n)*f-s/2),s,s)}}const J5=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function wm(e,t,n,r,o,i,s,l){e.fillStyle=kt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=kt.teal,e.fillRect(t,n-o,r,le(o*.62)),e.fillStyle=kt.aqua,e.fillRect(t,n-o,r,le(o*.3)),e.fillStyle=kt.foam,e.fillRect(t+i,n-o-2+s,r,3),l&&(e.fillStyle=kt.white,e.fillRect(t+i*2,n-o-4+s,3,2))}et.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=mt(e.uid);let i=1,s=0;if(o){const M=t-o.x,S=n-o.y,w=Math.hypot(M,S);w>.05&&(i=M/w,s=S/w)}const l=-s,a=i,u=l+a>=0?1:-1,f=(l-a)*B.HW,h=.13,c=Math.max(6,Math.ceil(Math.abs(f)*h)+2),d=(i-s)*B.HW,m=(i+s)*B.HH,p=Math.hypot(d,m)||1,g=le(d/p*3),x=le(m/p*2);A({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,S){const w=Math.min(1,S*3)*(S>.6?(1-S)/.4:1);it(t,n,r*.95,null,`rgba(18,80,110,${.32*w})`);for(let _=0;_<2;_++){const T=(S*2.4+_*.5)%1,R=r*.9*T;M.globalAlpha=w*(1-T);for(let z=0;z<22;z++){const I=z/22*6.283,[O,U]=C(t+Math.cos(I)*R,n+Math.sin(I)*R);Ml(M,O,U,2,kt.sea)}}M.globalAlpha=1}});const v={n:0,sp:!1};return A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,S){const w=-r*.95+S*r*1.9,_=Math.sin(Math.min(1,S*1.08)*Math.PI),T=Math.sqrt(Math.max(0,r*r-w*w))+.25,R=Math.floor(T*2/h);for(let z=0;z<=R;z++){const I=u>0?-T+z*h:T-z*h,O=1-Math.abs(I)/T,U=.85+.15*Math.sin(I*9+S*24),X=le((8+30*Math.sqrt(Math.max(0,O)))*_*U/2)*2;if(X<4)continue;const[N,Q]=C(t+i*w+l*I,n+s*w+a*I);wm(M,le(N-c/2),le(Q),c,X,g,x,(I*7.7+S*30|0)%3===0)}if(v.n<32&&_>.3)for(let z=0;z<2;z++){v.n++;const I=y(-T,T);F(t+i*w+l*I,n+s*w+a*I,.35*_,i*y(.8,2),s*y(.8,2),y(1,2.5),.45,Math.random()<.5?kt.foam:kt.sea,2,7,!1)}if(!v.sp&&S>.82){v.sp=!0;for(let z=0;z<14;z++){const I=y(-r*.6,r*.6);F(t+i*r*.8+l*I,n+s*r*.8+a*I,.2,i*y(1,3)+y(-.5,.5),s*y(1,3)+y(-.5,.5),y(2,4),.55,kt.aqua,3,9,!1)}ot(3)}}}),!0};function tM(e,t){A({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.1),s=Ys(r,.1,.6);for(let l=0;l<10;l++){const a=l*.628+r*11,u=r*58+l*4,f=18*(1-r*.5),h=Math.sin(a)>0;n.globalAlpha=s*(h?1:.45),Ml(n,o+Math.cos(a)*f,i-u+Math.sin(a)*f*.45,h?3:2,l%2?kt.sea:kt.foam)}if(r>.45){n.globalAlpha=Ys((r-.45)/.55,.2,.6);const l=le(i-72-(r-.45)*20),a=le(o);n.fillStyle=kt.lamp,n.fillRect(a-5,l-1,10,3),n.fillRect(a-1,l-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)F(e+y(-.3,.3),t+y(-.3,.3),.2,0,0,y(1.2,2.2),.8,Math.random()<.5?kt.sea:kt.foam,2,0,!0);return!0}et.tortuga_W=e=>{if(e.type==="heal")return tM(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(l,a){const u=Ys(a,.12,.55);for(let f=0;f<3;f++)for(let h=0;h<26;h++){const c=h/26,d=r*(1-c)*.98,m=f*2.094+c*5+a*9,[p,g]=C(t+Math.cos(m)*d,n+Math.sin(m)*d);l.globalAlpha=u*(.35+.65*c),Ml(l,p,g,c>.6?3:2,h%3===0?kt.foam:h%3===1?kt.sea:kt.aqua)}l.globalAlpha=1}});const i=[];for(let l=0;l<9;l++)i.push({a0:l/9*6.283+y(-.2,.2),d:l*.03+y(0,.05)});const s={"#":kt.shell,a:kt.sand};return A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(l,a){for(const u of i){const f=Math.min(1,Math.max(0,(a-u.d)/.75));if(f<=0||f>=1)continue;const h=f*f*(3-2*f),c=r*.92*(1-h),d=u.a0+h*4.2+a*2,[m,p]=C(t+Math.cos(d)*c,n+Math.sin(d)*c,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);l.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),Z5(l,J5,m,p,2,s)}l.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(l,a){const u=mt(o),f=u?u.x:t,h=u?u.y:n,[c,d]=C(f,h,.95),m=le(c),p=le(d),g=Ys(a,.08,.5),x=le(6+16*Math.sin(Math.min(1,a*2)*Math.PI/2));l.globalAlpha=g*.3,l.fillStyle=kt.lamp,l.fillRect(m-8,p-8,16,16),l.globalAlpha=g,l.fillRect(m-x,p-1,x*2,2),l.fillRect(m-1,p-x,2,x*2),l.fillStyle=kt.lampW,l.fillRect(m-3,p-3,6,6);for(let v=0;v<8;v++){const M=v*.785+a*5,S=10+a*30;Ml(l,m+Math.cos(M)*S,p+Math.sin(M)*S*.5+a*40,2,kt.lamp)}l.globalAlpha=1}}),!0};const _m=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)_m.push({th:r/t*6.283+n*.31,ph:e,row:n})});et.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};A({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(s,l){const a=mt(t);if(!a||a.dead)return;const u=l*n,[f,h]=C(a.x,a.y),c=Math.min(1,u/.18),d=1+(1-c)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,g=18*d,x=62*d,v=u*1.6%2.2-.3,M=_m.map(S=>{const w=S.th+u*.5,_=Math.cos(S.ph);return{d:S,th:w,x:f+Math.cos(w)*p*_+Math.cos(w)*m*30,y:h+Math.sin(w)*g*_-Math.sin(S.ph)*x-4-m*10+m*m*30,z:Math.sin(w)*_}}).sort((S,w)=>S.z-w.z);for(const S of M){const w=u-(3-S.d.row)*.05;if(w<0)continue;S.y-=(1-Math.min(1,w/.1))*14;const _=S.z>-.15,T=Math.abs(S.d.ph-v)<.22;s.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,w*10),Sm(s,S.x,S.y,w<.06||T?kt.white:kt.foam,T?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(s.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let S=0;S<16;S++){const w=y(0,6.283),_=y(1.5,3.5);F(a.x,a.y,y(.2,.9),Math.cos(w)*_,Math.sin(w)*_,y(1,3),.5,Math.random()<.5?kt.foam:kt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let s=0;s<10;s++){const l=s/10*6.283;F(r+Math.cos(l)*.5,o+Math.sin(l)*.5,.05,-Math.cos(l)*.8,-Math.sin(l)*.8,y(1.5,2.5),.4,Math.random()<.5?kt.sand:kt.shell,2,3,!1)}return!0};et.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}A({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const h=Ys(f,.06,.55),c=1+.35*Math.max(0,1-f/.1);it(t,n,r*.92*c,null,`rgba(16,70,95,${.35*h})`);const d=(m,p)=>C(t+m*c,n+p*c);for(let m=0;m<2;m++){u.globalAlpha=h*(m?.75:.85);const p=m?kt.lamp:kt.shellD,g=m?2:3,x=m?-1:0,v=m?-2:0;for(const[M,S]of i)for(let w=0;w<6;w++){const _=w*Math.PI/3,T=(w+1)*Math.PI/3,[R,z]=d(M+Math.cos(_)*o,S+Math.sin(_)*o),[I,O]=d(M+Math.cos(T)*o,S+Math.sin(T)*o);zu(u,R+x,z+v,I+x,O+v,5,g,p)}for(let M=0;M<22;M++){const S=M/22*6.283,[w,_]=d(Math.cos(S)*r*.66,Math.sin(S)*r*.66),[T,R]=d(Math.cos(S)*r*.86,Math.sin(S)*r*.86);zu(u,w+x,_+v,T+x,R+v,5,g,p);const z=(M+1)/22*6.283,[I,O]=d(Math.cos(z)*r*.86,Math.sin(z)*r*.86);zu(u,T+x,R+v,I+x,O+v,6,g,p)}}u.globalAlpha=1}});const s=60,l=Array.from({length:s},(u,f)=>f).sort((u,f)=>{const h=u/s*6.283,c=f/s*6.283;return Math.cos(h)+Math.sin(h)-(Math.cos(c)+Math.sin(c))}),a={crash:!1};A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const h=Math.min(1,f*1.15),c=1-(1-h)*(1-h),d=r*(.3+.75*c),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let g=0;g<s;g++){const x=g/s*6.283;p.push(C(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of l){const x=g/s*6.283,[v,M]=p[g],S=p[(g+1)%s][0],w=Math.max(4,Math.ceil(Math.abs(S-v))+2),_=le((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const T=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=T?.82:1;const R=T?2:-2;wm(u,le(Math.min(v,S)-1),le(M),w,_,le(Math.cos(x-.785)*3),R,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!a.crash&&f>.7){a.crash=!0;for(let g=0;g<16;g++){const x=y(0,6.283);F(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*y(1,2.5),Math.sin(x)*y(1,2.5),y(1.5,3),.6,Math.random()<.5?kt.foam:kt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=y(0,6.283),h=y(2,5);F(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*h,Math.sin(f)*h,y(3.5,6.5),y(.8,1.1),[kt.aqua,kt.sea,kt.foam,kt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return ot(10),!0};Oe.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,s){const[l,a]=C(t,n),u=le(l),f=le(a);for(let h=0;h<(r?3:2);h++){const c=s*1.3-h*.18;if(c<=0||c>=1)continue;const d=le(6+c*(r?34:24)),m=le(d/2);i.globalAlpha=1-c,i.fillStyle=h?kt.sea:kt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,s){const[l,a]=C(t,n,.5);i.globalAlpha=1-s,Sm(i,l,a-s*8,kt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const s=y(0,6.283),l=y(1,2.5);F(t,n,.4,Math.cos(s)*l,Math.sin(s)*l,y(1.5,3),.4,i%2?kt.aqua:kt.foam,2,9,!1)}};const yt=Math.round,Wr=Math.PI*2,at={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},Am=e=>e*B.HW*Math.SQRT2;function Me(e,t,n,r){r=Math.max(1,yt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let l=0;l<=i;l++)e.fillRect(yt(t[0]+(n[0]-t[0])*l/i-s),yt(t[1]+(n[1]-t[1])*l/i-s),r,r)}function eM(e,t,n,r,o,i,s=!1){const l=t[0].length,a=t.length,u=yt(n-l*o/2),f=yt(r-a*o/2);for(const h in i){e.fillStyle=i[h];for(let c=0;c<a;c++)for(let d=0;d<l;d++)t[c][s?l-1-d:d]===h&&e.fillRect(u+d*o,f+c*o,o,o)}}function nM(e,t,n,r,o,i){const s=Math.abs(r),l=yt(t),a=yt(n);e.fillStyle=i,e.fillRect(l-1,a+2,1,2),s>.55?(e.fillStyle=o,e.fillRect(l-3,a,6,2),e.fillRect(l-2,a-1,4,1),e.fillRect(l-2,a+2,3,1),e.fillStyle=i,e.fillRect(l-2,a+1,4,1)):s>.2?(e.fillStyle=o,e.fillRect(l-2,a-1,3,4),e.fillStyle=i,e.fillRect(l-1,a,1,2)):(e.fillStyle=i,e.fillRect(l-1,a-1,1,4))}const xs=new Map;function Tm(e){if(xs.has(e))return!1;if(xs.size>300)for(const[t,n]of xs)b.T-n>4&&xs.delete(t);return xs.set(e,b.T),!0}function rM(e){const t=b.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||ze(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const oM=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Oe.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[s,l]=C(t,n,.5),a=yt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=at.f1;for(const[f,h]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(s+f*a-u/2,l+h*a*.8-u/2,u,u);o.fillStyle=at.f2;for(let f=0;f<6;f++){const h=f/6*Wr+i*3;o.fillRect(yt(s+Math.cos(h)*(6+i*8))-1,yt(l+Math.sin(h)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=at.cream,o.fillRect(s-2,l-2,4,4))}}),F(t,n,.6,y(-.5,.5),y(-.5,.5),.4,.8,Math.random()<.5?at.leaf:at.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)F(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(1,2),.3,at.f1,2,4,!0)};Fe.zorra_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=(h,c=0)=>[n+s*h-l*c,r+l*h+s*c];gt(!0);const u=Lt();for(let h=0;h<3;h++){u.globalAlpha=.8-h*.22,u.fillStyle=h?at.f2:at.f1;const c=a(-15-h*4,Math.sin(i*40+h)*1.5);u.fillRect(yt(c[0])-2+(h>>1),yt(c[1])-2+(h>>1),4-h,4-h)}u.globalAlpha=1,gt(!1),e.fillStyle=at.woodD,Me(e,a(-13),a(3),3),e.fillStyle=at.wood,Me(e,a(-12),a(2),1),e.fillStyle=at.steel,Me(e,a(3),a(7),3),e.fillStyle="#ffffff",Me(e,a(6),a(8),1),e.fillStyle=at.leaf,Me(e,a(-13,0),a(-9,-3),2),e.fillStyle=at.leafD,Me(e,a(-13,1),a(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?mt(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&Tm("za"+t.id)&&(Oe.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),st.sfx("atk_zorra",f.x,f.y,.6))};et.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=C(e.x,e.y),s=C(e.x+t,e.y+n),l=Math.hypot(s[0]-i[0],s[1]-i[1])||1,a=(s[0]-i[0])/l,u=(s[1]-i[1])/l;A({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.5),m=-u,p=a;f.globalAlpha=h<.6?1:(1-h)/.4;const g=[];for(let M=-5;M<=5;M++)g.push([c+m*M*3.4-a*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=at.woodD;for(const M of g)f.fillRect(yt(M[0])-2,yt(M[1])-2,4,4);f.fillStyle=at.wood;for(const M of g)f.fillRect(yt(M[0])-1,yt(M[1])-1,2,2);f.fillStyle=at.leaf;for(const M of[g[0],g[10]])f.fillRect(yt(M[0])-2,yt(M[1])-3,3,3);const x=h<.08?9*(1-h/.08):Math.sin(h*70)*3*(1-h),v=[c-a*(11.25+x),d-u*(11.25+x)];f.fillStyle=at.cream,Me(f,g[0],v,1),Me(f,v,g[10],1)}}),A({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.5),m=4+h*16;f.fillStyle=at.f1;for(let p=0;p<8;p++){const g=p/8*Wr;f.fillRect(yt(c+a*8+Math.cos(g)*m)-2,yt(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)F(r,o,.55,-n*y(-2,2)+t*y(0,1),t*y(-2,2)+n*y(0,1),y(.5,1.5),.9,f%2?at.leaf:at.leafL,3,1.5,!1,.95)};Fe.zorra_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),l=Math.sin(o),a=(f,h=0)=>[n+s*f-l*h,r+l*f+s*h];gt(!0);const u=Lt();for(let f=0;f<=16;f++){const h=f/16,c=yt(2+7*Math.sin(Math.PI*Math.pow(h,.7))),d=Math.sin(i*30-h*7)*2.5*h,m=a(-22-h*46,d);u.globalAlpha=.85-h*.35,u.fillStyle=h>.8?at.cream:h>.45?at.fox:at.f1,u.fillRect(yt(m[0]-c/2),yt(m[1]-c/2),c,c)}u.globalAlpha=1,gt(!1),e.fillStyle=at.woodD,Me(e,a(-22),a(4),4),e.fillStyle=at.wood,Me(e,a(-21),a(3),2),e.fillStyle="#20202a",Me(e,a(3,-4),a(12),3),Me(e,a(3,4),a(12),3),e.fillStyle=at.steel,Me(e,a(4,-2),a(11),2),Me(e,a(4,2),a(11),2),e.fillStyle="#ffffff",Me(e,a(9),a(13),2);for(const f of[-1,1])e.fillStyle=at.leafD,Me(e,a(-23,0),a(-15,f*5),3),e.fillStyle=at.leaf,Me(e,a(-22,f),a(-16,f*4),2),e.fillStyle=at.leafL,e.fillRect(yt(a(-17,f*4)[0]),yt(a(-17,f*4)[1]),2,2);Math.random()<.3&&F(t.x,t.y,t.z||.45,y(-.4,.4),y(-.4,.4),-.2,.7,Math.random()<.6?at.leaf:at.autumn,3,.6,!1,.95);for(const f of rM(t))if(Tm("zq"+t.id+":"+f.id)){const h=t.vx||1,c=t.vy||0,d=Math.hypot(h,c)||1;A({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,p){const g=C(f.x-h/d*.7,f.y-c/d*.7,.5),x=C(f.x+h/d*.9,f.y+c/d*.9,.5);m.globalAlpha=1-p,m.fillStyle=at.fox,Me(m,g,x,yt(6*(1-p))+1),m.fillStyle=at.cream,Me(m,g,x,2)}});for(let m=0;m<6;m++)F(f.x,f.y,.5,h/d*y(1,3)+y(-.8,.8),c/d*y(1,3)+y(-.8,.8),y(.5,1.5),.35,m%2?at.f1:at.fox,2,3,!0)}};et.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(s,l)=>({a:l/9*Wr,h:l/9,sp:y(4.5,6),col:[at.leaf,at.leafL,at.autumn][l%3],dk:l%3===2?at.foxD:at.leafD,r:y(.5,.65)}));for(let s=0;s<14;s++){const l=s/14*Wr,a=y(1.5,2.5);F(e.x+Math.cos(l)*.3,e.y+Math.sin(l)*.3,y(.2,.8),Math.cos(l+1.3)*a,Math.sin(l+1.3)*a,y(.8,1.6),y(.6,.9),[at.leaf,at.leafL,at.autumn][s%3],3,1,!1,.94)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(s,l,a){const u=mt(t),f=l*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)F(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);a.t=1e9;return}const h=Math.min(1,f/.3),c=l>.92?(1-l)/.08:1,[d,m]=C(r,o,.35);s.globalAlpha=.55*c,s.fillStyle="#e8fff0";for(let p=0;p<2;p++){const g=f*7+p*Math.PI,x=Am(.62)*h;for(let v=0;v<7;v++){const M=g+v*.16;s.fillRect(yt(d+Math.cos(M)*x)-1,yt(m+Math.sin(M)*x*.45-p*14),3-(v>4?1:0),2)}}for(const p of i){const g=p.a+f*p.sp,x=(p.h+f*.45)%1,v=p.r*h*(1-x*.35),[M,S]=C(r+Math.cos(g)*v,o+Math.sin(g)*v,.15+x*1.1);s.globalAlpha=c*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),nM(s,M,S,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};et.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,s=C(t,n),l=C(r,o),a=l[0]<s[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));A({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,h){const c=h*(i+.45);for(const d of u){const m=c-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[g,x]=C(d.x,d.y,.32+m*.3);f.globalAlpha=p,eM(f,oM,g,x,3,{o:at.f2,t:at.f1,c:at.f0,w:"#ffffff"},a);for(let v=0;v<4;v++){const M=g+(v-1.5)*9*(a?-1:1),S=yt(4+5*Math.abs(Math.sin(c*30+v*1.7))+m*14);f.fillStyle=v%2?at.f3:at.f1,f.fillRect(yt(M)-2,yt(x-12-S),4,S),f.fillStyle=at.f0,f.fillRect(yt(M)-1,yt(x-12-S),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.3+h*.4),m=14+h*10;for(let p=0;p<6;p++){const g=p/6*Wr+h*7;f.globalAlpha=(1-h)*(.6+.4*Math.sin(h*30+p)),f.fillStyle=p%2?at.f3:at.f2,f.fillRect(yt(c+Math.cos(g)*m)-3,yt(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=at.f0,f.fillRect(yt(c+Math.cos(g)*m)-1,yt(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const h=Math.random();F(t+(r-t)*h+y(-.2,.2),n+(o-n)*h+y(-.2,.2),.3,y(-.3,.3),y(-.3,.3),y(.8,1.6),y(.5,.8),[at.f1,at.f2,at.f3][f%3],3,-.5,!0,.95)}};const Ua=3.1;function iM(e,t,n,r,o){const i=yt(t),s=yt(n),l=yt(Math.sin(o)*r),a=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<a.length;u++){const f=a[u]*r,h=u>4?yt(l*(u-4)/4):0,c=s-u*r*2;e.fillStyle=at.f3,e.fillRect(i-f+h,c,f*2,r*2),u<8&&(e.fillStyle=at.f1,e.fillRect(i-f+r+h,c,Math.max(r,f*2-r*2),r*2)),u<5&&(e.fillStyle=at.f0,e.fillRect(i-yt(f/2)+h,c,Math.max(r,f),r*2))}e.fillStyle=at.gold,e.fillRect(i-r,s-r*3,r*2,r*2)}function Ih(e,t,n,r,o,i){const s=b.T,l=ir(.8);for(let a=0;a<46;a++){const u=a/46*Wr+.09,f=Math.cos(u),h=Math.sin(u);if(Sr(f,h,0)>0!==i)continue;const c=(s*1.25+a*.618%1)%1,d=Ua*(1-c);Ke(t+f*r*.95,n+h*r*.95,d);const m=yt(vt.x),p=yt(vt.y),g=o*Math.min(1,(1-c)*4)*(i?.85:.6);e.globalAlpha=g*.45,e.fillStyle=at.f2,e.fillRect(m,p-yt(l),2,yt(l)),e.globalAlpha=g,e.fillStyle=at.f1,e.fillRect(m,p-yt(l*.45),2,yt(l*.45)),e.fillStyle=i?at.f0:at.gold,e.fillRect(m-1,p-2,4,3)}}et.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=mt(e.uid),s=i?i.x:t-3,l=i?i.y:n-3;let a=s-t,u=l-n;const f=Math.hypot(a,u)||1;a/=f,u/=f,f<.5&&(a=-.7,u=-.7);const h=Array.from({length:7},(v,M)=>({ox:y(-.3,.3),oy:y(-.3,.3),dl:M*.03}));A({type:"custom",layer:"top",add:!0,dur:.5,x:s,y:l,draw(v,M){const S=M*.5;for(const w of h){const _=(S-w.dl)/.35;if(_<0||_>1)continue;const T=.6+_*4.5,R=s+w.ox-a*_*.8,z=l+w.oy-u*_*.8,I=C(R,z,T),O=C(R+a*.15,z+u*.15,T-.4);v.globalAlpha=1-_*.5,v.fillStyle=at.fox,Me(v,O,I,3),v.fillStyle=at.f0,v.fillRect(yt(I[0])-2,yt(I[1])-2,4,4)}}});for(let v=0;v<8;v++)F(s,l,.6,y(-.5,.5),y(-.5,.5),y(2,4),.4,v%2?at.gold:at.f1,2,2,!0);const c=28,d=.45,m=Array.from({length:c},(v,M)=>{const S=Math.random()*Wr,w=Math.sqrt(Math.random())*r*.92,_=t+Math.cos(S)*w,T=n+Math.sin(S)*w;return{t0:.3+M*(2.5/c)+y(-.04,.04),lx:_,ly:T,sx:_+a*1.8+y(-.3,.3),sy:T+u*1.8+y(-.3,.3),landed:!1,tang:[0,1]}}),p=(v,M)=>C(v.sx+(v.lx-v.sx)*M,v.sy+(v.ly-v.sy)*M,4*(1-M*M));A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(v,M){const S=M*o;for(const w of m){const _=(S-w.t0)/d;if(_<0)continue;if(_>=1){if(!w.landed){w.landed=!0,F(w.lx,w.ly,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.7?at.f1:at.leaf,2,6,!0);const X=p(w,1),N=p(w,.93),Q=Math.hypot(X[0]-N[0],X[1]-N[1])||1;w.tang=[(X[0]-N[0])/Q,(X[1]-N[1])/Q]}const U=(S-w.t0-d)/.14;if(U<1){const[X,N]=C(w.lx,w.ly),Q=yt(3+U*9);v.globalAlpha=1-U,v.fillStyle=at.gold,v.fillRect(X-Q,N-1,Q*2,2),v.fillRect(X-1,N-yt(Q/2),2,Q)}continue}const T=p(w,_),R=p(w,Math.max(0,_-.07)),z=Math.hypot(T[0]-R[0],T[1]-R[1])||1,I=(T[0]-R[0])/z,O=(T[1]-R[1])/z;v.globalAlpha=.35,v.fillStyle=at.f2;for(let U=1;U<=4;U++){const X=p(w,Math.max(0,_-U*.05));v.fillRect(yt(X[0])-1,yt(X[1])-1,3,3)}v.globalAlpha=1,v.fillStyle=at.fox,Me(v,[T[0]-I*16,T[1]-O*16],T,3),v.fillStyle=at.gold,Me(v,[T[0]-I*14,T[1]-O*14],T,1),v.fillStyle="#ffffff",v.fillRect(yt(T[0])-2,yt(T[1])-2,4,4)}}});const g=Zo(e,3),x=()=>b.T-g.t0;A({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(v,M,S){const w=sn(g);if(w<=0){S.t=S.dur+1;return}const _=Math.min(1,x()/.3,w/.35);Ih(v,t,n,r,_,!1),Kr(g,t,n,r*1.05,16747050,.55*_)}}),A({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(v,M,S){const w=sn(g);if(w<=0){S.t=S.dur+1;return}const _=x(),T=Math.min(1,_/.3,w/.35);Ih(v,t,n,r,T,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),z=w<.35?(.35-w)*2.4:0;v.globalAlpha=T*.7,v.fillStyle=at.f2,kr(v,t,n,Ua+z,r*.86*R,90,3,-_*.9,0),v.fillStyle=at.gold,kr(v,t,n,Ua+z-.06,r*.86*R,18,3,_*1.7,1);for(let I=0;I<2;I++)for(let O=0;O<9;O++){const U=O/9*Wr+_*.9,X=Math.cos(U),N=Math.sin(U),Q=Sr(X,N,0)>0;I===1===Q&&(Ke(t+X*r*.86*R,n+N*r*.86*R,Ua+z+Math.sin(_*3+O)*.08),v.globalAlpha=T*(Q?1:.6),iM(v,vt.x,vt.y,Q?3:2,_*9+O*1.3))}}}),A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(v,M,S){const w=M*o,_=M>.85?(1-M)/.15:Math.min(1,w*4),[T,R]=C(t,n),z=Am(r);!S.sh&&w>.75&&(S.sh=!0,ot(3)),v.globalAlpha=.7*_,v.fillStyle=at.fox;for(let I=0;I<10;I++){const O=I/10*Wr+w*.6,U=T+Math.cos(O)*z,X=R+Math.sin(O)*z*.5,N=-Math.cos(O),Q=-Math.sin(O)*.5;v.fillRect(yt(U)-2,yt(X)-2,4,4),v.fillRect(yt(U+N*6-Q*4)-1,yt(X+Q*6+N*2)-1,3,3),v.fillRect(yt(U+N*6+Q*4)-1,yt(X+Q*6-N*2)-1,3,3)}for(const I of m){if(!I.landed)continue;const[O,U]=C(I.lx,I.ly),X=I.tang[0],N=I.tang[1];v.globalAlpha=_,v.fillStyle="#00000055",v.fillRect(yt(O)-3,yt(U),6,2),v.fillStyle=at.woodD,Me(v,[O-X*13,U-N*13],[O,U],3),v.fillStyle=at.wood,Me(v,[O-X*12,U-N*12],[O-X*2,U-N*2],1),v.fillStyle=at.leaf,v.fillRect(yt(O-X*13)-2,yt(U-N*13)-1,2,3),v.fillStyle=at.autumn,v.fillRect(yt(O-X*13),yt(U-N*13)-2,2,3)}}})};var Kt=`in vec2 aPosition;
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
`,jt=`struct GlobalFilterUniforms {
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
}`,sM=`in vec2 vTextureCoord;
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
`,aM=`struct AdjustmentUniforms {
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
}`,lM=Object.defineProperty,uM=(e,t,n)=>t in e?lM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cm=(e,t,n)=>(uM(e,typeof t!="symbol"?t+"":t,n),n);const fM=class Rm extends Yt{constructor(t){t={...Rm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:aM,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:sM,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Cm(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Cm(fM,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var cM=`
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
}`,hM=`struct KawaseBlurUniforms {
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
}`,dM=`
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
`,mM=`struct KawaseBlurUniforms {
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
}`,pM=Object.defineProperty,yM=(e,t,n)=>t in e?pM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Po=(e,t,n)=>(yM(e,typeof t!="symbol"?t+"":t,n),n);const Pm=class Im extends Yt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Ft("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...Im.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:n?.clamp?mM:hM,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:n?.clamp?dM:cM,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Po(this,"uniforms"),Po(this,"_pixelSize",{x:0,y:0}),Po(this,"_clamp"),Po(this,"_kernels",[]),Po(this,"_blur"),Po(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,s=this.pixelSizeY/n.source.height;let l;if(this._quality===1||this._blur===0)l=this._kernels[0]+.5,this.uniforms.uOffset[0]=l*i,this.uniforms.uOffset[1]=l*s,t.applyFilter(this,n,r,o);else{const a=On.getSameSizeTexture(n);let u=n,f=a,h;const c=this._quality-1;for(let d=0;d<c;d++)l=this._kernels[d]+.5,this.uniforms.uOffset[0]=l*i,this.uniforms.uOffset[1]=l*s,t.applyFilter(this,u,f,!0),h=u,u=f,f=h;l=this._kernels[c]+.5,this.uniforms.uOffset[0]=l*i,this.uniforms.uOffset[1]=l*s,t.applyFilter(this,u,r,o),On.returnTexture(a)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let s=1;s<n;s++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};Po(Pm,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let zm=Pm;var gM=`in vec2 vTextureCoord;
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
`,xM=`struct AdvancedBloomUniforms {
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
`,MM=`
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
`,vM=`struct ExtractBrightnessUniforms {
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
`,bM=Object.defineProperty,SM=(e,t,n)=>t in e?bM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Om=(e,t,n)=>(SM(e,typeof t!="symbol"?t+"":t,n),n);const Fm=class Em extends Yt{constructor(t){t={...Em.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:vM,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:MM,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),Om(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};Om(Fm,"DEFAULT_OPTIONS",{threshold:.5});let wM=Fm;var _M=Object.defineProperty,AM=(e,t,n)=>t in e?_M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,di=(e,t,n)=>(AM(e,typeof t!="symbol"?t+"":t,n),n);const km=class Lm extends Yt{constructor(t){t={...Lm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:xM,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:gM,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:_t.WHITE}}),di(this,"uniforms"),di(this,"bloomScale",1),di(this,"brightness",1),di(this,"_extractFilter"),di(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new wM({threshold:t.threshold}),this._blurFilter=new zm({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=On.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const s=On.getSameSizeTexture(n);this._blurFilter.apply(t,i,s,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=s.source,t.applyFilter(this,n,r,o),On.returnTexture(s),On.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};di(km,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let TM=km;var CM=`precision highp float;
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
`,RM=`struct AsciiUniforms {
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
}`,PM=Object.defineProperty,IM=(e,t,n)=>t in e?PM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rf=(e,t,n)=>(IM(e,typeof t!="symbol"?t+"":t,n),n);const zM=class Um extends Yt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ft("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...Um.DEFAULT_OPTIONS,...n};const o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:RM,entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:CM,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Rf(this,"uniforms"),Rf(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Ye,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Rf(zM,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var OM=`precision highp float;
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
`,FM=`struct BevelUniforms {
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
}`,EM=Object.defineProperty,kM=(e,t,n)=>t in e?EM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mi=(e,t,n)=>(kM(e,typeof t!="symbol"?t+"":t,n),n);const LM=class Dm extends Yt{constructor(t){t={...Dm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:FM,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:OM,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),mi(this,"uniforms"),mi(this,"_thickness"),mi(this,"_rotation"),mi(this,"_lightColor"),mi(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Ye,this._shadowColor=new Ye,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Gi}set rotation(t){this._rotation=t*Gi,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};mi(LM,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var UM=Object.defineProperty,DM=(e,t,n)=>t in e?UM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Da=(e,t,n)=>(DM(e,typeof t!="symbol"?t+"":t,n),n);const XM=class Xm extends Ky{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Ft("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Xm.DEFAULT_OPTIONS,...n},super(),Da(this,"_blurXFilter"),Da(this,"_blurYFilter"),Da(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new hc({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new hc({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=On.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),On.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Ft("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Ft("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Ft("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Ft("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Ft("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Ft("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};Da(XM,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var GM=`precision highp float;
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
`,BM=`struct BulgePinchUniforms {
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
}`,NM=Object.defineProperty,$M=(e,t,n)=>t in e?NM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gm=(e,t,n)=>($M(e,typeof t!="symbol"?t+"":t,n),n);const HM=class Bm extends Yt{constructor(t){t={...Bm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:BM,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:GM,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Gm(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Gm(HM,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var WM=`precision highp float;
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
`,VM=`in vec2 aPosition;
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
`,zh=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Jo=Jo||{};Jo.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Jo=Jo||{};Jo.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(E){var L=new Error(t+": "+E);throw L.source=t,L}function r(){var E=o();return t.length>0&&n("Invalid input not EOF"),E}function o(){return M(i)}function i(){return s("linear-gradient",e.linearGradient,a)||s("repeating-linear-gradient",e.repeatingLinearGradient,a)||s("radial-gradient",e.radialGradient,h)||s("repeating-radial-gradient",e.repeatingRadialGradient,h)}function s(E,L,G){return l(L,function($){var V=G();return V&&(Q(e.comma)||n("Missing comma before color stops")),{type:E,orientation:V,colorStops:M(S)}})}function l(E,L){var G=Q(E);if(G){Q(e.startCall)||n("Missing (");var $=L(G);return Q(e.endCall)||n("Missing )"),$}}function a(){return u()||f()}function u(){return N("directional",e.sideOrCorner,1)}function f(){return N("angular",e.angleValue,1)}function h(){var E,L=c(),G;return L&&(E=[],E.push(L),G=t,Q(e.comma)&&(L=c(),L?E.push(L):t=G)),E}function c(){var E=d()||m();if(E)E.at=g();else{var L=p();if(L){E=L;var G=g();G&&(E.at=G)}else{var $=x();$&&(E={type:"default-radial",at:$})}}return E}function d(){var E=N("shape",/^(circle)/i,0);return E&&(E.style=X()||p()),E}function m(){var E=N("shape",/^(ellipse)/i,0);return E&&(E.style=O()||p()),E}function p(){return N("extent-keyword",e.extentKeywords,1)}function g(){if(N("position",/^at/,0)){var E=x();return E||n("Missing positioning value"),E}}function x(){var E=v();if(E.x||E.y)return{type:"position",value:E}}function v(){return{x:O(),y:O()}}function M(E){var L=E(),G=[];if(L)for(G.push(L);Q(e.comma);)L=E(),L?G.push(L):n("One extra comma");return G}function S(){var E=w();return E||n("Expected color definition"),E.length=O(),E}function w(){return T()||z()||R()||_()}function _(){return N("literal",e.literalColor,0)}function T(){return N("hex",e.hexColor,1)}function R(){return l(e.rgbColor,function(){return{type:"rgb",value:M(I)}})}function z(){return l(e.rgbaColor,function(){return{type:"rgba",value:M(I)}})}function I(){return Q(e.number)[1]}function O(){return N("%",e.percentageValue,1)||U()||X()}function U(){return N("position-keyword",e.positionKeywords,1)}function X(){return N("px",e.pixelValue,1)||N("em",e.emValue,1)}function N(E,L,G){var $=Q(L);if($)return{type:E,value:$[G]}}function Q(E){var L,G;return G=/^[\n\r\t\s]+/.exec(t),G&&k(G[0].length),L=E.exec(t),L&&k(L[0].length),L}function k(E){t=t.substr(E)}return function(E){return t=E.toString(),r()}}();var qM=Jo.parse;Jo.stringify;function YM(e){const t=qM(nv(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=KM(n.type),o=jM(n.colorStops),i=tv(n.orientation);return{type:r,stops:o,angle:i}}function KM(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function jM(e){const t=ZM(e),n=[],r=new Ye;for(let o=0;o<e.length;o++){const i=QM(e[o]),s=r.setValue(i).toArray();n.push({offset:t[o],color:s.slice(0,3),alpha:s[3]})}return n}function QM(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function ZM(e){const t=[];for(let i=0;i<e.length;i++){const s=e[i];let l=-1;s.type==="literal"&&s.length&&"type"in s.length&&s.length.type==="%"&&"value"in s.length&&(l=parseFloat(s.length.value)/100),t.push(l)}const r=i=>{for(let s=i;s<t.length;s++)if(t[s]!==-1)return{indexDelta:s-i,offset:t[s]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const s=t[i];if(s!==-1)o=s;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const l=r(i),u=(l.offset-o)/(1+l.indexDelta);for(let f=0;f<=l.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=l.indexDelta,o=t[i]}}return t.map(JM)}function JM(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function tv(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return ev(e.value)}return 0}function ev(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function nv(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var rv=Object.defineProperty,ov=(e,t,n)=>t in e?rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wo=(e,t,n)=>(ov(e,typeof t!="symbol"?t+"":t,n),n);const Ou=90;function iv(e){return[...e].sort((t,n)=>t.offset-n.offset)}const Ks=class Xa extends Yt{constructor(t){if(t&&"css"in t?t={...YM(t.css||""),alpha:t.alpha??Xa.defaults.alpha,maxColors:t.maxColors??Xa.defaults.maxColors}:t={...Xa.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Bt.from({vertex:{source:zh,entryPoint:"mainVertex"},fragment:{source:zh,entryPoint:"mainFragment"}}),r=Ht.from({vertex:VM,fragment:WM,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Ou,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Wo(this,"baseUniforms"),Wo(this,"stopsUniforms"),Wo(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=iv(t),r=new Ye;let o,i,s;for(let l=0;l<n.length;l++){r.setValue(n[l].color);const a=l*3;[o,i,s]=r.toArray(),this.stopsUniforms.uColors[a]=o,this.stopsUniforms.uColors[a+1]=i,this.stopsUniforms.uColors[a+2]=s,this.stopsUniforms.uStops[l*4]=n[l].offset,this.stopsUniforms.uStops[l*4+1]=n[l].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Ou}set angle(t){this.baseUniforms.uOptions[1]=t-Ou}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Wo(Ks,"LINEAR",0);Wo(Ks,"RADIAL",1);Wo(Ks,"CONIC",2);Wo(Ks,"defaults",{type:Ks.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var sv=`in vec2 vTextureCoord;
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

}`,av=`struct ColorMapUniforms {
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
}`,lv=Object.defineProperty,uv=(e,t,n)=>t in e?lv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rr=(e,t,n)=>(uv(e,typeof t!="symbol"?t+"":t,n),n);const fv=class Nm extends Yt{constructor(...t){let n=t[0]??{};if((n instanceof _t||n instanceof Sn)&&(Ft("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Nm.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:av,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:sv,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Rr(this,"uniforms"),Rr(this,"_size",0),Rr(this,"_sliceSize",0),Rr(this,"_slicePixelSize",0),Rr(this,"_sliceInnerSize",0),Rr(this,"_nearest",!1),Rr(this,"_scaleMode","linear"),Rr(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof _t?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Rr(fv,"DEFAULT_OPTIONS",{colorMap:_t.WHITE,nearest:!1,mix:1});var cv=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,hv=`struct ColorOverlayUniforms {
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
`,dv=Object.defineProperty,mv=(e,t,n)=>t in e?dv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pf=(e,t,n)=>(mv(e,typeof t!="symbol"?t+"":t,n),n);const pv=class $m extends Yt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Ft("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...$m.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:hv,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:cv,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Pf(this,"uniforms"),Pf(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Ye,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Pf(pv,"DEFAULT_OPTIONS",{color:0,alpha:1});var yv=`in vec2 vTextureCoord;
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
`,gv=`struct ColorReplaceUniforms {
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
}`,xv=Object.defineProperty,Mv=(e,t,n)=>t in e?xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ga=(e,t,n)=>(Mv(e,typeof t!="symbol"?t+"":t,n),n);const vv=class Hm extends Yt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Ft("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...Hm.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:gv,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:yv,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),Ga(this,"uniforms"),Ga(this,"_originalColor"),Ga(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Ye,this._targetColor=new Ye,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Ft("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Ft("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Ft("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Ft("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Ga(vv,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var bv=`in vec2 vTextureCoord;
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
}`,Sv=`struct ConvolutionUniforms {
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
}`,wv=Object.defineProperty,_v=(e,t,n)=>t in e?wv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wm=(e,t,n)=>(_v(e,typeof t!="symbol"?t+"":t,n),n);const Av=class Vm extends Yt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Ft("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Vm.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Sv,entryPoint:"mainFragment"}}),s=Ht.from({vertex:Kt,fragment:bv,name:"convolution-filter"});super({gpuProgram:i,glProgram:s,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Wm(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Wm(Av,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Tv=`precision highp float;
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
`,Cv=`struct CRTUniforms {
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
}`,Rv=Object.defineProperty,Pv=(e,t,n)=>t in e?Rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ba=(e,t,n)=>(Pv(e,typeof t!="symbol"?t+"":t,n),n);const Iv=class qm extends Yt{constructor(t){t={...qm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Cv,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:Tv,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ba(this,"uniforms"),Ba(this,"seed"),Ba(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};Ba(Iv,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var zv=`precision highp float;
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
`,Ov=`struct DotUniforms {
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
}`,Fv=Object.defineProperty,Ev=(e,t,n)=>t in e?Fv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kv=(e,t,n)=>(Ev(e,t+"",n),n);const Lv=class Ym extends Yt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ft("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...Ym.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Ov,entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:zv,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};kv(Lv,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Uv=`precision highp float;
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
}`,Dv=`struct DropShadowUniforms {
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
}`,Xv=Object.defineProperty,Gv=(e,t,n)=>t in e?Xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pi=(e,t,n)=>(Gv(e,typeof t!="symbol"?t+"":t,n),n);const Bv=class Km extends Yt{constructor(t){t={...Km.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Dv,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:Uv,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),pi(this,"uniforms"),pi(this,"shadowOnly",!1),pi(this,"_color"),pi(this,"_blurFilter"),pi(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Ye,this.color=t.color??0,this._blurFilter=new zm({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new Yt({gpuProgram:Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:Ht.from({vertex:Kt,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=On.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),On.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};pi(Bv,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Nv=`precision highp float;
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
`,$v=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,Hv=Object.defineProperty,Wv=(e,t,n)=>t in e?Hv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lr=(e,t,n)=>(Wv(e,typeof t!="symbol"?t+"":t,n),n);const Vv=class jm extends Yt{constructor(t){t={...jm.defaults,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:$v,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:Nv,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new _t({source:new m0({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),lr(this,"uniforms"),lr(this,"average",!1),lr(this,"minSize",8),lr(this,"sampleSize",512),lr(this,"_canvas"),lr(this,"texture"),lr(this,"_slices",0),lr(this,"_sizes",new Float32Array(1)),lr(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:s}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let s=1;for(let l=0;l<n;l++){const a=s/(i-l),u=Math.max(a*(1-Math.random()*.6),o);t[l]=u,s-=u}t[n]=s}else{let i=1;const s=Math.sqrt(1/this._slices);for(let l=0;l<n;l++){const a=Math.max(s*i*Math.random(),o);t[l]=a,i-=a}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);const l=this._sizes[s]*t,a=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${a}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,l+1>>0),i+=l}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Gi}set direction(t){this.uniforms.uDirection=t*Gi}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};lr(Vv,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var qv=`precision highp float;
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
`,Yv=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,Kv=Object.defineProperty,jv=(e,t,n)=>t in e?Kv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,If=(e,t,n)=>(jv(e,typeof t!="symbol"?t+"":t,n),n);const Qv=class Qm extends Yt{constructor(t){t={...Qm.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Yv,entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:qv.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),If(this,"uniforms"),If(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Ye,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};If(Qv,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Zv=`precision highp float;
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
`,Jv=`struct GodrayUniforms {
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

\${PERLIN}`,tb=`vec3 mod289(vec3 x)
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
`,eb=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,nb=Object.defineProperty,rb=(e,t,n)=>t in e?nb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yi=(e,t,n)=>(rb(e,typeof t!="symbol"?t+"":t,n),n);const ob=class Zm extends Yt{constructor(t){t={...Zm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Jv.replace("${PERLIN}",eb),entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:Zv.replace("${PERLIN}",tb),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),yi(this,"uniforms"),yi(this,"time",0),yi(this,"_angleLight",[0,0]),yi(this,"_angle",0),yi(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,s=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*Gi;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};yi(ob,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var ib=`in vec2 vTextureCoord;
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
`,sb=`struct HslUniforms {
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
}`,ab=Object.defineProperty,lb=(e,t,n)=>t in e?ab(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zf=(e,t,n)=>(lb(e,typeof t!="symbol"?t+"":t,n),n);const ub=class Jm extends Yt{constructor(t){t={...Jm.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:sb,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:ib,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),zf(this,"uniforms"),zf(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};zf(ub,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var fb=`precision highp float;
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
`,cb=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,hb=Object.defineProperty,db=(e,t,n)=>t in e?hb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Of=(e,t,n)=>(db(e,typeof t!="symbol"?t+"":t,n),n);const mb=class t2 extends Yt{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Ve){Ft("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],s="y"in n?n.y:n[1];n={velocity:{x:i,y:s}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...t2.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:cb,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:fb,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Of(this,"uniforms"),Of(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Of(mb,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var pb=`in vec2 vTextureCoord;
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
`,yb=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,gb=Object.defineProperty,xb=(e,t,n)=>t in e?gb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Na=(e,t,n)=>(xb(e,typeof t!="symbol"?t+"":t,n),n);const Mb=class e2 extends Yt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Ft("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...e2.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:yb.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:pb.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),Na(this,"uniforms"),Na(this,"_replacements",[]),Na(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new Ye;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let s,l,a;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[s,l,a]=i.toArray(),n[u*3]=s,n[u*3+1]=l,n[u*3+2]=a,i.setValue(f[1]),[s,l,a]=i.toArray(),r[u*3]=s,r[u*3+1]=l,r[u*3+2]=a}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Ft("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Ft("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Na(Mb,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var vb=`precision highp float;
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
}`,bb=`struct OldFilmUniforms {
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
}`,Sb=Object.defineProperty,wb=(e,t,n)=>t in e?Sb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ff=(e,t,n)=>(wb(e,typeof t!="symbol"?t+"":t,n),n);const _b=class n2 extends Yt{constructor(t){t={...n2.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:bb,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:vb,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ff(this,"uniforms"),Ff(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Ff(_b,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Ab=`precision highp float;
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
`,Tb=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Cb=Object.defineProperty,Rb=(e,t,n)=>t in e?Cb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uo=(e,t,n)=>(Rb(e,typeof t!="symbol"?t+"":t,n),n);const C0=class Io extends Yt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Ft("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...Io.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Tb,entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:Ab.replace(/\$\{ANGLE_STEP\}/,Io.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),Uo(this,"uniforms"),Uo(this,"_thickness"),Uo(this,"_quality"),Uo(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Io.getAngleStep(r),this._color=new Ye,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Io.MAX_SAMPLES,Io.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Io.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Uo(C0,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Uo(C0,"MIN_SAMPLES",1);Uo(C0,"MAX_SAMPLES",100);var Pb=`precision highp float;
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
`,Ib=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,zb=Object.defineProperty,Ob=(e,t,n)=>t in e?zb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$a=(e,t,n)=>(Ob(e,typeof t!="symbol"?t+"":t,n),n);const Fb=class r2 extends Yt{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Ft("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],s="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:s}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...r2.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Ib,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:Pb,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),$a(this,"uniforms"),$a(this,"_angle"),$a(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};$a(Fb,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Eb=`precision highp float;
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
`,kb=`struct ReflectionUniforms {
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
}`,Lb=Object.defineProperty,Ub=(e,t,n)=>t in e?Lb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ef=(e,t,n)=>(Ub(e,typeof t!="symbol"?t+"":t,n),n);const Db=class o2 extends Yt{constructor(t){t={...o2.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:kb,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:Eb,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ef(this,"uniforms"),Ef(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Ef(Db,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Xb=`precision highp float;
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
`,Gb=`struct RgbSplitUniforms {
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
`,Bb=Object.defineProperty,Nb=(e,t,n)=>t in e?Bb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i2=(e,t,n)=>(Nb(e,typeof t!="symbol"?t+"":t,n),n);const $b=class s2 extends Yt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Ft("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...s2.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Gb,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:Xb,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),i2(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};i2($b,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Hb=`
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
`,Wb=`
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
`,Vb=Object.defineProperty,qb=(e,t,n)=>t in e?Vb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kf=(e,t,n)=>(qb(e,typeof t!="symbol"?t+"":t,n),n);const Yb=class a2 extends Yt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Ft("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...a2.DEFAULT_OPTIONS,...n};const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:Wb,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:Hb,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),kf(this,"uniforms"),kf(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};kf(Yb,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Kb=`precision highp float;
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
`,jb=`struct SimpleLightmapUniforms {
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
}`,Qb=Object.defineProperty,Zb=(e,t,n)=>t in e?Qb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ha=(e,t,n)=>(Zb(e,typeof t!="symbol"?t+"":t,n),n);const Jb=class l2 extends Yt{constructor(...t){let n=t[0]??{};if(n instanceof _t&&(Ft("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...l2.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:jb,entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:Kb,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),Ha(this,"uniforms"),Ha(this,"_color"),Ha(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Ye,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Ha(Jb,"DEFAULT_OPTIONS",{lightMap:_t.WHITE,color:0,alpha:1});var t4=`in vec2 vTextureCoord;
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
`,e4=`struct TiltShiftUniforms {
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
}`,n4=Object.defineProperty,r4=(e,t,n)=>t in e?n4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lf=(e,t,n)=>(r4(e,typeof t!="symbol"?t+"":t,n),n);const o4=class u2 extends Yt{constructor(t){const{width:n,height:r}=fg.defaultOptions;t={...u2.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:e4,entryPoint:"mainFragment"}}),i=Ht.from({vertex:Kt,fragment:t4,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Lf(this,"uniforms"),Lf(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),s=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=s?-o/i:r/i,this.uniforms.uDelta[1]=s?r/i:o/i}};Lf(o4,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var i4=`precision highp float;
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
`,s4=`struct TwistUniforms {
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
`,a4=Object.defineProperty,l4=(e,t,n)=>t in e?a4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f2=(e,t,n)=>(l4(e,typeof t!="symbol"?t+"":t,n),n);const u4=class c2 extends Yt{constructor(t){t={...c2.DEFAULT_OPTIONS,...t};const n=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:s4,entryPoint:"mainFragment"}}),r=Ht.from({vertex:Kt,fragment:i4,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),f2(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};f2(u4,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var f4=`precision highp float;
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
`,c4=`struct ZoomBlurUniforms {
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
}`,h4=Object.defineProperty,d4=(e,t,n)=>t in e?h4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h2=(e,t,n)=>(d4(e,typeof t!="symbol"?t+"":t,n),n);const m4=class d2 extends Yt{constructor(t){t={...d2.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Bt.from({vertex:{source:jt,entryPoint:"mainVertex"},fragment:{source:c4.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=Ht.from({vertex:Kt,fragment:f4.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),h2(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};h2(m4,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let Jn,m2,Fi,Ls,js;const Ma=[];let Oh=!0,Uf=0;function p2(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,s=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${s.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}async function p4(e,t){return m2=t,Jn=new zs,await Jn.init({...e,background:"#000000",backgroundAlpha:1}),js=_t.from(p2(256)),js.source.scaleMode="linear",Ls=new Ge(_t.WHITE),Jn.stage.addChild(Ls),Fi=new ie,Jn.stage.addChild(Fi),M4(),Jn.canvas}function y4(){const e=new Ge(js);e.blendMode="add",e.alpha=.01,Fi.addChild(e),Jn.renderer.render(Jn.stage),e.destroy();try{Jn.renderer.texture.initSource(js.source)}catch{}g2()}function Fh(e){e!==Oh&&(Oh=e,Jn.canvas.style.display=e?"":"none",e?Jn.ticker.start():Jn.ticker.stop())}const Do=4;let Si,Us,Df,Xf;const va=[],Vo=new Tl({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),g4=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,x4=`in vec2 vUV;
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
}`;let y2;function M4(){Xf=_t.from(p2(64)),Xf.source.scaleMode="linear",Si=y0.create({width:64,height:64,resolution:1}),Df=new ie,Us=new ie,Df.addChild(Us),y2=Ht.from({vertex:g4,fragment:x4,name:"piso-luna"})}function v4(e,t,n){const r=e.width,o=e.height,i=new x1({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),s=new Cl({glProgram:y2,resources:{uTexture:e.source,uMask:Si.source,moonU:Vo}}),l=new ig({geometry:i,shader:s,texture:e});return l.x=t,l.y=n,l}function g2(){const e=Math.ceil(b.W/Do),t=Math.ceil(b.H/Do);(Si.source.width!==e||Si.source.height!==t)&&Si.resize(e,t,1),Vo.uniforms.uScreen[0]=e*Do,Vo.uniforms.uScreen[1]=t*Do,m2.renderer.render({container:Df,target:Si,clear:!0,clearColor:[0,0,0,0]})}const Eh=[.95,.95,.94],b4=[.5,.62,.86],S4=[1,.74,.55],kh=[62,108,168],w4=[210,120,60],Wa=[1,1,1];function _4(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let s=Eh[i]+(b4[i]-Eh[i])*e;s+=(S4[i]-s)*t*.62,Wa[i]=s,n[i]=kh[i]+(w4[i]-kh[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=Vo.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const A4=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),Gf=[];let wi=0,Bf=0,Nf=0,x2=0,M2=0;const T4=110;function _n(e,t,n,r,o,i){if(i<.02||wi>=T4)return;const s=(e-t)*B.HW+B.OX,l=(e+t)*B.HH,a=r*B.HW*1.5;if(s<Bf-a||s>x2+a||l<Nf-a||l>M2+a)return;let u=Gf[wi];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},Gf[wi]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),wi++}const Lh=(e,t,n,r,o)=>_n(e,t,0,n,r,o);let ai=null;function C4(){if(ai)return ai;ai=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?ai.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&ai.push({x:e.x,y:e.y,kind:"crystal"});return ai}const Uh={blue:5949695,red:16742470},R4={blue:9101567,red:16752752},P4={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function I4(e){const t=b.game,n=b.T,r=t.player,o=.55+.45*e;for(const i of C4())if(i.kind==="brazier"){const s=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);_n(i.x,i.y,.5,3.3*(.96+.04*s),16749632,.8*s*o)}else _n(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const s=t.fountain[i];s&&_n(s.x,s.y,.3,3.6,R4[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){_n(i.x,i.y,1.75,3.4,Uh[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){_n(i.x,i.y,.9,4.4,Uh[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(ze(i))continue;const s=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&_n(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),s&&s.burn&&_n(i.x,i.y,.4,1.3,16747560,.5*o);const l=s&&s.transform;l&&_n(i.x,i.y,.6,2.8,l.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&_n(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const s=window.SIM.RUNES[i.kind];_n(i.x,i.y,.5,1.7,M0(s.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||Pl(i,n)&&_n(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&_n(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const s=P4[i.fx];s!==void 0&&_n(i.x,i.y,i.z||.45,i.skill?2:1.2,s,(i.skill?.75:.5)*o)}Vx(Lh,40,o),qx(Lh,14,o)}const v2=new URLSearchParams(location.search),z4=v2.get("luna")==="0",O4=v2.get("mapaluz")==="0";let Ms=!1;function F4(e,t){const n=b.game;if(!n||!n.player||O4){Fh(!1),Uf=0,Ms&&(Ms=!1,Vo.uniforms.uMoon[3]=0);return}Fh(!0);const r=cd(n.t),o=b.cam;Uf=r.night,_4(r.night,r.warm),z4&&(Vo.uniforms.uMoon[3]=0),Ls.tint=A4(Wa[0],Wa[1],Wa[2]),Ls.width=b.W,Ls.height=b.H,Fi.scale.set(o.z),Fi.position.set(e,t),Bf=o.x-b.W/2/o.z,Nf=o.y-b.H/2/o.z,x2=Bf+b.W/o.z,M2=Nf+b.H/o.z+120,wi=0,I4(r.night);const{HW:i,HH:s,OX:l,ZK:a}=B;Ms=Vo.uniforms.uMoon[3]>.005;let u=0;for(;u<wi;u++){const f=Gf[u];let h=Ma[u];h||(h=new Ge(js),h.anchor.set(.5),h.blendMode="add",Fi.addChild(h),Ma[u]=h);const c=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+l,m=(f.x+f.y)*s-f.z*a*.35-10;if(h.visible=!0,h.x=d,h.y=m,h.width=c,h.height=c*.62,h.tint=f.col,h.alpha=f.a,Ms){let p=va[u];p||(p=new Ge(Xf),p.anchor.set(.5),p.blendMode="add",Us.addChild(p),va[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=c,p.height=c*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<Ma.length;f++)Ma[f].visible=!1;if(Ms){for(let f=u;f<va.length;f++)va[f].visible=!1;Us.scale.set(o.z/Do),Us.position.set(e/Do,t/Do),g2()}}let Zn;const Wt={};let Ei,ki,Hn,Li,Ds,$f=0,Fu,Va=null,qa=null,vl,Hf=[],bl=[];const Sl=[],es=new Map,ro=[],ba=[];function R0(){return Zn.canvas}const Wf=[];async function E4(e){const t=hg();let n=0;for(const o of t){try{Zn.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new Ge(vl);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(b.W/2,b.H/2),Wt.lights.addChild(r);for(let o=0;o<3;o++)oo.renderer.render(oo.stage),Zn.renderer.render(Zn.stage),Fr.renderer.render(Fr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of Wf)try{Fr.renderer.texture.initSource(o)}catch{}try{oo.renderer.texture.initSource(vl.source)}catch{}y4()}let Eu;function k4(){try{const e=Zn.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let Fr,oo;const Sa={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function Jr(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function L4(e){Fr=new zs,Zn=new zs,oo=new zs,await Fr.init({...Sa,background:"#100d18"}),await Zn.init({...Sa,backgroundAlpha:0}),await oo.init({...Sa,backgroundAlpha:0}),Fu=await p4(Sa,Fr),b.gpuName=k4(),b.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(b.gpuName),e.style.position="fixed",Ei=document.createElement("canvas"),ki=document.createElement("canvas"),Hn=document.createElement("canvas"),Li=document.createElement("canvas"),Jr(Fr.canvas,1),Jr(Ei,3),Jr(Zn.canvas,4),Jr(Fu,5,"multiply"),Jr(oo.canvas,6,"plus-lighter"),Jr(Hn,7),Jr(ki,8),Jr(Li,9,"plus-lighter"),Hn.style.imageRendering="auto",Zn.canvas.style.pointerEvents="auto",e.append(Fr.canvas,Ei,Zn.canvas,Fu,oo.canvas,Hn,ki,Li);for(const t of["ground"])Wt[t]=new ie,Fr.stage.addChild(Wt[t]);for(const t of["world","top"])Wt[t]=new ie,Zn.stage.addChild(Wt[t]);Wt.lights=new ie,oo.stage.addChild(Wt.lights),Wt.groundCam=new ie,Wt.ground.addChild(Wt.groundCam),Wt.worldCam=new ie,Wt.world.addChild(Wt.worldCam),Wt.shadows=new ie,Wt.entities=new ie,Wt.entities.sortableChildren=!0,Wt.worldCam.addChild(Wt.shadows,Wt.entities),Wt.lightsCam=new ie,Wt.lights.addChild(Wt.lightsCam),Eu=new TM({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Eu.resolution=.5,Wt.lights.filters=[Eu],vl=_t.from(U4(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),Ds=new Ge(_t.WHITE),Wt.top.addChild(Ds),Dh(),window.addEventListener("resize",Dh)}function U4(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,s]of t)o.addColorStop(i,s);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function Dh(){b.W=window.innerWidth,b.H=window.innerHeight;const e=i=>Math.ceil(i*Yf);Ei.width=Li.width=e(b.W),Ei.height=Li.height=e(b.H),ki.width=b.W,ki.height=b.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=_t.from(t);o.source.scaleMode="linear",Ds.texture=o,Ds.width=b.W,Ds.height=b.H}function D4(){const e=window.MAP;for(const o of mg())Wt.groundCam.addChild(v4(o.tex,o.x,o.y)),Wf.push(o.tex.source);const t=X4(),n=er.ground.naturalWidth,r=er.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const s=er[o];if(!s||!s.naturalWidth)continue;const l=_t.from(s);l.source.scaleMode="linear",Wf.push(l.source);const a=new Ge(l);a.width=n,a.height=r;const u=new ag({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=a,Wt.groundCam.addChild(a,u),i==="flow"?Va=u:qa=u}Hf=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),bl=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Hf)Vf(o,!0);for(const o of bl)Vf(o,!1)}function Vf(e,t){const n=Jt[e.sprite];if(!n||!Rl(e.sprite))return;const r=Eo(e.sprite,null,0,0);if(!r)return;const o=new Ge(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,s]=C(e.x,e.y);o.x=i,o.y=s,o.zIndex=(e.x+e.y)*100,Wt.entities.addChild(o),Sl.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function X4(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,s=4+Math.random()*12,l=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${l})`;for(const a of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+a),Math.round(i+u),Math.round(s),1),s>9&&t.fillRect(Math.round(o+a+2),Math.round(i+u+1),Math.round(s-4),1)}const n=_t.from(e);return n.source.scaleMode="nearest",n}function G4(e){const t=Jt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",of(e.sprite,"idle",e.animT||0)]:["walk",0]}const B4={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},N4={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194},Xh={};function $4(e){let t=Xh[e];if(!t){t=new og;const[n,r,o]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,r,0,0,0,0,o,0,0,0,1,0],Xh[e]=t}return t}function H4(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===b.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===b.hoverUnit?e.team!==t.team?"red":"white":""}function W4(e){let t=es.get(e.id);if(!t){const n=()=>{const r=new Ge(_t.EMPTY);return Wt.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new Ge(_t.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,Wt.shadows.addChild(t.shadow),es.set(e.id,t)}return t}function li(e,t,n,r,o,i,s){if(!t){e.visible=!1;return}const l=Jt[n];e.texture=t,e.visible=!0,e.anchor.set(l.ax/l.fw,l.ay/l.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=s}function V4(){const e=b.game,t=e.player,n=b.T,r=++q4;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=W4(o);i.seen=r;const s=o.kind==="tower"||o.kind==="nexus";if(o.dead){li(i.spr,Eo("prop_boulder",null,0,0),"prop_boulder",...C(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const I of i.gear)I.visible=!1;continue}if(ze(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const I of i.gear)I.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const I=o._spriteBak||(b.mode==="guest"?o.heroKey:null);I&&(o.sprite=I)}if(o.sprite&&(!Jt[o.sprite]||!Rl(o.sprite))){const I=B4[o.sprite];o._fbScale=I?I[1]:1,o._fbTint=I?I[2]:16777215,o.sprite=I&&Jt[I[0]]?I[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[l,a]=C(o.x,o.y);let u=a;if(o.dash&&o.dash.leap){const I=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(I*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!s&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let h=0;if(o._cyA!==void 0){const I=Math.min(1,(n-o._cyA)/.4);h=58*I*(2-I)+Math.sin(n*5+o.id)*5*I}else if(o._cyB!==void 0){const I=(n-o._cyB)/.18;I<1?h=o._cyH0*(1-I*I):o._cyB=void 0}o._cyH=h,u-=Math.round(h);const[c,d]=G4(o);let m=s||Jt[o.sprite]&&Jt[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!s&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const g=o.status&&o.status.transform;if(g){o._tfT=(o._tfT||0)+1/60;const I=Math.min(1,o._tfT*4),O=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*I*O}else o._tfT=0;const x=o.status||{};let v=l;x.stun&&["quake","roar","dust","firedash","bash"].includes(x.stun.fx)&&(v+=Math.round(Math.sin(n*60+o.id)*1.5));const M=(o.x+o.y)*100+1,S=Eo(o.sprite,c,m,s?of(o.sprite,"idle",n):d);li(i.spr,S,o.sprite,v,u,p,M),i.spr.alpha=f;const w=S&&!s?H4(o,t):"";if(w){if(!i.ol){i.ol=new ie;for(let O=0;O<4;O++)i.ol.addChild(new Ge(_t.EMPTY));Wt.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=M-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==w&&(i.ol.filters=[$4(w)],i.olCol=w);const I=1.3;[[I,0],[-I,0],[0,I],[0,-I]].forEach(([O,U],X)=>li(i.ol.children[X],S,o.sprite,v+O,u+U,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let _=0,T=0;if(o.hitFlash>.06?(_=16777215,T=.75):x.slow?(_=N4[x.slow.fx]||8050943,T=.35):x.root?(_=3836458,T=.3):x.stun&&x.stun.fx==="arcane"?(_=11563263,T=.35):x.burn?(_=16742954,T=.25+.15*Math.sin(n*14+o.id)):g?(_=g.kind==="fire"?16747066:16765514,T=.25+.1*Math.sin(n*6)):x.hex?(_=11565823,T=.2+.08*Math.sin(n*5+o.id)):x.berserk&&(_=16722458,T=.12+.08*Math.sin(n*9+o.id)),T>0&&S?(li(i.glow,S,o.sprite,v,u,p,M+.5),i.glow.tint=_,i.glow.alpha=T*f):i.glow.visible=!1,b.shadowsOn&&!s&&S&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Jt[o.sprite]&&Jt[o.sprite].fly)){const I=Jt[o.sprite];i.shadow.texture=S,i.shadow.visible=!0,i.shadow.anchor.set(I.ax/I.fw,I.ay/I.fh),i.shadow.setFromMatrix(new be(p,0,-.8*p,-.38*p,Math.round(v),Math.round(a))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const R=Jt[o.sprite]&&Jt[o.sprite].gear;let z=0;if(R&&(o.kind==="hero"||o.illusion)){const I=o.illusion?o.owner&&b.mode!=="guest"?e.gearCode(o.owner):0:b.mode==="guest"?o.gear||0:e.gearCode(o),O={w:I&3,h:I>>2&3,a:I>>4&3,b:I>>6&3};for(const U of["a","b","h","w"]){const X=O[U];if((X>0||U==="w")&&R[U]&&R[U].includes(X)){const N=o.sprite+"__"+U+X;if(!i.gear[z]){const Q=new Ge(_t.EMPTY);Wt.entities.addChild(Q),i.gear[z]=Q}li(i.gear[z],Eo(N,c,m,d),N,v,u,p,M+.2+z*.05),i.gear[z].alpha=f,z++}}}if(o.kind==="courier"){const I=o.owner||(o.ownerId?e.units.find(U=>U.id===o.ownerId):null),O=I&&(I.heroKey||I.sprite);if(O&&Jt[O]){if(!i.gear[z]){const N=new Ge(_t.EMPTY);Wt.entities.addChild(N),i.gear[z]=N}const U=Jt[o.sprite],X=Math.sin(n*3+o.id)*1.5;li(i.gear[z],Eo(O,"idle",2,of(O,"idle",n)),O,v,u-(U?U.ay*p:40)+2+X,.3,M+.6),i.gear[z].alpha=f,z++}}for(;z<i.gear.length;z++)i.gear[z].visible=!1}for(const[o,i]of es)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const s of i.gear)s.destroy();i.ol&&i.ol.destroy({children:!0}),es.delete(o)}}let q4=0;const _i=new Map,Gh={},ns=[];let Y4=0;function K4(e,t){const n=e+(t?"o":"c");let r=Gh[n];return r||(r=_t.from(A1(e,t)),r.source.scaleMode="nearest",Gh[n]=r),r}function j4(){const e=b.game,t=e&&e.player,n=++Y4;if(ns.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;ns.push(r);let i=_i.get(r.id);if(!i){const u=new Ge(_t.EMPTY);u.anchor.set(.5,1-1/36),Wt.entities.addChild(u),i={spr:u,seen:0},_i.set(r.id,i)}i.seen=n;const[s,l]=C(r.x,r.y),a=r.until-e.t;i.spr.texture=K4(r.kind,Pl(r,b.T)),i.spr.x=Math.round(s),i.spr.y=Math.round(l),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=a<20?.55+.45*Math.abs(Math.sin(b.T*(a<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of _i)o.seen!==n&&(o.spr.destroy(),_i.delete(r))}function Q4(e,t){const n=b.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=b.mouse.wx,s=b.mouse.wy,l=Math.hypot(i-e.x,s-e.y)>r.WARD_RANGE;if(it(e.x,e.y,r.WARD_RANGE,l?"#ffffff70":"#ffffffb0",null,2,[8,6]),l){const[a,u]=C(e.x,e.y),[f,h]=C(i,s);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-b.T*30,t.beginPath(),t.moveTo(a,u),t.lineTo(f,h),t.stroke(),t.restore()}it(i,s,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),Hg(t,o?"sen":"obs",i,s)}function Z4(e){if(!e.sprite||!Rl(e.sprite))return;const t=Eo(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new Ge(t),r=Jt[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=C(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,Wt.entities.addChild(n),ro.push({spr:n,t:0,vy:20})}function J4(e){const t=b.cam,n=b.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(b.W/2-t.x*t.z+r),s=Math.round(b.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])Wt[m].scale.set(t.z),Wt[m].position.set(i,s);const l=t.x-b.W/2/t.z-2,a=t.y-b.H/2/t.z-2,u=b.W/t.z+4,f=b.H/t.z+4;Va&&(Va.tilePosition.set(-n*14,-n*3),Va.alpha=.45+.12*Math.sin(n*1.3)),qa&&(qa.tilePosition.set(Math.sin(n*.3)*6,0),qa.alpha=.25+.15*Math.sin(n*.9));const h=b.game&&b.game.player,[c,d]=h?C(h.x,h.y):[0,0];for(const m of Sl){const[p,g]=C(m.o.x,m.o.y),x=p>l-200&&p<l+u+200&&g>a-100&&g<a+f+400;if(m.spr.visible=x,!!x){if(m.animated){const v=Eo(m.o.sprite,null,0,Math.floor(n*9+m.o.x));v&&(m.spr.texture=v)}if(m.tree){const v=Jt[m.o.sprite];if(m.spr.alpha=h&&m.o.x+m.o.y>h.x+h.y&&v&&Math.abs(c-p)<v.fw*.42&&d<g&&d>g-v.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,S=(M.x*12.9898+M.y*78.233)%6.28,w=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+b.wind);m.spr.skew.x=-(Math.sin(n*w*1.6+S)*_+Math.sin(n*w*3.1+S*2)*_*.3+b.wind*.02)}}}}b.game&&(t3(e,l,a,u,f,Hf),V4(),j4());for(const m of ro)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=ro.length-1;m>=0;m--)ro[m].t>.8&&(ro[m].spr.destroy(),ro.splice(m,1));eS(),F4(i,s),$f=Uf,sS(),b.game&&b.game.player?lS():qf&&(qf=!1,Hn.getContext("2d").clearRect(0,0,Hn.width,Hn.height))}let qf=!1;const Yf=1;function b2(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&et[r+"_"+n.slice(-1)])}function ku(e,t=1){const n=e.getContext("2d"),r=b.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(b.W/2-r.x*r.z+o)*t,Math.round(b.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const tS={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function eS(){const e=b.game,t=b.T,n=ku(Li,Yf);let r=ku(Ei,Yf);if(_c(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;e3();for(const a of e.zones){if(a.fx==="mon_spores"){Yg(a);continue}if(!b2(a))if(a.once){const u=1-a.t/a.dur;it(a.x,a.y,a.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),it(a.x,a.y,a.r*u,"#ffffff",null,2)}else{const u=a.fx==="spores";if(it(a.x,a.y,a.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&A({type:"puff",x:a.x+y(-1,1)*a.r*.8,y:a.y+y(-1,1)*a.r*.8,r:y(12,22),dur:y(.8,1.4),col:[130,200,80]}),a.fx==="arrows")for(let f=0;f<3;f++){const h=Math.random()*6.28,c=Math.random()*a.r;A({type:"meteor",x:a.x+Math.cos(h)*c,y:a.y+Math.sin(h)*c,dur:.25})}}}if(e.corralOf)for(const a of["blue","red"]){const u=e.corralOf(a);it(u.x,u.y,u.r,"#5a3818","rgba(150,110,60,0.20)",4),it(u.x,u.y,u.r,"#b98a4a",null,2,[5,4]),it(u.x,u.y,u.r-.12,a==="blue"?"#5ab0ff60":"#ff705060",null,1.5)}n3();for(const a of e.runes||[]){const u=window.SIM.RUNES[a.kind];it(a.x,a.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const a of ns)Ng(a,a.team===o.team,e.t);for(const a of e.heroes)a.dead||ze(a)||it(a.x,a.y,(a.r||.35)*(a.scale||1)*.85+.06,a===o?"#ffd24a":Ja[a.team],a===o?"rgba(255,210,74,0.12)":null,a===o?2:1.5);const s=b.hoverUnit;s&&s!==o.target&&!s.dead&&it(s.x,s.y,(s.r||.4)*(s.scale||1)*.85+.08,s.team===o.team?"#ffffff":"#ff6a5a",s.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const a of e.units)if(a.kind==="tower"&&!a.dead&&a.team!==o.team&&(a.target===o||a.targetId===o.id)){const[u,f]=C(a.x,a.y,1.3),[h,c]=C(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(h,c),r.stroke(),r.restore()}o.target&&!o.target.dead&&it(o.target.x,o.target.y,(o.target.r||.4)*(o.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const a of e.units)a.kind==="tower"&&!a.dead&&Math.hypot(a.x-o.x,a.y-o.y)<6.2+2.5&&a.team!==o.team&&it(a.x,a.y,6.2,"#ff5a4a90",null,2,[8,6]);if(nS(o),Q4(o,r),b.hoverAbil){const a=i[o.heroKey].abil[b.hoverAbil];a.range&&it(o.x,o.y,a.range,"#ffe07090",null,2,[6,6]),a.radius&&(a.type==="aoe_self"||a.type==="heal_aoe"||a.type==="channel"&&a.self)&&it(o.x,o.y,a.radius,"#ffe07090",null,2,[6,6])}const l=b.marker;if(l){const a=l.t/.3;a<1&&(r.globalAlpha=1-a*.7,it(l.x,l.y,.16*(1-a)+.04,l.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const a of e.units){if(a.dead||a.kind==="tower"||a.kind==="nexus"||ze(a))continue;a.status&&a.status.slow&&it(a.x,a.y,(a.r||.35)*(a.scale||1)+.12,tS[a.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=a.status&&a.status.transform;if(u){const f=u.kind==="fire",h=.5+.5*Math.sin(t*6);it(a.x,a.y,1+h*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&it(a.x,a.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let c=0;c<3;c++)Math.random()<.7&&F(a.x+y(-.6,.6),a.y+y(-.6,.6),y(.1,1.2),y(-.3,.3),y(-.3,.3),y(1,2.4),.6,f?Bn("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}a.status&&a.status.redbuff&&it(a.x,a.y,.5,"#ff6a4a90",null,1.5,[2,4]),a.status&&a.status.bluebuff&&it(a.x,a.y,.55,"#6ab8ff90",null,1.5,[2,4]),a.aegis&&Math.random()<.2&&F(a.x+y(-.3,.3),a.y+y(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),a.recall&&(it(a.x,a.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&F(a.x+y(-.4,.4),a.y+y(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),$x(a)}}if(r=ku(ki),_c(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const s=window.SIM.RUNES[i.kind],l=Math.sin(t*3+i.id)*.08,[a,u]=C(i.x,i.y,.55+l),f=r.createRadialGradient(a,u,2,a,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,s.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(a,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(a-3,u-3,6,6)}for(const i of ns)$g(i,i.team===o.team);l3(),r3(),rS(r)}i3()}s3(),e&&e.player&&iS(r)}function nS(e){if(!b.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[b.aim.k],n=b.mouse.wx,r=b.mouse.wy;let o=n-e.x,i=r-e.y;const s=Math.hypot(o,i)||1;o/=s,i/=s;const l="#7fe0ff",a="rgba(120,220,255,0.16)";if(t.range&&it(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&b.game.unitTarget&&b.game.unitTarget(t)){const u=b.aimUnit;if(u){const f=(u.r||.4)*(u.scale||1)*.85+.1,h=u.team!==e.team;it(u.x,u.y,f,h?"#ff5a4a":"#7fe0ff",h?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),it(u.x,u.y,f+.12+Math.sin(b.T*8)*.03,h?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(t.type==="proj"||t.type==="dash"||t.type==="hook"){const u=t.type==="dash"?Math.min(s,t.range):t.range,f=(t.width||1)/2,h=-i*f,c=o*f;xu([[e.x+h,e.y+c],[e.x+o*u+h,e.y+i*u+c],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-h,e.y+i*u-c],[e.x-h,e.y-c]],l,a)}else if(t.type==="blink"||t.type==="leap"){const u=Math.min(s,t.range||0),f=e.x+o*u,h=e.y+i*u;xu([[e.x-i*.06,e.y+o*.06],[f-i*.06,h+o*.06],[f+i*.06,h-o*.06],[e.x+i*.06,e.y-o*.06]],l,a),it(f,h,t.radius||.45,l,a,2)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let h=0;h<=12;h++){const c=u-t.angle+2*t.angle*h/12;f.push([e.x+Math.cos(c)*t.range,e.y+Math.sin(c)*t.range])}xu(f,l,a)}else{const u=Math.min(s,t.range||0),f=e.x+o*u,h=e.y+i*u;it(f,h,t.radius||.6,l,a,2)}}function rS(e){const t=b.T;for(const n of b.game.units){if(n.dead||ze(n))continue;const r=n.status||{};if(Hx(e,n),!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const a=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;F(n.x+y(-.3,.3),n.y+y(-.3,.3),a<0?1.1:.2,y(-.2,.2),y(-.2,.2),a,.7,Bn(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,a<0?2:-.5,!0)}r.burn&&Math.random()<.5&&F(n.x+y(-.25,.25),n.y+y(-.25,.25),.3,0,0,1.4,.4,Bn("fire"),3,-1,!0);continue}const o=Jt[n.sprite],i=n.scale||1,[s,l]=C(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let a=0;a<4;a++){const u=a*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(s+Math.cos(u)*f,l+Math.sin(u)*f*.5),e.quadraticCurveTo(s+Math.cos(u+.8)*f*.4,l-10*i,s+Math.cos(u+1.6)*f*.6,l-18*i+Math.sin(t*3+a)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(s+Math.cos(u+1.6)*f*.6-2,l-18*i-2,4,3)}e.restore()}if(r.stun){const a=r.stun.fx||"",u=l-(o?o.ay*.8:50)*i;if(a==="bash")Sg(e,s,u,t,n.id);else if(a==="arcane")for(let f=0;f<3;f++){const h=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(s+Math.cos(h)*16-3,u+Math.sin(h)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(s+Math.cos(h)*16-1,u+Math.sin(h)*5-1,2,2)}else{for(let f=0;f<3;f++){const h=t*5+f*2.09,c=s+Math.cos(h)*14,d=u+Math.sin(h)*4;e.fillStyle="#ffe070",e.fillRect(c-3,d-1,6,2),e.fillRect(c-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(c-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(a))for(let f=0;f<2;f++){const h=-t*4+f*3.14,c=s+Math.cos(h)*20,d=u-6+Math.sin(h)*6;e.fillStyle="#ffffff",e.fillRect(c-3,d,3,2),e.fillRect(c,d-2,3,2)}}a==="splash"&&Math.random()<.3&&F(n.x+y(-.3,.3),n.y+y(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const vs=new Map;function Ya(e,t,n){const r=n+"|"+t+"|"+e;let o=vs.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),s=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,l=Math.max(2,n/4);return i.font=s,o.width=Math.ceil(i.measureText(e).width+l*2+2),o.height=Math.ceil(n*1.35+l*2),i.font=s,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=l,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),vs.size>2e3&&vs.delete(vs.keys().next().value),vs.set(r,o),o}function oS(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(Ja))Ya(e[t].name,n,11),Ya("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)Ya(String(t),"#ffe070",10)}function iS(e){const t=b.game,n=t.player,r=b.cam,o=window.SIM.HEROES,i=r.x-b.W/2/r.z,s=r.y-b.H/2/r.z,l=b.W/r.z,a=b.H/r.z,u=(h,c,d,m,p,g,x)=>{e.fillStyle="#000000c0",e.fillRect(h-1,c-1,d+2,m+2),e.fillStyle=x,e.fillRect(h,c,d,m),e.fillStyle=g,e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(h,c,d,m,p,g=p)=>{const x=Ya(h,m,g),v=p/g,M=x.width*v,S=x.height*v;e.drawImage(x,Math.round(c-M/2),Math.round(d-S/2),M,S)};for(const h of t.units){if(h.dead||ze(h))continue;const c=(h.x-h.y)*B.HW+B.OX,d=(h.x+h.y)*B.HH;if(c<i-60||c>i+l+60||d<s-60||d>s+a+160||(h.kind==="monster"||h.kind==="courier")&&h.hp>=h.maxHp-1&&!h.boss)continue;const m=Jt[h.sprite],g=d-(h.leaping?40:0)-(m?m.ay*(h.scale||1)*(h._fbScale||1)*(h.monster==="serpent"?1.4:.92):50)-6,x=h.kind==="hero"||h.kind==="tower"||h.kind==="nexus"||h.boss,v=x?66:34,M=x?7:4,S=h===n?"#3ccf4e":h.team==="neutral"?"#e8c040":Ja[h.team];if(e.globalAlpha=n&&h.team!==n.team&&h._va!==void 0?Math.min(1,h._va):1,u(c-v/2,g,v,M,h.hp/h.maxHp,S,"#1a0e0e"),h.kind==="minion"&&h.team!==n.team&&h.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(c-v/2-1.5,g-1.5,v+3,M+3)),h.kind==="hero")for(let w=1;w<6;w++)e.fillStyle="#00000080",e.fillRect(c-v/2+v*w/6,g,1,M);if(h.shield>0&&b.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(c-v/2+h.hp/h.maxHp*v,g,Math.min(v*(1-h.hp/h.maxHp),h.shield/h.maxHp*v),M)),h.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(c-v/2-16,g-2,14,M+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(c-v/2-16,g-2,14,M+4),f(String(h.level),c-v/2-9,g+M/2+1,"#ffe070",10),h!==n&&f((h.human?"★ ":"")+o[h.heroKey].name,c,g-9,Ja[h.team],11);const w=t.castInfo&&t.castInfo(h);w&&u(c-v/2,g+M+3,v,4,w.p,w.kind===2?"#7ad0ff":w.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const h of t.texts){if(h.dst!==void 0&&h.dst!==n.id&&h.src!==n.id&&!(n.target&&h.dst===n.target.id))continue;const[c,d]=C(h.x,h.y,1.1+h.t*.9);e.globalAlpha=Math.max(0,1-h.t/1.1);const m=h.t<.12?1.4-h.t*3:1;f(st.t(String(h.txt)),c+(h.id%7-3)*3,d,h.col,(h.big?20:14)*m,h.big?20:14)}e.globalAlpha=1}function sS(){let e=0;const t=b.T,n=(r,o,i,s,l,a)=>{let u=ba[e];u||(u=new Ge(vl),u.anchor.set(.5),u.blendMode="add",Wt.lightsCam.addChild(u),ba[e]=u),e++;const[f,h]=C(r,o,i);u.visible=!0,u.x=f,u.y=h,u.width=u.height=s*(2+.35*$f),u.tint=l,u.alpha=Math.min(1,a*(1+.7*$f))};for(const r of bl)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of bl)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&F(r.x+y(-.1,.1),r.y+y(-.1,.1),.9,y(-.2,.2),y(-.2,.2),y(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(b.game){for(const r of b.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),ze(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*B.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of ns)Pl(r,t)&&n(r.x,r.y,x0(r.kind)/B.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of b.game.zones)r.once&&!b2(r)&&n(r.x,r.y,0,r.r*B.HW*1.4,13143295,.35);for(const r of b.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<ba.length;e++)ba[e].visible=!1}let So=null;function aS(){if(So)return So;So=document.createElement("canvas"),So.width=So.height=128;const e=So.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),So}function lS(){const t=Math.ceil(b.W/4),n=Math.ceil(b.H/4),r=b.cam;(Hn.width!==t||Hn.height!==n)&&(Hn.width=t,Hn.height=n),qf=!0;const o=Hn.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of b.visionSrc){const[s,l]=C(i.x,i.y),a=((s-r.x)*r.z+b.W/2)/4,u=((l-r.y)*r.z+b.H/2)/4,f=hd(i.kind)*B.HW*Math.SQRT2*r.z/4;a<-f||u<-f/2||a>t+f||u>n+f/2||o.drawImage(aS(),a-f,u-f/2,f*2,f)}}function uS(e){if(!Rl("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,s=Math.sqrt(n())*r.r*.85,l=r.x+Math.cos(i)*s,a=r.y+Math.sin(i)*s;Vf({x:l,y:a,sprite:"prop_bush",tree:!1},!1);const f=Sl[Sl.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function S2(){for(const[,e]of es){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}es.clear();for(const e of ro)e.spr.destroy();ro.length=0;for(const[,e]of _i)e.spr.destroy();_i.clear(),ns.length=0}const fS=performance.now(),Xs=[],Gs=[],Ai={};let Lu=0,ui=0,Uu=0,Du=0,Kf=0,wa=0,Ka=0,P0=0,jf={};const El=()=>Math.round((performance.now()-fS)/100)/10;function cS(e){jf={...jf,...e}}function go(e,t){Gs.push([El(),e,String(t).slice(0,300)]),Gs.length>3e3&&Gs.splice(0,500)}function hS(e){Lu++,e>ui&&(ui=e),e>33&&Uu++,e>50&&Du++;const t=performance.now();if(t-wa>=1e3){const n=wa?(t-wa)/1e3:1;Xs.push([El(),Math.round(Lu/n),Math.round(ui),Uu,Du,Math.round(Kf/n),Math.round(Ka)]),Xs.length>2400&&Xs.shift(),ui>100&&go("hitch",`cuadro de ${Math.round(ui)} ms`),Lu=0,ui=0,Uu=0,Du=0,Kf=0,wa=t}}function dS(){Kf++}function mS(e){Ka=Ka?Ka*.8+e*.2:e}function pS(e,t){(Ai[e]=Ai[e]||[]).push([El(),t]),Ai[e].length>400&&Ai[e].shift()}function yS(){const e=Xs.slice(-10);if(!e.length)return null;const t=n=>Math.round(e.reduce((r,o)=>r+o[n],0)/e.length);return{fps:t(1),worst:Math.max(...e.map(n=>n[2])),slow:e.reduce((n,r)=>n+r[3],0),snaps:t(5),ping:t(6),lt:P0,err:Gs.filter(n=>n[1]==="error").length}}try{new PerformanceObserver(t=>{for(const n of t.getEntries())P0++,n.duration>120&&go("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}function w2(){const e=navigator,t={...jf,browser:navigator.userAgent,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,cores:e.hardwareConcurrency,memGB:e.deviceMemory,durationS:El(),longTasks:P0},n=["LANELINGS LOG",JSON.stringify(t),"","# por segundo: t, fps, peor ms, cuadros>33ms, >50ms, fotos/s, ping ms"];for(const r of Xs)n.push(r.join(","));n.push("","# eventos: t, tipo, texto");for(const r of Gs)n.push(r.join(" | "));for(const r in Ai){n.push("","# invitado "+r+" (cada 10 s): t, resumen");for(const[o,i]of Ai[r])n.push(o+" "+JSON.stringify(i))}return n.join(`
`)}function gS(){const e=w2(),t="lanelings-log-"+new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}setInterval(()=>{try{localStorage.setItem("lanelings_lastlog",w2().slice(-4e5))}catch{}},3e4);let Te,an,Ln,Z,ft,Yn="dragon",Xr="blue",J=null,Bh=0,Xo=0,Xu=0,_a=!1,Ti=!1,Qf=!1,An={},fo=null,co=!1,Nh=0,$h=0,xS=0,Gu=performance.now(),Hh=-9,Zf=!1;const MS=["buff","aoe_self","heal_aoe","illusion","global"],vS=e=>MS.includes(e.type)||e.type==="channel"&&e.self,bS=["facil","normal","dificil"],Cs=new Map;let Jf=!1;function It(e){if(e==null)return"";if(e=String(e),Jf||s0.value==="es"||!window.I18N)return e;const t=Cs.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Cs.size>5e3&&Cs.clear(),Cs.set(e,r),r}function SS(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=an[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=Te.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of Te.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(Te&&Te.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=Te.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function _2(e,t,n,r=1,o=1){if(t===void 0||n===void 0){Z.play(e,r,0,.03,o);return}const[i,s]=C(t,n),l=b.cam,a=(i-l.x)*l.z,u=(s-l.y)*l.z;let f=Math.hypot(a/b.W,u/b.H);const h=b.game&&b.game.player;if(h&&!h.dead){const[c,d]=C(h.x,h.y);f=Math.min(f,Math.hypot((i-c)*l.z/b.W,(s-d)*l.z/b.H))}Z.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,a/(b.W*.6))),.03,o)}function I0(e,t,n,r){if(!Z.babble)return;const o=Math.max(0,Ln.indexOf(e))*7+3;if(n===void 0||r===void 0){Z.babble(o,t,.5,0);return}const[i,s]=C(n,r),l=b.cam,a=(i-l.x)*l.z,u=(s-l.y)*l.z,f=Math.hypot(a/b.W,u/b.H),h=.5*Math.max(0,1-f*1.1);h>.05&&Z.babble(o,t,h,Math.max(-1,Math.min(1,a/(b.W*.6))))}let Wh=0;function Go(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function ke(e,t="#ffe7b0",n=1.5){b.game&&b.game.msg(e,t,n)}async function wS(e){Te=window.SIM,an=Te.HEROES,Ln=Te.HERO_KEYS,Z=window.AUDIO,ft=new window.Net,V2();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(s0.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");bS.includes(r)&&(pn.value={...pn.value,difficulty:r})}catch{}try{b.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}SS(),st.babble=I0,st.sfx=_2,st.say=Go,st.play=(r,o)=>Z.play(r,o??1),st.t=It,st.banner=(r,o,i,s,l)=>{const a=Xi.value.slice(-3);Xi.value=[...a,{id:++xS,title:It(r),color:o,killerKey:i,victimKey:s,big:l}]},q2(jn),T2(),pn.value={...pn.value,volMaster:Z.volume?Z.volume("m"):1,volMusic:Z.volume?Z.volume("mu"):1,volSfx:Z.volume?Z.volume("s"):1,soundStyle:Z.style?Z.style():"epic",shadows:b.shadowsOn},await cg(r=>up.value=r),await L4(e),D4(),OS(),oS(),await Promise.all([E4(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,Y2(),K2().then(()=>Promise.all([j2(Ln),Q2(Ln)])),document.fonts?document.fonts.ready:null]);try{const r=new Te.Game(window.MAP,{humans:[]});uS(r._makeBushes())}catch(r){console.warn(r)}LS(),US();const[t,n]=C(B.N/2,B.N/2);b.cam.x=t,b.cam.y=n,await Z2(),De.value="menu",ft.init().then(r=>{dd.value=!!r}).catch(()=>{}),ft.onChange=()=>Ns(),QS(),requestAnimationFrame(R2)}function A2(e){const t=Te.PASSIVES&&Te.PASSIVES[e];return t?{name:It(t[0]),desc:It(t[1])}:{name:"",desc:""}}function T2(){J2.value=Ln.map(e=>{const t=an[e];return{key:e,name:t.name,title:It(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:It(t.abil[n].name),desc:It(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:A2(e)}}),tp.value=Te.ITEMS.map(e=>({id:e.id,name:It(e.name),desc:It(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:Te.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let Vh="";function z0(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(go("error",t),t===Vh)return;Vh=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const O0="v9.4.2";{const e=document.createElement("div");e.id="build-tag",e.textContent=O0,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>z0(e.error||e.message));window.addEventListener("unhandledrejection",e=>z0(e.reason));let C2=performance.now(),Aa=0;function qh(){const e=performance.now();if(e-C2<150){Aa=0;return}const t=Aa?Math.min(.05,(e-Aa)/1e3):1/30;Aa=e,b.T=e/1e3;try{const n=De.value;n==="pick"&&J&&(D2(t),qo()),n==="lobby"&&X2(t),n==="play"&&b.game&&P2(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=qh,e=!0}catch{}e||setInterval(qh,33)}function R2(e){C2=performance.now(),De.value==="play"&&hS(e-Gu);const t=Math.min(.05,(e-Gu)/1e3);Gu=e,b.T=e/1e3;try{const n=De.value;n==="pick"&&J&&(D2(t),qo()),n==="lobby"&&X2(t),n==="play"&&b.game?PS(t):AS(t),b.marker&&(b.marker.t+=t,b.marker.t>.3&&(b.marker=null)),Jx(t),J4(t),($h-=t)<=0&&b.game&&($h=.1,jS()),(Kh-=t)<=0&&(Kh=.5,_S()),n!=="play"&&(Yh-=t)<=0&&(Yh=1,ft.available&&(op.value=ft.openGames()))}catch(n){console.error(n),z0(n)}requestAnimationFrame(R2)}let Yh=0,Kh=0;function _S(){if(!Z.setAmbient)return;const e=Un(b.W/2,b.H/2),t=B.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[a,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-a,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),s=Math.max(0,1-i/11),l=Math.max(0,1-o*.7-s)*.9;Z.setAmbient(o,l,s)}function AS(e){const t=b.T*.05,n=B.N/2+Math.cos(t)*12,r=B.N/2+Math.sin(t*1.3)*12,[o,i]=C(n,r);b.cam.x+=(o-b.cam.x)*Math.min(1,e*.5),b.cam.y+=(i-b.cam.y)*Math.min(1,e*.5),b.cam.z=b.cam.tz=1.25}let Rs="",Bu=!1,Ta=0;const Ca={};let jh=0,Qh=0,TS=0,Zh=0,Ra={x:-99,y:-99,z:0};const Jh={};function CS(){if(b.mode!=="guest"||b.T-Zh<.4)return;const e=Un(b.W/2,b.H/2),t=Math.round(b.cam.z*100)/100;Math.hypot(e.x-Ra.x,e.y-Ra.y)<2&&t===Ra.z||(Zh=b.T,Ra={x:e.x,y:e.y,z:t},ft.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function RS(){if(!(Bu||!ft.code)){Bu=!0,Ta||(Ta=performance.now(),ke("Se cortó la conexión. Reconectando...","#ffb070",3)),go("net","conexion perdida, reconectando");try{await ft.rejoin(),Ta=0,ke("¡Reconectado!","#9fe0a0",2.5),Z.play("announce",.4),go("net","reconectado")}catch{performance.now()-Ta>9e4?(ke("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),ft.lost=!1,ft.code=null):await new Promise(t=>setTimeout(t,2500))}Bu=!1}}function P2(e){const t=b.game;HS(e);{const n=cd(t.t).phase;n!==Rs&&(Rs&&n==="dusk"&&(ke("Cae la noche: se ve menos lejos","#a8b8ff",3),Z.play("announce",.35)),Rs&&n==="dawn"&&(ke("Amanece","#ffe0a0",2.5),Z.play("announce",.3)),Rs=n)}if(b.mode==="guest"){if(ft.lost&&RS(),CS(),b.T-Qh>2&&(Qh=b.T,ft.send(["ping",Math.round(performance.now())])),b.T-jh>10){jh=b.T;const n=yS();n&&ft.send(["tel",n])}t.guestTick(e),ft.hostState&&ft.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(b.mode==="host")for(const[n,r]of ft.pullCommands())r[0]==="cam"?Jh[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?Ca[n]=r[1]:r[0]==="tel"?pS(n,r[1]):t.input(n,r);if(!(dr.value&&b.mode==="solo")&&!r0()&&t.update(e),b.mode==="host"&&(Xo-=e,Xo<=0)){const n=!!(ft.game&&ft.game.sendSnapTo);Xo=Math.max(0,Xo+(n?ft.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(l=>l.human),o=tn>=0?Math.round(tn*10)/10:br?0:-1,i=t.winner?"end":"play",s=r.map(l=>[l.human,l.team,l.heroKey]);if(n){const l=TS++%8===0;for(const a of ft.guests()){const u=t.slots[a.id],f=t.snapshot(16e3,r,{forId:a.id,meId:u?u.id:0,team:u?u.team:a.team,hot:[u&&{x:u.x,y:u.y,r:12},Jh[a.id]],full:l});f.I=o,Ca[a.id]!==void 0&&(f.pe=Ca[a.id],delete Ca[a.id]),ft.publishTo(a.id,i,f,l?s:null)}ft.publishMeta(i,s)}else{const l=t.snapshot(3300,r);l.I=o,ft.publish(i,l,s)}}}}function PS(e){P2(e);const t=b.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&Z4(o);(td&&!n.dead||!n.dead&&Math.hypot(n.x-ed,n.y-nd)>8)&&wl(),td=!!n.dead,ed=n.x,nd=n.y,IS(e),b.mouse.wx=Un().x,b.mouse.wy=Un().y,b.mouse.rd&&!t.winner&&!b.aim&&b.mouse.inWorld&&(Xu-=e,Xu<=0&&(Xu=.12,O2(!1))),Zx(),ES(e),!Qf&&t.t>7.5&&(Qf=!0,Go("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;Z.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),zS(e),b.hoverUnit=!b.mouse.md&&!b.aim&&b.mouse.inWorld?z2():null,b.aimUnit=b.aim&&b.mouse.inWorld?E0():null,DS(),Zf=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Zf&&b.T-Hh>3&&(Hh=b.T,Z.play("deny",.5)),(Nh-=e)<=0&&(Nh=1/15,Za())}let Nu=0,td=!1,ed=0,nd=0;function IS(e){const t=b.game.player,n=b.cam,r=b.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(b.camFollow||An[" "])){const[o,i]=C(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||Hu();Nu=i&&(r.x<2||r.x>b.W-2||r.y<2||r.y>b.H-2)||An.ArrowLeft||An.ArrowRight||An.ArrowUp||An.ArrowDown?Math.min(1,Nu+e/.2):0;const a=2e3*(.35+.65*Nu)*e/n.z;An.ArrowLeft&&(n.x-=a),An.ArrowRight&&(n.x+=a),An.ArrowUp&&(n.y-=a),An.ArrowDown&&(n.y+=a),i&&(r.x<2&&(n.x-=a),r.x>b.W-2&&(n.x+=a),r.y<2&&(n.y-=a),r.y>b.H-2&&(n.y+=a))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-b.W/2)/n.z+n.x,i=(r.y-b.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(b.camFollow||An[" "])||(n.x=o-(r.x-b.W/2)/n.z,n.y=i-(r.y-b.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*B.N*B.HW,n.x)),n.y=Math.max(0,Math.min(2*B.N*B.HH,n.y))}function rd(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function zS(e){const t=b.game,n=t.player;b.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&yd[o.kind]);for(const o of t.wards||[])o.team===n.team&&b.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=rd(o.x,o.y);let s=0;for(const l of b.visionSrc){const a=hd(l.kind);if(l.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-l.x,o.y-l.y)>2.5||Math.abs(o.x-l.x)>=a||Math.abs(o.y-l.y)>=a)continue;const u=Math.hypot(o.x-l.x,o.y-l.y);if(u<a&&(!i||rd(l.x,l.y)||u<2.2)&&(s=Math.max(s,Math.min(1,(a-u)/1.4)),s>=1))break}s>0&&t.bushHidden(o,n.team)&&(s=0),o._va=(o._va||0)+(s-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}b.visible=r}let Bs=null;function I2(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function OS(){Bs===null&&(Bs=[er.water_mask,er.water_calm].filter(e=>e&&e.naturalWidth).map(I2).filter(Boolean))}function FS(e,t){Bs===null&&(Bs=[er.water_mask,er.water_calm].filter(i=>i&&i.naturalWidth).map(I2).filter(Boolean));const[n,r]=C(e,t);for(const i of Bs){const s=Math.floor(n/4),l=Math.floor(r/4);if(s>=0&&l>=0&&s<i.w&&l<i.h&&i.d[(l*i.w+s)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function ES(e){const t=b.game,n=t.player,r=b.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||ze(o)||o.dash)continue;const[i,s]=C(o.x,o.y);if(Math.abs(i-r.x)>b.W/r.z||Math.abs(s-r.y)>b.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const l=FS(o.x,o.y);if(l==="water"){A({type:"ring",x:o.x+y(-.1,.1),y:o.y+y(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let a=0;a<3;a++)F(o.x,o.y,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else l==="dirt"&&Math.random()<.5&&F(o.x,o.y,.05,y(-.3,.3),y(-.3,.3),y(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?Z.play("step_"+l,.32,0,80):Math.random()<.5&&_2("step_"+l,o.x,o.y,.12))}}function xe(e){b.mode==="guest"?(ft.send(e),b.game.predict(e)):b.game.input(b.localId,e)}function z2(){const e=b.game,t=e.player,n=b.cam,r=window.META;let o=null,i=1e9;const s=Un();for(const l of e.units){if(l.dead||ze(l)||l.team!==t.team&&l._va!==void 0&&l._va<.4||l.team===t.team&&!(l.kind==="minion"&&e.deniable(l,t))||b.mode!=="guest"&&l.team!==t.team&&!e.targetable(l,t))continue;const a=r[l.sprite],[u,f]=C(l.x,l.y),h=(u-n.x)*n.z+b.W/2,c=(f-n.y)*n.z+b.H/2,d=(l.scale||1)*n.z*(l.monster==="serpent"?1.45:1),m=l.kind==="tower"||l.kind==="nexus"||l.boss,p=(a?a.ay*(l.kind==="minion"?.72:.85):50)*d,g=(m?34:l.kind==="minion"?11:l.kind==="monster"?16:18)*d,x=7;let v=1e9;if(Math.abs(b.mouse.x-h)<g+x&&b.mouse.y<c+5*d+x&&b.mouse.y>c-p-x)v=Math.abs(b.mouse.x-h)/(g+x)+Math.abs(b.mouse.y-(c-p/2))/(p+x);else if(l.kind==="hero"||m){const M=Math.hypot(s.x-l.x,s.y-l.y);M<l.r*(l.scale||1)+.2&&(v=1.5+M)}v>1e8||(l.kind==="hero"&&(v-=.4),v<i&&(i=v,o=l))}return o}function kS(){const e=b.cam,t=window.META;let n=null,r=1e9;for(const o of b.game.units){if(o.dead||ze(o)||o.kind==="hero"||o.team!==b.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,s]=C(o.x,o.y),l=(i-e.x)*e.z+b.W/2,a=(s-e.y)*e.z+b.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,h=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,c=(f?34:14)*u;if(Math.abs(b.mouse.x-l)<c&&b.mouse.y<a+6*u&&b.mouse.y>a-h){const d=Math.abs(b.mouse.x-l)+Math.abs(b.mouse.y-(a-h/2));d<r&&(r=d,n=o)}}return n}function F0(){const e=b.cam,t=window.META;let n=null,r=1e9;for(const o of b.game.heroes){if(o.dead||ze(o))continue;const[i,s]=C(o.x,o.y),l=(i-e.x)*e.z+b.W/2,a=(s-e.y)*e.z+b.H/2,u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;if(Math.abs(b.mouse.x-l)<f&&b.mouse.y<a+10*e.z&&b.mouse.y>a-u){const h=Math.abs(b.mouse.x-l)+Math.abs(b.mouse.y-(a-u/2));h<r&&(r=h,n=o)}}return n}function O2(e){const t=Un();if(!e&&_a)return;const n=e?z2():null;if(e&&(fo=n&&n.kind==="hero"&&n!==b.game.player&&n.team===b.game.player.team?n.id:null),n){_a=!0,xe(["a",n.id]),Z.play("click",.3),b.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=b.game.player,o=(b.game.wards||[]).find(i=>i.team!==r.team&&b.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){_a=!0,xe(["dw",o.id]),Z.play("click",.3),b.marker={x:o.x,y:o.y,t:0,atk:!0};return}}_a=!1,xe(["m",t.x,t.y]),e&&(b.marker={x:t.x,y:t.y,t:0},Z.play("move",.25),b.T-Wh>7&&Math.random()<.5&&(Wh=b.T,I0(b.game.player.heroKey,"ok")))}function F2(e){const t=b.game.player;if(t.ranks&&!t.ranks[e]){ke(t.points>0&&b.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),Z.play("deny",.6);return}if((t.cds[e]||0)>.05){ke("En enfriamiento","#bbbbbb",.8),Z.play("deny",.5);return}const n=an[t.heroKey].abil[e],r=Un();if(fo=null,vS(n)){xe(["c",e,r.x,r.y]),b.aim=null;return}if(b.aim&&b.aim.k===e){L2();return}b.aim={k:e},Z.play("aim",.3)}function E2(){if(!b.tpAim)return;const e=Un();xe(["u","tp_scroll",e.x,e.y]),Z.play("click",.4),b.tpAim=!1}function k2(){if(!b.wardAim)return;const e=Un();xe(["u",b.wardAim.id,e.x,e.y]),Z.play("click",.4),b.wardAim=null}function E0(){const e=b.game&&b.game.player;if(!e||!b.aim)return null;const t=an[e.heroKey].abil[b.aim.k];if(!b.game.unitTarget(t))return null;const n=F0();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function L2(){if(!b.aim)return;const e=b.game.player,t=an[e.heroKey].abil[b.aim.k];if(b.game.unitTarget(t)){const r=E0();if(!r){ke(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),Z.play("deny",.4);return}xe(["c",b.aim.k,r.x,r.y,r.id]),b.aim=null,b.marker={x:r.x,y:r.y,t:0,atk:r.team!==e.team};return}const n=Un();xe(["c",b.aim.k,n.x,n.y]),b.aim=null}function t0(e){const t=b.game&&b.game.player;t&&(b.game.canRankUp(t,e)?(xe(["l",e]),Z.play("levelup",.5)):(ke(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),Z.play("deny",.4)))}function wl(){const e=b.game&&b.game.player;if(!e)return;const[t,n]=C(e.x,e.y);b.cam.x=t,b.cam.y=n-30}function e0(){b.cam.tz=a0,b.cam.zoomMsgT=1.2}function od(){if(De.value!=="play"){De.value==="menu"&&(dr.value=!dr.value);return}b.aim||b.wardAim||b.tpAim||Di.value?(b.aim=null,b.wardAim=null,b.tpAim=!1,Di.value=!1):dr.value=!dr.value}function LS(){const e=R0();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),ep(e),fp(od),window.addEventListener("mousemove",t=>{Hu()||(b.mouse.md&&(b.cam.x-=(t.clientX-b.mouse.x)/b.cam.z,b.cam.y-=(t.clientY-b.mouse.y)/b.cam.z),b.mouse.x=t.clientX,b.mouse.y=t.clientY,b.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{De.value==="play"&&(b.cam.tz=Math.max(.75,Math.min(3,b.cam.tz*(t.deltaY>0?.9:1.1))),b.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&e0()}),e.addEventListener("mousedown",t=>{Z.init(),Z.startMusic(),window.VOICE&&window.VOICE.init(),Hu()||(b.mouse.x=t.clientX,b.mouse.y=t.clientY,De.value==="play"&&!r0()&&np(t.clientX,t.clientY));const n=b.game;if(!(De.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){b.mouse.md=!0,t.preventDefault();return}if(!dr.value){if(t.button===0&&t.altKey){jn.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(b.wardAim){k2();return}if(b.tpAim){E2();return}if(b.aim){L2();return}if(b.amove){b.amove=!1;const o=Un();xe(["am",o.x,o.y]),b.marker={x:o.x,y:o.y,t:0,atk:!0},Z.play("click",.3);return}const r=F0()||kS();fo=r&&r!==n.player?r.id:null}if(t.button===2){if(b.aim&&(b.aim=null),b.wardAim){b.wardAim=null;return}if(b.tpAim){b.tpAim=!1;return}b.amove=!1,b.mouse.rd=!0,O2(!0)}}}}),window.addEventListener("mouseup",t=>{t.button===2&&(b.mouse.rd=!1),t.button===1&&(b.mouse.md=!1),t.button===0&&(b.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;Z.init();const r=b.game,o=t.key.toUpperCase();if(De.value==="play"&&r&&r.player&&t.key==="Enter"){md.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){t.shiftKey?Z.toggleMusic():Z.toggleMute();return}if(t.key==="Escape"&&De.value==="menu"){dr.value=!dr.value;return}if(De.value!=="play"||!r||!r.player)return;if(r0()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&b.mode==="solo"&&($2(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){od();return}if(t.key==="Tab"){t.repeat||(Ps.value=!Ps.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){t0(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(Ti=!Ti,Z.play("aim",.4)):(ke("No tienes puntos de habilidad","#bbbbbb",1),Z.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&Ti){Ti=!1,t0(o);return}if("QWER".includes(o)&&o.length===1){b.wardAim=null,F2(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){jn.useItem(+t.key-1),t.preventDefault();return}const s=!t.ctrlKey&&!t.altKey&&!t.metaKey?cp(hp(t)):null;if(s){s.startsWith("item")?jn.useItem(+s.slice(4)):s==="recall"?jn.recall():jn.useCons(s),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){wl(),t.preventDefault();return}if(t.key==="F2"){jn.courier(),t.preventDefault();return}if(t.key.startsWith("Arrow")){An[t.key]=!0,t.preventDefault();return}if(o==="P"){Di.value=!Di.value,Z.play("click",.4);return}if(o==="K"){Z.setStyle&&(jn.setSoundStyle(Z.style()==="epic"?"pixel":"epic"),ke("Sonido: "+(Z.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){b.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){jn.spell(o);return}o==="S"&&xe(["s"]),o==="Y"&&(b.camFollow=!b.camFollow),t.key==="0"&&e0(),t.key===" "&&(An[" "]=!0,wl(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete An[t.key]}),window.addEventListener("blur",()=>{Ps.value=!1,An={},b.mouse.md=!1,b.mouse.rd=!1,b.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{b.mouse.inWorld=!1})}const hr={};function US(){const e=(r,o,i,s)=>{const l=document.createElement("canvas");l.width=40,l.height=40;const a=l.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,h)=>[...f].forEach((c,d)=>{c!==" "&&(a.fillStyle=c==="X"?"#0a0610":c==="L"?o:c==="M"?r:i,a.fillRect(d*2,h*2,2,2))})),s){for(let c=0;c<7;c++)a.fillStyle="#0a0610",a.fillRect(18+c*2-1,26-c*2-1,4,4);for(let c=0;c<7;c++)a.fillStyle=c<5?"#e8eef8":"#ffd24a",a.fillRect(18+c*2,26-c*2,2,2);a.fillStyle="#ffd24a",a.fillRect(17,23,6,2)}return`url(${l.toDataURL()}) 0 0, auto`};hr.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),hr.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),hr.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);hr.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=hr.normal}let id="";function DS(){const e=b.game&&b.game.player,t=b.hoverUnit,n=b.aim||b.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==id&&(id=n,R0().style.cursor=hr[n],document.documentElement.style.cursor=hr.normal,xd(hr[n]))}function U2(){const e=b.mode==="solo"?"local":ft.myPeer||"host";return J&&J.h&&J.h[e]}function ja(e){const t=e?[{id:ft.myPeer||"host",team:Xr},...ft.guests().map(s=>({id:s.id,team:s.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const s of t)r[s.team]<5&&(n[s.id]=[s.team,r[s.team]++,0]);const o=[];let i=0;for(const s of["blue","red"])for(let l=r[s];l<5;l++)o.push({team:s,slot:l,at:2+Math.random()*24,q:i++});o.sort((s,l)=>s.q%2-l.q%2||s.q-l.q),o.forEach((s,l)=>s.q=l),J={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Yn||Ln[0],locked:!1,prep:-1,online:!!e},e&&(b.mode="host"),De.value="pick",Z.setMode("menu"),Z.play("announce",.6),qo()}function n0(e,t){if(!J||!e)return;const n=t===void 0;if(n&&b.mode==="guest"){J.locked||(ft.send(["lock",e]),Yn=e,J.pending=e,Z.play("levelup",.7));return}const r=n?b.mode==="solo"?"local":ft.myPeer||"host":t,o=J.h[r];if(!o||o[2])return;const[i,s]=o,l=a=>J.blue.includes(a)||J.red.includes(a);if(l(e))if(n){Z.play("deny",.6);return}else{const a=Ln.filter(u=>!l(u));e=a[Math.random()*a.length|0]}J[i][s]=e,o[2]=1,n&&(J.locked=!0,Yn=e,J.view=e,Z.play("levelup",.7),I0(e,"select"))}function sd(e){const t=J[e],n=[...J.blue,...J.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(s=>!t.some(l=>l&&an[l].role===s));let o=Ln.filter(s=>!n.includes(s));const i=o.filter(s=>r.includes(an[s].role));return i.length&&(o=i),o[Math.random()*o.length|0]||Ln[Math.random()*Ln.length|0]}function D2(e){if(b.mode==="guest")return XS();if(J.online){for(const[n,r]of ft.pullCommands())r[0]==="lock"&&n0(r[1],n);(Bh-=e)<=0&&(Bh=.25,ft.publishDraft({t:Math.round(J.t*10)/10,p:Math.round(J.prep*10)/10,b:J.blue,r:J.red,h:J.h}))}if(J.prep>=0){J.prep-=e,J.prep<=0&&(J.online?GS():G2());return}if(!J.online){if(J.locked){J.bt=(J.bt||0)+e;for(const n of J.order)!n.done&&J.bt>=(co?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,J[n.team][n.slot]=sd(n.team),Z.play("click",.35))}J.locked&&J.order.every(n=>n.done)&&(J.prep=co?1.5:3,Z.play("announce",.7));return}if(Object.values(J.h).every(n=>n[2])){J.bt=(J.bt||0)+e;for(const n of J.order)!n.done&&J.bt>=.3+n.q*.28&&(n.done=!0,J[n.team][n.slot]=sd(n.team),Z.play("click",.35));J.order.every(n=>n.done)&&(J.prep=4,Z.play("announce",.7))}}function XS(){const e=ft.hostState;if(e&&e.st==="play"&&e.S){J=null,Yo.value=null,B2();return}const t=e&&e.D;if(!t)return;const n=J.blue.join()+J.red.join();J.t=t.t,J.prep=t.p,J.blue=t.b,J.red=t.r,J.h=t.h,n!==J.blue.join()+J.red.join()&&Z.play("click",.35);const r=U2();r&&r[2]?(J.locked=!0,Yn=J[r[0]][r[1]],J.view=Yn||J.view):J.pending&&performance.now()-(J.sentAt||0)>1e3&&(J.sentAt=performance.now(),ft.send(["lock",J.pending]))}function qo(){if(!J){Yo.value=null;return}const e=U2(),t=b.mode==="solo"?"local":ft.myPeer||"host";Yo.value={online:!!J.online,t:J.t,prep:J.prep,blue:[...J.blue],red:[...J.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(J.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!J.locked,pending:J.pending||null,view:J.view}}function X2(e){ft.role==="guest"&&ft.hostState&&ft.hostState.st==="pick"&&ft.hostState.D&&(b.mode="guest",b.localId=ft.myPeer,J={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Yn||Ln[0],locked:!1,prep:-1,online:!0},De.value="pick",Z.play("announce",.6)),ft.role==="guest"&&ft.hostState&&ft.hostState.st==="play"&&ft.hostState.S&&B2(),ft.role==="host"&&(Xo-=e,Xo<=0&&(Xo=1.5,ft.setChoice(Yn,Xr))),(ad-=e)<=0&&(ad=.3,Ns())}let ad=0;function Ns(){const e=[];if(ft.role==="host"){e.push({name:It("Tú (anfitrión)"),team:Xr,me:!0});for(const t of ft.guests())e.push({name:It("Invitado"),team:t.team,me:!1})}else ft.role==="guest"&&(e.push({name:It("Tú"),team:Xr,me:!0}),ft.hostState&&e.push({name:It("Anfitrión"),team:ft.hostState.team,me:!1}));un.value={...un.value,role:ft.role,code:ft.code,myTeam:Xr,players:e,hostFound:!!ft.hostState}}function G2(){b.mode="solo",b.localId="local";const e=J?{blue:J.blue.slice(1).filter(Boolean),red:J.red.filter(Boolean)}:null;b.game=new Te.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Yn}],localId:"local",picks:e,difficulty:pn.value.difficulty,aram:co}),co&&(co=!1,b.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),J=null,Yo.value=null,k0(),b.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function GS(){b.mode="host",b.localId=ft.myPeer||"host";const e=[],t={blue:[],red:[]};if(J){for(const n in J.h){const[r,o]=J.h[n];e.push({id:n,team:r,hero:J[r][o]||Ln[0]})}for(const n of["blue","red"])J[n].forEach((r,o)=>{r&&!Object.values(J.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}J=null,Yo.value=null,b.game=new Te.Game(window.MAP,{humans:e,localId:b.localId,picks:t,difficulty:pn.value.difficulty}),ft.lastSeq={};for(const n of ft.guests())ft.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of ft.guests()){const r=b.game.slots[n.id];r&&(r.cid=n.cid)}ft.onGuests=(n,r)=>{const o=b.game;if(o){for(const i of r.left||[]){const s=o.slots[i.peer];s&&!s.bot&&(s.bot=!0,s.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||BS(o,i)}},k0(),b.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function BS(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(s=>s.bot&&!s.isPlayer&&!s.away&&(!i||s.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,ft.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),go("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function B2(){b.mode="guest",b.localId=ft.myPeer,b.game=new Te.Game(window.MAP,{humans:[],localId:b.localId}),b.game.units=[],b.game.heroes=[],b.game.player=null,ft.onSnapshot=e=>{b.game&&b.mode==="guest"&&(dS(),e.pe&&mS(performance.now()-e.pe),ft.myPeer&&(b.localId=ft.myPeer),b.game.applySnapshot(e,b.localId))},ft.hostState&&ft.hostState.S&&b.game.applySnapshot(ft.hostState.S,b.localId),k0()}const zr={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let Qa=0,tn=-1,Ui=[],NS=0,br=!1,_l=0;function r0(){return tn>=0}function N2(){const e=b.game,t=e.player;dg(e.heroes.map(l=>l.sprite||l.heroKey));const n=l=>{const a=an[l.heroKey]||{};return{key:l.heroKey,name:a.name||l.heroKey,title:a.title||"",role:a.role||"",me:l===t,human:!!l.human}},r=l=>e.heroes.filter(a=>a.team===l).sort((a,u)=>(u===t?1:0)-(a===t?1:0)||(u.human?1:0)-(a.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){br=!0;return}br=!1;const s=_l;_l=0,l0.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++NS,off:s,canSkip:b.mode==="solo"},tn=s,Qa=0,Ui=[[.15,()=>Go("blue_team")],...o.map((l,a)=>[zr.blue+a*zr.step+.05,()=>Z.play("reveal",.8)]),[zr.red-.35,()=>Go("red_team")],...i.map((l,a)=>[zr.red+a*zr.step+.05,()=>Z.play("reveal",.8)]),[zr.vs-.02,()=>{Z.play("vsslam",1),Go("versus")}],[zr.go,()=>{Z.play("warhorn",.9),Go("battle"),Z.setMode("battle")}]].filter(l=>l[0]>=s-.05),Z.setMode("menu")}function $S(){const e=ft.hostState&&ft.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?tn<0?(_l=t,br=!0):Math.abs(tn-t)>.6&&(tn=t):(tn>=0||br)&&(br=!1,tn>=0&&kl())}function HS(e){if(b.mode==="guest"&&$S(),br&&b.game&&N2(),tn<0)return;const t=performance.now()/1e3,n=Qa?t-Qa:0;for(Qa=t,tn+=n>2?.05:n||e;Ui.length&&Ui[0][0]<=tn;)Ui.shift()[1]();tn>=zr.end&&kl()}function kl(){br=!1,!(tn<0)&&(tn=-1,Ui=[],l0.value=null,wl(),Z.setMode("battle"))}function $2(){tn<0||b.mode!=="solo"||(tn<zr.go&&(Z.play("warhorn",.7),Go("battle")),kl())}function k0(){xd(hr.normal);try{const e=b.game,t=e&&e.player;cS({build:O0,mode:b.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:b.gpuName,softGpu:b.softGpu,difficulty:pn.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),go("game","empieza la partida ("+b.mode+")")}catch{}if(P1(),S2(),De.value="play",Xi.value=[],Z.setMode("battle"),Qf=!1,b.mode==="guest"?br=!1:N2(),fo=null,b.aim=null,b.amove=!1,Ti=!1,b.cam.z=b.cam.tz=a0,b.game.player){const[e,t]=C(b.game.player.x,b.game.player.y);b.cam.x=e,b.cam.y=t-30}}async function ld(){sp(),co=!1,Rs="",o0=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}tn=-1,Ui=[],br=!1,_l=0,l0.value=null,dr.value=!1,Di.value=!1,Ps.value=!1,b.aim=null,J=null,Yo.value=null,b.mode!=="solo"&&await ft.leave(),b.game=null,b.mode="solo",S2(),P1(),gd.value=null,pd.value=null,Xi.value=[],De.value="menu",Z.setMode("menu"),R0().style.cursor=hr.normal}function WS(e){const t=an[e.heroKey],n=(e.items||[]).map(o=>Te.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,s)=>i+(s[o]||0),0);return[{label:It("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:It("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:It("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:It("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:It("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:It("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:It("Alcance"),value:String(t.range)}]}const H2=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function W2(e){return(e.items||[]).filter(t=>!Te.ITEM[t].line)}function ud(e){return e.slots?e.slots.slice(0,6):W2(e).concat([null,null,null,null,null,null]).slice(0,6)}function $u(e){const t=b.game,n=an[e.heroKey],r=t.player,o=e===r,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(b.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const s=(e.items||[]).map((p,g)=>{const x=Te.ITEM[p],v=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:b.mode==="guest"?(e.itemCdLeft||[])[g]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:It(x.name),desc:It(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:v}}),l=e.slots||W2(e).concat([null,null,null,null,null,null]).slice(0,6),a=s.filter(p=>!p.line),u=new Set,f=l.map((p,g)=>{if(!p)return null;const x=a.findIndex((v,M)=>v.id===p&&!u.has(M));return x<0?null:(u.add(x),{...a[x],slot:g})}).filter(Boolean),h=s.filter(p=>p.line),c=H2.map(([p,,g])=>{const x=Te.ITEM[p];return{id:p,key:ap(lp(p)),count:e[g]||0,max:x.max,name:It(x.name),desc:It(x.desc)}}),d=e.team!==r.team,m=o||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:It(n.title),role:It(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:A2(e.heroKey),xpFrac:b.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:Te.RECALL_T,stash:(e.stash||[]).slice(),courier:o?VS(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?It("Pergamino de teleporte"):It(n.abil[p.key]?n.abil[p.key].name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const g=n.abil[p],x=e.ranks?e.ranks[p]:1;return{key:p,name:It(g.name),desc:It(g.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:g.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,p)),dmg:g.dmg?Math.round(g.dmg*t.abilMul(e,p)):null,type:g.type,fx:g.fx}}),items:f,gearItems:h,cons:c,gear:b.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:It("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:It("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:WS(e),human:!!e.human,isMe:o,status:i}}function VS(e){const t=b.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id)),n=b.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-b.game.t)):0;return t?{state:t.state||"home",n:b.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function qS(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:It(r),value:o});return{id:e.id,heroKey:e.sprite,name:It(t),title:It(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let o0=!1;function Za(){const e=!!(b.game&&b.game.player&&b.game.player.dead);if(e!==o0){o0=e;const s=document.getElementById("world");s&&(s.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=b.game,n=t.player;if(!n)return;const r=fo?mt(fo):null;r&&(r.dead&&r.kind!=="hero"||ze(r))&&(fo=null);const o=t.msgs.filter(s=>!s.to||s.to===b.localId).slice(-3).map(s=>({id:s.id,text:It(s.txt),color:s.col,t:s.t,dur:s.dur})),i=(t.chat||[]).filter(s=>s.scope==="all"||s.team===n.team).slice(-8).map(s=>{Jf=s.human;const l=It(s.txt);return Jf=!1,{id:s.id,scope:s.scope,team:s.team,heroKey:s.hero,heroName:an[s.hero]?an[s.hero].name:"?",human:!!s.human,text:l,age:t.t-s.t}});gd.value={me:$u(n),inspected:r?r.kind==="hero"?$u(r):qS(r):null,allies:t.heroes.filter(s=>s.team===n.team&&s!==n).map($u),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(s=>({id:s.id,killerKey:s.killerKey||null,killerName:s.killerKey?an[s.killerKey].name:It(s.killerName),killerTeam:s.killerTeam,victimKey:s.victimKey,victimTeam:s.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:Zf,inShop:t.inShop(n),levelMode:Ti,aim:b.aim?b.aim.k:null,amove:b.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(b.cam.tz/a0*100),zoomMsg:b.cam.zoomMsgT,camFollow:b.camFollow,scoreboard:t.heroes.map(s=>({id:s.id,heroKey:s.heroKey,name:an[s.heroKey].name,team:s.team,level:s.level,gear:b.mode==="guest"?s.gear||0:t.gearCode(s),kills:s.kills,deaths:s.deaths,assists:s.assists,cs:s.cs,gold:s.gold!==void 0&&(s.team===n.team||b.mode!=="guest")?Math.floor(s.gold):null,items:s.items||[],human:!!s.human,isMe:s===n,dead:!!s.dead,respawn:Math.ceil(s.respawn||0)})),mode:b.mode,netLost:!!ft.lost,deathRecap:n.dead?YS(n):i0=null}}let i0=null,fd=null;function YS(e){return i0!==e&&(i0=e,fd=KS(e)),fd}function KS(e){const t=(e.dmgLog||[]).filter(r=>b.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&an[r.h]?an[r.h].name:It(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function jS(){const e=b.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=B,i=2*n*r,s=2*n*o,l=(c,d)=>{const[m,p]=C(c,d);return{x:m/i,y:p/s}},a=[];for(const c of e.units){if(c.dead||ze(c))continue;const d=l(c.x,c.y);a.push({x:d.x,y:d.y,team:c.team,kind:c.kind,heroKey:c.heroKey,me:c===t,human:!!c.human})}const u=b.cam,f=b.W/u.z,h=b.H/u.z;pd.value={units:a,camps:e.camps.filter(c=>c.alive).map(c=>({...l(c.x,c.y),boss:!!c.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-h/2)/s,x1:(u.x+f/2)/i,y1:(u.y+h/2)/s},vision:b.visionSrc.map(c=>({...l(c.x,c.y),r:yd[c.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(c=>c.team===t.team&&e.t-c.t<3).map(c=>({...l(c.x,c.y),t:e.t-c.t,kind:c.kind})),wards:(e.wards||[]).filter(c=>e.wardSeenBy(c,t.team)).map(c=>({...l(c.x,c.y),kind:c.kind,mine:c.team===t.team}))}}const jn={skipIntro(){$2()},shopDenied(e){ke(e,"#ffb070",2),Z.play("deny",.5)},playVsBots(){Z.init(),Z.startMusic(),ja(!1)},playAram(){Z.init(),Z.startMusic(),co=!0,ja(!1)},async hostOnline(){un.value={...un.value,msg:It("Creando sala...")};try{await ft.host(Yn,Xr),De.value="lobby",un.value={...un.value,msg:""},Ns()}catch{un.value={...un.value,msg:It("No se pudo crear la sala")}}},async joinOnline(e){un.value={...un.value,msg:It("Entrando...")};try{if(await ft.join(e,Yn,Xr),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}De.value="lobby",un.value={...un.value,msg:""},Ns()}catch{un.value={...un.value,msg:It("No se pudo entrar")}}},setLobbyTeam(e){Xr=e,ft.setChoice(Yn,Xr),Ns()},startOnlinePick(){ja(!0)},async leaveLobby(){await ft.leave(),De.value="menu"},viewHero(e){J&&!J.locked&&(J.view=e,Z.play("aim",.3),qo())},lockHero(e){n0(e),qo()},randomHero(){const e=Ln.filter(t=>!J.blue.includes(t)&&!J.red.includes(t));n0(e[Math.random()*e.length|0]),qo()},backToMenu(){co=!1,J&&J.online?ld():(J=null,Yo.value=null,De.value="menu")},buy(e){const t=b.game&&b.game.player;if(!t)return;const n=b.game.inShop(t),r=window.SIM.ITEM[e];if(b.mode!=="guest"&&!(n?b.game.canBuy(t,e):b.game.canBuyRemote(t,e))){ke(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<r.cost?"Te falta oro":r.consumable?"Ya llevas el máximo de ese":r.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),Z.play("deny",.5);return}xe(["i",e]),Z.play("buy",.6),n||ke("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=b.game&&b.game.player;if(!e)return;const t=b.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id));if(!t){ke(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),Z.play("deny",.4);return}const[n,r]=C(t.x,t.y);b.cam.x=n,b.cam.y=r-30,b.camFollow=!1,xe(["cr","go"]),Z.play("click",.4)},sell(e){const t=b.game&&b.game.player;if(!t||!t.items)return;const n=typeof e=="number"?ud(t)[e]:e;if(n){if(!b.game.inShop(t)){ke("Solo puedes vender en tu base","#ffb070",1.4),Z.play("deny",.4);return}xe(["v",n]),Z.play("buy",.4)}},useCons(e){const t=b.game&&b.game.player;if(!t||t.dead)return;const n=H2.find(r=>r[0]===e);if(n){if(!t[n[2]]){ke("No tienes: "+Te.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),Z.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){xe(["u",e]),Z.play("heal",.5);return}if(e==="tp_scroll"){if(b.aim=null,b.wardAim=null,b.tpAim){E2();return}b.tpAim=!0,Z.play("aim",.3),ke("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(b.aim=null,b.wardAim&&b.wardAim.id===e){k2();return}b.wardAim={id:e},Z.play("aim",.3)}},useItem(e){const t=b.game&&b.game.player,n=t&&ud(t)[e];if(!t||e<0||!n){Z.play("deny",.4);return}const r=Te.ITEM[n];if(!(r&&r.active)){ke("Este objeto no se usa: es pasivo","#bbbbbb",1.2),Z.play("deny",.4);return}if((b.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-b.game.t))>.05){ke("En enfriamiento","#bbbbbb",.8),Z.play("deny",.4);return}xe(["u",n,b.mouse.wx,b.mouse.wy]),Z.play("blink",.5)},moveItem(e,t){const n=b.game&&b.game.player;if(!(!n||e===t)){if(b.mode==="guest"&&n.slots){const r=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=r}xe(["mv",e,t]),Z.play("click",.35),Za()}},rankUp(e){t0(e)},castKey(e){b.game&&b.game.player&&F2(e)},spell(e){const t=b.game&&b.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){ke(It(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),Z.play("deny",.5);return}const r=Un();xe(["sp",e,r.x,r.y]),Z.play(e==="D"?"blink":"wind",.6)},recall(){const e=b.game&&b.game.player;e&&xe(e.recall?["bc"]:["b"])},inspect(e){fo=e&&b.game&&b.game.player&&e===b.game.player.id?null:e,Za()},centerOn(e){const t=e==null?b.game&&b.game.player:mt(e);if(!t)return;const[n,r]=C(t.x,t.y);b.cam.x=n,b.cam.y=r-30,b.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:s}=B,l=e*(2*r*o)-s,a=t*(2*r*i),u=(l/o+a/i)/2,f=(a/i-l/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&b.tpAim){xe(["u","tp_scroll",u,f]),Z.play("click",.4),b.tpAim=!1;return}n==="right"?(xe(["m",u,f]),b.marker={x:u,y:f,t:0}):(b.cam.x=e*2*r*o,b.cam.y=t*2*r*i,b.mouse.mmDrag=!0)}},minimapDrag(e,t){const{N:n,HW:r,HH:o}=B;b.cam.x=Math.max(0,Math.min(1,e))*2*n*r,b.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!b.game||!b.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:s,HH:l,OX:a}=B,u=t*(2*i*s)-a,f=n*(2*i*l);r=(u/s+f/l)/2,o=(f/l-u/s)/2}else{const i=Un();r=i.x,o=i.y}xe(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&b.game&&xe(["t",e,n]),md.value=null},bannerDone(e){Xi.value=Xi.value.filter(t=>t.id!==e)},quitMatch(){ld()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};Z.setVolume&&Z.setVolume(n[e],t),pn.value={...pn.value,[e]:t}},setSoundStyle(e){Z.setStyle&&Z.setStyle(e),pn.value={...pn.value,soundStyle:e}},setShadows(e){b.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}pn.value={...pn.value,shadows:e}},setCamFollow(e){b.camFollow=e},resetZoom(){e0()},downloadLog(){go("user","descarga el registro"),gS()},openOptions(){dr.value=!0},setCursorLock(e){ip(e),Za()},setLang(e){s0.value=e,Cs.clear();try{localStorage.setItem("moba_lang",e)}catch{}T2()},setDifficulty(e){pn.value={...pn.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){Z.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;Z.play(n[0],n[1])},t:e=>It(e)};function QS(){const e=new URLSearchParams(location.search);window.__g=()=>({S:b,draft:J,st:rp,act:jn,net:ft,cmd:xe,pickHeroAt:F0,aimHero:E0,w2s:C});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const s=async()=>{await jn.joinOnline(o),De.value==="menu"&&++i<5&&setTimeout(s,2500)},l=a=>{dd.value?s():a>0?setTimeout(()=>l(a-1),300):un.value={...un.value,msg:It("No se pudo entrar")}};l(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){ja(!1),e.get("view")&&(J.view=e.get("view")),qo();return}if(n==="menu")return;Yn=n,G2(),e.get("intro")||kl(),e.get("allbots")&&(b.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)b.game.update(1/30),b.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(b.camFollow=!0),e.get("shop")&&(Di.value=!0),e.get("tab")&&(Ps.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[s,l]=C(o,i);b.cam.x=s,b.cam.y=l}e.get("mx")&&(b.mouse.x=+e.get("mx"),b.mouse.y=+e.get("my"))}const rw=Object.freeze(Object.defineProperty({__proto__:null,BUILD:O0,startClient:wS},Symbol.toStringTag,{value:"Module"}));export{Wy as $,o1 as A,tu as B,ie as C,mo as D,Ce as E,Yt as F,u1 as G,Uy as H,Wn as I,Gy as J,lg as K,ug as L,be as M,tc as N,Vl as O,mr as P,nc as Q,nl as R,Cl as S,_t as T,ju as U,ry as V,Ye as W,zd as X,y0 as Y,i1 as Z,fg as _,ra as a,Ft as a0,bn as a1,m0 as a2,Hp as a3,nw as a4,Zp as a5,ew as a6,zo as a7,Ni as a8,h0 as a9,x1 as aa,_p as ab,Tp as ac,rw as ad,Mo as b,Ci as c,fn as d,xo as e,Ht as f,xy as g,Bt as h,Tl as i,Jd as j,p0 as k,e1 as l,d0 as m,G0 as n,Sn as o,Ap as p,el as q,Xp as r,Pd as s,ho as t,gn as u,On as v,Gr as w,Z0 as x,Ge as y,Cy as z};
