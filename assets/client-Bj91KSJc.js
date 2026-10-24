const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-CEzZVlAX.js","./webworkerAll-DqPzfQq9.js","./CanvasPool--Fpq5PCj.js","./colorToUniform-DE0dtT7s.js","./_commonjsHelpers-CqkleIqs.js","./App-DM3CVwQG.js","./index-BfL3LzU7.js","./index-BNd-XBp9.css","./WebGPURenderer-CX53WXUY.js","./SharedSystems-BkuFR8c4.js","./WebGLRenderer-PThVVutC.js"])))=>i.map(i=>d[i]);
import{S as M,u as ht,q as Ae,w as T,r as J,M as N,v as y,x as k0,T as Ma,y as D0,z as xm,l as Mf,p as an,b as vm,A as bm,B as Mm,C as Sm,D as _m,E as wm,j as Ne,n as X0,h as Am,s as Tm,F as Cm,G as lu,H as Rm,t as Yi,c as Qe,I as Pm,f as No,o as Im,Z as Sf,J as zm,i as li,K as G0,L as In,d as Mo,m as N0,V as B0,e as $0,N as Om,O as _f,g as Ki,P as W0,a as Fm,Q as Em}from"./App-DM3CVwQG.js";import{_ as Sa}from"./index-BfL3LzU7.js";import{g as H0}from"./_commonjsHelpers-CqkleIqs.js";const Z={},Ce={},Te={};var _e=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(_e||{});const uu=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},ws=(e,t)=>uu(e).priority??t,Vr={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(uu).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(uu).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(s=>t(s)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,s)=>ws(s.value,n)-ws(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>ws(i,n)-ws(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},Lm={extension:{type:_e.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Sa(()=>import("./browserAll-CEzZVlAX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},Um={extension:{type:_e.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Sa(()=>import("./webworkerAll-DqPzfQq9.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class Le{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new Le(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var el={exports:{}},tc;function km(){return tc||(tc=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,c,h){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,c||l,h),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function s(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],f,c;if(this._eventsCount===0)return u;for(c in f=this._events)t.call(f,c)&&u.push(n?c.slice(1):c);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},a.prototype.listeners=function(u){var f=n?n+u:u,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var h=0,d=c.length,m=new Array(d);h<d;h++)m[h]=c[h].fn;return m},a.prototype.listenerCount=function(u){var f=n?n+u:u,c=this._events[f];return c?c.fn?1:c.length:0},a.prototype.emit=function(u,f,c,h,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var g=this._events[p],x=arguments.length,b,v;if(g.fn){switch(g.once&&this.removeListener(u,g.fn,void 0,!0),x){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,h),!0;case 5:return g.fn.call(g.context,f,c,h,d),!0;case 6:return g.fn.call(g.context,f,c,h,d,m),!0}for(v=1,b=new Array(x-1);v<x;v++)b[v-1]=arguments[v];g.fn.apply(g.context,b)}else{var S=g.length,_;for(v=0;v<S;v++)switch(g[v].once&&this.removeListener(u,g[v].fn,void 0,!0),x){case 1:g[v].fn.call(g[v].context);break;case 2:g[v].fn.call(g[v].context,f);break;case 3:g[v].fn.call(g[v].context,f,c);break;case 4:g[v].fn.call(g[v].context,f,c,h);break;default:if(!b)for(_=1,b=new Array(x-1);_<x;_++)b[_-1]=arguments[_];g[v].fn.apply(g[v].context,b)}}return!0},a.prototype.on=function(u,f,c){return i(this,u,f,c,!1)},a.prototype.once=function(u,f,c){return i(this,u,f,c,!0)},a.prototype.removeListener=function(u,f,c,h){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return s(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!h||m.once)&&(!c||m.context===c)&&s(this,d);else{for(var p=0,g=[],x=m.length;p<x;p++)(m[p].fn!==f||h&&!m[p].once||c&&m[p].context!==c)&&g.push(m[p]);g.length?this._events[d]=g.length===1?g[0]:g:s(this,d)}return this},a.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&s(this,f)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}(el)),el.exports}var Dm=km();const qr=H0(Dm),Xm=Math.PI*2,Gm=180/Math.PI,ui=Math.PI/180;class nr{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new nr(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return nl.x=0,nl.y=0,nl}}const nl=new nr;class ge{constructor(t=1,n=0,r=0,o=1,i=0,s=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,s){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=s,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new nr;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new nr;const r=this.a,o=this.b,i=this.c,s=this.d,a=this.tx,l=this.ty,u=1/(r*s+i*-o),f=t.x,c=t.y;return n.x=s*u*f+-i*u*c+(l*i-a*s)*u,n.y=r*u*c+-o*u*f+(-l*r+a*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,s=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=s*n-this.ty*r,this.ty=s*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,s=t.d,a=t.tx,l=t.ty,u=n.a,f=n.b,c=n.c,h=n.d;return this.a=r*u+o*c,this.b=r*f+o*h,this.c=i*u+s*c,this.d=i*f+s*h,this.tx=a*u+l*c+n.tx,this.ty=a*f+l*h+n.ty,this}setTransform(t,n,r,o,i,s,a,l,u){return this.a=Math.cos(a+u)*i,this.b=Math.sin(a+u)*i,this.c=-Math.sin(a-l)*s,this.d=Math.cos(a-l)*s,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,s=t.pivot,a=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(a+l);return u<1e-5||Math.abs(Xm-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(s.x*n+s.y*o),t.position.y=this.ty+(s.x*r+s.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,s=t*o-n*r;return this.a=o/s,this.b=-n/s,this.c=-r/s,this.d=t/s,this.tx=(r*this.ty-o*i)/s,this.ty=-(t*this.ty-n*i)/s,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new ge;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Bm.identity()}static get shared(){return Nm.identity()}}const Nm=new ge,Bm=new ge,Qr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Zr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Jr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],to=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],fu=[],V0=[],As=Math.sign;function $m(){for(let e=0;e<16;e++){const t=[];fu.push(t);for(let n=0;n<16;n++){const r=As(Qr[e]*Qr[n]+Jr[e]*Zr[n]),o=As(Zr[e]*Qr[n]+to[e]*Zr[n]),i=As(Qr[e]*Jr[n]+Jr[e]*to[n]),s=As(Zr[e]*Jr[n]+to[e]*to[n]);for(let a=0;a<16;a++)if(Qr[a]===r&&Zr[a]===o&&Jr[a]===i&&to[a]===s){t.push(a);break}}}for(let e=0;e<16;e++){const t=new ge;t.set(Qr[e],Zr[e],Jr[e],to[e],0,0),V0.push(t)}}$m();const be={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Qr[e],uY:e=>Zr[e],vX:e=>Jr[e],vY:e=>to[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>fu[e][t],sub:(e,t)=>fu[e][be.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?be.S:be.N:Math.abs(t)*2<=Math.abs(e)?e>0?be.E:be.W:t>0?e>0?be.SE:be.SW:e>0?be.NE:be.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=V0[be.inv(t)];o.tx=n,o.ty=r,e.append(o)}},Ts=[new nr,new nr,new nr,new nr];class Un{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Un(0,0,0,0)}clone(){return new Un(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const a=this.x,l=this.y,u=r*(1-o),f=r-u,c=a-u,h=a+i+u,d=l-u,m=l+s+u,p=a+f,g=a+i-f,x=l+f,b=l+s-f;return t>=c&&t<=h&&n>=d&&n<=m&&!(t>p&&t<g&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const O=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>O}const r=this.left,o=this.right,i=this.top,s=this.bottom;if(o<=r||s<=i)return!1;const a=Ts[0].set(t.left,t.top),l=Ts[1].set(t.left,t.bottom),u=Ts[2].set(t.right,t.top),f=Ts[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(n.a*n.d-n.b*n.c);if(c===0||(n.apply(a,a),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(a.x,l.x,u.x,f.x)<=r||Math.min(a.x,l.x,u.x,f.x)>=o||Math.max(a.y,l.y,u.y,f.y)<=i||Math.min(a.y,l.y,u.y,f.y)>=s))return!1;const h=c*(l.y-a.y),d=c*(a.x-l.x),m=h*r+d*i,p=h*o+d*i,g=h*r+d*s,x=h*o+d*s;if(Math.max(m,p,g,x)<=h*a.x+d*a.y||Math.min(m,p,g,x)>=h*f.x+d*f.y)return!1;const b=c*(a.y-u.y),v=c*(u.x-a.x),S=b*r+v*i,_=b*o+v*i,w=b*r+v*s,P=b*o+v*s;return!(Math.max(S,_,w,P)<=b*a.x+v*a.y||Math.min(S,_,w,P)>=b*f.x+v*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new Un),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const rl={default:-1};function fn(e="default"){return rl[e]===void 0&&(rl[e]=-1),++rl[e]}const ec={},dn="8.0.0",h4="8.3.4";function It(e,t,n=3){if(ec[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),ec[t]=!0}const q0=()=>{};function nc(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function rc(e){return!(e&e-1)&&!!e}function Wm(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const oc=Object.create(null);function Hm(e){const t=oc[e];return t===void 0&&(oc[e]=fn("resource")),t}const Y0=class K0 extends qr{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...K0.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){It(dn,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Hm(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Y0.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Vm=Y0;const j0=class Q0 extends qr{constructor(t={}){super(),this.options=t,this.uid=fn("textureSource"),this._resourceType="textureSource",this._resourceId=fn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Q0.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Vm(Wm(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=fn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=fn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=rc(this.pixelWidth)&&rc(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};j0.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let mn=j0;class wf extends mn{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}wf.extension=_e.TextureSource;const ic=new ge;class qm{constructor(t,n){this.mapCoord=new ge,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],s=t[o+1];n[o]=i*r.a+s*r.c+r.tx,n[o+1]=i*r.b+s*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(ic.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(ic));const i=t.source,s=this.uClampFrame,a=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return s[0]=(t.frame.x+a+l)/i.width,s[1]=(t.frame.y+a+l)/i.height,s[2]=(t.frame.x+t.frame.width-a+l)/i.width,s[3]=(t.frame.y+t.frame.height-a+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class bt extends qr{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:s,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=fn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Un,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new mn,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:c}=this._source;this.frame.width=f,this.frame.height=c}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=s,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new qm(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,s=n.y/o,a=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=a/2,c=l/2,h=i+f,d=s+c;u=be.add(u,be.NW),t.x0=h+f*be.uX(u),t.y0=d+c*be.uY(u),u=be.add(u,2),t.x1=h+f*be.uX(u),t.y1=d+c*be.uY(u),u=be.add(u,2),t.x2=h+f*be.uX(u),t.y2=d+c*be.uY(u),u=be.add(u,2),t.x3=h+f*be.uX(u),t.y3=d+c*be.uY(u)}else t.x0=i,t.y0=s,t.x1=i+a,t.y1=s,t.x2=i+a,t.y2=s+l,t.x3=i,t.y3=s+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return It(dn,"Texture.baseTexture is now Texture.source"),this._source}}bt.EMPTY=new bt({label:"EMPTY",source:new mn({label:"EMPTY"})});bt.EMPTY.destroy=q0;bt.WHITE=new bt({source:new wf({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});bt.WHITE.destroy=q0;function Ym(e,t,n,r){const{width:o,height:i}=n.orig,s=n.trim;if(s){const a=s.width,l=s.height;e.minX=s.x-t._x*o-r,e.maxX=e.minX+a,e.minY=s.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const sc=new ge;class Br{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=sc,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Un);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=sc,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const s=i.a,a=i.b,l=i.c,u=i.d,f=i.tx,c=i.ty;let h=this.minX,d=this.minY,m=this.maxX,p=this.maxY,g=s*t+l*n+f,x=a*t+u*n+c;g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*r+l*n+f,x=a*r+u*n+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*t+l*o+f,x=a*t+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),g=s*r+l*o+f,x=a*r+u*o+c,g<h&&(h=g),x<d&&(d=x),g>m&&(m=g),x>p&&(p=x),this.minX=h,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a:s,b:a,c:l,d:u,tx:f,ty:c}=t;let h=s*n+l*r+f,d=a*n+u*r+c;this.minX=h,this.minY=d,this.maxX=h,this.maxY=d,h=s*o+l*r+f,d=a*o+u*r+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=s*n+l*i+f,d=a*n+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY,h=s*o+l*i+f,d=a*o+u*i+c,this.minX=h<this.minX?h:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=h>this.maxX?h:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Br(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,s=this.minY,a=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,c=o.c,h=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const g=t[p],x=t[p+1],b=u*g+c*x+d,v=f*g+h*x+m;i=b<i?b:i,s=v<s?v:s,a=b>a?b:a,l=v>l?v:l}this.minX=i,this.minY=s,this.maxX=a,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var Km={grad:.9,turn:360,rad:360/(2*Math.PI)},cr=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},Xe=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},kn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},Z0=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},ac=function(e){return{r:kn(e.r,0,255),g:kn(e.g,0,255),b:kn(e.b,0,255),a:kn(e.a)}},ol=function(e){return{r:Xe(e.r),g:Xe(e.g),b:Xe(e.b),a:Xe(e.a,3)}},jm=/^#([0-9a-f]{3,8})$/i,Cs=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},J0=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),s=i-Math.min(t,n,r),a=s?i===t?(n-r)/s:i===n?2+(r-t)/s:4+(t-n)/s:0;return{h:60*(a<0?a+6:a),s:i?s/i*100:0,v:i/255*100,a:o}},th=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),s=r*(1-n),a=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,a,s,s,l,r][u],g:255*[l,r,r,a,s,s][u],b:255*[s,s,l,r,r,a][u],a:o}},lc=function(e){return{h:Z0(e.h),s:kn(e.s,0,100),l:kn(e.l,0,100),a:kn(e.a)}},uc=function(e){return{h:Xe(e.h),s:Xe(e.s),l:Xe(e.l),a:Xe(e.a,3)}},fc=function(e){return th((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},ji=function(e){return{h:(t=J0(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},Qm=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Zm=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Jm=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,tp=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cu={string:[[function(e){var t=jm.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?Xe(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?Xe(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=Jm.exec(e)||tp.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:ac({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Qm.exec(e)||Zm.exec(e);if(!t)return null;var n,r,o=lc({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(Km[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return fc(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return cr(t)&&cr(n)&&cr(r)?ac({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!cr(t)||!cr(n)||!cr(r))return null;var s=lc({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return fc(s)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!cr(t)||!cr(n)||!cr(r))return null;var s=function(a){return{h:Z0(a.h),s:kn(a.s,0,100),v:kn(a.v,0,100),a:kn(a.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return th(s)},"hsv"]]},cc=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},ep=function(e){return typeof e=="string"?cc(e.trim(),cu.string):typeof e=="object"&&e!==null?cc(e,cu.object):[null,void 0]},il=function(e,t){var n=ji(e);return{h:n.h,s:kn(n.s+100*t,0,100),l:n.l,a:n.a}},sl=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},hc=function(e,t){var n=ji(e);return{h:n.h,s:n.s,l:kn(n.l+100*t,0,100),a:n.a}},hu=function(){function e(t){this.parsed=ep(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return Xe(sl(this.rgba),2)},e.prototype.isDark=function(){return sl(this.rgba)<.5},e.prototype.isLight=function(){return sl(this.rgba)>=.5},e.prototype.toHex=function(){return t=ol(this.rgba),n=t.r,r=t.g,o=t.b,s=(i=t.a)<1?Cs(Xe(255*i)):"","#"+Cs(n)+Cs(r)+Cs(o)+s;var t,n,r,o,i,s},e.prototype.toRgb=function(){return ol(this.rgba)},e.prototype.toRgbString=function(){return t=ol(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return uc(ji(this.rgba))},e.prototype.toHslString=function(){return t=uc(ji(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=J0(this.rgba),{h:Xe(t.h),s:Xe(t.s),v:Xe(t.v),a:Xe(t.a,3)};var t},e.prototype.invert=function(){return Qn({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Qn(il(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Qn(il(this.rgba,-t))},e.prototype.grayscale=function(){return Qn(il(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Qn(hc(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Qn(hc(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Qn({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):Xe(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=ji(this.rgba);return typeof t=="number"?Qn({h:t,s:n.s,l:n.l,a:n.a}):Xe(n.h)},e.prototype.isEqual=function(t){return this.toHex()===Qn(t).toHex()},e}(),Qn=function(e){return e instanceof hu?e:new hu(e)},dc=[],np=function(e){e.forEach(function(t){dc.indexOf(t)<0&&(t(hu,cu),dc.push(t))})};function rp(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(s){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(s?.closest){var f=this.toRgb(),c=1/0,h="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(a=f,l=i[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));p<c&&(c=p,h=m)}return h}},t.string.push([function(s){var a=s.toLowerCase(),l=a==="transparent"?"#0000":n[a];return l?new e(l).toRgb():null},"name"])}np([rp]);const fi=class Gi{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Gi)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,s)=>i===n[s]);if(t!==null&&n!==null){const i=Object.keys(t),s=Object.keys(n);return i.length!==s.length?!1:i.every(a=>t[a]===n[a])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=Gi._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const s=t;n=(s>>16&255)/255,r=(s>>8&255)/255,o=(s&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Gi.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const s=Qn(t);s.isValid()&&({r:n,g:r,b:o,a:i}=s.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Gi||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};fi.shared=new fi;fi._temp=new fi;fi.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Ke=fi;const op={cullArea:null,cullable:!1,cullableChildren:!0};class Af{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class ip{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Af(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const _a=new ip,sp={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){It("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function ap(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const lp={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let s=n-1;s>=e;s--){const a=this.children[s];a&&(o.push(a),a.parent=null)}ap(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let s=0;s<o.length;++s)this.emit("childRemoved",o[s],this,s),o[s].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||It(dn,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class mc{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class up{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return _a.get(r.maskClass,t)}return t}returnMaskEffect(t){_a.return(t)}}const du=new up;Vr.handleByList(_e.MaskEffect,du._effectClasses);const fp={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),du.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=du.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new mc);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new mc),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},cp={label:null,get name(){return It(dn,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){It(dn,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},cn=new Af(ge),ci=new Af(Br);function eh(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=cn.get().identity(),r=Tf(e,o)):r=ge.IDENTITY,nh(e,n,r,t),o&&cn.return(o),n.isValid||n.set(0,0,0,0),n}function nh(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=cn.get(),o.appendFrom(e.localTransform,n));const i=t,s=!!e.effects.length;if(s&&(t=ci.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let a=0;a<e.children.length;a++)nh(e.children[a],t,o,r)}if(s){for(let a=0;a<e.effects.length;a++)e.effects[a].addBounds?.(t);i.addBounds(t,ge.IDENTITY),ci.return(t)}r||cn.return(o)}function Tf(e,t){const n=e.parent;return n&&(Tf(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function hp(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,s=t>>8&255,a=t&255,l=n*i/255|0,u=r*s/255|0,f=o*a/255|0;return(l<<16)+(u<<8)+f}const pc=16777215;function yc(e,t){return e===pc?t:t===pc?e:hp(e,t)}function ta(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const dp={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=Tf(this,cn.get().identity());return e.appendFrom(this.localTransform,n),cn.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?ta(this.renderGroup.worldColor):this.parentRenderGroup?ta(yc(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=yc(t,n.localColor),n=n.parent;return ta(t)}};let al=0;const gc=500;function Sr(...e){al!==gc&&(al++,al===gc?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function rh(e,t,n){return t.clear(),n||(n=ge.IDENTITY),oh(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function oh(e,t,n,r,o){let i;if(o)i=cn.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=cn.get(),i.appendFrom(l,n)}const s=t,a=!!e.effects.length;if(a&&(t=ci.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)oh(l[u],t,i,r,!1)}if(a){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);s.addBounds(t,ge.IDENTITY),ci.return(t)}cn.return(i)}function ih(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,s=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,a=t.index;(t.data[a]!==i||t.data[a+1]!==s)&&(t.data[t.index]=i,t.data[t.index+1]=s,t.didChange=!0),t.index=a+2,o.children.length&&ih(o,t)}return t.didChange}const mp=new ge,pp={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Br});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),ih(this,e),e.didChange&&rh(this,e.localBounds,mp),e.localBounds},getBounds(e,t){return eh(this,e,t||new Br)}},yp={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},gp={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(xp))}};function xp(e,t){return e._zIndex-t._zIndex}const vp={getGlobalPosition(e=new nr,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(cn.get(),n);return t=r.apply(e,t),cn.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(cn.get(),r);return n=o.applyInverse(e,n),cn.return(o),n}};class bp{constructor(){this.uid=fn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Mp=0;class Sp{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new mn({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new bt({source:o,label:`texturePool_${Mp++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),s=Math.ceil(n*r-1e-6);i=nc(i),s=nc(s);const a=(i<<17)+(s<<1)+(o?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(i,s,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=s/r,l.source.pixelWidth=i,l.source.pixelHeight=s,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const wn=new Sp;class _p{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new ge,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new bp,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(wn.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new ge),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new ge),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new ge),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function wp(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const ll=new Le(null),ul=new Le(null),fl=new Le(null,1,1),xc=1,Ap=2,cl=4;class ee extends qr{constructor(t={}){super(),this.uid=fn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new ge,this.relativeGroupTransform=new ge,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Le(this,0,0),this._scale=fl,this._pivot=ul,this._skew=ll,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],wp(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(ee.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||It(dn,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=_a.get(_p,this),this.groupTransform=ge.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),_a.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new ge),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Gm}set angle(t){this.rotation=t*ui}get pivot(){return this._pivot===ul&&(this._pivot=new Le(this,0,0)),this._pivot}set pivot(t){this._pivot===ul&&(this._pivot=new Le(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===ll&&(this._skew=new Le(this,0,0)),this._skew}set skew(t){this._skew===ll&&(this._skew=new Le(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===fl&&(this._scale=new Le(this,1,1)),this._scale}set scale(t){this._scale===fl&&(this._scale=new Le(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,s=r._x,a=r._y,l=o._x,u=o._y;n.a=this._cx*s,n.b=this._sx*s,n.c=this._cy*a,n.d=this._sy*a,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=xc,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=Ke.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=xc,this._onUpdate())}get tint(){return ta(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ap,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=cl,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=cl,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=cl,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}ee.mixin(lp);ee.mixin(vp);ee.mixin(yp);ee.mixin(pp);ee.mixin(fp);ee.mixin(cp);ee.mixin(gp);ee.mixin(op);ee.mixin(sp);ee.mixin(dp);class Cf extends ee{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Br(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class De extends Cf{constructor(t=bt.EMPTY){t instanceof bt&&(t={texture:t});const{texture:n=bt.EMPTY,anchor:r,roundPixels:o,width:i,height:s,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Le({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),s!==void 0&&(this.height=s)}static from(t,n=!1){return t instanceof bt?new De(t):new De(bt.from(t,n))}set texture(t){t||(t=bt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return Ym(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return It("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const Tp=new Br;function sh(e,t,n){const r=Tp;e.measurable=!0,eh(e,n,r),t.addBoundsMask(r),e.measurable=!1}function ah(e,t,n){const r=ci.get();e.measurable=!0;const o=cn.get().identity(),i=lh(e,n,o);rh(e,r,i),e.measurable=!1,t.addBoundsMask(r),cn.return(o),ci.return(r)}function lh(e,t,n){return e?(e!==t&&(lh(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(Sr("Mask bounds, renderable is not inside the root container"),n)}class uh{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof De),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||sh(this.mask,t,n)}addLocalBounds(t,n){ah(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof De}}uh.extension=_e.MaskEffect;class fh{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}fh.extension=_e.MaskEffect;class ch{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){sh(this.mask,t,n)}addLocalBounds(t,n){ah(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof ee}}ch.extension=_e.MaskEffect;const Cp={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let vc=Cp;const $r={get(){return vc},set(e){vc=e}};class Rf extends mn{constructor(t){t.resource||(t.resource=$r.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Rf.extension=_e.TextureSource;class Pf extends mn{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=$r.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,Sr("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Pf.extension=_e.TextureSource;var mu=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(mu||{});class hl{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const hh=class _n{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new hl(null,null,1/0),this.deltaMS=1/_n.targetFPMS,this.elapsedMS=1/_n.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=mu.NORMAL){return this._addListener(new hl(t,n,r))}addOnce(t,n,r=mu.NORMAL){return this._addListener(new hl(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*_n.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,_n.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!_n._shared){const t=_n._shared=new _n;t.autoStart=!0,t._protected=!0}return _n._shared}static get system(){if(!_n._system){const t=_n._system=new _n;t.autoStart=!0,t._protected=!0}return _n._system}};hh.targetFPMS=.06;let Rs=hh,dl;async function Rp(){return dl??(dl=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(s=>{const a=document.createElement("video");a.onloadeddata=()=>s(a),a.onerror=()=>s(null),a.autoplay=!1,a.crossOrigin="anonymous",a.preload="auto",a.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",a.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),dl}const Ha=class dh extends mn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...dh.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Rs.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Rp(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Rs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Rs.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Rs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Ha.extension=_e.TextureSource;Ha.defaultOptions={...mn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Ha.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Pp=Ha;const Lo=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class Ip{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||Sr(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=Lo(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const s=[...i.keys()],a={cacheKeys:s,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),s.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&Sr("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){Sr(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const oo=new Ip,pu=[];Vr.handleByList(_e.TextureSource,pu);function mh(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<pu.length;o++){const i=pu[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function zp(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&oo.has(r))return oo.get(r);const i=new bt({source:mh(o)});return i.on("destroy",()=>{oo.has(r)&&oo.remove(r)}),t||oo.set(r,i),i}function Op(e,t=!1){return typeof e=="string"?oo.get(e):e instanceof mn?new bt({source:e}):zp(e,t)}bt.from=Op;mn.from=mh;Vr.add(uh,fh,ch,Pp,Pf,Rf,wf);var ph=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(ph||{});function Nn(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function Ci(e){return e.split("?")[0].split("#")[0]}function Fp(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ep(e,t,n){return e.replace(new RegExp(Fp(t),"g"),n)}function Lp(e,t){let n="",r=0,o=-1,i=0,s=-1;for(let a=0;a<=e.length;++a){if(a<e.length)s=e.charCodeAt(a);else{if(s===47)break;s=47}if(s===47){if(!(o===a-1||i===1))if(o!==a-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=a,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=a,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,a)}`:n=e.slice(o+1,a),r=a-o-1;o=a,i=0}else s===46&&i!==-1?++i:i=-1}return n}const fs={toPosix(e){return Ep(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){Nn(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(Nn(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=Ci(this.toPosix(t??$r.get().getBaseUrl())),o=Ci(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?fs.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(Nn(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=Lp(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return Nn(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(Nn(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(Nn(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),s=e;e=e.slice(i.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!o){r=a;break}}else o=!1;return r===-1?n?"/":this.isUrl(s)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){Nn(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){Nn(e),t&&Nn(t),e=Ci(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let s=t.length-1,a=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else a===-1&&(o=!1,a=i+1),s>=0&&(l===t.charCodeAt(s)?--s===-1&&(r=i):(s=-1,r=a))}return n===r?r=a:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){Nn(e),e=Ci(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let s=e.length-1;s>=0;--s){const a=e.charCodeAt(s);if(a===47){if(!o){n=s+1;break}continue}r===-1&&(o=!1,r=s+1),a===46?t===-1?t=s:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){Nn(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=Ci(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,s=0,a=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){s=u+1;break}continue}a===-1&&(l=!1,a=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||a===-1||f===0||f===1&&i===a-1&&i===s+1?a!==-1&&(s===0&&r?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(s,a)):(s===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,a)):(t.name=e.slice(s,i),t.base=e.slice(s,a)),t.ext=e.slice(i,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function yh(e,t,n,r,o){const i=t[n];for(let s=0;s<i.length;s++){const a=i[s];n<t.length-1?yh(e.replace(r[n],a),t,n+1,r,o):o.push(e.replace(r[n],a))}}function Up(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const s=i.substring(1,i.length-1).split(",");o.push(s)}),yh(e,o,0,n,r)}else r.push(e);return r}const bc=e=>!Array.isArray(e);class gh{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return Lo(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(s=>s?.src??s):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&Sr("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,s])=>typeof s=="string"||Array.isArray(s)?{alias:i,src:s}:{alias:i,...s})),o.forEach(i=>{const s=i.src,a=i.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);r.push(u),l=[a,u]}else{const u=a.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...a,...u]}this.add({...i,alias:l,src:s})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&Sr(`[Resolver] already has key: ${i} overwriting`)},Lo(n).forEach(i=>{const{src:s}=i;let{data:a,format:l,loadParser:u}=i;const f=Lo(s).map(d=>typeof d=="string"?Up(d):Array.isArray(d)?d:[d]),c=this.getAlias(i);Array.isArray(c)?c.forEach(r):r(c);const h=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let g=0;g<this._parsers.length;g++){const x=this._parsers[g];if(x.test(m)){p=x.parse(m);break}}}else a=m.data??a,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:c,data:a,format:l,loadParser:u}),h.push(p)})}),c.forEach(d=>{this._assetMap[d]=h})})}resolveBundle(t){const n=bc(t);t=Lo(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const s=this.resolve(i),a={};for(const l in s){const u=s[l];a[this._extractAssetIdFromBundle(o,l)]=u}r[o]=a}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=bc(t);t=Lo(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const s=this._getPreferredOrder(i);s?.priority.forEach(a=>{s.params[a].forEach(l=>{const u=i.filter(f=>f[a]?f[a]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:s}=n;return(this._basePath||this._rootPath)&&(t.src=fs.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=s??t.format??kp(t.src),t}}gh.RETINA_PREFIX=/@([0-9\.]+)x/;function kp(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Mc=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},xh=class Ni{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof bt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Ni.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Ni.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],s=i.frame;if(s){let a=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new Un(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?a=new Un(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):a=new Un(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new Un(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[o]=new bt({source:this.textureSource,frame:a,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ni.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ni.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};xh.BATCH_SIZE=1e3;let Sc=xh;const Dp=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function vh(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=fs.dirname(e[0]);t.linkedSheets.forEach((i,s)=>{const a=vh([`${o}/${t.data.meta.related_multi_packs[s]}`],i,!0);Object.assign(r,a)})}return r}const Xp={extension:_e.Asset,cache:{test:e=>e instanceof Sc,getCacheableAssets:(e,t)=>vh(e,t,!1)},resolver:{extension:{type:_e.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&Dp.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(gh.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:_e.LoadParser,priority:ph.Normal,name:"spritesheetLoader"},async testParse(e,t){return fs.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=fs.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let s;if(r instanceof bt)s=r;else{const u=Mc(i+(o??e.meta.image),t.src);s=(await n.load([u]))[u]}const a=new Sc(s.source,e);await a.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const c of l){if(typeof c!="string")continue;let h=i+c;t.data?.ignoreMultiPack||(h=Mc(h,t.src),u.push(n.load({src:h,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);a.linkedSheets=f,f.forEach(c=>{c.linkedSheets=[a].concat(a.linkedSheets.filter(h=>h!==c))})}return a},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Vr.add(Xp);const ml=Object.create(null),_c=Object.create(null);function If(e,t){let n=_c[e];return n===void 0&&(ml[t]===void 0&&(ml[t]=1),_c[e]=n=ml[t]++),n}let Ps;function Gp(){return(!Ps||Ps?.isContextLost())&&(Ps=$r.get().createCanvas().getContext("webgl",{})),Ps}let Is;function Np(){if(!Is){Is="mediump";const e=Gp();e&&e.getShaderPrecisionFormat&&(Is=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return Is}function Bp(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function $p(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function Wp(e,t){return t?`#version 300 es
${e}`:e}const Hp={},Vp={};function qp(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?Hp:Vp;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function Yp(e,t){return t?e.replace("#version 300 es",""):e}const pl={stripVersion:Yp,ensurePrecision:$p,addProgramDefines:Bp,setProgramName:qp,insertVersion:Wp},yl=Object.create(null),bh=class yu{constructor(t){t={...yu.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Np()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(pl).forEach(s=>{const a=r[s];o=pl[s](o,a,!0),i=pl[s](i,a,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=If(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return yl[n]||(yl[n]=new yu(t)),yl[n]}};bh.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Xt=bh;const wc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Kp(e){return wc[e]??wc.float32}const jp={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Qp({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),s=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=s.exec(i))!==null;){const l=jp[a[3]]??"float32";n[a[2]]={location:parseInt(a[1],10),format:l,stride:Kp(l).stride,offset:0,instance:!1,start:0}}}}return n}function gl(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,s=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(c=>({group:parseInt(c.match(n)[1],10),binding:parseInt(c.match(r)[1],10),name:c.match(o)[2],isUniform:c.match(o)[1]==="<uniform>",type:c.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(s)?.map(c=>{const h=c.match(l)[1],d=c.match(a).reduce((m,p)=>{const[g,x]=p.split(":");return m[g.trim()]=x.trim(),m},{});return d?{name:h,members:d}:null}).filter(({name:c})=>u.some(h=>h.type===c))??[];return{groups:u,structs:f}}var Bi=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Bi||{});function Zp({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Bi.VERTEX|Bi.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Bi.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Bi.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Jp({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function t2(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(s=>n.has(s.name)?!1:(n.add(s.name),!0)),i=[...e.groups,...t.groups].filter(s=>{const a=`${s.name}-${s.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:o,groups:i}}const xl=Object.create(null);class Dt{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:s}=t;if(this.name=s,this.fragment=n,this.vertex=r,n.source===r.source){const a=gl(n.source);this.structsAndGroups=a}else{const a=gl(r.source),l=gl(n.source);this.structsAndGroups=t2(a,l)}this.layout=o??Jp(this.structsAndGroups),this.gpuLayout=i??Zp(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=If(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Qp(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return xl[n]||(xl[n]=new Dt(t)),xl[n]}}const Mh=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],e2=Mh.reduce((e,t)=>(e[t]=!0,e),{});function n2(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Sh=class _h{constructor(t,n){this._touched=0,this.uid=fn("uniform"),this._resourceType="uniformGroup",this._resourceId=fn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={..._h.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!e2[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Mh.join(", ")}`);i.value??(i.value=n2(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=If(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Sh.defaultOptions={ubo:!1,isStatic:!1};let zf=Sh;class vl{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var wa=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(wa||{});class Va extends qr{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:s,groupMap:a}=t;this.gpuProgram=n,this.glProgram=r,s===void 0&&(s=0,n&&(s|=wa.WEBGPU),r&&(s|=wa.WEBGL)),this.compatibleRenderers=s;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&a)for(const u in a)for(const f in a[u]){const c=a[u][f];l[c]={group:u,binding:f,name:c}}else if(n&&o&&!a){const u=n.structsAndGroups.groups;a={},u.forEach(f=>{a[f.group]=a[f.group]||{},a[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},a={},n&&n.structsAndGroups.groups.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new vl,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},a[99]=a[99]||{},a[99][u]=f,u++);for(const f in i){const c=f;let h=i[f];!h.source&&!h._resourceType&&(h=new zf(h));const d=l[c];d&&(o[d.group]||(o[d.group]=new vl,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(h,d.binding))}}this.groups=o,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new vl,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(s){t[i.group].setResource(s,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=Dt.from(n)),r&&(s=Xt.from(r)),new Va({gpuProgram:i,glProgram:s,...o})}}const r2={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},bl=0,Ml=1,Sl=2,_l=3,wl=4,Al=5,gu=class wh{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<bl)}set blend(t){!!(this.data&1<<bl)!==t&&(this.data^=1<<bl)}get offsets(){return!!(this.data&1<<Ml)}set offsets(t){!!(this.data&1<<Ml)!==t&&(this.data^=1<<Ml)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Sl)}set culling(t){!!(this.data&1<<Sl)!==t&&(this.data^=1<<Sl)}get depthTest(){return!!(this.data&1<<_l)}set depthTest(t){!!(this.data&1<<_l)!==t&&(this.data^=1<<_l)}get depthMask(){return!!(this.data&1<<Al)}set depthMask(t){!!(this.data&1<<Al)!==t&&(this.data^=1<<Al)}get clockwiseFrontFace(){return!!(this.data&1<<wl)}set clockwiseFrontFace(t){!!(this.data&1<<wl)!==t&&(this.data^=1<<wl)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=r2[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new wh;return t.depthTest=!1,t.blend=!0,t}};gu.default2d=gu.for2d();let Ah=gu;const Th=class xu extends Va{constructor(t){t={...xu.defaultOptions,...t},super(t),this.enabled=!0,this._state=Ah.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,s;return n&&(i=Dt.from(n)),r&&(s=Xt.from(r)),new xu({gpuProgram:i,glProgram:s,...o})}};Th.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let Bt=Th;const vu=[];Vr.handleByNamedList(_e.Environment,vu);async function o2(e){if(!e)for(let t=0;t<vu.length;t++){const n=vu[t];if(n.value.test()){await n.value.load();return}}}let Ri;function i2(){if(typeof Ri=="boolean")return Ri;try{Ri=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ri=!1}return Ri}var zs={exports:{}},Ac;function s2(){if(Ac)return zs.exports;Ac=1,zs.exports=e,zs.exports.default=e;function e(F,E,L){L=L||2;var D=E&&E.length,X=D?E[0]*L:F.length,W=t(F,0,X,L,!0),K=[];if(!W||W.next===W.prev)return K;var ut,Tt,_t,ve,re,qt,je;if(D&&(W=l(F,E,W,L)),F.length>80*L){ut=_t=F[0],Tt=ve=F[1];for(var oe=L;oe<X;oe+=L)re=F[oe],qt=F[oe+1],re<ut&&(ut=re),qt<Tt&&(Tt=qt),re>_t&&(_t=re),qt>ve&&(ve=qt);je=Math.max(_t-ut,ve-Tt),je=je!==0?32767/je:0}return r(W,K,L,ut,Tt,je,0),K}function t(F,E,L,D,X){var W,K;if(X===vt(F,E,L,D)>0)for(W=E;W<L;W+=D)K=G(W,F[W],F[W+1],K);else for(W=L-D;W>=E;W-=D)K=G(W,F[W],F[W+1],K);return K&&S(K,K.next)&&($(K),K=K.next),K}function n(F,E){if(!F)return F;E||(E=F);var L=F,D;do if(D=!1,!L.steiner&&(S(L,L.next)||v(L.prev,L,L.next)===0)){if($(L),L=E=L.prev,L===L.next)break;D=!0}else L=L.next;while(D||L!==E);return E}function r(F,E,L,D,X,W,K){if(F){!K&&W&&d(F,D,X,W);for(var ut=F,Tt,_t;F.prev!==F.next;){if(Tt=F.prev,_t=F.next,W?i(F,D,X,W):o(F)){E.push(Tt.i/L|0),E.push(F.i/L|0),E.push(_t.i/L|0),$(F),F=_t.next,ut=_t.next;continue}if(F=_t,F===ut){K?K===1?(F=s(n(F),E,L),r(F,E,L,D,X,W,2)):K===2&&a(F,E,L,D,X,W):r(n(F),E,L,D,X,W,1);break}}}}function o(F){var E=F.prev,L=F,D=F.next;if(v(E,L,D)>=0)return!1;for(var X=E.x,W=L.x,K=D.x,ut=E.y,Tt=L.y,_t=D.y,ve=X<W?X<K?X:K:W<K?W:K,re=ut<Tt?ut<_t?ut:_t:Tt<_t?Tt:_t,qt=X>W?X>K?X:K:W>K?W:K,je=ut>Tt?ut>_t?ut:_t:Tt>_t?Tt:_t,oe=D.next;oe!==E;){if(oe.x>=ve&&oe.x<=qt&&oe.y>=re&&oe.y<=je&&x(X,ut,W,Tt,K,_t,oe.x,oe.y)&&v(oe.prev,oe,oe.next)>=0)return!1;oe=oe.next}return!0}function i(F,E,L,D){var X=F.prev,W=F,K=F.next;if(v(X,W,K)>=0)return!1;for(var ut=X.x,Tt=W.x,_t=K.x,ve=X.y,re=W.y,qt=K.y,je=ut<Tt?ut<_t?ut:_t:Tt<_t?Tt:_t,oe=ve<re?ve<qt?ve:qt:re<qt?re:qt,Ai=ut>Tt?ut>_t?ut:_t:Tt>_t?Tt:_t,Ti=ve>re?ve>qt?ve:qt:re>qt?re:qt,Zf=p(je,oe,E,L,D),Jf=p(Ai,Ti,E,L,D),Yt=F.prevZ,Kt=F.nextZ;Yt&&Yt.z>=Zf&&Kt&&Kt.z<=Jf;){if(Yt.x>=je&&Yt.x<=Ai&&Yt.y>=oe&&Yt.y<=Ti&&Yt!==X&&Yt!==K&&x(ut,ve,Tt,re,_t,qt,Yt.x,Yt.y)&&v(Yt.prev,Yt,Yt.next)>=0||(Yt=Yt.prevZ,Kt.x>=je&&Kt.x<=Ai&&Kt.y>=oe&&Kt.y<=Ti&&Kt!==X&&Kt!==K&&x(ut,ve,Tt,re,_t,qt,Kt.x,Kt.y)&&v(Kt.prev,Kt,Kt.next)>=0))return!1;Kt=Kt.nextZ}for(;Yt&&Yt.z>=Zf;){if(Yt.x>=je&&Yt.x<=Ai&&Yt.y>=oe&&Yt.y<=Ti&&Yt!==X&&Yt!==K&&x(ut,ve,Tt,re,_t,qt,Yt.x,Yt.y)&&v(Yt.prev,Yt,Yt.next)>=0)return!1;Yt=Yt.prevZ}for(;Kt&&Kt.z<=Jf;){if(Kt.x>=je&&Kt.x<=Ai&&Kt.y>=oe&&Kt.y<=Ti&&Kt!==X&&Kt!==K&&x(ut,ve,Tt,re,_t,qt,Kt.x,Kt.y)&&v(Kt.prev,Kt,Kt.next)>=0)return!1;Kt=Kt.nextZ}return!0}function s(F,E,L){var D=F;do{var X=D.prev,W=D.next.next;!S(X,W)&&_(X,D,D.next,W)&&I(X,W)&&I(W,X)&&(E.push(X.i/L|0),E.push(D.i/L|0),E.push(W.i/L|0),$(D),$(D.next),D=F=W),D=D.next}while(D!==F);return n(D)}function a(F,E,L,D,X,W){var K=F;do{for(var ut=K.next.next;ut!==K.prev;){if(K.i!==ut.i&&b(K,ut)){var Tt=k(K,ut);K=n(K,K.next),Tt=n(Tt,Tt.next),r(K,E,L,D,X,W,0),r(Tt,E,L,D,X,W,0);return}ut=ut.next}K=K.next}while(K!==F)}function l(F,E,L,D){var X=[],W,K,ut,Tt,_t;for(W=0,K=E.length;W<K;W++)ut=E[W]*D,Tt=W<K-1?E[W+1]*D:F.length,_t=t(F,ut,Tt,D,!1),_t===_t.next&&(_t.steiner=!0),X.push(g(_t));for(X.sort(u),W=0;W<X.length;W++)L=f(X[W],L);return L}function u(F,E){return F.x-E.x}function f(F,E){var L=c(F,E);if(!L)return E;var D=k(L,F);return n(D,D.next),n(L,L.next)}function c(F,E){var L=E,D=F.x,X=F.y,W=-1/0,K;do{if(X<=L.y&&X>=L.next.y&&L.next.y!==L.y){var ut=L.x+(X-L.y)*(L.next.x-L.x)/(L.next.y-L.y);if(ut<=D&&ut>W&&(W=ut,K=L.x<L.next.x?L:L.next,ut===D))return K}L=L.next}while(L!==E);if(!K)return null;var Tt=K,_t=K.x,ve=K.y,re=1/0,qt;L=K;do D>=L.x&&L.x>=_t&&D!==L.x&&x(X<ve?D:W,X,_t,ve,X<ve?W:D,X,L.x,L.y)&&(qt=Math.abs(X-L.y)/(D-L.x),I(L,F)&&(qt<re||qt===re&&(L.x>K.x||L.x===K.x&&h(K,L)))&&(K=L,re=qt)),L=L.next;while(L!==Tt);return K}function h(F,E){return v(F.prev,F,E.prev)<0&&v(E.next,F,F.next)<0}function d(F,E,L,D){var X=F;do X.z===0&&(X.z=p(X.x,X.y,E,L,D)),X.prevZ=X.prev,X.nextZ=X.next,X=X.next;while(X!==F);X.prevZ.nextZ=null,X.prevZ=null,m(X)}function m(F){var E,L,D,X,W,K,ut,Tt,_t=1;do{for(L=F,F=null,W=null,K=0;L;){for(K++,D=L,ut=0,E=0;E<_t&&(ut++,D=D.nextZ,!!D);E++);for(Tt=_t;ut>0||Tt>0&&D;)ut!==0&&(Tt===0||!D||L.z<=D.z)?(X=L,L=L.nextZ,ut--):(X=D,D=D.nextZ,Tt--),W?W.nextZ=X:F=X,X.prevZ=W,W=X;L=D}W.nextZ=null,_t*=2}while(K>1);return F}function p(F,E,L,D,X){return F=(F-L)*X|0,E=(E-D)*X|0,F=(F|F<<8)&16711935,F=(F|F<<4)&252645135,F=(F|F<<2)&858993459,F=(F|F<<1)&1431655765,E=(E|E<<8)&16711935,E=(E|E<<4)&252645135,E=(E|E<<2)&858993459,E=(E|E<<1)&1431655765,F|E<<1}function g(F){var E=F,L=F;do(E.x<L.x||E.x===L.x&&E.y<L.y)&&(L=E),E=E.next;while(E!==F);return L}function x(F,E,L,D,X,W,K,ut){return(X-K)*(E-ut)>=(F-K)*(W-ut)&&(F-K)*(D-ut)>=(L-K)*(E-ut)&&(L-K)*(W-ut)>=(X-K)*(D-ut)}function b(F,E){return F.next.i!==E.i&&F.prev.i!==E.i&&!R(F,E)&&(I(F,E)&&I(E,F)&&O(F,E)&&(v(F.prev,F,E.prev)||v(F,E.prev,E))||S(F,E)&&v(F.prev,F,F.next)>0&&v(E.prev,E,E.next)>0)}function v(F,E,L){return(E.y-F.y)*(L.x-E.x)-(E.x-F.x)*(L.y-E.y)}function S(F,E){return F.x===E.x&&F.y===E.y}function _(F,E,L,D){var X=P(v(F,E,L)),W=P(v(F,E,D)),K=P(v(L,D,F)),ut=P(v(L,D,E));return!!(X!==W&&K!==ut||X===0&&w(F,L,E)||W===0&&w(F,D,E)||K===0&&w(L,F,D)||ut===0&&w(L,E,D))}function w(F,E,L){return E.x<=Math.max(F.x,L.x)&&E.x>=Math.min(F.x,L.x)&&E.y<=Math.max(F.y,L.y)&&E.y>=Math.min(F.y,L.y)}function P(F){return F>0?1:F<0?-1:0}function R(F,E){var L=F;do{if(L.i!==F.i&&L.next.i!==F.i&&L.i!==E.i&&L.next.i!==E.i&&_(L,L.next,F,E))return!0;L=L.next}while(L!==F);return!1}function I(F,E){return v(F.prev,F,F.next)<0?v(F,E,F.next)>=0&&v(F,F.prev,E)>=0:v(F,E,F.prev)<0||v(F,F.next,E)<0}function O(F,E){var L=F,D=!1,X=(F.x+E.x)/2,W=(F.y+E.y)/2;do L.y>W!=L.next.y>W&&L.next.y!==L.y&&X<(L.next.x-L.x)*(W-L.y)/(L.next.y-L.y)+L.x&&(D=!D),L=L.next;while(L!==F);return D}function k(F,E){var L=new ot(F.i,F.x,F.y),D=new ot(E.i,E.x,E.y),X=F.next,W=E.prev;return F.next=E,E.prev=F,L.next=X,X.prev=L,D.next=L,L.prev=D,W.next=D,D.prev=W,D}function G(F,E,L,D){var X=new ot(F,E,L);return D?(X.next=D.next,X.prev=D,D.next.prev=X,D.next=X):(X.prev=X,X.next=X),X}function $(F){F.next.prev=F.prev,F.prev.next=F.next,F.prevZ&&(F.prevZ.nextZ=F.nextZ),F.nextZ&&(F.nextZ.prevZ=F.prevZ)}function ot(F,E,L){this.i=F,this.x=E,this.y=L,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(F,E,L,D){var X=E&&E.length,W=X?E[0]*L:F.length,K=Math.abs(vt(F,0,W,L));if(X)for(var ut=0,Tt=E.length;ut<Tt;ut++){var _t=E[ut]*L,ve=ut<Tt-1?E[ut+1]*L:F.length;K-=Math.abs(vt(F,_t,ve,L))}var re=0;for(ut=0;ut<D.length;ut+=3){var qt=D[ut]*L,je=D[ut+1]*L,oe=D[ut+2]*L;re+=Math.abs((F[qt]-F[oe])*(F[je+1]-F[qt+1])-(F[qt]-F[je])*(F[oe+1]-F[qt+1]))}return K===0&&re===0?0:Math.abs((re-K)/K)};function vt(F,E,L,D){for(var X=0,W=E,K=L-D;W<L;W+=D)X+=(F[K]-F[W])*(F[W+1]+F[K+1]),K=W;return X}return e.flatten=function(F){for(var E=F[0][0].length,L={vertices:[],holes:[],dimensions:E},D=0,X=0;X<F.length;X++){for(var W=0;W<F[X].length;W++)for(var K=0;K<E;K++)L.vertices.push(F[X][W][K]);X>0&&(D+=F[X-1].length,L.holes.push(D))}return L},zs.exports}var a2=s2();const d4=H0(a2);var Ch=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Ch||{});class l2{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,s,a,l){const{name:u,items:f}=this;for(let c=0,h=f.length;c<h;c++)f[c][u](t,n,r,o,i,s,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const u2=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Rh=class Ph extends qr{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...u2,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await o2(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...Ph.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof ee&&(r={container:r},n&&(It(dn,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:Ke.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Ch.ALL);const{clear:r,clearColor:o,target:i}=t;Ke.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,Ke.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new l2(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,s=o.name,a=r[s];this.renderPipes[s]=new i(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!i2())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Rh.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ih=Rh,Os;function f2(e){return Os!==void 0||(Os=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??Ih.defaultOptions.failIfMajorPerformanceCaveat};try{if(!$r.get().getWebGLRenderingContext())return!1;let r=$r.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Os}let Fs;async function c2(e={}){return Fs!==void 0||(Fs=await(async()=>{const t=$r.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Fs}const Tc=["webgl","webgpu","canvas"];async function h2(e){let t=[];e.preference?(t.push(e.preference),Tc.forEach(i=>{i!==e.preference&&t.push(i)})):t=Tc.slice();let n,r={};for(let i=0;i<t.length;i++){const s=t[i];if(s==="webgpu"&&await c2()){const{WebGPURenderer:a}=await Sa(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-CX53WXUY.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=a,r={...e,...e.webgpu};break}else if(s==="webgl"&&f2(e.failIfMajorPerformanceCaveat??Ih.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Sa(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-PThVVutC.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=a,r={...e,...e.webgl};break}else if(s==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const zh="8.6.6";class Oh{static init(){globalThis.__PIXI_APP_INIT__?.(this,zh)}static destroy(){}}Oh.extension=_e.Application;class d2{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,zh)}destroy(){this._renderer=null}}d2.extension={type:[_e.WebGLSystem,_e.WebGPUSystem],name:"initHook",priority:-10};const Fh=class bu{constructor(...t){this.stage=new ee,t[0]!==void 0&&It(dn,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await h2(t),bu._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return It(dn,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=bu._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Fh._plugins=[];let Qi=Fh;Vr.handleByList(_e.Application,Qi._plugins);Vr.add(Oh);var Je=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(Je||{});class Qo extends qr{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:s}=t;super(),this.uid=fn("buffer"),this._resourceType="buffer",this._resourceId=fn("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const a=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:a,label:i},this.shrinkToFit=s??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&Je.STATIC)}set static(t){t?this.descriptor.usage|=Je.STATIC:this.descriptor.usage&=~Je.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=fn("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Eh(e,t){if(!(e instanceof Qo)){let n=t?Je.INDEX:Je.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=Je.INDEX|Je.COPY_DST):(e=new Float32Array(e),n=Je.VERTEX|Je.COPY_DST)),e=new Qo({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function m2(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,s=1/0,a=-1/0,l=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,c=(r.stride||2*4)/u;for(let h=f;h<o.length;h+=c){const d=o[h],m=o[h+1];d>a&&(a=d),m>l&&(l=m),d<i&&(i=d),m<s&&(s=m)}return n.minX=i,n.minY=s,n.maxX=a,n.maxY=l,n}function p2(e){return(e instanceof Qo||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=Eh(e.buffer,!1),e}class Lh extends qr{constructor(t={}){super(),this.uid=fn("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Br,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=p2(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=Eh(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,m2(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var y2=`in vec2 aPosition;
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
`,g2=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Cc=`struct GlobalFilterUniforms {
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
}`;const Uh=class kh extends Bt{constructor(t){t={...kh.defaultOptions,...t};const n=Dt.from({vertex:{source:Cc,entryPoint:"mainVertex"},fragment:{source:Cc,entryPoint:"mainFragment"}}),r=Xt.from({vertex:y2,fragment:g2,name:"alpha-filter"}),{alpha:o,...i}=t,s=new zf({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:s}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Uh.defaultOptions={alpha:1};let x2=Uh;const Dh={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},v2=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function b2(e){const t=Dh[e],n=t.length;let r=v2,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let s;for(let a=0;a<e;a++){let l=i.replace("%index%",a.toString());s=a,a>=n&&(s=e-a-1),l=l.replace("%value%",t[s].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const M2=`
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
    }`;function S2(e,t){const n=Math.ceil(e/2);let r=M2,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let s=0;s<e;s++){let a=i.replace("%index%",s.toString());a=a.replace("%sampleIndex%",`${s-(n-1)}.0`),o+=a,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function _2(e,t){const n=S2(t,e),r=b2(t);return Xt.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var w2=`

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
}`;function A2(e,t){const n=Dh[t],r=n.length,o=[],i=[],s=[];for(let c=0;c<t;c++){o[c]=`@location(${c}) offset${c}: vec2<f32>,`,e?i[c]=`filteredCord + vec2(${c-r+1} * pixelStrength, 0.0),`:i[c]=`filteredCord + vec2(0.0, ${c-r+1} * pixelStrength),`;const h=c<r?c:t-c-1,d=n[h].toString();s[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const a=o.join(`
`),l=i.join(`
`),u=s.join(`
`),f=w2.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Dt.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Xh=class Gh extends Bt{constructor(t){t={...Gh.defaultOptions,...t};const n=_2(t.horizontal,t.kernelSize),r=A2(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=wn.getSameSizeTexture(n);let s=n,a=i;this._state.blend=!1;const l=t.renderer.type===wa.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,s,a,u===0?!0:l);const f=a;a=s,s=f}this._state.blend=!0,t.applyFilter(this,s,r,o),wn.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Xh.defaultOptions={strength:8,quality:4,kernelSize:5};let Rc=Xh;function Pc(e,t,n,r,o,i,s,a){const l=s-n,u=a-r,f=o-n,c=i-r,h=e-n,d=t-r,m=l*l+u*u,p=l*f+u*c,g=l*h+u*d,x=f*f+c*c,b=f*h+c*d,v=1/(m*x-p*p),S=(x*g-p*b)*v,_=(m*b-p*g)*v;return S>=0&&_>=0&&S+_<1}const Nh=class Bh extends Lh{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(It(dn,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...Bh.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),s=n.shrinkBuffersToFit,a=new Qo({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:Je.VERTEX|Je.COPY_DST}),l=new Qo({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:Je.VERTEX|Je.COPY_DST}),u=new Qo({data:i,label:"index-mesh-buffer",shrinkToFit:s,usage:Je.INDEX|Je.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};Nh.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let $h=Nh;class T2 extends Cf{constructor(...t){let n=t[0];n instanceof Lh&&(It(dn,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(It(dn,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:s,state:a,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??bt.WHITE,this.state=a??Ah.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=s??!1}get material(){return It(dn,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=bt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof $h?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const s=this.geometry.getIndex().data,a=s.length;for(let l=0;l+2<a;l+=i){const u=s[l]*2,f=s[l+1]*2,c=s[l+2]*2;if(Pc(n,r,o[u],o[u+1],o[f],o[f+1],o[c],o[c+1]))return!0}}else{const s=o.length/2;for(let a=0;a+2<s;a+=i){const l=a*2,u=(a+1)*2,f=(a+2)*2;if(Pc(n,r,o[l],o[l+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class C2{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new ge,this.observer=n,this.position=new Le(this,0,0),this.scale=new Le(this,1,1),this.pivot=new Le(this,0,0),this.skew=new Le(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const Wh=class ea extends Cf{constructor(...t){let n=t[0]||{};n instanceof bt&&(n={texture:n}),t.length>1&&(It(dn,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...ea.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:s,tileRotation:a,width:l,height:u,applyAnchorToTexture:f,roundPixels:c,...h}=n??{};super({label:"TilingSprite",...h}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new Le({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new C2({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=s,this.tileRotation=a,this.roundPixels=c??!1}static from(t,n={}){return typeof t=="string"?new ea({texture:oo.get(t),...n}):new ea({texture:t,...n})}get uvRespectAnchor(){return Sr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){Sr("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=bt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};Wh.defaultOptions={texture:bt.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let R2=Wh;const Pi=new Map;function P2(e,t){if(!Pi.has(e)){const n=new bt({source:new Rf({resource:e,...t})}),r=()=>{Pi.get(e)===n&&Pi.delete(e)};n.once("destroy",r),n.source.once("destroy",r),Pi.set(e,n)}return Pi.get(e)}const Hh=class Vh{constructor(t={}){if(this.uid=fn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...Vh.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new mn({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof bt||t.depthStencilTexture instanceof mn?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new mn({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,s)=>{o&&s===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Hh.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let I2=Hh;class Of extends bt{static create(t){return new Of({source:new mn(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const Ff=class qh{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...qh.defaultOptions,...t},t.view&&(It(dn,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new Un(0,0,t.width,t.height),this.canvas=t.canvas||$r.get().createCanvas(),this.antialias=!!t.antialias,this.texture=P2(this.canvas,t),this.renderTarget=new I2({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Ff.extension={type:[_e.WebGLSystem,_e.WebGPUSystem,_e.CanvasSystem],name:"view",priority:0};Ff.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let z2=Ff;Vr.add(Lm,Um);const Zt={},hi={},Ic=new Map,qn={};function Mu(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function O2(e){const t=window.MAP;Object.assign(Zt,window.META,t.decometa||{});for(const a of Object.keys(Zt)){const l=Zt[a].gear;if(l)for(const u in l)for(const f of l[u])Zt[a+"__"+u+f]=Zt[a]}const n=Object.keys(Zt),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const s=()=>e(++i/o);await Promise.all([...n.map(async a=>{const l=await Mu("assets/"+a+".png");if(qn[a]=l,l.naturalWidth){const u=bt.from(l);u.source.scaleMode="nearest",hi[a]=u}s()}),...r.map(async a=>{qn[a]=await Mu("assets/"+a+(a==="ground"?".webp":".png")),s()})])}function qa(e){return!!hi[e]}function F2(){return Object.values(hi)}const zc=new Set;function Yh(e){hi[e]||zc.has(e)||!Zt[e]||(zc.add(e),Mu("assets/"+e+".png").then(t=>{if(qn[e]=t,t.naturalWidth){const n=bt.from(t);n.source.scaleMode="nearest",hi[e]=n}}))}function E2(e){for(const t of e){const n=Zt[t]&&Zt[t].gear;n&&n.w&&n.w.includes(0)&&Yh(t+"__w0")}}function Zo(e,t,n,r){const o=Zt[e],i=hi[e];if(o&&!i&&e.includes("__"))return Yh(e),null;if(!o||!i)return null;let s=0,a=0;if(o.anims&&t){const f=o.anims[t]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],c=o.dirs||1,h=c>=16?(n%16+16)%16:c>1?Math.round(n/2)%c:0;s=f.row+h,a=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(a=(r%o.frames+o.frames)%o.frames);const l=e+"|"+s+"|"+a;let u=Ic.get(l);if(!u){if((a+1)*o.fw>i.width||(s+1)*o.fh>i.height)return null;u=new bt({source:i.source,frame:new Un(a*o.fw,s*o.fh,o.fw,o.fh)}),Ic.set(l,u)}return u}function Kh(e,t,n){const r=Zt[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function L2(){const e=qn.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),s=Math.min(t,e.naturalHeight-r),a=document.createElement("canvas");a.width=i,a.height=s,a.getContext("2d").drawImage(e,o,r,i,s,0,0,i,s);const l=bt.from(a);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const C=Math.round,V=Math.PI*2,kt=e=>1-(1-e)*(1-e);function on(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=C(n-s*o/2),u=C(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<a;c++){const h=t[c];for(let d=0;d<s;d++)h[d]===f&&e.fillRect(l+d*o,u+c*o,o,o)}}}function nn(e){const t=Zt[e.sprite];return(t?t.ay:50)*(e.scale||1)/N.ZK}function xe(e){const t=e.uid!==void 0?ht(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const U2=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],k2={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function D2(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=y(-.35,.35);et.sfx("item_crit",t,n,.9),A({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.55),u=Math.min(1,s*3.5);i.globalAlpha=s<.45?1:(1-s)/.55;for(let f=0;f<=26;f++){const c=f/26;if(c>u)break;const h=o-Math.PI/2+r*(-1.35+2.7*c),d=u-c,m=C(2+7*Math.sin(Math.PI*c));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(C(a+Math.cos(h)*36-m/2),C(l+10+Math.sin(h)*24-m/2),m,m)}if(s<.3){const f=1-s/.3,c=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(C(a-c),C(l)-1,C(c*2),3),i.fillRect(C(a)-1,C(l-c*.7),3,C(c*1.4)),i.fillStyle="#ff5a3a";for(let h=0;h<4;h++){const d=c*.55;i.fillRect(C(a+(h&1?d:-d)*.7)-2,C(l+(h&2?d:-d)*.5)-2,4,4)}}}}),A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,s,a){const l=Math.min(1,s/.22),u=1.5-.95*l*l;if(!a.hit&&l>=1){a.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*V,p=y(1.5,3.5);z(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*V,p=y(1,2.5);z(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,y(1.5,3),.6,"#f2e4c4",2,9,!1)}tt(4)}const[f,c]=T(t,n,u);i.globalAlpha=s<.6?1:(1-s)/.4;const h=l>=1&&s<.35?(Math.random()-.5)*3:0;on(i,U2,f+h,c-6,3,k2)}})}function X2(e){const t=[e.x,e.y];for(const s of String(e.pts||"").split(";")){const a=s.split(",");a.length===2&&a[0]!==""&&t.push(+a[0],+a[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;et.sfx("item_chain",t[2],t[3],1),z(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),A({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(s,a,l){const u=a*i,f=Math.floor(M.T*28);for(;l.sp<n&&u>=l.sp*o;){const c=t[l.sp*2+2],h=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*V,p=y(2,4.5);z(c,h,.5,Math.cos(m)*p,Math.sin(m)*p,y(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}s.lineJoin="miter";for(let c=0;c<n;c++){const h=u-c*o;if(h<0)break;const d=Math.max(0,1-h/.38);if(d<=0)continue;const[m,p]=T(t[c*2],t[c*2+1],c?.5:.7),[g,x]=T(t[c*2+2],t[c*2+3],.5),b=g-m,v=x-p,S=Math.hypot(b,v)||1,_=-v/S,w=b/S,P=Math.min(16,4+S*.1),R=7;s.beginPath(),s.moveTo(m,p);for(let ot=1;ot<R;ot++){const vt=(J(r+c*31+ot*7+f*13)-.5)*2*P;s.lineTo(m+b*ot/R+_*vt,p+v*ot/R+w*vt)}s.lineTo(g,x),s.globalAlpha=d*.4,s.strokeStyle="#5a7aff",s.lineWidth=8,s.stroke(),s.globalAlpha=d*.85,s.strokeStyle="#9ae0ff",s.lineWidth=3.5,s.stroke(),s.globalAlpha=d,s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke();const I=2+(J(r+c)*3|0),O=(J(r+c*31+I*7+f*13)-.5)*2*P,k=J(r+c*5+f)<.5?1:-1,G=m+b*I/R+_*O,$=p+v*I/R+w*O;if(s.beginPath(),s.moveTo(G,$),s.lineTo(G+_*k*12+b/S*7,$+w*k*12+v/S*7),s.lineTo(G+_*k*17+b/S*17,$+w*k*17+v/S*17),s.globalAlpha=d*.75,s.strokeStyle="#bfeaff",s.lineWidth=1.5,s.stroke(),h<.16){const ot=1-h/.16,vt=4+ot*11;s.globalAlpha=ot,s.fillStyle="#e8f6ff",s.fillRect(C(g-vt),C(x)-1,C(vt*2),3),s.fillRect(C(g)-1,C(x-vt),3,C(vt*2)),s.fillStyle="#7ac8ff",s.fillRect(C(g)-4,C(x)-4,8,8)}}}}),tt(2)}const G2=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],N2={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function B2(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*V;et.sfx("item_bash",t,n,1),A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,s,a){const l=Math.min(1,s/.24),u=1.9-1.35*l*l;if(!a.hit&&l>=1){a.hit=!0,A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,it(t,n,.3+1.3*kt(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,it(t,n,.25+.8*kt(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const g=o+p/7*V;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,v=g+(J(o+p*9+x)-.5)*.7,[S,_]=T(t+Math.cos(v)*b,n+Math.sin(v)*b);x?d.lineTo(S,_):d.moveTo(S,_)}d.stroke()}}}),A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=T(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const v=b/10*V;d.fillRect(C(p+Math.cos(v)*x)-2,C(g+Math.sin(v)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*V,p=y(1.5,4);z(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,y(.6,1.8),y(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*V,p=y(1,3);z(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,y(2,4),.8,"#7a7468",3,12,!1)}tt(5)}const[f,c]=T(t,n,u),h=l>=1&&s<.34?2:0;i.globalAlpha=s<.6?1:(1-s)/.4,i.translate(C(f),C(c-14+h)),i.rotate(r*.9*(1-l)),on(i,G2,0,0,3,N2)}})}function $2(e,t,n,r,o){for(let i=0;i<9;i++){const s=r*6+i*.7+o,a=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(C(t+Math.cos(s)*a)-1,C(n-4+Math.sin(s)*a*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const s=-r*4+i*Math.PI,a=C(t+Math.cos(s)*18),l=C(n-2+Math.sin(s)*5);e.fillStyle="#ff9a3a",e.fillRect(a-3,l-1,7,3),e.fillRect(a-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(a,l,1,1)}}const W2=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],H2={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function V2(e){et.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;A({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){xe(o);const i=.32,s=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let a=0;a<14;a++){const l=a/14*V+t,u=s*(.65+.35*J(t+a)),[f,c]=T(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[h,d]=T(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,p]=T(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=a%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,c),n.lineTo(m,p),n.lineTo(h,d),n.closePath(),n.fill()}it(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),s=i?nn(i):.8,a=r<.06?2:r<.14?4:3,[l,u]=T(o.x,o.y,s+.32+r*.15),f=r<.7?1:(1-r)/.3;dt(!0);const c=Ot();c.globalAlpha=f*(.35+.2*Math.sin(r*40)),c.fillStyle="#ff2a1a",c.fillRect(C(l-22),C(u-18),44,36),c.globalAlpha=1,dt(!1),n.globalAlpha=f,on(n,W2,l,u,a,H2)}});for(let n=0;n<26;n++)z(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.1,.6),y(-.4,.4),y(-.4,.4),y(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);tt(3)}const q2=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],Y2={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function K2(e){et.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;A({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),s=i?nn(i):.8,[a,l]=T(o.x,o.y,s+.45),u=T(o.x,o.y,0)[1],f=t*1.9*kt(Math.min(1,r/.3)),c=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const h=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,g=a+m*h-p*d,x=l+m*d+p*h,b=r<.7?3:2;n.globalAlpha=c;for(let v=0;v<=14;v++){const S=v/14,_=x+(u-x)*S,w=g+Math.sin(M.T*22+v)*1.5+t*S*6;n.fillStyle=v%3?"#b0102a":"#ff3a4a",n.fillRect(C(w)-1,C(_),b,C((u-x)/14)+1)}Math.random()<.6&&z(o.x+y(-.2,.2),o.y+y(-.2,.2),.02,y(-1,1),y(-1,1),y(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=c,n.translate(C(a),C(l)),n.rotate(f),on(n,q2,0,0,3,Y2)}}),A({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*kt(Math.min(1,r/.45)),s=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=s,it(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=s*.6,it(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function j2(e,t,n){const[r,o]=T(t.x,t.y,nn(t)*.55),i=t.scale||1;for(let s=0;s<4;s++){const a=n*3.2+s*V/4+t.id,l=C(r+Math.cos(a)*22*i),u=C(o+Math.sin(a)*8*i+Math.sin(n*5+s)*2);e.globalAlpha=Math.sin(a)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&z(t.x+y(-.3,.3),t.y+y(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function Q2(e){et.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,s){const a=ht(s.uid);a&&!a.dead&&(s.ex=a.x,s.ey=a.y);const[l,u]=T(t,n,.5),[f,c]=T(s.ex,s.ey,.6),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const v=(b-1)*.9+.3*Math.sin(r+b),S=Math.min(1,i*1.4-b*.1);if(!(S<=0))for(let _=0;_<7;_++){const w=S-_*.045;if(w<0)break;const P=Math.sin(w*Math.PI)*m*.28*v+Math.sin(w*14+b*2+M.T*10)*3,R=l+h*w+p*P,I=u+d*w+g*P-Math.sin(w*Math.PI)*14,O=_===0?4:_<3?3:2;o.globalAlpha=(1-_/7)*x,_===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(C(R-5),C(I-5),10,10),o.globalAlpha=x),o.fillStyle=_===0?"#ff8a96":_<3?"#e0203a":"#8a0a1e",o.fillRect(C(R-O/2),C(I-O/2),O,O)}}if(!s.pop&&i>.72){s.pop=!0;for(let b=0;b<4;b++)z(s.ex+y(-.2,.2),s.ey+y(-.2,.2),.6,0,0,y(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const mo=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function Z2(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;et.sfx("item_hex",t,n,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(s,a){const[l,u]=T(r,o,.7),[f,c]=T(t,n,.7),h=f-l,d=c-u,m=Math.hypot(h,d)||1,p=-d/m,g=h/m,x=Math.min(1,a*2.6);s.globalAlpha=a<.6?1:(1-a)/.4;for(let b=0;b<=30;b++){const v=b/30;if(v>x)break;const S=Math.sin(v*V*2.5-a*9)*8*(1-v*.6);s.fillStyle=mo[(b+(a*24|0))%3],s.fillRect(C(l+h*v+p*S)-1,C(u+d*v+g*S)-1,3,3)}}}),A({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(s,a,l){const[u,f]=T(t,n,.6),c=Math.min(1,a/.42),h=a<.55?1:(1-a)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);dt(!0);const m=Ot();for(let x=0;x<20;x++){const b=c-x*.025;if(b<0)break;const v=d(b),S=C(5-x*.2);m.globalAlpha=(1-x/20)*h,m.fillStyle=mo[x<3?0:x<9?1:2],m.fillRect(C(u+Math.cos(v)*42-S/2),C(f+Math.sin(v)*24-S/2),S,S)}m.globalAlpha=1,dt(!1),s.globalAlpha=h;const p=d(c);for(let x=0;x<11;x++){const b=p-i*x*.07,v=1+x*.55,S=42-v/2,_=u+Math.cos(b)*S,w=f+Math.sin(b)*S*.58;s.fillStyle="#2a1040",s.fillRect(C(_-v/2),C(w-v/2),C(v)+1,C(v)+1),s.fillStyle="#f0e0ff",s.fillRect(C(u+Math.cos(b)*43)-1,C(f+Math.sin(b)*25)-1,2,2)}const g=p-i*.75;for(let x=38;x>10;x-=2)s.fillStyle=x%4?"#4a2a18":"#6a4024",s.fillRect(C(u+Math.cos(g)*x)-1,C(f+Math.sin(g)*x*.58)-1,3,3);if(!l.poof&&a>=.36){l.poof=!0;for(let x=0;x<9;x++)A({type:"puff",x:t+y(-.5,.5),y:n+y(-.5,.5),r:y(14,24),dur:y(.6,1),col:[176,128,236]});A({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*V,v=y(1,3);z(t,n,.6,Math.cos(b)*v,Math.sin(b)*v,y(.5,2.5),.6,mo[x%4],3,1,!0)}for(let x=0;x<6;x++)z(t+y(-.3,.3),n+y(-.3,.3),.3,0,0,y(.8,1.6),.7,"#a8e070",3,-.5,!1);tt(3)}}})}function J2(e,t){const[n,r]=T(e.x,e.y,nn(e)+.22+Math.sin(t*3+e.id)*.03);dt(!0);const o=Ot();for(let i=0;i<12;i++){const s=t*5+i*.55+e.id,a=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=mo[i%3],o.fillRect(C(n+Math.cos(s)*a)-1,C(r+Math.sin(s)*a*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const s=-t*2.5+i*Math.PI,a=C(n+Math.cos(s)*16),l=C(r+4+Math.sin(s)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=mo[0],o.fillRect(a-2,l,5,1),o.fillRect(a,l-2,1,5)}o.globalAlpha=1,dt(!1),Math.random()<.1&&z(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,y(.6,1.2),.6,mo[2],2,-.3,!0)}function ty(e){for(let t=0;t<5;t++)A({type:"puff",x:e.x+y(-.35,.35),y:e.y+y(-.35,.35),r:y(12,20),dur:y(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*V,r=y(1,2.5);z(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,2),.5,mo[t%3],2,1,!0)}}const hr=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],ey=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],ny={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function ry(e){et.sfx("item_refresh",e.x,e.y,1),A({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){xe(r);const o=.45+.85*kt(n),[i,s]=T(r.x,r.y),a=o*N.HW*Math.SQRT2*1.08,l=o*N.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,it(r.x,r.y,o,hr[1],null,3),t.fillStyle=hr[2];for(let u=0;u<16;u++){const f=u/16*V-n*5;t.fillRect(C(i+Math.cos(f)*a)-2,C(s+Math.sin(f)*l)-2,5,4)}it(r.x,r.y,o*.6,hr[0],null,1.5,[4,4])}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),[i,s]=T(r.x,r.y,(o?nn(o):.8)*.55),a=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*V-n*6,f=l%2===0,c=f?4:2;t.fillStyle=f?hr[0]:hr[2],t.fillRect(C(i+Math.cos(u)*a)-c/2,C(s+Math.sin(u)*a)-c/2,c,c)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?hr[1]:hr[0];for(let c=3;c<f;c+=2)t.fillRect(C(i+Math.cos(u)*c)-1,C(s+Math.sin(u)*c)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,A({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:hr[1],w:4});for(let l=0;l<20;l++)z(r.x+y(-.4,.4),r.y+y(-.4,.4),y(.2,.9),y(-.6,.6),y(-.6,.6),y(1.5,3),.6,hr[l%3],3,0,!0)}}}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),[i,s]=T(r.x,r.y,(o?nn(o):.8)*.55),a=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(C(i),C(s)),t.rotate(Math.PI*a*a*(3-2*a)),on(t,ey,0,0,3,ny)}}),tt(2)}function jh(e,t,n,r,o){const i=C(t),s=C(n);e.fillStyle=r,e.fillRect(i-3,s,2,3),e.fillRect(i+1,s,2,3),e.fillRect(i-2,s+2,4,2),e.fillStyle=o,e.fillRect(i-1,s+2,2,1)}function oy(e){et.sfx("item_immune",e.x,e.y,1);const t=Math.random()*V;A({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),[s,a]=T(o.x,o.y,(i?nn(i):.8)*.45),l=kt(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const c=f/18*V+t+(1-l)*1.5,h=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),jh(n,s+Math.cos(c)*h,a+Math.sin(c)*h*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(s,a,32*u+6*(1-f),38*u+6*(1-f),0,0,V),n.stroke()}}}),A({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)z(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);tt(2)}function iy(e,t){const n=e.scale||1,[r,o]=T(e.x,e.y,nn(e)*.45),i=30*n,s=36*n;dt(!0);const a=Ot();a.globalAlpha=.5+.1*Math.sin(t*4),a.strokeStyle="#ffcc40",a.lineWidth=2,a.fillStyle="rgba(255,200,60,0.07)",a.beginPath(),a.ellipse(r,o,i,s,0,0,V),a.fill(),a.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,c=i*Math.sqrt(Math.max(0,1-f/s*(f/s)))-4;for(let h=-c+(u&1?5:0);h<=c;h+=10){const d=Math.max(0,1-Math.abs(h-l+f*.5)/16);a.globalAlpha=.16+.6*d,jh(a,r+h,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}a.globalAlpha=1,dt(!1)}function sy(e){et.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*V+y(-.25,.25),t[r*4+1]=y(.8,1.6),t[r*4+2]=y(-14,14),t[r*4+3]=y(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*V+y(-.4,.4);A({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=xe(i),[a,l]=T(i.x,i.y,(s?nn(s):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(a,l,16*f,0,V),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(a,l,13*f,0,V),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(a-2*f,l,8*f,0,V),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(a+2*f,l-2*f,7*f,0,V),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(a,l),r.lineTo(a+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(a+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}dt(!0);const c=Ot(),h=a-14+o/.45*28;c.globalAlpha=.8,c.fillStyle="#ffffff";for(let d=-3;d<=3;d++)c.fillRect(C(h+d*.6),C(l+d*3)-1,2,3);dt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const c=Math.random()*V,h=y(1.5,3.5);z(i.x,i.y,.7,Math.cos(c)*h,Math.sin(c)*h,y(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){dt(!0);const f=Ot();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const c=10+u*60;f.fillRect(C(a-c),C(l)-1,C(c*2),3),f.fillRect(C(a)-1,C(l-c*.6),3,C(c*1.2)),dt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const c=t[f*4],h=u*t[f*4+1]*40,d=t[f*4+3],m=a+Math.cos(c)*(h+8),p=l+Math.sin(c)*(h+8)*.7+u*u*50,g=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(g),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const Es=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function ay(e){et.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,s=Math.random()*9,a=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;A({type:"ring",x:t,y:n,r:.8,dur:.35,col:Es[1],w:4});for(let c=0;c<8;c++)z(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(.3,1),.5,"#c8b48a",3,3,!1);A({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(c,h){const d=h*a,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[g,x]=T(t,n,.3),[b,v]=T(r,o,.3),S=(u-f)*N.HW,_=(u+f)*N.HH;for(let w=0;w<5;w++){const P=(w-2)*.22,R=(w-2)*6;for(let I=p;I<=m;I+=.025){const O=P+Math.sin(I*18+w*1.3+s)*.08,k=(I-p)/(m-p);c.globalAlpha=k*(w===2?1:.7),c.fillStyle=Es[k>.85?0:w===2?1:2],c.fillRect(C(g+(b-g)*I+S*O)-1,C(x+(v-x)*I+_*O+R)-1,3,2)}}for(let w=0;w<3;w++){const P=.25+w*.3;if(P<p||P>m)continue;const R=g+(b-g)*P+S*(w-1)*.35,I=x+(v-x)*P+_*(w-1)*.35-10;c.globalAlpha=1-(P-p)/Math.max(.01,m-p)*.5;for(let O=0;O<9;O++){const k=M.T*9+O*.75+w,G=2+O*1.2;c.fillStyle=Es[O<3?0:1],c.fillRect(C(R+Math.cos(k)*G)-1,C(I+Math.sin(k)*G*.6)-1,2,2)}}}});for(let c=0;c<14;c++){const h=Math.random();z(t+(r-t)*h,n+(o-n)*h,y(.1,.6),(r-t)/l*y(1,3),(o-n)/l*y(1,3),y(.2,1),y(.4,.8),Es[c%3],2,0,!0)}}const Tl=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function ly(e,t){const[r,o]=T(e.x,e.y),i=2.8*N.HW*Math.SQRT2,s=2.8*N.HH*Math.SQRT2;dt(!0);const a=Ot();a.globalAlpha=.07,a.fillStyle="#ff8a2a",a.beginPath(),a.ellipse(r,o,i*.97,s*.97,0,0,V),a.fill(),a.globalAlpha=.22+.06*Math.sin(t*3+e.id),a.strokeStyle="#ff9a3a",a.lineWidth=2,a.setLineDash([10,7]),a.lineDashOffset=-t*24,a.beginPath(),a.ellipse(r,o,i,s,0,0,V),a.stroke(),a.setLineDash([]),a.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*V+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),c=C(3+f*4);a.globalAlpha=.25+.45*f,a.fillStyle=f>.75?Tl[0]:Tl[1],a.fillRect(C(r+Math.cos(u)*i)-2,C(o+Math.sin(u)*s)-c,4,c)}if(a.globalAlpha=1,dt(!1),Math.random()<.35){const l=Math.random()*V,u=Math.sqrt(Math.random())*2.8;z(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,y(.8,1.6),y(.6,1),Tl[Math.random()*4|0],2,-.3,!0,.97)}}const di={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},Oc={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},Zi=2,Cl={};function Qh(e,t){const n=e+(t?"o":"c");if(Cl[n])return Cl[n];let r=di[e]||di.obs;const o=Oc[e]||Oc.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const s=document.createElement("canvas");s.width=r[0].length*Zi,s.height=r.length*Zi;const a=s.getContext("2d");return on(a,r,s.width/2,s.height/2,Zi,o),Cl[n]=s}function Ef(e){const t=di[e]||di.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*Zi}function Ya(e,t){return(t+e.id*1.37)%4.2>.14}function uy(e,t,n){const r=M.T,o=Ot(),i=window.SIM;if(o.globalAlpha=.35,it(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const s=Math.max(0,e.until-n),a=e.kind==="obs"?360:300,[l,u]=T(e.x,e.y);o.globalAlpha=s<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*N.HW*Math.SQRT2,.34*N.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+V*Math.min(1,s/a)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&it(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),it(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function fy(e,t){const n=M.T,[r,o]=T(e.x,e.y),i=o-Ef(e.kind);if(Ya(e,n)){dt(!0);const s=Ot(),a=.6+.4*Math.sin(n*3+e.id);s.globalAlpha=.25*a,s.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",s.fillRect(C(r)-7,C(i)-5,14,10),s.globalAlpha=.6*a,s.fillRect(C(r)-3,C(i)-2,6,4),s.globalAlpha=1,dt(!1)}if(!t){const s=Ot(),a=C(o-(di[e.kind]||di.obs).length*Zi-8+Math.sin(n*5)*2),l=C(r);s.fillStyle="#120c1a",s.fillRect(l-5,a-2,11,4),s.fillRect(l-3,a+2,7,2),s.fillRect(l-1,a+4,3,2),s.fillStyle="#ff4a3a",s.fillRect(l-4,a-1,9,2),s.fillRect(l-2,a+1,5,2),s.fillRect(l,a+3,1,2)}}function cy(e,t,n,r){const o=Qh(t,!0),[i,s]=T(n,r);e.globalAlpha=.6+.15*Math.sin(M.T*6),e.drawImage(o,C(i-o.width/2),C(s-o.height)),e.globalAlpha=1}function hy(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;et.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)z(r,o,.05,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);A({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,s){const[a,l]=T(r,o),u=l-Ef(t?"obs":"sen"),f=6+26*kt(s),c=10*Math.sin(Math.min(1,s*2.2)*Math.PI*.5)*(1-s*.5);i.globalAlpha=1-s,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let h=-8;h<=8;h++){const d=h/8,m=c*(1-d*d);i.fillRect(C(a+d*f)-1,C(u-m)-1,3,2),i.fillRect(C(a+d*f)-1,C(u+m)-1,3,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,s){i.globalAlpha=.5*(1-s),it(r,o,(t?n.WARD_VISION:n.SENTRY_R)*kt(s),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)z(r+y(-.15,.15),o+y(-.15,.15),.5,0,0,y(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function dy(e){const t=e.kind!=="sen",n=e.x,r=e.y;et.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*V,s=y(1,3);z(n,r,y(.2,.5),Math.cos(i)*s,Math.sin(i)*s,y(1.5,3.5),y(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)A({type:"puff",x:n+y(-.3,.3),y:r+y(-.3,.3),r:y(10,16),dur:y(.5,.8),col:[150,140,130]});A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[s,a]=T(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*V+i*2;o.fillRect(C(s+Math.cos(f)*l)-1,C(a+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(C(s)-3,C(a)-3,6,6))}})}const cs=["#fff2c8","#ffd080","#ffa040","#c86a10"];function my(e){et.sfx("mon_howl",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),[s,a]=T(o.x,o.y,(i?nn(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?cs[1]:cs[0];for(let c=-Math.PI*.86;c<=-Math.PI*.14;c+=.1)n.fillRect(C(s+Math.cos(c)*f)-1,C(a+Math.sin(c)*f*.7)-1,3,2)}}}),A({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=M.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||A({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const s=ht(i.uid);if(!s||s.dead||Ae(s))return;const a=M.T,[l,u]=T(s.x,s.y,nn(s)*.72),f=o>.85?(1-o)/.15:1,c=.7+.3*Math.sin(a*14+s.id),h=s.scale||1;r.globalAlpha=.35*f*c,r.fillStyle="#ff2010",r.fillRect(C(l-9*h),C(u-4),C(18*h),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(C(l-5*h)-1,C(u)-1,3,2),r.fillRect(C(l+5*h)-1,C(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(C(l-5*h),C(u)-1,1,1),r.fillRect(C(l+5*h),C(u)-1,1,1),Math.random()<.12&&z(s.x+y(-.3,.3),s.y+y(-.3,.3),.3,0,0,y(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function py(e){const t=M.T,n=Ot(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,it(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let a=0;a<10;a++){const l=J(i*7+a),u=J(i*3+a*5),f=l*V+t*.25*(a%2?1:-1),c=e.r*(.2+.6*u),[h,d]=T(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.15+.1*Math.sin(t+a)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+a))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=a%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(h,d,m,m*.6,0,0,V),n.fill()}dt(!0);const s=Ot();for(let a=0;a<9;a++){const l=(t*.45+J(i+a*11))%1,u=J(i*5+a)*V,f=e.r*.8*J(i+a*3),[c,h]=T(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);s.globalAlpha=Math.sin(l*Math.PI)*o,s.fillStyle=a%2?"#e0b8ff":"#d8ffa0",s.fillRect(C(c)-1,C(h)-1,2,2)}s.globalAlpha=1,dt(!1),n.globalAlpha=1}function yy(e){et.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;A({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,it(e.x,e.y,t*kt(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,it(e.x,e.y,t*.7*kt(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*V,o=y(.5,1.6)*t;z(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function gy(e){et.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*V;A({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,s){i.globalAlpha=(1-s)*.8,it(t,n,r*kt(Math.min(1,s*4)),"#6a4a24",null,5*(1-s)+1),i.globalAlpha=(1-s)*.35,it(t,n,r,null,"#3a2814"),i.globalAlpha=1-s,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let a=0;a<10;a++){const l=o+a/10*V;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,c=l+(J(o+a*9+u)-.5)*.5,[h,d]=T(t+Math.cos(c)*f,n+Math.sin(c)*f);u?i.lineTo(h,d):i.moveTo(h,d)}i.stroke()}}}),A({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,s){const a=s<.15?kt(s/.15):s>.7?(1-s)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*V,c=u?r*(.85+.15*J(o+l)):r*.45,[h,d]=T(t+Math.cos(f)*c,n+Math.sin(f)*c),m=(u?34:24)*a*(.8+.4*J(o+l*3)),p=(J(o+l*7)-.5)*22,g=h+p,x=d-m,b=h-p*.6,v=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(h,d),i.quadraticCurveTo(b,v,g,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(C(g)-2,C(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(C(g),C(x)-2,2,1)}}});for(let i=0;i<30;i++){const s=Math.random()*V,a=y(.5,2.5);z(t+Math.cos(s)*r*.8,n+Math.sin(s)*r*.8,.1,Math.cos(s)*a,Math.sin(s)*a,y(1,3),y(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}tt(6)}const xy=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],vy={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function by(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(et.sfx("camp_"+t,e.x,e.y,1),t==="pack"){A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),[s,a]=T(o.x,o.y,(i?nn(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,on(n,xy,s,a,r<.1?2:3,vy);const[l,u]=T(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=cs[1];for(let f=-1;f<=1;f++)for(let c=0;c<8;c++)n.fillRect(C(l+f*8-10+c*3),C(u-12+c*3),2,2)}}});for(let n=0;n<18;n++)z(e.x+y(-.4,.4),e.y+y(-.4,.4),y(.2,1),0,0,y(1,2.2),.8,cs[n%4],3,0,!0)}else if(t==="spore"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=xe(o),[s,a]=T(o.x,o.y,(i?nn(i):.8)*.5),l=kt(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*V+l*5,c=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(C(s+Math.cos(f)*c)-2,C(a+Math.sin(f)*c*.6)-2,4,4)}}}),A({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)A({type:"puff",x:e.x+y(-.6,.6),y:e.y+y(-.6,.6),r:y(8,14),dur:y(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const s=xe(i),[a,l]=T(i.x,i.y,(s?nn(s):.8)*.4),u=kt(Math.min(1,o/.45)),f=s&&s.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let c=0;c<10;c++){const h=c/10*V,d=(70*(1-u)+24)*f,m=C(a+Math.cos(h)*d),p=C(l+Math.sin(h)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,tt(2);for(let c=0;c<10;c++)z(i.x+y(-.4,.4),i.y+y(-.4,.4),.4,y(-1,1),y(-1,1),y(1,2),.6,c%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function My(e,t,n){if(t.camp_bark){const[r,o]=T(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,s=i*N.HW*Math.SQRT2,a=i*N.HH*Math.SQRT2,l=Ot();for(let u=0;u<12;u++){const f=u/12*V;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(C(r+Math.cos(f)*s)-2,C(o+Math.sin(f)*a)-1,4,3)}}if(t.camp_pack){dt(!0);const r=Ot(),[o,i]=T(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=cs[2];for(let s=0;s<3;s++){const a=n*.8+s*V/3,l=o+Math.cos(a)*26,u=i+Math.sin(a)*13;for(let f=-1;f<=1;f++)for(let c=0;c<4;c++)r.fillRect(C(l+f*4-4+c*2),C(u-3+c*2),2,1)}r.globalAlpha=1,dt(!1)}if(t.camp_spore){dt(!0);const r=Ot(),[o,i]=T(e.x,e.y,nn(e)*.5);for(let s=0;s<4;s++){const a=n*(.9+s*.2)+s*1.7+e.id,l=o+Math.cos(a)*20+Math.sin(n*1.7+s)*5,u=i+Math.sin(a*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+s),r.fillStyle=s%2?"#e0b8ff":"#c8f090",r.fillRect(C(l)-1,C(u)-1,2,2)}r.globalAlpha=1,dt(!1)}}function mi(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function He(e){return nn(e)*.68}const na=(e,t,n,r)=>!!t[n],Sy=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],_y={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},Rl=["#ff5a6a","#5ab4ff"];function wy(e){et.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*V,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*V+y(-.25,.25),r[o*3+1]=y(24,48),r[o*3+2]=o/t*.2;A({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const a=xe(s),[l,u]=T(s.x,s.y,(a?He(a):.6)+.22),f=l+20,c=i<.28?-.8+1.7*kt(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(C(f),C(u)),o.rotate(c),on(o,Sy,0,0,3,_y)}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,s){const a=xe(s),l=a?He(a):.6,[u,f]=T(s.x,s.y,l+.45),c=u+30,[h,d]=T(s.x,s.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(C(c-p),C(f)-1,C(p*2),2),o.fillRect(C(c)-1,C(f-p),2,C(p*2))}}for(let m=0;m<t;m++){const p=Rl[m&1];for(let g=2;g>=0;g--){const x=(i-.24-r[m*3+2])/.58-g*.035;if(x<=0||x>1)continue;const b=r[m*3],v=Math.sin(x*Math.PI),S=c+(h-c)*x+Math.cos(b)*34*v,_=f+(d-f)*x+Math.sin(b)*12*v-r[m*3+1]*v;if(g){o.globalAlpha=.5/g,o.fillStyle=p,o.fillRect(C(S)-1,C(_)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(C(S)-4,C(_)-4,8,8),o.globalAlpha=1,o.fillRect(C(S)-2,C(_)-2,4,4),o.fillStyle="#ffffff",o.fillRect(C(S)-1,C(_)-2,2,1)}}!s.land&&i>.84&&(s.land=!0,A({type:"custom",layer:"ground",add:!0,dur:.55,x:s.x,y:s.y,uid:s.uid,draw(m,p,g){xe(g),m.globalAlpha=1-p,m.lineDashOffset=p*30,it(g.x,g.y,.35+.5*kt(p),Rl[0],null,3,[5,5]),m.lineDashOffset=-p*30,it(g.x,g.y,.3+.42*kt(p),Rl[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),le(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const Lr=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function Ay(e){et.sfx("item_phase",e.x,e.y,1),A({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),i=o&&o.scale||1,s=T(r.x,r.y,0)[1],a=T(r.x,r.y,(o?He(o):.8)*1.05)[1],l=T(r.x,r.y)[0],u=8,f=1-n,c=C(26*i);for(let h=0;h<u;h++){const d=C(a+(s-a)*(h+.5)/u),m=Math.sin(h*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=Lr[1],t.fillRect(C(l-c/2+m-3),d-1,c,3),t.fillStyle=Lr[2],t.fillRect(C(l-c/2-m+3),d-1,c,3)}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){xe(r);const o=.28*kt(n),i=.45+.45*n;t.globalAlpha=1-n,it(r.x-o,r.y+o,i,Lr[1],null,2),it(r.x+o,r.y-o,i,Lr[2],null,2)}}),le(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function Ty(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,s=Math.hypot(o,i);if(s<.003||s>1)return;const a=o/s,l=i/s,[u,f]=T(e.x,e.y),[c,h]=T(e.x-a,e.y-l),d=Math.hypot(c-u,h-f)||1,m=(c-u)/d,p=(h-f)/d,g=He(e)*N.ZK,x=e.scale||1;dt(!0);const b=Ot();for(let v=0;v<5;v++){const S=g*(.15+v*.17),_=(22+14*Math.sin(t*17+v*2.1+e.id))*x,w=u+m*8,P=f-S+p*8;for(let R=0;R<_;R+=2){const I=1-R/_;b.globalAlpha=.55*I,b.fillStyle=Lr[1],b.fillRect(C(w+m*R),C(P+p*R)-2,2,1),b.fillStyle=Lr[2],b.fillRect(C(w+m*R),C(P+p*R)+1,2,1)}}if(b.globalAlpha=1,dt(!1),Math.random()<.35){const v=Math.random()<.5;z(e.x-a*.2+(v?.06:-.06),e.y-l*.2-(v?.06:-.06),.02,0,0,0,.45,v?Lr[1]:Lr[2],3,0,!0)}}const Rr=["#ffffff","#a8d0ff","#4a8aff","#26349a"],Ls=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function Su(e,t,n,r,o){const i=Ls[(r%Ls.length+Ls.length)%Ls.length],s=C(t)-o*1.5,a=C(n)-o*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(s+u*o,a+l*o,o,o)}const Cy=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],Ry={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function Py(e){et.sfx("item_arcane",e.x,e.y,1);const t=e.radius||mi("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(s,a,l){xe(l);const u=Math.min(1,a/.12),f=.95*u,[c,h]=T(l.x,l.y),d=f*.8*N.HW*Math.SQRT2,m=f*.8*N.HH*Math.SQRT2;s.globalAlpha=a<.7?1:(1-a)/.3,it(l.x,l.y,f,Rr[1],null,2),it(l.x,l.y,f*.62,Rr[2],null,2),s.fillStyle=Rr[0];for(let p=0;p<10;p++){const g=p/10*V+a*2.4;Su(s,c+Math.cos(g)*d,h+Math.sin(g)*m,p,2)}}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(s,a){const l=t*kt(a),[u,f]=T(n,r),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=40;s.globalAlpha=(1-a)*.35,it(n,r,l,Rr[2],null,2),s.globalAlpha=1-a*a;for(let m=0;m<d;m++){const p=m/d*V;s.fillStyle=m%4?Rr[1]:Rr[0],Su(s,u+Math.cos(p)*c,f+Math.sin(p)*h,m*7+(a*12|0),2)}}});const i=M.game;if(i)for(const s of i.heroes||[]){if(s.dead||s.team!==e.team)continue;const a=Math.hypot(s.x-n,s.y-r);a>t||A({type:"custom",layer:"top",dur:.7,delay:kt(a/t)*o*.85,x:s.x,y:s.y,uid:s.id,draw(l,u,f){const c=xe(f),h=c?He(c):.8,d=Math.min(1,u/.4),[m,p]=T(f.x,f.y,h+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),on(l,Cy,m,p,2,Ry);return}const g=(u-.4)/.6;l.globalAlpha=1-g,l.fillStyle=Rr[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),v=4+g*14;l.fillRect(C(m+Math.cos(b)*v)-1,C(p+Math.sin(b)*v*.8+g*g*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)z(f.x+y(-.2,.2),f.y+y(-.2,.2),h*.8,0,0,y(-.6,-.2),.5,Rr[x%3],2,0,!0)}}})}le(n,r,2.6,5933823,.85,1),tt(2)}const Iy=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],zy={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},Oy=[0,1,2,3].map(e=>Iy.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function Fy(e){et.sfx("item_clarity",e.x,e.y,1),A({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),[i,s]=T(r.x,r.y,(o?He(o):.6)*.85+Math.min(1,n*5)*.08),a=i+26*(o&&o.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(C(a),C(s)),t.rotate(-l),on(t,Oy[u],0,0,3,zy),!r.pop&&n>.12&&(r.pop=!0,z(r.x,r.y,(o?He(o):.8)+.5,y(-.6,.6),y(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),A({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),i=o?He(o):.8,s=o&&o.scale||1;for(let a=0;a<8;a++){const l=n*1.6-a*.075;if(l<0||l>1)continue;const u=a*2.4+l*4,[f,c]=T(r.x,r.y,i*(.1+l*1.1)),h=C(f+Math.cos(u)*20*s),d=C(c+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(h-1,d-2,3,1),t.fillRect(h-1,d+2,3,1),t.fillRect(h-2,d-1,1,3),t.fillRect(h+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(h-1,d-1,1,1)):(t.fillRect(h-3,d,2,1),t.fillRect(h+2,d,2,1),t.fillRect(h,d-3,1,2),t.fillRect(h,d+2,1,2))}}}),le(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const Ey=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],Ly={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},Us=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function Uy(e){et.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;A({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(s,a,l){const u=a*l.dur;if(u<o){const p=u/o,[g,x]=T(t,n,.9+p*(2.1-p)*1.2);s.translate(C(g),C(x)),s.rotate(p*7),on(s,Ey,0,0,3,Ly);return}const f=(u-o)/.25,[c,h]=T(t,n,2.2);if(!l.burst){l.burst=!0,tt(2);for(let p=0;p<70;p++){const g=Math.random()*V,x=y(.5,3.4);z(t,n,2.2,Math.cos(g)*x,Math.sin(g)*x,y(-.4,1),y(1.1,1.8),Us[p%4],p%5?2:3,1.4,!0,.95)}}dt(!0);const d=Ot();d.globalAlpha=1-f,d.fillStyle=Us[1];const m=6+f*30;d.fillRect(C(c-m),C(h)-1,C(m*2),2),d.fillRect(C(c)-1,C(h-m),2,C(m*2)),d.fillRect(C(c)-4,C(h)-4,8,8),dt(!1)}}),A({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(s,a){const l=r*kt(a),[u,f]=T(t,n),c=l*N.HW*Math.SQRT2,h=l*N.HH*Math.SQRT2,d=72,m=Math.floor(M.T*20);for(let p=0;p<d;p++){const g=J(i+p*3+m);if(g<.3)continue;const x=p/d*V+J(i+p)*.08,b=1-J(i+p*7)*.06;s.globalAlpha=(1-a)*g,s.fillStyle=Us[p%4];const v=g>.85?3:2;s.fillRect(C(u+Math.cos(x)*c*b)-1,C(f+Math.sin(x)*h*b)-1,v,v)}}}),A({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(s,a){const l=a*1.8;for(let u=0;u<26;u++){const f=J(i+u*11)*V,c=Math.sqrt(J(i+u*5))*r,h=kt(c/r)*.9+J(i+u)*.3,d=(l-h)/.5;if(d<0||d>1)continue;const[m,p]=T(t+Math.cos(f)*c,n+Math.sin(f)*c,.3+J(i+u*13)*.8),g=C(2+5*Math.sin(d*Math.PI));s.globalAlpha=Math.sin(d*Math.PI),s.fillStyle=Us[u%4],s.fillRect(C(m)-g,C(p),g*2+1,1),s.fillRect(C(m),C(p)-g,1,g*2+1)}}}),le(t,n,3,16773312,.9,.6,{delay:o})}const ky=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],Dy={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function Xy(e){et.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;A({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,s,a){const l=ht(a.uid),u=l&&!l.dead?He(l):.8,[f,c]=T(t,n,u*.55),h=M.T;if(s<.3){dt(!0);const d=Ot(),m=s/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const g=36-p*8;d.fillRect(C(f-r*(10+p*8+m*10)),C(c-g/2),p?2:3,g)}dt(!1)}i.globalAlpha=s<.65?1:(1-s)/.35;for(let d=0;d<3;d++){const m=kt(Math.min(1,s*1.3)),p=r*(d===1?-.4:1),g=f+p*m*(26+d*10)+Math.sin(s*14+d*2+o)*4,x=c-4-m*(24+d*9)+Math.sin(s*21+d)*3;on(i,ky[Math.floor(h*22)+d&1],g,x,d===1?2:3,Dy)}}})}const jn=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function Gy(e,t,n,r,o){for(let i=0;i<6;i++){const s=o+i/6*V,a=Math.cos(s),l=Math.sin(s)*.5;for(let u=0;u<=r;u+=2)e.fillRect(C(t+a*u)-1,C(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+a*r*u,c=n+l*r*u,h=r*(.32-u*.18);for(const d of[-1,1]){const m=s+d*.9,p=Math.cos(m),g=Math.sin(m)*.5;for(let x=2;x<=h;x+=2)e.fillRect(C(f+p*x)-1,C(c+g*x)-1,2,2)}}}}function Ny(e){et.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||mi("frost_guard","radius",4.5),o=Math.random()*99,i=.55,s=1.25,a=72,l=new Float32Array(a),u=new Float32Array(a),f=new Float32Array(a),c=[];for(let h=0;h<a;h++)l[h]=h/a*V+(J(o+h)-.5)*.06,u[h]=14+J(o+h*7)*18,f[h]=(J(o+h*3)-.5)*.12,c.push(h);c.sort((h,d)=>Math.sin(l[h])-Math.sin(l[d])),A({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(h,d){const[m,p]=T(t,n),g=kt(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;h.globalAlpha=.22*x,it(t,n,r*g,null,"rgba(170,225,255,1)"),h.globalAlpha=.7*x,it(t,n,r*g,jn[2],null,2,[3,4]),h.globalAlpha=.85*x,h.fillStyle=jn[1];for(let b=0;b<12;b++){const v=o+b/12*V,S=r*g*(.55+.4*J(o+b));for(let _=.3;_<S;_+=.22){const[w,P]=T(t+Math.cos(v)*_,n+Math.sin(v)*_);if(h.fillRect(C(w)-1,C(P)-1,2,2),(_*10|0)%2){const[R,I]=T(t+Math.cos(v+.5)*(_+.12),n+Math.sin(v+.5)*(_+.12));h.fillRect(C(R),C(I),2,1);const[O,k]=T(t+Math.cos(v-.5)*(_+.12),n+Math.sin(v-.5)*(_+.12));h.fillRect(C(O),C(k),2,1)}}}h.globalAlpha=x,h.fillStyle=d<.12?jn[0]:jn[1],Gy(h,m,p,26,o+d*1.2)}}),A({type:"custom",layer:"top",dur:s,x:t,y:n,draw(h,d){const m=d*s,p=kt(Math.min(1,m/i)),g=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(s-i-.2)):1,b=(v,S,_,w,P)=>{h.fillStyle=jn[4],h.beginPath(),h.moveTo(v-w-1,S+1),h.lineTo(v-w*.6,S-_*.7),h.lineTo(v+P,S-_-1),h.lineTo(v+w*.6,S-_*.7),h.lineTo(v+w+1,S+1),h.closePath(),h.fill(),h.fillStyle=jn[2],h.beginPath(),h.moveTo(v-w,S),h.lineTo(v-w*.6+1,S-_*.7),h.lineTo(v+P,S-_),h.lineTo(v,S),h.closePath(),h.fill(),h.fillStyle=jn[3],h.beginPath(),h.moveTo(v,S),h.lineTo(v+P,S-_),h.lineTo(v+w*.6-1,S-_*.7),h.lineTo(v+w,S),h.closePath(),h.fill(),h.fillStyle=jn[0],h.fillRect(C(v+P)-1,C(S-_),2,3),h.fillStyle=jn[1],h.fillRect(C(v-w*.5),C(S-_*.6),1,C(_*.45))};h.globalAlpha=1;for(const v of c){const S=l[v],_=Math.cos(S),w=Math.sin(S),P=u[v]*(.55+.45*p)*x;if(P<2)continue;const[R,I]=T(t+_*g*(.84+f[v]),n+w*g*(.84+f[v]));b(R,I,P*.5,3+P*.08,_*2);const[O,k]=T(t+_*g*(1+f[v]),n+w*g*(1+f[v]));b(O,k,P,3+P*.12,_*3),m<i&&!(v&3)&&(h.globalAlpha=.85,h.fillStyle=jn[0],h.fillRect(C(O)-4,C(k)-1,8,2),h.globalAlpha=1)}}});for(let h=0;h<46;h++){const d=Math.random()*V,m=Math.sqrt(Math.random())*r;z(t+Math.cos(d)*m,n+Math.sin(d)*m,y(.8,1.8),y(-.3,.3),y(-.3,.3),y(-.2,.1),y(1,1.6),h%3?"#ffffff":"#c8f0ff",2,.25,h%4===0,.97)}le(t,n,r*1.05,9102591,.95,.9),tt(4)}const zn=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function By(e){et.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),s=Math.min(.38,.12+i*.04),a=Math.random()*9;A({type:"custom",layer:"top",add:!0,dur:s+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(s+.05)/s),[c,h]=T(t,n,.65),[d,m]=T(r,o,.55),p=d-c,g=m-h,x=Math.hypot(p,g)||1,b=p/x,v=g/x,S=-v,_=b,w=c+p*f,P=h+g*f;for(let R=0;R<2;R++)for(let I=0;I<22;I++){const O=I*5,k=Math.sin(I*.7-M.T*28+a+R*Math.PI)*(2+I*.45),G=I<6?3:2;l.globalAlpha=(1-I/22)*.85,l.fillStyle=zn[I<5?1:I<13?2:3],l.fillRect(C(w-b*(O+40)+S*k-G/2),C(P-v*(O+40)+_*k-G/2),G,G)}l.globalAlpha=.28,l.fillStyle=zn[2];for(let R=0;R<44;R+=4)l.fillRect(C(w-b*R)-4,C(P-v*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?zn[0]:R<30?zn[1]:zn[2],l.fillRect(C(w-b*R+S*.5)-1,C(P-v*R+_*.5)-1,3,3);for(let R=0;R<14;R++){const I=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?zn[0]:zn[1];for(let O=-I;O<=I;O+=1.5)l.fillRect(C(w+b*(12-R)+S*O),C(P+v*(12-R)+_*O),2,2)}l.fillStyle=zn[0];for(let R=-4;R<=4;R++)l.fillRect(C(w-b*36+S*R*1.5)-1,C(P-v*36+_*R*1.5)-1,2,2)}}),A({type:"custom",layer:"top",add:!0,dur:.85,delay:s,x:r,y:o,draw(l,u,f){const[c,h]=T(r,o,.55);if(!f.hit){f.hit=!0,tt(3);for(let d=0;d<14;d++){const m=Math.random()*V,p=y(1,3);z(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,y(.2,1.5),.45,zn[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=zn[0];for(let p=-m;p<=m;p+=2){const g=m-Math.abs(p);l.fillRect(C(c+p),C(h-g*.7),2,2),l.fillRect(C(c+p),C(h+g*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*V+u*3.2+a,p=6+kt(u)*26,g=c+Math.cos(m)*p,x=h+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const v=m-b*.25,S=p-b*2;l.fillStyle=zn[b===0?0:b<2?1:2],l.fillRect(C(c+Math.cos(v)*S)-1,C(h+Math.sin(v)*S*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=zn[0],l.fillRect(C(g)-1,C(x)-1,3,3)}}}),le(r,o,1.6,8060880,.85,.5,{delay:s}),le(t,n,1,8060880,.4,.25)}const Bo=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function $y(e){et.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,s]=T(t,n),a=(.35+1.25*kt(o))*N.HW*Math.SQRT2,l=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const c=l+u*V/4+f,h=a*(1-f*.25);r.fillStyle=f<.3?Bo[0]:Bo[3],r.fillRect(C(i+Math.cos(c)*h)-1,C(s+Math.sin(c)*h*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*V,i=y(1,2.2);z(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,y(1.5,3),y(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function Zh(e,t,n,r){const o=M.T-(t._cyS||M.T),i=Math.min(1,o/.3),[s,a]=T(t.x,t.y),l=2.5*N.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(s-9*u,a),e.lineTo(s-43*u,a-l),e.lineTo(s+43*u,a-l),e.lineTo(s+9*u,a),e.closePath(),e.fill());for(let c=0;c<f;c++){const h=c/(f-1),d=a-l*h,m=(9+h*34)*u+Math.sin(n*3+c)*2,p=m*.32,g=n*(8-h*3)+c*.9,x=s+Math.sin(n*2.2+h*3)*h*6;for(let b=0;b<V;b+=.12){const v=b+g,S=Math.sin(v);if(S>0!==r)continue;const _=(b*3/V+c*.37)%1;_>.72||(e.globalAlpha=(r?.9:.55)*(1-h*.3),e.fillStyle=_<.18?Bo[0]:_<.45?Bo[1]:Bo[2],e.fillRect(C(x+Math.cos(v)*m)-2,C(d+S*p)-1,4,3))}}for(let c=0;c<6;c++){const h=n*6.5+c*1.05,d=Math.sin(h);if(d>0!==r)continue;const m=(n*.55+c*.17)%1,p=a-l*m,g=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=c%2?"#6aa040":"#8a6a40",e.fillRect(C(s+Math.cos(h)*g)-1,C(p+d*g*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,it(t.x,t.y,.55,Bo[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function Wy(e){for(let t=0;t<6;t++)A({type:"puff",x:e.x+y(-.4,.4),y:e.y+y(-.4,.4),r:y(12,20),dur:y(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*V,r=y(1,2.5);z(e.x,e.y,y(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,y(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const Hy=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],Vy={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function qy(e){et.sfx("item_reflect",e.x,e.y,1),A({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),i=o&&o.scale||1,[s,a]=T(r.x,r.y,(o?He(o):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*V+n*1.2,c=34*i*Math.max(0,l),h=s+Math.cos(f)*c,d=a+Math.sin(f)*c*.55;t.save(),t.translate(C(h),C(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),on(t,Hy,0,0,2,Vy),t.restore()}if(n>.3&&n<.6){dt(!0);const u=Ot(),f=(n-.3)/.3*V;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(C(s+Math.cos(f)*34*i)-3,C(a+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(C(s+Math.cos(f)*34*i)-1,C(a+Math.sin(f)*34*i*.55)-3,2,6),dt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*V,r=y(1,2.5);z(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,y(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}le(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function Yy(e,t,n){const r=t.scale||1,[o,i]=T(t.x,t.y,He(t)*.4),s=26*r,a=(n*1.4+t.id)%V;for(let l=0;l<6;l++){const u=n*1.6+l/6*V,f=Math.sin(u),c=C(o+Math.cos(u)*s),h=C(i+f*s*.4),d=Math.abs(((u-a)%V+V)%V)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(c-2,h-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(c-1,h-4,2,7),e.fillStyle="#d02a3a",e.fillRect(c+1,h-2,1,4)}e.globalAlpha=1}const xn=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function Ky(e){et.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||mi("veil_discord","radius",3),o=.5,i=Math.random()*9,s=96;M.game,mi("veil_discord","dur",14),A({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(a,l){const u=Math.min(1,l*(o+.14)/o),f=2.4*(1-u*u),c=Math.max(0,(l-.78)/.22),h=.6*N.ZK*(1-c);if(!(h<2))for(let d=0;d<2;d++)for(let m=0;m<s;m++){const p=m/s*V,g=Math.sin(p);if(g>0!=(d===1))continue;const[x,b]=T(t+Math.cos(p)*r,n+g*r,f+.6),v=h*(.78+.22*J(i+m)),S=Math.sin(m*1.3+M.T*4)*.5+.5;a.globalAlpha=d?.92:.5,a.fillStyle=xn[3],a.fillRect(C(x)-2,C(b)-1,5,2);for(let _=0;_<v;_+=3){const w=Math.sin(_*.1+M.T*7+m*.4)*(_/v)*3;a.fillStyle=_<3?xn[0]:S>.66?xn[1]:S>.25?xn[2]:xn[3],a.fillRect(C(x+w)-2,C(b+_),4,3)}}}}),A({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(a,l){const[u,f]=T(t,n),c=r*N.HW*Math.SQRT2,h=r*N.HH*Math.SQRT2;a.globalAlpha=.35*(1-l),it(t,n,r*(.9+.1*l),null,xn[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){a.globalAlpha=(1-m)*.9,a.fillStyle=d?xn[1]:xn[0];for(let p=0;p<V;p+=.05){const g=(.3+.75*m)*(1+Math.sin(p*7+d*2+M.T*6)*.06);a.fillRect(C(u+Math.cos(p)*c*g)-1,C(f+Math.sin(p)*h*g)-1,3,2)}}}}}),A({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(a,l,u){if(!u.done){u.done=!0,tt(3);for(let f=0;f<10;f++){const c=f/10*V;A({type:"puff",x:t+Math.cos(c)*r*.9,y:n+Math.sin(c)*r*.9,r:y(12,20),dur:y(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const c=Math.random()*V,h=Math.sqrt(Math.random())*r;z(t+Math.cos(c)*h,n+Math.sin(c)*h,.1,0,0,y(.6,1.6),y(.6,1),xn[f%3],2,-.2,!0)}}}}),le(t,n,r*1.1,13656319,.7,.9,{delay:o})}function jy(e,t,n){const[r,o]=T(t.x,t.y,He(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,s=C(11*i);for(let a=-s;a<=s;a+=2){const l=(a+s)/(s*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+C(5*J(t.id+a*3))+Math.sin(l*Math.PI)*3,c=C(o-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=xn[3],e.fillRect(C(r+a)-1,c-1,3,f+2),e.fillStyle=a/2%2?xn[2]:xn[1],e.fillRect(C(r+a),c,2,f),e.fillStyle=xn[0],e.fillRect(C(r+a),c,2,1)}Math.random()<.04&&z(t.x+y(-.15,.15),t.y+y(-.15,.15),He(t)+.05,0,0,-.3,.6,xn[2],2,1,!1)}const Fc=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],Ec={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function Qy(e){et.sfx("item_mekansm",e.x,e.y,1),A({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),[i,s]=T(r.x,r.y,(o?He(o):.6)+.12),a=n<.12?kt(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(C(i-24*a),C(s)),t.rotate(l),on(t,Fc,0,0,C(4*a)||1,Ec),t.restore(),t.save(),t.translate(C(i+4*a),C(s-16*a)),t.rotate(-l*1.33+.35),on(t,Fc,0,0,C(3*a)||1,Ec),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)A({type:"puff",x:r.x+y(-.2,.2),y:r.y+y(-.2,.2),r:y(8,12),dur:y(.5,.8),col:[235,235,240]})}}}),A({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=xe(r),i=o?He(o):.8,s=o&&o.scale||1;for(let a=0;a<2;a++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*V*2+a*Math.PI,[c,h]=T(r.x,r.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":a?"#ffe07a":"#8aff9a",t.fillRect(C(c+Math.cos(f)*24*s-d/2),C(h+Math.sin(f)*8*s-d/2),d,d)}if(n>.45){const a=(n-.45)/.55,[l,u]=T(r.x,r.y,i+.1+a*.5);t.globalAlpha=1-a,t.fillStyle="#c8ffd0",t.fillRect(C(l)-1,C(u)-5,3,11),t.fillRect(C(l)-5,C(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(C(l),C(u),1,1)}}}),le(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const Zy=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),Jy={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},Ro=["#fff6c0","#ffd24a","#d89a20"];function tg(e){et.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?ht(e.uid):null,o=r?r.x:t,i=r?r.y:n,s=.34;A({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(a,l){const[u,f]=T(o,i,.6),[c,h]=T(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;a.globalAlpha=Math.sin(m*Math.PI)*.9,a.fillStyle=Ro[d%2],a.fillRect(C(u+(c-u)*m)-1,C(f+(h-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(a,l,u){const f=Math.min(1,l/s),c=2.3-1.4*kt(f),[h,d]=T(t,n,c);if(a.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,on(a,Zy,h+(f<1?Math.sin(l*30)*1.5:0),d,4,Jy),!u.hit&&f>=1){u.hit=!0,tt(3);for(let m=0;m<22;m++){const p=Math.random()*V,g=y(.6,2.4);z(t,n,.5,Math.cos(p)*g,Math.sin(p)*g,y(2.5,4.5),y(.7,1.1),Ro[m%3],3,9,m%3===0,.97)}A({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[g,x]=T(t,n);for(let S=0;S<9;S++){const _=(S-4)*5+Math.sin(S*2.7)*2,w=(60+70*J(S*3.1))*Math.min(1,p*4+.1),P=x-w-p*30;for(let R=0;R<w;R+=3){const I=1-R/w;m.globalAlpha=(1-p)*(1-I*.85),m.fillStyle=R<6?Ro[0]:Ro[1],m.fillRect(C(g+_),C(P+R),2,2)}}const b=C(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),v=C(x-34);m.globalAlpha=1-p,m.fillStyle=Ro[0],m.fillRect(C(g)-b,v,b*2,2),m.fillRect(C(g)-1,v-b,2,b*2),m.fillRect(C(g)-3,v-2,6,6)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,it(t,n,.3+1.1*kt(p),Ro[1],null,3,[2,3])}})}}}),le(t,n,2,16765514,1,.7,{delay:s})}function eg(e){et.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=mi("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),s=new Float32Array(r+1);for(let a=0;a<r;a++){const l=a/r*V+.6;i[a]=t+Math.cos(l)*1.1,s[a]=n+Math.sin(l)*1.1}i[r]=t,s[r]=n,A({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(a,l){a.globalAlpha=1-l,a.lineDashOffset=M.T*30,it(t,n,.5+1*kt(l),"#c8d0e0",null,2,[4,6]),a.lineDashOffset=0,it(t,n,.4+.8*kt(l),"#9ad8ff",null,1.5)}}),A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,l,u){const f=kt(Math.min(1,l/.42)),c=Math.max(0,(l-.48)/.45);for(let h=0;h<=r;h++){const d=t+(i[h]-t)*f,m=n+(s[h]-n)*f,[p,g]=T(d,m,.05),x=(1-f)*4*Math.PI+h,b=C(Math.max(2,14*Math.abs(Math.cos(x)))),v=36,S=C(g-v),_=C(v*Math.min(1,c));if(_>=v)continue;a.globalAlpha=1,a.fillStyle="#2a3040",a.fillRect(C(p)-b-2,S+_-2,b*2+4,v-_+2),a.fillStyle="#c8d0e0",a.fillRect(C(p)-b-1,S+_-1,b*2+2,v-_),a.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",a.fillRect(C(p)-b+1,S+_+1,b*2-2,v-_-4),a.fillStyle="#ffffff";const w=(M.T*40+h*13+o*10)%(v+20)-10;for(let P=0;P<4;P++){const R=C(S+w+P*2);R>S+_&&R<S+v-3&&a.fillRect(C(p)-b+2+P,R,Math.max(1,C(b*.5)),1)}c>0&&Math.random()<.7&&z(d+y(-.12,.12),m+y(-.12,.12),(v-_)/N.ZK,y(-.2,.2),y(-.2,.2),y(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let h=0;h<=r;h++)A({type:"custom",layer:"top",add:!0,dur:.25,x:i[h],y:s[h],draw(d,m,p){const[g,x]=T(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(C(g)-18,C(x)-22,36,2),d.fillRect(C(g)-18,C(x)+6,36,2),d.fillRect(C(g)-1,C(x)-30,2,44)}})}}}),le(t,n,2,10148095,.75,.8)}const On=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function ng(e){et.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,s=mi("abyssal_blade","stun",2),a=Math.random()*99,l=28,u=new Float32Array(l);for(let h=0;h<l;h++)u[h]=(h%2?.34:.5)+J(a+h)*.14;A({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(h,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const g=m-p*.06;if(g<0)break;const[x,b]=T(t+(r-t)*g,n+(o-n)*g,.5+Math.sin(g*Math.PI)*1.1),v=C(10-p);h.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),h.fillStyle=On[2],h.fillRect(C(x)-v/2-1,C(b)-v/2-1,v+2,v+2),h.fillStyle=On[0],h.fillRect(C(x)-v/2,C(b)-v/2,v,v)}}});const f=s+.35,c=h=>h<i?0:h<i+.12?kt((h-i)/.12):h>f-.3?Math.max(0,(f-h)/.3):1;A({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(h,d,m){const p=d*f,g=c(p);if(g<=0)return;if(!m.hit&&p>=i){m.hit=!0,tt(6);for(let v=0;v<18;v++){const S=Math.random()*V,_=y(1.5,3.5);z(r,o,.3,Math.cos(S)*_,Math.sin(S)*_,y(1,3),.5,v%3?On[3]:On[2],3,6,!0)}}h.fillStyle=On[1];for(let v=0;v<8;v++){const S=a+v/8*V;for(let _=.45;_<.45+.5*g;_+=.07){const w=S+(J(a+v*5+(_*20|0))-.5)*.5,[P,R]=T(r+Math.cos(w)*_,o+Math.sin(w)*_);h.fillRect(C(P)-1,C(R)-1,2,2)}}h.beginPath();for(let v=0;v<=l;v++){const S=v%l/l*V,[_,w]=T(r+Math.cos(S)*u[v%l]*g,o+Math.sin(S)*u[v%l]*g);v?h.lineTo(C(_),C(w)):h.moveTo(C(_),C(w))}h.fillStyle=On[0],h.fill();for(let v=0;v<l;v++){const S=v/l*V,_=(v+1)/l*V,[w,P]=T(r+Math.cos(S)*u[v]*g,o+Math.sin(S)*u[v]*g),[R,I]=T(r+Math.cos(_)*u[(v+1)%l]*g,o+Math.sin(_)*u[(v+1)%l]*g);for(let O=0;O<1;O+=.2)h.fillStyle=Math.sin(S)<0?On[3]:On[2],h.fillRect(C(w+(R-w)*O)-1,C(P+(I-P)*O)-1,2,2)}const[x,b]=T(r,o);for(let v=0;v<10;v++){const S=(M.T*.9+v/10)%1,_=v*2.4+S*5,w=(1-S)*22*g;h.globalAlpha=S,h.fillStyle=On[3],h.fillRect(C(x+Math.cos(_)*w)-1,C(b+Math.sin(_)*w*.5)-1,2,2)}}}),A({type:"custom",layer:"top",dur:f,x:r,y:o,draw(h,d){const m=d*f,p=c(m);if(p<=0)return;const[g,x]=T(r,o,.42),b=kt(Math.min(1,(m-i)/.2));for(let v=0;v<5;v++){const S=v/5*V+a,[_,w]=T(r+Math.cos(S)*.36*p,o+Math.sin(S)*.36*p),P=Math.sin(M.T*6+v*1.7)*2,R=_+(g-_)*.55*b+P,I=w-(w-x)*b*p-8*b,O=_+Math.cos(S)*16*b,k=w-(w-x)*.7*b*p;for(let G=0;G<2;G++)for(let $=0;$<=1;$+=.06){const ot=1-$,vt=ot*ot*_+2*ot*$*O+$*$*R,F=ot*ot*w+2*ot*$*k+$*$*I,E=$<.5?5:$<.8?4:3;G?(h.fillStyle=$>.85?On[3]:On[2],h.fillRect(C(vt)-1,C(F)-1,2,2)):(h.fillStyle=On[0],h.fillRect(C(vt-E/2)-1,C(F-E/2)-1,E+2,E+2))}}}}),le(r,o,1.6,9059071,.6,.6,{delay:i})}const Wr={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},pi={blue:6996223,red:16743002,neutral:16765514};function rg(e){et.sfx("tp_start",e.x,e.y,1);const t=ht(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=Wr[r]||Wr.blue,i=e.ex===void 0?e.x:e.ex,s=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:M.T,dur:n,ex:i,ey:s,team:r});const a=l=>{const u=ht(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};A({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(l,u,f){if(a(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=T(i,s),m=M.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,it(i,s,1.05,o[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,it(i,s,.8,o[1],null,3,[7,5]),l.lineDashOffset=-m*40,it(i,s,.5,o[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const v=b/4*V+Math.PI/4,S=(m*(1.2+c*1.5)+b*.25)%1,_=1.65-S*.75,[w,P]=T(i+Math.cos(v)*_,s+Math.sin(v)*_);l.globalAlpha=p*Math.sin(S*Math.PI),l.fillStyle=o[1];const R=h-w,I=d-P,O=Math.hypot(R,I)||1,k=-I/O,G=R/O;for(let $=0;$<6;$++)l.fillRect(C(w+R/O*$+k*(6-$))-1,C(P+I/O*$+G*(6-$))-1,2,2),l.fillRect(C(w+R/O*$-k*(6-$))-1,C(P+I/O*$-G*(6-$))-1,2,2)}l.globalAlpha=p,l.fillStyle=o[0];const g=.8*N.HW*Math.SQRT2,x=.8*N.HH*Math.SQRT2;for(let b=0;b<8;b++){const v=b/8*V-m*.6;Su(l,h+Math.cos(v)*g*1.18,d+Math.sin(v)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,le(i,s,1.2+.6*c,pi[r]||pi.blue,.35+.4*c,.32))}}),A({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:s,uid:e.uid,draw(l,u,f){if(a(f)){f.t=f.dur;return}const c=Math.min(1,f.t/n),[h,d]=T(i,s),m=40+120*c,p=C(3+5*c+Math.sin(M.T*18)*1);for(let g=0;g<m;g+=3)l.globalAlpha=(1-g/m)*(.35+.5*c),l.fillStyle=g%12<3?o[0]:o[1],l.fillRect(C(h)-p,C(d-g)-3,p*2,3);for(let g=0;g<5;g++){const x=(M.T*.8+g/5)%1,b=M.T*4+g*1.3;l.globalAlpha=Math.sin(x*Math.PI)*c,l.fillStyle=o[0],l.fillRect(C(h+Math.cos(b)*14)-1,C(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function Jh(e,t,n){const r=M.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),s=Wr[o.team||e.team]||Wr.blue,a=e.scale||1;if(!t){const[l,u]=T(e.x,e.y),f=.8*N.HW*Math.SQRT2*a,c=.8*N.HH*Math.SQRT2*a;dt(!0);const h=Ot();h.globalAlpha=.6,it(e.x,e.y,.8*a,s[3],null,2);for(let d=0;d<V*i;d+=.07){const m=d-Math.PI/2;h.globalAlpha=.95,h.fillStyle=d>V*i-.3?s[0]:s[1],h.fillRect(C(l+Math.cos(m)*f)-1,C(u+Math.sin(m)*c)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,g=d*V/3+p*3-r*(2+i*4);h.globalAlpha=1-p*.7,h.fillStyle=m<3?s[0]:m<7?s[1]:s[2],h.fillRect(C(l+Math.cos(g)*f*(1-p*.8))-1,C(u+Math.sin(g)*c*(1-p*.8))-1,3,3)}h.globalAlpha=1,dt(!1),Lc(e,i,s,a,!1),(e._tpL||0)<r-.25&&(e._tpL=r,le(e.x,e.y,1.1+i,pi[o.team||e.team]||pi.blue,.4+.45*i,.32,{uid:e.id}));return}Lc(e,i,s,a,!0),Math.random()<.3+i*.4&&z(e.x+y(-.3,.3),e.y+y(-.3,.3),y(0,.4),0,0,y(1.2,2.4),.5,s[Math.random()*3|0],2,-.5,!0)}function Lc(e,t,n,r,o){const i=M.T,s=He(e),[a,l]=T(e.x,e.y);dt(!0);const u=Ot();for(let f=0;f<3;f++){const c=(i*(.8+t*1.4)+f/3)%1,h=l-c*s*1.15*N.ZK,d=(24-c*8)*r,m=d*.32;u.globalAlpha=Math.sin(c*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<V;p+=.2)Math.sin(p)>0===o&&u.fillRect(C(a+Math.cos(p)*d)-1,C(h+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,dt(!1)}function og(e){const t=ht(e.uid),n=e.team||t&&t.team||"blue",r=Wr[n]||Wr.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),et.sfx("tp_end",o,i,1),A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(s,a){const[l,u]=T(e.x,e.y),f=C(16*(1-a))+1,c=60+140*a;for(let h=0;h<c;h+=3)s.globalAlpha=(1-a)*(1-h/c),s.fillStyle=h<c*a?r[0]:r[1],s.fillRect(C(l)-f,C(u-h)-3,f*2,3);s.globalAlpha=1-a,it(e.x,e.y,.9*(1-a)+.05,r[1],null,3)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(s,a,l){const[u,f]=T(o,i),c=Math.min(1,a/.14),h=f-320,d=h+(f-h)*c,m=C(a<.14?10:10+14*(1-(a-.14)/.86)*Math.sin(Math.min(1,(a-.14)*4)*Math.PI));if(s.globalAlpha=a<.45?1:(1-a)/.55,s.fillStyle=r[1],s.fillRect(C(u)-m,C(h),m*2,C(d-h)),s.fillStyle=r[0],s.fillRect(C(u)-C(m*.4),C(h),C(m*.8),C(d-h)),!l.hit&&c>=1){l.hit=!0,tt(4);for(let p=0;p<26;p++){const g=Math.random()*V,x=y(1.5,4);z(o,i,.2,Math.cos(g)*x,Math.sin(g)*x,y(.5,2.5),.55,r[p%3],3,3,!0)}A({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,g){p.globalAlpha=1-g,it(o,i,.3+1.6*kt(g),r[1],null,6*(1-g)+1),it(o,i,.2+1*kt(g),r[0],null,2,[3,3])}})}}}),le(o,i,2.6,pi[n]||pi.blue,1,.65)}function ig(e){const t=ht(e.uid),n=t&&t.team||"blue",r=Wr[n]||Wr.blue;t&&(t._tp=null),et.sfx("tp_cancel",e.x,e.y,1),A({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[s,a]=T(e.x,e.y);for(let l=0;l<3;l++){const u=(1-kt(Math.min(1,i*2)))*(20+l*22),f=22+i*10,c=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let h=0;h<V;h+=.22)J(l*31+h*7)<c||o.fillRect(C(s+Math.cos(h)*f)-1,C(a-u+Math.sin(h)*f*.32+(i>.5?(i-.5)*30*J(h*13+l):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*V,s=y(.8,2);z(e.x,e.y,y(.3,1),Math.cos(i)*s,Math.sin(i)*s,y(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)A({type:"puff",x:e.x+y(-.3,.3),y:e.y+y(-.3,.3),r:y(10,14),dur:y(.4,.6),col:[140,140,150]})}function td(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function sg(e,t,n){const r=M.game&&M.game.player,o=r===e,[i,s]=T(e.x,e.y),a=e.scale||1,l=Ot();if(t&2){const u=.75*N.HW*Math.SQRT2*a,f=.75*N.HH*Math.SQRT2*a,c=(n*2+e.id)%V;for(let h=0;h<7;h++){const d=h/7*V-n*.5,m=C(i+Math.cos(d)*u),p=C(s+Math.sin(d)*f),g=Math.abs(((d-c)%V+V)%V)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=g?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=g?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}o&&(l.globalAlpha=.12,it(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,it(e.x,e.y,.5*a,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,o&&(l.globalAlpha=.1,it(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*N.HW*Math.SQRT2*a,f=.95*N.HH*Math.SQRT2*a;dt(!0);const c=Ot();for(let h=0;h<5;h++){const d=n*.7+h/5*V,m=C(i+Math.cos(d)*u),p=C(s+Math.sin(d)*f-3-Math.sin(n*2+h)*2);c.globalAlpha=.65,c.fillStyle="#c8f0ff",c.fillRect(m-2,p,5,1),c.fillRect(m,p-2,1,5),c.fillRect(m-1,p-1,1,1),c.fillRect(m+1,p+1,1,1),c.fillRect(m+1,p-1,1,1),c.fillRect(m-1,p+1,1,1)}c.globalAlpha=1,dt(!1),o&&(l.globalAlpha=.12,it(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&z(e.x+y(-.5,.5),e.y+y(-.5,.5),y(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function ag(e,t,n){const[r,o]=T(t.x,t.y,He(t)+.12),i=C(r-14*(t.scale||1)),s=C(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,s-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,s-6,4,3);for(let a=0;a<9;a++){const l=C(Math.sin(n*7-a*.7+t.id)*2),u=C(10-a*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+a*2,s-3+l,2,u+2),e.fillStyle=a%3?"#c03050":"#ff6a7a",e.fillRect(i+2+a*2,s-2+l,2,u)}e.globalAlpha=1}function lg(e,t){t.banner&&Math.random()<.025&&z(e.x+y(-.25,.25),e.y+y(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&z(e.x+y(-.25,.25),e.y+y(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&z(e.x+y(-.3,.3),e.y+y(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function ug(e){const t=M.game&&M.game.player,n=e.uid!==void 0?ht(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&Ae(n))return!0;switch(e.type){case"item_crit":return D2(e),!0;case"item_chain":return X2(e),!0;case"item_bash":return B2(e),!0;case"item_berserk":return V2(e),!0;case"item_bloodlust":return K2(e),!0;case"item_drain":return Q2(e),!0;case"item_hex":return Z2(e),!0;case"item_refresh":return ry(e),!0;case"item_immune":return oy(e),!0;case"item_spellblock":return sy(e),!0;case"item_push":return ay(e),!0;case"ward_place":return t&&e.team===t.team&&hy(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&dy(e),!0;case"mon_howl":return my(e),!0;case"mon_spores":return yy(e),!0;case"mon_rootslam":return gy(e),!0;case"camp_buff":return by(e),!0;case"item_wand":return wy(e),!0;case"item_phase":return Ay(e),!0;case"item_arcane":return Py(e),!0;case"item_clarity":return Fy(e),!0;case"item_dust":return Uy(e),!0;case"item_evade":return Xy(e),!0;case"item_frostwave":return Ny(e),!0;case"item_lance":return By(e),!0;case"item_cyclone":return $y(e),!0;case"item_reflect":return qy(e),!0;case"item_veil":return Ky(e),!0;case"item_mekansm":return Qy(e),!0;case"item_midas":return tg(e),!0;case"item_mirror":return eg(e),!0;case"item_abyss":return ng(e),!0;case"tp_start":return rg(e),!0;case"tp_end":return og(e),!0;case"tp_cancel":return ig(e),!0}return!1}function fg(e){const t=e.status||{},n=M.T;(e.aura||e.auraFx)&&ly(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&My(e,t,n);const r=td(e);if(r&&sg(e,r,n),(t.banner||t.cuirass||t.frostAura)&&lg(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=M.T),Zh(Ot(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,Wy(e)),t.tp?Jh(e,!1):e._tp&&M.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),na(e,t,"phase")?Ty(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);dt(!0);const i=Ot();i.globalAlpha=.3+.25*o,it(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,dt(!1),Math.random()<.3&&z(e.x+y(-.3,.3),e.y+y(-.3,.3),.05,0,0,y(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function cg(e,t){const n=t.status||{},r=M.T;n.bloodlust&&j2(e,t,r),n.immune&&iy(t,r),n.cyclone&&Zh(e,t,r,!0),n.tp&&Jh(t,!0),na(t,n,"reflect")&&Yy(e,t,r),na(t,n,"veil")&&jy(e,t,r),td(t)&1&&ag(e,t,r),na(t,n,"clarity")&&Math.random()<.05&&z(t.x+y(-.25,.25),t.y+y(-.25,.25),He(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(J2(t,r),t._hexV=1):t._hexV&&(t._hexV=0,ty(t))}const et={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},Cr={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let _u=null;const hs=e=>Cr[_u&&_u[e]||e]||Cr.fire,En=e=>{const t=hs(e);return t[Math.random()*t.length|0]};let tr=[],yi=[],ds=[],Fn=[],Aa=1,wu=1;function $i(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function ed(){tr=[],yi=[],ds=[],Fn=[],kr.length=0}const kr=[],hg=64,ks=new Map;function Lf(e){if(typeof e=="number")return e;let t=ks.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return ks.size>500&&ks.clear(),ks.set(e,t),t}function le(e,t,n,r,o=.8,i=.4,s){kr.length>=hg&&kr.shift(),kr.push({x:e,y:t,r:n,col:Lf(r),a:o,life:i,max:i,uid:s&&s.uid||0,delay:s&&s.delay||0})}function dg(e,t,n=1){let r=0;for(let o=kr.length-1;o>=0&&r<t;o--){const i=kr[o];if(i.delay>0)continue;const s=i.life/i.max,a=i.a*n*Math.min(1,s*1.6);let l=i.x,u=i.y;if(i.uid){const f=ht(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*s),i.col,a),r++}}const Pl=new Map,To=192,Po=new Float32Array(To),Il=new Float32Array(To),zl=new Float32Array(To),Ol=new Float32Array(To),Fl=new Float32Array(To),El=new Float32Array(To);function mg(e,t,n=1){Pl.clear();let r=0;for(const o of tr){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let s=Pl.get(i);if(s===void 0){if(r>=To)continue;s=r++,Pl.set(i,s),Po[s]=Il[s]=zl[s]=Ol[s]=Fl[s]=El[s]=0}const a=o.life/o.max*o.size,l=Lf(o.col);Po[s]+=a,Il[s]+=o.x*a,zl[s]+=o.y*a,Ol[s]+=(l>>16&255)*a,Fl[s]+=(l>>8&255)*a,El[s]+=(l&255)*a}for(let o=0;o<t;o++){let i=-1,s=6;for(let h=0;h<r;h++)Po[h]>s&&(s=Po[h],i=h);if(i<0)break;const a=Po[i];Po[i]=0;let l=Ol[i]/a,u=Fl[i]/a,f=El[i]/a;const c=Math.max(l,u,f,1);l=l/c*255,u=u/c*255,f=f/c*255,e(Il[i]/a,zl[i]/a,1.1+Math.min(2.2,Math.sqrt(a)*.28),l<<16|u<<8|f,Math.min(.85,a*.018)*n)}}const Ll={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function z(e,t,n,r,o,i,s,a,l=2,u=0,f=!1,c=.94){Aa<1&&Math.random()>Aa||tr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:s,max:s,col:a,size:l,grav:u,glow:f,drag:c})}function ie(e,t,n,r,o=12,i=2.5,s=.6,a=1.5,l=!0,u=3){for(let f=0;f<o;f++){const c=Math.random()*Math.PI*2,h=Math.random()*i;z(e,t,n,Math.cos(c)*h,Math.sin(c)*h,Math.random()*a,s*(.6+Math.random()*.6),En(r),u+(Math.random()<.3?1:0),4,l)}}function tt(e){M.cam.shake=Math.max(M.cam.shake,e*wu)}function A(e){return e.t=0,yi.push(e),pg(e),e}function pg(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":le(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":le(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":le(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":le(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":le(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&le(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":le(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function eo(e){e.t=0,ds.push(e)}const Uc={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},kc=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),yg=new Set(["gato","zorra"]),gg={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function Dc(e){const t=hs(e.col&&Cr[e.col]?e.col:"gold"),n=e.uid?ht(e.uid):null;if(e.type==="windup"){et.sfx(gg[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";A({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,a){const l=ht(a.uid),u=l?l.x:a.x,f=l?l.y:a.y;if(i.globalAlpha=.35+.5*s,r&&e.radius)it(e.ex,e.ey,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(o&&e.radius)it(u,f,e.radius*(.3+.7*s),t[1],null,2,[6,5]);else if(!o&&e.range){const c=e.ex-u,h=e.ey-f,d=Math.hypot(c,h)||1,m=Math.min(e.range,d)*s,[p,g]=T(u,f,.1),[x,b]=T(u+c/d*m,f+h/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,g),i.lineTo(x,b),i.stroke(),i.setLineDash([])}it(u,f,.35+.35*s,t[0],null,2)}}),A({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,s,a){const l=ht(a.uid),[u,f]=T(l?l.x:a.x,l?l.y:a.y,.75);for(let c=0;c<10;c++){const h=c/10*6.283+s*5,d=36*(1-s)+4;i.fillStyle=t[c%t.length],i.fillRect(Math.round(u+Math.cos(h)*d-2),Math.round(f+Math.sin(h)*d*.6-2),4,4)}i.globalAlpha=s,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*s),Math.round(f-3-4*s),Math.round(6+8*s),Math.round(6+8*s))}})}else e.type==="windup_cancel"?(ie(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),et.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(A({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const s=ht(i.uid);if(!s||!s.channel&&o>.05){i.t=i.dur;return}const a=e.radius||1.2,l=M.T;r.globalAlpha=.7,it(i.x,i.y,a,t[1],null,3),it(i.x,i.y,a*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[c,h]=T(i.x+Math.cos(f)*a*.85,i.y+Math.sin(f)*a*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(c-3),Math.round(h-3),6,6)}n&&Math.random()<.5&&z(n.x,n.y,.9,y(-.5,.5),y(-.5,.5),y(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),et.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?A({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(ie(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),et.sfx("deny",e.x,e.y,.4)):ie(e.x,e.y,.6,e.col&&Cr[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function xg(e){const t=hs(e.type.slice(5)&&Cr[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;A({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(s,a,l){const[u,f]=T(l.x,l.y,.55),c=18*(1-a)+4;s.globalAlpha=1-a,s.fillStyle=t[0],s.fillRect(Math.round(u-c/2),Math.round(f-c/2),Math.round(c),Math.round(c)),s.fillStyle=t[1];for(let h=0;h<6;h++){const d=h/6*6.283;s.fillRect(Math.round(u+Math.cos(d)*c),Math.round(f+Math.sin(d)*c*.7),3,3)}}});for(let s=0;s<10;s++)z(o,i,.5,n*y(1.5,4)+y(-.8,.8),r*y(1.5,4)+y(-.8,.8),y(0,1),.3,t[s%t.length],3,0,!0);tt(1.5)}function vg(){const e=M.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0;const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(Aa=r?1:.4,wu=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const l=n.hero&&n.key?Z[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&et.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),l)try{if(l(n)!==!1)continue}catch(u){console.error(u)}Dc(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){Dc(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&xg(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?Z[o]:void 0,s=o&&n.type!=="heal"&&!n.impact,a=o?s?"ab_"+o:n.impact&&!i?Uc[n.type]:null:Uc[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&et.babble(n.hero,"ult",n.x,n.y),a&&et.sfx(a,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const l=t[n.hero]&&t[n.hero].abil[n.key],u=l&&Ll[l.fx],f=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;u!==void 0&&le(n.x+(n.ux||0)*f,n.y+(n.uy||0)*f,n.radius?n.radius*1.15+.5:f?n.range*.85+.6:1.6,u,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(l){console.error(l)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(ug(n))continue}catch(l){console.error(l);continue}switch(n.type){case"fire":{A({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let l=0;l<90;l++){const u=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,f=(.4+Math.random())*n.range*2.4;z(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(u)*f,Math.sin(u)*f,Math.random()*1.2,.5,En("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}eo({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),tt(3);break}case"quake":{A({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),A({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let l=0;l<50;l++){const u=Math.random()*6.28,f=Math.random()*n.range*2.5;z(n.x,n.y,.1,Math.cos(u)*f,Math.sin(u)*f,1+Math.random()*2,.7,En("quake"),3,6,!1)}tt(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const l=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;Ll[n.type]!==void 0&&le(n.x,n.y,n.radius*1.2+.4,Ll[n.type],n.type==="firering"?1:.75,.6),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:hs(l)[1],w:7}),A({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:hs(l)[0],w:3,delay:.08}),n.type==="roar"&&(A({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),tt(8)),n.type==="firering"&&(A({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),tt(9),eo({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&eo({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&eo({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const u=n.type==="spores"?40:90;for(let f=0;f<u;f++){const c=Math.random()*Math.PI*2,h=n.radius*(1.6+Math.random()*1.6);z(n.x,n.y,.2,Math.cos(c)*h,Math.sin(c)*h,Math.random()*2,.6,En(l),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let f=0;f<14;f++)A({type:"puff",x:n.x+y(-1,1)*n.radius*.7,y:n.y+y(-1,1)*n.radius*.7,r:y(14,26),dur:y(.7,1.3),col:[140,210,90]});break}case"heal":A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let l=0;l<16;l++)z(n.x+y(-.4,.4),n.y+y(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,En("heal"),3,0,!0);break;case"shield":case"stoneskin":A({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":A({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let l=0;l<12;l++)A({type:"puff",x:n.x+y(-.6,.6),y:n.y+y(-.6,.6),r:y(12,22),dur:y(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const l=n.type==="firedash"?"fire":"dust",u=n.ex||n.x+(n.ux||0)*(n.range||0),f=n.ey||n.y+(n.uy||0)*(n.range||0);for(let c=0;c<30;c++){const h=c/30;z(n.x+(u-n.x)*h+y(-.2,.2),n.y+(f-n.y)*h+y(-.2,.2),.15,y(-.5,.5),y(-.5,.5),y(.3,1.2),.5+h*.4,En(l),4,0,l==="fire")}A({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.35,col:l==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const l=n.ex||n.x,u=n.ey||n.y;A({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),A({type:"flash",x:l,y:u,r:1.1,dur:.3,col:"rgba(220,170,255,"}),A({type:"streak",x:n.x,y:n.y,ex:l,ey:u,dur:.3,col:"#d8a8ff"}),ie(n.x,n.y,.4,"arcane",16,2,.5),ie(l,u,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let l=0;l<20;l++){const u=Math.random()*6.28,f=Math.random()*n.radius;z(n.x+Math.cos(u)*f,n.y+Math.sin(u)*f,.1,0,0,2,.6,En("arcane"),2,0,!0)}break;case"starfall":for(let l=0;l<18;l++)A({type:"meteor",x:n.x+y(-1,1)*n.radius*.8,y:n.y+y(-1,1)*n.radius*.8,dur:.35,delay:l*.02});A({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),A({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),ie(n.x,n.y,.2,"arcane",70,6,.8,3),eo({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),tt(10);break;case"slash":A({type:"xslash",x:n.x,y:n.y,dur:.35}),ie(n.x,n.y,.5,"blood",20,4,.5,2,!1),ie(n.x,n.y,.5,"slash",14,4,.4),tt(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.proj)){const u=n.proj&&n.pkey||"A";if(u==="A"&&Te[n.hero]){if(yg.has(n.hero)||et.sfx("atk_"+n.hero,n.x,n.y,n.big?1:.8),!(n.proj&&kc.has(n.hero+"_A")))try{Te[n.hero](n)}catch(c){console.error(c)}break}if(u!=="A"&&kc.has(n.hero+"_"+u))break;const f=u!=="A"?Z[n.hero+"_"+u+"_hit"]:void 0;if(f){et.sfx("imp_"+n.hero+"_"+u,n.x,n.y,.9);try{f(n)}catch(c){console.error(c)}break}}const l=n.col&&Cr[n.col]?n.col:n.hero==="dragon"?"fire":"slash";A({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Cr[l][0]}),ie(n.x,n.y,.45,l,n.big?10:5,n.big?3:2,.35,1.5,!0,2),et.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&tt(2);break}case"shoot":if(n.kind==="hero"&&n.hero){et.sfx("shot_"+n.hero,n.x,n.y,.6);break}et.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":A({type:"jaws",x:n.x,y:n.y,dur:.35}),ie(n.x,n.y,.3,"bite",24,3,.5),tt(5);break;case"transform":{if(n.hero&&Z[n.hero+"_T"]){et.sfx("tf_"+n.hero,n.x,n.y,1);try{Z[n.hero+"_T"](n)}catch(f){console.error(f)}break}const l=n.kind==="fire",u=l?[255,140,50]:[255,220,90];A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:u}),A({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:l?"#ff9a3a":"#ffe070",w:6}),ie(n.x,n.y,.6,l?"fire":"gold",70,5,.9,3,!0,4),tt(n.uid===(e.player&&e.player.id)?10:4),et.sfx("roar",n.x,n.y,.8);break}case"levelup":A({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),A({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":n.kind==="hero"?(n.sprite&&et.babble(n.sprite==="slime"&&(ht(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),ie(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),A({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),et.sfx("death",n.x,n.y)):n.kind==="minion"?(ie(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),et.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(ie(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),et.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let l=0;l<26;l++){const u=Math.random()*6.28,f=y(1.5,5);z(n.x+y(-.3,.3),n.y+y(-.3,.3),y(.8,2.2),Math.cos(u)*f,Math.sin(u)*f,y(3,9),y(1.2,2),En("stone"),Math.random()*4+4|0,14,!1,.97)}for(let l=0;l<14;l++)A({type:"puff",x:n.x+y(-1.2,1.2),y:n.y+y(-1.2,1.2),r:y(26,46),dur:y(1.2,2.2),col:[150,140,130]});A({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),eo({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),et.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),et.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&et.say(n.monster==="serpent"?"serpent":"boss"),ie(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let l=0;l<30;l++)z(n.x,n.y,1,y(-4,4),y(-4,4),y(3,8),1.4,En("stone"),5,12,!1);A({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),A({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),tt(14);break;case"killbanner":{const l=e.player,u=l&&n.uid===l.id;if(A({type:"wisp",x:n.x,y:n.y,dur:1.6}),ie(n.x,n.y,.8,"gold",u?40:14,4,.9,3,!0,3),!n.hero)break;const f=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],c=n.big===1,h=n.big===2,d=n.dur||0,m=c?"first":n.skill>=2?"multi":h?"ace":d>=7?"godlike":d>=5?"unstoppable":d===4?"rampage":d===3?"spree":"kill",g=m==="multi"?f[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[m],x=l&&n.team===l.team;et.banner(g,x?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(c||h||n.skill>=2||u));const b=l&&l.heroKey===n.kind&&l.dead&&n.team!==l.team,v=["","","double","triple","quadra","penta"];et.say(m==="first"?"first_blood":m==="multi"?v[Math.min(5,n.skill)]:m==="kill"?b?"you_died":x?"kill":"ally_killed":m),u&&tt(6);break}case"runespawn":et.say("rune");break;case"chrono":A({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(l,u,f){l.globalAlpha=.35*(u>.9?(1-u)*10:1),it(f.x,f.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[c,h]=T(f.x,f.y,0);for(let d=0;d<12;d++){const m=d/12*6.283;l.fillStyle="#ffffff",l.fillRect(Math.round(c+Math.cos(m)*n.radius*46),Math.round(h+Math.sin(m)*n.radius*23),3,3)}}}),tt(5);break;case"hook_pull":A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),ie(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":A({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),ie(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),tt(3);break;case"pet_fade":ie(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":et.sfx("item_blink",n.x,n.y),ie(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),ie(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":et.sfx("item_shield",n.x,n.y,.7),A({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),ie(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":et.sfx("item_purge",n.x,n.y),A({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),ie(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":et.sfx("item_invis",n.x,n.y),ie(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":et.sfx("item_drum",n.x,n.y);for(let l=0;l<3;l++)A({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:l*.14});tt(3);break;case"item_freeze":et.sfx("item_freeze",n.ex,n.ey),A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),ie(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const l=e.player;if(!l||n.team!==l.team)break;const u=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let f=0;f<3;f++)A({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:u,w:4,delay:f*.18});A({type:"pingmark",x:n.x,y:n.y,dur:3,col:u,kind:n.kind}),et.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":A({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),ie(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),et.sfx("tower",n.ex,n.ey,.7);break;case"rooted":A({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const l=e.player&&e.winner===e.player.team;et.play(l?"victory":"defeat",1),et.say(l?"victory":"defeat")}else et.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":A({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}Aa=1,wu=1,_u=null}function bg(e){for(const t of tr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);$i(tr,t=>t.life>0),tr.length>2500&&tr.splice(0,tr.length-2500);for(const t of yi)t.t+=e;$i(yi,t=>t.t<t.dur+(t.delay||0));for(const t of ds)t.t+=e;$i(ds,t=>t.t<t.dur);for(const t of kr)t.delay>0?t.delay-=e:t.life-=e;$i(kr,t=>t.life>0),M.cam.shake=Math.max(0,M.cam.shake-e*30)}let Ul=6,Io=0;function Mg(e,t,n,r,o,i){const{HW:s,HH:a,N:l,OX:u}=N,f=window.MAP,c=M.T;if(Ul-=e,Ul<=0&&(Io=y(.6,1),Ul=y(8,16)),Io=Math.max(0,Io-e*.25),M.wind=.35+.15*Math.sin(c*.4)+Io,Io>.3&&Math.random()<Io*.9){const h=n+Math.random()*o,m=t-20-u,p=(m/s+h/a)/2,g=(h/a-m/s)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];Fn.push({k:"leaf",x:p,y:g,z:y(.4,2.2),ph:Math.random()*6,life:y(2.5,4),col:x,sp:y(9,15)})}if(Fn.length<70&&Math.random()<.8){const h=t+Math.random()*r,d=n+Math.random()*o,m=h-u,p=d,g=(m/s+p/a)/2,x=(p/a-m/s)/2;if(g>1&&x>1&&g<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(g)];b===0||b===4?Fn.push({k:"fly",x:g,y:x,z:y(.2,.9),ph:Math.random()*6,life:y(4,9),vx:y(-.3,.3),vy:y(-.3,.3)}):b===3&&Fn.push({k:"spark",x:g,y:x,z:0,ph:Math.random()*6,life:y(.4,1),max:1})}}for(const h of Fn)h.life-=e,h.k==="leaf"&&(h.x+=h.sp*e*.5,h.y-=h.sp*e*.5,h.z+=Math.sin(c*6+h.ph)*.02),h.k==="fly"&&(h.vx+=y(-.6,.6)*e,h.vy+=y(-.6,.6)*e,h.x+=h.vx*e,h.y+=h.vy*e,h.z+=Math.sin(c*2+h.ph)*.003);if($i(Fn,h=>h.life>0),Fn.length>160&&Fn.splice(0,Fn.length-160),Math.random()<.1&&i.length){const h=i[Math.random()*i.length|0];if(h&&h.sprite.startsWith("prop_oak")){const[d,m]=T(h.x,h.y);d>t&&d<t+r&&m>n&&m<n+o+100&&z(h.x+y(-.4,.4),h.y+y(-.4,.4),1.4,y(-.3,.3),y(-.3,.3),-.25,4,h.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let U,ra,zr=null;function Xc(e,t){U=ra=e,zr=t||null}function se(e){if(!zr){U.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(U===zr)return;zr.setTransform(ra.getTransform()),zr.globalAlpha=ra.globalAlpha,zr.globalCompositeOperation="lighter",zr.imageSmoothingEnabled=!1,U=zr}else U=ra}function it(e,t,n,r,o,i=2,s){const{HW:a,HH:l}=N,[u,f]=T(e,t);U.beginPath(),U.ellipse(u,f,Math.max(.1,n*a*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(U.fillStyle=o,U.fill()),r&&(U.lineWidth=i,U.strokeStyle=r,s&&U.setLineDash(s),U.stroke(),U.setLineDash([]))}function Gc(e,t,n){U.beginPath(),e.forEach(([r,o],i)=>{const[s,a]=T(r,o);i?U.lineTo(s,a):U.moveTo(s,a)}),U.closePath(),U.fillStyle=n,U.fill(),U.strokeStyle=t,U.lineWidth=2,U.stroke()}function Sg(){for(const e of ds){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];it(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&it(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&it(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function nd(e,t){if(!(t>1)){e.add&&se(!0),U.save();try{e.draw(U,t,e)}catch(n){console.error(n)}U.restore(),e.add&&se(!1)}}function dt(e){se(e)}function Ot(){return U}function _g(){const{HW:e}=N;for(const t of yi){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&nd(t,r);continue}if(t.type==="ring")U.globalAlpha=Math.max(0,1-r),it(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),U.globalAlpha=1;else if(t.type==="cone"){const[o,i]=T(t.x,t.y),s=Math.atan2(t.uy,t.ux);U.save(),se(!0),U.globalAlpha=Math.max(0,.75*(1-r)),U.beginPath(),U.moveTo(o,i);for(let f=0;f<=16;f++){const c=s-t.angle+2*t.angle*f/16,h=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=T(t.x+Math.cos(c)*h,t.y+Math.sin(c)*h);U.lineTo(d,m)}U.closePath();const[a,l]=T(t.x+t.ux*t.range,t.y+t.uy*t.range),u=U.createLinearGradient(o,i,a,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),U.fillStyle=u,U.fill(),se(!1),U.restore()}else if(t.type==="cracks"){U.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,U.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const s=o+(i/6-.5)*Math.min(t.angle,3)*1.6;U.beginPath();let[a,l]=T(t.x,t.y);U.moveTo(a,l);for(let u=1;u<=5;u++){const f=t.range*u/5,c=s+(J(t.seed+i*7+u)-.5)*.6;[a,l]=T(t.x+Math.cos(c)*f,t.y+Math.sin(c)*f),U.lineTo(a,l)}U.stroke()}}else if(t.type==="flash"){const[o,i]=T(t.x,t.y,.3),s=t.r*e*1.3;se(!0);const a=U.createRadialGradient(o,i,0,o,i,s);a.addColorStop(0,t.col+.8*(1-r)+")"),a.addColorStop(1,t.col+"0)"),U.fillStyle=a,U.fillRect(o-s,i-s,s*2,s*2),se(!1)}else if(t.type==="streak"){const[o,i]=T(t.x,t.y,.4),[s,a]=T(t.ex,t.ey,.4);se(!0),U.strokeStyle=t.col,U.globalAlpha=Math.max(0,.9*(1-r)),U.lineWidth=8*(1-r)+1,U.beginPath(),U.moveTo(o,i),U.lineTo(s,a),U.stroke(),U.globalAlpha=1,se(!1)}else if(t.type==="puff"){const[o,i]=T(t.x,t.y,.3+r*.4),s=t.col;U.fillStyle=`rgba(${s[0]},${s[1]},${s[2]},${.5*(1-r)})`;const a=t.r*(.6+r*.7);U.beginPath(),U.ellipse(o,i,a,a*.75,0,0,7),U.fill()}}}function wg(){const e=M.T;for(const t of yi){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&nd(t,r);continue}const o=t.uid?ht(t.uid):null,i=o?o.x:t.x,s=o?o.y:t.y;if(t.type==="pillar"){const[a,l]=T(i,s),u=t.col,f=140*Math.min(1,r*4),c=Math.max(0,.6*(1-r));se(!0);const h=U.createLinearGradient(a,l,a,l-f);h.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${c})`),h.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),U.fillStyle=h,U.fillRect(a-18,l-f,36,f),se(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[a,l]=T(i,s,.35),u=t.col;se(!0),U.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,U.lineWidth=2,U.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,U.beginPath(),U.ellipse(a,l,34,38,0,0,7),U.fill(),U.stroke();for(let f=0;f<6;f++){const c=e*1.5+f*1.05;U.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,U.fillRect(a+Math.cos(c)*30-1,l+Math.sin(c)*34-1,3,3)}se(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[a,l]=T(i,s,.3);U.strokeStyle="rgba(160,255,190,0.7)",U.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;U.beginPath(),U.ellipse(a,l,26,12,0,f,f+1.4),U.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[a,l]=T(i,s);U.strokeStyle="#4a7a2a",U.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;U.beginPath(),U.moveTo(a+Math.cos(f)*16,l+Math.sin(f)*7),U.quadraticCurveTo(a+Math.cos(f)*22,l-18,a+Math.cos(f+1.2)*6,l-30),U.stroke()}U.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;U.fillRect(a+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[a,l]=T(t.x,t.y,3*(1-r));se(!0),U.strokeStyle="rgba(240,200,255,0.9)",U.lineWidth=4,U.beginPath(),U.moveTo(a-18,l-50),U.lineTo(a,l),U.stroke(),U.fillStyle="#ffffff",U.fillRect(a-3,l-3,6,6),se(!1)}else if(t.type==="xslash"){const[a,l]=T(t.x,t.y,.5),u=40*Math.min(1,r*3);U.globalAlpha=Math.max(0,1-r),U.strokeStyle="#ffffff",U.lineWidth=6,U.beginPath(),U.moveTo(a-u,l-u),U.lineTo(a+u,l+u),U.moveTo(a+u,l-u),U.lineTo(a-u,l+u),U.stroke(),U.strokeStyle="#ff4040",U.lineWidth=2,U.stroke(),U.globalAlpha=1}else if(t.type==="spark"){const[a,l]=T(t.x,t.y,.45),u=(t.big?16:10)*(1-r);se(!0),U.fillStyle=t.col,U.fillRect(a-u,l-1,u*2,3),U.fillRect(a-1,l-u,3,u*2),U.fillRect(a-u*.5,l-u*.5,u,u),se(!1)}else if(t.type==="jaws"){const[a,l]=T(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));U.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",U.lineWidth=5,U.beginPath(),U.arc(a,l-u,24,.2,Math.PI-.2),U.stroke(),U.beginPath(),U.arc(a,l+u,24,Math.PI+.2,-.2),U.stroke()}else if(t.type==="pingmark"){const[a,l]=T(t.x,t.y,.9+Math.sin(e*6)*.05);Ag(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),U.beginPath(),U.moveTo(a,l+14),U.lineTo(a-9,l-2),U.arc(a,l-6,10,Math.PI*.85,Math.PI*.15),U.closePath(),U.fill(),U.stroke(),U.fillStyle="#120c1a",U.font="bold 13px sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",a,l-6),U.globalAlpha=1}else if(t.type==="wisp"){const[a,l]=T(t.x,t.y,.5+r*2);se(!0),U.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",U.beginPath(),U.arc(a+Math.sin(r*12)*6,l,7,0,7),U.fill(),se(!1)}}}function Ag(e,t){U.globalAlpha=t,U.fillStyle=e,U.strokeStyle="#120c1a",U.lineWidth=2}function Tg(){const{HW:e,HH:t,OX:n,ZK:r}=N;for(const o of tr){if(o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r;U.globalAlpha=Math.min(1,o.life/o.max*1.5),U.fillStyle=o.col,U.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}U.globalAlpha=1,se(!0);for(const o of tr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,s=(o.x+o.y)*t-o.z*r,a=Math.min(1,o.life/o.max*1.5);U.globalAlpha=a*.35,U.fillStyle=o.col,U.fillRect(Math.round(i-o.size),Math.round(s-o.size),o.size*2,o.size*2),U.globalAlpha=a,U.fillRect(Math.round(i-o.size/2),Math.round(s-o.size/2),o.size,o.size)}U.globalAlpha=1,se(!1)}function Cg(){const e=M.T,{HW:t,HH:n,OX:r,ZK:o}=N;for(const i of Fn){if(i.k!=="leaf")continue;const s=(i.x-i.y)*t+r,a=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;U.fillStyle="#00000040",U.fillRect(s-l/2+2,a+2,l,3),U.fillStyle=i.col,U.fillRect(s-l/2,a,l,3)}se(!0);for(const i of Fn){if(i.k==="leaf")continue;const s=(i.x-i.y)*t+r,a=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);U.fillStyle=`rgba(210,255,120,${.25*l})`,U.fillRect(s-3,a-3,6,6),U.fillStyle=`rgba(250,255,200,${.9*l})`,U.fillRect(s-1,a-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));U.fillStyle=`rgba(255,255,255,${.7*l})`,U.fillRect(s-1,a,3,1),U.fillRect(s,a-1,1,3)}}se(!1)}function Rg(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function Pg(){const{HW:e,HH:t}=N,n=M.T;for(const r of M.game.projs){const o=r.z||.45,[i,s]=T(r.x,r.y,o),a=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=Rg(r.look||r.fx),u=l?Ce[l]:void 0;if(u){U.save();try{u(U,r,i,s,a,n)}catch(c){console.error(c)}U.restore(),se(!1);continue}const f=Cr[r.fx]||Cr.arcane;if(r.fx==="arrow"||r.fx==="spear"){const c=r.fx==="arrow"?r.skill?26:16:12;U.save(),U.translate(i,s),U.rotate(a),U.fillStyle="#3a2a1a",U.fillRect(-c,-2,c,4),U.fillStyle="#e8d8b0",U.fillRect(-c,-1,c,2),U.fillStyle="#ffffff",U.beginPath(),U.moveTo(5,0),U.lineTo(-2,-4),U.lineTo(-2,4),U.fill(),U.fillStyle="#e05050",U.fillRect(-c-3,-3,5,2),U.fillRect(-c-3,1,5,2),U.restore(),r.skill&&z(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")U.save(),U.translate(i,s),U.rotate(n*25),U.fillStyle="#1a1020",U.fillRect(-9,-3,18,6),U.fillStyle="#e0e8f0",U.fillRect(-8,-2,14,4),U.fillStyle="#c8a040",U.fillRect(-10,-3,4,6),U.restore();else if(r.fx==="root")U.fillStyle="#5a3a20",U.beginPath(),U.arc(i,s,7,0,7),U.fill(),U.fillStyle="#8ad050",U.beginPath(),U.arc(i+3,s-3,4,0,7),U.fill(),z(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const c=r.skill?10:6;se(!0);const h=U.createRadialGradient(i,s,0,i,s,c*2.4);h.addColorStop(0,f[1]),h.addColorStop(.4,f[2]+"aa"),h.addColorStop(1,f[3]+"00"),U.fillStyle=h,U.fillRect(i-c*2.4,s-c*2.4,c*4.8,c*4.8),se(!1),U.fillStyle=f[0],U.fillRect(i-3,s-3,6,6),Math.random()<.8&&z(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const Or=Math.round,Ta=Math.PI*2,rr=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(Or(t-r/2),Or(n-r/2),r,r)},rd=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);Z.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];A({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),s=i?i.x:o.x,a=i?i.y:o.y,[l,u]=T(s,a,.9),f=Math.min(1,r*3),c=r>.7?1-(r-.7)/.3:1;n.globalAlpha=c;for(const h of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+h*(.35+d*.22*f),p=(26+d*7)*f;for(let g=0;g<p;g+=3){const x=g/Math.max(1,p),b=Math.sin(M.T*18+d+g*.3)*2;rr(n,l+Math.cos(m)*g+b*h,u+Math.sin(m)*g*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let h=0;h<14;h++){const d=h/14*Ta+r*9,m=18+h%3*6,p=-r*70-h*3;rr(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[h%4])}}});for(let n=0;n<40;n++){const r=Math.random()*Ta,o=y(1,3.5);z(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,y(2,5),y(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}tt(rd(e)?9:3)};Z.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];A({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),s=i?i.x:o.x,a=i?i.y:o.y,[l,u]=T(s,a,1.6),f=Math.min(1,r*2.5),c=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*c;const h=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((g,x)=>[...g].forEach((b,v)=>{b!=="."&&rr(n,d+(v-7)*h,m+(x-5)*h,h,b==="N"?t[4]:b==="o"?t[0]:t[1+(v+x)%2])})),r>.15&&r<.6)for(let g=0;g<3;g++){const x=40+((r-.15)*300+g*22)%90;for(let b=-.9;b<=.9;b+=.12)rr(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),A({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),[s,a]=T(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const c=f/l*Ta,h=(1-u)*120+30,d=s+Math.cos(c)*h,m=a+Math.sin(c)*h*.5;n.fillStyle=t[3],n.fillRect(Or(d-6),Or(m-4),12,8),n.fillStyle=t[1],n.fillRect(Or(d-5),Or(m-3),10,3),n.fillStyle=t[0],n.fillRect(Or(d-1),Or(m-1),2,2)}}}),tt(rd(e)?10:4)};Z.erizo_Q_hit=e=>{A({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=T(r.x,r.y,.5);for(let s=0;s<9;s++){const a=-Math.PI*.85+s*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)rr(t,o+Math.cos(a)*u,i+Math.sin(a)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,rr(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)z(e.x,e.y,.5,y(-2,2),y(-2,2),y(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};Z.polilla_Q_hit=e=>{A({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=T(r.x,r.y,.7);t.globalAlpha=1-n;for(let s=0;s<2;s++){const a=8+n*(30+s*14);for(let l=.4;l<Ta-.4;l+=.18)rr(t,o+Math.cos(l+s)*a,i+Math.sin(l+s)*a*.5,2,s?"#c8e8ff":"#f4f0ff")}for(let s=0;s<3;s++){const a=o+Math.sin(n*6+s*2)*10+(s-1)*12,l=i-10-n*40-s*8,u=2;for(let f=0;f<4;f++)rr(t,a+f*u,l,u,"#fff6c8"),rr(t,a+f*u,l+3*u,u,"#fff6c8"),rr(t,a+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)z(e.x,e.y,.6,y(-1,1),y(-1,1),y(.5,1.5),y(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const Q=Math.round,ze=Math.PI*2;let Ut=0,Et=0;function Me(e,t,n=0){Ut=(e-t)*N.HW+N.OX,Et=(e+t)*N.HH-n*N.ZK}function Ue(e,t,n,r,o){e.fillStyle=o,e.fillRect(Q(t-r/2),Q(n-r/2),r,r)}function Au(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(Q(t+(r-t)*l/a-i/2),Q(n+(o-n)*l/a-i/2),i,i)}function gi(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Q(t-s/2),Q(n+i*o),Q(s),Math.max(1,Q(2*o)))}}function Jo(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let s=-r;s<r;s+=2){const a=Math.abs(s+1),l=a<=r/2?r*.866:r*.866*(r-a)/(r/2);l<.5||n+s<i||e.fillRect(Q(t-l),Q(n+s),Q(l*2),2)}}function Ig(e,t,n,r,o){e.fillStyle=o,e.fillRect(Q(t-r),Q(n-1),r*2,2),e.fillRect(Q(t-1),Q(n-r),2,r*2)}function Tu(e,t,n){e.fillStyle=rt.l,e.fillRect(Q(t-1),Q(n-4),2,2),e.fillStyle=rt.o,e.fillRect(Q(t-2),Q(n-2),4,4),e.fillStyle=rt.w,e.fillRect(Q(t-1),Q(n-2),2,2)}const ar=e=>e<0?0:e>1?1:e,So=e=>1-(1-e)*(1-e),rt={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},ti="#2a1e14",zg="#eaf8ff",Og="#b8e0ff",Ca="#ff9ac8",Uf="#9a5ad8",Fg="#9a7a48";function od(e,t,n,r,o){const i=M.game;if(!i)return null;let s=null,a=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<a&&(a=u,s=l)}return s}function Eg(e,t,n,r,o){e.fillStyle=o?zg:Og,o?(e.fillRect(Q(t-3*r-2),Q(n-9),4,5),e.fillRect(Q(t+1*r-1),Q(n-8),3,4)):(e.fillRect(Q(t-5*r-2),Q(n-5),5,3),e.fillRect(Q(t+2*r-2),Q(n-5),4,3)),e.fillStyle=rt.y,e.fillRect(Q(t-5),Q(n-3),10,6),e.fillStyle=ti,e.fillRect(Q(t-2*r-1),Q(n-3),2,6),e.fillRect(Q(t+1*r),Q(n-3),2,6),e.fillRect(Q(t+5*r-(r>0?1:2)),Q(n-2),3,4),e.fillRect(Q(t-6*r-1),Q(n-1),2,2)}Z.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;A({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,s){Me(r,o,.6);const a=26*(1-So(s))+4;i.globalAlpha=1-s*.5;for(let l=0;l<14;l++){const u=l/14*ze+s*3;Ue(i,Ut+Math.cos(u)*a,Et+Math.sin(u)*a*.6,3,l&1?ti:rt.y)}s>.6&&(i.fillStyle=Uf,i.fillRect(Q(Ut-2),Q(Et-2),4,4))}});for(let i=0;i<6;i++)z(r,o,.6,t*y(1,3)+y(-.6,.6),n*y(1,3)+y(-.6,.6),y(0,.6),.3,i&1?rt.y:rt.l,2,0,!0)};Ce.abeja_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=i*30|0;for(let c=3;c<17;c++){const h=c*3.5,d=(c+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-c/17,e.fillStyle=c&1?rt.l:rt.y,e.fillRect(Q(n-s*h+l*m*5),Q(r-a*h+u*m*5),2,2)}e.globalAlpha=1;for(let c=0;c<=14;c++){const h=n+s*(8-c)*1.6,d=r+a*(8-c)*1.6;if(c<=1)Ue(e,h,d,2,rt.w);else if(c<=8)Ue(e,h,d,2,rt.b),(c===4||c===7)&&(Ue(e,h-s*2+l*2,d-a*2+u*2,2,rt.b),Ue(e,h-s*2-l*2,d-a*2-u*2,2,rt.b));else{const m=c-9>>1&1?ti:rt.y,p=c===9||c===14?1:2;for(let g=-p;g<=p;g++)Ue(e,h+l*g*2,d+u*g*2,2,m)}}f&2&&Ue(e,n+s*15,r+a*15+2,2,Uf)};Z.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=ht(e.uid),o=od(t,n,r?r.team:void 0,!1,.9);A({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,s,a){const l=a.vid?ht(a.vid):null,u=s*1.8;if(l&&l.dead){a.t=a.dur+1;return}Me(l?l.x:t,l?l.y:n,1.5);const f=Ut,c=Et,h=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=Q(11*h);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Jo(i,f,c,d,rt.d),Jo(i,f,c,d-2,rt.y),Jo(i,f,c,d-2,rt.o,c+d*.35),i.fillStyle=rt.w,i.fillRect(Q(f-d*.5),Q(c-d*.5),3,2),Au(i,f-4,c-4,f+4,c+4,2,ti),Au(i,f+4,c-4,f-4,c+4,2,ti);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,g=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const v=(x>0?0:Math.PI)+b*.28;Ue(i,f+Math.cos(v)*g,c+Math.sin(v)*g,2,rt.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,Tu(i,f-4,c+d+m*22),Tu(i,f+3,c+d+m*14)}}});for(let i=0;i<8;i++)z(t,n,.5,y(-2,2),y(-2,2),y(.6,1.8),y(.3,.5),i&1?ti:rt.y,2,6,!1,.9);for(let i=0;i<4;i++)z(t,n,.6,y(-.8,.8),y(-.8,.8),y(1,2),.5,Uf,3,5,!0);tt(2)};Z.abeja_W=e=>{if(e.type==="heal"){Lg(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;A({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,s){const a=.3+(r-.3)*So(ar(s*1.5));i.globalAlpha=s>.55?(1-s)/.45:1;for(let l=0;l<44;l++){const u=l/44*ze,f=a*(1+Math.sin(u*6+s*9+o)*.045);Me(t+Math.cos(u)*f,n+Math.sin(u)*f),Ue(i,Ut,Et,5,rt.o),Ue(i,Ut,Et-2,3,rt.l),l%4===0&&(i.fillStyle=rt.d,i.fillRect(Q(Ut-1),Q(Et+2),2,Q(2+6*s)))}}}),A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,s){const a=ar(s/.6);for(let l=0;l<8;l++){const u=l/8*ze+o,f=r*(.6+.3*J(o+l))*a;Me(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(a*Math.PI)*1.4),a<1?(i.globalAlpha=1,Tu(i,Ut,Et)):(i.globalAlpha=1-(s-.6)/.4,i.fillStyle=rt.o,i.fillRect(Q(Ut-5),Q(Et-1),10,2),i.fillStyle=rt.l,i.fillRect(Q(Ut-2),Q(Et-2),4,1))}}});for(let i=0;i<12;i++){const s=Math.random()*ze;z(t,n,.8,Math.cos(s)*y(.5,2),Math.sin(s)*y(.5,2),y(.5,1.5),y(.5,.9),i%3?rt.l:rt.w,2,-.5,!0)}};function Lg(e){const t=e.x,n=e.y,r=od(t,n,e.team,!0,.6);A({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,s){const a=s.vid?ht(s.vid):null,l=a?a.x:t,u=a?a.y:n,f=i*1;Me(l,u,.55);const c=Ut,h=Et;Me(l,u,2.6);const d=Et,m=h-d;if(f>.15){Me(l,u);const x=ar((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=rt.o,gi(o,Ut,Et,Q(16*x),.45),o.fillStyle=rt.l,o.fillRect(Q(Ut-6*x),Q(Et-3),Q(6*x),2)}const p=ar(f/.15)*m,g=f>.45?ar((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=Q(g);x<p;x+=3){const b=x/m*(x/m),v=Math.sin(x*.22-M.T*9)*6*b;o.fillStyle=rt.o,o.fillRect(Q(c+v-2),Q(d+x),4,3),o.fillStyle=rt.l,o.fillRect(Q(c+v-2),Q(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,Ig(o,c+(x-1)*12,h-10-b*30,4,x&1?rt.y:rt.l))}}});for(let o=0;o<5;o++)z(t,n,.4,y(-.5,.5),y(-.5,.5),y(.8,1.6),y(.6,.9),o&1?rt.l:rt.w,2,-.5,!0)}const Ii=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];Z.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,s=[1,4,6],a=s.map((l,u)=>u/3*ze+r);A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,c=So(ar(f/.25)),h=f>1.15?ar((f-1.15)/.5):0;Me(t,n,.55*c-h*.4);const d=Ut,m=Et;l.globalAlpha=1-h;for(let p=0;p<Ii.length;p++){const g=d+Ii[p][0],x=m+Ii[p][1]*c,b=8;Jo(l,g,x,b,rt.d),Jo(l,g,x,b-2,rt.cell);const v=ar((f-.08-p*.04)/.3),S=s.indexOf(p)>=0&&f>o;!S&&v>0&&(Jo(l,g,x,b-2,rt.o,x+(b-2)-v*2*(b-2)),l.fillStyle=rt.l,l.fillRect(Q(g-3),Q(x-3),2,2)),!S&&f>.4&&s.indexOf(p)>=0&&(l.fillStyle=rt.y,l.fillRect(Q(g-4),Q(x-1),8,3))}}}),A({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){Me(t,n,.55);const f=Ut,c=Et,h=(M.T*30|0)&1;for(let d=0;d<3;d++){const m=f+Ii[s[d]][0],p=c+Ii[s[d]][1];Me(t+Math.cos(a[d])*1.1,n+Math.sin(a[d])*1.1,.6);const g=Ut,x=Et,b=w=>{const P=Math.sin(w*Math.PI);return[m+(g-m)*w+Math.cos(w*ze*1.5+d)*12*P,p+(x-p)*w+Math.sin(w*ze*1.5+d)*8*P-P*18]},v=So(u);for(let w=1;w<7;w++){const P=v-w*.04;if(P<0)break;const R=b(P);l.globalAlpha=(1-w/7)*.8,l.fillStyle=rt.l,l.fillRect(Q(R[0]),Q(R[1]),2,2)}const S=b(v),_=b(Math.max(0,v-.02));l.globalAlpha=u>.8?(1-u)/.2:1,Eg(l,S[0],S[1],S[0]>=_[0]?1:-1,!!h)}}}),A({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<9;c++)z(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1,2),y(.4,.6),c%3?rt.y:rt.d,2,6,!1,.9)}}}),A({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let c=0;c<14;c++)z(t+y(-.3,.3),n+y(-.3,.3),y(.2,.7),y(-.6,.6),y(-.6,.6),y(0,.5),y(.5,.8),c%3?rt.d:rt.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)z(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(.3,1),.5,"#c8a878",3,3,!1,.9);tt(2)};const Ji=new Map;Z.abeja_R=e=>{e.type==="channel"?Ug(e):e.type==="channel_tick"?kg(e):e.type==="channel_end"&&Dg(e)};function Ug(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,s=2,a=Math.random()*99,l={endT:-1};Ji.size>16&&Ji.clear(),Ji.set(r,l);const u=c=>{if(l.endT<0&&M.mode!=="guest"&&c.t>.1){const d=ht(r);(!d||!d.channel)&&(l.endT=M.T)}if(l.endT<0)return 1;const h=1-(M.T-l.endT)/.35;return h<=0?(c.t=c.dur+1,0):h};A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const p=h*i,g=So(ar(p/.4)),x=a+p*.3;c.globalAlpha=m;for(let b=0;b<8;b++){const v=x+b/8*ze,S=Math.cos(v),_=Math.sin(v);for(let w=0;w<10;w++){const P=w/9,R=(.15+P*.95)*g,I=Math.sin(P*Math.PI)*.24*g;for(let O=-1;O<=1;O++)Me(t+S*R-_*I*O,n+_*R+S*I*O),Ue(c,Ut,Et,6,O===0&&P<.8?rt.l:P>.85?rt.d:rt.y)}}Me(t,n),c.fillStyle=rt.o,gi(c,Ut,Et,Q(12*g),.5),c.fillStyle=Ca,gi(c,Ut,Et,Q(6*g),.5)}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const p=h*i,g=So(ar(p/.5)),x=p*.25;c.globalAlpha=.55*m;for(let b=0;b<56;b++){const v=b/56*ze+x;Me(t+Math.cos(v)*o,n+Math.sin(v)*o),Ue(c,Ut,Et,b&1?2:3,b&1?rt.l:rt.y)}c.globalAlpha=.28*m;for(let b=0;b<6;b++){const v=b/6*ze+x;for(let S=1;S<12;S++){const _=S/12*(Math.PI/2),w=Math.cos(_)*o;Me(t+Math.cos(v)*w,n+Math.sin(v)*w,Math.sin(_)*s*g),Ue(c,Ut,Et,2,rt.l)}}for(let b=0;b<32;b++){const v=b/32*ze-x,S=Math.cos(Math.PI/4)*o;Me(t+Math.cos(v)*S,n+Math.sin(v)*S,Math.sin(Math.PI/4)*s*g),Ue(c,Ut,Et,2,rt.y)}c.globalAlpha=m;for(let b=0;b<6;b++){const v=M.T*2.4+b/6*ze;Me(t+Math.cos(v)*.7,n+Math.sin(v)*.7,.9+Math.sin(M.T*4+b)*.2),Ue(c,Ut,Et,2,b&1?rt.w:Ca)}}});const f=26;A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(c,h,d){const m=u(d);if(m<=0)return;const p=h*i;if(!(p<.3)){c.globalAlpha=m;for(let g=0;g<f;g++){const b=J(g*3.7+a)*.65,v=Math.floor((p+b)/.65),S=(p+b)%.65/.65,_=J(g*13.1+v)*ze,w=Math.sqrt(J(g*5.3+v*1.7))*o*.9,P=t+Math.cos(_)*w,R=n+Math.sin(_)*w;if(S<.85)Me(P,R,s*.95*(1-S/.85)),c.fillStyle=rt.o,c.fillRect(Q(Ut-1),Q(Et-2),2,4),c.fillStyle=rt.l,c.fillRect(Q(Ut-1),Q(Et-4),2,2);else{Me(P,R);const I=(S-.85)/.15;c.fillStyle=rt.o,c.fillRect(Q(Ut-2-I*4),Q(Et),3,2),c.fillRect(Q(Ut+I*4),Q(Et),3,2)}}}}})}function kg(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;A({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(a,l){const u=.4+(r-.4)*So(l);a.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const c=f/6*ze+Math.PI/6,h=(f+1)/6*ze+Math.PI/6;Me(t+Math.cos(c)*u,n+Math.sin(c)*u);const d=Ut,m=Et;Me(t+Math.cos(h)*u,n+Math.sin(h)*u),Au(a,d,m,Ut,Et,3,f&1?rt.y:rt.l)}}});const i=M.game;if(!i)return;let s=0;for(const a of i.units)if(!(a.dead||a.kind==="tower"||a.kind==="nexus"||(a.x-t)*(a.x-t)+(a.y-n)*(a.y-n)>r*r)){if(a.team===o){if(a.kind==="hero")for(let l=0;l<2;l++)z(a.x+y(-.3,.3),a.y+y(-.3,.3),.5,0,0,y(1,1.6),.6,l?rt.l:rt.w,2,0,!0)}else if(s<8){s++;const l=a.x,u=a.y;A({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,c){Me(l,u),f.globalAlpha=.8*(1-c),f.fillStyle=rt.d,gi(f,Ut,Et,13,.45),f.fillStyle=rt.o,gi(f,Ut-2,Et-1,9,.45),f.fillStyle=rt.l,f.fillRect(Q(Ut-5),Q(Et-3),3,2),f.fillRect(Q(Ut-8),Q(Et-10+c*8),2,Q(8-c*6)),f.fillRect(Q(Ut+7),Q(Et-8+c*6),2,Q(6-c*4))}})}}}function Dg(e){const t=Ji.get(e.uid);t&&t.endT<0&&(t.endT=M.T),Ji.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*ze;z(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*y(2,3.5),Math.sin(i)*y(2,3.5),y(1.5,3),y(.6,.9),o&1?rt.y:rt.l,4,3,!0,.93)}for(let o=0;o<12;o++)z(n,r,.8,y(-1,1),y(-1,1),y(1,2.5),y(.5,.9),o&1?Ca:rt.w,2,0,!0);A({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){Me(n,r),o.globalAlpha=1-i,o.fillStyle=rt.l,gi(o,Ut,Et,Q(20+i*90),.5)}}),tt(3)}else{for(let o=0;o<10;o++){const i=o/10*ze;z(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,y(.2,.6),y(.7,1),o&1?Fg:rt.d,4,1.5,!1,.9)}et.sfx("deny",n,r,.35)}}Ce.abeja_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,g=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?rt.l:rt.y,e.fillRect(Q(n-s*p+l*g-1),Q(r-a*p+u*g-1),2,2)}e.globalAlpha=1;const c=Math.sin(i*20+f)*3,h=n+l*c,d=r+u*c;for(let m=0;m<8;m++){const p=m/8*ze+i*6;Ue(e,h+Math.cos(p)*5,d+Math.sin(p)*5,2,rt.o)}e.fillStyle=rt.y,e.fillRect(Q(h-3),Q(d-3),6,6),e.fillStyle=rt.w,e.fillRect(Q(h-2),Q(d-2),2,2)};Te.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*ze;A({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,s){Me(t,n,.45);const a=s<.25?.5+s*2.6:1.15-(s-.25)*.2,l=(r?7:5)*a;i.globalAlpha=s>.5?(1-s)/.5:1;for(let f=0;f<5;f++){const c=o+f/5*ze;Ue(i,Ut+Math.cos(c)*l,Et+Math.sin(c)*l*.8,r?5:4,f&1?rt.l:rt.y)}Ue(i,Ut,Et,r?5:4,r?Ca:rt.o);const u=6+s*(r?26:18);for(let f=0;f<10;f++){const c=o+f/10*ze;Ue(i,Ut+Math.cos(c)*u,Et+Math.sin(c)*u*.5+6,2,rt.l)}}});for(let i=0;i<(r?8:4);i++)z(t,n,.5,y(-1,1),y(-1,1),y(.3,1.2),.4,i&1?rt.y:rt.w,2,2,!0)};const Lt=Math.round,lt={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function Dn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Lt(t-r/2),Lt(n-r/2),r,r)}const Xg=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,kl={};function Gg(e){if(kl[e])return kl[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return kl[e]=t}function xi(e,t,n,r,o,i,s,a=1,l=1,u=!1){const f=Gg(r);for(let c=0;c<f.length;c++){if(u&&c%2)continue;const[h,d]=f[c];e.fillStyle=h+d>r*.6?s:i,e.fillRect(Lt(t+h*o*a-o/2),Lt(n+d*o*l-o/2),o,o)}u||(e.fillStyle=lt.white,e.fillRect(Lt(t-r*o*.45*a-o/2),Lt(n-r*o*.5*l-o/2),o,o))}function Ng(e,t,n,r,o,i,s=1,a=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(Lt(t-u*o*s),Lt(n+l*o*a-o/2),Lt(u*2*o*s),o)}}function Bg(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const Nc=["#.#","###",".#.",".#."];function $g(e,t){A({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=T(e,t,.5),s=4+Lt(r*5);n.globalAlpha=1-r,xi(n,o,i,s,2,lt.pink1,lt.pink2,1,1,!0);for(let a=0;a<8;a++){const l=a/8*6.283+.4,u=s*2+4+r*10;Dn(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,a%2?lt.white:lt.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=y(0,6.283),o=y(1,2.5);z(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(1,2.5),.4,n<3?lt.water:lt.pink1,2,8,!1)}for(let n=0;n<3;n++)z(e,t,.5,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,n%2?lt.coral:lt.orange,3,10,!1)}Z.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,a=Math.atan2(s,i);A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,c]=T(t,n,.55);l.globalAlpha=1-u;for(let h=0;h<3;h++){const d=a+(h-1)*.5,m=10+u*(22+h*6);xi(l,f+Math.cos(d)*m,c+Math.sin(d)*m-u*8,1+h%2,2,lt.pink2,lt.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)z(t+r*.4,n+o*.4,.5,r*y(1,2.5)+y(-.5,.5),o*y(1,2.5)+y(-.5,.5),y(.5,1.5),.35,l%2?lt.water:lt.pink1,2,6,!1);return!0};Ce.ajolote_Q=(e,t,n,r,o,i)=>{Bg(t,$g);const s=Math.sin(i*17+t.x*2)*.13,a=1+s,l=1-s;e.globalAlpha=.35,Ng(e,n,r,6,2,lt.pink2,a,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let h=0;h<Nc.length;h++)for(let d=0;d<3;d++)Nc[h][u?2-d:d]==="#"&&Dn(e,n-2+d*2,r-3+h*2,2,h<1?lt.orange:lt.coral);xi(e,n,r,6,2,lt.pink2,lt.coral2,a,l);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=18+h*8,m=Math.sin(i*12+h*2)*3;xi(e,n-f*d-c*m,r-c*d+f*m,2-(h>>1),2,lt.pink1,lt.pink2)}Math.random()<.35&&z(t.x,t.y,(t.z||.45)+.05,y(-.2,.2),y(-.2,.2),.6,.45,lt.pink1,2,-.5,!1)};function Wg(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return A({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[s,a]=T(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const c=s+n[l][0],h=a+n[l][1]-u*6;if(u<f)xi(r,c,h,2,2,lt.pink2,lt.coral);else if(u<f+.3){const d=(u-f)/.3,m=Lt(h-d*14),p=Lt(c);r.globalAlpha=1-d,r.fillStyle=lt.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=lt.white;for(const[g,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+g*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}Z.ajolote_W=e=>{if(e.type==="heal")return Wg(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,s=[-.55,-.15,.25];A({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const c=ht(o),[h,d]=T(c?c.x:t,c?c.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let g=-1;g<=1;g+=2)for(let x=0;x<3;x++){const b=g>0?s[x]:Math.PI-s[x],v=Math.sin(f*16+x*1.3)*.12,S=b+v*g,_=Math.cos(S),w=Math.sin(S),P=Lt(22*m)-(x===1?0:4);for(let R=6;R<=P;R+=2)Dn(u,h+_*R,d+w*R,2,R>P-2?lt.pink1:lt.gill),R%4===0&&R>8&&(Dn(u,h+_*R-w*3,d+w*R+_*3,2,lt.pink2),Dn(u,h+_*R+w*3,d+w*R-_*3,2,lt.pink2))}u.globalAlpha=1}});const a=[];for(let u=0;u<12;u++)a.push(u/12*6.283+y(-.12,.12));A({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let c=0;c<a.length;c++){const h=(f-c*.025)/.8;if(h<=0||h>=1)continue;const d=Math.sin(h*Math.PI),m=Lt(d*3)*2,[p,g]=T(t+Math.cos(a[c])*r,n+Math.sin(a[c])*r),x=Lt(p),b=Lt(g);u.fillStyle=lt.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=lt.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=lt.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=y(0,6.283),c=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,n:1+u%3,t0:y(0,.35),pop:y(.4,.9),ph:y(0,6.283),done:!1})}return A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of l){const d=c-h.t0;if(d<0)continue;const[m,p]=T(h.x,h.y,.1+Math.min(d,h.pop)*.9),g=m+Math.sin(d*9+h.ph)*3;if(d<h.pop){xi(u,g,p,h.n,2,lt.pink2,lt.coral);continue}h.done||(h.done=!0,z(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.8,.5,lt.pink1,2,0,!0),z(h.x,h.y,.1+h.pop*.9,y(-.5,.5),y(-.5,.5),.5,.4,lt.white,2,0,!0));const x=(d-h.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=h.n*2+2+x*6;for(const[v,S]of[[-1,-1],[1,-1],[-1,1],[1,1]])Dn(u,g+v*b,p+S*b,2,lt.pink1);u.globalAlpha=1}}}),!0};function Hg(e,t,n,r,o){const i=-o,s=r;for(let a=0;a<=22;a+=2)Dn(e,t-r*a,n-o*a,2,a>18?lt.coral2:lt.orange);for(let a=-6;a<=6;a+=2)Dn(e,t+i*a,n+s*a,2,lt.orange);for(const a of[-6,0,6]){const l=a===0?11:8;for(let u=2;u<=l;u+=2)Dn(e,t+i*a+r*u,n+s*a+o*u,2,u>=l-1?lt.white:lt.pink1)}}Z.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),s=i+.6,a=Math.hypot(r-t,o-n),l=(r-t)/(a||1),u=(o-n)/(a||1),f=(l-u)*64,c=(l+u)*32,h=Math.hypot(f,c)||1,d=f/h,m=c/h,p=Math.max(2,Math.ceil(a/.1)),g={n:0,end:!1};return A({type:"custom",layer:"ground",dur:s,x:t,y:n,draw(x,b){const v=b*s,S=Math.min(1,v/i);for(let _=0;_<=p*S;_++){const w=_/p,P=v-w*i,R=Math.max(0,1-P/.55);if(R<=0)continue;const[I,O]=T(t+(r-t)*w,n+(o-n)*w),k=O+Math.sin(w*14-v*25)*2,G=Lt(4+6*w);x.globalAlpha=R,x.fillStyle=lt.pink2,x.fillRect(Lt(I)-G,Lt(k)-3,G*2,1),x.fillRect(Lt(I)-G,Lt(k)+2,G*2,1),x.fillStyle=lt.water,x.fillRect(Lt(I)-G,Lt(k)-2,G*2,4),_%3===0&&(x.fillStyle=lt.white,x.fillRect(Lt(I)-1,Lt(k)-1,3,2))}if(x.globalAlpha=1,S<1&&g.n<22)for(let _=0;_<2;_++){g.n++;const w=t+(r-t)*S,P=n+(o-n)*S;z(w,P,.2,-l*y(.5,1.5)+y(-.8,.8),-u*y(.5,1.5)+y(-.8,.8),y(1,2.5),.45,_?lt.water:lt.pink1,2,8,!1)}if(!g.end&&S>=1){g.end=!0;for(let _=0;_<10;_++)z(r+l*.4,o+u*.4,.4,l*y(1.5,3.5)+y(-.8,.8),u*y(1.5,3.5)+y(-.8,.8),y(1,3),.5,_%2?lt.water:lt.white,2,9,!1);tt(4)}}}),A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const v=b*(i+.25),S=Math.min(1,v/i),[_,w]=T(t+(r-t)*S,n+(o-n)*S,.5);if(x.globalAlpha=S<1?1:Math.max(0,1-(v-i)/.25),Hg(x,_+d*10,w+m*10,d,m),S>=1){const P=(v-i)/.25,R=6+P*30;for(const I of[-6,0,6])for(let O=12;O<12+R;O+=2)Dn(x,_+d*(10+O)-m*I,w+m*(10+O)+d*I,2,O>8+R?lt.pink1:lt.white)}x.globalAlpha=1}}),!0};function Vg(e,t,n,r,o){const i=Lt(t),s=Lt(n),a=(J(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=Lt(u*a),c=u<r*.5?6:4;e.fillStyle=lt.coral,e.fillRect(i+f-c/2,s-u-2,c,2),e.fillStyle=lt.deep,e.fillRect(i+f+c/2-2,s-u-2,2,2)}const l=J(o+3)<.5?-1:1;for(const[u,f,c]of[[.35+J(o+1)*.15,.38,l],[.58+J(o+2)*.12,.28,-l]]){const h=r*u,d=i+Lt(h*a),m=r*f;let p=d,g=s-h;for(let x=0;x<m;x+=2)p=d+c*(3+x*.7),g=s-h-x,e.fillStyle=lt.coral2,e.fillRect(Lt(p)-2,Lt(g)-2,4,2);e.fillStyle=lt.pink1,e.fillRect(Lt(p)-2,Lt(g)-4,4,2)}e.fillStyle=lt.pink1,e.fillRect(i+Lt(r*a)-2,s-r-3,4,3)}Z.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let a=0;a<2;a++){const l=a?8:6,u=r*(a?.85:.45);for(let f=0;f<l;f++){const c=f/l*6.283+a*.4+y(-.15,.15);i.push({x:t+Math.cos(c)*u,y:n+Math.sin(c)*u,d:.04+a*.13+y(0,.05),H:y(24,40)*(a?1:.85),seed:y(0,99),up:!1})}}i.sort((a,l)=>a.x+a.y-(l.x+l.y));const s=(a,l)=>{const u=Math.min(1,Math.max(0,(l-a.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return a.H*(u<1?u*1.15:1)*(1-f)};A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l){const u=l*o;a.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[c,h]=T(f.x,f.y);a.fillStyle=lt.hole,a.fillRect(Lt(c)-6,Lt(h)-2,12,4),a.fillRect(Lt(c)-3,Lt(h)-3,6,6)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(a,l){const u=-l*12.6,f=Xg(l,.05,.6);for(let c=0;c<3;c++){const h=1+c*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[g,x]=T(t+Math.cos(p)*h,n+Math.sin(p)*h,.45);a.globalAlpha=f*(1-m),Dn(a,g,x,m<.15?3:2,m<.15?lt.white:c===1?lt.pink2:lt.water)}}a.globalAlpha=1}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,z(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,3.5),.5,Math.random()<.5?lt.coral:lt.orange,3,10,!1),z(f.x,f.y,.1,y(-1,1),y(-1,1),y(2,4),.45,lt.water,2,10,!1));const c=s(f,u);if(c<2)continue;const[h,d]=T(f.x,f.y);Vg(a,h,d,Lt(c/2)*2,f.seed)}}});for(let a=0;a<28;a++){const l=y(0,6.283),u=y(2,5);z(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,y(3,6),y(.7,1),[lt.water,lt.pink1,lt.white,lt.pink2][a%4],Math.random()<.3?3:2,12,!1,.97)}return tt(9),!0};Te.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=ht(e.uid);let i=1,s=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,s=m/p)}const a=(i-s)*64,l=(i+s)*32,u=Math.hypot(a,l)||1,f=a/u,c=l/u;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,g]=T(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let v=-x/2;v<=x/2;v+=2)Dn(d,p+f*v-c*b,g+c*v+f*b,2,v>x/2-4?lt.white:lt.pink2);d.globalAlpha=1}});const h=r?7:4;for(let d=0;d<h;d++)z(t,n,.45,i*y(.5,2)+y(-.7,.7),s*y(.5,2)+y(-.7,.7),y(1,2.5),.35,d%2?lt.pink1:lt.water,2,8,!1)};const Ft=Math.round,yt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function bn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Ft(t-r/2),Ft(n-r/2),r,r)}const Cu=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Ra(e,t,n,r,o,i,s){const a=t.length,l=t[0].length,u=Ft(n-l*o/2),f=Ft(r-a*i/2);for(let c=0;c<a;c++)for(let h=0;h<l;h++){const d=s[t[c][h]];d&&(e.fillStyle=d,e.fillRect(u+h*o,f+c*i,o,i))}}function Ka(e,t,n,r,o,i,s,a,l,u){const f=-o,c=r;for(let h=0;h<=i;h+=2){const d=h/i,m=t-r*h,p=n-o*h,g=d<.85?s*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=g;x+=2){const b=x>g-2?a:l,v=x*.5;((h>>1)+(x>>1))%4!==3&&bn(e,m+f*x-r*v,p+c*x-o*v,2,b),((h>>1)+(x>>1)+2)%4!==3&&bn(e,m-f*x-r*v,p-c*x-o*v,2,b)}bn(e,m,p,2,u)}}function Pa(e,t,n,r,o,i,s){const a=Ft(t),l=Ft(n);for(let u=0;u<r;u+=2){const f=Math.max(2,Ft(o*(1-u/r)/2)*2),c=Ft(u*i),h=s<0?l-u-2:l+u;e.fillStyle=yt.ice3,e.fillRect(a+c-f/2,h,f,2),e.fillStyle=yt.ice1,e.fillRect(a+c-f/2,h,Math.max(1,f/2),2)}e.fillStyle=yt.snow,e.fillRect(a+Ft(r*i)-1,s<0?l-r-1:l+r-2,2,3)}function id(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;A({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const s=e.homing;!n&&Math.hypot(s.x-e.x,s.y-e.y)<1.2&&t(s.x,s.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function qg(e,t){A({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=T(e,t,.5),s=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let a=0;a<9;a++){const l=a/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,c=a%2?4:6;for(let h=0;h<c;h+=2)bn(n,o+u*(s+h),i+f*(s+h),2,h>=c-2?yt.snow:yt.ice2)}if(r<.35){const a=Ft(10*(1-r/.35))+2;n.fillStyle=yt.snow,n.fillRect(Ft(o)-a/2,Ft(i)-a/2,a,a)}n.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=T(e,t,.5);n.globalAlpha=1-r;for(let s=0;s<3;s++){const a=Math.sin(r*10+s*2),l=-Math.PI/2+a*.6;Ka(n,o+(s-1)*9+a*4,i-r*26-s*3,Math.cos(l),Math.sin(l),8,2,yt.ice3,yt.ice1,yt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=y(0,6.283),o=y(1.2,3);z(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,y(.5,2),.4,n%2?yt.ice2:yt.ice3,2,6,!1)}}Z.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,s=(r+o)*32,a=Math.atan2(s,i);A({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,c]=T(t,n,.6);l.globalAlpha=1-u;for(let h=0;h<5;h++){const d=a+(h-2)*.32,m=8+u*28,p=Math.cos(d),g=Math.sin(d);Ka(l,f+p*m,c+g*m,p,g,10,3,yt.ice3,yt.ice1,yt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)z(t+r*.4,n+o*.4,.6,r*y(.5,1.5)+y(-.4,.4),o*y(.5,1.5)+y(-.4,.4),y(0,.6),.45,yt.snow,2,.5,!0);return!0};Ce.buho_Q=(e,t,n,r,o,i)=>{id(t,qg);const s=Math.cos(o),a=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+s*12-a*l,f=r+a*12+s*l;dt(!0);const c=Ot();for(let h=1;h<=5;h++)c.globalAlpha=.5-h*.08,bn(c,n-s*h*6,r-a*h*6,8-h,h<3?yt.ice2:yt.ice3);c.globalAlpha=1,dt(!1),Ka(e,u,f,s,a,24,6,yt.ice3,yt.ice1,yt.snow),Math.random()<.55&&z(t.x,t.y,t.z||.45,y(-.3,.3),y(-.3,.3),y(-.2,.3),.5,Math.random()<.5?yt.snow:yt.ice1,2,0,!0)};const Yg=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],Kg=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];Z.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l){const u=Cu(l,.08,.75);it(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),A({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(a,l){const u=Cu(l,.1,.75),f=l*.8;a.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const g=p/m*6.283+(d===r?f:-f),[x,b]=T(t+Math.cos(g)*d,n+Math.sin(g)*d);bn(a,x,b,2,yt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,g]=T(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);a.globalAlpha=u*x,Ra(a,Yg[d%4],p,g,2,2,{"#":yt.ice1})}const[c,h]=T(t,n);a.globalAlpha=u*(.75+.25*Math.sin(l*14)),Ra(a,Kg,c,h,3,2,{"#":yt.ice2,o:yt.amber,v:yt.amber}),a.globalAlpha=1}});const i=[];for(let a=0;a<8;a++){const l=a/8*6.283+y(-.3,.3),u=r*(.3+.55*Math.sqrt(J(a+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+a*.035,h:y(16,28),lean:y(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((a,l)=>a.x+a.y-(l.x+l.y));const s={shat:!1};A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const c of i){const h=Math.min(1,Math.max(0,(u-c.d)/.12));if(h<=0)continue;const[d,m]=T(c.x,c.y),p=c.h*h*(1-f);p<2||(Pa(a,d,m,p,8,c.lean,-1),Pa(a,d+c.side*6,m+2,p*.6,6,c.lean+c.side*.35,-1))}if(!s.shat&&f>0){s.shat=!0;for(const c of i)for(let h=0;h<2;h++)z(c.x,c.y,.25,y(-1.5,1.5),y(-1.5,1.5),y(1,2.5),.45,h?yt.ice2:yt.snow,2,8,!0)}}});for(let a=0;a<20;a++){const l=y(0,6.283),u=y(0,r);z(t+Math.cos(l)*u,n+Math.sin(l)*u,y(.6,1.4),y(-.6,.6)+.8,y(-.6,.6)-.4,-.6,y(.6,1),Math.random()<.6?yt.snow:yt.ice1,2,-.5,!1,.98)}return!0};const sd=["......####","...#######","##########",".#########","..#.#.#.#."],jg=sd.map(e=>e.split("").reverse().join(""));Z.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let s=0;s<12;s++)i.push({vx:y(-45,45),vy:y(-55,-15),ph:y(0,6.283),L:Math.random()<.4?12:9});A({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,a){const l=a*1,[u,f]=T(t,n,.6);s.globalAlpha=Cu(a,.02,.55);for(const c of i){const h=Math.sin(l*6+c.ph),d=u+c.vx*l*(1-l*.5)+h*6,m=f+c.vy*l+60*l*l,p=Math.PI/2+h*.9;Ka(s,d+Math.cos(p)*c.L*.5,m+Math.sin(p)*c.L*.5,Math.cos(p),Math.sin(p),c.L,3,yt.ice3,yt.ice1,yt.snow)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(s,a){for(let l=0;l<10;l++){const u=a*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[c,h]=T(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Ft(4*(1-u))+1;s.globalAlpha=1-u,s.fillStyle=yt.ice1,s.fillRect(Ft(c)-d,Ft(h),d*2,1),s.fillRect(Ft(c),Ft(h)-d,1,d*2)}s.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,a){const[l,u]=T(r,o,.75),f=8+a*24;s.globalAlpha=(1-a)*.9,Ra(s,sd,l+f+15,u-a*6,3,3,{"#":yt.ice1}),Ra(s,jg,l-f-15,u-a*6,3,3,{"#":yt.ice1}),s.globalAlpha=1}});for(let s=0;s<16;s++)z(t+y(-.3,.3),n+y(-.3,.3),y(.3,.9),y(-.8,.8),y(-.8,.8),y(-.3,.4),y(.6,1),yt.snow,2,.4,!1,.97);for(let s=0;s<16;s++){const a=y(0,6.283),l=y(1,2.5);z(r,o,.6,Math.cos(a)*l,Math.sin(a)*l,y(0,1),.5,s%3?yt.ice1:yt.moon2,2,1,!0)}return!0};function Bc(e,t,n,r,o,i,s){e.fillStyle=s;const a=Ft(t),l=Ft(n),u=r*.82;for(let f=-r;f<r;f+=2){const c=Math.sqrt(Math.max(0,r*r-f*f)),h=u*u-f*f,d=-c,m=c;if(h<=0){e.fillRect(a+Ft(d),l+Ft(f*i),Ft(m-d),Math.max(1,Ft(2*i)));continue}const p=Math.sqrt(h),g=o-p,x=o+p;g>d&&e.fillRect(a+Ft(d),l+Ft(f*i),Ft(Math.min(m,g)-d),Math.max(1,Ft(2*i))),x<m&&e.fillRect(a+Ft(x),l+Ft(f*i),Ft(m-x),Math.max(1,Ft(2*i)))}}const zi=[];function $c(e,t,n){A({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let s=0;s<36;s++){const a=s/36*6.283,[l,u]=T(e+Math.cos(a)*i,t+Math.sin(a)*i);bn(r,l,u,s%3?2:3,s%2?yt.ice2:yt.moon)}r.globalAlpha=1}}),A({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){it(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),tt(9)}Z.buho_R=e=>{if(e.type==="starfall"){const u=zi.findIndex(f=>Math.abs(f.x-e.x)<.3&&Math.abs(f.y-e.y)<.3);return u>=0?zi.splice(u,1):$c(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,s={x:t,y:n,t:0};zi.push(s),zi.length>6&&zi.shift(),A({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.15)*(c>o?Math.max(0,1-(c-o)/.6):1);u.globalAlpha=h;for(const[p,g,x]of[[r,56,1],[r*.9,48,-1]])for(let b=0;b<g;b++){if((b+(x>0?0:2))%4===3)continue;const v=b/g*6.283+c*.7*x,[S,_]=T(t+Math.cos(v)*p,n+Math.sin(v)*p);bn(u,S,_,2,x>0?yt.moon2:yt.ice2)}for(let p=0;p<12;p++){const g=p/12*6.283-c*.35,[x,b]=T(t+Math.cos(g)*r*.62,n+Math.sin(g)*r*.62),[v,S]=T(t+Math.cos(g)*r*.82,n+Math.sin(g)*r*.82);for(let _=0;_<=4;_++)bn(u,x+(v-x)*_/4,b+(S-b)*_/4,2,yt.moon)}const[d,m]=T(t,n);if(Bc(u,d,m,30,12,.5,yt.moon),c>.45){const p=Math.min(1,(c-.45)/.1);u.globalAlpha=h*p,bn(u,d-26,m-3,4,yt.amber),bn(u,d+26,m-3,4,yt.amber)}u.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(u,f){const c=f*i,h=Math.min(1,c/.2)*(c>o?Math.max(0,1-(c-o)/.5):1),[d,m]=T(t,n,4.4),p=u.createRadialGradient(d,m,4,d,m,60);p.addColorStop(0,`rgba(200,190,255,${.45*h})`),p.addColorStop(1,"rgba(120,110,220,0)"),u.fillStyle=p,u.fillRect(Ft(d)-60,Ft(m)-60,120,120),u.globalAlpha=h,Bc(u,d,m,20,9,1,yt.moon),u.globalAlpha=1}});const a=[];for(let u=0;u<14;u++){const f=y(0,6.283),c=r*.85*Math.sqrt(Math.random());a.push({x:t+Math.cos(f)*c,y:n+Math.sin(f)*c,fall:o-.12+u*.025,ap:.08+u*.025,L:y(18,28),hit:!1})}a.sort((u,f)=>u.x+u.y-(f.x+f.y));const l={boom:!1};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const c=f*i;for(const h of a){const d=(c-h.fall)/.12;if(d>=1){if(!h.hit){h.hit=!0;for(let v=0;v<3;v++)z(h.x,h.y,.1,y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),.45,v?yt.ice2:yt.snow,2,10,!0)}const b=(c-h.fall-.12)/.2;if(b<1){const[v,S]=T(h.x,h.y),_=Ft(10*(1-b))+2;u.globalAlpha=1-b,u.fillStyle=yt.snow,u.fillRect(Ft(v)-_,Ft(S)-1,_*2,2),u.fillRect(Ft(v)-1,Ft(S)-_/2,2,_),u.globalAlpha=1}continue}const m=Math.min(1,Math.max(0,(c-h.ap)/.25));if(m<=0)continue;const p=d>0?3.6*(1-d*d):3.6+Math.sin(c*9+h.x)*.03,[g,x]=T(h.x,h.y,p);u.globalAlpha=m,d>0&&(u.fillStyle="rgba(226,247,255,0.5)",u.fillRect(Ft(g)-1,Ft(x)-h.L-30,2,28)),Pa(u,g,x-h.L,h.L,7,0,1),u.globalAlpha=1}!l.boom&&c>=o&&(l.boom=!0,s.t===0&&(s.t=1,$c(t,n,r)))}});for(let u=0;u<10;u++){const f=y(0,6.283),c=y(0,r);z(t+Math.cos(f)*c,n+Math.sin(f)*c,.05,0,0,y(1,2),.7,u%2?yt.moon2:yt.ice1,2,0,!0)}return!0};function ad(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:y(-9,9),oy:y(-3,4),h:y(8,n?16:12),lean:y(-.35,.35)});A({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,s){const[a,l]=T(e,t,.15),u=Math.min(1,s*7);i.globalAlpha=s>.6?(1-s)/.4:1;for(const f of r)Pa(i,a+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const s=y(0,6.283),a=y(.8,2);z(e,t,.4,Math.cos(s)*a,Math.sin(s)*a,y(.5,1.8),.35,i%2?yt.snow:yt.ice2,2,5,!0)}}const ld=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&ld.push([t,e,n>3.6?1:0])}Ce.buho_A=(e,t,n,r,o,i)=>{id(t,(h,d)=>ad(h,d,!1));const s=Math.cos(o),a=Math.sin(o);dt(!0);const l=Ot();for(let h=1;h<=4;h++)l.globalAlpha=.45-h*.09,bn(l,n-s*h*5,r-a*h*5,6-h,yt.moon2);l.globalAlpha=1,dt(!1);const u=i*13,f=Math.cos(u),c=Math.sin(u);for(const[h,d,m]of ld)bn(e,n+(h*f-d*c)*2,r+(h*c+d*f)*2,3,m?yt.ice3:yt.ice1);bn(e,n+-3*f*2,r+-3*c*2,2,yt.snow),Math.random()<.45&&z(t.x,t.y,t.z||.45,0,0,-.2,.35,yt.ice1,2,0,!0)};Te.buho=e=>ad(e.x,e.y,!!e.big);const St=Math.round,Ze=Math.PI*2,Wc=e=>e*N.HW*Math.SQRT2,Mt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},_r=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],ud=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function tn(e,t,n,r){r=Math.max(1,St(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(St(t[0]+(n[0]-t[0])*a/i-s),St(t[1]+(n[1]-t[1])*a/i-s),r,r)}function Ru(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(St(t-l),St(n+s),Math.max(1,St(l*2)),i)}}function Oi(e,t,n,r,o,i,s=0){for(let a=0;a<o;a++){const l=s+a/o*Ze;e.fillRect(St(t+Math.cos(l)*r-i/2),St(n+Math.sin(l)*r*.5-i/2),i,i)}}function Qg(e,t,n,r){t=St(t),n=St(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const Zg=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));Z.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let a=0;a<11;a++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(a-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:a,t0:Math.random()*.35,vx:y(-14,14),c:l+a})}A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(a,l){const u=l*.8,[f,c]=T(t,n,.5),h=M.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const g=f+(d.i-3)*5+(m>0?d.vx*m:0),x=c+(d.j-5)*5-(m>0?m*m*160:0);a.globalAlpha=p,a.fillStyle=_r[(d.c+h)%6],a.fillRect(St(g)-2,St(x)-2,5,5)}}});const s=Math.max(4,Math.min(18,St(Math.hypot(r-t,o-n)*2.4)));A({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(a,l){const u=T(t,n),f=T(r,o),c=f[0]-u[0],h=f[1]-u[1],d=Math.hypot(c,h)||1,m=-h/d,p=c/d;for(let g=0;g<=s;g++){const x=g/s,b=l*4-x;if(b<0)continue;const v=g%4===0,S=v?9:5,_=u[0]+c*x,w=u[1]+h*x;a.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),a.fillStyle=Mt.ink,tn(a,[_-m*S+1,w-p*S+1],[_+m*S+1,w+p*S+1],v?4:3),a.fillStyle=v?Mt.gold:_r[(g+(M.T*10|0))%6],tn(a,[_-m*S,w-p*S],[_+m*S,w+p*S],v?3:2)}}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,l){const[u,f]=T(r,o,.5),c=20+l*16;a.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*Ze,p=d%3===0?7:3;a.fillStyle=d%3===0?Mt.gold:Mt.face,tn(a,[u+Math.cos(m)*c,f+Math.sin(m)*c*.8],[u+Math.cos(m)*(c-p),f+Math.sin(m)*(c-p)*.8],2)}const h=-Math.PI/2-l*Ze*1.5;a.fillStyle=Mt.face,tn(a,[u,f],[u+Math.cos(h)*(c-8),f+Math.sin(h)*(c-8)*.8],3),a.fillStyle=Mt.gold,a.fillRect(St(u)-2,St(f)-2,5,5)}});for(let a=0;a<14;a++){const l=a/14*Ze;z(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,y(.5,1.5),.45,_r[a%6],3,2,!0,.9)}};Z.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,s=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],a=(l,u,f=.45)=>T(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);A({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let c=s.length-1;c>=0;c--){const h=s[c],d=f-h.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=h.al;for(let g=-1,x=0;g<=p;g+=.06,x++){const b=Math.max(0,1-(p-g)/.7),v=St(3+6*b*h.sc),[S,_]=a(g,i*h.sc);l.fillStyle=Mt.ink,l.fillRect(St(S-v/2)+1,St(_-v/2)+1,v,v),l.fillStyle=c===0?x%2?Mt.gold:Mt.face:_r[(c*2+x)%6],l.fillRect(St(S-v/2),St(_-v/2),v,v)}if(c===0){l.fillStyle=Mt.gold;for(let g=-1;g<=p;g+=.2){const x=a(g,i*1.06),b=a(g,i*1.16);tn(l,x,b,2)}}}}if(f>.28){const c=(f-.28)/.27,[h,d]=a(-1,i);l.globalAlpha=1-c;for(let m=0;m<16;m++){const p=m*.6-c*4,g=2+m*1.1;l.fillStyle=_r[m%6],l.fillRect(St(h+Math.cos(p)*g)-1,St(d+Math.sin(p)*g*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=y(-1,1),f=i*y(.3,1.1),c=r+u*o;z(t+Math.cos(c)*f,n+Math.sin(c)*f,y(.2,.9),y(-.15,.15),y(-.15,.15),y(0,.2),y(.8,1.3),l%3?Mt.sand:Mt.time,2,.15,!0,.99)}tt(ud(e)?3:1)};Z.camaleon_E=e=>{const t=e.uid,n=e.dur||4;A({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(a,l){const u=ht(t),[f,c]=T(u?u.x:e.x,u?u.y:e.y,.5);a.globalAlpha=1-l;for(let h=0;h<8;h++){const d=h/8*Ze+.2,m=12+l*30;a.fillStyle=_r[h%6],tn(a,[f+Math.cos(d)*m,c+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),c+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const s=[5,9,11,12,12,11,10,9,7,5];A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(a,l,u){const f=ht(t);if(!f||f.dead){u.t=u.dur+1;return}if(M.T-o>.06){const h=r[r.length-1];(!h||Math.hypot(f.x-h.x,f.y-h.y)>.1)&&(r.push({x:f.x,y:f.y,t:M.T,c:i++}),r.length>8&&r.shift()),o=M.T}const c=l>.92?(1-l)/.08:1;for(const h of r){const d=1-(M.T-h.t)/.4;if(d<=0)continue;const[m,p]=T(h.x,h.y);a.globalAlpha=d*.65*c,a.fillStyle=_r[h.c%6];for(let g=0;g<s.length;g++)a.fillRect(St(m-s[g]),St(p-8-g*6),s[g]*2,3)}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(a,l,u){const f=ht(t);if(!f||f.dead){u.t=u.dur+1;return}const[c,h]=T(f.x,f.y,1.05),d=c+24,m=h+Math.sin(M.T*5)*2;a.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),a.fillStyle=Mt.brassD,Ru(a,d,m,9,9,1),a.fillStyle=Mt.brass,a.fillRect(St(d)-2,St(m)-13,5,4),a.fillStyle=Mt.face,Ru(a,d,m,7,7,1),a.fillStyle=Mt.ink,a.fillRect(St(d)-1,St(m)-7,2,2),a.fillRect(St(d)+5,St(m),2,2),a.fillRect(St(d)-1,St(m)+5,2,2),a.fillRect(St(d)-7,St(m),2,2);const p=M.T*14;a.fillStyle="#e03a4a",tn(a,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function Jg(e,t,n,r){t=St(t),n=St(n),e.fillStyle=Mt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=Mt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=St(6-o*.5),s=St(1+o*.5);e.fillStyle=Mt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-s-1,n+1+o,1,1),e.fillRect(t+s+1,n+1+o,1,1),e.fillStyle=Mt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-s,n+1+o,s*2+1,1)}r>.02&&r<.98&&(e.fillStyle=Mt.sand,e.fillRect(t,n-1,1,12))}Z.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=Array.from({length:26},(u,f)=>{const c=Math.random()*Ze,h=Math.sqrt(Math.random())*r*.85,d=Math.sqrt(Math.max(0,r*r-h*h))*.85;return{x:t+Math.cos(c)*h,y:n+Math.sin(c)*h,z:y(.15,Math.max(.2,d)),ph:Math.random()*Ze,s:f%4===0?4:2,col:[Mt.glassL,Mt.gold,Mt.time,Mt.teal][f%4]}}),s=Array.from({length:22},()=>{const u=Math.random()*Ze,f=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(u)*f,y:n+Math.sin(u)*f,z:y(.2,1.4)}}),a=u=>Zg(u/.3),l=u=>Math.max(0,Math.min(1,(o-u)/.25));A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=a(c.t),[m,p]=T(t,n),g=Wc(r)*d,x=c.t;u.globalAlpha=.28*h,u.fillStyle=Mt.night,Ru(u,m,p,g,g*.5,3),u.globalAlpha=.95*h,u.fillStyle=Mt.gold,Oi(u,m,p,g,96,3),u.fillStyle=Mt.brass,Oi(u,m,p,g*.94,72,2),u.fillStyle=Mt.face,Oi(u,m,p,g*.87,60,2);for(let P=0;P<12;P++){const R=P/12*Ze-Math.PI/2,I=P%3===0,O=[m+Math.cos(R)*g*.66,p+Math.sin(R)*g*.33],k=[m+Math.cos(R)*g*.8,p+Math.sin(R)*g*.4];u.fillStyle=Mt.ink,tn(u,[O[0]+1,O[1]+1],[k[0]+1,k[1]+1],I?6:4),u.fillStyle=I?Mt.gold:Mt.face,tn(u,O,k,I?5:3)}for(let P=0;P<36;P++){const R=P/36*Ze-x*.6,I=g*(P%2?.5:.55);u.fillStyle=P%2?Mt.brassD:Mt.brass,u.fillRect(St(m+Math.cos(R)*I)-2,St(p+Math.sin(R)*I*.5)-1,5,3)}const b=-Math.PI/2-x*Ze/1.5,v=-Math.PI/2-x*Ze/12,S=[m+Math.cos(b)*g*.74,p+Math.sin(b)*g*.37],_=[m+Math.cos(v)*g*.45,p+Math.sin(v)*g*.225];u.fillStyle=Mt.ink,tn(u,[m+1,p+1],[S[0]+1,S[1]+1],6),tn(u,[m+1,p+1],[_[0]+1,_[1]+1],8),u.fillStyle=Mt.face,tn(u,[m,p],S,4),u.fillStyle=Mt.gold,tn(u,[m,p],_,6),u.fillStyle="#e03a4a",u.fillRect(St(m)-4,St(p)-3,8,6),u.fillStyle=Mt.gold,u.fillRect(St(m)-2,St(p)-2,4,4);const w=x%1;w<.3&&(u.globalAlpha=(1-w/.3)*h,u.fillStyle=Mt.glassL,Oi(u,m,p,g*(.87+w*.4),48,3))}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(u,f,c){const h=l(c.t),d=a(c.t),m=r*d,p=M.T,g=(v,S,_,w,P,R,I)=>{const[O,k]=T(v,S,_);u.globalAlpha=h*(P?I:I*.35),u.fillStyle=R,u.fillRect(St(O)-(w>>1),St(k)-(w>>1),w,w)};for(const v of[0,.42,.85,1.25]){const S=m*Math.cos(v),_=m*Math.sin(v),w=v>1?22:48;for(let P=0;P<w;P++){const R=P/w*Ze+(v?p*.08:0);g(t+Math.cos(R)*S,n+Math.sin(R)*S,_,v?2:3,Math.cos(R)+Math.sin(R)>0,v?Mt.glass:Mt.time,v?.5:.9)}}for(let v=0;v<10;v++){const S=v/10*Ze-p*.35,_=Math.cos(S)+Math.sin(S)>0;for(let w=1;w<10;w++){const P=w/10*Math.PI/2;g(t+Math.cos(S)*m*Math.cos(P),n+Math.sin(S)*m*Math.cos(P),m*Math.sin(P),2,_,Mt.glass,.4)}}for(let v=0;v<7;v++){const S=.6*Math.PI+v*.03,_=.5+v*.06;g(t+Math.cos(S)*m*Math.cos(_),n+Math.sin(S)*m*Math.cos(_),m*Math.sin(_),3,!0,Mt.glassL,.8)}for(const v of i){const[S,_]=T(v.x,v.y,v.z*d),w=.5+.5*Math.sin(p*3+v.ph);u.globalAlpha=h*(.35+.65*w),u.fillStyle=v.col,Qg(u,S,_,v.s+(w>.8?1:0))}u.fillStyle=Mt.sand;for(const v of s){const[S,_]=T(v.x,v.y,v.z*d);u.globalAlpha=h*.8,u.fillRect(St(S),St(_),1,1)}const[x,b]=T(t,n,m+.3);if(u.globalAlpha=h,Jg(u,x,b,Math.min(1,c.t/o)),c.t<.3){const v=c.t/.3,[S,_]=T(t,n);u.globalAlpha=1-v,u.fillStyle=Mt.glassL,Oi(u,S,_,Wc(r)*(.3+v*.9),56,4)}if(f>.93&&!c.shatter){c.shatter=!0;for(let v=0;v<36;v++){const S=Math.random()*Ze,_=Math.random()*1.3,w=t+Math.cos(S)*r*Math.cos(_),P=n+Math.sin(S)*r*Math.cos(_);z(w,P,r*Math.sin(_),Math.cos(S)*y(.8,2),Math.sin(S)*y(.8,2),y(0,1.5),y(.5,.9),v%3?Mt.glass:Mt.glassL,v%4?2:3,9,!0,.96)}}}}),tt(ud(e)?6:3)};Te.camaleon=e=>{const t=e.x,n=e.y,r=y(-2.6,-.6),o=Math.random()*6|0;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.5),u=Math.min(1,s*6);i.globalAlpha=s<.5?1:(1-s)*2;const f=r-(1-u)*1.5,c=r+2.2-(1-u)*1.2;i.fillStyle=Mt.ink,tn(i,[a+1,l+1],[a+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=Mt.face,tn(i,[a,l],[a+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=_r[o],tn(i,[a,l],[a+Math.cos(c)*12,l+Math.sin(c)*12],4),i.fillStyle=Mt.gold;for(let h=0;h<4;h++){const d=h/4*Ze+.4,m=14+s*10;i.fillRect(St(a+Math.cos(d)*m)-1,St(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)z(t,n,.5,y(-1.3,1.3),y(-1.3,1.3),y(.8,2),.3,_r[(o+i)%6],2,6,!0)};let he=0,de=0;function An(e,t,n=0){he=(e-t)*N.HW+N.OX,de=(e+t)*N.HH-n*N.ZK}function vn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const fd=e=>e<0?0:e>1?1:e,Se=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],tx="#3a2420",kf="#2a1410",Df=e=>e>=5?tx:Se[e<0?0:e|0];function Ia(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let s=0;s<i;s++){const a=(s+.5)/i*2-1,l=r*Math.sqrt(1-a*a);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+s*3),Math.max(1,Math.round(l)),3)}}Z.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,s=e.angle||.85,a=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let h=0;h<l;h++){let d=a+(h/(l-1)-.5)*s*1.5;const m=i*y(.7,1);for(let p=0;p<=u;p++){const g=.35+(m-.35)*p/u;d+=y(-.13,.13);const x=(h*(u+1)+p)*2;f[x]=t+Math.cos(d)*g,f[x+1]=n+Math.sin(d)*g}}const c=(h,d,m)=>{const p=fd(d/.25)*u;for(let g=0;g<l;g++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),v=(g*(u+1)+x)*2;An(f[v],f[v+1]);const S=he,_=de;An(f[v+2],f[v+3]);const w=S+(he-S)*b,P=_+(de-_)*b,R=Math.max(1,Math.round(Math.hypot(w-S,P-_)/3)),I=m*(1-x/u*.5);for(let O=0;O<=R;O++)vn(h,S+(w-S)*O/R,_+(P-_)*O/R,I)}};A({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(h,d){h.globalAlpha=d<.6?.85:(1-d)/.4*.85,h.fillStyle=kf,c(h,d*1.8,6)}}),A({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(h,d){const m=d*1.4;h.globalAlpha=1-d*d,h.fillStyle=Df(m/.3),c(h,m,3)}}),A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(h,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const g=.4+(i-.4)*p,x=s*(.45+.55*p),b=5+Math.round(g*3);h.globalAlpha=1-p,h.fillStyle=Se[Math.min(3,m+(p*2|0))];for(let v=0;v<=b;v++){const S=a+(v/b-.5)*2*x,_=g*(.9+.1*Math.sin(v*2.3+m*1.7));An(t+Math.cos(S)*_,n+Math.sin(S)*_,.35+.12*Math.sin(v*1.3+d*18)),vn(h,he,de,8-m-p*4)}}}});for(let h=0;h<32;h++){const d=a+y(-s,s)*.9,m=y(.3,1)*i*2.4;z(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,y(1.2,3),y(.7,1.05),Se[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let h=0;h<14;h++){const d=a+y(-s,s),m=y(.6,1)*i*3.2;z(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,y(.4,1.4),.35,Se[0],2,1,!0,.98)}tt(3)};const ex=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],Pu=[],cd=[],hd=[];ex.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(Pu.push(n-2),cd.push(t),hd.push(r))}});const dd=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function nx(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":Se[0]:dd[i];for(let s=0;s<Pu.length;s++)hd[s]===i&&e.fillRect(Math.round(t+Pu[s]*r),Math.round(n+cd[s]*r),r,r)}}Z.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,s)=>{for(let a=0;a<14;a++)z(i+y(-.3,.3),s+y(-.3,.3),y(.2,.8),y(-1.8,1.8),y(-1.8,1.8),y(1.5,3),y(.5,.8),dd[2+(a&1)],4,9,!1,.95)};A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,s,a){const l=ht(a.uid),u=s*t;if(!l||l.dead||M.mode!=="guest"&&u>.15&&!(l.shield>0)||s>.97){a.broke||(a.broke=!0,o(a.lx,a.ly),a.dur=a.t);return}a.lx=l.x,a.ly=l.y;const c=l.scale||1,h=c>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),v=Math.sin(b)>0;if(d===0===v)continue;const S=m*.035,_=fd((u-S)/.08);if(_<=0)continue;const w=(p?22:30)*c,P=(p?8:11)*c;An(l.x,l.y,p?.62:.22),i.globalAlpha=v?1:.4,nx(i,he+Math.cos(b)*w,de+Math.sin(b)*P-10*(1-_)-6*c,h,u-S<.12)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,s){An(e.x,e.y,.55);const a=6+s*26;i.globalAlpha=1-s,i.fillStyle=Se[1];for(let l=2;l<a;l+=3)vn(i,he+l,de+l*.7,4),vn(i,he-l,de+l*.7,4),vn(i,he+l,de-l*.7,4),vn(i,he-l,de-l*.7,4);i.fillStyle=Se[0],vn(i,he,de,8*(1-s)+2)}});for(let i=0;i<10;i++){const s=i/10*6.28;z(e.x+Math.cos(s)*.4,e.y+Math.sin(s)*.4,.05,0,0,y(.6,1.2),y(.5,.8),Se[1+i%3],2,-1,!0,.9)}};Z.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),s=o-t,a=i-n,l=Math.hypot(s,a)||.01,u=s/l,f=a/l,c=Math.min(16,Math.max(4,Math.round(l/.28))),h=new Float32Array(c*4);for(let m=0;m<c;m++){const p=(m+.5)/c,g=y(-.16,.16);h[m*4]=t+s*p-f*g,h[m*4+1]=n+a*p+u*g,h[m*4+2]=y(18,30),h[m*4+3]=p*r}const d=r+1.9;A({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const g=p*d;for(let x=0;x<c;x++){const b=g-h[x*4+3];if(b<0)continue;const v=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(v<=0)continue;An(h[x*4],h[x*4+1]);const S=h[x*4+2];m.globalAlpha=v*.8,m.fillStyle=kf,Ia(m,he,de+1,S+6);const _=b/.3|0;m.globalAlpha=v,m.fillStyle=Df(_),Ia(m,he,de,S*(_<5?.8:.6)),_<4&&J(x*7+(g*12|0))>.72&&(m.fillStyle=Se[0],m.fillRect(Math.round(he+(J(x*3+(g*12|0))-.5)*S*.5),Math.round(de-2),2,2))}m.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,g){const x=ht(g.uid),b=x?x.x:o,v=x?x.y:i;An(b,v,.4);const S=he,_=de;An(b+u,v+f,.4);let w=he-S,P=de-_;const R=Math.hypot(w,P)||1;w/=R,P/=R;const I=1-p*.6;for(let O=0;O<9;O++){const k=(10+O*5*(.8+Math.random()*.4))*I;m.globalAlpha=1-O/10,m.fillStyle=Se[Math.min(4,O>>1)],vn(m,S-w*k+(Math.random()-.5)*3,_-P*k+(Math.random()-.5)*3,(10-O)*I)}if(g.n<22&&p<.9){for(let O=0;O<2;O++){const k=y(-2.5,2.5);z(b,v,.35,-u*2-f*k,-f*2+u*k,y(.5,1.6),.5,Se[1+(Math.random()*3|0)],3,4,!0)}g.n+=2}if(!g.end&&p>.85){g.end=!0;for(let O=0;O<8;O++){const k=O/8*6.28;z(b,v,.1,Math.cos(k)*2.5+u,Math.sin(k)*2.5+f,.4,.6,O&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;z(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}tt(4)};const oa=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],ia=[],md=[],pd=[];oa.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,s)=>s<0||s>=oa.length||i<0||i>=e.length||oa[s][i]===".";ia.push(n-9),md.push(t),pd.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const rx=["#ff7a20","#ffd84a","#fffbe0"];Z.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,s=Math.random()*6.28,a=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=s+u/i*6.28;a[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const c=f*2.6,h=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=c-d*.05;m<0||(An(a[d],l[d]),u.globalAlpha=h*.85,u.fillStyle=kf,Ia(u,he,de+1,46),u.globalAlpha=h,u.fillStyle=Df(m/.45),Ia(u,he,de,26))}u.globalAlpha=1}}),A({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const c=r*(1-(1-f)*(1-f)),h=36;u.globalAlpha=1-f;for(let d=0;d<h;d++){const m=d/h*6.28;An(t+Math.cos(m)*c,n+Math.sin(m)*c),u.fillStyle=Se[d&1],vn(u,he,de,7*(1-f)+2)}}}),A({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,c){const h=f*1.15;for(let d=0;d<i;d++){const m=h-d*.05;if(m<0)continue;if(!(c.fired&1<<d)){c.fired|=1<<d;for(let S=0;S<5;S++)z(a[d],l[d],.3,y(-.8,.8)+(a[d]-t)*.4,y(-.8,.8)+(l[d]-n)*.4,y(3,5),y(.6,.9),Se[S%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const g=95*p;An(a[d],l[d]);const x=he,b=de;u.globalAlpha=Math.min(1,p*1.5);const v=h*24|0;for(let S=0;S<g;S+=4){const _=S/g,w=16*(1-_*.75)+(J(d*31+S+v)-.5)*4,P=(J(d*17+S*3+v)-.5)*7*_;if(u.fillStyle=_<.25?Se[1]:_<.6?Se[2]:Se[3],u.fillRect(Math.round(x+P-w/2),Math.round(b-S-4),Math.round(w),4),_<.7){u.fillStyle=Se[0];const R=w*.4;u.fillRect(Math.round(x+P-R/2),Math.round(b-S-4),Math.max(2,Math.round(R)),4)}}}}}),A({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const c=f*1.2,h=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,An(t,n,h);const m=he,p=de-oa.length*d*.5;for(let g=0;g<3;g++){u.fillStyle=rx[g];for(let x=0;x<ia.length;x++){if(pd[x]!==g)continue;const b=Math.abs(ia[x]),v=b>=4?Math.round(Math.sin(c*14)*(b-3)*.45):0;u.fillRect(Math.round(m+ia[x]*d-d/2),Math.round(p+(md[x]+v)*d),d,d)}}}}),tt(9)};Te.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)z(t,n,.45,y(-1.3,1.3),y(-1.3,1.3),y(1.6,3.2),y(.3,.5),o<3?Se[0]:Se[1],2,10,!0,.97);z(t,n,.45,y(-.5,.5),y(-.5,.5),1,.45,Se[2],3,8,!0,.95),A({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){An(t,n,.45);const s=4+i*(r?16:11),a=Math.max(2,Math.round(s/3));o.globalAlpha=1-i,o.fillStyle=i<.4?Se[1]:Se[2];for(let l=0;l<a;l++){const u=l/a,f=s*(1-u),c=s*u*.7;vn(o,he+f,de+c,3),vn(o,he-c/.7,de+f*.7,3),vn(o,he-f,de-c,3),vn(o,he+c/.7,de-f*.7,3)}i<.3&&(o.fillStyle=Se[0],vn(o,he,de,6))}})};const Ye="#fff2d6",Cn="#e2b878",vi="#9a6232",_o="#4e2e16",Ms="#e8643a",ms="#ffcc66",Xf="#a07a48",pn=Math.round,Dr=Math.PI*2;function Oe(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(pn(t),pn(n),r,o)}function Jn(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(pn(t+(r-t)*l/a-i/2),pn(n+(o-n)*l/a-i/2),i,i)}function bi(e,t,n,r,o,i=Ms){const s=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let a=0;a<=s;a++){const l=a/s,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?vi:l>.82?i:Ye,e.fillRect(pn(t+(r-t)*l-u/2),pn(n+(o-n)*l-u/2),u,u)}}function Dl(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=pn(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(pn(t-s),pn(n+i),s*2,2)}}function yd(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const gd=e=>{const t=ht(e);return t&&!t.dead&&!Ae(t)?t:null},ox=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},ix=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Ce.erizo_A=(e,t,n,r,o)=>{e.translate(pn(n),pn(r)),e.rotate(o),Oe(e,-15,-2,16,4,_o),Oe(e,-14,-1,14,2,Cn),Oe(e,-9,-1,3,2,Ye),Oe(e,-4,-1,3,2,Ye),Oe(e,0,-2,3,4,_o),Oe(e,3,-1,3,2,Ms),Oe(e,6,0,2,1,ms),Oe(e,-17,-4,5,2,Ye),Oe(e,-17,2,5,2,Ye),Math.random()<.3&&z(t.x,t.y,t.z||.45,0,0,-.3,.25,Cn,2,0,!1)};Te.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:y(0,Dr),l:y(8,12)}));A({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=T(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const s of t)bi(n,o+Math.cos(s.a)*s.l,i+Math.sin(s.a)*s.l*.8,o,i)}});for(let n=0;n<5;n++)z(e.x,e.y,.45,y(-2,2),y(-2,2),y(.5,2),.3,n%2?Cn:Ye,2,6,!1)};Ce.erizo_Q=(e,t,n,r,o,i)=>{const a=t.z||.45;e.translate(pn(n),pn(r)),e.rotate(o),Oe(e,-31,-3,32,6,_o);for(let u=0;u<30;u+=6)Oe(e,-30+u,-2,3,4,Ye),Oe(e,-30+u+3,-2,3,4,vi);Oe(e,0,-3,4,6,_o),Oe(e,4,-2,4,4,Ms),Oe(e,8,-1,3,2,ms);for(let u=0;u<3;u++)Oe(e,-36+u*3,-6+u,4,2,Ye),Oe(e,-36+u*3,4-u,4,2,Ye);dt(!0);const l=Ot();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=ms;for(let u=0;u<5;u++)l.fillRect(-6-u*6,pn(Math.sin(i*38+u*1.3)*5)-1,2,2);dt(!1),Math.random()<.5&&z(t.x,t.y,a,y(-.4,.4),y(-.4,.4),.3,.35,Math.random()<.5?Ye:Cn,2,3,!1)};Z.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=yd(t,n),i=-o,s=r;A({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,c]=T(e.x+t*.35,e.y+n*.35,.45),h=u*.32,d=-9*Math.cos(h*55)*Math.exp(-h*14),m=f+r*d,p=c+o*d,g=f+i*15-r*5,x=c+s*15-o*5,b=f-i*15-r*5,v=c-s*15-o*5;l.globalAlpha=1-u,Jn(l,f+r*3,c+o*3,g,x,3,vi),Jn(l,f+r*3,c+o*3,b,v,3,vi),Jn(l,g,x,m,p,2,Ye),Jn(l,b,v,m,p,2,Ye)}}),A({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,c]=T(e.x+t*.5,e.y+n*.5,.45),h=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),g=r*m-o*p,x=r*p+o*m,b=d?h*.55:h;Jn(l,f,c,f+g*b,c+x*b,3,ms),Jn(l,f,c,f+g*b*.5,c+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)z(e.x-t*.2,e.y-n*.2,.4,-t*y(1,2.5)+y(-.5,.5),-n*y(1,2.5)+y(-.5,.5),y(.3,1),.45,l%2?Cn:Xf,3,2,!1,.9);const a=Math.atan2(n,t);for(let l=0;l<7;l++){const u=a+y(-.25,.25),f=y(5,9);z(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,y(0,.6),.22,l%2?ms:Ye,2,0,!0,.86)}tt(1.5)};Z.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,s,a)=>{const l=gd(e.uid);if(!l)return;const u=s*a.dur,f=u<.2?ix(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=T(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*Dr+.17,p=Math.sin(m);if(p>=0!==o)continue;const g=u<t?Math.sin(M.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=c+Math.cos(m)*16,v=h+p*12,S=b+Math.cos(m)*x+g,_=v+p*x*.75-x*.3;bi(i,b,v,S,_,(M.T*7+d*.37)%1<.12?"#ffffff":Ms)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),A({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const s=.35+i*.75;o.globalAlpha=1-i;for(let a=0;a<20;a++){const l=a/20*Dr,[u,f]=T(e.x+Math.cos(l)*s,e.y+Math.sin(l)*s),[c,h]=T(e.x+Math.cos(l)*(s+.22),e.y+Math.sin(l)*(s+.22));Jn(o,u,f,c,h,2,a%2?Cn:vi)}}});for(let o=0;o<14;o++){const i=o/14*Dr,s=y(2,3.5);z(e.x,e.y,.45,Math.cos(i)*s,Math.sin(i)*s,y(1.5,3),.5,o%3?Ye:Cn,2,8,!1,.92)}tt(2)};Z.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,a=-i/s,l=o/s,[u,f]=yd(o,i),c=u>=0?1:-1;A({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,x/r);let v=e.x+o*b,S=e.y+i*b;const _=ht(e.uid);if(_){if(_.dead||Ae(_))return;v=_.x,S=_.y}const[w,P]=T(v,S,.32),R=16,I=x*36*c;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let O=0;O<3;O++){const k=(O-1)*9;Jn(m,w-u*(R+4)-f*k,P-f*(R+4)+u*k,w-u*(R+18+O*5)-f*k,P-f*(R+18+O*5)+u*k,2,Cn)}Dl(m,w,P,R+1,_o),Dl(m,w,P,R-1,vi),Dl(m,w-4,P-4,R-9,Cn);for(let O=0;O<10;O++){const k=I+O*Dr/10,G=Math.cos(k),$=Math.sin(k);bi(m,w+G*(R-3),P+$*(R-3),w+G*(R+10),P+$*(R+10))}}});const h=Math.max(4,Math.min(10,pn(s*2.2))),d=Array.from({length:h},(m,p)=>({k:(p+.5)/h,o:y(-.28,.28),lean:y(-6,6),h:y(9,14)}));A({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,g){const x=p*g.dur,b=Math.min(1,(g.dur-x)/.5);for(const v of d){if(x<v.k*r)continue;const S=Math.min(1,(x-v.k*r)/.08),[_,w]=T(e.x+o*v.k+a*v.o,e.y+i*v.k+l*v.o);m.globalAlpha=b*.45,Oe(m,_-4,w-1,8,3,_o),m.globalAlpha=b,bi(m,_+v.lean*S,w-v.h*S,_,w)}}});for(let m=0;m<12;m++){const p=Math.random();z(e.x+o*p+y(-.2,.2),e.y+i*p+y(-.2,.2),.1,y(-.6,.6),y(-.6,.6),y(.5,1.4),y(.4,.7),m%2?Cn:Xf,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;z(e.x,e.y,.35,a*p*y(2,4),l*p*y(2,4),y(1.5,3),.45,Ye,2,8,!1,.92)}tt(2)};Z.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=ox(e),r=n&&n.dur||3,o=.16,i=36,s=Array.from({length:i},(l,u)=>{const f=Math.random()*Dr,c=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(f)*c,y:e.y+Math.sin(f)*c,t0:.12+u/i*(r-.5)+y(0,.08),lean:y(-7,7),h:y(10,15),hit:!1}});A({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur,h=Math.min(1,(f.dur-c)/.5),d=t*(c<.3?1.5-.5*(c/.3):1);l.globalAlpha=.85*h;for(let m=0;m<8;m++){const p=m*Dr/8+c*.4;for(const g of[-.09,.09]){const[x,b]=T(e.x+Math.cos(p+g)*d,e.y+Math.sin(p+g)*d),[v,S]=T(e.x+Math.cos(p)*(d-.35),e.y+Math.sin(p)*(d-.35));Jn(l,x,b,v,S,3,Ms)}}l.globalAlpha=.45*h;for(let m=0;m<48;m++){const p=m/48*Dr-c*.2,[g,x]=T(e.x+Math.cos(p)*t,e.y+Math.sin(p)*t);Oe(l,g-1,x-1,2,2,Cn)}for(const m of s){if(c<m.t0+o)continue;const[p,g]=T(m.x,m.y);l.globalAlpha=.4*h,Oe(l,p-4,g-1,8,3,_o),l.globalAlpha=h,bi(l,p+m.lean,g-m.h,p,g)}}}),A({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(l,u,f){const c=u*f.dur;for(const h of s){const d=(c-h.t0)/o;if(d<0)continue;if(d>=1){h.hit||(h.hit=!0,z(h.x,h.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,Math.random()<.5?Cn:Xf,2,7,!1));continue}const[m,p]=T(h.x,h.y,3.6*(1-d)),g=h.lean*1.4;l.globalAlpha=.35,Jn(l,m+g*2.4,p-52,m+g,p-22,1,Ye),l.globalAlpha=1,bi(l,m+g,p-22,m,p)}}});const a=gd(e.uid);if(a)for(let l=0;l<10;l++)z(a.x,a.y,.6,y(-.4,.4),y(-.4,.4),y(7,10),.45,l%2?Ye:Cn,2,0,!1,1);tt(2)};let fe=0,ce=0;function ln(e,t,n=0){fe=(e-t)*N.HW+N.OX,ce=(e+t)*N.HH-n*N.ZK}function Wn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Gf=e=>e<0?0:e>1?1:e,xd=e=>1-(1-e)*(1-e),Qt=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],rn=["#ffe0f4","#ff9ad8","#e060b0"],Yr=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],Ve=["#ffffff","#fff2a0","#ffd24a"];function Nf(e,t,n,r){const o=[],i=[],s=[],a=[],l=e.length,u=(f,c)=>c<0||c>=l||f<0||f>=e[c].length||t.indexOf(e[c][f])<0;return e.forEach((f,c)=>{for(let h=0;h<f.length;h++){const d=t.indexOf(f[h]);d<0||(o.push(h-n),i.push(c-r),s.push(d),a.push(u(h-1,c)||u(h+1,c)||u(h,c-1)||u(h,c+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(s),B:Uint8Array.from(a),n:o.length,h:l}}const Xl=Nf(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function vd(e,t,n,r){for(let o=0;o<Xl.n;o++)e.fillRect(Math.round(t+Xl.X[o]*r-r/2),Math.round(n+Xl.Y[o]*r-r/2),r,r)}function so(e,t,n,r){Wn(e,t,n,3);for(let o=2;o<=r;o+=2)Wn(e,t+o,n+o,2),Wn(e,t-o,n+o,2),Wn(e,t+o,n-o,2),Wn(e,t-o,n-o,2)}function Iu(e,t,n,r,o,i,s){for(let a=0;a<4;a++){const l=o+a*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,c=Math.sin(l)*r*i,h=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(s+1)));for(let p=0;p<m;p++){const g=p/m;Wn(e,t+f+(h-f)*g,n+c+(d-c)*g,s)}}}function Hc(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const Fi=new Map;function bd(e,t,n=!1){if(e.id==null)return;let r=Fi.get(e.id);if(!r){Fi.size>200&&Fi.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},Fi.set(e.id,r);const o=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,s,a){if(a.fin)return;const l=M.game;if(l){for(const u of l.projs)if(u.id===o)return;a.fin=!0,a.dur=a.t,Fi.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}Z.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){ln(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=Qt[1],Iu(r,fe,ce,i,o*Math.PI,.75,3),r.fillStyle=rn[1],Iu(r,fe,ce,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=Qt[0],Wn(r,fe,ce,4)}});for(let r=0;r<6;r++)z(t,n,.45,y(-1,1),y(-1,1),y(.3,1),.4,r&1?rn[1]:Qt[1],2,0,!0)};Ce.gato_Q=(e,t,n,r,o,i)=>{bd(t,sx);const s=-Math.cos(o),a=-Math.sin(o),l=-a,u=s;for(let h=1;h<16;h++){const d=8+h*3.2,m=Math.sin(h*.7-i*22)*(2+h*.35);e.globalAlpha=1-h/16,e.fillStyle=h&1?rn[1]:rn[2],e.fillRect(Math.round(n+s*d+l*m),Math.round(r+a*d+u*m),2,2)}e.globalAlpha=1,dt(!0);const f=Ot();f.fillStyle=Qt[3],f.globalAlpha=.16,Hc(f,n,r,20),f.globalAlpha=.22,Hc(f,n,r,13),f.globalAlpha=1,dt(!1);const c=i*14;for(let h=-3;h<3;h++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(h+.5)*(h+.5);if(m>9)continue;let p;m>6?p=Qt[4]:d===-2&&h===-2?p=Qt[0]:p=((d*.8+h+c)%4+4)%4<1.3?Qt[1]:Qt[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+h*3),3,3)}};function sx(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)z(t,n,.45,y(-.6,.6),y(-.6,.6),y(0,.6),.4,o&1?rn[1]:Qt[2],2,1,!0);return}const r=Math.random()*6.28;A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){ln(t,n,.45);const s=Math.round(14*Gf(i/.4));o.globalAlpha=1-i*i;for(let a=0;a<5;a++){const l=r+a/5*6.28;for(let u=0;u<s;u++){const f=4+u*3,c=l+u*.3;o.fillStyle=u+a&1?rn[1]:Qt[1],o.fillRect(Math.round(fe+Math.cos(c)*f),Math.round(ce+Math.sin(c)*f*.7),2,2)}}i<.25&&(o.fillStyle=Qt[0],Wn(o,fe,ce,10*(1-i*3)))}});for(let o=0;o<10;o++)z(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(.5,1.5),y(.4,.6),o&1?rn[0]:Qt[1],2,2,!0);tt(2)}const dr=Nf(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);Z.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,c)=>{for(let h=0;h<l;h++){const d=c+h/l*6.28,m=Math.cos(d),p=Math.sin(d),g=Math.atan2(m+p,m-p),x=g+Math.PI/2,b=Math.cos(x),v=Math.sin(x),S=new Float32Array(dr.n*2);for(let _=0;_<dr.n;_++)S[_*2]=dr.X[_]*b-dr.Y[_]*v,S[_*2+1]=dr.X[_]*v+dr.Y[_]*b;o.push({x:t+m*u,y:n+p*u,t:f+h*.014,c:S})}},s=Math.random()*6.28;i(5,r*.38,.03,s),i(9,r*.78,.14,s+.35),A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,c=u>.55?(1-u)/.45:1;for(const h of o){const d=f-h.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,g=Math.max(2,Math.round(p*.6)),x=Math.round(p);ln(h.x,h.y),l.globalAlpha=c*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Yr[3]:b===1?Yr[1]:Yr[0];for(let v=0;v<dr.n;v++){const S=dr.B[v]===1,_=dr.Y[v]<0;(b===0?!S:b===1?S||_:S||!_)||l.fillRect(Math.round(fe+h.c[v*2]*p-x/2),Math.round(ce+h.c[v*2+1]*p*.5-g/2),x,g)}}}l.globalAlpha=1}});const a=Math.random()*6.28;A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*xd(Gf(u*1.8));l.globalAlpha=1-u;for(let c=0;c<6;c++){const h=a+c*Math.PI/3,d=Math.cos(h),m=Math.sin(h);for(let p=.25;p<f;p+=.16)ln(t+d*p,n+m*p),l.fillStyle=p<f*.5?Yr[1]:Yr[2],Wn(l,fe,ce,4-p/r*2);if(f>r*.4){const p=f*.6;for(let g=-1;g<=1;g+=2){const x=h+g*.75;for(let b=.12;b<.45;b+=.12)ln(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=Yr[0],Wn(l,fe,ce,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;z(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,y(.3,1.1),Math.cos(u)*y(.5,2),Math.sin(u)*y(.5,2),y(0,.4),y(.7,1.1),Yr[l%2],2,.5,!0,.95)}tt(4)};const Kr=Nf([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);Z.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;A({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(s,a){ln(t,n);const l=3,u=fe,f=ce-2;for(let c=0;c<3;c++){s.fillStyle=c===0?Qt[3]:c===1?Qt[1]:Ve[1];for(let h=0;h<Kr.n;h++){if((Kr.K[h]===1?2:Kr.B[h]?1:0)!==c)continue;const m=J(h*7.13+i),p=-Kr.Y[h]/(Kr.h-1);m*.6+p*.6+.2<a*1.3||(s.globalAlpha=.85*(1-a*.5),s.fillRect(Math.round(u+Kr.X[h]*l-l/2),Math.round(f+Kr.Y[h]*l-a*18*m),l,l))}}}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(s,a){const l=a*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,c=(l-f*.12)/.3;c<0||c>=1||(ln(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),s.globalAlpha=1-c,s.fillStyle=u&1?rn[1]:Qt[1],so(s,fe,ce,8*(1-c)+2))}}}),A({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(s,a){ln(r,o,1.05);const l=fe,u=ce,f=a<.18?a/.18:a<.55?1:Math.max(0,1-(a-.55)/.12),c=[3,5,7,5,3];if(f>.05)for(let h=-1;h<=1;h+=2){const d=l+h*9;for(let m=0;m<5;m++){const p=c[m]*2,g=Math.max(1,Math.round(2*f));s.fillStyle=m===0||m===4?Ve[2]:Ve[1],s.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,g)}s.fillStyle="#2a1040",s.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}s.globalAlpha=a<.2?a/.2:a>.6?Math.max(0,(1-a)/.4):1,s.fillStyle=rn[1];for(let h=0;h<=8;h++){const d=Math.PI*(.15+.7*h/8);s.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}s.fillStyle=Qt[0],s.fillRect(Math.round(l-6),Math.round(u+9),2,2),s.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let s=0;s<6;s++)z(t,n,.5,y(-.8,.8),y(-.8,.8),y(.5,1.5),.5,Qt[1+s%3],2,0,!0);for(let s=0;s<10;s++){const a=s/10*6.28;z(r,o,.5,Math.cos(a)*2,Math.sin(a)*2,y(.2,1),.45,s&1?rn[1]:Qt[1],2,0,!0,.9)}};const Ds=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],Gl=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],Nl=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0];Z.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*N.HW*Math.SQRT2;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(x,b){const v=b*1.1;ln(t,n);const S=fe,_=ce;x.globalAlpha=b>.85?(1-b)/.15:1;const w=Nl.length/2,P=Gf(v/.45)*w;x.fillStyle=Qt[1];for(let R=0;R<w&&R<P;R++){const I=Nl[R*2],O=Nl[R*2+1],k=Math.min(1,P-R),G=S+Ds[I]*i,$=_+Gl[I]*i*.55,ot=S+Ds[O]*i,vt=_+Gl[O]*i*.55,F=Math.hypot(ot-G,vt-$)*k,E=Math.round(F/6);for(let L=0;L<=E;L++){const D=L*6/(F||1)*k;x.fillRect(Math.round(G+(ot-G)*D),Math.round($+(vt-$)*D),2,2)}}for(let R=0;R<Ds.length;R++)x.fillStyle=R>=9?Ve[2]:Ve[1],so(x,S+Ds[R]*i,_+Gl[R]*i*.55,3+3*(.5+.5*Math.sin(M.T*9+R*1.7)))}});const s=12,a=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s);for(let x=0;x<s;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r*.9;a[x]=t+Math.cos(b)*v,l[x]=n+Math.sin(b)*v,u[x]=.45+x/(s-1)*.55+y(-.03,.03)}const f=.32,c=Math.hypot(40,4.5*N.ZK),h=40/c,d=-352.8/c;A({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(x,b,v){const S=b*1.2;for(let _=0;_<s;_++){const w=S-(u[_]-f);if(!(w<0))if(w<f){const P=w/f;ln(a[_],l[_],4.5*(1-P));const R=fe+(1-P)*40,I=ce;for(let O=-1;O<=1;O++){const k=O*.12,G=h*Math.cos(k)-d*Math.sin(k),$=h*Math.sin(k)+d*Math.cos(k);x.fillStyle=O===0?rn[1]:Qt[1];for(let ot=1;ot<10;ot++)x.globalAlpha=1-ot/10,x.fillRect(Math.round(R+G*ot*3.2+O*3),Math.round(I+$*ot*3.2),2,2)}x.globalAlpha=1,x.fillStyle=Ve[1],x.fillRect(Math.round(R-6),Math.round(I-1),12,2),x.fillRect(Math.round(R-1),Math.round(I-6),2,12),x.fillStyle=Ve[0],x.fillRect(Math.round(R-2),Math.round(I-2),4,4)}else{if(!(v.landed&1<<_)){v.landed|=1<<_;for(let R=0;R<2;R++)z(a[_],l[_],.1,y(-1,1),y(-1,1),y(1,2),.45,R?Ve[1]:rn[1],2,4,!0)}const P=(w-f)/.2;if(P>=1)continue;ln(a[_],l[_]),x.globalAlpha=1-P,x.fillStyle=Ve[1],so(x,fe,ce,2+P*8)}}x.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(x,b,v){if(!v.boom){v.boom=!0,tt(8);for(let R=0;R<28;R++){const I=Math.random()*6.28,O=y(1,3.5);z(t,n,.3,Math.cos(I)*O,Math.sin(I)*O,y(1.5,3.5),y(.5,.8),[Ve[1],Qt[1],rn[1],Qt[0]][R&3],3,5,!0,.95)}}const S=.3+(r-.3)*xd(b),_=b*2;ln(t,n,.2);const w=fe,P=ce;if(b<.35){const R=1-b/.35;x.fillStyle=Qt[1],x.globalAlpha=R*.25,x.fillRect(Math.round(w-70),Math.round(P-35),140,70),x.globalAlpha=R*.4,x.fillRect(Math.round(w-40),Math.round(P-20),80,40),x.fillStyle=Qt[0],x.globalAlpha=R*.7,x.fillRect(Math.round(w-15),Math.round(P-8),30,16)}x.globalAlpha=1-b*b;for(let R=0;R<10;R++){const I=_+R/10*6.28;ln(t+Math.cos(I)*S,n+Math.sin(I)*S,.35+.2*Math.sin(b*6+R)),x.fillStyle=R&1?Ve[2]:Ve[1],vd(x,fe,ce,3),x.fillStyle=Ve[0],x.fillRect(Math.round(fe-1),Math.round(ce-1),2,2)}}});const m=24,p=new Float32Array(m),g=new Float32Array(m);for(let x=0;x<m;x++){const b=Math.random()*6.28,v=Math.sqrt(Math.random())*r;p[x]=t+Math.cos(b)*v,g[x]=n+Math.sin(b)*v}A({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(x,b){const v=M.T*8|0;for(let S=0;S<m;S++){const _=J(S*13+v);_<.25||(ln(p[S],g[S]),x.globalAlpha=(1-b)*_,x.fillStyle=S%3?Qt[1]:Ve[1],x.fillRect(Math.round(fe),Math.round(ce),2,2))}}})};Ce.gato_A=(e,t,n,r,o,i)=>{const s=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);bd(t,ax,s),dt(!0);const a=Ot(),l=Math.cos(o),u=Math.sin(o);for(let h=1;h<=4;h++)a.globalAlpha=.8-h*.17,a.fillStyle=h&1?rn[1]:Qt[1],Wn(a,n-l*h*5,r-u*h*5,4-h*.6);a.globalAlpha=1;const f=s?7:5,c=(i*16|0)&1;if(a.fillStyle=Qt[2],c)for(let h=-f;h<f;h+=2){const d=(f-Math.abs(h+1))*2;a.fillRect(Math.round(n-d/2),Math.round(r+h),Math.max(2,Math.round(d)),2)}else{const h=Math.round(f*1.4);a.fillRect(Math.round(n-h/2),Math.round(r-h/2),h,h)}if(a.fillStyle=rn[0],a.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),s){a.fillStyle=Ve[1];for(let h=0;h<3;h++){const d=i*10+h*2.09;a.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}dt(!1)};function Md(e,t,n){A({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){ln(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=Qt[1],Iu(r,fe,ce,i,Math.PI/4,.75,2),r.fillStyle=rn[1],so(r,fe+i,ce,3),so(r,fe-i,ce,3),so(r,fe,ce+i*.75,3),so(r,fe,ce-i*.75,3),n&&(r.fillStyle=Ve[1],vd(r,fe,ce-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)z(e,t,.45,y(-1,1),y(-1,1),y(.3,1.2),.35,n&&r&1?Ve[1]:Qt[1],2,1,!0)}function ax(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;Md(t,n,e.crit),et.sfx("atk_gato",t,n,e.crit?.9:.6)}Te.gato=e=>Md(e.x,e.y,!!e.big);const Pt=Math.round,ye=Math.PI*2;let wt=0,At=0;function Jt(e,t,n=0){wt=(e-t)*N.HW+N.OX,At=(e+t)*N.HH-n*N.ZK}function en(e,t,n,r,o){e.fillStyle=o,e.fillRect(Pt(t-r/2),Pt(n-r/2),r,r)}function po(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(Pt(t+(r-t)*l/a-i/2),Pt(n+(o-n)*l/a-i/2),i,i)}function ao(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const s=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Pt(t-s/2),Pt(n+i*o),Pt(s),Math.max(1,Pt(2*o)))}}const Xr=e=>e<0?0:e>1?1:e,wr=e=>1-(1-e)*(1-e),H={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},zo=new Float32Array(72),Oo=new Float32Array(72);function Yn(e,t,n,r,o,i,s,a,l,u,f,c,h){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,g=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let S=0;S<=g;S++){const _=S/g,w=S===0||S===g?0:(J(a+S*7.31)-.5)*2*s*Math.sqrt(Math.sin(_*Math.PI));zo[S]=t+d*_+x*w,Oo[S]=n+m*_+b*w}if(f>0)for(let S=0;S<g;S++)po(e,zo[S],Oo[S],zo[S+1],Oo[S+1],f,l);for(let S=0;S<g;S++)po(e,zo[S],Oo[S],zo[S+1],Oo[S+1],c,u);const v=Math.atan2(m,d);for(let S=0;S<h;S++){const _=1+Math.floor(J(a+S*3.7+50)*Math.max(1,g-1));let w=zo[_],P=Oo[_],R=v+(J(a+S*9.1)>.5?1:-1)*(.45+J(a+S*1.3)*.6);for(let I=0;I<3;I++){const O=i*(1-I*.2),k=w+Math.cos(R)*O,G=P+Math.sin(R)*O;po(e,w,P,k,G,Math.max(1,c-1),I?l:u),w=k,P=G,R+=(J(a+S*5+I)-.5)*1.3}}}function za(e,t,n,r,o,i,s,a){let l=t,u=n,f=r;for(let c=0;c<5;c++){f+=(J(o+c)-.5)*.9;const h=i*(1-c*.13),d=l+Math.cos(f)*h,m=u+Math.sin(f)*h*.5;if(po(e,l,u,d,m,2,s),J(o+c*3.3)>.45){const p=f+(J(o+c*7)>.5?.85:-.85);po(e,d,m,d+Math.cos(p)*h*.6,m+Math.sin(p)*h*.3,2,s)}l=d,u=m}a&&en(e,l,u,3,a)}function Oa(e,t,n,r,o){e.fillStyle=H.cloudD,e.fillRect(Pt(t-3*r),Pt(n-r),6*r,2*r),e.fillStyle=o?H.cloudL:H.cloud,e.fillRect(Pt(t-2*r),Pt(n-2*r),4*r,2*r),e.fillStyle=o?H.pale:H.cloudM,e.fillRect(Pt(t-r),Pt(n-2.6*r),2*r,Pt(r*.8))}Z.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;A({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Jt(t,n,.6);const s=wt,a=At,l=M.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=J(r+u+l*3)*ye,c=10+J(r+u*2+l)*14;Yn(o,s,a,s+Math.cos(f)*c,a+Math.sin(f)*c*.7,5,3,r+u*11+l,H.cyan,H.white,0,1,0)}en(o,s,a,Pt(8*(1-i))+2,H.white)}});for(let o=0;o<8;o++)z(t,n,.6,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.25,o&1?H.cyan:H.white,2,3,!0)};const Xs=new Map;Ce.halcon_Q=(e,t,n,r,o,i)=>{let s=t.id!=null?Xs.get(t.id):void 0;t.id!=null&&!s&&(Xs.size>64&&Xs.clear(),s=[t.x,t.y],Xs.set(t.id,s));const a=Math.cos(o),l=Math.sin(o),u=150;let f=n-a*u,c=r-l*u;dt(!0);const h=Ot();if(s){Jt(s[0],s[1],t.z||.45);const p=Math.hypot(n-wt,r-At);if(p<u)f=wt,c=At;else{h.globalAlpha=.4,h.fillStyle=H.blue;const g=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<g;b++){if(J(b*3.1+x)<.35)continue;const v=(u+b*9)/p;h.fillRect(Pt(n+(wt-n)*v),Pt(r+(At-r)*v),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;h.globalAlpha=.16,h.fillStyle=H.blue,ao(h,n,r,18),h.globalAlpha=1,Yn(h,n,r,f,c,11,7,d,H.cyan,H.white,4,2,2);const m=5+((i*30|0)&1)*3;h.fillStyle=H.pale,h.fillRect(Pt(n-m),Pt(r-1),m*2,2),h.fillRect(Pt(n-1),Pt(r-m),2,m*2),h.fillStyle=H.white,h.fillRect(Pt(n-3),Pt(r-3),6,6),dt(!1)};Z.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ye;A({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,s){Jt(t,n),i.globalAlpha=.6*(1-s);for(let a=0;a<6;a++)za(i,wt,At,o+a*ye/6,r+a*13,9,H.scorch)}}),A({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,s){Jt(t,n),i.globalAlpha=(1-s)*(1-s);for(let a=0;a<6;a++)za(i,wt,At,o+a*ye/6,r+a*13,9,H.cyan,H.white)}}),A({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,s){Jt(t,n,.5);const a=M.T*30|0;i.globalAlpha=1-s*s;for(let l=0;l<4;l++){const u=J(r+l*5+a)*ye,f=18+J(r+l+a*2)*16;Yn(i,wt,At-6,wt+Math.cos(u)*f,At+Math.sin(u)*f*.6,6,4,r+a*7+l,H.blue,H.pale,3,1,0)}s<.3&&en(i,wt,At,Pt(22*(1-s/.3))+2,H.white)}});for(let i=0;i<12;i++)z(t,n,.5,y(-2.2,2.2),y(-2.2,2.2),y(1,2.6),y(.25,.45),i%3?H.cyan:H.yel,2,7,!0,.9);tt(2)};const sa=new Map;Z.halcon_W=e=>{if(e.type==="splash"||e.impact){lx(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Jt(t,n);const s=wt,a=At;Jt(r,o);const l=Math.hypot(wt-s,At-a)||1,u=(wt-s)/l,f=(At-a)/l;sa.size>32&&sa.clear(),sa.set(e.uid,[u,f]);for(let c=0;c<8;c++)z(t,n,.7,y(-1,1),y(-1,1),y(1,2.5),y(.6,.9),c%3?H.featherL:H.cream,3,1.2,!1,.9);A({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(c,h){Jt(r,o);const d=wt,m=At,p=64*(1-wr(h))+24,g=h*2.6;c.globalAlpha=.5+.5*h;const x=h>.75&&(M.T*20|0)&1?H.white:H.cyan;for(let b=0;b<4;b++){const v=g+b*ye/4;for(let S=-3;S<=3;S++){const _=v+S*.09;en(c,d+Math.cos(_)*p,m+Math.sin(_)*p*.5,3,x)}for(let S=1;S<=2;S++)en(c,d+Math.cos(v)*(p-S*5),m+Math.sin(v)*(p-S*5)*.5,2,H.white)}en(c,d,m,3,H.white)}}),A({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(c,h){const d=Xr(h*(i+.15)/i),m=-f,p=u;for(let g=0;g<12;g++){const x=d-g*.035;if(x<0)break;Jt(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,v=wt,S=At-b,_=1-g/12;c.globalAlpha=_*(h>.8?(1-h)/.2:1);for(const w of[-1,1]){const P=15+Math.sin(x*30+w)*4,R=Math.cos(x*34*w)*3;en(c,v+m*P*w+R,S+p*P*w-Math.sin(x*34)*3,g<3?3:2,g<4?H.white:H.pale)}g%3===0&&(c.fillStyle=H.cyan,c.fillRect(Pt(v-u*10),Pt(S-f*10),2,2))}}})};function lx(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=sa.get(e.uid)||[0,1];A({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(s,a){Jt(t,n),s.globalAlpha=.55*(1-a);for(let l=0;l<7;l++){const u=l/7*ye+J(o+l)*.5,f=r*N.HW*(.5+J(o+l*3)*.4);po(s,wt,At,wt+Math.cos(u)*f*.6,At+Math.sin(u)*f*.3,2,H.ash),po(s,wt+Math.cos(u)*f*.6,At+Math.sin(u)*f*.3,wt+Math.cos(u+.25)*f,At+Math.sin(u+.25)*f*.5,2,H.ash)}en(s,wt,At,8,H.ash)}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(s,a){const l=M.T*30|0;for(let f=0;f<2;f++){const c=Xr(a*1.4-f*.2);if(c<=0||c>=1)continue;const h=.2+r*1.1*wr(c);s.globalAlpha=1-c;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*ye;Jt(t+Math.cos(m)*h,n+Math.sin(m)*h),en(s,wt,At,f?2:3,f?H.pale:H.white)}}s.globalAlpha=1-a;const u=8;for(let f=0;f<u;f++){const c=f/u*ye+a*.8,h=(f+1)/u*ye+a*.8;Jt(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85);const d=wt,m=At;Jt(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85),Yn(s,d,m-4,wt,At-4,7,4,o+f*9+l,H.blue,H.pale,0,2,0),en(s,d,m-4,4,H.white)}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(s,a){const l=.3+r*1.3*wr(a);s.globalAlpha=1-a;for(let u=0;u<8;u++){const f=u/8*ye+.2;Jt(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const c=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let h=-2;h<=2;h++){const d=c+h*.35,m=9-Math.abs(h);en(s,wt-Math.cos(c)*6+Math.cos(d)*m,At-Math.sin(c)*6+Math.sin(d)*m,h?2:3,h?H.pale:H.white)}}a<.2&&(s.globalAlpha=1-a/.2,Jt(t,n,.2),s.fillStyle=H.white,ao(s,wt+i[0]*6,At+i[1]*6,Pt(30*(1-a)),.5))}});for(let s=0;s<14;s++){const a=Math.random()*ye,l=y(1.5,3.5);z(t,n,.1,Math.cos(a)*l,Math.sin(a)*l,y(.5,1.6),y(.4,.7),s%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let s=0;s<6;s++)z(t,n,.6,y(-1.2,1.2),y(-1.2,1.2),y(1.5,2.5),y(.8,1.1),s&1?H.featherL:H.feather,3,1.5,!1,.92);tt(6)}Z.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;A({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,s,a){const l=ht(a.uid);Jt(l?l.x:n,l?l.y:r,.8);const u=wt,f=At,c=wr(Xr(s*2.2));i.globalAlpha=s>.5?(1-s)/.5:1;for(const h of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+h*(.3+c*(.45+d*.24)),p=16+d*5+c*10;for(let g=6;g<p;g+=3){const x=g>p-6;en(i,u+Math.cos(m)*g*1.25,f+Math.sin(m)*g*.8+g/p*c*9,x?2:3,x?H.white:d&1?H.pale:H.cyan)}}}}),A({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,s){const a=.5+(o-.5)*wr(s);i.globalAlpha=(1-s)*.9;for(let l=0;l<16;l++){const u=l/16*ye+s*1.6;for(let f=0;f<3;f++){const c=u+f*.07;Jt(n+Math.cos(c)*a,r+Math.sin(c)*a),en(i,wt,At,3-f,f?H.pale:H.white)}}}})}for(let n=0;n<5;n++){const r=n/5*ye;z(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,y(.8,1.5),.4,n&1?H.pale:H.white,2,0,!0)}A({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=ht(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const s=i.x-o.lx,a=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=s-a,u=(s+a)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const c=Math.hypot(o.dx,o.dy),h=r*o.dur;n.globalAlpha=Math.min(1,h/.15)*(h>o.dur-.4?(o.dur-h)/.4:1),Jt(i.x,i.y,.45);const d=wt,m=At;if(c>.35){const p=o.dx/c,g=o.dy/c,x=M.T*70%11;for(let S=0;S<3;S++){const _=14+S*11+x,w=d-p*_,P=m-g*_,R=S===0?H.white:S===1?H.pale:H.cyan;for(const I of[-1,1]){const O=Math.cos(I*.75),k=Math.sin(I*.75),G=-(p*O-g*k),$=-(p*k+g*O);for(let ot=0;ot<4;ot++)en(n,w+G*ot*3,P+$*ot*3,2,R)}}const b=-g,v=p;for(const S of[-1,1])for(let _=0;_<6;_++){const w=10+_*5+M.T*90%5;(_+(S>0?1:0))%3!==0&&(n.fillStyle=H.pale,n.fillRect(Pt(d-p*w+b*12*S),Pt(m-g*w+v*12*S),2,1))}}else for(let p=0;p<3;p++){const g=M.T*5+p*ye/3;en(n,d+Math.cos(g)*14,m+14+Math.sin(g)*6,2,p?H.pale:H.white)}}})};const Gs=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],mr=(()=>{const e=[],t=[],n=[],r=Gs.length,o=(i,s)=>s>=0&&s<r&&i>=0&&i<Gs[s].length&&Gs[s][i]!==".";return Gs.forEach((i,s)=>{for(let a=0;a<i.length;a++){const l=i[a];l!=="."&&(e.push(a-12),t.push(s-5),n.push(l==="e"?2:o(a-1,s)&&o(a+1,s)&&o(a,s-1)&&o(a,s+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();Z.halcon_R=e=>{if(e.type==="global_hit"){ux(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,s){Jt(t,n,3);const a=wt,l=At,u=30+60*wr(Xr(s*2)),f=M.T*12|0;i.globalAlpha=Math.min(1,s*5)*(s>.75?(1-s)/.25:1)*.92;for(let c=0;c<9;c++){const h=c/9*ye+s*3.2;Oa(i,a+Math.cos(h)*u,l+Math.sin(h)*u*.38,5+c%3,J(r+c+f)>.8)}Oa(i,a,l,7,J(r+f)>.7)}}),A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,s,a){const l=ht(a.uid),u=l?l.x:t,f=l?l.y:n;Jt(t,n,3);const c=wt,h=At,d=30+60*wr(Xr(s*2)),m=M.T*15|0,p=s>.75?(1-s)/.25:1;if(i.globalAlpha=p,J(r+m*1.7)>.45){const x=J(r+m)*ye,b=x+1.2+J(r+m*3)*2;Yn(i,c+Math.cos(x)*d,h+Math.sin(x)*d*.38,c+Math.cos(b)*d,h+Math.sin(b)*d*.38,9,6,r+m,H.blue,H.pale,3,1,1)}const g=s*o;if(g>.25&&g<.55&&(g*25|0)%3!==2&&(Jt(u,f,1),Yn(i,c,h+8,wt,At,12,10,r+(g*25|0),H.blue,H.white,5,2,2)),g>.3){const x=Xr((g-.3)/.35),b=Pt(2+2*wr(x)),v=(M.T*24|0)%5===0?.5:1;Jt(u,f,2.2+x*.4);const S=wt,_=At;i.globalAlpha=p*v*(.4+.6*x);for(let w=0;w<3;w++){i.fillStyle=w===0?H.indigo:w===1?H.cyan:H.yel;for(let P=0;P<mr.n;P++)mr.K[P]===w&&i.fillRect(Pt(S+mr.X[P]*b-b/2),Pt(_+mr.Y[P]*b-b/2),b,b)}i.fillStyle=H.white;for(let w=0;w<mr.n;w++)mr.K[w]===1&&mr.Y[w]<-2&&i.fillRect(Pt(S+mr.X[w]*b-1),Pt(_+mr.Y[w]*b-1),2,2)}}});for(let i=0;i<24;i++){const s=i/24*ye,a=y(2,3);z(t+Math.cos(s)*a,n+Math.sin(s)*a,y(.2,1.2),-Math.cos(s)*a*1.6,-Math.sin(s)*a*1.6,y(.5,1.2),.6,i%3?H.pale:H.cloudL,2,0,i%3!==0,.97)}tt(5)};function ux(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*ye;et.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],s=[.1,.05,.05],a=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+s[u])return u+1;return 0};A({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,c=wr(Xr(f/.12));Jt(t,n,3.6);const h=wt,d=At,m=a(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const g=p/6*ye+r;Oa(l,h+Math.cos(g)*38*c,d+Math.sin(g)*12*c,Pt(4+2*c),m&&p%2===0)}Oa(l,h,d,Pt(5+3*c),m)}}),A({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,c=a(f);Jt(t,n,3.5);const h=wt+(J(r)-.5)*30,d=At;if(Jt(t,n,.1),c){const m=r+c*31;l.globalAlpha=.45,Yn(l,h,d,wt,At,16,22,m,H.indigo,H.blue,0,9,0),l.globalAlpha=1,Yn(l,h,d,wt,At,16,22,m,H.cyan,H.white,6,3,3),l.globalAlpha=c===1?.35:.18,l.fillStyle=H.pale,ao(l,wt,At-20,70,.6)}if(f>.1){const m=Xr((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=H.cyan,ao(l,wt,At,Pt(26*(1-m*.5)),.5),l.fillStyle=H.white,ao(l,wt,At,Pt(12*(1-m)),.5)}}}),A({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Jt(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=H.scorch,ao(l,wt,At,16,.5);for(let f=0;f<8;f++)za(l,wt,At,o+f*ye/8,r+f*17,13,H.scorch)}}),A({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Jt(t,n);const f=M.T*25|0;l.globalAlpha=1-u;for(let c=0;c<8;c++)za(l,wt,At,o+c*ye/8,r+c*17,13,c&1?H.blue:H.cyan,H.white);for(let c=0;c<3;c++){const h=J(r+c+f)*ye,d=30+u*60;Yn(l,wt,At,wt+Math.cos(h)*d,At+Math.sin(h)*d*.5,7,5,r+f*3+c,H.blue,H.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*ye,f=y(1.5,4);z(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,y(2,4),y(.4,.8),l%3===0?H.yel:l%3===1?H.cyan:H.ash,l%3===2?3:2,8,l%3!==2,.92)}tt(8)}Ce.halcon_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s;for(let h=0;h<=16;h+=2){const d=h<3?0:h<12?3:2,m=n-s*h,p=r-a*h;for(let g=-d;g<=d;g+=2){const x=Math.abs(g)>=d&&d>0,b=(h===8||h===12)&&g!==0;e.fillStyle=g===0?H.white:b?H.feather:x?H.cyan:H.pale,e.fillRect(Pt(m+l*g-1),Pt(p+u*g-1),2,2)}}dt(!0);const f=Ot(),c=i*24|0;f.globalAlpha=.2,f.fillStyle=H.blue,ao(f,n-s*6,r-a*6,12),f.globalAlpha=1;for(let h=0;h<2;h++){const d=4+J(c+h*3+(t.id||0))*10,m=h?1:-1,p=n-s*d,g=r-a*d;Yn(f,p,g,p+l*m*9-s*6,g+u*m*9-a*6,4,2,c*7+h,H.cyan,H.white,0,1,0)}f.fillStyle=H.white,f.fillRect(Pt(n-2),Pt(r-2),4,4),dt(!1)};Te.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;A({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(s,a){Jt(t,n,.5),s.globalAlpha=1-a;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;Yn(s,wt,At,wt+Math.cos(u)*i*(.6+a*.5),At+Math.sin(u)*i*.7*(.6+a*.5),4,2.5,o+l,H.cyan,H.white,0,2,0)}en(s,wt,At,Pt((r?10:6)*(1-a))+2,H.white)}});for(let s=0;s<(r?8:4);s++)z(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(.5,1.5),.25,s&1?H.yel:H.cyan,2,5,!0)};let $t=0,Wt=0;function $e(e,t,n=0){$t=(e-t)*N.HW+N.OX,Wt=(e+t)*N.HH-n*N.ZK}function Kn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const ps=e=>e<0?0:e>1?1:e,ys=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),or=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Uo=["#f0e8b8","#d0c488","#a89a60","#6a6038"],ir=["#8a6a48","#5a3a20","#3a2414"],Pr=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],ts=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function Sd(e,t){const n=[],r=[],o=[];return e.forEach((i,s)=>{for(let a=0;a<i.length;a++){const l=t.indexOf(i[a]);l>=0&&(n.push(a),r.push(s),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function zu(e,t,n,r,o,i,s=-1){const a=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(s>=0&&u!==s)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(a+t.x[f]*o,l+t.y[f]*o,o,o)}}const fx=Sd(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),cx=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],Vc=Sd(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),qc=[ts[3],ts[2],ts[0],"#4a2a6a","#e0d8f0","#a898c0"],Ei=new Map;function hx(e,t){if(e.id==null)return;let n=Ei.get(e.id);if(!n){Ei.size>200&&Ei.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},Ei.set(e.id,n);const r=e.id;A({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,s){if(s.fin)return;const a=M.game;if(a){for(const l of a.projs)if(l.id===r)return;s.fin=!0,s.dur=s.t,Ei.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}Z.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,c=u===0?0:r*y(.45,.9);i[u*4]=t+Math.cos(f)*c,i[u*4+1]=n+Math.sin(f)*c,i[u*4+2]=u===0?12:y(7,11),i[u*4+3]=.16+u*.05}const s=18,a=new Float32Array(s),l=new Float32Array(s);for(let u=0;u<s;u++){const f=Math.random()*6.28,c=Math.sqrt(Math.random())*r*.95;a[u]=t+Math.cos(f)*c,l[u]=n+Math.sin(f)*c}A({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const c=f*2.2;for(let h=0;h<s;h++){const d=ps((c-.2-h%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||($e(a[h],l[h]),u.globalAlpha=d*.75,u.fillStyle=or[1+h%3],u.fillRect(Math.round($t),Math.round(Wt),h%3?3:4,2))}u.globalAlpha=1}}),A({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,c){const h=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,g=i[d*4+2];if($e(i[d*4],i[d*4+1]),h<m){if(h<p)continue;const v=ys(ps((h-p)/.13)),S=g*v*(1+.12*Math.sin(h*60+d)),_=Math.max(1,Math.round(S*2/3));for(let w=0;w<_;w++){const P=(w+.5)/_*2-1,R=S*2*Math.sqrt(1-P*P);u.fillStyle=w===0?Uo[0]:P<.3?Uo[1]:Uo[2],u.fillRect(Math.round($t-R/2),Math.round(Wt-S*2+w*3),Math.max(1,Math.round(R)),3)}u.fillStyle=Uo[3],u.fillRect(Math.round($t-S*.2),Math.round(Wt-S*2-2),3,3);continue}if(!(c.popped&1<<d)){c.popped|=1<<d;for(let v=0;v<4;v++)z(i[d*4],i[d*4+1],.25,y(-.6,.6),y(-.6,.6),y(.4,1.1),y(.9,1.4),or[v%3],3,.25,!1,.92)}const x=(h-m)/.35;if(x>=1)continue;const b=g*(.6+x*2.2);u.globalAlpha=1-x;for(let v=0;v<8;v++){const S=v/8*6.28+d;u.fillStyle=or[v&1?1:2],Kn(u,$t+Math.cos(S)*b,Wt-g+Math.sin(S)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=Uo[0];for(let v=0;v<3;v++)Kn(u,$t+(v-1)*g*.6,Wt-g-x*8-(v&1)*4,g*(.8+x*.6));u.globalAlpha=1}}}),tt(2)};Z.hongo_W=e=>{if(e.type==="heal"){const i=e.x,s=e.y;A({type:"custom",layer:"top",dur:.9,x:i,y:s,drops:0,draw(a,l,u){const f=l<.2?ys(l/.2):l>.8?(1-l)/.2:1,c=3;$e(i,s,1.35);const h=$t,d=Wt,m=[4,8,10,12,12];for(let p=0;p<5;p++){const g=Math.round(m[p]*f)*c;g<=0||(a.fillStyle=p===0?Pr[1]:Pr[2],a.fillRect(Math.round(h-g/2),Math.round(d+(p-5)*c*f),g,Math.max(1,Math.round(c*f))))}a.fillStyle=Pr[3],a.fillRect(Math.round(h-6*c*f),Math.round(d),Math.round(12*c*f),2),a.fillStyle=Pr[0],Kn(a,h-3*c*f,d-3*c*f,3*f),Kn(a,h+2*c*f,d-2*c*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,z(i+y(-.25,.25),s+y(-.25,.25),1.25,0,0,0,.5,u.drops&1?Pr[0]:Pr[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;A({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,s,a){const l=s*1.5,u=M.T;for(let f=0;f<o;f++){const c=f*.035,h=l-c;if(h<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(a.emitted&1<<f)){a.emitted|=1<<f;for(let _=0;_<2;_++)z(m,p,.2,y(-.2,.2),y(-.2,.2),y(.8,1.6),y(.7,1.1),Pr[_],2,0,!0,.95)}const g=ys(ps(h/.18)),x=s>.8?(1-s)/.2:1,b=Math.max(1,Math.round(3*g*x)),v=Math.abs(Math.sin(u*9+f*1.3))*5*x,S=Math.round(Math.sin(u*6+f)*2);$e(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round($t-9),Math.round(Wt-1),18,3),i.globalAlpha=1,zu(i,fx,$t+S,Wt-v,b,cx)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,s){const l=s*1.2;i.globalAlpha=(s<.2?s/.2:1-(s-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;$e(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=Pr[u%3+1],Kn(i,$t,Wt,u%3?3:4)}}})};Z.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;A({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){$e(t,n),r.globalAlpha=1-o,r.fillStyle=ir[2];for(let i=0;i<3;i++){const s=i*2.1+.4;for(let a=0;a<6;a++)Kn(r,$t+Math.cos(s+a*.25)*a*3.5,Wt+Math.sin(s-a*.2)*a*1.8,3)}}});for(let r=0;r<10;r++)z(t,n,.1,y(-1.2,1.2),y(-1.2,1.2),y(1.5,3),y(.4,.6),ir[r%3],3,9,!1,.95)};const Yc=10;Ce.hongo_E=(e,t,n,r,o,i)=>{hx(t,dx);const s=Math.hypot(t.vx||0,t.vy||0)||1,a=-(t.vx||0)/s,l=-(t.vy||0)/s;$e(t.x,t.y),e.fillStyle=ir[1],e.fillRect(Math.round($t-8),Math.round(Wt-1),16,4),e.fillStyle=ir[0],e.fillRect(Math.round($t-5),Math.round(Wt-2),10,2);for(let u=Yc-1;u>=0;u--){const f=t.x+a*u*.17,c=t.y+l*u*.17,h=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/Yc);$e(f,c,h);const d=7-u*.45;e.fillStyle=ir[2],Kn(e,$t,Wt+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",Kn(e,$t,Wt,d),e.fillStyle="#a07040",e.fillRect(Math.round($t-d/4),Math.round(Wt-d/2),2,1),(u===3||u===7)&&(e.fillStyle=or[2],e.fillRect(Math.round($t+d/2),Math.round(Wt-d/2-1),2,2))}$e(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=or[3],e.fillRect(Math.round($t-2),Math.round(Wt-6),4,7),e.fillStyle=or[1],e.fillRect(Math.round($t-6),Math.round(Wt-6),4,2),e.fillRect(Math.round($t+2),Math.round(Wt-8),4,2),e.fillStyle=or[0],e.fillRect(Math.round($t-1),Math.round(Wt-8),2,2),Math.random()<.35&&z(t.x,t.y,.05,y(-.6,.6),y(-.6,.6),y(.8,1.6),.4,ir[Math.random()*3|0],2,7,!1,.95)};function dx(e){const t=e.x,n=e.y;if(e.life<.07){for(let s=0;s<6;s++)z(t,n,.1,y(-.5,.5),y(-.5,.5),y(.5,1),.5,s&1?ir[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;A({type:"custom",layer:"top",dur:r,x:t,y:n,draw(s,a){const l=a*r,u=l<.18?ys(l/.18):a>.82?(1-a)/.18:1;for(let f=0;f<o;f++){const c=i+f/o*6.28,h=Math.cos(c),d=Math.sin(c);$e(t+h*.55,n+d*.55,0);const m=$t,p=Wt;$e(t+h*.8,n+d*.8,.55);const g=$t,x=Wt;$e(t+h*.12,n+d*.12,.75);const b=$t,v=Wt,S=Math.min(10,Math.round(10*u));for(let _=0;_<=S;_++){const w=_/10,P=1-w,R=P*P*m+2*P*w*g+w*w*b,I=P*P*p+2*P*w*x+w*w*v,O=6-w*4;s.fillStyle=ir[2],Kn(s,R,I+1,O+2),s.fillStyle=_&1?"#7a5030":"#6a4428",Kn(s,R,I,O),(_===4||_===7)&&(s.fillStyle="#c8f080",s.fillRect(Math.round(R+(f&1?3:-5)),Math.round(I-1),2,2))}}}});for(let s=0;s<12;s++)z(t,n,.1,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3.2),y(.4,.7),ir[s%3],3,9,!1,.95);tt(2)}Z.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,s=[];for(let f=0;f<13;f++){let c=null;for(let h=0;h<8&&!c;h++){const d=Math.random()*6.28,m=f===0?0:Math.sqrt(Math.random())*r*.88,p=t+Math.cos(d)*m,g=n+Math.sin(d)*m;s.every(x=>Math.hypot(x.x-p,x.y-g)>.7)&&(c={x:p,y:g,cs:f===0?4:Math.random()<.5?3:2,ts:m/r*.5})}c&&s.push(c)}s.sort((f,c)=>f.x+f.y-(c.x+c.y));const a=s.length,l=new Int8Array(a).fill(-1);for(let f=0;f<a;f++){let c=1e9;for(let h=0;h<a;h++)if(h!==f){const d=Math.hypot(s[f].x-s[h].x,s[f].y-s[h].y);d<c&&(c=d,l[f]=h)}}A({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(f,c){const h=c*i,d=ps((h-.1)/.5),m=c>.88?(1-c)/.12:1;f.globalAlpha=.5*m,f.fillStyle="#e8f0d0";for(let p=0;p<a;p++){const g=l[p];if(g<0)continue;$e(s[p].x,s[p].y);const x=$t,b=Wt;$e(s[g].x,s[g].y);const v=Math.hypot($t-x,Wt-b),S=Math.round(v/6*d);for(let _=0;_<=S;_++){const w=_*6/v;f.fillRect(Math.round(x+($t-x)*w),Math.round(b+(Wt-b)*w+Math.sin(_*1.7+p)*2),2,2)}}f.globalAlpha=1}});const u=(f,c,h)=>{const d=ys(ps((c-f.ts)/.22)),m=h>.88?(1-h)/.12:1;return Math.max(0,Math.round(f.cs*d*m))};A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(f,c){const h=c*i;for(let d=0;d<a;d++){const m=s[d],p=u(m,h,c);p<=0||($e(m.x,m.y),f.fillStyle="rgba(20,10,30,0.35)",f.fillRect(Math.round($t-p*4),Math.round(Wt-1),p*8,3),zu(f,Vc,$t+Math.round(Math.sin(M.T*2+d)*p*.4),Wt,p,qc))}}}),A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(f,c,h){const d=c*i;for(let m=0;m<a;m++){const p=s[m],g=u(p,d,c);g<=0||($e(p.x,p.y),f.globalAlpha=.45+.4*Math.sin(M.T*5+m*1.9),zu(f,Vc,$t+Math.round(Math.sin(M.T*2+m)*g*.4),Wt,g,qc,2),f.globalAlpha=.18,f.fillStyle=ts[1],f.fillRect(Math.round($t-g*4),Math.round(Wt-g*9),g*8,g*4))}for(f.globalAlpha=1,h.acc+=Math.max(0,d-h.last),h.last=d;h.acc>.085&&h.puffs<46&&c<.88;){h.acc-=.085,h.puffs++;const m=s[Math.random()*a|0];z(m.x+y(-.1,.1),m.y+y(-.1,.1),.12*m.cs*1.6,y(-.25,.25),y(-.25,.25),y(.5,1),y(.9,1.3),h.puffs&1?ts[0]:or[1],2,.15,!0,.97)}}});for(let f=0;f<14;f++){const c=Math.random()*6.28,h=Math.random()*r*.8;z(t+Math.cos(c)*h,n+Math.sin(c)*h,.05,0,0,y(1.5,2.5),.5,ir[f%3],3,8,!1)}tt(3)};Te.hongo=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,s=10;r.globalAlpha=1-o;for(let a=0;a<s;a++){const l=a/s*6.28;$e(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=or[1+a%3],r.fillRect(Math.round($t-2),Math.round(Wt-1),4,2)}}}),A({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){$e(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Uo[i],Kn(r,$t+(i-1)*8*(.6+o),Wt-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)z(t,n,.4,y(-1,1),y(-1,1),y(.5,1.5),.6,or[r%3],3,2,!1,.92)};const ft=Math.round,Vn=Math.PI*2;let ue=0,ne=0;function ke(e,t,n=0){ue=(e-t)*N.HW+N.OX,ne=(e+t)*N.HH-n*N.ZK}function Wi(e,t,n,r,o){e.fillStyle=o,e.fillRect(ft(t-r/2),ft(n-r/2),r,r)}const lr=e=>e<0?0:e>1?1:e,Ss=e=>1-(1-e)*(1-e),jt={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},Rn={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},Ie={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},Tn={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},mx="#e8384a";function px(e,t){return Math.atan2((e+t)*N.HH,(e-t)*N.HW)}function Fa(e,t,n,r,o,i,s,a,l){const u=Math.cos(r),f=Math.sin(r),c=-f,h=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(ft(m-o/2),ft(p-o/2),o,o),d>=2&&(e.fillStyle=s,e.fillRect(ft(m+c*o-o/2),ft(p+h*o-o/2),o,o));else if(d===10){e.fillStyle=a;for(let g=-3;g<=3;g++)e.fillRect(ft(m+c*g*o-o/2),ft(p+h*g*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(ft(m-o/2),ft(p-o/2),o,o)):(e.fillStyle=a,e.fillRect(ft(m-o),ft(p-o),o*2,o*2))}}function wo(e,t,n,r,o){e.fillStyle=o;const i=ft(r);e.fillRect(ft(t-i),ft(n-1),i*2,2),e.fillRect(ft(t-1),ft(n-i),2,i*2),e.fillRect(ft(t-2),ft(n-2),4,4)}function _d(e,t,n,r){const o=Math.max(2,ft(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=Tn.d,e.fillRect(ft(t-o/2),ft(n-i/2),o,i),o>3&&(e.fillStyle=Tn.m,e.fillRect(ft(t-o/2+1),ft(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=Tn.l,e.fillRect(ft(t-1),ft(n-2),2,4))}Z.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=px(t,n);A({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(s,a){ke(r,o,.55);const l=.55*(1-Ss(a));for(let u=-1;u<=1;u++)u&&a>.85||(s.globalAlpha=u?.7:1,Fa(s,ue,ne,i+u*l,2,u?Ie.l:jt.w,u?Ie.m:jt.m,Tn.m,Rn.d))}}),A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(s,a){ke(r,o,.55),s.globalAlpha=1-a,wo(s,ue+Math.cos(i)*12,ne+Math.sin(i)*12,10*(1-a)+3,Ie.w)}});for(let s=0;s<6;s++)z(r,o,.5,y(-.8,.8),y(-.8,.8),y(.3,1),y(.4,.6),s&1?Rn.m:Rn.l,3,-.5,!1,.9)};Ce.mapache_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=-a,u=s,f=Math.sin(i*26)*.07;dt(!0);const c=Ot();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);c.globalAlpha=(1-d/14)*.9,c.fillStyle=d&1?Ie.l:Ie.m,c.fillRect(ft(n-s*m+l*p),ft(r-a*m+u*p),2,2)}for(let d=4;d>=1;d--)c.globalAlpha=.5-d*.1,Fa(c,n-s*d*9,r-a*d*9,o+f*d,2,Ie.l,Ie.m,Ie.m,Ie.d);c.globalAlpha=.22,c.fillStyle=Ie.m,c.fillRect(ft(n-10),ft(r-10),20,20),c.globalAlpha=1,dt(!1),Fa(e,n,r,o+f,2,jt.w,jt.m,Tn.m,Rn.k);const h=i*4%1;h<.5&&(dt(!0),Ot().globalAlpha=1,wo(Ot(),n+s*(12-h*30),r+a*(12-h*30),4,jt.w),dt(!1))};const Kc=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];Z.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;A({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){ke(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Fa(o,ue-Math.cos(r)*8,ne-Math.sin(r)*8,r+Math.PI,2,jt.w,jt.m,Tn.m,Rn.k)}}),A({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){ke(t,n,1);const s=3,a=Ss(lr(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=ue,f=ne-a,c=Kc.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let h=0;h<c;h++){const d=Kc[h],m=i>.6?(h&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const g=d[p];g!=="."&&(o.fillStyle=g==="X"?Ie.l:g==="M"?Ie.d:g==="e"?Ie.w:Ie.m,o.fillRect(ft(u+(p-6)*s+m-s/2),ft(f+(h-4)*s*l-s/2),s,Math.max(1,ft(s*l))))}}}});for(let o=0;o<8;o++)z(t,n,.5,y(-1.8,1.8),y(-1.8,1.8),y(.8,2),y(.3,.5),o&1?jt.l:jt.m,2,6,!0,.9);for(let o=0;o<6;o++)z(t+y(-.2,.2),n+y(-.2,.2),.4,0,0,y(.6,1.2),y(.6,.9),o&1?Ie.l:Ie.m,2,-.3,!0);tt(2)};function wd(e,t,n,r,o,i,s,a){const l=Math.max(2,ft(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,c=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,h=n-o/2+u*2;if(c<1)continue;e.globalAlpha=a,e.fillStyle=Tn.d,e.fillRect(ft(t-c-2),ft(h),ft(c*2+4),2),e.globalAlpha=a*.85,e.fillStyle=jt.m,e.fillRect(ft(t-c),ft(h),ft(c*2),2);const d=t-c+(s*2.2-.6)*r-f*o*.25;d>t-c&&d<t+c-3&&(e.globalAlpha=a,e.fillStyle=jt.w,e.fillRect(ft(d),ft(h),3,2))}e.globalAlpha=a,e.fillStyle=Tn.l,e.fillRect(ft(t-2),ft(n-o/2-3),4,3)}function Ad(e,t,n,r,o,i,s,a,l){if(!(a<=0||a>=1))for(let u=0;u<o.length;u++)for(let f=0;f<s;f++){const c=l+u*17+f*3,h=(J(c)-.5)*.7,d=(J(c+1)-.5)*.7,m=lr(a*(.85+J(c+2)*.3));ke(t+(o[u]+h-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(M.T*20+f|0)&1;e.fillStyle=p?jt.w:jt.m,e.fillRect(ft(ue-2),ft(ne-1),p?4:2,p?2:4),e.fillStyle=jt.d,e.fillRect(ft(ue+(p?2:0)),ft(ne+(p?0:3)),2,2)}}function Td(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const s=i/n*Vn;r[i]=e+Math.cos(s)*1.1,o[i]=t+Math.sin(s)*1.1}return{TX:r,TY:o}}function Cd(e,t,n){A({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){ke(e[i],t[i],.6);for(let s=0;s<6;s++){const a=s/6*Vn+o*2,l=6+o*22;wo(r,ue+Math.cos(a)*l,ne+Math.sin(a)*l*.8,4*(1-o)+2,s&1?jt.l:Ie.l)}o<.3&&wo(r,ue,ne,16*(1-o/.3)+3,jt.w)}}}),A({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let s=0;s<e.length;s++)for(let a=0;a<4;a++)z(e[s],t[s],.4,y(-.8,.8),y(-.8,.8),y(.3,.9),y(.4,.7),a&1?Rn.l:Rn.m,3,-.4,!1,.9)}}})}Z.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=Td(t,n,2),s=.32,a=.45,l=.78;A({type:"custom",layer:"top",dur:a+.02,x:t,y:n,draw(u,f){const c=f*(a+.02),h=Ss(lr(c/.18));if(ke(t,n,.75),wd(u,ue,ne,30,52*h,!0,lr(c/.3),.95),c>s){u.globalAlpha=1,u.fillStyle=jt.w;const d=lr((c-s)/(a-s)),m=ue+4,p=ne-6;for(let g=0;g<6;g++){let x=J(r+g)*Vn,b=m,v=p;for(let S=0;S<ft(6*d);S++)x+=(J(r+g*7+S)-.5)*.9,b+=Math.cos(x)*3,v+=Math.sin(x)*3,u.fillRect(ft(b),ft(v),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const c=f*(l+.05);c>=a&&c<a+.08&&(ke(t,n,.75),u.globalAlpha=1-(c-a)/.08,u.fillStyle=jt.w,u.fillRect(ft(ue-22),ft(ne-30),44,60)),u.globalAlpha=1,Ad(u,t,n,.75,o,i,6,(c-a)/(l-a),r)}}),Cd(o,i,l);for(let u=0;u<8;u++)z(t,n,.4,y(-1,1),y(-1,1),y(.3,.8),y(.5,.8),u&1?Rn.m:Rn.d,3,-.3,!1,.9)};Z.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,s=(a,l,u,f,c,h,d)=>{const m=12*f,p=20*f;for(let g=0;g<18;g++){const x=g/18*Vn+c;Wi(a,l+Math.cos(x)*m,u+Math.sin(x)*p,g%3?2:3,g&1?h:d)}for(let g=0;g<8;g++){const x=g/8*Vn-c*1.7,b=.45+.25*Math.sin(c*2+g);Wi(a,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};A({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(a,l){const u=l*i,f=u<.15?Ss(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,c=M.T*8;ke(t,n,.55);const h=ue,d=ne;ke(r,o,.55);const m=ue,p=ne;f>0&&(a.globalAlpha=1,s(a,h,d,f,c,jt.l,jt.d),s(a,m,p,f,-c,Tn.l,Tn.d));const g=lr((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,v=x?Tn.m:jt.m,S=x?1-g:g;a.globalAlpha=.45*(1-lr((u-.5)/.3));for(let _=0;_<=20;_++){const w=_/20;_%2||Wi(a,h+(m-h)*w,d+(p-d)*w-Math.sin(w*Math.PI)*b,2,v)}if(g>0&&g<1)for(let _=0;_<6;_++){const w=x?S+_*.03:S-_*.03;w<0||w>1||(a.globalAlpha=1-_/6,Wi(a,h+(m-h)*w,d+(p-d)*w-Math.sin(w*Math.PI)*b,_?3:5,_?v:jt.w))}}}}),A({type:"custom",layer:"top",dur:i,x:t,y:n,draw(a,l){const u=l*i;ke(t,n,.55);const f=ue,c=ne;ke(r,o,.4);const h=ue,d=ne,m=(f+h)/2,p=(c+d)/2-58,g=lr(u/i),x=m+(h-m)*g,b=p+(d-p)*g-Math.sin(g*Math.PI)*30;a.globalAlpha=g>.85?(1-g)/.15:1,_d(a,x,b,M.T*26)}});for(const[a,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*Vn;z(a,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,y(0,.6),.4,a===t?jt.l:Tn.l,2,0,!0)}};const yx=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];Z.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=Td(t,n,4),s=8,a=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],c=new Float32Array(s);A({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(g,x){ke(t,n,0);const b=ue,v=ne;g.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),g.fillStyle=Tn.l;for(let S=0;S<60;S++){const _=S*6,w=70-S*.9;g.fillRect(ft(b-w),ft(v-_-6),ft(w*2),6)}g.globalAlpha*=2,g.fillStyle=jt.w;for(let S=0;S<18;S+=2){const _=Math.sqrt(1-S/18*(S/18))*74;g.fillRect(ft(b-_),ft(v-9+S),ft(_*2),2)}}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(g,x){const b=x*l,v=Ss(lr(b/.3)),S=b*1.2+b*b*4.5;for(let _=0;_<s;_++)c[_]=_/s*Vn+S;f.sort((_,w)=>Math.sin(c[_])-Math.sin(c[w]));for(const _ of f){const w=c[_];ke(t+Math.cos(w)*a,n+Math.sin(w)*a,0);const P=.45+.55*Math.abs(Math.sin(w+.8));wd(g,ue,ne-22*v,ft(14*P)+2,44*v,!1,(b*1.6+_*.13)%1,.9)}}}),A({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(g,x){const b=x*(u+.05);if(b<l){const v=b*14|0,S=v%s,_=S/s*Vn+b*1.2+b*b*4.5;ke(t+Math.cos(_)*a,n+Math.sin(_)*a,.6),g.globalAlpha=.9,wo(g,ue,ne,9,jt.w)}else{if(b<l+.1){g.globalAlpha=1-(b-l)/.1,ke(t,n,.4),g.fillStyle=jt.w;for(let v=-14;v<14;v+=2){const S=Math.sqrt(1-v/14*(v/14))*90;g.fillRect(ft(ue-S),ft(ne+v*2),ft(S*2),4)}}g.globalAlpha=1,Ad(g,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),Cd(o,i,u);const h=16,d=new Float32Array(h),m=new Float32Array(h),p=new Float32Array(h);for(let g=0;g<h;g++){const x=Math.random()*Vn,b=Math.sqrt(Math.random())*2.6;d[g]=t+Math.cos(x)*b,m[g]=n+Math.sin(x)*b,p[g]=y(0,.35)}A({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(g,x){const b=x*1.3;for(let v=0;v<h;v++){const S=(b-p[v])/.95;if(S<0||S>1)continue;ke(d[v],m[v],3.2*(1-S));const _=Math.cos(M.T*9+v*1.7),w=ue+Math.sin(M.T*4+v)*8,P=yx[v&3],R=(v&3)<2?mx:Rn.k,I=2,O=Math.max(.2,Math.abs(_));if(g.globalAlpha=S>.8?(1-S)/.2:1,g.fillStyle="#fffaf0",g.fillRect(ft(w-7*O),ft(ne-8),ft(14*O)||1,16),O>.45){g.fillStyle=R;for(let k=0;k<5;k++)for(let G=0;G<5;G++)P[k][G]==="X"&&g.fillRect(ft(w+(G-2.5)*I*O),ft(ne-5+k*I),Math.max(1,ft(I*O)),I)}}}});for(let g=0;g<20;g++){const x=Math.random()*Vn;z(t+Math.cos(x)*a,n+Math.sin(x)*a,.2,Math.cos(x)*.8,Math.sin(x)*.8,y(.5,1.5),y(.5,.9),g&1?Rn.l:Rn.m,3,-.4,!1,.92)}A({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(g,x,b){b.fired||(b.fired=!0,tt(5))}})};function jc(e,t,n,r,o,i,s,a){const l=Math.cos(r),u=Math.sin(r),f=-u,c=l,h=ft(10*i);for(let d=0;d<=h;d++){const m=d/10-.5,p=Math.sin(m*Vn)*o*.18;Wi(e,t+l*m*o+f*p,n+u*m*o*.8+c*p,d===h?4:3-Math.abs(m)*2,d===h?a:s)}}Te.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+y(-.3,.3);if(A({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,s){ke(t,n,.5);const a=lr(s*4);i.globalAlpha=s>.4?(1-s)/.6:1,jc(i,ue,ne,o,34,a,jt.m,jt.w),r&&jc(i,ue,ne,o+1.6,40,a,Ie.m,Ie.w),s>.2&&(wo(i,ue+12,ne-10,4*(1-s)+1,jt.w),wo(i,ue-10,ne+6,3*(1-s)+1,jt.l))}}),r){A({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,s){ke(t,n,.6+Math.sin(s*Math.PI)*1),i.globalAlpha=s>.8?(1-s)/.2:1,_d(i,ue+s*18,ne,M.T*30)}});for(let i=0;i<6;i++)z(t,n,.5,y(-1,1),y(-1,1),y(.5,1.4),.5,i&1?Ie.l:Ie.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)z(t,n,.2,y(-.8,.8),y(-.8,.8),y(.2,.6),.35,Rn.l,3,0,!1,.9)};const $o="#1e0f30",ei="#4b2272",Ar="#8b3cd2",Tr="#d6b4ff",xr="#f6f2ff",Ea="#ff2f5f",Rd="#2c1446",Pe=Math.round,yo=Math.PI*2,gx=[0,1,2,1];function Bn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Pe(t),Pe(n),r,o)}function xx(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(Pe(t+(r-t)*l/a-i/2),Pe(n+(o-n)*l/a-i/2),i,i)}function Ou(e,t,n,r,o,i,s,a){t=Pe(t),n=Pe(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=s,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=a,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function io(e,t,n,r,o,i,s,a=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Pe(2*a));e.fillStyle=s;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,p=Pe(n+h*a);if(Math.abs(m)>=f){e.fillRect(Pe(t-d),p,Pe(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(Pe(t-d),p,Pe(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(Pe(t+v),p,Pe(d-v),c)}}}function Fu(e,t,n,r,o){const[i,s]=T(t,n),a=r*N.HW*Math.SQRT2,l=a*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=a*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(Pe(i-f),Pe(s+u),Pe(f*2),2)}}const Pd=e=>{const t=ht(e);return t&&!t.dead&&!Ae(t)?t:null},vx=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Eu=(e,t=16)=>gx[((M.T*t|0)+e)%4];Te.murcielago=e=>{const t=y(0,yo),n=e.big?17:13;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,s]=T(e.x,e.y,.5);r.globalAlpha=1-o,io(r,i,s,n+2,t+o*1.4,.45,Ar),io(r,i,s,n,t+o*1.4,.52,xr)}});for(let r=0;r<5;r++)z(e.x,e.y,.5,y(-2.5,2.5),y(-2.5,2.5),y(0,1),.28,r%2?Tr:Ar,2,0,!0,.9)};Z.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,s=e.x+t*.3,a=e.y+n*.3,l=.6;A({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const c=f*.62;for(let h=0;h<6;h++){const d=c-h*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),g=Math.max(6,Math.ceil(i*2*p*7)),x=h%2?Ar:Tr,b=h%2?3:2;u.globalAlpha=(1-m)*.95;for(let v=0;v<=g;v++){const S=r-i+2*i*v/g,_=Math.sin(v*1.7+h*2.3+c*40)*.07*(1+m),[w,P]=T(s+Math.cos(S)*(p+_),a+Math.sin(S)*(p+_),l-m*.35);Bn(u,w-b/2,P-b/2,b,b,x),v===g>>1&&Bn(u,w-1,P-1,2,2,xr)}}}}),A({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const c of[-1,1]){const h=r+c*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,g]=T(s+Math.cos(h)*m,a+Math.sin(h)*m);Bn(u,p-1,g-1,3,2,ei)}}}});for(let u=0;u<14;u++){const f=r+y(-i,i),c=y(.6,o);z(s+Math.cos(f)*c,a+Math.sin(f)*c,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,y(0,.5),.5,u%3?Tr:xr,2,0,!0,.92)}tt(2)};Z.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*yo+y(-.2,.2),sp:y(1.2,2.4),up:y(.8,1.8),ph:Math.random()*4|0}));A({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),Fu(r,e.x,e.y,.75*(1-o*.6),$o),r.globalAlpha=.8*(1-o),Fu(r,e.x,e.y,.3*(1-o),Rd)}}),A({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const s of n){const a=s.sp*i,[l,u]=T(e.x+Math.cos(s.a)*a,e.y+Math.sin(s.a)*a,.5+s.up*i+Math.sin(i*9+s.a)*.08);Ou(r,l,u,2,Eu(s.ph),$o,ei,Ea)}}}),A({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=Pd(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,s]=T(o.x,o.y,.75);r.globalAlpha=.65;for(let a=0;a<2;a++){const l=M.T*5+a*Math.PI;Ou(r,i+Math.cos(l)*24,s+Math.sin(l)*9,1,Eu(a*2,20),ei,Ar,Ea)}r.globalAlpha=.35;for(let a=0;a<4;a++)Bn(r,i-8+a*5,s+26+(M.T*30+a*7)%8,2,2,$o)}});for(let r=0;r<16;r++)z(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.2,.8),y(-.5,.5),y(-.5,.5),y(1,2.2),y(.5,.9),r%2?$o:ei,3,0,!1,.95);for(let r=0;r<6;r++)z(e.x+y(-.3,.3),e.y+y(-.3,.3),y(.4,1),0,0,y(.5,1.2),.5,Tr,2,0,!0)};Z.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=vx(e),i=o&&o.radius||1.4,s=y(0,yo);let a=!1;A({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const c=u*f.dur,[h,d]=T(t,n);if(c<r){l.globalAlpha=.5,io(l,h,d,Pe(i*26*(1.4-.4*c/r)),s+c*6,.45,ei,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-c)/.6),io(l,h,d+2,Pe(i*30),s+Math.PI*1.1,.42,Rd,.5)}}),A({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const c=u*f.dur;if(c<r){const b=Pd(e.uid);if(!b)return;const[v,S]=T(b.x,b.y,.7),[_,w]=T(t,n,.3),P=Math.hypot(_-v,w-S)||1,R=(_-v)/P,I=(w-S)/P;l.globalAlpha=.75;for(let O=0;O<4;O++){const k=(O-1.5)*7,G=18+O%2*12;xx(l,v-I*k-R*8,S+R*k-I*8,v-I*k-R*(8+G),S+R*k-I*(8+G),2,O%2?Tr:Ar)}return}const h=(c-r)/.5;if(!a){a=!0,tt(6);for(let b=0;b<22;b++){const v=y(0,yo),S=y(2,5);z(t,n,.45,Math.cos(v)*S,Math.sin(v)*S,y(.3,1.5),y(.3,.55),b%3?Tr:b%2?xr:Ar,2,3,!0,.9)}}const d=Math.min(1,h/.45),[m,p]=T(t,n,.45),g=Pe(26+14*d),x=s+d*Math.PI*1.1;l.globalAlpha=h<.5?1:Math.max(0,(1-h)/.5),io(l,m,p,g+3,x,.42,Ar,.85),io(l,m,p,g,x,.48,xr,.85),l.globalAlpha*=.35,io(l,m,p,g,x-.6,.48,Tr,.85)}})};Z.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(a,l)=>({p:l/r*yo,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(a,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),c=(a.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+a.p*3)),h=a.p+l*a.w;return[e.x+Math.cos(h)*c,e.y+Math.sin(h)*c,a.z+Math.sin(l*4+a.p)*.25+f*1.5,f]},s=Array.from({length:8},()=>({t:y(.3,n-.4),x:e.x+y(-1,1)*t*.6,y:e.y+y(-1,1)*t*.6}));A({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);a.globalAlpha=.32*f,Fu(a,e.x,e.y,t,$o),a.globalAlpha=.7*f;for(let c=0;c<40;c++){const h=c/40*yo+u*.8,[d,m]=T(e.x+Math.cos(h)*t,e.y+Math.sin(h)*t);Bn(a,d-1,m-1,c%2?2:3,2,c%2?Tr:Ar)}a.globalAlpha=.3*f;for(const c of o){const[h,d]=i(c,u),[m,p]=T(h,d);Bn(a,m-4,p-1,8,2,"#000000")}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n;for(const f of o){const[c,h,d,m]=i(f,u),[p,g]=T(c,h,d);a.globalAlpha=Math.min(1,u/.15)*(1-m),Ou(a,p,g,f.s,Eu(f.ph,18),$o,ei,Ea)}}}),A({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(a,l){const u=l*n;for(const f of s){const c=(u-f.t)/.14;if(c<0||c>1)continue;const[h,d]=T(f.x,f.y,.55),m=Pe(4-c*3);a.globalAlpha=1-c;for(const p of[-1,1]){const g=h+p*4;Bn(a,g-2,d-6-m,4,2,xr),Bn(a,g-1,d-4-m,2,3,xr),Bn(a,g-2,d+4+m,4,2,xr),Bn(a,g-1,d+1+m,2,3,xr)}Bn(a,h-1,d-1,3,3,Ea)}}});for(let a=0;a<20;a++){const l=y(0,yo),u=t*y(.3,1);z(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,y(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,y(0,.6),y(.6,1.1),a%3?Ar:Tr,2,0,!0,.97)}tt(5)};const gt=Math.round,sr=Math.PI*2,mt={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},bx=e=>e*N.HW*Math.SQRT2;function Hi(e,t,n,r){r=Math.max(1,gt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(gt(t[0]+(n[0]-t[0])*a/i-s),gt(t[1]+(n[1]-t[1])*a/i-s),r,r)}function La(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=gt(n-s*o/2),u=gt(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<a;c++)for(let h=0;h<s;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Id(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+y(-.35,.35),s=t*o/n;r.push([Math.cos(i)*s,Math.sin(i)*s])}return r}function zd(e,t,n,r,o){const i=r.length-1,s=o*i;for(let a=0;a<i&&a<s;a++){const l=Math.min(1,s-a),u=T(t+r[a][0],n+r[a][1]),f=T(t+r[a+1][0],n+r[a+1][1]);Hi(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],a<2?3:2)}}const Mx=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],Sx=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],Qc=["t.t.t",".....",".ppp.","ppppp",".ppp."];Z.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,s=Math.min(e.angle||1.2,1.4),a=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,c=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let g=0;g<p;g++){const x=a+(p===1?0:(g/(p-1)*2-1)*s*.8)+y(-.06,.06),b=d*i/2.5;c.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:y(9,15),done:!1})}});const h=[-.8,-.4,0,.4,.8].map(d=>Id(a+d*s,i*y(.75,1)));A({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,g=Math.min(1,p/f),x=1.5*(1-g*g),[b,v]=T(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),La(d,Mx,b,v,3,{h:mt.wood,d:mt.i0,b:mt.brass,l:mt.i4,i:mt.i2}),g<1){d.globalAlpha=.5,d.fillStyle=mt.i3;for(let S=1;S<=3;S++)d.fillRect(gt(b-15+S*7),gt(v-26-S*8),2,8)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,g]=T(l,u,.1),x=gt(26*(1-m))+4;d.fillStyle=mt.amberL,d.fillRect(p-x,g-2,x*2,4),d.fillRect(p-2,g-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,g-3,10,6)}}),A({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const g=m*1.15;if(g>=f&&!p.hit){p.hit=!0,tt(7);for(let v=0;v<14;v++){const S=a+y(-s,s),_=y(1,3);z(l,u,.1,Math.cos(S)*_,Math.sin(S)*_,y(.3,1),y(.6,.9),v%2?mt.dust:mt.e3,5,-.4,!1,.9)}}if(g<f)return;const x=g-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=mt.e0;for(const v of h)zd(d,t,n,v,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const v=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=mt.dust;for(let S=0;S<=16;S++){const _=a-s+2*s*S/16,[w,P]=T(t+Math.cos(_)*v,n+Math.sin(_)*v);d.fillRect(gt(w)-3,gt(P)-2,6,4)}}for(const v of c){const S=(g-v.t0)/.5;if(S<0||S>1)continue;v.done||(v.done=!0,z(v.x,v.y,.2,y(-1,1),y(-1,1),y(3,5),y(.7,1),[mt.e1,mt.e2,mt.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const _=gt(v.h*(S<.2?S/.2:1-(S-.2)/.8)),[w,P]=T(v.x,v.y);d.globalAlpha=1,d.fillStyle=mt.e0,d.fillRect(gt(w-v.w/2-1),gt(P-2),v.w+2,4),d.fillStyle=mt.e1,d.fillRect(gt(w-v.w/2),gt(P-_),v.w,_),d.fillStyle=mt.e3,d.fillRect(gt(w-v.w/2),gt(P-_-5),v.w,5),d.fillStyle=mt.e2,d.fillRect(gt(w-v.w/2),gt(P-_-1),v.w,1)}}})};function Ns(e,t,n,r,o,i){const s=Math.cos(i);return[e+n*Math.cos(o)*s,t+n*.5*Math.sin(o)*s-r*Math.sin(i)]}Z.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;A({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,s){const a=ht(t),[l,u]=T(a?a.x:r,a?a.y:o,.6),f=gt(18*(1-s))+3;i.fillStyle=mt.amber;for(let c=0;c<8;c++){const h=c/8*sr;i.fillRect(gt(l+Math.cos(h)*f*1.4)-2,gt(u+Math.sin(h)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const s=Math.random()*sr;z(e.x,e.y,.6,Math.cos(s)*y(1,3),Math.sin(s)*y(1,3),y(1.5,3),.4,i%2?mt.brassL:mt.amber,2,9,!0)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,s,a){const l=ht(t),u=s*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||s>.985){for(let w=0;w<16;w++){const P=Math.random()*sr,R=y(1,2.5);z(r+Math.cos(P)*.4,o+Math.sin(P)*.4,y(.2,.8),Math.cos(P)*R,Math.sin(P)*R,y(1.5,3.5),.7,[mt.i1,mt.i2,mt.i3][w%3],4,10,!1,.95)}for(let w=0;w<6;w++)z(r,o,.6,y(-2,2),y(-2,2),y(1,3),.35,mt.brassL,2,6,!0);a.t=1e9;return}const c=l&&l.scale||1,[h,d]=T(r,o),m=gt(40*c),p=gt(56*c),g=Math.min(1,u/.25),x=Math.PI/2*g;if(g>=1&&!a.done){a.done=!0;const[w,P]=[r,o];for(let R=0;R<6;R++)z(w,P,.75*c,y(-1.5,1.5),y(-1.5,1.5),y(.5,2),.3,mt.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=mt.i2;const v=p*Math.sin(x);for(let w=0;w<v;w+=3){const P=m*Math.sqrt(Math.max(0,1-(w/p)**2));i.fillRect(gt(h-P),gt(d-w-3),gt(P*2),3)}for(let w=0;w<m*.5;w+=3){const P=m*Math.sqrt(Math.max(0,1-(w/(m*.5))**2));i.fillRect(gt(h-P),gt(d+w),gt(P*2),3)}for(let w=0;w<32;w++){const P=w/32*sr,R=Ns(h,d,m,p,P,0),I=Math.sin(P)>0;i.globalAlpha=I?.95:.4,i.fillStyle=I?mt.i3:mt.i1,i.fillRect(gt(R[0])-2,gt(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=mt.i2;for(const w of[.12,.3,.5,.7,.88]){const P=Math.PI*w;for(let R=0;R<=x;R+=.16){const I=Ns(h,d,m,p,P,R);i.fillRect(gt(I[0])-1,gt(I[1])-1,2,3)}}const S=u*14|0;let _=0;for(const w of[.42,.9])if(!(w>x))for(let P=0;P<=14;P++){const R=Math.PI*P/14,I=Ns(h,d,m,p,R,w);i.globalAlpha=.9,i.fillStyle=mt.i3,i.fillRect(gt(I[0])-2,gt(I[1])-1,4,2),P%2===0&&(_++,i.globalAlpha=1,i.fillStyle=_%16===S%16?"#ffffff":mt.brass,i.fillRect(gt(I[0])-1,gt(I[1])-3,3,3))}if(g>=1){const w=Ns(h,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=mt.i0,i.fillRect(gt(w[0])-5,gt(w[1])-4,10,6),i.fillStyle=mt.brass,i.fillRect(gt(w[0])-4,gt(w[1])-3,8,4),i.fillStyle=mt.brassL,i.fillRect(gt(w[0])-3,gt(w[1])-3,3,1)}}})};Z.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,s=e.dur||.3,a=o-n,l=i-r,u=Math.hypot(a,l)||1,f=T(n,r),c=T(o,i),h=Math.hypot(c[0]-f[0],c[1]-f[1])||1,d=(c[0]-f[0])/h,m=(c[1]-f[1])/h,p=[],g=Math.max(2,Math.floor(u/.5));for(let x=1;x<=g;x++){const b=x/(g+1),v=x%2?1:-1;p.push({s:b,x:n+a*b-l/u*.17*v,y:r+l*b+a/u*.17*v})}A({type:"custom",layer:"ground",dur:s+2,x:n,y:r,draw(x,b){const v=b*(s+2);for(const S of p){const _=v-S.s*s;if(_<0)continue;const[w,P]=T(S.x,S.y);x.globalAlpha=Math.max(0,.7*(1-_/2)),La(x,Qc,w,P,3,{t:mt.e0,p:mt.e0}),x.globalAlpha*=.6,La(x,Qc,w-1,P-1,3,{p:mt.e1})}}}),A({type:"custom",layer:"top",dur:s+.3,x:n,y:r,draw(x,b,v){const S=b*(s+.3),_=ht(t),w=Math.min(1,S/s),P=_&&S<s?_.x:n+a*w,R=_&&S<s?_.y:r+l*w;if(S<s){if(v.n=v.n||0,v.n<30){v.n+=2;for(let vt=0;vt<2;vt++)z(P+y(-.2,.2),R+y(-.2,.2),.1,-a/u*y(.5,1.5)+y(-.5,.5),-l/u*y(.5,1.5)+y(-.5,.5),y(.4,1.2),y(.5,.8),vt?mt.e2:mt.dust,5,-.3,!1,.9)}const[I,O]=T(P,R,.45),k=I+d*26,G=O+m*26,$=-m,ot=d;for(let vt=0;vt<3;vt++){const F=vt*8+S*120%8;x.globalAlpha=.9-vt*.25,x.fillStyle=vt?mt.dust:"#ffffff";const E=[k-d*F,G-m*F];Hi(x,E,[E[0]-d*10+$*13,E[1]-m*10+ot*13],3),Hi(x,E,[E[0]-d*10-$*13,E[1]-m*10-ot*13],3)}x.globalAlpha=.6,x.fillStyle=mt.i3;for(let vt=0;vt<4;vt++){const F=(vt-1.5)*9,E=14+(vt*7+S*200)%12;Hi(x,[I-d*20+$*F,O-m*20+ot*F],[I-d*(20+E)+$*F,O-m*(20+E)+ot*F],2)}}else{if(!v.end){v.end=!0,tt(5);for(let G=0;G<14;G++){const $=Math.random()*sr,ot=y(1.5,3);z(o,i,.15,Math.cos($)*ot,Math.sin($)*ot,y(.8,2),.6,G%2?mt.dust:mt.e3,5,2,!1,.9)}}const I=(S-s)/.3,[O,k]=T(o+a/u*.5,i+l/u*.5,.45);x.globalAlpha=1-I;for(let G=0;G<8;G++){const $=G/8*sr+.2,ot=6+I*14,vt=ot+10*(1-I);x.fillStyle=G%2?mt.amberL:"#ffffff",Hi(x,[O+Math.cos($)*ot,k+Math.sin($)*ot*.7],[O+Math.cos($)*vt,k+Math.sin($)*vt*.7],4)}}}})};Z.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(s,a)=>Id(a/8*sr+y(-.2,.2),o*y(.45,.65),5));tt(10),A({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(s,a){const[l,u]=T(n,r),f=a*1;for(let c=0;c<3;c++){const h=(f-c*.13)/.62;if(h<=0||h>=1)continue;const d=bx(o)*(.15+.95*(1-(1-h)*(1-h))),m=5-c;s.globalAlpha=1-h;for(let p=0;p<56;p++){if(p%7>=5)continue;const g=p/56*sr+c*.2,x=l+Math.cos(g)*d,b=u+Math.sin(g)*d*.5;s.fillStyle=c===0?mt.amberL:mt.amber,s.fillRect(gt(x-m/2),gt(b-m/2),m,m),p%7===2&&(s.fillStyle=mt.amberD,s.fillRect(gt(x*.94+l*.06-1),gt(b*.94+u*.06-1),3,3))}}}}),A({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(s,a){s.globalAlpha=.8*(1-a),s.fillStyle=mt.e0;for(const l of i)zd(s,n,r,l,Math.min(1,a*7))}}),A({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(s,a){const l=ht(t),u=l?l.x:n,f=l?l.y:r,c=l&&l.scale||1,[h,d]=T(u,f,1.7*c+a*.5),m=a<.07?2:a<.14?3:4;s.globalAlpha=a<.1?a*10:a>.6?Math.max(0,(1-a)/.4):1,s.globalAlpha*=.85+.15*Math.sin(a*60),La(s,Sx,h,d,m,{e:mt.amberD,i:mt.amberL,h:mt.amber,s:mt.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const g=34+(a*90+p*22)%66,x=1-(a*90+p*22)%66/66;s.globalAlpha=x*(a>.7?(1-a)/.3:1),s.fillStyle=mt.amberL;for(let b=-.7;b<=.71;b+=.175){const v=Math.cos(b)*g,S=Math.sin(b)*g*.8;s.fillRect(gt(h+v)-2,gt(d+6+S)-2,4,4),s.fillRect(gt(h-v)-2,gt(d+6+S)-2,4,4)}}}});for(let s=0;s<30;s++){const a=Math.random()*sr,l=Math.sqrt(Math.random())*o*.9;z(n+Math.cos(a)*l,r+Math.sin(a)*l,0,Math.cos(a)*.4,Math.sin(a)*.4,y(2,4),y(.5,.8),[mt.e1,mt.e2,mt.e3][s%3],s%4?3:4,12,!1,.97)}for(let s=0;s<12;s++){const a=Math.random()*sr,l=y(.3,1.2);z(n+Math.cos(a)*l,r+Math.sin(a)*l,.5,0,0,y(.8,1.6),y(.8,1.2),mt.amberL,2,-.3,!0,.98)}};Te.oso=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,s]=T(t,n,.08),a=gt(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=mt.i0,r.fillRect(i-a-1,s-2,a*2+2,5),r.fillStyle=mt.dust,r.fillRect(i-a,s-1,gt(a*.7),3),r.fillRect(i+a-gt(a*.7),s-1,gt(a*.7),3);const[u,f]=T(t,n,.5),c=gt(12*(1-o));r.fillStyle=mt.i3,r.fillRect(u-c-4,f-3,8,6),r.fillRect(u+c-4,f-3,8,6),r.fillStyle=mt.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)z(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(2,3.5),.3,mt.brassL,2,12,!0);for(let r=0;r<3;r++)z(t,n,.05,y(-1,1),y(-1,1),y(1,2),.45,mt.e2,3,10,!1)};const Xn="#ffffff",Sn="#e6eeff",go="#bfe9ff",Ua="#7fdcf4",_x="#3a9ab8",Ee="#fff0b4",Zc="#efe0b8",Jc="#c8a878",wx="#34408a",t0="#a9bfdc",Gt=Math.round,lo=Math.PI*2;function ae(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Gt(t),Gt(n),r,o)}function Lu(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const s=Gt(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Gt(t-s),Gt(n+i),s*2,2)}}function es(e,t,n,r,o,i,s,a=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,c=Math.max(1,Gt(2*a));e.fillStyle=s;for(let h=-r;h<=r;h+=2){const d=Math.sqrt(Math.max(0,r*r-h*h)),m=h-u,p=Gt(n+h*a);if(Math.abs(m)>=f){e.fillRect(Gt(t-d),p,Gt(2*d),c);continue}const g=Math.sqrt(f*f-m*m),x=l-g,b=l+g;if(x>-d&&e.fillRect(Gt(t-d),p,Gt(Math.min(x,d)+d),c),b<d){const v=Math.max(b,-d);e.fillRect(Gt(t+v),p,Gt(d-v),c)}}}function Ax(e,t,n,r,o,i,s){t=Gt(t),n=Gt(n);const a=[3,2,1,2][o],l=Math.max(1,a-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*a,n-2*r,r*a,2*r),e.fillRect(t+u,n-2*r,r*a,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=s,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function e0(e,t,n,r,o,i,s,a,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const c=Gt(t+u*i-f),h=Gt(t+u*i+f),d=Gt(n+u);e.globalAlpha=.45*l,e.fillStyle=s,e.fillRect(c,d,h-c,2),e.globalAlpha=.95*l,e.fillStyle=a,e.fillRect(c,d,2,2),e.fillRect(h-2,d,2,2)}}function Tx(e,t,n,r,o){t=Gt(t),n=Gt(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const Od=e=>{const t=ht(e);return t&&!t.dead&&!Ae(t)?t:null},Cx=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Fd=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Ce.polilla_A=(e,t,n,r,o,i)=>{dt(!0);const s=Ot(),a=.65+.35*Math.sin(i*20),l=Gt(5+a*3);s.globalAlpha=a,ae(s,n-l,r-1,l*2,2,Ua),ae(s,n-1,r-l,2,l*2,Ua),s.globalAlpha=1,ae(s,n-2,r-2,4,4,Xn);const u=i*14;ae(s,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,Ee),ae(s,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,Ee),dt(!1)};Te.polilla=e=>{A({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=T(e.x,e.y,.5),i=Gt(10*(1-n))+2;t.globalAlpha=1-n,ae(t,r-i,o-1,i*2,2,Sn),ae(t,r-1,o-i,2,i*2,Sn),ae(t,r-2,o-2,4,4,Xn)}});for(let t=0;t<5;t++)z(e.x,e.y,.5,y(-1,1),y(-1,1),y(.2,.8),.6,t%2?Ee:go,2,.4,!0,.9)};Ce.polilla_Q=(e,t,n,r,o,i)=>{const a=t.z||.45;n=Gt(n),r=Gt(r),dt(!0);const l=Ot(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),dt(!1),Lu(e,n,r,10,_x),Lu(e,n,r,9,Sn),es(e,n,r,9,Math.PI*.85,.55,t0);for(let h=0;h<3;h++){const d=i*2+h*2.1;ae(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,h?2:3,2,t0)}ae(e,n-4,r-5,2,2,Xn);const f=Math.cos(o),c=Math.sin(o);for(let h=0;h<3;h++){const d=(i*2.2+h/3)%1,m=14+h*10;e.globalAlpha=1-d,Tx(e,n-f*m,r-c*m-6-d*14,h<2?1:2,h%2?Ee:Sn)}e.globalAlpha=1,Math.random()<.4&&z(t.x,t.y,a,y(-.3,.3),y(-.3,.3),-.4,.6,Math.random()<.5?Ee:Sn,2,.5,!0,.9)};Z.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;A({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,s]=T(e.x+t*.4,e.y+n*.4,.75),a=Gt(14*(1-o))+2,l=Gt(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)ae(r,i-a,s-1,a*2,2,Ee),ae(r,i-1,s-a,2,a*2,Ee);else for(let u=1;u<=l;u+=2)ae(r,i+u,s+u,2,2,Ee),ae(r,i-u-2,s+u,2,2,Ee),ae(r,i+u,s-u-2,2,2,Ee),ae(r,i-u-2,s-u-2,2,2,Ee);ae(r,i-2,s-2,4,4,Xn);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,c=16+u;ae(r,i+Math.cos(f)*c-1,s+Math.sin(f)*c*.6-1,2,2,u%2?Ee:Sn)}}});for(let r=0;r<10;r++)z(e.x+t*.4,e.y+n*.4,.75,t*y(.5,1.5)+y(-.4,.4),n*y(.5,1.5)+y(-.4,.4),y(0,.4),y(.6,1),r%2?Ee:Sn,2,.6,!0,.9)};Z.polilla_W=e=>{if(e.type==="heal"){A({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=T(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),es(n,o,i,7,-.6,.5,Sn);for(let s=0;s<3;s++){const a=(r*1.6+s/3)%1;ae(n,o-10+s*10,i+a*50,2,4,s%2?go:Xn)}}});for(let n=0;n<8;n++)z(e.x+y(-.35,.35),e.y+y(-.35,.35),y(1,1.6),0,0,-y(.6,1.2),y(.7,1.1),n%2?Sn:Ee,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;A({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=Od(e.uid),i=o?o.x:e.x,s=o?o.y:e.y,[a,l]=T(i,s,2.2),u=r*1.2,f=Gt(15*Fd(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),es(n,a,l,f+2,-.7,.5,Ua),es(n,a,l,f,-.7,.55,Xn);for(let c=0;c<5;c++){const h=M.T*2+c*1.26;(M.T*6+c)%2<1&&ae(n,a+Math.cos(h)*(f+10)-1,l+Math.sin(h)*(f+6)-1,2,2,Ee)}}}),A({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const s=Math.max(0,Math.min(1,(r-i)/(1-i)));if(s<=0)continue;const a=t*o*(.3+.7*(1-(1-s)*(1-s)));n.globalAlpha=.85*(1-s);for(let l=0;l<36;l++){const u=l/36*lo,[f,c]=T(e.x+Math.cos(u)*a,e.y+Math.sin(u)*a);ae(n,f-1,c-1,l%3?2:3,2,l%2?go:Xn)}}}});for(let n=0;n<40;n++){const r=y(0,lo),o=Math.sqrt(Math.random())*t*.9;z(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,y(2.2,3),y(-.15,.15),y(-.15,.15),-y(1.2,2),y(1.1,1.6),[Sn,go,Xn,Ee][n%4],2,.4,!0,.99)}};Z.polilla_E=e=>{const t=e.dur||3;A({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Od(e.uid);if(!i)return;const s=r*o.dur;!o.end&&s>.3&&(s>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=s);const a=o.end?Math.max(0,1-(s-o.end)/.25):1;if(a<=0)return;const l=s<.22?Fd(s/.22):1,u=.85+.15*Math.sin(M.T*8),[f,c]=T(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=c-9-3*l,g=f+d*(7+10*l),x=c+9;e0(n,g,x,10*l*u,8,.4*d,Jc,Zc,a),e0(n,m,p,15*l*u,13,-.45*d,Zc,Jc,a),n.globalAlpha=.9*a,l>.5&&(Lu(n,m+d*2,p-1,4,wx),ae(n,m+d*2-1,p-2,2,2,Ee),ae(n,m+d*2-2,p-3,1,1,Xn))}dt(!0);const h=Ot();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(M.T*3+d*.37)%1;p>.3||(h.globalAlpha=(1-p/.3)*a,ae(h,f+m*(12+(d>>1)*9)*l-1,c-20+(d>>1)*10,2,2,Xn))}dt(!1)}});for(let n=0;n<18;n++){const r=y(0,lo),o=y(1,2.2);z(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,y(.3,1.2),y(.5,.9),n%3?Ee:Sn,2,.5,!0,.92)}};Z.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=Cx(e),r=n&&n.dur||4,o=10,i=t*N.HW*Math.SQRT2,s=t*N.HH*Math.SQRT2,a=Array.from({length:o},(f,c)=>({ox:y(-.6,.6)*t,oy:y(-.6,.6)*t,w:y(.8,1.6),p:y(0,lo),z:y(.6,2.4),ph:c})),l=Array.from({length:7},(f,c)=>({o:(c/6-.5)*1.7,w:Gt(y(8,26)),p:y(0,lo)}));let u=0;A({type:"custom",layer:"ground",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,h/.25,(r-h)/.4),[m,p]=T(e.x,e.y);f.globalAlpha=.13*d,f.fillStyle=Ua;for(let g=-s;g<=s;g+=2){const x=i*Math.sqrt(Math.max(0,1-g*g/(s*s)));f.fillRect(Gt(m-x),Gt(p+g),Gt(x*2),2)}f.globalAlpha=.4*d,es(f,m,p,Gt(t*30),-.5,.5,go,.5),f.globalAlpha=.85*d;for(let g=0;g<40;g++){const x=g/40*lo+h*.35,[b,v]=T(e.x+Math.cos(x)*t,e.y+Math.sin(x)*t);ae(f,b-1,v-1,2,2,g%4?go:Xn)}}}),A({type:"custom",layer:"top",add:!0,dur:r,x:e.x,y:e.y,draw(f,c){const h=c*r,d=Math.min(1,(r-h)/.4),m=Math.min(1,h/.25),[p,g]=T(e.x,e.y),x=330,b=f.createLinearGradient(0,g-x,0,g);b.addColorStop(0,"rgba(160,230,255,0)"),b.addColorStop(1,"rgba(160,230,255,0.14)"),f.globalAlpha=d,f.fillStyle=b,f.fillRect(Gt(p-i*m),Gt(g-x),Gt(i*2*m),x);for(const v of l){const S=p+v.o*i*m,_=(S-p)/i,w=g-s*Math.sqrt(Math.max(0,1-_*_));f.globalAlpha=d*(.07+.06*Math.sin(M.T*3+v.p))*(h<.25?2:1),ae(f,S-v.w/2,g-x,v.w,Gt(w-(g-x)),Sn)}for(const v of a){const S=h*v.w+v.p,_=e.x+v.ox+Math.cos(S)*.6+Math.sin(S*2.3)*.2,w=e.y+v.oy+Math.sin(S)*.6,[P,R]=T(_,w,v.z+Math.sin(h*1.7+v.p)*.4);f.globalAlpha=d*Math.min(1,h/.4),Ax(f,P,R,2,((M.T*14|0)+v.ph)%4,v.ph%3?Sn:Xn,go)}if(u<50&&Math.random()<.3){u++;const v=y(0,lo),S=Math.sqrt(Math.random())*t;z(e.x+Math.cos(v)*S,e.y+Math.sin(v)*S,y(2.5,3.5),0,0,-y(.8,1.4),y(1.5,2.2),u%3?Sn:Ee,2,0,!0,.99)}}}),tt(2)};const at=Math.round,qe=Math.PI*2,Ur=e=>e*N.HW*Math.SQRT2,nt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},Bf=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function Ed(e,t,n,r){r=Math.max(1,at(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(at(t[0]+(n[0]-t[0])*a/i-s),at(t[1]+(n[1]-t[1])*a/i-s),r,r)}function We(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(at(t-l),at(n+s),Math.max(1,at(l*2)),i)}}function vr(e,t,n,r,o,i,s=0,a=0){for(let l=0;l<o;l++){if(a&&l%a===0)continue;const u=s+l/o*qe;e.fillRect(at(t+Math.cos(u)*r-i/2),at(n+Math.sin(u)*r*.5-i/2),i,i)}}function Rx(e,t,n,r=99){let o=null,i=r;for(const s of M.game?M.game.units:[]){if(s.dead||s.heroKey!==n)continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}function _s(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?nt.skinD:i===1?nt.skin:nt.skinL;for(let s=0;s<=o;s++){const a=n+(r-n)*s/o,l=at(i===0?a+3:i===1?a:Math.max(1,a*.35)),u=i===2?-a*.25:0;e.fillRect(at(t[s][0]-l/2),at(t[s][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const s=n+(r-n)*i/o,a=Math.max(2,at(s*.4)),l=at(t[i][0]),u=at(t[i][1]+s*.3);e.fillStyle=nt.sucker,e.fillRect(l-(a>>1),u-(a>>1),a,a),a>2&&(e.fillStyle=nt.skinD,e.fillRect(l,u,1,1))}}}function Ld(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],s=Math.hypot(o,i)||1,a=-i/s,l=o/s,u=Math.max(4,Math.ceil(s/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,g=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+a*g,e[1]+i*p+l*g])}let[c,h]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);c+=Math.cos(d)*p,h+=Math.sin(d)*p,f.push([c,h])}return f}Z.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,s=Array.from({length:22},(l,u)=>({a:r+y(-.9,.9)*o,d:i*y(.45,1),t0:y(0,.12),w:y(0,6),sz:y(6,10),bio:u%4===0}));A({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const c of s){const h=(f-c.t0)/.42;if(h<0||h>1.15)continue;const d=1-Math.pow(1-Math.min(1,h),2),m=c.d*d,p=Math.sin(d*qe+c.w)*.2*d,g=t+Math.cos(c.a)*m-Math.sin(c.a)*p,x=n+Math.sin(c.a)*m+Math.cos(c.a)*p,[b,v]=T(g,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),S=c.sz*(1-.4*d);l.globalAlpha=h>1?(1.15-h)/.15:1,l.fillStyle=nt.ink,We(l,b,v,S,S*.75,2),l.fillStyle=nt.inkV,We(l,b-S*.3,v-S*.3,S*.4,S*.3,1),c.bio&&(l.fillStyle=nt.bio,l.fillRect(at(b+S*.2),at(v),2,2))}}});const a=s.slice(0,9);A({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const c of a){const h=f.t-c.t0-.42;if(h<0)continue;const d=Math.min(1,h*10),m=Math.min(1,(2.6-f.t)/.6),[p,g]=T(t+Math.cos(c.a)*c.d,n+Math.sin(c.a)*c.d),[x,b]=T(t,n),v=x-p,S=b-g,_=Math.hypot(v,S)||1;l.globalAlpha=.85*m;for(let P=0;P<4;P++){const R=(c.sz+2)*(1-P*.22)*d;l.fillStyle=P?nt.inkP:nt.ink,We(l,p+v/_*P*7*d,g+S/_*P*4*d,R,R*.5,2)}const w=.5+.5*Math.sin(M.T*4+c.w*3);l.globalAlpha=m*w,l.fillStyle=nt.bio,l.fillRect(at(p-3),at(g-1),2,2),l.fillRect(at(p+4),at(g+1),2,1),c.bio&&(l.fillStyle=nt.bioL,l.fillRect(at(p),at(g-2),1,1))}}});for(let l=0;l<12;l++){const u=r+y(-1,1)*o,f=y(2,4.5);z(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,y(.5,1.8),y(.35,.6),l%3?nt.ink:nt.bio,l%3?3:2,7,l%3===0,.93)}};const Wo=[];function Px(e){let t=null,n=1.3;for(const r of Wo){if(r.done||M.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}const Ud=e=>T(e.x,e.y,.35);function kd(e,t,n){A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=ht(e);if(!i)return;const s=Ud(i),a=T(t,n,.45),l=1-o*o;l<.05||_s(r,Ld(s,[s[0]+(a[0]-s[0])*l,s[1]+(a[1]-s[1])*l],M.T,1+o*2),10,3)}})}Z.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=Wo.length-1;o>=0;o--)M.T-Wo[o].t>3&&Wo.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1};Wo.push(r),A({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,s){if(r.done){s.t=s.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,kd(r.uid,r.lx,r.ly),s.t=s.dur+1)}});for(let o=0;o<8;o++)z(e.x+t*.3,e.y+n*.3,.3,t*y(.5,1.5)+y(-.6,.6),n*y(.5,1.5)+y(-.6,.6),y(.5,1.5),.4,o%2?nt.sucker:nt.skin,2,5,!1)};Ce.pulpo_W=(e,t,n,r,o,i)=>{const s=Px(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=M.T);const a=s?ht(s.uid):t.src||Rx(t.x,t.y,"pulpo",9),l=a&&!a.dead?Ud(a):[n-Math.cos(o)*70,r-Math.sin(o)*70];_s(e,Ld(l,[n,r],i),11,3),Math.random()<.25&&z(t.x,t.y,.4,0,0,-.3,.4,nt.bio,2,3,!0)};Z.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?ht(e.uid):null,o=r?r.team:null;let i=null,s=1.3;for(const h of M.game?M.game.units:[]){if(h.dead||o&&h.team===o||r&&h===r||h.kind==="tower"||h.kind==="nexus")continue;const d=Math.hypot(h.x-t,h.y-n);d<s&&(s=d,i=h)}const a=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const h of Wo)h.uid===e.uid&&M.T-h.t<1.5&&(!f||h.t>f.t)&&(f=h);f&&!f.done&&(f.done=!0,kd(f.uid,t,n));const c=h=>{const d=a?ht(a):null;return d&&!d.dead?[d.x,d.y]:[h.x,h.y]};A({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),[x,b]=T(p,g),v=Math.min(1,m.t/.12),S=d>.8?(1-d)/.2:1;h.globalAlpha=.9*S,h.fillStyle=nt.ink,We(h,x,b,30*v,13*v,2),h.fillStyle=nt.inkP,We(h,x,b,20*v,8*v,2),h.fillStyle=nt.bio,vr(h,x,b,30*v,18,2,M.T*2,3)}}),A({type:"custom",layer:"top",dur:l,x:t,y:n,draw(h,d,m){const[p,g]=c(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),v=M.T;h.globalAlpha=x;const S=[];for(let _=0;_<=16;_++){const w=_/16,P=w*1.15*b,R=Math.max(0,w-.6)/.4,[I,O]=T(p,g,P);S.push([I+u*(20-R*26)+Math.sin(v*5+w*4)*2,O-R*6])}_s(h,S,12,3);for(let _=0;_<2;_++){const[,w]=T(p,g,(.22+_*.3)*b),[P]=T(p,g),R=19-2*Math.sin(v*9+_*2),I=1+.08*Math.sin(v*9);for(let O=0;O<=12;O++){const k=.1*Math.PI+O/12*.8*Math.PI,G=P+Math.cos(k)*R*I,$=w+Math.sin(k)*7;h.fillStyle=nt.skinD,h.fillRect(at(G)-4,at($)-4,8,8),h.fillStyle=nt.skin,h.fillRect(at(G)-3,at($)-3,6,5),O%3===1&&(h.fillStyle=nt.sucker,h.fillRect(at(G)-1,at($)+1,3,2))}}}});for(let h=0;h<10;h++){const d=Math.random()*qe,m=y(1,2.4);z(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,y(1,2.5),.5,h%3?nt.ink:nt.bio,3,9,h%3===0)}tt(Bf(e)?3:1)};function Ix(e,t,n,r,o,i){if(r<.05)return;const s=[];for(let a=0;a<=9;a++){const l=a/9,[u,f]=T(t,n,l*r*.75),c=Math.max(0,l-.55)/.45;s.push([u+Math.sin(o*3+i+l*3)*4*l+c*c*10,f+c*c*8])}_s(e,s,8,2)}Z.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(a=>({a:a/4*qe+y(-.3,.3),d:y(.45,.75),ph:Math.random()*qe})),s=a=>Math.min(1,a/.25,(o-a)/.35);A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(a,l,u){const f=Math.max(0,s(u.t)),c=Math.min(1,u.t/.3),[h,d]=T(t,n),m=Ur(r)*c,p=u.t;a.globalAlpha=.6*f,a.fillStyle=nt.navy,We(a,h,d,m,m*.5,3),a.globalAlpha=.65*f,a.fillStyle=nt.deep,We(a,h,d,m*.62,m*.31,3);for(let g=0;g<3;g++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,v=1-b,S=g/3*qe+p*2.2+b*5,_=h+Math.cos(S)*m*(.08+.9*v),w=d+Math.sin(S)*m*(.08+.9*v)*.5;a.globalAlpha=f*(.35+.65*b),a.fillStyle=v>.6?nt.water:v>.3?nt.bio:nt.bioL;const P=v>.5?4:3;a.fillRect(at(_)-(P>>1),at(w)-1,P,2+(v>.5?1:0))}a.globalAlpha=.9*f,a.fillStyle=nt.foam,vr(a,h,d,m*.97,56,3,p*1.4,4),a.fillStyle=nt.water,vr(a,h,d,m*.85,40,2,p*1.9,3),a.globalAlpha=f,a.fillStyle=nt.inkV,We(a,h,d,19*c,9*c,1),a.fillStyle=nt.abyss,We(a,h,d,15*c,7*c,1)}}),A({type:"custom",layer:"top",dur:o,x:t,y:n,draw(a,l,u){const f=Math.max(0,s(u.t)),c=M.T;a.globalAlpha=f;for(const h of i){const d=h.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+h.ph))*1.1;Ix(a,t+Math.cos(d)*r*h.d,n+Math.sin(d)*r*h.d,m,c,h.ph)}for(let h=0;h<6;h++){const d=u.t*1.5+h/6,m=Math.floor(d),p=d-m,g=J(m*11+h)*qe,x=r*.3*J(m*5+h*7),[b,v]=T(t+Math.cos(g)*x,n+Math.sin(g)*x,p*.9),S=2+at(p*3);a.globalAlpha=f*(1-p),a.fillStyle=nt.foam,a.fillRect(at(b)-S,at(v),1,2),a.fillRect(at(b)+S,at(v),1,2),a.fillRect(at(b),at(v)-S,2,1),a.fillRect(at(b),at(v)+S,2,1)}}}),A({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(a,l){const[u,f]=T(t,n);a.globalAlpha=1-l,a.fillStyle=nt.foam,vr(a,u,f,Ur(r)*(.3+l*.9),40,4)}});for(let a=0;a<16;a++){const l=a/16*qe;z(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,y(1,2.5),.5,a%3?nt.foam:nt.bio,3,8,a%3===0)}};const Uu=new Map;function Bl(e,t,n){const r=ht(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function zx(e,t,n,r,o){const s=10*r;if(s<1){e.fillStyle=nt.inkL,e.fillRect(at(t-26),at(n),26*2,2);return}for(let l=-s;l<s;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/s,2)));e.fillStyle=nt.inkL,e.fillRect(at(t-u-2),at(n+l),at(u*2+4),2),e.fillStyle=nt.eyeD,e.fillRect(at(t-u),at(n+l),at(u*2),2)}const a=Math.sin(o*.8)*6;e.fillStyle=nt.eye,We(e,t+a,n,Math.min(11,26),Math.min(9,s),2),e.fillStyle=nt.abyss,e.fillRect(at(t+a-8),at(n-2),16,Math.max(2,at(5*r))),e.fillStyle="#ffffff",e.fillRect(at(t+a-6),at(n-Math.min(6,s-1)),3,2)}function Ox(e){const t={ended:!1,endT:0};Uu.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,s=(e.dur||3)+.5,a=Array.from({length:44},()=>({a:Math.random()*qe,off:Math.random(),sp:y(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*qe,off:Math.random(),sz:at(y(4,7))})),u=[0,1,2,3,4].map(f=>({a:f/5*qe+y(-.2,.2),ph:Math.random()*qe}));A({type:"custom",layer:"ground",dur:s,x:r,y:o,draw(f,c,h){const d=Bl(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[p,g]=T(r,o),x=Ur(i)*m;f.globalAlpha=.4*d,f.fillStyle=nt.inkP,We(f,p,g,x*.95,x*.475,3),f.globalAlpha=.7*d,f.fillStyle=nt.ink,We(f,p,g,x*.52,x*.26,3),f.globalAlpha=d,f.fillStyle=nt.abyss,We(f,p,g,x*.27,x*.135,2);for(const b of a){const v=(b.off+h.t*b.sp)%1,S=1-v,_=x*(.27+.73*S),w=b.a+v*v*4+h.t*.8,P=p+Math.cos(w)*_,R=g+Math.sin(w)*_*.5,I=p+Math.cos(w-.14)*_*1.04,O=g+Math.sin(w-.14)*_*.52;f.globalAlpha=d*(.3+.7*v),f.fillStyle=S>.6?nt.water:S>.3?nt.bio:nt.mag,Ed(f,[I,O],[P,R],S>.5?2:3)}f.globalAlpha=.8*d,f.fillStyle=nt.inkV,vr(f,p,g,x,64,3,-h.t*.6,4)}}),A({type:"custom",layer:"top",add:!0,dur:s,x:r,y:o,draw(f,c,h){const d=Bl(t,n,h);if(d<=0)return;const m=Math.min(1,h.t/.4),[p,g]=T(r,o,.04),x=Ur(i)*.28*m,b=M.T;for(let v=0;v<44;v++){const S=v/44*qe+b*2.5,_=.6+.4*Math.sin(b*20+v*1.7);f.globalAlpha=d*_,f.fillStyle=v%2?nt.bio:nt.mag,f.fillRect(at(p+Math.cos(S)*x)-1,at(g+Math.sin(S)*x*.5)-1,3,3)}f.globalAlpha=d*.45,f.fillStyle=nt.bioL;for(let v=0;v<18;v++){const S=Math.PI+v/17*Math.PI;f.fillRect(at(p+Math.cos(S)*x*1.15),at(g-14+Math.sin(S)*x*.35),2,2)}}}),A({type:"custom",layer:"top",dur:s,x:r,y:o,draw(f,c,h){const d=Bl(t,n,h);if(d<=0)return;const m=M.T,p=Math.min(1,h.t/.5)*(t.ended?d:1);f.globalAlpha=d;for(const S of l){const _=(S.off+h.t*.4)%1,w=1-_,P=S.a+_*5,[R,I]=T(r+Math.cos(P)*i*.95*w,o+Math.sin(P)*i*.95*w,.05+.35*Math.sin(_*Math.PI)),O=Math.max(2,at(S.sz*(.35+.65*w)));f.fillStyle=nt.ink,f.fillRect(at(R)-(O>>1)-1,at(I)-(O>>1)-1,O+2,O+2),f.fillStyle=nt.rock,f.fillRect(at(R)-(O>>1),at(I)-(O>>1),O,O),f.fillStyle=nt.rockL,f.fillRect(at(R)-(O>>1),at(I)-(O>>1),Math.max(1,O>>1),1)}const g=u.map(S=>({t:S,a:S.a+h.t*.3})).sort((S,_)=>Math.cos(S.a)+Math.sin(S.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:S,a:_}of g){const w=[];for(let P=0;P<=18;P++){const R=P/18,I=i*(.92-.42*R*R),O=_+Math.sin(m*2+S.ph+R*3)*.12*R,k=Math.sin(R*Math.PI*.8)*1.9*p-Math.max(0,R-.8)*1.2*p;w.push(T(r+Math.cos(O)*I,o+Math.sin(O)*I,Math.max(0,k)))}_s(f,w,15*p+2,3)}const x=t.ended?0:Math.min(1,Math.max(0,(h.t-.15)/.35)),[b,v]=T(r,o,.3);zx(f,b,v,x,m)}}),tt(Bf(e)?6:2)}Z.pulpo_R=e=>{if(e.type==="channel"){Ox(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){A({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[s,a]=T(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=nt.mag,vr(o,s,a,Ur(r)*(.25+.75*l),48,3,i*3),o.fillStyle=nt.bioL,vr(o,s,a,Ur(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*qe,s=r*y(.6,1);z(t+Math.cos(i)*s,n+Math.sin(i)*s,.2,-Math.cos(i)*s*1.6,-Math.sin(i)*s*1.6,.3,.55,o%2?nt.inkV:nt.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Uu.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=M.T),Uu.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)z(t+y(-.6,.6),n+y(-.6,.6),.2,y(-1,1),y(-1,1),y(.5,1.5),.6,i%2?nt.ink:nt.inkV,4,2,!1);return}A({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.3);if(s<.35){const u=at(30*(1-s/.35))+2;i.fillStyle=nt.bioL,i.fillRect(a-u,l-1,u*2,3),i.fillRect(a-1,l-u,3,u*2)}else{const u=(s-.35)/.65;i.globalAlpha=1-u,i.fillStyle=nt.mag,vr(i,a,l+20,Ur(r)*u,56,4),i.fillStyle=nt.bio,vr(i,a,l+20,Ur(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const s=Math.random()*qe,a=y(2,5);z(t,n,.3,Math.cos(s)*a,Math.sin(s)*a,y(1.5,3.5),y(.5,.9),[nt.ink,nt.inkV,nt.bio,nt.mag][i%4],i%3?3:4,9,i%4>1,.94)}tt(Bf(e)?8:3)}};Ce.pulpo_A=(e,t,n,r,o,i)=>{const s=7+Math.sin(i*18)*1.2,a=Math.cos(o),l=Math.sin(o);e.fillStyle=nt.ink,We(e,n-a*11,r-l*11,3,3,1),We(e,n-a*18,r-l*18,2,2,1),e.fillStyle=nt.ink,We(e,n,r,s+1,s*.8+1,2),e.fillStyle=nt.inkV,We(e,n,r,s-1,s*.8-1,2),e.fillStyle=nt.inkL,e.fillRect(at(n-3),at(r-4),3,2),e.fillStyle=nt.bio,e.fillRect(at(n+2),at(r+1),2,2),Math.random()<.3&&z(t.x,t.y,t.z||.45,0,0,-.2,.35,nt.ink,2,5,!1)};Te.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*qe;A({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[s,a]=T(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=nt.ink,We(o,s,a,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*qe,c=(u%2?13:19)*l;o.fillStyle=nt.ink,Ed(o,[s,a],[s+Math.cos(f)*c,a+Math.sin(f)*c*.75],4),o.fillStyle=nt.inkV,o.fillRect(at(s+Math.cos(f)*(c+4))-2,at(a+Math.sin(f)*(c+4)*.75)-2+i*10,4,4)}o.fillStyle=nt.bio,o.fillRect(at(s-3),at(a-2),2,2),o.fillRect(at(s+4),at(a+2),2,2)}});for(let o=0;o<6;o++)z(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(.8,2),.4,o%3?nt.ink:nt.bio,2,8,o%3===0)};const Ct=Math.round,ur=Math.PI*2,pt={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},$l=e=>e*N.HW*Math.SQRT2;function br(e,t,n,r){r=Math.max(1,Ct(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(Ct(t[0]+(n[0]-t[0])*a/i-s),Ct(t[1]+(n[1]-t[1])*a/i-s),r,r)}function ni(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(Ct(t-l),Ct(n+s),Math.max(1,Ct(l*2)),i)}}function ku(e,t,n,r,o,i){const s=t[0].length,a=t.length,l=Ct(n-s*o/2),u=Ct(r-a*o/2);for(const f in i){e.fillStyle=i[f];for(let c=0;c<a;c++)for(let h=0;h<s;h++)t[c][h]===f&&e.fillRect(l+h*o,u+c*o,o,o)}}function Mi(e,t,n,r,o,i,s=0,a=0){for(let l=0;l<o;l++){if(a&&l%a===0)continue;const u=s+l/o*ur;e.fillRect(Ct(t+Math.cos(u)*r-i/2),Ct(n+Math.sin(u)*r*.5-i/2),i,i)}}const Li=new Map;function Fx(e){if(Li.has(e))return!1;if(Li.size>300)for(const[t,n]of Li)M.T-n>4&&Li.delete(t);return Li.set(e,M.T),!0}function Ex(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Ae(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const n0=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],Lx=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Dd(e,t,n,r){ku(e,n0,t+1,n+1,r,{g:pt.deep,v:pt.deep}),ku(e,n0,t,n,r,{g:pt.pad,v:pt.moss})}function Ux(e,t){const n=Math.random()*6;A({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,s]=T(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=pt.waterD,Mi(r,i,s,8+o*14,10,2,n,3),Dd(r,i,s+Ct(Math.sin(o*9+n)),o<.55?2:1)}})}function kx(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),s=l=>[t+o*l,n+i*l];e.fillStyle=pt.ink,br(e,s(-11),s(11),5),e.fillStyle=pt.moss,br(e,s(-8),s(-1),3),e.fillStyle="#d8e2ea",br(e,s(0),s(8),3),e.fillStyle="#ffffff",br(e,s(7),s(11),2);const a=s(-11);e.fillStyle="#c8a040",e.fillRect(Ct(a[0]-2),Ct(a[1]-2),4,4),e.fillStyle=pt.ink,e.fillRect(Ct(a[0]-1),Ct(a[1]-1),2,2)}function Dx(e,t){A({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=T(e,t);n.globalAlpha=1-r,n.fillStyle=pt.foam,Mi(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=pt.water,Mi(n,o,i,3+r*16,10,2)}}),A({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=T(e,t,.5),s=Ct(12*(1-r))+2;n.fillStyle=pt.padL,n.fillRect(o-s,i-1,s*2,3),n.fillRect(o-1,i-s,3,s*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*ur,o=y(.8,2);z(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,y(1.5,3),.5,n%3?pt.water:pt.padL,2,9,!1,.95)}}const Ui=new Map;function Xx(e){let t=Ui.get(e.id);if(!t&&(t={p:[],drop:0,seen:M.T},Ui.set(e.id,t),Ui.size>40))for(const[n,r]of Ui)M.T-r.seen>2&&Ui.delete(n);return t.seen=M.T,t}Z.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;A({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,s){const[a,l]=T(r,o,.55),u=Ct(9*(1-s))+2;i.fillStyle=pt.pad;for(let f=-u;f<=u;f+=2){const c=u-Math.abs(f);i.fillRect(a-c,l+f,c*2+1,2)}i.fillStyle="#ffffff",i.fillRect(a-u-3,l,u*2+6,1),i.fillRect(a,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)z(r,o,.5,t*y(2,4)+y(-.7,.7),n*y(2,4)+y(-.7,.7),y(.6,1.6),.4,i%2?pt.water:pt.padL,2,6,!1,.9)};Ce.rana_Q=(e,t,n,r,o,i)=>{const s=t.z||.45,a=Xx(t);a.p.unshift([t.x,t.y]),a.p.length>7&&(a.p.length=7),i-a.drop>.065&&(a.drop=i,Ux(t.x,t.y)),dt(!0);const l=Ot();for(let u=1;u<a.p.length;u++)l.globalAlpha=.75*(1-u/a.p.length),l.fillStyle=u<3?pt.padL:pt.pad,br(l,T(a.p[u-1][0],a.p[u-1][1],s),T(a.p[u][0],a.p[u][1],s),Math.max(2,7-u));l.globalAlpha=1,dt(!1),kx(e,n,r,i*26);for(const u of Ex(t))Fx("rq"+t.id+":"+u.id)&&Dx(u.x,u.y)};function Gx(e,t,n){const r=Array.from({length:5},(i,s)=>({a:s/5*ur+y(-.3,.3),d:n*y(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,s)=>({a:s/12*ur,h:y(26,44),w:Math.random()<.5?4:6}));A({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,s,a){if(!a.fired){a.fired=!0,tt(4),eo({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let c=0;c<34;c++){const h=Math.random()*ur,d=y(1,3.2);z(e+Math.cos(h)*.3,t+Math.sin(h)*.3,.15,Math.cos(h)*d,Math.sin(h)*d,y(2.5,5),y(.5,.8),c%4?pt.foam:pt.water,3,12,!1,.97)}for(let c=0;c<6;c++)z(e+y(-.6,.6),t+y(-.6,.6),.1,y(-.4,.4),y(-.4,.4),y(1,2),.7,pt.mud,4,8,!1)}const[l,u]=T(e,t),f=$l(n);i.globalAlpha=.35*(1-s),i.fillStyle=pt.waterD,ni(i,l,u,f*.75,f*.375,2);for(let c=0;c<3;c++){const h=s*1.3-c*.15;h<=0||h>=1||(i.globalAlpha=1-h,i.fillStyle=c===0?pt.foam:pt.water,Mi(i,l,u,f*(.2+h*.95),30,3,c,c===0?0:5))}i.globalAlpha=Math.min(1,(1-s)*2.5);for(const c of r){const h=$l(c.d)*(.6+s*.4);Dd(i,l+Math.cos(c.a)*h,u+Math.sin(c.a)*h*.5+Math.sin(s*10+c.ph)*1.5,2)}s>.08&&ku(i,Lx,l,u-4,s<.2?2:3,{g:pt.moss,p:pt.pink,P:pt.pinkL,y:pt.eye})}}),A({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,s){const[a,l]=T(e,t),u=$l(n)*(.35+s*.25),f=Math.sin(Math.PI*Math.min(1,s*1.2));i.globalAlpha=Math.min(1,(1-s)*2);for(const c of o){const h=a+Math.cos(c.a)*u,d=l+Math.sin(c.a)*u*.5,m=Ct(c.h*f),p=Math.cos(c.a)*s*10;m<2||(i.fillStyle=pt.waterD,i.fillRect(Ct(h-c.w/2+p*.5),Ct(d-m),c.w,m),i.fillStyle=pt.water,i.fillRect(Ct(h-c.w/2+p*.5),Ct(d-m),c.w-2,m-2),i.fillStyle=pt.foam,i.fillRect(Ct(h-c.w/2+p-1),Ct(d-m-3),c.w+2,4))}}})}Z.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,s=1.7,a=r-t,l=o-n,u=Math.hypot(a,l)||1;A({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,c){const[h,d]=T(t,n);f.globalAlpha=1-c,f.fillStyle=pt.waterD,Mi(f,h,d,10+c*34,18,3,0,3),f.fillStyle=pt.foam,Mi(f,h,d,6+c*22,12,2,.3,4)}});for(let f=0;f<12;f++)z(t,n,.15,-a/u*y(1,2.5)+y(-.8,.8),-l/u*y(1,2.5)+y(-.8,.8),y(1.5,3),.5,f%3?pt.mud:pt.water,3,9,!1);A({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,c){const h=Math.min(1,c*(i+.25)/i),d=Math.max(0,h-.45),m=c>.75?(1-c)*4:1;for(let p=d;p<=h;p+=.05){const[g,x]=T(t+a*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,h-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=pt.deep,f.fillRect(Ct(g)-3,Ct(x)-3,6,6),f.fillStyle=b>.7?pt.padL:pt.pad,f.fillRect(Ct(g)-2,Ct(x)-2,4,4)}}}),A({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,c,h){h.go||(h.go=!0,Gx(r,o,s))}})};Z.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,s)=>{const a=s/9*ur+y(-.3,.3),l=s===0?0:y(.3,.85);return{x:t+Math.cos(a)*l,y:n+Math.sin(a)*l,r:y(14,22),z:y(.15,.6),up:y(.2,.5),col:[pt.smokeA,pt.smokeB,pt.smokeC][s%3],dl:y(0,.12)}}),o=[0,3,6].map((i,s)=>({p:r[i+1],t0:.15+s*.1,blink:y(.3,.6)}));A({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.2),u=Ct(14*(1-s))+3;i.fillStyle="#fff6c0",i.fillRect(a-u,l-2,u*2,4),i.fillRect(a-2,l-u,4,u*2),i.fillStyle=pt.padL,i.fillRect(a-u/2,l-u/2,u,u)}}),A({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,s){const a=s*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(a-l.dl)/1.3));if(u<=0)continue;const[f,c]=T(l.x,l.y,l.z+l.up*u),h=Ct(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",ni(i,f+2,c+3,h,h*.8,3),i.fillStyle=l.col,ni(i,f,c,h,h*.8,3),i.fillStyle="#c8d4b0",ni(i,f-h*.3,c-h*.35,h*.35,h*.25,2)}for(const l of o){const u=a-l.t0;if(u<0||u>.95)continue;const[f,c]=T(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const h=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=Ct(f+d*6)-3,p=Ct(c)-3;if(i.fillStyle=pt.deep,i.fillRect(m-1,p-1,8,h?3:7),h){i.fillStyle=pt.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=pt.eye,i.fillRect(m,p,6,5),i.fillStyle=pt.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const s=Math.random()*ur,a=y(1,2.6);z(t,n,.3,Math.cos(s)*a,Math.sin(s)*a,y(1,2.5),.6,i%2?pt.ink:pt.moss,2,7,!1,.92)}};function Nx(e,t,n,r){A({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const s=T(e,t,.35),a=T(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?pt.ink:pt.moss;for(let c=u;c<=l;c+=.03){const h=Ct((2+8*Math.sin(Math.PI*c))*(1-u*.6))+(f?0:3),d=s[0]+(a[0]-s[0])*c,m=s[1]+(a[1]-s[1])*c+Math.sin(c*14)*1.5;o.fillRect(Ct(d-h/2),Ct(m-h/2),h,h)}}}});for(let o=0;o<10;o++){const i=Math.random();z(e+(n-e)*i,t+(r-t)*i,.35,y(-.6,.6),y(-.6,.6),y(.2,1),.5,pt.ink,3,6,!1)}}function r0(e,t,n,r,o,i,s){const a=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?pt.ink:f===1?"#b8ffd0":"#ffffff";const c=f===0?2:0,h=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*s,p=Math.max(1,Ct(h*(1-Math.abs(d/u*2-1))));e.fillRect(Ct(t+a*m*o/2-p/2+c),Ct(n+l*m*o/2-p/2+c),p,p)}}}function Bx(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+y(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));A({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const s=i*.5,[a,l]=T(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.3)continue;const c=Math.min(1,f/.05),h=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,h),r0(o,a+u.ox,l+u.oy,u.a,u.len,Ct(6*h)+1,c),r0(o,a+u.ox,l+u.oy,u.a+Math.PI/2,u.len,Ct(6*h)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),A({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const s=i*.4,[a,l]=T(e,t,.5);for(const u of n){const f=s-u.t0;if(f<0||f>.1)continue;const c=Ct(16*(1-f/.1))+2;o.fillStyle=pt.padL,o.fillRect(a+u.ox-c,l+u.oy-c,c*2,c*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*ur,i=y(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:y(5,11),drips:[y(-1,1),y(-1,1),y(-1,1)]}});A({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const s of r){const[a,l]=T(e+s.dx,t+s.dy),u=s.r*Math.min(1,i*12);o.fillStyle=pt.inkP,ni(o,a,l,u,u*.5,2),o.fillStyle=pt.ink,ni(o,a-1,l-1,u*.6,u*.3,2);for(const f of s.drips)o.fillRect(Ct(a+f*u*1.8),Ct(l+f*u*.6),3,2);o.fillStyle=pt.moss,o.fillRect(Ct(a+u*.4),Ct(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*ur,s=y(1.5,4.5);z(e,t,.5,Math.cos(i)*s,Math.sin(i)*s,y(1,3),y(.4,.7),o%5?pt.ink:pt.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*ur;z(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,pt.padL,2,0,!0)}tt(8)}Z.rana_R=e=>{if(e.type==="blink"){Nx(e.x,e.y,e.ex??e.x,e.ey??e.y);return}Bx(e.x,e.y)};Te.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;A({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[s,a]=T(t,n,.5),l=Math.min(1,i*4),u=[s-9*r,a-3],f=[s-2*r,a+6],c=[s+13*r,a-11];o.globalAlpha=i<.5?1:(1-i)*2;const h=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?h:[f[0]+(c[0]-f[0])*(l-.35)/.65,f[1]+(c[1]-f[1])*(l-.35)/.65];o.fillStyle=pt.moss,br(o,u,h,5),l>=.35&&br(o,f,d,5),o.fillStyle="#ffffff",br(o,u,h,2),l>=.35&&br(o,f,d,2)}});for(let o=0;o<5;o++)z(t,n,.45,y(-1.2,1.2),y(-1.2,1.2),y(1,2.2),.35,o%2?pt.water:pt.padL,2,8,!1)};const $x="#7a879c",Wx="#363e50",Hx="#c9d3e2",o0="#e8b858",Vx="#ffa040",Xd="#f2e8d2",gs="#cdbb9a",$f="#a08f72",Gd="#6f6250",Si="#33241a",qx="#8a7356",Nd="#9a948a",Bd="#7a7468",$d="#5e584e",Yx="#c4beb2",Kx="#ffe2a0",jx="#d89a3a",Qx="#fff8e6",Zx="#ff5a1a",me=Math.round,Wl=Math.PI*2;function Ge(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(me(t),me(n),r,o)}function Bs(e,t,n,r,o,i,s){const a=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=s;for(let l=0;l<=a;l++)e.fillRect(me(t+(r-t)*l/a-i/2),me(n+(o-n)*l/a-i/2),i,i)}function i0(e,t,n,r,o){const[i,s]=T(t,n),a=r*N.HW*Math.SQRT2,l=a*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=a*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(me(i-f),me(s+u),me(f*2),2)}}function Wd(e,t){const n=(e-t)*N.HW,r=(e+t)*N.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Hd=e=>{const t=ht(e);return t&&!t.dead&&!Ae(t)?t:null},ka=()=>[Nd,Bd,$d,$f][Math.random()*4|0];function Jx(e,t,n,r,o){if(t=me(t)-6,n=me(n)-5,Ge(e,t,n,12,10,Wx),Ge(e,t+1,n+1,10,8,$x),Ge(e,t+1,n+1,10,2,Hx),Ge(e,t+2,n+6,2,2,o),Ge(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,Ge(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const t3=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],e3=[Kx,jx,Qx,Zx];function Hl(e,t,n,r,o){t=me(t),n=me(n);for(const[i,s,a,l,u]of t3){const f=o>0?i:-i-a;e.fillStyle=e3[u],e.fillRect(t+f*r,n+s*r,a*r,l*r)}}Te.rino=e=>{A({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=T(e.x,e.y,.4),i=me(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let s=0;s<=i;s++){const a=Math.PI*.75-s*.16;Ge(t,r-4+Math.cos(a)*16-1,o+6-Math.sin(a)*18-1,s>i-3?2:3,s>i-3?2:3,s>i-2?"#ffffff":Xd)}}});for(let t=0;t<3;t++)z(e.x,e.y,.3,y(-1.5,1.5),y(-1.5,1.5),y(1.5,3),.5,ka(),3,10,!1,.95);for(let t=0;t<2;t++)z(e.x+y(-.2,.2),e.y+y(-.2,.2),.1,y(-.4,.4),y(-.4,.4),.5,.5,gs,5,0,!1,.9);tt(1.5)};Z.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,s=Math.hypot(o,i)||1,a=-i/s,l=o/s,u=o/s,f=i/s,[c,h]=Wd(o,i),d=Math.max(4,Math.ceil(s*4)),m=Array.from({length:d+1},(v,S)=>y(-.06,.06)+(S%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:y(.15,.35)}:null),g=Array.from({length:8},(v,S)=>({k:(S+.5)/8,o:y(-.35,.35),r:Array.from({length:4},()=>[y(-10,6),y(-8,2),me(y(6,12)),me(y(5,8)),[gs,$f,gs,Gd][Math.random()*4|0]])}));let x=0,b=!1;A({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,P=Math.min(1,w/r),R=Math.floor(P*d);v.globalAlpha=.8*Math.min(1,(_.dur-w)/.6);for(const I of[-.3,.3]){const O=I>0?1:-1;let[k,G]=T(e.x+a*I,e.y+l*I);for(let $=1;$<=R;$++){const ot=$/d,vt=I+m[$]*O,[F,E]=T(e.x+o*ot+a*vt,e.y+i*ot+l*vt);Bs(v,k,G+1,F,E+1,2,qx),Bs(v,k,G,F,E,2,Si);const L=p[$];if(L&&L.s===O){const[D,X]=T(e.x+o*ot+a*(vt+O*L.l)+u*L.l*.5,e.y+i*ot+l*(vt+O*L.l)+f*L.l*.5);Bs(v,F,E,D,X,1,Si)}k=F,G=E}}}}),A({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(v,S,_){const w=S*_.dur,P=Math.min(1,w/r);for(;x<18*P;){x++;const R=Math.random()*P;z(e.x+o*R+y(-.3,.3),e.y+i*R+y(-.3,.3),.1,-u*y(.5,2)+y(-1,1),-f*y(.5,2)+y(-1,1),y(2,4),y(.5,.8),ka(),3,12,!1,.95)}if(w>=r&&!b){b=!0,tt(5);for(let R=0;R<12;R++){const I=Math.atan2(f,u)+y(-.9,.9),O=y(2,4.5);z(t+u*.5,n+f*.5,.2,Math.cos(I)*O,Math.sin(I)*O,y(2,4),y(.5,.8),ka(),3,12,!1,.95)}}for(const R of g){const I=w-R.k*r;if(I<0||I>.9)continue;const O=I/.9,k=1+O*1.2,[G,$]=T(e.x+o*R.k+a*R.o,e.y+i*R.k+l*R.o,.15+O*.5);v.globalAlpha=.6*(1-O);for(const ot of R.r)Ge(v,G+ot[0]*k,$+ot[1]*k,me(ot[2]*k),me(ot[3]*k),ot[4])}}}),A({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(v,S,_){const w=Hd(e.uid);if(!w)return;const P=S*_.dur;v.globalAlpha=P>r?Math.max(0,1-(P-r)/.08):1;const[R,I]=T(w.x+u*.6,w.y+f*.6,.45);for(let G=0;G<6;G++){const $=7-G;Ge(v,R+c*G*2.5-$/2,I+h*G*2.5-$/2,$,$,G<2?Xd:"#ffffff")}const[O,k]=T(w.x,w.y,.5);v.globalAlpha*=.6;for(let G=0;G<5;G++){const $=(G-2)*9,ot=24+G*13%3*10;Bs(v,O-h*$-c*26,k+c*$-h*26,O-h*$-c*(26+ot),k+c*$-h*(26+ot),1,"#fff6e0")}}})};Z.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const s=i<5;return{a:s?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:s,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,s,a)=>{const l=Hd(e.uid);if(!l)return;const u=s*a.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[c,h]=T(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let v=0;v<3;v++)z(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,y(-2,2),y(-2,2),y(1,2.5),.3,v?Vx:o0,2,8,!0,.9)}const p=(1-m)*(1-m)*46,g=c+Math.cos(d.a)*30,x=h+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,Jx(i,g+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,me((M.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":o0)}};A({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),A({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),tt(3)};Z.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Wl+y(-.08,.08),j:y(.9,1.08),w:me(y(4,7)),h:me(y(3,6)),col:[Nd,Bd,$d][i%3]}));A({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const s=i*1.4,a=Math.min(1,s/.45),l=t*(1-(1-a)*(1-a)),u=Math.min(1,(1.4-s)/.5);o.globalAlpha=.45*u,i0(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,i0(o,e.x,e.y,.4,"#24180e");for(const[f,c,h]of[[.45,Si,2],[.7,Si,2],[.95,gs,3]]){o.globalAlpha=(1-a)*.8;for(let d=0;d<36;d++){const m=d/36*Wl,[p,g]=T(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);Ge(o,p-h/2,g-1,h,2,c)}}for(const f of r){const[c,h]=T(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-a)*12*Math.sin(a*Math.PI+.3);o.globalAlpha=.35*u,Ge(o,c-f.w/2-1,h,f.w+2,2,"#000000"),o.globalAlpha=u,Ge(o,c-f.w/2,h-f.h-d,f.w,f.h,f.col),Ge(o,c-f.w/2,h-f.h-d,f.w,1,Yx)}}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[s,a]=T(e.x,e.y,.05),l=me(30+110*i);o.globalAlpha=1-i,Ge(o,s-l,a-1,l*2,2,"#fff2d0"),Ge(o,s-l*.6,a-3,me(l*1.2),1,"#ffd890");for(const u of[-1,1])Ge(o,s+u*(l+4)-1,a-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=y(0,Wl),s=t*y(1.5,2.5);z(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*s,Math.sin(i)*s,y(3,6),y(.5,.9),ka(),Math.random()<.3?4:3,14,!1,.96)}tt(8)};Z.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,s=1,a=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const c=Math.min(1,Math.max(0,(f-u.del)/.6)),h=.4+(o-.4)*(1-(1-c)*(1-c));return[e.x+Math.cos(u.a)*h,e.y+Math.sin(u.a)*h,c,h]};A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const c=f*1.7,h=Math.min(1,(1.7-c)/.6);u.globalAlpha=.2*h,u.fillStyle="#4a3420",u.beginPath();let[d,m]=T(e.x,e.y);u.moveTo(me(d),me(m));for(let p=0;p<=12;p++){const g=r-i+2*i*p/12;[d,m]=T(e.x+Math.cos(g)*o,e.y+Math.sin(g)*o),u.lineTo(me(d),me(m))}u.closePath(),u.fill(),u.globalAlpha=.7*h;for(const p of a){const[,,,g]=l(p,c),x=p.a+Math.PI/2;for(let b=.6;b<g;b+=.55){const v=Math.round(b/.55)%2?.12:-.12,[S,_]=T(e.x+Math.cos(p.a)*b+Math.cos(x)*v,e.y+Math.sin(p.a)*b+Math.sin(x)*v);Ge(u,S-4,_-1,3,3,Si),Ge(u,S+1,_-1,3,3,Si)}}}}),A({type:"custom",layer:"top",add:!0,dur:s,x:e.x,y:e.y,draw(u,f){const c=f*s;for(const h of a){const[d,m,p]=l(h,c);if(c<h.del)continue;const g=.85*Math.min(1,(c-h.del)/.08)*Math.max(0,1-Math.max(0,c-h.del-.45)/.4);if(g<=0)continue;const[x,b]=T(d,m,.55),[v]=Wd(Math.cos(h.a),Math.sin(h.a)),S=v>=0?1:-1,_=p<.5?3:4,[w,P]=T(e.x,e.y,.55),R=x-w,I=b-P;u.globalAlpha=g*.18,Hl(u,x-R*.35,b-I*.35,_,S),u.globalAlpha=g*.35,Hl(u,x-R*.17,b-I*.17,_,S),u.globalAlpha=g,Hl(u,x,b,_,S)}}});for(let u=0;u<40;u++){const f=r+y(-i,i),c=y(.4,o*.8),h=y(2,5);z(e.x+Math.cos(f)*c,e.y+Math.sin(f)*c,.1,Math.cos(f)*h,Math.sin(f)*h,y(.5,1.5),y(.5,.9),[gs,$f,Gd][u%3],4,3,!1,.9)}tt(10)};const B=Math.round,un=Math.PI*2,Du=e=>e*N.HW*Math.SQRT2,q={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},ja=e=>!!(M.game&&M.game.player&&e.uid===M.game.player.id);function ns(e,t,n,r){r=Math.max(1,B(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(B(t[0]+(n[0]-t[0])*a/i-s),B(t[1]+(n[1]-t[1])*a/i-s),r,r)}function Mn(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let s=-o;s<o;s+=i){const a=(s+i/2)/o,l=r*Math.sqrt(Math.max(0,1-a*a));l>=.5&&e.fillRect(B(t-l),B(n+s),Math.max(1,B(l*2)),i)}}function Vd(e,t,n,r=99){let o=null,i=r;for(const s of M.game?M.game.units:[]){if(s.dead||s.heroKey!==n)continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}function n3(e,t,n,r=1.6){let o=null,i=r;for(const s of M.game?M.game.units:[]){if(s.dead||s.team===n||s.kind!=="hero")continue;const a=Math.hypot(s.x-e,s.y-t);a<i&&(i=a,o=s)}return o}const Qa=e=>T(e.x,e.y,.5);function Za(e,t,n,r,o,i){const s=n[0]-t[0],a=n[1]-t[1],l=Math.hypot(s,a)||1,u=-a/l,f=s/l,c=Math.max(2,Math.ceil(l/3)),h=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+s*d+u*p,t[1]+a*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?q.tongueD:d===1?q.tongue:q.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=c;p++){const g=p/c,x=h(g),b=d===2?m:Math.max(2,B(m*(1-g*.3)));e.fillRect(B(x[0]-b/2),B(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=h(d/l),p=B(m[0]),g=B(m[1]);e.fillStyle=q.ink,e.fillRect(p-2,g-5,5,10),e.fillStyle=q.iron,e.fillRect(p-1,g-4,3,8),e.fillStyle=q.ironL,e.fillRect(p-1,g-4,1,3)}}const Vl=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function Wf(e,t,n,r,o=1.5){const i=Math.cos(r),s=Math.sin(r),a=d=>[t+(i*d[0]-s*d[1])*o,n+(s*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?q.ink:d===1?q.iron:q.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<Vl.length;p++)ns(e,a(Vl[p-1]),a(Vl[p]),m)}const l=a([-1.5,5.5]),u=a([-4,3]);e.fillStyle=q.ink,ns(e,l,u,4),e.fillStyle=q.ironL,ns(e,l,u,2),e.fillStyle=q.rust;const f=a([7.5,5]),c=a([-3,0]);e.fillRect(B(f[0]),B(f[1]),2,2),e.fillRect(B(c[0]),B(c[1])-1,3,2);const h=a([-12.5,0]);e.fillStyle=q.ink,e.fillRect(B(h[0])-5,B(h[1])-5,10,10),e.fillStyle=q.rust,e.fillRect(B(h[0])-4,B(h[1])-4,8,8),e.fillStyle=q.ink,e.fillRect(B(h[0])-2,B(h[1])-2,4,4)}const Ho=[];function r3(e){let t=null,n=1.3;for(const r of Ho){if(r.done||M.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const s=Math.abs(o*r.uy-i*r.ux);s<n&&(n=s,t=r)}return t}function o3(e,t,n){A({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=ht(e);if(!i)return;const s=Qa(i),a=T(t,n,.45),l=1-o*o,u=[s[0]+(a[0]-s[0])*l,s[1]+(a[1]-s[1])*l];l>.06&&Za(r,s,u,M.T,4*l,3*l),Wf(r,u[0],u[1],Math.atan2(u[1]-s[1],u[0]-s[0]),1.5-o*.4)}})}function i3(e,t){A({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=T(e,t);n.globalAlpha=1-r,n.fillStyle=q.slimeL;for(let s=0;s<10;s++){const a=s/10*un+r;n.fillRect(B(o+Math.cos(a)*(8+r*26))-1,B(i+Math.sin(a)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)z(e,t,.5,y(-1.2,1.2),y(-1.2,1.2),y(1,2.4),.45,n%2?q.slime:q.tongueL,3,9,!1)}function s3(e){let t=null;for(const c of Ho)!c.pulled&&c.team===e.team&&M.T-c.t<2.2&&(!t||c.t>t.t)&&(t=c);t&&(t.pulled=!0,t.done=!0);const n=t?ht(t.uid):Vd(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,s=(e.ey??e.y)-e.y,a=Math.hypot(i,s)||1,l=-s/a*.17,u=i/a*.17,f=[];A({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(c,h,d){const m=ht(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const g=1-(d.t-p[2])/1.1;if(!(g<=0)){c.globalAlpha=g*.9;for(const x of[-1,1]){const[b,v]=T(p[0]+l*x,p[1]+u*x);c.fillStyle=q.mud,c.fillRect(B(b)-2,B(v)-1,5,3),c.fillStyle=q.slime,c.fillRect(B(b)-1,B(v)-2,2,1)}}}}}),A({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(c,h,d){const m=ht(o),p=r?ht(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){i3(m.x,m.y),d.t=d.dur+1;return}const x=Qa(p),b=T(m.x,m.y,.5);Za(c,x,b,M.T,1.2,2),Wf(c,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),tt(ja({uid:r})?5:2)}Z.sapo_Q=e=>{if(e.type==="hook_pull"){s3(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let s=Ho.length-1;s>=0;s--)M.T-Ho[s].t>3&&Ho.splice(s,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:M.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};Ho.push(r),A({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(s,a,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&M.T-r.lt>.12&&(r.done=!0,r.pulled||o3(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let s=0;s<10;s++)z(o,i,.5,t*y(1.5,3.5)+y(-.8,.8),n*y(1.5,3.5)+y(-.8,.8),y(.8,2),.45,s%3?q.slime:q.tongueL,2+s%2,8,!1);A({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(s,a){const[l,u]=T(o,i,.5),[f,c]=T(o+t,i+n,.5),h=f-l,d=c-u,m=Math.hypot(h,d)||1;s.globalAlpha=1-a,s.fillStyle=q.fat;for(let p=-1;p<=1;p++)ns(s,[l-d/m*p*7,u+h/m*p*7],[l+h*(.3+a*.5)-d/m*p*7,u+d*(.3+a*.5)+h/m*p*7],2)}})};Ce.sapo_Q=(e,t,n,r,o,i)=>{const s=r3(t);s&&(s.lx=t.x,s.ly=t.y,s.lt=M.T);const a=s?ht(s.uid):t.src||Vd(t.x,t.y,"sapo",11);a&&!a.dead&&Za(e,Qa(a),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),Wf(e,n,r,o),Math.random()<.3&&z(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?q.slime:q.tongueL,2,6,!1)};Z.sapo_Q_hit=e=>{const t=e.x,n=e.y;A({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,s]=T(t,n,.5);for(let l=0;l<10;l++){const u=l/10*un+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?q.fat:q.meatL,ns(r,[i+Math.cos(u)*5,s+Math.sin(u)*4],[i+Math.cos(u)*f,s+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const a=B(10*(1-o))+2;r.fillRect(i-a/2,s-a/2,a,a)}});for(let r=0;r<14;r++){const o=Math.random()*un,i=y(1,3);z(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3.5),y(.5,.8),[q.meat,q.meatL,q.fat,q.slime][r%4],r%3?3:4,11,!1,.95)}};const Xu=new Map;function qd(e){const t={ended:!1,endT:0};return Xu.set(e.uid+"_"+e.key,t),t}function Yd(e){const t=Xu.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=M.T),Xu.delete(e.uid+"_"+e.key)}function Da(e,t,n){const r=ht(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=M.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(M.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function a3(e){const t=qd(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,s=a=>{const l=ht(n);return l?[l.x,l.y]:[a.x,a.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(a,l,u){const f=Da(t,n,u);if(f<=0)return;const[c,h]=s(u),[d,m]=T(c,h),p=Du(o),g=M.T;a.globalAlpha=.22*f,a.fillStyle=q.gasD,Mn(a,d,m,p*.95,p*.475,3);for(let x=0;x<6;x++){const b=x/6*un+g*.25,v=p*(.4+.35*J(x+i));a.globalAlpha=.3*f,a.fillStyle=x%2?q.gas:q.gasD,Mn(a,d+Math.cos(b)*v,m+Math.sin(b)*v*.5,18+4*Math.sin(g*2+x),8,2)}for(let x=0;x<44;x++){const b=x/44*un-g*.4,v=p*(.95+.05*Math.sin(b*5+g*3));a.globalAlpha=.85*f,a.fillStyle=x%3?q.gas:q.gasL,a.fillRect(B(d+Math.cos(b)*v)-1,B(m+Math.sin(b)*v*.5)-1,3,3)}for(let x=0;x<5;x++){const b=g*1.3+x*.2,v=Math.floor(b),S=b-v,_=J(v*13+x+i)*un,w=p*(.15+.75*J(v*7+x*3+i)),P=d+Math.cos(_)*w,R=m+Math.sin(_)*w*.5;a.globalAlpha=f,a.fillStyle=S>.85?q.gasL:q.gas;const I=S>.85?4+(S-.85)*60:2+S*6;for(let O=0;O<8;O++){const k=O/8*un;a.fillRect(B(P+Math.cos(k)*I)-1,B(R+Math.sin(k)*I*.6)-1,2,2)}}}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(a,l,u){const f=Da(t,n,u);if(f<=0)return;const[c,h]=s(u),[d,m]=T(c,h),p=Du(o),g=M.T;for(let v=0;v<10;v++){const S=J(v*7.3+i),_=(g*.7+S)%1,w=v/10*un+S*2,P=p*(.15+.7*J(v*3.1+i)),R=d+Math.cos(w)*P,I=m+Math.sin(w)*P*.5;a.globalAlpha=f*Math.sin(_*Math.PI)*.9,a.fillStyle=v%2?q.gasL:q.gas;for(let O=0;O<7;O++)a.fillRect(B(R+Math.sin(O*.9+g*6+v)*4)-1,B(I-8-_*46-O*5),3,4)}const[x,b]=T(c,h,.9);for(let v=0;v<5;v++){const S=v*1.7+i,_=x+Math.sin(g*(3.1+v*.4)+S)*(20+v*7),w=b-v*4+Math.sin(g*(6.2+v*.3)+S*2)*10;a.globalAlpha=f,a.fillStyle=q.fly,a.fillRect(B(_),B(w),3,2),a.fillStyle="#eaf4ff";const P=((g*36|0)+v)%2;a.fillRect(B(_)-1,B(w)-1-P,2,1),a.fillRect(B(_)+2,B(w)-1-P,2,1)}}})}function Gu(e,t,n,r){A({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,s){const[a,l]=T(e,t),u=Du(n)*(.25+s*.8);i.globalAlpha=(1-s)*.9;for(let f=0;f<26;f++){const c=f/26*un,h=f%2?4:3;i.fillStyle=f%4?q.gas:q.gasL,i.fillRect(B(a+Math.cos(c)*u)-2,B(l+Math.sin(c)*u*.5)-1,h,3)}r&&(i.fillStyle=q.gasD,Mn(i,a,l-10-s*20,22*(1-s*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const s=Math.random()*un,a=y(.5,r?2.4:1.4);z(e,t,.4,Math.cos(s)*a,Math.sin(s)*a,y(.4,1.4),y(.6,1),i%2?q.gas:q.gasL,r?5:4,-.6,!1,.9)}}Z.sapo_W=e=>{if(e.type==="channel"){a3(e);return}const t=ht(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Gu(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(Yd(e),Gu(n,r,1.4,e.kind==="done"))};Z.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const s=ht(t);return s&&!s.dead?s:null};A({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,c]=T(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),h=B(15*Math.sin(Math.min(1,s*1.4)*Math.PI)+2);i.fillStyle=q.bellyD,Mn(i,f,c+1,h+2,h*.8+2,2),i.fillStyle=q.belly,Mn(i,f,c,h,h*.8,2),i.fillStyle="#ffffff",i.fillRect(B(f-h*.4),B(c-h*.5),3,2)}}),A({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l)return;const[u,f]=T(l.x,l.y);i.globalAlpha=1-s;for(let c=0;c<2;c++){const h=14+(s*1.2-c*.2)*52;if(!(h<14)){i.fillStyle=c?q.slime:q.belly;for(let d=0;d<22;d++){const m=d/22*un;i.fillRect(B(u+Math.cos(m)*h)-2,B(f+Math.sin(m)*h*.45)-1,4,3)}}}}}),A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,s,a){const l=o();if(!l||a.t>.2&&!(l.shield>0)||s>.97){if(!a.popped){a.popped=!0;const m=l?l.x:a.x,p=l?l.y:a.y;for(let g=0;g<16;g++){const x=g/16*un;z(m,p,.5,Math.cos(x)*y(1,2.6),Math.sin(x)*y(1,2.6),y(1,2.5),.5,g%2?q.slime:q.slimeL,3,9,!1)}}a.t=a.dur+1;return}const[f,c]=T(l.x,l.y,.45),h=M.T,d=s>.85?(1-s)/.15:Math.min(1,a.t/.15);i.globalAlpha=.35*d,i.fillStyle=q.belly,Mn(i,f,c+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*un,g=Math.sin(p*3+h*6+r)*2.5+Math.sin(p*5-h*4)*1.5,x=f+Math.cos(p)*(30+g),b=c+Math.sin(p)*(36+g);i.globalAlpha=.85*d,i.fillStyle=m%5===0?q.slimeL:q.slime,i.fillRect(B(x)-1,B(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*un+h*.6,g=f+Math.cos(p)*31,x=c+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=q.skinD,i.fillRect(B(g)-2,B(x)-2,5,5),i.fillStyle=q.wart,i.fillRect(B(g)-1,B(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(B(f-18),B(c-26),4,2),i.fillRect(B(f-21),B(c-23),2,4),Math.random()<.12&&z(l.x+y(-.25,.25),l.y+y(-.25,.25),.15,0,0,-.2,.5,q.slime,2,4,!1)}})};const l3=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function u3(e,t,n,r,o){e.globalAlpha=r;for(let a=0;a<36;a+=2){const l=56*Math.sqrt(1-Math.pow(a/36,2));e.fillStyle=a<4?q.skinD:a<12?q.skinL:q.skin,e.fillRect(B(t-l),B(n-a-2),B(l*2),2)}e.fillStyle=q.skinD;for(let a=0;a<7;a++)e.fillRect(B(t-36+J(a)*72),B(n-14-J(a+9)*16),4,3);for(const a of[-1,1]){const l=t+a*28,u=n-36+2;e.fillStyle=q.skin,Mn(e,l,u,12,10,2),e.fillStyle=q.eye,Mn(e,l,u-1,8,7,2),e.fillStyle=q.ink,e.fillRect(B(l-5+Math.sin(o*2)*1.5),B(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(B(l-4),B(u-6),2,2)}for(let a=0;a<9;a++){const l=t-40+a*10;e.fillStyle=q.ink,e.fillRect(B(l)-1,B(n)-1,7,8),e.fillStyle=q.teeth,e.fillRect(B(l),B(n),5,6-a%2*2)}}function f3(e){const t=qd(e),n=e.uid,r=(e.dur||3)+.5,o=ht(n),i=e.team||o&&o.team,s=n3(e.x,e.y,i,1.6),a=s?s.id:0,l=u=>{const f=a?ht(a):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};A({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=Da(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=T(d,m),x=Math.min(1,c.t/.25);u.globalAlpha=h,u.fillStyle=q.skinD,Mn(u,p,g+2,58*x,27*x,2),u.fillStyle=q.mouth,Mn(u,p,g,50*x,22*x,2),u.fillStyle=q.mouthM,Mn(u,p,g+3,38*x,15*x,2),u.fillStyle=q.tongue,Mn(u,p,g+6,24*x,8*x,2),u.fillStyle=q.tongueL,u.fillRect(B(p-10*x),B(g+3),B(8*x),2)}}),A({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,c){const h=Da(t,n,c);if(h<=0)return;const[d,m]=l(c),[p,g]=T(d,m),x=M.T,b=Math.min(1,c.t/.25),v=t.ended?0:l3(c.t),S=g-4-b*(22+v*70);for(let w=0;w<2;w++){const[,P]=T(d,m,.3+w*.28),R=21-2*Math.sin(x*10+w),I=8;for(let O=0;O<=14;O++){const k=.12*Math.PI+O/14*.76*Math.PI,G=p+Math.cos(k)*R,$=P+Math.sin(k)*I;u.globalAlpha=h,u.fillStyle=q.tongueD,u.fillRect(B(G)-3,B($)-3,6,6),u.fillStyle=q.tongue,u.fillRect(B(G)-2,B($)-2,4,4)}}const _=ht(n);if(_&&!_.dead){const w=Qa(_),P=T(d,m,.45);if(Math.hypot(P[0]-w[0],P[1]-w[1])>18){u.globalAlpha=h,Za(u,w,P,x,1,2);for(let R=0;R<5;R++){const I=(x*1.6+R/5)%1,O=P[0]+(w[0]-P[0])*I,k=P[1]+(w[1]-P[1])*I-3;u.fillStyle=q.meat,u.fillRect(B(O)-3,B(k)-3,6,6),u.fillStyle=q.meatL,u.fillRect(B(O)-2,B(k)-3,3,3)}}}u3(u,p,S,h*b,x),u.globalAlpha=h*b;for(let w=0;w<=26;w++){const P=w/26*Math.PI,R=p+Math.cos(P)*54,I=g+Math.sin(P)*25;u.fillStyle=q.skinD,u.fillRect(B(R)-4,B(I)-3,8,8),u.fillStyle=q.skin,u.fillRect(B(R)-3,B(I)-3,6,5),u.fillStyle=q.skinL,u.fillRect(B(R)-3,B(I)-3,6,1),w%3===1&&w>1&&w<25&&(u.fillStyle=q.ink,u.fillRect(B(R)-3,B(I)-10,6,8),u.fillStyle=q.teeth,u.fillRect(B(R)-2,B(I)-9,4,6))}Math.random()<.2&&z(d+y(-.4,.4),m+y(-.2,.2),.9,0,0,-.5,.5,q.slimeL,2,6,!1)}}),tt(ja(e)?6:2)}function c3(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*un,i=y(.8,2.2);z(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,y(1.5,3),.55,[q.meat,q.meatL,q.fat,q.slimeL][r%4],3,10,!1,.95)}tt(ja(n)?2.5:.6)}function h3(e,t,n){A({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,s]=T(e,t),a=o<.3?1:1-(o-.3)/.7;r.globalAlpha=a,r.fillStyle=q.skinD,Mn(r,i,s-18*a,58*a,30*a,2),r.fillStyle=q.skin,Mn(r,i,s-22*a,52*a,25*a,2),r.fillStyle=q.skinL,r.fillRect(B(i-30*a),B(s-40*a),B(60*a),3),r.fillStyle=q.ink,r.fillRect(B(i-40*a),B(s-10*a),B(80*a),3)}}),Gu(e,t,1.8,!0),tt(ja(n)?7:2)}Z.sapo_R=e=>{if(e.type==="channel"){f3(e);return}if(e.type==="channel_tick"){c3(e.x,e.y,e);return}if(e.type==="channel_end")if(Yd(e),e.kind==="done")h3(e.x,e.y,e);else for(let t=0;t<10;t++)z(e.x,e.y,.5,y(-1.2,1.2),y(-1.2,1.2),y(.5,1.5),.6,t%2?q.gas:q.slime,4,2,!1)};const ql=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Te.sapo=e=>{const t=e.x,n=e.y,r=e.uid?ht(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;A({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.5),u=s<.25?(1-s/.25)*30:0,f=3;i.globalAlpha=s<.6?1:(1-s)/.4;const c=ql[0].length,h=B(a-(o>0?c*f-6:6)),d=B(l-14-u),m={h:"#6a3a1e",B:q.ink,b:"#a8acb4",r:q.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let g=0;g<ql.length;g++)for(let x=0;x<c;x++)ql[g][x]===p&&i.fillRect(h+(o>0?x:c-1-x)*f,d+g*f,f,f)}if(s>.25){const p=(s-.25)/.75;i.fillStyle=q.fat,i.fillRect(B(a-10-p*16),B(l+6),B(8*(1-p))+1,2),i.fillRect(B(a+4+p*16),B(l+6),B(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)z(t,n,.45,y(-1.4,1.4),y(-1.4,1.4),y(1,2.4),.4,[q.meat,q.meatL,q.slime][i%3],3,10,!1)};const te=Math.round,zt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Xa(e,t,n,r,o){e.fillStyle=o,e.fillRect(te(t-r/2),te(n-r/2),r,r)}const xs=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function d3(e,t,n,r,o,i){const s=t.length,a=t[0].length,l=te(n-a*o/2),u=te(r-s*o/2);for(let f=0;f<s;f++)for(let c=0;c<a;c++){const h=i[t[f][c]];h&&(e.fillStyle=h,e.fillRect(l+c*o,u+f*o,o,o))}}function Kd(e,t,n,r,o){const i=te(t),s=te(n);o&&(e.fillStyle=o,e.fillRect(i-5,s-3,10,2),e.fillRect(i-7,s-1,14,2),e.fillRect(i-5,s+1,10,2)),e.fillStyle=r,e.fillRect(i-5,s-5,10,2),e.fillRect(i-5,s+3,10,2),e.fillRect(i-7,s-3,2,2),e.fillRect(i+5,s-3,2,2),e.fillRect(i-9,s-1,2,2),e.fillRect(i+7,s-1,2,2),e.fillRect(i-7,s+1,2,2),e.fillRect(i+5,s+1,2,2)}function Yl(e,t,n,r,o,i,s,a){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=a;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(te(t+(r-t)*f-s/2),te(n+(o-n)*f-s/2),s,s)}}const m3=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function jd(e,t,n,r,o,i,s,a){e.fillStyle=zt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=zt.teal,e.fillRect(t,n-o,r,te(o*.62)),e.fillStyle=zt.aqua,e.fillRect(t,n-o,r,te(o*.3)),e.fillStyle=zt.foam,e.fillRect(t+i,n-o-2+s,r,3),a&&(e.fillStyle=zt.white,e.fillRect(t+i*2,n-o-4+s,3,2))}Z.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=ht(e.uid);let i=1,s=0;if(o){const v=t-o.x,S=n-o.y,_=Math.hypot(v,S);_>.05&&(i=v/_,s=S/_)}const a=-s,l=i,u=a+l>=0?1:-1,f=(a-l)*N.HW,c=.13,h=Math.max(6,Math.ceil(Math.abs(f)*c)+2),d=(i-s)*N.HW,m=(i+s)*N.HH,p=Math.hypot(d,m)||1,g=te(d/p*3),x=te(m/p*2);A({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(v,S){const _=Math.min(1,S*3)*(S>.6?(1-S)/.4:1);it(t,n,r*.95,null,`rgba(18,80,110,${.32*_})`);for(let w=0;w<2;w++){const P=(S*2.4+w*.5)%1,R=r*.9*P;v.globalAlpha=_*(1-P);for(let I=0;I<22;I++){const O=I/22*6.283,[k,G]=T(t+Math.cos(O)*R,n+Math.sin(O)*R);Xa(v,k,G,2,zt.sea)}}v.globalAlpha=1}});const b={n:0,sp:!1};return A({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(v,S){const _=-r*.95+S*r*1.9,w=Math.sin(Math.min(1,S*1.08)*Math.PI),P=Math.sqrt(Math.max(0,r*r-_*_))+.25,R=Math.floor(P*2/c);for(let I=0;I<=R;I++){const O=u>0?-P+I*c:P-I*c,k=1-Math.abs(O)/P,G=.85+.15*Math.sin(O*9+S*24),$=te((8+30*Math.sqrt(Math.max(0,k)))*w*G/2)*2;if($<4)continue;const[ot,vt]=T(t+i*_+a*O,n+s*_+l*O);jd(v,te(ot-h/2),te(vt),h,$,g,x,(O*7.7+S*30|0)%3===0)}if(b.n<32&&w>.3)for(let I=0;I<2;I++){b.n++;const O=y(-P,P);z(t+i*_+a*O,n+s*_+l*O,.35*w,i*y(.8,2),s*y(.8,2),y(1,2.5),.45,Math.random()<.5?zt.foam:zt.sea,2,7,!1)}if(!b.sp&&S>.82){b.sp=!0;for(let I=0;I<14;I++){const O=y(-r*.6,r*.6);z(t+i*r*.8+a*O,n+s*r*.8+l*O,.2,i*y(1,3)+y(-.5,.5),s*y(1,3)+y(-.5,.5),y(2,4),.55,zt.aqua,3,9,!1)}tt(3)}}}),!0};function p3(e,t){A({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=T(e,t,.1),s=xs(r,.1,.6);for(let a=0;a<10;a++){const l=a*.628+r*11,u=r*58+a*4,f=18*(1-r*.5),c=Math.sin(l)>0;n.globalAlpha=s*(c?1:.45),Xa(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,c?3:2,a%2?zt.sea:zt.foam)}if(r>.45){n.globalAlpha=xs((r-.45)/.55,.2,.6);const a=te(i-72-(r-.45)*20),l=te(o);n.fillStyle=zt.lamp,n.fillRect(l-5,a-1,10,3),n.fillRect(l-1,a-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)z(e+y(-.3,.3),t+y(-.3,.3),.2,0,0,y(1.2,2.2),.8,Math.random()<.5?zt.sea:zt.foam,2,0,!0);return!0}Z.tortuga_W=e=>{if(e.type==="heal")return p3(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;A({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(a,l){const u=xs(l,.12,.55);for(let f=0;f<3;f++)for(let c=0;c<26;c++){const h=c/26,d=r*(1-h)*.98,m=f*2.094+h*5+l*9,[p,g]=T(t+Math.cos(m)*d,n+Math.sin(m)*d);a.globalAlpha=u*(.35+.65*h),Xa(a,p,g,h>.6?3:2,c%3===0?zt.foam:c%3===1?zt.sea:zt.aqua)}a.globalAlpha=1}});const i=[];for(let a=0;a<9;a++)i.push({a0:a/9*6.283+y(-.2,.2),d:a*.03+y(0,.05)});const s={"#":zt.shell,a:zt.sand};return A({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(a,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const c=f*f*(3-2*f),h=r*.92*(1-c),d=u.a0+c*4.2+l*2,[m,p]=T(t+Math.cos(d)*h,n+Math.sin(d)*h,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);a.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),d3(a,m3,m,p,2,s)}a.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(a,l){const u=ht(o),f=u?u.x:t,c=u?u.y:n,[h,d]=T(f,c,.95),m=te(h),p=te(d),g=xs(l,.08,.5),x=te(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));a.globalAlpha=g*.3,a.fillStyle=zt.lamp,a.fillRect(m-8,p-8,16,16),a.globalAlpha=g,a.fillRect(m-x,p-1,x*2,2),a.fillRect(m-1,p-x,2,x*2),a.fillStyle=zt.lampW,a.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const v=b*.785+l*5,S=10+l*30;Xa(a,m+Math.cos(v)*S,p+Math.sin(v)*S*.5+l*40,2,zt.lamp)}a.globalAlpha=1}}),!0};const Qd=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)Qd.push({th:r/t*6.283+n*.31,ph:e,row:n})});Z.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};A({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(s,a){const l=ht(t);if(!l||l.dead)return;const u=a*n,[f,c]=T(l.x,l.y),h=Math.min(1,u/.18),d=1+(1-h)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,g=18*d,x=62*d,b=u*1.6%2.2-.3,v=Qd.map(S=>{const _=S.th+u*.5,w=Math.cos(S.ph);return{d:S,th:_,x:f+Math.cos(_)*p*w+Math.cos(_)*m*30,y:c+Math.sin(_)*g*w-Math.sin(S.ph)*x-4-m*10+m*m*30,z:Math.sin(_)*w}}).sort((S,_)=>S.z-_.z);for(const S of v){const _=u-(3-S.d.row)*.05;if(_<0)continue;S.y-=(1-Math.min(1,_/.1))*14;const w=S.z>-.15,P=Math.abs(S.d.ph-b)<.22;s.globalAlpha=(w?.85:.35)*(1-m)*Math.min(1,_*10),Kd(s,S.x,S.y,_<.06||P?zt.white:zt.foam,P?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(s.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let S=0;S<16;S++){const _=y(0,6.283),w=y(1.5,3.5);z(l.x,l.y,y(.2,.9),Math.cos(_)*w,Math.sin(_)*w,y(1,3),.5,Math.random()<.5?zt.foam:zt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let s=0;s<10;s++){const a=s/10*6.283;z(r+Math.cos(a)*.5,o+Math.sin(a)*.5,.05,-Math.cos(a)*.8,-Math.sin(a)*.8,y(1.5,2.5),.4,Math.random()<.5?zt.sand:zt.shell,2,3,!1)}return!0};Z.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}A({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const c=xs(f,.06,.55),h=1+.35*Math.max(0,1-f/.1);it(t,n,r*.92*h,null,`rgba(16,70,95,${.35*c})`);const d=(m,p)=>T(t+m*h,n+p*h);for(let m=0;m<2;m++){u.globalAlpha=c*(m?.75:.85);const p=m?zt.lamp:zt.shellD,g=m?2:3,x=m?-1:0,b=m?-2:0;for(const[v,S]of i)for(let _=0;_<6;_++){const w=_*Math.PI/3,P=(_+1)*Math.PI/3,[R,I]=d(v+Math.cos(w)*o,S+Math.sin(w)*o),[O,k]=d(v+Math.cos(P)*o,S+Math.sin(P)*o);Yl(u,R+x,I+b,O+x,k+b,5,g,p)}for(let v=0;v<22;v++){const S=v/22*6.283,[_,w]=d(Math.cos(S)*r*.66,Math.sin(S)*r*.66),[P,R]=d(Math.cos(S)*r*.86,Math.sin(S)*r*.86);Yl(u,_+x,w+b,P+x,R+b,5,g,p);const I=(v+1)/22*6.283,[O,k]=d(Math.cos(I)*r*.86,Math.sin(I)*r*.86);Yl(u,P+x,R+b,O+x,k+b,6,g,p)}}u.globalAlpha=1}});const s=60,a=Array.from({length:s},(u,f)=>f).sort((u,f)=>{const c=u/s*6.283,h=f/s*6.283;return Math.cos(c)+Math.sin(c)-(Math.cos(h)+Math.sin(h))}),l={crash:!1};A({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const c=Math.min(1,f*1.15),h=1-(1-c)*(1-c),d=r*(.3+.75*h),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let g=0;g<s;g++){const x=g/s*6.283;p.push(T(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const g of a){const x=g/s*6.283,[b,v]=p[g],S=p[(g+1)%s][0],_=Math.max(4,Math.ceil(Math.abs(S-b))+2),w=te((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(w<4)continue;const P=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=P?.82:1;const R=P?2:-2;jd(u,te(Math.min(b,S)-1),te(v),_,w,te(Math.cos(x-.785)*3),R,(g*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let g=0;g<16;g++){const x=y(0,6.283);z(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*y(1,2.5),Math.sin(x)*y(1,2.5),y(1.5,3),.6,Math.random()<.5?zt.foam:zt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=y(0,6.283),c=y(2,5);z(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*c,Math.sin(f)*c,y(3.5,6.5),y(.8,1.1),[zt.aqua,zt.sea,zt.foam,zt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return tt(10),!0};Te.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;A({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,s){const[a,l]=T(t,n),u=te(a),f=te(l);for(let c=0;c<(r?3:2);c++){const h=s*1.3-c*.18;if(h<=0||h>=1)continue;const d=te(6+h*(r?34:24)),m=te(d/2);i.globalAlpha=1-h,i.fillStyle=c?zt.sea:zt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),A({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,s){const[a,l]=T(t,n,.5);i.globalAlpha=1-s,Kd(i,a,l-s*8,zt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const s=y(0,6.283),a=y(1,2.5);z(t,n,.4,Math.cos(s)*a,Math.sin(s)*a,y(1.5,3),.4,i%2?zt.aqua:zt.foam,2,9,!1)}};const xt=Math.round,Ao=Math.PI*2,ct={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},Zd=e=>e*N.HW*Math.SQRT2;function pe(e,t,n,r){r=Math.max(1,xt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),s=r/2;for(let a=0;a<=i;a++)e.fillRect(xt(t[0]+(n[0]-t[0])*a/i-s),xt(t[1]+(n[1]-t[1])*a/i-s),r,r)}function y3(e,t,n,r,o,i,s=!1){const a=t[0].length,l=t.length,u=xt(n-a*o/2),f=xt(r-l*o/2);for(const c in i){e.fillStyle=i[c];for(let h=0;h<l;h++)for(let d=0;d<a;d++)t[h][s?a-1-d:d]===c&&e.fillRect(u+d*o,f+h*o,o,o)}}function g3(e,t,n,r,o,i){const s=Math.abs(r),a=xt(t),l=xt(n);e.fillStyle=i,e.fillRect(a-1,l+2,1,2),s>.55?(e.fillStyle=o,e.fillRect(a-3,l,6,2),e.fillRect(a-2,l-1,4,1),e.fillRect(a-2,l+2,3,1),e.fillStyle=i,e.fillRect(a-2,l+1,4,1)):s>.2?(e.fillStyle=o,e.fillRect(a-2,l-1,3,4),e.fillStyle=i,e.fillRect(a-1,l,1,2)):(e.fillStyle=i,e.fillRect(a-1,l-1,1,4))}const ki=new Map;function Jd(e){if(ki.has(e))return!1;if(ki.size>300)for(const[t,n]of ki)M.T-n>4&&ki.delete(t);return ki.set(e,M.T),!0}function x3(e){const t=M.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Ae(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const v3=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Te.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(A({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[s,a]=T(t,n,.5),l=xt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=ct.f1;for(const[f,c]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(s+f*l-u/2,a+c*l*.8-u/2,u,u);o.fillStyle=ct.f2;for(let f=0;f<6;f++){const c=f/6*Ao+i*3;o.fillRect(xt(s+Math.cos(c)*(6+i*8))-1,xt(a+Math.sin(c)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=ct.cream,o.fillRect(s-2,a-2,4,4))}}),z(t,n,.6,y(-.5,.5),y(-.5,.5),.4,.8,Math.random()<.5?ct.leaf:ct.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)z(t,n,.5,y(-1.5,1.5),y(-1.5,1.5),y(1,2),.3,ct.f1,2,4,!0)};Ce.zorra_A=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=(c,h=0)=>[n+s*c-a*h,r+a*c+s*h];dt(!0);const u=Ot();for(let c=0;c<3;c++){u.globalAlpha=.8-c*.22,u.fillStyle=c?ct.f2:ct.f1;const h=l(-15-c*4,Math.sin(i*40+c)*1.5);u.fillRect(xt(h[0])-2+(c>>1),xt(h[1])-2+(c>>1),4-c,4-c)}u.globalAlpha=1,dt(!1),e.fillStyle=ct.woodD,pe(e,l(-13),l(3),3),e.fillStyle=ct.wood,pe(e,l(-12),l(2),1),e.fillStyle=ct.steel,pe(e,l(3),l(7),3),e.fillStyle="#ffffff",pe(e,l(6),l(8),1),e.fillStyle=ct.leaf,pe(e,l(-13,0),l(-9,-3),2),e.fillStyle=ct.leafD,pe(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?ht(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&Jd("za"+t.id)&&(Te.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),et.sfx("atk_zorra",f.x,f.y,.6))};Z.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=T(e.x,e.y),s=T(e.x+t,e.y+n),a=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/a,u=(s[1]-i[1])/a;A({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),m=-u,p=l;f.globalAlpha=c<.6?1:(1-c)/.4;const g=[];for(let v=-5;v<=5;v++)g.push([h+m*v*3.4-l*v*v*.45,d+p*v*3.4-u*v*v*.45]);f.fillStyle=ct.woodD;for(const v of g)f.fillRect(xt(v[0])-2,xt(v[1])-2,4,4);f.fillStyle=ct.wood;for(const v of g)f.fillRect(xt(v[0])-1,xt(v[1])-1,2,2);f.fillStyle=ct.leaf;for(const v of[g[0],g[10]])f.fillRect(xt(v[0])-2,xt(v[1])-3,3,3);const x=c<.08?9*(1-c/.08):Math.sin(c*70)*3*(1-c),b=[h-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=ct.cream,pe(f,g[0],b,1),pe(f,b,g[10],1)}}),A({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.5),m=4+c*16;f.fillStyle=ct.f1;for(let p=0;p<8;p++){const g=p/8*Ao;f.fillRect(xt(h+l*8+Math.cos(g)*m)-2,xt(d+u*8+Math.sin(g)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)z(r,o,.55,-n*y(-2,2)+t*y(0,1),t*y(-2,2)+n*y(0,1),y(.5,1.5),.9,f%2?ct.leaf:ct.leafL,3,1.5,!1,.95)};Ce.zorra_Q=(e,t,n,r,o,i)=>{const s=Math.cos(o),a=Math.sin(o),l=(f,c=0)=>[n+s*f-a*c,r+a*f+s*c];dt(!0);const u=Ot();for(let f=0;f<=16;f++){const c=f/16,h=xt(2+7*Math.sin(Math.PI*Math.pow(c,.7))),d=Math.sin(i*30-c*7)*2.5*c,m=l(-22-c*46,d);u.globalAlpha=.85-c*.35,u.fillStyle=c>.8?ct.cream:c>.45?ct.fox:ct.f1,u.fillRect(xt(m[0]-h/2),xt(m[1]-h/2),h,h)}u.globalAlpha=1,dt(!1),e.fillStyle=ct.woodD,pe(e,l(-22),l(4),4),e.fillStyle=ct.wood,pe(e,l(-21),l(3),2),e.fillStyle="#20202a",pe(e,l(3,-4),l(12),3),pe(e,l(3,4),l(12),3),e.fillStyle=ct.steel,pe(e,l(4,-2),l(11),2),pe(e,l(4,2),l(11),2),e.fillStyle="#ffffff",pe(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=ct.leafD,pe(e,l(-23,0),l(-15,f*5),3),e.fillStyle=ct.leaf,pe(e,l(-22,f),l(-16,f*4),2),e.fillStyle=ct.leafL,e.fillRect(xt(l(-17,f*4)[0]),xt(l(-17,f*4)[1]),2,2);Math.random()<.3&&z(t.x,t.y,t.z||.45,y(-.4,.4),y(-.4,.4),-.2,.7,Math.random()<.6?ct.leaf:ct.autumn,3,.6,!1,.95);for(const f of x3(t))if(Jd("zq"+t.id+":"+f.id)){const c=t.vx||1,h=t.vy||0,d=Math.hypot(c,h)||1;A({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,p){const g=T(f.x-c/d*.7,f.y-h/d*.7,.5),x=T(f.x+c/d*.9,f.y+h/d*.9,.5);m.globalAlpha=1-p,m.fillStyle=ct.fox,pe(m,g,x,xt(6*(1-p))+1),m.fillStyle=ct.cream,pe(m,g,x,2)}});for(let m=0;m<6;m++)z(f.x,f.y,.5,c/d*y(1,3)+y(-.8,.8),h/d*y(1,3)+y(-.8,.8),y(.5,1.5),.35,m%2?ct.f1:ct.fox,2,3,!0)}};Z.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(s,a)=>({a:a/9*Ao,h:a/9,sp:y(4.5,6),col:[ct.leaf,ct.leafL,ct.autumn][a%3],dk:a%3===2?ct.foxD:ct.leafD,r:y(.5,.65)}));for(let s=0;s<14;s++){const a=s/14*Ao,l=y(1.5,2.5);z(e.x+Math.cos(a)*.3,e.y+Math.sin(a)*.3,y(.2,.8),Math.cos(a+1.3)*l,Math.sin(a+1.3)*l,y(.8,1.6),y(.6,.9),[ct.leaf,ct.leafL,ct.autumn][s%3],3,1,!1,.94)}A({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(s,a,l){const u=ht(t),f=a*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)z(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const c=Math.min(1,f/.3),h=a>.92?(1-a)/.08:1,[d,m]=T(r,o,.35);s.globalAlpha=.55*h,s.fillStyle="#e8fff0";for(let p=0;p<2;p++){const g=f*7+p*Math.PI,x=Zd(.62)*c;for(let b=0;b<7;b++){const v=g+b*.16;s.fillRect(xt(d+Math.cos(v)*x)-1,xt(m+Math.sin(v)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const g=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*c*(1-x*.35),[v,S]=T(r+Math.cos(g)*b,o+Math.sin(g)*b,.15+x*1.1);s.globalAlpha=h*(Math.sin(g)>0?1:.55)*Math.min(1,(1-x)*4),g3(s,v,S,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};Z.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,s=T(t,n),a=T(r,o),l=a[0]<s[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));A({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,c){const h=c*(i+.45);for(const d of u){const m=h-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[g,x]=T(d.x,d.y,.32+m*.3);f.globalAlpha=p,y3(f,v3,g,x,3,{o:ct.f2,t:ct.f1,c:ct.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const v=g+(b-1.5)*9*(l?-1:1),S=xt(4+5*Math.abs(Math.sin(h*30+b*1.7))+m*14);f.fillStyle=b%2?ct.f3:ct.f1,f.fillRect(xt(v)-2,xt(x-12-S),4,S),f.fillStyle=ct.f0,f.fillRect(xt(v)-1,xt(x-12-S),2,2)}}}}),A({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,c){const[h,d]=T(r,o,.3+c*.4),m=14+c*10;for(let p=0;p<6;p++){const g=p/6*Ao+c*7;f.globalAlpha=(1-c)*(.6+.4*Math.sin(c*30+p)),f.fillStyle=p%2?ct.f3:ct.f2,f.fillRect(xt(h+Math.cos(g)*m)-3,xt(d+Math.sin(g)*m*.5)-3,6,6),f.fillStyle=ct.f0,f.fillRect(xt(h+Math.cos(g)*m)-1,xt(d+Math.sin(g)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const c=Math.random();z(t+(r-t)*c+y(-.2,.2),n+(o-n)*c+y(-.2,.2),.3,y(-.3,.3),y(-.3,.3),y(.8,1.6),y(.5,.8),[ct.f1,ct.f2,ct.f3][f%3],3,-.5,!0,.95)}};Z.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=ht(e.uid),s=i?i.x:t-3,a=i?i.y:n-3;let l=s-t,u=a-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const c=Array.from({length:7},(g,x)=>({ox:y(-.3,.3),oy:y(-.3,.3),dl:x*.03}));A({type:"custom",layer:"top",add:!0,dur:.5,x:s,y:a,draw(g,x){const b=x*.5;for(const v of c){const S=(b-v.dl)/.35;if(S<0||S>1)continue;const _=.6+S*4.5,w=s+v.ox-l*S*.8,P=a+v.oy-u*S*.8,R=T(w,P,_),I=T(w+l*.15,P+u*.15,_-.4);g.globalAlpha=1-S*.5,g.fillStyle=ct.fox,pe(g,I,R,3),g.fillStyle=ct.f0,g.fillRect(xt(R[0])-2,xt(R[1])-2,4,4)}}});for(let g=0;g<8;g++)z(s,a,.6,y(-.5,.5),y(-.5,.5),y(2,4),.4,g%2?ct.gold:ct.f1,2,2,!0);const h=28,d=.45,m=Array.from({length:h},(g,x)=>{const b=Math.random()*Ao,v=Math.sqrt(Math.random())*r*.92,S=t+Math.cos(b)*v,_=n+Math.sin(b)*v;return{t0:.3+x*(2.5/h)+y(-.04,.04),lx:S,ly:_,sx:S+l*1.8+y(-.3,.3),sy:_+u*1.8+y(-.3,.3),landed:!1,tang:[0,1]}}),p=(g,x)=>T(g.sx+(g.lx-g.sx)*x,g.sy+(g.ly-g.sy)*x,4*(1-x*x));A({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(g,x){const b=x*o;for(const v of m){const S=(b-v.t0)/d;if(S<0)continue;if(S>=1){if(!v.landed){v.landed=!0,z(v.lx,v.ly,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.7?ct.f1:ct.leaf,2,6,!0);const k=p(v,1),G=p(v,.93),$=Math.hypot(k[0]-G[0],k[1]-G[1])||1;v.tang=[(k[0]-G[0])/$,(k[1]-G[1])/$]}const O=(b-v.t0-d)/.14;if(O<1){const[k,G]=T(v.lx,v.ly),$=xt(3+O*9);g.globalAlpha=1-O,g.fillStyle=ct.gold,g.fillRect(k-$,G-1,$*2,2),g.fillRect(k-1,G-xt($/2),2,$)}continue}const _=p(v,S),w=p(v,Math.max(0,S-.07)),P=Math.hypot(_[0]-w[0],_[1]-w[1])||1,R=(_[0]-w[0])/P,I=(_[1]-w[1])/P;g.globalAlpha=.35,g.fillStyle=ct.f2;for(let O=1;O<=4;O++){const k=p(v,Math.max(0,S-O*.05));g.fillRect(xt(k[0])-1,xt(k[1])-1,3,3)}g.globalAlpha=1,g.fillStyle=ct.fox,pe(g,[_[0]-R*16,_[1]-I*16],_,3),g.fillStyle=ct.gold,pe(g,[_[0]-R*14,_[1]-I*14],_,1),g.fillStyle="#ffffff",g.fillRect(xt(_[0])-2,xt(_[1])-2,4,4)}}}),A({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(g,x,b){const v=x*o,S=x>.85?(1-x)/.15:Math.min(1,v*4),[_,w]=T(t,n),P=Zd(r);!b.sh&&v>.75&&(b.sh=!0,tt(3)),g.globalAlpha=.7*S,g.fillStyle=ct.fox;for(let R=0;R<10;R++){const I=R/10*Ao+v*.6,O=_+Math.cos(I)*P,k=w+Math.sin(I)*P*.5,G=-Math.cos(I),$=-Math.sin(I)*.5;g.fillRect(xt(O)-2,xt(k)-2,4,4),g.fillRect(xt(O+G*6-$*4)-1,xt(k+$*6+G*2)-1,3,3),g.fillRect(xt(O+G*6+$*4)-1,xt(k+$*6-G*2)-1,3,3)}for(const R of m){if(!R.landed)continue;const[I,O]=T(R.lx,R.ly),k=R.tang[0],G=R.tang[1];g.globalAlpha=S,g.fillStyle="#00000055",g.fillRect(xt(I)-3,xt(O),6,2),g.fillStyle=ct.woodD,pe(g,[I-k*13,O-G*13],[I,O],3),g.fillStyle=ct.wood,pe(g,[I-k*12,O-G*12],[I-k*2,O-G*2],1),g.fillStyle=ct.leaf,g.fillRect(xt(I-k*13)-2,xt(O-G*13)-1,2,3),g.fillStyle=ct.autumn,g.fillRect(xt(I-k*13),xt(O-G*13)-2,2,3)}}})};var Ht=`in vec2 aPosition;
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
`,Vt=`struct GlobalFilterUniforms {
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
}`,b3=`in vec2 vTextureCoord;
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
`,M3=`struct AdjustmentUniforms {
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
}`,S3=Object.defineProperty,_3=(e,t,n)=>t in e?S3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t1=(e,t,n)=>(_3(e,typeof t!="symbol"?t+"":t,n),n);const w3=class e1 extends Bt{constructor(t){t={...e1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:M3,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:b3,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),t1(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};t1(w3,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var A3=`
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
}`,T3=`struct KawaseBlurUniforms {
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
}`,C3=`
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
`,R3=`struct KawaseBlurUniforms {
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
}`,P3=Object.defineProperty,I3=(e,t,n)=>t in e?P3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,no=(e,t,n)=>(I3(e,typeof t!="symbol"?t+"":t,n),n);const n1=class r1 extends Bt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(It("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...r1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:n?.clamp?R3:T3,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:n?.clamp?C3:A3,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),no(this,"uniforms"),no(this,"_pixelSize",{x:0,y:0}),no(this,"_clamp"),no(this,"_kernels",[]),no(this,"_blur"),no(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,s=this.pixelSizeY/n.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,n,r,o);else{const l=wn.getSameSizeTexture(n);let u=n,f=l,c;const h=this._quality-1;for(let d=0;d<h;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,u,f,!0),c=u,u=f,f=c;a=this._kernels[h]+.5,this.uniforms.uOffset[0]=a*i,this.uniforms.uOffset[1]=a*s,t.applyFilter(this,u,r,o),wn.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let s=1;s<n;s++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};no(n1,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let o1=n1;var z3=`in vec2 vTextureCoord;
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
`,O3=`struct AdvancedBloomUniforms {
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
`,F3=`
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
`,E3=`struct ExtractBrightnessUniforms {
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
`,L3=Object.defineProperty,U3=(e,t,n)=>t in e?L3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i1=(e,t,n)=>(U3(e,typeof t!="symbol"?t+"":t,n),n);const s1=class a1 extends Bt{constructor(t){t={...a1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:E3,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:F3,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),i1(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};i1(s1,"DEFAULT_OPTIONS",{threshold:.5});let k3=s1;var D3=Object.defineProperty,X3=(e,t,n)=>t in e?D3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ko=(e,t,n)=>(X3(e,typeof t!="symbol"?t+"":t,n),n);const l1=class u1 extends Bt{constructor(t){t={...u1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:O3,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:z3,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:bt.WHITE}}),ko(this,"uniforms"),ko(this,"bloomScale",1),ko(this,"brightness",1),ko(this,"_extractFilter"),ko(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new k3({threshold:t.threshold}),this._blurFilter=new o1({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=wn.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const s=wn.getSameSizeTexture(n);this._blurFilter.apply(t,i,s,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=s.source,t.applyFilter(this,n,r,o),wn.returnTexture(s),wn.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};ko(l1,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let G3=l1;var N3=`precision highp float;
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
`,B3=`struct AsciiUniforms {
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
}`,$3=Object.defineProperty,W3=(e,t,n)=>t in e?$3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Nu=(e,t,n)=>(W3(e,typeof t!="symbol"?t+"":t,n),n);const H3=class f1 extends Bt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(It("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...f1.DEFAULT_OPTIONS,...n};const o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:B3,entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:N3,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Nu(this,"uniforms"),Nu(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new Ke,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Nu(H3,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var V3=`precision highp float;
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
`,q3=`struct BevelUniforms {
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
}`,Y3=Object.defineProperty,K3=(e,t,n)=>t in e?Y3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Do=(e,t,n)=>(K3(e,typeof t!="symbol"?t+"":t,n),n);const j3=class c1 extends Bt{constructor(t){t={...c1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:q3,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:V3,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Do(this,"uniforms"),Do(this,"_thickness"),Do(this,"_rotation"),Do(this,"_lightColor"),Do(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new Ke,this._shadowColor=new Ke,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ui}set rotation(t){this._rotation=t*ui,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Do(j3,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Q3=Object.defineProperty,Z3=(e,t,n)=>t in e?Q3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,aa=(e,t,n)=>(Z3(e,typeof t!="symbol"?t+"":t,n),n);const J3=class h1 extends x2{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){It("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...h1.DEFAULT_OPTIONS,...n},super(),aa(this,"_blurXFilter"),aa(this,"_blurYFilter"),aa(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new Rc({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Rc({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=wn.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),wn.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return It("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){It("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return It("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){It("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return It("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){It("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};aa(J3,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var t5=`precision highp float;
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
`,e5=`struct BulgePinchUniforms {
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
}`,n5=Object.defineProperty,r5=(e,t,n)=>t in e?n5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d1=(e,t,n)=>(r5(e,typeof t!="symbol"?t+"":t,n),n);const o5=class m1 extends Bt{constructor(t){t={...m1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:e5,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:t5,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),d1(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};d1(o5,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var i5=`precision highp float;
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
`,s5=`in vec2 aPosition;
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
`,s0=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Co=Co||{};Co.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Co=Co||{};Co.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(E){var L=new Error(t+": "+E);throw L.source=t,L}function r(){var E=o();return t.length>0&&n("Invalid input not EOF"),E}function o(){return v(i)}function i(){return s("linear-gradient",e.linearGradient,l)||s("repeating-linear-gradient",e.repeatingLinearGradient,l)||s("radial-gradient",e.radialGradient,c)||s("repeating-radial-gradient",e.repeatingRadialGradient,c)}function s(E,L,D){return a(L,function(X){var W=D();return W&&(vt(e.comma)||n("Missing comma before color stops")),{type:E,orientation:W,colorStops:v(S)}})}function a(E,L){var D=vt(E);if(D){vt(e.startCall)||n("Missing (");var X=L(D);return vt(e.endCall)||n("Missing )"),X}}function l(){return u()||f()}function u(){return ot("directional",e.sideOrCorner,1)}function f(){return ot("angular",e.angleValue,1)}function c(){var E,L=h(),D;return L&&(E=[],E.push(L),D=t,vt(e.comma)&&(L=h(),L?E.push(L):t=D)),E}function h(){var E=d()||m();if(E)E.at=g();else{var L=p();if(L){E=L;var D=g();D&&(E.at=D)}else{var X=x();X&&(E={type:"default-radial",at:X})}}return E}function d(){var E=ot("shape",/^(circle)/i,0);return E&&(E.style=$()||p()),E}function m(){var E=ot("shape",/^(ellipse)/i,0);return E&&(E.style=k()||p()),E}function p(){return ot("extent-keyword",e.extentKeywords,1)}function g(){if(ot("position",/^at/,0)){var E=x();return E||n("Missing positioning value"),E}}function x(){var E=b();if(E.x||E.y)return{type:"position",value:E}}function b(){return{x:k(),y:k()}}function v(E){var L=E(),D=[];if(L)for(D.push(L);vt(e.comma);)L=E(),L?D.push(L):n("One extra comma");return D}function S(){var E=_();return E||n("Expected color definition"),E.length=k(),E}function _(){return P()||I()||R()||w()}function w(){return ot("literal",e.literalColor,0)}function P(){return ot("hex",e.hexColor,1)}function R(){return a(e.rgbColor,function(){return{type:"rgb",value:v(O)}})}function I(){return a(e.rgbaColor,function(){return{type:"rgba",value:v(O)}})}function O(){return vt(e.number)[1]}function k(){return ot("%",e.percentageValue,1)||G()||$()}function G(){return ot("position-keyword",e.positionKeywords,1)}function $(){return ot("px",e.pixelValue,1)||ot("em",e.emValue,1)}function ot(E,L,D){var X=vt(L);if(X)return{type:E,value:X[D]}}function vt(E){var L,D;return D=/^[\n\r\t\s]+/.exec(t),D&&F(D[0].length),L=E.exec(t),L&&F(L[0].length),L}function F(E){t=t.substr(E)}return function(E){return t=E.toString(),r()}}();var a5=Co.parse;Co.stringify;function l5(e){const t=a5(y5(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=u5(n.type),o=f5(n.colorStops),i=m5(n.orientation);return{type:r,stops:o,angle:i}}function u5(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function f5(e){const t=h5(e),n=[],r=new Ke;for(let o=0;o<e.length;o++){const i=c5(e[o]),s=r.setValue(i).toArray();n.push({offset:t[o],color:s.slice(0,3),alpha:s[3]})}return n}function c5(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function h5(e){const t=[];for(let i=0;i<e.length;i++){const s=e[i];let a=-1;s.type==="literal"&&s.length&&"type"in s.length&&s.length.type==="%"&&"value"in s.length&&(a=parseFloat(s.length.value)/100),t.push(a)}const r=i=>{for(let s=i;s<t.length;s++)if(t[s]!==-1)return{indexDelta:s-i,offset:t[s]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const s=t[i];if(s!==-1)o=s;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const a=r(i),u=(a.offset-o)/(1+a.indexDelta);for(let f=0;f<=a.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=a.indexDelta,o=t[i]}}return t.map(d5)}function d5(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function m5(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return p5(e.value)}return 0}function p5(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function y5(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var g5=Object.defineProperty,x5=(e,t,n)=>t in e?g5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xo=(e,t,n)=>(x5(e,typeof t!="symbol"?t+"":t,n),n);const Kl=90;function v5(e){return[...e].sort((t,n)=>t.offset-n.offset)}const vs=class la extends Bt{constructor(t){if(t&&"css"in t?t={...l5(t.css||""),alpha:t.alpha??la.defaults.alpha,maxColors:t.maxColors??la.defaults.maxColors}:t={...la.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Dt.from({vertex:{source:s0,entryPoint:"mainVertex"},fragment:{source:s0,entryPoint:"mainFragment"}}),r=Xt.from({vertex:s5,fragment:i5,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Kl,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),xo(this,"baseUniforms"),xo(this,"stopsUniforms"),xo(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=v5(t),r=new Ke;let o,i,s;for(let a=0;a<n.length;a++){r.setValue(n[a].color);const l=a*3;[o,i,s]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=s,this.stopsUniforms.uStops[a*4]=n[a].offset,this.stopsUniforms.uStops[a*4+1]=n[a].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Kl}set angle(t){this.baseUniforms.uOptions[1]=t-Kl}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};xo(vs,"LINEAR",0);xo(vs,"RADIAL",1);xo(vs,"CONIC",2);xo(vs,"defaults",{type:vs.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var b5=`in vec2 vTextureCoord;
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

}`,M5=`struct ColorMapUniforms {
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
}`,S5=Object.defineProperty,_5=(e,t,n)=>t in e?S5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pr=(e,t,n)=>(_5(e,typeof t!="symbol"?t+"":t,n),n);const w5=class p1 extends Bt{constructor(...t){let n=t[0]??{};if((n instanceof bt||n instanceof mn)&&(It("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...p1.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:M5,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:b5,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),pr(this,"uniforms"),pr(this,"_size",0),pr(this,"_sliceSize",0),pr(this,"_slicePixelSize",0),pr(this,"_sliceInnerSize",0),pr(this,"_nearest",!1),pr(this,"_scaleMode","linear"),pr(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof bt?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};pr(w5,"DEFAULT_OPTIONS",{colorMap:bt.WHITE,nearest:!1,mix:1});var A5=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,T5=`struct ColorOverlayUniforms {
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
`,C5=Object.defineProperty,R5=(e,t,n)=>t in e?C5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bu=(e,t,n)=>(R5(e,typeof t!="symbol"?t+"":t,n),n);const P5=class y1 extends Bt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(It("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...y1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:T5,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:A5,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Bu(this,"uniforms"),Bu(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new Ke,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Bu(P5,"DEFAULT_OPTIONS",{color:0,alpha:1});var I5=`in vec2 vTextureCoord;
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
`,z5=`struct ColorReplaceUniforms {
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
}`,O5=Object.defineProperty,F5=(e,t,n)=>t in e?O5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ua=(e,t,n)=>(F5(e,typeof t!="symbol"?t+"":t,n),n);const E5=class g1 extends Bt{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(It("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...g1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:z5,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:I5,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),ua(this,"uniforms"),ua(this,"_originalColor"),ua(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new Ke,this._targetColor=new Ke,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){It("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return It("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){It("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return It("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};ua(E5,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var L5=`in vec2 vTextureCoord;
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
}`,U5=`struct ConvolutionUniforms {
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
}`,k5=Object.defineProperty,D5=(e,t,n)=>t in e?k5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x1=(e,t,n)=>(D5(e,typeof t!="symbol"?t+"":t,n),n);const X5=class v1 extends Bt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(It("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...v1.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:U5,entryPoint:"mainFragment"}}),s=Xt.from({vertex:Ht,fragment:L5,name:"convolution-filter"});super({gpuProgram:i,glProgram:s,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),x1(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};x1(X5,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var G5=`precision highp float;
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
`,N5=`struct CRTUniforms {
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
}`,B5=Object.defineProperty,$5=(e,t,n)=>t in e?B5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fa=(e,t,n)=>($5(e,typeof t!="symbol"?t+"":t,n),n);const W5=class b1 extends Bt{constructor(t){t={...b1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:N5,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:G5,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),fa(this,"uniforms"),fa(this,"seed"),fa(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};fa(W5,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var H5=`precision highp float;
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
`,V5=`struct DotUniforms {
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
}`,q5=Object.defineProperty,Y5=(e,t,n)=>t in e?q5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K5=(e,t,n)=>(Y5(e,t+"",n),n);const j5=class M1 extends Bt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(It("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...M1.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:V5,entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:H5,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};K5(j5,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Q5=`precision highp float;
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
}`,Z5=`struct DropShadowUniforms {
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
}`,J5=Object.defineProperty,tv=(e,t,n)=>t in e?J5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xo=(e,t,n)=>(tv(e,typeof t!="symbol"?t+"":t,n),n);const ev=class S1 extends Bt{constructor(t){t={...S1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Z5,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:Q5,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),Xo(this,"uniforms"),Xo(this,"shadowOnly",!1),Xo(this,"_color"),Xo(this,"_blurFilter"),Xo(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new Ke,this.color=t.color??0,this._blurFilter=new o1({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new Bt({gpuProgram:Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:Xt.from({vertex:Ht,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=wn.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),wn.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};Xo(ev,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var nv=`precision highp float;
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
`,rv=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,ov=Object.defineProperty,iv=(e,t,n)=>t in e?ov(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zn=(e,t,n)=>(iv(e,typeof t!="symbol"?t+"":t,n),n);const sv=class _1 extends Bt{constructor(t){t={..._1.defaults,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:rv,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:nv,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new bt({source:new Pf({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),Zn(this,"uniforms"),Zn(this,"average",!1),Zn(this,"minSize",8),Zn(this,"sampleSize",512),Zn(this,"_canvas"),Zn(this,"texture"),Zn(this,"_slices",0),Zn(this,"_sizes",new Float32Array(1)),Zn(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:s}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let s=1;for(let a=0;a<n;a++){const l=s/(i-a),u=Math.max(l*(1-Math.random()*.6),o);t[a]=u,s-=u}t[n]=s}else{let i=1;const s=Math.sqrt(1/this._slices);for(let a=0;a<n;a++){const l=Math.max(s*i*Math.random(),o);t[a]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);const a=this._sizes[s]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,a+1>>0),i+=a}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ui}set direction(t){this.uniforms.uDirection=t*ui}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Zn(sv,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var av=`precision highp float;
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
`,lv=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,uv=Object.defineProperty,fv=(e,t,n)=>t in e?uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$u=(e,t,n)=>(fv(e,typeof t!="symbol"?t+"":t,n),n);const cv=class w1 extends Bt{constructor(t){t={...w1.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:lv,entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:av.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),$u(this,"uniforms"),$u(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Ke,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};$u(cv,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var hv=`precision highp float;
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
`,dv=`struct GodrayUniforms {
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

\${PERLIN}`,mv=`vec3 mod289(vec3 x)
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
`,pv=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,yv=Object.defineProperty,gv=(e,t,n)=>t in e?yv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Go=(e,t,n)=>(gv(e,typeof t!="symbol"?t+"":t,n),n);const xv=class A1 extends Bt{constructor(t){t={...A1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:dv.replace("${PERLIN}",pv),entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:hv.replace("${PERLIN}",mv),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Go(this,"uniforms"),Go(this,"time",0),Go(this,"_angleLight",[0,0]),Go(this,"_angle",0),Go(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,s=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=s,this.uniforms.uAspect=s/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*ui;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Go(xv,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var vv=`in vec2 vTextureCoord;
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
`,bv=`struct HslUniforms {
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
}`,Mv=Object.defineProperty,Sv=(e,t,n)=>t in e?Mv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wu=(e,t,n)=>(Sv(e,typeof t!="symbol"?t+"":t,n),n);const _v=class T1 extends Bt{constructor(t){t={...T1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:bv,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:vv,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Wu(this,"uniforms"),Wu(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Wu(_v,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var wv=`precision highp float;
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
`,Av=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,Tv=Object.defineProperty,Cv=(e,t,n)=>t in e?Tv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hu=(e,t,n)=>(Cv(e,typeof t!="symbol"?t+"":t,n),n);const Rv=class C1 extends Bt{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof Le){It("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],s="y"in n?n.y:n[1];n={velocity:{x:i,y:s}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...C1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Av,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:wv,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Hu(this,"uniforms"),Hu(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Hu(Rv,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Pv=`in vec2 vTextureCoord;
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
`,Iv=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,zv=Object.defineProperty,Ov=(e,t,n)=>t in e?zv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ca=(e,t,n)=>(Ov(e,typeof t!="symbol"?t+"":t,n),n);const Fv=class R1 extends Bt{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(It("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...R1.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Iv.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:Pv.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),ca(this,"uniforms"),ca(this,"_replacements",[]),ca(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new Ke;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let s,a,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[s,a,l]=i.toArray(),n[u*3]=s,n[u*3+1]=a,n[u*3+2]=l,i.setValue(f[1]),[s,a,l]=i.toArray(),r[u*3]=s,r[u*3+1]=a,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){It("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return It("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};ca(Fv,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var Ev=`precision highp float;
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
}`,Lv=`struct OldFilmUniforms {
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
}`,Uv=Object.defineProperty,kv=(e,t,n)=>t in e?Uv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vu=(e,t,n)=>(kv(e,typeof t!="symbol"?t+"":t,n),n);const Dv=class P1 extends Bt{constructor(t){t={...P1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Lv,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:Ev,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Vu(this,"uniforms"),Vu(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Vu(Dv,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Xv=`precision highp float;
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
`,Gv=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Nv=Object.defineProperty,Bv=(e,t,n)=>t in e?Nv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uo=(e,t,n)=>(Bv(e,typeof t!="symbol"?t+"":t,n),n);const Hf=class ro extends Bt{constructor(...t){let n=t[0]??{};typeof n=="number"&&(It("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...ro.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Gv,entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:Xv.replace(/\$\{ANGLE_STEP\}/,ro.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),uo(this,"uniforms"),uo(this,"_thickness"),uo(this,"_quality"),uo(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=ro.getAngleStep(r),this._color=new Ke,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*ro.MAX_SAMPLES,ro.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=ro.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};uo(Hf,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});uo(Hf,"MIN_SAMPLES",1);uo(Hf,"MAX_SAMPLES",100);var $v=`precision highp float;
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
`,Wv=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,Hv=Object.defineProperty,Vv=(e,t,n)=>t in e?Hv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ha=(e,t,n)=>(Vv(e,typeof t!="symbol"?t+"":t,n),n);const qv=class I1 extends Bt{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(It("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],s="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:s}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...I1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Wv,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:$v,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),ha(this,"uniforms"),ha(this,"_angle"),ha(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};ha(qv,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Yv=`precision highp float;
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
`,Kv=`struct ReflectionUniforms {
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
}`,jv=Object.defineProperty,Qv=(e,t,n)=>t in e?jv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qu=(e,t,n)=>(Qv(e,typeof t!="symbol"?t+"":t,n),n);const Zv=class z1 extends Bt{constructor(t){t={...z1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Kv,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:Yv,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),qu(this,"uniforms"),qu(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};qu(Zv,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Jv=`precision highp float;
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
`,tb=`struct RgbSplitUniforms {
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
`,eb=Object.defineProperty,nb=(e,t,n)=>t in e?eb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O1=(e,t,n)=>(nb(e,typeof t!="symbol"?t+"":t,n),n);const rb=class F1 extends Bt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(It("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...F1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:tb,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:Jv,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),O1(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};O1(rb,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var ob=`
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
`,ib=`
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
`,sb=Object.defineProperty,ab=(e,t,n)=>t in e?sb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yu=(e,t,n)=>(ab(e,typeof t!="symbol"?t+"":t,n),n);const lb=class E1 extends Bt{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(It("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...E1.DEFAULT_OPTIONS,...n};const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:ib,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:ob,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Yu(this,"uniforms"),Yu(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Yu(lb,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var ub=`precision highp float;
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
`,fb=`struct SimpleLightmapUniforms {
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
}`,cb=Object.defineProperty,hb=(e,t,n)=>t in e?cb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,da=(e,t,n)=>(hb(e,typeof t!="symbol"?t+"":t,n),n);const db=class L1 extends Bt{constructor(...t){let n=t[0]??{};if(n instanceof bt&&(It("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...L1.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:fb,entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:ub,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),da(this,"uniforms"),da(this,"_color"),da(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new Ke,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};da(db,"DEFAULT_OPTIONS",{lightMap:bt.WHITE,color:0,alpha:1});var mb=`in vec2 vTextureCoord;
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
`,pb=`struct TiltShiftUniforms {
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
}`,yb=Object.defineProperty,gb=(e,t,n)=>t in e?yb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ku=(e,t,n)=>(gb(e,typeof t!="symbol"?t+"":t,n),n);const xb=class U1 extends Bt{constructor(t){const{width:n,height:r}=z2.defaultOptions;t={...U1.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:pb,entryPoint:"mainFragment"}}),i=Xt.from({vertex:Ht,fragment:mb,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Ku(this,"uniforms"),Ku(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),s=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=s?-o/i:r/i,this.uniforms.uDelta[1]=s?r/i:o/i}};Ku(xb,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var vb=`precision highp float;
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
`,bb=`struct TwistUniforms {
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
`,Mb=Object.defineProperty,Sb=(e,t,n)=>t in e?Mb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k1=(e,t,n)=>(Sb(e,typeof t!="symbol"?t+"":t,n),n);const _b=class D1 extends Bt{constructor(t){t={...D1.DEFAULT_OPTIONS,...t};const n=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:bb,entryPoint:"mainFragment"}}),r=Xt.from({vertex:Ht,fragment:vb,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),k1(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};k1(_b,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var wb=`precision highp float;
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
`,Ab=`struct ZoomBlurUniforms {
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
}`,Tb=Object.defineProperty,Cb=(e,t,n)=>t in e?Tb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X1=(e,t,n)=>(Cb(e,typeof t!="symbol"?t+"":t,n),n);const Rb=class G1 extends Bt{constructor(t){t={...G1.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Dt.from({vertex:{source:Vt,entryPoint:"mainVertex"},fragment:{source:Ab.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=Xt.from({vertex:Ht,fragment:wb.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),X1(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};X1(Rb,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let Hn,N1,ri,rs,bs;const $s=[];let a0=!0,ju=0;function B1(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,s=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${s.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}async function Pb(e,t){return N1=t,Hn=new Qi,await Hn.init({...e,background:"#000000",backgroundAlpha:1}),bs=bt.from(B1(256)),bs.source.scaleMode="linear",rs=new De(bt.WHITE),Hn.stage.addChild(rs),ri=new ee,Hn.stage.addChild(ri),Fb(),Hn.canvas}function Ib(){const e=new De(bs);e.blendMode="add",e.alpha=.01,ri.addChild(e),Hn.renderer.render(Hn.stage),e.destroy();try{Hn.renderer.texture.initSource(bs.source)}catch{}W1()}function l0(e){e!==a0&&(a0=e,Hn.canvas.style.display=e?"":"none",e?Hn.ticker.start():Hn.ticker.stop())}const fo=4;let Vo,os,Qu,Zu;const Ws=[],vo=new zf({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),zb=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,Ob=`in vec2 vUV;
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
}`;let $1;function Fb(){Zu=bt.from(B1(64)),Zu.source.scaleMode="linear",Vo=Of.create({width:64,height:64,resolution:1}),Qu=new ee,os=new ee,Qu.addChild(os),$1=Xt.from({vertex:zb,fragment:Ob,name:"piso-luna"})}function Eb(e,t,n){const r=e.width,o=e.height,i=new $h({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),s=new Va({glProgram:$1,resources:{uTexture:e.source,uMask:Vo.source,moonU:vo}}),a=new T2({geometry:i,shader:s,texture:e});return a.x=t,a.y=n,a}function W1(){const e=Math.ceil(M.W/fo),t=Math.ceil(M.H/fo);(Vo.source.width!==e||Vo.source.height!==t)&&Vo.resize(e,t,1),vo.uniforms.uScreen[0]=e*fo,vo.uniforms.uScreen[1]=t*fo,N1.renderer.render({container:Qu,target:Vo,clear:!0,clearColor:[0,0,0,0]})}const u0=[.95,.95,.94],Lb=[.5,.62,.86],Ub=[1,.74,.55],f0=[62,108,168],kb=[210,120,60],ma=[1,1,1];function Db(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let s=u0[i]+(Lb[i]-u0[i])*e;s+=(Ub[i]-s)*t*.62,ma[i]=s,n[i]=f0[i]+(kb[i]-f0[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=vo.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const Xb=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),Ju=[];let qo=0,tf=0,ef=0,H1=0,V1=0;const Gb=110;function yn(e,t,n,r,o,i){if(i<.02||qo>=Gb)return;const s=(e-t)*N.HW+N.OX,a=(e+t)*N.HH,l=r*N.HW*1.5;if(s<tf-l||s>H1+l||a<ef-l||a>V1+l)return;let u=Ju[qo];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},Ju[qo]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),qo++}const c0=(e,t,n,r,o)=>yn(e,t,0,n,r,o);let Fo=null;function Nb(){if(Fo)return Fo;Fo=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?Fo.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&Fo.push({x:e.x,y:e.y,kind:"crystal"});return Fo}const h0={blue:5949695,red:16742470},Bb={blue:9101567,red:16752752},$b={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function Wb(e){const t=M.game,n=M.T,r=t.player,o=.55+.45*e;for(const i of Nb())if(i.kind==="brazier"){const s=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);yn(i.x,i.y,.5,3.3*(.96+.04*s),16749632,.8*s*o)}else yn(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const s=t.fountain[i];s&&yn(s.x,s.y,.3,3.6,Bb[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){yn(i.x,i.y,1.75,3.4,h0[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){yn(i.x,i.y,.9,4.4,h0[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(Ae(i))continue;const s=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&yn(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),s&&s.burn&&yn(i.x,i.y,.4,1.3,16747560,.5*o);const a=s&&s.transform;a&&yn(i.x,i.y,.6,2.8,a.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&yn(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const s=window.SIM.RUNES[i.kind];yn(i.x,i.y,.5,1.7,Lf(s.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||Ya(i,n)&&yn(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&yn(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const s=$b[i.fx];s!==void 0&&yn(i.x,i.y,i.z||.45,i.skill?2:1.2,s,(i.skill?.75:.5)*o)}dg(c0,40,o),mg(c0,14,o)}const q1=new URLSearchParams(location.search),Hb=q1.get("luna")==="0",Vb=q1.get("mapaluz")==="0";let Di=!1;function qb(e,t){const n=M.game;if(!n||!n.player||Vb){l0(!1),ju=0,Di&&(Di=!1,vo.uniforms.uMoon[3]=0);return}l0(!0);const r=k0(n.t),o=M.cam;ju=r.night,Db(r.night,r.warm),Hb&&(vo.uniforms.uMoon[3]=0),rs.tint=Xb(ma[0],ma[1],ma[2]),rs.width=M.W,rs.height=M.H,ri.scale.set(o.z),ri.position.set(e,t),tf=o.x-M.W/2/o.z,ef=o.y-M.H/2/o.z,H1=tf+M.W/o.z,V1=ef+M.H/o.z+120,qo=0,Wb(r.night);const{HW:i,HH:s,OX:a,ZK:l}=N;Di=vo.uniforms.uMoon[3]>.005;let u=0;for(;u<qo;u++){const f=Ju[u];let c=$s[u];c||(c=new De(bs),c.anchor.set(.5),c.blendMode="add",ri.addChild(c),$s[u]=c);const h=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+a,m=(f.x+f.y)*s-f.z*l*.35-10;if(c.visible=!0,c.x=d,c.y=m,c.width=h,c.height=h*.62,c.tint=f.col,c.alpha=f.a,Di){let p=Ws[u];p||(p=new De(Zu),p.anchor.set(.5),p.blendMode="add",os.addChild(p),Ws[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=h,p.height=h*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<$s.length;f++)$s[f].visible=!1;if(Di){for(let f=u;f<Ws.length;f++)Ws[f].visible=!1;os.scale.set(o.z/fo),os.position.set(e/fo,t/fo),W1()}}let $n;const Nt={};let oi,ii,Ln,si,is,nf=0,jl,pa=null,ya=null,Ga,rf=[],Na=[];const Ba=[],_i=new Map,Fr=[],Hs=[];function Vf(){return $n.canvas}const of=[];async function Yb(e){const t=F2();let n=0;for(const o of t){try{$n.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new De(Ga);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(M.W/2,M.H/2),Nt.lights.addChild(r);for(let o=0;o<3;o++)Er.renderer.render(Er.stage),$n.renderer.render($n.stage),gr.renderer.render(gr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of of)try{gr.renderer.texture.initSource(o)}catch{}try{Er.renderer.texture.initSource(Ga.source)}catch{}Ib()}let Ql;function Kb(){try{const e=$n.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let gr,Er;const Vs={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function Ir(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function jb(e){gr=new Qi,$n=new Qi,Er=new Qi,await gr.init({...Vs,background:"#100d18"}),await $n.init({...Vs,backgroundAlpha:0}),await Er.init({...Vs,backgroundAlpha:0}),jl=await Pb(Vs,gr),M.gpuName=Kb(),M.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(M.gpuName),e.style.position="fixed",oi=document.createElement("canvas"),ii=document.createElement("canvas"),Ln=document.createElement("canvas"),si=document.createElement("canvas"),Ir(gr.canvas,1),Ir(oi,3),Ir($n.canvas,4),Ir(jl,5,"multiply"),Ir(Er.canvas,6,"plus-lighter"),Ir(Ln,7),Ir(ii,8),Ir(si,9,"plus-lighter"),Ln.style.imageRendering="auto",$n.canvas.style.pointerEvents="auto",e.append(gr.canvas,oi,$n.canvas,jl,Er.canvas,Ln,ii,si);for(const t of["ground"])Nt[t]=new ee,gr.stage.addChild(Nt[t]);for(const t of["world","top"])Nt[t]=new ee,$n.stage.addChild(Nt[t]);Nt.lights=new ee,Er.stage.addChild(Nt.lights),Nt.groundCam=new ee,Nt.ground.addChild(Nt.groundCam),Nt.worldCam=new ee,Nt.world.addChild(Nt.worldCam),Nt.shadows=new ee,Nt.entities=new ee,Nt.entities.sortableChildren=!0,Nt.worldCam.addChild(Nt.shadows,Nt.entities),Nt.lightsCam=new ee,Nt.lights.addChild(Nt.lightsCam),Ql=new G3({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),Ql.resolution=.5,Nt.lights.filters=[Ql],Ga=bt.from(Qb(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),is=new De(bt.WHITE),Nt.top.addChild(is),d0(),window.addEventListener("resize",d0)}function Qb(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,s]of t)o.addColorStop(i,s);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function d0(){M.W=window.innerWidth,M.H=window.innerHeight;const e=i=>Math.ceil(i*lf);oi.width=si.width=e(M.W),oi.height=si.height=e(M.H),ii.width=M.W,ii.height=M.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=bt.from(t);o.source.scaleMode="linear",is.texture=o,is.width=M.W,is.height=M.H}function Zb(){const e=window.MAP;for(const o of L2())Nt.groundCam.addChild(Eb(o.tex,o.x,o.y)),of.push(o.tex.source);const t=Jb(),n=qn.ground.naturalWidth,r=qn.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const s=qn[o];if(!s||!s.naturalWidth)continue;const a=bt.from(s);a.source.scaleMode="linear",of.push(a.source);const l=new De(a);l.width=n,l.height=r;const u=new R2({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,Nt.groundCam.addChild(l,u),i==="flow"?pa=u:ya=u}rf=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),Na=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of rf)sf(o,!0);for(const o of Na)sf(o,!1)}function sf(e,t){const n=Zt[e.sprite];if(!n||!qa(e.sprite))return;const r=Zo(e.sprite,null,0,0);if(!r)return;const o=new De(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,s]=T(e.x,e.y);o.x=i,o.y=s,o.zIndex=(e.x+e.y)*100,Nt.entities.addChild(o),Ba.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function Jb(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,s=4+Math.random()*12,a=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${a})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(s),1),s>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(s-4),1)}const n=bt.from(e);return n.source.scaleMode="nearest",n}function tM(e){const t=Zt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",Kh(e.sprite,"idle",e.animT||0)]:["walk",0]}const eM={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},nM={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194};function rM(e){let t=_i.get(e.id);if(!t){const n=()=>{const r=new De(bt.EMPTY);return Nt.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new De(bt.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,Nt.shadows.addChild(t.shadow),_i.set(e.id,t)}return t}function qs(e,t,n,r,o,i,s){if(!t){e.visible=!1;return}const a=Zt[n];e.texture=t,e.visible=!0,e.anchor.set(a.ax/a.fw,a.ay/a.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=s}function oM(){const e=M.game,t=e.player,n=M.T,r=++iM;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=rM(o);i.seen=r;const s=o.kind==="tower"||o.kind==="nexus";if(o.dead){qs(i.spr,Zo("prop_boulder",null,0,0),"prop_boulder",...T(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const I of i.gear)I.visible=!1;continue}if(Ae(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const I of i.gear)I.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const I=o._spriteBak||(M.mode==="guest"?o.heroKey:null);I&&(o.sprite=I)}if(o.sprite&&(!Zt[o.sprite]||!qa(o.sprite))){const I=eM[o.sprite];o._fbScale=I?I[1]:1,o._fbTint=I?I[2]:16777215,o.sprite=I&&Zt[I[0]]?I[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[a,l]=T(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const I=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(I*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!s&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let c=0;if(o._cyA!==void 0){const I=Math.min(1,(n-o._cyA)/.4);c=58*I*(2-I)+Math.sin(n*5+o.id)*5*I}else if(o._cyB!==void 0){const I=(n-o._cyB)/.18;I<1?c=o._cyH0*(1-I*I):o._cyB=void 0}o._cyH=c,u-=Math.round(c);const[h,d]=tM(o);let m=s||Zt[o.sprite]&&Zt[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!s&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const g=o.status&&o.status.transform;if(g){o._tfT=(o._tfT||0)+1/60;const I=Math.min(1,o._tfT*4),O=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(g.scale-1)*I*O}else o._tfT=0;const x=o.status||{};let b=a;x.stun&&["quake","roar","dust","firedash","bash"].includes(x.stun.fx)&&(b+=Math.round(Math.sin(n*60+o.id)*1.5));const v=(o.x+o.y)*100+1,S=Zo(o.sprite,h,m,s?Kh(o.sprite,"idle",n):d);qs(i.spr,S,o.sprite,b,u,p,v),i.spr.alpha=f,i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let _=0,w=0;if(o.hitFlash>.06?(_=16777215,w=.75):x.slow?(_=nM[x.slow.fx]||8050943,w=.35):x.root?(_=3836458,w=.3):x.stun&&x.stun.fx==="arcane"?(_=11563263,w=.35):x.burn?(_=16742954,w=.25+.15*Math.sin(n*14+o.id)):g?(_=g.kind==="fire"?16747066:16765514,w=.25+.1*Math.sin(n*6)):x.hex?(_=11565823,w=.2+.08*Math.sin(n*5+o.id)):x.berserk&&(_=16722458,w=.12+.08*Math.sin(n*9+o.id)),w>0&&S?(qs(i.glow,S,o.sprite,b,u,p,v+.5),i.glow.tint=_,i.glow.alpha=w*f):i.glow.visible=!1,M.shadowsOn&&!s&&S&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Zt[o.sprite]&&Zt[o.sprite].fly)){const I=Zt[o.sprite];i.shadow.texture=S,i.shadow.visible=!0,i.shadow.anchor.set(I.ax/I.fw,I.ay/I.fh),i.shadow.setFromMatrix(new ge(p,0,-.8*p,-.38*p,Math.round(b),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const P=Zt[o.sprite]&&Zt[o.sprite].gear;let R=0;if(P&&(o.kind==="hero"||o.illusion)){const I=o.illusion?o.owner&&M.mode!=="guest"?e.gearCode(o.owner):0:M.mode==="guest"?o.gear||0:e.gearCode(o),O={w:I&3,h:I>>2&3,a:I>>4&3,b:I>>6&3};for(const k of["a","b","h","w"]){const G=O[k];if((G>0||k==="w")&&P[k]&&P[k].includes(G)){const $=o.sprite+"__"+k+G;if(!i.gear[R]){const ot=new De(bt.EMPTY);Nt.entities.addChild(ot),i.gear[R]=ot}qs(i.gear[R],Zo($,h,m,d),$,b,u,p,v+.2+R*.05),i.gear[R].alpha=f,R++}}}for(;R<i.gear.length;R++)i.gear[R].visible=!1}for(const[o,i]of _i)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const s of i.gear)s.destroy();_i.delete(o)}}let iM=0;const Yo=new Map,m0={},wi=[];let sM=0;function aM(e,t){const n=e+(t?"o":"c");let r=m0[n];return r||(r=bt.from(Qh(e,t)),r.source.scaleMode="nearest",m0[n]=r),r}function lM(){const e=M.game,t=e&&e.player,n=++sM;if(wi.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;wi.push(r);let i=Yo.get(r.id);if(!i){const u=new De(bt.EMPTY);u.anchor.set(.5,1-1/36),Nt.entities.addChild(u),i={spr:u,seen:0},Yo.set(r.id,i)}i.seen=n;const[s,a]=T(r.x,r.y),l=r.until-e.t;i.spr.texture=aM(r.kind,Ya(r,M.T)),i.spr.x=Math.round(s),i.spr.y=Math.round(a),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(M.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of Yo)o.seen!==n&&(o.spr.destroy(),Yo.delete(r))}function uM(e,t){const n=M.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=M.mouse.wx,s=M.mouse.wy,a=Math.hypot(i-e.x,s-e.y)>r.WARD_RANGE;if(it(e.x,e.y,r.WARD_RANGE,a?"#ffffff70":"#ffffffb0",null,2,[8,6]),a){const[l,u]=T(e.x,e.y),[f,c]=T(i,s);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-M.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,c),t.stroke(),t.restore()}it(i,s,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),cy(t,o?"sen":"obs",i,s)}function fM(e){if(!e.sprite||!qa(e.sprite))return;const t=Zo(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new De(t),r=Zt[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=T(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,Nt.entities.addChild(n),Fr.push({spr:n,t:0,vy:20})}function cM(e){const t=M.cam,n=M.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(M.W/2-t.x*t.z+r),s=Math.round(M.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])Nt[m].scale.set(t.z),Nt[m].position.set(i,s);const a=t.x-M.W/2/t.z-2,l=t.y-M.H/2/t.z-2,u=M.W/t.z+4,f=M.H/t.z+4;pa&&(pa.tilePosition.set(-n*14,-n*3),pa.alpha=.45+.12*Math.sin(n*1.3)),ya&&(ya.tilePosition.set(Math.sin(n*.3)*6,0),ya.alpha=.25+.15*Math.sin(n*.9));const c=M.game&&M.game.player,[h,d]=c?T(c.x,c.y):[0,0];for(const m of Ba){const[p,g]=T(m.o.x,m.o.y),x=p>a-200&&p<a+u+200&&g>l-100&&g<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=Zo(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Zt[m.o.sprite];if(m.spr.alpha=c&&m.o.x+m.o.y>c.x+c.y&&b&&Math.abs(h-p)<b.fw*.42&&d<g&&d>g-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const v=m.o,S=(v.x*12.9898+v.y*78.233)%6.28,_=.8+(v.x*7.1+v.y*3.3)%1*.7,w=(.02+(v.x*3.7+v.y*9.1)%1*.025)*(.6+M.wind);m.spr.skew.x=-(Math.sin(n*_*1.6+S)*w+Math.sin(n*_*3.1+S*2)*w*.3+M.wind*.02)}}}}M.game&&(Mg(e,a,l,u,f,rf),oM(),lM());for(const m of Fr)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=Fr.length-1;m>=0;m--)Fr[m].t>.8&&(Fr[m].spr.destroy(),Fr.splice(m,1));dM(),qb(i,s),nf=ju,xM(),M.game&&M.game.player?bM():af&&(af=!1,Ln.getContext("2d").clearRect(0,0,Ln.width,Ln.height))}let af=!1;const lf=1;function Y1(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&Z[r+"_"+n.slice(-1)])}function Zl(e,t=1){const n=e.getContext("2d"),r=M.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(M.W/2-r.x*r.z+o)*t,Math.round(M.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const hM={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function dM(){const e=M.game,t=M.T,n=Zl(si,lf);let r=Zl(oi,lf);if(Xc(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;Sg();for(const l of e.zones){if(l.fx==="mon_spores"){py(l);continue}if(!Y1(l))if(l.once){const u=1-l.t/l.dur;it(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),it(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(it(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&A({type:"puff",x:l.x+y(-1,1)*l.r*.8,y:l.y+y(-1,1)*l.r*.8,r:y(12,22),dur:y(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const c=Math.random()*6.28,h=Math.random()*l.r;A({type:"meteor",x:l.x+Math.cos(c)*h,y:l.y+Math.sin(c)*h,dur:.25})}}}_g();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];it(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of wi)uy(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||Ae(l)||it(l.x,l.y,.42,l===o?"#ffd24a":Ma[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const s=M.hoverUnit;s&&s!==o.target&&!s.dead&&it(s.x,s.y,(s.r||.4)*(s.scale||1)+.22,s.team===o.team?"#ffffff":"#ff6a5a",s.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=T(l.x,l.y,1.3),[c,h]=T(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(c,h),r.stroke(),r.restore()}o.target&&!o.target.dead&&it(o.target.x,o.target.y,(o.target.r||.4)+.2,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&it(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(mM(o),uM(o,r),M.hoverAbil){const l=i[o.heroKey].abil[M.hoverAbil];l.range&&it(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe")&&it(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const a=M.marker;if(a){const l=a.t/.3;l<1&&(r.globalAlpha=1-l*.7,it(a.x,a.y,.28*(1-l)+.06,a.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||Ae(l))continue;l.status&&l.status.slow&&it(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,hM[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u){const f=u.kind==="fire",c=.5+.5*Math.sin(t*6);it(l.x,l.y,1+c*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&it(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let h=0;h<3;h++)Math.random()<.7&&z(l.x+y(-.6,.6),l.y+y(-.6,.6),y(.1,1.2),y(-.3,.3),y(-.3,.3),y(1,2.4),.6,f?En("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&it(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&it(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&z(l.x+y(-.3,.3),l.y+y(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(it(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&z(l.x+y(-.4,.4),l.y+y(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),fg(l)}}if(r=Zl(ii),Xc(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const s=window.SIM.RUNES[i.kind],a=Math.sin(t*3+i.id)*.08,[l,u]=T(i.x,i.y,.55+a),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,s.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of wi)fy(i,i.team===o.team);Pg(),wg(),pM(r)}Tg()}Cg(),e&&e.player&&gM(r)}function mM(e){if(!M.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[M.aim.k],n=M.mouse.wx,r=M.mouse.wy;let o=n-e.x,i=r-e.y;const s=Math.hypot(o,i)||1;o/=s,i/=s;const a="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&it(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),t.type==="proj"||t.type==="dash"){const u=t.range,f=(t.width||1)/2,c=-i*f,h=o*f;Gc([[e.x+c,e.y+h],[e.x+o*u+c,e.y+i*u+h],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-c,e.y+i*u-h],[e.x-c,e.y-h]],a,l)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let c=0;c<=12;c++){const h=u-t.angle+2*t.angle*c/12;f.push([e.x+Math.cos(h)*t.range,e.y+Math.sin(h)*t.range])}Gc(f,a,l)}else{const u=Math.min(s,t.range||0),f=e.x+o*u,c=e.y+i*u;it(f,c,t.radius||.6,a,l,2)}}function pM(e){const t=M.T;for(const n of M.game.units){if(n.dead||Ae(n))continue;const r=n.status||{};if(cg(e,n),!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;z(n.x+y(-.3,.3),n.y+y(-.3,.3),l<0?1.1:.2,y(-.2,.2),y(-.2,.2),l,.7,En(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&z(n.x+y(-.25,.25),n.y+y(-.25,.25),.3,0,0,1.4,.4,En("fire"),3,-1,!0);continue}const o=Zt[n.sprite],i=n.scale||1,[s,a]=T(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(s+Math.cos(u)*f,a+Math.sin(u)*f*.5),e.quadraticCurveTo(s+Math.cos(u+.8)*f*.4,a-10*i,s+Math.cos(u+1.6)*f*.6,a-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(s+Math.cos(u+1.6)*f*.6-2,a-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=a-(o?o.ay*.8:50)*i;if(l==="bash")$2(e,s,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const c=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(s+Math.cos(c)*16-3,u+Math.sin(c)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(s+Math.cos(c)*16-1,u+Math.sin(c)*5-1,2,2)}else{for(let f=0;f<3;f++){const c=t*5+f*2.09,h=s+Math.cos(c)*14,d=u+Math.sin(c)*4;e.fillStyle="#ffe070",e.fillRect(h-3,d-1,6,2),e.fillRect(h-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(h-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const c=-t*4+f*3.14,h=s+Math.cos(c)*20,d=u-6+Math.sin(c)*6;e.fillStyle="#ffffff",e.fillRect(h-3,d,3,2),e.fillRect(h,d-2,3,2)}}l==="splash"&&Math.random()<.3&&z(n.x+y(-.3,.3),n.y+y(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const Xi=new Map;function ga(e,t,n){const r=n+"|"+t+"|"+e;let o=Xi.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),s=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,a=Math.max(2,n/4);return i.font=s,o.width=Math.ceil(i.measureText(e).width+a*2+2),o.height=Math.ceil(n*1.35+a*2),i.font=s,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=a,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),Xi.size>2e3&&Xi.delete(Xi.keys().next().value),Xi.set(r,o),o}function yM(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(Ma))ga(e[t].name,n,11),ga("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)ga(String(t),"#ffe070",10)}function gM(e){const t=M.game,n=t.player,r=M.cam,o=window.SIM.HEROES,i=r.x-M.W/2/r.z,s=r.y-M.H/2/r.z,a=M.W/r.z,l=M.H/r.z,u=(c,h,d,m,p,g,x)=>{e.fillStyle="#000000c0",e.fillRect(c-1,h-1,d+2,m+2),e.fillStyle=x,e.fillRect(c,h,d,m),e.fillStyle=g,e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(c,h,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(c,h,d,m,p,g=p)=>{const x=ga(c,m,g),b=p/g,v=x.width*b,S=x.height*b;e.drawImage(x,Math.round(h-v/2),Math.round(d-S/2),v,S)};for(const c of t.units){if(c.dead||Ae(c))continue;const h=(c.x-c.y)*N.HW+N.OX,d=(c.x+c.y)*N.HH;if(h<i-60||h>i+a+60||d<s-60||d>s+l+160||c.kind==="monster"&&c.hp>=c.maxHp-1&&!c.boss)continue;const m=Zt[c.sprite],g=d-(c.leaping?40:0)-(m?m.ay*(c.scale||1)*(c._fbScale||1)*(c.monster==="serpent"?1.4:.92):50)-6,x=c.kind==="hero"||c.kind==="tower"||c.kind==="nexus"||c.boss,b=x?66:34,v=x?7:4,S=c===n?"#3ccf4e":c.team==="neutral"?"#e8c040":Ma[c.team];if(e.globalAlpha=n&&c.team!==n.team&&c._va!==void 0?Math.min(1,c._va):1,u(h-b/2,g,b,v,c.hp/c.maxHp,S,"#1a0e0e"),c.kind==="minion"&&c.team!==n.team&&c.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(h-b/2-1.5,g-1.5,b+3,v+3)),c.kind==="hero")for(let _=1;_<6;_++)e.fillStyle="#00000080",e.fillRect(h-b/2+b*_/6,g,1,v);c.shield>0&&M.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(h-b/2+c.hp/c.maxHp*b,g,Math.min(b*(1-c.hp/c.maxHp),c.shield/c.maxHp*b),v)),c.kind==="hero"&&(e.fillStyle="#120c1a",e.fillRect(h-b/2-16,g-2,14,v+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(h-b/2-16,g-2,14,v+4),f(String(c.level),h-b/2-9,g+v/2+1,"#ffe070",10),c!==n&&f((c.human?"★ ":"")+o[c.heroKey].name,h,g-9,Ma[c.team],11)),e.globalAlpha=1}for(const c of t.texts){if(c.dst!==void 0&&c.dst!==n.id&&c.src!==n.id&&!(n.target&&c.dst===n.target.id))continue;const[h,d]=T(c.x,c.y,1.1+c.t*.9);e.globalAlpha=Math.max(0,1-c.t/1.1);const m=c.t<.12?1.4-c.t*3:1;f(et.t(String(c.txt)),h+(c.id%7-3)*3,d,c.col,(c.big?20:14)*m,c.big?20:14)}e.globalAlpha=1}function xM(){let e=0;const t=M.T,n=(r,o,i,s,a,l)=>{let u=Hs[e];u||(u=new De(Ga),u.anchor.set(.5),u.blendMode="add",Nt.lightsCam.addChild(u),Hs[e]=u),e++;const[f,c]=T(r,o,i);u.visible=!0,u.x=f,u.y=c,u.width=u.height=s*(2+.35*nf),u.tint=a,u.alpha=Math.min(1,l*(1+.7*nf))};for(const r of Na)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of Na)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&z(r.x+y(-.1,.1),r.y+y(-.1,.1),.9,y(-.2,.2),y(-.2,.2),y(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(M.game){for(const r of M.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),Ae(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*N.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of wi)Ya(r,t)&&n(r.x,r.y,Ef(r.kind)/N.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of M.game.zones)r.once&&!Y1(r)&&n(r.x,r.y,0,r.r*N.HW*1.4,13143295,.35);for(const r of M.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<Hs.length;e++)Hs[e].visible=!1}let jr=null;function vM(){if(jr)return jr;jr=document.createElement("canvas"),jr.width=jr.height=128;const e=jr.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),jr}function bM(){const t=Math.ceil(M.W/4),n=Math.ceil(M.H/4),r=M.cam;(Ln.width!==t||Ln.height!==n)&&(Ln.width=t,Ln.height=n),af=!0;const o=Ln.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of M.visionSrc){const[s,a]=T(i.x,i.y),l=((s-r.x)*r.z+M.W/2)/4,u=((a-r.y)*r.z+M.H/2)/4,f=D0(i.kind)*N.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(vM(),l-f,u-f/2,f*2,f)}}function MM(e){if(!qa("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,s=Math.sqrt(n())*r.r*.85,a=r.x+Math.cos(i)*s,l=r.y+Math.sin(i)*s;sf({x:a,y:l,sprite:"prop_bush",tree:!1},!1);const f=Ba[Ba.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function K1(){for(const[,e]of _i){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy()}_i.clear();for(const e of Fr)e.spr.destroy();Fr.length=0;for(const[,e]of Yo)e.spr.destroy();Yo.clear(),wi.length=0}const SM=performance.now(),ss=[],as=[],Ko={};let Jl=0,Eo=0,tu=0,eu=0,uf=0,Ys=0,xa=0,qf=0,ff={};const Ja=()=>Math.round((performance.now()-SM)/100)/10;function _M(e){ff={...ff,...e}}function Hr(e,t){as.push([Ja(),e,String(t).slice(0,300)]),as.length>3e3&&as.splice(0,500)}function wM(e){Jl++,e>Eo&&(Eo=e),e>33&&tu++,e>50&&eu++;const t=performance.now();if(t-Ys>=1e3){const n=Ys?(t-Ys)/1e3:1;ss.push([Ja(),Math.round(Jl/n),Math.round(Eo),tu,eu,Math.round(uf/n),Math.round(xa)]),ss.length>2400&&ss.shift(),Eo>100&&Hr("hitch",`cuadro de ${Math.round(Eo)} ms`),Jl=0,Eo=0,tu=0,eu=0,uf=0,Ys=t}}function AM(){uf++}function TM(e){xa=xa?xa*.8+e*.2:e}function CM(e,t){(Ko[e]=Ko[e]||[]).push([Ja(),t]),Ko[e].length>400&&Ko[e].shift()}function RM(){const e=ss.slice(-10);if(!e.length)return null;const t=n=>Math.round(e.reduce((r,o)=>r+o[n],0)/e.length);return{fps:t(1),worst:Math.max(...e.map(n=>n[2])),slow:e.reduce((n,r)=>n+r[3],0),snaps:t(5),ping:t(6),lt:qf,err:as.filter(n=>n[1]==="error").length}}try{new PerformanceObserver(t=>{for(const n of t.getEntries())qf++,n.duration>120&&Hr("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}function j1(){const e=navigator,t={...ff,browser:navigator.userAgent,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,cores:e.hardwareConcurrency,memGB:e.deviceMemory,durationS:Ja(),longTasks:qf},n=["LANELINGS LOG",JSON.stringify(t),"","# por segundo: t, fps, peor ms, cuadros>33ms, >50ms, fotos/s, ping ms"];for(const r of ss)n.push(r.join(","));n.push("","# eventos: t, tipo, texto");for(const r of as)n.push(r.join(" | "));for(const r in Ko){n.push("","# invitado "+r+" (cada 10 s): t, resumen");for(const[o,i]of Ko[r])n.push(o+" "+JSON.stringify(i))}return n.join(`
`)}function PM(){const e=j1(),t="lanelings-log-"+new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}setInterval(()=>{try{localStorage.setItem("lanelings_lastlog",j1().slice(-4e5))}catch{}},3e4);let we,hn,Pn,j,st,Gn="dragon",Mr="blue",Y=null,p0=0,co=0,nu=0,Ks=!1,jo=!1,cf=!1,gn={},Gr=null,Nr=!1,y0=0,g0=0,IM=0,ru=performance.now(),x0=-9,hf=!1;const zM=["buff","aoe_self","heal_aoe","execute"],OM=["facil","normal","dificil"],Vi=new Map;let df=!1;function Rt(e){if(e==null)return"";if(e=String(e),df||Mf.value==="es"||!window.I18N)return e;const t=Vi.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Vi.size>5e3&&Vi.clear(),Vi.set(e,r),r}function FM(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=hn[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=we.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of we.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(we&&we.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=we.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function Q1(e,t,n,r=1,o=1){if(t===void 0||n===void 0){j.play(e,r,0,.03,o);return}const[i,s]=T(t,n),a=M.cam,l=(i-a.x)*a.z,u=(s-a.y)*a.z;let f=Math.hypot(l/M.W,u/M.H);const c=M.game&&M.game.player;if(c&&!c.dead){const[h,d]=T(c.x,c.y);f=Math.min(f,Math.hypot((i-h)*a.z/M.W,(s-d)*a.z/M.H))}j.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(M.W*.6))),.03,o)}function Yf(e,t,n,r){if(!j.babble)return;const o=Math.max(0,Pn.indexOf(e))*7+3;if(n===void 0||r===void 0){j.babble(o,t,.5,0);return}const[i,s]=T(n,r),a=M.cam,l=(i-a.x)*a.z,u=(s-a.y)*a.z,f=Math.hypot(l/M.W,u/M.H),c=.5*Math.max(0,1-f*1.1);c>.05&&j.babble(o,t,c,Math.max(-1,Math.min(1,l/(M.W*.6))))}let v0=0;function ho(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function Fe(e,t="#ffe7b0",n=1.5){M.game&&M.game.msg(e,t,n)}async function EM(e){we=window.SIM,hn=we.HEROES,Pn=we.HERO_KEYS,j=window.AUDIO,st=new window.Net,xm();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(Mf.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");OM.includes(r)&&(an.value={...an.value,difficulty:r})}catch{}try{M.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}FM(),et.babble=Yf,et.sfx=Q1,et.say=ho,et.play=(r,o)=>j.play(r,o??1),et.t=Rt,et.banner=(r,o,i,s,a)=>{const l=li.value.slice(-3);li.value=[...l,{id:++IM,title:Rt(r),color:o,killerKey:i,victimKey:s,big:a}]},vm(sn),J1(),an.value={...an.value,volMaster:j.volume?j.volume("m"):1,volMusic:j.volume?j.volume("mu"):1,volSfx:j.volume?j.volume("s"):1,soundStyle:j.style?j.style():"epic",shadows:M.shadowsOn},await O2(r=>Fm.value=r),await jb(e),Zb(),$M(),yM(),await Promise.all([Yb(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,bm(),Mm().then(()=>Promise.all([Sm(Pn),_m(Pn)])),document.fonts?document.fonts.ready:null]);try{const r=new we.Game(window.MAP,{humans:[]});MM(r._makeBushes())}catch(r){console.warn(r)}YM(),KM();const[t,n]=T(N.N/2,N.N/2);M.cam.x=t,M.cam.y=n,await wm(),Ne.value="menu",st.init().then(r=>{X0.value=!!r}).catch(()=>{}),st.onChange=()=>us(),l4(),requestAnimationFrame(em)}function Z1(e){const t=we.PASSIVES&&we.PASSIVES[e];return t?{name:Rt(t[0]),desc:Rt(t[1])}:{name:"",desc:""}}function J1(){Am.value=Pn.map(e=>{const t=hn[e];return{key:e,name:t.name,title:Rt(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:Rt(t.abil[n].name),desc:Rt(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:Z1(e)}}),Tm.value=we.ITEMS.map(e=>({id:e.id,name:Rt(e.name),desc:Rt(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:we.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let b0="";function Kf(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(Hr("error",t),t===b0)return;b0=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const jf="v9.3";{const e=document.createElement("div");e.id="build-tag",e.textContent=jf,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>Kf(e.error||e.message));window.addEventListener("unhandledrejection",e=>Kf(e.reason));let tm=performance.now(),js=0;function M0(){const e=performance.now();if(e-tm<150){js=0;return}const t=js?Math.min(.05,(e-js)/1e3):1/30;js=e,M.T=e/1e3;try{const n=Ne.value;n==="pick"&&Y&&(cm(t),bo()),n==="lobby"&&hm(t),n==="play"&&M.game&&nm(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=M0,e=!0}catch{}e||setInterval(M0,33)}function em(e){tm=performance.now(),Ne.value==="play"&&wM(e-ru);const t=Math.min(.05,(e-ru)/1e3);ru=e,M.T=e/1e3;try{const n=Ne.value;n==="pick"&&Y&&(cm(t),bo()),n==="lobby"&&hm(t),n==="play"&&M.game?GM(t):UM(t),M.marker&&(M.marker.t+=t,M.marker.t>.3&&(M.marker=null)),bg(t),cM(t),(g0-=t)<=0&&M.game&&(g0=.1,a4()),(_0-=t)<=0&&(_0=.5,LM()),n!=="play"&&(S0-=t)<=0&&(S0=1,st.available&&(Im.value=st.openGames()))}catch(n){console.error(n),Kf(n)}requestAnimationFrame(em)}let S0=0,_0=0;function LM(){if(!j.setAmbient)return;const e=In(M.W/2,M.H/2),t=N.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),s=Math.max(0,1-i/11),a=Math.max(0,1-o*.7-s)*.9;j.setAmbient(o,a,s)}function UM(e){const t=M.T*.05,n=N.N/2+Math.cos(t)*12,r=N.N/2+Math.sin(t*1.3)*12,[o,i]=T(n,r);M.cam.x+=(o-M.cam.x)*Math.min(1,e*.5),M.cam.y+=(i-M.cam.y)*Math.min(1,e*.5),M.cam.z=M.cam.tz=1.25}let qi="",ou=!1,Qs=0;const Zs={};let w0=0,A0=0,kM=0,T0=0,Js={x:-99,y:-99,z:0};const C0={};function DM(){if(M.mode!=="guest"||M.T-T0<.4)return;const e=In(M.W/2,M.H/2),t=Math.round(M.cam.z*100)/100;Math.hypot(e.x-Js.x,e.y-Js.y)<2&&t===Js.z||(T0=M.T,Js={x:e.x,y:e.y,z:t},st.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function XM(){if(!(ou||!st.code)){ou=!0,Qs||(Qs=performance.now(),Fe("Se cortó la conexión. Reconectando...","#ffb070",3)),Hr("net","conexion perdida, reconectando");try{await st.rejoin(),Qs=0,Fe("¡Reconectado!","#9fe0a0",2.5),j.play("announce",.4),Hr("net","reconectado")}catch{performance.now()-Qs>9e4?(Fe("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),st.lost=!1,st.code=null):await new Promise(t=>setTimeout(t,2500))}ou=!1}}function nm(e){const t=M.game;n4(e);{const n=k0(t.t).phase;n!==qi&&(qi&&n==="dusk"&&(Fe("Cae la noche: se ve menos lejos","#a8b8ff",3),j.play("announce",.35)),qi&&n==="dawn"&&(Fe("Amanece","#ffe0a0",2.5),j.play("announce",.3)),qi=n)}if(M.mode==="guest"){if(st.lost&&XM(),DM(),M.T-A0>2&&(A0=M.T,st.send(["ping",Math.round(performance.now())])),M.T-w0>10){w0=M.T;const n=RM();n&&st.send(["tel",n])}t.guestTick(e),st.hostState&&st.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(M.mode==="host")for(const[n,r]of st.pullCommands())r[0]==="cam"?C0[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?Zs[n]=r[1]:r[0]==="tel"?CM(n,r[1]):t.input(n,r);if(!(Ki.value&&M.mode==="solo")&&!gf()&&t.update(e),M.mode==="host"&&(co-=e,co<=0)){const n=!!(st.game&&st.game.sendSnapTo);co=Math.max(0,co+(n?st.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(a=>a.human),o=Be>=0?Math.round(Be*10)/10:fr?0:-1,i=t.winner?"end":"play",s=r.map(a=>[a.human,a.team,a.heroKey]);if(n){const a=kM++%8===0;for(const l of st.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},C0[l.id]],full:a});f.I=o,Zs[l.id]!==void 0&&(f.pe=Zs[l.id],delete Zs[l.id]),st.publishTo(l.id,i,f,a?s:null)}st.publishMeta(i,s)}else{const a=t.snapshot(3300,r);a.I=o,st.publish(i,a,s)}}}}function GM(e){nm(e);const t=M.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&fM(o);(R0&&!n.dead||!n.dead&&Math.hypot(n.x-P0,n.y-I0)>8)&&$a(),R0=!!n.dead,P0=n.x,I0=n.y,NM(e),M.mouse.wx=In().x,M.mouse.wy=In().y,M.mouse.rd&&!t.winner&&!M.aim&&M.mouse.inWorld&&(nu-=e,nu<=0&&(nu=.12,im(!1))),vg(),HM(e),!cf&&t.t>7.5&&(cf=!0,ho("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;j.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),BM(e),M.hoverUnit=!M.mouse.md&&!M.aim&&M.mouse.inWorld?om():null,jM(),hf=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),hf&&M.T-x0>3&&(x0=M.T,j.play("deny",.5)),(y0-=e)<=0&&(y0=1/15,vf())}let iu=0,R0=!1,P0=0,I0=0;function NM(e){const t=M.game.player,n=M.cam,r=M.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(M.camFollow||gn[" "])){const[o,i]=T(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||lu();iu=i&&(r.x<18||r.x>M.W-18||r.y<18||r.y>M.H-18)||gn.ArrowLeft||gn.ArrowRight||gn.ArrowUp||gn.ArrowDown?Math.min(1,iu+e/.2):0;const l=2e3*(.35+.65*iu)*e/n.z;gn.ArrowLeft&&(n.x-=l),gn.ArrowRight&&(n.x+=l),gn.ArrowUp&&(n.y-=l),gn.ArrowDown&&(n.y+=l),i&&(r.x<18&&(n.x-=l),r.x>M.W-18&&(n.x+=l),r.y<18&&(n.y-=l),r.y>M.H-18&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-M.W/2)/n.z+n.x,i=(r.y-M.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(M.camFollow||gn[" "])||(n.x=o-(r.x-M.W/2)/n.z,n.y=i-(r.y-M.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*N.N*N.HW,n.x)),n.y=Math.max(0,Math.min(2*N.N*N.HH,n.y))}function z0(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function BM(e){const t=M.game,n=t.player;M.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&B0[o.kind]);for(const o of t.wards||[])o.team===n.team&&M.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=z0(o.x,o.y);let s=0;for(const a of M.visionSrc){const l=D0(a.kind);if(a.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-a.x,o.y-a.y)>2.5||Math.abs(o.x-a.x)>=l||Math.abs(o.y-a.y)>=l)continue;const u=Math.hypot(o.x-a.x,o.y-a.y);if(u<l&&(!i||z0(a.x,a.y)||u<2.2)&&(s=Math.max(s,Math.min(1,(l-u)/1.4)),s>=1))break}s>0&&t.bushHidden(o,n.team)&&(s=0),o._va=(o._va||0)+(s-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}M.visible=r}let ls=null;function rm(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function $M(){ls===null&&(ls=[qn.water_mask,qn.water_calm].filter(e=>e&&e.naturalWidth).map(rm).filter(Boolean))}function WM(e,t){ls===null&&(ls=[qn.water_mask,qn.water_calm].filter(i=>i&&i.naturalWidth).map(rm).filter(Boolean));const[n,r]=T(e,t);for(const i of ls){const s=Math.floor(n/4),a=Math.floor(r/4);if(s>=0&&a>=0&&s<i.w&&a<i.h&&i.d[(a*i.w+s)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function HM(e){const t=M.game,n=t.player,r=M.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||Ae(o)||o.dash)continue;const[i,s]=T(o.x,o.y);if(Math.abs(i-r.x)>M.W/r.z||Math.abs(s-r.y)>M.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const a=WM(o.x,o.y);if(a==="water"){A({type:"ring",x:o.x+y(-.1,.1),y:o.y+y(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)z(o.x,o.y,.1,y(-.8,.8),y(-.8,.8),y(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else a==="dirt"&&Math.random()<.5&&z(o.x,o.y,.05,y(-.3,.3),y(-.3,.3),y(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?j.play("step_"+a,.32,0,80):Math.random()<.5&&Q1("step_"+a,o.x,o.y,.12))}}function Re(e){M.mode==="guest"?(st.send(e),M.game.predict(e)):M.game.input(M.localId,e)}function om(){const e=M.game,t=e.player,n=M.cam,r=window.META;let o=null,i=1e9;const s=In();for(const a of e.units){if(a.dead||Ae(a)||a.team!==t.team&&a._va!==void 0&&a._va<.4||a.team===t.team&&!(a.kind==="minion"&&e.deniable(a,t))||M.mode!=="guest"&&a.team!==t.team&&!e.targetable(a,t))continue;const l=r[a.sprite],[u,f]=T(a.x,a.y),c=(u-n.x)*n.z+M.W/2,h=(f-n.y)*n.z+M.H/2,d=(a.scale||1)*n.z*(a.monster==="serpent"?1.45:1),m=a.kind==="tower"||a.kind==="nexus"||a.boss,p=(l?l.ay*(a.kind==="minion"?.72:.85):50)*d,g=(m?34:a.kind==="minion"?11:a.kind==="monster"?16:18)*d;let x=1e9;if(Math.abs(M.mouse.x-c)<g&&M.mouse.y<h+5*d&&M.mouse.y>h-p)x=Math.abs(M.mouse.x-c)/g+Math.abs(M.mouse.y-(h-p/2))/p;else if(a.kind==="hero"||m){const b=Math.hypot(s.x-a.x,s.y-a.y);b<a.r*(a.scale||1)+.2&&(x=1.5+b)}x>1e8||(a.kind==="hero"&&(x-=.4),x<i&&(i=x,o=a))}return o}function VM(){const e=M.cam,t=window.META;let n=null,r=1e9;for(const o of M.game.units){if(o.dead||Ae(o)||o.kind==="hero"||o.team!==M.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,s]=T(o.x,o.y),a=(i-e.x)*e.z+M.W/2,l=(s-e.y)*e.z+M.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,c=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,h=(f?34:14)*u;if(Math.abs(M.mouse.x-a)<h&&M.mouse.y<l+6*u&&M.mouse.y>l-c){const d=Math.abs(M.mouse.x-a)+Math.abs(M.mouse.y-(l-c/2));d<r&&(r=d,n=o)}}return n}function qM(){const e=M.cam,t=window.META;let n=null,r=1e9;for(const o of M.game.heroes){if(o.dead||Ae(o))continue;const[i,s]=T(o.x,o.y),a=(i-e.x)*e.z+M.W/2,l=(s-e.y)*e.z+M.H/2,u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;if(Math.abs(M.mouse.x-a)<f&&M.mouse.y<l+10*e.z&&M.mouse.y>l-u){const c=Math.abs(M.mouse.x-a)+Math.abs(M.mouse.y-(l-u/2));c<r&&(r=c,n=o)}}return n}function im(e){const t=In();if(!e&&Ks)return;const n=e?om():null;if(e&&(Gr=n&&n.kind==="hero"&&n!==M.game.player&&n.team===M.game.player.team?n.id:null),n){Ks=!0,Re(["a",n.id]),j.play("click",.3),M.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=M.game.player,o=(M.game.wards||[]).find(i=>i.team!==r.team&&M.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){Ks=!0,Re(["dw",o.id]),j.play("click",.3),M.marker={x:o.x,y:o.y,t:0,atk:!0};return}}Ks=!1,Re(["m",t.x,t.y]),e&&(M.marker={x:t.x,y:t.y,t:0},j.play("move",.25),M.T-v0>7&&Math.random()<.5&&(v0=M.T,Yf(M.game.player.heroKey,"ok")))}function sm(e){const t=M.game.player;if(t.ranks&&!t.ranks[e]){Fe(t.points>0&&M.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),j.play("deny",.6);return}if((t.cds[e]||0)>.05){Fe("En enfriamiento","#bbbbbb",.8),j.play("deny",.5);return}const n=hn[t.heroKey].abil[e],r=In();if(Gr=null,zM.includes(n.type)){Re(["c",e,r.x,r.y]),M.aim=null;return}if(M.aim&&M.aim.k===e){um();return}M.aim={k:e},j.play("aim",.3)}function am(){if(!M.tpAim)return;const e=In();Re(["u","tp_scroll",e.x,e.y]),j.play("click",.4),M.tpAim=!1}function lm(){if(!M.wardAim)return;const e=In();Re(["u",M.wardAim.id,e.x,e.y]),j.play("click",.4),M.wardAim=null}function um(){if(!M.aim)return;const e=In();Re(["c",M.aim.k,e.x,e.y]),M.aim=null}function mf(e){const t=M.game&&M.game.player;t&&(M.game.canRankUp(t,e)?(Re(["l",e]),j.play("levelup",.5)):(Fe(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),j.play("deny",.4)))}function $a(){const e=M.game&&M.game.player;if(!e)return;const[t,n]=T(e.x,e.y);M.cam.x=t,M.cam.y=n-30}function pf(){M.cam.tz=Sf,M.cam.zoomMsgT=1.2}function YM(){const e=Vf();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),Cm(e),window.addEventListener("mousemove",t=>{lu()||(M.mouse.md&&(M.cam.x-=(t.clientX-M.mouse.x)/M.cam.z,M.cam.y-=(t.clientY-M.mouse.y)/M.cam.z),M.mouse.x=t.clientX,M.mouse.y=t.clientY,M.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{Ne.value==="play"&&(M.cam.tz=Math.max(.75,Math.min(3,M.cam.tz*(t.deltaY>0?.9:1.1))),M.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&pf()}),e.addEventListener("mousedown",t=>{j.init(),j.startMusic(),window.VOICE&&window.VOICE.init(),lu()||(M.mouse.x=t.clientX,M.mouse.y=t.clientY,Ne.value==="play"&&!gf()&&Rm(t.clientX,t.clientY));const n=M.game;if(!(Ne.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){M.mouse.md=!0,t.preventDefault();return}if(!Ki.value){if(t.button===0&&t.altKey){sn.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(M.wardAim){lm();return}if(M.tpAim){am();return}if(M.aim){um();return}if(M.amove){M.amove=!1;const o=In();Re(["am",o.x,o.y]),M.marker={x:o.x,y:o.y,t:0,atk:!0},j.play("click",.3);return}const r=qM()||VM();Gr=r&&r!==n.player?r.id:null}if(t.button===2){if(M.aim&&(M.aim=null),M.wardAim){M.wardAim=null;return}if(M.tpAim){M.tpAim=!1;return}M.amove=!1,M.mouse.rd=!0,im(!0)}}}}),window.addEventListener("mouseup",t=>{t.button===2&&(M.mouse.rd=!1),t.button===1&&(M.mouse.md=!1),t.button===0&&(M.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;j.init();const r=M.game,o=t.key.toUpperCase();if(Ne.value==="play"&&r&&r.player&&t.key==="Enter"){G0.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){j.toggleMute();return}if(o==="N"){j.toggleMusic();return}if(Ne.value!=="play"||!r||!r.player)return;if(gf()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&M.mode==="solo"&&(ym(),t.preventDefault());return}const i=r.player;if(!(t.key==="Escape"&&Em())){if(t.key==="Escape"){M.aim||M.wardAim||M.tpAim||No.value?(M.aim=null,M.wardAim=null,M.tpAim=!1,No.value=!1):Ki.value=!Ki.value;return}if(t.key==="Tab"){t.repeat||(Yi.value=!Yi.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){mf(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(jo=!jo,j.play("aim",.4)):(Fe("No tienes puntos de habilidad","#bbbbbb",1),j.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&jo){jo=!1,mf(o);return}if("QWER".includes(o)&&o.length===1){M.wardAim=null,sm(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){sn.useItem(+t.key-1),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){$a(),t.preventDefault();return}if(t.key.startsWith("Arrow")){gn[t.key]=!0,t.preventDefault();return}if(o==="P"){No.value=!No.value,j.play("click",.4);return}if(o==="H"&&o.length===1){sn.useCons("pocion");return}if(o==="V"&&o.length===1){sn.useCons("ojo");return}if(o==="J"&&o.length===1){sn.useCons("clarity");return}if(o==="X"&&o.length===1){sn.useCons("tp_scroll");return}if(o==="I"&&o.length===1){sn.useCons("dust");return}if(o==="C"&&o.length===1){sn.useCons("centinela");return}if(o==="K"){j.setStyle&&(sn.setSoundStyle(j.style()==="epic"?"pixel":"epic"),Fe("Sonido: "+(j.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){M.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){sn.spell(o);return}if(o==="G"&&o.length===1){sn.ping(t.shiftKey?"omw":"danger");return}if(o==="S"&&Re(["s"]),o==="B"){sn.recall();return}o==="Y"&&(M.camFollow=!M.camFollow),o==="Z"&&pf(),t.key===" "&&(gn[" "]=!0,$a(),t.preventDefault())}}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete gn[t.key]}),window.addEventListener("blur",()=>{Yi.value=!1,gn={},M.mouse.md=!1,M.mouse.rd=!1,M.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{M.mouse.inWorld=!1})}const er={};function KM(){const e=(r,o,i,s)=>{const a=document.createElement("canvas");a.width=40,a.height=40;const l=a.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,c)=>[...f].forEach((h,d)=>{h!==" "&&(l.fillStyle=h==="X"?"#0a0610":h==="L"?o:h==="M"?r:i,l.fillRect(d*2,c*2,2,2))})),s){for(let h=0;h<7;h++)l.fillStyle="#0a0610",l.fillRect(18+h*2-1,26-h*2-1,4,4);for(let h=0;h<7;h++)l.fillStyle=h<5?"#e8eef8":"#ffd24a",l.fillRect(18+h*2,26-h*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${a.toDataURL()}) 0 0, auto`};er.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),er.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),er.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);er.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=er.normal}let O0="";function jM(){const e=M.game&&M.game.player,t=M.hoverUnit,n=M.aim||M.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==O0&&(O0=n,Vf().style.cursor=er[n],document.documentElement.style.cursor=er.normal,W0(er[n]))}function fm(){const e=M.mode==="solo"?"local":st.myPeer||"host";return Y&&Y.h&&Y.h[e]}function va(e){const t=e?[{id:st.myPeer||"host",team:Mr},...st.guests().map(s=>({id:s.id,team:s.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const s of t)r[s.team]<5&&(n[s.id]=[s.team,r[s.team]++,0]);const o=[];let i=0;for(const s of["blue","red"])for(let a=r[s];a<5;a++)o.push({team:s,slot:a,at:2+Math.random()*24,q:i++});o.sort((s,a)=>s.q%2-a.q%2||s.q-a.q),o.forEach((s,a)=>s.q=a),Y={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Gn||Pn[0],locked:!1,prep:-1,online:!!e},e&&(M.mode="host"),Ne.value="pick",j.setMode("menu"),j.play("announce",.6),bo()}function yf(e,t){if(!Y||!e)return;const n=t===void 0;if(n&&M.mode==="guest"){Y.locked||(st.send(["lock",e]),Gn=e,Y.pending=e,j.play("levelup",.7));return}const r=n?M.mode==="solo"?"local":st.myPeer||"host":t,o=Y.h[r];if(!o||o[2])return;const[i,s]=o,a=l=>Y.blue.includes(l)||Y.red.includes(l);if(a(e))if(n){j.play("deny",.6);return}else{const l=Pn.filter(u=>!a(u));e=l[Math.random()*l.length|0]}Y[i][s]=e,o[2]=1,n&&(Y.locked=!0,Gn=e,Y.view=e,j.play("levelup",.7),Yf(e,"select"))}function F0(e){const t=Y[e],n=[...Y.blue,...Y.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(s=>!t.some(a=>a&&hn[a].role===s));let o=Pn.filter(s=>!n.includes(s));const i=o.filter(s=>r.includes(hn[s].role));return i.length&&(o=i),o[Math.random()*o.length|0]||Pn[Math.random()*Pn.length|0]}function cm(e){if(M.mode==="guest")return QM();if(Y.online){for(const[n,r]of st.pullCommands())r[0]==="lock"&&yf(r[1],n);(p0-=e)<=0&&(p0=.25,st.publishDraft({t:Math.round(Y.t*10)/10,p:Math.round(Y.prep*10)/10,b:Y.blue,r:Y.red,h:Y.h}))}if(Y.prep>=0){Y.prep-=e,Y.prep<=0&&(Y.online?ZM():dm());return}if(!Y.online){if(Y.locked){Y.bt=(Y.bt||0)+e;for(const n of Y.order)!n.done&&Y.bt>=(Nr?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,Y[n.team][n.slot]=F0(n.team),j.play("click",.35))}Y.locked&&Y.order.every(n=>n.done)&&(Y.prep=Nr?1.5:3,j.play("announce",.7));return}if(Object.values(Y.h).every(n=>n[2])){Y.bt=(Y.bt||0)+e;for(const n of Y.order)!n.done&&Y.bt>=.3+n.q*.28&&(n.done=!0,Y[n.team][n.slot]=F0(n.team),j.play("click",.35));Y.order.every(n=>n.done)&&(Y.prep=4,j.play("announce",.7))}}function QM(){const e=st.hostState;if(e&&e.st==="play"&&e.S){Y=null,Mo.value=null,mm();return}const t=e&&e.D;if(!t)return;const n=Y.blue.join()+Y.red.join();Y.t=t.t,Y.prep=t.p,Y.blue=t.b,Y.red=t.r,Y.h=t.h,n!==Y.blue.join()+Y.red.join()&&j.play("click",.35);const r=fm();r&&r[2]?(Y.locked=!0,Gn=Y[r[0]][r[1]],Y.view=Gn||Y.view):Y.pending&&performance.now()-(Y.sentAt||0)>1e3&&(Y.sentAt=performance.now(),st.send(["lock",Y.pending]))}function bo(){if(!Y){Mo.value=null;return}const e=fm(),t=M.mode==="solo"?"local":st.myPeer||"host";Mo.value={online:!!Y.online,t:Y.t,prep:Y.prep,blue:[...Y.blue],red:[...Y.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(Y.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!Y.locked,pending:Y.pending||null,view:Y.view}}function hm(e){st.role==="guest"&&st.hostState&&st.hostState.st==="pick"&&st.hostState.D&&(M.mode="guest",M.localId=st.myPeer,Y={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Gn||Pn[0],locked:!1,prep:-1,online:!0},Ne.value="pick",j.play("announce",.6)),st.role==="guest"&&st.hostState&&st.hostState.st==="play"&&st.hostState.S&&mm(),st.role==="host"&&(co-=e,co<=0&&(co=1.5,st.setChoice(Gn,Mr))),(E0-=e)<=0&&(E0=.3,us())}let E0=0;function us(){const e=[];if(st.role==="host"){e.push({name:Rt("Tú (anfitrión)"),team:Mr,me:!0});for(const t of st.guests())e.push({name:Rt("Invitado"),team:t.team,me:!1})}else st.role==="guest"&&(e.push({name:Rt("Tú"),team:Mr,me:!0}),st.hostState&&e.push({name:Rt("Anfitrión"),team:st.hostState.team,me:!1}));Qe.value={...Qe.value,role:st.role,code:st.code,myTeam:Mr,players:e,hostFound:!!st.hostState}}function dm(){M.mode="solo",M.localId="local";const e=Y?{blue:Y.blue.slice(1).filter(Boolean),red:Y.red.filter(Boolean)}:null;M.game=new we.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Gn}],localId:"local",picks:e,difficulty:an.value.difficulty,aram:Nr}),Nr&&(Nr=!1,M.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),Y=null,Mo.value=null,Qf(),M.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function ZM(){M.mode="host",M.localId=st.myPeer||"host";const e=[],t={blue:[],red:[]};if(Y){for(const n in Y.h){const[r,o]=Y.h[n];e.push({id:n,team:r,hero:Y[r][o]||Pn[0]})}for(const n of["blue","red"])Y[n].forEach((r,o)=>{r&&!Object.values(Y.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}Y=null,Mo.value=null,M.game=new we.Game(window.MAP,{humans:e,localId:M.localId,picks:t,difficulty:an.value.difficulty}),st.lastSeq={};for(const n of st.guests())st.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of st.guests()){const r=M.game.slots[n.id];r&&(r.cid=n.cid)}st.onGuests=(n,r)=>{const o=M.game;if(o){for(const i of r.left||[]){const s=o.slots[i.peer];s&&!s.bot&&(s.bot=!0,s.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||JM(o,i)}},Qf(),M.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function JM(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(s=>s.bot&&!s.isPlayer&&!s.away&&(!i||s.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,st.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),Hr("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function mm(){M.mode="guest",M.localId=st.myPeer,M.game=new we.Game(window.MAP,{humans:[],localId:M.localId}),M.game.units=[],M.game.heroes=[],M.game.player=null,st.onSnapshot=e=>{M.game&&M.mode==="guest"&&(AM(),e.pe&&TM(performance.now()-e.pe),st.myPeer&&(M.localId=st.myPeer),M.game.applySnapshot(e,M.localId))},st.hostState&&st.hostState.S&&M.game.applySnapshot(st.hostState.S,M.localId),Qf()}const yr={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let ba=0,Be=-1,ai=[],t4=0,fr=!1,Wa=0;function gf(){return Be>=0}function pm(){const e=M.game,t=e.player;E2(e.heroes.map(a=>a.sprite||a.heroKey));const n=a=>{const l=hn[a.heroKey]||{};return{key:a.heroKey,name:l.name||a.heroKey,title:l.title||"",role:l.role||"",me:a===t,human:!!a.human}},r=a=>e.heroes.filter(l=>l.team===a).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){fr=!0;return}fr=!1;const s=Wa;Wa=0,_f.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++t4,off:s,canSkip:M.mode==="solo"},Be=s,ba=0,ai=[[.15,()=>ho("blue_team")],...o.map((a,l)=>[yr.blue+l*yr.step+.05,()=>j.play("reveal",.8)]),[yr.red-.35,()=>ho("red_team")],...i.map((a,l)=>[yr.red+l*yr.step+.05,()=>j.play("reveal",.8)]),[yr.vs-.02,()=>{j.play("vsslam",1),ho("versus")}],[yr.go,()=>{j.play("warhorn",.9),ho("battle"),j.setMode("battle")}]].filter(a=>a[0]>=s-.05),j.setMode("menu")}function e4(){const e=st.hostState&&st.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?Be<0?(Wa=t,fr=!0):Math.abs(Be-t)>.6&&(Be=t):(Be>=0||fr)&&(fr=!1,Be>=0&&tl())}function n4(e){if(M.mode==="guest"&&e4(),fr&&M.game&&pm(),Be<0)return;const t=performance.now()/1e3,n=ba?t-ba:0;for(ba=t,Be+=n>2?.05:n||e;ai.length&&ai[0][0]<=Be;)ai.shift()[1]();Be>=yr.end&&tl()}function tl(){fr=!1,!(Be<0)&&(Be=-1,ai=[],_f.value=null,$a(),j.setMode("battle"))}function ym(){Be<0||M.mode!=="solo"||(Be<yr.go&&(j.play("warhorn",.7),ho("battle")),tl())}function Qf(){W0(er.normal);try{const e=M.game,t=e&&e.player;_M({build:jf,mode:M.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:M.gpuName,softGpu:M.softGpu,difficulty:an.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),Hr("game","empieza la partida ("+M.mode+")")}catch{}if(ed(),K1(),Ne.value="play",li.value=[],j.setMode("battle"),cf=!1,M.mode==="guest"?fr=!1:pm(),Gr=null,M.aim=null,M.amove=!1,jo=!1,M.cam.z=M.cam.tz=Sf,M.game.player){const[e,t]=T(M.game.player.x,M.game.player.y);M.cam.x=e,M.cam.y=t-30}}async function L0(){Om(),Nr=!1,qi="",xf=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}Be=-1,ai=[],fr=!1,Wa=0,_f.value=null,Ki.value=!1,No.value=!1,Yi.value=!1,M.aim=null,Y=null,Mo.value=null,M.mode!=="solo"&&await st.leave(),M.game=null,M.mode="solo",K1(),ed(),$0.value=null,N0.value=null,li.value=[],Ne.value="menu",j.setMode("menu"),Vf().style.cursor=er.normal}function r4(e){const t=hn[e.heroKey],n=(e.items||[]).map(o=>we.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,s)=>i+(s[o]||0),0);return[{label:Rt("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:Rt("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:Rt("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:Rt("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:Rt("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:Rt("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:Rt("Alcance"),value:String(t.range)}]}const gm=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function su(e){return(e.items||[]).filter(t=>!we.ITEM[t].line)}function au(e){const t=M.game,n=hn[e.heroKey],r=t.player,o=e===r,i=[];for(const h of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[h]&&i.push(h);e.aegis&&(M.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const s=(e.items||[]).map((h,d)=>{const m=we.ITEM[h],p=m.active?{cd:m.active.cd,left:e.team!==t.player.team?0:M.mode==="guest"?(e.itemCdLeft||[])[d]||0:Math.max(0,((e.itemCd||{})[h]||0)-t.t)}:null;return{id:h,slot:0,name:Rt(m.name),desc:Rt(m.desc),tier:m.tier||0,line:m.line||null,count:1,active:p}}),a=s.filter(h=>!h.line).map((h,d)=>({...h,slot:d})),l=s.filter(h=>h.line),u=gm.map(([h,d,m])=>{const p=we.ITEM[h];return{id:h,key:d,count:e[m]||0,max:p.max,name:Rt(p.name),desc:Rt(p.desc)}}),f=e.team!==r.team,c=o||!f;return{id:e.id,heroKey:e.heroKey,name:n.name,title:Rt(n.title),role:Rt(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:Z1(e.heroKey),xpFrac:M.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&c?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,abil:["Q","W","E","R"].map(h=>{const d=n.abil[h],m=e.ranks?e.ranks[h]:1;return{key:h,name:Rt(d.name),desc:Rt(d.desc),cd:f?0:e.cds&&e.cds[h]||0,cdMax:d.cd,rank:m,cost:t.manaCost?t.manaCost(e,h):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,h)),dmg:d.dmg?Math.round(d.dmg*t.abilMul(e,h)):null,type:d.type,fx:d.fx}}),items:a,gearItems:l,cons:u,gear:M.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:Rt("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:Rt("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:r4(e),human:!!e.human,isMe:o,status:i}}function o4(e){const t=e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:Rt(r),value:o});return{id:e.id,heroKey:e.sprite,name:Rt(t),title:Rt(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let xf=!1;function vf(){const e=!!(M.game&&M.game.player&&M.game.player.dead);if(e!==xf){xf=e;const s=document.getElementById("world");s&&(s.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=M.game,n=t.player;if(!n)return;const r=Gr?ht(Gr):null;r&&(r.dead&&r.kind!=="hero"||Ae(r))&&(Gr=null);const o=t.msgs.filter(s=>!s.to||s.to===M.localId).slice(-3).map(s=>({id:s.id,text:Rt(s.txt),color:s.col,t:s.t,dur:s.dur})),i=(t.chat||[]).filter(s=>s.scope==="all"||s.team===n.team).slice(-8).map(s=>{df=s.human;const a=Rt(s.txt);return df=!1,{id:s.id,scope:s.scope,team:s.team,heroKey:s.hero,heroName:hn[s.hero]?hn[s.hero].name:"?",human:!!s.human,text:a,age:t.t-s.t}});$0.value={me:au(n),inspected:r?r.kind==="hero"?au(r):o4(r):null,allies:t.heroes.filter(s=>s.team===n.team&&s!==n).map(au),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(s=>({id:s.id,killerKey:s.killerKey||null,killerName:s.killerKey?hn[s.killerKey].name:Rt(s.killerName),killerTeam:s.killerTeam,victimKey:s.victimKey,victimTeam:s.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:hf,inShop:t.inShop(n),levelMode:jo,aim:M.aim?M.aim.k:null,amove:M.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(M.cam.tz/Sf*100),zoomMsg:M.cam.zoomMsgT,camFollow:M.camFollow,scoreboard:t.heroes.map(s=>({id:s.id,heroKey:s.heroKey,name:hn[s.heroKey].name,team:s.team,level:s.level,gear:M.mode==="guest"?s.gear||0:t.gearCode(s),kills:s.kills,deaths:s.deaths,assists:s.assists,cs:s.cs,gold:s.gold!==void 0&&(s.team===n.team||M.mode!=="guest")?Math.floor(s.gold):null,items:s.items||[],human:!!s.human,isMe:s===n,dead:!!s.dead,respawn:Math.ceil(s.respawn||0)})),mode:M.mode,netLost:!!st.lost,deathRecap:n.dead?i4(n):bf=null}}let bf=null,U0=null;function i4(e){return bf!==e&&(bf=e,U0=s4(e)),U0}function s4(e){const t=(e.dmgLog||[]).filter(r=>M.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&hn[r.h]?hn[r.h].name:Rt(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function a4(){const e=M.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=N,i=2*n*r,s=2*n*o,a=(h,d)=>{const[m,p]=T(h,d);return{x:m/i,y:p/s}},l=[];for(const h of e.units){if(h.dead||Ae(h))continue;const d=a(h.x,h.y);l.push({x:d.x,y:d.y,team:h.team,kind:h.kind,heroKey:h.heroKey,me:h===t,human:!!h.human})}const u=M.cam,f=M.W/u.z,c=M.H/u.z;N0.value={units:l,camps:e.camps.filter(h=>h.alive).map(h=>({...a(h.x,h.y),boss:!!h.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-c/2)/s,x1:(u.x+f/2)/i,y1:(u.y+c/2)/s},vision:M.visionSrc.map(h=>({...a(h.x,h.y),r:B0[h.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(h=>h.team===t.team&&e.t-h.t<3).map(h=>({...a(h.x,h.y),t:e.t-h.t,kind:h.kind})),wards:(e.wards||[]).filter(h=>e.wardSeenBy(h,t.team)).map(h=>({...a(h.x,h.y),kind:h.kind,mine:h.team===t.team}))}}const sn={skipIntro(){ym()},shopDenied(e){Fe(e,"#ffb070",2),j.play("deny",.5)},playVsBots(){j.init(),j.startMusic(),va(!1)},playAram(){j.init(),j.startMusic(),Nr=!0,va(!1)},async hostOnline(){Qe.value={...Qe.value,msg:Rt("Creando sala...")};try{await st.host(Gn,Mr),Ne.value="lobby",Qe.value={...Qe.value,msg:""},us()}catch{Qe.value={...Qe.value,msg:Rt("No se pudo crear la sala")}}},async joinOnline(e){Qe.value={...Qe.value,msg:Rt("Entrando...")};try{if(await st.join(e,Gn,Mr),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}Ne.value="lobby",Qe.value={...Qe.value,msg:""},us()}catch{Qe.value={...Qe.value,msg:Rt("No se pudo entrar")}}},setLobbyTeam(e){Mr=e,st.setChoice(Gn,Mr),us()},startOnlinePick(){va(!0)},async leaveLobby(){await st.leave(),Ne.value="menu"},viewHero(e){Y&&!Y.locked&&(Y.view=e,j.play("aim",.3),bo())},lockHero(e){yf(e),bo()},randomHero(){const e=Pn.filter(t=>!Y.blue.includes(t)&&!Y.red.includes(t));yf(e[Math.random()*e.length|0]),bo()},backToMenu(){Nr=!1,Y&&Y.online?L0():(Y=null,Mo.value=null,Ne.value="menu")},buy(e){const t=M.game&&M.game.player;if(t){if(!M.game.inShop(t)){Fe("Solo puedes comprar en tu base (o muerto)","#ffb070",1.6),j.play("deny",.5);return}if(M.mode!=="guest"&&!M.game.canBuy(t,e)){const n=window.SIM.ITEM[e];Fe(t.gold<n.cost?"Te falta oro":n.consumable?"Ya llevas el máximo de ese":su(t).length>=6?"Inventario lleno (6/6): vende un accesorio":"Primero compra el nivel anterior","#ffb070",2),j.play("deny",.5);return}Re(["i",e]),j.play("buy",.6)}},sell(e){const t=M.game&&M.game.player;if(!t||!t.items)return;const n=typeof e=="number"?su(t)[e]:e;if(n){if(!M.game.inShop(t)){Fe("Solo puedes vender en tu base","#ffb070",1.4),j.play("deny",.4);return}Re(["v",n]),j.play("buy",.4)}},useCons(e){const t=M.game&&M.game.player;if(!t||t.dead)return;const n=gm.find(r=>r[0]===e);if(n){if(!t[n[2]]){Fe("No tienes: "+we.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),j.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){Re(["u",e]),j.play("heal",.5);return}if(e==="tp_scroll"){if(M.aim=null,M.wardAim=null,M.tpAim){am();return}M.tpAim=!0,j.play("aim",.3),Fe("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(M.aim=null,M.wardAim&&M.wardAim.id===e){lm();return}M.wardAim={id:e},j.play("aim",.3)}},useItem(e){const t=M.game&&M.game.player,n=t&&su(t)[e];if(!t||e<0||!n){j.play("deny",.4);return}const r=we.ITEM[n];if(!(r&&r.active)){Fe("Este objeto no se usa: es pasivo","#bbbbbb",1.2),j.play("deny",.4);return}if((M.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-M.game.t))>.05){Fe("En enfriamiento","#bbbbbb",.8),j.play("deny",.4);return}Re(["u",n,M.mouse.wx,M.mouse.wy]),j.play("blink",.5)},rankUp(e){mf(e)},castKey(e){M.game&&M.game.player&&sm(e)},spell(e){const t=M.game&&M.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){Fe(Rt(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),j.play("deny",.5);return}const r=In();Re(["sp",e,r.x,r.y]),j.play(e==="D"?"blink":"wind",.6)},recall(){const e=M.game&&M.game.player;e&&Re(e.recall?["bc"]:["b"])},inspect(e){Gr=e&&M.game&&M.game.player&&e===M.game.player.id?null:e,vf()},centerOn(e){const t=e==null?M.game&&M.game.player:ht(e);if(!t)return;const[n,r]=T(t.x,t.y);M.cam.x=n,M.cam.y=r-30,M.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:s}=N,a=e*(2*r*o)-s,l=t*(2*r*i),u=(a/o+l/i)/2,f=(l/i-a/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&M.tpAim){Re(["u","tp_scroll",u,f]),j.play("click",.4),M.tpAim=!1;return}n==="right"?(Re(["m",u,f]),M.marker={x:u,y:f,t:0}):(M.cam.x=e*2*r*o,M.cam.y=t*2*r*i,M.mouse.mmDrag=!0)}},minimapDrag(e,t){const{N:n,HW:r,HH:o}=N;M.cam.x=Math.max(0,Math.min(1,e))*2*n*r,M.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!M.game||!M.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:s,HH:a,OX:l}=N,u=t*(2*i*s)-l,f=n*(2*i*a);r=(u/s+f/a)/2,o=(f/a-u/s)/2}else{const i=In();r=i.x,o=i.y}Re(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&M.game&&Re(["t",e,n]),G0.value=null},bannerDone(e){li.value=li.value.filter(t=>t.id!==e)},quitMatch(){L0()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};j.setVolume&&j.setVolume(n[e],t),an.value={...an.value,[e]:t}},setSoundStyle(e){j.setStyle&&j.setStyle(e),an.value={...an.value,soundStyle:e}},setShadows(e){M.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}an.value={...an.value,shadows:e}},setCamFollow(e){M.camFollow=e},resetZoom(){pf()},downloadLog(){Hr("user","descarga el registro"),PM()},setCursorLock(e){zm(e),vf()},setLang(e){Mf.value=e,Vi.clear();try{localStorage.setItem("moba_lang",e)}catch{}J1()},setDifficulty(e){an.value={...an.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){j.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;j.play(n[0],n[1])},t:e=>Rt(e)};function l4(){const e=new URLSearchParams(location.search);window.__g=()=>({S:M,draft:Y,st:Pm,act:sn,net:st,cmd:Re});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const s=async()=>{await sn.joinOnline(o),Ne.value==="menu"&&++i<5&&setTimeout(s,2500)},a=l=>{X0.value?s():l>0?setTimeout(()=>a(l-1),300):Qe.value={...Qe.value,msg:Rt("No se pudo entrar")}};a(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){va(!1),e.get("view")&&(Y.view=e.get("view")),bo();return}if(n==="menu")return;Gn=n,dm(),e.get("intro")||tl(),e.get("allbots")&&(M.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)M.game.update(1/30),M.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(M.camFollow=!0),e.get("shop")&&(No.value=!0),e.get("tab")&&(Yi.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[s,a]=T(o,i);M.cam.x=s,M.cam.y=a}e.get("mx")&&(M.mouse.x=+e.get("mx"),M.mouse.y=+e.get("my"))}const m4=Object.freeze(Object.defineProperty({__proto__:null,BUILD:jf,startClient:EM},Symbol.toStringTag,{value:"Module"}));export{d2 as $,Ih as A,vl as B,ee as C,$r as D,_e as E,Bt as F,Lh as G,i2 as H,Un as I,l2 as J,P2 as K,I2 as L,ge as M,yc as N,cl as O,nr as P,xc as Q,wa as R,Va as S,bt as T,mu as U,Ap as V,Ke as W,rh as X,Of as Y,zh as Z,z2 as _,Rs as a,It as a0,dn as a1,Pf as a2,hp as a3,d4 as a4,bp as a5,h4 as a6,oo as a7,ci as a8,Cf as a9,$h as aa,Vm as ab,Ym as ac,m4 as ad,qr as b,Qo as c,Je as d,Vr as e,Xt as f,Gp as g,Dt as h,zf as i,Ah as j,If as k,Ch as l,Rf as m,nc as n,mn as o,qm as p,_a as q,ap as r,eh as s,Br as t,fn as u,wn as v,Sr as w,mc as x,De as y,Kp as z};
