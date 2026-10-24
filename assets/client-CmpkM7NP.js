const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-1fAlsbY3.js","./webworkerAll-CbagoQiG.js","./CanvasPool-DM6vAazw.js","./colorToUniform-Ds2BC3CH.js","./_commonjsHelpers-CqkleIqs.js","./App-BxljHjns.js","./index-CAPMlyl9.js","./index-DRlp828y.css","./WebGPURenderer-C-6Psdze.js","./SharedSystems-CWekXaOo.js","./WebGLRenderer-KWClrzU3.js"])))=>i.map(i=>d[i]);
import{S,u as ht,q as He,w as C,r as W,M as $,v as g,x as Yd,T as bl,y as Kd,z as Ep,l as zf,p as Pn,b as Lp,A as kp,B as Up,C as Dp,D as Xp,E as Gp,j as Ke,n as jd,h as Bp,s as Np,F as $p,G as m0,H as Hp,g as Ir,t as Va,c as Sn,I as Wp,f as na,o as qp,Z as Of,J as Vp,i as ra,K as Qd,L as Qn,d as ci,m as Zd,V as Jd,e as t1,N as Yp,O as Ff,P as e1,Q as Kp,R as jp,a as Qp,U as Zp,W as Jp,X as ty}from"./App-BxljHjns.js";import{_ as vl}from"./index-CAPMlyl9.js";import{g as n1}from"./_commonjsHelpers-CqkleIqs.js";const j={},Xe={},De={};var Ue=(e=>(e.Application="application",e.WebGLPipes="webgl-pipes",e.WebGLPipesAdaptor="webgl-pipes-adaptor",e.WebGLSystem="webgl-system",e.WebGPUPipes="webgpu-pipes",e.WebGPUPipesAdaptor="webgpu-pipes-adaptor",e.WebGPUSystem="webgpu-system",e.CanvasSystem="canvas-system",e.CanvasPipesAdaptor="canvas-pipes-adaptor",e.CanvasPipes="canvas-pipes",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e.MaskEffect="mask-effect",e.BlendMode="blend-mode",e.TextureSource="texture-source",e.Environment="environment",e.ShapeBuilder="shape-builder",e.Batcher="batcher",e))(Ue||{});const p0=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},xs=(e,t)=>p0(e).priority??t,Lo={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(p0).forEach(t=>{t.type.forEach(n=>this._removeHandlers[n]?.(t))}),this},add(...e){return e.map(p0).forEach(t=>{t.type.forEach(n=>{const r=this._addHandlers,o=this._queue;r[n]?r[n]?.(t):(o[n]=o[n]||[],o[n]?.push(t))})}),this},handle(e,t,n){const r=this._addHandlers,o=this._removeHandlers;if(r[e]||o[e])throw new Error(`Extension type ${e} already has a handler`);r[e]=t,o[e]=n;const i=this._queue;return i[e]&&(i[e]?.forEach(a=>t(a)),delete i[e]),this},handleByMap(e,t){return this.handle(e,n=>{n.name&&(t[n.name]=n.ref)},n=>{n.name&&delete t[n.name]})},handleByNamedList(e,t,n=-1){return this.handle(e,r=>{t.findIndex(i=>i.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((i,a)=>xs(a.value,n)-xs(i.value,n)))},r=>{const o=t.findIndex(i=>i.name===r.name);o!==-1&&t.splice(o,1)})},handleByList(e,t,n=-1){return this.handle(e,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((o,i)=>xs(i,n)-xs(o,n)))},r=>{const o=t.indexOf(r.ref);o!==-1&&t.splice(o,1)})}},ey={extension:{type:Ue.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await vl(()=>import("./browserAll-1fAlsbY3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)}},ny={extension:{type:Ue.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await vl(()=>import("./webworkerAll-CbagoQiG.js"),__vite__mapDeps([1,2,3,4,5,6,7]),import.meta.url)}};class rn{constructor(t,n,r){this._x=n||0,this._y=r||0,this._observer=t}clone(t){return new rn(t??this._observer,this._x,this._y)}set(t=0,n=t){return(this._x!==t||this._y!==n)&&(this._x=t,this._y=n,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}var au={exports:{}},mc;function ry(){return mc||(mc=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(l,u,f){this.fn=l,this.context=u,this.once=f||!1}function i(l,u,f,h,c){if(typeof f!="function")throw new TypeError("The listener must be a function");var d=new o(f,h||l,c),m=n?n+u:u;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function a(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var u=[],f,h;if(this._eventsCount===0)return u;for(h in f=this._events)t.call(f,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(f)):u},s.prototype.listeners=function(u){var f=n?n+u:u,h=this._events[f];if(!h)return[];if(h.fn)return[h.fn];for(var c=0,d=h.length,m=new Array(d);c<d;c++)m[c]=h[c].fn;return m},s.prototype.listenerCount=function(u){var f=n?n+u:u,h=this._events[f];return h?h.fn?1:h.length:0},s.prototype.emit=function(u,f,h,c,d,m){var p=n?n+u:u;if(!this._events[p])return!1;var y=this._events[p],x=arguments.length,b,M;if(y.fn){switch(y.once&&this.removeListener(u,y.fn,void 0,!0),x){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,f),!0;case 3:return y.fn.call(y.context,f,h),!0;case 4:return y.fn.call(y.context,f,h,c),!0;case 5:return y.fn.call(y.context,f,h,c,d),!0;case 6:return y.fn.call(y.context,f,h,c,d,m),!0}for(M=1,b=new Array(x-1);M<x;M++)b[M-1]=arguments[M];y.fn.apply(y.context,b)}else{var v=y.length,w;for(M=0;M<v;M++)switch(y[M].once&&this.removeListener(u,y[M].fn,void 0,!0),x){case 1:y[M].fn.call(y[M].context);break;case 2:y[M].fn.call(y[M].context,f);break;case 3:y[M].fn.call(y[M].context,f,h);break;case 4:y[M].fn.call(y[M].context,f,h,c);break;default:if(!b)for(w=1,b=new Array(x-1);w<x;w++)b[w-1]=arguments[w];y[M].fn.apply(y[M].context,b)}}return!0},s.prototype.on=function(u,f,h){return i(this,u,f,h,!1)},s.prototype.once=function(u,f,h){return i(this,u,f,h,!0)},s.prototype.removeListener=function(u,f,h,c){var d=n?n+u:u;if(!this._events[d])return this;if(!f)return a(this,d),this;var m=this._events[d];if(m.fn)m.fn===f&&(!c||m.once)&&(!h||m.context===h)&&a(this,d);else{for(var p=0,y=[],x=m.length;p<x;p++)(m[p].fn!==f||c&&!m[p].once||h&&m[p].context!==h)&&y.push(m[p]);y.length?this._events[d]=y.length===1?y[0]:y:a(this,d)}return this},s.prototype.removeAllListeners=function(u){var f;return u?(f=n?n+u:u,this._events[f]&&a(this,f)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(au)),au.exports}var oy=ry();const ko=n1(oy),iy=Math.PI*2,ay=180/Math.PI,oa=Math.PI/180;class zr{constructor(t=0,n=0){this.x=0,this.y=0,this.x=t,this.y=n}clone(){return new zr(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,n=t){return this.x=t,this.y=n,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return su.x=0,su.y=0,su}}const su=new zr;class ze{constructor(t=1,n=0,r=0,o=1,i=0,a=0){this.array=null,this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,n,r,o,i,a){return this.a=t,this.b=n,this.c=r,this.d=o,this.tx=i,this.ty=a,this}toArray(t,n){this.array||(this.array=new Float32Array(9));const r=n||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,n){n=n||new zr;const r=t.x,o=t.y;return n.x=this.a*r+this.c*o+this.tx,n.y=this.b*r+this.d*o+this.ty,n}applyInverse(t,n){n=n||new zr;const r=this.a,o=this.b,i=this.c,a=this.d,s=this.tx,l=this.ty,u=1/(r*a+i*-o),f=t.x,h=t.y;return n.x=a*u*f+-i*u*h+(l*i-s*a)*u,n.y=r*u*h+-o*u*f+(-l*r+s*o)*u,n}translate(t,n){return this.tx+=t,this.ty+=n,this}scale(t,n){return this.a*=t,this.d*=n,this.c*=t,this.b*=n,this.tx*=t,this.ty*=n,this}rotate(t){const n=Math.cos(t),r=Math.sin(t),o=this.a,i=this.c,a=this.tx;return this.a=o*n-this.b*r,this.b=o*r+this.b*n,this.c=i*n-this.d*r,this.d=i*r+this.d*n,this.tx=a*n-this.ty*r,this.ty=a*r+this.ty*n,this}append(t){const n=this.a,r=this.b,o=this.c,i=this.d;return this.a=t.a*n+t.b*o,this.b=t.a*r+t.b*i,this.c=t.c*n+t.d*o,this.d=t.c*r+t.d*i,this.tx=t.tx*n+t.ty*o+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this}appendFrom(t,n){const r=t.a,o=t.b,i=t.c,a=t.d,s=t.tx,l=t.ty,u=n.a,f=n.b,h=n.c,c=n.d;return this.a=r*u+o*h,this.b=r*f+o*c,this.c=i*u+a*h,this.d=i*f+a*c,this.tx=s*u+l*h+n.tx,this.ty=s*f+l*c+n.ty,this}setTransform(t,n,r,o,i,a,s,l,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-l)*a,this.d=Math.cos(s-l)*a,this.tx=t-(r*this.a+o*this.c),this.ty=n-(r*this.b+o*this.d),this}prepend(t){const n=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,o=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=o*t.a+this.d*t.c,this.d=o*t.b+this.d*t.d}return this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this}decompose(t){const n=this.a,r=this.b,o=this.c,i=this.d,a=t.pivot,s=-Math.atan2(-o,i),l=Math.atan2(r,n),u=Math.abs(s+l);return u<1e-5||Math.abs(iy-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=l),t.scale.x=Math.sqrt(n*n+r*r),t.scale.y=Math.sqrt(o*o+i*i),t.position.x=this.tx+(a.x*n+a.y*o),t.position.y=this.ty+(a.x*r+a.y*i),t}invert(){const t=this.a,n=this.b,r=this.c,o=this.d,i=this.tx,a=t*o-n*r;return this.a=o/a,this.b=-n/a,this.c=-r/a,this.d=t/a,this.tx=(r*this.ty-o*i)/a,this.ty=-(t*this.ty-n*i)/a,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new ze;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return ly.identity()}static get shared(){return sy.identity()}}const sy=new ze,ly=new ze,Bo=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],No=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],$o=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ho=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],y0=[],r1=[],Ms=Math.sign;function uy(){for(let e=0;e<16;e++){const t=[];y0.push(t);for(let n=0;n<16;n++){const r=Ms(Bo[e]*Bo[n]+$o[e]*No[n]),o=Ms(No[e]*Bo[n]+Ho[e]*No[n]),i=Ms(Bo[e]*$o[n]+$o[e]*Ho[n]),a=Ms(No[e]*$o[n]+Ho[e]*Ho[n]);for(let s=0;s<16;s++)if(Bo[s]===r&&No[s]===o&&$o[s]===i&&Ho[s]===a){t.push(s);break}}}for(let e=0;e<16;e++){const t=new ze;t.set(Bo[e],No[e],$o[e],Ho[e],0,0),r1.push(t)}}uy();const Fe={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>Bo[e],uY:e=>No[e],vX:e=>$o[e],vY:e=>Ho[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>y0[e][t],sub:(e,t)=>y0[e][Fe.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?Fe.S:Fe.N:Math.abs(t)*2<=Math.abs(e)?e>0?Fe.E:Fe.W:t>0?e>0?Fe.SE:Fe.SW:e>0?Fe.NE:Fe.NW,matrixAppendRotationInv:(e,t,n=0,r=0)=>{const o=r1[Fe.inv(t)];o.tx=n,o.ty=r,e.append(o)}},bs=[new zr,new zr,new zr,new zr];class sr{constructor(t=0,n=0,r=0,o=0){this.type="rectangle",this.x=Number(t),this.y=Number(n),this.width=Number(r),this.height=Number(o)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new sr(0,0,0,0)}clone(){return new sr(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,n){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&n>=this.y&&n<this.y+this.height}strokeContains(t,n,r,o=.5){const{width:i,height:a}=this;if(i<=0||a<=0)return!1;const s=this.x,l=this.y,u=r*(1-o),f=r-u,h=s-u,c=s+i+u,d=l-u,m=l+a+u,p=s+f,y=s+i-f,x=l+f,b=l+a-f;return t>=h&&t<=c&&n>=d&&n<=m&&!(t>p&&t<y&&n>x&&n<b)}intersects(t,n){if(!n){const R=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=R)return!1;const z=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>z}const r=this.left,o=this.right,i=this.top,a=this.bottom;if(o<=r||a<=i)return!1;const s=bs[0].set(t.left,t.top),l=bs[1].set(t.left,t.bottom),u=bs[2].set(t.right,t.top),f=bs[3].set(t.right,t.bottom);if(u.x<=s.x||l.y<=s.y)return!1;const h=Math.sign(n.a*n.d-n.b*n.c);if(h===0||(n.apply(s,s),n.apply(l,l),n.apply(u,u),n.apply(f,f),Math.max(s.x,l.x,u.x,f.x)<=r||Math.min(s.x,l.x,u.x,f.x)>=o||Math.max(s.y,l.y,u.y,f.y)<=i||Math.min(s.y,l.y,u.y,f.y)>=a))return!1;const c=h*(l.y-s.y),d=h*(s.x-l.x),m=c*r+d*i,p=c*o+d*i,y=c*r+d*a,x=c*o+d*a;if(Math.max(m,p,y,x)<=c*s.x+d*s.y||Math.min(m,p,y,x)>=c*f.x+d*f.y)return!1;const b=h*(s.y-u.y),M=h*(u.x-s.x),v=b*r+M*i,w=b*o+M*i,_=b*r+M*a,A=b*o+M*a;return!(Math.max(v,w,_,A)<=b*s.x+M*s.y||Math.min(v,w,_,A)>=b*f.x+M*f.y)}pad(t=0,n=t){return this.x-=t,this.y-=n,this.width+=t*2,this.height+=n*2,this}fit(t){const n=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),o=Math.max(this.y,t.y),i=Math.min(this.y+this.height,t.y+t.height);return this.x=n,this.width=Math.max(r-n,0),this.y=o,this.height=Math.max(i-o,0),this}ceil(t=1,n=.001){const r=Math.ceil((this.x+this.width-n)*t)/t,o=Math.ceil((this.y+this.height-n)*t)/t;return this.x=Math.floor((this.x+n)*t)/t,this.y=Math.floor((this.y+n)*t)/t,this.width=r-this.x,this.height=o-this.y,this}enlarge(t){const n=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),o=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);return this.x=n,this.width=r-n,this.y=o,this.height=i-o,this}getBounds(t){return t||(t=new sr),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const lu={default:-1};function zn(e="default"){return lu[e]===void 0&&(lu[e]=-1),++lu[e]}const pc={},Ln="8.0.0",e_="8.3.4";function Dt(e,t,n=3){if(pc[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),pc[t]=!0}const o1=()=>{};function yc(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function gc(e){return!(e&e-1)&&!!e}function fy(e){const t={};for(const n in e)e[n]!==void 0&&(t[n]=e[n]);return t}const xc=Object.create(null);function cy(e){const t=xc[e];return t===void 0&&(xc[e]=zn("resource")),t}const i1=class a1 extends ko{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...a1.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Dt(Ln,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=cy(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};i1.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let hy=i1;const s1=class l1 extends ko{constructor(t={}){super(),this.options=t,this.uid=zn("textureSource"),this._resourceType="textureSource",this._resourceId=zn("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...l1.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new hy(fy(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=zn("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,n,r){r||(r=this._resolution),t||(t=this.width),n||(n=this.height);const o=Math.round(t*r),i=Math.round(n*r);return this.width=o/r,this.height=i/r,this._resolution=r,this.pixelWidth===o&&this.pixelHeight===i?!1:(this._refreshPOT(),this.pixelWidth=o,this.pixelHeight=i,this.emit("resize",this),this._resourceId=zn("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=gc(this.pixelWidth)&&gc(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};s1.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let kn=s1;class Ef extends kn{constructor(t){const n=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(n instanceof Float32Array?r="rgba32float":n instanceof Int32Array||n instanceof Uint32Array?r="rgba32uint":n instanceof Int16Array||n instanceof Uint16Array?r="rgba16uint":(n instanceof Int8Array,r="bgra8unorm")),super({...t,resource:n,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Ef.extension=Ue.TextureSource;const Mc=new ze;class dy{constructor(t,n){this.mapCoord=new ze,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof n>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=n,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,n){n===void 0&&(n=t);const r=this.mapCoord;for(let o=0;o<t.length;o+=2){const i=t[o],a=t[o+1];n[o]=i*r.a+a*r.c+r.tx,n[o+1]=i*r.b+a*r.d+r.ty}return n}update(){const t=this._texture;this._updateID++;const n=t.uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);const r=t.orig,o=t.trim;o&&(Mc.set(r.width/o.width,0,0,r.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Mc));const i=t.source,a=this.uClampFrame,s=this.clampMargin/i._resolution,l=this.clampOffset/i._resolution;return a[0]=(t.frame.x+s+l)/i.width,a[1]=(t.frame.y+s+l)/i.height,a[2]=(t.frame.x+t.frame.width-s+l)/i.width,a[3]=(t.frame.y+t.frame.height-s+l)/i.height,this.uClampOffset[0]=this.clampOffset/i.pixelWidth,this.uClampOffset[1]=this.clampOffset/i.pixelHeight,this.isSimple=t.frame.width===i.width&&t.frame.height===i.height&&t.rotate===0,!0}}class Pt extends ko{constructor({source:t,label:n,frame:r,orig:o,trim:i,defaultAnchor:a,defaultBorders:s,rotate:l,dynamic:u}={}){if(super(),this.uid=zn("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new sr,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=n,this.source=t?.source??new kn,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:f,height:h}=this._source;this.frame.width=f,this.frame.height=h}this.orig=o||this.frame,this.trim=i,this.rotate=l??0,this.defaultAnchor=a,this.defaultBorders=s,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new dy(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:n}=this,{width:r,height:o}=this._source,i=n.x/r,a=n.y/o,s=n.width/r,l=n.height/o;let u=this.rotate;if(u){const f=s/2,h=l/2,c=i+f,d=a+h;u=Fe.add(u,Fe.NW),t.x0=c+f*Fe.uX(u),t.y0=d+h*Fe.uY(u),u=Fe.add(u,2),t.x1=c+f*Fe.uX(u),t.y1=d+h*Fe.uY(u),u=Fe.add(u,2),t.x2=c+f*Fe.uX(u),t.y2=d+h*Fe.uY(u),u=Fe.add(u,2),t.x3=c+f*Fe.uX(u),t.y3=d+h*Fe.uY(u)}else t.x0=i,t.y0=a,t.x1=i+s,t.y1=a,t.x2=i+s,t.y2=a+l,t.x3=i,t.y3=a+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Dt(Ln,"Texture.baseTexture is now Texture.source"),this._source}}Pt.EMPTY=new Pt({label:"EMPTY",source:new kn({label:"EMPTY"})});Pt.EMPTY.destroy=o1;Pt.WHITE=new Pt({source:new Ef({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Pt.WHITE.destroy=o1;function my(e,t,n,r){const{width:o,height:i}=n.orig,a=n.trim;if(a){const s=a.width,l=a.height;e.minX=a.x-t._x*o-r,e.maxX=e.minX+s,e.minY=a.y-t._y*i-r,e.maxY=e.minY+l}else e.minX=-t._x*o-r,e.maxX=e.minX+o,e.minY=-t._y*i-r,e.maxY=e.minY+i}const bc=new ze;class Po{constructor(t=1/0,n=1/0,r=-1/0,o=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=bc,this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new sr);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=bc,this}set(t,n,r,o){this.minX=t,this.minY=n,this.maxX=r,this.maxY=o}addFrame(t,n,r,o,i){i||(i=this.matrix);const a=i.a,s=i.b,l=i.c,u=i.d,f=i.tx,h=i.ty;let c=this.minX,d=this.minY,m=this.maxX,p=this.maxY,y=a*t+l*n+f,x=s*t+u*n+h;y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*r+l*n+f,x=s*r+u*n+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*t+l*o+f,x=s*t+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),y=a*r+l*o+f,x=s*r+u*o+h,y<c&&(c=y),x<d&&(d=x),y>m&&(m=y),x>p&&(p=x),this.minX=c,this.minY=d,this.maxX=m,this.maxY=p}addRect(t,n){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,n)}addBounds(t,n){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,n)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const n=this.minX,r=this.minY,o=this.maxX,i=this.maxY,{a,b:s,c:l,d:u,tx:f,ty:h}=t;let c=a*n+l*r+f,d=s*n+u*r+h;this.minX=c,this.minY=d,this.maxX=c,this.maxY=d,c=a*o+l*r+f,d=s*o+u*r+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=a*n+l*i+f,d=s*n+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY,c=a*o+l*i+f,d=s*o+u*i+h,this.minX=c<this.minX?c:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=c>this.maxX?c:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,n,r,o){return this.minX<t&&(this.minX=t),this.maxX>n&&(this.maxX=n),this.minY<r&&(this.minY=r),this.maxY>o&&(this.maxY=o),this}pad(t,n=t){return this.minX-=t,this.maxX+=t,this.minY-=n,this.maxY+=n,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Po(this.minX,this.minY,this.maxX,this.maxY)}scale(t,n=t){return this.minX*=t,this.minY*=n,this.maxX*=t,this.maxY*=n,this}get x(){return this.minX}set x(t){const n=this.maxX-this.minX;this.minX=t,this.maxX=t+n}get y(){return this.minY}set y(t){const n=this.maxY-this.minY;this.minY=t,this.maxY=t+n}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,n,r,o){let i=this.minX,a=this.minY,s=this.maxX,l=this.maxY;o||(o=this.matrix);const u=o.a,f=o.b,h=o.c,c=o.d,d=o.tx,m=o.ty;for(let p=n;p<r;p+=2){const y=t[p],x=t[p+1],b=u*y+h*x+d,M=f*y+c*x+m;i=b<i?b:i,a=M<a?M:a,s=b>s?b:s,l=M>l?M:l}this.minX=i,this.minY=a,this.maxX=s,this.maxY=l}containsPoint(t,n){return this.minX<=t&&this.minY<=n&&this.maxX>=t&&this.maxY>=n}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var py={grad:.9,turn:360,rad:360/(2*Math.PI)},Gr=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},ln=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n+0},lr=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e>t?e:t},u1=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},vc=function(e){return{r:lr(e.r,0,255),g:lr(e.g,0,255),b:lr(e.b,0,255),a:lr(e.a)}},uu=function(e){return{r:ln(e.r),g:ln(e.g),b:ln(e.b),a:ln(e.a,3)}},yy=/^#([0-9a-f]{3,8})$/i,vs=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},f1=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=Math.max(t,n,r),a=i-Math.min(t,n,r),s=a?i===t?(n-r)/a:i===n?2+(r-t)/a:4+(t-n)/a:0;return{h:60*(s<0?s+6:s),s:i?a/i*100:0,v:i/255*100,a:o}},c1=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var i=Math.floor(t),a=r*(1-n),s=r*(1-(t-i)*n),l=r*(1-(1-t+i)*n),u=i%6;return{r:255*[r,s,a,a,l,r][u],g:255*[l,r,r,s,a,a][u],b:255*[a,a,l,r,r,s][u],a:o}},Sc=function(e){return{h:u1(e.h),s:lr(e.s,0,100),l:lr(e.l,0,100),a:lr(e.a)}},wc=function(e){return{h:ln(e.h),s:ln(e.s),l:ln(e.l),a:ln(e.a,3)}},_c=function(e){return c1((n=(t=e).s,{h:t.h,s:(n*=((r=t.l)<50?r:100-r)/100)>0?2*n/(r+n)*100:0,v:r+n,a:t.a}));var t,n,r},Ya=function(e){return{h:(t=f1(e)).h,s:(o=(200-(n=t.s))*(r=t.v)/100)>0&&o<200?n*r/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,n,r,o},gy=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,xy=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,My=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,by=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,g0={string:[[function(e){var t=yy.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?ln(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?ln(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=My.exec(e)||by.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:vc({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=gy.exec(e)||xy.exec(e);if(!t)return null;var n,r,o=Sc({h:(n=t[1],r=t[2],r===void 0&&(r="deg"),Number(n)*(py[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return _c(o)},"hsl"]],object:[[function(e){var t=e.r,n=e.g,r=e.b,o=e.a,i=o===void 0?1:o;return Gr(t)&&Gr(n)&&Gr(r)?vc({r:Number(t),g:Number(n),b:Number(r),a:Number(i)}):null},"rgb"],[function(e){var t=e.h,n=e.s,r=e.l,o=e.a,i=o===void 0?1:o;if(!Gr(t)||!Gr(n)||!Gr(r))return null;var a=Sc({h:Number(t),s:Number(n),l:Number(r),a:Number(i)});return _c(a)},"hsl"],[function(e){var t=e.h,n=e.s,r=e.v,o=e.a,i=o===void 0?1:o;if(!Gr(t)||!Gr(n)||!Gr(r))return null;var a=function(s){return{h:u1(s.h),s:lr(s.s,0,100),v:lr(s.v,0,100),a:lr(s.a)}}({h:Number(t),s:Number(n),v:Number(r),a:Number(i)});return c1(a)},"hsv"]]},Ac=function(e,t){for(var n=0;n<t.length;n++){var r=t[n][0](e);if(r)return[r,t[n][1]]}return[null,void 0]},vy=function(e){return typeof e=="string"?Ac(e.trim(),g0.string):typeof e=="object"&&e!==null?Ac(e,g0.object):[null,void 0]},fu=function(e,t){var n=Ya(e);return{h:n.h,s:lr(n.s+100*t,0,100),l:n.l,a:n.a}},cu=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Tc=function(e,t){var n=Ya(e);return{h:n.h,s:n.s,l:lr(n.l+100*t,0,100),a:n.a}},x0=function(){function e(t){this.parsed=vy(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return ln(cu(this.rgba),2)},e.prototype.isDark=function(){return cu(this.rgba)<.5},e.prototype.isLight=function(){return cu(this.rgba)>=.5},e.prototype.toHex=function(){return t=uu(this.rgba),n=t.r,r=t.g,o=t.b,a=(i=t.a)<1?vs(ln(255*i)):"","#"+vs(n)+vs(r)+vs(o)+a;var t,n,r,o,i,a},e.prototype.toRgb=function(){return uu(this.rgba)},e.prototype.toRgbString=function(){return t=uu(this.rgba),n=t.r,r=t.g,o=t.b,(i=t.a)<1?"rgba("+n+", "+r+", "+o+", "+i+")":"rgb("+n+", "+r+", "+o+")";var t,n,r,o,i},e.prototype.toHsl=function(){return wc(Ya(this.rgba))},e.prototype.toHslString=function(){return t=wc(Ya(this.rgba)),n=t.h,r=t.s,o=t.l,(i=t.a)<1?"hsla("+n+", "+r+"%, "+o+"%, "+i+")":"hsl("+n+", "+r+"%, "+o+"%)";var t,n,r,o,i},e.prototype.toHsv=function(){return t=f1(this.rgba),{h:ln(t.h),s:ln(t.s),v:ln(t.v),a:ln(t.a,3)};var t},e.prototype.invert=function(){return _r({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),_r(fu(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),_r(fu(this.rgba,-t))},e.prototype.grayscale=function(){return _r(fu(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),_r(Tc(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),_r(Tc(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?_r({r:(n=this.rgba).r,g:n.g,b:n.b,a:t}):ln(this.rgba.a,3);var n},e.prototype.hue=function(t){var n=Ya(this.rgba);return typeof t=="number"?_r({h:t,s:n.s,l:n.l,a:n.a}):ln(n.h)},e.prototype.isEqual=function(t){return this.toHex()===_r(t).toHex()},e}(),_r=function(e){return e instanceof x0?e:new x0(e)},Rc=[],Sy=function(e){e.forEach(function(t){Rc.indexOf(t)<0&&(t(x0,g0),Rc.push(t))})};function wy(e,t){var n={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var o in n)r[n[o]]=o;var i={};e.prototype.toName=function(a){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var s,l,u=r[this.toHex()];if(u)return u;if(a?.closest){var f=this.toRgb(),h=1/0,c="black";if(!i.length)for(var d in n)i[d]=new e(n[d]).toRgb();for(var m in n){var p=(s=f,l=i[m],Math.pow(s.r-l.r,2)+Math.pow(s.g-l.g,2)+Math.pow(s.b-l.b,2));p<h&&(h=p,c=m)}return c}},t.string.push([function(a){var s=a.toLowerCase(),l=s==="transparent"?"#0000":n[s];return l?new e(l).toRgb():null},"name"])}Sy([wy]);const ia=class Xa{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Xa)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return t.length!==n.length?!1:t.every((i,a)=>i===n[a]);if(t!==null&&n!==null){const i=Object.keys(t),a=Object.keys(n);return i.length!==a.length?!1:i.every(s=>t[s]===n[s])}return t===n}toRgba(){const[t,n,r,o]=this._components;return{r:t,g:n,b:r,a:o}}toRgb(){const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString(){const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t){const[n,r,o]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(o*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[n,r,o,i]=this._components;return t[0]=n,t[1]=r,t[2]=o,t[3]=i,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[n,r,o]=this._components;return t[0]=n,t[1]=r,t[2]=o,t}toNumber(){return this._int}toBgrNumber(){const[t,n,r]=this.toUint8RgbArray();return(r<<16)+(n<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[n,r,o,i]=Xa._temp.setValue(t)._components;return this._components[0]*=n,this._components[1]*=r,this._components[2]*=o,this._components[3]*=i,this._refreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,n=!0){if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let r=this._int>>16&255,o=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,o=o*t+.5|0,i=i*t+.5|0),(t*255<<24)+(r<<16)+(o<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const n=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-n.length)+n}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let n,r,o,i;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const a=t;n=(a>>16&255)/255,r=(a>>8&255)/255,o=(a&255)/255,i=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,o,i=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[n,r,o,i=255]=t,n/=255,r/=255,o/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const s=Xa.HEX_PATTERN.exec(t);s&&(t=`#${s[2]}`)}const a=_r(t);a.isValid()&&({r:n,g:r,b:o,a:i}=a.rgba,n/=255,r/=255,o/=255)}if(n!==void 0)this._components[0]=n,this._components[1]=r,this._components[2]=o,this._components[3]=i,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((o,i)=>{t[i]=Math.min(Math.max(o,n),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Xa||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};ia.shared=new ia;ia._temp=new ia;ia.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let an=ia;const _y={cullArea:null,cullable:!1,cullableChildren:!0};class Lf{constructor(t,n){this._pool=[],this._count=0,this._index=0,this._classType=t,n&&this.prepopulate(n)}prepopulate(t){for(let n=0;n<t;n++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let n;return this._index>0?n=this._pool[--this._index]:n=new this._classType,n.init?.(t),n}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class Ay{constructor(){this._poolsByClass=new Map}prepopulate(t,n){this.getPool(t).prepopulate(n)}get(t,n){return this.getPool(t).get(n)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Lf(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(n=>{const r=t[n._classType.name]?n._classType.name+n._classType.ID:n._classType.name;t[r]={free:n.totalFree,used:n.totalUsed,size:n.totalSize}}),t}}const Sl=new Ay,Ty={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(e){typeof e=="boolean"&&e===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(e===!0?{}:e))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(e){Dt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(e)}};function Ry(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}const Cy={allowChildren:!0,removeChildren(e=0,t){const n=t??this.children.length,r=n-e,o=[];if(r>0&&r<=n){for(let a=n-1;a>=e;a--){const s=this.children[a];s&&(o.push(s),s.parent=null)}Ry(this.children,e,n);const i=this.renderGroup||this.parentRenderGroup;i&&i.removeChildren(o);for(let a=0;a<o.length;++a)this.emit("childRemoved",o[a],this,a),o[a].emit("removed",this);return o}else if(r===0&&this.children.length===0)return o;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(e){const t=this.getChildAt(e);return this.removeChild(t)},getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]},setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(e),this.addChildAt(e,t)},getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(e,t){this.allowChildren||Dt(Ln,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:n}=this;if(t<0||t>n.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${n.length}`);if(e.parent){const o=e.parent.children.indexOf(e);if(e.parent===this&&o===t)return e;o!==-1&&e.parent.children.splice(o,1)}t===n.length?n.push(e):n.splice(t,0,e),e.parent=this,e.didChange=!0,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",e,this,t),e.emit("added",this),e},swapChildren(e,t){if(e===t)return;const n=this.getChildIndex(e),r=this.getChildIndex(t);this.children[n]=t,this.children[r]=e;const o=this.renderGroup||this.parentRenderGroup;o&&(o.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...e){return e.length===1?this.reparentChildAt(e[0],this.children.length):(e.forEach(t=>this.reparentChildAt(t,this.children.length)),e[0])},reparentChildAt(e,t){if(e.parent===this)return this.setChildIndex(e,t),e;const n=e.worldTransform.clone();e.removeFromParent(),this.addChildAt(e,t);const r=this.worldTransform.clone();return r.invert(),n.prepend(r),e.setFromMatrix(n),e}};class Cc{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Py{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let n=0;n<this._tests.length;n++){const r=this._tests[n];if(r.test(t))return Sl.get(r.maskClass,t)}return t}returnMaskEffect(t){Sl.return(t)}}const M0=new Py;Lo.handleByList(Ue.MaskEffect,M0._effectClasses);const Iy={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0)},addEffect(e){this.effects.indexOf(e)===-1&&(this.effects.push(e),this.effects.sort((n,r)=>n.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(e){const t=this.effects.indexOf(e);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(e){const t=this._maskEffect;t?.mask!==e&&(t&&(this.removeEffect(t),M0.returnMaskEffect(t),this._maskEffect=null),e!=null&&(this._maskEffect=M0.getMaskEffect(e),this.addEffect(this._maskEffect)))},setMask(e){this._maskOptions={...this._maskOptions,...e},e.mask&&(this.mask=e.mask),this._markStructureAsChanged()},get mask(){return this._maskEffect?.mask},set filters(e){!Array.isArray(e)&&e&&(e=[e]);const t=this._filterEffect||(this._filterEffect=new Cc);e=e;const n=e?.length>0,r=t.filters?.length>0,o=n!==r;e=Array.isArray(e)?e.slice(0):e,t.filters=Object.freeze(e),o&&(n?this.addEffect(t):(this.removeEffect(t),t.filters=e??null))},get filters(){return this._filterEffect?.filters},set filterArea(e){this._filterEffect||(this._filterEffect=new Cc),this._filterEffect.filterArea=e},get filterArea(){return this._filterEffect?.filterArea}},zy={label:null,get name(){return Dt(Ln,"Container.name property has been removed, use Container.label instead"),this.label},set name(e){Dt(Ln,"Container.name property has been removed, use Container.label instead"),this.label=e},getChildByName(e,t=!1){return this.getChildByLabel(e,t)},getChildByLabel(e,t=!1){const n=this.children;for(let r=0;r<n.length;r++){const o=n[r];if(o.label===e||e instanceof RegExp&&e.test(o.label))return o}if(t)for(let r=0;r<n.length;r++){const i=n[r].getChildByLabel(e,!0);if(i)return i}return null},getChildrenByLabel(e,t=!1,n=[]){const r=this.children;for(let o=0;o<r.length;o++){const i=r[o];(i.label===e||e instanceof RegExp&&e.test(i.label))&&n.push(i)}if(t)for(let o=0;o<r.length;o++)r[o].getChildrenByLabel(e,!0,n);return n}},On=new Lf(ze),aa=new Lf(Po);function h1(e,t,n){n.clear();let r,o;return e.parent?t?r=e.parent.worldTransform:(o=On.get().identity(),r=kf(e,o)):r=ze.IDENTITY,d1(e,n,r,t),o&&On.return(o),n.isValid||n.set(0,0,0,0),n}function d1(e,t,n,r){if(!e.visible||!e.measurable)return;let o;r?o=e.worldTransform:(e.updateLocalTransform(),o=On.get(),o.appendFrom(e.localTransform,n));const i=t,a=!!e.effects.length;if(a&&(t=aa.get().clear()),e.boundsArea)t.addRect(e.boundsArea,o);else{e.bounds&&(t.matrix=o,t.addBounds(e.bounds));for(let s=0;s<e.children.length;s++)d1(e.children[s],t,o,r)}if(a){for(let s=0;s<e.effects.length;s++)e.effects[s].addBounds?.(t);i.addBounds(t,ze.IDENTITY),aa.return(t)}r||On.return(o)}function kf(e,t){const n=e.parent;return n&&(kf(n,t),n.updateLocalTransform(),t.append(n.localTransform)),t}function Oy(e,t){if(e===16777215||!t)return t;if(t===16777215||!e)return e;const n=e>>16&255,r=e>>8&255,o=e&255,i=t>>16&255,a=t>>8&255,s=t&255,l=n*i/255|0,u=r*a/255|0,f=o*s/255|0;return(l<<16)+(u<<8)+f}const Pc=16777215;function Ic(e,t){return e===Pc?t:t===Pc?e:Oy(e,t)}function Ks(e){return((e&255)<<16)+(e&65280)+(e>>16&255)}const Fy={getGlobalAlpha(e){if(e)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,n=this.parent;for(;n;)t*=n.alpha,n=n.parent;return t},getGlobalTransform(e,t){if(t)return e.copyFrom(this.worldTransform);this.updateLocalTransform();const n=kf(this,On.get().identity());return e.appendFrom(this.localTransform,n),On.return(n),e},getGlobalTint(e){if(e)return this.renderGroup?Ks(this.renderGroup.worldColor):this.parentRenderGroup?Ks(Ic(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,n=this.parent;for(;n;)t=Ic(t,n.localColor),n=n.parent;return Ks(t)}};let hu=0;const zc=500;function ro(...e){hu!==zc&&(hu++,hu===zc?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...e))}function m1(e,t,n){return t.clear(),n||(n=ze.IDENTITY),p1(e,t,n,e,!0),t.isValid||t.set(0,0,0,0),t}function p1(e,t,n,r,o){let i;if(o)i=On.get(),i=n.copyTo(i);else{if(!e.visible||!e.measurable)return;e.updateLocalTransform();const l=e.localTransform;i=On.get(),i.appendFrom(l,n)}const a=t,s=!!e.effects.length;if(s&&(t=aa.get().clear()),e.boundsArea)t.addRect(e.boundsArea,i);else{e.renderPipeId&&(t.matrix=i,t.addBounds(e.bounds));const l=e.children;for(let u=0;u<l.length;u++)p1(l[u],t,i,r,!1)}if(s){for(let l=0;l<e.effects.length;l++)e.effects[l].addLocalBounds?.(t,r);a.addBounds(t,ze.IDENTITY),aa.return(t)}On.return(i)}function y1(e,t){const n=e.children;for(let r=0;r<n.length;r++){const o=n[r],i=o.uid,a=(o._didViewChangeTick&65535)<<16|o._didContainerChangeTick&65535,s=t.index;(t.data[s]!==i||t.data[s+1]!==a)&&(t.data[t.index]=i,t.data[t.index+1]=a,t.didChange=!0),t.index=s+2,o.children.length&&y1(o,t)}return t.didChange}const Ey=new ze,Ly={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(e,t){const n=Math.sign(this.scale.x)||1;t!==0?this.scale.x=e/t*n:this.scale.x=n},_setHeight(e,t){const n=Math.sign(this.scale.y)||1;t!==0?this.scale.y=e/t*n:this.scale.y=n},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Po});const e=this._localBoundsCacheData;return e.index=1,e.didChange=!1,e.data[0]!==this._didViewChangeTick&&(e.didChange=!0,e.data[0]=this._didViewChangeTick),y1(this,e),e.didChange&&m1(this,e.localBounds,Ey),e.localBounds},getBounds(e,t){return h1(this,e,t||new Po)}},ky={_onRender:null,set onRender(e){const t=this.renderGroup||this.parentRenderGroup;if(!e){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=e},get onRender(){return this._onRender}},Uy={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(e){this._zIndex!==e&&(this._zIndex=e,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Dy))}};function Dy(e,t){return e._zIndex-t._zIndex}const Xy={getGlobalPosition(e=new zr,t=!1){return this.parent?this.parent.toGlobal(this._position,e,t):(e.x=this._position.x,e.y=this._position.y),e},toGlobal(e,t,n=!1){const r=this.getGlobalTransform(On.get(),n);return t=r.apply(e,t),On.return(r),t},toLocal(e,t,n,r){t&&(e=t.toGlobal(e,n,r));const o=this.getGlobalTransform(On.get(),r);return n=o.applyInverse(e,n),On.return(o),n}};class Gy{constructor(){this.uid=zn("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let By=0;class Ny{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,n,r){const o=new kn({...this.textureOptions,width:t,height:n,resolution:1,antialias:r,autoGarbageCollect:!0});return new Pt({source:o,label:`texturePool_${By++}`})}getOptimalTexture(t,n,r=1,o){let i=Math.ceil(t*r-1e-6),a=Math.ceil(n*r-1e-6);i=yc(i),a=yc(a);const s=(i<<17)+(a<<1)+(o?1:0);this._texturePool[s]||(this._texturePool[s]=[]);let l=this._texturePool[s].pop();return l||(l=this.createTexture(i,a,o)),l.source._resolution=r,l.source.width=i/r,l.source.height=a/r,l.source.pixelWidth=i,l.source.pixelHeight=a,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=n,l.updateUvs(),this._poolKeyHash[l.uid]=s,l}getSameSizeTexture(t,n=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,n)}returnTexture(t){const n=this._poolKeyHash[t.uid];this._texturePool[n].push(t)}clear(t){if(t=t!==!1,t)for(const n in this._texturePool){const r=this._texturePool[n];if(r)for(let o=0;o<r.length;o++)r[o].destroy(!0)}this._texturePool={}}}const Wn=new Ny;class $y{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new ze,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Gy,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const n=t.children;for(let r=0;r<n.length;r++){const o=n[r];o._updateFlags=15,this.addChild(o)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Wn.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const n=this.childrenToUpdate[t];n.list.fill(null),n.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const n=this.renderGroupChildren.indexOf(t);n>-1&&this.renderGroupChildren.splice(n,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const n=t.children;for(let r=0;r<n.length;r++)this.addChild(n[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const n=t.children;for(let r=0;r<n.length;r++)this.removeChild(n[r])}removeChildren(t){for(let n=0;n<t.length;n++)this.removeChild(t[n])}onChildUpdate(t){let n=this.childrenToUpdate[t.relativeRenderGroupDepth];n||(n=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),n.list[n.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const n=this.root.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],t);return t}_getChildren(t,n=[]){if(n.push(t),t.renderGroup)return n;const r=t.children;for(let o=0;o<r.length;o++)this._getChildren(r[o],n);return n}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new ze),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new ze),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new ze),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function Hy(e,t,n={}){for(const r in t)!n[r]&&t[r]!==void 0&&(e[r]=t[r])}const du=new rn(null),mu=new rn(null),pu=new rn(null,1,1),Oc=1,Wy=2,yu=4;class me extends ko{constructor(t={}){super(),this.uid=zn("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new ze,this.relativeGroupTransform=new ze,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new rn(this,0,0),this._scale=pu,this._pivot=mu,this._skew=du,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],Hy(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(n=>this.addChild(n)),t.parent?.addChild(this)}static mixin(t){Object.defineProperties(me.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Dt(Ln,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let o=0;o<t.length;o++)this.addChild(t[o]);return t[0]}const n=t[0],r=this.renderGroup||this.parentRenderGroup;return n.parent===this?(this.children.splice(this.children.indexOf(n),1),this.children.push(n),r&&(r.structureDidChange=!0),n):(n.parent&&n.parent.removeChild(n),this.children.push(n),this.sortableChildren&&(this.sortDirty=!0),n.parent=this,n.didChange=!0,n._updateFlags=15,r&&r.addChild(n),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this),this._didViewChangeTick++,n._zIndex!==0&&n.depthOfChildModified(),n)}removeChild(...t){if(t.length>1){for(let o=0;o<t.length;o++)this.removeChild(t[o]);return t[0]}const n=t[0],r=this.children.indexOf(n);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(n):this.parentRenderGroup&&this.parentRenderGroup.removeChild(n),n.parent=null,this.emit("childRemoved",n,this,r),n.emit("removed",this)),n}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Sl.get($y,this),this.groupTransform=ze.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Sl.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new ze),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*ay}set angle(t){this.rotation=t*oa}get pivot(){return this._pivot===mu&&(this._pivot=new rn(this,0,0)),this._pivot}set pivot(t){this._pivot===mu&&(this._pivot=new rn(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===du&&(this._skew=new rn(this,0,0)),this._skew}set skew(t){this._skew===du&&(this._skew=new rn(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===pu&&(this._scale=new rn(this,1,1)),this._scale}set scale(t){this._scale===pu&&(this._scale=new rn(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const n=this.getLocalBounds().width;this._setWidth(t,n)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const n=this.getLocalBounds().height;this._setHeight(t,n)}getSize(t){t||(t={});const n=this.getLocalBounds();return t.width=Math.abs(this.scale.x*n.width),t.height=Math.abs(this.scale.y*n.height),t}setSize(t,n){const r=this.getLocalBounds();typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,r.width),n!==void 0&&this._setHeight(n,r.height)}_updateSkew(){const t=this._rotation,n=this._skew;this._cx=Math.cos(t+n._y),this._sx=Math.sin(t+n._y),this._cy=-Math.sin(t-n._x),this._sy=Math.cos(t-n._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const n=this.localTransform,r=this._scale,o=this._pivot,i=this._position,a=r._x,s=r._y,l=o._x,u=o._y;n.a=this._cx*a,n.b=this._sx*a,n.c=this._cy*s,n.d=this._sy*s,n.tx=i._x-(l*n.a+u*n.c),n.ty=i._y-(l*n.b+u*n.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Oc,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=an.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Oc,this._onUpdate())}get tint(){return Ks(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Wy,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const n=t?2:0;(this.localDisplayStatus&2)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=yu,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const n=t?0:4;(this.localDisplayStatus&4)!==n&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=yu,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const n=t?1:0;(this.localDisplayStatus&1)!==n&&(this._updateFlags|=yu,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let n;if(this.children.length&&(n=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&n)for(let o=0;o<n.length;++o)n[o].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}me.mixin(Cy);me.mixin(Xy);me.mixin(ky);me.mixin(Ly);me.mixin(Iy);me.mixin(zy);me.mixin(Uy);me.mixin(_y);me.mixin(Ty);me.mixin(Fy);class Uf extends me{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Po(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const n=this.bounds,{x:r,y:o}=t;return r>=n.minX&&r<=n.maxX&&o>=n.minY&&o<=n.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class $e extends Uf{constructor(t=Pt.EMPTY){t instanceof Pt&&(t={texture:t});const{texture:n=Pt.EMPTY,anchor:r,roundPixels:o,width:i,height:a,...s}=t;super({label:"Sprite",...s}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new rn({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:n.defaultAnchor&&(this.anchor=n.defaultAnchor),this.texture=n,this.allowChildren=!1,this.roundPixels=o??!1,i!==void 0&&(this.width=i),a!==void 0&&(this.height=a)}static from(t,n=!1){return t instanceof Pt?new $e(t):new $e(Pt.from(t,n))}set texture(t){t||(t=Pt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return my(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return Dt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,n=this._texture,r=this._bounds,{width:o,height:i}=n.orig;r.minX=-t._x*o,r.maxX=r.minX+o,r.minY=-t._y*i,r.maxY=r.minY+i}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,n){typeof t=="object"?(n=t.height??t.width,t=t.width):n??(n=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),n!==void 0&&this._setHeight(n,this._texture.orig.height)}}const qy=new Po;function g1(e,t,n){const r=qy;e.measurable=!0,h1(e,n,r),t.addBoundsMask(r),e.measurable=!1}function x1(e,t,n){const r=aa.get();e.measurable=!0;const o=On.get().identity(),i=M1(e,n,o);m1(e,r,i),e.measurable=!1,t.addBoundsMask(r),On.return(o),aa.return(r)}function M1(e,t,n){return e?(e!==t&&(M1(e.parent,t,n),e.updateLocalTransform(),n.append(e.localTransform)),n):(ro("Mask bounds, renderable is not inside the root container"),n)}class b1{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof $e),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,n){this.inverse||g1(this.mask,t,n)}addLocalBounds(t,n){x1(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof $e}}b1.extension=Ue.MaskEffect;class v1{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}v1.extension=Ue.MaskEffect;class S1{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,n){g1(this.mask,t,n)}addLocalBounds(t,n){x1(this.mask,t,n)}containsPoint(t,n){const r=this.mask;return n(r,t)}destroy(){this.reset()}static test(t){return t instanceof me}}S1.extension=Ue.MaskEffect;const Vy={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")};let Fc=Vy;const Io={get(){return Fc},set(e){Fc=e}};class Df extends kn{constructor(t){t.resource||(t.resource=Io.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,n=this.height,r=this._resolution){const o=super.resize(t,n,r);return o&&this.resizeCanvas(),o}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}Df.extension=Ue.TextureSource;class Xf extends kn{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const n=Io.get().createCanvas(t.resource.width,t.resource.height);n.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=n,ro("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}Xf.extension=Ue.TextureSource;var b0=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(b0||{});class gu{constructor(t,n=null,r=0,o=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=n,this.priority=r,this._once=o}match(t,n=null){return this._fn===t&&this._context===n}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const n=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),n}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const n=this.next;return this.next=t?null:n,this.previous=null,n}}const w1=class Hn{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new gu(null,null,1/0),this.deltaMS=1/Hn.targetFPMS,this.elapsedMS=1/Hn.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,n,r=b0.NORMAL){return this._addListener(new gu(t,n,r))}addOnce(t,n,r=b0.NORMAL){return this._addListener(new gu(t,n,r,!0))}_addListener(t){let n=this._head.next,r=this._head;if(!n)t.connect(r);else{for(;n;){if(t.priority>n.priority){t.connect(r);break}r=n,n=n.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,n){let r=this._head.next;for(;r;)r.match(t,n)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,n=this._head;for(;n=n.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let n;if(t>this.lastTime){if(n=this.elapsedMS=t-this.lastTime,n>this._maxElapsedMS&&(n=this._maxElapsedMS),n*=this.speed,this._minElapsedMS){const i=t-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=t-i%this._minElapsedMS}this.deltaMS=n,this.deltaTime=this.deltaMS*Hn.targetFPMS;const r=this._head;let o=r.next;for(;o;)o=o.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const n=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,n)/1e3,Hn.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const n=Math.max(this.minFPS,t);this._minElapsedMS=1/(n/1e3)}}static get shared(){if(!Hn._shared){const t=Hn._shared=new Hn;t.autoStart=!0,t._protected=!0}return Hn._shared}static get system(){if(!Hn._system){const t=Hn._system=new Hn;t.autoStart=!0,t._protected=!0}return Hn._system}};w1.targetFPMS=.06;let Ss=w1,xu;async function Yy(){return xu??(xu=(async()=>{const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const n=await new Promise(a=>{const s=document.createElement("video");s.onloadeddata=()=>a(s),s.onerror=()=>a(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!n)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,o),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);const i=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,i),t.deleteFramebuffer(o),t.deleteTexture(r),t.getExtension("WEBGL_lose_context")?.loseContext(),i[0]<=i[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),xu}const Vl=class _1 extends kn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={..._1.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Ss.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,n=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(n.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await Yy(),this._load=new Promise((r,o)=>{this.isValid?r(this):(this._resolve=r,this._reject=o,n.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${n.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Ss.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Ss.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Ss.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Vl.extension=Ue.TextureSource;Vl.defaultOptions={...kn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Vl.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Ky=Vl;const Ti=(e,t,n=!1)=>(Array.isArray(e)||(e=[e]),t?e.map(r=>typeof r=="string"||n?t(r):r):e);class jy{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const n=this._cache.get(t);return n||ro(`[Assets] Asset id ${t} was not found in the Cache`),n}set(t,n){const r=Ti(t);let o;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(n)){o=u.getCacheableAssets(r,n);break}}const i=new Map(Object.entries(o||{}));o||r.forEach(l=>{i.set(l,n)});const a=[...i.keys()],s={cacheKeys:a,keys:r};r.forEach(l=>{this._cacheMap.set(l,s)}),a.forEach(l=>{const u=o?o[l]:n;this._cache.has(l)&&this._cache.get(l)!==u&&ro("[Cache] already has key:",l),this._cache.set(l,i.get(l))})}remove(t){if(!this._cacheMap.has(t)){ro(`[Assets] Asset id ${t} was not found in the Cache`);return}const n=this._cacheMap.get(t);n.cacheKeys.forEach(o=>{this._cache.delete(o)}),n.keys.forEach(o=>{this._cacheMap.delete(o)})}get parsers(){return this._parsers}}const Ko=new jy,v0=[];Lo.handleByList(Ue.TextureSource,v0);function A1(e={}){const t=e&&e.resource,n=t?e.resource:e,r=t?e:{resource:e};for(let o=0;o<v0.length;o++){const i=v0[o];if(i.test(n))return new i(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Qy(e={},t=!1){const n=e&&e.resource,r=n?e.resource:e,o=n?e:{resource:e};if(!t&&Ko.has(r))return Ko.get(r);const i=new Pt({source:A1(o)});return i.on("destroy",()=>{Ko.has(r)&&Ko.remove(r)}),t||Ko.set(r,i),i}function Zy(e,t=!1){return typeof e=="string"?Ko.get(e):e instanceof kn?new Pt({source:e}):Qy(e,t)}Pt.from=Zy;kn.from=A1;Lo.add(b1,v1,S1,Ky,Xf,Df,Ef);var T1=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(T1||{});function hr(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function wa(e){return e.split("?")[0].split("#")[0]}function Jy(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tg(e,t,n){return e.replace(new RegExp(Jy(t),"g"),n)}function eg(e,t){let n="",r=0,o=-1,i=0,a=-1;for(let s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(a===47)break;a=47}if(a===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else a===46&&i!==-1?++i:i=-1}return n}const ss={toPosix(e){return tg(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){hr(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(hr(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=wa(this.toPosix(t??Io.get().getBaseUrl())),o=wa(this.toPosix(n??this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?ss.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(hr(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=eg(e),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return hr(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let n=0;n<e.length;++n){const r=e[n];if(hr(r),r.length>0)if(t===void 0)t=r;else{const o=e[n-1]??"";this.joinExtensions.includes(this.extname(o).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(hr(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),a=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(a)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){hr(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){hr(e),t&&hr(t),e=wa(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let a=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(l===t.charCodeAt(a)?--a===-1&&(r=i):(a=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){hr(e),e=wa(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===47){if(!o){n=a+1;break}continue}r===-1&&(o=!1,r=a+1),s===46?t===-1?t=a:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){hr(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=wa(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,a=0,s=-1,l=!0,u=e.length-1,f=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){a=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:f!==1&&(f=1):i!==-1&&(f=-1)}return i===-1||s===-1||f===0||f===1&&i===s-1&&i===a+1?s!==-1&&(a===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(a,s)):(a===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(a,i),t.base=e.slice(a,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function R1(e,t,n,r,o){const i=t[n];for(let a=0;a<i.length;a++){const s=i[a];n<t.length-1?R1(e.replace(r[n],s),t,n+1,r,o):o.push(e.replace(r[n],s))}}function ng(e){const t=/\{(.*?)\}/g,n=e.match(t),r=[];if(n){const o=[];n.forEach(i=>{const a=i.substring(1,i.length-1).split(",");o.push(a)}),R1(e,o,0,n,r)}else r.push(e);return r}const Ec=e=>!Array.isArray(e);class C1{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,n)=>`${t}${this._bundleIdConnector}${n}`,extractAssetIdFromBundle:(t,n)=>n.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(n=>{this._preferredOrder.push(n),n.priority||(n.priority=Object.keys(n.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const n=t;this._defaultSearchParams=Object.keys(n).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`).join("&")}}getAlias(t){const{alias:n,src:r}=t;return Ti(n||r,i=>typeof i=="string"?i:Array.isArray(i)?i.map(a=>a?.src??a):i?.src?i.src:i,!0)}addManifest(t){this._manifest&&ro("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(n=>{this.addBundle(n.name,n.assets)})}addBundle(t,n){const r=[];let o=n;Array.isArray(n)||(o=Object.entries(n).map(([i,a])=>typeof a=="string"||Array.isArray(a)?{alias:i,src:a}:{alias:i,...a})),o.forEach(i=>{const a=i.src,s=i.alias;let l;if(typeof s=="string"){const u=this._createBundleAssetId(t,s);r.push(u),l=[s,u]}else{const u=s.map(f=>this._createBundleAssetId(t,f));r.push(...u),l=[...s,...u]}this.add({...i,alias:l,src:a})}),this._bundles[t]=r}add(t){const n=[];Array.isArray(t)?n.push(...t):n.push(t);let r;r=i=>{this.hasKey(i)&&ro(`[Resolver] already has key: ${i} overwriting`)},Ti(n).forEach(i=>{const{src:a}=i;let{data:s,format:l,loadParser:u}=i;const f=Ti(a).map(d=>typeof d=="string"?ng(d):Array.isArray(d)?d:[d]),h=this.getAlias(i);Array.isArray(h)?h.forEach(r):r(h);const c=[];f.forEach(d=>{d.forEach(m=>{let p={};if(typeof m!="object"){p.src=m;for(let y=0;y<this._parsers.length;y++){const x=this._parsers[y];if(x.test(m)){p=x.parse(m);break}}}else s=m.data??s,l=m.format??l,u=m.loadParser??u,p={...p,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:h,data:s,format:l,loadParser:u}),c.push(p)})}),h.forEach(d=>{this._assetMap[d]=c})})}resolveBundle(t){const n=Ec(t);t=Ti(t);const r={};return t.forEach(o=>{const i=this._bundles[o];if(i){const a=this.resolve(i),s={};for(const l in a){const u=a[l];s[this._extractAssetIdFromBundle(o,l)]=u}r[o]=s}}),n?r[t[0]]:r}resolveUrl(t){const n=this.resolve(t);if(typeof t!="string"){const r={};for(const o in n)r[o]=n[o].src;return r}return n.src}resolve(t){const n=Ec(t);t=Ti(t);const r={};return t.forEach(o=>{if(!this._resolverHash[o])if(this._assetMap[o]){let i=this._assetMap[o];const a=this._getPreferredOrder(i);a?.priority.forEach(s=>{a.params[s].forEach(l=>{const u=i.filter(f=>f[s]?f[s]===l:!1);u.length&&(i=u)})}),this._resolverHash[o]=i[0]}else this._resolverHash[o]=this._buildResolvedAsset({alias:[o],src:o},{});r[o]=this._resolverHash[o]}),n?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let n=0;n<t.length;n++){const r=t[0],o=this._preferredOrder.find(i=>i.params.format.includes(r.format));if(o)return o}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const n=/\?/.test(t)?"&":"?";return`${t}${n}${this._defaultSearchParams}`}_buildResolvedAsset(t,n){const{aliases:r,data:o,loadParser:i,format:a}=n;return(this._basePath||this._rootPath)&&(t.src=ss.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...o||{},...t.data},t.loadParser=i??t.loadParser,t.format=a??t.format??rg(t.src),t}}C1.RETINA_PREFIX=/@([0-9\.]+)x/;function rg(e){return e.split(".").pop().split("?").shift().split("#").shift()}const Lc=(e,t)=>{const n=t.split("?")[1];return n&&(e+=`?${n}`),e},P1=class Ga{constructor(t,n){this.linkedSheets=[],this._texture=t instanceof Pt?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=n;const r=parseFloat(n.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Ga.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let n=t;const r=Ga.BATCH_SIZE;for(;n-t<r&&n<this._frameKeys.length;){const o=this._frameKeys[n],i=this._frames[o],a=i.frame;if(a){let s=null,l=null;const u=i.trimmed!==!1&&i.sourceSize?i.sourceSize:i.frame,f=new sr(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);i.rotated?s=new sr(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new sr(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),i.trimmed!==!1&&i.spriteSourceSize&&(l=new sr(Math.floor(i.spriteSourceSize.x)/this.resolution,Math.floor(i.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[o]=new Pt({source:this.textureSource,frame:s,orig:f,trim:l,rotate:i.rotated?2:0,defaultAnchor:i.anchor,defaultBorders:i.borders,label:o.toString()})}n++}}_processAnimations(){const t=this.data.animations||{};for(const n in t){this.animations[n]=[];for(let r=0;r<t[n].length;r++){const o=t[n][r];this.animations[n].push(this.textures[o])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Ga.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Ga.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};P1.BATCH_SIZE=1e3;let kc=P1;const og=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function I1(e,t,n){const r={};if(e.forEach(o=>{r[o]=t}),Object.keys(t.textures).forEach(o=>{r[o]=t.textures[o]}),!n){const o=ss.dirname(e[0]);t.linkedSheets.forEach((i,a)=>{const s=I1([`${o}/${t.data.meta.related_multi_packs[a]}`],i,!0);Object.assign(r,s)})}return r}const ig={extension:Ue.Asset,cache:{test:e=>e instanceof kc,getCacheableAssets:(e,t)=>I1(e,t,!1)},resolver:{extension:{type:Ue.ResolveParser,name:"resolveSpritesheet"},test:e=>{const n=e.split("?")[0].split("."),r=n.pop(),o=n.pop();return r==="json"&&og.includes(o)},parse:e=>{const t=e.split(".");return{resolution:parseFloat(C1.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:Ue.LoadParser,priority:T1.Normal,name:"spritesheetLoader"},async testParse(e,t){return ss.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,n){const{texture:r,imageFilename:o}=t?.data??{};let i=ss.dirname(t.src);i&&i.lastIndexOf("/")!==i.length-1&&(i+="/");let a;if(r instanceof Pt)a=r;else{const u=Lc(i+(o??e.meta.image),t.src);a=(await n.load([u]))[u]}const s=new kc(a.source,e);await s.parse();const l=e?.meta?.related_multi_packs;if(Array.isArray(l)){const u=[];for(const h of l){if(typeof h!="string")continue;let c=i+h;t.data?.ignoreMultiPack||(c=Lc(c,t.src),u.push(n.load({src:c,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(u);s.linkedSheets=f,f.forEach(h=>{h.linkedSheets=[s].concat(s.linkedSheets.filter(c=>c!==h))})}return s},async unload(e,t,n){await n.unload(e.textureSource._sourceOrigin),e.destroy(!1)}}};Lo.add(ig);const Mu=Object.create(null),Uc=Object.create(null);function Gf(e,t){let n=Uc[e];return n===void 0&&(Mu[t]===void 0&&(Mu[t]=1),Uc[e]=n=Mu[t]++),n}let ws;function ag(){return(!ws||ws?.isContextLost())&&(ws=Io.get().createCanvas().getContext("webgl",{})),ws}let _s;function sg(){if(!_s){_s="mediump";const e=ag();e&&e.getShaderPrecisionFormat&&(_s=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?"highp":"mediump")}return _s}function lg(e,t,n){return t?e:n?(e=e.replace("out vec4 finalColor;",""),`
        
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
        `}function ug(e,t,n){const r=n?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(e.substring(0,9)!=="precision"){let o=n?t.requestedFragmentPrecision:t.requestedVertexPrecision;return o==="highp"&&r!=="highp"&&(o="mediump"),`precision ${o} float;
${e}`}else if(r!=="highp"&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}function fg(e,t){return t?`#version 300 es
${e}`:e}const cg={},hg={};function dg(e,{name:t="pixi-program"},n=!0){t=t.replace(/\s+/g,"-"),t+=n?"-fragment":"-vertex";const r=n?cg:hg;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,e.indexOf("#define SHADER_NAME")!==-1?e:`${`#define SHADER_NAME ${t}`}
${e}`}function mg(e,t){return t?e.replace("#version 300 es",""):e}const bu={stripVersion:mg,ensurePrecision:ug,addProgramDefines:lg,setProgramName:dg,insertVersion:fg},vu=Object.create(null),z1=class S0{constructor(t){t={...S0.defaultOptions,...t};const n=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:n,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:sg()},setProgramName:{name:t.name},addProgramDefines:n,insertVersion:n};let o=t.fragment,i=t.vertex;Object.keys(bu).forEach(a=>{const s=r[a];o=bu[a](o,s,!0),i=bu[a](i,s,!1)}),this.fragment=o,this.vertex=i,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=Gf(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const n=`${t.vertex}:${t.fragment}`;return vu[n]||(vu[n]=new S0(t)),vu[n]}};z1.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let Zt=z1;const Dc={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function pg(e){return Dc[e]??Dc.float32}const yg={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function gg({source:e,entryPoint:t}){const n={},r=e.indexOf(`fn ${t}`);if(r!==-1){const o=e.indexOf("->",r);if(o!==-1){const i=e.substring(r,o),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let s;for(;(s=a.exec(i))!==null;){const l=yg[s[3]]??"float32";n[s[2]]={location:parseInt(s[1],10),format:l,stride:pg(l).stride,offset:0,instance:!1,start:0}}}}return n}function Su(e){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,n=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,o=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,a=/struct\s+(\w+)\s*{([^}]+)}/g,s=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=e.match(t)?.map(h=>({group:parseInt(h.match(n)[1],10),binding:parseInt(h.match(r)[1],10),name:h.match(o)[2],isUniform:h.match(o)[1]==="<uniform>",type:h.match(i)[1]}));if(!u)return{groups:[],structs:[]};const f=e.match(a)?.map(h=>{const c=h.match(l)[1],d=h.match(s).reduce((m,p)=>{const[y,x]=p.split(":");return m[y.trim()]=x.trim(),m},{});return d?{name:c,members:d}:null}).filter(({name:h})=>u.some(c=>c.type===h))??[];return{groups:u,structs:f}}var Ba=(e=>(e[e.VERTEX=1]="VERTEX",e[e.FRAGMENT=2]="FRAGMENT",e[e.COMPUTE=4]="COMPUTE",e))(Ba||{});function xg({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Ba.VERTEX|Ba.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Ba.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Ba.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Mg({groups:e}){const t=[];for(let n=0;n<e.length;n++){const r=e[n];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function bg(e,t){const n=new Set,r=new Set,o=[...e.structs,...t.structs].filter(a=>n.has(a.name)?!1:(n.add(a.name),!0)),i=[...e.groups,...t.groups].filter(a=>{const s=`${a.name}-${a.binding}`;return r.has(s)?!1:(r.add(s),!0)});return{structs:o,groups:i}}const wu=Object.create(null);class Yt{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:n,vertex:r,layout:o,gpuLayout:i,name:a}=t;if(this.name=a,this.fragment=n,this.vertex=r,n.source===r.source){const s=Su(n.source);this.structsAndGroups=s}else{const s=Su(r.source),l=Su(n.source);this.structsAndGroups=bg(s,l)}this.layout=o??Mg(this.structsAndGroups),this.gpuLayout=i??xg(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:n}=this,r=t.source+n.source+t.entryPoint+n.entryPoint;this._layoutKey=Gf(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=gg(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const n=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return wu[n]||(wu[n]=new Yt(t)),wu[n]}}const O1=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],vg=O1.reduce((e,t)=>(e[t]=!0,e),{});function Sg(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const F1=class E1{constructor(t,n){this._touched=0,this.uid=zn("uniform"),this._resourceType="uniformGroup",this._resourceId=zn("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,n={...E1.defaultOptions,...n},this.uniformStructures=t;const r={};for(const o in t){const i=t[o];if(i.name=o,i.size=i.size??1,!vg[i.type])throw new Error(`Uniform type ${i.type} is not supported. Supported uniform types are: ${O1.join(", ")}`);i.value??(i.value=Sg(i.type,i.size)),r[o]=i.value}this.uniforms=r,this._dirtyId=1,this.ubo=n.ubo,this.isStatic=n.isStatic,this._signature=Gf(Object.keys(r).map(o=>`${o}-${t[o].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};F1.defaultOptions={ubo:!1,isStatic:!1};let Yl=F1;class _u{constructor(t){this.resources=Object.create(null),this._dirty=!0;let n=0;for(const r in t){const o=t[r];this.setResource(o,n++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let n=0;for(const r in this.resources)t[n++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,n){const r=this.resources[n];t!==r&&(r&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[n]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const n=this.resources;for(const r in n)n[r]._touched=t}destroy(){const t=this.resources;for(const n in t)t[n].off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const n=this.resources;for(const r in n)n[r]===t&&(n[r]=null)}else this._updateKey()}}var wl=(e=>(e[e.WEBGL=1]="WEBGL",e[e.WEBGPU=2]="WEBGPU",e[e.BOTH=3]="BOTH",e))(wl||{});class Kl extends ko{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:n,glProgram:r,groups:o,resources:i,compatibleRenderers:a,groupMap:s}=t;this.gpuProgram=n,this.glProgram=r,a===void 0&&(a=0,n&&(a|=wl.WEBGPU),r&&(a|=wl.WEBGL)),this.compatibleRenderers=a;const l={};if(!i&&!o&&(i={}),i&&o)throw new Error("[Shader] Cannot have both resources and groups");if(!n&&o&&!s)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!n&&o&&s)for(const u in s)for(const f in s[u]){const h=s[u][f];l[h]={group:u,binding:f,name:h}}else if(n&&o&&!s){const u=n.structsAndGroups.groups;s={},u.forEach(f=>{s[f.group]=s[f.group]||{},s[f.group][f.binding]=f.name,l[f.name]=f})}else if(i){o={},s={},n&&n.structsAndGroups.groups.forEach(h=>{s[h.group]=s[h.group]||{},s[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const f in i)l[f]||(o[99]||(o[99]=new _u,this._ownedBindGroups.push(o[99])),l[f]={group:99,binding:u,name:f},s[99]=s[99]||{},s[99][u]=f,u++);for(const f in i){const h=f;let c=i[f];!c.source&&!c._resourceType&&(c=new Yl(c));const d=l[h];d&&(o[d.group]||(o[d.group]=new _u,this._ownedBindGroups.push(o[d.group])),o[d.group].setResource(c,d.binding))}}this.groups=o,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(o,l)}addResource(t,n,r){var o,i;(o=this._uniformBindMap)[n]||(o[n]={}),(i=this._uniformBindMap[n])[r]||(i[r]=t),this.groups[n]||(this.groups[n]=new _u,this._ownedBindGroups.push(this.groups[n]))}_buildResourceAccessor(t,n){const r={};for(const o in n){const i=n[o];Object.defineProperty(r,i.name,{get(){return t[i.group].getResource(i.binding)},set(a){t[i.group].setResource(a,i.binding)}})}return r}destroy(t=!1){this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(n=>{n.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Yt.from(n)),r&&(a=Zt.from(r)),new Kl({gpuProgram:i,glProgram:a,...o})}}const wg={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Au=0,Tu=1,Ru=2,Cu=3,Pu=4,Iu=5,w0=class L1{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Au)}set blend(t){!!(this.data&1<<Au)!==t&&(this.data^=1<<Au)}get offsets(){return!!(this.data&1<<Tu)}set offsets(t){!!(this.data&1<<Tu)!==t&&(this.data^=1<<Tu)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Ru)}set culling(t){!!(this.data&1<<Ru)!==t&&(this.data^=1<<Ru)}get depthTest(){return!!(this.data&1<<Cu)}set depthTest(t){!!(this.data&1<<Cu)!==t&&(this.data^=1<<Cu)}get depthMask(){return!!(this.data&1<<Iu)}set depthMask(t){!!(this.data&1<<Iu)!==t&&(this.data^=1<<Iu)}get clockwiseFrontFace(){return!!(this.data&1<<Pu)}set clockwiseFrontFace(t){!!(this.data&1<<Pu)!==t&&(this.data^=1<<Pu)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=wg[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new L1;return t.depthTest=!1,t.blend=!0,t}};w0.default2d=w0.for2d();let k1=w0;const U1=class _0 extends Kl{constructor(t){t={..._0.defaultOptions,...t},super(t),this.enabled=!0,this._state=k1.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,n,r,o){t.applyFilter(this,n,r,o)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:n,gl:r,...o}=t;let i,a;return n&&(i=Yt.from(n)),r&&(a=Zt.from(r)),new _0({gpuProgram:i,glProgram:a,...o})}};U1.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let ne=U1;const A0=[];Lo.handleByNamedList(Ue.Environment,A0);async function _g(e){if(!e)for(let t=0;t<A0.length;t++){const n=A0[t];if(n.value.test()){await n.value.load();return}}}let _a;function Ag(){if(typeof _a=="boolean")return _a;try{_a=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_a=!1}return _a}var As={exports:{}},Xc;function Tg(){if(Xc)return As.exports;Xc=1,As.exports=e,As.exports.default=e;function e(L,k,U){U=U||2;var N=k&&k.length,H=N?k[0]*U:L.length,K=t(L,0,H,U,!0),Q=[];if(!K||K.next===K.prev)return Q;var ft,zt,It,ve,de,Xt,Ze;if(N&&(K=l(L,k,K,U)),L.length>80*U){ft=It=L[0],zt=ve=L[1];for(var ce=U;ce<H;ce+=U)de=L[ce],Xt=L[ce+1],de<ft&&(ft=de),Xt<zt&&(zt=Xt),de>It&&(It=de),Xt>ve&&(ve=Xt);Ze=Math.max(It-ft,ve-zt),Ze=Ze!==0?32767/Ze:0}return r(K,Q,U,ft,zt,Ze,0),Q}function t(L,k,U,N,H){var K,Q;if(H===V(L,k,U,N)>0)for(K=k;K<U;K+=N)Q=F(K,L[K],L[K+1],Q);else for(K=U-N;K>=k;K-=N)Q=F(K,L[K],L[K+1],Q);return Q&&v(Q,Q.next)&&(X(Q),Q=Q.next),Q}function n(L,k){if(!L)return L;k||(k=L);var U=L,N;do if(N=!1,!U.steiner&&(v(U,U.next)||M(U.prev,U,U.next)===0)){if(X(U),U=k=U.prev,U===U.next)break;N=!0}else U=U.next;while(N||U!==k);return k}function r(L,k,U,N,H,K,Q){if(L){!Q&&K&&d(L,N,H,K);for(var ft=L,zt,It;L.prev!==L.next;){if(zt=L.prev,It=L.next,K?i(L,N,H,K):o(L)){k.push(zt.i/U|0),k.push(L.i/U|0),k.push(It.i/U|0),X(L),L=It.next,ft=It.next;continue}if(L=It,L===ft){Q?Q===1?(L=a(n(L),k,U),r(L,k,U,N,H,K,2)):Q===2&&s(L,k,U,N,H,K):r(n(L),k,U,N,H,K,1);break}}}}function o(L){var k=L.prev,U=L,N=L.next;if(M(k,U,N)>=0)return!1;for(var H=k.x,K=U.x,Q=N.x,ft=k.y,zt=U.y,It=N.y,ve=H<K?H<Q?H:Q:K<Q?K:Q,de=ft<zt?ft<It?ft:It:zt<It?zt:It,Xt=H>K?H>Q?H:Q:K>Q?K:Q,Ze=ft>zt?ft>It?ft:It:zt>It?zt:It,ce=N.next;ce!==k;){if(ce.x>=ve&&ce.x<=Xt&&ce.y>=de&&ce.y<=Ze&&x(H,ft,K,zt,Q,It,ce.x,ce.y)&&M(ce.prev,ce,ce.next)>=0)return!1;ce=ce.next}return!0}function i(L,k,U,N){var H=L.prev,K=L,Q=L.next;if(M(H,K,Q)>=0)return!1;for(var ft=H.x,zt=K.x,It=Q.x,ve=H.y,de=K.y,Xt=Q.y,Ze=ft<zt?ft<It?ft:It:zt<It?zt:It,ce=ve<de?ve<Xt?ve:Xt:de<Xt?de:Xt,co=ft>zt?ft>It?ft:It:zt>It?zt:It,Sa=ve>de?ve>Xt?ve:Xt:de>Xt?de:Xt,hc=p(Ze,ce,k,U,N),dc=p(co,Sa,k,U,N),ie=L.prevZ,ae=L.nextZ;ie&&ie.z>=hc&&ae&&ae.z<=dc;){if(ie.x>=Ze&&ie.x<=co&&ie.y>=ce&&ie.y<=Sa&&ie!==H&&ie!==Q&&x(ft,ve,zt,de,It,Xt,ie.x,ie.y)&&M(ie.prev,ie,ie.next)>=0||(ie=ie.prevZ,ae.x>=Ze&&ae.x<=co&&ae.y>=ce&&ae.y<=Sa&&ae!==H&&ae!==Q&&x(ft,ve,zt,de,It,Xt,ae.x,ae.y)&&M(ae.prev,ae,ae.next)>=0))return!1;ae=ae.nextZ}for(;ie&&ie.z>=hc;){if(ie.x>=Ze&&ie.x<=co&&ie.y>=ce&&ie.y<=Sa&&ie!==H&&ie!==Q&&x(ft,ve,zt,de,It,Xt,ie.x,ie.y)&&M(ie.prev,ie,ie.next)>=0)return!1;ie=ie.prevZ}for(;ae&&ae.z<=dc;){if(ae.x>=Ze&&ae.x<=co&&ae.y>=ce&&ae.y<=Sa&&ae!==H&&ae!==Q&&x(ft,ve,zt,de,It,Xt,ae.x,ae.y)&&M(ae.prev,ae,ae.next)>=0)return!1;ae=ae.nextZ}return!0}function a(L,k,U){var N=L;do{var H=N.prev,K=N.next.next;!v(H,K)&&w(H,N,N.next,K)&&P(H,K)&&P(K,H)&&(k.push(H.i/U|0),k.push(N.i/U|0),k.push(K.i/U|0),X(N),X(N.next),N=L=K),N=N.next}while(N!==L);return n(N)}function s(L,k,U,N,H,K){var Q=L;do{for(var ft=Q.next.next;ft!==Q.prev;){if(Q.i!==ft.i&&b(Q,ft)){var zt=O(Q,ft);Q=n(Q,Q.next),zt=n(zt,zt.next),r(Q,k,U,N,H,K,0),r(zt,k,U,N,H,K,0);return}ft=ft.next}Q=Q.next}while(Q!==L)}function l(L,k,U,N){var H=[],K,Q,ft,zt,It;for(K=0,Q=k.length;K<Q;K++)ft=k[K]*N,zt=K<Q-1?k[K+1]*N:L.length,It=t(L,ft,zt,N,!1),It===It.next&&(It.steiner=!0),H.push(y(It));for(H.sort(u),K=0;K<H.length;K++)U=f(H[K],U);return U}function u(L,k){return L.x-k.x}function f(L,k){var U=h(L,k);if(!U)return k;var N=O(U,L);return n(N,N.next),n(U,U.next)}function h(L,k){var U=k,N=L.x,H=L.y,K=-1/0,Q;do{if(H<=U.y&&H>=U.next.y&&U.next.y!==U.y){var ft=U.x+(H-U.y)*(U.next.x-U.x)/(U.next.y-U.y);if(ft<=N&&ft>K&&(K=ft,Q=U.x<U.next.x?U:U.next,ft===N))return Q}U=U.next}while(U!==k);if(!Q)return null;var zt=Q,It=Q.x,ve=Q.y,de=1/0,Xt;U=Q;do N>=U.x&&U.x>=It&&N!==U.x&&x(H<ve?N:K,H,It,ve,H<ve?K:N,H,U.x,U.y)&&(Xt=Math.abs(H-U.y)/(N-U.x),P(U,L)&&(Xt<de||Xt===de&&(U.x>Q.x||U.x===Q.x&&c(Q,U)))&&(Q=U,de=Xt)),U=U.next;while(U!==zt);return Q}function c(L,k){return M(L.prev,L,k.prev)<0&&M(k.next,L,L.next)<0}function d(L,k,U,N){var H=L;do H.z===0&&(H.z=p(H.x,H.y,k,U,N)),H.prevZ=H.prev,H.nextZ=H.next,H=H.next;while(H!==L);H.prevZ.nextZ=null,H.prevZ=null,m(H)}function m(L){var k,U,N,H,K,Q,ft,zt,It=1;do{for(U=L,L=null,K=null,Q=0;U;){for(Q++,N=U,ft=0,k=0;k<It&&(ft++,N=N.nextZ,!!N);k++);for(zt=It;ft>0||zt>0&&N;)ft!==0&&(zt===0||!N||U.z<=N.z)?(H=U,U=U.nextZ,ft--):(H=N,N=N.nextZ,zt--),K?K.nextZ=H:L=H,H.prevZ=K,K=H;U=N}K.nextZ=null,It*=2}while(Q>1);return L}function p(L,k,U,N,H){return L=(L-U)*H|0,k=(k-N)*H|0,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,k=(k|k<<8)&16711935,k=(k|k<<4)&252645135,k=(k|k<<2)&858993459,k=(k|k<<1)&1431655765,L|k<<1}function y(L){var k=L,U=L;do(k.x<U.x||k.x===U.x&&k.y<U.y)&&(U=k),k=k.next;while(k!==L);return U}function x(L,k,U,N,H,K,Q,ft){return(H-Q)*(k-ft)>=(L-Q)*(K-ft)&&(L-Q)*(N-ft)>=(U-Q)*(k-ft)&&(U-Q)*(K-ft)>=(H-Q)*(N-ft)}function b(L,k){return L.next.i!==k.i&&L.prev.i!==k.i&&!R(L,k)&&(P(L,k)&&P(k,L)&&z(L,k)&&(M(L.prev,L,k.prev)||M(L,k.prev,k))||v(L,k)&&M(L.prev,L,L.next)>0&&M(k.prev,k,k.next)>0)}function M(L,k,U){return(k.y-L.y)*(U.x-k.x)-(k.x-L.x)*(U.y-k.y)}function v(L,k){return L.x===k.x&&L.y===k.y}function w(L,k,U,N){var H=A(M(L,k,U)),K=A(M(L,k,N)),Q=A(M(U,N,L)),ft=A(M(U,N,k));return!!(H!==K&&Q!==ft||H===0&&_(L,U,k)||K===0&&_(L,N,k)||Q===0&&_(U,L,N)||ft===0&&_(U,k,N))}function _(L,k,U){return k.x<=Math.max(L.x,U.x)&&k.x>=Math.min(L.x,U.x)&&k.y<=Math.max(L.y,U.y)&&k.y>=Math.min(L.y,U.y)}function A(L){return L>0?1:L<0?-1:0}function R(L,k){var U=L;do{if(U.i!==L.i&&U.next.i!==L.i&&U.i!==k.i&&U.next.i!==k.i&&w(U,U.next,L,k))return!0;U=U.next}while(U!==L);return!1}function P(L,k){return M(L.prev,L,L.next)<0?M(L,k,L.next)>=0&&M(L,L.prev,k)>=0:M(L,k,L.prev)<0||M(L,L.next,k)<0}function z(L,k){var U=L,N=!1,H=(L.x+k.x)/2,K=(L.y+k.y)/2;do U.y>K!=U.next.y>K&&U.next.y!==U.y&&H<(U.next.x-U.x)*(K-U.y)/(U.next.y-U.y)+U.x&&(N=!N),U=U.next;while(U!==L);return N}function O(L,k){var U=new G(L.i,L.x,L.y),N=new G(k.i,k.x,k.y),H=L.next,K=k.prev;return L.next=k,k.prev=L,U.next=H,H.prev=U,N.next=U,U.prev=N,K.next=N,N.prev=K,N}function F(L,k,U,N){var H=new G(L,k,U);return N?(H.next=N.next,H.prev=N,N.next.prev=H,N.next=H):(H.prev=H,H.next=H),H}function X(L){L.next.prev=L.prev,L.prev.next=L.next,L.prevZ&&(L.prevZ.nextZ=L.nextZ),L.nextZ&&(L.nextZ.prevZ=L.prevZ)}function G(L,k,U){this.i=L,this.x=k,this.y=U,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}e.deviation=function(L,k,U,N){var H=k&&k.length,K=H?k[0]*U:L.length,Q=Math.abs(V(L,0,K,U));if(H)for(var ft=0,zt=k.length;ft<zt;ft++){var It=k[ft]*U,ve=ft<zt-1?k[ft+1]*U:L.length;Q-=Math.abs(V(L,It,ve,U))}var de=0;for(ft=0;ft<N.length;ft+=3){var Xt=N[ft]*U,Ze=N[ft+1]*U,ce=N[ft+2]*U;de+=Math.abs((L[Xt]-L[ce])*(L[Ze+1]-L[Xt+1])-(L[Xt]-L[Ze])*(L[ce+1]-L[Xt+1]))}return Q===0&&de===0?0:Math.abs((de-Q)/Q)};function V(L,k,U,N){for(var H=0,K=k,Q=U-N;K<U;K+=N)H+=(L[Q]-L[K])*(L[K+1]+L[Q+1]),Q=K;return H}return e.flatten=function(L){for(var k=L[0][0].length,U={vertices:[],holes:[],dimensions:k},N=0,H=0;H<L.length;H++){for(var K=0;K<L[H].length;K++)for(var Q=0;Q<k;Q++)U.vertices.push(L[H][K][Q]);H>0&&(N+=L[H-1].length,U.holes.push(N))}return U},As.exports}var Rg=Tg();const n_=n1(Rg);var D1=(e=>(e[e.NONE=0]="NONE",e[e.COLOR=16384]="COLOR",e[e.STENCIL=1024]="STENCIL",e[e.DEPTH=256]="DEPTH",e[e.COLOR_DEPTH=16640]="COLOR_DEPTH",e[e.COLOR_STENCIL=17408]="COLOR_STENCIL",e[e.DEPTH_STENCIL=1280]="DEPTH_STENCIL",e[e.ALL=17664]="ALL",e))(D1||{});class Cg{constructor(t){this.items=[],this._name=t}emit(t,n,r,o,i,a,s,l){const{name:u,items:f}=this;for(let h=0,c=f.length;h<c;h++)f[h][u](t,n,r,o,i,a,s,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const n=this.items.indexOf(t);return n!==-1&&this.items.splice(n,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Pg=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],X1=class G1 extends ko{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const n=[...Pg,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(t={}){const n=t.skipExtensionImports===!0?!0:t.manageImports===!1;await _g(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...G1.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,n){let r=t;if(r instanceof me&&(r={container:r},n&&(Dt(Ln,"passing a second argument is deprecated, please use render options instead"),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const o=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=o?r.clearColor:an.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,n,r){const o=this.view.resolution;this.view.resize(t,n,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==o&&this.runners.resolutionChange.emit(r)}clear(t={}){const n=this;t.target||(t.target=n.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=D1.ALL);const{clear:r,clearColor:o,target:i}=t;an.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(i,r,an.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(n=>{this.runners[n]=new Cg(n)})}_addSystems(t){let n;for(n in t){const r=t[n];this._addSystem(r.value,r.name)}}_addSystem(t,n){const r=new t(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=r,this._systemsHash[n]=r;for(const o in this.runners)this.runners[o].add(r);return this}_addPipes(t,n){const r=n.reduce((o,i)=>(o[i.name]=i.value,o),{});t.forEach(o=>{const i=o.value,a=o.name,s=r[a];this.renderPipes[a]=new i(this,s?new s:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ag())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};X1.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let B1=X1,Ts;function Ig(e){return Ts!==void 0||(Ts=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:e??B1.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Io.get().getWebGLRenderingContext())return!1;let r=Io.get().createCanvas().getContext("webgl",t);const o=!!r?.getContextAttributes()?.stencil;if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),Ts}let Rs;async function zg(e={}){return Rs!==void 0||(Rs=await(async()=>{const t=Io.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(e)).requestDevice(),!0}catch{return!1}})()),Rs}const Gc=["webgl","webgpu","canvas"];async function Og(e){let t=[];e.preference?(t.push(e.preference),Gc.forEach(i=>{i!==e.preference&&t.push(i)})):t=Gc.slice();let n,r={};for(let i=0;i<t.length;i++){const a=t[i];if(a==="webgpu"&&await zg()){const{WebGPURenderer:s}=await vl(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-C-6Psdze.js");return{WebGPURenderer:l}},__vite__mapDeps([8,3,2,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgpu};break}else if(a==="webgl"&&Ig(e.failIfMajorPerformanceCaveat??B1.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:s}=await vl(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-KWClrzU3.js");return{WebGLRenderer:l}},__vite__mapDeps([10,3,9,5,6,7,4]),import.meta.url);n=s,r={...e,...e.webgl};break}else if(a==="canvas")throw r={...e},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(r),o}const N1="8.6.6";class $1{static init(){globalThis.__PIXI_APP_INIT__?.(this,N1)}static destroy(){}}$1.extension=Ue.Application;class Fg{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,N1)}destroy(){this._renderer=null}}Fg.extension={type:[Ue.WebGLSystem,Ue.WebGPUSystem],name:"initHook",priority:-10};const H1=class T0{constructor(...t){this.stage=new me,t[0]!==void 0&&Dt(Ln,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Og(t),T0._plugins.forEach(n=>{n.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Dt(Ln,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,n=!1){const r=T0._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(t),this.renderer=null}};H1._plugins=[];let Ka=H1;Lo.handleByList(Ue.Application,Ka._plugins);Lo.add($1);var _n=(e=>(e[e.MAP_READ=1]="MAP_READ",e[e.MAP_WRITE=2]="MAP_WRITE",e[e.COPY_SRC=4]="COPY_SRC",e[e.COPY_DST=8]="COPY_DST",e[e.INDEX=16]="INDEX",e[e.VERTEX=32]="VERTEX",e[e.UNIFORM=64]="UNIFORM",e[e.STORAGE=128]="STORAGE",e[e.INDIRECT=256]="INDIRECT",e[e.QUERY_RESOLVE=512]="QUERY_RESOLVE",e[e.STATIC=1024]="STATIC",e))(_n||{});class Hi extends ko{constructor(t){let{data:n,size:r}=t;const{usage:o,label:i,shrinkToFit:a}=t;super(),this.uid=zn("buffer"),this._resourceType="buffer",this._resourceId=zn("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,n instanceof Array&&(n=new Float32Array(n)),this._data=n,r??(r=n?.byteLength);const s=!!n;this.descriptor={size:r,usage:o,mappedAtCreation:s,label:i},this.shrinkToFit=a??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&_n.STATIC)}set static(t){t?this.descriptor.usage|=_n.STATIC:this.descriptor.usage&=~_n.STATIC}setDataWithSize(t,n,r){if(this._updateID++,this._updateSize=n*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const o=this._data;if(this._data=t,this._dataInt32=null,!o||o.length!==t.length){!this.shrinkToFit&&o&&t.byteLength<o.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=zn("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function W1(e,t){if(!(e instanceof Hi)){let n=t?_n.INDEX:_n.VERTEX;e instanceof Array&&(t?(e=new Uint32Array(e),n=_n.INDEX|_n.COPY_DST):(e=new Float32Array(e),n=_n.VERTEX|_n.COPY_DST)),e=new Hi({data:e,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:n})}return e}function Eg(e,t,n){const r=e.getAttribute(t);if(!r)return n.minX=0,n.minY=0,n.maxX=0,n.maxY=0,n;const o=r.buffer.data;let i=1/0,a=1/0,s=-1/0,l=-1/0;const u=o.BYTES_PER_ELEMENT,f=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let c=f;c<o.length;c+=h){const d=o[c],m=o[c+1];d>s&&(s=d),m>l&&(l=m),d<i&&(i=d),m<a&&(a=m)}return n.minX=i,n.minY=a,n.maxX=s,n.maxY=l,n}function Lg(e){return(e instanceof Hi||Array.isArray(e)||e.BYTES_PER_ELEMENT)&&(e={buffer:e}),e.buffer=W1(e.buffer,!1),e}class q1 extends ko{constructor(t={}){super(),this.uid=zn("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Po,this._boundsDirty=!0;const{attributes:n,indexBuffer:r,topology:o}=t;if(this.buffers=[],this.attributes={},n)for(const i in n)this.addAttribute(i,n[i]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=o||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const n=this.attributes[t];return n.buffer.data.length/(n.stride/4||n.size)}return 0}addAttribute(t,n){const r=Lg(n);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=W1(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Eg(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(n=>n.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}var V1=`in vec2 aPosition;
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
`,kg=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Bc=`struct GlobalFilterUniforms {
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
}`;const Y1=class K1 extends ne{constructor(t){t={...K1.defaultOptions,...t};const n=Yt.from({vertex:{source:Bc,entryPoint:"mainVertex"},fragment:{source:Bc,entryPoint:"mainFragment"}}),r=Zt.from({vertex:V1,fragment:kg,name:"alpha-filter"}),{alpha:o,...i}=t,a=new Yl({uAlpha:{value:o,type:"f32"}});super({...i,gpuProgram:n,glProgram:r,resources:{alphaUniforms:a}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Y1.defaultOptions={alpha:1};let Ug=Y1;const j1={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Dg=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Xg(e){const t=j1[e],n=t.length;let r=Dg,o="";const i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let a;for(let s=0;s<e;s++){let l=i.replace("%index%",s.toString());a=s,s>=n&&(a=e-s-1),l=l.replace("%value%",t[a].toString()),o+=l,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r}const Gg=`
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
    }`;function Bg(e,t){const n=Math.ceil(e/2);let r=Gg,o="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let a=0;a<e;a++){let s=i.replace("%index%",a.toString());s=s.replace("%sampleIndex%",`${a-(n-1)}.0`),o+=s,o+=`
`}return r=r.replace("%blur%",o),r=r.replace("%size%",e.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function Ng(e,t){const n=Bg(t,e),r=Xg(t);return Zt.from({vertex:n,fragment:r,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var $g=`

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
}`;function Hg(e,t){const n=j1[t],r=n.length,o=[],i=[],a=[];for(let h=0;h<t;h++){o[h]=`@location(${h}) offset${h}: vec2<f32>,`,e?i[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:i[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const c=h<r?h:t-h-1,d=n[c].toString();a[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const s=o.join(`
`),l=i.join(`
`),u=a.join(`
`),f=$g.replace("%blur-struct%",s).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",s).replace("%blur-sampling%",u).replace("%dimension%",e?"z":"w");return Yt.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}const Q1=class Z1 extends ne{constructor(t){t={...Z1.defaultOptions,...t};const n=Ng(t.horizontal,t.kernelSize),r=Hg(t.horizontal,t.kernelSize);super({glProgram:n,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,n,r,o){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,n,r,o);else{const i=Wn.getSameSizeTexture(n);let a=n,s=i;this._state.blend=!1;const l=t.renderer.type===wl.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,a,s,u===0?!0:l);const f=s;s=a,a=f}this._state.blend=!0,t.applyFilter(this,a,r,o),Wn.returnTexture(i)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Q1.defaultOptions={strength:8,quality:4,kernelSize:5};let Nc=Q1;var Wg=`
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
`,$c=`struct GlobalFilterUniforms {
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
}`;class qg extends ne{constructor(t={}){const n=new Yl({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),r=Yt.from({vertex:{source:$c,entryPoint:"mainVertex"},fragment:{source:$c,entryPoint:"mainFragment"}}),o=Zt.from({vertex:V1,fragment:Wg,name:"color-matrix-filter"});super({...t,gpuProgram:r,glProgram:o,resources:{colorMatrixUniforms:n}}),this.alpha=1}_loadMatrix(t,n=!1){let r=t;n&&(this._multiply(r,this.matrix,t),r=this._colorMatrix(r)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=r,this.resources.colorMatrixUniforms.update()}_multiply(t,n,r){return t[0]=n[0]*r[0]+n[1]*r[5]+n[2]*r[10]+n[3]*r[15],t[1]=n[0]*r[1]+n[1]*r[6]+n[2]*r[11]+n[3]*r[16],t[2]=n[0]*r[2]+n[1]*r[7]+n[2]*r[12]+n[3]*r[17],t[3]=n[0]*r[3]+n[1]*r[8]+n[2]*r[13]+n[3]*r[18],t[4]=n[0]*r[4]+n[1]*r[9]+n[2]*r[14]+n[3]*r[19]+n[4],t[5]=n[5]*r[0]+n[6]*r[5]+n[7]*r[10]+n[8]*r[15],t[6]=n[5]*r[1]+n[6]*r[6]+n[7]*r[11]+n[8]*r[16],t[7]=n[5]*r[2]+n[6]*r[7]+n[7]*r[12]+n[8]*r[17],t[8]=n[5]*r[3]+n[6]*r[8]+n[7]*r[13]+n[8]*r[18],t[9]=n[5]*r[4]+n[6]*r[9]+n[7]*r[14]+n[8]*r[19]+n[9],t[10]=n[10]*r[0]+n[11]*r[5]+n[12]*r[10]+n[13]*r[15],t[11]=n[10]*r[1]+n[11]*r[6]+n[12]*r[11]+n[13]*r[16],t[12]=n[10]*r[2]+n[11]*r[7]+n[12]*r[12]+n[13]*r[17],t[13]=n[10]*r[3]+n[11]*r[8]+n[12]*r[13]+n[13]*r[18],t[14]=n[10]*r[4]+n[11]*r[9]+n[12]*r[14]+n[13]*r[19]+n[14],t[15]=n[15]*r[0]+n[16]*r[5]+n[17]*r[10]+n[18]*r[15],t[16]=n[15]*r[1]+n[16]*r[6]+n[17]*r[11]+n[18]*r[16],t[17]=n[15]*r[2]+n[16]*r[7]+n[17]*r[12]+n[18]*r[17],t[18]=n[15]*r[3]+n[16]*r[8]+n[17]*r[13]+n[18]*r[18],t[19]=n[15]*r[4]+n[16]*r[9]+n[17]*r[14]+n[18]*r[19]+n[19],t}_colorMatrix(t){const n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n}brightness(t,n){const r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}tint(t,n){const[r,o,i]=an.shared.setValue(t).toArray(),a=[r,0,0,0,0,0,o,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)}greyscale(t,n){const r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,n)}grayscale(t,n){this.greyscale(t,n)}blackAndWhite(t){const n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)}hue(t,n){t=(t||0)/180*Math.PI;const r=Math.cos(t),o=Math.sin(t),i=Math.sqrt,a=1/3,s=i(a),l=r+(1-r)*a,u=a*(1-r)-s*o,f=a*(1-r)+s*o,h=a*(1-r)+s*o,c=r+a*(1-r),d=a*(1-r)-s*o,m=a*(1-r)-s*o,p=a*(1-r)+s*o,y=r+a*(1-r),x=[l,u,f,0,0,h,c,d,0,0,m,p,y,0,0,0,0,0,1,0];this._loadMatrix(x,n)}contrast(t,n){const r=(t||0)+1,o=-.5*(r-1),i=[r,0,0,0,o,0,r,0,0,o,0,0,r,0,o,0,0,0,1,0];this._loadMatrix(i,n)}saturate(t=0,n){const r=t*2/3+1,o=(r-1)*-.5,i=[r,o,o,0,0,o,r,o,0,0,o,o,r,0,0,0,0,0,1,0];this._loadMatrix(i,n)}desaturate(){this.saturate(-1)}negative(t){const n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)}sepia(t){const n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)}technicolor(t){const n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)}polaroid(t){const n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)}toBGR(t){const n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)}kodachrome(t){const n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)}browni(t){const n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)}vintage(t){const n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)}colorTone(t,n,r,o,i){t||(t=.2),n||(n=.15),r||(r=16770432),o||(o=3375104);const a=an.shared,[s,l,u]=a.setValue(r).toArray(),[f,h,c]=a.setValue(o).toArray(),d=[.3,.59,.11,0,0,s,l,u,t,0,f,h,c,n,0,s-f,l-h,u-c,0,0];this._loadMatrix(d,i)}night(t,n){t||(t=.1);const r=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(r,n)}predator(t,n){const r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,n)}lsd(t){const n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}}function Hc(e,t,n,r,o,i,a,s){const l=a-n,u=s-r,f=o-n,h=i-r,c=e-n,d=t-r,m=l*l+u*u,p=l*f+u*h,y=l*c+u*d,x=f*f+h*h,b=f*c+h*d,M=1/(m*x-p*p),v=(x*y-p*b)*M,w=(m*b-p*y)*M;return v>=0&&w>=0&&v+w<1}const J1=class t2 extends q1{constructor(...t){let n=t[0]??{};n instanceof Float32Array&&(Dt(Ln,"use new MeshGeometry({ positions, uvs, indices }) instead"),n={positions:n,uvs:t[1],indices:t[2]}),n={...t2.defaultOptions,...n};const r=n.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=n.uvs||new Float32Array([0,0,1,0,1,1,0,1]),i=n.indices||new Uint32Array([0,1,2,0,2,3]),a=n.shrinkBuffersToFit,s=new Hi({data:r,label:"attribute-mesh-positions",shrinkToFit:a,usage:_n.VERTEX|_n.COPY_DST}),l=new Hi({data:o,label:"attribute-mesh-uvs",shrinkToFit:a,usage:_n.VERTEX|_n.COPY_DST}),u=new Hi({data:i,label:"index-mesh-buffer",shrinkToFit:a,usage:_n.INDEX|_n.COPY_DST});super({attributes:{aPosition:{buffer:s,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:u,topology:n.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};J1.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let e2=J1;class Vg extends Uf{constructor(...t){let n=t[0];n instanceof q1&&(Dt(Ln,"Mesh: use new Mesh({ geometry, shader }) instead"),n={geometry:n,shader:t[1]},t[3]&&(Dt(Ln,"Mesh: drawMode argument has been removed, use geometry.topology instead"),n.geometry.topology=t[3]));const{geometry:r,shader:o,texture:i,roundPixels:a,state:s,...l}=n;super({label:"Mesh",...l}),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=o??null,this.texture=i??o?.texture??Pt.WHITE,this.state=s??k1.for2d(),this._geometry=r,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=a??!1}get material(){return Dt(Ln,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=Pt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof e2?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){const{x:n,y:r}=t;if(!this.bounds.containsPoint(n,r))return!1;const o=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){const a=this.geometry.getIndex().data,s=a.length;for(let l=0;l+2<s;l+=i){const u=a[l]*2,f=a[l+1]*2,h=a[l+2]*2;if(Hc(n,r,o[u],o[u+1],o[f],o[f+1],o[h],o[h+1]))return!0}}else{const a=o.length/2;for(let s=0;s+2<a;s+=i){const l=s*2,u=(s+1)*2,f=(s+2)*2;if(Hc(n,r,o[l],o[l+1],o[u],o[u+1],o[f],o[f+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}}class Yg{constructor({matrix:t,observer:n}={}){this.dirty=!0,this._matrix=t??new ze,this.observer=n,this.position=new rn(this,0,0),this.scale=new rn(this,1,1),this.pivot=new rn(this,0,0),this.skew=new rn(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const n2=class js extends Uf{constructor(...t){let n=t[0]||{};n instanceof Pt&&(n={texture:n}),t.length>1&&(Dt(Ln,"use new TilingSprite({ texture, width:100, height:100 }) instead"),n.width=t[1],n.height=t[2]),n={...js.defaultOptions,...n};const{texture:r,anchor:o,tilePosition:i,tileScale:a,tileRotation:s,width:l,height:u,applyAnchorToTexture:f,roundPixels:h,...c}=n??{};super({label:"TilingSprite",...c}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new rn({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=f,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new Yg({observer:{_onUpdate:()=>this.onViewUpdate()}}),o&&(this.anchor=o),this.tilePosition=i,this.tileScale=a,this.tileRotation=s,this.roundPixels=h??!1}static from(t,n={}){return typeof t=="string"?new js({texture:Ko.get(t),...n}):new js({texture:t,...n})}get uvRespectAnchor(){return ro("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){ro("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=Pt.EMPTY);const n=this._texture;n!==t&&(n&&n.dynamic&&n.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,n){typeof t=="object"&&(n=t.height??t.width,t=t.width),this._width=t,this._height=n??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,n=this._anchor,r=this._width,o=this._height;t.maxX=-n._x*r,t.minX=t.maxX+r,t.maxY=-n._y*o,t.minY=t.maxY+o}containsPoint(t){const n=this._width,r=this._height,o=-n*this._anchor._x;let i=0;return t.x>=o&&t.x<=o+n&&(i=-r*this._anchor._y,t.y>=i&&t.y<=i+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){const r=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(r)}this._texture=null}};n2.defaultOptions={texture:Pt.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let Kg=n2;const Aa=new Map;function jg(e,t){if(!Aa.has(e)){const n=new Pt({source:new Df({resource:e,...t})}),r=()=>{Aa.get(e)===n&&Aa.delete(e)};n.once("destroy",r),n.source.once("destroy",r),Aa.set(e,n)}return Aa.get(e)}const r2=class o2{constructor(t={}){if(this.uid=zn("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...o2.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let n=0;n<t.colorTextures;n++)this.colorTextures.push(new kn({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const n=this.colorTexture.source;this.resize(n.width,n.height,n._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof Pt||t.depthStencilTexture instanceof kn?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new kn({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,n,r=this.resolution,o=!1){this.dirtyId++,this.colorTextures.forEach((i,a)=>{o&&a===0||i.source.resize(t,n,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,n,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};r2.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let Qg=r2;class Bf extends Pt{static create(t){return new Bf({source:new kn(t)})}resize(t,n,r){return this.source.resize(t,n,r),this}}const Nf=class i2{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...i2.defaultOptions,...t},t.view&&(Dt(Ln,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new sr(0,0,t.width,t.height),this.canvas=t.canvas||Io.get().createCanvas(),this.antialias=!!t.antialias,this.texture=jg(this.canvas,t),this.renderTarget=new Qg({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,n,r){this.texture.source.resize(t,n,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!t?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Nf.extension={type:[Ue.WebGLSystem,Ue.WebGPUSystem,Ue.CanvasSystem],name:"view",priority:0};Nf.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let Zg=Nf;Lo.add(ey,ny);const Jt={},sa={},Wc=new Map,xr={};function R0(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(n),n.src=e})}async function Jg(e){const t=window.MAP;Object.assign(Jt,window.META,t.decometa||{});for(const s of Object.keys(Jt)){const l=Jt[s].gear;if(l)for(const u in l)for(const f of l[u])Jt[s+"__"+u+f]=Jt[s]}const n=Object.keys(Jt),r=["ground","minimap","water_mask","water_calm"],o=n.length+r.length;let i=0;const a=()=>e(++i/o);await Promise.all([...n.map(async s=>{const l=await R0("assets/"+s+".png");if(xr[s]=l,l.naturalWidth){const u=Pt.from(l);u.source.scaleMode="nearest",sa[s]=u}a()}),...r.map(async s=>{xr[s]=await R0("assets/"+s+(s==="ground"?".webp":".png")),a()})])}function jl(e){return!!sa[e]}function tx(){return Object.values(sa)}const qc=new Set;function a2(e){sa[e]||qc.has(e)||!Jt[e]||(qc.add(e),R0("assets/"+e+".png").then(t=>{if(xr[e]=t,t.naturalWidth){const n=Pt.from(t);n.source.scaleMode="nearest",sa[e]=n}}))}function ex(e){for(const t of e){const n=Jt[t]&&Jt[t].gear;n&&n.w&&n.w.includes(0)&&a2(t+"__w0")}}function xo(e,t,n,r){const o=Jt[e],i=sa[e];if(o&&!i&&e.includes("__"))return a2(e),null;if(!o||!i)return null;let a=0,s=0;if(o.anims&&t){const f=o.anims[t]||o.anims.idle||o.anims.walk||Object.values(o.anims)[0],h=o.dirs||1,c=h>=16?(n%16+16)%16:h>1?Math.round(n/2)%h:0;a=f.row+c,s=(r%f.n+f.n)%f.n}else o.frames&&o.frames>1&&(s=(r%o.frames+o.frames)%o.frames);const l=e+"|"+a+"|"+s;let u=Wc.get(l);if(!u){if((s+1)*o.fw>i.width||(a+1)*o.fh>i.height)return null;u=new Pt({source:i.source,frame:new sr(s*o.fw,a*o.fh,o.fw,o.fh)}),Wc.set(l,u)}return u}function Qs(e,t,n){const r=Jt[e];if(!r||!r.anims)return 0;const o=r.anims[t]||r.anims.idle||r.anims.walk;return Math.floor(n*1e3/o.ms)}function nx(){const e=xr.ground;if(!e||!e.naturalWidth)return[];const t=2048,n=[];for(let r=0;r<e.naturalHeight;r+=t)for(let o=0;o<e.naturalWidth;o+=t){const i=Math.min(t,e.naturalWidth-o),a=Math.min(t,e.naturalHeight-r),s=document.createElement("canvas");s.width=i,s.height=a,s.getContext("2d").drawImage(e,o,r,i,a,0,0,i,a);const l=Pt.from(s);l.source.scaleMode="nearest",n.push({tex:l,x:o,y:r})}return n}const I=Math.round,J=Math.PI*2,Qt=e=>1-(1-e)*(1-e);function Cn(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=I(n-a*o/2),u=I(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++){const c=t[h];for(let d=0;d<a;d++)c[d]===f&&e.fillRect(l+d*o,u+h*o,o,o)}}}function Rn(e){const t=Jt[e.sprite];return(t?t.ay:50)*(e.scale||1)/$.ZK}function Oe(e){const t=e.uid!==void 0?ht(e.uid):null;return t&&!t.dead&&(e.x=t.x,e.y=t.y),t}const rx=[".oooooo.","oiwwiiio","oiwiiiio","oiiiiiio",".oiiiio.",".oiwiio.","..oiio..","..oiio..","...oo..."],ox={o:"#3a1410",i:"#f2e4c4",w:"#ffffff"};function ix(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=g(-.35,.35);at.sfx("item_crit",t,n,.9),T({type:"custom",layer:"top",add:!0,dur:.36,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.55),u=Math.min(1,a*3.5);i.globalAlpha=a<.45?1:(1-a)/.55;for(let f=0;f<=26;f++){const h=f/26;if(h>u)break;const c=o-Math.PI/2+r*(-1.35+2.7*h),d=u-h,m=I(2+7*Math.sin(Math.PI*h));i.fillStyle=d<.08?"#ffffff":d<.28?"#ffd8a8":d<.6?"#ff6a3a":"#c0181a",i.fillRect(I(s+Math.cos(c)*36-m/2),I(l+10+Math.sin(c)*24-m/2),m,m)}if(a<.3){const f=1-a/.3,h=8+26*f;i.globalAlpha=f,i.fillStyle="#fff0e0",i.fillRect(I(s-h),I(l)-1,I(h*2),3),i.fillRect(I(s)-1,I(l-h*.7),3,I(h*1.4)),i.fillStyle="#ff5a3a";for(let c=0;c<4;c++){const d=h*.55;i.fillRect(I(s+(c&1?d:-d)*.7)-2,I(l+(c&2?d:-d)*.5)-2,4,4)}}}}),T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.22),u=1.5-.95*l*l;if(!s.hit&&l>=1){s.hit=!0;for(let d=0;d<9;d++){const m=Math.random()*J,p=g(1.5,3.5);E(t,n,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2),.45,d%3?"#ff5a3a":"#ffd8a8",3,3,!0)}for(let d=0;d<6;d++){const m=Math.random()*J,p=g(1,2.5);E(t,n,.55,Math.cos(m)*p,Math.sin(m)*p,g(1.5,3),.6,"#f2e4c4",2,9,!1)}ot(4)}const[f,h]=C(t,n,u);i.globalAlpha=a<.6?1:(1-a)/.4;const c=l>=1&&a<.35?(Math.random()-.5)*3:0;Cn(i,rx,f+c,h-6,3,ox)}})}function ax(e){const t=[e.x,e.y];for(const a of String(e.pts||"").split(";")){const s=a.split(",");s.length===2&&s[0]!==""&&t.push(+s[0],+s[1])}const n=t.length/2-1;if(n<1)return;const r=Math.random()*999,o=.05,i=.42+n*o;at.sfx("item_chain",t[2],t[3],1),E(e.x,e.y,.8,0,0,1.5,.3,"#e8f6ff",4,0,!0),T({type:"custom",layer:"top",add:!0,dur:i,x:e.x,y:e.y,sp:0,draw(a,s,l){const u=s*i,f=Math.floor(S.T*28);for(;l.sp<n&&u>=l.sp*o;){const h=t[l.sp*2+2],c=t[l.sp*2+3];for(let d=0;d<7;d++){const m=Math.random()*J,p=g(2,4.5);E(h,c,.5,Math.cos(m)*p,Math.sin(m)*p,g(.5,2.5),.3,d%3?"#bfeaff":"#ffffff",2,3,!0)}l.sp++}a.lineJoin="miter";for(let h=0;h<n;h++){const c=u-h*o;if(c<0)break;const d=Math.max(0,1-c/.38);if(d<=0)continue;const[m,p]=C(t[h*2],t[h*2+1],h?.5:.7),[y,x]=C(t[h*2+2],t[h*2+3],.5),b=y-m,M=x-p,v=Math.hypot(b,M)||1,w=-M/v,_=b/v,A=Math.min(16,4+v*.1),R=7;a.beginPath(),a.moveTo(m,p);for(let G=1;G<R;G++){const V=(W(r+h*31+G*7+f*13)-.5)*2*A;a.lineTo(m+b*G/R+w*V,p+M*G/R+_*V)}a.lineTo(y,x),a.globalAlpha=d*.4,a.strokeStyle="#5a7aff",a.lineWidth=8,a.stroke(),a.globalAlpha=d*.85,a.strokeStyle="#9ae0ff",a.lineWidth=3.5,a.stroke(),a.globalAlpha=d,a.strokeStyle="#ffffff",a.lineWidth=1.5,a.stroke();const P=2+(W(r+h)*3|0),z=(W(r+h*31+P*7+f*13)-.5)*2*A,O=W(r+h*5+f)<.5?1:-1,F=m+b*P/R+w*z,X=p+M*P/R+_*z;if(a.beginPath(),a.moveTo(F,X),a.lineTo(F+w*O*12+b/v*7,X+_*O*12+M/v*7),a.lineTo(F+w*O*17+b/v*17,X+_*O*17+M/v*17),a.globalAlpha=d*.75,a.strokeStyle="#bfeaff",a.lineWidth=1.5,a.stroke(),c<.16){const G=1-c/.16,V=4+G*11;a.globalAlpha=G,a.fillStyle="#e8f6ff",a.fillRect(I(y-V),I(x)-1,I(V*2),3),a.fillRect(I(y)-1,I(x-V),3,I(V*2)),a.fillStyle="#7ac8ff",a.fillRect(I(y)-4,I(x)-4,8,8)}}}}),ot(2)}const sx=["....bbb....","....bwb....","....bwb....","....bwb....","....bwb....","....bwb....",".hhhhhhhhh.","hHMMMHHHHHh","hHHHHHHHHHh","hHHHHHHHHHh",".hhhhhhhhh."],lx={h:"#24202c",H:"#7a8094",M:"#c8d0e0",b:"#3a2214",w:"#9a6434"};function ux(e){const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*J;at.sfx("item_bash",t,n,1),T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(i,a,s){const l=Math.min(1,a/.24),u=1.9-1.35*l*l;if(!s.hit&&l>=1){s.hit=!0,T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(d,m){d.globalAlpha=(1-m)*.85,st(t,n,.3+1.3*Qt(m),"#c8a878",null,7*(1-m)+1),d.globalAlpha=(1-m)*.5,st(t,n,.25+.8*Qt(m),null,"#5a4630"),d.globalAlpha=1-m,d.strokeStyle="#2e2014",d.lineWidth=2;for(let p=0;p<7;p++){const y=o+p/7*J;d.beginPath();for(let x=0;x<=3;x++){const b=.2+x*.28,M=y+(W(o+p*9+x)-.5)*.7,[v,w]=C(t+Math.cos(M)*b,n+Math.sin(M)*b);x?d.lineTo(v,w):d.moveTo(v,w)}d.stroke()}}}),T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=C(t,n,.15),x=10+m*26;d.globalAlpha=1-m,d.fillStyle="#fff4d8";for(let b=0;b<10;b++){const M=b/10*J;d.fillRect(I(p+Math.cos(M)*x)-2,I(y+Math.sin(M)*x*.5)-2,4,4)}}});for(let d=0;d<22;d++){const m=Math.random()*J,p=g(1.5,4);E(t,n,.1,Math.cos(m)*p,Math.sin(m)*p,g(.6,1.8),g(.5,.9),d%3?"#b89a6a":"#e4d0a8",4,5,!1,.9)}for(let d=0;d<8;d++){const m=Math.random()*J,p=g(1,3);E(t,n,.2,Math.cos(m)*p,Math.sin(m)*p,g(2,4),.8,"#7a7468",3,12,!1)}ot(5)}const[f,h]=C(t,n,u),c=l>=1&&a<.34?2:0;i.globalAlpha=a<.6?1:(1-a)/.4,i.translate(I(f),I(h-14+c)),i.rotate(r*.9*(1-l)),Cn(i,sx,0,0,3,lx)}})}function fx(e,t,n,r,o){for(let i=0;i<9;i++){const a=r*6+i*.7+o,s=5+i*1.6;e.globalAlpha=1-i/11,e.fillStyle=i%3?"#ffd8a0":"#ffffff",e.fillRect(I(t+Math.cos(a)*s)-1,I(n-4+Math.sin(a)*s*.35)-1,i<4?3:2,i<4?3:2)}e.globalAlpha=1;for(let i=0;i<2;i++){const a=-r*4+i*Math.PI,s=I(t+Math.cos(a)*18),l=I(n-2+Math.sin(a)*5);e.fillStyle="#ff9a3a",e.fillRect(s-3,l-1,7,3),e.fillRect(s-1,l-3,3,7),e.fillStyle="#fff2c8",e.fillRect(s,l,1,1)}}const cx=["..rrrrrrr..",".rRRRRRRRr.","rRkkRRRkkRr","rRwkkRkkwRr","rRRRRkRRRRr","rRoRRRRRoRr",".rRkwwwkRr.","..rRkkkRr..","...rrrrr..."],hx={r:"#4a0a0a",R:"#d8302a",o:"#ff8a4a",k:"#140406",w:"#fff0d0"};function dx(e){at.sfx("item_berserk",e.x,e.y,1);const t=Math.random()*99;T({type:"custom",layer:"ground",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){Oe(o);const i=.32,a=.6+1.5*Math.min(1,r*2.2);n.globalAlpha=1-r;for(let s=0;s<14;s++){const l=s/14*J+t,u=a*(.65+.35*W(t+s)),[f,h]=C(o.x+Math.cos(l-.13)*i,o.y+Math.sin(l-.13)*i),[c,d]=C(o.x+Math.cos(l+.13)*i,o.y+Math.sin(l+.13)*i),[m,p]=C(o.x+Math.cos(l)*u,o.y+Math.sin(l)*u);n.fillStyle=s%2?"#ff3a2a":"#b0140c",n.beginPath(),n.moveTo(f,h),n.lineTo(m,p),n.lineTo(c,d),n.closePath(),n.fill()}st(o.x,o.y,.4+r*1.7,"#ff6a3a",null,4*(1-r)+1)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),a=i?Rn(i):.8,s=r<.06?2:r<.14?4:3,[l,u]=C(o.x,o.y,a+.32+r*.15),f=r<.7?1:(1-r)/.3;Mt(!0);const h=Bt();h.globalAlpha=f*(.35+.2*Math.sin(r*40)),h.fillStyle="#ff2a1a",h.fillRect(I(l-22),I(u-18),44,36),h.globalAlpha=1,Mt(!1),n.globalAlpha=f,Cn(n,cx,l,u,s,hx)}});for(let n=0;n<26;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.1,.6),g(-.4,.4),g(-.4,.4),g(1.5,3),.7,n%3===0?"#ff9a6a":n%3===1?"#ff4a2a":"#c01a10",3,-1,!0);ot(3)}const mx=["g.......g","gGbbbbbGg","gGBBBBBGg",".gGBBBGg.","..gGGGg..","...gGg...","....g....","...gGg...","..gGGGg..",".ggggggg."],px={g:"#6a4410",G:"#e8b84a",b:"#ff4a5a",B:"#9a0c24"};function yx(e){at.sfx("item_bloodlust",e.x,e.y,1);const t=Math.random()<.5?1:-1;T({type:"custom",layer:"top",dur:1.25,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),a=i?Rn(i):.8,[s,l]=C(o.x,o.y,a+.45),u=C(o.x,o.y,0)[1],f=t*1.9*Qt(Math.min(1,r/.3)),h=r<.8?1:(1-r)/.2;if(r>.22&&r<.85){const c=Math.cos(f),d=Math.sin(f),m=t*12,p=-15,y=s+m*c-p*d,x=l+m*d+p*c,b=r<.7?3:2;n.globalAlpha=h;for(let M=0;M<=14;M++){const v=M/14,w=x+(u-x)*v,_=y+Math.sin(S.T*22+M)*1.5+t*v*6;n.fillStyle=M%3?"#b0102a":"#ff3a4a",n.fillRect(I(_)-1,I(w),b,I((u-x)/14)+1)}Math.random()<.6&&E(o.x+g(-.2,.2),o.y+g(-.2,.2),.02,g(-1,1),g(-1,1),g(.8,1.8),.4,Math.random()<.5?"#9a0c24":"#d01830",2,9,!1)}n.globalAlpha=h,n.translate(I(s),I(l)),n.rotate(f),Cn(n,mx,0,0,3,px)}}),T({type:"custom",layer:"ground",dur:1.6,delay:.3,x:e.x,y:e.y,draw(n,r,o){const i=.15+.6*Qt(Math.min(1,r/.45)),a=r<.6?.55:.55*(1-r)/.4;n.globalAlpha=a,st(o.x,o.y,i,"#ff4a5a","#6e0818",1.5),n.globalAlpha=a*.6,st(o.x-i*.25,o.y-i*.25,i*.35,null,"#c0203a")}})}function gx(e,t,n){const[r,o]=C(t.x,t.y,Rn(t)*.55),i=t.scale||1;for(let a=0;a<4;a++){const s=n*3.2+a*J/4+t.id,l=I(r+Math.cos(s)*22*i),u=I(o+Math.sin(s)*8*i+Math.sin(n*5+a)*2);e.globalAlpha=Math.sin(s)>0?.95:.45,e.fillStyle="#4a0410",e.fillRect(l-2,u-1,5,4),e.fillRect(l-1,u-3,3,2),e.fillStyle="#9a0c24",e.fillRect(l-1,u-1,3,3),e.fillRect(l,u-2,1,1),e.fillStyle="#ff7a8a",e.fillRect(l-1,u-1,1,1)}e.globalAlpha=1,Math.random()<.06&&E(t.x+g(-.3,.3),t.y+g(-.3,.3),.5,0,0,-.2,.5,"#7a0818",2,3,!1)}function xx(e){at.sfx("item_drain",e.ex,e.ey,.5);const t=e.x,n=e.y,r=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,uid:e.uid,ex:e.ex,ey:e.ey,draw(o,i,a){const s=ht(a.uid);s&&!s.dead&&(a.ex=s.x,a.ey=s.y);const[l,u]=C(t,n,.5),[f,h]=C(a.ex,a.ey,.6),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=i>.75?(1-i)/.25:1;for(let b=0;b<3;b++){const M=(b-1)*.9+.3*Math.sin(r+b),v=Math.min(1,i*1.4-b*.1);if(!(v<=0))for(let w=0;w<7;w++){const _=v-w*.045;if(_<0)break;const A=Math.sin(_*Math.PI)*m*.28*M+Math.sin(_*14+b*2+S.T*10)*3,R=l+c*_+p*A,P=u+d*_+y*A-Math.sin(_*Math.PI)*14,z=w===0?4:w<3?3:2;o.globalAlpha=(1-w/7)*x,w===0&&(o.globalAlpha*=.35,o.fillStyle="#ff2a40",o.fillRect(I(R-5),I(P-5),10,10),o.globalAlpha=x),o.fillStyle=w===0?"#ff8a96":w<3?"#e0203a":"#8a0a1e",o.fillRect(I(R-z/2),I(P-z/2),z,z)}}if(!a.pop&&i>.72){a.pop=!0;for(let b=0;b<4;b++)E(a.ex+g(-.2,.2),a.ey+g(-.2,.2),.6,0,0,g(.8,1.5),.4,"#ff6a7a",2,0,!0)}}})}const oi=["#fbe8ff","#d8a8ff","#a060f0","#5a2aa0"];function Mx(e){const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=r-o<t-n?1:-1;at.sfx("item_hex",t,n,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:t,y:n,draw(a,s){const[l,u]=C(r,o,.7),[f,h]=C(t,n,.7),c=f-l,d=h-u,m=Math.hypot(c,d)||1,p=-d/m,y=c/m,x=Math.min(1,s*2.6);a.globalAlpha=s<.6?1:(1-s)/.4;for(let b=0;b<=30;b++){const M=b/30;if(M>x)break;const v=Math.sin(M*J*2.5-s*9)*8*(1-M*.6);a.fillStyle=oi[(b+(s*24|0))%3],a.fillRect(I(l+c*M+p*v)-1,I(u+d*M+y*v)-1,3,3)}}}),T({type:"custom",layer:"top",dur:.46,x:t,y:n,draw(a,s,l){const[u,f]=C(t,n,.6),h=Math.min(1,s/.42),c=s<.55?1:(1-s)/.45,d=x=>-Math.PI/2+i*(-1.5+3*x);Mt(!0);const m=Bt();for(let x=0;x<20;x++){const b=h-x*.025;if(b<0)break;const M=d(b),v=I(5-x*.2);m.globalAlpha=(1-x/20)*c,m.fillStyle=oi[x<3?0:x<9?1:2],m.fillRect(I(u+Math.cos(M)*42-v/2),I(f+Math.sin(M)*24-v/2),v,v)}m.globalAlpha=1,Mt(!1),a.globalAlpha=c;const p=d(h);for(let x=0;x<11;x++){const b=p-i*x*.07,M=1+x*.55,v=42-M/2,w=u+Math.cos(b)*v,_=f+Math.sin(b)*v*.58;a.fillStyle="#2a1040",a.fillRect(I(w-M/2),I(_-M/2),I(M)+1,I(M)+1),a.fillStyle="#f0e0ff",a.fillRect(I(u+Math.cos(b)*43)-1,I(f+Math.sin(b)*25)-1,2,2)}const y=p-i*.75;for(let x=38;x>10;x-=2)a.fillStyle=x%4?"#4a2a18":"#6a4024",a.fillRect(I(u+Math.cos(y)*x)-1,I(f+Math.sin(y)*x*.58)-1,3,3);if(!l.poof&&s>=.36){l.poof=!0;for(let x=0;x<9;x++)T({type:"puff",x:t+g(-.5,.5),y:n+g(-.5,.5),r:g(14,24),dur:g(.6,1),col:[176,128,236]});T({type:"ring",x:t,y:n,r:1.15,dur:.45,col:"#c89aff",w:5});for(let x=0;x<22;x++){const b=Math.random()*J,M=g(1,3);E(t,n,.6,Math.cos(b)*M,Math.sin(b)*M,g(.5,2.5),.6,oi[x%4],3,1,!0)}for(let x=0;x<6;x++)E(t+g(-.3,.3),n+g(-.3,.3),.3,0,0,g(.8,1.6),.7,"#a8e070",3,-.5,!1);ot(3)}}})}function bx(e,t){const[n,r]=C(e.x,e.y,Rn(e)+.22+Math.sin(t*3+e.id)*.03);Mt(!0);const o=Bt();for(let i=0;i<12;i++){const a=t*5+i*.55+e.id,s=3+i*1.3,l=i<4?3:2;o.globalAlpha=1-i/14,o.fillStyle=oi[i%3],o.fillRect(I(n+Math.cos(a)*s)-1,I(r+Math.sin(a)*s*.45-i*.6)-1,l,l)}for(let i=0;i<2;i++){const a=-t*2.5+i*Math.PI,s=I(n+Math.cos(a)*16),l=I(r+4+Math.sin(a)*5),u=.5+.5*Math.sin(t*9+i*2);o.globalAlpha=.4+.6*u,o.fillStyle=oi[0],o.fillRect(s-2,l,5,1),o.fillRect(s,l-2,1,5)}o.globalAlpha=1,Mt(!1),Math.random()<.1&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,g(.6,1.2),.6,oi[2],2,-.3,!0)}function vx(e){for(let t=0;t<5;t++)T({type:"puff",x:e.x+g(-.35,.35),y:e.y+g(-.35,.35),r:g(12,20),dur:g(.5,.8),col:[190,150,240]});for(let t=0;t<12;t++){const n=Math.random()*J,r=g(1,2.5);E(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,2),.5,oi[t%3],2,1,!0)}}const Br=["#e8fffa","#8ff4e0","#2ac8b4","#127a74"],Sx=["fffffff",".gSSSg.","..gSg..","...g...","..g.g..",".gSSSg.","fffffff"],wx={f:"#1a5a58",g:"#bff8f0",S:"#ffe7a0"};function _x(e){at.sfx("item_refresh",e.x,e.y,1),T({type:"custom",layer:"ground",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Oe(r);const o=.45+.85*Qt(n),[i,a]=C(r.x,r.y),s=o*$.HW*Math.SQRT2*1.08,l=o*$.HH*Math.SQRT2*1.08;t.globalAlpha=1-n,st(r.x,r.y,o,Br[1],null,3),t.fillStyle=Br[2];for(let u=0;u<16;u++){const f=u/16*J-n*5;t.fillRect(I(i+Math.cos(f)*s)-2,I(a+Math.sin(f)*l)-2,5,4)}st(r.x,r.y,o*.6,Br[0],null,1.5,[4,4])}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),[i,a]=C(r.x,r.y,(o?Rn(o):.8)*.55),s=30*Math.min(1,n*6);t.globalAlpha=n<.7?1:(1-n)/.3;for(let l=0;l<24;l++){const u=l/24*J-n*6,f=l%2===0,h=f?4:2;t.fillStyle=f?Br[0]:Br[2],t.fillRect(I(i+Math.cos(u)*s)-h/2,I(a+Math.sin(u)*s)-h/2,h,h)}for(let l=0;l<2;l++){const u=-Math.PI/2-n*(l?6:30),f=(l?13:22)*Math.min(1,n*6);t.fillStyle=l?Br[1]:Br[0];for(let h=3;h<f;h+=2)t.fillRect(I(i+Math.cos(u)*h)-1,I(a+Math.sin(u)*h)-1,2,2)}if(!r.end&&n>=.75){r.end=!0,T({type:"ring",x:r.x,y:r.y,r:1.25,dur:.4,col:Br[1],w:4});for(let l=0;l<20;l++)E(r.x+g(-.4,.4),r.y+g(-.4,.4),g(.2,.9),g(-.6,.6),g(-.6,.6),g(1.5,3),.6,Br[l%3],3,0,!0)}}}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),[i,a]=C(r.x,r.y,(o?Rn(o):.8)*.55),s=Math.max(0,Math.min(1,(n-.2)/.4));t.globalAlpha=n<.7?1:(1-n)/.3,t.translate(I(i),I(a)),t.rotate(Math.PI*s*s*(3-2*s)),Cn(t,Sx,0,0,3,wx)}}),ot(2)}function s2(e,t,n,r,o){const i=I(t),a=I(n);e.fillStyle=r,e.fillRect(i-3,a,2,3),e.fillRect(i+1,a,2,3),e.fillRect(i-2,a+2,4,2),e.fillStyle=o,e.fillRect(i-1,a+2,2,1)}function Ax(e){at.sfx("item_immune",e.x,e.y,1);const t=Math.random()*J;T({type:"custom",layer:"top",add:!0,dur:.55,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),[a,s]=C(o.x,o.y,(i?Rn(i):.8)*.45),l=Qt(Math.min(1,r/.65)),u=i&&i.scale||1;for(let f=0;f<18;f++){const h=f/18*J+t+(1-l)*1.5,c=(80*(1-l)+32)*u;n.globalAlpha=Math.min(1,r*5),s2(n,a+Math.cos(h)*c,s+Math.sin(h)*c*1.15,"#ffd24a","#fff6c8")}if(r>.6){const f=(1-r)/.4;n.globalAlpha=f,n.strokeStyle="#fff6c8",n.lineWidth=3,n.beginPath(),n.ellipse(a,s,32*u+6*(1-f),38*u+6*(1-f),0,0,J),n.stroke()}}}),T({type:"ring",x:e.x,y:e.y,r:1,dur:.5,col:"#ffd870",w:5,delay:.3});for(let n=0;n<14;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(.5,1.5),.7,n%2?"#ffd24a":"#fff6c8",3,0,!0);ot(2)}function Tx(e,t){const n=e.scale||1,[r,o]=C(e.x,e.y,Rn(e)*.45),i=30*n,a=36*n;Mt(!0);const s=Bt();s.globalAlpha=.5+.1*Math.sin(t*4),s.strokeStyle="#ffcc40",s.lineWidth=2,s.fillStyle="rgba(255,200,60,0.07)",s.beginPath(),s.ellipse(r,o,i,a,0,0,J),s.fill(),s.stroke();const l=(t*70+e.id*13)%(i*4)-i*2;for(let u=-3;u<=3;u++){const f=u*9,h=i*Math.sqrt(Math.max(0,1-f/a*(f/a)))-4;for(let c=-h+(u&1?5:0);c<=h;c+=10){const d=Math.max(0,1-Math.abs(c-l+f*.5)/16);s.globalAlpha=.16+.6*d,s2(s,r+c,o+f-2,d>.5?"#fff0b0":"#ffd24a","#fff6c8")}}s.globalAlpha=1,Mt(!1)}function Rx(e){at.sfx("item_spellblock",e.x,e.y,1);const t=new Float32Array(40);for(let r=0;r<10;r++)t[r*4]=r/10*J+g(-.25,.25),t[r*4+1]=g(.8,1.6),t[r*4+2]=g(-14,14),t[r*4+3]=g(4,8);const n=new Float32Array(5);for(let r=0;r<5;r++)n[r]=r/5*J+g(-.4,.4);T({type:"ring",x:e.x,y:e.y,r:.9,dur:.4,col:"#e6eeff",w:4}),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Oe(i),[s,l]=C(i.x,i.y,(a?Rn(a):.8)*.6);if(o<.45){const f=Math.min(1,o/.08);if(r.fillStyle="#7a84a8",r.beginPath(),r.arc(s,l,16*f,0,J),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s,l,13*f,0,J),r.fill(),r.fillStyle="#fffbe8",r.beginPath(),r.arc(s-2*f,l,8*f,0,J),r.fill(),r.fillStyle="#dfe8ff",r.beginPath(),r.arc(s+2*f,l-2*f,7*f,0,J),r.fill(),o>.25){r.strokeStyle="#4a5478",r.lineWidth=1.5,r.globalAlpha=Math.min(1,(o-.25)/.1);for(let d=0;d<5;d++){const m=n[d];r.beginPath(),r.moveTo(s,l),r.lineTo(s+Math.cos(m+.3)*6,l+Math.sin(m+.3)*6),r.lineTo(s+Math.cos(m)*14,l+Math.sin(m)*14),r.stroke()}r.globalAlpha=1}Mt(!0);const h=Bt(),c=s-14+o/.45*28;h.globalAlpha=.8,h.fillStyle="#ffffff";for(let d=-3;d<=3;d++)h.fillRect(I(c+d*.6),I(l+d*3)-1,2,3);Mt(!1);return}const u=(o-.45)/.55;if(!i.br){i.br=!0;for(let f=0;f<12;f++){const h=Math.random()*J,c=g(1.5,3.5);E(i.x,i.y,.7,Math.cos(h)*c,Math.sin(h)*c,g(.5,2),.5,f%2?"#e6eeff":"#b8c8f0",2,2,!0)}}if(u<.25){Mt(!0);const f=Bt();f.globalAlpha=1-u/.25,f.fillStyle="#f4f8ff";const h=10+u*60;f.fillRect(I(s-h),I(l)-1,I(h*2),3),f.fillRect(I(s)-1,I(l-h*.6),3,I(h*1.2)),Mt(!1)}r.globalAlpha=1-u;for(let f=0;f<10;f++){const h=t[f*4],c=u*t[f*4+1]*40,d=t[f*4+3],m=s+Math.cos(h)*(c+8),p=l+Math.sin(h)*(c+8)*.7+u*u*50,y=u*t[f*4+2];r.save(),r.translate(m,p),r.rotate(y),r.fillStyle=f%3?"#dfe8ff":"#fffbe8",r.beginPath(),r.moveTo(0,-d),r.lineTo(d*.7,d*.6),r.lineTo(-d*.6,d*.4),r.closePath(),r.fill(),r.strokeStyle="#7a84a8",r.lineWidth=1,r.stroke(),r.restore()}}})}const Cs=["#f0fff4","#a8f0b8","#58c878","#2a8a50"];function Cx(e){at.sfx("item_push",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=e.dur||.32,a=Math.random()*9,s=i+.45,l=Math.hypot(r-t,o-n)||1,u=-(o-n)/l,f=(r-t)/l;T({type:"ring",x:t,y:n,r:.8,dur:.35,col:Cs[1],w:4});for(let h=0;h<8;h++)E(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(.3,1),.5,"#c8b48a",3,3,!1);T({type:"custom",layer:"top",add:!0,dur:s,x:t,y:n,draw(h,c){const d=c*s,m=Math.min(1,d/i),p=Math.max(0,(d-.16)/i);if(p>=m)return;const[y,x]=C(t,n,.3),[b,M]=C(r,o,.3),v=(u-f)*$.HW,w=(u+f)*$.HH;for(let _=0;_<5;_++){const A=(_-2)*.22,R=(_-2)*6;for(let P=p;P<=m;P+=.025){const z=A+Math.sin(P*18+_*1.3+a)*.08,O=(P-p)/(m-p);h.globalAlpha=O*(_===2?1:.7),h.fillStyle=Cs[O>.85?0:_===2?1:2],h.fillRect(I(y+(b-y)*P+v*z)-1,I(x+(M-x)*P+w*z+R)-1,3,2)}}for(let _=0;_<3;_++){const A=.25+_*.3;if(A<p||A>m)continue;const R=y+(b-y)*A+v*(_-1)*.35,P=x+(M-x)*A+w*(_-1)*.35-10;h.globalAlpha=1-(A-p)/Math.max(.01,m-p)*.5;for(let z=0;z<9;z++){const O=S.T*9+z*.75+_,F=2+z*1.2;h.fillStyle=Cs[z<3?0:1],h.fillRect(I(R+Math.cos(O)*F)-1,I(P+Math.sin(O)*F*.6)-1,2,2)}}}});for(let h=0;h<14;h++){const c=Math.random();E(t+(r-t)*c,n+(o-n)*c,g(.1,.6),(r-t)/l*g(1,3),(o-n)/l*g(1,3),g(.2,1),g(.4,.8),Cs[h%3],2,0,!0)}}const zu=["#fff2a0","#ffc040","#ff8a2a","#e8501c"];function Px(e,t){const[r,o]=C(e.x,e.y),i=2.8*$.HW*Math.SQRT2,a=2.8*$.HH*Math.SQRT2;Mt(!0);const s=Bt();s.globalAlpha=.07,s.fillStyle="#ff8a2a",s.beginPath(),s.ellipse(r,o,i*.97,a*.97,0,0,J),s.fill(),s.globalAlpha=.22+.06*Math.sin(t*3+e.id),s.strokeStyle="#ff9a3a",s.lineWidth=2,s.setLineDash([10,7]),s.lineDashOffset=-t*24,s.beginPath(),s.ellipse(r,o,i,a,0,0,J),s.stroke(),s.setLineDash([]),s.lineDashOffset=0;for(let l=0;l<14;l++){const u=l/14*J+t*.4,f=.5+.5*Math.sin(t*7+l*1.7+e.id),h=I(3+f*4);s.globalAlpha=.25+.45*f,s.fillStyle=f>.75?zu[0]:zu[1],s.fillRect(I(r+Math.cos(u)*i)-2,I(o+Math.sin(u)*a)-h,4,h)}if(s.globalAlpha=1,Mt(!1),Math.random()<.35){const l=Math.random()*J,u=Math.sqrt(Math.random())*2.8;E(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,.05,0,0,g(.8,1.6),g(.6,1),zu[Math.random()*4|0],2,-.3,!0,.97)}}const la={obs:["....f....","...fFf...","..wwwww..",".wWWWWWw.","wWeeeeeWw","wWeEPEeWw","wWeeeeeWw",".wWWWWWw.","..wWWWw..","..wWdWw..","..wWdWw..","..wWWWw..","..wWdWw..","..wWWWw..","..wWWWw..","...wWw...","...wWw...","....w...."],sen:["...sss...","..sSSSs..",".sSSSSSs.","sSeeeeeSs","sSeEPEeSs","sSeeeeeSs",".sSSSSSs.","..sSrSs..","..sSSSs..","..sSrSs..","..sSSSs..",".sSSSSSs.",".sSSSSSs.","sssssssss"]},Vc={obs:{f:"#ffe070",F:"#ff9a3a",w:"#3a2414",W:"#8a5a30",d:"#5a3a1e",e:"#fff2c0",E:"#ffc030",P:"#2a1408",k:"#1a0c06"},sen:{s:"#2e323e",S:"#8a90a0",r:"#6ad0ff",e:"#dff4ff",E:"#3aa0ff",P:"#0a1a3a",k:"#0a0e18"}},ja=2,Ou={};function l2(e,t){const n=e+(t?"o":"c");if(Ou[n])return Ou[n];let r=la[e]||la.obs;const o=Vc[e]||Vc.obs,i=e==="sen"?"S":"W";t||(r=r.map(l=>l.includes("P")?l.replace(/[eEP]/g,"k"):l.replace(/[eEP]/g,i)));const a=document.createElement("canvas");a.width=r[0].length*ja,a.height=r.length*ja;const s=a.getContext("2d");return Cn(s,r,a.width/2,a.height/2,ja,o),Ou[n]=a}function $f(e){const t=la[e]||la.obs;let n=0;for(;n<t.length&&!t[n].includes("P");n++);return(t.length-n-.5)*ja}function Ql(e,t){return(t+e.id*1.37)%4.2>.14}function Ix(e,t,n){const r=S.T,o=Bt(),i=window.SIM;if(o.globalAlpha=.35,st(e.x,e.y,.16,null,"#0a0614"),o.globalAlpha=1,t){const a=Math.max(0,e.until-n),s=e.kind==="obs"?360:300,[l,u]=C(e.x,e.y);o.globalAlpha=a<20?.5+.4*Math.abs(Math.sin(r*6)):.55,o.strokeStyle=e.kind==="obs"?"#ffd04a":"#7ac8ff",o.lineWidth=2,o.beginPath(),o.ellipse(l,u,.34*$.HW*Math.SQRT2,.34*$.HH*Math.SQRT2,0,-Math.PI/2,-Math.PI/2+J*Math.min(1,a/s)),o.stroke(),o.globalAlpha=1,e.kind==="sen"&&st(e.x,e.y,i.SENTRY_R,"rgba(110,190,255,0.16)","rgba(90,170,255,0.03)",1.5,[10,8])}else o.globalAlpha=.55+.35*Math.sin(r*7),st(e.x,e.y,.42,"#ff4a3a","rgba(255,60,40,0.12)",2,[4,3]),o.globalAlpha=1}function zx(e,t){const n=S.T,[r,o]=C(e.x,e.y),i=o-$f(e.kind);if(Ql(e,n)){Mt(!0);const a=Bt(),s=.6+.4*Math.sin(n*3+e.id);a.globalAlpha=.25*s,a.fillStyle=e.kind==="obs"?"#ffc040":"#4ab0ff",a.fillRect(I(r)-7,I(i)-5,14,10),a.globalAlpha=.6*s,a.fillRect(I(r)-3,I(i)-2,6,4),a.globalAlpha=1,Mt(!1)}if(!t){const a=Bt(),s=I(o-(la[e.kind]||la.obs).length*ja-8+Math.sin(n*5)*2),l=I(r);a.fillStyle="#120c1a",a.fillRect(l-5,s-2,11,4),a.fillRect(l-3,s+2,7,2),a.fillRect(l-1,s+4,3,2),a.fillStyle="#ff4a3a",a.fillRect(l-4,s-1,9,2),a.fillRect(l-2,s+1,5,2),a.fillRect(l,s+3,1,2)}}function Ox(e,t,n,r){const o=l2(t,!0),[i,a]=C(n,r);e.globalAlpha=.6+.15*Math.sin(S.T*6),e.drawImage(o,I(i-o.width/2),I(a-o.height)),e.globalAlpha=1}function Fx(e){const t=e.kind!=="sen",n=window.SIM,r=e.x,o=e.y;at.sfx(t?"ward_obs":"ward_sen",r,o,.9);for(let i=0;i<10;i++)E(r,o,.05,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.5,t?"#9a7a50":"#80808e",3,5,!1);T({type:"custom",layer:"top",add:!0,dur:.7,x:r,y:o,draw(i,a){const[s,l]=C(r,o),u=l-$f(t?"obs":"sen"),f=6+26*Qt(a),h=10*Math.sin(Math.min(1,a*2.2)*Math.PI*.5)*(1-a*.5);i.globalAlpha=1-a,i.fillStyle=t?"#ffe070":"#9ad8ff";for(let c=-8;c<=8;c++){const d=c/8,m=h*(1-d*d);i.fillRect(I(s+d*f)-1,I(u-m)-1,3,2),i.fillRect(I(s+d*f)-1,I(u+m)-1,3,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.9,x:r,y:o,draw(i,a){i.globalAlpha=.5*(1-a),st(r,o,(t?n.WARD_VISION:n.SENTRY_R)*Qt(a),t?"#ffd04a":"#7ac8ff",null,3)}});for(let i=0;i<8;i++)E(r+g(-.15,.15),o+g(-.15,.15),.5,0,0,g(.6,1.4),.8,t?"#ffe070":"#9ad8ff",2,0,!0)}function Ex(e){const t=e.kind!=="sen",n=e.x,r=e.y;at.sfx("ward_break",n,r,1);for(let o=0;o<16;o++){const i=Math.random()*J,a=g(1,3);E(n,r,g(.2,.5),Math.cos(i)*a,Math.sin(i)*a,g(1.5,3.5),g(.6,1),t?o%2?"#8a5a30":"#3a2414":o%2?"#8a90a0":"#2e323e",3,12,!1)}for(let o=0;o<4;o++)T({type:"puff",x:n+g(-.3,.3),y:r+g(-.3,.3),r:g(10,16),dur:g(.5,.8),col:[150,140,130]});T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,draw(o,i){const[a,s]=C(n,r,.3),l=3+14*i;o.globalAlpha=1-i,o.fillStyle=t?"#ffc040":"#4ab0ff";for(let u=0;u<8;u++){const f=u/8*J+i*2;o.fillRect(I(a+Math.cos(f)*l)-1,I(s+Math.sin(f)*l*.7)-1,3,3)}i<.3&&(o.fillStyle="#ffffff",o.fillRect(I(a)-3,I(s)-3,6,6))}})}const ls=["#fff2c8","#ffd080","#ffa040","#c86a10"];function Lx(e){at.sfx("mon_howl",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),[a,s]=C(o.x,o.y,(i?Rn(i):.9)*.9);for(let l=0;l<3;l++){const u=r*1.5-l*.2;if(u<=0||u>=1)continue;const f=10+u*64;n.globalAlpha=1-u,n.fillStyle=l?ls[1]:ls[0];for(let h=-Math.PI*.86;h<=-Math.PI*.14;h+=.1)n.fillRect(I(a+Math.cos(h)*f)-1,I(s+Math.sin(h)*f*.7)-1,3,2)}}}),T({type:"ring",x:e.x,y:e.y,r:3.2,dur:.8,col:"#d0a060",w:3});const t=S.game;if(t)for(const n of t.units)n.dead||n.kind!=="monster"||n.monster!=="lobo"&&n.monster!=="lobo_alfa"||Math.hypot(n.x-e.x,n.y-e.y)>7||T({type:"custom",layer:"top",add:!0,dur:4,x:n.x,y:n.y,uid:n.id,draw(r,o,i){const a=ht(i.uid);if(!a||a.dead||He(a))return;const s=S.T,[l,u]=C(a.x,a.y,Rn(a)*.72),f=o>.85?(1-o)/.15:1,h=.7+.3*Math.sin(s*14+a.id),c=a.scale||1;r.globalAlpha=.35*f*h,r.fillStyle="#ff2010",r.fillRect(I(l-9*c),I(u-4),I(18*c),7),r.globalAlpha=f,r.fillStyle="#ff3a2a",r.fillRect(I(l-5*c)-1,I(u)-1,3,2),r.fillRect(I(l+5*c)-1,I(u)-1,3,2),r.fillStyle="#fff0e0",r.fillRect(I(l-5*c),I(u)-1,1,1),r.fillRect(I(l+5*c),I(u)-1,1,1),Math.random()<.12&&E(a.x+g(-.3,.3),a.y+g(-.3,.3),.3,0,0,g(.6,1.2),.4,"#ff4a2a",2,0,!0)}})}function kx(e){const t=S.T,n=Bt(),r=Math.max(0,e.t),o=Math.min(1,r/.6)*Math.min(1,(1-r/(e.dur||1))*6+.25),i=e.id||1;n.globalAlpha=.4*o,st(e.x,e.y,e.r,"#a8d878",null,1.5,[3,5]);for(let s=0;s<10;s++){const l=W(i*7+s),u=W(i*3+s*5),f=l*J+t*.25*(s%2?1:-1),h=e.r*(.2+.6*u),[c,d]=C(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.15+.1*Math.sin(t+s)),m=(14+12*u)*(.85+.15*Math.sin(t*1.3+s))*Math.min(1.4,e.r/1.6);n.globalAlpha=.17*o,n.fillStyle=s%3===0?"#a070d0":"#82c85a",n.beginPath(),n.ellipse(c,d,m,m*.6,0,0,J),n.fill()}Mt(!0);const a=Bt();for(let s=0;s<9;s++){const l=(t*.45+W(i+s*11))%1,u=W(i*5+s)*J,f=e.r*.8*W(i+s*3),[h,c]=C(e.x+Math.cos(u)*f,e.y+Math.sin(u)*f,l*1.3);a.globalAlpha=Math.sin(l*Math.PI)*o,a.fillStyle=s%2?"#e0b8ff":"#d8ffa0",a.fillRect(I(h)-1,I(c)-1,2,2)}a.globalAlpha=1,Mt(!1),n.globalAlpha=1}function Ux(e){at.sfx("mon_spores",e.x,e.y,.9);const t=e.radius||1.5;T({type:"custom",layer:"ground",dur:.6,x:e.x,y:e.y,draw(n,r){n.globalAlpha=(1-r)*.7,st(e.x,e.y,t*Qt(r),"#b890e0",null,4*(1-r)+1),n.globalAlpha=(1-r)*.5,st(e.x,e.y,t*.7*Qt(r),"#a8e070",null,2,[3,3])}});for(let n=0;n<26;n++){const r=Math.random()*J,o=g(.5,1.6)*t;E(e.x,e.y,.3,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.6,1.1),n%3===0?"#c8a0f0":n%3===1?"#b0e080":"#e8ffc0",3,-.2,n%2===0,.92)}}function Dx(e){at.sfx("mon_rootslam",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||2.4,o=Math.random()*J;T({type:"custom",layer:"ground",dur:1.4,x:t,y:n,draw(i,a){i.globalAlpha=(1-a)*.8,st(t,n,r*Qt(Math.min(1,a*4)),"#6a4a24",null,5*(1-a)+1),i.globalAlpha=(1-a)*.35,st(t,n,r,null,"#3a2814"),i.globalAlpha=1-a,i.strokeStyle="#2a1a0c",i.lineWidth=2;for(let s=0;s<10;s++){const l=o+s/10*J;i.beginPath();for(let u=0;u<=4;u++){const f=.3+u*(r-.3)/4,h=l+(W(o+s*9+u)-.5)*.5,[c,d]=C(t+Math.cos(h)*f,n+Math.sin(h)*f);u?i.lineTo(c,d):i.moveTo(c,d)}i.stroke()}}}),T({type:"custom",layer:"top",dur:1.3,x:t,y:n,draw(i,a){const s=a<.15?Qt(a/.15):a>.7?(1-a)/.3:1;i.lineCap="round";for(let l=0;l<16;l++){const u=l<10,f=o+(u?l/10:(l-10)/6+.08)*J,h=u?r*(.85+.15*W(o+l)):r*.45,[c,d]=C(t+Math.cos(f)*h,n+Math.sin(f)*h),m=(u?34:24)*s*(.8+.4*W(o+l*3)),p=(W(o+l*7)-.5)*22,y=c+p,x=d-m,b=c-p*.6,M=d-m*.55;i.strokeStyle="#3a2412",i.lineWidth=6,i.beginPath(),i.moveTo(c,d),i.quadraticCurveTo(b,M,y,x),i.stroke(),i.strokeStyle="#7a5230",i.lineWidth=2.5,i.stroke(),i.fillStyle="#6ab040",i.fillRect(I(y)-2,I(x)-2,4,3),i.fillStyle="#a8e070",i.fillRect(I(y),I(x)-2,2,1)}}});for(let i=0;i<30;i++){const a=Math.random()*J,s=g(.5,2.5);E(t+Math.cos(a)*r*.8,n+Math.sin(a)*r*.8,.1,Math.cos(a)*s,Math.sin(a)*s,g(1,3),g(.6,1),i%3?"#7a5a3a":"#4a3420",3,8,!1)}ot(6)}const Xx=["a.......a","aa.....aa","aAa...aAa","aAAaaaAAa","aAAAAAAAa","aAeAAAeAa",".aAAAAAa.","..aAnAa..","...aaa..."],Gx={a:"#c86a10",A:"#ffb040",e:"#fff6c0",n:"#5a2a08"};function Bx(e){const t=e.kind==="spore"?"spore":e.kind==="bark"?"bark":"pack";if(at.sfx("camp_"+t,e.x,e.y,1),t==="pack"){T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),[a,s]=C(o.x,o.y,(i?Rn(i):.8)+.3+r*.5);n.globalAlpha=r<.15?r/.15:r>.6?(1-r)/.4:1,Cn(n,Xx,a,s,r<.1?2:3,Gx);const[l,u]=C(o.x,o.y,.4);if(r<.5){n.globalAlpha=1-r/.5,n.fillStyle=ls[1];for(let f=-1;f<=1;f++)for(let h=0;h<8;h++)n.fillRect(I(l+f*8-10+h*3),I(u-12+h*3),2,2)}}});for(let n=0;n<18;n++)E(e.x+g(-.4,.4),e.y+g(-.4,.4),g(.2,1),0,0,g(1,2.2),.8,ls[n%4],3,0,!0)}else if(t==="spore"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Oe(o),[a,s]=C(o.x,o.y,(i?Rn(i):.8)*.5),l=Qt(Math.min(1,r/.7));for(let u=0;u<16;u++){const f=u/16*J+l*5,h=60*(1-l)+6;n.globalAlpha=r<.7?1:(1-r)/.3,n.fillStyle=u%2?"#d8a8ff":"#b8f080",n.fillRect(I(a+Math.cos(f)*h)-2,I(s+Math.sin(f)*h*.6)-2,4,4)}}}),T({type:"ring",x:e.x,y:e.y,r:1.2,dur:.5,col:"#c8a0f0",w:4,delay:.6});for(let n=0;n<12;n++)T({type:"puff",x:e.x+g(-.6,.6),y:e.y+g(-.6,.6),r:g(8,14),dur:g(.6,1),col:n%2?[176,140,230]:[150,210,110],delay:.6})}else T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(r,o,i){const a=Oe(i),[s,l]=C(i.x,i.y,(a?Rn(a):.8)*.4),u=Qt(Math.min(1,o/.45)),f=a&&a.scale||1;r.globalAlpha=o<.75?1:(1-o)/.25;for(let h=0;h<10;h++){const c=h/10*J,d=(70*(1-u)+24)*f,m=I(s+Math.cos(c)*d),p=I(l+Math.sin(c)*d*.55);r.fillStyle="#3a2412",r.fillRect(m-5,p-7,10,14),r.fillStyle="#8a5a30",r.fillRect(m-4,p-6,8,12),r.fillStyle="#5a3a1e",r.fillRect(m-2,p-6,1,12),r.fillRect(m+2,p-4,1,9)}if(u>=1&&!i.lk){i.lk=!0,ot(2);for(let h=0;h<10;h++)E(i.x+g(-.4,.4),i.y+g(-.4,.4),.4,g(-1,1),g(-1,1),g(1,2),.6,h%2?"#8a5a30":"#c8a070",3,8,!1)}}})}function Nx(e,t,n){if(t.camp_bark){const[r,o]=C(e.x,e.y),i=(e.r||.4)*(e.scale||1)+.16,a=i*$.HW*Math.SQRT2,s=i*$.HH*Math.SQRT2,l=Bt();for(let u=0;u<12;u++){const f=u/12*J;l.fillStyle=u%2?"#5a3a1e":"#8a5a30",l.fillRect(I(r+Math.cos(f)*a)-2,I(o+Math.sin(f)*s)-1,4,3)}}if(t.camp_pack){Mt(!0);const r=Bt(),[o,i]=C(e.x,e.y);r.globalAlpha=.45+.15*Math.sin(n*3+e.id),r.fillStyle=ls[2];for(let a=0;a<3;a++){const s=n*.8+a*J/3,l=o+Math.cos(s)*26,u=i+Math.sin(s)*13;for(let f=-1;f<=1;f++)for(let h=0;h<4;h++)r.fillRect(I(l+f*4-4+h*2),I(u-3+h*2),2,1)}r.globalAlpha=1,Mt(!1)}if(t.camp_spore){Mt(!0);const r=Bt(),[o,i]=C(e.x,e.y,Rn(e)*.5);for(let a=0;a<4;a++){const s=n*(.9+a*.2)+a*1.7+e.id,l=o+Math.cos(s)*20+Math.sin(n*1.7+a)*5,u=i+Math.sin(s*1.3)*16;r.globalAlpha=.5+.3*Math.sin(n*4+a),r.fillStyle=a%2?"#e0b8ff":"#c8f090",r.fillRect(I(l)-1,I(u)-1,2,2)}r.globalAlpha=1,Mt(!1)}}function ua(e,t,n){const r=window.SIM&&window.SIM.ITEM&&window.SIM.ITEM[e],o=r&&r.active&&r.active[t];return typeof o=="number"?o:n}function yn(e){return Rn(e)*.68}const Zs=(e,t,n,r)=>!!t[n],$x=[".......yy.","......yWWy","......yWWy",".....bByy.","....bBb...","...bBb....","..bBb.....",".bBb......","bBb.......","bb........"],Hx={b:"#3a2010",B:"#b07a40",y:"#7a2aa0",W:"#ffd8ff"},Fu=["#ff5a6a","#5ab4ff"];function Wx(e){at.sfx("item_wand",e.x,e.y,1);const t=Math.max(3,Math.min(20,e.big|0||3)),n=Math.random()*J,r=new Float32Array(t*3);for(let o=0;o<t;o++)r[o*3]=n+o/t*J+g(-.25,.25),r[o*3+1]=g(24,48),r[o*3+2]=o/t*.2;T({type:"custom",layer:"top",dur:.8,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=Oe(a),[l,u]=C(a.x,a.y,(s?yn(s):.6)+.22),f=l+20,h=i<.28?-.8+1.7*Qt(i/.28):.9-.3*Math.sin((i-.28)*22)*(1-i);o.globalAlpha=i<.08?i/.08:i>.7?(1-i)/.3:1,o.translate(I(f),I(u)),o.rotate(h),Cn(o,$x,0,0,3,Hx)}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:e.x,y:e.y,uid:e.uid,draw(o,i,a){const s=Oe(a),l=s?yn(s):.6,[u,f]=C(a.x,a.y,l+.45),h=u+30,[c,d]=C(a.x,a.y,l*.55);if(i<.3){const m=Math.max(0,(i-.22)/.08);if(m>0){o.globalAlpha=1-m*.6,o.fillStyle="#ffd8ff";const p=3+m*9;o.fillRect(I(h-p),I(f)-1,I(p*2),2),o.fillRect(I(h)-1,I(f-p),2,I(p*2))}}for(let m=0;m<t;m++){const p=Fu[m&1];for(let y=2;y>=0;y--){const x=(i-.24-r[m*3+2])/.58-y*.035;if(x<=0||x>1)continue;const b=r[m*3],M=Math.sin(x*Math.PI),v=h+(c-h)*x+Math.cos(b)*34*M,w=f+(d-f)*x+Math.sin(b)*12*M-r[m*3+1]*M;if(y){o.globalAlpha=.5/y,o.fillStyle=p,o.fillRect(I(v)-1,I(w)-1,2,2);continue}o.globalAlpha=.3,o.fillStyle=p,o.fillRect(I(v)-4,I(w)-4,8,8),o.globalAlpha=1,o.fillRect(I(v)-2,I(w)-2,4,4),o.fillStyle="#ffffff",o.fillRect(I(v)-1,I(w)-2,2,1)}}!a.land&&i>.84&&(a.land=!0,T({type:"custom",layer:"ground",add:!0,dur:.55,x:a.x,y:a.y,uid:a.uid,draw(m,p,y){Oe(y),m.globalAlpha=1-p,m.lineDashOffset=p*30,st(y.x,y.y,.35+.5*Qt(p),Fu[0],null,3,[5,5]),m.lineDashOffset=-p*30,st(y.x,y.y,.3+.42*Qt(p),Fu[1],null,3,[5,5]),m.lineDashOffset=0}}))}}),Lt(e.x,e.y,1.5,13664511,.75,.9,{uid:e.uid,delay:.2})}const So=["#effffe","#5af0ff","#ff5ae0","#6a2aa0"];function qx(e){at.sfx("item_phase",e.x,e.y,1),T({type:"custom",layer:"top",add:!0,dur:.42,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),i=o&&o.scale||1,a=C(r.x,r.y,0)[1],s=C(r.x,r.y,(o?yn(o):.8)*1.05)[1],l=C(r.x,r.y)[0],u=8,f=1-n,h=I(26*i);for(let c=0;c<u;c++){const d=I(s+(a-s)*(c+.5)/u),m=Math.sin(c*2.3+n*26)*15*f*i;t.globalAlpha=.6*f,t.fillStyle=So[1],t.fillRect(I(l-h/2+m-3),d-1,h,3),t.fillStyle=So[2],t.fillRect(I(l-h/2-m+3),d-1,h,3)}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){Oe(r);const o=.28*Qt(n),i=.45+.45*n;t.globalAlpha=1-n,st(r.x-o,r.y+o,i,So[1],null,2),st(r.x+o,r.y-o,i,So[2],null,2)}}),Lt(e.x,e.y,1.2,11047167,.6,.5,{uid:e.uid})}function Vx(e,t){const n=e._phX,r=e._phY;if(e._phX=e.x,e._phY=e.y,n===void 0)return;const o=e.x-n,i=e.y-r,a=Math.hypot(o,i);if(a<.003||a>1)return;const s=o/a,l=i/a,[u,f]=C(e.x,e.y),[h,c]=C(e.x-s,e.y-l),d=Math.hypot(h-u,c-f)||1,m=(h-u)/d,p=(c-f)/d,y=yn(e)*$.ZK,x=e.scale||1;Mt(!0);const b=Bt();for(let M=0;M<5;M++){const v=y*(.15+M*.17),w=(22+14*Math.sin(t*17+M*2.1+e.id))*x,_=u+m*8,A=f-v+p*8;for(let R=0;R<w;R+=2){const P=1-R/w;b.globalAlpha=.55*P,b.fillStyle=So[1],b.fillRect(I(_+m*R),I(A+p*R)-2,2,1),b.fillStyle=So[2],b.fillRect(I(_+m*R),I(A+p*R)+1,2,1)}}if(b.globalAlpha=1,Mt(!1),Math.random()<.35){const M=Math.random()<.5;E(e.x-s*.2+(M?.06:-.06),e.y-l*.2-(M?.06:-.06),.02,0,0,0,.45,M?So[1]:So[2],3,0,!0)}}const ho=["#ffffff","#a8d0ff","#4a8aff","#26349a"],Ps=[[2,7,2,5],[7,4,6,4],[5,2,5,7],[6,3,6,2],[3,6,3,1],[7,5,5,7]];function C0(e,t,n,r,o){const i=Ps[(r%Ps.length+Ps.length)%Ps.length],a=I(t)-o*1.5,s=I(n)-o*2;for(let l=0;l<4;l++)for(let u=0;u<3;u++)i[l]>>2-u&1&&e.fillRect(a+u*o,s+l*o,o,o)}const Yx=["..d..","..d..",".dBd.","dBBWd","dBBBd","dBBBd",".ddd."],Kx={d:"#1a2a80",B:"#4a8aff",W:"#e0f0ff"};function jx(e){at.sfx("item_arcane",e.x,e.y,1);const t=e.radius||ua("arcane_boots","radius",6),n=e.x,r=e.y,o=.9;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:n,y:r,uid:e.uid,draw(a,s,l){Oe(l);const u=Math.min(1,s/.12),f=.95*u,[h,c]=C(l.x,l.y),d=f*.8*$.HW*Math.SQRT2,m=f*.8*$.HH*Math.SQRT2;a.globalAlpha=s<.7?1:(1-s)/.3,st(l.x,l.y,f,ho[1],null,2),st(l.x,l.y,f*.62,ho[2],null,2),a.fillStyle=ho[0];for(let p=0;p<10;p++){const y=p/10*J+s*2.4;C0(a,h+Math.cos(y)*d,c+Math.sin(y)*m,p,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:n,y:r,draw(a,s){const l=t*Qt(s),[u,f]=C(n,r),h=l*$.HW*Math.SQRT2,c=l*$.HH*Math.SQRT2,d=40;a.globalAlpha=(1-s)*.35,st(n,r,l,ho[2],null,2),a.globalAlpha=1-s*s;for(let m=0;m<d;m++){const p=m/d*J;a.fillStyle=m%4?ho[1]:ho[0],C0(a,u+Math.cos(p)*h,f+Math.sin(p)*c,m*7+(s*12|0),2)}}});const i=S.game;if(i)for(const a of i.heroes||[]){if(a.dead||a.team!==e.team)continue;const s=Math.hypot(a.x-n,a.y-r);s>t||T({type:"custom",layer:"top",dur:.7,delay:Qt(s/t)*o*.85,x:a.x,y:a.y,uid:a.id,draw(l,u,f){const h=Oe(f),c=h?yn(h):.8,d=Math.min(1,u/.4),[m,p]=C(f.x,f.y,c+.1+(1-d*d)*.9);if(u<.4){l.globalAlpha=Math.min(1,u*6),Cn(l,Yx,m,p,2,Kx);return}const y=(u-.4)/.6;l.globalAlpha=1-y,l.fillStyle=ho[1];for(let x=0;x<6;x++){const b=-Math.PI*(.1+.8*x/5),M=4+y*14;l.fillRect(I(m+Math.cos(b)*M)-1,I(p+Math.sin(b)*M*.8+y*y*10)-1,2,2)}if(!f.sp){f.sp=!0;for(let x=0;x<5;x++)E(f.x+g(-.2,.2),f.y+g(-.2,.2),c*.8,0,0,g(-.6,-.2),.5,ho[x%3],2,0,!0)}}})}Lt(n,r,2.6,5933823,.85,1),ot(2)}const Qx=["..kk..","..cc..",".g..g.","g....g","gLLLLg","gLWLLg","gLLLLg",".gggg."],Zx={k:"#7a4a24",c:"#cfe8ff",g:"#3a5a7a",L:"#5ab0ff",W:"#e8f6ff"},Jx=[0,1,2,3].map(e=>Qx.map((t,n)=>n>=4&&n<4+e?t.replace(/[LW]/g,"."):t));function t3(e){at.sfx("item_clarity",e.x,e.y,1),T({type:"custom",layer:"top",dur:.95,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),[i,a]=C(r.x,r.y,(o?yn(o):.6)*.85+Math.min(1,n*5)*.08),s=i+26*(o&&o.scale||1),l=2.1*Math.max(0,Math.min(1,(n-.15)/.3)),u=Math.max(0,Math.min(3,Math.floor((n-.35)/.35*4)));t.globalAlpha=n<.06?n/.06:n>.8?(1-n)/.2:1,t.translate(I(s),I(a)),t.rotate(-l),Cn(t,Jx[u],0,0,3,Zx),!r.pop&&n>.12&&(r.pop=!0,E(r.x,r.y,(o?yn(o):.8)+.5,g(-.6,.6),g(-.6,.6),2.2,.5,"#7a4a24",3,10,!1))}}),T({type:"custom",layer:"top",add:!0,dur:1.7,delay:.45,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),i=o?yn(o):.8,a=o&&o.scale||1;for(let s=0;s<8;s++){const l=n*1.6-s*.075;if(l<0||l>1)continue;const u=s*2.4+l*4,[f,h]=C(r.x,r.y,i*(.1+l*1.1)),c=I(f+Math.cos(u)*20*a),d=I(h+Math.sin(u)*7);t.globalAlpha=Math.sin(l*Math.PI)*.9,t.fillStyle="#bfe4ff",l<.9?(t.fillRect(c-1,d-2,3,1),t.fillRect(c-1,d+2,3,1),t.fillRect(c-2,d-1,1,3),t.fillRect(c+2,d-1,1,3),t.fillStyle="#ffffff",t.fillRect(c-1,d-1,1,1)):(t.fillRect(c-3,d,2,1),t.fillRect(c+2,d,2,1),t.fillRect(c,d-3,1,2),t.fillRect(c,d+2,1,2))}}}),Lt(e.x,e.y,1,8042751,.45,1.2,{uid:e.uid,delay:.4})}const e3=[".t.t.","..t..",".pPp.","pPPPp","pPwPp","pPPPp",".ppp."],n3={t:"#d8b048",p:"#4a2e1a",P:"#9a6a40",w:"#e8d0a0"},Is=["#ffffff","#fff2c8","#ffe08a","#e2d0ff"];function r3(e){at.sfx("item_dust",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||10,o=.34,i=Math.random()*99;T({type:"custom",layer:"top",dur:o+.25,x:t,y:n,draw(a,s,l){const u=s*l.dur;if(u<o){const p=u/o,[y,x]=C(t,n,.9+p*(2.1-p)*1.2);a.translate(I(y),I(x)),a.rotate(p*7),Cn(a,e3,0,0,3,n3);return}const f=(u-o)/.25,[h,c]=C(t,n,2.2);if(!l.burst){l.burst=!0,ot(2);for(let p=0;p<70;p++){const y=Math.random()*J,x=g(.5,3.4);E(t,n,2.2,Math.cos(y)*x,Math.sin(y)*x,g(-.4,1),g(1.1,1.8),Is[p%4],p%5?2:3,1.4,!0,.95)}}Mt(!0);const d=Bt();d.globalAlpha=1-f,d.fillStyle=Is[1];const m=6+f*30;d.fillRect(I(h-m),I(c)-1,I(m*2),2),d.fillRect(I(h)-1,I(c-m),2,I(m*2)),d.fillRect(I(h)-4,I(c)-4,8,8),Mt(!1)}}),T({type:"custom",layer:"ground",add:!0,dur:1.1,delay:o,x:t,y:n,draw(a,s){const l=r*Qt(s),[u,f]=C(t,n),h=l*$.HW*Math.SQRT2,c=l*$.HH*Math.SQRT2,d=72,m=Math.floor(S.T*20);for(let p=0;p<d;p++){const y=W(i+p*3+m);if(y<.3)continue;const x=p/d*J+W(i+p)*.08,b=1-W(i+p*7)*.06;a.globalAlpha=(1-s)*y,a.fillStyle=Is[p%4];const M=y>.85?3:2;a.fillRect(I(u+Math.cos(x)*h*b)-1,I(f+Math.sin(x)*c*b)-1,M,M)}}}),T({type:"custom",layer:"top",add:!0,dur:1.8,delay:o,x:t,y:n,draw(a,s){const l=s*1.8;for(let u=0;u<26;u++){const f=W(i+u*11)*J,h=Math.sqrt(W(i+u*5))*r,c=Qt(h/r)*.9+W(i+u)*.3,d=(l-c)/.5;if(d<0||d>1)continue;const[m,p]=C(t+Math.cos(f)*h,n+Math.sin(f)*h,.3+W(i+u*13)*.8),y=I(2+5*Math.sin(d*Math.PI));a.globalAlpha=Math.sin(d*Math.PI),a.fillStyle=Is[u%4],a.fillRect(I(m)-y,I(p),y*2+1,1),a.fillRect(I(m),I(p)-y,1,y*2+1)}}}),Lt(t,n,3,16773312,.9,.6,{delay:o})}const o3=[["OO.....OO","OGGO.OGGO","OGLGbGLGO",".OGGbGGO.",".OGLbLGO.","..OO.OO.."],[".........","...ObO...","...GbG...","..OGbGO..","...LbL...","...O.O..."]],i3={O:"#145a26",G:"#4ae070",L:"#eaffb8",b:"#20180c"};function a3(e){at.sfx("item_evade",e.x,e.y,.55);const t=e.x,n=e.y,r=Math.random()<.5?1:-1,o=Math.random()*9;T({type:"custom",layer:"top",dur:.75,x:t,y:n,uid:e.uid,draw(i,a,s){const l=ht(s.uid),u=l&&!l.dead?yn(l):.8,[f,h]=C(t,n,u*.55),c=S.T;if(a<.3){Mt(!0);const d=Bt(),m=a/.3;for(let p=0;p<3;p++){d.globalAlpha=(1-m)*(.9-p*.22),d.fillStyle=p?"#9affb0":"#e8fff0";const y=36-p*8;d.fillRect(I(f-r*(10+p*8+m*10)),I(h-y/2),p?2:3,y)}Mt(!1)}i.globalAlpha=a<.65?1:(1-a)/.35;for(let d=0;d<3;d++){const m=Qt(Math.min(1,a*1.3)),p=r*(d===1?-.4:1),y=f+p*m*(26+d*10)+Math.sin(a*14+d*2+o)*4,x=h-4-m*(24+d*9)+Math.sin(a*21+d)*3;Cn(i,o3[Math.floor(c*22)+d&1],y,x,d===1?2:3,i3)}}})}const wr=["#ffffff","#d8f6ff","#8ad8ff","#3a8ad0","#1a4a80"];function s3(e,t,n,r,o){for(let i=0;i<6;i++){const a=o+i/6*J,s=Math.cos(a),l=Math.sin(a)*.5;for(let u=0;u<=r;u+=2)e.fillRect(I(t+s*u)-1,I(n+l*u)-1,2,2);for(const u of[.45,.72]){const f=t+s*r*u,h=n+l*r*u,c=r*(.32-u*.18);for(const d of[-1,1]){const m=a+d*.9,p=Math.cos(m),y=Math.sin(m)*.5;for(let x=2;x<=c;x+=2)e.fillRect(I(f+p*x)-1,I(h+y*x)-1,2,2)}}}}function l3(e){at.sfx("item_frostwave",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||ua("frost_guard","radius",4.5),o=Math.random()*99,i=.55,a=1.25,s=72,l=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),h=[];for(let c=0;c<s;c++)l[c]=c/s*J+(W(o+c)-.5)*.06,u[c]=14+W(o+c*7)*18,f[c]=(W(o+c*3)-.5)*.12,h.push(c);h.sort((c,d)=>Math.sin(l[c])-Math.sin(l[d])),T({type:"custom",layer:"ground",dur:2.3,x:t,y:n,draw(c,d){const[m,p]=C(t,n),y=Qt(Math.min(1,d*2.3/i)),x=d<.6?1:(1-d)/.4;c.globalAlpha=.22*x,st(t,n,r*y,null,"rgba(170,225,255,1)"),c.globalAlpha=.7*x,st(t,n,r*y,wr[2],null,2,[3,4]),c.globalAlpha=.85*x,c.fillStyle=wr[1];for(let b=0;b<12;b++){const M=o+b/12*J,v=r*y*(.55+.4*W(o+b));for(let w=.3;w<v;w+=.22){const[_,A]=C(t+Math.cos(M)*w,n+Math.sin(M)*w);if(c.fillRect(I(_)-1,I(A)-1,2,2),(w*10|0)%2){const[R,P]=C(t+Math.cos(M+.5)*(w+.12),n+Math.sin(M+.5)*(w+.12));c.fillRect(I(R),I(P),2,1);const[z,O]=C(t+Math.cos(M-.5)*(w+.12),n+Math.sin(M-.5)*(w+.12));c.fillRect(I(z),I(O),2,1)}}}c.globalAlpha=x,c.fillStyle=d<.12?wr[0]:wr[1],s3(c,m,p,26,o+d*1.2)}}),T({type:"custom",layer:"top",dur:a,x:t,y:n,draw(c,d){const m=d*a,p=Qt(Math.min(1,m/i)),y=r*(.12+.88*p),x=m>i+.2?Math.max(0,1-(m-i-.2)/(a-i-.2)):1,b=(M,v,w,_,A)=>{c.fillStyle=wr[4],c.beginPath(),c.moveTo(M-_-1,v+1),c.lineTo(M-_*.6,v-w*.7),c.lineTo(M+A,v-w-1),c.lineTo(M+_*.6,v-w*.7),c.lineTo(M+_+1,v+1),c.closePath(),c.fill(),c.fillStyle=wr[2],c.beginPath(),c.moveTo(M-_,v),c.lineTo(M-_*.6+1,v-w*.7),c.lineTo(M+A,v-w),c.lineTo(M,v),c.closePath(),c.fill(),c.fillStyle=wr[3],c.beginPath(),c.moveTo(M,v),c.lineTo(M+A,v-w),c.lineTo(M+_*.6-1,v-w*.7),c.lineTo(M+_,v),c.closePath(),c.fill(),c.fillStyle=wr[0],c.fillRect(I(M+A)-1,I(v-w),2,3),c.fillStyle=wr[1],c.fillRect(I(M-_*.5),I(v-w*.6),1,I(w*.45))};c.globalAlpha=1;for(const M of h){const v=l[M],w=Math.cos(v),_=Math.sin(v),A=u[M]*(.55+.45*p)*x;if(A<2)continue;const[R,P]=C(t+w*y*(.84+f[M]),n+_*y*(.84+f[M]));b(R,P,A*.5,3+A*.08,w*2);const[z,O]=C(t+w*y*(1+f[M]),n+_*y*(1+f[M]));b(z,O,A,3+A*.12,w*3),m<i&&!(M&3)&&(c.globalAlpha=.85,c.fillStyle=wr[0],c.fillRect(I(z)-4,I(O)-1,8,2),c.globalAlpha=1)}}});for(let c=0;c<46;c++){const d=Math.random()*J,m=Math.sqrt(Math.random())*r;E(t+Math.cos(d)*m,n+Math.sin(d)*m,g(.8,1.8),g(-.3,.3),g(-.3,.3),g(-.2,.1),g(1,1.6),c%3?"#ffffff":"#c8f0ff",2,.25,c%4===0,.97)}Lt(t,n,r*1.05,9102591,.95,.9),ot(4)}const tr=["#f0fff8","#a8ffe0","#4ae0b0","#1a8a70"];function u3(e){at.sfx("item_lance",e.x,e.y,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=Math.hypot(r-t,o-n),a=Math.min(.38,.12+i*.04),s=Math.random()*9;T({type:"custom",layer:"top",add:!0,dur:a+.05,x:t,y:n,draw(l,u){const f=Math.min(1,u*(a+.05)/a),[h,c]=C(t,n,.65),[d,m]=C(r,o,.55),p=d-h,y=m-c,x=Math.hypot(p,y)||1,b=p/x,M=y/x,v=-M,w=b,_=h+p*f,A=c+y*f;for(let R=0;R<2;R++)for(let P=0;P<22;P++){const z=P*5,O=Math.sin(P*.7-S.T*28+s+R*Math.PI)*(2+P*.45),F=P<6?3:2;l.globalAlpha=(1-P/22)*.85,l.fillStyle=tr[P<5?1:P<13?2:3],l.fillRect(I(_-b*(z+40)+v*O-F/2),I(A-M*(z+40)+w*O-F/2),F,F)}l.globalAlpha=.28,l.fillStyle=tr[2];for(let R=0;R<44;R+=4)l.fillRect(I(_-b*R)-4,I(A-M*R)-4,8,8);l.globalAlpha=1;for(let R=0;R<44;R+=1)l.fillStyle=R<8?tr[0]:R<30?tr[1]:tr[2],l.fillRect(I(_-b*R+v*.5)-1,I(A-M*R+w*.5)-1,3,3);for(let R=0;R<14;R++){const P=Math.sin(R/14*Math.PI)*6;l.fillStyle=R<4?tr[0]:tr[1];for(let z=-P;z<=P;z+=1.5)l.fillRect(I(_+b*(12-R)+v*z),I(A+M*(12-R)+w*z),2,2)}l.fillStyle=tr[0];for(let R=-4;R<=4;R++)l.fillRect(I(_-b*36+v*R*1.5)-1,I(A-M*36+w*R*1.5)-1,2,2)}}),T({type:"custom",layer:"top",add:!0,dur:.85,delay:a,x:r,y:o,draw(l,u,f){const[h,c]=C(r,o,.55);if(!f.hit){f.hit=!0,ot(3);for(let d=0;d<14;d++){const m=Math.random()*J,p=g(1,3);E(r,o,.55,Math.cos(m)*p,Math.sin(m)*p,g(.2,1.5),.45,tr[d%3],2,0,!0)}}if(u<.35){const d=u/.35,m=4+d*26;l.globalAlpha=1-d,l.fillStyle=tr[0];for(let p=-m;p<=m;p+=2){const y=m-Math.abs(p);l.fillRect(I(h+p),I(c-y*.7),2,2),l.fillRect(I(h+p),I(c+y*.7),2,2)}}for(let d=0;d<6;d++){const m=d/6*J+u*3.2+s,p=6+Qt(u)*26,y=h+Math.cos(m)*p,x=c+Math.sin(m)*p*.5-u*46;l.globalAlpha=1-u;for(let b=0;b<4;b++){const M=m-b*.25,v=p-b*2;l.fillStyle=tr[b===0?0:b<2?1:2],l.fillRect(I(h+Math.cos(M)*v)-1,I(c+Math.sin(M)*v*.5-u*46+b*3)-1,b?2:3,b?2:3)}l.fillStyle=tr[0],l.fillRect(I(y)-1,I(x)-1,3,3)}}}),Lt(r,o,1.6,8060880,.85,.5,{delay:a}),Lt(t,n,1,8060880,.4,.25)}const Fi=["#f4f8ff","#c8d4e8","#9aa8c0","#c8b490"];function f3(e){at.sfx("item_cyclone",e.x,e.y,1);const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(r,o){const[i,a]=C(t,n),s=(.35+1.25*Qt(o))*$.HW*Math.SQRT2,l=o*9;r.globalAlpha=1-o;for(let u=0;u<4;u++)for(let f=0;f<1.3;f+=.07){const h=l+u*J/4+f,c=s*(1-f*.25);r.fillStyle=f<.3?Fi[0]:Fi[3],r.fillRect(I(i+Math.cos(h)*c)-1,I(a+Math.sin(h)*c*.5)-1,3,2)}}});for(let r=0;r<16;r++){const o=Math.random()*J,i=g(1,2.2);E(t+Math.cos(o)*.4,n+Math.sin(o)*.4,.1,-Math.sin(o)*i+Math.cos(o)*.8,Math.cos(o)*i+Math.sin(o)*.8,g(1.5,3),g(.6,1),r%3?"#8a6a40":"#6aa040",3,1.5,!1,.95)}}function u2(e,t,n,r){const o=S.T-(t._cyS||S.T),i=Math.min(1,o/.3),[a,s]=C(t.x,t.y),l=2.5*$.ZK*i,u=t.scale||1,f=17;r||(e.globalAlpha=.16,e.fillStyle="#dfe6f4",e.beginPath(),e.moveTo(a-9*u,s),e.lineTo(a-43*u,s-l),e.lineTo(a+43*u,s-l),e.lineTo(a+9*u,s),e.closePath(),e.fill());for(let h=0;h<f;h++){const c=h/(f-1),d=s-l*c,m=(9+c*34)*u+Math.sin(n*3+h)*2,p=m*.32,y=n*(8-c*3)+h*.9,x=a+Math.sin(n*2.2+c*3)*c*6;for(let b=0;b<J;b+=.12){const M=b+y,v=Math.sin(M);if(v>0!==r)continue;const w=(b*3/J+h*.37)%1;w>.72||(e.globalAlpha=(r?.9:.55)*(1-c*.3),e.fillStyle=w<.18?Fi[0]:w<.45?Fi[1]:Fi[2],e.fillRect(I(x+Math.cos(M)*m)-2,I(d+v*p)-1,4,3))}}for(let h=0;h<6;h++){const c=n*6.5+h*1.05,d=Math.sin(c);if(d>0!==r)continue;const m=(n*.55+h*.17)%1,p=s-l*m,y=(9+m*34)*u*.85;e.globalAlpha=1,e.fillStyle=h%2?"#6aa040":"#8a6a40",e.fillRect(I(a+Math.cos(c)*y)-1,I(p+d*y*.32)-1,3,2)}r||(e.globalAlpha=.6,e.lineDashOffset=-n*40,st(t.x,t.y,.55,Fi[3],null,2,[6,5]),e.lineDashOffset=0),e.globalAlpha=1}function c3(e){for(let t=0;t<6;t++)T({type:"puff",x:e.x+g(-.4,.4),y:e.y+g(-.4,.4),r:g(12,20),dur:g(.5,.8),col:[210,214,226]});for(let t=0;t<10;t++){const n=Math.random()*J,r=g(1,2.5);E(e.x,e.y,g(.2,1.8),Math.cos(n)*r,Math.sin(n)*r,g(-1,1),.6,t%2?"#6aa040":"#8a6a40",3,3,!1)}}const h3=["..w..",".wWk.",".wWk.",".wWr.",".wWr.",".wWr.",".wWr.","kkgkk","..g..","..k.."],d3={w:"#eef2fa",W:"#a8b4c8",k:"#2a2a34",r:"#d02a3a",g:"#c8a040"};function m3(e){at.sfx("item_reflect",e.x,e.y,1),T({type:"custom",layer:"top",dur:.75,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),i=o&&o.scale||1,[a,s]=C(r.x,r.y,(o?yn(o):.8)*.45),l=n<.35?1+.25*Math.sin(n/.35*Math.PI)-(1-n/.35):n<.6?1:1-(n-.6)/.4*.6;t.globalAlpha=n<.75?1:(1-n)/.25;for(let u=0;u<8;u++){const f=u/8*J+n*1.2,h=34*i*Math.max(0,l),c=a+Math.cos(f)*h,d=s+Math.sin(f)*h*.55;t.save(),t.translate(I(c),I(d)),t.rotate(Math.atan2(Math.sin(f)*.55,Math.cos(f))+Math.PI/2+Math.PI),Cn(t,h3,0,0,2,d3),t.restore()}if(n>.3&&n<.6){Mt(!0);const u=Bt(),f=(n-.3)/.3*J;u.globalAlpha=.9,u.fillStyle="#ffffff",u.fillRect(I(a+Math.cos(f)*34*i)-3,I(s+Math.sin(f)*34*i*.55)-1,6,2),u.fillRect(I(a+Math.cos(f)*34*i)-1,I(s+Math.sin(f)*34*i*.55)-3,2,6),Mt(!1)}}});for(let t=0;t<10;t++){const n=Math.random()*J,r=g(1,2.5);E(e.x,e.y,.5,Math.cos(n)*r,Math.sin(n)*r,g(.5,1.5),.35,t%3?"#e8eef8":"#ff5a5a",2,2,!0)}Lt(e.x,e.y,1.3,14542591,.6,.45,{uid:e.uid})}function p3(e,t,n){const r=t.scale||1,[o,i]=C(t.x,t.y,yn(t)*.4),a=26*r,s=(n*1.4+t.id)%J;for(let l=0;l<6;l++){const u=n*1.6+l/6*J,f=Math.sin(u),h=I(o+Math.cos(u)*a),c=I(i+f*a*.4),d=Math.abs(((u-s)%J+J)%J)<.5;e.globalAlpha=f>0?.95:.4,e.fillStyle="#2a2a34",e.fillRect(h-2,c-4,4,8),e.fillStyle=d?"#ffffff":"#c8d0e0",e.fillRect(h-1,c-4,2,7),e.fillStyle="#d02a3a",e.fillRect(h+1,c-2,1,4)}e.globalAlpha=1}const Gn=["#ffd8f8","#e060c8","#9a2a9a","#3a0a3a"];function y3(e){at.sfx("item_veil",e.x,e.y,1);const t=e.x,n=e.y,r=e.radius||ua("veil_discord","radius",3),o=.5,i=Math.random()*9,a=96;S.game,ua("veil_discord","dur",14),T({type:"custom",layer:"top",dur:o+.14,x:t,y:n,draw(s,l){const u=Math.min(1,l*(o+.14)/o),f=2.4*(1-u*u),h=Math.max(0,(l-.78)/.22),c=.6*$.ZK*(1-h);if(!(c<2))for(let d=0;d<2;d++)for(let m=0;m<a;m++){const p=m/a*J,y=Math.sin(p);if(y>0!=(d===1))continue;const[x,b]=C(t+Math.cos(p)*r,n+y*r,f+.6),M=c*(.78+.22*W(i+m)),v=Math.sin(m*1.3+S.T*4)*.5+.5;s.globalAlpha=d?.92:.5,s.fillStyle=Gn[3],s.fillRect(I(x)-2,I(b)-1,5,2);for(let w=0;w<M;w+=3){const _=Math.sin(w*.1+S.T*7+m*.4)*(w/M)*3;s.fillStyle=w<3?Gn[0]:v>.66?Gn[1]:v>.25?Gn[2]:Gn[3],s.fillRect(I(x+_)-2,I(b+w),4,3)}}}}),T({type:"custom",layer:"ground",dur:1.7,delay:o,x:t,y:n,draw(s,l){const[u,f]=C(t,n),h=r*$.HW*Math.SQRT2,c=r*$.HH*Math.SQRT2;s.globalAlpha=.35*(1-l),st(t,n,r*(.9+.1*l),null,Gn[3]);for(let d=0;d<3;d++){const m=Math.min(1,l*1.4-d*.12);if(!(m<=0)){s.globalAlpha=(1-m)*.9,s.fillStyle=d?Gn[1]:Gn[0];for(let p=0;p<J;p+=.05){const y=(.3+.75*m)*(1+Math.sin(p*7+d*2+S.T*6)*.06);s.fillRect(I(u+Math.cos(p)*h*y)-1,I(f+Math.sin(p)*c*y)-1,3,2)}}}}}),T({type:"custom",layer:"top",dur:.1,delay:o,x:t,y:n,draw(s,l,u){if(!u.done){u.done=!0,ot(3);for(let f=0;f<10;f++){const h=f/10*J;T({type:"puff",x:t+Math.cos(h)*r*.9,y:n+Math.sin(h)*r*.9,r:g(12,20),dur:g(.6,1),col:[170,70,170]})}for(let f=0;f<24;f++){const h=Math.random()*J,c=Math.sqrt(Math.random())*r;E(t+Math.cos(h)*c,n+Math.sin(h)*c,.1,0,0,g(.6,1.6),g(.6,1),Gn[f%3],2,-.2,!0)}}}}),Lt(t,n,r*1.1,13656319,.7,.9,{delay:o})}function g3(e,t,n){const[r,o]=C(t.x,t.y,yn(t)+.18+Math.sin(n*2.5+t.id)*.03),i=t.scale||1,a=I(11*i);for(let s=-a;s<=a;s+=2){const l=(s+a)/(a*2),u=Math.sin(n*6+l*6+t.id)*2,f=7+I(5*W(t.id+s*3))+Math.sin(l*Math.PI)*3,h=I(o-Math.sin(l*Math.PI)*5+u*.5);e.fillStyle=Gn[3],e.fillRect(I(r+s)-1,h-1,3,f+2),e.fillStyle=s/2%2?Gn[2]:Gn[1],e.fillRect(I(r+s),h,2,f),e.fillStyle=Gn[0],e.fillRect(I(r+s),h,2,1)}Math.random()<.04&&E(t.x+g(-.15,.15),t.y+g(-.15,.15),yn(t)+.05,0,0,-.3,.6,Gn[2],2,1,!1)}const Yc=["...mmm...",".m.MMM.m.","..MMhMM..","mMMh.hMMm","mMh...hMm","mMMh.hMMm","..MMhMM..",".m.MMM.m.","...mmm..."],Kc={m:"#6a4a14",M:"#d8a040",h:"#fff0b0"};function x3(e){at.sfx("item_mekansm",e.x,e.y,1),T({type:"custom",layer:"top",dur:1.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),[i,a]=C(r.x,r.y,(o?yn(o):.6)+.12),s=n<.12?Qt(n/.12):1,l=n*7;if(t.globalAlpha=n<.8?1:(1-n)/.2,t.save(),t.translate(I(i-24*s),I(a)),t.rotate(l),Cn(t,Yc,0,0,I(4*s)||1,Kc),t.restore(),t.save(),t.translate(I(i+4*s),I(a-16*s)),t.rotate(-l*1.33+.35),Cn(t,Yc,0,0,I(3*s)||1,Kc),t.restore(),!r.steam&&n>.3){r.steam=!0;for(let u=0;u<3;u++)T({type:"puff",x:r.x+g(-.2,.2),y:r.y+g(-.2,.2),r:g(8,12),dur:g(.5,.8),col:[235,235,240]})}}}),T({type:"custom",layer:"top",add:!0,dur:1,delay:.15,x:e.x,y:e.y,uid:e.uid,draw(t,n,r){const o=Oe(r),i=o?yn(o):.8,a=o&&o.scale||1;for(let s=0;s<2;s++)for(let l=0;l<14;l++){const u=n*1.3-l*.025;if(u<0||u>1)continue;const f=u*J*2+s*Math.PI,[h,c]=C(r.x,r.y,i*u*1.05),d=l<2?4:l<6?3:2;t.globalAlpha=(1-l/14)*(1-n*.5),t.fillStyle=l===0?"#ffffff":s?"#ffe07a":"#8aff9a",t.fillRect(I(h+Math.cos(f)*24*a-d/2),I(c+Math.sin(f)*8*a-d/2),d,d)}if(n>.45){const s=(n-.45)/.55,[l,u]=C(r.x,r.y,i+.1+s*.5);t.globalAlpha=1-s,t.fillStyle="#c8ffd0",t.fillRect(I(l)-1,I(u)-5,3,11),t.fillRect(I(l)-5,I(u)-1,11,3),t.fillStyle="#ffffff",t.fillRect(I(l),I(u),1,1)}}}),Lt(e.x,e.y,1.4,10157962,.7,1,{uid:e.uid,delay:.15})}const M3=["..ggggg..",".gGGGGGg.","gGGHGGGGg","gGHGGGGGg","gGGGGGGGgg",".gGgGgGgGg",".gGgGgGgg.",".gGgGgGg..","..g.g.g..."].map(e=>(e+"..........").slice(0,10)),b3={g:"#7a5010",G:"#ffd24a",H:"#fff6c0"},gi=["#fff6c0","#ffd24a","#d89a20"];function v3(e){at.sfx("item_midas",e.x,e.y,1);const t=e.x,n=e.y,r=e.uid!==void 0?ht(e.uid):null,o=r?r.x:t,i=r?r.y:n,a=.34;T({type:"custom",layer:"top",add:!0,dur:a,x:t,y:n,draw(s,l){const[u,f]=C(o,i,.6),[h,c]=C(t,n,.8);for(let d=0;d<10;d++){const m=(l*1.5+d/10)%1;s.globalAlpha=Math.sin(m*Math.PI)*.9,s.fillStyle=gi[d%2],s.fillRect(I(u+(h-u)*m)-1,I(f+(c-f)*m-Math.sin(m*Math.PI)*18)-1,2,2)}}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(s,l,u){const f=Math.min(1,l/a),h=2.3-1.4*Qt(f),[c,d]=C(t,n,h);if(s.globalAlpha=l<.08?l/.08:l>.7?(1-l)/.3:1,Cn(s,M3,c+(f<1?Math.sin(l*30)*1.5:0),d,4,b3),!u.hit&&f>=1){u.hit=!0,ot(3);for(let m=0;m<22;m++){const p=Math.random()*J,y=g(.6,2.4);E(t,n,.5,Math.cos(p)*y,Math.sin(p)*y,g(2.5,4.5),g(.7,1.1),gi[m%3],3,9,m%3===0,.97)}T({type:"custom",layer:"top",add:!0,dur:.75,x:t,y:n,draw(m,p){const[y,x]=C(t,n);for(let v=0;v<9;v++){const w=(v-4)*5+Math.sin(v*2.7)*2,_=(60+70*W(v*3.1))*Math.min(1,p*4+.1),A=x-_-p*30;for(let R=0;R<_;R+=3){const P=1-R/_;m.globalAlpha=(1-p)*(1-P*.85),m.fillStyle=R<6?gi[0]:gi[1],m.fillRect(I(y+w),I(A+R),2,2)}}const b=I(6+26*Math.sin(Math.min(1,p*3)*Math.PI)),M=I(x-34);m.globalAlpha=1-p,m.fillStyle=gi[0],m.fillRect(I(y)-b,M,b*2,2),m.fillRect(I(y)-1,M-b,2,b*2),m.fillRect(I(y)-3,M-2,6,6)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(m,p){m.globalAlpha=1-p,st(t,n,.3+1.1*Qt(p),gi[1],null,3,[2,3])}})}}}),Lt(t,n,2,16765514,1,.7,{delay:a})}function S3(e){at.sfx("item_mirror",e.x,e.y,1);const t=e.x,n=e.y,r=ua("mirror_image","count",2),o=Math.random()*9,i=new Float32Array(r+1),a=new Float32Array(r+1);for(let s=0;s<r;s++){const l=s/r*J+.6;i[s]=t+Math.cos(l)*1.1,a[s]=n+Math.sin(l)*1.1}i[r]=t,a[r]=n,T({type:"custom",layer:"ground",add:!0,dur:.7,x:t,y:n,draw(s,l){s.globalAlpha=1-l,s.lineDashOffset=S.T*30,st(t,n,.5+1*Qt(l),"#c8d0e0",null,2,[4,6]),s.lineDashOffset=0,st(t,n,.4+.8*Qt(l),"#9ad8ff",null,1.5)}}),T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(s,l,u){const f=Qt(Math.min(1,l/.42)),h=Math.max(0,(l-.48)/.45);for(let c=0;c<=r;c++){const d=t+(i[c]-t)*f,m=n+(a[c]-n)*f,[p,y]=C(d,m,.05),x=(1-f)*4*Math.PI+c,b=I(Math.max(2,14*Math.abs(Math.cos(x)))),M=36,v=I(y-M),w=I(M*Math.min(1,h));if(w>=M)continue;s.globalAlpha=1,s.fillStyle="#2a3040",s.fillRect(I(p)-b-2,v+w-2,b*2+4,M-w+2),s.fillStyle="#c8d0e0",s.fillRect(I(p)-b-1,v+w-1,b*2+2,M-w),s.fillStyle=Math.cos(x)>0?"#9ad8ff":"#6aa8d8",s.fillRect(I(p)-b+1,v+w+1,b*2-2,M-w-4),s.fillStyle="#ffffff";const _=(S.T*40+c*13+o*10)%(M+20)-10;for(let A=0;A<4;A++){const R=I(v+_+A*2);R>v+w&&R<v+M-3&&s.fillRect(I(p)-b+2+A,R,Math.max(1,I(b*.5)),1)}h>0&&Math.random()<.7&&E(d+g(-.12,.12),m+g(-.12,.12),(M-w)/$.ZK,g(-.2,.2),g(-.2,.2),g(.4,1),.45,Math.random()<.5?"#9ad8ff":"#e8f6ff",2,-.4,!0)}if(!u.fl&&l>.45){u.fl=!0;for(let c=0;c<=r;c++)T({type:"custom",layer:"top",add:!0,dur:.25,x:i[c],y:a[c],draw(d,m,p){const[y,x]=C(p.x,p.y,.5);d.globalAlpha=1-m,d.fillStyle="#e8f6ff",d.fillRect(I(y)-18,I(x)-22,36,2),d.fillRect(I(y)-18,I(x)+6,36,2),d.fillRect(I(y)-1,I(x)-30,2,44)}})}}}),Lt(t,n,2,10148095,.75,.8)}const er=["#0a0410","#2a0a40","#6a2ab0","#b47aff"];function w3(e){at.sfx("item_abyss",e.ex===void 0?e.x:e.ex,e.ey===void 0?e.y:e.ey,1);const t=e.x,n=e.y,r=e.ex===void 0?t:e.ex,o=e.ey===void 0?n:e.ey,i=.2,a=ua("abyssal_blade","stun",2),s=Math.random()*99,l=28,u=new Float32Array(l);for(let c=0;c<l;c++)u[c]=(c%2?.34:.5)+W(s+c)*.14;T({type:"custom",layer:"top",dur:i+.15,x:t,y:n,draw(c,d){const m=Math.min(1,d*(i+.15)/i);for(let p=0;p<9;p++){const y=m-p*.06;if(y<0)break;const[x,b]=C(t+(r-t)*y,n+(o-n)*y,.5+Math.sin(y*Math.PI)*1.1),M=I(10-p);c.globalAlpha=(1-p/9)*(d<.8?1:(1-d)/.2),c.fillStyle=er[2],c.fillRect(I(x)-M/2-1,I(b)-M/2-1,M+2,M+2),c.fillStyle=er[0],c.fillRect(I(x)-M/2,I(b)-M/2,M,M)}}});const f=a+.35,h=c=>c<i?0:c<i+.12?Qt((c-i)/.12):c>f-.3?Math.max(0,(f-c)/.3):1;T({type:"custom",layer:"ground",dur:f,x:r,y:o,draw(c,d,m){const p=d*f,y=h(p);if(y<=0)return;if(!m.hit&&p>=i){m.hit=!0,ot(6);for(let M=0;M<18;M++){const v=Math.random()*J,w=g(1.5,3.5);E(r,o,.3,Math.cos(v)*w,Math.sin(v)*w,g(1,3),.5,M%3?er[3]:er[2],3,6,!0)}}c.fillStyle=er[1];for(let M=0;M<8;M++){const v=s+M/8*J;for(let w=.45;w<.45+.5*y;w+=.07){const _=v+(W(s+M*5+(w*20|0))-.5)*.5,[A,R]=C(r+Math.cos(_)*w,o+Math.sin(_)*w);c.fillRect(I(A)-1,I(R)-1,2,2)}}c.beginPath();for(let M=0;M<=l;M++){const v=M%l/l*J,[w,_]=C(r+Math.cos(v)*u[M%l]*y,o+Math.sin(v)*u[M%l]*y);M?c.lineTo(I(w),I(_)):c.moveTo(I(w),I(_))}c.fillStyle=er[0],c.fill();for(let M=0;M<l;M++){const v=M/l*J,w=(M+1)/l*J,[_,A]=C(r+Math.cos(v)*u[M]*y,o+Math.sin(v)*u[M]*y),[R,P]=C(r+Math.cos(w)*u[(M+1)%l]*y,o+Math.sin(w)*u[(M+1)%l]*y);for(let z=0;z<1;z+=.2)c.fillStyle=Math.sin(v)<0?er[3]:er[2],c.fillRect(I(_+(R-_)*z)-1,I(A+(P-A)*z)-1,2,2)}const[x,b]=C(r,o);for(let M=0;M<10;M++){const v=(S.T*.9+M/10)%1,w=M*2.4+v*5,_=(1-v)*22*y;c.globalAlpha=v,c.fillStyle=er[3],c.fillRect(I(x+Math.cos(w)*_)-1,I(b+Math.sin(w)*_*.5)-1,2,2)}}}),T({type:"custom",layer:"top",dur:f,x:r,y:o,draw(c,d){const m=d*f,p=h(m);if(p<=0)return;const[y,x]=C(r,o,.42),b=Qt(Math.min(1,(m-i)/.2));for(let M=0;M<5;M++){const v=M/5*J+s,[w,_]=C(r+Math.cos(v)*.36*p,o+Math.sin(v)*.36*p),A=Math.sin(S.T*6+M*1.7)*2,R=w+(y-w)*.55*b+A,P=_-(_-x)*b*p-8*b,z=w+Math.cos(v)*16*b,O=_-(_-x)*.7*b*p;for(let F=0;F<2;F++)for(let X=0;X<=1;X+=.06){const G=1-X,V=G*G*w+2*G*X*z+X*X*R,L=G*G*_+2*G*X*O+X*X*P,k=X<.5?5:X<.8?4:3;F?(c.fillStyle=X>.85?er[3]:er[2],c.fillRect(I(V)-1,I(L)-1,2,2)):(c.fillStyle=er[0],c.fillRect(I(V-k/2)-1,I(L-k/2)-1,k+2,k+2))}}}}),Lt(r,o,1.6,9059071,.6,.6,{delay:i})}const zo={blue:["#effaff","#9ad8ff","#4aa8ff","#1a5aa0"],red:["#fff2ea","#ffb49a","#ff5a4a","#a02a1a"],neutral:["#fffbe8","#ffe8a0","#ffd24a","#a07a1a"]},fa={blue:6996223,red:16743002,neutral:16765514};function _3(e){at.sfx("tp_start",e.x,e.y,1);const t=ht(e.uid),n=e.dur||3,r=e.team||t&&t.team||"blue",o=zo[r]||zo.blue,i=e.ex===void 0?e.x:e.ex,a=e.ey===void 0?e.y:e.ey;t&&(t._tp={t0:S.T,dur:n,ex:i,ey:a,team:r});const s=l=>{const u=ht(l.uid);return l.t>.15&&(!u||u.dead||!(u.status&&u.status.tp))};T({type:"custom",layer:"ground",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=C(i,a),m=S.T,p=Math.min(1,f.t/.25);l.globalAlpha=p*.8,st(i,a,1.05,o[2],null,2),l.lineDashOffset=m*26,l.globalAlpha=p*.9,st(i,a,.8,o[1],null,3,[7,5]),l.lineDashOffset=-m*40,st(i,a,.5,o[0],null,2,[3,6]),l.lineDashOffset=0;for(let b=0;b<4;b++){const M=b/4*J+Math.PI/4,v=(m*(1.2+h*1.5)+b*.25)%1,w=1.65-v*.75,[_,A]=C(i+Math.cos(M)*w,a+Math.sin(M)*w);l.globalAlpha=p*Math.sin(v*Math.PI),l.fillStyle=o[1];const R=c-_,P=d-A,z=Math.hypot(R,P)||1,O=-P/z,F=R/z;for(let X=0;X<6;X++)l.fillRect(I(_+R/z*X+O*(6-X))-1,I(A+P/z*X+F*(6-X))-1,2,2),l.fillRect(I(_+R/z*X-O*(6-X))-1,I(A+P/z*X-F*(6-X))-1,2,2)}l.globalAlpha=p,l.fillStyle=o[0];const y=.8*$.HW*Math.SQRT2,x=.8*$.HH*Math.SQRT2;for(let b=0;b<8;b++){const M=b/8*J-m*.6;C0(l,c+Math.cos(M)*y*1.18,d+Math.sin(M)*x*1.18,b+3,2)}(f.lt||0)<f.t-.25&&(f.lt=f.t,Lt(i,a,1.2+.6*h,fa[r]||fa.blue,.35+.4*h,.32))}}),T({type:"custom",layer:"top",add:!0,dur:n+.3,x:i,y:a,uid:e.uid,draw(l,u,f){if(s(f)){f.t=f.dur;return}const h=Math.min(1,f.t/n),[c,d]=C(i,a),m=40+120*h,p=I(3+5*h+Math.sin(S.T*18)*1);for(let y=0;y<m;y+=3)l.globalAlpha=(1-y/m)*(.35+.5*h),l.fillStyle=y%12<3?o[0]:o[1],l.fillRect(I(c)-p,I(d-y)-3,p*2,3);for(let y=0;y<5;y++){const x=(S.T*.8+y/5)%1,b=S.T*4+y*1.3;l.globalAlpha=Math.sin(x*Math.PI)*h,l.fillStyle=o[0],l.fillRect(I(c+Math.cos(b)*14)-1,I(d-x*m+Math.sin(b)*4)-1,2,2)}}})}function f2(e,t,n){const r=S.T;e._tp||(e._tp={t0:r,dur:3,team:e.team});const o=e._tp,i=Math.max(0,Math.min(1,(r-o.t0)/o.dur)),a=zo[o.team||e.team]||zo.blue,s=e.scale||1;if(!t){const[l,u]=C(e.x,e.y),f=.8*$.HW*Math.SQRT2*s,h=.8*$.HH*Math.SQRT2*s;Mt(!0);const c=Bt();c.globalAlpha=.6,st(e.x,e.y,.8*s,a[3],null,2);for(let d=0;d<J*i;d+=.07){const m=d-Math.PI/2;c.globalAlpha=.95,c.fillStyle=d>J*i-.3?a[0]:a[1],c.fillRect(I(l+Math.cos(m)*f)-1,I(u+Math.sin(m)*h)-1,3,3)}for(let d=0;d<3;d++)for(let m=0;m<12;m++){const p=m/12,y=d*J/3+p*3-r*(2+i*4);c.globalAlpha=1-p*.7,c.fillStyle=m<3?a[0]:m<7?a[1]:a[2],c.fillRect(I(l+Math.cos(y)*f*(1-p*.8))-1,I(u+Math.sin(y)*h*(1-p*.8))-1,3,3)}c.globalAlpha=1,Mt(!1),jc(e,i,a,s,!1),(e._tpL||0)<r-.25&&(e._tpL=r,Lt(e.x,e.y,1.1+i,fa[o.team||e.team]||fa.blue,.4+.45*i,.32,{uid:e.id}));return}jc(e,i,a,s,!0),Math.random()<.3+i*.4&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(0,.4),0,0,g(1.2,2.4),.5,a[Math.random()*3|0],2,-.5,!0)}function jc(e,t,n,r,o){const i=S.T,a=yn(e),[s,l]=C(e.x,e.y);Mt(!0);const u=Bt();for(let f=0;f<3;f++){const h=(i*(.8+t*1.4)+f/3)%1,c=l-h*a*1.15*$.ZK,d=(24-h*8)*r,m=d*.32;u.globalAlpha=Math.sin(h*Math.PI)*(.5+.5*t)*(o?1:.55),u.fillStyle=f?n[1]:n[0];for(let p=0;p<J;p+=.2)Math.sin(p)>0===o&&u.fillRect(I(s+Math.cos(p)*d)-1,I(c+Math.sin(p)*m)-1,2,2)}u.globalAlpha=1,Mt(!1)}function A3(e){const t=ht(e.uid),n=e.team||t&&t.team||"blue",r=zo[n]||zo.blue,o=e.ex===void 0?e.x:e.ex,i=e.ey===void 0?e.y:e.ey;t&&(t._tp=null),at.sfx("tp_end",o,i,1),T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(a,s){const[l,u]=C(e.x,e.y),f=I(16*(1-s))+1,h=60+140*s;for(let c=0;c<h;c+=3)a.globalAlpha=(1-s)*(1-c/h),a.fillStyle=c<h*s?r[0]:r[1],a.fillRect(I(l)-f,I(u-c)-3,f*2,3);a.globalAlpha=1-s,st(e.x,e.y,.9*(1-s)+.05,r[1],null,3)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:o,y:i,draw(a,s,l){const[u,f]=C(o,i),h=Math.min(1,s/.14),c=f-320,d=c+(f-c)*h,m=I(s<.14?10:10+14*(1-(s-.14)/.86)*Math.sin(Math.min(1,(s-.14)*4)*Math.PI));if(a.globalAlpha=s<.45?1:(1-s)/.55,a.fillStyle=r[1],a.fillRect(I(u)-m,I(c),m*2,I(d-c)),a.fillStyle=r[0],a.fillRect(I(u)-I(m*.4),I(c),I(m*.8),I(d-c)),!l.hit&&h>=1){l.hit=!0,ot(4);for(let p=0;p<26;p++){const y=Math.random()*J,x=g(1.5,4);E(o,i,.2,Math.cos(y)*x,Math.sin(y)*x,g(.5,2.5),.55,r[p%3],3,3,!0)}T({type:"custom",layer:"ground",add:!0,dur:.55,x:o,y:i,draw(p,y){p.globalAlpha=1-y,st(o,i,.3+1.6*Qt(y),r[1],null,6*(1-y)+1),st(o,i,.2+1*Qt(y),r[0],null,2,[3,3])}})}}}),Lt(o,i,2.6,fa[n]||fa.blue,1,.65)}function T3(e){const t=ht(e.uid),n=t&&t.team||"blue",r=zo[n]||zo.blue;t&&(t._tp=null),at.sfx("tp_cancel",e.x,e.y,1),T({type:"custom",layer:"top",dur:.5,x:e.x,y:e.y,draw(o,i){const[a,s]=C(e.x,e.y);for(let l=0;l<3;l++){const u=(1-Qt(Math.min(1,i*2)))*(20+l*22),f=22+i*10,h=i>.5?.5:0;o.globalAlpha=1-i*i,o.fillStyle=i<.4?r[1]:"#b4b2be";for(let c=0;c<J;c+=.22)W(l*31+c*7)<h||o.fillRect(I(a+Math.cos(c)*f)-1,I(s-u+Math.sin(c)*f*.32+(i>.5?(i-.5)*30*W(c*13+l):0))-1,3,3)}}});for(let o=0;o<12;o++){const i=Math.random()*J,a=g(.8,2);E(e.x,e.y,g(.3,1),Math.cos(i)*a,Math.sin(i)*a,g(.5,1.5),.5,o%3?"#8a8894":r[2],2,6,!1)}for(let o=0;o<3;o++)T({type:"puff",x:e.x+g(-.3,.3),y:e.y+g(-.3,.3),r:g(10,14),dur:g(.4,.6),col:[140,140,150]})}function c2(e){if(e.kind!=="hero")return 0;if(e.auraLs!==void 0||e.auraAs!==void 0||e.auraFrost!==void 0)return(e.auraLs?1:0)|(e.auraAs?2:0)|(e.auraFrost?4:0);if(e.items!==e._auArr){e._auArr=e.items;let t=0;const n=window.SIM&&window.SIM.ITEM;for(const r of e.items||[]){const o=n&&n[r];o&&(t|=(o.auraLs?1:0)|(o.auraAs?2:0)|(o.auraFrost?4:0))}e._auB=t}return e._auB||0}function R3(e,t,n){const r=S.game&&S.game.player,o=r===e,[i,a]=C(e.x,e.y),s=e.scale||1,l=Bt();if(t&2){const u=.75*$.HW*Math.SQRT2*s,f=.75*$.HH*Math.SQRT2*s,h=(n*2+e.id)%J;for(let c=0;c<7;c++){const d=c/7*J-n*.5,m=I(i+Math.cos(d)*u),p=I(a+Math.sin(d)*f),y=Math.abs(((d-h)%J+J)%J)<.6;l.globalAlpha=.85,l.fillStyle="#4a2e08",l.fillRect(m-3,p-4,7,6),l.fillRect(m-2,p+2,5,2),l.fillRect(m-1,p+4,3,1),l.fillStyle=y?"#fff6c8":"#e0b040",l.fillRect(m-2,p-3,5,5),l.fillRect(m-1,p+2,3,2),l.fillStyle=y?"#ffffff":"#a87418",l.fillRect(m,p-3,1,6)}o&&(l.globalAlpha=.12,st(e.x,e.y,6.5,"#e0b040",null,2,[3,9]))}if(t&1&&(l.globalAlpha=.4,l.lineDashOffset=n*12,st(e.x,e.y,.5*s,"#c03050",null,1.5,[2,5]),l.lineDashOffset=0,o&&(l.globalAlpha=.1,st(e.x,e.y,6.5,"#c03050",null,2,[2,10]))),t&4){const u=.95*$.HW*Math.SQRT2*s,f=.95*$.HH*Math.SQRT2*s;Mt(!0);const h=Bt();for(let c=0;c<5;c++){const d=n*.7+c/5*J,m=I(i+Math.cos(d)*u),p=I(a+Math.sin(d)*f-3-Math.sin(n*2+c)*2);h.globalAlpha=.65,h.fillStyle="#c8f0ff",h.fillRect(m-2,p,5,1),h.fillRect(m,p-2,1,5),h.fillRect(m-1,p-1,1,1),h.fillRect(m+1,p+1,1,1),h.fillRect(m+1,p-1,1,1),h.fillRect(m-1,p+1,1,1)}h.globalAlpha=1,Mt(!1),o&&(l.globalAlpha=.12,st(e.x,e.y,5,"#9ae0ff",null,2,[4,8])),Math.random()<.08&&E(e.x+g(-.5,.5),e.y+g(-.5,.5),g(.6,1.2),0,0,-.3,.9,"#e8f8ff",2,.2,!0)}l.globalAlpha=1}function C3(e,t,n){const[r,o]=C(t.x,t.y,yn(t)+.12),i=I(r-14*(t.scale||1)),a=I(o);e.globalAlpha=.95,e.fillStyle="#3a2010",e.fillRect(i,a-4,2,26),e.fillStyle="#e0b040",e.fillRect(i-1,a-6,4,3);for(let s=0;s<9;s++){const l=I(Math.sin(n*7-s*.7+t.id)*2),u=I(10-s*.6);e.fillStyle="#5a0a18",e.fillRect(i+2+s*2,a-3+l,2,u+2),e.fillStyle=s%3?"#c03050":"#ff6a7a",e.fillRect(i+2+s*2,a-2+l,2,u)}e.globalAlpha=1}function P3(e,t){t.banner&&Math.random()<.025&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.4,0,0,.8,.5,"#ff5a7a",2,0,!0),t.cuirass&&Math.random()<.025&&E(e.x+g(-.25,.25),e.y+g(-.25,.25),.6,0,0,.5,.4,"#ffe080",2,0,!0),t.frostAura&&Math.random()<.05&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),.9,0,0,-.4,.7,"#d8f6ff",2,.3,!0)}function I3(e){const t=S.game&&S.game.player,n=e.uid!==void 0?ht(e.uid):null;if((e.type==="item_berserk"||e.type==="item_bloodlust"||e.type==="item_refresh"||e.type==="item_immune"||e.type==="item_push"||e.type==="camp_buff"||e.type==="mon_howl"||e.type==="mon_rootslam"||e.type==="item_wand"||e.type==="item_phase"||e.type==="item_arcane"||e.type==="item_clarity"||e.type==="item_reflect"||e.type==="item_mirror"||e.type==="item_mekansm"||e.type==="item_dust"||e.type==="item_evade")&&n&&!n.dead&&He(n))return!0;switch(e.type){case"item_crit":return ix(e),!0;case"item_chain":return ax(e),!0;case"item_bash":return ux(e),!0;case"item_berserk":return dx(e),!0;case"item_bloodlust":return yx(e),!0;case"item_drain":return xx(e),!0;case"item_hex":return Mx(e),!0;case"item_refresh":return _x(e),!0;case"item_immune":return Ax(e),!0;case"item_spellblock":return Rx(e),!0;case"item_push":return Cx(e),!0;case"ward_place":return t&&e.team===t.team&&Fx(e),!0;case"ward_break":return t&&(e.team===t.team||n&&n.team===t.team)&&Ex(e),!0;case"mon_howl":return Lx(e),!0;case"mon_spores":return Ux(e),!0;case"mon_rootslam":return Dx(e),!0;case"camp_buff":return Bx(e),!0;case"item_wand":return Wx(e),!0;case"item_phase":return qx(e),!0;case"item_arcane":return jx(e),!0;case"item_clarity":return t3(e),!0;case"item_dust":return r3(e),!0;case"item_evade":return a3(e),!0;case"item_frostwave":return l3(e),!0;case"item_lance":return u3(e),!0;case"item_cyclone":return f3(e),!0;case"item_reflect":return m3(e),!0;case"item_veil":return y3(e),!0;case"item_mekansm":return x3(e),!0;case"item_midas":return v3(e),!0;case"item_mirror":return S3(e),!0;case"item_abyss":return w3(e),!0;case"tp_start":return _3(e),!0;case"tp_end":return A3(e),!0;case"tp_cancel":return T3(e),!0}return!1}function z3(e){const t=e.status||{},n=S.T;(e.aura||e.auraFx)&&Px(e,n),(t.camp_pack||t.camp_spore||t.camp_bark)&&Nx(e,t,n);const r=c2(e);if(r&&R3(e,r,n),(t.banner||t.cuirass||t.frostAura)&&P3(e,t),t.cyclone?(e._cyS===void 0&&(e._cyS=S.T),u2(Bt(),e,n,!1)):e._cyS!==void 0&&(e._cyS=void 0,c3(e)),t.tp?f2(e,!1):e._tp&&S.T-e._tp.t0>e._tp.dur+1&&(e._tp=null),Zs(e,t,"phase")?Vx(e,n):e._phX!==void 0&&(e._phX=e._phY=void 0),t.berserk){const o=.5+.5*Math.sin(n*9+e.id);Mt(!0);const i=Bt();i.globalAlpha=.3+.25*o,st(e.x,e.y,(e.r||.4)*(e.scale||1)+.08+.05*o,"#ff3a2a",null,2),i.globalAlpha=1,Mt(!1),Math.random()<.3&&E(e.x+g(-.3,.3),e.y+g(-.3,.3),.05,0,0,g(1.2,2.2),.5,Math.random()<.5?"#ff3a2a":"#a0100a",2,-.5,!0)}}function O3(e,t){const n=t.status||{},r=S.T;n.bloodlust&&gx(e,t,r),n.immune&&Tx(t,r),n.cyclone&&u2(e,t,r,!0),n.tp&&f2(t,!0),Zs(t,n,"reflect")&&p3(e,t,r),Zs(t,n,"veil")&&g3(e,t,r),c2(t)&1&&C3(e,t,r),Zs(t,n,"clarity")&&Math.random()<.05&&E(t.x+g(-.25,.25),t.y+g(-.25,.25),yn(t)*.6,0,0,.5,.9,"#bfe4ff",2,-.1,!0),n.hex?(bx(t,r),t._hexV=1):t._hexV&&(t._hexV=0,vx(t))}const at={sfx:(e,t,n,r,o)=>{},say:e=>{},banner:(e,t,n,r,o)=>{},play:(e,t)=>{},t:e=>e,babble:(e,t,n,r)=>{}},Zn={fire:["#fff6c0","#ffd25a","#ff8a2a","#e8441c","#a8200f"],arcane:["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0"],frost:["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],spores:["#f0ffc0","#b8f070","#78c040","#3e8a2a"],heal:["#ffffff","#c8ffd0","#6aff8a","#20b050"],dust:["#f4e6c8","#d0b080","#9a7a50","#6a5034"],smoke:["#e8e8f0","#b4b4c4","#80808e","#55556a"],splash:["#ffffff","#c8f4f0","#6ac0d0","#2a80a0"],root:["#c8f080","#80b040","#5a7a2a","#5a3a20"],arrow:["#ffffff","#f0e6c8","#c8b890","#806040"],dagger:["#ffffff","#d0dce8","#9aa8b8","#5a6070"],slash:["#ffffff","#ffe0e0","#ff8080","#d02020"],quake:["#f4e0c0","#c09a70","#8a6a48","#5a4030"],roar:["#ffffff","#fff2a0","#ffd040","#e09020"],wind:["#ffffff","#c8ffd8","#80e8a8","#40b070"],spear:["#ffffff","#c8c8c8","#a0a0a0","#606060"],stone:["#e8e4dc","#b0a898","#807868","#5a5448"],tower_blue:["#ffffff","#c8f6ff","#6ad4ff","#2a8ad0"],tower_red:["#ffffff","#ffe0a0","#ff9a4a","#d8401c"],bite:["#fbf0ff","#d0a8ff","#9a60e0","#5a2a90"],gold:["#ffffff","#fff2a0","#ffd24a","#d89a20"],blood:["#ff8080","#e02a2a","#901010","#600808"],moon:["#ffffff","#f0e8ff","#c8b8ff","#9a80e8"],bubble:["#ffffff","#d8f6ff","#9ae0ff","#ff9ad8"],thorn:["#fff4e0","#e0c090","#a87a40","#6a4a24"],iron:["#ffffff","#dfe6f0","#a8b4c8","#6a7890"],shell:["#e8fff4","#a8f0d0","#50c8a0","#208870"],bat:["#ffe0ff","#ff8ae0","#c050d0","#6a2a90"],mush:["#ffffff","#ffd0d0","#ff5a5a","#c02a2a"],cat:["#fff0ff","#ffb8f0","#e070ff","#8a40d0"],owl:["#ffffff","#e0f0ff","#a8c8ff","#7a80e0"],ember:["#fff6c0","#ffb040","#ff6020","#a02010"]};let P0=null;const us=e=>Zn[P0&&P0[e]||e]||Zn.fire,rr=e=>{const t=us(e);return t[Math.random()*t.length|0]};let Rr=[],ca=[],fs=[],nr=[],_l=1,I0=1;function Na(e,t){let n=0;for(let r=0;r<e.length;r++){const o=e[r];t(o)&&(e[n++]=o)}e.length=n}function h2(){Rr=[],ca=[],fs=[],nr=[],Ao.length=0}const Ao=[],F3=64,zs=new Map;function Hf(e){if(typeof e=="number")return e;let t=zs.get(e);if(t!==void 0)return t;if(t=16777215,e[0]==="#"){const n=e.length===4?e[1]+e[1]+e[2]+e[2]+e[3]+e[3]:e.slice(1,7),r=parseInt(n,16);isNaN(r)||(t=r)}else{const n=/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(e);n&&(t=+n[1]<<16|+n[2]<<8|+n[3])}return zs.size>500&&zs.clear(),zs.set(e,t),t}function Lt(e,t,n,r,o=.8,i=.4,a){Ao.length>=F3&&Ao.shift(),Ao.push({x:e,y:t,r:n,col:Hf(r),a:o,life:i,max:i,uid:a&&a.uid||0,delay:a&&a.delay||0})}function E3(e,t,n=1){let r=0;for(let o=Ao.length-1;o>=0&&r<t;o--){const i=Ao[o];if(i.delay>0)continue;const a=i.life/i.max,s=i.a*n*Math.min(1,a*1.6);let l=i.x,u=i.y;if(i.uid){const f=ht(i.uid);f&&!f.dead&&(l=f.x,u=f.y)}e(l,u,i.r*(.8+.2*a),i.col,s),r++}}const Eu=new Map,mi=192,xi=new Float32Array(mi),Lu=new Float32Array(mi),ku=new Float32Array(mi),Uu=new Float32Array(mi),Du=new Float32Array(mi),Xu=new Float32Array(mi);function L3(e,t,n=1){Eu.clear();let r=0;for(const o of Rr){if(!o.glow)continue;const i=Math.floor(o.x/1.4)*4096+Math.floor(o.y/1.4);let a=Eu.get(i);if(a===void 0){if(r>=mi)continue;a=r++,Eu.set(i,a),xi[a]=Lu[a]=ku[a]=Uu[a]=Du[a]=Xu[a]=0}const s=o.life/o.max*o.size,l=Hf(o.col);xi[a]+=s,Lu[a]+=o.x*s,ku[a]+=o.y*s,Uu[a]+=(l>>16&255)*s,Du[a]+=(l>>8&255)*s,Xu[a]+=(l&255)*s}for(let o=0;o<t;o++){let i=-1,a=6;for(let c=0;c<r;c++)xi[c]>a&&(a=xi[c],i=c);if(i<0)break;const s=xi[i];xi[i]=0;let l=Uu[i]/s,u=Du[i]/s,f=Xu[i]/s;const h=Math.max(l,u,f,1);l=l/h*255,u=u/h*255,f=f/h*255,e(Lu[i]/s,ku[i]/s,1.1+Math.min(2.2,Math.sqrt(s)*.28),l<<16|u<<8|f,Math.min(.85,s*.018)*n)}}const Gu={fire:16747056,firering:16747056,firedash:16751162,ember:16742954,arcane:12615935,stars:13674751,blink:13144319,chrono:12099839,frost:9102591,heal:8060826,healring:8060826,roar:16765008,shield:16760928,bite:11567359,tower_blue:7001343,tower_red:16751178,gold:16765514,moon:13154559,bubble:10150143};function E(e,t,n,r,o,i,a,s,l=2,u=0,f=!1,h=.94){_l<1&&Math.random()>_l||Rr.push({x:e,y:t,z:n,vx:r,vy:o,vz:i,life:a,max:a,col:s,size:l,grav:u,glow:f,drag:h})}function xe(e,t,n,r,o=12,i=2.5,a=.6,s=1.5,l=!0,u=3){for(let f=0;f<o;f++){const h=Math.random()*Math.PI*2,c=Math.random()*i;E(e,t,n,Math.cos(h)*c,Math.sin(h)*c,Math.random()*s,a*(.6+Math.random()*.6),rr(r),u+(Math.random()<.3?1:0),4,l)}}function ot(e){S.cam.shake=Math.max(S.cam.shake,e*I0)}function T(e){return e.t=0,ca.push(e),k3(e),e}function k3(e){const t={delay:e.delay||0,uid:e.uid||0};switch(e.type){case"flash":Lt(e.x,e.y,(e.r||1)*1.5+.8,e.col||"#ffffff",.95,e.dur+.1,t);break;case"pillar":Lt(e.x,e.y,1.9,e.col?e.col[0]<<16|e.col[1]<<8|e.col[2]:16769136,.7,e.dur,t);break;case"cone":Lt(e.x+e.ux*e.range*.5,e.y+e.uy*e.range*.5,e.range*.85+.6,16747056,1,e.dur+.15,t);break;case"meteor":Lt(e.x,e.y,1.1,14201087,.55,e.dur+.1,t);break;case"streak":Lt(e.ex,e.ey,1.3,e.col||"#ffffff",.55,e.dur+.05,t);break;case"spark":e.big&&Lt(e.x,e.y,.9,e.col||"#ffffff",.4,.18);break;case"wisp":Lt(e.x,e.y,.9,e.team==="red"?16747640:7915775,.35,e.dur);break}}function Wo(e){e.t=0,fs.push(e)}const Qc={fire:"fire",firering:"boom",firedash:"dash",shield:"shield",spores:"spores",heal:"heal",cast_root:"root",cast_arcane:"arcane",frost:"frost",blink:"blink",cast_stars:"stars",starfall:"boom",cast_dagger:"swing",splash:"splash",smoke:"smoke",slash:"slash",quake:"quake",stoneskin:"stone",dust:"dash",roar:"roar",cast_arrow:"arrow",wind:"wind",cast_arrows:"stars",cast_spores:"spores",bite:"bite",levelup:"levelup",rune:"rune",buy:"buy",towerdown:"boom",bossdown:"announce",recall:"recall"},Zc=new Set(["gato_A","gato_Q","zorra_A","zorra_Q","rana_Q","hongo_E","buho_A","buho_Q","ajolote_Q"]),U3=new Set(["gato","zorra"]),D3={fire:"windup_fire",firering:"windup_fire",firedash:"windup_fire",frost:"windup_magic",arcane:"windup_magic",stars:"windup_magic",blink:"windup_magic",spores:"windup_nature",heal:"windup_nature",root:"windup_nature",splash:"windup_nature",wind:"windup_nature"};function Jc(e){const t=us(e.col&&Zn[e.col]?e.col:"gold"),n=e.uid?ht(e.uid):null;if(e.type==="windup"){at.sfx(D3[e.col]||"windup_phys",e.x,e.y,.55);const r=e.kind==="aoe_target"||e.kind==="zone"||e.kind==="delayed_aoe",o=e.kind==="aoe_self"||e.kind==="heal_aoe"||e.kind==="buff";T({type:"custom",layer:"ground",dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=ht(s.uid),u=l?l.x:s.x,f=l?l.y:s.y;if(i.globalAlpha=.35+.5*a,r&&e.radius)st(e.ex,e.ey,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(o&&e.radius)st(u,f,e.radius*(.3+.7*a),t[1],null,2,[6,5]);else if(!o&&e.range){const h=e.ex-u,c=e.ey-f,d=Math.hypot(h,c)||1,m=Math.min(e.range,d)*a,[p,y]=C(u,f,.1),[x,b]=C(u+h/d*m,f+c/d*m,.1);i.strokeStyle=t[1],i.lineWidth=3,i.setLineDash([8,6]),i.beginPath(),i.moveTo(p,y),i.lineTo(x,b),i.stroke(),i.setLineDash([])}st(u,f,.35+.35*a,t[0],null,2)}}),T({type:"custom",layer:"top",add:!0,dur:e.dur+.05,x:e.x,y:e.y,uid:e.uid,draw(i,a,s){const l=ht(s.uid),[u,f]=C(l?l.x:s.x,l?l.y:s.y,.75);for(let h=0;h<10;h++){const c=h/10*6.283+a*5,d=36*(1-a)+4;i.fillStyle=t[h%t.length],i.fillRect(Math.round(u+Math.cos(c)*d-2),Math.round(f+Math.sin(c)*d*.6-2),4,4)}i.globalAlpha=a,i.fillStyle=t[0],i.fillRect(Math.round(u-3-4*a),Math.round(f-3-4*a),Math.round(6+8*a),Math.round(6+8*a))}})}else e.type==="windup_cancel"?(xe(e.x,e.y,.7,"smoke",10,1.5,.4,1,!1,3),at.sfx("deny",e.x,e.y,.35)):e.type==="channel"?(T({type:"custom",layer:"ground",add:!0,dur:e.dur,x:e.x,y:e.y,uid:e.uid,chan:!0,draw(r,o,i){const a=ht(i.uid);if(!a||!a.channel&&o>.05){i.t=i.dur;return}const s=e.radius||1.2,l=S.T;r.globalAlpha=.7,st(i.x,i.y,s,t[1],null,3),st(i.x,i.y,s*(1-o),t[0],null,2,[4,6]);for(let u=0;u<8;u++){const f=u/8*6.283+l*1.5,[h,c]=C(i.x+Math.cos(f)*s*.85,i.y+Math.sin(f)*s*.85,.05);r.fillStyle=t[u%t.length],r.fillRect(Math.round(h-3),Math.round(c-3),6,6)}n&&Math.random()<.5&&E(n.x,n.y,.9,g(-.5,.5),g(-.5,.5),g(.5,1.5),.5,t[Math.random()*t.length|0],3,-1,!0)}}),at.sfx("channel_start",e.x,e.y,.6)):e.type==="channel_tick"?T({type:"ring",x:e.x,y:e.y,r:Math.max(.6,e.radius||1),dur:.35,col:t[0],w:3}):e.type==="channel_end"&&(e.kind!=="done"?(xe(e.x,e.y,.6,"smoke",12,2,.5,1,!1,3),at.sfx("deny",e.x,e.y,.4)):xe(e.x,e.y,.6,e.col&&Zn[e.col]?e.col:"gold",24,3,.6,2,!0,3))}function X3(e){const t=us(e.type.slice(5)&&Zn[e.type.slice(5)]?e.type.slice(5):"gold"),n=e.ux||0,r=e.uy||0,o=e.x+n*.5,i=e.y+r*.5;T({type:"custom",layer:"top",add:!0,dur:.22,x:o,y:i,draw(a,s,l){const[u,f]=C(l.x,l.y,.55),h=18*(1-s)+4;a.globalAlpha=1-s,a.fillStyle=t[0],a.fillRect(Math.round(u-h/2),Math.round(f-h/2),Math.round(h),Math.round(h)),a.fillStyle=t[1];for(let c=0;c<6;c++){const d=c/6*6.283;a.fillRect(Math.round(u+Math.cos(d)*h),Math.round(f+Math.sin(d)*h*.7),3,3)}}});for(let a=0;a<10;a++)E(o,i,.5,n*g(1.5,4)+g(-.8,.8),r*g(1.5,4)+g(-.8,.8),g(0,1),.3,t[a%t.length],3,0,!0);ot(1.5)}function G3(){const e=S.game,t=window.SIM.HEROES;for(const n of e.fx){if(n.done)continue;n.done=!0;const r=!e.player||n.uid===e.player.id||n.uid===void 0;if(_l=r?1:.4,I0=r?1:.3,n.type==="channel"||n.type==="channel_tick"||n.type==="channel_end"){const l=n.hero&&n.key?j[n.hero+"_"+n.key]:void 0;if(n.type==="channel"&&at.sfx("ab_"+n.hero+"_"+n.key,n.x,n.y,1),l)try{if(l(n)!==!1)continue}catch(u){console.error(u)}Jc(n);continue}if(n.type==="windup"||n.type==="windup_cancel"){Jc(n);continue}typeof n.type=="string"&&n.type.startsWith("cast_")&&X3(n);const o=n.key&&n.hero&&n.type!=="hit"&&n.type!=="transform"?n.hero+"_"+n.key:"",i=o?j[o]:void 0,a=o&&n.type!=="heal"&&!n.impact,s=o?a?"ab_"+o:n.impact&&!i?Qc[n.type]:null:Qc[n.type];if(n.key==="R"&&n.hero&&n.type!=="hit"&&at.babble(n.hero,"ult",n.x,n.y),s&&at.sfx(s,n.x,n.y,n.type==="levelup"&&e.player&&n.uid!==e.player.id?.4:1),i&&n.type!=="heal"){const l=t[n.hero]&&t[n.hero].abil[n.key],u=l&&Gu[l.fx],f=n.ux!==void 0&&n.range&&!n.radius?n.range*.5:0;u!==void 0&&Lt(n.x+(n.ux||0)*f,n.y+(n.uy||0)*f,n.radius?n.radius*1.15+.5:f?n.range*.85+.6:1.6,u,n.impact?.6:.85,n.impact?.3:.6)}if(i)try{if(i(n)!==!1)continue}catch(l){console.error(l)}if(typeof n.type=="string"&&/^(item_|ward_|mon_|camp_|tp_)/.test(n.type))try{if(I3(n))continue}catch(l){console.error(l);continue}if(!o&&n.hero&&typeof n.type=="string"&&j[n.hero+"_ev_"+n.type])try{if(j[n.hero+"_ev_"+n.type](n)!==!1)continue}catch(l){console.error(l);continue}switch(n.type){case"fire":{T({type:"cone",x:n.x,y:n.y,ux:n.ux,uy:n.uy,range:n.range,angle:n.angle,dur:.45});for(let l=0;l<90;l++){const u=Math.atan2(n.uy,n.ux)+(Math.random()-.5)*n.angle*2,f=(.4+Math.random())*n.range*2.4;E(n.x+n.ux*.4,n.y+n.uy*.4,.35,Math.cos(u)*f,Math.sin(u)*f,Math.random()*1.2,.5,rr("fire"),3+(Math.random()<.4?2:0),-1.5,!0,.9)}Wo({type:"scorch",x:n.x+n.ux*n.range*.5,y:n.y+n.uy*n.range*.5,r:n.range*.5,dur:4}),ot(3);break}case"quake":{T({type:"cracks",x:n.x,y:n.y,ux:n.ux||1,uy:n.uy||0,range:n.range,angle:n.angle,dur:1.2,seed:Math.random()*99}),T({type:"ring",x:n.x,y:n.y,r:n.range,dur:.4,col:"#f4e0c0",w:5});for(let l=0;l<50;l++){const u=Math.random()*6.28,f=Math.random()*n.range*2.5;E(n.x,n.y,.1,Math.cos(u)*f,Math.sin(u)*f,1+Math.random()*2,.7,rr("quake"),3,6,!1)}ot(n.monster?4:6);break}case"firering":case"frost":case"roar":case"splash":case"spores":case"healring":{const l=n.type==="firering"?"fire":n.type==="healring"?"heal":n.type;Gu[n.type]!==void 0&&Lt(n.x,n.y,n.radius*1.2+.4,Gu[n.type],n.type==="firering"?1:.75,.6),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.45,col:us(l)[1],w:7}),T({type:"ring",x:n.x,y:n.y,r:n.radius*.7,dur:.6,col:us(l)[0],w:3,delay:.08}),n.type==="roar"&&(T({type:"ring",x:n.x,y:n.y,r:n.radius*1.1,dur:.7,col:"#ffd040",w:4,delay:.16}),ot(8)),n.type==="firering"&&(T({type:"flash",x:n.x,y:n.y,r:n.radius,dur:.25,col:"rgba(255,200,80,"}),ot(9),Wo({type:"scorch",x:n.x,y:n.y,r:n.radius*.9,dur:6})),n.type==="frost"&&Wo({type:"frost",x:n.x,y:n.y,r:n.radius,dur:3}),n.type==="splash"&&Wo({type:"wet",x:n.x,y:n.y,r:n.radius*.8,dur:2.5});const u=n.type==="spores"?40:90;for(let f=0;f<u;f++){const h=Math.random()*Math.PI*2,c=n.radius*(1.6+Math.random()*1.6);E(n.x,n.y,.2,Math.cos(h)*c,Math.sin(h)*c,Math.random()*2,.6,rr(l),n.type==="spores"?5:3,3,n.type!=="spores"&&n.type!=="splash")}if(n.type==="spores")for(let f=0;f<14;f++)T({type:"puff",x:n.x+g(-1,1)*n.radius*.7,y:n.y+g(-1,1)*n.radius*.7,r:g(14,26),dur:g(.7,1.3),col:[140,210,90]});break}case"heal":T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[110,255,140]});for(let l=0;l<16;l++)E(n.x+g(-.4,.4),n.y+g(-.4,.4),.2,0,0,1.5+Math.random()*1.5,1,rr("heal"),3,0,!0);break;case"shield":case"stoneskin":T({type:"bubble",uid:n.uid,x:n.x,y:n.y,dur:n.dur||3,col:n.type==="shield"?[255,190,80]:[190,180,160]});break;case"wind":T({type:"swirl",uid:n.uid,x:n.x,y:n.y,dur:n.dur||4});break;case"smoke":for(let l=0;l<12;l++)T({type:"puff",x:n.x+g(-.6,.6),y:n.y+g(-.6,.6),r:g(12,22),dur:g(.6,1.1),col:[170,170,190]});break;case"firedash":case"dust":{const l=n.type==="firedash"?"fire":"dust",u=n.ex||n.x+(n.ux||0)*(n.range||0),f=n.ey||n.y+(n.uy||0)*(n.range||0);for(let h=0;h<30;h++){const c=h/30;E(n.x+(u-n.x)*c+g(-.2,.2),n.y+(f-n.y)*c+g(-.2,.2),.15,g(-.5,.5),g(-.5,.5),g(.3,1.2),.5+c*.4,rr(l),4,0,l==="fire")}T({type:"streak",x:n.x,y:n.y,ex:u,ey:f,dur:.35,col:l==="fire"?"#ffb040":"#e8d0a0"});break}case"blink":{const l=n.ex||n.x,u=n.ey||n.y;T({type:"flash",x:n.x,y:n.y,r:.9,dur:.25,col:"rgba(200,140,255,"}),T({type:"flash",x:l,y:u,r:1.1,dur:.3,col:"rgba(220,170,255,"}),T({type:"streak",x:n.x,y:n.y,ex:l,ey:u,dur:.3,col:"#d8a8ff"}),xe(n.x,n.y,.4,"arcane",16,2,.5),xe(l,u,.4,"arcane",22,2.5,.6);break}case"cast_stars":for(let l=0;l<20;l++){const u=Math.random()*6.28,f=Math.random()*n.radius;E(n.x+Math.cos(u)*f,n.y+Math.sin(u)*f,.1,0,0,2,.6,rr("arcane"),2,0,!0)}break;case"starfall":for(let l=0;l<18;l++)T({type:"meteor",x:n.x+g(-1,1)*n.radius*.8,y:n.y+g(-1,1)*n.radius*.8,dur:.35,delay:l*.02});T({type:"flash",x:n.x,y:n.y,r:n.radius*1.1,dur:.35,col:"rgba(230,190,255,"}),T({type:"ring",x:n.x,y:n.y,r:n.radius,dur:.5,col:"#e2b8ff",w:7}),xe(n.x,n.y,.2,"arcane",70,6,.8,3),Wo({type:"scorch",x:n.x,y:n.y,r:n.radius*.8,dur:5,col:[60,30,90]}),ot(10);break;case"slash":T({type:"xslash",x:n.x,y:n.y,dur:.35}),xe(n.x,n.y,.5,"blood",20,4,.5,2,!1),xe(n.x,n.y,.5,"slash",14,4,.4),ot(7);break;case"hit":{if(n.hero&&(n.kind==="hero"||n.proj)){const u=n.proj&&n.pkey||"A";if(u==="A"&&De[n.hero]){if(U3.has(n.hero)||at.sfx("atk_"+n.hero,n.x,n.y,n.big?1:.8),!(n.proj&&Zc.has(n.hero+"_A")))try{De[n.hero](n)}catch(h){console.error(h)}break}if(u!=="A"&&Zc.has(n.hero+"_"+u))break;const f=u!=="A"?j[n.hero+"_"+u+"_hit"]:void 0;if(f){at.sfx("imp_"+n.hero+"_"+u,n.x,n.y,.9);try{f(n)}catch(h){console.error(h)}break}}const l=n.col&&Zn[n.col]?n.col:n.hero==="dragon"?"fire":"slash";T({type:"spark",x:n.x,y:n.y,dur:.15,big:!!n.big,col:Zn[l][0]}),xe(n.x,n.y,.45,l,n.big?10:5,n.big?3:2,.35,1.5,!0,2),at.sfx(n.big||n.skill?"hitbig":"hit",n.x,n.y,n.kind==="minion"?.35:n.kind==="monster"?.6:.8),n.skill&&ot(2);break}case"shoot":if(n.kind==="hero"&&n.hero){at.sfx("shot_"+n.hero,n.x,n.y,.6);break}at.sfx(n.proj==="arrow"?"arrow":n.proj==="tower"?"tower":n.proj==="spear"?"spear":"arcane",n.x,n.y,n.kind==="minion"?.3:.6);break;case"bite":T({type:"jaws",x:n.x,y:n.y,dur:.35}),xe(n.x,n.y,.3,"bite",24,3,.5),ot(5);break;case"transform":{if(n.hero&&j[n.hero+"_T"]){at.sfx("tf_"+n.hero,n.x,n.y,1);try{j[n.hero+"_T"](n)}catch(f){console.error(f)}break}const l=n.kind==="fire",u=l?[255,140,50]:[255,220,90];T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1.2,col:u}),T({type:"ring",x:n.x,y:n.y,r:2.6,dur:.7,col:l?"#ff9a3a":"#ffe070",w:6}),xe(n.x,n.y,.6,l?"fire":"gold",70,5,.9,3,!0,4),ot(n.uid===(e.player&&e.player.id)?10:4),at.sfx("roar",n.x,n.y,.8);break}case"levelup":T({type:"pillar",x:n.x,y:n.y,uid:n.uid,dur:1,col:[255,220,90]}),T({type:"ring",x:n.x,y:n.y,r:1.2,dur:.6,col:"#ffe070",w:4});break;case"death":n.kind==="hero"?(n.sprite&&at.babble(n.sprite==="slime"&&(ht(n.uid)||{}).heroKey||n.sprite,"die",n.x,n.y),xe(n.x,n.y,.4,"smoke",22,2.5,.9,2,!1,4),T({type:"wisp",x:n.x,y:n.y,dur:1.5,team:n.team}),at.sfx("death",n.x,n.y)):n.kind==="minion"?(xe(n.x,n.y,.3,"smoke",8,1.5,.6,1,!1,3),at.sfx("mdeath",n.x,n.y,.3)):n.kind==="monster"&&(xe(n.x,n.y,.3,"spores",18,2.5,.8,2,!1,4),at.sfx("mdeath",n.x,n.y,.5));break;case"towerdown":for(let l=0;l<26;l++){const u=Math.random()*6.28,f=g(1.5,5);E(n.x+g(-.3,.3),n.y+g(-.3,.3),g(.8,2.2),Math.cos(u)*f,Math.sin(u)*f,g(3,9),g(1.2,2),rr("stone"),Math.random()*4+4|0,14,!1,.97)}for(let l=0;l<14;l++)T({type:"puff",x:n.x+g(-1.2,1.2),y:n.y+g(-1.2,1.2),r:g(26,46),dur:g(1.2,2.2),col:[150,140,130]});T({type:"pillar",x:n.x,y:n.y,dur:.8,col:[255,200,120]}),Wo({type:"scorch",x:n.x,y:n.y,r:1.8,dur:30}),at.say(n.team===(e.player&&e.player.team)?"tower_ally":"tower_enemy"),at.banner(n.team===(e.player&&e.player.team)?"PERDIMOS UNA TORRE":"TORRE DESTRUIDA",n.team===(e.player&&e.player.team)?"#ff7a6a":"#7fd0ff",null,null,!1);case"bossdown":n.type==="bossdown"&&at.say(n.monster==="serpent"?"serpent":"boss"),xe(n.x,n.y,1,n.type==="bossdown"?"gold":"fire",120,7,1.2,5);for(let l=0;l<30;l++)E(n.x,n.y,1,g(-4,4),g(-4,4),g(3,8),1.4,rr("stone"),5,12,!1);T({type:"flash",x:n.x,y:n.y,r:3,dur:.4,col:n.type==="bossdown"?"rgba(255,230,120,":"rgba(255,170,80,"}),T({type:"ring",x:n.x,y:n.y,r:4,dur:.7,col:"#ffe0a0",w:8}),ot(14);break;case"killbanner":{const l=e.player,u=l&&n.uid===l.id;if(T({type:"wisp",x:n.x,y:n.y,dur:1.6}),xe(n.x,n.y,.8,"gold",u?40:14,4,.9,3,!0,3),!n.hero)break;const f=["","","¡DOBLE ASESINATO!","¡TRIPLE ASESINATO!","¡CUÁDRUPLE ASESINATO!","¡PENTAKILL!"],h=n.big===1,c=n.big===2,d=n.dur||0,m=h?"first":n.skill>=2?"multi":c?"ace":d>=7?"godlike":d>=5?"unstoppable":d===4?"rampage":d===3?"spree":"kill",y=m==="multi"?f[Math.min(5,n.skill)]:{first:"¡PRIMERA SANGRE!",ace:"¡AS! EQUIPO ELIMINADO",godlike:"¡DIVINO!",unstoppable:"¡IMPARABLE!",rampage:"¡DESENFRENADO!",spree:"¡EN RACHA!",kill:"ASESINATO"}[m],x=l&&n.team===l.team;at.banner(y,x?"#7fd0ff":"#ff7a6a",n.hero,n.kind,!!(h||c||n.skill>=2||u));const b=l&&l.heroKey===n.kind&&l.dead&&n.team!==l.team,M=["","","double","triple","quadra","penta"];at.say(m==="first"?"first_blood":m==="multi"?M[Math.min(5,n.skill)]:m==="kill"?b?"you_died":x?"kill":"ally_killed":m),u&&ot(6);break}case"runespawn":at.say("rune");break;case"chrono":T({type:"custom",layer:"top",add:!0,dur:n.dur||3,x:n.x,y:n.y,draw(l,u,f){l.globalAlpha=.35*(u>.9?(1-u)*10:1),st(f.x,f.y,n.radius,"#e0d0ff","rgba(150,120,255,0.18)",3);const[h,c]=C(f.x,f.y,0);for(let d=0;d<12;d++){const m=d/12*6.283;l.fillStyle="#ffffff",l.fillRect(Math.round(h+Math.cos(m)*n.radius*46),Math.round(c+Math.sin(m)*n.radius*23),3,3)}}}),ot(5);break;case"hook_pull":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.35,col:"#d0c0a0"}),xe(n.x,n.y,.5,"blood",14,2,.4,1,!1,3);break;case"global_hit":T({type:"streak",x:n.x,y:n.y-.01,ex:n.x,ey:n.y,dur:.3,col:"#ffffff"}),T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.4,col:"#c8e8ff",w:5}),xe(n.x,n.y,.8,"arcane",20,3,.5,3,!0,3),ot(3);break;case"pet_fade":if(Object.keys(j).some(l=>{if(!l.endsWith("_petfade"))return!1;try{return j[l](n)===!0}catch(u){return console.error(u),!1}}))break;xe(n.x,n.y,.4,"smoke",10,1.5,.5,1,!1,3);break;case"item_blink":at.sfx("item_blink",n.x,n.y),xe(n.x,n.y,.6,"arcane",18,2.5,.4,2,!0,3),xe(n.ex,n.ey,.6,"frost",18,2.5,.4,2,!0,3),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.2,col:"#bfe8ff"});break;case"item_shield":at.sfx("item_shield",n.x,n.y,.7),T({type:"ring",x:n.x,y:n.y,r:.9,dur:.5,col:"#ffe070",w:4}),xe(n.x,n.y,.8,"gold",12,1.5,.6,2,!0,3);break;case"item_purge":at.sfx("item_purge",n.x,n.y),T({type:"ring",x:n.x,y:n.y,r:1.3,dur:.45,col:"#c8f8ff",w:5}),xe(n.x,n.y,.6,"frost",24,3,.5,3,!0,3);break;case"item_invis":at.sfx("item_invis",n.x,n.y),xe(n.x,n.y,.5,"smoke",26,2,.8,1.5,!1,4);break;case"item_drum":at.sfx("item_drum",n.x,n.y);for(let l=0;l<3;l++)T({type:"ring",x:n.x,y:n.y,r:n.radius||6,dur:.6,col:"#ffb060",w:3,delay:l*.14});ot(3);break;case"item_freeze":at.sfx("item_freeze",n.ex,n.ey),T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:"#9ae8ff"}),xe(n.ex,n.ey,.6,"frost",30,3,.6,2,!0,3);break;case"ping":{const l=e.player;if(!l||n.team!==l.team)break;const u=n.kind==="danger"?"#ff5a4a":n.kind==="omw"?"#7fd0ff":n.kind==="missing"?"#ffd24a":"#8ae08a";for(let f=0;f<3;f++)T({type:"ring",x:n.x,y:n.y,r:1.4,dur:.9,col:u,w:4,delay:f*.18});T({type:"pingmark",x:n.x,y:n.y,dur:3,col:u,kind:n.kind}),at.play(n.kind==="danger"?"deny":"aim",.7);break}case"laser":T({type:"streak",x:n.x,y:n.y,ex:n.ex,ey:n.ey,dur:.25,col:n.team==="blue"?"#9ae8ff":"#ffb070"}),xe(n.ex,n.ey,.5,n.team==="blue"?"tower_blue":"tower_red",16,3,.4,2),at.sfx("tower",n.ex,n.ey,.7);break;case"rooted":T({type:"vines",uid:n.uid,x:n.x,y:n.y,dur:n.dur||1.3});break;case"announce":if(n.snd==="end"){const l=e.player&&e.winner===e.player.team;at.play(l?"victory":"defeat",1),at.say(l?"victory":"defeat")}else at.play("announce",.9);break;case"cast_arcane":case"cast_root":case"cast_dagger":case"cast_arrow":T({type:"flash",x:n.x+(n.ux||0)*.5,y:n.y+(n.uy||0)*.5,r:.45,dur:.15,col:n.type==="cast_arcane"?"rgba(220,170,255,":"rgba(255,255,230,"});break}}_l=1,I0=1,P0=null}function B3(e){for(const t of Rr)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,t.vz-=t.grav*e,t.vx*=t.drag,t.vy*=t.drag,t.z<0&&(t.z=0,t.vz=0);Na(Rr,t=>t.life>0),Rr.length>2500&&Rr.splice(0,Rr.length-2500);for(const t of ca)t.t+=e;Na(ca,t=>t.t<t.dur+(t.delay||0));for(const t of fs)t.t+=e;Na(fs,t=>t.t<t.dur);for(const t of Ao)t.delay>0?t.delay-=e:t.life-=e;Na(Ao,t=>t.life>0),S.cam.shake=Math.max(0,S.cam.shake-e*30)}let Bu=6,Mi=0;function N3(e,t,n,r,o,i){const{HW:a,HH:s,N:l,OX:u}=$,f=window.MAP,h=S.T;if(Bu-=e,Bu<=0&&(Mi=g(.6,1),Bu=g(8,16)),Mi=Math.max(0,Mi-e*.25),S.wind=.35+.15*Math.sin(h*.4)+Mi,Mi>.3&&Math.random()<Mi*.9){const c=n+Math.random()*o,m=t-20-u,p=(m/a+c/s)/2,y=(c/s-m/a)/2,x=["#e8963a","#c45a20","#9ac04a","#6a9a3a","#f0e6c8","#d8c070"][Math.random()*6|0];nr.push({k:"leaf",x:p,y,z:g(.4,2.2),ph:Math.random()*6,life:g(2.5,4),col:x,sp:g(9,15)})}if(nr.length<70&&Math.random()<.8){const c=t+Math.random()*r,d=n+Math.random()*o,m=c-u,p=d,y=(m/a+p/s)/2,x=(p/s-m/a)/2;if(y>1&&x>1&&y<l-1&&x<l-1){const b=f.grid[Math.floor(x)][Math.floor(y)];b===0||b===4?nr.push({k:"fly",x:y,y:x,z:g(.2,.9),ph:Math.random()*6,life:g(4,9),vx:g(-.3,.3),vy:g(-.3,.3)}):b===3&&nr.push({k:"spark",x:y,y:x,z:0,ph:Math.random()*6,life:g(.4,1),max:1})}}for(const c of nr)c.life-=e,c.k==="leaf"&&(c.x+=c.sp*e*.5,c.y-=c.sp*e*.5,c.z+=Math.sin(h*6+c.ph)*.02),c.k==="fly"&&(c.vx+=g(-.6,.6)*e,c.vy+=g(-.6,.6)*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=Math.sin(h*2+c.ph)*.003);if(Na(nr,c=>c.life>0),nr.length>160&&nr.splice(0,nr.length-160),Math.random()<.1&&i.length){const c=i[Math.random()*i.length|0];if(c&&c.sprite.startsWith("prop_oak")){const[d,m]=C(c.x,c.y);d>t&&d<t+r&&m>n&&m<n+o+100&&E(c.x+g(-.4,.4),c.y+g(-.4,.4),1.4,g(-.3,.3),g(-.3,.3),-.25,4,c.sprite==="prop_oak_autumn"?Math.random()<.5?"#e8963a":"#c45a20":Math.random()<.5?"#7ab04a":"#4a7a2a",3,0,!1,.995)}}}let D,Js,yo=null;function th(e,t){D=Js=e,yo=t||null}function Me(e){if(!yo){D.globalCompositeOperation=e?"lighter":"source-over";return}if(e){if(D===yo)return;yo.setTransform(Js.getTransform()),yo.globalAlpha=Js.globalAlpha,yo.globalCompositeOperation="lighter",yo.imageSmoothingEnabled=!1,D=yo}else D=Js}function st(e,t,n,r,o,i=2,a){const{HW:s,HH:l}=$,[u,f]=C(e,t);D.beginPath(),D.ellipse(u,f,Math.max(.1,n*s*Math.SQRT2),Math.max(.1,n*l*Math.SQRT2),0,0,Math.PI*2),o&&(D.fillStyle=o,D.fill()),r&&(D.lineWidth=i,D.strokeStyle=r,a&&D.setLineDash(a),D.stroke(),D.setLineDash([]))}function Nu(e,t,n){D.beginPath(),e.forEach(([r,o],i)=>{const[a,s]=C(r,o);i?D.lineTo(a,s):D.moveTo(a,s)}),D.closePath(),D.fillStyle=n,D.fill(),D.strokeStyle=t,D.lineWidth=2,D.stroke()}function $3(){for(const e of fs){const t=Math.min(1,(e.dur-e.t)/1.5);if(e.type==="scorch"){const n=e.col||[30,20,15];st(e.x,e.y,e.r,null,`rgba(${n[0]},${n[1]},${n[2]},${.45*t})`)}e.type==="frost"&&st(e.x,e.y,e.r,`rgba(220,250,255,${.5*t})`,`rgba(160,220,255,${.25*t})`,2),e.type==="wet"&&st(e.x,e.y,e.r,null,`rgba(40,90,120,${.3*t})`)}}function d2(e,t){if(!(t>1)){e.add&&Me(!0),D.save();try{e.draw(D,t,e)}catch(n){console.error(n)}D.restore(),e.add&&Me(!1)}}function Mt(e){Me(e)}function Bt(){return D}function H3(){const{HW:e}=$;for(const t of ca){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer==="ground"&&d2(t,r);continue}if(t.type==="ring")D.globalAlpha=Math.max(0,1-r),st(t.x,t.y,t.r*Math.min(1,.25+r*1.4),t.col,null,t.w*(1-r*.6)),D.globalAlpha=1;else if(t.type==="cone"){const[o,i]=C(t.x,t.y),a=Math.atan2(t.uy,t.ux);D.save(),Me(!0),D.globalAlpha=Math.max(0,.75*(1-r)),D.beginPath(),D.moveTo(o,i);for(let f=0;f<=16;f++){const h=a-t.angle+2*t.angle*f/16,c=t.range*(.4+Math.min(1,r*3)*.6),[d,m]=C(t.x+Math.cos(h)*c,t.y+Math.sin(h)*c);D.lineTo(d,m)}D.closePath();const[s,l]=C(t.x+t.ux*t.range,t.y+t.uy*t.range),u=D.createLinearGradient(o,i,s,l);u.addColorStop(0,"rgba(255,240,170,0.9)"),u.addColorStop(.5,"rgba(255,130,40,0.6)"),u.addColorStop(1,"rgba(200,40,10,0)"),D.fillStyle=u,D.fill(),Me(!1),D.restore()}else if(t.type==="cracks"){D.strokeStyle=`rgba(40,25,15,${Math.max(0,.8*(1-r))})`,D.lineWidth=2;const o=Math.atan2(t.uy,t.ux);for(let i=0;i<7;i++){const a=o+(i/6-.5)*Math.min(t.angle,3)*1.6;D.beginPath();let[s,l]=C(t.x,t.y);D.moveTo(s,l);for(let u=1;u<=5;u++){const f=t.range*u/5,h=a+(W(t.seed+i*7+u)-.5)*.6;[s,l]=C(t.x+Math.cos(h)*f,t.y+Math.sin(h)*f),D.lineTo(s,l)}D.stroke()}}else if(t.type==="flash"){const[o,i]=C(t.x,t.y,.3),a=t.r*e*1.3;Me(!0);const s=D.createRadialGradient(o,i,0,o,i,a);s.addColorStop(0,t.col+.8*(1-r)+")"),s.addColorStop(1,t.col+"0)"),D.fillStyle=s,D.fillRect(o-a,i-a,a*2,a*2),Me(!1)}else if(t.type==="streak"){const[o,i]=C(t.x,t.y,.4),[a,s]=C(t.ex,t.ey,.4);Me(!0),D.strokeStyle=t.col,D.globalAlpha=Math.max(0,.9*(1-r)),D.lineWidth=8*(1-r)+1,D.beginPath(),D.moveTo(o,i),D.lineTo(a,s),D.stroke(),D.globalAlpha=1,Me(!1)}else if(t.type==="puff"){const[o,i]=C(t.x,t.y,.3+r*.4),a=t.col;D.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},${.5*(1-r)})`;const s=t.r*(.6+r*.7);D.beginPath(),D.ellipse(o,i,s,s*.75,0,0,7),D.fill()}}}function W3(){const e=S.T;for(const t of ca){const n=t.t-(t.delay||0);if(n<0)continue;const r=n/t.dur;if(t.type==="custom"){t.layer!=="ground"&&d2(t,r);continue}const o=t.uid?ht(t.uid):null,i=o?o.x:t.x,a=o?o.y:t.y;if(t.type==="pillar"){const[s,l]=C(i,a),u=t.col,f=140*Math.min(1,r*4),h=Math.max(0,.6*(1-r));Me(!0);const c=D.createLinearGradient(s,l,s,l-f);c.addColorStop(0,`rgba(${u[0]},${u[1]},${u[2]},${h})`),c.addColorStop(1,`rgba(${u[0]},${u[1]},${u[2]},0)`),D.fillStyle=c,D.fillRect(s-18,l-f,36,f),Me(!1)}else if(t.type==="bubble"){if(!o||o.dead||!o.shield&&!(o.status&&o.status.dr))continue;const[s,l]=C(i,a,.35),u=t.col;Me(!0),D.strokeStyle=`rgba(${u[0]},${u[1]},${u[2]},0.8)`,D.lineWidth=2,D.fillStyle=`rgba(${u[0]},${u[1]},${u[2]},0.12)`,D.beginPath(),D.ellipse(s,l,34,38,0,0,7),D.fill(),D.stroke();for(let f=0;f<6;f++){const h=e*1.5+f*1.05;D.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(e*4+f)})`,D.fillRect(s+Math.cos(h)*30-1,l+Math.sin(h)*34-1,3,3)}Me(!1)}else if(t.type==="swirl"){if(!o||o.dead)continue;const[s,l]=C(i,a,.3);D.strokeStyle="rgba(160,255,190,0.7)",D.lineWidth=2;for(let u=0;u<3;u++){const f=e*6+u*2.1;D.beginPath(),D.ellipse(s,l,26,12,0,f,f+1.4),D.stroke()}}else if(t.type==="vines"){if(!o||o.dead)continue;const[s,l]=C(i,a);D.strokeStyle="#4a7a2a",D.lineWidth=3;for(let u=0;u<5;u++){const f=u*1.26;D.beginPath(),D.moveTo(s+Math.cos(f)*16,l+Math.sin(f)*7),D.quadraticCurveTo(s+Math.cos(f)*22,l-18,s+Math.cos(f+1.2)*6,l-30),D.stroke()}D.fillStyle="#8ad050";for(let u=0;u<5;u++){const f=u*1.26+.5;D.fillRect(s+Math.cos(f)*14-2,l-14+Math.sin(f)*6,4,3)}}else if(t.type==="meteor"){const[s,l]=C(t.x,t.y,3*(1-r));Me(!0),D.strokeStyle="rgba(240,200,255,0.9)",D.lineWidth=4,D.beginPath(),D.moveTo(s-18,l-50),D.lineTo(s,l),D.stroke(),D.fillStyle="#ffffff",D.fillRect(s-3,l-3,6,6),Me(!1)}else if(t.type==="xslash"){const[s,l]=C(t.x,t.y,.5),u=40*Math.min(1,r*3);D.globalAlpha=Math.max(0,1-r),D.strokeStyle="#ffffff",D.lineWidth=6,D.beginPath(),D.moveTo(s-u,l-u),D.lineTo(s+u,l+u),D.moveTo(s+u,l-u),D.lineTo(s-u,l+u),D.stroke(),D.strokeStyle="#ff4040",D.lineWidth=2,D.stroke(),D.globalAlpha=1}else if(t.type==="spark"){const[s,l]=C(t.x,t.y,.45),u=(t.big?16:10)*(1-r);Me(!0),D.fillStyle=t.col,D.fillRect(s-u,l-1,u*2,3),D.fillRect(s-1,l-u,3,u*2),D.fillRect(s-u*.5,l-u*.5,u,u),Me(!1)}else if(t.type==="jaws"){const[s,l]=C(t.x,t.y,.5),u=26*(1-Math.min(1,r*2.5));D.strokeStyle="rgba(210,160,255,"+Math.max(0,1-r)+")",D.lineWidth=5,D.beginPath(),D.arc(s,l-u,24,.2,Math.PI-.2),D.stroke(),D.beginPath(),D.arc(s,l+u,24,Math.PI+.2,-.2),D.stroke()}else if(t.type==="pingmark"){const[s,l]=C(t.x,t.y,.9+Math.sin(e*6)*.05);q3(t.col,Math.max(0,1-Math.max(0,r-.8)*5)),D.beginPath(),D.moveTo(s,l+14),D.lineTo(s-9,l-2),D.arc(s,l-6,10,Math.PI*.85,Math.PI*.15),D.closePath(),D.fill(),D.stroke(),D.fillStyle="#120c1a",D.font="bold 13px sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(t.kind==="danger"?"!":t.kind==="omw"?"»":t.kind==="missing"?"?":"+",s,l-6),D.globalAlpha=1}else if(t.type==="wisp"){const[s,l]=C(t.x,t.y,.5+r*2);Me(!0),D.fillStyle=(t.team==="blue"?"rgba(120,200,255,":"rgba(255,140,120,")+.8*(1-r)+")",D.beginPath(),D.arc(s+Math.sin(r*12)*6,l,7,0,7),D.fill(),Me(!1)}}}function q3(e,t){D.globalAlpha=t,D.fillStyle=e,D.strokeStyle="#120c1a",D.lineWidth=2}function V3(){const{HW:e,HH:t,OX:n,ZK:r}=$;for(const o of Rr){if(o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r;D.globalAlpha=Math.min(1,o.life/o.max*1.5),D.fillStyle=o.col,D.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}D.globalAlpha=1,Me(!0);for(const o of Rr){if(!o.glow)continue;const i=(o.x-o.y)*e+n,a=(o.x+o.y)*t-o.z*r,s=Math.min(1,o.life/o.max*1.5);D.globalAlpha=s*.35,D.fillStyle=o.col,D.fillRect(Math.round(i-o.size),Math.round(a-o.size),o.size*2,o.size*2),D.globalAlpha=s,D.fillRect(Math.round(i-o.size/2),Math.round(a-o.size/2),o.size,o.size)}D.globalAlpha=1,Me(!1)}function Y3(){const e=S.T,{HW:t,HH:n,OX:r,ZK:o}=$;for(const i of nr){if(i.k!=="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o,l=Math.abs(Math.sin(e*8+i.ph))*4+1;D.fillStyle="#00000040",D.fillRect(a-l/2+2,s+2,l,3),D.fillStyle=i.col,D.fillRect(a-l/2,s,l,3)}Me(!0);for(const i of nr){if(i.k==="leaf")continue;const a=(i.x-i.y)*t+r,s=(i.x+i.y)*n-i.z*o;if(i.k==="fly"){const l=.5+.5*Math.sin(e*3+i.ph);D.fillStyle=`rgba(210,255,120,${.25*l})`,D.fillRect(a-3,s-3,6,6),D.fillStyle=`rgba(250,255,200,${.9*l})`,D.fillRect(a-1,s-1,2,2)}else{const l=Math.max(0,Math.sin(i.life*Math.PI));D.fillStyle=`rgba(255,255,255,${.7*l})`,D.fillRect(a-1,s,3,1),D.fillRect(a,s-1,1,3)}}Me(!1)}function K3(e){if(typeof e!="string"||!/^\d+[QWERA]$/.test(e))return null;const t=window.SIM.HERO_KEYS[parseInt(e,10)];return t?t+"_"+e.slice(-1):null}function j3(){const{HW:e,HH:t}=$,n=S.T;for(const r of S.game.projs){const o=r.z||.45,[i,a]=C(r.x,r.y,o),s=Math.atan2(((r.vx||0)+(r.vy||0))*t,((r.vx||0)-(r.vy||0))*e),l=K3(r.look||r.fx),u=l?Xe[l]:void 0;if(u){D.save();try{u(D,r,i,a,s,n)}catch(h){console.error(h)}D.restore(),Me(!1);continue}const f=Zn[r.fx]||Zn.arcane;if(r.fx==="arrow"||r.fx==="spear"){const h=r.fx==="arrow"?r.skill?26:16:12;D.save(),D.translate(i,a),D.rotate(s),D.fillStyle="#3a2a1a",D.fillRect(-h,-2,h,4),D.fillStyle="#e8d8b0",D.fillRect(-h,-1,h,2),D.fillStyle="#ffffff",D.beginPath(),D.moveTo(5,0),D.lineTo(-2,-4),D.lineTo(-2,4),D.fill(),D.fillStyle="#e05050",D.fillRect(-h-3,-3,5,2),D.fillRect(-h-3,1,5,2),D.restore(),r.skill&&E(r.x,r.y,o,0,0,0,.25,"#ffffff",2,0,!0)}else if(r.fx==="dagger")D.save(),D.translate(i,a),D.rotate(n*25),D.fillStyle="#1a1020",D.fillRect(-9,-3,18,6),D.fillStyle="#e0e8f0",D.fillRect(-8,-2,14,4),D.fillStyle="#c8a040",D.fillRect(-10,-3,4,6),D.restore();else if(r.fx==="root")D.fillStyle="#5a3a20",D.beginPath(),D.arc(i,a,7,0,7),D.fill(),D.fillStyle="#8ad050",D.beginPath(),D.arc(i+3,a-3,4,0,7),D.fill(),E(r.x,r.y,o,0,0,0,.4,Math.random()<.5?"#6a9a3a":"#5a3a20",3,0,!1);else{const h=r.skill?10:6;Me(!0);const c=D.createRadialGradient(i,a,0,i,a,h*2.4);c.addColorStop(0,f[1]),c.addColorStop(.4,f[2]+"aa"),c.addColorStop(1,f[3]+"00"),D.fillStyle=c,D.fillRect(i-h*2.4,a-h*2.4,h*4.8,h*4.8),Me(!1),D.fillStyle=f[0],D.fillRect(i-3,a-3,6,6),Math.random()<.8&&E(r.x,r.y,o,0,0,0,.35,f[Math.random()*f.length|0],3,0,!0)}}}const go=Math.round,Al=Math.PI*2,Or=(e,t,n,r,o)=>{e.fillStyle=o,e.fillRect(go(t-r/2),go(n-r/2),r,r)},m2=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);j.dragon_T=e=>{const t=["#fff4c0","#ffd04a","#ff8a24","#e0401a","#7a1a0c"];T({type:"custom",layer:"top",add:!0,dur:1.4,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,.9),f=Math.min(1,r*3),h=r>.7?1-(r-.7)/.3:1;n.globalAlpha=h;for(const c of[-1,1])for(let d=0;d<7;d++){const m=-Math.PI/2+c*(.35+d*.22*f),p=(26+d*7)*f;for(let y=0;y<p;y+=3){const x=y/Math.max(1,p),b=Math.sin(S.T*18+d+y*.3)*2;Or(n,l+Math.cos(m)*y+b*c,u+Math.sin(m)*y*.8,x<.3?4:x<.7?3:2,t[Math.min(4,x*4.5|0)])}}for(let c=0;c<14;c++){const d=c/14*Al+r*9,m=18+c%3*6,p=-r*70-c*3;Or(n,l+Math.cos(d)*m,u+20+Math.sin(d)*m*.45+p,3,t[c%4])}}});for(let n=0;n<40;n++){const r=Math.random()*Al,o=g(1,3.5);E(e.x,e.y,.4,Math.cos(r)*o,Math.sin(r)*o,g(2,5),g(.5,1),["#ffd04a","#ff8a24","#e0401a"][n%3],3,-2,!0)}ot(m2(e)?9:3)};j.oso_T=e=>{const t=["#fffbe0","#ffe27a","#e8b030","#a87418","#5a3a0c"];T({type:"custom",layer:"top",add:!0,dur:1.5,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),a=i?i.x:o.x,s=i?i.y:o.y,[l,u]=C(a,s,1.6),f=Math.min(1,r*2.5),h=r>.65?1-(r-.65)/.35:1;n.globalAlpha=.85*h;const c=4,d=l,m=u-40*f;if(["..XX......XX..",".XXXX....XXXX.",".XXXXXXXXXXXX.","XXXXXXXXXXXXXX","XXX..XXXX..XXX","XXXXXXXXXXXXXX","XXXXXooooXXXXX",".XXXooNNooXXX.","..XXXooooXXX..","...XXXXXXXX..."].forEach((y,x)=>[...y].forEach((b,M)=>{b!=="."&&Or(n,d+(M-7)*c,m+(x-5)*c,c,b==="N"?t[4]:b==="o"?t[0]:t[1+(M+x)%2])})),r>.15&&r<.6)for(let y=0;y<3;y++){const x=40+((r-.15)*300+y*22)%90;for(let b=-.9;b<=.9;b+=.12)Or(n,d+Math.cos(b-Math.PI/2)*x,m-10+Math.sin(b-Math.PI/2)*x*.6,3,t[2])}}}),T({type:"custom",layer:"ground",dur:1.2,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=ht(o.uid),[a,s]=C(i?i.x:o.x,i?i.y:o.y),l=10,u=Math.min(1,r*2.2);for(let f=0;f<l;f++){const h=f/l*Al,c=(1-u)*120+30,d=a+Math.cos(h)*c,m=s+Math.sin(h)*c*.5;n.fillStyle=t[3],n.fillRect(go(d-6),go(m-4),12,8),n.fillStyle=t[1],n.fillRect(go(d-5),go(m-3),10,3),n.fillStyle=t[0],n.fillRect(go(d-1),go(m-1),2,2)}}}),ot(m2(e)?10:4)};j.erizo_Q_hit=e=>{T({type:"custom",layer:"top",dur:.55,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.5);for(let a=0;a<9;a++){const s=-Math.PI*.85+a*.21,l=6+22*Math.min(1,n*3);for(let u=0;u<l;u+=2)Or(t,o+Math.cos(s)*u,i+Math.sin(s)*u*.7,u<l*.3?3:2,u>l*.8?"#e8643a":u<l*.3?"#9a6232":"#fff2d6")}t.globalAlpha=1-n,Or(t,o,i,8*(1-n)+2,"#ffcc66")}});for(let t=0;t<10;t++)E(e.x,e.y,.5,g(-2,2),g(-2,2),g(1,3),.5,["#ffcc66","#e2b878","#9a6232"][t%3],2,6,!1)};j.polilla_Q_hit=e=>{T({type:"custom",layer:"top",add:!0,dur:1.1,x:e.x,y:e.y,draw(t,n,r){const[o,i]=C(r.x,r.y,.7);t.globalAlpha=1-n;for(let a=0;a<2;a++){const s=8+n*(30+a*14);for(let l=.4;l<Al-.4;l+=.18)Or(t,o+Math.cos(l+a)*s,i+Math.sin(l+a)*s*.5,2,a?"#c8e8ff":"#f4f0ff")}for(let a=0;a<3;a++){const s=o+Math.sin(n*6+a*2)*10+(a-1)*12,l=i-10-n*40-a*8,u=2;for(let f=0;f<4;f++)Or(t,s+f*u,l,u,"#fff6c8"),Or(t,s+f*u,l+3*u,u,"#fff6c8"),Or(t,s+(3-f)*u,l+f*u*.75,u,"#fff6c8")}}});for(let t=0;t<16;t++)E(e.x,e.y,.6,g(-1,1),g(-1,1),g(.5,1.5),g(.6,1.1),["#f4f0ff","#c8e8ff","#ffe9a0"][t%3],2,-.5,!0)};const or=Math.round,St={x:0,y:0};function sn(e,t,n=0){St.x=(e-t)*$.HW+$.OX,St.y=(e+t)*$.HH-n*$.ZK}const he=e=>e*$.HW*Math.SQRT2,Jn=e=>e*$.ZK,tl=(e,t)=>Math.sqrt(2*$.HH*$.HH*e*e+$.ZK*$.ZK*t*t);function Xr(e,t,n){const r=2*$.HH/$.ZK;return(e+t+r*n)/Math.sqrt(2+r*r)}const Q3=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],eh=new WeakMap;function Ct(e,t,n){if(n=Math.max(1,Math.min(16,Math.round(n))),n>=16)return t;let r=eh.get(e);r||(r=new Map,eh.set(e,r));const o=t+"|"+n;let i=r.get(o);if(!i){const a=document.createElement("canvas");a.width=a.height=8;const s=a.getContext("2d");s.fillStyle=t;for(let l=0;l<16;l++)Q3[l]<n&&s.fillRect((l&3)*2,(l>>2)*2,2,2);i=e.createPattern(a,"repeat")||t,r.set(o,i)}return i}function z0(e,t,n,r,o,i,a,s,l=2){if(r<2||s<=0)return;const u=r*.5,f=a.length,h=or(n-o),c=or(i?n+u:n);for(let d=h;d<c;d+=l){const m=d+l/2-n,p=m<0?r*Math.sqrt(Math.max(0,1-m/o*(m/o))):r*Math.sqrt(Math.max(0,1-m/u*(m/u))),y=!i&&m>-u?r*Math.sqrt(Math.max(0,1-m/u*(m/u))):0;if(p-y<.5)continue;const x=m/o*(m/o);for(let b=0;b<f;b++){const M=a[b];let v=r*Math.sqrt(Math.max(0,M.u0*M.u0-x)),w=b+1<f?r*Math.sqrt(Math.max(0,a[b+1].u0*a[b+1].u0-x)):p;if(v<y&&(v=y),w>p&&(w=p),w-v<.5)continue;e.globalAlpha=s*M.a,e.fillStyle=M.fill;const _=or(t-w),A=or(t-v),R=or(t+v),P=or(t+w);A>_&&e.fillRect(_,d,A-_,l),P>R&&e.fillRect(R,d,P-R,l)}}}function Sr(e,t,n,r,o,i,a,s,l,u,f=2){const h=Math.max(r,o);if(h<2||u<=0||i<1)return;const c=n-i,d=r*.5,m=o*.5,p=s.length,y=l.length,x=a?1:-1;for(let b=-h;b<h;b+=f){const M=Math.abs(b+f/2),v=M/h;let w,_;if(M<=o?w=c+x*m*Math.sqrt(1-M/o*(M/o)):w=c+(M-o)/(r-o)*i,M<=r?_=n+x*d*Math.sqrt(1-M/r*(M/r)):_=n-(M-r)/(o-r)*i,_<w){const O=w;w=_,_=O}let A=0;for(;A+1<p&&v>=s[A+1].u0;)A++;const R=s[A];e.fillStyle=R.fill;const P=or(t+b),z=_-w;for(let O=0;O<y;O++){const F=or(_-z*(O+1)/y),X=or(_-z*O/y);X<=F||l[O]<=0||(e.globalAlpha=u*R.a*l[O],e.fillRect(P,F,f,X-F))}}}function Zr(e,t,n,r,o,i,a,s,l){for(let u=0;u<i;u++){const f=s+u/i*Math.PI*2,h=Math.cos(f),c=Math.sin(f);l&&(h+c>0?1:-1)!==l||(sn(t+h*o,n+c*o,r),e.fillRect(or(St.x-a/2),or(St.y-a/2),a,a))}}function pi(e,t){const n=window.SIM&&window.SIM.HERO_KEYS,r=n&&e.hero&&e.key?n.indexOf(e.hero)+e.key:"";return{x:e.x,y:e.y,look:r,id:-1,t0:S.T,endAt:S.T+t,found:!1,nl:0,fr:-1,rem:t}}function Mn(e){if(e.fr===S.T)return e.rem;e.fr=S.T;const t=S.game;let n=null;if(t&&t.zones){for(const r of t.zones)if(e.id>=0?r.id===e.id:Math.abs(r.x-e.x)<.16&&Math.abs(r.y-e.y)<.16&&(!e.look||!r.look||String(r.look)===e.look)){n=r;break}}if(n){const r=S.T+Math.max(0,n.t);e.id<0?(e.id=n.id,e.endAt=r):r<e.endAt&&(e.endAt=r),e.found=!0}else e.found&&(e.endAt=Math.min(e.endAt,S.T));return e.rem=e.endAt-S.T,e.rem}function fo(e,t,n,r,o,i){S.T<e.nl||(e.nl=S.T+.1,Lt(t,n,r,o,i*.75,.22))}const Qa=e=>e<0?0:e>1?1:e,tt=Math.round,je=Math.PI*2;let jt=0,Wt=0;function Ee(e,t,n=0){jt=(e-t)*$.HW+$.OX,Wt=(e+t)*$.HH-n*$.ZK}function fn(e,t,n,r,o){e.fillStyle=o,e.fillRect(tt(t-r/2),tt(n-r/2),r,r)}function O0(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(tt(t+(r-t)*l/s-i/2),tt(n+(o-n)*l/s-i/2),i,i)}function ha(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(tt(t-a/2),tt(n+i*o),tt(a),Math.max(1,tt(2*o)))}}function Wi(e,t,n,r,o,i=-1e9){e.fillStyle=o;for(let a=-r;a<r;a+=2){const s=Math.abs(a+1),l=s<=r/2?r*.866:r*.866*(r-s)/(r/2);l<.5||n+a<i||e.fillRect(tt(t-l),tt(n+a),tt(l*2),2)}}function Z3(e,t,n,r,o){e.fillStyle=o,e.fillRect(tt(t-r),tt(n-1),r*2,2),e.fillRect(tt(t-1),tt(n-r),2,r*2)}function F0(e,t,n){e.fillStyle=it.l,e.fillRect(tt(t-1),tt(n-4),2,2),e.fillStyle=it.o,e.fillRect(tt(t-2),tt(n-2),4,4),e.fillStyle=it.w,e.fillRect(tt(t-1),tt(n-2),2,2)}const Mr=e=>e<0?0:e>1?1:e,Oo=e=>1-(1-e)*(1-e),it={w:"#fffbe8",l:"#fff0a0",y:"#ffd43a",o:"#f0a010",d:"#b86a00",b:"#6a3a08",cell:"#5a3206"},qi="#2a1e14",J3="#eaf8ff",t5="#b8e0ff",Tl="#ff9ac8",Wf="#9a5ad8",e5="#9a7a48";function p2(e,t,n,r,o){const i=S.game;if(!i)return null;let a=null,s=o*o;for(const l of i.units){if(l.dead||!n||(r?l.team!==n:l.team===n))continue;const u=(l.x-e)*(l.x-e)+(l.y-t)*(l.y-t);u<s&&(s=u,a=l)}return a}function n5(e,t,n,r,o){e.fillStyle=o?J3:t5,o?(e.fillRect(tt(t-3*r-2),tt(n-9),4,5),e.fillRect(tt(t+1*r-1),tt(n-8),3,4)):(e.fillRect(tt(t-5*r-2),tt(n-5),5,3),e.fillRect(tt(t+2*r-2),tt(n-5),4,3)),e.fillStyle=it.y,e.fillRect(tt(t-5),tt(n-3),10,6),e.fillStyle=qi,e.fillRect(tt(t-2*r-1),tt(n-3),2,6),e.fillRect(tt(t+1*r),tt(n-3),2,6),e.fillRect(tt(t+5*r-(r>0?1:2)),tt(n-2),3,4),e.fillRect(tt(t-6*r-1),tt(n-1),2,2)}j.abeja_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5;T({type:"custom",layer:"top",dur:.26,x:r,y:o,draw(i,a){Ee(r,o,.6);const s=26*(1-Oo(a))+4;i.globalAlpha=1-a*.5;for(let l=0;l<14;l++){const u=l/14*je+a*3;fn(i,jt+Math.cos(u)*s,Wt+Math.sin(u)*s*.6,3,l&1?qi:it.y)}a>.6&&(i.fillStyle=Wf,i.fillRect(tt(jt-2),tt(Wt-2),4,4))}});for(let i=0;i<6;i++)E(r,o,.6,t*g(1,3)+g(-.6,.6),n*g(1,3)+g(-.6,.6),g(0,.6),.3,i&1?it.y:it.l,2,0,!0)};Xe.abeja_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=i*30|0;for(let h=3;h<17;h++){const c=h*3.5,d=(h+f)%4,m=(d<2?d:4-d)-1;e.globalAlpha=1-h/17,e.fillStyle=h&1?it.l:it.y,e.fillRect(tt(n-a*c+l*m*5),tt(r-s*c+u*m*5),2,2)}e.globalAlpha=1;for(let h=0;h<=14;h++){const c=n+a*(8-h)*1.6,d=r+s*(8-h)*1.6;if(h<=1)fn(e,c,d,2,it.w);else if(h<=8)fn(e,c,d,2,it.b),(h===4||h===7)&&(fn(e,c-a*2+l*2,d-s*2+u*2,2,it.b),fn(e,c-a*2-l*2,d-s*2-u*2,2,it.b));else{const m=h-9>>1&1?qi:it.y,p=h===9||h===14?1:2;for(let y=-p;y<=p;y++)fn(e,c+l*y*2,d+u*y*2,2,m)}}f&2&&fn(e,n+a*15,r+s*15+2,2,Wf)};j.abeja_Q_hit=e=>{const t=e.x,n=e.y,r=ht(e.uid),o=p2(t,n,r?r.team:void 0,!1,.9);T({type:"custom",layer:"top",dur:1.8,x:t,y:n,vid:o?o.id:0,draw(i,a,s){const l=s.vid?ht(s.vid):null,u=a*1.8;if(l&&l.dead){s.t=s.dur+1;return}Ee(l?l.x:t,l?l.y:n,1.5);const f=jt,h=Wt,c=u<.12?.6+u/.12*.8:u<.2?1.4-(u-.12)/.08*.4:1,d=tt(11*c);i.globalAlpha=u>1.5?(1.8-u)/.3:1,Wi(i,f,h,d,it.d),Wi(i,f,h,d-2,it.y),Wi(i,f,h,d-2,it.o,h+d*.35),i.fillStyle=it.w,i.fillRect(tt(f-d*.5),tt(h-d*.5),3,2),O0(i,f-4,h-4,f+4,h+4,2,qi),O0(i,f+4,h-4,f-4,h+4,2,qi);for(let m=0;m<2;m++){const p=(u*1.6+m*.5)%1,y=d+4+(1-p)*16;i.globalAlpha=(u>1.5?(1.8-u)/.3:1)*p;for(const x of[-1,1])for(let b=-2;b<=2;b++){const M=(x>0?0:Math.PI)+b*.28;fn(i,f+Math.cos(M)*y,h+Math.sin(M)*y,2,it.l)}}if(u>1.2){const m=(u-1.2)/.6;i.globalAlpha=1-m,F0(i,f-4,h+d+m*22),F0(i,f+3,h+d+m*14)}}});for(let i=0;i<8;i++)E(t,n,.5,g(-2,2),g(-2,2),g(.6,1.8),g(.3,.5),i&1?qi:it.y,2,6,!1,.9);for(let i=0;i<4;i++)E(t,n,.6,g(-.8,.8),g(-.8,.8),g(1,2),.5,Wf,3,5,!0);ot(2)};j.abeja_W=e=>{if(e.type==="heal"){r5(e);return}const t=e.x,n=e.y,r=e.radius||4.2,o=Math.random()*9;T({type:"custom",layer:"ground",dur:.75,x:t,y:n,draw(i,a){const s=.3+(r-.3)*Oo(Mr(a*1.5));i.globalAlpha=a>.55?(1-a)/.45:1;for(let l=0;l<44;l++){const u=l/44*je,f=s*(1+Math.sin(u*6+a*9+o)*.045);Ee(t+Math.cos(u)*f,n+Math.sin(u)*f),fn(i,jt,Wt,5,it.o),fn(i,jt,Wt-2,3,it.l),l%4===0&&(i.fillStyle=it.d,i.fillRect(tt(jt-1),tt(Wt+2),2,tt(2+6*a)))}}}),T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(i,a){const s=Mr(a/.6);for(let l=0;l<8;l++){const u=l/8*je+o,f=r*(.6+.3*W(o+l))*s;Ee(t+Math.cos(u)*f,n+Math.sin(u)*f,.6+Math.sin(s*Math.PI)*1.4),s<1?(i.globalAlpha=1,F0(i,jt,Wt)):(i.globalAlpha=1-(a-.6)/.4,i.fillStyle=it.o,i.fillRect(tt(jt-5),tt(Wt-1),10,2),i.fillStyle=it.l,i.fillRect(tt(jt-2),tt(Wt-2),4,1))}}});for(let i=0;i<12;i++){const a=Math.random()*je;E(t,n,.8,Math.cos(a)*g(.5,2),Math.sin(a)*g(.5,2),g(.5,1.5),g(.5,.9),i%3?it.l:it.w,2,-.5,!0)}};function r5(e){const t=e.x,n=e.y,r=p2(t,n,e.team,!0,.6);T({type:"custom",layer:"top",dur:1,x:t,y:n,vid:r?r.id:0,draw(o,i,a){const s=a.vid?ht(a.vid):null,l=s?s.x:t,u=s?s.y:n,f=i*1;Ee(l,u,.55);const h=jt,c=Wt;Ee(l,u,2.6);const d=Wt,m=c-d;if(f>.15){Ee(l,u);const x=Mr((f-.15)/.3);o.globalAlpha=.85*(f>.7?(1-f)/.3:1),o.fillStyle=it.o,ha(o,jt,Wt,tt(16*x),.45),o.fillStyle=it.l,o.fillRect(tt(jt-6*x),tt(Wt-3),tt(6*x),2)}const p=Mr(f/.15)*m,y=f>.45?Mr((f-.45)/.2)*m:0;o.globalAlpha=1;for(let x=tt(y);x<p;x+=3){const b=x/m*(x/m),M=Math.sin(x*.22-S.T*9)*6*b;o.fillStyle=it.o,o.fillRect(tt(h+M-2),tt(d+x),4,3),o.fillStyle=it.l,o.fillRect(tt(h+M-2),tt(d+x),1,3)}if(f>.35)for(let x=0;x<3;x++){const b=(f-.35-x*.08)/.55;b<0||b>1||(o.globalAlpha=1-b,Z3(o,h+(x-1)*12,c-10-b*30,4,x&1?it.y:it.l))}}});for(let o=0;o<5;o++)E(t,n,.4,g(-.5,.5),g(-.5,.5),g(.8,1.6),g(.6,.9),o&1?it.l:it.w,2,-.5,!0)}const Ta=[[0,0],[-14,0],[14,0],[-7,-12],[7,-12],[-7,12],[7,12]];j.abeja_E=e=>{const t=e.x,n=e.y,r=Math.random()*99,o=.55,i=1.7,a=[1,4,6],s=a.map((l,u)=>u/3*je+r);T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(l,u){const f=u*i,h=Oo(Mr(f/.25)),c=f>1.15?Mr((f-1.15)/.5):0;Ee(t,n,.55*h-c*.4);const d=jt,m=Wt;l.globalAlpha=1-c;for(let p=0;p<Ta.length;p++){const y=d+Ta[p][0],x=m+Ta[p][1]*h,b=8;Wi(l,y,x,b,it.d),Wi(l,y,x,b-2,it.cell);const M=Mr((f-.08-p*.04)/.3),v=a.indexOf(p)>=0&&f>o;!v&&M>0&&(Wi(l,y,x,b-2,it.o,x+(b-2)-M*2*(b-2)),l.fillStyle=it.l,l.fillRect(tt(y-3),tt(x-3),2,2)),!v&&f>.4&&a.indexOf(p)>=0&&(l.fillStyle=it.y,l.fillRect(tt(y-4),tt(x-1),8,3))}}}),T({type:"custom",layer:"top",delay:o,dur:.75,x:t,y:n,draw(l,u){Ee(t,n,.55);const f=jt,h=Wt,c=(S.T*30|0)&1;for(let d=0;d<3;d++){const m=f+Ta[a[d]][0],p=h+Ta[a[d]][1];Ee(t+Math.cos(s[d])*1.1,n+Math.sin(s[d])*1.1,.6);const y=jt,x=Wt,b=_=>{const A=Math.sin(_*Math.PI);return[m+(y-m)*_+Math.cos(_*je*1.5+d)*12*A,p+(x-p)*_+Math.sin(_*je*1.5+d)*8*A-A*18]},M=Oo(u);for(let _=1;_<7;_++){const A=M-_*.04;if(A<0)break;const R=b(A);l.globalAlpha=(1-_/7)*.8,l.fillStyle=it.l,l.fillRect(tt(R[0]),tt(R[1]),2,2)}const v=b(M),w=b(Math.max(0,M-.02));l.globalAlpha=u>.8?(1-u)/.2:1,n5(l,v[0],v[1],v[0]>=w[0]?1:-1,!!c)}}}),T({type:"custom",layer:"top",delay:o,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<9;h++)E(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1,2),g(.4,.6),h%3?it.y:it.d,2,6,!1,.9)}}}),T({type:"custom",layer:"top",delay:1.15,dur:.02,x:t,y:n,fired:!1,draw(l,u,f){if(!f.fired){f.fired=!0;for(let h=0;h<14;h++)E(t+g(-.3,.3),n+g(-.3,.3),g(.2,.7),g(-.6,.6),g(-.6,.6),g(0,.5),g(.5,.8),h%3?it.d:it.o,3,4,!1,.9)}}});for(let l=0;l<8;l++)E(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(.3,1),.5,"#c8a878",3,3,!1,.9);ot(2)};const Za=new Map;j.abeja_R=e=>{e.type==="channel"?o5(e):e.type==="channel_tick"?a5(e):e.type==="channel_end"&&s5(e)};function o5(e){const t=e.x,n=e.y,r=e.uid,o=e.radius||5,i=(e.dur||4)+.5,a=2,s=Math.random()*99,l={endT:-1},u=S.T,f={n:0};Za.size>16&&Za.clear(),Za.set(r,l);const h=m=>{if(l.endT<0&&S.mode!=="guest"&&m.t>.1){const y=ht(r);(!y||!y.channel)&&(l.endT=S.T)}if(l.endT<0)return 1;const p=1-(S.T-l.endT)/.35;return p<=0?(m.t=m.dur+1,0):p};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=Oo(Mr(b/.4)),v=s+b*.3;m.globalAlpha=x;for(let w=0;w<8;w++){const _=v+w/8*je,A=Math.cos(_),R=Math.sin(_);for(let P=0;P<10;P++){const z=P/9,O=(.15+z*.95)*M,F=Math.sin(z*Math.PI)*.24*M;for(let X=-1;X<=1;X++)Ee(t+A*O-R*F*X,n+R*O+A*F*X),fn(m,jt,Wt,6,X===0&&z<.8?it.l:z>.85?it.d:it.y)}}Ee(t,n),m.fillStyle=it.o,ha(m,jt,Wt,tt(12*M),.5),m.fillStyle=Tl,ha(m,jt,Wt,tt(6*M),.5)}});const c=i5(o,s);T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||(nh(m,c,t,n,o,a,S.T-u,x,!1),S.T>=f.n&&(f.n=S.T+.1,Lt(t,n,o*1.05,16760896,.5*x,.22)))}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i,M=Oo(Mr(b/.5)),v=b*.25;m.globalAlpha=.55*x;for(let P=0;P<56;P++){const z=P/56*je+v;Ee(t+Math.cos(z)*o,n+Math.sin(z)*o),fn(m,jt,Wt,P&1?2:3,P&1?it.l:it.y)}Ee(t,n);const w=jt,_=Wt,A=o*$.HW*Math.SQRT2,R=Math.sqrt(2*$.HH*$.HH*o*o+$.ZK*$.ZK*a*a*M*M);for(let P=0;P<=90;P++){const z=Math.PI+P/90*Math.PI,O=((P/90-b*.35)%1+1)%1,F=Math.max(0,1-Math.min(O,1-O)*7);m.globalAlpha=x*(.35+.6*F),fn(m,w+Math.cos(z)*A,_+Math.sin(z)*R,F>.4?3:2,F>.4?it.w:it.y)}m.globalAlpha=x;for(let P=0;P<6;P++){const z=S.T*2.4+P/6*je;Ee(t+Math.cos(z)*.7,n+Math.sin(z)*.7,.9+Math.sin(S.T*4+P)*.2),fn(m,jt,Wt,2,P&1?it.w:Tl)}}});const d=26;T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);if(x<=0)return;const b=p*i;if(!(b<.3)){m.globalAlpha=x;for(let M=0;M<d;M++){const w=W(M*3.7+s)*.65,_=Math.floor((b+w)/.65),A=(b+w)%.65/.65,R=W(M*13.1+_)*je,P=Math.sqrt(W(M*5.3+_*1.7))*o*.9,z=t+Math.cos(R)*P,O=n+Math.sin(R)*P;if(A<.85)Ee(z,O,a*.92*Math.sqrt(Math.max(0,1-P/o*(P/o)))*(1-A/.85)),m.fillStyle=it.o,m.fillRect(tt(jt-1),tt(Wt-2),2,4),m.fillStyle=it.l,m.fillRect(tt(jt-1),tt(Wt-4),2,2);else{Ee(z,O);const F=(A-.85)/.15;m.fillStyle=it.o,m.fillRect(tt(jt-2-F*4),tt(Wt),3,2),m.fillRect(tt(jt+F*4),tt(Wt),3,2)}}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(m,p,y){const x=h(y);x<=0||nh(m,c,t,n,o,a,S.T-u,x,!0)}})}function i5(e,t){const r=[],o=[],i=[],a=[],s=[],l=Math.PI/2/6.35;for(let u=0;u<6;u++){const f=(u+.5)*l,h=Math.max(5,tt(Math.max(16,e*5.6)*Math.cos(f)));for(let c=0;c<h;c++)r.push((c+(u&1)*.5)/h*je),o.push(f),i.push(u),s.push(je/h),a.push(.35+u*.42+W(t+c*7.1+u*13.3)*.45)}return{a:Float32Array.from(r),ph:Float32Array.from(o),row:Uint8Array.from(i),fill:Float32Array.from(a),da:Float32Array.from(s),dph:l,n:r.length}}const bi=new Float32Array(12);function nh(e,t,n,r,o,i,a,s,l){const{HW:u,HH:f,ZK:h}=$,c=2*f/h,d=Math.sqrt(2+c*c);for(let m=0;m<3;m++){e.beginPath();let p=!1;for(let y=0;y<t.n;y++){const x=t.row[y],b=Oo(Mr((a-.05-x*.07)/.28));if(b<=.02)continue;const M=a>t.fill[y];if(m===0&&M||m===1&&!M)continue;const v=t.a[y],w=t.ph[y],_=Math.cos(v),A=Math.sin(v),R=Math.cos(w),P=Math.sin(w),z=_*R/o,O=A*R/o,F=P/i;if((z+O+c*F)/d>0!==l)continue;const X=n+_*R*o,G=r+A*R*o,V=P*i,L=(X-G)*u+$.OX,k=(X+G)*f-V*h,U=.5*.86*b,N=t.da[y]*R*o*U,H=t.dph*U*1.12,K=(-A-_)*N*u,Q=(-A+_)*N*f,ft=-P*_*o,zt=-P*A*o,It=R*i,ve=(ft-zt)*H*u,de=((ft+zt)*f-It*h)*H;for(let Xt=0;Xt<6;Xt++){const Ze=Xt*Math.PI/3+Math.PI/6,ce=Math.cos(Ze),co=Math.sin(Ze)*1.15;bi[Xt*2]=tt(L+ce*K+co*ve),bi[Xt*2+1]=tt(k+ce*Q+co*de)}e.moveTo(bi[0],bi[1]);for(let Xt=1;Xt<6;Xt++)e.lineTo(bi[Xt*2],bi[Xt*2+1]);e.closePath(),p=!0}if(p)if(m===0)e.globalAlpha=s*(l?.55:.5),e.fillStyle=Ct(e,l?it.l:it.d,l?3:4),e.fill();else if(m===1){const y=.85+.15*Math.sin(a*5);e.globalAlpha=s*(l?.62:.55)*y,e.fillStyle=Ct(e,l?it.y:it.o,l?7:9),e.fill()}else e.globalAlpha=s*(l?.95:.55),e.strokeStyle=l?it.d:it.b,e.lineWidth=2,e.lineJoin="miter",e.stroke()}if(l){e.globalAlpha=s*.9,e.fillStyle=it.w;for(let m=0;m<t.n;m++){if(a<=t.fill[m]+.1)continue;const p=t.a[m],y=t.ph[m],x=Math.cos(p),b=Math.sin(p),M=Math.cos(y),v=Math.sin(y);(x*M/o+b*M/o+c*v/i)/d<=0||(Ee(n+x*M*o,r+b*M*o,v*i),e.fillRect(tt(jt-7),tt(Wt-6),3,2))}}}function a5(e){const t=e.x,n=e.y,r=e.radius||5,o=e.team;T({type:"custom",layer:"ground",add:!0,dur:.45,x:t,y:n,draw(s,l){const u=.4+(r-.4)*Oo(l);s.globalAlpha=(1-l)*.85;for(let f=0;f<6;f++){const h=f/6*je+Math.PI/6,c=(f+1)/6*je+Math.PI/6;Ee(t+Math.cos(h)*u,n+Math.sin(h)*u);const d=jt,m=Wt;Ee(t+Math.cos(c)*u,n+Math.sin(c)*u),O0(s,d,m,jt,Wt,3,f&1?it.y:it.l)}}});const i=S.game;if(!i)return;let a=0;for(const s of i.units)if(!(s.dead||s.kind==="tower"||s.kind==="nexus"||(s.x-t)*(s.x-t)+(s.y-n)*(s.y-n)>r*r)){if(s.team===o){if(s.kind==="hero")for(let l=0;l<2;l++)E(s.x+g(-.3,.3),s.y+g(-.3,.3),.5,0,0,g(1,1.6),.6,l?it.l:it.w,2,0,!0)}else if(a<8){a++;const l=s.x,u=s.y;T({type:"custom",layer:"ground",dur:.6,x:l,y:u,draw(f,h){Ee(l,u),f.globalAlpha=.8*(1-h),f.fillStyle=it.d,ha(f,jt,Wt,13,.45),f.fillStyle=it.o,ha(f,jt-2,Wt-1,9,.45),f.fillStyle=it.l,f.fillRect(tt(jt-5),tt(Wt-3),3,2),f.fillRect(tt(jt-8),tt(Wt-10+h*8),2,tt(8-h*6)),f.fillRect(tt(jt+7),tt(Wt-8+h*6),2,tt(6-h*4))}})}}}function s5(e){const t=Za.get(e.uid);t&&t.endT<0&&(t.endT=S.T),Za.delete(e.uid);const n=e.x,r=e.y;if(e.kind==="done"){for(let o=0;o<16;o++){const i=o/16*je;E(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.2,Math.cos(i)*g(2,3.5),Math.sin(i)*g(2,3.5),g(1.5,3),g(.6,.9),o&1?it.y:it.l,4,3,!0,.93)}for(let o=0;o<12;o++)E(n,r,.8,g(-1,1),g(-1,1),g(1,2.5),g(.5,.9),o&1?Tl:it.w,2,0,!0);T({type:"custom",layer:"ground",add:!0,dur:.4,x:n,y:r,draw(o,i){Ee(n,r),o.globalAlpha=1-i,o.fillStyle=it.l,ha(o,jt,Wt,tt(20+i*90),.5)}}),ot(3)}else{for(let o=0;o<10;o++){const i=o/10*je;E(n+Math.cos(i)*.6,r+Math.sin(i)*.6,.4,Math.cos(i)*.4,Math.sin(i)*.4,g(.2,.6),g(.7,1),o&1?e5:it.d,4,1.5,!1,.9)}at.sfx("deny",n,r,.35)}}Xe.abeja_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.3;for(let m=1;m<=5;m++){const p=m*4,y=Math.sin(i*20+f-m*.8)*3;e.globalAlpha=1-m/6,e.fillStyle=m&1?it.l:it.y,e.fillRect(tt(n-a*p+l*y-1),tt(r-s*p+u*y-1),2,2)}e.globalAlpha=1;const h=Math.sin(i*20+f)*3,c=n+l*h,d=r+u*h;for(let m=0;m<8;m++){const p=m/8*je+i*6;fn(e,c+Math.cos(p)*5,d+Math.sin(p)*5,2,it.o)}e.fillStyle=it.y,e.fillRect(tt(c-3),tt(d-3),6,6),e.fillStyle=it.w,e.fillRect(tt(c-2),tt(d-2),2,2)};De.abeja=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*je;T({type:"custom",layer:"top",dur:r?.38:.28,x:t,y:n,draw(i,a){Ee(t,n,.45);const s=a<.25?.5+a*2.6:1.15-(a-.25)*.2,l=(r?7:5)*s;i.globalAlpha=a>.5?(1-a)/.5:1;for(let f=0;f<5;f++){const h=o+f/5*je;fn(i,jt+Math.cos(h)*l,Wt+Math.sin(h)*l*.8,r?5:4,f&1?it.l:it.y)}fn(i,jt,Wt,r?5:4,r?Tl:it.o);const u=6+a*(r?26:18);for(let f=0;f<10;f++){const h=o+f/10*je;fn(i,jt+Math.cos(h)*u,Wt+Math.sin(h)*u*.5+6,2,it.l)}}});for(let i=0;i<(r?8:4);i++)E(t,n,.5,g(-1,1),g(-1,1),g(.3,1.2),.4,i&1?it.y:it.w,2,2,!0)};const qt=Math.round,mt={pink1:"#ffd6e4",pink2:"#ff9cc0",coral:"#ff6f91",coral2:"#e0446f",deep:"#9c2350",orange:"#ffab7a",gill:"#ff4fa3",water:"#bff3ff",white:"#ffffff",hole:"#4a1328"};function ur(e,t,n,r,o){e.fillStyle=o,e.fillRect(qt(t-r/2),qt(n-r/2),r,r)}const l5=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1,$u={};function u5(e){if($u[e])return $u[e];const t=[];for(let n=-e;n<=e;n++)for(let r=-e;r<=e;r++){const o=Math.hypot(r,n);o<=e+.5&&o>e-.5&&t.push([r,n])}return $u[e]=t}function da(e,t,n,r,o,i,a,s=1,l=1,u=!1){const f=u5(r);for(let h=0;h<f.length;h++){if(u&&h%2)continue;const[c,d]=f[h];e.fillStyle=c+d>r*.6?a:i,e.fillRect(qt(t+c*o*s-o/2),qt(n+d*o*l-o/2),o,o)}u||(e.fillStyle=mt.white,e.fillRect(qt(t-r*o*.45*s-o/2),qt(n-r*o*.5*l-o/2),o,o))}function f5(e,t,n,r,o,i,a=1,s=1){e.fillStyle=i;for(let l=-r+1;l<r;l++){const u=Math.floor(Math.sqrt(r*r-l*l));e.fillRect(qt(t-u*o*a),qt(n+l*o*s-o/2),qt(u*2*o*a),o)}}function c5(e,t){if(e._aw||!e.hit)return;e._aw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||2)+.3,x:e.x,y:e.y,draw(r,o,i){for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}const rh=["#.#","###",".#.",".#."];function h5(e,t){T({type:"custom",layer:"top",dur:.3,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+qt(r*5);n.globalAlpha=1-r,da(n,o,i,a,2,mt.pink1,mt.pink2,1,1,!0);for(let s=0;s<8;s++){const l=s/8*6.283+.4,u=a*2+4+r*10;ur(n,o+Math.cos(l)*u,i+Math.sin(l)*u*.8,2,s%2?mt.white:mt.water)}n.globalAlpha=1}});for(let n=0;n<6;n++){const r=g(0,6.283),o=g(1,2.5);E(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(1,2.5),.4,n<3?mt.water:mt.pink1,2,8,!1)}for(let n=0;n<3;n++)E(e,t,.5,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,n%2?mt.coral:mt.orange,3,10,!1)}j.ajolote_Q=e=>{if(e.type!=="cast_splash")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(l,u){const[f,h]=C(t,n,.55);l.globalAlpha=1-u;for(let c=0;c<3;c++){const d=s+(c-1)*.5,m=10+u*(22+c*6);da(l,f+Math.cos(d)*m,h+Math.sin(d)*m-u*8,1+c%2,2,mt.pink2,mt.coral)}l.globalAlpha=1}});for(let l=0;l<6;l++)E(t+r*.4,n+o*.4,.5,r*g(1,2.5)+g(-.5,.5),o*g(1,2.5)+g(-.5,.5),g(.5,1.5),.35,l%2?mt.water:mt.pink1,2,6,!1);return!0};Xe.ajolote_Q=(e,t,n,r,o,i)=>{c5(t,h5);const a=Math.sin(i*17+t.x*2)*.13,s=1+a,l=1-a;e.globalAlpha=.35,f5(e,n,r,6,2,mt.pink2,s,l),e.globalAlpha=1;const u=(i*3|0)%2;for(let c=0;c<rh.length;c++)for(let d=0;d<3;d++)rh[c][u?2-d:d]==="#"&&ur(e,n-2+d*2,r-3+c*2,2,c<1?mt.orange:mt.coral);da(e,n,r,6,2,mt.pink2,mt.coral2,s,l);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=18+c*8,m=Math.sin(i*12+c*2)*3;da(e,n-f*d-h*m,r-h*d+f*m,2-(c>>1),2,mt.pink1,mt.pink2)}Math.random()<.35&&E(t.x,t.y,(t.z||.45)+.05,g(-.2,.2),g(-.2,.2),.6,.45,mt.pink1,2,-.5,!1)};function d5(e,t){const n=[[-14,-34],[12,-42],[-6,-52],[16,-26],[2,-62]];return T({type:"custom",layer:"top",dur:.85,x:e,y:t,draw(r,o){const i=o*.85,[a,s]=C(e,t);for(let l=0;l<n.length;l++){const u=i-l*.05,f=.25+l*.08;if(u<0)continue;const h=a+n[l][0],c=s+n[l][1]-u*6;if(u<f)da(r,h,c,2,2,mt.pink2,mt.coral);else if(u<f+.3){const d=(u-f)/.3,m=qt(c-d*14),p=qt(h);r.globalAlpha=1-d,r.fillStyle=mt.pink1,r.fillRect(p-4,m-1,8,2),r.fillRect(p-1,m-4,2,8),r.fillStyle=mt.white;for(const[y,x]of[[-6,-6],[6,-6],[-6,6],[6,6]])r.fillRect(p+y*(.6+d),m+x*(.6+d),2,2);r.globalAlpha=1}}}}),!0}j.ajolote_W=e=>{if(e.type==="heal")return d5(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||2.5,o=e.uid,i=1.3,a=[-.55,-.15,.25];T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(u,f){const h=ht(o),[c,d]=C(h?h.x:t,h?h.y:n,.85),m=Math.min(1,f*5),p=f>.6?(1-f)/.4:1;u.globalAlpha=p;for(let y=-1;y<=1;y+=2)for(let x=0;x<3;x++){const b=y>0?a[x]:Math.PI-a[x],M=Math.sin(f*16+x*1.3)*.12,v=b+M*y,w=Math.cos(v),_=Math.sin(v),A=qt(22*m)-(x===1?0:4);for(let R=6;R<=A;R+=2)ur(u,c+w*R,d+_*R,2,R>A-2?mt.pink1:mt.gill),R%4===0&&R>8&&(ur(u,c+w*R-_*3,d+_*R+w*3,2,mt.pink2),ur(u,c+w*R+_*3,d+_*R-w*3,2,mt.pink2))}u.globalAlpha=1}});const s=[];for(let u=0;u<12;u++)s.push(u/12*6.283+g(-.12,.12));T({type:"custom",layer:"ground",dur:1,x:t,y:n,draw(u,f){for(let h=0;h<s.length;h++){const c=(f-h*.025)/.8;if(c<=0||c>=1)continue;const d=Math.sin(c*Math.PI),m=qt(d*3)*2,[p,y]=C(t+Math.cos(s[h])*r,n+Math.sin(s[h])*r),x=qt(p),b=qt(y);u.fillStyle=mt.coral,u.fillRect(x-1,b-2,2,4),!(m<2)&&(u.fillStyle=mt.pink2,u.fillRect(x-m-1,b-3,2,2),u.fillRect(x+m-1,b-3,2,2),u.fillRect(x-1,b-3-m,2,2),u.fillRect(x-m+1,b-1-m,2,2),u.fillRect(x+m-3,b-1-m,2,2),u.fillStyle=mt.pink1,u.fillRect(x-1,b-4,2,2))}}});const l=[];for(let u=0;u<16;u++){const f=g(0,6.283),h=r*.9*Math.sqrt(Math.random());l.push({x:t+Math.cos(f)*h,y:n+Math.sin(f)*h,n:1+u%3,t0:g(0,.35),pop:g(.4,.9),ph:g(0,6.283),done:!1})}return T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(u,f){const h=f*i;for(const c of l){const d=h-c.t0;if(d<0)continue;const[m,p]=C(c.x,c.y,.1+Math.min(d,c.pop)*.9),y=m+Math.sin(d*9+c.ph)*3;if(d<c.pop){da(u,y,p,c.n,2,mt.pink2,mt.coral);continue}c.done||(c.done=!0,E(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.8,.5,mt.pink1,2,0,!0),E(c.x,c.y,.1+c.pop*.9,g(-.5,.5),g(-.5,.5),.5,.4,mt.white,2,0,!0));const x=(d-c.pop)/.14;if(x>=1)continue;u.globalAlpha=1-x;const b=c.n*2+2+x*6;for(const[M,v]of[[-1,-1],[1,-1],[-1,1],[1,1]])ur(u,y+M*b,p+v*b,2,mt.pink1);u.globalAlpha=1}}}),!0};function m5(e,t,n,r,o){const i=-o,a=r;for(let s=0;s<=22;s+=2)ur(e,t-r*s,n-o*s,2,s>18?mt.coral2:mt.orange);for(let s=-6;s<=6;s+=2)ur(e,t+i*s,n+a*s,2,mt.orange);for(const s of[-6,0,6]){const l=s===0?11:8;for(let u=2;u<=l;u+=2)ur(e,t+i*s+r*u,n+a*s+o*u,2,u>=l-1?mt.white:mt.pink1)}}j.ajolote_E=e=>{if(e.type!=="dust")return!1;const t=e.x,n=e.y,r=e.ex||t+(e.ux||0)*(e.range||0),o=e.ey||n+(e.uy||0)*(e.range||0),i=Math.max(.12,e.dur||.28),a=i+.6,s=Math.hypot(r-t,o-n),l=(r-t)/(s||1),u=(o-n)/(s||1),f=(l-u)*64,h=(l+u)*32,c=Math.hypot(f,h)||1,d=f/c,m=h/c,p=Math.max(2,Math.ceil(s/.1)),y={n:0,end:!1};return T({type:"custom",layer:"ground",dur:a,x:t,y:n,draw(x,b){const M=b*a,v=Math.min(1,M/i);for(let w=0;w<=p*v;w++){const _=w/p,A=M-_*i,R=Math.max(0,1-A/.55);if(R<=0)continue;const[P,z]=C(t+(r-t)*_,n+(o-n)*_),O=z+Math.sin(_*14-M*25)*2,F=qt(4+6*_);x.globalAlpha=R,x.fillStyle=mt.pink2,x.fillRect(qt(P)-F,qt(O)-3,F*2,1),x.fillRect(qt(P)-F,qt(O)+2,F*2,1),x.fillStyle=mt.water,x.fillRect(qt(P)-F,qt(O)-2,F*2,4),w%3===0&&(x.fillStyle=mt.white,x.fillRect(qt(P)-1,qt(O)-1,3,2))}if(x.globalAlpha=1,v<1&&y.n<22)for(let w=0;w<2;w++){y.n++;const _=t+(r-t)*v,A=n+(o-n)*v;E(_,A,.2,-l*g(.5,1.5)+g(-.8,.8),-u*g(.5,1.5)+g(-.8,.8),g(1,2.5),.45,w?mt.water:mt.pink1,2,8,!1)}if(!y.end&&v>=1){y.end=!0;for(let w=0;w<10;w++)E(r+l*.4,o+u*.4,.4,l*g(1.5,3.5)+g(-.8,.8),u*g(1.5,3.5)+g(-.8,.8),g(1,3),.5,w%2?mt.water:mt.white,2,9,!1);ot(4)}}}),T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(x,b){const M=b*(i+.25),v=Math.min(1,M/i),[w,_]=C(t+(r-t)*v,n+(o-n)*v,.5);if(x.globalAlpha=v<1?1:Math.max(0,1-(M-i)/.25),m5(x,w+d*10,_+m*10,d,m),v>=1){const A=(M-i)/.25,R=6+A*30;for(const P of[-6,0,6])for(let z=12;z<12+R;z+=2)ur(x,w+d*(10+z)-m*P,_+m*(10+z)+d*P,2,z>8+R?mt.pink1:mt.white)}x.globalAlpha=1}}),!0};function p5(e,t,n,r,o){const i=qt(t),a=qt(n),s=(W(o)-.5)*.3;for(let u=0;u<r;u+=2){const f=qt(u*s),h=u<r*.5?6:4;e.fillStyle=mt.coral,e.fillRect(i+f-h/2,a-u-2,h,2),e.fillStyle=mt.deep,e.fillRect(i+f+h/2-2,a-u-2,2,2)}const l=W(o+3)<.5?-1:1;for(const[u,f,h]of[[.35+W(o+1)*.15,.38,l],[.58+W(o+2)*.12,.28,-l]]){const c=r*u,d=i+qt(c*s),m=r*f;let p=d,y=a-c;for(let x=0;x<m;x+=2)p=d+h*(3+x*.7),y=a-c-x,e.fillStyle=mt.coral2,e.fillRect(qt(p)-2,qt(y)-2,4,2);e.fillStyle=mt.pink1,e.fillRect(qt(p)-2,qt(y)-4,4,2)}e.fillStyle=mt.pink1,e.fillRect(i+qt(r*s)-2,a-r-3,4,3)}j.ajolote_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.2,o=1.3,i=[];for(let s=0;s<2;s++){const l=s?8:6,u=r*(s?.85:.45);for(let f=0;f<l;f++){const h=f/l*6.283+s*.4+g(-.15,.15);i.push({x:t+Math.cos(h)*u,y:n+Math.sin(h)*u,d:.04+s*.13+g(0,.05),H:g(24,40)*(s?1:.85),seed:g(0,99),up:!1})}}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a=(s,l)=>{const u=Math.min(1,Math.max(0,(l-s.d)/.1)),f=Math.min(1,Math.max(0,(l-.95)/.3));return s.H*(u<1?u*1.15:1)*(1-f)};T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=l*o;s.globalAlpha=l>.75?(1-l)/.25:.8;for(const f of i){if(u<f.d)continue;const[h,c]=C(f.x,f.y);s.fillStyle=mt.hole,s.fillRect(qt(h)-6,qt(c)-2,12,4),s.fillRect(qt(h)-3,qt(c)-3,6,6)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(s,l){const u=-l*12.6,f=l5(l,.05,.6);for(let h=0;h<3;h++){const c=1+h*.22;for(let d=0;d<18;d++){const m=d/18,p=u+m*1.9,[y,x]=C(t+Math.cos(p)*c,n+Math.sin(p)*c,.45);s.globalAlpha=f*(1-m),ur(s,y,x,m<.15?3:2,m<.15?mt.white:h===1?mt.pink2:mt.water)}}s.globalAlpha=1}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o;for(const f of i){u>=f.d&&!f.up&&(f.up=!0,E(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,3.5),.5,Math.random()<.5?mt.coral:mt.orange,3,10,!1),E(f.x,f.y,.1,g(-1,1),g(-1,1),g(2,4),.45,mt.water,2,10,!1));const h=a(f,u);if(h<2)continue;const[c,d]=C(f.x,f.y);p5(s,c,d,qt(h/2)*2,f.seed)}}});for(let s=0;s<28;s++){const l=g(0,6.283),u=g(2,5);E(t+Math.cos(l)*.4,n+Math.sin(l)*.4,.4,Math.cos(l)*u,Math.sin(l)*u,g(3,6),g(.7,1),[mt.water,mt.pink1,mt.white,mt.pink2][s%4],Math.random()<.3?3:2,12,!1,.97)}return ot(9),!0};De.ajolote=e=>{const t=e.x,n=e.y,r=!!e.big,o=ht(e.uid);let i=1,a=0;if(o){const d=t-o.x,m=n-o.y,p=Math.hypot(d,m);p>.05&&(i=d/p,a=m/p)}const s=(i-a)*64,l=(i+a)*32,u=Math.hypot(s,l)||1,f=s/u,h=l/u;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(d,m){const[p,y]=C(t,n,.5),x=(r?20:14)*Math.min(1,m*4);d.globalAlpha=1-m;for(const b of[-5,0,5])for(let M=-x/2;M<=x/2;M+=2)ur(d,p+f*M-h*b,y+h*M+f*b,2,M>x/2-4?mt.white:mt.pink2);d.globalAlpha=1}});const c=r?7:4;for(let d=0;d<c;d++)E(t,n,.45,i*g(.5,2)+g(-.7,.7),a*g(.5,2)+g(-.7,.7),g(1,2.5),.35,d%2?mt.pink1:mt.water,2,8,!1)};const Rt=Math.round,dt={snow:"#ffffff",ice1:"#e2f7ff",ice2:"#a6e4ff",ice3:"#5fb6ee",night:"#1b2a5c",moon:"#efeaff",moon2:"#c9c0ff",amber:"#ffcf5a"};function In(e,t,n,r,o){e.fillStyle=o,e.fillRect(Rt(t-r/2),Rt(n-r/2),r,r)}const E0=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function Rl(e,t,n,r,o,i,a){const s=t.length,l=t[0].length,u=Rt(n-l*o/2),f=Rt(r-s*i/2);for(let h=0;h<s;h++)for(let c=0;c<l;c++){const d=a[t[h][c]];d&&(e.fillStyle=d,e.fillRect(u+c*o,f+h*i,o,i))}}function Zl(e,t,n,r,o,i,a,s,l,u){const f=-o,h=r;for(let c=0;c<=i;c+=2){const d=c/i,m=t-r*c,p=n-o*c,y=d<.85?a*Math.sin(d/.85*Math.PI):0;for(let x=2;x<=y;x+=2){const b=x>y-2?s:l,M=x*.5;((c>>1)+(x>>1))%4!==3&&In(e,m+f*x-r*M,p+h*x-o*M,2,b),((c>>1)+(x>>1)+2)%4!==3&&In(e,m-f*x-r*M,p-h*x-o*M,2,b)}In(e,m,p,2,u)}}function Cl(e,t,n,r,o,i,a){const s=Rt(t),l=Rt(n);for(let u=0;u<r;u+=2){const f=Math.max(2,Rt(o*(1-u/r)/2)*2),h=Rt(u*i),c=a<0?l-u-2:l+u;e.fillStyle=dt.ice3,e.fillRect(s+h-f/2,c,f,2),e.fillStyle=dt.ice1,e.fillRect(s+h-f/2,c,Math.max(1,f/2),2)}e.fillStyle=dt.snow,e.fillRect(s+Rt(r*i)-1,a<0?l-r-1:l+r-2,2,3)}function y2(e,t){if(e._bw||!e.hit&&!e.homing)return;e._bw=1;let n=0;T({type:"custom",layer:"top",dur:(e.life||3)+.3,x:e.x,y:e.y,draw(r,o,i){if(e.homing){if(e.life<=0){const a=e.homing;!n&&Math.hypot(a.x-e.x,a.y-e.y)<1.2&&t(a.x,a.y),n=1,i.dur=0}return}for(;n<e.hit.size;)n++,t(e.x,e.y);e.life<=0&&(i.dur=0)}})}function y5(e,t){T({type:"custom",layer:"top",add:!0,dur:.42,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=4+22*(1-(1-r)*(1-r));n.globalAlpha=1-r*r;for(let s=0;s<9;s++){const l=s/9*6.283+.2,u=Math.cos(l),f=Math.sin(l)*.7,h=s%2?4:6;for(let c=0;c<h;c+=2)In(n,o+u*(a+c),i+f*(a+c),2,c>=h-2?dt.snow:dt.ice2)}if(r<.35){const s=Rt(10*(1-r/.35))+2;n.fillStyle=dt.snow,n.fillRect(Rt(o)-s/2,Rt(i)-s/2,s,s)}n.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.6,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5);n.globalAlpha=1-r;for(let a=0;a<3;a++){const s=Math.sin(r*10+a*2),l=-Math.PI/2+s*.6;Zl(n,o+(a-1)*9+s*4,i-r*26-a*3,Math.cos(l),Math.sin(l),8,2,dt.ice3,dt.ice1,dt.snow)}n.globalAlpha=1}});for(let n=0;n<10;n++){const r=g(0,6.283),o=g(1.2,3);E(e,t,.5,Math.cos(r)*o,Math.sin(r)*o,g(.5,2),.4,n%2?dt.ice2:dt.ice3,2,6,!1)}}j.buho_Q=e=>{if(e.type!=="cast_frost")return!1;const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=(r-o)*64,a=(r+o)*32,s=Math.atan2(a,i);T({type:"custom",layer:"top",dur:.32,x:t,y:n,draw(l,u){const[f,h]=C(t,n,.6);l.globalAlpha=1-u;for(let c=0;c<5;c++){const d=s+(c-2)*.32,m=8+u*28,p=Math.cos(d),y=Math.sin(d);Zl(l,f+p*m,h+y*m,p,y,10,3,dt.ice3,dt.ice1,dt.snow)}l.globalAlpha=1}});for(let l=0;l<6;l++)E(t+r*.4,n+o*.4,.6,r*g(.5,1.5)+g(-.4,.4),o*g(.5,1.5)+g(-.4,.4),g(0,.6),.45,dt.snow,2,.5,!0);return!0};Xe.buho_Q=(e,t,n,r,o,i)=>{y2(t,y5);const a=Math.cos(o),s=Math.sin(o),l=Math.sin(i*28+(t.x+t.y)*3)*1.5,u=n+a*12-s*l,f=r+s*12+a*l;Mt(!0);const h=Bt();for(let c=1;c<=5;c++)h.globalAlpha=.5-c*.08,In(h,n-a*c*6,r-s*c*6,8-c,c<3?dt.ice2:dt.ice3);h.globalAlpha=1,Mt(!1),Zl(e,u,f,a,s,24,6,dt.ice3,dt.ice1,dt.snow),Math.random()<.55&&E(t.x,t.y,t.z||.45,g(-.3,.3),g(-.3,.3),g(-.2,.3),.5,Math.random()<.5?dt.snow:dt.ice1,2,0,!0)};const g5=[["..#..",".#.#.","#.#.#",".#.#.","..#.."],["#...#",".#.#.","..#..","..#..",".###."],["##.##","#.#.#","..#..",".#.#.","#...#"],[".###.","#...#","#.#.#","#...#",".###."]],x5=["#.........#",".#.......#.","..#######..",".###...###.",".#o#...#o#.",".###.v.###.",".....v.....","..#.....#..","...#####..."];j.buho_W=e=>{if(e.type!=="frost")return!1;const t=e.x,n=e.y,r=e.radius||2,o=2.4;T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l){const u=E0(l,.08,.75);st(t,n,r*Math.min(1,.4+l*6),null,`rgba(150,215,255,${.2*u})`)}}),T({type:"custom",layer:"ground",add:!0,dur:o,x:t,y:n,draw(s,l){const u=E0(l,.1,.75),f=l*.8;s.globalAlpha=u*.9;for(const[d,m]of[[r,40],[r*.82,34]])for(let p=0;p<m;p++){if(p%5===4)continue;const y=p/m*6.283+(d===r?f:-f),[x,b]=C(t+Math.cos(y)*d,n+Math.sin(y)*d);In(s,x,b,2,dt.ice2)}for(let d=0;d<8;d++){const m=d/8*6.283+f,[p,y]=C(t+Math.cos(m)*r*.91,n+Math.sin(m)*r*.91),x=.6+.4*Math.sin(l*20+d*1.7);s.globalAlpha=u*x,Rl(s,g5[d%4],p,y,2,2,{"#":dt.ice1})}const[h,c]=C(t,n);s.globalAlpha=u*(.75+.25*Math.sin(l*14)),Rl(s,x5,h,c,3,2,{"#":dt.ice2,o:dt.amber,v:dt.amber}),s.globalAlpha=1}});const i=[];for(let s=0;s<8;s++){const l=s/8*6.283+g(-.3,.3),u=r*(.3+.55*Math.sqrt(W(s+t*7.3)));i.push({x:t+Math.cos(l)*u,y:n+Math.sin(l)*u,d:.04+s*.035,h:g(16,28),lean:g(-.25,.25),side:Math.random()<.5?-1:1})}i.sort((s,l)=>s.x+s.y-(l.x+l.y));const a={shat:!1};T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l){const u=l*o,f=Math.max(0,(l-.88)/.12);for(const h of i){const c=Math.min(1,Math.max(0,(u-h.d)/.12));if(c<=0)continue;const[d,m]=C(h.x,h.y),p=h.h*c*(1-f);p<2||(Cl(s,d,m,p,8,h.lean,-1),Cl(s,d+h.side*6,m+2,p*.6,6,h.lean+h.side*.35,-1))}if(!a.shat&&f>0){a.shat=!0;for(const h of i)for(let c=0;c<2;c++)E(h.x,h.y,.25,g(-1.5,1.5),g(-1.5,1.5),g(1,2.5),.45,c?dt.ice2:dt.snow,2,8,!0)}}});for(let s=0;s<20;s++){const l=g(0,6.283),u=g(0,r);E(t+Math.cos(l)*u,n+Math.sin(l)*u,g(.6,1.4),g(-.6,.6)+.8,g(-.6,.6)-.4,-.6,g(.6,1),Math.random()<.6?dt.snow:dt.ice1,2,-.5,!1,.98)}return!0};const g2=["......####","...#######","##########",".#########","..#.#.#.#."],M5=g2.map(e=>e.split("").reverse().join(""));j.buho_E=e=>{if(e.type!=="blink")return!1;const t=e.x,n=e.y,r=e.ex||t,o=e.ey||n,i=[];for(let a=0;a<12;a++)i.push({vx:g(-45,45),vy:g(-55,-15),ph:g(0,6.283),L:Math.random()<.4?12:9});T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(a,s){const l=s*1,[u,f]=C(t,n,.6);a.globalAlpha=E0(s,.02,.55);for(const h of i){const c=Math.sin(l*6+h.ph),d=u+h.vx*l*(1-l*.5)+c*6,m=f+h.vy*l+60*l*l,p=Math.PI/2+c*.9;Zl(a,d+Math.cos(p)*h.L*.5,m+Math.sin(p)*h.L*.5,Math.cos(p),Math.sin(p),h.L,3,dt.ice3,dt.ice1,dt.snow)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(a,s){for(let l=0;l<10;l++){const u=s*1.4-l*.03;if(u<=0||u>=1)continue;const f=l/9,[h,c]=C(t+(r-t)*f,n+(o-n)*f,.6+Math.sin(f*Math.PI)*.6),d=Rt(4*(1-u))+1;a.globalAlpha=1-u,a.fillStyle=dt.ice1,a.fillRect(Rt(h)-d,Rt(c),d*2,1),a.fillRect(Rt(h),Rt(c)-d,1,d*2)}a.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(a,s){const[l,u]=C(r,o,.75),f=8+s*24;a.globalAlpha=(1-s)*.9,Rl(a,g2,l+f+15,u-s*6,3,3,{"#":dt.ice1}),Rl(a,M5,l-f-15,u-s*6,3,3,{"#":dt.ice1}),a.globalAlpha=1}});for(let a=0;a<16;a++)E(t+g(-.3,.3),n+g(-.3,.3),g(.3,.9),g(-.8,.8),g(-.8,.8),g(-.3,.4),g(.6,1),dt.snow,2,.4,!1,.97);for(let a=0;a<16;a++){const s=g(0,6.283),l=g(1,2.5);E(r,o,.6,Math.cos(s)*l,Math.sin(s)*l,g(0,1),.5,a%3?dt.ice1:dt.moon2,2,1,!0)}return!0};function oh(e,t,n,r,o,i,a){e.fillStyle=a;const s=Rt(t),l=Rt(n),u=r*.82;for(let f=-r;f<r;f+=2){const h=Math.sqrt(Math.max(0,r*r-f*f)),c=u*u-f*f,d=-h,m=h;if(c<=0){e.fillRect(s+Rt(d),l+Rt(f*i),Rt(m-d),Math.max(1,Rt(2*i)));continue}const p=Math.sqrt(c),y=o-p,x=o+p;y>d&&e.fillRect(s+Rt(d),l+Rt(f*i),Rt(Math.min(m,y)-d),Math.max(1,Rt(2*i))),x<m&&e.fillRect(s+Rt(x),l+Rt(f*i),Rt(m-x),Math.max(1,Rt(2*i)))}}const Ra=[];function ih(e,t,n){T({type:"custom",layer:"ground",add:!0,dur:.6,x:e,y:t,draw(r,o){const i=n*(.3+.8*o);r.globalAlpha=1-o;for(let a=0;a<36;a++){const s=a/36*6.283,[l,u]=C(e+Math.cos(s)*i,t+Math.sin(s)*i);In(r,l,u,a%3?2:3,a%2?dt.ice2:dt.moon)}r.globalAlpha=1}}),T({type:"custom",layer:"ground",dur:2.2,x:e,y:t,draw(r,o){st(e,t,n*.9,`rgba(220,245,255,${.5*(1-o)})`,`rgba(140,200,255,${.22*(1-o)})`,2,[4,6])}}),ot(9)}const Ri=3,ah=Ri-.3,sh=e=>(e=e-1,1+e*e*(2.4*e+1.4));function Ca(e,t,n,r,o){if(!(r<1)){e.fillStyle=o;for(let i=-r;i<r;i+=2){const a=Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Rt(t-a),Rt(n+i),Rt(a*2),2)}}}function Os(e,t,n,r,o){if(r<2)return;const i=r/2;e.fillStyle=o;for(let a=-i;a<i;a+=2){const s=r*Math.sqrt(Math.max(0,1-(a+1)/i*((a+1)/i)));e.fillRect(Rt(t-s),Rt(n+a),Rt(s*2),2)}}j.buho_R=e=>{if(e.type==="starfall"){const p=Ra.findIndex(y=>Math.abs(y.x-e.x)<.3&&Math.abs(y.y-e.y)<.3);return p>=0?Ra.splice(p,1):ih(e.x,e.y,e.radius||3.4),!0}if(e.type!=="cast_stars")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=.85,i=1.75,a={x:t,y:n,t:0};Ra.push(a),Ra.length>6&&Ra.shift(),T({type:"custom",layer:"ground",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.15)*(x>o?Math.max(0,1-(x-o)/.6):1);p.globalAlpha=b;for(const[w,_,A]of[[r,56,1],[r*.9,48,-1]])for(let R=0;R<_;R++){if((R+(A>0?0:2))%4===3)continue;const P=R/_*6.283+x*.7*A,[z,O]=C(t+Math.cos(P)*w,n+Math.sin(P)*w);In(p,z,O,2,A>0?dt.moon2:dt.ice2)}for(let w=0;w<12;w++){const _=w/12*6.283-x*.35,[A,R]=C(t+Math.cos(_)*r*.62,n+Math.sin(_)*r*.62),[P,z]=C(t+Math.cos(_)*r*.82,n+Math.sin(_)*r*.82);for(let O=0;O<=4;O++)In(p,A+(P-A)*O/4,R+(z-R)*O/4,2,dt.moon)}const[M,v]=C(t,n);if(oh(p,M,v,30,12,.5,dt.moon),x>.45){const w=Math.min(1,(x-.45)/.1);p.globalAlpha=b*w,In(p,M-26,v-3,4,dt.amber),In(p,M+26,v-3,4,dt.amber)}p.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Math.min(1,x/.2)*(x>o?Math.max(0,1-(x-o)/.5):1),[M,v]=C(t,n,Ri+1.7),w=p.createRadialGradient(M,v,4,M,v,60);w.addColorStop(0,`rgba(200,190,255,${.45*b})`),w.addColorStop(1,"rgba(120,110,220,0)"),p.fillStyle=w,p.fillRect(Rt(M)-60,Rt(v)-60,120,120),p.globalAlpha=b,oh(p,M,v,20,9,1,dt.moon),p.globalAlpha=1}});const s=pi(e,o),l=()=>S.T-s.t0,u=Array.from({length:26},(p,y)=>{const x=g(0,6.283),b=Math.sqrt(Math.random())*r*.82,M=1-b/r;return{x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,z:Ri+g(0,.3)+M*.35,s:Rt(g(18,26)+M*16),dl:b/r*.25+y*.004,dx:Math.cos(x),dy:Math.sin(x)}}).sort((p,y)=>p.x+p.y-(y.x+y.y)||p.z-y.z),f=Array.from({length:34},()=>{const p=g(0,6.283),y=Math.sqrt(Math.random())*r*.9;return{x:t+Math.cos(p)*y,y:n+Math.sin(p)*y,ph:Math.random(),sp:g(.55,.85),back:Math.cos(p)+Math.sin(p)<0}}),h=p=>p>0?0:Qa(-p/.35),c=(p,y,x)=>{for(const b of f){if(b.back!==y)continue;const M=(l()*b.sp+b.ph)%1,[v,w]=C(b.x+Math.sin(l()*2+b.ph*9)*.15,b.y,Ri*(1-M));p.globalAlpha=x*(y?.6:.9)*Math.min(1,(1-M)*5,M*8),In(p,v,w,2,dt.snow),p.fillStyle=dt.ice2,p.fillRect(Rt(v)-1,Rt(w)-4,1,2)}};T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y,x){const b=Mn(s),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=Math.min(1,l()/.3)*(1-M),[w,_]=C(t,n),A=r*$.HW*Math.SQRT2*.92;p.globalAlpha=.5*v,p.fillStyle=Ct(p,dt.night,8);for(let R=-A/2;R<A/2;R+=2){const P=A*Math.sqrt(Math.max(0,1-(2*(R+1)/A)**2));p.fillRect(Rt(w-P),Rt(_+R),Rt(P*2),2)}c(p,!0,v),fo(s,t,n,r*1.05,10937599,.5*v)}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y,x){const b=Mn(s),M=h(b);if(M>=1){x.t=x.dur+1;return}const v=l(),w=1-M;c(p,!1,w*Math.min(1,v/.3));const _=sh(Qa(v/.35)),[A,R]=C(t,n,Ri+M*.3),P=Rt(r*.8*$.HW*Math.SQRT2*_*(1+M*.3));for(let z=0;z<4;z++){p.globalAlpha=w*(z===0?.8:.96),z===0?Os(p,A+3,R+8,P,Ct(p,dt.ice3,12)):z===1?(Os(p,A,R,P+2,Ct(p,dt.ice2,10)),Os(p,A,R,P-2,dt.ice2)):z===2&&Os(p,A-2,R-6,P-10,dt.ice1);for(const O of u){const F=sh(Qa((v-O.dl)/.3));if(F<=.02)continue;const[X,G]=C(O.x+O.dx*M*1.2,O.y+O.dy*M*1.2,O.z+M*.4),V=Rt(O.s*F*(1+M*.3));z===0?Ca(p,X+2,G+5,V,Ct(p,dt.ice3,12)):z===1?(Ca(p,X,G,V+1,Ct(p,dt.ice2,10)),Ca(p,X,G,V-2,dt.ice2)):z===2?Ca(p,X-1,G-V*.22,Rt(V*.8),dt.ice1):O.z>Ri+.42&&Ca(p,X-V*.25,G-V*.5,Rt(V*.32),dt.snow)}}}});const d=[];for(let p=0;p<14;p++){const y=g(0,6.283),x=r*.85*Math.sqrt(Math.random());d.push({x:t+Math.cos(y)*x,y:n+Math.sin(y)*x,fall:o-.12+p*.025,ap:.08+p*.025,L:g(18,28),hit:!1})}d.sort((p,y)=>p.x+p.y-(y.x+y.y));const m={boom:!1};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(const b of d){const M=(x-b.fall)/.12;if(M>=1){if(!b.hit){b.hit=!0;for(let P=0;P<3;P++)E(b.x,b.y,.1,g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),.45,P?dt.ice2:dt.snow,2,10,!0)}const R=(x-b.fall-.12)/.2;if(R<1){const[P,z]=C(b.x,b.y),O=Rt(10*(1-R))+2;p.globalAlpha=1-R,p.fillStyle=dt.snow,p.fillRect(Rt(P)-O,Rt(z)-1,O*2,2),p.fillRect(Rt(P)-1,Rt(z)-O/2,2,O),p.globalAlpha=1}continue}const v=Math.min(1,Math.max(0,(x-b.ap)/.25));if(v<=0)continue;const w=M>0?ah*(1-M*M):ah+Math.sin(x*9+b.x)*.03,[_,A]=C(b.x,b.y,w);p.globalAlpha=v,M>0&&(p.fillStyle="rgba(226,247,255,0.5)",p.fillRect(Rt(_)-1,Rt(A)-b.L-30,2,28)),Cl(p,_,A-b.L,b.L,7,0,1),p.globalAlpha=1}!m.boom&&x>=o&&(m.boom=!0,a.t===0&&(a.t=1,ih(t,n,r)))}});for(let p=0;p<10;p++){const y=g(0,6.283),x=g(0,r);E(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1,2),.7,p%2?dt.moon2:dt.ice1,2,0,!0)}return!0};function x2(e,t,n){const r=[],o=n?4:3;for(let i=0;i<o;i++)r.push({ox:g(-9,9),oy:g(-3,4),h:g(8,n?16:12),lean:g(-.35,.35)});T({type:"custom",layer:"top",dur:.38,x:e,y:t,draw(i,a){const[s,l]=C(e,t,.15),u=Math.min(1,a*7);i.globalAlpha=a>.6?(1-a)/.4:1;for(const f of r)Cl(i,s+f.ox,l+f.oy,f.h*u,5,f.lean,-1);i.globalAlpha=1}});for(let i=0;i<(n?8:5);i++){const a=g(0,6.283),s=g(.8,2);E(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,g(.5,1.8),.35,i%2?dt.snow:dt.ice2,2,5,!0)}}const M2=[];for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=Math.hypot(t,e);n<=4.4&&Math.hypot(t-1.6,e)>3.4&&M2.push([t,e,n>3.6?1:0])}Xe.buho_A=(e,t,n,r,o,i)=>{y2(t,(c,d)=>x2(c,d,!1));const a=Math.cos(o),s=Math.sin(o);Mt(!0);const l=Bt();for(let c=1;c<=4;c++)l.globalAlpha=.45-c*.09,In(l,n-a*c*5,r-s*c*5,6-c,dt.moon2);l.globalAlpha=1,Mt(!1);const u=i*13,f=Math.cos(u),h=Math.sin(u);for(const[c,d,m]of M2)In(e,n+(c*f-d*h)*2,r+(c*h+d*f)*2,3,m?dt.ice3:dt.ice1);In(e,n+-3*f*2,r+-3*h*2,2,dt.snow),Math.random()<.45&&E(t.x,t.y,t.z||.45,0,0,-.2,.35,dt.ice1,2,0,!0)};De.buho=e=>x2(e.x,e.y,!!e.big);const B=Math.round,Nt=Math.PI*2;let wt=0,At=0;function Vt(e,t,n=0){wt=(e-t)*$.HW+$.OX,At=(e+t)*$.HH-n*$.ZK}function Pe(e,t,n,r,o){e.fillStyle=o,e.fillRect(B(t-r/2),B(n-r/2),r,r)}function qf(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(B(t+(r-t)*l/s-i/2),B(n+(o-n)*l/s-i/2),i,i)}function Fo(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(B(t-a/2),B(n+i*o),B(a),Math.max(1,B(2*o)))}}const cn=e=>e<0?0:e>1?1:e,xn=e=>1-(1-e)*(1-e),b5=()=>$.HW*Math.SQRT2,pt={w:"#f4fdff",l:"#c4f6ff",m:"#6ee2f4",d:"#2aa6c8",k:"#16608a",x:"#0c3450"},we={w:"#fbf4e2",l:"#e6d6b0",m:"#bca67a",d:"#7a6646"},fr={l:"#ffd890",m:"#f0a040",d:"#b0581e"},se={l:"#d6cfc0",m:"#a49c8a",d:"#746c5c",k:"#4a443a",x:"#2e2a24"},Vi=["#8ac050","#5a8a34"],wn={w:"#eef4d8",l:"#d8d070",m:"#a8a030",d:"#6a6a20",k:"#2e3018",eye:"#d0402a"},Qe={k:"#120c08",d:"#2a1c12",m:"#4a3220",l:"#7a5a3a"},Yn=7267060,Jl=15769664;Zn.spirit_bolt=[pt.w,pt.l,pt.m,pt.d];Zn.spirit=[pt.w,pt.l,pt.m,pt.d];Zn.swarm=[wn.w,wn.l,wn.m,wn.d];Zn.behemoth=[we.w,pt.l,pt.m,fr.m];const tu={Q:4,W:2,E:10},Ei=new Map;function b2(e){const t=window.SIM&&window.SIM.HEROES,n=t&&t.cabra;return n&&n.abil?n.abil[e]:null}function Vf(e,t){const n=S.game;if(!n||!n.units)return[];const r=b2(t),o=r&&r.petSprite,i=r&&r.count||tu[t],a=[];for(const l of n.units){if(l.dead||!l.pet||l.illusion||Ei.has(l.id)||e.team&&l.team!==e.team||l.owner&&e.uid&&l.owner.id!==e.uid)continue;const u=Math.hypot(l.x-e.x,l.y-e.y);u>2.4||a.push([o&&l.sprite===o?0:1,u,l.id])}a.sort((l,u)=>l[0]-u[0]||l[1]-u[1]);const s=a.slice(0,i).map(l=>l[2]);Ei.size>300&&Ei.clear();for(const l of s)Ei.set(l,t);return s}function Yf(e,t,n,r,o){const i=[];for(const a of e){const s=ht(a);s&&i.push([s.x,s.y])}for(let a=i.length;a<n;a++){const s=a/n*Nt+o;i.push([t.x+Math.cos(s)*r,t.y+Math.sin(s)*r])}return i}function v2(e,t,n,r){T({type:"custom",layer:"ground",dur:t*1.3+2,x:0,y:0,nt:0,draw(o,i,a){const s=ht(e);if(!s||s.dead){a.t=a.dur+1;return}S.T>=a.nt&&(a.nt=S.T+n,r(s))}})}function L0(e,t,n,r,o,i){for(let a=0;a<o;a+=2){const s=a/o,l=r*Math.pow(1-s,.8)*(s<.2?.6+s*2:1),u=Math.sin(s*5+i)*s*r*.6;l<.6||(e.fillStyle=pt.d,e.fillRect(B(t+u-l),B(n-a-2),Math.max(1,B(l*2)),2),l>1.5&&(e.fillStyle=pt.m,e.fillRect(B(t+u-l*.62),B(n-a-2),Math.max(1,B(l*1.24)),2)),s<.6&&l>2&&(e.fillStyle=pt.l,e.fillRect(B(t+u-l*.3),B(n-a-2),Math.max(1,B(l*.6)),2)),s<.3&&l>2.5&&(e.fillStyle=pt.w,e.fillRect(B(t+u-1),B(n-a-2),2,2)))}}function S2(e,t,n,r,o,i,a,s){for(const f of[-1,1]){const h=f*.42,c=-.12;for(let d=0;d<26*o;d++){const m=Math.PI+d/26*Nt,p=.36*(1-d/26*.75),y=h+f*Math.cos(m)*p,x=c+Math.sin(m)*p;Pe(e,t+y*r,n+x*r*.5,d<26*.6?i+1:i,d<26*.6?a:s)}}const u=cn(o*1.6-.3);for(let f=0;f<=8*u;f++)Pe(e,t,n+(-.2+f*.07)*r*.5,i,a);u>.9&&(Pe(e,t-.12*r,n+.05*r*.5,i,s),Pe(e,t+.12*r,n+.05*r*.5,i,s))}const lh=[3735,3050,1493,3315,2457,1910,3879,756];function Kf(e,t,n,r,o,i){const a=lh[r%lh.length];e.fillStyle=i;for(let s=0;s<12;s++)a>>s&1&&e.fillRect(B(t+(s%3-1)*o-o/2),B(n+((s/3|0)-1.5)*o-o/2),o,o)}function w2(e,t,n,r,o,i,a,s){Vt(t,n);const l=wt,u=At,f=he(r),h=f*.5,c=72,d=54;e.globalAlpha=a;for(let m=0;m<c;m++){const p=m/c;if(p>o)break;const y=p*Nt+i;Pe(e,l+Math.cos(y)*f,u+Math.sin(y)*h,3,m%9===0?pt.w:pt.m)}for(let m=0;m<d;m++){const p=m/d;if(p>o)break;const y=-p*Nt-i*.6;Pe(e,l+Math.cos(y)*f*.76,u+Math.sin(y)*h*.76,2,fr.m)}for(let m=0;m<12;m++){const p=m/12;if(p>o)break;const y=p*Nt+i*.5,x=l+Math.cos(y)*f*.88,b=u+Math.sin(y)*h*.88;e.globalAlpha=a*(.6+.4*s*(.5+.5*Math.sin(S.T*6+m))),Kf(e,x,b,m,2,m&1?pt.l:we.w)}e.globalAlpha=a*.9,S2(e,l,u,f*.62,o,2,pt.l,fr.l)}function Pl(e,t,n,r,o,i,a,s=0){Vt(t,n);const l=wt,u=At,f=he(r),h=f*.5;for(let c=0;c<o;c++){const d=c/o*Nt+s;Pe(e,l+Math.cos(d)*f,u+Math.sin(d)*h,i,a)}}function cs(e,t,n,r,o,i,a,s){let l=t,u=n;Vt(l,u);let f=wt,h=At;for(let c=1;c<=4;c++){const d=r+(W(i+c*3.1)-.5)*.9,m=o/4;l+=Math.cos(d)*m,u+=Math.sin(d)*m,Vt(l,u),qf(e,f,h,wt,At,Math.max(1,a-(c>2?1:0)),s),f=wt,h=At}}j.cabra_Q=e=>{const t=e.x,n=e.y,r=e.dur||10,o=Math.random()*Nt,i=Vf(e,"Q"),a=Yf(i,e,tu.Q,.85,o);T({type:"custom",layer:"ground",add:!0,dur:1,x:t,y:n,draw(f,h){Vt(t,n);const c=wt,d=At;f.globalAlpha=h>.6?(1-h)/.4:1,S2(f,c,d,b5()*1.5,xn(cn(h/.35)),2,pt.m,pt.l),Pl(f,t,n,1.15,30,2,pt.d,h*2)}});const s=16,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=Math.random()*Nt,u[f]=g(.2,1.6);T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(f,h){const c=xn(h);for(let d=0;d<s;d++){const m=a[d%a.length];for(let p=0;p<3;p++){const y=Math.max(0,c-p*.06),x=l[d]+y*2.4,b=2.2*(1-y);Vt(m[0]+Math.cos(x)*b,m[1]+Math.sin(x)*b,.45+u[d]*(1-y)),f.globalAlpha=(1-p/3)*(h>.85?(1-h)/.15:1),Pe(f,wt,At,p?2:3,p?pt.m:pt.w)}}}}),T({type:"custom",layer:"top",add:!0,dur:.7,x:t,y:n,draw(f,h){for(let c=0;c<a.length;c++){const d=cn((h-c*.06)/.85);if(d<=0||d>=1)continue;const m=i[c]?ht(i[c]):null,p=m?m.x:a[c][0],y=m?m.y:a[c][1];Vt(p,y,.05);const x=wt,b=At;if(d<.45){const M=d/.45;f.globalAlpha=1,L0(f,x,b,6+4*M,B(14+46*M),S.T*14+c)}else{const M=(d-.45)/.55;f.globalAlpha=1-M,L0(f,x,b-30*M,7*(1-M)+2,B(40*(1-M)+6),S.T*14+c)}if(d>.4){const M=(d-.4)/.6;f.globalAlpha=1-M,Pl(f,p,y,.2+M*.55,14,2,c&1?pt.l:pt.w,c)}}}});for(let f=0;f<a.length;f++){const h=a[f];for(let c=0;c<5;c++)E(h[0],h[1],.3,g(-.8,.8),g(-.8,.8),g(1,2.4),g(.4,.7),c&1?pt.l:pt.w,2,-.6,!0);Lt(h[0],h[1],1.2,Yn,.8,.6)}Lt(t,n,2.4,Yn,.7,.8);for(const f of i)v2(f,r,.1,h=>{Lt(h.x,h.y,1.3,Yn,.42+.12*Math.sin(S.T*9+f),.22),Math.random()<.3&&E(h.x+g(-.15,.15),h.y+g(-.15,.15),.55,0,0,g(.6,1.1),.6,Math.random()<.5?pt.l:pt.m,2,-.3,!0)});ot(1.5)};function v5(e){const t=e.x,n=e.y,r=Math.random()*Nt;T({type:"custom",layer:"top",add:!0,dur:1,x:t,y:n,draw(o,i){const a=i*1;Vt(t,n,.15);const s=wt,l=At;if(a<.4){const u=a/.4;((S.T*24|0)%3!==0||u<.3)&&(o.globalAlpha=1-u*.5,L0(o,s,l,7*(1-u)+2,B(34*(1-u)+8),S.T*16))}if(a>.2){const u=(a-.2)/.8;for(let f=0;f<10;f++){const h=r+f/10*Nt+u*5,c=.12+u*.45*(.6+.4*W(f+r)),d=.4+u*(1.4+W(f*3+r)*.8);Vt(t+Math.cos(h)*c,n+Math.sin(h)*c,d),o.globalAlpha=(1-u)*(f&1?.8:1),Pe(o,wt,At,f%3===0?3:2,f%3===0?pt.w:pt.m)}}a<.3&&(o.globalAlpha=1-a/.3,Pl(o,t,n,.15+a*1.2,12,2,pt.l,r))}}),Lt(t,n,1.1,Yn,.6,.5)}j.cabra_W=e=>{const t=Math.random()*99,n=e.dur||12,r=Vf(e,"W"),o=Yf(r,e,tu.W,.8,t);for(let i=0;i<o.length;i++){const[a,s]=o[i],l=t+i*17,u=i*.06,f=7,h=new Float32Array(f),c=new Float32Array(f);for(let v=0;v<f;v++)h[v]=v/f*Nt+W(l+v)*.6,c[v]=.6+W(l+v*7)*.5;T({type:"custom",layer:"ground",dur:2.2,delay:u,x:a,y:s,draw(v,w){const _=w*2.2,A=xn(cn(_/.14));v.globalAlpha=_>1.6?(2.2-_)/.6:1;for(let O=0;O<f;O++)cs(v,a,s,h[O],c[O]*A,l+O*11,3,se.x);if(_<1.2){v.globalAlpha=(1-_/1.2)*.95;for(let O=0;O<f;O++)cs(v,a,s,h[O],c[O]*A*.85,l+O*11,1,O&1?pt.m:fr.m)}const R=cn((_-.1)/.25);if(R<=0)return;v.globalAlpha=(_>1.2?Math.max(0,(2.2-_)/1):1)*.9;const P=.62*R,z=[[P,0],[0,P],[-P,0],[0,-P]];for(let O=0;O<4;O++){Vt(a+z[O][0],s+z[O][1]);const F=wt,X=At;Vt(a+z[(O+1)%4][0],s+z[(O+1)%4][1]),qf(v,F,X,wt,At,2,pt.d),Kf(v,F,X,O+i*4,2,pt.l)}}}),T({type:"custom",layer:"ground",dur:.32,delay:u,x:a,y:s,draw(v,w){Vt(a,s);const _=wt,A=At,R=Math.sin(Math.min(1,w*1.6)*Math.PI)*14,P=B(he(.55)*(.7+.3*w));v.globalAlpha=1-w*w,v.fillStyle=Qe.d,Fo(v,_,A,P,.5);for(let z=0;z<R;z+=2){const O=P*Math.sqrt(1-z/(R+1)*(z/(R+1)))*.9;v.fillStyle=z>R-4?Qe.l:Qe.m,v.fillRect(B(_-O),B(A-z),B(O*2),2)}}});const d=10,m=new Float32Array(d),p=new Float32Array(d),y=new Float32Array(d);for(let v=0;v<d;v++)m[v]=v/d*Nt+W(l+v*5)*.8,p[v]=.9+W(l+v*9)*1.4,y[v]=3.2+W(l+v*13)*2.2;T({type:"custom",layer:"top",dur:1.2,delay:u,x:a,y:s,draw(v,w){const _=w*1.2;for(let A=0;A<d;A++){const R=Math.min(_,y[A]/6),P=Math.max(0,y[A]*R-6*R*R),z=p[A]*R;Vt(a+Math.cos(m[A])*z,s+Math.sin(m[A])*z,P+.05);const O=A%3===0,F=(_*14+A|0)&1,X=(F?13:9)+(O?4:0),G=(F?8:12)+(O?2:0);v.globalAlpha=_>.85?(1.2-_)/.35:1,v.fillStyle=se.k,v.fillRect(B(wt-X/2-1),B(At-G/2-1),X+2,G+2),v.fillStyle=se.m,v.fillRect(B(wt-X/2),B(At-G/2),X,G),v.fillStyle=se.l,v.fillRect(B(wt-X/2),B(At-G/2),X,3),v.fillStyle=se.d,v.fillRect(B(wt+X/2-3),B(At-G/2+3),3,G-3),A%3===0&&(v.fillStyle=Vi[0],v.fillRect(B(wt-X/2),B(At-G/2),5,3),v.fillStyle=Vi[1],v.fillRect(B(wt-X/2),B(At-G/2+3),3,2)),A%4===1&&_<.6&&(v.fillStyle=pt.l,v.fillRect(B(wt-1),B(At),3,2))}}});const x=12,b=new Float32Array(x),M=new Float32Array(x);for(let v=0;v<x;v++)b[v]=v/x*Nt+W(l+v*2.3)*.5,M[v]=.7+W(l+v*4.1)*.6;T({type:"custom",layer:"top",dur:.8,delay:u,x:a,y:s,draw(v,w){const _=xn(w);for(let A=0;A<x;A++){const R=(.25+1*_)*M[A];Vt(a+Math.cos(b[A])*R,s+Math.sin(b[A])*R,.1+w*.35*M[A]);const P=B((11-w*6)*M[A]);v.globalAlpha=(1-w)*.55,v.fillStyle=A&1?we.m:se.m,v.fillRect(B(wt-P/2),B(At-P/2),P,B(P*.7)),v.fillStyle=we.l,v.fillRect(B(wt-P/2),B(At-P/2),B(P*.5),2),v.fillStyle=se.d,v.fillRect(B(wt-P/2),B(At+P*.2),P,2)}}});for(let v=0;v<12;v++){const w=Math.random()*Nt;E(a,s,.2,Math.cos(w)*g(.6,2),Math.sin(w)*g(.6,2),g(2,4),g(.5,.8),v%4===0?Vi[v&1]:v&1?se.m:se.d,3,10,!1,.95)}Lt(a,s,1.6,Jl,.55,.5),Lt(a,s,1.2,Yn,.5,1)}for(const i of r)v2(i,n,.12,a=>Lt(a.x,a.y,1,Yn,.22,.26));ot(5)};function S5(e){const t=e.x,n=e.y,r=Math.random()*99,o=10,i=new Float32Array(o),a=new Float32Array(o),s=new Float32Array(o),l=new Float32Array(o),u=new Float32Array(o);for(let f=0;f<o;f++)i[f]=g(-.22,.22),a[f]=g(-.22,.22),s[f]=g(.15,1),l[f]=g(.4,1.2),u[f]=Math.random()*Nt;T({type:"custom",layer:"top",dur:1,x:t,y:n,draw(f,h){const c=h*1;for(let d=0;d<o;d++){const m=Math.sqrt(2*s[d]/9);let p;if(c<m)p=s[d]-4.5*c*c;else{const b=9*m*.35,M=c-m;p=Math.max(0,b*M-4.5*M*M)}const y=l[d]*Math.min(c,m*1.8)*.5;Vt(t+i[d]+Math.cos(u[d])*y,n+a[d]+Math.sin(u[d])*y,p);const x=d<4?7:5;f.globalAlpha=c>.75?(1-c)/.25:1,f.fillStyle=se.k,f.fillRect(B(wt-x/2-1),B(At-x/2-1),x+2,x+2),f.fillStyle=d&1?se.m:se.d,f.fillRect(B(wt-x/2),B(At-x/2),x,x),f.fillStyle=se.l,f.fillRect(B(wt-x/2),B(At-x/2),x-2,2)}if(c<.3){Vt(t,n,.6),f.globalAlpha=1-c/.3;const d=B(8*(1-c/.3))+2;Pe(f,wt,At,d,pt.l)}}}),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(f,h){Vt(t,n);const c=wt,d=At,m=cn((h-.45)/.55);f.globalAlpha=1-m,f.fillStyle=se.k,Fo(f,c,d+2,18,.45);for(let p=0;p<9;p++){const y=W(r+p)*Nt,x=W(r+p*3)*14,b=c+Math.cos(y)*x,M=d+Math.sin(y)*x*.45-3+m*4;f.fillStyle=p&1?se.m:se.d,f.fillRect(B(b-3),B(M-2),6,4),f.fillStyle=se.l,f.fillRect(B(b-3),B(M-2),3,1)}}}),T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(f,h){for(let c=0;c<6;c++){const d=r+c/6*Nt;Vt(t+Math.cos(d)*(.2+h*.6),n+Math.sin(d)*(.2+h*.6),.2+h*.4),f.globalAlpha=(1-h)*.6,Pe(f,wt,At,B(12-h*8),c&1?se.l:we.l)}}});for(let f=0;f<8;f++)E(t+g(-.2,.2),n+g(-.2,.2),g(.3,.9),g(-1,1),g(-1,1),g(.5,1.5),g(.5,.8),f&1?se.m:Vi[1],2,9,!1,.95);ot(1.5)}function _2(e,t,n,r,o){const i=(a,s,l,u,f)=>{e.fillStyle=f,e.fillRect(B(t+(r>0?a:-a-l)*2),B(n+s*2),l*2,u*2)};o&&(i(-3,-5,4,3,wn.w),i(-1,-4,3,2,wn.w)),i(-5,-1,2,2,wn.d),i(-3,-1,5,2,wn.m),i(-3,-1,4,1,wn.l),i(2,-2,2,3,wn.d),i(3,-2,1,1,wn.eye),i(-2,1,1,2,wn.k),i(-4,2,2,1,wn.k),i(1,1,1,1,wn.k),o||i(-5,-2,6,1,wn.w)}j.cabra_E=e=>{const t=e.x,n=e.y,r=Math.random()*Nt,o=Math.cos(r),i=Math.sin(r),a=Vf(e,"E"),s=Yf(a,e,tu.E,.9,r),l=.85,u=1.6;T({type:"custom",layer:"ground",dur:u,x:t,y:n,draw(m,p){const y=p*u,x=y<.15?xn(y/.15):y>1.2?1-cn((y-1.2)/.4):1;if(x<=0)return;m.globalAlpha=1;const b=16,M=-i,v=o,w=(A,R,P)=>{const z=P/b*2-1,O=1+(W(P*1.7+r+R)-.5)*.8,F=.26*(1-z*z)*O*x*A;Vt(t+o*z*l*(.75+.25*A)+M*F*R,n+i*z*l*(.75+.25*A)+v*F*R)},_=(A,R)=>{m.beginPath(),w(A,1,0),m.moveTo(B(wt),B(At));for(let P=1;P<=b;P++)w(A,1,P),m.lineTo(B(wt),B(At));for(let P=b-1;P>=0;P--)w(A,-1,P),m.lineTo(B(wt),B(At));m.closePath(),m.fillStyle=R,m.fill()};_(1.55,Qe.l),_(1.25,Qe.m),_(1,Qe.k),_(.42,fr.d),_(.18,fr.m);for(let A=1;A<b;A+=3)for(const R of[-1,1])w(1.7,R,A),m.fillStyle=A&1?Qe.m:Qe.l,m.fillRect(B(wt-3),B(At-3),6,4),m.fillStyle=Qe.d,m.fillRect(B(wt-3),B(At+1),6,2)}}),T({type:"custom",layer:"ground",add:!0,dur:1.3,x:t,y:n,draw(m,p){Vt(t,n),m.globalAlpha=(1-p)*(.6+.4*Math.sin(S.T*20)),m.fillStyle=fr.m,Fo(m,wt,At,B(10+6*p),.4)}});const f=18,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let m=0;m<f;m++)h[m]=m*.025+g(0,.02),c[m]=g(1,2),d[m]=g(-.7,.7);T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(m,p){const y=p*1.15,x=S.T*28|0;for(let b=0;b<f;b++){const M=cn((y-h[b])/.6);if(M<=0||M>=1&&y-h[b]>.72)continue;const v=s[b%s.length],w=t+o*d[b]*l,_=n+i*d[b]*l,A=xn(M),R=Math.sin(M*14+b)*.12*(1-M),P=w+(v[0]-w)*A+R,z=_+(v[1]-_)*A-R,O=Math.sin(M*Math.PI)*c[b]+.35*M;Vt(P,z,O);const F=wt,X=At;Vt(w+(v[0]-w)*Math.max(0,A-.05),_+(v[1]-_)*Math.max(0,A-.05),Math.sin(Math.max(0,M-.05)*Math.PI)*c[b]);const G=F>=wt?1:-1;m.globalAlpha=M>=1?1-(y-h[b]-.6)/.12:1,M<.9&&(m.fillStyle=Qe.m,m.fillRect(B(wt-1),B(At-1),2,2)),_2(m,F,X,G,(x+b&1)===1)}}});for(let m=0;m<12;m++)E(t+o*g(-.6,.6),n+i*g(-.6,.6),.1,g(-1.4,1.4),g(-1.4,1.4),g(1.5,3.2),g(.4,.7),m%3?Qe.m:Qe.l,3,9,!1,.94);for(let m=0;m<6;m++)E(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1.2),g(.3,.5),fr.l,2,2,!0);Lt(t,n,1.6,Jl,.7,1.2),ot(2)};function w5(e){const t=e.x,n=e.y,r=3,o=Math.random()*Nt,i=new Float32Array(r),a=new Float32Array(r);for(let s=0;s<r;s++)i[s]=o+s/r*Nt+g(-.5,.5),a[s]=g(1.6,2.6);T({type:"custom",layer:"top",dur:.9,x:t,y:n,draw(s,l){const u=S.T*30|0;for(let f=0;f<r;f++){const h=l*l,c=a[f]*h+Math.sin(l*12+f)*.05;Vt(t+Math.cos(i[f])*c,n+Math.sin(i[f])*c,.35+l*1.8+Math.sin(l*20+f*2)*.06),s.globalAlpha=l>.65?(1-l)/.35:1,_2(s,wt,At,Math.cos(i[f])-Math.sin(i[f])>=0?1:-1,(u+f&1)===1)}}}),E(t,n,.3,g(-.6,.6),g(-.6,.6),g(.8,1.5),.4,wn.d,2,6,!1,.94)}const k0=4.6,uh=[1,.85,.65,.45,.28,.14];let fh=null,ch=null,hh=[],dh=[];function _5(e){return fh!==e&&(fh=e,hh=[{u0:0,fill:Ct(e,pt.k,6),a:.6},{u0:.6,fill:Ct(e,pt.d,8),a:.65},{u0:.88,fill:Ct(e,pt.m,11),a:.75}]),hh}function A5(e){return ch!==e&&(ch=e,dh=[{u0:0,fill:Ct(e,pt.l,3),a:.55},{u0:.6,fill:Ct(e,pt.m,5),a:.6},{u0:.88,fill:Ct(e,pt.w,10),a:.8}]),dh}function mh(e,t,n,r,o,i,a){for(let s=0;s<10;s++){const l=s/10*Nt+a*.8,u=Math.cos(l),f=Math.sin(l);if(u+f>0!==i)continue;const h=(a*1.3+W(s*3.3))%1*k0;Vt(t+u*r,n+f*r,h),e.globalAlpha=o*(1-h/k0)*(i?1:.6),Kf(e,wt,At,s,2,s&1?we.w:pt.w)}}j.cabra_R=e=>{const t=e.x,n=e.y,r=1.5,o=e.radius||3.4,i=.2,a=Math.random()*99;e.uid&&jf(e.uid);const s=S.T,l=()=>S.T-s,u=y=>y<.12?r*.95*xn(y/.12):r*.95*Math.max(0,1-(y-.12)/1.5)**1.4,f=y=>y<.05?y/.05:y>1.2?Math.max(0,1-(y-1.2)/.42):1,h=y=>k0*xn(cn(y/.16));T({type:"custom",layer:"ground",add:!0,dur:3.4,x:t,y:n,draw(y,x){const b=x*3.4,M=b>2.4?3.4-b:1;w2(y,t,n,r,xn(cn(b/.25)),b*.35+a,M,b<1.4?1:.4)}}),T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Vt(t,n),Sr(y,wt,At,he(v),he(v*.92),Jn(h(M)),!1,_5(y),uh,w),mh(y,t,n,v,w,!1,M)}}),T({type:"custom",layer:"top",add:!0,dur:1.8,x:t,y:n,draw(y,x,b){const M=l(),v=u(M),w=f(M);if(w<=0||v<.05){M>.3&&(b.t=b.dur+1);return}Vt(t,n),Sr(y,wt,At,he(v),he(v*.92),Jn(h(M)),!0,A5(y),uh,w*.85),mh(y,t,n,v,w,!0,M),y.globalAlpha=w*.8,y.fillStyle=pt.w;const _=h(M);for(let A=0;A<18;A++){const R=A/18*Nt+M*2;Vt(t+Math.cos(R)*v*.92,n+Math.sin(R)*v*.92,_),y.fillRect(B(wt-1),B(At-1),3,2)}}}),T({type:"custom",layer:"ground",add:!0,delay:i,dur:.35,x:t,y:n,draw(y,x){Vt(t,n),y.globalAlpha=(1-x)*.75,y.fillStyle=Ct(y,we.w,x<.3?8:4),Fo(y,wt,At,B(he(r)*(.6+x*.7)),.5),y.globalAlpha=1-x,y.fillStyle=fr.l;const b=he(r)*(.6+x*.7);for(let M=0;M<40;M++){const v=M/40*Nt;y.fillRect(B(wt+Math.cos(v)*b-2),B(At+Math.sin(v)*b*.5-2),4,4)}}}),T({type:"custom",layer:"ground",delay:i,dur:.75,x:t,y:n,draw(y,x){const b=r*.9+(o-r*.9)*xn(x);Vt(t,n);const M=wt,v=At,w=he(b),_=w*.5;y.globalAlpha=(1-x)*.85;for(let A=0;A<56;A++){const R=A/56*Nt;Pe(y,M+Math.cos(R)*w,v+Math.sin(R)*_-x*8,B(11-x*7),A&1?we.l:se.l)}y.globalAlpha=1-x;for(let A=0;A<56;A+=2){const R=A/56*Nt+.05;Pe(y,M+Math.cos(R)*w*.94,v+Math.sin(R)*_*.94,3,fr.l)}}});const c=12,d=new Float32Array(c),m=new Float32Array(c),p=Math.max(.6,o-r*.95);for(let y=0;y<c;y++)d[y]=y/c*Nt+W(a+y)*.4,m[y]=p*(.55+W(a+y*5)*.45);T({type:"custom",layer:"ground",delay:i,dur:2.8,x:t,y:n,draw(y,x){const b=x*2.8,M=xn(cn(b/.12));y.globalAlpha=b>2?(2.8-b)/.8:1;for(let v=0;v<c;v++)cs(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M,a+v*7,4,se.x);if(b<1.4){y.globalAlpha=1-b/1.4;for(let v=0;v<c;v++)cs(y,t+Math.cos(d[v])*r*.95,n+Math.sin(d[v])*r*.95,d[v],m[v]*M*.9,a+v*7,2,v%3?fr.m:fr.l)}}}),T({type:"custom",layer:"top",delay:i,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){if(!b.fired){b.fired=!0;for(let M=0;M<26;M++){const v=Math.random()*Nt,w=r*g(.7,1.1),_=g(1.5,4)*o/3.4;E(t+Math.cos(v)*w,n+Math.sin(v)*w,.1,Math.cos(v)*_,Math.sin(v)*_,g(2.5,5.5),g(.7,1.1),M%5===0?Vi[0]:M&1?se.m:se.d,Math.random()*3+3|0,12,!1,.96)}for(let M=0;M<14;M++){const v=Math.random()*Nt;E(t+Math.cos(v)*r,n+Math.sin(v)*r,.4,Math.cos(v)*.6,Math.sin(v)*.6,g(1.5,3),g(.6,1),M&1?pt.l:pt.w,2,-.4,!0)}Lt(t,n,o*1.2,Jl,.9,.45),ot(10)}}}),Lt(t,n,3.6,Yn,1,1.4)};j.cabra_T=e=>{e.uid&&jf(e.uid)};function T5(e,t,n,r){Vt(t,n);const o=wt,i=At;e.fillStyle=Qe.k,Fo(e,o-4*r,i,B(4*r),.55),Fo(e,o+4*r,i,B(4*r),.55),e.fillStyle=Qe.l,e.fillRect(B(o-9*r),B(i-3*r),B(4*r),2),e.fillRect(B(o+5*r),B(i-3*r),B(4*r),2)}j.cabra_ev_behemoth_stomp=e=>{e.uid&&jf(e.uid);const t=e.uid?ht(e.uid):null;t&&(t._stompA=S.T+.6);const n=e.x,r=e.y,o=e.radius||3.2,i=Math.random()*99;at.sfx("stomp_cabra",n,r,1);const a=[[1,.3],[.3,1],[-.95,-.25],[-.25,-.95]];T({type:"custom",layer:"ground",dur:2.2,x:n,y:r,draw(f,h){f.globalAlpha=(h>.6?(1-h)/.4:1)*.8;for(const[y,x]of a)T5(f,n+y,r+x,1.8);Vt(n,r);const c=wt,d=At,m=he(1.25),p=m*.5;for(let y=0;y<36;y++){const x=y/36*Nt,b=c+Math.cos(x)*m,M=d+Math.sin(x)*p;f.fillStyle=Qe.d,f.fillRect(B(b-5),B(M-2),10,4),f.fillStyle=y&1?Qe.l:se.m,f.fillRect(B(b-3),B(M-4),6,3)}}}),T({type:"custom",layer:"ground",dur:.75,x:n,y:r,draw(f,h){const c=xn(h),d=1.1+(o-1.1)*c;Vt(n,r);const m=wt,p=At;f.globalAlpha=1-h*h;for(let b=0;b<60;b++){const M=b/60*Nt+i,v=d*(1+(W(i+b)-.5)*.06),w=he(v),_=w*.5,A=(1-h)*(8+6*W(b*2.7+i)),R=m+Math.cos(M)*w,P=p+Math.sin(M)*_;f.fillStyle=Qe.d,f.fillRect(B(R-5),B(P-1),10,3),f.fillStyle=b&1?Qe.l:se.m,f.fillRect(B(R-4),B(P-A-5),8,6),f.fillStyle=b%3?we.l:se.l,f.fillRect(B(R-4),B(P-A-5),5,2)}f.globalAlpha=(1-h)*.7;const y=he(d*.82),x=y*.5;f.fillStyle=Qe.d;for(let b=0;b<40;b++){const M=b/40*Nt;f.fillRect(B(m+Math.cos(M)*y-2),B(p+Math.sin(M)*x-1),4,2)}}}),T({type:"custom",layer:"ground",add:!0,dur:.5,x:n,y:r,draw(f,h){f.globalAlpha=(1-h)*.85;const c=1.2+(o-1)*xn(h);Pl(f,n,r,Math.min(o,c),48,3,h<.5?pt.l:pt.m,i)}});const s=8,l=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<s;f++)l[f]=f/s*Nt+W(i+f*3)*.6,u[f]=.5+W(i+f*7)*.7;T({type:"custom",layer:"ground",dur:1.8,x:n,y:r,draw(f,h){const c=xn(cn(h*1.8/.1));f.globalAlpha=h>.6?(1-h)/.4:1;for(let d=0;d<s;d++)cs(f,n+Math.cos(l[d])*1.25,r+Math.sin(l[d])*1.25,l[d],u[d]*c,i+d*5,3,se.x)}}),T({type:"custom",layer:"top",dur:.8,x:n,y:r,draw(f,h){const c=.7+(o-.7)*xn(Math.min(1,h*1.3));for(let d=0;d<18;d++){const m=d/18*Nt+i*.3,p=.15+h*(.5+.4*W(d+i)),y=B(12-h*7);Vt(n+Math.cos(m)*c,r+Math.sin(m)*c,p),f.globalAlpha=(1-h)*.5,f.fillStyle=d&1?we.m:se.m,f.fillRect(B(wt-y/2),B(At-y/2),y,B(y*.7)),f.fillStyle=we.l,f.fillRect(B(wt-y/2),B(At-y/2),B(y/2),2)}}});for(let f=0;f<16;f++){const h=Math.random()*Nt,c=g(.5,1);E(n+Math.cos(h)*c,r+Math.sin(h)*c,.1,Math.cos(h)*g(1.2,3),Math.sin(h)*g(1.2,3),g(2,4),g(.5,.8),f%4===0?Vi[1]:f&1?se.m:Qe.l,Math.random()*2+3|0,11,!1,.95)}Lt(n,r,o*1.05,Jl,.6,.35),Lt(n,r,o*.8,Yn,.4,.3,{delay:.05}),ot(5)};const Fs=new Set;function R5(e){const t=e&&e.status&&e.status.transform;return!!(t&&t.kind==="mount")}function jf(e){if(Fs.has(e))return;Fs.add(e);let t=!1,n=0,r=NaN,o=NaN,i=0,a=0,s=-9,l=0,u=0,f=0;T({type:"custom",layer:"top",add:!0,dur:600,x:0,y:0,draw(h,c,d){const m=ht(e);if(!(!!m&&!m.dead&&R5(m))){if(!t){d.t>2&&(Fs.delete(e),d.t=d.dur+1);return}if(n||(n=S.T),S.T-n<.12)return;Fs.delete(e),d.t=d.dur+1;const b=m?m.x:r,M=m?m.y:o;isFinite(b)&&(P5({x:b,y:M},!0),at.sfx("fade_cabra_R",b,M,1));return}t=!0,n=0;const y=isFinite(r)?Math.hypot(m.x-r,m.y-o):0;if(r=m.x,o=m.y,y>.004&&S.T>=i){i=S.T+.24;const b=Math.random()*Nt;for(let M=0;M<3;M++)E(m.x+Math.cos(b+M*.4)*.6,m.y+Math.sin(b+M*.4)*.6,.05,g(-.5,.5),g(-.5,.5),g(.3,.8),g(.4,.6),M&1?we.m:se.l,4,1.5,!1,.9)}if(S.T-s>1.1&&Math.random()<.03){s=S.T;const b=Math.random()<.5?-1:1;l=b*.34,u=-b*.34,f=g(2.1,2.6)}const x=(S.T-s)/.35;if(x>=0&&x<1){Vt(m.x+l,m.y+u,f+x*.15);const b=B(6*Math.sin(x*Math.PI))+1;h.globalAlpha=1,h.fillStyle=pt.w,h.fillRect(B(wt-b),B(At-1),b*2,2),h.fillRect(B(wt-1),B(At-b),2,b*2),h.fillStyle=pt.m,h.fillRect(B(wt-2),B(At-2),4,4)}S.T>=a&&(a=S.T+.15,Lt(m.x,m.y,1.8,Yn,.22,.3))}})}function C5(e,t,n,r,o){e.globalAlpha=o;for(const i of[-1,1]){const a=t+i*18*r,s=n+8*r;for(let l=0;l<=22;l++){const u=l/22,f=Math.PI+u*Nt*.95,h=15*r*(1-u*.7),c=B((7-u*4)*r),d=a+i*Math.cos(f)*h,m=s+Math.sin(f)*h;e.fillStyle=we.d,e.fillRect(B(d-c/2-1),B(m-c/2-1),c+2,c+2),e.fillStyle=l%4===0?we.m:we.l,e.fillRect(B(d-c/2),B(m-c/2),c,c)}}for(let i=0;i<30*r;i+=2){const a=i/(30*r),s=(16-a*9)*r;e.fillStyle=a<.1?pt.l:Ct(e,pt.m,12),e.fillRect(B(t-s),B(n+i),B(s*2),2)}e.fillStyle=pt.w,e.fillRect(B(t-9*r),B(n+9*r),B(4*r),B(3*r)),e.fillRect(B(t+5*r),B(n+9*r),B(4*r),B(3*r))}function P5(e,t=!1){const n=e.x,r=e.y,o=t?1.9:1.25,i=t?1.9:1.3,a=t?1.6:1.25,s=1.6,l=Math.random()*9;T({type:"custom",layer:"ground",add:!0,dur:s,x:n,y:r,draw(u,f){const h=f*s,c=h>1.1?1-cn((h-1.1)/.35):1;c<=0||w2(u,n,r,o*c,xn(cn(h/.22)),-h*1.2+l,1,1)}}),T({type:"custom",layer:"ground",dur:s,x:n,y:r,draw(u,f){const h=f*s,c=h>1.1?1-cn((h-1.1)/.35):1;c<=0||(Vt(n,r),u.globalAlpha=.85*c*cn(h/.25),u.fillStyle=pt.k,Fo(u,wt,At,B(he(o*.62*c)),.5),u.fillStyle=pt.x,Fo(u,wt,At+2,B(he(o*.5*c)),.5))}}),T({type:"custom",layer:"top",dur:s,x:n,y:r,draw(u,f){const h=f*s;if(h<.15||h>1.25)return;const c=cn((h-.15)/.95),d=c*c;Vt(n,r);const m=At,p=wt;u.save(),u.beginPath(),u.rect(p-600,m-900,1200,900),u.clip(),C5(u,p,m-a*$.ZK+d*(a+.4)*$.ZK,i,(c<.15?c/.15:1)*.95),u.restore()}}),T({type:"custom",layer:"top",add:!0,delay:1.35,dur:.3,x:n,y:r,draw(u,f){Vt(n,r,.1),u.globalAlpha=1-f;const h=B((t?40:26)*(1-f))+2;u.fillStyle=pt.w,u.fillRect(B(wt-h),B(At-1),h*2,3),u.fillRect(B(wt-1),B(At-h*.6),3,B(h*1.2))}}),T({type:"custom",layer:"top",delay:1.35,dur:.02,x:n,y:r,fired:!1,draw(u,f,h){if(!h.fired){h.fired=!0;for(let c=0;c<16;c++){const d=c/16*Nt;E(n+Math.cos(d)*.3,r+Math.sin(d)*.3,.2,Math.cos(d)*1.2,Math.sin(d)*1.2,g(1.5,3),g(.5,.9),c&1?pt.l:we.w,2,-.3,!0)}Lt(n,r,2.4,Yn,.9,.35),ot(3)}}}),Lt(n,r,t?3.2:2.6,Yn,.7,1.4)}const I5={Q:v5,W:S5,E:w5},z5={Q:.55,W:.7,E:.45};j.cabra_petfade=e=>{let t=Ei.get(e.uid)||"";if(!t&&e.sprite)for(const n of["Q","W","E"]){const r=b2(n);r&&r.petSprite&&r.petSprite===e.sprite&&(t=n)}if(!t&&typeof e.sprite=="string"&&e.sprite.startsWith("cabra")){const n=e.sprite;t=/wisp|spirit|flame/.test(n)?"Q":/golem|stone|twin/.test(n)?"W":/locust|swarm|bug/.test(n)?"E":""}return t?(Ei.delete(e.uid),I5[t](e),at.sfx("fade_cabra_"+t,e.x,e.y,z5[t]),!0):!1};Xe.cabra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=(t.id||0)*1.7;for(let c=1;c<=9;c++){const d=c*3,m=Math.sin(i*22+f-c*.9)*(2+c*.35);e.globalAlpha=1-c/10,Pe(e,n-a*d+l*m,r-s*d+u*m,2,pt.m),Pe(e,n-a*d-l*m,r-s*d-u*m,2,c&1?we.l:we.w)}e.globalAlpha=1;for(let c=0;c<4;c++)Pe(e,n-a*(3+c*2.5)+l*Math.sin(i*30+c)*1.2,r-s*(3+c*2.5)+u*Math.sin(i*30+c)*1.2,6-c,c<2?pt.m:pt.d);e.fillStyle=pt.d,e.fillRect(B(n-5),B(r-5),10,10),e.fillStyle=pt.l,e.fillRect(B(n-4),B(r-4),8,8),e.fillStyle=pt.w,e.fillRect(B(n-2),B(r-2),4,4),Pe(e,n+a*3+l*4,r+s*3+u*4,2,we.w),Pe(e,n+a*5+l*5,r+s*5+u*5,2,we.l),Pe(e,n+a*3-l*4,r+s*3-u*4,2,we.w),Pe(e,n+a*5-l*5,r+s*5-u*5,2,we.l);const h=i*12|0;t._lf!==h&&(t._lf=h,Lt(t.x,t.y,.9,Yn,.5,.12),h&1&&E(t.x,t.y,t.z||.45,0,0,.3,.3,pt.l,2,0,!0))};De.cabra=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*Nt;T({type:"custom",layer:"top",add:!0,dur:r?.42:.3,x:t,y:n,draw(i,a){Vt(t,n,.45);const s=wt,l=At;i.globalAlpha=a>.5?(1-a)/.5:1;const u=r?7:5,f=(r?14:10)*xn(cn(a*1.8));for(let c=0;c<u;c++){const d=o+c/u*Nt,m=s+Math.cos(d)*f,p=l+Math.sin(d)*f*.7;qf(i,s+Math.cos(d)*f*.35,l+Math.sin(d)*f*.25,m,p,3,pt.m),Pe(i,m,p,3,pt.w)}Pe(i,s,l,B(8*(1-a))+2,pt.w),Vt(t,n);const h=6+a*(r?30:20);for(let c=0;c<12;c++){const d=o+c/12*Nt;Pe(i,wt+Math.cos(d)*h,At+Math.sin(d)*h*.5,2,c&1?we.l:pt.l)}if(r){i.globalAlpha=1-a;for(const c of[-1,1])for(let d=0;d<8;d++){const m=Math.PI+d/8*Math.PI*1.4,p=7*(1-d/12);Pe(i,s+c*(7+Math.cos(m)*p),l-16-a*14+Math.sin(m)*p,d<4?3:2,d<4?we.w:we.l)}}}});for(let i=0;i<(r?8:4);i++)E(t,n,.5,g(-.9,.9),g(-.9,.9),g(.6,1.6),.4,i&1?pt.l:pt.w,2,-.4,!0);Lt(t,n,r?1.4:1,Yn,r?.7:.5,.22)};const bt=Math.round,tn=Math.PI*2,Pa=e=>e*$.HW*Math.SQRT2,gt={ink:"#141c2a",gold:"#ffd060",brass:"#c8902a",brassD:"#6a4a14",face:"#f6f2de",glass:"#a8dcff",glassL:"#ffffff",time:"#8aa8ff",sand:"#f0d890",teal:"#2ad0c0",night:"#26285a"},oo=["#2ea86a","#2ad0c0","#c8f050","#ffd060","#ff5ab8","#7a5ad0"],A2=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function en(e,t,n,r){r=Math.max(1,bt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(bt(t[0]+(n[0]-t[0])*s/i-a),bt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function U0(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(bt(t-l),bt(n+a),Math.max(1,bt(l*2)),i)}}function Ia(e,t,n,r,o,i,a=0){for(let s=0;s<o;s++){const l=a+s/o*tn;e.fillRect(bt(t+Math.cos(l)*r-i/2),bt(n+Math.sin(l)*r*.5-i/2),i,i)}}function ph(e,t,n,r){t=bt(t),n=bt(n),e.fillRect(t-r,n,r*2+1,1),e.fillRect(t,n-r,1,r*2+1),r>2&&e.fillRect(t-1,n-1,3,3)}const O5=e=>(e=Math.min(1,Math.max(0,e))-1,1+e*e*((1.6+1)*e+1.6));j.camaleon_Q=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=[];for(let s=0;s<11;s++)for(let l=0;l<7;l++){const u=(l-3)/3.5,f=(s-5)/5.5;u*u+f*f<=1&&i.push({i:l,j:s,t0:Math.random()*.35,vx:g(-14,14),c:l+s})}T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(s,l){const u=l*.8,[f,h]=C(t,n,.5),c=S.T*12|0;for(const d of i){const m=u-d.t0,p=m>0?1-m/.4:1;if(p<=0)continue;const y=f+(d.i-3)*5+(m>0?d.vx*m:0),x=h+(d.j-5)*5-(m>0?m*m*160:0);s.globalAlpha=p,s.fillStyle=oo[(d.c+c)%6],s.fillRect(bt(y)-2,bt(x)-2,5,5)}}});const a=Math.max(4,Math.min(18,bt(Math.hypot(r-t,o-n)*2.4)));T({type:"custom",layer:"ground",dur:.65,x:t,y:n,draw(s,l){const u=C(t,n),f=C(r,o),h=f[0]-u[0],c=f[1]-u[1],d=Math.hypot(h,c)||1,m=-c/d,p=h/d;for(let y=0;y<=a;y++){const x=y/a,b=l*4-x;if(b<0)continue;const M=y%4===0,v=M?9:5,w=u[0]+h*x,_=u[1]+c*x;s.globalAlpha=Math.min(1,b*3)*Math.max(0,1-Math.max(0,l-.35)/.65),s.fillStyle=gt.ink,en(s,[w-m*v+1,_-p*v+1],[w+m*v+1,_+p*v+1],M?4:3),s.fillStyle=M?gt.gold:oo[(y+(S.T*10|0))%6],en(s,[w-m*v,_-p*v],[w+m*v,_+p*v],M?3:2)}}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:r,y:o,draw(s,l){const[u,f]=C(r,o,.5),h=20+l*16;s.globalAlpha=1-l*l;for(let d=0;d<12;d++){const m=d/12*tn,p=d%3===0?7:3;s.fillStyle=d%3===0?gt.gold:gt.face,en(s,[u+Math.cos(m)*h,f+Math.sin(m)*h*.8],[u+Math.cos(m)*(h-p),f+Math.sin(m)*(h-p)*.8],2)}const c=-Math.PI/2-l*tn*1.5;s.fillStyle=gt.face,en(s,[u,f],[u+Math.cos(c)*(h-8),f+Math.sin(c)*(h-8)*.8],3),s.fillStyle=gt.gold,s.fillRect(bt(u)-2,bt(f)-2,5,5)}});for(let s=0;s<14;s++){const l=s/14*tn;E(r,o,.5,Math.cos(l)*2.2,Math.sin(l)*2.2,g(.5,1.5),.45,oo[s%6],3,2,!0,.9)}};j.camaleon_W=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.2,e.angle||.9),i=(e.range||2.6)*.8,a=[{dl:0,sc:1,al:1},{dl:.07,sc:.78,al:.6},{dl:.14,sc:.58,al:.4}],s=(l,u,f=.45)=>C(t+Math.cos(r+l*o)*u,n+Math.sin(r+l*o)*u,f);T({type:"custom",layer:"top",dur:.55,x:t,y:n,draw(l,u){const f=u*.55;for(let h=a.length-1;h>=0;h--){const c=a[h],d=f-c.dl;if(d<0)continue;const m=Math.min(1,d/.3),p=1-2*(1-Math.pow(1-m,2));if(!(m>=1)){l.globalAlpha=c.al;for(let y=-1,x=0;y<=p;y+=.06,x++){const b=Math.max(0,1-(p-y)/.7),M=bt(3+6*b*c.sc),[v,w]=s(y,i*c.sc);l.fillStyle=gt.ink,l.fillRect(bt(v-M/2)+1,bt(w-M/2)+1,M,M),l.fillStyle=h===0?x%2?gt.gold:gt.face:oo[(h*2+x)%6],l.fillRect(bt(v-M/2),bt(w-M/2),M,M)}if(h===0){l.fillStyle=gt.gold;for(let y=-1;y<=p;y+=.2){const x=s(y,i*1.06),b=s(y,i*1.16);en(l,x,b,2)}}}}if(f>.28){const h=(f-.28)/.27,[c,d]=s(-1,i);l.globalAlpha=1-h;for(let m=0;m<16;m++){const p=m*.6-h*4,y=2+m*1.1;l.fillStyle=oo[m%6],l.fillRect(bt(c+Math.cos(p)*y)-1,bt(d+Math.sin(p)*y*.7)-1,3,3)}}}});for(let l=0;l<18;l++){const u=g(-1,1),f=i*g(.3,1.1),h=r+u*o;E(t+Math.cos(h)*f,n+Math.sin(h)*f,g(.2,.9),g(-.15,.15),g(-.15,.15),g(0,.2),g(.8,1.3),l%3?gt.sand:gt.time,2,.15,!0,.99)}ot(A2(e)?3:1)};j.camaleon_E=e=>{const t=e.uid,n=e.dur||4;T({type:"custom",layer:"top",add:!0,dur:.3,x:e.x,y:e.y,draw(s,l){const u=ht(t),[f,h]=C(u?u.x:e.x,u?u.y:e.y,.5);s.globalAlpha=1-l;for(let c=0;c<8;c++){const d=c/8*tn+.2,m=12+l*30;s.fillStyle=oo[c%6],en(s,[f+Math.cos(d)*m,h+Math.sin(d)*m*.7],[f+Math.cos(d)*(m+8),h+Math.sin(d)*(m+8)*.7],3)}}});const r=[];let o=0,i=0;const a=[5,9,11,12,12,11,10,9,7,5];T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=ht(t);if(!f||f.dead){u.t=u.dur+1;return}if(S.T-o>.06){const c=r[r.length-1];(!c||Math.hypot(f.x-c.x,f.y-c.y)>.1)&&(r.push({x:f.x,y:f.y,t:S.T,c:i++}),r.length>8&&r.shift()),o=S.T}const h=l>.92?(1-l)/.08:1;for(const c of r){const d=1-(S.T-c.t)/.4;if(d<=0)continue;const[m,p]=C(c.x,c.y);s.globalAlpha=d*.65*h,s.fillStyle=oo[c.c%6];for(let y=0;y<a.length;y++)s.fillRect(bt(m-a[y]),bt(p-8-y*6),a[y]*2,3)}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l,u){const f=ht(t);if(!f||f.dead){u.t=u.dur+1;return}const[h,c]=C(f.x,f.y,1.05),d=h+24,m=c+Math.sin(S.T*5)*2;s.globalAlpha=l>.9?(1-l)/.1:Math.min(1,u.t/.12),s.fillStyle=gt.brassD,U0(s,d,m,9,9,1),s.fillStyle=gt.brass,s.fillRect(bt(d)-2,bt(m)-13,5,4),s.fillStyle=gt.face,U0(s,d,m,7,7,1),s.fillStyle=gt.ink,s.fillRect(bt(d)-1,bt(m)-7,2,2),s.fillRect(bt(d)+5,bt(m),2,2),s.fillRect(bt(d)-1,bt(m)+5,2,2),s.fillRect(bt(d)-7,bt(m),2,2);const p=S.T*14;s.fillStyle="#e03a4a",en(s,[d,m],[d+Math.cos(p)*6,m+Math.sin(p)*6],2)}})};function F5(e,t,n,r){t=bt(t),n=bt(n),e.fillStyle=gt.brass,e.fillRect(t-9,n-14,19,3),e.fillRect(t-9,n+12,19,3),e.fillStyle=gt.brassD,e.fillRect(t-9,n-11,2,23),e.fillRect(t+8,n-11,2,23);for(let o=0;o<11;o++){const i=bt(6-o*.5),a=bt(1+o*.5);e.fillStyle=gt.glass,e.fillRect(t-i-1,n-11+o,1,1),e.fillRect(t+i+1,n-11+o,1,1),e.fillRect(t-a-1,n+1+o,1,1),e.fillRect(t+a+1,n+1+o,1,1),e.fillStyle=gt.sand,o>=11*r&&e.fillRect(t-i,n-11+o,i*2+1,1),o>=11*(1-r)&&e.fillRect(t-a,n+1+o,a*2+1,1)}r>.02&&r<.98&&(e.fillStyle=gt.sand,e.fillRect(t,n-1,1,12))}let yh=null,gh=null,xh=[],Mh=[];function E5(e){return yh!==e&&(yh=e,xh=[{u0:0,fill:Ct(e,gt.night,7),a:.55},{u0:.66,fill:Ct(e,gt.time,6),a:.55},{u0:.86,fill:Ct(e,gt.glass,10),a:.6},{u0:.96,fill:gt.glass,a:.5}]),xh}function L5(e){return gh!==e&&(gh=e,Mh=[{u0:0,fill:Ct(e,gt.glass,2),a:.4},{u0:.62,fill:Ct(e,gt.time,3),a:.5},{u0:.82,fill:Ct(e,gt.time,5),a:.6},{u0:.93,fill:Ct(e,gt.glass,9),a:.7}]),Mh}function qr(e,t,n,r,o){const i=Math.cos(r)*Math.cos(o),a=Math.sin(r)*Math.cos(o),s=Math.sin(o);return sn(e+i*n,t+a*n,s*n),Xr(i,a,s)>0}const bh=[.42,44,.86,32,1.24,16];function vh(e,t,n,r,o,i,a,s){const l=o>0;e.fillStyle=l?gt.glassL:"#5a68c0",e.globalAlpha=s*(l?.55:.7);for(let h=0;h<12;h++){const c=h/12*tn-i*.35;for(let d=1;d<11;d++)qr(t,n,r,c,d/11*Math.PI/2)===l&&e.fillRect(bt(St.x)-1,bt(St.y)-1,2,2)}for(let h=0;h<3;h++){const c=bh[h*2],d=bh[h*2+1];for(let m=0;m<d;m++)qr(t,n,r,m/d*tn+i*.08,c)===l&&e.fillRect(bt(St.x)-1,bt(St.y)-1,2,2)}e.globalAlpha=s*.95,e.fillStyle=l?gt.gold:gt.time;for(let h=0;h<72;h++)qr(t,n,r,h/72*tn,0)===l&&e.fillRect(bt(St.x)-1,bt(St.y)-1,3,3);for(let h=0;h<12;h++){const c=h/12*tn-Math.PI/4;if(qr(t,n,r,c,0)!==l)continue;const d=St.x,m=St.y;qr(t,n,r,c,h%3?.13:.22),e.fillStyle=l?h%3?gt.face:gt.gold:gt.time,en(e,[d,m],[St.x,St.y],h%3?2:3)}const u=-i*1.4+.6;e.fillStyle=l?gt.gold:gt.brass,e.globalAlpha=s*(l?.95:.6);for(let h=0;h<22;h++)qr(t,n,r,u,h/22*Math.PI/2)===l&&e.fillRect(bt(St.x)-1,bt(St.y)-1,3,3);const f=a%1;if(f<.6){const h=f/.6*Math.PI/2*.98;e.globalAlpha=s*(1-f/.6)*(l?.9:.6),e.fillStyle=l?gt.glassL:gt.glass;const c=bt(56*Math.cos(h))+8;for(let d=0;d<c;d++)qr(t,n,r,d/c*tn,h)===l&&e.fillRect(bt(St.x)-1,bt(St.y)-1,3,2)}}j.camaleon_R=e=>{const t=e.x,n=e.y,r=e.radius||2.7,o=e.dur||3,i=pi(e,o),a=Array.from({length:26},(c,d)=>{const m=Math.random()*tn,p=Math.sqrt(Math.random())*r*.85,y=Math.sqrt(Math.max(0,r*r-p*p))*.85;return{x:t+Math.cos(m)*p,y:n+Math.sin(m)*p,z:g(.15,Math.max(.2,y)),ph:Math.random()*tn,s:d%4===0?4:2,col:[gt.glassL,gt.gold,gt.time,gt.teal][d%4]}}),s=Array.from({length:22},()=>{const c=Math.random()*tn,d=Math.sqrt(Math.random())*r*.8;return{x:t+Math.cos(c)*d,y:n+Math.sin(c)*d,z:g(.2,1.4)}}),l=Array.from({length:7},()=>{const c=new Float32Array(16);let d=g(-.4,2),m=g(.12,1.1);for(let p=0;p<8;p++)c[p*2]=d,c[p*2+1]=m,d+=g(-.16,.16),m=Math.min(1.45,Math.max(.05,m+g(-.2,.2)));return c}),u=c=>O5(c/.3),f=()=>S.T-i.t0,h=c=>Qa(c/.2);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=Mn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),[b,M]=C(t,n),v=Pa(r)*x,w=f();c.globalAlpha=.28*y,c.fillStyle=gt.night,U0(c,b,M,v,v*.5,3),c.globalAlpha=.95*y,c.fillStyle=gt.gold,Ia(c,b,M,v,96,3),c.fillStyle=gt.brass,Ia(c,b,M,v*.94,72,2),c.fillStyle=gt.face,Ia(c,b,M,v*.87,60,2);for(let O=0;O<12;O++){const F=O/12*tn-Math.PI/2,X=O%3===0,G=[b+Math.cos(F)*v*.66,M+Math.sin(F)*v*.33],V=[b+Math.cos(F)*v*.8,M+Math.sin(F)*v*.4];c.fillStyle=gt.ink,en(c,[G[0]+1,G[1]+1],[V[0]+1,V[1]+1],X?6:4),c.fillStyle=X?gt.gold:gt.face,en(c,G,V,X?5:3)}for(let O=0;O<36;O++){const F=O/36*tn-w*.6,X=v*(O%2?.5:.55);c.fillStyle=O%2?gt.brassD:gt.brass,c.fillRect(bt(b+Math.cos(F)*X)-2,bt(M+Math.sin(F)*X*.5)-1,5,3)}const _=-Math.PI/2-w*tn/1.5,A=-Math.PI/2-w*tn/12,R=[b+Math.cos(_)*v*.74,M+Math.sin(_)*v*.37],P=[b+Math.cos(A)*v*.45,M+Math.sin(A)*v*.225];c.fillStyle=gt.ink,en(c,[b+1,M+1],[R[0]+1,R[1]+1],6),en(c,[b+1,M+1],[P[0]+1,P[1]+1],8),c.fillStyle=gt.face,en(c,[b,M],R,4),c.fillStyle=gt.gold,en(c,[b,M],P,6),c.fillStyle="#e03a4a",c.fillRect(bt(b)-4,bt(M)-3,8,6),c.fillStyle=gt.gold,c.fillRect(bt(b)-2,bt(M)-2,4,4);const z=w%1;z<.3&&(c.globalAlpha=(1-z/.3)*y,c.fillStyle=gt.glassL,Ia(c,b,M,v*(.87+z*.4),48,3))}}),T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(c,d,m){const p=Mn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;sn(t,n);const M=St.x,v=St.y,w=Pa(x),_=tl(x,x);z0(c,M,v,w,_,!1,E5(c),y),vh(c,t,n,x,-1,b,f(),y),fo(i,t,n,r*1.15,9087231,.75*y)}}),T({type:"custom",layer:"top",dur:o+1,x:t,y:n,draw(c,d,m){const p=Mn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=r*u(f()),b=S.T;sn(t,n);const M=St.x,v=St.y,w=Pa(x),_=tl(x,x);z0(c,M,v,w,_,!0,L5(c),y),vh(c,t,n,x,1,b,f(),y);const A=Qa((.45-p)/.35);if(A>0)for(const R of l){const P=Math.max(1,bt(7*A));for(let z=0;z<P;z++){if(!qr(t,n,x,R[z*2],R[z*2+1]))continue;const O=St.x,F=St.y;qr(t,n,x,R[z*2+2],R[z*2+3]),c.globalAlpha=y,c.fillStyle=gt.ink,en(c,[O+1,F+1],[St.x+1,St.y+1],2),c.fillStyle=gt.glassL,en(c,[O,F],[St.x,St.y],2)}}}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(c,d,m){const p=Mn(i);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=u(f()),b=r*x,M=S.T,v=f();sn(t,n);const w=St.x,_=St.y,A=Pa(b),R=tl(b,b);for(let O=0;O<=80;O++){const F=Math.PI+O/80*Math.PI,X=((O/80-v*.45)%1+1)%1,G=Math.max(0,1-Math.min(X,1-X)*6);c.globalAlpha=y*(.55+.45*G),c.fillStyle=G>.3?gt.glassL:gt.glass,c.fillRect(bt(w+Math.cos(F)*A)-1,bt(_+Math.sin(F)*R)-1,3,3)}for(let O=0;O<14;O++){const F=Math.PI*(1.1+O*.022);c.globalAlpha=y*.85,c.fillStyle=gt.glassL,c.fillRect(bt(w+Math.cos(F)*A*.82)-2,bt(_+Math.sin(F)*R*.82)-2,4,4),O<6&&(c.globalAlpha=y*.5,c.fillRect(bt(w+Math.cos(F+.12)*A*.7)-1,bt(_+Math.sin(F+.12)*R*.7)-1,3,3))}c.globalAlpha=y*.7,ph(c,w+Math.cos(Math.PI*1.36)*A*.8,_+Math.sin(Math.PI*1.36)*R*.8,4+bt(2*Math.sin(M*4)));for(const O of a){const[F,X]=C(O.x,O.y,O.z*x),G=.5+.5*Math.sin(M*3+O.ph);c.globalAlpha=y*(.35+.65*G),c.fillStyle=O.col,ph(c,F,X,O.s+(G>.8?1:0))}c.fillStyle=gt.sand;for(const O of s){const[F,X]=C(O.x,O.y,O.z*x);c.globalAlpha=y*.8,c.fillRect(bt(F),bt(X),1,1)}const[P,z]=C(t,n,b+.35);if(c.globalAlpha=y,F5(c,P,z,Math.min(1,v/Math.max(.1,v+p))),v<.3){const O=v/.3;c.globalAlpha=1-O,c.fillStyle=gt.glassL,Ia(c,w,_,Pa(r)*(.3+O*.9),56,4)}if(p<.07&&!m.shatter){m.shatter=!0;for(let O=0;O<40;O++){const F=Math.random()*tn,X=Math.random()*1.3,G=t+Math.cos(F)*r*Math.cos(X),V=n+Math.sin(F)*r*Math.cos(X);E(G,V,r*Math.sin(X),Math.cos(F)*g(.8,2),Math.sin(F)*g(.8,2),g(0,1.5),g(.5,.9),O%3?gt.glass:gt.glassL,O%4?2:3,9,!0,.96)}}}}),ot(A2(e)?6:3)};De.camaleon=e=>{const t=e.x,n=e.y,r=g(-2.6,-.6),o=Math.random()*6|0;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=Math.min(1,a*6);i.globalAlpha=a<.5?1:(1-a)*2;const f=r-(1-u)*1.5,h=r+2.2-(1-u)*1.2;i.fillStyle=gt.ink,en(i,[s+1,l+1],[s+Math.cos(f)*20+1,l+Math.sin(f)*20+1],4),i.fillStyle=gt.face,en(i,[s,l],[s+Math.cos(f)*20,l+Math.sin(f)*20],3),i.fillStyle=oo[o],en(i,[s,l],[s+Math.cos(h)*12,l+Math.sin(h)*12],4),i.fillStyle=gt.gold;for(let c=0;c<4;c++){const d=c/4*tn+.4,m=14+a*10;i.fillRect(bt(s+Math.cos(d)*m)-1,bt(l+Math.sin(d)*m*.8)-1,3,3)}}});for(let i=0;i<5;i++)E(t,n,.5,g(-1.3,1.3),g(-1.3,1.3),g(.8,2),.3,oo[(o+i)%6],2,6,!0)};let _e=0,Ae=0;function qn(e,t,n=0){_e=(e-t)*$.HW+$.OX,Ae=(e+t)*$.HH-n*$.ZK}function Nn(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const T2=e=>e<0?0:e>1?1:e,Le=["#fffbe0","#ffd84a","#ff9a30","#e04818","#8a1c0c"],k5="#3a2420",Qf="#2a1410",Zf=e=>e>=5?k5:Le[e<0?0:e|0];function Il(e,t,n,r){const o=r*.5,i=Math.max(1,Math.round(o/3));for(let a=0;a<i;a++){const s=(a+.5)/i*2-1,l=r*Math.sqrt(1-s*s);e.fillRect(Math.round(t-l/2),Math.round(n-o/2+a*3),Math.max(1,Math.round(l)),3)}}j.dragon_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||3.4,a=e.angle||.85,s=Math.atan2(o,r),l=6,u=6,f=new Float32Array(l*(u+1)*2);for(let c=0;c<l;c++){let d=s+(c/(l-1)-.5)*a*1.5;const m=i*g(.7,1);for(let p=0;p<=u;p++){const y=.35+(m-.35)*p/u;d+=g(-.13,.13);const x=(c*(u+1)+p)*2;f[x]=t+Math.cos(d)*y,f[x+1]=n+Math.sin(d)*y}}const h=(c,d,m)=>{const p=T2(d/.25)*u;for(let y=0;y<l;y++)for(let x=0;x<u&&x<p;x++){const b=Math.min(1,p-x),M=(y*(u+1)+x)*2;qn(f[M],f[M+1]);const v=_e,w=Ae;qn(f[M+2],f[M+3]);const _=v+(_e-v)*b,A=w+(Ae-w)*b,R=Math.max(1,Math.round(Math.hypot(_-v,A-w)/3)),P=m*(1-x/u*.5);for(let z=0;z<=R;z++)Nn(c,v+(_-v)*z/R,w+(A-w)*z/R,P)}};T({type:"custom",layer:"ground",dur:1.8,x:t,y:n,draw(c,d){c.globalAlpha=d<.6?.85:(1-d)/.4*.85,c.fillStyle=Qf,h(c,d*1.8,6)}}),T({type:"custom",layer:"ground",add:!0,dur:1.4,x:t,y:n,draw(c,d){const m=d*1.4;c.globalAlpha=1-d*d,c.fillStyle=Zf(m/.3),h(c,m,3)}}),T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(c,d){for(let m=0;m<4;m++){const p=d*1.5-m*.13;if(p<=0||p>=1)continue;const y=.4+(i-.4)*p,x=a*(.45+.55*p),b=5+Math.round(y*3);c.globalAlpha=1-p,c.fillStyle=Le[Math.min(3,m+(p*2|0))];for(let M=0;M<=b;M++){const v=s+(M/b-.5)*2*x,w=y*(.9+.1*Math.sin(M*2.3+m*1.7));qn(t+Math.cos(v)*w,n+Math.sin(v)*w,.35+.12*Math.sin(M*1.3+d*18)),Nn(c,_e,Ae,8-m-p*4)}}}});for(let c=0;c<32;c++){const d=s+g(-a,a)*.9,m=g(.3,1)*i*2.4;E(t+r*.45,n+o*.45,.45,Math.cos(d)*m,Math.sin(d)*m,g(1.2,3),g(.7,1.05),Le[Math.random()*3|0],Math.random()<.4?5:4,7,!0,.96)}for(let c=0;c<14;c++){const d=s+g(-a,a),m=g(.6,1)*i*3.2;E(t+r*.45,n+o*.45,.5,Math.cos(d)*m,Math.sin(d)*m,g(.4,1.4),.35,Le[0],2,1,!0,.98)}ot(3)};const U5=[".OOO.","OhrrO","OrrrO","OrrdO",".OdO.","..O.."],D0=[],R2=[],C2=[];U5.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r="Ohrd".indexOf(e[n]);r>=0&&(D0.push(n-2),R2.push(t),C2.push(r))}});const P2=["#4a1008","#ffb040","#c8301a","#8a1c0c"];function D5(e,t,n,r,o){for(let i=0;i<4;i++){e.fillStyle=o?i===0?"#ffd84a":Le[0]:P2[i];for(let a=0;a<D0.length;a++)C2[a]===i&&e.fillRect(Math.round(t+D0[a]*r),Math.round(n+R2[a]*r),r,r)}}j.dragon_W=e=>{const t=e.dur||3,n=8,r=6,o=(i,a)=>{for(let s=0;s<14;s++)E(i+g(-.3,.3),a+g(-.3,.3),g(.2,.8),g(-1.8,1.8),g(-1.8,1.8),g(1.5,3),g(.5,.8),P2[2+(s&1)],4,9,!1,.95)};T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,draw(i,a,s){const l=ht(s.uid),u=a*t;if(!l||l.dead||S.mode!=="guest"&&u>.15&&!(l.shield>0)||a>.97){s.broke||(s.broke=!0,o(s.lx,s.ly),s.dur=s.t);return}s.lx=l.x,s.ly=l.y;const h=l.scale||1,c=h>1.2?4:3;for(let d=0;d<2;d++)for(let m=0;m<n+r;m++){const p=m<n?0:1,b=(p?m-n:m)/(p?r:n)*Math.PI*2+(p?-u*1.1+.3:u*.8),M=Math.sin(b)>0;if(d===0===M)continue;const v=m*.035,w=T2((u-v)/.08);if(w<=0)continue;const _=(p?22:30)*h,A=(p?8:11)*h;qn(l.x,l.y,p?.62:.22),i.globalAlpha=M?1:.4,D5(i,_e+Math.cos(b)*_,Ae+Math.sin(b)*A-10*(1-w)-6*h,c,u-v<.12)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.28,x:e.x,y:e.y,draw(i,a){qn(e.x,e.y,.55);const s=6+a*26;i.globalAlpha=1-a,i.fillStyle=Le[1];for(let l=2;l<s;l+=3)Nn(i,_e+l,Ae+l*.7,4),Nn(i,_e-l,Ae+l*.7,4),Nn(i,_e+l,Ae-l*.7,4),Nn(i,_e-l,Ae-l*.7,4);i.fillStyle=Le[0],Nn(i,_e,Ae,8*(1-a)+2)}});for(let i=0;i<10;i++){const a=i/10*6.28;E(e.x+Math.cos(a)*.4,e.y+Math.sin(a)*.4,.05,0,0,g(.6,1.2),g(.5,.8),Le[1+i%3],2,-1,!0,.9)}};j.dragon_E=e=>{const t=e.x,n=e.y,r=e.dur||.3,o=e.ex??t+(e.ux||0)*(e.range||0),i=e.ey??n+(e.uy||0)*(e.range||0),a=o-t,s=i-n,l=Math.hypot(a,s)||.01,u=a/l,f=s/l,h=Math.min(16,Math.max(4,Math.round(l/.28))),c=new Float32Array(h*4);for(let m=0;m<h;m++){const p=(m+.5)/h,y=g(-.16,.16);c[m*4]=t+a*p-f*y,c[m*4+1]=n+s*p+u*y,c[m*4+2]=g(18,30),c[m*4+3]=p*r}const d=r+1.9;T({type:"custom",layer:"ground",dur:d,x:t,y:n,draw(m,p){const y=p*d;for(let x=0;x<h;x++){const b=y-c[x*4+3];if(b<0)continue;const M=b>1.5?Math.max(0,1-(b-1.5)/.4):1;if(M<=0)continue;qn(c[x*4],c[x*4+1]);const v=c[x*4+2];m.globalAlpha=M*.8,m.fillStyle=Qf,Il(m,_e,Ae+1,v+6);const w=b/.3|0;m.globalAlpha=M,m.fillStyle=Zf(w),Il(m,_e,Ae,v*(w<5?.8:.6)),w<4&&W(x*7+(y*12|0))>.72&&(m.fillStyle=Le[0],m.fillRect(Math.round(_e+(W(x*3+(y*12|0))-.5)*v*.5),Math.round(Ae-2),2,2))}m.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:r+.12,x:t,y:n,uid:e.uid,n:0,end:!1,draw(m,p,y){const x=ht(y.uid),b=x?x.x:o,M=x?x.y:i;qn(b,M,.4);const v=_e,w=Ae;qn(b+u,M+f,.4);let _=_e-v,A=Ae-w;const R=Math.hypot(_,A)||1;_/=R,A/=R;const P=1-p*.6;for(let z=0;z<9;z++){const O=(10+z*5*(.8+Math.random()*.4))*P;m.globalAlpha=1-z/10,m.fillStyle=Le[Math.min(4,z>>1)],Nn(m,v-_*O+(Math.random()-.5)*3,w-A*O+(Math.random()-.5)*3,(10-z)*P)}if(y.n<22&&p<.9){for(let z=0;z<2;z++){const O=g(-2.5,2.5);E(b,M,.35,-u*2-f*O,-f*2+u*O,g(.5,1.6),.5,Le[1+(Math.random()*3|0)],3,4,!0)}y.n+=2}if(!y.end&&p>.85){y.end=!0;for(let z=0;z<8;z++){const O=z/8*6.28;E(b,M,.1,Math.cos(O)*2.5+u,Math.sin(O)*2.5+f,.4,.6,z&1?"#5a4a48":"#3a2e2c",5,0,!1,.9)}}}});for(let m=0;m<8;m++){const p=m/8*6.28;E(t,n,.1,Math.cos(p)*3,Math.sin(p)*3,.3,.5,m&1?"#6a5a56":"#40322e",5,0,!1,.9)}ot(4)};const el=["#.................#","##.....#...#.....##","###....#####....###",".###...#o#o#...###.","..####..###..####..","...#####ooo#####...","....####ooo####....",".....###ooo###.....",".......#ooo#.......","........###........",".......#.#.#.......","..........#........"],nl=[],I2=[],z2=[];el.forEach((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r===".")continue;const o=(i,a)=>a<0||a>=el.length||i<0||i>=e.length||el[a][i]===".";nl.push(n-9),I2.push(t),z2.push(r==="o"?2:o(n-1,t)||o(n+1,t)||o(n,t-1)||o(n,t+1)?1:0)}});const X5=["#ff7a20","#ffd84a","#fffbe0"];j.dragon_R=e=>{const t=e.x,n=e.y,r=e.radius||3.6,o=r*.82,i=8,a=Math.random()*6.28,s=new Float32Array(i),l=new Float32Array(i);for(let u=0;u<i;u++){const f=a+u/i*6.28;s[u]=t+Math.cos(f)*o,l[u]=n+Math.sin(f)*o}T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(u,f){const h=f*2.6,c=f>.7?(1-f)/.3:1;for(let d=0;d<i;d++){const m=h-d*.05;m<0||(qn(s[d],l[d]),u.globalAlpha=c*.85,u.fillStyle=Qf,Il(u,_e,Ae+1,46),u.globalAlpha=c,u.fillStyle=Zf(m/.45),Il(u,_e,Ae,26))}u.globalAlpha=1}}),T({type:"custom",layer:"ground",add:!0,dur:.4,x:t,y:n,draw(u,f){const h=r*(1-(1-f)*(1-f)),c=36;u.globalAlpha=1-f;for(let d=0;d<c;d++){const m=d/c*6.28;qn(t+Math.cos(m)*h,n+Math.sin(m)*h),u.fillStyle=Le[d&1],Nn(u,_e,Ae,7*(1-f)+2)}}}),T({type:"custom",layer:"top",add:!0,dur:1.15,x:t,y:n,fired:0,draw(u,f,h){const c=f*1.15;for(let d=0;d<i;d++){const m=c-d*.05;if(m<0)continue;if(!(h.fired&1<<d)){h.fired|=1<<d;for(let v=0;v<5;v++)E(s[d],l[d],.3,g(-.8,.8)+(s[d]-t)*.4,g(-.8,.8)+(l[d]-n)*.4,g(3,5),g(.6,.9),Le[v%4],3,6,!0,.97)}const p=m<.12?m/.12:m<.4?1:Math.max(0,1-(m-.4)/.35);if(p<=0)continue;const y=95*p;qn(s[d],l[d]);const x=_e,b=Ae;u.globalAlpha=Math.min(1,p*1.5);const M=c*24|0;for(let v=0;v<y;v+=4){const w=v/y,_=16*(1-w*.75)+(W(d*31+v+M)-.5)*4,A=(W(d*17+v*3+M)-.5)*7*w;if(u.fillStyle=w<.25?Le[1]:w<.6?Le[2]:Le[3],u.fillRect(Math.round(x+A-_/2),Math.round(b-v-4),Math.round(_),4),w<.7){u.fillStyle=Le[0];const R=_*.4;u.fillRect(Math.round(x+A-R/2),Math.round(b-v-4),Math.max(2,Math.round(R)),4)}}}}}),T({type:"custom",layer:"top",add:!0,dur:1.2,delay:.12,x:t,y:n,draw(u,f){const h=f*1.2,c=.8+1.3*(1-(1-f)*(1-f)),d=6;u.globalAlpha=f<.15?f/.15:f>.55?Math.max(0,(1-f)/.45):1,qn(t,n,c);const m=_e,p=Ae-el.length*d*.5;for(let y=0;y<3;y++){u.fillStyle=X5[y];for(let x=0;x<nl.length;x++){if(z2[x]!==y)continue;const b=Math.abs(nl[x]),M=b>=4?Math.round(Math.sin(h*14)*(b-3)*.45):0;u.fillRect(Math.round(m+nl[x]*d-d/2),Math.round(p+(I2[x]+M)*d),d,d)}}}}),ot(9)};De.dragon=e=>{const t=e.x,n=e.y,r=!!e.big;for(let o=0;o<(r?8:5);o++)E(t,n,.45,g(-1.3,1.3),g(-1.3,1.3),g(1.6,3.2),g(.3,.5),o<3?Le[0]:Le[1],2,10,!0,.97);E(t,n,.45,g(-.5,.5),g(-.5,.5),1,.45,Le[2],3,8,!0,.95),T({type:"custom",layer:"top",add:!0,dur:.2,x:t,y:n,draw(o,i){qn(t,n,.45);const a=4+i*(r?16:11),s=Math.max(2,Math.round(a/3));o.globalAlpha=1-i,o.fillStyle=i<.4?Le[1]:Le[2];for(let l=0;l<s;l++){const u=l/s,f=a*(1-u),h=a*u*.7;Nn(o,_e+f,Ae+h,3),Nn(o,_e-h/.7,Ae+f*.7,3),Nn(o,_e-f,Ae-h,3),Nn(o,_e+h/.7,Ae-f*.7,3)}i<.3&&(o.fillStyle=Le[0],Nn(o,_e,Ae,6))}})};const mn="#fff2d6",Fn="#e2b878",hi="#9a6232",uo="#4e2e16",va="#e8643a",ma="#ffcc66",zl="#a07a48",Be=Math.round,Cr=Math.PI*2;function Ge(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Be(t),Be(n),r,o)}function Tr(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Be(t+(r-t)*l/s-i/2),Be(n+(o-n)*l/s-i/2),i,i)}function pa(e,t,n,r,o,i=va){const a=Math.max(3,Math.ceil(Math.hypot(r-t,o-n)/1.5));for(let s=0;s<=a;s++){const l=s/a,u=l<.35?3:l<.8?2:1;e.fillStyle=l<.3?hi:l>.82?i:mn,e.fillRect(Be(t+(r-t)*l-u/2),Be(n+(o-n)*l-u/2),u,u)}}function Hu(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=Be(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(Be(t-a),Be(n+i),a*2,2)}}function O2(e,t){const n=(e-t)*$.HW,r=(e+t)*$.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const F2=e=>{const t=ht(e);return t&&!t.dead&&!He(t)?t:null},G5=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},E2=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Xe.erizo_A=(e,t,n,r,o)=>{e.translate(Be(n),Be(r)),e.rotate(o),Ge(e,-15,-2,16,4,uo),Ge(e,-14,-1,14,2,Fn),Ge(e,-9,-1,3,2,mn),Ge(e,-4,-1,3,2,mn),Ge(e,0,-2,3,4,uo),Ge(e,3,-1,3,2,va),Ge(e,6,0,2,1,ma),Ge(e,-17,-4,5,2,mn),Ge(e,-17,2,5,2,mn),Math.random()<.3&&E(t.x,t.y,t.z||.45,0,0,-.3,.25,Fn,2,0,!1)};De.erizo=e=>{const t=Array.from({length:e.big?4:3},()=>({a:g(0,Cr),l:g(8,12)}));T({type:"custom",layer:"top",dur:.4,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,.45);n.globalAlpha=Math.min(1,(1-r)*2.5);for(const a of t)pa(n,o+Math.cos(a.a)*a.l,i+Math.sin(a.a)*a.l*.8,o,i)}});for(let n=0;n<5;n++)E(e.x,e.y,.45,g(-2,2),g(-2,2),g(.5,2),.3,n%2?Fn:mn,2,6,!1)};Xe.erizo_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;e.translate(Be(n),Be(r)),e.rotate(o),Ge(e,-31,-3,32,6,uo);for(let u=0;u<30;u+=6)Ge(e,-30+u,-2,3,4,mn),Ge(e,-30+u+3,-2,3,4,hi);Ge(e,0,-3,4,6,uo),Ge(e,4,-2,4,4,va),Ge(e,8,-1,3,2,ma);for(let u=0;u<3;u++)Ge(e,-36+u*3,-6+u,4,2,mn),Ge(e,-36+u*3,4-u,4,2,mn);Mt(!0);const l=Bt();l.globalAlpha=.55,l.fillStyle="#ffe2a8",l.fillRect(-64,-7,28,1),l.fillRect(-74,6,36,1),l.fillRect(-56,0,20,1),l.globalAlpha=1,l.fillStyle=ma;for(let u=0;u<5;u++)l.fillRect(-6-u*6,Be(Math.sin(i*38+u*1.3)*5)-1,2,2);Mt(!1),Math.random()<.5&&E(t.x,t.y,s,g(-.4,.4),g(-.4,.4),.3,.35,Math.random()<.5?mn:Fn,2,3,!1)};j.erizo_Q=e=>{if(e.type!=="cast_arrow")return;const t=e.ux||0,n=e.uy||0,[r,o]=O2(t,n),i=-o,a=r;T({type:"custom",layer:"top",dur:.32,x:e.x,y:e.y,draw(l,u){const[f,h]=C(e.x+t*.35,e.y+n*.35,.45),c=u*.32,d=-9*Math.cos(c*55)*Math.exp(-c*14),m=f+r*d,p=h+o*d,y=f+i*15-r*5,x=h+a*15-o*5,b=f-i*15-r*5,M=h-a*15-o*5;l.globalAlpha=1-u,Tr(l,f+r*3,h+o*3,y,x,3,hi),Tr(l,f+r*3,h+o*3,b,M,3,hi),Tr(l,y,x,m,p,2,mn),Tr(l,b,M,m,p,2,mn)}}),T({type:"custom",layer:"top",add:!0,dur:.14,x:e.x,y:e.y,draw(l,u){const[f,h]=C(e.x+t*.5,e.y+n*.5,.45),c=24*(1-u);for(const d of[0,.45,-.45]){const m=Math.cos(d),p=Math.sin(d),y=r*m-o*p,x=r*p+o*m,b=d?c*.55:c;Tr(l,f,h,f+y*b,h+x*b,3,ma),Tr(l,f,h,f+y*b*.5,h+x*b*.5,1,"#ffffff")}}});for(let l=0;l<6;l++)E(e.x-t*.2,e.y-n*.2,.4,-t*g(1,2.5)+g(-.5,.5),-n*g(1,2.5)+g(-.5,.5),g(.3,1),.45,l%2?Fn:zl,3,2,!1,.9);const s=Math.atan2(n,t);for(let l=0;l<7;l++){const u=s+g(-.25,.25),f=g(5,9);E(e.x+t*.5,e.y+n*.5,.45,Math.cos(u)*f,Math.sin(u)*f,g(0,.6),.22,l%2?ma:mn,2,0,!0,.86)}ot(1.5)};j.erizo_W=e=>{const t=e.dur||2.5,n=18,r=o=>(i,a,s)=>{const l=F2(e.uid);if(!l)return;const u=a*s.dur,f=u<.2?E2(u/.2):u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=C(l.x,l.y,.4);for(let d=0;d<n;d++){const m=d/n*Cr+.17,p=Math.sin(m);if(p>=0!==o)continue;const y=u<t?Math.sin(S.T*45+d*2.1)*1.3:0,x=(11+d%3*3)*f,b=h+Math.cos(m)*16,M=c+p*12,v=b+Math.cos(m)*x+y,w=M+p*x*.75-x*.3;pa(i,b,M,v,w,(S.T*7+d*.37)%1<.12?"#ffffff":va)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),T({type:"custom",layer:"ground",dur:.35,x:e.x,y:e.y,draw(o,i){const a=.35+i*.75;o.globalAlpha=1-i;for(let s=0;s<20;s++){const l=s/20*Cr,[u,f]=C(e.x+Math.cos(l)*a,e.y+Math.sin(l)*a),[h,c]=C(e.x+Math.cos(l)*(a+.22),e.y+Math.sin(l)*(a+.22));Tr(o,u,f,h,c,2,s%2?Fn:hi)}}});for(let o=0;o<14;o++){const i=o/14*Cr,a=g(2,3.5);E(e.x,e.y,.45,Math.cos(i)*a,Math.sin(i)*a,g(1.5,3),.5,o%3?mn:Fn,2,8,!1,.92)}ot(2)};j.erizo_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.25),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,[u,f]=O2(o,i),h=u>=0?1:-1;T({type:"custom",layer:"top",dur:r+.12,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,x/r);let M=e.x+o*b,v=e.y+i*b;const w=ht(e.uid);if(w){if(w.dead||He(w))return;M=w.x,v=w.y}const[_,A]=C(M,v,.32),R=16,P=x*36*h;m.globalAlpha=x>r?Math.max(0,1-(x-r)/.12):1;for(let z=0;z<3;z++){const O=(z-1)*9;Tr(m,_-u*(R+4)-f*O,A-f*(R+4)+u*O,_-u*(R+18+z*5)-f*O,A-f*(R+18+z*5)+u*O,2,Fn)}Hu(m,_,A,R+1,uo),Hu(m,_,A,R-1,hi),Hu(m,_-4,A-4,R-9,Fn);for(let z=0;z<10;z++){const O=P+z*Cr/10,F=Math.cos(O),X=Math.sin(O);pa(m,_+F*(R-3),A+X*(R-3),_+F*(R+10),A+X*(R+10))}}});const c=Math.max(4,Math.min(10,Be(a*2.2))),d=Array.from({length:c},(m,p)=>({k:(p+.5)/c,o:g(-.28,.28),lean:g(-6,6),h:g(9,14)}));T({type:"custom",layer:"ground",dur:r+1.8,x:e.x,y:e.y,draw(m,p,y){const x=p*y.dur,b=Math.min(1,(y.dur-x)/.5);for(const M of d){if(x<M.k*r)continue;const v=Math.min(1,(x-M.k*r)/.08),[w,_]=C(e.x+o*M.k+s*M.o,e.y+i*M.k+l*M.o);m.globalAlpha=b*.45,Ge(m,w-4,_-1,8,3,uo),m.globalAlpha=b,pa(m,w+M.lean*v,_-M.h*v,w,_)}}});for(let m=0;m<12;m++){const p=Math.random();E(e.x+o*p+g(-.2,.2),e.y+i*p+g(-.2,.2),.1,g(-.6,.6),g(-.6,.6),g(.5,1.4),g(.4,.7),m%2?Fn:zl,3,4,!1,.9)}for(let m=0;m<6;m++){const p=m%2?1:-1;E(e.x,e.y,.35,s*p*g(2,4),l*p*g(2,4),g(1.5,3),.45,mn,2,8,!1,.92)}ot(2)};j.erizo_R=e=>{if(e.type!=="cast_arrows")return;const t=e.radius||3,n=G5(e),r=n&&n.dur||3,o=.16,i=36,a=Array.from({length:i},(c,d)=>{const m=Math.random()*Cr,p=Math.sqrt(Math.random())*t*.95;return{x:e.x+Math.cos(m)*p,y:e.y+Math.sin(m)*p,t0:.12+d/i*(r-.5)+g(0,.08),lean:g(-7,7),h:g(10,15),hit:!1}});T({type:"custom",layer:"ground",dur:r+.5,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur,y=Math.min(1,(m.dur-p)/.5),x=t*(p<.3?1.5-.5*(p/.3):1);c.globalAlpha=.85*y;for(let b=0;b<8;b++){const M=b*Cr/8+p*.4;for(const v of[-.09,.09]){const[w,_]=C(e.x+Math.cos(M+v)*x,e.y+Math.sin(M+v)*x),[A,R]=C(e.x+Math.cos(M)*(x-.35),e.y+Math.sin(M)*(x-.35));Tr(c,w,_,A,R,3,va)}}c.globalAlpha=.45*y;for(let b=0;b<48;b++){const M=b/48*Cr-p*.2,[v,w]=C(e.x+Math.cos(M)*t,e.y+Math.sin(M)*t);Ge(c,v-1,w-1,2,2,Fn)}for(const b of a){if(p<b.t0+o)continue;const[M,v]=C(b.x,b.y);c.globalAlpha=.4*y,Ge(c,M-4,v-1,8,3,uo),c.globalAlpha=y,pa(c,M+b.lean,v-b.h,M,v)}}}),T({type:"custom",layer:"top",dur:r+.2,x:e.x,y:e.y,draw(c,d,m){const p=d*m.dur;for(const y of a){const x=(p-y.t0)/o;if(x<0)continue;if(x>=1){y.hit||(y.hit=!0,E(y.x,y.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,Math.random()<.5?Fn:zl,2,7,!1));continue}const[b,M]=C(y.x,y.y,3.6*(1-x)),v=y.lean*1.4;c.globalAlpha=.35,Tr(c,b+v*2.4,M-52,b+v,M-22,1,mn),c.globalAlpha=1,pa(c,b+v,M-22,b,M)}}});const s=pi(e,r),l=S.T,u=Array.from({length:16},(c,d)=>({a:d/16*Cr+g(-.07,.07),h:d%2?g(1.2,1.35):g(1.6,1.8),tip:g(.84,.9),w:d%2?5:7,ph:Math.random()*Cr,dl:d/16*.3})).sort((c,d)=>Math.cos(c.a)+Math.sin(c.a)-(Math.cos(d.a)+Math.sin(d.a))),f=(c,d,m)=>{const p=Mn(s);if(p<=0){d.t=d.dur+1;return}const y=S.T-l,x=Math.min(1,p/.3);for(const b of u){const M=Math.cos(b.a),v=Math.sin(b.a);if(Xr(M,v,0)>0!==m)continue;const w=E2((y-b.dl)/.3)*x;if(w<=.02)continue;const _=Math.sin(S.T*1.8+b.ph)*.04,A=e.x+M*t,R=e.y+v*t;sn(A,R);const P=St.x,z=St.y;sn(e.x+Math.cos(b.a+_)*t*(1-(1-b.tip)*w),e.y+Math.sin(b.a+_)*t*(1-(1-b.tip)*w),b.h*w),B5(c,P,z,St.x,St.y,b.w,m?1:.8),c.globalAlpha=m?1:.85,Ge(c,P-6,z-1,12,3,zl),Ge(c,P-3,z-2,6,2,Fn)}c.globalAlpha=1};T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!1),s.rem>0&&fo(s,e.x,e.y,t*.9,16764006,.3)}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(c,d,m){f(c,m,!0)}});const h=F2(e.uid);if(h)for(let c=0;c<10;c++)E(h.x,h.y,.6,g(-.4,.4),g(-.4,.4),g(7,10),.45,c%2?mn:Fn,2,0,!1,1);ot(2)};function B5(e,t,n,r,o,i,a){const s=Math.max(4,Math.ceil(Math.hypot(r-t,o-n)/3));for(let l=0;l<=s;l++){const u=l/s,f=Math.max(1,Be(i*Math.pow(1-u,.75))),h=Be(t+(r-t)*u),c=Be(n+(o-n)*u);e.globalAlpha=a,e.fillStyle=uo,e.fillRect(h-f-1,c-2,f*2+2,4),e.fillStyle=u<.28?hi:u>.84?va:mn,e.fillRect(h-f,c-2,f*2,4),f>1&&u<=.84&&(e.fillStyle=u<.28?uo:Fn,e.fillRect(h+Be(f*.3),c-2,f-Be(f*.3),4))}e.fillStyle=ma,e.fillRect(Be(r)-1,Be(o)-1,2,2)}let le=0,ue=0;function Je(e,t,n=0){le=(e-t)*$.HW+$.OX,ue=(e+t)*$.HH-n*$.ZK}function ir(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const jo=e=>e<0?0:e>1?1:e,X0=e=>1-(1-e)*(1-e),te=["#fbf0ff","#e2b8ff","#b06aff","#7a2ed0","#4a1888"],vn=["#ffe0f4","#ff9ad8","#e060b0"],Uo=["#ffffff","#c8f4ff","#7ad8ff","#3a98d8"],We=["#ffffff","#fff2a0","#ffd24a"];function Jf(e,t,n,r){const o=[],i=[],a=[],s=[],l=e.length,u=(f,h)=>h<0||h>=l||f<0||f>=e[h].length||t.indexOf(e[h][f])<0;return e.forEach((f,h)=>{for(let c=0;c<f.length;c++){const d=t.indexOf(f[c]);d<0||(o.push(c-n),i.push(h-r),a.push(d),s.push(u(c-1,h)||u(c+1,h)||u(c,h-1)||u(c,h+1)?1:0))}}),{X:Float32Array.from(o),Y:Float32Array.from(i),K:Uint8Array.from(a),B:Uint8Array.from(s),n:o.length,h:l}}const Wu=Jf(["..o..",".ooo.","ooooo",".ooo.",".o.o."],"o",2,2);function L2(e,t,n,r){for(let o=0;o<Wu.n;o++)e.fillRect(Math.round(t+Wu.X[o]*r-r/2),Math.round(n+Wu.Y[o]*r-r/2),r,r)}function wo(e,t,n,r){ir(e,t,n,3);for(let o=2;o<=r;o+=2)ir(e,t+o,n+o,2),ir(e,t-o,n+o,2),ir(e,t+o,n-o,2),ir(e,t-o,n-o,2)}function Ol(e,t,n,r,o,i,a){for(let s=0;s<4;s++){const l=o+s*Math.PI/2,u=l+Math.PI/2,f=Math.cos(l)*r,h=Math.sin(l)*r*i,c=Math.cos(u)*r,d=Math.sin(u)*r*i,m=Math.max(2,Math.round(r*1.41/(a+1)));for(let p=0;p<m;p++){const y=p/m;ir(e,t+f+(c-f)*y,n+h+(d-h)*y,a)}}}function Sh(e,t,n,r){for(let o=-r;o<r;o+=2){const i=2*Math.sqrt(Math.max(0,r*r-(o+1)*(o+1)));e.fillRect(Math.round(t-i/2),Math.round(n+o),Math.round(i),2)}}const za=new Map;function k2(e,t,n=!1){if(e.id==null)return;let r=za.get(e.id);if(!r){za.size>200&&za.clear(),r={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1,crit:n},za.set(e.id,r);const o=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(i,a,s){if(s.fin)return;const l=S.game;if(l){for(const u of l.projs)if(u.id===o)return;s.fin=!0,s.dur=s.t,za.delete(o),t(r)}}})}r.x=e.x,r.y=e.y,r.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(r.tgt=!0,r.tx=e.homing.x,r.ty=e.homing.y)}j.gato_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"top",add:!0,dur:.32,x:t,y:n,draw(r,o){Je(t,n,.45);const i=16*(1-o*.7);r.globalAlpha=1-o*.6,r.fillStyle=te[1],Ol(r,le,ue,i,o*Math.PI,.75,3),r.fillStyle=vn[1],Ol(r,le,ue,i*.5,-o*Math.PI*1.5,.75,2),r.fillStyle=te[0],ir(r,le,ue,4)}});for(let r=0;r<6;r++)E(t,n,.45,g(-1,1),g(-1,1),g(.3,1),.4,r&1?vn[1]:te[1],2,0,!0)};Xe.gato_Q=(e,t,n,r,o,i)=>{k2(t,N5);const a=-Math.cos(o),s=-Math.sin(o),l=-s,u=a;for(let c=1;c<16;c++){const d=8+c*3.2,m=Math.sin(c*.7-i*22)*(2+c*.35);e.globalAlpha=1-c/16,e.fillStyle=c&1?vn[1]:vn[2],e.fillRect(Math.round(n+a*d+l*m),Math.round(r+s*d+u*m),2,2)}e.globalAlpha=1,Mt(!0);const f=Bt();f.fillStyle=te[3],f.globalAlpha=.16,Sh(f,n,r,20),f.globalAlpha=.22,Sh(f,n,r,13),f.globalAlpha=1,Mt(!1);const h=i*14;for(let c=-3;c<3;c++)for(let d=-3;d<3;d++){const m=(d+.5)*(d+.5)+(c+.5)*(c+.5);if(m>9)continue;let p;m>6?p=te[4]:d===-2&&c===-2?p=te[0]:p=((d*.8+c+h)%4+4)%4<1.3?te[1]:te[2],e.fillStyle=p,e.fillRect(Math.round(n+d*3),Math.round(r+c*3),3,3)}};function N5(e){const t=e.x,n=e.y;if(e.life<.07){for(let o=0;o<6;o++)E(t,n,.45,g(-.6,.6),g(-.6,.6),g(0,.6),.4,o&1?vn[1]:te[2],2,1,!0);return}const r=Math.random()*6.28;T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(o,i){Je(t,n,.45);const a=Math.round(14*jo(i/.4));o.globalAlpha=1-i*i;for(let s=0;s<5;s++){const l=r+s/5*6.28;for(let u=0;u<a;u++){const f=4+u*3,h=l+u*.3;o.fillStyle=u+s&1?vn[1]:te[1],o.fillRect(Math.round(le+Math.cos(h)*f),Math.round(ue+Math.sin(h)*f*.7),2,2)}}i<.25&&(o.fillStyle=te[0],ir(o,le,ue,10*(1-i*3)))}});for(let o=0;o<10;o++)E(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(.5,1.5),g(.4,.6),o&1?vn[0]:te[1],2,2,!0);ot(2)}const Nr=Jf(["..oo.oo..","..oo.oo..","oo.....oo","oo.ooo.oo","..ooooo..",".ooooooo.",".ooooooo.","..ooooo.."],"o",4,3.5);j.gato_W=e=>{const t=e.x,n=e.y,r=e.radius||2.8,o=[],i=(l,u,f,h)=>{for(let c=0;c<l;c++){const d=h+c/l*6.28,m=Math.cos(d),p=Math.sin(d),y=Math.atan2(m+p,m-p),x=y+Math.PI/2,b=Math.cos(x),M=Math.sin(x),v=new Float32Array(Nr.n*2);for(let w=0;w<Nr.n;w++)v[w*2]=Nr.X[w]*b-Nr.Y[w]*M,v[w*2+1]=Nr.X[w]*M+Nr.Y[w]*b;o.push({x:t+m*u,y:n+p*u,t:f+c*.014,c:v})}},a=Math.random()*6.28;i(5,r*.38,.03,a),i(9,r*.78,.14,a+.35),T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(l,u){const f=u*1.6,h=u>.55?(1-u)/.45:1;for(const c of o){const d=f-c.t;if(d<0)continue;const m=d<.08?1.4-d/.08*.4:1,p=3*m,y=Math.max(2,Math.round(p*.6)),x=Math.round(p);Je(c.x,c.y),l.globalAlpha=h*.9;for(let b=0;b<3;b++){l.fillStyle=b===0?Uo[3]:b===1?Uo[1]:Uo[0];for(let M=0;M<Nr.n;M++){const v=Nr.B[M]===1,w=Nr.Y[M]<0;(b===0?!v:b===1?v||w:v||!w)||l.fillRect(Math.round(le+c.c[M*2]*p-x/2),Math.round(ue+c.c[M*2+1]*p*.5-y/2),x,y)}}}l.globalAlpha=1}});const s=Math.random()*6.28;T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(l,u){const f=r*X0(jo(u*1.8));l.globalAlpha=1-u;for(let h=0;h<6;h++){const c=s+h*Math.PI/3,d=Math.cos(c),m=Math.sin(c);for(let p=.25;p<f;p+=.16)Je(t+d*p,n+m*p),l.fillStyle=p<f*.5?Uo[1]:Uo[2],ir(l,le,ue,4-p/r*2);if(f>r*.4){const p=f*.6;for(let y=-1;y<=1;y+=2){const x=c+y*.75;for(let b=.12;b<.45;b+=.12)Je(t+d*p+Math.cos(x)*b,n+m*p+Math.sin(x)*b),l.fillStyle=Uo[0],ir(l,le,ue,3)}}}}});for(let l=0;l<22;l++){const u=Math.random()*6.28,f=Math.random()*r;E(t+Math.cos(u)*f*.5,n+Math.sin(u)*f*.5,g(.3,1.1),Math.cos(u)*g(.5,2),Math.sin(u)*g(.5,2),g(0,.4),g(.7,1.1),Uo[l%2],2,.5,!0,.95)}ot(4)};const Do=Jf([".o.....o.....",".oo...oo.....",".ooooooo.....","ooeoooeoo....","ooooooooo....",".ooooooo.....","..ooooo......",".ooooooo...t.","ooooooooo..t.","ooooooooo.t..","ooooooooot...",".oo.o.oo....."],"oet",4,11);j.gato_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=Math.random()*99;T({type:"custom",layer:"top",add:!0,dur:.85,x:t,y:n,draw(a,s){Je(t,n);const l=3,u=le,f=ue-2;for(let h=0;h<3;h++){a.fillStyle=h===0?te[3]:h===1?te[1]:We[1];for(let c=0;c<Do.n;c++){if((Do.K[c]===1?2:Do.B[c]?1:0)!==h)continue;const m=W(c*7.13+i),p=-Do.Y[c]/(Do.h-1);m*.6+p*.6+.2<s*1.3||(a.globalAlpha=.85*(1-s*.5),a.fillRect(Math.round(u+Do.X[c]*l-l/2),Math.round(f+Do.Y[c]*l-s*18*m),l,l))}}}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(a,s){const l=s*.45;for(let u=0;u<8;u++){const f=(u+.5)/8,h=(l-f*.12)/.3;h<0||h>=1||(Je(t+(r-t)*f,n+(o-n)*f,.45+Math.sin(f*3.14)*.25),a.globalAlpha=1-h,a.fillStyle=u&1?vn[1]:te[1],wo(a,le,ue,8*(1-h)+2))}}}),T({type:"custom",layer:"top",dur:.65,x:r,y:o,draw(a,s){Je(r,o,1.05);const l=le,u=ue,f=s<.18?s/.18:s<.55?1:Math.max(0,1-(s-.55)/.12),h=[3,5,7,5,3];if(f>.05)for(let c=-1;c<=1;c+=2){const d=l+c*9;for(let m=0;m<5;m++){const p=h[m]*2,y=Math.max(1,Math.round(2*f));a.fillStyle=m===0||m===4?We[2]:We[1],a.fillRect(Math.round(d-p/2),Math.round(u+(m-2.5)*2*f),p,y)}a.fillStyle="#2a1040",a.fillRect(Math.round(d-1),Math.round(u-5*f),2,Math.max(1,Math.round(10*f)))}a.globalAlpha=s<.2?s/.2:s>.6?Math.max(0,(1-s)/.4):1,a.fillStyle=vn[1];for(let c=0;c<=8;c++){const d=Math.PI*(.15+.7*c/8);a.fillRect(Math.round(l+Math.cos(d)*15-1),Math.round(u+7+Math.sin(d)*6),3,2)}a.fillStyle=te[0],a.fillRect(Math.round(l-6),Math.round(u+9),2,2),a.fillRect(Math.round(l+4),Math.round(u+9),2,2)}});for(let a=0;a<6;a++)E(t,n,.5,g(-.8,.8),g(-.8,.8),g(.5,1.5),.5,te[1+a%3],2,0,!0);for(let a=0;a<10;a++){const s=a/10*6.28;E(r,o,.5,Math.cos(s)*2,Math.sin(s)*2,g(.2,1),.45,a&1?vn[1]:te[1],2,0,!0,.9)}};const Es=[-.55,-.75,-.6,0,.6,.75,.55,.2,-.2,-.3,.3],qu=[-.9,-.1,.45,.7,.45,-.1,-.9,-.45,-.45,0,0],Vu=[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,0],Mo=3.7,wh=[1,.75,.55,.4,.28],vi=Math.round;let _h=null,Ah=null,Th=[],Rh=[];function Ch(e,t,n,r,o,i,a){const s=S.T;for(let l=0;l<12;l++){const u=l/12*6.283+s*.5,f=Math.cos(u),h=Math.sin(u);if(Xr(f*Mo,h*Mo,r)>0===a)for(let c=1;c<=14;c++){const d=c/14;if(d>o)break;const m=((d-s*1.6+l*.29)%1+1)%1,p=m<.12;Je(t+f*r*d,n+h*r*d,Mo*(1-d)),e.globalAlpha=i*(p?1:a?.55:.45),e.fillStyle=p?We[0]:c%3?te[1]:vn[1],p&&a?wo(e,le,ue,5):ir(e,le,ue,p?4:3)}}}j.gato_R=e=>{if(e.type==="starfall")return;const t=e.x,n=e.y,r=e.radius||3,o=1,i=r*.8*$.HW*Math.SQRT2;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(w,_){const A=_*1.1;Je(t,n);const R=le,P=ue;w.globalAlpha=_>.85?(1-_)/.15:1;const z=Vu.length/2,O=jo(A/.45)*z;w.fillStyle=te[1];for(let F=0;F<z&&F<O;F++){const X=Vu[F*2],G=Vu[F*2+1],V=Math.min(1,O-F),L=R+Es[X]*i,k=P+qu[X]*i*.55,U=R+Es[G]*i,N=P+qu[G]*i*.55,H=Math.hypot(U-L,N-k)*V,K=Math.round(H/6);for(let Q=0;Q<=K;Q++){const ft=Q*6/(H||1)*V;w.fillRect(Math.round(L+(U-L)*ft),Math.round(k+(N-k)*ft),2,2)}}for(let F=0;F<Es.length;F++)w.fillStyle=F>=9?We[2]:We[1],wo(w,R+Es[F]*i,P+qu[F]*i*.55,3+3*(.5+.5*Math.sin(S.T*9+F*1.7)))}});const a=pi(e,o),s=()=>S.T-a.t0,l=()=>X0(jo(s()/.45)),u=w=>Math.min(1,s()/.15,w/.12+1e-4);T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(w,_,A){const R=Mn(a);if(R<=0){A.t=A.dur+1;return}const P=jo(u(R)),z=l(),O=Mo*(1-z);Je(t,n,O);const F=le,X=ue;_h!==w&&(_h=w,Th=[{u0:0,fill:Ct(w,te[3],5),a:.55},{u0:.65,fill:Ct(w,te[2],6),a:.55},{u0:.9,fill:Ct(w,te[1],10),a:.6}]),Sr(w,F,X,he(r*z),0,Jn(Mo-O),!1,Th,wh,P),Ch(w,t,n,r,z,P,!1),fo(a,t,n,r*1.1,12615935,.7*P)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(w,_,A){const R=Mn(a);if(R<=0){A.t=A.dur+1;return}const P=jo(u(R)),z=l(),O=Mo*(1-z);Je(t,n,O);const F=le,X=ue;Ah!==w&&(Ah=w,Rh=[{u0:0,fill:Ct(w,te[2],3),a:.5},{u0:.65,fill:Ct(w,te[1],4),a:.55},{u0:.9,fill:Ct(w,te[0],9),a:.7}]),Sr(w,F,X,he(r*z),0,Jn(Mo-O),!0,Rh,wh,P),Ch(w,t,n,r,z,P,!0),Je(t,n,Mo);const G=le,V=ue,L=jo(s()/.3);w.globalAlpha=P;for(let k=-9;k<=9;k+=2){const U=vi((14-Math.abs(k)*1.4)*L);if(U<1)continue;const N=Math.max(1,vi(2+2*Math.sin(S.T*3)));w.fillStyle=Math.abs(k)>6?We[2]:We[1],w.fillRect(vi(G-U),vi(V+k),U-N,2),w.fillRect(vi(G+N),vi(V+k),U-N,2)}w.fillStyle=We[0],Ol(w,G,V,22+3*Math.sin(S.T*6),S.T*1.5,1,2)}});const f=12,h=new Float32Array(f),c=new Float32Array(f),d=new Float32Array(f);for(let w=0;w<f;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r*.9;h[w]=t+Math.cos(_)*A,c[w]=n+Math.sin(_)*A,d[w]=.45+w/(f-1)*.55+g(-.03,.03)}const m=.32,p=Math.hypot(40,4.5*$.ZK),y=40/p,x=-352.8/p;T({type:"custom",layer:"top",add:!0,dur:1.2,x:t,y:n,landed:0,draw(w,_,A){const R=_*1.2;for(let P=0;P<f;P++){const z=R-(d[P]-m);if(!(z<0))if(z<m){const O=z/m;Je(h[P],c[P],4.5*(1-O));const F=le+(1-O)*40,X=ue;for(let G=-1;G<=1;G++){const V=G*.12,L=y*Math.cos(V)-x*Math.sin(V),k=y*Math.sin(V)+x*Math.cos(V);w.fillStyle=G===0?vn[1]:te[1];for(let U=1;U<10;U++)w.globalAlpha=1-U/10,w.fillRect(Math.round(F+L*U*3.2+G*3),Math.round(X+k*U*3.2),2,2)}w.globalAlpha=1,w.fillStyle=We[1],w.fillRect(Math.round(F-6),Math.round(X-1),12,2),w.fillRect(Math.round(F-1),Math.round(X-6),2,12),w.fillStyle=We[0],w.fillRect(Math.round(F-2),Math.round(X-2),4,4)}else{if(!(A.landed&1<<P)){A.landed|=1<<P;for(let F=0;F<2;F++)E(h[P],c[P],.1,g(-1,1),g(-1,1),g(1,2),.45,F?We[1]:vn[1],2,4,!0)}const O=(z-m)/.2;if(O>=1)continue;Je(h[P],c[P]),w.globalAlpha=1-O,w.fillStyle=We[1],wo(w,le,ue,2+O*8)}}w.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,delay:o,dur:.55,x:t,y:n,boom:!1,draw(w,_,A){if(!A.boom){A.boom=!0,ot(8);for(let F=0;F<28;F++){const X=Math.random()*6.28,G=g(1,3.5);E(t,n,.3,Math.cos(X)*G,Math.sin(X)*G,g(1.5,3.5),g(.5,.8),[We[1],te[1],vn[1],te[0]][F&3],3,5,!0,.95)}}const R=.3+(r-.3)*X0(_),P=_*2;Je(t,n,.2);const z=le,O=ue;if(_<.35){const F=1-_/.35;w.fillStyle=te[1],w.globalAlpha=F*.25,w.fillRect(Math.round(z-70),Math.round(O-35),140,70),w.globalAlpha=F*.4,w.fillRect(Math.round(z-40),Math.round(O-20),80,40),w.fillStyle=te[0],w.globalAlpha=F*.7,w.fillRect(Math.round(z-15),Math.round(O-8),30,16)}w.globalAlpha=1-_*_;for(let F=0;F<10;F++){const X=P+F/10*6.28;Je(t+Math.cos(X)*R,n+Math.sin(X)*R,.35+.2*Math.sin(_*6+F)),w.fillStyle=F&1?We[2]:We[1],L2(w,le,ue,3),w.fillStyle=We[0],w.fillRect(Math.round(le-1),Math.round(ue-1),2,2)}}});const b=24,M=new Float32Array(b),v=new Float32Array(b);for(let w=0;w<b;w++){const _=Math.random()*6.28,A=Math.sqrt(Math.random())*r;M[w]=t+Math.cos(_)*A,v[w]=n+Math.sin(_)*A}T({type:"custom",layer:"ground",add:!0,delay:o,dur:2.4,x:t,y:n,draw(w,_){const A=S.T*8|0;for(let R=0;R<b;R++){const P=W(R*13+A);P<.25||(Je(M[R],v[R]),w.globalAlpha=(1-_)*P,w.fillStyle=R%3?te[1]:We[1],w.fillRect(Math.round(le),Math.round(ue),2,2))}}})};Xe.gato_A=(e,t,n,r,o,i)=>{const a=!!(t.dmg&&t.src&&t.dmg>(t.src.ad||0)*1.3);k2(t,$5,a),Mt(!0);const s=Bt(),l=Math.cos(o),u=Math.sin(o);for(let c=1;c<=4;c++)s.globalAlpha=.8-c*.17,s.fillStyle=c&1?vn[1]:te[1],ir(s,n-l*c*5,r-u*c*5,4-c*.6);s.globalAlpha=1;const f=a?7:5,h=(i*16|0)&1;if(s.fillStyle=te[2],h)for(let c=-f;c<f;c+=2){const d=(f-Math.abs(c+1))*2;s.fillRect(Math.round(n-d/2),Math.round(r+c),Math.max(2,Math.round(d)),2)}else{const c=Math.round(f*1.4);s.fillRect(Math.round(n-c/2),Math.round(r-c/2),c,c)}if(s.fillStyle=vn[0],s.fillRect(Math.round(n-1.5),Math.round(r-1.5),3,3),a){s.fillStyle=We[1];for(let c=0;c<3;c++){const d=i*10+c*2.09;s.fillRect(Math.round(n+Math.cos(d)*11-1.5),Math.round(r+Math.sin(d)*7-1.5),3,3)}}Mt(!1)};function U2(e,t,n){T({type:"custom",layer:"top",add:!0,dur:n?.35:.25,x:e,y:t,draw(r,o){Je(e,t,.45);const i=4+o*(n?18:12);r.globalAlpha=1-o,r.fillStyle=te[1],Ol(r,le,ue,i,Math.PI/4,.75,2),r.fillStyle=vn[1],wo(r,le+i,ue,3),wo(r,le-i,ue,3),wo(r,le,ue+i*.75,3),wo(r,le,ue-i*.75,3),n&&(r.fillStyle=We[1],L2(r,le,ue-o*10,3+Math.round((1-o)*2)))}});for(let r=0;r<(n?8:4);r++)E(e,t,.45,g(-1,1),g(-1,1),g(.3,1.2),.35,n&&r&1?We[1]:te[1],2,1,!0)}function $5(e){const t=e.tgt?e.tx:e.x,n=e.tgt?e.ty:e.y;U2(t,n,e.crit),at.sfx("atk_gato",t,n,e.crit?.9:.6)}De.gato=e=>U2(e.x,e.y,!!e.big);const Ut=Math.round,Ie=Math.PI*2;let Ot=0,Ft=0;function pe(e,t,n=0){Ot=(e-t)*$.HW+$.OX,Ft=(e+t)*$.HH-n*$.ZK}function Tn(e,t,n,r,o){e.fillStyle=o,e.fillRect(Ut(t-r/2),Ut(n-r/2),r,r)}function ii(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Ut(t+(r-t)*l/s-i/2),Ut(n+(o-n)*l/s-i/2),i,i)}function Zo(e,t,n,r,o=1){for(let i=-r;i<r;i+=2){const a=2*Math.sqrt(Math.max(0,r*r-(i+1)*(i+1)));e.fillRect(Ut(t-a/2),Ut(n+i*o),Ut(a),Math.max(1,Ut(2*o)))}}const To=e=>e<0?0:e>1?1:e,io=e=>1-(1-e)*(1-e),Z={white:"#ffffff",pale:"#c8f6ff",cyan:"#6ae4ff",blue:"#2f8cff",indigo:"#3b3fa8",yel:"#fff59a",cloudD:"#1d2134",cloud:"#323a58",cloudM:"#4c5678",cloudL:"#7a86aa",scorch:"#14121c",ash:"#3a3448",feather:"#8a5a34",featherL:"#d8b48a",cream:"#fff4e0"},Si=new Float32Array(72),wi=new Float32Array(72);function br(e,t,n,r,o,i,a,s,l,u,f,h,c){const d=r-t,m=o-n,p=Math.hypot(d,m)||1,y=Math.min(70,Math.max(2,Math.ceil(p/i))),x=-m/p,b=d/p;for(let v=0;v<=y;v++){const w=v/y,_=v===0||v===y?0:(W(s+v*7.31)-.5)*2*a*Math.sqrt(Math.sin(w*Math.PI));Si[v]=t+d*w+x*_,wi[v]=n+m*w+b*_}if(f>0)for(let v=0;v<y;v++)ii(e,Si[v],wi[v],Si[v+1],wi[v+1],f,l);for(let v=0;v<y;v++)ii(e,Si[v],wi[v],Si[v+1],wi[v+1],h,u);const M=Math.atan2(m,d);for(let v=0;v<c;v++){const w=1+Math.floor(W(s+v*3.7+50)*Math.max(1,y-1));let _=Si[w],A=wi[w],R=M+(W(s+v*9.1)>.5?1:-1)*(.45+W(s+v*1.3)*.6);for(let P=0;P<3;P++){const z=i*(1-P*.2),O=_+Math.cos(R)*z,F=A+Math.sin(R)*z;ii(e,_,A,O,F,Math.max(1,h-1),P?l:u),_=O,A=F,R+=(W(s+v*5+P)-.5)*1.3}}}function Fl(e,t,n,r,o,i,a,s){let l=t,u=n,f=r;for(let h=0;h<5;h++){f+=(W(o+h)-.5)*.9;const c=i*(1-h*.13),d=l+Math.cos(f)*c,m=u+Math.sin(f)*c*.5;if(ii(e,l,u,d,m,2,a),W(o+h*3.3)>.45){const p=f+(W(o+h*7)>.5?.85:-.85);ii(e,d,m,d+Math.cos(p)*c*.6,m+Math.sin(p)*c*.3,2,a)}l=d,u=m}s&&Tn(e,l,u,3,s)}function El(e,t,n,r,o){e.fillStyle=Z.cloudD,e.fillRect(Ut(t-3*r),Ut(n-r),6*r,2*r),e.fillStyle=o?Z.cloudL:Z.cloud,e.fillRect(Ut(t-2*r),Ut(n-2*r),4*r,2*r),e.fillStyle=o?Z.pale:Z.cloudM,e.fillRect(Ut(t-r),Ut(n-2.6*r),2*r,Ut(r*.8))}j.halcon_Q=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5,r=Math.random()*999;T({type:"custom",layer:"top",add:!0,dur:.28,x:t,y:n,draw(o,i){pe(t,n,.6);const a=Ot,s=Ft,l=S.T*40|0;o.globalAlpha=1-i;for(let u=0;u<5;u++){const f=W(r+u+l*3)*Ie,h=10+W(r+u*2+l)*14;br(o,a,s,a+Math.cos(f)*h,s+Math.sin(f)*h*.7,5,3,r+u*11+l,Z.cyan,Z.white,0,1,0)}Tn(o,a,s,Ut(8*(1-i))+2,Z.white)}});for(let o=0;o<8;o++)E(t,n,.6,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.25,o&1?Z.cyan:Z.white,2,3,!0)};const Ls=new Map;Xe.halcon_Q=(e,t,n,r,o,i)=>{let a=t.id!=null?Ls.get(t.id):void 0;t.id!=null&&!a&&(Ls.size>64&&Ls.clear(),a=[t.x,t.y],Ls.set(t.id,a));const s=Math.cos(o),l=Math.sin(o),u=150;let f=n-s*u,h=r-l*u;Mt(!0);const c=Bt();if(a){pe(a[0],a[1],t.z||.45);const p=Math.hypot(n-Ot,r-Ft);if(p<u)f=Ot,h=Ft;else{c.globalAlpha=.4,c.fillStyle=Z.blue;const y=Math.min(80,Math.floor((p-u)/9)),x=i*20|0;for(let b=0;b<y;b++){if(W(b*3.1+x)<.35)continue;const M=(u+b*9)/p;c.fillRect(Ut(n+(Ot-n)*M),Ut(r+(Ft-r)*M),2,2)}}}const d=(i*30|0)*17.7+(t.id||0)*3.3;c.globalAlpha=.16,c.fillStyle=Z.blue,Zo(c,n,r,18),c.globalAlpha=1,br(c,n,r,f,h,11,7,d,Z.cyan,Z.white,4,2,2);const m=5+((i*30|0)&1)*3;c.fillStyle=Z.pale,c.fillRect(Ut(n-m),Ut(r-1),m*2,2),c.fillRect(Ut(n-1),Ut(r-m),2,m*2),c.fillStyle=Z.white,c.fillRect(Ut(n-3),Ut(r-3),6,6),Mt(!1)};j.halcon_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Ie;T({type:"custom",layer:"ground",dur:1.6,x:t,y:n,draw(i,a){pe(t,n),i.globalAlpha=.6*(1-a);for(let s=0;s<6;s++)Fl(i,Ot,Ft,o+s*Ie/6,r+s*13,9,Z.scorch)}}),T({type:"custom",layer:"ground",add:!0,dur:.55,x:t,y:n,draw(i,a){pe(t,n),i.globalAlpha=(1-a)*(1-a);for(let s=0;s<6;s++)Fl(i,Ot,Ft,o+s*Ie/6,r+s*13,9,Z.cyan,Z.white)}}),T({type:"custom",layer:"top",add:!0,dur:.45,x:t,y:n,draw(i,a){pe(t,n,.5);const s=S.T*30|0;i.globalAlpha=1-a*a;for(let l=0;l<4;l++){const u=W(r+l*5+s)*Ie,f=18+W(r+l+s*2)*16;br(i,Ot,Ft-6,Ot+Math.cos(u)*f,Ft+Math.sin(u)*f*.6,6,4,r+s*7+l,Z.blue,Z.pale,3,1,0)}a<.3&&Tn(i,Ot,Ft,Ut(22*(1-a/.3))+2,Z.white)}});for(let i=0;i<12;i++)E(t,n,.5,g(-2.2,2.2),g(-2.2,2.2),g(1,2.6),g(.25,.45),i%3?Z.cyan:Z.yel,2,7,!0,.9);ot(2)};const rl=new Map;j.halcon_W=e=>{if(e.type==="splash"||e.impact){H5(e);return}const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=e.dur||.45;pe(t,n);const a=Ot,s=Ft;pe(r,o);const l=Math.hypot(Ot-a,Ft-s)||1,u=(Ot-a)/l,f=(Ft-s)/l;rl.size>32&&rl.clear(),rl.set(e.uid,[u,f]);for(let h=0;h<8;h++)E(t,n,.7,g(-1,1),g(-1,1),g(1,2.5),g(.6,.9),h%3?Z.featherL:Z.cream,3,1.2,!1,.9);T({type:"custom",layer:"ground",add:!0,dur:i+.05,x:r,y:o,draw(h,c){pe(r,o);const d=Ot,m=Ft,p=64*(1-io(c))+24,y=c*2.6;h.globalAlpha=.5+.5*c;const x=c>.75&&(S.T*20|0)&1?Z.white:Z.cyan;for(let b=0;b<4;b++){const M=y+b*Ie/4;for(let v=-3;v<=3;v++){const w=M+v*.09;Tn(h,d+Math.cos(w)*p,m+Math.sin(w)*p*.5,3,x)}for(let v=1;v<=2;v++)Tn(h,d+Math.cos(M)*(p-v*5),m+Math.sin(M)*(p-v*5)*.5,2,Z.white)}Tn(h,d,m,3,Z.white)}}),T({type:"custom",layer:"top",add:!0,dur:i+.15,x:t,y:n,draw(h,c){const d=To(c*(i+.15)/i),m=-f,p=u;for(let y=0;y<12;y++){const x=d-y*.035;if(x<0)break;pe(t+(r-t)*x,n+(o-n)*x,.55);const b=Math.sin(x*Math.PI)*50,M=Ot,v=Ft-b,w=1-y/12;h.globalAlpha=w*(c>.8?(1-c)/.2:1);for(const _ of[-1,1]){const A=15+Math.sin(x*30+_)*4,R=Math.cos(x*34*_)*3;Tn(h,M+m*A*_+R,v+p*A*_-Math.sin(x*34)*3,y<3?3:2,y<4?Z.white:Z.pale)}y%3===0&&(h.fillStyle=Z.cyan,h.fillRect(Ut(M-u*10),Ut(v-f*10),2,2))}}})};function H5(e){const t=e.x,n=e.y,r=e.radius||1.5,o=Math.random()*999,i=rl.get(e.uid)||[0,1];T({type:"custom",layer:"ground",dur:1.3,x:t,y:n,draw(a,s){pe(t,n),a.globalAlpha=.55*(1-s);for(let l=0;l<7;l++){const u=l/7*Ie+W(o+l)*.5,f=r*$.HW*(.5+W(o+l*3)*.4);ii(a,Ot,Ft,Ot+Math.cos(u)*f*.6,Ft+Math.sin(u)*f*.3,2,Z.ash),ii(a,Ot+Math.cos(u)*f*.6,Ft+Math.sin(u)*f*.3,Ot+Math.cos(u+.25)*f,Ft+Math.sin(u+.25)*f*.5,2,Z.ash)}Tn(a,Ot,Ft,8,Z.ash)}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:t,y:n,draw(a,s){const l=S.T*30|0;for(let f=0;f<2;f++){const h=To(s*1.4-f*.2);if(h<=0||h>=1)continue;const c=.2+r*1.1*io(h);a.globalAlpha=1-h;for(let d=0;d<28;d++){if((d+f)%4===0)continue;const m=d/28*Ie;pe(t+Math.cos(m)*c,n+Math.sin(m)*c),Tn(a,Ot,Ft,f?2:3,f?Z.pale:Z.white)}}a.globalAlpha=1-s;const u=8;for(let f=0;f<u;f++){const h=f/u*Ie+s*.8,c=(f+1)/u*Ie+s*.8;pe(t+Math.cos(h)*r*.85,n+Math.sin(h)*r*.85);const d=Ot,m=Ft;pe(t+Math.cos(c)*r*.85,n+Math.sin(c)*r*.85),br(a,d,m-4,Ot,Ft-4,7,4,o+f*9+l,Z.blue,Z.pale,0,2,0),Tn(a,d,m-4,4,Z.white)}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:t,y:n,draw(a,s){const l=.3+r*1.3*io(s);a.globalAlpha=1-s;for(let u=0;u<8;u++){const f=u/8*Ie+.2;pe(t+Math.cos(f)*l,n+Math.sin(f)*l,.25);const h=Math.atan2(Math.sin(f)*.5,Math.cos(f));for(let c=-2;c<=2;c++){const d=h+c*.35,m=9-Math.abs(c);Tn(a,Ot-Math.cos(h)*6+Math.cos(d)*m,Ft-Math.sin(h)*6+Math.sin(d)*m,c?2:3,c?Z.pale:Z.white)}}s<.2&&(a.globalAlpha=1-s/.2,pe(t,n,.2),a.fillStyle=Z.white,Zo(a,Ot+i[0]*6,Ft+i[1]*6,Ut(30*(1-s)),.5))}});for(let a=0;a<14;a++){const s=Math.random()*Ie,l=g(1.5,3.5);E(t,n,.1,Math.cos(s)*l,Math.sin(s)*l,g(.5,1.6),g(.4,.7),a%3?"#cbb89a":"#9a8a70",3,5,!1,.9)}for(let a=0;a<6;a++)E(t,n,.6,g(-1.2,1.2),g(-1.2,1.2),g(1.5,2.5),g(.8,1.1),a&1?Z.featherL:Z.feather,3,1.5,!1,.92);ot(6)}j.halcon_E=e=>{const t=e.dur||3;if(!e.impact){const n=e.x,r=e.y,o=4.5;T({type:"custom",layer:"top",add:!0,dur:.5,x:n,y:r,uid:e.uid,draw(i,a,s){const l=ht(s.uid);pe(l?l.x:n,l?l.y:r,.8);const u=Ot,f=Ft,h=io(To(a*2.2));i.globalAlpha=a>.5?(1-a)/.5:1;for(const c of[-1,1])for(let d=0;d<5;d++){const m=-Math.PI/2+c*(.3+h*(.45+d*.24)),p=16+d*5+h*10;for(let y=6;y<p;y+=3){const x=y>p-6;Tn(i,u+Math.cos(m)*y*1.25,f+Math.sin(m)*y*.8+y/p*h*9,x?2:3,x?Z.white:d&1?Z.pale:Z.cyan)}}}}),T({type:"custom",layer:"ground",add:!0,dur:.6,x:n,y:r,draw(i,a){const s=.5+(o-.5)*io(a);i.globalAlpha=(1-a)*.9;for(let l=0;l<16;l++){const u=l/16*Ie+a*1.6;for(let f=0;f<3;f++){const h=u+f*.07;pe(n+Math.cos(h)*s,r+Math.sin(h)*s),Tn(i,Ot,Ft,3-f,f?Z.pale:Z.white)}}}})}for(let n=0;n<5;n++){const r=n/5*Ie;E(e.x,e.y,.3,Math.cos(r)*1.5,Math.sin(r)*1.5,g(.8,1.5),.4,n&1?Z.pale:Z.white,2,0,!0)}T({type:"custom",layer:"top",add:!0,dur:t,x:e.x,y:e.y,uid:e.uid,lx:e.x,ly:e.y,dx:0,dy:0,draw(n,r,o){const i=ht(o.uid);if(!i||i.dead){o.t=o.dur+1;return}const a=i.x-o.lx,s=i.y-o.ly;o.lx=i.x,o.ly=i.y;const l=a-s,u=(a+s)*.5,f=Math.hypot(l,u);f>5e-4?(o.dx=o.dx*.82+l/f*.18,o.dy=o.dy*.82+u/f*.18):(o.dx*=.95,o.dy*=.95);const h=Math.hypot(o.dx,o.dy),c=r*o.dur;n.globalAlpha=Math.min(1,c/.15)*(c>o.dur-.4?(o.dur-c)/.4:1),pe(i.x,i.y,.45);const d=Ot,m=Ft;if(h>.35){const p=o.dx/h,y=o.dy/h,x=S.T*70%11;for(let v=0;v<3;v++){const w=14+v*11+x,_=d-p*w,A=m-y*w,R=v===0?Z.white:v===1?Z.pale:Z.cyan;for(const P of[-1,1]){const z=Math.cos(P*.75),O=Math.sin(P*.75),F=-(p*z-y*O),X=-(p*O+y*z);for(let G=0;G<4;G++)Tn(n,_+F*G*3,A+X*G*3,2,R)}}const b=-y,M=p;for(const v of[-1,1])for(let w=0;w<6;w++){const _=10+w*5+S.T*90%5;(w+(v>0?1:0))%3!==0&&(n.fillStyle=Z.pale,n.fillRect(Ut(d-p*_+b*12*v),Ut(m-y*_+M*12*v),2,1))}}else for(let p=0;p<3;p++){const y=S.T*5+p*Ie/3;Tn(n,d+Math.cos(y)*14,m+14+Math.sin(y)*6,2,p?Z.pale:Z.white)}}})};const ks=["X.......................X","XX.....................XX",".XXX.................XXX.","..XXXX.....XXX.....XXXX..","...XXXXX..XeXeX..XXXXX...","....XXXXXXXXXXXXXXXXX....","......XXXXXXXXXXXXX......",".........XXXXXXX.........","..........XXXXX..........",".........XX.X.XX.........","........X...X...X........"],$r=(()=>{const e=[],t=[],n=[],r=ks.length,o=(i,a)=>a>=0&&a<r&&i>=0&&i<ks[a].length&&ks[a][i]!==".";return ks.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=i[s];l!=="."&&(e.push(s-12),t.push(a-5),n.push(l==="e"?2:o(s-1,a)&&o(s+1,a)&&o(s,a-1)&&o(s,a+1)?0:1))}}),{X:e,Y:t,K:n,n:e.length}})();j.halcon_R=e=>{if(e.type==="global_hit"){W5(e);return}const t=e.x,n=e.y,r=Math.random()*999,o=1.5;T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(i,a){pe(t,n,3);const s=Ot,l=Ft,u=30+60*io(To(a*2)),f=S.T*12|0;i.globalAlpha=Math.min(1,a*5)*(a>.75?(1-a)/.25:1)*.92;for(let h=0;h<9;h++){const c=h/9*Ie+a*3.2;El(i,s+Math.cos(c)*u,l+Math.sin(c)*u*.38,5+h%3,W(r+h+f)>.8)}El(i,s,l,7,W(r+f)>.7)}}),T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,uid:e.uid,draw(i,a,s){const l=ht(s.uid),u=l?l.x:t,f=l?l.y:n;pe(t,n,3);const h=Ot,c=Ft,d=30+60*io(To(a*2)),m=S.T*15|0,p=a>.75?(1-a)/.25:1;if(i.globalAlpha=p,W(r+m*1.7)>.45){const x=W(r+m)*Ie,b=x+1.2+W(r+m*3)*2;br(i,h+Math.cos(x)*d,c+Math.sin(x)*d*.38,h+Math.cos(b)*d,c+Math.sin(b)*d*.38,9,6,r+m,Z.blue,Z.pale,3,1,1)}const y=a*o;if(y>.25&&y<.55&&(y*25|0)%3!==2&&(pe(u,f,1),br(i,h,c+8,Ot,Ft,12,10,r+(y*25|0),Z.blue,Z.white,5,2,2)),y>.3){const x=To((y-.3)/.35),b=Ut(2+2*io(x)),M=(S.T*24|0)%5===0?.5:1;pe(u,f,2.2+x*.4);const v=Ot,w=Ft;i.globalAlpha=p*M*(.4+.6*x);for(let _=0;_<3;_++){i.fillStyle=_===0?Z.indigo:_===1?Z.cyan:Z.yel;for(let A=0;A<$r.n;A++)$r.K[A]===_&&i.fillRect(Ut(v+$r.X[A]*b-b/2),Ut(w+$r.Y[A]*b-b/2),b,b)}i.fillStyle=Z.white;for(let _=0;_<$r.n;_++)$r.K[_]===1&&$r.Y[_]<-2&&i.fillRect(Ut(v+$r.X[_]*b-1),Ut(w+$r.Y[_]*b-1),2,2)}}});for(let i=0;i<24;i++){const a=i/24*Ie,s=g(2,3);E(t+Math.cos(a)*s,n+Math.sin(a)*s,g(.2,1.2),-Math.cos(a)*s*1.6,-Math.sin(a)*s*1.6,g(.5,1.2),.6,i%3?Z.pale:Z.cloudL,2,0,i%3!==0,.97)}ot(5)};function W5(e){const t=e.x,n=e.y,r=Math.random()*999,o=Math.random()*Ie;at.sfx("imp_halcon_R",t,n,1);const i=[.1,.27,.42],a=[.1,.05,.05],s=l=>{for(let u=0;u<3;u++)if(l>=i[u]&&l<i[u]+a[u])return u+1;return 0};T({type:"custom",layer:"top",dur:1.1,x:t,y:n,draw(l,u){const f=u*1.1,h=io(To(f/.12));pe(t,n,3.6);const c=Ot,d=Ft,m=s(f)>0;l.globalAlpha=(f>.7?(1.1-f)/.4:1)*.95;for(let p=0;p<6;p++){const y=p/6*Ie+r;El(l,c+Math.cos(y)*38*h,d+Math.sin(y)*12*h,Ut(4+2*h),m&&p%2===0)}El(l,c,d,Ut(5+3*h),m)}}),T({type:"custom",layer:"top",add:!0,dur:.6,x:t,y:n,draw(l,u){const f=u*.6,h=s(f);pe(t,n,3.5);const c=Ot+(W(r)-.5)*30,d=Ft;if(pe(t,n,.1),h){const m=r+h*31;l.globalAlpha=.45,br(l,c,d,Ot,Ft,16,22,m,Z.indigo,Z.blue,0,9,0),l.globalAlpha=1,br(l,c,d,Ot,Ft,16,22,m,Z.cyan,Z.white,6,3,3),l.globalAlpha=h===1?.35:.18,l.fillStyle=Z.pale,Zo(l,Ot,Ft-20,70,.6)}if(f>.1){const m=To((f-.1)/.5);l.globalAlpha=(1-m)*.8,l.fillStyle=Z.cyan,Zo(l,Ot,Ft,Ut(26*(1-m*.5)),.5),l.fillStyle=Z.white,Zo(l,Ot,Ft,Ut(12*(1-m)),.5)}}}),T({type:"custom",layer:"ground",delay:.1,dur:2.6,x:t,y:n,draw(l,u){pe(t,n),l.globalAlpha=.7*(u>.6?(1-u)/.4:1),l.fillStyle=Z.scorch,Zo(l,Ot,Ft,16,.5);for(let f=0;f<8;f++)Fl(l,Ot,Ft,o+f*Ie/8,r+f*17,13,Z.scorch)}}),T({type:"custom",layer:"ground",add:!0,delay:.1,dur:.7,x:t,y:n,draw(l,u){pe(t,n);const f=S.T*25|0;l.globalAlpha=1-u;for(let h=0;h<8;h++)Fl(l,Ot,Ft,o+h*Ie/8,r+h*17,13,h&1?Z.blue:Z.cyan,Z.white);for(let h=0;h<3;h++){const c=W(r+h+f)*Ie,d=30+u*60;br(l,Ot,Ft,Ot+Math.cos(c)*d,Ft+Math.sin(c)*d*.5,7,5,r+f*3+h,Z.blue,Z.pale,0,2,0)}}});for(let l=0;l<18;l++){const u=Math.random()*Ie,f=g(1.5,4);E(t,n,.2,Math.cos(u)*f,Math.sin(u)*f,g(2,4),g(.4,.8),l%3===0?Z.yel:l%3===1?Z.cyan:Z.ash,l%3===2?3:2,8,l%3!==2,.92)}ot(8)}Xe.halcon_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a;for(let c=0;c<=16;c+=2){const d=c<3?0:c<12?3:2,m=n-a*c,p=r-s*c;for(let y=-d;y<=d;y+=2){const x=Math.abs(y)>=d&&d>0,b=(c===8||c===12)&&y!==0;e.fillStyle=y===0?Z.white:b?Z.feather:x?Z.cyan:Z.pale,e.fillRect(Ut(m+l*y-1),Ut(p+u*y-1),2,2)}}Mt(!0);const f=Bt(),h=i*24|0;f.globalAlpha=.2,f.fillStyle=Z.blue,Zo(f,n-a*6,r-s*6,12),f.globalAlpha=1;for(let c=0;c<2;c++){const d=4+W(h+c*3+(t.id||0))*10,m=c?1:-1,p=n-a*d,y=r-s*d;br(f,p,y,p+l*m*9-a*6,y+u*m*9-s*6,4,2,h*7+c,Z.cyan,Z.white,0,1,0)}f.fillStyle=Z.white,f.fillRect(Ut(n-2),Ut(r-2),4,4),Mt(!1)};De.halcon=e=>{const t=e.x,n=e.y,r=!!e.big,o=Math.random()*99,i=r?18:11;T({type:"custom",layer:"top",add:!0,dur:r?.26:.18,x:t,y:n,draw(a,s){pe(t,n,.5),a.globalAlpha=1-s;for(let l=0;l<4;l++){const u=Math.PI/4+l*Math.PI/2;br(a,Ot,Ft,Ot+Math.cos(u)*i*(.6+s*.5),Ft+Math.sin(u)*i*.7*(.6+s*.5),4,2.5,o+l,Z.cyan,Z.white,0,2,0)}Tn(a,Ot,Ft,Ut((r?10:6)*(1-s))+2,Z.white)}});for(let a=0;a<(r?8:4);a++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(.5,1.5),.25,a&1?Z.yel:Z.cyan,2,5,!0)};let $t=0,Ht=0;function Ne(e,t,n=0){$t=(e-t)*$.HW+$.OX,Ht=(e+t)*$.HH-n*$.ZK}function vr(e,t,n,r){const o=Math.max(1,Math.round(r));e.fillRect(Math.round(t-o/2),Math.round(n-o/2),o,o)}const Kr=e=>e<0?0:e>1?1:e,ya=e=>(e-=1,1+e*e*((2.2+1)*e+2.2)),Fr=["#f4ffc8","#d8f070","#a0c840","#5e8a2a"],Ci=["#f0e8b8","#d0c488","#a89a60","#6a6038"],Er=["#8a6a48","#5a3a20","#3a2414"],mo=["#e8fff8","#9af0e0","#40c8b0","#1a6a60"],Bn=["#c8ff80","#9a50e0","#7a3ab8","#3a1660"];function D2(e,t){const n=[],r=[],o=[];return e.forEach((i,a)=>{for(let s=0;s<i.length;s++){const l=t.indexOf(i[s]);l>=0&&(n.push(s),r.push(a),o.push(l))}}),{w:e[0].length,h:e.length,x:Int8Array.from(n),y:Int8Array.from(r),c:Uint8Array.from(o)}}function G0(e,t,n,r,o,i,a=-1){const s=Math.round(n-t.w*o/2),l=Math.round(r-t.h*o);for(let u=0;u<i.length;u++)if(!(a>=0&&u!==a)){e.fillStyle=i[u];for(let f=0;f<t.x.length;f++)t.c[f]===u&&e.fillRect(s+t.x[f]*o,l+t.y[f]*o,o,o)}}const q5=D2(["..ooo..",".orrwo.","orwrrro","orrrwro","oDDDDDo","..sss..","..sSs..","..sss.."],"orwDsS"),V5=["#6a1428","#e8443a","#fff4e0","#d8b890","#f4e8d0","#c8b090"],Ph=D2(["...o...","..opo..","..pgp..",".ppppo.",".pgppp.","opppgpo","oDDDDDo","...s...","..sss..","..sSs..","..sss.."],"opgDsS"),Ih=[Bn[3],Bn[2],Bn[0],"#4a2a6a","#e0d8f0","#a898c0"],Oa=new Map;function Y5(e,t){if(e.id==null)return;let n=Oa.get(e.id);if(!n){Oa.size>200&&Oa.clear(),n={x:e.x,y:e.y,life:9,tx:0,ty:0,tgt:!1},Oa.set(e.id,n);const r=e.id;T({type:"custom",layer:"ground",dur:(e.life||3)+.6,x:e.x,y:e.y,draw(o,i,a){if(a.fin)return;const s=S.game;if(s){for(const l of s.projs)if(l.id===r)return;a.fin=!0,a.dur=a.t,Oa.delete(r),t(n)}}})}n.x=e.x,n.y=e.y,n.life=e.life==null?9:e.life,e.homing&&!e.homing.dead&&(n.tgt=!0,n.tx=e.homing.x,n.ty=e.homing.y)}j.hongo_Q=e=>{const t=e.x,n=e.y,r=e.radius||1.8,o=7,i=new Float32Array(o*4);for(let u=0;u<o;u++){const f=Math.random()*6.28,h=u===0?0:r*g(.45,.9);i[u*4]=t+Math.cos(f)*h,i[u*4+1]=n+Math.sin(f)*h,i[u*4+2]=u===0?12:g(7,11),i[u*4+3]=.16+u*.05}const a=18,s=new Float32Array(a),l=new Float32Array(a);for(let u=0;u<a;u++){const f=Math.random()*6.28,h=Math.sqrt(Math.random())*r*.95;s[u]=t+Math.cos(f)*h,l[u]=n+Math.sin(f)*h}T({type:"custom",layer:"ground",dur:2.2,x:t,y:n,draw(u,f){const h=f*2.2;for(let c=0;c<a;c++){const d=Kr((h-.2-c%o*.05)/.15)*(f>.6?(1-f)/.4:1);d<=0||(Ne(s[c],l[c]),u.globalAlpha=d*.75,u.fillStyle=Fr[1+c%3],u.fillRect(Math.round($t),Math.round(Ht),c%3?3:4,2))}u.globalAlpha=1}}),T({type:"custom",layer:"top",dur:.95,x:t,y:n,popped:0,draw(u,f,h){const c=f*.95;for(let d=0;d<o;d++){const m=i[d*4+3],p=m-.16,y=i[d*4+2];if(Ne(i[d*4],i[d*4+1]),c<m){if(c<p)continue;const M=ya(Kr((c-p)/.13)),v=y*M*(1+.12*Math.sin(c*60+d)),w=Math.max(1,Math.round(v*2/3));for(let _=0;_<w;_++){const A=(_+.5)/w*2-1,R=v*2*Math.sqrt(1-A*A);u.fillStyle=_===0?Ci[0]:A<.3?Ci[1]:Ci[2],u.fillRect(Math.round($t-R/2),Math.round(Ht-v*2+_*3),Math.max(1,Math.round(R)),3)}u.fillStyle=Ci[3],u.fillRect(Math.round($t-v*.2),Math.round(Ht-v*2-2),3,3);continue}if(!(h.popped&1<<d)){h.popped|=1<<d;for(let M=0;M<4;M++)E(i[d*4],i[d*4+1],.25,g(-.6,.6),g(-.6,.6),g(.4,1.1),g(.9,1.4),Fr[M%3],3,.25,!1,.92)}const x=(c-m)/.35;if(x>=1)continue;const b=y*(.6+x*2.2);u.globalAlpha=1-x;for(let M=0;M<8;M++){const v=M/8*6.28+d;u.fillStyle=Fr[M&1?1:2],vr(u,$t+Math.cos(v)*b,Ht-y+Math.sin(v)*b*.6,4-x*2)}u.globalAlpha=(1-x)*.55,u.fillStyle=Ci[0];for(let M=0;M<3;M++)vr(u,$t+(M-1)*y*.6,Ht-y-x*8-(M&1)*4,y*(.8+x*.6));u.globalAlpha=1}}}),ot(2)};j.hongo_W=e=>{if(e.type==="heal"){const i=e.x,a=e.y;T({type:"custom",layer:"top",dur:.9,x:i,y:a,drops:0,draw(s,l,u){const f=l<.2?ya(l/.2):l>.8?(1-l)/.2:1,h=3;Ne(i,a,1.35);const c=$t,d=Ht,m=[4,8,10,12,12];for(let p=0;p<5;p++){const y=Math.round(m[p]*f)*h;y<=0||(s.fillStyle=p===0?mo[1]:mo[2],s.fillRect(Math.round(c-y/2),Math.round(d+(p-5)*h*f),y,Math.max(1,Math.round(h*f))))}s.fillStyle=mo[3],s.fillRect(Math.round(c-6*h*f),Math.round(d),Math.round(12*h*f),2),s.fillStyle=mo[0],vr(s,c-3*h*f,d-3*h*f,3*f),vr(s,c+2*h*f,d-2*h*f,3*f),u.drops<10&&l>.12&&l<.75&&(u.drops++,E(i+g(-.25,.25),a+g(-.25,.25),1.25,0,0,0,.5,u.drops&1?mo[0]:mo[1],2,6,!0,1))}});return}const t=e.x,n=e.y,r=(e.radius||4)*.78,o=12;T({type:"custom",layer:"top",dur:1.5,x:t,y:n,emitted:0,draw(i,a,s){const l=a*1.5,u=S.T;for(let f=0;f<o;f++){const h=f*.035,c=l-h;if(c<0)continue;const d=f/o*6.28,m=t+Math.cos(d)*r,p=n+Math.sin(d)*r;if(!(s.emitted&1<<f)){s.emitted|=1<<f;for(let w=0;w<2;w++)E(m,p,.2,g(-.2,.2),g(-.2,.2),g(.8,1.6),g(.7,1.1),mo[w],2,0,!0,.95)}const y=ya(Kr(c/.18)),x=a>.8?(1-a)/.2:1,b=Math.max(1,Math.round(3*y*x)),M=Math.abs(Math.sin(u*9+f*1.3))*5*x,v=Math.round(Math.sin(u*6+f)*2);Ne(m,p),i.globalAlpha=.35,i.fillStyle="#1a2a10",i.fillRect(Math.round($t-9),Math.round(Ht-1),18,3),i.globalAlpha=1,G0(i,q5,$t+v,Ht-M,b,V5)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.5,x:t,y:n,draw(i,a){const l=a*1.2;i.globalAlpha=(a<.2?a/.2:1-(a-.2)/.8)*.8;for(let u=0;u<40;u++){const f=l+u/40*6.28;Ne(t+Math.cos(f)*r,n+Math.sin(f)*r),i.fillStyle=mo[u%3+1],vr(i,$t,Ht,u%3?3:4)}}})};j.hongo_E=e=>{const t=e.x+(e.ux||0)*.5,n=e.y+(e.uy||0)*.5;T({type:"custom",layer:"ground",dur:.7,x:t,y:n,draw(r,o){Ne(t,n),r.globalAlpha=1-o,r.fillStyle=Er[2];for(let i=0;i<3;i++){const a=i*2.1+.4;for(let s=0;s<6;s++)vr(r,$t+Math.cos(a+s*.25)*s*3.5,Ht+Math.sin(a-s*.2)*s*1.8,3)}}});for(let r=0;r<10;r++)E(t,n,.1,g(-1.2,1.2),g(-1.2,1.2),g(1.5,3),g(.4,.6),Er[r%3],3,9,!1,.95)};const zh=10;Xe.hongo_E=(e,t,n,r,o,i)=>{Y5(t,K5);const a=Math.hypot(t.vx||0,t.vy||0)||1,s=-(t.vx||0)/a,l=-(t.vy||0)/a;Ne(t.x,t.y),e.fillStyle=Er[1],e.fillRect(Math.round($t-8),Math.round(Ht-1),16,4),e.fillStyle=Er[0],e.fillRect(Math.round($t-5),Math.round(Ht-2),10,2);for(let u=zh-1;u>=0;u--){const f=t.x+s*u*.17,h=t.y+l*u*.17,c=.04+.3*Math.max(0,Math.sin(i*14-u*.9))*(1-u/zh);Ne(f,h,c);const d=7-u*.45;e.fillStyle=Er[2],vr(e,$t,Ht+1,d+2),e.fillStyle=u&1?"#7a5030":"#6a4428",vr(e,$t,Ht,d),e.fillStyle="#a07040",e.fillRect(Math.round($t-d/4),Math.round(Ht-d/2),2,1),(u===3||u===7)&&(e.fillStyle=Fr[2],e.fillRect(Math.round($t+d/2),Math.round(Ht-d/2-1),2,2))}Ne(t.x,t.y,.12+.2*Math.max(0,Math.sin(i*14))),e.fillStyle=Fr[3],e.fillRect(Math.round($t-2),Math.round(Ht-6),4,7),e.fillStyle=Fr[1],e.fillRect(Math.round($t-6),Math.round(Ht-6),4,2),e.fillRect(Math.round($t+2),Math.round(Ht-8),4,2),e.fillStyle=Fr[0],e.fillRect(Math.round($t-1),Math.round(Ht-8),2,2),Math.random()<.35&&E(t.x,t.y,.05,g(-.6,.6),g(-.6,.6),g(.8,1.6),.4,Er[Math.random()*3|0],2,7,!1,.95)};function K5(e){const t=e.x,n=e.y;if(e.life<.07){for(let a=0;a<6;a++)E(t,n,.1,g(-.5,.5),g(-.5,.5),g(.5,1),.5,a&1?Er[0]:"#9a8a50",3,4,!1);return}const r=1.3,o=6,i=Math.random()*6.28;T({type:"custom",layer:"top",dur:r,x:t,y:n,draw(a,s){const l=s*r,u=l<.18?ya(l/.18):s>.82?(1-s)/.18:1;for(let f=0;f<o;f++){const h=i+f/o*6.28,c=Math.cos(h),d=Math.sin(h);Ne(t+c*.55,n+d*.55,0);const m=$t,p=Ht;Ne(t+c*.8,n+d*.8,.55);const y=$t,x=Ht;Ne(t+c*.12,n+d*.12,.75);const b=$t,M=Ht,v=Math.min(10,Math.round(10*u));for(let w=0;w<=v;w++){const _=w/10,A=1-_,R=A*A*m+2*A*_*y+_*_*b,P=A*A*p+2*A*_*x+_*_*M,z=6-_*4;a.fillStyle=Er[2],vr(a,R,P+1,z+2),a.fillStyle=w&1?"#7a5030":"#6a4428",vr(a,R,P,z),(w===4||w===7)&&(a.fillStyle="#c8f080",a.fillRect(Math.round(R+(f&1?3:-5)),Math.round(P-1),2,2))}}}});for(let a=0;a<12;a++)E(t,n,.1,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3.2),g(.4,.7),Er[a%3],3,9,!1,.95);ot(2)}j.hongo_R=e=>{const t=e.x,n=e.y,r=e.radius||3,o=window.SIM&&window.SIM.HEROES&&window.SIM.HEROES.hongo,i=(e.dur||o&&o.abil.R.dur||4)+.3,a=[];for(let p=0;p<13;p++){let y=null;for(let x=0;x<8&&!y;x++){const b=Math.random()*6.28,M=p===0?0:Math.sqrt(Math.random())*r*.88,v=t+Math.cos(b)*M,w=n+Math.sin(b)*M;a.every(_=>Math.hypot(_.x-v,_.y-w)>.7)&&(y={x:v,y:w,cs:p===0?4:Math.random()<.5?3:2,ts:M/r*.5})}y&&a.push(y)}a.sort((p,y)=>p.x+p.y-(y.x+y.y));const s=a.length,l=new Int8Array(s).fill(-1);for(let p=0;p<s;p++){let y=1e9;for(let x=0;x<s;x++)if(x!==p){const b=Math.hypot(a[p].x-a[x].x,a[p].y-a[x].y);b<y&&(y=b,l[p]=x)}}T({type:"custom",layer:"ground",dur:i,x:t,y:n,draw(p,y){const x=y*i,b=Kr((x-.1)/.5),M=y>.88?(1-y)/.12:1;p.globalAlpha=.5*M,p.fillStyle="#e8f0d0";for(let v=0;v<s;v++){const w=l[v];if(w<0)continue;Ne(a[v].x,a[v].y);const _=$t,A=Ht;Ne(a[w].x,a[w].y);const R=Math.hypot($t-_,Ht-A),P=Math.round(R/6*b);for(let z=0;z<=P;z++){const O=z*6/R;p.fillRect(Math.round(_+($t-_)*O),Math.round(A+(Ht-A)*O+Math.sin(z*1.7+v)*2),2,2)}}p.globalAlpha=1}});const u=(p,y,x)=>{const b=ya(Kr((y-p.ts)/.22)),M=x>.88?(1-x)/.12:1;return Math.max(0,Math.round(p.cs*b*M))};T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(p,y){const x=y*i;for(let b=0;b<s;b++){const M=a[b],v=u(M,x,y);v<=0||(Ne(M.x,M.y),p.fillStyle="rgba(20,10,30,0.35)",p.fillRect(Math.round($t-v*4),Math.round(Ht-1),v*8,3),G0(p,Ph,$t+Math.round(Math.sin(S.T*2+b)*v*.4),Ht,v,Ih))}}}),T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,acc:0,last:0,puffs:0,draw(p,y,x){const b=y*i;for(let M=0;M<s;M++){const v=a[M],w=u(v,b,y);w<=0||(Ne(v.x,v.y),p.globalAlpha=.45+.4*Math.sin(S.T*5+M*1.9),G0(p,Ph,$t+Math.round(Math.sin(S.T*2+M)*w*.4),Ht,w,Ih,2),p.globalAlpha=.18,p.fillStyle=Bn[1],p.fillRect(Math.round($t-w*4),Math.round(Ht-w*9),w*8,w*4))}for(p.globalAlpha=1,x.acc+=Math.max(0,b-x.last),x.last=b;x.acc>.085&&x.puffs<46&&y<.88;){x.acc-=.085,x.puffs++;const M=a[Math.random()*s|0];E(M.x+g(-.1,.1),M.y+g(-.1,.1),.12*M.cs*1.6,g(-.25,.25),g(-.25,.25),g(.5,1),g(.9,1.3),x.puffs&1?Bn[0]:Fr[1],2,.15,!0,.97)}}});const f=pi(e,i-.3),h=()=>S.T-f.t0,c=Array.from({length:11},(p,y)=>({a:y/11*6.283+g(-.2,.2),ph:y===0?1.45:g(.25,1.1),s:g(4,8),p:Math.random()*6})),d={g:0,out:0,zc:0,un:0},m=p=>{const y=h();return d.out=Kr(p/.4),d.g=ya(Kr(y/.45))*(.6+.4*d.out),d.zc=j5*(.25+.75*Kr(y/.45))*(.7+.3*d.out),d.un=Kr((y-.3)/.5)*d.out,d};T({type:"custom",layer:"ground",dur:i+1,x:t,y:n,draw(p,y,x){const b=Mn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b);Lh(p,t,n,r,r*1.05*M.g,M.zc,M.un,!1,M.out),Dh(p,t,n,M.zc,M.g,!1,M.out),fo(f,t,n,r*1.1,10113248,.6*M.out)}}),T({type:"custom",layer:"top",dur:i+1,x:t,y:n,draw(p,y,x){const b=Mn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b),v=r*1.05*M.g;Lh(p,t,n,r,v,M.zc,M.un,!0,M.out),Dh(p,t,n,M.zc,M.g,!0,M.out),Ne(t,n,M.zc);const w=$t,_=Ht,A=he(v),R=tl(v,Oh*M.g);Fh!==p&&(Fh=p,Eh=[{u0:0,fill:Ct(p,"#c890ff",12),a:.72},{u0:.4,fill:Ct(p,Bn[1],13),a:.72},{u0:.68,fill:Ct(p,Bn[2],13),a:.75},{u0:.88,fill:Ct(p,Bn[3],14),a:.82}]),z0(p,w,_,A,R,!0,Eh,M.out),p.globalAlpha=.9*M.out;for(let P=0;P<=40;P++){const z=P/40*Math.PI,O=w+Math.cos(z)*A,F=_+Math.sin(z)*A*.5;if(p.fillStyle=Bn[3],p.fillRect(Vr(O)-2,Vr(F)-1,4,3+(P&1)*2),P%5===2){const X=(S.T*.9+P*.37)%1;p.fillStyle=Bn[0],p.fillRect(Vr(O),Vr(F+4+X*18),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:i+1,x:t,y:n,draw(p,y,x){const b=Mn(f);if(b<=0){x.t=x.dur+1;return}const M=m(b),v=r*1.05*M.g,w=Oh*M.g;for(const _ of c){const A=Math.cos(_.a)*Math.cos(_.ph),R=Math.sin(_.a)*Math.cos(_.ph),P=Math.sin(_.ph);if(Xr(A/v,R/v,P/w)<=0)continue;Ne(t+A*v,n+R*v,M.zc+P*w);const z=.55+.45*Math.sin(S.T*4+_.p),O=.45+.55*Math.sqrt(Math.max(0,P)),F=Vr(_.s*O);p.globalAlpha=M.out*.35*z,p.fillStyle=Bn[0],Xh(p,$t,Ht,F+3,(F+3)*(.5+.5*P)),p.globalAlpha=M.out*(.6+.4*z),Xh(p,$t,Ht,F,F*(.5+.5*P)),p.fillStyle="#ffffff",p.fillRect(Vr($t-F/3),Vr(Ht-F/3),2,2)}}});for(let p=0;p<14;p++){const y=Math.random()*6.28,x=Math.random()*r*.8;E(t+Math.cos(y)*x,n+Math.sin(y)*x,.05,0,0,g(1.5,2.5),.5,Er[p%3],3,8,!1)}ot(3)};const j5=2.3,Oh=1.35,Vr=Math.round;let Fh=null,Eh=[];function Lh(e,t,n,r,o,i,a,s,l){if(a<=.01)return;const u=S.T,f=16,h=24;for(let c=-1;c<=1;c+=2)for(let d=0;d<f;d++){const m=d/f*6.283+c*.1,p=Math.sin(u*1.4+d*.9)*.03;for(let y=0;y<=h;y++){const x=y/h;if(x>a)break;const b=m+c*x*.55+p*x,M=Math.cos(b),v=Math.sin(b);if(Xr(M,v,0)>0!==s)continue;const w=o*.9+(r*.98-o*.9)*x+Math.sin(x*Math.PI)*.18;Ne(t+M*w,n+v*w,i*(1-x));const _=y%6===3;e.globalAlpha=l*(s?.85:.7)*(1-x*.3),e.fillStyle=_?Bn[0]:"#e8f0d0",e.fillRect(Vr($t)-1,Vr(Ht)-1,_?4:2,_?4:3)}}}let kh=null,Uh=[];const Q5=[.9,1,1,.9,.75];function Dh(e,t,n,r,o,i,a){kh!==e&&(kh=e,Uh=[{u0:0,fill:Ct(e,"#e0d8f0",7),a:.55},{u0:.6,fill:Ct(e,"#a898c0",9),a:.6},{u0:.88,fill:Ct(e,Bn[3],12),a:.7}]),Ne(t,n);const s=$t,l=Ht,u=he(.42*o);Sr(e,s,l,u*1.25,u,Jn(r),i,Uh,Q5,a),e.globalAlpha=a*.8,e.fillStyle=Bn[0];for(let f=0;f<3;f++){const h=(S.T*.5+f/3)%1*r;Zr(e,t,n,h,.42*o*(1.25-.25*h/Math.max(.1,r)),18,2,S.T,i?1:-1)}}function Xh(e,t,n,r,o){if(!(r<1)){o=Math.max(1,o);for(let i=-o;i<o;i+=2){const a=r*Math.sqrt(Math.max(0,1-(i+1)/o*((i+1)/o)));a>=.5&&e.fillRect(Math.round(t-a),Math.round(n+i),Math.max(1,Math.round(a*2)),2)}}}De.hongo=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(r,o){const i=.2+o*.55,a=10;r.globalAlpha=1-o;for(let s=0;s<a;s++){const l=s/a*6.28;Ne(t+Math.cos(l)*i,n+Math.sin(l)*i),r.fillStyle=Fr[1+s%3],r.fillRect(Math.round($t-2),Math.round(Ht-1),4,2)}}}),T({type:"custom",layer:"top",dur:.35,x:t,y:n,draw(r,o){Ne(t,n,.5+o*.3),r.globalAlpha=(1-o)*.8;for(let i=0;i<3;i++)r.fillStyle=Ci[i],vr(r,$t+(i-1)*8*(.6+o),Ht-(i&1)*5,8+o*8)}});for(let r=0;r<5;r++)E(t,n,.4,g(-1,1),g(-1,1),g(.5,1.5),.6,Fr[r%3],3,2,!1,.92)};const yt=Math.round,gr=Math.PI*2;let be=0,ge=0;function on(e,t,n=0){be=(e-t)*$.HW+$.OX,ge=(e+t)*$.HH-n*$.ZK}function $a(e,t,n,r,o){e.fillStyle=o,e.fillRect(yt(t-r/2),yt(n-r/2),r,r)}const kr=e=>e<0?0:e>1?1:e,ys=e=>1-(1-e)*(1-e),fe={w:"#ffffff",l:"#dff6ff",m:"#a8dcff",d:"#6aa8e0"},Kn={k:"#1e1b24",d:"#3a3542",m:"#6a6474",l:"#a8a2b4"},Ye={w:"#e8fff4",l:"#9affd8",m:"#3ad8a8",d:"#1a8a78"},Vn={l:"#fff2b0",m:"#ffc840",d:"#c88a1a"},Z5="#e8384a";function J5(e,t){return Math.atan2((e+t)*$.HH,(e-t)*$.HW)}function Ll(e,t,n,r,o,i,a,s,l){const u=Math.cos(r),f=Math.sin(r),h=-f,c=u;for(let d=0;d<=15;d++){const m=t+u*(6-d)*o,p=n+f*(6-d)*o;if(d<=9)e.fillStyle=i,e.fillRect(yt(m-o/2),yt(p-o/2),o,o),d>=2&&(e.fillStyle=a,e.fillRect(yt(m+h*o-o/2),yt(p+c*o-o/2),o,o));else if(d===10){e.fillStyle=s;for(let y=-3;y<=3;y++)e.fillRect(yt(m+h*y*o-o/2),yt(p+c*y*o-o/2),o,o)}else d<15?(e.fillStyle=l,e.fillRect(yt(m-o/2),yt(p-o/2),o,o)):(e.fillStyle=s,e.fillRect(yt(m-o),yt(p-o),o*2,o*2))}}function di(e,t,n,r,o){e.fillStyle=o;const i=yt(r);e.fillRect(yt(t-i),yt(n-1),i*2,2),e.fillRect(yt(t-1),yt(n-i),2,i*2),e.fillRect(yt(t-2),yt(n-2),4,4)}function X2(e,t,n,r){const o=Math.max(2,yt(Math.abs(Math.cos(r))*9)),i=9;e.fillStyle=Vn.d,e.fillRect(yt(t-o/2),yt(n-i/2),o,i),o>3&&(e.fillStyle=Vn.m,e.fillRect(yt(t-o/2+1),yt(n-i/2+1),o-2,i-2)),o>5&&(e.fillStyle=Vn.l,e.fillRect(yt(t-1),yt(n-2),2,4))}j.mapache_Q=e=>{const t=e.ux||0,n=e.uy||0,r=e.x+t*.5,o=e.y+n*.5,i=J5(t,n);T({type:"custom",layer:"top",dur:.24,x:r,y:o,draw(a,s){on(r,o,.55);const l=.55*(1-ys(s));for(let u=-1;u<=1;u++)u&&s>.85||(a.globalAlpha=u?.7:1,Ll(a,be,ge,i+u*l,2,u?Ye.l:fe.w,u?Ye.m:fe.m,Vn.m,Kn.d))}}),T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(a,s){on(r,o,.55),a.globalAlpha=1-s,di(a,be+Math.cos(i)*12,ge+Math.sin(i)*12,10*(1-s)+3,Ye.w)}});for(let a=0;a<6;a++)E(r,o,.5,g(-.8,.8),g(-.8,.8),g(.3,1),g(.4,.6),a&1?Kn.m:Kn.l,3,-.5,!1,.9)};Xe.mapache_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=-s,u=a,f=Math.sin(i*26)*.07;Mt(!0);const h=Bt();for(let d=2;d<14;d++){const m=d*4,p=Math.sin(d*.9-i*18)*(2+d*.4);h.globalAlpha=(1-d/14)*.9,h.fillStyle=d&1?Ye.l:Ye.m,h.fillRect(yt(n-a*m+l*p),yt(r-s*m+u*p),2,2)}for(let d=4;d>=1;d--)h.globalAlpha=.5-d*.1,Ll(h,n-a*d*9,r-s*d*9,o+f*d,2,Ye.l,Ye.m,Ye.m,Ye.d);h.globalAlpha=.22,h.fillStyle=Ye.m,h.fillRect(yt(n-10),yt(r-10),20,20),h.globalAlpha=1,Mt(!1),Ll(e,n,r,o+f,2,fe.w,fe.m,Vn.m,Kn.k);const c=i*4%1;c<.5&&(Mt(!0),Bt().globalAlpha=1,di(Bt(),n+a*(12-c*30),r+s*(12-c*30),4,fe.w),Mt(!1))};const Gh=[".XX.......XX.","XXXX.....XXXX",".XXXXXXXXXXX.","XXMMMXXXMMMXX","XMMeMMXMMeMMX","XXMMMXXXMMMXX",".XXXXXNXXXXX.","..XXXXXXXXX..","....XXXXX...."];j.mapache_Q_hit=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-2.2:-.9;T({type:"custom",layer:"top",dur:.8,x:t,y:n,draw(o,i){on(t+.15,n+.15,.05),o.globalAlpha=i>.6?(1-i)/.4:1,Ll(o,be-Math.cos(r)*8,ge-Math.sin(r)*8,r+Math.PI,2,fe.w,fe.m,Vn.m,Kn.k)}}),T({type:"custom",layer:"top",add:!0,dur:.95,x:t,y:n,draw(o,i){on(t,n,1);const a=3,s=ys(kr(i*3))*18,l=1+Math.sin(i*40)*.12*(i<.6?1:0),u=be,f=ge-s,h=Gh.length;o.globalAlpha=i<.1?i/.1:i>.6?.9*(1-(i-.6)/.4):.9;for(let c=0;c<h;c++){const d=Gh[c],m=i>.6?(c&1?1:-1)*(i-.6)*70:0;for(let p=0;p<d.length;p++){const y=d[p];y!=="."&&(o.fillStyle=y==="X"?Ye.l:y==="M"?Ye.d:y==="e"?Ye.w:Ye.m,o.fillRect(yt(u+(p-6)*a+m-a/2),yt(f+(c-4)*a*l-a/2),a,Math.max(1,yt(a*l))))}}}});for(let o=0;o<8;o++)E(t,n,.5,g(-1.8,1.8),g(-1.8,1.8),g(.8,2),g(.3,.5),o&1?fe.l:fe.m,2,6,!0,.9);for(let o=0;o<6;o++)E(t+g(-.2,.2),n+g(-.2,.2),.4,0,0,g(.6,1.2),g(.6,.9),o&1?Ye.l:Ye.m,2,-.3,!0);ot(2)};function G2(e,t,n,r,o,i,a,s){const l=Math.max(2,yt(o/2));for(let u=0;u<l;u++){const f=(u+.5)/l*2-1,h=i?r/2*Math.sqrt(Math.max(0,1-f*f)):r/2,c=n-o/2+u*2;if(h<1)continue;e.globalAlpha=s,e.fillStyle=Vn.d,e.fillRect(yt(t-h-2),yt(c),yt(h*2+4),2),e.globalAlpha=s*.85,e.fillStyle=fe.m,e.fillRect(yt(t-h),yt(c),yt(h*2),2);const d=t-h+(a*2.2-.6)*r-f*o*.25;d>t-h&&d<t+h-3&&(e.globalAlpha=s,e.fillStyle=fe.w,e.fillRect(yt(d),yt(c),3,2))}e.globalAlpha=s,e.fillStyle=Vn.l,e.fillRect(yt(t-2),yt(n-o/2-3),4,3)}function B2(e,t,n,r,o,i,a,s,l){if(!(s<=0||s>=1))for(let u=0;u<o.length;u++)for(let f=0;f<a;f++){const h=l+u*17+f*3,c=(W(h)-.5)*.7,d=(W(h+1)-.5)*.7,m=kr(s*(.85+W(h+2)*.3));on(t+(o[u]+c-t)*m,n+(i[u]+d-n)*m,r*(1-m)+Math.sin(m*Math.PI)*.9+.3);const p=(S.T*20+f|0)&1;e.fillStyle=p?fe.w:fe.m,e.fillRect(yt(be-2),yt(ge-1),p?4:2,p?2:4),e.fillStyle=fe.d,e.fillRect(yt(be+(p?2:0)),yt(ge+(p?0:3)),2,2)}}function N2(e,t,n){const r=new Float32Array(n),o=new Float32Array(n);for(let i=0;i<n;i++){const a=i/n*gr;r[i]=e+Math.cos(a)*1.1,o[i]=t+Math.sin(a)*1.1}return{TX:r,TY:o}}function $2(e,t,n){T({type:"custom",layer:"top",add:!0,delay:n,dur:.45,x:e[0],y:t[0],draw(r,o){r.globalAlpha=1-o;for(let i=0;i<e.length;i++){on(e[i],t[i],.6);for(let a=0;a<6;a++){const s=a/6*gr+o*2,l=6+o*22;di(r,be+Math.cos(s)*l,ge+Math.sin(s)*l*.8,4*(1-o)+2,a&1?fe.l:Ye.l)}o<.3&&di(r,be,ge,16*(1-o/.3)+3,fe.w)}}}),T({type:"custom",layer:"top",delay:n,dur:.02,x:e[0],y:t[0],fired:!1,draw(r,o,i){if(!i.fired){i.fired=!0;for(let a=0;a<e.length;a++)for(let s=0;s<4;s++)E(e[a],t[a],.4,g(-.8,.8),g(-.8,.8),g(.3,.9),g(.4,.7),s&1?Kn.l:Kn.m,3,-.4,!1,.9)}}})}j.mapache_W=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=N2(t,n,2),a=.32,s=.45,l=.78;T({type:"custom",layer:"top",dur:s+.02,x:t,y:n,draw(u,f){const h=f*(s+.02),c=ys(kr(h/.18));if(on(t,n,.75),G2(u,be,ge,30,52*c,!0,kr(h/.3),.95),h>a){u.globalAlpha=1,u.fillStyle=fe.w;const d=kr((h-a)/(s-a)),m=be+4,p=ge-6;for(let y=0;y<6;y++){let x=W(r+y)*gr,b=m,M=p;for(let v=0;v<yt(6*d);v++)x+=(W(r+y*7+v)-.5)*.9,b+=Math.cos(x)*3,M+=Math.sin(x)*3,u.fillRect(yt(b),yt(M),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:l+.05,x:t,y:n,draw(u,f){const h=f*(l+.05);h>=s&&h<s+.08&&(on(t,n,.75),u.globalAlpha=1-(h-s)/.08,u.fillStyle=fe.w,u.fillRect(yt(be-22),yt(ge-30),44,60)),u.globalAlpha=1,B2(u,t,n,.75,o,i,6,(h-s)/(l-s),r)}}),$2(o,i,l);for(let u=0;u<8;u++)E(t,n,.4,g(-1,1),g(-1,1),g(.3,.8),g(.5,.8),u&1?Kn.m:Kn.d,3,-.3,!1,.9)};j.mapache_E=e=>{const t=e.x,n=e.y,r=e.ex??t,o=e.ey??n,i=.8,a=(s,l,u,f,h,c,d)=>{const m=12*f,p=20*f;for(let y=0;y<18;y++){const x=y/18*gr+h;$a(s,l+Math.cos(x)*m,u+Math.sin(x)*p,y%3?2:3,y&1?c:d)}for(let y=0;y<8;y++){const x=y/8*gr-h*1.7,b=.45+.25*Math.sin(h*2+y);$a(s,l+Math.cos(x)*m*b,u+Math.sin(x)*p*b,2,d)}};T({type:"custom",layer:"top",add:!0,dur:i,x:t,y:n,draw(s,l){const u=l*i,f=u<.15?ys(u/.15):u>.55?Math.max(0,1-(u-.55)/.2):1,h=S.T*8;on(t,n,.55);const c=be,d=ge;on(r,o,.55);const m=be,p=ge;f>0&&(s.globalAlpha=1,a(s,c,d,f,h,fe.l,fe.d),a(s,m,p,f,-h,Vn.l,Vn.d));const y=kr((u-.05)/.4);for(let x=0;x<2;x++){const b=x?22:58,M=x?Vn.m:fe.m,v=x?1-y:y;s.globalAlpha=.45*(1-kr((u-.5)/.3));for(let w=0;w<=20;w++){const _=w/20;w%2||$a(s,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,2,M)}if(y>0&&y<1)for(let w=0;w<6;w++){const _=x?v+w*.03:v-w*.03;_<0||_>1||(s.globalAlpha=1-w/6,$a(s,c+(m-c)*_,d+(p-d)*_-Math.sin(_*Math.PI)*b,w?3:5,w?M:fe.w))}}}}),T({type:"custom",layer:"top",dur:i,x:t,y:n,draw(s,l){const u=l*i;on(t,n,.55);const f=be,h=ge;on(r,o,.4);const c=be,d=ge,m=(f+c)/2,p=(h+d)/2-58,y=kr(u/i),x=m+(c-m)*y,b=p+(d-p)*y-Math.sin(y*Math.PI)*30;s.globalAlpha=y>.85?(1-y)/.15:1,X2(s,x,b,S.T*26)}});for(const[s,l]of[[t,n],[r,o]])for(let u=0;u<6;u++){const f=u/6*gr;E(s,l,.55,Math.cos(f)*1.4,Math.sin(f)*1.4,g(0,.6),.4,s===t?fe.l:Vn.l,2,0,!0)}};const tM=[[".X.X.","XXXXX","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX",".XXX.","..X.."],["..X..",".XXX.","XXXXX","..X..",".XXX."],[".XXX.",".XXX.","XXXXX","XX.XX","..X.."]];j.mapache_R=e=>{const t=e.x,n=e.y,r=Math.random()*99,{TX:o,TY:i}=N2(t,n,4),a=8,s=1.7,l=.95,u=1.25,f=[0,1,2,3,4,5,6,7],h=new Float32Array(a);T({type:"custom",layer:"top",add:!0,delay:.1,dur:1.4,x:t,y:n,draw(y,x){on(t,n,0);const b=be,M=ge;y.globalAlpha=.16*Math.min(1,x*5)*(x>.7?(1-x)/.3:1),y.fillStyle=Vn.l;for(let v=0;v<60;v++){const w=v*6,_=70-v*.9;y.fillRect(yt(b-_),yt(M-w-6),yt(_*2),6)}y.globalAlpha*=2,y.fillStyle=fe.w;for(let v=0;v<18;v+=2){const w=Math.sqrt(1-v/18*(v/18))*74;y.fillRect(yt(b-w),yt(M-9+v),yt(w*2),2)}}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(y,x){const b=x*l,M=ys(kr(b/.3)),v=b*1.2+b*b*4.5;for(let w=0;w<a;w++)h[w]=w/a*gr+v;f.sort((w,_)=>Math.sin(h[w])-Math.sin(h[_]));for(const w of f){const _=h[w];on(t+Math.cos(_)*s,n+Math.sin(_)*s,0);const A=.45+.55*Math.abs(Math.sin(_+.8));G2(y,be,ge-22*M,yt(14*A)+2,44*M,!1,(b*1.6+w*.13)%1,.9)}}}),T({type:"custom",layer:"top",add:!0,dur:u+.05,x:t,y:n,draw(y,x){const b=x*(u+.05);if(b<l){const M=b*14|0,v=M%a,w=v/a*gr+b*1.2+b*b*4.5;on(t+Math.cos(w)*s,n+Math.sin(w)*s,.6),y.globalAlpha=.9,di(y,be,ge,9,fe.w)}else{if(b<l+.1){y.globalAlpha=1-(b-l)/.1,on(t,n,.4),y.fillStyle=fe.w;for(let M=-14;M<14;M+=2){const v=Math.sqrt(1-M/14*(M/14))*90;y.fillRect(yt(be-v),yt(ge+M*2),yt(v*2),4)}}y.globalAlpha=1,B2(y,t,n,.6,o,i,6,(b-l)/(u-l),r)}}}),$2(o,i,u);const c=16,d=new Float32Array(c),m=new Float32Array(c),p=new Float32Array(c);for(let y=0;y<c;y++){const x=Math.random()*gr,b=Math.sqrt(Math.random())*2.6;d[y]=t+Math.cos(x)*b,m[y]=n+Math.sin(x)*b,p[y]=g(0,.35)}T({type:"custom",layer:"top",delay:l,dur:1.3,x:t,y:n,draw(y,x){const b=x*1.3;for(let M=0;M<c;M++){const v=(b-p[M])/.95;if(v<0||v>1)continue;on(d[M],m[M],3.2*(1-v));const w=Math.cos(S.T*9+M*1.7),_=be+Math.sin(S.T*4+M)*8,A=tM[M&3],R=(M&3)<2?Z5:Kn.k,P=2,z=Math.max(.2,Math.abs(w));if(y.globalAlpha=v>.8?(1-v)/.2:1,y.fillStyle="#fffaf0",y.fillRect(yt(_-7*z),yt(ge-8),yt(14*z)||1,16),z>.45){y.fillStyle=R;for(let O=0;O<5;O++)for(let F=0;F<5;F++)A[O][F]==="X"&&y.fillRect(yt(_+(F-2.5)*P*z),yt(ge-5+O*P),Math.max(1,yt(P*z)),P)}}}});for(let y=0;y<20;y++){const x=Math.random()*gr;E(t+Math.cos(x)*s,n+Math.sin(x)*s,.2,Math.cos(x)*.8,Math.sin(x)*.8,g(.5,1.5),g(.5,.9),y&1?Kn.l:Kn.m,3,-.4,!1,.92)}T({type:"custom",layer:"top",delay:l,dur:.02,x:t,y:n,fired:!1,draw(y,x,b){b.fired||(b.fired=!0,ot(5))}})};function Bh(e,t,n,r,o,i,a,s){const l=Math.cos(r),u=Math.sin(r),f=-u,h=l,c=yt(10*i);for(let d=0;d<=c;d++){const m=d/10-.5,p=Math.sin(m*gr)*o*.18;$a(e,t+l*m*o+f*p,n+u*m*o*.8+h*p,d===c?4:3-Math.abs(m)*2,d===c?s:a)}}De.mapache=e=>{const t=e.x,n=e.y,r=!!e.big,o=-.6+g(-.3,.3);if(T({type:"custom",layer:"top",add:!0,dur:r?.32:.22,x:t,y:n,draw(i,a){on(t,n,.5);const s=kr(a*4);i.globalAlpha=a>.4?(1-a)/.6:1,Bh(i,be,ge,o,34,s,fe.m,fe.w),r&&Bh(i,be,ge,o+1.6,40,s,Ye.m,Ye.w),a>.2&&(di(i,be+12,ge-10,4*(1-a)+1,fe.w),di(i,be-10,ge+6,3*(1-a)+1,fe.l))}}),r){T({type:"custom",layer:"top",dur:.6,x:t,y:n,draw(i,a){on(t,n,.6+Math.sin(a*Math.PI)*1),i.globalAlpha=a>.8?(1-a)/.2:1,X2(i,be+a*18,ge,S.T*30)}});for(let i=0;i<6;i++)E(t,n,.5,g(-1,1),g(-1,1),g(.5,1.4),.5,i&1?Ye.l:Ye.m,2,-.5,!0)}for(let i=0;i<(r?4:3);i++)E(t,n,.2,g(-.8,.8),g(-.8,.8),g(.2,.6),.35,Kn.l,3,0,!1,.9)};const Li="#1e0f30",Yi="#4b2272",ao="#8b3cd2",so="#d6b4ff",Jr="#f6f2ff",kl="#ff2f5f",H2="#2c1446",Ve=Math.round,ai=Math.PI*2,eM=[0,1,2,1];function mr(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Ve(t),Ve(n),r,o)}function nM(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Ve(t+(r-t)*l/s-i/2),Ve(n+(o-n)*l/s-i/2),i,i)}function B0(e,t,n,r,o,i,a,s){t=Ve(t),n=Ve(n),e.fillStyle=i,e.fillRect(t-r,n-r,2*r,3*r),e.fillRect(t-r,n-2*r,r,r),e.fillRect(t,n-2*r,r,r),e.fillStyle=a,o===0?(e.fillRect(t-3*r,n-2*r,2*r,r),e.fillRect(t-5*r,n-3*r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n-2*r,2*r,r),e.fillRect(t+3*r,n-3*r,2*r,r),e.fillRect(t+r,n-r,r,r)):o===1?(e.fillRect(t-5*r,n-r,4*r,r),e.fillRect(t-5*r,n,r,r),e.fillRect(t-3*r,n,r,r),e.fillRect(t+r,n-r,4*r,r),e.fillRect(t+4*r,n,r,r),e.fillRect(t+2*r,n,r,r)):(e.fillRect(t-3*r,n,2*r,r),e.fillRect(t-4*r,n+r,2*r,r),e.fillRect(t-2*r,n-r,r,r),e.fillRect(t+r,n,2*r,r),e.fillRect(t+2*r,n+r,2*r,r),e.fillRect(t+r,n-r,r,r));{const l=Math.max(1,r>>1);e.fillStyle=s,e.fillRect(t-r,n-r,l,l),e.fillRect(t+r-l,n-r,l,l)}}function Qo(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,Ve(2*s));e.fillStyle=a;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=Ve(n+c*s);if(Math.abs(m)>=f){e.fillRect(Ve(t-d),p,Ve(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(Ve(t-d),p,Ve(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(Ve(t+M),p,Ve(d-M),h)}}}function N0(e,t,n,r,o){const[i,a]=C(t,n),s=r*$.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(Ve(i-f),Ve(a+u),Ve(f*2),2)}}const W2=e=>{const t=ht(e);return t&&!t.dead&&!He(t)?t:null},rM=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},$0=(e,t=16)=>eM[((S.T*t|0)+e)%4];De.murcielago=e=>{const t=g(0,ai),n=e.big?17:13;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x,e.y,.5);r.globalAlpha=1-o,Qo(r,i,a,n+2,t+o*1.4,.45,ao),Qo(r,i,a,n,t+o*1.4,.52,Jr)}});for(let r=0;r<5;r++)E(e.x,e.y,.5,g(-2.5,2.5),g(-2.5,2.5),g(0,1),.28,r%2?so:ao,2,0,!0,.9)};j.murcielago_Q=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.2,i=e.angle||.8,a=e.x+t*.3,s=e.y+n*.3,l=.6;T({type:"custom",layer:"top",add:!0,dur:.62,x:e.x,y:e.y,draw(u,f){const h=f*.62;for(let c=0;c<6;c++){const d=h-c*.055;if(d<0||d>.32)continue;const m=d/.32,p=.3+m*(o-.3),y=Math.max(6,Math.ceil(i*2*p*7)),x=c%2?ao:so,b=c%2?3:2;u.globalAlpha=(1-m)*.95;for(let M=0;M<=y;M++){const v=r-i+2*i*M/y,w=Math.sin(M*1.7+c*2.3+h*40)*.07*(1+m),[_,A]=C(a+Math.cos(v)*(p+w),s+Math.sin(v)*(p+w),l-m*.35);mr(u,_-b/2,A-b/2,b,b,x),M===y>>1&&mr(u,_-1,A-1,2,2,Jr)}}}}),T({type:"custom",layer:"ground",dur:.5,x:e.x,y:e.y,draw(u,f){u.globalAlpha=.55*(1-f);for(const h of[-1,1]){const c=r+h*i;for(let d=0;d<10;d++){const m=.4+(o-.4)*d/9,[p,y]=C(a+Math.cos(c)*m,s+Math.sin(c)*m);mr(u,p-1,y-1,3,2,Yi)}}}});for(let u=0;u<14;u++){const f=r+g(-i,i),h=g(.6,o);E(a+Math.cos(f)*h,s+Math.sin(f)*h,l*.7,Math.cos(f)*.8,Math.sin(f)*.8,g(0,.5),.5,u%3?so:Jr,2,0,!0,.92)}ot(2)};j.murcielago_W=e=>{const t=e.dur||2.5,n=Array.from({length:14},(r,o)=>({a:o/14*ai+g(-.2,.2),sp:g(1.2,2.4),up:g(.8,1.8),ph:Math.random()*4|0}));T({type:"custom",layer:"ground",dur:.8,x:e.x,y:e.y,draw(r,o){r.globalAlpha=.6*(1-o),N0(r,e.x,e.y,.75*(1-o*.6),Li),r.globalAlpha=.8*(1-o),N0(r,e.x,e.y,.3*(1-o),H2)}}),T({type:"custom",layer:"top",dur:1,x:e.x,y:e.y,draw(r,o){const i=o;r.globalAlpha=Math.min(1,(1-o)*1.6);for(const a of n){const s=a.sp*i,[l,u]=C(e.x+Math.cos(a.a)*s,e.y+Math.sin(a.a)*s,.5+a.up*i+Math.sin(i*9+a.a)*.08);B0(r,l,u,2,$0(a.ph),Li,Yi,kl)}}}),T({type:"custom",layer:"top",dur:t,x:e.x,y:e.y,uid:e.uid,draw(r){const o=W2(e.uid);if(!o||typeof o.invisible=="function"&&!o.invisible())return;const[i,a]=C(o.x,o.y,.75);r.globalAlpha=.65;for(let s=0;s<2;s++){const l=S.T*5+s*Math.PI;B0(r,i+Math.cos(l)*24,a+Math.sin(l)*9,1,$0(s*2,20),Yi,ao,kl)}r.globalAlpha=.35;for(let s=0;s<4;s++)mr(r,i-8+s*5,a+26+(S.T*30+s*7)%8,2,2,Li)}});for(let r=0;r<16;r++)E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.2,.8),g(-.5,.5),g(-.5,.5),g(1,2.2),g(.5,.9),r%2?Li:Yi,3,0,!1,.95);for(let r=0;r<6;r++)E(e.x+g(-.3,.3),e.y+g(-.3,.3),g(.4,1),0,0,g(.5,1.2),.5,so,2,0,!0)};j.murcielago_E=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=e.dur||.45,o=rM(e),i=o&&o.radius||1.4,a=g(0,ai);let s=!1;T({type:"custom",layer:"ground",dur:r+1.4,x:t,y:n,draw(l,u,f){const h=u*f.dur,[c,d]=C(t,n);if(h<r){l.globalAlpha=.5,Qo(l,c,d,Ve(i*26*(1.4-.4*h/r)),a+h*6,.45,Yi,.5);return}l.globalAlpha=.6*Math.min(1,(f.dur-h)/.6),Qo(l,c,d+2,Ve(i*30),a+Math.PI*1.1,.42,H2,.5)}}),T({type:"custom",layer:"top",add:!0,dur:r+.5,x:t,y:n,draw(l,u,f){const h=u*f.dur;if(h<r){const b=W2(e.uid);if(!b)return;const[M,v]=C(b.x,b.y,.7),[w,_]=C(t,n,.3),A=Math.hypot(w-M,_-v)||1,R=(w-M)/A,P=(_-v)/A;l.globalAlpha=.75;for(let z=0;z<4;z++){const O=(z-1.5)*7,F=18+z%2*12;nM(l,M-P*O-R*8,v+R*O-P*8,M-P*O-R*(8+F),v+R*O-P*(8+F),2,z%2?so:ao)}return}const c=(h-r)/.5;if(!s){s=!0,ot(6);for(let b=0;b<22;b++){const M=g(0,ai),v=g(2,5);E(t,n,.45,Math.cos(M)*v,Math.sin(M)*v,g(.3,1.5),g(.3,.55),b%3?so:b%2?Jr:ao,2,3,!0,.9)}}const d=Math.min(1,c/.45),[m,p]=C(t,n,.45),y=Ve(26+14*d),x=a+d*Math.PI*1.1;l.globalAlpha=c<.5?1:Math.max(0,(1-c)/.5),Qo(l,m,p,y+3,x,.42,ao,.85),Qo(l,m,p,y,x,.48,Jr,.85),l.globalAlpha*=.35,Qo(l,m,p,y,x-.6,.48,so,.85)}})};j.murcielago_R=e=>{const t=e.radius||2.6,n=1.8,r=24,o=Array.from({length:r},(s,l)=>({p:l/r*ai,r0:t*(.35+.6*Math.random()),z:.5+Math.random()*1.3,w:2.6+Math.random()*1.6,ph:Math.random()*4|0,s:Math.random()<.3?3:2})),i=(s,l)=>{const u=Math.min(1,l/.35),f=Math.max(0,(l-(n-.4))/.4),h=(s.r0+(1-u)*(1-u)*t*1.4+f*f*t*1.5)*(.85+.15*Math.sin(l*5+s.p*3)),c=s.p+l*s.w;return[e.x+Math.cos(c)*h,e.y+Math.sin(c)*h,s.z+Math.sin(l*4+s.p)*.25+f*1.5,f]},a=Array.from({length:8},()=>({t:g(.3,n-.4),x:e.x+g(-1,1)*t*.6,y:e.y+g(-1,1)*t*.6}));T({type:"custom",layer:"ground",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n,f=Math.min(1,u/.3,(n-u)/.4);s.globalAlpha=.32*f,N0(s,e.x,e.y,t,Li),s.globalAlpha=.7*f;for(let h=0;h<40;h++){const c=h/40*ai+u*.8,[d,m]=C(e.x+Math.cos(c)*t,e.y+Math.sin(c)*t);mr(s,d-1,m-1,h%2?2:3,2,h%2?so:ao)}s.globalAlpha=.3*f;for(const h of o){const[c,d]=i(h,u),[m,p]=C(c,d);mr(s,m-4,p-1,8,2,"#000000")}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of o){const[h,c,d,m]=i(f,u),[p,y]=C(h,c,d);s.globalAlpha=Math.min(1,u/.15)*(1-m),B0(s,p,y,f.s,$0(f.ph,18),Li,Yi,kl)}}}),T({type:"custom",layer:"top",add:!0,dur:n,x:e.x,y:e.y,draw(s,l){const u=l*n;for(const f of a){const h=(u-f.t)/.14;if(h<0||h>1)continue;const[c,d]=C(f.x,f.y,.55),m=Ve(4-h*3);s.globalAlpha=1-h;for(const p of[-1,1]){const y=c+p*4;mr(s,y-2,d-6-m,4,2,Jr),mr(s,y-1,d-4-m,2,3,Jr),mr(s,y-2,d+4+m,4,2,Jr),mr(s,y-1,d+1+m,2,3,Jr)}mr(s,c-1,d-1,3,3,kl)}}});for(let s=0;s<20;s++){const l=g(0,ai),u=t*g(.3,1);E(e.x+Math.cos(l)*u,e.y+Math.sin(l)*u,g(.3,1.5),-Math.sin(l)*2.5,Math.cos(l)*2.5,g(0,.6),g(.6,1.1),s%3?ao:so,2,0,!0,.97)}ot(5)};const Tt=Math.round,Lr=Math.PI*2,vt={i0:"#232833",i1:"#4a5568",i2:"#7a8aa0",i3:"#b8c4d4",i4:"#eef2f8",brass:"#c8902e",brassL:"#ffd27a",wood:"#7a5230",e0:"#3e2c20",e1:"#6a4c34",e2:"#9a7a58",e3:"#c8a880",dust:"#efe0c2",amber:"#ffb43a",amberD:"#c87818",amberL:"#ffe08a"},oM=e=>e*$.HW*Math.SQRT2;function Ha(e,t,n,r){r=Math.max(1,Tt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(Tt(t[0]+(n[0]-t[0])*s/i-a),Tt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function Ul(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=Tt(n-a*o/2),u=Tt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++)for(let c=0;c<a;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function q2(e,t,n=6){const r=[[0,0]];for(let o=1;o<=n;o++){const i=e+g(-.35,.35),a=t*o/n;r.push([Math.cos(i)*a,Math.sin(i)*a])}return r}function V2(e,t,n,r,o){const i=r.length-1,a=o*i;for(let s=0;s<i&&s<a;s++){const l=Math.min(1,a-s),u=C(t+r[s][0],n+r[s][1]),f=C(t+r[s+1][0],n+r[s+1][1]);Ha(e,u,[u[0]+(f[0]-u[0])*l,u[1]+(f[1]-u[1])*l],s<2?3:2)}}const iM=[".....hh.....",".....hh.....",".....hh.....",".....hh.....","dddddddddddd","dbliiiiiilbd","dbiiiiiiiibd","dbiiiiiiiibd","dbiiiiiiiibd","dddddddddddd"],aM=[".eee.......eee.","eiie.......eiie","eiihhhhhhhhhiie",".ehhhhhhhhhhhe.",".hhyhhhhhhhyhh.","hhhhhhhhhhhhhhh","hhhsssssssssshh","hhhsssnnnssshhh","hhsssssnssssshh",".hsf.......fsh.",".hhs.......shh.","..hhsf...fshh..","...hhhhhhhhh..."],Nh=["t.t.t",".....",".ppp.","ppppp",".ppp."];j.oso_Q=e=>{const t=e.x,n=e.y,r=e.ux||1,o=e.uy||0,i=e.range||2.5,a=Math.min(e.angle||1.2,1.4),s=Math.atan2(o,r),l=t+r*1,u=n+o*1,f=.13,h=[];[.9,1.6,2.3].forEach((d,m)=>{const p=3+m*2;for(let y=0;y<p;y++){const x=s+(p===1?0:(y/(p-1)*2-1)*a*.8)+g(-.06,.06),b=d*i/2.5;h.push({x:t+Math.cos(x)*b,y:n+Math.sin(x)*b,t0:f+.02+m*.08,w:Math.random()<.5?10:12,h:g(9,15),done:!1})}});const c=[-.8,-.4,0,.4,.8].map(d=>q2(s+d*a,i*g(.75,1)));T({type:"custom",layer:"top",dur:.34,x:l,y:u,draw(d,m){const p=m*.34,y=Math.min(1,p/f),x=1.5*(1-y*y),[b,M]=C(l,u,x+.25);if(d.globalAlpha=p<.22?1:Math.max(0,1-(p-.22)/.12),Ul(d,iM,b,M,3,{h:vt.wood,d:vt.i0,b:vt.brass,l:vt.i4,i:vt.i2}),y<1){d.globalAlpha=.5,d.fillStyle=vt.i3;for(let v=1;v<=3;v++)d.fillRect(Tt(b-15+v*7),Tt(M-26-v*8),2,8)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,delay:f,x:l,y:u,draw(d,m){const[p,y]=C(l,u,.1),x=Tt(26*(1-m))+4;d.fillStyle=vt.amberL,d.fillRect(p-x,y-2,x*2,4),d.fillRect(p-2,y-x*.6,4,x*1.2),d.fillStyle="#ffffff",d.fillRect(p-5,y-3,10,6)}}),T({type:"custom",layer:"ground",dur:1.15,x:t,y:n,draw(d,m,p){const y=m*1.15;if(y>=f&&!p.hit){p.hit=!0,ot(7);for(let M=0;M<14;M++){const v=s+g(-a,a),w=g(1,3);E(l,u,.1,Math.cos(v)*w,Math.sin(v)*w,g(.3,1),g(.6,.9),M%2?vt.dust:vt.e3,5,-.4,!1,.9)}}if(y<f)return;const x=y-f;d.globalAlpha=Math.max(0,.85*(1-x/1)),d.fillStyle=vt.e0;for(const M of c)V2(d,t,n,M,Math.min(1,x*5));const b=Math.min(1,x/.32);if(b<1){const M=i*(.3+.8*b);d.globalAlpha=1-b,d.fillStyle=vt.dust;for(let v=0;v<=16;v++){const w=s-a+2*a*v/16,[_,A]=C(t+Math.cos(w)*M,n+Math.sin(w)*M);d.fillRect(Tt(_)-3,Tt(A)-2,6,4)}}for(const M of h){const v=(y-M.t0)/.5;if(v<0||v>1)continue;M.done||(M.done=!0,E(M.x,M.y,.2,g(-1,1),g(-1,1),g(3,5),g(.7,1),[vt.e1,vt.e2,vt.i1][Math.random()*3|0],Math.random()<.5?4:5,13,!1,.97));const w=Tt(M.h*(v<.2?v/.2:1-(v-.2)/.8)),[_,A]=C(M.x,M.y);d.globalAlpha=1,d.fillStyle=vt.e0,d.fillRect(Tt(_-M.w/2-1),Tt(A-2),M.w+2,4),d.fillStyle=vt.e1,d.fillRect(Tt(_-M.w/2),Tt(A-w),M.w,w),d.fillStyle=vt.e3,d.fillRect(Tt(_-M.w/2),Tt(A-w-5),M.w,5),d.fillStyle=vt.e2,d.fillRect(Tt(_-M.w/2),Tt(A-w-1),M.w,1)}}})};function Us(e,t,n,r,o,i){const a=Math.cos(i);return[e+n*Math.cos(o)*a,t+n*.5*Math.sin(o)*a-r*Math.sin(i)]}j.oso_W=e=>{const t=e.uid,n=e.dur||3;let r=e.x,o=e.y;T({type:"custom",layer:"top",add:!0,dur:.2,x:e.x,y:e.y,uid:t,draw(i,a){const s=ht(t),[l,u]=C(s?s.x:r,s?s.y:o,.6),f=Tt(18*(1-a))+3;i.fillStyle=vt.amber;for(let h=0;h<8;h++){const c=h/8*Lr;i.fillRect(Tt(l+Math.cos(c)*f*1.4)-2,Tt(u+Math.sin(c)*f)-2,4,4)}i.fillStyle="#ffffff",i.fillRect(l-3,u-3,6,6)}});for(let i=0;i<10;i++){const a=Math.random()*Lr;E(e.x,e.y,.6,Math.cos(a)*g(1,3),Math.sin(a)*g(1,3),g(1.5,3),.4,i%2?vt.brassL:vt.amber,2,9,!0)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(i,a,s){const l=ht(t),u=a*n;if(l&&(r=l.x,o=l.y),!l||l.dead||u>.2&&l.status&&!l.status.dr||a>.985){for(let _=0;_<16;_++){const A=Math.random()*Lr,R=g(1,2.5);E(r+Math.cos(A)*.4,o+Math.sin(A)*.4,g(.2,.8),Math.cos(A)*R,Math.sin(A)*R,g(1.5,3.5),.7,[vt.i1,vt.i2,vt.i3][_%3],4,10,!1,.95)}for(let _=0;_<6;_++)E(r,o,.6,g(-2,2),g(-2,2),g(1,3),.35,vt.brassL,2,6,!0);s.t=1e9;return}const h=l&&l.scale||1,[c,d]=C(r,o),m=Tt(40*h),p=Tt(56*h),y=Math.min(1,u/.25),x=Math.PI/2*y;if(y>=1&&!s.done){s.done=!0;const[_,A]=[r,o];for(let R=0;R<6;R++)E(_,A,.75*h,g(-1.5,1.5),g(-1.5,1.5),g(.5,2),.3,vt.i4,2,3,!0)}const b=.85+.15*Math.sin(u*8);i.globalAlpha=.16*b,i.fillStyle=vt.i2;const M=p*Math.sin(x);for(let _=0;_<M;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/p)**2));i.fillRect(Tt(c-A),Tt(d-_-3),Tt(A*2),3)}for(let _=0;_<m*.5;_+=3){const A=m*Math.sqrt(Math.max(0,1-(_/(m*.5))**2));i.fillRect(Tt(c-A),Tt(d+_),Tt(A*2),3)}for(let _=0;_<32;_++){const A=_/32*Lr,R=Us(c,d,m,p,A,0),P=Math.sin(A)>0;i.globalAlpha=P?.95:.4,i.fillStyle=P?vt.i3:vt.i1,i.fillRect(Tt(R[0])-2,Tt(R[1])-1,4,3)}i.globalAlpha=.8,i.fillStyle=vt.i2;for(const _ of[.12,.3,.5,.7,.88]){const A=Math.PI*_;for(let R=0;R<=x;R+=.16){const P=Us(c,d,m,p,A,R);i.fillRect(Tt(P[0])-1,Tt(P[1])-1,2,3)}}const v=u*14|0;let w=0;for(const _ of[.42,.9])if(!(_>x))for(let A=0;A<=14;A++){const R=Math.PI*A/14,P=Us(c,d,m,p,R,_);i.globalAlpha=.9,i.fillStyle=vt.i3,i.fillRect(Tt(P[0])-2,Tt(P[1])-1,4,2),A%2===0&&(w++,i.globalAlpha=1,i.fillStyle=w%16===v%16?"#ffffff":vt.brass,i.fillRect(Tt(P[0])-1,Tt(P[1])-3,3,3))}if(y>=1){const _=Us(c,d,m,p,0,Math.PI/2);i.globalAlpha=1,i.fillStyle=vt.i0,i.fillRect(Tt(_[0])-5,Tt(_[1])-4,10,6),i.fillStyle=vt.brass,i.fillRect(Tt(_[0])-4,Tt(_[1])-3,8,4),i.fillStyle=vt.brassL,i.fillRect(Tt(_[0])-3,Tt(_[1])-3,3,1)}}})};j.oso_E=e=>{const t=e.uid,n=e.x,r=e.y,o=e.ex??e.x,i=e.ey??e.y,a=e.dur||.3,s=o-n,l=i-r,u=Math.hypot(s,l)||1,f=C(n,r),h=C(o,i),c=Math.hypot(h[0]-f[0],h[1]-f[1])||1,d=(h[0]-f[0])/c,m=(h[1]-f[1])/c,p=[],y=Math.max(2,Math.floor(u/.5));for(let x=1;x<=y;x++){const b=x/(y+1),M=x%2?1:-1;p.push({s:b,x:n+s*b-l/u*.17*M,y:r+l*b+s/u*.17*M})}T({type:"custom",layer:"ground",dur:a+2,x:n,y:r,draw(x,b){const M=b*(a+2);for(const v of p){const w=M-v.s*a;if(w<0)continue;const[_,A]=C(v.x,v.y);x.globalAlpha=Math.max(0,.7*(1-w/2)),Ul(x,Nh,_,A,3,{t:vt.e0,p:vt.e0}),x.globalAlpha*=.6,Ul(x,Nh,_-1,A-1,3,{p:vt.e1})}}}),T({type:"custom",layer:"top",dur:a+.3,x:n,y:r,draw(x,b,M){const v=b*(a+.3),w=ht(t),_=Math.min(1,v/a),A=w&&v<a?w.x:n+s*_,R=w&&v<a?w.y:r+l*_;if(v<a){if(M.n=M.n||0,M.n<30){M.n+=2;for(let V=0;V<2;V++)E(A+g(-.2,.2),R+g(-.2,.2),.1,-s/u*g(.5,1.5)+g(-.5,.5),-l/u*g(.5,1.5)+g(-.5,.5),g(.4,1.2),g(.5,.8),V?vt.e2:vt.dust,5,-.3,!1,.9)}const[P,z]=C(A,R,.45),O=P+d*26,F=z+m*26,X=-m,G=d;for(let V=0;V<3;V++){const L=V*8+v*120%8;x.globalAlpha=.9-V*.25,x.fillStyle=V?vt.dust:"#ffffff";const k=[O-d*L,F-m*L];Ha(x,k,[k[0]-d*10+X*13,k[1]-m*10+G*13],3),Ha(x,k,[k[0]-d*10-X*13,k[1]-m*10-G*13],3)}x.globalAlpha=.6,x.fillStyle=vt.i3;for(let V=0;V<4;V++){const L=(V-1.5)*9,k=14+(V*7+v*200)%12;Ha(x,[P-d*20+X*L,z-m*20+G*L],[P-d*(20+k)+X*L,z-m*(20+k)+G*L],2)}}else{if(!M.end){M.end=!0,ot(5);for(let F=0;F<14;F++){const X=Math.random()*Lr,G=g(1.5,3);E(o,i,.15,Math.cos(X)*G,Math.sin(X)*G,g(.8,2),.6,F%2?vt.dust:vt.e3,5,2,!1,.9)}}const P=(v-a)/.3,[z,O]=C(o+s/u*.5,i+l/u*.5,.45);x.globalAlpha=1-P;for(let F=0;F<8;F++){const X=F/8*Lr+.2,G=6+P*14,V=G+10*(1-P);x.fillStyle=F%2?vt.amberL:"#ffffff",Ha(x,[z+Math.cos(X)*G,O+Math.sin(X)*G*.7],[z+Math.cos(X)*V,O+Math.sin(X)*V*.7],4)}}}})};j.oso_R=e=>{const t=e.uid,n=e.x,r=e.y,o=e.radius||3.6,i=Array.from({length:8},(a,s)=>q2(s/8*Lr+g(-.2,.2),o*g(.45,.65),5));ot(10),T({type:"custom",layer:"ground",add:!0,dur:1,x:n,y:r,draw(a,s){const[l,u]=C(n,r),f=s*1;for(let h=0;h<3;h++){const c=(f-h*.13)/.62;if(c<=0||c>=1)continue;const d=oM(o)*(.15+.95*(1-(1-c)*(1-c))),m=5-h;a.globalAlpha=1-c;for(let p=0;p<56;p++){if(p%7>=5)continue;const y=p/56*Lr+h*.2,x=l+Math.cos(y)*d,b=u+Math.sin(y)*d*.5;a.fillStyle=h===0?vt.amberL:vt.amber,a.fillRect(Tt(x-m/2),Tt(b-m/2),m,m),p%7===2&&(a.fillStyle=vt.amberD,a.fillRect(Tt(x*.94+l*.06-1),Tt(b*.94+u*.06-1),3,3))}}}}),T({type:"custom",layer:"ground",dur:1.5,x:n,y:r,draw(a,s){a.globalAlpha=.8*(1-s),a.fillStyle=vt.e0;for(const l of i)V2(a,n,r,l,Math.min(1,s*7))}}),T({type:"custom",layer:"top",add:!0,dur:1.05,x:n,y:r,uid:t,draw(a,s){const l=ht(t),u=l?l.x:n,f=l?l.y:r,h=l&&l.scale||1,[c,d]=C(u,f,1.7*h+s*.5),m=s<.07?2:s<.14?3:4;a.globalAlpha=s<.1?s*10:s>.6?Math.max(0,(1-s)/.4):1,a.globalAlpha*=.85+.15*Math.sin(s*60),Ul(a,aM,c,d,m,{e:vt.amberD,i:vt.amberL,h:vt.amber,s:vt.amberL,n:"#6a3a08",y:"#ffffff",f:"#ffffff"});for(let p=0;p<3;p++){const y=34+(s*90+p*22)%66,x=1-(s*90+p*22)%66/66;a.globalAlpha=x*(s>.7?(1-s)/.3:1),a.fillStyle=vt.amberL;for(let b=-.7;b<=.71;b+=.175){const M=Math.cos(b)*y,v=Math.sin(b)*y*.8;a.fillRect(Tt(c+M)-2,Tt(d+6+v)-2,4,4),a.fillRect(Tt(c-M)-2,Tt(d+6+v)-2,4,4)}}}});for(let a=0;a<30;a++){const s=Math.random()*Lr,l=Math.sqrt(Math.random())*o*.9;E(n+Math.cos(s)*l,r+Math.sin(s)*l,0,Math.cos(s)*.4,Math.sin(s)*.4,g(2,4),g(.5,.8),[vt.e1,vt.e2,vt.e3][a%3],a%4?3:4,12,!1,.97)}for(let a=0;a<12;a++){const s=Math.random()*Lr,l=g(.3,1.2);E(n+Math.cos(s)*l,r+Math.sin(s)*l,.5,0,0,g(.8,1.6),g(.8,1.2),vt.amberL,2,-.3,!0,.98)}};De.oso=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",dur:.24,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.08),s=Tt(8+o*26),l=1-o;r.globalAlpha=l,r.fillStyle=vt.i0,r.fillRect(i-s-1,a-2,s*2+2,5),r.fillStyle=vt.dust,r.fillRect(i-s,a-1,Tt(s*.7),3),r.fillRect(i+s-Tt(s*.7),a-1,Tt(s*.7),3);const[u,f]=C(t,n,.5),h=Tt(12*(1-o));r.fillStyle=vt.i3,r.fillRect(u-h-4,f-3,8,6),r.fillRect(u+h-4,f-3,8,6),r.fillStyle=vt.i4,r.fillRect(u-2,f-6,4,12)}});for(let r=0;r<4;r++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(2,3.5),.3,vt.brassL,2,12,!0);for(let r=0;r<3;r++)E(t,n,.05,g(-1,1),g(-1,1),g(1,2),.45,vt.e2,3,10,!1)};const En="#ffffff",Un="#e6eeff",Qr="#bfe9ff",Jo="#7fdcf4",H0="#3a9ab8",nn="#fff0b4",$h="#efe0b8",Hh="#c8a878",sM="#34408a",Wh="#a9bfdc",ee=Math.round,si=Math.PI*2;function Se(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(ee(t),ee(n),r,o)}function Dl(e,t,n,r,o){e.fillStyle=o;for(let i=-r;i<=r;i+=2){const a=ee(Math.sqrt(Math.max(0,r*r-i*i)));e.fillRect(ee(t-a),ee(n+i),a*2,2)}}function Ki(e,t,n,r,o,i,a,s=1){const l=Math.cos(o)*r*i,u=Math.sin(o)*r*i,f=r*.95,h=Math.max(1,ee(2*s));e.fillStyle=a;for(let c=-r;c<=r;c+=2){const d=Math.sqrt(Math.max(0,r*r-c*c)),m=c-u,p=ee(n+c*s);if(Math.abs(m)>=f){e.fillRect(ee(t-d),p,ee(2*d),h);continue}const y=Math.sqrt(f*f-m*m),x=l-y,b=l+y;if(x>-d&&e.fillRect(ee(t-d),p,ee(Math.min(x,d)+d),h),b<d){const M=Math.max(b,-d);e.fillRect(ee(t+M),p,ee(d-M),h)}}}function lM(e,t,n,r,o,i,a){t=ee(t),n=ee(n);const s=[3,2,1,2][o],l=Math.max(1,s-1),u=r>>1;e.fillStyle=i,e.fillRect(t-u-r*s,n-2*r,r*s,2*r),e.fillRect(t+u,n-2*r,r*s,2*r),e.fillRect(t-u-r*l,n,r*l,r),e.fillRect(t+u,n,r*l,r),e.fillStyle=a,e.fillRect(t-u,n-2*r,r,3*r),e.fillRect(t-u-1,n-3*r,1,r),e.fillRect(t+u,n-3*r,1,r)}function qh(e,t,n,r,o,i,a,s,l){for(let u=-o;u<=o;u+=2){const f=r*Math.sqrt(Math.max(0,1-u*u/(o*o)));if(f<1)continue;const h=ee(t+u*i-f),c=ee(t+u*i+f),d=ee(n+u);e.globalAlpha=.45*l,e.fillStyle=a,e.fillRect(h,d,c-h,2),e.globalAlpha=.95*l,e.fillStyle=s,e.fillRect(h,d,2,2),e.fillRect(c-2,d,2,2)}}function uM(e,t,n,r,o){t=ee(t),n=ee(n),e.fillStyle=o,e.fillRect(t,n,3*r,r),e.fillRect(t+r,n+r,r,r),e.fillRect(t,n+2*r,3*r,r)}const Y2=e=>{const t=ht(e);return t&&!t.dead&&!He(t)?t:null},fM=e=>{const t=window.SIM&&window.SIM.HEROES;return t&&t[e.hero]&&t[e.hero].abil[e.key]},Xl=e=>(e=Math.min(1,Math.max(0,e))-1,1+2.9*e*e*e+1.9*e*e);Xe.polilla_A=(e,t,n,r,o,i)=>{Mt(!0);const a=Bt(),s=.65+.35*Math.sin(i*20),l=ee(5+s*3);a.globalAlpha=s,Se(a,n-l,r-1,l*2,2,Jo),Se(a,n-1,r-l,2,l*2,Jo),a.globalAlpha=1,Se(a,n-2,r-2,4,4,En);const u=i*14;Se(a,n+Math.cos(u)*8-1,r+Math.sin(u)*4-1,2,2,nn),Se(a,n-Math.cos(u)*8-1,r-Math.sin(u)*4-1,2,2,nn),Mt(!1)};De.polilla=e=>{T({type:"custom",layer:"top",add:!0,dur:.25,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.5),i=ee(10*(1-n))+2;t.globalAlpha=1-n,Se(t,r-i,o-1,i*2,2,Un),Se(t,r-1,o-i,2,i*2,Un),Se(t,r-2,o-2,4,4,En)}});for(let t=0;t<5;t++)E(e.x,e.y,.5,g(-1,1),g(-1,1),g(.2,.8),.6,t%2?nn:Qr,2,.4,!0,.9)};Xe.polilla_Q=(e,t,n,r,o,i)=>{const s=t.z||.45;n=ee(n),r=ee(r),Mt(!0);const l=Bt(),u=l.createRadialGradient(n,r,0,n,r,9*2.6);u.addColorStop(0,"rgba(190,233,255,0.55)"),u.addColorStop(1,"rgba(127,220,244,0)"),l.fillStyle=u,l.fillRect(n-9*3,r-9*3,9*6,9*6),Mt(!1),Dl(e,n,r,10,H0),Dl(e,n,r,9,Un),Ki(e,n,r,9,Math.PI*.85,.55,Wh);for(let c=0;c<3;c++){const d=i*2+c*2.1;Se(e,n+Math.cos(d)*4-1,r+Math.sin(d)*4-1,c?2:3,2,Wh)}Se(e,n-4,r-5,2,2,En);const f=Math.cos(o),h=Math.sin(o);for(let c=0;c<3;c++){const d=(i*2.2+c/3)%1,m=14+c*10;e.globalAlpha=1-d,uM(e,n-f*m,r-h*m-6-d*14,c<2?1:2,c%2?nn:Un)}e.globalAlpha=1,Math.random()<.4&&E(t.x,t.y,s,g(-.3,.3),g(-.3,.3),-.4,.6,Math.random()<.5?nn:Un,2,.5,!0,.9)};j.polilla_Q=e=>{const t=e.ux||0,n=e.uy||0;T({type:"custom",layer:"top",add:!0,dur:.35,x:e.x,y:e.y,draw(r,o){const[i,a]=C(e.x+t*.4,e.y+n*.4,.75),s=ee(14*(1-o))+2,l=ee(6*(1-o))+1;if(r.globalAlpha=1-o*.6,o<.5)Se(r,i-s,a-1,s*2,2,nn),Se(r,i-1,a-s,2,s*2,nn);else for(let u=1;u<=l;u+=2)Se(r,i+u,a+u,2,2,nn),Se(r,i-u-2,a+u,2,2,nn),Se(r,i+u,a-u-2,2,2,nn),Se(r,i-u-2,a-u-2,2,2,nn);Se(r,i-2,a-2,4,4,En);for(let u=0;u<6;u++){const f=-1.2+u*.4+o*2,h=16+u;Se(r,i+Math.cos(f)*h-1,a+Math.sin(f)*h*.6-1,2,2,u%2?nn:Un)}}});for(let r=0;r<10;r++)E(e.x+t*.4,e.y+n*.4,.75,t*g(.5,1.5)+g(-.4,.4),n*g(.5,1.5)+g(-.4,.4),g(0,.4),g(.6,1),r%2?nn:Un,2,.6,!0,.9)};j.polilla_W=e=>{if(e.type==="heal"){T({type:"custom",layer:"top",add:!0,dur:.9,x:e.x,y:e.y,draw(n,r){const[o,i]=C(e.x,e.y,1.25);n.globalAlpha=Math.min(1,r*6,(1-r)*2),Ki(n,o,i,7,-.6,.5,Un);for(let a=0;a<3;a++){const s=(r*1.6+a/3)%1;Se(n,o-10+a*10,i+s*50,2,4,a%2?Qr:En)}}});for(let n=0;n<8;n++)E(e.x+g(-.35,.35),e.y+g(-.35,.35),g(1,1.6),0,0,-g(.6,1.2),g(.7,1.1),n%2?Un:nn,2,0,!0,.98);return}if(e.type!=="healring")return;const t=e.radius||4.2;T({type:"custom",layer:"top",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){const o=Y2(e.uid),i=o?o.x:e.x,a=o?o.y:e.y,[s,l]=C(i,a,2.2),u=r*1.2,f=ee(15*Xl(u/.18));n.globalAlpha=Math.min(1,(1-r)*2.5),Ki(n,s,l,f+2,-.7,.5,Jo),Ki(n,s,l,f,-.7,.55,En);for(let h=0;h<5;h++){const c=S.T*2+h*1.26;(S.T*6+h)%2<1&&Se(n,s+Math.cos(c)*(f+10)-1,l+Math.sin(c)*(f+6)-1,2,2,nn)}}}),T({type:"custom",layer:"ground",add:!0,dur:1.2,x:e.x,y:e.y,draw(n,r){for(const[o,i]of[[1,0],[.6,.15]]){const a=Math.max(0,Math.min(1,(r-i)/(1-i)));if(a<=0)continue;const s=t*o*(.3+.7*(1-(1-a)*(1-a)));n.globalAlpha=.85*(1-a);for(let l=0;l<36;l++){const u=l/36*si,[f,h]=C(e.x+Math.cos(u)*s,e.y+Math.sin(u)*s);Se(n,f-1,h-1,l%3?2:3,2,l%2?Qr:En)}}}});for(let n=0;n<40;n++){const r=g(0,si),o=Math.sqrt(Math.random())*t*.9;E(e.x+Math.cos(r)*o,e.y+Math.sin(r)*o,g(2.2,3),g(-.15,.15),g(-.15,.15),-g(1.2,2),g(1.1,1.6),[Un,Qr,En,nn][n%4],2,.4,!0,.99)}};j.polilla_E=e=>{const t=e.dur||3;T({type:"custom",layer:"top",dur:t+.3,x:e.x,y:e.y,uid:e.uid,draw(n,r,o){const i=Y2(e.uid);if(!i)return;const a=r*o.dur;!o.end&&a>.3&&(a>t||typeof i.shield=="number"&&i.shield<=0)&&(o.end=a);const s=o.end?Math.max(0,1-(a-o.end)/.25):1;if(s<=0)return;const l=a<.22?Xl(a/.22):1,u=.85+.15*Math.sin(S.T*8),[f,h]=C(i.x,i.y,.75);for(const d of[-1,1]){const m=f+d*(9+15*l),p=h-9-3*l,y=f+d*(7+10*l),x=h+9;qh(n,y,x,10*l*u,8,.4*d,Hh,$h,s),qh(n,m,p,15*l*u,13,-.45*d,$h,Hh,s),n.globalAlpha=.9*s,l>.5&&(Dl(n,m+d*2,p-1,4,sM),Se(n,m+d*2-1,p-2,2,2,nn),Se(n,m+d*2-2,p-3,1,1,En))}Mt(!0);const c=Bt();for(let d=0;d<6;d++){const m=d%2?1:-1,p=(S.T*3+d*.37)%1;p>.3||(c.globalAlpha=(1-p/.3)*s,Se(c,f+m*(12+(d>>1)*9)*l-1,h-20+(d>>1)*10,2,2,En))}Mt(!1)}});for(let n=0;n<18;n++){const r=g(0,si),o=g(1,2.2);E(e.x,e.y,.75,Math.cos(r)*o,Math.sin(r)*o,g(.3,1.2),g(.5,.9),n%3?nn:Un,2,.5,!0,.92)}};const Vh=3.4,W0=[1,.8,.62,.45,.3,.16];let Yh=null,Kh=null,jh=[],Qh=[];function Zh(e,t,n,r,o,i,a){const s=S.T,l=Jn(o);for(let u=0;u<9;u++){const f=u/9*si+s*.45,h=Math.cos(f),c=Math.sin(f);if(Xr(h,c,0)>0!==i)continue;const d=Math.max(2,ee((4+u%3*3)*Math.sqrt(Math.max(0,1-(h-c)*(h-c)/2))));sn(t+h*r,n+c*r);const m=.75+.25*Math.sin(s*3+u*1.7),p=ee(St.x-d/2);for(let y=0;y<6;y++)e.globalAlpha=a*m*W0[y]*(i?.5:.45),e.fillStyle=y<2?En:Un,e.fillRect(p,ee(St.y-l*(y+1)/6),d,ee(l/6)+1)}}j.polilla_R=e=>{if(e.type!=="cast_spores")return;const t=e.radius||3,n=fM(e),r=n&&n.dur||4,o=10,i=t*$.HW*Math.SQRT2,a=t*$.HH*Math.SQRT2,s=Array.from({length:o},(c,d)=>({ox:g(-.6,.6)*t,oy:g(-.6,.6)*t,w:g(.8,1.6),p:g(0,si),z:g(.6,2.4),ph:d}));let l=0;const u=pi(e,r),f=()=>S.T-u.t0,h=c=>Math.min(1,f()/.25,c/.4);T({type:"custom",layer:"ground",dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=Mn(u);if(p<=0){m.t=m.dur+1;return}const y=h(p),x=Xl(f()/.3),b=Vh*Math.min(1,f()/.4);sn(e.x,e.y);const M=St.x,v=St.y,w=he(t)*x;Yh!==c&&(Yh=c,jh=[{u0:0,fill:Ct(c,H0,3),a:.5},{u0:.7,fill:Ct(c,Jo,5),a:.5},{u0:.92,fill:Ct(c,Qr,9),a:.55}]),Sr(c,M,v,w,w,Jn(b),!1,jh,W0,y),Zh(c,e.x,e.y,t*x,b,!1,y),fo(u,e.x,e.y,t*1.1,12577279,.7*y)}}),T({type:"custom",layer:"ground",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=Mn(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),[b,M]=C(e.x,e.y);c.globalAlpha=.13*x,c.fillStyle=Jo;for(let v=-a;v<=a;v+=2){const w=i*Math.sqrt(Math.max(0,1-v*v/(a*a)));c.fillRect(ee(b-w),ee(M+v),ee(w*2),2)}c.globalAlpha=.4*x,Ki(c,b,M,ee(t*30),-.5,.5,Qr,.5),c.globalAlpha=.85*x;for(let v=0;v<40;v++){const w=v/40*si+y*.35,[_,A]=C(e.x+Math.cos(w)*t,e.y+Math.sin(w)*t);Se(c,_-1,A-1,2,2,v%4?Qr:En)}}}),T({type:"custom",layer:"top",add:!0,dur:r+1,x:e.x,y:e.y,draw(c,d,m){const p=Mn(u);if(p<=0){m.t=m.dur+1;return}const y=f(),x=h(p),b=Xl(y/.3),M=Vh*Math.min(1,y/.4);sn(e.x,e.y);const v=St.x,w=St.y,_=he(t)*b;Kh!==c&&(Kh=c,Qh=[{u0:0,fill:Ct(c,H0,2),a:.4},{u0:.72,fill:Ct(c,Jo,3),a:.45},{u0:.93,fill:Ct(c,Un,7),a:.55}]),Sr(c,v,w,_,_,Jn(M),!0,Qh,W0,x),Zh(c,e.x,e.y,t*b,M,!0,x),c.globalAlpha=x*.85,c.fillStyle=Qr,Zr(c,e.x,e.y,M,t*b,64,2,y*.5,0),c.fillStyle=En,Zr(c,e.x,e.y,M,t*b,16,3,-y*.8,1),sn(e.x,e.y,M+.45+Math.sin(y*1.6)*.06),c.globalAlpha=x*.35,Dl(c,St.x,St.y,26,Jo),c.globalAlpha=x,Ki(c,St.x,St.y,18,.9,.55,En);for(const A of s){const R=y*A.w+A.p,P=e.x+A.ox+Math.cos(R)*.6+Math.sin(R*2.3)*.2,z=e.y+A.oy+Math.sin(R)*.6,[O,F]=C(P,z,A.z+Math.sin(y*1.7+A.p)*.4);c.globalAlpha=x*Math.min(1,y/.4),lM(c,O,F,2,((S.T*14|0)+A.ph)%4,A.ph%3?Un:En,Qr)}if(l<50&&Math.random()<.3){l++;const A=g(0,si),R=Math.sqrt(Math.random())*t;E(e.x+Math.cos(A)*R,e.y+Math.sin(A)*R,g(2.5,3.5),0,0,-g(.8,1.4),g(1.5,2.2),l%3?Un:nn,2,0,!0,.99)}}}),ot(2)};const ut=Math.round,hn=Math.PI*2,_o=e=>e*$.HW*Math.SQRT2,rt={ink:"#120a22",inkP:"#2e1650",inkV:"#5a2f8a",inkL:"#9a6ad8",abyss:"#040209",navy:"#0e1a3a",deep:"#1c2a5a",bio:"#4af0e0",bioL:"#c8fff8",mag:"#ff4fa8",skin:"#b03a8a",skinD:"#4a1042",skinL:"#e878c0",sucker:"#ffc8e0",eye:"#ffd84a",eyeD:"#c88a1a",water:"#2a7a9a",foam:"#bff6ff",rock:"#5a5470",rockL:"#9a90b0"},tc=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function K2(e,t,n,r){r=Math.max(1,ut(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(ut(t[0]+(n[0]-t[0])*s/i-a),ut(t[1]+(n[1]-t[1])*s/i-a),r,r)}function pn(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(ut(t-l),ut(n+a),Math.max(1,ut(l*2)),i)}}function to(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*hn;e.fillRect(ut(t+Math.cos(u)*r-i/2),ut(n+Math.sin(u)*r*.5-i/2),i,i)}}function cM(e,t,n,r=99){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function gs(e,t,n,r){const o=t.length-1;if(!(o<1)){for(let i=0;i<3;i++){e.fillStyle=i===0?rt.skinD:i===1?rt.skin:rt.skinL;for(let a=0;a<=o;a++){const s=n+(r-n)*a/o,l=ut(i===0?s+3:i===1?s:Math.max(1,s*.35)),u=i===2?-s*.25:0;e.fillRect(ut(t[a][0]-l/2),ut(t[a][1]+u-l/2),l,l)}}for(let i=2;i<o-1;i+=3){const a=n+(r-n)*i/o,s=Math.max(2,ut(a*.4)),l=ut(t[i][0]),u=ut(t[i][1]+a*.3);e.fillStyle=rt.sucker,e.fillRect(l-(s>>1),u-(s>>1),s,s),s>2&&(e.fillStyle=rt.skinD,e.fillRect(l,u,1,1))}}}function j2(e,t,n,r=1){const o=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=Math.max(4,Math.ceil(a/4)),f=[];for(let m=0;m<=u;m++){const p=m/u,y=Math.sin(p*7-n*14)*7*p;f.push([e[0]+o*p+s*y,e[1]+i*p+l*y])}let[h,c]=f[u],d=Math.atan2(i,o);for(let m=1;m<=6;m++){d+=.6*r;const p=3.2*(1-m/8);h+=Math.cos(d)*p,c+=Math.sin(d)*p,f.push([h,c])}return f}j.pulpo_Q=e=>{const t=e.x,n=e.y,r=Math.atan2(e.uy||0,e.ux||1),o=Math.min(1.1,e.angle||.75),i=e.range||3.6,a=Array.from({length:22},(l,u)=>({a:r+g(-.9,.9)*o,d:i*g(.45,1),t0:g(0,.12),w:g(0,6),sz:g(6,10),bio:u%4===0}));T({type:"custom",layer:"top",dur:.62,x:t,y:n,draw(l,u){const f=u*.62;for(const h of a){const c=(f-h.t0)/.42;if(c<0||c>1.15)continue;const d=1-Math.pow(1-Math.min(1,c),2),m=h.d*d,p=Math.sin(d*hn+h.w)*.2*d,y=t+Math.cos(h.a)*m-Math.sin(h.a)*p,x=n+Math.sin(h.a)*m+Math.cos(h.a)*p,[b,M]=C(y,x,.5*(1-d)+.3*Math.sin(d*Math.PI)),v=h.sz*(1-.4*d);l.globalAlpha=c>1?(1.15-c)/.15:1,l.fillStyle=rt.ink,pn(l,b,M,v,v*.75,2),l.fillStyle=rt.inkV,pn(l,b-v*.3,M-v*.3,v*.4,v*.3,1),h.bio&&(l.fillStyle=rt.bio,l.fillRect(ut(b+v*.2),ut(M),2,2))}}});const s=a.slice(0,9);T({type:"custom",layer:"ground",dur:2.6,x:t,y:n,draw(l,u,f){for(const h of s){const c=f.t-h.t0-.42;if(c<0)continue;const d=Math.min(1,c*10),m=Math.min(1,(2.6-f.t)/.6),[p,y]=C(t+Math.cos(h.a)*h.d,n+Math.sin(h.a)*h.d),[x,b]=C(t,n),M=x-p,v=b-y,w=Math.hypot(M,v)||1;l.globalAlpha=.85*m;for(let A=0;A<4;A++){const R=(h.sz+2)*(1-A*.22)*d;l.fillStyle=A?rt.inkP:rt.ink,pn(l,p+M/w*A*7*d,y+v/w*A*4*d,R,R*.5,2)}const _=.5+.5*Math.sin(S.T*4+h.w*3);l.globalAlpha=m*_,l.fillStyle=rt.bio,l.fillRect(ut(p-3),ut(y-1),2,2),l.fillRect(ut(p+4),ut(y+1),2,1),h.bio&&(l.fillStyle=rt.bioL,l.fillRect(ut(p),ut(y-2),1,1))}}});for(let l=0;l<12;l++){const u=r+g(-1,1)*o,f=g(2,4.5);E(t+Math.cos(u)*.4,n+Math.sin(u)*.4,.5,Math.cos(u)*f,Math.sin(u)*f,g(.5,1.8),g(.35,.6),l%3?rt.ink:rt.bio,l%3?3:2,7,l%3===0,.93)}};const ki=[];function hM(e){let t=null,n=1.3;for(const r of ki){if(r.done||S.T-r.t>1.2||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}const Q2=e=>C(e.x,e.y,.35);function Z2(e,t,n){T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(r,o){const i=ht(e);if(!i)return;const a=Q2(i),s=C(t,n,.45),l=1-o*o;l<.05||gs(r,j2(a,[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l],S.T,1+o*2),10,3)}})}j.pulpo_W=e=>{if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let o=ki.length-1;o>=0;o--)S.T-ki[o].t>3&&ki.splice(o,1);const r={uid:e.uid,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1};ki.push(r),T({type:"custom",layer:"ground",dur:1.3,x:e.x,y:e.y,draw(o,i,a){if(r.done){a.t=a.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,Z2(r.uid,r.lx,r.ly),a.t=a.dur+1)}});for(let o=0;o<8;o++)E(e.x+t*.3,e.y+n*.3,.3,t*g(.5,1.5)+g(-.6,.6),n*g(.5,1.5)+g(-.6,.6),g(.5,1.5),.4,o%2?rt.sucker:rt.skin,2,5,!1)};Xe.pulpo_W=(e,t,n,r,o,i)=>{const a=hM(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=S.T);const s=a?ht(a.uid):t.src||cM(t.x,t.y,"pulpo",9),l=s&&!s.dead?Q2(s):[n-Math.cos(o)*70,r-Math.sin(o)*70];gs(e,j2(l,[n,r],i),11,3),Math.random()<.25&&E(t.x,t.y,.4,0,0,-.3,.4,rt.bio,2,3,!0)};j.pulpo_W_hit=e=>{const t=e.x,n=e.y,r=e.uid?ht(e.uid):null,o=r?r.team:null;let i=null,a=1.3;for(const c of S.game?S.game.units:[]){if(c.dead||o&&c.team===o||r&&c===r||c.kind==="tower"||c.kind==="nexus")continue;const d=Math.hypot(c.x-t,c.y-n);d<a&&(a=d,i=c)}const s=i?i.id:0,l=1.4,u=Math.random()<.5?-1:1;let f=null;for(const c of ki)c.uid===e.uid&&S.T-c.t<1.5&&(!f||c.t>f.t)&&(f=c);f&&!f.done&&(f.done=!0,Z2(f.uid,t,n));const h=c=>{const d=s?ht(s):null;return d&&!d.dead?[d.x,d.y]:[c.x,c.y]};T({type:"custom",layer:"ground",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),[x,b]=C(p,y),M=Math.min(1,m.t/.12),v=d>.8?(1-d)/.2:1;c.globalAlpha=.9*v,c.fillStyle=rt.ink,pn(c,x,b,30*M,13*M,2),c.fillStyle=rt.inkP,pn(c,x,b,20*M,8*M,2),c.fillStyle=rt.bio,to(c,x,b,30*M,18,2,S.T*2,3)}}),T({type:"custom",layer:"top",dur:l,x:t,y:n,draw(c,d,m){const[p,y]=h(m),x=d>.8?(1-d)/.2:1,b=Math.min(1,m.t/.18),M=S.T;c.globalAlpha=x;const v=[];for(let w=0;w<=16;w++){const _=w/16,A=_*1.15*b,R=Math.max(0,_-.6)/.4,[P,z]=C(p,y,A);v.push([P+u*(20-R*26)+Math.sin(M*5+_*4)*2,z-R*6])}gs(c,v,12,3);for(let w=0;w<2;w++){const[,_]=C(p,y,(.22+w*.3)*b),[A]=C(p,y),R=19-2*Math.sin(M*9+w*2),P=1+.08*Math.sin(M*9);for(let z=0;z<=12;z++){const O=.1*Math.PI+z/12*.8*Math.PI,F=A+Math.cos(O)*R*P,X=_+Math.sin(O)*7;c.fillStyle=rt.skinD,c.fillRect(ut(F)-4,ut(X)-4,8,8),c.fillStyle=rt.skin,c.fillRect(ut(F)-3,ut(X)-3,6,5),z%3===1&&(c.fillStyle=rt.sucker,c.fillRect(ut(F)-1,ut(X)+1,3,2))}}}});for(let c=0;c<10;c++){const d=Math.random()*hn,m=g(1,2.4);E(t,n,.15,Math.cos(d)*m,Math.sin(d)*m,g(1,2.5),.5,c%3?rt.ink:rt.bio,3,9,c%3===0)}ot(tc(e)?3:1)};function dM(e,t,n,r,o,i){if(r<.05)return;const a=[];for(let s=0;s<=9;s++){const l=s/9,[u,f]=C(t,n,l*r*.75),h=Math.max(0,l-.55)/.45;a.push([u+Math.sin(o*3+i+l*3)*4*l+h*h*10,f+h*h*8])}gs(e,a,8,2)}j.pulpo_E=e=>{if(!e.type.startsWith("cast_"))return;const t=e.x,n=e.y,r=e.radius||2.4,o=3,i=[0,1,2,3].map(s=>({a:s/4*hn+g(-.3,.3),d:g(.45,.75),ph:Math.random()*hn})),a=s=>Math.min(1,s/.25,(o-s)/.35);T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),h=Math.min(1,u.t/.3),[c,d]=C(t,n),m=_o(r)*h,p=u.t;s.globalAlpha=.6*f,s.fillStyle=rt.navy,pn(s,c,d,m,m*.5,3),s.globalAlpha=.65*f,s.fillStyle=rt.deep,pn(s,c,d,m*.62,m*.31,3);for(let y=0;y<3;y++)for(let x=0;x<28;x++){const b=(x/28+p*.55)%1,M=1-b,v=y/3*hn+p*2.2+b*5,w=c+Math.cos(v)*m*(.08+.9*M),_=d+Math.sin(v)*m*(.08+.9*M)*.5;s.globalAlpha=f*(.35+.65*b),s.fillStyle=M>.6?rt.water:M>.3?rt.bio:rt.bioL;const A=M>.5?4:3;s.fillRect(ut(w)-(A>>1),ut(_)-1,A,2+(M>.5?1:0))}s.globalAlpha=.9*f,s.fillStyle=rt.foam,to(s,c,d,m*.97,56,3,p*1.4,4),s.fillStyle=rt.water,to(s,c,d,m*.85,40,2,p*1.9,3),s.globalAlpha=f,s.fillStyle=rt.inkV,pn(s,c,d,19*h,9*h,1),s.fillStyle=rt.abyss,pn(s,c,d,15*h,7*h,1)}}),T({type:"custom",layer:"top",dur:o,x:t,y:n,draw(s,l,u){const f=Math.max(0,a(u.t)),h=S.T;s.globalAlpha=f;for(const c of i){const d=c.a+u.t*1.6,m=Math.max(0,Math.sin(u.t*2.2+c.ph))*1.1;dM(s,t+Math.cos(d)*r*c.d,n+Math.sin(d)*r*c.d,m,h,c.ph)}for(let c=0;c<6;c++){const d=u.t*1.5+c/6,m=Math.floor(d),p=d-m,y=W(m*11+c)*hn,x=r*.3*W(m*5+c*7),[b,M]=C(t+Math.cos(y)*x,n+Math.sin(y)*x,p*.9),v=2+ut(p*3);s.globalAlpha=f*(1-p),s.fillStyle=rt.foam,s.fillRect(ut(b)-v,ut(M),1,2),s.fillRect(ut(b)+v,ut(M),1,2),s.fillRect(ut(b),ut(M)-v,2,1),s.fillRect(ut(b),ut(M)+v,2,1)}}}),T({type:"custom",layer:"ground",dur:.4,x:t,y:n,draw(s,l){const[u,f]=C(t,n);s.globalAlpha=1-l,s.fillStyle=rt.foam,to(s,u,f,_o(r)*(.3+l*.9),40,4)}});for(let s=0;s<16;s++){const l=s/16*hn;E(t+Math.cos(l)*r*.8,n+Math.sin(l)*r*.8,.1,-Math.sin(l)*2,Math.cos(l)*2,g(1,2.5),.5,s%3?rt.foam:rt.bio,3,8,s%3===0)}};const q0=new Map;function Fa(e,t,n){const r=ht(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.25);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function mM(e,t,n,r,o){const a=10*r;if(a<1){e.fillStyle=rt.inkL,e.fillRect(ut(t-26),ut(n),26*2,2);return}for(let l=-a;l<a;l+=2){const u=26*Math.sqrt(Math.max(0,1-Math.pow((l+1)/a,2)));e.fillStyle=rt.inkL,e.fillRect(ut(t-u-2),ut(n+l),ut(u*2+4),2),e.fillStyle=rt.eyeD,e.fillRect(ut(t-u),ut(n+l),ut(u*2),2)}const s=Math.sin(o*.8)*6;e.fillStyle=rt.eye,pn(e,t+s,n,Math.min(11,26),Math.min(9,a),2),e.fillStyle=rt.abyss,e.fillRect(ut(t+s-8),ut(n-2),16,Math.max(2,ut(5*r))),e.fillStyle="#ffffff",e.fillRect(ut(t+s-6),ut(n-Math.min(6,a-1)),3,2)}const Hr=2.5,gn=.5,qo=.84,pM=[1,.9,.75,.6,.45],yM=[.85,.75,.62,.5,.38];let Yu=null,Ku=null,Jh=null,td=null;const ed=e=>1-(1-e)*(1-e);function nd(e,t,n,r,o,i,a,s){if(o<.05)return;const l=r*gn,u=r*(gn+(qo-gn)*Math.min(1,o/Hr)),f=(u-l)/o;for(let h=0;h<14;h++){const c=h/14*hn;for(let d=0;d<18;d++){const m=1-d/18,p=(m*2.6+i*1.4+h*.37)%1;if(p>.5)continue;const y=c+i*(2.6-1.3*m)+m*2.4,x=Math.cos(y),b=Math.sin(y),M=l+(u-l)*m;Xr(x,b,-f)>0===s&&(sn(t+x*M,n+b*M,m*o),e.globalAlpha=a*(.45+.55*(1-p*2))*(s?.9:.7),e.fillStyle=m<.3?rt.mag:m<.65?rt.bio:rt.water,e.fillRect(ut(St.x)-3,ut(St.y)-1,m<.3?4:6,3))}}}function gM(e){const t={ended:!1,endT:0};q0.set(e.uid+"_"+e.key,t);const n=e.uid,r=e.x,o=e.y,i=e.radius||3.6,a=(e.dur||3)+.5,s=Array.from({length:44},()=>({a:Math.random()*hn,off:Math.random(),sp:g(.35,.6)})),l=Array.from({length:8},()=>({a:Math.random()*hn,off:Math.random(),sz:ut(g(4,7))})),u=[0,1,2,3,4].map(h=>({a:h/5*hn+g(-.2,.2),ph:Math.random()*hn}));T({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(h,c,d){const m=Fa(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=C(r,o),b=_o(i)*p;h.globalAlpha=.4*m,h.fillStyle=rt.inkP,pn(h,y,x,b*.95,b*.475,3),h.globalAlpha=.7*m,h.fillStyle=rt.ink,pn(h,y,x,b*.52,b*.26,3),h.globalAlpha=m,h.fillStyle=rt.abyss,pn(h,y,x,b*.27,b*.135,2);for(const M of s){const v=(M.off+d.t*M.sp)%1,w=1-v,_=b*(.27+.73*w),A=M.a+v*v*4+d.t*.8,R=y+Math.cos(A)*_,P=x+Math.sin(A)*_*.5,z=y+Math.cos(A-.14)*_*1.04,O=x+Math.sin(A-.14)*_*.52;h.globalAlpha=m*(.3+.7*v),h.fillStyle=w>.6?rt.water:w>.3?rt.bio:rt.mag,K2(h,[z,O],[R,P],w>.5?2:3)}h.globalAlpha=.8*m,h.fillStyle=rt.inkV,to(h,y,x,b,64,3,-d.t*.6,4)}});const f={nl:0};T({type:"custom",layer:"ground",dur:a,x:r,y:o,draw(h,c,d){const m=Fa(t,n,d);if(m<=0)return;const p=ed(Math.min(1,d.t/.55))*(t.ended?m:1);sn(r,o);const y=St.x,x=St.y,b=Jn(Hr*p);(!Yu||Jh!==h)&&(Jh=h,Yu=[{u0:0,fill:Ct(h,rt.deep,11),a:.7},{u0:.45,fill:Ct(h,rt.water,10),a:.7},{u0:.78,fill:Ct(h,rt.bio,9),a:.7},{u0:.93,fill:Ct(h,rt.bioL,12),a:.75}]),Sr(h,y,x,he(i*gn),he(i*(gn+(qo-gn)*p)),b,!1,Yu,pM,m),nd(h,r,o,i,Hr*p,d.t,m,!1),h.globalAlpha=.9*m,h.fillStyle=rt.foam,Zr(h,r,o,Hr*p,i*(gn+(qo-gn)*p),110,4,-d.t*1.3,-1),h.fillStyle=rt.water,Zr(h,r,o,Hr*p-.08,i*(gn+(qo-gn)*p)*.97,60,3,-d.t*1.9,-1),fo(f,r,o,i*1.05,4911328,.55*m)}}),T({type:"custom",layer:"top",add:!0,dur:a,x:r,y:o,draw(h,c,d){const m=Fa(t,n,d);if(m<=0)return;const p=Math.min(1,d.t/.4),[y,x]=C(r,o,.04),b=_o(i)*.28*p,M=S.T;for(let v=0;v<44;v++){const w=v/44*hn+M*2.5,_=.6+.4*Math.sin(M*20+v*1.7);h.globalAlpha=m*_,h.fillStyle=v%2?rt.bio:rt.mag,h.fillRect(ut(y+Math.cos(w)*b)-1,ut(x+Math.sin(w)*b*.5)-1,3,3)}h.globalAlpha=m*.45,h.fillStyle=rt.bioL;for(let v=0;v<18;v++){const w=Math.PI+v/17*Math.PI;h.fillRect(ut(y+Math.cos(w)*b*1.15),ut(x-14+Math.sin(w)*b*.35),2,2)}}}),T({type:"custom",layer:"top",dur:a,x:r,y:o,draw(h,c,d){const m=Fa(t,n,d);if(m<=0)return;const p=S.T,y=Math.min(1,d.t/.5)*(t.ended?m:1);h.globalAlpha=m;for(const w of l){const _=(w.off+d.t*.4)%1,A=1-_,R=w.a+_*5,[P,z]=C(r+Math.cos(R)*i*.95*A,o+Math.sin(R)*i*.95*A,.05+.35*Math.sin(_*Math.PI)),O=Math.max(2,ut(w.sz*(.35+.65*A)));h.fillStyle=rt.ink,h.fillRect(ut(P)-(O>>1)-1,ut(z)-(O>>1)-1,O+2,O+2),h.fillStyle=rt.rock,h.fillRect(ut(P)-(O>>1),ut(z)-(O>>1),O,O),h.fillStyle=rt.rockL,h.fillRect(ut(P)-(O>>1),ut(z)-(O>>1),Math.max(1,O>>1),1)}const x=u.map(w=>({t:w,a:w.a+d.t*.3})).sort((w,_)=>Math.cos(w.a)+Math.sin(w.a)-(Math.cos(_.a)+Math.sin(_.a)));for(const{t:w,a:_}of x){const A=[];for(let R=0;R<=18;R++){const P=R/18,z=i*(.92-.42*P*P),O=_+Math.sin(p*2+w.ph+P*3)*.12*P,F=Math.sin(P*Math.PI*.8)*1.9*y-Math.max(0,P-.8)*1.2*y;A.push(C(r+Math.cos(O)*z,o+Math.sin(O)*z,Math.max(0,F)))}gs(h,A,15*y+2,3)}const b=t.ended?0:Math.min(1,Math.max(0,(d.t-.15)/.35)),[M,v]=C(r,o,.3);mM(h,M,v,b,p)}}),T({type:"custom",layer:"top",dur:a,x:r,y:o,draw(h,c,d){const m=Fa(t,n,d);if(m<=0)return;const p=ed(Math.min(1,d.t/.55))*(t.ended?m:1);sn(r,o);const y=St.x,x=St.y,b=Jn(Hr*p);(!Ku||td!==h)&&(td=h,Ku=[{u0:0,fill:Ct(h,rt.water,4),a:.55},{u0:.5,fill:Ct(h,rt.water,6),a:.6},{u0:.8,fill:Ct(h,rt.bio,8),a:.65},{u0:.93,fill:Ct(h,rt.bioL,12),a:.75}]),Sr(h,y,x,he(i*gn),he(i*(gn+(qo-gn)*p)),b,!0,Ku,yM,m),nd(h,r,o,i,Hr*p,d.t,m,!0),h.globalAlpha=m,h.fillStyle=rt.foam,Zr(h,r,o,Hr*p,i*(gn+(qo-gn)*p),110,4,-d.t*1.3,1),h.fillStyle=rt.bioL,Zr(h,r,o,Hr*p+.04,i*(gn+(qo-gn)*p)*.98,24,2,d.t*2.1,1)}}),ot(tc(e)?6:2)}j.pulpo_R=e=>{if(e.type==="channel"){gM(e);return}const t=e.x,n=e.y,r=e.radius||3.6;if(e.type==="channel_tick"){T({type:"custom",layer:"ground",dur:.45,x:t,y:n,draw(o,i){const[a,s]=C(t,n),l=1-i*i;o.globalAlpha=.4+.6*i,o.fillStyle=rt.mag,to(o,a,s,_o(r)*(.25+.75*l),48,3,i*3),o.fillStyle=rt.bioL,to(o,a,s,_o(r)*(.22+.7*l),24,2,-i*2)}});for(let o=0;o<8;o++){const i=Math.random()*hn,a=r*g(.6,1);E(t+Math.cos(i)*a,n+Math.sin(i)*a,.2,-Math.cos(i)*a*1.6,-Math.sin(i)*a*1.6,.3,.55,o%2?rt.inkV:rt.bio,3,0,o%2===0,.97)}return}if(e.type==="channel_end"){const o=q0.get(e.uid+"_"+e.key);if(o&&!o.ended&&(o.ended=!0,o.endT=S.T),q0.delete(e.uid+"_"+e.key),e.kind!=="done"){for(let i=0;i<12;i++)E(t+g(-.6,.6),n+g(-.6,.6),.2,g(-1,1),g(-1,1),g(.5,1.5),.6,i%2?rt.ink:rt.inkV,4,2,!1);return}T({type:"custom",layer:"top",add:!0,dur:.5,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.3);if(a<.35){const u=ut(30*(1-a/.35))+2;i.fillStyle=rt.bioL,i.fillRect(s-u,l-1,u*2,3),i.fillRect(s-1,l-u,3,u*2)}else{const u=(a-.35)/.65;i.globalAlpha=1-u,i.fillStyle=rt.mag,to(i,s,l+20,_o(r)*u,56,4),i.fillStyle=rt.bio,to(i,s,l+20,_o(r)*u*.8,40,3)}}});for(let i=0;i<26;i++){const a=Math.random()*hn,s=g(2,5);E(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,g(1.5,3.5),g(.5,.9),[rt.ink,rt.inkV,rt.bio,rt.mag][i%4],i%3?3:4,9,i%4>1,.94)}ot(tc(e)?8:3)}};Xe.pulpo_A=(e,t,n,r,o,i)=>{const a=7+Math.sin(i*18)*1.2,s=Math.cos(o),l=Math.sin(o);e.fillStyle=rt.ink,pn(e,n-s*11,r-l*11,3,3,1),pn(e,n-s*18,r-l*18,2,2,1),e.fillStyle=rt.ink,pn(e,n,r,a+1,a*.8+1,2),e.fillStyle=rt.inkV,pn(e,n,r,a-1,a*.8-1,2),e.fillStyle=rt.inkL,e.fillRect(ut(n-3),ut(r-4),3,2),e.fillStyle=rt.bio,e.fillRect(ut(n+2),ut(r+1),2,2),Math.random()<.3&&E(t.x,t.y,t.z||.45,0,0,-.2,.35,rt.ink,2,5,!1)};De.pulpo=e=>{const t=e.x,n=e.y,r=Math.random()*hn;T({type:"custom",layer:"top",dur:.5,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.45),l=Math.min(1,i*8);o.globalAlpha=i<.5?1:(1-i)*2,o.fillStyle=rt.ink,pn(o,a,s,9*l,7*l,2);for(let u=0;u<6;u++){const f=r+u/6*hn,h=(u%2?13:19)*l;o.fillStyle=rt.ink,K2(o,[a,s],[a+Math.cos(f)*h,s+Math.sin(f)*h*.75],4),o.fillStyle=rt.inkV,o.fillRect(ut(a+Math.cos(f)*(h+4))-2,ut(s+Math.sin(f)*(h+4)*.75)-2+i*10,4,4)}o.fillStyle=rt.bio,o.fillRect(ut(a-3),ut(s-2),2,2),o.fillRect(ut(a+4),ut(s+2),2,2)}});for(let o=0;o<6;o++)E(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(.8,2),.4,o%3?rt.ink:rt.bio,2,8,o%3===0)};const kt=Math.round,Ur=Math.PI*2,_t={ink:"#120c1a",inkP:"#1e1230",deep:"#1f3a2c",moss:"#3f7a3a",pad:"#6fbf4a",padL:"#a8e070",eye:"#ffe14a",pink:"#ff8ad0",pinkL:"#ffd6ee",water:"#4fb8a8",waterD:"#2a7a78",foam:"#e0fff4",mud:"#5a5034",smokeA:"#5e6e58",smokeB:"#7d8c6c",smokeC:"#a2ae8e"},ju=e=>e*$.HW*Math.SQRT2;function eo(e,t,n,r){r=Math.max(1,kt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(kt(t[0]+(n[0]-t[0])*s/i-a),kt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function ji(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(kt(t-l),kt(n+a),Math.max(1,kt(l*2)),i)}}function V0(e,t,n,r,o,i){const a=t[0].length,s=t.length,l=kt(n-a*o/2),u=kt(r-s*o/2);for(const f in i){e.fillStyle=i[f];for(let h=0;h<s;h++)for(let c=0;c<a;c++)t[h][c]===f&&e.fillRect(l+c*o,u+h*o,o,o)}}function ga(e,t,n,r,o,i,a=0,s=0){for(let l=0;l<o;l++){if(s&&l%s===0)continue;const u=a+l/o*Ur;e.fillRect(kt(t+Math.cos(u)*r-i/2),kt(n+Math.sin(u)*r*.5-i/2),i,i)}}const Ea=new Map;function xM(e){if(Ea.has(e))return!1;if(Ea.size>300)for(const[t,n]of Ea)S.T-n>4&&Ea.delete(t);return Ea.set(e,S.T),!0}function MM(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.55)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||He(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const rd=["..ggggg..",".gggvggg.","ggggv....",".gggvggg.","..ggggg.."],bM=["...p...",".p.P.p.","pPPyPPp",".pPPPp.","..ggg.."];function J2(e,t,n,r){V0(e,rd,t+1,n+1,r,{g:_t.deep,v:_t.deep}),V0(e,rd,t,n,r,{g:_t.pad,v:_t.moss})}function vM(e,t){const n=Math.random()*6;T({type:"custom",layer:"ground",dur:.6,x:e,y:t,draw(r,o){const[i,a]=C(e,t);r.globalAlpha=Math.max(0,1-o*o),r.fillStyle=_t.waterD,ga(r,i,a,8+o*14,10,2,n,3),J2(r,i,a+kt(Math.sin(o*9+n)),o<.55?2:1)}})}function SM(e,t,n,r){const o=Math.cos(r),i=Math.sin(r),a=l=>[t+o*l,n+i*l];e.fillStyle=_t.ink,eo(e,a(-11),a(11),5),e.fillStyle=_t.moss,eo(e,a(-8),a(-1),3),e.fillStyle="#d8e2ea",eo(e,a(0),a(8),3),e.fillStyle="#ffffff",eo(e,a(7),a(11),2);const s=a(-11);e.fillStyle="#c8a040",e.fillRect(kt(s[0]-2),kt(s[1]-2),4,4),e.fillStyle=_t.ink,e.fillRect(kt(s[0]-1),kt(s[1]-1),2,2)}function wM(e,t){T({type:"custom",layer:"ground",dur:.45,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=_t.foam,ga(n,o,i,6+r*26,14,3,r*2,4),n.fillStyle=_t.water,ga(n,o,i,3+r*16,10,2)}}),T({type:"custom",layer:"top",add:!0,dur:.16,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.5),a=kt(12*(1-r))+2;n.fillStyle=_t.padL,n.fillRect(o-a,i-1,a*2,3),n.fillRect(o-1,i-a,3,a*2),n.fillStyle="#ffffff",n.fillRect(o-2,i-2,4,4)}});for(let n=0;n<10;n++){const r=Math.random()*Ur,o=g(.8,2);E(e,t,.45,Math.cos(r)*o,Math.sin(r)*o,g(1.5,3),.5,n%3?_t.water:_t.padL,2,9,!1,.95)}}const La=new Map;function _M(e){let t=La.get(e.id);if(!t&&(t={p:[],drop:0,seen:S.T},La.set(e.id,t),La.size>40))for(const[n,r]of La)S.T-r.seen>2&&La.delete(n);return t.seen=S.T,t}j.rana_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45;T({type:"custom",layer:"top",add:!0,dur:.2,x:r,y:o,draw(i,a){const[s,l]=C(r,o,.55),u=kt(9*(1-a))+2;i.fillStyle=_t.pad;for(let f=-u;f<=u;f+=2){const h=u-Math.abs(f);i.fillRect(s-h,l+f,h*2+1,2)}i.fillStyle="#ffffff",i.fillRect(s-u-3,l,u*2+6,1),i.fillRect(s,l-u-3,1,u*2+6)}});for(let i=0;i<9;i++)E(r,o,.5,t*g(2,4)+g(-.7,.7),n*g(2,4)+g(-.7,.7),g(.6,1.6),.4,i%2?_t.water:_t.padL,2,6,!1,.9)};Xe.rana_Q=(e,t,n,r,o,i)=>{const a=t.z||.45,s=_M(t);s.p.unshift([t.x,t.y]),s.p.length>7&&(s.p.length=7),i-s.drop>.065&&(s.drop=i,vM(t.x,t.y)),Mt(!0);const l=Bt();for(let u=1;u<s.p.length;u++)l.globalAlpha=.75*(1-u/s.p.length),l.fillStyle=u<3?_t.padL:_t.pad,eo(l,C(s.p[u-1][0],s.p[u-1][1],a),C(s.p[u][0],s.p[u][1],a),Math.max(2,7-u));l.globalAlpha=1,Mt(!1),SM(e,n,r,i*26);for(const u of MM(t))xM("rq"+t.id+":"+u.id)&&wM(u.x,u.y)};function AM(e,t,n){const r=Array.from({length:5},(i,a)=>({a:a/5*Ur+g(-.3,.3),d:n*g(.45,.8),ph:Math.random()*6})),o=Array.from({length:12},(i,a)=>({a:a/12*Ur,h:g(26,44),w:Math.random()<.5?4:6}));T({type:"custom",layer:"ground",dur:1.1,x:e,y:t,draw(i,a,s){if(!s.fired){s.fired=!0,ot(4),Wo({type:"wet",x:e,y:t,r:n*.9,dur:3});for(let h=0;h<34;h++){const c=Math.random()*Ur,d=g(1,3.2);E(e+Math.cos(c)*.3,t+Math.sin(c)*.3,.15,Math.cos(c)*d,Math.sin(c)*d,g(2.5,5),g(.5,.8),h%4?_t.foam:_t.water,3,12,!1,.97)}for(let h=0;h<6;h++)E(e+g(-.6,.6),t+g(-.6,.6),.1,g(-.4,.4),g(-.4,.4),g(1,2),.7,_t.mud,4,8,!1)}const[l,u]=C(e,t),f=ju(n);i.globalAlpha=.35*(1-a),i.fillStyle=_t.waterD,ji(i,l,u,f*.75,f*.375,2);for(let h=0;h<3;h++){const c=a*1.3-h*.15;c<=0||c>=1||(i.globalAlpha=1-c,i.fillStyle=h===0?_t.foam:_t.water,ga(i,l,u,f*(.2+c*.95),30,3,h,h===0?0:5))}i.globalAlpha=Math.min(1,(1-a)*2.5);for(const h of r){const c=ju(h.d)*(.6+a*.4);J2(i,l+Math.cos(h.a)*c,u+Math.sin(h.a)*c*.5+Math.sin(a*10+h.ph)*1.5,2)}a>.08&&V0(i,bM,l,u-4,a<.2?2:3,{g:_t.moss,p:_t.pink,P:_t.pinkL,y:_t.eye})}}),T({type:"custom",layer:"top",dur:.55,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=ju(n)*(.35+a*.25),f=Math.sin(Math.PI*Math.min(1,a*1.2));i.globalAlpha=Math.min(1,(1-a)*2);for(const h of o){const c=s+Math.cos(h.a)*u,d=l+Math.sin(h.a)*u*.5,m=kt(h.h*f),p=Math.cos(h.a)*a*10;m<2||(i.fillStyle=_t.waterD,i.fillRect(kt(c-h.w/2+p*.5),kt(d-m),h.w,m),i.fillStyle=_t.water,i.fillRect(kt(c-h.w/2+p*.5),kt(d-m),h.w-2,m-2),i.fillStyle=_t.foam,i.fillRect(kt(c-h.w/2+p-1),kt(d-m-3),h.w+2,4))}}})}j.rana_W=e=>{if(e.ex===void 0)return;const t=e.x,n=e.y,r=e.ex,o=e.ey,i=e.dur||.45,a=1.7,s=r-t,l=o-n,u=Math.hypot(s,l)||1;T({type:"custom",layer:"ground",dur:.5,x:t,y:n,draw(f,h){const[c,d]=C(t,n);f.globalAlpha=1-h,f.fillStyle=_t.waterD,ga(f,c,d,10+h*34,18,3,0,3),f.fillStyle=_t.foam,ga(f,c,d,6+h*22,12,2,.3,4)}});for(let f=0;f<12;f++)E(t,n,.15,-s/u*g(1,2.5)+g(-.8,.8),-l/u*g(1,2.5)+g(-.8,.8),g(1.5,3),.5,f%3?_t.mud:_t.water,3,9,!1);T({type:"custom",layer:"top",dur:i+.25,x:t,y:n,draw(f,h){const c=Math.min(1,h*(i+.25)/i),d=Math.max(0,c-.45),m=h>.75?(1-h)*4:1;for(let p=d;p<=c;p+=.05){const[y,x]=C(t+s*p,n+l*p,.3+6.8*p*(1-p)),b=(p-d)/Math.max(.01,c-d);f.globalAlpha=m*(.3+.7*b),f.fillStyle=_t.deep,f.fillRect(kt(y)-3,kt(x)-3,6,6),f.fillStyle=b>.7?_t.padL:_t.pad,f.fillRect(kt(y)-2,kt(x)-2,4,4)}}}),T({type:"custom",layer:"ground",dur:.3,delay:i,x:r,y:o,draw(f,h,c){c.go||(c.go=!0,AM(r,o,a))}})};j.rana_E=e=>{const t=e.x,n=e.y,r=Array.from({length:9},(i,a)=>{const s=a/9*Ur+g(-.3,.3),l=a===0?0:g(.3,.85);return{x:t+Math.cos(s)*l,y:n+Math.sin(s)*l,r:g(14,22),z:g(.15,.6),up:g(.2,.5),col:[_t.smokeA,_t.smokeB,_t.smokeC][a%3],dl:g(0,.12)}}),o=[0,3,6].map((i,a)=>({p:r[i+1],t0:.15+a*.1,blink:g(.3,.6)}));T({type:"custom",layer:"top",add:!0,dur:.14,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.2),u=kt(14*(1-a))+3;i.fillStyle="#fff6c0",i.fillRect(s-u,l-2,u*2,4),i.fillRect(s-2,l-u,4,u*2),i.fillStyle=_t.padL,i.fillRect(s-u/2,l-u/2,u,u)}}),T({type:"custom",layer:"top",dur:1.5,x:t,y:n,draw(i,a){const s=a*1.5;for(const l of r){const u=Math.max(0,Math.min(1,(s-l.dl)/1.3));if(u<=0)continue;const[f,h]=C(l.x,l.y,l.z+l.up*u),c=kt(l.r*(.35+.65*Math.sqrt(u)));i.globalAlpha=u<.55?.92:Math.max(0,.92*(1-(u-.55)/.45)),i.fillStyle="#3e4a3c",ji(i,f+2,h+3,c,c*.8,3),i.fillStyle=l.col,ji(i,f,h,c,c*.8,3),i.fillStyle="#c8d4b0",ji(i,f-c*.3,h-c*.35,c*.35,c*.25,2)}for(const l of o){const u=s-l.t0;if(u<0||u>.95)continue;const[f,h]=C(l.p.x,l.p.y,l.p.z+l.p.up*.4);i.globalAlpha=u>.75?(.95-u)*5:1;const c=Math.abs(u-l.blink)<.06;for(const d of[-1,1]){const m=kt(f+d*6)-3,p=kt(h)-3;if(i.fillStyle=_t.deep,i.fillRect(m-1,p-1,8,c?3:7),c){i.fillStyle=_t.moss,i.fillRect(m,p,6,1);continue}i.fillStyle=_t.eye,i.fillRect(m,p,6,5),i.fillStyle=_t.ink,i.fillRect(m+1,p+2,4,1),i.fillStyle="#ffffff",i.fillRect(m+1,p,1,1)}}}});for(let i=0;i<14;i++){const a=Math.random()*Ur,s=g(1,2.6);E(t,n,.3,Math.cos(a)*s,Math.sin(a)*s,g(1,2.5),.6,i%2?_t.ink:_t.moss,2,7,!1,.92)}};function TM(e,t,n,r){T({type:"custom",layer:"top",dur:.42,x:e,y:t,draw(o,i){const a=C(e,t,.35),s=C(n,r,.35),l=Math.min(1,i*5),u=Math.max(0,(i-.2)/.8);for(let f=0;f<2;f++){o.fillStyle=f?_t.ink:_t.moss;for(let h=u;h<=l;h+=.03){const c=kt((2+8*Math.sin(Math.PI*h))*(1-u*.6))+(f?0:3),d=a[0]+(s[0]-a[0])*h,m=a[1]+(s[1]-a[1])*h+Math.sin(h*14)*1.5;o.fillRect(kt(d-c/2),kt(m-c/2),c,c)}}}});for(let o=0;o<10;o++){const i=Math.random();E(e+(n-e)*i,t+(r-t)*i,.35,g(-.6,.6),g(-.6,.6),g(.2,1),.5,_t.ink,3,6,!1)}}function od(e,t,n,r,o,i,a){const s=Math.cos(r),l=Math.sin(r),u=14;for(let f=0;f<3;f++){e.fillStyle=f===0?_t.ink:f===1?"#b8ffd0":"#ffffff";const h=f===0?2:0,c=f===0?i+2:f===1?i:Math.max(1,i-3);for(let d=0;d<=u;d++){const m=(d/u*2-1)*a,p=Math.max(1,kt(c*(1-Math.abs(d/u*2-1))));e.fillRect(kt(t+s*m*o/2-p/2+h),kt(n+l*m*o/2-p/2+h),p,p)}}}function RM(e,t){const n=[0,1,2].map(o=>({t0:o*.08,a:.75+o*.42+g(-.12,.12),ox:(o-1)*7,oy:(o-1)*-4,len:46+o*6}));T({type:"custom",layer:"top",dur:.5,x:e,y:t,draw(o,i){const a=i*.5,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.3)continue;const h=Math.min(1,f/.05),c=f<.1?1:1-(f-.1)/.2;o.globalAlpha=Math.max(0,c),od(o,s+u.ox,l+u.oy,u.a,u.len,kt(6*c)+1,h),od(o,s+u.ox,l+u.oy,u.a+Math.PI/2,u.len,kt(6*c)+1,Math.min(1,Math.max(0,(f-.025)/.05)))}}}),T({type:"custom",layer:"top",add:!0,dur:.4,x:e,y:t,draw(o,i){const a=i*.4,[s,l]=C(e,t,.5);for(const u of n){const f=a-u.t0;if(f<0||f>.1)continue;const h=kt(16*(1-f/.1))+2;o.fillStyle=_t.padL,o.fillRect(s+u.ox-h,l+u.oy-h,h*2,h*2)}}});const r=Array.from({length:6},()=>{const o=Math.random()*Ur,i=g(.2,1);return{dx:Math.cos(o)*i,dy:Math.sin(o)*i,r:g(5,11),drips:[g(-1,1),g(-1,1),g(-1,1)]}});T({type:"custom",layer:"ground",dur:1.8,x:e,y:t,draw(o,i){o.globalAlpha=.85*(1-i*i);for(const a of r){const[s,l]=C(e+a.dx,t+a.dy),u=a.r*Math.min(1,i*12);o.fillStyle=_t.inkP,ji(o,s,l,u,u*.5,2),o.fillStyle=_t.ink,ji(o,s-1,l-1,u*.6,u*.3,2);for(const f of a.drips)o.fillRect(kt(s+f*u*1.8),kt(l+f*u*.6),3,2);o.fillStyle=_t.moss,o.fillRect(kt(s+u*.4),kt(l-1),2,2)}}});for(let o=0;o<26;o++){const i=Math.random()*Ur,a=g(1.5,4.5);E(e,t,.5,Math.cos(i)*a,Math.sin(i)*a,g(1,3),g(.4,.7),o%5?_t.ink:_t.inkP,o%3?3:4,10,!1,.92)}for(let o=0;o<6;o++){const i=Math.random()*Ur;E(e,t,.5,Math.cos(i)*3,Math.sin(i)*3,1,.3,_t.padL,2,0,!0)}ot(8)}j.rana_R=e=>{if(e.type==="blink"){TM(e.x,e.y,e.ex??e.x,e.ey??e.y);return}RM(e.x,e.y)};De.rana=e=>{const t=e.x,n=e.y,r=Math.random()<.5?-1:1;T({type:"custom",layer:"top",dur:.2,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=Math.min(1,i*4),u=[a-9*r,s-3],f=[a-2*r,s+6],h=[a+13*r,s-11];o.globalAlpha=i<.5?1:(1-i)*2;const c=l<.35?[u[0]+(f[0]-u[0])*l/.35,u[1]+(f[1]-u[1])*l/.35]:f,d=l<.35?c:[f[0]+(h[0]-f[0])*(l-.35)/.65,f[1]+(h[1]-f[1])*(l-.35)/.65];o.fillStyle=_t.moss,eo(o,u,c,5),l>=.35&&eo(o,f,d,5),o.fillStyle="#ffffff",eo(o,u,c,2),l>=.35&&eo(o,f,d,2)}});for(let o=0;o<5;o++)E(t,n,.45,g(-1.2,1.2),g(-1.2,1.2),g(1,2.2),.35,o%2?_t.water:_t.padL,2,8,!1)};const CM="#7a879c",PM="#363e50",IM="#c9d3e2",id="#e8b858",zM="#ffa040",tm="#f2e8d2",hs="#cdbb9a",ec="#a08f72",em="#6f6250",xa="#33241a",OM="#8a7356",nm="#9a948a",rm="#7a7468",om="#5e584e",FM="#c4beb2",EM="#ffe2a0",LM="#d89a3a",kM="#fff8e6",UM="#ff5a1a",Te=Math.round,Qu=Math.PI*2;function un(e,t,n,r,o,i){e.fillStyle=i,e.fillRect(Te(t),Te(n),r,o)}function Ds(e,t,n,r,o,i,a){const s=Math.max(1,Math.ceil(Math.max(Math.abs(r-t),Math.abs(o-n))/Math.max(1,i*.8)));e.fillStyle=a;for(let l=0;l<=s;l++)e.fillRect(Te(t+(r-t)*l/s-i/2),Te(n+(o-n)*l/s-i/2),i,i)}function ad(e,t,n,r,o){const[i,a]=C(t,n),s=r*$.HW*Math.SQRT2,l=s*.5;e.fillStyle=o;for(let u=-l;u<=l;u+=2){const f=s*Math.sqrt(Math.max(0,1-u*u/(l*l)));e.fillRect(Te(i-f),Te(a+u),Te(f*2),2)}}function im(e,t){const n=(e-t)*$.HW,r=(e+t)*$.HH,o=Math.hypot(n,r)||1;return[n/o,r/o]}const am=e=>{const t=ht(e);return t&&!t.dead&&!He(t)?t:null},Gl=()=>[nm,rm,om,ec][Math.random()*4|0];function DM(e,t,n,r,o){if(t=Te(t)-6,n=Te(n)-5,un(e,t,n,12,10,PM),un(e,t+1,n+1,10,8,CM),un(e,t+1,n+1,10,2,IM),un(e,t+2,n+6,2,2,o),un(e,t+8,n+6,2,2,o),r>=0&&r<9){const i=e.globalAlpha;e.globalAlpha=i*.7,un(e,t+1+r,n+1,2,8,"#ffffff"),e.globalAlpha=i}}const XM=[[-5,-2,7,2,0],[-5,0,5,1,0],[1,0,1,1,0],[-5,1,7,2,0],[2,-1,3,4,0],[-3,3,6,1,1],[-5,-4,1,2,0],[-4,-3,1,1,0],[2,-2,3,1,2],[3,-3,2,1,2],[4,-4,1,1,2],[0,-3,1,1,2],[0,0,1,1,3]],GM=[EM,LM,kM,UM];function Zu(e,t,n,r,o){t=Te(t),n=Te(n);for(const[i,a,s,l,u]of XM){const f=o>0?i:-i-s;e.fillStyle=GM[u],e.fillRect(t+f*r,n+a*r,s*r,l*r)}}De.rino=e=>{T({type:"custom",layer:"top",add:!0,dur:.24,x:e.x,y:e.y,draw(t,n){const[r,o]=C(e.x,e.y,.4),i=Te(10*Math.min(1,n*2.5));t.globalAlpha=1-n;for(let a=0;a<=i;a++){const s=Math.PI*.75-a*.16;un(t,r-4+Math.cos(s)*16-1,o+6-Math.sin(s)*18-1,a>i-3?2:3,a>i-3?2:3,a>i-2?"#ffffff":tm)}}});for(let t=0;t<3;t++)E(e.x,e.y,.3,g(-1.5,1.5),g(-1.5,1.5),g(1.5,3),.5,Gl(),3,10,!1,.95);for(let t=0;t<2;t++)E(e.x+g(-.2,.2),e.y+g(-.2,.2),.1,g(-.4,.4),g(-.4,.4),.5,.5,hs,5,0,!1,.9);ot(1.5)};j.rino_Q=e=>{const t=e.ex||e.x,n=e.ey||e.y,r=Math.max(.12,e.dur||.3),o=t-e.x,i=n-e.y,a=Math.hypot(o,i)||1,s=-i/a,l=o/a,u=o/a,f=i/a,[h,c]=im(o,i),d=Math.max(4,Math.ceil(a*4)),m=Array.from({length:d+1},(M,v)=>g(-.06,.06)+(v%2?.05:-.05)),p=Array.from({length:d+1},()=>Math.random()<.3?{s:Math.random()<.5?-1:1,l:g(.15,.35)}:null),y=Array.from({length:8},(M,v)=>({k:(v+.5)/8,o:g(-.35,.35),r:Array.from({length:4},()=>[g(-10,6),g(-8,2),Te(g(6,12)),Te(g(5,8)),[hs,ec,hs,em][Math.random()*4|0]])}));let x=0,b=!1;T({type:"custom",layer:"ground",dur:r+1.6,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r),R=Math.floor(A*d);M.globalAlpha=.8*Math.min(1,(w.dur-_)/.6);for(const P of[-.3,.3]){const z=P>0?1:-1;let[O,F]=C(e.x+s*P,e.y+l*P);for(let X=1;X<=R;X++){const G=X/d,V=P+m[X]*z,[L,k]=C(e.x+o*G+s*V,e.y+i*G+l*V);Ds(M,O,F+1,L,k+1,2,OM),Ds(M,O,F,L,k,2,xa);const U=p[X];if(U&&U.s===z){const[N,H]=C(e.x+o*G+s*(V+z*U.l)+u*U.l*.5,e.y+i*G+l*(V+z*U.l)+f*U.l*.5);Ds(M,L,k,N,H,1,xa)}O=L,F=k}}}}),T({type:"custom",layer:"top",dur:r+1,x:e.x,y:e.y,draw(M,v,w){const _=v*w.dur,A=Math.min(1,_/r);for(;x<18*A;){x++;const R=Math.random()*A;E(e.x+o*R+g(-.3,.3),e.y+i*R+g(-.3,.3),.1,-u*g(.5,2)+g(-1,1),-f*g(.5,2)+g(-1,1),g(2,4),g(.5,.8),Gl(),3,12,!1,.95)}if(_>=r&&!b){b=!0,ot(5);for(let R=0;R<12;R++){const P=Math.atan2(f,u)+g(-.9,.9),z=g(2,4.5);E(t+u*.5,n+f*.5,.2,Math.cos(P)*z,Math.sin(P)*z,g(2,4),g(.5,.8),Gl(),3,12,!1,.95)}}for(const R of y){const P=_-R.k*r;if(P<0||P>.9)continue;const z=P/.9,O=1+z*1.2,[F,X]=C(e.x+o*R.k+s*R.o,e.y+i*R.k+l*R.o,.15+z*.5);M.globalAlpha=.6*(1-z);for(const G of R.r)un(M,F+G[0]*O,X+G[1]*O,Te(G[2]*O),Te(G[3]*O),G[4])}}}),T({type:"custom",layer:"top",add:!0,dur:r+.08,x:e.x,y:e.y,draw(M,v,w){const _=am(e.uid);if(!_)return;const A=v*w.dur;M.globalAlpha=A>r?Math.max(0,1-(A-r)/.08):1;const[R,P]=C(_.x+u*.6,_.y+f*.6,.45);for(let F=0;F<6;F++){const X=7-F;un(M,R+h*F*2.5-X/2,P+c*F*2.5-X/2,X,X,F<2?tm:"#ffffff")}const[z,O]=C(_.x,_.y,.5);M.globalAlpha*=.6;for(let F=0;F<5;F++){const X=(F-2)*9,G=24+F*13%3*10;Ds(M,z-c*X-h*26,O+h*X-c*26,z-c*X-h*(26+G),O+h*X-c*(26+G),1,"#fff6e0")}}})};j.rino_W=e=>{const t=e.dur||3,n=Array.from({length:8},(o,i)=>{const a=i<5;return{a:a?Math.PI*(.08+.84*i/4):Math.PI*(1.2+.3*(i-5)),front:a,row:i%2,t0:.035*i,hit:!1}}),r=o=>(i,a,s)=>{const l=am(e.uid);if(!l)return;const u=a*s.dur,f=u>t?Math.max(0,1-(u-t)/.25):1;if(f<=0)return;const[h,c]=C(l.x,l.y,.42);for(const d of n){if(d.front!==o)continue;const m=Math.min(1,Math.max(0,(u-d.t0)/.18));if(m<=0)continue;if(m>=1&&!d.hit){d.hit=!0;for(let M=0;M<3;M++)E(l.x+Math.cos(d.a)*.4,l.y+Math.sin(d.a)*.4,.45,g(-2,2),g(-2,2),g(1,2.5),.3,M?zM:id,2,8,!0,.9)}const p=(1-m)*(1-m)*46,y=h+Math.cos(d.a)*30,x=c+Math.sin(d.a)*13-d.row*7,b=u-d.t0-.18;i.globalAlpha=f,DM(i,y+Math.cos(d.a)*p,x+Math.sin(d.a)*p*.5-p*.6,Te((S.T*30+d.a*6)%30),b>=0&&b<.14?"#ffffff":id)}};T({type:"custom",layer:"ground",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!1)}),T({type:"custom",layer:"top",dur:t+.25,x:e.x,y:e.y,uid:e.uid,draw:r(!0)}),ot(3)};j.rino_E=e=>{const t=e.radius||2.6,n=28,r=Array.from({length:n},(o,i)=>({a:i/n*Qu+g(-.08,.08),j:g(.9,1.08),w:Te(g(4,7)),h:Te(g(3,6)),col:[nm,rm,om][i%3]}));T({type:"custom",layer:"ground",dur:1.4,x:e.x,y:e.y,draw(o,i){const a=i*1.4,s=Math.min(1,a/.45),l=t*(1-(1-s)*(1-s)),u=Math.min(1,(1.4-a)/.5);o.globalAlpha=.45*u,ad(o,e.x,e.y,.75,"#3a2a1c"),o.globalAlpha=.55*u,ad(o,e.x,e.y,.4,"#24180e");for(const[f,h,c]of[[.45,xa,2],[.7,xa,2],[.95,hs,3]]){o.globalAlpha=(1-s)*.8;for(let d=0;d<36;d++){const m=d/36*Qu,[p,y]=C(e.x+Math.cos(m)*l*f,e.y+Math.sin(m)*l*f);un(o,p-c/2,y-1,c,2,h)}}for(const f of r){const[h,c]=C(e.x+Math.cos(f.a)*l*f.j,e.y+Math.sin(f.a)*l*f.j),d=(1-s)*12*Math.sin(s*Math.PI+.3);o.globalAlpha=.35*u,un(o,h-f.w/2-1,c,f.w+2,2,"#000000"),o.globalAlpha=u,un(o,h-f.w/2,c-f.h-d,f.w,f.h,f.col),un(o,h-f.w/2,c-f.h-d,f.w,1,FM)}}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:e.x,y:e.y,draw(o,i){const[a,s]=C(e.x,e.y,.05),l=Te(30+110*i);o.globalAlpha=1-i,un(o,a-l,s-1,l*2,2,"#fff2d0"),un(o,a-l*.6,s-3,Te(l*1.2),1,"#ffd890");for(const u of[-1,1])un(o,a+u*(l+4)-1,s-6,2,8,"#fff2d0")}});for(let o=0;o<40;o++){const i=g(0,Qu),a=t*g(1.5,2.5);E(e.x+Math.cos(i)*.3,e.y+Math.sin(i)*.3,.1,Math.cos(i)*a,Math.sin(i)*a,g(3,6),g(.5,.9),Gl(),Math.random()<.3?4:3,14,!1,.96)}ot(8)};j.rino_R=e=>{const t=e.ux||0,n=e.uy||0,r=Math.atan2(n,t),o=e.range||3.6,i=e.angle||1.1,a=1,s=[0,-1,1,-2,2].map(u=>({a:r+u*i*.4,del:Math.abs(u)*.06})),l=(u,f)=>{const h=Math.min(1,Math.max(0,(f-u.del)/.6)),c=.4+(o-.4)*(1-(1-h)*(1-h));return[e.x+Math.cos(u.a)*c,e.y+Math.sin(u.a)*c,h,c]};T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(u,f){const h=f*1.7,c=Math.min(1,(1.7-h)/.6);u.globalAlpha=.2*c,u.fillStyle="#4a3420",u.beginPath();let[d,m]=C(e.x,e.y);u.moveTo(Te(d),Te(m));for(let p=0;p<=12;p++){const y=r-i+2*i*p/12;[d,m]=C(e.x+Math.cos(y)*o,e.y+Math.sin(y)*o),u.lineTo(Te(d),Te(m))}u.closePath(),u.fill(),u.globalAlpha=.7*c;for(const p of s){const[,,,y]=l(p,h),x=p.a+Math.PI/2;for(let b=.6;b<y;b+=.55){const M=Math.round(b/.55)%2?.12:-.12,[v,w]=C(e.x+Math.cos(p.a)*b+Math.cos(x)*M,e.y+Math.sin(p.a)*b+Math.sin(x)*M);un(u,v-4,w-1,3,3,xa),un(u,v+1,w-1,3,3,xa)}}}}),T({type:"custom",layer:"top",add:!0,dur:a,x:e.x,y:e.y,draw(u,f){const h=f*a;for(const c of s){const[d,m,p]=l(c,h);if(h<c.del)continue;const y=.85*Math.min(1,(h-c.del)/.08)*Math.max(0,1-Math.max(0,h-c.del-.45)/.4);if(y<=0)continue;const[x,b]=C(d,m,.55),[M]=im(Math.cos(c.a),Math.sin(c.a)),v=M>=0?1:-1,w=p<.5?3:4,[_,A]=C(e.x,e.y,.55),R=x-_,P=b-A;u.globalAlpha=y*.18,Zu(u,x-R*.35,b-P*.35,w,v),u.globalAlpha=y*.35,Zu(u,x-R*.17,b-P*.17,w,v),u.globalAlpha=y,Zu(u,x,b,w,v)}}});for(let u=0;u<40;u++){const f=r+g(-i,i),h=g(.4,o*.8),c=g(2,5);E(e.x+Math.cos(f)*h,e.y+Math.sin(f)*h,.1,Math.cos(f)*c,Math.sin(f)*c,g(.5,1.5),g(.5,.9),[hs,ec,em][u%3],4,3,!1,.9)}ot(10)};const q=Math.round,An=Math.PI*2,Y0=e=>e*$.HW*Math.SQRT2,Y={ink:"#1c120e",iron:"#7c7a80",ironL:"#d8dce4",rust:"#a8552c",tongueD:"#6a1a2c",tongue:"#e05a74",tongueL:"#ffb4c2",skin:"#5e7a26",skinD:"#34481a",skinL:"#8eaa3a",wart:"#b0bc5c",belly:"#e8d8a0",bellyD:"#b8a470",meat:"#c8323a",meatL:"#ff7a7a",fat:"#ffe0c8",eye:"#ffc83a",gas:"#b8c040",gasD:"#6e7820",gasL:"#e4ec8a",slime:"#9ad048",slimeL:"#dcff9a",fly:"#141410",mouth:"#2e0610",mouthM:"#6a1422",teeth:"#f4ecd0",mud:"#4a3a22"},eu=e=>!!(S.game&&S.game.player&&e.uid===S.game.player.id);function Ja(e,t,n,r){r=Math.max(1,q(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(q(t[0]+(n[0]-t[0])*s/i-a),q(t[1]+(n[1]-t[1])*s/i-a),r,r)}function $n(e,t,n,r,o,i=2){if(!(r<1||o<1))for(let a=-o;a<o;a+=i){const s=(a+i/2)/o,l=r*Math.sqrt(Math.max(0,1-s*s));l>=.5&&e.fillRect(q(t-l),q(n+a),Math.max(1,q(l*2)),i)}}function sm(e,t,n,r=99){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.heroKey!==n)continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}function BM(e,t,n,r=1.6){let o=null,i=r;for(const a of S.game?S.game.units:[]){if(a.dead||a.team===n||a.kind!=="hero")continue;const s=Math.hypot(a.x-e,a.y-t);s<i&&(i=s,o=a)}return o}const nu=e=>C(e.x,e.y,.5);function ru(e,t,n,r,o,i){const a=n[0]-t[0],s=n[1]-t[1],l=Math.hypot(a,s)||1,u=-s/l,f=a/l,h=Math.max(2,Math.ceil(l/3)),c=d=>{const m=Math.sin(d*Math.PI),p=Math.sin(d*9-r*28)*o*m;return[t[0]+a*d+u*p,t[1]+s*d+f*p+i*m]};for(let d=0;d<3;d++){e.fillStyle=d===0?Y.tongueD:d===1?Y.tongue:Y.tongueL;const m=d===0?7:d===1?5:2;for(let p=0;p<=h;p++){const y=p/h,x=c(y),b=d===2?m:Math.max(2,q(m*(1-y*.3)));e.fillRect(q(x[0]-b/2),q(x[1]-b/2-(d===2?1:0)),b,b)}}for(let d=22;d<l-14;d+=22){const m=c(d/l),p=q(m[0]),y=q(m[1]);e.fillStyle=Y.ink,e.fillRect(p-2,y-5,5,10),e.fillStyle=Y.iron,e.fillRect(p-1,y-4,3,8),e.fillStyle=Y.ironL,e.fillRect(p-1,y-4,1,3)}}const Ju=[[-10,0],[-4,0],[2,0],[5.5,1.5],[7.5,4],[7,7],[5,9],[2,9.5],[-.5,8],[-1.5,5.5]];function nc(e,t,n,r,o=1.5){const i=Math.cos(r),a=Math.sin(r),s=d=>[t+(i*d[0]-a*d[1])*o,n+(a*d[0]+i*d[1])*o];for(let d=0;d<3;d++){e.fillStyle=d===0?Y.ink:d===1?Y.iron:Y.ironL;const m=d===0?6:d===1?4:1;for(let p=1;p<Ju.length;p++)Ja(e,s(Ju[p-1]),s(Ju[p]),m)}const l=s([-1.5,5.5]),u=s([-4,3]);e.fillStyle=Y.ink,Ja(e,l,u,4),e.fillStyle=Y.ironL,Ja(e,l,u,2),e.fillStyle=Y.rust;const f=s([7.5,5]),h=s([-3,0]);e.fillRect(q(f[0]),q(f[1]),2,2),e.fillRect(q(h[0]),q(h[1])-1,3,2);const c=s([-12.5,0]);e.fillStyle=Y.ink,e.fillRect(q(c[0])-5,q(c[1])-5,10,10),e.fillStyle=Y.rust,e.fillRect(q(c[0])-4,q(c[1])-4,8,8),e.fillStyle=Y.ink,e.fillRect(q(c[0])-2,q(c[1])-2,4,4)}const Ui=[];function NM(e){let t=null,n=1.3;for(const r of Ui){if(r.done||S.T-r.t>1.6||e.src&&e.src.id!==r.uid)continue;const o=e.x-r.x,i=e.y-r.y;if(o*r.ux+i*r.uy<-.6)continue;const a=Math.abs(o*r.uy-i*r.ux);a<n&&(n=a,t=r)}return t}function $M(e,t,n){T({type:"custom",layer:"top",dur:.26,x:t,y:n,draw(r,o){const i=ht(e);if(!i)return;const a=nu(i),s=C(t,n,.45),l=1-o*o,u=[a[0]+(s[0]-a[0])*l,a[1]+(s[1]-a[1])*l];l>.06&&ru(r,a,u,S.T,4*l,3*l),nc(r,u[0],u[1],Math.atan2(u[1]-a[1],u[0]-a[0]),1.5-o*.4)}})}function HM(e,t){T({type:"custom",layer:"ground",dur:.35,x:e,y:t,draw(n,r){const[o,i]=C(e,t);n.globalAlpha=1-r,n.fillStyle=Y.slimeL;for(let a=0;a<10;a++){const s=a/10*An+r;n.fillRect(q(o+Math.cos(s)*(8+r*26))-1,q(i+Math.sin(s)*(4+r*13))-1,3,3)}}});for(let n=0;n<8;n++)E(e,t,.5,g(-1.2,1.2),g(-1.2,1.2),g(1,2.4),.45,n%2?Y.slime:Y.tongueL,3,9,!1)}function WM(e){let t=null;for(const h of Ui)!h.pulled&&h.team===e.team&&S.T-h.t<2.2&&(!t||h.t>t.t)&&(t=h);t&&(t.pulled=!0,t.done=!0);const n=t?ht(t.uid):sm(e.ex??e.x,e.ey??e.y,"sapo",3),r=n?n.id:0,o=e.uid,i=(e.ex??e.x)-e.x,a=(e.ey??e.y)-e.y,s=Math.hypot(i,a)||1,l=-a/s*.17,u=i/s*.17,f=[];T({type:"custom",layer:"ground",dur:2.6,x:e.x,y:e.y,draw(h,c,d){const m=ht(o);if(m&&!m.dead&&d.t<1.7&&!d.stop){const p=f[f.length-1];(!p||Math.hypot(m.x-p[0],m.y-p[1])>.14)&&(f.push([m.x,m.y,d.t]),f.length>48&&f.shift())}for(const p of f){const y=1-(d.t-p[2])/1.1;if(!(y<=0)){h.globalAlpha=y*.9;for(const x of[-1,1]){const[b,M]=C(p[0]+l*x,p[1]+u*x);h.fillStyle=Y.mud,h.fillRect(q(b)-2,q(M)-1,5,3),h.fillStyle=Y.slime,h.fillRect(q(b)-1,q(M)-2,2,1)}}}}}),T({type:"custom",layer:"top",dur:1.75,x:e.x,y:e.y,draw(h,c,d){const m=ht(o),p=r?ht(r):null;if(!m||!p||m.dead||p.dead){d.t=d.dur+1;return}if(Math.hypot(m.x-p.x,m.y-p.y)<(p.r||.45)+(m.r||.4)+.4||d.t>.25&&"pulled"in m&&!m.pulled){HM(m.x,m.y),d.t=d.dur+1;return}const x=nu(p),b=C(m.x,m.y,.5);ru(h,x,b,S.T,1.2,2),nc(h,b[0],b[1],Math.atan2(b[1]-x[1],b[0]-x[0])+Math.PI,1.3)}}),ot(eu({uid:r})?5:2)}j.sapo_Q=e=>{if(e.type==="hook_pull"){WM(e);return}if(!e.type.startsWith("cast_"))return;const t=e.ux||1,n=e.uy||0;for(let a=Ui.length-1;a>=0;a--)S.T-Ui[a].t>3&&Ui.splice(a,1);const r={uid:e.uid,team:e.team,x:e.x,y:e.y,ux:t,uy:n,t:S.T,lx:e.x,ly:e.y,lt:0,done:!1,pulled:!1};Ui.push(r),T({type:"custom",layer:"ground",dur:1.7,x:e.x,y:e.y,draw(a,s,l){if(r.done){l.t=l.dur+1;return}r.lt>0&&S.T-r.lt>.12&&(r.done=!0,r.pulled||$M(r.uid,r.lx,r.ly),l.t=l.dur+1)}});const o=e.x+t*.4,i=e.y+n*.4;for(let a=0;a<10;a++)E(o,i,.5,t*g(1.5,3.5)+g(-.8,.8),n*g(1.5,3.5)+g(-.8,.8),g(.8,2),.45,a%3?Y.slime:Y.tongueL,2+a%2,8,!1);T({type:"custom",layer:"top",dur:.16,x:o,y:i,draw(a,s){const[l,u]=C(o,i,.5),[f,h]=C(o+t,i+n,.5),c=f-l,d=h-u,m=Math.hypot(c,d)||1;a.globalAlpha=1-s,a.fillStyle=Y.fat;for(let p=-1;p<=1;p++)Ja(a,[l-d/m*p*7,u+c/m*p*7],[l+c*(.3+s*.5)-d/m*p*7,u+d*(.3+s*.5)+c/m*p*7],2)}})};Xe.sapo_Q=(e,t,n,r,o,i)=>{const a=NM(t);a&&(a.lx=t.x,a.ly=t.y,a.lt=S.T);const s=a?ht(a.uid):t.src||sm(t.x,t.y,"sapo",11);s&&!s.dead&&ru(e,nu(s),[n-Math.cos(o)*16,r-Math.sin(o)*16],i,3.5,7),nc(e,n,r,o),Math.random()<.3&&E(t.x,t.y,.4,0,0,-.2,.4,Math.random()<.5?Y.slime:Y.tongueL,2,6,!1)};j.sapo_Q_hit=e=>{const t=e.x,n=e.y;T({type:"custom",layer:"top",add:!0,dur:.22,x:t,y:n,draw(r,o){const[i,a]=C(t,n,.5);for(let l=0;l<10;l++){const u=l/10*An+.2,f=(l%2?12:26)*(.5+o*.7);r.globalAlpha=1-o,r.fillStyle=l%2?Y.fat:Y.meatL,Ja(r,[i+Math.cos(u)*5,a+Math.sin(u)*4],[i+Math.cos(u)*f,a+Math.sin(u)*f*.7],l%2?2:4)}r.fillStyle="#ffffff";const s=q(10*(1-o))+2;r.fillRect(i-s/2,a-s/2,s,s)}});for(let r=0;r<14;r++){const o=Math.random()*An,i=g(1,3);E(t,n,.5,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3.5),g(.5,.8),[Y.meat,Y.meatL,Y.fat,Y.slime][r%4],r%3?3:4,11,!1,.95)}};const K0=new Map;function lm(e){const t={ended:!1,endT:0};return K0.set(e.uid+"_"+e.key,t),t}function um(e){const t=K0.get(e.uid+"_"+e.key);t&&!t.ended&&(t.ended=!0,t.endT=S.T),K0.delete(e.uid+"_"+e.key)}function Di(e,t,n){const r=ht(t);if(!e.ended&&(!r||r.dead||n.t>.15&&"channel"in r&&!r.channel)&&(e.ended=!0,e.endT=S.T),!e.ended)return Math.min(1,n.t/.2);const o=1-(S.T-e.endT)/.4;return o<=0&&(n.t=n.dur+1),Math.max(0,o)}function qM(e){const t=lm(e),n=e.uid,r=(e.dur||4)+.5,o=e.radius||2.3,i=Math.random()*50,a=l=>{const u=ht(n);return u?[u.x,u.y]:[l.x,l.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Di(t,n,f);if(h<=0)return;const[c,d]=a(f),[m,p]=C(c,d),y=Y0(o),x=S.T;l.globalAlpha=.22*h,l.fillStyle=Y.gasD,$n(l,m,p,y*.95,y*.475,3);for(let b=0;b<6;b++){const M=b/6*An+x*.25,v=y*(.4+.35*W(b+i));l.globalAlpha=.3*h,l.fillStyle=b%2?Y.gas:Y.gasD,$n(l,m+Math.cos(M)*v,p+Math.sin(M)*v*.5,18+4*Math.sin(x*2+b),8,2)}for(let b=0;b<44;b++){const M=b/44*An-x*.4,v=y*(.95+.05*Math.sin(M*5+x*3));l.globalAlpha=.85*h,l.fillStyle=b%3?Y.gas:Y.gasL,l.fillRect(q(m+Math.cos(M)*v)-1,q(p+Math.sin(M)*v*.5)-1,3,3)}for(let b=0;b<5;b++){const M=x*1.3+b*.2,v=Math.floor(M),w=M-v,_=W(v*13+b+i)*An,A=y*(.15+.75*W(v*7+b*3+i)),R=m+Math.cos(_)*A,P=p+Math.sin(_)*A*.5;l.globalAlpha=h,l.fillStyle=w>.85?Y.gasL:Y.gas;const z=w>.85?4+(w-.85)*60:2+w*6;for(let O=0;O<8;O++){const F=O/8*An;l.fillRect(q(R+Math.cos(F)*z)-1,q(P+Math.sin(F)*z*.6)-1,2,2)}}}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Di(t,n,f);if(h<=0)return;const[c,d]=a(f),[m,p]=C(c,d),y=Y0(o),x=S.T;for(let v=0;v<10;v++){const w=W(v*7.3+i),_=(x*.7+w)%1,A=v/10*An+w*2,R=y*(.15+.7*W(v*3.1+i)),P=m+Math.cos(A)*R,z=p+Math.sin(A)*R*.5;l.globalAlpha=h*Math.sin(_*Math.PI)*.9,l.fillStyle=v%2?Y.gasL:Y.gas;for(let O=0;O<7;O++)l.fillRect(q(P+Math.sin(O*.9+x*6+v)*4)-1,q(z-8-_*46-O*5),3,4)}const[b,M]=C(c,d,.9);for(let v=0;v<5;v++){const w=v*1.7+i,_=b+Math.sin(x*(3.1+v*.4)+w)*(20+v*7),A=M-v*4+Math.sin(x*(6.2+v*.3)+w*2)*10;l.globalAlpha=h,l.fillStyle=Y.fly,l.fillRect(q(_),q(A),3,2),l.fillStyle="#eaf4ff";const R=((x*36|0)+v)%2;l.fillRect(q(_)-1,q(A)-1-R,2,1),l.fillRect(q(_)+2,q(A)-1-R,2,1)}}});const s={nl:0};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Di(t,n,f);if(h<=0)return;const[c,d]=a(f),m=Math.min(1,f.t/.5);sn(c,d);const p=St.x,y=St.y;ld!==l&&(ld=l,fd=[{u0:0,fill:Ct(l,Y.gasD,4),a:.45},{u0:.7,fill:Ct(l,Y.gas,5),a:.45},{u0:.92,fill:Ct(l,Y.gasL,7),a:.5}]),Sr(l,p,y,he(o),he(o*(1+.15*m)),Jn(j0*m),!1,fd,sd,h),hd(l,c,d,o,m,h,!1,i),fo(s,c,d,o*.9,12107840,.35*h)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(l,u,f){const h=Di(t,n,f);if(h<=0)return;const[c,d]=a(f),m=Math.min(1,f.t/.5);sn(c,d);const p=St.x,y=St.y;ud!==l&&(ud=l,cd=[{u0:0,fill:Ct(l,Y.gas,2),a:.4},{u0:.7,fill:Ct(l,Y.gas,3),a:.45},{u0:.92,fill:Ct(l,Y.gasL,6),a:.5}]),Sr(l,p,y,he(o),he(o*(1+.15*m)),Jn(j0*m),!0,cd,sd,h),hd(l,c,d,o,m,h,!0,i)}})}const j0=1.6,sd=[1,.75,.5,.3,.14];let ld=null,ud=null,fd=[],cd=[];function hd(e,t,n,r,o,i,a,s){const l=S.T;for(let u=0;u<12;u++){const f=u/12*An+l*.3+W(u+s)*.4;for(let h=0;h<10;h++){const c=(h/10+l*.55+W(u*3+s))%1;if(c>o)continue;const d=f+Math.sin(l*3+c*7+u)*.13,m=Math.cos(d),p=Math.sin(d);if(Xr(m,p,0)>0!==a)continue;const y=r*(1+.15*c);sn(t+m*y,n+p*y,c*j0);const x=c>.6?2:c>.3?3:4;if(e.globalAlpha=i*(1-c)*(a?.85:.65),e.fillStyle=u+h&1?Y.gas:Y.gasL,e.fillRect(q(St.x)-(x>>1),q(St.y)-(x>>1),x,x+1),c>.82){const b=(c-.82)/.18;for(let M=0;M<4;M++){const v=M*1.4+b*4;e.fillRect(q(St.x+Math.cos(v)*(2+M)),q(St.y-3-M*2+Math.sin(v)*2),2,2)}}}}}function Q0(e,t,n,r){T({type:"custom",layer:"ground",dur:r?.7:.45,x:e,y:t,draw(i,a){const[s,l]=C(e,t),u=Y0(n)*(.25+a*.8);i.globalAlpha=(1-a)*.9;for(let f=0;f<26;f++){const h=f/26*An,c=f%2?4:3;i.fillStyle=f%4?Y.gas:Y.gasL,i.fillRect(q(s+Math.cos(h)*u)-2,q(l+Math.sin(h)*u*.5)-1,c,3)}r&&(i.fillStyle=Y.gasD,$n(i,s,l-10-a*20,22*(1-a*.5),12,2))}});const o=r?16:6;for(let i=0;i<o;i++){const a=Math.random()*An,s=g(.5,r?2.4:1.4);E(e,t,.4,Math.cos(a)*s,Math.sin(a)*s,g(.4,1.4),g(.6,1),i%2?Y.gas:Y.gasL,r?5:4,-.6,!1,.9)}}j.sapo_W=e=>{if(e.type==="channel"){qM(e);return}const t=ht(e.uid),n=t?t.x:e.x,r=t?t.y:e.y;if(e.type==="channel_tick"){Q0(n,r,e.radius||2.3,!1);return}e.type==="channel_end"&&(um(e),Q0(n,r,1.4,e.kind==="done"))};j.sapo_E=e=>{const t=e.uid,n=e.dur||4,r=Math.random()*6,o=i=>{const a=ht(t);return a&&!a.dead?a:null};T({type:"custom",layer:"top",dur:.6,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const u=(l.dir||0)*Math.PI/8,[f,h]=C(l.x+Math.cos(u)*.22,l.y+Math.sin(u)*.22,.32),c=q(15*Math.sin(Math.min(1,a*1.4)*Math.PI)+2);i.fillStyle=Y.bellyD,$n(i,f,h+1,c+2,c*.8+2,2),i.fillStyle=Y.belly,$n(i,f,h,c,c*.8,2),i.fillStyle="#ffffff",i.fillRect(q(f-c*.4),q(h-c*.5),3,2)}}),T({type:"custom",layer:"ground",dur:.45,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l)return;const[u,f]=C(l.x,l.y);i.globalAlpha=1-a;for(let h=0;h<2;h++){const c=14+(a*1.2-h*.2)*52;if(!(c<14)){i.fillStyle=h?Y.slime:Y.belly;for(let d=0;d<22;d++){const m=d/22*An;i.fillRect(q(u+Math.cos(m)*c)-2,q(f+Math.sin(m)*c*.45)-1,4,3)}}}}}),T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,draw(i,a,s){const l=o();if(!l||s.t>.2&&!(l.shield>0)||a>.97){if(!s.popped){s.popped=!0;const m=l?l.x:s.x,p=l?l.y:s.y;for(let y=0;y<16;y++){const x=y/16*An;E(m,p,.5,Math.cos(x)*g(1,2.6),Math.sin(x)*g(1,2.6),g(1,2.5),.5,y%2?Y.slime:Y.slimeL,3,9,!1)}}s.t=s.dur+1;return}const[f,h]=C(l.x,l.y,.45),c=S.T,d=a>.85?(1-a)/.15:Math.min(1,s.t/.15);i.globalAlpha=.35*d,i.fillStyle=Y.belly,$n(i,f,h+6,13,11,2);for(let m=0;m<40;m++){const p=m/40*An,y=Math.sin(p*3+c*6+r)*2.5+Math.sin(p*5-c*4)*1.5,x=f+Math.cos(p)*(30+y),b=h+Math.sin(p)*(36+y);i.globalAlpha=.85*d,i.fillStyle=m%5===0?Y.slimeL:Y.slime,i.fillRect(q(x)-1,q(b)-1,3,3)}for(let m=0;m<6;m++){const p=m/6*An+c*.6,y=f+Math.cos(p)*31,x=h+Math.sin(p)*37;i.globalAlpha=d,i.fillStyle=Y.skinD,i.fillRect(q(y)-2,q(x)-2,5,5),i.fillStyle=Y.wart,i.fillRect(q(y)-1,q(x)-2,3,3)}i.globalAlpha=.9*d,i.fillStyle="#ffffff",i.fillRect(q(f-18),q(h-26),4,2),i.fillRect(q(f-21),q(h-23),2,4),Math.random()<.12&&E(l.x+g(-.25,.25),l.y+g(-.25,.25),.15,0,0,-.2,.5,Y.slime,2,4,!1)}})};const VM=e=>{const t=e%.5/.5;return t<.16?1-t/.16:Math.pow((t-.16)/.84,.6)};function YM(e,t,n,r,o){e.globalAlpha=r;for(let s=0;s<36;s+=2){const l=56*Math.sqrt(1-Math.pow(s/36,2));e.fillStyle=s<4?Y.skinD:s<12?Y.skinL:Y.skin,e.fillRect(q(t-l),q(n-s-2),q(l*2),2)}e.fillStyle=Y.skinD;for(let s=0;s<7;s++)e.fillRect(q(t-36+W(s)*72),q(n-14-W(s+9)*16),4,3);for(const s of[-1,1]){const l=t+s*28,u=n-36+2;e.fillStyle=Y.skin,$n(e,l,u,12,10,2),e.fillStyle=Y.eye,$n(e,l,u-1,8,7,2),e.fillStyle=Y.ink,e.fillRect(q(l-5+Math.sin(o*2)*1.5),q(u-2),10,3),e.fillStyle="#ffffff",e.fillRect(q(l-4),q(u-6),2,2)}for(let s=0;s<9;s++){const l=t-40+s*10;e.fillStyle=Y.ink,e.fillRect(q(l)-1,q(n)-1,7,8),e.fillStyle=Y.teeth,e.fillRect(q(l),q(n),5,6-s%2*2)}}function KM(e){const t=lm(e),n=e.uid,r=(e.dur||3)+.5,o=ht(n),i=e.team||o&&o.team,a=BM(e.x,e.y,i,1.6),s=a?a.id:0,l=u=>{const f=s?ht(s):null;return f&&!f.dead?[f.x,f.y]:[u.x,u.y]};T({type:"custom",layer:"ground",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=Di(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=C(d,m),x=Math.min(1,h.t/.25);u.globalAlpha=c,u.fillStyle=Y.skinD,$n(u,p,y+2,58*x,27*x,2),u.fillStyle=Y.mouth,$n(u,p,y,50*x,22*x,2),u.fillStyle=Y.mouthM,$n(u,p,y+3,38*x,15*x,2),u.fillStyle=Y.tongue,$n(u,p,y+6,24*x,8*x,2),u.fillStyle=Y.tongueL,u.fillRect(q(p-10*x),q(y+3),q(8*x),2)}}),T({type:"custom",layer:"top",dur:r,x:e.x,y:e.y,draw(u,f,h){const c=Di(t,n,h);if(c<=0)return;const[d,m]=l(h),[p,y]=C(d,m),x=S.T,b=Math.min(1,h.t/.25),M=t.ended?0:VM(h.t),v=y-4-b*(22+M*70);for(let _=0;_<2;_++){const[,A]=C(d,m,.3+_*.28),R=21-2*Math.sin(x*10+_),P=8;for(let z=0;z<=14;z++){const O=.12*Math.PI+z/14*.76*Math.PI,F=p+Math.cos(O)*R,X=A+Math.sin(O)*P;u.globalAlpha=c,u.fillStyle=Y.tongueD,u.fillRect(q(F)-3,q(X)-3,6,6),u.fillStyle=Y.tongue,u.fillRect(q(F)-2,q(X)-2,4,4)}}const w=ht(n);if(w&&!w.dead){const _=nu(w),A=C(d,m,.45);if(Math.hypot(A[0]-_[0],A[1]-_[1])>18){u.globalAlpha=c,ru(u,_,A,x,1,2);for(let R=0;R<5;R++){const P=(x*1.6+R/5)%1,z=A[0]+(_[0]-A[0])*P,O=A[1]+(_[1]-A[1])*P-3;u.fillStyle=Y.meat,u.fillRect(q(z)-3,q(O)-3,6,6),u.fillStyle=Y.meatL,u.fillRect(q(z)-2,q(O)-3,3,3)}}}YM(u,p,v,c*b,x),u.globalAlpha=c*b;for(let _=0;_<=26;_++){const A=_/26*Math.PI,R=p+Math.cos(A)*54,P=y+Math.sin(A)*25;u.fillStyle=Y.skinD,u.fillRect(q(R)-4,q(P)-3,8,8),u.fillStyle=Y.skin,u.fillRect(q(R)-3,q(P)-3,6,5),u.fillStyle=Y.skinL,u.fillRect(q(R)-3,q(P)-3,6,1),_%3===1&&_>1&&_<25&&(u.fillStyle=Y.ink,u.fillRect(q(R)-3,q(P)-10,6,8),u.fillStyle=Y.teeth,u.fillRect(q(R)-2,q(P)-9,4,6))}Math.random()<.2&&E(d+g(-.4,.4),m+g(-.2,.2),.9,0,0,-.5,.5,Y.slimeL,2,6,!1)}}),ot(eu(e)?6:2)}function jM(e,t,n){for(let r=0;r<9;r++){const o=Math.random()*An,i=g(.8,2.2);E(e,t,.6,Math.cos(o)*i,Math.sin(o)*i,g(1.5,3),.55,[Y.meat,Y.meatL,Y.fat,Y.slimeL][r%4],3,10,!1,.95)}ot(eu(n)?2.5:.6)}function QM(e,t,n){T({type:"custom",layer:"top",dur:.4,x:e,y:t,draw(r,o){const[i,a]=C(e,t),s=o<.3?1:1-(o-.3)/.7;r.globalAlpha=s,r.fillStyle=Y.skinD,$n(r,i,a-18*s,58*s,30*s,2),r.fillStyle=Y.skin,$n(r,i,a-22*s,52*s,25*s,2),r.fillStyle=Y.skinL,r.fillRect(q(i-30*s),q(a-40*s),q(60*s),3),r.fillStyle=Y.ink,r.fillRect(q(i-40*s),q(a-10*s),q(80*s),3)}}),Q0(e,t,1.8,!0),ot(eu(n)?7:2)}j.sapo_R=e=>{if(e.type==="channel"){KM(e);return}if(e.type==="channel_tick"){jM(e.x,e.y,e);return}if(e.type==="channel_end")if(um(e),e.kind==="done")QM(e.x,e.y,e);else for(let t=0;t<10;t++)E(e.x,e.y,.5,g(-1.2,1.2),g(-1.2,1.2),g(.5,1.5),.6,t%2?Y.gas:Y.slime,4,2,!1)};const t0=["hh..........","hhBBBBBBBBB.","..BbbbbbbbbB","..Bbbbbrbbbe","..Bbbbbbbbbe","..BBBBBBBBee"];De.sapo=e=>{const t=e.x,n=e.y,r=e.uid?ht(e.uid):null,o=r?r.x-r.y<t-n?1:-1:1;T({type:"custom",layer:"top",dur:.3,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5),u=a<.25?(1-a/.25)*30:0,f=3;i.globalAlpha=a<.6?1:(1-a)/.4;const h=t0[0].length,c=q(s-(o>0?h*f-6:6)),d=q(l-14-u),m={h:"#6a3a1e",B:Y.ink,b:"#a8acb4",r:Y.rust,e:"#ffffff"};for(const p in m){i.fillStyle=m[p];for(let y=0;y<t0.length;y++)for(let x=0;x<h;x++)t0[y][x]===p&&i.fillRect(c+(o>0?x:h-1-x)*f,d+y*f,f,f)}if(a>.25){const p=(a-.25)/.75;i.fillStyle=Y.fat,i.fillRect(q(s-10-p*16),q(l+6),q(8*(1-p))+1,2),i.fillRect(q(s+4+p*16),q(l+6),q(8*(1-p))+1,2)}}});for(let i=0;i<7;i++)E(t,n,.45,g(-1.4,1.4),g(-1.4,1.4),g(1,2.4),.4,[Y.meat,Y.meatL,Y.slime][i%3],3,10,!1)};const ye=Math.round,Gt={deep:"#123f5a",teal:"#1d7f8c",aqua:"#3fc4c0",sea:"#8ae8d8",foam:"#e8fffa",white:"#ffffff",sand:"#e9c27a",shell:"#b9772f",shellD:"#5e3818",lamp:"#ffd86a",lampW:"#fff6d0"};function Bl(e,t,n,r,o){e.fillStyle=o,e.fillRect(ye(t-r/2),ye(n-r/2),r,r)}const ds=(e,t=.15,n=.7)=>e<t?e/t:e>n?Math.max(0,(1-e)/(1-n)):1;function ZM(e,t,n,r,o,i){const a=t.length,s=t[0].length,l=ye(n-s*o/2),u=ye(r-a*o/2);for(let f=0;f<a;f++)for(let h=0;h<s;h++){const c=i[t[f][h]];c&&(e.fillStyle=c,e.fillRect(l+h*o,u+f*o,o,o))}}function fm(e,t,n,r,o){const i=ye(t),a=ye(n);o&&(e.fillStyle=o,e.fillRect(i-5,a-3,10,2),e.fillRect(i-7,a-1,14,2),e.fillRect(i-5,a+1,10,2)),e.fillStyle=r,e.fillRect(i-5,a-5,10,2),e.fillRect(i-5,a+3,10,2),e.fillRect(i-7,a-3,2,2),e.fillRect(i+5,a-3,2,2),e.fillRect(i-9,a-1,2,2),e.fillRect(i+7,a-1,2,2),e.fillRect(i-7,a+1,2,2),e.fillRect(i+5,a+1,2,2)}function e0(e,t,n,r,o,i,a,s){const l=Math.max(1,Math.ceil(Math.hypot(r-t,o-n)/i));e.fillStyle=s;for(let u=0;u<=l;u++){const f=u/l;e.fillRect(ye(t+(r-t)*f-a/2),ye(n+(o-n)*f-a/2),a,a)}}const JM=[".#####.","#a#a#a#","#a#a#a#",".#a#a#.","..###..","...#..."];function cm(e,t,n,r,o,i,a,s){e.fillStyle=Gt.deep,e.fillRect(t,n-o,r,o),e.fillStyle=Gt.teal,e.fillRect(t,n-o,r,ye(o*.62)),e.fillStyle=Gt.aqua,e.fillRect(t,n-o,r,ye(o*.3)),e.fillStyle=Gt.foam,e.fillRect(t+i,n-o-2+a,r,3),s&&(e.fillStyle=Gt.white,e.fillRect(t+i*2,n-o-4+a,3,2))}j.tortuga_Q=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||1.7,o=ht(e.uid);let i=1,a=0;if(o){const M=t-o.x,v=n-o.y,w=Math.hypot(M,v);w>.05&&(i=M/w,a=v/w)}const s=-a,l=i,u=s+l>=0?1:-1,f=(s-l)*$.HW,h=.13,c=Math.max(6,Math.ceil(Math.abs(f)*h)+2),d=(i-a)*$.HW,m=(i+a)*$.HH,p=Math.hypot(d,m)||1,y=ye(d/p*3),x=ye(m/p*2);T({type:"custom",layer:"ground",dur:2,x:t,y:n,draw(M,v){const w=Math.min(1,v*3)*(v>.6?(1-v)/.4:1);st(t,n,r*.95,null,`rgba(18,80,110,${.32*w})`);for(let _=0;_<2;_++){const A=(v*2.4+_*.5)%1,R=r*.9*A;M.globalAlpha=w*(1-A);for(let P=0;P<22;P++){const z=P/22*6.283,[O,F]=C(t+Math.cos(z)*R,n+Math.sin(z)*R);Bl(M,O,F,2,Gt.sea)}}M.globalAlpha=1}});const b={n:0,sp:!1};return T({type:"custom",layer:"top",dur:.75,x:t,y:n,draw(M,v){const w=-r*.95+v*r*1.9,_=Math.sin(Math.min(1,v*1.08)*Math.PI),A=Math.sqrt(Math.max(0,r*r-w*w))+.25,R=Math.floor(A*2/h);for(let P=0;P<=R;P++){const z=u>0?-A+P*h:A-P*h,O=1-Math.abs(z)/A,F=.85+.15*Math.sin(z*9+v*24),X=ye((8+30*Math.sqrt(Math.max(0,O)))*_*F/2)*2;if(X<4)continue;const[G,V]=C(t+i*w+s*z,n+a*w+l*z);cm(M,ye(G-c/2),ye(V),c,X,y,x,(z*7.7+v*30|0)%3===0)}if(b.n<32&&_>.3)for(let P=0;P<2;P++){b.n++;const z=g(-A,A);E(t+i*w+s*z,n+a*w+l*z,.35*_,i*g(.8,2),a*g(.8,2),g(1,2.5),.45,Math.random()<.5?Gt.foam:Gt.sea,2,7,!1)}if(!b.sp&&v>.82){b.sp=!0;for(let P=0;P<14;P++){const z=g(-r*.6,r*.6);E(t+i*r*.8+s*z,n+a*r*.8+l*z,.2,i*g(1,3)+g(-.5,.5),a*g(1,3)+g(-.5,.5),g(2,4),.55,Gt.aqua,3,9,!1)}ot(3)}}}),!0};function tb(e,t){T({type:"custom",layer:"top",add:!0,dur:.9,x:e,y:t,draw(n,r){const[o,i]=C(e,t,.1),a=ds(r,.1,.6);for(let s=0;s<10;s++){const l=s*.628+r*11,u=r*58+s*4,f=18*(1-r*.5),h=Math.sin(l)>0;n.globalAlpha=a*(h?1:.45),Bl(n,o+Math.cos(l)*f,i-u+Math.sin(l)*f*.45,h?3:2,s%2?Gt.sea:Gt.foam)}if(r>.45){n.globalAlpha=ds((r-.45)/.55,.2,.6);const s=ye(i-72-(r-.45)*20),l=ye(o);n.fillStyle=Gt.lamp,n.fillRect(l-5,s-1,10,3),n.fillRect(l-1,s-5,3,10)}n.globalAlpha=1}});for(let n=0;n<6;n++)E(e+g(-.3,.3),t+g(-.3,.3),.2,0,0,g(1.2,2.2),.8,Math.random()<.5?Gt.sea:Gt.foam,2,0,!0);return!0}j.tortuga_W=e=>{if(e.type==="heal")return tb(e.x,e.y);if(e.type!=="healring")return!1;const t=e.x,n=e.y,r=e.radius||4.2,o=e.uid;T({type:"custom",layer:"ground",add:!0,dur:1.1,x:t,y:n,draw(s,l){const u=ds(l,.12,.55);for(let f=0;f<3;f++)for(let h=0;h<26;h++){const c=h/26,d=r*(1-c)*.98,m=f*2.094+c*5+l*9,[p,y]=C(t+Math.cos(m)*d,n+Math.sin(m)*d);s.globalAlpha=u*(.35+.65*c),Bl(s,p,y,c>.6?3:2,h%3===0?Gt.foam:h%3===1?Gt.sea:Gt.aqua)}s.globalAlpha=1}});const i=[];for(let s=0;s<9;s++)i.push({a0:s/9*6.283+g(-.2,.2),d:s*.03+g(0,.05)});const a={"#":Gt.shell,a:Gt.sand};return T({type:"custom",layer:"top",dur:1.15,x:t,y:n,draw(s,l){for(const u of i){const f=Math.min(1,Math.max(0,(l-u.d)/.75));if(f<=0||f>=1)continue;const h=f*f*(3-2*f),c=r*.92*(1-h),d=u.a0+h*4.2+l*2,[m,p]=C(t+Math.cos(d)*c,n+Math.sin(d)*c,.12+Math.abs(Math.sin(f*Math.PI*3))*.06);s.globalAlpha=Math.min(1,f*6)*(f>.85?(1-f)/.15:1),ZM(s,JM,m,p,2,a)}s.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.9,x:t,y:n,draw(s,l){const u=ht(o),f=u?u.x:t,h=u?u.y:n,[c,d]=C(f,h,.95),m=ye(c),p=ye(d),y=ds(l,.08,.5),x=ye(6+16*Math.sin(Math.min(1,l*2)*Math.PI/2));s.globalAlpha=y*.3,s.fillStyle=Gt.lamp,s.fillRect(m-8,p-8,16,16),s.globalAlpha=y,s.fillRect(m-x,p-1,x*2,2),s.fillRect(m-1,p-x,2,x*2),s.fillStyle=Gt.lampW,s.fillRect(m-3,p-3,6,6);for(let b=0;b<8;b++){const M=b*.785+l*5,v=10+l*30;Bl(s,m+Math.cos(M)*v,p+Math.sin(M)*v*.5+l*40,2,Gt.lamp)}s.globalAlpha=1}}),!0};const hm=[];[[.16,10],[.62,8],[1.05,5],[1.5,1]].forEach(([e,t],n)=>{for(let r=0;r<t;r++)hm.push({th:r/t*6.283+n*.31,ph:e,row:n})});j.tortuga_E=e=>{if(e.type!=="stoneskin")return!1;const t=e.uid,n=e.dur||3,r=e.x,o=e.y,i={broke:!1};T({type:"custom",layer:"top",add:!0,dur:n,x:r,y:o,draw(a,s){const l=ht(t);if(!l||l.dead)return;const u=s*n,[f,h]=C(l.x,l.y),c=Math.min(1,u/.18),d=1+(1-c)*.7,m=Math.max(0,(u-(n-.25))/.25),p=36*d,y=18*d,x=62*d,b=u*1.6%2.2-.3,M=hm.map(v=>{const w=v.th+u*.5,_=Math.cos(v.ph);return{d:v,th:w,x:f+Math.cos(w)*p*_+Math.cos(w)*m*30,y:h+Math.sin(w)*y*_-Math.sin(v.ph)*x-4-m*10+m*m*30,z:Math.sin(w)*_}}).sort((v,w)=>v.z-w.z);for(const v of M){const w=u-(3-v.d.row)*.05;if(w<0)continue;v.y-=(1-Math.min(1,w/.1))*14;const _=v.z>-.15,A=Math.abs(v.d.ph-b)<.22;a.globalAlpha=(_?.85:.35)*(1-m)*Math.min(1,w*10),fm(a,v.x,v.y,w<.06||A?Gt.white:Gt.foam,A?"rgba(138,232,216,0.45)":"rgba(63,196,192,0.2)")}if(a.globalAlpha=1,!i.broke&&m>0){i.broke=!0;for(let v=0;v<16;v++){const w=g(0,6.283),_=g(1.5,3.5);E(l.x,l.y,g(.2,.9),Math.cos(w)*_,Math.sin(w)*_,g(1,3),.5,Math.random()<.5?Gt.foam:Gt.aqua,Math.random()<.4?3:2,8,!0)}}}});for(let a=0;a<10;a++){const s=a/10*6.283;E(r+Math.cos(s)*.5,o+Math.sin(s)*.5,.05,-Math.cos(s)*.8,-Math.sin(s)*.8,g(1.5,2.5),.4,Math.random()<.5?Gt.sand:Gt.shell,2,3,!1)}return!0};j.tortuga_R=e=>{if(e.type!=="splash")return!1;const t=e.x,n=e.y,r=e.radius||3.4,o=r*.24,i=[[0,0]];for(let u=0;u<6;u++){const f=Math.PI/6+u*Math.PI/3;i.push([Math.cos(f)*o*Math.sqrt(3),Math.sin(f)*o*Math.sqrt(3)])}T({type:"custom",layer:"ground",dur:1.9,x:t,y:n,draw(u,f){const h=ds(f,.06,.55),c=1+.35*Math.max(0,1-f/.1);st(t,n,r*.92*c,null,`rgba(16,70,95,${.35*h})`);const d=(m,p)=>C(t+m*c,n+p*c);for(let m=0;m<2;m++){u.globalAlpha=h*(m?.75:.85);const p=m?Gt.lamp:Gt.shellD,y=m?2:3,x=m?-1:0,b=m?-2:0;for(const[M,v]of i)for(let w=0;w<6;w++){const _=w*Math.PI/3,A=(w+1)*Math.PI/3,[R,P]=d(M+Math.cos(_)*o,v+Math.sin(_)*o),[z,O]=d(M+Math.cos(A)*o,v+Math.sin(A)*o);e0(u,R+x,P+b,z+x,O+b,5,y,p)}for(let M=0;M<22;M++){const v=M/22*6.283,[w,_]=d(Math.cos(v)*r*.66,Math.sin(v)*r*.66),[A,R]=d(Math.cos(v)*r*.86,Math.sin(v)*r*.86);e0(u,w+x,_+b,A+x,R+b,5,y,p);const P=(M+1)/22*6.283,[z,O]=d(Math.cos(P)*r*.86,Math.sin(P)*r*.86);e0(u,A+x,R+b,z+x,O+b,6,y,p)}}u.globalAlpha=1}});const a=60,s=Array.from({length:a},(u,f)=>f).sort((u,f)=>{const h=u/a*6.283,c=f/a*6.283;return Math.cos(h)+Math.sin(h)-(Math.cos(c)+Math.sin(c))}),l={crash:!1};T({type:"custom",layer:"top",dur:.95,x:t,y:n,draw(u,f){const h=Math.min(1,f*1.15),c=1-(1-h)*(1-h),d=r*(.3+.75*c),m=Math.sin(Math.min(1,f*1.05)*Math.PI),p=[];for(let y=0;y<a;y++){const x=y/a*6.283;p.push(C(t+Math.cos(x)*d,n+Math.sin(x)*d))}for(const y of s){const x=y/a*6.283,[b,M]=p[y],v=p[(y+1)%a][0],w=Math.max(4,Math.ceil(Math.abs(v-b))+2),_=ye((20+34*m)*(.82+.18*Math.sin(x*5+f*20))*m/2)*2;if(_<4)continue;const A=Math.cos(x)+Math.sin(x)>0;u.globalAlpha=A?.82:1;const R=A?2:-2;cm(u,ye(Math.min(b,v)-1),ye(M),w,_,ye(Math.cos(x-.785)*3),R,(y*7+(f*25|0))%4===0)}if(u.globalAlpha=1,!l.crash&&f>.7){l.crash=!0;for(let y=0;y<16;y++){const x=g(0,6.283);E(t+Math.cos(x)*d,n+Math.sin(x)*d,.3,Math.cos(x)*g(1,2.5),Math.sin(x)*g(1,2.5),g(1.5,3),.6,Math.random()<.5?Gt.foam:Gt.white,3,8,!1)}}}});for(let u=0;u<36;u++){const f=g(0,6.283),h=g(2,5);E(t+Math.cos(f)*.6,n+Math.sin(f)*.6,.4,Math.cos(f)*h,Math.sin(f)*h,g(3.5,6.5),g(.8,1.1),[Gt.aqua,Gt.sea,Gt.foam,Gt.teal][u%4],Math.random()<.3?4:3,12,!1,.97)}return ot(10),!0};De.tortuga=e=>{const t=e.x,n=e.y,r=!!e.big;T({type:"custom",layer:"ground",dur:r?.5:.4,x:t,y:n,draw(i,a){const[s,l]=C(t,n),u=ye(s),f=ye(l);for(let h=0;h<(r?3:2);h++){const c=a*1.3-h*.18;if(c<=0||c>=1)continue;const d=ye(6+c*(r?34:24)),m=ye(d/2);i.globalAlpha=1-c,i.fillStyle=h?Gt.sea:Gt.foam,i.fillRect(u-d,f-m,d*2,2),i.fillRect(u-d,f+m-2,d*2,2),i.fillRect(u-d,f-m,2,m*2),i.fillRect(u+d-2,f-m,2,m*2)}i.globalAlpha=1}}),T({type:"custom",layer:"top",add:!0,dur:.18,x:t,y:n,draw(i,a){const[s,l]=C(t,n,.5);i.globalAlpha=1-a,fm(i,s,l-a*8,Gt.sand,r?"rgba(255,216,106,0.35)":null),i.globalAlpha=1}});const o=r?9:5;for(let i=0;i<o;i++){const a=g(0,6.283),s=g(1,2.5);E(t,n,.4,Math.cos(a)*s,Math.sin(a)*s,g(1.5,3),.4,i%2?Gt.aqua:Gt.foam,2,9,!1)}};const xt=Math.round,lo=Math.PI*2,lt={fox:"#ff8a2a",foxD:"#c8501a",cream:"#fff0d8",leaf:"#6aaa3a",leafL:"#a8d860",leafD:"#3e6a24",autumn:"#e8963a",wood:"#8a5a30",woodD:"#4a2c18",steel:"#dfe6ee",f0:"#fff4c0",f1:"#ffb050",f2:"#ff6a2a",f3:"#d8386a",gold:"#ffd060"},dm=e=>e*$.HW*Math.SQRT2;function Ce(e,t,n,r){r=Math.max(1,xt(r));const o=Math.hypot(n[0]-t[0],n[1]-t[1]),i=Math.max(1,Math.ceil(o/Math.max(1,r*.7))),a=r/2;for(let s=0;s<=i;s++)e.fillRect(xt(t[0]+(n[0]-t[0])*s/i-a),xt(t[1]+(n[1]-t[1])*s/i-a),r,r)}function eb(e,t,n,r,o,i,a=!1){const s=t[0].length,l=t.length,u=xt(n-s*o/2),f=xt(r-l*o/2);for(const h in i){e.fillStyle=i[h];for(let c=0;c<l;c++)for(let d=0;d<s;d++)t[c][a?s-1-d:d]===h&&e.fillRect(u+d*o,f+c*o,o,o)}}function nb(e,t,n,r,o,i){const a=Math.abs(r),s=xt(t),l=xt(n);e.fillStyle=i,e.fillRect(s-1,l+2,1,2),a>.55?(e.fillStyle=o,e.fillRect(s-3,l,6,2),e.fillRect(s-2,l-1,4,1),e.fillRect(s-2,l+2,3,1),e.fillStyle=i,e.fillRect(s-2,l+1,4,1)):a>.2?(e.fillStyle=o,e.fillRect(s-2,l-1,3,4),e.fillStyle=i,e.fillRect(s-1,l,1,2)):(e.fillStyle=i,e.fillRect(s-1,l-1,1,4))}const ka=new Map;function mm(e){if(ka.has(e))return!1;if(ka.size>300)for(const[t,n]of ka)S.T-n>4&&ka.delete(t);return ka.set(e,S.T),!0}function rb(e){const t=S.game,n=[];if(!t)return n;const r=(e.w||.6)*.6;for(const o of t.units)o.dead||o.team===e.team||o.team==="neutral"&&o.kind!=="monster"||He(o)||Math.hypot(o.x-e.x,o.y-e.y)<r+(o.r||.4)&&n.push(o);return n}const ob=["...........o.o..","..........ooooo.","cc.......oooowoo","ctt..oooooooooo.",".ttooooooooooo..","..tooooooooooo..","....oo.....oo...","...o..o...o..o.."];De.zorra=e=>{const t=e.x,n=e.y,r=!!e.big;if(T({type:"custom",layer:"top",add:!0,dur:r?.3:.22,x:t,y:n,draw(o,i){const[a,s]=C(t,n,.5),l=xt(4+i*(r?18:12)),u=r?4:3;o.globalAlpha=1-i,o.fillStyle=lt.f1;for(const[f,h]of[[1,1],[-1,1],[1,-1],[-1,-1]])o.fillRect(a+f*l-u/2,s+h*l*.8-u/2,u,u);o.fillStyle=lt.f2;for(let f=0;f<6;f++){const h=f/6*lo+i*3;o.fillRect(xt(a+Math.cos(h)*(6+i*8))-1,xt(s+Math.sin(h)*(4+i*6))-1,2,2)}i<.4&&(o.fillStyle=lt.cream,o.fillRect(a-2,s-2,4,4))}}),E(t,n,.6,g(-.5,.5),g(-.5,.5),.4,.8,Math.random()<.5?lt.leaf:lt.autumn,3,1.2,!1,.96),r)for(let o=0;o<4;o++)E(t,n,.5,g(-1.5,1.5),g(-1.5,1.5),g(1,2),.3,lt.f1,2,4,!0)};Xe.zorra_A=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(h,c=0)=>[n+a*h-s*c,r+s*h+a*c];Mt(!0);const u=Bt();for(let h=0;h<3;h++){u.globalAlpha=.8-h*.22,u.fillStyle=h?lt.f2:lt.f1;const c=l(-15-h*4,Math.sin(i*40+h)*1.5);u.fillRect(xt(c[0])-2+(h>>1),xt(c[1])-2+(h>>1),4-h,4-h)}u.globalAlpha=1,Mt(!1),e.fillStyle=lt.woodD,Ce(e,l(-13),l(3),3),e.fillStyle=lt.wood,Ce(e,l(-12),l(2),1),e.fillStyle=lt.steel,Ce(e,l(3),l(7),3),e.fillStyle="#ffffff",Ce(e,l(6),l(8),1),e.fillStyle=lt.leaf,Ce(e,l(-13,0),l(-9,-3),2),e.fillStyle=lt.leafD,Ce(e,l(-13,1),l(-10,2),2);const f=typeof t.homing=="object"?t.homing:t.homing!=null?ht(t.homing):null;f&&!f.dead&&Math.hypot(f.x-t.x,f.y-t.y)<.25+(f.r||.4)*.5+(t.speed||15)*.035&&mm("za"+t.id)&&(De.zorra({x:f.x,y:f.y,big:t.dmg>(t.src&&t.src.ad||0)*1.3}),at.sfx("atk_zorra",f.x,f.y,.6))};j.zorra_Q=e=>{const t=e.ux||1,n=e.uy||0,r=e.x+t*.45,o=e.y+n*.45,i=C(e.x,e.y),a=C(e.x+t,e.y+n),s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,l=(a[0]-i[0])/s,u=(a[1]-i[1])/s;T({type:"custom",layer:"top",dur:.32,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.5),m=-u,p=l;f.globalAlpha=h<.6?1:(1-h)/.4;const y=[];for(let M=-5;M<=5;M++)y.push([c+m*M*3.4-l*M*M*.45,d+p*M*3.4-u*M*M*.45]);f.fillStyle=lt.woodD;for(const M of y)f.fillRect(xt(M[0])-2,xt(M[1])-2,4,4);f.fillStyle=lt.wood;for(const M of y)f.fillRect(xt(M[0])-1,xt(M[1])-1,2,2);f.fillStyle=lt.leaf;for(const M of[y[0],y[10]])f.fillRect(xt(M[0])-2,xt(M[1])-3,3,3);const x=h<.08?9*(1-h/.08):Math.sin(h*70)*3*(1-h),b=[c-l*(11.25+x),d-u*(11.25+x)];f.fillStyle=lt.cream,Ce(f,y[0],b,1),Ce(f,b,y[10],1)}}),T({type:"custom",layer:"top",add:!0,dur:.15,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.5),m=4+h*16;f.fillStyle=lt.f1;for(let p=0;p<8;p++){const y=p/8*lo;f.fillRect(xt(c+l*8+Math.cos(y)*m)-2,xt(d+u*8+Math.sin(y)*m*.7)-2,4,4)}}});for(let f=0;f<5;f++)E(r,o,.55,-n*g(-2,2)+t*g(0,1),t*g(-2,2)+n*g(0,1),g(.5,1.5),.9,f%2?lt.leaf:lt.leafL,3,1.5,!1,.95)};Xe.zorra_Q=(e,t,n,r,o,i)=>{const a=Math.cos(o),s=Math.sin(o),l=(f,h=0)=>[n+a*f-s*h,r+s*f+a*h];Mt(!0);const u=Bt();for(let f=0;f<=16;f++){const h=f/16,c=xt(2+7*Math.sin(Math.PI*Math.pow(h,.7))),d=Math.sin(i*30-h*7)*2.5*h,m=l(-22-h*46,d);u.globalAlpha=.85-h*.35,u.fillStyle=h>.8?lt.cream:h>.45?lt.fox:lt.f1,u.fillRect(xt(m[0]-c/2),xt(m[1]-c/2),c,c)}u.globalAlpha=1,Mt(!1),e.fillStyle=lt.woodD,Ce(e,l(-22),l(4),4),e.fillStyle=lt.wood,Ce(e,l(-21),l(3),2),e.fillStyle="#20202a",Ce(e,l(3,-4),l(12),3),Ce(e,l(3,4),l(12),3),e.fillStyle=lt.steel,Ce(e,l(4,-2),l(11),2),Ce(e,l(4,2),l(11),2),e.fillStyle="#ffffff",Ce(e,l(9),l(13),2);for(const f of[-1,1])e.fillStyle=lt.leafD,Ce(e,l(-23,0),l(-15,f*5),3),e.fillStyle=lt.leaf,Ce(e,l(-22,f),l(-16,f*4),2),e.fillStyle=lt.leafL,e.fillRect(xt(l(-17,f*4)[0]),xt(l(-17,f*4)[1]),2,2);Math.random()<.3&&E(t.x,t.y,t.z||.45,g(-.4,.4),g(-.4,.4),-.2,.7,Math.random()<.6?lt.leaf:lt.autumn,3,.6,!1,.95);for(const f of rb(t))if(mm("zq"+t.id+":"+f.id)){const h=t.vx||1,c=t.vy||0,d=Math.hypot(h,c)||1;T({type:"custom",layer:"top",add:!0,dur:.25,x:f.x,y:f.y,draw(m,p){const y=C(f.x-h/d*.7,f.y-c/d*.7,.5),x=C(f.x+h/d*.9,f.y+c/d*.9,.5);m.globalAlpha=1-p,m.fillStyle=lt.fox,Ce(m,y,x,xt(6*(1-p))+1),m.fillStyle=lt.cream,Ce(m,y,x,2)}});for(let m=0;m<6;m++)E(f.x,f.y,.5,h/d*g(1,3)+g(-.8,.8),c/d*g(1,3)+g(-.8,.8),g(.5,1.5),.35,m%2?lt.f1:lt.fox,2,3,!0)}};j.zorra_W=e=>{const t=e.uid,n=e.dur||4;let r=e.x,o=e.y;const i=Array.from({length:9},(a,s)=>({a:s/9*lo,h:s/9,sp:g(4.5,6),col:[lt.leaf,lt.leafL,lt.autumn][s%3],dk:s%3===2?lt.foxD:lt.leafD,r:g(.5,.65)}));for(let a=0;a<14;a++){const s=a/14*lo,l=g(1.5,2.5);E(e.x+Math.cos(s)*.3,e.y+Math.sin(s)*.3,g(.2,.8),Math.cos(s+1.3)*l,Math.sin(s+1.3)*l,g(.8,1.6),g(.6,.9),[lt.leaf,lt.leafL,lt.autumn][a%3],3,1,!1,.94)}T({type:"custom",layer:"top",dur:n,x:e.x,y:e.y,uid:t,draw(a,s,l){const u=ht(t),f=s*n;if(u&&(r=u.x,o=u.y),!u||u.dead||f>.2&&u.status&&!u.status.atkspd){for(const p of i)E(r+Math.cos(p.a+f*p.sp)*p.r,o+Math.sin(p.a+f*p.sp)*p.r,.5,Math.cos(p.a)*2,Math.sin(p.a)*2,.5,.7,p.col,3,1,!1,.93);l.t=1e9;return}const h=Math.min(1,f/.3),c=s>.92?(1-s)/.08:1,[d,m]=C(r,o,.35);a.globalAlpha=.55*c,a.fillStyle="#e8fff0";for(let p=0;p<2;p++){const y=f*7+p*Math.PI,x=dm(.62)*h;for(let b=0;b<7;b++){const M=y+b*.16;a.fillRect(xt(d+Math.cos(M)*x)-1,xt(m+Math.sin(M)*x*.45-p*14),3-(b>4?1:0),2)}}for(const p of i){const y=p.a+f*p.sp,x=(p.h+f*.45)%1,b=p.r*h*(1-x*.35),[M,v]=C(r+Math.cos(y)*b,o+Math.sin(y)*b,.15+x*1.1);a.globalAlpha=c*(Math.sin(y)>0?1:.55)*Math.min(1,(1-x)*4),nb(a,M,v,Math.sin(f*11+p.a*3),p.col,p.dk)}}})};j.zorra_E=e=>{const t=e.x,n=e.y,r=e.ex??e.x,o=e.ey??e.y,i=e.dur||.22,a=C(t,n),s=C(r,o),l=s[0]<a[0],u=[0,.34,.67,1].map(f=>({s:f,x:t+(r-t)*f,y:n+(o-n)*f}));T({type:"custom",layer:"top",add:!0,dur:i+.45,x:t,y:n,draw(f,h){const c=h*(i+.45);for(const d of u){const m=c-d.s*i;if(m<0||m>.42)continue;const p=.8*(1-m/.42),[y,x]=C(d.x,d.y,.32+m*.3);f.globalAlpha=p,eb(f,ob,y,x,3,{o:lt.f2,t:lt.f1,c:lt.f0,w:"#ffffff"},l);for(let b=0;b<4;b++){const M=y+(b-1.5)*9*(l?-1:1),v=xt(4+5*Math.abs(Math.sin(c*30+b*1.7))+m*14);f.fillStyle=b%2?lt.f3:lt.f1,f.fillRect(xt(M)-2,xt(x-12-v),4,v),f.fillStyle=lt.f0,f.fillRect(xt(M)-1,xt(x-12-v),2,2)}}}}),T({type:"custom",layer:"top",add:!0,dur:.55,delay:i,x:r,y:o,draw(f,h){const[c,d]=C(r,o,.3+h*.4),m=14+h*10;for(let p=0;p<6;p++){const y=p/6*lo+h*7;f.globalAlpha=(1-h)*(.6+.4*Math.sin(h*30+p)),f.fillStyle=p%2?lt.f3:lt.f2,f.fillRect(xt(c+Math.cos(y)*m)-3,xt(d+Math.sin(y)*m*.5)-3,6,6),f.fillStyle=lt.f0,f.fillRect(xt(c+Math.cos(y)*m)-1,xt(d+Math.sin(y)*m*.5)-1,2,2)}}});for(let f=0;f<16;f++){const h=Math.random();E(t+(r-t)*h+g(-.2,.2),n+(o-n)*h+g(-.2,.2),.3,g(-.3,.3),g(-.3,.3),g(.8,1.6),g(.5,.8),[lt.f1,lt.f2,lt.f3][f%3],3,-.5,!0,.95)}};const ol=3.1;function ib(e,t,n,r,o){const i=xt(t),a=xt(n),s=xt(Math.sin(o)*r),l=[3,4,4,4,3,3,2,2,1,1];for(let u=0;u<l.length;u++){const f=l[u]*r,h=u>4?xt(s*(u-4)/4):0,c=a-u*r*2;e.fillStyle=lt.f3,e.fillRect(i-f+h,c,f*2,r*2),u<8&&(e.fillStyle=lt.f1,e.fillRect(i-f+r+h,c,Math.max(r,f*2-r*2),r*2)),u<5&&(e.fillStyle=lt.f0,e.fillRect(i-xt(f/2)+h,c,Math.max(r,f),r*2))}e.fillStyle=lt.gold,e.fillRect(i-r,a-r*3,r*2,r*2)}function dd(e,t,n,r,o,i){const a=S.T,s=Jn(.8);for(let l=0;l<46;l++){const u=l/46*lo+.09,f=Math.cos(u),h=Math.sin(u);if(Xr(f,h,0)>0!==i)continue;const c=(a*1.25+l*.618%1)%1,d=ol*(1-c);sn(t+f*r*.95,n+h*r*.95,d);const m=xt(St.x),p=xt(St.y),y=o*Math.min(1,(1-c)*4)*(i?.85:.6);e.globalAlpha=y*.45,e.fillStyle=lt.f2,e.fillRect(m,p-xt(s),2,xt(s)),e.globalAlpha=y,e.fillStyle=lt.f1,e.fillRect(m,p-xt(s*.45),2,xt(s*.45)),e.fillStyle=i?lt.f0:lt.gold,e.fillRect(m-1,p-2,4,3)}}j.zorra_R=e=>{const t=e.x,n=e.y,r=e.radius||3.2,o=3.2,i=ht(e.uid),a=i?i.x:t-3,s=i?i.y:n-3;let l=a-t,u=s-n;const f=Math.hypot(l,u)||1;l/=f,u/=f,f<.5&&(l=-.7,u=-.7);const h=Array.from({length:7},(b,M)=>({ox:g(-.3,.3),oy:g(-.3,.3),dl:M*.03}));T({type:"custom",layer:"top",add:!0,dur:.5,x:a,y:s,draw(b,M){const v=M*.5;for(const w of h){const _=(v-w.dl)/.35;if(_<0||_>1)continue;const A=.6+_*4.5,R=a+w.ox-l*_*.8,P=s+w.oy-u*_*.8,z=C(R,P,A),O=C(R+l*.15,P+u*.15,A-.4);b.globalAlpha=1-_*.5,b.fillStyle=lt.fox,Ce(b,O,z,3),b.fillStyle=lt.f0,b.fillRect(xt(z[0])-2,xt(z[1])-2,4,4)}}});for(let b=0;b<8;b++)E(a,s,.6,g(-.5,.5),g(-.5,.5),g(2,4),.4,b%2?lt.gold:lt.f1,2,2,!0);const c=28,d=.45,m=Array.from({length:c},(b,M)=>{const v=Math.random()*lo,w=Math.sqrt(Math.random())*r*.92,_=t+Math.cos(v)*w,A=n+Math.sin(v)*w;return{t0:.3+M*(2.5/c)+g(-.04,.04),lx:_,ly:A,sx:_+l*1.8+g(-.3,.3),sy:A+u*1.8+g(-.3,.3),landed:!1,tang:[0,1]}}),p=(b,M)=>C(b.sx+(b.lx-b.sx)*M,b.sy+(b.ly-b.sy)*M,4*(1-M*M));T({type:"custom",layer:"top",add:!0,dur:o,x:t,y:n,draw(b,M){const v=M*o;for(const w of m){const _=(v-w.t0)/d;if(_<0)continue;if(_>=1){if(!w.landed){w.landed=!0,E(w.lx,w.ly,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.7?lt.f1:lt.leaf,2,6,!0);const X=p(w,1),G=p(w,.93),V=Math.hypot(X[0]-G[0],X[1]-G[1])||1;w.tang=[(X[0]-G[0])/V,(X[1]-G[1])/V]}const F=(v-w.t0-d)/.14;if(F<1){const[X,G]=C(w.lx,w.ly),V=xt(3+F*9);b.globalAlpha=1-F,b.fillStyle=lt.gold,b.fillRect(X-V,G-1,V*2,2),b.fillRect(X-1,G-xt(V/2),2,V)}continue}const A=p(w,_),R=p(w,Math.max(0,_-.07)),P=Math.hypot(A[0]-R[0],A[1]-R[1])||1,z=(A[0]-R[0])/P,O=(A[1]-R[1])/P;b.globalAlpha=.35,b.fillStyle=lt.f2;for(let F=1;F<=4;F++){const X=p(w,Math.max(0,_-F*.05));b.fillRect(xt(X[0])-1,xt(X[1])-1,3,3)}b.globalAlpha=1,b.fillStyle=lt.fox,Ce(b,[A[0]-z*16,A[1]-O*16],A,3),b.fillStyle=lt.gold,Ce(b,[A[0]-z*14,A[1]-O*14],A,1),b.fillStyle="#ffffff",b.fillRect(xt(A[0])-2,xt(A[1])-2,4,4)}}});const y=pi(e,3),x=()=>S.T-y.t0;T({type:"custom",layer:"ground",dur:o+1,x:t,y:n,draw(b,M,v){const w=Mn(y);if(w<=0){v.t=v.dur+1;return}const _=Math.min(1,x()/.3,w/.35);dd(b,t,n,r,_,!1),fo(y,t,n,r*1.05,16747050,.55*_)}}),T({type:"custom",layer:"top",add:!0,dur:o+1,x:t,y:n,draw(b,M,v){const w=Mn(y);if(w<=0){v.t=v.dur+1;return}const _=x(),A=Math.min(1,_/.3,w/.35);dd(b,t,n,r,A,!0);const R=1-Math.pow(1-Math.min(1,_/.4),3),P=w<.35?(.35-w)*2.4:0;b.globalAlpha=A*.7,b.fillStyle=lt.f2,Zr(b,t,n,ol+P,r*.86*R,90,3,-_*.9,0),b.fillStyle=lt.gold,Zr(b,t,n,ol+P-.06,r*.86*R,18,3,_*1.7,1);for(let z=0;z<2;z++)for(let O=0;O<9;O++){const F=O/9*lo+_*.9,X=Math.cos(F),G=Math.sin(F),V=Xr(X,G,0)>0;z===1===V&&(sn(t+X*r*.86*R,n+G*r*.86*R,ol+P+Math.sin(_*3+O)*.08),b.globalAlpha=A*(V?1:.6),ib(b,St.x,St.y,V?3:2,_*9+O*1.3))}}}),T({type:"custom",layer:"ground",dur:o,x:t,y:n,draw(b,M,v){const w=M*o,_=M>.85?(1-M)/.15:Math.min(1,w*4),[A,R]=C(t,n),P=dm(r);!v.sh&&w>.75&&(v.sh=!0,ot(3)),b.globalAlpha=.7*_,b.fillStyle=lt.fox;for(let z=0;z<10;z++){const O=z/10*lo+w*.6,F=A+Math.cos(O)*P,X=R+Math.sin(O)*P*.5,G=-Math.cos(O),V=-Math.sin(O)*.5;b.fillRect(xt(F)-2,xt(X)-2,4,4),b.fillRect(xt(F+G*6-V*4)-1,xt(X+V*6+G*2)-1,3,3),b.fillRect(xt(F+G*6+V*4)-1,xt(X+V*6-G*2)-1,3,3)}for(const z of m){if(!z.landed)continue;const[O,F]=C(z.lx,z.ly),X=z.tang[0],G=z.tang[1];b.globalAlpha=_,b.fillStyle="#00000055",b.fillRect(xt(O)-3,xt(F),6,2),b.fillStyle=lt.woodD,Ce(b,[O-X*13,F-G*13],[O,F],3),b.fillStyle=lt.wood,Ce(b,[O-X*12,F-G*12],[O-X*2,F-G*2],1),b.fillStyle=lt.leaf,b.fillRect(xt(O-X*13)-2,xt(F-G*13)-1,2,3),b.fillStyle=lt.autumn,b.fillRect(xt(O-X*13),xt(F-G*13)-2,2,3)}}})};var re=`in vec2 aPosition;
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
`,oe=`struct GlobalFilterUniforms {
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
}`,ab=`in vec2 vTextureCoord;
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
`,sb=`struct AdjustmentUniforms {
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
}`,lb=Object.defineProperty,ub=(e,t,n)=>t in e?lb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pm=(e,t,n)=>(ub(e,typeof t!="symbol"?t+"":t,n),n);const fb=class ym extends ne{constructor(t){t={...ym.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:sb,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:ab,name:"adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),pm(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};pm(fb,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var cb=`
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
}`,hb=`struct KawaseBlurUniforms {
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
}`,db=`
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
`,mb=`struct KawaseBlurUniforms {
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
}`,pb=Object.defineProperty,yb=(e,t,n)=>t in e?pb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vo=(e,t,n)=>(yb(e,typeof t!="symbol"?t+"":t,n),n);const gm=class xm extends ne{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n))&&(Dt("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),n={strength:n},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.clamp=t[2])),n={...xm.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:n?.clamp?mb:hb,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:n?.clamp?db:cb,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Vo(this,"uniforms"),Vo(this,"_pixelSize",{x:0,y:0}),Vo(this,"_clamp"),Vo(this,"_kernels",[]),Vo(this,"_blur"),Vo(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=n.pixelSize??{x:1,y:1},Array.isArray(n.strength)?this.kernels=n.strength:typeof n.strength=="number"&&(this._blur=n.strength,this.quality=n.quality??3),this._clamp=!!n.clamp}apply(t,n,r,o){const i=this.pixelSizeX/n.source.width,a=this.pixelSizeY/n.source.height;let s;if(this._quality===1||this._blur===0)s=this._kernels[0]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,n,r,o);else{const l=Wn.getSameSizeTexture(n);let u=n,f=l,h;const c=this._quality-1;for(let d=0;d<c;d++)s=this._kernels[d]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,f,!0),h=u,u=f,f=h;s=this._kernels[c]+.5,this.uniforms.uOffset[0]=s*i,this.uniforms.uOffset[1]=s*a,t.applyFilter(this,u,r,o),Wn.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,n)=>t+n+.5,0))}_generateKernels(){const t=this._blur,n=this._quality,r=[t];if(t>0){let o=t;const i=t/n;for(let a=1;a<n;a++)o-=i,r.push(o)}this._kernels=r,this._updatePadding()}};Vo(gm,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Mm=gm;var gb=`in vec2 vTextureCoord;
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
`,xb=`struct AdvancedBloomUniforms {
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
`,Mb=`
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
`,bb=`struct ExtractBrightnessUniforms {
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
`,vb=Object.defineProperty,Sb=(e,t,n)=>t in e?vb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bm=(e,t,n)=>(Sb(e,typeof t!="symbol"?t+"":t,n),n);const vm=class Sm extends ne{constructor(t){t={...Sm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:bb,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Mb,name:"extract-brightness-filter"});super({gpuProgram:n,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),bm(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};bm(vm,"DEFAULT_OPTIONS",{threshold:.5});let wb=vm;var _b=Object.defineProperty,Ab=(e,t,n)=>t in e?_b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pi=(e,t,n)=>(Ab(e,typeof t!="symbol"?t+"":t,n),n);const wm=class _m extends ne{constructor(t){t={..._m.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:xb,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:gb,name:"advanced-bloom-filter"});super({gpuProgram:n,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:Pt.WHITE}}),Pi(this,"uniforms"),Pi(this,"bloomScale",1),Pi(this,"brightness",1),Pi(this,"_extractFilter"),Pi(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new wb({threshold:t.threshold}),this._blurFilter=new Mm({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,n,r,o){const i=Wn.getSameSizeTexture(n);this._extractFilter.apply(t,n,i,!0);const a=Wn.getSameSizeTexture(n);this._blurFilter.apply(t,i,a,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=a.source,t.applyFilter(this,n,r,o),Wn.returnTexture(a),Wn.returnTexture(i)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};Pi(wm,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});let Tb=wm;var Rb=`precision highp float;
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
`,Cb=`struct AsciiUniforms {
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
}`,Pb=Object.defineProperty,Ib=(e,t,n)=>t in e?Pb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z0=(e,t,n)=>(Ib(e,typeof t!="symbol"?t+"":t,n),n);const zb=class Am extends ne{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Dt("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),n={size:n});const r=n?.color&&n.replaceColor!==!1;n={...Am.DEFAULT_OPTIONS,...n};const o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Cb,entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:Rb,name:"ascii-filter"});super({gpuProgram:o,glProgram:i,resources:{asciiUniforms:{uSize:{value:n.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Z0(this,"uniforms"),Z0(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new an,this.color=n.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Z0(zb,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Ob=`precision highp float;
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
`,Fb=`struct BevelUniforms {
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
}`,Eb=Object.defineProperty,Lb=(e,t,n)=>t in e?Eb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ii=(e,t,n)=>(Lb(e,typeof t!="symbol"?t+"":t,n),n);const kb=class Tm extends ne{constructor(t){t={...Tm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Fb,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Ob,name:"bevel-filter"});super({gpuProgram:n,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Ii(this,"uniforms"),Ii(this,"_thickness"),Ii(this,"_rotation"),Ii(this,"_lightColor"),Ii(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new an,this._shadowColor=new an,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/oa}set rotation(t){this._rotation=t*oa,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[n,r,o]=this._lightColor.toArray();this.uniforms.uLightColor[0]=n,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=o}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[n,r,o]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=n,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=o}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Ii(kb,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Ub=Object.defineProperty,Db=(e,t,n)=>t in e?Ub(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,il=(e,t,n)=>(Db(e,typeof t!="symbol"?t+"":t,n),n);const Xb=class Rm extends Ug{constructor(...t){let n=t[0]??{};if(typeof n=="number"||Array.isArray(n)||"x"in n&&"y"in n){Dt("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=n;Array.isArray(r)&&(r={x:r[0],y:r[1]}),n={strength:r},t[1]!==void 0&&(n.quality=t[1]),t[2]!==void 0&&(n.resolution=t[2]),t[3]!==void 0&&(n.kernelSize=t[3])}n={...Rm.DEFAULT_OPTIONS,...n},super(),il(this,"_blurXFilter"),il(this,"_blurYFilter"),il(this,"_strength"),this._strength={x:2,y:2},n.strength&&(typeof n.strength=="number"?(this._strength.x=n.strength,this._strength.y=n.strength):(this._strength.x=n.strength.x,this._strength.y=n.strength.y)),this._blurXFilter=new Nc({...n,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Nc({...n,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,n)}apply(t,n,r,o){const i=Wn.getSameSizeTexture(n);t.applyFilter(this,n,r,o),this._blurXFilter.apply(t,n,i,!0),this._blurYFilter.apply(t,i,r,!1),Wn.returnTexture(i)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return Dt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){Dt("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return Dt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){Dt("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return Dt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){Dt("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};il(Xb,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Gb=`precision highp float;
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
`,Bb=`struct BulgePinchUniforms {
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
}`,Nb=Object.defineProperty,$b=(e,t,n)=>t in e?Nb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cm=(e,t,n)=>($b(e,typeof t!="symbol"?t+"":t,n),n);const Hb=class Pm extends ne{constructor(t){t={...Pm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Bb,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Gb,name:"bulge-pinch-filter"});super({gpuProgram:n,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Cm(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Cm(Hb,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Wb=`precision highp float;
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
`,qb=`in vec2 aPosition;
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
`,md=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,yi=yi||{};yi.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var n=e.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+e.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=e.visit(t.at),o=e.visit(t.style);return o&&(n+=" "+o),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=e.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=e.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,o=e.visit(n.length);return o&&(r+=" "+o),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach(function(o,i){n+=e.visit(o),i<r-1&&(n+=", ")}),n},visit:function(t){if(!t)return"";if(t instanceof Array)return e.visit_array(t);if(t.type){var n=e["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var yi=yi||{};yi.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function n(k){var U=new Error(t+": "+k);throw U.source=t,U}function r(){var k=o();return t.length>0&&n("Invalid input not EOF"),k}function o(){return M(i)}function i(){return a("linear-gradient",e.linearGradient,l)||a("repeating-linear-gradient",e.repeatingLinearGradient,l)||a("radial-gradient",e.radialGradient,h)||a("repeating-radial-gradient",e.repeatingRadialGradient,h)}function a(k,U,N){return s(U,function(H){var K=N();return K&&(V(e.comma)||n("Missing comma before color stops")),{type:k,orientation:K,colorStops:M(v)}})}function s(k,U){var N=V(k);if(N){V(e.startCall)||n("Missing (");var H=U(N);return V(e.endCall)||n("Missing )"),H}}function l(){return u()||f()}function u(){return G("directional",e.sideOrCorner,1)}function f(){return G("angular",e.angleValue,1)}function h(){var k,U=c(),N;return U&&(k=[],k.push(U),N=t,V(e.comma)&&(U=c(),U?k.push(U):t=N)),k}function c(){var k=d()||m();if(k)k.at=y();else{var U=p();if(U){k=U;var N=y();N&&(k.at=N)}else{var H=x();H&&(k={type:"default-radial",at:H})}}return k}function d(){var k=G("shape",/^(circle)/i,0);return k&&(k.style=X()||p()),k}function m(){var k=G("shape",/^(ellipse)/i,0);return k&&(k.style=O()||p()),k}function p(){return G("extent-keyword",e.extentKeywords,1)}function y(){if(G("position",/^at/,0)){var k=x();return k||n("Missing positioning value"),k}}function x(){var k=b();if(k.x||k.y)return{type:"position",value:k}}function b(){return{x:O(),y:O()}}function M(k){var U=k(),N=[];if(U)for(N.push(U);V(e.comma);)U=k(),U?N.push(U):n("One extra comma");return N}function v(){var k=w();return k||n("Expected color definition"),k.length=O(),k}function w(){return A()||P()||R()||_()}function _(){return G("literal",e.literalColor,0)}function A(){return G("hex",e.hexColor,1)}function R(){return s(e.rgbColor,function(){return{type:"rgb",value:M(z)}})}function P(){return s(e.rgbaColor,function(){return{type:"rgba",value:M(z)}})}function z(){return V(e.number)[1]}function O(){return G("%",e.percentageValue,1)||F()||X()}function F(){return G("position-keyword",e.positionKeywords,1)}function X(){return G("px",e.pixelValue,1)||G("em",e.emValue,1)}function G(k,U,N){var H=V(U);if(H)return{type:k,value:H[N]}}function V(k){var U,N;return N=/^[\n\r\t\s]+/.exec(t),N&&L(N[0].length),U=k.exec(t),U&&L(U[0].length),U}function L(k){t=t.substr(k)}return function(k){return t=k.toString(),r()}}();var Vb=yi.parse;yi.stringify;function Yb(e){const t=Vb(nv(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const n=t[0],r=Kb(n.type),o=jb(n.colorStops),i=tv(n.orientation);return{type:r,stops:o,angle:i}}function Kb(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function jb(e){const t=Zb(e),n=[],r=new an;for(let o=0;o<e.length;o++){const i=Qb(e[o]),a=r.setValue(i).toArray();n.push({offset:t[o],color:a.slice(0,3),alpha:a[3]})}return n}function Qb(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function Zb(e){const t=[];for(let i=0;i<e.length;i++){const a=e[i];let s=-1;a.type==="literal"&&a.length&&"type"in a.length&&a.length.type==="%"&&"value"in a.length&&(s=parseFloat(a.length.value)/100),t.push(s)}const r=i=>{for(let a=i;a<t.length;a++)if(t[a]!==-1)return{indexDelta:a-i,offset:t[a]};return{indexDelta:t.length-1-i,offset:1}};let o=0;for(let i=0;i<t.length;i++){const a=t[i];if(a!==-1)o=a;else if(i===0)t[i]=0;else if(i+1===t.length)t[i]=1;else{const s=r(i),u=(s.offset-o)/(1+s.indexDelta);for(let f=0;f<=s.indexDelta;f++)t[i+f]=o+(f+1)*u;i+=s.indexDelta,o=t[i]}}return t.map(Jb)}function Jb(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function tv(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return ev(e.value)}return 0}function ev(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function nv(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var rv=Object.defineProperty,ov=(e,t,n)=>t in e?rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,li=(e,t,n)=>(ov(e,typeof t!="symbol"?t+"":t,n),n);const n0=90;function iv(e){return[...e].sort((t,n)=>t.offset-n.offset)}const ms=class al extends ne{constructor(t){if(t&&"css"in t?t={...Yb(t.css||""),alpha:t.alpha??al.defaults.alpha,maxColors:t.maxColors??al.defaults.maxColors}:t={...al.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const n=Yt.from({vertex:{source:md,entryPoint:"mainVertex"},fragment:{source:md,entryPoint:"mainFragment"}}),r=Zt.from({vertex:qb,fragment:Wb,name:"color-gradient-filter"}),o=32;super({gpuProgram:n,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??n0,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(o*3),type:"vec3<f32>",size:o},uStops:{value:new Float32Array(o*4),type:"vec4<f32>",size:o}}}}),li(this,"baseUniforms"),li(this,"stopsUniforms"),li(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const n=iv(t),r=new an;let o,i,a;for(let s=0;s<n.length;s++){r.setValue(n[s].color);const l=s*3;[o,i,a]=r.toArray(),this.stopsUniforms.uColors[l]=o,this.stopsUniforms.uColors[l+1]=i,this.stopsUniforms.uColors[l+2]=a,this.stopsUniforms.uStops[s*4]=n[s].offset,this.stopsUniforms.uStops[s*4+1]=n[s].alpha}this.baseUniforms.uCounts[0]=n.length,this._stops=n}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+n0}set angle(t){this.baseUniforms.uOptions[1]=t-n0}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};li(ms,"LINEAR",0);li(ms,"RADIAL",1);li(ms,"CONIC",2);li(ms,"defaults",{type:ms.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var av=`in vec2 vTextureCoord;
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

}`,sv=`struct ColorMapUniforms {
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
}`,lv=Object.defineProperty,uv=(e,t,n)=>t in e?lv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Wr=(e,t,n)=>(uv(e,typeof t!="symbol"?t+"":t,n),n);const fv=class Im extends ne{constructor(...t){let n=t[0]??{};if((n instanceof Pt||n instanceof kn)&&(Dt("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),n={colorMap:n},t[1]!==void 0&&(n.nearest=t[1]),t[2]!==void 0&&(n.mix=t[2])),n={...Im.DEFAULT_OPTIONS,...n},!n.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:sv,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:av,name:"color-map-filter"});super({gpuProgram:r,glProgram:o,resources:{colorMapUniforms:{uMix:{value:n.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:n.colorMap.source,uMapSampler:n.colorMap.source.style}}),Wr(this,"uniforms"),Wr(this,"_size",0),Wr(this,"_sliceSize",0),Wr(this,"_slicePixelSize",0),Wr(this,"_sliceInnerSize",0),Wr(this,"_nearest",!1),Wr(this,"_scaleMode","linear"),Wr(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,n)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const n=t instanceof Pt?t.source:t;n.style.scaleMode=this._scaleMode,n.autoGenerateMipmaps=!1,this._size=n.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=n,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const n=this._colorMap;n&&n.source&&(n.source.scaleMode=this._scaleMode,n.source.autoGenerateMipmaps=!1,n.source.style.update(),n.source.update())}updateColorMap(){const t=this._colorMap;t?.source&&(t.source.update(),this.colorMap=t)}destroy(){this._colorMap?.destroy(),super.destroy()}};Wr(fv,"DEFAULT_OPTIONS",{colorMap:Pt.WHITE,nearest:!1,mix:1});var cv=`in vec2 vTextureCoord;
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
`,dv=Object.defineProperty,mv=(e,t,n)=>t in e?dv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J0=(e,t,n)=>(mv(e,typeof t!="symbol"?t+"":t,n),n);const pv=class zm extends ne{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Dt("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),n={color:n},t[1]!==void 0&&(n.alpha=t[1])),n={...zm.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:hv,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:cv,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:o,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"}}}}),J0(this,"uniforms"),J0(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new an,this.color=n.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};J0(pv,"DEFAULT_OPTIONS",{color:0,alpha:1});var yv=`in vec2 vTextureCoord;
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
}`,xv=Object.defineProperty,Mv=(e,t,n)=>t in e?xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sl=(e,t,n)=>(Mv(e,typeof t!="symbol"?t+"":t,n),n);const bv=class Om extends ne{constructor(...t){let n=t[0]??{};(typeof n=="number"||Array.isArray(n)||n instanceof Float32Array)&&(Dt("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),n={originalColor:n},t[1]!==void 0&&(n.targetColor=t[1]),t[2]!==void 0&&(n.tolerance=t[2])),n={...Om.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:gv,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:yv,name:"color-replace-filter"});super({gpuProgram:r,glProgram:o,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:n.tolerance,type:"f32"}}}}),sl(this,"uniforms"),sl(this,"_originalColor"),sl(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new an,this._targetColor=new an,this.originalColor=n.originalColor??16711680,this.targetColor=n.targetColor??0,Object.assign(this,n)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[n,r,o]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=n,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=o}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[n,r,o]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=n,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=o}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){Dt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return Dt("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){Dt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Dt("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};sl(bv,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var vv=`in vec2 vTextureCoord;
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
}`,wv=Object.defineProperty,_v=(e,t,n)=>t in e?wv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fm=(e,t,n)=>(_v(e,typeof t!="symbol"?t+"":t,n),n);const Av=class Em extends ne{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Dt("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),n={matrix:n},t[1]!==void 0&&(n.width=t[1]),t[2]!==void 0&&(n.height=t[2])),n={...Em.DEFAULT_OPTIONS,...n};const r=n.width??200,o=n.height??200,i=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Sv,entryPoint:"mainFragment"}}),a=Zt.from({vertex:re,fragment:vv,name:"convolution-filter"});super({gpuProgram:i,glProgram:a,resources:{convolutionUniforms:{uMatrix:{value:n.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/o},type:"vec2<f32>"}}}}),Fm(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=o}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((n,r)=>{this.uniforms.uMatrix[r]=n})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Fm(Av,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Tv=`precision highp float;
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
`,Rv=`struct CRTUniforms {
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
}`,Cv=Object.defineProperty,Pv=(e,t,n)=>t in e?Cv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ll=(e,t,n)=>(Pv(e,typeof t!="symbol"?t+"":t,n),n);const Iv=class Lm extends ne{constructor(t){t={...Lm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Rv,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Tv,name:"crt-filter"});super({gpuProgram:n,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ll(this,"uniforms"),ll(this,"seed"),ll(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};ll(Iv,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var zv=`precision highp float;
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
}`,Fv=Object.defineProperty,Ev=(e,t,n)=>t in e?Fv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lv=(e,t,n)=>(Ev(e,t+"",n),n);const kv=class km extends ne{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Dt("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),n={scale:n},t[1]!==void 0&&(n.angle=t[1]),t[2]!==void 0&&(n.grayscale=t[2])),n={...km.DEFAULT_OPTIONS,...n};const r={uScale:{value:n.scale,type:"f32"},uAngle:{value:n.angle,type:"f32"},uGrayScale:{value:n.grayscale?1:0,type:"f32"}},o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Ov,entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:zv,name:"dot-filter"});super({gpuProgram:o,glProgram:i,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};Lv(kv,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Uv=`precision highp float;
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
}`,Xv=Object.defineProperty,Gv=(e,t,n)=>t in e?Xv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zi=(e,t,n)=>(Gv(e,typeof t!="symbol"?t+"":t,n),n);const Bv=class Um extends ne{constructor(t){t={...Um.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Dv,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Uv,name:"drop-shadow-filter"});super({gpuProgram:n,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),zi(this,"uniforms"),zi(this,"shadowOnly",!1),zi(this,"_color"),zi(this,"_blurFilter"),zi(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new an,this.color=t.color??0,this._blurFilter=new Mm({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new ne({gpuProgram:Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:Zt.from({vertex:re,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,n,r,o){const i=Wn.getSameSizeTexture(n);t.applyFilter(this,n,i,!0),this._blurFilter.apply(t,i,r,o),this.shadowOnly||t.applyFilter(this._basePass,n,r,!1),Wn.returnTexture(i)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};zi(Bv,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Nv=`precision highp float;
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
const MIRROR: i32 = 4;`,Hv=Object.defineProperty,Wv=(e,t,n)=>t in e?Hv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ar=(e,t,n)=>(Wv(e,typeof t!="symbol"?t+"":t,n),n);const qv=class Dm extends ne{constructor(t){t={...Dm.defaults,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:$v,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Nv,name:"glitch-filter"}),o=document.createElement("canvas");o.width=4,o.height=t.sampleSize??512;const i=new Pt({source:new Xf({resource:o})});super({gpuProgram:n,glProgram:r,resources:{glitchUniforms:{uSeed:{value:t?.seed??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:t?.fillMode??0,type:"f32"},uOffset:{value:t?.offset??100,type:"f32"},uDirection:{value:t?.direction??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:i.source,uDisplacementSampler:i.source.style}}),Ar(this,"uniforms"),Ar(this,"average",!1),Ar(this,"minSize",8),Ar(this,"sampleSize",512),Ar(this,"_canvas"),Ar(this,"texture"),Ar(this,"_slices",0),Ar(this,"_sizes",new Float32Array(1)),Ar(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=o,this.texture=i,Object.assign(this,t)}apply(t,n,r,o){const{width:i,height:a}=n.frame;this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,t.applyFilter(this,n,r,o)}_randomizeSizes(){const t=this._sizes,n=this._slices-1,r=this.sampleSize,o=Math.min(this.minSize/r,.9/this._slices);if(this.average){const i=this._slices;let a=1;for(let s=0;s<n;s++){const l=a/(i-s),u=Math.max(l*(1-Math.random()*.6),o);t[s]=u,a-=u}t[n]=a}else{let i=1;const a=Math.sqrt(1/this._slices);for(let s=0;s<n;s++){const l=Math.max(a*i*Math.random(),o);t[s]=l,i-=l}t[n]=i}this.shuffle()}shuffle(){const t=this._sizes,n=this._slices-1;for(let r=n;r>0;r--){const o=Math.random()*r>>0,i=t[r];t[r]=t[o],t[o]=i}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let o,i=0;for(let a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);const s=this._sizes[a]*t,l=o>0?o:0,u=o<0?-o:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,i>>0,t,s+1>>0),i+=s}n.source.update()}set sizes(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const n=Math.min(this._slices,t.length);for(let r=0;r<n;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/oa}set direction(t){this.uniforms.uDirection=t*oa}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){this.texture?.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Ar(qv,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Vv=`precision highp float;
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

const PI: f32 = 3.14159265358979323846264;`,Kv=Object.defineProperty,jv=(e,t,n)=>t in e?Kv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tf=(e,t,n)=>(jv(e,typeof t!="symbol"?t+"":t,n),n);const Qv=class Xm extends ne{constructor(t){t={...Xm.DEFAULT_OPTIONS,...t};const n=t.distance??10,r=t.quality??.1,o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Yv,entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:Vv.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/n).toFixed(7)}`).replace(/__DIST__/gi,`${n.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:o,glProgram:i,resources:{glowUniforms:{uDistance:{value:n,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:t?.knockout??!1?1:0,type:"f32"}}},padding:n}),tf(this,"uniforms"),tf(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new an,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};tf(Qv,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Zv=`precision highp float;
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

\${PERLIN}`,t4=`vec3 mod289(vec3 x)
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
`,e4=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,n4=Object.defineProperty,r4=(e,t,n)=>t in e?n4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Oi=(e,t,n)=>(r4(e,typeof t!="symbol"?t+"":t,n),n);const o4=class Gm extends ne{constructor(t){t={...Gm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:Jv.replace("${PERLIN}",e4),entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:Zv.replace("${PERLIN}",t4),name:"god-ray-filter"});super({gpuProgram:n,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Oi(this,"uniforms"),Oi(this,"time",0),Oi(this,"_angleLight",[0,0]),Oi(this,"_angle",0),Oi(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){const i=n.frame.width,a=n.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=i,this.uniforms.uDimensions[1]=a,this.uniforms.uAspect=a/i,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get angle(){return this._angle}set angle(t){this._angle=t;const n=t*oa;this._angleLight[0]=Math.cos(n),this._angleLight[1]=Math.sin(n)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Oi(o4,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var i4=`in vec2 vTextureCoord;
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
`,a4=`struct HslUniforms {
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
}`,s4=Object.defineProperty,l4=(e,t,n)=>t in e?s4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ef=(e,t,n)=>(l4(e,typeof t!="symbol"?t+"":t,n),n);const u4=class Bm extends ne{constructor(t){t={...Bm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:a4,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:i4,name:"hsl-adjustment-filter"});super({gpuProgram:n,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),ef(this,"uniforms"),ef(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};ef(u4,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var f4=`precision highp float;
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
`,c4=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,h4=Object.defineProperty,d4=(e,t,n)=>t in e?h4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nf=(e,t,n)=>(d4(e,typeof t!="symbol"?t+"":t,n),n);const m4=class Nm extends ne{constructor(...t){let n=t[0]??{};if(Array.isArray(n)||"x"in n&&"y"in n||n instanceof rn){Dt("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const i="x"in n?n.x:n[0],a="y"in n?n.y:n[1];n={velocity:{x:i,y:a}},t[1]!==void 0&&(n.kernelSize=t[1]),t[2]!==void 0&&(n.offset=t[2])}n={...Nm.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:c4,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:f4,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{motionBlurUniforms:{uVelocity:{value:n.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(n.kernelSize??5),type:"i32"},uOffset:{value:n.offset,type:"f32"}}}}),nf(this,"uniforms"),nf(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,n)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};nf(m4,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var p4=`in vec2 vTextureCoord;
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
`,y4=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,g4=Object.defineProperty,x4=(e,t,n)=>t in e?g4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ul=(e,t,n)=>(x4(e,typeof t!="symbol"?t+"":t,n),n);const M4=class $m extends ne{constructor(...t){let n=t[0]??{};Array.isArray(n)&&(Dt("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),n={replacements:n},t[1]&&(n.tolerance=t[1]),t[2]&&(n.maxColors=t[2])),n={...$m.DEFAULT_OPTIONS,...n};const r=n.maxColors??n.replacements.length,o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:y4.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:p4.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:o,glProgram:i,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:n.tolerance,type:"f32"}}}}),ul(this,"uniforms"),ul(this,"_replacements",[]),ul(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=n.replacements}set replacements(t){const n=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,o=t.length,i=new an;if(o>this._maxColors)throw new Error(`Length of replacements (${o}) exceeds the maximum colors length (${this._maxColors})`);n[o*3]=-1;let a,s,l;for(let u=0;u<o;u++){const f=t[u];i.setValue(f[0]),[a,s,l]=i.toArray(),n[u*3]=a,n[u*3+1]=s,n[u*3+2]=l,i.setValue(f[1]),[a,s,l]=i.toArray(),r[u*3]=a,r[u*3+1]=s,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){Dt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return Dt("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};ul(M4,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var b4=`precision highp float;
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
}`,v4=`struct OldFilmUniforms {
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
}`,S4=Object.defineProperty,w4=(e,t,n)=>t in e?S4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rf=(e,t,n)=>(w4(e,typeof t!="symbol"?t+"":t,n),n);const _4=class Hm extends ne{constructor(t){t={...Hm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:v4,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:b4,name:"old-film-filter"});super({gpuProgram:n,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),rf(this,"uniforms"),rf(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,n,r,o)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};rf(_4,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var A4=`precision highp float;
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
`,T4=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,R4=Object.defineProperty,C4=(e,t,n)=>t in e?R4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ti=(e,t,n)=>(C4(e,typeof t!="symbol"?t+"":t,n),n);const rc=class Yo extends ne{constructor(...t){let n=t[0]??{};typeof n=="number"&&(Dt("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),n={thickness:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.quality=t[2]),t[3]!==void 0&&(n.alpha=t[3]),t[4]!==void 0&&(n.knockout=t[4])),n={...Yo.DEFAULT_OPTIONS,...n};const r=n.quality??.1,o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:T4,entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:A4.replace(/\$\{ANGLE_STEP\}/,Yo.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:o,glProgram:i,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:n.knockout?1:0,type:"f32"}}}}),ti(this,"uniforms"),ti(this,"_thickness"),ti(this,"_quality"),ti(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Yo.getAngleStep(r),this._color=new an,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uThickness[0]=this.thickness/n.source.width,this.uniforms.uThickness[1]=this.thickness/n.source.height,t.applyFilter(this,n,r,o)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Yo.MAX_SAMPLES,Yo.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Yo.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};ti(rc,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});ti(rc,"MIN_SAMPLES",1);ti(rc,"MAX_SAMPLES",100);var P4=`precision highp float;
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
`,I4=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,z4=Object.defineProperty,O4=(e,t,n)=>t in e?z4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fl=(e,t,n)=>(O4(e,typeof t!="symbol"?t+"":t,n),n);const F4=class Wm extends ne{constructor(...t){let n=t[0]??{};if(typeof n=="number"){if(Dt("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),n={angle:n},t[1]){const i="x"in t[1]?t[1].x:t[1][0],a="y"in t[1]?t[1].y:t[1][1];n.center={x:i,y:a}}t[2]&&(n.kernelSize=t[2]),t[3]&&(n.radius=t[3])}n={...Wm.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:I4,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:P4,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uKernelSize:{value:n.kernelSize,type:"i32"},uRadius:{value:n.radius,type:"f32"}}}}),fl(this,"uniforms"),fl(this,"_angle"),fl(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,n)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};fl(F4,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var E4=`precision highp float;
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
`,L4=`struct ReflectionUniforms {
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
}`,k4=Object.defineProperty,U4=(e,t,n)=>t in e?k4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,of=(e,t,n)=>(U4(e,typeof t!="symbol"?t+"":t,n),n);const D4=class qm extends ne{constructor(t){t={...qm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:L4,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:E4,name:"reflection-filter"});super({gpuProgram:n,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),of(this,"uniforms"),of(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};of(D4,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var X4=`precision highp float;
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
`,G4=`struct RgbSplitUniforms {
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
`,B4=Object.defineProperty,N4=(e,t,n)=>t in e?B4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Vm=(e,t,n)=>(N4(e,typeof t!="symbol"?t+"":t,n),n);const $4=class Ym extends ne{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Dt("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),n={red:n},t[1]!==void 0&&(n.green=t[1]),t[2]!==void 0&&(n.blue=t[2])),n={...Ym.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:G4,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:X4,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:o,resources:{rgbSplitUniforms:{uRed:{value:n.red,type:"vec2<f32>"},uGreen:{value:n.green,type:"vec2<f32>"},uBlue:{value:n.blue,type:"vec2<f32>"}}}}),Vm(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,n)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Vm($4,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var H4=`
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
`,W4=`
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
`,q4=Object.defineProperty,V4=(e,t,n)=>t in e?q4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,af=(e,t,n)=>(V4(e,typeof t!="symbol"?t+"":t,n),n);const Y4=class Km extends ne{constructor(...t){let n=t[0]??{};(Array.isArray(n)||"x"in n&&"y"in n)&&(Dt("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),n={center:n,...t[1]},t[2]!==void 0&&(n.time=t[2])),n={...Km.DEFAULT_OPTIONS,...n};const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:W4,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:H4,name:"shockwave-filter"});super({gpuProgram:r,glProgram:o,resources:{shockwaveUniforms:{uTime:{value:n.time,type:"f32"},uCenter:{value:n.center,type:"vec2<f32>"},uSpeed:{value:n.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),af(this,"uniforms"),af(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uTime=this.time,t.applyFilter(this,n,r,o)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};af(Y4,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var K4=`precision highp float;
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
`,j4=`struct SimpleLightmapUniforms {
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
}`,Q4=Object.defineProperty,Z4=(e,t,n)=>t in e?Q4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cl=(e,t,n)=>(Z4(e,typeof t!="symbol"?t+"":t,n),n);const J4=class jm extends ne{constructor(...t){let n=t[0]??{};if(n instanceof Pt&&(Dt("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),n={lightMap:n},t[1]!==void 0&&(n.color=t[1]),t[2]!==void 0&&(n.alpha=t[2])),n={...jm.DEFAULT_OPTIONS,...n},!n.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:j4,entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:K4,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:o,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:n.lightMap.source,uMapSampler:n.lightMap.source.style}}),cl(this,"uniforms"),cl(this,"_color"),cl(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new an,this.color=n.color??0,Object.assign(this,n)}apply(t,n,r,o){this.uniforms.uDimensions[0]=n.frame.width,this.uniforms.uDimensions[1]=n.frame.height,t.applyFilter(this,n,r,o)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[n,r,o]=this._color.toArray();this.uniforms.uColor[0]=n,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=o}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};cl(J4,"DEFAULT_OPTIONS",{lightMap:Pt.WHITE,color:0,alpha:1});var tS=`in vec2 vTextureCoord;
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
`,eS=`struct TiltShiftUniforms {
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
}`,nS=Object.defineProperty,rS=(e,t,n)=>t in e?nS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sf=(e,t,n)=>(rS(e,typeof t!="symbol"?t+"":t,n),n);const oS=class Qm extends ne{constructor(t){const{width:n,height:r}=Zg.defaultOptions;t={...Qm.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:n,y:r/2},...t};const o=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:eS,entryPoint:"mainFragment"}}),i=Zt.from({vertex:re,fragment:tS,name:"tilt-shift-axis-filter"});super({gpuProgram:o,glProgram:i,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([n,r]),type:"vec2<f32>"}}}}),sf(this,"uniforms"),sf(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:n}=this.uniforms;n[0]=t.frame.width,n[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,n=this.uniforms.uStart,r=t.x-n.x,o=t.y-n.y,i=Math.sqrt(r*r+o*o),a=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=a?-o/i:r/i,this.uniforms.uDelta[1]=a?r/i:o/i}};sf(oS,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var iS=`precision highp float;
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
`,aS=`struct TwistUniforms {
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
`,sS=Object.defineProperty,lS=(e,t,n)=>t in e?sS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zm=(e,t,n)=>(lS(e,typeof t!="symbol"?t+"":t,n),n);const uS=class Jm extends ne{constructor(t){t={...Jm.DEFAULT_OPTIONS,...t};const n=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:aS,entryPoint:"mainFragment"}}),r=Zt.from({vertex:re,fragment:iS,name:"twist-filter"});super({gpuProgram:n,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Zm(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Zm(uS,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var fS=`precision highp float;
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
`,cS=`struct ZoomBlurUniforms {
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
}`,hS=Object.defineProperty,dS=(e,t,n)=>t in e?hS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tp=(e,t,n)=>(dS(e,typeof t!="symbol"?t+"":t,n),n);const mS=class ep extends ne{constructor(t){t={...ep.DEFAULT_OPTIONS,...t};const n=t.maxKernelSize??32,r=Yt.from({vertex:{source:oe,entryPoint:"mainVertex"},fragment:{source:cS.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),entryPoint:"mainFragment"}}),o=Zt.from({vertex:re,fragment:fS.replace("${MAX_KERNEL_SIZE}",n.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:o,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),tp(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};tp(mS,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});let yr,np,Qi,ts,ps;const Xs=[];let pd=!0,lf=0;function rp(e){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let o=0;o<=10;o++){const i=o/10,a=(1-i*i)*(1-i*i);r.addColorStop(i,`rgba(255,255,255,${a.toFixed(3)})`)}return n.fillStyle=r,n.fillRect(0,0,e,e),t}async function pS(e,t){return np=t,yr=new Ka,await yr.init({...e,background:"#000000",backgroundAlpha:1}),ps=Pt.from(rp(256)),ps.source.scaleMode="linear",ts=new $e(Pt.WHITE),yr.stage.addChild(ts),Qi=new me,yr.stage.addChild(Qi),MS(),yr.canvas}function yS(){const e=new $e(ps);e.blendMode="add",e.alpha=.01,Qi.addChild(e),yr.renderer.render(yr.stage),e.destroy();try{yr.renderer.texture.initSource(ps.source)}catch{}ip()}function yd(e){e!==pd&&(pd=e,yr.canvas.style.display=e?"":"none",e?yr.ticker.start():yr.ticker.stop())}const ei=4;let Xi,es,uf,ff;const Gs=[],ui=new Yl({uMoon:{value:new Float32Array([0,0,0,0]),type:"vec4<f32>"},uScreen:{value:new Float32Array([1,1]),type:"vec2<f32>"}}),gS=`in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vUV = aUV;
}`,xS=`in vec2 vUV;
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
}`;let op;function MS(){ff=Pt.from(rp(64)),ff.source.scaleMode="linear",Xi=Bf.create({width:64,height:64,resolution:1}),uf=new me,es=new me,uf.addChild(es),op=Zt.from({vertex:gS,fragment:xS,name:"piso-luna"})}function bS(e,t,n){const r=e.width,o=e.height,i=new e2({positions:new Float32Array([0,0,r,0,r,o,0,o]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])}),a=new Kl({glProgram:op,resources:{uTexture:e.source,uMask:Xi.source,moonU:ui}}),s=new Vg({geometry:i,shader:a,texture:e});return s.x=t,s.y=n,s}function ip(){const e=Math.ceil(S.W/ei),t=Math.ceil(S.H/ei);(Xi.source.width!==e||Xi.source.height!==t)&&Xi.resize(e,t,1),ui.uniforms.uScreen[0]=e*ei,ui.uniforms.uScreen[1]=t*ei,np.renderer.render({container:uf,target:Xi,clear:!0,clearColor:[0,0,0,0]})}const gd=[.95,.95,.94],vS=[.5,.62,.86],SS=[1,.74,.55],xd=[62,108,168],wS=[210,120,60],hl=[1,1,1];function _S(e,t){const n=[0,0,0];for(let i=0;i<3;i++){let a=gd[i]+(vS[i]-gd[i])*e;a+=(SS[i]-a)*t*.62,hl[i]=a,n[i]=xd[i]+(wS[i]-xd[i])*Math.min(1,t*1.4)}const r=.299*n[0]+.587*n[1]+.114*n[2],o=ui.uniforms.uMoon;o[0]=n[0]/r,o[1]=n[1]/r,o[2]=n[2]/r,o[3]=.42*e*(1-t*.6)+.16*t}const AS=(e,t,n)=>Math.round(Math.min(1,e)*255)<<16|Math.round(Math.min(1,t)*255)<<8|Math.round(Math.min(1,n)*255),cf=[];let Gi=0,hf=0,df=0,ap=0,sp=0;const TS=110;function Dn(e,t,n,r,o,i){if(i<.02||Gi>=TS)return;const a=(e-t)*$.HW+$.OX,s=(e+t)*$.HH,l=r*$.HW*1.5;if(a<hf-l||a>ap+l||s<df-l||s>sp+l)return;let u=cf[Gi];u||(u={x:0,y:0,z:0,r:0,col:0,a:0},cf[Gi]=u),u.x=e,u.y=t,u.z=n,u.r=r,u.col=o,u.a=Math.min(1,i),Gi++}const Md=(e,t,n,r,o)=>Dn(e,t,0,n,r,o);let _i=null;function RS(){if(_i)return _i;_i=[];for(const e of window.MAP&&window.MAP.deco||[])e.s==="deco_brazier"?_i.push({x:e.x,y:e.y,kind:"brazier"}):e.s==="deco_crystals_big"&&_i.push({x:e.x,y:e.y,kind:"crystal"});return _i}const bd={blue:5949695,red:16742470},CS={blue:9101567,red:16752752},PS={fire:16751162,ember:16747056,frost:10152191,arcane:13142783,stars:14201087,moon:13154559,heal:8060826,tower:16777215,tower_blue:7001343,tower_red:16751178,bite:11567359,bubble:10150143,bat:14708991,cat:14708991,owl:11061503};function IS(e){const t=S.game,n=S.T,r=t.player,o=.55+.45*e;for(const i of RS())if(i.kind==="brazier"){const a=.86+.14*Math.sin(n*9+i.x*3)*Math.sin(n*13+i.y);Dn(i.x,i.y,.5,3.3*(.96+.04*a),16749632,.8*a*o)}else Dn(i.x,i.y,.3,2.5,10779903,(.55+.08*Math.sin(n*1.7+i.x))*o);if(t.fountain)for(const i of["blue","red"]){const a=t.fountain[i];a&&Dn(a.x,a.y,.3,3.6,CS[i],(.62+.06*Math.sin(n*1.3))*o)}for(const i of t.units){if(i.dead)continue;if(i.kind==="tower"){Dn(i.x,i.y,1.75,3.4,bd[i.team]||16777215,(.72+.08*Math.sin(n*2+i.id))*o);continue}if(i.kind==="nexus"){Dn(i.x,i.y,.9,4.4,bd[i.team]||16777215,(.8+.08*Math.sin(n*1.5))*o);continue}if(He(i))continue;const a=i.status;r&&i.kind==="hero"&&i.team===r.team&&e>.02&&Dn(i.x,i.y,.4,i===r?2.5:1.7,16770756,(i===r?.42:.24)*e),a&&a.burn&&Dn(i.x,i.y,.4,1.3,16747560,.5*o);const s=a&&a.transform;s&&Dn(i.x,i.y,.6,2.8,s.kind==="fire"?16742954:16765514,.7*o),(i.aura||i.auraFx)&&Dn(i.x,i.y,.1,2.8,16747056,(.3+.05*Math.sin(n*3+i.id))*o)}for(const i of t.runes||[]){const a=window.SIM.RUNES[i.kind];Dn(i.x,i.y,.5,1.7,Hf(a.col),.6*o)}if(r&&t.wards)for(const i of t.wards)i.team!==r.team&&!(t.wardSeenBy&&t.wardSeenBy(i,r.team))||Ql(i,n)&&Dn(i.x,i.y,.4,.9,i.kind==="obs"?16760896:4894975,.32*o);for(const i of t.zones)i.once&&Dn(i.x,i.y,0,i.r*1.1,13143295,.45*o);for(const i of t.projs){const a=PS[i.fx];a!==void 0&&Dn(i.x,i.y,i.z||.45,i.skill?2:1.2,a,(i.skill?.75:.5)*o)}E3(Md,40,o),L3(Md,14,o)}const lp=new URLSearchParams(location.search),zS=lp.get("luna")==="0",OS=lp.get("mapaluz")==="0";let Ua=!1;function FS(e,t){const n=S.game;if(!n||!n.player||OS){yd(!1),lf=0,Ua&&(Ua=!1,ui.uniforms.uMoon[3]=0);return}yd(!0);const r=Yd(n.t),o=S.cam;lf=r.night,_S(r.night,r.warm),zS&&(ui.uniforms.uMoon[3]=0),ts.tint=AS(hl[0],hl[1],hl[2]),ts.width=S.W,ts.height=S.H,Qi.scale.set(o.z),Qi.position.set(e,t),hf=o.x-S.W/2/o.z,df=o.y-S.H/2/o.z,ap=hf+S.W/o.z,sp=df+S.H/o.z+120,Gi=0,IS(r.night);const{HW:i,HH:a,OX:s,ZK:l}=$;Ua=ui.uniforms.uMoon[3]>.005;let u=0;for(;u<Gi;u++){const f=cf[u];let h=Xs[u];h||(h=new $e(ps),h.anchor.set(.5),h.blendMode="add",Qi.addChild(h),Xs[u]=h);const c=f.r*i*2*Math.SQRT2,d=(f.x-f.y)*i+s,m=(f.x+f.y)*a-f.z*l*.35-10;if(h.visible=!0,h.x=d,h.y=m,h.width=c,h.height=c*.62,h.tint=f.col,h.alpha=f.a,Ua){let p=Gs[u];p||(p=new $e(ff),p.anchor.set(.5),p.blendMode="add",es.addChild(p),Gs[u]=p),p.visible=!0,p.x=d,p.y=m,p.width=c,p.height=c*.62,p.alpha=Math.min(1,f.a*1.15)}}for(let f=u;f<Xs.length;f++)Xs[f].visible=!1;if(Ua){for(let f=u;f<Gs.length;f++)Gs[f].visible=!1;es.scale.set(o.z/ei),es.position.set(e/ei,t/ei),ip()}}let pr;const Kt={};let Zi,Ji,ar,ta,ns,mf=0,r0,dl=null,ml=null,Nl,pf=[],$l=[];const Hl=[],Ma=new Map,bo=[],Bs=[];function oc(){return pr.canvas}const yf=[];async function ES(e){const t=tx();let n=0;for(const o of t){try{pr.renderer.texture.initSource(o.source)}catch{}++n%12===0&&await new Promise(i=>requestAnimationFrame(()=>i(null)))}const r=new $e(Nl);r.anchor.set(.5),r.blendMode="add",r.alpha=.01,r.position.set(S.W/2,S.H/2),Kt.lights.addChild(r);for(let o=0;o<3;o++)vo.renderer.render(vo.stage),pr.renderer.render(pr.stage),jr.renderer.render(jr.stage),await new Promise(i=>requestAnimationFrame(()=>i(null)));r.destroy();for(const o of yf)try{jr.renderer.texture.initSource(o)}catch{}try{vo.renderer.texture.initSource(Nl.source)}catch{}yS()}let o0;function LS(){try{const e=pr.renderer.gl,t=e.getExtension("WEBGL_debug_renderer_info");return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{return"?"}}let jr,vo;const Ns={resizeTo:window,antialias:!1,autoDensity:!0,resolution:1,powerPreference:"high-performance",preference:"webgl",failIfMajorPerformanceCaveat:!1};function po(e,t,n){e.style.cssText=`position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:${t};image-rendering:pixelated;`+(n?`mix-blend-mode:${n};`:"")}async function kS(e){jr=new Ka,pr=new Ka,vo=new Ka,await jr.init({...Ns,background:"#100d18"}),await pr.init({...Ns,backgroundAlpha:0}),await vo.init({...Ns,backgroundAlpha:0}),r0=await pS(Ns,jr),S.gpuName=LS(),S.softGpu=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(S.gpuName),e.style.position="fixed",Zi=document.createElement("canvas"),Ji=document.createElement("canvas"),ar=document.createElement("canvas"),ta=document.createElement("canvas"),po(jr.canvas,1),po(Zi,3),po(pr.canvas,4),po(r0,5,"multiply"),po(vo.canvas,6,"plus-lighter"),po(ar,7),po(Ji,8),po(ta,9,"plus-lighter"),ar.style.imageRendering="auto",pr.canvas.style.pointerEvents="auto",e.append(jr.canvas,Zi,pr.canvas,r0,vo.canvas,ar,Ji,ta);for(const t of["ground"])Kt[t]=new me,jr.stage.addChild(Kt[t]);for(const t of["world","top"])Kt[t]=new me,pr.stage.addChild(Kt[t]);Kt.lights=new me,vo.stage.addChild(Kt.lights),Kt.groundCam=new me,Kt.ground.addChild(Kt.groundCam),Kt.worldCam=new me,Kt.world.addChild(Kt.worldCam),Kt.shadows=new me,Kt.entities=new me,Kt.entities.sortableChildren=!0,Kt.worldCam.addChild(Kt.shadows,Kt.entities),Kt.lightsCam=new me,Kt.lights.addChild(Kt.lightsCam),o0=new Tb({threshold:.45,bloomScale:.9,brightness:1,blur:6,quality:4}),o0.resolution=.5,Kt.lights.filters=[o0],Nl=Pt.from(US(128,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.45)"],[1,"rgba(255,255,255,0)"]])),ns=new $e(Pt.WHITE),Kt.top.addChild(ns),vd(),window.addEventListener("resize",vd)}function US(e,t){const n=document.createElement("canvas");n.width=n.height=e;const r=n.getContext("2d"),o=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(const[i,a]of t)o.addColorStop(i,a);return r.fillStyle=o,r.fillRect(0,0,e,e),n}function vd(){S.W=window.innerWidth,S.H=window.innerHeight;const e=i=>Math.ceil(i*Mf);Zi.width=ta.width=e(S.W),Zi.height=ta.height=e(S.H),Ji.width=S.W,Ji.height=S.H;const t=document.createElement("canvas");t.width=256,t.height=144;const n=t.getContext("2d"),r=n.createRadialGradient(128,72,50,128,72,150);r.addColorStop(0,"rgba(10,6,24,0)"),r.addColorStop(1,"rgba(10,6,24,0.5)"),n.fillStyle=r,n.fillRect(0,0,256,144);const o=Pt.from(t);o.source.scaleMode="linear",ns.texture=o,ns.width=S.W,ns.height=S.H}function DS(){const e=window.MAP;for(const o of nx())Kt.groundCam.addChild(bS(o.tex,o.x,o.y)),yf.push(o.tex.source);const t=XS(),n=xr.ground.naturalWidth,r=xr.ground.naturalHeight;for(const[o,i]of[["water_mask","flow"],["water_calm","calm"]]){const a=xr[o];if(!a||!a.naturalWidth)continue;const s=Pt.from(a);s.source.scaleMode="linear",yf.push(s.source);const l=new $e(s);l.width=n,l.height=r;const u=new Kg({texture:t,width:n,height:r});u.blendMode="add",u.alpha=i==="flow"?.5:.35,u.mask=l,Kt.groundCam.addChild(l,u),i==="flow"?dl=u:ml=u}pf=(e.obstacles||[]).map(o=>({x:o.x,y:o.y,sprite:o.s,tree:o.s!=="prop_boulder"})),$l=(e.deco||[]).map(o=>({x:o.x,y:o.y,sprite:o.s}));for(const o of pf)gf(o,!0);for(const o of $l)gf(o,!1)}function gf(e,t){const n=Jt[e.sprite];if(!n||!jl(e.sprite))return;const r=xo(e.sprite,null,0,0);if(!r)return;const o=new $e(r);o.anchor.set(n.ax/n.fw,n.ay/n.fh);const[i,a]=C(e.x,e.y);o.x=i,o.y=a,o.zIndex=(e.x+e.y)*100,Kt.entities.addChild(o),Hl.push({o:e,spr:o,tree:t&&e.tree,animated:!t&&(n.frames||1)>1})}function XS(){const e=document.createElement("canvas");e.width=192,e.height=96;const t=e.getContext("2d");for(let r=0;r<70;r++){const o=Math.random()*192,i=Math.random()*96,a=4+Math.random()*12,s=.25+Math.random()*.55;t.fillStyle=`rgba(210,245,255,${s})`;for(const l of[-192,0,192])for(const u of[-96,0,96])t.fillRect(Math.round(o+l),Math.round(i+u),Math.round(a),1),a>9&&t.fillRect(Math.round(o+l+2),Math.round(i+u+1),Math.round(a-4),1)}const n=Pt.from(e);return n.source.scaleMode="nearest",n}function GS(e){const t=Jt[e.sprite];if(!t||!t.anims)return["idle",0];if(e.atkAnim>0&&t.anims.attack){const n=t.anims.attack.n;return["attack",Math.min(n-1,Math.floor((1-e.atkAnim/.45)*n))]}return e.moving&&t.anims.walk?["walk",Math.floor((e.animT||0)*1e3/t.anims.walk.ms*((e.speedNow?e.speedNow():3.4)/3.4))]:t.anims.idle?["idle",Qs(e.sprite,"idle",e.animT||0)]:["walk",0]}const BS={mon_wolf:["golem",.6,12101784],mon_bat:["slime",.8,10518736],mon_shroom:["slime",1.1,15243952],mon_ent:["golem",.9,9089136],mon_beetle:["golem",.65,6981808],mon_crab:["slime",1,16751216]},NS={frost:8050943,spores:8048714,splash:4892904,fire:16747066,firedash:16747066,dagger:11545146,arrow:11545146,arrows:11545146,dust:10521194},Sd={};function $S(e){let t=Sd[e];if(!t){t=new qg;const[n,r,o]=e==="red"?[1,.16,.12]:e==="blue"?[.45,.85,1]:[1,1,1];t.matrix=[0,0,0,0,n,0,0,0,0,r,0,0,0,0,o,0,0,0,1,0],Sd[e]=t}return t}function HS(e,t){if(!t||e===t||e.dead)return"";const n=t.target&&!t.target.dead?t.target:null;return e===S.aimUnit?e.team!==t.team?"red":"blue":e===n&&e.team!==t.team?"red":e===S.hoverUnit?e.team!==t.team?"red":"white":""}function WS(e){let t=Ma.get(e.id);if(!t){const n=()=>{const r=new $e(Pt.EMPTY);return Kt.entities.addChild(r),r};t={spr:n(),glow:n(),shadow:new $e(Pt.EMPTY),gear:[],seen:0},t.glow.blendMode="add",t.shadow.tint=656916,t.shadow.alpha=.28,Kt.shadows.addChild(t.shadow),Ma.set(e.id,t)}return t}function Xo(e,t,n,r,o,i,a){if(!t){e.visible=!1;return}const s=Jt[n];e.texture=t,e.visible=!0,e.anchor.set(s.ax/s.fw,s.ay/s.fh),e.scale.set(i),e.x=Math.round(r),e.y=Math.round(o),e.zIndex=a}function qS(){const e=S.game,t=e.player,n=S.T,r=++VS;for(const o of e.units){if(o.dead&&o.kind!=="tower"&&o.kind!=="nexus")continue;const i=WS(o);i.seen=r;const a=o.kind==="tower"||o.kind==="nexus";if(o.dead){Xo(i.spr,xo("prop_boulder",null,0,0),"prop_boulder",...C(o.x,o.y),1,(o.x+o.y)*100),i.glow.visible=!1,i.shadow.visible=!1;for(const F of i.gear)F.visible=!1;continue}if(He(o)){i.spr.visible=!1,i.glow.visible=!1,i.shadow.visible=!1;for(const F of i.gear)F.visible=!1;continue}if(o.kind==="hero"&&o.sprite==="slime"&&!(o.status&&o.status.hex)){const F=o._spriteBak||(S.mode==="guest"?o.heroKey:null);F&&(o.sprite=F)}if(o.sprite&&(!Jt[o.sprite]||!jl(o.sprite))){const F=BS[o.sprite];o._fbScale=F?F[1]:1,o._fbTint=F?F[2]:16777215,o.sprite=F&&Jt[F[0]]?F[0]:o.pet||o.kind==="monster"?"slime":"rana"}const[s,l]=C(o.x,o.y);let u=l;if(o.dash&&o.dash.leap){const F=Math.min(1,o.dash.t/o.dash.dur);u-=Math.sin(F*Math.PI)*50}o.leaping&&(u-=40);let f=1;o.invisible&&o.invisible()&&(f=.4),t&&o.team!==t.team&&!a&&(f*=Math.min(1,o._va===void 0?1:o._va)),t&&o.team===t.team&&o._bush>=0&&(f*=.6),o.status&&o.status.cyclone?(o._cyA===void 0&&(o._cyA=n),o._cyB=void 0):o._cyA!==void 0&&(o._cyA=void 0,o._cyB=n,o._cyH0=o._cyH||0);let h=0;if(o._cyA!==void 0){const F=Math.min(1,(n-o._cyA)/.4);h=58*F*(2-F)+Math.sin(n*5+o.id)*5*F}else if(o._cyB!==void 0){const F=(n-o._cyB)/.18;F<1?h=o._cyH0*(1-F*F):o._cyB=void 0}o._cyH=h,u-=Math.round(h);const[c,d]=GS(o);let m=a||Jt[o.sprite]&&Jt[o.sprite].dirs===1?0:o.dir;o._cyA!==void 0&&!a&&(m=(m+Math.floor(n*16))%16);let p=(o.scale||1)*(o._fbScale||1);o.monster==="serpent"&&(p=1.45);const y=o.status&&o.status.transform,x=y&&y.mount&&Jt[y.mount]?y:null;if(y&&!x){o._tfT=(o._tfT||0)+1/60;const F=Math.min(1,o._tfT*4),X=1+Math.sin(Math.min(1,o._tfT*3)*Math.PI)*.12;p*=1+(y.scale-1)*F*X}else o._tfT=0;const b=o.status||{};let M=s,v=null;if(x){const F=Jt[x.mount],X=x.mountScale||2,G=o._stompA!==void 0&&n<o._stompA&&F.anims&&F.anims.stomp?"stomp":c,V=F.anims&&(F.anims[G]||F.anims.idle),L=G==="stomp"?Math.min(V.n-1,Math.floor((1-(o._stompA-n)/.6)*V.n)):V?d%V.n:0;v=xo(x.mount,G,m,L),i.mount||(i.mount=new $e(Pt.EMPTY),Kt.entities.addChild(i.mount)),Xo(i.mount,v,x.mount,M,u,X,(o.x+o.y)*100+.9),i.mount.alpha=f,i.mount.tint=16777215;const k=F.dirs||16,U=k>=16?m:Math.round(m/2)%k,N=F.saddleFrames&&F.saddleFrames[G]&&F.saddleFrames[G][U],H=N&&N[L]||F.saddleXY&&F.saddleXY[U]||[0,-(F.saddle!=null?F.saddle:F.ay*.62)];M+=Math.round(H[0]*X),u+=Math.round(H[1]*X)}else i.mount&&(i.mount.visible=!1);b.stun&&["quake","roar","dust","firedash","bash"].includes(b.stun.fx)&&(M+=Math.round(Math.sin(n*60+o.id)*1.5));const w=(o.x+o.y)*100+1,_=xo(o.sprite,x?"idle":c,m,a||x?Qs(o.sprite,"idle",n):d);Xo(i.spr,_,o.sprite,M,u,p,w),i.spr.alpha=f;const A=_&&!a?HS(o,t):"";if(A){if(!i.ol){i.ol=new me;for(let X=0;X<4;X++)i.ol.addChild(new $e(Pt.EMPTY));Kt.entities.addChild(i.ol)}i.ol.visible=!0,i.ol.zIndex=w-.05,i.ol.alpha=Math.min(1,f+.2),i.olCol!==A&&(i.ol.filters=[$S(A)],i.olCol=A);const F=1.3;[[F,0],[-F,0],[0,F],[0,-F]].forEach(([X,G],V)=>Xo(i.ol.children[V],_,o.sprite,M+X,u+G,p,0))}else i.ol&&(i.ol.visible=!1);i.spr.tint=o.illusion?10148095:o._fbTint||16777215,o.illusion&&(i.spr.alpha=f*.8);let R=0,P=0;if(o.hitFlash>.06?(R=16777215,P=.75):b.slow?(R=NS[b.slow.fx]||8050943,P=.35):b.root?(R=3836458,P=.3):b.stun&&b.stun.fx==="arcane"?(R=11563263,P=.35):b.burn?(R=16742954,P=.25+.15*Math.sin(n*14+o.id)):y&&!x?(R=y.kind==="fire"?16747066:16765514,P=.25+.1*Math.sin(n*6)):b.hex?(R=11565823,P=.2+.08*Math.sin(n*5+o.id)):b.berserk&&(R=16722458,P=.12+.08*Math.sin(n*9+o.id)),P>0&&_?(Xo(i.glow,_,o.sprite,M,u,p,w+.5),i.glow.tint=R,i.glow.alpha=P*f):i.glow.visible=!1,S.shadowsOn&&!a&&_&&!(o.dash&&o.dash.leap)&&!o.leaping&&!(Jt[o.sprite]&&Jt[o.sprite].fly)){const F=x&&v?x.mount:o.sprite,X=Jt[F],G=x&&v?x.mountScale||2:p;i.shadow.texture=x&&v?v:_,i.shadow.visible=!0,i.shadow.anchor.set(X.ax/X.fw,X.ay/X.fh),i.shadow.setFromMatrix(new ze(G,0,-.8*G,-.38*G,Math.round(s),Math.round(l))),i.shadow.alpha=.28*f}else i.shadow.visible=!1;const z=Jt[o.sprite]&&Jt[o.sprite].gear;let O=0;if(z&&(o.kind==="hero"||o.illusion)){const F=o.illusion?o.owner&&S.mode!=="guest"?e.gearCode(o.owner):0:S.mode==="guest"?o.gear||0:e.gearCode(o),X={w:F&3,h:F>>2&3,a:F>>4&3,b:F>>6&3};for(const G of["a","b","h","w"]){const V=X[G];if((V>0||G==="w")&&z[G]&&z[G].includes(V)){const L=o.sprite+"__"+G+V;if(!i.gear[O]){const k=new $e(Pt.EMPTY);Kt.entities.addChild(k),i.gear[O]=k}Xo(i.gear[O],xo(L,c,m,d),L,M,u,p,w+.2+O*.05),i.gear[O].alpha=f,O++}}}if(o.kind==="courier"){const F=o.owner||(o.ownerId?e.units.find(G=>G.id===o.ownerId):null),X=F&&(F.heroKey||F.sprite);if(X&&Jt[X]){if(!i.gear[O]){const L=new $e(Pt.EMPTY);Kt.entities.addChild(L),i.gear[O]=L}const G=Jt[o.sprite],V=Math.sin(n*3+o.id)*1.5;Xo(i.gear[O],xo(X,"idle",2,Qs(X,"idle",n)),X,M,u-(G?G.ay*p:40)+2+V,.3,w+.6),i.gear[O].alpha=f,O++}}for(;O<i.gear.length;O++)i.gear[O].visible=!1}for(const[o,i]of Ma)if(i.seen!==r){i.spr.destroy(),i.glow.destroy(),i.shadow.destroy();for(const a of i.gear)a.destroy();i.ol&&i.ol.destroy({children:!0}),i.mount&&i.mount.destroy(),Ma.delete(o)}}let VS=0;const Bi=new Map,wd={},ba=[];let YS=0;function KS(e,t){const n=e+(t?"o":"c");let r=wd[n];return r||(r=Pt.from(l2(e,t)),r.source.scaleMode="nearest",wd[n]=r),r}function jS(){const e=S.game,t=e&&e.player,n=++YS;if(ba.length=0,t&&e.wards)for(const r of e.wards){const o=r.team===t.team;if(!o&&!(e.wardSeenBy&&e.wardSeenBy(r,t.team)))continue;ba.push(r);let i=Bi.get(r.id);if(!i){const u=new $e(Pt.EMPTY);u.anchor.set(.5,1-1/36),Kt.entities.addChild(u),i={spr:u,seen:0},Bi.set(r.id,i)}i.seen=n;const[a,s]=C(r.x,r.y),l=r.until-e.t;i.spr.texture=KS(r.kind,Ql(r,S.T)),i.spr.x=Math.round(a),i.spr.y=Math.round(s),i.spr.zIndex=(r.x+r.y)*100+.5,i.spr.alpha=l<20?.55+.45*Math.abs(Math.sin(S.T*(l<6?9:4))):1,i.spr.tint=o?16777215:16763072,i.spr.visible=!0}for(const[r,o]of Bi)o.seen!==n&&(o.spr.destroy(),Bi.delete(r))}function QS(e,t){const n=S.wardAim;if(!n||e.dead)return;const r=window.SIM,o=n.id==="centinela",i=S.mouse.wx,a=S.mouse.wy,s=Math.hypot(i-e.x,a-e.y)>r.WARD_RANGE;if(st(e.x,e.y,r.WARD_RANGE,s?"#ffffff70":"#ffffffb0",null,2,[8,6]),s){const[l,u]=C(e.x,e.y),[f,h]=C(i,a);t.save(),t.globalAlpha=.35,t.strokeStyle="#ffffff",t.lineWidth=2,t.setLineDash([6,6]),t.lineDashOffset=-S.T*30,t.beginPath(),t.moveTo(l,u),t.lineTo(f,h),t.stroke(),t.restore()}st(i,a,o?r.SENTRY_R:r.WARD_VISION,o?"#60c0ffa0":"#ffd04aa0",o?"rgba(96,192,255,0.09)":"rgba(255,208,74,0.09)",2),Ox(t,o?"sen":"obs",i,a)}function ZS(e){if(!e.sprite||!jl(e.sprite))return;const t=xo(e.sprite,"idle",e.dir||0,0);if(!t)return;const n=new $e(t),r=Jt[e.sprite];n.anchor.set(r.ax/r.fw,r.ay/r.fh);const[o,i]=C(e.x,e.y);n.x=o,n.y=i,n.scale.set(e.scale||1),n.tint=7829384,n.zIndex=(e.x+e.y)*100,Kt.entities.addChild(n),bo.push({spr:n,t:0,vy:20})}function JS(e){const t=S.cam,n=S.T,r=(Math.random()-.5)*t.shake,o=(Math.random()-.5)*t.shake,i=Math.round(S.W/2-t.x*t.z+r),a=Math.round(S.H/2-t.y*t.z+o);for(const m of["groundCam","worldCam","lightsCam"])Kt[m].scale.set(t.z),Kt[m].position.set(i,a);const s=t.x-S.W/2/t.z-2,l=t.y-S.H/2/t.z-2,u=S.W/t.z+4,f=S.H/t.z+4;dl&&(dl.tilePosition.set(-n*14,-n*3),dl.alpha=.45+.12*Math.sin(n*1.3)),ml&&(ml.tilePosition.set(Math.sin(n*.3)*6,0),ml.alpha=.25+.15*Math.sin(n*.9));const h=S.game&&S.game.player,[c,d]=h?C(h.x,h.y):[0,0];for(const m of Hl){const[p,y]=C(m.o.x,m.o.y),x=p>s-200&&p<s+u+200&&y>l-100&&y<l+f+400;if(m.spr.visible=x,!!x){if(m.animated){const b=xo(m.o.sprite,null,0,Math.floor(n*9+m.o.x));b&&(m.spr.texture=b)}if(m.tree){const b=Jt[m.o.sprite];if(m.spr.alpha=h&&m.o.x+m.o.y>h.x+h.y&&b&&Math.abs(c-p)<b.fw*.42&&d<y&&d>y-b.ay?.42:1,m.o.sprite.startsWith("prop_")){const M=m.o,v=(M.x*12.9898+M.y*78.233)%6.28,w=.8+(M.x*7.1+M.y*3.3)%1*.7,_=(.02+(M.x*3.7+M.y*9.1)%1*.025)*(.6+S.wind);m.spr.skew.x=-(Math.sin(n*w*1.6+v)*_+Math.sin(n*w*3.1+v*2)*_*.3+S.wind*.02)}}}}S.game&&(N3(e,s,l,u,f,pf),qS(),jS());for(const m of bo)m.t+=e,m.spr.alpha=Math.max(0,1-m.t/.8),m.spr.y+=m.vy*e;for(let m=bo.length-1;m>=0;m--)bo[m].t>.8&&(bo[m].spr.destroy(),bo.splice(m,1));ew(),FS(i,a),mf=lf,aw(),S.game&&S.game.player?lw():xf&&(xf=!1,ar.getContext("2d").clearRect(0,0,ar.width,ar.height))}let xf=!1;const Mf=1;function up(e){const t=e.look;if(typeof t!="string"&&typeof t!="number")return!1;const n=String(t),r=window.SIM.HERO_KEYS[parseInt(n,10)];return!!(r&&j[r+"_"+n.slice(-1)])}function i0(e,t=1){const n=e.getContext("2d"),r=S.cam;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height);const o=(Math.random()-.5)*r.shake*0;return n.setTransform(r.z*t,0,0,r.z*t,Math.round(S.W/2-r.x*r.z+o)*t,Math.round(S.H/2-r.y*r.z+0)*t),n.imageSmoothingEnabled=!1,n}const tw={frost:"#bff4ff",spores:"#9ae060",splash:"#6ac8ff",fire:"#ffa060",firedash:"#ffa060",dagger:"#ff7a7a",arrow:"#ff7a7a",arrows:"#ff7a7a",dust:"#d8c8a8"};function ew(){const e=S.game,t=S.T,n=i0(ta,Mf);let r=i0(Zi,Mf);if(th(r,n),e&&e.player){const o=e.player,i=window.SIM.HEROES;$3();for(const l of e.zones){if(l.fx==="mon_spores"){kx(l);continue}if(!up(l))if(l.once){const u=1-l.t/l.dur;st(l.x,l.y,l.r,"#ffe070","rgba(200,120,255,"+(.12+.25*u)+")",2,[6,4]),st(l.x,l.y,l.r*u,"#ffffff",null,2)}else{const u=l.fx==="spores";if(st(l.x,l.y,l.r,u?"#9ae060":"#ffe0a0",u?"rgba(110,200,70,0.22)":"rgba(255,220,150,0.16)",2),u&&Math.random()<.35&&T({type:"puff",x:l.x+g(-1,1)*l.r*.8,y:l.y+g(-1,1)*l.r*.8,r:g(12,22),dur:g(.8,1.4),col:[130,200,80]}),l.fx==="arrows")for(let f=0;f<3;f++){const h=Math.random()*6.28,c=Math.random()*l.r;T({type:"meteor",x:l.x+Math.cos(h)*c,y:l.y+Math.sin(h)*c,dur:.25})}}}if(e.corralOf)for(const l of["blue","red"]){const u=e.corralOf(l);st(u.x,u.y,u.r,"#5a3818","rgba(150,110,60,0.20)",4),st(u.x,u.y,u.r,"#b98a4a",null,2,[5,4]),st(u.x,u.y,u.r-.12,l==="blue"?"#5ab0ff60":"#ff705060",null,1.5)}H3();for(const l of e.runes||[]){const u=window.SIM.RUNES[l.kind];st(l.x,l.y,.45+Math.sin(t*4)*.05,u.col,null,2)}for(const l of ba)Ix(l,l.team===o.team,e.t);for(const l of e.heroes)l.dead||He(l)||st(l.x,l.y,(l.r||.35)*(l.scale||1)*.85+.06,l===o?"#ffd24a":bl[l.team],l===o?"rgba(255,210,74,0.12)":null,l===o?2:1.5);const a=S.hoverUnit;a&&a!==o.target&&!a.dead&&st(a.x,a.y,(a.r||.4)*(a.scale||1)*.85+.08,a.team===o.team?"#ffffff":"#ff6a5a",a.team===o.team?"rgba(255,255,255,0.1)":"rgba(255,80,60,0.12)",2);for(const l of e.units)if(l.kind==="tower"&&!l.dead&&l.team!==o.team&&(l.target===o||l.targetId===o.id)){const[u,f]=C(l.x,l.y,1.3),[h,c]=C(o.x,o.y,.5);r.save(),r.strokeStyle=`rgba(255,70,60,${.5+.3*Math.sin(t*12)})`,r.lineWidth=3,r.setLineDash([10,6]),r.lineDashOffset=-t*40,r.beginPath(),r.moveTo(u,f),r.lineTo(h,c),r.stroke(),r.restore()}o.target&&!o.target.dead&&st(o.target.x,o.target.y,(o.target.r||.4)*(o.target.scale||1)*.85+.06,"#ff4a4a",null,2,[4,3]);for(const l of e.units)l.kind==="tower"&&!l.dead&&Math.hypot(l.x-o.x,l.y-o.y)<6.2+2.5&&l.team!==o.team&&st(l.x,l.y,6.2,"#ff5a4a90",null,2,[8,6]);if(nw(o),QS(o,r),S.hoverAbil){const l=i[o.heroKey].abil[S.hoverAbil];l.range&&st(o.x,o.y,l.range,"#ffe07090",null,2,[6,6]),l.radius&&(l.type==="aoe_self"||l.type==="heal_aoe"||l.type==="channel"&&l.self)&&st(o.x,o.y,l.radius,"#ffe07090",null,2,[6,6])}const s=S.marker;if(s){const l=s.t/.3;l<1&&(r.globalAlpha=1-l*.7,st(s.x,s.y,.16*(1-l)+.04,s.atk?"#ff5a4a":"#9dffaa",null,1.5),r.globalAlpha=1)}for(const l of e.units){if(l.dead||l.kind==="tower"||l.kind==="nexus"||He(l))continue;l.status&&l.status.slow&&st(l.x,l.y,(l.r||.35)*(l.scale||1)+.12,tw[l.status.slow.fx]||"#bff4ff",null,2,[3,3]);const u=l.status&&l.status.transform;if(u&&!u.mount){const f=u.kind==="fire",h=.5+.5*Math.sin(t*6);st(l.x,l.y,1+h*.15,f?"#ff9a3a":"#ffd24a",f?"rgba(255,110,40,0.16)":"rgba(255,210,74,0.14)",2),f&&st(l.x,l.y,1.9,"#ff6a2a60",null,2,[6,5]);for(let c=0;c<3;c++)Math.random()<.7&&E(l.x+g(-.6,.6),l.y+g(-.6,.6),g(.1,1.2),g(-.3,.3),g(-.3,.3),g(1,2.4),.6,f?rr("fire"):Math.random()<.5?"#ffe070":"#fff6c8",3,-1,!0)}l.status&&l.status.redbuff&&st(l.x,l.y,.5,"#ff6a4a90",null,1.5,[2,4]),l.status&&l.status.bluebuff&&st(l.x,l.y,.55,"#6ab8ff90",null,1.5,[2,4]),l.aegis&&Math.random()<.2&&E(l.x+g(-.3,.3),l.y+g(-.3,.3),.8,0,0,.6,.8,"#ffe070",2,0,!0),l.recall&&(st(l.x,l.y,.7,"#9ae8ff","rgba(120,200,255,0.15)",2),Math.random()<.6&&E(l.x+g(-.4,.4),l.y+g(-.4,.4),0,0,0,2.5,.6,"#bfefff",2,0,!0)),z3(l)}}if(r=i0(Ji),th(r,n),e){const o=e.player;if(o){for(const i of e.runes||[]){const a=window.SIM.RUNES[i.kind],s=Math.sin(t*3+i.id)*.08,[l,u]=C(i.x,i.y,.55+s),f=r.createRadialGradient(l,u,2,l,u,22);f.addColorStop(0,"#ffffff"),f.addColorStop(.3,a.col),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.beginPath(),r.arc(l,u,22,0,7),r.fill(),r.fillStyle="#ffffff",r.fillRect(l-3,u-3,6,6)}for(const i of ba)zx(i,i.team===o.team);j3(),W3(),rw(r)}V3()}Y3(),e&&e.player&&iw(r)}function nw(e){if(!S.aim)return;const t=window.SIM.HEROES[e.heroKey].abil[S.aim.k],n=S.mouse.wx,r=S.mouse.wy;let o=n-e.x,i=r-e.y;const a=Math.hypot(o,i)||1;o/=a,i/=a;const s="#7fe0ff",l="rgba(120,220,255,0.16)";if(t.range&&st(e.x,e.y,t.range,"#7fe0ff80",null,2,[6,6]),window.SIM&&S.game.unitTarget&&S.game.unitTarget(t)){const u=S.aimUnit;if(u){const f=(u.r||.4)*(u.scale||1)*.85+.1,h=u.team!==e.team;st(u.x,u.y,f,h?"#ff5a4a":"#7fe0ff",h?"rgba(255,80,60,0.18)":"rgba(120,220,255,0.18)",2.5),st(u.x,u.y,f+.12+Math.sin(S.T*8)*.03,h?"#ff9a8a":"#bff0ff",null,1.5,[3,3])}return}if(t.type==="proj"||t.type==="dash"||t.type==="hook"){const u=t.type==="dash"?Math.min(a,t.range):t.range,f=(t.width||1)/2,h=-i*f,c=o*f;Nu([[e.x+h,e.y+c],[e.x+o*u+h,e.y+i*u+c],[e.x+o*(u+f*1.5),e.y+i*(u+f*1.5)],[e.x+o*u-h,e.y+i*u-c],[e.x-h,e.y-c]],s,l)}else if(t.type==="blink"||t.type==="leap"){const u=Math.min(a,t.range||0),f=e.x+o*u,h=e.y+i*u;Nu([[e.x-i*.06,e.y+o*.06],[f-i*.06,h+o*.06],[f+i*.06,h-o*.06],[e.x+i*.06,e.y-o*.06]],s,l),st(f,h,t.radius||.45,s,l,2)}else if(t.type==="cone"){const u=Math.atan2(i,o),f=[[e.x,e.y]];for(let h=0;h<=12;h++){const c=u-t.angle+2*t.angle*h/12;f.push([e.x+Math.cos(c)*t.range,e.y+Math.sin(c)*t.range])}Nu(f,s,l)}else{const u=Math.min(a,t.range||0),f=e.x+o*u,h=e.y+i*u;st(f,h,t.radius||.6,s,l,2)}}function rw(e){const t=S.T;for(const n of S.game.units){if(n.dead||He(n))continue;const r=n.status||{};if(O3(e,n),!r.stun&&!r.root){if(r.slow&&Math.random()<.35){const l=["frost","dagger","arrow","arrows","splash"].includes(r.slow.fx)?-.6:1;E(n.x+g(-.3,.3),n.y+g(-.3,.3),l<0?1.1:.2,g(-.2,.2),g(-.2,.2),l,.7,rr(r.slow.fx==="spores"?"spores":r.slow.fx==="fire"?"fire":r.slow.fx==="splash"?"splash":r.slow.fx==="frost"?"frost":"blood"),2,l<0?2:-.5,!0)}r.burn&&Math.random()<.5&&E(n.x+g(-.25,.25),n.y+g(-.25,.25),.3,0,0,1.4,.4,rr("fire"),3,-1,!0);continue}const o=Jt[n.sprite],i=n.scale||1,[a,s]=C(n.x,n.y);if(r.root){e.save(),e.lineWidth=3,e.strokeStyle="#2a6a1a";for(let l=0;l<4;l++){const u=l*1.57+t*.6,f=14*i;e.beginPath(),e.moveTo(a+Math.cos(u)*f,s+Math.sin(u)*f*.5),e.quadraticCurveTo(a+Math.cos(u+.8)*f*.4,s-10*i,a+Math.cos(u+1.6)*f*.6,s-18*i+Math.sin(t*3+l)*2),e.stroke(),e.fillStyle="#6ac04a",e.fillRect(a+Math.cos(u+1.6)*f*.6-2,s-18*i-2,4,3)}e.restore()}if(r.stun){const l=r.stun.fx||"",u=s-(o?o.ay*.8:50)*i;if(l==="bash")fx(e,a,u,t,n.id);else if(l==="arcane")for(let f=0;f<3;f++){const h=t*3+f*2.09;e.fillStyle=f%2?"#e0b8ff":"#9a50ff",e.fillRect(a+Math.cos(h)*16-3,u+Math.sin(h)*5-3,6,6),e.fillStyle="#ffffff",e.fillRect(a+Math.cos(h)*16-1,u+Math.sin(h)*5-1,2,2)}else{for(let f=0;f<3;f++){const h=t*5+f*2.09,c=a+Math.cos(h)*14,d=u+Math.sin(h)*4;e.fillStyle="#ffe070",e.fillRect(c-3,d-1,6,2),e.fillRect(c-1,d-3,2,6),e.fillStyle="#fff6c8",e.fillRect(c-1,d-1,2,2)}if(["quake","roar","dust","firedash"].includes(l))for(let f=0;f<2;f++){const h=-t*4+f*3.14,c=a+Math.cos(h)*20,d=u-6+Math.sin(h)*6;e.fillStyle="#ffffff",e.fillRect(c-3,d,3,2),e.fillRect(c,d-2,3,2)}}l==="splash"&&Math.random()<.3&&E(n.x+g(-.3,.3),n.y+g(-.3,.3),.9,0,0,.8,.6,"#bfe8ff",3,-1,!0)}}}const Da=new Map;function pl(e,t,n){const r=n+"|"+t+"|"+e;let o=Da.get(r);if(o)return o;o=document.createElement("canvas");const i=o.getContext("2d",{willReadFrequently:!0}),a=`600 ${n}px "Pixelify Sans", "Nunito", sans-serif`,s=Math.max(2,n/4);return i.font=a,o.width=Math.ceil(i.measureText(e).width+s*2+2),o.height=Math.ceil(n*1.35+s*2),i.font=a,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s,i.strokeStyle="#000000d0",i.strokeText(e,o.width/2,o.height/2),i.fillStyle=t,i.fillText(e,o.width/2,o.height/2),Da.size>2e3&&Da.delete(Da.keys().next().value),Da.set(r,o),o}function ow(){const e=window.SIM.HEROES;for(const t of window.SIM.HERO_KEYS)for(const n of Object.values(bl))pl(e[t].name,n,11),pl("★ "+e[t].name,n,11);for(let t=1;t<=18;t++)pl(String(t),"#ffe070",10)}function iw(e){const t=S.game,n=t.player,r=S.cam,o=window.SIM.HEROES,i=r.x-S.W/2/r.z,a=r.y-S.H/2/r.z,s=S.W/r.z,l=S.H/r.z,u=(h,c,d,m,p,y,x)=>{e.fillStyle="#000000c0",e.fillRect(h-1,c-1,d+2,m+2),e.fillStyle=x,e.fillRect(h,c,d,m),e.fillStyle=y,e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,m),e.fillStyle="rgba(255,255,255,0.18)",e.fillRect(h,c,Math.max(0,Math.min(1,p))*d,Math.max(1,m/3))},f=(h,c,d,m,p,y=p)=>{const x=pl(h,m,y),b=p/y,M=x.width*b,v=x.height*b;e.drawImage(x,Math.round(c-M/2),Math.round(d-v/2),M,v)};for(const h of t.units){if(h.dead||He(h))continue;const c=(h.x-h.y)*$.HW+$.OX,d=(h.x+h.y)*$.HH;if(c<i-60||c>i+s+60||d<a-60||d>a+l+160||(h.kind==="monster"||h.kind==="courier")&&h.hp>=h.maxHp-1&&!h.boss)continue;const m=Jt[h.sprite],p=d-(h.leaping?40:0),y=h.status&&h.status.transform&&h.status.transform.mount&&Jt[h.status.transform.mount]?h.status.transform:null,x=y?(Jt[y.mount].saddle!=null?Jt[y.mount].saddle:Jt[y.mount].ay*.62)*(y.mountScale||2):0,b=p-x-(m?m.ay*(h.scale||1)*(h._fbScale||1)*(h.monster==="serpent"?1.4:.92):50)-6,M=h.kind==="hero"||h.kind==="tower"||h.kind==="nexus"||h.boss,v=M?66:34,w=M?7:4,_=h===n?"#3ccf4e":h.team==="neutral"?"#e8c040":bl[h.team];if(e.globalAlpha=n&&h.team!==n.team&&h._va!==void 0?Math.min(1,h._va):1,u(c-v/2,b,v,w,h.hp/h.maxHp,_,"#1a0e0e"),h.kind==="minion"&&h.team!==n.team&&h.hp<=(n.ad||o[n.heroKey].ad)&&(e.strokeStyle="#ffffff",e.lineWidth=1.5,e.strokeRect(c-v/2-1.5,b-1.5,v+3,w+3)),h.kind==="hero")for(let A=1;A<6;A++)e.fillStyle="#00000080",e.fillRect(c-v/2+v*A/6,b,1,w);if(h.shield>0&&S.mode!=="guest"&&(e.fillStyle="#e8f4ff",e.fillRect(c-v/2+h.hp/h.maxHp*v,b,Math.min(v*(1-h.hp/h.maxHp),h.shield/h.maxHp*v),w)),h.kind==="hero"){e.fillStyle="#120c1a",e.fillRect(c-v/2-16,b-2,14,w+4),e.strokeStyle="#d0a050",e.lineWidth=1,e.strokeRect(c-v/2-16,b-2,14,w+4),f(String(h.level),c-v/2-9,b+w/2+1,"#ffe070",10),h!==n&&f((h.human?"★ ":"")+o[h.heroKey].name,c,b-9,bl[h.team],11);const A=t.castInfo&&t.castInfo(h);A&&u(c-v/2,b+w+3,v,4,A.p,A.kind===2?"#7ad0ff":A.kind===3?"#c8dcff":"#ffd24a","#140e1a")}e.globalAlpha=1}for(const h of t.texts){if(h.dst!==void 0&&h.dst!==n.id&&h.src!==n.id&&!(n.target&&h.dst===n.target.id))continue;const[c,d]=C(h.x,h.y,1.1+h.t*.9);e.globalAlpha=Math.max(0,1-h.t/1.1);const m=h.t<.12?1.4-h.t*3:1;f(at.t(String(h.txt)),c+(h.id%7-3)*3,d,h.col,(h.big?20:14)*m,h.big?20:14)}e.globalAlpha=1}function aw(){let e=0;const t=S.T,n=(r,o,i,a,s,l)=>{let u=Bs[e];u||(u=new $e(Nl),u.anchor.set(.5),u.blendMode="add",Kt.lightsCam.addChild(u),Bs[e]=u),e++;const[f,h]=C(r,o,i);u.visible=!0,u.x=f,u.y=h,u.width=u.height=a*(2+.35*mf),u.tint=s,u.alpha=Math.min(1,l*(1+.7*mf))};for(const r of $l)r.sprite==="deco_crystals_big"&&n(r.x,r.y,.5,60,10779903,.22+.06*Math.sin(t*1.7+r.x));for(const r of $l)if(r.sprite==="deco_brazier"){const o=.8+.2*Math.sin(t*9+r.x*3)*Math.sin(t*13+r.y);n(r.x,r.y,.7,130,16751164,.4*o),Math.random()<.25&&E(r.x+g(-.1,.1),r.y+g(-.1,.1),.9,g(-.2,.2),g(-.2,.2),g(.8,1.6),1.2,Math.random()<.5?"#ffd25a":"#ff8a2a",2,-.2,!0,.98)}if(S.game){for(const r of S.game.units){if(r.dead||(r.kind==="tower"&&n(r.x,r.y,1.75,100,r.team==="blue"?5949695:16742470,.4+.1*Math.sin(t*2+r.id)),r.kind==="nexus"&&n(r.x,r.y,.9,190,r.team==="blue"?5949695:16742470,.5+.12*Math.sin(t*1.5)),He(r)))continue;r.status&&r.status.burn&&n(r.x,r.y,.4,50,16747560,.5);const o=r.status&&r.status.transform;o&&!o.mount&&n(r.x,r.y,.6,110,o.kind==="fire"?16742954:16765514,.45),(r.aura||r.auraFx)&&n(r.x,r.y,.05,2.8*$.HW*1.2,16747056,.12+.03*Math.sin(t*3+r.id))}for(const r of ba)Ql(r,t)&&n(r.x,r.y,$f(r.kind)/$.ZK,30,r.kind==="obs"?16760896:4894975,.3);for(const r of S.game.zones)r.once&&!up(r)&&n(r.x,r.y,0,r.r*$.HW*1.4,13143295,.35);for(const r of S.game.projs)n(r.x,r.y,r.z||.45,r.skill?60:34,r.fx==="fire"?16751162:r.fx==="frost"?10152191:r.fx==="arcane"?13142783:16777215,.35)}for(;e<Bs.length;e++)Bs[e].visible=!1}let Go=null;function sw(){if(Go)return Go;Go=document.createElement("canvas"),Go.width=Go.height=128;const e=Go.getContext("2d"),t=e.createRadialGradient(64,64,64*.45,64,64,64);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Go}function lw(){const t=Math.ceil(S.W/4),n=Math.ceil(S.H/4),r=S.cam;(ar.width!==t||ar.height!==n)&&(ar.width=t,ar.height=n),xf=!0;const o=ar.getContext("2d");o.globalCompositeOperation="source-over",o.clearRect(0,0,t,n),o.fillStyle="rgba(10,8,26,0.58)",o.fillRect(0,0,t,n),o.globalCompositeOperation="destination-out";for(const i of S.visionSrc){const[a,s]=C(i.x,i.y),l=((a-r.x)*r.z+S.W/2)/4,u=((s-r.y)*r.z+S.H/2)/4,f=Kd(i.kind)*$.HW*Math.SQRT2*r.z/4;l<-f||u<-f/2||l>t+f||u>n+f/2||o.drawImage(sw(),l-f,u-f/2,f*2,f)}}function uw(e){if(!jl("prop_bush"))return;let t=3;const n=()=>(t=t*16807%2147483647)/2147483647;for(const r of e)for(let o=0;o<9;o++){const i=n()*6.28,a=Math.sqrt(n())*r.r*.85,s=r.x+Math.cos(i)*a,l=r.y+Math.sin(i)*a;gf({x:s,y:l,sprite:"prop_bush",tree:!1},!1);const f=Hl[Hl.length-1];f&&(f.spr.scale.set(1.4+n()*.6),f.spr.tint=n()<.5?14217408:16777215,f.bush=!0)}}function fp(){for(const[,e]of Ma){e.spr.destroy(),e.glow.destroy(),e.shadow.destroy();for(const t of e.gear)t.destroy();e.ol&&e.ol.destroy({children:!0})}Ma.clear();for(const e of bo)e.spr.destroy();bo.length=0;for(const[,e]of Bi)e.spr.destroy();Bi.clear(),ba.length=0}const fw=performance.now(),rs=[],os=[],Ni={};let a0=0,Ai=0,s0=0,l0=0,bf=0,$s=0,yl=0,ic=0,vf={};const ou=()=>Math.round((performance.now()-fw)/100)/10;function cw(e){vf={...vf,...e}}function Eo(e,t){os.push([ou(),e,String(t).slice(0,300)]),os.length>3e3&&os.splice(0,500)}function hw(e){a0++,e>Ai&&(Ai=e),e>33&&s0++,e>50&&l0++;const t=performance.now();if(t-$s>=1e3){const n=$s?(t-$s)/1e3:1;rs.push([ou(),Math.round(a0/n),Math.round(Ai),s0,l0,Math.round(bf/n),Math.round(yl)]),rs.length>2400&&rs.shift(),Ai>100&&Eo("hitch",`cuadro de ${Math.round(Ai)} ms`),a0=0,Ai=0,s0=0,l0=0,bf=0,$s=t}}function dw(){bf++}function mw(e){yl=yl?yl*.8+e*.2:e}function pw(e,t){(Ni[e]=Ni[e]||[]).push([ou(),t]),Ni[e].length>400&&Ni[e].shift()}function yw(){const e=rs.slice(-10);if(!e.length)return null;const t=n=>Math.round(e.reduce((r,o)=>r+o[n],0)/e.length);return{fps:t(1),worst:Math.max(...e.map(n=>n[2])),slow:e.reduce((n,r)=>n+r[3],0),snaps:t(5),ping:t(6),lt:ic,err:os.filter(n=>n[1]==="error").length}}try{new PerformanceObserver(t=>{for(const n of t.getEntries())ic++,n.duration>120&&Eo("longtask",`${Math.round(n.duration)} ms`)}).observe({type:"longtask",buffered:!1})}catch{}function cp(){const e=navigator,t={...vf,browser:navigator.userAgent,screen:`${screen.width}x${screen.height} @${devicePixelRatio}`,cores:e.hardwareConcurrency,memGB:e.deviceMemory,durationS:ou(),longTasks:ic},n=["LANELINGS LOG",JSON.stringify(t),"","# por segundo: t, fps, peor ms, cuadros>33ms, >50ms, fotos/s, ping ms"];for(const r of rs)n.push(r.join(","));n.push("","# eventos: t, tipo, texto");for(const r of os)n.push(r.join(" | "));for(const r in Ni){n.push("","# invitado "+r+" (cada 10 s): t, resumen");for(const[o,i]of Ni[r])n.push(o+" "+JSON.stringify(i))}return n.join(`
`)}function gw(){const e=cp(),t="lanelings-log-"+new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)+".txt";try{const n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:"text/plain"})),n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),4e3)}catch{}}setInterval(()=>{try{localStorage.setItem("lanelings_lastlog",cp().slice(-4e5))}catch{}},3e4);let ke,bn,jn,et,ct,cr="dragon",no="blue",nt=null,_d=0,ni=0,u0=0,Hs=!1,$i=!1,Sf=!1,Xn={},Ro=null,Co=!1,Ad=0,Td=0,xw=0,f0=performance.now(),Rd=-9,wf=!1;const Mw=["buff","aoe_self","heal_aoe","illusion","global"],bw=e=>Mw.includes(e.type)||e.type==="channel"&&e.self,vw=["facil","normal","dificil"],Wa=new Map;let _f=!1;function Et(e){if(e==null)return"";if(e=String(e),_f||zf.value==="es"||!window.I18N)return e;const t=Wa.get(e);if(t!==void 0)return t;const n=window.I18N.en;let r=n.exact[e];if(r===void 0){r=e;for(const[o,i]of n.frag)r.includes(o)&&(r=r.split(o).join(i))}return Wa.size>5e3&&Wa.clear(),Wa.set(e,r),r}function Sw(){const e=window.I18N&&window.I18N.en;if(e){e.exact=e.exact||{},e.frag=e.frag||[];for(const t in e.heroes||{}){const n=bn[t],r=e.heroes[t];if(n){r.title&&(e.exact[n.title]=r.title);for(const o in r.abil||{})n.abil[o]&&(e.exact[n.abil[o].name]=r.abil[o][0],e.exact[n.abil[o].desc]=r.abil[o][1])}}for(const t in e.items||{}){const n=ke.ITEMS.find(r=>r.id===t);n&&(e.exact[n.name]=e.items[t][0],e.exact[n.desc]=e.items[t][1])}for(const t of ke.ITEMS)t.en&&(e.exact[t.desc]=t.en);for(const t in e.roles||{})e.exact[t]=e.roles[t],e.exact[t.toUpperCase()]=e.roles[t].toUpperCase();for(const t of Object.values(ke&&ke.CHAT||{}))for(const[n,r]of t)e.exact[n]=r;for(const t in e.runes||{}){const n=ke.RUNES[t];n&&(e.exact[n.name]=e.runes[t][0],e.exact[n.desc]=e.runes[t][1])}for(const t in e.bot||{})e.exact[t]=e.bot[t]}}function hp(e,t,n,r=1,o=1){if(t===void 0||n===void 0){et.play(e,r,0,.03,o);return}const[i,a]=C(t,n),s=S.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z;let f=Math.hypot(l/S.W,u/S.H);const h=S.game&&S.game.player;if(h&&!h.dead){const[c,d]=C(h.x,h.y);f=Math.min(f,Math.hypot((i-c)*s.z/S.W,(a-d)*s.z/S.H))}et.play(e,r*Math.max(0,1-f*.9),Math.max(-1,Math.min(1,l/(S.W*.6))),.03,o)}function ac(e,t,n,r){if(!et.babble)return;const o=Math.max(0,jn.indexOf(e))*7+3;if(n===void 0||r===void 0){et.babble(o,t,.5,0);return}const[i,a]=C(n,r),s=S.cam,l=(i-s.x)*s.z,u=(a-s.y)*s.z,f=Math.hypot(l/S.W,u/S.H),h=.5*Math.max(0,1-f*1.1);h>.05&&et.babble(o,t,h,Math.max(-1,Math.min(1,l/(S.W*.6))))}let Cd=0;function ri(e){try{window.VOICE&&window.VOICE.play(e)}catch{}}function qe(e,t="#ffe7b0",n=1.5){S.game&&S.game.msg(e,t,n)}async function ww(e){ke=window.SIM,bn=ke.HEROES,jn=ke.HERO_KEYS,et=window.AUDIO,ct=new window.Net,Ep();try{const r=localStorage.getItem("moba_lang");(r==="en"||r==="es")&&(zf.value=r)}catch{}try{const r=localStorage.getItem("moba_diff");vw.includes(r)&&(Pn.value={...Pn.value,difficulty:r})}catch{}try{S.shadowsOn=localStorage.getItem("moba_shadows")!=="0"}catch{}Sw(),at.babble=ac,at.sfx=hp,at.say=ri,at.play=(r,o)=>et.play(r,o??1),at.t=Et,at.banner=(r,o,i,a,s)=>{const l=ra.value.slice(-3);ra.value=[...l,{id:++xw,title:Et(r),color:o,killerKey:i,victimKey:a,big:s}]},Lp(dr),mp(),Pn.value={...Pn.value,volMaster:et.volume?et.volume("m"):1,volMusic:et.volume?et.volume("mu"):1,volSfx:et.volume?et.volume("s"):1,soundStyle:et.style?et.style():"epic",shadows:S.shadowsOn},await Jg(r=>Qp.value=r),await kS(e),DS(),Ow(),ow(),await Promise.all([ES(),window.VOICE&&window.VOICE.prefetch?window.VOICE.prefetch():null,kp(),Up().then(()=>Promise.all([Dp(jn),Xp(jn)])),document.fonts?document.fonts.ready:null]);try{const r=new ke.Game(window.MAP,{humans:[]});uw(r._makeBushes())}catch(r){console.warn(r)}kw(),Uw();const[t,n]=C($.N/2,$.N/2);S.cam.x=t,S.cam.y=n,await Gp(),Ke.value="menu",ct.init().then(r=>{jd.value=!!r}).catch(()=>{}),ct.onChange=()=>as(),Qw(),requestAnimationFrame(yp)}function dp(e){const t=ke.PASSIVES&&ke.PASSIVES[e];return t?{name:Et(t[0]),desc:Et(t[1])}:{name:"",desc:""}}function mp(){Bp.value=jn.map(e=>{const t=bn[e];return{key:e,name:t.name,title:Et(t.title),role:t.role,ranged:!!t.ranged,hp:t.hp,ad:t.ad,speed:t.speed,range:t.range,as:t.as,abil:["Q","W","E","R"].map(n=>({key:n,name:Et(t.abil[n].name),desc:Et(t.abil[n].desc),cd:t.abil[n].cd,type:t.abil[n].type,fx:t.abil[n].fx})),passive:dp(e)}}),Np.value=ke.ITEMS.map(e=>({id:e.id,name:Et(e.name),desc:Et(e.desc),cost:e.cost,line:e.line||null,tier:e.tier||0,stack:e.max||0,cat:e.cat||"",cons:e.consumable||null,max:e.max||0,active:!!e.active,parts:e.parts||[],total:e.total||e.cost,recipe:e.recipe||0,into:ke.ITEMS.filter(t=>(t.parts||[]).includes(e.id)).map(t=>t.id),key:e.key||""}))}let Pd="";function sc(e){const t=String(e&&(e.stack||e.message)||e).split(`
`).slice(0,3).join(" | ");if(Eo("error",t),t===Pd)return;Pd=t;let n=document.getElementById("err-box");n||(n=document.createElement("div"),n.id="err-box",n.style.cssText="position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;background:rgba(80,0,0,.85);color:#fff;font:12px monospace;border:1px solid #f66;pointer-events:none;white-space:pre-wrap",document.body.appendChild(n)),n.textContent="Error: "+t}const lc="v9.5";{const e=document.createElement("div");e.id="build-tag",e.textContent=lc,e.style.cssText="position:fixed;right:6px;top:4px;z-index:9998;font:10px monospace;color:rgba(255,255,255,.35);pointer-events:none",document.body.appendChild(e)}window.addEventListener("error",e=>sc(e.error||e.message));window.addEventListener("unhandledrejection",e=>sc(e.reason));let pp=performance.now(),Ws=0;function Id(){const e=performance.now();if(e-pp<150){Ws=0;return}const t=Ws?Math.min(.05,(e-Ws)/1e3):1/30;Ws=e,S.T=e/1e3;try{const n=Ke.value;n==="pick"&&nt&&(Tp(t),fi()),n==="lobby"&&Rp(t),n==="play"&&S.game&&gp(t)}catch(n){console.error(n)}}{let e=!1;try{const t="setInterval(function () { postMessage(0); }, 33);",n=new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})));n.onmessage=Id,e=!0}catch{}e||setInterval(Id,33)}function yp(e){pp=performance.now(),Ke.value==="play"&&hw(e-f0);const t=Math.min(.05,(e-f0)/1e3);f0=e,S.T=e/1e3;try{const n=Ke.value;n==="pick"&&nt&&(Tp(t),fi()),n==="lobby"&&Rp(t),n==="play"&&S.game?Pw(t):Aw(t),S.marker&&(S.marker.t+=t,S.marker.t>.3&&(S.marker=null)),B3(t),JS(t),(Td-=t)<=0&&S.game&&(Td=.1,jw()),(Od-=t)<=0&&(Od=.5,_w()),n!=="play"&&(zd-=t)<=0&&(zd=1,ct.available&&(qp.value=ct.openGames()))}catch(n){console.error(n),sc(n)}requestAnimationFrame(yp)}let zd=0,Od=0;function _w(){if(!et.setAmbient)return;const e=Qn(S.W/2,S.H/2),t=$.N,n=window.MAP,r=Math.abs(e.x+e.y-t)/Math.SQRT2;let o=Math.max(0,1-r/5);for(const[l,u,f]of n.ponds||[])o=Math.max(o,Math.max(0,1-(Math.hypot(e.x-l,e.y-u)-f)/4)*.7);const i=Math.min(Math.hypot(e.x-n.bases.red[0],e.y-n.bases.red[1]),Math.hypot(e.x-n.bases.blue[0],e.y-n.bases.blue[1])),a=Math.max(0,1-i/11),s=Math.max(0,1-o*.7-a)*.9;et.setAmbient(o,s,a)}function Aw(e){const t=S.T*.05,n=$.N/2+Math.cos(t)*12,r=$.N/2+Math.sin(t*1.3)*12,[o,i]=C(n,r);S.cam.x+=(o-S.cam.x)*Math.min(1,e*.5),S.cam.y+=(i-S.cam.y)*Math.min(1,e*.5),S.cam.z=S.cam.tz=1.25}let qa="",c0=!1,qs=0;const Vs={};let Fd=0,Ed=0,Tw=0,Ld=0,Ys={x:-99,y:-99,z:0};const kd={};function Rw(){if(S.mode!=="guest"||S.T-Ld<.4)return;const e=Qn(S.W/2,S.H/2),t=Math.round(S.cam.z*100)/100;Math.hypot(e.x-Ys.x,e.y-Ys.y)<2&&t===Ys.z||(Ld=S.T,Ys={x:e.x,y:e.y,z:t},ct.send(["cam",Math.round(e.x*10)/10,Math.round(e.y*10)/10,t]))}async function Cw(){if(!(c0||!ct.code)){c0=!0,qs||(qs=performance.now(),qe("Se cortó la conexión. Reconectando...","#ffb070",3)),Eo("net","conexion perdida, reconectando");try{await ct.rejoin(),qs=0,qe("¡Reconectado!","#9fe0a0",2.5),et.play("announce",.4),Eo("net","reconectado")}catch{performance.now()-qs>9e4?(qe("No se pudo volver: el anfitrión cerró la partida","#ff8070",6),ct.lost=!1,ct.code=null):await new Promise(t=>setTimeout(t,2500))}c0=!1}}function gp(e){const t=S.game;Hw(e);{const n=Yd(t.t).phase;n!==qa&&(qa&&n==="dusk"&&(qe("Cae la noche: se ve menos lejos","#a8b8ff",3),et.play("announce",.35)),qa&&n==="dawn"&&(qe("Amanece","#ffe0a0",2.5),et.play("announce",.3)),qa=n)}if(S.mode==="guest"){if(ct.lost&&Cw(),Rw(),S.T-Ed>2&&(Ed=S.T,ct.send(["ping",Math.round(performance.now())])),S.T-Fd>10){Fd=S.T;const n=yw();n&&ct.send(["tel",n])}t.guestTick(e),ct.hostState&&ct.hostState.st==="end"&&!t.winner&&(t.winner="blue")}else{if(S.mode==="host")for(const[n,r]of ct.pullCommands())r[0]==="cam"?kd[n]={x:r[1],y:r[2],r:3+21/Math.max(.6,r[3]||1.25)}:r[0]==="ping"?Vs[n]=r[1]:r[0]==="tel"?pw(n,r[1]):t.input(n,r);if(!(Ir.value&&S.mode==="solo")&&!Cf()&&t.update(e),S.mode==="host"&&(ni-=e,ni<=0)){const n=!!(ct.game&&ct.game.sendSnapTo);ni=Math.max(0,ni+(n?ct.guests().length<=4?1/30:1/20:1/12));const r=t.heroes.filter(s=>s.human),o=dn>=0?Math.round(dn*10)/10:Dr?0:-1,i=t.winner?"end":"play",a=r.map(s=>[s.human,s.team,s.heroKey]);if(n){const s=Tw++%8===0;for(const l of ct.guests()){const u=t.slots[l.id],f=t.snapshot(16e3,r,{forId:l.id,meId:u?u.id:0,team:u?u.team:l.team,hot:[u&&{x:u.x,y:u.y,r:12},kd[l.id]],full:s});f.I=o,Vs[l.id]!==void 0&&(f.pe=Vs[l.id],delete Vs[l.id]),ct.publishTo(l.id,i,f,s?a:null)}ct.publishMeta(i,a)}else{const s=t.snapshot(3300,r);s.I=o,ct.publish(i,s,a)}}}}function Pw(e){gp(e);const t=S.game,n=t.player;if(!n)return;for(const o of t.fx)!o.done&&o.type==="death"&&o.kind!=="tower"&&o.kind!=="nexus"&&ZS(o);(Ud&&!n.dead||!n.dead&&Math.hypot(n.x-Dd,n.y-Xd)>8)&&Wl(),Ud=!!n.dead,Dd=n.x,Xd=n.y,Iw(e),S.mouse.wx=Qn().x,S.mouse.wy=Qn().y,S.mouse.rd&&!t.winner&&!S.aim&&S.mouse.inWorld&&(u0-=e,u0<=0&&(u0=.12,bp(!1))),G3(),Ew(e),!Sf&&t.t>7.5&&(Sf=!0,ri("minions"));const r=t.heroes.filter(o=>!o.dead&&o.team!==n.team&&Math.hypot(o.x-n.x,o.y-n.y)<9).length;et.setIntensity(r/3+(n.hp/n.maxHp<.4?.3:0)),zw(e),S.hoverUnit=!S.mouse.md&&!S.aim&&S.mouse.inWorld?Mp():null,S.aimUnit=S.aim&&S.mouse.inWorld?fc():null,Dw(),wf=!n.dead&&t.units.some(o=>o.kind==="tower"&&!o.dead&&o.team!==n.team&&(o.target===n||o.targetId===n.id)),wf&&S.T-Rd>3&&(Rd=S.T,et.play("deny",.5)),(Ad-=e)<=0&&(Ad=1/15,Ml())}let h0=0,Ud=!1,Dd=0,Xd=0;function Iw(e){const t=S.game.player,n=S.cam,r=S.mouse;if(t&&!t.dead&&!r.md&&!r.mmDrag&&(S.camFollow||Xn[" "])){const[o,i]=C(t.x,t.y);n.x+=(o-n.x)*Math.min(1,e*8),n.y+=(i-30-n.y)*Math.min(1,e*8)}else if(!r.md&&!r.mmDrag){const i=r.inWorld||m0();h0=i&&(r.x<2||r.x>S.W-2||r.y<2||r.y>S.H-2)||Xn.ArrowLeft||Xn.ArrowRight||Xn.ArrowUp||Xn.ArrowDown?Math.min(1,h0+e/.2):0;const l=2e3*(.35+.65*h0)*e/n.z;Xn.ArrowLeft&&(n.x-=l),Xn.ArrowRight&&(n.x+=l),Xn.ArrowUp&&(n.y-=l),Xn.ArrowDown&&(n.y+=l),i&&(r.x<2&&(n.x-=l),r.x>S.W-2&&(n.x+=l),r.y<2&&(n.y-=l),r.y>S.H-2&&(n.y+=l))}if(Math.abs(n.tz-n.z)>.001){const o=(r.x-S.W/2)/n.z+n.x,i=(r.y-S.H/2)/n.z+n.y;n.z+=(n.tz-n.z)*Math.min(1,e*12),Math.abs(n.tz-n.z)<.002&&(n.z=n.tz),t&&!t.dead&&(S.camFollow||Xn[" "])||(n.x=o-(r.x-S.W/2)/n.z,n.y=i-(r.y-S.H/2)/n.z)}n.zoomMsgT=Math.max(0,n.zoomMsgT-e),n.x=Math.max(0,Math.min(2*$.N*$.HW,n.x)),n.y=Math.max(0,Math.min(2*$.N*$.HH,n.y))}function Gd(e,t){const n=window.MAP.hg;return!!(n&&n[Math.floor(t)]&&n[Math.floor(t)][Math.floor(e)])}function zw(e){const t=S.game,n=t.player;S.visionSrc=t.units.filter(o=>!o.dead&&o.team===n.team&&Jd[o.kind]);for(const o of t.wards||[])o.team===n.team&&S.visionSrc.push({kind:o.kind==="obs"?"ward":"sentry",x:o.x,y:o.y,team:o.team,dead:!1});t.bushes||(t.bushes=t._makeBushes());for(const o of t.units)o._bush=o.dead?-1:t.bushOf(o);const r=new Set;for(const o of t.units){if(o.dead||o.team===n.team)continue;if(o.kind==="tower"||o.kind==="nexus"){r.add(o.id);continue}const i=Gd(o.x,o.y);let a=0;for(const s of S.visionSrc){const l=Kd(s.kind);if(s.kind==="ward"&&t.bushHidden(o,n.team)&&Math.hypot(o.x-s.x,o.y-s.y)>2.5||Math.abs(o.x-s.x)>=l||Math.abs(o.y-s.y)>=l)continue;const u=Math.hypot(o.x-s.x,o.y-s.y);if(u<l&&(!i||Gd(s.x,s.y)||u<2.2)&&(a=Math.max(a,Math.min(1,(l-u)/1.4)),a>=1))break}a>0&&t.bushHidden(o,n.team)&&(a=0),o._va=(o._va||0)+(a-(o._va||0))*Math.min(1,e*5),o._va>.04&&r.add(o.id)}S.visible=r}let is=null;function xp(e){try{const t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d");return n.drawImage(e,0,0),{w:t.width,h:t.height,d:n.getImageData(0,0,t.width,t.height).data}}catch{return null}}function Ow(){is===null&&(is=[xr.water_mask,xr.water_calm].filter(e=>e&&e.naturalWidth).map(xp).filter(Boolean))}function Fw(e,t){is===null&&(is=[xr.water_mask,xr.water_calm].filter(i=>i&&i.naturalWidth).map(xp).filter(Boolean));const[n,r]=C(e,t);for(const i of is){const a=Math.floor(n/4),s=Math.floor(r/4);if(a>=0&&s>=0&&a<i.w&&s<i.h&&i.d[(s*i.w+a)*4+3]>110)return"water"}const o=window.MAP.grid[Math.floor(t)]&&window.MAP.grid[Math.floor(t)][Math.floor(e)];return o===3?"water":o===2?"stone":o===1?"dirt":"grass"}function Ew(e){const t=S.game,n=t.player,r=S.cam;for(const o of t.units){if(o.dead||!o.moving||o.speed===0||He(o)||o.dash)continue;const[i,a]=C(o.x,o.y);if(Math.abs(i-r.x)>S.W/r.z||Math.abs(a-r.y)>S.H/r.z||(o._stepT=(o._stepT||Math.random()*.3)-e*((o.speedNow?o.speedNow():2.5)/2.5),o._stepT>0))continue;o._stepT=o.kind==="hero"?.32:.4;const s=Fw(o.x,o.y);if(s==="water"){T({type:"ring",x:o.x+g(-.1,.1),y:o.y+g(-.1,.1),r:.55*(o.scale||1),dur:.7,col:"#cfeeff",w:1.5});for(let l=0;l<3;l++)E(o.x,o.y,.1,g(-.8,.8),g(-.8,.8),g(1,2),.35,Math.random()<.5?"#e8f8ff":"#9ad8f0",2,6,!1)}else s==="dirt"&&Math.random()<.5&&E(o.x,o.y,.05,g(-.3,.3),g(-.3,.3),g(.3,.7),.4,"#8a6a48",2,2,!1);o.kind==="hero"&&(o===n?et.play("step_"+s,.32,0,80):Math.random()<.5&&hp("step_"+s,o.x,o.y,.12))}}function Re(e){S.mode==="guest"?(ct.send(e),S.game.predict(e)):S.game.input(S.localId,e)}function Mp(){const e=S.game,t=e.player,n=S.cam,r=window.META;let o=null,i=1e9;const a=Qn();for(const s of e.units){if(s.dead||He(s)||s.team!==t.team&&s._va!==void 0&&s._va<.4||s.team===t.team&&!(s.kind==="minion"&&e.deniable(s,t))||S.mode!=="guest"&&s.team!==t.team&&!e.targetable(s,t))continue;const l=r[s.sprite],[u,f]=C(s.x,s.y),h=(u-n.x)*n.z+S.W/2,c=(f-n.y)*n.z+S.H/2,d=(s.scale||1)*n.z*(s.monster==="serpent"?1.45:1),m=s.kind==="tower"||s.kind==="nexus"||s.boss;let p=(l?l.ay*(s.kind==="minion"?.72:.85):50)*d,y=(m?34:s.kind==="minion"?11:s.kind==="monster"?16:18)*d;const x=s.status&&s.status.transform&&s.status.transform.mount,b=x&&r[x];if(b){const w=(s.status.transform.mountScale||2)*n.z;p+=(b.saddle||b.ay*.62)*w,y=Math.max(y,b.fw*.3*w)}const M=7;let v=1e9;if(Math.abs(S.mouse.x-h)<y+M&&S.mouse.y<c+5*d+M&&S.mouse.y>c-p-M)v=Math.abs(S.mouse.x-h)/(y+M)+Math.abs(S.mouse.y-(c-p/2))/(p+M);else if(s.kind==="hero"||m){const w=Math.hypot(a.x-s.x,a.y-s.y);w<s.r*(s.scale||1)+.2&&(v=1.5+w)}v>1e8||(s.kind==="hero"&&(v-=.4),v<i&&(i=v,o=s))}return o}function Lw(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.units){if(o.dead||He(o)||o.kind==="hero"||o.team!==S.game.player.team&&o._va!==void 0&&o._va<.4)continue;const[i,a]=C(o.x,o.y),s=(i-e.x)*e.z+S.W/2,l=(a-e.y)*e.z+S.H/2,u=(o.scale||1)*e.z,f=o.kind==="tower"||o.kind==="nexus"||o.boss,h=(t[o.sprite]?t[o.sprite].ay*.8:40)*u,c=(f?34:14)*u;if(Math.abs(S.mouse.x-s)<c&&S.mouse.y<l+6*u&&S.mouse.y>l-h){const d=Math.abs(S.mouse.x-s)+Math.abs(S.mouse.y-(l-h/2));d<r&&(r=d,n=o)}}return n}function uc(){const e=S.cam,t=window.META;let n=null,r=1e9;for(const o of S.game.heroes){if(o.dead||He(o))continue;const[i,a]=C(o.x,o.y),s=(i-e.x)*e.z+S.W/2,l=(a-e.y)*e.z+S.H/2;let u=(t[o.sprite]?t[o.sprite].ay*.9:50)*e.z,f=26*e.z;const h=o.status&&o.status.transform&&o.status.transform.mount,c=h&&t[h];if(c){const d=(o.status.transform.mountScale||2)*e.z;u+=(c.saddle||c.ay*.62)*d,f=Math.max(f,c.fw*.3*d)}if(Math.abs(S.mouse.x-s)<f&&S.mouse.y<l+10*e.z&&S.mouse.y>l-u){const d=Math.abs(S.mouse.x-s)+Math.abs(S.mouse.y-(l-u/2));d<r&&(r=d,n=o)}}return n}function bp(e){const t=Qn();if(!e&&Hs)return;const n=e?Mp():null;if(e&&(Ro=n&&n.kind==="hero"&&n!==S.game.player&&n.team===S.game.player.team?n.id:null),n){Hs=!0,Re(["a",n.id]),et.play("click",.3),S.marker={x:n.x,y:n.y,t:0,atk:!0};return}if(e){const r=S.game.player,o=(S.game.wards||[]).find(i=>i.team!==r.team&&S.game.wardSeenBy(i,r.team)&&Math.hypot(i.x-t.x,i.y-t.y)<.9);if(o){Hs=!0,Re(["dw",o.id]),et.play("click",.3),S.marker={x:o.x,y:o.y,t:0,atk:!0};return}}Hs=!1,Re(["m",t.x,t.y]),e&&(S.marker={x:t.x,y:t.y,t:0},et.play("move",.25),S.T-Cd>7&&Math.random()<.5&&(Cd=S.T,ac(S.game.player.heroKey,"ok")))}function vp(e){const t=S.game.player;if(t.ranks&&!t.ranks[e]){qe(t.points>0&&S.game.canRankUp(t,e)?"Primero apréndela: clic en el + (o Shift + "+e+")":e==="R"?"La definitiva se aprende en nivel 6":"Todavía no aprendiste esta habilidad","#bbbbbb",1.5),et.play("deny",.6);return}if((t.cds[e]||0)>.05){qe("En enfriamiento","#bbbbbb",.8),et.play("deny",.5);return}const n=bn[t.heroKey].abil[e],r=Qn();if(Ro=null,bw(n)){Re(["c",e,r.x,r.y]),S.aim=null;return}if(S.aim&&S.aim.k===e){_p();return}S.aim={k:e},et.play("aim",.3)}function Sp(){if(!S.tpAim)return;const e=Qn();Re(["u","tp_scroll",e.x,e.y]),et.play("click",.4),S.tpAim=!1}function wp(){if(!S.wardAim)return;const e=Qn();Re(["u",S.wardAim.id,e.x,e.y]),et.play("click",.4),S.wardAim=null}function fc(){const e=S.game&&S.game.player;if(!e||!S.aim)return null;const t=bn[e.heroKey].abil[S.aim.k];if(!S.game.unitTarget(t))return null;const n=uc();return!n||n===e||n.dead||t.type!=="swap"&&n.team===e.team?null:n}function _p(){if(!S.aim)return;const e=S.game.player,t=bn[e.heroKey].abil[S.aim.k];if(S.game.unitTarget(t)){const r=fc();if(!r){qe(t.type==="swap"?"Haz clic sobre un héroe":"Haz clic sobre un héroe enemigo","#bbbbbb",1.2),et.play("deny",.4);return}Re(["c",S.aim.k,r.x,r.y,r.id]),S.aim=null,S.marker={x:r.x,y:r.y,t:0,atk:r.team!==e.team};return}const n=Qn();Re(["c",S.aim.k,n.x,n.y]),S.aim=null}function Af(e){const t=S.game&&S.game.player;t&&(S.game.canRankUp(t,e)?(Re(["l",e]),et.play("levelup",.5)):(qe(e==="R"?"La R se mejora en nivel 6, 9 y 12":"Esa habilidad no se puede mejorar todavía","#bbbbbb",1.4),et.play("deny",.4)))}function Wl(){const e=S.game&&S.game.player;if(!e)return;const[t,n]=C(e.x,e.y);S.cam.x=t,S.cam.y=n-30}function Tf(){S.cam.tz=Of,S.cam.zoomMsgT=1.2}function Bd(){if(Ke.value!=="play"){Ke.value==="menu"&&(Ir.value=!Ir.value);return}S.aim||S.wardAim||S.tpAim||na.value?(S.aim=null,S.wardAim=null,S.tpAim=!1,na.value=!1):Ir.value=!Ir.value}function kw(){const e=oc();window.addEventListener("contextmenu",t=>{const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA")||t.preventDefault()}),$p(e),Zp(Bd),window.addEventListener("mousemove",t=>{m0()||(S.mouse.md&&(S.cam.x-=(t.clientX-S.mouse.x)/S.cam.z,S.cam.y-=(t.clientY-S.mouse.y)/S.cam.z),S.mouse.x=t.clientX,S.mouse.y=t.clientY,S.mouse.inWorld=t.target===e)}),e.addEventListener("wheel",t=>{Ke.value==="play"&&(S.cam.tz=Math.max(.75,Math.min(3,S.cam.tz*(t.deltaY>0?.9:1.1))),S.cam.zoomMsgT=1.2),t.preventDefault()},{passive:!1}),e.addEventListener("auxclick",t=>{t.preventDefault(),t.button===1&&t.detail===2&&Tf()}),e.addEventListener("mousedown",t=>{et.init(),et.startMusic(),window.VOICE&&window.VOICE.init(),m0()||(S.mouse.x=t.clientX,S.mouse.y=t.clientY,Ke.value==="play"&&!Cf()&&Hp(t.clientX,t.clientY));const n=S.game;if(!(Ke.value!=="play"||!n||!n.player||n.winner)){if(t.button===1){S.mouse.md=!0,t.preventDefault();return}if(!Ir.value){if(t.button===0&&t.altKey){dr.ping(t.ctrlKey?"missing":"danger");return}if(t.button===0){if(S.wardAim){wp();return}if(S.tpAim){Sp();return}if(S.aim){_p();return}if(S.amove){S.amove=!1;const o=Qn();Re(["am",o.x,o.y]),S.marker={x:o.x,y:o.y,t:0,atk:!0},et.play("click",.3);return}const r=uc()||Lw();Ro=r&&r!==n.player?r.id:null}if(t.button===2){if(S.aim&&(S.aim=null),S.wardAim){S.wardAim=null;return}if(S.tpAim){S.tpAim=!1;return}S.amove=!1,S.mouse.rd=!0,bp(!0)}}}}),window.addEventListener("mouseup",t=>{t.button===2&&(S.mouse.rd=!1),t.button===1&&(S.mouse.md=!1),t.button===0&&(S.mouse.mmDrag=!1)}),window.addEventListener("keydown",t=>{const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"))return;et.init();const r=S.game,o=t.key.toUpperCase();if(Ke.value==="play"&&r&&r.player&&t.key==="Enter"){Qd.value=t.shiftKey?"all":"team",t.preventDefault();return}if(o==="M"){t.shiftKey?et.toggleMusic():et.toggleMute();return}if(t.key==="Escape"&&Ke.value==="menu"){Ir.value=!Ir.value;return}if(Ke.value!=="play"||!r||!r.player)return;if(Cf()){(t.key===" "||t.key==="Escape"||t.key==="Enter")&&S.mode==="solo"&&(zp(),t.preventDefault());return}const i=r.player;if(t.key==="Escape"){Bd();return}if(t.key==="Tab"){t.repeat||(Va.value=!Va.value),t.preventDefault();return}if("QWER".includes(o)&&o.length===1&&(t.shiftKey||t.ctrlKey)){Af(o),t.preventDefault();return}if(o==="T"&&o.length===1){i.points>0?($i=!$i,et.play("aim",.4)):(qe("No tienes puntos de habilidad","#bbbbbb",1),et.play("deny",.4));return}if("QWER".includes(o)&&o.length===1&&$i){$i=!1,Af(o);return}if("QWER".includes(o)&&o.length===1){S.wardAim=null,vp(o);return}if(t.altKey&&/^[1-6]$/.test(t.key)){dr.useItem(+t.key-1),t.preventDefault();return}const a=!t.ctrlKey&&!t.altKey&&!t.metaKey?Jp(ty(t)):null;if(a){a.startsWith("item")?dr.useItem(+a.slice(4)):a==="recall"?dr.recall():dr.useCons(a),t.preventDefault();return}if(t.key==="F1"||t.key==="1"){Wl(),t.preventDefault();return}if(t.key==="F2"){dr.courier(),t.preventDefault();return}if(t.key.startsWith("Arrow")){Xn[t.key]=!0,t.preventDefault();return}if(o==="P"){na.value=!na.value,et.play("click",.4);return}if(o==="K"){et.setStyle&&(dr.setSoundStyle(et.style()==="epic"?"pixel":"epic"),qe("Sonido: "+(et.style()==="epic"?"orquestal":"pixel"),"#c8e8ff",1.5));return}if(o==="A"&&o.length===1){S.amove=!0;return}if((o==="D"||o==="F")&&o.length===1){dr.spell(o);return}o==="S"&&Re(["s"]),o==="Y"&&(S.camFollow=!S.camFollow),t.key==="0"&&Tf(),t.key===" "&&(Xn[" "]=!0,Wl(),t.preventDefault())}),window.addEventListener("keyup",t=>{t.key==="Tab"&&t.preventDefault(),delete Xn[t.key]}),window.addEventListener("blur",()=>{Va.value=!1,Xn={},S.mouse.md=!1,S.mouse.rd=!1,S.mouse.inWorld=!1}),document.addEventListener("mouseleave",()=>{S.mouse.inWorld=!1})}const Pr={};function Uw(){const e=(r,o,i,a)=>{const s=document.createElement("canvas");s.width=40,s.height=40;const l=s.getContext("2d");if(["X","XX","XLX","XLMX","XLMMX","XLMMMX","XLMMMMX","XLMMMMMX","XLMMMXXXX","XLMXMX","XMX XMX","XX  XMX","X    XMX","     XX"].forEach((f,h)=>[...f].forEach((c,d)=>{c!==" "&&(l.fillStyle=c==="X"?"#0a0610":c==="L"?o:c==="M"?r:i,l.fillRect(d*2,h*2,2,2))})),a){for(let c=0;c<7;c++)l.fillStyle="#0a0610",l.fillRect(18+c*2-1,26-c*2-1,4,4);for(let c=0;c<7;c++)l.fillStyle=c<5?"#e8eef8":"#ffd24a",l.fillRect(18+c*2,26-c*2,2,2);l.fillStyle="#ffd24a",l.fillRect(17,23,6,2)}return`url(${s.toDataURL()}) 0 0, auto`};Pr.normal=e("#ffd24a","#fff2b0","#8a5a10",!1),Pr.enemy=e("#ff4a3a","#ffb0a0","#7a1010",!0),Pr.ally=e("#ffffff","#ffffff","#8a8a9a",!1);const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");n.strokeStyle="#000",n.lineWidth=4,n.beginPath(),n.arc(16,16,10,0,7),n.stroke(),n.strokeStyle="#7fe0ff",n.lineWidth=2,n.beginPath(),n.arc(16,16,10,0,7),n.stroke();for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])n.fillStyle="#7fe0ff",n.fillRect(16+r*13-2,16+o*13-2,4,4);Pr.aim=`url(${t.toDataURL()}) 16 16, crosshair`,document.documentElement.style.cursor=Pr.normal}let Nd="";function Dw(){const e=S.game&&S.game.player,t=S.hoverUnit,n=S.aim||S.amove?"aim":t&&e?t.team!==e.team?"enemy":"ally":"normal";n!==Nd&&(Nd=n,oc().style.cursor=Pr[n],document.documentElement.style.cursor=Pr.normal,e1(Pr[n]))}function Ap(){const e=S.mode==="solo"?"local":ct.myPeer||"host";return nt&&nt.h&&nt.h[e]}function gl(e){const t=e?[{id:ct.myPeer||"host",team:no},...ct.guests().map(a=>({id:a.id,team:a.team==="red"?"red":"blue"}))]:[{id:"local",team:"blue"}],n={},r={blue:0,red:0};for(const a of t)r[a.team]<5&&(n[a.id]=[a.team,r[a.team]++,0]);const o=[];let i=0;for(const a of["blue","red"])for(let s=r[a];s<5;s++)o.push({team:a,slot:s,at:2+Math.random()*24,q:i++});o.sort((a,s)=>a.q%2-s.q%2||a.q-s.q),o.forEach((a,s)=>a.q=s),nt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:o,h:n,view:cr||jn[0],locked:!1,prep:-1,online:!!e},e&&(S.mode="host"),Ke.value="pick",et.setMode("menu"),et.play("announce",.6),fi()}function Rf(e,t){if(!nt||!e)return;const n=t===void 0;if(n&&S.mode==="guest"){nt.locked||(ct.send(["lock",e]),cr=e,nt.pending=e,et.play("levelup",.7));return}const r=n?S.mode==="solo"?"local":ct.myPeer||"host":t,o=nt.h[r];if(!o||o[2])return;const[i,a]=o,s=l=>nt.blue.includes(l)||nt.red.includes(l);if(s(e))if(n){et.play("deny",.6);return}else{const l=jn.filter(u=>!s(u));e=l[Math.random()*l.length|0]}nt[i][a]=e,o[2]=1,n&&(nt.locked=!0,cr=e,nt.view=e,et.play("levelup",.7),ac(e,"select"))}function $d(e){const t=nt[e],n=[...nt.blue,...nt.red],r=["Tanque","Tiradora","Mago","Soporte","Luchador","Asesina"].filter(a=>!t.some(s=>s&&bn[s].role===a));let o=jn.filter(a=>!n.includes(a));const i=o.filter(a=>r.includes(bn[a].role));return i.length&&(o=i),o[Math.random()*o.length|0]||jn[Math.random()*jn.length|0]}function Tp(e){if(S.mode==="guest")return Xw();if(nt.online){for(const[n,r]of ct.pullCommands())r[0]==="lock"&&Rf(r[1],n);(_d-=e)<=0&&(_d=.25,ct.publishDraft({t:Math.round(nt.t*10)/10,p:Math.round(nt.prep*10)/10,b:nt.blue,r:nt.red,h:nt.h}))}if(nt.prep>=0){nt.prep-=e,nt.prep<=0&&(nt.online?Gw():Cp());return}if(!nt.online){if(nt.locked){nt.bt=(nt.bt||0)+e;for(const n of nt.order)!n.done&&nt.bt>=(Co?.15+n.q*.12:.3+n.q*.28)&&(n.done=!0,nt[n.team][n.slot]=$d(n.team),et.play("click",.35))}nt.locked&&nt.order.every(n=>n.done)&&(nt.prep=Co?1.5:3,et.play("announce",.7));return}if(Object.values(nt.h).every(n=>n[2])){nt.bt=(nt.bt||0)+e;for(const n of nt.order)!n.done&&nt.bt>=.3+n.q*.28&&(n.done=!0,nt[n.team][n.slot]=$d(n.team),et.play("click",.35));nt.order.every(n=>n.done)&&(nt.prep=4,et.play("announce",.7))}}function Xw(){const e=ct.hostState;if(e&&e.st==="play"&&e.S){nt=null,ci.value=null,Pp();return}const t=e&&e.D;if(!t)return;const n=nt.blue.join()+nt.red.join();nt.t=t.t,nt.prep=t.p,nt.blue=t.b,nt.red=t.r,nt.h=t.h,n!==nt.blue.join()+nt.red.join()&&et.play("click",.35);const r=Ap();r&&r[2]?(nt.locked=!0,cr=nt[r[0]][r[1]],nt.view=cr||nt.view):nt.pending&&performance.now()-(nt.sentAt||0)>1e3&&(nt.sentAt=performance.now(),ct.send(["lock",nt.pending]))}function fi(){if(!nt){ci.value=null;return}const e=Ap(),t=S.mode==="solo"?"local":ct.myPeer||"host";ci.value={online:!!nt.online,t:nt.t,prep:nt.prep,blue:[...nt.blue],red:[...nt.red],mySlot:e?[e[0],e[1]]:null,humans:Object.entries(nt.h||{}).map(([n,r])=>({team:r[0],slot:r[1],me:n===t})),locked:!!nt.locked,pending:nt.pending||null,view:nt.view}}function Rp(e){ct.role==="guest"&&ct.hostState&&ct.hostState.st==="pick"&&ct.hostState.D&&(S.mode="guest",S.localId=ct.myPeer,nt={t:30,blue:[null,null,null,null,null],red:[null,null,null,null,null],order:[],h:{},view:cr||jn[0],locked:!1,prep:-1,online:!0},Ke.value="pick",et.play("announce",.6)),ct.role==="guest"&&ct.hostState&&ct.hostState.st==="play"&&ct.hostState.S&&Pp(),ct.role==="host"&&(ni-=e,ni<=0&&(ni=1.5,ct.setChoice(cr,no))),(Hd-=e)<=0&&(Hd=.3,as())}let Hd=0;function as(){const e=[];if(ct.role==="host"){e.push({name:Et("Tú (anfitrión)"),team:no,me:!0});for(const t of ct.guests())e.push({name:Et("Invitado"),team:t.team,me:!1})}else ct.role==="guest"&&(e.push({name:Et("Tú"),team:no,me:!0}),ct.hostState&&e.push({name:Et("Anfitrión"),team:ct.hostState.team,me:!1}));Sn.value={...Sn.value,role:ct.role,code:ct.code,myTeam:no,players:e,hostFound:!!ct.hostState}}function Cp(){S.mode="solo",S.localId="local";const e=nt?{blue:nt.blue.slice(1).filter(Boolean),red:nt.red.filter(Boolean)}:null;S.game=new ke.Game(window.MAP,{humans:[{id:"local",team:"blue",hero:cr}],localId:"local",picks:e,difficulty:Pn.value.difficulty,aram:Co}),Co&&(Co=!1,S.game.msg("Modo ARAM: todos al medio. ¡A pelear!","#ffe7b0",3)),nt=null,ci.value=null,cc(),S.game.msg("¡Bienvenido! Los súbditos salen en 8 segundos","#ffe7b0")}function Gw(){S.mode="host",S.localId=ct.myPeer||"host";const e=[],t={blue:[],red:[]};if(nt){for(const n in nt.h){const[r,o]=nt.h[n];e.push({id:n,team:r,hero:nt[r][o]||jn[0]})}for(const n of["blue","red"])nt[n].forEach((r,o)=>{r&&!Object.values(nt.h).some(i=>i[0]===n&&i[1]===o)&&t[n].push(r)})}nt=null,ci.value=null,S.game=new ke.Game(window.MAP,{humans:e,localId:S.localId,picks:t,difficulty:Pn.value.difficulty}),ct.lastSeq={};for(const n of ct.guests())ct.lastSeq[n.id]=n.c.length?n.c[n.c.length-1][0]:0;for(const n of ct.guests()){const r=S.game.slots[n.id];r&&(r.cid=n.cid)}ct.onGuests=(n,r)=>{const o=S.game;if(o){for(const i of r.left||[]){const a=o.slots[i.peer];a&&!a.bot&&(a.bot=!0,a.away=!0,o.msg("Un jugador se desconectó: un bot lo cubre hasta que vuelva","#ffb070"))}for(const i of n)o.slots[i.id]||Bw(o,i)}},cc(),S.game.msg("¡Partida online! Los súbditos salen en 8 segundos","#ffe7b0")}function Bw(e,t){const n=t.cid&&e.heroes.find(i=>i.cid===t.cid),r=i=>e.heroes.find(a=>a.bot&&!a.isPlayer&&!a.away&&(!i||a.team===i)),o=n||r(t.team)||r();!o||o.isPlayer||(o.human&&e.slots[o.human]===o&&delete e.slots[o.human],o.human=t.id,o.cid=t.cid,o.bot=!1,o.away=!1,o.path=[],o.target=null,e.slots[t.id]=o,ct.lastSeq[t.id]=t.c.length?t.c[t.c.length-1][0]:0,e.msg(n?"Un jugador volvió a la partida":"Un jugador entró a la partida y toma un héroe","#9fe0a0",3),Eo("net",(n?"vuelve ":"entra ")+t.id+" como "+o.heroKey))}function Pp(){S.mode="guest",S.localId=ct.myPeer,S.game=new ke.Game(window.MAP,{humans:[],localId:S.localId}),S.game.units=[],S.game.heroes=[],S.game.player=null,ct.onSnapshot=e=>{S.game&&S.mode==="guest"&&(dw(),e.pe&&mw(performance.now()-e.pe),ct.myPeer&&(S.localId=ct.myPeer),S.game.applySnapshot(e,S.localId))},ct.hostState&&ct.hostState.S&&S.game.applySnapshot(ct.hostState.S,S.localId),cc()}const Yr={blue:.5,red:3.2,step:.42,vs:5.5,go:7,end:8.6};let xl=0,dn=-1,ea=[],Nw=0,Dr=!1,ql=0;function Cf(){return dn>=0}function Ip(){const e=S.game,t=e.player;ex(e.heroes.map(s=>s.sprite||s.heroKey));const n=s=>{const l=bn[s.heroKey]||{};return{key:s.heroKey,name:l.name||s.heroKey,title:l.title||"",role:l.role||"",me:s===t,human:!!s.human}},r=s=>e.heroes.filter(l=>l.team===s).sort((l,u)=>(u===t?1:0)-(l===t?1:0)||(u.human?1:0)-(l.human?1:0)).map(n),o=r("blue"),i=r("red");if(!t||o.length+i.length<2){Dr=!0;return}Dr=!1;const a=ql;ql=0,Ff.value={blue:o,red:i,myTeam:t?t.team:"blue",id:++Nw,off:a,canSkip:S.mode==="solo"},dn=a,xl=0,ea=[[.15,()=>ri("blue_team")],...o.map((s,l)=>[Yr.blue+l*Yr.step+.05,()=>et.play("reveal",.8)]),[Yr.red-.35,()=>ri("red_team")],...i.map((s,l)=>[Yr.red+l*Yr.step+.05,()=>et.play("reveal",.8)]),[Yr.vs-.02,()=>{et.play("vsslam",1),ri("versus")}],[Yr.go,()=>{et.play("warhorn",.9),ri("battle"),et.setMode("battle")}]].filter(s=>s[0]>=a-.05),et.setMode("menu")}function $w(){const e=ct.hostState&&ct.hostState.S;if(!e||e.I===void 0)return;const t=+e.I;t>=0?dn<0?(ql=t,Dr=!0):Math.abs(dn-t)>.6&&(dn=t):(dn>=0||Dr)&&(Dr=!1,dn>=0&&iu())}function Hw(e){if(S.mode==="guest"&&$w(),Dr&&S.game&&Ip(),dn<0)return;const t=performance.now()/1e3,n=xl?t-xl:0;for(xl=t,dn+=n>2?.05:n||e;ea.length&&ea[0][0]<=dn;)ea.shift()[1]();dn>=Yr.end&&iu()}function iu(){Dr=!1,!(dn<0)&&(dn=-1,ea=[],Ff.value=null,Wl(),et.setMode("battle"))}function zp(){dn<0||S.mode!=="solo"||(dn<Yr.go&&(et.play("warhorn",.7),ri("battle")),iu())}function cc(){e1(Pr.normal);try{const e=S.game,t=e&&e.player;cw({build:lc,mode:S.mode,aram:!!(e&&e.aram),hero:t&&t.heroKey,team:t&&t.team,gpu:S.gpuName,softGpu:S.softGpu,difficulty:Pn.value.difficulty,desktop:!!window.lanelingsDesktop,heroes:e?e.heroes.map(n=>n.team[0]+":"+n.heroKey+(n.human?"*":"")).join(" "):""}),Eo("game","empieza la partida ("+S.mode+")")}catch{}if(h2(),fp(),Ke.value="play",ra.value=[],et.setMode("battle"),Sf=!1,S.mode==="guest"?Dr=!1:Ip(),Ro=null,S.aim=null,S.amove=!1,$i=!1,S.cam.z=S.cam.tz=Of,S.game.player){const[e,t]=C(S.game.player.x,S.game.player.y);S.cam.x=e,S.cam.y=t-30}}async function Wd(){Yp(),Co=!1,qa="",Pf=!1;{const e=document.getElementById("world");e&&(e.style.filter="")}dn=-1,ea=[],Dr=!1,ql=0,Ff.value=null,Ir.value=!1,na.value=!1,Va.value=!1,S.aim=null,nt=null,ci.value=null,S.mode!=="solo"&&await ct.leave(),S.game=null,S.mode="solo",fp(),h2(),t1.value=null,Zd.value=null,ra.value=[],Ke.value="menu",et.setMode("menu"),oc().style.cursor=Pr.normal}function Ww(e){const t=bn[e.heroKey],n=(e.items||[]).map(o=>ke.ITEM[o]).filter(Boolean),r=o=>n.reduce((i,a)=>i+(a[o]||0),0);return[{label:Et("Ataque"),value:String(Math.round(t.ad*(1+.07*(e.level-1))+r("ad")))},{label:Et("Vel. de ataque"),value:(t.as*(1+.02*(e.level-1)+r("asp"))).toFixed(2)},{label:Et("Daño de habilidades"),value:"+"+Math.round(r("ap")*100)+"%"},{label:Et("Reducción de daño"),value:Math.round(Math.min(.6,(t.armor||0)+r("armor"))*100)+"%"},{label:Et("Velocidad"),value:(t.speed+r("ms")).toFixed(2)},{label:Et("Robo de vida"),value:Math.round(r("ls")*100)+"%"},{label:Et("Alcance"),value:String(t.range)}]}const Op=[["pocion","H","pots"],["clarity","J","clar"],["tp_scroll","X","tps"],["ojo","V","wards"],["centinela","C","sentries"],["dust","I","dusts"]];function Fp(e){return(e.items||[]).filter(t=>!ke.ITEM[t].line)}function qd(e){return e.slots?e.slots.slice(0,6):Fp(e).concat([null,null,null,null,null,null]).slice(0,6)}function d0(e){const t=S.game,n=bn[e.heroKey],r=t.player,o=e===r,i=[];for(const p of["stun","slow","root","burn","invis","haste","power","regen","arcane","transform","potion","redbuff","bluebuff"])e.status&&e.status[p]&&i.push(p);e.aegis&&(S.mode==="guest"||e.aegis>t.t)&&i.push("aegis"),e.shield>0&&i.push("shield");const a=(e.items||[]).map((p,y)=>{const x=ke.ITEM[p],b=x.active?{cd:x.active.cd,left:e.team!==t.player.team?0:S.mode==="guest"?(e.itemCdLeft||[])[y]||0:Math.max(0,((e.itemCd||{})[p]||0)-t.t)}:null;return{id:p,slot:0,name:Et(x.name),desc:Et(x.desc),tier:x.tier||0,line:x.line||null,count:1,active:b}}),s=e.slots||Fp(e).concat([null,null,null,null,null,null]).slice(0,6),l=a.filter(p=>!p.line),u=new Set,f=s.map((p,y)=>{if(!p)return null;const x=l.findIndex((b,M)=>b.id===p&&!u.has(M));return x<0?null:(u.add(x),{...l[x],slot:y})}).filter(Boolean),h=a.filter(p=>p.line),c=Op.map(([p,,y])=>{const x=ke.ITEM[p];return{id:p,key:Kp(jp(p)),count:e[y]||0,max:x.max,name:Et(x.name),desc:Et(x.desc)}}),d=e.team!==r.team,m=o||!d;return{id:e.id,heroKey:e.heroKey,name:n.name,title:Et(n.title),role:Et(n.role),team:e.team,level:e.level,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:Math.max(0,e.mana||0),maxMana:e.maxMana||0,passive:dp(e.heroKey),xpFrac:S.mode==="guest"?e.xpFrac||0:e.level>=12?1:e.xp/t.xpNeed(e.level),gold:e.gold!==void 0&&m?Math.floor(e.gold):null,kills:e.kills,deaths:e.deaths,assists:e.assists,cs:e.cs,points:e.points||0,dead:!!e.dead,respawn:Math.ceil(e.respawn||0),recall:e.recall?e.recall.t:null,recallMax:ke.RECALL_T,stash:(e.stash||[]).slice(),courier:o?qw(e):null,cast:(()=>{const p=t.castInfo(e);return p?{kind:p.kind,p:p.p,name:p.kind===3?Et("Pergamino de teleporte"):Et(n.abil[p.key]?n.abil[p.key].name:"")}:null})(),abil:["Q","W","E","R"].map(p=>{const y=n.abil[p],x=e.ranks?e.ranks[p]:1;return{key:p,name:Et(y.name),desc:Et(y.desc),cd:d?0:e.cds&&e.cds[p]||0,cdMax:y.cd,rank:x,cost:t.manaCost?t.manaCost(e,p):0,canRankUp:o&&!!(e.ranks&&t.canRankUp(e,p)),dmg:y.dmg?Math.round(y.dmg*t.abilMul(e,p)):null,type:y.type,fx:y.fx}}),items:f,gearItems:h,cons:c,gear:S.mode==="guest"?e.gear||0:t.gearCode(e),spells:[{key:"D",name:Et("Destello"),cd:e.spCd&&e.spCd.D||0,cdMax:90},{key:"F",name:Et("Fantasma"),cd:e.spCd&&e.spCd.F||0,cdMax:70}],stats:Ww(e),human:!!e.human,isMe:o,status:i}}function qw(e){const t=S.game.units.find(r=>r.kind==="courier"&&!r.dead&&(r.owner===e||r.ownerId===e.id)),n=S.mode==="guest"?e.courierRes||0:e.courier&&e.courier.dead?Math.max(0,Math.ceil((e.courierBack||0)-S.game.t)):0;return t?{state:t.state||"home",n:S.mode==="guest"?t.bagN||0:(t.bag||[]).length,res:0,flying:!!t.flying}:n?{state:"dead",n:0,res:n,flying:!1}:null}function Vw(e){const t=e.kind==="courier"?"Courier":e.kind==="minion"?e.pet?e.illusion?"Ilusión":"Invocación":e.ranged?"Súbdito a distancia":"Súbdito cuerpo a cuerpo":e.kind==="tower"?"Torre":e.kind==="nexus"?"Núcleo":e.name||"Bicho",n=(r,o)=>({label:Et(r),value:o});return{id:e.id,heroKey:e.sprite,name:Et(t),title:Et(e.kind==="monster"?e.boss?"Jefe de la jungla":"Bicho de la jungla":e.team==="neutral"?"":e.team==="blue"?"Equipo azul":"Equipo rojo"),role:"",team:e.team,level:e.level||1,hp:Math.max(0,e.hp),maxHp:e.maxHp,shield:e.shield||0,mana:0,maxMana:0,passive:null,xpFrac:0,gold:null,kills:0,deaths:0,assists:0,cs:0,points:0,dead:!!e.dead,respawn:0,recall:null,abil:[],gear:0,items:[],gearItems:[],cons:[],spells:[],stash:[],courier:null,cast:null,recallMax:5,stats:[n("Ataque",String(Math.round(e.ad||0))),n("Vel. de ataque",(e.as||0).toFixed(2)),n("Reducción de daño",Math.round((e.armor||0)*100)+"%"),n("Velocidad",(e.speed||0).toFixed(2)),n("Alcance",(e.range||0).toFixed(1))],human:!1,isMe:!1,status:[],unit:!0}}let Pf=!1;function Ml(){const e=!!(S.game&&S.game.player&&S.game.player.dead);if(e!==Pf){Pf=e;const a=document.getElementById("world");a&&(a.style.filter=e?"grayscale(.85) brightness(.85)":"")}const t=S.game,n=t.player;if(!n)return;const r=Ro?ht(Ro):null;r&&(r.dead&&r.kind!=="hero"||He(r))&&(Ro=null);const o=t.msgs.filter(a=>!a.to||a.to===S.localId).slice(-3).map(a=>({id:a.id,text:Et(a.txt),color:a.col,t:a.t,dur:a.dur})),i=(t.chat||[]).filter(a=>a.scope==="all"||a.team===n.team).slice(-8).map(a=>{_f=a.human;const s=Et(a.txt);return _f=!1,{id:a.id,scope:a.scope,team:a.team,heroKey:a.hero,heroName:bn[a.hero]?bn[a.hero].name:"?",human:!!a.human,text:s,age:t.t-a.t}});t1.value={me:d0(n),inspected:r?r.kind==="hero"?d0(r):Vw(r):null,allies:t.heroes.filter(a=>a.team===n.team&&a!==n).map(d0),score:{...t.score},time:t.t,feed:t.feed.slice(-5).map(a=>({id:a.id,killerKey:a.killerKey||null,killerName:a.killerKey?bn[a.killerKey].name:Et(a.killerName),killerTeam:a.killerTeam,victimKey:a.victimKey,victimTeam:a.victimTeam})),msgs:o,chat:i,buffs:{serpent:t.buffs[n.team].serpent||0,stone:t.buffs[n.team].stone||0},towerWarn:wf,inShop:t.inShop(n),levelMode:$i,aim:S.aim?S.aim.k:null,amove:S.amove,winner:t.winner||null,myTeam:n.team,zoomPct:Math.round(S.cam.tz/Of*100),zoomMsg:S.cam.zoomMsgT,camFollow:S.camFollow,scoreboard:t.heroes.map(a=>({id:a.id,heroKey:a.heroKey,name:bn[a.heroKey].name,team:a.team,level:a.level,gear:S.mode==="guest"?a.gear||0:t.gearCode(a),kills:a.kills,deaths:a.deaths,assists:a.assists,cs:a.cs,gold:a.gold!==void 0&&(a.team===n.team||S.mode!=="guest")?Math.floor(a.gold):null,items:a.items||[],human:!!a.human,isMe:a===n,dead:!!a.dead,respawn:Math.ceil(a.respawn||0)})),mode:S.mode,netLost:!!ct.lost,deathRecap:n.dead?Yw(n):If=null}}let If=null,Vd=null;function Yw(e){return If!==e&&(If=e,Vd=Kw(e)),Vd}function Kw(e){const t=(e.dmgLog||[]).filter(r=>S.game.t-r.t<15);if(!t.length)return null;const n={};for(const r of t){const o=r.k+":"+(r.h||"");n[o]=n[o]||{name:r.k==="hero"&&bn[r.h]?bn[r.h].name:Et(r.k==="tower"?"Torre":r.k==="minion"?"Súbdito":r.k==="monster"?"Monstruo":"Fuente"),heroKey:r.k==="hero"?r.h:null,amount:0,kind:r.k},n[o].amount+=r.a}return Object.values(n).map(r=>({...r,amount:Math.round(r.amount)})).sort((r,o)=>o.amount-r.amount).slice(0,5)}function jw(){const e=S.game,t=e.player;if(!t)return;const{N:n,HW:r,HH:o}=$,i=2*n*r,a=2*n*o,s=(c,d)=>{const[m,p]=C(c,d);return{x:m/i,y:p/a}},l=[];for(const c of e.units){if(c.dead||He(c))continue;const d=s(c.x,c.y);l.push({x:d.x,y:d.y,team:c.team,kind:c.kind,heroKey:c.heroKey,me:c===t,human:!!c.human})}const u=S.cam,f=S.W/u.z,h=S.H/u.z;Zd.value={units:l,camps:e.camps.filter(c=>c.alive).map(c=>({...s(c.x,c.y),boss:!!c.boss})),view:{x0:(u.x-f/2)/i,y0:(u.y-h/2)/a,x1:(u.x+f/2)/i,y1:(u.y+h/2)/a},vision:S.visionSrc.map(c=>({...s(c.x,c.y),r:Jd[c.kind]*r*Math.SQRT2/i})),pings:(e.pings||[]).filter(c=>c.team===t.team&&e.t-c.t<3).map(c=>({...s(c.x,c.y),t:e.t-c.t,kind:c.kind})),wards:(e.wards||[]).filter(c=>e.wardSeenBy(c,t.team)).map(c=>({...s(c.x,c.y),kind:c.kind,mine:c.team===t.team}))}}const dr={skipIntro(){zp()},shopDenied(e){qe(e,"#ffb070",2),et.play("deny",.5)},playVsBots(){et.init(),et.startMusic(),gl(!1)},playAram(){et.init(),et.startMusic(),Co=!0,gl(!1)},async hostOnline(){Sn.value={...Sn.value,msg:Et("Creando sala...")};try{await ct.host(cr,no),Ke.value="lobby",Sn.value={...Sn.value,msg:""},as()}catch{Sn.value={...Sn.value,msg:Et("No se pudo crear la sala")}}},async joinOnline(e){Sn.value={...Sn.value,msg:Et("Entrando...")};try{if(await ct.join(e,cr,no),window.claude&&window.claude.__p2p)try{history.replaceState(null,"",location.pathname+"?sala="+e)}catch{}Ke.value="lobby",Sn.value={...Sn.value,msg:""},as()}catch{Sn.value={...Sn.value,msg:Et("No se pudo entrar")}}},setLobbyTeam(e){no=e,ct.setChoice(cr,no),as()},startOnlinePick(){gl(!0)},async leaveLobby(){await ct.leave(),Ke.value="menu"},viewHero(e){nt&&!nt.locked&&(nt.view=e,et.play("aim",.3),fi())},lockHero(e){Rf(e),fi()},randomHero(){const e=jn.filter(t=>!nt.blue.includes(t)&&!nt.red.includes(t));Rf(e[Math.random()*e.length|0]),fi()},backToMenu(){Co=!1,nt&&nt.online?Wd():(nt=null,ci.value=null,Ke.value="menu")},buy(e){const t=S.game&&S.game.player;if(!t)return;const n=S.game.inShop(t),r=window.SIM.ITEM[e];if(S.mode!=="guest"&&!(n?S.game.canBuy(t,e):S.game.canBuyRemote(t,e))){qe(!n&&(t.stash||[]).length>=6?"Tu base ya guarda 6 cosas: espera al courier":t.gold<r.cost?"Te falta oro":r.consumable?"Ya llevas el máximo de ese":r.line?"Primero compra el nivel anterior":"Inventario lleno (6/6): vende un accesorio","#ffb070",2),et.play("deny",.5);return}Re(["i",e]),et.play("buy",.6),n||qe("Guardado en tu base: tu courier te lo lleva","#c8e0ff",1.8)},courier(){const e=S.game&&S.game.player;if(!e)return;const t=S.game.units.find(o=>o.kind==="courier"&&!o.dead&&(o.owner===e||o.ownerId===e.id));if(!t){qe(e.courierBack||e.courierRes?"Tu courier está reviviendo":"Tu courier aparece cuando compras lejos de la base","#bbbbbb",1.6),et.play("deny",.4);return}const[n,r]=C(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1,Re(["cr","go"]),et.play("click",.4)},sell(e){const t=S.game&&S.game.player;if(!t||!t.items)return;const n=typeof e=="number"?qd(t)[e]:e;if(n){if(!S.game.inShop(t)){qe("Solo puedes vender en tu base","#ffb070",1.4),et.play("deny",.4);return}Re(["v",n]),et.play("buy",.4)}},useCons(e){const t=S.game&&S.game.player;if(!t||t.dead)return;const n=Op.find(r=>r[0]===e);if(n){if(!t[n[2]]){qe("No tienes: "+ke.ITEM[e].name+" (cómpralo en la tienda)","#bbbbbb",1.4),et.play("deny",.4);return}if(e==="pocion"||e==="clarity"||e==="dust"){Re(["u",e]),et.play("heal",.5);return}if(e==="tp_scroll"){if(S.aim=null,S.wardAim=null,S.tpAim){Sp();return}S.tpAim=!0,et.play("aim",.3),qe("Clic en el mapa o el minimapa: torre aliada a la que vas","#c8e0ff",1.6);return}if(S.aim=null,S.wardAim&&S.wardAim.id===e){wp();return}S.wardAim={id:e},et.play("aim",.3)}},useItem(e){const t=S.game&&S.game.player,n=t&&qd(t)[e];if(!t||e<0||!n){et.play("deny",.4);return}const r=ke.ITEM[n];if(!(r&&r.active)){qe("Este objeto no se usa: es pasivo","#bbbbbb",1.2),et.play("deny",.4);return}if((S.mode==="guest"?(t.itemCdLeft||[])[t.items.indexOf(n)]||0:Math.max(0,((t.itemCd||{})[n]||0)-S.game.t))>.05){qe("En enfriamiento","#bbbbbb",.8),et.play("deny",.4);return}Re(["u",n,S.mouse.wx,S.mouse.wy]),et.play("blink",.5)},moveItem(e,t){const n=S.game&&S.game.player;if(!(!n||e===t)){if(S.mode==="guest"&&n.slots){const r=n.slots[e];n.slots[e]=n.slots[t],n.slots[t]=r}Re(["mv",e,t]),et.play("click",.35),Ml()}},rankUp(e){Af(e)},castKey(e){S.game&&S.game.player&&vp(e)},spell(e){const t=S.game&&S.game.player;if(!t)return;const n=t.spCd&&t.spCd[e]||0;if(n>.05){qe(Et(e==="D"?"Destello":"Fantasma")+" "+Math.ceil(n)+" s","#bbbbbb",.8),et.play("deny",.5);return}const r=Qn();Re(["sp",e,r.x,r.y]),et.play(e==="D"?"blink":"wind",.6)},recall(){const e=S.game&&S.game.player;e&&Re(e.recall?["bc"]:["b"])},inspect(e){Ro=e&&S.game&&S.game.player&&e===S.game.player.id?null:e,Ml()},centerOn(e){const t=e==null?S.game&&S.game.player:ht(e);if(!t)return;const[n,r]=C(t.x,t.y);S.cam.x=n,S.cam.y=r-30,S.camFollow=!1},minimapClick(e,t,n){const{N:r,HW:o,HH:i,OX:a}=$,s=e*(2*r*o)-a,l=t*(2*r*i),u=(s/o+l/i)/2,f=(l/i-s/o)/2;if(!(u<0||f<0||u>r||f>r)){if(n==="left"&&S.tpAim){Re(["u","tp_scroll",u,f]),et.play("click",.4),S.tpAim=!1;return}n==="right"?(Re(["m",u,f]),S.marker={x:u,y:f,t:0}):(S.cam.x=e*2*r*o,S.cam.y=t*2*r*i,S.mouse.mmDrag=!0)}},minimapDrag(e,t){const{N:n,HW:r,HH:o}=$;S.cam.x=Math.max(0,Math.min(1,e))*2*n*r,S.cam.y=Math.max(0,Math.min(1,t))*2*n*o},ping(e,t,n){if(!S.game||!S.game.player)return;let r,o;if(t!==void 0&&n!==void 0){const{N:i,HW:a,HH:s,OX:l}=$,u=t*(2*i*a)-l,f=n*(2*i*s);r=(u/a+f/s)/2,o=(f/s-u/a)/2}else{const i=Qn();r=i.x,o=i.y}Re(["pg",e,Math.round(r*100)/100,Math.round(o*100)/100])},sendChat(e,t){const n=t.trim();n&&S.game&&Re(["t",e,n]),Qd.value=null},bannerDone(e){ra.value=ra.value.filter(t=>t.id!==e)},quitMatch(){Wd()},setVolume(e,t){const n={volMaster:"m",volMusic:"mu",volSfx:"s"};et.setVolume&&et.setVolume(n[e],t),Pn.value={...Pn.value,[e]:t}},setSoundStyle(e){et.setStyle&&et.setStyle(e),Pn.value={...Pn.value,soundStyle:e}},setShadows(e){S.shadowsOn=e;try{localStorage.setItem("moba_shadows",e?"1":"0")}catch{}Pn.value={...Pn.value,shadows:e}},setCamFollow(e){S.camFollow=e},resetZoom(){Tf()},downloadLog(){Eo("user","descarga el registro"),gw()},openOptions(){Ir.value=!0},setCursorLock(e){Vp(e),Ml()},setLang(e){zf.value=e,Wa.clear();try{localStorage.setItem("moba_lang",e)}catch{}mp()},setDifficulty(e){Pn.value={...Pn.value,difficulty:e};try{localStorage.setItem("moba_diff",e)}catch{}},uiSound(e){et.init();const t={click:["click",.45],hover:["aim",.12],buy:["buy",.6],deny:["deny",.5],open:["click",.35],close:["click",.25]},n=t[e]||t.click;et.play(n[0],n[1])},t:e=>Et(e)};function Qw(){const e=new URLSearchParams(location.search);window.__g=()=>({S,draft:nt,st:Wp,act:dr,net:ct,cmd:Re,pickHeroAt:uc,aimHero:fc,w2s:C});const t=e.get("sala");if(t){const o=t.toLowerCase();let i=0;const a=async()=>{await dr.joinOnline(o),Ke.value==="menu"&&++i<5&&setTimeout(a,2500)},s=l=>{jd.value?a():l>0?setTimeout(()=>s(l-1),300):Sn.value={...Sn.value,msg:Et("No se pudo entrar")}};s(200)}const n=e.get("auto");if(!n)return;if(n==="pick"){gl(!1),e.get("view")&&(nt.view=e.get("view")),fi();return}if(n==="menu")return;cr=n,Cp(),e.get("intro")||iu(),e.get("allbots")&&(S.game.player.bot=!0);const r=+(e.get("ff")||0);for(let o=0;o<r*30;o++)S.game.update(1/30),S.game.fx.forEach(i=>i.done=!0);if(e.get("follow")&&(S.camFollow=!0),e.get("shop")&&(na.value=!0),e.get("tab")&&(Va.value=!0),e.get("cam")){const[o,i]=e.get("cam").split(",").map(Number),[a,s]=C(o,i);S.cam.x=a,S.cam.y=s}e.get("mx")&&(S.mouse.x=+e.get("mx"),S.mouse.y=+e.get("my"))}const r_=Object.freeze(Object.defineProperty({__proto__:null,BUILD:lc,startClient:ww},Symbol.toStringTag,{value:"Module"}));export{Fg as $,B1 as A,_u as B,me as C,Io as D,Ue as E,ne as F,q1 as G,Ag as H,sr as I,Cg as J,jg as K,Qg as L,ze as M,Ic as N,yu as O,zr as P,Oc as Q,wl as R,Kl as S,Pt as T,b0 as U,Wy as V,an as W,m1 as X,Bf as Y,N1 as Z,Zg as _,Ss as a,Dt as a0,Ln as a1,Xf as a2,Oy as a3,n_ as a4,Gy as a5,e_ as a6,Ko as a7,aa as a8,Uf as a9,e2 as aa,hy as ab,my as ac,r_ as ad,ko as b,Hi as c,_n as d,Lo as e,Zt as f,ag as g,Yt as h,Yl as i,k1 as j,Gf as k,D1 as l,Df as m,yc as n,kn as o,dy as p,Sl as q,Ry as r,h1 as s,Po as t,zn as u,Wn as v,ro as w,Cc as x,$e as y,pg as z};
