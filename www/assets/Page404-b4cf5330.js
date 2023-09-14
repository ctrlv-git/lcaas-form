import{d as _,aF as w,aP as N,u as I,aQ as M,o as z,aG as C,aI as D,aL as X,aM as Y}from"./vendor-a3685d3b.js";import{_ as G}from"./index-708a4601.js";function S(){const l=function(r,e,i){const t=Math.floor(6*r),n=6*r-t,a=i*(1-e),o=i*(1-n*e),s=i*(1-(1-n)*e);let u,c,m;switch(t%6){case 0:u=i,c=s,m=a;break;case 1:u=o,c=i,m=a;break;case 2:u=a,c=i,m=s;break;case 3:u=a,c=o,m=i;break;case 4:u=s,c=a,m=i;break;case 5:u=i,c=a,m=o}return{r:u,g:c,b:m}}(Math.random(),1,1);return l.r*=.15,l.g*=.15,l.b*=.15,l}function H(l){if(l.length===0)return 0;let r=0;for(let e=0;e<l.length;e++)r=(r<<5)-r+l.charCodeAt(e),r|=0;return r}function R(l,r){let e=l.drawingBufferWidth/l.drawingBufferHeight;e<1&&(e=1/e);const i=Math.round(r),t=Math.round(r*e);return l.drawingBufferWidth>l.drawingBufferHeight?{width:t,height:i}:{width:i,height:t}}function T(l,r,e,i){if(!function(t,n,a,o){const s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,n,4,4,0,a,o,null);const u=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0),t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE}(l,r,e,i))switch(r){case l.R16F:return T(l,l.RG16F,l.RG,i);case l.RG16F:return T(l,l.RGBA16F,l.RGBA,i);default:return null}return{internalFormat:r,format:e}}function x(l){const r=window.devicePixelRatio||1;return Math.floor(l*r)}function f(l,r,e,i){e=function(n,a){if(a==null)return n;let o="";return a.forEach(s=>{o+="#define "+s+`
`}),o+n}(e,i);const t=l.createShader(r);return l.shaderSource(t,e),l.compileShader(t),l.getShaderParameter(t,l.COMPILE_STATUS)||console.trace(l.getShaderInfoLog(t)),t}function b(l,r,e){let i=l.createProgram();return l.attachShader(i,r),l.attachShader(i,e),l.linkProgram(i),l.getProgramParameter(i,l.LINK_STATUS)||console.trace(l.getProgramInfoLog(i)),i}function P(l,r){let e=[],i=l.getProgramParameter(r,l.ACTIVE_UNIFORMS);for(let t=0;t<i;t++){let n=l.getActiveUniform(r,t).name;e[n]=l.getUniformLocation(r,n)}return e}class V{constructor(r,e,i){this.vertexShader=e,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[],this.gl=r}setKeywords(r){const e=this.gl;let i=0;for(let n=0;n<r.length;n++)i+=H(r[n]);let t=this.programs[i];if(t==null){let n=f(e,e.FRAGMENT_SHADER,this.fragmentShaderSource,r);t=b(e,this.vertexShader,n),this.programs[i]=t}t!==this.activeProgram&&(this.uniforms=P(e,t),this.activeProgram=t)}bind(){this.gl.useProgram(this.activeProgram)}}class g{constructor(r,e,i){this.uniforms={},this.program=b(r,e,i),this.uniforms=P(r,this.program),this.gl=r}bind(){this.gl.useProgram(this.program)}}class k{constructor({canvas:r,gl:e,ext:i,config:t}){this.config=t,this.canvas=r,this.gl=e,this.ext=i,this.splatStack=[],this.pointers=[{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:[30,0,300]}],this.blit=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(n,a=!1)=>{n==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,n.width,n.height),e.bindFramebuffer(e.FRAMEBUFFER,n.fbo)),a&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}),this.dye=null,this.velocity=null,this.divergence=null,this.curl=null,this.pressure=null,this.bloom=null,this.bloomFramebuffers=[],this.sunrays=null,this.sunraysTemp=null,this.shaders={},this.ditheringTexture=function(n){let a=n.createTexture();return n.bindTexture(n.TEXTURE_2D,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texImage2D(n.TEXTURE_2D,0,n.RGB,1,1,0,n.RGB,n.UNSIGNED_BYTE,new Uint8Array([255,255,255])),{texture:a,width:1,height:1,attach:o=>(n.activeTexture(n.TEXTURE0+o),n.bindTexture(n.TEXTURE_2D,a),o)}}(e),this.initShaders(),this.updateKeywords(),this.initFramebuffers(),this.lastUpdateTime=Date.now(),this.colorUpdateTimer=0,this.update()}initShaders(){const r=this.shaders,e=this.gl,i=this.ext,t=f(e,e.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),n=f(e,e.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),a=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),o=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),s=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),u=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),c=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),m=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),d=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),v=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),h=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),p=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),E=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),A=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,i.supportLinearFiltering?null:["MANUAL_FILTERING"]),F=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),U=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),O=f(e,e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),L=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),B=f(e,e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`);r.blurProgram=new g(e,n,a),r.copyProgram=new g(e,t,o),r.clearProgram=new g(e,t,s),r.colorProgram=new g(e,t,u),r.checkerboardProgram=new g(e,t,c),r.bloomPrefilterProgram=new g(e,t,m),r.bloomBlurProgram=new g(e,t,d),r.bloomFinalProgram=new g(e,t,v),r.sunraysMaskProgram=new g(e,t,h),r.sunraysProgram=new g(e,t,p),r.splatProgram=new g(e,t,E),r.advectionProgram=new g(e,t,A),r.divergenceProgram=new g(e,t,F),r.curlProgram=new g(e,t,U),r.vorticityProgram=new g(e,t,O),r.pressureProgram=new g(e,t,L),r.gradienSubtractProgram=new g(e,t,B),r.displayMaterial=new V(e,t,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`)}updateKeywords(){const r=this.config;let e=[];r.SHADING&&e.push("SHADING"),r.BLOOM&&e.push("BLOOM"),r.SUNRAYS&&e.push("SUNRAYS"),this.shaders.displayMaterial.setKeywords(e)}initFramebuffers(){const r=this.gl,e=this.config,i=this.ext;let t=R(r,e.SIM_RESOLUTION),n=R(r,e.DYE_RESOLUTION);const a=i.halfFloatTexType,o=i.formatRGBA,s=i.formatRG,u=i.formatR,c=i.supportLinearFiltering?r.LINEAR:r.NEAREST;r.disable(r.BLEND),this.dye==null?this.dye=this.createDoubleFBO(n.width,n.height,o.internalFormat,o.format,a,c):this.dye=this.resizeDoubleFBO(this.dye,n.width,n.height,o.internalFormat,o.format,a,c),this.velocity==null?this.velocity=this.createDoubleFBO(t.width,t.height,s.internalFormat,s.format,a,c):this.velocity=this.resizeDoubleFBO(this.velocity,t.width,t.height,s.internalFormat,s.format,a,c),this.divergence=this.createFBO(t.width,t.height,u.internalFormat,u.format,a,r.NEAREST),this.curl=this.createFBO(t.width,t.height,u.internalFormat,u.format,a,r.NEAREST),this.pressure=this.createDoubleFBO(t.width,t.height,u.internalFormat,u.format,a,r.NEAREST),this.initBloomFramebuffers(),this.initSunraysFramebuffers()}initBloomFramebuffers(){const r=this.config,e=this.gl,i=this.ext;let t=R(e,r.BLOOM_RESOLUTION);const n=i.halfFloatTexType,a=i.formatRGBA,o=i.supportLinearFiltering?e.LINEAR:e.NEAREST;this.bloom=this.createFBO(t.width,t.height,a.internalFormat,a.format,n,o),this.bloomFramebuffers.length=0;for(let s=0;s<r.BLOOM_ITERATIONS;s++){let u=t.width>>s+1,c=t.height>>s+1;if(u<2||c<2)break;let m=this.createFBO(u,c,a.internalFormat,a.format,n,o);this.bloomFramebuffers.push(m)}}initSunraysFramebuffers(){const r=this.config,e=this.gl,i=this.ext;let t=R(e,r.SUNRAYS_RESOLUTION);const n=i.halfFloatTexType,a=i.formatR,o=i.supportLinearFiltering?e.LINEAR:e.NEAREST;this.sunrays=this.createFBO(t.width,t.height,a.internalFormat,a.format,n,o),this.sunraysTemp=this.createFBO(t.width,t.height,a.internalFormat,a.format,n,o)}createFBO(r,e,i,t,n,a){const o=this.gl;o.activeTexture(o.TEXTURE0);let s=o.createTexture();o.bindTexture(o.TEXTURE_2D,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,i,r,e,0,t,n,null);let u=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,u),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,s,0),o.viewport(0,0,r,e),o.clear(o.COLOR_BUFFER_BIT),{texture:s,fbo:u,width:r,height:e,texelSizeX:1/r,texelSizeY:1/e,attach:c=>(o.activeTexture(o.TEXTURE0+c),o.bindTexture(o.TEXTURE_2D,s),c)}}createDoubleFBO(r,e,i,t,n,a){let o=this.createFBO(r,e,i,t,n,a),s=this.createFBO(r,e,i,t,n,a);return{width:r,height:e,texelSizeX:o.texelSizeX,texelSizeY:o.texelSizeY,get read(){return o},set read(u){o=u},get write(){return s},set write(u){s=u},swap(){let u=o;o=s,s=u}}}resizeFBO(r,e,i,t,n,a,o){const s=this.gl,u=this.shaders.copyProgram;let c=this.createFBO(e,i,t,n,a,o);return u.bind(),s.uniform1i(u.uniforms.uTexture,r.attach(0)),this.blit(c),c}resizeDoubleFBO(r,e,i,t,n,a,o){return r.width===e&&r.height===i||(r.read=this.resizeFBO(r.read,e,i,t,n,a,o),r.write=this.createFBO(e,i,t,n,a,o),r.width=e,r.height=i,r.texelSizeX=1/e,r.texelSizeY=1/i),r}update(){const{config:r,lastUpdateTime:e,canvas:i}=this,t=function(n){const a=Date.now();let o=(a-n)/1e3;return o=Math.min(o,.016666),n=a,o}(e);i.resize(),i.isResize?this.initFramebuffers():(this.updateColors(t),this.applyInputs(),r.PAUSED||this.step(t),this.render(null),requestAnimationFrame(()=>{this.update()}))}updateColors(r){const{config:e,pointers:i}=this;e.COLORFUL&&(this.colorUpdateTimer+=r*e.COLOR_UPDATE_SPEED,this.colorUpdateTimer>=1&&(this.colorUpdateTimer=function(t,n,a){const o=a-n;return o===0?n:(t-n)%o+n}(this.colorUpdateTimer,0,1),i.forEach(t=>{t.color=S()})))}applyInputs(){const{splatStack:r,pointers:e,splatPointer:i,multipleSplats:t}=this;r.length>0&&t.call(this,r.pop()),e.forEach(n=>{n.moved&&(n.moved=!1,i.call(this,n))})}step(r){const{gl:e,ext:i,config:t,shaders:n,curl:a,dye:o,velocity:s,divergence:u,pressure:c,blit:m}=this;e.disable(e.BLEND),n.curlProgram.bind(),e.uniform2f(n.curlProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(n.curlProgram.uniforms.uVelocity,s.read.attach(0)),m(a),n.vorticityProgram.bind(),e.uniform2f(n.vorticityProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(n.vorticityProgram.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(n.vorticityProgram.uniforms.uCurl,a.attach(1)),e.uniform1f(n.vorticityProgram.uniforms.curl,t.CURL),e.uniform1f(n.vorticityProgram.uniforms.dt,r),m(s.write),s.swap(),n.divergenceProgram.bind(),e.uniform2f(n.divergenceProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(n.divergenceProgram.uniforms.uVelocity,s.read.attach(0)),m(u),n.clearProgram.bind(),e.uniform1i(n.clearProgram.uniforms.uTexture,c.read.attach(0)),e.uniform1f(n.clearProgram.uniforms.value,t.PRESSURE),m(c.write),c.swap(),n.pressureProgram.bind(),e.uniform2f(n.pressureProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(n.pressureProgram.uniforms.uDivergence,u.attach(0));for(let v=0;v<t.PRESSURE_ITERATIONS;v++)e.uniform1i(n.pressureProgram.uniforms.uPressure,c.read.attach(1)),m(c.write),c.swap();n.gradienSubtractProgram.bind(),e.uniform2f(n.gradienSubtractProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(n.gradienSubtractProgram.uniforms.uPressure,c.read.attach(0)),e.uniform1i(n.gradienSubtractProgram.uniforms.uVelocity,s.read.attach(1)),m(s.write),s.swap(),n.advectionProgram.bind(),e.uniform2f(n.advectionProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),i.supportLinearFiltering||e.uniform2f(n.advectionProgram.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY);let d=s.read.attach(0);e.uniform1i(n.advectionProgram.uniforms.uVelocity,d),e.uniform1i(n.advectionProgram.uniforms.uSource,d),e.uniform1f(n.advectionProgram.uniforms.dt,r),e.uniform1f(n.advectionProgram.uniforms.dissipation,t.VELOCITY_DISSIPATION),m(s.write),s.swap(),i.supportLinearFiltering||e.uniform2f(n.advectionProgram.uniforms.dyeTexelSize,o.texelSizeX,o.texelSizeY),e.uniform1i(n.advectionProgram.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(n.advectionProgram.uniforms.uSource,o.read.attach(1)),e.uniform1f(n.advectionProgram.uniforms.dissipation,t.DENSITY_DISSIPATION),m(o.write),o.swap()}render(r){const{gl:e,config:i,bloom:t,dye:n,sunrays:a,sunraysTemp:o}=this;var s;i.BLOOM&&this.applyBloom(n.read,t),i.SUNRAYS&&(this.applySunrays(n.read,n.write,a),this.applyBlur(a,o,1)),r!=null&&i.TRANSPARENT?e.disable(e.BLEND):(e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND)),i.TRANSPARENT||this.drawColor(r,{r:(s=i.BACK_COLOR).r/255,g:s.g/255,b:s.b/255}),r==null&&i.TRANSPARENT&&this.drawCheckerboard(r),this.drawDisplay(r)}applyBloom(r,e){const{gl:i,config:t,bloomFramebuffers:n,shaders:a,blit:o}=this;if(n.length<2)return;let s=e;i.disable(i.BLEND),a.bloomPrefilterProgram.bind();let u=t.BLOOM_THRESHOLD*t.BLOOM_SOFT_KNEE+1e-4,c=t.BLOOM_THRESHOLD-u,m=2*u,d=.25/u;i.uniform3f(a.bloomPrefilterProgram.uniforms.curve,c,m,d),i.uniform1f(a.bloomPrefilterProgram.uniforms.threshold,t.BLOOM_THRESHOLD),i.uniform1i(a.bloomPrefilterProgram.uniforms.uTexture,r.attach(0)),o(s),a.bloomBlurProgram.bind();for(let v=0;v<n.length;v++){let h=n[v];i.uniform2f(a.bloomBlurProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),i.uniform1i(a.bloomBlurProgram.uniforms.uTexture,s.attach(0)),o(h),s=h}i.blendFunc(i.ONE,i.ONE),i.enable(i.BLEND);for(let v=n.length-2;v>=0;v--){let h=n[v];i.uniform2f(a.bloomBlurProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),i.uniform1i(a.bloomBlurProgram.uniforms.uTexture,s.attach(0)),i.viewport(0,0,h.width,h.height),o(h),s=h}i.disable(i.BLEND),a.bloomFinalProgram.bind(),i.uniform2f(a.bloomFinalProgram.uniforms.texelSize,s.texelSizeX,s.texelSizeY),i.uniform1i(a.bloomFinalProgram.uniforms.uTexture,s.attach(0)),i.uniform1f(a.bloomFinalProgram.uniforms.intensity,t.BLOOM_INTENSITY),o(e)}applySunrays(r,e,i){const{gl:t,config:n,shaders:a,blit:o}=this;t.disable(t.BLEND),a.sunraysMaskProgram.bind(),t.uniform1i(a.sunraysMaskProgram.uniforms.uTexture,r.attach(0)),o(e),a.sunraysProgram.bind(),t.uniform1f(a.sunraysProgram.uniforms.weight,n.SUNRAYS_WEIGHT),t.uniform1i(a.sunraysProgram.uniforms.uTexture,e.attach(0)),o(i)}applyBlur(r,e,i){const{gl:t,shaders:n,blit:a}=this;n.blurProgram.bind();for(let o=0;o<i;o++)t.uniform2f(n.blurProgram.uniforms.texelSize,r.texelSizeX,0),t.uniform1i(n.blurProgram.uniforms.uTexture,r.attach(0)),a(e),t.uniform2f(n.blurProgram.uniforms.texelSize,0,r.texelSizeY),t.uniform1i(n.blurProgram.uniforms.uTexture,e.attach(0)),a(r)}drawColor(r,e){const{gl:i,shaders:t,blit:n}=this;t.colorProgram.bind(),i.uniform4f(t.colorProgram.uniforms.color,e.r,e.g,e.b,1),n(r)}drawCheckerboard(r){const{gl:e,shaders:i,canvas:t,blit:n}=this;i.checkerboardProgram.bind(),e.uniform1f(i.checkerboardProgram.uniforms.aspectRatio,t.width/t.height),n(r)}drawDisplay(r){const{gl:e,dye:i,bloom:t,sunrays:n,ditheringTexture:a,shaders:o,config:s,blit:u}=this;let c=r==null?e.drawingBufferWidth:r.width,m=r==null?e.drawingBufferHeight:r.height;if(o.displayMaterial.bind(),s.SHADING&&e.uniform2f(o.displayMaterial.uniforms.texelSize,1/c,1/m),e.uniform1i(o.displayMaterial.uniforms.uTexture,i.read.attach(0)),s.BLOOM){e.uniform1i(o.displayMaterial.uniforms.uBloom,t.attach(1)),e.uniform1i(o.displayMaterial.uniforms.uDithering,a.attach(2));let d=function(v,h,p){return{x:h/v.width,y:p/v.height}}(a,c,m);e.uniform2f(o.displayMaterial.uniforms.ditherScale,d.x,d.y)}s.SUNRAYS&&e.uniform1i(o.displayMaterial.uniforms.uSunrays,n.attach(3)),u(r)}multipleSplats(r){const e=this.splat;for(let i=0;i<r;i++){const t=S();t.r*=10,t.g*=10,t.b*=10;const n=Math.random(),a=Math.random(),o=1e3*(Math.random()-.5),s=1e3*(Math.random()-.5);e.call(this,n,a,o,s,t)}}splat(r,e,i,t,n){const{gl:a,config:o,velocity:s,canvas:u,dye:c,shaders:m,blit:d}=this;m.splatProgram.bind(),a.uniform1i(m.splatProgram.uniforms.uTarget,s.read.attach(0)),a.uniform1f(m.splatProgram.uniforms.aspectRatio,u.width/u.height),a.uniform2f(m.splatProgram.uniforms.point,r,e),a.uniform3f(m.splatProgram.uniforms.color,i,t,0),a.uniform1f(m.splatProgram.uniforms.radius,function(v,h){const p=h.width/h.height;return p>1&&(v*=p),v}(o.SPLAT_RADIUS/100,u)),d(s.write),s.swap(),a.uniform1i(m.splatProgram.uniforms.uTarget,c.read.attach(0)),a.uniform3f(m.splatProgram.uniforms.color,n.r,n.g,n.b),d(c.write),c.swap()}splatPointer(r){const{config:e}=this;let i=r.deltaX*e.SPLAT_FORCE,t=r.deltaY*e.SPLAT_FORCE;this.splat(r.texcoordX,r.texcoordY,i,t,r.color)}updatePointerMoveData({pointer:r,posX:e,posY:i}){const t=this.canvas;r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.texcoordX=e/t.width,r.texcoordY=1-i/t.height,r.deltaX=function(n,a){const o=n.width/n.height;return o<1&&(a*=o),a}(t,r.texcoordX-r.prevTexcoordX),r.deltaY=function(n,a){const o=n.width/n.height;return o>1&&(a/=o),a}(t,r.texcoordY-r.prevTexcoordY),r.moved=Math.abs(r.deltaX)>0||Math.abs(r.deltaY)>0}updatePointerDownData({pointer:r,id:e,posX:i,posY:t}){const n=this.canvas;r.id=e,r.down=!0,r.moved=!1,r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.texcoordX=i/n.width,r.texcoordY=1-t/n.height,r.deltaX=0,r.deltaY=0,r.color=S()}}const y={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:5,VELOCITY_DISSIPATION:5,PRESSURE:.2,PRESSURE_ITERATIONS:25,CURL:5,SPLAT_RADIUS:.1,SPLAT_FORCE:12e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:.7,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.3,BLOOM_THRESHOLD:.7,BLOOM_SOFT_KNEE:.3,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:.8};class W{constructor(r,e){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"config",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),r.resize=this.resizeCanvas.bind(this),this.canvas=r,/Mobi|Android/i.test(navigator.userAgent)&&(y.DYE_RESOLUTION=512),this.config=Object.assign(Object.assign({},y),e),this.init()}init(){const{canvas:r,config:e}=this;r.resize();const{gl:i,ext:t}=function(o){const s={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let u=o.getContext("webgl2",s);const c=!!u;let m,d;c||(u=o.getContext("webgl",s)),c?(u.getExtension("EXT_color_buffer_float"),d=u.getExtension("OES_texture_float_linear"),u.RGBA16F):(m=u.getExtension("OES_texture_half_float"),d=u.getExtension("OES_texture_half_float_linear")),u.clearColor(0,0,0,1);const v=c?u.HALF_FLOAT:m.HALF_FLOAT_OES;let h,p,E;return c?(h=T(u,u.RGBA16F,u.RGBA,v),p=T(u,u.RG16F,u.RG,v),E=T(u,u.R16F,u.RED,v)):(h=T(u,u.RGBA,u.RGBA,v),p=T(u,u.RGBA,u.RGBA,v),E=T(u,u.RGBA,u.RGBA,v)),{gl:u,ext:{formatRGBA:h,formatRG:p,formatR:E,halfFloatTexType:v,supportLinearFiltering:d}}}(r);t.supportLinearFiltering||(e.DYE_RESOLUTION=512,e.SHADING=!1,e.BLOOM=!1,e.SUNRAYS=!1);const n=new k({canvas:r,gl:i,ext:t,config:e}),a=n.pointers;r.addEventListener("mouseover",o=>{const s=x(o.offsetX),u=x(o.offsetY);let c=a.find(m=>m.id===-1);c==null&&(c={id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:[30,0,300]}),n.updatePointerDownData({pointer:c,id:-1,posX:s,posY:u})}),r.addEventListener("mousemove",o=>{const s=a[0];if(!s.down)return;const u=x(o.offsetX),c=x(o.offsetY);n.updatePointerMoveData({pointer:s,posX:u,posY:c})}),window.addEventListener("keydown",o=>{const s=n.config,u=n.splatStack;o.code==="KeyP"&&(s.PAUSED=!s.PAUSED),o.code==="Space"&&u.push(parseInt(20*Math.random()+"")+5)}),window.addEventListener("resize",()=>{this.resizeCanvas()})}resizeCanvas(){const r=this.canvas,e=x(r.clientWidth),i=x(r.clientHeight);r.width!==e||r.height!==i?(r.width=e,r.height=i,r.isResize=!0):r.isResize=!1}}const K=l=>(X("data-v-e46340d0"),l=l(),Y(),l),q={class:"page-404"},j=K(()=>D("span",{class:"text-box-404","data-text":"404"},"404",-1)),Q=[j],J=_({name:"Page404",inheritAttrs:!0}),Z=_({...J,setup(l){const r=w();N(()=>{new W(I(r))});const e=M(),i=()=>{e.replace({path:"/"})};return(t,n)=>(z(),C("section",q,[D("div",{class:"text-box",onDblclick:i},Q,32),D("canvas",{ref_key:"elCanvas",ref:r,class:"canvas-404"},null,512)]))}});const re=G(Z,[["__scopeId","data-v-e46340d0"]]);export{re as default};
