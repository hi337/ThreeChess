var Kh=Object.defineProperty;var Jh=(r,e,t)=>e in r?Kh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ze=(r,e,t)=>(Jh(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="152",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,ka=1,Qh=2,kl=1,eu=2,jn=3,Kn=0,on=1,Dn=2,fi=0,hr=1,za=2,Ha=3,Ga=4,tu=5,ar=100,nu=101,iu=102,Va=103,Wa=104,ru=200,su=201,ou=202,au=203,zl=204,Hl=205,cu=206,lu=207,hu=208,uu=209,fu=210,du=0,pu=1,mu=2,$o=3,gu=4,_u=5,vu=6,xu=7,fa=0,yu=1,Mu=2,Yn=0,Eu=1,Su=2,Tu=3,Au=4,bu=5,Gl=300,mr=301,gr=302,jo=303,qo=304,Gs=306,_r=1e3,gn=1001,Bs=1002,Ht=1003,Yo=1004,Us=1005,sn=1006,Vl=1007,Li=1008,Pi=1009,wu=1010,Ru=1011,Wl=1012,Cu=1013,Si=1014,ui=1015,$r=1016,Lu=1017,Pu=1018,ur=1020,Iu=1021,_n=1023,Du=1024,Nu=1025,bi=1026,vr=1027,Uu=1028,Ou=1029,Fu=1030,Bu=1031,ku=1033,ao=33776,co=33777,lo=33778,ho=33779,Xa=35840,$a=35841,ja=35842,qa=35843,zu=36196,Ya=37492,Ka=37496,Ja=37808,Za=37809,Qa=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,oc=37817,ac=37818,lc=37819,hc=37820,uc=37821,uo=36492,Hu=36283,fc=36284,dc=36285,pc=36286,jr=2300,xr=2301,fo=2302,mc=2400,gc=2401,_c=2402,Gu=2500,Vu=0,Xl=1,Ko=2,$l=3e3,wi=3001,Wu=3200,Xu=3201,da=0,$u=1,Ri="",je="srgb",Nn="srgb-linear",jl="display-p3",po=7680,ju=519,Jo=35044,vc="300 es",Zo=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const zr=Math.PI/180,yr=180/Math.PI;function xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[r&255]+Yt[r>>8&255]+Yt[r>>16&255]+Yt[r>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Ft(r,e,t){return Math.max(e,Math.min(t,r))}function pa(r,e){return(r%e+e)%e}function qu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Yu(r,e,t){return r!==e?(t-r)/(e-r):0}function Hr(r,e,t){return(1-t)*r+t*e}function Ku(r,e,t,n){return Hr(r,e,1-Math.exp(-t*n))}function Ju(r,e=1){return e-Math.abs(pa(r,e*2)-e)}function Zu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ef(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tf(r,e){return r+Math.random()*(e-r)}function nf(r){return r*(.5-Math.random())}function rf(r){r!==void 0&&(xc=r);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sf(r){return r*zr}function of(r){return r*yr}function Qo(r){return(r&r-1)===0&&r!==0}function ql(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function af(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),M=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*M,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*M,a*l);break;case"ZYZ":r.set(c*M,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cf={DEG2RAD:zr,RAD2DEG:yr,generateUUID:xn,clamp:Ft,euclideanModulo:pa,mapLinear:qu,inverseLerp:Yu,lerp:Hr,damp:Ku,pingpong:Ju,smoothstep:Zu,smootherstep:Qu,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:rf,degToRad:sf,radToDeg:of,isPowerOfTwo:Qo,ceilPowerOfTwo:ql,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:af,normalize:yt,denormalize:qn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],M=n[8],E=i[0],v=i[3],p=i[6],I=i[1],A=i[4],R=i[7],L=i[2],O=i[5],k=i[8];return s[0]=o*E+a*I+c*L,s[3]=o*v+a*A+c*O,s[6]=o*p+a*R+c*k,s[1]=l*E+h*I+u*L,s[4]=l*v+h*A+u*O,s[7]=l*p+h*R+u*k,s[2]=d*E+m*I+M*L,s[5]=d*v+m*A+M*O,s[8]=d*p+m*R+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,M=t*u+n*d+i*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=u*E,e[1]=(i*l-h*n)*E,e[2]=(a*n-i*o)*E,e[3]=d*E,e[4]=(h*t-i*c)*E,e[5]=(i*s-a*t)*E,e[6]=m*E,e[7]=(n*c-l*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new dt;function Kl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const yc={};function Gr(r){r in yc||(yc[r]=!0,console.warn(r))}function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const lf=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hf=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function uf(r){return r.convertSRGBToLinear().applyMatrix3(hf)}function ff(r){return r.applyMatrix3(lf).convertLinearToSRGB()}const df={[Nn]:r=>r,[je]:r=>r.convertSRGBToLinear(),[jl]:uf},pf={[Nn]:r=>r,[je]:r=>r.convertLinearToSRGB(),[jl]:ff},Mn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Nn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=df[e],i=pf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Vi;class Jl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=qr("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zl{constructor(e=null){this.isSource=!0,this.uuid=xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_o(i[o].image)):s.push(_o(i[o]))}else s=_o(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _o(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class jt extends Oi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=gn,i=gn,s=sn,o=Li,a=_n,c=Pi,l=jt.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=xn(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wi?je:Ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?wi:$l}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?je:Ri}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Gl;jt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],M=c[9],E=c[2],v=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(M-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(M+v)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,R=(m+1)/2,L=(p+1)/2,O=(h+d)/4,k=(u+E)/4,X=(M+v)/4;return A>R&&A>L?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=O/n,s=k/n):R>L?R<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(R),n=O/i,s=X/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=k/s,i=X/s),this.set(n,i,s,t),this}let I=Math.sqrt((v-M)*(v-M)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(I)<.001&&(I=1),this.x=(v-M)/I,this.y=(u-E)/I,this.z=(d-h)/I,this.w=Math.acos((l+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ii extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?je:Ri),this.texture=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ql extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gf extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],M=s[o+2],E=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=M,e[t+3]=E;return}if(u!==E||c!==d||l!==m||h!==M){let v=1-a;const p=c*d+l*m+h*M+u*E,I=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const L=Math.sqrt(A),O=Math.atan2(L,p*I);v=Math.sin(v*O)/L,a=Math.sin(a*O)/L}const R=a*I;if(c=c*v+d*R,l=l*v+m*R,h=h*v+M*R,u=u*v+E*R,v===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],M=s[o+3];return e[t]=a*M+h*u+c*m-l*d,e[t+1]=c*M+h*d+l*u-a*m,e[t+2]=l*M+h*m+a*d-c*u,e[t+3]=h*M-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),M=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*M,this._y=l*m*u-d*h*M,this._z=l*h*M+d*m*u,this._w=l*h*u-d*m*M;break;case"YXZ":this._x=d*h*u+l*m*M,this._y=l*m*u-d*h*M,this._z=l*h*M-d*m*u,this._w=l*h*u+d*m*M;break;case"ZXY":this._x=d*h*u-l*m*M,this._y=l*m*u+d*h*M,this._z=l*h*M+d*m*u,this._w=l*h*u-d*m*M;break;case"ZYX":this._x=d*h*u-l*m*M,this._y=l*m*u+d*h*M,this._z=l*h*M-d*m*u,this._w=l*h*u+d*m*M;break;case"YZX":this._x=d*h*u+l*m*M,this._y=l*m*u+d*h*M,this._z=l*h*M-d*m*u,this._w=l*h*u-d*m*M;break;case"XZY":this._x=d*h*u-l*m*M,this._y=l*m*u-d*h*M,this._z=l*h*M+d*m*u,this._w=l*h*u+d*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,u=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new z,Mc=new Un;class Rn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox),Wi.applyMatrix4(e.matrixWorld),this.union(Wi);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Hn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),Wi.copy(i.boundingBox),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),os.subVectors(this.max,Cr),Xi.subVectors(e.a,Cr),$i.subVectors(e.b,Cr),ji.subVectors(e.c,Cr),ii.subVectors($i,Xi),ri.subVectors(ji,$i),_i.subVectors(Xi,ji);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-_i.z,_i.y,ii.z,0,-ii.x,ri.z,0,-ri.x,_i.z,0,-_i.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-_i.y,_i.x,0];return!xo(t,Xi,$i,ji,os)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Xi,$i,ji,os))?!1:(as.crossVectors(ii,ri),t=[as.x,as.y,as.z],xo(t,Xi,$i,ji,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,Wi=new Rn,Xi=new z,$i=new z,ji=new z,ii=new z,ri=new z,_i=new z,Cr=new z,os=new z,as=new z,vi=new z;function xo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vi.fromArray(r,s);const a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const _f=new Rn,Lr=new z,yo=new z;class Zn{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(yo)),this.expandByPoint(Lr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new z,Mo=new z,cs=new z,si=new z,Eo=new z,ls=new z,So=new z;class Vs{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mo.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Mo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=si.dot(this.direction),c=-si.dot(cs),l=si.lengthSq(),h=Math.abs(1-o*o);let u,d,m,M;if(h>0)if(u=o*c-a,d=o*a-c,M=s*h,u>=0)if(d>=-M)if(d<=M){const E=1/h;u*=E,d*=E,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-M?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=M?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mo).addScaledVector(cs,d),m}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){Eo.subVectors(t,e),ls.subVectors(n,e),So.crossVectors(Eo,ls);let o=this.direction.dot(So),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const c=a*this.direction.dot(ls.crossVectors(si,ls));if(c<0)return null;const l=a*this.direction.dot(Eo.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(So);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,u,d,m,M,E,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=M,p[11]=E,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,M=a*h,E=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+M*l,t[5]=d-E*l,t[9]=-a*c,t[2]=E-d*l,t[6]=M+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,M=l*h,E=l*u;t[0]=d+E*a,t[4]=M*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-M,t[6]=E+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,M=l*h,E=l*u;t[0]=d-E*a,t[4]=-o*u,t[8]=M+m*a,t[1]=m+M*a,t[5]=o*h,t[9]=E-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,M=a*h,E=a*u;t[0]=c*h,t[4]=M*l-m,t[8]=d*l+E,t[1]=c*u,t[5]=E*l+d,t[9]=m*l-M,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,M=a*c,E=a*l;t[0]=c*h,t[4]=E-d*u,t[8]=M*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+M,t[10]=d-E*u}else if(e.order==="XZY"){const d=o*c,m=o*l,M=a*c,E=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+E,t[5]=o*h,t[9]=m*u-M,t[2]=M*u-m,t[6]=a*h,t[10]=E*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,xf)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),oi.crossVectors(n,ln),oi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),oi.crossVectors(n,ln)),oi.normalize(),hs.crossVectors(ln,oi),i[0]=oi.x,i[4]=hs.x,i[8]=ln.x,i[1]=oi.y,i[5]=hs.y,i[9]=ln.y,i[2]=oi.z,i[6]=hs.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],M=n[2],E=n[6],v=n[10],p=n[14],I=n[3],A=n[7],R=n[11],L=n[15],O=i[0],k=i[4],X=i[8],b=i[12],D=i[1],te=i[5],ae=i[9],G=i[13],q=i[2],j=i[6],le=i[10],re=i[14],he=i[3],_e=i[7],me=i[11],Pe=i[15];return s[0]=o*O+a*D+c*q+l*he,s[4]=o*k+a*te+c*j+l*_e,s[8]=o*X+a*ae+c*le+l*me,s[12]=o*b+a*G+c*re+l*Pe,s[1]=h*O+u*D+d*q+m*he,s[5]=h*k+u*te+d*j+m*_e,s[9]=h*X+u*ae+d*le+m*me,s[13]=h*b+u*G+d*re+m*Pe,s[2]=M*O+E*D+v*q+p*he,s[6]=M*k+E*te+v*j+p*_e,s[10]=M*X+E*ae+v*le+p*me,s[14]=M*b+E*G+v*re+p*Pe,s[3]=I*O+A*D+R*q+L*he,s[7]=I*k+A*te+R*j+L*_e,s[11]=I*X+A*ae+R*le+L*me,s[15]=I*b+A*G+R*re+L*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],M=e[3],E=e[7],v=e[11],p=e[15];return M*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+E*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+v*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],M=e[12],E=e[13],v=e[14],p=e[15],I=u*v*l-E*d*l+E*c*m-a*v*m-u*c*p+a*d*p,A=M*d*l-h*v*l-M*c*m+o*v*m+h*c*p-o*d*p,R=h*E*l-M*u*l+M*a*m-o*E*m-h*a*p+o*u*p,L=M*u*c-h*E*c-M*a*d+o*E*d+h*a*v-o*u*v,O=t*I+n*A+i*R+s*L;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=I*k,e[1]=(E*d*s-u*v*s-E*i*m+n*v*m+u*i*p-n*d*p)*k,e[2]=(a*v*s-E*c*s+E*i*l-n*v*l-a*i*p+n*c*p)*k,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*k,e[4]=A*k,e[5]=(h*v*s-M*d*s+M*i*m-t*v*m-h*i*p+t*d*p)*k,e[6]=(M*c*s-o*v*s-M*i*l+t*v*l+o*i*p-t*c*p)*k,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*m+t*c*m)*k,e[8]=R*k,e[9]=(M*u*s-h*E*s-M*n*m+t*E*m+h*n*p-t*u*p)*k,e[10]=(o*E*s-M*a*s+M*n*l-t*E*l-o*n*p+t*a*p)*k,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*k,e[12]=L*k,e[13]=(h*E*i-M*u*i+M*n*d-t*E*d-h*n*v+t*u*v)*k,e[14]=(M*a*i-o*E*i-M*n*c+t*E*c+o*n*v-t*a*v)*k,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,M=s*u,E=o*h,v=o*u,p=a*u,I=c*l,A=c*h,R=c*u,L=n.x,O=n.y,k=n.z;return i[0]=(1-(E+p))*L,i[1]=(m+R)*L,i[2]=(M-A)*L,i[3]=0,i[4]=(m-R)*O,i[5]=(1-(d+p))*O,i[6]=(v+I)*O,i[7]=0,i[8]=(M+A)*k,i[9]=(v-I)*k,i[10]=(1-(d+E))*k,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/s,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),u=(t+e)*c,d=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new z,En=new ot,vf=new z(0,0,0),xf=new z(1,1,1),oi=new z,hs=new z,ln=new z,Ec=new ot,Sc=new Un;class Ws{constructor(e=0,t=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class ma{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yf=0;const Tc=new z,Yi=new Un,Vn=new ot,us=new z,Pr=new z,Mf=new z,Ef=new Un,Ac=new z(1,0,0),bc=new z(0,1,0),wc=new z(0,0,1),Sf={type:"added"},Rc={type:"removed"};class bt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new z,t=new Ws,n=new Un,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new dt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Pr,us,this.up):Vn.lookAt(us,Pr,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),M=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new z(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new z,Wn=new z,To=new z,Xn=new z,Ki=new z,Ji=new z,Cc=new z,Ao=new z,bo=new z,wo=new z;let fs=!1;class An{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Sn.subVectors(i,t),Wn.subVectors(n,t),To.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Wn),c=Sn.dot(To),l=Wn.dot(Wn),h=Wn.dot(To),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,M=(o*h-a*c)*d;return s.set(1-m-M,M,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn),Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,n,i,s,o,a,c){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Xn),c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),An.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ki.subVectors(i,n),Ji.subVectors(s,n),Ao.subVectors(e,n);const c=Ki.dot(Ao),l=Ji.dot(Ao);if(c<=0&&l<=0)return t.copy(n);bo.subVectors(e,i);const h=Ki.dot(bo),u=Ji.dot(bo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ki,o);wo.subVectors(e,s);const m=Ki.dot(wo),M=Ji.dot(wo);if(M>=0&&m<=M)return t.copy(s);const E=m*l-c*M;if(E<=0&&l>=0&&M<=0)return a=l/(l-M),t.copy(n).addScaledVector(Ji,a);const v=h*M-m*u;if(v<=0&&u-h>=0&&m-M>=0)return Cc.subVectors(s,i),a=(u-h)/(u-h+(m-M)),t.copy(i).addScaledVector(Cc,a);const p=1/(v+E+d);return o=E*p,a=d*p,t.copy(n).addScaledVector(Ki,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tf=0;class wn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=hr,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zl,this.blendDst=Hl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Ro(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mn.workingColorSpace){if(e=pa(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ro(o,s,e+1/3),this.g=Ro(o,s,e),this.b=Ro(o,s,e-1/3)}return Mn.toWorkingColorSpace(this,i),this}setStyle(e,t=je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){const n=eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Mn.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ft(Kt.r*255,0,255))*65536+Math.round(Ft(Kt.g*255,0,255))*256+Math.round(Ft(Kt.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mn.workingColorSpace){Mn.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,s=Kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=je){Mn.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(ds);const n=Hr(Tn.h,ds.h,t),i=Hr(Tn.s,ds.s,t),s=Hr(Tn.l,ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ke;Ke.NAMES=eh;class Ti extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new z,ps=new Ee;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class th extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nh extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Af=0;const pn=new ot,Co=new bt,Zi=new z,hn=new Rn,Ir=new Rn,zt=new z;class fn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?nh:th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(hn.min,Ir.min),hn.expandByPoint(zt),zt.addVectors(hn.max,Ir.max),hn.expandByPoint(zt)):(hn.expandByPoint(Ir.min),hn.expandByPoint(Ir.max))}hn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)zt.fromBufferAttribute(a,l),c&&(Zi.fromBufferAttribute(e,l),zt.add(Zi)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new z,h[D]=new z;const u=new z,d=new z,m=new z,M=new Ee,E=new Ee,v=new Ee,p=new z,I=new z;function A(D,te,ae){u.fromArray(i,D*3),d.fromArray(i,te*3),m.fromArray(i,ae*3),M.fromArray(o,D*2),E.fromArray(o,te*2),v.fromArray(o,ae*2),d.sub(u),m.sub(u),E.sub(M),v.sub(M);const G=1/(E.x*v.y-v.x*E.y);isFinite(G)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(m,-E.y).multiplyScalar(G),I.copy(m).multiplyScalar(E.x).addScaledVector(d,-v.x).multiplyScalar(G),l[D].add(p),l[te].add(p),l[ae].add(p),h[D].add(I),h[te].add(I),h[ae].add(I))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let D=0,te=R.length;D<te;++D){const ae=R[D],G=ae.start,q=ae.count;for(let j=G,le=G+q;j<le;j+=3)A(n[j+0],n[j+1],n[j+2])}const L=new z,O=new z,k=new z,X=new z;function b(D){k.fromArray(s,D*3),X.copy(k);const te=l[D];L.copy(te),L.sub(k.multiplyScalar(k.dot(te))).normalize(),O.crossVectors(X,te);const G=O.dot(h[D])<0?-1:1;c[D*4]=L.x,c[D*4+1]=L.y,c[D*4+2]=L.z,c[D*4+3]=G}for(let D=0,te=R.length;D<te;++D){const ae=R[D],G=ae.start,q=ae.count;for(let j=G,le=G+q;j<le;j+=3)b(n[j+0]),b(n[j+1]),b(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const M=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,v),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),l.fromBufferAttribute(n,v),a.add(h),c.add(h),l.add(h),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,M=0;for(let E=0,v=c.length;E<v;E++){a.isInterleavedBufferAttribute?m=c[E]*a.data.stride+a.offset:m=c[E]*h;for(let p=0;p<h;p++)d[M++]=l[m++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ot,Pn=new Vs,ms=new Zn,Pc=new z,Qi=new z,er=new z,tr=new z,Lo=new z,gs=new z,_s=new Ee,vs=new Ee,xs=new Ee,Ic=new z,Dc=new z,Nc=new z,ys=new z,Ms=new z;class $t extends bt{constructor(e=new fn,t=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Lo.fromBufferAttribute(u,e),o?gs.addScaledVector(Lo,h):gs.addScaledVector(Lo.sub(t),h))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),Pn.copy(e.ray).recast(e.near),!(ms.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(ms,Pc)===null||Pn.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),Pn.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,h=i.attributes.normal,u=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,M=u.length;m<M;m++){const E=u[m],v=s[E.materialIndex],p=Math.max(E.start,d.start),I=Math.min(o.count,Math.min(E.start+E.count,d.start+d.count));for(let A=p,R=I;A<R;A+=3){const L=o.getX(A),O=o.getX(A+1),k=o.getX(A+2);n=Es(this,v,e,Pn,c,l,h,L,O,k),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=E.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let E=m,v=M;E<v;E+=3){const p=o.getX(E),I=o.getX(E+1),A=o.getX(E+2);n=Es(this,s,e,Pn,c,l,h,p,I,A),n&&(n.faceIndex=Math.floor(E/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,M=u.length;m<M;m++){const E=u[m],v=s[E.materialIndex],p=Math.max(E.start,d.start),I=Math.min(a.count,Math.min(E.start+E.count,d.start+d.count));for(let A=p,R=I;A<R;A+=3){const L=A,O=A+1,k=A+2;n=Es(this,v,e,Pn,c,l,h,L,O,k),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=E.materialIndex,t.push(n))}}else{const m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let E=m,v=M;E<v;E+=3){const p=E,I=E+1,A=E+2;n=Es(this,s,e,Pn,c,l,h,p,I,A),n&&(n.faceIndex=Math.floor(E/3),t.push(n))}}}}function bf(r,e,t,n,i,s,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Kn,a),c===null)return null;Ms.copy(a),Ms.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ms);return l<t.near||l>t.far?null:{distance:l,point:Ms.clone(),object:r}}function Es(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Qi),r.getVertexPosition(c,er),r.getVertexPosition(l,tr);const h=bf(r,e,t,n,Qi,er,tr,ys);if(h){i&&(_s.fromBufferAttribute(i,a),vs.fromBufferAttribute(i,c),xs.fromBufferAttribute(i,l),h.uv=An.getInterpolation(ys,Qi,er,tr,_s,vs,xs,new Ee)),s&&(_s.fromBufferAttribute(s,a),vs.fromBufferAttribute(s,c),xs.fromBufferAttribute(s,l),h.uv1=An.getInterpolation(ys,Qi,er,tr,_s,vs,xs,new Ee),h.uv2=h.uv1),o&&(Ic.fromBufferAttribute(o,a),Dc.fromBufferAttribute(o,c),Nc.fromBufferAttribute(o,l),h.normal=An.getInterpolation(ys,Qi,er,tr,Ic,Dc,Nc,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new z,materialIndex:0};An.getNormal(Qi,er,tr,u.normal),h.face=u}return h}class Sr extends fn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;M("z","y","x",-1,-1,n,t,e,o,s,0),M("z","y","x",1,-1,n,t,-e,o,s,1),M("x","z","y",1,1,e,n,t,i,o,2),M("x","z","y",1,-1,e,n,-t,i,o,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function M(E,v,p,I,A,R,L,O,k,X,b){const D=R/k,te=L/X,ae=R/2,G=L/2,q=O/2,j=k+1,le=X+1;let re=0,he=0;const _e=new z;for(let me=0;me<le;me++){const Pe=me*te-G;for(let ye=0;ye<j;ye++){const ne=ye*D-ae;_e[E]=ne*I,_e[v]=Pe*A,_e[p]=q,l.push(_e.x,_e.y,_e.z),_e[E]=0,_e[v]=0,_e[p]=O>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(ye/k),u.push(1-me/X),re+=1}}for(let me=0;me<X;me++)for(let Pe=0;Pe<k;Pe++){const ye=d+Pe+j*me,ne=d+Pe+j*(me+1),de=d+(Pe+1)+j*(me+1),Te=d+(Pe+1)+j*me;c.push(ye,ne,Te),c.push(ne,de,Te),he+=6}a.addGroup(m,he,b),m+=he,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const n=Mr(r[t]);for(const i in n)e[i]=n[i]}return e}function wf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ih(r){return r.getRenderTarget()===null?r.outputColorSpace:Nn}const Rf={clone:Mr,merge:Qt};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rh extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends rh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const nr=-90,ir=1;class Pf extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new en(nr,ir,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new en(nr,ir,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new en(nr,ir,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new en(nr,ir,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new en(nr,ir,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new en(nr,ir,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class sh extends jt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?je:Ri),this.texture=new sh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sr(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:fi});s.uniforms.tEquirect.value=t;const o=new $t(i,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=sn),new Pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Po=new z,Df=new z,Nf=new dt;class yi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Po.subVectors(n,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nf.getNormalMatrix(e),i=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Zn,Ss=new z;class ga{constructor(e=new yi,t=new yi,n=new yi,i=new yi,s=new yi,o=new yi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],M=n[10],E=n[11],v=n[12],p=n[13],I=n[14],A=n[15];return t[0].setComponents(a-i,u-c,E-d,A-v).normalize(),t[1].setComponents(a+i,u+c,E+d,A+v).normalize(),t[2].setComponents(a+s,u+l,E+m,A+p).normalize(),t[3].setComponents(a-s,u-l,E-m,A-p).normalize(),t[4].setComponents(a-o,u-h,E-M,A-I).normalize(),t[5].setComponents(a+o,u+h,E+M,A+I).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,d),l.onUploadCallback();let M;if(u instanceof Float32Array)M=r.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)M=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=r.SHORT;else if(u instanceof Uint32Array)M=r.UNSIGNED_INT;else if(u instanceof Int32Array)M=r.INT;else if(u instanceof Int8Array)M=r.BYTE;else if(u instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,m=h.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class _a extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,m=[],M=[],E=[],v=[];for(let p=0;p<h;p++){const I=p*d-o;for(let A=0;A<l;A++){const R=A*u-s;M.push(R,-I,0),E.push(0,0,1),v.push(A/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<a;I++){const A=I+l*p,R=I+l*(p+1),L=I+1+l*(p+1),O=I+1+l*p;m.push(A,R,O),m.push(R,L,O)}this.setIndex(m),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf="vec3 transformed = vec3( position );",Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#endif`,Ad=`#if defined( USE_ENVMAP )
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Id=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_UV
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
#endif`,Rp=`#ifdef USE_UV
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
#endif`,Cp=`#ifdef USE_UV
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,Kp=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,Zp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,rm=`#define TOON
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
}`,sm=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,cm=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,nt={alphamap_fragment:Of,alphamap_pars_fragment:Ff,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:zf,aomap_pars_fragment:Hf,begin_vertex:Gf,beginnormal_vertex:Vf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:$f,clipping_planes_fragment:jf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:Kf,color_fragment:Jf,color_pars_fragment:Zf,color_pars_vertex:Qf,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:rd,displacementmap_vertex:sd,emissivemap_fragment:od,emissivemap_pars_fragment:ad,encodings_fragment:cd,encodings_pars_fragment:ld,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:fd,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Ad,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_fragment:yd,lightmap_pars_fragment:Md,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Sd,lights_pars_begin:Td,lights_toon_fragment:bd,lights_toon_pars_fragment:wd,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Pd,lights_fragment_begin:Id,lights_fragment_maps:Dd,lights_fragment_end:Nd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Bd,map_fragment:kd,map_pars_fragment:zd,map_particle_fragment:Hd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Wd,morphcolor_vertex:Xd,morphnormal_vertex:$d,morphtarget_pars_vertex:jd,morphtarget_vertex:qd,normal_fragment_begin:Yd,normal_fragment_maps:Kd,normal_pars_fragment:Jd,normal_pars_vertex:Zd,normal_vertex:Qd,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:rp,output_fragment:sp,packing:op,premultiplied_alpha_fragment:ap,project_vertex:cp,dithering_fragment:lp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:xp,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:Ep,tonemapping_fragment:Sp,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:bp,uv_pars_fragment:wp,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Lp,background_vert:Pp,background_frag:Ip,backgroundCube_vert:Dp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Op,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:zp,equirect_vert:Hp,equirect_frag:Gp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:$p,meshlambert_vert:jp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:Kp,meshnormal_vert:Jp,meshnormal_frag:Zp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:rm,points_vert:sm,points_frag:om,shadow_vert:am,shadow_frag:cm,sprite_vert:lm,sprite_frag:hm},Re={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}}},In={basic:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Qt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Qt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Qt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Qt([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Qt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Qt([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Qt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Qt([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Qt([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Qt([Re.lights,Re.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};In.physical={uniforms:Qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ts={r:0,b:0,g:0};function um(r,e,t,n,i,s,o){const a=new Ke(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function M(v,p){let I=!1,A=p.isScene===!0?p.background:null;switch(A&&A.isTexture&&(A=(p.backgroundBlurriness>0?t:e).get(A)),A===null?E(a,c):A&&A.isColor&&(E(A,1),I=!0),r.xr.getEnvironmentBlendMode()){case"opaque":I=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),I=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),I=!0;break}(r.autoClear||I)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Gs)?(h===void 0&&(h=new $t(new Sr(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Mr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,k,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=A.colorSpace!==je,(u!==A||d!==A.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,m=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new $t(new _a(2,2),new Di({name:"BackgroundMaterial",uniforms:Mr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=A.colorSpace!==je,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,m=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function E(v,p){v.getRGB(Ts,ih(r)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(v,p=1){a.set(v),c=p,E(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,E(a,c)},render:M}}function fm(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=v(null);let l=c,h=!1;function u(q,j,le,re,he){let _e=!1;if(o){const me=E(re,le,j);l!==me&&(l=me,m(l.object)),_e=p(q,re,le,he),_e&&I(q,re,le,he)}else{const me=j.wireframe===!0;(l.geometry!==re.id||l.program!==le.id||l.wireframe!==me)&&(l.geometry=re.id,l.program=le.id,l.wireframe=me,_e=!0)}he!==null&&t.update(he,r.ELEMENT_ARRAY_BUFFER),(_e||h)&&(h=!1,X(q,j,le,re),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(q){return n.isWebGL2?r.bindVertexArray(q):s.bindVertexArrayOES(q)}function M(q){return n.isWebGL2?r.deleteVertexArray(q):s.deleteVertexArrayOES(q)}function E(q,j,le){const re=le.wireframe===!0;let he=a[q.id];he===void 0&&(he={},a[q.id]=he);let _e=he[j.id];_e===void 0&&(_e={},he[j.id]=_e);let me=_e[re];return me===void 0&&(me=v(d()),_e[re]=me),me}function v(q){const j=[],le=[],re=[];for(let he=0;he<i;he++)j[he]=0,le[he]=0,re[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:le,attributeDivisors:re,object:q,attributes:{},index:null}}function p(q,j,le,re){const he=l.attributes,_e=j.attributes;let me=0;const Pe=le.getAttributes();for(const ye in Pe)if(Pe[ye].location>=0){const de=he[ye];let Te=_e[ye];if(Te===void 0&&(ye==="instanceMatrix"&&q.instanceMatrix&&(Te=q.instanceMatrix),ye==="instanceColor"&&q.instanceColor&&(Te=q.instanceColor)),de===void 0||de.attribute!==Te||Te&&de.data!==Te.data)return!0;me++}return l.attributesNum!==me||l.index!==re}function I(q,j,le,re){const he={},_e=j.attributes;let me=0;const Pe=le.getAttributes();for(const ye in Pe)if(Pe[ye].location>=0){let de=_e[ye];de===void 0&&(ye==="instanceMatrix"&&q.instanceMatrix&&(de=q.instanceMatrix),ye==="instanceColor"&&q.instanceColor&&(de=q.instanceColor));const Te={};Te.attribute=de,de&&de.data&&(Te.data=de.data),he[ye]=Te,me++}l.attributes=he,l.attributesNum=me,l.index=re}function A(){const q=l.newAttributes;for(let j=0,le=q.length;j<le;j++)q[j]=0}function R(q){L(q,0)}function L(q,j){const le=l.newAttributes,re=l.enabledAttributes,he=l.attributeDivisors;le[q]=1,re[q]===0&&(r.enableVertexAttribArray(q),re[q]=1),he[q]!==j&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,j),he[q]=j)}function O(){const q=l.newAttributes,j=l.enabledAttributes;for(let le=0,re=j.length;le<re;le++)j[le]!==q[le]&&(r.disableVertexAttribArray(le),j[le]=0)}function k(q,j,le,re,he,_e){n.isWebGL2===!0&&(le===r.INT||le===r.UNSIGNED_INT)?r.vertexAttribIPointer(q,j,le,he,_e):r.vertexAttribPointer(q,j,le,re,he,_e)}function X(q,j,le,re){if(n.isWebGL2===!1&&(q.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const he=re.attributes,_e=le.getAttributes(),me=j.defaultAttributeValues;for(const Pe in _e){const ye=_e[Pe];if(ye.location>=0){let ne=he[Pe];if(ne===void 0&&(Pe==="instanceMatrix"&&q.instanceMatrix&&(ne=q.instanceMatrix),Pe==="instanceColor"&&q.instanceColor&&(ne=q.instanceColor)),ne!==void 0){const de=ne.normalized,Te=ne.itemSize,we=t.get(ne);if(we===void 0)continue;const H=we.buffer,Ve=we.type,Be=we.bytesPerElement;if(ne.isInterleavedBufferAttribute){const xe=ne.data,Ie=xe.stride,ce=ne.offset;if(xe.isInstancedInterleavedBuffer){for(let oe=0;oe<ye.locationSize;oe++)L(ye.location+oe,xe.meshPerAttribute);q.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let oe=0;oe<ye.locationSize;oe++)R(ye.location+oe);r.bindBuffer(r.ARRAY_BUFFER,H);for(let oe=0;oe<ye.locationSize;oe++)k(ye.location+oe,Te/ye.locationSize,Ve,de,Ie*Be,(ce+Te/ye.locationSize*oe)*Be)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<ye.locationSize;xe++)L(ye.location+xe,ne.meshPerAttribute);q.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<ye.locationSize;xe++)R(ye.location+xe);r.bindBuffer(r.ARRAY_BUFFER,H);for(let xe=0;xe<ye.locationSize;xe++)k(ye.location+xe,Te/ye.locationSize,Ve,de,Te*Be,Te/ye.locationSize*xe*Be)}}else if(me!==void 0){const de=me[Pe];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(ye.location,de);break;case 3:r.vertexAttrib3fv(ye.location,de);break;case 4:r.vertexAttrib4fv(ye.location,de);break;default:r.vertexAttrib1fv(ye.location,de)}}}}O()}function b(){ae();for(const q in a){const j=a[q];for(const le in j){const re=j[le];for(const he in re)M(re[he].object),delete re[he];delete j[le]}delete a[q]}}function D(q){if(a[q.id]===void 0)return;const j=a[q.id];for(const le in j){const re=j[le];for(const he in re)M(re[he].object),delete re[he];delete j[le]}delete a[q.id]}function te(q){for(const j in a){const le=a[j];if(le[q.id]===void 0)continue;const re=le[q.id];for(const he in re)M(re[he].object),delete re[he];delete le[q.id]}}function ae(){G(),h=!0,l!==c&&(l=c,m(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ae,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:te,initAttributes:A,enableAttribute:R,disableUnusedAttributes:O}}function dm(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function pm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=d>0,R=o||e.has("OES_texture_float"),L=A&&R,O=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:I,vertexTextures:A,floatFragmentTextures:R,floatVertexTextures:L,maxSamples:O}}function mm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new yi,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const M=u.clippingPlanes,E=u.clipIntersection,v=u.clipShadows,p=r.get(u);if(!i||M===null||M.length===0||s&&!v)s?h(null):l();else{const I=s?0:n,A=I*4;let R=p.clippingState||null;c.value=R,R=h(M,d,A,m);for(let L=0;L!==A;++L)R[L]=t[L];p.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,M){const E=u!==null?u.length:0;let v=null;if(E!==0){if(v=c.value,M!==!0||v===null){const p=m+E*4,I=d.matrixWorldInverse;a.getNormalMatrix(I),(v===null||v.length<p)&&(v=new Float32Array(p));for(let A=0,R=m;A!==E;++A,R+=4)o.copy(u[A]).applyMatrix4(I,a),o.normal.toArray(v,R),v[R+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function gm(r){let e=new WeakMap;function t(o,a){return a===jo?o.mapping=mr:a===qo&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===jo||a===qo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new If(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class va extends rh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,Uc=[.125,.215,.35,.446,.526,.582],Ei=20,Io=new va,Oc=new Ke;let Do=null;const Mi=(1+Math.sqrt(5))/2,rr=1/Mi,Fc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Mi,rr),new z(0,Mi,-rr),new z(rr,0,Mi),new z(-rr,0,Mi),new z(Mi,rr,0),new z(-Mi,rr,0)];class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:$r,format:_n,colorSpace:Nn,depthBuffer:!1},i=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=vm(s,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,i){const a=new en(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oc),h.toneMapping=Yn,h.autoClear=!1;const m=new Ti({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),M=new $t(new Sr,m);let E=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,E=!0):(m.color.copy(Oc),E=!0);for(let p=0;p<6;p++){const I=p%3;I===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):I===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const A=this._cubeSize;As(i,I*A,p>2?A:0,A,A),h.setRenderTarget(i),E&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mr||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;As(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Io)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Fc[(i-1)%Fc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),E=s/M,v=isFinite(s)?1+Math.floor(h*E):Ei;v>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ei}`);const p=[];let I=0;for(let k=0;k<Ei;++k){const X=k/E,b=Math.exp(-X*X/2);p.push(b),k===0?I+=b:k<v&&(I+=2*b)}for(let k=0;k<p.length;k++)p[k]=p[k]/I;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=M,d.mipInt.value=A-n;const R=this._sizeLods[i],L=3*R*(i>A-cr?i-A+cr:0),O=4*(this._cubeSize-R);As(t,L,O,3*R,2*R),c.setRenderTarget(t),c.render(u,Io)}}function _m(r){const e=[],t=[],n=[];let i=r;const s=r-cr+1+Uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-cr?c=Uc[o-r+cr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,M=6,E=3,v=2,p=1,I=new Float32Array(E*M*m),A=new Float32Array(v*M*m),R=new Float32Array(p*M*m);for(let O=0;O<m;O++){const k=O%3*2/3-1,X=O>2?0:-1,b=[k,X,0,k+2/3,X,0,k+2/3,X+1,0,k,X,0,k+2/3,X+1,0,k,X+1,0];I.set(b,E*M*O),A.set(d,v*M*O);const D=[O,O,O,O,O,O];R.set(D,p*M*O)}const L=new fn;L.setAttribute("position",new Gt(I,E)),L.setAttribute("uv",new Gt(A,v)),L.setAttribute("faceIndex",new Gt(R,p)),e.push(L),i>cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(r,e,t){const n=new Ii(r,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function vm(r,e,t){const n=new Float32Array(Ei),i=new z(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Hc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function xm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===jo||c===qo,h=c===mr||c===gr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Bc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Bc(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ym(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mm(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const M in d)e.update(d[M],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const M in m){const E=m[M];for(let v=0,p=E.length;v<p;v++)e.update(E[v],r.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,M=u.attributes.position;let E=0;if(m!==null){const I=m.array;E=m.version;for(let A=0,R=I.length;A<R;A+=3){const L=I[A+0],O=I[A+1],k=I[A+2];d.push(L,O,O,k,k,L)}}else{const I=M.array;E=M.version;for(let A=0,R=I.length/3-1;A<R;A+=3){const L=A+0,O=A+1,k=A+2;d.push(L,O,O,k,k,L)}}const v=new(Kl(d)?nh:th)(d,1);v.version=E;const p=s.get(u);p&&e.remove(p),s.set(u,v)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Em(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function u(d,m,M){if(M===0)return;let E,v;if(i)E=r,v="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[v](s,m,a,d*c,M),t.update(m,s,M)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Sm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tm(r,e){return r[0]-e[0]}function Am(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Mt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const M=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,E=M!==void 0?M.length:0;let v=s.get(h);if(v===void 0||v.count!==E){let j=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",j)};var m=j;v!==void 0&&v.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],k=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let b=0;A===!0&&(b=1),R===!0&&(b=2),L===!0&&(b=3);let D=h.attributes.position.count*b,te=1;D>e.maxTextureSize&&(te=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ae=new Float32Array(D*te*4*E),G=new Ql(ae,D,te,E);G.type=ui,G.needsUpdate=!0;const q=b*4;for(let le=0;le<E;le++){const re=O[le],he=k[le],_e=X[le],me=D*te*4*le;for(let Pe=0;Pe<re.count;Pe++){const ye=Pe*q;A===!0&&(o.fromBufferAttribute(re,Pe),ae[me+ye+0]=o.x,ae[me+ye+1]=o.y,ae[me+ye+2]=o.z,ae[me+ye+3]=0),R===!0&&(o.fromBufferAttribute(he,Pe),ae[me+ye+4]=o.x,ae[me+ye+5]=o.y,ae[me+ye+6]=o.z,ae[me+ye+7]=0),L===!0&&(o.fromBufferAttribute(_e,Pe),ae[me+ye+8]=o.x,ae[me+ye+9]=o.y,ae[me+ye+10]=o.z,ae[me+ye+11]=_e.itemSize===4?o.w:1)}}v={count:E,texture:G,size:new Ee(D,te)},s.set(h,v),h.addEventListener("dispose",j)}let p=0;for(let A=0;A<d.length;A++)p+=d[A];const I=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",I),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const M=d===void 0?0:d.length;let E=n[h.id];if(E===void 0||E.length!==M){E=[];for(let R=0;R<M;R++)E[R]=[R,0];n[h.id]=E}for(let R=0;R<M;R++){const L=E[R];L[0]=R,L[1]=d[R]}E.sort(Am);for(let R=0;R<8;R++)R<M&&E[R][1]?(a[R][0]=E[R][0],a[R][1]=E[R][1]):(a[R][0]=Number.MAX_SAFE_INTEGER,a[R][1]=0);a.sort(Tm);const v=h.morphAttributes.position,p=h.morphAttributes.normal;let I=0;for(let R=0;R<8;R++){const L=a[R],O=L[0],k=L[1];O!==Number.MAX_SAFE_INTEGER&&k?(v&&h.getAttribute("morphTarget"+R)!==v[O]&&h.setAttribute("morphTarget"+R,v[O]),p&&h.getAttribute("morphNormal"+R)!==p[O]&&h.setAttribute("morphNormal"+R,p[O]),i[R]=k,I+=k):(v&&h.hasAttribute("morphTarget"+R)===!0&&h.deleteAttribute("morphTarget"+R),p&&h.hasAttribute("morphNormal"+R)===!0&&h.deleteAttribute("morphNormal"+R),i[R]=0)}const A=h.morphTargetsRelative?1:1-I;u.getUniforms().setValue(r,"morphTargetBaseInfluence",A),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function wm(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ah=new jt,ch=new Ql,lh=new gf,hh=new sh,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),$c=new Float32Array(4);function Tr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Gc[i];if(s===void 0&&(s=new Float32Array(i),Gc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xs(r,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Rm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function Lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function Pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function Im(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;$c.set(n),r.uniformMatrix2fv(this.addr,!1,$c),kt(t,n)}}function Dm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Xc.set(n),r.uniformMatrix3fv(this.addr,!1,Xc),kt(t,n)}}function Nm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Wc.set(n),r.uniformMatrix4fv(this.addr,!1,Wc),kt(t,n)}}function Um(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function Fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function Bm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function km(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function Gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function Vm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ah,i)}function Wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lh,i)}function Xm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hh,i)}function $m(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ch,i)}function jm(r){switch(r){case 5126:return Rm;case 35664:return Cm;case 35665:return Lm;case 35666:return Pm;case 35674:return Im;case 35675:return Dm;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return km;case 36294:return zm;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return $m}}function qm(r,e){r.uniform1fv(this.addr,e)}function Ym(r,e){const t=Tr(e,this.size,2);r.uniform2fv(this.addr,t)}function Km(r,e){const t=Tr(e,this.size,3);r.uniform3fv(this.addr,t)}function Jm(r,e){const t=Tr(e,this.size,4);r.uniform4fv(this.addr,t)}function Zm(r,e){const t=Tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qm(r,e){const t=Tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eg(r,e){const t=Tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tg(r,e){r.uniform1iv(this.addr,e)}function ng(r,e){r.uniform2iv(this.addr,e)}function ig(r,e){r.uniform3iv(this.addr,e)}function rg(r,e){r.uniform4iv(this.addr,e)}function sg(r,e){r.uniform1uiv(this.addr,e)}function og(r,e){r.uniform2uiv(this.addr,e)}function ag(r,e){r.uniform3uiv(this.addr,e)}function cg(r,e){r.uniform4uiv(this.addr,e)}function lg(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ah,s[o])}function hg(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lh,s[o])}function ug(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||hh,s[o])}function fg(r,e,t){const n=this.cache,i=e.length,s=Xs(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ch,s[o])}function dg(r){switch(r){case 5126:return qm;case 35664:return Ym;case 35665:return Km;case 35666:return Jm;case 35674:return Zm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}class pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=jm(t.type)}}class mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dg(t.type)}}class gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function jc(r,e){r.seq.push(e),r.map[e.id]=e}function _g(r,e,t){const n=r.name,i=n.length;for(No.lastIndex=0;;){const s=No.exec(n),o=No.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jc(t,l===void 0?new pg(a,r,e):new mg(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new gg(a),jc(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);_g(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let vg=0;function xg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function yg(r){switch(r){case Nn:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Yc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+xg(r.getShaderSource(e),o)}else return i}function Mg(r,e){const t=yg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Eg(r,e){let t;switch(e){case Eu:t="Linear";break;case Su:t="Reinhard";break;case Tu:t="OptimizedCineon";break;case Au:t="ACESFilmic";break;case bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function Tg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ag(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function kr(r){return r!==""}function Kc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(r){return r.replace(bg,wg)}function wg(r,e){const t=nt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ea(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(r){return r.replace(Rg,Cg)}function Cg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ig(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Dg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function Ng(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ug(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Lg(t),l=Pg(t),h=Ig(t),u=Dg(t),d=Ng(t),m=t.isWebGL2?"":Sg(t),M=Tg(s),E=i.createProgram();let v,p,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[M].filter(kr).join(`
`),v.length>0&&(v+=`
`),p=[m,M].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(v=[Qc(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[m,Qc(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.encodings_pars_fragment,Mg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=ea(o),o=Kc(o,t),o=Jc(o,t),a=ea(a),a=Kc(a,t),a=Jc(a,t),o=Zc(o),a=Zc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=I+v+o,R=I+p+a,L=qc(i,i.VERTEX_SHADER,A),O=qc(i,i.FRAGMENT_SHADER,R);if(i.attachShader(E,L),i.attachShader(E,O),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E),r.debug.checkShaderErrors){const b=i.getProgramInfoLog(E).trim(),D=i.getShaderInfoLog(L).trim(),te=i.getShaderInfoLog(O).trim();let ae=!0,G=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,L,O);else{const q=Yc(i,L,"vertex"),j=Yc(i,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+q+`
`+j)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(D===""||te==="")&&(G=!1);G&&(this.diagnostics={runnable:ae,programLog:b,vertexShader:{log:D,prefix:v},fragmentShader:{log:te,prefix:p}})}i.deleteShader(L),i.deleteShader(O);let k;this.getUniforms=function(){return k===void 0&&(k=new Os(i,E)),k};let X;return this.getAttributes=function(){return X===void 0&&(X=Ag(i,E)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.name=t.shaderName,this.id=vg++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=O,this}let Og=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bg(e),t.set(e,n)),n}}class Bg{constructor(e){this.id=Og++,this.code=e,this.usedTimes=0}}function kg(r,e,t,n,i,s,o){const a=new ma,c=new Fg,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function v(b,D,te,ae,G){const q=ae.fog,j=G.geometry,le=b.isMeshStandardMaterial?ae.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||le),he=re&&re.mapping===Gs?re.image.height:null,_e=M[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pe=me!==void 0?me.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let ne,de,Te,we;if(_e){const it=In[_e];ne=it.vertexShader,de=it.fragmentShader}else ne=b.vertexShader,de=b.fragmentShader,c.update(b),Te=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);const H=r.getRenderTarget(),Ve=G.isInstancedMesh===!0,Be=!!b.map,xe=!!b.matcap,Ie=!!re,ce=!!b.aoMap,oe=!!b.lightMap,pe=!!b.bumpMap,Ce=!!b.normalMap,Ae=!!b.displacementMap,ze=!!b.emissiveMap,Oe=!!b.metalnessMap,De=!!b.roughnessMap,qe=b.clearcoat>0,ht=b.iridescence>0,N=b.sheen>0,C=b.transmission>0,Z=qe&&!!b.clearcoatMap,ge=qe&&!!b.clearcoatNormalMap,ve=qe&&!!b.clearcoatRoughnessMap,S=ht&&!!b.iridescenceMap,_=ht&&!!b.iridescenceThicknessMap,g=N&&!!b.sheenColorMap,T=N&&!!b.sheenRoughnessMap,U=!!b.specularMap,F=!!b.specularColorMap,ie=!!b.specularIntensityMap,Y=C&&!!b.transmissionMap,Q=C&&!!b.thicknessMap,K=!!b.gradientMap,Me=!!b.alphaMap,Le=b.alphaTest>0,B=!!b.extensions,J=!!j.attributes.uv1,ue=!!j.attributes.uv2,Se=!!j.attributes.uv3;return{isWebGL2:h,shaderID:_e,shaderName:b.type,vertexShader:ne,fragmentShader:de,defines:b.defines,customVertexShaderID:Te,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:Ve,instancingColor:Ve&&G.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:H===null?r.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Nn,map:Be,matcap:xe,envMap:Ie,envMapMode:Ie&&re.mapping,envMapCubeUVHeight:he,aoMap:ce,lightMap:oe,bumpMap:pe,normalMap:Ce,displacementMap:d&&Ae,emissiveMap:ze,normalMapObjectSpace:Ce&&b.normalMapType===$u,normalMapTangentSpace:Ce&&b.normalMapType===da,metalnessMap:Oe,roughnessMap:De,clearcoat:qe,clearcoatMap:Z,clearcoatNormalMap:ge,clearcoatRoughnessMap:ve,iridescence:ht,iridescenceMap:S,iridescenceThicknessMap:_,sheen:N,sheenColorMap:g,sheenRoughnessMap:T,specularMap:U,specularColorMap:F,specularIntensityMap:ie,transmission:C,transmissionMap:Y,thicknessMap:Q,gradientMap:K,opaque:b.transparent===!1&&b.blending===hr,alphaMap:Me,alphaTest:Le,combine:b.combine,mapUv:Be&&E(b.map.channel),aoMapUv:ce&&E(b.aoMap.channel),lightMapUv:oe&&E(b.lightMap.channel),bumpMapUv:pe&&E(b.bumpMap.channel),normalMapUv:Ce&&E(b.normalMap.channel),displacementMapUv:Ae&&E(b.displacementMap.channel),emissiveMapUv:ze&&E(b.emissiveMap.channel),metalnessMapUv:Oe&&E(b.metalnessMap.channel),roughnessMapUv:De&&E(b.roughnessMap.channel),clearcoatMapUv:Z&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:S&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:_&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:g&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:T&&E(b.sheenRoughnessMap.channel),specularMapUv:U&&E(b.specularMap.channel),specularColorMapUv:F&&E(b.specularColorMap.channel),specularIntensityMapUv:ie&&E(b.specularIntensityMap.channel),transmissionMapUv:Y&&E(b.transmissionMap.channel),thicknessMapUv:Q&&E(b.thicknessMap.channel),alphaMapUv:Me&&E(b.alphaMap.channel),vertexTangents:Ce&&!!j.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:ue,vertexUv3s:Se,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(Be||Me),fog:!!q,useFog:b.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&te.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Yn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:B&&b.extensions.derivatives===!0,extensionFragDepth:B&&b.extensions.fragDepth===!0,extensionDrawBuffers:B&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const te in b.defines)D.push(te),D.push(b.defines[te]);return b.isRawShaderMaterial===!1&&(I(D,b),A(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function I(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function A(b,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),b.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),b.push(a.mask)}function R(b){const D=M[b.type];let te;if(D){const ae=In[D];te=Rf.clone(ae.uniforms)}else te=b.uniforms;return te}function L(b,D){let te;for(let ae=0,G=l.length;ae<G;ae++){const q=l[ae];if(q.cacheKey===D){te=q,++te.usedTimes;break}}return te===void 0&&(te=new Ug(r,D,b,s),l.push(te)),te}function O(b){if(--b.usedTimes===0){const D=l.indexOf(b);l[D]=l[l.length-1],l.pop(),b.destroy()}}function k(b){c.remove(b)}function X(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:R,acquireProgram:L,releaseProgram:O,releaseShaderCache:k,programs:l,dispose:X}}function zg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function el(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,M,E,v){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:M,renderOrder:u.renderOrder,z:E,group:v},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=M,p.renderOrder=u.renderOrder,p.z=E,p.group=v),e++,p}function a(u,d,m,M,E,v){const p=o(u,d,m,M,E,v);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function c(u,d,m,M,E,v){const p=o(u,d,m,M,E,v);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Hg),n.length>1&&n.sort(d||el),i.length>1&&i.sort(d||el)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Gg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new tl,r.set(n,[o])):i>=s.length?(o=new tl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Vg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function Wg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Xg=0;function $g(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jg(r,e){const t=new Vg,n=Wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new z);const s=new z,o=new ot,a=new ot;function c(h,u){let d=0,m=0,M=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let E=0,v=0,p=0,I=0,A=0,R=0,L=0,O=0,k=0,X=0;h.sort($g);const b=u===!0?Math.PI:1;for(let te=0,ae=h.length;te<ae;te++){const G=h[te],q=G.color,j=G.intensity,le=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=q.r*j*b,m+=q.g*j*b,M+=q.b*j*b;else if(G.isLightProbe)for(let he=0;he<9;he++)i.probe[he].addScaledVector(G.sh.coefficients[he],j);else if(G.isDirectionalLight){const he=t.get(G);if(he.color.copy(G.color).multiplyScalar(G.intensity*b),G.castShadow){const _e=G.shadow,me=n.get(G);me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,i.directionalShadow[E]=me,i.directionalShadowMap[E]=re,i.directionalShadowMatrix[E]=G.shadow.matrix,R++}i.directional[E]=he,E++}else if(G.isSpotLight){const he=t.get(G);he.position.setFromMatrixPosition(G.matrixWorld),he.color.copy(q).multiplyScalar(j*b),he.distance=le,he.coneCos=Math.cos(G.angle),he.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),he.decay=G.decay,i.spot[p]=he;const _e=G.shadow;if(G.map&&(i.spotLightMap[k]=G.map,k++,_e.updateMatrices(G),G.castShadow&&X++),i.spotLightMatrix[p]=_e.matrix,G.castShadow){const me=n.get(G);me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,i.spotShadow[p]=me,i.spotShadowMap[p]=re,O++}p++}else if(G.isRectAreaLight){const he=t.get(G);he.color.copy(q).multiplyScalar(j),he.halfWidth.set(G.width*.5,0,0),he.halfHeight.set(0,G.height*.5,0),i.rectArea[I]=he,I++}else if(G.isPointLight){const he=t.get(G);if(he.color.copy(G.color).multiplyScalar(G.intensity*b),he.distance=G.distance,he.decay=G.decay,G.castShadow){const _e=G.shadow,me=n.get(G);me.shadowBias=_e.bias,me.shadowNormalBias=_e.normalBias,me.shadowRadius=_e.radius,me.shadowMapSize=_e.mapSize,me.shadowCameraNear=_e.camera.near,me.shadowCameraFar=_e.camera.far,i.pointShadow[v]=me,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=G.shadow.matrix,L++}i.point[v]=he,v++}else if(G.isHemisphereLight){const he=t.get(G);he.skyColor.copy(G.color).multiplyScalar(j*b),he.groundColor.copy(G.groundColor).multiplyScalar(j*b),i.hemi[A]=he,A++}}I>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=M;const D=i.hash;(D.directionalLength!==E||D.pointLength!==v||D.spotLength!==p||D.rectAreaLength!==I||D.hemiLength!==A||D.numDirectionalShadows!==R||D.numPointShadows!==L||D.numSpotShadows!==O||D.numSpotMaps!==k)&&(i.directional.length=E,i.spot.length=p,i.rectArea.length=I,i.point.length=v,i.hemi.length=A,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=O+k-X,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=X,D.directionalLength=E,D.pointLength=v,D.spotLength=p,D.rectAreaLength=I,D.hemiLength=A,D.numDirectionalShadows=R,D.numPointShadows=L,D.numSpotShadows=O,D.numSpotMaps=k,i.version=Xg++)}function l(h,u){let d=0,m=0,M=0,E=0,v=0;const p=u.matrixWorldInverse;for(let I=0,A=h.length;I<A;I++){const R=h[I];if(R.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),d++}else if(R.isSpotLight){const L=i.spot[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),M++}else if(R.isRectAreaLight){const L=i.rectArea[E];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(R.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),E++}else if(R.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(p),m++}else if(R.isHemisphereLight){const L=i.hemi[v];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(p),v++}}}return{setup:c,setupView:l,state:i}}function nl(r,e){const t=new jg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new nl(r,e),t.set(s,[c])):o>=a.length?(c=new nl(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Yg extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function Qg(r,e,t){let n=new ga;const i=new Ee,s=new Ee,o=new Mt,a=new Yg({depthPacking:Xu}),c=new Kg,l={},h=t.maxTextureSize,u={[Kn]:on,[on]:Kn,[Dn]:Dn},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Jg,fragmentShader:Zg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const M=new fn;M.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new $t(M,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(L,O,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||L.length===0)return;const X=r.getRenderTarget(),b=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),te=r.state;te.setBlending(fi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ae=p!==jn&&this.type===jn,G=p===jn&&this.type!==jn;for(let q=0,j=L.length;q<j;q++){const le=L[q],re=le.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;i.copy(re.mapSize);const he=re.getFrameExtents();if(i.multiply(he),s.copy(re.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/he.x),i.x=s.x*he.x,re.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/he.y),i.y=s.y*he.y,re.mapSize.y=s.y)),re.map===null||ae===!0||G===!0){const me=this.type!==jn?{minFilter:Ht,magFilter:Ht}:{};re.map!==null&&re.map.dispose(),re.map=new Ii(i.x,i.y,me),re.map.texture.name=le.name+".shadowMap",re.camera.updateProjectionMatrix()}r.setRenderTarget(re.map),r.clear();const _e=re.getViewportCount();for(let me=0;me<_e;me++){const Pe=re.getViewport(me);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),te.viewport(o),re.updateMatrices(le,me),n=re.getFrustum(),R(O,k,re.camera,le,this.type)}re.isPointLightShadow!==!0&&this.type===jn&&I(re,k),re.needsUpdate=!1}p=this.type,v.needsUpdate=!1,r.setRenderTarget(X,b,D)};function I(L,O){const k=e.update(E);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ii(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,k,d,E,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,k,m,E,null)}function A(L,O,k,X){let b=null;const D=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)b=D;else if(b=k.isPointLight===!0?c:a,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=b.uuid,ae=O.uuid;let G=l[te];G===void 0&&(G={},l[te]=G);let q=G[ae];q===void 0&&(q=b.clone(),G[ae]=q),b=q}if(b.visible=O.visible,b.wireframe=O.wireframe,X===jn?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:u[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const te=r.properties.get(b);te.light=k}return b}function R(L,O,k,X,b){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===jn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const ae=e.update(L),G=L.material;if(Array.isArray(G)){const q=ae.groups;for(let j=0,le=q.length;j<le;j++){const re=q[j],he=G[re.materialIndex];if(he&&he.visible){const _e=A(L,he,X,b);r.renderBufferDirect(k,null,ae,_e,L,re)}}}else if(G.visible){const q=A(L,G,X,b);r.renderBufferDirect(k,null,ae,q,L,null)}}const te=L.children;for(let ae=0,G=te.length;ae<G;ae++)R(te[ae],O,k,X,b)}}function e_(r,e,t){const n=t.isWebGL2;function i(){let B=!1;const J=new Mt;let ue=null;const Se=new Mt(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!B&&(r.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){B=Ne},setClear:function(Ne,it,_t,wt,an){an===!0&&(Ne*=wt,it*=wt,_t*=wt),J.set(Ne,it,_t,wt),Se.equals(J)===!1&&(r.clearColor(Ne,it,_t,wt),Se.copy(J))},reset:function(){B=!1,ue=null,Se.set(-1,0,0,0)}}}function s(){let B=!1,J=null,ue=null,Se=null;return{setTest:function(Ne){Ne?H(r.DEPTH_TEST):Ve(r.DEPTH_TEST)},setMask:function(Ne){J!==Ne&&!B&&(r.depthMask(Ne),J=Ne)},setFunc:function(Ne){if(ue!==Ne){switch(Ne){case du:r.depthFunc(r.NEVER);break;case pu:r.depthFunc(r.ALWAYS);break;case mu:r.depthFunc(r.LESS);break;case $o:r.depthFunc(r.LEQUAL);break;case gu:r.depthFunc(r.EQUAL);break;case _u:r.depthFunc(r.GEQUAL);break;case vu:r.depthFunc(r.GREATER);break;case xu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Ne}},setLocked:function(Ne){B=Ne},setClear:function(Ne){Se!==Ne&&(r.clearDepth(Ne),Se=Ne)},reset:function(){B=!1,J=null,ue=null,Se=null}}}function o(){let B=!1,J=null,ue=null,Se=null,Ne=null,it=null,_t=null,wt=null,an=null;return{setTest:function(Et){B||(Et?H(r.STENCIL_TEST):Ve(r.STENCIL_TEST))},setMask:function(Et){J!==Et&&!B&&(r.stencilMask(Et),J=Et)},setFunc:function(Et,tn,Jt){(ue!==Et||Se!==tn||Ne!==Jt)&&(r.stencilFunc(Et,tn,Jt),ue=Et,Se=tn,Ne=Jt)},setOp:function(Et,tn,Jt){(it!==Et||_t!==tn||wt!==Jt)&&(r.stencilOp(Et,tn,Jt),it=Et,_t=tn,wt=Jt)},setLocked:function(Et){B=Et},setClear:function(Et){an!==Et&&(r.clearStencil(Et),an=Et)},reset:function(){B=!1,J=null,ue=null,Se=null,Ne=null,it=null,_t=null,wt=null,an=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},M=new WeakMap,E=[],v=null,p=!1,I=null,A=null,R=null,L=null,O=null,k=null,X=null,b=!1,D=null,te=null,ae=null,G=null,q=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,re=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(he)[1]),le=re>=1):he.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),le=re>=2);let _e=null,me={};const Pe=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),ne=new Mt().fromArray(Pe),de=new Mt().fromArray(ye);function Te(B,J,ue,Se){const Ne=new Uint8Array(4),it=r.createTexture();r.bindTexture(B,it),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let _t=0;_t<ue;_t++)n&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(J,0,r.RGBA,1,1,Se,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(J+_t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return it}const we={};we[r.TEXTURE_2D]=Te(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=Te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[r.TEXTURE_2D_ARRAY]=Te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=Te(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),H(r.DEPTH_TEST),c.setFunc($o),Ae(!1),ze(ka),H(r.CULL_FACE),pe(fi);function H(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function Ve(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function Be(B,J){return m[B]!==J?(r.bindFramebuffer(B,J),m[B]=J,n&&(B===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=J),B===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=J)),!0):!1}function xe(B,J){let ue=E,Se=!1;if(B)if(ue=M.get(J),ue===void 0&&(ue=[],M.set(J,ue)),B.isWebGLMultipleRenderTargets){const Ne=B.texture;if(ue.length!==Ne.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let it=0,_t=Ne.length;it<_t;it++)ue[it]=r.COLOR_ATTACHMENT0+it;ue.length=Ne.length,Se=!0}}else ue[0]!==r.COLOR_ATTACHMENT0&&(ue[0]=r.COLOR_ATTACHMENT0,Se=!0);else ue[0]!==r.BACK&&(ue[0]=r.BACK,Se=!0);Se&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ie(B){return v!==B?(r.useProgram(B),v=B,!0):!1}const ce={[ar]:r.FUNC_ADD,[nu]:r.FUNC_SUBTRACT,[iu]:r.FUNC_REVERSE_SUBTRACT};if(n)ce[Va]=r.MIN,ce[Wa]=r.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(ce[Va]=B.MIN_EXT,ce[Wa]=B.MAX_EXT)}const oe={[ru]:r.ZERO,[su]:r.ONE,[ou]:r.SRC_COLOR,[zl]:r.SRC_ALPHA,[fu]:r.SRC_ALPHA_SATURATE,[hu]:r.DST_COLOR,[cu]:r.DST_ALPHA,[au]:r.ONE_MINUS_SRC_COLOR,[Hl]:r.ONE_MINUS_SRC_ALPHA,[uu]:r.ONE_MINUS_DST_COLOR,[lu]:r.ONE_MINUS_DST_ALPHA};function pe(B,J,ue,Se,Ne,it,_t,wt){if(B===fi){p===!0&&(Ve(r.BLEND),p=!1);return}if(p===!1&&(H(r.BLEND),p=!0),B!==tu){if(B!==I||wt!==b){if((A!==ar||O!==ar)&&(r.blendEquation(r.FUNC_ADD),A=ar,O=ar),wt)switch(B){case hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case za:r.blendFunc(r.ONE,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ga:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case za:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ha:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ga:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,L=null,k=null,X=null,I=B,b=wt}return}Ne=Ne||J,it=it||ue,_t=_t||Se,(J!==A||Ne!==O)&&(r.blendEquationSeparate(ce[J],ce[Ne]),A=J,O=Ne),(ue!==R||Se!==L||it!==k||_t!==X)&&(r.blendFuncSeparate(oe[ue],oe[Se],oe[it],oe[_t]),R=ue,L=Se,k=it,X=_t),I=B,b=!1}function Ce(B,J){B.side===Dn?Ve(r.CULL_FACE):H(r.CULL_FACE);let ue=B.side===on;J&&(ue=!ue),Ae(ue),B.blending===hr&&B.transparent===!1?pe(fi):pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);const Se=B.stencilWrite;l.setTest(Se),Se&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),De(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?H(r.SAMPLE_ALPHA_TO_COVERAGE):Ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(B){D!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),D=B)}function ze(B){B!==Zh?(H(r.CULL_FACE),B!==te&&(B===ka?r.cullFace(r.BACK):B===Qh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ve(r.CULL_FACE),te=B}function Oe(B){B!==ae&&(le&&r.lineWidth(B),ae=B)}function De(B,J,ue){B?(H(r.POLYGON_OFFSET_FILL),(G!==J||q!==ue)&&(r.polygonOffset(J,ue),G=J,q=ue)):Ve(r.POLYGON_OFFSET_FILL)}function qe(B){B?H(r.SCISSOR_TEST):Ve(r.SCISSOR_TEST)}function ht(B){B===void 0&&(B=r.TEXTURE0+j-1),_e!==B&&(r.activeTexture(B),_e=B)}function N(B,J,ue){ue===void 0&&(_e===null?ue=r.TEXTURE0+j-1:ue=_e);let Se=me[ue];Se===void 0&&(Se={type:void 0,texture:void 0},me[ue]=Se),(Se.type!==B||Se.texture!==J)&&(_e!==ue&&(r.activeTexture(ue),_e=ue),r.bindTexture(B,J||we[B]),Se.type=B,Se.texture=J)}function C(){const B=me[_e];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function S(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function g(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function T(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(B){ne.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function Q(B){de.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function K(B,J){let ue=u.get(J);ue===void 0&&(ue=new WeakMap,u.set(J,ue));let Se=ue.get(B);Se===void 0&&(Se=r.getUniformBlockIndex(J,B.name),ue.set(B,Se))}function Me(B,J){const Se=u.get(J).get(B);h.get(J)!==Se&&(r.uniformBlockBinding(J,Se,B.__bindingPointIndex),h.set(J,Se))}function Le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},_e=null,me={},m={},M=new WeakMap,E=[],v=null,p=!1,I=null,A=null,R=null,L=null,O=null,k=null,X=null,b=!1,D=null,te=null,ae=null,G=null,q=null,ne.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:H,disable:Ve,bindFramebuffer:Be,drawBuffers:xe,useProgram:Ie,setBlending:pe,setMaterial:Ce,setFlipSided:Ae,setCullFace:ze,setLineWidth:Oe,setPolygonOffset:De,setScissorTest:qe,activeTexture:ht,bindTexture:N,unbindTexture:C,compressedTexImage2D:Z,compressedTexImage3D:ge,texImage2D:F,texImage3D:ie,updateUBOMapping:K,uniformBlockBinding:Me,texStorage2D:T,texStorage3D:U,texSubImage2D:ve,texSubImage3D:S,compressedTexSubImage2D:_,compressedTexSubImage3D:g,scissor:Y,viewport:Q,reset:Le}}function t_(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let E;const v=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(N,C){return p?new OffscreenCanvas(N,C):qr("canvas")}function A(N,C,Z,ge){let ve=1;if((N.width>ge||N.height>ge)&&(ve=ge/Math.max(N.width,N.height)),ve<1||C===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const S=C?Yl:Math.floor,_=S(ve*N.width),g=S(ve*N.height);E===void 0&&(E=I(_,g));const T=Z?I(_,g):E;return T.width=_,T.height=g,T.getContext("2d").drawImage(N,0,0,_,g),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+_+"x"+g+")."),T}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function R(N){return Qo(N.width)&&Qo(N.height)}function L(N){return a?!1:N.wrapS!==gn||N.wrapT!==gn||N.minFilter!==Ht&&N.minFilter!==sn}function O(N,C){return N.generateMipmaps&&C&&N.minFilter!==Ht&&N.minFilter!==sn}function k(N){r.generateMipmap(N)}function X(N,C,Z,ge,ve=!1){if(a===!1)return C;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let S=C;return C===r.RED&&(Z===r.FLOAT&&(S=r.R32F),Z===r.HALF_FLOAT&&(S=r.R16F),Z===r.UNSIGNED_BYTE&&(S=r.R8)),C===r.RG&&(Z===r.FLOAT&&(S=r.RG32F),Z===r.HALF_FLOAT&&(S=r.RG16F),Z===r.UNSIGNED_BYTE&&(S=r.RG8)),C===r.RGBA&&(Z===r.FLOAT&&(S=r.RGBA32F),Z===r.HALF_FLOAT&&(S=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(S=ge===je&&ve===!1?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(S=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(S=r.RGB5_A1)),(S===r.R16F||S===r.R32F||S===r.RG16F||S===r.RG32F||S===r.RGBA16F||S===r.RGBA32F)&&e.get("EXT_color_buffer_float"),S}function b(N,C,Z){return O(N,Z)===!0||N.isFramebufferTexture&&N.minFilter!==Ht&&N.minFilter!==sn?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function D(N){return N===Ht||N===Yo||N===Us?r.NEAREST:r.LINEAR}function te(N){const C=N.target;C.removeEventListener("dispose",te),G(C),C.isVideoTexture&&M.delete(C)}function ae(N){const C=N.target;C.removeEventListener("dispose",ae),j(C)}function G(N){const C=n.get(N);if(C.__webglInit===void 0)return;const Z=N.source,ge=v.get(Z);if(ge){const ve=ge[C.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&q(N),Object.keys(ge).length===0&&v.delete(Z)}n.remove(N)}function q(N){const C=n.get(N);r.deleteTexture(C.__webglTexture);const Z=N.source,ge=v.get(Z);delete ge[C.__cacheKey],o.memory.textures--}function j(N){const C=N.texture,Z=n.get(N),ge=n.get(C);if(ge.__webglTexture!==void 0&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++)r.deleteFramebuffer(Z.__webglFramebuffer[ve]),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer[ve]);else{if(r.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ve=0;ve<Z.__webglColorRenderbuffer.length;ve++)Z.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(Z.__webglColorRenderbuffer[ve]);Z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ve=0,S=C.length;ve<S;ve++){const _=n.get(C[ve]);_.__webglTexture&&(r.deleteTexture(_.__webglTexture),o.memory.textures--),n.remove(C[ve])}n.remove(C),n.remove(N)}let le=0;function re(){le=0}function he(){const N=le;return N>=c&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+c),le+=1,N}function _e(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function me(N,C){const Z=n.get(N);if(N.isVideoTexture&&qe(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(Z,N,C);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+C)}function Pe(N,C){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Ve(Z,N,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+C)}function ye(N,C){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Ve(Z,N,C);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+C)}function ne(N,C){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Be(Z,N,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+C)}const de={[_r]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[Bs]:r.MIRRORED_REPEAT},Te={[Ht]:r.NEAREST,[Yo]:r.NEAREST_MIPMAP_NEAREST,[Us]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[Vl]:r.LINEAR_MIPMAP_NEAREST,[Li]:r.LINEAR_MIPMAP_LINEAR};function we(N,C,Z){if(Z?(r.texParameteri(N,r.TEXTURE_WRAP_S,de[C.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,de[C.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,de[C.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Te[C.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Te[C.minFilter])):(r.texParameteri(N,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(N,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==gn||C.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,r.TEXTURE_MAG_FILTER,D(C.magFilter)),r.texParameteri(N,r.TEXTURE_MIN_FILTER,D(C.minFilter)),C.minFilter!==Ht&&C.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Ht||C.minFilter!==Us&&C.minFilter!==Li||C.type===ui&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===$r&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(r.texParameterf(N,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function H(N,C){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",te));const ge=C.source;let ve=v.get(ge);ve===void 0&&(ve={},v.set(ge,ve));const S=_e(C);if(S!==N.__cacheKey){ve[S]===void 0&&(ve[S]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ve[S].usedTimes++;const _=ve[N.__cacheKey];_!==void 0&&(ve[N.__cacheKey].usedTimes--,_.usedTimes===0&&q(C)),N.__cacheKey=S,N.__webglTexture=ve[S].texture}return Z}function Ve(N,C,Z){let ge=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ge=r.TEXTURE_3D);const ve=H(N,C),S=C.source;t.bindTexture(ge,N.__webglTexture,r.TEXTURE0+Z);const _=n.get(S);if(S.version!==_.__version||ve===!0){t.activeTexture(r.TEXTURE0+Z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const g=L(C)&&R(C.image)===!1;let T=A(C.image,g,!1,h);T=ht(C,T);const U=R(T)||a,F=s.convert(C.format,C.colorSpace);let ie=s.convert(C.type),Y=X(C.internalFormat,F,ie,C.colorSpace);we(ge,C,U);let Q;const K=C.mipmaps,Me=a&&C.isVideoTexture!==!0,Le=_.__version===void 0||ve===!0,B=b(C,T,U);if(C.isDepthTexture)Y=r.DEPTH_COMPONENT,a?C.type===ui?Y=r.DEPTH_COMPONENT32F:C.type===Si?Y=r.DEPTH_COMPONENT24:C.type===ur?Y=r.DEPTH24_STENCIL8:Y=r.DEPTH_COMPONENT16:C.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===bi&&Y===r.DEPTH_COMPONENT&&C.type!==Wl&&C.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Si,ie=s.convert(C.type)),C.format===vr&&Y===r.DEPTH_COMPONENT&&(Y=r.DEPTH_STENCIL,C.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=ur,ie=s.convert(C.type))),Le&&(Me?t.texStorage2D(r.TEXTURE_2D,1,Y,T.width,T.height):t.texImage2D(r.TEXTURE_2D,0,Y,T.width,T.height,0,F,ie,null));else if(C.isDataTexture)if(K.length>0&&U){Me&&Le&&t.texStorage2D(r.TEXTURE_2D,B,Y,K[0].width,K[0].height);for(let J=0,ue=K.length;J<ue;J++)Q=K[J],Me?t.texSubImage2D(r.TEXTURE_2D,J,0,0,Q.width,Q.height,F,ie,Q.data):t.texImage2D(r.TEXTURE_2D,J,Y,Q.width,Q.height,0,F,ie,Q.data);C.generateMipmaps=!1}else Me?(Le&&t.texStorage2D(r.TEXTURE_2D,B,Y,T.width,T.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,F,ie,T.data)):t.texImage2D(r.TEXTURE_2D,0,Y,T.width,T.height,0,F,ie,T.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Me&&Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,Y,K[0].width,K[0].height,T.depth);for(let J=0,ue=K.length;J<ue;J++)Q=K[J],C.format!==_n?F!==null?Me?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Q.width,Q.height,T.depth,F,Q.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,J,Y,Q.width,Q.height,T.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage3D(r.TEXTURE_2D_ARRAY,J,0,0,0,Q.width,Q.height,T.depth,F,ie,Q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,J,Y,Q.width,Q.height,T.depth,0,F,ie,Q.data)}else{Me&&Le&&t.texStorage2D(r.TEXTURE_2D,B,Y,K[0].width,K[0].height);for(let J=0,ue=K.length;J<ue;J++)Q=K[J],C.format!==_n?F!==null?Me?t.compressedTexSubImage2D(r.TEXTURE_2D,J,0,0,Q.width,Q.height,F,Q.data):t.compressedTexImage2D(r.TEXTURE_2D,J,Y,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(r.TEXTURE_2D,J,0,0,Q.width,Q.height,F,ie,Q.data):t.texImage2D(r.TEXTURE_2D,J,Y,Q.width,Q.height,0,F,ie,Q.data)}else if(C.isDataArrayTexture)Me?(Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,B,Y,T.width,T.height,T.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,F,ie,T.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Y,T.width,T.height,T.depth,0,F,ie,T.data);else if(C.isData3DTexture)Me?(Le&&t.texStorage3D(r.TEXTURE_3D,B,Y,T.width,T.height,T.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,F,ie,T.data)):t.texImage3D(r.TEXTURE_3D,0,Y,T.width,T.height,T.depth,0,F,ie,T.data);else if(C.isFramebufferTexture){if(Le)if(Me)t.texStorage2D(r.TEXTURE_2D,B,Y,T.width,T.height);else{let J=T.width,ue=T.height;for(let Se=0;Se<B;Se++)t.texImage2D(r.TEXTURE_2D,Se,Y,J,ue,0,F,ie,null),J>>=1,ue>>=1}}else if(K.length>0&&U){Me&&Le&&t.texStorage2D(r.TEXTURE_2D,B,Y,K[0].width,K[0].height);for(let J=0,ue=K.length;J<ue;J++)Q=K[J],Me?t.texSubImage2D(r.TEXTURE_2D,J,0,0,F,ie,Q):t.texImage2D(r.TEXTURE_2D,J,Y,F,ie,Q);C.generateMipmaps=!1}else Me?(Le&&t.texStorage2D(r.TEXTURE_2D,B,Y,T.width,T.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,F,ie,T)):t.texImage2D(r.TEXTURE_2D,0,Y,F,ie,T);O(C,U)&&k(ge),_.__version=S.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Be(N,C,Z){if(C.image.length!==6)return;const ge=H(N,C),ve=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Z);const S=n.get(ve);if(ve.version!==S.__version||ge===!0){t.activeTexture(r.TEXTURE0+Z),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const _=C.isCompressedTexture||C.image[0].isCompressedTexture,g=C.image[0]&&C.image[0].isDataTexture,T=[];for(let J=0;J<6;J++)!_&&!g?T[J]=A(C.image[J],!1,!0,l):T[J]=g?C.image[J].image:C.image[J],T[J]=ht(C,T[J]);const U=T[0],F=R(U)||a,ie=s.convert(C.format,C.colorSpace),Y=s.convert(C.type),Q=X(C.internalFormat,ie,Y,C.colorSpace),K=a&&C.isVideoTexture!==!0,Me=S.__version===void 0||ge===!0;let Le=b(C,U,F);we(r.TEXTURE_CUBE_MAP,C,F);let B;if(_){K&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Q,U.width,U.height);for(let J=0;J<6;J++){B=T[J].mipmaps;for(let ue=0;ue<B.length;ue++){const Se=B[ue];C.format!==_n?ie!==null?K?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Se.width,Se.height,ie,Se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Q,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Se.width,Se.height,ie,Y,Se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Q,Se.width,Se.height,0,ie,Y,Se.data)}}}else{B=C.mipmaps,K&&Me&&(B.length>0&&Le++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Q,T[0].width,T[0].height));for(let J=0;J<6;J++)if(g){K?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,T[J].width,T[J].height,ie,Y,T[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Q,T[J].width,T[J].height,0,ie,Y,T[J].data);for(let ue=0;ue<B.length;ue++){const Ne=B[ue].image[J].image;K?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Ne.width,Ne.height,ie,Y,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Q,Ne.width,Ne.height,0,ie,Y,Ne.data)}}else{K?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ie,Y,T[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Q,ie,Y,T[J]);for(let ue=0;ue<B.length;ue++){const Se=B[ue];K?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,ie,Y,Se.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Q,ie,Y,Se.image[J])}}}O(C,F)&&k(r.TEXTURE_CUBE_MAP),S.__version=ve.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function xe(N,C,Z,ge,ve){const S=s.convert(Z.format,Z.colorSpace),_=s.convert(Z.type),g=X(Z.internalFormat,S,_,Z.colorSpace);n.get(C).__hasExternalTextures||(ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,g,C.width,C.height,C.depth,0,S,_,null):t.texImage2D(ve,0,g,C.width,C.height,0,S,_,null)),t.bindFramebuffer(r.FRAMEBUFFER,N),De(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,ve,n.get(Z).__webglTexture,0,Oe(C)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,ve,n.get(Z).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(N,C,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),C.depthBuffer&&!C.stencilBuffer){let ge=r.DEPTH_COMPONENT16;if(Z||De(C)){const ve=C.depthTexture;ve&&ve.isDepthTexture&&(ve.type===ui?ge=r.DEPTH_COMPONENT32F:ve.type===Si&&(ge=r.DEPTH_COMPONENT24));const S=Oe(C);De(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,S,ge,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,S,ge,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,ge,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,N)}else if(C.depthBuffer&&C.stencilBuffer){const ge=Oe(C);Z&&De(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,r.DEPTH24_STENCIL8,C.width,C.height):De(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,N)}else{const ge=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ve=0;ve<ge.length;ve++){const S=ge[ve],_=s.convert(S.format,S.colorSpace),g=s.convert(S.type),T=X(S.internalFormat,_,g,S.colorSpace),U=Oe(C);Z&&De(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,U,T,C.width,C.height):De(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U,T,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,T,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),me(C.depthTexture,0);const ge=n.get(C.depthTexture).__webglTexture,ve=Oe(C);if(C.depthTexture.format===bi)De(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(C.depthTexture.format===vr)De(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function oe(N){const C=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ce(C.__webglFramebuffer,N)}else if(Z){C.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ge]),C.__webglDepthbuffer[ge]=r.createRenderbuffer(),Ie(C.__webglDepthbuffer[ge],N,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),Ie(C.__webglDepthbuffer,N,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(N,C,Z){const ge=n.get(N);C!==void 0&&xe(ge.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Z!==void 0&&oe(N)}function Ce(N){const C=N.texture,Z=n.get(N),ge=n.get(C);N.addEventListener("dispose",ae),N.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=C.version,o.memory.textures++);const ve=N.isWebGLCubeRenderTarget===!0,S=N.isWebGLMultipleRenderTargets===!0,_=R(N)||a;if(ve){Z.__webglFramebuffer=[];for(let g=0;g<6;g++)Z.__webglFramebuffer[g]=r.createFramebuffer()}else{if(Z.__webglFramebuffer=r.createFramebuffer(),S)if(i.drawBuffers){const g=N.texture;for(let T=0,U=g.length;T<U;T++){const F=n.get(g[T]);F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&De(N)===!1){const g=S?C:[C];Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let T=0;T<g.length;T++){const U=g[T];Z.__webglColorRenderbuffer[T]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[T]);const F=s.convert(U.format,U.colorSpace),ie=s.convert(U.type),Y=X(U.internalFormat,F,ie,U.colorSpace,N.isXRRenderTarget===!0),Q=Oe(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,Y,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+T,r.RENDERBUFFER,Z.__webglColorRenderbuffer[T])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),we(r.TEXTURE_CUBE_MAP,C,_);for(let g=0;g<6;g++)xe(Z.__webglFramebuffer[g],N,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+g);O(C,_)&&k(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){const g=N.texture;for(let T=0,U=g.length;T<U;T++){const F=g[T],ie=n.get(F);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),we(r.TEXTURE_2D,F,_),xe(Z.__webglFramebuffer,N,F,r.COLOR_ATTACHMENT0+T,r.TEXTURE_2D),O(F,_)&&k(r.TEXTURE_2D)}t.unbindTexture()}else{let g=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?g=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(g,ge.__webglTexture),we(g,C,_),xe(Z.__webglFramebuffer,N,C,r.COLOR_ATTACHMENT0,g),O(C,_)&&k(g),t.unbindTexture()}N.depthBuffer&&oe(N)}function Ae(N){const C=R(N)||a,Z=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ge=0,ve=Z.length;ge<ve;ge++){const S=Z[ge];if(O(S,C)){const _=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,g=n.get(S).__webglTexture;t.bindTexture(_,g),k(_),t.unbindTexture()}}}function ze(N){if(a&&N.samples>0&&De(N)===!1){const C=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],Z=N.width,ge=N.height;let ve=r.COLOR_BUFFER_BIT;const S=[],_=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,g=n.get(N),T=N.isWebGLMultipleRenderTargets===!0;if(T)for(let U=0;U<C.length;U++)t.bindFramebuffer(r.FRAMEBUFFER,g.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,g.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let U=0;U<C.length;U++){S.push(r.COLOR_ATTACHMENT0+U),N.depthBuffer&&S.push(_);const F=g.__ignoreDepthValues!==void 0?g.__ignoreDepthValues:!1;if(F===!1&&(N.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),T&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,g.__webglColorRenderbuffer[U]),F===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])),T){const ie=n.get(C[U]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,ve,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,S)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),T)for(let U=0;U<C.length;U++){t.bindFramebuffer(r.FRAMEBUFFER,g.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,g.__webglColorRenderbuffer[U]);const F=n.get(C[U]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.TEXTURE_2D,F,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,g.__webglMultisampledFramebuffer)}}function Oe(N){return Math.min(u,N.samples)}function De(N){const C=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function qe(N){const C=o.render.frame;M.get(N)!==C&&(M.set(N,C),N.update())}function ht(N,C){const Z=N.colorSpace,ge=N.format,ve=N.type;return N.isCompressedTexture===!0||N.format===Zo||Z!==Nn&&Z!==Ri&&(Z===je?a===!1?e.has("EXT_sRGB")===!0&&ge===_n?(N.format=Zo,N.minFilter=sn,N.generateMipmaps=!1):C=Jl.sRGBToLinear(C):(ge!==_n||ve!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}this.allocateTextureUnit=he,this.resetTextureUnits=re,this.setTexture2D=me,this.setTexture2DArray=Pe,this.setTexture3D=ye,this.setTextureCube=ne,this.rebindTextures=pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=De}function n_(r,e,t){const n=t.isWebGL2;function i(s,o=Ri){let a;if(s===Pi)return r.UNSIGNED_BYTE;if(s===Lu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Pu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wu)return r.BYTE;if(s===Ru)return r.SHORT;if(s===Wl)return r.UNSIGNED_SHORT;if(s===Cu)return r.INT;if(s===Si)return r.UNSIGNED_INT;if(s===ui)return r.FLOAT;if(s===$r)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Iu)return r.ALPHA;if(s===_n)return r.RGBA;if(s===Du)return r.LUMINANCE;if(s===Nu)return r.LUMINANCE_ALPHA;if(s===bi)return r.DEPTH_COMPONENT;if(s===vr)return r.DEPTH_STENCIL;if(s===Zo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uu)return r.RED;if(s===Ou)return r.RED_INTEGER;if(s===Fu)return r.RG;if(s===Bu)return r.RG_INTEGER;if(s===ku)return r.RGBA_INTEGER;if(s===ao||s===co||s===lo||s===ho)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xa||s===$a||s===ja||s===qa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ya||s===Ka)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ya)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ka)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ja||s===Za||s===Qa||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===hc||s===uc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ja)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Za)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qa)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ec)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ic)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ac)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uc)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uo)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Hu||s===fc||s===dc||s===pc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===uo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ur?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class i_ extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r_={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),p=this._getHandJoint(l,E);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,M=.005;l.inputState.pinching&&d>m+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class s_ extends jt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:bi,h!==bi&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=Si),n===void 0&&h===vr&&(n=ur),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1}}class o_ extends Oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,M=null;const E=t.getContextAttributes();let v=null,p=null;const I=[],A=[],R=new Set,L=new Map,O=new en;O.layers.enable(1),O.viewport=new Mt;const k=new en;k.layers.enable(2),k.viewport=new Mt;const X=[O,k],b=new i_;b.layers.enable(1),b.layers.enable(2);let D=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=I[ne];return de===void 0&&(de=new Uo,I[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=I[ne];return de===void 0&&(de=new Uo,I[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=I[ne];return de===void 0&&(de=new Uo,I[ne]=de),de.getHandSpace()};function ae(ne){const de=A.indexOf(ne.inputSource);if(de===-1)return;const Te=I[de];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,l||o),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){i.removeEventListener("select",ae),i.removeEventListener("selectstart",ae),i.removeEventListener("selectend",ae),i.removeEventListener("squeeze",ae),i.removeEventListener("squeezestart",ae),i.removeEventListener("squeezeend",ae),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let ne=0;ne<I.length;ne++){const de=A[ne];de!==null&&(A[ne]=null,I[ne].disconnect(de))}D=null,te=null,e.setRenderTarget(v),m=null,d=null,u=null,i=null,p=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",ae),i.addEventListener("selectstart",ae),i.addEventListener("selectend",ae),i.addEventListener("squeeze",ae),i.addEventListener("squeezestart",ae),i.addEventListener("squeezeend",ae),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),E.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:i.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:m}),p=new Ii(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let de=null,Te=null,we=null;E.depth&&(we=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?vr:bi,Te=E.stencil?ur:Si);const H={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(H),i.updateRenderState({layers:[d]}),p=new Ii(d.textureWidth,d.textureHeight,{format:_n,type:Pi,depthTexture:new s_(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ve=e.properties.get(p);Ve.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(ne){for(let de=0;de<ne.removed.length;de++){const Te=ne.removed[de],we=A.indexOf(Te);we>=0&&(A[we]=null,I[we].disconnect(Te))}for(let de=0;de<ne.added.length;de++){const Te=ne.added[de];let we=A.indexOf(Te);if(we===-1){for(let Ve=0;Ve<I.length;Ve++)if(Ve>=A.length){A.push(Te),we=Ve;break}else if(A[Ve]===null){A[Ve]=Te,we=Ve;break}if(we===-1)break}const H=I[we];H&&H.connect(Te)}}const j=new z,le=new z;function re(ne,de,Te){j.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Te.matrixWorld);const we=j.distanceTo(le),H=de.projectionMatrix.elements,Ve=Te.projectionMatrix.elements,Be=H[14]/(H[10]-1),xe=H[14]/(H[10]+1),Ie=(H[9]+1)/H[5],ce=(H[9]-1)/H[5],oe=(H[8]-1)/H[0],pe=(Ve[8]+1)/Ve[0],Ce=Be*oe,Ae=Be*pe,ze=we/(-oe+pe),Oe=ze*-oe;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Oe),ne.translateZ(ze),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const De=Be+ze,qe=xe+ze,ht=Ce-Oe,N=Ae+(we-Oe),C=Ie*xe/qe*De,Z=ce*xe/qe*De;ne.projectionMatrix.makePerspective(ht,N,C,Z,De,qe),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function he(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;b.near=k.near=O.near=ne.near,b.far=k.far=O.far=ne.far,(D!==b.near||te!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,te=b.far);const de=ne.parent,Te=b.cameras;he(b,de);for(let we=0;we<Te.length;we++)he(Te[we],de);Te.length===2?re(b,O,k):b.projectionMatrix.copy(O.projectionMatrix),_e(ne,b,de)};function _e(ne,de,Te){Te===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0);const we=ne.children;for(let H=0,Ve=we.length;H<Ve;H++)we[H].updateMatrixWorld(!0);ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=yr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.getPlanes=function(){return R};let me=null;function Pe(ne,de){if(h=de.getViewerPose(l||o),M=de,h!==null){const Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(p,m.framebuffer),e.setRenderTarget(p));let we=!1;Te.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let H=0;H<Te.length;H++){const Ve=Te[H];let Be=null;if(m!==null)Be=m.getViewport(Ve);else{const Ie=u.getViewSubImage(d,Ve);Be=Ie.viewport,H===0&&(e.setRenderTargetTextures(p,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(p))}let xe=X[H];xe===void 0&&(xe=new en,xe.layers.enable(H),xe.viewport=new Mt,X[H]=xe),xe.matrix.fromArray(Ve.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ve.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Be.x,Be.y,Be.width,Be.height),H===0&&(b.matrix.copy(xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(xe)}}for(let Te=0;Te<I.length;Te++){const we=A[Te],H=I[Te];we!==null&&H!==void 0&&H.update(we,de,l||o)}if(me&&me(ne,de),de.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:de.detectedPlanes});let Te=null;for(const we of R)de.detectedPlanes.has(we)||(Te===null&&(Te=[]),Te.push(we));if(Te!==null)for(const we of Te)R.delete(we),L.delete(we),n.dispatchEvent({type:"planeremoved",data:we});for(const we of de.detectedPlanes)if(!R.has(we))R.add(we),L.set(we,de.lastChangedTime),n.dispatchEvent({type:"planeadded",data:we});else{const H=L.get(we);we.lastChangedTime>H&&(L.set(we,we.lastChangedTime),n.dispatchEvent({type:"planechanged",data:we}))}}M=null}const ye=new oh;ye.setAnimationLoop(Pe),this.setAnimationLoop=function(ne){me=ne},this.dispose=function(){}}}function a_(r,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,ih(r)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function i(v,p,I,A,R){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(v,p):p.isMeshToonMaterial?(s(v,p),u(v,p)):p.isMeshPhongMaterial?(s(v,p),h(v,p)):p.isMeshStandardMaterial?(s(v,p),d(v,p),p.isMeshPhysicalMaterial&&m(v,p,R)):p.isMeshMatcapMaterial?(s(v,p),M(v,p)):p.isMeshDepthMaterial?s(v,p):p.isMeshDistanceMaterial?(s(v,p),E(v,p)):p.isMeshNormalMaterial?s(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?c(v,p,I,A):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===on&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===on&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const I=e.get(p).envMap;if(I&&(v.envMap.value=I,v.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap){v.lightMap.value=p.lightMap;const A=r.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=p.lightMapIntensity*A,t(p.lightMap,v.lightMapTransform)}p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,I,A){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*I,v.scale.value=A*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function u(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),e.get(p).envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function m(v,p,I){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&v.clearcoatNormalScale.value.negate())),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,p){p.matcap&&(v.matcap.value=p.matcap)}function E(v,p){const I=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c_(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(I,A){const R=A.program;n.uniformBlockBinding(I,R)}function l(I,A){let R=i[I.id];R===void 0&&(M(I),R=h(I),i[I.id]=R,I.addEventListener("dispose",v));const L=A.program;n.updateUBOMapping(I,L);const O=e.render.frame;s[I.id]!==O&&(d(I),s[I.id]=O)}function h(I){const A=u();I.__bindingPointIndex=A;const R=r.createBuffer(),L=I.__size,O=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,L,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,R),R}function u(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){const A=i[I.id],R=I.uniforms,L=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let O=0,k=R.length;O<k;O++){const X=R[O];if(m(X,O,L)===!0){const b=X.__offset,D=Array.isArray(X.value)?X.value:[X.value];let te=0;for(let ae=0;ae<D.length;ae++){const G=D[ae],q=E(G);typeof G=="number"?(X.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,b+te,X.__data)):G.isMatrix3?(X.__data[0]=G.elements[0],X.__data[1]=G.elements[1],X.__data[2]=G.elements[2],X.__data[3]=G.elements[0],X.__data[4]=G.elements[3],X.__data[5]=G.elements[4],X.__data[6]=G.elements[5],X.__data[7]=G.elements[0],X.__data[8]=G.elements[6],X.__data[9]=G.elements[7],X.__data[10]=G.elements[8],X.__data[11]=G.elements[0]):(G.toArray(X.__data,te),te+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,b,X.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(I,A,R){const L=I.value;if(R[A]===void 0){if(typeof L=="number")R[A]=L;else{const O=Array.isArray(L)?L:[L],k=[];for(let X=0;X<O.length;X++)k.push(O[X].clone());R[A]=k}return!0}else if(typeof L=="number"){if(R[A]!==L)return R[A]=L,!0}else{const O=Array.isArray(R[A])?R[A]:[R[A]],k=Array.isArray(L)?L:[L];for(let X=0;X<O.length;X++){const b=O[X];if(b.equals(k[X])===!1)return b.copy(k[X]),!0}}return!1}function M(I){const A=I.uniforms;let R=0;const L=16;let O=0;for(let k=0,X=A.length;k<X;k++){const b=A[k],D={boundary:0,storage:0},te=Array.isArray(b.value)?b.value:[b.value];for(let ae=0,G=te.length;ae<G;ae++){const q=te[ae],j=E(q);D.boundary+=j.boundary,D.storage+=j.storage}if(b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,k>0){O=R%L;const ae=L-O;O!==0&&ae-D.boundary<0&&(R+=L-O,b.__offset=R)}R+=D.storage}return O=R%L,O>0&&(R+=L-O),I.__size=R,I.__cache={},this}function E(I){const A={boundary:0,storage:0};return typeof I=="number"?(A.boundary=4,A.storage=4):I.isVector2?(A.boundary=8,A.storage=8):I.isVector3||I.isColor?(A.boundary=16,A.storage=12):I.isVector4?(A.boundary=16,A.storage=16):I.isMatrix3?(A.boundary=48,A.storage=48):I.isMatrix4?(A.boundary=64,A.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),A}function v(I){const A=I.target;A.removeEventListener("dispose",v);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function p(){for(const I in i)r.deleteBuffer(i[I]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}function l_(){const r=qr("canvas");return r.style.display="block",r}class uh{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let m=null,M=null;const E=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=je,this.useLegacyLights=!0,this.toneMapping=Yn,this.toneMappingExposure=1;const p=this;let I=!1,A=0,R=0,L=null,O=-1,k=null;const X=new Mt,b=new Mt;let D=null,te=t.width,ae=t.height,G=1,q=null,j=null;const le=new Mt(0,0,te,ae),re=new Mt(0,0,te,ae);let he=!1;const _e=new ga;let me=!1,Pe=!1,ye=null;const ne=new ot,de=new z,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return L===null?G:1}let H=n;function Ve(P,$){for(let se=0;se<P.length;se++){const W=P[se],ee=t.getContext(W,$);if(ee!==null)return ee}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Me,!1),H===null){const $=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&$.shift(),H=Ve($,P),H===null)throw Ve($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Be,xe,Ie,ce,oe,pe,Ce,Ae,ze,Oe,De,qe,ht,N,C,Z,ge,ve,S,_,g,T,U,F;function ie(){Be=new ym(H),xe=new pm(H,Be,e),Be.init(xe),T=new n_(H,Be,xe),Ie=new e_(H,Be,xe),ce=new Sm(H),oe=new zg,pe=new t_(H,Be,Ie,oe,xe,T,ce),Ce=new gm(p),Ae=new xm(p),ze=new Uf(H,xe),U=new fm(H,Be,ze,xe),Oe=new Mm(H,ze,ce,U),De=new wm(H,Oe,ze,ce),S=new bm(H,xe,pe),Z=new mm(oe),qe=new kg(p,Ce,Ae,Be,xe,U,Z),ht=new a_(p,oe),N=new Gg,C=new qg(Be,xe),ve=new um(p,Ce,Ae,Ie,De,d,c),ge=new Qg(p,De,xe),F=new c_(H,ce,xe,Ie),_=new dm(H,Be,ce,xe),g=new Em(H,Be,ce,xe),ce.programs=qe.programs,p.capabilities=xe,p.extensions=Be,p.properties=oe,p.renderLists=N,p.shadowMap=ge,p.state=Ie,p.info=ce}ie();const Y=new o_(p,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=Be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(P){P!==void 0&&(G=P,this.setSize(te,ae,!1))},this.getSize=function(P){return P.set(te,ae)},this.setSize=function(P,$,se=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=P,ae=$,t.width=Math.floor(P*G),t.height=Math.floor($*G),se===!0&&(t.style.width=P+"px",t.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(te*G,ae*G).floor()},this.setDrawingBufferSize=function(P,$,se){te=P,ae=$,G=se,t.width=Math.floor(P*se),t.height=Math.floor($*se),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(X)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,$,se,W){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,$,se,W),Ie.viewport(X.copy(le).multiplyScalar(G).floor())},this.getScissor=function(P){return P.copy(re)},this.setScissor=function(P,$,se,W){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,$,se,W),Ie.scissor(b.copy(re).multiplyScalar(G).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(P){Ie.setScissorTest(he=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){j=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(P=!0,$=!0,se=!0){let W=0;P&&(W|=H.COLOR_BUFFER_BIT),$&&(W|=H.DEPTH_BUFFER_BIT),se&&(W|=H.STENCIL_BUFFER_BIT),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),N.dispose(),C.dispose(),oe.dispose(),Ce.dispose(),Ae.dispose(),De.dispose(),U.dispose(),F.dispose(),qe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ne),Y.removeEventListener("sessionend",it),ye&&(ye.dispose(),ye=null),_t.stop()};function Q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const P=ce.autoReset,$=ge.enabled,se=ge.autoUpdate,W=ge.needsUpdate,ee=ge.type;ie(),ce.autoReset=P,ge.enabled=$,ge.autoUpdate=se,ge.needsUpdate=W,ge.type=ee}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Le(P){const $=P.target;$.removeEventListener("dispose",Le),B($)}function B(P){J(P),oe.remove(P)}function J(P){const $=oe.get(P).programs;$!==void 0&&($.forEach(function(se){qe.releaseProgram(se)}),P.isShaderMaterial&&qe.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,se,W,ee,Fe){$===null&&($=Te);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Xe=Ys(P,$,se,W,ee);Ie.setMaterial(W,He);let $e=se.index,Qe=1;W.wireframe===!0&&($e=Oe.getWireframeAttribute(se),Qe=2);const et=se.drawRange,rt=se.attributes.position;let vt=et.start*Qe,Ct=(et.start+et.count)*Qe;Fe!==null&&(vt=Math.max(vt,Fe.start*Qe),Ct=Math.min(Ct,(Fe.start+Fe.count)*Qe)),$e!==null?(vt=Math.max(vt,0),Ct=Math.min(Ct,$e.count)):rt!=null&&(vt=Math.max(vt,0),Ct=Math.min(Ct,rt.count));const cn=Ct-vt;if(cn<0||cn===1/0)return;U.setup(ee,W,Xe,se,$e);let Bn,St=_;if($e!==null&&(Bn=ze.get($e),St=g,St.setIndex(Bn)),ee.isMesh)W.wireframe===!0?(Ie.setLineWidth(W.wireframeLinewidth*we()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(ee.isLine){let st=W.linewidth;st===void 0&&(st=1),Ie.setLineWidth(st*we()),ee.isLineSegments?St.setMode(H.LINES):ee.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else ee.isPoints?St.setMode(H.POINTS):ee.isSprite&&St.setMode(H.TRIANGLES);if(ee.isInstancedMesh)St.renderInstances(vt,cn,ee.count);else if(se.isInstancedBufferGeometry){const st=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,wr=Math.min(se.instanceCount,st);St.renderInstances(vt,cn,wr)}else St.render(vt,cn)},this.compile=function(P,$){function se(W,ee,Fe){W.transparent===!0&&W.side===Dn&&W.forceSinglePass===!1?(W.side=on,W.needsUpdate=!0,di(W,ee,Fe),W.side=Kn,W.needsUpdate=!0,di(W,ee,Fe),W.side=Dn):di(W,ee,Fe)}M=C.get(P),M.init(),v.push(M),P.traverseVisible(function(W){W.isLight&&W.layers.test($.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(p.useLegacyLights),P.traverse(function(W){const ee=W.material;if(ee)if(Array.isArray(ee))for(let Fe=0;Fe<ee.length;Fe++){const He=ee[Fe];se(He,P,W)}else se(ee,P,W)}),v.pop(),M=null};let ue=null;function Se(P){ue&&ue(P)}function Ne(){_t.stop()}function it(){_t.start()}const _t=new oh;_t.setAnimationLoop(Se),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(P){ue=P,Y.setAnimationLoop(P),P===null?_t.stop():_t.start()},Y.addEventListener("sessionstart",Ne),Y.addEventListener("sessionend",it),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera($),$=Y.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,$,L),M=C.get(P,v.length),M.init(),v.push(M),ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_e.setFromProjectionMatrix(ne),Pe=this.localClippingEnabled,me=Z.init(this.clippingPlanes,Pe),m=N.get(P,E.length),m.init(),E.push(m),wt(P,$,0,p.sortObjects),m.finish(),p.sortObjects===!0&&m.sort(q,j),me===!0&&Z.beginShadows();const se=M.state.shadowsArray;if(ge.render(se,P,$),me===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(m,P),M.setupLights(p.useLegacyLights),$.isArrayCamera){const W=$.cameras;for(let ee=0,Fe=W.length;ee<Fe;ee++){const He=W[ee];an(m,P,He,He.viewport)}}else an(m,P,$);L!==null&&(pe.updateMultisampleRenderTarget(L),pe.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(p,P,$),U.resetDefaultState(),O=-1,k=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function wt(P,$,se,W){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||_e.intersectsSprite(P)){W&&de.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ne);const He=De.update(P),Xe=P.material;Xe.visible&&m.push(P,He,Xe,se,de.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||_e.intersectsObject(P))){P.isSkinnedMesh&&P.skeleton.frame!==ce.render.frame&&(P.skeleton.update(),P.skeleton.frame=ce.render.frame);const He=De.update(P),Xe=P.material;if(W&&(He.boundingSphere===null&&He.computeBoundingSphere(),de.copy(He.boundingSphere.center).applyMatrix4(P.matrixWorld).applyMatrix4(ne)),Array.isArray(Xe)){const $e=He.groups;for(let Qe=0,et=$e.length;Qe<et;Qe++){const rt=$e[Qe],vt=Xe[rt.materialIndex];vt&&vt.visible&&m.push(P,He,vt,se,de.z,rt)}}else Xe.visible&&m.push(P,He,Xe,se,de.z,null)}}const Fe=P.children;for(let He=0,Xe=Fe.length;He<Xe;He++)wt(Fe[He],$,se,W)}function an(P,$,se,W){const ee=P.opaque,Fe=P.transmissive,He=P.transparent;M.setupLightsView(se),me===!0&&Z.setGlobalState(p.clippingPlanes,se),Fe.length>0&&Et(ee,Fe,$,se),W&&Ie.viewport(X.copy(W)),ee.length>0&&tn(ee,$,se),Fe.length>0&&tn(Fe,$,se),He.length>0&&tn(He,$,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Et(P,$,se,W){if(ye===null){const Xe=xe.isWebGL2;ye=new Ii(1024,1024,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?$r:Pi,minFilter:Li,samples:Xe&&a===!0?4:0})}const ee=p.getRenderTarget();p.setRenderTarget(ye),p.clear();const Fe=p.toneMapping;p.toneMapping=Yn,tn(P,se,W),pe.updateMultisampleRenderTarget(ye),pe.updateRenderTargetMipmap(ye);let He=!1;for(let Xe=0,$e=$.length;Xe<$e;Xe++){const Qe=$[Xe],et=Qe.object,rt=Qe.geometry,vt=Qe.material,Ct=Qe.group;if(vt.side===Dn&&et.layers.test(W.layers)){const cn=vt.side;vt.side=on,vt.needsUpdate=!0,Jt(et,se,W,rt,vt,Ct),vt.side=cn,vt.needsUpdate=!0,He=!0}}He===!0&&(pe.updateMultisampleRenderTarget(ye),pe.updateRenderTargetMipmap(ye)),p.setRenderTarget(ee),p.toneMapping=Fe}function tn(P,$,se){const W=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Fe=P.length;ee<Fe;ee++){const He=P[ee],Xe=He.object,$e=He.geometry,Qe=W===null?He.material:W,et=He.group;Xe.layers.test(se.layers)&&Jt(Xe,$,se,$e,Qe,et)}}function Jt(P,$,se,W,ee,Fe){P.onBeforeRender(p,$,se,W,ee,Fe),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(p,$,se,W,P,Fe),ee.transparent===!0&&ee.side===Dn&&ee.forceSinglePass===!1?(ee.side=on,ee.needsUpdate=!0,p.renderBufferDirect(se,$,W,ee,P,Fe),ee.side=Kn,ee.needsUpdate=!0,p.renderBufferDirect(se,$,W,ee,P,Fe),ee.side=Dn):p.renderBufferDirect(se,$,W,ee,P,Fe),P.onAfterRender(p,$,se,W,ee,Fe)}function di(P,$,se){$.isScene!==!0&&($=Te);const W=oe.get(P),ee=M.state.lights,Fe=M.state.shadowsArray,He=ee.state.version,Xe=qe.getParameters(P,ee.state,Fe,$,se),$e=qe.getProgramCacheKey(Xe);let Qe=W.programs;W.environment=P.isMeshStandardMaterial?$.environment:null,W.fog=$.fog,W.envMap=(P.isMeshStandardMaterial?Ae:Ce).get(P.envMap||W.environment),Qe===void 0&&(P.addEventListener("dispose",Le),Qe=new Map,W.programs=Qe);let et=Qe.get($e);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===He)return qt(P,Xe),et}else Xe.uniforms=qe.getUniforms(P),P.onBuild(se,Xe,p),P.onBeforeCompile(Xe,p),et=qe.acquireProgram(Xe,$e),Qe.set($e,et),W.uniforms=Xe.uniforms;const rt=W.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(rt.clippingPlanes=Z.uniform),qt(P,Xe),W.needsLights=Js(P),W.lightsStateVersion=He,W.needsLights&&(rt.ambientLightColor.value=ee.state.ambient,rt.lightProbe.value=ee.state.probe,rt.directionalLights.value=ee.state.directional,rt.directionalLightShadows.value=ee.state.directionalShadow,rt.spotLights.value=ee.state.spot,rt.spotLightShadows.value=ee.state.spotShadow,rt.rectAreaLights.value=ee.state.rectArea,rt.ltc_1.value=ee.state.rectAreaLTC1,rt.ltc_2.value=ee.state.rectAreaLTC2,rt.pointLights.value=ee.state.point,rt.pointLightShadows.value=ee.state.pointShadow,rt.hemisphereLights.value=ee.state.hemi,rt.directionalShadowMap.value=ee.state.directionalShadowMap,rt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,rt.spotShadowMap.value=ee.state.spotShadowMap,rt.spotLightMatrix.value=ee.state.spotLightMatrix,rt.spotLightMap.value=ee.state.spotLightMap,rt.pointShadowMap.value=ee.state.pointShadowMap,rt.pointShadowMatrix.value=ee.state.pointShadowMatrix);const vt=et.getUniforms(),Ct=Os.seqWithValue(vt.seq,rt);return W.currentProgram=et,W.uniformsList=Ct,et}function qt(P,$){const se=oe.get(P);se.outputColorSpace=$.outputColorSpace,se.instancing=$.instancing,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Ys(P,$,se,W,ee){$.isScene!==!0&&($=Te),pe.resetTextureUnits();const Fe=$.fog,He=W.isMeshStandardMaterial?$.environment:null,Xe=L===null?p.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Nn,$e=(W.isMeshStandardMaterial?Ae:Ce).get(W.envMap||He),Qe=W.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,et=!!W.normalMap&&!!se.attributes.tangent,rt=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color,cn=W.toneMapped?p.toneMapping:Yn,Bn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,St=Bn!==void 0?Bn.length:0,st=oe.get(W),wr=M.state.lights;if(me===!0&&(Pe===!0||P!==k)){const Pt=P===k&&W.id===O;Z.setState(W,P,Pt)}let Tt=!1;W.version===st.__version?(st.needsLights&&st.lightsStateVersion!==wr.state.version||st.outputColorSpace!==Xe||ee.isInstancedMesh&&st.instancing===!1||!ee.isInstancedMesh&&st.instancing===!0||ee.isSkinnedMesh&&st.skinning===!1||!ee.isSkinnedMesh&&st.skinning===!0||st.envMap!==$e||W.fog===!0&&st.fog!==Fe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Z.numPlanes||st.numIntersection!==Z.numIntersection)||st.vertexAlphas!==Qe||st.vertexTangents!==et||st.morphTargets!==rt||st.morphNormals!==vt||st.morphColors!==Ct||st.toneMapping!==cn||xe.isWebGL2===!0&&st.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,st.__version=W.version);let Rt=st.currentProgram;Tt===!0&&(Rt=di(W,$,ee));let ki=!1,pi=!1,zi=!1;const Lt=Rt.getUniforms(),Cn=st.uniforms;if(Ie.useProgram(Rt.program)&&(ki=!0,pi=!0,zi=!0),W.id!==O&&(O=W.id,pi=!0),ki||k!==P){if(Lt.setValue(H,"projectionMatrix",P.projectionMatrix),xe.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),k!==P&&(k=P,pi=!0,zi=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Pt=Lt.map.cameraPosition;Pt!==void 0&&Pt.setValue(H,de.setFromMatrixPosition(P.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ee.isSkinnedMesh)&&Lt.setValue(H,"viewMatrix",P.matrixWorldInverse)}if(ee.isSkinnedMesh){Lt.setOptional(H,ee,"bindMatrix"),Lt.setOptional(H,ee,"bindMatrixInverse");const Pt=ee.skeleton;Pt&&(xe.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),Lt.setValue(H,"boneTexture",Pt.boneTexture,pe),Lt.setValue(H,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qn=se.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0&&xe.isWebGL2===!0)&&S.update(ee,se,Rt),(pi||st.receiveShadow!==ee.receiveShadow)&&(st.receiveShadow=ee.receiveShadow,Lt.setValue(H,"receiveShadow",ee.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cn.envMap.value=$e,Cn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),pi&&(Lt.setValue(H,"toneMappingExposure",p.toneMappingExposure),st.needsLights&&Ks(Cn,zi),Fe&&W.fog===!0&&ht.refreshFogUniforms(Cn,Fe),ht.refreshMaterialUniforms(Cn,W,G,ae,ye),Os.upload(H,st.uniformsList,Cn,pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(H,st.uniformsList,Cn,pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Lt.setValue(H,"center",ee.center),Lt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Lt.setValue(H,"normalMatrix",ee.normalMatrix),Lt.setValue(H,"modelMatrix",ee.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let Ln=0,Zs=Pt.length;Ln<Zs;Ln++)if(xe.isWebGL2){const is=Pt[Ln];F.update(is,Rt),F.bind(is,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function Ks(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Js(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,$,se){oe.get(P.texture).__webglTexture=$,oe.get(P.depthTexture).__webglTexture=se;const W=oe.get(P);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=se===void 0,W.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,$){const se=oe.get(P);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,se=0){L=P,A=$,R=se;let W=!0,ee=null,Fe=!1,He=!1;if(P){const $e=oe.get(P);$e.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(H.FRAMEBUFFER,null),W=!1):$e.__webglFramebuffer===void 0?pe.setupRenderTarget(P):$e.__hasExternalTextures&&pe.rebindTextures(P,oe.get(P.texture).__webglTexture,oe.get(P.depthTexture).__webglTexture);const Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(He=!0);const et=oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ee=et[$],Fe=!0):xe.isWebGL2&&P.samples>0&&pe.useMultisampledRTT(P)===!1?ee=oe.get(P).__webglMultisampledFramebuffer:ee=et,X.copy(P.viewport),b.copy(P.scissor),D=P.scissorTest}else X.copy(le).multiplyScalar(G).floor(),b.copy(re).multiplyScalar(G).floor(),D=he;if(Ie.bindFramebuffer(H.FRAMEBUFFER,ee)&&xe.drawBuffers&&W&&Ie.drawBuffers(P,ee),Ie.viewport(X),Ie.scissor(b),Ie.setScissorTest(D),Fe){const $e=oe.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,$e.__webglTexture,se)}else if(He){const $e=oe.get(P.texture),Qe=$||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,se||0,Qe)}O=-1},this.readRenderTargetPixels=function(P,$,se,W,ee,Fe,He){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){Ie.bindFramebuffer(H.FRAMEBUFFER,Xe);try{const $e=P.texture,Qe=$e.format,et=$e.type;if(Qe!==_n&&T.convert(Qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=et===$r&&(Be.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Be.has("EXT_color_buffer_float"));if(et!==Pi&&T.convert(et)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===ui&&(xe.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-W&&se>=0&&se<=P.height-ee&&H.readPixels($,se,W,ee,T.convert(Qe),T.convert(et),Fe)}finally{const $e=L!==null?oe.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(P,$,se=0){const W=Math.pow(2,-se),ee=Math.floor($.image.width*W),Fe=Math.floor($.image.height*W);pe.setTexture2D($,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,P.x,P.y,ee,Fe),Ie.unbindTexture()},this.copyTextureToTexture=function(P,$,se,W=0){const ee=$.image.width,Fe=$.image.height,He=T.convert(se.format),Xe=T.convert(se.type);pe.setTexture2D(se,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,se.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,se.unpackAlignment),$.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,P.x,P.y,ee,Fe,He,Xe,$.image.data):$.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,P.x,P.y,$.mipmaps[0].width,$.mipmaps[0].height,He,$.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,W,P.x,P.y,He,Xe,$.image),W===0&&se.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,$,se,W,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=P.max.x-P.min.x+1,He=P.max.y-P.min.y+1,Xe=P.max.z-P.min.z+1,$e=T.convert(W.format),Qe=T.convert(W.type);let et;if(W.isData3DTexture)pe.setTexture3D(W,0),et=H.TEXTURE_3D;else if(W.isDataArrayTexture)pe.setTexture2DArray(W,0),et=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const rt=H.getParameter(H.UNPACK_ROW_LENGTH),vt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ct=H.getParameter(H.UNPACK_SKIP_PIXELS),cn=H.getParameter(H.UNPACK_SKIP_ROWS),Bn=H.getParameter(H.UNPACK_SKIP_IMAGES),St=se.isCompressedTexture?se.mipmaps[0]:se.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,P.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,P.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?H.texSubImage3D(et,ee,$.x,$.y,$.z,Fe,He,Xe,$e,Qe,St.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(et,ee,$.x,$.y,$.z,Fe,He,Xe,$e,St.data)):H.texSubImage3D(et,ee,$.x,$.y,$.z,Fe,He,Xe,$e,Qe,St),H.pixelStorei(H.UNPACK_ROW_LENGTH,rt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,vt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ct),H.pixelStorei(H.UNPACK_SKIP_ROWS,cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Bn),ee===0&&W.generateMipmaps&&H.generateMipmap(et),Ie.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?pe.setTextureCube(P,0):P.isData3DTexture?pe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pe.setTexture2DArray(P,0):pe.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Ie.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?wi:$l}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?je:Nn}}class h_ extends uh{}h_.prototype.isWebGL1Renderer=!0;class u_ extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class f_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new z;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new z,rl=new Mt,sl=new Mt,d_=new z,ol=new ot,sr=new z;class p_ extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)sr.fromBufferAttribute(t,n),this.applyBoneTransform(n,sr),this.boundingBox.expandByPoint(sr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)sr.fromBufferAttribute(t,n),this.applyBoneTransform(n,sr),this.boundingSphere.expandByPoint(sr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rl.fromBufferAttribute(i.attributes.skinIndex,e),sl.fromBufferAttribute(i.attributes.skinWeight,e),il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sl.getComponent(s);if(o!==0){const a=rl.getComponent(s);ol.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(d_.copy(il).applyMatrix4(ol),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class fh extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class m_ extends jt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ht,h=Ht,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new ot,g_=new ot;class Ma{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:g_;al.multiplyMatrices(a,t[s]),al.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ql(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new m_(t,e,e,_n,ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new fh),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cl extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new ot,ll=new ot,bs=[],hl=new Rn,__=new ot,Dr=new $t,Nr=new Zn;class v_ extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,__)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),hl.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Nr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,or),ll.multiplyMatrices(n,or),Dr.matrixWorld=ll,Dr.raycast(e,bs);for(let o=0,a=bs.length;o<a;o++){const c=bs[o];c.instanceId=s,c.object=this,t.push(c)}bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dh extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ul=new z,fl=new z,dl=new ot,Oo=new Vs,ws=new Zn;class Ea extends bt{constructor(e=new fn,t=new dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ul.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ul.distanceTo(fl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;dl.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new z,h=new z,u=new z,d=new z,m=this.isLineSegments?2:1,M=n.index,v=n.attributes.position;if(M!==null){const p=Math.max(0,o.start),I=Math.min(M.count,o.start+o.count);for(let A=p,R=I-1;A<R;A+=m){const L=M.getX(A),O=M.getX(A+1);if(l.fromBufferAttribute(v,L),h.fromBufferAttribute(v,O),Oo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const X=e.ray.origin.distanceTo(d);X<e.near||X>e.far||t.push({distance:X,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),I=Math.min(v.count,o.start+o.count);for(let A=p,R=I-1;A<R;A+=m){if(l.fromBufferAttribute(v,A),h.fromBufferAttribute(v,A+1),Oo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pl=new z,ml=new z;class x_ extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pl.fromBufferAttribute(t,i),ml.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pl.distanceTo(ml);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y_ extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ph extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gl=new ot,ta=new Vs,Rs=new Zn,Cs=new z;class M_ extends bt{constructor(e=new fn,t=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;gl.copy(i).invert(),ta.copy(e.ray).applyMatrix4(gl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let M=d,E=m;M<E;M++){const v=l.getX(M);Cs.fromBufferAttribute(u,v),_l(Cs,v,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let M=d,E=m;M<E;M++)Cs.fromBufferAttribute(u,M),_l(Cs,M,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _l(r,e,t,n,i,s,o){const a=ta.distanceSqToPoint(r);if(a<t){const c=new z;ta.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,m=(o-h)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new Ee:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,i=[],s=[],o=[],a=new z,c=new ot;for(let m=0;m<=e;m++){const M=m/e;i[m]=this.getTangentAt(M,new z)}s[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(Ft(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,M))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(Ft(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let M=1;M<=e;M++)s[M].applyMatrix4(c.makeRotationAxis(i[M],m*M)),o[M].crossVectors(i[M],s[M])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sa extends On{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new Ee,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E_ extends Sa{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,i(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ls=new z,Fo=new Ta,Bo=new Ta,ko=new Ta;class S_ extends On{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new z){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Ls.subVectors(i[0],i[1]).add(i[0]),l=Ls);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ls.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ls),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let M=Math.pow(l.distanceToSquared(u),m),E=Math.pow(u.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(h),m);E<1e-4&&(E=1),M<1e-4&&(M=E),v<1e-4&&(v=E),Fo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,M,E,v),Bo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,M,E,v),ko.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,M,E,v)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Bo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ko.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Fo.calc(c),Bo.calc(c),ko.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vl(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function T_(r,e){const t=1-r;return t*t*e}function A_(r,e){return 2*(1-r)*r*e}function b_(r,e){return r*r*e}function Vr(r,e,t,n){return T_(r,e)+A_(r,t)+b_(r,n)}function w_(r,e){const t=1-r;return t*t*t*e}function R_(r,e){const t=1-r;return 3*t*t*r*e}function C_(r,e){return 3*(1-r)*r*r*e}function L_(r,e){return r*r*r*e}function Wr(r,e,t,n,i){return w_(r,e)+R_(r,t)+C_(r,n)+L_(r,i)}class mh extends On{constructor(e=new Ee,t=new Ee,n=new Ee,i=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ee){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,i.x,s.x,o.x,a.x),Wr(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P_ extends On{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,i.x,s.x,o.x,a.x),Wr(e,i.y,s.y,o.y,a.y),Wr(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Aa extends On{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends On{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends On{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,i.x,s.x,o.x),Vr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends On{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,i.x,s.x,o.x),Vr(e,i.y,s.y,o.y),Vr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(vl(a,c.x,l.x,h.x,u.x),vl(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ee().fromArray(i))}return this}}var vh=Object.freeze({__proto__:null,ArcCurve:E_,CatmullRomCurve3:S_,CubicBezierCurve:mh,CubicBezierCurve3:P_,EllipseCurve:Sa,LineCurve:Aa,LineCurve3:I_,QuadraticBezierCurve:gh,QuadraticBezierCurve3:D_,SplineCurve:_h});class N_ extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Aa(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new vh[i.type]().fromJSON(i))}return this}}class na extends N_{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Aa(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new gh(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new mh(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _h(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new Sa(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends na{constructor(e){super(e),this.uuid=xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new na().fromJSON(i))}return this}}const U_={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=xh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=z_(r,e,s,t)),r.length>80*t){a=l=r[0],c=h=r[1];for(let M=t;M<i;M+=t)u=r[M],d=r[M+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Yr(s,o,t,a,c,m,0),o}};function xh(r,e,t,n,i){let s,o;if(i===J_(r,e,t,n)>0)for(s=e;s<t;s+=n)o=xl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=xl(s,r[s],r[s+1],o);return o&&$s(o,o.next)&&(Jr(o),o=o.next),o}function Ni(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&($s(t,t.next)||At(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&X_(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?F_(r,n,i,s):O_(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Jr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=B_(Ni(r),e,t),Yr(r,e,t,n,i,s,2)):o===2&&k_(r,e,t,n,i,s):Yr(Ni(r),e,t,n,i,s,1);break}}}function O_(r){const e=r.prev,t=r,n=r.next;if(At(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let M=n.next;for(;M!==e;){if(M.x>=h&&M.x<=d&&M.y>=u&&M.y<=m&&lr(i,a,s,c,o,l,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function F_(r,e,t,n){const i=r.prev,s=r,o=r.next;if(At(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,M=h<u?h<d?h:d:u<d?u:d,E=a>c?a>l?a:l:c>l?c:l,v=h>u?h>d?h:d:u>d?u:d,p=ia(m,M,e,t,n),I=ia(E,v,e,t,n);let A=r.prevZ,R=r.nextZ;for(;A&&A.z>=p&&R&&R.z<=I;){if(A.x>=m&&A.x<=E&&A.y>=M&&A.y<=v&&A!==i&&A!==o&&lr(a,h,c,u,l,d,A.x,A.y)&&At(A.prev,A,A.next)>=0||(A=A.prevZ,R.x>=m&&R.x<=E&&R.y>=M&&R.y<=v&&R!==i&&R!==o&&lr(a,h,c,u,l,d,R.x,R.y)&&At(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;A&&A.z>=p;){if(A.x>=m&&A.x<=E&&A.y>=M&&A.y<=v&&A!==i&&A!==o&&lr(a,h,c,u,l,d,A.x,A.y)&&At(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;R&&R.z<=I;){if(R.x>=m&&R.x<=E&&R.y>=M&&R.y<=v&&R!==i&&R!==o&&lr(a,h,c,u,l,d,R.x,R.y)&&At(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function B_(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!$s(i,s)&&yh(i,n,n.next,s)&&Kr(i,s)&&Kr(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Jr(n),Jr(n.next),n=r=s),n=n.next}while(n!==r);return Ni(n)}function k_(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q_(o,a)){let c=Mh(o,a);o=Ni(o,o.next),c=Ni(c,c.next),Yr(o,e,t,n,i,s,0),Yr(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function z_(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=xh(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(j_(l));for(i.sort(H_),s=0;s<i.length;s++)t=G_(i[s],t);return t}function H_(r,e){return r.x-e.x}function G_(r,e){const t=V_(r,e);if(!t)return e;const n=Mh(t,r);return Ni(n,n.next),Ni(t,t.next)}function V_(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&lr(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Kr(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&W_(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function W_(r,e){return At(r.prev,r,e.prev)<0&&At(e.next,r,r.next)<0}function X_(r,e,t,n){let i=r;do i.z===0&&(i.z=ia(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$_(i)}function $_(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function ia(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function j_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function lr(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function q_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Y_(r,e)&&(Kr(r,e)&&Kr(e,r)&&K_(r,e)&&(At(r.prev,r,e.prev)||At(r,e.prev,e))||$s(r,e)&&At(r.prev,r,r.next)>0&&At(e.prev,e,e.next)>0)}function At(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function $s(r,e){return r.x===e.x&&r.y===e.y}function yh(r,e,t,n){const i=Is(At(r,e,t)),s=Is(At(r,e,n)),o=Is(At(t,n,r)),a=Is(At(t,n,e));return!!(i!==s&&o!==a||i===0&&Ps(r,t,e)||s===0&&Ps(r,n,e)||o===0&&Ps(t,r,n)||a===0&&Ps(t,e,n))}function Ps(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Is(r){return r>0?1:r<0?-1:0}function Y_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Kr(r,e){return At(r.prev,r,r.next)<0?At(r,e,r.next)>=0&&At(r,r.prev,e)>=0:At(r,e,r.prev)<0||At(r,r.next,e)<0}function K_(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mh(r,e){const t=new ra(r.i,r.x,r.y),n=new ra(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function xl(r,e,t,n){const i=new ra(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ra(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J_(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class dr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return dr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];yl(e),Ml(n,e);let o=e.length;t.forEach(yl);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Ml(n,t[c]);const a=U_.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function yl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ml(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ba extends fn{constructor(e=new Fs([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new un(i,3)),this.setAttribute("uv",new un(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:m-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:Z_;let A,R=!1,L,O,k,X;p&&(A=p.getSpacedPoints(h),R=!0,d=!1,L=p.computeFrenetFrames(h,!1),O=new z,k=new z,X=new z),d||(v=0,m=0,M=0,E=0);const b=a.extractPoints(l);let D=b.shape;const te=b.holes;if(!dr.isClockWise(D)){D=D.reverse();for(let ce=0,oe=te.length;ce<oe;ce++){const pe=te[ce];dr.isClockWise(pe)&&(te[ce]=pe.reverse())}}const G=dr.triangulateShape(D,te),q=D;for(let ce=0,oe=te.length;ce<oe;ce++){const pe=te[ce];D=D.concat(pe)}function j(ce,oe,pe){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(oe,pe)}const le=D.length,re=G.length;function he(ce,oe,pe){let Ce,Ae,ze;const Oe=ce.x-oe.x,De=ce.y-oe.y,qe=pe.x-ce.x,ht=pe.y-ce.y,N=Oe*Oe+De*De,C=Oe*ht-De*qe;if(Math.abs(C)>Number.EPSILON){const Z=Math.sqrt(N),ge=Math.sqrt(qe*qe+ht*ht),ve=oe.x-De/Z,S=oe.y+Oe/Z,_=pe.x-ht/ge,g=pe.y+qe/ge,T=((_-ve)*ht-(g-S)*qe)/(Oe*ht-De*qe);Ce=ve+Oe*T-ce.x,Ae=S+De*T-ce.y;const U=Ce*Ce+Ae*Ae;if(U<=2)return new Ee(Ce,Ae);ze=Math.sqrt(U/2)}else{let Z=!1;Oe>Number.EPSILON?qe>Number.EPSILON&&(Z=!0):Oe<-Number.EPSILON?qe<-Number.EPSILON&&(Z=!0):Math.sign(De)===Math.sign(ht)&&(Z=!0),Z?(Ce=-De,Ae=Oe,ze=Math.sqrt(N)):(Ce=Oe,Ae=De,ze=Math.sqrt(N/2))}return new Ee(Ce/ze,Ae/ze)}const _e=[];for(let ce=0,oe=q.length,pe=oe-1,Ce=ce+1;ce<oe;ce++,pe++,Ce++)pe===oe&&(pe=0),Ce===oe&&(Ce=0),_e[ce]=he(q[ce],q[pe],q[Ce]);const me=[];let Pe,ye=_e.concat();for(let ce=0,oe=te.length;ce<oe;ce++){const pe=te[ce];Pe=[];for(let Ce=0,Ae=pe.length,ze=Ae-1,Oe=Ce+1;Ce<Ae;Ce++,ze++,Oe++)ze===Ae&&(ze=0),Oe===Ae&&(Oe=0),Pe[Ce]=he(pe[Ce],pe[ze],pe[Oe]);me.push(Pe),ye=ye.concat(Pe)}for(let ce=0;ce<v;ce++){const oe=ce/v,pe=m*Math.cos(oe*Math.PI/2),Ce=M*Math.sin(oe*Math.PI/2)+E;for(let Ae=0,ze=q.length;Ae<ze;Ae++){const Oe=j(q[Ae],_e[Ae],Ce);H(Oe.x,Oe.y,-pe)}for(let Ae=0,ze=te.length;Ae<ze;Ae++){const Oe=te[Ae];Pe=me[Ae];for(let De=0,qe=Oe.length;De<qe;De++){const ht=j(Oe[De],Pe[De],Ce);H(ht.x,ht.y,-pe)}}}const ne=M+E;for(let ce=0;ce<le;ce++){const oe=d?j(D[ce],ye[ce],ne):D[ce];R?(k.copy(L.normals[0]).multiplyScalar(oe.x),O.copy(L.binormals[0]).multiplyScalar(oe.y),X.copy(A[0]).add(k).add(O),H(X.x,X.y,X.z)):H(oe.x,oe.y,0)}for(let ce=1;ce<=h;ce++)for(let oe=0;oe<le;oe++){const pe=d?j(D[oe],ye[oe],ne):D[oe];R?(k.copy(L.normals[ce]).multiplyScalar(pe.x),O.copy(L.binormals[ce]).multiplyScalar(pe.y),X.copy(A[ce]).add(k).add(O),H(X.x,X.y,X.z)):H(pe.x,pe.y,u/h*ce)}for(let ce=v-1;ce>=0;ce--){const oe=ce/v,pe=m*Math.cos(oe*Math.PI/2),Ce=M*Math.sin(oe*Math.PI/2)+E;for(let Ae=0,ze=q.length;Ae<ze;Ae++){const Oe=j(q[Ae],_e[Ae],Ce);H(Oe.x,Oe.y,u+pe)}for(let Ae=0,ze=te.length;Ae<ze;Ae++){const Oe=te[Ae];Pe=me[Ae];for(let De=0,qe=Oe.length;De<qe;De++){const ht=j(Oe[De],Pe[De],Ce);R?H(ht.x,ht.y+A[h-1].y,A[h-1].x+pe):H(ht.x,ht.y,u+pe)}}}de(),Te();function de(){const ce=i.length/3;if(d){let oe=0,pe=le*oe;for(let Ce=0;Ce<re;Ce++){const Ae=G[Ce];Ve(Ae[2]+pe,Ae[1]+pe,Ae[0]+pe)}oe=h+v*2,pe=le*oe;for(let Ce=0;Ce<re;Ce++){const Ae=G[Ce];Ve(Ae[0]+pe,Ae[1]+pe,Ae[2]+pe)}}else{for(let oe=0;oe<re;oe++){const pe=G[oe];Ve(pe[2],pe[1],pe[0])}for(let oe=0;oe<re;oe++){const pe=G[oe];Ve(pe[0]+le*h,pe[1]+le*h,pe[2]+le*h)}}n.addGroup(ce,i.length/3-ce,0)}function Te(){const ce=i.length/3;let oe=0;we(q,oe),oe+=q.length;for(let pe=0,Ce=te.length;pe<Ce;pe++){const Ae=te[pe];we(Ae,oe),oe+=Ae.length}n.addGroup(ce,i.length/3-ce,1)}function we(ce,oe){let pe=ce.length;for(;--pe>=0;){const Ce=pe;let Ae=pe-1;Ae<0&&(Ae=ce.length-1);for(let ze=0,Oe=h+v*2;ze<Oe;ze++){const De=le*ze,qe=le*(ze+1),ht=oe+Ce+De,N=oe+Ae+De,C=oe+Ae+qe,Z=oe+Ce+qe;Be(ht,N,C,Z)}}}function H(ce,oe,pe){c.push(ce),c.push(oe),c.push(pe)}function Ve(ce,oe,pe){xe(ce),xe(oe),xe(pe);const Ce=i.length/3,Ae=I.generateTopUV(n,i,Ce-3,Ce-2,Ce-1);Ie(Ae[0]),Ie(Ae[1]),Ie(Ae[2])}function Be(ce,oe,pe,Ce){xe(ce),xe(oe),xe(Ce),xe(oe),xe(pe),xe(Ce);const Ae=i.length/3,ze=I.generateSideWallUV(n,i,Ae-6,Ae-3,Ae-2,Ae-1);Ie(ze[0]),Ie(ze[1]),Ie(ze[3]),Ie(ze[1]),Ie(ze[2]),Ie(ze[3])}function xe(ce){i.push(c[ce*3+0]),i.push(c[ce*3+1]),i.push(c[ce*3+2])}function Ie(ce){s.push(ce.x),s.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q_(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vh[i.type]().fromJSON(i)),new ba(n,e.options)}}const Z_={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new Ee(s,o),new Ee(a,c),new Ee(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],m=e[i*3+1],M=e[i*3+2],E=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ee(o,1-c),new Ee(l,1-u),new Ee(d,1-M),new Ee(E,1-p)]:[new Ee(a,1-c),new Ee(h,1-u),new Ee(m,1-M),new Ee(v,1-p)]}};function Q_(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class es extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fi extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bn extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ai(r,e,t){return Eh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Eh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function e0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Sh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ts{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t0 extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:s=e,a=2*t-n;break;case _c:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gc:o=e,c=2*n-t;break;case _c:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,M=(n-t)/(i-t),E=M*M,v=E*M,p=-d*v+2*d*E-d*M,I=(1+d)*v+(-1.5-2*d)*E+(-.5+d)*M+1,A=(-1-m)*v+(1.5+m)*E+.5*M,R=m*v-m*E;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+I*o[l+L]+A*o[c+L]+R*o[u+L];return s}}class n0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class i0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new i0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new n0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new t0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ai(n,s,o),this.values=ai(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Eh(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=ai(this.times),t=ai(this.values),n=this.getValueSize(),i=this.getInterpolation()===fo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,m=u+n;for(let M=0;M!==n;++M){const E=t[u+M];if(E!==t[d+M]||E!==t[m+M]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=ai(e,0,o),this.values=ai(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ai(this.times,0),t=ai(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=xr;class Ar extends Fn{}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=jr;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Th extends Fn{}Th.prototype.ValueTypeName="color";class Zr extends Fn{}Zr.prototype.ValueTypeName="number";class r0 extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Un.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ui extends Fn{InterpolantFactoryMethodLinear(e){return new r0(this.times,this.values,this.getValueSize(),e)}}Ui.prototype.ValueTypeName="quaternion";Ui.prototype.DefaultInterpolation=xr;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Fn{}br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=jr;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends Fn{}Qr.prototype.ValueTypeName="vector";class s0{constructor(e,t=-1,n,i=Gu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(a0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Fn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=e0(c);c=El(c,1,h),l=El(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,M,E){if(m.length!==0){const v=[],p=[];Sh(m,v,p,M),v.length!==0&&E.push(new u(d,v,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let M;for(M=0;M<d.length;M++)if(d[M].morphTargets)for(let E=0;E<d[M].morphTargets.length;E++)m[d[M].morphTargets[E]]=-1;for(const E in m){const v=[],p=[];for(let I=0;I!==d[M].morphTargets.length;++I){const A=d[M];v.push(A.time),p.push(A.morphTarget===E?1:0)}i.push(new Zr(".morphTargetInfluence["+E+"]",v,p))}c=m.length*o}else{const m=".bones["+t[u].name+"]";n(Qr,m+".position",d,"pos",i),n(Ui,m+".quaternion",d,"rot",i),n(Qr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function o0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return Th;case"quaternion":return Ui;case"bool":case"boolean":return Ar;case"string":return br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function a0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=o0(r.type);if(r.times===void 0){const t=[],n=[];Sh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Er={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class c0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],M=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return M}return null}}}const l0=new c0;class Bi{constructor(e){this.manager=e!==void 0?e:l0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $n={};class h0 extends Error{constructor(e,t){super(e),this.response=t}}class js extends Bi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=$n[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,M=m!==0;let E=0;const v=new ReadableStream({start(p){I();function I(){u.read().then(({done:A,value:R})=>{if(A)p.close();else{E+=R.byteLength;const L=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:m});for(let O=0,k=h.length;O<k;O++){const X=h[O];X.onProgress&&X.onProgress(L)}p.enqueue(R),I()}})}}});return new Response(v)}else throw new h0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(M=>m.decode(M))}}}).then(l=>{Er.add(e,l);const h=$n[e];delete $n[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),l;delete $n[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u0 extends Bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Er.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qr("img");function c(){h(),Er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ah extends Bi{constructor(e){super(e)}load(e,t,n,i){const s=new jt,o=new u0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}let wa=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const zo=new ot,Sl=new z,Tl=new z;class Ra{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f0 extends Ra{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class d0 extends wa{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new f0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Al=new ot,Ur=new z,Ho=new z;class p0 extends Ra{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ur),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al)}}class m0 extends wa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new p0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g0 extends Ra{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bh extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new g0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _0 extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Er.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Er.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Ca="\\[\\]\\.:\\/",v0=new RegExp("["+Ca+"]","g"),La="[^"+Ca+"]",x0="[^"+Ca.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",La),M0=/(WCOD+)?/.source.replace("WCOD",x0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",La),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",La),T0=new RegExp("^"+y0+M0+E0+S0+"$"),A0=["material","materials","bones","map"];class b0{constructor(e,t,n){const i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){const t=T0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);A0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=b0;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wh{constructor(e,t,n=0,i=1/0){this.ray=new Vs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return oa(e,this,n,t),n.sort(bl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)oa(e[i],this,n,t);return n.sort(bl),n}}function bl(r,e){return r.distance-e.distance}function oa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)oa(i[s],e,t,!0)}}class wl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w0{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new na,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const I=[];for(let A=0,R=p.length;A<R;A++){const L=p[A],O=new Fs;O.curves=L.curves,I.push(O)}return I}function n(p,I){const A=I.length;let R=!1;for(let L=A-1,O=0;O<A;L=O++){let k=I[L],X=I[O],b=X.x-k.x,D=X.y-k.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(k=I[O],b=-b,X=I[L],D=-D),p.y<k.y||p.y>X.y)continue;if(p.y===k.y){if(p.x===k.x)return!0}else{const te=D*(p.x-k.x)-b*(p.y-k.y);if(te===0)return!0;if(te<0)continue;R=!R}}else{if(p.y!==k.y)continue;if(X.x<=p.x&&p.x<=k.x||k.x<=p.x&&p.x<=X.x)return!0}}return R}const i=dr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Fs,c.curves=a.curves,l.push(c),l;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let m=[],M=0,E;d[M]=void 0,m[M]=[];for(let p=0,I=s.length;p<I;p++)a=s[p],E=a.getPoints(),o=i(E),o=e?!o:o,o?(!h&&d[M]&&M++,d[M]={s:new Fs,p:E},d[M].s.curves=a.curves,h&&M++,m[M]=[]):m[M].push({h:a,p:E[0]});if(!d[0])return t(s);if(d.length>1){let p=!1,I=0;for(let A=0,R=d.length;A<R;A++)u[A]=[];for(let A=0,R=d.length;A<R;A++){const L=m[A];for(let O=0;O<L.length;O++){const k=L[O];let X=!0;for(let b=0;b<d.length;b++)n(k.p,d[b].p)&&(A!==b&&I++,X?(X=!1,u[b].push(k)):p=!0);X&&u[A].push(k)}}I>0&&p===!1&&(m=u)}let v;for(let p=0,I=d.length;p<I;p++){c=d[p].s,l.push(c),v=m[p];for(let A=0,R=v.length;A<R;A++)c.holes.push(v[A].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);class R0{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",n[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),s.innerHTML=i,s}}const Rl=R0,Cl={type:"change"},Go={type:"start"},Ll={type:"end"};class C0 extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",qe),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cl),n.update(),s=i.NONE},this.update=function(){const _=new z,g=new Un().setFromUnitVectors(e.up,new z(0,1,0)),T=g.clone().invert(),U=new z,F=new Un,ie=2*Math.PI;return function(){const Q=n.object.position;_.copy(Q).sub(n.target),_.applyQuaternion(g),a.setFromVector3(_),n.autoRotate&&s===i.NONE&&b(k()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let K=n.minAzimuthAngle,Me=n.maxAzimuthAngle;return isFinite(K)&&isFinite(Me)&&(K<-Math.PI?K+=ie:K>Math.PI&&(K-=ie),Me<-Math.PI?Me+=ie:Me>Math.PI&&(Me-=ie),K<=Me?a.theta=Math.max(K,Math.min(Me,a.theta)):a.theta=a.theta>(K+Me)/2?Math.max(K,a.theta):Math.min(Me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),_.setFromSpherical(a),_.applyQuaternion(T),Q.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||U.distanceToSquared(n.object.position)>o||8*(1-F.dot(n.object.quaternion))>o?(n.dispatchEvent(Cl),U.copy(n.object.position),F.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",pe),n.domElement.removeEventListener("pointercancel",Ae),n.domElement.removeEventListener("wheel",De),n.domElement.removeEventListener("pointermove",Ce),n.domElement.removeEventListener("pointerup",Ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",qe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new wl,c=new wl;let l=1;const h=new z;let u=!1;const d=new Ee,m=new Ee,M=new Ee,E=new Ee,v=new Ee,p=new Ee,I=new Ee,A=new Ee,R=new Ee,L=[],O={};function k(){return 2*Math.PI/60/60*n.autoRotateSpeed}function X(){return Math.pow(.95,n.zoomSpeed)}function b(_){c.theta-=_}function D(_){c.phi-=_}const te=function(){const _=new z;return function(T,U){_.setFromMatrixColumn(U,0),_.multiplyScalar(-T),h.add(_)}}(),ae=function(){const _=new z;return function(T,U){n.screenSpacePanning===!0?_.setFromMatrixColumn(U,1):(_.setFromMatrixColumn(U,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(T),h.add(_)}}(),G=function(){const _=new z;return function(T,U){const F=n.domElement;if(n.object.isPerspectiveCamera){const ie=n.object.position;_.copy(ie).sub(n.target);let Y=_.length();Y*=Math.tan(n.object.fov/2*Math.PI/180),te(2*T*Y/F.clientHeight,n.object.matrix),ae(2*U*Y/F.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(T*(n.object.right-n.object.left)/n.object.zoom/F.clientWidth,n.object.matrix),ae(U*(n.object.top-n.object.bottom)/n.object.zoom/F.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(_){n.object.isPerspectiveCamera?l/=_:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*_)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(_){n.object.isPerspectiveCamera?l*=_:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/_)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(_){d.set(_.clientX,_.clientY)}function re(_){I.set(_.clientX,_.clientY)}function he(_){E.set(_.clientX,_.clientY)}function _e(_){m.set(_.clientX,_.clientY),M.subVectors(m,d).multiplyScalar(n.rotateSpeed);const g=n.domElement;b(2*Math.PI*M.x/g.clientHeight),D(2*Math.PI*M.y/g.clientHeight),d.copy(m),n.update()}function me(_){A.set(_.clientX,_.clientY),R.subVectors(A,I),R.y>0?q(X()):R.y<0&&j(X()),I.copy(A),n.update()}function Pe(_){v.set(_.clientX,_.clientY),p.subVectors(v,E).multiplyScalar(n.panSpeed),G(p.x,p.y),E.copy(v),n.update()}function ye(_){_.deltaY<0?j(X()):_.deltaY>0&&q(X()),n.update()}function ne(_){let g=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),g=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),g=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),g=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),g=!0;break}g&&(_.preventDefault(),n.update())}function de(){if(L.length===1)d.set(L[0].pageX,L[0].pageY);else{const _=.5*(L[0].pageX+L[1].pageX),g=.5*(L[0].pageY+L[1].pageY);d.set(_,g)}}function Te(){if(L.length===1)E.set(L[0].pageX,L[0].pageY);else{const _=.5*(L[0].pageX+L[1].pageX),g=.5*(L[0].pageY+L[1].pageY);E.set(_,g)}}function we(){const _=L[0].pageX-L[1].pageX,g=L[0].pageY-L[1].pageY,T=Math.sqrt(_*_+g*g);I.set(0,T)}function H(){n.enableZoom&&we(),n.enablePan&&Te()}function Ve(){n.enableZoom&&we(),n.enableRotate&&de()}function Be(_){if(L.length==1)m.set(_.pageX,_.pageY);else{const T=S(_),U=.5*(_.pageX+T.x),F=.5*(_.pageY+T.y);m.set(U,F)}M.subVectors(m,d).multiplyScalar(n.rotateSpeed);const g=n.domElement;b(2*Math.PI*M.x/g.clientHeight),D(2*Math.PI*M.y/g.clientHeight),d.copy(m)}function xe(_){if(L.length===1)v.set(_.pageX,_.pageY);else{const g=S(_),T=.5*(_.pageX+g.x),U=.5*(_.pageY+g.y);v.set(T,U)}p.subVectors(v,E).multiplyScalar(n.panSpeed),G(p.x,p.y),E.copy(v)}function Ie(_){const g=S(_),T=_.pageX-g.x,U=_.pageY-g.y,F=Math.sqrt(T*T+U*U);A.set(0,F),R.set(0,Math.pow(A.y/I.y,n.zoomSpeed)),q(R.y),I.copy(A)}function ce(_){n.enableZoom&&Ie(_),n.enablePan&&xe(_)}function oe(_){n.enableZoom&&Ie(_),n.enableRotate&&Be(_)}function pe(_){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",Ce),n.domElement.addEventListener("pointerup",Ae)),Z(_),_.pointerType==="touch"?ht(_):ze(_))}function Ce(_){n.enabled!==!1&&(_.pointerType==="touch"?N(_):Oe(_))}function Ae(_){ge(_),L.length===0&&(n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",Ce),n.domElement.removeEventListener("pointerup",Ae)),n.dispatchEvent(Ll),s=i.NONE}function ze(_){let g;switch(_.button){case 0:g=n.mouseButtons.LEFT;break;case 1:g=n.mouseButtons.MIDDLE;break;case 2:g=n.mouseButtons.RIGHT;break;default:g=-1}switch(g){case Hi.DOLLY:if(n.enableZoom===!1)return;re(_),s=i.DOLLY;break;case Hi.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;he(_),s=i.PAN}else{if(n.enableRotate===!1)return;le(_),s=i.ROTATE}break;case Hi.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;le(_),s=i.ROTATE}else{if(n.enablePan===!1)return;he(_),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Go)}function Oe(_){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;_e(_);break;case i.DOLLY:if(n.enableZoom===!1)return;me(_);break;case i.PAN:if(n.enablePan===!1)return;Pe(_);break}}function De(_){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(_.preventDefault(),n.dispatchEvent(Go),ye(_),n.dispatchEvent(Ll))}function qe(_){n.enabled===!1||n.enablePan===!1||ne(_)}function ht(_){switch(ve(_),L.length){case 1:switch(n.touches.ONE){case Gi.ROTATE:if(n.enableRotate===!1)return;de(),s=i.TOUCH_ROTATE;break;case Gi.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Gi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(),s=i.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Go)}function N(_){switch(ve(_),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(_),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xe(_),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(_),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(_),n.update();break;default:s=i.NONE}}function C(_){n.enabled!==!1&&_.preventDefault()}function Z(_){L.push(_)}function ge(_){delete O[_.pointerId];for(let g=0;g<L.length;g++)if(L[g].pointerId==_.pointerId){L.splice(g,1);return}}function ve(_){let g=O[_.pointerId];g===void 0&&(g=new Ee,O[_.pointerId]=g),g.set(_.pageX,_.pageY)}function S(_){const g=_.pointerId===L[0].pointerId?L[1]:L[0];return O[g.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",pe),n.domElement.addEventListener("pointercancel",Ae),n.domElement.addEventListener("wheel",De,{passive:!1}),this.update()}}function Pl(r,e){if(e===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ko||e===Xl){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ko)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class L0 extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new U0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new N0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new $0(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=sa.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new js(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rh){try{o[mt.KHR_BINARY_GLTF]=new j0(e)}catch(u){i&&i(u);return}s=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ov(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new D0;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new q0(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new Y0;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new K0;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function P0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I0{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ke(16777215);c.color!==void 0&&h.fromArray(c.color);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new m0(h),l.distance=u;break;case"spot":l=new d0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class D0{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ti}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,je))}return Promise.all(i)}}class N0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class U0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(s)}}class O0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class F0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,je)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class B0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class k0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke(a[0],a[1],a[2]),Promise.all(s)}}class z0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class H0{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,je)),Promise.all(s)}}class G0{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class V0{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class W0{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class X0{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}}class $0{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const M of u){const E=new ot,v=new z,p=new Un,I=new z(1,1,1),A=new v_(M.geometry,M.material,d);for(let R=0;R<d;R++)c.TRANSLATION&&v.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,R),c.SCALE&&I.fromBufferAttribute(c.SCALE,R),A.setMatrixAt(R,E.compose(v,p,I));for(const R in c)R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&M.geometry.setAttribute(R,c[R]);bt.prototype.copy.call(A,M),this.parser.assignFinalMaterial(A),m.push(A)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Rh="glTF",Or=12,Il={JSON:1313821514,BIN:5130562};class j0{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Or,s=new DataView(e,Or);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Il.JSON){const l=new Uint8Array(e,Or+o,a);this.content=n.decode(l)}else if(c===Il.BIN){const l=Or+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=aa[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=aa[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],m=pr[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const M=d.attributes[m],E=c[m];E!==void 0&&(M.normalized=E)}u(d)},a,l)})})}}class Y0{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class K0{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class Ch extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,M=e*l,E=M-l,v=-2*m+3*d,p=m-d,I=1-v,A=p-d+u;for(let R=0;R!==a;R++){const L=o[E+R+a],O=o[E+R+c]*h,k=o[M+R+a],X=o[M+R]*h;s[R]=I*L+A*O+v*k+p*X}return s}}const J0=new Un;class Z0 extends Ch{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return J0.fromArray(s).normalize().toArray(s),s}}const mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dl={9728:Ht,9729:sn,9984:Yo,9985:Vl,9986:Us,9987:Li},Nl={33071:gn,33648:Bs,10497:_r},Vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},aa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Q0={CUBICSPLINE:void 0,LINEAR:xr,STEP:jr},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ev(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),r.DefaultMaterial}function Fr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function nv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iv(r){const e=r.extensions&&r.extensions[mt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ul(e.attributes):t=r.indices+":"+Ul(r.attributes)+":"+r.mode,t}function Ul(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ca(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const sv=new ot;class ov{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new P0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ah(this.options.manager):this.textureLoader=new _0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Fr(s,a,i),li(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(sa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Vo[i.type],a=pr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Gt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Vo[i.type],l=pr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,M=i.normalized===!0;let E,v;if(m&&m!==u){const p=Math.floor(d/m),I="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let A=t.cache.get(I);A||(E=new l(a,p*m,i.count*m/h),A=new f_(E,m/h),t.cache.add(I,A)),v=new ya(A,c,d%m/h,M)}else a===null?E=new l(i.count*c):E=new l(a,d,i.count*c),v=new Gt(E,c,M);if(i.sparse!==void 0){const p=Vo.SCALAR,I=pr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,R=i.sparse.values.byteOffset||0,L=new I(o[1],A,i.sparse.count*p),O=new l(o[2],R,i.sparse.count*c);a!==null&&(v=new Gt(v.array.slice(),v.itemSize,v.normalized));for(let k=0,X=L.length;k<X;k++){const b=L[k];if(v.setX(b,O[k*c]),c>=2&&v.setY(b,O[k*c+1]),c>=3&&v.setZ(b,O[k*c+2]),c>=4&&v.setW(b,O[k*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Dl[d.magFilter]||sn,h.minFilter=Dl[d.minFilter]||Li,h.wrapS=Nl[d.wrapS]||_r,h.wrapT=Nl[d.wrapT]||_r,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let M=d;t.isImageBitmapLoader===!0&&(M=function(E){const v=new jt(E);v.needsUpdate=!0,d(v)}),t.load(sa.resolveURL(u,s.path),M,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||rv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ph,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new dh,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return es}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[mt.KHR_MATERIALS_UNLIT]){const u=i[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,je)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Dn);const h=s.alphaMode||Wo.OPAQUE;if(h===Wo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ti&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==Ti&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ti&&(a.emissive=new Ke().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Ti&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,je)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),li(u,s),t.associations.set(u,{materials:e}),s.extensions&&Fr(i,u,s),u})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ol(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=iv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ol(new fn,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?ev(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,M=h.length;m<M;m++){const E=h[m],v=o[m];let p;const I=l[m];if(v.mode===mn.TRIANGLES||v.mode===mn.TRIANGLE_STRIP||v.mode===mn.TRIANGLE_FAN||v.mode===void 0)p=s.isSkinnedMesh===!0?new p_(E,I):new $t(E,I),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),v.mode===mn.TRIANGLE_STRIP?p.geometry=Pl(p.geometry,Xl):v.mode===mn.TRIANGLE_FAN&&(p.geometry=Pl(p.geometry,Ko));else if(v.mode===mn.LINES)p=new x_(E,I);else if(v.mode===mn.LINE_STRIP)p=new Ea(E,I);else if(v.mode===mn.LINE_LOOP)p=new y_(E,I);else if(v.mode===mn.POINTS)p=new M_(E,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(p.geometry.morphAttributes).length>0&&nv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),li(p,s),v.extensions&&Fr(i,p,v),t.assignFinalMaterial(p),u.push(p)}for(let m=0,M=u.length;m<M;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return u[0];const d=new Ai;t.associations.set(d,{meshes:e});for(let m=0,M=u.length;m<M;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(cf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new va(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ot;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ma(a,c)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],o=[],a=[],c=[],l=[];for(let h=0,u=n.channels.length;h<u;h++){const d=n.channels[h],m=n.samplers[d.sampler],M=d.target,E=M.node,v=n.parameters!==void 0?n.parameters[m.input]:m.input,p=n.parameters!==void 0?n.parameters[m.output]:m.output;M.node!==void 0&&(s.push(this.getDependency("node",E)),o.push(this.getDependency("accessor",v)),a.push(this.getDependency("accessor",p)),c.push(m),l.push(M))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(h){const u=h[0],d=h[1],m=h[2],M=h[3],E=h[4],v=[];for(let p=0,I=u.length;p<I;p++){const A=u[p],R=d[p],L=m[p],O=M[p],k=E[p];if(A===void 0)continue;A.updateMatrix();let X;switch(ci[k.path]){case ci.weights:X=Zr;break;case ci.rotation:X=Ui;break;case ci.position:case ci.scale:default:X=Qr;break}const b=A.name?A.name:A.uuid,D=O.interpolation!==void 0?Q0[O.interpolation]:xr,te=[];ci[k.path]===ci.weights?A.traverse(function(G){G.morphTargetInfluences&&te.push(G.name?G.name:G.uuid)}):te.push(b);let ae=L.array;if(L.normalized){const G=ca(ae.constructor),q=new Float32Array(ae.length);for(let j=0,le=ae.length;j<le;j++)q[j]=ae[j]*G;ae=q}for(let G=0,q=te.length;G<q;G++){const j=new X(te[G]+"."+ci[k.path],R.array,ae,D);O.interpolation==="CUBICSPLINE"&&(j.createInterpolant=function(re){const he=this instanceof Ui?Z0:Ch;return new he(this.times,this.values,this.getValueSize()/3,re)},j.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(j)}}return new s0(i,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,sv)});for(let m=0,M=u.length;m<M;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new fh:l.length>1?h=new Ai:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),li(h,s),s.extensions&&Fr(n,h,s),s.matrix!==void 0){const u=new ot;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ai;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&Fr(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of i.associations)(d instanceof wn||d instanceof jt)&&u.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=l(s),s})}}function av(r,e,t){const n=e.attributes,i=new Rn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const h=ca(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,c=new z;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,M=d.max;if(m!==void 0&&M!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(M[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(M[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(M[2]))),d.normalized){const E=ca(pr[d.componentType]);c.multiplyScalar(E)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ol(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=aa[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return li(r,e),av(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tv(r,e.targets,t):r})}class cv extends Bi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new js(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=s.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new lv(e)}}class lv{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=hv(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function hv(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=s;else{const u=uv(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function uv(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new w0;let a,c,l,h,u,d,m,M;if(s.o){const E=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,p=E.length;v<p;)switch(E[v++]){case"m":a=E[v++]*e+t,c=E[v++]*e+n,o.moveTo(a,c);break;case"l":a=E[v++]*e+t,c=E[v++]*e+n,o.lineTo(a,c);break;case"q":l=E[v++]*e+t,h=E[v++]*e+n,u=E[v++]*e+t,d=E[v++]*e+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=E[v++]*e+t,h=E[v++]*e+n,u=E[v++]*e+t,d=E[v++]*e+n,m=E[v++]*e+t,M=E[v++]*e+n,o.bezierCurveTo(u,d,m,M,l,h);break}}return{offsetX:s.ha*e,path:o}}var Fl=class{constructor(r,e){Ze(this,"target");Ze(this,"name");Ze(this,"intersected");Ze(this,"wasIntersected",!1);Ze(this,"distance");this.target=r,this.name=e,this.intersected=!1,this.distance=0}},rn=class{constructor(r,e=null){Ze(this,"type");Ze(this,"cancelBubble");Ze(this,"originalEvent");Ze(this,"coords",new Ee(0,0));Ze(this,"distance",0);Ze(this,"intersected",!1);this.cancelBubble=!1,this.type=r,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},fv=class{constructor(r,e,t,n){Ze(this,"renderer");Ze(this,"camera");Ze(this,"domElement");Ze(this,"bindEventsOnBodyElement");Ze(this,"autoAdd");Ze(this,"scene");Ze(this,"mouse");Ze(this,"supportsPointerEvents");Ze(this,"interactiveObjects");Ze(this,"closestObject");Ze(this,"raycaster");Ze(this,"treatTouchEventsAsMouseEvents");Ze(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Ze(this,"add",(r,e=[])=>{if(r&&!this.interactiveObjects.find(t=>t.target===r))if(e.length>0)e.forEach(t=>{let n=r.getObjectByName(t);if(n){let i=new Fl(n,t);this.interactiveObjects.push(i)}});else{let t=new Fl(r,r.name);this.interactiveObjects.push(t)}});Ze(this,"remove",(r,e=[])=>{!r||(e.length>0?e.forEach(t=>{let n=r.getObjectByName(t);n&&(this.interactiveObjects=this.interactiveObjects.filter(i=>i.target!==n))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==r))});Ze(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(n=>{n.target&&this.checkIntersection(n)}),this.interactiveObjects.sort(function(n,i){return n.distance-i.distance});let r=this.interactiveObjects.find(n=>n.intersected)??null;if(r!=this.closestObject){if(this.closestObject){let n=new rn("mouseout");this.dispatch(this.closestObject,n)}if(r){let n=new rn("mouseover");this.dispatch(r,n)}this.closestObject=r}let e;this.interactiveObjects.forEach(n=>{!n.intersected&&n.wasIntersected&&(e||(e=new rn("mouseleave")),this.dispatch(n,e))});let t;this.interactiveObjects.forEach(n=>{n.intersected&&!n.wasIntersected&&(t||(t=new rn("mouseenter")),this.dispatch(n,t))})});Ze(this,"checkIntersection",r=>{let e=this.raycaster.intersectObjects([r.target],!0);if(r.wasIntersected=r.intersected,e.length>0){let t=e[0].distance;e.forEach(n=>{n.distance<t&&(t=n.distance)}),r.intersected=!0,r.distance=t}else r.intersected=!1});Ze(this,"onDocumentMouseMove",r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new rn("mousemove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"onDocumentPointerMove",r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY);let e=new rn("pointermove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"onTouchMove",r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY);let e=new rn(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"onMouseClick",r=>{this.update();let e=new rn("click",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ze(this,"onMouseDown",r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new rn("mousedown",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ze(this,"onPointerDown",r=>{this.mapPositionToPoint(this.mouse,r.clientX,r.clientY),this.update();let e=new rn("pointerdown",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ze(this,"onTouchStart",r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new rn(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",r);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ze(this,"onMouseUp",r=>{let e=new rn("mouseup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"onPointerUp",r=>{let e=new rn("pointerup",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"onTouchEnd",r=>{r.touches.length>0&&this.mapPositionToPoint(this.mouse,r.touches[0].clientX,r.touches[0].clientY),this.update();let e=new rn(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",r);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ze(this,"dispatch",(r,e)=>{r.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=r.distance,e.intersected=r.intersected,r.target.dispatchEvent(e))});Ze(this,"mapPositionToPoint",(r,e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();r.x=(e-n.left)/n.width*2-1,r.y=-((t-n.top)/n.height)*2+1});this.renderer=r,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=n&&typeof n.bindEventsOnBodyElement<"u"?n.bindEventsOnBodyElement:!0,this.scene=n&&typeof n.scene<"u"?n.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(i=>{this.add(i),i.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=n&&typeof n.autoAdd<"u"?n.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Ee(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new wh,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};class dv extends Bi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new js(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const M=[115,111,108,105,100];for(let E=0;E<5;E++)if(n(M,h,E))return!1;return!0}function n(l,h,u){for(let d=0,m=l.length;d<m;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function i(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,m,M,E=!1,v,p,I,A,R;for(let D=0;D<80-10;D++)h.getUint32(D,!1)==1129270351&&h.getUint8(D+4)==82&&h.getUint8(D+5)==61&&(E=!0,v=new Float32Array(u*3*3),p=h.getUint8(D+6)/255,I=h.getUint8(D+7)/255,A=h.getUint8(D+8)/255,R=h.getUint8(D+9)/255);const L=84,O=12*4+2,k=new fn,X=new Float32Array(u*3*3),b=new Float32Array(u*3*3);for(let D=0;D<u;D++){const te=L+D*O,ae=h.getFloat32(te,!0),G=h.getFloat32(te+4,!0),q=h.getFloat32(te+8,!0);if(E){const j=h.getUint16(te+48,!0);j&32768?(d=p,m=I,M=A):(d=(j&31)/31,m=(j>>5&31)/31,M=(j>>10&31)/31)}for(let j=1;j<=3;j++){const le=te+j*12,re=D*3*3+(j-1)*3;X[re]=h.getFloat32(le,!0),X[re+1]=h.getFloat32(le+4,!0),X[re+2]=h.getFloat32(le+8,!0),b[re]=ae,b[re+1]=G,b[re+2]=q,E&&(v[re]=d,v[re+1]=m,v[re+2]=M)}}return k.setAttribute("position",new Gt(X,3)),k.setAttribute("normal",new Gt(b,3)),E&&(k.setAttribute("color",new Gt(v,3)),k.hasColors=!0,k.alpha=R),k}function s(l){const h=new fn,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let m=0;const M=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,E=new RegExp("vertex"+M+M+M,"g"),v=new RegExp("normal"+M+M+M,"g"),p=[],I=[],A=new z;let R,L=0,O=0,k=0;for(;(R=u.exec(l))!==null;){O=k;const X=R[0];for(;(R=d.exec(X))!==null;){let te=0,ae=0;const G=R[0];for(;(R=v.exec(G))!==null;)A.x=parseFloat(R[1]),A.y=parseFloat(R[2]),A.z=parseFloat(R[3]),ae++;for(;(R=E.exec(G))!==null;)p.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),I.push(A.x,A.y,A.z),te++,k++;ae!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),te!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const b=O,D=k-O;h.addGroup(b,D,L),L++}return h.setAttribute("position",new un(p,3)),h.setAttribute("normal",new un(I,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=a(e);return t(c)?i(c):s(o(e))}}class pv extends ba{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},la={exports:{}};(function(r,e){(function(t,n){n(e)})(Xo,function(t){function n(S,_){return _.forEach(function(g){g&&typeof g!="string"&&!Array.isArray(g)&&Object.keys(g).forEach(function(T){if(T!=="default"&&!(T in S)){var U=Object.getOwnPropertyDescriptor(g,T);Object.defineProperty(S,T,U.get?U:{enumerable:!0,get:function(){return g[T]}})}})}),Object.freeze(S)}ArrayBuffer.isView||(ArrayBuffer.isView=function(S){return S!==null&&typeof S=="object"&&S.buffer instanceof ArrayBuffer}),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var i=function(S,_){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,T){g.__proto__=T}||function(g,T){for(var U in T)Object.prototype.hasOwnProperty.call(T,U)&&(g[U]=T[U])},i(S,_)};function s(S,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");i(S,_);function g(){this.constructor=S}S.prototype=_===null?Object.create(_):(g.prototype=_.prototype,new g)}function o(S,_,g,T){function U(F){return F instanceof g?F:new g(function(ie){ie(F)})}return new(g||(g=Promise))(function(F,ie){function Y(Me){try{K(T.next(Me))}catch(Le){ie(Le)}}function Q(Me){try{K(T.throw(Me))}catch(Le){ie(Le)}}function K(Me){Me.done?F(Me.value):U(Me.value).then(Y,Q)}K((T=T.apply(S,_||[])).next())})}function a(S,_){var g={label:0,sent:function(){if(F[0]&1)throw F[1];return F[1]},trys:[],ops:[]},T,U,F,ie;return ie={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(ie[Symbol.iterator]=function(){return this}),ie;function Y(K){return function(Me){return Q([K,Me])}}function Q(K){if(T)throw new TypeError("Generator is already executing.");for(;ie&&(ie=0,K[0]&&(g=0)),g;)try{if(T=1,U&&(F=K[0]&2?U.return:K[0]?U.throw||((F=U.return)&&F.call(U),0):U.next)&&!(F=F.call(U,K[1])).done)return F;switch(U=0,F&&(K=[K[0]&2,F.value]),K[0]){case 0:case 1:F=K;break;case 4:return g.label++,{value:K[1],done:!1};case 5:g.label++,U=K[1],K=[0];continue;case 7:K=g.ops.pop(),g.trys.pop();continue;default:if(F=g.trys,!(F=F.length>0&&F[F.length-1])&&(K[0]===6||K[0]===2)){g=0;continue}if(K[0]===3&&(!F||K[1]>F[0]&&K[1]<F[3])){g.label=K[1];break}if(K[0]===6&&g.label<F[1]){g.label=F[1],F=K;break}if(F&&g.label<F[2]){g.label=F[2],g.ops.push(K);break}F[2]&&g.ops.pop(),g.trys.pop();continue}K=_.call(S,g)}catch(Me){K=[6,Me],U=0}finally{T=F=0}if(K[0]&5)throw K[1];return{value:K[0]?K[1]:void 0,done:!0}}}function c(S,_){_.headers=S.headers||{},_.statusMessage=S.statusText,_.statusCode=S.status,_.data=S.response}function l(S,_,g){return new Promise(function(T,U){g=g||{};var F=new XMLHttpRequest,ie,Y,Q,K=g.body,Me=g.headers||{};g.timeout&&(F.timeout=g.timeout),F.ontimeout=F.onerror=function(Le){Le.timeout=Le.type=="timeout",U(Le)},F.open(S,_.href||_),F.onload=function(){for(Q=F.getAllResponseHeaders().trim().split(/[\r\n]+/),c(F,F);Y=Q.shift();)Y=Y.split(": "),F.headers[Y.shift().toLowerCase()]=Y.join(": ");if(Y=F.headers["content-type"],Y&&~Y.indexOf("application/json"))try{F.data=JSON.parse(F.data,g.reviver)}catch(Le){return c(F,Le),U(Le)}(F.status>=400?U:T)(F)},typeof FormData<"u"&&K instanceof FormData||K&&typeof K=="object"&&(Me["content-type"]="application/json",K=JSON.stringify(K)),F.withCredentials=!!g.withCredentials;for(ie in Me)F.setRequestHeader(ie,Me[ie]);F.send(K)})}var h=l.bind(l,"GET"),u=l.bind(l,"POST"),d=l.bind(l,"PATCH"),m=l.bind(l,"DELETE"),M=l.bind(l,"PUT"),E=m,v=h,p=d,I=u,A=M,R=l,L={del:E,get:v,patch:p,post:I,put:A,send:R},O=n({__proto__:null,default:L,del:E,get:v,patch:p,post:I,put:A,send:R},[L]),k;(function(S){S[S.CONSENTED=4e3]="CONSENTED",S[S.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(k||(k={}));var X=function(S){s(_,S);function _(g,T){var U=S.call(this,T)||this;return U.name="ServerError",U.code=g,U}return _}(Error);function b(S,_){if(this._offset=_,S instanceof ArrayBuffer)this._buffer=S,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(S))this._buffer=S.buffer,this._view=new DataView(this._buffer,S.byteOffset,S.byteLength);else throw new Error("Invalid argument")}function D(S,_,g){for(var T="",U=0,F=_,ie=_+g;F<ie;F++){var Y=S.getUint8(F);if(!(Y&128)){T+=String.fromCharCode(Y);continue}if((Y&224)===192){T+=String.fromCharCode((Y&31)<<6|S.getUint8(++F)&63);continue}if((Y&240)===224){T+=String.fromCharCode((Y&15)<<12|(S.getUint8(++F)&63)<<6|(S.getUint8(++F)&63)<<0);continue}if((Y&248)===240){U=(Y&7)<<18|(S.getUint8(++F)&63)<<12|(S.getUint8(++F)&63)<<6|(S.getUint8(++F)&63)<<0,U>=65536?(U-=65536,T+=String.fromCharCode((U>>>10)+55296,(U&1023)+56320)):T+=String.fromCharCode(U);continue}throw new Error("Invalid byte "+Y.toString(16))}return T}b.prototype._array=function(S){for(var _=new Array(S),g=0;g<S;g++)_[g]=this._parse();return _},b.prototype._map=function(S){for(var _="",g={},T=0;T<S;T++)_=this._parse(),g[_]=this._parse();return g},b.prototype._str=function(S){var _=D(this._view,this._offset,S);return this._offset+=S,_},b.prototype._bin=function(S){var _=this._buffer.slice(this._offset,this._offset+S);return this._offset+=S,_},b.prototype._parse=function(){var S=this._view.getUint8(this._offset++),_,g=0,T=0,U=0,F=0;if(S<192)return S<128?S:S<144?this._map(S&15):S<160?this._array(S&15):this._str(S&31);if(S>223)return(255-S+1)*-1;switch(S){case 192:return null;case 194:return!1;case 195:return!0;case 196:return g=this._view.getUint8(this._offset),this._offset+=1,this._bin(g);case 197:return g=this._view.getUint16(this._offset),this._offset+=2,this._bin(g);case 198:return g=this._view.getUint32(this._offset),this._offset+=4,this._bin(g);case 199:if(g=this._view.getUint8(this._offset),T=this._view.getInt8(this._offset+1),this._offset+=2,T===-1){var ie=this._view.getUint32(this._offset);return U=this._view.getInt32(this._offset+4),F=this._view.getUint32(this._offset+8),this._offset+=12,new Date((U*4294967296+F)*1e3+ie/1e6)}return[T,this._bin(g)];case 200:return g=this._view.getUint16(this._offset),T=this._view.getInt8(this._offset+2),this._offset+=3,[T,this._bin(g)];case 201:return g=this._view.getUint32(this._offset),T=this._view.getInt8(this._offset+4),this._offset+=5,[T,this._bin(g)];case 202:return _=this._view.getFloat32(this._offset),this._offset+=4,_;case 203:return _=this._view.getFloat64(this._offset),this._offset+=8,_;case 204:return _=this._view.getUint8(this._offset),this._offset+=1,_;case 205:return _=this._view.getUint16(this._offset),this._offset+=2,_;case 206:return _=this._view.getUint32(this._offset),this._offset+=4,_;case 207:return U=this._view.getUint32(this._offset)*Math.pow(2,32),F=this._view.getUint32(this._offset+4),this._offset+=8,U+F;case 208:return _=this._view.getInt8(this._offset),this._offset+=1,_;case 209:return _=this._view.getInt16(this._offset),this._offset+=2,_;case 210:return _=this._view.getInt32(this._offset),this._offset+=4,_;case 211:return U=this._view.getInt32(this._offset)*Math.pow(2,32),F=this._view.getUint32(this._offset+4),this._offset+=8,U+F;case 212:if(T=this._view.getInt8(this._offset),this._offset+=1,T===0){this._offset+=1;return}return[T,this._bin(1)];case 213:return T=this._view.getInt8(this._offset),this._offset+=1,[T,this._bin(2)];case 214:return T=this._view.getInt8(this._offset),this._offset+=1,T===-1?(_=this._view.getUint32(this._offset),this._offset+=4,new Date(_*1e3)):[T,this._bin(4)];case 215:if(T=this._view.getInt8(this._offset),this._offset+=1,T===0)return U=this._view.getInt32(this._offset)*Math.pow(2,32),F=this._view.getUint32(this._offset+4),this._offset+=8,new Date(U+F);if(T===-1){U=this._view.getUint32(this._offset),F=this._view.getUint32(this._offset+4),this._offset+=8;var Y=(U&3)*4294967296+F;return new Date(Y*1e3+(U>>>2)/1e6)}return[T,this._bin(8)];case 216:return T=this._view.getInt8(this._offset),this._offset+=1,[T,this._bin(16)];case 217:return g=this._view.getUint8(this._offset),this._offset+=1,this._str(g);case 218:return g=this._view.getUint16(this._offset),this._offset+=2,this._str(g);case 219:return g=this._view.getUint32(this._offset),this._offset+=4,this._str(g);case 220:return g=this._view.getUint16(this._offset),this._offset+=2,this._array(g);case 221:return g=this._view.getUint32(this._offset),this._offset+=4,this._array(g);case 222:return g=this._view.getUint16(this._offset),this._offset+=2,this._map(g);case 223:return g=this._view.getUint32(this._offset),this._offset+=4,this._map(g)}throw new Error("Could not parse")};function te(S,_){_===void 0&&(_=0);var g=new b(S,_),T=g._parse();if(g._offset!==S.byteLength)throw new Error(S.byteLength-g._offset+" trailing bytes");return T}var ae=4294967296-1,G=17179869184-1;function q(S,_,g){for(var T=0,U=0,F=g.length;U<F;U++)T=g.charCodeAt(U),T<128?S.setUint8(_++,T):T<2048?(S.setUint8(_++,192|T>>6),S.setUint8(_++,128|T&63)):T<55296||T>=57344?(S.setUint8(_++,224|T>>12),S.setUint8(_++,128|T>>6&63),S.setUint8(_++,128|T&63)):(U++,T=65536+((T&1023)<<10|g.charCodeAt(U)&1023),S.setUint8(_++,240|T>>18),S.setUint8(_++,128|T>>12&63),S.setUint8(_++,128|T>>6&63),S.setUint8(_++,128|T&63))}function j(S){for(var _=0,g=0,T=0,U=S.length;T<U;T++)_=S.charCodeAt(T),_<128?g+=1:_<2048?g+=2:_<55296||_>=57344?g+=3:(T++,g+=4);return g}function le(S,_,g){var T=typeof g,U=0,F=0,ie=0,Y=0,Q=0,K=0;if(T==="string"){if(Q=j(g),Q<32)S.push(Q|160),K=1;else if(Q<256)S.push(217,Q),K=2;else if(Q<65536)S.push(218,Q>>8,Q),K=3;else if(Q<4294967296)S.push(219,Q>>24,Q>>16,Q>>8,Q),K=5;else throw new Error("String too long");return _.push({_str:g,_length:Q,_offset:S.length}),K+Q}if(T==="number")return Math.floor(g)!==g||!isFinite(g)?(S.push(203),_.push({_float:g,_length:8,_offset:S.length}),9):g>=0?g<128?(S.push(g),1):g<256?(S.push(204,g),2):g<65536?(S.push(205,g>>8,g),3):g<4294967296?(S.push(206,g>>24,g>>16,g>>8,g),5):(ie=g/Math.pow(2,32)>>0,Y=g>>>0,S.push(207,ie>>24,ie>>16,ie>>8,ie,Y>>24,Y>>16,Y>>8,Y),9):g>=-32?(S.push(g),1):g>=-128?(S.push(208,g),2):g>=-32768?(S.push(209,g>>8,g),3):g>=-2147483648?(S.push(210,g>>24,g>>16,g>>8,g),5):(ie=Math.floor(g/Math.pow(2,32)),Y=g>>>0,S.push(211,ie>>24,ie>>16,ie>>8,ie,Y>>24,Y>>16,Y>>8,Y),9);if(T==="object"){if(g===null)return S.push(192),1;if(Array.isArray(g)){if(Q=g.length,Q<16)S.push(Q|144),K=1;else if(Q<65536)S.push(220,Q>>8,Q),K=3;else if(Q<4294967296)S.push(221,Q>>24,Q>>16,Q>>8,Q),K=5;else throw new Error("Array too large");for(U=0;U<Q;U++)K+=le(S,_,g[U]);return K}if(g instanceof Date){var Me=g.getTime(),Le=Math.floor(Me/1e3),B=(Me-Le*1e3)*1e6;return Le>=0&&B>=0&&Le<=G?B===0&&Le<=ae?(S.push(214,255,Le>>24,Le>>16,Le>>8,Le),6):(ie=Le/4294967296,Y=Le&4294967295,S.push(215,255,B>>22,B>>14,B>>6,ie,Y>>24,Y>>16,Y>>8,Y),10):(ie=Math.floor(Le/4294967296),Y=Le>>>0,S.push(199,12,255,B>>24,B>>16,B>>8,B,ie>>24,ie>>16,ie>>8,ie,Y>>24,Y>>16,Y>>8,Y),15)}if(g instanceof ArrayBuffer){if(Q=g.byteLength,Q<256)S.push(196,Q),K=2;else if(Q<65536)S.push(197,Q>>8,Q),K=3;else if(Q<4294967296)S.push(198,Q>>24,Q>>16,Q>>8,Q),K=5;else throw new Error("Buffer too large");return _.push({_bin:g,_length:Q,_offset:S.length}),K+Q}if(typeof g.toJSON=="function")return le(S,_,g.toJSON());var J=[],ue="",Se=Object.keys(g);for(U=0,F=Se.length;U<F;U++)ue=Se[U],g[ue]!==void 0&&typeof g[ue]!="function"&&J.push(ue);if(Q=J.length,Q<16)S.push(Q|128),K=1;else if(Q<65536)S.push(222,Q>>8,Q),K=3;else if(Q<4294967296)S.push(223,Q>>24,Q>>16,Q>>8,Q),K=5;else throw new Error("Object too large");for(U=0;U<Q;U++)ue=J[U],K+=le(S,_,ue),K+=le(S,_,g[ue]);return K}if(T==="boolean")return S.push(g?195:194),1;if(T==="undefined")return S.push(192),1;if(typeof g.toJSON=="function")return le(S,_,g.toJSON());throw new Error("Could not encode")}function re(S){var _=[],g=[],T=le(_,g,S),U=new ArrayBuffer(T),F=new DataView(U),ie=0,Y=0,Q=-1;g.length>0&&(Q=g[0]._offset);for(var K,Me=0,Le=0,B=0,J=_.length;B<J;B++)if(F.setUint8(Y+B,_[B]),B+1===Q){if(K=g[ie],Me=K._length,Le=Y+Q,K._bin)for(var ue=new Uint8Array(K._bin),Se=0;Se<Me;Se++)F.setUint8(Le+Se,ue[Se]);else K._str?q(F,Le,K._str):K._float!==void 0&&F.setFloat64(Le,K._float);ie++,Y+=Me,g[ie]&&(Q=g[ie]._offset)}return U}var he=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},_e=globalThis.WebSocket||he,me=function(){function S(_){this.events=_}return S.prototype.send=function(_){_ instanceof ArrayBuffer?this.ws.send(_):Array.isArray(_)&&this.ws.send(new Uint8Array(_).buffer)},S.prototype.connect=function(_){this.ws=new _e(_,this.protocols),this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror},S.prototype.close=function(_,g){this.ws.close(_,g)},Object.defineProperty(S.prototype,"isOpen",{get:function(){return this.ws.readyState===_e.OPEN},enumerable:!1,configurable:!0}),S}(),Pe=function(){function S(){this.events={},this.transport=new me(this.events)}return S.prototype.send=function(_){this.transport.send(_)},S.prototype.connect=function(_){this.transport.connect(_)},S.prototype.close=function(_,g){this.transport.close(_,g)},Object.defineProperty(S.prototype,"isOpen",{get:function(){return this.transport.isOpen},enumerable:!1,configurable:!0}),S}();t.Protocol=void 0,function(S){S[S.HANDSHAKE=9]="HANDSHAKE",S[S.JOIN_ROOM=10]="JOIN_ROOM",S[S.ERROR=11]="ERROR",S[S.LEAVE_ROOM=12]="LEAVE_ROOM",S[S.ROOM_DATA=13]="ROOM_DATA",S[S.ROOM_STATE=14]="ROOM_STATE",S[S.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",S[S.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",S[S.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(t.Protocol||(t.Protocol={})),t.ErrorCode=void 0,function(S){S[S.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",S[S.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",S[S.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",S[S.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",S[S.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",S[S.AUTH_FAILED=4215]="AUTH_FAILED",S[S.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(t.ErrorCode||(t.ErrorCode={}));function ye(S,_){for(var g=S[_++],T="",U=0,F=_,ie=_+g;F<ie;F++){var Y=S[F];if(!(Y&128)){T+=String.fromCharCode(Y);continue}if((Y&224)===192){T+=String.fromCharCode((Y&31)<<6|S[++F]&63);continue}if((Y&240)===224){T+=String.fromCharCode((Y&15)<<12|(S[++F]&63)<<6|(S[++F]&63)<<0);continue}if((Y&248)===240){U=(Y&7)<<18|(S[++F]&63)<<12|(S[++F]&63)<<6|(S[++F]&63)<<0,U>=65536?(U-=65536,T+=String.fromCharCode((U>>>10)+55296,(U&1023)+56320)):T+=String.fromCharCode(U);continue}throw new Error("Invalid byte "+Y.toString(16))}return T}function ne(S){S===void 0&&(S="");for(var _=0,g=0,T=0,U=S.length;T<U;T++)_=S.charCodeAt(T),_<128?g+=1:_<2048?g+=2:_<55296||_>=57344?g+=3:(T++,g+=4);return g+1}var de={};function Te(S,_){de[S]=_}function we(S){var _=de[S];if(!_)throw new Error("missing serializer: "+S);return _}let H=()=>({events:{},emit(S,..._){(this.events[S]||[]).forEach(g=>g(..._))},on(S,_){return(this.events[S]=this.events[S]||[]).push(_),()=>this.events[S]=(this.events[S]||[]).filter(g=>g!==_)}});var Ve=function(){function S(){this.handlers=[]}return S.prototype.register=function(_,g){return this.handlers.push(_),this},S.prototype.invoke=function(){for(var _=this,g=[],T=0;T<arguments.length;T++)g[T]=arguments[T];this.handlers.forEach(function(U){return U.apply(_,g)})},S.prototype.invokeAsync=function(){for(var _=this,g=[],T=0;T<arguments.length;T++)g[T]=arguments[T];return Promise.all(this.handlers.map(function(U){return U.apply(_,g)}))},S.prototype.remove=function(_){var g=this.handlers.indexOf(_);this.handlers[g]=this.handlers[this.handlers.length-1],this.handlers.pop()},S.prototype.clear=function(){this.handlers=[]},S}();function Be(){var S=new Ve;function _(g){return S.register(g,this===null)}return _.once=function(g){var T=function(){for(var U=[],F=0;F<arguments.length;F++)U[F]=arguments[F];g.apply(this,U),S.remove(T)};S.register(T)},_.remove=function(g){return S.remove(g)},_.invoke=function(){for(var g=[],T=0;T<arguments.length;T++)g[T]=arguments[T];return S.invoke.apply(S,g)},_.invokeAsync=function(){for(var g=[],T=0;T<arguments.length;T++)g[T]=arguments[T];return S.invokeAsync.apply(S,g)},_.clear=function(){return S.clear()},_}var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Xo<"u"?Xo:typeof self<"u"?self:{};function Ie(S){var _={exports:{}};return S(_,_.exports),_.exports}var ce=Ie(function(S,_){(function(g,T){T(_)})(xe,function(g){var T=function(x,f){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,w){y.__proto__=w}||function(y,w){for(var V in w)Object.prototype.hasOwnProperty.call(w,V)&&(y[V]=w[V])},T(x,f)};function U(x,f){if(typeof f!="function"&&f!==null)throw new TypeError("Class extends value "+String(f)+" is not a constructor or null");T(x,f);function y(){this.constructor=x}x.prototype=f===null?Object.create(f):(y.prototype=f.prototype,new y)}function F(x,f,y,w){var V=arguments.length,fe=V<3?f:w===null?w=Object.getOwnPropertyDescriptor(f,y):w,Ge;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")fe=Reflect.decorate(x,f,y,w);else for(var We=x.length-1;We>=0;We--)(Ge=x[We])&&(fe=(V<3?Ge(fe):V>3?Ge(f,y,fe):Ge(f,y))||fe);return V>3&&fe&&Object.defineProperty(f,y,fe),fe}function ie(x,f,y){if(y||arguments.length===2)for(var w=0,V=f.length,fe;w<V;w++)(fe||!(w in f))&&(fe||(fe=Array.prototype.slice.call(f,0,w)),fe[w]=f[w]);return x.concat(fe||Array.prototype.slice.call(f))}var Y=255,Q=213;g.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(g.OPERATION||(g.OPERATION={}));var K=function(){function x(f,y,w){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=f,this.setParent(y,w)}return x.prototype.setParent=function(f,y,w){var V=this;if(this.indexes||(this.indexes=this.ref instanceof dn?this.ref._definition.indexes:{}),this.parent=f,this.parentIndex=w,!!y)if(this.root=y,this.ref instanceof dn){var fe=this.ref._definition;for(var Ge in fe.schema){var We=this.ref[Ge];if(We&&We.$changes){var ut=fe.indexes[Ge];We.$changes.setParent(this.ref,y,ut)}}}else typeof this.ref=="object"&&this.ref.forEach(function(at,Ue){if(at instanceof dn){var ct=at.$changes,ke=V.ref.$changes.indexes[Ue];ct.setParent(V.ref,V.root,ke)}})},x.prototype.operation=function(f){this.changes.set(--this.currentCustomOperation,f)},x.prototype.change=function(f,y){y===void 0&&(y=g.OPERATION.ADD);var w=typeof f=="number"?f:this.indexes[f];this.assertValidIndex(w,f);var V=this.changes.get(w);(!V||V.op===g.OPERATION.DELETE||V.op===g.OPERATION.TOUCH)&&this.changes.set(w,{op:V&&V.op===g.OPERATION.DELETE?g.OPERATION.DELETE_AND_ADD:y,index:w}),this.allChanges.add(w),this.changed=!0,this.touchParents()},x.prototype.touch=function(f){var y=typeof f=="number"?f:this.indexes[f];this.assertValidIndex(y,f),this.changes.has(y)||this.changes.set(y,{op:g.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(f){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[f]]}else{var y=this.parent._definition,w=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(w)[0]}},x.prototype.getChildrenFilter=function(){var f=this.parent._definition.childFilters;return f&&f[this.parentIndex]},x.prototype.getValue=function(f){return this.ref.getByIndex(f)},x.prototype.delete=function(f){var y=typeof f=="number"?f:this.indexes[f];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(f," (").concat(y,")"));return}var w=this.getValue(y);this.changes.set(y,{op:g.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],w&&w.$changes&&(w.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(f,y){var w=this;f===void 0&&(f=!1),y===void 0&&(y=!1),this.ref instanceof dn||this.changes.forEach(function(V){if(V.op===g.OPERATION.DELETE){var fe=w.ref.getIndex(V.index);delete w.indexes[fe]}}),this.changes.clear(),this.changed=f,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var f=this;this.changes.forEach(function(y){var w=f.getValue(y.index);w&&w.$changes&&w.$changes.discardAll()}),this.discard()},x.prototype.cache=function(f,y){this.caches[f]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(f,y){if(f===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x}();function Me(x,f,y,w){return x[f]||(x[f]=[]),x[f].push(y),w==null||w.forEach(function(V,fe){return y(V,fe)}),function(){return B(x[f],x[f].indexOf(y))}}function Le(x){var f=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(w,V){x.push({refId:f.$changes.refId,op:g.OPERATION.DELETE,field:V,value:void 0,previousValue:w}),y&&f.$changes.root.removeRef(w.$changes.refId)})}function B(x,f){if(f===-1||f>=x.length)return!1;for(var y=x.length-1,w=f;w<y;w++)x[w]=x[w+1];return x.length=y,!0}var J=function(x,f){var y=x.toString(),w=f.toString();return y<w?-1:y>w?1:0};function ue(x){return x.$proxy=!0,x=new Proxy(x,{get:function(f,y){return typeof y!="symbol"&&!isNaN(y)?f.at(y):f[y]},set:function(f,y,w){if(typeof y!="symbol"&&!isNaN(y)){var V=Array.from(f.$items.keys()),fe=parseInt(V[y]||y);w==null?f.deleteAt(fe):f.setAt(fe,w)}else f[y]=w;return!0},deleteProperty:function(f,y){return typeof y=="number"?f.deleteAt(y):delete f[y],!0}}),x}var Se=function(){function x(){for(var f=[],y=0;y<arguments.length;y++)f[y]=arguments[y];this.$changes=new K(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,f)}return x.prototype.onAdd=function(f,y){return y===void 0&&(y=!0),Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.ADD,f,y?this.$items:void 0)},x.prototype.onRemove=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.DELETE,f)},x.prototype.onChange=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.REPLACE,f)},x.is=function(f){return Array.isArray(f)||f.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(f){f===0?this.clear():this.splice(f,this.length-f)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var f=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var V;return y.forEach(function(fe){V=f.$refId++,f.setAt(V,fe)}),V},x.prototype.pop=function(){var f=Array.from(this.$indexes.values()).pop();if(f!==void 0){this.$changes.delete(f),this.$indexes.delete(f);var y=this.$items.get(f);return this.$items.delete(f),y}},x.prototype.at=function(f){var y=Array.from(this.$items.keys())[f];return this.$items.get(y)},x.prototype.setAt=function(f,y){var w,V;y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,f);var fe=(V=(w=this.$changes.indexes[f])===null||w===void 0?void 0:w.op)!==null&&V!==void 0?V:g.OPERATION.ADD;this.$changes.indexes[f]=f,this.$indexes.set(f,f),this.$items.set(f,y),this.$changes.change(f,fe)},x.prototype.deleteAt=function(f){var y=Array.from(this.$items.keys())[f];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(f){return this.$changes.delete(f),this.$indexes.delete(f),this.$items.delete(f)},x.prototype.clear=function(f){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),f&&Le.call(this,f),this.$items.clear(),this.$changes.operation({index:0,op:g.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var f,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];return new(x.bind.apply(x,ie([void 0],(f=Array.from(this.$items.values())).concat.apply(f,y),!1)))},x.prototype.join=function(f){return Array.from(this.$items.values()).join(f)},x.prototype.reverse=function(){var f=this,y=Array.from(this.$items.keys()),w=Array.from(this.$items.values()).reverse();return w.forEach(function(V,fe){f.setAt(y[fe],V)}),this},x.prototype.shift=function(){var f=Array.from(this.$items.keys()),y=f.shift();if(y!==void 0){var w=this.$items.get(y);return this.$deleteAt(y),w}},x.prototype.slice=function(f,y){return new(x.bind.apply(x,ie([void 0],Array.from(this.$items.values()).slice(f,y),!1)))},x.prototype.sort=function(f){var y=this;f===void 0&&(f=J);var w=Array.from(this.$items.keys()),V=Array.from(this.$items.values()).sort(f);return V.forEach(function(fe,Ge){y.setAt(w[Ge],fe)}),this},x.prototype.splice=function(f,y){y===void 0&&(y=this.length-f);for(var w=Array.from(this.$items.keys()),V=[],fe=f;fe<f+y;fe++)V.push(this.$items.get(w[fe])),this.$deleteAt(w[fe]);return V},x.prototype.unshift=function(){for(var f=this,y=[],w=0;w<arguments.length;w++)y[w]=arguments[w];var V=this.length,fe=y.length,Ge=Array.from(this.$items.values());return y.forEach(function(We,ut){f.setAt(ut,We)}),Ge.forEach(function(We,ut){f.setAt(fe+ut,We)}),V+fe},x.prototype.indexOf=function(f,y){return Array.from(this.$items.values()).indexOf(f,y)},x.prototype.lastIndexOf=function(f,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(f,y)},x.prototype.every=function(f,y){return Array.from(this.$items.values()).every(f,y)},x.prototype.some=function(f,y){return Array.from(this.$items.values()).some(f,y)},x.prototype.forEach=function(f,y){Array.from(this.$items.values()).forEach(f,y)},x.prototype.map=function(f,y){return Array.from(this.$items.values()).map(f,y)},x.prototype.filter=function(f,y){return Array.from(this.$items.values()).filter(f,y)},x.prototype.reduce=function(f,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(f,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(f,y){return Array.from(this.$items.values()).find(f,y)},x.prototype.findIndex=function(f,y){return Array.from(this.$items.values()).findIndex(f,y)},x.prototype.fill=function(f,y,w){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(f,y,w){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(f,y){return Array.from(this.$items.values()).includes(f,y)},x.prototype.flatMap=function(f,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(f){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.setIndex=function(f,y){this.$indexes.set(f,y)},x.prototype.getIndex=function(f){return this.$indexes.get(f)},x.prototype.getByIndex=function(f){return this.$items.get(this.$indexes.get(f))},x.prototype.deleteByIndex=function(f){var y=this.$indexes.get(f);this.$items.delete(y),this.$indexes.delete(f)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(f){return typeof f.toJSON=="function"?f.toJSON():f})},x.prototype.clone=function(f){var y;return f?y=new(x.bind.apply(x,ie([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,ie([void 0],this.map(function(w){return w.$changes?w.clone():w}),!1))),y},x}();function Ne(x){return x.$proxy=!0,x=new Proxy(x,{get:function(f,y){return typeof y!="symbol"&&typeof f[y]>"u"?f.get(y):f[y]},set:function(f,y,w){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?f.set(y,w):f[y]=w,!0},deleteProperty:function(f,y){return f.delete(y),!0}}),x}var it=function(){function x(f){var y=this;if(this.$changes=new K(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,f)if(f instanceof Map||f instanceof x)f.forEach(function(V,fe){return y.set(fe,V)});else for(var w in f)this.set(w,f[w])}return x.prototype.onAdd=function(f,y){return y===void 0&&(y=!0),Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.ADD,f,y?this.$items:void 0)},x.prototype.onRemove=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.DELETE,f)},x.prototype.onChange=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.REPLACE,f)},x.is=function(f){return f.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),x.prototype.set=function(f,y){if(y==null)throw new Error("MapSchema#set('".concat(f,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(f,"'."));var w=typeof this.$changes.indexes[f]<"u",V=w?this.$changes.indexes[f]:this.$refId++,fe=w?g.OPERATION.REPLACE:g.OPERATION.ADD,Ge=y.$changes!==void 0;return Ge&&y.$changes.setParent(this,this.$changes.root,V),w?Ge&&this.$items.get(f)!==y&&(fe=g.OPERATION.ADD):(this.$changes.indexes[f]=V,this.$indexes.set(V,f)),this.$items.set(f,y),this.$changes.change(f,fe),this},x.prototype.get=function(f){return this.$items.get(f)},x.prototype.delete=function(f){return this.$changes.delete(f),this.$items.delete(f)},x.prototype.clear=function(f){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),f&&Le.call(this,f),this.$items.clear(),this.$changes.operation({index:0,op:g.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(f){return this.$items.has(f)},x.prototype.forEach=function(f){this.$items.forEach(f)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(f,y){this.$indexes.set(f,y)},x.prototype.getIndex=function(f){return this.$indexes.get(f)},x.prototype.getByIndex=function(f){return this.$items.get(this.$indexes.get(f))},x.prototype.deleteByIndex=function(f){var y=this.$indexes.get(f);this.$items.delete(y),this.$indexes.delete(f)},x.prototype.toJSON=function(){var f={};return this.forEach(function(y,w){f[w]=typeof y.toJSON=="function"?y.toJSON():y}),f},x.prototype.clone=function(f){var y;return f?y=Object.assign(new x,this):(y=new x,this.forEach(function(w,V){w.$changes?y.set(V,w.clone()):y.set(V,w)})),y},x}(),_t={};function wt(x,f){_t[x]=f}function an(x){return _t[x]}var Et=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(f){var y=new x;return y.schema=Object.assign({},f&&f.schema||{}),y.indexes=Object.assign({},f&&f.indexes||{}),y.fieldsByIndex=Object.assign({},f&&f.fieldsByIndex||{}),y.descriptors=Object.assign({},f&&f.descriptors||{}),y.deprecated=Object.assign({},f&&f.deprecated||{}),y},x.prototype.addField=function(f,y){var w=this.getNextFieldIndex();this.fieldsByIndex[w]=f,this.indexes[f]=w,this.schema[f]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(f){return this.indexes[f]!==void 0},x.prototype.addFilter=function(f,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[f]]=y,this.indexesWithFilters.push(this.indexes[f]),!0},x.prototype.addChildrenFilter=function(f,y){var w=this.indexes[f],V=this.schema[f];if(an(Object.keys(V)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[w]=y,!0;console.warn("@filterChildren: field '".concat(f,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(f){return this.childFilters&&this.childFilters[this.indexes[f]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function tn(x){return x._context&&x._context.useFilters}var Jt=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(f){return this.schemas.has(f)},x.prototype.get=function(f){return this.types[f]},x.prototype.add=function(f,y){y===void 0&&(y=this.schemas.size),f._definition=Et.create(f._definition),f._typeid=y,this.types[y]=f,this.schemas.set(f,y)},x.create=function(f){return f===void 0&&(f={}),function(y){return f.context||(f.context=new x),qt(y,f)}},x}(),di=new Jt;function qt(x,f){return f===void 0&&(f={}),function(y,w){var V=f.context||di,fe=y.constructor;if(fe._context=V,!x)throw new Error("".concat(fe.name,': @type() reference provided for "').concat(w,`" is undefined. Make sure you don't have any circular dependencies.`));V.has(fe)||V.add(fe);var Ge=fe._definition;if(Ge.addField(w,x),Ge.descriptors[w]){if(Ge.deprecated[w])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(w,"' definition on '").concat(fe.name,`'.
Check @type() annotation`))}catch(ke){var We=ke.stack.split(`
`)[4].trim();throw new Error("".concat(ke.message," ").concat(We))}}var ut=Se.is(x),at=!ut&&it.is(x);if(typeof x!="string"&&!dn.is(x)){var Ue=Object.values(x)[0];typeof Ue!="string"&&!V.has(Ue)&&V.add(Ue)}if(f.manual){Ge.descriptors[w]={enumerable:!0,configurable:!0,writable:!0};return}var ct="_".concat(w);Ge.descriptors[ct]={enumerable:!1,configurable:!1,writable:!0},Ge.descriptors[w]={get:function(){return this[ct]},set:function(ke){ke!==this[ct]&&(ke!=null?(ut&&!(ke instanceof Se)&&(ke=new(Se.bind.apply(Se,ie([void 0],ke,!1)))),at&&!(ke instanceof it)&&(ke=new it(ke)),ke.$proxy===void 0&&(at?ke=Ne(ke):ut&&(ke=ue(ke))),this.$changes.change(w),ke.$changes&&ke.$changes.setParent(this,this.$changes.root,this._definition.indexes[w])):this[ct]&&this.$changes.delete(w),this[ct]=ke)},enumerable:!0,configurable:!0}}}function Ys(x){return function(f,y){var w=f.constructor,V=w._definition;V.addFilter(y,x)&&(w._context.useFilters=!0)}}function Ks(x){return function(f,y){var w=f.constructor,V=w._definition;V.addChildrenFilter(y,x)&&(w._context.useFilters=!0)}}function Js(x){return x===void 0&&(x=!0),function(f,y){var w=f.constructor,V=w._definition;V.deprecated[y]=!0,x&&(V.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(fe){},enumerable:!1,configurable:!0})}}function P(x,f,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||di);for(var w in f)qt(f[w],y)(x.prototype,w);return x}function $(x){for(var f=0,y=0,w=0,V=x.length;w<V;w++)f=x.charCodeAt(w),f<128?y+=1:f<2048?y+=2:f<55296||f>=57344?y+=3:(w++,y+=4);return y}function se(x,f,y){for(var w=0,V=0,fe=y.length;V<fe;V++)w=y.charCodeAt(V),w<128?x[f++]=w:w<2048?(x[f++]=192|w>>6,x[f++]=128|w&63):w<55296||w>=57344?(x[f++]=224|w>>12,x[f++]=128|w>>6&63,x[f++]=128|w&63):(V++,w=65536+((w&1023)<<10|y.charCodeAt(V)&1023),x[f++]=240|w>>18,x[f++]=128|w>>12&63,x[f++]=128|w>>6&63,x[f++]=128|w&63)}function W(x,f){x.push(f&255)}function ee(x,f){x.push(f&255)}function Fe(x,f){x.push(f&255),x.push(f>>8&255)}function He(x,f){x.push(f&255),x.push(f>>8&255)}function Xe(x,f){x.push(f&255),x.push(f>>8&255),x.push(f>>16&255),x.push(f>>24&255)}function $e(x,f){var y=f>>24,w=f>>16,V=f>>8,fe=f;x.push(fe&255),x.push(V&255),x.push(w&255),x.push(y&255)}function Qe(x,f){var y=Math.floor(f/Math.pow(2,32)),w=f>>>0;$e(x,w),$e(x,y)}function et(x,f){var y=f/Math.pow(2,32)>>0,w=f>>>0;$e(x,w),$e(x,y)}function rt(x,f){St(x,f)}function vt(x,f){st(x,f)}var Ct=new Int32Array(2),cn=new Float32Array(Ct.buffer),Bn=new Float64Array(Ct.buffer);function St(x,f){cn[0]=f,Xe(x,Ct[0])}function st(x,f){Bn[0]=f,Xe(x,Ct[0]),Xe(x,Ct[1])}function wr(x,f){return ee(x,f?1:0)}function Tt(x,f){f||(f="");var y=$(f),w=0;if(y<32)x.push(y|160),w=1;else if(y<256)x.push(217),ee(x,y),w=2;else if(y<65536)x.push(218),He(x,y),w=3;else if(y<4294967296)x.push(219),$e(x,y),w=5;else throw new Error("String too long");return se(x,x.length,f),w+y}function Rt(x,f){if(isNaN(f))return Rt(x,0);if(isFinite(f)){if(f!==(f|0))return x.push(203),st(x,f),9}else return Rt(x,f>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return f>=0?f<128?(ee(x,f),1):f<256?(x.push(204),ee(x,f),2):f<65536?(x.push(205),He(x,f),3):f<4294967296?(x.push(206),$e(x,f),5):(x.push(207),et(x,f),9):f>=-32?(x.push(224|f+32),1):f>=-128?(x.push(208),W(x,f),2):f>=-32768?(x.push(209),Fe(x,f),3):f>=-2147483648?(x.push(210),Xe(x,f),5):(x.push(211),Qe(x,f),9)}var ki=Object.freeze({__proto__:null,utf8Write:se,int8:W,uint8:ee,int16:Fe,uint16:He,int32:Xe,uint32:$e,int64:Qe,uint64:et,float32:rt,float64:vt,writeFloat32:St,writeFloat64:st,boolean:wr,string:Tt,number:Rt});function pi(x,f,y){for(var w="",V=0,fe=f,Ge=f+y;fe<Ge;fe++){var We=x[fe];if(!(We&128)){w+=String.fromCharCode(We);continue}if((We&224)===192){w+=String.fromCharCode((We&31)<<6|x[++fe]&63);continue}if((We&240)===224){w+=String.fromCharCode((We&15)<<12|(x[++fe]&63)<<6|(x[++fe]&63)<<0);continue}if((We&248)===240){V=(We&7)<<18|(x[++fe]&63)<<12|(x[++fe]&63)<<6|(x[++fe]&63)<<0,V>=65536?(V-=65536,w+=String.fromCharCode((V>>>10)+55296,(V&1023)+56320)):w+=String.fromCharCode(V);continue}console.error("Invalid byte "+We.toString(16))}return w}function zi(x,f){return Lt(x,f)<<24>>24}function Lt(x,f){return x[f.offset++]}function Cn(x,f){return Qn(x,f)<<16>>16}function Qn(x,f){return x[f.offset++]|x[f.offset++]<<8}function Pt(x,f){return x[f.offset++]|x[f.offset++]<<8|x[f.offset++]<<16|x[f.offset++]<<24}function Ln(x,f){return Pt(x,f)>>>0}function Zs(x,f){return Qs(x,f)}function is(x,f){return eo(x,f)}function Da(x,f){var y=Ln(x,f),w=Pt(x,f)*Math.pow(2,32);return w+y}function Na(x,f){var y=Ln(x,f),w=Ln(x,f)*Math.pow(2,32);return w+y}var Rr=new Int32Array(2),Fh=new Float32Array(Rr.buffer),Bh=new Float64Array(Rr.buffer);function Qs(x,f){return Rr[0]=Pt(x,f),Fh[0]}function eo(x,f){return Rr[0]=Pt(x,f),Rr[1]=Pt(x,f),Bh[0]}function kh(x,f){return Lt(x,f)>0}function Ua(x,f){var y=x[f.offset++],w;y<192?w=y&31:y===217?w=Lt(x,f):y===218?w=Qn(x,f):y===219&&(w=Ln(x,f));var V=pi(x,f.offset,w);return f.offset+=w,V}function zh(x,f){var y=x[f.offset];return y<192&&y>160||y===217||y===218||y===219}function mi(x,f){var y=x[f.offset++];if(y<128)return y;if(y===202)return Qs(x,f);if(y===203)return eo(x,f);if(y===204)return Lt(x,f);if(y===205)return Qn(x,f);if(y===206)return Ln(x,f);if(y===207)return Na(x,f);if(y===208)return zi(x,f);if(y===209)return Cn(x,f);if(y===210)return Pt(x,f);if(y===211)return Da(x,f);if(y>223)return(255-y+1)*-1}function Hh(x,f){var y=x[f.offset];return y<128||y>=202&&y<=211}function Gh(x,f){return x[f.offset]<160}function Oa(x,f){return x[f.offset-1]===Y&&(x[f.offset]<128||x[f.offset]>=202&&x[f.offset]<=211)}var Fa=Object.freeze({__proto__:null,int8:zi,uint8:Lt,int16:Cn,uint16:Qn,int32:Pt,uint32:Ln,float32:Zs,float64:is,int64:Da,uint64:Na,readFloat32:Qs,readFloat64:eo,boolean:kh,string:Ua,stringCheck:zh,number:mi,numberCheck:Hh,arrayCheck:Gh,switchStructureCheck:Oa}),to=function(){function x(f){var y=this;this.$changes=new K(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,f&&f.forEach(function(w){return y.add(w)})}return x.prototype.onAdd=function(f,y){return y===void 0&&(y=!0),Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.ADD,f,y?this.$items:void 0)},x.prototype.onRemove=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.DELETE,f)},x.prototype.onChange=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.REPLACE,f)},x.is=function(f){return f.collection!==void 0},x.prototype.add=function(f){var y=this.$refId++,w=f.$changes!==void 0;return w&&f.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,f),this.$changes.change(y),y},x.prototype.at=function(f){var y=Array.from(this.$items.keys())[f];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(f){for(var y=this.$items.entries(),w,V;(V=y.next())&&!V.done;)if(f===V.value[1]){w=V.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},x.prototype.clear=function(f){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),f&&Le.call(this,f),this.$items.clear(),this.$changes.operation({index:0,op:g.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(f){return Array.from(this.$items.values()).some(function(y){return y===f})},x.prototype.forEach=function(f){var y=this;this.$items.forEach(function(w,V,fe){return f(w,V,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(f,y){this.$indexes.set(f,y)},x.prototype.getIndex=function(f){return this.$indexes.get(f)},x.prototype.getByIndex=function(f){return this.$items.get(this.$indexes.get(f))},x.prototype.deleteByIndex=function(f){var y=this.$indexes.get(f);this.$items.delete(y),this.$indexes.delete(f)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var f=[];return this.forEach(function(y,w){f.push(typeof y.toJSON=="function"?y.toJSON():y)}),f},x.prototype.clone=function(f){var y;return f?y=Object.assign(new x,this):(y=new x,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},x}(),no=function(){function x(f){var y=this;this.$changes=new K(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,f&&f.forEach(function(w){return y.add(w)})}return x.prototype.onAdd=function(f,y){return y===void 0&&(y=!0),Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.ADD,f,y?this.$items:void 0)},x.prototype.onRemove=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.DELETE,f)},x.prototype.onChange=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.REPLACE,f)},x.is=function(f){return f.set!==void 0},x.prototype.add=function(f){var y,w;if(this.has(f))return!1;var V=this.$refId++;f.$changes!==void 0&&f.$changes.setParent(this,this.$changes.root,V);var fe=(w=(y=this.$changes.indexes[V])===null||y===void 0?void 0:y.op)!==null&&w!==void 0?w:g.OPERATION.ADD;return this.$changes.indexes[V]=V,this.$indexes.set(V,V),this.$items.set(V,f),this.$changes.change(V,fe),V},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(f){for(var y=this.$items.entries(),w,V;(V=y.next())&&!V.done;)if(f===V.value[1]){w=V.value[0];break}return w===void 0?!1:(this.$changes.delete(w),this.$indexes.delete(w),this.$items.delete(w))},x.prototype.clear=function(f){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),f&&Le.call(this,f),this.$items.clear(),this.$changes.operation({index:0,op:g.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(f){for(var y=this.$items.values(),w=!1,V;(V=y.next())&&!V.done;)if(f===V.value){w=!0;break}return w},x.prototype.forEach=function(f){var y=this;this.$items.forEach(function(w,V,fe){return f(w,V,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(f,y){this.$indexes.set(f,y)},x.prototype.getIndex=function(f){return this.$indexes.get(f)},x.prototype.getByIndex=function(f){return this.$items.get(this.$indexes.get(f))},x.prototype.deleteByIndex=function(f){var y=this.$indexes.get(f);this.$items.delete(y),this.$indexes.delete(f)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var f=[];return this.forEach(function(y,w){f.push(typeof y.toJSON=="function"?y.toJSON():y)}),f},x.prototype.clone=function(f){var y;return f?y=Object.assign(new x,this):(y=new x,this.forEach(function(w){w.$changes?y.add(w.clone()):y.add(w)})),y},x}(),Vh=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(f){this.refIds.has(f)||(this.refIds.add(f),this.containerIndexes.set(f,new Set))},x.get=function(f){return f.$filterState===void 0&&(f.$filterState=new x),f.$filterState},x}(),Wh=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(f,y,w){w===void 0&&(w=!0),this.refs.set(f,y),w&&(this.refCounts[f]=(this.refCounts[f]||0)+1)},x.prototype.removeRef=function(f){this.refCounts[f]=this.refCounts[f]-1,this.deletedRefs.add(f)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var f=this;this.deletedRefs.forEach(function(y){if(!(f.refCounts[y]>0)){var w=f.refs.get(y);if(w instanceof dn)for(var V in w._definition.schema)typeof w._definition.schema[V]!="string"&&w[V]&&w[V].$changes&&f.removeRef(w[V].$changes.refId);else{var fe=w.$changes.parent._definition,Ge=fe.schema[fe.fieldsByIndex[w.$changes.parentIndex]];typeof Object.values(Ge)[0]=="function"&&Array.from(w.values()).forEach(function(We){return f.removeRef(We.$changes.refId)})}f.refs.delete(y),delete f.refCounts[y]}}),this.deletedRefs.clear()},x}(),io=function(x){U(f,x);function f(){return x!==null&&x.apply(this,arguments)||this}return f}(Error);function Xh(x,f,y,w){var V,fe=!1;switch(f){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":V="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(w));break;case"string":V="string",fe=!0;break;case"boolean":return}if(typeof x!==V&&(!fe||fe&&x!==null)){var Ge="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new io("a '".concat(V,"' was expected, but ").concat(Ge," was provided in ").concat(y.constructor.name,"#").concat(w))}}function Ba(x,f,y,w){if(!(x instanceof f))throw new io("a '".concat(f.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(w))}function $h(x,f,y,w,V){Xh(y,x,w,V);var fe=ki[x];if(fe)fe(f,y);else throw new io("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(w.constructor.name,"#").concat(V))}function jh(x,f,y){return Fa[x](f,y)}var dn=function(){function x(){for(var f=[],y=0;y<arguments.length;y++)f[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new K(this,void 0,new Wh),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var w=this._definition.descriptors;w&&Object.defineProperties(this,w),f[0]&&this.assign(f[0])}return x.onError=function(f){console.error(f)},x.is=function(f){return f._definition&&f._definition.schema!==void 0},x.prototype.onChange=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.REPLACE,f)},x.prototype.onRemove=function(f){return Me(this.$callbacks||(this.$callbacks=[]),g.OPERATION.DELETE,f)},x.prototype.assign=function(f){return Object.assign(this,f),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(f,y){this.$changes.change(f,y)},x.prototype.listen=function(f,y){var w=this;return this.$callbacks||(this.$callbacks={}),this.$callbacks[f]||(this.$callbacks[f]=[]),this.$callbacks[f].push(y),function(){return B(w.$callbacks[f],w.$callbacks[f].indexOf(y))}},x.prototype.decode=function(f,y,w){y===void 0&&(y={offset:0}),w===void 0&&(w=this);var V=[],fe=this.$changes.root,Ge=f.length,We=0;for(fe.refs.set(We,this);y.offset<Ge;){var ut=f[y.offset++];if(ut==Y){We=mi(f,y);var at=fe.refs.get(We);if(!at)throw new Error('"refId" not found: '.concat(We));w=at;continue}var Ue=w.$changes,ct=w._definition!==void 0,ke=ct?ut>>6<<6:ut;if(ke===g.OPERATION.CLEAR){w.clear(V);continue}var Ye=ct?ut%(ke||255):mi(f,y),Je=ct?w._definition.fieldsByIndex[Ye]:"",tt=Ue.getType(Ye),be=void 0,ft=void 0,nn=void 0;if(ct?ft=w["_".concat(Je)]:(ft=w.getByIndex(Ye),(ke&g.OPERATION.ADD)===g.OPERATION.ADD?(nn=w instanceof it?Ua(f,y):Ye,w.setIndex(Ye,nn)):nn=w.getIndex(Ye)),(ke&g.OPERATION.DELETE)===g.OPERATION.DELETE&&(ke!==g.OPERATION.DELETE_AND_ADD&&w.deleteByIndex(Ye),ft&&ft.$changes&&fe.removeRef(ft.$changes.refId),be=null),Je===void 0){console.warn("@colyseus/schema: definition mismatch");for(var It={offset:y.offset};y.offset<Ge&&!(Oa(f,y)&&(It.offset=y.offset+1,fe.refs.has(mi(f,It))));)y.offset++;continue}else if(ke!==g.OPERATION.DELETE)if(x.is(tt)){var lt=mi(f,y);if(be=fe.refs.get(lt),ke!==g.OPERATION.REPLACE){var pt=this.getSchemaType(f,y,tt);be||(be=this.createTypeInstance(pt),be.$changes.refId=lt,ft&&(be.$callbacks=ft.$callbacks,ft.$changes.refId&&lt!==ft.$changes.refId&&fe.removeRef(ft.$changes.refId))),fe.addRef(lt,be,be!==ft)}}else if(typeof tt=="string")be=jh(tt,f,y);else{var ei=an(Object.keys(tt)[0]),ti=mi(f,y),yn=fe.refs.has(ti)?ft||fe.refs.get(ti):new ei.constructor;if(be=yn.clone(!0),be.$changes.refId=ti,ft&&(be.$callbacks=ft.$callbacks,ft.$changes.refId&&ti!==ft.$changes.refId)){fe.removeRef(ft.$changes.refId);for(var Vt=ft.entries(),Ut=void 0;(Ut=Vt.next())&&!Ut.done;){var rs=Ut.value,kn=rs[0],oo=rs[1];V.push({refId:ti,op:g.OPERATION.DELETE,field:kn,value:void 0,previousValue:oo})}}fe.addRef(ti,be,yn!==ft)}if(be!=null){if(be.$changes&&be.$changes.setParent(Ue.ref,Ue.root,Ye),w instanceof x)w[Je]=be;else if(w instanceof it){var kn=nn;w.$items.set(kn,be),w.$changes.allChanges.add(Ye)}else if(w instanceof Se)w.setAt(Ye,be);else if(w instanceof to){var ni=w.add(be);w.setIndex(Ye,ni)}else if(w instanceof no){var ni=w.add(be);ni!==!1&&w.setIndex(Ye,ni)}}ft!==be&&V.push({refId:We,op:ke,field:Je,dynamicIndex:nn,value:be,previousValue:ft})}return this._triggerChanges(V),fe.garbageCollectDeletedRefs(),V},x.prototype.encode=function(f,y,w){f===void 0&&(f=!1),y===void 0&&(y=[]),w===void 0&&(w=!1);for(var V=this.$changes,fe=new WeakSet,Ge=[V],We=1,ut=0;ut<We;ut++){var at=Ge[ut],Ue=at.ref,ct=Ue instanceof x;at.ensureRefId(),fe.add(at),at!==V&&(at.changed||f)&&(ee(y,Y),Rt(y,at.refId));for(var ke=f?Array.from(at.allChanges):Array.from(at.changes.values()),Ye=0,Je=ke.length;Ye<Je;Ye++){var tt=f?{op:g.OPERATION.ADD,index:ke[Ye]}:ke[Ye],be=tt.index,ft=ct?Ue._definition.fieldsByIndex&&Ue._definition.fieldsByIndex[be]:be,nn=y.length;if(tt.op!==g.OPERATION.TOUCH)if(ct)ee(y,be|tt.op);else{if(ee(y,tt.op),tt.op===g.OPERATION.CLEAR)continue;Rt(y,be)}if(!ct&&(tt.op&g.OPERATION.ADD)==g.OPERATION.ADD&&Ue instanceof it){var It=at.ref.$indexes.get(be);Tt(y,It)}if(tt.op!==g.OPERATION.DELETE){var lt=at.getType(be),pt=at.getValue(be);if(pt&&pt.$changes&&!fe.has(pt.$changes)&&(Ge.push(pt.$changes),pt.$changes.ensureRefId(),We++),tt.op!==g.OPERATION.TOUCH){if(x.is(lt))Ba(pt,lt,Ue,ft),Rt(y,pt.$changes.refId),(tt.op&g.OPERATION.ADD)===g.OPERATION.ADD&&this.tryEncodeTypeId(y,lt,pt.constructor);else if(typeof lt=="string")$h(lt,y,pt,Ue,ft);else{var ei=an(Object.keys(lt)[0]);Ba(Ue["_".concat(ft)],ei.constructor,Ue,ft),Rt(y,pt.$changes.refId)}w&&at.cache(be,y.slice(nn))}}}!f&&!w&&at.discard()}return y},x.prototype.encodeAll=function(f){return this.encode(!0,[],f)},x.prototype.applyFilters=function(f,y){var w,V;y===void 0&&(y=!1);for(var fe=this,Ge=new Set,We=Vh.get(f),ut=[this.$changes],at=1,Ue=[],ct=function(Ye){var Je=ut[Ye];if(Ge.has(Je.refId))return"continue";var tt=Je.ref,be=tt instanceof x;ee(Ue,Y),Rt(Ue,Je.refId);var ft=We.refIds.has(Je),nn=y||!ft;We.addRefId(Je);var It=We.containerIndexes.get(Je),lt=nn?Array.from(Je.allChanges):Array.from(Je.changes.values());if(!y&&be&&tt._definition.indexesWithFilters){var pt=tt._definition.indexesWithFilters;pt.forEach(function(ss){!It.has(ss)&&Je.allChanges.has(ss)&&(nn?lt.push(ss):lt.push({op:g.OPERATION.ADD,index:ss}))})}for(var ei=0,ti=lt.length;ei<ti;ei++){var yn=nn?{op:g.OPERATION.ADD,index:lt[ei]}:lt[ei];if(yn.op===g.OPERATION.CLEAR){ee(Ue,yn.op);continue}var Vt=yn.index;if(yn.op===g.OPERATION.DELETE){be?ee(Ue,yn.op|Vt):(ee(Ue,yn.op),Rt(Ue,Vt));continue}var Ut=Je.getValue(Vt),rs=Je.getType(Vt);if(be){var kn=tt._definition.filters&&tt._definition.filters[Vt];if(kn&&!kn.call(tt,f,Ut,fe)){Ut&&Ut.$changes&&Ge.add(Ut.$changes.refId);continue}}else{var oo=Je.parent,kn=Je.getChildrenFilter();if(kn&&!kn.call(oo,f,tt.$indexes.get(Vt),Ut,fe)){Ut&&Ut.$changes&&Ge.add(Ut.$changes.refId);continue}}if(Ut.$changes&&(ut.push(Ut.$changes),at++),yn.op!==g.OPERATION.TOUCH)if(yn.op===g.OPERATION.ADD||be)Ue.push.apply(Ue,(w=Je.caches[Vt])!==null&&w!==void 0?w:[]),It.add(Vt);else if(It.has(Vt))Ue.push.apply(Ue,(V=Je.caches[Vt])!==null&&V!==void 0?V:[]);else{if(It.add(Vt),ee(Ue,g.OPERATION.ADD),Rt(Ue,Vt),tt instanceof it){var ni=Je.ref.$indexes.get(Vt);Tt(Ue,ni)}Ut.$changes?Rt(Ue,Ut.$changes.refId):ki[rs](Ue,Ut)}else if(Ut.$changes&&!be){if(ee(Ue,g.OPERATION.ADD),Rt(Ue,Vt),tt instanceof it){var ni=Je.ref.$indexes.get(Vt);Tt(Ue,ni)}Rt(Ue,Ut.$changes.refId)}}},ke=0;ke<at;ke++)ct(ke);return Ue},x.prototype.clone=function(){var f,y=new this.constructor,w=this._definition.schema;for(var V in w)typeof this[V]=="object"&&typeof((f=this[V])===null||f===void 0?void 0:f.clone)=="function"?y[V]=this[V].clone():y[V]=this[V];return y},x.prototype.toJSON=function(){var f=this._definition.schema,y=this._definition.deprecated,w={};for(var V in f)!y[V]&&this[V]!==null&&typeof this[V]<"u"&&(w[V]=typeof this[V].toJSON=="function"?this[V].toJSON():this["_".concat(V)]);return w},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(f){return this[this._definition.fieldsByIndex[f]]},x.prototype.deleteByIndex=function(f){this[this._definition.fieldsByIndex[f]]=void 0},x.prototype.tryEncodeTypeId=function(f,y,w){y._typeid!==w._typeid&&(ee(f,Q),Rt(f,w._typeid))},x.prototype.getSchemaType=function(f,y,w){var V;return f[y.offset]===Q&&(y.offset++,V=this.constructor._context.get(mi(f,y))),V||w},x.prototype.createTypeInstance=function(f){var y=new f;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(f){for(var y,w,V,fe,Ge,We,ut,at,Ue,ct=new Set,ke=this.$changes.root.refs,Ye=function(tt){var be=f[tt],ft=be.refId,nn=ke.get(ft),It=nn.$callbacks;if((be.op&g.OPERATION.DELETE)===g.OPERATION.DELETE&&be.previousValue instanceof x&&((w=(y=be.previousValue.$callbacks)===null||y===void 0?void 0:y[g.OPERATION.DELETE])===null||w===void 0||w.forEach(function(lt){return lt()})),!It)return"continue";if(nn instanceof x){if(!ct.has(ft))try{(V=It==null?void 0:It[g.OPERATION.REPLACE])===null||V===void 0||V.forEach(function(lt){return lt(f)})}catch(lt){x.onError(lt)}try{It.hasOwnProperty(be.field)&&((fe=It[be.field])===null||fe===void 0||fe.forEach(function(lt){return lt(be.value,be.previousValue)}))}catch(lt){x.onError(lt)}}else be.op===g.OPERATION.ADD&&be.previousValue===void 0?(Ge=It[g.OPERATION.ADD])===null||Ge===void 0||Ge.forEach(function(lt){var pt;return lt(be.value,(pt=be.dynamicIndex)!==null&&pt!==void 0?pt:be.field)}):be.op===g.OPERATION.DELETE?be.previousValue!==void 0&&((We=It[g.OPERATION.DELETE])===null||We===void 0||We.forEach(function(lt){var pt;return lt(be.previousValue,(pt=be.dynamicIndex)!==null&&pt!==void 0?pt:be.field)})):be.op===g.OPERATION.DELETE_AND_ADD&&(be.previousValue!==void 0&&((ut=It[g.OPERATION.DELETE])===null||ut===void 0||ut.forEach(function(lt){var pt;return lt(be.previousValue,(pt=be.dynamicIndex)!==null&&pt!==void 0?pt:be.field)})),(at=It[g.OPERATION.ADD])===null||at===void 0||at.forEach(function(lt){var pt;return lt(be.value,(pt=be.dynamicIndex)!==null&&pt!==void 0?pt:be.field)})),be.value!==be.previousValue&&((Ue=It[g.OPERATION.REPLACE])===null||Ue===void 0||Ue.forEach(function(lt){var pt;return lt(be.value,(pt=be.dynamicIndex)!==null&&pt!==void 0?pt:be.field)}));ct.add(ft)},Je=0;Je<f.length;Je++)Ye(Je)},x._definition=Et.create(),x}();function qh(x){for(var f=[x.$changes],y=1,w={},V=w,fe=function(We){var ut=f[We];ut.changes.forEach(function(at){var Ue=ut.ref,ct=at.index,ke=Ue._definition?Ue._definition.fieldsByIndex[ct]:Ue.$indexes.get(ct);V[ke]=ut.getValue(ct)})},Ge=0;Ge<y;Ge++)fe(Ge);return w}var gi={context:new Jt},ro=function(x){U(f,x);function f(){return x!==null&&x.apply(this,arguments)||this}return F([qt("string",gi)],f.prototype,"name",void 0),F([qt("string",gi)],f.prototype,"type",void 0),F([qt("number",gi)],f.prototype,"referencedType",void 0),f}(dn),so=function(x){U(f,x);function f(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new Se,y}return F([qt("number",gi)],f.prototype,"id",void 0),F([qt([ro],gi)],f.prototype,"fields",void 0),f}(dn),Yh=function(x){U(f,x);function f(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new Se,y}return f.encode=function(y){var w=y.constructor,V=new f;V.rootType=w._typeid;var fe=function(at,Ue){for(var ct in Ue){var ke=new ro;ke.name=ct;var Ye=void 0;if(typeof Ue[ct]=="string")Ye=Ue[ct];else{var Je=Ue[ct],tt=void 0;dn.is(Je)?(Ye="ref",tt=Ue[ct]):(Ye=Object.keys(Je)[0],typeof Je[Ye]=="string"?Ye+=":"+Je[Ye]:tt=Je[Ye]),ke.referencedType=tt?tt._typeid:-1}ke.type=Ye,at.fields.push(ke)}V.types.push(at)},Ge=w._context.types;for(var We in Ge){var ut=new so;ut.id=Number(We),fe(ut,Ge[We]._definition.schema)}return V.encodeAll()},f.decode=function(y,w){var V=new Jt,fe=new f;fe.decode(y,w);var Ge=fe.types.reduce(function(ct,ke){var Ye=function(tt){U(be,tt);function be(){return tt!==null&&tt.apply(this,arguments)||this}return be}(dn),Je=ke.id;return ct[Je]=Ye,V.add(Ye,Je),ct},{});fe.types.forEach(function(ct){var ke=Ge[ct.id];ct.fields.forEach(function(Ye){var Je;if(Ye.referencedType!==void 0){var tt=Ye.type,be=Ge[Ye.referencedType];if(!be){var ft=Ye.type.split(":");tt=ft[0],be=ft[1]}tt==="ref"?qt(be,{context:V})(ke.prototype,Ye.name):qt((Je={},Je[tt]=be,Je),{context:V})(ke.prototype,Ye.name)}else qt(Ye.type,{context:V})(ke.prototype,Ye.name)})});var We=Ge[fe.rootType],ut=new We;for(var at in We._definition.schema){var Ue=We._definition.schema[at];typeof Ue!="string"&&(ut[at]=typeof Ue=="function"?new Ue:new(an(Object.keys(Ue)[0])).constructor)}return ut},F([qt([so],gi)],f.prototype,"types",void 0),F([qt("number",gi)],f.prototype,"rootType",void 0),f}(dn);wt("map",{constructor:it}),wt("array",{constructor:Se}),wt("set",{constructor:no}),wt("collection",{constructor:to}),g.ArraySchema=Se,g.CollectionSchema=to,g.Context=Jt,g.MapSchema=it,g.Reflection=Yh,g.ReflectionField=ro,g.ReflectionType=so,g.Schema=dn,g.SchemaDefinition=Et,g.SetSchema=no,g.decode=Fa,g.defineTypes=P,g.deprecated=Js,g.dumpChanges=qh,g.encode=ki,g.filter=Ys,g.filterChildren=Ks,g.hasFilter=tn,g.registerType=wt,g.type=qt,Object.defineProperty(g,"__esModule",{value:!0})})}),oe=function(){function S(_,g){var T=this;this.onStateChange=Be(),this.onError=Be(),this.onLeave=Be(),this.onJoin=Be(),this.hasJoined=!1,this.onMessageHandlers=H(),this.roomId=null,this.name=_,g&&(this.serializer=new(we("schema")),this.rootSchema=g,this.serializer.state=new g),this.onError(function(U,F){return console.warn("colyseus.js - onError => (".concat(U,") ").concat(F))}),this.onLeave(function(){return T.removeAllListeners()})}return Object.defineProperty(S.prototype,"id",{get:function(){return this.roomId},enumerable:!1,configurable:!0}),S.prototype.connect=function(_,g,T){T===void 0&&(T=this);var U=new Pe;T.connection=U,U.events.onmessage=S.prototype.onMessageCallback.bind(T),U.events.onclose=function(F){if(!T.hasJoined){console.warn("Room connection was closed unexpectedly (".concat(F.code,"): ").concat(F.reason)),T.onError.invoke(F.code,F.reason);return}F.code===k.DEVMODE_RESTART&&g?g():(T.onLeave.invoke(F.code),T.destroy())},U.events.onerror=function(F){console.warn("Room, onError (".concat(F.code,"): ").concat(F.reason)),T.onError.invoke(F.code,F.reason)},U.connect(_)},S.prototype.leave=function(_){var g=this;return _===void 0&&(_=!0),new Promise(function(T){g.onLeave(function(U){return T(U)}),g.connection?_?g.connection.send([t.Protocol.LEAVE_ROOM]):g.connection.close():g.onLeave.invoke(k.CONSENTED)})},S.prototype.onMessage=function(_,g){return this.onMessageHandlers.on(this.getMessageHandlerKey(_),g)},S.prototype.send=function(_,g){var T=[t.Protocol.ROOM_DATA];typeof _=="string"?ce.encode.string(T,_):ce.encode.number(T,_);var U;if(g!==void 0){var F=re(g);U=new Uint8Array(T.length+F.byteLength),U.set(new Uint8Array(T),0),U.set(new Uint8Array(F),T.length)}else U=new Uint8Array(T);this.connection.send(U.buffer)},S.prototype.sendBytes=function(_,g){var T=[t.Protocol.ROOM_DATA_BYTES];typeof _=="string"?ce.encode.string(T,_):ce.encode.number(T,_);var U;U=new Uint8Array(T.length+(g.byteLength||g.length)),U.set(new Uint8Array(T),0),U.set(new Uint8Array(g),T.length),this.connection.send(U.buffer)},Object.defineProperty(S.prototype,"state",{get:function(){return this.serializer.getState()},enumerable:!1,configurable:!0}),S.prototype.removeAllListeners=function(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}},S.prototype.onMessageCallback=function(_){var g=Array.from(new Uint8Array(_.data)),T=g[0];if(T===t.Protocol.JOIN_ROOM){var U=1,F=ye(g,U);if(U+=ne(F),this.serializerId=ye(g,U),U+=ne(this.serializerId),!this.serializer){var ie=we(this.serializerId);this.serializer=new ie}g.length>U&&this.serializer.handshake&&this.serializer.handshake(g,{offset:U}),this.reconnectionToken="".concat(this.roomId,":").concat(F),this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([t.Protocol.JOIN_ROOM])}else if(T===t.Protocol.ERROR){var Y={offset:1},Q=ce.decode.number(g,Y),K=ce.decode.string(g,Y);this.onError.invoke(Q,K)}else if(T===t.Protocol.LEAVE_ROOM)this.leave();else if(T===t.Protocol.ROOM_DATA_SCHEMA){var Me={offset:1},Le=this.serializer.getState().constructor._context,B=Le.get(ce.decode.number(g,Me)),K=new B;K.decode(g,Me),this.dispatchMessage(B,K)}else if(T===t.Protocol.ROOM_STATE)g.shift(),this.setState(g);else if(T===t.Protocol.ROOM_STATE_PATCH)g.shift(),this.patch(g);else if(T===t.Protocol.ROOM_DATA){var J={offset:1},B=ce.decode.stringCheck(g,J)?ce.decode.string(g,J):ce.decode.number(g,J),K=g.length>J.offset?te(_.data,J.offset):void 0;this.dispatchMessage(B,K)}else if(T===t.Protocol.ROOM_DATA_BYTES){var ue={offset:1},B=ce.decode.stringCheck(g,ue)?ce.decode.string(g,ue):ce.decode.number(g,ue);this.dispatchMessage(B,new Uint8Array(g.slice(ue.offset)))}},S.prototype.setState=function(_){this.serializer.setState(_),this.onStateChange.invoke(this.serializer.getState())},S.prototype.patch=function(_){this.serializer.patch(_),this.onStateChange.invoke(this.serializer.getState())},S.prototype.dispatchMessage=function(_,g){var T=this.getMessageHandlerKey(_);this.onMessageHandlers.events[T]?this.onMessageHandlers.emit(T,g):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",_,g):console.warn("colyseus.js: onMessage() not registered for type '".concat(_,"'."))},S.prototype.destroy=function(){this.serializer&&this.serializer.teardown()},S.prototype.getMessageHandlerKey=function(_){switch(typeof _){case"function":return"$".concat(_._typeid);case"string":return _;case"number":return"i".concat(_);default:throw new Error("invalid message type.")}},S}(),pe,Ce=function(S){s(_,S);function _(g,T){var U=S.call(this,g)||this;return U.code=T,Object.setPrototypeOf(U,_.prototype),U}return _}(Error),Ae=typeof window<"u"&&typeof((pe=window==null?void 0:window.location)===null||pe===void 0?void 0:pe.hostname)<"u"?"".concat(window.location.protocol.replace("http","ws"),"//").concat(window.location.hostname).concat(window.location.port&&":".concat(window.location.port)):"ws://127.0.0.1:2567",ze=function(){function S(_){if(_===void 0&&(_=Ae),typeof _=="string"){var g=new URL(_),T=g.protocol==="https:"||g.protocol==="wss:",U=Number(g.port||(T?443:80));this.settings={hostname:g.hostname,pathname:g.pathname!=="/"?g.pathname:"",port:U,secure:T}}else _.port===void 0&&(_.port=_.secure?443:80),_.pathname===void 0&&(_.pathname=""),this.settings=_}return S.prototype.joinOrCreate=function(_,g,T){return g===void 0&&(g={}),o(this,void 0,void 0,function(){return a(this,function(U){switch(U.label){case 0:return[4,this.createMatchMakeRequest("joinOrCreate",_,g,T)];case 1:return[2,U.sent()]}})})},S.prototype.create=function(_,g,T){return g===void 0&&(g={}),o(this,void 0,void 0,function(){return a(this,function(U){switch(U.label){case 0:return[4,this.createMatchMakeRequest("create",_,g,T)];case 1:return[2,U.sent()]}})})},S.prototype.join=function(_,g,T){return g===void 0&&(g={}),o(this,void 0,void 0,function(){return a(this,function(U){switch(U.label){case 0:return[4,this.createMatchMakeRequest("join",_,g,T)];case 1:return[2,U.sent()]}})})},S.prototype.joinById=function(_,g,T){return g===void 0&&(g={}),o(this,void 0,void 0,function(){return a(this,function(U){switch(U.label){case 0:return[4,this.createMatchMakeRequest("joinById",_,g,T)];case 1:return[2,U.sent()]}})})},S.prototype.reconnect=function(_,g){return o(this,void 0,void 0,function(){var T,U,F;return a(this,function(ie){switch(ie.label){case 0:if(typeof _=="string"&&typeof g=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");return T=_.split(":"),U=T[0],F=T[1],[4,this.createMatchMakeRequest("reconnect",U,{reconnectionToken:F},g)];case 1:return[2,ie.sent()]}})})},S.prototype.getAvailableRooms=function(_){return _===void 0&&(_=""),o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,v(this.getHttpEndpoint("".concat(_)),{headers:{Accept:"application/json"}})];case 1:return[2,g.sent().data]}})})},S.prototype.consumeSeatReservation=function(_,g,T){return o(this,void 0,void 0,function(){var U,F,ie,Y=this;return a(this,function(Q){return U=this.createRoom(_.room.name,g),U.roomId=_.room.roomId,U.sessionId=_.sessionId,F={sessionId:U.sessionId},_.reconnectionToken&&(F.reconnectionToken=_.reconnectionToken),ie=T||U,U.connect(this.buildEndpoint(_.room,F),_.devMode&&function(){return o(Y,void 0,void 0,function(){var K,Me,Le,B=this;return a(this,function(J){return console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260)," Re-establishing connection with room id '").concat(U.roomId,"'...")),K=0,Me=8,Le=function(){return o(B,void 0,void 0,function(){return a(this,function(ue){switch(ue.label){case 0:K++,ue.label=1;case 1:return ue.trys.push([1,3,,4]),[4,this.consumeSeatReservation(_,g,ie)];case 2:return ue.sent(),console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(9989)," Successfully re-established connection with room '").concat(U.roomId,"'")),[3,4];case 3:return ue.sent(),K<Me?(console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(128260)," retrying... (").concat(K," out of ").concat(Me,")")),setTimeout(Le,2e3)):console.info("[Colyseus devMode]: ".concat(String.fromCodePoint(10060)," Failed to reconnect. Is your server running? Please check server logs.")),[3,4];case 4:return[2]}})})},setTimeout(Le,2e3),[2]})})},ie),[2,new Promise(function(K,Me){var Le=function(B,J){return Me(new X(B,J))};ie.onError.once(Le),ie.onJoin.once(function(){ie.onError.remove(Le),K(ie)})})]})})},S.prototype.createMatchMakeRequest=function(_,g,T,U){return T===void 0&&(T={}),o(this,void 0,void 0,function(){var F;return a(this,function(ie){switch(ie.label){case 0:return[4,I(this.getHttpEndpoint("".concat(_,"/").concat(g)),{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(T)})];case 1:if(F=ie.sent().data,F.error)throw new Ce(F.error,F.code);return _==="reconnect"&&(F.reconnectionToken=T.reconnectionToken),[4,this.consumeSeatReservation(F,U)];case 2:return[2,ie.sent()]}})})},S.prototype.createRoom=function(_,g){return new oe(_,g)},S.prototype.buildEndpoint=function(_,g){g===void 0&&(g={});var T=[];for(var U in g)g.hasOwnProperty(U)&&T.push("".concat(U,"=").concat(g[U]));var F=this.settings.secure?"wss://":"ws://";return _.publicAddress?F+="".concat(_.publicAddress):F+="".concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname),"".concat(F,"/").concat(_.processId,"/").concat(_.roomId,"?").concat(T.join("&"))},S.prototype.getHttpEndpoint=function(_){return _===void 0&&(_=""),"".concat(this.settings.secure?"https":"http","://").concat(this.settings.hostname).concat(this.getEndpointPort()).concat(this.settings.pathname,"/matchmake/").concat(_)},S.prototype.getEndpointPort=function(){return this.settings.port!==80&&this.settings.port!==443?":".concat(this.settings.port):""},S}(),Oe;function De(){return Oe||(Oe=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:typeof window<"u"&&window.localStorage?window.localStorage:{cache:{},setItem:function(S,_){this.cache[S]=_},getItem:function(S){this.cache[S]},removeItem:function(S){delete this.cache[S]}}),Oe}function qe(S,_){De().setItem(S,_)}function ht(S){De().removeItem(S)}function N(S,_){var g=De().getItem(S);typeof Promise>"u"||!(g instanceof Promise)?_(g):g.then(function(T){return _(T)})}var C="colyseus-auth-token";t.Platform=void 0,function(S){S.ios="ios",S.android="android"}(t.Platform||(t.Platform={}));var Z=function(){function S(_){var g=this;this._id=void 0,this.username=void 0,this.displayName=void 0,this.avatarUrl=void 0,this.isAnonymous=void 0,this.email=void 0,this.lang=void 0,this.location=void 0,this.timezone=void 0,this.metadata=void 0,this.devices=void 0,this.facebookId=void 0,this.twitterId=void 0,this.googleId=void 0,this.gameCenterId=void 0,this.steamId=void 0,this.friendIds=void 0,this.blockedUserIds=void 0,this.createdAt=void 0,this.updatedAt=void 0,this.token=void 0,this.endpoint=_.replace("ws","http"),N(C,function(T){return g.token=T})}return Object.defineProperty(S.prototype,"hasToken",{get:function(){return!!this.token},enumerable:!1,configurable:!0}),S.prototype.login=function(_){return _===void 0&&(_={}),o(this,void 0,void 0,function(){var g,T,U;return a(this,function(F){switch(F.label){case 0:return g=Object.assign({},_),this.hasToken&&(g.token=this.token),[4,this.request("post","/auth",g)];case 1:T=F.sent(),this.token=T.token,qe(C,this.token);for(U in T)this.hasOwnProperty(U)&&(this[U]=T[U]);return this.registerPingService(),[2,this]}})})},S.prototype.save=function(){return o(this,void 0,void 0,function(){return a(this,function(_){switch(_.label){case 0:return[4,this.request("put","/auth",{},{username:this.username,displayName:this.displayName,avatarUrl:this.avatarUrl,lang:this.lang,location:this.location,timezone:this.timezone})];case 1:return _.sent(),[2,this]}})})},S.prototype.getFriends=function(){return o(this,void 0,void 0,function(){return a(this,function(_){switch(_.label){case 0:return[4,this.request("get","/friends/all")];case 1:return[2,_.sent()]}})})},S.prototype.getOnlineFriends=function(){return o(this,void 0,void 0,function(){return a(this,function(_){switch(_.label){case 0:return[4,this.request("get","/friends/online")];case 1:return[2,_.sent()]}})})},S.prototype.getFriendRequests=function(){return o(this,void 0,void 0,function(){return a(this,function(_){switch(_.label){case 0:return[4,this.request("get","/friends/requests")];case 1:return[2,_.sent()]}})})},S.prototype.sendFriendRequest=function(_){return o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,this.request("post","/friends/requests",{userId:_})];case 1:return[2,g.sent()]}})})},S.prototype.acceptFriendRequest=function(_){return o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,this.request("put","/friends/requests",{userId:_})];case 1:return[2,g.sent()]}})})},S.prototype.declineFriendRequest=function(_){return o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,this.request("del","/friends/requests",{userId:_})];case 1:return[2,g.sent()]}})})},S.prototype.blockUser=function(_){return o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,this.request("post","/friends/block",{userId:_})];case 1:return[2,g.sent()]}})})},S.prototype.unblockUser=function(_){return o(this,void 0,void 0,function(){return a(this,function(g){switch(g.label){case 0:return[4,this.request("put","/friends/block",{userId:_})];case 1:return[2,g.sent()]}})})},S.prototype.request=function(_,g,T,U,F){return T===void 0&&(T={}),F===void 0&&(F={}),o(this,void 0,void 0,function(){var ie,Y,Q,K;return a(this,function(Me){switch(Me.label){case 0:F.Accept="application/json",this.hasToken&&(F.Authorization="Bearer "+this.token),ie=[];for(Y in T)ie.push("".concat(Y,"=").concat(T[Y]));return Q=ie.length>0?"?".concat(ie.join("&")):"",K={headers:F},U&&(K.body=U),[4,O[_]("".concat(this.endpoint).concat(g).concat(Q),K)];case 1:return[2,Me.sent().data]}})})},S.prototype.logout=function(){this.token=void 0,ht(C),this.unregisterPingService()},S.prototype.registerPingService=function(_){var g=this;_===void 0&&(_=15e3),this.unregisterPingService(),this.keepOnlineInterval=setInterval(function(){return g.request("get","/auth")},_)},S.prototype.unregisterPingService=function(){clearInterval(this.keepOnlineInterval)},S}(),ge=function(){function S(){}return S.prototype.setState=function(_){return this.state.decode(_)},S.prototype.getState=function(){return this.state},S.prototype.patch=function(_){return this.state.decode(_)},S.prototype.teardown=function(){var _,g;(g=(_=this.state)===null||_===void 0?void 0:_.$changes)===null||g===void 0||g.root.clearRefs()},S.prototype.handshake=function(_,g){if(this.state){var T=new ce.Reflection;T.decode(_,g)}else this.state=ce.Reflection.decode(_,g)},S}(),ve=function(){function S(){}return S.prototype.setState=function(_){},S.prototype.getState=function(){return null},S.prototype.patch=function(_){},S.prototype.teardown=function(){},S.prototype.handshake=function(_){},S}();Te("schema",ge),Te("none",ve),t.Auth=Z,t.Client=ze,t.Room=oe,t.SchemaSerializer=ge,t.registerSerializer=Te,Object.defineProperty(t,"__esModule",{value:!0})})})(la,la.exports);var mv=la.exports;let Lh=new mv.Client("ws://192.168.1.76:3000"),Xr=!1,ks="",ha="",Ns=!1,zs="",Pa="white",Hs;const Ia=new dv,gv=new L0,_v=new cv,Bl=new wh,Ot=new u_,Ci=new en(75,window.innerWidth/window.innerHeight,.1,1e3);Ci.position.set(110,100,110);const Jn=new uh({alpha:!0});Jn.setClearColor(31293,1);Jn.shadowMap.enabled=!0;Jn.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Jn.domElement);let hi,Xt,Wt,Br;const vn=new fv(Jn,Ci,Jn.domElement);Ia.load("./models/welcome.stl",r=>{let e=new bn({color:13504806});hi=new $t(r,e),hi.scale.set(.25,.25,.25),hi.position.set(-82,0,0),hi.rotateX(-Math.PI/2),Ot.add(hi)});Ia.load("./models/create.stl",r=>{let e=new bn({color:13504806});Xt=new $t(r,e),Xt.scale.set(.17,.17,.17),Xt.position.set(-60,0,20),Xt.rotateX(-Math.PI/2),vn.add(Xt),Xt.addEventListener("mouseover",t=>{document.body.style.cursor="pointer",Xt.material.color.setHex(16777215)}),Xt.addEventListener("mouseout",t=>{document.body.style.cursor="default",Xt.material.color.setHex(13504806)}),Xt.addEventListener("click",t=>{Lh.create("chess_room").then(n=>{ks=n.id,_v.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",i=>{let s=new pv(`Room Id: 
${n.id}`,{size:70,height:10,font:i});Br=new $t(s,new bn({color:13504806})),Br.scale.set(.25,.25,.25),Br.position.set(-60,0,0),Br.rotateX(-Math.PI/2),Ot.remove(hi),Ot.remove(Wt),Ot.remove(Xt),vn.remove(Wt),vn.remove(Xt),Xr=!0,Ot.add(Br);try{yv(ks)}catch(o){console.error(o)}})}).catch(n=>{console.log("CREATE ERROR",n)})}),Ot.add(Xt)});Ia.load("./models/join.stl",r=>{let e=new bn({color:13504806});Wt=new $t(r,e),Wt.scale.set(.17,.17,.17),Wt.position.set(20,0,20),Wt.rotateX(-Math.PI/2),vn.add(Wt),Wt.addEventListener("mouseover",t=>{document.body.style.cursor="pointer",Wt.material.color.setHex(16777215)}),Wt.addEventListener("mouseout",t=>{document.body.style.cursor="default",Wt.material.color.setHex(13504806)}),Wt.addEventListener("click",t=>{ks=prompt("What is the Room Id?: ",""),Lh.joinById(ks).then(n=>{Hs=n,n.onStateChange(i=>{if(i.started==!0&&(Xr=!0),Pa=i.turn,Xr)for(let s=0;s<i.pieces_array.length;++s)i.pieces_array[s].piece_name==i.recentMove&&(Nt[i.recentMove].position.x=i.pieces_array[s].x,Nt[i.recentMove].position.z=i.pieces_array[s].z,Nt[i.recentMove].update(),xv(i.recentMove));Xr||(i.number_connected==2?(ha="white",Ot.remove(hi),Ot.remove(Wt),Ot.remove(Xt),vn.remove(Wt),vn.remove(Xt)):i.number_connected==3&&(ha="black",n.send("started","started"),Ot.remove(hi),Ot.remove(Wt),Ot.remove(Xt),vn.remove(Wt),vn.remove(Xt)))})}).catch(n=>{console.log("CREATE ERROR",n)})}),Ot.add(Wt)});class gt{constructor({url:e="",team:t="white",position:n={x:0,y:0,z:0},rotation:i={x:0,y:0,z:0},piece_name:s=""}){this.piece_name=s,this.position=n,this.team=t,this.rotation=i,gv.load(e,o=>{o.scene.position.set(this.position.x,this.position.y,this.position.z),o.scene.rotation.x=i.x,o.scene.rotation.y=i.y,o.scene.rotation.z=i.z,o.scene.traverse(a=>{a.isMesh&&(this.team=="white"?a.material=new bn({color:t}):a.material=new bn({color:1908510}))}),vn.add(o.scene),o.scene.addEventListener("mouseover",a=>{document.body.style.cursor="pointer"}),o.scene.addEventListener("mouseout",a=>{document.body.style.cursor="default"}),o.scene.addEventListener("mousedown",a=>{Xr&&(this.team==Pa&&(zs=this.piece_name),Ns=!0,setTimeout(function(){Ns&&(Ns=!1,zs="")},1e3))}),o.scene.addEventListener("mouseup",a=>{Ns=!1}),o.scene.scale.set(3.5,3.5,3.5),this.model=o,Ot.add(o.scene)},o=>{console.log(o.loaded/o.total*100+"% loaded")},o=>{console.log("An error happened: "+o)})}update(){this.model.scene.position.x=this.position.x,this.model.scene.position.y=this.position.y,this.model.scene.position.z=this.position.z}}let Nt={white_pawn_1:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:70,y:0,z:50},piece_name:"white_pawn_1"}),white_pawn_2:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:50,y:0,z:50},piece_name:"white_pawn_2"}),white_pawn_3:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:30,y:0,z:50},piece_name:"white_pawn_3"}),white_pawn_4:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:10,y:0,z:50},piece_name:"white_pawn_4"}),white_pawn_5:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:-10,y:0,z:50},piece_name:"white_pawn_5"}),white_pawn_6:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:-30,y:0,z:50},piece_name:"white_pawn_6"}),white_pawn_7:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:-50,y:0,z:50},piece_name:"white_pawn_7"}),white_pawn_8:new gt({url:"./models/pawn/scene.gltf",team:"white",position:{x:-70,y:0,z:50},piece_name:"white_pawn_8"}),black_pawn_1:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:70,y:0,z:-50},piece_name:"black_pawn_1"}),black_pawn_2:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:50,y:0,z:-50},piece_name:"black_pawn_2"}),black_pawn_3:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:30,y:0,z:-50},piece_name:"black_pawn_3"}),black_pawn_4:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:10,y:0,z:-50},piece_name:"black_pawn_4"}),black_pawn_5:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:-10,y:0,z:-50},piece_name:"black_pawn_5"}),black_pawn_6:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:-30,y:0,z:-50},piece_name:"black_pawn_6"}),black_pawn_7:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:-50,y:0,z:-50},piece_name:"black_pawn_7"}),black_pawn_8:new gt({url:"./models/pawn/scene.gltf",team:"black",position:{x:-70,y:0,z:-50},piece_name:"black_pawn_8"}),white_rook_1:new gt({url:"./models/rook/scene.gltf",team:"white",position:{x:70,y:0,z:70},piece_name:"white_rook_1"}),white_rook_2:new gt({url:"./models/rook/scene.gltf",team:"white",position:{x:-70,y:0,z:70},piece_name:"white_rook_2"}),black_rook_1:new gt({url:"./models/rook/scene.gltf",team:"black",position:{x:70,y:0,z:-70},piece_name:"black_rook_1"}),black_rook_2:new gt({url:"./models/rook/scene.gltf",team:"black",position:{x:-70,y:0,z:-70},piece_name:"black_rook_2"}),white_knight_1:new gt({url:"./models/knight/scene.gltf",team:"white",position:{x:50,y:0,z:70},rotation:{x:0,y:-Math.PI/2,z:0},piece_name:"white_knight_1"}),white_knight_2:new gt({url:"./models/knight/scene.gltf",team:"white",position:{x:-50,y:0,z:70},rotation:{x:0,y:-Math.PI/2,z:0},piece_name:"white_knight_2"}),black_knight_1:new gt({url:"./models/knight/scene.gltf",team:"black",position:{x:50,y:0,z:-70},rotation:{x:0,y:Math.PI/2,z:0},piece_name:"black_knight_1"}),black_knight_2:new gt({url:"./models/knight/scene.gltf",team:"black",position:{x:-50,y:0,z:-70},rotation:{x:0,y:Math.PI/2,z:0},piece_name:"black_knight_2"}),white_bishop_1:new gt({url:"./models/bishop/scene.gltf",team:"white",position:{x:30,y:0,z:70},piece_name:"white_bishop_1"}),white_bishop_2:new gt({url:"./models/bishop/scene.gltf",team:"white",position:{x:-30,y:0,z:70},piece_name:"white_bishop_2"}),black_bishop_1:new gt({url:"./models/bishop/scene.gltf",team:"black",position:{x:30,y:0,z:-70},piece_name:"black_bishop_1"}),black_bishop_2:new gt({url:"./models/bishop/scene.gltf",team:"black",position:{x:-30,y:0,z:-70},piece_name:"black_bishop_2"}),white_king:new gt({url:"./models/king/scene.gltf",team:"white",position:{x:10,y:0,z:70},piece_name:"white_king"}),white_queen:new gt({url:"./models/queen/scene.gltf",team:"white",position:{x:-10,y:0,z:70},piece_name:"white_queen"}),black_king:new gt({url:"./models/king/scene.gltf",team:"black",position:{x:10,y:0,z:-70},piece_name:"black_king"}),black_queen:new gt({url:"./models/queen/scene.gltf",team:"black",position:{x:-10,y:0,z:-70},piece_name:"black_queen"})};class Ph extends $t{constructor({width:e,height:t,depth:n,color:i=65280,velocity:s={x:0,y:0,z:0},material:o=new es({color:i})}){super(new Sr(e,t,n),o),this.height=t,this.width=e,this.depth=n,this.bottom=this.position.y-this.height/2,this.top=this.position.y+this.height/2,this.velocity=s}}class qs extends bh{constructor({color:e=16777215,intensity:t=1,castShadow:n=!1}){super(e,t),this.castShadow=n}}new C0(Ci,Jn.domElement);const ns=new Ph({width:160,height:.1,depth:160,color:16777215,material:[new bn({color:"lightgrey"}),new bn({color:"lightgrey"}),new es({map:new Ah().load("./img/Chess_Board.png")}),new bn({color:"lightgrey"}),new bn({color:"lightgrey"}),new bn({color:"lightgrey"})]});ns.position.set(0,0,0);ns.receiveShadow=!0;new Ph({width:10,height:10,depth:10});vn.add(ns);ns.addEventListener("click",r=>{if(ha!=Pa)return;Bl.setFromCamera(r.coords,Ci);const e=Bl.intersectObjects(Ot.children);for(let t in Nt)Nt[t].piece_name==zs&&((Math.abs(Nt[t].position.x-e[0].point.x)>10||Math.abs(Nt[t].position.z-e[0].point.z)>10)&&(Nt[t].position.x=e[0].point.x,Nt[t].position.z=e[0].point.z,zs="",Hs.send("move",JSON.stringify({piece_name:t,x:Nt[t].position.x,z:Nt[t].position.z})),Hs.send("turn_change")),Nt[t].update())});Ot.add(ns);const Ih=new qs({castShadow:!0}),Dh=new qs({intensity:.5}),Nh=new qs({intensity:.5}),Uh=new qs({intensity:.5});Ih.position.set(1,2,0);Dh.position.set(-3,2,0);Nh.position.set(0,2,3);Uh.position.set(0,2,-3);Ot.add(Ih,Dh,Nh,Uh);function Oh(){requestAnimationFrame(Oh),vn.update(),vv(Jn)&&(Ci.aspect=window.innerWidth/window.innerHeight,Ci.updateProjectionMatrix()),Jn.render(Ot,Ci)}if(Rl.isWebGLAvailable())Oh();else{const r=Rl.getWebGLErrorMessage();document.getElementById("container").appendChild(r)}function vv(r){const e=r.domElement,t=innerWidth,n=innerHeight,i=e.width!==t||e.height!==n;return i&&r.setSize(t,n,!1),i}function xv(r){let e=new Rn().setFromObject(Nt[r].model.scene);for(let t in Nt)if(Nt[t].team!=Nt[r].team){let n=new Rn().setFromObject(Nt[t].model.scene);e.intersectsBox(n)&&(Ot.remove(Nt[t].model.scene),vn.remove(Nt[t].model.scene),delete Nt[t],Hs.send("collide",t))}}async function yv(r){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(r);else{const e=document.createElement("textarea");e.value=r,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy")}catch(t){console.error(t)}finally{e.remove()}}}
