"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(k,p){
var s=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray,j=require('@stdlib/blas-ext-base-sapxsumpw/dist').ndarray;function x(r,e,a,n){var i,q;return r<=0?NaN:r===1||a===0?e[n]:(i=s(l(r,e,a,n)/r),q=s(j(r,-i,e,a,n)/r),s(i+q))}p.exports=x
});var m=u(function(z,o){
var w=require('@stdlib/strided-base-stride2offset/dist'),R=t();function _(r,e,a){return R(r,e,a,w(r,a))}o.exports=_
});var d=u(function(A,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),F=t();E(c,"ndarray",F);y.exports=c
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),v,f=T(O(__dirname,"./native.js"));b(f)?v=g:v=f;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
