const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-C6IAwYGH.js","./webworkerAll-B-5Ux40N.js","./CanvasPool-DFtO36-C.js","./colorToUniform-EZ2fzWw5.js","./_commonjsHelpers-CqkleIqs.js","./App-B5jyA8B5.js","./index-w6kp6aW3.js","./index-DasglksA.css","./WebGPURenderer-GAMSLgdl.js","./SharedSystems-DvySd1hj.js","./WebGLRenderer-CEf04wGF.js"])))=>i.map(i=>d[i]);
import{S,u as lt,q as Xe,w as P,r as H,M as B,v as g,x as k2,T as gu,y as L2,z as $h,A as Og,l as eh,p as Nn,b as Fg,B as Eg,C as kg,D as Lg,E as Dg,F as Ug,j as Ke,n as D2,h as Xg,s as Gg,G as Ng,H as Nl,I as Bg,g as Er,t as Os,c as Fn,J as $g,f as Fa,o as Wg,Z as nh,K as Hg,i as Ea,L as U2,N as pr,d as Fi,m as X2,V as G2,e as N2,O as qg,P as rh,Q as B2,R as Wh,U as Vg,W as Yg,a as jg,X as Kg,Y as Qg,_ as Zg}from"./App-B5jyA8B5.js";import{_ as xu}from"./index-w6kp6aW3.js";import{g as $2}from"./_commonjsHelpers-CqkleIqs.js";const V={},Oe={},Ge={},Pf={};var Ve=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(Ve||{});const If=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},ll=(e,t)=>If(e).priority??t,ei={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(If).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(If).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,a)=>ll(a.value,n)-ll(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>ll(i,n)-ll(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},Jg={extension:{type:Ve.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await xu(()=>import("./browserAll-C6IAwYGH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},tx={extension:{type:Ve.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await xu(()=>import("./webworkerAll-B-5Ux40N.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class cn{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new cn(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var g0={exports:{}},Hh;function ex(){return Hh||(Hh=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,h,c){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,h||l,c),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,h;if(this._eventsCount===0)return u;for(h in f=this._events)t.call(f,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,h=this._events[f];if(!h)return[];if(h.fn)return[h.fn];for(var c=0,d=h.length,m=new Array(d);c<d;c++)m[c]=h[c].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,h=this._events[f];return h?h.fn?1:h.length:0},s.prototype.emit=function(u,f,h,c,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var y=this._events[p],x=arguments.length,b,M;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),x){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,h),!0;case 4:return y.fn.call(y.context,f,h,c),!0;case 5:return y.fn.call(y.context,f,h,c,d),!0;case 6:return y.fn.call(y.context,f,h,c,d,m),!0}for(M=1,b=new Array(x-1);M<x;M++)b[M-1]=arguments[M];y.fn.apply(y.context,b)}else{var v=y.length,w;for(M=0;M<v;M++)switch(y[M].once&&this.removeListener(u,y[M].fn,void 0,!0),x){case 1:y[M].fn.call(y[M].context);break;case 2:y[M].fn.call(y[M].context,f);break;case 3:y[M].fn.call(y[M].context,f,h);break;case 4:y[M].fn.call(y[M].context,f,h,c);break;default:if(!b)for(w=1,b=new Array(x-1);w<x;w++)b[w-1]=arguments[w];y[M].fn.apply(y[M].context,b)}}return!0},s.prototype.on=function(u,f,h){return i(this,u,f,h,!1)},s.prototype.once=function(u,f,h){return i(this,u,f,h,!0)},s.prototype.removeListener=function(u,f,h,c){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!c||m.once)&&(!h||m.context===h)&&a(this,d);else{for(var p=0,y=[],x=m.length;p<x;p++)(m[p].fn!==f||c&&!m[p].once||h&&m[p].context!==h)&&y.push(m[p]);y.length?this._events[d]=y.length===1?y[0]:y:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(g0)),g0.exports}var nx=ex();const ni=$2(nx),rx=Math.PI*2,ox=180/Math.PI,ka=Math.PI/180;class Yr{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new Yr(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return x0.x=0,x0.y=0,x0}}const x0=new Yr;class De{constructor(t=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,a){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new Yr;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new Yr;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=t.x,h=t.y;return n.x=a*u*f+-i*u*h+(l*i-s*a)*u,n.y=r*u*h+-o*u*f+(-l*r+s*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,h=n.c,c=n.d;return this.a=r*u+o*h,this.b=r*f+o*c,this.c=i*u+a*h,this.d=i*f+a*c,this.tx=s*u+l*h+n.tx,this.ty=s*f+l*c+n.ty,this}setTransform(t,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(rx-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(a.x*n+a.y*o),t.position.y=this.ty+(a.x*r+a.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=t*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=t/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new De;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return ax.identity()}static get shared(){return ix.identity()}}const ix=new De,ax=new De,li=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ui=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],fi=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ci=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],zf=[],W2=[],ul=Math.sign;function sx(){for(let e=0;e<16;e++){const t=[];zf.push(t);for(let n=0;n<16;n++){const r=ul(li[e]*li[n]+fi[e]*ui[n]),o=ul(ui[e]*li[n]+ci[e]*ui[n]),i=ul(li[e]*fi[n]+fi[e]*ci[n]),a=ul(ui[e]*fi[n]+ci[e]*ci[n]);for(let s=0;s<16;s++)if(li[s]===r&&ui[s]===o&&fi[s]===i&&ci[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new De;t.set(li[e],ui[e],fi[e],ci[e],0,0),W2.push(t)}}sx();const Ne={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>li[e],uY:e=>ui[e],vX:e=>fi[e],vY:e=>ci[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>zf[e][t],sub:(e,t)=>zf[e][Ne.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?Ne.S:Ne.N:Math.abs(t)*2<=Math.abs(e)?e>0?Ne.E:Ne.W:t>0?e>0?Ne.SE:Ne.SW:e>0?Ne.NE:Ne.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=W2[Ne.inv(t)];o.tx=n,o.ty=r,e.append(o)}},fl=[new Yr,new Yr,new Yr,new Yr];class $n{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new $n(0,0,0,0)}clone(){return new $n(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,h=s-u,c=s+i+u,d=l-u,m=l+a+u,p=s+f,y=s+i-f,x=l+f,b=l+a-f;return t>=h&&t<=c&&n>=d&&n<=m&&!(t>p&&t<y&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const I=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>I}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=fl[0].set(t.left,t.top),l=fl[1].set(t.left,t.bottom),u=fl[2].set(t.right,t.top),f=fl[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const c=h*(l.y-s.y),d=h*(s.x-l.x),m=c*r+d*i,p=c*o+d*i,y=c*r+d*a,x=c*o+d*a;if(Math.max(m,p,y,x)<=c*s.x+d*s.y||Math.min(m,p,y,x)>=c*f.x+d*f.y)return!1;const b=h*(s.y-u.y),M=h*(u.x-s.x),v=b*r+M*i,w=b*o+M*i,_=b*r+M*a,A=b*o+M*a;return!(Math.max(v,w,_,A)<=b*s.x+M*s.y||Math.min(v,w,_,A)>=b*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new $n),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const M0={default:-1};function Wn(e="default"){return M0[e]===void 0&&(M0[e]=-1),++M0[e]}const qh={},Yn="8.0.0",_8="8.3.4";function Bt(e,t,n=3){if(qh[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),qh[t]=!0}const H2=()=>{};function Vh(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Yh(e){return!(e&e-1)&&!!e}function lx(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const jh=Object.create(null);function ux(e){const t=jh[e];return t===void 0&&(jh[e]=Wn("resource")),t}const q2=class V2 extends ni{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...V2.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Bt(Yn,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=ux(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};q2.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let fx=q2;const Y2=class j2 extends ni{constructor(t={}){super(),this.options=t,this.uid=Wn("textureSource"),this._resourceType="textureSource",this._resourceId=Wn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...j2.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new fx(lx(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Wn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=Wn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Yh(this.pixelWidth)&&Yh(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Y2.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let jn=Y2;class oh extends jn{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}oh.extension=Ve.TextureSource;const Kh=new De;class cx{constructor(t,n){this.mapCoord=new De,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],a=t[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(Kh.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Kh));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class Ot extends ni{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=Wn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new $n,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new jn,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:h}=this._source;this.frame.width=f,this.frame.height=h}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new cx(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,h=l/2,c=i+f,d=a+h;u=Ne.add(u,Ne.NW),t.x0=c+f*Ne.uX(u),t.y0=d+h*Ne.uY(u),u=Ne.add(u,2),t.x1=c+f*Ne.uX(u),t.y1=d+h*Ne.uY(u),u=Ne.add(u,2),t.x2=c+f*Ne.uX(u),t.y2=d+h*Ne.uY(u),u=Ne.add(u,2),t.x3=c+f*Ne.uX(u),t.y3=d+h*Ne.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Bt(Yn,"Texture.baseTexture is now Texture.source"),this._source}}Ot.EMPTY=new Ot({label:"EMPTY",source:new jn({label:"EMPTY"})});Ot.EMPTY.destroy=H2;Ot.WHITE=new Ot({source:new oh({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Ot.WHITE.destroy=H2;function hx(e,t,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*o-r,e.maxX=e.minX+s,e.minY=a.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const Qh=new De;class Ko{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Qh,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new $n);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Qh,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,h=i.ty;let c=this.minX,d=this.minY,m=this.maxX,p=this.maxY,y=a*t+l*n+f,x=s*t+u*n+h;y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*r+l*n+f,x=s*r+u*n+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*t+l*o+f,x=s*t+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*r+l*o+f,x=s*r+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),this.minX=c,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:h}=t;let c=a*n+l*r+f,d=s*n+u*r+h;this.minX=c,this.minY=d,this.maxX=c,this.maxY=d,c=a*o+l*r+f,d=s*o+u*r+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=a*n+l*i+f,d=s*n+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=a*o+l*i+f,d=s*o+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ko(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,h=o.c,c=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const y=t[p],x=t[p+1],b=u*y+h*x+d,M=f*y+c*x+m;i=b<i?b:i,a=M<a?M:a,s=b>s?b:s,l=M>l?M:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var dx={grad:.9,turn:360,rad:360/(2*Math.PI)},ro=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},gn=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},Tr=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},K2=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},Zh=function(e){return{r:Tr(e.r,0,255),g:Tr(e.g,0,255),b:Tr(e.b,0,255),a:Tr(e.a)}},b0=function(e){return{r:gn(e.r),g:gn(e.g),b:gn(e.b),a:gn(e.a,3)}},mx=/^#([0-9a-f]{3,8})$/i,cl=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Q2=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),a=i-Math.min(t,n,r),s=a?i===t?(n-r)/a:i===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},Z2=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),a=r*(1-n),s=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},Jh=function(e){return{h:K2(e.h),s:Tr(e.s,0,100),l:Tr(e.l,0,100),a:Tr(e.a)}},td=function(e){return{h:gn(e.h),s:gn(e.s),l:gn(e.l),a:gn(e.a,3)}},ed=function(e){return Z2((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},Fs=function(e){return{h:(t=Q2(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},px=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,yx=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,gx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,xx=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Of={string:[[function(e){var t=mx.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?gn(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?gn(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=gx.exec(e)||xx.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:Zh({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=px.exec(e)||yx.exec(e);if(!t)return null;var n,r,o=Jh({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(dx[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return ed(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return ro(t)&&ro(n)&&ro(r)?Zh({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!ro(t)||!ro(n)||!ro(r))return null;var a=Jh({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return ed(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!ro(t)||!ro(n)||!ro(r))return null;var a=function(s){return{h:K2(s.h),s:Tr(s.s,0,100),v:Tr(s.v,0,100),a:Tr(s.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return Z2(a)},"hsv"]]},nd=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},Mx=function(e){return typeof e=="string"?nd(e.trim(),Of.string):typeof e=="object"&&e!==null?nd(e,Of.object):[null,void 0]},v0=function(e,t){var n=Fs(e);return{h:n.h,s:Tr(n.s+100*t,0,100),l:n.l,a:n.a}},w0=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},rd=function(e,t){var n=Fs(e);return{h:n.h,s:n.s,l:Tr(n.l+100*t,0,100),a:n.a}},Ff=function(){function e(t){this.parsed=Mx(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return gn(w0(this.rgba),2)},e.prototype.isDark=function(){return w0(this.rgba)<.5},e.prototype.isLight=function(){return w0(this.rgba)>=.5},e.prototype.toHex=function(){return t=b0(this.rgba),n=t.r,r=t.g,o=t.b,a=(i=t.a)<1?cl(gn(255*i)):"","#"+cl(n)+cl(r)+cl(o)+a;var t,n,r,o,i,a},e.prototype.toRgb=function(){return b0(this.rgba)},e.prototype.toRgbString=function(){return t=b0(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return td(Fs(this.rgba))},e.prototype.toHslString=function(){return t=td(Fs(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=Q2(this.rgba),{h:gn(t.h),s:gn(t.s),v:gn(t.v),a:gn(t.a,3)};var t},e.prototype.invert=function(){return Br({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Br(v0(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Br(v0(this.rgba,-t))},e.prototype.grayscale=function(){return Br(v0(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Br(rd(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Br(rd(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Br({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):gn(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=Fs(this.rgba);return typeof t=="number"?Br({h:t,s:n.s,l:n.l,a:n.a}):gn(n.h)},e.prototype.isEqual=function(t){return this.toHex()===Br(t).toHex()},e}(),Br=function(e){return e instanceof Ff?e:new Ff(e)},od=[],bx=function(e){e.forEach(function(t){od.indexOf(t)<0&&(t(Ff,Of),od.push(t))})};function vx(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),h=1/0,c="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));p<h&&(h=p,c=m)}return c}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}bx([vx]);const La=class ws{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof ws)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=ws._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=ws.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=Br(t);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof ws||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};La.shared=new La;La._temp=new La;La.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let mn=La;const wx={cullArea:null,cullable:!1,cullableChildren:!0};class ih{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Sx{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new ih(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Mu=new Sx,_x={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Bt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function Ax(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const Tx={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}Ax(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Bt(Yn,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class id{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Rx{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return Mu.get(r.maskClass,t)}return t}returnMaskEffect(t){Mu.return(t)}}const Ef=new Rx;ei.handleByList(Ve.MaskEffect,Ef._effectClasses);const Cx={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),Ef.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=Ef.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new id);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new id),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},Px={label:null,get name(){return Bt(Yn,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Bt(Yn,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},Hn=new ih(De),Da=new ih(Ko);function J2(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=Hn.get().identity(),r=ah(e,o)):r=De.IDENTITY,tm(e,n,r,t),o&&Hn.return(o),n.isValid||n.set(0,0,0,0),n}function tm(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=Hn.get(),o.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=Da.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)tm(e.children[s],t,o,r)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,De.IDENTITY),Da.return(t)}r||Hn.return(o)}function ah(e,t){const n=e.parent;return n&&(ah(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function Ix(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const ad=16777215;function sd(e,t){return e===ad?t:t===ad?e:Ix(e,t)}function Bl(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const zx={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=ah(this,Hn.get().identity());return e.appendFrom(this.localTransform,n),Hn.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?Bl(this.renderGroup.worldColor):this.parentRenderGroup?Bl(sd(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=sd(t,n.localColor),n=n.parent;return Bl(t)}};let S0=0;const ld=500;function _o(...e){S0!==ld&&(S0++,S0===ld?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function em(e,t,n){return t.clear(),n||(n=De.IDENTITY),nm(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function nm(e,t,n,r,o){let i;if(o)i=Hn.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=Hn.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=Da.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)nm(l[u],t,i,r,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);a.addBounds(t,De.IDENTITY),Da.return(t)}Hn.return(i)}function rm(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,o.children.length&&rm(o,t)}return t.didChange}const Ox=new De,Fx={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ko});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),rm(this,e),e.didChange&&em(this,e.localBounds,Ox),e.localBounds},getBounds(e,t){return J2(this,e,t||new Ko)}},Ex={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},kx={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Lx))}};function Lx(e,t){return e._zIndex-t._zIndex}const Dx={getGlobalPosition(e=new Yr,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(Hn.get(),n);return t=r.apply(e,t),Hn.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(Hn.get(),r);return n=o.applyInverse(e,n),Hn.return(o),n}};class Ux{constructor(){this.uid=Wn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let Xx=0;class Gx{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new jn({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new Ot({source:o,label:`texturePool_${Xx++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),a=Math.ceil(n*r-1e-6);i=Vh(i),a=Vh(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const ar=new Gx;class Nx{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new De,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Ux,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(ar.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new De),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new De),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new De),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Bx(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const _0=new cn(null),A0=new cn(null),T0=new cn(null,1,1),ud=1,$x=2,R0=4;class xe extends ni{constructor(t={}){super(),this.uid=Wn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new De,this.relativeGroupTransform=new De,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new cn(this,0,0),this._scale=T0,this._pivot=A0,this._skew=_0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Bx(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(xe.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Bt(Yn,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Mu.get(Nx,this),this.groupTransform=De.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Mu.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new De),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*ox}set angle(t){this.rotation=t*ka}get pivot(){return this._pivot===A0&&(this._pivot=new cn(this,0,0)),this._pivot}set pivot(t){this._pivot===A0&&(this._pivot=new cn(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===_0&&(this._skew=new cn(this,0,0)),this._skew}set skew(t){this._skew===_0&&(this._skew=new cn(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===T0&&(this._scale=new cn(this,1,1)),this._scale}set scale(t){this._scale===T0&&(this._scale=new cn(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=ud,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=mn.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=ud,this._onUpdate())}get tint(){return Bl(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=$x,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=R0,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=R0,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=R0,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}xe.mixin(Tx);xe.mixin(Dx);xe.mixin(Ex);xe.mixin(Fx);xe.mixin(Cx);xe.mixin(Px);xe.mixin(kx);xe.mixin(wx);xe.mixin(_x);xe.mixin(zx);class sh extends xe{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Ko(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class Je extends sh{constructor(t=Ot.EMPTY){t instanceof Ot&&(t={texture:t});const{texture:n=Ot.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new cn({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof Ot?new Je(t):new Je(Ot.from(t,n))}set texture(t){t||(t=Ot.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return hx(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Bt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const Wx=new Ko;function om(e,t,n){const r=Wx;e.measurable=!0,J2(e,n,r),t.addBoundsMask(r),e.measurable=!1}function im(e,t,n){const r=Da.get();e.measurable=!0;const o=Hn.get().identity(),i=am(e,n,o);em(e,r,i),e.measurable=!1,t.addBoundsMask(r),Hn.return(o),Da.return(r)}function am(e,t,n){return e?(e!==t&&(am(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(_o("Mask bounds, renderable is not inside the root container"),n)}class sm{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Je),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||om(this.mask,t,n)}addLocalBounds(t,n){im(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof Je}}sm.extension=Ve.MaskEffect;class lm{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}lm.extension=Ve.MaskEffect;class um{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){om(this.mask,t,n)}addLocalBounds(t,n){im(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof xe}}um.extension=Ve.MaskEffect;const Hx={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let fd=Hx;const Qo={get(){return fd},set(e){fd=e}};class lh extends jn{constructor(t){t.resource||(t.resource=Qo.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}lh.extension=Ve.TextureSource;class uh extends jn{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=Qo.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,_o("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}uh.extension=Ve.TextureSource;var kf=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(kf||{});class C0{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const fm=class rr{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new C0(null,null,1/0),this.deltaMS=1/rr.targetFPMS,this.elapsedMS=1/rr.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=kf.NORMAL){return this._addListener(new C0(t,n,r))}addOnce(t,n,r=kf.NORMAL){return this._addListener(new C0(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*rr.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,rr.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!rr._shared){const t=rr._shared=new rr;t.autoStart=!0,t._protected=!0}return rr._shared}static get system(){if(!rr._system){const t=rr._system=new rr;t.autoStart=!0,t._protected=!0}return rr._system}};fm.targetFPMS=.06;let hl=fm,P0;async function qx(){return P0??(P0=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),P0}const Ju=class cm extends jn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...cm.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=hl.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await qx(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(hl.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(hl.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(hl.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Ju.extension=Ve.TextureSource;Ju.defaultOptions={...jn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Ju.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Vx=Ju;const Qi=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class Yx{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||_o(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=Qi(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&_o("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){_o(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const yi=new Yx,Lf=[];ei.handleByList(Ve.TextureSource,Lf);function hm(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<Lf.length;o++){const i=Lf[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function jx(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&yi.has(r))return yi.get(r);const i=new Ot({source:hm(o)});return i.on("destroy",()=>{yi.has(r)&&yi.remove(r)}),t||yi.set(r,i),i}function Kx(e,t=!1){return typeof e=="string"?yi.get(e):e instanceof jn?new Ot({source:e}):jx(e,t)}Ot.from=Kx;jn.from=hm;ei.add(sm,lm,um,Vx,uh,lh,oh);var dm=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(dm||{});function Ir(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function is(e){return e.split("?")[0].split("#")[0]}function Qx(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Zx(e,t,n){return e.replace(new RegExp(Qx(t),"g"),n)}function Jx(e,t){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const js={toPosix(e){return Zx(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){Ir(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(Ir(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=is(this.toPosix(t??Qo.get().getBaseUrl())),o=is(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?js.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(Ir(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=Jx(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return Ir(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(Ir(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(Ir(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){Ir(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){Ir(e),t&&Ir(t),e=is(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){Ir(e),e=is(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){Ir(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=is(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function mm(e,t,n,r,o){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?mm(e.replace(r[n],s),t,n+1,r,o):o.push(e.replace(r[n],s))}}function t3(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),mm(e,o,0,n,r)}else r.push(e);return r}const cd=e=>!Array.isArray(e);class pm{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return Qi(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&_o("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&_o(`[Resolver] already has key: ${i} overwriting`)},Qi(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=Qi(a).map(d=>typeof d=="string"?t3(d):Array.isArray(d)?d:[d]),h=this.getAlias(i);Array.isArray(h)?h.forEach(r):r(h);const c=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let y=0;y<this._parsers.length;y++){const x=this._parsers[y];if(x.test(m)){p=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:h,data:s,format:l,loadParser:u}),c.push(p)})}),h.forEach(d=>{this._assetMap[d]=c})})}resolveBundle(t){const n=cd(t);t=Qi(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=cd(t);t=Qi(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=js.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??e3(t.src),t}}pm.RETINA_PREFIX=/@([0-9\.]+)x/;function e3(e){return e.split(".").pop().split("?").shift().split("#").shift()}const hd=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},ym=class Ss{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof Ot?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Ss.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Ss.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new $n(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new $n(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new $n(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new $n(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new Ot({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ss.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ss.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};ym.BATCH_SIZE=1e3;let dd=ym;const n3=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function gm(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=js.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=gm([`${o}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const r3={extension:Ve.Asset,cache:{test:e=>e instanceof dd,getCacheableAssets:(e,t)=>gm(e,t,!1)},resolver:{extension:{type:Ve.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&n3.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(pm.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:Ve.LoadParser,priority:dm.Normal,name:"spritesheetLoader"},async testParse(e,t){return js.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=js.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof Ot)a=r;else{const u=hd(i+(o??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new dd(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const h of l){if(typeof h!="string")continue;let c=i+h;t.data?.ignoreMultiPack||(c=hd(c,t.src),u.push(n.load({src:c,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(h=>{h.linkedSheets=[s].concat(s.linkedSheets.filter(c=>c!==h))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};ei.add(r3);const I0=Object.create(null),md=Object.create(null);function fh(e,t){let n=md[e];return n===void 0&&(I0[t]===void 0&&(I0[t]=1),md[e]=n=I0[t]++),n}let dl;function o3(){return(!dl||dl?.isContextLost())&&(dl=Qo.get().createCanvas().getContext("webgl",{})),dl}let ml;function i3(){if(!ml){ml="mediump";const e=o3();e&&e.getShaderPrecisionFormat&&(ml=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return ml}function a3(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function s3(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function l3(e,t){return t?`#version 300 es
${e}`:e}const u3={},f3={};function c3(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?u3:f3;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function h3(e,t){return t?e.replace("#version 300 es",""):e}const z0={stripVersion:h3,ensurePrecision:s3,addProgramDefines:a3,setProgramName:c3,insertVersion:l3},O0=Object.create(null),xm=class Df{constructor(t){t={...Df.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:i3()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(z0).forEach(a=>{const s=r[a];o=z0[a](o,s,!0),i=z0[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=fh(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return O0[n]||(O0[n]=new Df(t)),O0[n]}};xm.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let re=xm;const pd={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function d3(e){return pd[e]??pd.float32}const m3={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function p3({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=m3[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:d3(l).stride,offset:0,instance:!1,start:0}}}}return n}function F0(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(h=>({group:parseInt(h.match(n)[1],10),binding:parseInt(h.match(r)[1],10),name:h.match(o)[2],isUniform:h.match(o)[1]==="<uniform>",type:h.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(h=>{const c=h.match(l)[1],d=h.match(s).reduce((m,p)=>{const[y,x]=p.split(":");return m[y.trim()]=x.trim(),m},{});return d?{name:c,members:d}:null}).filter(({name:h})=>u.some(c=>c.type===h))??[];return{groups:u,structs:f}}var _s=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(_s||{});function y3({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:_s.VERTEX|_s.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:_s.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:_s.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function g3({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function x3(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const E0=Object.create(null);class Jt{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=F0(n.source);this.structsAndGroups=s}else{const s=F0(r.source),l=F0(n.source);this.structsAndGroups=x3(s,l)}this.layout=o??g3(this.structsAndGroups),this.gpuLayout=i??y3(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=fh(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=p3(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return E0[n]||(E0[n]=new Jt(t)),E0[n]}}const Mm=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],M3=Mm.reduce((e,t)=>(e[t]=!0,e),{});function b3(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const bm=class vm{constructor(t,n){this._touched=0,this.uid=Wn("uniform"),this._resourceType="uniformGroup",this._resourceId=Wn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...vm.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!M3[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${Mm.join(", ")}`);i.value??(i.value=b3(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=fh(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};bm.defaultOptions={ubo:!1,isStatic:!1};let t0=bm;class k0{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var bu=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(bu||{});class e0 extends ni{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=bu.WEBGPU),r&&(a|=bu.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const h=s[u][f];l[h]={group:u,binding:f,name:h}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(h=>{s[h.group]=s[h.group]||{},s[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new k0,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const h=f;let c=i[f];!c.source&&!c._resourceType&&(c=new t0(c));const d=l[h];d&&(o[d.group]||(o[d.group]=new k0,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(c,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new k0,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Jt.from(n)),r&&(a=re.from(r)),new e0({gpuProgram:i,glProgram:a,...o})}}const v3={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},L0=0,D0=1,U0=2,X0=3,G0=4,N0=5,Uf=class wm{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<L0)}set blend(t){!!(this.data&1<<L0)!==t&&(this.data^=1<<L0)}get offsets(){return!!(this.data&1<<D0)}set offsets(t){!!(this.data&1<<D0)!==t&&(this.data^=1<<D0)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<U0)}set culling(t){!!(this.data&1<<U0)!==t&&(this.data^=1<<U0)}get depthTest(){return!!(this.data&1<<X0)}set depthTest(t){!!(this.data&1<<X0)!==t&&(this.data^=1<<X0)}get depthMask(){return!!(this.data&1<<N0)}set depthMask(t){!!(this.data&1<<N0)!==t&&(this.data^=1<<N0)}get clockwiseFrontFace(){return!!(this.data&1<<G0)}set clockwiseFrontFace(t){!!(this.data&1<<G0)!==t&&(this.data^=1<<G0)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=v3[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new wm;return t.depthTest=!1,t.blend=!0,t}};Uf.default2d=Uf.for2d();let Sm=Uf;const _m=class Xf extends e0{constructor(t){t={...Xf.defaultOptions,...t},super(t),this.enabled=!0,this._state=Sm.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Jt.from(n)),r&&(a=re.from(r)),new Xf({gpuProgram:i,glProgram:a,...o})}};_m.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ae=_m;const Gf=[];ei.handleByNamedList(Ve.Environment,Gf);async function w3(e){if(!e)for(let t=0;t<Gf.length;t++){const n=Gf[t];if(n.value.test()){await n.value.load();return}}}let as;function S3(){if(typeof as=="boolean")return as;try{as=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{as=!1}return as}var pl={exports:{}},yd;function _3(){if(yd)return pl.exports;yd=1,pl.exports=e,pl.exports.default=e;function e(k,L,D){D=D||2;var $=L&&L.length,W=$?L[0]*D:k.length,Z=t(k,0,W,D,!0),tt=[];if(!Z||Z.next===Z.prev)return tt;var dt,Lt,Et,Te,ge,Wt,an;if($&&(Z=l(k,L,Z,D)),k.length>80*D){dt=Et=k[0],Lt=Te=k[1];for(var pe=D;pe<W;pe+=D)ge=k[pe],Wt=k[pe+1],ge<dt&&(dt=ge),Wt<Lt&&(Lt=Wt),ge>Et&&(Et=ge),Wt>Te&&(Te=Wt);an=Math.max(Et-dt,Te-Lt),an=an!==0?32767/an:0}return r(Z,tt,D,dt,Lt,an,0),tt}function t(k,L,D,$,W){var Z,tt;if(W===Y(k,L,D,$)>0)for(Z=L;Z<D;Z+=$)tt=F(Z,k[Z],k[Z+1],tt);else for(Z=D-$;Z>=L;Z-=$)tt=F(Z,k[Z],k[Z+1],tt);return tt&&v(tt,tt.next)&&(U(tt),tt=tt.next),tt}function n(k,L){if(!k)return k;L||(L=k);var D=k,$;do if($=!1,!D.steiner&&(v(D,D.next)||M(D.prev,D,D.next)===0)){if(U(D),D=L=D.prev,D===D.next)break;$=!0}else D=D.next;while($||D!==L);return L}function r(k,L,D,$,W,Z,tt){if(k){!tt&&Z&&d(k,$,W,Z);for(var dt=k,Lt,Et;k.prev!==k.next;){if(Lt=k.prev,Et=k.next,Z?i(k,$,W,Z):o(k)){L.push(Lt.i/D|0),L.push(k.i/D|0),L.push(Et.i/D|0),U(k),k=Et.next,dt=Et.next;continue}if(k=Et,k===dt){tt?tt===1?(k=a(n(k),L,D),r(k,L,D,$,W,Z,2)):tt===2&&s(k,L,D,$,W,Z):r(n(k),L,D,$,W,Z,1);break}}}}function o(k){var L=k.prev,D=k,$=k.next;if(M(L,D,$)>=0)return!1;for(var W=L.x,Z=D.x,tt=$.x,dt=L.y,Lt=D.y,Et=$.y,Te=W<Z?W<tt?W:tt:Z<tt?Z:tt,ge=dt<Lt?dt<Et?dt:Et:Lt<Et?Lt:Et,Wt=W>Z?W>tt?W:tt:Z>tt?Z:tt,an=dt>Lt?dt>Et?dt:Et:Lt>Et?Lt:Et,pe=$.next;pe!==L;){if(pe.x>=Te&&pe.x<=Wt&&pe.y>=ge&&pe.y<=an&&x(W,dt,Z,Lt,tt,Et,pe.x,pe.y)&&M(pe.prev,pe,pe.next)>=0)return!1;pe=pe.next}return!0}function i(k,L,D,$){var W=k.prev,Z=k,tt=k.next;if(M(W,Z,tt)>=0)return!1;for(var dt=W.x,Lt=Z.x,Et=tt.x,Te=W.y,ge=Z.y,Wt=tt.y,an=dt<Lt?dt<Et?dt:Et:Lt<Et?Lt:Et,pe=Te<ge?Te<Wt?Te:Wt:ge<Wt?ge:Wt,ko=dt>Lt?dt>Et?dt:Et:Lt>Et?Lt:Et,os=Te>ge?Te>Wt?Te:Wt:ge>Wt?ge:Wt,Nh=p(an,pe,L,D,$),Bh=p(ko,os,L,D,$),ue=k.prevZ,fe=k.nextZ;ue&&ue.z>=Nh&&fe&&fe.z<=Bh;){if(ue.x>=an&&ue.x<=ko&&ue.y>=pe&&ue.y<=os&&ue!==W&&ue!==tt&&x(dt,Te,Lt,ge,Et,Wt,ue.x,ue.y)&&M(ue.prev,ue,ue.next)>=0||(ue=ue.prevZ,fe.x>=an&&fe.x<=ko&&fe.y>=pe&&fe.y<=os&&fe!==W&&fe!==tt&&x(dt,Te,Lt,ge,Et,Wt,fe.x,fe.y)&&M(fe.prev,fe,fe.next)>=0))return!1;fe=fe.nextZ}for(;ue&&ue.z>=Nh;){if(ue.x>=an&&ue.x<=ko&&ue.y>=pe&&ue.y<=os&&ue!==W&&ue!==tt&&x(dt,Te,Lt,ge,Et,Wt,ue.x,ue.y)&&M(ue.prev,ue,ue.next)>=0)return!1;ue=ue.prevZ}for(;fe&&fe.z<=Bh;){if(fe.x>=an&&fe.x<=ko&&fe.y>=pe&&fe.y<=os&&fe!==W&&fe!==tt&&x(dt,Te,Lt,ge,Et,Wt,fe.x,fe.y)&&M(fe.prev,fe,fe.next)>=0)return!1;fe=fe.nextZ}return!0}function a(k,L,D){var $=k;do{var W=$.prev,Z=$.next.next;!v(W,Z)&&w(W,$,$.next,Z)&&C(W,Z)&&C(Z,W)&&(L.push(W.i/D|0),L.push($.i/D|0),L.push(Z.i/D|0),U($),U($.next),$=k=Z),$=$.next}while($!==k);return n($)}function s(k,L,D,$,W,Z){var tt=k;do{for(var dt=tt.next.next;dt!==tt.prev;){if(tt.i!==dt.i&&b(tt,dt)){var Lt=z(tt,dt);tt=n(tt,tt.next),Lt=n(Lt,Lt.next),r(tt,L,D,$,W,Z,0),r(Lt,L,D,$,W,Z,0);return}dt=dt.next}tt=tt.next}while(tt!==k)}function l(k,L,D,$){var W=[],Z,tt,dt,Lt,Et;for(Z=0,tt=L.length;Z<tt;Z++)dt=L[Z]*$,Lt=Z<tt-1?L[Z+1]*$:k.length,Et=t(k,dt,Lt,$,!1),Et===Et.next&&(Et.steiner=!0),W.push(y(Et));for(W.sort(u),Z=0;Z<W.length;Z++)D=f(W[Z],D);return D}function u(k,L){return k.x-L.x}function f(k,L){var D=h(k,L);if(!D)return L;var $=z(D,k);return n($,$.next),n(D,D.next)}function h(k,L){var D=L,$=k.x,W=k.y,Z=-1/0,tt;do{if(W<=D.y&&W>=D.next.y&&D.next.y!==D.y){var dt=D.x+(W-D.y)*(D.next.x-D.x)/(D.next.y-D.y);if(dt<=$&&dt>Z&&(Z=dt,tt=D.x<D.next.x?D:D.next,dt===$))return tt}D=D.next}while(D!==L);if(!tt)return null;var Lt=tt,Et=tt.x,Te=tt.y,ge=1/0,Wt;D=tt;do $>=D.x&&D.x>=Et&&$!==D.x&&x(W<Te?$:Z,W,Et,Te,W<Te?Z:$,W,D.x,D.y)&&(Wt=Math.abs(W-D.y)/($-D.x),C(D,k)&&(Wt<ge||Wt===ge&&(D.x>tt.x||D.x===tt.x&&c(tt,D)))&&(tt=D,ge=Wt)),D=D.next;while(D!==Lt);return tt}function c(k,L){return M(k.prev,k,L.prev)<0&&M(L.next,k,k.next)<0}function d(k,L,D,$){var W=k;do W.z===0&&(W.z=p(W.x,W.y,L,D,$)),W.prevZ=W.prev,W.nextZ=W.next,W=W.next;while(W!==k);W.prevZ.nextZ=null,W.prevZ=null,m(W)}function m(k){var L,D,$,W,Z,tt,dt,Lt,Et=1;do{for(D=k,k=null,Z=null,tt=0;D;){for(tt++,$=D,dt=0,L=0;L<Et&&(dt++,$=$.nextZ,!!$);L++);for(Lt=Et;dt>0||Lt>0&&$;)dt!==0&&(Lt===0||!$||D.z<=$.z)?(W=D,D=D.nextZ,dt--):(W=$,$=$.nextZ,Lt--),Z?Z.nextZ=W:k=W,W.prevZ=Z,Z=W;D=$}Z.nextZ=null,Et*=2}while(tt>1);return k}function p(k,L,D,$,W){return k=(k-D)*W|0,L=(L-$)*W|0,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,k|L<<1}function y(k){var L=k,D=k;do(L.x<D.x||L.x===D.x&&L.y<D.y)&&(D=L),L=L.next;while(L!==k);return D}function x(k,L,D,$,W,Z,tt,dt){return(W-tt)*(L-dt)>=(k-tt)*(Z-dt)&&(k-tt)*($-dt)>=(D-tt)*(L-dt)&&(D-tt)*(Z-dt)>=(W-tt)*($-dt)}function b(k,L){return k.next.i!==L.i&&k.prev.i!==L.i&&!R(k,L)&&(C(k,L)&&C(L,k)&&I(k,L)&&(M(k.prev,k,L.prev)||M(k,L.prev,L))||v(k,L)&&M(k.prev,k,k.next)>0&&M(L.prev,L,L.next)>0)}function M(k,L,D){return(L.y-k.y)*(D.x-L.x)-(L.x-k.x)*(D.y-L.y)}function v(k,L){return k.x===L.x&&k.y===L.y}function w(k,L,D,$){var W=A(M(k,L,D)),Z=A(M(k,L,$)),tt=A(M(D,$,k)),dt=A(M(D,$,L));return!!(W!==Z&&tt!==dt||W===0&&_(k,D,L)||Z===0&&_(k,$,L)||tt===0&&_(D,k,$)||dt===0&&_(D,L,$))}function _(k,L,D){return L.x<=Math.max(k.x,D.x)&&L.x>=Math.min(k.x,D.x)&&L.y<=Math.max(k.y,D.y)&&L.y>=Math.min(k.y,D.y)}function A(k){return k>0?1:k<0?-1:0}function R(k,L){var D=k;do{if(D.i!==k.i&&D.next.i!==k.i&&D.i!==L.i&&D.next.i!==L.i&&w(D,D.next,k,L))return!0;D=D.next}while(D!==k);return!1}function C(k,L){return M(k.prev,k,k.next)<0?M(k,L,k.next)>=0&&M(k,k.prev,L)>=0:M(k,L,k.prev)<0||M(k,k.next,L)<0}function I(k,L){var D=k,$=!1,W=(k.x+L.x)/2,Z=(k.y+L.y)/2;do D.y>Z!=D.next.y>Z&&D.next.y!==D.y&&W<(D.next.x-D.x)*(Z-D.y)/(D.next.y-D.y)+D.x&&($=!$),D=D.next;while(D!==k);return $}function z(k,L){var D=new G(k.i,k.x,k.y),$=new G(L.i,L.x,L.y),W=k.next,Z=L.prev;return k.next=L,L.prev=k,D.next=W,W.prev=D,$.next=D,D.prev=$,Z.next=$,$.prev=Z,$}function F(k,L,D,$){var W=new G(k,L,D);return $?(W.next=$.next,W.prev=$,$.next.prev=W,$.next=W):(W.prev=W,W.next=W),W}function U(k){k.next.prev=k.prev,k.prev.next=k.next,k.prevZ&&(k.prevZ.nextZ=k.nextZ),k.nextZ&&(k.nextZ.prevZ=k.prevZ)}function G(k,L,D){this.i=k,this.x=L,this.y=D,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(k,L,D,$){var W=L&&L.length,Z=W?L[0]*D:k.length,tt=Math.abs(Y(k,0,Z,D));if(W)for(var dt=0,Lt=L.length;dt<Lt;dt++){var Et=L[dt]*D,Te=dt<Lt-1?L[dt+1]*D:k.length;tt-=Math.abs(Y(k,Et,Te,D))}var ge=0;for(dt=0;dt<$.length;dt+=3){var Wt=$[dt]*D,an=$[dt+1]*D,pe=$[dt+2]*D;ge+=Math.abs((k[Wt]-k[pe])*(k[an+1]-k[Wt+1])-(k[Wt]-k[an])*(k[pe+1]-k[Wt+1]))}return tt===0&&ge===0?0:Math.abs((ge-tt)/tt)};function Y(k,L,D,$){for(var W=0,Z=L,tt=D-$;Z<D;Z+=$)W+=(k[tt]-k[Z])*(k[Z+1]+k[tt+1]),tt=Z;return W}return e.flatten=function(k){for(var L=k[0][0].length,D={vertices:[],holes:[],dimensions:L},$=0,W=0;W<k.length;W++){for(var Z=0;Z<k[W].length;Z++)for(var tt=0;tt<L;tt++)D.vertices.push(k[W][Z][tt]);W>0&&($+=k[W-1].length,D.holes.push($))}return D},pl.exports}var A3=_3();const A8=$2(A3);var Am=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(Am||{});class T3{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let h=0,c=f.length;h<c;h++)f[h][u](t,n,r,o,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const R3=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Tm=class Rm extends ni{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...R3,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await w3(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...Rm.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof xe&&(r={container:r},n&&(Bt(Yn,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:mn.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Am.ALL);const{clear:r,clearColor:o,target:i}=t;mn.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,mn.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new T3(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!S3())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Tm.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Cm=Tm,yl;function C3(e){return yl!==void 0||(yl=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??Cm.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Qo.get().getWebGLRenderingContext())return!1;let r=Qo.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),yl}let gl;async function P3(e={}){return gl!==void 0||(gl=await(async()=>{const t=Qo.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),gl}const gd=["webgl","webgpu","canvas"];async function I3(e){let t=[];e.preference?(t.push(e.preference),gd.forEach(i=>{i!==e.preference&&t.push(i)})):t=gd.slice();let n,r={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await P3()){const{WebGPURenderer:s}=await xu(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-GAMSLgdl.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgpu};break}else if(a==="webgl"&&C3(e.failIfMajorPerformanceCaveat??Cm.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await xu(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-CEf04wGF.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgl};break}else if(a==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const Pm="8.6.6";class Im{static init(){globalThis.__PIXI_APP_INIT__?.(this,Pm)}static destroy(){}}Im.extension=Ve.Application;class z3{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,Pm)}destroy(){this._renderer=null}}z3.extension={type:[Ve.WebGLSystem,Ve.WebGPUSystem],name:"initHook",priority:-10};const zm=class Nf{constructor(...t){this.stage=new xe,t[0]!==void 0&&Bt(Yn,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await I3(t),Nf._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Bt(Yn,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=Nf._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};zm._plugins=[];let Es=zm;ei.handleByList(Ve.Application,Es._plugins);ei.add(Im);var kn=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(kn||{});class pa extends ni{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:a}=t;super(),this.uid=Wn("buffer"),this._resourceType="buffer",this._resourceId=Wn("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const s=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:s,label:i},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&kn.STATIC)}set static(t){t?this.descriptor.usage|=kn.STATIC:this.descriptor.usage&=~kn.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Wn("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Om(e,t){if(!(e instanceof pa)){let n=t?kn.INDEX:kn.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=kn.INDEX|kn.COPY_DST):(e=new Float32Array(e),n=kn.VERTEX|kn.COPY_DST)),e=new pa({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function O3(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,a=1/0,s=-1/0,l=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let c=f;c<o.length;c+=h){const d=o[c],m=o[c+1];d>s&&(s=d),m>l&&(l=m),d<i&&(i=d),m<a&&(a=m)}return n.minX=i,n.minY=a,n.maxX=s,n.maxY=l,n}function F3(e){return(e instanceof pa||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=Om(e.buffer,!1),e}class Fm extends ni{constructor(t={}){super(),this.uid=Wn("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ko,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=F3(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=Om(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,O3(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var Em=`in vec2 aPosition;
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
`,E3=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,xd=`struct GlobalFilterUniforms {
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
}`;const km=class Lm extends ae{constructor(t){t={...Lm.defaultOptions,...t};const n=Jt.from({vertex:{source:xd,entryPoint:"mainVertex"},fragment:{source:xd,entryPoint:"mainFragment"}}),r=re.from({vertex:Em,fragment:E3,name:"alpha-filter"}),{alpha:o,...i}=t,a=new t0({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};km.defaultOptions={alpha:1};let k3=km;const Dm={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},L3=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function D3(e){const t=Dm[e],n=t.length;let r=L3,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const U3=`
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
    }`;function X3(e,t){const n=Math.ceil(e/2);let r=U3,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function G3(e,t){const n=X3(t,e),r=D3(t);return re.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var N3=`

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
}`;function B3(e,t){const n=Dm[t],r=n.length,o=[],i=[],a=[];for(let h=0;h<t;h++){o[h]=`@location(${h}) offset${h}: vec2<f32>,`,e?i[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:i[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const c=h<r?h:t-h-1,d=n[c].toString();a[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=N3.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Jt.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Um=class Xm extends ae{constructor(t){t={...Xm.defaultOptions,...t};const n=G3(t.horizontal,t.kernelSize),r=B3(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=ar.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===bu.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,r,o),ar.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Um.defaultOptions={strength:8,quality:4,kernelSize:5};let Md=Um;var $3=`
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
`,bd=`struct GlobalFilterUniforms {
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
}`;class W3 extends ae{constructor(t={}){const n=new t0({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),r=Jt.from({vertex:{source:bd,entryPoint:"mainVertex"},fragment:{source:bd,entryPoint:"mainFragment"}}),o=re.from({vertex:Em,fragment:$3,name:"color-matrix-filter"});super({...t,gpuProgram:r,glProgram:o,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let r=t;n&&(this._multiply(r,this.matrix,t),r=this._colorMatrix(r)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=r,this.resources.colorMatrixUniforms.update()}_multiply(t,n,r){return t[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],t[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],t[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],t[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],t[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],t[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],t[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],t[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],t[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],t[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],t[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],t[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],t[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],t[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],t[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],t[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],t[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],t[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],t[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],t[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}tint(t,n){const[r,o,i]=mn.shared.setValue(t).toArray(),a=[r,0,0,0,0,0,o,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)}greyscale(t,n){const r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const r=Math.cos(t),o=Math.sin(t),i=Math.sqrt,a=1/3,s=i(a),l=r+(1-r)*a,u=a*(1-r)-s*o,f=a*(1-r)+s*o,h=a*(1-r)+s*o,c=r+a*(1-r),d=a*(1-r)-s*o,m=a*(1-r)-s*o,p=a*(1-r)+s*o,y=r+a*(1-r),x=[l,u,f,0,0,h,c,d,0,0,m,p,y,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const r=(t||0)+1,o=-.5*(r-1),i=[r,0,0,0,o,0,r,0,0,o,0,0,r,0,o,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const r=t*2/3+1,o=(r-1)*-.5,i=[r,o,o,0,0,o,r,o,0,0,o,o,r,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,r,o,i){t||(t=.2),n||(n=.15),r||(r=16770432),o||(o=3375104);const a=mn.shared,[s,l,u]=a.setValue(r).toArray(),[f,h,c]=a.setValue(o).toArray(),d=[.3,.59,.11,0,0,s,l,u,t,0,f,h,c,n,0,s-f,l-h,u-c,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)}predator(t,n){const r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function vd(e,t,n,r,o,i,a,s){const l=a-n,u=s-r,f=o-n,h=i-r,c=e-n,d=t-r,m=l*l+u*u,p=l*f+u*h,y=l*c+u*d,x=f*f+h*h,b=f*c+h*d,M=1/(m*x-p*p),v=(x*y-p*b)*M,w=(m*b-p*y)*M;return v>=0&&w>=0&&v+w<1}const Gm=class Nm extends Fm{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Bt(Yn,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...Nm.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),a=n.shrinkBuffersToFit,s=new pa({data:r,label:"attribute-mesh-positions",shrinkToFit:a,usage:kn.VERTEX|kn.COPY_DST}),l=new pa({data:o,label:"attribute-mesh-uvs",shrinkToFit:a,usage:kn.VERTEX|kn.COPY_DST}),u=new pa({data:i,label:"index-mesh-buffer",shrinkToFit:a,usage:kn.INDEX|kn.COPY_DST});super({attributes:{aPosition:{buffer:s,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};Gm.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Bm=Gm;class H3 extends sh{constructor(...t){let n=t[0];n instanceof Fm&&(Bt(Yn,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Bt(Yn,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:a,state:s,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??Ot.WHITE,this.state=s??Sm.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=a??!1}get material(){return Bt(Yn,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=Ot.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof Bm?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const a=this.geometry.getIndex().data,s=a.length;for(let l=0;l+2<s;l+=i){const u=a[l]*2,f=a[l+1]*2,h=a[l+2]*2;if(vd(n,r,o[u],o[u+1],o[f],o[f+1],o[h],o[h+1]))return!0}}else{const a=o.length/2;for(let s=0;s+2<a;s+=i){const l=s*2,u=(s+1)*2,f=(s+2)*2;if(vd(n,r,o[l],o[l+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class q3{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new De,this.observer=n,this.position=new cn(this,0,0),this.scale=new cn(this,1,1),this.pivot=new cn(this,0,0),this.skew=new cn(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const $m=class $l extends sh{constructor(...t){let n=t[0]||{};n instanceof Ot&&(n={texture:n}),t.length>1&&(Bt(Yn,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...$l.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:h,...c}=n??{};super({label:"TilingSprite",...c}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new cn({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new q3({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=h??!1}static from(t,n={}){return typeof t=="string"?new $l({texture:yi.get(t),...n}):new $l({texture:t,...n})}get uvRespectAnchor(){return _o("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){_o("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=Ot.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};$m.defaultOptions={texture:Ot.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let V3=$m;const ss=new Map;function Y3(e,t){if(!ss.has(e)){const n=new Ot({source:new lh({resource:e,...t})}),r=()=>{ss.get(e)===n&&ss.delete(e)};n.once("destroy",r),n.source.once("destroy",r),ss.set(e,n)}return ss.get(e)}const Wm=class Hm{constructor(t={}){if(this.uid=Wn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...Hm.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new jn({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof Ot||t.depthStencilTexture instanceof jn?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new jn({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Wm.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let j3=Wm;class ch extends Ot{static create(t){return new ch({source:new jn(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const hh=class qm{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...qm.defaultOptions,...t},t.view&&(Bt(Yn,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new $n(0,0,t.width,t.height),this.canvas=t.canvas||Qo.get().createCanvas(),this.antialias=!!t.antialias,this.texture=Y3(this.canvas,t),this.renderTarget=new j3({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};hh.extension={type:[Ve.WebGLSystem,Ve.WebGPUSystem,Ve.CanvasSystem],name:"view",priority:0};hh.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let K3=hh;ei.add(Jg,tx);const Q3=performance.now(),Ua=()=>Math.round((performance.now()-Q3)/100)/10,ya=typeof window<"u"?window.lanelingsDesktop:null,Xr=[],wd={},dh=e=>{let t=wd[e];return t===void 0&&(t=wd[e]=Xr.length,Xr.push(e)),t};let Ks=new Float64Array(64),Bf=new Float64Array(64),Xa=new Float64Array(64);function Be(e){Bf[dh(e)]=performance.now()}function $e(e){const t=dh(e),n=Bf[t];n&&(Ks[t]+=performance.now()-n,Bf[t]=0)}function Vm(e,t){const n=dh(e);let r=0;return function(...o){const i=r++?0:performance.now();try{return t.apply(this,o)}finally{--r||(Ks[n]+=performance.now()-i)}}}const vu=[],Sd={};let $f=new Float64Array(48),Wf=new Float64Array(48),wu=[],Ym=[];function Hf(e,t=1,n){let r=Sd[e];r===void 0&&(r=Sd[e]=vu.length,vu.push(e)),$f[r]+=t,n&&wu.length<12&&wu.push(e+":"+n)}let n0={};function Gn(e,t){n0[e]=t}const r0=900,jm=new Float32Array(r0),Km=new Float32Array(r0);let As=0,B0=0,_d=0,ks=0,xl=0;const ga=[];let Ts=0,Su=0,qf=0,Vf=0,Yf=0,jf=0,Kf=0,Qf=[],Wl=0,Ls=0,_u=0,mh=0;const Zf=new Float64Array(64),Ai=[],Ds=[],Au={};let Tu={},Ru=0;function Z3(e){Tu={...Tu,...e}}function yn(e,t){Ds.push([Ua(),e,String(t).slice(0,400)]),Ds.length>4e3&&Ds.splice(0,800),il(["E",Ua(),e,String(t).slice(0,400)])}function J3(e){const t=performance.now();if(ks=_d?Math.max(0,t5()):0,Xa.set(Ks),Ks.fill(0),Wf.set($f),$f.fill(0),Ym=wu,wu=[],_d=t,!B0){B0=t;return}B0=t,jm[As]=e,Km[As]=ks,As=(As+1)%r0;const n=performance.memory;let r=0;if(n){const o=n.usedJSHeapSize;xl&&o<xl-4e6&&(r=Math.round((xl-o)/1e6)),xl=o}Ts++,Kf+=ks,Qf.push(e);for(let o=0;o<Xr.length;o++)Zf[o]+=Xa[o];e>Su&&(Su=e),e>33&&qf++,e>50&&Vf++,e>100&&Yf++,e>50&&e5(e,r),t-Wl>=1e3&&n5(t)}function t5(){let e=0;for(let t=0;t<Xr.length;t++)Xr[t].includes("/")||(e+=Ks[t]);return e}function e5(e,t){const n={};for(let i=0;i<Xr.length;i++)Xa[i]>=.5&&(n[Xr[i]]=Math.round(Xa[i]*10)/10);const r={};for(let i=0;i<vu.length;i++)Wf[i]&&(r[vu[i]]=Wf[i]);const o={t:Ua(),ms:Math.round(e),work:Math.round(ks*10)/10,outside:Math.round(e-ks),parts:n,cnt:r,notes:Ym.slice(0,12),gc:t,world:{...n0},vis:document.visibilityState,focus:document.hasFocus(),loaf:i5()};Ai.push(o),Ai.length>1500&&Ai.splice(0,300),ql.push(o),ql.length>20&&ql.shift(),il(["H",o])}function n5(e){const t=Wl?(e-Wl)/1e3:1,n=Qf.sort((s,l)=>s-l),r=n.length?n[Math.min(n.length-1,Math.floor(n.length*.95))]:0,o=performance.memory,i=[Ua(),Math.round(Ts/t),Math.round(Su),qf,Vf,Math.round(jf/t),Math.round(Ls),Math.round(r),Math.round(Kf/Math.max(1,Ts)*10)/10,Yf,o?Math.round(o.usedJSHeapSize/1e6):-1,Math.round(_u)];ga.push(i),ga.length>3600&&ga.shift();const a={};for(let s=0;s<Xr.length;s++){const l=Zf[s]/Math.max(1,Ts);l>=.2&&(a[Xr[s]]=Math.round(l*10)/10)}il(["S",i,a,{...n0}]),Zf.fill(0),Ts=0,Su=0,qf=0,Vf=0,Yf=0,jf=0,Kf=0,Qf=[],Wl=e}let $0=0;function r5(){jf++;const e=performance.now();if($0){const t=e-$0;_u=_u*.9+Math.abs(t-33)*.1,t>250&&yn("red",`foto tarde: ${Math.round(t)} ms sin fotos del anfitrion`)}$0=e}function o5(e){Ls=Ls?Ls*.8+e*.2:e}const Hl=[];function i5(){const e=performance.now();return Hl.filter(t=>e-(t.start+t.dur)<400).slice(-3)}try{new PerformanceObserver(t=>{for(const n of t.getEntries()){const r=(n.scripts||[]).slice(0,4).map(o=>({fn:o.sourceFunctionName||o.invoker||"",src:String(o.sourceURL||"").split("/").pop(),ms:Math.round(o.duration)}));Hl.push({start:n.startTime,dur:Math.round(n.duration),block:Math.round(n.blockingDuration||0),render:n.renderStart?Math.round(n.startTime+n.duration-n.renderStart):0,style:Math.round(n.styleAndLayoutStart?n.startTime+n.duration-n.styleAndLayoutStart:0),scripts:r}),Hl.length>80&&Hl.shift()}}).observe({type:"long-animation-frame",buffered:!1})}catch{}try{new PerformanceObserver(t=>{for(const n of t.getEntries())mh++,n.duration>120&&yn("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}if(typeof window<"u"){document.addEventListener("visibilitychange",()=>yn("ventana","pestaña "+document.visibilityState)),window.addEventListener("blur",()=>yn("ventana","perdio el foco (alt-tab u otra ventana)")),window.addEventListener("focus",()=>yn("ventana","volvio el foco")),window.addEventListener("resize",()=>yn("ventana",`tamaño ${innerWidth}x${innerHeight}`)),document.addEventListener("fullscreenchange",()=>yn("ventana",document.fullscreenElement?"pantalla completa":"salio de pantalla completa")),window.addEventListener("error",t=>yn("error",(t.message||"")+" @"+String(t.filename||"").split("/").pop()+":"+t.lineno)),window.addEventListener("unhandledrejection",t=>yn("error","promesa: "+String(t.reason&&(t.reason.stack||t.reason.message)||t.reason).slice(0,300)));const e=t=>{t.__telw||(t.__telw=1,t.addEventListener("webglcontextlost",()=>yn("gpu","se perdio el contexto WebGL ("+(t.id||t.className||"canvas")+")")),t.addEventListener("webglcontextrestored",()=>yn("gpu","se recupero el contexto WebGL")))};setInterval(()=>{document.querySelectorAll("canvas").forEach(t=>e(t))},3e3)}async function a5(){const e=navigator,t={browser:navigator.userAgent,cores:e.hardwareConcurrency,memGB:e.deviceMemory,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,window:`${innerWidth}x${innerHeight}`,lang:navigator.language};t.hz=await new Promise(n=>{const r=[],o=i=>{if(r.push(i),r.length<40)requestAnimationFrame(o);else{const a=r.slice(1).map((s,l)=>s-r[l]).sort((s,l)=>s-l);n(Math.round(1e3/a[Math.floor(a.length/2)]))}};requestAnimationFrame(o)});try{if(e.getBattery){const n=await e.getBattery();t.battery={charging:n.charging,level:Math.round(n.level*100)}}}catch{}try{ya&&ya.sysInfo&&(t.desktop=await ya.sysInfo())}catch{}return t}let Cu=null;a5().then(e=>{Cu=e,il(["SYS",e])}).catch(()=>{});let ql=[];function s5(){const e=ga.slice(-5);if(!e.length)return null;const t=r=>Math.round(e.reduce((o,i)=>o+i[r],0)/e.length),n={fps:t(1),worst:Math.max(...e.map(r=>r[2])),slow:e.reduce((r,o)=>r+o[3],0),snaps:t(5),ping:t(6),p95:t(7),mem:t(10),jit:t(11),lt:mh,err:Ds.filter(r=>r[1]==="error").length,sys:Ad?void 0:Cu,hitches:ql.splice(0).map(r=>({t:r.t,ms:r.ms,work:r.work,outside:r.outside,parts:r.parts,cnt:r.cnt,gc:r.gc,loaf:r.loaf.slice(0,1)}))};return Cu&&(Ad=!0),n}let Ad=!1;function l5(e,t){const n=Au[e]=Au[e]||{sys:null,rows:[],hitches:[]};if(t.sys&&(n.sys=t.sys),t.hitches){for(const a of t.hitches)n.hitches.push(a);n.hitches.length>600&&n.hitches.splice(0,100)}const{hitches:r,sys:o,...i}=t;n.rows.push([Ua(),i]),n.rows.length>800&&n.rows.shift(),il(["P",e,i,t.hitches||[],t.sys||null])}let xa=[];function il(e){xa.push(e),xa.length>2e4&&xa.splice(0,5e3)}const Us=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+"_"+Math.floor(Math.random()*1e4);let W0=null;function u5(){return W0||(W0=new Promise(e=>{try{const t=indexedDB.open("lanelings_logs",1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains("chunks")||n.createObjectStore("chunks",{autoIncrement:!0}).createIndex("match","match")},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null)}catch{e(null)}})),W0}let Bi=!1;function Vl(){if(Bi||!xa.length)return;Bi=!0;const e=xa.splice(0,xa.length),t={id:Us,...Tu},n=e.map(r=>JSON.stringify(r)).join(`
`)+`
`;try{ya&&ya.appendLog&&ya.appendLog(Us,n,t)}catch{}u5().then(r=>{if(!r){Bi=!1;return}try{const o=r.transaction("chunks","readwrite");o.objectStore("chunks").add({match:Us,t:Date.now(),head:t,lines:n}),o.oncomplete=()=>{Bi=!1,f5(r)},o.onerror=()=>{Bi=!1}}catch{Bi=!1}})}let Td=!1;function f5(e){if(!Td){Td=!0;try{const t=e.transaction("chunks","readwrite").objectStore("chunks"),n=new Set,r=[];t.openCursor().onsuccess=o=>{const i=o.target.result;if(i){r.push([i.key,i.value.match]),n.add(i.value.match),i.continue();return}const a=new Set([...n].sort().slice(-12));for(const[s,l]of r)a.has(l)||t.delete(s)}}catch{}}}const c5=e=>window.requestIdleCallback?window.requestIdleCallback(e,{timeout:4e3}):setTimeout(e,50);typeof window<"u"&&(setInterval(()=>c5(Vl),12e3),window.addEventListener("pagehide",Vl),window.addEventListener("beforeunload",Vl));function Rd(){Ru++,yn("marca",'el jugador marco "aca se trabo" (#'+Ru+")")}function h5(){return{gap:jm,work:Km,pos:As,ring:r0,secs:ga.slice(-1)[0]||null,ping:Ls,jitter:_u,hitches:Ai.length,last:Ai.slice(-1)[0]||null,gauges:n0,marks:Ru,parts:(()=>{const e=[];for(let t=0;t<Xr.length;t++)Xa[t]>=.3&&e.push([Xr[t],Xa[t]]);return e.sort((t,n)=>n[1]-t[1]).slice(0,10)})()}}function d5(){const e={...Tu,id:Us,sys:Cu,durationS:Ua(),longTasks:mh,hitchCount:Ai.length,marks:Ru},t=["LANELINGS LOG v2",JSON.stringify(e),"","# por segundo: t, fps, peor ms, cuadros>33, >50, fotos/s, ping, p95 ms, trabajo medio ms, >100, memoria MB, jitter"];for(const n of ga)t.push(n.join(","));t.push("",'# tirones (cuadro >50 ms): ms total, trabajo del juego, "outside" = esperando placa/navegador/Windows, partes, contadores, gc MB, mundo, navegador');for(const n of Ai)t.push(JSON.stringify(n));t.push("","# eventos: t, tipo, texto");for(const n of Ds)t.push(n.join(" | "));for(const n in Au){const r=Au[n];t.push("","# invitado "+n+" — sistema: "+JSON.stringify(r.sys));for(const[o,i]of r.rows)t.push(o+" "+JSON.stringify(i));t.push("# tirones del invitado "+n);for(const o of r.hitches)t.push(JSON.stringify(o))}return t.join(`
`)}function m5(){Vl();const e=d5(),t="lanelings-log-"+Us+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}const Ht={},Ga={},H0=new Map,fr={},o0={},Qm=e=>(o0[e]?"assets/pk/":"assets/")+e+".png";function Jf(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function p5(e){const t=window.MAP;Object.assign(Ht,window.META,t.decometa||{});for(const s of Object.keys(Ht)){const l=Ht[s].gear;if(l)for(const u in l)for(const f of l[u])Ht[s+"__"+u+f]=Ht[s]}try{Object.assign(o0,await(await fetch("assets/pk/index.json")).json())}catch{}const n=Object.keys(Ht),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>e(++i/o);await Promise.all([...n.map(async s=>{const l=await Jf(Qm(s));if(fr[s]=l,l.naturalWidth){const u=Ot.from(l);u.source.scaleMode="nearest",Ga[s]=u}a()}),...r.map(async s=>{fr[s]=await Jf("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function i0(e){return!!Ga[e]}function y5(){return Object.values(Ga)}const Cd=new Set;function Zm(e){Ga[e]||Cd.has(e)||!Ht[e]||(Cd.add(e),Hf("sheetLoad",1,e),Jf(Qm(e)).then(t=>{if(fr[e]=t,t.naturalWidth){const n=Ot.from(t);n.source.scaleMode="nearest",Ga[e]=n}}))}function g5(e){for(const t of e){const n=Ht[t]&&Ht[t].gear;n&&n.w&&n.w.includes(0)&&Zm(t+"__w0")}}function Jm(e,t,n,r){let o=0,i=0;if(e.anims&&t){const a=e.anims[t]||e.anims.idle||e.anims.walk||Object.values(e.anims)[0],s=e.dirs||1,l=s>=16?(n%16+16)%16:s>1?Math.round(n/2)%s:0;o=a.row+l,i=(r%a.n+a.n)%a.n}else e.frames&&e.frames>1&&(i=(r%e.frames+e.frames)%e.frames);return[o,i]}function tp(e,t,n){const r=Ht[e],o=o0[e];if(o){if(n>=o.cols||t>=o.rows)return null;const a=(t*o.cols+n)*6,s=o.f;return s[a+2]?[s[a],s[a+1],s[a+2],s[a+3],s[a+4],s[a+5]]:null}const i=fr[e];return!r||!i||(n+1)*r.fw>i.naturalWidth||(t+1)*r.fh>i.naturalHeight?null:[n*r.fw,t*r.fh,r.fw,r.fh,0,0]}const x5=null;function No(e,t,n,r){const o=Ht[e],i=Ga[e];if(o&&!i&&e.includes("__"))return Zm(e),null;if(!o||!i)return null;const[a,s]=Jm(o,t,n,r),l=e+"|"+a+"|"+s;let u=H0.get(l);if(u===void 0){const f=tp(e,a,s);if(!f)return H0.set(l,x5),null;u=o0[e]?new Ot({source:i.source,frame:new $n(f[0],f[1],f[2],f[3]),orig:new $n(0,0,o.fw,o.fh),trim:new $n(f[4],f[5],f[2],f[3])}):new Ot({source:i.source,frame:new $n(f[0],f[1],o.fw,o.fh)}),H0.set(l,u)}return u}function Yl(e,t,n){const r=Ht[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function M5(){const e=fr.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),a=Math.min(t,e.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,o,r,i,a,0,0,i,a);const l=Ot.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const O=Math.round,rt=Math.PI*2,ne=e=>1-(1-e)*(1-e);function Xn(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=O(n-a*o/2),u=O(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++){const c=t[h];for(let d=0;d<a;d++)c[d]===f&&e.fillRect(l+d*o,u+h*o,o,o)}}}function Un(e){const t=Ht[e.sprite];return(t?t.ay:50)*(e.scale||1)/B.ZK}function Ue(e){const t=e.uid!==void 0?lt(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const b5=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],v5={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function w5(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=g(-.35,.35);st.sfx("item_crit",t,n,.9),T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.55),u=Math.min(1,a*3.5);i.globalAlpha=a<.45?1:(1-a)/.55;for(let f=0;f<=26;f++){const h=f/26;if(h>u)break;const c=o-Math.PI/2+r*(-1.35+2.7*h),d=u-h,m=O(2+7*Math.sin(Math.PI*h));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(O(s+Math.cos(c)*36-m/2),O(l+10+Math.sin(c)*24-m/2),m,m)}if(a<.3){const f=1-a/.3,h=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(O(s-h),O(l)-1,O(h*2),3),i.fillRect(O(s)-1,O(l-h*.7),3,O(h*1.4)),i.fillStyle="#ff5a3a";for(let c=0;c<4;c++){const d=h*.55;i.fillRect(O(s+(c&1?d:-d)*.7)-2,O(l+(c&2?d:-d)*.5)-2,4,4)}}}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.22),u=1.5-.95*l*l;if(!s.hit&&l>=1){s.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*rt,p=g(1.5,3.5);E(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*rt,p=g(1,2.5);E(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,g(1.5,3),.6,"#f2e4c4",2,9,!1)}at(4)}const[f,h]=P(t,n,u);i.globalAlpha=a<.6?1:(1-a)/.4;const c=l>=1&&a<.35?(Math.random()-.5)*3:0;Xn(i,b5,f+c,h-6,3,v5)}})}function S5(e){const t=[e.x,e.y];for(const a of String(e.pts||"").split(";")){const s=a.split(",");s.length===2&&s[0]!==""&&t.push(+s[0],+s[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;st.sfx("item_chain",t[2],t[3],1),E(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),T({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(a,s,l){const u=s*i,f=Math.floor(S.T*28);for(;l.sp<n&&u>=l.sp*o;){const h=t[l.sp*2+2],c=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*rt,p=g(2,4.5);E(h,c,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}a.lineJoin="miter";for(let h=0;h<n;h++){const c=u-h*o;if(c<0)break;const d=Math.max(0,1-c/.38);if(d<=0)continue;const[m,p]=P(t[h*2],t[h*2+1],h?.5:.7),[y,x]=P(t[h*2+2],t[h*2+3],.5),b=y-m,M=x-p,v=Math.hypot(b,M)||1,w=-M/v,_=b/v,A=Math.min(16,4+v*.1),R=7;a.beginPath(),a.moveTo(m,p);for(let G=1;G<R;G++){const Y=(H(r+h*31+G*7+f*13)-.5)*2*A;a.lineTo(m+b*G/R+w*Y,p+M*G/R+_*Y)}a.lineTo(y,x),a.globalAlpha=d*.4,a.strokeStyle="#5a7aff",a.lineWidth=8,a.stroke(),a.globalAlpha=d*.85,a.strokeStyle="#9ae0ff",a.lineWidth=3.5,a.stroke(),a.globalAlpha=d,a.strokeStyle="#ffffff",a.lineWidth=1.5,a.stroke();const C=2+(H(r+h)*3|0),I=(H(r+h*31+C*7+f*13)-.5)*2*A,z=H(r+h*5+f)<.5?1:-1,F=m+b*C/R+w*I,U=p+M*C/R+_*I;if(a.beginPath(),a.moveTo(F,U),a.lineTo(F+w*z*12+b/v*7,U+_*z*12+M/v*7),a.lineTo(F+w*z*17+b/v*17,U+_*z*17+M/v*17),a.globalAlpha=d*.75,a.strokeStyle="#bfeaff",a.lineWidth=1.5,a.stroke(),c<.16){const G=1-c/.16,Y=4+G*11;a.globalAlpha=G,a.fillStyle="#e8f6ff",a.fillRect(O(y-Y),O(x)-1,O(Y*2),3),a.fillRect(O(y)-1,O(x-Y),3,O(Y*2)),a.fillStyle="#7ac8ff",a.fillRect(O(y)-4,O(x)-4,8,8)}}}}),at(2)}const _5=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],A5={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function T5(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*rt;st.sfx("item_bash",t,n,1),T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.24),u=1.9-1.35*l*l;if(!s.hit&&l>=1){s.hit=!0,T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,ft(t,n,.3+1.3*ne(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,ft(t,n,.25+.8*ne(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const y=o+p/7*rt;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,M=y+(H(o+p*9+x)-.5)*.7,[v,w]=P(t+Math.cos(M)*b,n+Math.sin(M)*b);x?d.lineTo(v,w):d.moveTo(v,w)}d.stroke()}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=P(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const M=b/10*rt;d.fillRect(O(p+Math.cos(M)*x)-2,O(y+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*rt,p=g(1.5,4);E(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,g(.6,1.8),g(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*rt,p=g(1,3);E(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,g(2,4),.8,"#7a7468",3,12,!1)}at(5)}const[f,h]=P(t,n,u),c=l>=1&&a<.34?2:0;i.globalAlpha=a<.6?1:(1-a)/.4,i.translate(O(f),O(h-14+c)),i.rotate(r*.9*(1-l)),Xn(i,_5,0,0,3,A5)}})}function R5(e,t,n,r,o){for(let i=0;i<9;i++){const a=r*6+i*.7+o,s=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(O(t+Math.cos(a)*s)-1,O(n-4+Math.sin(a)*s*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const a=-r*4+i*Math.PI,s=O(t+Math.cos(a)*18),l=O(n-2+Math.sin(a)*5);e.fillStyle="#ff9a3a",e.fillRect(s-3,l-1,7,3),e.fillRect(s-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(s,l,1,1)}}const C5=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],P5={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function I5(e){st.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;T({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){Ue(o);const i=.32,a=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let s=0;s<14;s++){const l=s/14*rt+t,u=a*(.65+.35*H(t+s)),[f,h]=P(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[c,d]=P(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,p]=P(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=s%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,h),n.lineTo(m,p),n.lineTo(c,d),n.closePath(),n.fill()}ft(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),a=i?Un(i):.8,s=r<.06?2:r<.14?4:3,[l,u]=P(o.x,o.y,a+.32+r*.15),f=r<.7?1:(1-r)/.3;vt(!0);const h=$t();h.globalAlpha=f*(.35+.2*Math.sin(r*40)),h.fillStyle="#ff2a1a",h.fillRect(O(l-22),O(u-18),44,36),h.globalAlpha=1,vt(!1),n.globalAlpha=f,Xn(n,C5,l,u,s,P5)}});for(let n=0;n<26;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.1,.6),g(-.4,.4),g(-.4,.4),g(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);at(3)}const z5=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],O5={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function F5(e){st.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;T({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),a=i?Un(i):.8,[s,l]=P(o.x,o.y,a+.45),u=P(o.x,o.y,0)[1],f=t*1.9*ne(Math.min(1,r/.3)),h=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const c=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,y=s+m*c-p*d,x=l+m*d+p*c,b=r<.7?3:2;n.globalAlpha=h;for(let M=0;M<=14;M++){const v=M/14,w=x+(u-x)*v,_=y+Math.sin(S.T*22+M)*1.5+t*v*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(O(_)-1,O(w),b,O((u-x)/14)+1)}Math.random()<.6&&E(o.x+g(-.2,.2),o.y+g(-.2,.2),.02,g(-1,1),g(-1,1),g(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=h,n.translate(O(s),O(l)),n.rotate(f),Xn(n,z5,0,0,3,O5)}}),T({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*ne(Math.min(1,r/.45)),a=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=a,ft(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=a*.6,ft(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function E5(e,t,n){const[r,o]=P(t.x,t.y,Un(t)*.55),i=t.scale||1;for(let a=0;a<4;a++){const s=n*3.2+a*rt/4+t.id,l=O(r+Math.cos(s)*22*i),u=O(o+Math.sin(s)*8*i+Math.sin(n*5+a)*2);e.globalAlpha=Math.sin(s)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&E(t.x+g(-.3,.3),t.y+g(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function k5(e){st.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,a){const s=lt(a.uid);s&&!s.dead&&(a.ex=s.x,a.ey=s.y);const[l,u]=P(t,n,.5),[f,h]=P(a.ex,a.ey,.6),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const M=(b-1)*.9+.3*Math.sin(r+b),v=Math.min(1,i*1.4-b*.1);if(!(v<=0))for(let w=0;w<7;w++){const _=v-w*.045;if(_<0)break;const A=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+b*2+S.T*10)*3,R=l+c*_+p*A,C=u+d*_+y*A-Math.sin(_*Math.PI)*14,I=w===0?4:w<3?3:2;o.globalAlpha=(1-w/7)*x,w===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(O(R-5),O(C-5),10,10),o.globalAlpha=x),o.fillStyle=w===0?"#ff8a96":w<3?"#e0203a":"#8a0a1e",o.fillRect(O(R-I/2),O(C-I/2),I,I)}}if(!a.pop&&i>.72){a.pop=!0;for(let b=0;b<4;b++)E(a.ex+g(-.2,.2),a.ey+g(-.2,.2),.6,0,0,g(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const Ti=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function L5(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;st.sfx("item_hex",t,n,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(a,s){const[l,u]=P(r,o,.7),[f,h]=P(t,n,.7),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=Math.min(1,s*2.6);a.globalAlpha=s<.6?1:(1-s)/.4;for(let b=0;b<=30;b++){const M=b/30;if(M>x)break;const v=Math.sin(M*rt*2.5-s*9)*8*(1-M*.6);a.fillStyle=Ti[(b+(s*24|0))%3],a.fillRect(O(l+c*M+p*v)-1,O(u+d*M+y*v)-1,3,3)}}}),T({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(a,s,l){const[u,f]=P(t,n,.6),h=Math.min(1,s/.42),c=s<.55?1:(1-s)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);vt(!0);const m=$t();for(let x=0;x<20;x++){const b=h-x*.025;if(b<0)break;const M=d(b),v=O(5-x*.2);m.globalAlpha=(1-x/20)*c,m.fillStyle=Ti[x<3?0:x<9?1:2],m.fillRect(O(u+Math.cos(M)*42-v/2),O(f+Math.sin(M)*24-v/2),v,v)}m.globalAlpha=1,vt(!1),a.globalAlpha=c;const p=d(h);for(let x=0;x<11;x++){const b=p-i*x*.07,M=1+x*.55,v=42-M/2,w=u+Math.cos(b)*v,_=f+Math.sin(b)*v*.58;a.fillStyle="#2a1040",a.fillRect(O(w-M/2),O(_-M/2),O(M)+1,O(M)+1),a.fillStyle="#f0e0ff",a.fillRect(O(u+Math.cos(b)*43)-1,O(f+Math.sin(b)*25)-1,2,2)}const y=p-i*.75;for(let x=38;x>10;x-=2)a.fillStyle=x%4?"#4a2a18":"#6a4024",a.fillRect(O(u+Math.cos(y)*x)-1,O(f+Math.sin(y)*x*.58)-1,3,3);if(!l.poof&&s>=.36){l.poof=!0;for(let x=0;x<9;x++)T({type:"puff",x:t+g(-.5,.5),y:n+g(-.5,.5),r:g(14,24),dur:g(.6,1),col:[176,128,236]});T({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*rt,M=g(1,3);E(t,n,.6,Math.cos(b)*M,Math.sin(b)*M,g(.5,2.5),.6,Ti[x%4],3,1,!0)}for(let x=0;x<6;x++)E(t+g(-.3,.3),n+g(-.3,.3),.3,0,0,g(.8,1.6),.7,"#a8e070",3,-.5,!1);at(3)}}})}function D5(e,t){const[n,r]=P(e.x,e.y,Un(e)+.22+Math.sin(t*3+e.id)*.03);vt(!0);const o=$t();for(let i=0;i<12;i++){const a=t*5+i*.55+e.id,s=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=Ti[i%3],o.fillRect(O(n+Math.cos(a)*s)-1,O(r+Math.sin(a)*s*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const a=-t*2.5+i*Math.PI,s=O(n+Math.cos(a)*16),l=O(r+4+Math.sin(a)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=Ti[0],o.fillRect(s-2,l,5,1),o.fillRect(s,l-2,1,5)}o.globalAlpha=1,vt(!1),Math.random()<.1&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,g(.6,1.2),.6,Ti[2],2,-.3,!0)}function U5(e){for(let t=0;t<5;t++)T({type:"puff",x:e.x+g(-.35,.35),y:e.y+g(-.35,.35),r:g(12,20),dur:g(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*rt,r=g(1,2.5);E(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,2),.5,Ti[t%3],2,1,!0)}}const oo=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],X5=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],G5={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function N5(e){st.sfx("item_refresh",e.x,e.y,1),T({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Ue(r);const o=.45+.85*ne(n),[i,a]=P(r.x,r.y),s=o*B.HW*Math.SQRT2*1.08,l=o*B.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,ft(r.x,r.y,o,oo[1],null,3),t.fillStyle=oo[2];for(let u=0;u<16;u++){const f=u/16*rt-n*5;t.fillRect(O(i+Math.cos(f)*s)-2,O(a+Math.sin(f)*l)-2,5,4)}ft(r.x,r.y,o*.6,oo[0],null,1.5,[4,4])}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),[i,a]=P(r.x,r.y,(o?Un(o):.8)*.55),s=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*rt-n*6,f=l%2===0,h=f?4:2;t.fillStyle=f?oo[0]:oo[2],t.fillRect(O(i+Math.cos(u)*s)-h/2,O(a+Math.sin(u)*s)-h/2,h,h)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?oo[1]:oo[0];for(let h=3;h<f;h+=2)t.fillRect(O(i+Math.cos(u)*h)-1,O(a+Math.sin(u)*h)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,T({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:oo[1],w:4});for(let l=0;l<20;l++)E(r.x+g(-.4,.4),r.y+g(-.4,.4),g(.2,.9),g(-.6,.6),g(-.6,.6),g(1.5,3),.6,oo[l%3],3,0,!0)}}}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),[i,a]=P(r.x,r.y,(o?Un(o):.8)*.55),s=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(O(i),O(a)),t.rotate(Math.PI*s*s*(3-2*s)),Xn(t,X5,0,0,3,G5)}}),at(2)}function ep(e,t,n,r,o){const i=O(t),a=O(n);e.fillStyle=r,e.fillRect(i-3,a,2,3),e.fillRect(i+1,a,2,3),e.fillRect(i-2,a+2,4,2),e.fillStyle=o,e.fillRect(i-1,a+2,2,1)}function B5(e){st.sfx("item_immune",e.x,e.y,1);const t=Math.random()*rt;T({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),[a,s]=P(o.x,o.y,(i?Un(i):.8)*.45),l=ne(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const h=f/18*rt+t+(1-l)*1.5,c=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),ep(n,a+Math.cos(h)*c,s+Math.sin(h)*c*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(a,s,32*u+6*(1-f),38*u+6*(1-f),0,0,rt),n.stroke()}}}),T({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);at(2)}function $5(e,t){const n=e.scale||1,[r,o]=P(e.x,e.y,Un(e)*.45),i=30*n,a=36*n;vt(!0);const s=$t();s.globalAlpha=.5+.1*Math.sin(t*4),s.strokeStyle="#ffcc40",s.lineWidth=2,s.fillStyle="rgba(255,200,60,0.07)",s.beginPath(),s.ellipse(r,o,i,a,0,0,rt),s.fill(),s.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,h=i*Math.sqrt(Math.max(0,1-f/a*(f/a)))-4;for(let c=-h+(u&1?5:0);c<=h;c+=10){const d=Math.max(0,1-Math.abs(c-l+f*.5)/16);s.globalAlpha=.16+.6*d,ep(s,r+c,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}s.globalAlpha=1,vt(!1)}function W5(e){st.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*rt+g(-.25,.25),t[r*4+1]=g(.8,1.6),t[r*4+2]=g(-14,14),t[r*4+3]=g(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*rt+g(-.4,.4);T({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Ue(i),[s,l]=P(i.x,i.y,(a?Un(a):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(s,l,16*f,0,rt),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s,l,13*f,0,rt),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(s-2*f,l,8*f,0,rt),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s+2*f,l-2*f,7*f,0,rt),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(s,l),r.lineTo(s+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(s+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}vt(!0);const h=$t(),c=s-14+o/.45*28;h.globalAlpha=.8,h.fillStyle="#ffffff";for(let d=-3;d<=3;d++)h.fillRect(O(c+d*.6),O(l+d*3)-1,2,3);vt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const h=Math.random()*rt,c=g(1.5,3.5);E(i.x,i.y,.7,Math.cos(h)*c,Math.sin(h)*c,g(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){vt(!0);const f=$t();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const h=10+u*60;f.fillRect(O(s-h),O(l)-1,O(h*2),3),f.fillRect(O(s)-1,O(l-h*.6),3,O(h*1.2)),vt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const h=t[f*4],c=u*t[f*4+1]*40,d=t[f*4+3],m=s+Math.cos(h)*(c+8),p=l+Math.sin(h)*(c+8)*.7+u*u*50,y=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(y),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const Ml=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function H5(e){st.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,a=Math.random()*9,s=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;T({type:"ring",x:t,y:n,r:.8,dur:.35,col:Ml[1],w:4});for(let h=0;h<8;h++)E(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(.3,1),.5,"#c8b48a",3,3,!1);T({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(h,c){const d=c*s,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[y,x]=P(t,n,.3),[b,M]=P(r,o,.3),v=(u-f)*B.HW,w=(u+f)*B.HH;for(let _=0;_<5;_++){const A=(_-2)*.22,R=(_-2)*6;for(let C=p;C<=m;C+=.025){const I=A+Math.sin(C*18+_*1.3+a)*.08,z=(C-p)/(m-p);h.globalAlpha=z*(_===2?1:.7),h.fillStyle=Ml[z>.85?0:_===2?1:2],h.fillRect(O(y+(b-y)*C+v*I)-1,O(x+(M-x)*C+w*I+R)-1,3,2)}}for(let _=0;_<3;_++){const A=.25+_*.3;if(A<p||A>m)continue;const R=y+(b-y)*A+v*(_-1)*.35,C=x+(M-x)*A+w*(_-1)*.35-10;h.globalAlpha=1-(A-p)/Math.max(.01,m-p)*.5;for(let I=0;I<9;I++){const z=S.T*9+I*.75+_,F=2+I*1.2;h.fillStyle=Ml[I<3?0:1],h.fillRect(O(R+Math.cos(z)*F)-1,O(C+Math.sin(z)*F*.6)-1,2,2)}}}});for(let h=0;h<14;h++){const c=Math.random();E(t+(r-t)*c,n+(o-n)*c,g(.1,.6),(r-t)/l*g(1,3),(o-n)/l*g(1,3),g(.2,1),g(.4,.8),Ml[h%3],2,0,!0)}}const q0=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function q5(e,t){const[r,o]=P(e.x,e.y),i=2.8*B.HW*Math.SQRT2,a=2.8*B.HH*Math.SQRT2;vt(!0);const s=$t();s.globalAlpha=.07,s.fillStyle="#ff8a2a",s.beginPath(),s.ellipse(r,o,i*.97,a*.97,0,0,rt),s.fill(),s.globalAlpha=.22+.06*Math.sin(t*3+e.id),s.strokeStyle="#ff9a3a",s.lineWidth=2,s.setLineDash([10,7]),s.lineDashOffset=-t*24,s.beginPath(),s.ellipse(r,o,i,a,0,0,rt),s.stroke(),s.setLineDash([]),s.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*rt+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),h=O(3+f*4);s.globalAlpha=.25+.45*f,s.fillStyle=f>.75?q0[0]:q0[1],s.fillRect(O(r+Math.cos(u)*i)-2,O(o+Math.sin(u)*a)-h,4,h)}if(s.globalAlpha=1,vt(!1),Math.random()<.35){const l=Math.random()*rt,u=Math.sqrt(Math.random())*2.8;E(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,g(.8,1.6),g(.6,1),q0[Math.random()*4|0],2,-.3,!0,.97)}}const Na={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},Pd={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},Xs=2,V0={};function np(e,t){const n=e+(t?"o":"c");if(V0[n])return V0[n];let r=Na[e]||Na.obs;const o=Pd[e]||Pd.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const a=document.createElement("canvas");a.width=r[0].length*Xs,a.height=r.length*Xs;const s=a.getContext("2d");return Xn(s,r,a.width/2,a.height/2,Xs,o),V0[n]=a}function ph(e){const t=Na[e]||Na.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*Xs}function a0(e,t){return(t+e.id*1.37)%4.2>.14}function V5(e,t,n){const r=S.T,o=$t(),i=window.SIM;if(o.globalAlpha=.35,ft(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const a=Math.max(0,e.until-n),s=e.kind==="obs"?360:300,[l,u]=P(e.x,e.y);o.globalAlpha=a<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*B.HW*Math.SQRT2,.34*B.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+rt*Math.min(1,a/s)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&ft(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),ft(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function Y5(e,t){const n=S.T,[r,o]=P(e.x,e.y),i=o-ph(e.kind);if(a0(e,n)){vt(!0);const a=$t(),s=.6+.4*Math.sin(n*3+e.id);a.globalAlpha=.25*s,a.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",a.fillRect(O(r)-7,O(i)-5,14,10),a.globalAlpha=.6*s,a.fillRect(O(r)-3,O(i)-2,6,4),a.globalAlpha=1,vt(!1)}if(!t){const a=$t(),s=O(o-(Na[e.kind]||Na.obs).length*Xs-8+Math.sin(n*5)*2),l=O(r);a.fillStyle="#120c1a",a.fillRect(l-5,s-2,11,4),a.fillRect(l-3,s+2,7,2),a.fillRect(l-1,s+4,3,2),a.fillStyle="#ff4a3a",a.fillRect(l-4,s-1,9,2),a.fillRect(l-2,s+1,5,2),a.fillRect(l,s+3,1,2)}}function j5(e,t,n,r){const o=np(t,!0),[i,a]=P(n,r);e.globalAlpha=.6+.15*Math.sin(S.T*6),e.drawImage(o,O(i-o.width/2),O(a-o.height)),e.globalAlpha=1}function K5(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;st.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)E(r,o,.05,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);T({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,a){const[s,l]=P(r,o),u=l-ph(t?"obs":"sen"),f=6+26*ne(a),h=10*Math.sin(Math.min(1,a*2.2)*Math.PI*.5)*(1-a*.5);i.globalAlpha=1-a,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let c=-8;c<=8;c++){const d=c/8,m=h*(1-d*d);i.fillRect(O(s+d*f)-1,O(u-m)-1,3,2),i.fillRect(O(s+d*f)-1,O(u+m)-1,3,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,a){i.globalAlpha=.5*(1-a),ft(r,o,(t?n.WARD_VISION:n.SENTRY_R)*ne(a),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)E(r+g(-.15,.15),o+g(-.15,.15),.5,0,0,g(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function Q5(e){const t=e.kind!=="sen",n=e.x,r=e.y;st.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*rt,a=g(1,3);E(n,r,g(.2,.5),Math.cos(i)*a,Math.sin(i)*a,g(1.5,3.5),g(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)T({type:"puff",x:n+g(-.3,.3),y:r+g(-.3,.3),r:g(10,16),dur:g(.5,.8),col:[150,140,130]});T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[a,s]=P(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*rt+i*2;o.fillRect(O(a+Math.cos(f)*l)-1,O(s+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(O(a)-3,O(s)-3,6,6))}})}const Qs=["#fff2c8","#ffd080","#ffa040","#c86a10"];function Z5(e){st.sfx("mon_howl",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),[a,s]=P(o.x,o.y,(i?Un(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?Qs[1]:Qs[0];for(let h=-Math.PI*.86;h<=-Math.PI*.14;h+=.1)n.fillRect(O(a+Math.cos(h)*f)-1,O(s+Math.sin(h)*f*.7)-1,3,2)}}}),T({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=S.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||T({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const a=lt(i.uid);if(!a||a.dead||Xe(a))return;const s=S.T,[l,u]=P(a.x,a.y,Un(a)*.72),f=o>.85?(1-o)/.15:1,h=.7+.3*Math.sin(s*14+a.id),c=a.scale||1;r.globalAlpha=.35*f*h,r.fillStyle="#ff2010",r.fillRect(O(l-9*c),O(u-4),O(18*c),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(O(l-5*c)-1,O(u)-1,3,2),r.fillRect(O(l+5*c)-1,O(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(O(l-5*c),O(u)-1,1,1),r.fillRect(O(l+5*c),O(u)-1,1,1),Math.random()<.12&&E(a.x+g(-.3,.3),a.y+g(-.3,.3),.3,0,0,g(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function J5(e){const t=S.T,n=$t(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,ft(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let s=0;s<10;s++){const l=H(i*7+s),u=H(i*3+s*5),f=l*rt+t*.25*(s%2?1:-1),h=e.r*(.2+.6*u),[c,d]=P(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.15+.1*Math.sin(t+s)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+s))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=s%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(c,d,m,m*.6,0,0,rt),n.fill()}vt(!0);const a=$t();for(let s=0;s<9;s++){const l=(t*.45+H(i+s*11))%1,u=H(i*5+s)*rt,f=e.r*.8*H(i+s*3),[h,c]=P(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);a.globalAlpha=Math.sin(l*Math.PI)*o,a.fillStyle=s%2?"#e0b8ff":"#d8ffa0",a.fillRect(O(h)-1,O(c)-1,2,2)}a.globalAlpha=1,vt(!1),n.globalAlpha=1}function tM(e){st.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;T({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,ft(e.x,e.y,t*ne(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,ft(e.x,e.y,t*.7*ne(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*rt,o=g(.5,1.6)*t;E(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function eM(e){st.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*rt;T({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,a){i.globalAlpha=(1-a)*.8,ft(t,n,r*ne(Math.min(1,a*4)),"#6a4a24",null,5*(1-a)+1),i.globalAlpha=(1-a)*.35,ft(t,n,r,null,"#3a2814"),i.globalAlpha=1-a,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let s=0;s<10;s++){const l=o+s/10*rt;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,h=l+(H(o+s*9+u)-.5)*.5,[c,d]=P(t+Math.cos(h)*f,n+Math.sin(h)*f);u?i.lineTo(c,d):i.moveTo(c,d)}i.stroke()}}}),T({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,a){const s=a<.15?ne(a/.15):a>.7?(1-a)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*rt,h=u?r*(.85+.15*H(o+l)):r*.45,[c,d]=P(t+Math.cos(f)*h,n+Math.sin(f)*h),m=(u?34:24)*s*(.8+.4*H(o+l*3)),p=(H(o+l*7)-.5)*22,y=c+p,x=d-m,b=c-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(c,d),i.quadraticCurveTo(b,M,y,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(O(y)-2,O(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(O(y),O(x)-2,2,1)}}});for(let i=0;i<30;i++){const a=Math.random()*rt,s=g(.5,2.5);E(t+Math.cos(a)*r*.8,n+Math.sin(a)*r*.8,.1,Math.cos(a)*s,Math.sin(a)*s,g(1,3),g(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}at(6)}const nM=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],rM={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function oM(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(st.sfx("camp_"+t,e.x,e.y,1),t==="pack"){T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),[a,s]=P(o.x,o.y,(i?Un(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,Xn(n,nM,a,s,r<.1?2:3,rM);const[l,u]=P(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=Qs[1];for(let f=-1;f<=1;f++)for(let h=0;h<8;h++)n.fillRect(O(l+f*8-10+h*3),O(u-12+h*3),2,2)}}});for(let n=0;n<18;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(1,2.2),.8,Qs[n%4],3,0,!0)}else if(t==="spore"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Ue(o),[a,s]=P(o.x,o.y,(i?Un(i):.8)*.5),l=ne(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*rt+l*5,h=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(O(a+Math.cos(f)*h)-2,O(s+Math.sin(f)*h*.6)-2,4,4)}}}),T({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)T({type:"puff",x:e.x+g(-.6,.6),y:e.y+g(-.6,.6),r:g(8,14),dur:g(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Ue(i),[s,l]=P(i.x,i.y,(a?Un(a):.8)*.4),u=ne(Math.min(1,o/.45)),f=a&&a.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let h=0;h<10;h++){const c=h/10*rt,d=(70*(1-u)+24)*f,m=O(s+Math.cos(c)*d),p=O(l+Math.sin(c)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,at(2);for(let h=0;h<10;h++)E(i.x+g(-.4,.4),i.y+g(-.4,.4),.4,g(-1,1),g(-1,1),g(1,2),.6,h%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function iM(e,t,n){if(t.camp_bark){const[r,o]=P(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,a=i*B.HW*Math.SQRT2,s=i*B.HH*Math.SQRT2,l=$t();for(let u=0;u<12;u++){const f=u/12*rt;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(O(r+Math.cos(f)*a)-2,O(o+Math.sin(f)*s)-1,4,3)}}if(t.camp_pack){vt(!0);const r=$t(),[o,i]=P(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=Qs[2];for(let a=0;a<3;a++){const s=n*.8+a*rt/3,l=o+Math.cos(s)*26,u=i+Math.sin(s)*13;for(let f=-1;f<=1;f++)for(let h=0;h<4;h++)r.fillRect(O(l+f*4-4+h*2),O(u-3+h*2),2,1)}r.globalAlpha=1,vt(!1)}if(t.camp_spore){vt(!0);const r=$t(),[o,i]=P(e.x,e.y,Un(e)*.5);for(let a=0;a<4;a++){const s=n*(.9+a*.2)+a*1.7+e.id,l=o+Math.cos(s)*20+Math.sin(n*1.7+a)*5,u=i+Math.sin(s*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+a),r.fillStyle=a%2?"#e0b8ff":"#c8f090",r.fillRect(O(l)-1,O(u)-1,2,2)}r.globalAlpha=1,vt(!1)}}function Ba(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function Rn(e){return Un(e)*.68}const jl=(e,t,n,r)=>!!t[n],aM=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],sM={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},Y0=["#ff5a6a","#5ab4ff"];function lM(e){st.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*rt,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*rt+g(-.25,.25),r[o*3+1]=g(24,48),r[o*3+2]=o/t*.2;T({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=Ue(a),[l,u]=P(a.x,a.y,(s?Rn(s):.6)+.22),f=l+20,h=i<.28?-.8+1.7*ne(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(O(f),O(u)),o.rotate(h),Xn(o,aM,0,0,3,sM)}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=Ue(a),l=s?Rn(s):.6,[u,f]=P(a.x,a.y,l+.45),h=u+30,[c,d]=P(a.x,a.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(O(h-p),O(f)-1,O(p*2),2),o.fillRect(O(h)-1,O(f-p),2,O(p*2))}}for(let m=0;m<t;m++){const p=Y0[m&1];for(let y=2;y>=0;y--){const x=(i-.24-r[m*3+2])/.58-y*.035;if(x<=0||x>1)continue;const b=r[m*3],M=Math.sin(x*Math.PI),v=h+(c-h)*x+Math.cos(b)*34*M,w=f+(d-f)*x+Math.sin(b)*12*M-r[m*3+1]*M;if(y){o.globalAlpha=.5/y,o.fillStyle=p,o.fillRect(O(v)-1,O(w)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(O(v)-4,O(w)-4,8,8),o.globalAlpha=1,o.fillRect(O(v)-2,O(w)-2,4,4),o.fillStyle="#ffffff",o.fillRect(O(v)-1,O(w)-2,2,1)}}!a.land&&i>.84&&(a.land=!0,T({type:"custom",layer:"ground",add:!0,dur:.55,x:a.x,y:a.y,uid:a.uid,draw(m,p,y){Ue(y),m.globalAlpha=1-p,m.lineDashOffset=p*30,ft(y.x,y.y,.35+.5*ne(p),Y0[0],null,3,[5,5]),m.lineDashOffset=-p*30,ft(y.x,y.y,.3+.42*ne(p),Y0[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),St(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const Wo=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function uM(e){st.sfx("item_phase",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),i=o&&o.scale||1,a=P(r.x,r.y,0)[1],s=P(r.x,r.y,(o?Rn(o):.8)*1.05)[1],l=P(r.x,r.y)[0],u=8,f=1-n,h=O(26*i);for(let c=0;c<u;c++){const d=O(s+(a-s)*(c+.5)/u),m=Math.sin(c*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=Wo[1],t.fillRect(O(l-h/2+m-3),d-1,h,3),t.fillStyle=Wo[2],t.fillRect(O(l-h/2-m+3),d-1,h,3)}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Ue(r);const o=.28*ne(n),i=.45+.45*n;t.globalAlpha=1-n,ft(r.x-o,r.y+o,i,Wo[1],null,2),ft(r.x+o,r.y-o,i,Wo[2],null,2)}}),St(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function fM(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,a=Math.hypot(o,i);if(a<.003||a>1)return;const s=o/a,l=i/a,[u,f]=P(e.x,e.y),[h,c]=P(e.x-s,e.y-l),d=Math.hypot(h-u,c-f)||1,m=(h-u)/d,p=(c-f)/d,y=Rn(e)*B.ZK,x=e.scale||1;vt(!0);const b=$t();for(let M=0;M<5;M++){const v=y*(.15+M*.17),w=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,A=f-v+p*8;for(let R=0;R<w;R+=2){const C=1-R/w;b.globalAlpha=.55*C,b.fillStyle=Wo[1],b.fillRect(O(_+m*R),O(A+p*R)-2,2,1),b.fillStyle=Wo[2],b.fillRect(O(_+m*R),O(A+p*R)+1,2,1)}}if(b.globalAlpha=1,vt(!1),Math.random()<.35){const M=Math.random()<.5;E(e.x-s*.2+(M?.06:-.06),e.y-l*.2-(M?.06:-.06),.02,0,0,0,.45,M?Wo[1]:Wo[2],3,0,!0)}}const Lo=["#ffffff","#a8d0ff","#4a8aff","#26349a"],bl=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function tc(e,t,n,r,o){const i=bl[(r%bl.length+bl.length)%bl.length],a=O(t)-o*1.5,s=O(n)-o*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(a+u*o,s+l*o,o,o)}const cM=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],hM={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function dM(e){st.sfx("item_arcane",e.x,e.y,1);const t=e.radius||Ba("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(a,s,l){Ue(l);const u=Math.min(1,s/.12),f=.95*u,[h,c]=P(l.x,l.y),d=f*.8*B.HW*Math.SQRT2,m=f*.8*B.HH*Math.SQRT2;a.globalAlpha=s<.7?1:(1-s)/.3,ft(l.x,l.y,f,Lo[1],null,2),ft(l.x,l.y,f*.62,Lo[2],null,2),a.fillStyle=Lo[0];for(let p=0;p<10;p++){const y=p/10*rt+s*2.4;tc(a,h+Math.cos(y)*d,c+Math.sin(y)*m,p,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(a,s){const l=t*ne(s),[u,f]=P(n,r),h=l*B.HW*Math.SQRT2,c=l*B.HH*Math.SQRT2,d=40;a.globalAlpha=(1-s)*.35,ft(n,r,l,Lo[2],null,2),a.globalAlpha=1-s*s;for(let m=0;m<d;m++){const p=m/d*rt;a.fillStyle=m%4?Lo[1]:Lo[0],tc(a,u+Math.cos(p)*h,f+Math.sin(p)*c,m*7+(s*12|0),2)}}});const i=S.game;if(i)for(const a of i.heroes||[]){if(a.dead||a.team!==e.team)continue;const s=Math.hypot(a.x-n,a.y-r);s>t||T({type:"custom",layer:"top",dur:.7,delay:ne(s/t)*o*.85,x:a.x,y:a.y,uid:a.id,draw(l,u,f){const h=Ue(f),c=h?Rn(h):.8,d=Math.min(1,u/.4),[m,p]=P(f.x,f.y,c+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),Xn(l,cM,m,p,2,hM);return}const y=(u-.4)/.6;l.globalAlpha=1-y,l.fillStyle=Lo[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),M=4+y*14;l.fillRect(O(m+Math.cos(b)*M)-1,O(p+Math.sin(b)*M*.8+y*y*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)E(f.x+g(-.2,.2),f.y+g(-.2,.2),c*.8,0,0,g(-.6,-.2),.5,Lo[x%3],2,0,!0)}}})}St(n,r,2.6,5933823,.85,1),at(2)}const mM=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],pM={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},yM=[0,1,2,3].map(e=>mM.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function gM(e){st.sfx("item_clarity",e.x,e.y,1),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),[i,a]=P(r.x,r.y,(o?Rn(o):.6)*.85+Math.min(1,n*5)*.08),s=i+26*(o&&o.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(O(s),O(a)),t.rotate(-l),Xn(t,yM[u],0,0,3,pM),!r.pop&&n>.12&&(r.pop=!0,E(r.x,r.y,(o?Rn(o):.8)+.5,g(-.6,.6),g(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),T({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),i=o?Rn(o):.8,a=o&&o.scale||1;for(let s=0;s<8;s++){const l=n*1.6-s*.075;if(l<0||l>1)continue;const u=s*2.4+l*4,[f,h]=P(r.x,r.y,i*(.1+l*1.1)),c=O(f+Math.cos(u)*20*a),d=O(h+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(c-1,d-2,3,1),t.fillRect(c-1,d+2,3,1),t.fillRect(c-2,d-1,1,3),t.fillRect(c+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(c-1,d-1,1,1)):(t.fillRect(c-3,d,2,1),t.fillRect(c+2,d,2,1),t.fillRect(c,d-3,1,2),t.fillRect(c,d+2,1,2))}}}),St(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const xM=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],MM={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},vl=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function bM(e){st.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;T({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(a,s,l){const u=s*l.dur;if(u<o){const p=u/o,[y,x]=P(t,n,.9+p*(2.1-p)*1.2);a.translate(O(y),O(x)),a.rotate(p*7),Xn(a,xM,0,0,3,MM);return}const f=(u-o)/.25,[h,c]=P(t,n,2.2);if(!l.burst){l.burst=!0,at(2);for(let p=0;p<70;p++){const y=Math.random()*rt,x=g(.5,3.4);E(t,n,2.2,Math.cos(y)*x,Math.sin(y)*x,g(-.4,1),g(1.1,1.8),vl[p%4],p%5?2:3,1.4,!0,.95)}}vt(!0);const d=$t();d.globalAlpha=1-f,d.fillStyle=vl[1];const m=6+f*30;d.fillRect(O(h-m),O(c)-1,O(m*2),2),d.fillRect(O(h)-1,O(c-m),2,O(m*2)),d.fillRect(O(h)-4,O(c)-4,8,8),vt(!1)}}),T({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(a,s){const l=r*ne(s),[u,f]=P(t,n),h=l*B.HW*Math.SQRT2,c=l*B.HH*Math.SQRT2,d=72,m=Math.floor(S.T*20);for(let p=0;p<d;p++){const y=H(i+p*3+m);if(y<.3)continue;const x=p/d*rt+H(i+p)*.08,b=1-H(i+p*7)*.06;a.globalAlpha=(1-s)*y,a.fillStyle=vl[p%4];const M=y>.85?3:2;a.fillRect(O(u+Math.cos(x)*h*b)-1,O(f+Math.sin(x)*c*b)-1,M,M)}}}),T({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(a,s){const l=s*1.8;for(let u=0;u<26;u++){const f=H(i+u*11)*rt,h=Math.sqrt(H(i+u*5))*r,c=ne(h/r)*.9+H(i+u)*.3,d=(l-c)/.5;if(d<0||d>1)continue;const[m,p]=P(t+Math.cos(f)*h,n+Math.sin(f)*h,.3+H(i+u*13)*.8),y=O(2+5*Math.sin(d*Math.PI));a.globalAlpha=Math.sin(d*Math.PI),a.fillStyle=vl[u%4],a.fillRect(O(m)-y,O(p),y*2+1,1),a.fillRect(O(m),O(p)-y,1,y*2+1)}}}),St(t,n,3,16773312,.9,.6,{delay:o})}const vM=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],wM={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function SM(e){st.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;T({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,a,s){const l=lt(s.uid),u=l&&!l.dead?Rn(l):.8,[f,h]=P(t,n,u*.55),c=S.T;if(a<.3){vt(!0);const d=$t(),m=a/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const y=36-p*8;d.fillRect(O(f-r*(10+p*8+m*10)),O(h-y/2),p?2:3,y)}vt(!1)}i.globalAlpha=a<.65?1:(1-a)/.35;for(let d=0;d<3;d++){const m=ne(Math.min(1,a*1.3)),p=r*(d===1?-.4:1),y=f+p*m*(26+d*10)+Math.sin(a*14+d*2+o)*4,x=h-4-m*(24+d*9)+Math.sin(a*21+d)*3;Xn(i,vM[Math.floor(c*22)+d&1],y,x,d===1?2:3,wM)}}})}const Nr=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function _M(e,t,n,r,o){for(let i=0;i<6;i++){const a=o+i/6*rt,s=Math.cos(a),l=Math.sin(a)*.5;for(let u=0;u<=r;u+=2)e.fillRect(O(t+s*u)-1,O(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+s*r*u,h=n+l*r*u,c=r*(.32-u*.18);for(const d of[-1,1]){const m=a+d*.9,p=Math.cos(m),y=Math.sin(m)*.5;for(let x=2;x<=c;x+=2)e.fillRect(O(f+p*x)-1,O(h+y*x)-1,2,2)}}}}function AM(e){st.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Ba("frost_guard","radius",4.5),o=Math.random()*99,i=.55,a=1.25,s=72,l=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),h=[];for(let c=0;c<s;c++)l[c]=c/s*rt+(H(o+c)-.5)*.06,u[c]=14+H(o+c*7)*18,f[c]=(H(o+c*3)-.5)*.12,h.push(c);h.sort((c,d)=>Math.sin(l[c])-Math.sin(l[d])),T({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(c,d){const[m,p]=P(t,n),y=ne(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;c.globalAlpha=.22*x,ft(t,n,r*y,null,"rgba(170,225,255,1)"),c.globalAlpha=.7*x,ft(t,n,r*y,Nr[2],null,2,[3,4]),c.globalAlpha=.85*x,c.fillStyle=Nr[1];for(let b=0;b<12;b++){const M=o+b/12*rt,v=r*y*(.55+.4*H(o+b));for(let w=.3;w<v;w+=.22){const[_,A]=P(t+Math.cos(M)*w,n+Math.sin(M)*w);if(c.fillRect(O(_)-1,O(A)-1,2,2),(w*10|0)%2){const[R,C]=P(t+Math.cos(M+.5)*(w+.12),n+Math.sin(M+.5)*(w+.12));c.fillRect(O(R),O(C),2,1);const[I,z]=P(t+Math.cos(M-.5)*(w+.12),n+Math.sin(M-.5)*(w+.12));c.fillRect(O(I),O(z),2,1)}}}c.globalAlpha=x,c.fillStyle=d<.12?Nr[0]:Nr[1],_M(c,m,p,26,o+d*1.2)}}),T({type:"custom",layer:"top",dur:a,x:t,y:n,draw(c,d){const m=d*a,p=ne(Math.min(1,m/i)),y=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(a-i-.2)):1,b=(M,v,w,_,A)=>{c.fillStyle=Nr[4],c.beginPath(),c.moveTo(M-_-1,v+1),c.lineTo(M-_*.6,v-w*.7),c.lineTo(M+A,v-w-1),c.lineTo(M+_*.6,v-w*.7),c.lineTo(M+_+1,v+1),c.closePath(),c.fill(),c.fillStyle=Nr[2],c.beginPath(),c.moveTo(M-_,v),c.lineTo(M-_*.6+1,v-w*.7),c.lineTo(M+A,v-w),c.lineTo(M,v),c.closePath(),c.fill(),c.fillStyle=Nr[3],c.beginPath(),c.moveTo(M,v),c.lineTo(M+A,v-w),c.lineTo(M+_*.6-1,v-w*.7),c.lineTo(M+_,v),c.closePath(),c.fill(),c.fillStyle=Nr[0],c.fillRect(O(M+A)-1,O(v-w),2,3),c.fillStyle=Nr[1],c.fillRect(O(M-_*.5),O(v-w*.6),1,O(w*.45))};c.globalAlpha=1;for(const M of h){const v=l[M],w=Math.cos(v),_=Math.sin(v),A=u[M]*(.55+.45*p)*x;if(A<2)continue;const[R,C]=P(t+w*y*(.84+f[M]),n+_*y*(.84+f[M]));b(R,C,A*.5,3+A*.08,w*2);const[I,z]=P(t+w*y*(1+f[M]),n+_*y*(1+f[M]));b(I,z,A,3+A*.12,w*3),m<i&&!(M&3)&&(c.globalAlpha=.85,c.fillStyle=Nr[0],c.fillRect(O(I)-4,O(z)-1,8,2),c.globalAlpha=1)}}});for(let c=0;c<46;c++){const d=Math.random()*rt,m=Math.sqrt(Math.random())*r;E(t+Math.cos(d)*m,n+Math.sin(d)*m,g(.8,1.8),g(-.3,.3),g(-.3,.3),g(-.2,.1),g(1,1.6),c%3?"#ffffff":"#c8f0ff",2,.25,c%4===0,.97)}St(t,n,r*1.05,9102591,.95,.9),at(4)}const gr=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function TM(e){st.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),a=Math.min(.38,.12+i*.04),s=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:a+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(a+.05)/a),[h,c]=P(t,n,.65),[d,m]=P(r,o,.55),p=d-h,y=m-c,x=Math.hypot(p,y)||1,b=p/x,M=y/x,v=-M,w=b,_=h+p*f,A=c+y*f;for(let R=0;R<2;R++)for(let C=0;C<22;C++){const I=C*5,z=Math.sin(C*.7-S.T*28+s+R*Math.PI)*(2+C*.45),F=C<6?3:2;l.globalAlpha=(1-C/22)*.85,l.fillStyle=gr[C<5?1:C<13?2:3],l.fillRect(O(_-b*(I+40)+v*z-F/2),O(A-M*(I+40)+w*z-F/2),F,F)}l.globalAlpha=.28,l.fillStyle=gr[2];for(let R=0;R<44;R+=4)l.fillRect(O(_-b*R)-4,O(A-M*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?gr[0]:R<30?gr[1]:gr[2],l.fillRect(O(_-b*R+v*.5)-1,O(A-M*R+w*.5)-1,3,3);for(let R=0;R<14;R++){const C=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?gr[0]:gr[1];for(let I=-C;I<=C;I+=1.5)l.fillRect(O(_+b*(12-R)+v*I),O(A+M*(12-R)+w*I),2,2)}l.fillStyle=gr[0];for(let R=-4;R<=4;R++)l.fillRect(O(_-b*36+v*R*1.5)-1,O(A-M*36+w*R*1.5)-1,2,2)}}),T({type:"custom",layer:"top",add:!0,dur:.85,delay:a,x:r,y:o,draw(l,u,f){const[h,c]=P(r,o,.55);if(!f.hit){f.hit=!0,at(3);for(let d=0;d<14;d++){const m=Math.random()*rt,p=g(1,3);E(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,g(.2,1.5),.45,gr[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=gr[0];for(let p=-m;p<=m;p+=2){const y=m-Math.abs(p);l.fillRect(O(h+p),O(c-y*.7),2,2),l.fillRect(O(h+p),O(c+y*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*rt+u*3.2+s,p=6+ne(u)*26,y=h+Math.cos(m)*p,x=c+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const M=m-b*.25,v=p-b*2;l.fillStyle=gr[b===0?0:b<2?1:2],l.fillRect(O(h+Math.cos(M)*v)-1,O(c+Math.sin(M)*v*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=gr[0],l.fillRect(O(y)-1,O(x)-1,3,3)}}}),St(r,o,1.6,8060880,.85,.5,{delay:a}),St(t,n,1,8060880,.4,.25)}const oa=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function RM(e){st.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,a]=P(t,n),s=(.35+1.25*ne(o))*B.HW*Math.SQRT2,l=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const h=l+u*rt/4+f,c=s*(1-f*.25);r.fillStyle=f<.3?oa[0]:oa[3],r.fillRect(O(i+Math.cos(h)*c)-1,O(a+Math.sin(h)*c*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*rt,i=g(1,2.2);E(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,g(1.5,3),g(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function rp(e,t,n,r){const o=S.T-(t._cyS||S.T),i=Math.min(1,o/.3),[a,s]=P(t.x,t.y),l=2.5*B.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(a-9*u,s),e.lineTo(a-43*u,s-l),e.lineTo(a+43*u,s-l),e.lineTo(a+9*u,s),e.closePath(),e.fill());for(let h=0;h<f;h++){const c=h/(f-1),d=s-l*c,m=(9+c*34)*u+Math.sin(n*3+h)*2,p=m*.32,y=n*(8-c*3)+h*.9,x=a+Math.sin(n*2.2+c*3)*c*6;for(let b=0;b<rt;b+=.12){const M=b+y,v=Math.sin(M);if(v>0!==r)continue;const w=(b*3/rt+h*.37)%1;w>.72||(e.globalAlpha=(r?.9:.55)*(1-c*.3),e.fillStyle=w<.18?oa[0]:w<.45?oa[1]:oa[2],e.fillRect(O(x+Math.cos(M)*m)-2,O(d+v*p)-1,4,3))}}for(let h=0;h<6;h++){const c=n*6.5+h*1.05,d=Math.sin(c);if(d>0!==r)continue;const m=(n*.55+h*.17)%1,p=s-l*m,y=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=h%2?"#6aa040":"#8a6a40",e.fillRect(O(a+Math.cos(c)*y)-1,O(p+d*y*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,ft(t.x,t.y,.55,oa[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function CM(e){for(let t=0;t<6;t++)T({type:"puff",x:e.x+g(-.4,.4),y:e.y+g(-.4,.4),r:g(12,20),dur:g(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*rt,r=g(1,2.5);E(e.x,e.y,g(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,g(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const PM=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],IM={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function zM(e){st.sfx("item_reflect",e.x,e.y,1),T({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),i=o&&o.scale||1,[a,s]=P(r.x,r.y,(o?Rn(o):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*rt+n*1.2,h=34*i*Math.max(0,l),c=a+Math.cos(f)*h,d=s+Math.sin(f)*h*.55;t.save(),t.translate(O(c),O(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),Xn(t,PM,0,0,2,IM),t.restore()}if(n>.3&&n<.6){vt(!0);const u=$t(),f=(n-.3)/.3*rt;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(O(a+Math.cos(f)*34*i)-3,O(s+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(O(a+Math.cos(f)*34*i)-1,O(s+Math.sin(f)*34*i*.55)-3,2,6),vt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*rt,r=g(1,2.5);E(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}St(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function OM(e,t,n){const r=t.scale||1,[o,i]=P(t.x,t.y,Rn(t)*.4),a=26*r,s=(n*1.4+t.id)%rt;for(let l=0;l<6;l++){const u=n*1.6+l/6*rt,f=Math.sin(u),h=O(o+Math.cos(u)*a),c=O(i+f*a*.4),d=Math.abs(((u-s)%rt+rt)%rt)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(h-2,c-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(h-1,c-4,2,7),e.fillStyle="#d02a3a",e.fillRect(h+1,c-2,1,4)}e.globalAlpha=1}const Jn=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function FM(e){st.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||Ba("veil_discord","radius",3),o=.5,i=Math.random()*9,a=96;S.game,Ba("veil_discord","dur",14),T({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(s,l){const u=Math.min(1,l*(o+.14)/o),f=2.4*(1-u*u),h=Math.max(0,(l-.78)/.22),c=.6*B.ZK*(1-h);if(!(c<2))for(let d=0;d<2;d++)for(let m=0;m<a;m++){const p=m/a*rt,y=Math.sin(p);if(y>0!=(d===1))continue;const[x,b]=P(t+Math.cos(p)*r,n+y*r,f+.6),M=c*(.78+.22*H(i+m)),v=Math.sin(m*1.3+S.T*4)*.5+.5;s.globalAlpha=d?.92:.5,s.fillStyle=Jn[3],s.fillRect(O(x)-2,O(b)-1,5,2);for(let w=0;w<M;w+=3){const _=Math.sin(w*.1+S.T*7+m*.4)*(w/M)*3;s.fillStyle=w<3?Jn[0]:v>.66?Jn[1]:v>.25?Jn[2]:Jn[3],s.fillRect(O(x+_)-2,O(b+w),4,3)}}}}),T({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(s,l){const[u,f]=P(t,n),h=r*B.HW*Math.SQRT2,c=r*B.HH*Math.SQRT2;s.globalAlpha=.35*(1-l),ft(t,n,r*(.9+.1*l),null,Jn[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){s.globalAlpha=(1-m)*.9,s.fillStyle=d?Jn[1]:Jn[0];for(let p=0;p<rt;p+=.05){const y=(.3+.75*m)*(1+Math.sin(p*7+d*2+S.T*6)*.06);s.fillRect(O(u+Math.cos(p)*h*y)-1,O(f+Math.sin(p)*c*y)-1,3,2)}}}}}),T({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(s,l,u){if(!u.done){u.done=!0,at(3);for(let f=0;f<10;f++){const h=f/10*rt;T({type:"puff",x:t+Math.cos(h)*r*.9,y:n+Math.sin(h)*r*.9,r:g(12,20),dur:g(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const h=Math.random()*rt,c=Math.sqrt(Math.random())*r;E(t+Math.cos(h)*c,n+Math.sin(h)*c,.1,0,0,g(.6,1.6),g(.6,1),Jn[f%3],2,-.2,!0)}}}}),St(t,n,r*1.1,13656319,.7,.9,{delay:o})}function EM(e,t,n){const[r,o]=P(t.x,t.y,Rn(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,a=O(11*i);for(let s=-a;s<=a;s+=2){const l=(s+a)/(a*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+O(5*H(t.id+s*3))+Math.sin(l*Math.PI)*3,h=O(o-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=Jn[3],e.fillRect(O(r+s)-1,h-1,3,f+2),e.fillStyle=s/2%2?Jn[2]:Jn[1],e.fillRect(O(r+s),h,2,f),e.fillStyle=Jn[0],e.fillRect(O(r+s),h,2,1)}Math.random()<.04&&E(t.x+g(-.15,.15),t.y+g(-.15,.15),Rn(t)+.05,0,0,-.3,.6,Jn[2],2,1,!1)}const Id=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],zd={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function kM(e){st.sfx("item_mekansm",e.x,e.y,1),T({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),[i,a]=P(r.x,r.y,(o?Rn(o):.6)+.12),s=n<.12?ne(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(O(i-24*s),O(a)),t.rotate(l),Xn(t,Id,0,0,O(4*s)||1,zd),t.restore(),t.save(),t.translate(O(i+4*s),O(a-16*s)),t.rotate(-l*1.33+.35),Xn(t,Id,0,0,O(3*s)||1,zd),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)T({type:"puff",x:r.x+g(-.2,.2),y:r.y+g(-.2,.2),r:g(8,12),dur:g(.5,.8),col:[235,235,240]})}}}),T({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Ue(r),i=o?Rn(o):.8,a=o&&o.scale||1;for(let s=0;s<2;s++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*rt*2+s*Math.PI,[h,c]=P(r.x,r.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":s?"#ffe07a":"#8aff9a",t.fillRect(O(h+Math.cos(f)*24*a-d/2),O(c+Math.sin(f)*8*a-d/2),d,d)}if(n>.45){const s=(n-.45)/.55,[l,u]=P(r.x,r.y,i+.1+s*.5);t.globalAlpha=1-s,t.fillStyle="#c8ffd0",t.fillRect(O(l)-1,O(u)-5,3,11),t.fillRect(O(l)-5,O(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(O(l),O(u),1,1)}}}),St(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const LM=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),DM={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},$i=["#fff6c0","#ffd24a","#d89a20"];function UM(e){st.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?lt(e.uid):null,o=r?r.x:t,i=r?r.y:n,a=.34;T({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(s,l){const[u,f]=P(o,i,.6),[h,c]=P(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;s.globalAlpha=Math.sin(m*Math.PI)*.9,s.fillStyle=$i[d%2],s.fillRect(O(u+(h-u)*m)-1,O(f+(c-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(s,l,u){const f=Math.min(1,l/a),h=2.3-1.4*ne(f),[c,d]=P(t,n,h);if(s.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,Xn(s,LM,c+(f<1?Math.sin(l*30)*1.5:0),d,4,DM),!u.hit&&f>=1){u.hit=!0,at(3);for(let m=0;m<22;m++){const p=Math.random()*rt,y=g(.6,2.4);E(t,n,.5,Math.cos(p)*y,Math.sin(p)*y,g(2.5,4.5),g(.7,1.1),$i[m%3],3,9,m%3===0,.97)}T({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[y,x]=P(t,n);for(let v=0;v<9;v++){const w=(v-4)*5+Math.sin(v*2.7)*2,_=(60+70*H(v*3.1))*Math.min(1,p*4+.1),A=x-_-p*30;for(let R=0;R<_;R+=3){const C=1-R/_;m.globalAlpha=(1-p)*(1-C*.85),m.fillStyle=R<6?$i[0]:$i[1],m.fillRect(O(y+w),O(A+R),2,2)}}const b=O(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=O(x-34);m.globalAlpha=1-p,m.fillStyle=$i[0],m.fillRect(O(y)-b,M,b*2,2),m.fillRect(O(y)-1,M-b,2,b*2),m.fillRect(O(y)-3,M-2,6,6)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,ft(t,n,.3+1.1*ne(p),$i[1],null,3,[2,3])}})}}}),St(t,n,2,16765514,1,.7,{delay:a})}function XM(e){st.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=Ba("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),a=new Float32Array(r+1);for(let s=0;s<r;s++){const l=s/r*rt+.6;i[s]=t+Math.cos(l)*1.1,a[s]=n+Math.sin(l)*1.1}i[r]=t,a[r]=n,T({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(s,l){s.globalAlpha=1-l,s.lineDashOffset=S.T*30,ft(t,n,.5+1*ne(l),"#c8d0e0",null,2,[4,6]),s.lineDashOffset=0,ft(t,n,.4+.8*ne(l),"#9ad8ff",null,1.5)}}),T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,l,u){const f=ne(Math.min(1,l/.42)),h=Math.max(0,(l-.48)/.45);for(let c=0;c<=r;c++){const d=t+(i[c]-t)*f,m=n+(a[c]-n)*f,[p,y]=P(d,m,.05),x=(1-f)*4*Math.PI+c,b=O(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,v=O(y-M),w=O(M*Math.min(1,h));if(w>=M)continue;s.globalAlpha=1,s.fillStyle="#2a3040",s.fillRect(O(p)-b-2,v+w-2,b*2+4,M-w+2),s.fillStyle="#c8d0e0",s.fillRect(O(p)-b-1,v+w-1,b*2+2,M-w),s.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",s.fillRect(O(p)-b+1,v+w+1,b*2-2,M-w-4),s.fillStyle="#ffffff";const _=(S.T*40+c*13+o*10)%(M+20)-10;for(let A=0;A<4;A++){const R=O(v+_+A*2);R>v+w&&R<v+M-3&&s.fillRect(O(p)-b+2+A,R,Math.max(1,O(b*.5)),1)}h>0&&Math.random()<.7&&E(d+g(-.12,.12),m+g(-.12,.12),(M-w)/B.ZK,g(-.2,.2),g(-.2,.2),g(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let c=0;c<=r;c++)T({type:"custom",layer:"top",add:!0,dur:.25,x:i[c],y:a[c],draw(d,m,p){const[y,x]=P(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(O(y)-18,O(x)-22,36,2),d.fillRect(O(y)-18,O(x)+6,36,2),d.fillRect(O(y)-1,O(x)-30,2,44)}})}}}),St(t,n,2,10148095,.75,.8)}const xr=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function GM(e){st.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,a=Ba("abyssal_blade","stun",2),s=Math.random()*99,l=28,u=new Float32Array(l);for(let c=0;c<l;c++)u[c]=(c%2?.34:.5)+H(s+c)*.14;T({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(c,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const y=m-p*.06;if(y<0)break;const[x,b]=P(t+(r-t)*y,n+(o-n)*y,.5+Math.sin(y*Math.PI)*1.1),M=O(10-p);c.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),c.fillStyle=xr[2],c.fillRect(O(x)-M/2-1,O(b)-M/2-1,M+2,M+2),c.fillStyle=xr[0],c.fillRect(O(x)-M/2,O(b)-M/2,M,M)}}});const f=a+.35,h=c=>c<i?0:c<i+.12?ne((c-i)/.12):c>f-.3?Math.max(0,(f-c)/.3):1;T({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(c,d,m){const p=d*f,y=h(p);if(y<=0)return;if(!m.hit&&p>=i){m.hit=!0,at(6);for(let M=0;M<18;M++){const v=Math.random()*rt,w=g(1.5,3.5);E(r,o,.3,Math.cos(v)*w,Math.sin(v)*w,g(1,3),.5,M%3?xr[3]:xr[2],3,6,!0)}}c.fillStyle=xr[1];for(let M=0;M<8;M++){const v=s+M/8*rt;for(let w=.45;w<.45+.5*y;w+=.07){const _=v+(H(s+M*5+(w*20|0))-.5)*.5,[A,R]=P(r+Math.cos(_)*w,o+Math.sin(_)*w);c.fillRect(O(A)-1,O(R)-1,2,2)}}c.beginPath();for(let M=0;M<=l;M++){const v=M%l/l*rt,[w,_]=P(r+Math.cos(v)*u[M%l]*y,o+Math.sin(v)*u[M%l]*y);M?c.lineTo(O(w),O(_)):c.moveTo(O(w),O(_))}c.fillStyle=xr[0],c.fill();for(let M=0;M<l;M++){const v=M/l*rt,w=(M+1)/l*rt,[_,A]=P(r+Math.cos(v)*u[M]*y,o+Math.sin(v)*u[M]*y),[R,C]=P(r+Math.cos(w)*u[(M+1)%l]*y,o+Math.sin(w)*u[(M+1)%l]*y);for(let I=0;I<1;I+=.2)c.fillStyle=Math.sin(v)<0?xr[3]:xr[2],c.fillRect(O(_+(R-_)*I)-1,O(A+(C-A)*I)-1,2,2)}const[x,b]=P(r,o);for(let M=0;M<10;M++){const v=(S.T*.9+M/10)%1,w=M*2.4+v*5,_=(1-v)*22*y;c.globalAlpha=v,c.fillStyle=xr[3],c.fillRect(O(x+Math.cos(w)*_)-1,O(b+Math.sin(w)*_*.5)-1,2,2)}}}),T({type:"custom",layer:"top",dur:f,x:r,y:o,draw(c,d){const m=d*f,p=h(m);if(p<=0)return;const[y,x]=P(r,o,.42),b=ne(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const v=M/5*rt+s,[w,_]=P(r+Math.cos(v)*.36*p,o+Math.sin(v)*.36*p),A=Math.sin(S.T*6+M*1.7)*2,R=w+(y-w)*.55*b+A,C=_-(_-x)*b*p-8*b,I=w+Math.cos(v)*16*b,z=_-(_-x)*.7*b*p;for(let F=0;F<2;F++)for(let U=0;U<=1;U+=.06){const G=1-U,Y=G*G*w+2*G*U*I+U*U*R,k=G*G*_+2*G*U*z+U*U*C,L=U<.5?5:U<.8?4:3;F?(c.fillStyle=U>.85?xr[3]:xr[2],c.fillRect(O(Y)-1,O(k)-1,2,2)):(c.fillStyle=xr[0],c.fillRect(O(Y-L/2)-1,O(k-L/2)-1,L+2,L+2))}}}}),St(r,o,1.6,9059071,.6,.6,{delay:i})}const Zo={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},$a={blue:6996223,red:16743002,neutral:16765514};function NM(e){st.sfx("tp_start",e.x,e.y,1);const t=lt(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=Zo[r]||Zo.blue,i=e.ex===void 0?e.x:e.ex,a=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:S.T,dur:n,ex:i,ey:a,team:r});const s=l=>{const u=lt(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};T({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=P(i,a),m=S.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,ft(i,a,1.05,o[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,ft(i,a,.8,o[1],null,3,[7,5]),l.lineDashOffset=-m*40,ft(i,a,.5,o[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const M=b/4*rt+Math.PI/4,v=(m*(1.2+h*1.5)+b*.25)%1,w=1.65-v*.75,[_,A]=P(i+Math.cos(M)*w,a+Math.sin(M)*w);l.globalAlpha=p*Math.sin(v*Math.PI),l.fillStyle=o[1];const R=c-_,C=d-A,I=Math.hypot(R,C)||1,z=-C/I,F=R/I;for(let U=0;U<6;U++)l.fillRect(O(_+R/I*U+z*(6-U))-1,O(A+C/I*U+F*(6-U))-1,2,2),l.fillRect(O(_+R/I*U-z*(6-U))-1,O(A+C/I*U-F*(6-U))-1,2,2)}l.globalAlpha=p,l.fillStyle=o[0];const y=.8*B.HW*Math.SQRT2,x=.8*B.HH*Math.SQRT2;for(let b=0;b<8;b++){const M=b/8*rt-m*.6;tc(l,c+Math.cos(M)*y*1.18,d+Math.sin(M)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,St(i,a,1.2+.6*h,$a[r]||$a.blue,.35+.4*h,.32))}}),T({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=P(i,a),m=40+120*h,p=O(3+5*h+Math.sin(S.T*18)*1);for(let y=0;y<m;y+=3)l.globalAlpha=(1-y/m)*(.35+.5*h),l.fillStyle=y%12<3?o[0]:o[1],l.fillRect(O(c)-p,O(d-y)-3,p*2,3);for(let y=0;y<5;y++){const x=(S.T*.8+y/5)%1,b=S.T*4+y*1.3;l.globalAlpha=Math.sin(x*Math.PI)*h,l.fillStyle=o[0],l.fillRect(O(c+Math.cos(b)*14)-1,O(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function op(e,t,n){const r=S.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),a=Zo[o.team||e.team]||Zo.blue,s=e.scale||1;if(!t){const[l,u]=P(e.x,e.y),f=.8*B.HW*Math.SQRT2*s,h=.8*B.HH*Math.SQRT2*s;vt(!0);const c=$t();c.globalAlpha=.6,ft(e.x,e.y,.8*s,a[3],null,2);for(let d=0;d<rt*i;d+=.07){const m=d-Math.PI/2;c.globalAlpha=.95,c.fillStyle=d>rt*i-.3?a[0]:a[1],c.fillRect(O(l+Math.cos(m)*f)-1,O(u+Math.sin(m)*h)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,y=d*rt/3+p*3-r*(2+i*4);c.globalAlpha=1-p*.7,c.fillStyle=m<3?a[0]:m<7?a[1]:a[2],c.fillRect(O(l+Math.cos(y)*f*(1-p*.8))-1,O(u+Math.sin(y)*h*(1-p*.8))-1,3,3)}c.globalAlpha=1,vt(!1),Od(e,i,a,s,!1),(e._tpL||0)<r-.25&&(e._tpL=r,St(e.x,e.y,1.1+i,$a[o.team||e.team]||$a.blue,.4+.45*i,.32,{uid:e.id}));return}Od(e,i,a,s,!0),Math.random()<.3+i*.4&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(0,.4),0,0,g(1.2,2.4),.5,a[Math.random()*3|0],2,-.5,!0)}function Od(e,t,n,r,o){const i=S.T,a=Rn(e),[s,l]=P(e.x,e.y);vt(!0);const u=$t();for(let f=0;f<3;f++){const h=(i*(.8+t*1.4)+f/3)%1,c=l-h*a*1.15*B.ZK,d=(24-h*8)*r,m=d*.32;u.globalAlpha=Math.sin(h*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<rt;p+=.2)Math.sin(p)>0===o&&u.fillRect(O(s+Math.cos(p)*d)-1,O(c+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,vt(!1)}function BM(e){const t=lt(e.uid),n=e.team||t&&t.team||"blue",r=Zo[n]||Zo.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),st.sfx("tp_end",o,i,1),T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(a,s){const[l,u]=P(e.x,e.y),f=O(16*(1-s))+1,h=60+140*s;for(let c=0;c<h;c+=3)a.globalAlpha=(1-s)*(1-c/h),a.fillStyle=c<h*s?r[0]:r[1],a.fillRect(O(l)-f,O(u-c)-3,f*2,3);a.globalAlpha=1-s,ft(e.x,e.y,.9*(1-s)+.05,r[1],null,3)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(a,s,l){const[u,f]=P(o,i),h=Math.min(1,s/.14),c=f-320,d=c+(f-c)*h,m=O(s<.14?10:10+14*(1-(s-.14)/.86)*Math.sin(Math.min(1,(s-.14)*4)*Math.PI));if(a.globalAlpha=s<.45?1:(1-s)/.55,a.fillStyle=r[1],a.fillRect(O(u)-m,O(c),m*2,O(d-c)),a.fillStyle=r[0],a.fillRect(O(u)-O(m*.4),O(c),O(m*.8),O(d-c)),!l.hit&&h>=1){l.hit=!0,at(4);for(let p=0;p<26;p++){const y=Math.random()*rt,x=g(1.5,4);E(o,i,.2,Math.cos(y)*x,Math.sin(y)*x,g(.5,2.5),.55,r[p%3],3,3,!0)}T({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,y){p.globalAlpha=1-y,ft(o,i,.3+1.6*ne(y),r[1],null,6*(1-y)+1),ft(o,i,.2+1*ne(y),r[0],null,2,[3,3])}})}}}),St(o,i,2.6,$a[n]||$a.blue,1,.65)}function $M(e){const t=lt(e.uid),n=t&&t.team||"blue",r=Zo[n]||Zo.blue;t&&(t._tp=null),st.sfx("tp_cancel",e.x,e.y,1),T({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[a,s]=P(e.x,e.y);for(let l=0;l<3;l++){const u=(1-ne(Math.min(1,i*2)))*(20+l*22),f=22+i*10,h=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let c=0;c<rt;c+=.22)H(l*31+c*7)<h||o.fillRect(O(a+Math.cos(c)*f)-1,O(s-u+Math.sin(c)*f*.32+(i>.5?(i-.5)*30*H(c*13+l):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*rt,a=g(.8,2);E(e.x,e.y,g(.3,1),Math.cos(i)*a,Math.sin(i)*a,g(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)T({type:"puff",x:e.x+g(-.3,.3),y:e.y+g(-.3,.3),r:g(10,14),dur:g(.4,.6),col:[140,140,150]})}function ip(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function WM(e,t,n){const r=S.game&&S.game.player,o=r===e,[i,a]=P(e.x,e.y),s=e.scale||1,l=$t();if(t&2){const u=.75*B.HW*Math.SQRT2*s,f=.75*B.HH*Math.SQRT2*s,h=(n*2+e.id)%rt;for(let c=0;c<7;c++){const d=c/7*rt-n*.5,m=O(i+Math.cos(d)*u),p=O(a+Math.sin(d)*f),y=Math.abs(((d-h)%rt+rt)%rt)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=y?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=y?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}o&&(l.globalAlpha=.12,ft(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,ft(e.x,e.y,.5*s,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,o&&(l.globalAlpha=.1,ft(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*B.HW*Math.SQRT2*s,f=.95*B.HH*Math.SQRT2*s;vt(!0);const h=$t();for(let c=0;c<5;c++){const d=n*.7+c/5*rt,m=O(i+Math.cos(d)*u),p=O(a+Math.sin(d)*f-3-Math.sin(n*2+c)*2);h.globalAlpha=.65,h.fillStyle="#c8f0ff",h.fillRect(m-2,p,5,1),h.fillRect(m,p-2,1,5),h.fillRect(m-1,p-1,1,1),h.fillRect(m+1,p+1,1,1),h.fillRect(m+1,p-1,1,1),h.fillRect(m-1,p+1,1,1)}h.globalAlpha=1,vt(!1),o&&(l.globalAlpha=.12,ft(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&E(e.x+g(-.5,.5),e.y+g(-.5,.5),g(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function HM(e,t,n){const[r,o]=P(t.x,t.y,Rn(t)+.12),i=O(r-14*(t.scale||1)),a=O(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,a-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,a-6,4,3);for(let s=0;s<9;s++){const l=O(Math.sin(n*7-s*.7+t.id)*2),u=O(10-s*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+s*2,a-3+l,2,u+2),e.fillStyle=s%3?"#c03050":"#ff6a7a",e.fillRect(i+2+s*2,a-2+l,2,u)}e.globalAlpha=1}function qM(e,t){t.banner&&Math.random()<.025&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function VM(e){const t=S.game&&S.game.player,n=e.uid!==void 0?lt(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&Xe(n))return!0;switch(e.type){case"item_crit":return w5(e),!0;case"item_chain":return S5(e),!0;case"item_bash":return T5(e),!0;case"item_berserk":return I5(e),!0;case"item_bloodlust":return F5(e),!0;case"item_drain":return k5(e),!0;case"item_hex":return L5(e),!0;case"item_refresh":return N5(e),!0;case"item_immune":return B5(e),!0;case"item_spellblock":return W5(e),!0;case"item_push":return H5(e),!0;case"ward_place":return t&&e.team===t.team&&K5(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&Q5(e),!0;case"mon_howl":return Z5(e),!0;case"mon_spores":return tM(e),!0;case"mon_rootslam":return eM(e),!0;case"camp_buff":return oM(e),!0;case"item_wand":return lM(e),!0;case"item_phase":return uM(e),!0;case"item_arcane":return dM(e),!0;case"item_clarity":return gM(e),!0;case"item_dust":return bM(e),!0;case"item_evade":return SM(e),!0;case"item_frostwave":return AM(e),!0;case"item_lance":return TM(e),!0;case"item_cyclone":return RM(e),!0;case"item_reflect":return zM(e),!0;case"item_veil":return FM(e),!0;case"item_mekansm":return kM(e),!0;case"item_midas":return UM(e),!0;case"item_mirror":return XM(e),!0;case"item_abyss":return GM(e),!0;case"tp_start":return NM(e),!0;case"tp_end":return BM(e),!0;case"tp_cancel":return $M(e),!0}return!1}function YM(e){const t=e.status||{},n=S.T;(e.aura||e.auraFx)&&q5(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&iM(e,t,n);const r=ip(e);if(r&&WM(e,r,n),(t.banner||t.cuirass||t.frostAura)&&qM(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=S.T),rp($t(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,CM(e)),t.tp?op(e,!1):e._tp&&S.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),jl(e,t,"phase")?fM(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);vt(!0);const i=$t();i.globalAlpha=.3+.25*o,ft(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,vt(!1),Math.random()<.3&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),.05,0,0,g(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function jM(e,t){const n=t.status||{},r=S.T;n.bloodlust&&E5(e,t,r),n.immune&&$5(t,r),n.cyclone&&rp(e,t,r,!0),n.tp&&op(t,!0),jl(t,n,"reflect")&&OM(e,t,r),jl(t,n,"veil")&&EM(e,t,r),ip(t)&1&&HM(e,t,r),jl(t,n,"clarity")&&Math.random()<.05&&E(t.x+g(-.25,.25),t.y+g(-.25,.25),Rn(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(D5(t,r),t._hexV=1):t._hexV&&(t._hexV=0,U5(t))}const st={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},Cn={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let ec=null;const Zs=e=>Cn[ec&&ec[e]||e]||Cn.fire,Mr=e=>{const t=Zs(e);return t[Math.random()*t.length|0]};let Fr=[],Ei=[],Wa=[],or=[],Pu=1,nc=1;function KM(){return{parts:Fr.length,efx:Ei.length,decals:Wa.length,amb:or.length,dynL:Ao.length}}function Rs(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function ap(){Fr=[],Ei=[],Wa=[],or=[],Ao.length=0}const Ao=[],QM=64,wl=new Map;function yh(e){if(typeof e=="number")return e;let t=wl.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return wl.size>500&&wl.clear(),wl.set(e,t),t}function St(e,t,n,r,o=.8,i=.4,a){Ao.length>=QM&&Ao.shift(),Ao.push({x:e,y:t,r:n,col:yh(r),a:o,life:i,max:i,uid:a&&a.uid||0,delay:a&&a.delay||0})}function ZM(e,t,n=1){let r=0;for(let o=Ao.length-1;o>=0&&r<t;o--){const i=Ao[o];if(i.delay>0)continue;const a=i.life/i.max,s=i.a*n*Math.min(1,a*1.6);let l=i.x,u=i.y;if(i.uid){const f=lt(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*a),i.col,s),r++}}const j0=new Map,Ui=192,Wi=new Float32Array(Ui),K0=new Float32Array(Ui),Q0=new Float32Array(Ui),Z0=new Float32Array(Ui),J0=new Float32Array(Ui),tf=new Float32Array(Ui);function JM(e,t,n=1){j0.clear();let r=0;for(const o of Fr){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let a=j0.get(i);if(a===void 0){if(r>=Ui)continue;a=r++,j0.set(i,a),Wi[a]=K0[a]=Q0[a]=Z0[a]=J0[a]=tf[a]=0}const s=o.life/o.max*o.size,l=yh(o.col);Wi[a]+=s,K0[a]+=o.x*s,Q0[a]+=o.y*s,Z0[a]+=(l>>16&255)*s,J0[a]+=(l>>8&255)*s,tf[a]+=(l&255)*s}for(let o=0;o<t;o++){let i=-1,a=6;for(let c=0;c<r;c++)Wi[c]>a&&(a=Wi[c],i=c);if(i<0)break;const s=Wi[i];Wi[i]=0;let l=Z0[i]/s,u=J0[i]/s,f=tf[i]/s;const h=Math.max(l,u,f,1);l=l/h*255,u=u/h*255,f=f/h*255,e(K0[i]/s,Q0[i]/s,1.1+Math.min(2.2,Math.sqrt(s)*.28),l<<16|u<<8|f,Math.min(.85,s*.018)*n)}}const ef={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function E(e,t,n,r,o,i,a,s,l=2,u=0,f=!1,h=.94){Pu<1&&Math.random()>Pu||Fr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:h})}function _e(e,t,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const h=Math.random()*Math.PI*2,c=Math.random()*i;E(e,t,n,Math.cos(h)*c,Math.sin(h)*c,Math.random()*s,a*(.6+Math.random()*.6),Mr(r),u+(Math.random()<.3?1:0),4,l)}}function at(e){S.cam.shake=Math.max(S.cam.shake,e*nc)}function T(e){return e.t=0,Ei.push(e),tb(e),e}function tb(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":St(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":St(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":St(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":St(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":St(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&St(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":St(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function hi(e){e.t=0,Wa.push(e)}const Fd={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},Ed=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),eb=new Set(["gato","zorra"]),nb={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function kd(e){const t=Zs(e.col&&Cn[e.col]?e.col:"gold"),n=e.uid?lt(e.uid):null;if(e.type==="windup"){st.sfx(nb[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";T({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=lt(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,r&&e.radius)ft(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(o&&e.radius)ft(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!o&&e.range){const h=e.ex-u,c=e.ey-f,d=Math.hypot(h,c)||1,m=Math.min(e.range,d)*a,[p,y]=P(u,f,.1),[x,b]=P(u+h/d*m,f+c/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,y),i.lineTo(x,b),i.stroke(),i.setLineDash([])}ft(u,f,.35+.35*a,t[0],null,2)}}),T({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=lt(s.uid),[u,f]=P(l?l.x:s.x,l?l.y:s.y,.75);for(let h=0;h<10;h++){const c=h/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[h%t.length],i.fillRect(Math.round(u+Math.cos(c)*d-2),Math.round(f+Math.sin(c)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(_e(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),st.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(T({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const a=lt(i.uid);if(!a||!a.channel&&o>.05){i.t=i.dur;return}const s=e.radius||1.2,l=S.T;r.globalAlpha=.7,ft(i.x,i.y,s,t[1],null,3),ft(i.x,i.y,s*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[h,c]=P(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(h-3),Math.round(c-3),6,6)}n&&Math.random()<.5&&E(n.x,n.y,.9,g(-.5,.5),g(-.5,.5),g(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),st.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?T({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(_e(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),st.sfx("deny",e.x,e.y,.4)):_e(e.x,e.y,.6,e.col&&Cn[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function rb(e){const t=Zs(e.type.slice(5)&&Cn[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;T({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(a,s,l){const[u,f]=P(l.x,l.y,.55),h=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-h/2),Math.round(f-h/2),Math.round(h),Math.round(h)),a.fillStyle=t[1];for(let c=0;c<6;c++){const d=c/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*h),Math.round(f+Math.sin(d)*h*.7),3,3)}}});for(let a=0;a<10;a++)E(o,i,.5,n*g(1.5,4)+g(-.8,.8),r*g(1.5,4)+g(-.8,.8),g(0,1),.3,t[a%t.length],3,0,!0);at(1.5)}function ob(){const e=S.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0;const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(Pu=r?1:.4,nc=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const l=n.hero&&n.key?V[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&st.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),l)try{if(l(n)!==!1)continue}catch(u){console.error(u)}kd(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){kd(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&rb(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?V[o]:void 0,a=o&&n.type!=="heal"&&!n.impact,s=o?a?"ab_"+o:n.impact&&!i?Fd[n.type]:null:Fd[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&st.babble(n.hero,"ult",n.x,n.y),s&&st.sfx(s,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const l=t[n.hero]&&t[n.hero].abil[n.key],u=l&&ef[l.fx],f=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;u!==void 0&&St(n.x+(n.ux||0)*f,n.y+(n.uy||0)*f,n.radius?n.radius*1.15+.5:f?n.range*.85+.6:1.6,u,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(l){console.error(l)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(VM(n))continue}catch(l){console.error(l);continue}if(!o&&n.hero&&typeof n.type=="string"&&V[n.hero+"_ev_"+n.type])try{if(V[n.hero+"_ev_"+n.type](n)!==!1)continue}catch(l){console.error(l);continue}switch(n.type){case"fire":{T({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let l=0;l<90;l++){const u=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,f=(.4+Math.random())*n.range*2.4;E(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(u)*f,Math.sin(u)*f,Math.random()*1.2,.5,Mr("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}hi({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),at(3);break}case"quake":{T({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),T({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let l=0;l<50;l++){const u=Math.random()*6.28,f=Math.random()*n.range*2.5;E(n.x,n.y,.1,Math.cos(u)*f,Math.sin(u)*f,1+Math.random()*2,.7,Mr("quake"),3,6,!1)}at(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const l=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;ef[n.type]!==void 0&&St(n.x,n.y,n.radius*1.2+.4,ef[n.type],n.type==="firering"?1:.75,.6),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:Zs(l)[1],w:7}),T({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:Zs(l)[0],w:3,delay:.08}),n.type==="roar"&&(T({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),at(8)),n.type==="firering"&&(T({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),at(9),hi({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&hi({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&hi({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const u=n.type==="spores"?40:90;for(let f=0;f<u;f++){const h=Math.random()*Math.PI*2,c=n.radius*(1.6+Math.random()*1.6);E(n.x,n.y,.2,Math.cos(h)*c,Math.sin(h)*c,Math.random()*2,.6,Mr(l),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let f=0;f<14;f++)T({type:"puff",x:n.x+g(-1,1)*n.radius*.7,y:n.y+g(-1,1)*n.radius*.7,r:g(14,26),dur:g(.7,1.3),col:[140,210,90]});break}case"heal":T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let l=0;l<16;l++)E(n.x+g(-.4,.4),n.y+g(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,Mr("heal"),3,0,!0);break;case"shield":case"stoneskin":T({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":T({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let l=0;l<12;l++)T({type:"puff",x:n.x+g(-.6,.6),y:n.y+g(-.6,.6),r:g(12,22),dur:g(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const l=n.type==="firedash"?"fire":"dust",u=n.ex||n.x+(n.ux||0)*(n.range||0),f=n.ey||n.y+(n.uy||0)*(n.range||0);for(let h=0;h<30;h++){const c=h/30;E(n.x+(u-n.x)*c+g(-.2,.2),n.y+(f-n.y)*c+g(-.2,.2),.15,g(-.5,.5),g(-.5,.5),g(.3,1.2),.5+c*.4,Mr(l),4,0,l==="fire")}T({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.35,col:l==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const l=n.ex||n.x,u=n.ey||n.y;T({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),T({type:"flash",x:l,y:u,r:1.1,dur:.3,col:"rgba(220,170,255,"}),T({type:"streak",x:n.x,y:n.y,ex:l,ey:u,dur:.3,col:"#d8a8ff"}),_e(n.x,n.y,.4,"arcane",16,2,.5),_e(l,u,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let l=0;l<20;l++){const u=Math.random()*6.28,f=Math.random()*n.radius;E(n.x+Math.cos(u)*f,n.y+Math.sin(u)*f,.1,0,0,2,.6,Mr("arcane"),2,0,!0)}break;case"starfall":for(let l=0;l<18;l++)T({type:"meteor",x:n.x+g(-1,1)*n.radius*.8,y:n.y+g(-1,1)*n.radius*.8,dur:.35,delay:l*.02});T({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),_e(n.x,n.y,.2,"arcane",70,6,.8,3),hi({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),at(10);break;case"slash":T({type:"xslash",x:n.x,y:n.y,dur:.35}),_e(n.x,n.y,.5,"blood",20,4,.5,2,!1),_e(n.x,n.y,.5,"slash",14,4,.4),at(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.proj)){const u=n.proj&&n.pkey||"A";if(u==="A"&&Ge[n.hero]){if(eb.has(n.hero)||st.sfx("atk_"+n.hero,n.x,n.y,n.big?1:.8),!(n.proj&&Ed.has(n.hero+"_A")))try{Ge[n.hero](n)}catch(h){console.error(h)}break}if(u!=="A"&&Ed.has(n.hero+"_"+u))break;const f=u!=="A"?V[n.hero+"_"+u+"_hit"]:void 0;if(f){st.sfx("imp_"+n.hero+"_"+u,n.x,n.y,.9);try{f(n)}catch(h){console.error(h)}break}}const l=n.col&&Cn[n.col]?n.col:n.hero==="dragon"?"fire":"slash";T({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Cn[l][0]}),_e(n.x,n.y,.45,l,n.big?10:5,n.big?3:2,.35,1.5,!0,2),st.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&at(2);break}case"shoot":if(n.kind==="hero"&&n.hero){st.sfx("shot_"+n.hero,n.x,n.y,.6);break}st.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":T({type:"jaws",x:n.x,y:n.y,dur:.35}),_e(n.x,n.y,.3,"bite",24,3,.5),at(5);break;case"transform":{if(n.hero&&V[n.hero+"_T"]){st.sfx("tf_"+n.hero,n.x,n.y,1);try{V[n.hero+"_T"](n)}catch(f){console.error(f)}break}const l=n.kind==="fire",u=l?[255,140,50]:[255,220,90];T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:u}),T({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:l?"#ff9a3a":"#ffe070",w:6}),_e(n.x,n.y,.6,l?"fire":"gold",70,5,.9,3,!0,4),at(n.uid===(e.player&&e.player.id)?10:4),st.sfx("roar",n.x,n.y,.8);break}case"levelup":T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),T({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":if(n.kind==="hero"&&Object.keys(V).some(l=>{if(!l.endsWith("_death"))return!1;try{return V[l](n)===!0}catch(u){return console.error(u),!1}}))break;n.kind==="hero"?(n.sprite&&st.babble(n.sprite==="slime"&&(lt(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),_e(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),T({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),st.sfx("death",n.x,n.y)):n.kind==="minion"?(_e(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),st.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(_e(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),st.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let l=0;l<26;l++){const u=Math.random()*6.28,f=g(1.5,5);E(n.x+g(-.3,.3),n.y+g(-.3,.3),g(.8,2.2),Math.cos(u)*f,Math.sin(u)*f,g(3,9),g(1.2,2),Mr("stone"),Math.random()*4+4|0,14,!1,.97)}for(let l=0;l<14;l++)T({type:"puff",x:n.x+g(-1.2,1.2),y:n.y+g(-1.2,1.2),r:g(26,46),dur:g(1.2,2.2),col:[150,140,130]});T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),hi({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),st.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),st.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&st.say(n.monster==="serpent"?"serpent":"boss"),_e(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let l=0;l<30;l++)E(n.x,n.y,1,g(-4,4),g(-4,4),g(3,8),1.4,Mr("stone"),5,12,!1);T({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),T({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),at(14);break;case"killbanner":{const l=e.player,u=l&&n.uid===l.id;if(T({type:"wisp",x:n.x,y:n.y,dur:1.6}),_e(n.x,n.y,.8,"gold",u?40:14,4,.9,3,!0,3),!n.hero)break;const f=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],h=n.big===1,c=n.big===2,d=n.dur||0,m=h?"first":n.skill>=2?"multi":c?"ace":d>=7?"godlike":d>=5?"unstoppable":d===4?"rampage":d===3?"spree":"kill",y=m==="multi"?f[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[m],x=l&&n.team===l.team;st.banner(y,x?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(h||c||n.skill>=2||u));const b=l&&l.heroKey===n.kind&&l.dead&&n.team!==l.team,M=["","","double","triple","quadra","penta"];st.say(m==="first"?"first_blood":m==="multi"?M[Math.min(5,n.skill)]:m==="kill"?b?"you_died":x?"kill":"ally_killed":m),u&&at(6);break}case"runespawn":st.say("rune");break;case"chrono":T({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(l,u,f){l.globalAlpha=.35*(u>.9?(1-u)*10:1),ft(f.x,f.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[h,c]=P(f.x,f.y,0);for(let d=0;d<12;d++){const m=d/12*6.283;l.fillStyle="#ffffff",l.fillRect(Math.round(h+Math.cos(m)*n.radius*46),Math.round(c+Math.sin(m)*n.radius*23),3,3)}}}),at(5);break;case"hook_pull":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),_e(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":T({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),_e(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),at(3);break;case"pet_fade":if(Object.keys(V).some(l=>{if(!l.endsWith("_petfade"))return!1;try{return V[l](n)===!0}catch(u){return console.error(u),!1}}))break;_e(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":st.sfx("item_blink",n.x,n.y),_e(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),_e(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":st.sfx("item_shield",n.x,n.y,.7),T({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),_e(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":st.sfx("item_purge",n.x,n.y),T({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),_e(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":st.sfx("item_invis",n.x,n.y),_e(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":st.sfx("item_drum",n.x,n.y);for(let l=0;l<3;l++)T({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:l*.14});at(3);break;case"item_freeze":st.sfx("item_freeze",n.ex,n.ey),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),_e(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const l=e.player;if(!l||n.team!==l.team)break;const u=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let f=0;f<3;f++)T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:u,w:4,delay:f*.18});T({type:"pingmark",x:n.x,y:n.y,dur:3,col:u,kind:n.kind}),st.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),_e(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),st.sfx("tower",n.ex,n.ey,.7);break;case"rooted":T({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const l=e.player&&e.winner===e.player.team;st.play(l?"victory":"defeat",1),st.say(l?"victory":"defeat")}else st.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":T({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}Pu=1,nc=1,ec=null}function ib(e){for(const t of Fr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);Rs(Fr,t=>t.life>0),Fr.length>2500&&Fr.splice(0,Fr.length-2500);for(const t of Ei)t.t+=e;Rs(Ei,t=>t.t<t.dur+(t.delay||0));for(const t of Wa)t.t+=e;Rs(Wa,t=>t.t<t.dur);for(const t of Ao)t.delay>0?t.delay-=e:t.life-=e;Rs(Ao,t=>t.life>0),S.cam.shake=Math.max(0,S.cam.shake-e*30)}let nf=6,Hi=0;function ab(e,t,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=B,f=window.MAP,h=S.T;if(nf-=e,nf<=0&&(Hi=g(.6,1),nf=g(8,16)),Hi=Math.max(0,Hi-e*.25),S.wind=.35+.15*Math.sin(h*.4)+Hi,Hi>.3&&Math.random()<Hi*.9){const c=n+Math.random()*o,m=t-20-u,p=(m/a+c/s)/2,y=(c/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];or.push({k:"leaf",x:p,y,z:g(.4,2.2),ph:Math.random()*6,life:g(2.5,4),col:x,sp:g(9,15)})}if(or.length<70&&Math.random()<.8){const c=t+Math.random()*r,d=n+Math.random()*o,m=c-u,p=d,y=(m/a+p/s)/2,x=(p/s-m/a)/2;if(y>1&&x>1&&y<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(y)];b===0||b===4?or.push({k:"fly",x:y,y:x,z:g(.2,.9),ph:Math.random()*6,life:g(4,9),vx:g(-.3,.3),vy:g(-.3,.3)}):b===3&&or.push({k:"spark",x:y,y:x,z:0,ph:Math.random()*6,life:g(.4,1),max:1})}}for(const c of or)c.life-=e,c.k==="leaf"&&(c.x+=c.sp*e*.5,c.y-=c.sp*e*.5,c.z+=Math.sin(h*6+c.ph)*.02),c.k==="fly"&&(c.vx+=g(-.6,.6)*e,c.vy+=g(-.6,.6)*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=Math.sin(h*2+c.ph)*.003);if(Rs(or,c=>c.life>0),or.length>160&&or.splice(0,or.length-160),Math.random()<.1&&i.length){const c=i[Math.random()*i.length|0];if(c&&c.sprite.startsWith("prop_oak")){const[d,m]=P(c.x,c.y);d>t&&d<t+r&&m>n&&m<n+o+100&&E(c.x+g(-.4,.4),c.y+g(-.4,.4),1.4,g(-.3,.3),g(-.3,.3),-.25,4,c.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let X,Kl,Xo=null;function Ld(e,t){X=Kl=e,Xo=t||null}function ve(e){if(!Xo){X.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(X===Xo)return;Xo.setTransform(Kl.getTransform()),Xo.globalAlpha=Kl.globalAlpha,Xo.globalCompositeOperation="lighter",Xo.imageSmoothingEnabled=!1,X=Xo}else X=Kl}function ft(e,t,n,r,o,i=2,a){const{HW:s,HH:l}=B,[u,f]=P(e,t);X.beginPath(),X.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(X.fillStyle=o,X.fill()),r&&(X.lineWidth=i,X.strokeStyle=r,a&&X.setLineDash(a),X.stroke(),X.setLineDash([]))}function rf(e,t,n){X.beginPath(),e.forEach(([r,o],i)=>{const[a,s]=P(r,o);i?X.lineTo(a,s):X.moveTo(a,s)}),X.closePath(),X.fillStyle=n,X.fill(),X.strokeStyle=t,X.lineWidth=2,X.stroke()}function sb(){for(const e of Wa){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];ft(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&ft(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&ft(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function sp(e,t){if(!(t>1)){e.add&&ve(!0),X.save();try{e.draw(X,t,e)}catch(n){console.error(n)}X.restore(),e.add&&ve(!1)}}function vt(e){ve(e)}function $t(){return X}function lb(){const{HW:e}=B;for(const t of Ei){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&sp(t,r);continue}if(t.type==="ring")X.globalAlpha=Math.max(0,1-r),ft(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),X.globalAlpha=1;else if(t.type==="cone"){const[o,i]=P(t.x,t.y),a=Math.atan2(t.uy,t.ux);X.save(),ve(!0),X.globalAlpha=Math.max(0,.75*(1-r)),X.beginPath(),X.moveTo(o,i);for(let f=0;f<=16;f++){const h=a-t.angle+2*t.angle*f/16,c=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=P(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c);X.lineTo(d,m)}X.closePath();const[s,l]=P(t.x+t.ux*t.range,t.y+t.uy*t.range),u=X.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),X.fillStyle=u,X.fill(),ve(!1),X.restore()}else if(t.type==="cracks"){X.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,X.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(t.angle,3)*1.6;X.beginPath();let[s,l]=P(t.x,t.y);X.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,h=a+(H(t.seed+i*7+u)-.5)*.6;[s,l]=P(t.x+Math.cos(h)*f,t.y+Math.sin(h)*f),X.lineTo(s,l)}X.stroke()}}else if(t.type==="flash"){const[o,i]=P(t.x,t.y,.3),a=t.r*e*1.3;ve(!0);const s=X.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,t.col+.8*(1-r)+")"),s.addColorStop(1,t.col+"0)"),X.fillStyle=s,X.fillRect(o-a,i-a,a*2,a*2),ve(!1)}else if(t.type==="streak"){const[o,i]=P(t.x,t.y,.4),[a,s]=P(t.ex,t.ey,.4);ve(!0),X.strokeStyle=t.col,X.globalAlpha=Math.max(0,.9*(1-r)),X.lineWidth=8*(1-r)+1,X.beginPath(),X.moveTo(o,i),X.lineTo(a,s),X.stroke(),X.globalAlpha=1,ve(!1)}else if(t.type==="puff"){const[o,i]=P(t.x,t.y,.3+r*.4),a=t.col;X.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=t.r*(.6+r*.7);X.beginPath(),X.ellipse(o,i,s,s*.75,0,0,7),X.fill()}}lp("ground")}function lp(e){for(const t in Pf){X.save();try{Pf[t](e)}catch(n){console.error(n)}ve(!1),X.restore()}}function ub(){const e=S.T;for(const t of Ei){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&sp(t,r);continue}const o=t.uid?lt(t.uid):null,i=o?o.x:t.x,a=o?o.y:t.y;if(t.type==="pillar"){const[s,l]=P(i,a),u=t.col,f=140*Math.min(1,r*4),h=Math.max(0,.6*(1-r));ve(!0);const c=X.createLinearGradient(s,l,s,l-f);c.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${h})`),c.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),X.fillStyle=c,X.fillRect(s-18,l-f,36,f),ve(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=P(i,a,.35),u=t.col;ve(!0),X.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,X.lineWidth=2,X.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,X.beginPath(),X.ellipse(s,l,34,38,0,0,7),X.fill(),X.stroke();for(let f=0;f<6;f++){const h=e*1.5+f*1.05;X.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,X.fillRect(s+Math.cos(h)*30-1,l+Math.sin(h)*34-1,3,3)}ve(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[s,l]=P(i,a,.3);X.strokeStyle="rgba(160,255,190,0.7)",X.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;X.beginPath(),X.ellipse(s,l,26,12,0,f,f+1.4),X.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[s,l]=P(i,a);X.strokeStyle="#4a7a2a",X.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;X.beginPath(),X.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),X.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),X.stroke()}X.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;X.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=P(t.x,t.y,3*(1-r));ve(!0),X.strokeStyle="rgba(240,200,255,0.9)",X.lineWidth=4,X.beginPath(),X.moveTo(s-18,l-50),X.lineTo(s,l),X.stroke(),X.fillStyle="#ffffff",X.fillRect(s-3,l-3,6,6),ve(!1)}else if(t.type==="xslash"){const[s,l]=P(t.x,t.y,.5),u=40*Math.min(1,r*3);X.globalAlpha=Math.max(0,1-r),X.strokeStyle="#ffffff",X.lineWidth=6,X.beginPath(),X.moveTo(s-u,l-u),X.lineTo(s+u,l+u),X.moveTo(s+u,l-u),X.lineTo(s-u,l+u),X.stroke(),X.strokeStyle="#ff4040",X.lineWidth=2,X.stroke(),X.globalAlpha=1}else if(t.type==="spark"){const[s,l]=P(t.x,t.y,.45),u=(t.big?16:10)*(1-r);ve(!0),X.fillStyle=t.col,X.fillRect(s-u,l-1,u*2,3),X.fillRect(s-1,l-u,3,u*2),X.fillRect(s-u*.5,l-u*.5,u,u),ve(!1)}else if(t.type==="jaws"){const[s,l]=P(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));X.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",X.lineWidth=5,X.beginPath(),X.arc(s,l-u,24,.2,Math.PI-.2),X.stroke(),X.beginPath(),X.arc(s,l+u,24,Math.PI+.2,-.2),X.stroke()}else if(t.type==="pingmark"){const[s,l]=P(t.x,t.y,.9+Math.sin(e*6)*.05);fb(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),X.beginPath(),X.moveTo(s,l+14),X.lineTo(s-9,l-2),X.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),X.closePath(),X.fill(),X.stroke(),X.fillStyle="#120c1a",X.font="bold 13px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",s,l-6),X.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=P(t.x,t.y,.5+r*2);ve(!0),X.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",X.beginPath(),X.arc(s+Math.sin(r*12)*6,l,7,0,7),X.fill(),ve(!1)}}lp("top")}function fb(e,t){X.globalAlpha=t,X.fillStyle=e,X.strokeStyle="#120c1a",X.lineWidth=2}function cb(){const{HW:e,HH:t,OX:n,ZK:r}=B;for(const o of Fr){if(o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r;X.globalAlpha=Math.min(1,o.life/o.max*1.5),X.fillStyle=o.col,X.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}X.globalAlpha=1,ve(!0);for(const o of Fr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r,s=Math.min(1,o.life/o.max*1.5);X.globalAlpha=s*.35,X.fillStyle=o.col,X.fillRect(Math.round(i-o.size),Math.round(a-o.size),o.size*2,o.size*2),X.globalAlpha=s,X.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}X.globalAlpha=1,ve(!1)}function hb(){const e=S.T,{HW:t,HH:n,OX:r,ZK:o}=B;for(const i of or){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;X.fillStyle="#00000040",X.fillRect(a-l/2+2,s+2,l,3),X.fillStyle=i.col,X.fillRect(a-l/2,s,l,3)}ve(!0);for(const i of or){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);X.fillStyle=`rgba(210,255,120,${.25*l})`,X.fillRect(a-3,s-3,6,6),X.fillStyle=`rgba(250,255,200,${.9*l})`,X.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));X.fillStyle=`rgba(255,255,255,${.7*l})`,X.fillRect(a-1,s,3,1),X.fillRect(a,s-1,1,3)}}ve(!1)}function db(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function mb(){const{HW:e,HH:t}=B,n=S.T;for(const r of S.game.projs){const o=r.z||.45,[i,a]=P(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=db(r.look||r.fx),u=l?Oe[l]:void 0;if(u){X.save();try{u(X,r,i,a,s,n)}catch(h){console.error(h)}X.restore(),ve(!1);continue}const f=Cn[r.fx]||Cn.arcane;if(r.fx==="arrow"||r.fx==="spear"){const h=r.fx==="arrow"?r.skill?26:16:12;X.save(),X.translate(i,a),X.rotate(s),X.fillStyle="#3a2a1a",X.fillRect(-h,-2,h,4),X.fillStyle="#e8d8b0",X.fillRect(-h,-1,h,2),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(5,0),X.lineTo(-2,-4),X.lineTo(-2,4),X.fill(),X.fillStyle="#e05050",X.fillRect(-h-3,-3,5,2),X.fillRect(-h-3,1,5,2),X.restore(),r.skill&&E(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")X.save(),X.translate(i,a),X.rotate(n*25),X.fillStyle="#1a1020",X.fillRect(-9,-3,18,6),X.fillStyle="#e0e8f0",X.fillRect(-8,-2,14,4),X.fillStyle="#c8a040",X.fillRect(-10,-3,4,6),X.restore();else if(r.fx==="root")X.fillStyle="#5a3a20",X.beginPath(),X.arc(i,a,7,0,7),X.fill(),X.fillStyle="#8ad050",X.beginPath(),X.arc(i+3,a-3,4,0,7),X.fill(),E(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const h=r.skill?10:6;ve(!0);const c=X.createRadialGradient(i,a,0,i,a,h*2.4);c.addColorStop(0,f[1]),c.addColorStop(.4,f[2]+"aa"),c.addColorStop(1,f[3]+"00"),X.fillStyle=c,X.fillRect(i-h*2.4,a-h*2.4,h*4.8,h*4.8),ve(!1),X.fillStyle=f[0],X.fillRect(i-3,a-3,6,6),Math.random()<.8&&E(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const Go=Math.round,Iu=Math.PI*2,jr=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(Go(t-r/2),Go(n-r/2),r,r)},up=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);V.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];T({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=P(a,s,.9),f=Math.min(1,r*3),h=r>.7?1-(r-.7)/.3:1;n.globalAlpha=h;for(const c of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+c*(.35+d*.22*f),p=(26+d*7)*f;for(let y=0;y<p;y+=3){const x=y/Math.max(1,p),b=Math.sin(S.T*18+d+y*.3)*2;jr(n,l+Math.cos(m)*y+b*c,u+Math.sin(m)*y*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let c=0;c<14;c++){const d=c/14*Iu+r*9,m=18+c%3*6,p=-r*70-c*3;jr(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[c%4])}}});for(let n=0;n<40;n++){const r=Math.random()*Iu,o=g(1,3.5);E(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,g(2,5),g(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}at(up(e)?9:3)};V.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];T({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=P(a,s,1.6),f=Math.min(1,r*2.5),h=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*h;const c=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((y,x)=>[...y].forEach((b,M)=>{b!=="."&&jr(n,d+(M-7)*c,m+(x-5)*c,c,b==="N"?t[4]:b==="o"?t[0]:t[1+(M+x)%2])})),r>.15&&r<.6)for(let y=0;y<3;y++){const x=40+((r-.15)*300+y*22)%90;for(let b=-.9;b<=.9;b+=.12)jr(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),T({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=lt(o.uid),[a,s]=P(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const h=f/l*Iu,c=(1-u)*120+30,d=a+Math.cos(h)*c,m=s+Math.sin(h)*c*.5;n.fillStyle=t[3],n.fillRect(Go(d-6),Go(m-4),12,8),n.fillStyle=t[1],n.fillRect(Go(d-5),Go(m-3),10,3),n.fillStyle=t[0],n.fillRect(Go(d-1),Go(m-1),2,2)}}}),at(up(e)?10:4)};V.erizo_Q_hit=e=>{T({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)jr(t,o+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,jr(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)E(e.x,e.y,.5,g(-2,2),g(-2,2),g(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};V.polilla_Q_hit=e=>{T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=P(r.x,r.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<Iu-.4;l+=.18)jr(t,o+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=o+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)jr(t,s+f*u,l,u,"#fff6c8"),jr(t,s+f*u,l+3*u,u,"#fff6c8"),jr(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)E(e.x,e.y,.6,g(-1,1),g(-1,1),g(.5,1.5),g(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const vr=Math.round,At={x:0,y:0};function pn(e,t,n=0){At.x=(e-t)*B.HW+B.OX,At.y=(e+t)*B.HH-n*B.ZK}const ye=e=>e*B.HW*Math.SQRT2,yr=e=>e*B.ZK,Ql=(e,t)=>Math.sqrt(2*B.HH*B.HH*e*e+B.ZK*B.ZK*t*t);function no(e,t,n){const r=2*B.HH/B.ZK;return(e+t+r*n)/Math.sqrt(2+r*r)}const pb=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Dd=new WeakMap;function zt(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let r=Dd.get(e);r||(r=new Map,Dd.set(e,r));const o=t+"|"+n;let i=r.get(o);if(!i){const a=document.createElement("canvas");a.width=a.height=8;const s=a.getContext("2d");s.fillStyle=t;for(let l=0;l<16;l++)pb[l]<n&&s.fillRect((l&3)*2,(l>>2)*2,2,2);i=e.createPattern(a,"repeat")||t,r.set(o,i)}return i}function rc(e,t,n,r,o,i,a,s,l=2){if(r<2||s<=0)return;const u=r*.5,f=a.length,h=vr(n-o),c=vr(i?n+u:n);for(let d=h;d<c;d+=l){const m=d+l/2-n,p=m<0?r*Math.sqrt(Math.max(0,1-m/o*(m/o))):r*Math.sqrt(Math.max(0,1-m/u*(m/u))),y=!i&&m>-u?r*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-y<.5)continue;const x=m/o*(m/o);for(let b=0;b<f;b++){const M=a[b];let v=r*Math.sqrt(Math.max(0,M.u0*M.u0-x)),w=b+1<f?r*Math.sqrt(Math.max(0,a[b+1].u0*a[b+1].u0-x)):p;if(v<y&&(v=y),w>p&&(w=p),w-v<.5)continue;e.globalAlpha=s*M.a,e.fillStyle=M.fill;const _=vr(t-w),A=vr(t-v),R=vr(t+v),C=vr(t+w);A>_&&e.fillRect(_,d,A-_,l),C>R&&e.fillRect(R,d,C-R,l)}}}function Gr(e,t,n,r,o,i,a,s,l,u,f=2){const h=Math.max(r,o);if(h<2||u<=0||i<1)return;const c=n-i,d=r*.5,m=o*.5,p=s.length,y=l.length,x=a?1:-1;for(let b=-h;b<h;b+=f){const M=Math.abs(b+f/2),v=M/h;let w,_;if(M<=o?w=c+x*m*Math.sqrt(1-M/o*(M/o)):w=c+(M-o)/(r-o)*i,M<=r?_=n+x*d*Math.sqrt(1-M/r*(M/r)):_=n-(M-r)/(o-r)*i,_<w){const z=w;w=_,_=z}let A=0;for(;A+1<p&&v>=s[A+1].u0;)A++;const R=s[A];e.fillStyle=R.fill;const C=vr(t+b),I=_-w;for(let z=0;z<y;z++){const F=vr(_-I*(z+1)/y),U=vr(_-I*z/y);U<=F||l[z]<=0||(e.globalAlpha=u*R.a*l[z],e.fillRect(C,F,f,U-F))}}}function xo(e,t,n,r,o,i,a,s,l){for(let u=0;u<i;u++){const f=s+u/i*Math.PI*2,h=Math.cos(f),c=Math.sin(f);l&&(h+c>0?1:-1)!==l||(pn(t+h*o,n+c*o,r),e.fillRect(vr(At.x-a/2),vr(At.y-a/2),a,a))}}function Xi(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,r=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:r,id:-1,t0:S.T,endAt:S.T+t,found:!1,nl:0,fr:-1,rem:t}}function zn(e){if(e.fr===S.T)return e.rem;e.fr=S.T;const t=S.game;let n=null;if(t&&t.zones){for(const r of t.zones)if(e.id>=0?r.id===e.id:Math.abs(r.x-e.x)<.16&&Math.abs(r.y-e.y)<.16&&(!e.look||!r.look||String(r.look)===e.look)){n=r;break}}if(n){const r=S.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=r):r<e.endAt&&(e.endAt=r),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,S.T));return e.rem=e.endAt-S.T,e.rem}function Eo(e,t,n,r,o,i){S.T<e.nl||(e.nl=S.T+.1,St(t,n,r,o,i*.75,.22))}const Gs=e=>e<0?0:e>1?1:e,ot=Math.round,rn=Math.PI*2;let ee=0,Kt=0;function We(e,t,n=0){ee=(e-t)*B.HW+B.OX,Kt=(e+t)*B.HH-n*B.ZK}function Mn(e,t,n,r,o){e.fillStyle=o,e.fillRect(ot(t-r/2),ot(n-r/2),r,r)}function oc(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(ot(t+(r-t)*l/s-i/2),ot(n+(o-n)*l/s-i/2),i,i)}function Ha(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(ot(t-a/2),ot(n+i*o),ot(a),Math.max(1,ot(2*o)))}}function Ma(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let a=-r;a<r;a+=2){const s=Math.abs(a+1),l=s<=r/2?r*.866:r*.866*(r-s)/(r/2);l<.5||n+a<i||e.fillRect(ot(t-l),ot(n+a),ot(l*2),2)}}function yb(e,t,n,r,o){e.fillStyle=o,e.fillRect(ot(t-r),ot(n-1),r*2,2),e.fillRect(ot(t-1),ot(n-r),2,r*2)}function ic(e,t,n){e.fillStyle=ut.l,e.fillRect(ot(t-1),ot(n-4),2,2),e.fillStyle=ut.o,e.fillRect(ot(t-2),ot(n-2),4,4),e.fillStyle=ut.w,e.fillRect(ot(t-1),ot(n-2),2,2)}const Lr=e=>e<0?0:e>1?1:e,Jo=e=>1-(1-e)*(1-e),ut={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},ba="#2a1e14",gb="#eaf8ff",xb="#b8e0ff",zu="#ff9ac8",gh="#9a5ad8",Mb="#9a7a48";function fp(e,t,n,r,o){const i=S.game;if(!i)return null;let a=null,s=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function bb(e,t,n,r,o){e.fillStyle=o?gb:xb,o?(e.fillRect(ot(t-3*r-2),ot(n-9),4,5),e.fillRect(ot(t+1*r-1),ot(n-8),3,4)):(e.fillRect(ot(t-5*r-2),ot(n-5),5,3),e.fillRect(ot(t+2*r-2),ot(n-5),4,3)),e.fillStyle=ut.y,e.fillRect(ot(t-5),ot(n-3),10,6),e.fillStyle=ba,e.fillRect(ot(t-2*r-1),ot(n-3),2,6),e.fillRect(ot(t+1*r),ot(n-3),2,6),e.fillRect(ot(t+5*r-(r>0?1:2)),ot(n-2),3,4),e.fillRect(ot(t-6*r-1),ot(n-1),2,2)}V.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;T({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,a){We(r,o,.6);const s=26*(1-Jo(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*rn+a*3;Mn(i,ee+Math.cos(u)*s,Kt+Math.sin(u)*s*.6,3,l&1?ba:ut.y)}a>.6&&(i.fillStyle=gh,i.fillRect(ot(ee-2),ot(Kt-2),4,4))}});for(let i=0;i<6;i++)E(r,o,.6,t*g(1,3)+g(-.6,.6),n*g(1,3)+g(-.6,.6),g(0,.6),.3,i&1?ut.y:ut.l,2,0,!0)};Oe.abeja_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=i*30|0;for(let h=3;h<17;h++){const c=h*3.5,d=(h+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-h/17,e.fillStyle=h&1?ut.l:ut.y,e.fillRect(ot(n-a*c+l*m*5),ot(r-s*c+u*m*5),2,2)}e.globalAlpha=1;for(let h=0;h<=14;h++){const c=n+a*(8-h)*1.6,d=r+s*(8-h)*1.6;if(h<=1)Mn(e,c,d,2,ut.w);else if(h<=8)Mn(e,c,d,2,ut.b),(h===4||h===7)&&(Mn(e,c-a*2+l*2,d-s*2+u*2,2,ut.b),Mn(e,c-a*2-l*2,d-s*2-u*2,2,ut.b));else{const m=h-9>>1&1?ba:ut.y,p=h===9||h===14?1:2;for(let y=-p;y<=p;y++)Mn(e,c+l*y*2,d+u*y*2,2,m)}}f&2&&Mn(e,n+a*15,r+s*15+2,2,gh)};V.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=lt(e.uid),o=fp(t,n,r?r.team:void 0,!1,.9);T({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,a,s){const l=s.vid?lt(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}We(l?l.x:t,l?l.y:n,1.5);const f=ee,h=Kt,c=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=ot(11*c);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Ma(i,f,h,d,ut.d),Ma(i,f,h,d-2,ut.y),Ma(i,f,h,d-2,ut.o,h+d*.35),i.fillStyle=ut.w,i.fillRect(ot(f-d*.5),ot(h-d*.5),3,2),oc(i,f-4,h-4,f+4,h+4,2,ba),oc(i,f+4,h-4,f-4,h+4,2,ba);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,y=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const M=(x>0?0:Math.PI)+b*.28;Mn(i,f+Math.cos(M)*y,h+Math.sin(M)*y,2,ut.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,ic(i,f-4,h+d+m*22),ic(i,f+3,h+d+m*14)}}});for(let i=0;i<8;i++)E(t,n,.5,g(-2,2),g(-2,2),g(.6,1.8),g(.3,.5),i&1?ba:ut.y,2,6,!1,.9);for(let i=0;i<4;i++)E(t,n,.6,g(-.8,.8),g(-.8,.8),g(1,2),.5,gh,3,5,!0);at(2)};V.abeja_W=e=>{if(e.type==="heal"){vb(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(r-.3)*Jo(Lr(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*rn,f=s*(1+Math.sin(u*6+a*9+o)*.045);We(t+Math.cos(u)*f,n+Math.sin(u)*f),Mn(i,ee,Kt,5,ut.o),Mn(i,ee,Kt-2,3,ut.l),l%4===0&&(i.fillStyle=ut.d,i.fillRect(ot(ee-1),ot(Kt+2),2,ot(2+6*a)))}}}),T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=Lr(a/.6);for(let l=0;l<8;l++){const u=l/8*rn+o,f=r*(.6+.3*H(o+l))*s;We(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,ic(i,ee,Kt)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=ut.o,i.fillRect(ot(ee-5),ot(Kt-1),10,2),i.fillStyle=ut.l,i.fillRect(ot(ee-2),ot(Kt-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*rn;E(t,n,.8,Math.cos(a)*g(.5,2),Math.sin(a)*g(.5,2),g(.5,1.5),g(.5,.9),i%3?ut.l:ut.w,2,-.5,!0)}};function vb(e){const t=e.x,n=e.y,r=fp(t,n,e.team,!0,.6);T({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,a){const s=a.vid?lt(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;We(l,u,.55);const h=ee,c=Kt;We(l,u,2.6);const d=Kt,m=c-d;if(f>.15){We(l,u);const x=Lr((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=ut.o,Ha(o,ee,Kt,ot(16*x),.45),o.fillStyle=ut.l,o.fillRect(ot(ee-6*x),ot(Kt-3),ot(6*x),2)}const p=Lr(f/.15)*m,y=f>.45?Lr((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=ot(y);x<p;x+=3){const b=x/m*(x/m),M=Math.sin(x*.22-S.T*9)*6*b;o.fillStyle=ut.o,o.fillRect(ot(h+M-2),ot(d+x),4,3),o.fillStyle=ut.l,o.fillRect(ot(h+M-2),ot(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,yb(o,h+(x-1)*12,c-10-b*30,4,x&1?ut.y:ut.l))}}});for(let o=0;o<5;o++)E(t,n,.4,g(-.5,.5),g(-.5,.5),g(.8,1.6),g(.6,.9),o&1?ut.l:ut.w,2,-.5,!0)}const ls=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];V.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*rn+r);T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,h=Jo(Lr(f/.25)),c=f>1.15?Lr((f-1.15)/.5):0;We(t,n,.55*h-c*.4);const d=ee,m=Kt;l.globalAlpha=1-c;for(let p=0;p<ls.length;p++){const y=d+ls[p][0],x=m+ls[p][1]*h,b=8;Ma(l,y,x,b,ut.d),Ma(l,y,x,b-2,ut.cell);const M=Lr((f-.08-p*.04)/.3),v=a.indexOf(p)>=0&&f>o;!v&&M>0&&(Ma(l,y,x,b-2,ut.o,x+(b-2)-M*2*(b-2)),l.fillStyle=ut.l,l.fillRect(ot(y-3),ot(x-3),2,2)),!v&&f>.4&&a.indexOf(p)>=0&&(l.fillStyle=ut.y,l.fillRect(ot(y-4),ot(x-1),8,3))}}}),T({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){We(t,n,.55);const f=ee,h=Kt,c=(S.T*30|0)&1;for(let d=0;d<3;d++){const m=f+ls[a[d]][0],p=h+ls[a[d]][1];We(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const y=ee,x=Kt,b=_=>{const A=Math.sin(_*Math.PI);return[m+(y-m)*_+Math.cos(_*rn*1.5+d)*12*A,p+(x-p)*_+Math.sin(_*rn*1.5+d)*8*A-A*18]},M=Jo(u);for(let _=1;_<7;_++){const A=M-_*.04;if(A<0)break;const R=b(A);l.globalAlpha=(1-_/7)*.8,l.fillStyle=ut.l,l.fillRect(ot(R[0]),ot(R[1]),2,2)}const v=b(M),w=b(Math.max(0,M-.02));l.globalAlpha=u>.8?(1-u)/.2:1,bb(l,v[0],v[1],v[0]>=w[0]?1:-1,!!c)}}}),T({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<9;h++)E(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1,2),g(.4,.6),h%3?ut.y:ut.d,2,6,!1,.9)}}}),T({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<14;h++)E(t+g(-.3,.3),n+g(-.3,.3),g(.2,.7),g(-.6,.6),g(-.6,.6),g(0,.5),g(.5,.8),h%3?ut.d:ut.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)E(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(.3,1),.5,"#c8a878",3,3,!1,.9);at(2)};const Ns=new Map;V.abeja_R=e=>{e.type==="channel"?wb(e):e.type==="channel_tick"?_b(e):e.type==="channel_end"&&Ab(e)};function wb(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1},u=S.T,f={n:0};Ns.size>16&&Ns.clear(),Ns.set(r,l);const h=m=>{if(l.endT<0&&S.mode!=="guest"&&m.t>.1){const y=lt(r);(!y||!y.channel)&&(l.endT=S.T)}if(l.endT<0)return 1;const p=1-(S.T-l.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=Jo(Lr(b/.4)),v=s+b*.3;m.globalAlpha=x;for(let w=0;w<8;w++){const _=v+w/8*rn,A=Math.cos(_),R=Math.sin(_);for(let C=0;C<10;C++){const I=C/9,z=(.15+I*.95)*M,F=Math.sin(I*Math.PI)*.24*M;for(let U=-1;U<=1;U++)We(t+A*z-R*F*U,n+R*z+A*F*U),Mn(m,ee,Kt,6,U===0&&I<.8?ut.l:I>.85?ut.d:ut.y)}}We(t,n),m.fillStyle=ut.o,Ha(m,ee,Kt,ot(12*M),.5),m.fillStyle=zu,Ha(m,ee,Kt,ot(6*M),.5)}});const c=Sb(o,s);T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||(Ud(m,c,t,n,o,a,S.T-u,x,!1),S.T>=f.n&&(f.n=S.T+.1,St(t,n,o*1.05,16760896,.5*x,.22)))}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=Jo(Lr(b/.5)),v=b*.25;m.globalAlpha=.55*x;for(let C=0;C<56;C++){const I=C/56*rn+v;We(t+Math.cos(I)*o,n+Math.sin(I)*o),Mn(m,ee,Kt,C&1?2:3,C&1?ut.l:ut.y)}We(t,n);const w=ee,_=Kt,A=o*B.HW*Math.SQRT2,R=Math.sqrt(2*B.HH*B.HH*o*o+B.ZK*B.ZK*a*a*M*M);for(let C=0;C<=90;C++){const I=Math.PI+C/90*Math.PI,z=((C/90-b*.35)%1+1)%1,F=Math.max(0,1-Math.min(z,1-z)*7);m.globalAlpha=x*(.35+.6*F),Mn(m,w+Math.cos(I)*A,_+Math.sin(I)*R,F>.4?3:2,F>.4?ut.w:ut.y)}m.globalAlpha=x;for(let C=0;C<6;C++){const I=S.T*2.4+C/6*rn;We(t+Math.cos(I)*.7,n+Math.sin(I)*.7,.9+Math.sin(S.T*4+C)*.2),Mn(m,ee,Kt,2,C&1?ut.w:zu)}}});const d=26;T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i;if(!(b<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const w=H(M*3.7+s)*.65,_=Math.floor((b+w)/.65),A=(b+w)%.65/.65,R=H(M*13.1+_)*rn,C=Math.sqrt(H(M*5.3+_*1.7))*o*.9,I=t+Math.cos(R)*C,z=n+Math.sin(R)*C;if(A<.85)We(I,z,a*.92*Math.sqrt(Math.max(0,1-C/o*(C/o)))*(1-A/.85)),m.fillStyle=ut.o,m.fillRect(ot(ee-1),ot(Kt-2),2,4),m.fillStyle=ut.l,m.fillRect(ot(ee-1),ot(Kt-4),2,2);else{We(I,z);const F=(A-.85)/.15;m.fillStyle=ut.o,m.fillRect(ot(ee-2-F*4),ot(Kt),3,2),m.fillRect(ot(ee+F*4),ot(Kt),3,2)}}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||Ud(m,c,t,n,o,a,S.T-u,x,!0)}})}function Sb(e,t){const r=[],o=[],i=[],a=[],s=[],l=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*l,h=Math.max(5,ot(Math.max(16,e*5.6)*Math.cos(f)));for(let c=0;c<h;c++)r.push((c+(u&1)*.5)/h*rn),o.push(f),i.push(u),s.push(rn/h),a.push(.35+u*.42+H(t+c*7.1+u*13.3)*.45)}return{a:Float32Array.from(r),ph:Float32Array.from(o),row:Uint8Array.from(i),fill:Float32Array.from(a),da:Float32Array.from(s),dph:l,n:r.length}}const qi=new Float32Array(12);function Ud(e,t,n,r,o,i,a,s,l){const{HW:u,HH:f,ZK:h}=B,c=2*f/h,d=Math.sqrt(2+c*c);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let y=0;y<t.n;y++){const x=t.row[y],b=Jo(Lr((a-.05-x*.07)/.28));if(b<=.02)continue;const M=a>t.fill[y];if(m===0&&M||m===1&&!M)continue;const v=t.a[y],w=t.ph[y],_=Math.cos(v),A=Math.sin(v),R=Math.cos(w),C=Math.sin(w),I=_*R/o,z=A*R/o,F=C/i;if((I+z+c*F)/d>0!==l)continue;const U=n+_*R*o,G=r+A*R*o,Y=C*i,k=(U-G)*u+B.OX,L=(U+G)*f-Y*h,D=.5*.86*b,$=t.da[y]*R*o*D,W=t.dph*D*1.12,Z=(-A-_)*$*u,tt=(-A+_)*$*f,dt=-C*_*o,Lt=-C*A*o,Et=R*i,Te=(dt-Lt)*W*u,ge=((dt+Lt)*f-Et*h)*W;for(let Wt=0;Wt<6;Wt++){const an=Wt*Math.PI/3+Math.PI/6,pe=Math.cos(an),ko=Math.sin(an)*1.15;qi[Wt*2]=ot(k+pe*Z+ko*Te),qi[Wt*2+1]=ot(L+pe*tt+ko*ge)}e.moveTo(qi[0],qi[1]);for(let Wt=1;Wt<6;Wt++)e.lineTo(qi[Wt*2],qi[Wt*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=s*(l?.55:.5),e.fillStyle=zt(e,l?ut.l:ut.d,l?3:4),e.fill();else if(m===1){const y=.85+.15*Math.sin(a*5);e.globalAlpha=s*(l?.62:.55)*y,e.fillStyle=zt(e,l?ut.y:ut.o,l?7:9),e.fill()}else e.globalAlpha=s*(l?.95:.55),e.strokeStyle=l?ut.d:ut.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(l){e.globalAlpha=s*.9,e.fillStyle=ut.w;for(let m=0;m<t.n;m++){if(a<=t.fill[m]+.1)continue;const p=t.a[m],y=t.ph[m],x=Math.cos(p),b=Math.sin(p),M=Math.cos(y),v=Math.sin(y);(x*M/o+b*M/o+c*v/i)/d<=0||(We(n+x*M*o,r+b*M*o,v*i),e.fillRect(ot(ee-7),ot(Kt-6),3,2))}}}function _b(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;T({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(r-.4)*Jo(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const h=f/6*rn+Math.PI/6,c=(f+1)/6*rn+Math.PI/6;We(t+Math.cos(h)*u,n+Math.sin(h)*u);const d=ee,m=Kt;We(t+Math.cos(c)*u,n+Math.sin(c)*u),oc(s,d,m,ee,Kt,3,f&1?ut.y:ut.l)}}});const i=S.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>r*r)){if(s.team===o){if(s.kind==="hero")for(let l=0;l<2;l++)E(s.x+g(-.3,.3),s.y+g(-.3,.3),.5,0,0,g(1,1.6),.6,l?ut.l:ut.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;T({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,h){We(l,u),f.globalAlpha=.8*(1-h),f.fillStyle=ut.d,Ha(f,ee,Kt,13,.45),f.fillStyle=ut.o,Ha(f,ee-2,Kt-1,9,.45),f.fillStyle=ut.l,f.fillRect(ot(ee-5),ot(Kt-3),3,2),f.fillRect(ot(ee-8),ot(Kt-10+h*8),2,ot(8-h*6)),f.fillRect(ot(ee+7),ot(Kt-8+h*6),2,ot(6-h*4))}})}}}function Ab(e){const t=Ns.get(e.uid);t&&t.endT<0&&(t.endT=S.T),Ns.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*rn;E(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*g(2,3.5),Math.sin(i)*g(2,3.5),g(1.5,3),g(.6,.9),o&1?ut.y:ut.l,4,3,!0,.93)}for(let o=0;o<12;o++)E(n,r,.8,g(-1,1),g(-1,1),g(1,2.5),g(.5,.9),o&1?zu:ut.w,2,0,!0);T({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){We(n,r),o.globalAlpha=1-i,o.fillStyle=ut.l,Ha(o,ee,Kt,ot(20+i*90),.5)}}),at(3)}else{for(let o=0;o<10;o++){const i=o/10*rn;E(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,g(.2,.6),g(.7,1),o&1?Mb:ut.d,4,1.5,!1,.9)}st.sfx("deny",n,r,.35)}}Oe.abeja_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,y=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?ut.l:ut.y,e.fillRect(ot(n-a*p+l*y-1),ot(r-s*p+u*y-1),2,2)}e.globalAlpha=1;const h=Math.sin(i*20+f)*3,c=n+l*h,d=r+u*h;for(let m=0;m<8;m++){const p=m/8*rn+i*6;Mn(e,c+Math.cos(p)*5,d+Math.sin(p)*5,2,ut.o)}e.fillStyle=ut.y,e.fillRect(ot(c-3),ot(d-3),6,6),e.fillStyle=ut.w,e.fillRect(ot(c-2),ot(d-2),2,2)};Ge.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*rn;T({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,a){We(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(r?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const h=o+f/5*rn;Mn(i,ee+Math.cos(h)*l,Kt+Math.sin(h)*l*.8,r?5:4,f&1?ut.l:ut.y)}Mn(i,ee,Kt,r?5:4,r?zu:ut.o);const u=6+a*(r?26:18);for(let f=0;f<10;f++){const h=o+f/10*rn;Mn(i,ee+Math.cos(h)*u,Kt+Math.sin(h)*u*.5+6,2,ut.l)}}});for(let i=0;i<(r?8:4);i++)E(t,n,.5,g(-1,1),g(-1,1),g(.3,1.2),.4,i&1?ut.y:ut.w,2,2,!0)};const Qt=Math.round,yt={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function Rr(e,t,n,r,o){e.fillStyle=o,e.fillRect(Qt(t-r/2),Qt(n-r/2),r,r)}const Tb=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,of={};function Rb(e){if(of[e])return of[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return of[e]=t}function qa(e,t,n,r,o,i,a,s=1,l=1,u=!1){const f=Rb(r);for(let h=0;h<f.length;h++){if(u&&h%2)continue;const[c,d]=f[h];e.fillStyle=c+d>r*.6?a:i,e.fillRect(Qt(t+c*o*s-o/2),Qt(n+d*o*l-o/2),o,o)}u||(e.fillStyle=yt.white,e.fillRect(Qt(t-r*o*.45*s-o/2),Qt(n-r*o*.5*l-o/2),o,o))}function Cb(e,t,n,r,o,i,a=1,s=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(Qt(t-u*o*a),Qt(n+l*o*s-o/2),Qt(u*2*o*a),o)}}function Pb(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const Xd=["#.#","###",".#.",".#."];function Ib(e,t){T({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=4+Qt(r*5);n.globalAlpha=1-r,qa(n,o,i,a,2,yt.pink1,yt.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;Rr(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?yt.white:yt.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=g(0,6.283),o=g(1,2.5);E(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(1,2.5),.4,n<3?yt.water:yt.pink1,2,8,!1)}for(let n=0;n<3;n++)E(e,t,.5,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,n%2?yt.coral:yt.orange,3,10,!1)}V.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,h]=P(t,n,.55);l.globalAlpha=1-u;for(let c=0;c<3;c++){const d=s+(c-1)*.5,m=10+u*(22+c*6);qa(l,f+Math.cos(d)*m,h+Math.sin(d)*m-u*8,1+c%2,2,yt.pink2,yt.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)E(t+r*.4,n+o*.4,.5,r*g(1,2.5)+g(-.5,.5),o*g(1,2.5)+g(-.5,.5),g(.5,1.5),.35,l%2?yt.water:yt.pink1,2,6,!1);return!0};Oe.ajolote_Q=(e,t,n,r,o,i)=>{Pb(t,Ib);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,Cb(e,n,r,6,2,yt.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let c=0;c<Xd.length;c++)for(let d=0;d<3;d++)Xd[c][u?2-d:d]==="#"&&Rr(e,n-2+d*2,r-3+c*2,2,c<1?yt.orange:yt.coral);qa(e,n,r,6,2,yt.pink2,yt.coral2,s,l);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=18+c*8,m=Math.sin(i*12+c*2)*3;qa(e,n-f*d-h*m,r-h*d+f*m,2-(c>>1),2,yt.pink1,yt.pink2)}Math.random()<.35&&E(t.x,t.y,(t.z||.45)+.05,g(-.2,.2),g(-.2,.2),.6,.45,yt.pink1,2,-.5,!1)};function zb(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return T({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[a,s]=P(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const h=a+n[l][0],c=s+n[l][1]-u*6;if(u<f)qa(r,h,c,2,2,yt.pink2,yt.coral);else if(u<f+.3){const d=(u-f)/.3,m=Qt(c-d*14),p=Qt(h);r.globalAlpha=1-d,r.fillStyle=yt.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=yt.white;for(const[y,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+y*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}V.ajolote_W=e=>{if(e.type==="heal")return zb(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,a=[-.55,-.15,.25];T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const h=lt(o),[c,d]=P(h?h.x:t,h?h.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const b=y>0?a[x]:Math.PI-a[x],M=Math.sin(f*16+x*1.3)*.12,v=b+M*y,w=Math.cos(v),_=Math.sin(v),A=Qt(22*m)-(x===1?0:4);for(let R=6;R<=A;R+=2)Rr(u,c+w*R,d+_*R,2,R>A-2?yt.pink1:yt.gill),R%4===0&&R>8&&(Rr(u,c+w*R-_*3,d+_*R+w*3,2,yt.pink2),Rr(u,c+w*R+_*3,d+_*R-w*3,2,yt.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+g(-.12,.12));T({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let h=0;h<s.length;h++){const c=(f-h*.025)/.8;if(c<=0||c>=1)continue;const d=Math.sin(c*Math.PI),m=Qt(d*3)*2,[p,y]=P(t+Math.cos(s[h])*r,n+Math.sin(s[h])*r),x=Qt(p),b=Qt(y);u.fillStyle=yt.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=yt.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=yt.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=g(0,6.283),h=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*h,y:n+Math.sin(f)*h,n:1+u%3,t0:g(0,.35),pop:g(.4,.9),ph:g(0,6.283),done:!1})}return T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const h=f*i;for(const c of l){const d=h-c.t0;if(d<0)continue;const[m,p]=P(c.x,c.y,.1+Math.min(d,c.pop)*.9),y=m+Math.sin(d*9+c.ph)*3;if(d<c.pop){qa(u,y,p,c.n,2,yt.pink2,yt.coral);continue}c.done||(c.done=!0,E(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.8,.5,yt.pink1,2,0,!0),E(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.5,.4,yt.white,2,0,!0));const x=(d-c.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=c.n*2+2+x*6;for(const[M,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])Rr(u,y+M*b,p+v*b,2,yt.pink1);u.globalAlpha=1}}}),!0};function Ob(e,t,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)Rr(e,t-r*s,n-o*s,2,s>18?yt.coral2:yt.orange);for(let s=-6;s<=6;s+=2)Rr(e,t+i*s,n+a*s,2,yt.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)Rr(e,t+i*s+r*u,n+a*s+o*u,2,u>=l-1?yt.white:yt.pink1)}}V.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(r-t,o-n),l=(r-t)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,h=(l+u)*32,c=Math.hypot(f,h)||1,d=f/c,m=h/c,p=Math.max(2,Math.ceil(s/.1)),y={n:0,end:!1};return T({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const M=b*a,v=Math.min(1,M/i);for(let w=0;w<=p*v;w++){const _=w/p,A=M-_*i,R=Math.max(0,1-A/.55);if(R<=0)continue;const[C,I]=P(t+(r-t)*_,n+(o-n)*_),z=I+Math.sin(_*14-M*25)*2,F=Qt(4+6*_);x.globalAlpha=R,x.fillStyle=yt.pink2,x.fillRect(Qt(C)-F,Qt(z)-3,F*2,1),x.fillRect(Qt(C)-F,Qt(z)+2,F*2,1),x.fillStyle=yt.water,x.fillRect(Qt(C)-F,Qt(z)-2,F*2,4),w%3===0&&(x.fillStyle=yt.white,x.fillRect(Qt(C)-1,Qt(z)-1,3,2))}if(x.globalAlpha=1,v<1&&y.n<22)for(let w=0;w<2;w++){y.n++;const _=t+(r-t)*v,A=n+(o-n)*v;E(_,A,.2,-l*g(.5,1.5)+g(-.8,.8),-u*g(.5,1.5)+g(-.8,.8),g(1,2.5),.45,w?yt.water:yt.pink1,2,8,!1)}if(!y.end&&v>=1){y.end=!0;for(let w=0;w<10;w++)E(r+l*.4,o+u*.4,.4,l*g(1.5,3.5)+g(-.8,.8),u*g(1.5,3.5)+g(-.8,.8),g(1,3),.5,w%2?yt.water:yt.white,2,9,!1);at(4)}}}),T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const M=b*(i+.25),v=Math.min(1,M/i),[w,_]=P(t+(r-t)*v,n+(o-n)*v,.5);if(x.globalAlpha=v<1?1:Math.max(0,1-(M-i)/.25),Ob(x,w+d*10,_+m*10,d,m),v>=1){const A=(M-i)/.25,R=6+A*30;for(const C of[-6,0,6])for(let I=12;I<12+R;I+=2)Rr(x,w+d*(10+I)-m*C,_+m*(10+I)+d*C,2,I>8+R?yt.pink1:yt.white)}x.globalAlpha=1}}),!0};function Fb(e,t,n,r,o){const i=Qt(t),a=Qt(n),s=(H(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=Qt(u*s),h=u<r*.5?6:4;e.fillStyle=yt.coral,e.fillRect(i+f-h/2,a-u-2,h,2),e.fillStyle=yt.deep,e.fillRect(i+f+h/2-2,a-u-2,2,2)}const l=H(o+3)<.5?-1:1;for(const[u,f,h]of[[.35+H(o+1)*.15,.38,l],[.58+H(o+2)*.12,.28,-l]]){const c=r*u,d=i+Qt(c*s),m=r*f;let p=d,y=a-c;for(let x=0;x<m;x+=2)p=d+h*(3+x*.7),y=a-c-x,e.fillStyle=yt.coral2,e.fillRect(Qt(p)-2,Qt(y)-2,4,2);e.fillStyle=yt.pink1,e.fillRect(Qt(p)-2,Qt(y)-4,4,2)}e.fillStyle=yt.pink1,e.fillRect(i+Qt(r*s)-2,a-r-3,4,3)}V.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const h=f/l*6.283+s*.4+g(-.15,.15);i.push({x:t+Math.cos(h)*u,y:n+Math.sin(h)*u,d:.04+s*.13+g(0,.05),H:g(24,40)*(s?1:.85),seed:g(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[h,c]=P(f.x,f.y);s.fillStyle=yt.hole,s.fillRect(Qt(h)-6,Qt(c)-2,12,4),s.fillRect(Qt(h)-3,Qt(c)-3,6,6)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=Tb(l,.05,.6);for(let h=0;h<3;h++){const c=1+h*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[y,x]=P(t+Math.cos(p)*c,n+Math.sin(p)*c,.45);s.globalAlpha=f*(1-m),Rr(s,y,x,m<.15?3:2,m<.15?yt.white:h===1?yt.pink2:yt.water)}}s.globalAlpha=1}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,E(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,3.5),.5,Math.random()<.5?yt.coral:yt.orange,3,10,!1),E(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,4),.45,yt.water,2,10,!1));const h=a(f,u);if(h<2)continue;const[c,d]=P(f.x,f.y);Fb(s,c,d,Qt(h/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=g(0,6.283),u=g(2,5);E(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,g(3,6),g(.7,1),[yt.water,yt.pink1,yt.white,yt.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return at(9),!0};Ge.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=lt(e.uid);let i=1,a=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,a=m/p)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,h=l/u;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=P(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)Rr(d,p+f*M-h*b,y+h*M+f*b,2,M>x/2-4?yt.white:yt.pink2);d.globalAlpha=1}});const c=r?7:4;for(let d=0;d<c;d++)E(t,n,.45,i*g(.5,2)+g(-.7,.7),a*g(.5,2)+g(-.7,.7),g(1,2.5),.35,d%2?yt.pink1:yt.water,2,8,!1)};const It=Math.round,pt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function Bn(e,t,n,r,o){e.fillStyle=o,e.fillRect(It(t-r/2),It(n-r/2),r,r)}const ac=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Ou(e,t,n,r,o,i,a){const s=t.length,l=t[0].length,u=It(n-l*o/2),f=It(r-s*i/2);for(let h=0;h<s;h++)for(let c=0;c<l;c++){const d=a[t[h][c]];d&&(e.fillStyle=d,e.fillRect(u+c*o,f+h*i,o,i))}}function s0(e,t,n,r,o,i,a,s,l,u){const f=-o,h=r;for(let c=0;c<=i;c+=2){const d=c/i,m=t-r*c,p=n-o*c,y=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=y;x+=2){const b=x>y-2?s:l,M=x*.5;((c>>1)+(x>>1))%4!==3&&Bn(e,m+f*x-r*M,p+h*x-o*M,2,b),((c>>1)+(x>>1)+2)%4!==3&&Bn(e,m-f*x-r*M,p-h*x-o*M,2,b)}Bn(e,m,p,2,u)}}function Fu(e,t,n,r,o,i,a){const s=It(t),l=It(n);for(let u=0;u<r;u+=2){const f=Math.max(2,It(o*(1-u/r)/2)*2),h=It(u*i),c=a<0?l-u-2:l+u;e.fillStyle=pt.ice3,e.fillRect(s+h-f/2,c,f,2),e.fillStyle=pt.ice1,e.fillRect(s+h-f/2,c,Math.max(1,f/2),2)}e.fillStyle=pt.snow,e.fillRect(s+It(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function cp(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function Eb(e,t){T({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,h=s%2?4:6;for(let c=0;c<h;c+=2)Bn(n,o+u*(a+c),i+f*(a+c),2,c>=h-2?pt.snow:pt.ice2)}if(r<.35){const s=It(10*(1-r/.35))+2;n.fillStyle=pt.snow,n.fillRect(It(o)-s/2,It(i)-s/2,s,s)}n.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;s0(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,pt.ice3,pt.ice1,pt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=g(0,6.283),o=g(1.2,3);E(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(.5,2),.4,n%2?pt.ice2:pt.ice3,2,6,!1)}}V.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,h]=P(t,n,.6);l.globalAlpha=1-u;for(let c=0;c<5;c++){const d=s+(c-2)*.32,m=8+u*28,p=Math.cos(d),y=Math.sin(d);s0(l,f+p*m,h+y*m,p,y,10,3,pt.ice3,pt.ice1,pt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)E(t+r*.4,n+o*.4,.6,r*g(.5,1.5)+g(-.4,.4),o*g(.5,1.5)+g(-.4,.4),g(0,.6),.45,pt.snow,2,.5,!0);return!0};Oe.buho_Q=(e,t,n,r,o,i)=>{cp(t,Eb);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;vt(!0);const h=$t();for(let c=1;c<=5;c++)h.globalAlpha=.5-c*.08,Bn(h,n-a*c*6,r-s*c*6,8-c,c<3?pt.ice2:pt.ice3);h.globalAlpha=1,vt(!1),s0(e,u,f,a,s,24,6,pt.ice3,pt.ice1,pt.snow),Math.random()<.55&&E(t.x,t.y,t.z||.45,g(-.3,.3),g(-.3,.3),g(-.2,.3),.5,Math.random()<.5?pt.snow:pt.ice1,2,0,!0)};const kb=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],Lb=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];V.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=ac(l,.08,.75);ft(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(s,l){const u=ac(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const y=p/m*6.283+(d===r?f:-f),[x,b]=P(t+Math.cos(y)*d,n+Math.sin(y)*d);Bn(s,x,b,2,pt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,y]=P(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,Ou(s,kb[d%4],p,y,2,2,{"#":pt.ice1})}const[h,c]=P(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),Ou(s,Lb,h,c,3,2,{"#":pt.ice2,o:pt.amber,v:pt.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+g(-.3,.3),u=r*(.3+.55*Math.sqrt(H(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:g(16,28),lean:g(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const h of i){const c=Math.min(1,Math.max(0,(u-h.d)/.12));if(c<=0)continue;const[d,m]=P(h.x,h.y),p=h.h*c*(1-f);p<2||(Fu(s,d,m,p,8,h.lean,-1),Fu(s,d+h.side*6,m+2,p*.6,6,h.lean+h.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const h of i)for(let c=0;c<2;c++)E(h.x,h.y,.25,g(-1.5,1.5),g(-1.5,1.5),g(1,2.5),.45,c?pt.ice2:pt.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=g(0,6.283),u=g(0,r);E(t+Math.cos(l)*u,n+Math.sin(l)*u,g(.6,1.4),g(-.6,.6)+.8,g(-.6,.6)-.4,-.6,g(.6,1),Math.random()<.6?pt.snow:pt.ice1,2,-.5,!1,.98)}return!0};const hp=["......####","...#######","##########",".#########","..#.#.#.#."],Db=hp.map(e=>e.split("").reverse().join(""));V.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:g(-45,45),vy:g(-55,-15),ph:g(0,6.283),L:Math.random()<.4?12:9});T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=P(t,n,.6);a.globalAlpha=ac(s,.02,.55);for(const h of i){const c=Math.sin(l*6+h.ph),d=u+h.vx*l*(1-l*.5)+c*6,m=f+h.vy*l+60*l*l,p=Math.PI/2+c*.9;s0(a,d+Math.cos(p)*h.L*.5,m+Math.sin(p)*h.L*.5,Math.cos(p),Math.sin(p),h.L,3,pt.ice3,pt.ice1,pt.snow)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[h,c]=P(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=It(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=pt.ice1,a.fillRect(It(h)-d,It(c),d*2,1),a.fillRect(It(h),It(c)-d,1,d*2)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=P(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,Ou(a,hp,l+f+15,u-s*6,3,3,{"#":pt.ice1}),Ou(a,Db,l-f-15,u-s*6,3,3,{"#":pt.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)E(t+g(-.3,.3),n+g(-.3,.3),g(.3,.9),g(-.8,.8),g(-.8,.8),g(-.3,.4),g(.6,1),pt.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=g(0,6.283),l=g(1,2.5);E(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,g(0,1),.5,a%3?pt.ice1:pt.moon2,2,1,!0)}return!0};function Gd(e,t,n,r,o,i,a){e.fillStyle=a;const s=It(t),l=It(n),u=r*.82;for(let f=-r;f<r;f+=2){const h=Math.sqrt(Math.max(0,r*r-f*f)),c=u*u-f*f,d=-h,m=h;if(c<=0){e.fillRect(s+It(d),l+It(f*i),It(m-d),Math.max(1,It(2*i)));continue}const p=Math.sqrt(c),y=o-p,x=o+p;y>d&&e.fillRect(s+It(d),l+It(f*i),It(Math.min(m,y)-d),Math.max(1,It(2*i))),x<m&&e.fillRect(s+It(x),l+It(f*i),It(m-x),Math.max(1,It(2*i)))}}const us=[];function Nd(e,t,n){T({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=P(e+Math.cos(s)*i,t+Math.sin(s)*i);Bn(r,l,u,a%3?2:3,a%2?pt.ice2:pt.moon)}r.globalAlpha=1}}),T({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){ft(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),at(9)}const Zi=3,Bd=Zi-.3,$d=e=>(e=e-1,1+e*e*(2.4*e+1.4));function fs(e,t,n,r,o){if(!(r<1)){e.fillStyle=o;for(let i=-r;i<r;i+=2){const a=Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(It(t-a),It(n+i),It(a*2),2)}}}function Sl(e,t,n,r,o){if(r<2)return;const i=r/2;e.fillStyle=o;for(let a=-i;a<i;a+=2){const s=r*Math.sqrt(Math.max(0,1-(a+1)/i*((a+1)/i)));e.fillRect(It(t-s),It(n+a),It(s*2),2)}}V.buho_R=e=>{if(e.type==="starfall"){const p=us.findIndex(y=>Math.abs(y.x-e.x)<.3&&Math.abs(y.y-e.y)<.3);return p>=0?us.splice(p,1):Nd(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,a={x:t,y:n,t:0};us.push(a),us.length>6&&us.shift(),T({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.15)*(x>o?Math.max(0,1-(x-o)/.6):1);p.globalAlpha=b;for(const[w,_,A]of[[r,56,1],[r*.9,48,-1]])for(let R=0;R<_;R++){if((R+(A>0?0:2))%4===3)continue;const C=R/_*6.283+x*.7*A,[I,z]=P(t+Math.cos(C)*w,n+Math.sin(C)*w);Bn(p,I,z,2,A>0?pt.moon2:pt.ice2)}for(let w=0;w<12;w++){const _=w/12*6.283-x*.35,[A,R]=P(t+Math.cos(_)*r*.62,n+Math.sin(_)*r*.62),[C,I]=P(t+Math.cos(_)*r*.82,n+Math.sin(_)*r*.82);for(let z=0;z<=4;z++)Bn(p,A+(C-A)*z/4,R+(I-R)*z/4,2,pt.moon)}const[M,v]=P(t,n);if(Gd(p,M,v,30,12,.5,pt.moon),x>.45){const w=Math.min(1,(x-.45)/.1);p.globalAlpha=b*w,Bn(p,M-26,v-3,4,pt.amber),Bn(p,M+26,v-3,4,pt.amber)}p.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.2)*(x>o?Math.max(0,1-(x-o)/.5):1),[M,v]=P(t,n,Zi+1.7),w=p.createRadialGradient(M,v,4,M,v,60);w.addColorStop(0,`rgba(200,190,255,${.45*b})`),w.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=w,p.fillRect(It(M)-60,It(v)-60,120,120),p.globalAlpha=b,Gd(p,M,v,20,9,1,pt.moon),p.globalAlpha=1}});const s=Xi(e,o),l=()=>S.T-s.t0,u=Array.from({length:26},(p,y)=>{const x=g(0,6.283),b=Math.sqrt(Math.random())*r*.82,M=1-b/r;return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,z:Zi+g(0,.3)+M*.35,s:It(g(18,26)+M*16),dl:b/r*.25+y*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,y)=>p.x+p.y-(y.x+y.y)||p.z-y.z),f=Array.from({length:34},()=>{const p=g(0,6.283),y=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*y,y:n+Math.sin(p)*y,ph:Math.random(),sp:g(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),h=p=>p>0?0:Gs(-p/.35),c=(p,y,x)=>{for(const b of f){if(b.back!==y)continue;const M=(l()*b.sp+b.ph)%1,[v,w]=P(b.x+Math.sin(l()*2+b.ph*9)*.15,b.y,Zi*(1-M));p.globalAlpha=x*(y?.6:.9)*Math.min(1,(1-M)*5,M*8),Bn(p,v,w,2,pt.snow),p.fillStyle=pt.ice2,p.fillRect(It(v)-1,It(w)-4,1,2)}};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y,x){const b=zn(s),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=Math.min(1,l()/.3)*(1-M),[w,_]=P(t,n),A=r*B.HW*Math.SQRT2*.92;p.globalAlpha=.5*v,p.fillStyle=zt(p,pt.night,8);for(let R=-A/2;R<A/2;R+=2){const C=A*Math.sqrt(Math.max(0,1-(2*(R+1)/A)**2));p.fillRect(It(w-C),It(_+R),It(C*2),2)}c(p,!0,v),Eo(s,t,n,r*1.05,10937599,.5*v)}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y,x){const b=zn(s),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=l(),w=1-M;c(p,!1,w*Math.min(1,v/.3));const _=$d(Gs(v/.35)),[A,R]=P(t,n,Zi+M*.3),C=It(r*.8*B.HW*Math.SQRT2*_*(1+M*.3));for(let I=0;I<4;I++){p.globalAlpha=w*(I===0?.8:.96),I===0?Sl(p,A+3,R+8,C,zt(p,pt.ice3,12)):I===1?(Sl(p,A,R,C+2,zt(p,pt.ice2,10)),Sl(p,A,R,C-2,pt.ice2)):I===2&&Sl(p,A-2,R-6,C-10,pt.ice1);for(const z of u){const F=$d(Gs((v-z.dl)/.3));if(F<=.02)continue;const[U,G]=P(z.x+z.dx*M*1.2,z.y+z.dy*M*1.2,z.z+M*.4),Y=It(z.s*F*(1+M*.3));I===0?fs(p,U+2,G+5,Y,zt(p,pt.ice3,12)):I===1?(fs(p,U,G,Y+1,zt(p,pt.ice2,10)),fs(p,U,G,Y-2,pt.ice2)):I===2?fs(p,U-1,G-Y*.22,It(Y*.8),pt.ice1):z.z>Zi+.42&&fs(p,U-Y*.25,G-Y*.5,It(Y*.32),pt.snow)}}}});const d=[];for(let p=0;p<14;p++){const y=g(0,6.283),x=r*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(y)*x,y:n+Math.sin(y)*x,fall:o-.12+p*.025,ap:.08+p*.025,L:g(18,28),hit:!1})}d.sort((p,y)=>p.x+p.y-(y.x+y.y));const m={boom:!1};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(const b of d){const M=(x-b.fall)/.12;if(M>=1){if(!b.hit){b.hit=!0;for(let C=0;C<3;C++)E(b.x,b.y,.1,g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),.45,C?pt.ice2:pt.snow,2,10,!0)}const R=(x-b.fall-.12)/.2;if(R<1){const[C,I]=P(b.x,b.y),z=It(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=pt.snow,p.fillRect(It(C)-z,It(I)-1,z*2,2),p.fillRect(It(C)-1,It(I)-z/2,2,z),p.globalAlpha=1}continue}const v=Math.min(1,Math.max(0,(x-b.ap)/.25));if(v<=0)continue;const w=M>0?Bd*(1-M*M):Bd+Math.sin(x*9+b.x)*.03,[_,A]=P(b.x,b.y,w);p.globalAlpha=v,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(It(_)-1,It(A)-b.L-30,2,28)),Fu(p,_,A-b.L,b.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=o&&(m.boom=!0,a.t===0&&(a.t=1,Nd(t,n,r)))}});for(let p=0;p<10;p++){const y=g(0,6.283),x=g(0,r);E(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1,2),.7,p%2?pt.moon2:pt.ice1,2,0,!0)}return!0};function dp(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:g(-9,9),oy:g(-3,4),h:g(8,n?16:12),lean:g(-.35,.35)});T({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=P(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)Fu(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=g(0,6.283),s=g(.8,2);E(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,g(.5,1.8),.35,i%2?pt.snow:pt.ice2,2,5,!0)}}const mp=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&mp.push([t,e,n>3.6?1:0])}Oe.buho_A=(e,t,n,r,o,i)=>{cp(t,(c,d)=>dp(c,d,!1));const a=Math.cos(o),s=Math.sin(o);vt(!0);const l=$t();for(let c=1;c<=4;c++)l.globalAlpha=.45-c*.09,Bn(l,n-a*c*5,r-s*c*5,6-c,pt.moon2);l.globalAlpha=1,vt(!1);const u=i*13,f=Math.cos(u),h=Math.sin(u);for(const[c,d,m]of mp)Bn(e,n+(c*f-d*h)*2,r+(c*h+d*f)*2,3,m?pt.ice3:pt.ice1);Bn(e,n+-3*f*2,r+-3*h*2,2,pt.snow),Math.random()<.45&&E(t.x,t.y,t.z||.45,0,0,-.2,.35,pt.ice1,2,0,!0)};Ge.buho=e=>dp(e.x,e.y,!!e.big);const N=Math.round,Vt=Math.PI*2;let Tt=0,Ct=0;function Zt(e,t,n=0){Tt=(e-t)*B.HW+B.OX,Ct=(e+t)*B.HH-n*B.ZK}function ke(e,t,n,r,o){e.fillStyle=o,e.fillRect(N(t-r/2),N(n-r/2),r,r)}function xh(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(N(t+(r-t)*l/s-i/2),N(n+(o-n)*l/s-i/2),i,i)}function ti(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(N(t-a/2),N(n+i*o),N(a),Math.max(1,N(2*o)))}}const bn=e=>e<0?0:e>1?1:e,In=e=>1-(1-e)*(1-e),Ub=()=>B.HW*Math.SQRT2,gt={w:"#f4fdff",l:"#c4f6ff",m:"#6ee2f4",d:"#2aa6c8",k:"#16608a",x:"#0c3450"},Ce={w:"#fbf4e2",l:"#e6d6b0",m:"#bca67a",d:"#7a6646"},Cr={l:"#ffd890",m:"#f0a040",d:"#b0581e"},ce={l:"#d6cfc0",m:"#a49c8a",d:"#746c5c",k:"#4a443a",x:"#2e2a24"},va=["#8ac050","#5a8a34"],En={w:"#eef4d8",l:"#d8d070",m:"#a8a030",d:"#6a6a20",k:"#2e3018",eye:"#d0402a"},on={k:"#120c08",d:"#2a1c12",m:"#4a3220",l:"#7a5a3a"},cr=7267060,l0=15769664;Cn.spirit_bolt=[gt.w,gt.l,gt.m,gt.d];Cn.spirit=[gt.w,gt.l,gt.m,gt.d];Cn.swarm=[En.w,En.l,En.m,En.d];Cn.behemoth=[Ce.w,gt.l,gt.m,Cr.m];const u0={Q:4,W:2,E:10},ia=new Map;function pp(e){const t=window.SIM&&window.SIM.HEROES,n=t&&t.cabra;return n&&n.abil?n.abil[e]:null}function Mh(e,t){const n=S.game;if(!n||!n.units)return[];const r=pp(t),o=r&&r.petSprite,i=r&&r.count||u0[t],a=[];for(const l of n.units){if(l.dead||!l.pet||l.illusion||ia.has(l.id)||e.team&&l.team!==e.team||l.owner&&e.uid&&l.owner.id!==e.uid)continue;const u=Math.hypot(l.x-e.x,l.y-e.y);u>2.4||a.push([o&&l.sprite===o?0:1,u,l.id])}a.sort((l,u)=>l[0]-u[0]||l[1]-u[1]);const s=a.slice(0,i).map(l=>l[2]);ia.size>300&&ia.clear();for(const l of s)ia.set(l,t);return s}function bh(e,t,n,r,o){const i=[];for(const a of e){const s=lt(a);s&&i.push([s.x,s.y])}for(let a=i.length;a<n;a++){const s=a/n*Vt+o;i.push([t.x+Math.cos(s)*r,t.y+Math.sin(s)*r])}return i}function yp(e,t,n,r){T({type:"custom",layer:"ground",dur:t*1.3+2,x:0,y:0,nt:0,draw(o,i,a){const s=lt(e);if(!s||s.dead){a.t=a.dur+1;return}S.T>=a.nt&&(a.nt=S.T+n,r(s))}})}function sc(e,t,n,r,o,i){for(let a=0;a<o;a+=2){const s=a/o,l=r*Math.pow(1-s,.8)*(s<.2?.6+s*2:1),u=Math.sin(s*5+i)*s*r*.6;l<.6||(e.fillStyle=gt.d,e.fillRect(N(t+u-l),N(n-a-2),Math.max(1,N(l*2)),2),l>1.5&&(e.fillStyle=gt.m,e.fillRect(N(t+u-l*.62),N(n-a-2),Math.max(1,N(l*1.24)),2)),s<.6&&l>2&&(e.fillStyle=gt.l,e.fillRect(N(t+u-l*.3),N(n-a-2),Math.max(1,N(l*.6)),2)),s<.3&&l>2.5&&(e.fillStyle=gt.w,e.fillRect(N(t+u-1),N(n-a-2),2,2)))}}function gp(e,t,n,r,o,i,a,s){for(const f of[-1,1]){const h=f*.42,c=-.12;for(let d=0;d<26*o;d++){const m=Math.PI+d/26*Vt,p=.36*(1-d/26*.75),y=h+f*Math.cos(m)*p,x=c+Math.sin(m)*p;ke(e,t+y*r,n+x*r*.5,d<26*.6?i+1:i,d<26*.6?a:s)}}const u=bn(o*1.6-.3);for(let f=0;f<=8*u;f++)ke(e,t,n+(-.2+f*.07)*r*.5,i,a);u>.9&&(ke(e,t-.12*r,n+.05*r*.5,i,s),ke(e,t+.12*r,n+.05*r*.5,i,s))}const Wd=[3735,3050,1493,3315,2457,1910,3879,756];function vh(e,t,n,r,o,i){const a=Wd[r%Wd.length];e.fillStyle=i;for(let s=0;s<12;s++)a>>s&1&&e.fillRect(N(t+(s%3-1)*o-o/2),N(n+((s/3|0)-1.5)*o-o/2),o,o)}function xp(e,t,n,r,o,i,a,s){Zt(t,n);const l=Tt,u=Ct,f=ye(r),h=f*.5,c=72,d=54;e.globalAlpha=a;for(let m=0;m<c;m++){const p=m/c;if(p>o)break;const y=p*Vt+i;ke(e,l+Math.cos(y)*f,u+Math.sin(y)*h,3,m%9===0?gt.w:gt.m)}for(let m=0;m<d;m++){const p=m/d;if(p>o)break;const y=-p*Vt-i*.6;ke(e,l+Math.cos(y)*f*.76,u+Math.sin(y)*h*.76,2,Cr.m)}for(let m=0;m<12;m++){const p=m/12;if(p>o)break;const y=p*Vt+i*.5,x=l+Math.cos(y)*f*.88,b=u+Math.sin(y)*h*.88;e.globalAlpha=a*(.6+.4*s*(.5+.5*Math.sin(S.T*6+m))),vh(e,x,b,m,2,m&1?gt.l:Ce.w)}e.globalAlpha=a*.9,gp(e,l,u,f*.62,o,2,gt.l,Cr.l)}function Eu(e,t,n,r,o,i,a,s=0){Zt(t,n);const l=Tt,u=Ct,f=ye(r),h=f*.5;for(let c=0;c<o;c++){const d=c/o*Vt+s;ke(e,l+Math.cos(d)*f,u+Math.sin(d)*h,i,a)}}function Js(e,t,n,r,o,i,a,s){let l=t,u=n;Zt(l,u);let f=Tt,h=Ct;for(let c=1;c<=4;c++){const d=r+(H(i+c*3.1)-.5)*.9,m=o/4;l+=Math.cos(d)*m,u+=Math.sin(d)*m,Zt(l,u),xh(e,f,h,Tt,Ct,Math.max(1,a-(c>2?1:0)),s),f=Tt,h=Ct}}V.cabra_Q=e=>{const t=e.x,n=e.y,r=e.dur||10,o=Math.random()*Vt,i=Mh(e,"Q"),a=bh(i,e,u0.Q,.85,o);T({type:"custom",layer:"ground",add:!0,dur:1,x:t,y:n,draw(f,h){Zt(t,n);const c=Tt,d=Ct;f.globalAlpha=h>.6?(1-h)/.4:1,gp(f,c,d,Ub()*1.5,In(bn(h/.35)),2,gt.m,gt.l),Eu(f,t,n,1.15,30,2,gt.d,h*2)}});const s=16,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=Math.random()*Vt,u[f]=g(.2,1.6);T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(f,h){const c=In(h);for(let d=0;d<s;d++){const m=a[d%a.length];for(let p=0;p<3;p++){const y=Math.max(0,c-p*.06),x=l[d]+y*2.4,b=2.2*(1-y);Zt(m[0]+Math.cos(x)*b,m[1]+Math.sin(x)*b,.45+u[d]*(1-y)),f.globalAlpha=(1-p/3)*(h>.85?(1-h)/.15:1),ke(f,Tt,Ct,p?2:3,p?gt.m:gt.w)}}}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(f,h){for(let c=0;c<a.length;c++){const d=bn((h-c*.06)/.85);if(d<=0||d>=1)continue;const m=i[c]?lt(i[c]):null,p=m?m.x:a[c][0],y=m?m.y:a[c][1];Zt(p,y,.05);const x=Tt,b=Ct;if(d<.45){const M=d/.45;f.globalAlpha=1,sc(f,x,b,6+4*M,N(14+46*M),S.T*14+c)}else{const M=(d-.45)/.55;f.globalAlpha=1-M,sc(f,x,b-30*M,7*(1-M)+2,N(40*(1-M)+6),S.T*14+c)}if(d>.4){const M=(d-.4)/.6;f.globalAlpha=1-M,Eu(f,p,y,.2+M*.55,14,2,c&1?gt.l:gt.w,c)}}}});for(let f=0;f<a.length;f++){const h=a[f];for(let c=0;c<5;c++)E(h[0],h[1],.3,g(-.8,.8),g(-.8,.8),g(1,2.4),g(.4,.7),c&1?gt.l:gt.w,2,-.6,!0);St(h[0],h[1],1.2,cr,.8,.6)}St(t,n,2.4,cr,.7,.8);for(const f of i)yp(f,r,.1,h=>{St(h.x,h.y,1.3,cr,.42+.12*Math.sin(S.T*9+f),.22),Math.random()<.3&&E(h.x+g(-.15,.15),h.y+g(-.15,.15),.55,0,0,g(.6,1.1),.6,Math.random()<.5?gt.l:gt.m,2,-.3,!0)});at(1.5)};function Xb(e){const t=e.x,n=e.y,r=Math.random()*Vt;T({type:"custom",layer:"top",add:!0,dur:1,x:t,y:n,draw(o,i){const a=i*1;Zt(t,n,.15);const s=Tt,l=Ct;if(a<.4){const u=a/.4;((S.T*24|0)%3!==0||u<.3)&&(o.globalAlpha=1-u*.5,sc(o,s,l,7*(1-u)+2,N(34*(1-u)+8),S.T*16))}if(a>.2){const u=(a-.2)/.8;for(let f=0;f<10;f++){const h=r+f/10*Vt+u*5,c=.12+u*.45*(.6+.4*H(f+r)),d=.4+u*(1.4+H(f*3+r)*.8);Zt(t+Math.cos(h)*c,n+Math.sin(h)*c,d),o.globalAlpha=(1-u)*(f&1?.8:1),ke(o,Tt,Ct,f%3===0?3:2,f%3===0?gt.w:gt.m)}}a<.3&&(o.globalAlpha=1-a/.3,Eu(o,t,n,.15+a*1.2,12,2,gt.l,r))}}),St(t,n,1.1,cr,.6,.5)}V.cabra_W=e=>{const t=Math.random()*99,n=e.dur||12,r=Mh(e,"W"),o=bh(r,e,u0.W,.8,t);for(let i=0;i<o.length;i++){const[a,s]=o[i],l=t+i*17,u=i*.06,f=7,h=new Float32Array(f),c=new Float32Array(f);for(let v=0;v<f;v++)h[v]=v/f*Vt+H(l+v)*.6,c[v]=.6+H(l+v*7)*.5;T({type:"custom",layer:"ground",dur:2.2,delay:u,x:a,y:s,draw(v,w){const _=w*2.2,A=In(bn(_/.14));v.globalAlpha=_>1.6?(2.2-_)/.6:1;for(let z=0;z<f;z++)Js(v,a,s,h[z],c[z]*A,l+z*11,3,ce.x);if(_<1.2){v.globalAlpha=(1-_/1.2)*.95;for(let z=0;z<f;z++)Js(v,a,s,h[z],c[z]*A*.85,l+z*11,1,z&1?gt.m:Cr.m)}const R=bn((_-.1)/.25);if(R<=0)return;v.globalAlpha=(_>1.2?Math.max(0,(2.2-_)/1):1)*.9;const C=.62*R,I=[[C,0],[0,C],[-C,0],[0,-C]];for(let z=0;z<4;z++){Zt(a+I[z][0],s+I[z][1]);const F=Tt,U=Ct;Zt(a+I[(z+1)%4][0],s+I[(z+1)%4][1]),xh(v,F,U,Tt,Ct,2,gt.d),vh(v,F,U,z+i*4,2,gt.l)}}}),T({type:"custom",layer:"ground",dur:.32,delay:u,x:a,y:s,draw(v,w){Zt(a,s);const _=Tt,A=Ct,R=Math.sin(Math.min(1,w*1.6)*Math.PI)*14,C=N(ye(.55)*(.7+.3*w));v.globalAlpha=1-w*w,v.fillStyle=on.d,ti(v,_,A,C,.5);for(let I=0;I<R;I+=2){const z=C*Math.sqrt(1-I/(R+1)*(I/(R+1)))*.9;v.fillStyle=I>R-4?on.l:on.m,v.fillRect(N(_-z),N(A-I),N(z*2),2)}}});const d=10,m=new Float32Array(d),p=new Float32Array(d),y=new Float32Array(d);for(let v=0;v<d;v++)m[v]=v/d*Vt+H(l+v*5)*.8,p[v]=.9+H(l+v*9)*1.4,y[v]=3.2+H(l+v*13)*2.2;T({type:"custom",layer:"top",dur:1.2,delay:u,x:a,y:s,draw(v,w){const _=w*1.2;for(let A=0;A<d;A++){const R=Math.min(_,y[A]/6),C=Math.max(0,y[A]*R-6*R*R),I=p[A]*R;Zt(a+Math.cos(m[A])*I,s+Math.sin(m[A])*I,C+.05);const z=A%3===0,F=(_*14+A|0)&1,U=(F?13:9)+(z?4:0),G=(F?8:12)+(z?2:0);v.globalAlpha=_>.85?(1.2-_)/.35:1,v.fillStyle=ce.k,v.fillRect(N(Tt-U/2-1),N(Ct-G/2-1),U+2,G+2),v.fillStyle=ce.m,v.fillRect(N(Tt-U/2),N(Ct-G/2),U,G),v.fillStyle=ce.l,v.fillRect(N(Tt-U/2),N(Ct-G/2),U,3),v.fillStyle=ce.d,v.fillRect(N(Tt+U/2-3),N(Ct-G/2+3),3,G-3),A%3===0&&(v.fillStyle=va[0],v.fillRect(N(Tt-U/2),N(Ct-G/2),5,3),v.fillStyle=va[1],v.fillRect(N(Tt-U/2),N(Ct-G/2+3),3,2)),A%4===1&&_<.6&&(v.fillStyle=gt.l,v.fillRect(N(Tt-1),N(Ct),3,2))}}});const x=12,b=new Float32Array(x),M=new Float32Array(x);for(let v=0;v<x;v++)b[v]=v/x*Vt+H(l+v*2.3)*.5,M[v]=.7+H(l+v*4.1)*.6;T({type:"custom",layer:"top",dur:.8,delay:u,x:a,y:s,draw(v,w){const _=In(w);for(let A=0;A<x;A++){const R=(.25+1*_)*M[A];Zt(a+Math.cos(b[A])*R,s+Math.sin(b[A])*R,.1+w*.35*M[A]);const C=N((11-w*6)*M[A]);v.globalAlpha=(1-w)*.55,v.fillStyle=A&1?Ce.m:ce.m,v.fillRect(N(Tt-C/2),N(Ct-C/2),C,N(C*.7)),v.fillStyle=Ce.l,v.fillRect(N(Tt-C/2),N(Ct-C/2),N(C*.5),2),v.fillStyle=ce.d,v.fillRect(N(Tt-C/2),N(Ct+C*.2),C,2)}}});for(let v=0;v<12;v++){const w=Math.random()*Vt;E(a,s,.2,Math.cos(w)*g(.6,2),Math.sin(w)*g(.6,2),g(2,4),g(.5,.8),v%4===0?va[v&1]:v&1?ce.m:ce.d,3,10,!1,.95)}St(a,s,1.6,l0,.55,.5),St(a,s,1.2,cr,.5,1)}for(const i of r)yp(i,n,.12,a=>St(a.x,a.y,1,cr,.22,.26));at(5)};function Gb(e){const t=e.x,n=e.y,r=Math.random()*99,o=10,i=new Float32Array(o),a=new Float32Array(o),s=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o);for(let f=0;f<o;f++)i[f]=g(-.22,.22),a[f]=g(-.22,.22),s[f]=g(.15,1),l[f]=g(.4,1.2),u[f]=Math.random()*Vt;T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(f,h){const c=h*1;for(let d=0;d<o;d++){const m=Math.sqrt(2*s[d]/9);let p;if(c<m)p=s[d]-4.5*c*c;else{const b=9*m*.35,M=c-m;p=Math.max(0,b*M-4.5*M*M)}const y=l[d]*Math.min(c,m*1.8)*.5;Zt(t+i[d]+Math.cos(u[d])*y,n+a[d]+Math.sin(u[d])*y,p);const x=d<4?7:5;f.globalAlpha=c>.75?(1-c)/.25:1,f.fillStyle=ce.k,f.fillRect(N(Tt-x/2-1),N(Ct-x/2-1),x+2,x+2),f.fillStyle=d&1?ce.m:ce.d,f.fillRect(N(Tt-x/2),N(Ct-x/2),x,x),f.fillStyle=ce.l,f.fillRect(N(Tt-x/2),N(Ct-x/2),x-2,2)}if(c<.3){Zt(t,n,.6),f.globalAlpha=1-c/.3;const d=N(8*(1-c/.3))+2;ke(f,Tt,Ct,d,gt.l)}}}),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(f,h){Zt(t,n);const c=Tt,d=Ct,m=bn((h-.45)/.55);f.globalAlpha=1-m,f.fillStyle=ce.k,ti(f,c,d+2,18,.45);for(let p=0;p<9;p++){const y=H(r+p)*Vt,x=H(r+p*3)*14,b=c+Math.cos(y)*x,M=d+Math.sin(y)*x*.45-3+m*4;f.fillStyle=p&1?ce.m:ce.d,f.fillRect(N(b-3),N(M-2),6,4),f.fillStyle=ce.l,f.fillRect(N(b-3),N(M-2),3,1)}}}),T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(f,h){for(let c=0;c<6;c++){const d=r+c/6*Vt;Zt(t+Math.cos(d)*(.2+h*.6),n+Math.sin(d)*(.2+h*.6),.2+h*.4),f.globalAlpha=(1-h)*.6,ke(f,Tt,Ct,N(12-h*8),c&1?ce.l:Ce.l)}}});for(let f=0;f<8;f++)E(t+g(-.2,.2),n+g(-.2,.2),g(.3,.9),g(-1,1),g(-1,1),g(.5,1.5),g(.5,.8),f&1?ce.m:va[1],2,9,!1,.95);at(1.5)}function Mp(e,t,n,r,o){const i=(a,s,l,u,f)=>{e.fillStyle=f,e.fillRect(N(t+(r>0?a:-a-l)*2),N(n+s*2),l*2,u*2)};o&&(i(-3,-5,4,3,En.w),i(-1,-4,3,2,En.w)),i(-5,-1,2,2,En.d),i(-3,-1,5,2,En.m),i(-3,-1,4,1,En.l),i(2,-2,2,3,En.d),i(3,-2,1,1,En.eye),i(-2,1,1,2,En.k),i(-4,2,2,1,En.k),i(1,1,1,1,En.k),o||i(-5,-2,6,1,En.w)}V.cabra_E=e=>{const t=e.x,n=e.y,r=Math.random()*Vt,o=Math.cos(r),i=Math.sin(r),a=Mh(e,"E"),s=bh(a,e,u0.E,.9,r),l=.85,u=1.6;T({type:"custom",layer:"ground",dur:u,x:t,y:n,draw(m,p){const y=p*u,x=y<.15?In(y/.15):y>1.2?1-bn((y-1.2)/.4):1;if(x<=0)return;m.globalAlpha=1;const b=16,M=-i,v=o,w=(A,R,C)=>{const I=C/b*2-1,z=1+(H(C*1.7+r+R)-.5)*.8,F=.26*(1-I*I)*z*x*A;Zt(t+o*I*l*(.75+.25*A)+M*F*R,n+i*I*l*(.75+.25*A)+v*F*R)},_=(A,R)=>{m.beginPath(),w(A,1,0),m.moveTo(N(Tt),N(Ct));for(let C=1;C<=b;C++)w(A,1,C),m.lineTo(N(Tt),N(Ct));for(let C=b-1;C>=0;C--)w(A,-1,C),m.lineTo(N(Tt),N(Ct));m.closePath(),m.fillStyle=R,m.fill()};_(1.55,on.l),_(1.25,on.m),_(1,on.k),_(.42,Cr.d),_(.18,Cr.m);for(let A=1;A<b;A+=3)for(const R of[-1,1])w(1.7,R,A),m.fillStyle=A&1?on.m:on.l,m.fillRect(N(Tt-3),N(Ct-3),6,4),m.fillStyle=on.d,m.fillRect(N(Tt-3),N(Ct+1),6,2)}}),T({type:"custom",layer:"ground",add:!0,dur:1.3,x:t,y:n,draw(m,p){Zt(t,n),m.globalAlpha=(1-p)*(.6+.4*Math.sin(S.T*20)),m.fillStyle=Cr.m,ti(m,Tt,Ct,N(10+6*p),.4)}});const f=18,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let m=0;m<f;m++)h[m]=m*.025+g(0,.02),c[m]=g(1,2),d[m]=g(-.7,.7);T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(m,p){const y=p*1.15,x=S.T*28|0;for(let b=0;b<f;b++){const M=bn((y-h[b])/.6);if(M<=0||M>=1&&y-h[b]>.72)continue;const v=s[b%s.length],w=t+o*d[b]*l,_=n+i*d[b]*l,A=In(M),R=Math.sin(M*14+b)*.12*(1-M),C=w+(v[0]-w)*A+R,I=_+(v[1]-_)*A-R,z=Math.sin(M*Math.PI)*c[b]+.35*M;Zt(C,I,z);const F=Tt,U=Ct;Zt(w+(v[0]-w)*Math.max(0,A-.05),_+(v[1]-_)*Math.max(0,A-.05),Math.sin(Math.max(0,M-.05)*Math.PI)*c[b]);const G=F>=Tt?1:-1;m.globalAlpha=M>=1?1-(y-h[b]-.6)/.12:1,M<.9&&(m.fillStyle=on.m,m.fillRect(N(Tt-1),N(Ct-1),2,2)),Mp(m,F,U,G,(x+b&1)===1)}}});for(let m=0;m<12;m++)E(t+o*g(-.6,.6),n+i*g(-.6,.6),.1,g(-1.4,1.4),g(-1.4,1.4),g(1.5,3.2),g(.4,.7),m%3?on.m:on.l,3,9,!1,.94);for(let m=0;m<6;m++)E(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1.2),g(.3,.5),Cr.l,2,2,!0);St(t,n,1.6,l0,.7,1.2),at(2)};function Nb(e){const t=e.x,n=e.y,r=3,o=Math.random()*Vt,i=new Float32Array(r),a=new Float32Array(r);for(let s=0;s<r;s++)i[s]=o+s/r*Vt+g(-.5,.5),a[s]=g(1.6,2.6);T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(s,l){const u=S.T*30|0;for(let f=0;f<r;f++){const h=l*l,c=a[f]*h+Math.sin(l*12+f)*.05;Zt(t+Math.cos(i[f])*c,n+Math.sin(i[f])*c,.35+l*1.8+Math.sin(l*20+f*2)*.06),s.globalAlpha=l>.65?(1-l)/.35:1,Mp(s,Tt,Ct,Math.cos(i[f])-Math.sin(i[f])>=0?1:-1,(u+f&1)===1)}}}),E(t,n,.3,g(-.6,.6),g(-.6,.6),g(.8,1.5),.4,En.d,2,6,!1,.94)}const lc=4.6,Hd=[1,.85,.65,.45,.28,.14];let qd=null,Vd=null,Yd=[],jd=[];function Bb(e){return qd!==e&&(qd=e,Yd=[{u0:0,fill:zt(e,gt.k,6),a:.6},{u0:.6,fill:zt(e,gt.d,8),a:.65},{u0:.88,fill:zt(e,gt.m,11),a:.75}]),Yd}function $b(e){return Vd!==e&&(Vd=e,jd=[{u0:0,fill:zt(e,gt.l,3),a:.55},{u0:.6,fill:zt(e,gt.m,5),a:.6},{u0:.88,fill:zt(e,gt.w,10),a:.8}]),jd}function Kd(e,t,n,r,o,i,a){for(let s=0;s<10;s++){const l=s/10*Vt+a*.8,u=Math.cos(l),f=Math.sin(l);if(u+f>0!==i)continue;const h=(a*1.3+H(s*3.3))%1*lc;Zt(t+u*r,n+f*r,h),e.globalAlpha=o*(1-h/lc)*(i?1:.6),vh(e,Tt,Ct,s,2,s&1?Ce.w:gt.w)}}V.cabra_R=e=>{const t=e.x,n=e.y,r=1.5,o=e.radius||3.4,i=.2,a=Math.random()*99;e.uid&&wh(e.uid);const s=S.T,l=()=>S.T-s,u=y=>y<.12?r*.95*In(y/.12):r*.95*Math.max(0,1-(y-.12)/1.5)**1.4,f=y=>y<.05?y/.05:y>1.2?Math.max(0,1-(y-1.2)/.42):1,h=y=>lc*In(bn(y/.16));T({type:"custom",layer:"ground",add:!0,dur:3.4,x:t,y:n,draw(y,x){const b=x*3.4,M=b>2.4?3.4-b:1;xp(y,t,n,r,In(bn(b/.25)),b*.35+a,M,b<1.4?1:.4)}}),T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Zt(t,n),Gr(y,Tt,Ct,ye(v),ye(v*.92),yr(h(M)),!1,Bb(y),Hd,w),Kd(y,t,n,v,w,!1,M)}}),T({type:"custom",layer:"top",add:!0,dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Zt(t,n),Gr(y,Tt,Ct,ye(v),ye(v*.92),yr(h(M)),!0,$b(y),Hd,w*.85),Kd(y,t,n,v,w,!0,M),y.globalAlpha=w*.8,y.fillStyle=gt.w;const _=h(M);for(let A=0;A<18;A++){const R=A/18*Vt+M*2;Zt(t+Math.cos(R)*v*.92,n+Math.sin(R)*v*.92,_),y.fillRect(N(Tt-1),N(Ct-1),3,2)}}}),T({type:"custom",layer:"ground",add:!0,delay:i,dur:.35,x:t,y:n,draw(y,x){Zt(t,n),y.globalAlpha=(1-x)*.75,y.fillStyle=zt(y,Ce.w,x<.3?8:4),ti(y,Tt,Ct,N(ye(r)*(.6+x*.7)),.5),y.globalAlpha=1-x,y.fillStyle=Cr.l;const b=ye(r)*(.6+x*.7);for(let M=0;M<40;M++){const v=M/40*Vt;y.fillRect(N(Tt+Math.cos(v)*b-2),N(Ct+Math.sin(v)*b*.5-2),4,4)}}}),T({type:"custom",layer:"ground",delay:i,dur:.75,x:t,y:n,draw(y,x){const b=r*.9+(o-r*.9)*In(x);Zt(t,n);const M=Tt,v=Ct,w=ye(b),_=w*.5;y.globalAlpha=(1-x)*.85;for(let A=0;A<56;A++){const R=A/56*Vt;ke(y,M+Math.cos(R)*w,v+Math.sin(R)*_-x*8,N(11-x*7),A&1?Ce.l:ce.l)}y.globalAlpha=1-x;for(let A=0;A<56;A+=2){const R=A/56*Vt+.05;ke(y,M+Math.cos(R)*w*.94,v+Math.sin(R)*_*.94,3,Cr.l)}}});const c=12,d=new Float32Array(c),m=new Float32Array(c),p=Math.max(.6,o-r*.95);for(let y=0;y<c;y++)d[y]=y/c*Vt+H(a+y)*.4,m[y]=p*(.55+H(a+y*5)*.45);T({type:"custom",layer:"ground",delay:i,dur:2.8,x:t,y:n,draw(y,x){const b=x*2.8,M=In(bn(b/.12));y.globalAlpha=b>2?(2.8-b)/.8:1;for(let v=0;v<c;v++)Js(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M,a+v*7,4,ce.x);if(b<1.4){y.globalAlpha=1-b/1.4;for(let v=0;v<c;v++)Js(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M*.9,a+v*7,2,v%3?Cr.m:Cr.l)}}}),T({type:"custom",layer:"top",delay:i,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){if(!b.fired){b.fired=!0;for(let M=0;M<26;M++){const v=Math.random()*Vt,w=r*g(.7,1.1),_=g(1.5,4)*o/3.4;E(t+Math.cos(v)*w,n+Math.sin(v)*w,.1,Math.cos(v)*_,Math.sin(v)*_,g(2.5,5.5),g(.7,1.1),M%5===0?va[0]:M&1?ce.m:ce.d,Math.random()*3+3|0,12,!1,.96)}for(let M=0;M<14;M++){const v=Math.random()*Vt;E(t+Math.cos(v)*r,n+Math.sin(v)*r,.4,Math.cos(v)*.6,Math.sin(v)*.6,g(1.5,3),g(.6,1),M&1?gt.l:gt.w,2,-.4,!0)}St(t,n,o*1.2,l0,.9,.45),at(10)}}}),St(t,n,3.6,cr,1,1.4)};V.cabra_T=e=>{e.uid&&wh(e.uid)};function Wb(e,t,n,r){Zt(t,n);const o=Tt,i=Ct;e.fillStyle=on.k,ti(e,o-4*r,i,N(4*r),.55),ti(e,o+4*r,i,N(4*r),.55),e.fillStyle=on.l,e.fillRect(N(o-9*r),N(i-3*r),N(4*r),2),e.fillRect(N(o+5*r),N(i-3*r),N(4*r),2)}V.cabra_ev_behemoth_stomp=e=>{e.uid&&wh(e.uid);const t=e.uid?lt(e.uid):null;t&&(t._stompA=S.T+.6);const n=e.x,r=e.y,o=e.radius||3.2,i=Math.random()*99;st.sfx("stomp_cabra",n,r,1);const a=[[1,.3],[.3,1],[-.95,-.25],[-.25,-.95]];T({type:"custom",layer:"ground",dur:2.2,x:n,y:r,draw(f,h){f.globalAlpha=(h>.6?(1-h)/.4:1)*.8;for(const[y,x]of a)Wb(f,n+y,r+x,1.8);Zt(n,r);const c=Tt,d=Ct,m=ye(1.25),p=m*.5;for(let y=0;y<36;y++){const x=y/36*Vt,b=c+Math.cos(x)*m,M=d+Math.sin(x)*p;f.fillStyle=on.d,f.fillRect(N(b-5),N(M-2),10,4),f.fillStyle=y&1?on.l:ce.m,f.fillRect(N(b-3),N(M-4),6,3)}}}),T({type:"custom",layer:"ground",dur:.75,x:n,y:r,draw(f,h){const c=In(h),d=1.1+(o-1.1)*c;Zt(n,r);const m=Tt,p=Ct;f.globalAlpha=1-h*h;for(let b=0;b<60;b++){const M=b/60*Vt+i,v=d*(1+(H(i+b)-.5)*.06),w=ye(v),_=w*.5,A=(1-h)*(8+6*H(b*2.7+i)),R=m+Math.cos(M)*w,C=p+Math.sin(M)*_;f.fillStyle=on.d,f.fillRect(N(R-5),N(C-1),10,3),f.fillStyle=b&1?on.l:ce.m,f.fillRect(N(R-4),N(C-A-5),8,6),f.fillStyle=b%3?Ce.l:ce.l,f.fillRect(N(R-4),N(C-A-5),5,2)}f.globalAlpha=(1-h)*.7;const y=ye(d*.82),x=y*.5;f.fillStyle=on.d;for(let b=0;b<40;b++){const M=b/40*Vt;f.fillRect(N(m+Math.cos(M)*y-2),N(p+Math.sin(M)*x-1),4,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.5,x:n,y:r,draw(f,h){f.globalAlpha=(1-h)*.85;const c=1.2+(o-1)*In(h);Eu(f,n,r,Math.min(o,c),48,3,h<.5?gt.l:gt.m,i)}});const s=8,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=f/s*Vt+H(i+f*3)*.6,u[f]=.5+H(i+f*7)*.7;T({type:"custom",layer:"ground",dur:1.8,x:n,y:r,draw(f,h){const c=In(bn(h*1.8/.1));f.globalAlpha=h>.6?(1-h)/.4:1;for(let d=0;d<s;d++)Js(f,n+Math.cos(l[d])*1.25,r+Math.sin(l[d])*1.25,l[d],u[d]*c,i+d*5,3,ce.x)}}),T({type:"custom",layer:"top",dur:.8,x:n,y:r,draw(f,h){const c=.7+(o-.7)*In(Math.min(1,h*1.3));for(let d=0;d<18;d++){const m=d/18*Vt+i*.3,p=.15+h*(.5+.4*H(d+i)),y=N(12-h*7);Zt(n+Math.cos(m)*c,r+Math.sin(m)*c,p),f.globalAlpha=(1-h)*.5,f.fillStyle=d&1?Ce.m:ce.m,f.fillRect(N(Tt-y/2),N(Ct-y/2),y,N(y*.7)),f.fillStyle=Ce.l,f.fillRect(N(Tt-y/2),N(Ct-y/2),N(y/2),2)}}});for(let f=0;f<16;f++){const h=Math.random()*Vt,c=g(.5,1);E(n+Math.cos(h)*c,r+Math.sin(h)*c,.1,Math.cos(h)*g(1.2,3),Math.sin(h)*g(1.2,3),g(2,4),g(.5,.8),f%4===0?va[1]:f&1?ce.m:on.l,Math.random()*2+3|0,11,!1,.95)}St(n,r,o*1.05,l0,.6,.35),St(n,r,o*.8,cr,.4,.3,{delay:.05}),at(5)};const _l=new Set;function Hb(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.kind==="mount")}function wh(e){if(_l.has(e))return;_l.add(e);let t=!1,n=0,r=NaN,o=NaN,i=0,a=0,s=-9,l=0,u=0,f=0;T({type:"custom",layer:"top",add:!0,dur:600,x:0,y:0,draw(h,c,d){const m=lt(e);if(!(!!m&&!m.dead&&Hb(m))){if(!t){d.t>2&&(_l.delete(e),d.t=d.dur+1);return}if(n||(n=S.T),S.T-n<.12)return;_l.delete(e),d.t=d.dur+1;const b=m?m.x:r,M=m?m.y:o;isFinite(b)&&(Vb({x:b,y:M},!0),st.sfx("fade_cabra_R",b,M,1));return}t=!0,n=0;const y=isFinite(r)?Math.hypot(m.x-r,m.y-o):0;if(r=m.x,o=m.y,y>.004&&S.T>=i){i=S.T+.24;const b=Math.random()*Vt;for(let M=0;M<3;M++)E(m.x+Math.cos(b+M*.4)*.6,m.y+Math.sin(b+M*.4)*.6,.05,g(-.5,.5),g(-.5,.5),g(.3,.8),g(.4,.6),M&1?Ce.m:ce.l,4,1.5,!1,.9)}if(S.T-s>1.1&&Math.random()<.03){s=S.T;const b=Math.random()<.5?-1:1;l=b*.34,u=-b*.34,f=g(2.1,2.6)}const x=(S.T-s)/.35;if(x>=0&&x<1){Zt(m.x+l,m.y+u,f+x*.15);const b=N(6*Math.sin(x*Math.PI))+1;h.globalAlpha=1,h.fillStyle=gt.w,h.fillRect(N(Tt-b),N(Ct-1),b*2,2),h.fillRect(N(Tt-1),N(Ct-b),2,b*2),h.fillStyle=gt.m,h.fillRect(N(Tt-2),N(Ct-2),4,4)}S.T>=a&&(a=S.T+.15,St(m.x,m.y,1.8,cr,.22,.3))}})}function qb(e,t,n,r,o){e.globalAlpha=o;for(const i of[-1,1]){const a=t+i*18*r,s=n+8*r;for(let l=0;l<=22;l++){const u=l/22,f=Math.PI+u*Vt*.95,h=15*r*(1-u*.7),c=N((7-u*4)*r),d=a+i*Math.cos(f)*h,m=s+Math.sin(f)*h;e.fillStyle=Ce.d,e.fillRect(N(d-c/2-1),N(m-c/2-1),c+2,c+2),e.fillStyle=l%4===0?Ce.m:Ce.l,e.fillRect(N(d-c/2),N(m-c/2),c,c)}}for(let i=0;i<30*r;i+=2){const a=i/(30*r),s=(16-a*9)*r;e.fillStyle=a<.1?gt.l:zt(e,gt.m,12),e.fillRect(N(t-s),N(n+i),N(s*2),2)}e.fillStyle=gt.w,e.fillRect(N(t-9*r),N(n+9*r),N(4*r),N(3*r)),e.fillRect(N(t+5*r),N(n+9*r),N(4*r),N(3*r))}function Vb(e,t=!1){const n=e.x,r=e.y,o=t?1.9:1.25,i=t?1.9:1.3,a=t?1.6:1.25,s=1.6,l=Math.random()*9;T({type:"custom",layer:"ground",add:!0,dur:s,x:n,y:r,draw(u,f){const h=f*s,c=h>1.1?1-bn((h-1.1)/.35):1;c<=0||xp(u,n,r,o*c,In(bn(h/.22)),-h*1.2+l,1,1)}}),T({type:"custom",layer:"ground",dur:s,x:n,y:r,draw(u,f){const h=f*s,c=h>1.1?1-bn((h-1.1)/.35):1;c<=0||(Zt(n,r),u.globalAlpha=.85*c*bn(h/.25),u.fillStyle=gt.k,ti(u,Tt,Ct,N(ye(o*.62*c)),.5),u.fillStyle=gt.x,ti(u,Tt,Ct+2,N(ye(o*.5*c)),.5))}}),T({type:"custom",layer:"top",dur:s,x:n,y:r,draw(u,f){const h=f*s;if(h<.15||h>1.25)return;const c=bn((h-.15)/.95),d=c*c;Zt(n,r);const m=Ct,p=Tt;u.save(),u.beginPath(),u.rect(p-600,m-900,1200,900),u.clip(),qb(u,p,m-a*B.ZK+d*(a+.4)*B.ZK,i,(c<.15?c/.15:1)*.95),u.restore()}}),T({type:"custom",layer:"top",add:!0,delay:1.35,dur:.3,x:n,y:r,draw(u,f){Zt(n,r,.1),u.globalAlpha=1-f;const h=N((t?40:26)*(1-f))+2;u.fillStyle=gt.w,u.fillRect(N(Tt-h),N(Ct-1),h*2,3),u.fillRect(N(Tt-1),N(Ct-h*.6),3,N(h*1.2))}}),T({type:"custom",layer:"top",delay:1.35,dur:.02,x:n,y:r,fired:!1,draw(u,f,h){if(!h.fired){h.fired=!0;for(let c=0;c<16;c++){const d=c/16*Vt;E(n+Math.cos(d)*.3,r+Math.sin(d)*.3,.2,Math.cos(d)*1.2,Math.sin(d)*1.2,g(1.5,3),g(.5,.9),c&1?gt.l:Ce.w,2,-.3,!0)}St(n,r,2.4,cr,.9,.35),at(3)}}}),St(n,r,t?3.2:2.6,cr,.7,1.4)}const Yb={Q:Xb,W:Gb,E:Nb},jb={Q:.55,W:.7,E:.45};V.cabra_petfade=e=>{let t=ia.get(e.uid)||"";if(!t&&e.sprite)for(const n of["Q","W","E"]){const r=pp(n);r&&r.petSprite&&r.petSprite===e.sprite&&(t=n)}if(!t&&typeof e.sprite=="string"&&e.sprite.startsWith("cabra")){const n=e.sprite;t=/wisp|spirit|flame/.test(n)?"Q":/golem|stone|twin/.test(n)?"W":/locust|swarm|bug/.test(n)?"E":""}return t?(ia.delete(e.uid),Yb[t](e),st.sfx("fade_cabra_"+t,e.x,e.y,jb[t]),!0):!1};Oe.cabra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.7;for(let c=1;c<=9;c++){const d=c*3,m=Math.sin(i*22+f-c*.9)*(2+c*.35);e.globalAlpha=1-c/10,ke(e,n-a*d+l*m,r-s*d+u*m,2,gt.m),ke(e,n-a*d-l*m,r-s*d-u*m,2,c&1?Ce.l:Ce.w)}e.globalAlpha=1;for(let c=0;c<4;c++)ke(e,n-a*(3+c*2.5)+l*Math.sin(i*30+c)*1.2,r-s*(3+c*2.5)+u*Math.sin(i*30+c)*1.2,6-c,c<2?gt.m:gt.d);e.fillStyle=gt.d,e.fillRect(N(n-5),N(r-5),10,10),e.fillStyle=gt.l,e.fillRect(N(n-4),N(r-4),8,8),e.fillStyle=gt.w,e.fillRect(N(n-2),N(r-2),4,4),ke(e,n+a*3+l*4,r+s*3+u*4,2,Ce.w),ke(e,n+a*5+l*5,r+s*5+u*5,2,Ce.l),ke(e,n+a*3-l*4,r+s*3-u*4,2,Ce.w),ke(e,n+a*5-l*5,r+s*5-u*5,2,Ce.l);const h=i*12|0;t._lf!==h&&(t._lf=h,St(t.x,t.y,.9,cr,.5,.12),h&1&&E(t.x,t.y,t.z||.45,0,0,.3,.3,gt.l,2,0,!0))};Ge.cabra=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Vt;T({type:"custom",layer:"top",add:!0,dur:r?.42:.3,x:t,y:n,draw(i,a){Zt(t,n,.45);const s=Tt,l=Ct;i.globalAlpha=a>.5?(1-a)/.5:1;const u=r?7:5,f=(r?14:10)*In(bn(a*1.8));for(let c=0;c<u;c++){const d=o+c/u*Vt,m=s+Math.cos(d)*f,p=l+Math.sin(d)*f*.7;xh(i,s+Math.cos(d)*f*.35,l+Math.sin(d)*f*.25,m,p,3,gt.m),ke(i,m,p,3,gt.w)}ke(i,s,l,N(8*(1-a))+2,gt.w),Zt(t,n);const h=6+a*(r?30:20);for(let c=0;c<12;c++){const d=o+c/12*Vt;ke(i,Tt+Math.cos(d)*h,Ct+Math.sin(d)*h*.5,2,c&1?Ce.l:gt.l)}if(r){i.globalAlpha=1-a;for(const c of[-1,1])for(let d=0;d<8;d++){const m=Math.PI+d/8*Math.PI*1.4,p=7*(1-d/12);ke(i,s+c*(7+Math.cos(m)*p),l-16-a*14+Math.sin(m)*p,d<4?3:2,d<4?Ce.w:Ce.l)}}}});for(let i=0;i<(r?8:4);i++)E(t,n,.5,g(-.9,.9),g(-.9,.9),g(.6,1.6),.4,i&1?gt.l:gt.w,2,-.4,!0);St(t,n,r?1.4:1,cr,r?.7:.5,.22)};const wt=Math.round,ln=Math.PI*2,cs=e=>e*B.HW*Math.SQRT2,Mt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},To=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],bp=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function un(e,t,n,r){r=Math.max(1,wt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(wt(t[0]+(n[0]-t[0])*s/i-a),wt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function uc(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(wt(t-l),wt(n+a),Math.max(1,wt(l*2)),i)}}function hs(e,t,n,r,o,i,a=0){for(let s=0;s<o;s++){const l=a+s/o*ln;e.fillRect(wt(t+Math.cos(l)*r-i/2),wt(n+Math.sin(l)*r*.5-i/2),i,i)}}function Qd(e,t,n,r){t=wt(t),n=wt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const Kb=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));V.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:g(-14,14),c:l+s})}T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,h]=P(t,n,.5),c=S.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const y=f+(d.i-3)*5+(m>0?d.vx*m:0),x=h+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=p,s.fillStyle=To[(d.c+c)%6],s.fillRect(wt(y)-2,wt(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,wt(Math.hypot(r-t,o-n)*2.4)));T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=P(t,n),f=P(r,o),h=f[0]-u[0],c=f[1]-u[1],d=Math.hypot(h,c)||1,m=-c/d,p=h/d;for(let y=0;y<=a;y++){const x=y/a,b=l*4-x;if(b<0)continue;const M=y%4===0,v=M?9:5,w=u[0]+h*x,_=u[1]+c*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=Mt.ink,un(s,[w-m*v+1,_-p*v+1],[w+m*v+1,_+p*v+1],M?4:3),s.fillStyle=M?Mt.gold:To[(y+(S.T*10|0))%6],un(s,[w-m*v,_-p*v],[w+m*v,_+p*v],M?3:2)}}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[u,f]=P(r,o,.5),h=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*ln,p=d%3===0?7:3;s.fillStyle=d%3===0?Mt.gold:Mt.face,un(s,[u+Math.cos(m)*h,f+Math.sin(m)*h*.8],[u+Math.cos(m)*(h-p),f+Math.sin(m)*(h-p)*.8],2)}const c=-Math.PI/2-l*ln*1.5;s.fillStyle=Mt.face,un(s,[u,f],[u+Math.cos(c)*(h-8),f+Math.sin(c)*(h-8)*.8],3),s.fillStyle=Mt.gold,s.fillRect(wt(u)-2,wt(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*ln;E(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,g(.5,1.5),.45,To[s%6],3,2,!0,.9)}};V.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>P(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let h=a.length-1;h>=0;h--){const c=a[h],d=f-c.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=c.al;for(let y=-1,x=0;y<=p;y+=.06,x++){const b=Math.max(0,1-(p-y)/.7),M=wt(3+6*b*c.sc),[v,w]=s(y,i*c.sc);l.fillStyle=Mt.ink,l.fillRect(wt(v-M/2)+1,wt(w-M/2)+1,M,M),l.fillStyle=h===0?x%2?Mt.gold:Mt.face:To[(h*2+x)%6],l.fillRect(wt(v-M/2),wt(w-M/2),M,M)}if(h===0){l.fillStyle=Mt.gold;for(let y=-1;y<=p;y+=.2){const x=s(y,i*1.06),b=s(y,i*1.16);un(l,x,b,2)}}}}if(f>.28){const h=(f-.28)/.27,[c,d]=s(-1,i);l.globalAlpha=1-h;for(let m=0;m<16;m++){const p=m*.6-h*4,y=2+m*1.1;l.fillStyle=To[m%6],l.fillRect(wt(c+Math.cos(p)*y)-1,wt(d+Math.sin(p)*y*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=g(-1,1),f=i*g(.3,1.1),h=r+u*o;E(t+Math.cos(h)*f,n+Math.sin(h)*f,g(.2,.9),g(-.15,.15),g(-.15,.15),g(0,.2),g(.8,1.3),l%3?Mt.sand:Mt.time,2,.15,!0,.99)}at(bp(e)?3:1)};V.camaleon_E=e=>{const t=e.uid,n=e.dur||4;T({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=lt(t),[f,h]=P(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let c=0;c<8;c++){const d=c/8*ln+.2,m=12+l*30;s.fillStyle=To[c%6],un(s,[f+Math.cos(d)*m,h+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),h+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=lt(t);if(!f||f.dead){u.t=u.dur+1;return}if(S.T-o>.06){const c=r[r.length-1];(!c||Math.hypot(f.x-c.x,f.y-c.y)>.1)&&(r.push({x:f.x,y:f.y,t:S.T,c:i++}),r.length>8&&r.shift()),o=S.T}const h=l>.92?(1-l)/.08:1;for(const c of r){const d=1-(S.T-c.t)/.4;if(d<=0)continue;const[m,p]=P(c.x,c.y);s.globalAlpha=d*.65*h,s.fillStyle=To[c.c%6];for(let y=0;y<a.length;y++)s.fillRect(wt(m-a[y]),wt(p-8-y*6),a[y]*2,3)}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=lt(t);if(!f||f.dead){u.t=u.dur+1;return}const[h,c]=P(f.x,f.y,1.05),d=h+24,m=c+Math.sin(S.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=Mt.brassD,uc(s,d,m,9,9,1),s.fillStyle=Mt.brass,s.fillRect(wt(d)-2,wt(m)-13,5,4),s.fillStyle=Mt.face,uc(s,d,m,7,7,1),s.fillStyle=Mt.ink,s.fillRect(wt(d)-1,wt(m)-7,2,2),s.fillRect(wt(d)+5,wt(m),2,2),s.fillRect(wt(d)-1,wt(m)+5,2,2),s.fillRect(wt(d)-7,wt(m),2,2);const p=S.T*14;s.fillStyle="#e03a4a",un(s,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function Qb(e,t,n,r){t=wt(t),n=wt(n),e.fillStyle=Mt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=Mt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=wt(6-o*.5),a=wt(1+o*.5);e.fillStyle=Mt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-a-1,n+1+o,1,1),e.fillRect(t+a+1,n+1+o,1,1),e.fillStyle=Mt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-a,n+1+o,a*2+1,1)}r>.02&&r<.98&&(e.fillStyle=Mt.sand,e.fillRect(t,n-1,1,12))}let Zd=null,Jd=null,t1=[],e1=[];function Zb(e){return Zd!==e&&(Zd=e,t1=[{u0:0,fill:zt(e,Mt.night,7),a:.55},{u0:.66,fill:zt(e,Mt.time,6),a:.55},{u0:.86,fill:zt(e,Mt.glass,10),a:.6},{u0:.96,fill:Mt.glass,a:.5}]),t1}function Jb(e){return Jd!==e&&(Jd=e,e1=[{u0:0,fill:zt(e,Mt.glass,2),a:.4},{u0:.62,fill:zt(e,Mt.time,3),a:.5},{u0:.82,fill:zt(e,Mt.time,5),a:.6},{u0:.93,fill:zt(e,Mt.glass,9),a:.7}]),e1}function fo(e,t,n,r,o){const i=Math.cos(r)*Math.cos(o),a=Math.sin(r)*Math.cos(o),s=Math.sin(o);return pn(e+i*n,t+a*n,s*n),no(i,a,s)>0}const n1=[.42,44,.86,32,1.24,16];function r1(e,t,n,r,o,i,a,s){const l=o>0;e.fillStyle=l?Mt.glassL:"#5a68c0",e.globalAlpha=s*(l?.55:.7);for(let h=0;h<12;h++){const c=h/12*ln-i*.35;for(let d=1;d<11;d++)fo(t,n,r,c,d/11*Math.PI/2)===l&&e.fillRect(wt(At.x)-1,wt(At.y)-1,2,2)}for(let h=0;h<3;h++){const c=n1[h*2],d=n1[h*2+1];for(let m=0;m<d;m++)fo(t,n,r,m/d*ln+i*.08,c)===l&&e.fillRect(wt(At.x)-1,wt(At.y)-1,2,2)}e.globalAlpha=s*.95,e.fillStyle=l?Mt.gold:Mt.time;for(let h=0;h<72;h++)fo(t,n,r,h/72*ln,0)===l&&e.fillRect(wt(At.x)-1,wt(At.y)-1,3,3);for(let h=0;h<12;h++){const c=h/12*ln-Math.PI/4;if(fo(t,n,r,c,0)!==l)continue;const d=At.x,m=At.y;fo(t,n,r,c,h%3?.13:.22),e.fillStyle=l?h%3?Mt.face:Mt.gold:Mt.time,un(e,[d,m],[At.x,At.y],h%3?2:3)}const u=-i*1.4+.6;e.fillStyle=l?Mt.gold:Mt.brass,e.globalAlpha=s*(l?.95:.6);for(let h=0;h<22;h++)fo(t,n,r,u,h/22*Math.PI/2)===l&&e.fillRect(wt(At.x)-1,wt(At.y)-1,3,3);const f=a%1;if(f<.6){const h=f/.6*Math.PI/2*.98;e.globalAlpha=s*(1-f/.6)*(l?.9:.6),e.fillStyle=l?Mt.glassL:Mt.glass;const c=wt(56*Math.cos(h))+8;for(let d=0;d<c;d++)fo(t,n,r,d/c*ln,h)===l&&e.fillRect(wt(At.x)-1,wt(At.y)-1,3,2)}}V.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=Xi(e,o),a=Array.from({length:26},(c,d)=>{const m=Math.random()*ln,p=Math.sqrt(Math.random())*r*.85,y=Math.sqrt(Math.max(0,r*r-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:g(.15,Math.max(.2,y)),ph:Math.random()*ln,s:d%4===0?4:2,col:[Mt.glassL,Mt.gold,Mt.time,Mt.teal][d%4]}}),s=Array.from({length:22},()=>{const c=Math.random()*ln,d=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(c)*d,y:n+Math.sin(c)*d,z:g(.2,1.4)}}),l=Array.from({length:7},()=>{const c=new Float32Array(16);let d=g(-.4,2),m=g(.12,1.1);for(let p=0;p<8;p++)c[p*2]=d,c[p*2+1]=m,d+=g(-.16,.16),m=Math.min(1.45,Math.max(.05,m+g(-.2,.2)));return c}),u=c=>Kb(c/.3),f=()=>S.T-i.t0,h=c=>Gs(c/.2);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=zn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),[b,M]=P(t,n),v=cs(r)*x,w=f();c.globalAlpha=.28*y,c.fillStyle=Mt.night,uc(c,b,M,v,v*.5,3),c.globalAlpha=.95*y,c.fillStyle=Mt.gold,hs(c,b,M,v,96,3),c.fillStyle=Mt.brass,hs(c,b,M,v*.94,72,2),c.fillStyle=Mt.face,hs(c,b,M,v*.87,60,2);for(let z=0;z<12;z++){const F=z/12*ln-Math.PI/2,U=z%3===0,G=[b+Math.cos(F)*v*.66,M+Math.sin(F)*v*.33],Y=[b+Math.cos(F)*v*.8,M+Math.sin(F)*v*.4];c.fillStyle=Mt.ink,un(c,[G[0]+1,G[1]+1],[Y[0]+1,Y[1]+1],U?6:4),c.fillStyle=U?Mt.gold:Mt.face,un(c,G,Y,U?5:3)}for(let z=0;z<36;z++){const F=z/36*ln-w*.6,U=v*(z%2?.5:.55);c.fillStyle=z%2?Mt.brassD:Mt.brass,c.fillRect(wt(b+Math.cos(F)*U)-2,wt(M+Math.sin(F)*U*.5)-1,5,3)}const _=-Math.PI/2-w*ln/1.5,A=-Math.PI/2-w*ln/12,R=[b+Math.cos(_)*v*.74,M+Math.sin(_)*v*.37],C=[b+Math.cos(A)*v*.45,M+Math.sin(A)*v*.225];c.fillStyle=Mt.ink,un(c,[b+1,M+1],[R[0]+1,R[1]+1],6),un(c,[b+1,M+1],[C[0]+1,C[1]+1],8),c.fillStyle=Mt.face,un(c,[b,M],R,4),c.fillStyle=Mt.gold,un(c,[b,M],C,6),c.fillStyle="#e03a4a",c.fillRect(wt(b)-4,wt(M)-3,8,6),c.fillStyle=Mt.gold,c.fillRect(wt(b)-2,wt(M)-2,4,4);const I=w%1;I<.3&&(c.globalAlpha=(1-I/.3)*y,c.fillStyle=Mt.glassL,hs(c,b,M,v*(.87+I*.4),48,3))}}),T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=zn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;pn(t,n);const M=At.x,v=At.y,w=cs(x),_=Ql(x,x);rc(c,M,v,w,_,!1,Zb(c),y),r1(c,t,n,x,-1,b,f(),y),Eo(i,t,n,r*1.15,9087231,.75*y)}}),T({type:"custom",layer:"top",dur:o+1,x:t,y:n,draw(c,d,m){const p=zn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;pn(t,n);const M=At.x,v=At.y,w=cs(x),_=Ql(x,x);rc(c,M,v,w,_,!0,Jb(c),y),r1(c,t,n,x,1,b,f(),y);const A=Gs((.45-p)/.35);if(A>0)for(const R of l){const C=Math.max(1,wt(7*A));for(let I=0;I<C;I++){if(!fo(t,n,x,R[I*2],R[I*2+1]))continue;const z=At.x,F=At.y;fo(t,n,x,R[I*2+2],R[I*2+3]),c.globalAlpha=y,c.fillStyle=Mt.ink,un(c,[z+1,F+1],[At.x+1,At.y+1],2),c.fillStyle=Mt.glassL,un(c,[z,F],[At.x,At.y],2)}}}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(c,d,m){const p=zn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),b=r*x,M=S.T,v=f();pn(t,n);const w=At.x,_=At.y,A=cs(b),R=Ql(b,b);for(let z=0;z<=80;z++){const F=Math.PI+z/80*Math.PI,U=((z/80-v*.45)%1+1)%1,G=Math.max(0,1-Math.min(U,1-U)*6);c.globalAlpha=y*(.55+.45*G),c.fillStyle=G>.3?Mt.glassL:Mt.glass,c.fillRect(wt(w+Math.cos(F)*A)-1,wt(_+Math.sin(F)*R)-1,3,3)}for(let z=0;z<14;z++){const F=Math.PI*(1.1+z*.022);c.globalAlpha=y*.85,c.fillStyle=Mt.glassL,c.fillRect(wt(w+Math.cos(F)*A*.82)-2,wt(_+Math.sin(F)*R*.82)-2,4,4),z<6&&(c.globalAlpha=y*.5,c.fillRect(wt(w+Math.cos(F+.12)*A*.7)-1,wt(_+Math.sin(F+.12)*R*.7)-1,3,3))}c.globalAlpha=y*.7,Qd(c,w+Math.cos(Math.PI*1.36)*A*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+wt(2*Math.sin(M*4)));for(const z of a){const[F,U]=P(z.x,z.y,z.z*x),G=.5+.5*Math.sin(M*3+z.ph);c.globalAlpha=y*(.35+.65*G),c.fillStyle=z.col,Qd(c,F,U,z.s+(G>.8?1:0))}c.fillStyle=Mt.sand;for(const z of s){const[F,U]=P(z.x,z.y,z.z*x);c.globalAlpha=y*.8,c.fillRect(wt(F),wt(U),1,1)}const[C,I]=P(t,n,b+.35);if(c.globalAlpha=y,Qb(c,C,I,Math.min(1,v/Math.max(.1,v+p))),v<.3){const z=v/.3;c.globalAlpha=1-z,c.fillStyle=Mt.glassL,hs(c,w,_,cs(r)*(.3+z*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let z=0;z<40;z++){const F=Math.random()*ln,U=Math.random()*1.3,G=t+Math.cos(F)*r*Math.cos(U),Y=n+Math.sin(F)*r*Math.cos(U);E(G,Y,r*Math.sin(U),Math.cos(F)*g(.8,2),Math.sin(F)*g(.8,2),g(0,1.5),g(.5,.9),z%3?Mt.glass:Mt.glassL,z%4?2:3,9,!0,.96)}}}}),at(bp(e)?6:3)};Ge.camaleon=e=>{const t=e.x,n=e.y,r=g(-2.6,-.6),o=Math.random()*6|0;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=r-(1-u)*1.5,h=r+2.2-(1-u)*1.2;i.fillStyle=Mt.ink,un(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=Mt.face,un(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=To[o],un(i,[s,l],[s+Math.cos(h)*12,l+Math.sin(h)*12],4),i.fillStyle=Mt.gold;for(let c=0;c<4;c++){const d=c/4*ln+.4,m=14+a*10;i.fillRect(wt(s+Math.cos(d)*m)-1,wt(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)E(t,n,.5,g(-1.3,1.3),g(-1.3,1.3),g(.8,2),.3,To[(o+i)%6],2,6,!0)};let Pe=0,Ie=0;function sr(e,t,n=0){Pe=(e-t)*B.HW+B.OX,Ie=(e+t)*B.HH-n*B.ZK}function er(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const vp=e=>e<0?0:e>1?1:e,He=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],t4="#3a2420",Sh="#2a1410",_h=e=>e>=5?t4:He[e<0?0:e|0];function ku(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}V.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let c=0;c<l;c++){let d=s+(c/(l-1)-.5)*a*1.5;const m=i*g(.7,1);for(let p=0;p<=u;p++){const y=.35+(m-.35)*p/u;d+=g(-.13,.13);const x=(c*(u+1)+p)*2;f[x]=t+Math.cos(d)*y,f[x+1]=n+Math.sin(d)*y}}const h=(c,d,m)=>{const p=vp(d/.25)*u;for(let y=0;y<l;y++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),M=(y*(u+1)+x)*2;sr(f[M],f[M+1]);const v=Pe,w=Ie;sr(f[M+2],f[M+3]);const _=v+(Pe-v)*b,A=w+(Ie-w)*b,R=Math.max(1,Math.round(Math.hypot(_-v,A-w)/3)),C=m*(1-x/u*.5);for(let I=0;I<=R;I++)er(c,v+(_-v)*I/R,w+(A-w)*I/R,C)}};T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(c,d){c.globalAlpha=d<.6?.85:(1-d)/.4*.85,c.fillStyle=Sh,h(c,d*1.8,6)}}),T({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(c,d){const m=d*1.4;c.globalAlpha=1-d*d,c.fillStyle=_h(m/.3),h(c,m,3)}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(c,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const y=.4+(i-.4)*p,x=a*(.45+.55*p),b=5+Math.round(y*3);c.globalAlpha=1-p,c.fillStyle=He[Math.min(3,m+(p*2|0))];for(let M=0;M<=b;M++){const v=s+(M/b-.5)*2*x,w=y*(.9+.1*Math.sin(M*2.3+m*1.7));sr(t+Math.cos(v)*w,n+Math.sin(v)*w,.35+.12*Math.sin(M*1.3+d*18)),er(c,Pe,Ie,8-m-p*4)}}}});for(let c=0;c<32;c++){const d=s+g(-a,a)*.9,m=g(.3,1)*i*2.4;E(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,g(1.2,3),g(.7,1.05),He[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let c=0;c<14;c++){const d=s+g(-a,a),m=g(.6,1)*i*3.2;E(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,g(.4,1.4),.35,He[0],2,1,!0,.98)}at(3)};const e4=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],fc=[],wp=[],Sp=[];e4.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(fc.push(n-2),wp.push(t),Sp.push(r))}});const _p=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function n4(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":He[0]:_p[i];for(let a=0;a<fc.length;a++)Sp[a]===i&&e.fillRect(Math.round(t+fc[a]*r),Math.round(n+wp[a]*r),r,r)}}V.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)E(i+g(-.3,.3),a+g(-.3,.3),g(.2,.8),g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),g(.5,.8),_p[2+(s&1)],4,9,!1,.95)};T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=lt(s.uid),u=a*t;if(!l||l.dead||S.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const h=l.scale||1,c=h>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(b)>0;if(d===0===M)continue;const v=m*.035,w=vp((u-v)/.08);if(w<=0)continue;const _=(p?22:30)*h,A=(p?8:11)*h;sr(l.x,l.y,p?.62:.22),i.globalAlpha=M?1:.4,n4(i,Pe+Math.cos(b)*_,Ie+Math.sin(b)*A-10*(1-w)-6*h,c,u-v<.12)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){sr(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=He[1];for(let l=2;l<s;l+=3)er(i,Pe+l,Ie+l*.7,4),er(i,Pe-l,Ie+l*.7,4),er(i,Pe+l,Ie-l*.7,4),er(i,Pe-l,Ie-l*.7,4);i.fillStyle=He[0],er(i,Pe,Ie,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;E(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,g(.6,1.2),g(.5,.8),He[1+i%3],2,-1,!0,.9)}};V.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=o-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,h=Math.min(16,Math.max(4,Math.round(l/.28))),c=new Float32Array(h*4);for(let m=0;m<h;m++){const p=(m+.5)/h,y=g(-.16,.16);c[m*4]=t+a*p-f*y,c[m*4+1]=n+s*p+u*y,c[m*4+2]=g(18,30),c[m*4+3]=p*r}const d=r+1.9;T({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const y=p*d;for(let x=0;x<h;x++){const b=y-c[x*4+3];if(b<0)continue;const M=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(M<=0)continue;sr(c[x*4],c[x*4+1]);const v=c[x*4+2];m.globalAlpha=M*.8,m.fillStyle=Sh,ku(m,Pe,Ie+1,v+6);const w=b/.3|0;m.globalAlpha=M,m.fillStyle=_h(w),ku(m,Pe,Ie,v*(w<5?.8:.6)),w<4&&H(x*7+(y*12|0))>.72&&(m.fillStyle=He[0],m.fillRect(Math.round(Pe+(H(x*3+(y*12|0))-.5)*v*.5),Math.round(Ie-2),2,2))}m.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,y){const x=lt(y.uid),b=x?x.x:o,M=x?x.y:i;sr(b,M,.4);const v=Pe,w=Ie;sr(b+u,M+f,.4);let _=Pe-v,A=Ie-w;const R=Math.hypot(_,A)||1;_/=R,A/=R;const C=1-p*.6;for(let I=0;I<9;I++){const z=(10+I*5*(.8+Math.random()*.4))*C;m.globalAlpha=1-I/10,m.fillStyle=He[Math.min(4,I>>1)],er(m,v-_*z+(Math.random()-.5)*3,w-A*z+(Math.random()-.5)*3,(10-I)*C)}if(y.n<22&&p<.9){for(let I=0;I<2;I++){const z=g(-2.5,2.5);E(b,M,.35,-u*2-f*z,-f*2+u*z,g(.5,1.6),.5,He[1+(Math.random()*3|0)],3,4,!0)}y.n+=2}if(!y.end&&p>.85){y.end=!0;for(let I=0;I<8;I++){const z=I/8*6.28;E(b,M,.1,Math.cos(z)*2.5+u,Math.sin(z)*2.5+f,.4,.6,I&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;E(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}at(4)};const Zl=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],Jl=[],Ap=[],Tp=[];Zl.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,a)=>a<0||a>=Zl.length||i<0||i>=e.length||Zl[a][i]===".";Jl.push(n-9),Ap.push(t),Tp.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const r4=["#ff7a20","#ffd84a","#fffbe0"];V.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const h=f*2.6,c=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=h-d*.05;m<0||(sr(s[d],l[d]),u.globalAlpha=c*.85,u.fillStyle=Sh,ku(u,Pe,Ie+1,46),u.globalAlpha=c,u.fillStyle=_h(m/.45),ku(u,Pe,Ie,26))}u.globalAlpha=1}}),T({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const h=r*(1-(1-f)*(1-f)),c=36;u.globalAlpha=1-f;for(let d=0;d<c;d++){const m=d/c*6.28;sr(t+Math.cos(m)*h,n+Math.sin(m)*h),u.fillStyle=He[d&1],er(u,Pe,Ie,7*(1-f)+2)}}}),T({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,h){const c=f*1.15;for(let d=0;d<i;d++){const m=c-d*.05;if(m<0)continue;if(!(h.fired&1<<d)){h.fired|=1<<d;for(let v=0;v<5;v++)E(s[d],l[d],.3,g(-.8,.8)+(s[d]-t)*.4,g(-.8,.8)+(l[d]-n)*.4,g(3,5),g(.6,.9),He[v%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const y=95*p;sr(s[d],l[d]);const x=Pe,b=Ie;u.globalAlpha=Math.min(1,p*1.5);const M=c*24|0;for(let v=0;v<y;v+=4){const w=v/y,_=16*(1-w*.75)+(H(d*31+v+M)-.5)*4,A=(H(d*17+v*3+M)-.5)*7*w;if(u.fillStyle=w<.25?He[1]:w<.6?He[2]:He[3],u.fillRect(Math.round(x+A-_/2),Math.round(b-v-4),Math.round(_),4),w<.7){u.fillStyle=He[0];const R=_*.4;u.fillRect(Math.round(x+A-R/2),Math.round(b-v-4),Math.max(2,Math.round(R)),4)}}}}}),T({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const h=f*1.2,c=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,sr(t,n,c);const m=Pe,p=Ie-Zl.length*d*.5;for(let y=0;y<3;y++){u.fillStyle=r4[y];for(let x=0;x<Jl.length;x++){if(Tp[x]!==y)continue;const b=Math.abs(Jl[x]),M=b>=4?Math.round(Math.sin(h*14)*(b-3)*.45):0;u.fillRect(Math.round(m+Jl[x]*d-d/2),Math.round(p+(Ap[x]+M)*d),d,d)}}}}),at(9)};Ge.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)E(t,n,.45,g(-1.3,1.3),g(-1.3,1.3),g(1.6,3.2),g(.3,.5),o<3?He[0]:He[1],2,10,!0,.97);E(t,n,.45,g(-.5,.5),g(-.5,.5),1,.45,He[2],3,8,!0,.95),T({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){sr(t,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?He[1]:He[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),h=a*u*.7;er(o,Pe+f,Ie+h,3),er(o,Pe-h/.7,Ie+f*.7,3),er(o,Pe-f,Ie-h,3),er(o,Pe+h/.7,Ie-f*.7,3)}i<.3&&(o.fillStyle=He[0],er(o,Pe,Ie,6))}})};const An="#fff2d6",qn="#e2b878",ki="#9a6232",zo="#4e2e16",rs="#e8643a",Va="#ffcc66",Lu="#a07a48",Qe=Math.round,qr=Math.PI*2;function je(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Qe(t),Qe(n),r,o)}function Hr(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Qe(t+(r-t)*l/s-i/2),Qe(n+(o-n)*l/s-i/2),i,i)}function Ya(e,t,n,r,o,i=rs){const a=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?ki:l>.82?i:An,e.fillRect(Qe(t+(r-t)*l-u/2),Qe(n+(o-n)*l-u/2),u,u)}}function af(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=Qe(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Qe(t-a),Qe(n+i),a*2,2)}}function Rp(e,t){const n=(e-t)*B.HW,r=(e+t)*B.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const Cp=e=>{const t=lt(e);return t&&!t.dead&&!Xe(t)?t:null},o4=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Pp=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Oe.erizo_A=(e,t,n,r,o)=>{e.translate(Qe(n),Qe(r)),e.rotate(o),je(e,-15,-2,16,4,zo),je(e,-14,-1,14,2,qn),je(e,-9,-1,3,2,An),je(e,-4,-1,3,2,An),je(e,0,-2,3,4,zo),je(e,3,-1,3,2,rs),je(e,6,0,2,1,Va),je(e,-17,-4,5,2,An),je(e,-17,2,5,2,An),Math.random()<.3&&E(t.x,t.y,t.z||.45,0,0,-.3,.25,qn,2,0,!1)};Ge.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:g(0,qr),l:g(8,12)}));T({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of t)Ya(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)E(e.x,e.y,.45,g(-2,2),g(-2,2),g(.5,2),.3,n%2?qn:An,2,6,!1)};Oe.erizo_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;e.translate(Qe(n),Qe(r)),e.rotate(o),je(e,-31,-3,32,6,zo);for(let u=0;u<30;u+=6)je(e,-30+u,-2,3,4,An),je(e,-30+u+3,-2,3,4,ki);je(e,0,-3,4,6,zo),je(e,4,-2,4,4,rs),je(e,8,-1,3,2,Va);for(let u=0;u<3;u++)je(e,-36+u*3,-6+u,4,2,An),je(e,-36+u*3,4-u,4,2,An);vt(!0);const l=$t();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=Va;for(let u=0;u<5;u++)l.fillRect(-6-u*6,Qe(Math.sin(i*38+u*1.3)*5)-1,2,2);vt(!1),Math.random()<.5&&E(t.x,t.y,s,g(-.4,.4),g(-.4,.4),.3,.35,Math.random()<.5?An:qn,2,3,!1)};V.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=Rp(t,n),i=-o,a=r;T({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,h]=P(e.x+t*.35,e.y+n*.35,.45),c=u*.32,d=-9*Math.cos(c*55)*Math.exp(-c*14),m=f+r*d,p=h+o*d,y=f+i*15-r*5,x=h+a*15-o*5,b=f-i*15-r*5,M=h-a*15-o*5;l.globalAlpha=1-u,Hr(l,f+r*3,h+o*3,y,x,3,ki),Hr(l,f+r*3,h+o*3,b,M,3,ki),Hr(l,y,x,m,p,2,An),Hr(l,b,M,m,p,2,An)}}),T({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,h]=P(e.x+t*.5,e.y+n*.5,.45),c=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),y=r*m-o*p,x=r*p+o*m,b=d?c*.55:c;Hr(l,f,h,f+y*b,h+x*b,3,Va),Hr(l,f,h,f+y*b*.5,h+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)E(e.x-t*.2,e.y-n*.2,.4,-t*g(1,2.5)+g(-.5,.5),-n*g(1,2.5)+g(-.5,.5),g(.3,1),.45,l%2?qn:Lu,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+g(-.25,.25),f=g(5,9);E(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,g(0,.6),.22,l%2?Va:An,2,0,!0,.86)}at(1.5)};V.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=Cp(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?Pp(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=P(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*qr+.17,p=Math.sin(m);if(p>=0!==o)continue;const y=u<t?Math.sin(S.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=h+Math.cos(m)*16,M=c+p*12,v=b+Math.cos(m)*x+y,w=M+p*x*.75-x*.3;Ya(i,b,M,v,w,(S.T*7+d*.37)%1<.12?"#ffffff":rs)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),T({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*qr,[u,f]=P(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[h,c]=P(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Hr(o,u,f,h,c,2,s%2?qn:ki)}}});for(let o=0;o<14;o++){const i=o/14*qr,a=g(2,3.5);E(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,g(1.5,3),.5,o%3?An:qn,2,8,!1,.92)}at(2)};V.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=Rp(o,i),h=u>=0?1:-1;T({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,x/r);let M=e.x+o*b,v=e.y+i*b;const w=lt(e.uid);if(w){if(w.dead||Xe(w))return;M=w.x,v=w.y}const[_,A]=P(M,v,.32),R=16,C=x*36*h;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let I=0;I<3;I++){const z=(I-1)*9;Hr(m,_-u*(R+4)-f*z,A-f*(R+4)+u*z,_-u*(R+18+I*5)-f*z,A-f*(R+18+I*5)+u*z,2,qn)}af(m,_,A,R+1,zo),af(m,_,A,R-1,ki),af(m,_-4,A-4,R-9,qn);for(let I=0;I<10;I++){const z=C+I*qr/10,F=Math.cos(z),U=Math.sin(z);Ya(m,_+F*(R-3),A+U*(R-3),_+F*(R+10),A+U*(R+10))}}});const c=Math.max(4,Math.min(10,Qe(a*2.2))),d=Array.from({length:c},(m,p)=>({k:(p+.5)/c,o:g(-.28,.28),lean:g(-6,6),h:g(9,14)}));T({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,(y.dur-x)/.5);for(const M of d){if(x<M.k*r)continue;const v=Math.min(1,(x-M.k*r)/.08),[w,_]=P(e.x+o*M.k+s*M.o,e.y+i*M.k+l*M.o);m.globalAlpha=b*.45,je(m,w-4,_-1,8,3,zo),m.globalAlpha=b,Ya(m,w+M.lean*v,_-M.h*v,w,_)}}});for(let m=0;m<12;m++){const p=Math.random();E(e.x+o*p+g(-.2,.2),e.y+i*p+g(-.2,.2),.1,g(-.6,.6),g(-.6,.6),g(.5,1.4),g(.4,.7),m%2?qn:Lu,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;E(e.x,e.y,.35,s*p*g(2,4),l*p*g(2,4),g(1.5,3),.45,An,2,8,!1,.92)}at(2)};V.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=o4(e),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(c,d)=>{const m=Math.random()*qr,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(r-.5)+g(0,.08),lean:g(-7,7),h:g(10,15),hit:!1}});T({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur,y=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);c.globalAlpha=.85*y;for(let b=0;b<8;b++){const M=b*qr/8+p*.4;for(const v of[-.09,.09]){const[w,_]=P(e.x+Math.cos(M+v)*x,e.y+Math.sin(M+v)*x),[A,R]=P(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));Hr(c,w,_,A,R,3,rs)}}c.globalAlpha=.45*y;for(let b=0;b<48;b++){const M=b/48*qr-p*.2,[v,w]=P(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);je(c,v-1,w-1,2,2,qn)}for(const b of a){if(p<b.t0+o)continue;const[M,v]=P(b.x,b.y);c.globalAlpha=.4*y,je(c,M-4,v-1,8,3,zo),c.globalAlpha=y,Ya(c,M+b.lean,v-b.h,M,v)}}}),T({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur;for(const y of a){const x=(p-y.t0)/o;if(x<0)continue;if(x>=1){y.hit||(y.hit=!0,E(y.x,y.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,Math.random()<.5?qn:Lu,2,7,!1));continue}const[b,M]=P(y.x,y.y,3.6*(1-x)),v=y.lean*1.4;c.globalAlpha=.35,Hr(c,b+v*2.4,M-52,b+v,M-22,1,An),c.globalAlpha=1,Ya(c,b+v,M-22,b,M)}}});const s=Xi(e,r),l=S.T,u=Array.from({length:16},(c,d)=>({a:d/16*qr+g(-.07,.07),h:d%2?g(1.2,1.35):g(1.6,1.8),tip:g(.84,.9),w:d%2?5:7,ph:Math.random()*qr,dl:d/16*.3})).sort((c,d)=>Math.cos(c.a)+Math.sin(c.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(c,d,m)=>{const p=zn(s);if(p<=0){d.t=d.dur+1;return}const y=S.T-l,x=Math.min(1,p/.3);for(const b of u){const M=Math.cos(b.a),v=Math.sin(b.a);if(no(M,v,0)>0!==m)continue;const w=Pp((y-b.dl)/.3)*x;if(w<=.02)continue;const _=Math.sin(S.T*1.8+b.ph)*.04,A=e.x+M*t,R=e.y+v*t;pn(A,R);const C=At.x,I=At.y;pn(e.x+Math.cos(b.a+_)*t*(1-(1-b.tip)*w),e.y+Math.sin(b.a+_)*t*(1-(1-b.tip)*w),b.h*w),i4(c,C,I,At.x,At.y,b.w,m?1:.8),c.globalAlpha=m?1:.85,je(c,C-6,I-1,12,3,Lu),je(c,C-3,I-2,6,2,qn)}c.globalAlpha=1};T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!1),s.rem>0&&Eo(s,e.x,e.y,t*.9,16764006,.3)}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!0)}});const h=Cp(e.uid);if(h)for(let c=0;c<10;c++)E(h.x,h.y,.6,g(-.4,.4),g(-.4,.4),g(7,10),.45,c%2?An:qn,2,0,!1,1);at(2)};function i4(e,t,n,r,o,i,a){const s=Math.max(4,Math.ceil(Math.hypot(r-t,o-n)/3));for(let l=0;l<=s;l++){const u=l/s,f=Math.max(1,Qe(i*Math.pow(1-u,.75))),h=Qe(t+(r-t)*u),c=Qe(n+(o-n)*u);e.globalAlpha=a,e.fillStyle=zo,e.fillRect(h-f-1,c-2,f*2+2,4),e.fillStyle=u<.28?ki:u>.84?rs:An,e.fillRect(h-f,c-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?zo:qn,e.fillRect(h+Qe(f*.3),c-2,f-Qe(f*.3),4))}e.fillStyle=Va,e.fillRect(Qe(r)-1,Qe(o)-1,2,2)}let he=0,de=0;function sn(e,t,n=0){he=(e-t)*B.HW+B.OX,de=(e+t)*B.HH-n*B.ZK}function _r(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const gi=e=>e<0?0:e>1?1:e,cc=e=>1-(1-e)*(1-e),oe=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],On=["#ffe0f4","#ff9ad8","#e060b0"],oi=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],tn=["#ffffff","#fff2a0","#ffd24a"];function Ah(e,t,n,r){const o=[],i=[],a=[],s=[],l=e.length,u=(f,h)=>h<0||h>=l||f<0||f>=e[h].length||t.indexOf(e[h][f])<0;return e.forEach((f,h)=>{for(let c=0;c<f.length;c++){const d=t.indexOf(f[c]);d<0||(o.push(c-n),i.push(h-r),a.push(d),s.push(u(c-1,h)||u(c+1,h)||u(c,h-1)||u(c,h+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const sf=Ah(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function Ip(e,t,n,r){for(let o=0;o<sf.n;o++)e.fillRect(Math.round(t+sf.X[o]*r-r/2),Math.round(n+sf.Y[o]*r-r/2),r,r)}function Ho(e,t,n,r){_r(e,t,n,3);for(let o=2;o<=r;o+=2)_r(e,t+o,n+o,2),_r(e,t-o,n+o,2),_r(e,t+o,n-o,2),_r(e,t-o,n-o,2)}function Du(e,t,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,h=Math.sin(l)*r*i,c=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(a+1)));for(let p=0;p<m;p++){const y=p/m;_r(e,t+f+(c-f)*y,n+h+(d-h)*y,a)}}}function o1(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const ds=new Map;function zp(e,t,n=!1){if(e.id==null)return;let r=ds.get(e.id);if(!r){ds.size>200&&ds.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},ds.set(e.id,r);const o=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=S.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,ds.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}V.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){sn(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=oe[1],Du(r,he,de,i,o*Math.PI,.75,3),r.fillStyle=On[1],Du(r,he,de,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=oe[0],_r(r,he,de,4)}});for(let r=0;r<6;r++)E(t,n,.45,g(-1,1),g(-1,1),g(.3,1),.4,r&1?On[1]:oe[1],2,0,!0)};Oe.gato_Q=(e,t,n,r,o,i)=>{zp(t,a4);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let c=1;c<16;c++){const d=8+c*3.2,m=Math.sin(c*.7-i*22)*(2+c*.35);e.globalAlpha=1-c/16,e.fillStyle=c&1?On[1]:On[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(r+s*d+u*m),2,2)}e.globalAlpha=1,vt(!0);const f=$t();f.fillStyle=oe[3],f.globalAlpha=.16,o1(f,n,r,20),f.globalAlpha=.22,o1(f,n,r,13),f.globalAlpha=1,vt(!1);const h=i*14;for(let c=-3;c<3;c++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(c+.5)*(c+.5);if(m>9)continue;let p;m>6?p=oe[4]:d===-2&&c===-2?p=oe[0]:p=((d*.8+c+h)%4+4)%4<1.3?oe[1]:oe[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+c*3),3,3)}};function a4(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)E(t,n,.45,g(-.6,.6),g(-.6,.6),g(0,.6),.4,o&1?On[1]:oe[2],2,1,!0);return}const r=Math.random()*6.28;T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){sn(t,n,.45);const a=Math.round(14*gi(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,h=l+u*.3;o.fillStyle=u+s&1?On[1]:oe[1],o.fillRect(Math.round(he+Math.cos(h)*f),Math.round(de+Math.sin(h)*f*.7),2,2)}}i<.25&&(o.fillStyle=oe[0],_r(o,he,de,10*(1-i*3)))}});for(let o=0;o<10;o++)E(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(.5,1.5),g(.4,.6),o&1?On[0]:oe[1],2,2,!0);at(2)}const io=Ah(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);V.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,h)=>{for(let c=0;c<l;c++){const d=h+c/l*6.28,m=Math.cos(d),p=Math.sin(d),y=Math.atan2(m+p,m-p),x=y+Math.PI/2,b=Math.cos(x),M=Math.sin(x),v=new Float32Array(io.n*2);for(let w=0;w<io.n;w++)v[w*2]=io.X[w]*b-io.Y[w]*M,v[w*2+1]=io.X[w]*M+io.Y[w]*b;o.push({x:t+m*u,y:n+p*u,t:f+c*.014,c:v})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,h=u>.55?(1-u)/.45:1;for(const c of o){const d=f-c.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,y=Math.max(2,Math.round(p*.6)),x=Math.round(p);sn(c.x,c.y),l.globalAlpha=h*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?oi[3]:b===1?oi[1]:oi[0];for(let M=0;M<io.n;M++){const v=io.B[M]===1,w=io.Y[M]<0;(b===0?!v:b===1?v||w:v||!w)||l.fillRect(Math.round(he+c.c[M*2]*p-x/2),Math.round(de+c.c[M*2+1]*p*.5-y/2),x,y)}}}l.globalAlpha=1}});const s=Math.random()*6.28;T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*cc(gi(u*1.8));l.globalAlpha=1-u;for(let h=0;h<6;h++){const c=s+h*Math.PI/3,d=Math.cos(c),m=Math.sin(c);for(let p=.25;p<f;p+=.16)sn(t+d*p,n+m*p),l.fillStyle=p<f*.5?oi[1]:oi[2],_r(l,he,de,4-p/r*2);if(f>r*.4){const p=f*.6;for(let y=-1;y<=1;y+=2){const x=c+y*.75;for(let b=.12;b<.45;b+=.12)sn(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=oi[0],_r(l,he,de,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;E(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,g(.3,1.1),Math.cos(u)*g(.5,2),Math.sin(u)*g(.5,2),g(0,.4),g(.7,1.1),oi[l%2],2,.5,!0,.95)}at(4)};const ii=Ah([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);V.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;T({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){sn(t,n);const l=3,u=he,f=de-2;for(let h=0;h<3;h++){a.fillStyle=h===0?oe[3]:h===1?oe[1]:tn[1];for(let c=0;c<ii.n;c++){if((ii.K[c]===1?2:ii.B[c]?1:0)!==h)continue;const m=H(c*7.13+i),p=-ii.Y[c]/(ii.h-1);m*.6+p*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+ii.X[c]*l-l/2),Math.round(f+ii.Y[c]*l-s*18*m),l,l))}}}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,h=(l-f*.12)/.3;h<0||h>=1||(sn(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-h,a.fillStyle=u&1?On[1]:oe[1],Ho(a,he,de,8*(1-h)+2))}}}),T({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){sn(r,o,1.05);const l=he,u=de,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),h=[3,5,7,5,3];if(f>.05)for(let c=-1;c<=1;c+=2){const d=l+c*9;for(let m=0;m<5;m++){const p=h[m]*2,y=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?tn[2]:tn[1],a.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,y)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=On[1];for(let c=0;c<=8;c++){const d=Math.PI*(.15+.7*c/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=oe[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)E(t,n,.5,g(-.8,.8),g(-.8,.8),g(.5,1.5),.5,oe[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;E(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,g(.2,1),.45,a&1?On[1]:oe[1],2,0,!0,.9)}};const Al=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],lf=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],uf=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],Bo=3.7,i1=[1,.75,.55,.4,.28],Vi=Math.round;let a1=null,s1=null,l1=[],u1=[];function f1(e,t,n,r,o,i,a){const s=S.T;for(let l=0;l<12;l++){const u=l/12*6.283+s*.5,f=Math.cos(u),h=Math.sin(u);if(no(f*Bo,h*Bo,r)>0===a)for(let c=1;c<=14;c++){const d=c/14;if(d>o)break;const m=((d-s*1.6+l*.29)%1+1)%1,p=m<.12;sn(t+f*r*d,n+h*r*d,Bo*(1-d)),e.globalAlpha=i*(p?1:a?.55:.45),e.fillStyle=p?tn[0]:c%3?oe[1]:On[1],p&&a?Ho(e,he,de,5):_r(e,he,de,p?4:3)}}}V.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*B.HW*Math.SQRT2;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(w,_){const A=_*1.1;sn(t,n);const R=he,C=de;w.globalAlpha=_>.85?(1-_)/.15:1;const I=uf.length/2,z=gi(A/.45)*I;w.fillStyle=oe[1];for(let F=0;F<I&&F<z;F++){const U=uf[F*2],G=uf[F*2+1],Y=Math.min(1,z-F),k=R+Al[U]*i,L=C+lf[U]*i*.55,D=R+Al[G]*i,$=C+lf[G]*i*.55,W=Math.hypot(D-k,$-L)*Y,Z=Math.round(W/6);for(let tt=0;tt<=Z;tt++){const dt=tt*6/(W||1)*Y;w.fillRect(Math.round(k+(D-k)*dt),Math.round(L+($-L)*dt),2,2)}}for(let F=0;F<Al.length;F++)w.fillStyle=F>=9?tn[2]:tn[1],Ho(w,R+Al[F]*i,C+lf[F]*i*.55,3+3*(.5+.5*Math.sin(S.T*9+F*1.7)))}});const a=Xi(e,o),s=()=>S.T-a.t0,l=()=>cc(gi(s()/.45)),u=w=>Math.min(1,s()/.15,w/.12+1e-4);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(w,_,A){const R=zn(a);if(R<=0){A.t=A.dur+1;return}const C=gi(u(R)),I=l(),z=Bo*(1-I);sn(t,n,z);const F=he,U=de;a1!==w&&(a1=w,l1=[{u0:0,fill:zt(w,oe[3],5),a:.55},{u0:.65,fill:zt(w,oe[2],6),a:.55},{u0:.9,fill:zt(w,oe[1],10),a:.6}]),Gr(w,F,U,ye(r*I),0,yr(Bo-z),!1,l1,i1,C),f1(w,t,n,r,I,C,!1),Eo(a,t,n,r*1.1,12615935,.7*C)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(w,_,A){const R=zn(a);if(R<=0){A.t=A.dur+1;return}const C=gi(u(R)),I=l(),z=Bo*(1-I);sn(t,n,z);const F=he,U=de;s1!==w&&(s1=w,u1=[{u0:0,fill:zt(w,oe[2],3),a:.5},{u0:.65,fill:zt(w,oe[1],4),a:.55},{u0:.9,fill:zt(w,oe[0],9),a:.7}]),Gr(w,F,U,ye(r*I),0,yr(Bo-z),!0,u1,i1,C),f1(w,t,n,r,I,C,!0),sn(t,n,Bo);const G=he,Y=de,k=gi(s()/.3);w.globalAlpha=C;for(let L=-9;L<=9;L+=2){const D=Vi((14-Math.abs(L)*1.4)*k);if(D<1)continue;const $=Math.max(1,Vi(2+2*Math.sin(S.T*3)));w.fillStyle=Math.abs(L)>6?tn[2]:tn[1],w.fillRect(Vi(G-D),Vi(Y+L),D-$,2),w.fillRect(Vi(G+$),Vi(Y+L),D-$,2)}w.fillStyle=tn[0],Du(w,G,Y,22+3*Math.sin(S.T*6),S.T*1.5,1,2)}});const f=12,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let w=0;w<f;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r*.9;h[w]=t+Math.cos(_)*A,c[w]=n+Math.sin(_)*A,d[w]=.45+w/(f-1)*.55+g(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*B.ZK),y=40/p,x=-352.8/p;T({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(w,_,A){const R=_*1.2;for(let C=0;C<f;C++){const I=R-(d[C]-m);if(!(I<0))if(I<m){const z=I/m;sn(h[C],c[C],4.5*(1-z));const F=he+(1-z)*40,U=de;for(let G=-1;G<=1;G++){const Y=G*.12,k=y*Math.cos(Y)-x*Math.sin(Y),L=y*Math.sin(Y)+x*Math.cos(Y);w.fillStyle=G===0?On[1]:oe[1];for(let D=1;D<10;D++)w.globalAlpha=1-D/10,w.fillRect(Math.round(F+k*D*3.2+G*3),Math.round(U+L*D*3.2),2,2)}w.globalAlpha=1,w.fillStyle=tn[1],w.fillRect(Math.round(F-6),Math.round(U-1),12,2),w.fillRect(Math.round(F-1),Math.round(U-6),2,12),w.fillStyle=tn[0],w.fillRect(Math.round(F-2),Math.round(U-2),4,4)}else{if(!(A.landed&1<<C)){A.landed|=1<<C;for(let F=0;F<2;F++)E(h[C],c[C],.1,g(-1,1),g(-1,1),g(1,2),.45,F?tn[1]:On[1],2,4,!0)}const z=(I-m)/.2;if(z>=1)continue;sn(h[C],c[C]),w.globalAlpha=1-z,w.fillStyle=tn[1],Ho(w,he,de,2+z*8)}}w.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(w,_,A){if(!A.boom){A.boom=!0,at(8);for(let F=0;F<28;F++){const U=Math.random()*6.28,G=g(1,3.5);E(t,n,.3,Math.cos(U)*G,Math.sin(U)*G,g(1.5,3.5),g(.5,.8),[tn[1],oe[1],On[1],oe[0]][F&3],3,5,!0,.95)}}const R=.3+(r-.3)*cc(_),C=_*2;sn(t,n,.2);const I=he,z=de;if(_<.35){const F=1-_/.35;w.fillStyle=oe[1],w.globalAlpha=F*.25,w.fillRect(Math.round(I-70),Math.round(z-35),140,70),w.globalAlpha=F*.4,w.fillRect(Math.round(I-40),Math.round(z-20),80,40),w.fillStyle=oe[0],w.globalAlpha=F*.7,w.fillRect(Math.round(I-15),Math.round(z-8),30,16)}w.globalAlpha=1-_*_;for(let F=0;F<10;F++){const U=C+F/10*6.28;sn(t+Math.cos(U)*R,n+Math.sin(U)*R,.35+.2*Math.sin(_*6+F)),w.fillStyle=F&1?tn[2]:tn[1],Ip(w,he,de,3),w.fillStyle=tn[0],w.fillRect(Math.round(he-1),Math.round(de-1),2,2)}}});const b=24,M=new Float32Array(b),v=new Float32Array(b);for(let w=0;w<b;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r;M[w]=t+Math.cos(_)*A,v[w]=n+Math.sin(_)*A}T({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(w,_){const A=S.T*8|0;for(let R=0;R<b;R++){const C=H(R*13+A);C<.25||(sn(M[R],v[R]),w.globalAlpha=(1-_)*C,w.fillStyle=R%3?oe[1]:tn[1],w.fillRect(Math.round(he),Math.round(de),2,2))}}})};Oe.gato_A=(e,t,n,r,o,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);zp(t,s4,a),vt(!0);const s=$t(),l=Math.cos(o),u=Math.sin(o);for(let c=1;c<=4;c++)s.globalAlpha=.8-c*.17,s.fillStyle=c&1?On[1]:oe[1],_r(s,n-l*c*5,r-u*c*5,4-c*.6);s.globalAlpha=1;const f=a?7:5,h=(i*16|0)&1;if(s.fillStyle=oe[2],h)for(let c=-f;c<f;c+=2){const d=(f-Math.abs(c+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+c),Math.max(2,Math.round(d)),2)}else{const c=Math.round(f*1.4);s.fillRect(Math.round(n-c/2),Math.round(r-c/2),c,c)}if(s.fillStyle=On[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=tn[1];for(let c=0;c<3;c++){const d=i*10+c*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}vt(!1)};function Op(e,t,n){T({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){sn(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=oe[1],Du(r,he,de,i,Math.PI/4,.75,2),r.fillStyle=On[1],Ho(r,he+i,de,3),Ho(r,he-i,de,3),Ho(r,he,de+i*.75,3),Ho(r,he,de-i*.75,3),n&&(r.fillStyle=tn[1],Ip(r,he,de-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)E(e,t,.45,g(-1,1),g(-1,1),g(.3,1.2),.35,n&&r&1?tn[1]:oe[1],2,1,!0)}function s4(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;Op(t,n,e.crit),st.sfx("atk_gato",t,n,e.crit?.9:.6)}Ge.gato=e=>Op(e.x,e.y,!!e.big);const K=Math.round,lr=Math.PI*2;let Ft=0,kt=0;function we(e,t,n=0){Ft=(e-t)*B.HW+B.OX,kt=(e+t)*B.HH-n*B.ZK}const vn=e=>e<0?0:e>1?1:e,ri=e=>1-(1-e)*(1-e),Th=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function Rh(e,t,n,r,o){e.fillStyle=o,e.fillRect(K(t-r/2),K(n-r/2),r,r)}const q={w:"#ffffff",cy:"#22d6ff",cyl:"#a8fcff",cyd:"#0a6676",mag:"#ff1ee6",magl:"#ff96f5",magd:"#6a0a5e",bk:"#100816",pur:"#3c145a",lime:"#aaff3c",yel:"#ffdc3c",red:"#e8224a"},Oo=2283263,Fo=16719590,f0=15267583,ja=[q.mag,q.cy,q.yel,q.lime,q.w],Ka=[q.mag,q.cy,q.w,q.magl,q.cyl];Cn.glitch_bolt=[q.w,q.cyl,q.cy,q.mag];Cn.fragment=[q.w,q.magl,q.mag,q.cy];Cn.delete=[q.w,q.cyl,q.mag,q.cy];Cn.glitch_copy=[q.w,q.cyl,q.cy,q.cyd];Cn.glitch_dup=[q.w,q.cy,q.mag,q.red];const Tl=new Map;let ao=null,ms=null;function Gi(e,t,n,r){const o=Ht[e],i=fr[e];if(!o||!i||!i.naturalWidth)return null;const[a,s]=Jm(o,t,n,r),l=e+"|"+a+"|"+s;let u=Tl.get(l);if(u)return u;const f=o.fw,h=o.fh,c=tp(e,a,s);if(!c)return null;const d=document.createElement("canvas");if(d.width=f,d.height=h,d.getContext("2d").drawImage(i,c[0],c[1],c[2],c[3],c[4],c[5],c[2],c[3]),ao||(ao=document.createElement("canvas"),ms=ao.getContext("2d",{willReadFrequently:!0})),!ms)return null;ao.width<f&&(ao.width=f),ao.height<h&&(ao.height=h),ms.clearRect(0,0,ao.width,ao.height),ms.drawImage(d,0,0);let m;try{m=ms.getImageData(0,0,f,h).data}catch{return null}const p=f+1>>1,y=h+1>>1,x=new Uint8Array(p*y),b=new Uint32Array(p*y);let M=1e9,v=1e9,w=-1,_=-1;for(let R=0;R<y;R++)for(let C=0;C<p;C++){let I=0,z=-1;for(let F=0;F<2;F++)for(let U=0;U<2;U++){const G=C*2+U,Y=R*2+F;if(G>=f||Y>=h)continue;const k=(Y*f+G)*4;m[k+3]>I&&(I=m[k+3],z=k)}I>60&&(x[R*p+C]=1,b[R*p+C]=m[z]<<16|m[z+1]<<8|m[z+2],C<M&&(M=C),C>w&&(w=C),R<v&&(v=R),R>_&&(_=R))}const A=[];for(let R=0;R<y;R++)for(let C=0;C<p;C++){const I=R*p+C;x[I]||(C>0&&x[I-1]||C<p-1&&x[I+1]||R>0&&x[I-p]||R<y-1&&x[I+p])&&A.push(C,R)}return w<0&&(M=0,v=0,w=p-1,_=y-1),u={img:d,ox:0,oy:0,fw:f,fh:h,ax:o.ax,ay:o.ay,cw:p,ch:y,cells:x,cols:b,ring:Int16Array.from(A),bx0:M*2,by0:v*2,bx1:w*2+2,by1:_*2+2,v:{}},Tl.size>140&&Tl.clear(),Tl.set(l,u),u}function wn(e,t){let n=e.v[t];if(n)return n;n=document.createElement("canvas"),n.width=e.fw,n.height=e.fh;const r=n.getContext("2d"),o=e.fw,i=e.fh;if(r.imageSmoothingEnabled=!1,t==="check"||t==="scan"){if(t==="check")for(let a=0;a<i;a+=6)for(let s=0;s<o;s+=6)r.fillStyle=s/6+a/6&1?q.pur:q.mag,r.fillRect(s,a,6,6);else{r.fillStyle=q.cy;for(let a=0;a<i;a+=4)r.fillRect(0,a,o,2)}r.globalCompositeOperation="destination-in",r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i)}else if(r.drawImage(e.img,e.ox,e.oy,o,i,0,0,o,i),r.globalCompositeOperation="source-atop",r.globalAlpha=t==="white"?1:t==="ghost"?.62:.6,r.fillStyle=t==="white"?q.w:t==="ghost"?"#38e4f4":t==="red"?q.red:q.cy,r.fillRect(0,0,o,i),t==="white"||t==="ghost"){r.globalCompositeOperation="destination-out",r.globalAlpha=t==="white"?1:.5,r.fillStyle="#000";for(let a=2;a<i;a+=4)r.fillRect(0,a,o,2)}return e.v[t]=n,n}function hr(e,t,n,r,o,i,a,s=0){a<=.003||(e.globalAlpha=Math.min(1,a),e.imageSmoothingEnabled=!1,n?e.drawImage(n,K(r-t.ax*i+s),K(o-t.ay*i),K(t.fw*i),K(t.fh*i)):e.drawImage(t.img,t.ox,t.oy,t.fw,t.fh,K(r-t.ax*i+s),K(o-t.ay*i),K(t.fw*i),K(t.fh*i)))}function wa(e,t,n,r,o,i,a,s,l,u,f,h){const c=s-a,d=u-l;if(c<=0||d<=0||h<=.003)return;e.globalAlpha=Math.min(1,h),e.imageSmoothingEnabled=!1;const m=K(r+(a-t.ax)*i+f),p=K(o+(l-t.ay)*i);n?e.drawImage(n,a,l,c,d,m,p,K(c*i),K(d*i)):e.drawImage(t.img,t.ox+a,t.oy+l,c,d,m,p,K(c*i),K(d*i))}function l4(e,t,n,r,o,i,a){const s=t.ring,l=2*o,u=n-t.ax*o,f=r-t.ay*o,h=Math.max(1,K(l));e.globalAlpha=a;for(let c=0;c<2;c++){e.fillStyle=c?q.w:q.cy;for(let d=0;d<s.length;d+=2)(s[d]+s[d+1]+i>>1&1)===c&&e.fillRect(K(u+s[d]*l),K(f+s[d+1]*l),h,h)}}function Sa(e){const t=Ht[e.sprite];if(!t)return null;let n="idle",r=0;if(t.anims)if(e.atkAnim>0&&t.anims.attack){n="attack";const o=t.anims.attack.n;r=Math.min(o-1,Math.floor((1-e.atkAnim/.45)*o))}else e.moving&&t.anims.walk?(n="walk",r=Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))):t.anims.idle?r=Math.floor((e.animT||0)*1e3/t.anims.idle.ms):n="walk";return Gi(e.sprite,n,t.dirs===1?0:e.dir||0,r)}function hc(e){const t=Ht[e.sprite];return t?Gi(e.sprite,"idle",t.dirs===1?0:e.dir||0,0):null}const ir=e=>(e.scale||1)*(e._fbScale||1),c1={A:".#. #.# ### #.# #.#",C:".## #.. #.. #.. .##",D:"##. #.# #.# #.# ##.",E:"### #.. ##. #.. ###",G:".## #.. #.# #.# .##",I:"### .#. .#. .#. ###",L:"#.. #.. #.. #.. ###",N:"#..# ##.# #.## #..# #..#",O:".#. #.# #.# #.# .#.",P:"##. #.# ##. #.. #..",R:"##. #.# ##. #.# #.#",S:".## #.. .#. ..# ##.",T:"### .#. .#. .#. .#.",Y:"#.# #.# .#. .#. .#.",X:"#.# #.# .#. #.# #.#",".":". . . . #","!":"# # # . #"," ":".. .. .. .. ..","[":"## #. #. #. ##","]":"## .# .# .# ##"},tl={};for(const e in c1)tl[e]=c1[e].split(" ").map(t=>[...t].map(n=>n==="#"?1:0));function u4(e,t){let n=0;for(const r of e)n+=((tl[r]||tl[" "])[0].length+1)*t;return n-t}function Qa(e,t,n,r,o,i,a){if(a<=.01)return;let s=K(t-u4(r,i)/2);n=K(n),e.globalAlpha=a;for(const l of r){const u=tl[l]||tl[" "],f=u[0].length;for(let h=0;h<2;h++){e.fillStyle=h?o:q.bk;const c=h?0:i;for(let d=0;d<5;d++)for(let m=0;m<f;m++)u[d][m]&&e.fillRect(s+m*i+c,n+d*i+c,i,i)}s+=(f+1)*i}}function Mo(e,t,n,r,o,i){e.fillStyle=o+i>>1&1?q.bk:q.w,e.fillRect(K(t),K(n),r,r)}function Uu(e,t,n,r,o,i,a,s,l){if(s<=.01)return;t=K(t),n=K(n),r=K(r),o=K(o),e.globalAlpha=s;let u=0;for(let c=t;c<r;c+=i)Mo(e,c,n,i,u++,a);for(let c=n;c<o;c+=i)Mo(e,r,c,i,u++,a);for(let c=r;c>t;c-=i)Mo(e,c,o,i,u++,a);for(let c=o;c>n;c-=i)Mo(e,t,c,i,u++,a);if(!l)return;const f=K((t+r)/2),h=K((n+o)/2);br(e,t,n,i),br(e,r,n,i),br(e,t,o,i),br(e,r,o,i),br(e,f,n,i),br(e,f,o,i),br(e,t,h,i),br(e,r,h,i)}function br(e,t,n,r){const o=r*2+1;e.fillStyle=q.bk,e.fillRect(K(t-o/2-1+r/2),K(n-o/2-1+r/2),o+2,o+2),e.fillStyle=q.w,e.fillRect(K(t-o/2+r/2),K(n-o/2+r/2),o,o)}function Ch(e,t,n,r,o,i,a,s,l,u,f,h=0,c=1){const d=Math.hypot(r-t,o-n);if(d<1||f<=.01)return;const m=Math.floor(d/i);e.globalAlpha=f;for(let p=0;p<=m;p++){const y=(p*i+s%i)/d;y<h||y>c||(e.fillStyle=p&1?u:l,e.fillRect(K(t+(r-t)*y-a/2),K(n+(o-n)*y-a/2),a,a))}}function f4(e,t,n,r,o,i){const a=[t-r,t+r,t+r,t-r],s=[n-r,n-r,n+r,n+r];e.globalAlpha=i;let l=0;for(let u=0;u<4;u++){we(a[u],s[u]);const f=Ft,h=kt;we(a[(u+1)%4],s[(u+1)%4]);const c=Ft,d=kt,m=Math.max(1,Math.floor(Math.hypot(c-f,d-h)/2));for(let p=0;p<m;p++)Mo(e,f+(c-f)*p/m,h+(d-h)*p/m,2,l++,o)}for(let u=0;u<4;u++)we(a[u],s[u]),e.fillStyle=q.bk,e.fillRect(K(Ft-3),K(kt-3),6,6),e.fillStyle=q.w,e.fillRect(K(Ft-2),K(kt-2),4,4)}function h1(e,t,n,r,o,i,a){e.globalAlpha=a,t=K(t);const s=K(n-r/2),l=K(n+r/2),u=6*o;e.fillStyle=q.bk,e.fillRect(t-3,s-1,4,l-s+2),e.fillRect(Math.min(t,t+u)-1,s-1,8,4),e.fillRect(Math.min(t,t+u)-1,l-2,8,4),e.fillStyle=i,e.fillRect(t-2,s,2,l-s),e.fillRect(Math.min(t-2,t-2+u),s,8,2),e.fillRect(Math.min(t-2,t-2+u),l-2,8,2)}function c4(e,t,n,r,o,i,a=q.mag,s=q.cy){const l=Math.cos(r),u=Math.sin(r),f=o+2;e.globalAlpha=i;for(let h=-f;h<=f;h++)for(let c=-f;c<=f;c++){const d=c*l+h*u,m=-c*u+h*l,p=Math.max(Math.abs(d),Math.abs(m));p>o+.5||(e.fillStyle=p>o-.6?q.bk:d>0==m>0?a:s,e.fillRect(K(t+c*2-1),K(n+h*2-1),2,2))}}function c0(e,t,n,r,o,i){e.globalAlpha=i,t=K(t-r/2),n=K(n-r/2),e.fillStyle=q.bk,e.fillRect(t-1,n-1,r+2,r+2),e.fillStyle=o,e.fillRect(t,n,r,r),e.fillStyle=q.w,e.fillRect(t,n,Math.max(1,r>>1),2)}const yo=[];(()=>{for(let e=0;e<11;e++)for(let t=0;t<11;t++){const n=Math.hypot(t-5,e-5);n>=4.3&&n<=5.6||n<4.3&&Math.abs(t-e)<=.5?yo.push(t,e,0):n<4.3&&t>=2&&t<=8&&e>=3&&e<=6?yo.push(t,e,(e===4||e===5)&&(t===3||t===5||t===7)?2:1):n<4.3&&t===3&&e===7&&yo.push(t,e,1)}})();function h4(e,t,n,r){e.globalAlpha=r;const o=2,i=K(t-11),a=K(n-11);e.fillStyle=q.bk,e.fillRect(i-2,a-2,26,26);for(let s=0;s<yo.length;s+=3)e.fillStyle=yo[s+2]===0?q.red:yo[s+2]===1?q.w:q.bk,e.fillRect(i+yo[s]*o,a+yo[s+1]*o,o,o);e.fillStyle=q.cy;for(let s=0;s<2;s++){const l=a+4+s*7+(S.T*6|0)%2;for(let u=0;u<3;u++)e.fillRect(i+25+u*2,l+u*2,2,2),e.fillRect(i+33-u*2,l+u*2,2,2)}}function h0(e,t){return t?(t.ay-t.by0)*ir(e):60}const ff=new Map,Rl=new Map,_a=new Set,Li=new Map,Bs=new Map;let cf=-1,d1=0;function d4(e,t){if(t.grid&&t.grid.solidAt&&t.grid.solidAt(e.x,e.y,.02))return!0;const n=e.r||.35;for(const r of t.units){if(r===e||r.dead||r.flying)continue;const o=(n+(r.r||.35))*.95,i=r.x-e.x,a=r.y-e.y;if(!(i>o||i<-o||a>o||a<-o)&&i*i+a*a<o*o)return!0}return!1}function m4(e){for(const t of Li.values())if(t.tid===e.id)return t;for(const t of Li.values())if(t.tid<0&&Math.hypot(t.x-e.x,t.y-e.y)<2.5)return t.tid=e.id,t;return null}Pf.glitch=e=>{const t=S.game;if(!t||!t.units)return;const n=S.T;if(e==="ground"){const s=$t();for(const l of t.units){if(l.dead||!l.illusion||l.heroKey!=="glitch"||Xe(l))continue;we(l.x,l.y);const u=(l.r||.35)*ir(l)*B.HW*1.5+4,f=u*.5,h=28;s.globalAlpha=.85;for(let c=0;c<h;c++){if((c+(n*10|0)&3)>1)continue;const d=c/h*lr;Rh(s,Ft+Math.cos(d)*u,kt+Math.sin(d)*f,2,c&1?q.cyl:q.cy)}}return}const r=cf<0?0:Math.min(.1,Math.max(0,n-cf));cf=n;const o=n>=d1;o&&(d1=n+.12);const i=$t(),a=n*16|0;for(const s of t.units){if(s.dead){ff.delete(s.id),Rl.delete(s.id);continue}const l=Xe(s),u=s.status||{};if(s.heroKey==="glitch"&&s.kind==="hero"){let f=ff.get(s.id)||0;if(f=d4(s,t)?Math.min(1,f+r*9):Math.max(0,f-r*2.5),ff.set(s.id,f),f>.01&&!l){const c=Sa(s);if(c){we(s.x,s.y);const d=ir(s);hr(i,c,wn(c,"check"),Ft,kt,d,.24*f),l4(i,c,Ft,kt,d,a,.95*f)}o&&St(s.x,s.y,1.1,Oo,.38*f,.2,{uid:s.id})}}if(s.illusion&&s.heroKey==="glitch"&&(_a.size>200&&_a.clear(),_a.add(s.id),!l)){const f=Sa(s);if(f){we(s.x,s.y);const h=ir(s);if(hr(i,f,wn(f,"scan"),Ft,kt,h,.32+.08*Math.sin(n*7+s.id)),(n+H(s.id)*1.6)%1.6<.12){const d=f.by0+K((f.by1-f.by0)*(.25+.4*H(s.id+(n/1.6|0)))),m=Math.min(f.by1,d+8);wa(i,f,wn(f,"red"),Ft,kt,h,0,f.fw,d,m,-4,.8),wa(i,f,wn(f,"cyan"),Ft,kt,h,0,f.fw,d,m,4,.8)}}o&&St(s.x,s.y,.9,Oo,.18,.2,{uid:s.id})}if(u.slow&&u.slow.fx==="fragment"){let f=Rl.get(s.id);if(f===void 0&&(f=n,Rl.set(s.id,n)),!l){const h=n-f,c=hc(s),d=ir(s);we(s.x,s.y);const m=Ft,p=kt,y=h0(s,c),x=p-y*.45,b=(c?(c.bx1-c.bx0)*d*.5:24)+6,M=b*Math.min(1,h/.2)*(1-.25*vn(h/1.5));for(let v=0;v<5;v++){const w=v/5*lr+h*4+h*h*1.6,_=Math.sin(w);c0(i,m+Math.cos(w)*M,x+_*M*.42+Math.sin(n*9+v)*1.5,8,ja[v],_<0?.6:1)}h4(i,m+b+16,p-y*.8,.95),o&&St(s.x,s.y,1,Fo,.4,.2,{uid:s.id})}}else Rl.delete(s.id);if(u.deleting){const f=Bs.get(s.id);if(f!==void 0&&n-f<.6)continue;const h=m4(s);if(l)continue;const c=hc(s),d=ir(s);we(s.x,s.y);const m=Ft,p=kt,y=h?n-h.t0:1,x=ri(vn(y/.2)),b=(1-x)*42,M=c?m+(c.bx0-c.ax)*d-6:m-26,v=c?m+(c.bx1-c.ax)*d+6:m+26,w=c?p+(c.by0-c.ay)*d-6:p-64,_=c?p+(c.by1-c.ay)*d+4:p+6;h&&(h.rx0=M-m,h.ry0=w-p,h.rx1=v-m,h.ry1=_-p,h.tx=s.x,h.ty=s.y);const A=h?vn(y/h.dur):.5+.4*Math.sin(n*3),R=Sa(s);R&&x>=1&&wa(i,R,wn(R,"check"),m,p,d,R.bx0,R.bx0+K((R.bx1-R.bx0)*A),0,R.fh,0,.5);const C=h?lt(h.uid):null;C&&!C.dead&&(we(C.x,C.y,.75),Ch(i,Ft,kt,m,(w+_)/2,7,2,n*40,q.cy,q.cyl,.9,0,x)),Uu(i,M-b,w-b*.8,v+b,_+b*.5,2,a,1,!0);const I=Math.max(44,K(v-M)),z=K((M+v)/2-I/2),F=K(_+8);i.globalAlpha=x,i.fillStyle=q.bk,i.fillRect(z-1,F-1,I+2,8),i.fillStyle=q.magd,i.fillRect(z,F,I,6),i.fillStyle=q.mag,i.fillRect(z,F,K(I*A),6),i.fillStyle=q.magl,i.fillRect(z,F,K(I*A),2),Qa(i,(M+v)/2,F+11,["DELETING","DELETING.","DELETING..","DELETING..."][(n*4|0)%4],q.w,2,x),Math.random()<.35&&E(s.x+(Math.random()-.5)*.4,s.y+(Math.random()-.5)*.4,.3+Math.random()*.8,0,0,.9,.5,Math.random()<.5?q.mag:q.cy,2,-.4,!0),o&&St(s.x,s.y,1.2,Fo,.45+.25*A,.2,{uid:s.id})}}};const Fp=new Map;function p4(e){const t=lt(e.uid),n=e.x,r=e.y,o=e.dur||4,i=S.T,a=t?t.sprite:"glitch",s=t&&t.dir||0,l=t?ir(t):1,u={end:i+o};Fp.set(e.uid,u);const f=h=>{const c=S.T-u.end;return c>0?(c>.25&&(h.t=h.dur+1),1-c/.25):1};T({type:"custom",layer:"ground",dur:o+.4,x:n,y:r,draw(h,c,d){const m=f(d),p=S.T-i,y=ri(vn(p/.18));f4(h,n,r,.42*(1.6-.6*y),S.T*14|0,m*(.9*y))}}),T({type:"custom",layer:"top",dur:o+.4,x:n,y:r,nl:0,draw(h,c,d){const m=f(d);if(m<=0)return;const p=S.T-i,y=Ht[a],x=y&&y.anims&&y.anims.idle?Math.floor(p*1e3/y.anims.idle.ms):0,b=Gi(a,"idle",s,x);we(n,r);const M=u.end-S.T,v=M<1&&(S.T*12|0)%2===0,w=(S.T*1.1+.3)%1<.06;b&&(p<.16&&hr(h,b,wn(b,"white"),Ft,kt,l,m*(1-p/.16)),hr(h,b,wn(b,"ghost"),Ft,kt,l,m*(v?.25:.62)*vn(p/.1),w?2:0),p<1.4&&Qa(h,Ft,kt-h0({scale:l},b)-16-Math.min(6,p*30),"COPY",q.cy,2,m*(p>1?(1.4-p)/.4:1))),S.T>=d.nl&&(d.nl=S.T+.15,St(n,r,1,Oo,.3*m,.2))}});for(let h=0;h<10;h++){const c=h/10*lr;E(n+Math.cos(c)*.3,r+Math.sin(c)*.3,.2+h%3*.3,Math.cos(c)*.8,Math.sin(c)*.8,.8,.45,h&1?q.cy:q.w,2,0,!0)}St(n,r,1.4,Oo,.7,.35),st.sfx("ab_glitch_Q_copy",n,r,1)}function y4(e){const t=e.x,n=e.y,r=e.ex!==void 0?e.ex:e.x,o=e.ey!==void 0?e.ey:e.y,i=e.uid,a=Fp.get(i);a&&(a.end=Math.min(a.end,S.T));const s=lt(i),l=s?s.sprite:"glitch",u=s&&s.dir||0,f=s?ir(s):1;T({type:"custom",layer:"top",dur:.75,x:r,y:o,draw(h,c){const d=c*.75,m=Gi(l,"idle",u,0);we(t,n);const p=Ft,y=kt,x=m?h0({scale:f},m):60;if(m&&d<.45&&hr(h,m,wn(m,"ghost"),p,y,f,.55*(1-d/.45)),d<.55){const C=(m?(m.bx1-m.bx0)*f*.5:24)+8,I=ri(vn(d/.2)),z=C*(1.5-.5*I)*(d>.3?1-(d-.3)/.25*.8:1),F=d>.35?(.55-d)/.2:1;h1(h,p-z,y-x*.5,x+12,-1,q.w,F),h1(h,p+z,y-x*.5,x+12,1,q.w,F)}we(r,o);const b=Ft,M=kt;Ch(h,p,y-x*.4,b,M-x*.4,6,2,0,q.cy,q.cyl,1-c,vn(d/.25-.25),vn(d/.12));const v=lt(i),w=v?(we(v.x,v.y),Ft):b,_=v?kt:M;m&&hr(h,m,wn(m,"white"),w,_,f,.95*(1-vn(d/.35))),Qa(h,w,_-x-18-Math.min(8,d*30),"PASTE",q.mag,2,d>.5?(.75-d)/.25:1);const A=(.25+d*1.4)*B.HW*1.4,R=1-vn(d/.5);if(R>0){h.globalAlpha=R;for(let C=0;C<24;C++){const I=C/24*lr;Rh(h,w+Math.cos(I)*A,_+Math.sin(I)*A*.5,2,C&1?q.mag:q.w)}}}});for(let h=0;h<12;h++){const c=h/12*lr;E(r,o,.3+h%4*.25,Math.cos(c)*1.4,Math.sin(c)*1.4,.5,.4,h&1?q.mag:q.w,2,0,!0)}for(let h=0;h<6;h++)E(t,n,.3+h*.15,0,0,.4,.35,q.cy,2,0,!0);St(r,o,1.6,f0,.8,.3),St(t,n,1,Oo,.5,.25),Th(e)&&at(2),st.sfx("ab_glitch_Q_paste",r,o,1)}V.glitch_Q=e=>(e.type==="glitch_copy"?p4(e):e.type==="glitch_paste"&&y4(e),!0);V.glitch_W=e=>{if(typeof e.type=="string"&&e.type.startsWith("cast_")){const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=new Float32Array(6);for(let s=0;s<6;s++)i[s]=(s-2.5)*.22;const a=Math.atan2(n,t);T({type:"custom",layer:"top",dur:.28,x:r,y:o,draw(s,l){for(let u=0;u<6;u++){const f=.15+l*(.7+u%3*.2);we(r+Math.cos(a+i[u])*f,o+Math.sin(a+i[u])*f,.55+u%2*.12),c0(s,Ft,kt,4,ja[u%5],1-l)}}}),St(r,o,1,Fo,.6,.2)}return!0};Oe.glitch_W=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(t.id||0)*1.3,u=i*30|0;for(let h=1;h<=6;h++){const c=h*6,d=(H(u+h*7+l)-.5)*6|0;e.globalAlpha=1-h/7,e.fillStyle=ja[(h+u)%5],e.fillRect(K(n-a*c-s*d-2),K(r-s*c+a*d-2),h<3?4:2,h<3?4:2)}for(let h=0;h<4;h++){const c=i*9+h/4*lr;c0(e,n+Math.cos(c)*13,r+Math.sin(c)*6,4,ja[h+1],1)}c4(e,n,r,i*7+l,4,1);const f=i*12|0;t._lf!==f&&(t._lf=f,St(t.x,t.y,1,Fo,.55,.12))};V.glitch_W_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.3,x:t,y:n,draw(r,o){we(t,n,.5);const i=K(6+o*26);r.globalAlpha=1-o,r.fillStyle=q.w,o<.4&&r.fillRect(K(Ft-6*(1-o)),K(kt-6*(1-o)),K(12*(1-o)),K(12*(1-o))),r.fillStyle=q.mag,r.fillRect(Ft-i,kt-i,i*2,2),r.fillRect(Ft-i,kt+i-2,i*2,2),r.fillStyle=q.cy,r.fillRect(Ft-i,kt-i,2,i*2),r.fillRect(Ft+i-2,kt-i,2,i*2)}});for(let r=0;r<8;r++){const o=r/8*lr;E(t,n,.5,Math.cos(o)*1.6,Math.sin(o)*1.6,.8,.3,Ka[r%5],2,2,!0)}St(t,n,1.2,Fo,.7,.25)};V.glitch_ev_fragment_burst=e=>{const t=e.x,n=e.y,r=e.uid,o=Math.random()*lr,i=lt(r),a=i?ir(i):1,s=i?hc(i):null,l=i?h0(i,s):50,u=(s?(s.bx1-s.bx0)*a*.5:24)+6,f=14,h=new Float32Array(f),c=new Float32Array(f);for(let d=0;d<f;d++)h[d]=d/f*lr+H(d+o)*.4,c[d]=40+H(d*3+o)*50;T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(d,m){const p=m*.62,y=lt(r),x=y&&!y.dead?y.x:t,b=y&&!y.dead?y.y:n;we(x,b);const M=Ft,v=kt-l*.45;if(p<.12){const A=1-ri(p/.12);for(let R=0;R<5;R++){const C=o+R/5*lr+p*20;c0(d,M+Math.cos(C)*u*A,v+Math.sin(C)*u*.42*A,6,ja[R],1)}return}const w=(p-.12)/.5;if(y&&!y.dead&&w<.3){const A=Sa(y);A&&hr(d,A,wn(A,"white"),M,kt,ir(y),.9*(1-w/.3))}const _=K(6+w*34);d.globalAlpha=1-w,d.fillStyle=q.w,w<.25&&d.fillRect(K(M-10*(1-w*3)),K(v-10*(1-w*3)),K(20*(1-w*3))+1,K(20*(1-w*3))+1),d.fillStyle=q.w,d.fillRect(M-_,v-1,_*2,3),d.fillRect(M-1,v-_,3,_*2),d.fillStyle=q.mag,d.fillRect(M-_,v-_,_*2,2),d.fillRect(M-_,v+_-2,_*2,2),d.fillStyle=q.cy,d.fillRect(M-_,v-_,2,_*2),d.fillRect(M+_-2,v-_,2,_*2);for(let A=0;A<f;A++){const R=c[A]*w,C=60*w*w;d.globalAlpha=1-w,d.fillStyle=Ka[A%5];const I=A%3===0?4:2;d.fillRect(K(M+Math.cos(h[A])*R-I/2),K(v+Math.sin(h[A])*R*.6+C-I/2),I,I)}}}),T({type:"custom",layer:"ground",delay:.12,dur:.4,x:t,y:n,draw(d,m){we(t,n);const p=(.3+m*1.3)*B.HW*1.4;d.globalAlpha=1-m;for(let y=0;y<32;y++){const x=y/32*lr;Rh(d,Ft+Math.cos(x)*p,kt+Math.sin(x)*p*.5,2,ja[y%5])}}}),St(t,n,1.8,f0,.9,.3,{delay:.12}),St(t,n,1.4,Fo,.7,.4,{delay:.12}),(Th(e)||S.game&&S.game.player&&r===S.game.player.id)&&at(3),st.sfx("glitch_burst",t,n,1)};V.glitch_E=e=>{if(e.type!=="glitch_dup")return!0;const t=e.x,n=e.y,r=e.uid,o=lt(r),i=o?o.sprite:"glitch",a=o&&o.dir||0,s=o?ir(o):1,l=[];if(S.game)for(const h of S.game.units)!h.dead&&h.illusion&&h.heroKey==="glitch"&&(!e.team||h.team===e.team)&&Math.hypot(h.x-t,h.y-n)<2.2&&!_a.has(h.id)&&l.push(h.id);for(;l.length>2;)l.pop();const u=new Float32Array(2),f=new Float32Array(2);for(let h=0;h<2;h++){const c=l[h]?lt(l[h]):null,d=h*Math.PI+.6;u[h]=c?c.x:t+Math.cos(d)*1.1,f[h]=c?c.y:n+Math.sin(d)*1.1}T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(h,c){const d=c*.75,m=Gi(i,"idle",a,0);if(!m)return;we(t,n);const p=Ft,y=kt;if(d<.14){const x=K(d/.14*6);hr(h,m,wn(m,"red"),p,y,s,.8,-x),hr(h,m,wn(m,"cyan"),p,y,s,.8,x)}if(d>=.06&&d<.4){const x=ri(vn((d-.06)/.3)),b=S.T*30|0;for(let M=0;M<2;M++){const v=l[M]?lt(l[M]):null,w=v?v.x:u[M],_=v?v.y:f[M];we(t+(w-t)*x,n+(_-n)*x);const A=wn(m,M?"cyan":"red"),R=(m.by1-m.by0)/3;for(let C=0;C<3;C++){const I=m.by0+K(C*R),z=(H(b+C*5+M*11)-.5)*8*(1-x)|0;wa(h,m,A,Ft,kt,s,0,m.fw,I,K(I+R)+1,z,.85)}}}if(d>=.3){const x=(d-.3)/.45;for(let b=0;b<2;b++){const M=l[b]?lt(l[b]):null,v=M?M.x:u[b],w=M?M.y:f[b];we(v,w);const _=M&&Sa(M)||m;hr(h,_,wn(_,"white"),Ft,kt,s,.9*(1-vn(x*2.2)));const A=8+x*30;h.globalAlpha=1-x,h.fillStyle=b?q.cy:q.red;const R=kt-20;for(let C=-A;C<=A;C+=4)h.fillRect(K(Ft+C),K(R-A*.7),2,2),h.fillRect(K(Ft+C),K(R+A*.7),2,2);for(let C=-A*.7;C<=A*.7;C+=4)h.fillRect(K(Ft-A),K(R+C),2,2),h.fillRect(K(Ft+A),K(R+C),2,2)}}}});for(let h=0;h<2;h++){for(let c=0;c<8;c++)E(u[h],f[h],.2+c*.12,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2,.6,.45,c&1?h?q.cy:q.red:q.w,2,0,!0);St(u[h],f[h],1.1,h?Oo:15213130,.6,.35,{delay:.3})}St(t,n,1.3,f0,.6,.25)};V.glitch_petfade=e=>{let t=_a.has(e.uid);const n=lt(e.uid);if(!t&&n&&n.illusion&&n.heroKey==="glitch"&&(t=!0),!t)return!1;_a.delete(e.uid);const r=e.x,o=e.y,i=n?n.sprite:e.sprite,a=n?n.dir||0:e.dir||0,s=n?ir(n):1,l=Gi(i,"idle",a,0),u=56,f=new Float32Array(u),h=new Float32Array(u),c=new Float32Array(u),d=new Float32Array(u),m=[];let p=0;if(l){let y=0;for(let M=0;M<l.cells.length;M++)y+=l.cells[M];const x=Math.max(1,Math.floor(y/u));let b=0;for(let M=0;M<l.cells.length&&p<u;M++){if(!l.cells[M]||b++%x)continue;const v=M%l.cw,w=M/l.cw|0;f[p]=(v*2-l.ax)*s,h[p]=(w*2-l.ay)*s,c[p]=f[p]*1.2+(H(M)-.5)*40,d[p]=-20-H(M*3)*50;const _=l.cols[M];m.push(p%4===0?q.mag:p%4===1?q.cy:"#"+(16777216+_).toString(16).slice(1)),p++}}return T({type:"custom",layer:"top",dur:.85,x:r,y:o,draw(y,x){we(r,o);const b=x*.85;l&&b<.1&&hr(y,l,wn(l,"white"),Ft,kt,s,.9);for(let M=0;M<p;M++){const v=Math.max(0,b-.04-M%7*.012);y.globalAlpha=1-x,y.fillStyle=m[M],y.fillRect(K(Ft+f[M]+c[M]*v),K(kt+h[M]+d[M]*v-30*v*v),2*Math.max(1,K(s)),2*Math.max(1,K(s)))}}}),St(r,o,1,Oo,.5,.3),st.sfx("fade_glitch_E",r,o,.6),!0};V.glitch_R=e=>{if(e.type!=="delete_start")return!0;Li.set(e.uid,{uid:e.uid,tid:e.tid!==void 0&&e.tid!==0?e.tid:-1,x:e.x,y:e.y,t0:S.T,dur:e.dur||2,rx0:-26,ry0:-64,rx1:26,ry1:6,tx:e.x,ty:e.y}),e.tid&&Bs.delete(e.tid);const t=e.x,n=e.y;return T({type:"custom",layer:"top",dur:.22,x:t,y:n,draw(r,o){we(t,n,.5);const i=70*(1-ri(o))+22;r.globalAlpha=1-o*.5,r.fillStyle=q.w;for(const a of[-1,1])for(const s of[-1,1]){const l=K(Ft+a*i),u=K(kt+s*i*.9);r.fillRect(l-(a>0?8:0),u,8,2),r.fillRect(l,u-(s>0?8:0),2,8)}}}),St(t,n,1.6,Fo,.7,.4),st.sfx("ab_glitch_R_start",t,n,1),!0};V.glitch_ev_delete_cancel=e=>{const t=Li.get(e.uid);Li.delete(e.uid);const n=e.tid||(t?t.tid:-1);n>0&&Bs.set(n,S.T),Bs.size>60&&Bs.clear();let r=e.why;if(!r){const d=lt(e.uid);r=d&&Math.hypot(d.x-e.x,d.y-e.y)>8.2?"escape":"stun"}const o=e.x,i=e.y;let a=!1;if(n>0){const d=lt(n);a=!d||!!d.dead}else if(S.game){for(const d of S.game.heroes||[])if(d.dead&&Math.hypot(d.x-o,d.y-i)<1.2){a=!0;break}}const s=r==="escape",l=t?t.rx0:-26,u=t?t.ry0:-64,f=t?t.rx1:26,h=t?t.ry1:6,c=lt(e.uid);T({type:"custom",layer:"top",dur:.9,x:o,y:i,draw(d,m){const p=m*.9,y=n>0?lt(n):null;we(y&&!y.dead?y.x:o,y&&!y.dead?y.y:i);const x=Ft,b=kt,M=(p*24|0)%3!==0,v=1-vn((p-.25)/.35),w=ri(vn(p/.45))*22,_=90*p*p;if(v>0&&M){const A=x+l,R=x+f,C=b+u,I=b+h;d.globalAlpha=v;for(let z=A;z<R;z+=2)Mo(d,z,C-w+_*.3,2,z-A>>1,0),Mo(d,z,I+w+_,2,z-A>>1,0);for(let z=C;z<I;z+=2)Mo(d,A-w,z+_*.6,2,z-C>>1,0),Mo(d,R+w,z+_*.6,2,z-C>>1,0);br(d,A-w,C-w+_,2),br(d,R+w,C-w+_,2),br(d,A-w,I+w+_,2),br(d,R+w,I+w+_,2)}c&&!c.dead&&p<.35&&(we(c.x,c.y,.75),Ch(d,Ft,kt,x,b+(u+h)/2,7,2,0,q.cy,q.cyl,1-p/.35,0,1-p/.35)),a||Qa(d,x,b+u-34-p*16,s?"ESCAPED!":"CANCELED",s?q.lime:q.yel,2,p>.6?(.9-p)/.3:1)}});for(let d=0;d<8;d++)E(o+(Math.random()-.5)*.6,i+(Math.random()-.5)*.6,.3+Math.random()*.8,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5,.5,.4,d&1?q.w:q.cy,2,3,!1);return st.sfx("glitch_cancel",o,i,.9),!0};let Ep=-9,kp=0,Lp=0;V.glitch_ev_delete_done=e=>{const t=Li.get(e.uid);Li.delete(e.uid);const n=e.tid||(t?t.tid:-1),r=e.x,o=e.y,i=e.killed!==void 0?!!e.killed:S.T-Ep<.1&&Math.hypot(kp-r,Lp-o)<1.5,a=t?t.rx0:-26,s=t?t.ry0:-64,l=t?t.rx1:26,u=t?t.ry1:6;T({type:"custom",layer:"top",dur:.45,x:r,y:o,draw(f,h){const c=n>0?lt(n):null,d=c&&!c.dead;we(d?c.x:r,d?c.y:o);const m=Ft,p=kt,y=ri(vn(h/.4)),x=m+(a+l)/2,b=p+(s+u)/2;if(i||Uu(f,x+(a-(a+l)/2)*(1-y),b+(s-(s+u)/2)*(1-y),x+(l-(a+l)/2)*(1-y),b+(u-(s+u)/2)*(1-y),2,0,1-h,!1),d&&h<.5){const v=Sa(c);v&&hr(f,v,wn(v,"white"),m,p,ir(c),1-h*2)}const M=K(4+h*30);f.globalAlpha=1-h,f.fillStyle=q.w,f.fillRect(K(x-M),K(b-1),M*2,3),f.fillRect(K(x-1),K(b-M),3,M*2)}});for(let f=0;f<16;f++){const h=f/16*lr;E(r,o,.5+f%3*.2,Math.cos(h)*2.4,Math.sin(h)*2.4,1.2,.5,Ka[f%5],f%4===0?4:2,4,!0)}return St(r,o,2,f0,.95,.3),St(r,o,1.6,Fo,.8,.5),at(Th(e)?5:2),st.sfx("glitch_delete",r,o,1),!0};V.glitch_death=e=>{let t=!!e.erased;if(!t&&S.game){for(const f of S.game.fx)if(!f.done&&f.type==="delete_done"&&f.hero==="glitch"&&Math.hypot(f.x-e.x,f.y-e.y)<1.5){t=!0;break}}if(!t)return!1;Ep=S.T,kp=e.x,Lp=e.y;const n=e.x,r=e.y,o=e.scale||1,i=e.sprite?Gi(e.sprite,"idle",e.dir||0,0):null,a=(lt(e.uid)||{}).heroKey||e.sprite;a&&st.babble(a,"die",n,r),st.sfx("death",n,r,.7);const s=i?i.bx1-i.bx0>>1:0,l=new Uint8Array(Math.max(1,s));let u=0;if(T({type:"custom",layer:"top",dur:2.4,x:n,y:r,draw(f,h){const c=h*2.4;we(n,r);const d=Ft,m=kt+20*Math.min(c,.8);if(i){const p=vn((c-.8)/.8),y=i.bx0+K((i.bx1-i.bx0)*p/2)*2;if(wa(f,i,null,d,m,o,y,i.fw,0,i.fh,0,1),c<.8&&wa(f,i,wn(i,"scan"),d,m,o,y,i.fw,0,i.fh,0,.35+.15*Math.sin(c*30)),c<.3&&hr(f,i,wn(i,"white"),d,m,o,1-c/.3),p>0&&p<1){const w=d+(y-i.ax)*o;f.globalAlpha=1,f.fillStyle=(c*30|0)&1?q.cyl:q.w,f.fillRect(K(w-1),K(m+(i.by0-i.ay)*o),2,K((i.by1-i.by0)*o));const _=y-i.bx0>>1;for(let A=0;A<_&&A<l.length;A++){if(l[A]||u>=72)continue;l[A]=1;const R=(i.bx0>>1)+A;let C=-1,I=-1;for(let F=0;F<i.ch;F++)i.cells[F*i.cw+R]&&(C<0&&(C=F),I=F);if(C<0)continue;const z=(R*2-i.ax)*o;for(let F=0;F<3&&u<72;F++){const U=C+(H(A*3+F+n)*(I-C+1)|0),G=((i.ay-U*2)*o-16)/B.ZK;E(n+z/(2*B.HW),r-z/(2*B.HW),Math.max(0,G),(Math.random()-.5)*.4,(Math.random()-.5)*.4,1.2+Math.random()*1.4,.9+Math.random()*.6,Ka[(A+F)%5],F?2:3,-.6,!0),u++}}}const x=m+(i.by0-i.ay)*o-6,b=m+(i.by1-i.ay)*o+4,M=d+(i.bx1-i.ax)*o+6,v=d+(y-i.ax)*o-6;p<1?Uu(f,v,x,M,b,2,S.T*16|0,c<.8?1:.9,c<.8):Uu(f,M-8-10*vn((c-1.6)/.2),x,M,b,2,0,1-vn((c-1.6)/.25),!1),c>.8&&Qa(f,d+((i.bx0+i.bx1)/2-i.ax)*o,x-16-Math.min(6,(c-.8)*20),"DELETED",q.mag,2,c>2?(2.4-c)/.4:1)}else c>.3&&Qa(f,d,m-70,"DELETED",q.mag,2,c>2?(2.4-c)/.4:1)}}),!i)for(let f=0;f<30;f++)E(n+(Math.random()-.5)*.5,r+(Math.random()-.5)*.5,Math.random()*1.2,0,0,1.5+Math.random(),1,Ka[f%5],2,-.5,!0);return St(n,r,1.8,Fo,.8,1.6),!0};Oe.glitch_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=i*40|0;for(let f=1;f<=4;f++){const h=f*5+(l&1)*2;e.globalAlpha=1-f/5,e.fillStyle=f&1?q.cy:q.cyl,e.fillRect(K(n-a*h-2),K(r-s*h-1),4,2)}e.globalAlpha=.85,e.fillStyle=q.mag,e.fillRect(K(n-a*3-3),K(r-s*3-3),6,6),e.globalAlpha=1,e.fillStyle=q.cy,e.fillRect(K(n-4),K(r-4),8,8),e.fillStyle=q.w,e.fillRect(K(n-2),K(r-2),4,4),l>>2&3||(e.fillStyle=q.w,e.fillRect(K(n+4),K(r-6),2,2));const u=i*12|0;t._lf!==u&&(t._lf=u,St(t.x,t.y,.8,Oo,.45,.12))};Ge.glitch=e=>{const t=e.x,n=e.y,r=!!e.big;T({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){we(t,n,.45);const a=K((r?16:11)*(1-i))+2;if(o.globalAlpha=1-i,o.fillStyle=q.mag,o.fillRect(Ft-a-2,kt-a,a*2,2),o.fillRect(Ft-a-2,kt+a-2,a*2,2),o.fillStyle=q.cy,o.fillRect(Ft-a,kt-a,2,a*2),o.fillRect(Ft+a-2,kt-a,2,a*2),o.fillRect(Ft-a,kt-a,a*2,2),o.fillRect(Ft-a,kt+a-2,a*2,2),o.fillStyle=q.w,o.fillRect(Ft-1,kt-5,2,10),o.fillRect(Ft-5,kt-1,10,2),r)for(let s=0;s<4;s++){const l=s/4*lr+.785,u=6+i*18;o.fillRect(K(Ft+Math.cos(l)*u-1),K(kt+Math.sin(l)*u-1),3,3)}}});for(let o=0;o<(r?6:3);o++)E(t,n,.45,(Math.random()-.5)*1.6,(Math.random()-.5)*1.6,.6,.25,Ka[o%5],2,2,!0);St(t,n,r?1.1:.8,Oo,r?.6:.4,.18)};const Nt=Math.round,Le=Math.PI*2;let Dt=0,Ut=0;function Me(e,t,n=0){Dt=(e-t)*B.HW+B.OX,Ut=(e+t)*B.HH-n*B.ZK}function Dn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Nt(t-r/2),Nt(n-r/2),r,r)}function Ri(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Nt(t+(r-t)*l/s-i/2),Nt(n+(o-n)*l/s-i/2),i,i)}function Mi(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Nt(t-a/2),Nt(n+i*o),Nt(a),Math.max(1,Nt(2*o)))}}const Vo=e=>e<0?0:e>1?1:e,Ro=e=>1-(1-e)*(1-e),nt={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},Yi=new Float32Array(72),ji=new Float32Array(72);function Dr(e,t,n,r,o,i,a,s,l,u,f,h,c){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,y=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let v=0;v<=y;v++){const w=v/y,_=v===0||v===y?0:(H(s+v*7.31)-.5)*2*a*Math.sqrt(Math.sin(w*Math.PI));Yi[v]=t+d*w+x*_,ji[v]=n+m*w+b*_}if(f>0)for(let v=0;v<y;v++)Ri(e,Yi[v],ji[v],Yi[v+1],ji[v+1],f,l);for(let v=0;v<y;v++)Ri(e,Yi[v],ji[v],Yi[v+1],ji[v+1],h,u);const M=Math.atan2(m,d);for(let v=0;v<c;v++){const w=1+Math.floor(H(s+v*3.7+50)*Math.max(1,y-1));let _=Yi[w],A=ji[w],R=M+(H(s+v*9.1)>.5?1:-1)*(.45+H(s+v*1.3)*.6);for(let C=0;C<3;C++){const I=i*(1-C*.2),z=_+Math.cos(R)*I,F=A+Math.sin(R)*I;Ri(e,_,A,z,F,Math.max(1,h-1),C?l:u),_=z,A=F,R+=(H(s+v*5+C)-.5)*1.3}}}function Xu(e,t,n,r,o,i,a,s){let l=t,u=n,f=r;for(let h=0;h<5;h++){f+=(H(o+h)-.5)*.9;const c=i*(1-h*.13),d=l+Math.cos(f)*c,m=u+Math.sin(f)*c*.5;if(Ri(e,l,u,d,m,2,a),H(o+h*3.3)>.45){const p=f+(H(o+h*7)>.5?.85:-.85);Ri(e,d,m,d+Math.cos(p)*c*.6,m+Math.sin(p)*c*.3,2,a)}l=d,u=m}s&&Dn(e,l,u,3,s)}function Gu(e,t,n,r,o){e.fillStyle=nt.cloudD,e.fillRect(Nt(t-3*r),Nt(n-r),6*r,2*r),e.fillStyle=o?nt.cloudL:nt.cloud,e.fillRect(Nt(t-2*r),Nt(n-2*r),4*r,2*r),e.fillStyle=o?nt.pale:nt.cloudM,e.fillRect(Nt(t-r),Nt(n-2.6*r),2*r,Nt(r*.8))}V.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;T({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){Me(t,n,.6);const a=Dt,s=Ut,l=S.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=H(r+u+l*3)*Le,h=10+H(r+u*2+l)*14;Dr(o,a,s,a+Math.cos(f)*h,s+Math.sin(f)*h*.7,5,3,r+u*11+l,nt.cyan,nt.white,0,1,0)}Dn(o,a,s,Nt(8*(1-i))+2,nt.white)}});for(let o=0;o<8;o++)E(t,n,.6,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.25,o&1?nt.cyan:nt.white,2,3,!0)};const Cl=new Map;Oe.halcon_Q=(e,t,n,r,o,i)=>{let a=t.id!=null?Cl.get(t.id):void 0;t.id!=null&&!a&&(Cl.size>64&&Cl.clear(),a=[t.x,t.y],Cl.set(t.id,a));const s=Math.cos(o),l=Math.sin(o),u=150;let f=n-s*u,h=r-l*u;vt(!0);const c=$t();if(a){Me(a[0],a[1],t.z||.45);const p=Math.hypot(n-Dt,r-Ut);if(p<u)f=Dt,h=Ut;else{c.globalAlpha=.4,c.fillStyle=nt.blue;const y=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<y;b++){if(H(b*3.1+x)<.35)continue;const M=(u+b*9)/p;c.fillRect(Nt(n+(Dt-n)*M),Nt(r+(Ut-r)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;c.globalAlpha=.16,c.fillStyle=nt.blue,Mi(c,n,r,18),c.globalAlpha=1,Dr(c,n,r,f,h,11,7,d,nt.cyan,nt.white,4,2,2);const m=5+((i*30|0)&1)*3;c.fillStyle=nt.pale,c.fillRect(Nt(n-m),Nt(r-1),m*2,2),c.fillRect(Nt(n-1),Nt(r-m),2,m*2),c.fillStyle=nt.white,c.fillRect(Nt(n-3),Nt(r-3),6,6),vt(!1)};V.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Le;T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){Me(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)Xu(i,Dt,Ut,o+s*Le/6,r+s*13,9,nt.scorch)}}),T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){Me(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)Xu(i,Dt,Ut,o+s*Le/6,r+s*13,9,nt.cyan,nt.white)}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){Me(t,n,.5);const s=S.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=H(r+l*5+s)*Le,f=18+H(r+l+s*2)*16;Dr(i,Dt,Ut-6,Dt+Math.cos(u)*f,Ut+Math.sin(u)*f*.6,6,4,r+s*7+l,nt.blue,nt.pale,3,1,0)}a<.3&&Dn(i,Dt,Ut,Nt(22*(1-a/.3))+2,nt.white)}});for(let i=0;i<12;i++)E(t,n,.5,g(-2.2,2.2),g(-2.2,2.2),g(1,2.6),g(.25,.45),i%3?nt.cyan:nt.yel,2,7,!0,.9);at(2)};const tu=new Map;V.halcon_W=e=>{if(e.type==="splash"||e.impact){g4(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;Me(t,n);const a=Dt,s=Ut;Me(r,o);const l=Math.hypot(Dt-a,Ut-s)||1,u=(Dt-a)/l,f=(Ut-s)/l;tu.size>32&&tu.clear(),tu.set(e.uid,[u,f]);for(let h=0;h<8;h++)E(t,n,.7,g(-1,1),g(-1,1),g(1,2.5),g(.6,.9),h%3?nt.featherL:nt.cream,3,1.2,!1,.9);T({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(h,c){Me(r,o);const d=Dt,m=Ut,p=64*(1-Ro(c))+24,y=c*2.6;h.globalAlpha=.5+.5*c;const x=c>.75&&(S.T*20|0)&1?nt.white:nt.cyan;for(let b=0;b<4;b++){const M=y+b*Le/4;for(let v=-3;v<=3;v++){const w=M+v*.09;Dn(h,d+Math.cos(w)*p,m+Math.sin(w)*p*.5,3,x)}for(let v=1;v<=2;v++)Dn(h,d+Math.cos(M)*(p-v*5),m+Math.sin(M)*(p-v*5)*.5,2,nt.white)}Dn(h,d,m,3,nt.white)}}),T({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(h,c){const d=Vo(c*(i+.15)/i),m=-f,p=u;for(let y=0;y<12;y++){const x=d-y*.035;if(x<0)break;Me(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,M=Dt,v=Ut-b,w=1-y/12;h.globalAlpha=w*(c>.8?(1-c)/.2:1);for(const _ of[-1,1]){const A=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;Dn(h,M+m*A*_+R,v+p*A*_-Math.sin(x*34)*3,y<3?3:2,y<4?nt.white:nt.pale)}y%3===0&&(h.fillStyle=nt.cyan,h.fillRect(Nt(M-u*10),Nt(v-f*10),2,2))}}})};function g4(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=tu.get(e.uid)||[0,1];T({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){Me(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*Le+H(o+l)*.5,f=r*B.HW*(.5+H(o+l*3)*.4);Ri(a,Dt,Ut,Dt+Math.cos(u)*f*.6,Ut+Math.sin(u)*f*.3,2,nt.ash),Ri(a,Dt+Math.cos(u)*f*.6,Ut+Math.sin(u)*f*.3,Dt+Math.cos(u+.25)*f,Ut+Math.sin(u+.25)*f*.5,2,nt.ash)}Dn(a,Dt,Ut,8,nt.ash)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=S.T*30|0;for(let f=0;f<2;f++){const h=Vo(s*1.4-f*.2);if(h<=0||h>=1)continue;const c=.2+r*1.1*Ro(h);a.globalAlpha=1-h;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*Le;Me(t+Math.cos(m)*c,n+Math.sin(m)*c),Dn(a,Dt,Ut,f?2:3,f?nt.pale:nt.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const h=f/u*Le+s*.8,c=(f+1)/u*Le+s*.8;Me(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85);const d=Dt,m=Ut;Me(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85),Dr(a,d,m-4,Dt,Ut-4,7,4,o+f*9+l,nt.blue,nt.pale,0,2,0),Dn(a,d,m-4,4,nt.white)}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+r*1.3*Ro(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*Le+.2;Me(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const h=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let c=-2;c<=2;c++){const d=h+c*.35,m=9-Math.abs(c);Dn(a,Dt-Math.cos(h)*6+Math.cos(d)*m,Ut-Math.sin(h)*6+Math.sin(d)*m,c?2:3,c?nt.pale:nt.white)}}s<.2&&(a.globalAlpha=1-s/.2,Me(t,n,.2),a.fillStyle=nt.white,Mi(a,Dt+i[0]*6,Ut+i[1]*6,Nt(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*Le,l=g(1.5,3.5);E(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,g(.5,1.6),g(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)E(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1.5,2.5),g(.8,1.1),a&1?nt.featherL:nt.feather,3,1.5,!1,.92);at(6)}V.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,a,s){const l=lt(s.uid);Me(l?l.x:n,l?l.y:r,.8);const u=Dt,f=Ut,h=Ro(Vo(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const c of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+c*(.3+h*(.45+d*.24)),p=16+d*5+h*10;for(let y=6;y<p;y+=3){const x=y>p-6;Dn(i,u+Math.cos(m)*y*1.25,f+Math.sin(m)*y*.8+y/p*h*9,x?2:3,x?nt.white:d&1?nt.pale:nt.cyan)}}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,a){const s=.5+(o-.5)*Ro(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*Le+a*1.6;for(let f=0;f<3;f++){const h=u+f*.07;Me(n+Math.cos(h)*s,r+Math.sin(h)*s),Dn(i,Dt,Ut,3-f,f?nt.pale:nt.white)}}}})}for(let n=0;n<5;n++){const r=n/5*Le;E(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,g(.8,1.5),.4,n&1?nt.pale:nt.white,2,0,!0)}T({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=lt(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const a=i.x-o.lx,s=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const h=Math.hypot(o.dx,o.dy),c=r*o.dur;n.globalAlpha=Math.min(1,c/.15)*(c>o.dur-.4?(o.dur-c)/.4:1),Me(i.x,i.y,.45);const d=Dt,m=Ut;if(h>.35){const p=o.dx/h,y=o.dy/h,x=S.T*70%11;for(let v=0;v<3;v++){const w=14+v*11+x,_=d-p*w,A=m-y*w,R=v===0?nt.white:v===1?nt.pale:nt.cyan;for(const C of[-1,1]){const I=Math.cos(C*.75),z=Math.sin(C*.75),F=-(p*I-y*z),U=-(p*z+y*I);for(let G=0;G<4;G++)Dn(n,_+F*G*3,A+U*G*3,2,R)}}const b=-y,M=p;for(const v of[-1,1])for(let w=0;w<6;w++){const _=10+w*5+S.T*90%5;(w+(v>0?1:0))%3!==0&&(n.fillStyle=nt.pale,n.fillRect(Nt(d-p*_+b*12*v),Nt(m-y*_+M*12*v),2,1))}}else for(let p=0;p<3;p++){const y=S.T*5+p*Le/3;Dn(n,d+Math.cos(y)*14,m+14+Math.sin(y)*6,2,p?nt.pale:nt.white)}}})};const Pl=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],so=(()=>{const e=[],t=[],n=[],r=Pl.length,o=(i,a)=>a>=0&&a<r&&i>=0&&i<Pl[a].length&&Pl[a][i]!==".";return Pl.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:o(s-1,a)&&o(s+1,a)&&o(s,a-1)&&o(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();V.halcon_R=e=>{if(e.type==="global_hit"){x4(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,a){Me(t,n,3);const s=Dt,l=Ut,u=30+60*Ro(Vo(a*2)),f=S.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let h=0;h<9;h++){const c=h/9*Le+a*3.2;Gu(i,s+Math.cos(c)*u,l+Math.sin(c)*u*.38,5+h%3,H(r+h+f)>.8)}Gu(i,s,l,7,H(r+f)>.7)}}),T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,a,s){const l=lt(s.uid),u=l?l.x:t,f=l?l.y:n;Me(t,n,3);const h=Dt,c=Ut,d=30+60*Ro(Vo(a*2)),m=S.T*15|0,p=a>.75?(1-a)/.25:1;if(i.globalAlpha=p,H(r+m*1.7)>.45){const x=H(r+m)*Le,b=x+1.2+H(r+m*3)*2;Dr(i,h+Math.cos(x)*d,c+Math.sin(x)*d*.38,h+Math.cos(b)*d,c+Math.sin(b)*d*.38,9,6,r+m,nt.blue,nt.pale,3,1,1)}const y=a*o;if(y>.25&&y<.55&&(y*25|0)%3!==2&&(Me(u,f,1),Dr(i,h,c+8,Dt,Ut,12,10,r+(y*25|0),nt.blue,nt.white,5,2,2)),y>.3){const x=Vo((y-.3)/.35),b=Nt(2+2*Ro(x)),M=(S.T*24|0)%5===0?.5:1;Me(u,f,2.2+x*.4);const v=Dt,w=Ut;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?nt.indigo:_===1?nt.cyan:nt.yel;for(let A=0;A<so.n;A++)so.K[A]===_&&i.fillRect(Nt(v+so.X[A]*b-b/2),Nt(w+so.Y[A]*b-b/2),b,b)}i.fillStyle=nt.white;for(let _=0;_<so.n;_++)so.K[_]===1&&so.Y[_]<-2&&i.fillRect(Nt(v+so.X[_]*b-1),Nt(w+so.Y[_]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*Le,s=g(2,3);E(t+Math.cos(a)*s,n+Math.sin(a)*s,g(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,g(.5,1.2),.6,i%3?nt.pale:nt.cloudL,2,0,i%3!==0,.97)}at(5)};function x4(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Le;st.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};T({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,h=Ro(Vo(f/.12));Me(t,n,3.6);const c=Dt,d=Ut,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const y=p/6*Le+r;Gu(l,c+Math.cos(y)*38*h,d+Math.sin(y)*12*h,Nt(4+2*h),m&&p%2===0)}Gu(l,c,d,Nt(5+3*h),m)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,h=s(f);Me(t,n,3.5);const c=Dt+(H(r)-.5)*30,d=Ut;if(Me(t,n,.1),h){const m=r+h*31;l.globalAlpha=.45,Dr(l,c,d,Dt,Ut,16,22,m,nt.indigo,nt.blue,0,9,0),l.globalAlpha=1,Dr(l,c,d,Dt,Ut,16,22,m,nt.cyan,nt.white,6,3,3),l.globalAlpha=h===1?.35:.18,l.fillStyle=nt.pale,Mi(l,Dt,Ut-20,70,.6)}if(f>.1){const m=Vo((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=nt.cyan,Mi(l,Dt,Ut,Nt(26*(1-m*.5)),.5),l.fillStyle=nt.white,Mi(l,Dt,Ut,Nt(12*(1-m)),.5)}}}),T({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){Me(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=nt.scorch,Mi(l,Dt,Ut,16,.5);for(let f=0;f<8;f++)Xu(l,Dt,Ut,o+f*Le/8,r+f*17,13,nt.scorch)}}),T({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){Me(t,n);const f=S.T*25|0;l.globalAlpha=1-u;for(let h=0;h<8;h++)Xu(l,Dt,Ut,o+h*Le/8,r+h*17,13,h&1?nt.blue:nt.cyan,nt.white);for(let h=0;h<3;h++){const c=H(r+h+f)*Le,d=30+u*60;Dr(l,Dt,Ut,Dt+Math.cos(c)*d,Ut+Math.sin(c)*d*.5,7,5,r+f*3+h,nt.blue,nt.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*Le,f=g(1.5,4);E(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,g(2,4),g(.4,.8),l%3===0?nt.yel:l%3===1?nt.cyan:nt.ash,l%3===2?3:2,8,l%3!==2,.92)}at(8)}Oe.halcon_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;for(let c=0;c<=16;c+=2){const d=c<3?0:c<12?3:2,m=n-a*c,p=r-s*c;for(let y=-d;y<=d;y+=2){const x=Math.abs(y)>=d&&d>0,b=(c===8||c===12)&&y!==0;e.fillStyle=y===0?nt.white:b?nt.feather:x?nt.cyan:nt.pale,e.fillRect(Nt(m+l*y-1),Nt(p+u*y-1),2,2)}}vt(!0);const f=$t(),h=i*24|0;f.globalAlpha=.2,f.fillStyle=nt.blue,Mi(f,n-a*6,r-s*6,12),f.globalAlpha=1;for(let c=0;c<2;c++){const d=4+H(h+c*3+(t.id||0))*10,m=c?1:-1,p=n-a*d,y=r-s*d;Dr(f,p,y,p+l*m*9-a*6,y+u*m*9-s*6,4,2,h*7+c,nt.cyan,nt.white,0,1,0)}f.fillStyle=nt.white,f.fillRect(Nt(n-2),Nt(r-2),4,4),vt(!1)};Ge.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;T({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(a,s){Me(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;Dr(a,Dt,Ut,Dt+Math.cos(u)*i*(.6+s*.5),Ut+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,o+l,nt.cyan,nt.white,0,2,0)}Dn(a,Dt,Ut,Nt((r?10:6)*(1-s))+2,nt.white)}});for(let a=0;a<(r?8:4);a++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(.5,1.5),.25,a&1?nt.yel:nt.cyan,2,5,!0)};let Yt=0,jt=0;function Ze(e,t,n=0){Yt=(e-t)*B.HW+B.OX,jt=(e+t)*B.HH-n*B.ZK}function Ur(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const mo=e=>e<0?0:e>1?1:e,Za=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),Kr=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Ji=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Qr=["#8a6a48","#5a3a20","#3a2414"],Do=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],tr=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function Dp(e,t){const n=[],r=[],o=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function dc(e,t,n,r,o,i,a=-1){const s=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*o,l+t.y[f]*o,o,o)}}const M4=Dp(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),b4=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],m1=Dp(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),p1=[tr[3],tr[2],tr[0],"#4a2a6a","#e0d8f0","#a898c0"],ps=new Map;function v4(e,t){if(e.id==null)return;let n=ps.get(e.id);if(!n){ps.size>200&&ps.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},ps.set(e.id,n);const r=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,a){if(a.fin)return;const s=S.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,ps.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}V.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,h=u===0?0:r*g(.45,.9);i[u*4]=t+Math.cos(f)*h,i[u*4+1]=n+Math.sin(f)*h,i[u*4+2]=u===0?12:g(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,h=Math.sqrt(Math.random())*r*.95;s[u]=t+Math.cos(f)*h,l[u]=n+Math.sin(f)*h}T({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const h=f*2.2;for(let c=0;c<a;c++){const d=mo((h-.2-c%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Ze(s[c],l[c]),u.globalAlpha=d*.75,u.fillStyle=Kr[1+c%3],u.fillRect(Math.round(Yt),Math.round(jt),c%3?3:4,2))}u.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,h){const c=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,y=i[d*4+2];if(Ze(i[d*4],i[d*4+1]),c<m){if(c<p)continue;const M=Za(mo((c-p)/.13)),v=y*M*(1+.12*Math.sin(c*60+d)),w=Math.max(1,Math.round(v*2/3));for(let _=0;_<w;_++){const A=(_+.5)/w*2-1,R=v*2*Math.sqrt(1-A*A);u.fillStyle=_===0?Ji[0]:A<.3?Ji[1]:Ji[2],u.fillRect(Math.round(Yt-R/2),Math.round(jt-v*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=Ji[3],u.fillRect(Math.round(Yt-v*.2),Math.round(jt-v*2-2),3,3);continue}if(!(h.popped&1<<d)){h.popped|=1<<d;for(let M=0;M<4;M++)E(i[d*4],i[d*4+1],.25,g(-.6,.6),g(-.6,.6),g(.4,1.1),g(.9,1.4),Kr[M%3],3,.25,!1,.92)}const x=(c-m)/.35;if(x>=1)continue;const b=y*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const v=M/8*6.28+d;u.fillStyle=Kr[M&1?1:2],Ur(u,Yt+Math.cos(v)*b,jt-y+Math.sin(v)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=Ji[0];for(let M=0;M<3;M++)Ur(u,Yt+(M-1)*y*.6,jt-y-x*8-(M&1)*4,y*(.8+x*.6));u.globalAlpha=1}}}),at(2)};V.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;T({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?Za(l/.2):l>.8?(1-l)/.2:1,h=3;Ze(i,a,1.35);const c=Yt,d=jt,m=[4,8,10,12,12];for(let p=0;p<5;p++){const y=Math.round(m[p]*f)*h;y<=0||(s.fillStyle=p===0?Do[1]:Do[2],s.fillRect(Math.round(c-y/2),Math.round(d+(p-5)*h*f),y,Math.max(1,Math.round(h*f))))}s.fillStyle=Do[3],s.fillRect(Math.round(c-6*h*f),Math.round(d),Math.round(12*h*f),2),s.fillStyle=Do[0],Ur(s,c-3*h*f,d-3*h*f,3*f),Ur(s,c+2*h*f,d-2*h*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,E(i+g(-.25,.25),a+g(-.25,.25),1.25,0,0,0,.5,u.drops&1?Do[0]:Do[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;T({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=S.T;for(let f=0;f<o;f++){const h=f*.035,c=l-h;if(c<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let w=0;w<2;w++)E(m,p,.2,g(-.2,.2),g(-.2,.2),g(.8,1.6),g(.7,1.1),Do[w],2,0,!0,.95)}const y=Za(mo(c/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*y*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,v=Math.round(Math.sin(u*6+f)*2);Ze(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round(Yt-9),Math.round(jt-1),18,3),i.globalAlpha=1,dc(i,M4,Yt+v,jt-M,b,b4)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;Ze(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=Do[u%3+1],Ur(i,Yt,jt,u%3?3:4)}}})};V.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){Ze(t,n),r.globalAlpha=1-o,r.fillStyle=Qr[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)Ur(r,Yt+Math.cos(a+s*.25)*s*3.5,jt+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)E(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(1.5,3),g(.4,.6),Qr[r%3],3,9,!1,.95)};const y1=10;Oe.hongo_E=(e,t,n,r,o,i)=>{v4(t,w4);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;Ze(t.x,t.y),e.fillStyle=Qr[1],e.fillRect(Math.round(Yt-8),Math.round(jt-1),16,4),e.fillStyle=Qr[0],e.fillRect(Math.round(Yt-5),Math.round(jt-2),10,2);for(let u=y1-1;u>=0;u--){const f=t.x+s*u*.17,h=t.y+l*u*.17,c=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/y1);Ze(f,h,c);const d=7-u*.45;e.fillStyle=Qr[2],Ur(e,Yt,jt+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",Ur(e,Yt,jt,d),e.fillStyle="#a07040",e.fillRect(Math.round(Yt-d/4),Math.round(jt-d/2),2,1),(u===3||u===7)&&(e.fillStyle=Kr[2],e.fillRect(Math.round(Yt+d/2),Math.round(jt-d/2-1),2,2))}Ze(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=Kr[3],e.fillRect(Math.round(Yt-2),Math.round(jt-6),4,7),e.fillStyle=Kr[1],e.fillRect(Math.round(Yt-6),Math.round(jt-6),4,2),e.fillRect(Math.round(Yt+2),Math.round(jt-8),4,2),e.fillStyle=Kr[0],e.fillRect(Math.round(Yt-1),Math.round(jt-8),2,2),Math.random()<.35&&E(t.x,t.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,Qr[Math.random()*3|0],2,7,!1,.95)};function w4(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)E(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1),.5,a&1?Qr[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(a,s){const l=s*r,u=l<.18?Za(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const h=i+f/o*6.28,c=Math.cos(h),d=Math.sin(h);Ze(t+c*.55,n+d*.55,0);const m=Yt,p=jt;Ze(t+c*.8,n+d*.8,.55);const y=Yt,x=jt;Ze(t+c*.12,n+d*.12,.75);const b=Yt,M=jt,v=Math.min(10,Math.round(10*u));for(let w=0;w<=v;w++){const _=w/10,A=1-_,R=A*A*m+2*A*_*y+_*_*b,C=A*A*p+2*A*_*x+_*_*M,I=6-_*4;a.fillStyle=Qr[2],Ur(a,R,C+1,I+2),a.fillStyle=w&1?"#7a5030":"#6a4428",Ur(a,R,C,I),(w===4||w===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(R+(f&1?3:-5)),Math.round(C-1),2,2))}}}});for(let a=0;a<12;a++)E(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3.2),g(.4,.7),Qr[a%3],3,9,!1,.95);at(2)}V.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let p=0;p<13;p++){let y=null;for(let x=0;x<8&&!y;x++){const b=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*r*.88,v=t+Math.cos(b)*M,w=n+Math.sin(b)*M;a.every(_=>Math.hypot(_.x-v,_.y-w)>.7)&&(y={x:v,y:w,cs:p===0?4:Math.random()<.5?3:2,ts:M/r*.5})}y&&a.push(y)}a.sort((p,y)=>p.x+p.y-(y.x+y.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let p=0;p<s;p++){let y=1e9;for(let x=0;x<s;x++)if(x!==p){const b=Math.hypot(a[p].x-a[x].x,a[p].y-a[x].y);b<y&&(y=b,l[p]=x)}}T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y){const x=y*i,b=mo((x-.1)/.5),M=y>.88?(1-y)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let v=0;v<s;v++){const w=l[v];if(w<0)continue;Ze(a[v].x,a[v].y);const _=Yt,A=jt;Ze(a[w].x,a[w].y);const R=Math.hypot(Yt-_,jt-A),C=Math.round(R/6*b);for(let I=0;I<=C;I++){const z=I*6/R;p.fillRect(Math.round(_+(Yt-_)*z),Math.round(A+(jt-A)*z+Math.sin(I*1.7+v)*2),2,2)}}p.globalAlpha=1}});const u=(p,y,x)=>{const b=Za(mo((y-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*b*M))};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(let b=0;b<s;b++){const M=a[b],v=u(M,x,y);v<=0||(Ze(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round(Yt-v*4),Math.round(jt-1),v*8,3),dc(p,m1,Yt+Math.round(Math.sin(S.T*2+b)*v*.4),jt,v,p1))}}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,y,x){const b=y*i;for(let M=0;M<s;M++){const v=a[M],w=u(v,b,y);w<=0||(Ze(v.x,v.y),p.globalAlpha=.45+.4*Math.sin(S.T*5+M*1.9),dc(p,m1,Yt+Math.round(Math.sin(S.T*2+M)*w*.4),jt,w,p1,2),p.globalAlpha=.18,p.fillStyle=tr[1],p.fillRect(Math.round(Yt-w*4),Math.round(jt-w*9),w*8,w*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,b-x.last),x.last=b;x.acc>.085&&x.puffs<46&&y<.88;){x.acc-=.085,x.puffs++;const M=a[Math.random()*s|0];E(M.x+g(-.1,.1),M.y+g(-.1,.1),.12*M.cs*1.6,g(-.25,.25),g(-.25,.25),g(.5,1),g(.9,1.3),x.puffs&1?tr[0]:Kr[1],2,.15,!0,.97)}}});const f=Xi(e,i-.3),h=()=>S.T-f.t0,c=Array.from({length:11},(p,y)=>({a:y/11*6.283+g(-.2,.2),ph:y===0?1.45:g(.25,1.1),s:g(4,8),p:Math.random()*6})),d={g:0,out:0,zc:0,un:0},m=p=>{const y=h();return d.out=mo(p/.4),d.g=Za(mo(y/.45))*(.6+.4*d.out),d.zc=S4*(.25+.75*mo(y/.45))*(.7+.3*d.out),d.un=mo((y-.3)/.5)*d.out,d};T({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,y,x){const b=zn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b);b1(p,t,n,r,r*1.05*M.g,M.zc,M.un,!1,M.out),S1(p,t,n,M.zc,M.g,!1,M.out),Eo(f,t,n,r*1.1,10113248,.6*M.out)}}),T({type:"custom",layer:"top",dur:i+1,x:t,y:n,draw(p,y,x){const b=zn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b),v=r*1.05*M.g;b1(p,t,n,r,v,M.zc,M.un,!0,M.out),S1(p,t,n,M.zc,M.g,!0,M.out),Ze(t,n,M.zc);const w=Yt,_=jt,A=ye(v),R=Ql(v,g1*M.g);x1!==p&&(x1=p,M1=[{u0:0,fill:zt(p,"#c890ff",12),a:.72},{u0:.4,fill:zt(p,tr[1],13),a:.72},{u0:.68,fill:zt(p,tr[2],13),a:.75},{u0:.88,fill:zt(p,tr[3],14),a:.82}]),rc(p,w,_,A,R,!0,M1,M.out),p.globalAlpha=.9*M.out;for(let C=0;C<=40;C++){const I=C/40*Math.PI,z=w+Math.cos(I)*A,F=_+Math.sin(I)*A*.5;if(p.fillStyle=tr[3],p.fillRect(co(z)-2,co(F)-1,4,3+(C&1)*2),C%5===2){const U=(S.T*.9+C*.37)%1;p.fillStyle=tr[0],p.fillRect(co(z),co(F+4+U*18),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,y,x){const b=zn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b),v=r*1.05*M.g,w=g1*M.g;for(const _ of c){const A=Math.cos(_.a)*Math.cos(_.ph),R=Math.sin(_.a)*Math.cos(_.ph),C=Math.sin(_.ph);if(no(A/v,R/v,C/w)<=0)continue;Ze(t+A*v,n+R*v,M.zc+C*w);const I=.55+.45*Math.sin(S.T*4+_.p),z=.45+.55*Math.sqrt(Math.max(0,C)),F=co(_.s*z);p.globalAlpha=M.out*.35*I,p.fillStyle=tr[0],_1(p,Yt,jt,F+3,(F+3)*(.5+.5*C)),p.globalAlpha=M.out*(.6+.4*I),_1(p,Yt,jt,F,F*(.5+.5*C)),p.fillStyle="#ffffff",p.fillRect(co(Yt-F/3),co(jt-F/3),2,2)}}});for(let p=0;p<14;p++){const y=Math.random()*6.28,x=Math.random()*r*.8;E(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1.5,2.5),.5,Qr[p%3],3,8,!1)}at(3)};const S4=2.3,g1=1.35,co=Math.round;let x1=null,M1=[];function b1(e,t,n,r,o,i,a,s,l){if(a<=.01)return;const u=S.T,f=16,h=24;for(let c=-1;c<=1;c+=2)for(let d=0;d<f;d++){const m=d/f*6.283+c*.1,p=Math.sin(u*1.4+d*.9)*.03;for(let y=0;y<=h;y++){const x=y/h;if(x>a)break;const b=m+c*x*.55+p*x,M=Math.cos(b),v=Math.sin(b);if(no(M,v,0)>0!==s)continue;const w=o*.9+(r*.98-o*.9)*x+Math.sin(x*Math.PI)*.18;Ze(t+M*w,n+v*w,i*(1-x));const _=y%6===3;e.globalAlpha=l*(s?.85:.7)*(1-x*.3),e.fillStyle=_?tr[0]:"#e8f0d0",e.fillRect(co(Yt)-1,co(jt)-1,_?4:2,_?4:3)}}}let v1=null,w1=[];const _4=[.9,1,1,.9,.75];function S1(e,t,n,r,o,i,a){v1!==e&&(v1=e,w1=[{u0:0,fill:zt(e,"#e0d8f0",7),a:.55},{u0:.6,fill:zt(e,"#a898c0",9),a:.6},{u0:.88,fill:zt(e,tr[3],12),a:.7}]),Ze(t,n);const s=Yt,l=jt,u=ye(.42*o);Gr(e,s,l,u*1.25,u,yr(r),i,w1,_4,a),e.globalAlpha=a*.8,e.fillStyle=tr[0];for(let f=0;f<3;f++){const h=(S.T*.5+f/3)%1*r;xo(e,t,n,h,.42*o*(1.25-.25*h/Math.max(.1,r)),18,2,S.T,i?1:-1)}}function _1(e,t,n,r,o){if(!(r<1)){o=Math.max(1,o);for(let i=-o;i<o;i+=2){const a=r*Math.sqrt(Math.max(0,1-(i+1)/o*((i+1)/o)));a>=.5&&e.fillRect(Math.round(t-a),Math.round(n+i),Math.max(1,Math.round(a*2)),2)}}}Ge.hongo=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;Ze(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=Kr[1+s%3],r.fillRect(Math.round(Yt-2),Math.round(jt-1),4,2)}}}),T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){Ze(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Ji[i],Ur(r,Yt+(i-1)*8*(.6+o),jt-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)E(t,n,.4,g(-1,1),g(-1,1),g(.5,1.5),.6,Kr[r%3],3,2,!1,.92)};const xt=Math.round,kr=Math.PI*2;let Ae=0,Se=0;function hn(e,t,n=0){Ae=(e-t)*B.HW+B.OX,Se=(e+t)*B.HH-n*B.ZK}function Cs(e,t,n,r,o){e.fillStyle=o,e.fillRect(xt(t-r/2),xt(n-r/2),r,r)}const Jr=e=>e<0?0:e>1?1:e,al=e=>1-(1-e)*(1-e),me={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},dr={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},nn={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},ur={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},A4="#e8384a";function T4(e,t){return Math.atan2((e+t)*B.HH,(e-t)*B.HW)}function Nu(e,t,n,r,o,i,a,s,l){const u=Math.cos(r),f=Math.sin(r),h=-f,c=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(xt(m-o/2),xt(p-o/2),o,o),d>=2&&(e.fillStyle=a,e.fillRect(xt(m+h*o-o/2),xt(p+c*o-o/2),o,o));else if(d===10){e.fillStyle=s;for(let y=-3;y<=3;y++)e.fillRect(xt(m+h*y*o-o/2),xt(p+c*y*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(xt(m-o/2),xt(p-o/2),o,o)):(e.fillStyle=s,e.fillRect(xt(m-o),xt(p-o),o*2,o*2))}}function Di(e,t,n,r,o){e.fillStyle=o;const i=xt(r);e.fillRect(xt(t-i),xt(n-1),i*2,2),e.fillRect(xt(t-1),xt(n-i),2,i*2),e.fillRect(xt(t-2),xt(n-2),4,4)}function Up(e,t,n,r){const o=Math.max(2,xt(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=ur.d,e.fillRect(xt(t-o/2),xt(n-i/2),o,i),o>3&&(e.fillStyle=ur.m,e.fillRect(xt(t-o/2+1),xt(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=ur.l,e.fillRect(xt(t-1),xt(n-2),2,4))}V.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=T4(t,n);T({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(a,s){hn(r,o,.55);const l=.55*(1-al(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,Nu(a,Ae,Se,i+u*l,2,u?nn.l:me.w,u?nn.m:me.m,ur.m,dr.d))}}),T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(a,s){hn(r,o,.55),a.globalAlpha=1-s,Di(a,Ae+Math.cos(i)*12,Se+Math.sin(i)*12,10*(1-s)+3,nn.w)}});for(let a=0;a<6;a++)E(r,o,.5,g(-.8,.8),g(-.8,.8),g(.3,1),g(.4,.6),a&1?dr.m:dr.l,3,-.5,!1,.9)};Oe.mapache_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=Math.sin(i*26)*.07;vt(!0);const h=$t();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);h.globalAlpha=(1-d/14)*.9,h.fillStyle=d&1?nn.l:nn.m,h.fillRect(xt(n-a*m+l*p),xt(r-s*m+u*p),2,2)}for(let d=4;d>=1;d--)h.globalAlpha=.5-d*.1,Nu(h,n-a*d*9,r-s*d*9,o+f*d,2,nn.l,nn.m,nn.m,nn.d);h.globalAlpha=.22,h.fillStyle=nn.m,h.fillRect(xt(n-10),xt(r-10),20,20),h.globalAlpha=1,vt(!1),Nu(e,n,r,o+f,2,me.w,me.m,ur.m,dr.k);const c=i*4%1;c<.5&&(vt(!0),$t().globalAlpha=1,Di($t(),n+a*(12-c*30),r+s*(12-c*30),4,me.w),vt(!1))};const A1=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];V.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){hn(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Nu(o,Ae-Math.cos(r)*8,Se-Math.sin(r)*8,r+Math.PI,2,me.w,me.m,ur.m,dr.k)}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){hn(t,n,1);const a=3,s=al(Jr(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=Ae,f=Se-s,h=A1.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let c=0;c<h;c++){const d=A1[c],m=i>.6?(c&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const y=d[p];y!=="."&&(o.fillStyle=y==="X"?nn.l:y==="M"?nn.d:y==="e"?nn.w:nn.m,o.fillRect(xt(u+(p-6)*a+m-a/2),xt(f+(c-4)*a*l-a/2),a,Math.max(1,xt(a*l))))}}}});for(let o=0;o<8;o++)E(t,n,.5,g(-1.8,1.8),g(-1.8,1.8),g(.8,2),g(.3,.5),o&1?me.l:me.m,2,6,!0,.9);for(let o=0;o<6;o++)E(t+g(-.2,.2),n+g(-.2,.2),.4,0,0,g(.6,1.2),g(.6,.9),o&1?nn.l:nn.m,2,-.3,!0);at(2)};function Xp(e,t,n,r,o,i,a,s){const l=Math.max(2,xt(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,h=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,c=n-o/2+u*2;if(h<1)continue;e.globalAlpha=s,e.fillStyle=ur.d,e.fillRect(xt(t-h-2),xt(c),xt(h*2+4),2),e.globalAlpha=s*.85,e.fillStyle=me.m,e.fillRect(xt(t-h),xt(c),xt(h*2),2);const d=t-h+(a*2.2-.6)*r-f*o*.25;d>t-h&&d<t+h-3&&(e.globalAlpha=s,e.fillStyle=me.w,e.fillRect(xt(d),xt(c),3,2))}e.globalAlpha=s,e.fillStyle=ur.l,e.fillRect(xt(t-2),xt(n-o/2-3),4,3)}function Gp(e,t,n,r,o,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<o.length;u++)for(let f=0;f<a;f++){const h=l+u*17+f*3,c=(H(h)-.5)*.7,d=(H(h+1)-.5)*.7,m=Jr(s*(.85+H(h+2)*.3));hn(t+(o[u]+c-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(S.T*20+f|0)&1;e.fillStyle=p?me.w:me.m,e.fillRect(xt(Ae-2),xt(Se-1),p?4:2,p?2:4),e.fillStyle=me.d,e.fillRect(xt(Ae+(p?2:0)),xt(Se+(p?0:3)),2,2)}}function Np(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*kr;r[i]=e+Math.cos(a)*1.1,o[i]=t+Math.sin(a)*1.1}return{TX:r,TY:o}}function Bp(e,t,n){T({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){hn(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*kr+o*2,l=6+o*22;Di(r,Ae+Math.cos(s)*l,Se+Math.sin(s)*l*.8,4*(1-o)+2,a&1?me.l:nn.l)}o<.3&&Di(r,Ae,Se,16*(1-o/.3)+3,me.w)}}}),T({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)E(e[a],t[a],.4,g(-.8,.8),g(-.8,.8),g(.3,.9),g(.4,.7),s&1?dr.l:dr.m,3,-.4,!1,.9)}}})}V.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=Np(t,n,2),a=.32,s=.45,l=.78;T({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const h=f*(s+.02),c=al(Jr(h/.18));if(hn(t,n,.75),Xp(u,Ae,Se,30,52*c,!0,Jr(h/.3),.95),h>a){u.globalAlpha=1,u.fillStyle=me.w;const d=Jr((h-a)/(s-a)),m=Ae+4,p=Se-6;for(let y=0;y<6;y++){let x=H(r+y)*kr,b=m,M=p;for(let v=0;v<xt(6*d);v++)x+=(H(r+y*7+v)-.5)*.9,b+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(xt(b),xt(M),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const h=f*(l+.05);h>=s&&h<s+.08&&(hn(t,n,.75),u.globalAlpha=1-(h-s)/.08,u.fillStyle=me.w,u.fillRect(xt(Ae-22),xt(Se-30),44,60)),u.globalAlpha=1,Gp(u,t,n,.75,o,i,6,(h-s)/(l-s),r)}}),Bp(o,i,l);for(let u=0;u<8;u++)E(t,n,.4,g(-1,1),g(-1,1),g(.3,.8),g(.5,.8),u&1?dr.m:dr.d,3,-.3,!1,.9)};V.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,a=(s,l,u,f,h,c,d)=>{const m=12*f,p=20*f;for(let y=0;y<18;y++){const x=y/18*kr+h;Cs(s,l+Math.cos(x)*m,u+Math.sin(x)*p,y%3?2:3,y&1?c:d)}for(let y=0;y<8;y++){const x=y/8*kr-h*1.7,b=.45+.25*Math.sin(h*2+y);Cs(s,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?al(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,h=S.T*8;hn(t,n,.55);const c=Ae,d=Se;hn(r,o,.55);const m=Ae,p=Se;f>0&&(s.globalAlpha=1,a(s,c,d,f,h,me.l,me.d),a(s,m,p,f,-h,ur.l,ur.d));const y=Jr((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,M=x?ur.m:me.m,v=x?1-y:y;s.globalAlpha=.45*(1-Jr((u-.5)/.3));for(let w=0;w<=20;w++){const _=w/20;w%2||Cs(s,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,2,M)}if(y>0&&y<1)for(let w=0;w<6;w++){const _=x?v+w*.03:v-w*.03;_<0||_>1||(s.globalAlpha=1-w/6,Cs(s,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,w?3:5,w?M:me.w))}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;hn(t,n,.55);const f=Ae,h=Se;hn(r,o,.4);const c=Ae,d=Se,m=(f+c)/2,p=(h+d)/2-58,y=Jr(u/i),x=m+(c-m)*y,b=p+(d-p)*y-Math.sin(y*Math.PI)*30;s.globalAlpha=y>.85?(1-y)/.15:1,Up(s,x,b,S.T*26)}});for(const[s,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*kr;E(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,g(0,.6),.4,s===t?me.l:ur.l,2,0,!0)}};const R4=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];V.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=Np(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],h=new Float32Array(a);T({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(y,x){hn(t,n,0);const b=Ae,M=Se;y.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),y.fillStyle=ur.l;for(let v=0;v<60;v++){const w=v*6,_=70-v*.9;y.fillRect(xt(b-_),xt(M-w-6),xt(_*2),6)}y.globalAlpha*=2,y.fillStyle=me.w;for(let v=0;v<18;v+=2){const w=Math.sqrt(1-v/18*(v/18))*74;y.fillRect(xt(b-w),xt(M-9+v),xt(w*2),2)}}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(y,x){const b=x*l,M=al(Jr(b/.3)),v=b*1.2+b*b*4.5;for(let w=0;w<a;w++)h[w]=w/a*kr+v;f.sort((w,_)=>Math.sin(h[w])-Math.sin(h[_]));for(const w of f){const _=h[w];hn(t+Math.cos(_)*s,n+Math.sin(_)*s,0);const A=.45+.55*Math.abs(Math.sin(_+.8));Xp(y,Ae,Se-22*M,xt(14*A)+2,44*M,!1,(b*1.6+w*.13)%1,.9)}}}),T({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(y,x){const b=x*(u+.05);if(b<l){const M=b*14|0,v=M%a,w=v/a*kr+b*1.2+b*b*4.5;hn(t+Math.cos(w)*s,n+Math.sin(w)*s,.6),y.globalAlpha=.9,Di(y,Ae,Se,9,me.w)}else{if(b<l+.1){y.globalAlpha=1-(b-l)/.1,hn(t,n,.4),y.fillStyle=me.w;for(let M=-14;M<14;M+=2){const v=Math.sqrt(1-M/14*(M/14))*90;y.fillRect(xt(Ae-v),xt(Se+M*2),xt(v*2),4)}}y.globalAlpha=1,Gp(y,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),Bp(o,i,u);const c=16,d=new Float32Array(c),m=new Float32Array(c),p=new Float32Array(c);for(let y=0;y<c;y++){const x=Math.random()*kr,b=Math.sqrt(Math.random())*2.6;d[y]=t+Math.cos(x)*b,m[y]=n+Math.sin(x)*b,p[y]=g(0,.35)}T({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(y,x){const b=x*1.3;for(let M=0;M<c;M++){const v=(b-p[M])/.95;if(v<0||v>1)continue;hn(d[M],m[M],3.2*(1-v));const w=Math.cos(S.T*9+M*1.7),_=Ae+Math.sin(S.T*4+M)*8,A=R4[M&3],R=(M&3)<2?A4:dr.k,C=2,I=Math.max(.2,Math.abs(w));if(y.globalAlpha=v>.8?(1-v)/.2:1,y.fillStyle="#fffaf0",y.fillRect(xt(_-7*I),xt(Se-8),xt(14*I)||1,16),I>.45){y.fillStyle=R;for(let z=0;z<5;z++)for(let F=0;F<5;F++)A[z][F]==="X"&&y.fillRect(xt(_+(F-2.5)*C*I),xt(Se-5+z*C),Math.max(1,xt(C*I)),C)}}}});for(let y=0;y<20;y++){const x=Math.random()*kr;E(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,g(.5,1.5),g(.5,.9),y&1?dr.l:dr.m,3,-.4,!1,.92)}T({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){b.fired||(b.fired=!0,at(5))}})};function T1(e,t,n,r,o,i,a,s){const l=Math.cos(r),u=Math.sin(r),f=-u,h=l,c=xt(10*i);for(let d=0;d<=c;d++){const m=d/10-.5,p=Math.sin(m*kr)*o*.18;Cs(e,t+l*m*o+f*p,n+u*m*o*.8+h*p,d===c?4:3-Math.abs(m)*2,d===c?s:a)}}Ge.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+g(-.3,.3);if(T({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,a){hn(t,n,.5);const s=Jr(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,T1(i,Ae,Se,o,34,s,me.m,me.w),r&&T1(i,Ae,Se,o+1.6,40,s,nn.m,nn.w),a>.2&&(Di(i,Ae+12,Se-10,4*(1-a)+1,me.w),Di(i,Ae-10,Se+6,3*(1-a)+1,me.l))}}),r){T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){hn(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,Up(i,Ae+a*18,Se,S.T*30)}});for(let i=0;i<6;i++)E(t,n,.5,g(-1,1),g(-1,1),g(.5,1.4),.5,i&1?nn.l:nn.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)E(t,n,.2,g(-.8,.8),g(-.8,.8),g(.2,.6),.35,dr.l,3,0,!1,.9)};const aa="#1e0f30",Aa="#4b2272",Co="#8b3cd2",Po="#d6b4ff",bo="#f6f2ff",Bu="#ff2f5f",$p="#2c1446",en=Math.round,Ci=Math.PI*2,C4=[0,1,2,1];function Or(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(en(t),en(n),r,o)}function P4(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(en(t+(r-t)*l/s-i/2),en(n+(o-n)*l/s-i/2),i,i)}function mc(e,t,n,r,o,i,a,s){t=en(t),n=en(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=a,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=s,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function xi(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,en(2*s));e.fillStyle=a;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=en(n+c*s);if(Math.abs(m)>=f){e.fillRect(en(t-d),p,en(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(en(t-d),p,en(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(en(t+M),p,en(d-M),h)}}}function pc(e,t,n,r,o){const[i,a]=P(t,n),s=r*B.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(en(i-f),en(a+u),en(f*2),2)}}const Wp=e=>{const t=lt(e);return t&&!t.dead&&!Xe(t)?t:null},I4=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},yc=(e,t=16)=>C4[((S.T*t|0)+e)%4];Ge.murcielago=e=>{const t=g(0,Ci),n=e.big?17:13;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,a]=P(e.x,e.y,.5);r.globalAlpha=1-o,xi(r,i,a,n+2,t+o*1.4,.45,Co),xi(r,i,a,n,t+o*1.4,.52,bo)}});for(let r=0;r<5;r++)E(e.x,e.y,.5,g(-2.5,2.5),g(-2.5,2.5),g(0,1),.28,r%2?Po:Co,2,0,!0,.9)};V.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;T({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const h=f*.62;for(let c=0;c<6;c++){const d=h-c*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),y=Math.max(6,Math.ceil(i*2*p*7)),x=c%2?Co:Po,b=c%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=y;M++){const v=r-i+2*i*M/y,w=Math.sin(M*1.7+c*2.3+h*40)*.07*(1+m),[_,A]=P(a+Math.cos(v)*(p+w),s+Math.sin(v)*(p+w),l-m*.35);Or(u,_-b/2,A-b/2,b,b,x),M===y>>1&&Or(u,_-1,A-1,2,2,bo)}}}}),T({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const h of[-1,1]){const c=r+h*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,y]=P(a+Math.cos(c)*m,s+Math.sin(c)*m);Or(u,p-1,y-1,3,2,Aa)}}}});for(let u=0;u<14;u++){const f=r+g(-i,i),h=g(.6,o);E(a+Math.cos(f)*h,s+Math.sin(f)*h,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,g(0,.5),.5,u%3?Po:bo,2,0,!0,.92)}at(2)};V.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*Ci+g(-.2,.2),sp:g(1.2,2.4),up:g(.8,1.8),ph:Math.random()*4|0}));T({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),pc(r,e.x,e.y,.75*(1-o*.6),aa),r.globalAlpha=.8*(1-o),pc(r,e.x,e.y,.3*(1-o),$p)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=P(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);mc(r,l,u,2,yc(a.ph),aa,Aa,Bu)}}}),T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=Wp(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=P(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=S.T*5+s*Math.PI;mc(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,yc(s*2,20),Aa,Co,Bu)}r.globalAlpha=.35;for(let s=0;s<4;s++)Or(r,i-8+s*5,a+26+(S.T*30+s*7)%8,2,2,aa)}});for(let r=0;r<16;r++)E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.2,.8),g(-.5,.5),g(-.5,.5),g(1,2.2),g(.5,.9),r%2?aa:Aa,3,0,!1,.95);for(let r=0;r<6;r++)E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.4,1),0,0,g(.5,1.2),.5,Po,2,0,!0)};V.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=I4(e),i=o&&o.radius||1.4,a=g(0,Ci);let s=!1;T({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const h=u*f.dur,[c,d]=P(t,n);if(h<r){l.globalAlpha=.5,xi(l,c,d,en(i*26*(1.4-.4*h/r)),a+h*6,.45,Aa,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-h)/.6),xi(l,c,d+2,en(i*30),a+Math.PI*1.1,.42,$p,.5)}}),T({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const h=u*f.dur;if(h<r){const b=Wp(e.uid);if(!b)return;const[M,v]=P(b.x,b.y,.7),[w,_]=P(t,n,.3),A=Math.hypot(w-M,_-v)||1,R=(w-M)/A,C=(_-v)/A;l.globalAlpha=.75;for(let I=0;I<4;I++){const z=(I-1.5)*7,F=18+I%2*12;P4(l,M-C*z-R*8,v+R*z-C*8,M-C*z-R*(8+F),v+R*z-C*(8+F),2,I%2?Po:Co)}return}const c=(h-r)/.5;if(!s){s=!0,at(6);for(let b=0;b<22;b++){const M=g(0,Ci),v=g(2,5);E(t,n,.45,Math.cos(M)*v,Math.sin(M)*v,g(.3,1.5),g(.3,.55),b%3?Po:b%2?bo:Co,2,3,!0,.9)}}const d=Math.min(1,c/.45),[m,p]=P(t,n,.45),y=en(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=c<.5?1:Math.max(0,(1-c)/.5),xi(l,m,p,y+3,x,.42,Co,.85),xi(l,m,p,y,x,.48,bo,.85),l.globalAlpha*=.35,xi(l,m,p,y,x-.6,.48,Po,.85)}})};V.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*Ci,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),h=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),c=s.p+l*s.w;return[e.x+Math.cos(c)*h,e.y+Math.sin(c)*h,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:g(.3,n-.4),x:e.x+g(-1,1)*t*.6,y:e.y+g(-1,1)*t*.6}));T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,pc(s,e.x,e.y,t,aa),s.globalAlpha=.7*f;for(let h=0;h<40;h++){const c=h/40*Ci+u*.8,[d,m]=P(e.x+Math.cos(c)*t,e.y+Math.sin(c)*t);Or(s,d-1,m-1,h%2?2:3,2,h%2?Po:Co)}s.globalAlpha=.3*f;for(const h of o){const[c,d]=i(h,u),[m,p]=P(c,d);Or(s,m-4,p-1,8,2,"#000000")}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of o){const[h,c,d,m]=i(f,u),[p,y]=P(h,c,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),mc(s,p,y,f.s,yc(f.ph,18),aa,Aa,Bu)}}}),T({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const h=(u-f.t)/.14;if(h<0||h>1)continue;const[c,d]=P(f.x,f.y,.55),m=en(4-h*3);s.globalAlpha=1-h;for(const p of[-1,1]){const y=c+p*4;Or(s,y-2,d-6-m,4,2,bo),Or(s,y-1,d-4-m,2,3,bo),Or(s,y-2,d+4+m,4,2,bo),Or(s,y-1,d+1+m,2,3,bo)}Or(s,c-1,d-1,3,3,Bu)}}});for(let s=0;s<20;s++){const l=g(0,Ci),u=t*g(.3,1);E(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,g(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,g(0,.6),g(.6,1.1),s%3?Co:Po,2,0,!0,.97)}at(5)};const Pt=Math.round,Zr=Math.PI*2,_t={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},z4=e=>e*B.HW*Math.SQRT2;function Ps(e,t,n,r){r=Math.max(1,Pt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Pt(t[0]+(n[0]-t[0])*s/i-a),Pt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function $u(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=Pt(n-a*o/2),u=Pt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++)for(let c=0;c<a;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function Hp(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+g(-.35,.35),a=t*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function qp(e,t,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=P(t+r[s][0],n+r[s][1]),f=P(t+r[s+1][0],n+r[s+1][1]);Ps(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const O4=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],F4=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],R1=["t.t.t",".....",".ppp.","ppppp",".ppp."];V.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,h=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let y=0;y<p;y++){const x=s+(p===1?0:(y/(p-1)*2-1)*a*.8)+g(-.06,.06),b=d*i/2.5;h.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:g(9,15),done:!1})}});const c=[-.8,-.4,0,.4,.8].map(d=>Hp(s+d*a,i*g(.75,1)));T({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,y=Math.min(1,p/f),x=1.5*(1-y*y),[b,M]=P(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),$u(d,O4,b,M,3,{h:_t.wood,d:_t.i0,b:_t.brass,l:_t.i4,i:_t.i2}),y<1){d.globalAlpha=.5,d.fillStyle=_t.i3;for(let v=1;v<=3;v++)d.fillRect(Pt(b-15+v*7),Pt(M-26-v*8),2,8)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,y]=P(l,u,.1),x=Pt(26*(1-m))+4;d.fillStyle=_t.amberL,d.fillRect(p-x,y-2,x*2,4),d.fillRect(p-2,y-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,y-3,10,6)}}),T({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const y=m*1.15;if(y>=f&&!p.hit){p.hit=!0,at(7);for(let M=0;M<14;M++){const v=s+g(-a,a),w=g(1,3);E(l,u,.1,Math.cos(v)*w,Math.sin(v)*w,g(.3,1),g(.6,.9),M%2?_t.dust:_t.e3,5,-.4,!1,.9)}}if(y<f)return;const x=y-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=_t.e0;for(const M of c)qp(d,t,n,M,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const M=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=_t.dust;for(let v=0;v<=16;v++){const w=s-a+2*a*v/16,[_,A]=P(t+Math.cos(w)*M,n+Math.sin(w)*M);d.fillRect(Pt(_)-3,Pt(A)-2,6,4)}}for(const M of h){const v=(y-M.t0)/.5;if(v<0||v>1)continue;M.done||(M.done=!0,E(M.x,M.y,.2,g(-1,1),g(-1,1),g(3,5),g(.7,1),[_t.e1,_t.e2,_t.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const w=Pt(M.h*(v<.2?v/.2:1-(v-.2)/.8)),[_,A]=P(M.x,M.y);d.globalAlpha=1,d.fillStyle=_t.e0,d.fillRect(Pt(_-M.w/2-1),Pt(A-2),M.w+2,4),d.fillStyle=_t.e1,d.fillRect(Pt(_-M.w/2),Pt(A-w),M.w,w),d.fillStyle=_t.e3,d.fillRect(Pt(_-M.w/2),Pt(A-w-5),M.w,5),d.fillStyle=_t.e2,d.fillRect(Pt(_-M.w/2),Pt(A-w-1),M.w,1)}}})};function Il(e,t,n,r,o,i){const a=Math.cos(i);return[e+n*Math.cos(o)*a,t+n*.5*Math.sin(o)*a-r*Math.sin(i)]}V.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=lt(t),[l,u]=P(s?s.x:r,s?s.y:o,.6),f=Pt(18*(1-a))+3;i.fillStyle=_t.amber;for(let h=0;h<8;h++){const c=h/8*Zr;i.fillRect(Pt(l+Math.cos(c)*f*1.4)-2,Pt(u+Math.sin(c)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Zr;E(e.x,e.y,.6,Math.cos(a)*g(1,3),Math.sin(a)*g(1,3),g(1.5,3),.4,i%2?_t.brassL:_t.amber,2,9,!0)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=lt(t),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let _=0;_<16;_++){const A=Math.random()*Zr,R=g(1,2.5);E(r+Math.cos(A)*.4,o+Math.sin(A)*.4,g(.2,.8),Math.cos(A)*R,Math.sin(A)*R,g(1.5,3.5),.7,[_t.i1,_t.i2,_t.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)E(r,o,.6,g(-2,2),g(-2,2),g(1,3),.35,_t.brassL,2,6,!0);s.t=1e9;return}const h=l&&l.scale||1,[c,d]=P(r,o),m=Pt(40*h),p=Pt(56*h),y=Math.min(1,u/.25),x=Math.PI/2*y;if(y>=1&&!s.done){s.done=!0;const[_,A]=[r,o];for(let R=0;R<6;R++)E(_,A,.75*h,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.3,_t.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=_t.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(Pt(c-A),Pt(d-_-3),Pt(A*2),3)}for(let _=0;_<m*.5;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(Pt(c-A),Pt(d+_),Pt(A*2),3)}for(let _=0;_<32;_++){const A=_/32*Zr,R=Il(c,d,m,p,A,0),C=Math.sin(A)>0;i.globalAlpha=C?.95:.4,i.fillStyle=C?_t.i3:_t.i1,i.fillRect(Pt(R[0])-2,Pt(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=_t.i2;for(const _ of[.12,.3,.5,.7,.88]){const A=Math.PI*_;for(let R=0;R<=x;R+=.16){const C=Il(c,d,m,p,A,R);i.fillRect(Pt(C[0])-1,Pt(C[1])-1,2,3)}}const v=u*14|0;let w=0;for(const _ of[.42,.9])if(!(_>x))for(let A=0;A<=14;A++){const R=Math.PI*A/14,C=Il(c,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=_t.i3,i.fillRect(Pt(C[0])-2,Pt(C[1])-1,4,2),A%2===0&&(w++,i.globalAlpha=1,i.fillStyle=w%16===v%16?"#ffffff":_t.brass,i.fillRect(Pt(C[0])-1,Pt(C[1])-3,3,3))}if(y>=1){const _=Il(c,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=_t.i0,i.fillRect(Pt(_[0])-5,Pt(_[1])-4,10,6),i.fillStyle=_t.brass,i.fillRect(Pt(_[0])-4,Pt(_[1])-3,8,4),i.fillStyle=_t.brassL,i.fillRect(Pt(_[0])-3,Pt(_[1])-3,3,1)}}})};V.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=P(n,r),h=P(o,i),c=Math.hypot(h[0]-f[0],h[1]-f[1])||1,d=(h[0]-f[0])/c,m=(h[1]-f[1])/c,p=[],y=Math.max(2,Math.floor(u/.5));for(let x=1;x<=y;x++){const b=x/(y+1),M=x%2?1:-1;p.push({s:b,x:n+s*b-l/u*.17*M,y:r+l*b+s/u*.17*M})}T({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,b){const M=b*(a+2);for(const v of p){const w=M-v.s*a;if(w<0)continue;const[_,A]=P(v.x,v.y);x.globalAlpha=Math.max(0,.7*(1-w/2)),$u(x,R1,_,A,3,{t:_t.e0,p:_t.e0}),x.globalAlpha*=.6,$u(x,R1,_-1,A-1,3,{p:_t.e1})}}}),T({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,b,M){const v=b*(a+.3),w=lt(t),_=Math.min(1,v/a),A=w&&v<a?w.x:n+s*_,R=w&&v<a?w.y:r+l*_;if(v<a){if(M.n=M.n||0,M.n<30){M.n+=2;for(let Y=0;Y<2;Y++)E(A+g(-.2,.2),R+g(-.2,.2),.1,-s/u*g(.5,1.5)+g(-.5,.5),-l/u*g(.5,1.5)+g(-.5,.5),g(.4,1.2),g(.5,.8),Y?_t.e2:_t.dust,5,-.3,!1,.9)}const[C,I]=P(A,R,.45),z=C+d*26,F=I+m*26,U=-m,G=d;for(let Y=0;Y<3;Y++){const k=Y*8+v*120%8;x.globalAlpha=.9-Y*.25,x.fillStyle=Y?_t.dust:"#ffffff";const L=[z-d*k,F-m*k];Ps(x,L,[L[0]-d*10+U*13,L[1]-m*10+G*13],3),Ps(x,L,[L[0]-d*10-U*13,L[1]-m*10-G*13],3)}x.globalAlpha=.6,x.fillStyle=_t.i3;for(let Y=0;Y<4;Y++){const k=(Y-1.5)*9,L=14+(Y*7+v*200)%12;Ps(x,[C-d*20+U*k,I-m*20+G*k],[C-d*(20+L)+U*k,I-m*(20+L)+G*k],2)}}else{if(!M.end){M.end=!0,at(5);for(let F=0;F<14;F++){const U=Math.random()*Zr,G=g(1.5,3);E(o,i,.15,Math.cos(U)*G,Math.sin(U)*G,g(.8,2),.6,F%2?_t.dust:_t.e3,5,2,!1,.9)}}const C=(v-a)/.3,[I,z]=P(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-C;for(let F=0;F<8;F++){const U=F/8*Zr+.2,G=6+C*14,Y=G+10*(1-C);x.fillStyle=F%2?_t.amberL:"#ffffff",Ps(x,[I+Math.cos(U)*G,z+Math.sin(U)*G*.7],[I+Math.cos(U)*Y,z+Math.sin(U)*Y*.7],4)}}}})};V.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(a,s)=>Hp(s/8*Zr+g(-.2,.2),o*g(.45,.65),5));at(10),T({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=P(n,r),f=s*1;for(let h=0;h<3;h++){const c=(f-h*.13)/.62;if(c<=0||c>=1)continue;const d=z4(o)*(.15+.95*(1-(1-c)*(1-c))),m=5-h;a.globalAlpha=1-c;for(let p=0;p<56;p++){if(p%7>=5)continue;const y=p/56*Zr+h*.2,x=l+Math.cos(y)*d,b=u+Math.sin(y)*d*.5;a.fillStyle=h===0?_t.amberL:_t.amber,a.fillRect(Pt(x-m/2),Pt(b-m/2),m,m),p%7===2&&(a.fillStyle=_t.amberD,a.fillRect(Pt(x*.94+l*.06-1),Pt(b*.94+u*.06-1),3,3))}}}}),T({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=_t.e0;for(const l of i)qp(a,n,r,l,Math.min(1,s*7))}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(a,s){const l=lt(t),u=l?l.x:n,f=l?l.y:r,h=l&&l.scale||1,[c,d]=P(u,f,1.7*h+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),$u(a,F4,c,d,m,{e:_t.amberD,i:_t.amberL,h:_t.amber,s:_t.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const y=34+(s*90+p*22)%66,x=1-(s*90+p*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=_t.amberL;for(let b=-.7;b<=.71;b+=.175){const M=Math.cos(b)*y,v=Math.sin(b)*y*.8;a.fillRect(Pt(c+M)-2,Pt(d+6+v)-2,4,4),a.fillRect(Pt(c-M)-2,Pt(d+6+v)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Zr,l=Math.sqrt(Math.random())*o*.9;E(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,g(2,4),g(.5,.8),[_t.e1,_t.e2,_t.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Zr,l=g(.3,1.2);E(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,g(.8,1.6),g(.8,1.2),_t.amberL,2,-.3,!0,.98)}};Ge.oso=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,a]=P(t,n,.08),s=Pt(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=_t.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=_t.dust,r.fillRect(i-s,a-1,Pt(s*.7),3),r.fillRect(i+s-Pt(s*.7),a-1,Pt(s*.7),3);const[u,f]=P(t,n,.5),h=Pt(12*(1-o));r.fillStyle=_t.i3,r.fillRect(u-h-4,f-3,8,6),r.fillRect(u+h-4,f-3,8,6),r.fillStyle=_t.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(2,3.5),.3,_t.brassL,2,12,!0);for(let r=0;r<3;r++)E(t,n,.05,g(-1,1),g(-1,1),g(1,2),.45,_t.e2,3,10,!1)};const Vn="#ffffff",Kn="#e6eeff",go="#bfe9ff",bi="#7fdcf4",gc="#3a9ab8",fn="#fff0b4",C1="#efe0b8",P1="#c8a878",E4="#34408a",I1="#a9bfdc",ie=Math.round,Pi=Math.PI*2;function Re(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ie(t),ie(n),r,o)}function Wu(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=ie(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(ie(t-a),ie(n+i),a*2,2)}}function Ta(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,ie(2*s));e.fillStyle=a;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=ie(n+c*s);if(Math.abs(m)>=f){e.fillRect(ie(t-d),p,ie(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(ie(t-d),p,ie(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(ie(t+M),p,ie(d-M),h)}}}function k4(e,t,n,r,o,i,a){t=ie(t),n=ie(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*s,n-2*r,r*s,2*r),e.fillRect(t+u,n-2*r,r*s,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=a,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function z1(e,t,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const h=ie(t+u*i-f),c=ie(t+u*i+f),d=ie(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(h,d,c-h,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(h,d,2,2),e.fillRect(c-2,d,2,2)}}function L4(e,t,n,r,o){t=ie(t),n=ie(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const Vp=e=>{const t=lt(e);return t&&!t.dead&&!Xe(t)?t:null},D4=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Hu=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Oe.polilla_A=(e,t,n,r,o,i)=>{vt(!0);const a=$t(),s=.65+.35*Math.sin(i*20),l=ie(5+s*3);a.globalAlpha=s,Re(a,n-l,r-1,l*2,2,bi),Re(a,n-1,r-l,2,l*2,bi),a.globalAlpha=1,Re(a,n-2,r-2,4,4,Vn);const u=i*14;Re(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,fn),Re(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,fn),vt(!1)};Ge.polilla=e=>{T({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.5),i=ie(10*(1-n))+2;t.globalAlpha=1-n,Re(t,r-i,o-1,i*2,2,Kn),Re(t,r-1,o-i,2,i*2,Kn),Re(t,r-2,o-2,4,4,Vn)}});for(let t=0;t<5;t++)E(e.x,e.y,.5,g(-1,1),g(-1,1),g(.2,.8),.6,t%2?fn:go,2,.4,!0,.9)};Oe.polilla_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;n=ie(n),r=ie(r),vt(!0);const l=$t(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),vt(!1),Wu(e,n,r,10,gc),Wu(e,n,r,9,Kn),Ta(e,n,r,9,Math.PI*.85,.55,I1);for(let c=0;c<3;c++){const d=i*2+c*2.1;Re(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,c?2:3,2,I1)}Re(e,n-4,r-5,2,2,Vn);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=(i*2.2+c/3)%1,m=14+c*10;e.globalAlpha=1-d,L4(e,n-f*m,r-h*m-6-d*14,c<2?1:2,c%2?fn:Kn)}e.globalAlpha=1,Math.random()<.4&&E(t.x,t.y,s,g(-.3,.3),g(-.3,.3),-.4,.6,Math.random()<.5?fn:Kn,2,.5,!0,.9)};V.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,a]=P(e.x+t*.4,e.y+n*.4,.75),s=ie(14*(1-o))+2,l=ie(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)Re(r,i-s,a-1,s*2,2,fn),Re(r,i-1,a-s,2,s*2,fn);else for(let u=1;u<=l;u+=2)Re(r,i+u,a+u,2,2,fn),Re(r,i-u-2,a+u,2,2,fn),Re(r,i+u,a-u-2,2,2,fn),Re(r,i-u-2,a-u-2,2,2,fn);Re(r,i-2,a-2,4,4,Vn);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,h=16+u;Re(r,i+Math.cos(f)*h-1,a+Math.sin(f)*h*.6-1,2,2,u%2?fn:Kn)}}});for(let r=0;r<10;r++)E(e.x+t*.4,e.y+n*.4,.75,t*g(.5,1.5)+g(-.4,.4),n*g(.5,1.5)+g(-.4,.4),g(0,.4),g(.6,1),r%2?fn:Kn,2,.6,!0,.9)};V.polilla_W=e=>{if(e.type==="heal"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=P(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),Ta(n,o,i,7,-.6,.5,Kn);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;Re(n,o-10+a*10,i+s*50,2,4,a%2?go:Vn)}}});for(let n=0;n<8;n++)E(e.x+g(-.35,.35),e.y+g(-.35,.35),g(1,1.6),0,0,-g(.6,1.2),g(.7,1.1),n%2?Kn:fn,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=Vp(e.uid),i=o?o.x:e.x,a=o?o.y:e.y,[s,l]=P(i,a,2.2),u=r*1.2,f=ie(15*Hu(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),Ta(n,s,l,f+2,-.7,.5,bi),Ta(n,s,l,f,-.7,.55,Vn);for(let h=0;h<5;h++){const c=S.T*2+h*1.26;(S.T*6+h)%2<1&&Re(n,s+Math.cos(c)*(f+10)-1,l+Math.sin(c)*(f+6)-1,2,2,fn)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=t*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*Pi,[f,h]=P(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);Re(n,f-1,h-1,l%3?2:3,2,l%2?go:Vn)}}}});for(let n=0;n<40;n++){const r=g(0,Pi),o=Math.sqrt(Math.random())*t*.9;E(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,g(2.2,3),g(-.15,.15),g(-.15,.15),-g(1.2,2),g(1.1,1.6),[Kn,go,Vn,fn][n%4],2,.4,!0,.99)}};V.polilla_E=e=>{const t=e.dur||3;T({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Vp(e.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?Hu(a/.22):1,u=.85+.15*Math.sin(S.T*8),[f,h]=P(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=h-9-3*l,y=f+d*(7+10*l),x=h+9;z1(n,y,x,10*l*u,8,.4*d,P1,C1,s),z1(n,m,p,15*l*u,13,-.45*d,C1,P1,s),n.globalAlpha=.9*s,l>.5&&(Wu(n,m+d*2,p-1,4,E4),Re(n,m+d*2-1,p-2,2,2,fn),Re(n,m+d*2-2,p-3,1,1,Vn))}vt(!0);const c=$t();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(S.T*3+d*.37)%1;p>.3||(c.globalAlpha=(1-p/.3)*s,Re(c,f+m*(12+(d>>1)*9)*l-1,h-20+(d>>1)*10,2,2,Vn))}vt(!1)}});for(let n=0;n<18;n++){const r=g(0,Pi),o=g(1,2.2);E(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.5,.9),n%3?fn:Kn,2,.5,!0,.92)}};const O1=3.4,xc=[1,.8,.62,.45,.3,.16];let F1=null,E1=null,k1=[],L1=[];function D1(e,t,n,r,o,i,a){const s=S.T,l=yr(o);for(let u=0;u<9;u++){const f=u/9*Pi+s*.45,h=Math.cos(f),c=Math.sin(f);if(no(h,c,0)>0!==i)continue;const d=Math.max(2,ie((4+u%3*3)*Math.sqrt(Math.max(0,1-(h-c)*(h-c)/2))));pn(t+h*r,n+c*r);const m=.75+.25*Math.sin(s*3+u*1.7),p=ie(At.x-d/2);for(let y=0;y<6;y++)e.globalAlpha=a*m*xc[y]*(i?.5:.45),e.fillStyle=y<2?Vn:Kn,e.fillRect(p,ie(At.y-l*(y+1)/6),d,ie(l/6)+1)}}V.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=D4(e),r=n&&n.dur||4,o=10,i=t*B.HW*Math.SQRT2,a=t*B.HH*Math.SQRT2,s=Array.from({length:o},(c,d)=>({ox:g(-.6,.6)*t,oy:g(-.6,.6)*t,w:g(.8,1.6),p:g(0,Pi),z:g(.6,2.4),ph:d}));let l=0;const u=Xi(e,r),f=()=>S.T-u.t0,h=c=>Math.min(1,f()/.25,c/.4);T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=zn(u);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=Hu(f()/.3),b=O1*Math.min(1,f()/.4);pn(e.x,e.y);const M=At.x,v=At.y,w=ye(t)*x;F1!==c&&(F1=c,k1=[{u0:0,fill:zt(c,gc,3),a:.5},{u0:.7,fill:zt(c,bi,5),a:.5},{u0:.92,fill:zt(c,go,9),a:.55}]),Gr(c,M,v,w,w,yr(b),!1,k1,xc,y),D1(c,e.x,e.y,t*x,b,!1,y),Eo(u,e.x,e.y,t*1.1,12577279,.7*y)}}),T({type:"custom",layer:"ground",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=zn(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),[b,M]=P(e.x,e.y);c.globalAlpha=.13*x,c.fillStyle=bi;for(let v=-a;v<=a;v+=2){const w=i*Math.sqrt(Math.max(0,1-v*v/(a*a)));c.fillRect(ie(b-w),ie(M+v),ie(w*2),2)}c.globalAlpha=.4*x,Ta(c,b,M,ie(t*30),-.5,.5,go,.5),c.globalAlpha=.85*x;for(let v=0;v<40;v++){const w=v/40*Pi+y*.35,[_,A]=P(e.x+Math.cos(w)*t,e.y+Math.sin(w)*t);Re(c,_-1,A-1,2,2,v%4?go:Vn)}}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=zn(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),b=Hu(y/.3),M=O1*Math.min(1,y/.4);pn(e.x,e.y);const v=At.x,w=At.y,_=ye(t)*b;E1!==c&&(E1=c,L1=[{u0:0,fill:zt(c,gc,2),a:.4},{u0:.72,fill:zt(c,bi,3),a:.45},{u0:.93,fill:zt(c,Kn,7),a:.55}]),Gr(c,v,w,_,_,yr(M),!0,L1,xc,x),D1(c,e.x,e.y,t*b,M,!0,x),c.globalAlpha=x*.85,c.fillStyle=go,xo(c,e.x,e.y,M,t*b,64,2,y*.5,0),c.fillStyle=Vn,xo(c,e.x,e.y,M,t*b,16,3,-y*.8,1),pn(e.x,e.y,M+.45+Math.sin(y*1.6)*.06),c.globalAlpha=x*.35,Wu(c,At.x,At.y,26,bi),c.globalAlpha=x,Ta(c,At.x,At.y,18,.9,.55,Vn);for(const A of s){const R=y*A.w+A.p,C=e.x+A.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,I=e.y+A.oy+Math.sin(R)*.6,[z,F]=P(C,I,A.z+Math.sin(y*1.7+A.p)*.4);c.globalAlpha=x*Math.min(1,y/.4),k4(c,z,F,2,((S.T*14|0)+A.ph)%4,A.ph%3?Kn:Vn,go)}if(l<50&&Math.random()<.3){l++;const A=g(0,Pi),R=Math.sqrt(Math.random())*t;E(e.x+Math.cos(A)*R,e.y+Math.sin(A)*R,g(2.5,3.5),0,0,-g(.8,1.4),g(1.5,2.2),l%3?Kn:fn,2,0,!0,.99)}}}),at(2)};const ht=Math.round,Sn=Math.PI*2,qo=e=>e*B.HW*Math.SQRT2,it={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},Ph=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function Yp(e,t,n,r){r=Math.max(1,ht(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(ht(t[0]+(n[0]-t[0])*s/i-a),ht(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Tn(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(ht(t-l),ht(n+a),Math.max(1,ht(l*2)),i)}}function vo(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Sn;e.fillRect(ht(t+Math.cos(u)*r-i/2),ht(n+Math.sin(u)*r*.5-i/2),i,i)}}function U4(e,t,n,r=99){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function sl(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?it.skinD:i===1?it.skin:it.skinL;for(let a=0;a<=o;a++){const s=n+(r-n)*a/o,l=ht(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(ht(t[a][0]-l/2),ht(t[a][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const a=n+(r-n)*i/o,s=Math.max(2,ht(a*.4)),l=ht(t[i][0]),u=ht(t[i][1]+a*.3);e.fillStyle=it.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=it.skinD,e.fillRect(l,u,1,1))}}}function jp(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,y=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+s*y,e[1]+i*p+l*y])}let[h,c]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);h+=Math.cos(d)*p,c+=Math.sin(d)*p,f.push([h,c])}return f}V.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:r+g(-.9,.9)*o,d:i*g(.45,1),t0:g(0,.12),w:g(0,6),sz:g(6,10),bio:u%4===0}));T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const h of a){const c=(f-h.t0)/.42;if(c<0||c>1.15)continue;const d=1-Math.pow(1-Math.min(1,c),2),m=h.d*d,p=Math.sin(d*Sn+h.w)*.2*d,y=t+Math.cos(h.a)*m-Math.sin(h.a)*p,x=n+Math.sin(h.a)*m+Math.cos(h.a)*p,[b,M]=P(y,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),v=h.sz*(1-.4*d);l.globalAlpha=c>1?(1.15-c)/.15:1,l.fillStyle=it.ink,Tn(l,b,M,v,v*.75,2),l.fillStyle=it.inkV,Tn(l,b-v*.3,M-v*.3,v*.4,v*.3,1),h.bio&&(l.fillStyle=it.bio,l.fillRect(ht(b+v*.2),ht(M),2,2))}}});const s=a.slice(0,9);T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const h of s){const c=f.t-h.t0-.42;if(c<0)continue;const d=Math.min(1,c*10),m=Math.min(1,(2.6-f.t)/.6),[p,y]=P(t+Math.cos(h.a)*h.d,n+Math.sin(h.a)*h.d),[x,b]=P(t,n),M=x-p,v=b-y,w=Math.hypot(M,v)||1;l.globalAlpha=.85*m;for(let A=0;A<4;A++){const R=(h.sz+2)*(1-A*.22)*d;l.fillStyle=A?it.inkP:it.ink,Tn(l,p+M/w*A*7*d,y+v/w*A*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(S.T*4+h.w*3);l.globalAlpha=m*_,l.fillStyle=it.bio,l.fillRect(ht(p-3),ht(y-1),2,2),l.fillRect(ht(p+4),ht(y+1),2,1),h.bio&&(l.fillStyle=it.bioL,l.fillRect(ht(p),ht(y-2),1,1))}}});for(let l=0;l<12;l++){const u=r+g(-1,1)*o,f=g(2,4.5);E(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,g(.5,1.8),g(.35,.6),l%3?it.ink:it.bio,l%3?3:2,7,l%3===0,.93)}};const sa=[];function X4(e){let t=null,n=1.3;for(const r of sa){if(r.done||S.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}const Kp=e=>P(e.x,e.y,.35);function Qp(e,t,n){T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=lt(e);if(!i)return;const a=Kp(i),s=P(t,n,.45),l=1-o*o;l<.05||sl(r,jp(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],S.T,1+o*2),10,3)}})}V.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=sa.length-1;o>=0;o--)S.T-sa[o].t>3&&sa.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1};sa.push(r),T({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,Qp(r.uid,r.lx,r.ly),a.t=a.dur+1)}});for(let o=0;o<8;o++)E(e.x+t*.3,e.y+n*.3,.3,t*g(.5,1.5)+g(-.6,.6),n*g(.5,1.5)+g(-.6,.6),g(.5,1.5),.4,o%2?it.sucker:it.skin,2,5,!1)};Oe.pulpo_W=(e,t,n,r,o,i)=>{const a=X4(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=S.T);const s=a?lt(a.uid):t.src||U4(t.x,t.y,"pulpo",9),l=s&&!s.dead?Kp(s):[n-Math.cos(o)*70,r-Math.sin(o)*70];sl(e,jp(l,[n,r],i),11,3),Math.random()<.25&&E(t.x,t.y,.4,0,0,-.3,.4,it.bio,2,3,!0)};V.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?lt(e.uid):null,o=r?r.team:null;let i=null,a=1.3;for(const c of S.game?S.game.units:[]){if(c.dead||o&&c.team===o||r&&c===r||c.kind==="tower"||c.kind==="nexus")continue;const d=Math.hypot(c.x-t,c.y-n);d<a&&(a=d,i=c)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const c of sa)c.uid===e.uid&&S.T-c.t<1.5&&(!f||c.t>f.t)&&(f=c);f&&!f.done&&(f.done=!0,Qp(f.uid,t,n));const h=c=>{const d=s?lt(s):null;return d&&!d.dead?[d.x,d.y]:[c.x,c.y]};T({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),[x,b]=P(p,y),M=Math.min(1,m.t/.12),v=d>.8?(1-d)/.2:1;c.globalAlpha=.9*v,c.fillStyle=it.ink,Tn(c,x,b,30*M,13*M,2),c.fillStyle=it.inkP,Tn(c,x,b,20*M,8*M,2),c.fillStyle=it.bio,vo(c,x,b,30*M,18,2,S.T*2,3)}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),M=S.T;c.globalAlpha=x;const v=[];for(let w=0;w<=16;w++){const _=w/16,A=_*1.15*b,R=Math.max(0,_-.6)/.4,[C,I]=P(p,y,A);v.push([C+u*(20-R*26)+Math.sin(M*5+_*4)*2,I-R*6])}sl(c,v,12,3);for(let w=0;w<2;w++){const[,_]=P(p,y,(.22+w*.3)*b),[A]=P(p,y),R=19-2*Math.sin(M*9+w*2),C=1+.08*Math.sin(M*9);for(let I=0;I<=12;I++){const z=.1*Math.PI+I/12*.8*Math.PI,F=A+Math.cos(z)*R*C,U=_+Math.sin(z)*7;c.fillStyle=it.skinD,c.fillRect(ht(F)-4,ht(U)-4,8,8),c.fillStyle=it.skin,c.fillRect(ht(F)-3,ht(U)-3,6,5),I%3===1&&(c.fillStyle=it.sucker,c.fillRect(ht(F)-1,ht(U)+1,3,2))}}}});for(let c=0;c<10;c++){const d=Math.random()*Sn,m=g(1,2.4);E(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,g(1,2.5),.5,c%3?it.ink:it.bio,3,9,c%3===0)}at(Ph(e)?3:1)};function G4(e,t,n,r,o,i){if(r<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=P(t,n,l*r*.75),h=Math.max(0,l-.55)/.45;a.push([u+Math.sin(o*3+i+l*3)*4*l+h*h*10,f+h*h*8])}sl(e,a,8,2)}V.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(s=>({a:s/4*Sn+g(-.3,.3),d:g(.45,.75),ph:Math.random()*Sn})),a=s=>Math.min(1,s/.25,(o-s)/.35);T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),h=Math.min(1,u.t/.3),[c,d]=P(t,n),m=qo(r)*h,p=u.t;s.globalAlpha=.6*f,s.fillStyle=it.navy,Tn(s,c,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=it.deep,Tn(s,c,d,m*.62,m*.31,3);for(let y=0;y<3;y++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,M=1-b,v=y/3*Sn+p*2.2+b*5,w=c+Math.cos(v)*m*(.08+.9*M),_=d+Math.sin(v)*m*(.08+.9*M)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=M>.6?it.water:M>.3?it.bio:it.bioL;const A=M>.5?4:3;s.fillRect(ht(w)-(A>>1),ht(_)-1,A,2+(M>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=it.foam,vo(s,c,d,m*.97,56,3,p*1.4,4),s.fillStyle=it.water,vo(s,c,d,m*.85,40,2,p*1.9,3),s.globalAlpha=f,s.fillStyle=it.inkV,Tn(s,c,d,19*h,9*h,1),s.fillStyle=it.abyss,Tn(s,c,d,15*h,7*h,1)}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),h=S.T;s.globalAlpha=f;for(const c of i){const d=c.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+c.ph))*1.1;G4(s,t+Math.cos(d)*r*c.d,n+Math.sin(d)*r*c.d,m,h,c.ph)}for(let c=0;c<6;c++){const d=u.t*1.5+c/6,m=Math.floor(d),p=d-m,y=H(m*11+c)*Sn,x=r*.3*H(m*5+c*7),[b,M]=P(t+Math.cos(y)*x,n+Math.sin(y)*x,p*.9),v=2+ht(p*3);s.globalAlpha=f*(1-p),s.fillStyle=it.foam,s.fillRect(ht(b)-v,ht(M),1,2),s.fillRect(ht(b)+v,ht(M),1,2),s.fillRect(ht(b),ht(M)-v,2,1),s.fillRect(ht(b),ht(M)+v,2,1)}}}),T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=P(t,n);s.globalAlpha=1-l,s.fillStyle=it.foam,vo(s,u,f,qo(r)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*Sn;E(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,g(1,2.5),.5,s%3?it.foam:it.bio,3,8,s%3===0)}};const Mc=new Map;function ys(e,t,n){const r=lt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function N4(e,t,n,r,o){const a=10*r;if(a<1){e.fillStyle=it.inkL,e.fillRect(ht(t-26),ht(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=it.inkL,e.fillRect(ht(t-u-2),ht(n+l),ht(u*2+4),2),e.fillStyle=it.eyeD,e.fillRect(ht(t-u),ht(n+l),ht(u*2),2)}const s=Math.sin(o*.8)*6;e.fillStyle=it.eye,Tn(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=it.abyss,e.fillRect(ht(t+s-8),ht(n-2),16,Math.max(2,ht(5*r))),e.fillStyle="#ffffff",e.fillRect(ht(t+s-6),ht(n-Math.min(6,a-1)),3,2)}const lo=2.5,Pn=.5,di=.84,B4=[1,.9,.75,.6,.45],$4=[.85,.75,.62,.5,.38];let hf=null,df=null,U1=null,X1=null;const G1=e=>1-(1-e)*(1-e);function N1(e,t,n,r,o,i,a,s){if(o<.05)return;const l=r*Pn,u=r*(Pn+(di-Pn)*Math.min(1,o/lo)),f=(u-l)/o;for(let h=0;h<14;h++){const c=h/14*Sn;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+h*.37)%1;if(p>.5)continue;const y=c+i*(2.6-1.3*m)+m*2.4,x=Math.cos(y),b=Math.sin(y),M=l+(u-l)*m;no(x,b,-f)>0===s&&(pn(t+x*M,n+b*M,m*o),e.globalAlpha=a*(.45+.55*(1-p*2))*(s?.9:.7),e.fillStyle=m<.3?it.mag:m<.65?it.bio:it.water,e.fillRect(ht(At.x)-3,ht(At.y)-1,m<.3?4:6,3))}}}function W4(e){const t={ended:!1,endT:0};Mc.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*Sn,off:Math.random(),sp:g(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*Sn,off:Math.random(),sz:ht(g(4,7))})),u=[0,1,2,3,4].map(h=>({a:h/5*Sn+g(-.2,.2),ph:Math.random()*Sn}));T({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(h,c,d){const m=ys(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=P(r,o),b=qo(i)*p;h.globalAlpha=.4*m,h.fillStyle=it.inkP,Tn(h,y,x,b*.95,b*.475,3),h.globalAlpha=.7*m,h.fillStyle=it.ink,Tn(h,y,x,b*.52,b*.26,3),h.globalAlpha=m,h.fillStyle=it.abyss,Tn(h,y,x,b*.27,b*.135,2);for(const M of s){const v=(M.off+d.t*M.sp)%1,w=1-v,_=b*(.27+.73*w),A=M.a+v*v*4+d.t*.8,R=y+Math.cos(A)*_,C=x+Math.sin(A)*_*.5,I=y+Math.cos(A-.14)*_*1.04,z=x+Math.sin(A-.14)*_*.52;h.globalAlpha=m*(.3+.7*v),h.fillStyle=w>.6?it.water:w>.3?it.bio:it.mag,Yp(h,[I,z],[R,C],w>.5?2:3)}h.globalAlpha=.8*m,h.fillStyle=it.inkV,vo(h,y,x,b,64,3,-d.t*.6,4)}});const f={nl:0};T({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(h,c,d){const m=ys(t,n,d);if(m<=0)return;const p=G1(Math.min(1,d.t/.55))*(t.ended?m:1);pn(r,o);const y=At.x,x=At.y,b=yr(lo*p);(!hf||U1!==h)&&(U1=h,hf=[{u0:0,fill:zt(h,it.deep,11),a:.7},{u0:.45,fill:zt(h,it.water,10),a:.7},{u0:.78,fill:zt(h,it.bio,9),a:.7},{u0:.93,fill:zt(h,it.bioL,12),a:.75}]),Gr(h,y,x,ye(i*Pn),ye(i*(Pn+(di-Pn)*p)),b,!1,hf,B4,m),N1(h,r,o,i,lo*p,d.t,m,!1),h.globalAlpha=.9*m,h.fillStyle=it.foam,xo(h,r,o,lo*p,i*(Pn+(di-Pn)*p),110,4,-d.t*1.3,-1),h.fillStyle=it.water,xo(h,r,o,lo*p-.08,i*(Pn+(di-Pn)*p)*.97,60,3,-d.t*1.9,-1),Eo(f,r,o,i*1.05,4911328,.55*m)}}),T({type:"custom",layer:"top",add:!0,dur:a,x:r,y:o,draw(h,c,d){const m=ys(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=P(r,o,.04),b=qo(i)*.28*p,M=S.T;for(let v=0;v<44;v++){const w=v/44*Sn+M*2.5,_=.6+.4*Math.sin(M*20+v*1.7);h.globalAlpha=m*_,h.fillStyle=v%2?it.bio:it.mag,h.fillRect(ht(y+Math.cos(w)*b)-1,ht(x+Math.sin(w)*b*.5)-1,3,3)}h.globalAlpha=m*.45,h.fillStyle=it.bioL;for(let v=0;v<18;v++){const w=Math.PI+v/17*Math.PI;h.fillRect(ht(y+Math.cos(w)*b*1.15),ht(x-14+Math.sin(w)*b*.35),2,2)}}}),T({type:"custom",layer:"top",dur:a,x:r,y:o,draw(h,c,d){const m=ys(t,n,d);if(m<=0)return;const p=S.T,y=Math.min(1,d.t/.5)*(t.ended?m:1);h.globalAlpha=m;for(const w of l){const _=(w.off+d.t*.4)%1,A=1-_,R=w.a+_*5,[C,I]=P(r+Math.cos(R)*i*.95*A,o+Math.sin(R)*i*.95*A,.05+.35*Math.sin(_*Math.PI)),z=Math.max(2,ht(w.sz*(.35+.65*A)));h.fillStyle=it.ink,h.fillRect(ht(C)-(z>>1)-1,ht(I)-(z>>1)-1,z+2,z+2),h.fillStyle=it.rock,h.fillRect(ht(C)-(z>>1),ht(I)-(z>>1),z,z),h.fillStyle=it.rockL,h.fillRect(ht(C)-(z>>1),ht(I)-(z>>1),Math.max(1,z>>1),1)}const x=u.map(w=>({t:w,a:w.a+d.t*.3})).sort((w,_)=>Math.cos(w.a)+Math.sin(w.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:w,a:_}of x){const A=[];for(let R=0;R<=18;R++){const C=R/18,I=i*(.92-.42*C*C),z=_+Math.sin(p*2+w.ph+C*3)*.12*C,F=Math.sin(C*Math.PI*.8)*1.9*y-Math.max(0,C-.8)*1.2*y;A.push(P(r+Math.cos(z)*I,o+Math.sin(z)*I,Math.max(0,F)))}sl(h,A,15*y+2,3)}const b=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,v]=P(r,o,.3);N4(h,M,v,b,p)}}),T({type:"custom",layer:"top",dur:a,x:r,y:o,draw(h,c,d){const m=ys(t,n,d);if(m<=0)return;const p=G1(Math.min(1,d.t/.55))*(t.ended?m:1);pn(r,o);const y=At.x,x=At.y,b=yr(lo*p);(!df||X1!==h)&&(X1=h,df=[{u0:0,fill:zt(h,it.water,4),a:.55},{u0:.5,fill:zt(h,it.water,6),a:.6},{u0:.8,fill:zt(h,it.bio,8),a:.65},{u0:.93,fill:zt(h,it.bioL,12),a:.75}]),Gr(h,y,x,ye(i*Pn),ye(i*(Pn+(di-Pn)*p)),b,!0,df,$4,m),N1(h,r,o,i,lo*p,d.t,m,!0),h.globalAlpha=m,h.fillStyle=it.foam,xo(h,r,o,lo*p,i*(Pn+(di-Pn)*p),110,4,-d.t*1.3,1),h.fillStyle=it.bioL,xo(h,r,o,lo*p+.04,i*(Pn+(di-Pn)*p)*.98,24,2,d.t*2.1,1)}}),at(Ph(e)?6:2)}V.pulpo_R=e=>{if(e.type==="channel"){W4(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){T({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[a,s]=P(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=it.mag,vo(o,a,s,qo(r)*(.25+.75*l),48,3,i*3),o.fillStyle=it.bioL,vo(o,a,s,qo(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*Sn,a=r*g(.6,1);E(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,o%2?it.inkV:it.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=Mc.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=S.T),Mc.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)E(t+g(-.6,.6),n+g(-.6,.6),.2,g(-1,1),g(-1,1),g(.5,1.5),.6,i%2?it.ink:it.inkV,4,2,!1);return}T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.3);if(a<.35){const u=ht(30*(1-a/.35))+2;i.fillStyle=it.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=it.mag,vo(i,s,l+20,qo(r)*u,56,4),i.fillStyle=it.bio,vo(i,s,l+20,qo(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*Sn,s=g(2,5);E(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,g(1.5,3.5),g(.5,.9),[it.ink,it.inkV,it.bio,it.mag][i%4],i%3?3:4,9,i%4>1,.94)}at(Ph(e)?8:3)}};Oe.pulpo_A=(e,t,n,r,o,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(o),l=Math.sin(o);e.fillStyle=it.ink,Tn(e,n-s*11,r-l*11,3,3,1),Tn(e,n-s*18,r-l*18,2,2,1),e.fillStyle=it.ink,Tn(e,n,r,a+1,a*.8+1,2),e.fillStyle=it.inkV,Tn(e,n,r,a-1,a*.8-1,2),e.fillStyle=it.inkL,e.fillRect(ht(n-3),ht(r-4),3,2),e.fillStyle=it.bio,e.fillRect(ht(n+2),ht(r+1),2,2),Math.random()<.3&&E(t.x,t.y,t.z||.45,0,0,-.2,.35,it.ink,2,5,!1)};Ge.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*Sn;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=it.ink,Tn(o,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*Sn,h=(u%2?13:19)*l;o.fillStyle=it.ink,Yp(o,[a,s],[a+Math.cos(f)*h,s+Math.sin(f)*h*.75],4),o.fillStyle=it.inkV,o.fillRect(ht(a+Math.cos(f)*(h+4))-2,ht(s+Math.sin(f)*(h+4)*.75)-2+i*10,4,4)}o.fillStyle=it.bio,o.fillRect(ht(a-3),ht(s-2),2,2),o.fillRect(ht(a+4),ht(s+2),2,2)}});for(let o=0;o<6;o++)E(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(.8,2),.4,o%3?it.ink:it.bio,2,8,o%3===0)};const Gt=Math.round,to=Math.PI*2,Rt={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},mf=e=>e*B.HW*Math.SQRT2;function wo(e,t,n,r){r=Math.max(1,Gt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Gt(t[0]+(n[0]-t[0])*s/i-a),Gt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Ra(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(Gt(t-l),Gt(n+a),Math.max(1,Gt(l*2)),i)}}function bc(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=Gt(n-a*o/2),u=Gt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++)for(let c=0;c<a;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function Ja(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*to;e.fillRect(Gt(t+Math.cos(u)*r-i/2),Gt(n+Math.sin(u)*r*.5-i/2),i,i)}}const gs=new Map;function H4(e){if(gs.has(e))return!1;if(gs.size>300)for(const[t,n]of gs)S.T-n>4&&gs.delete(t);return gs.set(e,S.T),!0}function q4(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Xe(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const B1=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],V4=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function Zp(e,t,n,r){bc(e,B1,t+1,n+1,r,{g:Rt.deep,v:Rt.deep}),bc(e,B1,t,n,r,{g:Rt.pad,v:Rt.moss})}function Y4(e,t){const n=Math.random()*6;T({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,a]=P(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=Rt.waterD,Ja(r,i,a,8+o*14,10,2,n,3),Zp(r,i,a+Gt(Math.sin(o*9+n)),o<.55?2:1)}})}function j4(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[t+o*l,n+i*l];e.fillStyle=Rt.ink,wo(e,a(-11),a(11),5),e.fillStyle=Rt.moss,wo(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",wo(e,a(0),a(8),3),e.fillStyle="#ffffff",wo(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(Gt(s[0]-2),Gt(s[1]-2),4,4),e.fillStyle=Rt.ink,e.fillRect(Gt(s[0]-1),Gt(s[1]-1),2,2)}function K4(e,t){T({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=Rt.foam,Ja(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=Rt.water,Ja(n,o,i,3+r*16,10,2)}}),T({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.5),a=Gt(12*(1-r))+2;n.fillStyle=Rt.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*to,o=g(.8,2);E(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,g(1.5,3),.5,n%3?Rt.water:Rt.padL,2,9,!1,.95)}}const xs=new Map;function Q4(e){let t=xs.get(e.id);if(!t&&(t={p:[],drop:0,seen:S.T},xs.set(e.id,t),xs.size>40))for(const[n,r]of xs)S.T-r.seen>2&&xs.delete(n);return t.seen=S.T,t}V.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=P(r,o,.55),u=Gt(9*(1-a))+2;i.fillStyle=Rt.pad;for(let f=-u;f<=u;f+=2){const h=u-Math.abs(f);i.fillRect(s-h,l+f,h*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)E(r,o,.5,t*g(2,4)+g(-.7,.7),n*g(2,4)+g(-.7,.7),g(.6,1.6),.4,i%2?Rt.water:Rt.padL,2,6,!1,.9)};Oe.rana_Q=(e,t,n,r,o,i)=>{const a=t.z||.45,s=Q4(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,Y4(t.x,t.y)),vt(!0);const l=$t();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?Rt.padL:Rt.pad,wo(l,P(s.p[u-1][0],s.p[u-1][1],a),P(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));l.globalAlpha=1,vt(!1),j4(e,n,r,i*26);for(const u of q4(t))H4("rq"+t.id+":"+u.id)&&K4(u.x,u.y)};function Z4(e,t,n){const r=Array.from({length:5},(i,a)=>({a:a/5*to+g(-.3,.3),d:n*g(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*to,h:g(26,44),w:Math.random()<.5?4:6}));T({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,at(4),hi({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let h=0;h<34;h++){const c=Math.random()*to,d=g(1,3.2);E(e+Math.cos(c)*.3,t+Math.sin(c)*.3,.15,Math.cos(c)*d,Math.sin(c)*d,g(2.5,5),g(.5,.8),h%4?Rt.foam:Rt.water,3,12,!1,.97)}for(let h=0;h<6;h++)E(e+g(-.6,.6),t+g(-.6,.6),.1,g(-.4,.4),g(-.4,.4),g(1,2),.7,Rt.mud,4,8,!1)}const[l,u]=P(e,t),f=mf(n);i.globalAlpha=.35*(1-a),i.fillStyle=Rt.waterD,Ra(i,l,u,f*.75,f*.375,2);for(let h=0;h<3;h++){const c=a*1.3-h*.15;c<=0||c>=1||(i.globalAlpha=1-c,i.fillStyle=h===0?Rt.foam:Rt.water,Ja(i,l,u,f*(.2+c*.95),30,3,h,h===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const h of r){const c=mf(h.d)*(.6+a*.4);Zp(i,l+Math.cos(h.a)*c,u+Math.sin(h.a)*c*.5+Math.sin(a*10+h.ph)*1.5,2)}a>.08&&bc(i,V4,l,u-4,a<.2?2:3,{g:Rt.moss,p:Rt.pink,P:Rt.pinkL,y:Rt.eye})}}),T({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=mf(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const h of o){const c=s+Math.cos(h.a)*u,d=l+Math.sin(h.a)*u*.5,m=Gt(h.h*f),p=Math.cos(h.a)*a*10;m<2||(i.fillStyle=Rt.waterD,i.fillRect(Gt(c-h.w/2+p*.5),Gt(d-m),h.w,m),i.fillStyle=Rt.water,i.fillRect(Gt(c-h.w/2+p*.5),Gt(d-m),h.w-2,m-2),i.fillStyle=Rt.foam,i.fillRect(Gt(c-h.w/2+p-1),Gt(d-m-3),h.w+2,4))}}})}V.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,a=1.7,s=r-t,l=o-n,u=Math.hypot(s,l)||1;T({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,h){const[c,d]=P(t,n);f.globalAlpha=1-h,f.fillStyle=Rt.waterD,Ja(f,c,d,10+h*34,18,3,0,3),f.fillStyle=Rt.foam,Ja(f,c,d,6+h*22,12,2,.3,4)}});for(let f=0;f<12;f++)E(t,n,.15,-s/u*g(1,2.5)+g(-.8,.8),-l/u*g(1,2.5)+g(-.8,.8),g(1.5,3),.5,f%3?Rt.mud:Rt.water,3,9,!1);T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,h){const c=Math.min(1,h*(i+.25)/i),d=Math.max(0,c-.45),m=h>.75?(1-h)*4:1;for(let p=d;p<=c;p+=.05){const[y,x]=P(t+s*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,c-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=Rt.deep,f.fillRect(Gt(y)-3,Gt(x)-3,6,6),f.fillStyle=b>.7?Rt.padL:Rt.pad,f.fillRect(Gt(y)-2,Gt(x)-2,4,4)}}}),T({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,h,c){c.go||(c.go=!0,Z4(r,o,a))}})};V.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,a)=>{const s=a/9*to+g(-.3,.3),l=a===0?0:g(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:g(14,22),z:g(.15,.6),up:g(.2,.5),col:[Rt.smokeA,Rt.smokeB,Rt.smokeC][a%3],dl:g(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:g(.3,.6)}));T({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.2),u=Gt(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=Rt.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),T({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,h]=P(l.x,l.y,l.z+l.up*u),c=Gt(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",Ra(i,f+2,h+3,c,c*.8,3),i.fillStyle=l.col,Ra(i,f,h,c,c*.8,3),i.fillStyle="#c8d4b0",Ra(i,f-c*.3,h-c*.35,c*.35,c*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,h]=P(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const c=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=Gt(f+d*6)-3,p=Gt(h)-3;if(i.fillStyle=Rt.deep,i.fillRect(m-1,p-1,8,c?3:7),c){i.fillStyle=Rt.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=Rt.eye,i.fillRect(m,p,6,5),i.fillStyle=Rt.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*to,s=g(1,2.6);E(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,g(1,2.5),.6,i%2?Rt.ink:Rt.moss,2,7,!1,.92)}};function J4(e,t,n,r){T({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const a=P(e,t,.35),s=P(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?Rt.ink:Rt.moss;for(let h=u;h<=l;h+=.03){const c=Gt((2+8*Math.sin(Math.PI*h))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*h,m=a[1]+(s[1]-a[1])*h+Math.sin(h*14)*1.5;o.fillRect(Gt(d-c/2),Gt(m-c/2),c,c)}}}});for(let o=0;o<10;o++){const i=Math.random();E(e+(n-e)*i,t+(r-t)*i,.35,g(-.6,.6),g(-.6,.6),g(.2,1),.5,Rt.ink,3,6,!1)}}function $1(e,t,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?Rt.ink:f===1?"#b8ffd0":"#ffffff";const h=f===0?2:0,c=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,p=Math.max(1,Gt(c*(1-Math.abs(d/u*2-1))));e.fillRect(Gt(t+s*m*o/2-p/2+h),Gt(n+l*m*o/2-p/2+h),p,p)}}}function tv(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+g(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));T({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const a=i*.5,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const h=Math.min(1,f/.05),c=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,c),$1(o,s+u.ox,l+u.oy,u.a,u.len,Gt(6*c)+1,h),$1(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,Gt(6*c)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const a=i*.4,[s,l]=P(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const h=Gt(16*(1-f/.1))+2;o.fillStyle=Rt.padL,o.fillRect(s+u.ox-h,l+u.oy-h,h*2,h*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*to,i=g(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:g(5,11),drips:[g(-1,1),g(-1,1),g(-1,1)]}});T({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=P(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=Rt.inkP,Ra(o,s,l,u,u*.5,2),o.fillStyle=Rt.ink,Ra(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(Gt(s+f*u*1.8),Gt(l+f*u*.6),3,2);o.fillStyle=Rt.moss,o.fillRect(Gt(s+u*.4),Gt(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*to,a=g(1.5,4.5);E(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,g(1,3),g(.4,.7),o%5?Rt.ink:Rt.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*to;E(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,Rt.padL,2,0,!0)}at(8)}V.rana_R=e=>{if(e.type==="blink"){J4(e.x,e.y,e.ex??e.x,e.ey??e.y);return}tv(e.x,e.y)};Ge.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],h=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const c=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?c:[f[0]+(h[0]-f[0])*(l-.35)/.65,f[1]+(h[1]-f[1])*(l-.35)/.65];o.fillStyle=Rt.moss,wo(o,u,c,5),l>=.35&&wo(o,f,d,5),o.fillStyle="#ffffff",wo(o,u,c,2),l>=.35&&wo(o,f,d,2)}});for(let o=0;o<5;o++)E(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(1,2.2),.35,o%2?Rt.water:Rt.padL,2,8,!1)};const ev="#7a879c",nv="#363e50",rv="#c9d3e2",W1="#e8b858",ov="#ffa040",Jp="#f2e8d2",el="#cdbb9a",Ih="#a08f72",ty="#6f6250",ts="#33241a",iv="#8a7356",ey="#9a948a",ny="#7a7468",ry="#5e584e",av="#c4beb2",sv="#ffe2a0",lv="#d89a3a",uv="#fff8e6",fv="#ff5a1a",ze=Math.round,pf=Math.PI*2;function xn(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ze(t),ze(n),r,o)}function zl(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(ze(t+(r-t)*l/s-i/2),ze(n+(o-n)*l/s-i/2),i,i)}function H1(e,t,n,r,o){const[i,a]=P(t,n),s=r*B.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(ze(i-f),ze(a+u),ze(f*2),2)}}function oy(e,t){const n=(e-t)*B.HW,r=(e+t)*B.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const iy=e=>{const t=lt(e);return t&&!t.dead&&!Xe(t)?t:null},qu=()=>[ey,ny,ry,Ih][Math.random()*4|0];function cv(e,t,n,r,o){if(t=ze(t)-6,n=ze(n)-5,xn(e,t,n,12,10,nv),xn(e,t+1,n+1,10,8,ev),xn(e,t+1,n+1,10,2,rv),xn(e,t+2,n+6,2,2,o),xn(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,xn(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const hv=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],dv=[sv,lv,uv,fv];function yf(e,t,n,r,o){t=ze(t),n=ze(n);for(const[i,a,s,l,u]of hv){const f=o>0?i:-i-s;e.fillStyle=dv[u],e.fillRect(t+f*r,n+a*r,s*r,l*r)}}Ge.rino=e=>{T({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=P(e.x,e.y,.4),i=ze(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;xn(t,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":Jp)}}});for(let t=0;t<3;t++)E(e.x,e.y,.3,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,qu(),3,10,!1,.95);for(let t=0;t<2;t++)E(e.x+g(-.2,.2),e.y+g(-.2,.2),.1,g(-.4,.4),g(-.4,.4),.5,.5,el,5,0,!1,.9);at(1.5)};V.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[h,c]=oy(o,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(M,v)=>g(-.06,.06)+(v%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:g(.15,.35)}:null),y=Array.from({length:8},(M,v)=>({k:(v+.5)/8,o:g(-.35,.35),r:Array.from({length:4},()=>[g(-10,6),g(-8,2),ze(g(6,12)),ze(g(5,8)),[el,Ih,el,ty][Math.random()*4|0]])}));let x=0,b=!1;T({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r),R=Math.floor(A*d);M.globalAlpha=.8*Math.min(1,(w.dur-_)/.6);for(const C of[-.3,.3]){const I=C>0?1:-1;let[z,F]=P(e.x+s*C,e.y+l*C);for(let U=1;U<=R;U++){const G=U/d,Y=C+m[U]*I,[k,L]=P(e.x+o*G+s*Y,e.y+i*G+l*Y);zl(M,z,F+1,k,L+1,2,iv),zl(M,z,F,k,L,2,ts);const D=p[U];if(D&&D.s===I){const[$,W]=P(e.x+o*G+s*(Y+I*D.l)+u*D.l*.5,e.y+i*G+l*(Y+I*D.l)+f*D.l*.5);zl(M,k,L,$,W,1,ts)}z=k,F=L}}}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r);for(;x<18*A;){x++;const R=Math.random()*A;E(e.x+o*R+g(-.3,.3),e.y+i*R+g(-.3,.3),.1,-u*g(.5,2)+g(-1,1),-f*g(.5,2)+g(-1,1),g(2,4),g(.5,.8),qu(),3,12,!1,.95)}if(_>=r&&!b){b=!0,at(5);for(let R=0;R<12;R++){const C=Math.atan2(f,u)+g(-.9,.9),I=g(2,4.5);E(t+u*.5,n+f*.5,.2,Math.cos(C)*I,Math.sin(C)*I,g(2,4),g(.5,.8),qu(),3,12,!1,.95)}}for(const R of y){const C=_-R.k*r;if(C<0||C>.9)continue;const I=C/.9,z=1+I*1.2,[F,U]=P(e.x+o*R.k+s*R.o,e.y+i*R.k+l*R.o,.15+I*.5);M.globalAlpha=.6*(1-I);for(const G of R.r)xn(M,F+G[0]*z,U+G[1]*z,ze(G[2]*z),ze(G[3]*z),G[4])}}}),T({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(M,v,w){const _=iy(e.uid);if(!_)return;const A=v*w.dur;M.globalAlpha=A>r?Math.max(0,1-(A-r)/.08):1;const[R,C]=P(_.x+u*.6,_.y+f*.6,.45);for(let F=0;F<6;F++){const U=7-F;xn(M,R+h*F*2.5-U/2,C+c*F*2.5-U/2,U,U,F<2?Jp:"#ffffff")}const[I,z]=P(_.x,_.y,.5);M.globalAlpha*=.6;for(let F=0;F<5;F++){const U=(F-2)*9,G=24+F*13%3*10;zl(M,I-c*U-h*26,z+h*U-c*26,I-c*U-h*(26+G),z+h*U-c*(26+G),1,"#fff6e0")}}})};V.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=iy(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=P(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)E(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,g(-2,2),g(-2,2),g(1,2.5),.3,M?ov:W1,2,8,!0,.9)}const p=(1-m)*(1-m)*46,y=h+Math.cos(d.a)*30,x=c+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,cv(i,y+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,ze((S.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":W1)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),at(3)};V.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*pf+g(-.08,.08),j:g(.9,1.08),w:ze(g(4,7)),h:ze(g(3,6)),col:[ey,ny,ry][i%3]}));T({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,H1(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,H1(o,e.x,e.y,.4,"#24180e");for(const[f,h,c]of[[.45,ts,2],[.7,ts,2],[.95,el,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*pf,[p,y]=P(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);xn(o,p-c/2,y-1,c,2,h)}}for(const f of r){const[h,c]=P(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,xn(o,h-f.w/2-1,c,f.w+2,2,"#000000"),o.globalAlpha=u,xn(o,h-f.w/2,c-f.h-d,f.w,f.h,f.col),xn(o,h-f.w/2,c-f.h-d,f.w,1,av)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[a,s]=P(e.x,e.y,.05),l=ze(30+110*i);o.globalAlpha=1-i,xn(o,a-l,s-1,l*2,2,"#fff2d0"),xn(o,a-l*.6,s-3,ze(l*1.2),1,"#ffd890");for(const u of[-1,1])xn(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=g(0,pf),a=t*g(1.5,2.5);E(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,g(3,6),g(.5,.9),qu(),Math.random()<.3?4:3,14,!1,.96)}at(8)};V.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const h=Math.min(1,Math.max(0,(f-u.del)/.6)),c=.4+(o-.4)*(1-(1-h)*(1-h));return[e.x+Math.cos(u.a)*c,e.y+Math.sin(u.a)*c,h,c]};T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const h=f*1.7,c=Math.min(1,(1.7-h)/.6);u.globalAlpha=.2*c,u.fillStyle="#4a3420",u.beginPath();let[d,m]=P(e.x,e.y);u.moveTo(ze(d),ze(m));for(let p=0;p<=12;p++){const y=r-i+2*i*p/12;[d,m]=P(e.x+Math.cos(y)*o,e.y+Math.sin(y)*o),u.lineTo(ze(d),ze(m))}u.closePath(),u.fill(),u.globalAlpha=.7*c;for(const p of s){const[,,,y]=l(p,h),x=p.a+Math.PI/2;for(let b=.6;b<y;b+=.55){const M=Math.round(b/.55)%2?.12:-.12,[v,w]=P(e.x+Math.cos(p.a)*b+Math.cos(x)*M,e.y+Math.sin(p.a)*b+Math.sin(x)*M);xn(u,v-4,w-1,3,3,ts),xn(u,v+1,w-1,3,3,ts)}}}}),T({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const h=f*a;for(const c of s){const[d,m,p]=l(c,h);if(h<c.del)continue;const y=.85*Math.min(1,(h-c.del)/.08)*Math.max(0,1-Math.max(0,h-c.del-.45)/.4);if(y<=0)continue;const[x,b]=P(d,m,.55),[M]=oy(Math.cos(c.a),Math.sin(c.a)),v=M>=0?1:-1,w=p<.5?3:4,[_,A]=P(e.x,e.y,.55),R=x-_,C=b-A;u.globalAlpha=y*.18,yf(u,x-R*.35,b-C*.35,w,v),u.globalAlpha=y*.35,yf(u,x-R*.17,b-C*.17,w,v),u.globalAlpha=y,yf(u,x,b,w,v)}}});for(let u=0;u<40;u++){const f=r+g(-i,i),h=g(.4,o*.8),c=g(2,5);E(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.1,Math.cos(f)*c,Math.sin(f)*c,g(.5,1.5),g(.5,.9),[el,Ih,ty][u%3],4,3,!1,.9)}at(10)};const j=Math.round,Ln=Math.PI*2,vc=e=>e*B.HW*Math.SQRT2,Q={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},d0=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function $s(e,t,n,r){r=Math.max(1,j(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(j(t[0]+(n[0]-t[0])*s/i-a),j(t[1]+(n[1]-t[1])*s/i-a),r,r)}function nr(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(j(t-l),j(n+a),Math.max(1,j(l*2)),i)}}function ay(e,t,n,r=99){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function mv(e,t,n,r=1.6){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}const m0=e=>P(e.x,e.y,.5);function p0(e,t,n,r,o,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,h=Math.max(2,Math.ceil(l/3)),c=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+a*d+u*p,t[1]+s*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?Q.tongueD:d===1?Q.tongue:Q.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=h;p++){const y=p/h,x=c(y),b=d===2?m:Math.max(2,j(m*(1-y*.3)));e.fillRect(j(x[0]-b/2),j(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=c(d/l),p=j(m[0]),y=j(m[1]);e.fillStyle=Q.ink,e.fillRect(p-2,y-5,5,10),e.fillStyle=Q.iron,e.fillRect(p-1,y-4,3,8),e.fillStyle=Q.ironL,e.fillRect(p-1,y-4,1,3)}}const gf=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function zh(e,t,n,r,o=1.5){const i=Math.cos(r),a=Math.sin(r),s=d=>[t+(i*d[0]-a*d[1])*o,n+(a*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?Q.ink:d===1?Q.iron:Q.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<gf.length;p++)$s(e,s(gf[p-1]),s(gf[p]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=Q.ink,$s(e,l,u,4),e.fillStyle=Q.ironL,$s(e,l,u,2),e.fillStyle=Q.rust;const f=s([7.5,5]),h=s([-3,0]);e.fillRect(j(f[0]),j(f[1]),2,2),e.fillRect(j(h[0]),j(h[1])-1,3,2);const c=s([-12.5,0]);e.fillStyle=Q.ink,e.fillRect(j(c[0])-5,j(c[1])-5,10,10),e.fillStyle=Q.rust,e.fillRect(j(c[0])-4,j(c[1])-4,8,8),e.fillStyle=Q.ink,e.fillRect(j(c[0])-2,j(c[1])-2,4,4)}const la=[];function pv(e){let t=null,n=1.3;for(const r of la){if(r.done||S.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}function yv(e,t,n){T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=lt(e);if(!i)return;const a=m0(i),s=P(t,n,.45),l=1-o*o,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&p0(r,a,u,S.T,4*l,3*l),zh(r,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-o*.4)}})}function gv(e,t){T({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=P(e,t);n.globalAlpha=1-r,n.fillStyle=Q.slimeL;for(let a=0;a<10;a++){const s=a/10*Ln+r;n.fillRect(j(o+Math.cos(s)*(8+r*26))-1,j(i+Math.sin(s)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)E(e,t,.5,g(-1.2,1.2),g(-1.2,1.2),g(1,2.4),.45,n%2?Q.slime:Q.tongueL,3,9,!1)}function xv(e){let t=null;for(const h of la)!h.pulled&&h.team===e.team&&S.T-h.t<2.2&&(!t||h.t>t.t)&&(t=h);t&&(t.pulled=!0,t.done=!0);const n=t?lt(t.uid):ay(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];T({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(h,c,d){const m=lt(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const y=1-(d.t-p[2])/1.1;if(!(y<=0)){h.globalAlpha=y*.9;for(const x of[-1,1]){const[b,M]=P(p[0]+l*x,p[1]+u*x);h.fillStyle=Q.mud,h.fillRect(j(b)-2,j(M)-1,5,3),h.fillStyle=Q.slime,h.fillRect(j(b)-1,j(M)-2,2,1)}}}}}),T({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(h,c,d){const m=lt(o),p=r?lt(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){gv(m.x,m.y),d.t=d.dur+1;return}const x=m0(p),b=P(m.x,m.y,.5);p0(h,x,b,S.T,1.2,2),zh(h,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),at(d0({uid:r})?5:2)}V.sapo_Q=e=>{if(e.type==="hook_pull"){xv(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=la.length-1;a>=0;a--)S.T-la[a].t>3&&la.splice(a,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};la.push(r),T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,r.pulled||yv(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)E(o,i,.5,t*g(1.5,3.5)+g(-.8,.8),n*g(1.5,3.5)+g(-.8,.8),g(.8,2),.45,a%3?Q.slime:Q.tongueL,2+a%2,8,!1);T({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(a,s){const[l,u]=P(o,i,.5),[f,h]=P(o+t,i+n,.5),c=f-l,d=h-u,m=Math.hypot(c,d)||1;a.globalAlpha=1-s,a.fillStyle=Q.fat;for(let p=-1;p<=1;p++)$s(a,[l-d/m*p*7,u+c/m*p*7],[l+c*(.3+s*.5)-d/m*p*7,u+d*(.3+s*.5)+c/m*p*7],2)}})};Oe.sapo_Q=(e,t,n,r,o,i)=>{const a=pv(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=S.T);const s=a?lt(a.uid):t.src||ay(t.x,t.y,"sapo",11);s&&!s.dead&&p0(e,m0(s),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),zh(e,n,r,o),Math.random()<.3&&E(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?Q.slime:Q.tongueL,2,6,!1)};V.sapo_Q_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,a]=P(t,n,.5);for(let l=0;l<10;l++){const u=l/10*Ln+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?Q.fat:Q.meatL,$s(r,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const s=j(10*(1-o))+2;r.fillRect(i-s/2,a-s/2,s,s)}});for(let r=0;r<14;r++){const o=Math.random()*Ln,i=g(1,3);E(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3.5),g(.5,.8),[Q.meat,Q.meatL,Q.fat,Q.slime][r%4],r%3?3:4,11,!1,.95)}};const wc=new Map;function sy(e){const t={ended:!1,endT:0};return wc.set(e.uid+"_"+e.key,t),t}function ly(e){const t=wc.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=S.T),wc.delete(e.uid+"_"+e.key)}function ua(e,t,n){const r=lt(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function Mv(e){const t=sy(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,a=l=>{const u=lt(n);return u?[u.x,u.y]:[l.x,l.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=ua(t,n,f);if(h<=0)return;const[c,d]=a(f),[m,p]=P(c,d),y=vc(o),x=S.T;l.globalAlpha=.22*h,l.fillStyle=Q.gasD,nr(l,m,p,y*.95,y*.475,3);for(let b=0;b<6;b++){const M=b/6*Ln+x*.25,v=y*(.4+.35*H(b+i));l.globalAlpha=.3*h,l.fillStyle=b%2?Q.gas:Q.gasD,nr(l,m+Math.cos(M)*v,p+Math.sin(M)*v*.5,18+4*Math.sin(x*2+b),8,2)}for(let b=0;b<44;b++){const M=b/44*Ln-x*.4,v=y*(.95+.05*Math.sin(M*5+x*3));l.globalAlpha=.85*h,l.fillStyle=b%3?Q.gas:Q.gasL,l.fillRect(j(m+Math.cos(M)*v)-1,j(p+Math.sin(M)*v*.5)-1,3,3)}for(let b=0;b<5;b++){const M=x*1.3+b*.2,v=Math.floor(M),w=M-v,_=H(v*13+b+i)*Ln,A=y*(.15+.75*H(v*7+b*3+i)),R=m+Math.cos(_)*A,C=p+Math.sin(_)*A*.5;l.globalAlpha=h,l.fillStyle=w>.85?Q.gasL:Q.gas;const I=w>.85?4+(w-.85)*60:2+w*6;for(let z=0;z<8;z++){const F=z/8*Ln;l.fillRect(j(R+Math.cos(F)*I)-1,j(C+Math.sin(F)*I*.6)-1,2,2)}}}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=ua(t,n,f);if(h<=0)return;const[c,d]=a(f),[m,p]=P(c,d),y=vc(o),x=S.T;for(let v=0;v<10;v++){const w=H(v*7.3+i),_=(x*.7+w)%1,A=v/10*Ln+w*2,R=y*(.15+.7*H(v*3.1+i)),C=m+Math.cos(A)*R,I=p+Math.sin(A)*R*.5;l.globalAlpha=h*Math.sin(_*Math.PI)*.9,l.fillStyle=v%2?Q.gasL:Q.gas;for(let z=0;z<7;z++)l.fillRect(j(C+Math.sin(z*.9+x*6+v)*4)-1,j(I-8-_*46-z*5),3,4)}const[b,M]=P(c,d,.9);for(let v=0;v<5;v++){const w=v*1.7+i,_=b+Math.sin(x*(3.1+v*.4)+w)*(20+v*7),A=M-v*4+Math.sin(x*(6.2+v*.3)+w*2)*10;l.globalAlpha=h,l.fillStyle=Q.fly,l.fillRect(j(_),j(A),3,2),l.fillStyle="#eaf4ff";const R=((x*36|0)+v)%2;l.fillRect(j(_)-1,j(A)-1-R,2,1),l.fillRect(j(_)+2,j(A)-1-R,2,1)}}});const s={nl:0};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=ua(t,n,f);if(h<=0)return;const[c,d]=a(f),m=Math.min(1,f.t/.5);pn(c,d);const p=At.x,y=At.y;V1!==l&&(V1=l,j1=[{u0:0,fill:zt(l,Q.gasD,4),a:.45},{u0:.7,fill:zt(l,Q.gas,5),a:.45},{u0:.92,fill:zt(l,Q.gasL,7),a:.5}]),Gr(l,p,y,ye(o),ye(o*(1+.15*m)),yr(Sc*m),!1,j1,q1,h),Q1(l,c,d,o,m,h,!1,i),Eo(s,c,d,o*.9,12107840,.35*h)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=ua(t,n,f);if(h<=0)return;const[c,d]=a(f),m=Math.min(1,f.t/.5);pn(c,d);const p=At.x,y=At.y;Y1!==l&&(Y1=l,K1=[{u0:0,fill:zt(l,Q.gas,2),a:.4},{u0:.7,fill:zt(l,Q.gas,3),a:.45},{u0:.92,fill:zt(l,Q.gasL,6),a:.5}]),Gr(l,p,y,ye(o),ye(o*(1+.15*m)),yr(Sc*m),!0,K1,q1,h),Q1(l,c,d,o,m,h,!0,i)}})}const Sc=1.6,q1=[1,.75,.5,.3,.14];let V1=null,Y1=null,j1=[],K1=[];function Q1(e,t,n,r,o,i,a,s){const l=S.T;for(let u=0;u<12;u++){const f=u/12*Ln+l*.3+H(u+s)*.4;for(let h=0;h<10;h++){const c=(h/10+l*.55+H(u*3+s))%1;if(c>o)continue;const d=f+Math.sin(l*3+c*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(no(m,p,0)>0!==a)continue;const y=r*(1+.15*c);pn(t+m*y,n+p*y,c*Sc);const x=c>.6?2:c>.3?3:4;if(e.globalAlpha=i*(1-c)*(a?.85:.65),e.fillStyle=u+h&1?Q.gas:Q.gasL,e.fillRect(j(At.x)-(x>>1),j(At.y)-(x>>1),x,x+1),c>.82){const b=(c-.82)/.18;for(let M=0;M<4;M++){const v=M*1.4+b*4;e.fillRect(j(At.x+Math.cos(v)*(2+M)),j(At.y-3-M*2+Math.sin(v)*2),2,2)}}}}}function _c(e,t,n,r){T({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,a){const[s,l]=P(e,t),u=vc(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const h=f/26*Ln,c=f%2?4:3;i.fillStyle=f%4?Q.gas:Q.gasL,i.fillRect(j(s+Math.cos(h)*u)-2,j(l+Math.sin(h)*u*.5)-1,c,3)}r&&(i.fillStyle=Q.gasD,nr(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const a=Math.random()*Ln,s=g(.5,r?2.4:1.4);E(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,g(.4,1.4),g(.6,1),i%2?Q.gas:Q.gasL,r?5:4,-.6,!1,.9)}}V.sapo_W=e=>{if(e.type==="channel"){Mv(e);return}const t=lt(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){_c(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(ly(e),_c(n,r,1.4,e.kind==="done"))};V.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const a=lt(t);return a&&!a.dead?a:null};T({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,h]=P(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),c=j(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=Q.bellyD,nr(i,f,h+1,c+2,c*.8+2,2),i.fillStyle=Q.belly,nr(i,f,h,c,c*.8,2),i.fillStyle="#ffffff",i.fillRect(j(f-c*.4),j(h-c*.5),3,2)}}),T({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const[u,f]=P(l.x,l.y);i.globalAlpha=1-a;for(let h=0;h<2;h++){const c=14+(a*1.2-h*.2)*52;if(!(c<14)){i.fillStyle=h?Q.slime:Q.belly;for(let d=0;d<22;d++){const m=d/22*Ln;i.fillRect(j(u+Math.cos(m)*c)-2,j(f+Math.sin(m)*c*.45)-1,4,3)}}}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,p=l?l.y:s.y;for(let y=0;y<16;y++){const x=y/16*Ln;E(m,p,.5,Math.cos(x)*g(1,2.6),Math.sin(x)*g(1,2.6),g(1,2.5),.5,y%2?Q.slime:Q.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,h]=P(l.x,l.y,.45),c=S.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=Q.belly,nr(i,f,h+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*Ln,y=Math.sin(p*3+c*6+r)*2.5+Math.sin(p*5-c*4)*1.5,x=f+Math.cos(p)*(30+y),b=h+Math.sin(p)*(36+y);i.globalAlpha=.85*d,i.fillStyle=m%5===0?Q.slimeL:Q.slime,i.fillRect(j(x)-1,j(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*Ln+c*.6,y=f+Math.cos(p)*31,x=h+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=Q.skinD,i.fillRect(j(y)-2,j(x)-2,5,5),i.fillStyle=Q.wart,i.fillRect(j(y)-1,j(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(j(f-18),j(h-26),4,2),i.fillRect(j(f-21),j(h-23),2,4),Math.random()<.12&&E(l.x+g(-.25,.25),l.y+g(-.25,.25),.15,0,0,-.2,.5,Q.slime,2,4,!1)}})};const bv=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function vv(e,t,n,r,o){e.globalAlpha=r;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?Q.skinD:s<12?Q.skinL:Q.skin,e.fillRect(j(t-l),j(n-s-2),j(l*2),2)}e.fillStyle=Q.skinD;for(let s=0;s<7;s++)e.fillRect(j(t-36+H(s)*72),j(n-14-H(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=Q.skin,nr(e,l,u,12,10,2),e.fillStyle=Q.eye,nr(e,l,u-1,8,7,2),e.fillStyle=Q.ink,e.fillRect(j(l-5+Math.sin(o*2)*1.5),j(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(j(l-4),j(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=Q.ink,e.fillRect(j(l)-1,j(n)-1,7,8),e.fillStyle=Q.teeth,e.fillRect(j(l),j(n),5,6-s%2*2)}}function wv(e){const t=sy(e),n=e.uid,r=(e.dur||3)+.5,o=lt(n),i=e.team||o&&o.team,a=mv(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?lt(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=ua(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=P(d,m),x=Math.min(1,h.t/.25);u.globalAlpha=c,u.fillStyle=Q.skinD,nr(u,p,y+2,58*x,27*x,2),u.fillStyle=Q.mouth,nr(u,p,y,50*x,22*x,2),u.fillStyle=Q.mouthM,nr(u,p,y+3,38*x,15*x,2),u.fillStyle=Q.tongue,nr(u,p,y+6,24*x,8*x,2),u.fillStyle=Q.tongueL,u.fillRect(j(p-10*x),j(y+3),j(8*x),2)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=ua(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=P(d,m),x=S.T,b=Math.min(1,h.t/.25),M=t.ended?0:bv(h.t),v=y-4-b*(22+M*70);for(let _=0;_<2;_++){const[,A]=P(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),C=8;for(let I=0;I<=14;I++){const z=.12*Math.PI+I/14*.76*Math.PI,F=p+Math.cos(z)*R,U=A+Math.sin(z)*C;u.globalAlpha=c,u.fillStyle=Q.tongueD,u.fillRect(j(F)-3,j(U)-3,6,6),u.fillStyle=Q.tongue,u.fillRect(j(F)-2,j(U)-2,4,4)}}const w=lt(n);if(w&&!w.dead){const _=m0(w),A=P(d,m,.45);if(Math.hypot(A[0]-_[0],A[1]-_[1])>18){u.globalAlpha=c,p0(u,_,A,x,1,2);for(let R=0;R<5;R++){const C=(x*1.6+R/5)%1,I=A[0]+(_[0]-A[0])*C,z=A[1]+(_[1]-A[1])*C-3;u.fillStyle=Q.meat,u.fillRect(j(I)-3,j(z)-3,6,6),u.fillStyle=Q.meatL,u.fillRect(j(I)-2,j(z)-3,3,3)}}}vv(u,p,v,c*b,x),u.globalAlpha=c*b;for(let _=0;_<=26;_++){const A=_/26*Math.PI,R=p+Math.cos(A)*54,C=y+Math.sin(A)*25;u.fillStyle=Q.skinD,u.fillRect(j(R)-4,j(C)-3,8,8),u.fillStyle=Q.skin,u.fillRect(j(R)-3,j(C)-3,6,5),u.fillStyle=Q.skinL,u.fillRect(j(R)-3,j(C)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=Q.ink,u.fillRect(j(R)-3,j(C)-10,6,8),u.fillStyle=Q.teeth,u.fillRect(j(R)-2,j(C)-9,4,6))}Math.random()<.2&&E(d+g(-.4,.4),m+g(-.2,.2),.9,0,0,-.5,.5,Q.slimeL,2,6,!1)}}),at(d0(e)?6:2)}function Sv(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*Ln,i=g(.8,2.2);E(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3),.55,[Q.meat,Q.meatL,Q.fat,Q.slimeL][r%4],3,10,!1,.95)}at(d0(n)?2.5:.6)}function _v(e,t,n){T({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,a]=P(e,t),s=o<.3?1:1-(o-.3)/.7;r.globalAlpha=s,r.fillStyle=Q.skinD,nr(r,i,a-18*s,58*s,30*s,2),r.fillStyle=Q.skin,nr(r,i,a-22*s,52*s,25*s,2),r.fillStyle=Q.skinL,r.fillRect(j(i-30*s),j(a-40*s),j(60*s),3),r.fillStyle=Q.ink,r.fillRect(j(i-40*s),j(a-10*s),j(80*s),3)}}),_c(e,t,1.8,!0),at(d0(n)?7:2)}V.sapo_R=e=>{if(e.type==="channel"){wv(e);return}if(e.type==="channel_tick"){Sv(e.x,e.y,e);return}if(e.type==="channel_end")if(ly(e),e.kind==="done")_v(e.x,e.y,e);else for(let t=0;t<10;t++)E(e.x,e.y,.5,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.6,t%2?Q.gas:Q.slime,4,2,!1)};const xf=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];Ge.sapo=e=>{const t=e.x,n=e.y,r=e.uid?lt(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const h=xf[0].length,c=j(s-(o>0?h*f-6:6)),d=j(l-14-u),m={h:"#6a3a1e",B:Q.ink,b:"#a8acb4",r:Q.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let y=0;y<xf.length;y++)for(let x=0;x<h;x++)xf[y][x]===p&&i.fillRect(c+(o>0?x:h-1-x)*f,d+y*f,f,f)}if(a>.25){const p=(a-.25)/.75;i.fillStyle=Q.fat,i.fillRect(j(s-10-p*16),j(l+6),j(8*(1-p))+1,2),i.fillRect(j(s+4+p*16),j(l+6),j(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)E(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1,2.4),.4,[Q.meat,Q.meatL,Q.slime][i%3],3,10,!1)};const be=Math.round,qt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Vu(e,t,n,r,o){e.fillStyle=o,e.fillRect(be(t-r/2),be(n-r/2),r,r)}const nl=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Av(e,t,n,r,o,i){const a=t.length,s=t[0].length,l=be(n-s*o/2),u=be(r-a*o/2);for(let f=0;f<a;f++)for(let h=0;h<s;h++){const c=i[t[f][h]];c&&(e.fillStyle=c,e.fillRect(l+h*o,u+f*o,o,o))}}function uy(e,t,n,r,o){const i=be(t),a=be(n);o&&(e.fillStyle=o,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=r,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function Mf(e,t,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(be(t+(r-t)*f-a/2),be(n+(o-n)*f-a/2),a,a)}}const Tv=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function fy(e,t,n,r,o,i,a,s){e.fillStyle=qt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=qt.teal,e.fillRect(t,n-o,r,be(o*.62)),e.fillStyle=qt.aqua,e.fillRect(t,n-o,r,be(o*.3)),e.fillStyle=qt.foam,e.fillRect(t+i,n-o-2+a,r,3),s&&(e.fillStyle=qt.white,e.fillRect(t+i*2,n-o-4+a,3,2))}V.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=lt(e.uid);let i=1,a=0;if(o){const M=t-o.x,v=n-o.y,w=Math.hypot(M,v);w>.05&&(i=M/w,a=v/w)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*B.HW,h=.13,c=Math.max(6,Math.ceil(Math.abs(f)*h)+2),d=(i-a)*B.HW,m=(i+a)*B.HH,p=Math.hypot(d,m)||1,y=be(d/p*3),x=be(m/p*2);T({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,v){const w=Math.min(1,v*3)*(v>.6?(1-v)/.4:1);ft(t,n,r*.95,null,`rgba(18,80,110,${.32*w})`);for(let _=0;_<2;_++){const A=(v*2.4+_*.5)%1,R=r*.9*A;M.globalAlpha=w*(1-A);for(let C=0;C<22;C++){const I=C/22*6.283,[z,F]=P(t+Math.cos(I)*R,n+Math.sin(I)*R);Vu(M,z,F,2,qt.sea)}}M.globalAlpha=1}});const b={n:0,sp:!1};return T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,v){const w=-r*.95+v*r*1.9,_=Math.sin(Math.min(1,v*1.08)*Math.PI),A=Math.sqrt(Math.max(0,r*r-w*w))+.25,R=Math.floor(A*2/h);for(let C=0;C<=R;C++){const I=u>0?-A+C*h:A-C*h,z=1-Math.abs(I)/A,F=.85+.15*Math.sin(I*9+v*24),U=be((8+30*Math.sqrt(Math.max(0,z)))*_*F/2)*2;if(U<4)continue;const[G,Y]=P(t+i*w+s*I,n+a*w+l*I);fy(M,be(G-c/2),be(Y),c,U,y,x,(I*7.7+v*30|0)%3===0)}if(b.n<32&&_>.3)for(let C=0;C<2;C++){b.n++;const I=g(-A,A);E(t+i*w+s*I,n+a*w+l*I,.35*_,i*g(.8,2),a*g(.8,2),g(1,2.5),.45,Math.random()<.5?qt.foam:qt.sea,2,7,!1)}if(!b.sp&&v>.82){b.sp=!0;for(let C=0;C<14;C++){const I=g(-r*.6,r*.6);E(t+i*r*.8+s*I,n+a*r*.8+l*I,.2,i*g(1,3)+g(-.5,.5),a*g(1,3)+g(-.5,.5),g(2,4),.55,qt.aqua,3,9,!1)}at(3)}}}),!0};function Rv(e,t){T({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=P(e,t,.1),a=nl(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),h=Math.sin(l)>0;n.globalAlpha=a*(h?1:.45),Vu(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,h?3:2,s%2?qt.sea:qt.foam)}if(r>.45){n.globalAlpha=nl((r-.45)/.55,.2,.6);const s=be(i-72-(r-.45)*20),l=be(o);n.fillStyle=qt.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)E(e+g(-.3,.3),t+g(-.3,.3),.2,0,0,g(1.2,2.2),.8,Math.random()<.5?qt.sea:qt.foam,2,0,!0);return!0}V.tortuga_W=e=>{if(e.type==="heal")return Rv(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=nl(l,.12,.55);for(let f=0;f<3;f++)for(let h=0;h<26;h++){const c=h/26,d=r*(1-c)*.98,m=f*2.094+c*5+l*9,[p,y]=P(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*c),Vu(s,p,y,c>.6?3:2,h%3===0?qt.foam:h%3===1?qt.sea:qt.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+g(-.2,.2),d:s*.03+g(0,.05)});const a={"#":qt.shell,a:qt.sand};return T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const h=f*f*(3-2*f),c=r*.92*(1-h),d=u.a0+h*4.2+l*2,[m,p]=P(t+Math.cos(d)*c,n+Math.sin(d)*c,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),Av(s,Tv,m,p,2,a)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=lt(o),f=u?u.x:t,h=u?u.y:n,[c,d]=P(f,h,.95),m=be(c),p=be(d),y=nl(l,.08,.5),x=be(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=y*.3,s.fillStyle=qt.lamp,s.fillRect(m-8,p-8,16,16),s.globalAlpha=y,s.fillRect(m-x,p-1,x*2,2),s.fillRect(m-1,p-x,2,x*2),s.fillStyle=qt.lampW,s.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const M=b*.785+l*5,v=10+l*30;Vu(s,m+Math.cos(M)*v,p+Math.sin(M)*v*.5+l*40,2,qt.lamp)}s.globalAlpha=1}}),!0};const cy=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)cy.push({th:r/t*6.283+n*.31,ph:e,row:n})});V.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};T({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=lt(t);if(!l||l.dead)return;const u=s*n,[f,h]=P(l.x,l.y),c=Math.min(1,u/.18),d=1+(1-c)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,y=18*d,x=62*d,b=u*1.6%2.2-.3,M=cy.map(v=>{const w=v.th+u*.5,_=Math.cos(v.ph);return{d:v,th:w,x:f+Math.cos(w)*p*_+Math.cos(w)*m*30,y:h+Math.sin(w)*y*_-Math.sin(v.ph)*x-4-m*10+m*m*30,z:Math.sin(w)*_}}).sort((v,w)=>v.z-w.z);for(const v of M){const w=u-(3-v.d.row)*.05;if(w<0)continue;v.y-=(1-Math.min(1,w/.1))*14;const _=v.z>-.15,A=Math.abs(v.d.ph-b)<.22;a.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,w*10),uy(a,v.x,v.y,w<.06||A?qt.white:qt.foam,A?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let v=0;v<16;v++){const w=g(0,6.283),_=g(1.5,3.5);E(l.x,l.y,g(.2,.9),Math.cos(w)*_,Math.sin(w)*_,g(1,3),.5,Math.random()<.5?qt.foam:qt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;E(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,g(1.5,2.5),.4,Math.random()<.5?qt.sand:qt.shell,2,3,!1)}return!0};V.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}T({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const h=nl(f,.06,.55),c=1+.35*Math.max(0,1-f/.1);ft(t,n,r*.92*c,null,`rgba(16,70,95,${.35*h})`);const d=(m,p)=>P(t+m*c,n+p*c);for(let m=0;m<2;m++){u.globalAlpha=h*(m?.75:.85);const p=m?qt.lamp:qt.shellD,y=m?2:3,x=m?-1:0,b=m?-2:0;for(const[M,v]of i)for(let w=0;w<6;w++){const _=w*Math.PI/3,A=(w+1)*Math.PI/3,[R,C]=d(M+Math.cos(_)*o,v+Math.sin(_)*o),[I,z]=d(M+Math.cos(A)*o,v+Math.sin(A)*o);Mf(u,R+x,C+b,I+x,z+b,5,y,p)}for(let M=0;M<22;M++){const v=M/22*6.283,[w,_]=d(Math.cos(v)*r*.66,Math.sin(v)*r*.66),[A,R]=d(Math.cos(v)*r*.86,Math.sin(v)*r*.86);Mf(u,w+x,_+b,A+x,R+b,5,y,p);const C=(M+1)/22*6.283,[I,z]=d(Math.cos(C)*r*.86,Math.sin(C)*r*.86);Mf(u,A+x,R+b,I+x,z+b,6,y,p)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const h=u/a*6.283,c=f/a*6.283;return Math.cos(h)+Math.sin(h)-(Math.cos(c)+Math.sin(c))}),l={crash:!1};T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const h=Math.min(1,f*1.15),c=1-(1-h)*(1-h),d=r*(.3+.75*c),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let y=0;y<a;y++){const x=y/a*6.283;p.push(P(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const y of s){const x=y/a*6.283,[b,M]=p[y],v=p[(y+1)%a][0],w=Math.max(4,Math.ceil(Math.abs(v-b))+2),_=be((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const A=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=A?.82:1;const R=A?2:-2;fy(u,be(Math.min(b,v)-1),be(M),w,_,be(Math.cos(x-.785)*3),R,(y*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let y=0;y<16;y++){const x=g(0,6.283);E(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*g(1,2.5),Math.sin(x)*g(1,2.5),g(1.5,3),.6,Math.random()<.5?qt.foam:qt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=g(0,6.283),h=g(2,5);E(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*h,Math.sin(f)*h,g(3.5,6.5),g(.8,1.1),[qt.aqua,qt.sea,qt.foam,qt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return at(10),!0};Ge.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;T({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,a){const[s,l]=P(t,n),u=be(s),f=be(l);for(let h=0;h<(r?3:2);h++){const c=a*1.3-h*.18;if(c<=0||c>=1)continue;const d=be(6+c*(r?34:24)),m=be(d/2);i.globalAlpha=1-c,i.fillStyle=h?qt.sea:qt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=P(t,n,.5);i.globalAlpha=1-a,uy(i,s,l-a*8,qt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=g(0,6.283),s=g(1,2.5);E(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,g(1.5,3),.4,i%2?qt.aqua:qt.foam,2,9,!1)}};const bt=Math.round,Io=Math.PI*2,ct={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},hy=e=>e*B.HW*Math.SQRT2;function Ee(e,t,n,r){r=Math.max(1,bt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(bt(t[0]+(n[0]-t[0])*s/i-a),bt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Cv(e,t,n,r,o,i,a=!1){const s=t[0].length,l=t.length,u=bt(n-s*o/2),f=bt(r-l*o/2);for(const h in i){e.fillStyle=i[h];for(let c=0;c<l;c++)for(let d=0;d<s;d++)t[c][a?s-1-d:d]===h&&e.fillRect(u+d*o,f+c*o,o,o)}}function Pv(e,t,n,r,o,i){const a=Math.abs(r),s=bt(t),l=bt(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=o,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=o,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const Ms=new Map;function dy(e){if(Ms.has(e))return!1;if(Ms.size>300)for(const[t,n]of Ms)S.T-n>4&&Ms.delete(t);return Ms.set(e,S.T),!0}function Iv(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||Xe(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const zv=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];Ge.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(T({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[a,s]=P(t,n,.5),l=bt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=ct.f1;for(const[f,h]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+h*l*.8-u/2,u,u);o.fillStyle=ct.f2;for(let f=0;f<6;f++){const h=f/6*Io+i*3;o.fillRect(bt(a+Math.cos(h)*(6+i*8))-1,bt(s+Math.sin(h)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=ct.cream,o.fillRect(a-2,s-2,4,4))}}),E(t,n,.6,g(-.5,.5),g(-.5,.5),.4,.8,Math.random()<.5?ct.leaf:ct.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(1,2),.3,ct.f1,2,4,!0)};Oe.zorra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(h,c=0)=>[n+a*h-s*c,r+s*h+a*c];vt(!0);const u=$t();for(let h=0;h<3;h++){u.globalAlpha=.8-h*.22,u.fillStyle=h?ct.f2:ct.f1;const c=l(-15-h*4,Math.sin(i*40+h)*1.5);u.fillRect(bt(c[0])-2+(h>>1),bt(c[1])-2+(h>>1),4-h,4-h)}u.globalAlpha=1,vt(!1),e.fillStyle=ct.woodD,Ee(e,l(-13),l(3),3),e.fillStyle=ct.wood,Ee(e,l(-12),l(2),1),e.fillStyle=ct.steel,Ee(e,l(3),l(7),3),e.fillStyle="#ffffff",Ee(e,l(6),l(8),1),e.fillStyle=ct.leaf,Ee(e,l(-13,0),l(-9,-3),2),e.fillStyle=ct.leafD,Ee(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?lt(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&dy("za"+t.id)&&(Ge.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),st.sfx("atk_zorra",f.x,f.y,.6))};V.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=P(e.x,e.y),a=P(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;T({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.5),m=-u,p=l;f.globalAlpha=h<.6?1:(1-h)/.4;const y=[];for(let M=-5;M<=5;M++)y.push([c+m*M*3.4-l*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=ct.woodD;for(const M of y)f.fillRect(bt(M[0])-2,bt(M[1])-2,4,4);f.fillStyle=ct.wood;for(const M of y)f.fillRect(bt(M[0])-1,bt(M[1])-1,2,2);f.fillStyle=ct.leaf;for(const M of[y[0],y[10]])f.fillRect(bt(M[0])-2,bt(M[1])-3,3,3);const x=h<.08?9*(1-h/.08):Math.sin(h*70)*3*(1-h),b=[c-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=ct.cream,Ee(f,y[0],b,1),Ee(f,b,y[10],1)}}),T({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.5),m=4+h*16;f.fillStyle=ct.f1;for(let p=0;p<8;p++){const y=p/8*Io;f.fillRect(bt(c+l*8+Math.cos(y)*m)-2,bt(d+u*8+Math.sin(y)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)E(r,o,.55,-n*g(-2,2)+t*g(0,1),t*g(-2,2)+n*g(0,1),g(.5,1.5),.9,f%2?ct.leaf:ct.leafL,3,1.5,!1,.95)};Oe.zorra_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,h=0)=>[n+a*f-s*h,r+s*f+a*h];vt(!0);const u=$t();for(let f=0;f<=16;f++){const h=f/16,c=bt(2+7*Math.sin(Math.PI*Math.pow(h,.7))),d=Math.sin(i*30-h*7)*2.5*h,m=l(-22-h*46,d);u.globalAlpha=.85-h*.35,u.fillStyle=h>.8?ct.cream:h>.45?ct.fox:ct.f1,u.fillRect(bt(m[0]-c/2),bt(m[1]-c/2),c,c)}u.globalAlpha=1,vt(!1),e.fillStyle=ct.woodD,Ee(e,l(-22),l(4),4),e.fillStyle=ct.wood,Ee(e,l(-21),l(3),2),e.fillStyle="#20202a",Ee(e,l(3,-4),l(12),3),Ee(e,l(3,4),l(12),3),e.fillStyle=ct.steel,Ee(e,l(4,-2),l(11),2),Ee(e,l(4,2),l(11),2),e.fillStyle="#ffffff",Ee(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=ct.leafD,Ee(e,l(-23,0),l(-15,f*5),3),e.fillStyle=ct.leaf,Ee(e,l(-22,f),l(-16,f*4),2),e.fillStyle=ct.leafL,e.fillRect(bt(l(-17,f*4)[0]),bt(l(-17,f*4)[1]),2,2);Math.random()<.3&&E(t.x,t.y,t.z||.45,g(-.4,.4),g(-.4,.4),-.2,.7,Math.random()<.6?ct.leaf:ct.autumn,3,.6,!1,.95);for(const f of Iv(t))if(dy("zq"+t.id+":"+f.id)){const h=t.vx||1,c=t.vy||0,d=Math.hypot(h,c)||1;T({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,p){const y=P(f.x-h/d*.7,f.y-c/d*.7,.5),x=P(f.x+h/d*.9,f.y+c/d*.9,.5);m.globalAlpha=1-p,m.fillStyle=ct.fox,Ee(m,y,x,bt(6*(1-p))+1),m.fillStyle=ct.cream,Ee(m,y,x,2)}});for(let m=0;m<6;m++)E(f.x,f.y,.5,h/d*g(1,3)+g(-.8,.8),c/d*g(1,3)+g(-.8,.8),g(.5,1.5),.35,m%2?ct.f1:ct.fox,2,3,!0)}};V.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*Io,h:s/9,sp:g(4.5,6),col:[ct.leaf,ct.leafL,ct.autumn][s%3],dk:s%3===2?ct.foxD:ct.leafD,r:g(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*Io,l=g(1.5,2.5);E(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,g(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,g(.8,1.6),g(.6,.9),[ct.leaf,ct.leafL,ct.autumn][a%3],3,1,!1,.94)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=lt(t),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)E(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const h=Math.min(1,f/.3),c=s>.92?(1-s)/.08:1,[d,m]=P(r,o,.35);a.globalAlpha=.55*c,a.fillStyle="#e8fff0";for(let p=0;p<2;p++){const y=f*7+p*Math.PI,x=hy(.62)*h;for(let b=0;b<7;b++){const M=y+b*.16;a.fillRect(bt(d+Math.cos(M)*x)-1,bt(m+Math.sin(M)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const y=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*h*(1-x*.35),[M,v]=P(r+Math.cos(y)*b,o+Math.sin(y)*b,.15+x*1.1);a.globalAlpha=c*(Math.sin(y)>0?1:.55)*Math.min(1,(1-x)*4),Pv(a,M,v,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};V.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,a=P(t,n),s=P(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));T({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,h){const c=h*(i+.45);for(const d of u){const m=c-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[y,x]=P(d.x,d.y,.32+m*.3);f.globalAlpha=p,Cv(f,zv,y,x,3,{o:ct.f2,t:ct.f1,c:ct.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const M=y+(b-1.5)*9*(l?-1:1),v=bt(4+5*Math.abs(Math.sin(c*30+b*1.7))+m*14);f.fillStyle=b%2?ct.f3:ct.f1,f.fillRect(bt(M)-2,bt(x-12-v),4,v),f.fillStyle=ct.f0,f.fillRect(bt(M)-1,bt(x-12-v),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,h){const[c,d]=P(r,o,.3+h*.4),m=14+h*10;for(let p=0;p<6;p++){const y=p/6*Io+h*7;f.globalAlpha=(1-h)*(.6+.4*Math.sin(h*30+p)),f.fillStyle=p%2?ct.f3:ct.f2,f.fillRect(bt(c+Math.cos(y)*m)-3,bt(d+Math.sin(y)*m*.5)-3,6,6),f.fillStyle=ct.f0,f.fillRect(bt(c+Math.cos(y)*m)-1,bt(d+Math.sin(y)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const h=Math.random();E(t+(r-t)*h+g(-.2,.2),n+(o-n)*h+g(-.2,.2),.3,g(-.3,.3),g(-.3,.3),g(.8,1.6),g(.5,.8),[ct.f1,ct.f2,ct.f3][f%3],3,-.5,!0,.95)}};const eu=3.1;function Ov(e,t,n,r,o){const i=bt(t),a=bt(n),s=bt(Math.sin(o)*r),l=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<l.length;u++){const f=l[u]*r,h=u>4?bt(s*(u-4)/4):0,c=a-u*r*2;e.fillStyle=ct.f3,e.fillRect(i-f+h,c,f*2,r*2),u<8&&(e.fillStyle=ct.f1,e.fillRect(i-f+r+h,c,Math.max(r,f*2-r*2),r*2)),u<5&&(e.fillStyle=ct.f0,e.fillRect(i-bt(f/2)+h,c,Math.max(r,f),r*2))}e.fillStyle=ct.gold,e.fillRect(i-r,a-r*3,r*2,r*2)}function Z1(e,t,n,r,o,i){const a=S.T,s=yr(.8);for(let l=0;l<46;l++){const u=l/46*Io+.09,f=Math.cos(u),h=Math.sin(u);if(no(f,h,0)>0!==i)continue;const c=(a*1.25+l*.618%1)%1,d=eu*(1-c);pn(t+f*r*.95,n+h*r*.95,d);const m=bt(At.x),p=bt(At.y),y=o*Math.min(1,(1-c)*4)*(i?.85:.6);e.globalAlpha=y*.45,e.fillStyle=ct.f2,e.fillRect(m,p-bt(s),2,bt(s)),e.globalAlpha=y,e.fillStyle=ct.f1,e.fillRect(m,p-bt(s*.45),2,bt(s*.45)),e.fillStyle=i?ct.f0:ct.gold,e.fillRect(m-1,p-2,4,3)}}V.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=lt(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const h=Array.from({length:7},(b,M)=>({ox:g(-.3,.3),oy:g(-.3,.3),dl:M*.03}));T({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(b,M){const v=M*.5;for(const w of h){const _=(v-w.dl)/.35;if(_<0||_>1)continue;const A=.6+_*4.5,R=a+w.ox-l*_*.8,C=s+w.oy-u*_*.8,I=P(R,C,A),z=P(R+l*.15,C+u*.15,A-.4);b.globalAlpha=1-_*.5,b.fillStyle=ct.fox,Ee(b,z,I,3),b.fillStyle=ct.f0,b.fillRect(bt(I[0])-2,bt(I[1])-2,4,4)}}});for(let b=0;b<8;b++)E(a,s,.6,g(-.5,.5),g(-.5,.5),g(2,4),.4,b%2?ct.gold:ct.f1,2,2,!0);const c=28,d=.45,m=Array.from({length:c},(b,M)=>{const v=Math.random()*Io,w=Math.sqrt(Math.random())*r*.92,_=t+Math.cos(v)*w,A=n+Math.sin(v)*w;return{t0:.3+M*(2.5/c)+g(-.04,.04),lx:_,ly:A,sx:_+l*1.8+g(-.3,.3),sy:A+u*1.8+g(-.3,.3),landed:!1,tang:[0,1]}}),p=(b,M)=>P(b.sx+(b.lx-b.sx)*M,b.sy+(b.ly-b.sy)*M,4*(1-M*M));T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(b,M){const v=M*o;for(const w of m){const _=(v-w.t0)/d;if(_<0)continue;if(_>=1){if(!w.landed){w.landed=!0,E(w.lx,w.ly,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.7?ct.f1:ct.leaf,2,6,!0);const U=p(w,1),G=p(w,.93),Y=Math.hypot(U[0]-G[0],U[1]-G[1])||1;w.tang=[(U[0]-G[0])/Y,(U[1]-G[1])/Y]}const F=(v-w.t0-d)/.14;if(F<1){const[U,G]=P(w.lx,w.ly),Y=bt(3+F*9);b.globalAlpha=1-F,b.fillStyle=ct.gold,b.fillRect(U-Y,G-1,Y*2,2),b.fillRect(U-1,G-bt(Y/2),2,Y)}continue}const A=p(w,_),R=p(w,Math.max(0,_-.07)),C=Math.hypot(A[0]-R[0],A[1]-R[1])||1,I=(A[0]-R[0])/C,z=(A[1]-R[1])/C;b.globalAlpha=.35,b.fillStyle=ct.f2;for(let F=1;F<=4;F++){const U=p(w,Math.max(0,_-F*.05));b.fillRect(bt(U[0])-1,bt(U[1])-1,3,3)}b.globalAlpha=1,b.fillStyle=ct.fox,Ee(b,[A[0]-I*16,A[1]-z*16],A,3),b.fillStyle=ct.gold,Ee(b,[A[0]-I*14,A[1]-z*14],A,1),b.fillStyle="#ffffff",b.fillRect(bt(A[0])-2,bt(A[1])-2,4,4)}}});const y=Xi(e,3),x=()=>S.T-y.t0;T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(b,M,v){const w=zn(y);if(w<=0){v.t=v.dur+1;return}const _=Math.min(1,x()/.3,w/.35);Z1(b,t,n,r,_,!1),Eo(y,t,n,r*1.05,16747050,.55*_)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(b,M,v){const w=zn(y);if(w<=0){v.t=v.dur+1;return}const _=x(),A=Math.min(1,_/.3,w/.35);Z1(b,t,n,r,A,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),C=w<.35?(.35-w)*2.4:0;b.globalAlpha=A*.7,b.fillStyle=ct.f2,xo(b,t,n,eu+C,r*.86*R,90,3,-_*.9,0),b.fillStyle=ct.gold,xo(b,t,n,eu+C-.06,r*.86*R,18,3,_*1.7,1);for(let I=0;I<2;I++)for(let z=0;z<9;z++){const F=z/9*Io+_*.9,U=Math.cos(F),G=Math.sin(F),Y=no(U,G,0)>0;I===1===Y&&(pn(t+U*r*.86*R,n+G*r*.86*R,eu+C+Math.sin(_*3+z)*.08),b.globalAlpha=A*(Y?1:.6),Ov(b,At.x,At.y,Y?3:2,_*9+z*1.3))}}}),T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(b,M,v){const w=M*o,_=M>.85?(1-M)/.15:Math.min(1,w*4),[A,R]=P(t,n),C=hy(r);!v.sh&&w>.75&&(v.sh=!0,at(3)),b.globalAlpha=.7*_,b.fillStyle=ct.fox;for(let I=0;I<10;I++){const z=I/10*Io+w*.6,F=A+Math.cos(z)*C,U=R+Math.sin(z)*C*.5,G=-Math.cos(z),Y=-Math.sin(z)*.5;b.fillRect(bt(F)-2,bt(U)-2,4,4),b.fillRect(bt(F+G*6-Y*4)-1,bt(U+Y*6+G*2)-1,3,3),b.fillRect(bt(F+G*6+Y*4)-1,bt(U+Y*6-G*2)-1,3,3)}for(const I of m){if(!I.landed)continue;const[z,F]=P(I.lx,I.ly),U=I.tang[0],G=I.tang[1];b.globalAlpha=_,b.fillStyle="#00000055",b.fillRect(bt(z)-3,bt(F),6,2),b.fillStyle=ct.woodD,Ee(b,[z-U*13,F-G*13],[z,F],3),b.fillStyle=ct.wood,Ee(b,[z-U*12,F-G*12],[z-U*2,F-G*2],1),b.fillStyle=ct.leaf,b.fillRect(bt(z-U*13)-2,bt(F-G*13)-1,2,3),b.fillStyle=ct.autumn,b.fillRect(bt(z-U*13),bt(F-G*13)-2,2,3)}}})};var se=`in vec2 aPosition;
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
`,le=`struct GlobalFilterUniforms {
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
}`,Fv=`in vec2 vTextureCoord;
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
`,Ev=`struct AdjustmentUniforms {
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
}`,kv=Object.defineProperty,Lv=(e,t,n)=>t in e?kv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,my=(e,t,n)=>(Lv(e,typeof t!="symbol"?t+"":t,n),n);const Dv=class py extends ae{constructor(t){t={...py.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Ev,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:Fv,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),my(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};my(Dv,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Uv=`
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
}`,Xv=`struct KawaseBlurUniforms {
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
}`,Gv=`
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
`,Nv=`struct KawaseBlurUniforms {
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
}`,Bv=Object.defineProperty,$v=(e,t,n)=>t in e?Bv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mi=(e,t,n)=>($v(e,typeof t!="symbol"?t+"":t,n),n);const yy=class gy extends ae{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Bt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...gy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:n?.clamp?Nv:Xv,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:n?.clamp?Gv:Uv,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),mi(this,"uniforms"),mi(this,"_pixelSize",{x:0,y:0}),mi(this,"_clamp"),mi(this,"_kernels",[]),mi(this,"_blur"),mi(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,r,o);else{const l=ar.getSameSizeTexture(n);let u=n,f=l,h;const c=this._quality-1;for(let d=0;d<c;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),h=u,u=f,f=h;s=this._kernels[c]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,r,o),ar.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};mi(yy,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let xy=yy;var Wv=`in vec2 vTextureCoord;
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
`,Hv=`struct AdvancedBloomUniforms {
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
`,qv=`
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
`,Vv=`struct ExtractBrightnessUniforms {
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
`,Yv=Object.defineProperty,jv=(e,t,n)=>t in e?Yv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,My=(e,t,n)=>(jv(e,typeof t!="symbol"?t+"":t,n),n);const by=class vy extends ae{constructor(t){t={...vy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Vv,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:qv,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),My(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};My(by,"DEFAULT_OPTIONS",{threshold:.5});let Kv=by;var Qv=Object.defineProperty,Zv=(e,t,n)=>t in e?Qv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ta=(e,t,n)=>(Zv(e,typeof t!="symbol"?t+"":t,n),n);const wy=class Sy extends ae{constructor(t){t={...Sy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Hv,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:Wv,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:Ot.WHITE}}),ta(this,"uniforms"),ta(this,"bloomScale",1),ta(this,"brightness",1),ta(this,"_extractFilter"),ta(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Kv({threshold:t.threshold}),this._blurFilter=new xy({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=ar.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=ar.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,r,o),ar.returnTexture(a),ar.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};ta(wy,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let Jv=wy;var tw=`precision highp float;
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
`,ew=`struct AsciiUniforms {
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
}`,nw=Object.defineProperty,rw=(e,t,n)=>t in e?nw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ac=(e,t,n)=>(rw(e,typeof t!="symbol"?t+"":t,n),n);const ow=class _y extends ae{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Bt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={..._y.DEFAULT_OPTIONS,...n};const o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:ew,entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:tw,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Ac(this,"uniforms"),Ac(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new mn,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Ac(ow,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var iw=`precision highp float;
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
`,aw=`struct BevelUniforms {
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
}`,sw=Object.defineProperty,lw=(e,t,n)=>t in e?sw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ea=(e,t,n)=>(lw(e,typeof t!="symbol"?t+"":t,n),n);const uw=class Ay extends ae{constructor(t){t={...Ay.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:aw,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:iw,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ea(this,"uniforms"),ea(this,"_thickness"),ea(this,"_rotation"),ea(this,"_lightColor"),ea(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new mn,this._shadowColor=new mn,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ka}set rotation(t){this._rotation=t*ka,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ea(uw,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var fw=Object.defineProperty,cw=(e,t,n)=>t in e?fw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nu=(e,t,n)=>(cw(e,typeof t!="symbol"?t+"":t,n),n);const hw=class Ty extends k3{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Bt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Ty.DEFAULT_OPTIONS,...n},super(),nu(this,"_blurXFilter"),nu(this,"_blurYFilter"),nu(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new Md({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Md({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=ar.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),ar.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Bt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Bt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Bt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Bt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Bt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Bt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};nu(hw,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var dw=`precision highp float;
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
`,mw=`struct BulgePinchUniforms {
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
}`,pw=Object.defineProperty,yw=(e,t,n)=>t in e?pw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ry=(e,t,n)=>(yw(e,typeof t!="symbol"?t+"":t,n),n);const gw=class Cy extends ae{constructor(t){t={...Cy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:mw,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:dw,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Ry(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Ry(gw,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var xw=`precision highp float;
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
`,Mw=`in vec2 aPosition;
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
`,J1=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,Ni=Ni||{};Ni.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Ni=Ni||{};Ni.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(L){var D=new Error(t+": "+L);throw D.source=t,D}function r(){var L=o();return t.length>0&&n("Invalid input not EOF"),L}function o(){return M(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,h)||a("repeating-radial-gradient",e.repeatingRadialGradient,h)}function a(L,D,$){return s(D,function(W){var Z=$();return Z&&(Y(e.comma)||n("Missing comma before color stops")),{type:L,orientation:Z,colorStops:M(v)}})}function s(L,D){var $=Y(L);if($){Y(e.startCall)||n("Missing (");var W=D($);return Y(e.endCall)||n("Missing )"),W}}function l(){return u()||f()}function u(){return G("directional",e.sideOrCorner,1)}function f(){return G("angular",e.angleValue,1)}function h(){var L,D=c(),$;return D&&(L=[],L.push(D),$=t,Y(e.comma)&&(D=c(),D?L.push(D):t=$)),L}function c(){var L=d()||m();if(L)L.at=y();else{var D=p();if(D){L=D;var $=y();$&&(L.at=$)}else{var W=x();W&&(L={type:"default-radial",at:W})}}return L}function d(){var L=G("shape",/^(circle)/i,0);return L&&(L.style=U()||p()),L}function m(){var L=G("shape",/^(ellipse)/i,0);return L&&(L.style=z()||p()),L}function p(){return G("extent-keyword",e.extentKeywords,1)}function y(){if(G("position",/^at/,0)){var L=x();return L||n("Missing positioning value"),L}}function x(){var L=b();if(L.x||L.y)return{type:"position",value:L}}function b(){return{x:z(),y:z()}}function M(L){var D=L(),$=[];if(D)for($.push(D);Y(e.comma);)D=L(),D?$.push(D):n("One extra comma");return $}function v(){var L=w();return L||n("Expected color definition"),L.length=z(),L}function w(){return A()||C()||R()||_()}function _(){return G("literal",e.literalColor,0)}function A(){return G("hex",e.hexColor,1)}function R(){return s(e.rgbColor,function(){return{type:"rgb",value:M(I)}})}function C(){return s(e.rgbaColor,function(){return{type:"rgba",value:M(I)}})}function I(){return Y(e.number)[1]}function z(){return G("%",e.percentageValue,1)||F()||U()}function F(){return G("position-keyword",e.positionKeywords,1)}function U(){return G("px",e.pixelValue,1)||G("em",e.emValue,1)}function G(L,D,$){var W=Y(D);if(W)return{type:L,value:W[$]}}function Y(L){var D,$;return $=/^[\n\r\t\s]+/.exec(t),$&&k($[0].length),D=L.exec(t),D&&k(D[0].length),D}function k(L){t=t.substr(L)}return function(L){return t=L.toString(),r()}}();var bw=Ni.parse;Ni.stringify;function vw(e){const t=bw(Pw(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=ww(n.type),o=Sw(n.colorStops),i=Rw(n.orientation);return{type:r,stops:o,angle:i}}function ww(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function Sw(e){const t=Aw(e),n=[],r=new mn;for(let o=0;o<e.length;o++){const i=_w(e[o]),a=r.setValue(i).toArray();n.push({offset:t[o],color:a.slice(0,3),alpha:a[3]})}return n}function _w(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function Aw(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const r=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)o=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=s.indexDelta,o=t[i]}}return t.map(Tw)}function Tw(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function Rw(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return Cw(e.value)}return 0}function Cw(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function Pw(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Iw=Object.defineProperty,zw=(e,t,n)=>t in e?Iw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ii=(e,t,n)=>(zw(e,typeof t!="symbol"?t+"":t,n),n);const bf=90;function Ow(e){return[...e].sort((t,n)=>t.offset-n.offset)}const rl=class ru extends ae{constructor(t){if(t&&"css"in t?t={...vw(t.css||""),alpha:t.alpha??ru.defaults.alpha,maxColors:t.maxColors??ru.defaults.maxColors}:t={...ru.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Jt.from({vertex:{source:J1,entryPoint:"mainVertex"},fragment:{source:J1,entryPoint:"mainFragment"}}),r=re.from({vertex:Mw,fragment:xw,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??bf,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),Ii(this,"baseUniforms"),Ii(this,"stopsUniforms"),Ii(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=Ow(t),r=new mn;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+bf}set angle(t){this.baseUniforms.uOptions[1]=t-bf}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Ii(rl,"LINEAR",0);Ii(rl,"RADIAL",1);Ii(rl,"CONIC",2);Ii(rl,"defaults",{type:rl.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Fw=`in vec2 vTextureCoord;
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

}`,Ew=`struct ColorMapUniforms {
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
}`,kw=Object.defineProperty,Lw=(e,t,n)=>t in e?kw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uo=(e,t,n)=>(Lw(e,typeof t!="symbol"?t+"":t,n),n);const Dw=class Py extends ae{constructor(...t){let n=t[0]??{};if((n instanceof Ot||n instanceof jn)&&(Bt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Py.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Ew,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:Fw,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),uo(this,"uniforms"),uo(this,"_size",0),uo(this,"_sliceSize",0),uo(this,"_slicePixelSize",0),uo(this,"_sliceInnerSize",0),uo(this,"_nearest",!1),uo(this,"_scaleMode","linear"),uo(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof Ot?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};uo(Dw,"DEFAULT_OPTIONS",{colorMap:Ot.WHITE,nearest:!1,mix:1});var Uw=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,Xw=`struct ColorOverlayUniforms {
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
`,Gw=Object.defineProperty,Nw=(e,t,n)=>t in e?Gw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tc=(e,t,n)=>(Nw(e,typeof t!="symbol"?t+"":t,n),n);const Bw=class Iy extends ae{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Bt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...Iy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Xw,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:Uw,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),Tc(this,"uniforms"),Tc(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new mn,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Tc(Bw,"DEFAULT_OPTIONS",{color:0,alpha:1});var $w=`in vec2 vTextureCoord;
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
`,Ww=`struct ColorReplaceUniforms {
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
}`,Hw=Object.defineProperty,qw=(e,t,n)=>t in e?Hw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ou=(e,t,n)=>(qw(e,typeof t!="symbol"?t+"":t,n),n);const Vw=class zy extends ae{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Bt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...zy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:Ww,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:$w,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),ou(this,"uniforms"),ou(this,"_originalColor"),ou(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new mn,this._targetColor=new mn,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Bt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Bt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Bt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Bt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};ou(Vw,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Yw=`in vec2 vTextureCoord;
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
}`,jw=`struct ConvolutionUniforms {
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
}`,Kw=Object.defineProperty,Qw=(e,t,n)=>t in e?Kw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oy=(e,t,n)=>(Qw(e,typeof t!="symbol"?t+"":t,n),n);const Zw=class Fy extends ae{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Bt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Fy.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:jw,entryPoint:"mainFragment"}}),a=re.from({vertex:se,fragment:Yw,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Oy(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Oy(Zw,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Jw=`precision highp float;
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
`,tS=`struct CRTUniforms {
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
}`,eS=Object.defineProperty,nS=(e,t,n)=>t in e?eS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,iu=(e,t,n)=>(nS(e,typeof t!="symbol"?t+"":t,n),n);const rS=class Ey extends ae{constructor(t){t={...Ey.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:tS,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:Jw,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),iu(this,"uniforms"),iu(this,"seed"),iu(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};iu(rS,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var oS=`precision highp float;
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
`,iS=`struct DotUniforms {
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
}`,aS=Object.defineProperty,sS=(e,t,n)=>t in e?aS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lS=(e,t,n)=>(sS(e,t+"",n),n);const uS=class ky extends ae{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Bt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...ky.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:iS,entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:oS,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};lS(uS,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var fS=`precision highp float;
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
}`,cS=`struct DropShadowUniforms {
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
}`,hS=Object.defineProperty,dS=(e,t,n)=>t in e?hS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,na=(e,t,n)=>(dS(e,typeof t!="symbol"?t+"":t,n),n);const mS=class Ly extends ae{constructor(t){t={...Ly.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:cS,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:fS,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),na(this,"uniforms"),na(this,"shadowOnly",!1),na(this,"_color"),na(this,"_blurFilter"),na(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new mn,this.color=t.color??0,this._blurFilter=new xy({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new ae({gpuProgram:Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:re.from({vertex:se,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=ar.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),ar.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};na(mS,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var pS=`precision highp float;
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
`,yS=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,gS=Object.defineProperty,xS=(e,t,n)=>t in e?gS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$r=(e,t,n)=>(xS(e,typeof t!="symbol"?t+"":t,n),n);const MS=class Dy extends ae{constructor(t){t={...Dy.defaults,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:yS,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:pS,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new Ot({source:new uh({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),$r(this,"uniforms"),$r(this,"average",!1),$r(this,"minSize",8),$r(this,"sampleSize",512),$r(this,"_canvas"),$r(this,"texture"),$r(this,"_slices",0),$r(this,"_sizes",new Float32Array(1)),$r(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ka}set direction(t){this.uniforms.uDirection=t*ka}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};$r(MS,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var bS=`precision highp float;
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
`,vS=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,wS=Object.defineProperty,SS=(e,t,n)=>t in e?wS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rc=(e,t,n)=>(SS(e,typeof t!="symbol"?t+"":t,n),n);const _S=class Uy extends ae{constructor(t){t={...Uy.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:vS,entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:bS.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),Rc(this,"uniforms"),Rc(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new mn,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Rc(_S,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var AS=`precision highp float;
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
`,TS=`struct GodrayUniforms {
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

\${PERLIN}`,RS=`vec3 mod289(vec3 x)
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
`,CS=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,PS=Object.defineProperty,IS=(e,t,n)=>t in e?PS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ra=(e,t,n)=>(IS(e,typeof t!="symbol"?t+"":t,n),n);const zS=class Xy extends ae{constructor(t){t={...Xy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:TS.replace("${PERLIN}",CS),entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:AS.replace("${PERLIN}",RS),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ra(this,"uniforms"),ra(this,"time",0),ra(this,"_angleLight",[0,0]),ra(this,"_angle",0),ra(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*ka;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};ra(zS,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var OS=`in vec2 vTextureCoord;
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
`,FS=`struct HslUniforms {
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
}`,ES=Object.defineProperty,kS=(e,t,n)=>t in e?ES(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cc=(e,t,n)=>(kS(e,typeof t!="symbol"?t+"":t,n),n);const LS=class Gy extends ae{constructor(t){t={...Gy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:FS,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:OS,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Cc(this,"uniforms"),Cc(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Cc(LS,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var DS=`precision highp float;
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
`,US=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,XS=Object.defineProperty,GS=(e,t,n)=>t in e?XS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pc=(e,t,n)=>(GS(e,typeof t!="symbol"?t+"":t,n),n);const NS=class Ny extends ae{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof cn){Bt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...Ny.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:US,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:DS,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),Pc(this,"uniforms"),Pc(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};Pc(NS,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var BS=`in vec2 vTextureCoord;
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
`,$S=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,WS=Object.defineProperty,HS=(e,t,n)=>t in e?WS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,au=(e,t,n)=>(HS(e,typeof t!="symbol"?t+"":t,n),n);const qS=class By extends ae{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Bt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...By.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:$S.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:BS.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),au(this,"uniforms"),au(this,"_replacements",[]),au(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new mn;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Bt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Bt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};au(qS,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var VS=`precision highp float;
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
}`,YS=`struct OldFilmUniforms {
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
}`,jS=Object.defineProperty,KS=(e,t,n)=>t in e?jS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ic=(e,t,n)=>(KS(e,typeof t!="symbol"?t+"":t,n),n);const QS=class $y extends ae{constructor(t){t={...$y.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:YS,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:VS,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ic(this,"uniforms"),Ic(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Ic(QS,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var ZS=`precision highp float;
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
`,JS=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,t_=Object.defineProperty,e_=(e,t,n)=>t in e?t_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vi=(e,t,n)=>(e_(e,typeof t!="symbol"?t+"":t,n),n);const Oh=class pi extends ae{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Bt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...pi.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:JS,entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:ZS.replace(/\$\{ANGLE_STEP\}/,pi.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),vi(this,"uniforms"),vi(this,"_thickness"),vi(this,"_quality"),vi(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=pi.getAngleStep(r),this._color=new mn,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*pi.MAX_SAMPLES,pi.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=pi.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};vi(Oh,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});vi(Oh,"MIN_SAMPLES",1);vi(Oh,"MAX_SAMPLES",100);var n_=`precision highp float;
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
`,r_=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,o_=Object.defineProperty,i_=(e,t,n)=>t in e?o_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,su=(e,t,n)=>(i_(e,typeof t!="symbol"?t+"":t,n),n);const a_=class Wy extends ae{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Bt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Wy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:r_,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:n_,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),su(this,"uniforms"),su(this,"_angle"),su(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};su(a_,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var s_=`precision highp float;
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
`,l_=`struct ReflectionUniforms {
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
}`,u_=Object.defineProperty,f_=(e,t,n)=>t in e?u_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zc=(e,t,n)=>(f_(e,typeof t!="symbol"?t+"":t,n),n);const c_=class Hy extends ae{constructor(t){t={...Hy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:l_,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:s_,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),zc(this,"uniforms"),zc(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};zc(c_,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var h_=`precision highp float;
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
`,d_=`struct RgbSplitUniforms {
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
`,m_=Object.defineProperty,p_=(e,t,n)=>t in e?m_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qy=(e,t,n)=>(p_(e,typeof t!="symbol"?t+"":t,n),n);const y_=class Vy extends ae{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Bt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...Vy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:d_,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:h_,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),qy(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};qy(y_,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var g_=`
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
`,x_=`
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
`,M_=Object.defineProperty,b_=(e,t,n)=>t in e?M_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oc=(e,t,n)=>(b_(e,typeof t!="symbol"?t+"":t,n),n);const v_=class Yy extends ae{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Bt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Yy.DEFAULT_OPTIONS,...n};const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:x_,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:g_,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Oc(this,"uniforms"),Oc(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Oc(v_,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var w_=`precision highp float;
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
`,S_=`struct SimpleLightmapUniforms {
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
}`,__=Object.defineProperty,A_=(e,t,n)=>t in e?__(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lu=(e,t,n)=>(A_(e,typeof t!="symbol"?t+"":t,n),n);const T_=class jy extends ae{constructor(...t){let n=t[0]??{};if(n instanceof Ot&&(Bt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...jy.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:S_,entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:w_,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),lu(this,"uniforms"),lu(this,"_color"),lu(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new mn,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};lu(T_,"DEFAULT_OPTIONS",{lightMap:Ot.WHITE,color:0,alpha:1});var R_=`in vec2 vTextureCoord;
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
`,C_=`struct TiltShiftUniforms {
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
}`,P_=Object.defineProperty,I_=(e,t,n)=>t in e?P_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fc=(e,t,n)=>(I_(e,typeof t!="symbol"?t+"":t,n),n);const z_=class Ky extends ae{constructor(t){const{width:n,height:r}=K3.defaultOptions;t={...Ky.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:C_,entryPoint:"mainFragment"}}),i=re.from({vertex:se,fragment:R_,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),Fc(this,"uniforms"),Fc(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};Fc(z_,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var O_=`precision highp float;
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
`,F_=`struct TwistUniforms {
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
`,E_=Object.defineProperty,k_=(e,t,n)=>t in e?E_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qy=(e,t,n)=>(k_(e,typeof t!="symbol"?t+"":t,n),n);const L_=class Zy extends ae{constructor(t){t={...Zy.DEFAULT_OPTIONS,...t};const n=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:F_,entryPoint:"mainFragment"}}),r=re.from({vertex:se,fragment:O_,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Qy(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Qy(L_,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var D_=`precision highp float;
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
`,U_=`struct ZoomBlurUniforms {
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
}`,X_=Object.defineProperty,G_=(e,t,n)=>t in e?X_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jy=(e,t,n)=>(G_(e,typeof t!="symbol"?t+"":t,n),n);const N_=class tg extends ae{constructor(t){t={...tg.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Jt.from({vertex:{source:le,entryPoint:"mainVertex"},fragment:{source:U_.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=re.from({vertex:se,fragment:D_.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Jy(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Jy(N_,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let Sr,eg,Ca,Ws,ol;const Ol=[];let t2=!0,Ec=0;function ng(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,a=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${a.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}async function B_(e,t){eg=t,Sr=new Es,await Sr.init({...e,background:"#000000",backgroundAlpha:1});{const n=Sr.renderer;n.render=Vm("gl:lightmap",n.render.bind(n))}return ol=Ot.from(ng(256)),ol.source.scaleMode="linear",Ws=new Je(Ot.WHITE),Sr.stage.addChild(Ws),Ca=new xe,Sr.stage.addChild(Ca),q_(),Sr.canvas}function $_(){const e=new Je(ol);e.blendMode="add",e.alpha=.01,Ca.addChild(e),Sr.renderer.render(Sr.stage),e.destroy();try{Sr.renderer.texture.initSource(ol.source)}catch{}og()}function e2(e){e!==t2&&(t2=e,Sr.canvas.style.display=e?"":"none",e?Sr.ticker.start():Sr.ticker.stop())}const wi=4;let fa,Hs,kc,Lc;const Fl=[],zi=new t0({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),W_=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,H_=`in vec2 vUV;
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
}`;let rg;function q_(){Lc=Ot.from(ng(64)),Lc.source.scaleMode="linear",fa=ch.create({width:64,height:64,resolution:1}),kc=new xe,Hs=new xe,kc.addChild(Hs),rg=re.from({vertex:W_,fragment:H_,name:"piso-luna"})}function V_(e,t,n){const r=e.width,o=e.height,i=new Bm({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),a=new e0({glProgram:rg,resources:{uTexture:e.source,uMask:fa.source,moonU:zi}}),s=new H3({geometry:i,shader:a,texture:e});return s.x=t,s.y=n,s}function og(){const e=Math.ceil(S.W/wi),t=Math.ceil(S.H/wi);(fa.source.width!==e||fa.source.height!==t)&&fa.resize(e,t,1),zi.uniforms.uScreen[0]=e*wi,zi.uniforms.uScreen[1]=t*wi,eg.renderer.render({container:kc,target:fa,clear:!0,clearColor:[0,0,0,0]})}const n2=[.95,.95,.94],Y_=[.5,.62,.86],j_=[1,.74,.55],r2=[62,108,168],K_=[210,120,60],uu=[1,1,1];function Q_(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let a=n2[i]+(Y_[i]-n2[i])*e;a+=(j_[i]-a)*t*.62,uu[i]=a,n[i]=r2[i]+(K_[i]-r2[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=zi.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const Z_=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),Dc=[];let ca=0,Uc=0,Xc=0,ig=0,ag=0;const J_=110;function Qn(e,t,n,r,o,i){if(i<.02||ca>=J_)return;const a=(e-t)*B.HW+B.OX,s=(e+t)*B.HH,l=r*B.HW*1.5;if(a<Uc-l||a>ig+l||s<Xc-l||s>ag+l)return;let u=Dc[ca];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},Dc[ca]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),ca++}const o2=(e,t,n,r,o)=>Qn(e,t,0,n,r,o);let Ki=null;function t6(){if(Ki)return Ki;Ki=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?Ki.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&Ki.push({x:e.x,y:e.y,kind:"crystal"});return Ki}const i2={blue:5949695,red:16742470},e6={blue:9101567,red:16752752},n6={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function r6(e){const t=S.game,n=S.T,r=t.player,o=.55+.45*e;for(const i of t6())if(i.kind==="brazier"){const a=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);Qn(i.x,i.y,.5,3.3*(.96+.04*a),16749632,.8*a*o)}else Qn(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const a=t.fountain[i];a&&Qn(a.x,a.y,.3,3.6,e6[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){Qn(i.x,i.y,1.75,3.4,i2[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){Qn(i.x,i.y,.9,4.4,i2[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(Xe(i))continue;const a=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&Qn(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),a&&a.burn&&Qn(i.x,i.y,.4,1.3,16747560,.5*o);const s=a&&a.transform;s&&Qn(i.x,i.y,.6,2.8,s.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&Qn(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const a=window.SIM.RUNES[i.kind];Qn(i.x,i.y,.5,1.7,yh(a.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||a0(i,n)&&Qn(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&Qn(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const a=n6[i.fx];a!==void 0&&Qn(i.x,i.y,i.z||.45,i.skill?2:1.2,a,(i.skill?.75:.5)*o)}ZM(o2,40,o),JM(o2,14,o)}const sg=new URLSearchParams(location.search),o6=sg.get("luna")==="0",i6=sg.get("mapaluz")==="0";let bs=!1;function a6(e,t){const n=S.game;if(!n||!n.player||i6){e2(!1),Ec=0,bs&&(bs=!1,zi.uniforms.uMoon[3]=0);return}e2(!0);const r=k2(n.t),o=S.cam;Ec=r.night,Q_(r.night,r.warm),o6&&(zi.uniforms.uMoon[3]=0),Ws.tint=Z_(uu[0],uu[1],uu[2]),Ws.width=S.W,Ws.height=S.H,Ca.scale.set(o.z),Ca.position.set(e,t),Uc=o.x-S.W/2/o.z,Xc=o.y-S.H/2/o.z,ig=Uc+S.W/o.z,ag=Xc+S.H/o.z+120,ca=0,r6(r.night);const{HW:i,HH:a,OX:s,ZK:l}=B;bs=zi.uniforms.uMoon[3]>.005;let u=0;for(;u<ca;u++){const f=Dc[u];let h=Ol[u];h||(h=new Je(ol),h.anchor.set(.5),h.blendMode="add",Ca.addChild(h),Ol[u]=h);const c=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+s,m=(f.x+f.y)*a-f.z*l*.35-10;if(h.visible=!0,h.x=d,h.y=m,h.width=c,h.height=c*.62,h.tint=f.col,h.alpha=f.a,bs){let p=Fl[u];p||(p=new Je(Lc),p.anchor.set(.5),p.blendMode="add",Hs.addChild(p),Fl[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=c,p.height=c*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<Ol.length;f++)Ol[f].visible=!1;if(bs){for(let f=u;f<Fl.length;f++)Fl[f].visible=!1;Hs.scale.set(o.z/wi),Hs.position.set(e/wi,t/wi),og()}}let wr;const te={};let Pa,Ia,Ar,za,qs,Gc=0,vf,fu=null,cu=null,Yu,Nc=[],ju=[];const Ku=[],es=new Map,$o=[],El=[];function Fh(){return wr.canvas}const Bc=[];async function s6(e){const t=y5();let n=0;for(const o of t){try{wr.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new Je(Yu);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(S.W/2,S.H/2),te.lights.addChild(r);for(let o=0;o<3;o++)po.renderer.render(po.stage),wr.renderer.render(wr.stage),Wr.renderer.render(Wr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of Bc)try{Wr.renderer.texture.initSource(o)}catch{}try{po.renderer.texture.initSource(Yu.source)}catch{}$_()}let wf;function l6(){try{const e=wr.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let Wr,po;const kl={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1,textureGCActive:!1};function Uo(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function u6(e){Wr=new Es,wr=new Es,po=new Es,await Wr.init({...kl,background:"#100d18"}),await wr.init({...kl,backgroundAlpha:0}),await po.init({...kl,backgroundAlpha:0}),vf=await B_(kl,Wr);for(const[t,n]of[["gl:ground",Wr],["gl:units",wr],["gl:lights",po]]){const r=n.renderer;r.render=Vm(t,r.render.bind(r))}S.gpuName=l6(),S.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(S.gpuName),e.style.position="fixed",Pa=document.createElement("canvas"),Ia=document.createElement("canvas"),Ar=document.createElement("canvas"),za=document.createElement("canvas"),Uo(Wr.canvas,1),Uo(Pa,3),Uo(wr.canvas,4),Uo(vf,5,"multiply"),Uo(po.canvas,6,"plus-lighter"),Uo(Ar,7),Uo(Ia,8),Uo(za,9,"plus-lighter"),Ar.style.imageRendering="auto",wr.canvas.style.pointerEvents="auto",e.append(Wr.canvas,Pa,wr.canvas,vf,po.canvas,Ar,Ia,za);for(const t of["ground"])te[t]=new xe,Wr.stage.addChild(te[t]);for(const t of["world","top"])te[t]=new xe,wr.stage.addChild(te[t]);te.lights=new xe,po.stage.addChild(te.lights),te.groundCam=new xe,te.ground.addChild(te.groundCam),te.worldCam=new xe,te.world.addChild(te.worldCam),te.shadows=new xe,te.entities=new xe,te.entities.sortableChildren=!0,te.worldCam.addChild(te.shadows,te.entities),te.lightsCam=new xe,te.lights.addChild(te.lightsCam),wf=new Jv({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),wf.resolution=.5,te.lights.filters=[wf],Yu=Ot.from(f6(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),qs=new Je(Ot.WHITE),te.top.addChild(qs),a2(),window.addEventListener("resize",a2)}function f6(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function a2(){S.W=window.innerWidth,S.H=window.innerHeight;const e=i=>Math.ceil(i*Hc);Pa.width=za.width=e(S.W),Pa.height=za.height=e(S.H),Ia.width=S.W,Ia.height=S.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=Ot.from(t);o.source.scaleMode="linear",qs.texture=o,qs.width=S.W,qs.height=S.H}function c6(){const e=window.MAP;for(const o of M5())te.groundCam.addChild(V_(o.tex,o.x,o.y)),Bc.push(o.tex.source);const t=h6(),n=fr.ground.naturalWidth,r=fr.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=fr[o];if(!a||!a.naturalWidth)continue;const s=Ot.from(a);s.source.scaleMode="linear",Bc.push(s.source);const l=new Je(s);l.width=n,l.height=r;const u=new V3({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,te.groundCam.addChild(l,u),i==="flow"?fu=u:cu=u}Nc=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),ju=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of Nc)$c(o,!0);for(const o of ju)$c(o,!1)}function $c(e,t){const n=Ht[e.sprite];if(!n||!i0(e.sprite))return;const r=No(e.sprite,null,0,0);if(!r)return;const o=new Je(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=P(e.x,e.y);o.x=i,o.y=a,o.zIndex=(e.x+e.y)*100,te.entities.addChild(o),Ku.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function h6(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=Ot.from(e);return n.source.scaleMode="nearest",n}function d6(e){const t=Ht[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",Yl(e.sprite,"idle",e.animT||0)]:["walk",0]}const m6={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},p6={fragment:13656319,frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194},s2={};function y6(e){let t=s2[e];if(!t){t=new W3;const[n,r,o]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,r,0,0,0,0,o,0,0,0,1,0],s2[e]=t}return t}function g6(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===S.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===S.hoverUnit?e.team!==t.team?"red":"white":""}function x6(e){let t=es.get(e.id);if(!t){const n=()=>{const r=new Je(Ot.EMPTY);return te.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new Je(Ot.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,te.shadows.addChild(t.shadow),es.set(e.id,t)}return t}function ai(e,t,n,r,o,i,a){if(!t){e.visible=!1;return}const s=Ht[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=a}function M6(){const e=S.game,t=e.player,n=S.T,r=++b6;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=x6(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){ai(i.spr,No("prop_boulder",null,0,0),"prop_boulder",...P(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const F of i.gear)F.visible=!1;continue}if(Xe(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const F of i.gear)F.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const F=o._spriteBak||(S.mode==="guest"?o.heroKey:null);F&&(o.sprite=F)}if(o.sprite&&(!Ht[o.sprite]||!i0(o.sprite))){const F=m6[o.sprite];o._fbScale=F?F[1]:1,o._fbTint=F?F[2]:16777215,o.sprite=F&&Ht[F[0]]?F[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[s,l]=P(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const F=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(F*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let h=0;if(o._cyA!==void 0){const F=Math.min(1,(n-o._cyA)/.4);h=58*F*(2-F)+Math.sin(n*5+o.id)*5*F}else if(o._cyB!==void 0){const F=(n-o._cyB)/.18;F<1?h=o._cyH0*(1-F*F):o._cyB=void 0}o._cyH=h,u-=Math.round(h);const[c,d]=d6(o);let m=a||Ht[o.sprite]&&Ht[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!a&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const y=o.status&&o.status.transform,x=y&&y.mount&&Ht[y.mount]?y:null;if(y&&!x){o._tfT=(o._tfT||0)+1/60;const F=Math.min(1,o._tfT*4),U=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(y.scale-1)*F*U}else o._tfT=0;const b=o.status||{};let M=s,v=null;if(x){const F=Ht[x.mount],U=x.mountScale||2,G=o._stompA!==void 0&&n<o._stompA&&F.anims&&F.anims.stomp?"stomp":c,Y=F.anims&&(F.anims[G]||F.anims.idle),k=G==="stomp"?Math.min(Y.n-1,Math.floor((1-(o._stompA-n)/.6)*Y.n)):Y?d%Y.n:0;v=No(x.mount,G,m,k),i.mount||(i.mount=new Je(Ot.EMPTY),te.entities.addChild(i.mount)),ai(i.mount,v,x.mount,M,u,U,(o.x+o.y)*100+.9),i.mount.alpha=f,i.mount.tint=16777215;const L=F.dirs||16,D=L>=16?m:Math.round(m/2)%L,$=F.saddleFrames&&F.saddleFrames[G]&&F.saddleFrames[G][D],W=$&&$[k]||F.saddleXY&&F.saddleXY[D]||[0,-(F.saddle!=null?F.saddle:F.ay*.62)];M+=Math.round(W[0]*U),u+=Math.round(W[1]*U)}else i.mount&&(i.mount.visible=!1);b.stun&&["quake","roar","dust","firedash","bash"].includes(b.stun.fx)&&(M+=Math.round(Math.sin(n*60+o.id)*1.5));const w=(o.x+o.y)*100+1,_=No(o.sprite,x?"idle":c,m,a||x?Yl(o.sprite,"idle",n):d);ai(i.spr,_,o.sprite,M,u,p,w),i.spr.alpha=f;const A=_&&!a?g6(o,t):"";if(A){if(!i.ol){i.ol=new xe;for(let U=0;U<4;U++)i.ol.addChild(new Je(Ot.EMPTY));te.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=w-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==A&&(i.ol.filters=[y6(A)],i.olCol=A);const F=1.3;[[F,0],[-F,0],[0,F],[0,-F]].forEach(([U,G],Y)=>ai(i.ol.children[Y],_,o.sprite,M+U,u+G,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let R=0,C=0;if(o.hitFlash>.06?(R=16777215,C=.75):b.slow?(R=p6[b.slow.fx]||8050943,C=.35):b.root?(R=3836458,C=.3):b.stun&&b.stun.fx==="arcane"?(R=11563263,C=.35):b.burn?(R=16742954,C=.25+.15*Math.sin(n*14+o.id)):y&&!x?(R=y.kind==="fire"?16747066:16765514,C=.25+.1*Math.sin(n*6)):b.hex?(R=11565823,C=.2+.08*Math.sin(n*5+o.id)):b.berserk&&(R=16722458,C=.12+.08*Math.sin(n*9+o.id)),C>0&&_?(ai(i.glow,_,o.sprite,M,u,p,w+.5),i.glow.tint=R,i.glow.alpha=C*f):i.glow.visible=!1,S.shadowsOn&&!a&&_&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Ht[o.sprite]&&Ht[o.sprite].fly)){const F=x&&v?x.mount:o.sprite,U=Ht[F],G=x&&v?x.mountScale||2:p;i.shadow.texture=x&&v?v:_,i.shadow.visible=!0,i.shadow.anchor.set(U.ax/U.fw,U.ay/U.fh),i.shadow.setFromMatrix(new De(G,0,-.8*G,-.38*G,Math.round(s),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const I=Ht[o.sprite]&&Ht[o.sprite].gear;let z=0;if(I&&(o.kind==="hero"||o.illusion)){const F=o.illusion?o.owner&&S.mode!=="guest"?e.gearCode(o.owner):0:S.mode==="guest"?o.gear||0:e.gearCode(o),U={w:F&3,h:F>>2&3,a:F>>4&3,b:F>>6&3};for(const G of["a","b","h","w"]){const Y=U[G];if((Y>0||G==="w")&&I[G]&&I[G].includes(Y)){const k=o.sprite+"__"+G+Y;if(!i.gear[z]){const L=new Je(Ot.EMPTY);te.entities.addChild(L),i.gear[z]=L}ai(i.gear[z],No(k,c,m,d),k,M,u,p,w+.2+z*.05),i.gear[z].alpha=f,z++}}}if(o.kind==="courier"){const F=o.owner||(o.ownerId?e.units.find(G=>G.id===o.ownerId):null),U=F&&(F.heroKey||F.sprite);if(U&&Ht[U]){if(!i.gear[z]){const k=new Je(Ot.EMPTY);te.entities.addChild(k),i.gear[z]=k}const G=Ht[o.sprite],Y=Math.sin(n*3+o.id)*1.5;ai(i.gear[z],No(U,"idle",2,Yl(U,"idle",n)),U,M,u-(G?G.ay*p:40)+2+Y,.3,w+.6),i.gear[z].alpha=f,z++}}for(;z<i.gear.length;z++)i.gear[z].visible=!1}for(const[o,i]of es)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();i.ol&&i.ol.destroy({children:!0}),i.mount&&i.mount.destroy(),es.delete(o)}}let b6=0;const ha=new Map,l2={},ns=[];let v6=0;function w6(e,t){const n=e+(t?"o":"c");let r=l2[n];return r||(r=Ot.from(np(e,t)),r.source.scaleMode="nearest",l2[n]=r),r}function S6(){const e=S.game,t=e&&e.player,n=++v6;if(ns.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;ns.push(r);let i=ha.get(r.id);if(!i){const u=new Je(Ot.EMPTY);u.anchor.set(.5,1-1/36),te.entities.addChild(u),i={spr:u,seen:0},ha.set(r.id,i)}i.seen=n;const[a,s]=P(r.x,r.y),l=r.until-e.t;i.spr.texture=w6(r.kind,a0(r,S.T)),i.spr.x=Math.round(a),i.spr.y=Math.round(s),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(S.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of ha)o.seen!==n&&(o.spr.destroy(),ha.delete(r))}function _6(e,t){const n=S.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=S.mouse.wx,a=S.mouse.wy,s=Math.hypot(i-e.x,a-e.y)>r.WARD_RANGE;if(ft(e.x,e.y,r.WARD_RANGE,s?"#ffffff70":"#ffffffb0",null,2,[8,6]),s){const[l,u]=P(e.x,e.y),[f,h]=P(i,a);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-S.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,h),t.stroke(),t.restore()}ft(i,a,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),j5(t,o?"sen":"obs",i,a)}function A6(e){if(!e.sprite||!i0(e.sprite))return;const t=No(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new Je(t),r=Ht[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=P(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,te.entities.addChild(n),$o.push({spr:n,t:0,vy:20})}function T6(e){const t=S.cam,n=S.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(S.W/2-t.x*t.z+r),a=Math.round(S.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])te[m].scale.set(t.z),te[m].position.set(i,a);const s=t.x-S.W/2/t.z-2,l=t.y-S.H/2/t.z-2,u=S.W/t.z+4,f=S.H/t.z+4;fu&&(fu.tilePosition.set(-n*14,-n*3),fu.alpha=.45+.12*Math.sin(n*1.3)),cu&&(cu.tilePosition.set(Math.sin(n*.3)*6,0),cu.alpha=.25+.15*Math.sin(n*.9));const h=S.game&&S.game.player,[c,d]=h?P(h.x,h.y):[0,0];for(const m of Ku){const[p,y]=P(m.o.x,m.o.y),x=p>s-200&&p<s+u+200&&y>l-100&&y<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=No(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Ht[m.o.sprite];if(m.spr.alpha=h&&m.o.x+m.o.y>h.x+h.y&&b&&Math.abs(c-p)<b.fw*.42&&d<y&&d>y-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,v=(M.x*12.9898+M.y*78.233)%6.28,w=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+S.wind);m.spr.skew.x=-(Math.sin(n*w*1.6+v)*_+Math.sin(n*w*3.1+v*2)*_*.3+S.wind*.02)}}}}S.game&&(Be("render/amb"),ab(e,s,l,u,f,Nc),$e("render/amb"),Be("render/units"),M6(),S6(),$e("render/units"));for(const m of $o)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=$o.length-1;m>=0;m--)$o[m].t>.8&&($o[m].spr.destroy(),$o.splice(m,1));Be("render/overlays"),C6(),$e("render/overlays"),Be("render/lighting"),a6(i,a),$e("render/lighting"),Gc=Ec,Be("render/lights"),F6(),$e("render/lights"),S.game&&S.game.player?(Be("render/fog"),k6(),$e("render/fog")):Wc&&(Wc=!1,Ar.getContext("2d").clearRect(0,0,Ar.width,Ar.height))}let Wc=!1;const Hc=1;function lg(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&V[r+"_"+n.slice(-1)])}function Sf(e,t=1){const n=e.getContext("2d"),r=S.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(S.W/2-r.x*r.z+o)*t,Math.round(S.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const R6={fragment:"#7ae8ff",frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function C6(){const e=S.game,t=S.T,n=Sf(za,Hc);let r=Sf(Pa,Hc);if(Ld(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;sb();for(const l of e.zones){if(l.fx==="mon_spores"){J5(l);continue}if(!lg(l))if(l.once){const u=1-l.t/l.dur;ft(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),ft(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(ft(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&T({type:"puff",x:l.x+g(-1,1)*l.r*.8,y:l.y+g(-1,1)*l.r*.8,r:g(12,22),dur:g(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const h=Math.random()*6.28,c=Math.random()*l.r;T({type:"meteor",x:l.x+Math.cos(h)*c,y:l.y+Math.sin(h)*c,dur:.25})}}}if(e.corralOf)for(const l of["blue","red"]){const u=e.corralOf(l);ft(u.x,u.y,u.r,"#5a3818","rgba(150,110,60,0.20)",4),ft(u.x,u.y,u.r,"#b98a4a",null,2,[5,4]),ft(u.x,u.y,u.r-.12,l==="blue"?"#5ab0ff60":"#ff705060",null,1.5)}lb();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];ft(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of ns)V5(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||Xe(l)||ft(l.x,l.y,(l.r||.35)*(l.scale||1)*.85+.06,l===o?"#ffd24a":gu[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=S.hoverUnit;a&&a!==o.target&&!a.dead&&ft(a.x,a.y,(a.r||.4)*(a.scale||1)*.85+.08,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=P(l.x,l.y,1.3),[h,c]=P(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(h,c),r.stroke(),r.restore()}o.target&&!o.target.dead&&ft(o.target.x,o.target.y,(o.target.r||.4)*(o.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&ft(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(P6(o),_6(o,r),S.hoverAbil){const l=i[o.heroKey].abil[S.hoverAbil];l.range&&ft(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe"||l.type==="channel"&&l.self)&&ft(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=S.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,ft(s.x,s.y,.16*(1-l)+.04,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||Xe(l))continue;l.status&&l.status.slow&&ft(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,R6[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u&&!u.mount){const f=u.kind==="fire",h=.5+.5*Math.sin(t*6);ft(l.x,l.y,1+h*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&ft(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let c=0;c<3;c++)Math.random()<.7&&E(l.x+g(-.6,.6),l.y+g(-.6,.6),g(.1,1.2),g(-.3,.3),g(-.3,.3),g(1,2.4),.6,f?Mr("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&ft(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&ft(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&E(l.x+g(-.3,.3),l.y+g(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(ft(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&E(l.x+g(-.4,.4),l.y+g(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),YM(l)}}if(r=Sf(Ia),Ld(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=P(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of ns)Y5(i,i.team===o.team);mb(),ub(),I6(r)}cb()}hb(),e&&e.player&&O6(r)}function P6(e){if(!S.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[S.aim.k],n=S.mouse.wx,r=S.mouse.wy;let o=n-e.x,i=r-e.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&ft(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&S.game.unitTarget&&S.game.unitTarget(t)){const u=S.aimUnit;if(u){const f=(u.r||.4)*(u.scale||1)*.85+.1,h=u.team!==e.team;ft(u.x,u.y,f,h?"#ff5a4a":"#7fe0ff",h?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),ft(u.x,u.y,f+.12+Math.sin(S.T*8)*.03,h?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(t.type==="proj"||t.type==="dash"||t.type==="hook"){const u=t.type==="dash"?Math.min(a,t.range):t.range,f=(t.width||1)/2,h=-i*f,c=o*f;rf([[e.x+h,e.y+c],[e.x+o*u+h,e.y+i*u+c],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-h,e.y+i*u-c],[e.x-h,e.y-c]],s,l)}else if(t.type==="blink"||t.type==="leap"){const u=Math.min(a,t.range||0),f=e.x+o*u,h=e.y+i*u;rf([[e.x-i*.06,e.y+o*.06],[f-i*.06,h+o*.06],[f+i*.06,h-o*.06],[e.x+i*.06,e.y-o*.06]],s,l),ft(f,h,t.radius||.45,s,l,2)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let h=0;h<=12;h++){const c=u-t.angle+2*t.angle*h/12;f.push([e.x+Math.cos(c)*t.range,e.y+Math.sin(c)*t.range])}rf(f,s,l)}else{const u=Math.min(a,t.range||0),f=e.x+o*u,h=e.y+i*u;ft(f,h,t.radius||.6,s,l,2)}}function I6(e){const t=S.T;for(const n of S.game.units){if(n.dead||Xe(n))continue;const r=n.status||{};if(jM(e,n),!r.stun&&!r.root){if(r.slow&&r.slow.fx!=="fragment"&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;E(n.x+g(-.3,.3),n.y+g(-.3,.3),l<0?1.1:.2,g(-.2,.2),g(-.2,.2),l,.7,Mr(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&E(n.x+g(-.25,.25),n.y+g(-.25,.25),.3,0,0,1.4,.4,Mr("fire"),3,-1,!0);continue}const o=Ht[n.sprite],i=n.scale||1,[a,s]=P(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="bash")R5(e,a,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const h=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(h)*16-3,u+Math.sin(h)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(h)*16-1,u+Math.sin(h)*5-1,2,2)}else{for(let f=0;f<3;f++){const h=t*5+f*2.09,c=a+Math.cos(h)*14,d=u+Math.sin(h)*4;e.fillStyle="#ffe070",e.fillRect(c-3,d-1,6,2),e.fillRect(c-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(c-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const h=-t*4+f*3.14,c=a+Math.cos(h)*20,d=u-6+Math.sin(h)*6;e.fillStyle="#ffffff",e.fillRect(c-3,d,3,2),e.fillRect(c,d-2,3,2)}}l==="splash"&&Math.random()<.3&&E(n.x+g(-.3,.3),n.y+g(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const vs=new Map;function hu(e,t,n){const r=n+"|"+t+"|"+e;let o=vs.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,o.width=Math.ceil(i.measureText(e).width+s*2+2),o.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),vs.size>2e3&&vs.delete(vs.keys().next().value),vs.set(r,o),o}function z6(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(gu))hu(e[t].name,n,11),hu("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)hu(String(t),"#ffe070",10)}function O6(e){const t=S.game,n=t.player,r=S.cam,o=window.SIM.HEROES,i=r.x-S.W/2/r.z,a=r.y-S.H/2/r.z,s=S.W/r.z,l=S.H/r.z,u=(h,c,d,m,p,y,x)=>{e.fillStyle="#000000c0",e.fillRect(h-1,c-1,d+2,m+2),e.fillStyle=x,e.fillRect(h,c,d,m),e.fillStyle=y,e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(h,c,d,m,p,y=p)=>{const x=hu(h,m,y),b=p/y,M=x.width*b,v=x.height*b;e.drawImage(x,Math.round(c-M/2),Math.round(d-v/2),M,v)};for(const h of t.units){if(h.dead||Xe(h))continue;const c=(h.x-h.y)*B.HW+B.OX,d=(h.x+h.y)*B.HH;if(c<i-60||c>i+s+60||d<a-60||d>a+l+160||(h.kind==="monster"||h.kind==="courier")&&h.hp>=h.maxHp-1&&!h.boss)continue;const m=Ht[h.sprite],p=d-(h.leaping?40:0),y=h.status&&h.status.transform&&h.status.transform.mount&&Ht[h.status.transform.mount]?h.status.transform:null,x=y?(Ht[y.mount].saddle!=null?Ht[y.mount].saddle:Ht[y.mount].ay*.62)*(y.mountScale||2):0,b=p-x-(m?m.ay*(h.scale||1)*(h._fbScale||1)*(h.monster==="serpent"?1.4:.92):50)-6,M=h.kind==="hero"||h.kind==="tower"||h.kind==="nexus"||h.boss,v=M?66:34,w=M?7:4,_=h===n?"#3ccf4e":h.team==="neutral"?"#e8c040":gu[h.team];if(e.globalAlpha=n&&h.team!==n.team&&h._va!==void 0?Math.min(1,h._va):1,u(c-v/2,b,v,w,h.hp/h.maxHp,_,"#1a0e0e"),h.kind==="minion"&&h.team!==n.team&&h.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(c-v/2-1.5,b-1.5,v+3,w+3)),h.kind==="hero")for(let A=1;A<6;A++)e.fillStyle="#00000080",e.fillRect(c-v/2+v*A/6,b,1,w);if(y&&y.mmax&&(u(c-110/2,b-22,110,8,y.mhp/y.mmax,"#d8a040","#2a1a0a"),f("Behemoth",c,b-30,"#ffd890",10)),h.shield>0&&S.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(c-v/2+h.hp/h.maxHp*v,b,Math.min(v*(1-h.hp/h.maxHp),h.shield/h.maxHp*v),w)),h.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(c-v/2-16,b-2,14,w+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(c-v/2-16,b-2,14,w+4),f(String(h.level),c-v/2-9,b+w/2+1,"#ffe070",10),h!==n&&f((h.human?"★ ":"")+o[h.heroKey].name,c,b-9,gu[h.team],11);const A=t.castInfo&&t.castInfo(h);A&&u(c-v/2,b+w+3,v,4,A.p,A.kind===2?"#7ad0ff":A.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const h of t.texts){if(h.dst!==void 0&&h.dst!==n.id&&h.src!==n.id&&!(n.target&&h.dst===n.target.id))continue;const[c,d]=P(h.x,h.y,1.1+h.t*.9);e.globalAlpha=Math.max(0,1-h.t/1.1);const m=h.t<.12?1.4-h.t*3:1;f(st.t(String(h.txt)),c+(h.id%7-3)*3,d,h.col,(h.big?20:14)*m,h.big?20:14)}e.globalAlpha=1}function F6(){let e=0;const t=S.T,n=(r,o,i,a,s,l)=>{let u=El[e];u||(u=new Je(Yu),u.anchor.set(.5),u.blendMode="add",te.lightsCam.addChild(u),El[e]=u),e++;const[f,h]=P(r,o,i);u.visible=!0,u.x=f,u.y=h,u.width=u.height=a*(2+.35*Gc),u.tint=s,u.alpha=Math.min(1,l*(1+.7*Gc))};for(const r of ju)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of ju)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&E(r.x+g(-.1,.1),r.y+g(-.1,.1),.9,g(-.2,.2),g(-.2,.2),g(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(S.game){for(const r of S.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),Xe(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&!o.mount&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*B.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of ns)a0(r,t)&&n(r.x,r.y,ph(r.kind)/B.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of S.game.zones)r.once&&!lg(r)&&n(r.x,r.y,0,r.r*B.HW*1.4,13143295,.35);for(const r of S.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<El.length;e++)El[e].visible=!1}let si=null;function E6(){if(si)return si;si=document.createElement("canvas"),si.width=si.height=128;const e=si.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),si}function k6(){const t=Math.ceil(S.W/4),n=Math.ceil(S.H/4),r=S.cam;(Ar.width!==t||Ar.height!==n)&&(Ar.width=t,Ar.height=n),Wc=!0;const o=Ar.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of S.visionSrc){const[a,s]=P(i.x,i.y),l=((a-r.x)*r.z+S.W/2)/4,u=((s-r.y)*r.z+S.H/2)/4,f=L2(i.kind)*B.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(E6(),l-f,u-f/2,f*2,f)}}function L6(e){if(!i0("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;$c({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=Ku[Ku.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function ug(){for(const[,e]of es){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}es.clear();for(const e of $o)e.spr.destroy();$o.length=0;for(const[,e]of ha)e.spr.destroy();ha.clear(),ns.length=0}let qe,dn,mr,J,mt,Pr="dragon",So="blue",et=null,u2=0,Si=0,_f=0,Ll=!1,da=!1,qc=!1,Zn={},Yo=null,jo=!1,f2=0,c2=0,D6=0,Af=performance.now(),h2=-9,Vc=!1;const U6=["buff","aoe_self","heal_aoe","illusion","global","copypaste"],X6=e=>U6.includes(e.type)||e.type==="channel"&&e.self,G6=["facil","normal","dificil"],Is=new Map;let Yc=!1;function Xt(e){if(e==null)return"";if(e=String(e),Yc||eh.value==="es"||!window.I18N)return e;const t=Is.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Is.size>5e3&&Is.clear(),Is.set(e,r),r}function N6(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=dn[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=qe.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of qe.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(qe&&qe.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=qe.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function fg(e,t,n,r=1,o=1){if(t===void 0||n===void 0){J.play(e,r,0,.03,o);return}const[i,a]=P(t,n),s=S.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/S.W,u/S.H);const h=S.game&&S.game.player;if(h&&!h.dead){const[c,d]=P(h.x,h.y);f=Math.min(f,Math.hypot((i-c)*s.z/S.W,(a-d)*s.z/S.H))}J.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(S.W*.6))),.03,o)}function Eh(e,t,n,r){if(!J.babble)return;const o=Math.max(0,mr.indexOf(e))*7+3;if(n===void 0||r===void 0){J.babble(o,t,.5,0);return}const[i,a]=P(n,r),s=S.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/S.W,u/S.H),h=.5*Math.max(0,1-f*1.1);h>.05&&J.babble(o,t,h,Math.max(-1,Math.min(1,l/(S.W*.6))))}let d2=0;function _i(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function Ye(e,t="#ffe7b0",n=1.5){S.game&&S.game.msg(e,t,n)}async function B6(e){qe=window.SIM,dn=qe.HEROES,mr=qe.HERO_KEYS,J=window.AUDIO,mt=new window.Net;{const r=J.play,o=J.babble;J.play=function(i,...a){Hf("snd",1,i),Be("snd");try{return r.call(J,i,...a)}finally{$e("snd")}},o&&(J.babble=function(...i){return Hf("voice"),o.apply(J,i)})}{const r=$h.debounceRendering;$h.debounceRendering=o=>(r||queueMicrotask)(()=>{Be("ui");try{o()}finally{$e("ui")}})}Og();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(eh.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");G6.includes(r)&&(Nn.value={...Nn.value,difficulty:r})}catch{}try{S.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}N6(),st.babble=Eh,st.sfx=fg,st.say=_i,st.play=(r,o)=>J.play(r,o??1),st.t=Xt,st.banner=(r,o,i,a,s)=>{const l=Ea.value.slice(-3);Ea.value=[...l,{id:++D6,title:Xt(r),color:o,killerKey:i,victimKey:a,big:s}]},Fg(zr),hg(),Nn.value={...Nn.value,volMaster:J.volume?J.volume("m"):1,volMusic:J.volume?J.volume("mu"):1,volSfx:J.volume?J.volume("s"):1,soundStyle:J.style?J.style():"epic",shadows:S.shadowsOn},await p5(r=>jg.value=r),await u6(e),c6(),e8(),z6(),await Promise.all([s6(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,Eg(),kg().then(()=>Promise.all([Lg(mr),Dg(mr)])),document.fonts?document.fonts.ready:null]);try{const r=new qe.Game(window.MAP,{humans:[]});L6(r._makeBushes())}catch(r){console.warn(r)}i8(),a8();const[t,n]=P(B.N/2,B.N/2);S.cam.x=t,S.cam.y=n,await Ug(),Ke.value="menu",mt.init().then(r=>{D2.value=!!r}).catch(()=>{}),mt.onChange=()=>Ys(),b8(),requestAnimationFrame(mg)}function cg(e){const t=qe.PASSIVES&&qe.PASSIVES[e];return t?{name:Xt(t[0]),desc:Xt(t[1])}:{name:"",desc:""}}function hg(){Xg.value=mr.map(e=>{const t=dn[e];return{key:e,name:t.name,title:Xt(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:Xt(t.abil[n].name),desc:Xt(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:cg(e)}}),Gg.value=qe.ITEMS.map(e=>({id:e.id,name:Xt(e.name),desc:Xt(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:qe.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let m2="";function kh(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(yn("error",t),t===m2)return;m2=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const Lh="v9.8";{const e=document.createElement("div");e.id="build-tag",e.textContent=Lh,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>kh(e.error||e.message));window.addEventListener("unhandledrejection",e=>kh(e.reason));let dg=performance.now(),Dl=0;function p2(){const e=performance.now();if(e-dg<150){Dl=0;return}const t=Dl?Math.min(.05,(e-Dl)/1e3):1/30;Dl=e,S.T=e/1e3;try{const n=Ke.value;n==="pick"&&et&&(_g(t),Oi()),n==="lobby"&&Ag(t),n==="play"&&S.game&&pg(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=p2,e=!0}catch{}e||setInterval(p2,33)}const $6={menu:0,lobby:1,pick:2,play:3};function mg(e){dg=performance.now(),J3(e-Af);const t=Math.min(.05,(e-Af)/1e3);Af=e,S.T=e/1e3;try{const n=Ke.value;Gn("screen",$6[n]??9),n==="pick"&&et&&(Be("draft"),_g(t),Oi(),$e("draft")),n==="lobby"&&(Be("lobby"),Ag(t),$e("lobby")),Be("play"),n==="play"&&S.game?Z6(t):Y6(t),$e("play"),S.marker&&(S.marker.t+=t,S.marker.t>.3&&(S.marker=null)),Be("fx"),ib(t),$e("fx"),Be("render"),T6(t),$e("render"),(c2-=t)<=0&&S.game&&(c2=.1,Be("minimap"),M8(),$e("minimap")),(x2-=t)<=0&&(x2=.5,Be("amb"),V6(),$e("amb")),n!=="play"&&(g2-=t)<=0&&(g2=1,mt.available&&(Wg.value=mt.openGames())),S.game&&(y2-=t)<=0&&(y2=.25,W6()),ma&&q6()}catch(n){console.error(n),kh(n)}requestAnimationFrame(mg)}let y2=0;function W6(){const e=S.game,t=KM();let n=0,r=0,o=0;for(const i of e.units)i.dead||(i.kind==="hero"?n++:i.kind==="minion"?o++:i.owner&&r++);Gn("units",e.units.length),Gn("heroes",n),Gn("minions",o),Gn("pets",r),Gn("proj",(e.projectiles||e.proj||[]).length),Gn("simFx",(e.fx||[]).length),Gn("parts",t.parts),Gn("efx",t.efx),Gn("decals",t.decals),Gn("ambFx",t.amb),Gn("dynLights",t.dynL),Gn("t",Math.round(e.t)),Gn("zoom",Math.round(S.cam.z*100)/100),Gn("dom",document.getElementsByTagName("*").length)}let ma=null;function H6(){if(ma){ma.remove(),ma=null;return}const e=document.createElement("canvas");e.width=470,e.height=190,e.style.cssText="position:fixed;left:8px;top:8px;z-index:9999;pointer-events:none;background:rgba(8,6,14,.82);border:1px solid #5a4a7a;border-radius:6px",document.body.appendChild(e),ma=e}function q6(){const e=ma,t=e.getContext("2d"),n=h5(),r=e.width,o=100;t.clearRect(0,0,r,e.height);const i=Math.min(n.ring,r-10),a=8+o,s=f=>a-Math.min(o,f*o/100);t.fillStyle="#2a2440";for(const f of[16.7,33,50])t.fillRect(5,s(f),i,1);for(let f=0;f<i;f++){const h=(n.pos-i+f+n.ring*2)%n.ring,c=n.gap[h],d=n.work[h],m=5+f;t.fillStyle=c>50?"#ff4a3a":c>33?"#ffb040":"#4a8aff",t.fillRect(m,s(c),1,a-s(c)),t.fillStyle="#9fe0a0",t.fillRect(m,s(d),1,a-s(d))}t.font="11px monospace",t.fillStyle="#e8e0ff";const l=n.secs;t.fillText(l?`fps ${l[1]}  peor ${l[2]}ms  p95 ${l[7]}ms  juego ${l[8]}ms/cuadro  mem ${l[10]}MB`:"...",6,a+14),t.fillText(`tirones ${n.hitches}  marcas F4 ${n.marks}  ping ${Math.round(n.ping)}ms  jitter ${Math.round(n.jitter)}`,6,a+28),t.fillText(n.parts.slice(0,5).map(([f,h])=>f+" "+h.toFixed(1)).join("  "),6,a+42);const u=n.last;u&&(t.fillStyle="#ffb0a0",t.fillText(`ultimo tiron: ${u.ms}ms (juego ${u.work}, afuera ${u.outside}) a los ${u.t}s`,6,a+56)),t.fillStyle="#8a80a8",t.fillText("azul/rojo: cuadro   verde: trabajo del juego   F4: marcar tiron",6,a+70)}let g2=0,x2=0;function V6(){if(!J.setAmbient)return;const e=pr(S.W/2,S.H/2),t=B.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;J.setAmbient(o,s,a)}function Y6(e){const t=S.T*.05,n=B.N/2+Math.cos(t)*12,r=B.N/2+Math.sin(t*1.3)*12,[o,i]=P(n,r);S.cam.x+=(o-S.cam.x)*Math.min(1,e*.5),S.cam.y+=(i-S.cam.y)*Math.min(1,e*.5),S.cam.z=S.cam.tz=1.25}let zs="",Tf=!1,Ul=0;const Xl={};let M2=0,b2=0,j6=0,v2=0,Gl={x:-99,y:-99,z:0};const w2={};function K6(){if(S.mode!=="guest"||S.T-v2<.4)return;const e=pr(S.W/2,S.H/2),t=Math.round(S.cam.z*100)/100;Math.hypot(e.x-Gl.x,e.y-Gl.y)<2&&t===Gl.z||(v2=S.T,Gl={x:e.x,y:e.y,z:t},mt.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function Q6(){if(!(Tf||!mt.code)){Tf=!0,Ul||(Ul=performance.now(),Ye("Se cortó la conexión. Reconectando...","#ffb070",3)),yn("net","conexion perdida, reconectando");try{await mt.rejoin(),Ul=0,Ye("¡Reconectado!","#9fe0a0",2.5),J.play("announce",.4),yn("net","reconectado")}catch{performance.now()-Ul>9e4?(Ye("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),mt.lost=!1,mt.code=null):await new Promise(t=>setTimeout(t,2500))}Tf=!1}}function pg(e){const t=S.game;d8(e);{const n=k2(t.t).phase;n!==zs&&(zs&&n==="dusk"&&(Ye("Cae la noche: se ve menos lejos","#a8b8ff",3),J.play("announce",.35)),zs&&n==="dawn"&&(Ye("Amanece","#ffe0a0",2.5),J.play("announce",.3)),zs=n)}if(S.mode==="guest"){if(mt.lost&&Q6(),K6(),S.T-b2>2&&(b2=S.T,mt.send(["ping",Math.round(performance.now())])),S.T-M2>5){M2=S.T;const n=s5();n&&mt.send(["tel",n])}Be("sim/guest"),t.guestTick(e),$e("sim/guest"),mt.hostState&&mt.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(S.mode==="host")for(const[n,r]of mt.pullCommands())r[0]==="cam"?w2[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?Xl[n]=r[1]:r[0]==="tel"?l5(n,r[1]):t.input(n,r);if(Be("sim/update"),!(Er.value&&S.mode==="solo")&&!Zc()&&t.update(e),$e("sim/update"),S.mode==="host"&&(Si-=e,Si<=0)){Be("sim/snap");const n=!!(mt.game&&mt.game.sendSnapTo);Si=Math.max(0,Si+(n?mt.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(s=>s.human),o=_n>=0?Math.round(_n*10)/10:eo?0:-1,i=t.winner?"end":"play",a=r.map(s=>[s.human,s.team,s.heroKey]);if(n){const s=j6++%8===0;for(const l of mt.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},w2[l.id]],full:s});f.I=o,Xl[l.id]!==void 0&&(f.pe=Xl[l.id],delete Xl[l.id]),mt.publishTo(l.id,i,f,s?a:null)}mt.publishMeta(i,a)}else{const s=t.snapshot(3300,r);s.I=o,mt.publish(i,s,a)}$e("sim/snap")}}}function Z6(e){Be("play/sim"),pg(e),$e("play/sim");const t=S.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&A6(o);(S2&&!n.dead||!n.dead&&Math.hypot(n.x-_2,n.y-A2)>8)&&Qu(),S2=!!n.dead,_2=n.x,A2=n.y,J6(e),S.mouse.wx=pr().x,S.mouse.wy=pr().y,S.mouse.rd&&!t.winner&&!S.aim&&S.mouse.inWorld&&(_f-=e,_f<=0&&(_f=.12,xg(!1))),Be("play/fx"),ob(),r8(e),$e("play/fx"),!qc&&t.t>7.5&&(qc=!0,_i("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;J.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),Be("play/vision"),t8(e),$e("play/vision"),Be("play/pick"),S.hoverUnit=!S.mouse.md&&!S.aim&&S.mouse.inWorld?gg():null,S.aimUnit=S.aim&&S.mouse.inWorld?Uh():null,$e("play/pick"),s8(),Vc=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),Vc&&S.T-h2>3&&(h2=S.T,J.play("deny",.5)),(f2-=e)<=0&&(f2=1/15,Be("play/hud"),yu(),$e("play/hud"))}let Rf=0,S2=!1,_2=0,A2=0;function J6(e){const t=S.game.player,n=S.cam,r=S.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(S.camFollow||Zn[" "])){const[o,i]=P(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||Nl();Rf=i&&(r.x<2||r.x>S.W-2||r.y<2||r.y>S.H-2)||Zn.ArrowLeft||Zn.ArrowRight||Zn.ArrowUp||Zn.ArrowDown?Math.min(1,Rf+e/.2):0;const l=2e3*(.35+.65*Rf)*e/n.z;Zn.ArrowLeft&&(n.x-=l),Zn.ArrowRight&&(n.x+=l),Zn.ArrowUp&&(n.y-=l),Zn.ArrowDown&&(n.y+=l),i&&(r.x<2&&(n.x-=l),r.x>S.W-2&&(n.x+=l),r.y<2&&(n.y-=l),r.y>S.H-2&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-S.W/2)/n.z+n.x,i=(r.y-S.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(S.camFollow||Zn[" "])||(n.x=o-(r.x-S.W/2)/n.z,n.y=i-(r.y-S.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*B.N*B.HW,n.x)),n.y=Math.max(0,Math.min(2*B.N*B.HH,n.y))}function T2(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function t8(e){const t=S.game,n=t.player;S.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&G2[o.kind]);for(const o of t.wards||[])o.team===n.team&&S.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=T2(o.x,o.y);let a=0;for(const s of S.visionSrc){const l=L2(s.kind);if(s.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-s.x,o.y-s.y)>2.5||Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||T2(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}S.visible=r}let Vs=null;function yg(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function e8(){Vs===null&&(Vs=[fr.water_mask,fr.water_calm].filter(e=>e&&e.naturalWidth).map(yg).filter(Boolean))}function n8(e,t){Vs===null&&(Vs=[fr.water_mask,fr.water_calm].filter(i=>i&&i.naturalWidth).map(yg).filter(Boolean));const[n,r]=P(e,t);for(const i of Vs){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function r8(e){const t=S.game,n=t.player,r=S.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||Xe(o)||o.dash)continue;const[i,a]=P(o.x,o.y);if(Math.abs(i-r.x)>S.W/r.z||Math.abs(a-r.y)>S.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=n8(o.x,o.y);if(s==="water"){T({type:"ring",x:o.x+g(-.1,.1),y:o.y+g(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)E(o.x,o.y,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&E(o.x,o.y,.05,g(-.3,.3),g(-.3,.3),g(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?J.play("step_"+s,.32,0,80):Math.random()<.5&&fg("step_"+s,o.x,o.y,.12))}}function Fe(e){S.mode==="guest"?(mt.send(e),S.game.predict(e)):S.game.input(S.localId,e)}function gg(){const e=S.game,t=e.player,n=S.cam,r=window.META;let o=null,i=1e9;const a=pr();for(const s of e.units){if(s.dead||Xe(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||S.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=r[s.sprite],[u,f]=P(s.x,s.y),h=(u-n.x)*n.z+S.W/2,c=(f-n.y)*n.z+S.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss;let p=(l?l.ay*(s.kind==="minion"?.72:.85):50)*d,y=(m?34:s.kind==="minion"?11:s.kind==="monster"?16:18)*d;const x=s.status&&s.status.transform&&s.status.transform.mount,b=x&&r[x];if(b){const w=(s.status.transform.mountScale||2)*n.z;p+=(b.saddle||b.ay*.62)*w,y=Math.max(y,b.fw*.3*w)}const M=7;let v=1e9;if(Math.abs(S.mouse.x-h)<y+M&&S.mouse.y<c+5*d+M&&S.mouse.y>c-p-M)v=Math.abs(S.mouse.x-h)/(y+M)+Math.abs(S.mouse.y-(c-p/2))/(p+M);else if(s.kind==="hero"||m){const w=Math.hypot(a.x-s.x,a.y-s.y);w<s.r*(s.scale||1)+.2&&(v=1.5+w)}v>1e8||(s.kind==="hero"&&(v-=.4),v<i&&(i=v,o=s))}return o}function o8(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.units){if(o.dead||Xe(o)||o.kind==="hero"||o.team!==S.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,a]=P(o.x,o.y),s=(i-e.x)*e.z+S.W/2,l=(a-e.y)*e.z+S.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,h=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,c=(f?34:14)*u;if(Math.abs(S.mouse.x-s)<c&&S.mouse.y<l+6*u&&S.mouse.y>l-h){const d=Math.abs(S.mouse.x-s)+Math.abs(S.mouse.y-(l-h/2));d<r&&(r=d,n=o)}}return n}function Dh(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.heroes){if(o.dead||Xe(o))continue;const[i,a]=P(o.x,o.y),s=(i-e.x)*e.z+S.W/2,l=(a-e.y)*e.z+S.H/2;let u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;const h=o.status&&o.status.transform&&o.status.transform.mount,c=h&&t[h];if(c){const d=(o.status.transform.mountScale||2)*e.z;u+=(c.saddle||c.ay*.62)*d,f=Math.max(f,c.fw*.3*d)}if(Math.abs(S.mouse.x-s)<f&&S.mouse.y<l+10*e.z&&S.mouse.y>l-u){const d=Math.abs(S.mouse.x-s)+Math.abs(S.mouse.y-(l-u/2));d<r&&(r=d,n=o)}}return n}function xg(e){const t=pr();if(!e&&Ll)return;const n=e?gg():null;if(e&&(Yo=null),n){Ll=!0,Fe(["a",n.id]),J.play("click",.3),S.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=S.game.player,o=(S.game.wards||[]).find(i=>i.team!==r.team&&S.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){Ll=!0,Fe(["dw",o.id]),J.play("click",.3),S.marker={x:o.x,y:o.y,t:0,atk:!0};return}}Ll=!1,Fe(["m",t.x,t.y]),e&&(S.marker={x:t.x,y:t.y,t:0},J.play("move",.25),S.T-d2>7&&Math.random()<.5&&(d2=S.T,Eh(S.game.player.heroKey,"ok")))}function Mg(e){const t=S.game.player;if(t.ranks&&!t.ranks[e]){Ye(t.points>0&&S.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),J.play("deny",.6);return}const n=dn[t.heroKey].abil[e];if((t.cds[e]||0)>.05&&!(n.type==="copypaste"&&t.status&&t.status.copy)){Ye("En enfriamiento","#bbbbbb",.8),J.play("deny",.5);return}const r=pr();if(Yo=null,X6(n)){Fe(["c",e,r.x,r.y]),S.aim=null;return}if(S.aim&&S.aim.k===e){wg();return}S.aim={k:e},J.play("aim",.3)}function bg(){if(!S.tpAim)return;const e=pr();Fe(["u","tp_scroll",e.x,e.y]),J.play("click",.4),S.tpAim=!1}function vg(){if(!S.wardAim)return;const e=pr();Fe(["u",S.wardAim.id,e.x,e.y]),J.play("click",.4),S.wardAim=null}function Uh(){const e=S.game&&S.game.player;if(!e||!S.aim)return null;const t=dn[e.heroKey].abil[S.aim.k];if(!S.game.unitTarget(t))return null;const n=Dh();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function wg(){if(!S.aim)return;const e=S.game.player,t=dn[e.heroKey].abil[S.aim.k];if(S.game.unitTarget(t)){const r=Uh();if(!r){Ye(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),J.play("deny",.4);return}Fe(["c",S.aim.k,r.x,r.y,r.id]),S.aim=null,S.marker={x:r.x,y:r.y,t:0,atk:r.team!==e.team};return}const n=pr();Fe(["c",S.aim.k,n.x,n.y]),S.aim=null}function jc(e){const t=S.game&&S.game.player;t&&(S.game.canRankUp(t,e)?(Fe(["l",e]),J.play("levelup",.5)):(Ye(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),J.play("deny",.4)))}function Qu(){const e=S.game&&S.game.player;if(!e)return;const[t,n]=P(e.x,e.y);S.cam.x=t,S.cam.y=n-30}function Kc(){S.cam.tz=nh,S.cam.zoomMsgT=1.2}function R2(){if(Ke.value!=="play"){Ke.value==="menu"&&(Er.value=!Er.value);return}S.aim||S.wardAim||S.tpAim||Fa.value?(S.aim=null,S.wardAim=null,S.tpAim=!1,Fa.value=!1):Er.value=!Er.value}function C2(){if(S.aim&&(S.aim=null),S.wardAim){S.wardAim=null;return}if(S.tpAim){S.tpAim=!1;return}S.amove=!1,S.mouse.rd=!0,xg(!0)}function i8(){const e=Fh();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),Ng(e),Kg(R2),window.addEventListener("mousemove",t=>{Nl()||(S.mouse.md&&(S.cam.x-=(t.clientX-S.mouse.x)/S.cam.z,S.cam.y-=(t.clientY-S.mouse.y)/S.cam.z),S.mouse.x=t.clientX,S.mouse.y=t.clientY,S.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{Ke.value==="play"&&(S.cam.tz=Math.max(.75,Math.min(3,S.cam.tz*(t.deltaY>0?.9:1.1))),S.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&Kc()}),e.addEventListener("mousedown",t=>{J.init(),J.startMusic(),window.VOICE&&window.VOICE.init(),Nl()||(S.mouse.x=t.clientX,S.mouse.y=t.clientY,Ke.value==="play"&&!Zc()&&Bg(t.clientX,t.clientY));const n=S.game;if(!(Ke.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){S.mouse.md=!0,t.preventDefault();return}if(!Er.value){if(t.button===0&&t.altKey){zr.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(S.wardAim){vg();return}if(S.tpAim){bg();return}if(S.aim){wg();return}if(S.amove){S.amove=!1;const o=pr();Fe(["am",o.x,o.y]),S.marker={x:o.x,y:o.y,t:0,atk:!0},J.play("click",.3);return}const r=Dh()||o8();Yo=r&&r!==n.player?r.id:null}t.button===2&&C2()}}}),window.addEventListener("mousedown",t=>{if(t.button!==2||Ke.value!=="play"||!S.game||!S.game.player||S.game.winner||Er.value)return;const n=t.target;!n||n===e||n.closest&&n.closest(".minimap, .shop, .chat-input, input, textarea")||(t.isTrusted&&Nl()||(S.mouse.x=t.clientX,S.mouse.y=t.clientY),t.preventDefault(),t.stopPropagation(),C2())},!0),window.addEventListener("mouseup",t=>{t.button===2&&(S.mouse.rd=!1),t.button===1&&(S.mouse.md=!1),t.button===0&&(S.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;J.init();const r=S.game,o=t.key.toUpperCase();if(Ke.value==="play"&&r&&r.player&&t.key==="Enter"){U2.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){t.shiftKey?J.toggleMusic():J.toggleMute();return}if(t.key==="F3"){H6(),t.preventDefault();return}if(t.key==="F4"&&Ke.value!=="play"){Rd(),t.preventDefault();return}if(t.key==="Escape"&&Ke.value==="menu"){Er.value=!Er.value;return}if(Ke.value!=="play"||!r||!r.player)return;if(Zc()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&S.mode==="solo"&&(Pg(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){R2();return}if(t.key==="Tab"){t.repeat||(Os.value=!Os.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){jc(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?(da=!da,J.play("aim",.4)):(Ye("No tienes puntos de habilidad","#bbbbbb",1),J.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&da){da=!1,jc(o);return}if("QWER".includes(o)&&o.length===1){S.wardAim=null,Mg(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){zr.useItem(+t.key-1),t.preventDefault();return}const a=!t.ctrlKey&&!t.altKey&&!t.metaKey?Qg(Zg(t)):null;if(a){a.startsWith("item")?zr.useItem(+a.slice(4)):a==="recall"?zr.recall():zr.useCons(a),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){Qu(),t.preventDefault();return}if(t.key==="F2"){zr.courier(),t.preventDefault();return}if(t.key==="F4"){Rd(),Ye('Marcado en el registro: "acá se trabó"',"#c8e8ff",1.5),t.preventDefault();return}if(t.key.startsWith("Arrow")){Zn[t.key]=!0,t.preventDefault();return}if(o==="P"){Fa.value=!Fa.value,J.play("click",.4);return}if(o==="K"){J.setStyle&&(zr.setSoundStyle(J.style()==="epic"?"pixel":"epic"),Ye("Sonido: "+(J.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){S.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){zr.spell(o);return}o==="S"&&Fe(["s"]),o==="Y"&&(S.camFollow=!S.camFollow),t.key==="0"&&Kc(),t.key===" "&&(Zn[" "]=!0,Qu(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete Zn[t.key]}),window.addEventListener("blur",()=>{Os.value=!1,Zn={},S.mouse.md=!1,S.mouse.rd=!1,S.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{S.mouse.inWorld=!1})}const Vr={};function a8(){const e=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,h)=>[...f].forEach((c,d)=>{c!==" "&&(l.fillStyle=c==="X"?"#0a0610":c==="L"?o:c==="M"?r:i,l.fillRect(d*2,h*2,2,2))})),a){for(let c=0;c<7;c++)l.fillStyle="#0a0610",l.fillRect(18+c*2-1,26-c*2-1,4,4);for(let c=0;c<7;c++)l.fillStyle=c<5?"#e8eef8":"#ffd24a",l.fillRect(18+c*2,26-c*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};Vr.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),Vr.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),Vr.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);Vr.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=Vr.normal}let P2="";function s8(){const e=S.game&&S.game.player,t=S.hoverUnit,n=S.aim||S.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==P2&&(P2=n,Fh().style.cursor=Vr[n],document.documentElement.style.cursor=Vr.normal,B2(Vr[n]))}function Sg(){const e=S.mode==="solo"?"local":mt.myPeer||"host";return et&&et.h&&et.h[e]}function du(e){const t=e?[{id:mt.myPeer||"host",team:So},...mt.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of t)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),et={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:Pr||mr[0],locked:!1,prep:-1,online:!!e},e&&(S.mode="host"),Ke.value="pick",J.setMode("menu"),J.play("announce",.6),Oi()}function Qc(e,t){if(!et||!e)return;const n=t===void 0;if(n&&S.mode==="guest"){et.locked||(mt.send(["lock",e]),Pr=e,et.pending=e,J.play("levelup",.7));return}const r=n?S.mode==="solo"?"local":mt.myPeer||"host":t,o=et.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>et.blue.includes(l)||et.red.includes(l);if(s(e))if(n){J.play("deny",.6);return}else{const l=mr.filter(u=>!s(u)&&!dn[u].noBots);e=l[Math.random()*l.length|0]}et[i][a]=e,o[2]=1,n&&(et.locked=!0,Pr=e,et.view=e,J.play("levelup",.7),Eh(e,"select"))}function I2(e){const t=et[e],n=[...et.blue,...et.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&dn[s].role===a));let o=mr.filter(a=>!n.includes(a)&&!dn[a].noBots);const i=o.filter(a=>r.includes(dn[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||mr[Math.random()*mr.length|0]}function _g(e){if(S.mode==="guest")return l8();if(et.online){for(const[n,r]of mt.pullCommands())r[0]==="lock"&&Qc(r[1],n);(u2-=e)<=0&&(u2=.25,mt.publishDraft({t:Math.round(et.t*10)/10,p:Math.round(et.prep*10)/10,b:et.blue,r:et.red,h:et.h}))}if(et.prep<-1e8)return;if(et.prep>=0){if(et.prep-=e,et.prep<=0){et.prep=-1e9;const n=et.online;Xh(()=>n?u8():Tg())}return}if(!et.online){if(et.locked){et.bt=(et.bt||0)+e;for(const n of et.order)!n.done&&et.bt>=(jo?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,et[n.team][n.slot]=I2(n.team),J.play("click",.35))}et.locked&&et.order.every(n=>n.done)&&(et.prep=jo?1.5:3,J.play("announce",.7));return}if(Object.values(et.h).every(n=>n[2])){et.bt=(et.bt||0)+e;for(const n of et.order)!n.done&&et.bt>=.3+n.q*.28&&(n.done=!0,et[n.team][n.slot]=I2(n.team),J.play("click",.35));et.order.every(n=>n.done)&&(et.prep=4,J.play("announce",.7))}}function l8(){const e=mt.hostState;if(e&&e.st==="play"&&e.S){et=null,Fi.value=null,Xh(Rg);return}const t=e&&e.D;if(!t)return;const n=et.blue.join()+et.red.join();et.t=t.t,et.prep=t.p,et.blue=t.b,et.red=t.r,et.h=t.h,n!==et.blue.join()+et.red.join()&&J.play("click",.35);const r=Sg();r&&r[2]?(et.locked=!0,Pr=et[r[0]][r[1]],et.view=Pr||et.view):et.pending&&performance.now()-(et.sentAt||0)>1e3&&(et.sentAt=performance.now(),mt.send(["lock",et.pending]))}function Oi(){if(!et){Fi.value=null;return}const e=Sg(),t=S.mode==="solo"?"local":mt.myPeer||"host";Fi.value={online:!!et.online,t:et.t,prep:et.prep,blue:[...et.blue],red:[...et.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(et.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!et.locked,pending:et.pending||null,view:et.view}}function Ag(e){mt.role==="guest"&&mt.hostState&&mt.hostState.st==="pick"&&mt.hostState.D&&(S.mode="guest",S.localId=mt.myPeer,et={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:Pr||mr[0],locked:!1,prep:-1,online:!0},Ke.value="pick",J.play("announce",.6)),mt.role==="guest"&&mt.hostState&&mt.hostState.st==="play"&&mt.hostState.S&&!mu&&Xh(Rg),mt.role==="host"&&(Si-=e,Si<=0&&(Si=1.5,mt.setChoice(Pr,So))),(z2-=e)<=0&&(z2=.3,Ys())}let z2=0;function Ys(){const e=[];if(mt.role==="host"){e.push({name:Xt("Tú (anfitrión)"),team:So,me:!0});for(const t of mt.guests())e.push({name:Xt("Invitado"),team:t.team,me:!1})}else mt.role==="guest"&&(e.push({name:Xt("Tú"),team:So,me:!0}),mt.hostState&&e.push({name:Xt("Anfitrión"),team:mt.hostState.team,me:!1}));Fn.value={...Fn.value,role:mt.role,code:mt.code,myTeam:So,players:e,hostFound:!!mt.hostState}}let mu=!1;function Xh(e){mu||(mu=!0,Wh.value=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>{try{e()}finally{let t=0,n=performance.now();const r=n,o=i=>{t=i-n<26?t+1:0,n=i,t<8&&i-r<2500?requestAnimationFrame(o):(Wh.value=!1,mu=!1)};requestAnimationFrame(o)}})))}function Tg(){S.mode="solo",S.localId="local";const e=et?{blue:et.blue.slice(1).filter(Boolean),red:et.red.filter(Boolean)}:null;S.game=new qe.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:Pr}],localId:"local",picks:e,difficulty:Nn.value.difficulty,aram:jo}),jo&&(jo=!1,S.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),et=null,Fi.value=null,Gh(),S.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function u8(){S.mode="host",S.localId=mt.myPeer||"host";const e=[],t={blue:[],red:[]};if(et){for(const n in et.h){const[r,o]=et.h[n];e.push({id:n,team:r,hero:et[r][o]||mr[0]})}for(const n of["blue","red"])et[n].forEach((r,o)=>{r&&!Object.values(et.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}et=null,Fi.value=null,S.game=new qe.Game(window.MAP,{humans:e,localId:S.localId,picks:t,difficulty:Nn.value.difficulty}),mt.lastSeq={};for(const n of mt.guests())mt.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of mt.guests()){const r=S.game.slots[n.id];r&&(r.cid=n.cid)}mt.onGuests=(n,r)=>{const o=S.game;if(o){for(const i of r.left||[]){const a=o.slots[i.peer];a&&!a.bot&&(a.bot=!0,a.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||f8(o,i)}},Gh(),S.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function f8(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(a=>a.bot&&!a.isPlayer&&!a.away&&(!i||a.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,mt.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),yn("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function Rg(){S.mode="guest",S.localId=mt.myPeer,S.game=new qe.Game(window.MAP,{humans:[],localId:S.localId}),S.game.units=[],S.game.heroes=[],S.game.player=null,mt.onSnapshot=e=>{S.game&&S.mode==="guest"&&(r5(),e.pe&&o5(performance.now()-e.pe),mt.myPeer&&(S.localId=mt.myPeer),S.game.applySnapshot(e,S.localId))},mt.hostState&&mt.hostState.S&&S.game.applySnapshot(mt.hostState.S,S.localId),Gh()}const ho={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let pu=0,_n=-1,Oa=[],c8=0,eo=!1,Zu=0;function Zc(){return _n>=0}function Cg(){const e=S.game,t=e.player;g5(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=dn[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},r=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){eo=!0;return}eo=!1;const a=Zu;Zu=0,rh.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++c8,off:a,canSkip:S.mode==="solo"},_n=a,pu=0,Oa=[[.15,()=>_i("blue_team")],...o.map((s,l)=>[ho.blue+l*ho.step+.05,()=>J.play("reveal",.8)]),[ho.red-.35,()=>_i("red_team")],...i.map((s,l)=>[ho.red+l*ho.step+.05,()=>J.play("reveal",.8)]),[ho.vs-.02,()=>{J.play("vsslam",1),_i("versus")}],[ho.go,()=>{J.play("warhorn",.9),_i("battle"),J.setMode("battle")}]].filter(s=>s[0]>=a-.05),J.setMode("menu")}function h8(){const e=mt.hostState&&mt.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?_n<0?(Zu=t,eo=!0):Math.abs(_n-t)>.6&&(_n=t):(_n>=0||eo)&&(eo=!1,_n>=0&&y0())}function d8(e){if(S.mode==="guest"&&h8(),eo&&S.game&&Cg(),_n<0)return;const t=performance.now()/1e3,n=pu?t-pu:0;for(pu=t,_n+=n>2?.05:n||e;Oa.length&&Oa[0][0]<=_n;)Oa.shift()[1]();_n>=ho.end&&y0()}function y0(){eo=!1,!(_n<0)&&(_n=-1,Oa=[],rh.value=null,Qu(),J.setMode("battle"))}function Pg(){_n<0||S.mode!=="solo"||(_n<ho.go&&(J.play("warhorn",.7),_i("battle")),y0())}function Gh(){B2(Vr.normal);try{const e=S.game,t=e&&e.player;Z3({build:Lh,mode:S.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:S.gpuName,softGpu:S.softGpu,difficulty:Nn.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),yn("game","empieza la partida ("+S.mode+")")}catch{}if(ap(),ug(),Ke.value="play",Ea.value=[],J.setMode("battle"),qc=!1,S.mode==="guest"?eo=!1:Cg(),Yo=null,S.aim=null,S.amove=!1,da=!1,S.cam.z=S.cam.tz=nh,S.game.player){const[e,t]=P(S.game.player.x,S.game.player.y);S.cam.x=e,S.cam.y=t-30}}async function O2(){qg(),jo=!1,zs="",Jc=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}_n=-1,Oa=[],eo=!1,Zu=0,rh.value=null,Er.value=!1,Fa.value=!1,Os.value=!1,S.aim=null,et=null,Fi.value=null,S.mode!=="solo"&&await mt.leave(),S.game=null,S.mode="solo",ug(),ap(),N2.value=null,X2.value=null,Ea.value=[],Ke.value="menu",J.setMode("menu"),Fh().style.cursor=Vr.normal}function m8(e){const t=dn[e.heroKey],n=(e.items||[]).map(o=>qe.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:Xt("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:Xt("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:Xt("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:Xt("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:Xt("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:Xt("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:Xt("Alcance"),value:String(t.range)}]}const Ig=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function zg(e){return(e.items||[]).filter(t=>!qe.ITEM[t].line)}function F2(e){return e.slots?e.slots.slice(0,6):zg(e).concat([null,null,null,null,null,null]).slice(0,6)}function Cf(e){const t=S.game,n=dn[e.heroKey],r=t.player,o=e===r,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(S.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((p,y)=>{const x=qe.ITEM[p],b=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:S.mode==="guest"?(e.itemCdLeft||[])[y]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:Xt(x.name),desc:Xt(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:b}}),s=e.slots||zg(e).concat([null,null,null,null,null,null]).slice(0,6),l=a.filter(p=>!p.line),u=new Set,f=s.map((p,y)=>{if(!p)return null;const x=l.findIndex((b,M)=>b.id===p&&!u.has(M));return x<0?null:(u.add(x),{...l[x],slot:y})}).filter(Boolean),h=a.filter(p=>p.line),c=Ig.map(([p,,y])=>{const x=qe.ITEM[p];return{id:p,key:Vg(Yg(p)),count:e[y]||0,max:x.max,name:Xt(x.name),desc:Xt(x.desc)}}),d=e.team!==r.team,m=o||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:Xt(n.title),role:Xt(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:cg(e.heroKey),xpFrac:S.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:qe.RECALL_T,stash:(e.stash||[]).slice(),courier:o?p8(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?Xt("Pergamino de teleporte"):Xt(n.abil[p.key]?n.abil[p.key].name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const y=n.abil[p],x=e.ranks?e.ranks[p]:1;return{key:p,name:Xt(y.name),desc:Xt(y.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:y.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,p)),dmg:y.dmg?Math.round(y.dmg*t.abilMul(e,p)):null,type:y.type,fx:y.fx}}),items:f,gearItems:h,cons:c,gear:S.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:Xt("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:Xt("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:m8(e),human:!!e.human,isMe:o,status:i}}function p8(e){const t=S.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id)),n=S.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-S.game.t)):0;return t?{state:t.state||"home",n:S.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function y8(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:Xt(r),value:o});return{id:e.id,heroKey:e.sprite,name:Xt(t),title:Xt(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let Jc=!1;function yu(){const e=!!(S.game&&S.game.player&&S.game.player.dead);if(e!==Jc){Jc=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=S.game,n=t.player;if(!n)return;const r=Yo?lt(Yo):null;r&&(r.dead&&r.kind!=="hero"||Xe(r))&&(Yo=null);const o=t.msgs.filter(a=>!a.to||a.to===S.localId).slice(-3).map(a=>({id:a.id,text:Xt(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{Yc=a.human;const s=Xt(a.txt);return Yc=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:dn[a.hero]?dn[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});N2.value={me:Cf(n),inspected:r?r.kind==="hero"?Cf(r):y8(r):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(Cf),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?dn[a.killerKey].name:Xt(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:Vc,inShop:t.inShop(n),levelMode:da,aim:S.aim?S.aim.k:null,amove:S.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(S.cam.tz/nh*100),zoomMsg:S.cam.zoomMsgT,camFollow:S.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:dn[a.heroKey].name,team:a.team,level:a.level,gear:S.mode==="guest"?a.gear||0:t.gearCode(a),kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||S.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:S.mode,netLost:!!mt.lost,deathRecap:n.dead?g8(n):th=null}}let th=null,E2=null;function g8(e){return th!==e&&(th=e,E2=x8(e)),E2}function x8(e){const t=(e.dmgLog||[]).filter(r=>S.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&dn[r.h]?dn[r.h].name:Xt(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function M8(){const e=S.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=B,i=2*n*r,a=2*n*o,s=(c,d)=>{const[m,p]=P(c,d);return{x:m/i,y:p/a}},l=[];for(const c of e.units){if(c.dead||Xe(c))continue;const d=s(c.x,c.y);l.push({x:d.x,y:d.y,team:c.team,kind:c.kind,heroKey:c.heroKey,me:c===t,human:!!c.human})}const u=S.cam,f=S.W/u.z,h=S.H/u.z;X2.value={units:l,camps:e.camps.filter(c=>c.alive).map(c=>({...s(c.x,c.y),boss:!!c.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-h/2)/a,x1:(u.x+f/2)/i,y1:(u.y+h/2)/a},vision:S.visionSrc.map(c=>({...s(c.x,c.y),r:G2[c.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(c=>c.team===t.team&&e.t-c.t<3).map(c=>({...s(c.x,c.y),t:e.t-c.t,kind:c.kind})),wards:(e.wards||[]).filter(c=>e.wardSeenBy(c,t.team)).map(c=>({...s(c.x,c.y),kind:c.kind,mine:c.team===t.team}))}}const zr={skipIntro(){Pg()},shopDenied(e){Ye(e,"#ffb070",2),J.play("deny",.5)},playVsBots(){J.init(),J.startMusic(),du(!1)},playAram(){J.init(),J.startMusic(),jo=!0,du(!1)},async hostOnline(){Fn.value={...Fn.value,msg:Xt("Creando sala...")};try{await mt.host(Pr,So),Ke.value="lobby",Fn.value={...Fn.value,msg:""},Ys()}catch{Fn.value={...Fn.value,msg:Xt("No se pudo crear la sala")}}},async joinOnline(e){Fn.value={...Fn.value,msg:Xt("Entrando...")};try{if(await mt.join(e,Pr,So),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}Ke.value="lobby",Fn.value={...Fn.value,msg:""},Ys()}catch{Fn.value={...Fn.value,msg:Xt("No se pudo entrar")}}},setLobbyTeam(e){So=e,mt.setChoice(Pr,So),Ys()},startOnlinePick(){du(!0)},async leaveLobby(){await mt.leave(),Ke.value="menu"},viewHero(e){et&&!et.locked&&(et.view=e,J.play("aim",.3),Oi())},lockHero(e){Qc(e),Oi()},randomHero(){const e=mr.filter(t=>!et.blue.includes(t)&&!et.red.includes(t));Qc(e[Math.random()*e.length|0]),Oi()},backToMenu(){jo=!1,et&&et.online?O2():(et=null,Fi.value=null,Ke.value="menu")},buy(e){const t=S.game&&S.game.player;if(!t)return;const n=S.game.inShop(t),r=window.SIM.ITEM[e];if(S.mode!=="guest"&&!(n?S.game.canBuy(t,e):S.game.canBuyRemote(t,e))){Ye(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<r.cost?"Te falta oro":r.consumable?"Ya llevas el máximo de ese":r.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),J.play("deny",.5);return}Fe(["i",e]),J.play("buy",.6),n||Ye("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=S.game&&S.game.player;if(!e)return;const t=S.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id));if(!t){Ye(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),J.play("deny",.4);return}const[n,r]=P(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1,Fe(["cr","go"]),J.play("click",.4)},sell(e){const t=S.game&&S.game.player;if(!t||!t.items)return;const n=typeof e=="number"?F2(t)[e]:e;if(n){if(!S.game.inShop(t)){Ye("Solo puedes vender en tu base","#ffb070",1.4),J.play("deny",.4);return}Fe(["v",n]),J.play("buy",.4)}},useCons(e){const t=S.game&&S.game.player;if(!t||t.dead)return;const n=Ig.find(r=>r[0]===e);if(n){if(!t[n[2]]){Ye("No tienes: "+qe.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),J.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){Fe(["u",e]),J.play("heal",.5);return}if(e==="tp_scroll"){if(S.aim=null,S.wardAim=null,S.tpAim){bg();return}S.tpAim=!0,J.play("aim",.3),Ye("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(S.aim=null,S.wardAim&&S.wardAim.id===e){vg();return}S.wardAim={id:e},J.play("aim",.3)}},useItem(e){const t=S.game&&S.game.player,n=t&&F2(t)[e];if(!t||e<0||!n){J.play("deny",.4);return}const r=qe.ITEM[n];if(!(r&&r.active)){Ye("Este objeto no se usa: es pasivo","#bbbbbb",1.2),J.play("deny",.4);return}if((S.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-S.game.t))>.05){Ye("En enfriamiento","#bbbbbb",.8),J.play("deny",.4);return}Fe(["u",n,S.mouse.wx,S.mouse.wy]),J.play("blink",.5)},moveItem(e,t){const n=S.game&&S.game.player;if(!(!n||e===t)){if(S.mode==="guest"&&n.slots){const r=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=r}Fe(["mv",e,t]),J.play("click",.35),yu()}},rankUp(e){jc(e)},castKey(e){S.game&&S.game.player&&Mg(e)},spell(e){const t=S.game&&S.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){Ye(Xt(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),J.play("deny",.5);return}const r=pr();Fe(["sp",e,r.x,r.y]),J.play(e==="D"?"blink":"wind",.6)},recall(){const e=S.game&&S.game.player;e&&Fe(e.recall?["bc"]:["b"])},inspect(e){Yo=e&&S.game&&S.game.player&&e===S.game.player.id?null:e,yu()},centerOn(e){const t=e==null?S.game&&S.game.player:lt(e);if(!t)return;const[n,r]=P(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:a}=B,s=e*(2*r*o)-a,l=t*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&S.tpAim){Fe(["u","tp_scroll",u,f]),J.play("click",.4),S.tpAim=!1;return}n==="right"?(Fe(["m",u,f]),S.marker={x:u,y:f,t:0}):(S.cam.x=e*2*r*o,S.cam.y=t*2*r*i,S.mouse.mmDrag=!0)}},minimapDrag(e,t){const{N:n,HW:r,HH:o}=B;S.cam.x=Math.max(0,Math.min(1,e))*2*n*r,S.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!S.game||!S.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=B,u=t*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=pr();r=i.x,o=i.y}Fe(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&S.game&&Fe(["t",e,n]),U2.value=null},bannerDone(e){Ea.value=Ea.value.filter(t=>t.id!==e)},quitMatch(){O2()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};J.setVolume&&J.setVolume(n[e],t),Nn.value={...Nn.value,[e]:t}},setSoundStyle(e){J.setStyle&&J.setStyle(e),Nn.value={...Nn.value,soundStyle:e}},setShadows(e){S.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}Nn.value={...Nn.value,shadows:e}},setCamFollow(e){S.camFollow=e},resetZoom(){Kc()},downloadLog(){yn("user","descarga el registro"),m5()},openOptions(){Er.value=!0},setCursorLock(e){Hg(e),yu()},setLang(e){eh.value=e,Is.clear();try{localStorage.setItem("moba_lang",e)}catch{}hg()},setDifficulty(e){Nn.value={...Nn.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){J.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;J.play(n[0],n[1])},t:e=>Xt(e)};function b8(){const e=new URLSearchParams(location.search);window.__g=()=>({S,draft:et,st:$g,act:zr,net:mt,cmd:Fe,pickHeroAt:Dh,aimHero:Uh,w2s:P});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const a=async()=>{await zr.joinOnline(o),Ke.value==="menu"&&++i<5&&setTimeout(a,2500)},s=l=>{D2.value?a():l>0?setTimeout(()=>s(l-1),300):Fn.value={...Fn.value,msg:Xt("No se pudo entrar")}};s(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){du(!1),e.get("view")&&(et.view=e.get("view")),Oi();return}if(n==="menu")return;Pr=n,Tg(),e.get("intro")||y0(),e.get("allbots")&&(S.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)S.game.update(1/30),S.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(S.camFollow=!0),e.get("shop")&&(Fa.value=!0),e.get("tab")&&(Os.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[a,s]=P(o,i);S.cam.x=a,S.cam.y=s}e.get("mx")&&(S.mouse.x=+e.get("mx"),S.mouse.y=+e.get("my"))}const T8=Object.freeze(Object.defineProperty({__proto__:null,BUILD:Lh,startClient:B6},Symbol.toStringTag,{value:"Module"}));export{z3 as $,Cm as A,k0 as B,xe as C,Qo as D,Ve as E,ae as F,Fm as G,S3 as H,$n as I,T3 as J,Y3 as K,j3 as L,De as M,sd as N,R0 as O,Yr as P,ud as Q,bu as R,e0 as S,Ot as T,kf as U,$x as V,mn as W,em as X,ch as Y,Pm as Z,K3 as _,hl as a,Bt as a0,Yn as a1,uh as a2,Ix as a3,A8 as a4,Ux as a5,_8 as a6,yi as a7,Da as a8,sh as a9,Bm as aa,fx as ab,hx as ac,T8 as ad,ni as b,pa as c,kn as d,ei as e,re as f,o3 as g,Jt as h,t0 as i,Sm as j,fh as k,Am as l,lh as m,Vh as n,jn as o,cx as p,Mu as q,Ax as r,J2 as s,Ko as t,Wn as u,ar as v,_o as w,id as x,Je as y,d3 as z};
