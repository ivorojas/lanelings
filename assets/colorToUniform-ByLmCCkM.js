import{j as rt,u as B,b as W,k as it,w as nt,G as st,l as ot,h as at,i as ut,E as ct}from"./client-eOHtMvMh.js";const lt=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function ht(r){let t="";for(let e=0;e<r;++e)e>0&&(t+=`
else `),e<r-1&&(t+=`if(test == ${e}.0){}`);return t}function ft(r,t){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const i=lt.replace(/%forloop%/gi,ht(r));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))r=r/2|0;else break}}finally{t.deleteShader(e)}return r}let A=null;function dt(){if(A)return A;const r=rt();return A=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=ft(A,r),r.getExtension("WEBGL_lose_context")?.loseContext(),A}class V{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function U(r,t){const e=r.byteLength/8|0,i=new Float64Array(r,0,e);new Float64Array(t,0,e).set(i);const s=r.byteLength-e*8;if(s>0){const u=new Uint8Array(r,e*8,s);new Uint8Array(t,e*8,s).set(u)}}const mt={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var pt=(r=>(r[r.DISABLED=0]="DISABLED",r[r.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",r[r.MASK_ACTIVE=2]="MASK_ACTIVE",r[r.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",r[r.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",r[r.NONE=5]="NONE",r))(pt||{});function G(r,t){return t.alphaMode==="no-premultiply-alpha"&&mt[r]||r}class xt{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class vt{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new xt,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const K=[];let D=0;function k(){return D>0?K[--D]:new vt}function $(r){K[D++]=r}let w=0;const O=class E{constructor(t={}){this.uid=B("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],E.defaultOptions.maxTextures=E.defaultOptions.maxTextures??dt(),t={...E.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:i,indicesInitialSize:n}=t;this.attributeBuffer=new V(i*4),this.indexBuffer=new Uint16Array(n),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)$(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const i=t._batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t._textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=k(),n=i.textures;n.clear();const s=e[this.elementStart];let u=G(s.blendMode,s.texture._source),o=s.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const c=this.attributeBuffer.float32View,h=this.attributeBuffer.uint32View,b=this.indexBuffer;let f=this._batchIndexSize,l=this._batchIndexStart,d="startBatch";const p=this.maxTextures;for(let _=this.elementStart;_<this.elementSize;++_){const a=e[_];e[_]=null;const x=a.texture._source,m=G(a.blendMode,x),g=u!==m||o!==a.topology;if(x._batchTick===w&&!g){a._textureId=x._textureBindLocation,f+=a.indexSize,a.packAsQuad?(this.packQuadAttributes(a,c,h,a._attributeStart,a._textureId),this.packQuadIndex(b,a._indexStart,a._attributeStart/this.vertexSize)):(this.packAttributes(a,c,h,a._attributeStart,a._textureId),this.packIndex(a,b,a._indexStart,a._attributeStart/this.vertexSize)),a._batch=i;continue}x._batchTick=w,(n.count>=p||g)&&(this._finishBatch(i,l,f-l,n,u,o,t,d),d="renderBatch",l=f,u=m,o=a.topology,i=k(),n=i.textures,n.clear(),++w),a._textureId=x._textureBindLocation=n.count,n.ids[x.uid]=n.count,n.textures[n.count++]=x,a._batch=i,f+=a.indexSize,a.packAsQuad?(this.packQuadAttributes(a,c,h,a._attributeStart,a._textureId),this.packQuadIndex(b,a._indexStart,a._attributeStart/this.vertexSize)):(this.packAttributes(a,c,h,a._attributeStart,a._textureId),this.packIndex(a,b,a._indexStart,a._attributeStart/this.vertexSize))}n.count>0&&(this._finishBatch(i,l,f-l,n,u,o,t,d),l=f,++w),this.elementStart=this.elementSize,this._batchIndexStart=l,this._batchIndexSize=f}_finishBatch(t,e,i,n,s,u,o,c){t.gpuBindGroup=null,t.bindGroup=null,t.action=c,t.batcher=this,t.textures=n,t.blendMode=s,t.topology=u,t.start=e,t.size=i,++w,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new V(e);U(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const n=i>65535?new Uint32Array(i):new Uint16Array(i);if(n.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)n[s]=e[s];else U(e.buffer,n.buffer);this.indexBuffer=n}packQuadIndex(t,e,i){t[e]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3}packIndex(t,e,i,n){const s=t.indices,u=t.indexSize,o=t.indexOffset,c=t.attributeOffset;for(let h=0;h<u;h++)e[i++]=n+s[h+o]-c}destroy(){for(let t=0;t<this.batches.length;t++)$(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};O.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let bt=O;var v=(r=>(r[r.MAP_READ=1]="MAP_READ",r[r.MAP_WRITE=2]="MAP_WRITE",r[r.COPY_SRC=4]="COPY_SRC",r[r.COPY_DST=8]="COPY_DST",r[r.INDEX=16]="INDEX",r[r.VERTEX=32]="VERTEX",r[r.UNIFORM=64]="UNIFORM",r[r.STORAGE=128]="STORAGE",r[r.INDIRECT=256]="INDIRECT",r[r.QUERY_RESOLVE=512]="QUERY_RESOLVE",r[r.STATIC=1024]="STATIC",r))(v||{});class T extends W{constructor(t){let{data:e,size:i}=t;const{usage:n,label:s,shrinkToFit:u}=t;super(),this.uid=B("buffer"),this._resourceType="buffer",this._resourceId=B("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i??(i=e?.byteLength);const o=!!e;this.descriptor={size:i,usage:n,mappedAtCreation:o,label:s},this.shrinkToFit=u??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&v.STATIC)}set static(t){t?this.descriptor.usage|=v.STATIC:this.descriptor.usage&=~v.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const n=this._data;if(this._data=t,this._dataInt32=null,!n||n.length!==t.length){!this.shrinkToFit&&n&&t.byteLength<n.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=B("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function q(r,t){if(!(r instanceof T)){let e=t?v.INDEX:v.VERTEX;r instanceof Array&&(t?(r=new Uint32Array(r),e=v.INDEX|v.COPY_DST):(r=new Float32Array(r),e=v.VERTEX|v.COPY_DST)),r=new T({data:r,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return r}function _t(r,t,e){const i=r.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const n=i.buffer.data;let s=1/0,u=1/0,o=-1/0,c=-1/0;const h=n.BYTES_PER_ELEMENT,b=(i.offset||0)/h,f=(i.stride||2*4)/h;for(let l=b;l<n.length;l+=f){const d=n[l],p=n[l+1];d>o&&(o=d),p>c&&(c=p),d<s&&(s=d),p<u&&(u=p)}return e.minX=s,e.minY=u,e.maxX=o,e.maxY=c,e}function gt(r){return(r instanceof T||Array.isArray(r)||r.BYTES_PER_ELEMENT)&&(r={buffer:r}),r.buffer=q(r.buffer,!1),r}class St extends W{constructor(t={}){super(),this.uid=B("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new it,this._boundsDirty=!0;const{attributes:e,indexBuffer:i,topology:n}=t;if(this.buffers=[],this.attributes={},e)for(const s in e)this.addAttribute(s,e[s]);this.instanceCount=t.instanceCount??1,i&&this.addIndex(i),this.topology=n||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const i=gt(e);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=i}addIndex(t){this.indexBuffer=q(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,_t(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const yt=new Float32Array(1),It=new Uint32Array(1);class At extends St{constructor(){const e=new T({data:yt,label:"attribute-batch-buffer",usage:v.VERTEX|v.COPY_DST,shrinkToFit:!1}),i=new T({data:It,label:"index-batch-buffer",usage:v.INDEX|v.COPY_DST,shrinkToFit:!1}),n=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:n,offset:0},aUV:{buffer:e,format:"float32x2",stride:n,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:n,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:n,offset:5*4}},indexBuffer:i})}}function N(r,t,e){if(r)for(const i in r){const n=i.toLocaleLowerCase(),s=t[n];if(s){let u=r[i];i==="header"&&(u=u.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&s.push(`//----${e}----//`),s.push(u)}else nt(`${i} placement hook does not exist in shader`)}}const wt=/\{\{(.*?)\}\}/g;function F(r){const t={};return(r.match(wt)?.map(i=>i.replace(/[{()}]/g,""))??[]).forEach(i=>{t[i]=[]}),t}function Y(r,t){let e;const i=/@in\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function X(r,t,e=!1){const i=[];Y(t,i),r.forEach(o=>{o.header&&Y(o.header,i)});const n=i;e&&n.sort();const s=n.map((o,c)=>`       @location(${c}) ${o},`).join(`
`);let u=t.replace(/@in\s+[^;]+;\s*/g,"");return u=u.replace("{{in}}",`
${s}
`),u}function L(r,t){let e;const i=/@out\s+([^;]+);/g;for(;(e=i.exec(r))!==null;)t.push(e[1])}function Bt(r){const e=/\b(\w+)\s*:/g.exec(r);return e?e[1]:""}function Tt(r){const t=/@.*?\s+/g;return r.replace(t,"")}function Et(r,t){const e=[];L(t,e),r.forEach(c=>{c.header&&L(c.header,e)});let i=0;const n=e.sort().map(c=>c.indexOf("builtin")>-1?c:`@location(${i++}) ${c}`).join(`,
`),s=e.sort().map(c=>`       var ${Tt(c)};`).join(`
`),u=`return VSOutput(
            ${e.sort().map(c=>` ${Bt(c)}`).join(`,
`)});`;let o=t.replace(/@out\s+[^;]+;\s*/g,"");return o=o.replace("{{struct}}",`
${n}
`),o=o.replace("{{start}}",`
${s}
`),o=o.replace("{{return}}",`
${u}
`),o}function j(r,t){let e=r;for(const i in t){const n=t[i];n.join(`
`).length?e=e.replace(`{{${i}}}`,`//-----${i} START-----//
${n.join(`
`)}
//----${i} FINISH----//`):e=e.replace(`{{${i}}}`,"")}return e}const y=Object.create(null),P=new Map;let Pt=0;function Ct({template:r,bits:t}){const e=J(r,t);if(y[e])return y[e];const{vertex:i,fragment:n}=Rt(r,t);return y[e]=Z(i,n,t),y[e]}function zt({template:r,bits:t}){const e=J(r,t);return y[e]||(y[e]=Z(r.vertex,r.fragment,t)),y[e]}function Rt(r,t){const e=t.map(u=>u.vertex).filter(u=>!!u),i=t.map(u=>u.fragment).filter(u=>!!u);let n=X(e,r.vertex,!0);n=Et(e,n);const s=X(i,r.fragment,!0);return{vertex:n,fragment:s}}function J(r,t){return t.map(e=>(P.has(e)||P.set(e,Pt++),P.get(e))).sort((e,i)=>e-i).join("-")+r.vertex+r.fragment}function Z(r,t,e){const i=F(r),n=F(t);return e.forEach(s=>{N(s.vertex,i,s.name),N(s.fragment,n,s.name)}),{vertex:j(r,i),fragment:j(t,n)}}const Dt=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,Mt=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,Vt=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,Ut=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,Gt={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},kt={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function $t({bits:r,name:t}){const e=Ct({template:{fragment:Mt,vertex:Dt},bits:[Gt,...r]});return ot.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function Nt({bits:r,name:t}){return new st({name:t,...zt({template:{vertex:Vt,fragment:Ut},bits:[kt,...r]})})}const Ft={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},Yt={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},C={};function Xt(r){const t=[];if(r===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let i=0;i<r;i++)t.push(`@group(1) @binding(${e++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${i+1}: sampler;`)}return t.join(`
`)}function Lt(r){const t=[];if(r===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<r;e++)e===r-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function jt(r){return C[r]||(C[r]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${Xt(r)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${Lt(r)}
            `}}),C[r]}const z={};function Ht(r){const t=[];for(let e=0;e<r;e++)e>0&&t.push("else"),e<r-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function Qt(r){return z[r]||(z[r]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${r}];

            `,main:`

                ${Ht(r)}
            `}}),z[r]}const Wt={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},Kt={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},H={};function Ot(r){let t=H[r];if(t)return t;const e=new Int32Array(r);for(let i=0;i<r;i++)e[i]=i;return t=H[r]=new at({uTextures:{value:e,type:"i32",size:r}},{isStatic:!0}),t}class qt extends ut{constructor(t){const e=Nt({name:"batch",bits:[Yt,Qt(t),Kt]}),i=$t({name:"batch",bits:[Ft,jt(t),Wt]});super({glProgram:e,gpuProgram:i,resources:{batchSamplers:Ot(t)}})}}let Q=null;const tt=class et extends bt{constructor(){super(...arguments),this.geometry=new At,this.shader=Q||(Q=new qt(this.maxTextures)),this.name=et.extension.name,this.vertexSize=6}packAttributes(t,e,i,n,s){const u=s<<16|t.roundPixels&65535,o=t.transform,c=o.a,h=o.b,b=o.c,f=o.d,l=o.tx,d=o.ty,{positions:p,uvs:_}=t,a=t.color,S=t.attributeOffset,x=S+t.attributeSize;for(let m=S;m<x;m++){const g=m*2,I=p[g],M=p[g+1];e[n++]=c*I+b*M+l,e[n++]=f*M+h*I+d,e[n++]=_[g],e[n++]=_[g+1],i[n++]=a,i[n++]=u}}packQuadAttributes(t,e,i,n,s){const u=t.texture,o=t.transform,c=o.a,h=o.b,b=o.c,f=o.d,l=o.tx,d=o.ty,p=t.bounds,_=p.maxX,a=p.minX,S=p.maxY,x=p.minY,m=u.uvs,g=t.color,I=s<<16|t.roundPixels&65535;e[n+0]=c*a+b*x+l,e[n+1]=f*x+h*a+d,e[n+2]=m.x0,e[n+3]=m.y0,i[n+4]=g,i[n+5]=I,e[n+6]=c*_+b*x+l,e[n+7]=f*x+h*_+d,e[n+8]=m.x1,e[n+9]=m.y1,i[n+10]=g,i[n+11]=I,e[n+12]=c*_+b*S+l,e[n+13]=f*S+h*_+d,e[n+14]=m.x2,e[n+15]=m.y2,i[n+16]=g,i[n+17]=I,e[n+18]=c*a+b*S+l,e[n+19]=f*S+h*a+d,e[n+20]=m.x3,e[n+21]=m.y3,i[n+22]=g,i[n+23]=I}};tt.extension={type:[ct.Batcher],name:"default"};let Zt=tt;const R={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},te={...R,vertex:{...R.vertex,header:R.vertex.header.replace("group(1)","group(2)")}},ee={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class re{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}function ie(r,t,e){const i=(r>>24&255)/255;t[e++]=(r&255)/255*i,t[e++]=(r>>8&255)/255*i,t[e++]=(r>>16&255)/255*i,t[e++]=i}export{v as B,Zt as D,St as G,pt as S,V,T as a,Ft as b,$t as c,jt as d,R as e,U as f,dt as g,re as h,ie as i,Nt as j,Yt as k,te as l,ee as m,Kt as n,Qt as o,Ot as p,G as q,Wt as r};
