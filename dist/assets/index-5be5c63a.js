(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="152",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kl=0,ra=1,Wl=2,$o=1,Xl=2,Sn=3,bn=0,kt=1,dn=2,Bn=0,Ri=1,sa=2,aa=3,oa=4,ql=5,wi=100,Yl=101,jl=102,la=103,ca=104,Kl=200,Zl=201,$l=202,Jl=203,Jo=204,Qo=205,Ql=206,ec=207,tc=208,nc=209,ic=210,rc=0,sc=1,ac=2,As=3,oc=4,lc=5,cc=6,hc=7,Hs=0,uc=1,dc=2,wn=0,fc=1,pc=2,mc=3,vc=4,gc=5,el=300,Ni=301,Di=302,Rs=303,Cs=304,kr=306,Ui=1e3,Jt=1001,Gr=1002,At=1003,Ls=1004,Vr=1005,Gt=1006,tl=1007,Jn=1008,Qn=1009,_c=1010,xc=1011,nl=1012,yc=1013,qn=1014,Fn=1015,sr=1016,Mc=1017,Ec=1018,Ci=1020,Sc=1021,Qt=1023,Tc=1024,wc=1025,Kn=1026,Fi=1027,bc=1028,Ac=1029,Rc=1030,Cc=1031,Lc=1033,Yr=33776,jr=33777,Kr=33778,Zr=33779,ha=35840,ua=35841,da=35842,fa=35843,Pc=36196,pa=37492,ma=37496,va=37808,ga=37809,_a=37810,xa=37811,ya=37812,Ma=37813,Ea=37814,Sa=37815,Ta=37816,wa=37817,ba=37818,Aa=37819,Ra=37820,Ca=37821,$r=36492,Ic=36283,La=36284,Pa=36285,Ia=36286,ar=2300,Bi=2301,Jr=2302,Na=2400,Da=2401,Ua=2402,Nc=2500,Dc=0,il=1,Ps=2,rl=3e3,Zn=3001,Uc=3200,Fc=3201,Gs=0,Bc=1,$n="",$e="srgb",fn="srgb-linear",sl="display-p3",Qr=7680,Oc=519,Is=35044,Fa="300 es",Ns=1035;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let i=0,s=r.length;i<s;i++)r[i].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ba=1234567;const nr=Math.PI/180,Oi=180/Math.PI;function an(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[a&255]+Dt[a>>8&255]+Dt[a>>16&255]+Dt[a>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Pt(a,e,t){return Math.max(e,Math.min(t,a))}function ks(a,e){return(a%e+e)%e}function zc(a,e,t,n,r){return n+(a-e)*(r-n)/(t-e)}function Vc(a,e,t){return a!==e?(t-a)/(e-a):0}function ir(a,e,t){return(1-t)*a+t*e}function Hc(a,e,t,n){return ir(a,e,1-Math.exp(-t*n))}function Gc(a,e=1){return e-Math.abs(ks(a,e*2)-e)}function kc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Wc(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Xc(a,e){return a+Math.floor(Math.random()*(e-a+1))}function qc(a,e){return a+Math.random()*(e-a)}function Yc(a){return a*(.5-Math.random())}function jc(a){a!==void 0&&(Ba=a);let e=Ba+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kc(a){return a*nr}function Zc(a){return a*Oi}function Ds(a){return(a&a-1)===0&&a!==0}function al(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ol(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function $c(a,e,t,n,r){const i=Math.cos,s=Math.sin,o=i(t/2),l=s(t/2),h=i((e+n)/2),u=s((e+n)/2),c=i((e-n)/2),d=s((e-n)/2),f=i((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":a.set(o*u,l*c,l*d,o*h);break;case"YZY":a.set(l*d,o*u,l*c,o*h);break;case"ZXZ":a.set(l*c,l*d,o*u,o*h);break;case"XZX":a.set(o*u,l*v,l*f,o*h);break;case"YXY":a.set(l*f,o*u,l*v,o*h);break;case"ZYZ":a.set(l*v,l*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function mt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Jc={DEG2RAD:nr,RAD2DEG:Oi,generateUUID:an,clamp:Pt,euclideanModulo:ks,mapLinear:zc,inverseLerp:Vc,lerp:ir,damp:Hc,pingpong:Gc,smoothstep:kc,smootherstep:Wc,randInt:Xc,randFloat:qc,randFloatSpread:Yc,seededRandom:jc,degToRad:Kc,radToDeg:Zc,isPowerOfTwo:Ds,ceilPowerOfTwo:al,floorPowerOfTwo:ol,setQuaternionFromProperEuler:$c,normalize:mt,denormalize:Tn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*n-s*r+e.x,this.y=i*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,i,s,o,l,h){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=r[0],m=r[3],p=r[6],_=r[1],y=r[4],x=r[7],M=r[2],C=r[5],B=r[8];return i[0]=s*g+o*_+l*M,i[3]=s*m+o*y+l*C,i[6]=s*p+o*x+l*B,i[1]=h*g+u*_+c*M,i[4]=h*m+u*y+c*C,i[7]=h*p+u*x+c*B,i[2]=d*g+f*_+v*M,i[5]=d*m+f*y+v*C,i[8]=d*p+f*x+v*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*s*u-t*o*h-n*i*u+n*o*l+r*i*h-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=u*s-o*h,d=o*l-u*i,f=h*i-s*l,v=t*c+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=c*g,e[1]=(r*h-u*n)*g,e[2]=(o*n-r*s)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*i-o*t)*g,e[6]=f*g,e[7]=(n*l-h*t)*g,e[8]=(s*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,s,o){const l=Math.cos(i),h=Math.sin(i);return this.set(n*l,n*h,-n*(l*s+h*o)+s+e,-r*h,r*l,-r*(-h*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new lt;function ll(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function or(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const Oa={};function rr(a){a in Oa||(Oa[a]=!0,console.warn(a))}function Li(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ts(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qc=new lt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eh=new lt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function th(a){return a.convertSRGBToLinear().applyMatrix3(eh)}function nh(a){return a.applyMatrix3(Qc).convertLinearToSRGB()}const ih={[fn]:a=>a,[$e]:a=>a.convertSRGBToLinear(),[sl]:th},rh={[fn]:a=>a,[$e]:a=>a.convertLinearToSRGB(),[sl]:nh},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return fn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=ih[e],r=rh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let oi;class cl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=or("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=Li(i[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hl{constructor(e=null){this.isSource=!0,this.uuid=an(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?i.push(ns(r[s].image)):i.push(ns(r[s]))}else i=ns(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function ns(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?cl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;class It extends ii{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Jt,r=Jt,i=Gt,s=Jn,o=Qt,l=Qn,h=It.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=an(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zn?$e:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ui:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ui:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?Zn:rl}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?$e:$n}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=el;It.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*i,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*i,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*i,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const l=e.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,x=(f+1)/2,M=(p+1)/2,C=(u+d)/4,B=(c+g)/4,F=(v+m)/4;return y>x&&y>M?y<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(y),r=C/n,i=B/n):x>M?x<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(x),n=C/r,i=F/r):M<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(M),n=B/i,r=F/i),this.set(n,r,i,t),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends ii{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?$e:$n),this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ul extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ah extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,s,o){let l=n[r+0],h=n[r+1],u=n[r+2],c=n[r+3];const d=i[s+0],f=i[s+1],v=i[s+2],g=i[s+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let m=1-o;const p=l*d+h*f+u*v+c*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),C=Math.atan2(M,p*_);m=Math.sin(m*C)/M,o=Math.sin(o*C)/M}const x=o*_;if(l=l*m+d*x,h=h*m+f*x,u=u*m+v*x,c=c*m+g*x,m===1-o){const M=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=M,h*=M,u*=M,c*=M}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,r,i,s){const o=n[r],l=n[r+1],h=n[r+2],u=n[r+3],c=i[s],d=i[s+1],f=i[s+2],v=i[s+3];return e[t]=o*v+u*c+l*f-h*d,e[t+1]=l*v+u*d+h*c-o*f,e[t+2]=h*v+u*f+o*d-l*c,e[t+3]=u*v-o*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(r/2),c=o(i/2),d=l(n/2),f=l(r/2),v=l(i/2);switch(s){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],s=t[1],o=t[5],l=t[9],h=t[2],u=t[6],c=t[10],d=n+o+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(i-h)*f,this._z=(s-r)*f}else if(n>o&&n>c){const f=2*Math.sqrt(1+n-o-c);this._w=(u-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(i+h)/f}else if(o>c){const f=2*Math.sqrt(1+o-n-c);this._w=(i-h)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-o);this._w=(s-r)/f,this._x=(i+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,s=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+s*o+r*h-i*l,this._y=r*u+s*l+i*o-n*h,this._z=i*u+s*h+n*l-r*o,this._w=s*u-n*o-r*l-i*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,o),c=Math.sin((1-t)*u)/h,d=Math.sin(t*u)/h;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=r*c+this._y*d,this._z=i*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,s=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*s,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*s,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,s=e.y,o=e.z,l=e.w,h=l*t+s*r-o*n,u=l*n+o*t-i*r,c=l*r+i*n-s*t,d=-i*t-s*n-o*r;return this.x=h*l+d*-i+u*-o-c*-s,this.y=u*l+d*-s+c*-i-h*-o,this.z=c*l+d*-o+h*-s-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new ee,za=new pn;class An{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),li.copy(e.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let s=0,o=i.count;s<o;s++)gn.fromBufferAttribute(i,s).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else r.boundingBox===null&&r.computeBoundingBox(),li.copy(r.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),pr.subVectors(this.max,qi),ci.subVectors(e.a,qi),hi.subVectors(e.b,qi),ui.subVectors(e.c,qi),Cn.subVectors(hi,ci),Ln.subVectors(ui,hi),Vn.subVectors(ci,ui);let t=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Vn.y,Vn.x,0];return!rs(t,ci,hi,ui,pr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ci,hi,ui,pr))?!1:(mr.crossVectors(Cn,Ln),t=[mr.x,mr.y,mr.z],rs(t,ci,hi,ui,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],gn=new ee,li=new An,ci=new ee,hi=new ee,ui=new ee,Cn=new ee,Ln=new ee,Vn=new ee,qi=new ee,pr=new ee,mr=new ee,Hn=new ee;function rs(a,e,t,n,r){for(let i=0,s=a.length-3;i<=s;i+=3){Hn.fromArray(a,i);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),h=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}const oh=new An,Yi=new ee,ss=new ee;class Rn{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ss)),this.expandByPoint(Yi.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new ee,as=new ee,vr=new ee,Pn=new ee,os=new ee,gr=new ee,ls=new ee;class Ws{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(as);const i=e.distanceTo(t)*.5,s=-this.direction.dot(vr),o=Pn.dot(this.direction),l=-Pn.dot(vr),h=Pn.lengthSq(),u=Math.abs(1-s*s);let c,d,f,v;if(u>0)if(c=s*l-o,d=s*o-l,v=i*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+s*d+2*o)+d*(s*c+d+2*l)+h}else d=i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d=-i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-s*i+o)),d=c>0?-i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-i,-l),i),f=d*(d+2*l)+h):(c=Math.max(0,-(s*i+o)),d=c>0?i:Math.min(Math.max(-i,-l),i),f=-c*c+d*(d+2*l)+h);else d=s>0?-i:i,c=Math.max(0,-(s*d+o)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(as).addScaledVector(vr,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),r=_n.dot(_n)-n*n,i=e.radius*e.radius;if(r>i)return null;const s=Math.sqrt(i-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,s,o,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),u>=0?(i=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(i=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||i>r||((i>n||isNaN(n))&&(n=i),(s<r||isNaN(r))&&(r=s),c>=0?(o=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(o=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,i){os.subVectors(t,e),gr.subVectors(n,e),ls.crossVectors(os,gr);let s=this.direction.dot(ls),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(gr.crossVectors(Pn,gr));if(l<0)return null;const h=o*this.direction.dot(os.cross(Pn));if(h<0||l+h>s)return null;const u=-o*Pn.dot(ls);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,i,s,o,l,h,u,c,d,f,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=i,p[5]=s,p[9]=o,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),i=1/di.setFromMatrixColumn(e,1).length(),s=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),h=Math.sin(r),u=Math.cos(i),c=Math.sin(i);if(e.order==="XYZ"){const d=s*u,f=s*c,v=o*u,g=o*c;t[0]=l*u,t[4]=-l*c,t[8]=h,t[1]=f+v*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=v+f*h,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d+g*o,t[4]=v*o-f,t[8]=s*h,t[1]=s*c,t[5]=s*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;t[0]=d-g*o,t[4]=-s*c,t[8]=v+f*o,t[1]=f+v*o,t[5]=s*u,t[9]=g-d*o,t[2]=-s*h,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,f=s*c,v=o*u,g=o*c;t[0]=l*u,t[4]=v*h-f,t[8]=d*h+g,t[1]=l*c,t[5]=g*h+d,t[9]=f*h-v,t[2]=-h,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*h,v=o*l,g=o*h;t[0]=l*u,t[4]=g-d*c,t[8]=v*c+f,t[1]=c,t[5]=s*u,t[9]=-o*u,t[2]=-h*u,t[6]=f*c+v,t[10]=d-g*c}else if(e.order==="XZY"){const d=s*l,f=s*h,v=o*l,g=o*h;t[0]=l*u,t[4]=-c,t[8]=h*u,t[1]=d*c+g,t[5]=s*u,t[9]=f*c-v,t[2]=v*c-f,t[6]=o*u,t[10]=g*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),In.crossVectors(n,qt),In.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),In.crossVectors(n,qt)),In.normalize(),_r.crossVectors(qt,In),r[0]=In.x,r[4]=_r.x,r[8]=qt.x,r[1]=In.y,r[5]=_r.y,r[9]=qt.y,r[2]=In.z,r[6]=_r.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],M=n[15],C=r[0],B=r[4],F=r[8],E=r[12],S=r[1],D=r[5],V=r[9],I=r[13],X=r[2],q=r[6],ne=r[10],O=r[14],U=r[3],J=r[7],Y=r[11],H=r[15];return i[0]=s*C+o*S+l*X+h*U,i[4]=s*B+o*D+l*q+h*J,i[8]=s*F+o*V+l*ne+h*Y,i[12]=s*E+o*I+l*O+h*H,i[1]=u*C+c*S+d*X+f*U,i[5]=u*B+c*D+d*q+f*J,i[9]=u*F+c*V+d*ne+f*Y,i[13]=u*E+c*I+d*O+f*H,i[2]=v*C+g*S+m*X+p*U,i[6]=v*B+g*D+m*q+p*J,i[10]=v*F+g*V+m*ne+p*Y,i[14]=v*E+g*I+m*O+p*H,i[3]=_*C+y*S+x*X+M*U,i[7]=_*B+y*D+x*q+M*J,i[11]=_*F+y*V+x*ne+M*Y,i[15]=_*E+y*I+x*O+M*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],s=e[1],o=e[5],l=e[9],h=e[13],u=e[2],c=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+i*l*c-r*h*c-i*o*d+n*h*d+r*o*f-n*l*f)+g*(+t*l*f-t*h*d+i*s*d-r*s*f+r*h*u-i*l*u)+m*(+t*h*c-t*o*f-i*s*c+n*s*f+i*o*u-n*h*u)+p*(-r*o*u-t*l*c+t*o*d+r*s*c-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],h=e[7],u=e[8],c=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],p=e[15],_=c*m*h-g*d*h+g*l*f-o*m*f-c*l*p+o*d*p,y=v*d*h-u*m*h-v*l*f+s*m*f+u*l*p-s*d*p,x=u*g*h-v*c*h+v*o*f-s*g*f-u*o*p+s*c*p,M=v*c*l-u*g*l-v*o*d+s*g*d+u*o*m-s*c*m,C=t*_+n*y+r*x+i*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=_*B,e[1]=(g*d*i-c*m*i-g*r*f+n*m*f+c*r*p-n*d*p)*B,e[2]=(o*m*i-g*l*i+g*r*h-n*m*h-o*r*p+n*l*p)*B,e[3]=(c*l*i-o*d*i-c*r*h+n*d*h+o*r*f-n*l*f)*B,e[4]=y*B,e[5]=(u*m*i-v*d*i+v*r*f-t*m*f-u*r*p+t*d*p)*B,e[6]=(v*l*i-s*m*i-v*r*h+t*m*h+s*r*p-t*l*p)*B,e[7]=(s*d*i-u*l*i+u*r*h-t*d*h-s*r*f+t*l*f)*B,e[8]=x*B,e[9]=(v*c*i-u*g*i-v*n*f+t*g*f+u*n*p-t*c*p)*B,e[10]=(s*g*i-v*o*i+v*n*h-t*g*h-s*n*p+t*o*p)*B,e[11]=(u*o*i-s*c*i-u*n*h+t*c*h+s*n*f-t*o*f)*B,e[12]=M*B,e[13]=(u*g*r-v*c*r+v*n*d-t*g*d-u*n*m+t*c*m)*B,e[14]=(v*o*r-s*g*r-v*n*l+t*g*l+s*n*m-t*o*m)*B,e[15]=(s*c*r-u*o*r+u*n*l-t*c*l-s*n*d+t*o*d)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,s=e.x,o=e.y,l=e.z,h=i*s,u=i*o;return this.set(h*s+n,h*o-r*l,h*l+r*o,0,h*o+r*l,u*o+n,u*l-r*s,0,h*l-r*o,u*l+r*s,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,s){return this.set(1,n,i,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,h=i+i,u=s+s,c=o+o,d=i*h,f=i*u,v=i*c,g=s*u,m=s*c,p=o*c,_=l*h,y=l*u,x=l*c,M=n.x,C=n.y,B=n.z;return r[0]=(1-(g+p))*M,r[1]=(f+x)*M,r[2]=(v-y)*M,r[3]=0,r[4]=(f-x)*C,r[5]=(1-(d+p))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(v+y)*B,r[9]=(m-_)*B,r[10]=(1-(d+g))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=di.set(r[0],r[1],r[2]).length();const s=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const h=1/i,u=1/s,c=1/o;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=c,tn.elements[9]*=c,tn.elements[10]*=c,t.setFromRotationMatrix(tn),n.x=i,n.y=s,n.z=o,this}makePerspective(e,t,n,r,i,s){const o=this.elements,l=2*i/(t-e),h=2*i/(n-r),u=(t+e)/(t-e),c=(n+r)/(n-r),d=-(s+i)/(s-i),f=-2*s*i/(s-i);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=c,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,s){const o=this.elements,l=1/(t-e),h=1/(n-r),u=1/(s-i),c=(t+e)*l,d=(n+r)*h,f=(s+i)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-c,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new ee,tn=new st,lh=new ee(0,0,0),ch=new ee(1,1,1),In=new ee,_r=new ee,qt=new ee,Va=new st,Ha=new pn;class Wr{constructor(e=0,t=0,n=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],s=r[4],o=r[8],l=r[1],h=r[5],u=r[9],c=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const Ga=new ee,fi=new pn,xn=new st,xr=new ee,ji=new ee,uh=new ee,dh=new pn,ka=new ee(1,0,0),Wa=new ee(0,1,0),Xa=new ee(0,0,1),fh={type:"added"},qa={type:"removed"};class xt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new ee,t=new Wr,n=new pn,r=new ee(1,1,1);function i(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new lt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Ga.copy(e).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ji,xr,this.up):xn.lookAt(xr,ji,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(xn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,s=r.length;i<s;i++){const o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];i(e.shapes,c)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),h=s(e.textures),u=s(e.images),c=s(e.shapes),d=s(e.skeletons),f=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const l=[];for(const h in o){const u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new ee(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new ee,yn=new ee,cs=new ee,Mn=new ee,pi=new ee,mi=new ee,Ya=new ee,hs=new ee,us=new ee,ds=new ee;let yr=!1;class sn{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){nn.subVectors(r,t),yn.subVectors(n,t),cs.subVectors(e,t);const s=nn.dot(nn),o=nn.dot(yn),l=nn.dot(cs),h=yn.dot(yn),u=yn.dot(cs),c=s*h-o*o;if(c===0)return i.set(-2,-1,-1);const d=1/c,f=(h*l-o*u)*d,v=(s*u-o*l)*d;return i.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mn),Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,n,r,i,s,o,l){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,r,i,s,o,l)}static getInterpolation(e,t,n,r,i,s,o,l){return this.getBarycoord(e,t,n,r,Mn),l.setScalar(0),l.addScaledVector(i,Mn.x),l.addScaledVector(s,Mn.y),l.addScaledVector(o,Mn.z),l}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),yn.subVectors(e,t),nn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let s,o;pi.subVectors(r,n),mi.subVectors(i,n),hs.subVectors(e,n);const l=pi.dot(hs),h=mi.dot(hs);if(l<=0&&h<=0)return t.copy(n);us.subVectors(e,r);const u=pi.dot(us),c=mi.dot(us);if(u>=0&&c<=u)return t.copy(r);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(pi,s);ds.subVectors(e,i);const f=pi.dot(ds),v=mi.dot(ds);if(v>=0&&f<=v)return t.copy(i);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(mi,o);const m=u*v-f*c;if(m<=0&&c-u>=0&&f-v>=0)return Ya.subVectors(i,r),o=(c-u)/(c-u+(f-v)),t.copy(r).addScaledVector(Ya,o);const p=1/(m+g+d);return s=g*p,o=d*p,t.copy(n).addScaledVector(pi,s).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ph=0;class on extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Ri,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=r(e.textures),s=r(e.images);i.length>0&&(n.textures=i),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function fs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=en.workingColorSpace){if(e=ks(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=fs(s,i,e+1/3),this.g=fs(s,i,e),this.b=fs(s,i,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=$e){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return en.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Pt(Ut.r*255,0,255))*65536+Math.round(Pt(Ut.g*255,0,255))*256+Math.round(Pt(Ut.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,i=Ut.b,s=Math.max(n,r,i),o=Math.min(n,r,i);let l,h;const u=(o+s)/2;if(o===s)l=0,h=0;else{const c=s-o;switch(h=u<=.5?c/(s+o):c/(2-s-o),s){case n:l=(r-i)/c+(r<i?6:0);break;case r:l=(i-n)/c+2;break;case i:l=(n-r)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=$e){en.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Mr);const n=ir(rn.h,Mr.h,t),r=ir(rn.s,Mr.s,t),i=ir(rn.l,Mr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=fl;class Yn extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new ee,Er=new Je;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Is,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Is&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class pl extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ml extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const Zt=new st,ps=new xt,vi=new ee,Yt=new An,Ki=new An,bt=new ee;class cn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?ml:pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new lt().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return ps.lookAt(e),ps.updateMatrix(),this.applyMatrix4(ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];Yt.setFromBufferAttribute(i),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Yt.min,Ki.min),Yt.expandByPoint(bt),bt.addVectors(Yt.max,Ki.max),Yt.expandByPoint(bt)):(Yt.expandByPoint(Ki.min),Yt.expandByPoint(Ki.max))}Yt.getCenter(n);let r=0;for(let i=0,s=e.count;i<s;i++)bt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)bt.fromBufferAttribute(o,h),l&&(vi.fromBufferAttribute(e,h),bt.add(vi)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let S=0;S<o;S++)h[S]=new ee,u[S]=new ee;const c=new ee,d=new ee,f=new ee,v=new Je,g=new Je,m=new Je,p=new ee,_=new ee;function y(S,D,V){c.fromArray(r,S*3),d.fromArray(r,D*3),f.fromArray(r,V*3),v.fromArray(s,S*2),g.fromArray(s,D*2),m.fromArray(s,V*2),d.sub(c),f.sub(c),g.sub(v),m.sub(v);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(I),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(I),h[S].add(p),h[D].add(p),h[V].add(p),u[S].add(_),u[D].add(_),u[V].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,D=x.length;S<D;++S){const V=x[S],I=V.start,X=V.count;for(let q=I,ne=I+X;q<ne;q+=3)y(n[q+0],n[q+1],n[q+2])}const M=new ee,C=new ee,B=new ee,F=new ee;function E(S){B.fromArray(i,S*3),F.copy(B);const D=h[S];M.copy(D),M.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(F,D);const I=C.dot(u[S])<0?-1:1;l[S*4]=M.x,l[S*4+1]=M.y,l[S*4+2]=M.z,l[S*4+3]=I}for(let S=0,D=x.length;S<D;++S){const V=x[S],I=V.start,X=V.count;for(let q=I,ne=I+X;q<ne;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new ee,i=new ee,s=new ee,o=new ee,l=new ee,h=new ee,u=new ee,c=new ee;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,i),c.subVectors(r,i),u.cross(c),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(u),l.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,i),c.subVectors(r,i),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const h=o.array,u=o.itemSize,c=o.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=h[f++]}return new Vt(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,n);t.setAttribute(o,h)}const i=this.morphAttributes;for(const o in i){const l=[],h=i[o];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(t))}const i=e.morphAttributes;for(const h in i){const u=[],c=i[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,u=s.length;h<u;h++){const c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new st,hn=new Ws,Sr=new Rn,Ka=new ee,gi=new ee,_i=new ee,xi=new ee,ms=new ee,Tr=new ee,wr=new Je,br=new Je,Ar=new Je,Za=new ee,$a=new ee,Ja=new ee,Rr=new ee,Cr=new ee;class jt extends xt{constructor(e=new cn,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(i&&o){Tr.set(0,0,0);for(let l=0,h=i.length;l<h;l++){const u=o[l],c=i[l];u!==0&&(ms.fromBufferAttribute(c,e),s?Tr.addScaledVector(ms,u):Tr.addScaledVector(ms.sub(t),u))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),hn.copy(e.ray).recast(e.near),!(Sr.containsPoint(hn.origin)===!1&&(hn.intersectSphere(Sr,Ka)===null||hn.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&(ja.copy(i).invert(),hn.copy(e.ray).applyMatrix4(ja),!(n.boundingBox!==null&&hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,i=this.material,s=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,c=r.groups,d=r.drawRange;if(s!==null)if(Array.isArray(i))for(let f=0,v=c.length;f<v;f++){const g=c[f],m=i[g.materialIndex],p=Math.max(g.start,d.start),_=Math.min(s.count,Math.min(g.start+g.count,d.start+d.count));for(let y=p,x=_;y<x;y+=3){const M=s.getX(y),C=s.getX(y+1),B=s.getX(y+2);n=Lr(this,m,e,hn,l,h,u,M,C,B),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),v=Math.min(s.count,d.start+d.count);for(let g=f,m=v;g<m;g+=3){const p=s.getX(g),_=s.getX(g+1),y=s.getX(g+2);n=Lr(this,i,e,hn,l,h,u,p,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(i))for(let f=0,v=c.length;f<v;f++){const g=c[f],m=i[g.materialIndex],p=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=p,x=_;y<x;y+=3){const M=y,C=y+1,B=y+2;n=Lr(this,m,e,hn,l,h,u,M,C,B),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const f=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=f,m=v;g<m;g+=3){const p=g,_=g+1,y=g+2;n=Lr(this,i,e,hn,l,h,u,p,_,y),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function vh(a,e,t,n,r,i,s,o){let l;if(e.side===kt?l=n.intersectTriangle(s,i,r,!0,o):l=n.intersectTriangle(r,i,s,e.side===bn,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Cr);return h<t.near||h>t.far?null:{distance:h,point:Cr.clone(),object:a}}function Lr(a,e,t,n,r,i,s,o,l,h){a.getVertexPosition(o,gi),a.getVertexPosition(l,_i),a.getVertexPosition(h,xi);const u=vh(a,e,t,n,gi,_i,xi,Rr);if(u){r&&(wr.fromBufferAttribute(r,o),br.fromBufferAttribute(r,l),Ar.fromBufferAttribute(r,h),u.uv=sn.getInterpolation(Rr,gi,_i,xi,wr,br,Ar,new Je)),i&&(wr.fromBufferAttribute(i,o),br.fromBufferAttribute(i,l),Ar.fromBufferAttribute(i,h),u.uv1=sn.getInterpolation(Rr,gi,_i,xi,wr,br,Ar,new Je),u.uv2=u.uv1),s&&(Za.fromBufferAttribute(s,o),$a.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,h),u.normal=sn.getInterpolation(Rr,gi,_i,xi,Za,$a,Ja,new ee),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:o,b:l,c:h,normal:new ee,materialIndex:0};sn.getNormal(gi,_i,xi,c.normal),u.face=c}return u}class Gi extends cn{constructor(e=1,t=1,n=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:s};const o=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,s,i,0),v("z","y","x",1,-1,n,t,-e,s,i,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,i,4),v("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(c,2));function v(g,m,p,_,y,x,M,C,B,F,E){const S=x/B,D=M/F,V=x/2,I=M/2,X=C/2,q=B+1,ne=F+1;let O=0,U=0;const J=new ee;for(let Y=0;Y<ne;Y++){const H=Y*D-I;for(let W=0;W<q;W++){const b=W*S-V;J[g]=b*_,J[m]=H*y,J[p]=X,h.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[p]=C>0?1:-1,u.push(J.x,J.y,J.z),c.push(W/B),c.push(1-Y/F),O+=1}}for(let Y=0;Y<F;Y++)for(let H=0;H<B;H++){const W=d+H+q*Y,b=d+H+q*(Y+1),A=d+(H+1)+q*(Y+1),R=d+(H+1)+q*Y;l.push(W,b,R),l.push(b,A,R),U+=6}o.addGroup(f,U,E),f+=U,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(a){const e={};for(let t=0;t<a.length;t++){const n=zi(a[t]);for(const r in n)e[r]=n[r]}return e}function gh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function vl(a){return a.getRenderTarget()===null?a.outputColorSpace:fn}const _h={clone:zi,merge:Ot};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends gl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;i+=s.offsetX*r/l,t-=s.offsetY*n/h,r*=s.width/l,n*=s.height/h}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Mi=1;class Mh extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new zt(yi,Mi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const i=new zt(yi,Mi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(-1,0,0),this.add(i);const s=new zt(yi,Mi,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new zt(yi,Mi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new zt(yi,Mi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const h=new zt(yi,Mi,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,i,s,o,l,h]=this.children,u=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class _l extends It{constructor(e,t,n,r,i,s,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,r,i,s,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?$e:$n),this.texture=new _l(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),i=new ti({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Bn});i.uniforms.tEquirect.value=t;const s=new jt(r,i),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Gt),new Mh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(i)}}const vs=new ee,Sh=new ee,Th=new lt;class kn{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vs.subVectors(n,t).cross(Sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),r=this.coplanarPoint(vs).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Rn,Pr=new ee;class Xs{constructor(e=new kn,t=new kn,n=new kn,r=new kn,i=new kn,s=new kn){this.planes=[e,t,n,r,i,s]}set(e,t,n,r,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],i=n[1],s=n[2],o=n[3],l=n[4],h=n[5],u=n[6],c=n[7],d=n[8],f=n[9],v=n[10],g=n[11],m=n[12],p=n[13],_=n[14],y=n[15];return t[0].setComponents(o-r,c-l,g-d,y-m).normalize(),t[1].setComponents(o+r,c+l,g+d,y+m).normalize(),t[2].setComponents(o+i,c+h,g+f,y+p).normalize(),t[3].setComponents(o-i,c-h,g-f,y-p).normalize(),t[4].setComponents(o-s,c-u,g-v,y-_).normalize(),t[5].setComponents(o+s,c+u,g+v,y+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pr.x=r.normal.x>0?e.max.x:e.min.x,Pr.y=r.normal.y>0?e.max.y:e.min.y,Pr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xl(){let a=null,e=!1,t=null,n=null;function r(i,s){t(i,s),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function wh(a,e){const t=e.isWebGL2,n=new WeakMap;function r(h,u){const c=h.array,d=h.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,c,d),h.onUploadCallback();let v;if(c instanceof Float32Array)v=a.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=a.SHORT;else if(c instanceof Uint32Array)v=a.UNSIGNED_INT;else if(c instanceof Int32Array)v=a.INT;else if(c instanceof Int8Array)v=a.BYTE;else if(c instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function i(h,u,c){const d=u.array,f=u.updateRange;a.bindBuffer(c,h),f.count===-1?a.bufferSubData(c,0,d):(t?a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(a.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const d=n.get(h);(!d||d.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=n.get(h);c===void 0?n.set(h,r(h,u)):c.version<h.version&&(i(c.buffer,h,u),c.version=h.version)}return{get:s,remove:o,update:l}}class qs extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),h=o+1,u=l+1,c=e/o,d=t/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const _=p*d-s;for(let y=0;y<h;y++){const x=y*c-i;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+h*p,x=_+h*(p+1),M=_+1+h*(p+1),C=_+1+h*p;f.push(y,x,C),f.push(x,M,C)}this.setIndex(f),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih="vec3 transformed = vec3( position );",Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ad=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_d=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ad=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,it={alphamap_fragment:bh,alphamap_pars_fragment:Ah,alphatest_fragment:Rh,alphatest_pars_fragment:Ch,aomap_fragment:Lh,aomap_pars_fragment:Ph,begin_vertex:Ih,beginnormal_vertex:Nh,bsdfs:Dh,iridescence_fragment:Uh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:zh,clipping_planes_vertex:Vh,color_fragment:Hh,color_pars_fragment:Gh,color_pars_vertex:kh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:jh,displacementmap_vertex:Kh,emissivemap_fragment:Zh,emissivemap_pars_fragment:$h,encodings_fragment:Jh,encodings_pars_fragment:Qh,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:vu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:xu,lights_physical_fragment:yu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Eu,lights_fragment_maps:Su,lights_fragment_end:Tu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Lu,map_particle_fragment:Pu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Uu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Bu,morphtarget_vertex:Ou,normal_fragment_begin:zu,normal_fragment_maps:Vu,normal_pars_fragment:Hu,normal_pars_vertex:Gu,normal_vertex:ku,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:ju,output_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:$u,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:ed,roughnessmap_fragment:td,roughnessmap_pars_fragment:nd,shadowmap_pars_fragment:id,shadowmap_pars_vertex:rd,shadowmap_vertex:sd,shadowmask_pars_fragment:ad,skinbase_vertex:od,skinning_pars_vertex:ld,skinning_vertex:cd,skinnormal_vertex:hd,specularmap_fragment:ud,specularmap_pars_fragment:dd,tonemapping_fragment:fd,tonemapping_pars_fragment:pd,transmission_fragment:md,transmission_pars_fragment:vd,uv_pars_fragment:gd,uv_pars_vertex:_d,uv_vertex:xd,worldpos_vertex:yd,background_vert:Md,background_frag:Ed,backgroundCube_vert:Sd,backgroundCube_frag:Td,cube_vert:wd,cube_frag:bd,depth_vert:Ad,depth_frag:Rd,distanceRGBA_vert:Cd,distanceRGBA_frag:Ld,equirect_vert:Pd,equirect_frag:Id,linedashed_vert:Nd,linedashed_frag:Dd,meshbasic_vert:Ud,meshbasic_frag:Fd,meshlambert_vert:Bd,meshlambert_frag:Od,meshmatcap_vert:zd,meshmatcap_frag:Vd,meshnormal_vert:Hd,meshnormal_frag:Gd,meshphong_vert:kd,meshphong_frag:Wd,meshphysical_vert:Xd,meshphysical_frag:qd,meshtoon_vert:Yd,meshtoon_frag:jd,points_vert:Kd,points_frag:Zd,shadow_vert:$d,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:ef},De={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaTest:{value:0}}},un={basic:{uniforms:Ot([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Ot([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Ot([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Ot([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Ot([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new et(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Ot([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Ot([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Ot([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Ot([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Ot([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Ot([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Ot([De.common,De.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Ot([De.lights,De.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};un.physical={uniforms:Ot([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ir={r:0,b:0,g:0};function tf(a,e,t,n,r,i,s){const o=new et(0);let l=i===!0?0:1,h,u,c=null,d=0,f=null;function v(m,p){let _=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),_=!0),a.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,s),_=!0;break}(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===kr)?(u===void 0&&(u=new jt(new Gi(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==$e,(c!==y||d!==y.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new jt(new qs(2,2),new ti({name:"BackgroundMaterial",uniforms:zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=y.colorSpace!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,p){m.getRGB(Ir,vl(a)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function nf(a,e,t,n){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||i!==null,o={},l=m(null);let h=l,u=!1;function c(X,q,ne,O,U){let J=!1;if(s){const Y=g(O,ne,q);h!==Y&&(h=Y,f(h.object)),J=p(X,O,ne,U),J&&_(X,O,ne,U)}else{const Y=q.wireframe===!0;(h.geometry!==O.id||h.program!==ne.id||h.wireframe!==Y)&&(h.geometry=O.id,h.program=ne.id,h.wireframe=Y,J=!0)}U!==null&&t.update(U,a.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,F(X,q,ne,O),U!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return n.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function f(X){return n.isWebGL2?a.bindVertexArray(X):i.bindVertexArrayOES(X)}function v(X){return n.isWebGL2?a.deleteVertexArray(X):i.deleteVertexArrayOES(X)}function g(X,q,ne){const O=ne.wireframe===!0;let U=o[X.id];U===void 0&&(U={},o[X.id]=U);let J=U[q.id];J===void 0&&(J={},U[q.id]=J);let Y=J[O];return Y===void 0&&(Y=m(d()),J[O]=Y),Y}function m(X){const q=[],ne=[],O=[];for(let U=0;U<r;U++)q[U]=0,ne[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ne,attributeDivisors:O,object:X,attributes:{},index:null}}function p(X,q,ne,O){const U=h.attributes,J=q.attributes;let Y=0;const H=ne.getAttributes();for(const W in H)if(H[W].location>=0){const A=U[W];let R=J[W];if(R===void 0&&(W==="instanceMatrix"&&X.instanceMatrix&&(R=X.instanceMatrix),W==="instanceColor"&&X.instanceColor&&(R=X.instanceColor)),A===void 0||A.attribute!==R||R&&A.data!==R.data)return!0;Y++}return h.attributesNum!==Y||h.index!==O}function _(X,q,ne,O){const U={},J=q.attributes;let Y=0;const H=ne.getAttributes();for(const W in H)if(H[W].location>=0){let A=J[W];A===void 0&&(W==="instanceMatrix"&&X.instanceMatrix&&(A=X.instanceMatrix),W==="instanceColor"&&X.instanceColor&&(A=X.instanceColor));const R={};R.attribute=A,A&&A.data&&(R.data=A.data),U[W]=R,Y++}h.attributes=U,h.attributesNum=Y,h.index=O}function y(){const X=h.newAttributes;for(let q=0,ne=X.length;q<ne;q++)X[q]=0}function x(X){M(X,0)}function M(X,q){const ne=h.newAttributes,O=h.enabledAttributes,U=h.attributeDivisors;ne[X]=1,O[X]===0&&(a.enableVertexAttribArray(X),O[X]=1),U[X]!==q&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,q),U[X]=q)}function C(){const X=h.newAttributes,q=h.enabledAttributes;for(let ne=0,O=q.length;ne<O;ne++)q[ne]!==X[ne]&&(a.disableVertexAttribArray(ne),q[ne]=0)}function B(X,q,ne,O,U,J){n.isWebGL2===!0&&(ne===a.INT||ne===a.UNSIGNED_INT)?a.vertexAttribIPointer(X,q,ne,U,J):a.vertexAttribPointer(X,q,ne,O,U,J)}function F(X,q,ne,O){if(n.isWebGL2===!1&&(X.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const U=O.attributes,J=ne.getAttributes(),Y=q.defaultAttributeValues;for(const H in J){const W=J[H];if(W.location>=0){let b=U[H];if(b===void 0&&(H==="instanceMatrix"&&X.instanceMatrix&&(b=X.instanceMatrix),H==="instanceColor"&&X.instanceColor&&(b=X.instanceColor)),b!==void 0){const A=b.normalized,R=b.itemSize,G=t.get(b);if(G===void 0)continue;const P=G.buffer,te=G.type,K=G.bytesPerElement;if(b.isInterleavedBufferAttribute){const $=b.data,re=$.stride,be=b.offset;if($.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)M(W.location+pe,$.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let pe=0;pe<W.locationSize;pe++)x(W.location+pe);a.bindBuffer(a.ARRAY_BUFFER,P);for(let pe=0;pe<W.locationSize;pe++)B(W.location+pe,R/W.locationSize,te,A,re*K,(be+R/W.locationSize*pe)*K)}else{if(b.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)M(W.location+$,b.meshPerAttribute);X.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let $=0;$<W.locationSize;$++)x(W.location+$);a.bindBuffer(a.ARRAY_BUFFER,P);for(let $=0;$<W.locationSize;$++)B(W.location+$,R/W.locationSize,te,A,R*K,R/W.locationSize*$*K)}}else if(Y!==void 0){const A=Y[H];if(A!==void 0)switch(A.length){case 2:a.vertexAttrib2fv(W.location,A);break;case 3:a.vertexAttrib3fv(W.location,A);break;case 4:a.vertexAttrib4fv(W.location,A);break;default:a.vertexAttrib1fv(W.location,A)}}}}C()}function E(){V();for(const X in o){const q=o[X];for(const ne in q){const O=q[ne];for(const U in O)v(O[U].object),delete O[U];delete q[ne]}delete o[X]}}function S(X){if(o[X.id]===void 0)return;const q=o[X.id];for(const ne in q){const O=q[ne];for(const U in O)v(O[U].object),delete O[U];delete q[ne]}delete o[X.id]}function D(X){for(const q in o){const ne=o[q];if(ne[X.id]===void 0)continue;const O=ne[X.id];for(const U in O)v(O[U].object),delete O[U];delete ne[X.id]}}function V(){I(),u=!0,h!==l&&(h=l,f(h.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:V,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function rf(a,e,t,n){const r=n.isWebGL2;let i;function s(h){i=h}function o(h,u){a.drawArrays(i,h,u),t.update(u,i,1)}function l(h,u,c){if(c===0)return;let d,f;if(r)d=a,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](i,h,u,c),t.update(u,i,c)}this.setMode=s,this.render=o,this.renderInstances=l}function sf(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(B){if(B==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=s||e.has("OES_texture_float"),M=y&&x,C=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:C}}function af(a){const e=this;let t=null,n=0,r=!1,i=!1;const s=new kn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||r;return r=d,n=c.length,f},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(c,d){t=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=a.get(c);if(!r||v===null||v.length===0||i&&!m)i?u(null):h();else{const _=i?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=u(v,d,y,f);for(let M=0;M!==y;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)s.copy(c[y]).applyMatrix4(_,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function of(a){let e=new WeakMap;function t(s,o){return o===Rs?s.mapping=Ni:o===Cs&&(s.mapping=Di),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Rs||o===Cs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new Eh(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),s.addEventListener("dispose",r),t(h.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ys extends gl{constructor(e=-1,t=1,n=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=h*this.view.offsetX,s=i+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Qa=[.125,.215,.35,.446,.526,.582],Xn=20,gs=new Ys,eo=new et;let _s=null;const Wn=(1+Math.sqrt(5))/2,Ei=1/Wn,to=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Wn,Ei),new ee(0,Wn,-Ei),new ee(Ei,0,Wn),new ee(-Ei,0,Wn),new ee(Wn,Ei,0),new ee(-Wn,Ei,0)];class no{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_s=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_s),e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:sr,format:Qt,colorSpace:fn,depthBuffer:!1},r=io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(i)),this._blurMaterial=cf(i,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,n,r){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(eo),u.toneMapping=wn,u.autoClear=!1;const f=new Yn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),v=new jt(new Gi,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(eo),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const y=this._cubeSize;Nr(r,_*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ni||e.mapping===Di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ro());const i=r?this._cubemapMaterial:this._equirectMaterial,s=new jt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=to[(r-1)%to.length];this._blur(e,r-1,r,i,s)}t.autoClear=n}_blur(e,t,n,r,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",i),this._halfBlur(s,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,s,o){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new jt(this._lodPlanes[r],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),g=i/v,m=isFinite(i)?1+Math.floor(u*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const p=[];let _=0;for(let B=0;B<Xn;++B){const F=B/g,E=Math.exp(-F*F/2);p.push(E),B===0?_+=E:B<m&&(_+=2*E)}for(let B=0;B<p.length;B++)p[B]=p[B]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[r],M=3*x*(r>y-Ai?r-y+Ai:0),C=4*(this._cubeSize-x);Nr(t,M,C,3*x,2*x),l.setRenderTarget(t),l.render(c,gs)}}function lf(a){const e=[],t=[],n=[];let r=a;const i=a-Ai+1+Qa.length;for(let s=0;s<i;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>a-Ai?l=Qa[s-a+Ai-1]:s===0&&(l=0),n.push(l);const h=1/(o-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),y=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let C=0;C<f;C++){const B=C%3*2/3-1,F=C>2?0:-1,E=[B,F,0,B+2/3,F,0,B+2/3,F+1,0,B,F,0,B+2/3,F+1,0,B,F+1,0];_.set(E,g*v*C),y.set(d,m*v*C);const S=[C,C,C,C,C,C];x.set(S,p*v*C)}const M=new cn;M.setAttribute("position",new Vt(_,g)),M.setAttribute("uv",new Vt(y,m)),M.setAttribute("faceIndex",new Vt(x,p)),e.push(M),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function io(a,e,t){const n=new ei(a,e,t);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function cf(a,e,t){const n=new Float32Array(Xn),r=new ee(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ro(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function so(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Rs||l===Cs,u=l===Ni||l===Di;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let c=e.get(o);return t===null&&(t=new no(a)),c=h?t.fromEquirectangular(o,c):t.fromCubemap(o,c),e.set(o,c),c.texture}else{if(e.has(o))return e.get(o).texture;{const c=o.image;if(h&&c&&c.height>0||u&&c&&r(c)){t===null&&(t=new no(a));const d=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",i),d.texture}else return null}}}return o}function r(o){let l=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function uf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function df(a,e,t,n){const r={},i=new WeakMap;function s(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",s),delete r[d.id];const f=i.get(d);f&&(e.remove(f),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(c,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],a.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const M=_[y+0],C=_[y+1],B=_[y+2];d.push(M,C,C,B,B,M)}}else{const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const M=y+0,C=y+1,B=y+2;d.push(M,C,C,B,B,M)}}const m=new(ll(d)?ml:pl)(d,1);m.version=g;const p=i.get(c);p&&e.remove(p),i.set(c,m)}function u(c){const d=i.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return i.get(c)}return{get:o,update:l,getWireframeAttribute:u}}function ff(a,e,t,n){const r=n.isWebGL2;let i;function s(d){i=d}let o,l;function h(d){o=d.type,l=d.bytesPerElement}function u(d,f){a.drawElements(i,f,o,d*l),t.update(f,i,1)}function c(d,f,v){if(v===0)return;let g,m;if(r)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](i,f,o,d*l,v),t.update(f,i,v)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=c}function pf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mf(a,e){return a[0]-e[0]}function vf(a,e){return Math.abs(e[1])-Math.abs(a[1])}function gf(a,e,t){const n={},r=new Float32Array(8),i=new WeakMap,s=new vt,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,c){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let q=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",q)};var f=q;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],B=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),M===!0&&(E=3);let S=u.attributes.position.count*E,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const V=new Float32Array(S*D*4*g),I=new ul(V,S,D,g);I.type=Fn,I.needsUpdate=!0;const X=E*4;for(let ne=0;ne<g;ne++){const O=C[ne],U=B[ne],J=F[ne],Y=S*D*4*ne;for(let H=0;H<O.count;H++){const W=H*X;y===!0&&(s.fromBufferAttribute(O,H),V[Y+W+0]=s.x,V[Y+W+1]=s.y,V[Y+W+2]=s.z,V[Y+W+3]=0),x===!0&&(s.fromBufferAttribute(U,H),V[Y+W+4]=s.x,V[Y+W+5]=s.y,V[Y+W+6]=s.z,V[Y+W+7]=0),M===!0&&(s.fromBufferAttribute(J,H),V[Y+W+8]=s.x,V[Y+W+9]=s.y,V[Y+W+10]=s.z,V[Y+W+11]=J.itemSize===4?s.w:1)}}m={count:g,texture:I,size:new Je(S,D)},i.set(u,m),u.addEventListener("dispose",q)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const _=u.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",_),c.getUniforms().setValue(a,"morphTargetInfluences",d),c.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const M=g[x];M[0]=x,M[1]=d[x]}g.sort(vf);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(mf);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const M=o[x],C=M[0],B=M[1];C!==Number.MAX_SAFE_INTEGER&&B?(m&&u.getAttribute("morphTarget"+x)!==m[C]&&u.setAttribute("morphTarget"+x,m[C]),p&&u.getAttribute("morphNormal"+x)!==p[C]&&u.setAttribute("morphNormal"+x,p[C]),r[x]=B,_+=B):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-_;c.getUniforms().setValue(a,"morphTargetBaseInfluence",y),c.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function _f(a,e,t,n){let r=new WeakMap;function i(l){const h=n.render.frame,u=l.geometry,c=e.get(l,u);return r.get(c)!==h&&(e.update(c),r.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER)),c}function s(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:i,dispose:s}}const yl=new It,Ml=new ul,El=new ah,Sl=new _l,ao=[],oo=[],lo=new Float32Array(16),co=new Float32Array(9),ho=new Float32Array(4);function ki(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let i=ao[r];if(i===void 0&&(i=new Float32Array(r),ao[r]=i),e!==0){n.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function Et(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function St(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Xr(a,e){let t=oo[e];t===void 0&&(t=new Int32Array(e),oo[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function xf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function yf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;a.uniform2fv(this.addr,e),St(t,e)}}function Mf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;a.uniform3fv(this.addr,e),St(t,e)}}function Ef(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;a.uniform4fv(this.addr,e),St(t,e)}}function Sf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;ho.set(n),a.uniformMatrix2fv(this.addr,!1,ho),St(t,n)}}function Tf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;co.set(n),a.uniformMatrix3fv(this.addr,!1,co),St(t,n)}}function wf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Et(t,n))return;lo.set(n),a.uniformMatrix4fv(this.addr,!1,lo),St(t,n)}}function bf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Af(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;a.uniform2iv(this.addr,e),St(t,e)}}function Rf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;a.uniform3iv(this.addr,e),St(t,e)}}function Cf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;a.uniform4iv(this.addr,e),St(t,e)}}function Lf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Pf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;a.uniform2uiv(this.addr,e),St(t,e)}}function If(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;a.uniform3uiv(this.addr,e),St(t,e)}}function Nf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;a.uniform4uiv(this.addr,e),St(t,e)}}function Df(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||yl,r)}function Uf(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||El,r)}function Ff(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sl,r)}function Bf(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ml,r)}function Of(a){switch(a){case 5126:return xf;case 35664:return yf;case 35665:return Mf;case 35666:return Ef;case 35674:return Sf;case 35675:return Tf;case 35676:return wf;case 5124:case 35670:return bf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Lf;case 36294:return Pf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return Ff;case 36289:case 36303:case 36311:case 36292:return Bf}}function zf(a,e){a.uniform1fv(this.addr,e)}function Vf(a,e){const t=ki(e,this.size,2);a.uniform2fv(this.addr,t)}function Hf(a,e){const t=ki(e,this.size,3);a.uniform3fv(this.addr,t)}function Gf(a,e){const t=ki(e,this.size,4);a.uniform4fv(this.addr,t)}function kf(a,e){const t=ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Wf(a,e){const t=ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Xf(a,e){const t=ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function qf(a,e){a.uniform1iv(this.addr,e)}function Yf(a,e){a.uniform2iv(this.addr,e)}function jf(a,e){a.uniform3iv(this.addr,e)}function Kf(a,e){a.uniform4iv(this.addr,e)}function Zf(a,e){a.uniform1uiv(this.addr,e)}function $f(a,e){a.uniform2uiv(this.addr,e)}function Jf(a,e){a.uniform3uiv(this.addr,e)}function Qf(a,e){a.uniform4uiv(this.addr,e)}function ep(a,e,t){const n=this.cache,r=e.length,i=Xr(t,r);Et(n,i)||(a.uniform1iv(this.addr,i),St(n,i));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||yl,i[s])}function tp(a,e,t){const n=this.cache,r=e.length,i=Xr(t,r);Et(n,i)||(a.uniform1iv(this.addr,i),St(n,i));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||El,i[s])}function np(a,e,t){const n=this.cache,r=e.length,i=Xr(t,r);Et(n,i)||(a.uniform1iv(this.addr,i),St(n,i));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Sl,i[s])}function ip(a,e,t){const n=this.cache,r=e.length,i=Xr(t,r);Et(n,i)||(a.uniform1iv(this.addr,i),St(n,i));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ml,i[s])}function rp(a){switch(a){case 5126:return zf;case 35664:return Vf;case 35665:return Hf;case 35666:return Gf;case 35674:return kf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return jf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Of(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const o=r[i];o.setValue(e,t[o.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function uo(a,e){a.seq.push(e),a.map[e.id]=e}function lp(a,e,t){const n=a.name,r=n.length;for(xs.lastIndex=0;;){const i=xs.exec(n),s=xs.lastIndex;let o=i[1];const l=i[2]==="]",h=i[3];if(l&&(o=o|0),h===void 0||h==="["&&s+2===r){uo(t,h===void 0?new sp(o,a,e):new ap(o,a,e));break}else{let c=t.map[o];c===void 0&&(c=new op(o),uo(t,c)),t=c}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),s=e.getUniformLocation(t,i.name);lp(i,s,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function fo(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let cp=0;function hp(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=r;s<i;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function up(a){switch(a){case fn:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),["Linear","( value )"]}}function po(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+hp(a.getShaderSource(e),s)}else return r}function dp(a,e){const t=up(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fp(a,e){let t;switch(e){case fc:t="Linear";break;case pc:t="Reinhard";break;case mc:t="OptimizedCineon";break;case vc:t="ACESFilmic";break;case gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function mp(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=a.getActiveAttrib(e,r),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function tr(a){return a!==""}function mo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vo(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Us(a){return a.replace(gp,_p)}function _p(a,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Us(t)}const xp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(a){return a.replace(xp,yp)}function yp(a,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function _o(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ep(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ni:case Di:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sp(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Hs:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case dc:e="ENVMAP_BLENDING_ADD";break}return e}function wp(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bp(a,e,t,n){const r=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Mp(t),h=Ep(t),u=Sp(t),c=Tp(t),d=wp(t),f=t.isWebGL2?"":pp(t),v=mp(i),g=r.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=[f,v].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[_o(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[f,_o(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?it.tonemapping_pars_fragment:"",t.toneMapping!==wn?fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,dp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),s=Us(s),s=mo(s,t),s=vo(s,t),o=Us(o),o=mo(o,t),o=vo(o,t),s=go(s),o=go(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+s,x=_+p+o,M=fo(r,r.VERTEX_SHADER,y),C=fo(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,M),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),a.debug.checkShaderErrors){const E=r.getProgramInfoLog(g).trim(),S=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(C).trim();let V=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,g,M,C);else{const X=po(r,M,"vertex"),q=po(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+X+`
`+q)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(S===""||D==="")&&(I=!1);I&&(this.diagnostics={runnable:V,programLog:E,vertexShader:{log:S,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(M),r.deleteShader(C);let B;this.getUniforms=function(){return B===void 0&&(B=new Hr(r,g)),B};let F;return this.getAttributes=function(){return F===void 0&&(F=vp(r,g)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=cp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let Ap=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}}class Cp{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}}function Lp(a,e,t,n,r,i,s){const o=new dl,l=new Rp,h=[],u=r.isWebGL2,c=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function m(E,S,D,V,I){const X=V.fog,q=I.geometry,ne=E.isMeshStandardMaterial?V.environment:null,O=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),U=O&&O.mapping===kr?O.image.height:null,J=v[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,H=Y!==void 0?Y.length:0;let W=0;q.morphAttributes.position!==void 0&&(W=1),q.morphAttributes.normal!==void 0&&(W=2),q.morphAttributes.color!==void 0&&(W=3);let b,A,R,G;if(J){const at=un[J];b=at.vertexShader,A=at.fragmentShader}else b=E.vertexShader,A=E.fragmentShader,l.update(E),R=l.getVertexShaderID(E),G=l.getFragmentShaderID(E);const P=a.getRenderTarget(),te=I.isInstancedMesh===!0,K=!!E.map,$=!!E.matcap,re=!!O,be=!!E.aoMap,pe=!!E.lightMap,xe=!!E.bumpMap,he=!!E.normalMap,ge=!!E.displacementMap,ke=!!E.emissiveMap,Be=!!E.metalnessMap,Ge=!!E.roughnessMap,we=E.clearcoat>0,Ye=E.iridescence>0,N=E.sheen>0,w=E.transmission>0,ie=we&&!!E.clearcoatMap,de=we&&!!E.clearcoatNormalMap,_e=we&&!!E.clearcoatRoughnessMap,ye=Ye&&!!E.iridescenceMap,k=Ye&&!!E.iridescenceThicknessMap,me=N&&!!E.sheenColorMap,se=N&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Ue=!!E.specularColorMap,Oe=!!E.specularIntensityMap,Pe=w&&!!E.transmissionMap,Ve=w&&!!E.thicknessMap,We=!!E.gradientMap,je=!!E.alphaMap,ht=E.alphaTest>0,Z=!!E.extensions,ue=!!q.attributes.uv1,Ee=!!q.attributes.uv2,Re=!!q.attributes.uv3;return{isWebGL2:u,shaderID:J,shaderName:E.type,vertexShader:b,fragmentShader:A,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,instancing:te,instancingColor:te&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:P===null?a.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,map:K,matcap:$,envMap:re,envMapMode:re&&O.mapping,envMapCubeUVHeight:U,aoMap:be,lightMap:pe,bumpMap:xe,normalMap:he,displacementMap:d&&ge,emissiveMap:ke,normalMapObjectSpace:he&&E.normalMapType===Bc,normalMapTangentSpace:he&&E.normalMapType===Gs,metalnessMap:Be,roughnessMap:Ge,clearcoat:we,clearcoatMap:ie,clearcoatNormalMap:de,clearcoatRoughnessMap:_e,iridescence:Ye,iridescenceMap:ye,iridescenceThicknessMap:k,sheen:N,sheenColorMap:me,sheenRoughnessMap:se,specularMap:Ce,specularColorMap:Ue,specularIntensityMap:Oe,transmission:w,transmissionMap:Pe,thicknessMap:Ve,gradientMap:We,opaque:E.transparent===!1&&E.blending===Ri,alphaMap:je,alphaTest:ht,combine:E.combine,mapUv:K&&g(E.map.channel),aoMapUv:be&&g(E.aoMap.channel),lightMapUv:pe&&g(E.lightMap.channel),bumpMapUv:xe&&g(E.bumpMap.channel),normalMapUv:he&&g(E.normalMap.channel),displacementMapUv:ge&&g(E.displacementMap.channel),emissiveMapUv:ke&&g(E.emissiveMap.channel),metalnessMapUv:Be&&g(E.metalnessMap.channel),roughnessMapUv:Ge&&g(E.roughnessMap.channel),clearcoatMapUv:ie&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:k&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(E.sheenRoughnessMap.channel),specularMapUv:Ce&&g(E.specularMap.channel),specularColorMapUv:Ue&&g(E.specularColorMap.channel),specularIntensityMapUv:Oe&&g(E.specularIntensityMap.channel),transmissionMapUv:Pe&&g(E.transmissionMap.channel),thicknessMapUv:Ve&&g(E.thicknessMap.channel),alphaMapUv:je&&g(E.alphaMap.channel),vertexTangents:he&&!!q.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Ee,vertexUv3s:Re,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(K||je),fog:!!X,useFog:E.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:E.toneMapped?a.toneMapping:wn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===dn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Z&&E.extensions.derivatives===!0,extensionFragDepth:Z&&E.extensions.fragDepth===!0,extensionDrawBuffers:Z&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(a.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),E.push(o.mask)}function x(E){const S=v[E.type];let D;if(S){const V=un[S];D=_h.clone(V.uniforms)}else D=E.uniforms;return D}function M(E,S){let D;for(let V=0,I=h.length;V<I;V++){const X=h[V];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new bp(a,S,E,i),h.push(D)),D}function C(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function B(E){l.remove(E)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:B,programs:h,dispose:F}}function Pp(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function n(i,s,o){a.get(i)[s]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ip(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function xo(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function yo(){const a=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function s(c,d,f,v,g,m){let p=a[e];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},a[e]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),e++,p}function o(c,d,f,v,g,m){const p=s(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(c,d,f,v,g,m){const p=s(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function h(c,d){t.length>1&&t.sort(c||Ip),n.length>1&&n.sort(d||xo),r.length>1&&r.sort(d||xo)}function u(){for(let c=e,d=a.length;c<d;c++){const f=a[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:o,unshift:l,finish:u,sort:h}}function Np(){let a=new WeakMap;function e(n,r){const i=a.get(n);let s;return i===void 0?(s=new yo,a.set(n,[s])):r>=i.length?(s=new yo,i.push(s)):s=i[r],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Dp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new et};break;case"SpotLight":t={position:new ee,direction:new ee,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=t,t}}}function Up(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Fp=0;function Bp(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Op(a,e){const t=new Dp,n=Up(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new ee);const i=new ee,s=new st,o=new st;function l(u,c){let d=0,f=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let g=0,m=0,p=0,_=0,y=0,x=0,M=0,C=0,B=0,F=0;u.sort(Bp);const E=c===!0?Math.PI:1;for(let D=0,V=u.length;D<V;D++){const I=u[D],X=I.color,q=I.intensity,ne=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=X.r*q*E,f+=X.g*q*E,v+=X.b*q*E;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],q);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const J=I.shadow,Y=n.get(I);Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.directionalShadow[g]=Y,r.directionalShadowMap[g]=O,r.directionalShadowMatrix[g]=I.shadow.matrix,x++}r.directional[g]=U,g++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(X).multiplyScalar(q*E),U.distance=ne,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[p]=U;const J=I.shadow;if(I.map&&(r.spotLightMap[B]=I.map,B++,J.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[p]=J.matrix,I.castShadow){const Y=n.get(I);Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=O,C++}p++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(X).multiplyScalar(q),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=U,_++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*E),U.distance=I.distance,U.decay=I.decay,I.castShadow){const J=I.shadow,Y=n.get(I);Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=I.shadow.matrix,M++}r.point[m]=U,m++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(q*E),U.groundColor.copy(I.groundColor).multiplyScalar(q*E),r.hemi[y]=U,y++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=v;const S=r.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==_||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==C||S.numSpotMaps!==B)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=_,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,S.directionalLength=g,S.pointLength=m,S.spotLength=p,S.rectAreaLength=_,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=C,S.numSpotMaps=B,r.version=Fp++)}function h(u,c){let d=0,f=0,v=0,g=0,m=0;const p=c.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(x.isSpotLight){const M=r.spot[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=r.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:r}}function Mo(a,e){const t=new Op(a,e),n=[],r=[];function i(){n.length=0,r.length=0}function s(c){n.push(c)}function o(c){r.push(c)}function l(c){t.setup(n,c)}function h(c){t.setupView(n,c)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:h,pushLight:s,pushShadow:o}}function zp(a,e){let t=new WeakMap;function n(i,s=0){const o=t.get(i);let l;return o===void 0?(l=new Mo(a,e),t.set(i,[l])):s>=o.length?(l=new Mo(a,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vp extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hp extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wp(a,e,t){let n=new Xs;const r=new Je,i=new Je,s=new vt,o=new Vp({depthPacking:Fc}),l=new Hp,h={},u=t.maxTextureSize,c={[bn]:kt,[kt]:bn,[dn]:dn},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Gp,fragmentShader:kp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new jt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let p=this.type;this.render=function(M,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const F=a.getRenderTarget(),E=a.getActiveCubeFace(),S=a.getActiveMipmapLevel(),D=a.state;D.setBlending(Bn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=p!==Sn&&this.type===Sn,I=p===Sn&&this.type!==Sn;for(let X=0,q=M.length;X<q;X++){const ne=M[X],O=ne.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();if(r.multiply(U),i.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(i.x=Math.floor(u/U.x),r.x=i.x*U.x,O.mapSize.x=i.x),r.y>u&&(i.y=Math.floor(u/U.y),r.y=i.y*U.y,O.mapSize.y=i.y)),O.map===null||V===!0||I===!0){const Y=this.type!==Sn?{minFilter:At,magFilter:At}:{};O.map!==null&&O.map.dispose(),O.map=new ei(r.x,r.y,Y),O.map.texture.name=ne.name+".shadowMap",O.camera.updateProjectionMatrix()}a.setRenderTarget(O.map),a.clear();const J=O.getViewportCount();for(let Y=0;Y<J;Y++){const H=O.getViewport(Y);s.set(i.x*H.x,i.y*H.y,i.x*H.z,i.y*H.w),D.viewport(s),O.updateMatrices(ne,Y),n=O.getFrustum(),x(C,B,O.camera,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Sn&&_(O,B),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(F,E,S)};function _(M,C){const B=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ei(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(C,null,B,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(C,null,B,f,g,null)}function y(M,C,B,F){let E=null;const S=B.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)E=S;else if(E=B.isPointLight===!0?l:o,a.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=E.uuid,V=C.uuid;let I=h[D];I===void 0&&(I={},h[D]=I);let X=I[V];X===void 0&&(X=E.clone(),I[V]=X),E=X}if(E.visible=C.visible,E.wireframe=C.wireframe,F===Sn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:c[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=a.properties.get(E);D.light=B}return E}function x(M,C,B,F,E){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Sn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld);const V=e.update(M),I=M.material;if(Array.isArray(I)){const X=V.groups;for(let q=0,ne=X.length;q<ne;q++){const O=X[q],U=I[O.materialIndex];if(U&&U.visible){const J=y(M,U,F,E);a.renderBufferDirect(B,null,V,J,M,O)}}}else if(I.visible){const X=y(M,I,F,E);a.renderBufferDirect(B,null,V,X,M,null)}}const D=M.children;for(let V=0,I=D.length;V<I;V++)x(D[V],C,B,F,E)}}function Xp(a,e,t){const n=t.isWebGL2;function r(){let Z=!1;const ue=new vt;let Ee=null;const Re=new vt(0,0,0,0);return{setMask:function(He){Ee!==He&&!Z&&(a.colorMask(He,He,He,He),Ee=He)},setLocked:function(He){Z=He},setClear:function(He,at,ot,_t,Ft){Ft===!0&&(He*=_t,at*=_t,ot*=_t),ue.set(He,at,ot,_t),Re.equals(ue)===!1&&(a.clearColor(He,at,ot,_t),Re.copy(ue))},reset:function(){Z=!1,Ee=null,Re.set(-1,0,0,0)}}}function i(){let Z=!1,ue=null,Ee=null,Re=null;return{setTest:function(He){He?P(a.DEPTH_TEST):te(a.DEPTH_TEST)},setMask:function(He){ue!==He&&!Z&&(a.depthMask(He),ue=He)},setFunc:function(He){if(Ee!==He){switch(He){case rc:a.depthFunc(a.NEVER);break;case sc:a.depthFunc(a.ALWAYS);break;case ac:a.depthFunc(a.LESS);break;case As:a.depthFunc(a.LEQUAL);break;case oc:a.depthFunc(a.EQUAL);break;case lc:a.depthFunc(a.GEQUAL);break;case cc:a.depthFunc(a.GREATER);break;case hc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ee=He}},setLocked:function(He){Z=He},setClear:function(He){Re!==He&&(a.clearDepth(He),Re=He)},reset:function(){Z=!1,ue=null,Ee=null,Re=null}}}function s(){let Z=!1,ue=null,Ee=null,Re=null,He=null,at=null,ot=null,_t=null,Ft=null;return{setTest:function(tt){Z||(tt?P(a.STENCIL_TEST):te(a.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!Z&&(a.stencilMask(tt),ue=tt)},setFunc:function(tt,ae,fe){(Ee!==tt||Re!==ae||He!==fe)&&(a.stencilFunc(tt,ae,fe),Ee=tt,Re=ae,He=fe)},setOp:function(tt,ae,fe){(at!==tt||ot!==ae||_t!==fe)&&(a.stencilOp(tt,ae,fe),at=tt,ot=ae,_t=fe)},setLocked:function(tt){Z=tt},setClear:function(tt){Ft!==tt&&(a.clearStencil(tt),Ft=tt)},reset:function(){Z=!1,ue=null,Ee=null,Re=null,He=null,at=null,ot=null,_t=null,Ft=null}}}const o=new r,l=new i,h=new s,u=new WeakMap,c=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,M=null,C=null,B=null,F=null,E=!1,S=null,D=null,V=null,I=null,X=null;const q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,O=0;const U=a.getParameter(a.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),ne=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ne=O>=2);let J=null,Y={};const H=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),b=new vt().fromArray(H),A=new vt().fromArray(W);function R(Z,ue,Ee,Re){const He=new Uint8Array(4),at=a.createTexture();a.bindTexture(Z,at),a.texParameteri(Z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ot=0;ot<Ee;ot++)n&&(Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY)?a.texImage3D(ue,0,a.RGBA,1,1,Re,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(ue+ot,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return at}const G={};G[a.TEXTURE_2D]=R(a.TEXTURE_2D,a.TEXTURE_2D,1),G[a.TEXTURE_CUBE_MAP]=R(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(G[a.TEXTURE_2D_ARRAY]=R(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),G[a.TEXTURE_3D]=R(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),P(a.DEPTH_TEST),l.setFunc(As),ge(!1),ke(ra),P(a.CULL_FACE),xe(Bn);function P(Z){d[Z]!==!0&&(a.enable(Z),d[Z]=!0)}function te(Z){d[Z]!==!1&&(a.disable(Z),d[Z]=!1)}function K(Z,ue){return f[Z]!==ue?(a.bindFramebuffer(Z,ue),f[Z]=ue,n&&(Z===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ue),Z===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ue)),!0):!1}function $(Z,ue){let Ee=g,Re=!1;if(Z)if(Ee=v.get(ue),Ee===void 0&&(Ee=[],v.set(ue,Ee)),Z.isWebGLMultipleRenderTargets){const He=Z.texture;if(Ee.length!==He.length||Ee[0]!==a.COLOR_ATTACHMENT0){for(let at=0,ot=He.length;at<ot;at++)Ee[at]=a.COLOR_ATTACHMENT0+at;Ee.length=He.length,Re=!0}}else Ee[0]!==a.COLOR_ATTACHMENT0&&(Ee[0]=a.COLOR_ATTACHMENT0,Re=!0);else Ee[0]!==a.BACK&&(Ee[0]=a.BACK,Re=!0);Re&&(t.isWebGL2?a.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function re(Z){return m!==Z?(a.useProgram(Z),m=Z,!0):!1}const be={[wi]:a.FUNC_ADD,[Yl]:a.FUNC_SUBTRACT,[jl]:a.FUNC_REVERSE_SUBTRACT};if(n)be[la]=a.MIN,be[ca]=a.MAX;else{const Z=e.get("EXT_blend_minmax");Z!==null&&(be[la]=Z.MIN_EXT,be[ca]=Z.MAX_EXT)}const pe={[Kl]:a.ZERO,[Zl]:a.ONE,[$l]:a.SRC_COLOR,[Jo]:a.SRC_ALPHA,[ic]:a.SRC_ALPHA_SATURATE,[tc]:a.DST_COLOR,[Ql]:a.DST_ALPHA,[Jl]:a.ONE_MINUS_SRC_COLOR,[Qo]:a.ONE_MINUS_SRC_ALPHA,[nc]:a.ONE_MINUS_DST_COLOR,[ec]:a.ONE_MINUS_DST_ALPHA};function xe(Z,ue,Ee,Re,He,at,ot,_t){if(Z===Bn){p===!0&&(te(a.BLEND),p=!1);return}if(p===!1&&(P(a.BLEND),p=!0),Z!==ql){if(Z!==_||_t!==E){if((y!==wi||C!==wi)&&(a.blendEquation(a.FUNC_ADD),y=wi,C=wi),_t)switch(Z){case Ri:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sa:a.blendFunc(a.ONE,a.ONE);break;case aa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case oa:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ri:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case sa:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case aa:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case oa:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}x=null,M=null,B=null,F=null,_=Z,E=_t}return}He=He||ue,at=at||Ee,ot=ot||Re,(ue!==y||He!==C)&&(a.blendEquationSeparate(be[ue],be[He]),y=ue,C=He),(Ee!==x||Re!==M||at!==B||ot!==F)&&(a.blendFuncSeparate(pe[Ee],pe[Re],pe[at],pe[ot]),x=Ee,M=Re,B=at,F=ot),_=Z,E=!1}function he(Z,ue){Z.side===dn?te(a.CULL_FACE):P(a.CULL_FACE);let Ee=Z.side===kt;ue&&(Ee=!Ee),ge(Ee),Z.blending===Ri&&Z.transparent===!1?xe(Bn):xe(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.premultipliedAlpha),l.setFunc(Z.depthFunc),l.setTest(Z.depthTest),l.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const Re=Z.stencilWrite;h.setTest(Re),Re&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ge(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?P(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function ge(Z){S!==Z&&(Z?a.frontFace(a.CW):a.frontFace(a.CCW),S=Z)}function ke(Z){Z!==kl?(P(a.CULL_FACE),Z!==D&&(Z===ra?a.cullFace(a.BACK):Z===Wl?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):te(a.CULL_FACE),D=Z}function Be(Z){Z!==V&&(ne&&a.lineWidth(Z),V=Z)}function Ge(Z,ue,Ee){Z?(P(a.POLYGON_OFFSET_FILL),(I!==ue||X!==Ee)&&(a.polygonOffset(ue,Ee),I=ue,X=Ee)):te(a.POLYGON_OFFSET_FILL)}function we(Z){Z?P(a.SCISSOR_TEST):te(a.SCISSOR_TEST)}function Ye(Z){Z===void 0&&(Z=a.TEXTURE0+q-1),J!==Z&&(a.activeTexture(Z),J=Z)}function N(Z,ue,Ee){Ee===void 0&&(J===null?Ee=a.TEXTURE0+q-1:Ee=J);let Re=Y[Ee];Re===void 0&&(Re={type:void 0,texture:void 0},Y[Ee]=Re),(Re.type!==Z||Re.texture!==ue)&&(J!==Ee&&(a.activeTexture(Ee),J=Ee),a.bindTexture(Z,ue||G[Z]),Re.type=Z,Re.texture=ue)}function w(){const Z=Y[J];Z!==void 0&&Z.type!==void 0&&(a.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ie(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(){try{a.compressedTexImage3D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _e(){try{a.texSubImage2D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ye(){try{a.texSubImage3D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function k(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function se(){try{a.texStorage2D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ce(){try{a.texStorage3D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ue(){try{a.texImage2D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Oe(){try{a.texImage3D.apply(a,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pe(Z){b.equals(Z)===!1&&(a.scissor(Z.x,Z.y,Z.z,Z.w),b.copy(Z))}function Ve(Z){A.equals(Z)===!1&&(a.viewport(Z.x,Z.y,Z.z,Z.w),A.copy(Z))}function We(Z,ue){let Ee=c.get(ue);Ee===void 0&&(Ee=new WeakMap,c.set(ue,Ee));let Re=Ee.get(Z);Re===void 0&&(Re=a.getUniformBlockIndex(ue,Z.name),Ee.set(Z,Re))}function je(Z,ue){const Re=c.get(ue).get(Z);u.get(ue)!==Re&&(a.uniformBlockBinding(ue,Re,Z.__bindingPointIndex),u.set(ue,Re))}function ht(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},J=null,Y={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,M=null,C=null,B=null,F=null,E=!1,S=null,D=null,V=null,I=null,X=null,b.set(0,0,a.canvas.width,a.canvas.height),A.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:P,disable:te,bindFramebuffer:K,drawBuffers:$,useProgram:re,setBlending:xe,setMaterial:he,setFlipSided:ge,setCullFace:ke,setLineWidth:Be,setPolygonOffset:Ge,setScissorTest:we,activeTexture:Ye,bindTexture:N,unbindTexture:w,compressedTexImage2D:ie,compressedTexImage3D:de,texImage2D:Ue,texImage3D:Oe,updateUBOMapping:We,uniformBlockBinding:je,texStorage2D:se,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:ye,compressedTexSubImage2D:k,compressedTexSubImage3D:me,scissor:Pe,viewport:Ve,reset:ht}}function qp(a,e,t,n,r,i,s){const o=r.isWebGL2,l=r.maxTextures,h=r.maxCubemapSize,u=r.maxTextureSize,c=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,w){return p?new OffscreenCanvas(N,w):or("canvas")}function y(N,w,ie,de){let _e=1;if((N.width>de||N.height>de)&&(_e=de/Math.max(N.width,N.height)),_e<1||w===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const ye=w?ol:Math.floor,k=ye(_e*N.width),me=ye(_e*N.height);g===void 0&&(g=_(k,me));const se=ie?_(k,me):g;return se.width=k,se.height=me,se.getContext("2d").drawImage(N,0,0,k,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+k+"x"+me+")."),se}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function x(N){return Ds(N.width)&&Ds(N.height)}function M(N){return o?!1:N.wrapS!==Jt||N.wrapT!==Jt||N.minFilter!==At&&N.minFilter!==Gt}function C(N,w){return N.generateMipmaps&&w&&N.minFilter!==At&&N.minFilter!==Gt}function B(N){a.generateMipmap(N)}function F(N,w,ie,de,_e=!1){if(o===!1)return w;if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye=w;return w===a.RED&&(ie===a.FLOAT&&(ye=a.R32F),ie===a.HALF_FLOAT&&(ye=a.R16F),ie===a.UNSIGNED_BYTE&&(ye=a.R8)),w===a.RG&&(ie===a.FLOAT&&(ye=a.RG32F),ie===a.HALF_FLOAT&&(ye=a.RG16F),ie===a.UNSIGNED_BYTE&&(ye=a.RG8)),w===a.RGBA&&(ie===a.FLOAT&&(ye=a.RGBA32F),ie===a.HALF_FLOAT&&(ye=a.RGBA16F),ie===a.UNSIGNED_BYTE&&(ye=de===$e&&_e===!1?a.SRGB8_ALPHA8:a.RGBA8),ie===a.UNSIGNED_SHORT_4_4_4_4&&(ye=a.RGBA4),ie===a.UNSIGNED_SHORT_5_5_5_1&&(ye=a.RGB5_A1)),(ye===a.R16F||ye===a.R32F||ye===a.RG16F||ye===a.RG32F||ye===a.RGBA16F||ye===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function E(N,w,ie){return C(N,ie)===!0||N.isFramebufferTexture&&N.minFilter!==At&&N.minFilter!==Gt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function S(N){return N===At||N===Ls||N===Vr?a.NEAREST:a.LINEAR}function D(N){const w=N.target;w.removeEventListener("dispose",D),I(w),w.isVideoTexture&&v.delete(w)}function V(N){const w=N.target;w.removeEventListener("dispose",V),q(w)}function I(N){const w=n.get(N);if(w.__webglInit===void 0)return;const ie=N.source,de=m.get(ie);if(de){const _e=de[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&X(N),Object.keys(de).length===0&&m.delete(ie)}n.remove(N)}function X(N){const w=n.get(N);a.deleteTexture(w.__webglTexture);const ie=N.source,de=m.get(ie);delete de[w.__cacheKey],s.memory.textures--}function q(N){const w=N.texture,ie=n.get(N),de=n.get(w);if(de.__webglTexture!==void 0&&(a.deleteTexture(de.__webglTexture),s.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)a.deleteFramebuffer(ie.__webglFramebuffer[_e]),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer[_e]);else{if(a.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let _e=0;_e<ie.__webglColorRenderbuffer.length;_e++)ie.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(ie.__webglColorRenderbuffer[_e]);ie.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _e=0,ye=w.length;_e<ye;_e++){const k=n.get(w[_e]);k.__webglTexture&&(a.deleteTexture(k.__webglTexture),s.memory.textures--),n.remove(w[_e])}n.remove(w),n.remove(N)}let ne=0;function O(){ne=0}function U(){const N=ne;return N>=l&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l),ne+=1,N}function J(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function Y(N,w){const ie=n.get(N);if(N.isVideoTexture&&we(N),N.isRenderTargetTexture===!1&&N.version>0&&ie.__version!==N.version){const de=N.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ie,N,w);return}}t.bindTexture(a.TEXTURE_2D,ie.__webglTexture,a.TEXTURE0+w)}function H(N,w){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){te(ie,N,w);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ie.__webglTexture,a.TEXTURE0+w)}function W(N,w){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){te(ie,N,w);return}t.bindTexture(a.TEXTURE_3D,ie.__webglTexture,a.TEXTURE0+w)}function b(N,w){const ie=n.get(N);if(N.version>0&&ie.__version!==N.version){K(ie,N,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture,a.TEXTURE0+w)}const A={[Ui]:a.REPEAT,[Jt]:a.CLAMP_TO_EDGE,[Gr]:a.MIRRORED_REPEAT},R={[At]:a.NEAREST,[Ls]:a.NEAREST_MIPMAP_NEAREST,[Vr]:a.NEAREST_MIPMAP_LINEAR,[Gt]:a.LINEAR,[tl]:a.LINEAR_MIPMAP_NEAREST,[Jn]:a.LINEAR_MIPMAP_LINEAR};function G(N,w,ie){if(ie?(a.texParameteri(N,a.TEXTURE_WRAP_S,A[w.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,A[w.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,A[w.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,R[w.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,R[w.minFilter])):(a.texParameteri(N,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(N,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(w.wrapS!==Jt||w.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(N,a.TEXTURE_MAG_FILTER,S(w.magFilter)),a.texParameteri(N,a.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==At&&w.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===At||w.minFilter!==Vr&&w.minFilter!==Jn||w.type===Fn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===sr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(N,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function P(N,w){let ie=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",D));const de=w.source;let _e=m.get(de);_e===void 0&&(_e={},m.set(de,_e));const ye=J(w);if(ye!==N.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,ie=!0),_e[ye].usedTimes++;const k=_e[N.__cacheKey];k!==void 0&&(_e[N.__cacheKey].usedTimes--,k.usedTimes===0&&X(w)),N.__cacheKey=ye,N.__webglTexture=_e[ye].texture}return ie}function te(N,w,ie){let de=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=a.TEXTURE_3D);const _e=P(N,w),ye=w.source;t.bindTexture(de,N.__webglTexture,a.TEXTURE0+ie);const k=n.get(ye);if(ye.version!==k.__version||_e===!0){t.activeTexture(a.TEXTURE0+ie),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const me=M(w)&&x(w.image)===!1;let se=y(w.image,me,!1,u);se=Ye(w,se);const Ce=x(se)||o,Ue=i.convert(w.format,w.colorSpace);let Oe=i.convert(w.type),Pe=F(w.internalFormat,Ue,Oe,w.colorSpace);G(de,w,Ce);let Ve;const We=w.mipmaps,je=o&&w.isVideoTexture!==!0,ht=k.__version===void 0||_e===!0,Z=E(w,se,Ce);if(w.isDepthTexture)Pe=a.DEPTH_COMPONENT,o?w.type===Fn?Pe=a.DEPTH_COMPONENT32F:w.type===qn?Pe=a.DEPTH_COMPONENT24:w.type===Ci?Pe=a.DEPTH24_STENCIL8:Pe=a.DEPTH_COMPONENT16:w.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Kn&&Pe===a.DEPTH_COMPONENT&&w.type!==nl&&w.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qn,Oe=i.convert(w.type)),w.format===Fi&&Pe===a.DEPTH_COMPONENT&&(Pe=a.DEPTH_STENCIL,w.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ci,Oe=i.convert(w.type))),ht&&(je?t.texStorage2D(a.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(a.TEXTURE_2D,0,Pe,se.width,se.height,0,Ue,Oe,null));else if(w.isDataTexture)if(We.length>0&&Ce){je&&ht&&t.texStorage2D(a.TEXTURE_2D,Z,Pe,We[0].width,We[0].height);for(let ue=0,Ee=We.length;ue<Ee;ue++)Ve=We[ue],je?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Ve.width,Ve.height,Ue,Oe,Ve.data):t.texImage2D(a.TEXTURE_2D,ue,Pe,Ve.width,Ve.height,0,Ue,Oe,Ve.data);w.generateMipmaps=!1}else je?(ht&&t.texStorage2D(a.TEXTURE_2D,Z,Pe,se.width,se.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,se.width,se.height,Ue,Oe,se.data)):t.texImage2D(a.TEXTURE_2D,0,Pe,se.width,se.height,0,Ue,Oe,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&ht&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Z,Pe,We[0].width,We[0].height,se.depth);for(let ue=0,Ee=We.length;ue<Ee;ue++)Ve=We[ue],w.format!==Qt?Ue!==null?je?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Ve.width,Ve.height,se.depth,Ue,Ve.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ue,Pe,Ve.width,Ve.height,se.depth,0,Ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(a.TEXTURE_2D_ARRAY,ue,0,0,0,Ve.width,Ve.height,se.depth,Ue,Oe,Ve.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ue,Pe,Ve.width,Ve.height,se.depth,0,Ue,Oe,Ve.data)}else{je&&ht&&t.texStorage2D(a.TEXTURE_2D,Z,Pe,We[0].width,We[0].height);for(let ue=0,Ee=We.length;ue<Ee;ue++)Ve=We[ue],w.format!==Qt?Ue!==null?je?t.compressedTexSubImage2D(a.TEXTURE_2D,ue,0,0,Ve.width,Ve.height,Ue,Ve.data):t.compressedTexImage2D(a.TEXTURE_2D,ue,Pe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Ve.width,Ve.height,Ue,Oe,Ve.data):t.texImage2D(a.TEXTURE_2D,ue,Pe,Ve.width,Ve.height,0,Ue,Oe,Ve.data)}else if(w.isDataArrayTexture)je?(ht&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Z,Pe,se.width,se.height,se.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ue,Oe,se.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,Ue,Oe,se.data);else if(w.isData3DTexture)je?(ht&&t.texStorage3D(a.TEXTURE_3D,Z,Pe,se.width,se.height,se.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ue,Oe,se.data)):t.texImage3D(a.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,Ue,Oe,se.data);else if(w.isFramebufferTexture){if(ht)if(je)t.texStorage2D(a.TEXTURE_2D,Z,Pe,se.width,se.height);else{let ue=se.width,Ee=se.height;for(let Re=0;Re<Z;Re++)t.texImage2D(a.TEXTURE_2D,Re,Pe,ue,Ee,0,Ue,Oe,null),ue>>=1,Ee>>=1}}else if(We.length>0&&Ce){je&&ht&&t.texStorage2D(a.TEXTURE_2D,Z,Pe,We[0].width,We[0].height);for(let ue=0,Ee=We.length;ue<Ee;ue++)Ve=We[ue],je?t.texSubImage2D(a.TEXTURE_2D,ue,0,0,Ue,Oe,Ve):t.texImage2D(a.TEXTURE_2D,ue,Pe,Ue,Oe,Ve);w.generateMipmaps=!1}else je?(ht&&t.texStorage2D(a.TEXTURE_2D,Z,Pe,se.width,se.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ue,Oe,se)):t.texImage2D(a.TEXTURE_2D,0,Pe,Ue,Oe,se);C(w,Ce)&&B(de),k.__version=ye.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function K(N,w,ie){if(w.image.length!==6)return;const de=P(N,w),_e=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+ie);const ye=n.get(_e);if(_e.version!==ye.__version||de===!0){t.activeTexture(a.TEXTURE0+ie),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const k=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,se=[];for(let ue=0;ue<6;ue++)!k&&!me?se[ue]=y(w.image[ue],!1,!0,h):se[ue]=me?w.image[ue].image:w.image[ue],se[ue]=Ye(w,se[ue]);const Ce=se[0],Ue=x(Ce)||o,Oe=i.convert(w.format,w.colorSpace),Pe=i.convert(w.type),Ve=F(w.internalFormat,Oe,Pe,w.colorSpace),We=o&&w.isVideoTexture!==!0,je=ye.__version===void 0||de===!0;let ht=E(w,Ce,Ue);G(a.TEXTURE_CUBE_MAP,w,Ue);let Z;if(k){We&&je&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ht,Ve,Ce.width,Ce.height);for(let ue=0;ue<6;ue++){Z=se[ue].mipmaps;for(let Ee=0;Ee<Z.length;Ee++){const Re=Z[Ee];w.format!==Qt?Oe!==null?We?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Re.width,Re.height,Oe,Re.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,Re.width,Re.height,Oe,Pe,Re.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,Ve,Re.width,Re.height,0,Oe,Pe,Re.data)}}}else{Z=w.mipmaps,We&&je&&(Z.length>0&&ht++,t.texStorage2D(a.TEXTURE_CUBE_MAP,ht,Ve,se[0].width,se[0].height));for(let ue=0;ue<6;ue++)if(me){We?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,se[ue].width,se[ue].height,Oe,Pe,se[ue].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ve,se[ue].width,se[ue].height,0,Oe,Pe,se[ue].data);for(let Ee=0;Ee<Z.length;Ee++){const He=Z[Ee].image[ue].image;We?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,He.width,He.height,Oe,Pe,He.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Ve,He.width,He.height,0,Oe,Pe,He.data)}}else{We?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Pe,se[ue]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ve,Oe,Pe,se[ue]);for(let Ee=0;Ee<Z.length;Ee++){const Re=Z[Ee];We?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,Oe,Pe,Re.image[ue]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,Ve,Oe,Pe,Re.image[ue])}}}C(w,Ue)&&B(a.TEXTURE_CUBE_MAP),ye.__version=_e.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function $(N,w,ie,de,_e){const ye=i.convert(ie.format,ie.colorSpace),k=i.convert(ie.type),me=F(ie.internalFormat,ye,k,ie.colorSpace);n.get(w).__hasExternalTextures||(_e===a.TEXTURE_3D||_e===a.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,me,w.width,w.height,w.depth,0,ye,k,null):t.texImage2D(_e,0,me,w.width,w.height,0,ye,k,null)),t.bindFramebuffer(a.FRAMEBUFFER,N),Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,_e,n.get(ie).__webglTexture,0,Be(w)):(_e===a.TEXTURE_2D||_e>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,_e,n.get(ie).__webglTexture,0),t.bindFramebuffer(a.FRAMEBUFFER,null)}function re(N,w,ie){if(a.bindRenderbuffer(a.RENDERBUFFER,N),w.depthBuffer&&!w.stencilBuffer){let de=a.DEPTH_COMPONENT16;if(ie||Ge(w)){const _e=w.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Fn?de=a.DEPTH_COMPONENT32F:_e.type===qn&&(de=a.DEPTH_COMPONENT24));const ye=Be(w);Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ye,de,w.width,w.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ye,de,w.width,w.height)}else a.renderbufferStorage(a.RENDERBUFFER,de,w.width,w.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,N)}else if(w.depthBuffer&&w.stencilBuffer){const de=Be(w);ie&&Ge(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,de,a.DEPTH24_STENCIL8,w.width,w.height):Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,de,a.DEPTH24_STENCIL8,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,N)}else{const de=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let _e=0;_e<de.length;_e++){const ye=de[_e],k=i.convert(ye.format,ye.colorSpace),me=i.convert(ye.type),se=F(ye.internalFormat,k,me,ye.colorSpace),Ce=Be(w);ie&&Ge(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,se,w.width,w.height):Ge(w)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,se,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,se,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function be(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Y(w.depthTexture,0);const de=n.get(w.depthTexture).__webglTexture,_e=Be(w);if(w.depthTexture.format===Kn)Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0,_e):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0);else if(w.depthTexture.format===Fi)Ge(w)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0,_e):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function pe(N){const w=n.get(N),ie=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,N)}else if(ie){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]=a.createRenderbuffer(),re(w.__webglDepthbuffer[de],N,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),re(w.__webglDepthbuffer,N,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function xe(N,w,ie){const de=n.get(N);w!==void 0&&$(de.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),ie!==void 0&&pe(N)}function he(N){const w=N.texture,ie=n.get(N),de=n.get(w);N.addEventListener("dispose",V),N.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=w.version,s.memory.textures++);const _e=N.isWebGLCubeRenderTarget===!0,ye=N.isWebGLMultipleRenderTargets===!0,k=x(N)||o;if(_e){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)ie.__webglFramebuffer[me]=a.createFramebuffer()}else{if(ie.__webglFramebuffer=a.createFramebuffer(),ye)if(r.drawBuffers){const me=N.texture;for(let se=0,Ce=me.length;se<Ce;se++){const Ue=n.get(me[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&N.samples>0&&Ge(N)===!1){const me=ye?w:[w];ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let se=0;se<me.length;se++){const Ce=me[se];ie.__webglColorRenderbuffer[se]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);const Ue=i.convert(Ce.format,Ce.colorSpace),Oe=i.convert(Ce.type),Pe=F(Ce.internalFormat,Ue,Oe,Ce.colorSpace,N.isXRRenderTarget===!0),Ve=Be(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,Pe,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+se,a.RENDERBUFFER,ie.__webglColorRenderbuffer[se])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),re(ie.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(_e){t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),G(a.TEXTURE_CUBE_MAP,w,k);for(let me=0;me<6;me++)$(ie.__webglFramebuffer[me],N,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me);C(w,k)&&B(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){const me=N.texture;for(let se=0,Ce=me.length;se<Ce;se++){const Ue=me[se],Oe=n.get(Ue);t.bindTexture(a.TEXTURE_2D,Oe.__webglTexture),G(a.TEXTURE_2D,Ue,k),$(ie.__webglFramebuffer,N,Ue,a.COLOR_ATTACHMENT0+se,a.TEXTURE_2D),C(Ue,k)&&B(a.TEXTURE_2D)}t.unbindTexture()}else{let me=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(o?me=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,de.__webglTexture),G(me,w,k),$(ie.__webglFramebuffer,N,w,a.COLOR_ATTACHMENT0,me),C(w,k)&&B(me),t.unbindTexture()}N.depthBuffer&&pe(N)}function ge(N){const w=x(N)||o,ie=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let de=0,_e=ie.length;de<_e;de++){const ye=ie[de];if(C(ye,w)){const k=N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,me=n.get(ye).__webglTexture;t.bindTexture(k,me),B(k),t.unbindTexture()}}}function ke(N){if(o&&N.samples>0&&Ge(N)===!1){const w=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ie=N.width,de=N.height;let _e=a.COLOR_BUFFER_BIT;const ye=[],k=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=n.get(N),se=N.isWebGLMultipleRenderTargets===!0;if(se)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){ye.push(a.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&ye.push(k);const Ue=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ue===!1&&(N.depthBuffer&&(_e|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&(_e|=a.STENCIL_BUFFER_BIT)),se&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]),Ue===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[k]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[k])),se){const Oe=n.get(w[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Oe,0)}a.blitFramebuffer(0,0,ie,de,0,0,ie,de,_e,a.NEAREST),f&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),se)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(a.FRAMEBUFFER,me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,me.__webglColorRenderbuffer[Ce]);const Ue=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Be(N){return Math.min(c,N.samples)}function Ge(N){const w=n.get(N);return o&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function we(N){const w=s.render.frame;v.get(N)!==w&&(v.set(N,w),N.update())}function Ye(N,w){const ie=N.colorSpace,de=N.format,_e=N.type;return N.isCompressedTexture===!0||N.format===Ns||ie!==fn&&ie!==$n&&(ie===$e?o===!1?e.has("EXT_sRGB")===!0&&de===Qt?(N.format=Ns,N.minFilter=Gt,N.generateMipmaps=!1):w=cl.sRGBToLinear(w):(de!==Qt||_e!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=b,this.rebindTextures=xe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ge}function Yp(a,e,t){const n=t.isWebGL2;function r(i,s=$n){let o;if(i===Qn)return a.UNSIGNED_BYTE;if(i===Mc)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return a.UNSIGNED_SHORT_5_5_5_1;if(i===_c)return a.BYTE;if(i===xc)return a.SHORT;if(i===nl)return a.UNSIGNED_SHORT;if(i===yc)return a.INT;if(i===qn)return a.UNSIGNED_INT;if(i===Fn)return a.FLOAT;if(i===sr)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===Sc)return a.ALPHA;if(i===Qt)return a.RGBA;if(i===Tc)return a.LUMINANCE;if(i===wc)return a.LUMINANCE_ALPHA;if(i===Kn)return a.DEPTH_COMPONENT;if(i===Fi)return a.DEPTH_STENCIL;if(i===Ns)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===bc)return a.RED;if(i===Ac)return a.RED_INTEGER;if(i===Rc)return a.RG;if(i===Cc)return a.RG_INTEGER;if(i===Lc)return a.RGBA_INTEGER;if(i===Yr||i===jr||i===Kr||i===Zr)if(s===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===ua||i===da||i===fa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ha)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ua)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===pa||i===ma)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===pa)return s===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ma)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===va||i===ga||i===_a||i===xa||i===ya||i===Ma||i===Ea||i===Sa||i===Ta||i===wa||i===ba||i===Aa||i===Ra||i===Ca)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===va)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ga)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_a)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xa)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ea)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sa)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wa)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ba)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ra)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ca)return s===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$r)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===$r)return s===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(i===Ic||i===La||i===Pa||i===Ia)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===$r)return o.COMPRESSED_RED_RGTC1_EXT;if(i===La)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ci?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:r}}class jp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,s=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zp extends It{constructor(e,t,n,r,i,s,o,l,h,u){if(u=u!==void 0?u:Kn,u!==Kn&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Kn&&(n=qn),n===void 0&&u===Fi&&(n=Ci),super(null,r,i,s,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class $p extends ii{constructor(e,t){super();const n=this;let r=null,i=1,s=null,o="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new Set,M=new Map,C=new zt;C.layers.enable(1),C.viewport=new vt;const B=new zt;B.layers.enable(2),B.viewport=new vt;const F=[C,B],E=new jp;E.layers.enable(1),E.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let A=_[b];return A===void 0&&(A=new ys,_[b]=A),A.getTargetRaySpace()},this.getControllerGrip=function(b){let A=_[b];return A===void 0&&(A=new ys,_[b]=A),A.getGripSpace()},this.getHand=function(b){let A=_[b];return A===void 0&&(A=new ys,_[b]=A),A.getHandSpace()};function V(b){const A=y.indexOf(b.inputSource);if(A===-1)return;const R=_[A];R!==void 0&&(R.update(b.inputSource,b.frame,h||s),R.dispatchEvent({type:b.type,data:b.inputSource}))}function I(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",X);for(let b=0;b<_.length;b++){const A=y[b];A!==null&&(y[b]=null,_[b].disconnect(A))}S=null,D=null,e.setRenderTarget(m),f=null,d=null,c=null,r=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){i=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(b){h=b},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",I),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const A={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,A),r.updateRenderState({baseLayer:f}),p=new ei(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let A=null,R=null,G=null;g.depth&&(G=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,A=g.stencil?Fi:Kn,R=g.stencil?Ci:qn);const P={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:i};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(P),r.updateRenderState({layers:[d]}),p=new ei(d.textureWidth,d.textureHeight,{format:Qt,type:Qn,depthTexture:new Zp(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,A),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const te=e.properties.get(p);te.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await r.requestReferenceSpace(o),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(b){for(let A=0;A<b.removed.length;A++){const R=b.removed[A],G=y.indexOf(R);G>=0&&(y[G]=null,_[G].disconnect(R))}for(let A=0;A<b.added.length;A++){const R=b.added[A];let G=y.indexOf(R);if(G===-1){for(let te=0;te<_.length;te++)if(te>=y.length){y.push(R),G=te;break}else if(y[te]===null){y[te]=R,G=te;break}if(G===-1)break}const P=_[G];P&&P.connect(R)}}const q=new ee,ne=new ee;function O(b,A,R){q.setFromMatrixPosition(A.matrixWorld),ne.setFromMatrixPosition(R.matrixWorld);const G=q.distanceTo(ne),P=A.projectionMatrix.elements,te=R.projectionMatrix.elements,K=P[14]/(P[10]-1),$=P[14]/(P[10]+1),re=(P[9]+1)/P[5],be=(P[9]-1)/P[5],pe=(P[8]-1)/P[0],xe=(te[8]+1)/te[0],he=K*pe,ge=K*xe,ke=G/(-pe+xe),Be=ke*-pe;A.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(Be),b.translateZ(ke),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Ge=K+ke,we=$+ke,Ye=he-Be,N=ge+(G-Be),w=re*$/we*Ge,ie=be*$/we*Ge;b.projectionMatrix.makePerspective(Ye,N,w,ie,Ge,we),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function U(b,A){A===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(A.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;E.near=B.near=C.near=b.near,E.far=B.far=C.far=b.far,(S!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,D=E.far);const A=b.parent,R=E.cameras;U(E,A);for(let G=0;G<R.length;G++)U(R[G],A);R.length===2?O(E,C,B):E.projectionMatrix.copy(C.projectionMatrix),J(b,E,A)};function J(b,A,R){R===null?b.matrix.copy(A.matrixWorld):(b.matrix.copy(R.matrixWorld),b.matrix.invert(),b.matrix.multiply(A.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0);const G=b.children;for(let P=0,te=G.length;P<te;P++)G[P].updateMatrixWorld(!0);b.projectionMatrix.copy(A.projectionMatrix),b.projectionMatrixInverse.copy(A.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Oi*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(b){l=b,d!==null&&(d.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)},this.getPlanes=function(){return x};let Y=null;function H(b,A){if(u=A.getViewerPose(h||s),v=A,u!==null){const R=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let G=!1;R.length!==E.cameras.length&&(E.cameras.length=0,G=!0);for(let P=0;P<R.length;P++){const te=R[P];let K=null;if(f!==null)K=f.getViewport(te);else{const re=c.getViewSubImage(d,te);K=re.viewport,P===0&&(e.setRenderTargetTextures(p,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(p))}let $=F[P];$===void 0&&($=new zt,$.layers.enable(P),$.viewport=new vt,F[P]=$),$.matrix.fromArray(te.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(te.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),P===0&&(E.matrix.copy($.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),G===!0&&E.cameras.push($)}}for(let R=0;R<_.length;R++){const G=y[R],P=_[R];G!==null&&P!==void 0&&P.update(G,A,h||s)}if(Y&&Y(b,A),A.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:A.detectedPlanes});let R=null;for(const G of x)A.detectedPlanes.has(G)||(R===null&&(R=[]),R.push(G));if(R!==null)for(const G of R)x.delete(G),M.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of A.detectedPlanes)if(!x.has(G))x.add(G),M.set(G,A.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const P=M.get(G);G.lastChangedTime>P&&(M.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}v=null}const W=new xl;W.setAnimationLoop(H),this.setAnimationLoop=function(b){Y=b},this.dispose=function(){}}}function Jp(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vl(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),c(m,p)):p.isMeshPhongMaterial?(i(m,p),u(m,p)):p.isMeshStandardMaterial?(i(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(i(m,p),v(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Qp(a,e,t,n){let r={},i={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=r[_.id];x===void 0&&(v(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(_,M);const C=e.render.frame;i[_.id]!==C&&(d(_),i[_.id]=C)}function u(_){const y=c();_.__bindingPointIndex=y;const x=a.createBuffer(),M=_.__size,C=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,M,C),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,x),x}function c(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,M=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let C=0,B=x.length;C<B;C++){const F=x[C];if(f(F,C,M)===!0){const E=F.__offset,S=Array.isArray(F.value)?F.value:[F.value];let D=0;for(let V=0;V<S.length;V++){const I=S[V],X=g(I);typeof I=="number"?(F.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,E+D,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=I.elements[0],F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=I.elements[0],F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=I.elements[0]):(I.toArray(F.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,E,F.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(_,y,x){const M=_.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const C=Array.isArray(M)?M:[M],B=[];for(let F=0;F<C.length;F++)B.push(C[F].clone());x[y]=B}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const C=Array.isArray(x[y])?x[y]:[x[y]],B=Array.isArray(M)?M:[M];for(let F=0;F<C.length;F++){const E=C[F];if(E.equals(B[F])===!1)return E.copy(B[F]),!0}}return!1}function v(_){const y=_.uniforms;let x=0;const M=16;let C=0;for(let B=0,F=y.length;B<F;B++){const E=y[B],S={boundary:0,storage:0},D=Array.isArray(E.value)?E.value:[E.value];for(let V=0,I=D.length;V<I;V++){const X=D[V],q=g(X);S.boundary+=q.boundary,S.storage+=q.storage}if(E.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,B>0){C=x%M;const V=M-C;C!==0&&V-S.boundary<0&&(x+=M-C,E.__offset=x)}x+=S.storage}return C=x%M,C>0&&(x+=M-C),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(r[y.id]),delete r[y.id],delete i[y.id]}function p(){for(const _ in r)a.deleteBuffer(r[_]);s=[],r={},i={}}return{bind:l,update:h,dispose:p}}function em(){const a=or("canvas");return a.style.display="block",a}class Tl{constructor(e={}){const{canvas:t=em(),context:n=null,depth:r=!0,stencil:i=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;let f=null,v=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=$e,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const p=this;let _=!1,y=0,x=0,M=null,C=-1,B=null;const F=new vt,E=new vt;let S=null,D=t.width,V=t.height,I=1,X=null,q=null;const ne=new vt(0,0,D,V),O=new vt(0,0,D,V);let U=!1;const J=new Xs;let Y=!1,H=!1,W=null;const b=new st,A=new ee,R={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return M===null?I:1}let P=n;function te(T,L){for(let j=0;j<T.length;j++){const z=T[j],Q=t.getContext(z,L);if(Q!==null)return Q}return null}try{const T={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",je,!1),P===null){const L=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&L.shift(),P=te(L,T),P===null)throw te(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,$,re,be,pe,xe,he,ge,ke,Be,Ge,we,Ye,N,w,ie,de,_e,ye,k,me,se,Ce,Ue;function Oe(){K=new uf(P),$=new sf(P,K,e),K.init($),se=new Yp(P,K,$),re=new Xp(P,K,$),be=new pf(P),pe=new Pp,xe=new qp(P,K,re,pe,$,se,be),he=new of(p),ge=new hf(p),ke=new wh(P,$),Ce=new nf(P,K,ke,$),Be=new df(P,ke,be,Ce),Ge=new _f(P,Be,ke,be),ye=new gf(P,$,xe),ie=new af(pe),we=new Lp(p,he,ge,K,$,Ce,ie),Ye=new Jp(p,pe),N=new Np,w=new zp(K,$),_e=new tf(p,he,ge,re,Ge,d,l),de=new Wp(p,Ge,$),Ue=new Qp(P,be,$,re),k=new rf(P,K,be,$),me=new ff(P,K,be,$),be.programs=we.programs,p.capabilities=$,p.extensions=K,p.properties=pe,p.renderLists=N,p.shadowMap=de,p.state=re,p.info=be}Oe();const Pe=new $p(p,P);this.xr=Pe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(D,V,!1))},this.getSize=function(T){return T.set(D,V)},this.setSize=function(T,L,j=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,V=L,t.width=Math.floor(T*I),t.height=Math.floor(L*I),j===!0&&(t.style.width=T+"px",t.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(D*I,V*I).floor()},this.setDrawingBufferSize=function(T,L,j){D=T,V=L,I=j,t.width=Math.floor(T*j),t.height=Math.floor(L*j),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,L,j,z){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,L,j,z),re.viewport(F.copy(ne).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,L,j,z){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,L,j,z),re.scissor(E.copy(O).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){re.setScissorTest(U=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(T=!0,L=!0,j=!0){let z=0;T&&(z|=P.COLOR_BUFFER_BIT),L&&(z|=P.DEPTH_BUFFER_BIT),j&&(z|=P.STENCIL_BUFFER_BIT),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",je,!1),N.dispose(),w.dispose(),pe.dispose(),he.dispose(),ge.dispose(),Ge.dispose(),Ce.dispose(),Ue.dispose(),we.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",He),Pe.removeEventListener("sessionend",at),W&&(W.dispose(),W=null),ot.stop()};function Ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=be.autoReset,L=de.enabled,j=de.autoUpdate,z=de.needsUpdate,Q=de.type;Oe(),be.autoReset=T,de.enabled=L,de.autoUpdate=j,de.needsUpdate=z,de.type=Q}function je(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ht(T){const L=T.target;L.removeEventListener("dispose",ht),Z(L)}function Z(T){ue(T),pe.remove(T)}function ue(T){const L=pe.get(T).programs;L!==void 0&&(L.forEach(function(j){we.releaseProgram(j)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,j,z,Q,le){L===null&&(L=R);const oe=Q.isMesh&&Q.matrixWorld.determinant()<0,ve=Xe(T,L,j,z,Q);re.setMaterial(z,oe);let Te=j.index,Le=1;z.wireframe===!0&&(Te=Be.getWireframeAttribute(j),Le=2);const ce=j.drawRange,Ie=j.attributes.position;let ze=ce.start*Le,rt=(ce.start+ce.count)*Le;le!==null&&(ze=Math.max(ze,le.start*Le),rt=Math.min(rt,(le.start+le.count)*Le)),Te!==null?(ze=Math.max(ze,0),rt=Math.min(rt,Te.count)):Ie!=null&&(ze=Math.max(ze,0),rt=Math.min(rt,Ie.count));const qe=rt-ze;if(qe<0||qe===1/0)return;Ce.setup(Q,z,ve,j,Te);let Qe,Fe=k;if(Te!==null&&(Qe=ke.get(Te),Fe=me,Fe.setIndex(Qe)),Q.isMesh)z.wireframe===!0?(re.setLineWidth(z.wireframeLinewidth*G()),Fe.setMode(P.LINES)):Fe.setMode(P.TRIANGLES);else if(Q.isLine){let Ke=z.linewidth;Ke===void 0&&(Ke=1),re.setLineWidth(Ke*G()),Q.isLineSegments?Fe.setMode(P.LINES):Q.isLineLoop?Fe.setMode(P.LINE_LOOP):Fe.setMode(P.LINE_STRIP)}else Q.isPoints?Fe.setMode(P.POINTS):Q.isSprite&&Fe.setMode(P.TRIANGLES);if(Q.isInstancedMesh)Fe.renderInstances(ze,qe,Q.count);else if(j.isInstancedBufferGeometry){const Ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,Ke);Fe.renderInstances(ze,qe,Nt)}else Fe.render(ze,qe)},this.compile=function(T,L){function j(z,Q,le){z.transparent===!0&&z.side===dn&&z.forceSinglePass===!1?(z.side=kt,z.needsUpdate=!0,Me(z,Q,le),z.side=bn,z.needsUpdate=!0,Me(z,Q,le),z.side=dn):Me(z,Q,le)}v=w.get(T),v.init(),m.push(v),T.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),v.setupLights(p.useLegacyLights),T.traverse(function(z){const Q=z.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const oe=Q[le];j(oe,T,z)}else j(Q,T,z)}),m.pop(),v=null};let Ee=null;function Re(T){Ee&&Ee(T)}function He(){ot.stop()}function at(){ot.start()}const ot=new xl;ot.setAnimationLoop(Re),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(T){Ee=T,Pe.setAnimationLoop(T),T===null?ot.stop():ot.start()},Pe.addEventListener("sessionstart",He),Pe.addEventListener("sessionend",at),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(L),L=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,L,M),v=w.get(T,m.length),v.init(),m.push(v),b.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),J.setFromProjectionMatrix(b),H=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,H),f=N.get(T,g.length),f.init(),g.push(f),_t(T,L,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(X,q),Y===!0&&ie.beginShadows();const j=v.state.shadowsArray;if(de.render(j,T,L),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(f,T),v.setupLights(p.useLegacyLights),L.isArrayCamera){const z=L.cameras;for(let Q=0,le=z.length;Q<le;Q++){const oe=z[Q];Ft(f,T,oe,oe.viewport)}}else Ft(f,T,L);M!==null&&(xe.updateMultisampleRenderTarget(M),xe.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,L),Ce.resetDefaultState(),C=-1,B=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function _t(T,L,j,z){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){z&&A.setFromMatrixPosition(T.matrixWorld).applyMatrix4(b);const oe=Ge.update(T),ve=T.material;ve.visible&&f.push(T,oe,ve,j,A.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==be.render.frame&&(T.skeleton.update(),T.skeleton.frame=be.render.frame);const oe=Ge.update(T),ve=T.material;if(z&&(oe.boundingSphere===null&&oe.computeBoundingSphere(),A.copy(oe.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(b)),Array.isArray(ve)){const Te=oe.groups;for(let Le=0,ce=Te.length;Le<ce;Le++){const Ie=Te[Le],ze=ve[Ie.materialIndex];ze&&ze.visible&&f.push(T,oe,ze,j,A.z,Ie)}}else ve.visible&&f.push(T,oe,ve,j,A.z,null)}}const le=T.children;for(let oe=0,ve=le.length;oe<ve;oe++)_t(le[oe],L,j,z)}function Ft(T,L,j,z){const Q=T.opaque,le=T.transmissive,oe=T.transparent;v.setupLightsView(j),Y===!0&&ie.setGlobalState(p.clippingPlanes,j),le.length>0&&tt(Q,le,L,j),z&&re.viewport(F.copy(z)),Q.length>0&&ae(Q,L,j),le.length>0&&ae(le,L,j),oe.length>0&&ae(oe,L,j),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function tt(T,L,j,z){if(W===null){const ve=$.isWebGL2;W=new ei(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?sr:Qn,minFilter:Jn,samples:ve&&o===!0?4:0})}const Q=p.getRenderTarget();p.setRenderTarget(W),p.clear();const le=p.toneMapping;p.toneMapping=wn,ae(T,j,z),xe.updateMultisampleRenderTarget(W),xe.updateRenderTargetMipmap(W);let oe=!1;for(let ve=0,Te=L.length;ve<Te;ve++){const Le=L[ve],ce=Le.object,Ie=Le.geometry,ze=Le.material,rt=Le.group;if(ze.side===dn&&ce.layers.test(z.layers)){const qe=ze.side;ze.side=kt,ze.needsUpdate=!0,fe(ce,j,z,Ie,ze,rt),ze.side=qe,ze.needsUpdate=!0,oe=!0}}oe===!0&&(xe.updateMultisampleRenderTarget(W),xe.updateRenderTargetMipmap(W)),p.setRenderTarget(Q),p.toneMapping=le}function ae(T,L,j){const z=L.isScene===!0?L.overrideMaterial:null;for(let Q=0,le=T.length;Q<le;Q++){const oe=T[Q],ve=oe.object,Te=oe.geometry,Le=z===null?oe.material:z,ce=oe.group;ve.layers.test(j.layers)&&fe(ve,L,j,Te,Le,ce)}}function fe(T,L,j,z,Q,le){T.onBeforeRender(p,L,j,z,Q,le),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(p,L,j,z,T,le),Q.transparent===!0&&Q.side===dn&&Q.forceSinglePass===!1?(Q.side=kt,Q.needsUpdate=!0,p.renderBufferDirect(j,L,z,Q,T,le),Q.side=bn,Q.needsUpdate=!0,p.renderBufferDirect(j,L,z,Q,T,le),Q.side=dn):p.renderBufferDirect(j,L,z,Q,T,le),T.onAfterRender(p,L,j,z,Q,le)}function Me(T,L,j){L.isScene!==!0&&(L=R);const z=pe.get(T),Q=v.state.lights,le=v.state.shadowsArray,oe=Q.state.version,ve=we.getParameters(T,Q.state,le,L,j),Te=we.getProgramCacheKey(ve);let Le=z.programs;z.environment=T.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(T.isMeshStandardMaterial?ge:he).get(T.envMap||z.environment),Le===void 0&&(T.addEventListener("dispose",ht),Le=new Map,z.programs=Le);let ce=Le.get(Te);if(ce!==void 0){if(z.currentProgram===ce&&z.lightsStateVersion===oe)return Se(T,ve),ce}else ve.uniforms=we.getUniforms(T),T.onBuild(j,ve,p),T.onBeforeCompile(ve,p),ce=we.acquireProgram(ve,Te),Le.set(Te,ce),z.uniforms=ve.uniforms;const Ie=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ie.uniform),Se(T,ve),z.needsLights=Ae(T),z.lightsStateVersion=oe,z.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotLightMatrix.value=Q.state.spotLightMatrix,Ie.spotLightMap.value=Q.state.spotLightMap,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ze=ce.getUniforms(),rt=Hr.seqWithValue(ze.seq,Ie);return z.currentProgram=ce,z.uniformsList=rt,ce}function Se(T,L){const j=pe.get(T);j.outputColorSpace=L.outputColorSpace,j.instancing=L.instancing,j.skinning=L.skinning,j.morphTargets=L.morphTargets,j.morphNormals=L.morphNormals,j.morphColors=L.morphColors,j.morphTargetsCount=L.morphTargetsCount,j.numClippingPlanes=L.numClippingPlanes,j.numIntersection=L.numClipIntersection,j.vertexAlphas=L.vertexAlphas,j.vertexTangents=L.vertexTangents,j.toneMapping=L.toneMapping}function Xe(T,L,j,z,Q){L.isScene!==!0&&(L=R),xe.resetTextureUnits();const le=L.fog,oe=z.isMeshStandardMaterial?L.environment:null,ve=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:fn,Te=(z.isMeshStandardMaterial?ge:he).get(z.envMap||oe),Le=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!z.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,ze=!!j.morphAttributes.normal,rt=!!j.morphAttributes.color,qe=z.toneMapped?p.toneMapping:wn,Qe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=Qe!==void 0?Qe.length:0,Ke=pe.get(z),Nt=v.state.lights;if(Y===!0&&(H===!0||T!==B)){const ft=T===B&&z.id===C;ie.setState(z,T,ft)}let ut=!1;z.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Nt.state.version||Ke.outputColorSpace!==ve||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Te||z.fog===!0&&Ke.fog!==le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ie.numPlanes||Ke.numIntersection!==ie.numIntersection)||Ke.vertexAlphas!==Le||Ke.vertexTangents!==ce||Ke.morphTargets!==Ie||Ke.morphNormals!==ze||Ke.morphColors!==rt||Ke.toneMapping!==qe||$.isWebGL2===!0&&Ke.morphTargetsCount!==Fe)&&(ut=!0):(ut=!0,Ke.__version=z.version);let Rt=Ke.currentProgram;ut===!0&&(Rt=Me(z,L,Q));let Ct=!1,dt=!1,Wt=!1;const nt=Rt.getUniforms(),Lt=Ke.uniforms;if(re.useProgram(Rt.program)&&(Ct=!0,dt=!0,Wt=!0),z.id!==C&&(C=z.id,dt=!0),Ct||B!==T){if(nt.setValue(P,"projectionMatrix",T.projectionMatrix),$.logarithmicDepthBuffer&&nt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),B!==T&&(B=T,dt=!0,Wt=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const ft=nt.map.cameraPosition;ft!==void 0&&ft.setValue(P,A.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&nt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Q.isSkinnedMesh)&&nt.setValue(P,"viewMatrix",T.matrixWorldInverse)}if(Q.isSkinnedMesh){nt.setOptional(P,Q,"bindMatrix"),nt.setOptional(P,Q,"bindMatrixInverse");const ft=Q.skeleton;ft&&($.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),nt.setValue(P,"boneTexture",ft.boneTexture,xe),nt.setValue(P,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Tt=j.morphAttributes;if((Tt.position!==void 0||Tt.normal!==void 0||Tt.color!==void 0&&$.isWebGL2===!0)&&ye.update(Q,j,Rt),(dt||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,nt.setValue(P,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Lt.envMap.value=Te,Lt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),dt&&(nt.setValue(P,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Ne(Lt,Wt),le&&z.fog===!0&&Ye.refreshFogUniforms(Lt,le),Ye.refreshMaterialUniforms(Lt,z,I,V,W),Hr.upload(P,Ke.uniformsList,Lt,xe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hr.upload(P,Ke.uniformsList,Lt,xe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&nt.setValue(P,"center",Q.center),nt.setValue(P,"modelViewMatrix",Q.modelViewMatrix),nt.setValue(P,"normalMatrix",Q.normalMatrix),nt.setValue(P,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ft=z.uniformsGroups;for(let yt=0,Ht=ft.length;yt<Ht;yt++)if($.isWebGL2){const Kt=ft[yt];Ue.update(Kt,Rt),Ue.bind(Kt,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function Ne(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function Ae(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,L,j){pe.get(T.texture).__webglTexture=L,pe.get(T.depthTexture).__webglTexture=j;const z=pe.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=j===void 0,z.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,L){const j=pe.get(T);j.__webglFramebuffer=L,j.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,j=0){M=T,y=L,x=j;let z=!0,Q=null,le=!1,oe=!1;if(T){const Te=pe.get(T);Te.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(P.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Te.__hasExternalTextures&&xe.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(oe=!0);const ce=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=ce[L],le=!0):$.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?Q=pe.get(T).__webglMultisampledFramebuffer:Q=ce,F.copy(T.viewport),E.copy(T.scissor),S=T.scissorTest}else F.copy(ne).multiplyScalar(I).floor(),E.copy(O).multiplyScalar(I).floor(),S=U;if(re.bindFramebuffer(P.FRAMEBUFFER,Q)&&$.drawBuffers&&z&&re.drawBuffers(T,Q),re.viewport(F),re.scissor(E),re.setScissorTest(S),le){const Te=pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,Te.__webglTexture,j)}else if(oe){const Te=pe.get(T.texture),Le=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.__webglTexture,j||0,Le)}C=-1},this.readRenderTargetPixels=function(T,L,j,z,Q,le,oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&oe!==void 0&&(ve=ve[oe]),ve){re.bindFramebuffer(P.FRAMEBUFFER,ve);try{const Te=T.texture,Le=Te.format,ce=Te.type;if(Le!==Qt&&se.convert(Le)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=ce===sr&&(K.has("EXT_color_buffer_half_float")||$.isWebGL2&&K.has("EXT_color_buffer_float"));if(ce!==Qn&&se.convert(ce)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ce===Fn&&($.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-z&&j>=0&&j<=T.height-Q&&P.readPixels(L,j,z,Q,se.convert(Le),se.convert(ce),le)}finally{const Te=M!==null?pe.get(M).__webglFramebuffer:null;re.bindFramebuffer(P.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,L,j=0){const z=Math.pow(2,-j),Q=Math.floor(L.image.width*z),le=Math.floor(L.image.height*z);xe.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,T.x,T.y,Q,le),re.unbindTexture()},this.copyTextureToTexture=function(T,L,j,z=0){const Q=L.image.width,le=L.image.height,oe=se.convert(j.format),ve=se.convert(j.type);xe.setTexture2D(j,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment),L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,T.x,T.y,Q,le,oe,ve,L.image.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,T.x,T.y,L.mipmaps[0].width,L.mipmaps[0].height,oe,L.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,z,T.x,T.y,oe,ve,L.image),z===0&&j.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(T,L,j,z,Q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=T.max.x-T.min.x+1,oe=T.max.y-T.min.y+1,ve=T.max.z-T.min.z+1,Te=se.convert(z.format),Le=se.convert(z.type);let ce;if(z.isData3DTexture)xe.setTexture3D(z,0),ce=P.TEXTURE_3D;else if(z.isDataArrayTexture)xe.setTexture2DArray(z,0),ce=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const Ie=P.getParameter(P.UNPACK_ROW_LENGTH),ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rt=P.getParameter(P.UNPACK_SKIP_PIXELS),qe=P.getParameter(P.UNPACK_SKIP_ROWS),Qe=P.getParameter(P.UNPACK_SKIP_IMAGES),Fe=j.isCompressedTexture?j.mipmaps[0]:j.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?P.texSubImage3D(ce,Q,L.x,L.y,L.z,le,oe,ve,Te,Le,Fe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ce,Q,L.x,L.y,L.z,le,oe,ve,Te,Fe.data)):P.texSubImage3D(ce,Q,L.x,L.y,L.z,le,oe,ve,Te,Le,Fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qe),Q===0&&z.generateMipmaps&&P.generateMipmap(ce),re.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,re.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?Zn:rl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?$e:fn}}class tm extends Tl{}tm.prototype.isWebGL1Renderer=!0;class nm extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Is,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new ee;class Ks{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Eo=new ee,So=new vt,To=new vt,rm=new ee,wo=new st,Si=new ee;class sm extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Si.fromBufferAttribute(t,n),this.applyBoneTransform(n,Si),this.boundingBox.expandByPoint(Si)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Si.fromBufferAttribute(t,n),this.applyBoneTransform(n,Si),this.boundingSphere.expandByPoint(Si)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;So.fromBufferAttribute(r.attributes.skinIndex,e),To.fromBufferAttribute(r.attributes.skinWeight,e),Eo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const s=To.getComponent(i);if(s!==0){const o=So.getComponent(i);wo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(rm.copy(Eo).applyMatrix4(wo),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class wl extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class am extends It{constructor(e=null,t=1,n=1,r,i,s,o,l,h=At,u=At,c,d){super(null,s,o,l,h,u,r,i,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bo=new st,om=new st;class Zs{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,s=e.length;i<s;i++){const o=e[i]?e[i].matrixWorld:om;bo.multiplyMatrices(o,t[i]),bo.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Zs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=al(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new am(t,e,e,Qt,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const i=e.bones[n];let s=t[i];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),s=new wl),this.bones.push(s),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){const s=t[r];e.bones.push(s.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Ao extends Vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new st,Ro=new st,Dr=[],Co=new An,lm=new st,Zi=new jt,$i=new Rn;class cm extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,lm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Co.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Co)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),$i.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union($i)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),e.ray.intersectsSphere($i)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ti),Ro.multiplyMatrices(n,Ti),Zi.matrixWorld=Ro,Zi.raycast(e,Dr);for(let s=0,o=Dr.length;s<o;s++){const l=Dr[s];l.instanceId=i,l.object=this,t.push(l)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lo=new ee,Po=new ee,Io=new st,Ms=new Ws,Ur=new Rn;class Js extends xt{constructor(e=new cn,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)Lo.fromBufferAttribute(t,r-1),Po.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Lo.distanceTo(Po);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=i,e.ray.intersectsSphere(Ur)===!1)return;Io.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Io);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new ee,u=new ee,c=new ee,d=new ee,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,s.start),_=Math.min(v.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){const M=v.getX(y),C=v.getX(y+1);if(h.fromBufferAttribute(m,M),u.fromBufferAttribute(m,C),Ms.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),_=Math.min(m.count,s.start+s.count);for(let y=p,x=_-1;y<x;y+=f){if(h.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Ms.distanceSqToSegment(h,u,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:c.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}const No=new ee,Do=new ee;class bl extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)No.fromBufferAttribute(t,r),Do.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+No.distanceTo(Do);e.setAttribute("lineDistance",new ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hm extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Al extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uo=new st,Fs=new Ws,Fr=new Rn,Br=new ee;class um extends xt{constructor(e=new cn,t=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=i,e.ray.intersectsSphere(Fr)===!1)return;Uo.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Uo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let v=d,g=f;v<g;v++){const m=h.getX(v);Br.fromBufferAttribute(c,m),Fo(Br,m,l,r,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let v=d,g=f;v<g;v++)Br.fromBufferAttribute(c,v),Fo(Br,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=r.length;i<s;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Fo(a,e,t,n,r,i,s){const o=Fs.distanceSqToPoint(a);if(o<t){const l=new ee;Fs.closestPointToPoint(a,l),l.applyMatrix4(n);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;i.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class hr extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends hr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bi extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gs,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Nn(a,e,t){return Rl(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Or(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Rl(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function dm(a){function e(r,i){return a[r]-a[i]}const t=a.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Bo(a,e,t){const n=a.length,r=new a.constructor(n);for(let i=0,s=0;s!==n;++i){const o=t[i]*e;for(let l=0;l!==e;++l)r[s++]=a[o+l]}return r}function Cl(a,e,t,n){let r=1,i=a[0];for(;i!==void 0&&i[n]===void 0;)i=a[r++];if(i===void 0)return;let s=i[n];if(s!==void 0)if(Array.isArray(s))do s=i[n],s!==void 0&&(e.push(i.time),t.push.apply(t,s)),i=a[r++];while(i!==void 0);else if(s.toArray!==void 0)do s=i[n],s!==void 0&&(e.push(i.time),s.toArray(t,t.length)),i=a[r++];while(i!==void 0);else do s=i[n],s!==void 0&&(e.push(i.time),t.push(s)),i=a[r++];while(i!==void 0)}class ur{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],i=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=i,i=t[--n-1],e>=i)break e}s=n,n=0;break t}break n}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let s=0;s!==r;++s)t[s]=n[i+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fm extends ur{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Na,endingEnd:Na}}intervalChanged_(e,t,n){const r=this.parameterPositions;let i=e-2,s=e+1,o=r[i],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Da:i=e,o=2*t-n;break;case Ua:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Da:s=e,l=2*n-t;break;case Ua:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=i*u,this._offsetNext=s*u}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(r-t),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,y=(-1-f)*m+(1.5+f)*g+.5*v,x=f*m-f*g;for(let M=0;M!==o;++M)i[M]=p*s[u+M]+_*s[h+M]+y*s[l+M]+x*s[c+M];return i}}class pm extends ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(r-t),c=1-u;for(let d=0;d!==o;++d)i[d]=s[h+d]*c+s[l+d]*u;return i}}class mm extends ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class mn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case Bi:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Bi;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let i=0,s=r-1;for(;i!==r&&n[i]<e;)++i;for(;s!==-1&&n[s]>t;)--s;if(++s,i!==0||s!==r){i>=s&&(s=Math.max(s,1),i=s-1);const o=this.getValueSize();this.times=Nn(n,i,s),this.values=Nn(this.values,i*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Rl(r))for(let o=0,l=r.length;o!==l;++o){const h=r[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Nn(this.times),t=Nn(this.values),n=this.getValueSize(),r=this.getInterpolation()===Jr,i=e.length-1;let s=1;for(let o=1;o<i;++o){let l=!1;const h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(r)l=!0;else{const c=o*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=t[c+v];if(g!==t[d+v]||g!==t[f+v]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const c=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[c+f]}++s}}if(i>0){e[s]=e[i];for(let o=i*n,l=s*n,h=0;h!==n;++h)t[l+h]=t[o+h];++s}return s!==e.length?(this.times=Nn(e,0,s),this.values=Nn(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Nn(this.times,0),t=Nn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Bi;class Wi extends mn{}Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ll extends mn{}Ll.prototype.ValueTypeName="color";class lr extends mn{}lr.prototype.ValueTypeName="number";class vm extends ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let h=e*o;for(let u=h+o;h!==u;h+=4)pn.slerpFlat(i,0,s,h-o,s,h,l);return i}}class ni extends mn{InterpolantFactoryMethodLinear(e){return new vm(this.times,this.values,this.getValueSize(),e)}}ni.prototype.ValueTypeName="quaternion";ni.prototype.DefaultInterpolation=Bi;ni.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends mn{}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ar;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends mn{}cr.prototype.ValueTypeName="vector";class gm{constructor(e,t=-1,n,r=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(xm(n[s]).scale(r));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,s=n.length;i!==s;++i)t.push(mn.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const i=t.length,s=[];for(let o=0;o<i;o++){let l=[],h=[];l.push((o+i-1)%i,o,(o+1)%i),h.push(0,1,0);const u=dm(l);l=Bo(l,1,u),h=Bo(h,1,u),!r&&l[0]===0&&(l.push(i),h.push(h[0])),s.push(new lr(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],u=h.name.match(i);if(u&&u.length>1){const c=u[1];let d=r[c];d||(r[c]=d=[]),d.push(h)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const m=[],p=[];Cl(f,m,p,v),m.length!==0&&g.push(new c(d,m,p))}},r=[],i=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let _=0;_!==d[v].morphTargets.length;++_){const y=d[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}r.push(new lr(".morphTargetInfluence["+g+"]",m,p))}l=f.length*s}else{const f=".bones["+t[c].name+"]";n(cr,f+".position",d,"pos",r),n(ni,f+".quaternion",d,"rot",r),n(cr,f+".scale",d,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _m(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lr;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return Ll;case"quaternion":return ni;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function xm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_m(a.type);if(a.times===void 0){const t=[],n=[];Cl(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Vi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class ym{constructor(e,t,n){const r=this;let i=!1,s=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,i===!1&&r.onStart!==void 0&&r.onStart(u,s,o),i=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const Mm=new ym;class dr{constructor(e){this.manager=e!==void 0?e:Mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const En={};class Em extends Error{constructor(e,t){super(e),this.response=t}}class Pl extends dr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Vi.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:r});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=En[e],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let C=0,B=u.length;C<B;C++){const F=u[C];F.onProgress&&F.onProgress(M)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new Em(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{Vi.add(e,h);const u=En[e];delete En[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=En[e];if(u===void 0)throw this.manager.itemError(e),h;delete En[e];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sm extends dr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Vi.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=or("img");function l(){u(),Vi.add(e,this),t&&t(this),i.manager.itemEnd(e)}function h(c){u(),r&&r(c),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class Il extends dr{constructor(e){super(e)}load(e,t,n,r){const i=new It,s=new Sm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}let Qs=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const Es=new st,Oo=new ee,zo=new ee;class ea{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),Es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tm extends ea{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Oi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wm extends Qs{constructor(e,t,n=0,r=Math.PI/3,i=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=s,this.map=null,this.shadow=new Tm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vo=new st,Ji=new ee,Ss=new ee;class bm extends ea{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ji),Ss.copy(n.position),Ss.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ss),n.updateMatrixWorld(),r.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}class Am extends Qs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rm extends ea{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nl extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Rm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cm extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Vi.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){Vi.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){r&&r(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const ta="\\[\\]\\.:\\/",Lm=new RegExp("["+ta+"]","g"),na="[^"+ta+"]",Pm="[^"+ta.replace("\\.","")+"]",Im=/((?:WC+[\/:])*)/.source.replace("WC",na),Nm=/(WCOD+)?/.source.replace("WCOD",Pm),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",na),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",na),Fm=new RegExp("^"+Im+Nm+Dm+Um+"$"),Bm=["material","materials","bones","map"];class Om{constructor(e,t,n){const r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(e){const t=Fm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);Bm.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let s=0;s<i.length;s++){const o=i[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const s=e[r];if(s===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=Om;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ho{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zm extends bl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new cn;r.setAttribute("position",new ln(t,3)),r.setAttribute("color",new ln(n,3));const i=new $s({vertexColors:!0,toneMapped:!1});super(r,i),this.type="AxesHelper"}setColors(e,t,n){const r=new et,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);class Vm{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const i=document.createElement("div");return i.id="webglmessage",i.style.fontFamily="monospace",i.style.fontSize="13px",i.style.fontWeight="normal",i.style.textAlign="center",i.style.background="#fff",i.style.color="#000",i.style.padding="1.5em",i.style.width="400px",i.style.margin="5em auto 0",n[e]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",t[e]),i.innerHTML=r,i}}const Go=Vm,ko={type:"change"},Ts={type:"start"},Wo={type:"end"};class Hm extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",we),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ko),n.update(),i=r.NONE},this.update=function(){const k=new ee,me=new pn().setFromUnitVectors(e.up,new ee(0,1,0)),se=me.clone().invert(),Ce=new ee,Ue=new pn,Oe=2*Math.PI;return function(){const Ve=n.object.position;k.copy(Ve).sub(n.target),k.applyQuaternion(me),o.setFromVector3(k),n.autoRotate&&i===r.NONE&&E(B()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let We=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(We)&&isFinite(je)&&(We<-Math.PI?We+=Oe:We>Math.PI&&(We-=Oe),je<-Math.PI?je+=Oe:je>Math.PI&&(je-=Oe),We<=je?o.theta=Math.max(We,Math.min(je,o.theta)):o.theta=o.theta>(We+je)/2?Math.max(We,o.theta):Math.min(je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=h,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),k.setFromSpherical(o),k.applyQuaternion(se),Ve.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),h=1,c||Ce.distanceToSquared(n.object.position)>s||8*(1-Ue.dot(n.object.quaternion))>s?(n.dispatchEvent(ko),Ce.copy(n.object.position),Ue.copy(n.object.quaternion),c=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",xe),n.domElement.removeEventListener("pointercancel",ge),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ge),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",we),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=r.NONE;const s=1e-6,o=new Ho,l=new Ho;let h=1;const u=new ee;let c=!1;const d=new Je,f=new Je,v=new Je,g=new Je,m=new Je,p=new Je,_=new Je,y=new Je,x=new Je,M=[],C={};function B(){return 2*Math.PI/60/60*n.autoRotateSpeed}function F(){return Math.pow(.95,n.zoomSpeed)}function E(k){l.theta-=k}function S(k){l.phi-=k}const D=function(){const k=new ee;return function(se,Ce){k.setFromMatrixColumn(Ce,0),k.multiplyScalar(-se),u.add(k)}}(),V=function(){const k=new ee;return function(se,Ce){n.screenSpacePanning===!0?k.setFromMatrixColumn(Ce,1):(k.setFromMatrixColumn(Ce,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(se),u.add(k)}}(),I=function(){const k=new ee;return function(se,Ce){const Ue=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;k.copy(Oe).sub(n.target);let Pe=k.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),D(2*se*Pe/Ue.clientHeight,n.object.matrix),V(2*Ce*Pe/Ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(se*(n.object.right-n.object.left)/n.object.zoom/Ue.clientWidth,n.object.matrix),V(Ce*(n.object.top-n.object.bottom)/n.object.zoom/Ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(k){n.object.isPerspectiveCamera?h/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(k){n.object.isPerspectiveCamera?h*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(k){d.set(k.clientX,k.clientY)}function O(k){_.set(k.clientX,k.clientY)}function U(k){g.set(k.clientX,k.clientY)}function J(k){f.set(k.clientX,k.clientY),v.subVectors(f,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;E(2*Math.PI*v.x/me.clientHeight),S(2*Math.PI*v.y/me.clientHeight),d.copy(f),n.update()}function Y(k){y.set(k.clientX,k.clientY),x.subVectors(y,_),x.y>0?X(F()):x.y<0&&q(F()),_.copy(y),n.update()}function H(k){m.set(k.clientX,k.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(m),n.update()}function W(k){k.deltaY<0?q(F()):k.deltaY>0&&X(F()),n.update()}function b(k){let me=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),me=!0;break}me&&(k.preventDefault(),n.update())}function A(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const k=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);d.set(k,me)}}function R(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const k=.5*(M[0].pageX+M[1].pageX),me=.5*(M[0].pageY+M[1].pageY);g.set(k,me)}}function G(){const k=M[0].pageX-M[1].pageX,me=M[0].pageY-M[1].pageY,se=Math.sqrt(k*k+me*me);_.set(0,se)}function P(){n.enableZoom&&G(),n.enablePan&&R()}function te(){n.enableZoom&&G(),n.enableRotate&&A()}function K(k){if(M.length==1)f.set(k.pageX,k.pageY);else{const se=ye(k),Ce=.5*(k.pageX+se.x),Ue=.5*(k.pageY+se.y);f.set(Ce,Ue)}v.subVectors(f,d).multiplyScalar(n.rotateSpeed);const me=n.domElement;E(2*Math.PI*v.x/me.clientHeight),S(2*Math.PI*v.y/me.clientHeight),d.copy(f)}function $(k){if(M.length===1)m.set(k.pageX,k.pageY);else{const me=ye(k),se=.5*(k.pageX+me.x),Ce=.5*(k.pageY+me.y);m.set(se,Ce)}p.subVectors(m,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(m)}function re(k){const me=ye(k),se=k.pageX-me.x,Ce=k.pageY-me.y,Ue=Math.sqrt(se*se+Ce*Ce);y.set(0,Ue),x.set(0,Math.pow(y.y/_.y,n.zoomSpeed)),X(x.y),_.copy(y)}function be(k){n.enableZoom&&re(k),n.enablePan&&$(k)}function pe(k){n.enableZoom&&re(k),n.enableRotate&&K(k)}function xe(k){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",ge)),ie(k),k.pointerType==="touch"?Ye(k):ke(k))}function he(k){n.enabled!==!1&&(k.pointerType==="touch"?N(k):Be(k))}function ge(k){de(k),M.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",ge)),n.dispatchEvent(Wo),i=r.NONE}function ke(k){let me;switch(k.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case si.DOLLY:if(n.enableZoom===!1)return;O(k),i=r.DOLLY;break;case si.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;U(k),i=r.PAN}else{if(n.enableRotate===!1)return;ne(k),i=r.ROTATE}break;case si.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;ne(k),i=r.ROTATE}else{if(n.enablePan===!1)return;U(k),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Ts)}function Be(k){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;J(k);break;case r.DOLLY:if(n.enableZoom===!1)return;Y(k);break;case r.PAN:if(n.enablePan===!1)return;H(k);break}}function Ge(k){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(k.preventDefault(),n.dispatchEvent(Ts),W(k),n.dispatchEvent(Wo))}function we(k){n.enabled===!1||n.enablePan===!1||b(k)}function Ye(k){switch(_e(k),M.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;A(),i=r.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;R(),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(),i=r.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(Ts)}function N(k){switch(_e(k),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;K(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;$(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(k),n.update();break;default:i=r.NONE}}function w(k){n.enabled!==!1&&k.preventDefault()}function ie(k){M.push(k)}function de(k){delete C[k.pointerId];for(let me=0;me<M.length;me++)if(M[me].pointerId==k.pointerId){M.splice(me,1);return}}function _e(k){let me=C[k.pointerId];me===void 0&&(me=new Je,C[k.pointerId]=me),me.set(k.pageX,k.pageY)}function ye(k){const me=k.pointerId===M[0].pointerId?M[1]:M[0];return C[me.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",xe),n.domElement.addEventListener("pointercancel",ge),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}function zr(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gm={exports:{}};(function(a,e){(function(t){a.exports=t()})(function(){return function t(n,r,i){function s(h,u){if(!r[h]){if(!n[h]){var c=typeof zr=="function"&&zr;if(!u&&c)return c(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=r[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return s(v||f)},d,d.exports,t,n,r,i)}return r[h].exports}for(var o=typeof zr=="function"&&zr,l=0;l<i.length;l++)s(i[l]);return s}({1:[function(t,n,r){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(t,n,r){n.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(t,n,r){var i=t("../math/Vec3");t("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new i,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new i,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new i;s.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<h.length;m++){var p=h[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},s.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},s.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},s.prototype.getCorners=function(h,u,c,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new i,new i,new i,new i,new i,new i,new i,new i];s.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var M=c[x];h.pointToLocal(M,M)}return u.setFromPoints(c)},s.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],y=c[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var M=c[x];h.pointToWorld(M,M)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(t,n,r){n.exports=i;function i(){this.matrix=[]}i.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var l=o;o=s,s=l}return this.matrix[(s*(s+1)>>1)+o-1]},i.prototype.set=function(s,o,l){if(s=s.index,o=o.index,o>s){var h=o;o=s,s=h}this.matrix[(s*(s+1)>>1)+o-1]=l?1:0},i.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},i.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(t,n,r){var i=t("../objects/Body"),s=t("../math/Vec3"),o=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=i.STATIC|i.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===i.SLEEPING)&&(m.type&h||m.sleepState===i.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var u=new s;new s,new o,new s,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=u;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),M=y.norm2();M<x&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=d,y=f,x=g.length,M=0;M!==x;M++)_[M]=g[M],y[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==x;M++){var C=_[M].id,B=y[M].id,F=C<B?C+","+B:B+","+C;p[F]=M,p.keys.push(F)}for(var M=0;M!==p.keys.length;M++){var F=p.keys.pop(),E=p[F];g.push(_[E]),m.push(y[E]),delete p[F]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(t,n,r){n.exports=l;var i=t("./Broadphase"),s=t("../math/Vec3"),o=t("../shapes/Shape");function l(u,c,d,f,v){i.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=c||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new i,l.prototype.constructor=l;var h=new s;new s,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,P=this.aabbMax,G=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,M=P.x,C=P.y,B=P.z,F=G.x,E=G.y,S=G.z,D=g/(M-F),V=m/(C-E),I=p/(B-S),X=(M-F)/g,q=(C-E)/m,ne=(B-S)/p,O=Math.sqrt(X*X+q*q+ne*ne)*.5,U=o.types,J=U.SPHERE,Y=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var H=this.bins,W=this.binLengths,b=this.bins.length,A=0;A!==b;A++)W[A]=0;var R=Math.ceil,G=Math.min,P=Math.max;function te(se,Ce,Ue,Oe,Pe,Ve,We){var je=(se-F)*D|0,ht=(Ce-E)*V|0,Z=(Ue-S)*I|0,ue=R((Oe-F)*D),Ee=R((Pe-E)*V),Re=R((Ve-S)*I);je<0?je=0:je>=g&&(je=g-1),ht<0?ht=0:ht>=m&&(ht=m-1),Z<0?Z=0:Z>=p&&(Z=p-1),ue<0?ue=0:ue>=g&&(ue=g-1),Ee<0?Ee=0:Ee>=m&&(Ee=m-1),Re<0?Re=0:Re>=p&&(Re=p-1),je*=_,ht*=y,Z*=x,ue*=_,Ee*=y,Re*=x;for(var He=je;He<=ue;He+=_)for(var at=ht;at<=Ee;at+=y)for(var ot=Z;ot<=Re;ot+=x){var _t=He+at+ot;H[_t][W[_t]++]=We}}for(var A=0;A!==f;A++){var K=v[A],$=K.shape;switch($.type){case J:var re=K.position.x,be=K.position.y,pe=K.position.z,xe=$.radius;te(re-xe,be-xe,pe-xe,re+xe,be+xe,pe+xe,K);break;case Y:$.worldNormalNeedsUpdate&&$.computeWorldNormal(K.quaternion);var he=$.worldNormal,ge=F+X*.5-K.position.x,ke=E+q*.5-K.position.y,Be=S+ne*.5-K.position.z,Ge=h;Ge.set(ge,ke,Be);for(var we=0,Ye=0;we!==g;we++,Ye+=_,Ge.y=ke,Ge.x+=X)for(var N=0,w=0;N!==m;N++,w+=y,Ge.z=Be,Ge.y+=q)for(var ie=0,de=0;ie!==p;ie++,de+=x,Ge.z+=ne)if(Ge.dot(he)<O){var _e=Ye+w+de;H[_e][W[_e]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),te(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var A=0;A!==b;A++){var ye=W[A];if(ye>1)for(var k=H[A],we=0;we!==ye;we++)for(var K=k[we],N=0;N!==we;N++){var me=k[N];this.needBroadphaseCollision(K,me)&&this.intersectionTest(K,me,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(t,n,r){n.exports=o;var i=t("./Broadphase"),s=t("./AABB");function o(){i.apply(this)}o.prototype=new i,o.prototype.constructor=o,o.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,u)},new s,o.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(t,n,r){n.exports=i;function i(){this.matrix={}}i.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var l=o;o=s,s=l}return s+"-"+o in this.matrix},i.prototype.set=function(s,o,l){if(s=s.id,o=o.id,o>s){var h=o;o=s,s=h}l?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},i.prototype.reset=function(){this.matrix={}},i.prototype.setNumObjects=function(s){}},{}],9:[function(t,n,r){n.exports=c;var i=t("../math/Vec3"),s=t("../math/Quaternion"),o=t("../math/Transform");t("../shapes/ConvexPolyhedron"),t("../shapes/Box");var l=t("../collision/RaycastResult"),h=t("../shapes/Shape"),u=t("../collision/AABB");function c(b,A){this.from=b?b.clone():new i,this.to=A?A.clone():new i,this._direction=new i,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(b,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,b.broadphase.aabbQuery(b,d,f),this.intersectBodies(f),this.hasHit};var v=new i,g=new i;c.pointInTriangle=m;function m(b,A,R,G){G.vsub(A,Y),R.vsub(A,v),b.vsub(A,g);var P=Y.dot(Y),te=Y.dot(v),K=Y.dot(g),$=v.dot(v),re=v.dot(g),be,pe;return(be=$*K-te*re)>=0&&(pe=P*re-te*K)>=0&&be+pe<P*$-te*te}var p=new i,_=new s;c.prototype.intersectBody=function(b,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!b.collisionResponse)&&!(!(this.collisionFilterGroup&b.collisionFilterMask)||!(b.collisionFilterGroup&this.collisionFilterMask)))for(var G=p,P=_,te=0,K=b.shapes.length;te<K;te++){var $=b.shapes[te];if(!(R&&!$.collisionResponse)&&(b.quaternion.mult(b.shapeOrientations[te],P),b.quaternion.vmult(b.shapeOffsets[te],G),G.vadd(b.position,G),this.intersectShape($,P,G,b),this.result._shouldStop))break}},c.prototype.intersectBodies=function(b,A){A&&(this.result=A,this._updateDirection());for(var R=0,G=b.length;!this.result._shouldStop&&R<G;R++)this.intersectBody(b[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(b,A,R,G){var P=this.from,te=W(P,this._direction,R);if(!(te>b.boundingSphereRadius)){var K=this[b.type];K&&K.call(this,b,A,R,G)}},new i,new i;var y=new i,x=new i,M=new i,C=new i;new i,new l,c.prototype.intersectBox=function(b,A,R,G){return this.intersectConvex(b.convexPolyhedronRepresentation,A,R,G)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(b,A,R,G){var P=this.from,te=this.to,K=this._direction,$=new i(0,0,1);A.vmult($,$);var re=new i;P.vsub(R,re);var be=re.dot($);te.vsub(R,re);var pe=re.dot($);if(!(be*pe>0)&&!(P.distanceTo(te)<be)){var xe=$.dot(K);if(!(Math.abs(xe)<this.precision)){var he=new i,ge=new i,ke=new i;P.vsub(R,he);var Be=-$.dot(he)/xe;K.scale(Be,ge),P.vadd(ge,ke),this.reportIntersection($,ke,b,G,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(b){var A=this.to,R=this.from;b.lowerBound.x=Math.min(A.x,R.x),b.lowerBound.y=Math.min(A.y,R.y),b.lowerBound.z=Math.min(A.z,R.z),b.upperBound.x=Math.max(A.x,R.x),b.upperBound.y=Math.max(A.y,R.y),b.upperBound.z=Math.max(A.z,R.z)};var B={faceList:[0]};c.prototype.intersectHeightfield=function(b,A,R,G){b.data,b.elementSize;var P=new i,te=new c(this.from,this.to);o.pointToLocalFrame(R,A,te.from,te.from),o.pointToLocalFrame(R,A,te.to,te.to);var K=[],$=null,re=null,be=null,pe=null,xe=b.getIndexOfPosition(te.from.x,te.from.y,K,!1);if(xe&&($=K[0],re=K[1],be=K[0],pe=K[1]),xe=b.getIndexOfPosition(te.to.x,te.to.y,K,!1),xe&&(($===null||K[0]<$)&&($=K[0]),(be===null||K[0]>be)&&(be=K[0]),(re===null||K[1]<re)&&(re=K[1]),(pe===null||K[1]>pe)&&(pe=K[1])),$!==null){var he=[];b.getRectMinMax($,re,be,pe,he),he[0],he[1];for(var ge=$;ge<=be;ge++)for(var ke=re;ke<=pe;ke++){if(this.result._shouldStop||(b.getConvexTrianglePillar(ge,ke,!1),o.pointToWorldFrame(R,A,b.pillarOffset,P),this.intersectConvex(b.pillarConvex,A,P,G,B),this.result._shouldStop))return;b.getConvexTrianglePillar(ge,ke,!0),o.pointToWorldFrame(R,A,b.pillarOffset,P),this.intersectConvex(b.pillarConvex,A,P,G,B)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var F=new i,E=new i;c.prototype.intersectSphere=function(b,A,R,G){var P=this.from,te=this.to,K=b.radius,$=Math.pow(te.x-P.x,2)+Math.pow(te.y-P.y,2)+Math.pow(te.z-P.z,2),re=2*((te.x-P.x)*(P.x-R.x)+(te.y-P.y)*(P.y-R.y)+(te.z-P.z)*(P.z-R.z)),be=Math.pow(P.x-R.x,2)+Math.pow(P.y-R.y,2)+Math.pow(P.z-R.z,2)-Math.pow(K,2),pe=Math.pow(re,2)-4*$*be,xe=F,he=E;if(!(pe<0))if(pe===0)P.lerp(te,pe,xe),xe.vsub(R,he),he.normalize(),this.reportIntersection(he,xe,b,G,-1);else{var ge=(-re-Math.sqrt(pe))/(2*$),ke=(-re+Math.sqrt(pe))/(2*$);if(ge>=0&&ge<=1&&(P.lerp(te,ge,xe),xe.vsub(R,he),he.normalize(),this.reportIntersection(he,xe,b,G,-1)),this.result._shouldStop)return;ke>=0&&ke<=1&&(P.lerp(te,ke,xe),xe.vsub(R,he),he.normalize(),this.reportIntersection(he,xe,b,G,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var S=new i;new i,new i;var D=new i;c.prototype.intersectConvex=function(A,R,G,P,te){for(var K=S,$=D,re=te&&te.faceList||null,be=A.faces,pe=A.vertices,xe=A.faceNormals,he=this._direction,ge=this.from,ke=this.to,Be=ge.distanceTo(ke),Ge=re?re.length:be.length,we=this.result,Ye=0;!we._shouldStop&&Ye<Ge;Ye++){var N=re?re[Ye]:Ye,w=be[N],ie=xe[N],de=R,_e=G;$.copy(pe[w[0]]),de.vmult($,$),$.vadd(_e,$),$.vsub(ge,$),de.vmult(ie,K);var ye=he.dot(K);if(!(Math.abs(ye)<this.precision)){var k=K.dot($)/ye;if(!(k<0)){he.mult(k,y),y.vadd(ge,y),x.copy(pe[w[0]]),de.vmult(x,x),_e.vadd(x,x);for(var me=1;!we._shouldStop&&me<w.length-1;me++){M.copy(pe[w[me]]),C.copy(pe[w[me+1]]),de.vmult(M,M),de.vmult(C,C),_e.vadd(M,M),_e.vadd(C,C);var se=y.distanceTo(ge);!(m(y,x,M,C)||m(y,M,x,C))||se>Be||this.reportIntersection(K,y,A,P,N)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var V=new i,I=new i,X=new i,q=new i,ne=new i,O=new i;new u;var U=[],J=new o;c.prototype.intersectTrimesh=function(A,R,G,P,te){var K=V,$=U,re=J,be=D,pe=I,xe=X,he=q,ge=O,ke=ne;te&&te.faceList;var Be=A.indices;A.vertices,A.faceNormals;var Ge=this.from,we=this.to,Ye=this._direction;re.position.copy(G),re.quaternion.copy(R),o.vectorToLocalFrame(G,R,Ye,pe),o.pointToLocalFrame(G,R,Ge,xe),o.pointToLocalFrame(G,R,we,he);var N=xe.distanceSquared(he);A.tree.rayQuery(this,re,$);for(var w=0,ie=$.length;!this.result._shouldStop&&w!==ie;w++){var de=$[w];A.getNormal(de,K),A.getVertex(Be[de*3],x),x.vsub(xe,be);var _e=pe.dot(K),ye=K.dot(be)/_e;if(!(ye<0)){pe.scale(ye,y),y.vadd(xe,y),A.getVertex(Be[de*3+1],M),A.getVertex(Be[de*3+2],C);var k=y.distanceSquared(xe);!(m(y,M,x,C)||m(y,x,M,C))||k>N||(o.vectorToWorldFrame(R,K,ke),o.pointToWorldFrame(G,R,y,ge),this.reportIntersection(ke,ge,A,P,de))}}$.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(b,A,R,G,P){var te=this.from,K=this.to,$=te.distanceTo(A),re=this.result;if(!(this.skipBackfaces&&b.dot(this._direction)>0))switch(re.hitFaceIndex=typeof P<"u"?P:-1,this.mode){case c.ALL:this.hasHit=!0,re.set(te,K,b,A,R,G,$),re.hasHit=!0,this.callback(re);break;case c.CLOSEST:($<re.distance||!re.hasHit)&&(this.hasHit=!0,re.hasHit=!0,re.set(te,K,b,A,R,G,$));break;case c.ANY:this.hasHit=!0,re.hasHit=!0,re.set(te,K,b,A,R,G,$),re._shouldStop=!0;break}};var Y=new i,H=new i;function W(b,A,R){R.vsub(b,Y);var G=Y.dot(A);A.mult(G,H),H.vadd(b,H);var P=R.distanceTo(H);return P}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(t,n,r){var i=t("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new i,this.rayToWorld=new i,this.hitNormalWorld=new i,this.hitPointWorld=new i,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,l,h,u,c,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(t,n,r){t("../shapes/Shape");var i=t("../collision/Broadphase");n.exports=s;function s(o){i.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},o&&this.setWorld(o)}s.prototype=new i,s.prototype.setWorld=function(o){this.axisList.length=0;for(var l=0;l<o.bodies.length;l++)this.axisList.push(o.bodies[l]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortY=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)o[c+1]=o[c];o[c+1]=u}return o},s.insertionSortZ=function(o){for(var l=1,h=o.length;l<h;l++){for(var u=o[l],c=l-1;c>=0&&!(o[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)o[c+1]=o[c];o[c+1]=u}return o},s.prototype.collisionPairs=function(o,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,h)}}}},s.prototype.sortList=function(){for(var o=this.axisList,l=this.axisIndex,h=o.length,u=0;u!==h;u++){var c=o[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?s.insertionSortX(o):l===1?s.insertionSortY(o):l===2&&s.insertionSortZ(o)},s.checkBounds=function(o,l,h){var u,c;h===0?(u=o.position.x,c=l.position.x):h===1?(u=o.position.y,c=l.position.y):h===2&&(u=o.position.z,c=l.position.z);var d=o.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;o+=_,l+=_*_;var y=p.position.y;h+=y,u+=y*y;var x=p.position.z;c+=x,d+=x*x}var M=l-o*o*g,C=u-h*h*g,B=d-c*c*g;M>C?M>B?this.axisIndex=0:this.axisIndex=2:C>B?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(t,n,r){n.exports=h,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/ConeEquation"),o=t("../equations/RotationalEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,i.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new s(u,c,d),p=this.twistEquation=new o(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new i,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;i.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(t,n,r){n.exports=s;var i=t("../utils/Utils");function s(o,l,h){h=i.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,l=0;l<o.length;l++)o[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(t,n,r){n.exports=o;var i=t("./Constraint"),s=t("../equations/ContactEquation");function o(l,h,u,c){i.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new s(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}o.prototype=new i,o.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(t,n,r){n.exports=h,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation"),o=t("../equations/RotationalMotorEquation");t("../equations/ContactEquation");var l=t("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;i.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(d,f,v),M=this.rotationalEquation2=new s(d,f,v),C=this.motorEquation=new o(d,f,g);C.enabled=!1,this.equations.push(x,M,C)}h.prototype=new i,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=u,_=c,y=this.axisA,x=this.axisB;i.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(t,n,r){n.exports=l,t("./Constraint");var i=t("./PointToPointConstraint"),s=t("../equations/RotationalEquation");t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation");var o=t("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new o,v=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),i.call(this,h,f,u,v,d);var m=this.rotationalEquation1=new s(h,u,c),p=this.rotationalEquation2=new s(h,u,c),_=this.rotationalEquation3=new s(h,u,c);this.equations.push(m,p,_)}l.prototype=new i,l.constructor=l,new o,new o,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;i.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,c.axisA),u.vectorToWorldFrame(o.UNIT_Y,c.axisB),h.vectorToWorldFrame(o.UNIT_Y,d.axisA),u.vectorToWorldFrame(o.UNIT_Z,d.axisB),h.vectorToWorldFrame(o.UNIT_Z,f.axisA),u.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(t,n,r){n.exports=l;var i=t("./Constraint"),s=t("../equations/ContactEquation"),o=t("../math/Vec3");function l(h,u,c,d,f){i.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new s(h,c),g=this.equationY=new s(h,c),m=this.equationZ=new s(h,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new i,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new s,o.prototype.constructor=o;var l=new i,h=new i;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),M=this.computeGiMf(),C=-y*c-x*d-u*M;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(t,n,r){n.exports=o;var i=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,i.call(this,m,p,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new i,o.prototype.constructor=o;var l=new s,h=new s,u=new s;o.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,M=this.ri,C=this.rj,B=l,F=h,E=y.velocity,S=y.angularVelocity;y.force,y.torque;var D=x.velocity,V=x.angularVelocity;x.force,x.torque;var I=u,X=this.jacobianElementA,q=this.jacobianElementB,ne=this.ni;M.cross(ne,B),C.cross(ne,F),ne.negate(X.spatial),B.negate(X.rotational),q.spatial.copy(ne),q.rotational.copy(F),I.copy(x.position),I.vadd(C,I),I.vsub(y.position,I),I.vsub(M,I);var O=ne.dot(I),U=this.restitution+1,J=U*D.dot(ne)-U*E.dot(ne)+V.dot(F)-S.dot(B),Y=this.computeGiMf(),H=-O*p-J*_-m*Y;return H};var c=new s,d=new s,f=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(t,n,r){n.exports=o;var i=t("../math/JacobianElement"),s=t("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new i,this.jacobianElementB=new i,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var l=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,M=p.angularVelocity||l,C=_.angularVelocity||l;return g.multiplyVectors(y,M)+m.multiplyVectors(x,C)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,M=p.wlambda||l,C=_.wlambda||l;return g.multiplyVectors(y,M)+m.multiplyVectors(x,C)};var h=new s,u=new s,c=new s,d=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,M=_.force,C=_.torque,B=p.invMassSolve,F=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),y.mult(B,h),M.mult(F,u),g.multiplyVectors(h,c)+m.multiplyVectors(u,d)};var f=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,M=p.invInertiaWorldSolve,C=_.invInertiaWorldSolve,B=y+x;return M&&(M.vmult(g.rotational,f),B+=f.dot(g.rotational)),C&&(C.vmult(m.rotational,f),B+=f.dot(m.rotational)),B};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(t,n,r){n.exports=o;var i=t("./Equation"),s=t("../math/Vec3");t("../math/Mat3");function o(u,c,d){i.call(this,u,c,-d,d),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new i,o.prototype.constructor=o;var l=new s,h=new s;o.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),M=-y*c-u*x;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new i(1,0,0),this.axisB=d.axisB?d.axisB.clone():new i(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var l=new i,h=new i;o.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),M=this.computeGiMf(),C=-y*c-x*d-u*M;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(t,n,r){n.exports=o;var i=t("../math/Vec3");t("../math/Mat3");var s=t("./Equation");function o(l,h,u){u=typeof u<"u"?u:1e6,s.call(this,l,h,-u,u),this.axisA=new i,this.axisB=new i,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(t,n,r){var i=t("../utils/Utils");n.exports=s;function s(o,l,h){h=i.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(t,n,r){n.exports=i;function i(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=i.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}i.idCounter=0},{}],26:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(){this.spatial=new i,this.rotational=new i}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,l){return o.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var l=this.elements;l[0]=o.x,l[4]=o.y,l[8]=o.z},s.prototype.getTrace=function(l){var l=l||new i,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},s.prototype.vmult=function(o,l){l=l||new i;var h=this.elements,u=o.x,c=o.y,d=o.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},s.prototype.smult=function(o){for(var l=0;l<this.elements.length;l++)this.elements[l]*=o},s.prototype.mmult=function(o,l){for(var h=l||new s,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=o.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},s.prototype.scale=function(o,l){l=l||new s;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=o.x*h[3*c+0],u[3*c+1]=o.y*h[3*c+1],u[3*c+2]=o.z*h[3*c+2];return l},s.prototype.solve=function(o,l){l=l||new i;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=o.x,c[3+4*1]=o.y,c[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){m=p;do _=p-m,c[_+u*d]+=c[_+u*f];while(--m);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var y=c[d+u*f]/c[d+u*d];m=p;do _=p-m,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*y;while(--m)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(o,l,h){if(h===void 0)return this.elements[l+3*o];this.elements[l+3*o]=h},s.prototype.copy=function(o){for(var l=0;l<o.elements.length;l++)this.elements[l]=o.elements[l];return this},s.prototype.toString=function(){for(var o="",l=",",h=0;h<9;h++)o+=this.elements[h]+l;return o},s.prototype.reverse=function(o){o=o||new s;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,m=h,p;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=m;do p=m-g,u[p+h*c]+=u[p+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var _=u[c+h*d]/u[c+h*c];g=m;do p=m-g,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do p=h-g,u[p+h*d]=u[p+h*d]-u[p+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(c,d,p)}while(d--)}while(c--);return o},s.prototype.setRotationFromQuaternion=function(o){var l=o.x,h=o.y,u=o.z,c=o.w,d=l+l,f=h+h,v=u+u,g=l*d,m=l*f,p=l*v,_=h*f,y=h*v,x=u*v,M=c*d,C=c*f,B=c*v,F=this.elements;return F[3*0+0]=1-(_+x),F[3*0+1]=m-B,F[3*0+2]=p+C,F[3*1+0]=m+B,F[3*1+1]=1-(g+x),F[3*1+2]=y-M,F[3*2+0]=p-C,F[3*2+1]=y+M,F[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var l=o.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return o}},{"./Vec3":30}],28:[function(t,n,r){n.exports=s;var i=t("./Vec3");function s(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new i,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new i,l=new i;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new i,u=new i,c=new i;s.prototype.mult=function(d,f){f=f||new s;var v=this.w,g=h,m=u,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},s.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new s,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new i;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,y=this.z,x=this.w,M=x*v+_*m-y*g,C=x*g+y*v-p*m,B=x*m+p*g-_*v,F=-p*v-_*g-y*m;return f.x=M*x+F*-p+C*-y-B*-_,f.y=C*x+F*-_+B*-p-M*-y,f.z=B*x+F*-y+M*-_-C*-p,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var M=p*_+y*x;if(M>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var C=p*p,B=_*_,F=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*B-2*F),g=Math.asin(2*M),m=Math.atan2(2*p*x-2*_*y,1-2*C-2*F)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},s.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_-y*x*M):g==="YXZ"?(this.x=y*p*_+m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_+y*x*M):g==="ZXY"?(this.x=y*p*_-m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_-y*x*M):g==="ZYX"?(this.x=y*p*_-m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_+y*x*M):g==="YZX"?(this.x=y*p*_+m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_-y*x*M):g==="XZY"&&(this.x=y*p*_-m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_+y*x*M),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(t,n,r){var i=t("./Vec3"),s=t("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new i,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new s;o.pointToLocalFrame=function(h,u,c,f){var f=f||new i;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,c,f){var f=f||new i;return u.vmult(c,f),f.vadd(h,f),f},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,c){var c=c||new i;return this.quaternion.vmult(h,c),c},o.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},o.vectorToLocalFrame=function(h,u,c,f){var f=f||new i;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(t,n,r){n.exports=s;var i=t("./Mat3");function s(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,m=this.y,p=this.z;return c=c||new s,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},s.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new i([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},s.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},s.prototype.mult=function(u,c){c=c||new s;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,l=new s;s.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},s.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(t,n,r){n.exports=c;var i=t("../utils/EventTarget");t("../shapes/Shape");var s=t("../math/Vec3"),o=t("../math/Mat3"),l=t("../math/Quaternion");t("../material/Material");var h=t("../collision/AABB"),u=t("../shapes/Box");function c(D){D=D||{},i.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof D.collisionFilterGroup=="number"?D.collisionFilterGroup:1,this.collisionFilterMask=typeof D.collisionFilterMask=="number"?D.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,D.position&&this.position.copy(D.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,D.velocity&&this.velocity.copy(D.velocity),this.initVelocity=new s,this.force=new s;var V=typeof D.mass=="number"?D.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=D.material||null,this.linearDamping=typeof D.linearDamping=="number"?D.linearDamping:.01,this.type=V<=0?c.STATIC:c.DYNAMIC,typeof D.type==typeof c.STATIC&&(this.type=D.type),this.allowSleep=typeof D.allowSleep<"u"?D.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof D.sleepSpeedLimit<"u"?D.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof D.sleepTimeLimit<"u"?D.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,D.quaternion&&this.quaternion.copy(D.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,D.angularVelocity&&this.angularVelocity.copy(D.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof D.fixedRotation<"u"?D.fixedRotation:!1,this.angularDamping=typeof D.angularDamping<"u"?D.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,D.shape&&this.addShape(D.shape),this.updateMassProperties()}c.prototype=new i,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var D=this.sleepState;this.sleepState=0,D===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(D){if(this.allowSleep){var V=this.sleepState,I=this.velocity.norm2()+this.angularVelocity.norm2(),X=Math.pow(this.sleepSpeedLimit,2);V===c.AWAKE&&I<X?(this.sleepState=c.SLEEPY,this.timeLastSleepy=D,this.dispatchEvent(c.sleepyEvent)):V===c.SLEEPY&&I>X?this.wakeUp():V===c.SLEEPY&&D-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(D,I){var I=I||new s;return D.vsub(this.position,I),this.quaternion.conjugate().vmult(I,I),I},c.prototype.vectorToLocalFrame=function(D,I){var I=I||new s;return this.quaternion.conjugate().vmult(D,I),I},c.prototype.pointToWorldFrame=function(D,I){var I=I||new s;return this.quaternion.vmult(D,I),I.vadd(this.position,I),I},c.prototype.vectorToWorldFrame=function(D,I){var I=I||new s;return this.quaternion.vmult(D,I),I};var d=new s,f=new l;c.prototype.addShape=function(D,V,I){var X=new s,q=new l;return V&&X.copy(V),I&&q.copy(I),this.shapes.push(D),this.shapeOffsets.push(X),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var D=this.shapes,V=this.shapeOffsets,I=D.length,X=0,q=0;q!==I;q++){var ne=D[q];ne.updateBoundingSphereRadius();var O=V[q].norm(),U=ne.boundingSphereRadius;O+U>X&&(X=O+U)}this.boundingRadius=X};var v=new h;c.prototype.computeAABB=function(){for(var D=this.shapes,V=this.shapeOffsets,I=this.shapeOrientations,X=D.length,q=d,ne=f,O=this.quaternion,U=this.aabb,J=v,Y=0;Y!==X;Y++){var H=D[Y];I[Y].mult(O,ne),ne.vmult(V[Y],q),q.vadd(this.position,q),H.calculateWorldAABB(q,ne,J.lowerBound,J.upperBound),Y===0?U.copy(J):U.extend(J)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,c.prototype.updateInertiaWorld=function(D){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!D)){var I=g,X=m;I.setRotationFromQuaternion(this.quaternion),I.transpose(X),I.scale(V,I),I.mmult(X,this.invInertiaWorld)}};var p=new s,_=new s;c.prototype.applyForce=function(D,V){if(this.type===c.DYNAMIC){var I=p;V.vsub(this.position,I);var X=_;I.cross(D,X),this.force.vadd(D,this.force),this.torque.vadd(X,this.torque)}};var y=new s,x=new s;c.prototype.applyLocalForce=function(D,V){if(this.type===c.DYNAMIC){var I=y,X=x;this.vectorToWorldFrame(D,I),this.pointToWorldFrame(V,X),this.applyForce(I,X)}};var M=new s,C=new s,B=new s;c.prototype.applyImpulse=function(D,V){if(this.type===c.DYNAMIC){var I=M;V.vsub(this.position,I);var X=C;X.copy(D),X.mult(this.invMass,X),this.velocity.vadd(X,this.velocity);var q=B;I.cross(D,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var F=new s,E=new s;c.prototype.applyLocalImpulse=function(D,V){if(this.type===c.DYNAMIC){var I=F,X=E;this.vectorToWorldFrame(D,I),this.pointToWorldFrame(V,X),this.applyImpulse(I,X)}};var S=new s;c.prototype.updateMassProperties=function(){var D=S;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,I=this.fixedRotation;this.computeAABB(),D.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(D,this.mass,V),this.invInertia.set(V.x>0&&!I?1/V.x:0,V.y>0&&!I?1/V.y:0,V.z>0&&!I?1/V.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(D,V){var I=new s;return D.vsub(this.position,I),this.angularVelocity.cross(I,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(t,n,r){t("./Body");var i=t("../math/Vec3"),s=t("../math/Quaternion");t("../collision/RaycastResult");var o=t("../collision/Ray"),l=t("../objects/WheelInfo");n.exports=h;function h(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new i,new i,new i;var u=new i,c=new i,d=new i;new o,h.prototype.addWheel=function(O){O=O||{};var U=new l(O),J=this.wheelInfos.length;return this.wheelInfos.push(U),J},h.prototype.setSteeringValue=function(O,U){var J=this.wheelInfos[U];J.steering=O},new i,h.prototype.applyEngineForce=function(O,U){this.wheelInfos[U].engineForce=O},h.prototype.setBrake=function(O,U){this.wheelInfos[U].brake=O},h.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},h.prototype.getVehicleAxisWorld=function(O,U){U.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},h.prototype.updateVehicle=function(O){for(var U=this.wheelInfos,J=U.length,Y=this.chassisBody,H=0;H<J;H++)this.updateWheelTransform(H);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var W=new i;this.getVehicleAxisWorld(this.indexForwardAxis,W),W.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var H=0;H<J;H++)this.castRay(U[H]);this.updateSuspension(O);for(var b=new i,A=new i,H=0;H<J;H++){var R=U[H],G=R.suspensionForce;G>R.maxSuspensionForce&&(G=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(G*O,b),R.raycastResult.hitPointWorld.vsub(Y.position,A),Y.applyImpulse(b,R.raycastResult.hitPointWorld)}this.updateFriction(O);var P=new i,te=new i,K=new i;for(H=0;H<J;H++){var R=U[H];Y.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var $=1;switch(this.indexUpAxis){case 1:$=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,te);var re=te.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(re,P),te.vsub(P,te);var be=te.dot(K);R.deltaRotation=$*be*O/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*O),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(O){for(var U=this.chassisBody,J=U.mass,Y=this.wheelInfos,H=Y.length,W=0;W<H;W++){var b=Y[W];if(b.isInContact){var A,R=b.suspensionRestLength,G=b.suspensionLength,P=R-G;A=b.suspensionStiffness*P*b.clippedInvContactDotSuspension;var te=b.suspensionRelativeVelocity,K;te<0?K=b.dampingCompression:K=b.dampingRelaxation,A-=K*te,b.suspensionForce=A*J,b.suspensionForce<0&&(b.suspensionForce=0)}else b.suspensionForce=0}},h.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new i,v=new i;h.prototype.castRay=function(O){var U=f,J=v;this.updateWheelTransformWorld(O);var Y=this.chassisBody,H=-1,W=O.suspensionRestLength+O.radius;O.directionWorld.scale(W,U);var b=O.chassisConnectionPointWorld;b.vadd(U,J);var A=O.raycastResult;A.reset();var R=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(b,J,A),Y.collisionResponse=R;var G=A.body;if(O.raycastResult.groundObject=0,G){H=A.distance,O.raycastResult.hitNormalWorld=A.hitNormalWorld,O.isInContact=!0;var P=A.distance;O.suspensionLength=P-O.radius;var te=O.suspensionRestLength-O.maxSuspensionTravel,K=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<te&&(O.suspensionLength=te),O.suspensionLength>K&&(O.suspensionLength=K,O.raycastResult.reset());var $=O.raycastResult.hitNormalWorld.dot(O.directionWorld),re=new i;Y.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,re);var be=O.raycastResult.hitNormalWorld.dot(re);if($>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var pe=-1/$;O.suspensionRelativeVelocity=be*pe,O.clippedInvContactDotSuspension=pe}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return H},h.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),U.vectorToWorldFrame(O.directionLocal,O.directionWorld),U.vectorToWorldFrame(O.axleLocal,O.axleWorld)},h.prototype.updateWheelTransform=function(O){var U=u,J=c,Y=d,H=this.wheelInfos[O];this.updateWheelTransformWorld(H),H.directionLocal.scale(-1,U),J.copy(H.axleLocal),U.cross(J,Y),Y.normalize(),J.normalize();var W=H.steering,b=new s;b.setFromAxisAngle(U,W);var A=new s;A.setFromAxisAngle(J,H.rotation);var R=H.worldTransform.quaternion;this.chassisBody.quaternion.mult(b,R),R.mult(A,R),R.normalize();var G=H.worldTransform.position;G.copy(H.directionWorld),G.scale(H.suspensionLength,G),G.vadd(H.chassisConnectionPointWorld,G)};var g=[new i(1,0,0),new i(0,1,0),new i(0,0,1)];h.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new i,p=[],_=[],y=1;h.prototype.updateFriction=function(O){for(var U=m,J=this.wheelInfos,Y=J.length,H=this.chassisBody,W=_,b=p,A=0;A<Y;A++){var R=J[A],G=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,W[A]||(W[A]=new i),b[A]||(b[A]=new i)}for(var A=0;A<Y;A++){var R=J[A],G=R.raycastResult.body;if(G){var P=b[A],te=this.getWheelTransformWorld(A);te.vectorToWorldFrame(g[this.indexRightAxis],P);var K=R.raycastResult.hitNormalWorld,$=P.dot(K);K.scale($,U),P.vsub(U,P),P.normalize(),K.cross(P,W[A]),W[A].normalize(),R.sideImpulse=ne(H,R.raycastResult.hitPointWorld,G,R.raycastResult.hitPointWorld,P),R.sideImpulse*=y}}var re=1,be=.5;this.sliding=!1;for(var A=0;A<Y;A++){var R=J[A],G=R.raycastResult.body,pe=0;if(R.slipInfo=1,G){var xe=0,he=R.brake?R.brake:xe;pe=B(H,G,R.raycastResult.hitPointWorld,W[A],he),pe+=R.engineForce*O;var ge=he/pe;R.slipInfo*=ge}if(R.forwardImpulse=0,R.skidInfo=1,G){R.skidInfo=1;var ke=R.suspensionForce*O*R.frictionSlip,Be=ke,Ge=ke*Be;R.forwardImpulse=pe;var we=R.forwardImpulse*be,Ye=R.sideImpulse*re,N=we*we+Ye*Ye;if(R.sliding=!1,N>Ge){this.sliding=!0,R.sliding=!0;var ge=ke/Math.sqrt(N);R.skidInfo*=ge}}}if(this.sliding)for(var A=0;A<Y;A++){var R=J[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<Y;A++){var R=J[A],w=new i;if(w.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var ie=new i;W[A].scale(R.forwardImpulse,ie),H.applyImpulse(ie,w)}if(R.sideImpulse!==0){var G=R.raycastResult.body,de=new i;de.copy(R.raycastResult.hitPointWorld);var _e=new i;b[A].scale(R.sideImpulse,_e),H.pointToLocalFrame(w,w),w["xyz"[this.indexUpAxis]]*=R.rollInfluence,H.pointToWorldFrame(w,w),H.applyImpulse(_e,w),_e.scale(-1,_e),G.applyImpulse(_e,de)}}};var x=new i,M=new i,C=new i;function B(O,U,J,Y,H){var W=0,b=J,A=x,R=M,G=C;O.getVelocityAtWorldPoint(b,A),U.getVelocityAtWorldPoint(b,R),A.vsub(R,G);var P=Y.dot(G),te=V(O,J,Y),K=V(U,J,Y),$=1,re=$/(te+K);return W=-P*re,H<W&&(W=H),W<-H&&(W=-H),W}var F=new i,E=new i,S=new i,D=new i;function V(O,U,J){var Y=F,H=E,W=S,b=D;return U.vsub(O.position,Y),Y.cross(J,H),O.invInertiaWorld.vmult(H,b),b.cross(Y,W),O.invMass+J.dot(W)}var I=new i,X=new i,q=new i;function ne(O,U,J,Y,H,$){var b=H.norm2();if(b>1.1)return 0;var A=I,R=X,G=q;O.getVelocityAtWorldPoint(U,A),J.getVelocityAtWorldPoint(Y,R),A.vsub(R,G);var P=H.dot(G),te=.2,K=1/(O.invMass+J.invMass),$=-te*P*K;return $}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(t,n,r){var i=t("./Body"),s=t("../shapes/Sphere"),o=t("../shapes/Box"),l=t("../math/Vec3"),h=t("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new l(5,2,.5));this.chassisBody=new i(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new i(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(t,n,r){n.exports=s,t("../shapes/Shape");var i=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new i;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var M=this.particles[x];M.position.vsub(v.position,y),p!==M.id&&y.norm2()<_&&g.push(M)}};var l=new i,h=new i,u=new i,c=new i,d=new i,f=new i;s.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var M=x.length,C=0,B=0;B!==M;B++){y.position.vsub(x[B].position,g);var F=g.norm(),E=this.w(F);C+=x[B].mass*E}this.densities[_]=C,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=h,D=u,V=c,I=d,X=f,_=0;_!==v;_++){var q=this.particles[_];S.set(0,0,0),D.set(0,0,0);for(var ne,O,x=this.neighbors[_],M=x.length,B=0;B!==M;B++){var U=x[B];q.position.vsub(U.position,I);var J=I.norm();ne=-U.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[B]/(this.densities[B]*this.densities[B]+p)),this.gradw(I,V),V.mult(ne,V),S.vadd(V,S),U.velocity.vsub(q.velocity,X),X.mult(1/(1e-4+this.densities[_]*this.densities[B])*this.viscosity*U.mass,X),O=this.nablaw(J),X.mult(O,X),D.vadd(X,D)}D.mult(q.mass,D),S.mult(q.mass,S),q.force.vadd(D,q.force),q.force.vadd(S,q.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(t,n,r){var i=t("../math/Vec3");n.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new i,this.localAnchorB=new i,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new i,l=new i,h=new i,u=new i,c=new i,d=new i,f=new i,v=new i,g=new i,m=new i,p=new i;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,M=this.bodyA,C=this.bodyB,B=o,F=l,E=h,S=u,D=p,V=c,I=d,X=f,q=v,ne=g,O=m;this.getWorldAnchorA(V),this.getWorldAnchorB(I),V.vsub(M.position,X),I.vsub(C.position,q),I.vsub(V,B);var U=B.norm();F.copy(B),F.normalize(),C.velocity.vsub(M.velocity,E),C.angularVelocity.cross(q,D),E.vadd(D,E),M.angularVelocity.cross(X,D),E.vsub(D,E),F.mult(-_*(U-x)-y*E.dot(F),S),M.force.vsub(S,M.force),C.force.vadd(S,C.force),X.cross(S,ne),q.cross(S,O),M.torque.vsub(ne,M.torque),C.torque.vadd(O,C.torque)}},{"../math/Vec3":30}],36:[function(t,n,r){var i=t("../math/Vec3"),s=t("../math/Transform"),o=t("../collision/RaycastResult"),l=t("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new i,chassisConnectionPointWorld:new i,directionLocal:new i,directionWorld:new i,axleLocal:new i,axleWorld:new i,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var c=new i,u=new i,c=new i;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3"),o=t("./ConvexPolyhedron");function l(c){i.call(this),this.type=i.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new s,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=u[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform");function l(H,W,b){i.call(this),this.type=i.types.CONVEXPOLYHEDRON,this.vertices=H||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=W||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=b?b.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new i,l.prototype.constructor=l;var h=new s;l.prototype.computeEdges=function(){var H=this.faces,W=this.vertices;W.length;var b=this.uniqueEdges;b.length=0;for(var A=h,R=0;R!==H.length;R++)for(var G=H[R],P=G.length,te=0;te!==P;te++){var K=(te+1)%P;W[G[te]].vsub(W[G[K]],A),A.normalize();for(var $=!1,re=0;re!==b.length;re++)if(b[re].almostEquals(A)||b[re].almostEquals(A)){$=!0;break}$||b.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var H=0;H<this.faces.length;H++){for(var W=0;W<this.faces[H].length;W++)if(!this.vertices[this.faces[H][W]])throw new Error("Vertex "+this.faces[H][W]+" not found!");var b=this.faceNormals[H]||new s;this.getFaceNormal(H,b),b.negate(b),this.faceNormals[H]=b;var A=this.vertices[this.faces[H][0]];if(b.dot(A)<0){console.error(".faceNormals["+H+"] = Vec3("+b.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var W=0;W<this.faces[H].length;W++)console.warn(".vertices["+this.faces[H][W]+"] = Vec3("+this.vertices[this.faces[H][W]].toString()+")")}}};var u=new s,c=new s;l.computeNormal=function(H,W,b,A){W.vsub(H,c),b.vsub(W,u),u.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(H,W){var b=this.faces[H],A=this.vertices[b[0]],R=this.vertices[b[1]],G=this.vertices[b[2]];return l.computeNormal(A,R,G,W)};var d=new s;l.prototype.clipAgainstHull=function(H,W,b,A,R,G,P,te,K){for(var $=d,re=-1,be=-Number.MAX_VALUE,pe=0;pe<b.faces.length;pe++){$.copy(b.faceNormals[pe]),R.vmult($,$);var xe=$.dot(G);xe>be&&(be=xe,re=pe)}for(var he=[],ge=b.faces[re],ke=ge.length,Be=0;Be<ke;Be++){var Ge=b.vertices[ge[Be]],we=new s;we.copy(Ge),R.vmult(we,we),A.vadd(we,we),he.push(we)}re>=0&&this.clipFaceAgainstHull(G,H,W,he,P,te,K)};var f=new s,v=new s,g=new s,m=new s,p=new s,_=new s;l.prototype.findSeparatingAxis=function(H,W,b,A,R,G,P,te){var K=f,$=v,re=g,be=m,pe=p,xe=_,he=Number.MAX_VALUE,ge=this;if(ge.uniqueAxes)for(var Be=0;Be!==ge.uniqueAxes.length;Be++){b.vmult(ge.uniqueAxes[Be],K);var we=ge.testSepAxis(K,H,W,b,A,R);if(we===!1)return!1;we<he&&(he=we,G.copy(K))}else for(var ke=P?P.length:ge.faces.length,Be=0;Be<ke;Be++){var Ge=P?P[Be]:Be;K.copy(ge.faceNormals[Ge]),b.vmult(K,K);var we=ge.testSepAxis(K,H,W,b,A,R);if(we===!1)return!1;we<he&&(he=we,G.copy(K))}if(H.uniqueAxes)for(var Be=0;Be!==H.uniqueAxes.length;Be++){R.vmult(H.uniqueAxes[Be],$);var we=ge.testSepAxis($,H,W,b,A,R);if(we===!1)return!1;we<he&&(he=we,G.copy($))}else for(var Ye=te?te.length:H.faces.length,Be=0;Be<Ye;Be++){var Ge=te?te[Be]:Be;$.copy(H.faceNormals[Ge]),R.vmult($,$);var we=ge.testSepAxis($,H,W,b,A,R);if(we===!1)return!1;we<he&&(he=we,G.copy($))}for(var N=0;N!==ge.uniqueEdges.length;N++){b.vmult(ge.uniqueEdges[N],be);for(var w=0;w!==H.uniqueEdges.length;w++)if(R.vmult(H.uniqueEdges[w],pe),be.cross(pe,xe),!xe.almostZero()){xe.normalize();var ie=ge.testSepAxis(xe,H,W,b,A,R);if(ie===!1)return!1;ie<he&&(he=ie,G.copy(xe))}}return A.vsub(W,re),re.dot(G)>0&&G.negate(G),!0};var y=[],x=[];l.prototype.testSepAxis=function(H,W,b,A,R,G){var P=this;l.project(P,H,b,A,y),l.project(W,H,R,G,x);var te=y[0],K=y[1],$=x[0],re=x[1],be=te-re,pe=$-K,xe=be<pe?be:pe;return xe};var M=new s,C=new s;l.prototype.calculateLocalInertia=function(H,W){this.computeLocalAABB(M,C);var b=C.x-M.x,A=C.y-M.y,R=C.z-M.z;W.x=1/12*H*(2*A*2*A+2*R*2*R),W.y=1/12*H*(2*b*2*b+2*R*2*R),W.z=1/12*H*(2*A*2*A+2*b*2*b)},l.prototype.getPlaneConstantOfFace=function(H){var W=this.faces[H],b=this.faceNormals[H],A=this.vertices[W[0]],R=-b.dot(A);return R};var B=new s,F=new s,E=new s,S=new s,D=new s,V=new s,I=new s,X=new s;l.prototype.clipFaceAgainstHull=function(H,W,b,A,R,G,P){for(var te=B,K=F,$=E,re=S,be=D,pe=V,xe=I,he=X,ge=this,ke=[],Be=A,Ge=ke,we=-1,Ye=Number.MAX_VALUE,N=0;N<ge.faces.length;N++){te.copy(ge.faceNormals[N]),b.vmult(te,te);var w=te.dot(H);w<Ye&&(Ye=w,we=N)}if(!(we<0)){var ie=ge.faces[we];ie.connectedFaces=[];for(var de=0;de<ge.faces.length;de++)for(var _e=0;_e<ge.faces[de].length;_e++)ie.indexOf(ge.faces[de][_e])!==-1&&de!==we&&ie.connectedFaces.indexOf(de)===-1&&ie.connectedFaces.push(de);Be.length;for(var ye=ie.length,k=0;k<ye;k++){var me=ge.vertices[ie[k]],se=ge.vertices[ie[(k+1)%ye]];me.vsub(se,K),$.copy(K),b.vmult($,$),W.vadd($,$),re.copy(this.faceNormals[we]),b.vmult(re,re),W.vadd(re,re),$.cross(re,be),be.negate(be),pe.copy(me),b.vmult(pe,pe),W.vadd(pe,pe),-pe.dot(be);var Oe;{var Ce=ie.connectedFaces[k];xe.copy(this.faceNormals[Ce]);var Ue=this.getPlaneConstantOfFace(Ce);he.copy(xe),b.vmult(he,he);var Oe=Ue-he.dot(W)}for(this.clipFaceAgainstPlane(Be,Ge,he,Oe);Be.length;)Be.shift();for(;Ge.length;)Be.push(Ge.shift())}xe.copy(this.faceNormals[we]);var Ue=this.getPlaneConstantOfFace(we);he.copy(xe),b.vmult(he,he);for(var Oe=Ue-he.dot(W),de=0;de<Be.length;de++){var Pe=he.dot(Be[de])+Oe;if(Pe<=R&&(console.log("clamped: depth="+Pe+" to minDist="+(R+"")),Pe=R),Pe<=G){var Ve=Be[de];if(Pe<=0){var We={point:Ve,normal:he,depth:Pe};P.push(We)}}}}},l.prototype.clipFaceAgainstPlane=function(H,W,b,A){var R,G,P=H.length;if(P<2)return W;var te=H[H.length-1],K=H[0];R=b.dot(te)+A;for(var $=0;$<P;$++){if(K=H[$],G=b.dot(K)+A,R<0)if(G<0){var re=new s;re.copy(K),W.push(re)}else{var re=new s;te.lerp(K,R/(R-G),re),W.push(re)}else if(G<0){var re=new s;te.lerp(K,R/(R-G),re),W.push(re),W.push(K)}te=K,R=G}return W},l.prototype.computeWorldVertices=function(H,W){for(var b=this.vertices.length;this.worldVertices.length<b;)this.worldVertices.push(new s);for(var A=this.vertices,R=this.worldVertices,G=0;G!==b;G++)W.vmult(A[G],R[G]),H.vadd(R[G],R[G]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(H,W){var b=this.vertices.length,A=this.vertices;H.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),W.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<b;R++){var G=A[R];G.x<H.x?H.x=G.x:G.x>W.x&&(W.x=G.x),G.y<H.y?H.y=G.y:G.y>W.y&&(W.y=G.y),G.z<H.z?H.z=G.z:G.z>W.z&&(W.z=G.z)}},l.prototype.computeWorldFaceNormals=function(H){for(var W=this.faceNormals.length;this.worldFaceNormals.length<W;)this.worldFaceNormals.push(new s);for(var b=this.faceNormals,A=this.worldFaceNormals,R=0;R!==W;R++)H.vmult(b[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var H=0,W=this.vertices,b=0,A=W.length;b!==A;b++){var R=W[b].norm2();R>H&&(H=R)}this.boundingSphereRadius=Math.sqrt(H)};var q=new s;l.prototype.calculateWorldAABB=function(H,W,b,A){for(var R=this.vertices.length,G=this.vertices,P,te,K,$,re,be,pe=0;pe<R;pe++){q.copy(G[pe]),W.vmult(q,q),H.vadd(q,q);var xe=q;xe.x<P||P===void 0?P=xe.x:(xe.x>$||$===void 0)&&($=xe.x),xe.y<te||te===void 0?te=xe.y:(xe.y>re||re===void 0)&&(re=xe.y),xe.z<K||K===void 0?K=xe.z:(xe.z>be||be===void 0)&&(be=xe.z)}b.set(P,te,K),A.set($,re,be)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(H){H=H||new s;for(var W=this.vertices.length,b=this.vertices,A=0;A<W;A++)H.vadd(b[A],H);return H.mult(1/W,H),H},l.prototype.transformAllPoints=function(H,W){var b=this.vertices.length,A=this.vertices;if(W){for(var R=0;R<b;R++){var G=A[R];W.vmult(G,G)}for(var R=0;R<this.faceNormals.length;R++){var G=this.faceNormals[R];W.vmult(G,G)}}if(H)for(var R=0;R<b;R++){var G=A[R];G.vadd(H,G)}};var ne=new s,O=new s,U=new s;l.prototype.pointIsInside=function(H){var W=this.vertices.length,b=this.vertices,A=this.faces,R=this.faceNormals,G=null,P=this.faces.length,te=ne;this.getAveragePointLocal(te);for(var K=0;K<P;K++){this.faces[K].length;var W=R[K],$=b[A[K][0]],re=O;H.vsub($,re);var be=W.dot(re),pe=U;te.vsub($,pe);var xe=W.dot(pe);if(be<0&&xe>0||be>0&&xe<0)return!1}return G?1:-1},new s;var J=new s,Y=new s;l.project=function(H,W,b,A,R){var G=H.vertices.length,P=J,te=0,K=0,$=Y,re=H.vertices;$.setZero(),o.vectorToLocalFrame(b,A,W,P),o.pointToLocalFrame(b,A,$,$);var be=$.dot(P);K=te=re[0].dot(P);for(var pe=1;pe<G;pe++){var xe=re[pe].dot(P);xe>te&&(te=xe),xe<K&&(K=xe)}if(K-=be,te-=be,K>te){var he=K;K=te,te=he}R[0]=te,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(t,n,r){n.exports=l;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new s(u*y(0),u*x(0),-c*.5)),p.push(0),v.push(new s(h*y(0),h*x(0),c*.5)),_.push(1);for(var M=0;M<f;M++){var C=2*Math.PI/f*(M+1),B=2*Math.PI/f*(M+.5);M<f-1?(v.push(new s(u*y(C),u*x(C),-c*.5)),p.push(2*M+2),v.push(new s(h*y(C),h*x(C),c*.5)),_.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(f%2===1||M<f/2)&&g.push(new s(y(B),x(B),0))}m.push(_),g.push(new s(0,0,1));for(var F=[],M=0;M<p.length;M++)F.push(p[p.length-M-1]);m.push(F),this.type=i.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}l.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(t,n,r){var i=t("./Shape"),s=t("./ConvexPolyhedron"),o=t("../math/Vec3"),l=t("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,i.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=i.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new i,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=u;p<=d;p++)for(var _=c;_<=f;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(u/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*m,(c+.75)*m,x),y[0].set(.25*m,.25*m,g[u+1][c+1]-x),y[1].set(-.75*m,.25*m,g[u][c+1]-x),y[2].set(.25*m,-.75*m,g[u+1][c]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((u+.25)*m,(c+.25)*m,x),y[0].set(-.25*m,-.25*m,g[u][c]-x),y[1].set(.75*m,-.25*m,g[u+1][c]-x),y[2].set(-.25*m,.75*m,g[u][c+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new o,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new o(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(){i.call(this),this.type=i.types.PARTICLE}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){return h=h||new s,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(){i.call(this),this.type=i.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new i,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;o.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(t,n,r){n.exports=i;var i=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function i(){this.id=i.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}i.prototype.constructor=i,i.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},i.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},i.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},i.idCounter=0,i.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(t,n,r){n.exports=o;var i=t("./Shape"),s=t("../math/Vec3");function o(l){if(i.call(this),this.radius=l!==void 0?Number(l):1,this.type=i.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new i,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(l,h){h=h||new s;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(t,n,r){n.exports=u;var i=t("./Shape"),s=t("../math/Vec3");t("../math/Quaternion");var o=t("../math/Transform"),l=t("../collision/AABB"),h=t("../utils/Octree");function u(F,E){i.call(this),this.type=i.types.TRIMESH,this.vertices=new Float32Array(F),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new i,u.prototype.constructor=u;var c=new s;u.prototype.updateTree=function(){var F=this.tree;F.reset(),F.aabb.copy(this.aabb);var E=this.scale;F.aabb.lowerBound.x*=1/E.x,F.aabb.lowerBound.y*=1/E.y,F.aabb.lowerBound.z*=1/E.z,F.aabb.upperBound.x*=1/E.x,F.aabb.upperBound.y*=1/E.y,F.aabb.upperBound.z*=1/E.z;for(var S=new l,D=new s,V=new s,I=new s,X=[D,V,I],q=0;q<this.indices.length/3;q++){var ne=q*3;this._getUnscaledVertex(this.indices[ne],D),this._getUnscaledVertex(this.indices[ne+1],V),this._getUnscaledVertex(this.indices[ne+2],I),S.setFromPoints(X),F.insert(S,q)}F.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(F,E){d.copy(F);var S=this.scale,D=S.x,V=S.y,I=S.z,X=d.lowerBound,q=d.upperBound;return X.x/=D,X.y/=V,X.z/=I,q.x/=D,q.y/=V,q.z/=I,this.tree.aabbQuery(d,E)},u.prototype.setScale=function(F){var E=this.scale.x===this.scale.y===this.scale.z,S=F.x===F.y===F.z;E&&S||this.updateNormals(),this.scale.copy(F),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var F=c,E=this.normals,S=0;S<this.indices.length/3;S++){var D=S*3,V=this.indices[D],I=this.indices[D+1],X=this.indices[D+2];this.getVertex(V,p),this.getVertex(I,_),this.getVertex(X,y),u.computeNormal(_,p,y,F),E[D]=F.x,E[D+1]=F.y,E[D+2]=F.z}},u.prototype.updateEdges=function(){for(var F={},E=function(ne,O){var U=V<I?V+"_"+I:I+"_"+V;F[U]=!0},S=0;S<this.indices.length/3;S++){var D=S*3,V=this.indices[D],I=this.indices[D+1];this.indices[D+2],E(),E(),E()}var X=Object.keys(F);this.edges=new Int16Array(X.length*2);for(var S=0;S<X.length;S++){var q=X[S].split("_");this.edges[2*S]=parseInt(q[0],10),this.edges[2*S+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(F,E,S){var D=this.edges[F*2+(E?1:0)];this.getVertex(D,S)};var f=new s,v=new s;u.prototype.getEdgeVector=function(F,E){var S=f,D=v;this.getEdgeVertex(F,0,S),this.getEdgeVertex(F,1,D),D.vsub(S,E)};var g=new s,m=new s;u.computeNormal=function(F,E,S,D){E.vsub(F,m),S.vsub(E,g),g.cross(m,D),D.isZero()||D.normalize()};var p=new s,_=new s,y=new s;u.prototype.getVertex=function(F,E){var S=this.scale;return this._getUnscaledVertex(F,E),E.x*=S.x,E.y*=S.y,E.z*=S.z,E},u.prototype._getUnscaledVertex=function(F,E){var S=F*3,D=this.vertices;return E.set(D[S],D[S+1],D[S+2])},u.prototype.getWorldVertex=function(F,E,S,D){return this.getVertex(F,D),o.pointToWorldFrame(E,S,D,D),D},u.prototype.getTriangleVertices=function(F,E,S,D){var V=F*3;this.getVertex(this.indices[V],E),this.getVertex(this.indices[V+1],S),this.getVertex(this.indices[V+2],D)},u.prototype.getNormal=function(F,E){var S=F*3;return E.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var x=new l;u.prototype.calculateLocalInertia=function(F,E){this.computeLocalAABB(x);var S=x.upperBound.x-x.lowerBound.x,D=x.upperBound.y-x.lowerBound.y,V=x.upperBound.z-x.lowerBound.z;return E.set(1/12*F*(2*D*2*D+2*V*2*V),1/12*F*(2*S*2*S+2*V*2*V),1/12*F*(2*D*2*D+2*S*2*S))};var M=new s;u.prototype.computeLocalAABB=function(F){var E=F.lowerBound,S=F.upperBound,D=this.vertices.length;this.vertices;var V=M;this.getVertex(0,V),E.copy(V),S.copy(V);for(var I=0;I!==D;I++)this.getVertex(I,V),V.x<E.x?E.x=V.x:V.x>S.x&&(S.x=V.x),V.y<E.y?E.y=V.y:V.y>S.y&&(S.y=V.y),V.z<E.z?E.z=V.z:V.z>S.z&&(S.z=V.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var F=0,E=this.vertices,S=new s,D=0,V=E.length/3;D!==V;D++){this.getVertex(D,S);var I=S.norm2();I>F&&(F=I)}this.boundingSphereRadius=Math.sqrt(F)},new s;var C=new o,B=new l;u.prototype.calculateWorldAABB=function(F,E,S,D){var V=C,I=B;V.position=F,V.quaternion=E,this.aabb.toWorldFrame(V,I),S.copy(I.lowerBound),D.copy(I.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(F,E,S,D,V){F=F||1,E=E||.5,S=S||8,D=D||6,V=V||Math.PI*2;for(var I=[],X=[],q=0;q<=S;q++)for(var ne=0;ne<=D;ne++){var O=ne/D*V,U=q/S*Math.PI*2,J=(F+E*Math.cos(U))*Math.cos(O),Y=(F+E*Math.cos(U))*Math.sin(O),H=E*Math.sin(U);I.push(J,Y,H)}for(var q=1;q<=S;q++)for(var ne=1;ne<=D;ne++){var W=(D+1)*q+ne-1,b=(D+1)*(q-1)+ne-1,A=(D+1)*(q-1)+ne,R=(D+1)*q+ne;X.push(W,b,R),X.push(b,A,R)}return new u(I,X)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(t,n,r){n.exports=s,t("../math/Vec3"),t("../math/Quaternion");var i=t("./Solver");function s(){i.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new i;var o=[],l=[],h=[];s.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,y=u,x,M,C,B,F,E;if(m!==0)for(var S=0;S!==_;S++)p[S].updateSolveMassProperties();var D=l,V=h,I=o;D.length=m,V.length=m,I.length=m;for(var S=0;S!==m;S++){var X=g[S];I[S]=0,V[S]=X.computeB(y),D[S]=1/X.computeC()}if(m!==0){for(var S=0;S!==_;S++){var q=p[S],ne=q.vlambda,O=q.wlambda;ne.set(0,0,0),O&&O.set(0,0,0)}for(d=0;d!==f;d++){B=0;for(var U=0;U!==m;U++){var X=g[U];x=V[U],M=D[U],E=I[U],F=X.computeGWlambda(),C=M*(x-F-X.eps*E),E+C<X.minForce?C=X.minForce-E:E+C>X.maxForce&&(C=X.maxForce-E),I[U]+=C,B+=C>0?C:-C,X.addToWlambda(C)}if(B*B<v)break}for(var S=0;S!==_;S++){var q=p[S],J=q.velocity,Y=q.angularVelocity;J.vadd(q.vlambda,J),Y&&Y.vadd(q.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(t,n,r){n.exports=i;function i(){this.equations=[]}i.prototype.solve=function(s,o){return 0},i.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},i.prototype.removeEquation=function(s){var o=this.equations,l=o.indexOf(s);l!==-1&&o.splice(l,1)},i.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(t,n,r){n.exports=o,t("../math/Vec3"),t("../math/Quaternion");var i=t("./Solver"),s=t("../objects/Body");function o(p){for(i.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new i;var l=[],h=[],u={bodies:[]},c=s.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&c))return x}return!1}var f=[];function v(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var M=f.pop(),C;C=d(M.children);)C.visited=!0,_(C,y,x),f.push(C)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,M=0;M!==x;M++){var C=p.eqs[M];y.indexOf(C)===-1&&y.push(C)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=l,x=this.nodePool,M=_.bodies,C=this.equations,B=C.length,F=M.length,E=this.subsolver;x.length<F;)x.push(this.createNode());y.length=F;for(var S=0;S<F;S++)y[S]=x[S];for(var S=0;S!==F;S++){var D=y[S];D.body=M[S],D.children.length=0,D.eqs.length=0,D.visited=!1}for(var V=0;V!==B;V++){var I=C[V],S=M.indexOf(I.bi),X=M.indexOf(I.bj),q=y[S],ne=y[X];q.children.push(ne),q.eqs.push(I),ne.children.push(q),ne.eqs.push(I)}var O,U=0,J=h;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Y=u;O=d(y);){J.length=0,Y.bodies.length=0,v(O,g,Y.bodies,J);var H=J.length;J=J.sort(m);for(var S=0;S!==H;S++)E.addEquation(J[S]);E.solve(p,Y),E.removeAllEquations(),U++}return U};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(t,n,r){var i=function(){};n.exports=i,i.prototype={constructor:i,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(o)===-1&&l[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var h=l[s].indexOf(o);return h!==-1&&l[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,l=o[s.type];if(l!==void 0){s.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,s)}return this}}},{}],50:[function(t,n,r){var i=t("../collision/AABB"),s=t("../math/Vec3");n.exports=l;function o(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new i,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new o,o.prototype.reset=function(c,d){this.children.length=this.data.length=0},o.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var h=new s;o.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new o({aabb:new i({lowerBound:new s(0,0,0)})}),new o({aabb:new i({lowerBound:new s(1,0,0)})}),new o({aabb:new i({lowerBound:new s(1,1,0)})}),new o({aabb:new i({lowerBound:new s(1,1,1)})}),new o({aabb:new i({lowerBound:new s(0,1,1)})}),new o({aabb:new i({lowerBound:new s(0,0,1)})}),new o({aabb:new i({lowerBound:new s(1,0,1)})}),new o({aabb:new i({lowerBound:new s(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},o.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new i;o.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},o.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(t,n,r){n.exports=i;function i(){this.objects=[],this.type=Object}i.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},i.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},i.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(t,n,r){n.exports=i;function i(){this.data={keys:[]}}i.prototype.get=function(s,o){if(s>o){var l=o;o=s,s=l}return this.data[s+"-"+o]},i.prototype.set=function(s,o,l){if(s>o){var h=o;o=s,s=h}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=l},i.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var l=o.pop();delete s[l]}}},{}],53:[function(t,n,r){function i(){}n.exports=i,i.defaults=function(s,o){s=s||{};for(var l in o)l in s||(s[l]=o[l]);return s}},{}],54:[function(t,n,r){n.exports=o;var i=t("../math/Vec3"),s=t("./Pool");function o(){s.call(this),this.type=i}o.prototype=new s,o.prototype.constructObject=function(){return new i}},{"../math/Vec3":30,"./Pool":51}],55:[function(t,n,r){n.exports=v;var i=t("../collision/AABB"),s=t("../shapes/Shape"),o=t("../collision/Ray"),l=t("../math/Vec3"),h=t("../math/Transform");t("../shapes/ConvexPolyhedron");var u=t("../math/Quaternion");t("../solver/Solver");var c=t("../utils/Vec3Pool"),d=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function v(ae){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=ae,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ae,fe,Me,Se,Xe,Ne){var Ae;this.contactPointPool.length?(Ae=this.contactPointPool.pop(),Ae.bi=ae,Ae.bj=fe):Ae=new d(ae,fe),Ae.enabled=ae.collisionResponse&&fe.collisionResponse&&Me.collisionResponse&&Se.collisionResponse;var T=this.currentContactMaterial;Ae.restitution=T.restitution,Ae.setSpookParams(T.contactEquationStiffness,T.contactEquationRelaxation,this.world.dt);var L=Me.material||ae.material,j=Se.material||fe.material;return L&&j&&L.restitution>=0&&j.restitution>=0&&(Ae.restitution=L.restitution*j.restitution),Ae.si=Xe||Me,Ae.sj=Ne||Se,Ae},v.prototype.createFrictionEquationsFromContact=function(ae,fe){var Me=ae.bi,Se=ae.bj,Xe=ae.si,Ne=ae.sj,Ae=this.world,T=this.currentContactMaterial,L=T.friction,j=Xe.material||Me.material,z=Ne.material||Se.material;if(j&&z&&j.friction>=0&&z.friction>=0&&(L=j.friction*z.friction),L>0){var Q=L*Ae.gravity.length(),le=Me.invMass+Se.invMass;le>0&&(le=1/le);var oe=this.frictionEquationPool,ve=oe.length?oe.pop():new f(Me,Se,Q*le),Te=oe.length?oe.pop():new f(Me,Se,Q*le);return ve.bi=Te.bi=Me,ve.bj=Te.bj=Se,ve.minForce=Te.minForce=-Q*le,ve.maxForce=Te.maxForce=Q*le,ve.ri.copy(ae.ri),ve.rj.copy(ae.rj),Te.ri.copy(ae.ri),Te.rj.copy(ae.rj),ae.ni.tangents(ve.t,Te.t),ve.setSpookParams(T.frictionEquationStiffness,T.frictionEquationRelaxation,Ae.dt),Te.setSpookParams(T.frictionEquationStiffness,T.frictionEquationRelaxation,Ae.dt),ve.enabled=Te.enabled=ae.enabled,fe.push(ve,Te),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(ae){var fe=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(fe,this.frictionResult)||ae===1)){var Me=this.frictionResult[this.frictionResult.length-2],Se=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Xe=fe.bi;fe.bj;for(var Ne=0;Ne!==ae;Ne++)fe=this.result[this.result.length-1-Ne],fe.bodyA!==Xe?(g.vadd(fe.ni,g),m.vadd(fe.ri,m),p.vadd(fe.rj,p)):(g.vsub(fe.ni,g),m.vadd(fe.rj,m),p.vadd(fe.ri,p));var Ae=1/ae;m.scale(Ae,Me.ri),p.scale(Ae,Me.rj),Se.ri.copy(Me.ri),Se.rj.copy(Me.rj),g.normalize(),g.tangents(Me.t,Se.t)}};var _=new l,y=new l,x=new u,M=new u;v.prototype.getContacts=function(ae,fe,Me,Se,Xe,Ne,Ae){this.contactPointPool=Xe,this.frictionEquationPool=Ae,this.result=Se,this.frictionResult=Ne;for(var T=x,L=M,j=_,z=y,Q=0,le=ae.length;Q!==le;Q++){var oe=ae[Q],ve=fe[Q],Te=null;oe.material&&ve.material&&(Te=Me.getContactMaterial(oe.material,ve.material)||null);for(var Le=0;Le<oe.shapes.length;Le++){oe.quaternion.mult(oe.shapeOrientations[Le],T),oe.quaternion.vmult(oe.shapeOffsets[Le],j),j.vadd(oe.position,j);for(var ce=oe.shapes[Le],Ie=0;Ie<ve.shapes.length;Ie++){ve.quaternion.mult(ve.shapeOrientations[Ie],L),ve.quaternion.vmult(ve.shapeOffsets[Ie],z),z.vadd(ve.position,z);var ze=ve.shapes[Ie];if(!(j.distanceTo(z)>ce.boundingSphereRadius+ze.boundingSphereRadius)){var rt=null;ce.material&&ze.material&&(rt=Me.getContactMaterial(ce.material,ze.material)||null),this.currentContactMaterial=rt||Te||Me.defaultContactMaterial;var qe=this[ce.type|ze.type];qe&&(ce.type<ze.type?qe.call(this,ce,ze,j,z,T,L,oe,ve,ce,ze):qe.call(this,ze,ce,z,j,L,T,ve,oe,ce,ze))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(ae,fe,Me,Se,Xe,Ne,Ae,T){ae.convexPolyhedronRepresentation.material=ae.material,fe.convexPolyhedronRepresentation.material=fe.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.convexConvex(ae.convexPolyhedronRepresentation,fe.convexPolyhedronRepresentation,Me,Se,Xe,Ne,Ae,T,ae,fe)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ae,fe,Me,Se,Xe,Ne,Ae,T){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexConvex(ae.convexPolyhedronRepresentation,fe,Me,Se,Xe,Ne,Ae,T,ae,fe)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(ae,fe,Me,Se,Xe,Ne,Ae,T){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexParticle(ae.convexPolyhedronRepresentation,fe,Me,Se,Xe,Ne,Ae,T,ae,fe)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=this.createContactEquation(Ae,T,ae,fe);Se.vsub(Me,L.ni),L.ni.normalize(),L.ri.copy(L.ni),L.rj.copy(L.ni),L.ri.mult(ae.radius,L.ri),L.rj.mult(-fe.radius,L.rj),L.ri.vadd(Me,L.ri),L.ri.vsub(Ae.position,L.ri),L.rj.vadd(Se,L.rj),L.rj.vsub(T.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)};var C=new l,B=new l,F=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=new l,j=C;j.set(0,0,1),Xe.vmult(j,j);for(var z=0;z<fe.vertices.length/3;z++){fe.getVertex(z,L);var Q=new l;Q.copy(L),h.pointToWorldFrame(Se,Ne,Q,L);var le=B;L.vsub(Me,le);var oe=j.dot(le);if(oe<=0){var ve=this.createContactEquation(Ae,T,ae,fe);ve.ni.copy(j);var Te=F;j.scale(le.dot(j),Te),L.vsub(Te,Te),ve.ri.copy(Te),ve.ri.vsub(Ae.position,ve.ri),ve.rj.copy(L),ve.rj.vsub(T.position,ve.rj),this.result.push(ve),this.createFrictionEquationsFromContact(ve,this.frictionResult)}}};var E=new l,S=new l;new l;var D=new l,V=new l,I=new l,X=new l,q=new l,ne=new l,O=new l,U=new l,J=new l,Y=new l,H=new l,W=new i,b=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=I,j=X,z=q,Q=ne,le=O,oe=U,ve=W,Te=V,Le=S,ce=b;h.pointToLocalFrame(Se,Ne,Me,le);var Ie=ae.radius;ve.lowerBound.set(le.x-Ie,le.y-Ie,le.z-Ie),ve.upperBound.set(le.x+Ie,le.y+Ie,le.z+Ie),fe.getTrianglesInAABB(ve,ce);for(var ze=D,rt=ae.radius*ae.radius,qe=0;qe<ce.length;qe++)for(var Qe=0;Qe<3;Qe++)if(fe.getVertex(fe.indices[ce[qe]*3+Qe],ze),ze.vsub(le,Le),Le.norm2()<=rt){Te.copy(ze),h.pointToWorldFrame(Se,Ne,Te,ze),ze.vsub(Me,Le);var Fe=this.createContactEquation(Ae,T,ae,fe);Fe.ni.copy(Le),Fe.ni.normalize(),Fe.ri.copy(Fe.ni),Fe.ri.scale(ae.radius,Fe.ri),Fe.ri.vadd(Me,Fe.ri),Fe.ri.vsub(Ae.position,Fe.ri),Fe.rj.copy(ze),Fe.rj.vsub(T.position,Fe.rj),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}for(var qe=0;qe<ce.length;qe++)for(var Qe=0;Qe<3;Qe++){fe.getVertex(fe.indices[ce[qe]*3+Qe],L),fe.getVertex(fe.indices[ce[qe]*3+(Qe+1)%3],j),j.vsub(L,z),le.vsub(j,oe);var Ke=oe.dot(z);le.vsub(L,oe);var Nt=oe.dot(z);if(Nt>0&&Ke<0){le.vsub(L,oe),Q.copy(z),Q.normalize(),Nt=oe.dot(Q),Q.scale(Nt,oe),oe.vadd(L,oe);var ut=oe.distanceTo(le);if(ut<ae.radius){var Fe=this.createContactEquation(Ae,T,ae,fe);oe.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(ae.radius,Fe.ri),h.pointToWorldFrame(Se,Ne,oe,oe),oe.vsub(T.position,Fe.rj),h.vectorToWorldFrame(Ne,Fe.ni,Fe.ni),h.vectorToWorldFrame(Ne,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}}for(var Rt=J,Ct=Y,dt=H,Wt=E,qe=0,nt=ce.length;qe!==nt;qe++){fe.getTriangleVertices(ce[qe],Rt,Ct,dt),fe.getNormal(ce[qe],Wt),le.vsub(Rt,oe);var ut=oe.dot(Wt);if(Wt.scale(ut,oe),le.vsub(oe,oe),ut=oe.distanceTo(le),o.pointInTriangle(oe,Rt,Ct,dt)&&ut<ae.radius){var Fe=this.createContactEquation(Ae,T,ae,fe);oe.vsub(le,Fe.ni),Fe.ni.normalize(),Fe.ni.scale(ae.radius,Fe.ri),h.pointToWorldFrame(Se,Ne,oe,oe),oe.vsub(T.position,Fe.rj),h.vectorToWorldFrame(Ne,Fe.ni,Fe.ni),h.vectorToWorldFrame(Ne,Fe.ri,Fe.ri),this.result.push(Fe),this.createFrictionEquationsFromContact(Fe,this.frictionResult)}}ce.length=0};var A=new l,R=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=this.createContactEquation(Ae,T,ae,fe);if(L.ni.set(0,0,1),Ne.vmult(L.ni,L.ni),L.ni.negate(L.ni),L.ni.normalize(),L.ni.mult(ae.radius,L.ri),Me.vsub(Se,A),L.ni.mult(L.ni.dot(A),R),A.vsub(R,L.rj),-A.dot(L.ni)<=ae.radius){var j=L.ri,z=L.rj;j.vadd(Me,j),j.vsub(Ae.position,j),z.vadd(Se,z),z.vsub(T.position,z),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}};var G=new l,P=new l,te=new l;function K(ae,fe,Me){for(var Se=null,Xe=ae.length,Ne=0;Ne!==Xe;Ne++){var Ae=ae[Ne],T=G;ae[(Ne+1)%Xe].vsub(Ae,T);var L=P;T.cross(fe,L);var j=te;Me.vsub(Ae,j);var z=L.dot(j);if(Se===null||z>0&&Se===!0||z<=0&&Se===!1){Se===null&&(Se=z>0);continue}else return!1}return!0}var $=new l,re=new l,be=new l,pe=new l,xe=[new l,new l,new l,new l,new l,new l],he=new l,ge=new l,ke=new l,Be=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=this.v3pool,j=xe;Me.vsub(Se,$),fe.getSideNormals(j,Ne);for(var z=ae.radius,Q=!1,le=ge,oe=ke,ve=Be,Te=null,Le=0,ce=0,Ie=0,ze=null,rt=0,qe=j.length;rt!==qe&&Q===!1;rt++){var Qe=re;Qe.copy(j[rt]);var Fe=Qe.norm();Qe.normalize();var Ke=$.dot(Qe);if(Ke<Fe+z&&Ke>0){var Nt=be,ut=pe;Nt.copy(j[(rt+1)%3]),ut.copy(j[(rt+2)%3]);var Rt=Nt.norm(),Ct=ut.norm();Nt.normalize(),ut.normalize();var dt=$.dot(Nt),Wt=$.dot(ut);if(dt<Rt&&dt>-Rt&&Wt<Ct&&Wt>-Ct){var wt=Math.abs(Ke-Fe-z);(ze===null||wt<ze)&&(ze=wt,ce=dt,Ie=Wt,Te=Fe,le.copy(Qe),oe.copy(Nt),ve.copy(ut),Le++)}}}if(Le){Q=!0;var Ze=this.createContactEquation(Ae,T,ae,fe);le.mult(-z,Ze.ri),Ze.ni.copy(le),Ze.ni.negate(Ze.ni),le.mult(Te,le),oe.mult(ce,oe),le.vadd(oe,le),ve.mult(Ie,ve),le.vadd(ve,Ze.rj),Ze.ri.vadd(Me,Ze.ri),Ze.ri.vsub(Ae.position,Ze.ri),Ze.rj.vadd(Se,Ze.rj),Ze.rj.vsub(T.position,Ze.rj),this.result.push(Ze),this.createFrictionEquationsFromContact(Ze,this.frictionResult)}for(var nt=L.get(),Lt=he,Tt=0;Tt!==2&&!Q;Tt++)for(var ft=0;ft!==2&&!Q;ft++)for(var yt=0;yt!==2&&!Q;yt++)if(nt.set(0,0,0),Tt?nt.vadd(j[0],nt):nt.vsub(j[0],nt),ft?nt.vadd(j[1],nt):nt.vsub(j[1],nt),yt?nt.vadd(j[2],nt):nt.vsub(j[2],nt),Se.vadd(nt,Lt),Lt.vsub(Me,Lt),Lt.norm2()<z*z){Q=!0;var Ze=this.createContactEquation(Ae,T,ae,fe);Ze.ri.copy(Lt),Ze.ri.normalize(),Ze.ni.copy(Ze.ri),Ze.ri.mult(z,Ze.ri),Ze.rj.copy(nt),Ze.ri.vadd(Me,Ze.ri),Ze.ri.vsub(Ae.position,Ze.ri),Ze.rj.vadd(Se,Ze.rj),Ze.rj.vsub(T.position,Ze.rj),this.result.push(Ze),this.createFrictionEquationsFromContact(Ze,this.frictionResult)}L.release(nt),nt=null;for(var Ht=L.get(),Kt=L.get(),Ze=L.get(),Xt=L.get(),wt=L.get(),On=j.length,Tt=0;Tt!==On&&!Q;Tt++)for(var ft=0;ft!==On&&!Q;ft++)if(Tt%3!==ft%3){j[ft].cross(j[Tt],Ht),Ht.normalize(),j[Tt].vadd(j[ft],Kt),Ze.copy(Me),Ze.vsub(Kt,Ze),Ze.vsub(Se,Ze);var zn=Ze.dot(Ht);Ht.mult(zn,Xt);for(var yt=0;yt===Tt%3||yt===ft%3;)yt++;wt.copy(Me),wt.vsub(Xt,wt),wt.vsub(Kt,wt),wt.vsub(Se,wt);var Hl=Math.abs(zn),Gl=wt.norm();if(Hl<j[yt].norm()&&Gl<z){Q=!0;var gt=this.createContactEquation(Ae,T,ae,fe);Kt.vadd(Xt,gt.rj),gt.rj.copy(gt.rj),wt.negate(gt.ni),gt.ni.normalize(),gt.ri.copy(gt.rj),gt.ri.vadd(Se,gt.ri),gt.ri.vsub(Me,gt.ri),gt.ri.normalize(),gt.ri.mult(z,gt.ri),gt.ri.vadd(Me,gt.ri),gt.ri.vsub(Ae.position,gt.ri),gt.rj.vadd(Se,gt.rj),gt.rj.vsub(T.position,gt.rj),this.result.push(gt),this.createFrictionEquationsFromContact(gt,this.frictionResult)}}L.release(Ht,Kt,Ze,Xt,wt)};var Ge=new l,we=new l,Ye=new l,N=new l,w=new l,ie=new l,de=new l,_e=new l,ye=new l,k=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=this.v3pool;Me.vsub(Se,Ge);for(var j=fe.faceNormals,z=fe.faces,Q=fe.vertices,le=ae.radius,oe=0;oe!==Q.length;oe++){var ve=Q[oe],Te=w;Ne.vmult(ve,Te),Se.vadd(Te,Te);var Le=N;if(Te.vsub(Me,Le),Le.norm2()<le*le){Ie=!0;var ce=this.createContactEquation(Ae,T,ae,fe);ce.ri.copy(Le),ce.ri.normalize(),ce.ni.copy(ce.ri),ce.ri.mult(le,ce.ri),Te.vsub(Se,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Ae.position,ce.ri),ce.rj.vadd(Se,ce.rj),ce.rj.vsub(T.position,ce.rj),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);return}}for(var Ie=!1,oe=0,ze=z.length;oe!==ze&&Ie===!1;oe++){var rt=j[oe],qe=z[oe],Qe=ie;Ne.vmult(rt,Qe);var Fe=de;Ne.vmult(Q[qe[0]],Fe),Fe.vadd(Se,Fe);var Ke=_e;Qe.mult(-le,Ke),Me.vadd(Ke,Ke);var Nt=ye;Ke.vsub(Fe,Nt);var ut=Nt.dot(Qe),Rt=k;if(Me.vsub(Fe,Rt),ut<0&&Rt.dot(Qe)>0){for(var Ct=[],dt=0,Wt=qe.length;dt!==Wt;dt++){var nt=L.get();Ne.vmult(Q[qe[dt]],nt),Se.vadd(nt,nt),Ct.push(nt)}if(K(Ct,Qe,Me)){Ie=!0;var ce=this.createContactEquation(Ae,T,ae,fe);Qe.mult(-le,ce.ri),Qe.negate(ce.ni);var Lt=L.get();Qe.mult(-ut,Lt);var Tt=L.get();Qe.mult(-le,Tt),Me.vsub(Se,ce.rj),ce.rj.vadd(Tt,ce.rj),ce.rj.vadd(Lt,ce.rj),ce.rj.vadd(Se,ce.rj),ce.rj.vsub(T.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Ae.position,ce.ri),L.release(Lt),L.release(Tt),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var dt=0,ft=Ct.length;dt!==ft;dt++)L.release(Ct[dt]);return}else for(var dt=0;dt!==qe.length;dt++){var yt=L.get(),Ht=L.get();Ne.vmult(Q[qe[(dt+1)%qe.length]],yt),Ne.vmult(Q[qe[(dt+2)%qe.length]],Ht),Se.vadd(yt,yt),Se.vadd(Ht,Ht);var Kt=we;Ht.vsub(yt,Kt);var Ze=Ye;Kt.unit(Ze);var Xt=L.get(),wt=L.get();Me.vsub(yt,wt);var On=wt.dot(Ze);Ze.mult(On,Xt),Xt.vadd(yt,Xt);var zn=L.get();if(Xt.vsub(Me,zn),On>0&&On*On<Kt.norm2()&&zn.norm2()<le*le){var ce=this.createContactEquation(Ae,T,ae,fe);Xt.vsub(Se,ce.rj),Xt.vsub(Me,ce.ni),ce.ni.normalize(),ce.ni.mult(le,ce.ri),ce.rj.vadd(Se,ce.rj),ce.rj.vsub(T.position,ce.rj),ce.ri.vadd(Me,ce.ri),ce.ri.vsub(Ae.position,ce.ri),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(var dt=0,ft=Ct.length;dt!==ft;dt++)L.release(Ct[dt]);L.release(yt),L.release(Ht),L.release(Xt),L.release(zn),L.release(wt);return}L.release(yt),L.release(Ht),L.release(Xt),L.release(zn),L.release(wt)}for(var dt=0,ft=Ct.length;dt!==ft;dt++)L.release(Ct[dt])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(ae,fe,Me,Se,Xe,Ne,Ae,T){fe.convexPolyhedronRepresentation.material=fe.material,fe.convexPolyhedronRepresentation.collisionResponse=fe.collisionResponse,this.planeConvex(ae,fe.convexPolyhedronRepresentation,Me,Se,Xe,Ne,Ae,T)};var me=new l,se=new l,Ce=new l,Ue=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=me,j=se;j.set(0,0,1),Xe.vmult(j,j);for(var z=0,Q=Ce,le=0;le!==fe.vertices.length;le++){L.copy(fe.vertices[le]),Ne.vmult(L,L),Se.vadd(L,L),L.vsub(Me,Q);var oe=j.dot(Q);if(oe<=0){var ve=this.createContactEquation(Ae,T,ae,fe),Te=Ue;j.mult(j.dot(Q),Te),L.vsub(Te,Te),Te.vsub(Me,ve.ri),ve.ni.copy(j),L.vsub(Se,ve.rj),ve.ri.vadd(Me,ve.ri),ve.ri.vsub(Ae.position,ve.ri),ve.rj.vadd(Se,ve.rj),ve.rj.vsub(T.position,ve.rj),this.result.push(ve),z++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ve,this.frictionResult)}}this.enableFrictionReduction&&z&&this.createFrictionFromAverage(z)};var Oe=new l,Pe=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ae,fe,Me,Se,Xe,Ne,Ae,T,L,j,z,Q){var le=Oe;if(!(Me.distanceTo(Se)>ae.boundingSphereRadius+fe.boundingSphereRadius)&&ae.findSeparatingAxis(fe,Me,Xe,Se,Ne,le,z,Q)){var oe=[],ve=Pe;ae.clipAgainstHull(Me,Xe,fe,Se,Ne,le,-100,100,oe);for(var Te=0,Le=0;Le!==oe.length;Le++){var ce=this.createContactEquation(Ae,T,ae,fe,L,j),Ie=ce.ri,ze=ce.rj;le.negate(ce.ni),oe[Le].normal.negate(ve),ve.mult(oe[Le].depth,ve),oe[Le].point.vadd(ve,Ie),ze.copy(oe[Le].point),Ie.vsub(Me,Ie),ze.vsub(Se,ze),Ie.vadd(Me,Ie),Ie.vsub(Ae.position,Ie),ze.vadd(Se,ze),ze.vsub(T.position,ze),this.result.push(ce),Te++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ce,this.frictionResult)}this.enableFrictionReduction&&Te&&this.createFrictionFromAverage(Te)}};var Ve=new l,We=new l,je=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=Ve;L.set(0,0,1),Ae.quaternion.vmult(L,L);var j=We;Se.vsub(Ae.position,j);var z=L.dot(j);if(z<=0){var Q=this.createContactEquation(T,Ae,fe,ae);Q.ni.copy(L),Q.ni.negate(Q.ni),Q.ri.set(0,0,0);var le=je;L.mult(L.dot(Se),le),Se.vsub(le,le),Q.rj.copy(le),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}};var ht=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=ht;L.set(0,0,1),Se.vsub(Me,L);var j=L.norm2();if(j<=ae.radius*ae.radius){var z=this.createContactEquation(T,Ae,fe,ae);L.normalize(),z.rj.copy(L),z.rj.mult(ae.radius,z.rj),z.ni.copy(L),z.ni.negate(z.ni),z.ri.set(0,0,0),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}};var Z=new u,ue=new l;new l;var Ee=new l,Re=new l,He=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=-1,j=Ee,z=He,Q=null,le=ue;if(le.copy(Se),le.vsub(Me,le),Xe.conjugate(Z),Z.vmult(le,le),ae.pointIsInside(le)){ae.worldVerticesNeedsUpdate&&ae.computeWorldVertices(Me,Xe),ae.worldFaceNormalsNeedsUpdate&&ae.computeWorldFaceNormals(Xe);for(var oe=0,ve=ae.faces.length;oe!==ve;oe++){var Te=[ae.worldVertices[ae.faces[oe][0]]],Le=ae.worldFaceNormals[oe];Se.vsub(Te[0],Re);var ce=-Le.dot(Re);(Q===null||Math.abs(ce)<Math.abs(Q))&&(Q=ce,L=oe,j.copy(Le))}if(L!==-1){var Ie=this.createContactEquation(T,Ae,fe,ae);j.mult(Q,z),z.vadd(Se,z),z.vsub(Me,z),Ie.rj.copy(z),j.negate(Ie.ni),Ie.ri.set(0,0,0);var ze=Ie.ri,rt=Ie.rj;ze.vadd(Se,ze),ze.vsub(T.position,ze),rt.vadd(Me,rt),rt.vsub(Ae.position,rt),this.result.push(Ie),this.createFrictionEquationsFromContact(Ie,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ae,fe,Me,Se,Xe,Ne,Ae,T){ae.convexPolyhedronRepresentation.material=ae.material,ae.convexPolyhedronRepresentation.collisionResponse=ae.collisionResponse,this.convexHeightfield(ae.convexPolyhedronRepresentation,fe,Me,Se,Xe,Ne,Ae,T)};var at=new l,ot=new l,_t=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=fe.data,j=fe.elementSize,z=ae.boundingSphereRadius,Q=ot,le=_t,oe=at;h.pointToLocalFrame(Se,Ne,Me,oe);var ve=Math.floor((oe.x-z)/j)-1,Te=Math.ceil((oe.x+z)/j)+1,Le=Math.floor((oe.y-z)/j)-1,ce=Math.ceil((oe.y+z)/j)+1;if(!(Te<0||ce<0||ve>L.length||Le>L[0].length)){ve<0&&(ve=0),Te<0&&(Te=0),Le<0&&(Le=0),ce<0&&(ce=0),ve>=L.length&&(ve=L.length-1),Te>=L.length&&(Te=L.length-1),ce>=L[0].length&&(ce=L[0].length-1),Le>=L[0].length&&(Le=L[0].length-1);var Ie=[];fe.getRectMinMax(ve,Le,Te,ce,Ie);var ze=Ie[0],rt=Ie[1];if(!(oe.z-z>rt||oe.z+z<ze))for(var qe=ve;qe<Te;qe++)for(var Qe=Le;Qe<ce;Qe++)fe.getConvexTrianglePillar(qe,Qe,!1),h.pointToWorldFrame(Se,Ne,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.convexConvex(ae,fe.pillarConvex,Me,Q,Xe,Ne,Ae,T,null,null,le,null),fe.getConvexTrianglePillar(qe,Qe,!0),h.pointToWorldFrame(Se,Ne,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.convexConvex(ae,fe.pillarConvex,Me,Q,Xe,Ne,Ae,T,null,null,le,null)}};var Ft=new l,tt=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ae,fe,Me,Se,Xe,Ne,Ae,T){var L=fe.data,j=ae.radius,z=fe.elementSize,Q=tt,le=Ft;h.pointToLocalFrame(Se,Ne,Me,le);var oe=Math.floor((le.x-j)/z)-1,ve=Math.ceil((le.x+j)/z)+1,Te=Math.floor((le.y-j)/z)-1,Le=Math.ceil((le.y+j)/z)+1;if(!(ve<0||Le<0||oe>L.length||Le>L[0].length)){oe<0&&(oe=0),ve<0&&(ve=0),Te<0&&(Te=0),Le<0&&(Le=0),oe>=L.length&&(oe=L.length-1),ve>=L.length&&(ve=L.length-1),Le>=L[0].length&&(Le=L[0].length-1),Te>=L[0].length&&(Te=L[0].length-1);var ce=[];fe.getRectMinMax(oe,Te,ve,Le,ce);var Ie=ce[0],ze=ce[1];if(!(le.z-j>ze||le.z+j<Ie))for(var rt=this.result,qe=oe;qe<ve;qe++)for(var Qe=Te;Qe<Le;Qe++){var Fe=rt.length;fe.getConvexTrianglePillar(qe,Qe,!1),h.pointToWorldFrame(Se,Ne,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.sphereConvex(ae,fe.pillarConvex,Me,Q,Xe,Ne,Ae,T),fe.getConvexTrianglePillar(qe,Qe,!0),h.pointToWorldFrame(Se,Ne,fe.pillarOffset,Q),Me.distanceTo(Q)<fe.pillarConvex.boundingSphereRadius+ae.boundingSphereRadius&&this.sphereConvex(ae,fe.pillarConvex,Me,Q,Xe,Ne,Ae,T);var Ke=rt.length-Fe;if(Ke>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(t,n,r){n.exports=x;var i=t("../shapes/Shape"),s=t("../math/Vec3"),o=t("../math/Quaternion"),l=t("../solver/GSSolver");t("../utils/Vec3Pool"),t("../equations/ContactEquation"),t("../equations/FrictionEquation");var h=t("./Narrowphase"),u=t("../utils/EventTarget"),c=t("../collision/ArrayCollisionMatrix"),d=t("../material/Material"),f=t("../material/ContactMaterial"),v=t("../objects/Body"),g=t("../utils/TupleDictionary"),m=t("../collision/RaycastResult"),p=t("../collision/AABB"),_=t("../collision/Ray"),y=t("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new p;var M=new _;if(x.prototype.getContactMaterial=function(U,J){return this.contactMaterialTable.get(U.id,J.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof v&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(U){this.constraints.push(U)},x.prototype.removeConstraint=function(U){var J=this.constraints.indexOf(U);J!==-1&&this.constraints.splice(J,1)},x.prototype.rayTest=function(U,J,Y){Y instanceof m?this.raycastClosest(U,J,{skipBackfaces:!0},Y):this.raycastAll(U,J,{skipBackfaces:!0},Y)},x.prototype.raycastAll=function(U,J,Y,H){return Y.mode=_.ALL,Y.from=U,Y.to=J,Y.callback=H,M.intersectWorld(this,Y)},x.prototype.raycastAny=function(U,J,Y,H){return Y.mode=_.ANY,Y.from=U,Y.to=J,Y.result=H,M.intersectWorld(this,Y)},x.prototype.raycastClosest=function(U,J,Y,H){return Y.mode=_.CLOSEST,Y.from=U,Y.to=J,Y.result=H,M.intersectWorld(this,Y)},x.prototype.remove=function(U){U.world=null;var J=this.bodies.length-1,Y=this.bodies,H=Y.indexOf(U);if(H!==-1){Y.splice(H,1);for(var W=0;W!==Y.length;W++)Y[W].index=W;this.collisionMatrix.setNumObjects(J),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(U){this.materials.push(U)},x.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var B=new s;x.prototype.step=function(U,J,Y){if(Y=Y||10,J=J||0,J===0)this.internalStep(U),this.time+=U;else{var H=Math.floor((this.time+J)/U)-Math.floor(this.time/U);H=Math.min(H,Y);for(var W=performance.now(),b=0;b!==H&&(this.internalStep(U),!(performance.now()-W>U*1e3));b++);this.time+=J;for(var A=this.time%U,R=A/U,G=B,P=this.bodies,te=0;te!==P.length;te++){var K=P[te];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,G),G.scale(R,G),K.position.vadd(G,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var F={type:"postStep"},E={type:"preStep"},S={type:"collide",body:null,contact:null},D=[],V=[],I=[],X=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var q=new o,ne=new o,O=new s;x.prototype.internalStep=function(U){this.dt=U;var J=this.contacts,Y=I,H=X,W=this.numObjects(),b=this.bodies,A=this.solver,R=this.gravity,G=this.doProfiling,P=this.profile,te=v.DYNAMIC,K,$=this.constraints,re=V;R.norm();var be=R.x,pe=R.y,xe=R.z,he=0;for(G&&(K=performance.now()),he=0;he!==W;he++){var ge=b[he];if(ge.type&te){var ke=ge.force,Be=ge.mass;ke.x+=Be*be,ke.y+=Be*pe,ke.z+=Be*xe}}for(var he=0,Ge=this.subsystems.length;he!==Ge;he++)this.subsystems[he].update();G&&(K=performance.now()),Y.length=0,H.length=0,this.broadphase.collisionPairs(this,Y,H),G&&(P.broadphase=performance.now()-K);var Oe=$.length;for(he=0;he!==Oe;he++){var we=$[he];if(!we.collideConnected)for(var Ye=Y.length-1;Ye>=0;Ye-=1)(we.bodyA===Y[Ye]&&we.bodyB===H[Ye]||we.bodyB===Y[Ye]&&we.bodyA===H[Ye])&&(Y.splice(Ye,1),H.splice(Ye,1))}this.collisionMatrixTick(),G&&(K=performance.now());var N=D,w=J.length;for(he=0;he!==w;he++)N.push(J[he]);J.length=0;var ie=this.frictionEquations.length;for(he=0;he!==ie;he++)re.push(this.frictionEquations[he]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,H,this,J,N,this.frictionEquations,re),G&&(P.narrowphase=performance.now()-K),G&&(K=performance.now());for(var he=0;he<this.frictionEquations.length;he++)A.addEquation(this.frictionEquations[he]);for(var de=J.length,_e=0;_e!==de;_e++){var we=J[_e],ge=we.bi,ye=we.bj;we.si,we.sj;var k;if(ge.material&&ye.material?k=this.getContactMaterial(ge.material,ye.material)||this.defaultContactMaterial:k=this.defaultContactMaterial,k.friction,ge.material&&ye.material&&(ge.material.friction>=0&&ye.material.friction>=0&&ge.material.friction*ye.material.friction,ge.material.restitution>=0&&ye.material.restitution>=0&&(we.restitution=ge.material.restitution*ye.material.restitution)),A.addEquation(we),ge.allowSleep&&ge.type===v.DYNAMIC&&ge.sleepState===v.SLEEPING&&ye.sleepState===v.AWAKE&&ye.type!==v.STATIC){var me=ye.velocity.norm2()+ye.angularVelocity.norm2(),se=Math.pow(ye.sleepSpeedLimit,2);me>=se*2&&(ge._wakeUpAfterNarrowphase=!0)}if(ye.allowSleep&&ye.type===v.DYNAMIC&&ye.sleepState===v.SLEEPING&&ge.sleepState===v.AWAKE&&ge.type!==v.STATIC){var Ce=ge.velocity.norm2()+ge.angularVelocity.norm2(),Ue=Math.pow(ge.sleepSpeedLimit,2);Ce>=Ue*2&&(ye._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ge,ye,!0),this.collisionMatrixPrevious.get(ge,ye)||(S.body=ye,S.contact=we,ge.dispatchEvent(S),S.body=ge,ye.dispatchEvent(S))}for(G&&(P.makeContactConstraints=performance.now()-K,K=performance.now()),he=0;he!==W;he++){var ge=b[he];ge._wakeUpAfterNarrowphase&&(ge.wakeUp(),ge._wakeUpAfterNarrowphase=!1)}var Oe=$.length;for(he=0;he!==Oe;he++){var we=$[he];we.update();for(var Ye=0,Pe=we.equations.length;Ye!==Pe;Ye++){var Ve=we.equations[Ye];A.addEquation(Ve)}}A.solve(U,this),G&&(P.solve=performance.now()-K),A.removeAllEquations();var We=Math.pow;for(he=0;he!==W;he++){var ge=b[he];if(ge.type&te){var je=We(1-ge.linearDamping,U),ht=ge.velocity;ht.mult(je,ht);var Z=ge.angularVelocity;if(Z){var ue=We(1-ge.angularDamping,U);Z.mult(ue,Z)}}}for(this.dispatchEvent(E),he=0;he!==W;he++){var ge=b[he];ge.preStep&&ge.preStep.call(ge)}G&&(K=performance.now());var Ee=q,Re=ne,He=this.stepnumber,at=v.DYNAMIC|v.KINEMATIC,ot=He%(this.quatNormalizeSkip+1)===0,_t=this.quatNormalizeFast,Ft=U*.5;for(i.types.PLANE,i.types.CONVEXPOLYHEDRON,he=0;he!==W;he++){var tt=b[he],ae=tt.force,fe=tt.torque;if(tt.type&at&&tt.sleepState!==v.SLEEPING){var Me=tt.velocity,Se=tt.angularVelocity,Xe=tt.position,Ne=tt.quaternion,Ae=tt.invMass,T=tt.invInertiaWorld;Me.x+=ae.x*Ae*U,Me.y+=ae.y*Ae*U,Me.z+=ae.z*Ae*U,tt.angularVelocity&&(T.vmult(fe,O),O.mult(U,O),O.vadd(Se,Se)),Xe.x+=Me.x*U,Xe.y+=Me.y*U,Xe.z+=Me.z*U,tt.angularVelocity&&(Ee.set(Se.x,Se.y,Se.z,0),Ee.mult(Ne,Re),Ne.x+=Ft*Re.x,Ne.y+=Ft*Re.y,Ne.z+=Ft*Re.z,Ne.w+=Ft*Re.w,ot&&(_t?Ne.normalizeFast():Ne.normalize())),tt.aabb&&(tt.aabbNeedsUpdate=!0),tt.updateInertiaWorld&&tt.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,G&&(P.integrate=performance.now()-K),this.time+=U,this.stepnumber+=1,this.dispatchEvent(F),he=0;he!==W;he++){var ge=b[he],L=ge.postStep;L&&L.call(ge)}if(this.allowSleep)for(he=0;he!==W;he++)b[he].sleepTick(this.time)},x.prototype.clearForces=function(){for(var U=this.bodies,J=U.length,Y=0;Y!==J;Y++){var H=U[Y];H.force,H.torque,H.force.set(0,0,0),H.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Gm);function Xo(a,e){if(e===Dc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Ps||e===il){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,r=[];if(e===Ps)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=a.clone();return i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class km extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jm(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new Zm(t)}),this.register(function(t){return new $m(t)}),this.register(function(t){return new Jm(t)}),this.register(function(t){return new Qm(t)}),this.register(function(t){return new Ym(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new Km(t)}),this.register(function(t){return new Xm(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new sv(t)})}load(e,t,n,r){const i=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=Bs.extractUrlBase(e),this.manager.itemStart(e);const o=function(h){r?r(h):console.error(h),i.manager.itemError(e),i.manager.itemEnd(e)},l=new Pl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(h){try{i.parse(h,s,function(u){t(u),i.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i;const s={},o={},l=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dl){try{s[ct.KHR_BINARY_GLTF]=new av(e)}catch(c){r&&r(c);return}i=JSON.parse(s[ct.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new xv(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);o[c.name]=c,s[c.name]=!0}if(i.extensionsUsed)for(let u=0;u<i.extensionsUsed.length;++u){const c=i.extensionsUsed[u],d=i.extensionsRequired||[];switch(c){case ct.KHR_MATERIALS_UNLIT:s[c]=new qm;break;case ct.KHR_DRACO_MESH_COMPRESSION:s[c]=new ov(i,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:s[c]=new lv;break;case ct.KHR_MESH_QUANTIZATION:s[c]=new cv;break;default:d.indexOf(c)>=0&&o[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}}function Wm(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xm{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const i=t.json,l=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let h;const u=new et(16777215);l.color!==void 0&&u.fromArray(l.color);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Nl(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Am(u),h.distance=c;break;case"spot":h=new wm(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Un(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],o=(i.extensions&&i.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class qm{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,n){const r=[];e.color=new et(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const s=i.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",i.baseColorTexture,$e))}return Promise.all(r)}}class Ym{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class jm{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(i)}}class Km{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(i)}}class Zm{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,$e)),s.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(i)}}class $m{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(i)}}class Jm{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new et(o[0],o[1],o[2]),Promise.all(i)}}class Qm{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new et(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,$e)),Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const i=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,s)}}class nv{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iv{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const h=n.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rv{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],i=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){const l=r.byteOffset||0,h=r.byteLength||0,u=r.count,c=r.byteStride,d=new Uint8Array(o,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,r.mode,r.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(f),u,c,d,r.mode,r.filter),f})})}else return null}}class sv{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==$t.TRIANGLES&&h.mode!==$t.TRIANGLE_STRIP&&h.mode!==$t.TRIANGLE_FAN&&h.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const h in s)o.push(this.parser.getDependency("accessor",s[h]).then(u=>(l[h]=u,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new st,m=new ee,p=new pn,_=new ee(1,1,1),y=new cm(v.geometry,v.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,g.compose(m,p,_));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);xt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Dl="glTF",Qi=12,qo={JSON:1313821514,BIN:5130562};class av{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Qi,i=new DataView(e,Qi);let s=0;for(;s<r;){const o=i.getUint32(s,!0);s+=4;const l=i.getUint32(s,!0);if(s+=4,l===qo.JSON){const h=new Uint8Array(e,Qi+s,o);this.content=n.decode(h)}else if(l===qo.BIN){const h=Qi+s;this.body=e.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ov{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},h={};for(const u in s){const c=Os[u]||u.toLowerCase();o[c]=s[u]}for(const u in e.attributes){const c=Os[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Pi[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return t.getDependency("bufferView",i).then(function(u){return new Promise(function(c){r.decodeDracoFile(u,function(d){for(const f in d.attributes){const v=d.attributes[f],g=l[f];g!==void 0&&(v.normalized=g)}c(d)},o,h)})})}}class lv{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cv{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Ul extends ur{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let s=0;s!==r;s++)t[s]=n[i+s];return t}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,u=r-t,c=(n-t)/u,d=c*c,f=d*c,v=e*h,g=v-h,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+c;for(let x=0;x!==o;x++){const M=s[g+x+o],C=s[g+x+l]*u,B=s[v+x+o],F=s[v+x]*u;i[x]=_*M+y*C+m*B+p*F}return i}}const hv=new pn;class uv extends Ul{interpolate_(e,t,n,r){const i=super.interpolate_(e,t,n,r);return hv.fromArray(i).normalize().toArray(i),i}}const $t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yo={9728:At,9729:Gt,9984:Ls,9985:tl,9986:Vr,9987:Jn},jo={33071:Jt,33648:Gr,10497:Ui},ws={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Os={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dv={CUBICSPLINE:void 0,LINEAR:Bi,STEP:ar},bs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fv(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),a.DefaultMaterial}function er(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pv(a,e,t){let n=!1,r=!1,i=!1;for(let h=0,u=e.length;h<u;h++){const c=e[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(r=!0),c.COLOR_0!==void 0&&(i=!0),n&&r&&i)break}if(!n&&!r&&!i)return Promise.resolve(a);const s=[],o=[],l=[];for(let h=0,u=e.length;h<u;h++){const c=e[h];if(n){const d=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;s.push(d)}if(r){const d=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;o.push(d)}if(i){const d=c.COLOR_0!==void 0?t.getDependency("accessor",c.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(a.morphAttributes.position=u),r&&(a.morphAttributes.normal=c),i&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function mv(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vv(a){const e=a.extensions&&a.extensions[ct.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ko(e.attributes):t=a.indices+":"+Ko(a.attributes)+":"+a.mode,t}function Ko(a){let e="";const t=Object.keys(a).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+a[t[n]]+";";return e}function zs(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gv(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _v=new st;class xv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&i<98?this.textureLoader=new Il(this.options.manager):this.textureLoader=new Cm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:n,userData:{}};er(i,o,r),Un(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,i=t.length;r<i;r++){const s=t[r].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let r=0,i=e.length;r<i;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),i=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[h,u]of s.children.entries())i(u,o.children[h])};return i(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":r=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(i,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(i,s){n.load(Bs.resolveURL(t.uri,r.path),i,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=ws[r.type],o=Pi[r.componentType],l=r.normalized===!0,h=new o(r.count*s);return Promise.resolve(new Vt(h,s,l))}const i=[];return r.bufferView!==void 0?i.push(this.getDependency("bufferView",r.bufferView)):i.push(null),r.sparse!==void 0&&(i.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(i).then(function(s){const o=s[0],l=ws[r.type],h=Pi[r.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let g,m;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(_);y||(g=new h(o,p*f,r.count*f/u),y=new im(g,f/u),t.cache.add(_,y)),m=new Ks(y,l,d%f/u,v)}else o===null?g=new h(r.count*l):g=new h(o,d,r.count*l),m=new Vt(g,l,v);if(r.sparse!==void 0){const p=ws.SCALAR,_=Pi[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,M=new _(s[1],y,r.sparse.count*p),C=new h(s[2],x,r.sparse.count*l);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let B=0,F=M.length;B<F;B++){const E=M[B];if(m.setX(E,C[B*l]),l>=2&&m.setY(E,C[B*l+1]),l>=3&&m.setZ(E,C[B*l+2]),l>=4&&m.setW(E,C[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,s=t.images[i];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){const r=this,i=this.json,s=i.textures[e],o=i.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(i.samplers||{})[s.sampler]||{};return u.magFilter=Yo[d.magFilter]||Gt,u.minFilter=Yo[d.minFilter]||Jn,u.wrapS=jo[d.wrapS]||Ui,u.wrapT=jo[d.wrapT]||Ui,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){const n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());const s=r.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new It(g);m.needsUpdate=!0,d(m)}),t.load(Bs.resolveURL(c,i.path),v,void 0,f)})}).then(function(c){return h===!0&&o.revokeObjectURL(l),c.userData.mimeType=s.mimeType||gv(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const i=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),i.extensions[ct.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=i.associations.get(s);s=i.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,l)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Al,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new $s,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||i||s){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),i&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hr}loadMaterial(e){const t=this,n=this.json,r=this.extensions,i=n.materials[e];let s;const o={},l=i.extensions||{},h=[];if(l[ct.KHR_MATERIALS_UNLIT]){const c=r[ct.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),h.push(c.extendParams(o,i,t))}else{const c=i.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",c.baseColorTexture,$e)),o.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,o.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",c.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=dn);const u=i.alphaMode||bs.OPAQUE;if(u===bs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===bs.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&s!==Yn&&(h.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new Je(1,1),i.normalTexture.scale!==void 0)){const c=i.normalTexture.scale;o.normalScale.set(c,c)}return i.occlusionTexture!==void 0&&s!==Yn&&(h.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&s!==Yn&&(o.emissive=new et().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&s!==Yn&&h.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,$e)),Promise.all(h).then(function(){const c=new s(o);return i.name&&(c.name=i.name),Un(c,i),t.associations.set(c,{materials:e}),i.extensions&&er(r,c,i),c})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function i(o){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Zo(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const h=e[o],u=vv(h),c=r[u];if(c)s.push(c.promise);else{let d;h.extensions&&h.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=i(h):d=Zo(new cn,h,t),r[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,r=this.extensions,i=n.meshes[e],s=i.primitives,o=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?fv(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],m=s[f];let p;const _=h[f];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)p=i.isSkinnedMesh===!0?new sm(g,_):new jt(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?p.geometry=Xo(p.geometry,il):m.mode===$t.TRIANGLE_FAN&&(p.geometry=Xo(p.geometry,Ps));else if(m.mode===$t.LINES)p=new bl(g,_);else if(m.mode===$t.LINE_STRIP)p=new Js(g,_);else if(m.mode===$t.LINE_LOOP)p=new hm(g,_);else if(m.mode===$t.POINTS)p=new um(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mv(p,i),p.name=t.createUniqueName(i.name||"mesh_"+e),Un(p,i),m.extensions&&er(r,p,m),t.assignFinalMaterial(p),c.push(p)}for(let f=0,v=c.length;f<v;f++)t.associations.set(c[f],{meshes:e,primitives:f});if(c.length===1)return c[0];const d=new jn;t.associations.set(d,{meshes:e});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Jc.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ys(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,i=t.joints.length;r<i;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const i=r.pop(),s=r,o=[],l=[];for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c){o.push(c);const d=new st;i!==null&&d.fromArray(i.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Zs(o,l)})}loadAnimation(e){const n=this.json.animations[e],r=n.name?n.name:"animation_"+e,i=[],s=[],o=[],l=[],h=[];for(let u=0,c=n.channels.length;u<c;u++){const d=n.channels[u],f=n.samplers[d.sampler],v=d.target,g=v.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;v.node!==void 0&&(i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(f),h.push(v))}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(u){const c=u[0],d=u[1],f=u[2],v=u[3],g=u[4],m=[];for(let p=0,_=c.length;p<_;p++){const y=c[p],x=d[p],M=f[p],C=v[p],B=g[p];if(y===void 0)continue;y.updateMatrix();let F;switch(Dn[B.path]){case Dn.weights:F=lr;break;case Dn.rotation:F=ni;break;case Dn.position:case Dn.scale:default:F=cr;break}const E=y.name?y.name:y.uuid,S=C.interpolation!==void 0?dv[C.interpolation]:Bi,D=[];Dn[B.path]===Dn.weights?y.traverse(function(I){I.morphTargetInfluences&&D.push(I.name?I.name:I.uuid)}):D.push(E);let V=M.array;if(M.normalized){const I=zs(V.constructor),X=new Float32Array(V.length);for(let q=0,ne=V.length;q<ne;q++)X[q]=V[q]*I;V=X}for(let I=0,X=D.length;I<X;I++){const q=new F(D[I]+"."+Dn[B.path],x.array,V,S);C.interpolation==="CUBICSPLINE"&&(q.createInterpolant=function(O){const U=this instanceof ni?uv:Ul;return new U(this.times,this.values,this.getValueSize()/3,O)},q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(q)}}return new gm(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(i){const s=n._getNodeRef(n.meshCache,r.mesh,i);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,h=r.weights.length;l<h;l++)o.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),s=[],o=r.children||[];for(let h=0,u=o.length;h<u;h++)s.push(n.getDependency("node",o[h]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([i,Promise.all(s),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_v)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],s=i.name?r.createUniqueName(i.name):"",o=[],l=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return l&&o.push(l),i.camera!==void 0&&o.push(r.getDependency("camera",i.camera).then(function(h){return r._getNodeRef(r.cameraCache,i.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(i.isBone===!0?u=new wl:h.length>1?u=new jn:h.length===1?u=h[0]:u=new xt,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(i.name&&(u.userData.name=i.name,u.name=s),Un(u,i),i.extensions&&er(n,u,i),i.matrix!==void 0){const c=new st;c.fromArray(i.matrix),u.applyMatrix4(c)}else i.translation!==void 0&&u.position.fromArray(i.translation),i.rotation!==void 0&&u.quaternion.fromArray(i.rotation),i.scale!==void 0&&u.scale.fromArray(i.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,i=new jn;n.name&&(i.name=r.createUniqueName(n.name)),Un(i,n),n.extensions&&er(t,i,n);const s=n.nodes||[],o=[];for(let l=0,h=s.length;l<h;l++)o.push(r.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,c=l.length;u<c;u++)i.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of r.associations)(d instanceof on||d instanceof It)&&c.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&c.set(d,f)}),c};return r.associations=h(i),i})}}function yv(a,e,t){const n=e.attributes,r=new An;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new ee(l[0],l[1],l[2]),new ee(h[0],h[1],h[2])),o.normalized){const u=zs(Pi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const o=new ee,l=new ee;for(let h=0,u=i.length;h<u;h++){const c=i[h];if(c.POSITION!==void 0){const d=t.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=zs(Pi[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}a.boundingBox=r;const s=new Rn;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=s}function Zo(a,e,t){const n=e.attributes,r=[];function i(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Os[s]||s.toLowerCase();o in a.attributes||r.push(i(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});r.push(s)}return Un(a,e),yv(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?pv(a,e.targets,t):a})}const Mv=new km;Mv.load("./models/pawn/scene.gltf",a=>{a.scene.position.set(5,0,4),a.scene.traverse(e=>{e.isMesh&&(e.material=new bi({color:"grey"}))}),fr.add(a.scene)},a=>{console.log(a.loaded/a.total*100+"% loaded")},a=>{console.log("An error happened: "+a)});class Ev extends jt{constructor({width:e,height:t,depth:n,color:r="0x00ff00",velocity:i={x:0,y:0,z:0},material:s=new hr({color:r})}){super(new Gi(e,t,n),s),this.height=t,this.width=e,this.depth=n,this.bottom=this.position.y-this.height/2,this.top=this.position.y+this.height/2,this.velocity=i}update(e){this.bottom=this.position.y-this.height/2,this.top=this.position.y+this.height/2,this.velocity.y+=-.005,this.bottom+this.velocity.y<=e.top?(this.velocity.y=-this.velocity.y,this.velocity.y*=.8):this.position.y+=this.velocity.y}}class qr extends Nl{constructor({color:e=16777215,intensity:t=1,castShadow:n=!1}){super(e,t),this.castShadow=n}}const fr=new nm,Ii=new zt(75,window.innerWidth/window.innerHeight,.1,1e3),Hi=new Tl;Hi.shadowMap.enabled=!0;Hi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Hi.domElement);new Hm(Ii,Hi.domElement);const ia=new Ev({width:80,height:.1,depth:80,color:16777215,material:[new bi({color:"lightgrey"}),new bi({color:"lightgrey"}),new hr({map:new Il().load("./img/Chess_Board.png")}),new bi({color:"lightgrey"}),new bi({color:"lightgrey"}),new bi({color:"lightgrey"})]}),Sv=new zm(90);fr.add(Sv);ia.position.set(0,0,0);ia.receiveShadow=!0;fr.add(ia);Ii.rotation.y=1;Ii.position.set(5,1,1);const Fl=new qr({castShadow:!0}),Bl=new qr({intensity:.5}),Ol=new qr({intensity:.5}),zl=new qr({intensity:.5});Fl.position.set(1,2,0);Bl.position.set(-3,2,0);Ol.position.set(0,2,3);zl.position.set(0,2,-3);fr.add(Fl,Bl,Ol,zl);function Vl(){requestAnimationFrame(Vl),Tv(Hi)&&(Ii.aspect=window.innerWidth/window.innerHeight,Ii.updateProjectionMatrix()),Hi.render(fr,Ii)}if(Go.isWebGLAvailable())Vl();else{const a=Go.getWebGLErrorMessage();document.getElementById("container").appendChild(a)}function Tv(a){const e=a.domElement,t=innerWidth,n=innerHeight,r=e.width!==t||e.height!==n;return r&&a.setSize(t,n,!1),r}
