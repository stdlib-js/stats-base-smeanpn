"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=i(function(z,q){
var s=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/blas-ext-base-ssumpw/dist'),d=require('@stdlib/blas-ext-base-sapxsumpw/dist');function x(r,e,a){var u,n;return r<=0?NaN:r===1||a===0?e[0]:(u=s(j(r,e,a)/r),n=s(d(r,-u,e,a)/r),s(u+n))}q.exports=x
});var c=i(function(A,o){
var t=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray,R=require('@stdlib/blas-ext-base-sapxsumpw/dist').ndarray;function T(r,e,a,u){var n,p;return r<=0?NaN:r===1||a===0?e[u]:(n=t(F(r,e,a,u)/r),p=t(R(r,-n,e,a,u)/r),t(n+p))}o.exports=T
});var f=i(function(B,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=m(),E=c();_(l,"ndarray",E);y.exports=l
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=f(),v,w=b(O(__dirname,"./native.js"));g(w)?v=h:v=w;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
