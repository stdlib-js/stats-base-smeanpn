// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";import t,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssumpw@v0.0.9-esm/index.mjs";import n,{ndarray as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sapxsumpw@v0.0.9-esm/index.mjs";function d(s,r,a){var d,i;return s<=0?NaN:1===s||0===a?r[0]:(d=e(t(s,r,a)/s),i=e(n(s,-d,r,a)/s),e(d+i))}function i(s,t,n,d){var i,m;return s<=0?NaN:1===s||0===n?t[d]:(i=e(r(s,t,n,d)/s),m=e(a(s,-i,t,n,d)/s),e(i+m))}s(d,"ndarray",i);export{d as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
