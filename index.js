// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).smeanpn=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,c,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=F.exec(r);n;)(e=r.slice(o,F.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=F.lastIndex,n=F.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function P(r){var e,t,n;if(!V(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var $,N=Object.prototype,C=N.toString,R=N.__defineGetter__,B=N.__defineSetter__,q=N.__lookupGetter__,L=N.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(q.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var M=$;function G(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z="function"==typeof Math.fround?Math.fround:null;var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var D,J="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof J?J.toStringTag:"";D=U()?function(r){var e,t,n,o,i;if(null==r)return X.call(r);t=r[Y],i=Y,e=null!=(o=r)&&z.call(o,i);try{r[Y]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return X.call(r)};var H=D,K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null;var er,tr="function"==typeof Float32Array?Float32Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,5e40]),t=e,r=(K&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Q}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=new er(1);var or="function"==typeof Z?Z:function(r){return nr[0]=r,nr[0]};var ir=Object,ar=/./;function cr(r){return"boolean"==typeof r}var ur=Boolean,fr=Boolean.prototype.toString;var lr=U();function sr(r){return"object"==typeof r&&(r instanceof ur||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function pr(r){return cr(r)||sr(r)}function gr(){return new Function("return this;")()}G(pr,"isPrimitive",cr),G(pr,"isObject",sr);var dr="object"==typeof self?self:null,yr="object"==typeof window?window:null,hr="object"==typeof global?global:null,br="object"==typeof globalThis?globalThis:null;var vr=function(r){if(arguments.length){if(!cr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return gr()}if(br)return br;if(dr)return dr;if(yr)return yr;if(hr)return hr;throw new Error("unexpected error. Unable to resolve global object.")}(),wr=vr.document&&vr.document.childNodes,mr=Int8Array;function jr(){return/^\s*function\s*([^(]*)/i}var _r,Er=/^\s*function\s*([^(]*)/i;G(jr,"REGEXP",Er),_r=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Sr=_r;function Ar(r){return null!==r&&"object"==typeof r}var xr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ar);function kr(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Er.exec(n.toString()))return e[1]}return Ar(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Ar,"isObjectLikeArray",xr);var Or="function"==typeof ar||"object"==typeof mr||"function"==typeof wr?function(r){return kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?kr(r).toLowerCase():e};var Fr,Tr,Ir=Object.getPrototypeOf;Tr=Object.getPrototypeOf,Fr="function"===Or(Tr)?Ir:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Vr=Fr;function Pr(r){return null==r?null:(r=ir(r),Vr(r))}function $r(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===H(r))return!0;r=Pr(r)}return!1}function Nr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return $r(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var Cr=Math.floor;function Rr(r,e,t,n){var o,i,a,c,u,f,l,s,p,g,d,y,h;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(d=0,h=0;h<r;h++)d=or(d+e[o]),o+=t;return d}if(r<=128){for(i=e[o],a=e[o+t],c=e[o+2*t],u=e[o+3*t],f=e[o+4*t],l=e[o+5*t],s=e[o+6*t],p=e[o+7*t],o+=8*t,g=r%8,h=8;h<r-g;h+=8)i=or(i+e[o]),a=or(a+e[o+t]),c=or(c+e[o+2*t]),u=or(u+e[o+3*t]),f=or(f+e[o+4*t]),l=or(l+e[o+5*t]),s=or(s+e[o+6*t]),p=or(p+e[o+7*t]),o+=8*t;for(d=or(or(or(i+a)+or(c+u))+or(or(f+l)+or(s+p)));h<r;h++)d=or(d+e[o]),o+=t;return d}return y=Cr(r/2),or(Rr(y-=y%8,e,t,o)+Rr(r-y,e,t,o+y*t))}function Br(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o=or(o+e[n]),n+=t;return o}return Rr(r,e,t,n)}G(Br,"ndarray",Rr);var qr,Lr=Nr((0,r.join)(__dirname,"./native.js")),Mr=qr=$r(Lr)?Br:Lr;const{ndarray:Gr}=qr;function Zr(r,e,t,n,o){var i,a,c,u,f,l,s,p,g,d,y,h,b;if(r<=0)return 0;if(1===r||0===n)return or(e+t[o]);if(i=o,r<8){for(y=0,b=0;b<r;b++)y=or(y+or(e+t[i])),i+=n;return y}if(r<=128){for(a=or(e+t[i]),c=or(e+t[i+n]),u=or(e+t[i+2*n]),f=or(e+t[i+3*n]),l=or(e+t[i+4*n]),s=or(e+t[i+5*n]),p=or(e+t[i+6*n]),g=or(e+t[i+7*n]),i+=8*n,d=r%8,b=8;b<r-d;b+=8)a=or(a+or(e+t[i])),c=or(c+or(e+t[i+n])),u=or(u+or(e+t[i+2*n])),f=or(f+or(e+t[i+3*n])),l=or(l+or(e+t[i+4*n])),s=or(s+or(e+t[i+5*n])),p=or(p+or(e+t[i+6*n])),g=or(g+or(e+t[i+7*n])),i+=8*n;for(y=or(or(or(a+c)+or(u+f))+or(or(l+s)+or(p+g)));b<r;b++)y=or(y+or(e+t[i])),i+=n;return y}return h=Cr(r/2),or(Zr(h-=h%8,e,t,n,i)+Zr(r-h,e,t,n,i+h*n))}function Wr(r,e,t,n){var o,i,a;if(r<=0)return 0;if(1===r||0===n)return or(e+t[0]);if(o=n<0?(1-r)*n:0,r<8){for(i=0,a=0;a<r;a++)i=or(i+or(e+t[o])),o+=n;return i}return Zr(r,e,t,n,o)}G(Wr,"ndarray",Zr);var Ur,Xr=Nr((0,r.join)(__dirname,"./native.js")),zr=Ur=$r(Xr)?Wr:Xr;const{ndarray:Dr}=Ur;function Jr(r,e,t){var n,o;return r<=0?NaN:1===r||0===t?e[0]:(n=or(Mr(r,e,t)/r),o=or(zr(r,-n,e,t)/r),or(n+o))}return G(Jr,"ndarray",(function(r,e,t,n){var o,i;return r<=0?NaN:1===r||0===t?e[n]:(o=or(Gr(r,e,t,n)/r),i=or(Dr(r,-o,e,t,n)/r),or(o+i))})),Jr}));
//# sourceMappingURL=index.js.map
