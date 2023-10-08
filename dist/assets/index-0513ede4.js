var td=Object.defineProperty;var nd=(s,e,t)=>e in s?td(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var os=(s,e,t)=>(nd(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _l="152",id=0,Ql=1,rd=2,ru=1,sd=2,ri=3,ui=0,tn=1,Mn=2,Ci=0,Fr=1,Rs=2,ec=3,tc=4,ad=5,Lr=100,od=101,ld=102,nc=103,ic=104,cd=200,hd=201,ud=202,fd=203,su=204,au=205,dd=206,pd=207,md=208,_d=209,gd=210,xd=0,vd=1,Md=2,ko=3,yd=4,Sd=5,Td=6,Ed=7,gl=0,bd=1,Ad=2,hi=0,wd=1,Rd=2,Cd=3,Ld=4,Pd=5,ou=300,Vr=301,Wr=302,zo=303,Ho=304,Oa=306,Xr=1e3,Jt=1001,Aa=1002,Ut=1003,Go=1004,ya=1005,Ct=1006,lu=1007,Di=1008,nr=1009,Id=1010,Dd=1011,cu=1012,Ud=1013,Yi=1014,Nn=1015,li=1016,Nd=1017,Fd=1018,Or=1020,Od=1021,hn=1023,Bd=1024,kd=1025,Zi=1026,qr=1027,hu=1028,zd=1029,Hd=1030,Gd=1031,Vd=1033,ja=33776,Ka=33777,Za=33778,$a=33779,rc=35840,sc=35841,ac=35842,oc=35843,Wd=36196,lc=37492,cc=37496,hc=37808,uc=37809,fc=37810,dc=37811,pc=37812,mc=37813,_c=37814,gc=37815,xc=37816,vc=37817,Mc=37818,yc=37819,Sc=37820,Tc=37821,Ja=36492,Xd=36283,Ec=36284,bc=36285,Ac=36286,uu=2200,qd=2201,Yd=2202,Cs=2300,Yr=2301,Qa=2302,Pr=2400,Ir=2401,wa=2402,xl=2500,jd=2501,Kd=0,fu=1,Vo=2,du=3e3,$i=3001,Zd=3200,$d=3201,vl=0,Jd=1,Li="",Fe="srgb",An="srgb-linear",pu="display-p3",eo=7680,Qd=519,Wo=35044,wc="300 es",Xo=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rc=1234567;const ys=Math.PI/180,jr=180/Math.PI;function Fn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function Ml(s,e){return(s%e+e)%e}function ep(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tp(s,e,t){return s!==e?(t-s)/(e-s):0}function Ss(s,e,t){return(1-t)*s+t*e}function np(s,e,t,n){return Ss(s,e,1-Math.exp(-t*n))}function ip(s,e=1){return e-Math.abs(Ml(s,e*2)-e)}function rp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ap(s,e){return s+Math.floor(Math.random()*(e-s+1))}function op(s,e){return s+Math.random()*(e-s)}function lp(s){return s*(.5-Math.random())}function cp(s){s!==void 0&&(Rc=s);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(s){return s*ys}function up(s){return s*jr}function qo(s){return(s&s-1)===0&&s!==0}function mu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _u(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*x,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*x,o*c);break;case"ZYZ":s.set(l*x,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dp={DEG2RAD:ys,RAD2DEG:jr,generateUUID:Fn,clamp:Ft,euclideanModulo:Ml,mapLinear:ep,inverseLerp:tp,lerp:Ss,damp:np,pingpong:ip,smoothstep:rp,smootherstep:sp,randInt:ap,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:qo,ceilPowerOfTwo:mu,floorPowerOfTwo:_u,setQuaternionFromProperEuler:fp,normalize:lt,denormalize:ci};let He=class gu{constructor(e=0,t=0){gu.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class je{constructor(){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],_=i[0],m=i[3],d=i[6],S=i[1],M=i[4],E=i[7],T=i[2],R=i[5],P=i[8];return r[0]=a*_+o*S+l*T,r[3]=a*m+o*M+l*R,r[6]=a*d+o*E+l*P,r[1]=c*_+h*S+u*T,r[4]=c*m+h*M+u*R,r[7]=c*d+h*E+u*P,r[2]=f*_+p*S+x*T,r[5]=f*m+p*M+x*R,r[8]=f*d+p*E+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,x=t*u+n*f+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new je;function xu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Cc={};function Ts(s){s in Cc||(Cc[s]=!0,console.warn(s))}function Br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function no(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pp=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mp=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _p(s){return s.convertSRGBToLinear().applyMatrix3(mp)}function gp(s){return s.applyMatrix3(pp).convertLinearToSRGB()}const xp={[An]:s=>s,[Fe]:s=>s.convertSRGBToLinear(),[pu]:_p},vp={[An]:s=>s,[Fe]:s=>s.convertLinearToSRGB(),[pu]:gp},Cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return An},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=xp[e],i=vp[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ur;class vu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=Ls("canvas")),ur.width=e.width,ur.height=e.height;const n=ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Br(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Br(t[n]/255)*255):t[n]=Br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mu{constructor(e=null){this.isSource=!0,this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(io(i[a].image)):r.push(io(i[a]))}else r=io(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function io(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mp=0;class Bt extends sr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Jt,i=Jt,r=Ct,a=Di,o=hn,l=nr,c=Bt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Fn(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$i?Fe:Li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?$i:du}set encoding(e){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Fe:Li}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ou;Bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(p+1)/2,T=(d+1)/2,R=(h+f)/4,P=(u+_)/4,I=(x+m)/4;return M>E&&M>T?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=P/n):E>T?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=R/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=P/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$i?Fe:Li),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yp extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==x){let m=1-o;const d=l*f+c*p+h*x+u*_,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,d*S);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}const E=o*S;if(l=l*m+f*E,c=c*m+p*E,h=h*m+x*E,u=u*m+_*E,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*p-c*f,e[t+1]=l*x+h*f+c*u-o*p,e[t+2]=c*x+h*p+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),p=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-r*i,u=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+h*-o-u*-a,this.y=h*l+f*-a+u*-r-c*-o,this.z=u*l+f*-o+c*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new k,Lc=new Bn;class pi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox),fr.applyMatrix4(e.matrixWorld),this.union(fr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Jn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else i.boundingBox===null&&i.computeBoundingBox(),fr.copy(i.boundingBox),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Ys.subVectors(this.max,ls),dr.subVectors(e.a,ls),pr.subVectors(e.b,ls),mr.subVectors(e.c,ls),_i.subVectors(pr,dr),gi.subVectors(mr,pr),Bi.subVectors(dr,mr);let t=[0,-_i.z,_i.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!so(t,dr,pr,mr,Ys)||(t=[1,0,0,0,1,0,0,0,1],!so(t,dr,pr,mr,Ys))?!1:(js.crossVectors(_i,gi),t=[js.x,js.y,js.z],so(t,dr,pr,mr,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new k,new k,new k,new k,new k,new k,new k,new k],Jn=new k,fr=new pi,dr=new k,pr=new k,mr=new k,_i=new k,gi=new k,Bi=new k,ls=new k,Ys=new k,js=new k,ki=new k;function so(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ki.fromArray(s,r);const o=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Sp=new pi,cs=new k,ao=new k;class mi{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(ao)),this.expandByPoint(cs.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new k,oo=new k,Ks=new k,xi=new k,lo=new k,Zs=new k,co=new k;class yl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(oo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ks),o=xi.dot(this.direction),l=-xi.dot(Ks),c=xi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oo).addScaledVector(Ks,f),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,r){lo.subVectors(t,e),Zs.subVectors(n,e),co.crossVectors(lo,Zs);let a=this.direction.dot(co),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Zs.crossVectors(xi,Zs));if(l<0)return null;const c=o*this.direction.dot(lo.cross(xi));if(c<0||l+c>a)return null;const h=-o*xi.dot(co);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,l,c,h,u,f,p,x,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,x=c*h,_=c*u;t[0]=f+_*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,x=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+x,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),vi.crossVectors(n,on),vi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),vi.crossVectors(n,on)),vi.normalize(),$s.crossVectors(on,vi),i[0]=vi.x,i[4]=$s.x,i[8]=on.x,i[1]=vi.y,i[5]=$s.y,i[9]=on.y,i[2]=vi.z,i[6]=$s.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],d=n[14],S=n[3],M=n[7],E=n[11],T=n[15],R=i[0],P=i[4],I=i[8],v=i[12],C=i[1],q=i[5],X=i[9],O=i[13],V=i[2],W=i[6],Q=i[10],Y=i[14],Z=i[3],oe=i[7],ee=i[11],Ee=i[15];return r[0]=a*R+o*C+l*V+c*Z,r[4]=a*P+o*q+l*W+c*oe,r[8]=a*I+o*X+l*Q+c*ee,r[12]=a*v+o*O+l*Y+c*Ee,r[1]=h*R+u*C+f*V+p*Z,r[5]=h*P+u*q+f*W+p*oe,r[9]=h*I+u*X+f*Q+p*ee,r[13]=h*v+u*O+f*Y+p*Ee,r[2]=x*R+_*C+m*V+d*Z,r[6]=x*P+_*q+m*W+d*oe,r[10]=x*I+_*X+m*Q+d*ee,r[14]=x*v+_*O+m*Y+d*Ee,r[3]=S*R+M*C+E*V+T*Z,r[7]=S*P+M*q+E*W+T*oe,r[11]=S*I+M*X+E*Q+T*ee,r[15]=S*v+M*O+E*Y+T*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],S=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,M=x*f*c-h*m*c-x*l*p+a*m*p+h*l*d-a*f*d,E=h*_*c-x*u*c+x*o*p-a*_*p-h*o*d+a*u*d,T=x*u*l-h*_*l-x*o*f+a*_*f+h*o*m-a*u*m,R=t*S+n*M+i*E+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=S*P,e[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*P,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*d+n*l*d)*P,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*p-n*l*p)*P,e[4]=M*P,e[5]=(h*m*r-x*f*r+x*i*p-t*m*p-h*i*d+t*f*d)*P,e[6]=(x*l*r-a*m*r-x*i*c+t*m*c+a*i*d-t*l*d)*P,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*P,e[8]=E*P,e[9]=(x*u*r-h*_*r-x*n*p+t*_*p+h*n*d-t*u*d)*P,e[10]=(a*_*r-x*o*r+x*n*c-t*_*c-a*n*d+t*o*d)*P,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=T*P,e[13]=(h*_*i-x*u*i+x*n*f-t*_*f-h*n*m+t*u*m)*P,e[14]=(x*o*i-a*_*i-x*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,x=r*u,_=a*h,m=a*u,d=o*u,S=l*c,M=l*h,E=l*u,T=n.x,R=n.y,P=n.z;return i[0]=(1-(_+d))*T,i[1]=(p+E)*T,i[2]=(x-M)*T,i[3]=0,i[4]=(p-E)*R,i[5]=(1-(f+d))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(x+M)*P,i[9]=(m-S)*P,i[10]=(1-(f+_))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const c=1/r,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-r),u=(t+e)*l,f=(n+i)*c,p=(a+r)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _r=new k,Ln=new Ye,Tp=new k(0,0,0),Ep=new k(1,1,1),vi=new k,$s=new k,on=new k,Pc=new Ye,Ic=new Bn;class Ba{constructor(e=0,t=0,n=0,i=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bp=0;const Dc=new k,gr=new Bn,ei=new Ye,Js=new k,hs=new k,Ap=new k,wp=new Bn,Uc=new k(1,0,0),Nc=new k(0,1,0),Fc=new k(0,0,1),Rp={type:"added"},Oc={type:"removed"};class xt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new k,t=new Ba,n=new Bn,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(hs,Js,this.up):ei.lookAt(Js,hs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(ei),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Oc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new k(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new k,ti=new k,ho=new k,ni=new k,xr=new k,vr=new k,Bc=new k,uo=new k,fo=new k,po=new k;let Qs=!1;class Un{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),ti.subVectors(n,t),ho.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(ho),c=ti.dot(ti),h=ti.dot(ho),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const f=1/u,p=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,n,i,r,a,o,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ni),l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),ti.subVectors(e,t),Pn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;xr.subVectors(i,n),vr.subVectors(r,n),uo.subVectors(e,n);const l=xr.dot(uo),c=vr.dot(uo);if(l<=0&&c<=0)return t.copy(n);fo.subVectors(e,i);const h=xr.dot(fo),u=vr.dot(fo);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);po.subVectors(e,r);const p=xr.dot(po),x=vr.dot(po);if(x>=0&&p<=x)return t.copy(r);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(vr,o);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Bc.subVectors(r,i),o=(u-h)/(u-h+(p-x)),t.copy(i).addScaledVector(Bc,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(xr,a).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cp=0;class kn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Fr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=su,this.blendDst=au,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ea={h:0,s:0,l:0};function mo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Cn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Cn.workingColorSpace){if(e=Ml(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return Cn.toWorkingColorSpace(this,i),this}setStyle(e,t=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Cn.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Ft(Gt.r*255,0,255))*65536+Math.round(Ft(Gt.g*255,0,255))*256+Math.round(Ft(Gt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Cn.workingColorSpace){Cn.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Cn.workingColorSpace){return Cn.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Fe){Cn.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),In.h+=e,In.s+=t,In.l+=n,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(ea);const n=Ss(In.h,ea.h,t),i=Ss(In.s,ea.s,t),r=Ss(In.l,ea.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Oe;Oe.NAMES=Tu;class Ei extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const oi=Lp();function Lp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Pp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ft(s,-65504,65504),oi.floatView[0]=s;const e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function Ip(s){const e=s>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(s&1023)]+oi.exponentTable[e],oi.floatView[0]}const kc={toHalfFloat:Pp,fromHalfFloat:Ip},At=new k,ta=new He;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Eu extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dp=0;const mn=new Ye,_o=new xt,Mr=new k,ln=new pi,us=new pi,Dt=new k;class Rn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xu(e)?bu:Eu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ln.min,us.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,us.max),ln.expandByPoint(Dt)):(ln.expandByPoint(us.min),ln.expandByPoint(us.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),Dt.add(Mr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new k,h[C]=new k;const u=new k,f=new k,p=new k,x=new He,_=new He,m=new He,d=new k,S=new k;function M(C,q,X){u.fromArray(i,C*3),f.fromArray(i,q*3),p.fromArray(i,X*3),x.fromArray(a,C*2),_.fromArray(a,q*2),m.fromArray(a,X*2),f.sub(u),p.sub(u),_.sub(x),m.sub(x);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(O),S.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(O),c[C].add(d),c[q].add(d),c[X].add(d),h[C].add(S),h[q].add(S),h[X].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let C=0,q=E.length;C<q;++C){const X=E[C],O=X.start,V=X.count;for(let W=O,Q=O+V;W<Q;W+=3)M(n[W+0],n[W+1],n[W+2])}const T=new k,R=new k,P=new k,I=new k;function v(C){P.fromArray(r,C*3),I.copy(P);const q=c[C];T.copy(q),T.sub(P.multiplyScalar(P.dot(q))).normalize(),R.crossVectors(I,q);const O=R.dot(h[C])<0?-1:1;l[C*4]=T.x,l[C*4+1]=T.y,l[C*4+2]=T.z,l[C*4+3]=O}for(let C=0,q=E.length;C<q;++C){const X=E[C],O=X.start,V=X.count;for(let W=O,Q=O+V;W<Q;W+=3)v(n[W+0]),v(n[W+1]),v(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new Zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new Ye,Vn=new yl,na=new mi,Hc=new k,yr=new k,Sr=new k,Tr=new k,go=new k,ia=new k,ra=new He,sa=new He,aa=new He,Gc=new k,Vc=new k,Wc=new k,oa=new k,la=new k;class en extends xt{constructor(e=new Rn,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(go.fromBufferAttribute(u,e),a?ia.addScaledVector(go,h):ia.addScaledVector(go.sub(t),h))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(na.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(na,Hc)===null||Vn.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(zc.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,a=i.index,o=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,u=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,x=u.length;p<x;p++){const _=u[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),S=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let M=d,E=S;M<E;M+=3){const T=a.getX(M),R=a.getX(M+1),P=a.getX(M+2);n=ca(this,m,e,Vn,l,c,h,T,R,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let _=p,m=x;_<m;_+=3){const d=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);n=ca(this,r,e,Vn,l,c,h,d,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,x=u.length;p<x;p++){const _=u[p],m=r[_.materialIndex],d=Math.max(_.start,f.start),S=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let M=d,E=S;M<E;M+=3){const T=M,R=M+1,P=M+2;n=ca(this,m,e,Vn,l,c,h,T,R,P),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let _=p,m=x;_<m;_+=3){const d=_,S=_+1,M=_+2;n=ca(this,r,e,Vn,l,c,h,d,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Up(s,e,t,n,i,r,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ui,o),l===null)return null;la.copy(o),la.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:s}}function ca(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,yr),s.getVertexPosition(l,Sr),s.getVertexPosition(c,Tr);const h=Up(s,e,t,n,yr,Sr,Tr,oa);if(h){i&&(ra.fromBufferAttribute(i,o),sa.fromBufferAttribute(i,l),aa.fromBufferAttribute(i,c),h.uv=Un.getInterpolation(oa,yr,Sr,Tr,ra,sa,aa,new He)),r&&(ra.fromBufferAttribute(r,o),sa.fromBufferAttribute(r,l),aa.fromBufferAttribute(r,c),h.uv1=Un.getInterpolation(oa,yr,Sr,Tr,ra,sa,aa,new He),h.uv2=h.uv1),a&&(Gc.fromBufferAttribute(a,o),Vc.fromBufferAttribute(a,l),Wc.fromBufferAttribute(a,c),h.normal=Un.getInterpolation(oa,yr,Sr,Tr,Gc,Vc,Wc,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};Un.getNormal(yr,Sr,Tr,u.normal),h.face=u}return h}class zs extends Rn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(u,2));function x(_,m,d,S,M,E,T,R,P,I,v){const C=E/P,q=T/I,X=E/2,O=T/2,V=R/2,W=P+1,Q=I+1;let Y=0,Z=0;const oe=new k;for(let ee=0;ee<Q;ee++){const Ee=ee*q-O;for(let ae=0;ae<W;ae++){const j=ae*C-X;oe[_]=j*S,oe[m]=Ee*M,oe[d]=V,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[d]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(ae/P),u.push(1-ee/I),Y+=1}}for(let ee=0;ee<I;ee++)for(let Ee=0;Ee<P;Ee++){const ae=f+Ee+W*ee,j=f+Ee+W*(ee+1),te=f+(Ee+1)+W*(ee+1),de=f+(Ee+1)+W*ee;l.push(ae,j,de),l.push(j,te,de),Z+=6}o.addGroup(p,Z,v),p+=Z,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=Kr(s[t]);for(const i in n)e[i]=n[i]}return e}function Np(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Au(s){return s.getRenderTarget()===null?s.outputColorSpace:An}const Ra={clone:Kr,merge:Yt};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let wu=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class jt extends wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,br=1;class Bp extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new jt(Er,br,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new jt(Er,br,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new jt(Er,br,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new jt(Er,br,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new jt(Er,br,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new jt(Er,br,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Sl extends Bt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Vr,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kp extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Fe:Li),this.texture=new Sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zs(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ci});r.uniforms.tEquirect.value=t;const a=new en(i,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Ct),new Bp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const xo=new k,zp=new k,Hp=new je;class Vi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xo.subVectors(n,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hp.getNormalMatrix(e),i=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new mi,ha=new k;class Tl{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,r=new Vi,a=new Vi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],x=n[10],_=n[11],m=n[12],d=n[13],S=n[14],M=n[15];return t[0].setComponents(o-i,u-l,_-f,M-m).normalize(),t[1].setComponents(o+i,u+l,_+f,M+m).normalize(),t[2].setComponents(o+r,u+c,_+p,M+d).normalize(),t[3].setComponents(o-r,u-c,_-p,M-d).normalize(),t[4].setComponents(o-a,u-h,_-x,M-S).normalize(),t[5].setComponents(o+a,u+h,_+x,M+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ru(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class ka extends Rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],x=[],_=[],m=[];for(let d=0;d<h;d++){const S=d*f-a;for(let M=0;M<c;M++){const E=M*u-r;x.push(E,-S,0),_.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const M=S+c*d,E=S+c*(d+1),T=S+1+c*(d+1),R=S+1+c*d;p.push(M,E,R),p.push(E,T,R)}this.setIndex(p),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp="vec3 transformed = vec3( position );",Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Im=`#if defined( USE_ENVMAP )
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,Bm=`struct PhysicalMaterial {
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
}`,km=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,l_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,c_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#ifdef USE_UV
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
#endif`,N_=`#ifdef USE_UV
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
#endif`,F_=`#ifdef USE_UV
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
}`,q_=`#define DISTANCE
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
}`,Y_=`#define DISTANCE
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,og=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,We={alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:jp,begin_vertex:Kp,beginnormal_vertex:Zp,bsdfs:$p,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:em,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:rm,color_pars_fragment:sm,color_pars_vertex:am,color_vertex:om,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:fm,emissivemap_fragment:dm,emissivemap_pars_fragment:pm,encodings_fragment:mm,encodings_pars_fragment:_m,envmap_fragment:gm,envmap_common_pars_fragment:xm,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Im,envmap_vertex:ym,fog_vertex:Sm,fog_pars_vertex:Tm,fog_fragment:Em,fog_pars_fragment:bm,gradientmap_pars_fragment:Am,lightmap_fragment:wm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Pm,lights_toon_fragment:Dm,lights_toon_pars_fragment:Um,lights_phong_fragment:Nm,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:km,lights_fragment_maps:zm,lights_fragment_end:Hm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Ym,map_particle_fragment:jm,map_particle_pars_fragment:Km,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:$m,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:r_,normal_pars_vertex:s_,normal_vertex:a_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:l_,clearcoat_normal_fragment_maps:c_,clearcoat_pars_fragment:h_,iridescence_pars_fragment:u_,output_fragment:f_,packing:d_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:__,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:y_,shadowmap_vertex:S_,shadowmask_pars_fragment:T_,skinbase_vertex:E_,skinning_pars_vertex:b_,skinning_vertex:A_,skinnormal_vertex:w_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:L_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:D_,uv_pars_fragment:U_,uv_pars_vertex:N_,uv_vertex:F_,worldpos_vertex:O_,background_vert:B_,background_frag:k_,backgroundCube_vert:z_,backgroundCube_frag:H_,cube_vert:G_,cube_frag:V_,depth_vert:W_,depth_frag:X_,distanceRGBA_vert:q_,distanceRGBA_frag:Y_,equirect_vert:j_,equirect_frag:K_,linedashed_vert:Z_,linedashed_frag:$_,meshbasic_vert:J_,meshbasic_frag:Q_,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:_g,sprite_frag:gg},ve={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaTest:{value:0}}},Wn={basic:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([ve.common,ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([ve.lights,ve.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Wn.physical={uniforms:Yt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ua={r:0,b:0,g:0};function xg(s,e,t,n,i,r,a){const o=new Oe(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(m,d){let S=!1,M=d.isScene===!0?d.background:null;switch(M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Oa)?(h===void 0&&(h=new en(new zs(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Kr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=M.colorSpace!==Fe,(u!==M||f!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new en(new ka(2,2),new Kt({name:"BackgroundMaterial",uniforms:Kr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ua,Au(s)),n.buffers.color.setClear(ua.r,ua.g,ua.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:x}}function vg(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,h=!1;function u(V,W,Q,Y,Z){let oe=!1;if(a){const ee=_(Y,Q,W);c!==ee&&(c=ee,p(c.object)),oe=d(V,Y,Q,Z),oe&&S(V,Y,Q,Z)}else{const ee=W.wireframe===!0;(c.geometry!==Y.id||c.program!==Q.id||c.wireframe!==ee)&&(c.geometry=Y.id,c.program=Q.id,c.wireframe=ee,oe=!0)}Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(oe||h)&&(h=!1,I(V,W,Q,Y),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(V){return n.isWebGL2?s.bindVertexArray(V):r.bindVertexArrayOES(V)}function x(V){return n.isWebGL2?s.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function _(V,W,Q){const Y=Q.wireframe===!0;let Z=o[V.id];Z===void 0&&(Z={},o[V.id]=Z);let oe=Z[W.id];oe===void 0&&(oe={},Z[W.id]=oe);let ee=oe[Y];return ee===void 0&&(ee=m(f()),oe[Y]=ee),ee}function m(V){const W=[],Q=[],Y=[];for(let Z=0;Z<i;Z++)W[Z]=0,Q[Z]=0,Y[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Q,attributeDivisors:Y,object:V,attributes:{},index:null}}function d(V,W,Q,Y){const Z=c.attributes,oe=W.attributes;let ee=0;const Ee=Q.getAttributes();for(const ae in Ee)if(Ee[ae].location>=0){const te=Z[ae];let de=oe[ae];if(de===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;ee++}return c.attributesNum!==ee||c.index!==Y}function S(V,W,Q,Y){const Z={},oe=W.attributes;let ee=0;const Ee=Q.getAttributes();for(const ae in Ee)if(Ee[ae].location>=0){let te=oe[ae];te===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(te=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(te=V.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),Z[ae]=de,ee++}c.attributes=Z,c.attributesNum=ee,c.index=Y}function M(){const V=c.newAttributes;for(let W=0,Q=V.length;W<Q;W++)V[W]=0}function E(V){T(V,0)}function T(V,W){const Q=c.newAttributes,Y=c.enabledAttributes,Z=c.attributeDivisors;Q[V]=1,Y[V]===0&&(s.enableVertexAttribArray(V),Y[V]=1),Z[V]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,W),Z[V]=W)}function R(){const V=c.newAttributes,W=c.enabledAttributes;for(let Q=0,Y=W.length;Q<Y;Q++)W[Q]!==V[Q]&&(s.disableVertexAttribArray(Q),W[Q]=0)}function P(V,W,Q,Y,Z,oe){n.isWebGL2===!0&&(Q===s.INT||Q===s.UNSIGNED_INT)?s.vertexAttribIPointer(V,W,Q,Z,oe):s.vertexAttribPointer(V,W,Q,Y,Z,oe)}function I(V,W,Q,Y){if(n.isWebGL2===!1&&(V.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=Y.attributes,oe=Q.getAttributes(),ee=W.defaultAttributeValues;for(const Ee in oe){const ae=oe[Ee];if(ae.location>=0){let j=Z[Ee];if(j===void 0&&(Ee==="instanceMatrix"&&V.instanceMatrix&&(j=V.instanceMatrix),Ee==="instanceColor"&&V.instanceColor&&(j=V.instanceColor)),j!==void 0){const te=j.normalized,de=j.itemSize,ce=t.get(j);if(ce===void 0)continue;const U=ce.buffer,Ie=ce.type,Ne=ce.bytesPerElement;if(j.isInterleavedBufferAttribute){const ge=j.data,De=ge.stride,et=j.offset;if(ge.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ae.locationSize;Ce++)T(ae.location+Ce,ge.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ce=0;Ce<ae.locationSize;Ce++)E(ae.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,U);for(let Ce=0;Ce<ae.locationSize;Ce++)P(ae.location+Ce,de/ae.locationSize,Ie,te,De*Ne,(et+de/ae.locationSize*Ce)*Ne)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<ae.locationSize;ge++)T(ae.location+ge,j.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<ae.locationSize;ge++)E(ae.location+ge);s.bindBuffer(s.ARRAY_BUFFER,U);for(let ge=0;ge<ae.locationSize;ge++)P(ae.location+ge,de/ae.locationSize,Ie,te,de*Ne,de/ae.locationSize*ge*Ne)}}else if(ee!==void 0){const te=ee[Ee];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(ae.location,te);break;case 3:s.vertexAttrib3fv(ae.location,te);break;case 4:s.vertexAttrib4fv(ae.location,te);break;default:s.vertexAttrib1fv(ae.location,te)}}}}R()}function v(){X();for(const V in o){const W=o[V];for(const Q in W){const Y=W[Q];for(const Z in Y)x(Y[Z].object),delete Y[Z];delete W[Q]}delete o[V]}}function C(V){if(o[V.id]===void 0)return;const W=o[V.id];for(const Q in W){const Y=W[Q];for(const Z in Y)x(Y[Z].object),delete Y[Z];delete W[Q]}delete o[V.id]}function q(V){for(const W in o){const Q=o[W];if(Q[V.id]===void 0)continue;const Y=Q[V.id];for(const Z in Y)x(Y[Z].object),delete Y[Z];delete Q[V.id]}}function X(){O(),h=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:O,dispose:v,releaseStatesOfGeometry:C,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:E,disableUnusedAttributes:R}}function Mg(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=l}function yg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,E=a||e.has("OES_texture_float"),T=M&&E,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:R}}function Sg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,M=S*4;let E=d.clippingState||null;l.value=E,E=h(x,f,M,p);for(let T=0;T!==M;++T)E[T]=t[T];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,E=p;M!==_;++M,E+=4)a.copy(u[M]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tg(s){let e=new WeakMap;function t(a,o){return o===zo?a.mapping=Vr:o===Ho&&(a.mapping=Wr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zo||o===Ho)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class za extends wu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Dr=4,Xc=[.125,.215,.35,.446,.526,.582],qi=20,vo=new za,qc=new Oe;let Mo=null;const Wi=(1+Math.sqrt(5))/2,Ar=1/Wi,Yc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Wi,Ar),new k(0,Wi,-Ar),new k(Ar,0,Wi),new k(-Ar,0,Wi),new k(Wi,Ar,0),new k(-Wi,Ar,0)];class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Mo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:li,format:hn,colorSpace:An,depthBuffer:!1},i=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=bg(r,e,t)}return i}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,i){const o=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qc),h.toneMapping=hi,h.autoClear=!1;const p=new Ei({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new en(new zs,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(qc),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const M=this._cubeSize;fa(i,S*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Vr||e.mapping===Wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Yc[(i-1)%Yc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new en(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let S=0;for(let P=0;P<qi;++P){const I=P/_,v=Math.exp(-I*I/2);d.push(v),P===0?S+=v:P<m&&(S+=2*v)}for(let P=0;P<d.length;P++)d[P]=d[P]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;const E=this._sizeLods[i],T=3*E*(i>M-Dr?i-M+Dr:0),R=4*(this._cubeSize-E);fa(t,T,R,3*E,2*E),l.setRenderTarget(t),l.render(u,vo)}}function Eg(s){const e=[],t=[],n=[];let i=s;const r=s-Dr+1+Xc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Dr?l=Xc[a-s+Dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,d=1,S=new Float32Array(_*x*p),M=new Float32Array(m*x*p),E=new Float32Array(d*x*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,I=R>2?0:-1,v=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];S.set(v,_*x*R),M.set(f,m*x*R);const C=[R,R,R,R,R,R];E.set(C,d*x*R)}const T=new Rn;T.setAttribute("position",new Zt(S,_)),T.setAttribute("uv",new Zt(M,m)),T.setAttribute("faceIndex",new Zt(E,d)),e.push(T),i>Dr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kc(s,e,t){const n=new On(s,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bg(s,e,t){const n=new Float32Array(qi),i=new k(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Zc(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function $c(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function Ag(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zo||l===Ho,h=l===Vr||l===Wr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new jc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new jc(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rg(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const x in f)e.update(f[x],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const _=p[x];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,x=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let M=0,E=S.length;M<E;M+=3){const T=S[M+0],R=S[M+1],P=S[M+2];f.push(T,R,R,P,P,T)}}else{const S=x.array;_=x.version;for(let M=0,E=S.length/3-1;M<E;M+=3){const T=M+0,R=M+1,P=M+2;f.push(T,R,R,P,P,T)}}const m=new(xu(f)?bu:Eu)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cg(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){s.drawElements(r,p,o,f*l),t.update(p,r,1)}function u(f,p,x){if(x===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,o,f*l,x),t.update(p,r,x)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Lg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pg(s,e){return s[0]-e[0]}function Ig(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Dg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let W=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",W)};var p=W;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let v=0;M===!0&&(v=1),E===!0&&(v=2),T===!0&&(v=3);let C=h.attributes.position.count*v,q=1;C>e.maxTextureSize&&(q=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const X=new Float32Array(C*q*4*_),O=new yu(X,C,q,_);O.type=Nn,O.needsUpdate=!0;const V=v*4;for(let Q=0;Q<_;Q++){const Y=R[Q],Z=P[Q],oe=I[Q],ee=C*q*4*Q;for(let Ee=0;Ee<Y.count;Ee++){const ae=Ee*V;M===!0&&(a.fromBufferAttribute(Y,Ee),X[ee+ae+0]=a.x,X[ee+ae+1]=a.y,X[ee+ae+2]=a.z,X[ee+ae+3]=0),E===!0&&(a.fromBufferAttribute(Z,Ee),X[ee+ae+4]=a.x,X[ee+ae+5]=a.y,X[ee+ae+6]=a.z,X[ee+ae+7]=0),T===!0&&(a.fromBufferAttribute(oe,Ee),X[ee+ae+8]=a.x,X[ee+ae+9]=a.y,X[ee+ae+10]=a.z,X[ee+ae+11]=oe.itemSize===4?a.w:1)}}m={count:_,texture:O,size:new He(C,q)},r.set(h,m),h.addEventListener("dispose",W)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const x=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==x){_=[];for(let E=0;E<x;E++)_[E]=[E,0];n[h.id]=_}for(let E=0;E<x;E++){const T=_[E];T[0]=E,T[1]=f[E]}_.sort(Ig);for(let E=0;E<8;E++)E<x&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Pg);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const T=o[E],R=T[0],P=T[1];R!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+E)!==m[R]&&h.setAttribute("morphTarget"+E,m[R]),d&&h.getAttribute("morphNormal"+E)!==d[R]&&h.setAttribute("morphNormal"+E,d[R]),i[E]=P,S+=P):(m&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),d&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),i[E]=0)}const M=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ug(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Cu=new Bt,Lu=new yu,Pu=new yp,Iu=new Sl,Jc=[],Qc=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function is(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Jc[i];if(r===void 0&&(r=new Float32Array(i),Jc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ha(s,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ng(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function Og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;nh.set(n),s.uniformMatrix2fv(this.addr,!1,nh),Pt(t,n)}}function zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;th.set(n),s.uniformMatrix3fv(this.addr,!1,th),Pt(t,n)}}function Hg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,n))return;eh.set(n),s.uniformMatrix4fv(this.addr,!1,eh),Pt(t,n)}}function Gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cu,i)}function $g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pu,i)}function Jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Iu,i)}function Qg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lu,i)}function e0(s){switch(s){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return kg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}function t0(s,e){s.uniform1fv(this.addr,e)}function n0(s,e){const t=is(e,this.size,2);s.uniform2fv(this.addr,t)}function i0(s,e){const t=is(e,this.size,3);s.uniform3fv(this.addr,t)}function r0(s,e){const t=is(e,this.size,4);s.uniform4fv(this.addr,t)}function s0(s,e){const t=is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function a0(s,e){const t=is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function o0(s,e){const t=is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function l0(s,e){s.uniform1iv(this.addr,e)}function c0(s,e){s.uniform2iv(this.addr,e)}function h0(s,e){s.uniform3iv(this.addr,e)}function u0(s,e){s.uniform4iv(this.addr,e)}function f0(s,e){s.uniform1uiv(this.addr,e)}function d0(s,e){s.uniform2uiv(this.addr,e)}function p0(s,e){s.uniform3uiv(this.addr,e)}function m0(s,e){s.uniform4uiv(this.addr,e)}function _0(s,e,t){const n=this.cache,i=e.length,r=Ha(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Cu,r[a])}function g0(s,e,t){const n=this.cache,i=e.length,r=Ha(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pu,r[a])}function x0(s,e,t){const n=this.cache,i=e.length,r=Ha(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Iu,r[a])}function v0(s,e,t){const n=this.cache,i=e.length,r=Ha(t,i);Lt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lu,r[a])}function M0(s){switch(s){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return v0}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=e0(t.type)}}class S0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=M0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function ih(s,e){s.seq.push(e),s.map[e.id]=e}function E0(s,e,t){const n=s.name,i=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ih(t,c===void 0?new y0(o,s,e):new S0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new T0(o),ih(t,u)),t=u}}}class Sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);E0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let b0=0;function A0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function w0(s){switch(s){case An:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function sh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+A0(s.getShaderSource(e),a)}else return i}function R0(s,e){const t=w0(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function C0(s,e){let t;switch(e){case wd:t="Linear";break;case Rd:t="Reinhard";break;case Cd:t="OptimizedCineon";break;case Ld:t="ACESFilmic";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function L0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function P0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function xs(s){return s!==""}function ah(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(D0,U0)}function U0(s,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yo(t)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(s){return s.replace(N0,F0)}function F0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ch(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function H0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=O0(t),c=B0(t),h=k0(t),u=z0(t),f=H0(t),p=t.isWebGL2?"":L0(t),x=P0(r),_=i.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[x].filter(xs).join(`
`),m.length>0&&(m+=`
`),d=[p,x].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(m=[ch(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[p,ch(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?We.tonemapping_pars_fragment:"",t.toneMapping!==hi?C0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,R0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=Yo(a),a=ah(a,t),a=oh(a,t),o=Yo(o),o=ah(o,t),o=oh(o,t),a=lh(a),o=lh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=S+m+a,E=S+d+o,T=rh(i,i.VERTEX_SHADER,M),R=rh(i,i.FRAGMENT_SHADER,E);if(i.attachShader(_,T),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),C=i.getShaderInfoLog(T).trim(),q=i.getShaderInfoLog(R).trim();let X=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,R);else{const V=sh(i,T,"vertex"),W=sh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+V+`
`+W)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(C===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:X,programLog:v,vertexShader:{log:C,prefix:m},fragmentShader:{log:q,prefix:d}})}i.deleteShader(T),i.deleteShader(R);let P;this.getUniforms=function(){return P===void 0&&(P=new Sa(i,_)),P};let I;return this.getAttributes=function(){return I===void 0&&(I=I0(i,_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=b0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let V0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}}function q0(s,e,t,n,i,r,a){const o=new Su,l=new W0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,C,q,X,O){const V=X.fog,W=O.geometry,Q=v.isMeshStandardMaterial?X.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),Z=Y&&Y.mapping===Oa?Y.image.height:null,oe=x[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ee=ee!==void 0?ee.length:0;let ae=0;W.morphAttributes.position!==void 0&&(ae=1),W.morphAttributes.normal!==void 0&&(ae=2),W.morphAttributes.color!==void 0&&(ae=3);let j,te,de,ce;if(oe){const it=Wn[oe];j=it.vertexShader,te=it.fragmentShader}else j=v.vertexShader,te=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),ce=l.getFragmentShaderID(v);const U=s.getRenderTarget(),Ie=O.isInstancedMesh===!0,Ne=!!v.map,ge=!!v.matcap,De=!!Y,et=!!v.aoMap,Ce=!!v.lightMap,Ve=!!v.bumpMap,yt=!!v.normalMap,Rt=!!v.displacementMap,Et=!!v.emissiveMap,St=!!v.metalnessMap,tt=!!v.roughnessMap,pt=v.clearcoat>0,kt=v.iridescence>0,L=v.sheen>0,b=v.transmission>0,$=pt&&!!v.clearcoatMap,he=pt&&!!v.clearcoatNormalMap,fe=pt&&!!v.clearcoatRoughnessMap,Me=kt&&!!v.iridescenceMap,Ue=kt&&!!v.iridescenceThicknessMap,Te=L&&!!v.sheenColorMap,ie=L&&!!v.sheenRoughnessMap,Re=!!v.specularMap,Pe=!!v.specularColorMap,Le=!!v.specularIntensityMap,_e=b&&!!v.transmissionMap,Ae=b&&!!v.thicknessMap,ke=!!v.gradientMap,ze=!!v.alphaMap,Xe=v.alphaTest>0,N=!!v.extensions,F=!!W.attributes.uv1,le=!!W.attributes.uv2,ye=!!W.attributes.uv3;return{isWebGL2:h,shaderID:oe,shaderName:v.type,vertexShader:j,fragmentShader:te,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:An,map:Ne,matcap:ge,envMap:De,envMapMode:De&&Y.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:Ce,bumpMap:Ve,normalMap:yt,displacementMap:f&&Rt,emissiveMap:Et,normalMapObjectSpace:yt&&v.normalMapType===Jd,normalMapTangentSpace:yt&&v.normalMapType===vl,metalnessMap:St,roughnessMap:tt,clearcoat:pt,clearcoatMap:$,clearcoatNormalMap:he,clearcoatRoughnessMap:fe,iridescence:kt,iridescenceMap:Me,iridescenceThicknessMap:Ue,sheen:L,sheenColorMap:Te,sheenRoughnessMap:ie,specularMap:Re,specularColorMap:Pe,specularIntensityMap:Le,transmission:b,transmissionMap:_e,thicknessMap:Ae,gradientMap:ke,opaque:v.transparent===!1&&v.blending===Fr,alphaMap:ze,alphaTest:Xe,combine:v.combine,mapUv:Ne&&_(v.map.channel),aoMapUv:et&&_(v.aoMap.channel),lightMapUv:Ce&&_(v.lightMap.channel),bumpMapUv:Ve&&_(v.bumpMap.channel),normalMapUv:yt&&_(v.normalMap.channel),displacementMapUv:Rt&&_(v.displacementMap.channel),emissiveMapUv:Et&&_(v.emissiveMap.channel),metalnessMapUv:St&&_(v.metalnessMap.channel),roughnessMapUv:tt&&_(v.roughnessMap.channel),clearcoatMapUv:$&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(v.sheenRoughnessMap.channel),specularMapUv:Re&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Le&&_(v.specularIntensityMap.channel),transmissionMapUv:_e&&_(v.transmissionMap.channel),thicknessMapUv:Ae&&_(v.thicknessMap.channel),alphaMapUv:ze&&_(v.alphaMap.channel),vertexTangents:yt&&!!W.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:F,vertexUv2s:le,vertexUv3s:ye,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ne||ze),fog:!!V,useFog:v.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:hi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:N&&v.extensions.derivatives===!0,extensionFragDepth:N&&v.extensions.fragDepth===!0,extensionDrawBuffers:N&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const q in v.defines)C.push(q),C.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(S(C,v),M(C,v),C.push(s.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function S(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function M(v,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),v.push(o.mask)}function E(v){const C=x[v.type];let q;if(C){const X=Wn[C];q=Ra.clone(X.uniforms)}else q=v.uniforms;return q}function T(v,C){let q;for(let X=0,O=c.length;X<O;X++){const V=c[X];if(V.cacheKey===C){q=V,++q.usedTimes;break}}return q===void 0&&(q=new G0(s,C,v,r),c.push(q)),q}function R(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:T,releaseProgram:R,releaseShaderCache:P,programs:c,dispose:I}}function Y0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function j0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,x,_,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,f,p,x,_,m){const d=a(u,f,p,x,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,x,_,m){const d=a(u,f,p,x,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||j0),n.length>1&&n.sort(f||hh),i.length>1&&i.sort(f||hh)}function h(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function K0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new uh,s.set(n,[a])):i>=r.length?(a=new uh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Z0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function $0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let J0=0;function Q0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ex(s,e){const t=new Z0,n=$0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new k);const r=new k,a=new Ye,o=new Ye;function l(h,u){let f=0,p=0,x=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let _=0,m=0,d=0,S=0,M=0,E=0,T=0,R=0,P=0,I=0;h.sort(Q0);const v=u===!0?Math.PI:1;for(let q=0,X=h.length;q<X;q++){const O=h[q],V=O.color,W=O.intensity,Q=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=V.r*W*v,p+=V.g*W*v,x+=V.b*W*v;else if(O.isLightProbe)for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(O.sh.coefficients[Z],W);else if(O.isDirectionalLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity*v),O.castShadow){const oe=O.shadow,ee=n.get(O);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=O.shadow.matrix,E++}i.directional[_]=Z,_++}else if(O.isSpotLight){const Z=t.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(V).multiplyScalar(W*v),Z.distance=Q,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,i.spot[d]=Z;const oe=O.shadow;if(O.map&&(i.spotLightMap[P]=O.map,P++,oe.updateMatrices(O),O.castShadow&&I++),i.spotLightMatrix[d]=oe.matrix,O.castShadow){const ee=n.get(O);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,i.spotShadow[d]=ee,i.spotShadowMap[d]=Y,R++}d++}else if(O.isRectAreaLight){const Z=t.get(O);Z.color.copy(V).multiplyScalar(W),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),i.rectArea[S]=Z,S++}else if(O.isPointLight){const Z=t.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity*v),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const oe=O.shadow,ee=n.get(O);ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,ee.shadowCameraNear=oe.camera.near,ee.shadowCameraFar=oe.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=O.shadow.matrix,T++}i.point[m]=Z,m++}else if(O.isHemisphereLight){const Z=t.get(O);Z.skyColor.copy(O.color).multiplyScalar(W*v),Z.groundColor.copy(O.groundColor).multiplyScalar(W*v),i.hemi[M]=Z,M++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=x;const C=i.hash;(C.directionalLength!==_||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==S||C.hemiLength!==M||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==R||C.numSpotMaps!==P)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=S,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,C.directionalLength=_,C.pointLength=m,C.spotLength=d,C.rectAreaLength=S,C.hemiLength=M,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=R,C.numSpotMaps=P,i.version=J0++)}function c(h,u){let f=0,p=0,x=0,_=0,m=0;const d=u.matrixWorldInverse;for(let S=0,M=h.length;S<M;S++){const E=h[S];if(E.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(E.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),x++}else if(E.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function fh(s,e){const t=new ex(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function tx(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new fh(s,e),t.set(r,[l])):a>=o.length?(l=new fh(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class nx extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`;function ax(s,e,t){let n=new Tl;const i=new He,r=new He,a=new ht,o=new nx({depthPacking:$d}),l=new ix,c={},h=t.maxTextureSize,u={[ui]:tn,[tn]:ui,[Mn]:Mn},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Rn;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let d=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const I=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Ci),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const X=d!==ri&&this.type===ri,O=d===ri&&this.type!==ri;for(let V=0,W=T.length;V<W;V++){const Q=T[V],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||O===!0){const ee=this.type!==ri?{minFilter:Ut,magFilter:Ut}:{};Y.map!==null&&Y.map.dispose(),Y.map=new On(i.x,i.y,ee),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const oe=Y.getViewportCount();for(let ee=0;ee<oe;ee++){const Ee=Y.getViewport(ee);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),q.viewport(a),Y.updateMatrices(Q,ee),n=Y.getFrustum(),E(R,P,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===ri&&S(Y,P),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(I,v,C)};function S(T,R){const P=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new On(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(R,null,P,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(R,null,P,p,_,null)}function M(T,R,P,I){let v=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const q=v.uuid,X=R.uuid;let O=c[q];O===void 0&&(O={},c[q]=O);let V=O[X];V===void 0&&(V=v.clone(),O[X]=V),v=V}if(v.visible=R.visible,v.wireframe=R.wireframe,I===ri?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const q=s.properties.get(v);q.light=P}return v}function E(T,R,P,I,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const X=e.update(T),O=T.material;if(Array.isArray(O)){const V=X.groups;for(let W=0,Q=V.length;W<Q;W++){const Y=V[W],Z=O[Y.materialIndex];if(Z&&Z.visible){const oe=M(T,Z,I,v);s.renderBufferDirect(P,null,X,oe,T,Y)}}}else if(O.visible){const V=M(T,O,I,v);s.renderBufferDirect(P,null,X,V,T,null)}}const q=T.children;for(let X=0,O=q.length;X<O;X++)E(q[X],R,P,I,v)}}function ox(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const F=new ht;let le=null;const ye=new ht(0,0,0,0);return{setMask:function(we){le!==we&&!N&&(s.colorMask(we,we,we,we),le=we)},setLocked:function(we){N=we},setClear:function(we,it,rt,It,Hn){Hn===!0&&(we*=It,it*=It,rt*=It),F.set(we,it,rt,It),ye.equals(F)===!1&&(s.clearColor(we,it,rt,It),ye.copy(F))},reset:function(){N=!1,le=null,ye.set(-1,0,0,0)}}}function r(){let N=!1,F=null,le=null,ye=null;return{setTest:function(we){we?U(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(we){F!==we&&!N&&(s.depthMask(we),F=we)},setFunc:function(we){if(le!==we){switch(we){case xd:s.depthFunc(s.NEVER);break;case vd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case ko:s.depthFunc(s.LEQUAL);break;case yd:s.depthFunc(s.EQUAL);break;case Sd:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=we}},setLocked:function(we){N=we},setClear:function(we){ye!==we&&(s.clearDepth(we),ye=we)},reset:function(){N=!1,F=null,le=null,ye=null}}}function a(){let N=!1,F=null,le=null,ye=null,we=null,it=null,rt=null,It=null,Hn=null;return{setTest:function(mt){N||(mt?U(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(mt){F!==mt&&!N&&(s.stencilMask(mt),F=mt)},setFunc:function(mt,$t,pn){(le!==mt||ye!==$t||we!==pn)&&(s.stencilFunc(mt,$t,pn),le=mt,ye=$t,we=pn)},setOp:function(mt,$t,pn){(it!==mt||rt!==$t||It!==pn)&&(s.stencilOp(mt,$t,pn),it=mt,rt=$t,It=pn)},setLocked:function(mt){N=mt},setClear:function(mt){Hn!==mt&&(s.clearStencil(mt),Hn=mt)},reset:function(){N=!1,F=null,le=null,ye=null,we=null,it=null,rt=null,It=null,Hn=null}}}const o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},x=new WeakMap,_=[],m=null,d=!1,S=null,M=null,E=null,T=null,R=null,P=null,I=null,v=!1,C=null,q=null,X=null,O=null,V=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=Y>=2);let oe=null,ee={};const Ee=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),j=new ht().fromArray(Ee),te=new ht().fromArray(ae);function de(N,F,le,ye){const we=new Uint8Array(4),it=s.createTexture();s.bindTexture(N,it),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<le;rt++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(F,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(F+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return it}const ce={};ce[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(s.DEPTH_TEST),l.setFunc(ko),Rt(!1),Et(Ql),U(s.CULL_FACE),Ve(Ci);function U(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function Ie(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function Ne(N,F){return p[N]!==F?(s.bindFramebuffer(N,F),p[N]=F,n&&(N===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=F),N===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=F)),!0):!1}function ge(N,F){let le=_,ye=!1;if(N)if(le=x.get(F),le===void 0&&(le=[],x.set(F,le)),N.isWebGLMultipleRenderTargets){const we=N.texture;if(le.length!==we.length||le[0]!==s.COLOR_ATTACHMENT0){for(let it=0,rt=we.length;it<rt;it++)le[it]=s.COLOR_ATTACHMENT0+it;le.length=we.length,ye=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,ye=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,ye=!0);ye&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function De(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const et={[Lr]:s.FUNC_ADD,[od]:s.FUNC_SUBTRACT,[ld]:s.FUNC_REVERSE_SUBTRACT};if(n)et[nc]=s.MIN,et[ic]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(et[nc]=N.MIN_EXT,et[ic]=N.MAX_EXT)}const Ce={[cd]:s.ZERO,[hd]:s.ONE,[ud]:s.SRC_COLOR,[su]:s.SRC_ALPHA,[gd]:s.SRC_ALPHA_SATURATE,[md]:s.DST_COLOR,[dd]:s.DST_ALPHA,[fd]:s.ONE_MINUS_SRC_COLOR,[au]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[pd]:s.ONE_MINUS_DST_ALPHA};function Ve(N,F,le,ye,we,it,rt,It){if(N===Ci){d===!0&&(Ie(s.BLEND),d=!1);return}if(d===!1&&(U(s.BLEND),d=!0),N!==ad){if(N!==S||It!==v){if((M!==Lr||R!==Lr)&&(s.blendEquation(s.FUNC_ADD),M=Lr,R=Lr),It)switch(N){case Fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.ONE,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,T=null,P=null,I=null,S=N,v=It}return}we=we||F,it=it||le,rt=rt||ye,(F!==M||we!==R)&&(s.blendEquationSeparate(et[F],et[we]),M=F,R=we),(le!==E||ye!==T||it!==P||rt!==I)&&(s.blendFuncSeparate(Ce[le],Ce[ye],Ce[it],Ce[rt]),E=le,T=ye,P=it,I=rt),S=N,v=!1}function yt(N,F){N.side===Mn?Ie(s.CULL_FACE):U(s.CULL_FACE);let le=N.side===tn;F&&(le=!le),Rt(le),N.blending===Fr&&N.transparent===!1?Ve(Ci):Ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const ye=N.stencilWrite;c.setTest(ye),ye&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(N){C!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),C=N)}function Et(N){N!==id?(U(s.CULL_FACE),N!==q&&(N===Ql?s.cullFace(s.BACK):N===rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),q=N}function St(N){N!==X&&(Q&&s.lineWidth(N),X=N)}function tt(N,F,le){N?(U(s.POLYGON_OFFSET_FILL),(O!==F||V!==le)&&(s.polygonOffset(F,le),O=F,V=le)):Ie(s.POLYGON_OFFSET_FILL)}function pt(N){N?U(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function kt(N){N===void 0&&(N=s.TEXTURE0+W-1),oe!==N&&(s.activeTexture(N),oe=N)}function L(N,F,le){le===void 0&&(oe===null?le=s.TEXTURE0+W-1:le=oe);let ye=ee[le];ye===void 0&&(ye={type:void 0,texture:void 0},ee[le]=ye),(ye.type!==N||ye.texture!==F)&&(oe!==le&&(s.activeTexture(le),oe=le),s.bindTexture(N,F||ce[N]),ye.type=N,ye.texture=F)}function b(){const N=ee[oe];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){j.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function Ae(N){te.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function ke(N,F){let le=u.get(F);le===void 0&&(le=new WeakMap,u.set(F,le));let ye=le.get(N);ye===void 0&&(ye=s.getUniformBlockIndex(F,N.name),le.set(N,ye))}function ze(N,F){const ye=u.get(F).get(N);h.get(F)!==ye&&(s.uniformBlockBinding(F,ye,N.__bindingPointIndex),h.set(F,ye))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},oe=null,ee={},p={},x=new WeakMap,_=[],m=null,d=!1,S=null,M=null,E=null,T=null,R=null,P=null,I=null,v=!1,C=null,q=null,X=null,O=null,V=null,j.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:U,disable:Ie,bindFramebuffer:Ne,drawBuffers:ge,useProgram:De,setBlending:Ve,setMaterial:yt,setFlipSided:Rt,setCullFace:Et,setLineWidth:St,setPolygonOffset:tt,setScissorTest:pt,activeTexture:kt,bindTexture:L,unbindTexture:b,compressedTexImage2D:$,compressedTexImage3D:he,texImage2D:Pe,texImage3D:Le,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:ie,texStorage3D:Re,texSubImage2D:fe,texSubImage3D:Me,compressedTexSubImage2D:Ue,compressedTexSubImage3D:Te,scissor:_e,viewport:Ae,reset:Xe}}function lx(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,b){return d?new OffscreenCanvas(L,b):Ls("canvas")}function M(L,b,$,he){let fe=1;if((L.width>he||L.height>he)&&(fe=he/Math.max(L.width,L.height)),fe<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Me=b?_u:Math.floor,Ue=Me(fe*L.width),Te=Me(fe*L.height);_===void 0&&(_=S(Ue,Te));const ie=$?S(Ue,Te):_;return ie.width=Ue,ie.height=Te,ie.getContext("2d").drawImage(L,0,0,Ue,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ue+"x"+Te+")."),ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function E(L){return qo(L.width)&&qo(L.height)}function T(L){return o?!1:L.wrapS!==Jt||L.wrapT!==Jt||L.minFilter!==Ut&&L.minFilter!==Ct}function R(L,b){return L.generateMipmaps&&b&&L.minFilter!==Ut&&L.minFilter!==Ct}function P(L){s.generateMipmap(L)}function I(L,b,$,he,fe=!1){if(o===!1)return b;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Me=b;return b===s.RED&&($===s.FLOAT&&(Me=s.R32F),$===s.HALF_FLOAT&&(Me=s.R16F),$===s.UNSIGNED_BYTE&&(Me=s.R8)),b===s.RG&&($===s.FLOAT&&(Me=s.RG32F),$===s.HALF_FLOAT&&(Me=s.RG16F),$===s.UNSIGNED_BYTE&&(Me=s.RG8)),b===s.RGBA&&($===s.FLOAT&&(Me=s.RGBA32F),$===s.HALF_FLOAT&&(Me=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Me=he===Fe&&fe===!1?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)),(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function v(L,b,$){return R(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==Ct?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function C(L){return L===Ut||L===Go||L===ya?s.NEAREST:s.LINEAR}function q(L){const b=L.target;b.removeEventListener("dispose",q),O(b),b.isVideoTexture&&x.delete(b)}function X(L){const b=L.target;b.removeEventListener("dispose",X),W(b)}function O(L){const b=n.get(L);if(b.__webglInit===void 0)return;const $=L.source,he=m.get($);if(he){const fe=he[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&V(L),Object.keys(he).length===0&&m.delete($)}n.remove(L)}function V(L){const b=n.get(L);s.deleteTexture(b.__webglTexture);const $=L.source,he=m.get($);delete he[b.__cacheKey],a.memory.textures--}function W(L){const b=L.texture,$=n.get(L),he=n.get(b);if(he.__webglTexture!==void 0&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)s.deleteFramebuffer($.__webglFramebuffer[fe]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[fe]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let fe=0;fe<$.__webglColorRenderbuffer.length;fe++)$.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[fe]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let fe=0,Me=b.length;fe<Me;fe++){const Ue=n.get(b[fe]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),a.memory.textures--),n.remove(b[fe])}n.remove(b),n.remove(L)}let Q=0;function Y(){Q=0}function Z(){const L=Q;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Q+=1,L}function oe(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ee(L,b){const $=n.get(L);if(L.isVideoTexture&&pt(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie($,L,b);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function Ee(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Ie($,L,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function ae(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Ie($,L,b);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function j(L,b){const $=n.get(L);if(L.version>0&&$.__version!==L.version){Ne($,L,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const te={[Xr]:s.REPEAT,[Jt]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},de={[Ut]:s.NEAREST,[Go]:s.NEAREST_MIPMAP_NEAREST,[ya]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[lu]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR};function ce(L,b,$){if($?(s.texParameteri(L,s.TEXTURE_WRAP_S,te[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,te[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,te[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,de[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,de[b.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Jt||b.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,C(b.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==Ut&&b.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ut||b.minFilter!==ya&&b.minFilter!==Di||b.type===Nn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===li&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(L,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function U(L,b){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",q));const he=b.source;let fe=m.get(he);fe===void 0&&(fe={},m.set(he,fe));const Me=oe(b);if(Me!==L.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),fe[Me].usedTimes++;const Ue=fe[L.__cacheKey];Ue!==void 0&&(fe[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&V(b)),L.__cacheKey=Me,L.__webglTexture=fe[Me].texture}return $}function Ie(L,b,$){let he=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=s.TEXTURE_3D);const fe=U(L,b),Me=b.source;t.bindTexture(he,L.__webglTexture,s.TEXTURE0+$);const Ue=n.get(Me);if(Me.version!==Ue.__version||fe===!0){t.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Te=T(b)&&E(b.image)===!1;let ie=M(b.image,Te,!1,h);ie=kt(b,ie);const Re=E(ie)||o,Pe=r.convert(b.format,b.colorSpace);let Le=r.convert(b.type),_e=I(b.internalFormat,Pe,Le,b.colorSpace);ce(he,b,Re);let Ae;const ke=b.mipmaps,ze=o&&b.isVideoTexture!==!0,Xe=Ue.__version===void 0||fe===!0,N=v(b,ie,Re);if(b.isDepthTexture)_e=s.DEPTH_COMPONENT,o?b.type===Nn?_e=s.DEPTH_COMPONENT32F:b.type===Yi?_e=s.DEPTH_COMPONENT24:b.type===Or?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:b.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Zi&&_e===s.DEPTH_COMPONENT&&b.type!==cu&&b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yi,Le=r.convert(b.type)),b.format===qr&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,b.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Or,Le=r.convert(b.type))),Xe&&(ze?t.texStorage2D(s.TEXTURE_2D,1,_e,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,_e,ie.width,ie.height,0,Pe,Le,null));else if(b.isDataTexture)if(ke.length>0&&Re){ze&&Xe&&t.texStorage2D(s.TEXTURE_2D,N,_e,ke[0].width,ke[0].height);for(let F=0,le=ke.length;F<le;F++)Ae=ke[F],ze?t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,Pe,Le,Ae.data):t.texImage2D(s.TEXTURE_2D,F,_e,Ae.width,Ae.height,0,Pe,Le,Ae.data);b.generateMipmaps=!1}else ze?(Xe&&t.texStorage2D(s.TEXTURE_2D,N,_e,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,Pe,Le,ie.data)):t.texImage2D(s.TEXTURE_2D,0,_e,ie.width,ie.height,0,Pe,Le,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ze&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,_e,ke[0].width,ke[0].height,ie.depth);for(let F=0,le=ke.length;F<le;F++)Ae=ke[F],b.format!==hn?Pe!==null?ze?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,ie.depth,Pe,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,F,_e,Ae.width,Ae.height,ie.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(s.TEXTURE_2D_ARRAY,F,0,0,0,Ae.width,Ae.height,ie.depth,Pe,Le,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,F,_e,Ae.width,Ae.height,ie.depth,0,Pe,Le,Ae.data)}else{ze&&Xe&&t.texStorage2D(s.TEXTURE_2D,N,_e,ke[0].width,ke[0].height);for(let F=0,le=ke.length;F<le;F++)Ae=ke[F],b.format!==hn?Pe!==null?ze?t.compressedTexSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,F,_e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(s.TEXTURE_2D,F,0,0,Ae.width,Ae.height,Pe,Le,Ae.data):t.texImage2D(s.TEXTURE_2D,F,_e,Ae.width,Ae.height,0,Pe,Le,Ae.data)}else if(b.isDataArrayTexture)ze?(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,N,_e,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Pe,Le,ie.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,Pe,Le,ie.data);else if(b.isData3DTexture)ze?(Xe&&t.texStorage3D(s.TEXTURE_3D,N,_e,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Pe,Le,ie.data)):t.texImage3D(s.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,Pe,Le,ie.data);else if(b.isFramebufferTexture){if(Xe)if(ze)t.texStorage2D(s.TEXTURE_2D,N,_e,ie.width,ie.height);else{let F=ie.width,le=ie.height;for(let ye=0;ye<N;ye++)t.texImage2D(s.TEXTURE_2D,ye,_e,F,le,0,Pe,Le,null),F>>=1,le>>=1}}else if(ke.length>0&&Re){ze&&Xe&&t.texStorage2D(s.TEXTURE_2D,N,_e,ke[0].width,ke[0].height);for(let F=0,le=ke.length;F<le;F++)Ae=ke[F],ze?t.texSubImage2D(s.TEXTURE_2D,F,0,0,Pe,Le,Ae):t.texImage2D(s.TEXTURE_2D,F,_e,Pe,Le,Ae);b.generateMipmaps=!1}else ze?(Xe&&t.texStorage2D(s.TEXTURE_2D,N,_e,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Le,ie)):t.texImage2D(s.TEXTURE_2D,0,_e,Pe,Le,ie);R(b,Re)&&P(he),Ue.__version=Me.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ne(L,b,$){if(b.image.length!==6)return;const he=U(L,b),fe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+$);const Me=n.get(fe);if(fe.version!==Me.__version||he===!0){t.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let F=0;F<6;F++)!Ue&&!Te?ie[F]=M(b.image[F],!1,!0,c):ie[F]=Te?b.image[F].image:b.image[F],ie[F]=kt(b,ie[F]);const Re=ie[0],Pe=E(Re)||o,Le=r.convert(b.format,b.colorSpace),_e=r.convert(b.type),Ae=I(b.internalFormat,Le,_e,b.colorSpace),ke=o&&b.isVideoTexture!==!0,ze=Me.__version===void 0||he===!0;let Xe=v(b,Re,Pe);ce(s.TEXTURE_CUBE_MAP,b,Pe);let N;if(Ue){ke&&ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Ae,Re.width,Re.height);for(let F=0;F<6;F++){N=ie[F].mipmaps;for(let le=0;le<N.length;le++){const ye=N[le];b.format!==hn?Le!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le,0,0,ye.width,ye.height,Le,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le,0,0,ye.width,ye.height,Le,_e,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le,Ae,ye.width,ye.height,0,Le,_e,ye.data)}}}else{N=b.mipmaps,ke&&ze&&(N.length>0&&Xe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Ae,ie[0].width,ie[0].height));for(let F=0;F<6;F++)if(Te){ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ie[F].width,ie[F].height,Le,_e,ie[F].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,ie[F].width,ie[F].height,0,Le,_e,ie[F].data);for(let le=0;le<N.length;le++){const we=N[le].image[F].image;ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le+1,0,0,we.width,we.height,Le,_e,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le+1,Ae,we.width,we.height,0,Le,_e,we.data)}}else{ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Le,_e,ie[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ae,Le,_e,ie[F]);for(let le=0;le<N.length;le++){const ye=N[le];ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le+1,0,0,Le,_e,ye.image[F]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+F,le+1,Ae,Le,_e,ye.image[F])}}}R(b,Pe)&&P(s.TEXTURE_CUBE_MAP),Me.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ge(L,b,$,he,fe){const Me=r.convert($.format,$.colorSpace),Ue=r.convert($.type),Te=I($.internalFormat,Me,Ue,$.colorSpace);n.get(b).__hasExternalTextures||(fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,Te,b.width,b.height,b.depth,0,Me,Ue,null):t.texImage2D(fe,0,Te,b.width,b.height,0,Me,Ue,null)),t.bindFramebuffer(s.FRAMEBUFFER,L),tt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,n.get($).__webglTexture,0,St(b)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,n.get($).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(L,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let he=s.DEPTH_COMPONENT16;if($||tt(b)){const fe=b.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Nn?he=s.DEPTH_COMPONENT32F:fe.type===Yi&&(he=s.DEPTH_COMPONENT24));const Me=St(b);tt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,he,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,he,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,he,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const he=St(b);$&&tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,b.width,b.height):tt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const he=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let fe=0;fe<he.length;fe++){const Me=he[fe],Ue=r.convert(Me.format,Me.colorSpace),Te=r.convert(Me.type),ie=I(Me.internalFormat,Ue,Te,Me.colorSpace),Re=St(b);$&&tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ie,b.width,b.height):tt(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,ie,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ie,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ee(b.depthTexture,0);const he=n.get(b.depthTexture).__webglTexture,fe=St(b);if(b.depthTexture.format===Zi)tt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(b.depthTexture.format===qr)tt(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const b=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");et(b.__webglFramebuffer,L)}else if($){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]=s.createRenderbuffer(),De(b.__webglDepthbuffer[he],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),De(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(L,b,$){const he=n.get(L);b!==void 0&&ge(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),$!==void 0&&Ce(L)}function yt(L){const b=L.texture,$=n.get(L),he=n.get(b);L.addEventListener("dispose",X),L.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=b.version,a.memory.textures++);const fe=L.isWebGLCubeRenderTarget===!0,Me=L.isWebGLMultipleRenderTargets===!0,Ue=E(L)||o;if(fe){$.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)$.__webglFramebuffer[Te]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),Me)if(i.drawBuffers){const Te=L.texture;for(let ie=0,Re=Te.length;ie<Re;ie++){const Pe=n.get(Te[ie]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&tt(L)===!1){const Te=Me?b:[b];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ie=0;ie<Te.length;ie++){const Re=Te[ie];$.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ie]);const Pe=r.convert(Re.format,Re.colorSpace),Le=r.convert(Re.type),_e=I(Re.internalFormat,Pe,Le,Re.colorSpace,L.isXRRenderTarget===!0),Ae=St(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,_e,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,$.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),De($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ce(s.TEXTURE_CUBE_MAP,b,Ue);for(let Te=0;Te<6;Te++)ge($.__webglFramebuffer[Te],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te);R(b,Ue)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Te=L.texture;for(let ie=0,Re=Te.length;ie<Re;ie++){const Pe=Te[ie],Le=n.get(Pe);t.bindTexture(s.TEXTURE_2D,Le.__webglTexture),ce(s.TEXTURE_2D,Pe,Ue),ge($.__webglFramebuffer,L,Pe,s.COLOR_ATTACHMENT0+ie,s.TEXTURE_2D),R(Pe,Ue)&&P(s.TEXTURE_2D)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,he.__webglTexture),ce(Te,b,Ue),ge($.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Te),R(b,Ue)&&P(Te),t.unbindTexture()}L.depthBuffer&&Ce(L)}function Rt(L){const b=E(L)||o,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let he=0,fe=$.length;he<fe;he++){const Me=$[he];if(R(Me,b)){const Ue=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Te=n.get(Me).__webglTexture;t.bindTexture(Ue,Te),P(Ue),t.unbindTexture()}}}function Et(L){if(o&&L.samples>0&&tt(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,he=L.height;let fe=s.COLOR_BUFFER_BIT;const Me=[],Ue=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(L),ie=L.isWebGLMultipleRenderTargets===!0;if(ie)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){Me.push(s.COLOR_ATTACHMENT0+Re),L.depthBuffer&&Me.push(Ue);const Pe=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Pe===!1&&(L.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ie&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]),Pe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),ie){const Le=n.get(b[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,$,he,0,0,$,he,fe,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const Pe=n.get(b[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function St(L){return Math.min(u,L.samples)}function tt(L){const b=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(L){const b=a.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function kt(L,b){const $=L.colorSpace,he=L.format,fe=L.type;return L.isCompressedTexture===!0||L.format===Xo||$!==An&&$!==Li&&($===Fe?o===!1?e.has("EXT_sRGB")===!0&&he===hn?(L.format=Xo,L.minFilter=Ct,L.generateMipmaps=!1):b=vu.sRGBToLinear(b):(he!==hn||fe!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=Ee,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=tt}function cx(s,e,t){const n=t.isWebGL2;function i(r,a=Li){let o;if(r===nr)return s.UNSIGNED_BYTE;if(r===Nd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Id)return s.BYTE;if(r===Dd)return s.SHORT;if(r===cu)return s.UNSIGNED_SHORT;if(r===Ud)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Nn)return s.FLOAT;if(r===li)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Od)return s.ALPHA;if(r===hn)return s.RGBA;if(r===Bd)return s.LUMINANCE;if(r===kd)return s.LUMINANCE_ALPHA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===qr)return s.DEPTH_STENCIL;if(r===Xo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===hu)return s.RED;if(r===zd)return s.RED_INTEGER;if(r===Hd)return s.RG;if(r===Gd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===ja||r===Ka||r===Za||r===$a)if(a===Fe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rc||r===sc||r===ac||r===oc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lc||r===cc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===lc)return a===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===cc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hc||r===uc||r===fc||r===dc||r===pc||r===mc||r===_c||r===gc||r===xc||r===vc||r===Mc||r===yc||r===Sc||r===Tc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===hc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_c)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tc)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ja)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ja)return a===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Xd||r===Ec||r===bc||r===Ac)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ja)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ec)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ac)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Or?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class hx extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ux={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fx extends Bt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Zi,h!==Zi&&h!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Yi),n===void 0&&h===qr&&(n=Or),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class dx extends sr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null;const _=t.getContextAttributes();let m=null,d=null;const S=[],M=[],E=new Set,T=new Map,R=new jt;R.layers.enable(1),R.viewport=new ht;const P=new jt;P.layers.enable(2),P.viewport=new ht;const I=[R,P],v=new hx;v.layers.enable(1),v.layers.enable(2);let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=S[j];return te===void 0&&(te=new So,S[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=S[j];return te===void 0&&(te=new So,S[j]=te),te.getGripSpace()},this.getHand=function(j){let te=S[j];return te===void 0&&(te=new So,S[j]=te),te.getHandSpace()};function X(j){const te=M.indexOf(j.inputSource);if(te===-1)return;const de=S[te];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let j=0;j<S.length;j++){const te=M[j];te!==null&&(M[j]=null,S[j].disconnect(te))}C=null,q=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:p}),d=new On(p.framebufferWidth,p.framebufferHeight,{format:hn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,de=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?qr:Zi,de=_.stencil?Or:Yi);const U={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(U),i.updateRenderState({layers:[f]}),d=new On(f.textureWidth,f.textureHeight,{format:hn,type:nr,depthTexture:new fx(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(d);Ie.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(j){for(let te=0;te<j.removed.length;te++){const de=j.removed[te],ce=M.indexOf(de);ce>=0&&(M[ce]=null,S[ce].disconnect(de))}for(let te=0;te<j.added.length;te++){const de=j.added[te];let ce=M.indexOf(de);if(ce===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=M.length){M.push(de),ce=Ie;break}else if(M[Ie]===null){M[Ie]=de,ce=Ie;break}if(ce===-1)break}const U=S[ce];U&&U.connect(de)}}const W=new k,Q=new k;function Y(j,te,de){W.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const ce=W.distanceTo(Q),U=te.projectionMatrix.elements,Ie=de.projectionMatrix.elements,Ne=U[14]/(U[10]-1),ge=U[14]/(U[10]+1),De=(U[9]+1)/U[5],et=(U[9]-1)/U[5],Ce=(U[8]-1)/U[0],Ve=(Ie[8]+1)/Ie[0],yt=Ne*Ce,Rt=Ne*Ve,Et=ce/(-Ce+Ve),St=Et*-Ce;te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(St),j.translateZ(Et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const tt=Ne+Et,pt=ge+Et,kt=yt-St,L=Rt+(ce-St),b=De*ge/pt*tt,$=et*ge/pt*tt;j.projectionMatrix.makePerspective(kt,L,b,$,tt,pt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;v.near=P.near=R.near=j.near,v.far=P.far=R.far=j.far,(C!==v.near||q!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,q=v.far);const te=j.parent,de=v.cameras;Z(v,te);for(let ce=0;ce<de.length;ce++)Z(de[ce],te);de.length===2?Y(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),oe(j,v,te)};function oe(j,te,de){de===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ce=j.children;for(let U=0,Ie=ce.length;U<Ie;U++)ce[U].updateMatrixWorld(!0);j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return E};let ee=null;function Ee(j,te){if(h=te.getViewerPose(c||a),x=te,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ce=!1;de.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let U=0;U<de.length;U++){const Ie=de[U];let Ne=null;if(p!==null)Ne=p.getViewport(Ie);else{const De=u.getViewSubImage(f,Ie);Ne=De.viewport,U===0&&(e.setRenderTargetTextures(d,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let ge=I[U];ge===void 0&&(ge=new jt,ge.layers.enable(U),ge.viewport=new ht,I[U]=ge),ge.matrix.fromArray(Ie.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ie.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),U===0&&(v.matrix.copy(ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(ge)}}for(let de=0;de<S.length;de++){const ce=M[de],U=S[de];ce!==null&&U!==void 0&&U.update(ce,te,c||a)}if(ee&&ee(j,te),te.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let de=null;for(const ce of E)te.detectedPlanes.has(ce)||(de===null&&(de=[]),de.push(ce));if(de!==null)for(const ce of de)E.delete(ce),T.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of te.detectedPlanes)if(!E.has(ce))E.add(ce),T.set(ce,te.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const U=T.get(ce);ce.lastChangedTime>U&&(T.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}x=null}const ae=new Ru;ae.setAnimationLoop(Ee),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}function px(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Au(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,S,M,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mx(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,M){const E=M.program;n.uniformBlockBinding(S,E)}function c(S,M){let E=i[S.id];E===void 0&&(x(S),E=h(S),i[S.id]=E,S.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(S,T);const R=e.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function h(S){const M=u();S.__bindingPointIndex=M;const E=s.createBuffer(),T=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,T,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],E=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,P=E.length;R<P;R++){const I=E[R];if(p(I,R,T)===!0){const v=I.__offset,C=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let X=0;X<C.length;X++){const O=C[X],V=_(O);typeof O=="number"?(I.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,v+q,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=O.elements[0],I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=O.elements[0],I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=O.elements[0]):(O.toArray(I.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,v,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,M,E){const T=S.value;if(E[M]===void 0){if(typeof T=="number")E[M]=T;else{const R=Array.isArray(T)?T:[T],P=[];for(let I=0;I<R.length;I++)P.push(R[I].clone());E[M]=P}return!0}else if(typeof T=="number"){if(E[M]!==T)return E[M]=T,!0}else{const R=Array.isArray(E[M])?E[M]:[E[M]],P=Array.isArray(T)?T:[T];for(let I=0;I<R.length;I++){const v=R[I];if(v.equals(P[I])===!1)return v.copy(P[I]),!0}}return!1}function x(S){const M=S.uniforms;let E=0;const T=16;let R=0;for(let P=0,I=M.length;P<I;P++){const v=M[P],C={boundary:0,storage:0},q=Array.isArray(v.value)?v.value:[v.value];for(let X=0,O=q.length;X<O;X++){const V=q[X],W=_(V);C.boundary+=W.boundary,C.storage+=W.storage}if(v.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=E,P>0){R=E%T;const X=T-R;R!==0&&X-C.boundary<0&&(E+=T-R,v.__offset=E)}E+=C.storage}return R=E%T,R>0&&(E+=T-R),S.__size=E,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}function _x(){const s=Ls("canvas");return s.style.display="block",s}class Du{constructor(e={}){const{canvas:t=_x(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,x=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=hi,this.toneMappingExposure=1;const d=this;let S=!1,M=0,E=0,T=null,R=-1,P=null;const I=new ht,v=new ht;let C=null,q=t.width,X=t.height,O=1,V=null,W=null;const Q=new ht(0,0,q,X),Y=new ht(0,0,q,X);let Z=!1;const oe=new Tl;let ee=!1,Ee=!1,ae=null;const j=new Ye,te=new k,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return T===null?O:1}let U=n;function Ie(A,B){for(let J=0;J<A.length;J++){const H=A[J],g=t.getContext(H,B);if(g!==null)return g}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_l}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ze,!1),U===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),U=Ie(B,A),U===null)throw Ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ne,ge,De,et,Ce,Ve,yt,Rt,Et,St,tt,pt,kt,L,b,$,he,fe,Me,Ue,Te,ie,Re,Pe;function Le(){Ne=new wg(U),ge=new yg(U,Ne,e),Ne.init(ge),ie=new cx(U,Ne,ge),De=new ox(U,Ne,ge),et=new Lg(U),Ce=new Y0,Ve=new lx(U,Ne,De,Ce,ge,ie,et),yt=new Tg(d),Rt=new Ag(d),Et=new Gp(U,ge),Re=new vg(U,Ne,Et,ge),St=new Rg(U,Et,et,Re),tt=new Ug(U,St,Et,et),Me=new Dg(U,ge,Ve),$=new Sg(Ce),pt=new q0(d,yt,Rt,Ne,ge,Re,$),kt=new px(d,Ce),L=new K0,b=new tx(Ne,ge),fe=new xg(d,yt,Rt,De,tt,f,l),he=new ax(d,tt,ge),Pe=new mx(U,et,ge,De),Ue=new Mg(U,Ne,et,ge),Te=new Cg(U,Ne,et,ge),et.programs=pt.programs,d.capabilities=ge,d.extensions=Ne,d.properties=Ce,d.renderLists=L,d.shadowMap=he,d.state=De,d.info=et}Le();const _e=new dx(d,U);this.xr=_e,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(q,X,!1))},this.getSize=function(A){return A.set(q,X)},this.setSize=function(A,B,J=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,X=B,t.width=Math.floor(A*O),t.height=Math.floor(B*O),J===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(q*O,X*O).floor()},this.setDrawingBufferSize=function(A,B,J){q=A,X=B,O=J,t.width=Math.floor(A*J),t.height=Math.floor(B*J),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,B,J,H){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,B,J,H),De.viewport(I.copy(Q).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,B,J,H){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,B,J,H),De.scissor(v.copy(Y).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){De.setScissorTest(Z=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(A=!0,B=!0,J=!0){let H=0;A&&(H|=U.COLOR_BUFFER_BIT),B&&(H|=U.DEPTH_BUFFER_BIT),J&&(H|=U.STENCIL_BUFFER_BIT),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),L.dispose(),b.dispose(),Ce.dispose(),yt.dispose(),Rt.dispose(),tt.dispose(),Re.dispose(),Pe.dispose(),pt.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",we),_e.removeEventListener("sessionend",it),ae&&(ae.dispose(),ae=null),rt.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=et.autoReset,B=he.enabled,J=he.autoUpdate,H=he.needsUpdate,g=he.type;Le(),et.autoReset=A,he.enabled=B,he.autoUpdate=J,he.needsUpdate=H,he.type=g}function ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xe(A){const B=A.target;B.removeEventListener("dispose",Xe),N(B)}function N(A){F(A),Ce.remove(A)}function F(A){const B=Ce.get(A).programs;B!==void 0&&(B.forEach(function(J){pt.releaseProgram(J)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,J,H,g,y){B===null&&(B=de);const w=g.isMesh&&g.matrixWorld.determinant()<0,D=hr(A,B,J,H,g);De.setMaterial(H,w);let G=J.index,z=1;H.wireframe===!0&&(G=St.getWireframeAttribute(J),z=2);const K=J.drawRange,ne=J.attributes.position;let se=K.start*z,re=(K.start+K.count)*z;y!==null&&(se=Math.max(se,y.start*z),re=Math.min(re,(y.start+y.count)*z)),G!==null?(se=Math.max(se,0),re=Math.min(re,G.count)):ne!=null&&(se=Math.max(se,0),re=Math.min(re,ne.count));const ue=re-se;if(ue<0||ue===1/0)return;Re.setup(g,H,D,J,G);let Se,pe=Ue;if(G!==null&&(Se=Et.get(G),pe=Te,pe.setIndex(Se)),g.isMesh)H.wireframe===!0?(De.setLineWidth(H.wireframeLinewidth*ce()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(g.isLine){let me=H.linewidth;me===void 0&&(me=1),De.setLineWidth(me*ce()),g.isLineSegments?pe.setMode(U.LINES):g.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else g.isPoints?pe.setMode(U.POINTS):g.isSprite&&pe.setMode(U.TRIANGLES);if(g.isInstancedMesh)pe.renderInstances(se,ue,g.count);else if(J.isInstancedBufferGeometry){const me=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Be=Math.min(J.instanceCount,me);pe.renderInstances(se,ue,Be)}else pe.render(se,ue)},this.compile=function(A,B){function J(H,g,y){H.transparent===!0&&H.side===Mn&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,cr(H,g,y),H.side=ui,H.needsUpdate=!0,cr(H,g,y),H.side=Mn):cr(H,g,y)}x=b.get(A),x.init(),m.push(x),A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights(d.useLegacyLights),A.traverse(function(H){const g=H.material;if(g)if(Array.isArray(g))for(let y=0;y<g.length;y++){const w=g[y];J(w,A,H)}else J(g,A,H)}),m.pop(),x=null};let le=null;function ye(A){le&&le(A)}function we(){rt.stop()}function it(){rt.start()}const rt=new Ru;rt.setAnimationLoop(ye),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(A){le=A,_e.setAnimationLoop(A),A===null?rt.stop():rt.start()},_e.addEventListener("sessionstart",we),_e.addEventListener("sessionend",it),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,B,T),x=b.get(A,m.length),x.init(),m.push(x),j.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),oe.setFromProjectionMatrix(j),Ee=this.localClippingEnabled,ee=$.init(this.clippingPlanes,Ee),p=L.get(A,_.length),p.init(),_.push(p),It(A,B,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(V,W),ee===!0&&$.beginShadows();const J=x.state.shadowsArray;if(he.render(J,A,B),ee===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(p,A),x.setupLights(d.useLegacyLights),B.isArrayCamera){const H=B.cameras;for(let g=0,y=H.length;g<y;g++){const w=H[g];Hn(p,A,w,w.viewport)}}else Hn(p,A,B);T!==null&&(Ve.updateMultisampleRenderTarget(T),Ve.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(d,A,B),Re.resetDefaultState(),R=-1,P=null,m.pop(),m.length>0?x=m[m.length-1]:x=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function It(A,B,J,H){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){H&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const w=tt.update(A),D=A.material;D.visible&&p.push(A,w,D,J,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==et.render.frame&&(A.skeleton.update(),A.skeleton.frame=et.render.frame);const w=tt.update(A),D=A.material;if(H&&(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center).applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(D)){const G=w.groups;for(let z=0,K=G.length;z<K;z++){const ne=G[z],se=D[ne.materialIndex];se&&se.visible&&p.push(A,w,se,J,te.z,ne)}}else D.visible&&p.push(A,w,D,J,te.z,null)}}const y=A.children;for(let w=0,D=y.length;w<D;w++)It(y[w],B,J,H)}function Hn(A,B,J,H){const g=A.opaque,y=A.transmissive,w=A.transparent;x.setupLightsView(J),ee===!0&&$.setGlobalState(d.clippingPlanes,J),y.length>0&&mt(g,y,B,J),H&&De.viewport(I.copy(H)),g.length>0&&$t(g,B,J),y.length>0&&$t(y,B,J),w.length>0&&$t(w,B,J),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function mt(A,B,J,H){if(ae===null){const D=ge.isWebGL2;ae=new On(1024,1024,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?li:nr,minFilter:Di,samples:D&&o===!0?4:0})}const g=d.getRenderTarget();d.setRenderTarget(ae),d.clear();const y=d.toneMapping;d.toneMapping=hi,$t(A,J,H),Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae);let w=!1;for(let D=0,G=B.length;D<G;D++){const z=B[D],K=z.object,ne=z.geometry,se=z.material,re=z.group;if(se.side===Mn&&K.layers.test(H.layers)){const ue=se.side;se.side=tn,se.needsUpdate=!0,pn(K,J,H,ne,se,re),se.side=ue,se.needsUpdate=!0,w=!0}}w===!0&&(Ve.updateMultisampleRenderTarget(ae),Ve.updateRenderTargetMipmap(ae)),d.setRenderTarget(g),d.toneMapping=y}function $t(A,B,J){const H=B.isScene===!0?B.overrideMaterial:null;for(let g=0,y=A.length;g<y;g++){const w=A[g],D=w.object,G=w.geometry,z=H===null?w.material:H,K=w.group;D.layers.test(J.layers)&&pn(D,B,J,G,z,K)}}function pn(A,B,J,H,g,y){A.onBeforeRender(d,B,J,H,g,y),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),g.onBeforeRender(d,B,J,H,A,y),g.transparent===!0&&g.side===Mn&&g.forceSinglePass===!1?(g.side=tn,g.needsUpdate=!0,d.renderBufferDirect(J,B,H,g,A,y),g.side=ui,g.needsUpdate=!0,d.renderBufferDirect(J,B,H,g,A,y),g.side=Mn):d.renderBufferDirect(J,B,H,g,A,y),A.onAfterRender(d,B,J,H,g,y)}function cr(A,B,J){B.isScene!==!0&&(B=de);const H=Ce.get(A),g=x.state.lights,y=x.state.shadowsArray,w=g.state.version,D=pt.getParameters(A,g.state,y,B,J),G=pt.getProgramCacheKey(D);let z=H.programs;H.environment=A.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(A.isMeshStandardMaterial?Rt:yt).get(A.envMap||H.environment),z===void 0&&(A.addEventListener("dispose",Xe),z=new Map,H.programs=z);let K=z.get(G);if(K!==void 0){if(H.currentProgram===K&&H.lightsStateVersion===w)return Xs(A,D),K}else D.uniforms=pt.getUniforms(A),A.onBuild(J,D,d),A.onBeforeCompile(D,d),K=pt.acquireProgram(D,G),z.set(G,K),H.uniforms=D.uniforms;const ne=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ne.clippingPlanes=$.uniform),Xs(A,D),H.needsLights=Oi(A),H.lightsStateVersion=w,H.needsLights&&(ne.ambientLightColor.value=g.state.ambient,ne.lightProbe.value=g.state.probe,ne.directionalLights.value=g.state.directional,ne.directionalLightShadows.value=g.state.directionalShadow,ne.spotLights.value=g.state.spot,ne.spotLightShadows.value=g.state.spotShadow,ne.rectAreaLights.value=g.state.rectArea,ne.ltc_1.value=g.state.rectAreaLTC1,ne.ltc_2.value=g.state.rectAreaLTC2,ne.pointLights.value=g.state.point,ne.pointLightShadows.value=g.state.pointShadow,ne.hemisphereLights.value=g.state.hemi,ne.directionalShadowMap.value=g.state.directionalShadowMap,ne.directionalShadowMatrix.value=g.state.directionalShadowMatrix,ne.spotShadowMap.value=g.state.spotShadowMap,ne.spotLightMatrix.value=g.state.spotLightMatrix,ne.spotLightMap.value=g.state.spotLightMap,ne.pointShadowMap.value=g.state.pointShadowMap,ne.pointShadowMatrix.value=g.state.pointShadowMatrix);const se=K.getUniforms(),re=Sa.seqWithValue(se.seq,ne);return H.currentProgram=K,H.uniformsList=re,K}function Xs(A,B){const J=Ce.get(A);J.outputColorSpace=B.outputColorSpace,J.instancing=B.instancing,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function hr(A,B,J,H,g){B.isScene!==!0&&(B=de),Ve.resetTextureUnits();const y=B.fog,w=H.isMeshStandardMaterial?B.environment:null,D=T===null?d.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,G=(H.isMeshStandardMaterial?Rt:yt).get(H.envMap||w),z=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,K=!!H.normalMap&&!!J.attributes.tangent,ne=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,re=!!J.morphAttributes.color,ue=H.toneMapped?d.toneMapping:hi,Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pe=Se!==void 0?Se.length:0,me=Ce.get(H),Be=x.state.lights;if(ee===!0&&(Ee===!0||A!==P)){const Je=A===P&&H.id===R;$.setState(H,A,Je)}let xe=!1;H.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Be.state.version||me.outputColorSpace!==D||g.isInstancedMesh&&me.instancing===!1||!g.isInstancedMesh&&me.instancing===!0||g.isSkinnedMesh&&me.skinning===!1||!g.isSkinnedMesh&&me.skinning===!0||me.envMap!==G||H.fog===!0&&me.fog!==y||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==$.numPlanes||me.numIntersection!==$.numIntersection)||me.vertexAlphas!==z||me.vertexTangents!==K||me.morphTargets!==ne||me.morphNormals!==se||me.morphColors!==re||me.toneMapping!==ue||ge.isWebGL2===!0&&me.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,me.__version=H.version);let be=me.currentProgram;xe===!0&&(be=cr(H,B,g));let Ge=!1,at=!1,ft=!1;const st=be.getUniforms(),$e=me.uniforms;if(De.useProgram(be.program)&&(Ge=!0,at=!0,ft=!0),H.id!==R&&(R=H.id,at=!0),Ge||P!==A){if(st.setValue(U,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),P!==A&&(P=A,at=!0,ft=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Je=st.map.cameraPosition;Je!==void 0&&Je.setValue(U,te.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||g.isSkinnedMesh)&&st.setValue(U,"viewMatrix",A.matrixWorldInverse)}if(g.isSkinnedMesh){st.setOptional(U,g,"bindMatrix"),st.setOptional(U,g,"bindMatrixInverse");const Je=g.skeleton;Je&&(ge.floatVertexTextures?(Je.boneTexture===null&&Je.computeBoneTexture(),st.setValue(U,"boneTexture",Je.boneTexture,Ve),st.setValue(U,"boneTextureSize",Je.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qe=J.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0&&ge.isWebGL2===!0)&&Me.update(g,J,be),(at||me.receiveShadow!==g.receiveShadow)&&(me.receiveShadow=g.receiveShadow,st.setValue(U,"receiveShadow",g.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&($e.envMap.value=G,$e.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),at&&(st.setValue(U,"toneMappingExposure",d.toneMappingExposure),me.needsLights&&Ya($e,ft),y&&H.fog===!0&&kt.refreshFogUniforms($e,y),kt.refreshMaterialUniforms($e,H,O,X,ae),Sa.upload(U,me.uniformsList,$e,Ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Sa.upload(U,me.uniformsList,$e,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(U,"center",g.center),st.setValue(U,"modelViewMatrix",g.modelViewMatrix),st.setValue(U,"normalMatrix",g.normalMatrix),st.setValue(U,"modelMatrix",g.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Je=H.uniformsGroups;for(let zt=0,bt=Je.length;zt<bt;zt++)if(ge.isWebGL2){const Qe=Je[zt];Pe.update(Qe,be),Pe.bind(Qe,be)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return be}function Ya(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Oi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,J){Ce.get(A.texture).__webglTexture=B,Ce.get(A.depthTexture).__webglTexture=J;const H=Ce.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=J===void 0,H.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const J=Ce.get(A);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,J=0){T=A,M=B,E=J;let H=!0,g=null,y=!1,w=!1;if(A){const G=Ce.get(A);G.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):G.__webglFramebuffer===void 0?Ve.setupRenderTarget(A):G.__hasExternalTextures&&Ve.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);const z=A.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&(w=!0);const K=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(g=K[B],y=!0):ge.isWebGL2&&A.samples>0&&Ve.useMultisampledRTT(A)===!1?g=Ce.get(A).__webglMultisampledFramebuffer:g=K,I.copy(A.viewport),v.copy(A.scissor),C=A.scissorTest}else I.copy(Q).multiplyScalar(O).floor(),v.copy(Y).multiplyScalar(O).floor(),C=Z;if(De.bindFramebuffer(U.FRAMEBUFFER,g)&&ge.drawBuffers&&H&&De.drawBuffers(A,g),De.viewport(I),De.scissor(v),De.setScissorTest(C),y){const G=Ce.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,G.__webglTexture,J)}else if(w){const G=Ce.get(A.texture),z=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.__webglTexture,J||0,z)}R=-1},this.readRenderTargetPixels=function(A,B,J,H,g,y,w){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&w!==void 0&&(D=D[w]),D){De.bindFramebuffer(U.FRAMEBUFFER,D);try{const G=A.texture,z=G.format,K=G.type;if(z!==hn&&ie.convert(z)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ne=K===li&&(Ne.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(K!==nr&&ie.convert(K)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(K===Nn&&(ge.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-H&&J>=0&&J<=A.height-g&&U.readPixels(B,J,H,g,ie.convert(z),ie.convert(K),y)}finally{const G=T!==null?Ce.get(T).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,G)}}},this.copyFramebufferToTexture=function(A,B,J=0){const H=Math.pow(2,-J),g=Math.floor(B.image.width*H),y=Math.floor(B.image.height*H);Ve.setTexture2D(B,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,A.x,A.y,g,y),De.unbindTexture()},this.copyTextureToTexture=function(A,B,J,H=0){const g=B.image.width,y=B.image.height,w=ie.convert(J.format),D=ie.convert(J.type);Ve.setTexture2D(J,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment),B.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,A.x,A.y,g,y,w,D,B.image.data):B.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,w,B.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,A.x,A.y,w,D,B.image),H===0&&J.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(A,B,J,H,g=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const y=A.max.x-A.min.x+1,w=A.max.y-A.min.y+1,D=A.max.z-A.min.z+1,G=ie.convert(H.format),z=ie.convert(H.type);let K;if(H.isData3DTexture)Ve.setTexture3D(H,0),K=U.TEXTURE_3D;else if(H.isDataArrayTexture)Ve.setTexture2DArray(H,0),K=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const ne=U.getParameter(U.UNPACK_ROW_LENGTH),se=U.getParameter(U.UNPACK_IMAGE_HEIGHT),re=U.getParameter(U.UNPACK_SKIP_PIXELS),ue=U.getParameter(U.UNPACK_SKIP_ROWS),Se=U.getParameter(U.UNPACK_SKIP_IMAGES),pe=J.isCompressedTexture?J.mipmaps[0]:J.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?U.texSubImage3D(K,g,B.x,B.y,B.z,y,w,D,G,z,pe.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(K,g,B.x,B.y,B.z,y,w,D,G,pe.data)):U.texSubImage3D(K,g,B.x,B.y,B.z,y,w,D,G,z,pe),U.pixelStorei(U.UNPACK_ROW_LENGTH,ne),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),U.pixelStorei(U.UNPACK_SKIP_PIXELS,re),U.pixelStorei(U.UNPACK_SKIP_ROWS,ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Se),g===0&&H.generateMipmaps&&U.generateMipmap(K),De.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ve.setTextureCube(A,0):A.isData3DTexture?Ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ve.setTexture2DArray(A,0):Ve.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,De.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?$i:du}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Fe:An}}class gx extends Du{}gx.prototype.isWebGL1Renderer=!0;let xx=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new k;class bl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dh=new k,ph=new ht,mh=new ht,Mx=new k,_h=new Ye,wr=new k;class yx extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ph.fromBufferAttribute(i.attributes.skinIndex,e),mh.fromBufferAttribute(i.attributes.skinWeight,e),dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=mh.getComponent(r);if(a!==0){const o=ph.getComponent(r);_h.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mx.copy(dh).applyMatrix4(_h),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Uu extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nu extends Bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ut,h=Ut,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new Ye,Sx=new Ye;class Al{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Sx;gh.multiplyMatrices(o,t[r]),gh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=mu(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Nu(t,e,e,hn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Uu),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class xh extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rr=new Ye,vh=new Ye,da=[],Mh=new pi,Tx=new Ye,fs=new en,ds=new mi;class Ex extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),Mh.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(Mh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rr),ds.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rr),vh.multiplyMatrices(n,Rr),fs.matrixWorld=vh,fs.raycast(e,da);for(let a=0,o=da.length;a<o;a++){const l=da[a];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Fu extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yh=new k,Sh=new k,Th=new Ye,To=new yl,pa=new mi;class wl extends xt{constructor(e=new Rn,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yh.fromBufferAttribute(t,i-1),Sh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yh.distanceTo(Sh);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;Th.copy(i).invert(),To.copy(e.ray).applyMatrix4(Th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,h=new k,u=new k,f=new k,p=this.isLineSegments?2:1,x=n.index,m=n.attributes.position;if(x!==null){const d=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let M=d,E=S-1;M<E;M+=p){const T=x.getX(M),R=x.getX(M+1);if(c.fromBufferAttribute(m,T),h.fromBufferAttribute(m,R),To.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let M=d,E=S-1;M<E;M+=p){if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,M+1),To.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Eh=new k,bh=new k;class bx extends wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Eh.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(bh);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ax extends wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rl extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ah=new Ye,jo=new yl,ma=new mi,_a=new k;class Ou extends xt{constructor(e=new Rn,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;Ah.copy(i).invert(),jo.copy(e.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=f,_=p;x<_;x++){const m=c.getX(x);_a.fromBufferAttribute(u,m),wh(_a,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,_=p;x<_;x++)_a.fromBufferAttribute(u,x),wh(_a,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wh(s,e,t,n,i,r,a){const o=jo.distanceSqToPoint(s);if(o<t){const l=new k;jo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Cl extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ar extends Cl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wx extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Mi(s,e,t){return Bu(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function ga(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function ku(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cx extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pr,endingEnd:Pr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ir:r=e,o=2*t-n;break;case wa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ir:a=e,l=2*n-t;break;case wa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),_=x*x,m=_*x,d=-f*m+2*f*_-f*x,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,M=(-1-p)*m+(1.5+p)*_+.5*x,E=p*m-p*_;for(let T=0;T!==o;++T)r[T]=d*a[h+T]+S*a[c+T]+M*a[l+T]+E*a[u+T];return r}}class zu extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class Lx extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ga(t,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ga(e.times,Array),values:ga(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=Mi(n,r,a),this.values=Mi(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Bu(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Mi(this.times),t=Mi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){const _=t[u+x];if(_!==t[f+x]||_!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Mi(e,0,a),this.values=Mi(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Mi(this.times,0),t=Mi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Yr;class rs extends Kn{}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Cs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hu extends Kn{}Hu.prototype.ValueTypeName="color";class Ps extends Kn{}Ps.prototype.ValueTypeName="number";class Px extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ir extends Kn{InterpolantFactoryMethodLinear(e){return new Px(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=Yr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Kn{}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Cs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Kn{}Is.prototype.ValueTypeName="vector";class Ko{constructor(e,t=-1,n,i=xl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dx(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Rx(l);l=Rh(l,1,h),c=Rh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,x,_){if(p.length!==0){const m=[],d=[];ku(p,m,d,x),m.length!==0&&_.push(new u(f,m,d))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)p[f[x].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let S=0;S!==f[x].morphTargets.length;++S){const M=f[x];m.push(M.time),d.push(M.morphTarget===_?1:0)}i.push(new Ps(".morphTargetInfluence["+_+"]",m,d))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Is,p+".position",f,"pos",i),n(ir,p+".quaternion",f,"rot",i),n(Is,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ix(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Hu;case"quaternion":return ir;case"bool":case"boolean":return rs;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(s.type);if(s.times===void 0){const t=[],n=[];ku(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ux{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}}const Nx=new Ux;let or=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const ii={};class Fx extends Error{constructor(e,t){super(e),this.response=t}}class Ll extends or{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:i});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ii[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,x=p!==0;let _=0;const m=new ReadableStream({start(d){S();function S(){u.read().then(({done:M,value:E})=>{if(M)d.close();else{_+=E.byteLength;const T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let R=0,P=h.length;R<P;R++){const I=h[R];I.onProgress&&I.onProgress(T)}d.enqueue(E),S()}})}}});return new Response(m)}else throw new Fx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Zr.add(e,c);const h=ii[e];delete ii[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gu extends or{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ls("img");function l(){h(),Zr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ox extends or{constructor(e){super(e)}load(e,t,n,i){const r=new Sl,a=new Gu(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Bx extends or{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Nu,o=new Ll(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Jt,a.wrapT=c.wrapT!==void 0?c.wrapT:Jt,a.magFilter=c.magFilter!==void 0?c.magFilter:Ct,a.minFilter=c.minFilter!==void 0?c.minFilter:Ct,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Di),c.mipmapCount===1&&(a.minFilter=Ct),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class Ga extends or{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,a=new Gu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}let Va=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};const Eo=new Ye,Ch=new k,Lh=new k;class Pl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ch),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kx extends Pl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=jr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vu extends Va{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ph=new Ye,ps=new k,bo=new k;class zx extends Pl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(ps),bo.copy(n.position),bo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bo),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}}class Hx extends Va{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gx extends Pl{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vx extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Gx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wx extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xx extends or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Zr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Wu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ih(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ih();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ih(){return(typeof performance>"u"?Date:performance).now()}class qx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Bn.multiplyQuaternionsFlat(e,a,e,t,e,n),Bn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Il="\\[\\]\\.:\\/",Yx=new RegExp("["+Il+"]","g"),Dl="[^"+Il+"]",jx="[^"+Il.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Zx=/(WCOD+)?/.source.replace("WCOD",jx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Qx=new RegExp("^"+Kx+Zx+$x+Jx+"$"),ev=["material","materials","bones","map"];class tv{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){const t=Qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ev.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=tv;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Pr,endingEnd:Pr};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case xl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Yd;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===uu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ir,i.endingEnd=Ir):(e?i.endingStart=this.zeroSlopeAtStart?Ir:Pr:i.endingStart=wa,t?i.endingEnd=this.zeroSlopeAtEnd?Ir:Pr:i.endingEnd=wa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const iv=new Float32Array(1);class rv extends sr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],p=f.name;let x=h[p];if(x!==void 0)++x.referenceCount,a[u]=x;else{if(x=a[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;x=new qx(nt.create(n,p,_),f.ValueTypeName,f.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,p),a[u]=x}o[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new zu(new Float32Array(2),new Float32Array(2),1,iv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Ko.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=xl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new nv(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Ko.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);const Xu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sv=new za(-1,1,1,-1,0,1),Ul=new Rn;Ul.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3));Ul.setAttribute("uv",new bn([0,2,0,0,2,0],2));class qu{constructor(e){this._mesh=new en(Ul,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class av extends Gs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ra.clone(e.uniforms),this.material=new Kt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dh extends Gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ov extends Gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new av(Xu),this.clock=new Wu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dh!==void 0&&(a instanceof Dh?n=!0:a instanceof ov&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cv extends Gs{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const hv={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $r extends Gs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new On(r,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new On(r,a);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new On(r,a);p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=hv;this.highPassUniforms=Ra.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new He(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Xu;this.copyUniforms=Ra.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Ei,this.fsQuad=new qu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new He(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=$r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Kt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$r.BlurDirectionX=new He(1,0);$r.BlurDirectionY=new He(0,1);function uv(s,e,t){return Math.max(e,Math.min(t,s))}class Nl{constructor(e=0,t=0){Nl.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(uv(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fv extends Du{constructor(e){super({antialias:!0,canvas:e.domElement,alpha:!0}),this.world=e,this.setSize(this.world.sizer.width,this.world.sizer.height),this.setPixelRatio(Math.min(window.devicePixelRatio,2))}resize(){this.setSize(this.world.sizer.width,this.world.sizer.height),this.setPixelRatio(Math.min(window.devicePixelRatio,2))}update(){this.render(this.world.scene,this.world.camera)}}class dv extends jt{constructor(e){super(60,e.sizer.width/e.sizer.height,.1,1e4),this.world=e,this.position.set(0,5,100)}resize(){this.aspect=this.world.sizer.width/this.world.sizer.height,this.updateProjectionMatrix()}shake(){let e=!1,t=.4;const n=()=>{if(e){const r=(Math.random()-.5)*t,a=(Math.random()-.5)*t;this.position.x+=r,this.position.y+=a,setTimeout(()=>{this.position.set(0,5,100),this.world.controller.velocityY=this.world.controller.velocityY*1.2,this.world.controller.velocityX=this.world.controller.velocityX*1.2,e=!1},150)}};(()=>{if(!e){e=!0;const r=setInterval(n,20);setTimeout(()=>{clearInterval(r),e=!1,this.position.set(0,5,100)},1e3)}})()}}class pv{constructor(){os(this,"width_");os(this,"height_");this.width_=window.innerWidth,this.height_=window.innerHeight,window.addEventListener("resize",()=>this.resize())}get width(){return this.width_}set width(e){this.width_=e}get height(){return this.height_}set height(e){this.height_=e}resize(){this.width_=window.innerWidth,this.height_=window.innerHeight}}class mv extends xx{constructor(e){super(),this.world=e}}function Uh(s,e){if(e===Kd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Vo||e===fu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Vo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class _v extends or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Iv(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Zo.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ll(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yu){try{a[Ze.KHR_BINARY_GLTF]=new Dv(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new qv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new vv;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Uv(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new Nv;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new Fv;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xv{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Oe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vx(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hx(h),c.distance=u;break;case"spot":c=new Vu(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class vv{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Ei}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Fe))}return Promise.all(i)}}class Mv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class yv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Tv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Fe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ev{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(o[0],o[1],o[2]),Promise.all(r)}}class Av{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ar}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Fe)),Promise.all(r)}}class Rv{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Cv{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lv{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Pv{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}}class Iv{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(const x of u){const _=new Ye,m=new k,d=new Bn,S=new k(1,1,1),M=new Ex(x.geometry,x.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,_.compose(m,d,S));for(const E in l)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&x.geometry.setAttribute(E,l[E]);xt.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Yu="glTF",ms=12,Nh={JSON:1313821514,BIN:5130562};class Dv{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ms,r=new DataView(e,ms);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Nh.JSON){const c=new Uint8Array(e,ms+a,o);this.content=n.decode(c)}else if(l===Nh.BIN){const c=ms+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Uv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=$o[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=$o[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],p=kr[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const x=f.attributes[p],_=l[p];_!==void 0&&(x.normalized=_)}u(f)},o,c)})})}}class Nv{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fv{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class ju extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,x=e*c,_=x-c,m=-2*p+3*f,d=p-f,S=1-m,M=d-f+u;for(let E=0;E!==o;E++){const T=a[_+E+o],R=a[_+E+l]*h,P=a[x+E+o],I=a[x+E]*h;r[E]=S*T+M*R+m*P+d*I}return r}}const Ov=new Bn;class Bv extends ju{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ov.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:Ut,9729:Ct,9984:Go,9985:lu,9986:ya,9987:Di},Oh={33071:Jt,33648:Aa,10497:Xr},Ao={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$o={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kv={CUBICSPLINE:void 0,LINEAR:Yr,STEP:Cs},wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Cl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),s.DefaultMaterial}function _s(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Gv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vv(s){const e=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Bh(e.attributes):t=s.indices+":"+Bh(s.attributes)+":"+s.mode,t}function Bh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Jo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Wv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Xv=new Ye;class qv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ga(this.options.manager):this.textureLoader=new Xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};_s(r,o,i),Ti(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Zo.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ao[i.type],o=kr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Zt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ao[i.type],c=kr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let _,m;if(p&&p!==u){const d=Math.floor(f/p),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let M=t.cache.get(S);M||(_=new c(o,d*p,i.count*p/h),M=new vx(_,p/h),t.cache.add(S,M)),m=new bl(M,l,f%p/h,x)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new Zt(_,l,x);if(i.sparse!==void 0){const d=Ao.SCALAR,S=kr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,T=new S(a[1],M,i.sparse.count*d),R=new c(a[2],E,i.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized));for(let P=0,I=T.length;P<I;P++){const v=T[P];if(m.setX(v,R[P*l]),l>=2&&m.setY(v,R[P*l+1]),l>=3&&m.setZ(v,R[P*l+2]),l>=4&&m.setW(v,R[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Fh[f.magFilter]||Ct,h.minFilter=Fh[f.minFilter]||Di,h.wrapS=Oh[f.wrapS]||Xr,h.wrapT=Oh[f.wrapT]||Xr,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const m=new Bt(_);m.needsUpdate=!0,f(m)}),t.load(Zo.resolveURL(u,r.path),x,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||Wv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Rl,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fu,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Cl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);const h=r.alphaMode||wo.OPAQUE;if(h===wo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===wo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ei&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&a!==Ei&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ei&&(o.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Ei&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Fe)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&_s(i,u,r),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return kh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Vv(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=kh(new Rn,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?zv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){const _=h[p],m=a[p];let d;const S=c[p];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new yx(_,S):new en(_,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?d.geometry=Uh(d.geometry,fu):m.mode===gn.TRIANGLE_FAN&&(d.geometry=Uh(d.geometry,Vo));else if(m.mode===gn.LINES)d=new bx(_,S);else if(m.mode===gn.LINE_STRIP)d=new wl(_,S);else if(m.mode===gn.LINE_LOOP)d=new Ax(_,S);else if(m.mode===gn.POINTS)d=new Ou(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Gv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Ti(d,r),m.extensions&&_s(i,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const f=new ji;t.associations.set(f,{meshes:e});for(let p=0,x=u.length;p<x;p++)f.add(u[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(dp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new za(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Al(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){const f=n.channels[h],p=n.samplers[f.sampler],x=f.target,_=x.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,d=n.parameters!==void 0?n.parameters[p.output]:p.output;x.node!==void 0&&(r.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),l.push(p),c.push(x))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],f=h[1],p=h[2],x=h[3],_=h[4],m=[];for(let d=0,S=u.length;d<S;d++){const M=u[d],E=f[d],T=p[d],R=x[d],P=_[d];if(M===void 0)continue;M.updateMatrix();let I;switch(yi[P.path]){case yi.weights:I=Ps;break;case yi.rotation:I=ir;break;case yi.position:case yi.scale:default:I=Is;break}const v=M.name?M.name:M.uuid,C=R.interpolation!==void 0?kv[R.interpolation]:Yr,q=[];yi[P.path]===yi.weights?M.traverse(function(O){O.morphTargetInfluences&&q.push(O.name?O.name:O.uuid)}):q.push(v);let X=T.array;if(T.normalized){const O=Jo(X.constructor),V=new Float32Array(X.length);for(let W=0,Q=X.length;W<Q;W++)V[W]=X[W]*O;X=V}for(let O=0,V=q.length;O<V;O++){const W=new I(q[O]+"."+yi[P.path],E.array,X,C);R.interpolation==="CUBICSPLINE"&&(W.createInterpolant=function(Y){const Z=this instanceof ir?Bv:ju;return new Z(this.times,this.values,this.getValueSize()/3,Y)},W.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(W)}}return new Ko(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Xv)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Uu:c.length>1?h=new ji:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ti(h,r),r.extensions&&_s(n,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ji;n.name&&(r.name=i.createUniqueName(n.name)),Ti(r,n),n.extensions&&_s(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,p]of i.associations)(f instanceof kn||f instanceof Bt)&&u.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=c(r),r})}}function Yv(s,e,t){const n=e.attributes,i=new pi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const h=Jo(kr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){const _=Jo(kr[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new mi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function kh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=$o[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ti(s,e),Yv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Hv(s,e.targets,t):s})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var zh=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(zh(""))}catch{zh=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var yn=Uint8Array,bi=Uint16Array,Qo=Uint32Array,Ku=new yn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zu=new yn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jv=new yn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$u=function(s,e){for(var t=new bi(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Qo(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Ju=$u(Ku,2),Qu=Ju[0],Kv=Ju[1];Qu[28]=258,Kv[258]=28;var Zv=$u(Zu,0),$v=Zv[0],el=new bi(32768);for(var dt=0;dt<32768;++dt){var Si=(dt&43690)>>>1|(dt&21845)<<1;Si=(Si&52428)>>>2|(Si&13107)<<2,Si=(Si&61680)>>>4|(Si&3855)<<4,el[dt]=((Si&65280)>>>8|(Si&255)<<8)>>>1}var Es=function(s,e,t){for(var n=s.length,i=0,r=new bi(e);i<n;++i)++r[s[i]-1];var a=new bi(e);for(i=0;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new bi(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[el[u]>>>l]=c}else for(o=new bi(n),i=0;i<n;++i)s[i]&&(o[i]=el[a[s[i]-1]++]>>>15-s[i]);return o},Vs=new yn(288);for(var dt=0;dt<144;++dt)Vs[dt]=8;for(var dt=144;dt<256;++dt)Vs[dt]=9;for(var dt=256;dt<280;++dt)Vs[dt]=7;for(var dt=280;dt<288;++dt)Vs[dt]=8;var ef=new yn(32);for(var dt=0;dt<32;++dt)ef[dt]=5;var Jv=Es(Vs,9,1),Qv=Es(ef,5,1),Ro=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Dn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Co=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},eM=function(s){return(s/8|0)+(s&7&&1)},tM=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof bi?bi:s instanceof Qo?Qo:yn)(t-e);return n.set(s.subarray(e,t)),n},nM=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new yn(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new yn(n*3));var a=function(ce){var U=e.length;if(ce>U){var Ie=new yn(Math.max(U*2,ce));Ie.set(e),e=Ie}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,f=t.m,p=t.n,x=n*8;do{if(!h){t.f=o=Dn(s,l,1);var _=Dn(s,l+1,3);if(l+=3,_)if(_==1)h=Jv,u=Qv,f=9,p=5;else if(_==2){var M=Dn(s,l,31)+257,E=Dn(s,l+10,15)+4,T=M+Dn(s,l+5,31)+1;l+=14;for(var R=new yn(T),P=new yn(19),I=0;I<E;++I)P[jv[I]]=Dn(s,l+I*3,7);l+=E*3;for(var v=Ro(P),C=(1<<v)-1,q=Es(P,v,1),I=0;I<T;){var X=q[Dn(s,l,C)];l+=X&15;var m=X>>>4;if(m<16)R[I++]=m;else{var O=0,V=0;for(m==16?(V=3+Dn(s,l,3),l+=2,O=R[I-1]):m==17?(V=3+Dn(s,l,7),l+=3):m==18&&(V=11+Dn(s,l,127),l+=7);V--;)R[I++]=O}}var W=R.subarray(0,M),Q=R.subarray(M);f=Ro(W),p=Ro(Q),h=Es(W,f,1),u=Es(Q,p,1)}else throw"invalid block type";else{var m=eM(l)+4,d=s[m-4]|s[m-3]<<8,S=m+d;if(S>n){if(r)throw"unexpected EOF";break}i&&a(c+d),e.set(s.subarray(m,S),c),t.b=c+=d,t.p=l=S*8;continue}if(l>x){if(r)throw"unexpected EOF";break}}i&&a(c+131072);for(var Y=(1<<f)-1,Z=(1<<p)-1,oe=l;;oe=l){var O=h[Co(s,l)&Y],ee=O>>>4;if(l+=O&15,l>x){if(r)throw"unexpected EOF";break}if(!O)throw"invalid length/literal";if(ee<256)e[c++]=ee;else if(ee==256){oe=l,h=null;break}else{var Ee=ee-254;if(ee>264){var I=ee-257,ae=Ku[I];Ee=Dn(s,l,(1<<ae)-1)+Qu[I],l+=ae}var j=u[Co(s,l)&Z],te=j>>>4;if(!j)throw"invalid distance";l+=j&15;var Q=$v[te];if(te>3){var ae=Zu[te];Q+=Co(s,l)&(1<<ae)-1,l+=ae}if(l>x){if(r)throw"unexpected EOF";break}i&&a(c+131072);for(var de=c+Ee;c<de;c+=4)e[c]=e[c-Q],e[c+1]=e[c+1-Q],e[c+2]=e[c+2-Q],e[c+3]=e[c+3-Q];c=de}}t.l=h,t.p=oe,t.b=c,h&&(o=1,t.m=f,t.d=u,t.n=p)}while(!o);return c==e.length?e:tM(e,0,c)},iM=new yn(0),rM=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function xa(s,e){return nM((rM(s),s.subarray(2,-4)),e)}var sM=typeof TextDecoder<"u"&&new TextDecoder,aM=0;try{sM.decode(iM,{stream:!0}),aM=1}catch{}class oM extends Bx{constructor(e){super(e),this.type=li}parse(e){const v=Math.pow(2.7182818,2.2);function C(g,y){let w=0;for(let G=0;G<65536;++G)(G==0||g[G>>3]&1<<(G&7))&&(y[w++]=G);const D=w-1;for(;w<65536;)y[w++]=0;return D}function q(g){for(let y=0;y<16384;y++)g[y]={},g[y].len=0,g[y].lit=0,g[y].p=null}const X={l:0,c:0,lc:0};function O(g,y,w,D,G){for(;w<g;)y=y<<8|Ae(D,G),w+=8;w-=g,X.l=y>>w&(1<<g)-1,X.c=y,X.lc=w}const V=new Array(59);function W(g){for(let w=0;w<=58;++w)V[w]=0;for(let w=0;w<65537;++w)V[g[w]]+=1;let y=0;for(let w=58;w>0;--w){const D=y+V[w]>>1;V[w]=y,y=D}for(let w=0;w<65537;++w){const D=g[w];D>0&&(g[w]=D|V[D]++<<6)}}function Q(g,y,w,D,G,z){const K=y;let ne=0,se=0;for(;D<=G;D++){if(K.value-y.value>w)return!1;O(6,ne,se,g,K);const re=X.l;if(ne=X.c,se=X.lc,z[D]=re,re==63){if(K.value-y.value>w)throw new Error("Something wrong with hufUnpackEncTable");O(8,ne,se,g,K);let ue=X.l+6;if(ne=X.c,se=X.lc,D+ue>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ue--;)z[D++]=0;D--}else if(re>=59){let ue=re-59+2;if(D+ue>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ue--;)z[D++]=0;D--}}W(z)}function Y(g){return g&63}function Z(g){return g>>6}function oe(g,y,w,D){for(;y<=w;y++){const G=Z(g[y]),z=Y(g[y]);if(G>>z)throw new Error("Invalid table entry");if(z>14){const K=D[G>>z-14];if(K.len)throw new Error("Invalid table entry");if(K.lit++,K.p){const ne=K.p;K.p=new Array(K.lit);for(let se=0;se<K.lit-1;++se)K.p[se]=ne[se]}else K.p=new Array(1);K.p[K.lit-1]=y}else if(z){let K=0;for(let ne=1<<14-z;ne>0;ne--){const se=D[(G<<14-z)+K];if(se.len||se.p)throw new Error("Invalid table entry");se.len=z,se.lit=y,K++}}}return!0}const ee={c:0,lc:0};function Ee(g,y,w,D){g=g<<8|Ae(w,D),y+=8,ee.c=g,ee.lc=y}const ae={c:0,lc:0};function j(g,y,w,D,G,z,K,ne,se){if(g==y){D<8&&(Ee(w,D,G,z),w=ee.c,D=ee.lc),D-=8;let re=w>>D;if(re=new Uint8Array([re])[0],ne.value+re>se)return!1;const ue=K[ne.value-1];for(;re-- >0;)K[ne.value++]=ue}else if(ne.value<se)K[ne.value++]=g;else return!1;ae.c=w,ae.lc=D}function te(g){return g&65535}function de(g){const y=te(g);return y>32767?y-65536:y}const ce={a:0,b:0};function U(g,y){const w=de(g),G=de(y),z=w+(G&1)+(G>>1),K=z,ne=z-G;ce.a=K,ce.b=ne}function Ie(g,y){const w=te(g),D=te(y),G=w-(D>>1)&65535,z=D+G-32768&65535;ce.a=z,ce.b=G}function Ne(g,y,w,D,G,z,K){const ne=K<16384,se=w>G?G:w;let re=1,ue,Se;for(;re<=se;)re<<=1;for(re>>=1,ue=re,re>>=1;re>=1;){Se=0;const pe=Se+z*(G-ue),me=z*re,Be=z*ue,xe=D*re,be=D*ue;let Ge,at,ft,st;for(;Se<=pe;Se+=Be){let $e=Se;const qe=Se+D*(w-ue);for(;$e<=qe;$e+=be){const Je=$e+xe,zt=$e+me,bt=zt+xe;ne?(U(g[$e+y],g[zt+y]),Ge=ce.a,ft=ce.b,U(g[Je+y],g[bt+y]),at=ce.a,st=ce.b,U(Ge,at),g[$e+y]=ce.a,g[Je+y]=ce.b,U(ft,st),g[zt+y]=ce.a,g[bt+y]=ce.b):(Ie(g[$e+y],g[zt+y]),Ge=ce.a,ft=ce.b,Ie(g[Je+y],g[bt+y]),at=ce.a,st=ce.b,Ie(Ge,at),g[$e+y]=ce.a,g[Je+y]=ce.b,Ie(ft,st),g[zt+y]=ce.a,g[bt+y]=ce.b)}if(w&re){const Je=$e+me;ne?U(g[$e+y],g[Je+y]):Ie(g[$e+y],g[Je+y]),Ge=ce.a,g[Je+y]=ce.b,g[$e+y]=Ge}}if(G&re){let $e=Se;const qe=Se+D*(w-ue);for(;$e<=qe;$e+=be){const Je=$e+xe;ne?U(g[$e+y],g[Je+y]):Ie(g[$e+y],g[Je+y]),Ge=ce.a,g[Je+y]=ce.b,g[$e+y]=Ge}}ue=re,re>>=1}return Se}function ge(g,y,w,D,G,z,K,ne,se){let re=0,ue=0;const Se=K,pe=Math.trunc(D.value+(G+7)/8);for(;D.value<pe;)for(Ee(re,ue,w,D),re=ee.c,ue=ee.lc;ue>=14;){const Be=re>>ue-14&16383,xe=y[Be];if(xe.len)ue-=xe.len,j(xe.lit,z,re,ue,w,D,ne,se,Se),re=ae.c,ue=ae.lc;else{if(!xe.p)throw new Error("hufDecode issues");let be;for(be=0;be<xe.lit;be++){const Ge=Y(g[xe.p[be]]);for(;ue<Ge&&D.value<pe;)Ee(re,ue,w,D),re=ee.c,ue=ee.lc;if(ue>=Ge&&Z(g[xe.p[be]])==(re>>ue-Ge&(1<<Ge)-1)){ue-=Ge,j(xe.p[be],z,re,ue,w,D,ne,se,Se),re=ae.c,ue=ae.lc;break}}if(be==xe.lit)throw new Error("hufDecode issues")}}const me=8-G&7;for(re>>=me,ue-=me;ue>0;){const Be=y[re<<14-ue&16383];if(Be.len)ue-=Be.len,j(Be.lit,z,re,ue,w,D,ne,se,Se),re=ae.c,ue=ae.lc;else throw new Error("hufDecode issues")}return!0}function De(g,y,w,D,G,z){const K={value:0},ne=w.value,se=_e(y,w),re=_e(y,w);w.value+=4;const ue=_e(y,w);if(w.value+=4,se<0||se>=65537||re<0||re>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Se=new Array(65537),pe=new Array(16384);q(pe);const me=D-(w.value-ne);if(Q(g,w,me,se,re,Se),ue>8*(D-(w.value-ne)))throw new Error("Something wrong with hufUncompress");oe(Se,se,re,pe),ge(Se,pe,g,w,ue,re,z,G,K)}function et(g,y,w){for(let D=0;D<w;++D)y[D]=g[y[D]]}function Ce(g){for(let y=1;y<g.length;y++){const w=g[y-1]+g[y]-128;g[y]=w}}function Ve(g,y){let w=0,D=Math.floor((g.length+1)/2),G=0;const z=g.length-1;for(;!(G>z||(y[G++]=g[w++],G>z));)y[G++]=g[D++]}function yt(g){let y=g.byteLength;const w=new Array;let D=0;const G=new DataView(g);for(;y>0;){const z=G.getInt8(D++);if(z<0){const K=-z;y-=K+1;for(let ne=0;ne<K;ne++)w.push(G.getUint8(D++))}else{const K=z;y-=2;const ne=G.getUint8(D++);for(let se=0;se<K+1;se++)w.push(ne)}}return w}function Rt(g,y,w,D,G,z){let K=new DataView(z.buffer);const ne=w[g.idx[0]].width,se=w[g.idx[0]].height,re=3,ue=Math.floor(ne/8),Se=Math.ceil(ne/8),pe=Math.ceil(se/8),me=ne-(Se-1)*8,Be=se-(pe-1)*8,xe={value:0},be=new Array(re),Ge=new Array(re),at=new Array(re),ft=new Array(re),st=new Array(re);for(let qe=0;qe<re;++qe)st[qe]=y[g.idx[qe]],be[qe]=qe<1?0:be[qe-1]+Se*pe,Ge[qe]=new Float32Array(64),at[qe]=new Uint16Array(64),ft[qe]=new Uint16Array(Se*64);for(let qe=0;qe<pe;++qe){let Je=8;qe==pe-1&&(Je=Be);let zt=8;for(let Qe=0;Qe<Se;++Qe){Qe==Se-1&&(zt=me);for(let ut=0;ut<re;++ut)at[ut].fill(0),at[ut][0]=G[be[ut]++],Et(xe,D,at[ut]),St(at[ut],Ge[ut]),tt(Ge[ut]);pt(Ge);for(let ut=0;ut<re;++ut)kt(Ge[ut],ft[ut],Qe*64)}let bt=0;for(let Qe=0;Qe<re;++Qe){const ut=w[g.idx[Qe]].type;for(let Zn=8*qe;Zn<8*qe+Je;++Zn){bt=st[Qe][Zn];for(let as=0;as<ue;++as){const Gn=as*64+(Zn&7)*8;K.setUint16(bt+0*2*ut,ft[Qe][Gn+0],!0),K.setUint16(bt+1*2*ut,ft[Qe][Gn+1],!0),K.setUint16(bt+2*2*ut,ft[Qe][Gn+2],!0),K.setUint16(bt+3*2*ut,ft[Qe][Gn+3],!0),K.setUint16(bt+4*2*ut,ft[Qe][Gn+4],!0),K.setUint16(bt+5*2*ut,ft[Qe][Gn+5],!0),K.setUint16(bt+6*2*ut,ft[Qe][Gn+6],!0),K.setUint16(bt+7*2*ut,ft[Qe][Gn+7],!0),bt+=8*2*ut}}if(ue!=Se)for(let Zn=8*qe;Zn<8*qe+Je;++Zn){const as=st[Qe][Zn]+8*ue*2*ut,Gn=ue*64+(Zn&7)*8;for(let qs=0;qs<zt;++qs)K.setUint16(as+qs*2*ut,ft[Qe][Gn+qs],!0)}}}const $e=new Uint16Array(ne);K=new DataView(z.buffer);for(let qe=0;qe<re;++qe){w[g.idx[qe]].decoded=!0;const Je=w[g.idx[qe]].type;if(w[qe].type==2)for(let zt=0;zt<se;++zt){const bt=st[qe][zt];for(let Qe=0;Qe<ne;++Qe)$e[Qe]=K.getUint16(bt+Qe*2*Je,!0);for(let Qe=0;Qe<ne;++Qe)K.setFloat32(bt+Qe*2*Je,F($e[Qe]),!0)}}}function Et(g,y,w){let D,G=1;for(;G<64;)D=y[g.value],D==65280?G=64:D>>8==255?G+=D&255:(w[G]=D,G++),g.value++}function St(g,y){y[0]=F(g[0]),y[1]=F(g[1]),y[2]=F(g[5]),y[3]=F(g[6]),y[4]=F(g[14]),y[5]=F(g[15]),y[6]=F(g[27]),y[7]=F(g[28]),y[8]=F(g[2]),y[9]=F(g[4]),y[10]=F(g[7]),y[11]=F(g[13]),y[12]=F(g[16]),y[13]=F(g[26]),y[14]=F(g[29]),y[15]=F(g[42]),y[16]=F(g[3]),y[17]=F(g[8]),y[18]=F(g[12]),y[19]=F(g[17]),y[20]=F(g[25]),y[21]=F(g[30]),y[22]=F(g[41]),y[23]=F(g[43]),y[24]=F(g[9]),y[25]=F(g[11]),y[26]=F(g[18]),y[27]=F(g[24]),y[28]=F(g[31]),y[29]=F(g[40]),y[30]=F(g[44]),y[31]=F(g[53]),y[32]=F(g[10]),y[33]=F(g[19]),y[34]=F(g[23]),y[35]=F(g[32]),y[36]=F(g[39]),y[37]=F(g[45]),y[38]=F(g[52]),y[39]=F(g[54]),y[40]=F(g[20]),y[41]=F(g[22]),y[42]=F(g[33]),y[43]=F(g[38]),y[44]=F(g[46]),y[45]=F(g[51]),y[46]=F(g[55]),y[47]=F(g[60]),y[48]=F(g[21]),y[49]=F(g[34]),y[50]=F(g[37]),y[51]=F(g[47]),y[52]=F(g[50]),y[53]=F(g[56]),y[54]=F(g[59]),y[55]=F(g[61]),y[56]=F(g[35]),y[57]=F(g[36]),y[58]=F(g[48]),y[59]=F(g[49]),y[60]=F(g[57]),y[61]=F(g[58]),y[62]=F(g[62]),y[63]=F(g[63])}function tt(g){const y=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),G=.5*Math.cos(3*3.14159/16),z=.5*Math.cos(5*3.14159/16),K=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),se=new Array(4),re=new Array(4),ue=new Array(4),Se=new Array(4);for(let pe=0;pe<8;++pe){const me=pe*8;se[0]=D*g[me+2],se[1]=K*g[me+2],se[2]=D*g[me+6],se[3]=K*g[me+6],re[0]=w*g[me+1]+G*g[me+3]+z*g[me+5]+ne*g[me+7],re[1]=G*g[me+1]-ne*g[me+3]-w*g[me+5]-z*g[me+7],re[2]=z*g[me+1]-w*g[me+3]+ne*g[me+5]+G*g[me+7],re[3]=ne*g[me+1]-z*g[me+3]+G*g[me+5]-w*g[me+7],ue[0]=y*(g[me+0]+g[me+4]),ue[3]=y*(g[me+0]-g[me+4]),ue[1]=se[0]+se[3],ue[2]=se[1]-se[2],Se[0]=ue[0]+ue[1],Se[1]=ue[3]+ue[2],Se[2]=ue[3]-ue[2],Se[3]=ue[0]-ue[1],g[me+0]=Se[0]+re[0],g[me+1]=Se[1]+re[1],g[me+2]=Se[2]+re[2],g[me+3]=Se[3]+re[3],g[me+4]=Se[3]-re[3],g[me+5]=Se[2]-re[2],g[me+6]=Se[1]-re[1],g[me+7]=Se[0]-re[0]}for(let pe=0;pe<8;++pe)se[0]=D*g[16+pe],se[1]=K*g[16+pe],se[2]=D*g[48+pe],se[3]=K*g[48+pe],re[0]=w*g[8+pe]+G*g[24+pe]+z*g[40+pe]+ne*g[56+pe],re[1]=G*g[8+pe]-ne*g[24+pe]-w*g[40+pe]-z*g[56+pe],re[2]=z*g[8+pe]-w*g[24+pe]+ne*g[40+pe]+G*g[56+pe],re[3]=ne*g[8+pe]-z*g[24+pe]+G*g[40+pe]-w*g[56+pe],ue[0]=y*(g[pe]+g[32+pe]),ue[3]=y*(g[pe]-g[32+pe]),ue[1]=se[0]+se[3],ue[2]=se[1]-se[2],Se[0]=ue[0]+ue[1],Se[1]=ue[3]+ue[2],Se[2]=ue[3]-ue[2],Se[3]=ue[0]-ue[1],g[0+pe]=Se[0]+re[0],g[8+pe]=Se[1]+re[1],g[16+pe]=Se[2]+re[2],g[24+pe]=Se[3]+re[3],g[32+pe]=Se[3]-re[3],g[40+pe]=Se[2]-re[2],g[48+pe]=Se[1]-re[1],g[56+pe]=Se[0]-re[0]}function pt(g){for(let y=0;y<64;++y){const w=g[0][y],D=g[1][y],G=g[2][y];g[0][y]=w+1.5747*G,g[1][y]=w-.1873*D-.4682*G,g[2][y]=w+1.8556*D}}function kt(g,y,w){for(let D=0;D<64;++D)y[w+D]=kc.toHalfFloat(L(g[D]))}function L(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(v,Math.abs(g)-1)}function b(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function $(g){const y=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),w=new Uint8Array(yt(y)),D=new Uint8Array(w.length);return Ce(w),Ve(w,D),new DataView(D.buffer)}function he(g){const y=g.array.slice(g.offset.value,g.offset.value+g.size),w=xa(y),D=new Uint8Array(w.length);return Ce(w),Ve(w,D),new DataView(D.buffer)}function fe(g){const y=g.viewer,w={value:g.offset.value},D=new Uint16Array(g.width*g.scanlineBlockSize*(g.channels*g.type)),G=new Uint8Array(8192);let z=0;const K=new Array(g.channels);for(let Be=0;Be<g.channels;Be++)K[Be]={},K[Be].start=z,K[Be].end=K[Be].start,K[Be].nx=g.width,K[Be].ny=g.lines,K[Be].size=g.type,z+=K[Be].nx*K[Be].ny*K[Be].size;const ne=le(y,w),se=le(y,w);if(se>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=se)for(let Be=0;Be<se-ne+1;Be++)G[Be+ne]=ke(y,w);const re=new Uint16Array(65536),ue=C(G,re),Se=_e(y,w);De(g.array,y,w,Se,D,z);for(let Be=0;Be<g.channels;++Be){const xe=K[Be];for(let be=0;be<K[Be].size;++be)Ne(D,xe.start+be,xe.nx,xe.size,xe.ny,xe.nx*xe.size,ue)}et(re,D,z);let pe=0;const me=new Uint8Array(D.buffer.byteLength);for(let Be=0;Be<g.lines;Be++)for(let xe=0;xe<g.channels;xe++){const be=K[xe],Ge=be.nx*be.size,at=new Uint8Array(D.buffer,be.end*2,Ge*2);me.set(at,pe),pe+=Ge*2,be.end+=Ge}return new DataView(me.buffer)}function Me(g){const y=g.array.slice(g.offset.value,g.offset.value+g.size),w=xa(y),D=g.lines*g.channels*g.width,G=g.type==1?new Uint16Array(D):new Uint32Array(D);let z=0,K=0;const ne=new Array(4);for(let se=0;se<g.lines;se++)for(let re=0;re<g.channels;re++){let ue=0;switch(g.type){case 1:ne[0]=z,ne[1]=ne[0]+g.width,z=ne[1]+g.width;for(let Se=0;Se<g.width;++Se){const pe=w[ne[0]++]<<8|w[ne[1]++];ue+=pe,G[K]=ue,K++}break;case 2:ne[0]=z,ne[1]=ne[0]+g.width,ne[2]=ne[1]+g.width,z=ne[2]+g.width;for(let Se=0;Se<g.width;++Se){const pe=w[ne[0]++]<<24|w[ne[1]++]<<16|w[ne[2]++]<<8;ue+=pe,G[K]=ue,K++}break}}return new DataView(G.buffer)}function Ue(g){const y=g.viewer,w={value:g.offset.value},D=new Uint8Array(g.width*g.lines*(g.channels*g.type*2)),G={version:ze(y,w),unknownUncompressedSize:ze(y,w),unknownCompressedSize:ze(y,w),acCompressedSize:ze(y,w),dcCompressedSize:ze(y,w),rleCompressedSize:ze(y,w),rleUncompressedSize:ze(y,w),rleRawSize:ze(y,w),totalAcUncompressedCount:ze(y,w),totalDcUncompressedCount:ze(y,w),acCompression:ze(y,w)};if(G.version<2)throw new Error("EXRLoader.parse: "+A.compression+" version "+G.version+" is unsupported");const z=new Array;let K=le(y,w)-2;for(;K>0;){const xe=Te(y.buffer,w),be=ke(y,w),Ge=be>>2&3,at=(be>>4)-1,ft=new Int8Array([at])[0],st=ke(y,w);z.push({name:xe,index:ft,type:st,compression:Ge}),K-=xe.length+3}const ne=A.channels,se=new Array(g.channels);for(let xe=0;xe<g.channels;++xe){const be=se[xe]={},Ge=ne[xe];be.name=Ge.name,be.compression=0,be.decoded=!1,be.type=Ge.pixelType,be.pLinear=Ge.pLinear,be.width=g.width,be.height=g.lines}const re={idx:new Array(3)};for(let xe=0;xe<g.channels;++xe){const be=se[xe];for(let Ge=0;Ge<z.length;++Ge){const at=z[Ge];be.name==at.name&&(be.compression=at.compression,at.index>=0&&(re.idx[at.index]=xe),be.offset=xe)}}let ue,Se,pe;if(G.acCompressedSize>0)switch(G.acCompression){case 0:ue=new Uint16Array(G.totalAcUncompressedCount),De(g.array,y,w,G.acCompressedSize,ue,G.totalAcUncompressedCount);break;case 1:const xe=g.array.slice(w.value,w.value+G.totalAcUncompressedCount),be=xa(xe);ue=new Uint16Array(be.buffer),w.value+=G.totalAcUncompressedCount;break}if(G.dcCompressedSize>0){const xe={array:g.array,offset:w,size:G.dcCompressedSize};Se=new Uint16Array(he(xe).buffer),w.value+=G.dcCompressedSize}if(G.rleRawSize>0){const xe=g.array.slice(w.value,w.value+G.rleCompressedSize),be=xa(xe);pe=yt(be.buffer),w.value+=G.rleCompressedSize}let me=0;const Be=new Array(se.length);for(let xe=0;xe<Be.length;++xe)Be[xe]=new Array;for(let xe=0;xe<g.lines;++xe)for(let be=0;be<se.length;++be)Be[be].push(me),me+=se[be].width*g.type*2;Rt(re,Be,se,ue,Se,D);for(let xe=0;xe<se.length;++xe){const be=se[xe];if(!be.decoded)switch(be.compression){case 2:let Ge=0,at=0;for(let ft=0;ft<g.lines;++ft){let st=Be[xe][Ge];for(let $e=0;$e<be.width;++$e){for(let qe=0;qe<2*be.type;++qe)D[st++]=pe[at+qe*be.width*be.height];at++}Ge++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function Te(g,y){const w=new Uint8Array(g);let D=0;for(;w[y.value+D]!=0;)D+=1;const G=new TextDecoder().decode(w.slice(y.value,y.value+D));return y.value=y.value+D+1,G}function ie(g,y,w){const D=new TextDecoder().decode(new Uint8Array(g).slice(y.value,y.value+w));return y.value=y.value+w,D}function Re(g,y){const w=Le(g,y),D=_e(g,y);return[w,D]}function Pe(g,y){const w=_e(g,y),D=_e(g,y);return[w,D]}function Le(g,y){const w=g.getInt32(y.value,!0);return y.value=y.value+4,w}function _e(g,y){const w=g.getUint32(y.value,!0);return y.value=y.value+4,w}function Ae(g,y){const w=g[y.value];return y.value=y.value+1,w}function ke(g,y){const w=g.getUint8(y.value);return y.value=y.value+1,w}const ze=function(g,y){let w;return"getBigInt64"in DataView.prototype?w=Number(g.getBigInt64(y.value,!0)):w=g.getUint32(y.value+4,!0)+Number(g.getUint32(y.value,!0)<<32),y.value+=8,w};function Xe(g,y){const w=g.getFloat32(y.value,!0);return y.value+=4,w}function N(g,y){return kc.toHalfFloat(Xe(g,y))}function F(g){const y=(g&31744)>>10,w=g&1023;return(g>>15?-1:1)*(y?y===31?w?NaN:1/0:Math.pow(2,y-15)*(1+w/1024):6103515625e-14*(w/1024))}function le(g,y){const w=g.getUint16(y.value,!0);return y.value+=2,w}function ye(g,y){return F(le(g,y))}function we(g,y,w,D){const G=w.value,z=[];for(;w.value<G+D-1;){const K=Te(y,w),ne=Le(g,w),se=ke(g,w);w.value+=3;const re=Le(g,w),ue=Le(g,w);z.push({name:K,pixelType:ne,pLinear:se,xSampling:re,ySampling:ue})}return w.value+=1,z}function it(g,y){const w=Xe(g,y),D=Xe(g,y),G=Xe(g,y),z=Xe(g,y),K=Xe(g,y),ne=Xe(g,y),se=Xe(g,y),re=Xe(g,y);return{redX:w,redY:D,greenX:G,greenY:z,blueX:K,blueY:ne,whiteX:se,whiteY:re}}function rt(g,y){const w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=ke(g,y);return w[D]}function It(g,y){const w=_e(g,y),D=_e(g,y),G=_e(g,y),z=_e(g,y);return{xMin:w,yMin:D,xMax:G,yMax:z}}function Hn(g,y){const w=["INCREASING_Y"],D=ke(g,y);return w[D]}function mt(g,y){const w=Xe(g,y),D=Xe(g,y);return[w,D]}function $t(g,y){const w=Xe(g,y),D=Xe(g,y),G=Xe(g,y);return[w,D,G]}function pn(g,y,w,D,G){if(D==="string"||D==="stringvector"||D==="iccProfile")return ie(y,w,G);if(D==="chlist")return we(g,y,w,G);if(D==="chromaticities")return it(g,w);if(D==="compression")return rt(g,w);if(D==="box2i")return It(g,w);if(D==="lineOrder")return Hn(g,w);if(D==="float")return Xe(g,w);if(D==="v2f")return mt(g,w);if(D==="v3f")return $t(g,w);if(D==="int")return Le(g,w);if(D==="rational")return Re(g,w);if(D==="timecode")return Pe(g,w);if(D==="preview")return w.value+=G,"skipped";w.value+=G}function cr(g,y,w){const D={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.");D.version=g.getUint8(4);const G=g.getUint8(5);D.spec={singleTile:!!(G&2),longName:!!(G&4),deepFormat:!!(G&8),multiPart:!!(G&16)},w.value=8;let z=!0;for(;z;){const K=Te(y,w);if(K==0)z=!1;else{const ne=Te(y,w),se=_e(g,w),re=pn(g,y,w,ne,se);re===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${ne}'.`):D[K]=re}}if(G&-5)throw console.error("EXRHeader:",D),new Error("THREE.EXRLoader: provided file is currently unsupported.");return D}function Xs(g,y,w,D,G){const z={size:0,viewer:y,array:w,offset:D,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,channels:g.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:g.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:An};switch(g.compression){case"NO_COMPRESSION":z.lines=1,z.uncompress=b;break;case"RLE_COMPRESSION":z.lines=1,z.uncompress=$;break;case"ZIPS_COMPRESSION":z.lines=1,z.uncompress=he;break;case"ZIP_COMPRESSION":z.lines=16,z.uncompress=he;break;case"PIZ_COMPRESSION":z.lines=32,z.uncompress=fe;break;case"PXR24_COMPRESSION":z.lines=16,z.uncompress=Me;break;case"DWAA_COMPRESSION":z.lines=32,z.uncompress=Ue;break;case"DWAB_COMPRESSION":z.lines=256,z.uncompress=Ue;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}if(z.scanlineBlockSize=z.lines,z.type==1)switch(G){case Nn:z.getter=ye,z.inputSize=2;break;case li:z.getter=le,z.inputSize=2;break}else if(z.type==2)switch(G){case Nn:z.getter=Xe,z.inputSize=4;break;case li:z.getter=N,z.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+z.type+" for "+g.compression+".");z.blockCount=(g.dataWindow.yMax+1)/z.scanlineBlockSize;for(let ne=0;ne<z.blockCount;ne++)ze(y,D);z.outputChannels=z.channels==3?4:z.channels;const K=z.width*z.height*z.outputChannels;switch(G){case Nn:z.byteArray=new Float32Array(K),z.channels<z.outputChannels&&z.byteArray.fill(1,0,K);break;case li:z.byteArray=new Uint16Array(K),z.channels<z.outputChannels&&z.byteArray.fill(15360,0,K);break;default:console.error("THREE.EXRLoader: unsupported type: ",G);break}return z.bytesPerLine=z.width*z.inputSize*z.channels,z.outputChannels==4?(z.format=hn,z.colorSpace=An):(z.format=hu,z.colorSpace=Li),z}const hr=new DataView(e),Ya=new Uint8Array(e),Oi={value:0},A=cr(hr,e,Oi),B=Xs(A,hr,Ya,Oi,this.type),J={value:0},H={R:0,G:1,B:2,A:3,Y:0};for(let g=0;g<B.height/B.scanlineBlockSize;g++){const y=_e(hr,Oi);B.size=_e(hr,Oi),B.lines=y+B.scanlineBlockSize>B.height?B.height-y:B.scanlineBlockSize;const D=B.size<B.lines*B.bytesPerLine?B.uncompress(B):b(B);Oi.value+=B.size;for(let G=0;G<B.scanlineBlockSize;G++){const z=G+g*B.scanlineBlockSize;if(z>=B.height)break;for(let K=0;K<B.channels;K++){const ne=H[A.channels[K].name];for(let se=0;se<B.width;se++){J.value=(G*(B.channels*B.width)+K*B.width+se)*B.inputSize;const re=(B.height-1-z)*(B.width*B.outputChannels)+se*B.outputChannels+ne;B.byteArray[re]=B.getter(D,J)}}}}return{header:A,width:B.width,height:B.height,data:B.byteArray,format:B.format,colorSpace:B.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Ct,a.magFilter=Ct,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,i)}}class lM{constructor(){this.gltfLoader=new _v,this.cubeTextureLoader=new Ox,this.textureLoader=new Ga,this.EXRLoader=new oM}}const cM=new lM;function si(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function tf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jr={duration:.5,overwrite:!1,delay:0},Fl,Wt,vt,Sn=1e8,ct=1/Sn,tl=Math.PI*2,hM=tl/4,uM=0,nf=Math.sqrt,fM=Math.cos,dM=Math.sin,Nt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},fi=function(e){return typeof e=="number"},Ol=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},nn=function(e){return e!==!1},Bl=function(){return typeof window<"u"},va=function(e){return Mt(e)||Nt(e)},rf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,nl=/(?:-?\.?\d|\.)+/gi,sf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,af=/[+-]=-?[.\d]+/,of=/[^,'"\[\]\s]+/gi,pM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,xn,il,kl,dn={},Ca={},lf,cf=function(e){return(Ca=rr(e,dn))&&an},zl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},La=function(e,t){return!t&&console.warn(e)},hf=function(e,t){return e&&(dn[e]=t)&&Ca&&(Ca[e]=t)||dn},Ds=function(){return 0},mM={suppressEvents:!0,isStart:!0,kill:!1},Ta={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},Hl={},Pi=[],rl={},uf,cn={},Po={},Hh=30,Ea=[],Gl="",Vl=function(e){var t=e[0],n,i;if(jn(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ea.length;i--&&!Ea[i].targetTest(t););n=Ea[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Nf(e[i],n)))||e.splice(i,1);return e},Ji=function(e){return e._gsap||Vl(Tn(e))[0]._gsap},ff=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():Ol(n)&&e.getAttribute&&e.getAttribute(t)||n},rn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},zr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Pa=function(){var e=Pi.length,t=Pi.slice(0),n,i;for(rl={},Pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},df=function(e,t,n,i){Pi.length&&!Wt&&Pa(),e.render(t,n,i||Wt&&t<0&&(e._initted||e._startAt)),Pi.length&&!Wt&&Pa()},pf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(of).length<2?t:Nt(e)?e.trim():e},mf=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},rr=function(e,t){for(var n in t)e[n]=t[n];return e},Gh=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=jn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Ia=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},bs=function(e){var t=e.parent||_t,n=e.keyframes?xM(Xt(e.keyframes)):wn;if(nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_f=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Wa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ui=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},MM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sl=function(e,t,n,i){return e._startAt&&(Wt?e._startAt.revert(Ta):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yM=function s(e){return!e||e._ts&&s(e.parent)},Vh=function(e){return e._repeat?Qr(e._tTime,e=e.duration()+e._rDelay)*e:0},Qr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Da=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xa=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},qa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xa(e),n._dirty||Qi(n,e)),e},gf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Da(e.rawTime(),t),(!t._dur||Ws(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),Qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},Xn=function(e,t,n,i){return t.parent&&Ui(t),t._start=Ot((fi(n)?n:n||e!==_t?_n(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_f(e,t,"_first","_last",e._sort?"_start":0),al(t)||(e._recent=t),i||gf(e,t),e._ts<0&&qa(e,e._tTime),e},xf=function(e,t){return(dn.ScrollTrigger||zl("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},vf=function(e,t,n,i,r){if(Xl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uf!==un.frame)return Pi.push(e),e._lazy=[r,i],1},SM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},al=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TM=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&SM(e)&&!(!e._initted&&al(e))||(e._ts<0||e._dp._ts<0)&&!al(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Ws(0,e._tDur,t),h=Qr(l,o),e._yoyo&&h&1&&(a=1-a),h!==Qr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Wt||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&vf(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&sl(e,t,n,!0),e._onUpdate&&!n&&En(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ui(e,1),!n&&!Wt&&(En(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},EM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},es=function(e,t,n,i){var r=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ot(a*(r+1)+e._rDelay*r):a,o>0&&!i&&qa(e,e._tTime=e._tDur*o),e.parent&&Xa(e),n||Qi(e.parent,e),e},Wh=function(e){return e instanceof Qt?Qi(e):es(e,e._dur)},bM={_start:0,endTime:Ds,totalDuration:Ds},_n=function s(e,t,n){var i=e.labels,r=e._recent||bM,a=e.duration()>=Sn?r.endTime(!1):e._dur,o,l,c;return Nt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Xt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},As=function(e,t,n){var i=fi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new wt(t[0],a,t[r+1])},Fi=function(e,t){return e||e===0?t(e):t},Ws=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Nt(e)||!(t=pM.exec(e))?"":t[1]},AM=function(e,t,n){return Fi(n,function(i){return Ws(e,t,i)})},ol=[].slice,Mf=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==xn},wM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Nt(i)&&!t||Mf(i,1)?(r=n).push.apply(r,Tn(i)):n.push(i)})||n},Tn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Nt(e)&&!n&&(il||!ts())?ol.call((t||kl).querySelectorAll(e),0):Xt(e)?wM(e,n):Mf(e)?ol.call(e,0):e?[e]:[]},ll=function(e){return e=Tn(e)[0]||La("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Tn(t,n.querySelectorAll?n:n===e?La("Invalid scope")||kl.createElement("div"):e)}},yf=function(e){return e.sort(function(){return .5-Math.random()})},Sf=function(e){if(Mt(e))return e;var t=jn(e)?e:{each:e},n=er(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Nt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,p,x){var _=(x||t).length,m=a[_],d,S,M,E,T,R,P,I,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!v){for(P=-Sn;P<(P=x[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=a[_]=[],d=l?Math.min(v,_)*h-.5:i%v,S=v===Sn?0:l?_*u/v-.5:i/v|0,P=0,I=Sn,R=0;R<_;R++)M=R%v-d,E=S-(R/v|0),m[R]=T=c?Math.abs(c==="y"?E:M):nf(M*M+E*E),T>P&&(P=T),T<I&&(I=T);i==="random"&&yf(m),m.max=P-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Vt(t.amount||t.each)||0,n=n&&_<0?If(n):n}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(n?n(_):_)*m.v)+m.u}},cl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fi(n)?0:Vt(n))}},Tf=function(e,t){var n=Xt(e),i,r;return!n&&jn(e)&&(i=n=e.radius||Sn,e.values?(e=Tn(e.values),(r=!fi(e[0]))&&(i*=i)):e=cl(e.increment)),Fi(t,n?Mt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Sn,h=0,u=e.length,f,p;u--;)r?(f=e[u].x-o,p=e[u].y-l,f=f*f+p*p):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,r||h===a||fi(a)?h:h+Vt(a)}:cl(e))},Ef=function(e,t,n,i){return Fi(Xt(e)?!t:n===!0?!!(n=0):!i,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},RM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},CM=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},LM=function(e,t,n){return Af(e,t,0,1,n)},bf=function(e,t,n){return Fi(n,function(i){return e[~~t(i)]})},PM=function s(e,t,n){var i=t-e;return Xt(e)?bf(e,s(0,e.length),t):Fi(n,function(r){return(i+(r-e)%i)%i+e})},IM=function s(e,t,n){var i=t-e,r=i*2;return Xt(e)?bf(e,s(0,e.length-1),t):Fi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Us=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?of:nl),n+=e.substr(t,i-t)+Ef(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Af=function(e,t,n,i,r){var a=t-e,o=i-n;return Fi(r,function(l){return n+((l-e)/a*o||0)})},DM=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=Nt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Xt(e)&&!Xt(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(x){x*=u;var _=Math.min(f,~~x);return h[_](x-_)},n=t}else i||(e=rr(Xt(e)?[]:{},e));if(!h){for(l in t)Wl.call(o,e,l,"get",t[l]);r=function(x){return jl(x,o)||(a?e.p:e)}}}return Fi(n,r)},Xh=function(e,t,n){var i=e.labels,r=Sn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},En=function(e,t,n){var i=e.vars,r=i[t],a=vt,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Pi.length&&Pa(),o&&(vt=o),h=l?r.apply(c,l):r.call(c),vt=a,h},vs=function(e){return Ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&En(e,"onInterrupt"),e},Nr,wf=[],Rf=function(e){if(Bl()&&e){e=!e.name&&e.default||e;var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ds,render:jl,add:Wl,kill:KM,modifier:jM,rawVars:0},a={targetTest:0,get:0,getSetter:Yl,aliases:{},register:0};if(ts(),e!==i){if(cn[t])return;wn(i,wn(Ia(e,r),a)),rr(i.prototype,rr(r,Ia(e,a))),cn[i.prop=t]=i,e.targetTest&&(Ea.push(i),Hl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hf(t,i),e.register&&e.register(an,i,sn)}else e&&wf.push(e)},ot=255,Ms={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Io=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},Cf=function(e,t,n){var i=e?fi(e)?[e>>16,e>>8&ot,e&ot]:0:Ms.black,r,a,o,l,c,h,u,f,p,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ms[e])i=Ms[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ot,i&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(nl),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Io(l+1/3,r,a),i[1]=Io(l,r,a),i[2]=Io(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(sf),n&&i.length<4&&(i[3]=1),i}else i=e.match(nl)||Ms.transparent;i=i.map(Number)}return t&&!x&&(r=i[0]/ot,a=i[1]/ot,o=i[2]/ot,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===r?(a-o)/p+(a<o?6:0):u===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Lf=function(e){var t=[],n=[],i=-1;return e.split(Ii).forEach(function(r){var a=r.match(Ur)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},qh=function(e,t,n){var i="",r=(e+i).match(Ii),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Cf(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Lf(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ii,"1").split(Ur),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Ii),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Ii=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ms)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),UM=/hsl[a]?\(/,Pf=function(e){var t=e.join(" "),n;if(Ii.lastIndex=0,Ii.test(t))return n=UM.test(t),e[1]=qh(e[1],n),e[0]=qh(e[0],n,Lf(e[1])),!0},Ns,un=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,p,x=function _(m){var d=s()-i,S=m===!0,M,E,T,R;if(d>e&&(n+=d-t),i+=d,T=i-n,M=T-a,(M>0||S)&&(R=++u.frame,f=T-u.time*1e3,u.time=T=T/1e3,a+=M+(M>=r?4:r-M),E=1),S||(l=c(_)),E)for(p=0;p<o.length;p++)o[p](T,f,R,m)};return u={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){lf&&(!il&&Bl()&&(xn=il=window,kl=xn.document||{},dn.gsap=an,(xn.gsapVersions||(xn.gsapVersions=[])).push(an.version),cf(Ca||xn.GreenSockGlobals||!xn.gsap&&xn||{}),h=xn.requestAnimationFrame,wf.forEach(Rf)),l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ns=1,x(2))},sleep:function(){(h?xn.cancelAnimationFrame:clearTimeout)(l),Ns=0,c=Ds},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,d,S){var M=d?function(E,T,R,P){m(E,T,R,P),u.remove(M)}:m;return u.remove(m),o[S?"unshift":"push"](M),ts(),M},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},u}(),ts=function(){return!Ns&&un.wake()},Ke={},NM=/^[\d.\-M][\d.\-,\s]/,FM=/["']/g,OM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(FM,"").trim():+c,i=l.substr(o+1).trim();return t},BM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},kM=function(e){var t=(e+"").split("("),n=Ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OM(t[1])]:BM(e).split(",").map(pf)):Ke._CE&&NM.test(e)?Ke._CE("",e):n},If=function(e){return function(t){return 1-e(1-t)}},Df=function s(e,t){for(var n=e._first,i;n;)n instanceof Qt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},er=function(e,t){return e&&(Mt(e)?e:Ke[e]||kM(e))||t},lr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return rn(e,function(o){Ke[o]=dn[o]=r,Ke[a=o.toLowerCase()]=n;for(var l in r)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=r[l]}),r},Uf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Do=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/tl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*dM((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Uf(o);return r=tl/r,l.config=function(c,h){return s(e,c,h)},l},Uo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Uf(n);return i.config=function(r){return s(e,r)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;lr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;lr("Elastic",Do("in"),Do("out"),Do());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};lr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);lr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});lr("Circ",function(s){return-(nf(1-s*s)-1)});lr("Sine",function(s){return s===1?1:-fM(s*hM)+1});lr("Back",Uo("in"),Uo("out"),Uo());Ke.SteppedEase=Ke.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ct;return function(o){return((i*Ws(0,a,o)|0)+r)*n}}};Jr.ease=Ke["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gl+=s+","+s+"Params,"});var Nf=function(e,t){this.id=uM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ff,this.set=t?t.getSetter:Yl},Fs=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,es(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Ns||un.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,es(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(qa(this,n),!r._dp||r.parent||gf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),df(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Da(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(Ws(-Math.abs(this._delay),this._tDur,i),!0),Xa(this),MM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Da(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_M);var i=Wt;return Wt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_n(this,n),nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Mt(n)?n:mf,o=function(){var c=i.then;i.then=null,Mt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){vs(this)},s}();wn(Fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var Qt=function(s){tf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=nn(n.sortChildren),_t&&Xn(n.parent||_t,si(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&xf(si(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return As(0,arguments,this),this},t.from=function(i,r,a){return As(1,arguments,this),this},t.fromTo=function(i,r,a,o){return As(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,bs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new wt(i,r,_n(this,a),1),this},t.call=function(i,r,a){return Xn(this,wt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new wt(i,a,_n(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,bs(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,bs(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ot(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,p,x,_,m,d,S,M,E,T,R,P;if(this!==_t&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,E=this._start,M=this._ts,d=!M,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Ot(h%m),h===l?(_=this._repeat,f=c):(_=~~(h/m),_&&_===h/m&&(f=c,_--),f>c&&(f=c)),T=Qr(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),R&&_&1&&(f=c-f,P=1),_!==T&&!this._lock){var I=R&&T&1,v=I===(R&&_&1);if(_<T&&(I=!I),o=I?0:h%c?c:h,this._lock=1,this.render(o||(P?0:Ot(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Df(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=EM(this,Ot(o),Ot(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!_&&(En(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(x=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,a),f!==this._time||!this._ts&&!d){S=0,x&&(h+=this._zTime=-ct);break}}p=x}else{p=this._last;for(var C=i<0?i:f;p;){if(x=p._prev,(p._act||C<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,r,a||Wt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){S=0,x&&(h+=this._zTime=C?-ct:ct);break}}p=x}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-ct)._zTime=f>=o?1:-1,this._ts))return this._start=E,Xa(this),this.render(i,r,a);this._onUpdate&&!r&&En(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(E===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ui(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(En(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(fi(r)||(r=_n(this,r,i)),!(i instanceof Fs)){if(Xt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Nt(i))return this.addLabel(i,r);if(Mt(i))i=wt.delayedCall(0,i);else return this}return this!==i?Xn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof wt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Nt(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(Wa(this,i),i===this._recent&&(this._recent=this._last),Qi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=_n(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=wt.delayedCall(0,r||Ds,a);return o.data="isPause",this._hasPause=1,Xn(this,o,_n(this,i))},t.removePause=function(i){var r=this._first;for(i=_n(this,i);r;)r._start===i&&r.data==="isPause"&&Ui(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ai!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Tn(i),l=this._first,c=fi(r),h;l;)l instanceof wt?gM(l._targets,o)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=_n(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,x=wt.to(a,wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());x._dur!==m&&es(x,m,0,1).render(x._time,!0,!0),p=1}h&&h.apply(x,u||[])}},r));return f?x.render(0):x},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,wn({startAt:{time:_n(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xh(this,_n(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xh(this,_n(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Qi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Sn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;es(a,a===_t&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(_t._ts&&(df(_t,Da(i,_t)),uf=un.frame),un.frame>=Hh){Hh+=fn.autoSleep||120;var r=_t._first;if((!r||!r._ts)&&fn.autoSleep&&un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||un.sleep()}}},e}(Fs);wn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var zM=function(e,t,n,i,r,a,o){var l=new sn(this._pt,e,t,0,1,Hf,null,r),c=0,h=0,u,f,p,x,_,m,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Us(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Lo)||[];u=Lo.exec(i);)x=u[0],_=i.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:x.charAt(1)==="="?zr(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},c=Lo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(af.test(i)||d)&&(l.e=0),this._pt=l,l},Wl=function(e,t,n,i,r,a,o,l,c,h){Mt(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:Mt(u)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,p=Mt(u)?c?XM:kf:ql,x;if(Nt(i)&&(~i.indexOf("random(")&&(i=Us(i)),i.charAt(1)==="="&&(x=zr(f,i)+(Vt(f)||0),(x||x===0)&&(i=x))),!h||f!==i||hl)return!isNaN(f*i)&&i!==""?(x=new sn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?YM:zf,0,p),c&&(x.fp=c),o&&x.modifier(o,this,e),this._pt=x):(!u&&!(t in e)&&zl(t,i),zM.call(this,e,t,f,i,p,l||fn.stringFilter,c))},HM=function(e,t,n,i,r){if(Mt(e)&&(e=ws(e,r,t,n,i)),!jn(e)||e.style&&e.nodeType||Xt(e)||rf(e))return Nt(e)?ws(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ws(e[o],r,t,n,i);return a},Ff=function(e,t,n,i,r,a){var o,l,c,h;if(cn[e]&&(o=new cn[e]).init(r,o.rawVars?t[e]:HM(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new sn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Nr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ai,hl,Xl=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,x=i.keyframes,_=i.autoRevert,m=e._dur,d=e._startAt,S=e._targets,M=e.parent,E=M&&M.data==="nested"?M.vars.targets:S,T=e._overwrite==="auto"&&!Fl,R=e.timeline,P,I,v,C,q,X,O,V,W,Q,Y,Z,oe;if(R&&(!x||!r)&&(r="none"),e._ease=er(r,Jr.ease),e._yEase=p?If(er(p===!0?r:p,Jr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!R&&!!i.runBackwards,!R||x&&!i.stagger){if(V=S[0]?Ji(S[0]).harness:0,Z=V&&i[V.prop],P=Ia(i,Hl),d&&(d._zTime<0&&d.progress(1),t<0&&f&&o&&!_?d.render(-1,!0):d.revert(f&&m?Ta:mM),d._lazy=0),a){if(Ui(e._startAt=wt.set(S,wn({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!d&&nn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!o&&!_)&&e._startAt.revert(Ta),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(o=!1),v=wn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&nn(l),immediateRender:o,stagger:0,parent:M},P),Z&&(v[V.prop]=Z),Ui(e._startAt=wt.set(S,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(Ta):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&nn(l)||l&&!m,I=0;I<S.length;I++){if(q=S[I],O=q._gsap||Vl(S)[I]._gsap,e._ptLookup[I]=Q={},rl[O.id]&&Pi.length&&Pa(),Y=E===S?I:E.indexOf(q),V&&(W=new V).init(q,Z||P,e,Y,E)!==!1&&(e._pt=C=new sn(e._pt,q,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ee){Q[ee]=C}),W.priority&&(X=1)),!V||Z)for(v in P)cn[v]&&(W=Ff(v,P,e,Y,q,E))?W.priority&&(X=1):Q[v]=C=Wl.call(e,q,v,"get",P[v],Y,E,0,i.stringFilter);e._op&&e._op[I]&&e.kill(q,e._op[I]),T&&e._pt&&(Ai=e,_t.killTweensOf(q,Q,e.globalTime(t)),oe=!e.parent,Ai=0),e._pt&&l&&(rl[O.id]=1)}X&&Gf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,x&&t<=0&&R.render(Sn,!0,!0)},GM=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,u,f;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(c=u[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return hl=1,e.vars[t]="+=0",Xl(e,o),hl=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=Tt(n)+Vt(h.e)),h.b&&(h.b=c.s+Vt(h.b))},VM=function(e,t){var n=e[0]?Ji(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=rr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},WM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Xt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ws=function(e,t,n,i,r){return Mt(e)?e.call(t,n,i,r):Nt(e)&&~e.indexOf("random(")?Us(e):e},Of=Gl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bf={};rn(Of+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Bf[s]=1});var wt=function(s){tf(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:bs(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=i.parent||_t,M=(Xt(n)||rf(n)?fi(n[0]):"length"in i)?[n]:Tn(n),E,T,R,P,I,v,C,q;if(o._targets=M.length?Vl(M):La("GSAP target "+n+" not found. https://greensock.com",!fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,x||f||va(c)||va(h)){if(i=o.vars,E=o.timeline=new Qt({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),E.kill(),E.parent=E._dp=si(o),E._start=0,f||va(c)||va(h)){if(P=M.length,C=f&&Sf(f),jn(f))for(I in f)~Of.indexOf(I)&&(q||(q={}),q[I]=f[I]);for(T=0;T<P;T++)R=Ia(i,Bf),R.stagger=0,d&&(R.yoyoEase=d),q&&rr(R,q),v=M[T],R.duration=+ws(c,si(o),T,v,M),R.delay=(+ws(h,si(o),T,v,M)||0)-o._delay,!f&&P===1&&R.delay&&(o._delay=h=R.delay,o._start+=h,R.delay=0),E.to(v,R,C?C(T,v,M):0),E._ease=Ke.none;E.duration()?c=h=0:o.timeline=0}else if(x){bs(wn(E.vars.defaults,{ease:"none"})),E._ease=er(x.ease||i.ease||"none");var X=0,O,V,W;if(Xt(x))x.forEach(function(Q){return E.to(M,Q,">")}),E.duration();else{R={};for(I in x)I==="ease"||I==="easeEach"||WM(I,x[I],R,x.easeEach);for(I in R)for(O=R[I].sort(function(Q,Y){return Q.t-Y.t}),X=0,T=0;T<O.length;T++)V=O[T],W={ease:V.e,duration:(V.t-(T?O[T-1].t:0))/100*c},W[I]=V.v,E.to(M,W,X),X+=W.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!Fl&&(Ai=si(o),_t.killTweensOf(M),Ai=0),Xn(S,si(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!x&&o._start===Ot(S._time)&&nn(u)&&yM(si(o))&&S.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-h)||0)),m&&xf(si(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ct&&!h?l:i<ct?0:i,f,p,x,_,m,d,S,M,E;if(!c)TM(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(f=Ot(u%_),u===l?(x=this._repeat,f=c):(x=~~(u/_),x&&x===u/_&&(f=c,x--),f>c&&(f=c)),d=this._yoyo&&x&1,d&&(E=this._yEase,f=c-f),m=Qr(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=u,this;x!==m&&(M&&this._yEase&&Df(M,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(Ot(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(vf(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(E||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!x&&(En(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;M&&M.render(i<0?i:!f&&d?-ct:M._dur*M._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&sl(this,i,r,a),En(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&sl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!r&&!(h&&!o)&&(u||o||d)&&(En(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Ns||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Xl(this,l),c=this._ease(l/this._dur),GM(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(qa(this,0),this.parent||_f(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ai&&Ai.vars.overwrite!==!0)._first||vs(this),this.parent&&a!==this.timeline.totalDuration()&&es(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Tn(i):o,c=this._ptLookup,h=this._pt,u,f,p,x,_,m,d;if((!r||r==="all")&&vM(o,l))return r==="all"&&(this._pt=0),vs(this);for(u=this._op=this._op||[],r!=="all"&&(Nt(r)&&(_={},rn(r,function(S){return _[S]=1}),r=_),r=VM(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],r==="all"?(u[d]=r,x=f,p={}):(p=u[d]=u[d]||{},x=r);for(_ in x)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Wa(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&vs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return As(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return As(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return _t.killTweensOf(i,r,a)},e}(Fs);wn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(s){wt[s]=function(){var e=new Qt,t=ol.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ql=function(e,t,n){return e[t]=n},kf=function(e,t,n){return e[t](n)},XM=function(e,t,n,i){return e[t](i.fp,n)},qM=function(e,t,n){return e.setAttribute(t,n)},Yl=function(e,t){return Mt(e[t])?kf:Ol(e[t])&&e.setAttribute?qM:ql},zf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jM=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},KM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ZM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Gf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},sn=function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||zf,this.d=l||this,this.set=c||ql,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ZM,this.m=n,this.mt=r,this.tween=i},s}();rn(Gl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Hl[s]=1});dn.TweenMax=dn.TweenLite=wt;dn.TimelineLite=dn.TimelineMax=Qt;_t=new Qt({sortChildren:!1,defaults:Jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=Pf;var tr=[],ba={},$M=[],Yh=0,JM=0,No=function(e){return(ba[e]||$M).map(function(t){return t()})},ul=function(){var e=Date.now(),t=[];e-Yh>2&&(No("matchMediaInit"),tr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=xn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),No("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Yh=e,No("matchMedia"))},Vf=function(){function s(t,n){this.selector=n&&ll(n),this.data=[],this._r=[],this.isReverted=!1,this.id=JM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Mt(n)&&(r=i,i=n,n=Mt);var a=this,o=function(){var c=vt,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=ll(r)),vt=a,u=i.apply(a,arguments),Mt(u)&&a._r.push(u),vt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Mt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof wt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=tr.length;o--;)tr[o].id===this.id&&tr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),QM=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){jn(n)||(n={matches:n});var a=new Vf(0,r||this.scope),o=a.conditions={},l,c,h;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=xn.matchMedia(n[c]),l&&(tr.indexOf(a)<0&&tr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ul):l.addEventListener("change",ul)));return h&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ua={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Rf(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Nt(e)&&(e=Tn(e)[0]);var r=Ji(e||{}).get,a=n?mf:pf;return n==="native"&&(n=""),e&&(t?a((cn[t]&&cn[t].get||r)(e,t,n,i)):function(o,l,c){return a((cn[o]&&cn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Tn(e),e.length>1){var i=e.map(function(h){return an.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=cn[t],o=Ji(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Nr._pt=0,u.init(e,n?h+n:h,Nr,0,[e]),u.render(1,u),Nr._pt&&jl(1,Nr)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=an.to(e,rr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,Jr.ease)),Gh(Jr,e||{})},config:function(e){return Gh(fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!cn[o]&&!dn[o]&&La(t+" effect requires "+o+" plugin.")}),Po[t]=function(o,l,c){return n(Tn(o),wn(l||{},r),c)},a&&(Qt.prototype[t]=function(o,l,c){return this.add(Po[t](o,jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):Ke},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,r;for(n.smoothChildTiming=nn(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)r=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&Xn(n,i,i._start-i._delay),i=r;return Xn(_t,n,0),n},context:function(e,t){return e?new Vf(e,t):vt},matchMedia:function(e){return new QM(e)},matchMediaRefresh:function(){return tr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ul()},addEventListener:function(e,t){var n=ba[e]||(ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PM,wrapYoyo:IM,distribute:Sf,random:Ef,snap:Tf,normalize:LM,getUnit:Vt,clamp:AM,splitColor:Cf,toArray:Tn,selector:ll,mapRange:Af,pipe:RM,unitize:CM,interpolate:DM,shuffle:yf},install:cf,effects:Po,ticker:un,updateRoot:Qt.updateRoot,plugins:cn,globalTimeline:_t,core:{PropTween:sn,globals:hf,Tween:wt,Timeline:Qt,Animation:Fs,getCache:Ji,_removeLinkedListItem:Wa,reverting:function(){return Wt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Fl=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ua[s]=wt[s]});un.add(Qt.updateRoot);Nr=Ua.to({},{duration:0});var ey=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ty=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=ey(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Fo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Nt(r)&&(l={},rn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ty(o,r)}}}},an=Ua.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fo("roundProps",cl),Fo("modifiers"),Fo("snap",Tf))||Ua;wt.version=Qt.version=an.version="3.12.2";lf=1;Bl()&&ts();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jh,wi,Hr,Kl,Ki,Kh,Zl,ny=function(){return typeof window<"u"},di={},Xi=180/Math.PI,Gr=Math.PI/180,Cr=Math.atan2,Zh=1e8,$l=/([A-Z])/g,iy=/(left|right|width|margin|padding|x)/i,ry=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ay=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ly=function(e,t,n){return e.style[t]=n},cy=function(e,t,n){return e.style.setProperty(t,n)},hy=function(e,t,n){return e._gsap[t]=n},uy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fy=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},dy=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},gt="transform",zn=gt+"Origin",py=function s(e,t){var n=this,i=this.target,r=i.style;if(e in di&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ai(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ai(i,e);else return qn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(gt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=gt}(r||t)&&this.props.push(e,t,r[e])},qf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},my=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace($l,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Zl(),(!r||!r.isStart)&&!n[gt]&&(qf(n),i.uncache=1)}},Yf=function(e,t){var n={target:e,props:[],revert:my,save:py};return e._gsap||an.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},jf,dl=function(e,t){var n=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return n.style?n:wi.createElement(e)},Yn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace($l,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ns(t)||t,1)||""},$h="O,Moz,ms,Ms,Webkit".split(","),ns=function(e,t,n){var i=t||Ki,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($h[a]+e in r););return a<0?null:(a===3?"ms":a>=0?$h[a]:"")+e},pl=function(){ny()&&window.document&&(jh=window,wi=jh.document,Hr=wi.documentElement,Ki=dl("div")||{style:{}},dl("div"),gt=ns(gt),zn=gt+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jf=!!ns("perspective"),Zl=an.core.reverting,Kl=1)},Oo=function s(e){var t=dl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Hr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Hr.removeChild(t),this.style.cssText=r,a},Jh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kf=function(e){var t;try{t=e.getBBox()}catch{t=Oo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Oo||(t=Oo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Jh(e,["x","cx","x1"])||0,y:+Jh(e,["y","cy","y1"])||0,width:0,height:0}:t},Zf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kf(e))},Os=function(e,t){if(t){var n=e.style;t in di&&t!==zn&&(t=gt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace($l,"-$1").toLowerCase())):n.removeAttribute(t)}},Ri=function(e,t,n,i,r,a){var o=new sn(e._pt,t,n,0,1,a?Xf:Wf);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Qh={deg:1,rad:1,turn:1},_y={grid:1,flex:1},Ni=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ki.style,l=iy.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",p=i==="%",x,_,m,d;return i===a||!r||Qh[i]||Qh[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),d=e.getCTM&&Zf(e),(p||a==="%")&&(di[t]||~t.indexOf("adius"))?(x=d?e.getBBox()[l?"width":"height"]:e[h],Tt(p?r/x*u:r/100*x)):(o[l?"width":"height"]=u+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===wi||!_.appendChild)&&(_=wi.body),m=_._gsap,m&&p&&m.width&&l&&m.time===un.time&&!m.uncache?Tt(r/m.width*u):((p||a==="%")&&!_y[Yn(_,"display")]&&(o.position=Yn(e,"position")),_===e&&(o.position="static"),_.appendChild(Ki),x=Ki[h],_.removeChild(Ki),o.position="absolute",l&&p&&(m=Ji(_),m.time=un.time,m.width=_[h]),Tt(f?x*r/u:x&&r?u/x*r:0))))},ai=function(e,t,n,i){var r;return Kl||pl(),t in qn&&t!=="transform"&&(t=qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),di[t]&&t!=="transform"?(r=ks(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Fa(Yn(e,zn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Na[t]&&Na[t](e,t,n)||Yn(e,t)||ff(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ni(e,t,r,n)+n:r},gy=function(e,t,n,i){if(!n||n==="none"){var r=ns(t,e,1),a=r&&Yn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Yn(e,"borderTopColor"))}var o=new sn(this._pt,e.style,t,0,1,Hf),l=0,c=0,h,u,f,p,x,_,m,d,S,M,E,T;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Yn(e,t)||i,e.style[t]=n),h=[n,i],Pf(h),n=h[0],i=h[1],f=n.match(Ur)||[],T=i.match(Ur)||[],T.length){for(;u=Ur.exec(i);)m=u[0],S=i.substring(l,u.index),x?x=(x+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(x=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,E=_.substr((p+"").length),m.charAt(1)==="="&&(m=zr(p,m)+E),d=parseFloat(m),M=m.substr((d+"").length),l=Ur.lastIndex-M.length,M||(M=M||fn.units[t]||E,l===i.length&&(i+=M,o.e+=M)),E!==M&&(p=Ni(e,t,_,M)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:d-p,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Xf:Wf;return af.test(i)&&(o.e=0),this._pt=o,o},eu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=eu[n]||n,t[1]=eu[i]||i,t.join(" ")},vy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],di[o]&&(l=1,o=o==="transformOrigin"?zn:gt),Os(n,o);l&&(Os(n,gt),a&&(a.svg&&n.removeAttribute("transform"),ks(n,1),a.uncache=1,qf(i)))}},Na={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new sn(e._pt,t,n,0,0,vy);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Bs=[1,0,0,1,0,0],$f={},Jf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},tu=function(e){var t=Yn(e,gt);return Jf(t)?Bs:t.substr(7).match(sf).map(Tt)},Jl=function(e,t){var n=e._gsap||Ji(e),i=e.style,r=tu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Bs:r):(r===Bs&&!e.offsetParent&&e!==Hr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Hr.appendChild(e)),r=tu(e),l?i.display=l:Os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Hr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ml=function(e,t,n,i,r,a){var o=e._gsap,l=r||Jl(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],d=l[4],S=l[5],M=t.split(" "),E=parseFloat(M[0])||0,T=parseFloat(M[1])||0,R,P,I,v;n?l!==Bs&&(P=p*m-x*_)&&(I=E*(m/P)+T*(-_/P)+(_*S-m*d)/P,v=E*(-x/P)+T*(p/P)-(p*S-x*d)/P,E=I,T=v):(R=Kf(e),E=R.x+(~M[0].indexOf("%")?E/100*R.width:E),T=R.y+(~(M[1]||M[0]).indexOf("%")?T/100*R.height:T)),i||i!==!1&&o.smooth?(d=E-c,S=T-h,o.xOffset=u+(d*p+S*_)-d,o.yOffset=f+(d*x+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[zn]="0px 0px",a&&(Ri(a,o,"xOrigin",c,E),Ri(a,o,"yOrigin",h,T),Ri(a,o,"xOffset",u,o.xOffset),Ri(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+T)},ks=function(e,t){var n=e._gsap||new Nf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Yn(e,zn)||"0",h,u,f,p,x,_,m,d,S,M,E,T,R,P,I,v,C,q,X,O,V,W,Q,Y,Z,oe,ee,Ee,ae,j,te,de;return h=u=f=_=m=d=S=M=E=0,p=x=1,n.svg=!!(e.getCTM&&Zf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),i.scale=i.rotate=i.translate="none"),P=Jl(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ml(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,P)),T=n.xOrigin||0,R=n.yOrigin||0,P!==Bs&&(q=P[0],X=P[1],O=P[2],V=P[3],h=W=P[4],u=Q=P[5],P.length===6?(p=Math.sqrt(q*q+X*X),x=Math.sqrt(V*V+O*O),_=q||X?Cr(X,q)*Xi:0,S=O||V?Cr(O,V)*Xi+_:0,S&&(x*=Math.abs(Math.cos(S*Gr))),n.svg&&(h-=T-(T*q+R*O),u-=R-(T*X+R*V))):(de=P[6],j=P[7],ee=P[8],Ee=P[9],ae=P[10],te=P[11],h=P[12],u=P[13],f=P[14],I=Cr(de,ae),m=I*Xi,I&&(v=Math.cos(-I),C=Math.sin(-I),Y=W*v+ee*C,Z=Q*v+Ee*C,oe=de*v+ae*C,ee=W*-C+ee*v,Ee=Q*-C+Ee*v,ae=de*-C+ae*v,te=j*-C+te*v,W=Y,Q=Z,de=oe),I=Cr(-O,ae),d=I*Xi,I&&(v=Math.cos(-I),C=Math.sin(-I),Y=q*v-ee*C,Z=X*v-Ee*C,oe=O*v-ae*C,te=V*C+te*v,q=Y,X=Z,O=oe),I=Cr(X,q),_=I*Xi,I&&(v=Math.cos(I),C=Math.sin(I),Y=q*v+X*C,Z=W*v+Q*C,X=X*v-q*C,Q=Q*v-W*C,q=Y,W=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Tt(Math.sqrt(q*q+X*X+O*O)),x=Tt(Math.sqrt(Q*Q+de*de)),I=Cr(W,Q),S=Math.abs(I)>2e-4?I*Xi:0,E=te?1/(te<0?-te:te):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jf(Yn(e,gt)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Tt(p),n.scaleY=Tt(x),n.rotation=Tt(_)+o,n.rotationX=Tt(m)+o,n.rotationY=Tt(d)+o,n.skewX=S+o,n.skewY=M+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[zn]=Fa(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?yy:jf?Qf:My,n.uncache=0,n},Fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bo=function(e,t,n){var i=Vt(t);return Tt(parseFloat(t)+parseFloat(Ni(e,"x",n+"px",i)))+i},My=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Qf(e,t)},Hi="0deg",gs="0px",Gi=") ",Qf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,x=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,S=n.target,M=n.zOrigin,E="",T=d==="auto"&&e&&e!==1||d===!0;if(M&&(u!==Hi||h!==Hi)){var R=parseFloat(h)*Gr,P=Math.sin(R),I=Math.cos(R),v;R=parseFloat(u)*Gr,v=Math.cos(R),a=Bo(S,a,P*v*-M),o=Bo(S,o,-Math.sin(R)*-M),l=Bo(S,l,I*v*-M+M)}m!==gs&&(E+="perspective("+m+Gi),(i||r)&&(E+="translate("+i+"%, "+r+"%) "),(T||a!==gs||o!==gs||l!==gs)&&(E+=l!==gs||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Gi),c!==Hi&&(E+="rotate("+c+Gi),h!==Hi&&(E+="rotateY("+h+Gi),u!==Hi&&(E+="rotateX("+u+Gi),(f!==Hi||p!==Hi)&&(E+="skew("+f+", "+p+Gi),(x!==1||_!==1)&&(E+="scale("+x+", "+_+Gi),S.style[gt]=E||"translate(0, 0)"},yy=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,x=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,S=n.forceCSS,M=parseFloat(a),E=parseFloat(o),T,R,P,I,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Gr,c*=Gr,T=Math.cos(l)*u,R=Math.sin(l)*u,P=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(h*=Gr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),P*=v,I*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),T*=v,R*=v)),T=Tt(T),R=Tt(R),P=Tt(P),I=Tt(I)):(T=u,I=f,R=P=0),(M&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(M=Ni(p,"x",a,"px"),E=Ni(p,"y",o,"px")),(x||_||m||d)&&(M=Tt(M+x-(x*T+_*P)+m),E=Tt(E+_-(x*R+_*I)+d)),(i||r)&&(v=p.getBBox(),M=Tt(M+i/100*v.width),E=Tt(E+r/100*v.height)),v="matrix("+T+","+R+","+P+","+I+","+M+","+E+")",p.setAttribute("transform",v),S&&(p.style[gt]=v)},Sy=function(e,t,n,i,r){var a=360,o=Nt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Xi:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Zh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Zh)%a-~~(c/a)*a)),e._pt=f=new sn(e._pt,t,n,i,c,sy),f.e=h,f.u="deg",e._props.push(n),f},nu=function(e,t){for(var n in t)e[n]=t[n];return e},Ty=function(e,t,n){var i=nu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,p,x;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[gt]=t,o=ks(n,1),Os(n,gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[gt],a[gt]=t,o=ks(n,1),a[gt]=c);for(l in di)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=Vt(c),x=Vt(h),u=p!==x?Ni(n,l,c,x):parseFloat(c),f=parseFloat(h),e._pt=new sn(e._pt,o,l,u,f-u,fl),e._pt.u=x||0,e._props.push(l));nu(o,i)};rn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Na[e>1?"border"+s:s]=function(o,l,c,h,u){var f,p;if(arguments.length<4)return f=a.map(function(x){return ai(o,x,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(x,_){return p[x]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,u)}});var ed={name:"css",register:pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,p,x,_,m,d,S,M,E,T,R,P,I;Kl||pl(),this.styles=this.styles||Yf(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(cn[_]&&Ff(_,t,n,i,e,r)))){if(p=typeof h,x=Na[_],p==="function"&&(h=h.call(n,i,e,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Us(h)),x)x(this,e,_,h,n)&&(P=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Ii.lastIndex=0,Ii.test(c)||(m=Vt(c),d=Vt(h)),d?m!==d&&(c=Ni(e,_,c,d)+d):m&&(h+=m),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),I.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Nt(c)&&~c.indexOf("random(")&&(c=Us(c)),Vt(c+"")||(c+=fn.units[_]||Vt(ai(e,_))||""),(c+"").charAt(1)==="="&&(c=ai(e,_))):c=ai(e,_),f=parseFloat(c),S=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in qn&&(_==="autoAlpha"&&(f===1&&ai(e,"visibility")==="hidden"&&u&&(f=0),I.push("visibility",0,o.visibility),Ri(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=qn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in di,M){if(this.styles.save(_),E||(T=e._gsap,T.renderTransform&&!t.parseTransform||ks(e,t.parseTransform),R=t.smoothOrigin!==!1&&T.smooth,E=this._pt=new sn(this._pt,o,gt,0,1,T.renderTransform,T,0,-1),E.dep=1),_==="scale")this._pt=new sn(this._pt,T,"scaleY",T.scaleY,(S?zr(T.scaleY,S+u):u)-T.scaleY||0,fl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(zn,0,o[zn]),h=xy(h),T.svg?ml(e,h,0,R,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==T.zOrigin&&Ri(this,T,"zOrigin",T.zOrigin,d),Ri(this,o,_,Fa(c),Fa(h)));continue}else if(_==="svgOrigin"){ml(e,h,1,R,0,this);continue}else if(_ in $f){Sy(this,T,_,f,S?zr(f,S+h):h);continue}else if(_==="smoothOrigin"){Ri(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Ty(this,h,e);continue}}else _ in o||(_=ns(_)||_);if(M||(u||u===0)&&(f||f===0)&&!ry.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),d=Vt(h)||(_ in fn.units?fn.units[_]:m),m!==d&&(f=Ni(e,_,c,d)),this._pt=new sn(this._pt,M?T:o,_,f,(S?zr(f,S+u):u)-f,!M&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?oy:fl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=ay);else if(_ in o)gy.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,r);else if(_!=="parseTransform"){zl(_,h);continue}M||(_ in o?I.push(_,0,o[_]):I.push(_,1,c||e[_])),a.push(_)}}P&&Gf(this)},render:function(e,t){if(t.tween._time||!Zl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ai,aliases:qn,getSetter:function(e,t,n){var i=qn[t];return i&&i.indexOf(",")<0&&(t=i),t in di&&t!==zn&&(e._gsap.x||ai(e,"x"))?n&&Kh===n?t==="scale"?uy:hy:(Kh=n||{})&&(t==="scale"?fy:dy):e.style&&!Ol(e.style[t])?ly:~t.indexOf("-")?cy:Yl(e,t)},core:{_removeProperty:Os,_getMatrix:Jl}};an.utils.checkPrefix=ns;an.core.getStyleSaver=Yf;(function(s,e,t,n){var i=rn(s+","+e+","+t,function(r){di[r]=1});rn(e,function(r){fn.units[r]="deg",$f[r]=1}),qn[i[13]]=s+","+e,rn(n,function(r){var a=r.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fn.units[s]="px"});an.registerPlugin(ed);var vn=an.registerPlugin(ed)||an;vn.core.Tween;class Ey{constructor(e){this.x=0,this.y=.35,this.z=5.5,this.world=e,this.velocityY=Math.random()/1e3,this.velocityX=Math.random()/1e3,this.init()}init(){window.addEventListener("keydown",r=>{const a=document.querySelector("#left"),o=document.querySelector("#right"),l=document.querySelector("#up"),c=document.querySelector("#down");(r.key==="ArrowRight"||r.key==="d"||r.key==="D")&&(vn.to(this,{velocityY:this.velocityY-2e-4,ease:"power4"}),o.setAttribute("class","controller active")),(r.key==="ArrowLeft"||r.key==="a"||r.key==="A")&&(vn.to(this,{velocityY:this.velocityY+2e-4,ease:"power4"}),a.setAttribute("class","controller active")),(r.key==="ArrowUp"||r.key==="w"||r.key==="W")&&(vn.to(this,{velocityX:this.velocityX+2e-4,ease:"power4"}),l.setAttribute("class","controller active")),(r.key==="ArrowDown"||r.key==="s"||r.key==="S")&&(vn.to(this,{velocityX:this.velocityX-2e-4,ease:"power4"}),c.setAttribute("class","controller active"))}),window.addEventListener("keyup",r=>{const a=document.querySelector("#left"),o=document.querySelector("#right"),l=document.querySelector("#up"),c=document.querySelector("#down");(r.key==="ArrowRight"||r.key==="d"||r.key==="D")&&o.setAttribute("class","controller"),(r.key==="ArrowLeft"||r.key==="a"||r.key==="A")&&a.setAttribute("class","controller"),(r.key==="ArrowUp"||r.key==="w"||r.key==="W")&&l.setAttribute("class","controller"),(r.key==="ArrowDown"||r.key==="s"||r.key==="S")&&c.setAttribute("class","controller")});const e=document.querySelector("#left"),t=document.querySelector("#right"),n=document.querySelector("#up"),i=document.querySelector("#down");e.addEventListener("mousedown",r=>{const o=setInterval(()=>{vn.to(this,{velocityY:this.velocityY+2e-4,ease:"power4"})},100);e.setAttribute("class","controller active"),e.addEventListener("mouseup",l=>{e.setAttribute("class","controller"),clearInterval(o)})}),t.addEventListener("mousedown",r=>{const o=setInterval(()=>{vn.to(this,{velocityY:this.velocityY-2e-4,ease:"power4"})},100);t.setAttribute("class","controller active"),t.addEventListener("mouseup",l=>{t.setAttribute("class","controller"),clearInterval(o)})}),n.addEventListener("mousedown",r=>{const o=setInterval(()=>{vn.to(this,{velocityX:this.velocityX+2e-4,ease:"power4"})},100);n.setAttribute("class","controller active"),n.addEventListener("mouseup",l=>{n.setAttribute("class","controller"),clearInterval(o)})}),i.addEventListener("mousedown",r=>{const o=setInterval(()=>{vn.to(this,{velocityX:this.velocityX-2e-4,ease:"power4"})},100);i.setAttribute("class","controller active"),i.addEventListener("mouseup",l=>{i.setAttribute("class","controller"),clearInterval(o)})})}update(){this.velocityX!==0&&(this.world.camera.rotation.x>.5&&(this.velocityX=-Math.random()/1e3),this.world.camera.rotation.x<-.5&&(this.velocityX=Math.random()/1e3),this.world.camera.rotation.x+=this.velocityX),this.velocityY!==0&&(this.world.camera.rotation.y>.5&&(this.velocityY=-Math.random()/1e3),this.world.camera.rotation.y<-.5&&(this.velocityY=Math.random()/1e3),this.world.camera.rotation.y+=this.velocityY)}}function iu(s,e){return Math.floor(Math.random()*(e-s+1))+s}const Ma=(s,e)=>Math.random()*(e-s)+s;class by{constructor(e){this.world=e;const t=new Ga,n=t.setPath("src/assets/").load("spaceDust2.png"),i=t.setPath("src/assets/").load("nebula1.png"),r=t.setPath("src/assets/").load("nebula2.png"),a=t.setPath("src/assets/").load("nebula3.png"),o=t.setPath("src/assets/").load("nebula4.png"),l=[n,i,r,a,o];this.dustCluster=[],this.radius=55,this.center=new k(0,0,0),this.rotateAngle=0;for(let c=0;c<200;c++){const h=new ka(Ma(30,50),Ma(20,30)),u=new wx({map:l[iu(0,2)],transparent:!0,depthWrite:!1,side:Mn,blending:Rs,depthTest:!0});let f=new en(h,u);const p=iu(0,360),x=this.radius+Math.random()*30;f.position.set(Math.cos(Math.PI/180*p)*x,Math.random()*50-25,Math.sin(Math.PI/180*p)*x),f.alpha=p,f.distance=x,f.material.opacity=Ma(.2,.55),this.dustCluster.push(f)}this.world.scene.add(...this.dustCluster)}update(e){this.rotateAngle+=e,this.dustCluster.forEach((t,n)=>{t.rotation.z-=Ma(2e-5,2e-4),t.position.x=Math.cos(Math.PI/180*t.alpha-this.rotateAngle/40)*t.distance,t.position.z=Math.sin(Math.PI/180*t.alpha-this.rotateAngle/40)*t.distance})}}class Ay{constructor(e,t){this.world=e,this.effectComposer=new lv(t),this.effectComposer.addPass(new cv(this.world.scene,this.world.camera)),this.bloomPass=new $r(new Nl(this.world.sizer.width,this.world.sizer.height),.7,0,0),this.effectComposer.addPass(this.bloomPass)}resize(){this.effectComposer.setSize(this.world.sizer.width,this.world.sizer.height)}update(){this.effectComposer.render()}}const wy=`varying vec2 vUv;
uniform sampler2D textureMap; 

void main() {
  float pi = 3.14159265359;
  vec2 st = vUv - 0.5;
  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv);

  if (dist < 0.30) {
    discard;
  }

  vec3 whiteColor = vec3(1.0);
  float strength = mix(color.rgb * 2.3, whiteColor, dist).r;

  vec3 finalCol = color.rgb * strength;
  float alpha = pow(dist* 2.02, 2.0);

  gl_FragColor = vec4(finalCol.rgb, 1.0 - alpha);
}`,Ry=`varying vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`,Cy=`varying vec2 vUv;
uniform sampler2D textureMap; 
uniform float uTime;

void main() {
  float pi = 3.14159265359;

  vec4 color1 = vec4(0.9961, 1.0, 0.705882353, 1.0);

  vec2 st = vUv - 0.5;
  float time_ = uTime/10.0;
  float x = cos(time_) * (vUv.x - 0.5) + sin(time_) * (vUv.y - 0.5) + 0.5;
  float y = cos(time_) * (vUv.y - 0.5) - sin(time_) * (vUv.x - 0.5) + 0.5;
  vec2 vUv_ = vec2(x, y);

  float dist = distance(st, vec2(0.0));
  vec4 color = texture2D(textureMap, vUv_ * 1.5);

  float strength = smoothstep(0.0, 0.008, color.r);

  vec4 c = mix(color, color1, strength);
  color = c;

  if (color.r < 0.3) {
    float strength = smoothstep(-0.04, 0.3,color.r);
    color = color + strength;
  }

  if (color.r < 0.0383) {
    color = vec4(1.0, 0.5, 0.1, 1.0);
  }

  vec4 finalCol = color;

  gl_FragColor = finalCol;
}`,Ly=`varying vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`;class Py{constructor(e){this.world=e,this.setupModel()}update(){this.model&&this.model.traverse(e=>{if(e.isMesh){const t=e.name;t==="Blackhole_ring_Blackhole_ring_0"&&e.rotation.set(0,0,this.world.clock.getElapsedTime()/10),t==="Blackhole_core002_Blackhole_ring2_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_001_Blackhole_skin_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_003_Blackhole_skin_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_005_Blackhole_skin_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_006_Blackhole_skin_inner_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_008_Blackhole_skin_inner_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_009_Blackhole_skin_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_010_Blackhole_skin_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_012_Blackhole_skin_inner_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime()),t==="Blackhole_skin_013_Blackhole_ring2_0"&&(e.material.uniforms.uTime.value=this.world.clock.getElapsedTime())}})}loadGLTFModelAsync(e){const t=new Kt({uniforms:{textureMap:{value:this.world.loader.textureLoader.setPath("src/assets/blackhole/textures/").load("Blackhole_ring_emissive.jpeg")}},fragmentShader:wy,vertexShader:Ry,transparent:!0,depthWrite:!1,name:"Blackhole_disk"}),n=new Kt({uniforms:{textureMap:{value:this.world.loader.textureLoader.setPath("src/assets/").load("back.png")},uTime:{value:0}},fragmentShader:Cy,vertexShader:Ly,transparent:!0,depthWrite:!1,name:"Blackhole_ring"});return new Promise((i,r)=>{this.world.loader.gltfLoader.load(e,a=>{const o=a.scene;o.scale.set(70,70,70),o.traverse(l=>{if(l.isMesh){const c=l.name;c==="Blackhole_core002_Blackhole_ring2_0"&&(l.material=n),c==="Blackhole_skin_001_Blackhole_skin_0"&&(l.material=n),c==="Blackhole_skin_003_Blackhole_skin_0"&&(l.material=n),c==="Blackhole_skin_005_Blackhole_skin_0"&&(l.material=n),c==="Blackhole_skin_006_Blackhole_skin_inner_0"&&(l.material=n),c==="Blackhole_skin_008_Blackhole_skin_inner_0"&&(l.material=n),c==="Blackhole_skin_009_Blackhole_skin_0"&&(l.material=n),c==="Blackhole_skin_010_Blackhole_skin_0"&&(l.material=n),c==="Blackhole_skin_012_Blackhole_skin_inner_0"&&(l.material=n),c==="Blackhole_skin_013_Blackhole_ring2_0"&&(l.material=n),c==="Blackhole_ring_Blackhole_ring_0"&&(l.scale.set(.5,.5,.5),l.material=t)}}),i(o)},void 0,a=>{r(a)})})}async setupModel(){try{const e=await this.loadGLTFModelAsync("src/assets/blackhole/scene.gltf");this.model=e,this.model.rotation.x=Math.PI/180*10,this.world.scene.add(this.model)}catch(e){console.error("Error loading model or texture:",e)}}}class Iy{constructor(e){this.world=e,this.isActive=!1,this.geometry=new Rn,this.material=new Rl({size:.5,map:new Ga().load("src/assets/star.png"),transparent:!0,depthWrite:!1,side:Mn,blending:Rs,depthTest:!0}),this.speed=[],this.init(),this.points=new Ou(this.geometry,this.material),this.world.scene.add(this.points)}init(){const e=[];for(let t=0;t<500;t++){const n=Math.random()*200-50,i=Math.random()*200-50,r=Math.random()*10;this.speed.push({velocity:0,acceleration:Math.random()/300}),e.push(n,i,r)}this.geometry.setAttribute("position",new bn(e,3))}update(){if(!this.isActive)return;const e=this.points.geometry.getAttribute("position"),t=e.array;for(let n=0;n<t.length;n+=3){const i=n/3;t[n+2]+=this.speed[i].velocity,this.speed[i].velocity+=this.speed[i].acceleration,t[n+2]>this.world.camera.position.z+300&&(t[n+2]=Math.random()*100-50,this.speed[i].velocity=0)}e.needsUpdate=!0}}class Dy{constructor(e){this.world=e,this.mixer,this.duration,this.action,this.isOpen=!1,this.loading=0,this.model,this.light,this.init()}init(){const{x:e,y:t,z:n}=this.world.camera.position;this.world.loader.gltfLoader.load("src/assets/gate/scene.gltf",i=>{const r=i.scene;this.model=r,this.mixer=new rv(r),this.action=this.mixer.clipAction(i.animations[0]),this.duration=i.animations[0].duration,this.action.clampWhenFinished=!0,this.action.setLoop(uu,1),this.action.play();const a=new k(e,t,n-1.5);r.rotation.y=Math.PI,r.position.copy(a);const o=new Vu(16764107,1,5,Math.PI/180*30);o.position.set(e,t+1.3,n+.5),o.target=r,this.light=o,this.world.scene.add(r,o)},i=>{const r=document.querySelector(".progress");this.loading=i.loaded/i.total*100,r.style.width=i.loaded/(i.total*1.2)*100+"%"})}open(){this.isOpen=!0,this.action.paused=!1;const e=this.world.light;vn.timeline().to(e.light,{intensity:1.5,ease:"power0",duration:3,delay:2.5}).to(e.light,{intensity:.3,duration:2,ease:"sine",onComplete:()=>{this.world.stars.isActive=!0}}),setTimeout(()=>{vn.to(this.model.rotation,{z:-45*Math.PI/180,ease:"power3",duration:5}),vn.timeline().to(this.model.position,{x:0,z:150,duration:15,ease:"power1",onComplete:()=>{this.world.scene.remove(this.model,this.light)}}),this.world.camera.shake()},15e3)}update(e){if(this.mixer)if(this.isOpen)this.mixer.update(e/2);else{const t=document.querySelector(".progress");if(this.mixer.time<this.duration*(45/100))this.mixer.update(e),t.style.width=`${85+this.mixer.time/(this.duration*(45/100))*15}%`;else if(this.action.paused===!1){this.action.paused=!0;const n=document.querySelector("#loader");n.style.display="none"}else return}}}class Uy{constructor(e){this.world=e,this.light=new Wx(16777215,0),this.world.scene.add(this.light)}}class Ny{constructor(e){os(this,"openUI",()=>{const e=document.createElement("button");e.textContent="Open the gate",e.setAttribute("name","Open"),e.setAttribute("id","open-btn");const t=document.querySelector("#container");t.appendChild(e),e.addEventListener("click",()=>{this.world.gate.open(),t.removeChild(e)})});os(this,"controllerUI",()=>{const e=document.createElement("button"),t=document.createElement("button"),n=document.createElement("button"),i=document.createElement("button");e.textContent="A",t.textContent="D",i.textContent="S",n.textContent="W",e.setAttribute("id","left"),e.setAttribute("class","controller"),t.setAttribute("id","right"),t.setAttribute("class","controller"),i.setAttribute("id","down"),i.setAttribute("class","controller"),n.setAttribute("id","up"),n.setAttribute("class","controller");const r=document.querySelector("#container");r.appendChild(e),r.appendChild(t),r.appendChild(i),r.appendChild(n)});this.world=e,this.openUI(),this.controllerUI()}}class Fy{constructor(e){this.loader=cM,this.domElement=e,this.clock=new Wu,this.sizer=new pv,this.scene=new mv(this),this.renderer=new fv(this),this.camera=new dv(this),this.ton618_gltf=new Py(this),this.spaceDust=new by(this),this.stars=new Iy(this),this.light=new Uy(this),this.gate=new Dy(this),this.UI=new Ny(this),this.controller=new Ey(this),this.postprocessor=new Ay(this,this.renderer),this.lastTimestamp=Date.now(),window.addEventListener("resize",()=>this.resize())}resize(){this.renderer.resize(),this.camera.resize()}update(){const e=(Date.now()-this.lastTimestamp)/1e3;this.lastTimestamp=Date.now(),this.renderer.update(),this.postprocessor.update(),this.spaceDust.update(e),this.ton618_gltf.update(),this.stars.update(),this.gate.update(e),this.controller.update(),requestAnimationFrame(()=>{this.update()})}}const Oy=new Fy(document.querySelector("#canvas"));function By(){Oy.update()}window.addEventListener("load",()=>{By()});
